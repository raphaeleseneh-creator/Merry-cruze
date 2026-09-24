import React, { useEffect, useState } from 'react';
import { 
  ChevronRight, 
  Plus, 
  Check, 
  MessageSquare, 
  ShieldCheck, 
  Truck, 
  FileText, 
  ArrowLeft,
  Share2,
  CheckCircle2,
  Layers,
  HelpCircle
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { CLEANING_GUIDES } from '../data/guides';
import { FAQS } from '../data/faqs';
import { getProductWhatsAppLink, MERRYCRUZE_CONFIG } from '../data/config';
import { ProductImage } from './ProductImage';

interface ProductDetailViewProps {
  product: Product;
  onBack: () => void;
  onSelectProduct: (slug: string) => void;
  onSelectCategory: (categoryId: any) => void;
  onSelectGuide: (slug: string) => void;
  onAddQuote: (slug: string) => void;
  onRequestBulkQuote: (facility?: string) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  onBack,
  onSelectProduct,
  onSelectCategory,
  onSelectGuide,
  onAddQuote,
  onRequestBulkQuote,
}) => {
  const [selectedImage, setSelectedImage] = useState(product.images.primary);
  const [addedToQuote, setAddedToQuote] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  useEffect(() => {
    setSelectedImage(product.images.primary);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  const handleAddQuote = () => {
    onAddQuote(product.slug);
    setAddedToQuote(true);
    setTimeout(() => setAddedToQuote(false), 2000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  };

  // Related products
  const relatedProducts = PRODUCTS.filter(
    (p) => product.relatedProductSlugs?.includes(p.slug) || (p.category === product.category && p.id !== product.id)
  ).slice(0, 4);

  // Related guides
  const relatedGuides = CLEANING_GUIDES.filter(
    (g) => product.relatedGuideSlugs?.includes(g.slug) || g.relatedProducts.includes(product.slug)
  ).slice(0, 2);

  // Product JSON-LD schema
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: [product.images.primary, product.images.secondary].filter(Boolean),
    category: product.categoryName,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'NGN',
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
      price: '0.00', // Stored cleanly as Request Price
      priceValidUntil: '2027-12-31',
    },
    brand: {
      '@type': 'Brand',
      name: 'Merrycruze',
    },
  };

  return (
    <div className="py-8 md:py-16 px-3 sm:px-6 bg-[#F5F5F5]">
      {/* Inject SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-[#606060] flex-wrap">
          <button
            type="button"
            onClick={onBack}
            className="hover:text-[#171717] flex items-center gap-1 cursor-pointer font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <button
            type="button"
            onClick={() => onSelectCategory(product.category)}
            className="hover:text-[#171717] cursor-pointer"
          >
            {product.categoryName}
          </button>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <span className="font-semibold text-[#171717] truncate max-w-xs sm:max-w-sm">
            {product.name}
          </span>
        </nav>

        {/* ============================================================ */}
        {/* MAIN PRODUCT SHOWCASE GRID */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl md:rounded-[36px] p-6 sm:p-8 md:p-12 border border-[#E7E7E7] shadow-sm">
          
          {/* Left Column: Product Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square sm:aspect-[4/3.5] rounded-2xl overflow-hidden bg-neutral-100 border border-[#E7E7E7]">
              <ProductImage
                src={selectedImage}
                alt={product.images.alt}
                category={product.category}
                slug={product.slug}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <span className="absolute top-3 left-3 bg-[#171717] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                {product.categoryName}
              </span>
            </div>

            {/* Thumbnail selector if secondary image exists */}
            {product.images.secondary && (
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedImage(product.images.primary)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImage === product.images.primary ? 'border-[#F59A23]' : 'border-[#E7E7E7]'
                  }`}
                >
                  <ProductImage
                    src={product.images.primary}
                    alt="Primary angle"
                    category={product.category}
                    slug={product.slug}
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedImage(product.images.secondary!)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImage === product.images.secondary ? 'border-[#F59A23]' : 'border-[#E7E7E7]'
                  }`}
                >
                  <ProductImage
                    src={product.images.secondary}
                    alt="Secondary angle"
                    category={product.category}
                    slug={product.slug}
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
            )}

            {/* Quality Standard Badges */}
            <div className="grid grid-cols-2 gap-3 pt-4 text-xs text-[#606060]">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F5F5F5] border border-[#E7E7E7]">
                <ShieldCheck className="w-4 h-4 text-[#F59A23]" />
                <span>Commercial Grade Build</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F5F5F5] border border-[#E7E7E7]">
                <Truck className="w-4 h-4 text-[#F59A23]" />
                <span>Nationwide Dispatch Nigeria</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Information & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#F59A23] uppercase">
                  Item Code: {product.id.toUpperCase()}
                </span>
                <button
                  type="button"
                  onClick={handleShare}
                  className="text-xs text-[#606060] hover:text-[#171717] flex items-center gap-1 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{shareCopied ? 'Link Copied' : 'Share Item'}</span>
                </button>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#171717] uppercase tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Pricing Display */}
              <div className="mt-4 p-4 rounded-2xl bg-[#F5F5F5] border border-[#E7E7E7] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#606060] uppercase tracking-wider block">
                    Unit & Bulk Pricing
                  </span>
                  <span className="text-xl font-extrabold text-[#D97706]">
                    {product.priceDisplay}
                  </span>
                </div>
                <span className="text-[11px] text-[#606060] max-w-[180px] text-right">
                  Tailored based on order volume, residential unit, or corporate tender.
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm sm:text-base text-[#606060] leading-relaxed">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="mt-6 space-y-2.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717]">
                  Key Features & Capabilities:
                </h3>
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#606060]">
                    <CheckCircle2 className="w-4 h-4 text-[#F59A23] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs Strip */}
            <div className="mt-8 pt-6 border-t border-[#E7E7E7] space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleAddQuote}
                  className={`py-3.5 px-4 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    addedToQuote
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#171717] hover:bg-neutral-800 text-white'
                  }`}
                >
                  {addedToQuote ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Quote Basket
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" /> Add to Quote Basket
                    </>
                  )}
                </button>

                <a
                  href={getProductWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 rounded-full text-xs sm:text-sm font-bold bg-[#F59A23] hover:bg-[#D97706] text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#F59A23]/25"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => onRequestBulkQuote(product.name)}
                className="w-full py-2.5 rounded-full border border-[#E7E7E7] text-xs font-semibold text-[#171717] hover:bg-[#F5F5F5] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#F59A23]" />
                <span>Request Formal Corporate Facility Pricing (PO / Proforma)</span>
              </button>
            </div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* SPECIFICATIONS & APPLICATION TABS */}
        {/* ============================================================ */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Applications: B2C vs B2B */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E7E7]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#171717] mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#F59A23]" />
              <span>Recommended Applications</span>
            </h3>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-[#F59A23] uppercase block mb-1">
                  B2C / Residential & Short-Let:
                </span>
                <ul className="list-disc list-inside text-xs text-[#606060] space-y-1">
                  {product.applications.b2c.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#E7E7E7]">
                <span className="text-xs font-bold text-[#171717] uppercase block mb-1">
                  B2B / Commercial & Institutional:
                </span>
                <ul className="list-disc list-inside text-xs text-[#606060] space-y-1">
                  {product.applications.b2b.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E7E7]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#171717] mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#F59A23]" />
              <span>Technical & Supply Specifications</span>
            </h3>

            <div className="divide-y divide-[#E7E7E7]">
              {product.specifications.map((spec, i) => (
                <div key={i} className="py-2.5 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#171717]">{spec.label}</span>
                  <span className="text-[#606060] font-mono text-right">{spec.value}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[11px] text-[#606060] italic">
              Additional certified technical datasheets available for commercial procurement audits.
            </p>
          </div>

        </div>

        {/* ============================================================ */}
        {/* RELATED CLEANING GUIDES */}
        {/* ============================================================ */}
        {relatedGuides.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-bold uppercase text-[#171717] mb-6">
              Related Cleaning & Facility Guides
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedGuides.map((guide) => (
                <div
                  key={guide.id}
                  onClick={() => onSelectGuide(guide.slug)}
                  className="bg-white rounded-2xl p-6 border border-[#E7E7E7] hover:border-[#F59A23] transition-colors cursor-pointer"
                >
                  <span className="text-[10px] font-mono text-[#F59A23] font-bold uppercase">
                    {guide.category} • {guide.readTime}
                  </span>
                  <h4 className="text-base font-bold text-[#171717] mt-1 mb-2">
                    {guide.title}
                  </h4>
                  <p className="text-xs text-[#606060] line-clamp-2">
                    {guide.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* RELATED PRODUCTS */}
        {/* ============================================================ */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-bold uppercase text-[#171717] mb-6">
              Complementary Facility Equipment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onSelectProduct(p.slug)}
                  className="bg-white rounded-2xl p-4 border border-[#E7E7E7] hover:border-[#F59A23] transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 bg-neutral-100">
                      <ProductImage
                        src={p.images.primary}
                        alt={p.name}
                        category={p.category}
                        slug={p.slug}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-[#606060] uppercase">
                      {p.categoryName}
                    </span>
                    <h4 className="text-xs font-bold text-[#171717] mt-0.5 group-hover:text-[#F59A23] transition-colors line-clamp-1">
                      {p.name}
                    </h4>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#E7E7E7] flex items-center justify-between text-xs">
                    <span className="text-[#D97706] font-semibold">{p.priceDisplay}</span>
                    <span className="text-[#606060] group-hover:text-[#171717]">View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
