# Aurea UI

Bộ hướng dẫn cho AI agent: nghiên cứu, thiết kế, tạo asset, triển khai và kiểm chứng website/web app theo sản phẩm cụ thể.

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

Với Codex cài cho người dùng, thư mục thông thường là `~/.codex/skills/aurea-ui`; trên Windows là `%USERPROFILE%\.codex\skills\aurea-ui`. Nếu đã tùy chỉnh Codex home, dùng thư mục `skills` bên trong vị trí đó. Mở task/session mới nếu skill chưa xuất hiện.

Metadata đi kèm bật tự nhận diện cho Codex. Agent khác có thể có quy tắc kích hoạt khác; chưa xác nhận tương thích thực tế trên mọi agent.

## Ví dụ sử dụng

> Dùng $aurea-ui thiết kế landing page SaaS tiếng Việt hiện đại. Tìm reference mới và triển khai một animation giải thích sản phẩm.

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
