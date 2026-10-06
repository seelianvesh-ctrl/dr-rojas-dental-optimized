import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Layers, 
  Smile, 
  Sparkle, 
  Activity, 
  Wand2, 
  Stethoscope, 
  ArrowRight, 
  MessageCircle, 
  Check 
} from 'lucide-react';
import { SERVICES, CLINIC_INFO } from '../data/clinicData';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Smile': return <Smile className="w-6 h-6" />;
      case 'Sparkle': return <Sparkle className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'Wand2': return <Wand2 className="w-6 h-6" />;
      default: return <Stethoscope className="w-6 h-6" />;
    }
  };

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const whatsappMsg = (serviceTitle: string) => 
    encodeURIComponent(`Hi Dr. Roja, I would like to inquire about ${serviceTitle} treatment at your Kurmannapalem clinic.`);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F5F4] relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-[#0891B2] font-accent font-semibold text-xs sm:text-sm tracking-widest uppercase bg-cyan-100/70 px-4 py-1.5 rounded-full border border-cyan-300/60">
            <span>CLINICAL EXCELLENCE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C4A6E]">
            Comprehensive Dental Care
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-sans">
            From pain-free root canals and pediatric care to clear aligners and permanent dental implants, Dr. Roja provides precise, gentle, and ethical treatment.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Treatments' },
              { id: 'orthodontic', label: 'Clear Aligners & Braces' },
              { id: 'restorative', label: 'Root Canal & Implants' },
              { id: 'cosmetic', label: 'Cosmetic & Whitening' },
              { id: 'preventive', label: 'Preventive & Kids Care' },
              { id: 'surgical', label: 'Wisdom Extractions' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-accent font-semibold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-[#0C4A6E] text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => {
            const isFeatured = service.isFeatured;
            return (
              <div
                key={service.id}
                className={`group relative rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 border flex flex-col justify-between ${
                  isFeatured 
                    ? 'bg-gradient-to-br from-[#0C4A6E] via-[#095980] to-[#0891B2] text-white border-cyan-600 shadow-2xl lg:col-span-2' 
                    : 'bg-white text-stone-800 border-stone-200/90 shadow-sm hover:shadow-xl hover:border-cyan-300'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-stone-900 font-accent font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    ★ In High Demand
                  </div>
                )}

                <div className="space-y-4">
                  {/* Icon Box */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    isFeatured 
                      ? 'bg-amber-400 text-stone-900 shadow-lg' 
                      : 'bg-cyan-50 text-[#0891B2] group-hover:bg-[#0891B2] group-hover:text-white'
                  }`}>
                    {getIcon(service.iconName)}
                  </div>

                  {/* Title & Category */}
                  <div>
                    <h3 className={`font-serif text-xl sm:text-2xl font-bold ${isFeatured ? 'text-stone-50' : 'text-[#0C4A6E]'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-xs font-accent uppercase tracking-wider mt-1 ${isFeatured ? 'text-amber-300' : 'text-stone-400'}`}>
                      {service.category} Care
                    </p>
                  </div>

                  {/* Descriptions */}
                  <p className={`text-sm sm:text-base leading-relaxed ${isFeatured ? 'text-cyan-100' : 'text-stone-600'}`}>
                    {service.description}
                  </p>

                  <p className={`text-xs sm:text-sm pt-2 border-t ${isFeatured ? 'border-cyan-700/60 text-stone-200' : 'border-stone-100 text-stone-500'}`}>
                    {service.details}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-stone-100/20 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMsg(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-xs sm:text-sm font-accent font-semibold transition-colors ${
                      isFeatured
                        ? 'text-amber-300 hover:text-white'
                        : 'text-[#0891B2] hover:text-[#0C4A6E]'
                    }`}
                  >
                    <span>Inquire via WhatsApp</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-cyan-500/30">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-300">
              Not sure which treatment you need?
            </h3>
            <p className="text-cyan-100 text-sm sm:text-base font-sans max-w-xl">
              Describe your symptoms directly to Dr. Roja on WhatsApp. We will help you understand the right, cost-effective treatment plan.
            </p>
          </div>

          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Dr. Roja, I have a dental symptom and would like guidance on treatment options.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-accent font-semibold text-base px-7 py-3.5 rounded-2xl shadow-lg transition-transform hover:scale-105 shrink-0"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
