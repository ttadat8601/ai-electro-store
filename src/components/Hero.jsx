import React from "react";
import { 
  Monitor, 
  Wrench, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  CreditCard, 
  ArrowRight,
  CheckCircle2,
  Cpu
} from "lucide-react";

export default function Hero({ openPcBuilder, openAiChat, setSelectedCategory }) {
  return (
    <section className="bg-[#f8f6f6] text-slate-800 py-10 border-b border-[#eee7e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Pitch */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7eff1] border border-[#ecdfe2] text-[#a85868] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#a85868]" />
              <span>Máy bộ Gaming & Setup công nghệ tuyển chọn 2026</span>
              <span className="text-slate-300">•</span>
              <span className="font-bold">Ưu đãi đến 20%</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              MÁY BỘ GAMING & SETUP CÔNG NGHỆ CHÍNH HÃNG
              <br />
              <span className="text-[#a85868]">
                Tối Ưu Hiệu Năng – Vận Hành Êm Ái – Thẩm Mỹ Tinh Tế
              </span>
            </h1>

            <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
              Cung cấp các dòng máy tính để bàn lắp ráp sẵn, PC tản nhiệt nước cao cấp, linh kiện phần cứng chính hãng và góc setup tối giản. Bảo hành 36 tháng tận nơi, 1 đổi 1 trong 30 ngày.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={openPcBuilder}
                className="px-5 py-2.5 rounded-xl bg-[#a85868] hover:bg-[#934a58] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Wrench className="w-4 h-4" />
                <span>Xây dựng cấu hình PC</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setSelectedCategory("gaming-pc")}
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-[#eee7e7] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Xem máy bộ bán chạy
              </button>
            </div>

          </div>

          {/* Right Image / Showcase Highlight */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-[#eee7e7] shadow-sm p-4">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-50">
                <img
                  src="./products/pc-water-cooling.jpg"
                  alt="Custom Water Cooling PC Snow White MOD3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-[#a85868] text-white text-[10px] font-bold uppercase shadow-xs">
                  Sản phẩm tiêu biểu
                </div>
              </div>

              <div className="mt-3 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm">
                    Custom Water Cooling PC Snow White MOD3
                  </h3>
                  <span className="text-[#a85868] font-bold text-sm">45.900.000 ₫</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Intel Core i7 12700K • RTX 3080 10GB • RAM 32GB Corsair • Tản nhiệt nước Custom ống cứng
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Store Commitments */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-[#eee7e7] text-xs">
          
          <div className="p-3 rounded-xl bg-white border border-[#eee7e7] flex items-center gap-3 shadow-2xs">
            <div className="p-2 rounded-lg bg-[#f7eff1] text-[#a85868] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-xs">Bảo hành 36 tháng</div>
              <div className="text-slate-500 text-[10px]">1 đổi 1 linh kiện lỗi tận nơi</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#eee7e7] flex items-center gap-3 shadow-2xs">
            <div className="p-2 rounded-lg bg-[#f7eff1] text-[#a85868] shrink-0">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-xs">Giao hàng hỏa tốc</div>
              <div className="text-slate-500 text-[10px]">Nhận máy trong 2h tại TP.HCM & HN</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#eee7e7] flex items-center gap-3 shadow-2xs">
            <div className="p-2 rounded-lg bg-[#f7eff1] text-[#a85868] shrink-0">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-xs">Đổi trả trong 30 ngày</div>
              <div className="text-slate-500 text-[10px]">Hoàn tiền nếu không đúng cam kết</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#eee7e7] flex items-center gap-3 shadow-2xs">
            <div className="p-2 rounded-lg bg-[#f7eff1] text-[#a85868] shrink-0">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-xs">Trả góp 0% lãi suất</div>
              <div className="text-slate-500 text-[10px]">Thủ tục nhanh qua thẻ tín dụng</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
