# Release checklist

1. Run `node scripts/validate.mjs` and review the complete file list.
2. Confirm no private source documents, client screenshots, backup archives, credentials, or local work folders are included.
3. Keep the MIT license and license-scope documentation consistent, and preserve applicable third-party notices if third-party material is ever added.
4. Run the relevant scenarios in [VALIDATION.md](VALIDATION.md). Label unrun scenarios honestly; publish as experimental/release candidate until sufficient runtime evidence exists.
5. Choose a GitHub repository and public visibility explicitly. Publish only this package directory, not its parent workspace.
6. Verify the remote file tree, README rendering, and installable skill layout after upload. Tag a release only with truthful version and validation notes.

README installation uses manual copy so it does not depend on a guessed GitHub owner, a made-up repository URL, or an unverified installer command. Add a tested repository-specific install command after the destination exists.
