import React from 'react';
import { ArrowLeft, Building2, CheckCircle2, FileCheck, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '../data/industries';
import { getBulkQuoteWhatsAppLink } from '../data/config';

interface BusinessSolutionsViewProps {
  onBackToHome: () => void;
  onRequestQuote: (facility?: string) => void;
  onSelectProduct: (slug: string) => void;
}

export const BusinessSolutionsView: React.FC<BusinessSolutionsViewProps> = ({
  onBackToHome,
  onRequestQuote,
  onSelectProduct,
}) => {
  return (
    <div className="py-8 md:py-16 px-3 sm:px-6 bg-[#F5F5F5] min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <button
          type="button"
          onClick={onBackToHome}
          className="text-xs font-semibold text-[#606060] hover:text-[#171717] flex items-center gap-1 mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </button>

        {/* Hero Banner */}
        <div className="bg-[#171717] text-white rounded-3xl md:rounded-[36px] p-6 sm:p-10 md:p-14 border border-neutral-800 shadow-xl mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[#F59A23] uppercase">
              B2B & Institutional Supply
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-2 leading-tight">
              COMMERCIAL PROCUREMENT <br />
              <span className="text-[#F59A23]">& FACILITY SUPPLY</span>
            </h1>
            <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              Consolidated product supply for hotels, schools, corporate offices, healthcare facilities, and cleaning contractors across Nigeria.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onRequestQuote('Institutional Facility')}
                className="bg-[#F59A23] hover:bg-[#D97706] text-white px-7 py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                Request Corporate Facility Quotation
              </button>
              <a
                href={getBulkQuoteWhatsAppLink(5, 'Corporate Business')}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-neutral-700 hover:bg-white/10 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all"
              >
                Connect on B2B WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* 9 Sectors Breakdown */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold uppercase text-[#171717]">
            Sector Supply & Standard Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E7E7] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F59A23] uppercase mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>{ind.title}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#171717] mb-2 leading-snug">
                    {ind.subtitle}
                  </h3>
                  <p className="text-xs text-[#606060] leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  <div className="p-3 rounded-xl bg-[#F5F5F5] border border-[#E7E7E7] space-y-1.5 mb-4">
                    <p className="text-[11px] font-bold text-[#171717] uppercase">Recommended Hardware:</p>
                    {ind.recommendedProducts.map((pSlug) => (
                      <div key={pSlug} className="text-xs text-[#606060] flex items-center gap-1.5 capitalize">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F59A23] shrink-0" />
                        <span>{pSlug.replace(/-/g, ' ')}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRequestQuote(ind.title)}
                  className="w-full mt-4 bg-[#171717] hover:bg-[#F59A23] text-white py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Quote for {ind.title.split('&')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
