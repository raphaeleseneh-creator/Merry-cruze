import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, ShieldCheck, Zap, CheckCircle2, ArrowRight, FileText } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductImage } from './ProductImage';

interface StickyTrolleySectionProps {
  onSelectProduct: (slug: string) => void;
  onRequestQuote: () => void;
}

export const StickyTrolleySection: React.FC<StickyTrolleySectionProps> = ({
  onSelectProduct,
  onRequestQuote,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'organise',
      tag: 'PHASE 01 // MODULAR CAPACITY',
      title: 'ORGANISE YOUR CLEANING',
      subtitle: 'Eliminate corridor backtracking with structured multi-tier storage.',
      description:
        'A janitorial cart is not just a carrier; it is an organized mobile depot. By centralizing spray bottles, microfiber cloths, gloves, caution cones, and a 100L heavy-duty refuse bag onto a single rolling platform, housekeeping staff complete multi-room sanitation rounds up to 40% faster.',
      highlights: [
        'Dedicated upper caddy for disinfectant bottles & trigger sprayers',
        'Middle recessed shelf for folded microfiber rags and safety gloves',
        'Heavy-duty side clip clamps for mop and broom handle retention',
        'Fold-flat front bucket platform that nests an industrial wringer bucket',
      ],
      trolleyFocus: 'shelves',
    },
    {
      id: 'equip',
      tag: 'PHASE 02 // INSTITUTIONAL RESILIENCE',
      title: 'EQUIP BUSY ENVIRONMENTS',
      subtitle: 'Built for the demanding corridors of hotels, hospitals, and corporate towers.',
      description:
        'Standard consumer carts quickly deteriorate under commercial duty cycles. Merrycruze equipment is molded from high-impact structural polypropylene that does not rust, dent, or harbor bacterial moisture. Non-marking swivel wheels roll silently without leaving streaks on marble or terrazzo.',
      highlights: [
        'Chemical-resistant polymer body withstands bleach & caustic detergents',
        'Four silent 360-degree non-marking casters protect polished flooring',
        'Reinforced ergonomic steering handle reduces operator wrist strain',
        'Smooth radiused interior corners enable immediate hygienic wipe-downs',
      ],
      trolleyFocus: 'durability',
    },
    {
      id: 'operations',
      tag: 'PHASE 03 // WORKFLOW SIMPLIFICATION',
      title: 'MAKE FACILITY OPERATIONS EASIER',
      subtitle: 'Lower operating overhead and protect facility assets with standardized gear.',
      description:
        'When every floor operates with identical equipment, supply management becomes predictable. Facility managers reduce staff turnover caused by physical fatigue, eliminate lost cleaning tools, and ensure every guest or tenant experiences the exact same standard of hygiene.',
      highlights: [
        'Uniform procurement standard across multiple branches and locations',
        'Reduced physical strain and operator fatigue during prolonged shifts',
        'Direct bulk replacement parts available through Merrycruze supply',
        'Immediate audit-ready compliance for institutional hygiene standards',
      ],
      trolleyFocus: 'operations',
    },
  ];

  const currentStepData = steps[activeStep];

  return (
    <section className="relative py-16 md:py-24 px-3 sm:px-6 bg-[#171717] text-white overflow-hidden">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#F59A23]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F59A23] text-xs font-bold tracking-widest uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Facility Mobility & Ergonomics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-none">
            ENGINEERED FOR DAILY <br />
            <span className="text-[#F59A23]">COMMERCIAL FLEET DUTY</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Discover why facility managers, hotels, and cleaning contractors rely on the Merrycruze janitorial station to anchor their daily sanitation workflows.
          </p>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP STICKY SPLIT EXPERIENCE */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Sticky Visual Station (Remains in view while information is explored) */}
          <div className="lg:col-span-6 lg:sticky lg:top-24">
            <div className="relative rounded-3xl bg-neutral-900 border border-neutral-800 p-6 md:p-8 shadow-2xl overflow-hidden">
              
              {/* Top Rig Label */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59A23]" />
                  <span className="text-xs font-mono tracking-wider text-neutral-300 uppercase">
                    Rig Specification // MC-001
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectProduct('cleaning-trolley')}
                  className="text-xs font-semibold text-[#F59A23] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>View Full Spec</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Central Trolley Visual Presentation */}
              <div className="relative my-6 aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 flex items-center justify-center group">
                <ProductImage
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                  alt="Merrycruze Janitorial Cleaning Station"
                  category="cleaning-janitorial"
                  slug="cleaning-trolley"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-90"
                />

                {/* Overlaid Highlight Badge based on active phase */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md rounded-xl p-3 border border-neutral-700/80 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-[#F59A23] font-bold tracking-wider uppercase">
                      Active Architecture
                    </p>
                    <p className="text-xs font-bold text-white">
                      {activeStep === 0 && 'Multi-Tiered Tool Storage & Heavy Vinyl Sack'}
                      {activeStep === 1 && 'Heavy Structural Polypropylene Chassis'}
                      {activeStep === 2 && 'Smooth Non-Marking 360° Floor Casters'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onRequestQuote}
                    className="bg-[#F59A23] hover:bg-[#D97706] text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    Get Fleet Quote
                  </button>
                </div>
              </div>

              {/* Bottom Interactive Step Switches */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                {steps.map((step, idx) => (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      activeStep === idx
                        ? 'bg-[#F59A23]/15 border-[#F59A23] text-white'
                        : 'bg-neutral-800/50 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span className="block text-[10px] font-mono text-[#F59A23]">0{idx + 1}</span>
                    <span className="block text-xs font-bold mt-0.5 line-clamp-1">{step.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Dynamic Storytelling Content that changes */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStepData.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-neutral-900/90 rounded-3xl p-6 sm:p-8 border border-neutral-800"
              >
                <span className="text-xs font-mono font-bold tracking-widest text-[#F59A23] uppercase">
                  {currentStepData.tag}
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight mt-2 leading-tight">
                  {currentStepData.title}
                </h3>

                <p className="mt-2 text-base font-semibold text-neutral-300">
                  {currentStepData.subtitle}
                </p>

                <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
                  {currentStepData.description}
                </p>

                {/* Key Operational Highlights */}
                <div className="mt-8 pt-6 border-t border-neutral-800 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Standard Fleet Capabilities:
                  </p>
                  {currentStepData.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#F59A23] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-neutral-300 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Action Footnote */}
                <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectProduct('cleaning-trolley')}
                    className="bg-[#F59A23] hover:bg-[#D97706] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Inspect Janitorial Trolley</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={onRequestQuote}
                    className="text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
                  >
                    <FileText className="w-4 h-4 text-[#F59A23]" />
                    <span>Request Corporate Facility Pricing</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Quick Reference Indicator */}
            <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span>Standard Warranty on Welds & Polypropylene Frame</span>
              <span className="text-[#F59A23] font-semibold">Verified Supply Quality</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
