import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Star, Menu, X, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { trackWhatsAppClick, trackCallClick } from '../lib/analytics';

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
    { name: 'Services', href: '#services' },
    { name: 'About Doctor', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Location', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  const whatsappMsg = encodeURIComponent("Hi, I want to book an appointment with Dr. Roja");

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-[#0C4A6E] text-white text-xs font-accent py-2 px-4 border-b border-cyan-800/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full font-semibold border border-amber-400/30">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              5.0 Rated on Google (25+ Reviews)
            </span>
            <span className="hidden md:inline text-cyan-200/60">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-cyan-100">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Kurmannapalem, Visakhapatnam
            </span>
          </div>

          <div className="flex items-center gap-4 text-cyan-100">
            <span className="hidden lg:inline-flex items-center gap-1 text-xs">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Mon–Sat: 9am–9pm | Sun: 9am–5pm
            </span>
            <a 
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition-colors font-medium"
              onClick={() => trackWhatsAppClick('navbar-topbar')}
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
              <span>WhatsApp Quick Book</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAFAF9]/95 backdrop-blur-md shadow-md py-2.5 border-b border-stone-200' 
            : 'bg-[#0C4A6E]/95 backdrop-blur-sm py-3 border-b border-cyan-900/50 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Name - High Contrast on all backgrounds */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Clinic Logo */}
            <div className="relative">
              <img
                src="/logo.webp"
                alt="Dr. Roja's Dental Clinic Logo"
                width={256}
                height={256}
                decoding="async"
                className="h-10 sm:h-12 w-auto object-contain rounded-xl shadow-md border border-amber-400/40 bg-black/40"
                onError={(e) => {
                  // Fallback to custom tooth icon if logo image is not found
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div 
                className={`logo-fallback hidden p-2.5 rounded-2xl transition-transform duration-300 group-hover:scale-105 ${
                  isScrolled ? 'bg-[#0C4A6E] text-white shadow-sm' : 'bg-gradient-to-br from-amber-400 to-amber-600 text-stone-900 shadow-md'
                }`}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8 2 6 4 6 8C6 11 7.5 13 8 16C8.5 19 9.5 22 11 22C11.5 22 12 20.5 12 19C12 20.5 12.5 22 13 22C14.5 22 15.5 19 16 16C16.5 13 18 11 18 8C18 4 16 2 12 2Z" />
                </svg>
              </div>
            </div>

            <div>
              <span className={`block font-serif text-xl sm:text-2xl font-bold tracking-tight leading-none ${
                isScrolled ? 'text-[#0C4A6E]' : 'text-white'
              }`}>
                Dr. Roja's <span className={isScrolled ? 'text-amber-600' : 'text-amber-300'}>Dental Clinic</span>
              </span>
              <span className={`block text-[11px] font-accent font-semibold tracking-wider uppercase mt-1 ${
                isScrolled ? 'text-stone-600' : 'text-amber-100/90'
              }`}>
                KURMANNAPALEM • BDS (REG. A30469)
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
                className={`text-sm font-accent font-semibold transition-colors hover:text-amber-400 ${
                  isScrolled ? 'text-stone-700' : 'text-stone-100 hover:text-amber-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Header CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phone1Raw}`}
              className={`flex items-center gap-2 text-xs font-accent font-semibold py-2 px-3 rounded-xl border transition-colors ${
                isScrolled 
                  ? 'border-stone-300 text-stone-800 hover:bg-stone-100' 
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
              onClick={() => trackCallClick('navbar-desktop')}
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{CLINIC_INFO.phone1}</span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-accent font-bold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95"
              onClick={() => trackWhatsAppClick('navbar-desktop')}
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? 'text-stone-800 hover:bg-stone-100' : 'text-white hover:bg-cyan-900/50'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C4A6E] text-white border-b border-cyan-800 px-6 py-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-accent font-semibold py-2 border-b border-cyan-800/60 text-stone-100 hover:text-amber-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${CLINIC_INFO.phone1Raw}`}
              className="w-full flex items-center justify-center gap-2 bg-white/10 text-white font-accent font-semibold text-sm py-3 px-4 rounded-xl border border-white/20"
              onClick={() => trackCallClick('navbar-mobile')}
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Clinic: {CLINIC_INFO.phone1}</span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-accent font-bold text-sm py-3.5 px-4 rounded-xl shadow-md"
              onClick={() => trackWhatsAppClick('navbar-mobile')}
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Book on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
