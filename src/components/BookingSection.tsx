import React, { useState } from 'react';
import { MessageCircle, Phone, Calendar, Clock, User, ShieldCheck, CheckCircle, Sparkles } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data/clinicData';
import { BookingFormState } from '../types';

export const BookingSection: React.FC = () => {
  const [formState, setFormState] = useState<BookingFormState>({
    name: '',
    phone: '',
    service: 'Root Canal Treatment',
    date: new Date().toISOString().split('T')[0],
    timeSlot: 'Morning (9:00 AM – 1:00 PM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hi Dr. Roja,\n\nI would like to book an appointment at Dr. Roja's Dental Clinic:\n` +
      `• Patient Name: ${formState.name || 'Not provided'}\n` +
      `• Phone Number: ${formState.phone || 'Not provided'}\n` +
      `• Required Service: ${formState.service}\n` +
      `• Preferred Date: ${formState.date}\n` +
      `• Preferred Time: ${formState.timeSlot}\n` +
      (formState.notes ? `• Symptoms/Notes: ${formState.notes}\n` : '') +
      `\nPlease confirm availability. Thank you!`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encoded}`;
    
    setTimeout(() => {
      window.open(url, '_blank');
      setSubmitted(false);
    }, 600);
  };

  const directWhatsappMsg = encodeURIComponent("Hi Dr. Roja, I would like to book an appointment for dental consultation at your clinic.");

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#0C4A6E] text-white relative overflow-hidden bg-noise hero-mesh scroll-mt-28">
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs font-accent font-semibold tracking-wider uppercase">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>APPOINTMENT BOOKING</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Ready for a Healthier, <br />
              <span className="text-amber-300 italic">Brighter Smile?</span>
            </h2>

            <p className="text-cyan-100 text-base sm:text-lg font-sans leading-relaxed">
              Book your visit with Dr. Yenneti Roja (BDS) in Kurmannapalem, Gajuwaka. Experience honest advice, gentle care, and zero waiting times.
            </p>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-2xl bg-cyan-950/60 border border-cyan-700/50 space-y-4 text-left">
              <h3 className="font-serif font-bold text-lg text-amber-300 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>Clinic Hours</span>
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-stone-200">
                <p><span className="font-bold text-white">Monday – Saturday:</span> 9:00 AM – 1:00 PM & 5:00 PM – 9:00 PM</p>
                <p><span className="font-bold text-white">Sunday:</span> 9:00 AM – 1:00 PM</p>
              </div>

              <div className="pt-3 border-t border-cyan-800/80 flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-xs text-cyan-200">Direct Emergency Call:</p>
                  <a href={`tel:${CLINIC_INFO.phone1Raw}`} className="font-accent font-bold text-amber-300 text-base hover:underline">
                    {CLINIC_INFO.phone1}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Pill */}
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${directWhatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-accent font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Instant 1-Click WhatsApp Booking</span>
            </a>
          </div>

          {/* Right Form Card Column */}
          <div className="lg:col-span-7">
            <div className="bg-white text-stone-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-stone-200">
              
              <div className="space-y-2 mb-6 text-center lg:text-left">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C4A6E]">
                  Schedule Your Visit
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 font-sans">
                  Fill in your preferred details below. Clicking submit will open WhatsApp with your pre-filled booking details.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-accent font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-3.5 top-3.5 text-stone-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Verma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-300 focus:border-[#0891B2] focus:ring-2 focus:ring-cyan-200 outline-none text-sm font-sans"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-accent font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 absolute left-3.5 top-3.5 text-stone-400" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 82474 91265"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-300 focus:border-[#0891B2] focus:ring-2 focus:ring-cyan-200 outline-none text-sm font-sans"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-accent font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Required Dental Treatment
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#0891B2] focus:ring-2 focus:ring-cyan-200 outline-none text-sm font-sans bg-white"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Consultation / Toothache">General Consultation / Toothache</option>
                  </select>
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-accent font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-5 h-5 absolute left-3.5 top-3.5 text-stone-400" />
                      <input
                        type="date"
                        value={formState.date}
                        onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-300 focus:border-[#0891B2] focus:ring-2 focus:ring-cyan-200 outline-none text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-accent font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Time Slot
                    </label>
                    <select
                      value={formState.timeSlot}
                      onChange={(e) => setFormState({ ...formState, timeSlot: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#0891B2] focus:ring-2 focus:ring-cyan-200 outline-none text-sm font-sans bg-white"
                    >
                      <option value="Morning (9:00 AM – 1:00 PM)">Morning (9:00 AM – 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                      <option value="Evening (5:00 PM – 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Optional Symptoms Note */}
                <div>
                  <label className="block text-xs font-accent font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Symptoms or Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Tooth ache in lower molar, sensitive to hot water..."
                    value={formState.notes}
                    onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-[#0891B2] focus:ring-2 focus:ring-cyan-200 outline-none text-sm font-sans"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full flex items-center justify-center gap-2 bg-[#D97706] hover:bg-[#B45309] text-white font-accent font-bold text-base py-4 rounded-xl shadow-lg transition-all transform active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>{submitted ? 'Opening WhatsApp...' : 'Confirm & Book on WhatsApp →'}</span>
                </button>

              </form>

              {/* Confirmation Reassurance */}
              <div className="mt-4 p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center gap-2 text-xs text-stone-600 font-sans">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>We confirm your appointment timing within 30 minutes during clinic hours.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
