import React from "react";
import { ShoppingCart, Eye, Star, ShieldCheck } from "lucide-react";

export function formatVND(amount) {
  if (typeof amount !== "number" || isNaN(amount)) return "0 ₫";
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount);
}

export default function ProductCard({
  product,
  onOpenDetails,
  onAddToCart
}) {
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="bg-white border border-[#eee7e7] rounded-2xl overflow-hidden hover:border-[#cbb2b7] hover:shadow-md transition-all duration-200 flex flex-col justify-between group shadow-2xs">
      
      {/* Product Image Area */}
      <div 
        className="relative aspect-square w-full bg-[#f9f7f7] overflow-hidden cursor-pointer" 
        onClick={() => onOpenDetails(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-white/90 text-slate-700 border border-[#eee7e7] shadow-2xs">
            {product.badge}
          </span>
          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            ● Sẵn hàng
          </span>
        </div>

        {discountPercent > 0 && (
          <div className="absolute top-2.5 right-2.5 z-10">
            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#a85868] text-white">
              -{discountPercent}%
            </span>
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className="p-3.5 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Brand & Rating */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
            <span className="font-semibold text-[#a85868] uppercase tracking-wide">{product.brand}</span>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="font-bold text-slate-800">{product.rating}</span>
              <span className="text-slate-400">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onOpenDetails(product)}
            className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-[#a85868] transition-colors line-clamp-2 cursor-pointer leading-snug"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Quick Specs Snippet */}
          <div className="mt-2.5 space-y-1 bg-[#faf8f8] p-2 rounded-xl border border-[#eee7e7] text-[11px] text-slate-600">
            <div className="truncate"><strong className="text-slate-800">CPU:</strong> {product.specs.cpu.split("(")[0]}</div>
            {product.specs.vga && (
              <div className="truncate"><strong className="text-slate-800">VGA:</strong> {product.specs.vga.split("(")[0]}</div>
            )}
            <div className="truncate"><strong className="text-slate-800">RAM:</strong> {product.specs.ram.split("(")[0]}</div>
          </div>
        </div>

        {/* Pricing & Cart Action */}
        <div className="mt-3 pt-2.5 border-t border-[#eee7e7]">
          <div className="flex items-baseline justify-between mb-2.5">
            <div>
              <div className="text-base font-black text-[#a85868]">
                {formatVND(product.price)}
              </div>
              <div className="text-[11px] text-slate-400 line-through">
                {formatVND(product.originalPrice)}
              </div>
            </div>
            <span className="text-[10px] text-slate-500 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> BH 36T
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            <button
              type="button"
              onClick={() => onOpenDetails(product)}
              className="py-1.5 px-2 rounded-xl bg-[#faf8f8] hover:bg-[#f0ebeb] text-slate-700 border border-[#eee7e7] text-xs font-medium flex items-center justify-center gap-1 transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Chi tiết</span>
            </button>

            <button
              type="button"
              onClick={() => onAddToCart(product)}
              className="py-1.5 px-2 rounded-xl bg-[#a85868] hover:bg-[#934a58] text-white text-xs font-semibold flex items-center justify-center gap-1 shadow-2xs transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Thêm giỏ</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
