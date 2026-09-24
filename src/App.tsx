/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoriesSection } from './components/CategoriesSection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { StickyTrolleySection } from './components/StickyTrolleySection';
import { WhyMerrycruze } from './components/WhyMerrycruze';
import { B2BSection } from './components/B2BSection';
import { BulkOrderWorkflow } from './components/BulkOrderWorkflow';
import { ResourcesSection } from './components/ResourcesSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProductDetailView } from './components/ProductDetailView';
import { ProductsCatalogView } from './components/ProductsCatalogView';
import { GuideDetailView } from './components/GuideDetailView';
import { AboutView } from './components/AboutView';
import { BusinessSolutionsView } from './components/BusinessSolutionsView';
import { ContactView } from './components/ContactView';
import { QuoteDrawer } from './components/QuoteDrawer';
import { SitemapModal } from './components/SitemapModal';
import { PRODUCTS } from './data/products';
import { CLEANING_GUIDES } from './data/guides';
import { ProductCategory, QuoteItem } from './types';
import { MERRYCRUZE_CONFIG } from './data/config';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');
  const [activeProductSlug, setActiveProductSlug] = useState<string | null>(null);
  const [activeGuideSlug, setActiveGuideSlug] = useState<string | null>(null);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [quoteDrawerOpen, setQuoteDrawerOpen] = useState<boolean>(false);
  const [sitemapOpen, setSitemapOpen] = useState<boolean>(false);
  const [initialFacilityForQuote, setInitialFacilityForQuote] = useState<string>('');

  // Synchronize hash routing on mount and hash change
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash || hash === 'home') {
        setCurrentView('home');
      } else if (hash.startsWith('products/')) {
        const slug = hash.replace('products/', '');
        setActiveProductSlug(slug);
        setCurrentView('product-detail');
      } else if (hash === 'products') {
        setCurrentView('products');
      } else if (hash.startsWith('resources/')) {
        const slug = hash.replace('resources/', '');
        setActiveGuideSlug(slug);
        setCurrentView('guide-detail');
      } else if (hash === 'resources') {
        setCurrentView('resources');
      } else if (hash === 'business-solutions') {
        setCurrentView('business-solutions');
      } else if (hash === 'industries') {
        setCurrentView('industries');
      } else if (hash === 'about') {
        setCurrentView('about');
      } else if (hash === 'contact') {
        setCurrentView('contact');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Update page title dynamically for SEO
  useEffect(() => {
    if (currentView === 'home') {
      document.title = 'Merrycruze - Cleaning, Household & Facility Supplies';
    } else if (currentView === 'product-detail' && activeProductSlug) {
      const prod = PRODUCTS.find((p) => p.slug === activeProductSlug);
      if (prod) {
        document.title = `${prod.name} | Merrycruze Supplies`;
      }
    } else if (currentView === 'products') {
      document.title = 'Commercial Cleaning & Janitorial Products Catalog | Merrycruze';
    } else if (currentView === 'business-solutions') {
      document.title = 'Commercial Product Supply & B2B Procurement | Merrycruze';
    } else if (currentView === 'industries') {
      document.title = 'Industries We Equip: Hotels, Schools & Offices | Merrycruze';
    } else if (currentView === 'guide-detail' && activeGuideSlug) {
      const guide = CLEANING_GUIDES.find((g) => g.slug === activeGuideSlug);
      if (guide) {
        document.title = `${guide.title} | Merrycruze Guides`;
      }
    } else if (currentView === 'about') {
      document.title = 'About Merrycruze | Nigerian Cleaning & Facility Brand';
    } else if (currentView === 'contact') {
      document.title = 'Contact & Corporate Procurement Desk | Merrycruze';
    }
  }, [currentView, activeProductSlug, activeGuideSlug]);

  // Navigation handler
  const handleNavigate = (view: string, param?: string) => {
    if (view === 'home') {
      window.location.hash = '';
      setCurrentView('home');
    } else if (view === 'products') {
      if (param) {
        setActiveCategory(param as ProductCategory);
      } else {
        setActiveCategory('all');
      }
      window.location.hash = 'products';
      setCurrentView('products');
    } else if (view === 'product-detail' && param) {
      setActiveProductSlug(param);
      window.location.hash = `products/${param}`;
      setCurrentView('product-detail');
    } else if (view === 'guide-detail' && param) {
      setActiveGuideSlug(param);
      window.location.hash = `resources/${param}`;
      setCurrentView('guide-detail');
    } else {
      window.location.hash = view;
      setCurrentView(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quote Basket Handlers
  const handleAddQuote = (slug: string) => {
    const product = PRODUCTS.find((p) => p.slug === slug);
    if (!product) return;

    setQuoteItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setQuoteItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveQuoteItem = (productId: string) => {
    setQuoteItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearQuoteItems = () => {
    setQuoteItems([]);
  };

  const handleOpenCorporateQuote = (facility?: string) => {
    if (facility) setInitialFacilityForQuote(facility);
    setQuoteDrawerOpen(true);
  };

  const activeProduct = activeProductSlug
    ? PRODUCTS.find((p) => p.slug === activeProductSlug)
    : null;

  const activeGuide = activeGuideSlug
    ? CLEANING_GUIDES.find((g) => g.slug === activeGuideSlug)
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5] text-[#171717]">
      {/* Floating Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => setQuoteDrawerOpen(true)}
        quoteItemCount={quoteItems.reduce((acc, item) => acc + item.quantity, 0)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* HOMEPAGE VIEW */}
        {currentView === 'home' && (
          <>
            {/* 1. HERO SECTION */}
            <Hero
              onExploreProducts={() => handleNavigate('products')}
              onRequestQuote={() => handleOpenCorporateQuote()}
              onSelectProduct={(slug) => handleNavigate('product-detail', slug)}
              onAddQuote={handleAddQuote}
            />

            {/* 2. PRODUCT CATEGORIES */}
            <CategoriesSection
              onSelectCategory={(categoryId) => handleNavigate('products', categoryId)}
            />

            {/* 3. FEATURED PRODUCTS */}
            <FeaturedProducts
              onSelectProduct={(slug) => handleNavigate('product-detail', slug)}
              onAddQuote={handleAddQuote}
              onViewAllProducts={() => handleNavigate('products')}
            />

            {/* 4. STANDOUT STICKY TROLLEY SECTION */}
            <StickyTrolleySection
              onSelectProduct={(slug) => handleNavigate('product-detail', slug)}
              onRequestQuote={() => handleOpenCorporateQuote('Commercial Janitorial Fleet')}
            />

            {/* 5. WHY MERRYCRUZE */}
            <WhyMerrycruze />

            {/* 6. BUSINESS & INSTITUTIONAL SUPPLY + INDUSTRIES */}
            <B2BSection
              onRequestCorporateQuote={(facility) => handleOpenCorporateQuote(facility)}
              onSelectIndustry={(indId) => handleNavigate('industries', indId)}
            />

            {/* 7. HOW BULK ORDERS WORK */}
            <BulkOrderWorkflow
              onRequestQuote={() => handleOpenCorporateQuote()}
            />

            {/* 8. RESOURCES / CLEANING GUIDES */}
            <ResourcesSection
              onSelectGuide={(slug) => handleNavigate('guide-detail', slug)}
              onViewAllGuides={() => handleNavigate('resources')}
            />

            {/* 9. FAQ SECTION */}
            <FAQSection />

            {/* 10. FINAL CTA */}
            <FinalCTA
              onRequestQuote={() => handleOpenCorporateQuote()}
              onExploreProducts={() => handleNavigate('products')}
            />
          </>
        )}

        {/* PRODUCTS CATALOG VIEW */}
        {currentView === 'products' && (
          <ProductsCatalogView
            initialCategory={activeCategory}
            onSelectProduct={(slug) => handleNavigate('product-detail', slug)}
            onAddQuote={handleAddQuote}
            onBackToHome={() => handleNavigate('home')}
          />
        )}

        {/* INDIVIDUAL PRODUCT PAGE VIEW */}
        {currentView === 'product-detail' && activeProduct && (
          <ProductDetailView
            product={activeProduct}
            onBack={() => handleNavigate('products')}
            onSelectProduct={(slug) => handleNavigate('product-detail', slug)}
            onSelectCategory={(cat) => handleNavigate('products', cat)}
            onSelectGuide={(slug) => handleNavigate('guide-detail', slug)}
            onAddQuote={handleAddQuote}
            onRequestBulkQuote={(item) => handleOpenCorporateQuote(item)}
          />
        )}

        {/* RESOURCES / GUIDES LIST OR DETAIL VIEW */}
        {currentView === 'resources' && (
          <div className="py-12 md:py-20 px-3 sm:px-6 bg-[#F5F5F5] min-h-screen">
            <div className="max-w-7xl mx-auto">
              <div className="mb-10">
                <span className="text-xs font-mono font-bold tracking-widest text-[#F59A23] uppercase">
                  Procurement & Facility Guides
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-[#171717] uppercase tracking-tight mt-1">
                  COMMERCIAL CLEANING BLUEPRINTS
                </h1>
                <p className="text-sm text-[#606060] mt-2 max-w-xl">
                  Checklists, hotel housekeeping guidelines, and janitorial specifications for operations leads and facility managers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CLEANING_GUIDES.map((guide) => (
                  <article
                    key={guide.id}
                    onClick={() => handleNavigate('guide-detail', guide.slug)}
                    className="bg-white rounded-3xl p-6 border border-[#E7E7E7] hover:border-[#F59A23] transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#F59A23] uppercase">
                        {guide.category} • {guide.readTime}
                      </span>
                      <h2 className="text-base font-bold text-[#171717] mt-2 mb-2 leading-snug">
                        {guide.title}
                      </h2>
                      <p className="text-xs text-[#606060] line-clamp-3">
                        {guide.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E7E7E7] text-xs font-bold text-[#171717]">
                      Read Article & Checklist &rarr;
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentView === 'guide-detail' && activeGuide && (
          <GuideDetailView
            guide={activeGuide}
            onBack={() => handleNavigate('resources')}
            onSelectProduct={(slug) => handleNavigate('product-detail', slug)}
            onRequestQuote={() => handleOpenCorporateQuote()}
          />
        )}

        {/* BUSINESS SOLUTIONS VIEW */}
        {currentView === 'business-solutions' && (
          <BusinessSolutionsView
            onBackToHome={() => handleNavigate('home')}
            onRequestQuote={(facility) => handleOpenCorporateQuote(facility)}
            onSelectProduct={(slug) => handleNavigate('product-detail', slug)}
          />
        )}

        {/* INDUSTRIES VIEW */}
        {currentView === 'industries' && (
          <BusinessSolutionsView
            onBackToHome={() => handleNavigate('home')}
            onRequestQuote={(facility) => handleOpenCorporateQuote(facility)}
            onSelectProduct={(slug) => handleNavigate('product-detail', slug)}
          />
        )}

        {/* ABOUT VIEW */}
        {currentView === 'about' && (
          <AboutView
            onBackToHome={() => handleNavigate('home')}
            onRequestQuote={() => handleOpenCorporateQuote()}
            onExploreProducts={() => handleNavigate('products')}
          />
        )}

        {/* CONTACT VIEW */}
        {currentView === 'contact' && (
          <ContactView
            onBackToHome={() => handleNavigate('home')}
            onRequestQuote={() => handleOpenCorporateQuote()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSitemap={() => setSitemapOpen(true)}
      />

      {/* Interactive Corporate Quote Drawer */}
      <QuoteDrawer
        isOpen={quoteDrawerOpen}
        onClose={() => setQuoteDrawerOpen(false)}
        items={quoteItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveQuoteItem}
        onClearItems={handleClearQuoteItems}
        initialFacility={initialFacilityForQuote}
      />

      {/* XML & HTML Sitemap Modal */}
      <SitemapModal
        isOpen={sitemapOpen}
        onClose={() => setSitemapOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
