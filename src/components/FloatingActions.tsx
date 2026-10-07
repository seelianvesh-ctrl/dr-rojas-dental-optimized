import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { trackWhatsAppClick, trackCallClick } from '../lib/analytics';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMsg = encodeURIComponent("Hi, I want to book an appointment with Dr. Roja");

  return (
    <>
      {/* Bottom-Right Floating WhatsApp Button — desktop only; mobile uses the bottom bar instead */}
      <div className="hidden sm:flex fixed bottom-8 right-6 z-40 flex-col items-end gap-3 pointer-events-auto">
        <a
          href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 sm:py-3.5 sm:px-5 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 border-white/25"
          aria-label="Book on WhatsApp"
          onClick={() => trackWhatsAppClick('floating-pill')}
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-60 animate-ping pointer-events-none" />
          
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white relative z-10 shrink-0" />
          
          {/* Permanent Visible Label */}
          <span className="font-accent text-xs sm:text-sm font-bold whitespace-nowrap text-white relative z-10 tracking-wide">
            Book on WhatsApp
          </span>
        </a>
      </div>

      {/* Bottom-Left Back to Top Button — desktop only; mobile has the bottom bar */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="hidden sm:block fixed bottom-8 left-5 z-40 bg-white/90 hover:bg-white text-stone-800 p-3 rounded-full shadow-xl border border-stone-200 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Scroll Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Mobile-Only Bottom Fixed Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 shadow-2xl z-40 p-2.5 px-4 flex items-center justify-between gap-3">
        <a
          href={`tel:${CLINIC_INFO.phone1Raw}`}
          className="flex-1 flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-[#0C4A6E] font-accent font-bold text-xs py-3 rounded-xl border border-stone-300"
          onClick={() => trackCallClick('mobile-bar')}
        >
          <Phone className="w-4 h-4 text-amber-600" />
          <span>Call Clinic</span>
        </a>

        <a
          href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-accent font-bold text-xs py-3 rounded-xl shadow-md"
          onClick={() => trackWhatsAppClick('mobile-bar')}
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Book WhatsApp</span>
        </a>
      </div>
    </>
  );
};
