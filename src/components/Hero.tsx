import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, Phone, MessageCircle, Sparkles, MapPin, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { trackWhatsAppClick, trackCallClick } from '../lib/analytics';

export const Hero: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const checkOpenStatus = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = { 
          timeZone: 'Asia/Kolkata', 
          hour12: false, 
          weekday: 'short', 
          hour: 'numeric', 
          minute: 'numeric' 
        };
        const parts = new Intl.DateTimeFormat('en-US', options).formatToParts(now);
        
        let weekday = '';
        let hour = 0;
        let minute = 0;
        for (const p of parts) {
          if (p.type === 'weekday') weekday = p.value;
          if (p.type === 'hour') hour = parseInt(p.value, 10);
          if (p.type === 'minute') minute = parseInt(p.value, 10);
        }
        
        const totalMinutes = hour * 60 + minute;
        if (weekday === 'Sun') {
          // Sunday: 9:00 AM – 5:00 PM (540 to 1020 mins)
          setIsOpen(totalMinutes >= 540 && totalMinutes < 1020);
        } else {
          // Mon – Sat: 9:00 AM – 9:00 PM (540 to 1260 mins)
          setIsOpen(totalMinutes >= 540 && totalMinutes < 1260);
        }
      } catch (e) {
        const now = new Date();
        const day = now.getDay();
        const mins = now.getHours() * 60 + now.getMinutes();
        setIsOpen(day === 0 ? (mins >= 540 && mins < 1020) : (mins >= 540 && mins < 1260));
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);
  const whatsappMsg = encodeURIComponent("Hi, I want to book an appointment with Dr. Roja");

  return (
    <section className="relative bg-[#0C4A6E] text-white overflow-hidden hero-mesh bg-noise pt-6 pb-14 lg:pt-10 lg:pb-20">
      {/* Decorative SVG Ambient Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Floating Crosses & Dots */}
      <div className="absolute top-20 right-1/4 opacity-20 pointer-events-none hidden lg:block">
        <svg className="w-12 h-12 text-cyan-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Asymmetric Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Tag - Dual Local & Quality Focus */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-accent font-semibold tracking-wider uppercase backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>KURMANNAPALEM & GAJUWAKA'S TRUSTED DENTAL CLINIC</span>
              </div>
              
              <div className="inline-flex items-center gap-1.5 bg-rose-500/20 text-rose-300 border border-rose-400/30 px-3 py-1 rounded-full text-xs font-accent font-medium">
                <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                <span>Same-Day Emergency Toothache Care</span>
              </div>
            </div>

            {/* Telugu Cultural Welcome Anchor */}
            <div className="text-amber-300/90 font-telugu text-sm sm:text-base font-semibold tracking-wide">
              మీ కుటుంబ దంత సంరక్షణ • Dr. Roja's Dental Clinic
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-stone-50">
              Your Smile Deserves <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-amber-200 to-amber-400 italic">
                Expert Hands.
              </span>
            </h1>

            {/* Subtitle with Local Area Context */}
            <p className="text-stone-200 text-base sm:text-lg lg:text-xl font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Dr. Yenneti Roja <span className="text-amber-300 font-medium">(BDS, Regd. A30469)</span> brings precision, warmth, and 5-star rated dental care to Kurmannapalem. Trusted by families across Duvvada, Ukkunagaram (Steel Plant), and Gajuwaka for gentle, painless dentistry.
            </p>

            {/* CTAs Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D97706] hover:bg-[#B45309] text-white text-base font-accent font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                onClick={() => trackWhatsAppClick('hero')}
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Book on WhatsApp →</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone1Raw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-cyan-300/40 hover:border-cyan-200 text-cyan-100 hover:text-white hover:bg-cyan-900/40 text-base font-accent font-medium px-7 py-3.5 rounded-xl transition-all backdrop-blur-sm"
                onClick={() => trackCallClick('hero')}
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {CLINIC_INFO.phone1}</span>
              </a>
            </div>

            {/* Trust Highlights Pills */}
            <div className="pt-6 border-t border-cyan-800/60 flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs sm:text-sm text-cyan-100/90 font-sans">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>100% Painless Rotary RCT</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>5.0 ★ Google Rating ({CLINIC_INFO.reviewsCount}+ Verified Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Duvvada Station Rd (Opp. HP Bunk)</span>
              </div>
            </div>

          </div>

          {/* Right Asymmetric Rotated Image Frame */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            
            {/* Background Decorative Gold Ring */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/30 to-cyan-500/30 blur-lg transform rotate-2 pointer-events-none" />

            {/* Main Image Box */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500 bg-[#0C4A6E]">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                alt="Dr. Roja's Modern Dental Clinic Interior in Kurmannapalem Visakhapatnam"
                referrerPolicy="no-referrer"
                width={1000}
                height={1500}
                fetchPriority="high"
                decoding="async"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center"
              />
              
              {/* Image Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C4A6E] via-transparent to-transparent opacity-80" />

              {/* Doctor Details Overlay Banner inside Image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-card text-stone-900 border border-white/60 shadow-lg">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#0C4A6E]">Dr. Yenneti Roja</h3>
                    <p className="text-xs text-stone-600 font-accent">BDS • AP Dental Council Reg. A30469</p>
                    <p className="text-xs text-emerald-700 font-medium font-accent mt-0.5">Telugu, English & Hindi</p>
                  </div>
                  {isOpen ? (
                    <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Open Now</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-600 text-xs font-bold px-3 py-1 rounded-full border border-stone-300 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-stone-400" />
                      <span>Closed Now</span>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Floating Google Rating Pill Badge */}
            <div className="absolute -top-5 -left-4 sm:-left-6 bg-stone-900 text-white p-3 sm:p-4 rounded-2xl shadow-2xl border border-amber-400/40 flex items-center gap-3 backdrop-blur-md z-20 transform hover:scale-105 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-stone-900 font-bold">
                <Star className="w-6 h-6 fill-stone-900 text-stone-900" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-serif font-bold text-xl text-amber-300">5.0</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-stone-300 font-accent">{CLINIC_INFO.reviewsCount}+ Verified Google Reviews</p>
              </div>
            </div>

            {/* Telugu Local Connection Badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-amber-600 text-white px-4 py-2 rounded-2xl shadow-xl font-telugu text-sm font-bold border border-amber-400/50 flex items-center gap-2">
              <span>మా క్లినిక్కు స్వాగతం</span>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Curved SVG Transition */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg 
          className="relative block w-full h-12 sm:h-16 lg:h-20 text-[#FAFAF9]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};
