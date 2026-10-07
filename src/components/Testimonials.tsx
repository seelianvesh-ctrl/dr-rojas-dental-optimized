import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink, CheckCircle } from 'lucide-react';
import { REVIEWS, CLINIC_INFO } from '../data/clinicData';
import { trackDirectionsClick } from '../lib/analytics';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F4] relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-amber-700 font-accent font-semibold text-xs sm:text-sm tracking-widest uppercase bg-amber-100/80 px-4 py-1.5 rounded-full border border-amber-300">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>5.0 PERFECT GOOGLE RATING</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C4A6E]">
            What Our Patients Say
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-sans">
            {CLINIC_INFO.reviewsCount}+ five-star reviews on Google Maps. Read authentic experiences from families across Kurmannapalem, Duvvada, Ukkunagaram & Gajuwaka.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Slide Card */}
          <div className="bg-gradient-to-br from-stone-50 via-white to-cyan-50/60 rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-xl relative overflow-hidden">
            
            {/* Background Decorative Quote Watermark */}
            <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-24 h-24 text-stone-200/60 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Star Rating & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-serif font-bold text-stone-800 text-lg ml-2">5.0</span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-accent font-semibold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Google Patient</span>
                </span>
              </div>

              {/* Treatment Pill */}
              <div className="inline-block bg-[#0C4A6E]/10 text-[#0C4A6E] px-3.5 py-1 rounded-xl text-xs font-accent font-bold uppercase tracking-wider">
                Procedure: {currentReview.treatment}
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-stone-800 leading-relaxed italic">
                "{currentReview.text}"
              </blockquote>

              {/* Author & Location */}
              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#0C4A6E]">{currentReview.author}</h4>
                  <p className="text-xs sm:text-sm text-stone-500 font-sans">{currentReview.location} • {currentReview.date}</p>
                </div>

                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-accent font-semibold text-[#0891B2] hover:text-[#0C4A6E]"
                  onClick={() => trackDirectionsClick()}
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              aria-label="Previous Review"
              className="p-3 rounded-full bg-white hover:bg-stone-100 text-[#0C4A6E] shadow-md border border-stone-200 transition-all hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-xs font-accent font-semibold text-stone-600">
              {currentIndex + 1} of {REVIEWS.length}
            </span>
            <button
              onClick={nextSlide}
              aria-label="Next Review"
              className="p-3 rounded-full bg-white hover:bg-stone-100 text-[#0C4A6E] shadow-md border border-stone-200 transition-all hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
