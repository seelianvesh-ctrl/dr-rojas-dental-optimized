import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

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

  const whatsappMsg = encodeURIComponent("Hi Dr. Roja, I would like to book a dental appointment at your Kurmannapalem clinic.");

  return (
    <>
      {/* Bottom-Right Floating WhatsApp Button with Pulse Animation */}
      <div className="fixed bottom-20 sm:bottom-8 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <a
          href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95"
          aria-label="Book on WhatsApp"
        >
          {/* Pulse Ripple Effect */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />
          
          <MessageCircle className="w-6 h-6 fill-white text-white relative z-10" />
          
          {/* Hover Tooltip Badge on Desktop */}
          <span className="hidden sm:inline font-accent text-xs font-bold whitespace-nowrap bg-stone-900 text-white px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Book on WhatsApp
          </span>
        </a>
      </div>

      {/* Bottom-Left Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-8 left-5 z-40 bg-white/90 hover:bg-white text-stone-800 p-3 rounded-full shadow-xl border border-stone-200 transition-all hover:scale-105 active:scale-95"
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
        >
          <Phone className="w-4 h-4 text-amber-600" />
          <span>Call Clinic</span>
        </a>

        <a
          href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-accent font-bold text-xs py-3 rounded-xl shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Book WhatsApp</span>
        </a>
      </div>
    </>
  );
};
