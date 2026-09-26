import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const skill = path.join(root, 'skills', 'aurea-ui');
const failures = [];
const check = (ok, message) => { if (!ok) failures.push(message); };
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (['.git', 'node_modules'].includes(entry.name)) return [];
    const full = path.join(dir, entry.name);
    if (entry.isSymbolicLink()) { failures.push(`Unexpected symlink: ${full}`); return []; }
    return entry.isDirectory() ? walk(full) : [full];
  });
}
for (const name of ['README.md', 'README.vi.md', 'SOURCES.md', 'LICENSE', 'LICENSE-STATUS.md', 'docs/VALIDATION.md', 'docs/RELEASE.md']) {
  check(fs.existsSync(path.join(root, name)), `Missing ${name}`);
}
const mainPath = path.join(skill, 'SKILL.md');
check(fs.existsSync(mainPath), 'Missing SKILL.md');
const main = fs.existsSync(mainPath) ? fs.readFileSync(mainPath, 'utf8') : '';
const front = main.match(/^---\r?\n([\s\S]*?)\r?\n---/);
check(Boolean(front), 'Invalid frontmatter delimiters');
if (front) {
  check(/^name: aurea-ui\r?$/m.test(front[1]), 'Skill name mismatch');
  const description = front[1].match(/^description: (.+)\r?$/m)?.[1];
  check(Boolean(description) && description.length <= 1024, 'Missing or oversized description');
}
const policyPath = path.join(skill, 'agents', 'openai.yaml');
check(fs.existsSync(policyPath), 'Missing Codex metadata');
if (fs.existsSync(policyPath)) check(/allow_implicit_invocation:\s*true/.test(fs.readFileSync(policyPath, 'utf8')), 'Implicit invocation not enabled');
const files = walk(root);
let links = 0;
for (const file of files) {
  const rel = path.relative(root, file);
  check(!/\.(zip|png|jpe?g|pdf|env)$/i.test(file), `Review unexpected binary/private artifact: ${rel}`);
  if (!/\.(md|yaml|yml)$/.test(file)) continue;
  const text = fs.readFileSync(file, 'utf8');
  check(!/[A-Za-z]:[\\/](Users|Downloads)[\\/]|\/home\/ubuntu\//.test(text), `Host-specific path: ${rel}`);
  check(!/\b(?:ghp_[A-Za-z0-9]{25,}|AKIA[A-Z0-9]{16})\b/.test(text), `Possible credential: ${rel}`);
  if (!file.endsWith('.md')) continue;
  check((text.match(/^```/gm) || []).length % 2 === 0, `Unbalanced code fence: ${rel}`);
  for (const match of text.matchAll(/\]\(([^\s)]+)\)/g)) {
    const target = match[1];
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    const clean = decodeURIComponent(target.split('#')[0]);
    const resolved = path.resolve(path.dirname(file), clean);
    check(resolved.startsWith(root + path.sep), `Link escapes package: ${rel}: ${target}`);
    check(fs.existsSync(resolved), `Broken link: ${rel}: ${target}`);
    links++;
  }
}
if (failures.length) {
  failures.forEach(message => console.error(`FAIL: ${message}`));
  process.exitCode = 1;
} else {
  console.log(`PASS: ${files.length} files; ${links} local links; entrypoint, fences, portability checks, invocation metadata.`);
  console.log('Scope: structural checks only. Runtime/UI tests and legal review are separate.');
}
