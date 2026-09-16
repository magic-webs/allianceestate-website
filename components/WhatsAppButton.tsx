'use client';
import React, { useState } from 'react';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = getWhatsAppLink('Hello Alliance Estate, I would like to connect with an advisor.');

  return (
    <div
      className="fixed bottom-5 right-5 z-999 flex flex-col items-end sm:bottom-7 sm:right-7"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Floating Hover Tooltip */}
      <div
        className={`mb-2.5 hidden items-center gap-2 rounded-xl border border-white/20 bg-slate-900/90 px-3.5 py-2 text-xs font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 sm:flex ${
          showTooltip
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0'
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span>Advisors Online • <span className="text-gold font-semibold">Instant Reply</span></span>
      </div>

      {/* Main Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Alliance Estate Advisor on WhatsApp"
        className="group relative flex items-center gap-2.5 rounded-full border border-emerald-400/40 bg-gradient-to-r from-[#25D366] via-[#1fb855] to-[#128C7E] p-3 text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 hover:border-emerald-300 hover:shadow-[0_12px_40px_rgba(37,211,102,0.65)] active:scale-95 sm:px-4 sm:py-3"
      >
        {/* Ambient Glow Pulse */}
        <span className="absolute -inset-0.5 -z-1 rounded-full bg-emerald-400 opacity-40 blur-sm transition-opacity duration-300 group-hover:opacity-75 animate-pulse" />

        {/* WhatsApp Icon */}
        <div className="relative flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.076-1.782-.4-.881-.365-1.488-.957-1.89-1.393-.058-.063-.099-.109-.12-.134-.337-.417-.899-1.282-.899-2.223 0-.964.498-1.439.676-1.616.143-.142.316-.213.504-.213.061 0 .12.003.176.006.166.008.271.018.396.319.155.373.53 1.294.577 1.389.047.095.078.207.016.33-.063.124-.094.202-.187.311-.094.109-.197.244-.282.327-.095.093-.194.195-.084.383.11.189.489.808 1.05 1.306.721.642 1.328.841 1.517.935.188.094.298.079.408-.047.11-.126.471-.55.597-.738.125-.188.251-.157.423-.094.173.063 1.097.518 1.285.612.188.094.313.141.36.22.047.078.047.453-.097.858zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.177L2 22l4.981-1.399C8.423 21.499 10.151 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.15c-1.65 0-3.18-.49-4.46-1.33l-.32-.21-2.95.83.84-2.88-.23-.33C3.96 14.93 3.45 13.5 3.45 12c0-4.71 3.84-8.55 8.55-8.55 4.71 0 8.55 3.84 8.55 8.55 0 4.71-3.84 8.55-8.55 8.55z" />
          </svg>
          {/* Mobile status pulse badge */}
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 sm:hidden">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-80" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold border border-slate-900" />
          </span>
        </div>

        {/* Text Label */}
        <div className="hidden flex-col items-start leading-tight sm:flex">
          <span className="text-[0.68rem] font-medium text-emerald-100 uppercase tracking-wider">Chat with Us</span>
          <span className="text-[0.88rem] font-bold text-white tracking-wide">WhatsApp</span>
        </div>
      </a>
    </div>
  );
}
