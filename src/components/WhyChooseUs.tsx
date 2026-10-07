import React from 'react';
import { Star, ShieldAlert, HeartHandshake, MapPin, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      number: "01",
      title: "Verified 5.0 Google Rating",
      description: `With ${CLINIC_INFO.reviewsCount}+ verified 5-star Google reviews, patients consistently praise our painless treatments, spotless hygiene, and warm bedside manner.`,
      icon: Star,
      badge: "100% 5.0 Rating",
      accentBg: "bg-amber-500/10 text-amber-600 border-amber-200"
    },
    {
      number: "02",
      title: "Painless, Modern Dentistry",
      description: "We utilize gentle computer-assisted anesthesia techniques, rotary apex locators for single-sitting RCTs, and digital intraoral screening for anxiety-free procedures.",
      icon: ShieldAlert,
      badge: "Painless RCT Specialist",
      accentBg: "bg-cyan-500/10 text-[#0891B2] border-cyan-200"
    },
    {
      number: "03",
      title: "Honest & Transparent Pricing",
      description: "We uphold strict medical ethics: zero unnecessary procedures, no inflated corporate packages, and upfront pricing explained clearly before treatment starts.",
      icon: HeartHandshake,
      badge: "Zero Hidden Costs",
      accentBg: "bg-emerald-500/10 text-emerald-600 border-emerald-200"
    },
    {
      number: "04",
      title: "Multilingual & Family-Centric",
      description: "Dr. Roja consults fluently in Telugu, English, and Hindi — making elderly grandparents, working professionals, and young children feel completely at home.",
      icon: HeartHandshake,
      badge: "Telugu • Hindi • English",
      accentBg: "bg-rose-500/10 text-rose-600 border-rose-200"
    },
    {
      number: "05",
      title: "Hospital-Grade Sterilization",
      description: "Every instrument goes through Class-B medical autoclaving with sealed sterile pouches opened directly in front of you. 100% disposable patient kits.",
      icon: Award,
      badge: "Strict Infection Control",
      accentBg: "bg-teal-500/10 text-teal-600 border-teal-200"
    },
    {
      number: "06",
      title: "Prime Kurmannapalem Location",
      description: "Conveniently situated on Duvvada Railway Station Road. Quick travel for residents of Steel Plant (Ukkunagaram), Duvvada, Vadlapudi, and Gajuwaka.",
      icon: MapPin,
      badge: "Duvvada Station Road",
      accentBg: "bg-purple-500/10 text-purple-600 border-purple-200"
    }
  ];

  return (
    <section id="why-us" className="py-12 sm:py-16 lg:py-20 bg-[#FAFAF9] relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-[#D97706] font-accent font-semibold text-xs sm:text-sm tracking-widest uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
            <span>THE DR. ROJA DIFFERENCE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C4A6E]">
            Why Kurmannapalem & Gajuwaka Trust Dr. Roja
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-sans">
            We built our practice on warmth, clinical precision, and unyielding patient trust. Here is why families choose us for their dental care.
          </p>
        </div>

        {/* Artistic Numbered Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff) => {
            const IconComp = diff.icon;
            return (
              <div
                key={diff.number}
                className="relative bg-white rounded-3xl p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Large Background Decorative Number */}
                <span className="absolute -bottom-6 -right-2 font-serif text-8xl font-bold text-stone-100/80 group-hover:text-cyan-50 select-none transition-colors pointer-events-none">
                  {diff.number}
                </span>

                <div className="relative z-10 space-y-4">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl border ${diff.accentBg}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-accent font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                      {diff.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0C4A6E]">
                    {diff.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
