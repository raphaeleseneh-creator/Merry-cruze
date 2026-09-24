import React from 'react';
import { ShieldCheck, Truck, Clock, RefreshCw, CheckCircle, PackageCheck } from 'lucide-react';

export const WhyMerrycruze: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Commercial Hardware Resilience',
      description: 'Manufactured with high-density structural polymers, rust-resistant stainless steel, and heavy-gauge tubular frames built for daily commercial cycles.',
    },
    {
      icon: Truck,
      title: 'Reliable Nationwide Logistics',
      description: 'Coordinated distribution across Lagos, Abuja, Port Harcourt, and regional hubs in Nigeria with verified waybills and direct facility delivery.',
    },
    {
      icon: PackageCheck,
      title: 'Direct Multi-Unit Tiered Pricing',
      description: 'Transparent quantity discounts designed for corporate procurement, schools, property developers, and multi-unit short-let portfolios.',
    },
    {
      icon: RefreshCw,
      title: 'Consistent Fleet Standardization',
      description: 'Eliminate mismatched tools across your property portfolio. Re-order exact matching units, replacement casters, and spare vinyl bags without variance.',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-3 sm:px-6 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#E7E7E7]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F59A23]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#606060] uppercase">
                The Merrycruze Advantage
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight uppercase">
              WHY ORGANISATIONS CHOOSE MERRYCRUZE
            </h2>
          </div>
          <p className="text-sm text-[#606060] max-w-md">
            Delivering practical, heavy-duty cleaning and utility solutions without the fragility of consumer-grade retail hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E7E7] shadow-xs hover:border-[#F59A23]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F5F5] border border-[#E7E7E7] flex items-center justify-center text-[#171717] mb-6">
                    <Icon className="w-6 h-6 text-[#F59A23]" />
                  </div>
                  <span className="text-[10px] font-mono text-[#606060] tracking-widest uppercase">
                    PILLAR 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-[#171717] mt-1 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#606060] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E7E7E7] flex items-center gap-2 text-xs font-semibold text-[#171717]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#F59A23]" />
                  <span>Verified Supply Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
