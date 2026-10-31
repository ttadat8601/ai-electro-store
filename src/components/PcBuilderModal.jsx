import React, { useState } from "react";
import { 
  X, 
  Wrench, 
  Cpu, 
  ShoppingCart, 
  CheckCircle2, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  HardDrive,
  Layers,
  Box
} from "lucide-react";
import { pcBuilderTemplates } from "../data/products";
import { formatVND } from "./ProductCard";

export default function PcBuilderModal({
  isOpen,
  onClose,
  onAddConfigToCart
}) {
  const [selectedBudget, setSelectedBudget] = useState("15-25m");
  const [selectedPurpose, setSelectedPurpose] = useState("gaming");

  if (!isOpen) return null;

  const currentTemplate = pcBuilderTemplates.find((t) => t.budget === selectedBudget) || pcBuilderTemplates[1];

  const handleAddToCart = () => {
    // Construct real bundle product
    const bundleProduct = {
      id: `pc-build-${Date.now()}`,
      name: currentTemplate.name,
      category: "gaming-pc",
      brand: "TEKPC Custom",
      price: currentTemplate.totalPrice,
      originalPrice: Math.round(currentTemplate.totalPrice * 1.1),
      image: selectedBudget === "10-15m" ? "./products/pc-office.jpg" : selectedBudget === "over-30m" ? "./products/pc-water-cooling.jpg" : "./products/pc-g4.jpg",
      badge: "Cấu hình tự build",
      shortDesc: `Trọn bộ cấu hình máy ráp sẵn: ${currentTemplate.components.map(c => c.name).slice(0, 3).join(" + ")}...`,
      specs: {
        cpu: currentTemplate.components[0].name,
        mainboard: currentTemplate.components[1].name,
        ram: currentTemplate.components[2].name,
        vga: currentTemplate.components[3].name,
        storage: currentTemplate.components[4].name,
        psu: currentTemplate.components[5].name,
        case: currentTemplate.components[6].name,
        cooling: currentTemplate.components[7].name
      }
    };

    onAddConfigToCart(bundleProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white text-slate-800 rounded-3xl border border-[#eee7e7] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#fbf9f9] border-b border-[#eee7e7] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#f7eff1] text-[#a85868] border border-[#ecdfe2]">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span>Xây Dựng Cấu Hình Máy Tính (PC Builder)</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                  Tương thích 100%
                </span>
              </h3>
              <p className="text-xs text-slate-500">Tự động cấu hình linh kiện tối ưu hiệu năng, cân bằng phần cứng không nghẽn cổ chai</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Builder Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs bg-white flex-1">
          
          {/* Controls: Budget Selector */}
          <div className="space-y-2">
            <label className="font-bold text-slate-700 uppercase tracking-wide text-[11px] block">
              1. Chọn mức kinh phí dự kiến:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedBudget("10-15m")}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedBudget === "10-15m"
                    ? "bg-[#f8eff1] border-[#a85868] text-slate-900 shadow-2xs"
                    : "bg-[#faf8f8] border-[#eee7e7] text-slate-700 hover:bg-[#f2eded]"
                }`}
              >
                <div className="font-bold text-xs">10 - 15 Triệu</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Văn phòng, học tập & Game eSports nhẹ</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedBudget("15-25m")}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedBudget === "15-25m"
                    ? "bg-[#f8eff1] border-[#a85868] text-slate-900 shadow-2xs"
                    : "bg-[#faf8f8] border-[#eee7e7] text-slate-700 hover:bg-[#f2eded]"
                }`}
              >
                <div className="font-bold text-xs">15 - 25 Triệu</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Game AAA 2K & Đồ họa Adobe/Premiere</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedBudget("over-30m")}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedBudget === "over-30m"
                    ? "bg-[#f8eff1] border-[#a85868] text-slate-900 shadow-2xs"
                    : "bg-[#faf8f8] border-[#eee7e7] text-slate-700 hover:bg-[#f2eded]"
                }`}
              >
                <div className="font-bold text-xs">Trên 30 Triệu</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Render 3D 4K, Tản nước & Đồ họa chuyên sâu</div>
              </button>
            </div>
          </div>

          {/* Configuration Detail Breakdown */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#eee7e7]">
              <div>
                <span className="font-bold text-slate-900 text-sm block">2. Danh sách linh kiện ({currentTemplate.name})</span>
                <span className="text-[11px] text-slate-500">{currentTemplate.fpsInfo}</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-400">Tổng tiền linh kiện:</span>
                <div className="text-lg font-black text-[#a85868]">{formatVND(currentTemplate.totalPrice)}</div>
              </div>
            </div>

            {/* Components table */}
            <div className="rounded-2xl border border-[#eee7e7] overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[#fbf9f9] border-b border-[#eee7e7] text-[10px] uppercase font-bold text-slate-500">
                  <tr>
                    <th className="py-2.5 px-3">Linh kiện</th>
                    <th className="py-2.5 px-3">Tên sản phẩm chi tiết</th>
                    <th className="py-2.5 px-3 text-right">Đơn giá</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eee7e7]">
                  {currentTemplate.components.map((comp, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#faf8f8]"}>
                      <td className="py-2.5 px-3 font-semibold text-slate-800 text-[11px] w-28">
                        {comp.type}
                      </td>
                      <td className="py-2.5 px-3 text-slate-700 font-medium">
                        {comp.name}
                      </td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900 font-mono">
                        {formatVND(comp.price)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Included Services */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-[11px]">
              <div className="p-2.5 rounded-xl bg-[#faf8f8] border border-[#eee7e7] flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Miễn phí công lắp ráp & đi dây gọn</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#faf8f8] border border-[#eee7e7] flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cài sẵn Windows & phần mềm cơ bản</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#faf8f8] border border-[#eee7e7] flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bảo hành chính hãng từng món 36T</span>
              </div>
            </div>

          </div>

          {/* Action to add entire PC build to cart */}
          <div className="p-4 rounded-2xl bg-[#fbf9f9] border border-[#eee7e7] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-slate-500 text-xs">Tổng chi phí trọn bộ cấu hình:</span>
              <div className="text-xl font-black text-[#a85868]">{formatVND(currentTemplate.totalPrice)}</div>
              <div className="text-[10px] text-slate-400">Đã bao gồm VAT và vận chuyển toàn quốc</div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#a85868] hover:bg-[#934a58] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Thêm trọn bộ cấu hình vào giỏ hàng</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
