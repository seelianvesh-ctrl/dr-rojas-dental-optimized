import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Is Root Canal Treatment (RCT) really painless?",
      answer: "Yes, completely! With modern rotary endodontics, computerized apex locators, and gentle local anesthesia, the procedure is smooth and virtually painless. In fact, RCT eliminates the acute toothache you were suffering from. Most patients feel immediate relief after their very first sitting."
    },
    {
      question: "Do I need a prior appointment, or can I walk in directly?",
      answer: "We welcome direct walk-ins for emergency toothaches and acute dental pain during all working hours. For routine checkups, cleanings, and smile consultations, we encourage booking via WhatsApp or phone so you have dedicated chair time with zero waiting."
    },
    {
      question: "What are your clinic timings on Sundays and weekdays?",
      answer: "We are open all 7 days a week for the convenience of families, shift workers, and working professionals. Monday to Saturday: 9:00 AM to 9:00 PM continuously. Sundays: 9:00 AM to 5:00 PM."
    },
    {
      question: "Do you offer Clear Aligners (Invisible Braces) and Dental Implants?",
      answer: "Yes! Dr. Roja specializes in advanced cosmetic orthodontics with custom 3D-planned transparent clear aligners, as well as permanent dental implants using bio-compatible titanium and natural-looking zirconia crowns."
    },
    {
      question: "What languages do Dr. Roja and the staff communicate in?",
      answer: "Dr. Roja and our clinic team consult fluently in Telugu, English, and Hindi, ensuring that patients and elderly family members from Kurmannapalem, Duvvada, Ukkunagaram (Steel Plant), and beyond feel completely comfortable."
    },
    {
      question: "What sterilization standards do you maintain?",
      answer: "We maintain hospital-grade Class-B medical autoclave sterilization. All instruments are sealed in sterile indicator pouches and opened directly in front of you. We also use 100% disposable patient examination kits."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappMsg = encodeURIComponent("Hi, I want to book an appointment with Dr. Roja");

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAFAF9] relative scroll-mt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-[#0891B2] font-accent font-semibold text-xs sm:text-sm tracking-widest uppercase bg-cyan-50 px-4 py-1.5 rounded-full border border-cyan-200">
            <HelpCircle className="w-4 h-4 text-[#0891B2]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C4A6E]">
            Everything You Need to Know
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-sans">
            Got questions before visiting? Here are honest, direct answers to common queries from our patients in Kurmannapalem and Gajuwaka.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-cyan-300 shadow-lg' 
                    : 'bg-white/80 border-stone-200 hover:border-stone-300 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl font-bold text-[#0C4A6E] focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div className={`p-2 rounded-xl transition-transform duration-300 shrink-0 ${
                    isOpen ? 'bg-cyan-100 text-[#0891B2] rotate-180' : 'bg-stone-100 text-stone-500'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-stone-600 text-sm sm:text-base font-sans leading-relaxed border-t border-stone-100 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-xl text-[#0C4A6E]">Have a specific dental question or toothache?</h4>
            <p className="text-stone-600 text-sm font-sans mt-1">
              Message Dr. Roja directly on WhatsApp for guidance.
            </p>
          </div>
          
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-accent font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-transform hover:scale-105 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
