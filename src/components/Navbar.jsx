import React from "react";
import { 
  Monitor, 
  Search, 
  ShoppingCart, 
  User, 
  PhoneCall, 
  MapPin, 
  Wrench, 
  Package, 
  HelpCircle,
  ShieldCheck,
  CreditCard
} from "lucide-react";
import { formatVND } from "./ProductCard";

export default function Navbar({
  searchTerm,
  setSearchTerm,
  cartItems,
  openCart,
  openAiChat,
  openPcBuilder,
  openShowrooms,
  openAuth,
  openOrders,
  selectedCategory,
  setSelectedCategory,
  currentUser
}) {
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const categories = [
    { id: "all", label: "Tất cả sản phẩm" },
    { id: "gaming-pc", label: "Máy bộ Gaming" },
    { id: "office-pc", label: "Máy bộ Văn phòng & Đồ họa" },
    { id: "water-cooling", label: "Tản nhiệt nước Custom" },
    { id: "laptop", label: "Laptop" },
    { id: "components", label: "Linh kiện PC" },
    { id: "monitor", label: "Màn hình" },
    { id: "accessories", label: "Bàn phím & Chuột" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-xs bg-white/95 backdrop-blur-md border-b border-[#eee7e7]">
      
      {/* 1. TOP UTILITY BAR (Muted Pale Neutral Tones) */}
      <div className="bg-[#f9f7f7] text-slate-600 text-[11px] py-1.5 px-4 border-b border-[#eee7e7]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          {/* Hotline & Showroom */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:0399999999" 
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#a85868] font-semibold transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#a85868]" />
              <span>Hotline tư vấn: <strong className="text-[#a85868] font-bold">0399.999.999</strong> (8h30 - 20h30)</span>
            </a>

            <button 
              onClick={openShowrooms}
              className="hidden sm:flex items-center gap-1 hover:text-[#a85868] transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>3 showroom trải nghiệm</span>
            </button>
          </div>

          {/* Quick Utility Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="hidden md:flex items-center gap-1 text-slate-500">
              <ShieldCheck className="w-3 h-3 text-emerald-600" /> Bảo hành 36 tháng tận nơi
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-500">
              <CreditCard className="w-3 h-3 text-amber-600" /> Trả góp 0%
            </span>

            {/* Orders lookup */}
            <button
              onClick={openOrders}
              className="flex items-center gap-1 text-slate-700 hover:text-[#a85868] font-medium transition-colors cursor-pointer"
            >
              <Package className="w-3.5 h-3.5 text-slate-500" />
              <span>Đơn hàng</span>
            </button>

            {/* User Account */}
            <button
              onClick={openAuth}
              className="flex items-center gap-1 text-slate-700 hover:text-[#a85868] font-semibold cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-slate-500" />
              <span>{currentUser ? currentUser.name : "Tài khoản"}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. MAIN HEADER (Search, Logo, Cart, PC Builder) */}
      <div className="bg-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <div 
            onClick={() => setSelectedCategory("all")}
            className="flex items-center gap-2.5 cursor-pointer shrink-0"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#a85868] text-white shadow-xs">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xl font-black tracking-tight text-slate-900 leading-none">
                TEK<span className="text-[#a85868]">PC</span>
              </div>
              <span className="text-[10px] text-slate-500 tracking-wide font-medium">
                Máy tính & Linh kiện chính hãng
              </span>
            </div>
          </div>

          {/* Search Box (Clean, responsive, standard e-commerce) */}
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm kiếm sản phẩm..."
                autoComplete="off"
                className="w-full bg-[#faf8f8] border border-[#eee7e7] rounded-xl pl-9 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-[#a85868] transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 text-slate-400 hover:text-slate-600 text-xs"
                >
                  Xóa
                </button>
              )}
            </div>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* PC Builder Button */}
            <button
              onClick={openPcBuilder}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#f7eff1] hover:bg-[#ecdfe2] text-[#a85868] border border-[#ecdfe2] text-xs font-bold transition-colors cursor-pointer"
            >
              <Wrench className="w-4 h-4" />
              <span>Xây dựng cấu hình PC</span>
            </button>

            {/* Support Advisor Chat Button */}
            <button
              onClick={openAiChat}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-[#eee7e7] text-xs font-medium transition-colors cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">Tư vấn trực tuyến</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={openCart}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#a85868] hover:bg-[#934a58] text-white font-bold transition-colors cursor-pointer shadow-xs"
            >
              <div className="relative">
                <ShoppingCart className="w-4 h-4 text-white" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-[#a85868] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                    {totalCartCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-[10px] font-medium text-rose-100 leading-none">Giỏ hàng</div>
                <div className="text-xs font-bold text-white leading-none mt-0.5">{formatVND(cartSubtotal)}</div>
              </div>
            </button>

          </div>

        </div>

        {/* Mobile Search Input */}
        <div className="mt-2 block md:hidden">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm sản phẩm..."
              autoComplete="off"
              className="w-full bg-[#faf8f8] border border-[#eee7e7] rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-[#a85868]"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 3. CATEGORY NAVIGATION BAR */}
      <nav className="bg-[#fbf9f9] text-slate-700 text-xs font-medium py-2 px-4 border-t border-[#eee7e7] overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center space-x-1 sm:space-x-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#a85868] text-white font-bold"
                  : "text-slate-600 hover:bg-[#f2eded] hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
          <button
            onClick={openPcBuilder}
            className="lg:hidden ml-auto px-2.5 py-1.5 rounded-lg bg-[#f7eff1] text-[#a85868] border border-[#ecdfe2] text-xs font-semibold whitespace-nowrap"
          >
            Tạo cấu hình PC
          </button>
        </div>
      </nav>

    </header>
  );
}
