import React, { useState } from "react";
import { 
  X, 
  Camera, 
  Sparkles, 
  CheckCircle2, 
  Eye, 
  Scan,
  Cpu
} from "lucide-react";
import { products } from "../data/products";
import { formatVND } from "./ProductCard";

export default function AiVisualSearchModal({
  isOpen,
  onClose,
  onSelectProduct,
  onAddToCart
}) {
  const [selectedSample, setSelectedSample] = useState(products[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  if (!isOpen) return null;

  const handleStartScan = (prod) => {
    setSelectedSample(prod);
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        product: prod,
        confidence: (98.2 + Math.random() * 1.5).toFixed(1),
        tags: [
          `Phân loại: ${prod.category.toUpperCase()}`,
          `Thương hiệu: ${prod.brand}`,
          `Linh kiện: ${prod.specs.cpu.split("(")[0]}`,
          `Card đồ họa: ${prod.specs.vga ? prod.specs.vga.split("(")[0] : "Tích hợp"}`
        ]
      });
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#fff2f5] border-b border-rose-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-2xl bg-rose-100 text-rose-600 border border-rose-200">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span>🌸 AI Visual Hardware Search</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 font-semibold">
                  Computer Vision
                </span>
              </h3>
              <p className="text-xs text-slate-500">Tìm kiếm máy bộ và linh kiện máy tính xinh xắn bằng hình ảnh</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-100/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 text-xs bg-white">
          
          {/* Sample Photos Selector */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-2 uppercase tracking-wide">
              Chọn ảnh phần cứng máy tính để nhận diện tự động:
            </label>
            <div className="grid grid-cols-4 gap-2.5">
              {products.slice(0, 4).map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleStartScan(p)}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedSample.id === p.id
                      ? "border-rose-500 shadow-md shadow-rose-200 scale-105"
                      : "border-rose-100 hover:border-rose-300 opacity-80 hover:opacity-100"
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-slate-900/70 p-1 text-[9px] font-bold text-white truncate text-center">
                    {p.name.split("(")[0]}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Scanner Viewport */}
          <div className="rounded-2xl bg-[#fff9fa] p-4 border border-rose-100 flex flex-col sm:flex-row items-center gap-5">
            
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden border border-rose-100 shrink-0 bg-white">
              <img
                src={selectedSample.image}
                alt="Scanning target"
                className="w-full h-full object-cover"
              />

              {isScanning && (
                <div className="absolute inset-x-0 h-1 bg-rose-500 shadow-[0_0_12px_#f43f5e] animate-pulse" />
              )}
            </div>

            {/* Results */}
            <div className="flex-1 w-full space-y-3">
              {isScanning ? (
                <div className="space-y-2 py-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-rose-600">
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>Thuật toán thị giác đang nhận diện thiết bị & tìm kiếm linh kiện tương thích...</span>
                  </div>
                  <div className="w-full bg-rose-100 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-rose-400 to-pink-500 h-2 rounded-full w-3/4 animate-pulse" />
                  </div>
                </div>
              ) : scanResult ? (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Khớp thiết bị thành công!
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                      Độ khớp: {scanResult.confidence}%
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 line-clamp-1">
                      {scanResult.product.name}
                    </h4>
                    <span className="text-sm font-black text-rose-600">
                      {formatVND(scanResult.product.price)}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {scanResult.tags.map((t, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white text-slate-700 border border-rose-100 shadow-2xs">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProduct(scanResult.product);
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-bold text-xs shadow-xs shadow-rose-200 cursor-pointer"
                    >
                      🌸 Xem chi tiết cấu hình
                    </button>
                    <button
                      onClick={() => onAddToCart(scanResult.product)}
                      className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-xs border border-rose-200 shadow-2xs cursor-pointer"
                    >
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-slate-500 text-xs mb-3">
                    Bấm nút bên dưới để khởi chạy quét nhận diện mô hình thiết bị.
                  </p>
                  <button
                    onClick={() => handleStartScan(selectedSample)}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <Scan className="w-4 h-4" />
                    <span>Quét Nhận Diện Ngay</span>
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
