import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#1C1917] font-sans antialiased selection:bg-[#0891B2] selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustMarquee />
        <ServicesSection />
        <AboutSection />
        <WhyChooseUs />
        <Testimonials />
        <BookingSection />
        <FaqSection />
        <ContactLocation />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
