import React, { useState, useMemo, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import ProductDetailModal from "./components/ProductDetailModal";
import PcBuilderModal from "./components/PcBuilderModal";
import ShowroomsModal from "./components/ShowroomsModal";
import AuthModal from "./components/AuthModal";
import OrdersModal from "./components/OrdersModal";
import AiChatbot from "./components/AiChatbot";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import { products } from "./data/products";
import { 
  ArrowUpDown, 
  Wrench, 
  PhoneCall,
  SlidersHorizontal,
  Headphones
} from "lucide-react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all"); // 'all' | 'under-15m' | '15-25m' | '25-40m' | 'over-40m'
  const [sortBy, setSortBy] = useState("default"); // 'default' | 'price-asc' | 'price-desc' | 'rating'
  
  // Modals & Drawers
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPcBuilderOpen, setIsPcBuilderOpen] = useState(false);
  const [isShowroomsOpen, setIsShowroomsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSupportChatOpen, setIsSupportChatOpen] = useState(false);
  const [chatInitialPrompt, setChatInitialPrompt] = useState("");

  // User state
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem("tekpc_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Cart State (Persisted in localStorage)
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("tekpc_cart_items");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return [{ ...products[0], quantity: 1 }];
  });

  useEffect(() => {
    try {
      localStorage.setItem("tekpc_cart_items", JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleBuyNow = (product) => {
    handleAddToCart(product);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Filter & Search Engine (Standard, reliable e-commerce filtering)
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        if (selectedCategory !== "all" && product.category !== selectedCategory) {
          return false;
        }

        // Price range filter
        if (selectedPriceRange === "under-15m" && product.price >= 15000000) return false;
        if (selectedPriceRange === "15-25m" && (product.price < 15000000 || product.price > 25000000)) return false;
        if (selectedPriceRange === "25-40m" && (product.price < 25000000 || product.price > 40000000)) return false;
        if (selectedPriceRange === "over-40m" && product.price <= 40000000) return false;

        // Search term filter
        if (!searchTerm.trim()) return true;

        const term = searchTerm.toLowerCase();
        const fullSearchTarget = [
          product.name,
          product.brand,
          product.shortDesc,
          product.specs.cpu,
          product.specs.vga || "",
          product.specs.ram || "",
          product.specs.storage || ""
        ].join(" ").toLowerCase();

        return fullSearchTarget.includes(term);
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0;
      });
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const categoryNameMap = {
    "all": "Tất Cả Sản Phẩm",
    "gaming-pc": "Máy Bộ Gaming",
    "office-pc": "Máy Bộ Văn Phòng & Đồ Họa",
    "water-cooling": "Tản Nhiệt Nước Custom",
    "laptop": "Laptop Chính Hãng",
    "components": "Linh Kiện Máy Tính",
    "monitor": "Màn Hình Máy Tính",
    "accessories": "Bàn Phím & Chuột"
  };

  return (
    <div className="min-h-screen bg-[#faf9f9] text-[#2b303a] flex flex-col justify-between">
      
      {/* 1. Header & Navigation */}
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartItems={cartItems}
        openCart={() => setIsCartOpen(true)}
        openAiChat={() => {
          setChatInitialPrompt("");
          setIsSupportChatOpen(true);
        }}
        openPcBuilder={() => setIsPcBuilderOpen(true)}
        openShowrooms={() => setIsShowroomsOpen(true)}
        openAuth={() => setIsAuthOpen(true)}
        openOrders={() => setIsOrdersOpen(true)}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        currentUser={currentUser}
      />

      {/* 2. Hero Showcase */}
      <Hero
        openPcBuilder={() => setIsPcBuilderOpen(true)}
        openAiChat={() => {
          setChatInitialPrompt("");
          setIsSupportChatOpen(true);
        }}
        setSelectedCategory={setSelectedCategory}
      />

      {/* 3. Main Catalog */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        
        {/* Section Heading, Filters & Sort */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#eee7e7]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#a85868]" />
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight uppercase">
                {categoryNameMap[selectedCategory] || "Danh Sách Sản Phẩm"}
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Hiển thị {filteredProducts.length} sản phẩm sẵn kho tại hệ thống
              {searchTerm && <span className="text-[#a85868] font-semibold ml-1">(tìm theo: "{searchTerm}")</span>}
            </p>
          </div>

          {/* Filters Bar: Price Range & Sort */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto text-xs">
            {/* Price Filter */}
            <div className="flex items-center gap-1.5 text-slate-500">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              <span>Mức giá:</span>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="bg-white border border-[#eee7e7] text-xs text-slate-700 rounded-xl px-2.5 py-1.5 outline-none focus:border-[#a85868] cursor-pointer shadow-2xs"
              >
                <option value="all">Tất cả mức giá</option>
                <option value="under-15m">Dưới 15 triệu</option>
                <option value="15-25m">15 - 25 triệu</option>
                <option value="25-40m">25 - 40 triệu</option>
                <option value="over-40m">Trên 40 triệu</option>
              </select>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-1.5 text-slate-500">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <span>Sắp xếp:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-[#eee7e7] text-xs text-slate-700 rounded-xl px-2.5 py-1.5 outline-none focus:border-[#a85868] cursor-pointer shadow-2xs"
              >
                <option value="default">Mặc định / Phổ biến</option>
                <option value="price-asc">Giá: Thấp đến Cao</option>
                <option value="price-desc">Giá: Cao đến Thấp</option>
                <option value="rating">Đánh giá cao nhất</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white border border-[#eee7e7] space-y-3 shadow-2xs">
            <h3 className="text-sm font-bold text-slate-900">Không tìm thấy sản phẩm phù hợp</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Không có sản phẩm nào khớp với điều kiện tìm kiếm và mức giá hiện tại. Bạn có thể xóa bộ lọc để xem toàn bộ kho hàng.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedPriceRange("all");
              }}
              className="px-4 py-2 rounded-xl bg-[#f7eff1] text-xs font-semibold text-[#a85868] hover:bg-[#ecdfe2] transition-colors cursor-pointer"
            >
              Xem tất cả sản phẩm
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={(p) => setSelectedProduct(p)}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

        {/* PC Builder Promotion Banner */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-[#f8f5f6] border border-[#ecdfe2] text-slate-800 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xs">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-white text-[#a85868] border border-[#ecdfe2] shrink-0 hidden sm:flex">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Cần xây dựng cấu hình máy tính cá nhân hóa theo nhu cầu?
              </h3>
              <p className="text-xs text-slate-600 mt-0.5 max-w-xl">
                Lựa chọn mức chi phí và mục đích sử dụng (học tập, làm việc, đồ họa 3D hay chơi game), công cụ PC Builder sẽ tính toán trọn bộ linh kiện tương thích 100% kèm báo giá chi tiết.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsPcBuilderOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-[#a85868] hover:bg-[#934a58] text-white font-bold text-xs sm:text-sm shrink-0 transition-colors cursor-pointer shadow-xs"
          >
            Mở trình xây cấu hình PC
          </button>
        </div>

      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 left-6 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsPcBuilderOpen(true)}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#a85868] hover:bg-[#934a58] text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
        >
          <Wrench className="w-4 h-4" />
          <span>Tạo Cấu Hình PC</span>
        </button>

        <a
          href="tel:0399999999"
          className="hidden sm:flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-[#eee7e7] text-xs font-semibold shadow-md"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#a85868]" />
          <span>0399.999.999</span>
        </a>
      </div>

      {/* Floating Chat Trigger */}
      <div className="fixed bottom-4 right-6 z-30">
        <button
          onClick={() => setIsSupportChatOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#a85868] hover:bg-[#934a58] text-white text-xs font-bold shadow-lg transition-colors cursor-pointer"
          title="Tư vấn trực tuyến"
        >
          <Headphones className="w-4 h-4" />
          <span className="hidden sm:inline">Hỗ trợ trực tuyến</span>
        </button>
      </div>

      {/* Modals & Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      <PcBuilderModal
        isOpen={isPcBuilderOpen}
        onClose={() => setIsPcBuilderOpen(false)}
        onAddConfigToCart={handleAddToCart}
      />

      <ShowroomsModal
        isOpen={isShowroomsOpen}
        onClose={() => setIsShowroomsOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentUser={currentUser}
        onUserLogin={(user) => {
          setCurrentUser(user);
          setIsAuthOpen(false);
        }}
        onUserLogout={() => {
          setCurrentUser(null);
          setIsAuthOpen(false);
        }}
      />

      <OrdersModal
        isOpen={isOrdersOpen}
        onClose={() => setIsOrdersOpen(false)}
      />

      <AiChatbot
        isOpen={isSupportChatOpen}
        onClose={() => setIsSupportChatOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCart={handleAddToCart}
        initialPrompt={chatInitialPrompt}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenOrders={() => {
          setIsCartOpen(false);
          setIsOrdersOpen(true);
        }}
      />

      {/* 4. Footer */}
      <Footer
        openShowrooms={() => setIsShowroomsOpen(true)}
        openPcBuilder={() => setIsPcBuilderOpen(true)}
        openAiChat={() => setIsSupportChatOpen(true)}
      />

    </div>
  );
}
