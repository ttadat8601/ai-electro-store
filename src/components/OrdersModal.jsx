import React from "react";
import { X, Package, Clock, CheckCircle2, ChevronRight, MapPin, Phone, CreditCard } from "lucide-react";
import { formatVND } from "./ProductCard";

export default function OrdersModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const savedOrders = JSON.parse(localStorage.getItem("tekpc_order_history") || "[]");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white text-slate-800 rounded-3xl border border-[#ebe5e5] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#fbf9f9] border-b border-[#eee7e7] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-2xl bg-[#f7eff1] text-[#a85868] border border-[#ecdfe2]">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Đơn Hàng Của Tôi</h3>
              <p className="text-xs text-slate-500">Lịch sử và tiến độ xử lý đơn hàng tại TEKPC</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs bg-white flex-1">
          {savedOrders.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Package className="w-12 h-12 text-slate-300 mx-auto" />
              <h4 className="text-sm font-bold text-slate-700">Chưa có đơn hàng nào được tạo</h4>
              <p className="text-slate-500 text-[11px] max-w-sm mx-auto">
                Khi bạn đặt hàng từ giỏ hàng, thông tin đơn hàng và mã vận đơn sẽ hiển thị đầy đủ tại đây.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2 rounded-xl bg-[#a85868] text-white font-semibold text-xs hover:bg-[#934a58] transition-colors cursor-pointer"
              >
                Khám phá sản phẩm
              </button>
            </div>
          ) : (
            savedOrders.map((order) => (
              <div
                key={order.id}
                className="p-4 rounded-2xl border border-[#eee7e7] bg-[#faf8f8] space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#eae3e4]">
                  <div>
                    <span className="text-[11px] text-slate-500">Mã đơn hàng:</span>{" "}
                    <span className="font-mono font-bold text-[#a85868] text-sm">{order.id}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> {order.date}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                      {order.status || "Đang xử lý & đóng gói"}
                    </span>
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-2">
                  {order.items?.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-3 text-slate-700">
                      <div className="flex items-center gap-2 min-w-0">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-9 h-9 rounded-lg object-cover border border-[#eee7e7] shrink-0"
                          />
                        )}
                        <span className="font-medium truncate">{item.name}</span>
                        <span className="text-slate-400 shrink-0">x{item.quantity}</span>
                      </div>
                      <span className="font-bold shrink-0">{formatVND(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                {/* Shipping & Payment summary */}
                <div className="pt-2 border-t border-[#eae3e4] flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                  <div className="space-y-0.5">
                    <div>
                      <strong>Người nhận:</strong> {order.name} - {order.phone}
                    </div>
                    <div className="truncate max-w-md">
                      <strong>Địa chỉ:</strong> {order.address}
                    </div>
                    <div>
                      <strong>Phương thức:</strong> {order.payment}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-slate-500 text-[10px]">Tổng thanh toán:</div>
                    <div className="text-sm font-black text-[#a85868]">{formatVND(order.total)}</div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
