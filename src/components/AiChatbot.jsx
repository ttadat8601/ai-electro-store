import React, { useState, useRef, useEffect } from "react";
import { 
  MessageSquare, 
  Send, 
  X, 
  ShoppingCart, 
  Cpu, 
  RotateCcw,
  CheckCircle2,
  Headphones
} from "lucide-react";
import { products } from "../data/products";
import { formatVND } from "./ProductCard";

export default function AiChatbot({
  isOpen,
  onClose,
  onSelectProduct,
  onAddToCart,
  initialPrompt
}) {
  const [messages, setMessages] = useState([
    {
      id: "msg-welcome",
      sender: "bot",
      text: "Xin chào quý khách! Mình là nhân viên hỗ trợ trực tuyến tại TEKPC. Bạn cần tư vấn cấu hình máy tính văn phòng, PC Gaming hay linh kiện nào hôm nay?",
      recommendedProducts: [products[0], products[2]],
      timestamp: "Vừa xong"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const presetQuestions = [
    "Cấu hình máy tính dưới 15 triệu chơi game & làm việc",
    "PC Gaming RTX 4060 cần nguồn bao nhiêu Watt?",
    "Chính sách bảo hành và giao hàng tận nơi",
    "Tư vấn laptop mỏng nhẹ văn phòng pin trâu"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleUserQuery(initialPrompt);
    }
  }, [initialPrompt]);

  const handleUserQuery = (queryText) => {
    if (!queryText.trim()) return;

    const userMsg = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const q = queryText.toLowerCase();
      let replyText = "";
      let matchedProds = [];

      if (q.includes("15 triệu") || q.includes("tiết kiệm") || q.includes("g3")) {
        replyText = "Với ngân sách tầm 15 triệu, bộ TEKPC GAMING G3 là sự lựa chọn tối ưu nhất. Máy trang bị Core i5 cùng RTX 3060 12GB VRAM, vừa cân tốt game đồ họa cao vừa render Photoshop, Premiere mượt mà và mát mẻ.";
        matchedProds = [products[2]];
      } else if (q.includes("nguồn") || q.includes("4060") || q.includes("g4") || q.includes("watt")) {
        replyText = "Card đồ họa RTX 4060 tiêu thụ điện chỉ khoảng 115W. Do đó, một bộ nguồn công suất thực từ 550W đến 650W chuẩn 80 Plus Bronze là hoàn toàn dư dả và bảo đảm linh kiện vận hành bền bỉ lâu dài.";
        matchedProds = [products[0]];
      } else if (q.includes("bảo hành") || q.includes("giao hàng") || q.includes("chính sách")) {
        replyText = "TEKPC áp dụng chính sách bảo hành 36 tháng 1 đổi 1 trong 30 ngày đầu tiên. Đơn hàng giao hỏa tốc trong 2 giờ tại nội thành Hà Nội & TP.HCM, miễn phí vận chuyển cho đơn hàng từ 5.000.000₫.";
        matchedProds = [];
      } else if (q.includes("laptop") || q.includes("nhẹ") || q.includes("mỏng") || q.includes("aurabook")) {
        replyText = "Mẫu AuraBook Pro 16 nặng chỉ 1.39kg, màn hình OLED 3.2K 120Hz chuẩn màu thiết kế, pin dùng bền bỉ cả ngày. Rất thích hợp cho dân văn phòng và nhà sáng tạo nội dung.";
        matchedProds = [products[7]];
      } else {
        replyText = `Cảm ơn bạn đã liên hệ. TEKPC gợi ý một số dòng máy bộ bán chạy và được đánh giá cao nhất hiện nay:`;
        matchedProds = [products[0], products[2]];
      }

      const botMsg = {
        id: `msg-${Date.now() + 1}`,
        sender: "bot",
        text: replyText,
        recommendedProducts: matchedProds,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-end p-2 sm:p-6 bg-slate-900/30 backdrop-blur-xs">
      <div className="w-full sm:w-[420px] h-[580px] bg-white text-slate-800 rounded-3xl border border-[#eee7e7] shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
        
        {/* Header */}
        <div className="px-4 py-3 bg-[#fbf9f9] border-b border-[#eee7e7] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#f7eff1] text-[#a85868] border border-[#ecdfe2] flex items-center justify-center">
              <Headphones className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                <span>Hỗ Trợ Kỹ Thuật & Tư Vấn TEKPC</span>
              </h3>
              <span className="text-[10px] text-emerald-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Đang trực tuyến (8h30 - 20h30)
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs bg-[#faf8f8]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-[#a85868] text-white rounded-tr-xs shadow-xs"
                    : "bg-white text-slate-800 border border-[#eee7e7] rounded-tl-xs shadow-2xs"
                }`}
              >
                <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                <div
                  className={`text-[9px] mt-1 text-right ${
                    msg.sender === "user" ? "text-rose-100" : "text-slate-400"
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>

              {/* Recommended Product Cards inside Chat */}
              {msg.recommendedProducts && msg.recommendedProducts.length > 0 && (
                <div className="w-full mt-2 space-y-2">
                  {msg.recommendedProducts.map((p) => (
                    <div
                      key={p.id}
                      className="p-2.5 rounded-xl bg-white border border-[#eee7e7] flex items-center justify-between gap-2 shadow-2xs hover:border-[#cbb2b7] transition-colors"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-10 h-10 rounded-lg object-cover bg-slate-50 border border-[#eee7e7] shrink-0"
                        />
                        <div className="min-w-0">
                          <h5 className="font-semibold text-slate-800 text-[11px] truncate">{p.name}</h5>
                          <span className="font-bold text-[#a85868] text-[11px]">{formatVND(p.price)}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => {
                            if (onSelectProduct) onSelectProduct(p);
                            onClose();
                          }}
                          className="px-2 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-[10px] font-medium border border-[#eee7e7] cursor-pointer"
                        >
                          Xem
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (onAddToCart) onAddToCart(p);
                          }}
                          className="px-2 py-1 rounded-lg bg-[#a85868] hover:bg-[#934a58] text-white text-[10px] font-semibold flex items-center gap-1 cursor-pointer"
                        >
                          <ShoppingCart className="w-3 h-3" />
                          <span>Thêm</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1.5 p-2 rounded-2xl bg-white border border-[#eee7e7] w-20 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Preset Questions */}
        <div className="px-3 py-2 bg-white border-t border-[#eee7e7] overflow-x-auto no-scrollbar flex gap-1.5 shrink-0">
          {presetQuestions.map((q, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleUserQuery(q)}
              className="text-[10px] whitespace-nowrap px-2.5 py-1 rounded-lg bg-[#faf8f8] hover:bg-[#f2eded] text-slate-700 border border-[#eee7e7] cursor-pointer transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUserQuery(inputValue);
          }}
          className="p-3 bg-white border-t border-[#eee7e7] flex items-center gap-2 shrink-0"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Nhập câu hỏi cần tư vấn..."
            className="flex-1 bg-[#faf8f8] border border-[#eee7e7] rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-[#a85868]"
          />
          <button
            type="submit"
            className="p-2 rounded-xl bg-[#a85868] hover:bg-[#934a58] text-white transition-colors cursor-pointer shadow-xs"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
