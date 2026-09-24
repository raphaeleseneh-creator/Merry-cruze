import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Sparkles, Eye, Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { ProductImage } from './ProductImage';

interface HeroProductCompositionProps {
  onSelectProduct: (productSlug: string) => void;
  onAddQuote: (productSlug: string) => void;
}

export const HeroProductComposition: React.FC<HeroProductCompositionProps> = ({
  onSelectProduct,
  onAddQuote,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeHotspot, setActiveHotspot] = useState<string | null>('trolley');
  const [addedSlug, setAddedSlug] = useState<string | null>(null);

  const handleQuickAdd = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation();
    onAddQuote(slug);
    setAddedSlug(slug);
    setTimeout(() => setAddedSlug(null), 1800);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none py-6">
      {/* Ambient Studio Lighting Backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[85%] h-[75%] rounded-full bg-gradient-to-tr from-[#EBEBEB] via-[#FFFFFF] to-[#F2F2F2] opacity-80 blur-2xl" />
        <div className="absolute -top-10 right-10 w-56 h-56 rounded-full bg-[#F59A23]/10 blur-3xl" />
      </div>

      {/* Main Studio Composition Container */}
      <div className="relative w-full max-w-2xl lg:max-w-3xl aspect-[4/3] md:aspect-[16/11] flex items-center justify-center">
        
        {/* Contact Shadow Under Entire Rig */}
        <div className="absolute bottom-6 md:bottom-10 w-[75%] h-12 bg-gradient-to-r from-black/5 via-black/18 to-black/5 rounded-full blur-xl transform scale-y-50" />

        {/* ============================================================ */}
        {/* CENTERPIECE: JANITORIAL CLEANING TROLLEY CART */}
        {/* ============================================================ */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.94, y: 30 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 w-full h-full flex items-center justify-center group"
          onClick={() => onSelectProduct('cleaning-trolley')}
        >
          {/* Detailed Studio Render of Commercial Janitorial Cart */}
          <div className="relative w-[85%] max-w-[520px] aspect-[4/3.8] transition-transform duration-500 group-hover:scale-[1.015] cursor-pointer">
            
            {/* Real Imagery Overlay with Studio Clipping & Fallback Texture */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-white/60 bg-gradient-to-b from-[#FFFFFF] to-[#F0F0F0]">
              <ProductImage
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85"
                alt="Commercial Janitorial Cleaning Trolley with full equipment"
                category="cleaning-janitorial"
                slug="cleaning-trolley"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              
              {/* Studio Subtle Vignette & Specular Highlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/20 pointer-events-none" />

              {/* Editorial Product Plate Tag */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E7E7E7] shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F59A23] animate-pulse" />
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#171717]">
                  Merrycruze Janitorial Trolley
                </span>
                <span className="text-[10px] text-[#606060] border-l border-neutral-200 pl-2">
                  Heavy-Duty Fleet
                </span>
              </div>

              {/* Bottom Quick Action Bar on Card */}
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between pointer-events-auto">
                <div className="bg-black/80 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-2">
                  <Eye className="w-3.5 h-3.5 text-[#F59A23]" />
                  <span>Click to Inspect Rig</span>
                </div>

                <button
                  type="button"
                  onClick={(e) => handleQuickAdd(e, 'cleaning-trolley')}
                  className="bg-[#F59A23] hover:bg-[#D97706] text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold shadow-lg shadow-[#F59A23]/30 transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Add to Quote Request"
                >
                  {addedSlug === 'cleaning-trolley' ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Added to Quote
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" /> Add to Quote
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Hotspot: Vinyl Refuse Sack */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveHotspot('sack');
              }}
              className="absolute -top-3 right-8 w-7 h-7 rounded-full bg-[#171717] text-white flex items-center justify-center shadow-lg border-2 border-white hover:bg-[#F59A23] transition-colors cursor-pointer group/hotspot"
              aria-label="Waterproof Vinyl Waste Bag"
            >
              <span className="text-[10px] font-bold">1</span>
              <span className="absolute bottom-full mb-2 right-0 hidden group-hover/hotspot:block whitespace-nowrap bg-[#171717] text-white text-[10px] px-2 py-1 rounded shadow-md pointer-events-none">
                100L Heavy-Duty Vinyl Refuse Bag
              </span>
            </button>

            {/* Hotspot: Multi-Tier Storage */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveHotspot('tiers');
              }}
              className="absolute top-1/2 -left-3 w-7 h-7 rounded-full bg-[#171717] text-white flex items-center justify-center shadow-lg border-2 border-white hover:bg-[#F59A23] transition-colors cursor-pointer group/hotspot"
              aria-label="Modular Shelving Storage"
            >
              <span className="text-[10px] font-bold">2</span>
              <span className="absolute bottom-full mb-2 left-0 hidden group-hover/hotspot:block whitespace-nowrap bg-[#171717] text-white text-[10px] px-2 py-1 rounded shadow-md pointer-events-none">
                Modular 3-Tier Tool & Chemical Shelving
              </span>
            </button>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* SURROUNDING ITEM 1: INDUSTRIAL MOP BUCKET & WRINGER (Bottom Left) */}
        {/* ============================================================ */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, x: -30, y: 20 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="absolute -bottom-4 md:bottom-2 -left-2 md:-left-8 z-30 w-36 sm:w-44 md:w-52 aspect-square cursor-pointer group"
          onClick={() => onSelectProduct('industrial-mop-bucket')}
        >
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [-2, 4, -2] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full rounded-2xl overflow-hidden bg-white/90 backdrop-blur-md p-2 shadow-xl border border-white/80 hover:border-[#F59A23]/50 transition-all hover:shadow-2xl"
          >
            <div className="relative w-full h-[72%] rounded-xl overflow-hidden bg-neutral-100">
              <ProductImage
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=500&q=80"
                alt="Industrial Heavy-Duty Mop Bucket with Down-Press Wringer"
                category="cleaning-janitorial"
                slug="industrial-mop-bucket"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-1.5 left-1.5 bg-[#F59A23] text-white text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded">
                Down-Press
              </span>
            </div>
            <div className="p-1.5">
              <p className="text-[11px] font-bold text-[#171717] line-clamp-1 leading-tight group-hover:text-[#F59A23] transition-colors">
                Industrial Mop Bucket
              </p>
              <div className="flex items-center justify-between mt-0.5">
                <span className="text-[10px] text-[#606060]">Wave-Brake Body</span>
                <span className="text-[10px] font-semibold text-[#D97706]">Request Price</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ============================================================ */}
        {/* SURROUNDING ITEM 2: A-FRAME CAUTION WET FLOOR SIGN (Top Left) */}
        {/* ============================================================ */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, x: -20, y: -20 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="absolute -top-6 md:-top-4 left-2 md:left-2 z-25 w-32 sm:w-36 md:w-44 aspect-[4/3.5] cursor-pointer group"
          onClick={() => onSelectProduct('wet-floor-caution-sign')}
        >
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [3, -3, 3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="w-full h-full rounded-2xl overflow-hidden bg-white/90 backdrop-blur-md p-2 shadow-lg border border-white/80 hover:border-[#F59A23]/50 transition-all hover:shadow-xl"
          >
            <div className="relative w-full h-[68%] rounded-xl overflow-hidden bg-neutral-100">
              <ProductImage
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
                alt="A-Frame Wet Floor Caution Sign"
                category="cleaning-janitorial"
                slug="wet-floor-caution-sign"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-1.5 left-1.5 bg-yellow-400 text-black text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                Safety
              </span>
            </div>
            <div className="p-1.5">
              <p className="text-[11px] font-bold text-[#171717] line-clamp-1 leading-tight group-hover:text-[#F59A23] transition-colors">
                Wet-Floor Caution Sign
              </p>
              <p className="text-[10px] text-[#606060]">A-Frame High-Vis</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ============================================================ */}
        {/* SURROUNDING ITEM 3: STAINLESS STEEL PEDAL WASTE BIN (Bottom Right) */}
        {/* ============================================================ */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, x: 30, y: 20 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
          className="absolute -bottom-6 md:-bottom-2 -right-2 md:-right-8 z-30 w-36 sm:w-44 md:w-48 aspect-square cursor-pointer group"
          onClick={() => onSelectProduct('commercial-pedal-waste-bin')}
        >
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [4, -2, 4] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="w-full h-full rounded-2xl overflow-hidden bg-white/90 backdrop-blur-md p-2 shadow-xl border border-white/80 hover:border-[#F59A23]/50 transition-all hover:shadow-2xl"
          >
            <div className="relative w-full h-[72%] rounded-xl overflow-hidden bg-neutral-100">
              <ProductImage
                src="https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=400&q=80"
                alt="Stainless Steel Hands-Free Pedal Waste Bin"
                category="waste-management"
                slug="commercial-pedal-waste-bin"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-1.5 left-1.5 bg-[#171717] text-white text-[9px] font-medium px-1.5 py-0.5 rounded">
                Stainless Steel
              </span>
            </div>
            <div className="p-1.5">
              <p className="text-[11px] font-bold text-[#171717] line-clamp-1 leading-tight group-hover:text-[#F59A23] transition-colors">
                Hands-Free Pedal Bin
              </p>
              <div className="flex items-center justify-between mt-0.5">
                <span className="text-[10px] text-[#606060]">Soft-Close Lid</span>
                <span className="text-[10px] font-semibold text-[#D97706]">Request Price</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ============================================================ */}
        {/* SURROUNDING ITEM 4: WALL SHOWER KIT / BATH MAT (Top Right) */}
        {/* ============================================================ */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, x: 25, y: -20 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
          className="absolute -top-6 md:-top-4 right-1 md:right-2 z-25 w-32 sm:w-36 md:w-44 aspect-[4/3.5] cursor-pointer group"
          onClick={() => onSelectProduct('wall-attachable-shower-kit')}
        >
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [-3, 3, -3] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="w-full h-full rounded-2xl overflow-hidden bg-white/90 backdrop-blur-md p-2 shadow-lg border border-white/80 hover:border-[#F59A23]/50 transition-all hover:shadow-xl"
          >
            <div className="relative w-full h-[68%] rounded-xl overflow-hidden bg-neutral-100">
              <ProductImage
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80"
                alt="Wall-Attachable Multi-Spray Shower Kit"
                category="bathroom-essentials"
                slug="wall-attachable-shower-kit"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-1.5 left-1.5 bg-[#171717] text-white text-[9px] font-medium px-1.5 py-0.5 rounded">
                Chrome Fit-Out
              </span>
            </div>
            <div className="p-1.5">
              <p className="text-[11px] font-bold text-[#171717] line-clamp-1 leading-tight group-hover:text-[#F59A23] transition-colors">
                Wall Shower Kit
              </p>
              <p className="text-[10px] text-[#606060]">Bathroom & Hospitality</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};
