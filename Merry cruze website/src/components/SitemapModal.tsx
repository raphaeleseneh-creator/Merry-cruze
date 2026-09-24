import React, { useState } from 'react';
import { X, FileText, Code, Check, Copy, ExternalLink, Download } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { INDUSTRIES } from '../data/industries';
import { CLEANING_GUIDES } from '../data/guides';
import { downloadSitemapXml } from '../utils/fileDownloader';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string, detailSlug?: string) => void;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [tab, setTab] = useState<'visual' | 'xml'>('visual');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://merrycruze.com';

  const generateXmlSitemap = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    
    // Core pages
    const mainPages = ['', '/products', '/business-solutions', '/industries', '/resources', '/about', '/contact'];
    mainPages.forEach((path) => {
      xml += `  <url>\n    <loc>${baseUrl}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${path === '' ? '1.0' : '0.8'}</priority>\n  </url>\n`;
    });

    // Products
    PRODUCTS.forEach((p) => {
      xml += `  <url>\n    <loc>${baseUrl}/products/${p.slug}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
    });

    // Guides
    CLEANING_GUIDES.forEach((g) => {
      xml += `  <url>\n    <loc>${baseUrl}/resources/${g.slug}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
    });

    xml += `</urlset>`;
    return xml;
  };

  const handleCopyXml = () => {
    navigator.clipboard.writeText(generateXmlSitemap());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[88vh] overflow-hidden shadow-2xl flex flex-col border border-[#E7E7E7]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-[#E7E7E7] flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#171717] uppercase tracking-tight">
              Site Architecture & Sitemap
            </h3>
            <p className="text-xs text-[#606060]">
              Indexable routes, structured data hierarchy, and XML distribution.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-[#F5F5F5] rounded-xl p-1 border border-[#E7E7E7]">
              <button
                type="button"
                onClick={() => setTab('visual')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  tab === 'visual' ? 'bg-white text-[#171717] shadow-xs' : 'text-[#606060]'
                }`}
              >
                Visual Directory
              </button>
              <button
                type="button"
                onClick={() => setTab('xml')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  tab === 'xml' ? 'bg-white text-[#171717] shadow-xs' : 'text-[#606060]'
                }`}
              >
                XML Output
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#606060] hover:text-[#171717] rounded-lg hover:bg-[#F5F5F5] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 text-xs">
          {tab === 'visual' ? (
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#F59A23] uppercase tracking-wider mb-2">
                  1. Core Architecture
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { label: 'Homepage', view: 'home' },
                    { label: 'All Products Catalog', view: 'products' },
                    { label: 'Business Solutions', view: 'business-solutions' },
                    { label: 'Industries We Serve', view: 'industries' },
                    { label: 'Resources & Guides', view: 'resources' },
                    { label: 'About Merrycruze', view: 'about' },
                    { label: 'Contact & Procurement', view: 'contact' },
                  ].map((route) => (
                    <button
                      key={route.view}
                      type="button"
                      onClick={() => {
                        onNavigate(route.view);
                        onClose();
                      }}
                      className="p-2.5 rounded-xl bg-[#F5F5F5] hover:bg-neutral-200 text-left font-semibold text-[#171717] transition-colors cursor-pointer"
                    >
                      {route.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#F59A23] uppercase tracking-wider mb-2">
                  2. Product URLs ({PRODUCTS.length})
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {PRODUCTS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        onNavigate('product-detail', p.slug);
                        onClose();
                      }}
                      className="p-2 rounded-lg bg-[#F5F5F5] hover:bg-amber-50 hover:border-amber-200 border border-transparent text-left flex items-center justify-between text-[#171717] cursor-pointer"
                    >
                      <span className="truncate">{p.name}</span>
                      <span className="text-[10px] text-[#606060] font-mono shrink-0 ml-2">/products/{p.slug}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#F59A23] uppercase tracking-wider mb-2">
                  3. Cleaning Guides & Checklists ({CLEANING_GUIDES.length})
                </h4>
                <div className="space-y-1.5">
                  {CLEANING_GUIDES.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => {
                        onNavigate('guide-detail', g.slug);
                        onClose();
                      }}
                      className="w-full p-2 rounded-lg bg-[#F5F5F5] hover:bg-amber-50 hover:border-amber-200 border border-transparent text-left flex items-center justify-between text-[#171717] cursor-pointer"
                    >
                      <span className="truncate">{g.title}</span>
                      <span className="text-[10px] text-[#606060] font-mono shrink-0 ml-2">/resources/{g.slug}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs text-[#606060]">Standard sitemap.xml format:</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={downloadSitemapXml}
                    className="bg-[#F59A23] hover:bg-[#D97706] text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download .xml</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyXml}
                    className="bg-[#171717] hover:bg-neutral-800 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied XML' : 'Copy XML'}</span>
                  </button>
                </div>
              </div>

              <pre className="p-4 rounded-2xl bg-neutral-900 text-neutral-300 font-mono text-[11px] overflow-x-auto max-h-96">
                {generateXmlSitemap()}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
