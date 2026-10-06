import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, Star, Heart, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const Footer: React.FC = () => {
  const whatsappMsg = encodeURIComponent("Hi Dr. Roja, I would like to book a dental consultation at your clinic.");

  return (
    <footer className="bg-[#0C4A6E] text-white relative overflow-hidden pt-16 pb-12 border-t border-cyan-900">
      
      {/* Background Decorative Tooth SVG Watermark */}
      <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
        <svg className="w-96 h-96 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8 2 6 4 6 8C6 11 7.5 13 8 16C8.5 19 9.5 22 11 22C11.5 22 12 20.5 12 19C12 20.5 12.5 22 13 22C14.5 22 15.5 19 16 16C16.5 13 18 11 18 8C18 4 16 2 12 2Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-cyan-800/80">
          
          {/* Column 1: Brand & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-400 to-[#0891B2] text-white">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8 2 6 4 6 8C6 11 7.5 13 8 16C8.5 19 9.5 22 11 22C11.5 22 12 20.5 12 19C12 20.5 12.5 22 13 22C14.5 22 15.5 19 16 16C16.5 13 18 11 18 8C18 4 16 2 12 2Z" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Dr. Roja's <span className="text-cyan-300">Dental Clinic</span>
              </span>
            </div>

            <p className="text-stone-300 text-sm font-sans leading-relaxed max-w-sm">
              Compassionate, 5-star rated dental care in Kurmannapalem, Gajuwaka. Led by Dr. Yenneti Roja (BDS, AP Dental Council Reg. A30469). Consultations in Telugu, English & Hindi.
            </p>

            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-400/30 px-3.5 py-1.5 rounded-xl text-xs font-accent">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>5.0 Rated on Google Maps ({CLINIC_INFO.reviewsCount} Verified Reviews)</span>
            </div>

            {/* Social / Direct Action Pills */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white transition-colors"
                title="WhatsApp Direct Chat"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`tel:${CLINIC_INFO.phone1Raw}`}
                className="p-2.5 rounded-xl bg-cyan-800 hover:bg-cyan-700 text-cyan-200 transition-colors"
                title="Call Clinic"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition-colors"
                title="View Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-lg text-amber-300">Quick Links</h4>
            <ul className="space-y-2 text-sm font-sans text-cyan-100">
              <li><a href="#about" className="hover:text-amber-300 transition-colors">About Dr. Yenneti Roja</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Clear Aligners & Services</a></li>
              <li><a href="#why-us" className="hover:text-amber-300 transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-amber-300 transition-colors">Patient Testimonials</a></li>
              <li><a href="#gallery" className="hover:text-amber-300 transition-colors">Smile Transformations</a></li>
              <li><a href="#booking" className="hover:text-amber-300 transition-colors">Book Appointment</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition-colors">Location & Timings</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3 text-sm text-cyan-100 font-sans">
            <h4 className="font-serif font-bold text-lg text-amber-300">Visit & Call</h4>
            
            <p className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
              <span>Door No: 30, 95-58, Appikonda R.H Colony, Duvvada Station Rd, Kurmannapalem, Gajuwaka - 530046 (Opp. HP Petrol Bunk)</span>
            </p>

            <p className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`tel:${CLINIC_INFO.phone1Raw}`} className="hover:underline font-semibold text-white">
                {CLINIC_INFO.phone1}
              </a>
            </p>

            <div className="pt-2">
              <p className="text-xs font-accent text-amber-300 font-semibold mb-1">Clinic Timings:</p>
              <p className="text-xs text-cyan-200">Mon–Sat: 9:00 AM – 9:00 PM</p>
              <p className="text-xs text-cyan-200">Sunday: 9:00 AM – 5:00 PM</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-accent text-cyan-200/80">
          <p>© 2026 Dr. Roja's Dental Clinic. All Rights Reserved. AP Dental Council Reg. A30469.</p>
          <p className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>for smiles in Kurmannapalem, Visakhapatnam</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
