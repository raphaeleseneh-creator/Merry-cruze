import React, { useState, useMemo } from 'react';
import { Search, Filter, Plus, Check, MessageSquare, Eye, ArrowLeft, Download, FileSpreadsheet, FileText } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCategory, Product } from '../types';
import { getProductWhatsAppLink } from '../data/config';
import { ProductImage } from './ProductImage';
import { downloadBoqTemplateCsv, downloadProductCatalogTxt } from '../utils/fileDownloader';

interface ProductsCatalogViewProps {
  initialCategory?: ProductCategory | 'all';
  onSelectProduct: (slug: string) => void;
  onAddQuote: (slug: string) => void;
  onBackToHome: () => void;
}

export const ProductsCatalogView: React.FC<ProductsCatalogViewProps> = ({
  initialCategory = 'all',
  onSelectProduct,
  onAddQuote,
  onBackToHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [addedSlug, setAddedSlug] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory =
        selectedCategory === 'all' || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddQuote = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation();
    onAddQuote(slug);
    setAddedSlug(slug);
    setTimeout(() => setAddedSlug(null), 1800);
  };

  return (
    <div className="py-8 md:py-16 px-3 sm:px-6 bg-[#F5F5F5] min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Breadcrumb & Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <button
              type="button"
              onClick={onBackToHome}
              className="text-xs font-semibold text-[#606060] hover:text-[#171717] flex items-center gap-1 mb-4 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Homepage</span>
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59A23]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#606060] uppercase">
                Full Equipment Catalog
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#171717] uppercase tracking-tight">
              COMMERCIAL & RESIDENTIAL PRODUCTS
            </h1>
            <p className="text-sm text-[#606060] mt-2 max-w-2xl">
              Heavy-duty janitorial trolleys, high-efficiency wringers, sanitary bathroom systems, waste receptacles, and utility furniture.
            </p>
          </div>

          {/* Direct Procurement Document Downloads */}
          <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0">
            <button
              type="button"
              onClick={downloadProductCatalogTxt}
              className="px-3.5 py-2 rounded-xl bg-white border border-[#E7E7E7] hover:border-[#171717] text-xs font-bold text-[#171717] flex items-center gap-1.5 shadow-xs hover:shadow transition-all cursor-pointer"
              title="Download full Merrycruze equipment specifications"
            >
              <FileText className="w-3.5 h-3.5 text-[#F59A23]" />
              <span>Download Catalog (.txt)</span>
            </button>
            <button
              type="button"
              onClick={downloadBoqTemplateCsv}
              className="px-3.5 py-2 rounded-xl bg-[#171717] text-white hover:bg-neutral-800 text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              title="Download Excel-compatible BOQ procurement spreadsheet"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-[#F59A23]" />
              <span>Download BOQ Template (.csv)</span>
            </button>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#E7E7E7] shadow-xs mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products by keyword (e.g. trolley, mop bucket, shower, caution sign)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#F5F5F5] border border-[#E7E7E7] text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59A23]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#171717] text-white shadow-sm'
                  : 'bg-[#F5F5F5] text-[#606060] hover:text-[#171717]'
              }`}
            >
              All Categories ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#171717] text-white shadow-sm'
                    : 'bg-[#F5F5F5] text-[#606060] hover:text-[#171717]'
                }`}
              >
                {cat.name} ({PRODUCTS.filter((p) => p.category === cat.id).length})
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E7E7E7]">
            <p className="text-base font-bold text-[#171717]">No products matched your search.</p>
            <p className="text-xs text-[#606060] mt-1">Try searching for other cleaning or facility hardware keywords.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 bg-[#171717] text-white px-5 py-2 rounded-full text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product.slug)}
                className="group bg-white rounded-3xl p-4 sm:p-5 border border-[#E7E7E7] hover:border-[#F59A23]/50 transition-all duration-300 hover:shadow-xl flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-100 mb-4">
                    <ProductImage
                      src={product.images.primary}
                      alt={product.images.alt}
                      category={product.category}
                      slug={product.slug}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="bg-[#171717] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                        {product.categoryName}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-[#171717] leading-snug group-hover:text-[#F59A23] transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#606060] line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>

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
                      className="py-2 px-2 rounded-xl text-xs font-bold bg-[#F59A23] hover:bg-[#D97706] text-white transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
