import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Star, Menu, X, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Dr. Roja', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Patient Reviews', href: '#reviews' },
    { name: 'Smile Gallery', href: '#gallery' },
    { name: 'Location & Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  const whatsappMsg = encodeURIComponent("Hi Dr. Roja, I would like to book a dental appointment at your Kurmannapalem clinic.");

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-[#0C4A6E] text-white text-xs font-accent py-2 px-4 border-b border-cyan-800/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full font-semibold border border-amber-400/30">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              5.0 Rated on Google (18 Reviews)
            </span>
            <span className="hidden md:inline text-cyan-200/60">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-cyan-100">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Kurmannapalem, Gajuwaka, Visakhapatnam
            </span>
          </div>

          <div className="flex items-center gap-4 text-cyan-100">
            <span className="hidden lg:inline-flex items-center gap-1 text-xs">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Mon–Sat: 9am–1pm & 5pm–9pm
            </span>
            <a 
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
              <span>WhatsApp Quick Book</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAFAF9]/95 backdrop-blur-md shadow-md py-3 border-b border-stone-200' 
            : 'bg-[#0C4A6E]/90 backdrop-blur-sm py-4 border-b border-cyan-900/50 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className={`p-2.5 rounded-2xl transition-transform duration-300 group-hover:scale-105 ${
              isScrolled ? 'bg-[#0C4A6E] text-white shadow-sm' : 'bg-gradient-to-br from-cyan-500 to-[#0891B2] text-white'
            }`}>
              {/* Custom Tooth SVG Icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8 2 6 4 6 8C6 11 7.5 13 8 16C8.5 19 9.5 22 11 22C11.5 22 12 20.5 12 19C12 20.5 12.5 22 13 22C14.5 22 15.5 19 16 16C16.5 13 18 11 18 8C18 4 16 2 12 2Z" />
                <path d="M8.5 8.5C9.5 7.5 11 7 12 7" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>
            <div>
              <span className={`block font-serif text-xl sm:text-22px font-bold tracking-tight leading-none ${
                isScrolled ? 'text-[#0C4A6E]' : 'text-white'
              }`}>
                Dr. Roja's <span className="text-[#0891B2]">Dental Clinic</span>
              </span>
              <span className={`block text-11px font-accent tracking-wider uppercase mt-1 ${
                isScrolled ? 'text-stone-500' : 'text-cyan-200/80'
              }`}>
                Gajuwaka, Visakhapatnam • BDS (Reg. A30469)
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-14px font-medium transition-colors hover:text-amber-500 ${
                  isScrolled ? 'text-stone-700' : 'text-stone-100 hover:text-amber-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phone1Raw}`}
              className={`p-2.5 rounded-full border transition-all ${
                isScrolled 
                  ? 'border-stone-300 text-stone-700 hover:bg-stone-100' 
                  : 'border-cyan-700 text-cyan-100 hover:bg-cyan-800/50'
              }`}
              title="Call Clinic Now"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, '#booking')}
              className="inline-flex items-center gap-2 bg-[#D97706] hover:bg-[#B45309] text-white text-14px font-accent font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95"
            >
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-stone-800 hover:bg-stone-100' : 'text-white hover:bg-cyan-800'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0C4A6E] text-white border-b border-cyan-800 px-6 py-6 shadow-2xl space-y-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-cyan-100 hover:text-amber-400 py-1 border-b border-cyan-800/50"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 flex flex-col gap-3">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-accent font-semibold py-3 rounded-xl shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone1Raw}`}
                className="w-full flex items-center justify-center gap-2 border border-cyan-600 hover:bg-cyan-800/60 text-cyan-100 font-accent font-medium py-3 rounded-xl"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call: {CLINIC_INFO.phone1}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
