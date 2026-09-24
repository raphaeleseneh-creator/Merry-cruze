import React, { useState } from 'react';
import { Plus, Check, MessageSquare, ArrowRight, Eye, ShieldAlert } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { Product, ProductCategory } from '../types';
import { getProductWhatsAppLink } from '../data/config';
import { ProductImage } from './ProductImage';

interface FeaturedProductsProps {
  onSelectProduct: (slug: string) => void;
  onAddQuote: (slug: string) => void;
  onViewAllProducts: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onSelectProduct,
  onAddQuote,
  onViewAllProducts,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [addedSlug, setAddedSlug] = useState<string | null>(null);

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS.slice(0, 8)
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleAddQuote = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation();
    onAddQuote(slug);
    setAddedSlug(slug);
    setTimeout(() => setAddedSlug(null), 1800);
  };

  return (
    <section className="py-16 md:py-24 px-3 sm:px-6 bg-white border-y border-[#E7E7E7]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F59A23]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#606060] uppercase">
                Curated Supply Inventory
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight uppercase">
              FEATURED COMMERCIAL & HOME HARDWARE
            </h2>
            <p className="mt-2 text-sm text-[#606060] max-w-xl">
              Equip your facility or home with rigorously selected commercial-grade items. Verified durability and nationwide procurement dispatch.
            </p>
          </div>

          <button
            type="button"
            onClick={onViewAllProducts}
            className="self-start md:self-end text-xs sm:text-sm font-bold text-[#171717] hover:text-[#F59A23] flex items-center gap-1.5 transition-colors cursor-pointer group"
          >
            <span>View Complete Catalog ({PRODUCTS.length} products)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Filter Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#171717] text-white shadow-sm'
                : 'bg-[#F5F5F5] text-[#606060] hover:text-[#171717] hover:bg-neutral-200'
            }`}
          >
            All Inventory
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#171717] text-white shadow-sm'
                  : 'bg-[#F5F5F5] text-[#606060] hover:text-[#171717] hover:bg-neutral-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product.slug)}
              className="group bg-[#F5F5F5] rounded-3xl p-4 sm:p-5 border border-[#E7E7E7] hover:border-[#F59A23]/50 transition-all duration-300 hover:shadow-xl flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Product Thumbnail & Badges */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-white mb-4">
                  <ProductImage
                    src={product.images.primary}
                    alt={product.images.alt}
                    category={product.category}
                    slug={product.slug}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Top Status Tags */}
                  <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
                    {product.isBestseller && (
                      <span className="bg-[#171717] text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md">
                        Institutional Choice
                      </span>
                    )}
                    {product.isHeroFeatured && (
                      <span className="bg-[#F59A23] text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md">
                        Flagship Rig
                      </span>
                    )}
                  </div>

                  {/* Hover Quick Inspect Icon */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-[#171717] text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#F59A23]" />
                      <span>Quick View</span>
                    </span>
                  </div>
                </div>

                {/* Category & Title */}
                <span className="text-[10px] font-mono font-semibold tracking-wider text-[#606060] uppercase">
                  {product.categoryName}
                </span>
                <h3 className="text-sm font-bold text-[#171717] mt-1 leading-snug group-hover:text-[#F59A23] transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="mt-1.5 text-xs text-[#606060] line-clamp-2">
                  {product.shortDescription}
                </p>
              </div>

              {/* Price & Action Strip */}
              <div className="mt-5 pt-3 border-t border-[#E7E7E7]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-[#606060]">Pricing:</span>
                  <span className="text-xs font-bold text-[#D97706] bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {product.priceDisplay}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={(e) => handleAddQuote(e, product.slug)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                      addedSlug === product.slug
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#171717] hover:bg-neutral-800 text-white'
                    }`}
                    title="Add item to Corporate Quote Basket"
                  >
                    {addedSlug === product.slug ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Added
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" /> Add Quote
                      </>
                    )}
                  </button>

                  <a
                    href={getProductWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="py-2 px-2 rounded-xl text-xs font-bold bg-[#F59A23] hover:bg-[#D97706] text-white transition-all flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                    title="Enquire on WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
