import React from 'react';
import { ArrowLeft, Clock, CheckCircle2, ChevronRight, Share2, BookOpen } from 'lucide-react';
import { CleaningGuide, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductImage } from './ProductImage';

interface GuideDetailViewProps {
  guide: CleaningGuide;
  onBack: () => void;
  onSelectProduct: (slug: string) => void;
  onRequestQuote: () => void;
}

export const GuideDetailView: React.FC<GuideDetailViewProps> = ({
  guide,
  onBack,
  onSelectProduct,
  onRequestQuote,
}) => {
  const matchingProducts = PRODUCTS.filter((p) =>
    guide.relatedProducts.includes(p.slug)
  );

  return (
    <div className="py-8 md:py-16 px-3 sm:px-6 bg-[#F5F5F5] min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation back */}
        <button
          type="button"
          onClick={onBack}
          className="text-xs font-semibold text-[#606060] hover:text-[#171717] flex items-center gap-1 mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Resources</span>
        </button>

        {/* Article Container */}
        <article className="bg-white rounded-3xl md:rounded-[36px] p-6 sm:p-10 md:p-14 border border-[#E7E7E7] shadow-sm">
          
          <div className="flex items-center gap-3 text-xs text-[#606060] mb-3">
            <span className="bg-[#F59A23]/15 text-[#D97706] font-bold px-2.5 py-1 rounded-md text-[11px] uppercase tracking-wider">
              {guide.category}
            </span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{guide.readTime}</span>
            </div>
            <span>•</span>
            <span>{guide.publishedDate}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#171717] tracking-tight leading-tight uppercase mb-6">
            {guide.title}
          </h1>

          <div className="p-4 rounded-2xl bg-[#F5F5F5] border-l-4 border-[#F59A23] text-xs sm:text-sm text-[#606060] italic leading-relaxed mb-8">
            {guide.summary}
          </div>

          {/* Article Sections */}
          <div className="space-y-8 text-xs sm:text-sm text-[#606060] leading-relaxed">
            {guide.sections.map((sec, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-[#171717] uppercase tracking-tight">
                  {sec.heading}
                </h2>
                <p>{sec.content}</p>

                {sec.checklist && (
                  <div className="mt-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                    <p className="text-xs font-bold text-[#171717] uppercase tracking-wider">
                      Procurement Checklist:
                    </p>
                    {sec.checklist.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs text-[#171717]">
                        <CheckCircle2 className="w-4 h-4 text-[#F59A23] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Internally Linked Products */}
          {matchingProducts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#E7E7E7]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#171717] mb-4">
                Recommended Merrycruze Hardware For This Blueprint
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {matchingProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => onSelectProduct(p.slug)}
                    className="p-4 rounded-2xl bg-[#F5F5F5] border border-[#E7E7E7] hover:border-[#F59A23] transition-colors cursor-pointer flex items-center gap-3"
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-white shrink-0">
                      <ProductImage
                        src={p.images.primary}
                        alt={p.name}
                        category={p.category}
                        slug={p.slug}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono text-[#606060] uppercase">
                        {p.categoryName}
                      </span>
                      <h4 className="text-xs font-bold text-[#171717] truncate">
                        {p.name}
                      </h4>
                      <span className="text-[11px] font-semibold text-[#D97706]">
                        {p.priceDisplay}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#606060] shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action footer */}
          <div className="mt-10 pt-6 border-t border-[#E7E7E7] flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={onRequestQuote}
              className="bg-[#F59A23] hover:bg-[#D97706] text-white px-6 py-3 rounded-full text-xs font-bold transition-all cursor-pointer"
            >
              Request Quote for this Checklist
            </button>

            <button
              type="button"
              onClick={onBack}
              className="text-xs font-semibold text-[#606060] hover:text-[#171717] cursor-pointer"
            >
              Back to All Guides
            </button>
          </div>

        </article>

      </div>
    </div>
  );
};
