import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ArrowDown, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';
import { HeroProductComposition } from './HeroProductComposition';
import { MERRYCRUZE_CONFIG } from '../data/config';

interface HeroProps {
  onExploreProducts: () => void;
  onRequestQuote: () => void;
  onSelectProduct: (productSlug: string) => void;
  onAddQuote: (productSlug: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onRequestQuote,
  onSelectProduct,
  onAddQuote,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePosition({ x: x * 14, y: y * 14 });
  };

  const scrollToCategories = () => {
    const el = document.getElementById('categories-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-label="Merrycruze Hero Overview"
      onMouseMove={handleMouseMove}
      className="relative px-3 sm:px-6 pt-2 pb-8 md:pb-12"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Large Framed Hero Container occupying most of the first viewport */}
        <div className="relative rounded-3xl md:rounded-[36px] bg-[#F5F5F5] border border-[#E7E7E7] overflow-hidden shadow-xs min-h-[calc(92vh-4rem)] flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-14">
          
          {/* Subtle Graphic Architectural Grid Lines in Background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          {/* ============================================================ */}
          {/* TOP TIER: EYEBROW & RIGHT STATUS PILL */}
          {/* ============================================================ */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59A23]" />
              <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#171717] uppercase">
                {MERRYCRUZE_CONFIG.eyebrow}
              </p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hidden sm:flex items-center gap-2 text-[11px] text-[#606060] bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#E7E7E7]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#F59A23]" />
              <span>Commercial Durability • Nationwide Supply Nigeria</span>
            </motion.div>
          </div>

          {/* ============================================================ */}
          {/* MAIN EDITORIAL GRID: HEADLINE (LEFT) - COMPOSITION (CENTER) - INFO (RIGHT) */}
          {/* ============================================================ */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center my-auto py-4 md:py-6">
            
            {/* LEFT COLUMN: Large Asymmetrical Typography & CTAs */}
            <div className="lg:col-span-4 flex flex-col justify-center text-left">
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-black tracking-[-0.04em] text-[#171717] leading-[0.92] uppercase">
                  <span>CLEANER</span>
                  <br />
                  <span className="text-[#F59A23]">SAFER</span>
                  <br />
                  <span className="text-neutral-900">BETTER-</span>
                  <br />
                  <span>EQUIPPED</span>
                  <br />
                  <span className="text-neutral-800">SPACES.</span>
                </h1>

                {/* Supporting Copy */}
                <p className="mt-6 text-sm sm:text-base text-[#606060] font-normal leading-relaxed max-w-md">
                  Cleaning, household and facility products supplied to homes, businesses and institutions across Nigeria.
                </p>

                {/* CTA Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={onExploreProducts}
                    className="group bg-[#F59A23] hover:bg-[#D97706] text-white px-6 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-[#F59A23]/25 transition-all flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F59A23]"
                  >
                    <span>Explore Products</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <button
                    type="button"
                    onClick={onRequestQuote}
                    className="group bg-white hover:bg-neutral-100 text-[#171717] border border-[#E7E7E7] px-6 py-3.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer hover:border-neutral-400"
                  >
                    <span>Request a Quote</span>
                    <ChevronRight className="w-4 h-4 text-[#606060] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* CENTER COLUMN: Central Janitorial Rig Composition */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] md:min-h-[460px]">
              <motion.div
                style={
                  prefersReducedMotion
                    ? {}
                    : {
                        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
                        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      }
                }
                className="w-full h-full flex items-center justify-center"
              >
                <HeroProductComposition
                  onSelectProduct={onSelectProduct}
                  onAddQuote={onAddQuote}
                />
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Supporting Information for Home & Business */}
            <div className="lg:col-span-3 flex flex-col justify-between space-y-6">
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.2 }}
                className="bg-white/90 backdrop-blur-sm p-5 sm:p-6 rounded-2xl md:rounded-3xl border border-[#E7E7E7] shadow-xs"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F59A23] block mb-1">
                  Procurement & Supply
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#171717] tracking-tight">
                  FOR HOME & BUSINESS
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#606060] leading-relaxed">
                  Cleaning, household and facility products for everyday and commercial environments.
                </p>

                {/* Practical Applications Pill List */}
                <div className="mt-4 pt-4 border-t border-[#E7E7E7] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#606060]">Home Supply</span>
                    <span className="font-semibold text-[#171717]">Homes & Short-Lets</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#606060]">B2B Bulk Orders</span>
                    <span className="font-semibold text-[#171717]">Hotels, Offices, Schools</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#606060]">Dispatch Region</span>
                    <span className="font-semibold text-[#D97706]">Nationwide Nigeria</span>
                  </div>
                </div>
              </motion.div>

              {/* Quick Facility Equipment Highlight */}
              <div className="p-4 rounded-2xl bg-neutral-100/70 border border-neutral-200/80">
                <p className="text-[11px] font-semibold text-[#171717]">
                  Featured Rig: Commercial Trolley Station
                </p>
                <p className="text-[10px] text-[#606060] mt-0.5">
                  High-capacity vinyl refuse bag • Chemical caddy tiers • Front bucket mount
                </p>
              </div>
            </div>

          </div>

          {/* ============================================================ */}
          {/* LOWER HERO TIER: OVERSIZED BRAND TYPOGRAPHY & SCROLL INDICATOR */}
          {/* ============================================================ */}
          <div className="relative z-10 pt-4 flex flex-col md:flex-row items-center justify-between border-t border-[#E7E7E7]/70 gap-4">
            
            {/* Desktop Minimal Social Media Rail */}
            <div className="hidden md:flex items-center gap-4 text-[11px] font-bold text-[#606060]">
              <span className="text-[9px] uppercase tracking-widest text-[#171717]/40">CONNECT</span>
              {MERRYCRUZE_CONFIG.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F59A23] transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>

            {/* Small Scroll Indicator at the bottom */}
            <button
              type="button"
              onClick={scrollToCategories}
              className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-[#606060] hover:text-[#171717] transition-colors cursor-pointer group"
            >
              <span>SCROLL TO EXPLORE</span>
              <div className="w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center group-hover:border-[#F59A23] group-hover:text-[#F59A23] transition-colors">
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </div>
            </button>

            {/* Right Tagline Stamp */}
            <div className="text-[11px] text-[#606060] font-medium text-center md:text-right">
              Commercial Janitorial & Facility Supply
            </div>
          </div>

          {/* ============================================================ */}
          {/* LARGE OVERSIZED DECORATIVE TYPOGRAPHY CROSSING LOWER HERO */}
          {/* ============================================================ */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 sm:bottom-4 inset-x-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
          >
            <span className="text-[14vw] font-black tracking-tight text-neutral-900/[0.045] leading-none whitespace-nowrap uppercase">
              MERRY CRUZE
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
