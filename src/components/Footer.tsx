import React from 'react';
import { MERRYCRUZE_CONFIG, getGeneralWhatsAppLink } from '../data/config';
import { CATEGORIES } from '../data/products';
import { INDUSTRIES } from '../data/industries';
import { Mail, Phone, MapPin, MessageSquare, ShieldAlert, FileText, Download, FileSpreadsheet } from 'lucide-react';
import { ProductCategory } from '../types';
import { downloadBoqTemplateCsv, downloadProductCatalogTxt, downloadSitemapXml } from '../utils/fileDownloader';

interface FooterProps {
  onNavigate: (view: string, filter?: string) => void;
  onOpenSitemap: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSitemap }) => {
  return (
    <footer className="bg-[#171717] text-white pt-16 pb-12 px-3 sm:px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Upper Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#F59A23] flex items-center justify-center text-white font-extrabold text-sm">
                M
              </div>
              <span className="font-extrabold text-xl tracking-wider text-white">
                MERRY<span className="text-[#F59A23]">CRUZE</span>
              </span>
            </div>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Cleaner, safer, better-equipped spaces. A Nigerian product and supply brand delivering commercial janitorial equipment, bathroom essentials, waste management, and household utility goods.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#F59A23] text-xs font-semibold text-neutral-200 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#F59A23]" />
                <span>Procurement Desk</span>
              </a>

              <button
                type="button"
                onClick={downloadBoqTemplateCsv}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-300 transition-colors cursor-pointer"
                title="Download Excel-compatible BOQ procurement spreadsheet"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-[#F59A23]" />
                <span>BOQ Template (.csv)</span>
              </button>

              <button
                type="button"
                onClick={downloadProductCatalogTxt}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-300 transition-colors cursor-pointer"
                title="Download equipment catalog specifications"
              >
                <Download className="w-3.5 h-3.5 text-[#F59A23]" />
                <span>Catalog (.txt)</span>
              </button>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F59A23] mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate('products', cat.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Sectors */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F59A23] mb-4">
              Industries Served
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {INDUSTRIES.slice(0, 6).map((ind) => (
                <li key={ind.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate('industries', ind.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {ind.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Procurement & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F59A23] mb-4">
              Procurement Desk
            </h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F59A23] shrink-0 mt-0.5" />
                <span>{MERRYCRUZE_CONFIG.headquarters} (Commercial Distribution Hubs)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F59A23] shrink-0" />
                <a href={`mailto:${MERRYCRUZE_CONFIG.corporateEmail}`} className="hover:text-white transition-colors">
                  {MERRYCRUZE_CONFIG.corporateEmail}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F59A23] shrink-0" />
                <span className="font-mono">{MERRYCRUZE_CONFIG.phoneNumber}</span>
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t border-neutral-800">
              <p className="text-[11px] text-neutral-500">
                Lagos • Abuja • Port Harcourt & Nationwide Commercial Freight.
              </p>
            </div>
          </div>

        </div>

        {/* Lower Disclaimer & Transparency Note */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div className="flex items-center gap-2 max-w-2xl">
            <ShieldAlert className="w-4 h-4 text-[#F59A23] shrink-0" />
            <p>
              Corporate Content Policy: Contact lines, fulfillment schedules, and specifications are kept configurable. Pricing provided on tailored proforma basis.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenSitemap}
              className="hover:text-[#F59A23] transition-colors cursor-pointer flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              <span>HTML & XML Sitemap</span>
            </button>
            <span>&copy; {new Date().getFullYear()} Merrycruze Supply Co. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
