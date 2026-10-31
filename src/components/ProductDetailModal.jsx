import React, { useState } from "react";
import { 
  X, 
  ShoppingCart, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Gamepad2, 
  Truck,
  RotateCcw,
  Check
} from "lucide-react";
import { formatVND } from "./ProductCard";

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  onBuyNow
}) {
  const [activeTab, setActiveTab] = useState("specs"); // 'specs' | 'gaming' | 'policy'

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white text-slate-800 rounded-3xl border border-[#eee7e7] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#fbf9f9] border-b border-[#eee7e7] flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] font-bold uppercase text-[#a85868] tracking-wider">
              Mã sản phẩm: {product.id} • Hãng: {product.brand}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 line-clamp-1">
              {product.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs bg-white">
          
          {/* Main Top Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Image Preview */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-[#faf8f8] border border-[#eee7e7]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info & Price */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-1.5 text-amber-500 mb-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-900">{product.rating}</span>
                  <span className="text-slate-500">({product.reviewsCount} đánh giá từ khách hàng)</span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 leading-snug">
                  {product.name}
                </h2>

                <p className="text-slate-600 mt-2 leading-relaxed">
                  {product.shortDesc}
                </p>
              </div>

              {/* Price Block */}
              <div className="p-4 rounded-2xl bg-[#faf8f8] border border-[#eee7e7] space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-black text-[#a85868]">
                    {formatVND(product.price)}
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    {formatVND(product.originalPrice)}
                  </span>
                  <span className="text-[10px] font-semibold text-[#a85868] bg-[#f7eff1] px-2.5 py-0.5 rounded-full border border-[#ecdfe2]">
                    Tiết kiệm {formatVND(product.originalPrice - product.price)}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-emerald-700 font-medium text-[11px] pt-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Sẵn sàng giao hàng hỏa tốc trong 2 giờ tại TP.HCM & Hà Nội</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2.5">
                <button
                  onClick={() => {
                    onAddToCart(product);
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-white border border-[#cbb2b7] hover:bg-[#faf8f8] text-[#a85868] font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Thêm vào giỏ</span>
                </button>

                <button
                  onClick={() => {
                    if (onBuyNow) {
                      onBuyNow(product);
                    } else {
                      onAddToCart(product);
                      onClose();
                    }
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#a85868] hover:bg-[#934a58] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Mua ngay</span>
                </button>
              </div>

              {/* Warranty note */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-[#eee7e7]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> {product.warranty}
                </span>
                <span className="flex items-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5 text-[#a85868]" /> 1 đổi 1 trong 30 ngày
                </span>
              </div>
            </div>

          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-[#eee7e7] flex items-center gap-4 font-bold text-xs">
            <button
              onClick={() => setActiveTab("specs")}
              className={`pb-2.5 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === "specs"
                  ? "border-[#a85868] text-[#a85868]"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Thông số kỹ thuật</span>
            </button>

            {product.gameBenchmarks && (
              <button
                onClick={() => setActiveTab("gaming")}
                className={`pb-2.5 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "gaming"
                    ? "border-[#a85868] text-[#a85868]"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Hiệu năng thực tế</span>
              </button>
            )}

            <button
              onClick={() => setActiveTab("policy")}
              className={`pb-2.5 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === "policy"
                  ? "border-[#a85868] text-[#a85868]"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Chính sách bán hàng</span>
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "specs" && (
            <div className="space-y-3">
              <div className="rounded-2xl border border-[#eee7e7] overflow-hidden">
                <table className="w-full text-left">
                  <tbody>
                    {Object.entries(product.specs).map(([key, val], idx) => (
                      <tr
                        key={key}
                        className={`border-b border-[#eee7e7] ${
                          idx % 2 === 0 ? "bg-[#fbf9f9]" : "bg-white"
                        }`}
                      >
                        <td className="py-2.5 px-4 font-bold text-slate-700 uppercase text-[10px] w-1/4">
                          {key === "cpu" ? "Bộ vi xử lý (CPU)" :
                           key === "vga" ? "Card đồ họa (VGA)" :
                           key === "mainboard" ? "Bo mạch chủ (Main)" :
                           key === "ram" ? "Bộ nhớ trong (RAM)" :
                           key === "storage" ? "Ổ cứng lưu trữ (SSD)" :
                           key === "psu" ? "Nguồn máy tính (PSU)" :
                           key === "cooling" ? "Hệ thống làm mát" :
                           key === "case" ? "Vỏ thùng máy (Case)" :
                           key === "screen" ? "Màn hình" :
                           key === "battery" ? "Dung lượng pin" :
                           key === "weight" ? "Trọng lượng" : key}
                        </td>
                        <td className="py-2.5 px-4 text-slate-800 text-xs font-medium">
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {product.bestFor && (
                <div className="p-3.5 rounded-xl bg-[#faf8f8] border border-[#eee7e7] text-slate-700 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#a85868] shrink-0" />
                  <span><strong>Phù hợp nhất cho:</strong> {product.bestFor}</span>
                </div>
              )}
            </div>
          )}

          {activeTab === "gaming" && product.gameBenchmarks && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {product.gameBenchmarks.map((bench, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#faf8f8] border border-[#eee7e7] text-center">
                    <div className="text-[11px] text-slate-500 font-medium">{bench.game}</div>
                    <div className="text-base font-black text-[#a85868] mt-1">{bench.fps}</div>
                  </div>
                ))}
              </div>

              {product.sentiment && (
                <div className="p-4 rounded-xl bg-slate-50 border border-[#eee7e7] space-y-1.5">
                  <span className="font-bold text-slate-900 block">Đánh giá vận hành:</span>
                  <p className="text-slate-600">{product.sentiment.summary}</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "policy" && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#faf8f8] border border-[#eee7e7] space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Cam kết hàng chính hãng 100%
                  </span>
                  <p className="text-slate-600 text-[11px]">
                    Toàn bộ linh kiện đều có hóa đơn VAT, chứng từ CO/CQ và được bảo hành chính hãng tại các trung tâm bảo hành ủy quyền tại Việt Nam.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#faf8f8] border border-[#eee7e7] space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <RotateCcw className="w-4 h-4 text-[#a85868]" /> 1 đổi 1 trong 30 ngày
                  </span>
                  <p className="text-slate-600 text-[11px]">
                    Nếu phát sinh lỗi kỹ thuật phần cứng do nhà sản xuất trong 30 ngày đầu, khách hàng được đổi mới linh kiện tương đương ngay lập tức.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#faf8f8] border border-[#eee7e7] space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#a85868]" /> Giao hàng & Lắp đặt tận nơi
                  </span>
                  <p className="text-slate-600 text-[11px]">
                    Kỹ thuật viên hỗ trợ vận chuyển và cân chỉnh góc máy tính, cài sẵn Windows và các ứng dụng văn phòng cần thiết hoàn toàn miễn phí.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#faf8f8] border border-[#eee7e7] space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Hỗ trợ kỹ thuật trọn đời
                  </span>
                  <p className="text-slate-600 text-[11px]">
                    Hỗ trợ vệ sinh máy, tra keo tản nhiệt định kỳ hàng năm và hướng dẫn cài đặt phần mềm từ xa qua Ultraviewer trọn đời máy.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
