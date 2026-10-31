import React, { useState } from "react";
import { 
  X, 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Tag, 
  CreditCard, 
  Truck, 
  MapPin, 
  Phone, 
  User,
  QrCode,
  Copy,
  Check
} from "lucide-react";
import confetti from "canvas-confetti";
import { formatVND } from "./ProductCard";

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenOrders
}) {
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null); // { code, discount, label }
  const [couponError, setCouponError] = useState("");
  
  // Checkout Form State
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod"); // 'cod' | 'vietqr' | 'installment'
  
  // Order Confirmation State
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);
  const [copiedAccount, setCopiedAccount] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  // Discount calculation
  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === "fixed") {
      discountAmount = appliedCoupon.discount;
    } else if (appliedCoupon.type === "percent") {
      discountAmount = Math.min(Math.round(subtotal * appliedCoupon.percent), appliedCoupon.maxDiscount || 1000000);
    }
  }

  const baseShippingFee = subtotal >= 5000000 ? 0 : 30000;
  const shippingFee = appliedCoupon?.code === "FREESHIP" ? 0 : baseShippingFee;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError("");
    const code = couponCode.trim().toUpperCase();

    if (!code) return;

    if (code === "KTECH500" || code === "TEK500") {
      setAppliedCoupon({
        code,
        type: "fixed",
        discount: 500000,
        label: "Giảm 500.000 ₫ cho mọi đơn hàng"
      });
      setCouponCode("");
    } else if (code === "FREESHIP") {
      setAppliedCoupon({
        code,
        type: "shipping",
        discount: baseShippingFee,
        label: "Miễn phí vận chuyển toàn quốc"
      });
      setCouponCode("");
    } else if (code === "WELCOME10") {
      setAppliedCoupon({
        code,
        type: "percent",
        percent: 0.1,
        maxDiscount: 1000000,
        label: "Giảm 10% (tối đa 1.000.000 ₫)"
      });
      setCouponCode("");
    } else {
      setCouponError("Mã không tồn tại hoặc đã hết hạn. Hãy thử 'KTECH500' hoặc 'FREESHIP'!");
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponError("");
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim() || !customerAddress.trim()) {
      alert("Vui lòng điền đầy đủ Họ tên, Số điện thoại và Địa chỉ nhận hàng.");
      return;
    }

    // Phone validation
    const phoneClean = customerPhone.replace(/\s+/g, "");
    if (!/^(0[3|5|7|8|9])[0-9]{8}$/.test(phoneClean)) {
      alert("Số điện thoại không hợp lệ (Vui lòng nhập 10 chữ số, bắt đầu bằng 03, 05, 07, 08, 09).");
      return;
    }

    const orderId = `TEK-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      id: orderId,
      date: new Date().toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }),
      name: customerName.trim(),
      phone: phoneClean,
      address: customerAddress.trim(),
      notes: orderNotes.trim() || "Giao giờ hành chính",
      payment: 
        paymentMethod === "cod" 
          ? "Thanh toán khi nhận hàng (COD)" 
          : paymentMethod === "vietqr" 
          ? "Chuyển khoản VietQR (MB Bank)" 
          : "Trả góp qua thẻ tín dụng 0%",
      paymentCode: paymentMethod,
      items: [...cartItems],
      subtotal,
      discount: discountAmount,
      shippingFee,
      total: grandTotal,
      status: "Đã tiếp nhận đơn hàng"
    };

    // Save to order history in localStorage
    const existingOrders = JSON.parse(localStorage.getItem("tekpc_order_history") || "[]");
    localStorage.setItem("tekpc_order_history", JSON.stringify([newOrder, ...existingOrders]));

    setConfirmedOrder(newOrder);
    setOrderSuccess(true);
    setIsCheckingOut(false);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}
  };

  const handleFinishAndClear = () => {
    setOrderSuccess(false);
    setConfirmedOrder(null);
    onClearCart();
    onClose();
  };

  const copyBankInfo = () => {
    navigator.clipboard.writeText(`0399999999`);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-xs">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-white text-slate-800 border-l border-[#eee7e7] flex flex-col justify-between shadow-2xl">
          
          {/* Header */}
          <div className="p-4 border-b border-[#eee7e7] bg-[#fbf9f9] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-[#a85868]" />
              <h3 className="text-sm font-bold text-slate-900">
                {orderSuccess 
                  ? "Đặt Hàng Thành Công" 
                  : isCheckingOut 
                  ? "Thông Tin Giao Hàng & Thanh Toán" 
                  : `Giỏ Hàng (${cartItems.reduce((a, b) => a + b.quantity, 0)} sản phẩm)`}
              </h3>
            </div>
            
            <div className="flex items-center gap-1">
              {!orderSuccess && !isCheckingOut && cartItems.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-[11px] text-slate-400 hover:text-red-600 px-2 py-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Xóa tất cả sản phẩm trong giỏ"
                >
                  Xóa tất cả
                </button>
              )}
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs bg-[#faf8f8]">
            {orderSuccess && confirmedOrder ? (
              /* Step 3: Realistic Order Confirmation Receipt */
              <div className="space-y-4 py-2">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Đơn Hàng Đã Được Tiếp Nhận</h4>
                  <p className="text-slate-500 text-[11px]">
                    Cảm ơn bạn! Đơn hàng đang được bộ phận kỹ thuật TEKPC chuẩn bị và kiểm tra trước khi bàn giao giao vận.
                  </p>
                </div>

                {/* Receipt Box */}
                <div className="p-4 rounded-2xl bg-white border border-[#eee7e7] space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between pb-2 border-b border-[#eee7e7]">
                    <span className="text-slate-500">Mã đơn hàng:</span>
                    <span className="font-mono font-bold text-[#a85868] text-sm">{confirmedOrder.id}</span>
                  </div>
                  
                  <div className="space-y-1 text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Khách hàng:</span>
                      <span className="font-semibold text-slate-900">{confirmedOrder.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Điện thoại:</span>
                      <span className="text-slate-800">{confirmedOrder.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Địa chỉ giao:</span>
                      <span className="text-slate-800 text-right max-w-[200px] truncate">{confirmedOrder.address}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Hình thức:</span>
                      <span className="font-medium text-slate-800">{confirmedOrder.payment}</span>
                    </div>
                  </div>

                  {/* VietQR Bank Info Details if chosen */}
                  {confirmedOrder.paymentCode === "vietqr" && (
                    <div className="p-3 rounded-xl bg-[#f8f5f6] border border-[#ecdfe2] space-y-2 mt-2">
                      <div className="flex items-center justify-between font-bold text-slate-800">
                        <span className="flex items-center gap-1.5">
                          <QrCode className="w-4 h-4 text-[#a85868]" /> Thông tin chuyển khoản VietQR:
                        </span>
                      </div>
                      <div className="text-[11px] space-y-1 text-slate-600">
                        <div>Ngân hàng: <strong className="text-slate-900">MB Bank (Quân Đội)</strong></div>
                        <div className="flex items-center justify-between">
                          <span>Số tài khoản: <strong className="text-slate-900 font-mono">0399.999.999</strong></span>
                          <button
                            type="button"
                            onClick={copyBankInfo}
                            className="flex items-center gap-1 text-[10px] text-[#a85868] hover:underline cursor-pointer"
                          >
                            {copiedAccount ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedAccount ? "Đã chép" : "Sao chép"}</span>
                          </button>
                        </div>
                        <div>Chủ tài khoản: <strong className="text-slate-900">CÔNG TY CỔ PHẦN CÔNG NGHỆ TEKPC</strong></div>
                        <div>Số tiền: <strong className="text-[#a85868] font-bold">{formatVND(confirmedOrder.total)}</strong></div>
                        <div>Nội dung CK: <strong className="text-slate-900 font-mono bg-white px-1.5 py-0.5 rounded border border-[#ecdfe2]">{confirmedOrder.id}</strong></div>
                      </div>
                    </div>
                  )}

                  {/* Purchased items summary */}
                  <div className="pt-2 border-t border-[#eee7e7] space-y-1">
                    <span className="text-[10px] font-bold uppercase text-slate-400">Sản phẩm đã đặt ({confirmedOrder.items.length}):</span>
                    {confirmedOrder.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-slate-700">
                        <span className="truncate max-w-[200px]">{item.name} x{item.quantity}</span>
                        <span className="font-medium">{formatVND(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between pt-2 border-t border-[#eee7e7] font-bold text-sm">
                    <span className="text-slate-900">Tổng thanh toán:</span>
                    <span className="text-[#a85868] font-black">{formatVND(confirmedOrder.total)}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      handleFinishAndClear();
                      if (onOpenOrders) onOpenOrders();
                    }}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-[#eee7e7] bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs cursor-pointer"
                  >
                    Xem đơn hàng đã lưu
                  </button>

                  <button
                    onClick={handleFinishAndClear}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#a85868] hover:bg-[#934a58] text-white font-bold text-xs cursor-pointer shadow-xs transition-colors"
                  >
                    Tiếp tục mua sắm
                  </button>
                </div>
              </div>
            ) : isCheckingOut ? (
              /* Step 2: Realistic Checkout Form */
              <form id="checkout-form" onSubmit={handleConfirmOrder} className="space-y-3.5">
                <div className="p-3 rounded-2xl bg-white border border-[#eee7e7] space-y-2.5 shadow-2xs">
                  <span className="font-bold text-slate-900 block text-xs">1. Thông tin người nhận hàng</span>
                  
                  <div className="space-y-1">
                    <label className="text-slate-600 font-medium text-[11px]">Họ và tên *</label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        autoComplete="off"
                        className="w-full bg-[#fbf9f9] border border-[#eee7e7] rounded-xl pl-9 pr-3 py-2 text-slate-900 outline-none focus:bg-white focus:border-[#a85868]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-600 font-medium text-[11px]">Số điện thoại liên hệ *</label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        autoComplete="off"
                        className="w-full bg-[#fbf9f9] border border-[#eee7e7] rounded-xl pl-9 pr-3 py-2 text-slate-900 outline-none focus:bg-white focus:border-[#a85868]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-600 font-medium text-[11px]">Địa chỉ nhận hàng chi tiết *</label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <textarea
                        required
                        rows={2}
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        autoComplete="off"
                        className="w-full bg-[#fbf9f9] border border-[#eee7e7] rounded-xl pl-9 pr-3 py-2 text-slate-900 outline-none focus:bg-white focus:border-[#a85868] resize-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-600 font-medium text-[11px]">Ghi chú đơn hàng (tuỳ chọn)</label>
                    <input
                      type="text"
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      autoComplete="off"
                      className="w-full bg-[#fbf9f9] border border-[#eee7e7] rounded-xl px-3 py-2 text-slate-900 outline-none focus:bg-white focus:border-[#a85868]"
                    />
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="p-3 rounded-2xl bg-white border border-[#eee7e7] space-y-2 shadow-2xs">
                  <span className="font-bold text-slate-900 block text-xs">2. Phương thức thanh toán</span>
                  
                  <label className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    paymentMethod === "cod" ? "bg-[#f8eff1] border-[#cbb2b7] text-slate-900" : "bg-white border-[#eee7e7] text-slate-600"
                  }`}>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                        className="accent-[#a85868]"
                      />
                      <span className="font-semibold text-xs">Thanh toán khi nhận hàng (COD)</span>
                    </div>
                    <span className="text-[10px] text-slate-500">Kiểm tra máy rồi trả tiền</span>
                  </label>

                  <label className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    paymentMethod === "vietqr" ? "bg-[#f8eff1] border-[#cbb2b7] text-slate-900" : "bg-white border-[#eee7e7] text-slate-600"
                  }`}>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "vietqr"}
                        onChange={() => setPaymentMethod("vietqr")}
                        className="accent-[#a85868]"
                      />
                      <span className="font-semibold text-xs">Chuyển khoản ngân hàng VietQR 24/7</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 font-medium">MB Bank 0399.999.999</span>
                  </label>

                  <label className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    paymentMethod === "installment" ? "bg-[#f8eff1] border-[#cbb2b7] text-slate-900" : "bg-white border-[#eee7e7] text-slate-600"
                  }`}>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "installment"}
                        onChange={() => setPaymentMethod("installment")}
                        className="accent-[#a85868]"
                      />
                      <span className="font-semibold text-xs">Mua trả góp 0% qua thẻ tín dụng</span>
                    </div>
                    <span className="text-[10px] text-slate-500">28 ngân hàng</span>
                  </label>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="py-2.5 px-4 rounded-xl bg-white border border-[#eee7e7] hover:bg-slate-50 text-slate-700 font-semibold cursor-pointer"
                  >
                    Quay lại
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#a85868] hover:bg-[#934a58] text-white font-bold transition-colors cursor-pointer shadow-xs"
                  >
                    Xác nhận đặt hàng ({formatVND(grandTotal)})
                  </button>
                </div>
              </form>
            ) : cartItems.length === 0 ? (
              /* Empty Cart */
              <div className="text-center py-20 space-y-3">
                <ShoppingCart className="w-12 h-12 text-slate-300 mx-auto" />
                <h4 className="text-sm font-bold text-slate-700">Giỏ hàng đang trống</h4>
                <p className="text-slate-500 text-[11px] max-w-xs mx-auto">
                  Bạn chưa có sản phẩm nào trong giỏ hàng. Hãy chọn một bộ máy tính hoặc linh kiện ưng ý nhé!
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2 rounded-xl bg-[#a85868] text-white font-semibold text-xs hover:bg-[#934a58] transition-colors cursor-pointer"
                >
                  Bắt đầu mua sắm
                </button>
              </div>
            ) : (
              /* Step 1: Cart Items List */
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-2xl bg-white border border-[#eee7e7] flex gap-3 items-center shadow-2xs"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover bg-slate-50 border border-[#eee7e7] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-slate-800 text-xs truncate" title={item.name}>
                        {item.name}
                      </h5>
                      <div className="text-xs font-bold text-[#a85868] mt-0.5">
                        {formatVND(item.price)}
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-[#eee7e7] rounded-lg overflow-hidden bg-white">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-0.5 hover:bg-slate-100 text-slate-600 cursor-pointer"
                            title="Giảm số lượng"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-slate-800 font-mono">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-0.5 hover:bg-slate-100 text-slate-600 cursor-pointer"
                            title="Tăng số lượng"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Remove item */}
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          className="text-slate-400 hover:text-red-600 p-1 cursor-pointer transition-colors"
                          title="Xóa khỏi giỏ"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Total & Checkout trigger */}
          {!orderSuccess && !isCheckingOut && cartItems.length > 0 && (
            <div className="p-4 border-t border-[#eee7e7] bg-white space-y-3 shrink-0 text-xs">
              
              {/* Voucher Input */}
              {appliedCoupon ? (
                <div className="p-2.5 rounded-xl bg-[#f8eff1] border border-[#ecdfe2] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-[#a85868] font-semibold">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Mã {appliedCoupon.code}: {appliedCoupon.label}</span>
                  </div>
                  <button
                    onClick={handleRemoveCoupon}
                    className="p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                    title="Gỡ mã giảm giá"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="space-y-1">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Nhập mã giảm giá..."
                      autoComplete="off"
                      className="flex-1 px-3 py-1.5 text-xs rounded-xl bg-[#faf8f8] border border-[#eee7e7] text-slate-900 uppercase outline-none focus:bg-white focus:border-[#a85868]"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-1.5 rounded-xl bg-[#f7eff1] hover:bg-[#ecdfe2] text-[#a85868] font-semibold cursor-pointer transition-colors"
                    >
                      Áp dụng
                    </button>
                  </div>
                  {couponError && (
                    <div className="text-[10px] text-amber-600 pl-1">{couponError}</div>
                  )}
                </form>
              )}

              {/* Summary Calculations */}
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-slate-500">
                  <span>Tạm tính tiền hàng:</span>
                  <span>{formatVND(subtotal)}</span>
                </div>
                
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Giảm giá khuyến mãi:</span>
                    <span>-{formatVND(discountAmount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-slate-500">
                  <span>Phí vận chuyển:</span>
                  <span>{shippingFee === 0 ? "Miễn phí toàn quốc" : formatVND(shippingFee)}</span>
                </div>

                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-[#eee7e7]">
                  <span>Tổng tiền thanh toán:</span>
                  <span className="text-[#a85868] font-black">{formatVND(grandTotal)}</span>
                </div>
              </div>

              {/* Proceed to checkout button */}
              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-2.5 rounded-xl bg-[#a85868] hover:bg-[#934a58] text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Tiến hành đặt hàng</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[10px] text-slate-400">
                Lắp ráp miễn phí • Bảo hành chính hãng 36 tháng tận nơi
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
