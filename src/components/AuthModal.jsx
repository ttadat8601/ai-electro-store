import React, { useState } from "react";
import { X, User, Lock, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AuthModal({ 
  isOpen, 
  onClose,
  currentUser,
  onUserLogin,
  onUserLogout 
}) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    const user = {
      name: fullName.trim() || email.split("@")[0],
      email: email.trim(),
      points: 250,
      tier: "Khách Hàng Thân Thiết (Silver)"
    };

    localStorage.setItem("tekpc_user", JSON.stringify(user));
    if (onUserLogin) onUserLogin(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("tekpc_user");
    if (onUserLogout) onUserLogout();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white text-slate-800 rounded-3xl border border-[#eee7e7] shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#fbf9f9] border-b border-[#eee7e7] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#a85868]" />
            <h3 className="text-base font-bold text-slate-900">
              {currentUser ? "Thông Tin Tài Khoản" : isRegister ? "Đăng Ký Thành Viên TEKPC" : "Đăng Nhập Khách Hàng"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-xs bg-white">
          {currentUser ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#f7eff1] text-[#a85868] border border-[#ecdfe2] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Xin chào, {currentUser.name}!</h4>
                <p className="text-slate-500">{currentUser.email}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#faf8f8] border border-[#eee7e7] text-slate-700 text-left space-y-1.5 text-[11px]">
                <div>• Hạng thành viên: <strong className="text-slate-900">Thành viên Thân Thiết (Silver)</strong></div>
                <div>• Điểm tích lũy: <strong className="text-[#a85868]">250 điểm (Quy đổi 250.000 ₫)</strong></div>
                <div>• Gói bảo hành kích hoạt: <strong className="text-emerald-700">TEKPC Care 36 Tháng</strong></div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex-1 py-2 px-3 rounded-xl border border-[#eee7e7] bg-white hover:bg-slate-50 text-slate-700 font-semibold cursor-pointer"
                >
                  Đăng xuất
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2 px-3 rounded-xl bg-[#a85868] hover:bg-[#934a58] text-white font-semibold cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {isRegister && (
                <div className="space-y-1">
                  <label className="text-slate-700 font-medium">Họ và tên của bạn:</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      autoComplete="off"
                      className="w-full bg-[#faf8f8] border border-[#eee7e7] rounded-xl pl-9 pr-3 py-2 text-slate-900 outline-none focus:bg-white focus:border-[#a85868]"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-slate-700 font-medium">Email hoặc Tên đăng nhập *:</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    className="w-full bg-[#faf8f8] border border-[#eee7e7] rounded-xl pl-9 pr-3 py-2 text-slate-900 outline-none focus:bg-white focus:border-[#a85868]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-700 font-medium">Mật khẩu *:</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    className="w-full bg-[#faf8f8] border border-[#eee7e7] rounded-xl pl-9 pr-3 py-2 text-slate-900 outline-none focus:bg-white focus:border-[#a85868]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-[#a85868] hover:bg-[#934a58] text-white font-bold transition-colors cursor-pointer shadow-xs"
              >
                {isRegister ? "Đăng Ký Tài Khoản" : "Đăng Nhập"}
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setIsRegister(!isRegister)}
                  className="text-slate-500 hover:text-[#a85868] text-xs cursor-pointer"
                >
                  {isRegister ? "Đã có tài khoản? Đăng nhập ngay" : "Chưa có tài khoản? Đăng ký nhận ưu đãi"}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
