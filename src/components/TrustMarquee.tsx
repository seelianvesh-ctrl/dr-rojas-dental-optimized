import React from 'react';
import { Star, Award, ShieldCheck, Heart, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const TrustMarquee: React.FC = () => {
  const marqueeItems = [
    { text: `★ 5.0 Google Rating (${CLINIC_INFO.reviewsCount}+ Reviews)`, icon: Star, color: "text-amber-600" },
    { text: "BDS | AP Regd. No. A30469", icon: Award, color: "text-[#0891B2]" },
    { text: "100% Painless Root Canal Treatments", icon: ShieldCheck, color: "text-emerald-600" },
    { text: "Clear Aligners & Invisible Braces", icon: Sparkles, color: "text-purple-600" },
    { text: "Dental Implants & Fixed Teeth", icon: ShieldCheck, color: "text-blue-600" },
    { text: "Telugu • English • Hindi Consultations", icon: Heart, color: "text-rose-600" },
    { text: "Kurmannapalem • Duvvada • Steel Plant", icon: MapPin, color: "text-[#0C4A6E]" },
    { text: "Class-B Hospital Grade Sterilization", icon: CheckCircle2, color: "text-emerald-600" },
  ];

  return (
    <div className="bg-[#F5F5F4] border-y border-stone-200/80 py-4 overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div 
              key={idx} 
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-stone-200/80 shadow-xs text-xs sm:text-sm font-accent font-semibold text-stone-800"
            >
              <IconComp className={`w-4 h-4 ${item.color}`} />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
