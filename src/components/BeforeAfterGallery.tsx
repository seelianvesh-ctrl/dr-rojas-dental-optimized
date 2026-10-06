import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal, Info, CheckCircle2 } from 'lucide-react';
import { BEFORE_AFTER_ITEMS } from '../data/clinicData';

export const BeforeAfterGallery: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('grid');

  const currentItem = BEFORE_AFTER_ITEMS[selectedCase];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAFAF9] relative grain scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-[#0891B2] font-accent font-extrabold text-xs tracking-widest uppercase bg-cyan-50/80 px-4 py-1.5 rounded-full border border-cyan-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#0891B2]" />
            <span>SMILE TRANSFORMATION GALLERY</span>
          </div>
          <h2 className="serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C4A6E] tracking-tight leading-[1.05]">
            Smile <span className="italic text-[#D97706]">Gallery</span> & Case Studies
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-sans max-w-2xl mx-auto">
            Explore authentic before & after smile transformations performed by Dr. Yenneti Roja at our Kurmannapalem clinic.
          </p>

          {/* View Mode Toggle */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="bg-white p-1 rounded-2xl border border-stone-200 shadow-md inline-flex">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-5 py-2 rounded-xl text-xs font-accent font-bold uppercase tracking-wider transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#0C4A6E] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All Smile Cases Grid ({BEFORE_AFTER_ITEMS.length})
              </button>
              <button
                onClick={() => setViewMode('slider')}
                className={`px-5 py-2 rounded-xl text-xs font-accent font-bold uppercase tracking-wider transition-all ${
                  viewMode === 'slider'
                    ? 'bg-[#0C4A6E] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Interactive Comparison Slider
              </button>
            </div>
          </div>

          {/* Treatment Filter Pill Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
            {BEFORE_AFTER_ITEMS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedCase(index);
                  setSliderPosition(50);
                }}
                className={`px-4 sm:px-5 py-2 rounded-2xl text-xs sm:text-sm font-accent font-bold uppercase tracking-wider transition-all duration-200 ${
                  selectedCase === index
                    ? 'bg-[#D97706] text-white shadow-lg scale-105 border-2 border-[#D97706]'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* View Mode 1: Full Smile Gallery Cards Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BEFORE_AFTER_ITEMS.map((item, idx) => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Before/After Images Side by Side */}
                <div className="relative h-56 bg-stone-100 grid grid-cols-2 gap-0.5 overflow-hidden border-b border-stone-200">
                  {/* Before Side */}
                  <div className="relative h-full overflow-hidden">
                    <img 
                      src={item.beforeImg} 
                      alt={`${item.title} Before`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-2 left-2 bg-stone-900/80 backdrop-blur text-white font-accent font-bold text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider">
                      BEFORE
                    </span>
                  </div>

                  {/* After Side */}
                  <div className="relative h-full overflow-hidden">
                    <img 
                      src={item.afterImg} 
                      alt={`${item.title} After`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-2 right-2 bg-emerald-600/90 backdrop-blur text-white font-accent font-bold text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider">
                      AFTER
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-accent font-bold uppercase tracking-widest text-[#D97706] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        {item.procedure}
                      </span>
                      <span className="text-[11px] font-bold text-stone-400">Case #{idx + 1}</span>
                    </div>
                    <h3 className="serif font-bold text-xl text-[#0C4A6E] mb-2">{item.title}</h3>
                    <p className="text-xs text-stone-600 font-sans leading-relaxed">{item.description}</p>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCase(idx);
                      setViewMode('slider');
                      setSliderPosition(50);
                    }}
                    className="w-full py-2.5 px-4 bg-stone-100 hover:bg-[#0C4A6E] text-[#0C4A6E] hover:text-white rounded-xl text-xs font-accent font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>Compare with Interactive Slider</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Mode 2: Interactive Image Split Slider */}
        {viewMode === 'slider' && (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-5 sm:p-8 border border-stone-200 shadow-2xl space-y-6">
            
            {/* Header Bar showing active treatment category */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#D97706]" />
                <span className="text-xs font-accent font-extrabold text-[#0C4A6E] uppercase tracking-widest">
                  Selected Treatment: <span className="text-[#D97706]">{currentItem.title}</span>
                </span>
              </div>
              <span className="text-xs font-bold text-stone-400 bg-stone-100 px-3 py-1 rounded-full uppercase tracking-widest">
                Dr. Roja's Patient Case #{selectedCase + 1}
              </span>
            </div>

            <div className="relative h-[340px] sm:h-[460px] rounded-2xl overflow-hidden select-none border border-stone-200 bg-stone-100 shadow-inner">
              
              {/* After Image (Base) */}
              <img
                src={currentItem.afterImg}
                alt={`${currentItem.title} After Treatment`}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
              />
              
              {/* After Badge */}
              <div className="absolute top-4 right-4 bg-emerald-600/95 backdrop-blur text-white font-accent font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg z-10 flex items-center gap-1.5 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-200 animate-pulse"></span>
                <span>AFTER ({currentItem.title})</span>
              </div>

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute top-0 bottom-0 left-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentItem.beforeImg}
                  alt={`${currentItem.title} Before Treatment`}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover max-w-none transition-opacity duration-300"
                  style={{ width: '100%', height: '100%' }}
                />
                {/* Before Badge */}
                <div className="absolute top-4 left-4 bg-stone-900/90 backdrop-blur text-white font-accent font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg z-10 uppercase tracking-wider">
                  BEFORE TREATMENT
                </div>
              </div>

              {/* Slider Vertical Split Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#0891B2] text-white border-2 border-white flex items-center justify-center shadow-2xl">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
              </div>

              {/* Range Input Range Drag Controller */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Drag slider left or right to compare before and after treatment"
              />
            </div>

            {/* Case Details Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2">
                  <h3 className="serif font-bold text-xl sm:text-2xl text-[#0C4A6E]">{currentItem.title}</h3>
                  <span className="text-[10px] font-accent font-bold uppercase tracking-widest text-[#D97706] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                    {currentItem.procedure}
                  </span>
                </div>
                <p className="text-sm text-stone-700 font-sans leading-relaxed pt-1">{currentItem.description}</p>
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-500 font-accent bg-white px-3.5 py-2 rounded-xl border border-stone-200 shrink-0">
                <Info className="w-4 h-4 text-[#0891B2]" />
                <span>Drag slider left/right to compare</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
