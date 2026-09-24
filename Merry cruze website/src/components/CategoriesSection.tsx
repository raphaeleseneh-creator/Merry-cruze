import React from 'react';
import { ArrowRight, Sparkles, ShowerHead, Trash2, Home, Armchair } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { ProductCategory } from '../types';
import { ProductImage } from './ProductImage';

interface CategoriesSectionProps {
  onSelectCategory: (categoryId: ProductCategory) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  const getCategoryIcon = (id: ProductCategory) => {
    switch (id) {
      case 'cleaning-janitorial':
        return <Sparkles className="w-5 h-5 text-[#F59A23]" />;
      case 'bathroom-essentials':
        return <ShowerHead className="w-5 h-5 text-[#F59A23]" />;
      case 'waste-management':
        return <Trash2 className="w-5 h-5 text-[#F59A23]" />;
      case 'home-essentials':
        return <Home className="w-5 h-5 text-[#F59A23]" />;
      case 'utility-furniture':
        return <Armchair className="w-5 h-5 text-[#F59A23]" />;
    }
  };

  const getCategoryCoverImage = (id: ProductCategory) => {
    switch (id) {
      case 'cleaning-janitorial':
        return 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80';
      case 'bathroom-essentials':
        return 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80';
      case 'waste-management':
        return 'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=800&q=80';
      case 'home-essentials':
        return 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80';
      case 'utility-furniture':
        return 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80';
    }
  };

  return (
    <section id="categories-section" className="py-16 md:py-24 px-3 sm:px-6 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#E7E7E7]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F59A23]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#606060] uppercase">
                Product Categories
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight uppercase">
              FIVE CORE PRODUCT DOMAINS
            </h2>
          </div>
          <p className="text-sm text-[#606060] max-w-md">
            Engineered supply lines built for domestic households, short-let residences, commercial buildings, and educational campuses.
          </p>
        </div>

        {/* Editorial Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative bg-white rounded-3xl p-6 border border-[#E7E7E7] hover:border-[#F59A23]/50 transition-all duration-300 shadow-xs hover:shadow-xl cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle category image vignette */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                <ProductImage
                  src={getCategoryCoverImage(cat.id)}
                  alt={cat.name}
                  category={cat.id}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs p-2 rounded-xl shadow-xs">
                  {getCategoryIcon(cat.id)}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono tracking-widest text-[#F59A23] uppercase">
                    0{idx + 1} // Line
                  </span>
                  <p className="text-sm font-bold leading-tight">{cat.name}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#171717] group-hover:text-[#F59A23] transition-colors">
                  {cat.headline}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#606060] line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E7E7E7] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#171717] flex items-center gap-1.5 group-hover:text-[#F59A23] transition-colors">
                  <span>Explore Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-xs text-[#606060] font-mono">
                  {cat.itemCount} items listed
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
