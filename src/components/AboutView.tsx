import React from 'react';
import { ArrowLeft, ShieldCheck, Target, Eye, Truck, CheckCircle2 } from 'lucide-react';
import { MERRYCRUZE_CONFIG } from '../data/config';

interface AboutViewProps {
  onBackToHome: () => void;
  onRequestQuote: () => void;
  onExploreProducts: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onBackToHome,
  onRequestQuote,
  onExploreProducts,
}) => {
  return (
    <div className="py-8 md:py-16 px-3 sm:px-6 bg-[#F5F5F5] min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        <button
          type="button"
          onClick={onBackToHome}
          className="text-xs font-semibold text-[#606060] hover:text-[#171717] flex items-center gap-1 mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </button>

        <div className="bg-white rounded-3xl md:rounded-[36px] p-6 sm:p-10 md:p-14 border border-[#E7E7E7] shadow-sm space-y-12">
          
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59A23]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#606060] uppercase">
                About The Brand
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#171717] tracking-tight uppercase leading-tight">
              COMMERCIAL DURABILITY. <br />
              <span className="text-[#F59A23]">RELIABLE NIGERIAN SUPPLY.</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#606060] leading-relaxed max-w-3xl">
              Merrycruze is a Nigerian product and supply brand focused on delivering commercial janitorial equipment, bathroom essentials, waste-management systems, and practical household utility goods to both everyday homes and demanding commercial organizations.
            </p>
            <p className="mt-3 text-sm font-semibold text-[#171717] max-w-3xl">
              We supply products and equipment; we do not provide cleaning services.
            </p>
          </div>

          {/* Central Philosophy */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F5F5] border border-[#E7E7E7] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-mono font-bold text-[#F59A23] uppercase tracking-wider block mb-2">
                The Core Principle
              </span>
              <h2 className="text-2xl font-bold text-[#171717] uppercase tracking-tight">
                CLEANER. SAFER. BETTER-EQUIPPED SPACES.
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#606060] leading-relaxed">
                We believe dependable products are fundamental to clean, hygienic, and well-maintained environments. Whether supplying a 200-room luxury hotel or an individual family home, we source practical hardware designed for reliable, repeated use.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white border border-[#E7E7E7]">
                <h3 className="text-xs font-bold text-[#171717] uppercase">Dual-Market Focus (B2C & B2B)</h3>
                <p className="text-xs text-[#606060] mt-1">
                  Serving both private homeowners requiring dependable utility essentials, and corporate procurement heads managing multi-site tenders.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E7E7E7]">
                <h3 className="text-xs font-bold text-[#171717] uppercase">Transparent Commercial Integrity</h3>
                <p className="text-xs text-[#606060] mt-1">
                  We never fabricate figures or make unsupported claims. We let the physical quality, weight, and materials of our equipment speak for themselves.
                </p>
              </div>
            </div>
          </div>

          {/* Product Domains */}
          <div>
            <h2 className="text-xl font-bold uppercase text-[#171717] mb-6">
              Our 5 Core Supply Domains
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl border border-[#E7E7E7] bg-[#F5F5F5]">
                <span className="text-xs font-bold text-[#F59A23] uppercase">01</span>
                <h3 className="text-sm font-bold text-[#171717] mt-1">Cleaning & Janitorial</h3>
                <p className="text-xs text-[#606060] mt-1">Multi-tier carts, heavy wringers, warning signs, and industrial degreasers.</p>
              </div>
              <div className="p-5 rounded-2xl border border-[#E7E7E7] bg-[#F5F5F5]">
                <span className="text-xs font-bold text-[#F59A23] uppercase">02</span>
                <h3 className="text-sm font-bold text-[#171717] mt-1">Bathroom Essentials</h3>
                <p className="text-xs text-[#606060] mt-1">Chrome shower riser kits, anti-slip mats, and water-repellent curtains.</p>
              </div>
              <div className="p-5 rounded-2xl border border-[#E7E7E7] bg-[#F5F5F5]">
                <span className="text-xs font-bold text-[#F59A23] uppercase">03</span>
                <h3 className="text-sm font-bold text-[#171717] mt-1">Waste Management</h3>
                <p className="text-xs text-[#606060] mt-1">Stainless steel soft-close pedal bins and high-capacity swing utility receptacles.</p>
              </div>
              <div className="p-5 rounded-2xl border border-[#E7E7E7] bg-[#F5F5F5]">
                <span className="text-xs font-bold text-[#F59A23] uppercase">04</span>
                <h3 className="text-sm font-bold text-[#171717] mt-1">Home Essentials</h3>
                <p className="text-xs text-[#606060] mt-1">Heat-resistant mesh ironing stations and hypoallergenic microfibre pillow sets.</p>
              </div>
              <div className="p-5 rounded-2xl border border-[#E7E7E7] bg-[#F5F5F5]">
                <span className="text-xs font-bold text-[#F59A23] uppercase">05</span>
                <h3 className="text-sm font-bold text-[#171717] mt-1">Utility & Furniture</h3>
                <p className="text-xs text-[#606060] mt-1">Commercial stackable utility stools and ergonomic children's activity furniture.</p>
              </div>
            </div>
          </div>

          {/* Action Strip */}
          <div className="pt-6 border-t border-[#E7E7E7] flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onRequestQuote}
              className="bg-[#F59A23] hover:bg-[#D97706] text-white px-7 py-3 rounded-full text-xs font-bold transition-all cursor-pointer"
            >
              Request a Corporate Quote
            </button>
            <button
              type="button"
              onClick={onExploreProducts}
              className="border border-[#E7E7E7] hover:bg-[#F5F5F5] text-[#171717] px-6 py-3 rounded-full text-xs font-semibold transition-all cursor-pointer"
            >
              Browse Catalog
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
