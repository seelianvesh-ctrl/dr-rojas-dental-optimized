import React from 'react';
import { MessageCircle, Phone, Clock, MapPin, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const BookingSection: React.FC = () => {
  const whatsappMsg = encodeURIComponent("Hi, I want to book an appointment with Dr. Roja");

  return (
    <section id="booking" className="py-12 sm:py-16 lg:py-20 bg-[#0C4A6E] text-white relative overflow-hidden bg-noise hero-mesh scroll-mt-20">
      {/* Decorative Ambient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-14 border border-white/20 shadow-2xl text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-accent font-semibold tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>INSTANT WHATSAPP BOOKING</span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Ready for a Healthier, <br />
              <span className="text-amber-300 italic">Brighter Smile?</span>
            </h2>
            <p className="text-stone-200 text-base sm:text-lg font-sans leading-relaxed">
              No long forms or waiting. Tap below to chat directly with Dr. Roja on WhatsApp and reserve your appointment with zero friction.
            </p>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 max-w-xl mx-auto">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-accent font-bold text-base py-4 px-8 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95 border-2 border-white/20"
            >
              <MessageCircle className="w-6 h-6 fill-white" />
              <span>Book on WhatsApp →</span>
            </a>

            <a
              href={`tel:${CLINIC_INFO.phone1Raw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-cyan-300/40 hover:border-cyan-200 text-cyan-100 hover:text-white hover:bg-cyan-900/40 text-base font-accent font-medium py-4 px-7 rounded-2xl transition-all backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Call {CLINIC_INFO.phone1}</span>
            </a>
          </div>

          {/* Trust & Timing Badges */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-stone-200">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Mon–Sat: 9am–9pm | Sun: 9am–5pm</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Direct Clinic Confirmation</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Duvvada Station Rd, Kurmannapalem</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
