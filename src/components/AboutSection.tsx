import React from 'react';
import { Award, CheckCircle, Heart, Star, Sparkles, UserCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import drRojaImg from '../assets/dr-roja.png';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAFAF9] relative overflow-hidden scroll-mt-28">
      
      {/* Decorative SVG Tooth Watermark in background */}
      <div className="absolute top-10 right-5 opacity-5 pointer-events-none text-[#0C4A6E]">
        <svg className="w-96 h-96" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8 2 6 4 6 8C6 11 7.5 13 8 16C8.5 19 9.5 22 11 22C11.5 22 12 20.5 12 19C12 20.5 12.5 22 13 22C14.5 22 15.5 19 16 16C16.5 13 18 11 18 8C18 4 16 2 12 2Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Dr. Roja Portrait Image with Overlapping Border Frame */}
          <div className="lg:col-span-5 relative">
            
            {/* Background Accent Card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#0891B2]/20 to-amber-500/20 rounded-3xl transform -rotate-3" />

            {/* Photo Container */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-stone-100">
              <img
                src={drRojaImg}
                alt="Dr. Yenneti Roja BDS - Lead Dental Surgeon in Kurmannapalem Visakhapatnam"
                className="w-full h-[450px] sm:h-[520px] object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              
              {/* Registration Pill Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-stone-900/90 backdrop-blur-md text-white p-4 rounded-2xl border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-500 rounded-xl text-stone-900">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-accent uppercase text-amber-300 tracking-wider">AP Dental Council Regd.</p>
                    <p className="font-serif font-bold text-base text-white">License No: A30469</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -top-6 -right-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-stone-200 hidden sm:flex items-center gap-3">
              <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-accent uppercase">Patient First</p>
                <p className="font-serif font-bold text-stone-900 text-sm">Gentle & Honest Care</p>
              </div>
            </div>

          </div>

          {/* Right Column - Narrative Bio */}
          <div className="lg:col-span-7 space-y-6 text-stone-800">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 text-[#0891B2] font-accent font-semibold text-xs sm:text-sm tracking-widest uppercase bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-200">
              <Sparkles className="w-4 h-4 text-[#0891B2]" />
              <span>MEET YOUR DENTIST</span>
            </div>

            {/* Doctor Name & Degree */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C4A6E] tracking-tight">
                Dr. Yenneti Roja
              </h2>
              <p className="text-lg sm:text-xl font-accent font-semibold text-[#D97706] mt-1">
                BDS — Dental Surgeon & Cosmetic Specialist
              </p>
            </div>

            {/* Humanized Biography */}
            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed font-sans">
              <p>
                Dr. Roja is a compassionate dental surgeon registered with the Andhra Pradesh Dental Council <span className="font-semibold text-stone-900">(Reg. No. A30469)</span>. She believes that visiting the dentist should feel like visiting a friend — calm, honest, and focused on what you actually need.
              </p>
              <p>
                Her clinic on Duvvada Railway Station Road, Kurmannapalem is built around one founding idea: <span className="font-semibold text-[#0C4A6E]">world-class dental care that feels warm and personal</span>. From single-visit painless root canals and custom clear aligners to dental implants, Dr. Roja takes time to explain every detail, ensuring you feel completely confident before any treatment begins.
              </p>
            </div>

            {/* Telugu Local Connection Tag */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-lg">
                🌸
              </div>
              <div>
                <p className="font-telugu text-base font-bold text-amber-900">
                  "మా క్లినిక్కు స్వాగతం" — మీ నవ్వుకి నాణ్యమైన, నమ్మకమైన వైద్యం.
                </p>
                <p className="text-xs text-amber-800 font-sans mt-0.5">
                  Welcoming families from Kurmannapalem, Duvvada, Steel Plant Township (Ukkunagaram), and Gajuwaka with personalized warmth.
                </p>
              </div>
            </div>

            {/* Key Stats Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-stone-200">
              
              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-xs text-center">
                <div className="flex items-center justify-center gap-1 text-amber-500 mb-1">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <span className="font-serif font-bold text-xl sm:text-2xl text-stone-900">5.0</span>
                </div>
                <p className="text-xs text-stone-500 font-accent uppercase font-medium">Google Rating</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-xs text-center">
                <p className="font-serif font-bold text-xl sm:text-2xl text-[#0891B2] mb-1">{CLINIC_INFO.reviewsCount}+</p>
                <p className="text-xs text-stone-500 font-accent uppercase font-medium">5-Star Reviews</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-xs text-center">
                <p className="font-serif font-bold text-xl sm:text-2xl text-[#0C4A6E] mb-1">8+ Yrs</p>
                <p className="text-xs text-stone-500 font-accent uppercase font-medium">Clinical Excellence</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
