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
### Các bước Deploy trên Vercel:
1. Truy cập **[https://vercel.com](https://vercel.com)**, đăng nhập bằng tài khoản GitHub của bạn (`ttadat8601`).
2. Chọn **Add New...** -> **Project** -> Tìm repository **`ai-electro-store`** và bấm **Import**.
3. Giữ nguyên mặc định (Vercel tự động nhận diện cấu hình Vite và file `vercel.json`), bấm nút **Deploy**.
4. Sau khoảng 20-30 giây, Vercel sẽ cấp cho bạn một link chính thức hoạt động vĩnh viễn (ví dụ: `https://ai-electro-store-xxx.vercel.app`).

---

## 🌐 CÁCH 3: GitHub Pages (Tự động chạy qua GitHub Actions)

Toàn bộ mã nguồn đã được đẩy lên GitHub tại:
👉 **[https://github.com/ttadat8601/ai-electro-store](https://github.com/ttadat8601/ai-electro-store)**

Để kích hoạt link web chạy trên GitHub:
1. Truy cập vào trang cài đặt Pages của repository:
   👉 **[https://github.com/ttadat8601/ai-electro-store/settings/pages](https://github.com/ttadat8601/ai-electro-store/settings/pages)**
2. Tại phần **Build and deployment** -> mục **Source**:
   Chuyển từ *"Deploy from a branch"* thành **`GitHub Actions`**.
3. Đợi khoảng 1-2 phút, GitHub sẽ tự động build và cấp link chính thức:
   👉 **`https://ttadat8601.github.io/ai-electro-store/`**

---

## 📌 Các cải tiến đã hoàn thiện trong mã nguồn:
- **Base URL linh hoạt (`base: './'`)**: Chạy tốt ở mọi tên miền hoặc thư mục con (GitHub Pages / Vercel / Netlify / Custom Domain) không lo bị lỗi trắng trang (White Screen of Death).
- **Đường dẫn ảnh tương đối**: Tất cả ảnh máy tính, linh kiện, icon đều tự động nhận diện chính xác ở mọi môi trường.
- **Tối ưu mã nguồn chuẩn E-commerce**: Loại bỏ toàn bộ các file rác, file tạm Word và script không liên quan, đưa dự án về chuẩn mã nguồn website thương mại điện tử chuyên nghiệp.
- **Thẻ Open Graph & SEO đầy đủ**: Khi gửi link qua Zalo, Messenger, Facebook hay hệ thống trường (LMS), link sẽ hiển thị preview hình ảnh và tiêu đề trang trọng, chuyên nghiệp.
