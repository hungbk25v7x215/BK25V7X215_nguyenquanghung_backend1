# Contactbook Backend 1

Backend 1 của bài thực hành CT449: thiết lập Bun, Express, CORS, các route liên hệ mẫu và middleware xử lý lỗi. Các route hiện trả thông báo JSON để xác nhận định tuyến; dữ liệu liên hệ và MongoDB được triển khai ở Backend 2.

## Chuẩn bị

- Cài [Bun](https://bun.sh/) và Git.
- Mở Terminal tại thư mục repo, chạy:

```bash
bun install
bun start
```

Server mặc định dùng cổng `3000`. Muốn dùng cổng khác, chạy `PORT=3001 bun start`. Để tự khởi động lại khi sửa mã, dùng `bun run dev` thay cho `bun start`. Chỉ chạy một phiên server trên mỗi cổng.

## Kiểm tra bằng browser và Postman

Khi Terminal vẫn đang chạy server, mở các URL GET sau trong browser:

- `http://127.0.0.1:3000/` — lời chào JSON.
- `http://127.0.0.1:3000/api/contacts` — `findAll handler`.
- `http://127.0.0.1:3000/api/contacts/favorite` — `findAllFavorite handler`.
- `http://127.0.0.1:3000/api/contacts/507f1f77bcf86cd799439011` — `findOne handler`.
- `http://127.0.0.1:3000/not-defined` — HTTP 404, `Resource not found`.

Trong Postman, dùng cùng base URL `http://127.0.0.1:3000` để thử đủ bảy route:

| Method | Path | Phản hồi hiện tại |
| --- | --- | --- |
| POST | `/api/contacts` | `create handler` |
| GET | `/api/contacts` | `findAll handler` |
| DELETE | `/api/contacts` | `deleteAll handler` |
| GET | `/api/contacts/favorite` | `findAllFavorite handler` |
| GET | `/api/contacts/:id` | `findOne handler` |
| PUT | `/api/contacts/:id` | `update handler` |
| DELETE | `/api/contacts/:id` | `delete handler` |

Các route mẫu chưa ghi, sửa hay xóa dữ liệu. Với POST/PUT, có thể gửi JSON mẫu `{"name":"Long Tran","email":"long@example.com","address":"Can Tho","phone":"0900000000","favorite":true}` để kiểm tra request; ở Backend 1 handler mới xác nhận route, chưa lưu body. Nếu đổi `PORT`, thay cổng trong các URL trên.

## Kiểm thử và chất lượng mã

```bash
bun test
bun run lint
bunx prettier --check app.js server.js app test eslint.config.js index.ts package.json
```

Dự án dùng ESLint 10 với `eslint.config.js`. Tập `.eslintrc.js` cũ từ bước chuẩn bị được giữ nguyên để tránh ghi đè phần bạn đã làm, nhưng ESLint 10 không dùng tập đó.

## Cấu trúc

- `app.js`: Express, CORS, JSON, route gốc và middleware lỗi.
- `server.js`: khởi động HTTP server theo `PORT`.
- `app/config/index.js`: cấu hình cổng.
- `app/controller/contact.controller.js`: bảy handler mẫu.
- `app/routes/contact.route.js`: định tuyến liên hệ.
- `app/api-error.js`: lỗi HTTP có mã trạng thái.
- `test/backend1.test.js`: kiểm tra lời chào, bảy route và lỗi 404.

Repo đã có Git và remote `origin`. Dùng `git status` để xem thay đổi trước khi commit hoặc push.
