import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { BookingSection } from './components/BookingSection';
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
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <Testimonials />
        <BeforeAfterGallery />
        <BookingSection />
        <ContactLocation />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
