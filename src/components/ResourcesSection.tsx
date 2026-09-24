import React from 'react';
import { BookOpen, Clock, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { CLEANING_GUIDES } from '../data/guides';
import { CleaningGuide } from '../types';

interface ResourcesSectionProps {
  onSelectGuide: (slug: string) => void;
  onViewAllGuides: () => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  onSelectGuide,
  onViewAllGuides,
}) => {
  return (
    <section className="py-16 md:py-24 px-3 sm:px-6 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#E7E7E7]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F59A23]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#606060] uppercase">
                Facility Intelligence & Guides
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight uppercase">
              CLEANING & SANITATION GUIDES
            </h2>
          </div>
          <button
            type="button"
            onClick={onViewAllGuides}
            className="self-start md:self-end text-xs sm:text-sm font-bold text-[#171717] hover:text-[#F59A23] flex items-center gap-1.5 transition-colors cursor-pointer group"
          >
            <span>Explore All Facility Resources</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Featured Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLEANING_GUIDES.slice(0, 3).map((guide) => (
            <article
              key={guide.id}
              onClick={() => onSelectGuide(guide.slug)}
              className="group bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E7E7] hover:border-[#F59A23]/50 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#606060] mb-4">
                  <span className="bg-[#F5F5F5] px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#171717]">
                    {guide.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{guide.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#171717] group-hover:text-[#F59A23] transition-colors leading-snug">
                  {guide.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#606060] leading-relaxed line-clamp-3">
                  {guide.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E7E7E7] flex items-center justify-between text-xs font-semibold text-[#171717] group-hover:text-[#F59A23] transition-colors">
                <span>Read Full Article & Checklist</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
