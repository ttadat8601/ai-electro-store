import React from "react";
import { X, MapPin, Phone, Clock, ShieldCheck } from "lucide-react";
import { storeShowrooms } from "../data/products";

export default function ShowroomsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white text-slate-800 rounded-3xl border border-[#eee7e7] shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#fbf9f9] border-b border-[#eee7e7] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#a85868]" />
            <h3 className="text-base font-bold text-slate-900">Hệ Thống Showroom TEKPC</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Showrooms */}
        <div className="p-6 space-y-3.5 text-xs bg-white">
          {storeShowrooms.map((sr, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#faf8f8] border border-[#eee7e7] space-y-1.5 shadow-2xs">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#a85868] shrink-0" />
                <span>{sr.name}</span>
              </h4>
              <p className="text-slate-600">{sr.address}</p>
              <div className="flex items-center justify-between pt-1 text-slate-500">
                <span className="flex items-center gap-1 text-[#a85868] font-semibold">
                  <Phone className="w-3.5 h-3.5" /> Hotline: {sr.phone}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> 8h30 - 20h30 (Cả CN)
                </span>
              </div>
            </div>
          ))}

          <div className="p-3.5 rounded-2xl bg-[#f7eff1] border border-[#ecdfe2] text-slate-700 flex items-center gap-2 text-[11px]">
            <ShieldCheck className="w-4 h-4 shrink-0 text-[#a85868]" />
            <span>Có chỗ đỗ ô tô miễn phí • Trải nghiệm góc máy tính và màn hình thực tế trước khi mua.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
