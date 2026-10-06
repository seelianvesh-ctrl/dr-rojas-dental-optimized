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
  MessageCircle 
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
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F4] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-[#0891B2] font-accent font-semibold text-xs sm:text-sm tracking-widest uppercase bg-cyan-100/70 px-4 py-1.5 rounded-full border border-cyan-300/60">
            <span>CLINICAL EXCELLENCE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C4A6E]">
            Comprehensive Dental Care
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-sans">
            From painless single-sitting root canals and clear aligners to kids dentistry, Dr. Roja delivers gentle, honest, and modern care.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
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
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-accent font-semibold transition-all cursor-pointer ${
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

        {/* Uniform 3-Column Services Grid - Equal Sizing and Consistent White Spaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Icon & Category Pill */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-50 text-[#0891B2] group-hover:bg-[#0891B2] group-hover:text-white transition-all duration-300">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-accent uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 border border-stone-200">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0C4A6E] group-hover:text-[#0891B2] transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Clear Description */}
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    {service.description}
                  </p>

                  {/* Clinical Details */}
                  <p className="text-xs text-stone-500 font-sans pt-2 border-t border-stone-100 leading-normal">
                    {service.details}
                  </p>
                </div>

                {/* Uniform Bottom Action */}
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMsg(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-accent font-bold text-[#0891B2] hover:text-[#0C4A6E] transition-colors"
                  >
                    <span>Inquire on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Bottom Callout Banner */}
        <div className="mt-10 bg-gradient-to-r from-[#0C4A6E] to-[#0891B2] rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-cyan-500/30">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-300">
              Not sure which treatment you need?
            </h3>
            <p className="text-cyan-100 text-xs sm:text-sm font-sans max-w-xl">
              Describe your dental symptoms directly to Dr. Roja on WhatsApp for quick, honest guidance and cost estimates.
            </p>
          </div>

          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent("Hi, I want to book an appointment with Dr. Roja")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-accent font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-transform hover:scale-105 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
