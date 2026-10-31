import React from "react";
import { X, Scale, Sparkles, Check, ShoppingCart, Cpu, Battery, Eye } from "lucide-react";
import { formatVND } from "./ProductCard";

export default function AiCompareModal({
  isOpen,
  onClose,
  compareItems,
  onRemoveFromCompare,
  onAddToCart,
  onOpenDetails
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-panel rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>So Sánh Thiết Bị Bằng AI</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 font-semibold">
                  Ma Trận Đối Đầu
                </span>
              </h3>
              <p className="text-xs text-slate-400">Đối chiếu thông số kỹ thuật và nhận phán quyết tối ưu từ AI</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {compareItems.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Scale className="w-12 h-12 text-slate-600 mx-auto" />
              <h4 className="text-sm font-bold text-slate-300">Chưa có sản phẩm nào được chọn để so sánh</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Hãy bấm vào biểu tượng cán cân (So sánh) trên các thẻ sản phẩm bên ngoài trang chủ để đưa thiết bị vào bảng đối chiếu.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Product Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {compareItems.map((prod) => (
                  <div key={prod.id} className="p-4 rounded-xl glass-panel border border-slate-800 flex gap-4 relative">
                    <button
                      onClick={() => onRemoveFromCompare(prod.id)}
                      className="absolute top-2 right-2 p-1 text-slate-500 hover:text-rose-400 rounded-md transition-colors"
                      title="Xóa khỏi so sánh"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-20 h-20 rounded-xl object-cover bg-slate-900 shrink-0"
                    />

                    <div className="flex-1 min-w-0 pr-6">
                      <span className="text-[10px] font-bold uppercase text-cyan-400 tracking-wider">
                        {prod.brand}
                      </span>
                      <h4 className="font-bold text-white text-sm truncate">{prod.name}</h4>
                      <div className="text-sm font-black text-cyan-400 mt-1">
                        {formatVND(prod.price)}
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() => onAddToCart(prod)}
                          className="px-2.5 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" /> Thêm giỏ
                        </button>
                        <button
                          onClick={() => {
                            onClose();
                            onOpenDetails(prod);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                        >
                          Chi tiết
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Verdict Box */}
              {compareItems.length >= 2 && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-purple-950/60 to-slate-900 border border-indigo-700/50 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 uppercase tracking-wide">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Phán Quyết AI (AI Verdict):</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Nếu bạn ưu tiên hiệu năng xử lý đồ họa, lập trình và mô hình AI cục bộ thì <strong className="text-cyan-300">{compareItems[0].name}</strong> vượt trội hơn nhờ chip NPU mạnh mẽ. Ngược lại, nếu bạn tìm kiếm tính cơ động, độ bền pin và khả năng kết nối linh hoạt mọi lúc mọi nơi thì <strong className="text-purple-300">{compareItems[1].name}</strong> là sự đầu tư kinh tế và hiệu quả hơn.
                  </p>
                </div>
              )}

              {/* Spec Comparison Matrix Table */}
              <div className="border border-slate-800 rounded-2xl overflow-hidden text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="p-3 w-1/3">Tiêu chí so sánh</th>
                      {compareItems.map((prod) => (
                        <th key={prod.id} className="p-3 font-bold text-white truncate">
                          {prod.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    <tr>
                      <td className="p-3 font-semibold text-slate-400">Giá bán hiện tại</td>
                      {compareItems.map((p) => (
                        <td key={p.id} className="p-3 font-bold text-cyan-400">{formatVND(p.price)}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-400">Bộ xử lý NPU AI</td>
                      {compareItems.map((p) => (
                        <td key={p.id} className="p-3 text-slate-200 font-medium">{p.npu}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-400">Hiển thị / Màn hình</td>
                      {compareItems.map((p) => (
                        <td key={p.id} className="p-3 text-slate-300">{p.specs.display}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-400">Thời lượng Pin</td>
                      {compareItems.map((p) => (
                        <td key={p.id} className="p-3 text-slate-300">{p.specs.battery}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-400">Trọng lượng</td>
                      {compareItems.map((p) => (
                        <td key={p.id} className="p-3 text-slate-300">{p.specs.weight}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-400">Tính năng AI đặc trưng</td>
                      {compareItems.map((p) => (
                        <td key={p.id} className="p-3 text-cyan-300 font-medium">{p.specs.aiFeatures[0]}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
