# HƯỚNG DẪN LẤY LINK WEB SẢN PHẨM NỘP GIÁO VIÊN

Dự án **TEKPC Store (ElectroAI)** đã được tối ưu hóa toàn bộ mã nguồn, cấu hình sẵn và đóng gói thành công bản build tại thư mục `dist/`.

Dưới đây là **3 cách đơn giản nhất** để bạn có ngay link web HTTPS (hoàn toàn miễn phí, chạy vĩnh viễn):

---

## ⚡ CÁCH 1: Netlify Drop (Nhanh nhất - 30 giây, Không cần Git)

Đây là cách nhanh nhất nếu bạn cần link gấp để nộp cho thầy cô ngay:

1. Mở trình duyệt và truy cập: **[https://app.netlify.com/drop](https://app.netlify.com/drop)** (Đăng ký/Đăng nhập bằng Gmail hoặc GitHub nếu được hỏi).
2. Mở File Explorer trên máy tính, vào thư mục dự án: `D:\ai-electro-store`.
3. **Kéo thả nguyên cả thư mục `dist`** vào khung tròn trên trang web Netlify Drop.
4. Đợi khoảng 10 giây tải xong:
   - Netlify sẽ cấp ngay một đường link có dạng: `https://ten-ngau-nhien.netlify.app`.
   - Bạn có thể vào **Site configuration** -> **Change site name** để đổi tên link đẹp mắt hơn, ví dụ: `https://tekpc-store.netlify.app` hoặc `https://electroai-ufm.netlify.app`.
5. Copy đường link này gửi cho giáo viên là hoàn thành!

---

## 🚀 CÁCH 2: Vercel (Khuyên dùng cho sinh viên - Đẹp & Chuyên nghiệp nhất)

Vercel là nền tảng số 1 hiện nay cho các dự án React / Vite:

### Nếu bạn đã có Git/GitHub:
1. Tạo một repository mới trên GitHub (ví dụ: `ai-electro-store`).
2. Mở terminal và đẩy code lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: setup project for production deployment"
   git branch -M main
   git remote add origin https://github.com/TÊN_GITHUB_CỦA_BẠN/ai-electro-store.git
   git push -u origin main
   ```
3. Truy cập **[https://vercel.com](https://vercel.com)**, đăng nhập bằng GitHub.
4. Chọn **Add New...** -> **Project** -> Bấm **Import** repository vừa đẩy lên.
5. Giữ nguyên mặc định (Vercel tự động nhận diện Vite và `vercel.json`), bấm **Deploy**.
6. Sau khoảng 30 giây, bạn sẽ nhận được link chính thức dạng: `https://ai-electro-store.vercel.app`.

### Nếu muốn deploy trực tiếp bằng dòng lệnh:
Chạy lệnh sau trong thư mục dự án:
```bash
npx vercel
```
Làm theo hướng dẫn trên màn hình (đăng nhập và nhấn Enter xác nhận), Vercel sẽ tự động tải lên và trả về link web ngay.

---

## 🌐 CÁCH 3: GitHub Pages (Nếu giáo viên yêu cầu nộp link GitHub Pages)

Dự án đã được cấu hình sẵn file tự động hóa `.github/workflows/deploy.yml`:

1. Đẩy mã nguồn lên GitHub như ở Cách 2.
2. Trên trang repository GitHub của bạn, vào tab **Settings** -> mục **Pages** (ở cột bên trái).
3. Tại phần **Build and deployment** -> **Source**: Chọn **GitHub Actions**.
4. GitHub sẽ tự động chạy quy trình build và triển khai trang web tại:
   `https://TÊN_GITHUB_CỦA_BẠN.github.io/ai-electro-store/`

---

## 📌 Các cải tiến đã hoàn thiện trong mã nguồn:
- **Base URL linh hoạt (`base: './'`)**: Chạy tốt ở mọi tên miền hoặc thư mục con (GitHub Pages / Vercel / Netlify / Custom Domain) không lo bị lỗi trắng trang (White Screen of Death).
- **Đường dẫn ảnh tương đối**: Tất cả ảnh máy tính, linh kiện, icon đều tự động nhận diện chính xác ở mọi môi trường.
- **Tối ưu mã nguồn chuẩn E-commerce**: Loại bỏ toàn bộ các file rác, file tạm Word và script không liên quan, đưa dự án về chuẩn mã nguồn website thương mại điện tử chuyên nghiệp.
- **Thẻ Open Graph & SEO đầy đủ**: Khi gửi link qua Zalo, Messenger, Facebook hay hệ thống trường (LMS), link sẽ hiển thị preview hình ảnh và tiêu đề trang trọng, chuyên nghiệp.
