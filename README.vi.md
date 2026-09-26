# Aurea UI

Bộ skill UI/UX dùng chung cho nhiều AI agent: nghiên cứu, thiết kế, tạo asset, triển khai và kiểm chứng website/web app theo sản phẩm cụ thể, không phụ thuộc riêng Codex.

[English](README.md) · [Skill chính](skills/aurea-ui/SKILL.md) · [Nguồn tham khảo](SOURCES.md) · [Kiểm chứng](docs/VALIDATION.md)

## Khả năng

- Nghiên cứu ví dụ hiện tại khi làm landing page mới hoặc thay đổi lớn về hình ảnh.
- Chọn typography, palette, layout, mật độ nội dung và mức độ animation.
- Thiết kế responsive, accessibility, biểu mẫu và trạng thái tương tác.
- Hướng dẫn Motion/GSAP, animation khi cuộn và fallback cho 3D.
- Đọc screenshot dài ở kích thước đủ rõ; phân biệt quan sát với suy luận.
- Lập brief và tích hợp hero image, illustration, icon, mockup.
- Kiểm tra navigation, dữ liệu thật, lỗi lưu, rollback và kết quả trong trình duyệt.

Skill giữ ngữ cảnh thương hiệu và framework hiện có. Đây là tài liệu điều hướng agent, không phải thư viện component hay dịch vụ tạo ảnh.

## Cài đặt

Tải hoặc clone repo, rồi chép toàn bộ thư mục `skills/aurea-ui` vào nơi agent hỗ trợ cài skill. Giữ nguyên các thư mục con. Sao lưu bản cũ trước khi thay thế.

### Theo ứng dụng đang dùng

Chọn một vị trí: cài cá nhân để dùng xuyên dự án, hoặc cài trong thư mục gốc của dự án cần thiết kế. Thư mục `aurea-ui` phải chứa trực tiếp `SKILL.md`.

| Ứng dụng | Cài cá nhân | Cài theo dự án | Cách gọi |
| --- | --- | --- | --- |
| [Codex](https://learn.chatgpt.com/docs/build-skills) | `~/.agents/skills/aurea-ui/` | `.agents/skills/aurea-ui/` | `$aurea-ui` hoặc yêu cầu thiết kế phù hợp |
| [Claude Code](https://code.claude.com/docs/en/skills) | `~/.claude/skills/aurea-ui/` | `.claude/skills/aurea-ui/` | `/aurea-ui` hoặc yêu cầu thiết kế phù hợp |
| [Gemini CLI](https://geminicli.com/docs/cli/skills/) | `~/.gemini/skills/aurea-ui/` | `.gemini/skills/aurea-ui/` | Yêu cầu dùng Aurea UI; duyệt kích hoạt khi được hỏi |
| [Grok Build](https://docs.x.ai/build/features/skills-plugins-marketplaces) | `~/.grok/skills/aurea-ui/` | `.grok/skills/aurea-ui/` | `/aurea-ui` |

`~` là thư mục người dùng; ví dụ trên Windows, `~/.agents/skills/aurea-ui/` tương ứng `%USERPROFILE%\.agents\skills\aurea-ui`. Dùng đường dẫn của môi trường chạy agent: có thể là WSL hoặc máy remote, không phải máy desktop.

Nếu Codex đang nhận bản cài ở `~/.codex/skills/`, có thể giữ nguyên bản đang hoạt động; không cần tự chuyển chỉ vì bảng này dùng đường dẫn trong tài liệu hiện hành. Tránh cài trùng cùng skill ở nhiều nơi một ứng dụng cùng quét. Với Gemini CLI, kiểm tra bằng `/skills list`, nạp lại bằng `/skills reload`; với ứng dụng khác, kiểm tra danh sách skill và khởi động lại nếu chưa thấy.

### Một lõi hướng dẫn, nhiều agent

Các agent dùng chung `SKILL.md` và `references/`. File `agents/openai.yaml` chỉ là metadata riêng cho ứng dụng OpenAI, không giới hạn skill chỉ dùng với Codex và không cấu hình cho agent khác. Tự nhận diện còn phụ thuộc ứng dụng, thiết lập, quyền truy cập và độ phù hợp của yêu cầu.

Hướng dẫn trên được đối chiếu tài liệu chính thức ngày 2026-09-26. Aurea UI đã được sử dụng trong Codex; **chưa kiểm thử cài đặt và chạy đầu-cuối trên Claude Code, Gemini CLI hoặc Grok Build**. Có hỗ trợ định dạng skill không đồng nghĩa kết quả giống nhau trên mọi agent. Xem [bài kiểm tra đa agent](docs/VALIDATION.md#cross-agent-smoke-test).

Với agent khác hỗ trợ `SKILL.md`, làm theo vị trí cài do ứng dụng đó quy định. Tên model không quyết định khả năng nạp skill: website chat và tích hợp API có thể khác ứng dụng coding agent. Nếu không hỗ trợ nạp skill, cung cấp thủ công `SKILL.md` cùng các reference liên quan và yêu cầu agent làm theo. Chỉ dán file chính không giúp agent tự đọc được file liên kết hay có thêm công cụ duyệt web, tạo ảnh, kiểm thử trình duyệt.

## Ví dụ sử dụng

> Dùng skill Aurea UI thiết kế landing page SaaS tiếng Việt hiện đại. Tìm reference mới và triển khai một animation giải thích sản phẩm.

> Phân tích screenshot dài này, ghi rõ phần nào quan sát được và phần nào là giả định. Làm bản responsive bằng framework hiện có.

> Cải thiện dashboard, giữ thương hiệu. Kiểm tra loading, empty, lỗi lưu, retry và quyền truy cập.

> Lập brief hero image có vùng trống cho chữ HTML, bảo đảm crop mobile giữ được chủ thể.

## Yêu cầu môi trường

Agent cần công cụ tương ứng cho từng việc: duyệt web, xem ảnh, tạo ảnh, tương tác trình duyệt hoặc chạy dự án. Repo không cung cấp các dịch vụ đó. Khi thiếu công cụ, skill yêu cầu báo rõ phần chưa kiểm chứng và hoàn thành phần có thể làm. Yêu cầu làm offline của người dùng được ưu tiên.

## Kiểm tra và phát hành

Chạy `node scripts/validate.mjs` với Node.js 20 trở lên; không cần cài package. Lệnh kiểm tra cấu trúc, liên kết nội bộ và các lỗi portability thường gặp, không xác nhận animation chạy đúng hay website đạt accessibility.

Đây là bản thử nghiệm (experimental preview). Các mẫu animation cần được kiểm thử trong dự án sử dụng. Xem [kịch bản kiểm chứng](docs/VALIDATION.md) và [checklist phát hành](docs/RELEASE.md).

Khi báo lỗi, gửi prompt, agent/model, framework, kết quả mong muốn và kết quả thực tế. Loại bỏ thông tin riêng tư và credential khỏi ví dụ.

Phát hành theo [giấy phép MIT](LICENSE): bạn có thể dùng trong dự án cá nhân/thương mại, chỉnh sửa và chia sẻ lại, với điều kiện giữ thông báo bản quyền và quyền sử dụng theo giấy phép. Tài nguyên bên ngoài giữ điều khoản riêng; xem [phạm vi giấy phép](LICENSE-STATUS.md).
