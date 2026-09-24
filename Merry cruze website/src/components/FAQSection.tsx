import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/faqs';
import { getGeneralWhatsAppLink } from '../data/config';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 px-3 sm:px-6 bg-white border-y border-[#E7E7E7]">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F5] text-[#606060] text-xs font-bold tracking-widest uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#F59A23]" />
            <span>Procurement & Ordering Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-3 text-sm text-[#606060]">
            Transparent details regarding pricing structures, nationwide dispatch across Nigeria, and corporate ordering.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#E7E7E7] bg-[#F5F5F5] transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#171717] hover:text-[#F59A23] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-[#E7E7E7] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#F59A23]' : 'text-[#606060]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#606060] leading-relaxed border-t border-[#E7E7E7]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Assistance Footnote */}
        <div className="mt-10 p-6 rounded-2xl bg-neutral-50 border border-neutral-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm font-bold text-[#171717]">Have a specific procurement tender or inquiry?</p>
            <p className="text-xs text-[#606060]">Connect directly with our commercial support desk.</p>
          </div>
          <a
            href={getGeneralWhatsAppLink('Procurement FAQ question')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#171717] hover:bg-neutral-800 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#F59A23]" />
            <span>Chat with Procurement</span>
          </a>
        </div>

      </div>
    </section>
  );
};
