import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, FileText } from 'lucide-react';
import { MERRYCRUZE_CONFIG, getGeneralWhatsAppLink } from '../data/config';

interface FinalCTAProps {
  onRequestQuote: () => void;
  onExploreProducts: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestQuote, onExploreProducts }) => {
  return (
    <section className="py-16 md:py-24 px-3 sm:px-6 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl md:rounded-[36px] bg-[#171717] text-white p-8 sm:p-12 md:p-16 overflow-hidden border border-neutral-800 shadow-2xl">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59A23]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F59A23] text-xs font-bold tracking-widest uppercase mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Reliable Procurement Partner</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-white">
              READY TO EQUIP YOUR FACILITY <br />
              <span className="text-[#F59A23]">OR HOME?</span>
            </h2>

            <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl">
              From single household utility essentials to full container-load hospital and hotel janitorial fleets. Request your tailored quote or reach out directly to our procurement team.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onRequestQuote}
                className="bg-[#F59A23] hover:bg-[#D97706] text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-xl shadow-[#F59A23]/25 transition-all flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F59A23]"
              >
                <FileText className="w-4 h-4" />
                <span>Request a Quote</span>
              </button>

              <button
                type="button"
                onClick={onExploreProducts}
                className="bg-white/10 hover:bg-white/20 text-white border border-neutral-700 px-6 py-3.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Browse All Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors underline underline-offset-4 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#F59A23]" />
                <span>Instant WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          <div className="relative z-10 mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-neutral-400 gap-2">
            <span>Serving corporate facilities, educational institutions, hospitality & residences nationwide in Nigeria.</span>
            <span className="font-mono text-[#F59A23]">MERRYCRUZE SUPPLY CO.</span>
          </div>

        </div>
      </div>
    </section>
  );
};
