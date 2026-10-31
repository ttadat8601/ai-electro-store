import React from "react";
import { Monitor, PhoneCall, Mail, MapPin, ShieldCheck, CreditCard, Truck } from "lucide-react";

export default function Footer({ openShowrooms, openPcBuilder, openAiChat }) {
  return (
    <footer className="bg-[#f9f7f7] text-slate-600 text-xs border-t border-[#eee7e7]">
      
      {/* Upper Footer: 4 Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Store Intro */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#a85868] text-white font-bold shadow-xs">
                <Monitor className="w-4 h-4" />
              </div>
              <span className="text-base font-black text-slate-900">
                TEK<span className="text-[#a85868]">PC</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed text-[11px]">
              Hệ thống bán lẻ máy bộ Gaming, máy tính đồ họa, laptop và linh kiện phần cứng chính hãng. Uy tín - Tận tâm - Bảo hành chu đáo 36 tháng.
            </p>
            <div className="space-y-1 text-[11px] pt-1">
              <div className="flex items-center gap-2 text-slate-700">
                <PhoneCall className="w-3.5 h-3.5 text-[#a85868]" />
                <span>Hotline: <strong className="text-[#a85868]">028.2249.8777</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-3.5 h-3.5 text-[#a85868]" />
                <span>Email: contact@tekpc.vn</span>
              </div>
            </div>
          </div>

          {/* Col 2: Hỗ Trợ Khách Hàng */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase text-slate-900 tracking-wider">
              Hỗ Trợ Khách Hàng
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#baohanh" className="hover:text-[#a85868] transition-colors">Quy định bảo hành 36 tháng</a></li>
              <li><a href="#thanhtoan" className="hover:text-[#a85868] transition-colors">Phương thức thanh toán & trả góp</a></li>
              <li><a href="#giaonhan" className="hover:text-[#a85868] transition-colors">Chính sách giao nhận hỏa tốc 2 giờ</a></li>
              <li><a href="#thucu" className="hover:text-[#a85868] transition-colors">Thu cũ đổi mới trợ giá 20%</a></li>
              <li>
                <button onClick={openPcBuilder} className="text-[#a85868] font-semibold hover:underline cursor-pointer">
                  Công cụ xây dựng cấu hình PC →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Chính Sách Bán Hàng */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase text-slate-900 tracking-wider">
              Chính Sách & Cam Kết
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>Linh kiện mới 100% nguyên hộp chính hãng</li>
              <li>1 đổi 1 trong 30 ngày nếu có lỗi phần cứng</li>
              <li>Miễn phí lắp ráp & cài đặt phần mềm trọn đời</li>
              <li>Hỗ trợ kỹ thuật online từ xa qua Ultraviewer</li>
              <li>
                <button onClick={openShowrooms} className="text-[#a85868] font-semibold hover:underline cursor-pointer">
                  Xem địa chỉ showroom gần nhất →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Tổng Đài Hỗ Trợ */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase text-slate-900 tracking-wider">
              Tổng Đài Hỗ Trợ
            </h4>
            <div className="space-y-2 text-[11px]">
              <div className="p-2.5 rounded-xl bg-white border border-[#eee7e7] shadow-2xs">
                <div className="text-slate-500 text-[10px]">Tư vấn mua hàng (8h30 - 20h30):</div>
                <a href="tel:02822498777" className="text-[#a85868] font-bold text-xs hover:underline">028.2249.8777</a>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#eee7e7] shadow-2xs">
                <div className="text-slate-500 text-[10px]">Kỹ thuật & Bảo hành (8h30 - 18h):</div>
                <a href="tel:02822499777" className="text-emerald-700 font-bold text-xs hover:underline">028.2249.9777</a>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#eee7e7] shadow-2xs">
                <div className="text-slate-500 text-[10px]">Khiếu nại & Đóng góp ý kiến:</div>
                <a href="tel:0967105171" className="text-[#a85868] font-bold text-xs hover:underline">0967.105.171</a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Footer */}
        <div className="pt-6 mt-6 border-t border-[#eee7e7] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© 2026 TEKPC Store (tekpc.vn). Bản quyền thuộc về Công ty Cổ phần Công nghệ TEKPC.</p>
          <div className="flex items-center gap-4">
            <span>Giấy phép ĐKKD số: 0315892241 do Sở KH&ĐT TP.HCM cấp</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
