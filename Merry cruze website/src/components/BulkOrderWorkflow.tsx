import React from 'react';
import { ClipboardList, FileSpreadsheet, CheckSquare, Truck, ArrowRight } from 'lucide-react';

interface BulkOrderWorkflowProps {
  onRequestQuote: () => void;
}

export const BulkOrderWorkflow: React.FC<BulkOrderWorkflowProps> = ({ onRequestQuote }) => {
  const steps = [
    {
      step: '01',
      icon: ClipboardList,
      title: 'Submit Quantities & Specification',
      description: 'Select your required items on this site, enter required unit counts, or send your facility Bill of Quantities (BOQ) directly.',
    },
    {
      step: '02',
      icon: FileSpreadsheet,
      title: 'Receive Formal Proforma Invoice',
      description: 'Our corporate sales desk returns an itemized formal quote with applicable volume discount tiers, tax compliance, and availability dates.',
    },
    {
      step: '03',
      icon: CheckSquare,
      title: 'Confirmation & Quality Inspection',
      description: 'Upon PO receipt, products undergo warehouse batch inspection. Every caster, wringer spring, and hardware component is checked.',
    },
    {
      step: '04',
      icon: Truck,
      title: 'Coordinated Logistics Dispatch',
      description: 'Goods are securely palletized and dispatched via commercial freight with verified waybill tracking directly to your facility or branch.',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-3 sm:px-6 bg-white border-y border-[#E7E7E7]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F59A23]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#606060] uppercase">
                Institutional Procurement Workflow
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight uppercase">
              HOW BULK ORDERS WORK
            </h2>
          </div>
          <button
            type="button"
            onClick={onRequestQuote}
            className="self-start md:self-end bg-[#171717] hover:bg-neutral-800 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Start an Order Request</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-[#F5F5F5] rounded-3xl p-6 sm:p-7 border border-[#E7E7E7] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-mono text-[#F59A23]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E7E7E7] flex items-center justify-center text-[#171717]">
                      <Icon className="w-5 h-5 text-[#171717]" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#171717] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#606060] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E7E7E7] text-[11px] font-mono text-[#606060]">
                  Stage 0{idx + 1} // Merrycruze Procurement
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
