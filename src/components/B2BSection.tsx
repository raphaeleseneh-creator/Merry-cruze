import React, { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Cross, 
  Sparkles, 
  Layers, 
  Utensils, 
  Home, 
  KeyRound, 
  ArrowRight,
  FileCheck,
  Truck,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { INDUSTRIES } from '../data/industries';
import { getBulkQuoteWhatsAppLink } from '../data/config';

interface B2BSectionProps {
  onRequestCorporateQuote: (facilityType?: string) => void;
  onSelectIndustry: (industryId: string) => void;
}

export const B2BSection: React.FC<B2BSectionProps> = ({
  onRequestCorporateQuote,
  onSelectIndustry,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0]);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'Cross': return <Cross className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Utensils': return <Utensils className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      case 'KeyRound': return <KeyRound className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-16 md:py-24 px-3 sm:px-6 bg-[#171717] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Section Header Banner */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-[#1F1F1F] rounded-3xl md:rounded-[36px] p-6 sm:p-10 md:p-14 border border-neutral-800 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Orange Glow Accent */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F59A23]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59A23]/15 text-[#F59A23] text-xs font-bold tracking-widest uppercase mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>Commercial & Institutional Procurement</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-none text-white">
              BUYING FOR A BUSINESS <br />
              <span className="text-[#F59A23]">OR FACILITY?</span>
            </h2>

            <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              Tell us what you need and request pricing for larger quantities or multiple products.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onRequestCorporateQuote()}
                className="bg-[#F59A23] hover:bg-[#D97706] text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-xl shadow-[#F59A23]/25 transition-all flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F59A23]"
              >
                <span>Request Corporate Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getBulkQuoteWhatsAppLink(1, 'Commercial Facility')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-neutral-700 px-6 py-3.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#F59A23]" />
                <span>Direct B2B WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Institutional Procurement Highlights */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-neutral-800">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-white/5 border border-neutral-800 text-[#F59A23]">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Formal Proforma & Invoicing</h4>
                <p className="text-xs text-neutral-400 mt-0.5">Itemized quotes, WHT/VAT compliant, Purchase Order support.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-white/5 border border-neutral-800 text-[#F59A23]">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Nationwide Dispatch</h4>
                <p className="text-xs text-neutral-400 mt-0.5">Commercial freight directly to facility loading docks and branches.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-white/5 border border-neutral-800 text-[#F59A23]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Direct Tiered Volume Rates</h4>
                <p className="text-xs text-neutral-400 mt-0.5">Transparent quantity discounts for multi-unit facility deployments.</p>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* INDUSTRIES WE SERVE: INTERACTIVE SECTOR SELECTOR */}
        {/* ============================================================ */}
        <div className="mt-16 md:mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#F59A23] uppercase">
                Sector-Specific Supply
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mt-1">
                INDUSTRIES WE EQUIP
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
              Explore product recommendations and equipment packages selected for your organization’s facilities and daily operations.
            </p>
          </div>

          {/* Industry Pills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2 mb-8">
            {INDUSTRIES.map((ind) => {
              const isSelected = selectedIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setSelectedIndustry(ind)}
                  className={`p-3 rounded-2xl border text-left transition-all flex flex-col items-center sm:items-start justify-between min-h-[90px] cursor-pointer ${
                    isSelected
                      ? 'bg-[#F59A23] text-white border-[#F59A23] shadow-lg shadow-[#F59A23]/20'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/20' : 'bg-neutral-800'}`}>
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <span className="text-[11px] font-bold tracking-tight text-center sm:text-left mt-2 leading-tight">
                    {ind.title.split('&')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Industry Detail Showcase */}
          <div className="bg-neutral-900 rounded-3xl p-6 sm:p-8 md:p-10 border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#F59A23]" />
                <span className="text-xs font-mono uppercase text-[#F59A23]">
                  Sector Supply // {selectedIndustry.title}
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold text-white">
                {selectedIndustry.subtitle}
              </h4>

              <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                {selectedIndustry.description}
              </p>

              <div className="mt-6 pt-6 border-t border-neutral-800">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  Critical Facility Challenges Solved:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedIndustry.facilityChallenges.map((challenge, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59A23] mt-1.5 shrink-0" />
                      <span>{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-neutral-950/70 p-6 rounded-2xl border border-neutral-800 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#F59A23] mb-1">
                  Recommended Equipment Package
                </p>
                <p className="text-xs text-neutral-400 mb-4">
                  Standardized fleet hardware for {selectedIndustry.title.toLowerCase()}:
                </p>

                <div className="space-y-2">
                  {selectedIndustry.recommendedProducts.map((slug) => (
                    <div
                      key={slug}
                      className="flex items-center justify-between p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs"
                    >
                      <span className="font-medium text-white capitalize">
                        {slug.replace(/-/g, ' ')}
                      </span>
                      <span className="text-[#F59A23] font-semibold">Ready to Quote</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => onRequestCorporateQuote(selectedIndustry.title)}
                  className="w-full bg-[#F59A23] hover:bg-[#D97706] text-white py-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Build {selectedIndustry.title.split('&')[0]} Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
