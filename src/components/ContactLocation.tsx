import React from 'react';
import { MapPin, Phone, Clock, CreditCard, ExternalLink, Navigation, CheckCircle2, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const ContactLocation: React.FC = () => {
  const whatsappMsg = encodeURIComponent("Hi Dr. Roja, I would like to book a dental consultation at your clinic.");

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-[#FAFAF9] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-[#0891B2] font-accent font-semibold text-xs sm:text-sm tracking-widest uppercase bg-cyan-50 px-4 py-1.5 rounded-full border border-cyan-200">
            <MapPin className="w-4 h-4 text-[#0891B2]" />
            <span>LOCATION & ACCESS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C4A6E]">
            Visit Our Clinic
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-sans">
            Conveniently located on Duvvada Railway Station Road, Kurmannapalem with easy parking and direct highway access.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Information Card Column */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-stone-200 shadow-xl space-y-8">
            
            {/* Address Block */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-xl text-[#0C4A6E] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#0891B2]" />
                <span>Clinic Address</span>
              </h3>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
                {CLINIC_INFO.address}
              </p>
              <p className="text-xs font-accent text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200 leading-relaxed">
                📍 <strong>Landmark:</strong> {CLINIC_INFO.landmark}
                <br />
                🚗 <strong>Parking:</strong> Dedicated two-wheeler & free four-wheeler street parking.
              </p>
            </div>

            {/* Areas Served Badge */}
            <div className="space-y-2">
              <p className="text-xs font-accent font-semibold text-stone-500 uppercase tracking-wider">Nearby Areas Served:</p>
              <p className="text-xs text-stone-700 bg-stone-100 p-2.5 rounded-xl border border-stone-200">
                {CLINIC_INFO.areasServed}
              </p>
            </div>

            {/* Phone Numbers & WhatsApp */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <h3 className="font-serif font-bold text-lg text-[#0C4A6E] flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#0891B2]" />
                <span>Appointments & Inquiries</span>
              </h3>
              <div className="flex flex-col gap-2 font-accent font-semibold text-sm">
                <a 
                  href={`tel:${CLINIC_INFO.phone1Raw}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-[#0C4A6E] border border-cyan-200 transition-colors"
                >
                  <span>Phone Call: {CLINIC_INFO.phone1}</span>
                  <span className="text-xs bg-[#0C4A6E] text-white px-2.5 py-0.5 rounded-md">Call Now</span>
                </a>

                <a 
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Booking: {CLINIC_INFO.phone1}</span>
                  </span>
                  <span className="text-xs bg-[#25D366] text-white px-2.5 py-0.5 rounded-md">Chat</span>
                </a>
              </div>
            </div>

            {/* Timings Table */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <h3 className="font-serif font-bold text-lg text-[#0C4A6E] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#0891B2]" />
                <span>Consultation Timings</span>
              </h3>
              <div className="rounded-2xl overflow-hidden border border-stone-200 text-xs sm:text-sm">
                <div className="p-3 bg-stone-100 font-bold text-stone-800 flex justify-between border-b border-stone-200">
                  <span>Days</span>
                  <span>Session Hours</span>
                </div>
                {CLINIC_INFO.hours.map((h, i) => (
                  <div key={i} className="p-3 flex justify-between items-center border-b border-stone-100 text-stone-700">
                    <span className="font-semibold text-stone-900">{h.days}</span>
                    <span className="text-right text-stone-600">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment & Insurance Methods */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <h3 className="font-serif font-bold text-lg text-[#0C4A6E] flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-[#0891B2]" />
                <span>Accepted Payment Modes</span>
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-accent">
                {['Google Pay', 'PhonePe', 'Paytm UPI', 'Cash', 'Credit / Debit Cards', 'Net Banking'].map((pay) => (
                  <span key={pay} className="inline-flex items-center gap-1 bg-stone-100 text-stone-800 px-3 py-1.5 rounded-lg border border-stone-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {pay}
                  </span>
                ))}
              </div>
            </div>

            {/* Google Maps External Directions CTA */}
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0C4A6E] hover:bg-[#0891B2] text-white font-accent font-bold py-3.5 px-6 rounded-2xl shadow-md transition-colors"
            >
              <Navigation className="w-4 h-4 text-amber-400" />
              <span>Get Directions on Google Maps →</span>
            </a>

          </div>

          {/* Right Map Embed Column */}
          <div className="lg:col-span-7 h-full min-h-[450px] rounded-3xl overflow-hidden border-2 border-stone-300/80 shadow-2xl relative bg-stone-200">
            <iframe
              title="Dr. Roja's Dental Clinic Google Map Location in Kurmannapalem Gajuwaka"
              src={CLINIC_INFO.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '520px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-3xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
