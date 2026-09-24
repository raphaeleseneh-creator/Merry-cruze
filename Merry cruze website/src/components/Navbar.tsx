import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, FileText, Phone, MessageSquare } from 'lucide-react';
import { MERRYCRUZE_CONFIG, getGeneralWhatsAppLink } from '../data/config';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, filter?: string) => void;
  onOpenQuoteModal: () => void;
  quoteItemCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenQuoteModal,
  quoteItemCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Products', id: 'products' },
    { label: 'Business Solutions', id: 'business-solutions' },
    { label: 'Industries', id: 'industries' },
    { label: 'Resources', id: 'resources' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-3 z-50 px-3 sm:px-6 transition-all duration-300 ${
          scrolled ? 'pt-1' : 'pt-2'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Floating Pill Nav Container inspired by high-end editorial layouts */}
          <nav
            aria-label="Main Navigation"
            className={`w-full rounded-2xl md:rounded-full px-4 sm:px-6 py-3 transition-all duration-300 border flex items-center justify-between ${
              scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-md border-[#E7E7E7]'
                : 'bg-white/90 backdrop-blur-sm shadow-sm border-[#E7E7E7]/80'
            }`}
          >
            {/* Brand Logo */}
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59A23] rounded-lg"
            >
              <div className="w-8 h-8 rounded-lg bg-[#171717] flex items-center justify-center text-white font-extrabold text-sm tracking-tighter group-hover:bg-[#F59A23] transition-colors">
                <span>M</span>
              </div>
              <div>
                <span className="font-extrabold text-base md:text-lg tracking-wider text-[#171717]">
                  MERRY<span className="text-[#F59A23]">CRUZE</span>
                </span>
                <span className="block text-[9px] font-semibold text-[#606060] tracking-widest uppercase -mt-1">
                  SUPPLY CO.
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = currentView === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#171717] text-white shadow-sm'
                        : 'text-[#606060] hover:text-[#171717] hover:bg-[#F5F5F5]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Right Action: Get a Quote CTA (Never Login/Register) */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="relative bg-[#F59A23] hover:bg-[#D97706] text-white px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-bold shadow-md shadow-[#F59A23]/25 transition-all flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F59A23]"
              >
                <FileText className="w-4 h-4" />
                <span>Get a Quote</span>
                {quoteItemCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#171717] text-white text-[10px] font-bold flex items-center justify-center">
                    {quoteItemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-[#171717] hover:bg-[#F5F5F5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F59A23] cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-20 inset-x-4 max-h-[85vh] bg-white rounded-3xl p-6 shadow-2xl border border-[#E7E7E7] overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E7E7E7]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#171717] flex items-center justify-center text-white text-xs font-extrabold">
                    M
                  </div>
                  <span className="font-extrabold text-sm tracking-wider text-[#171717]">
                    MERRY<span className="text-[#F59A23]">CRUZE</span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-[#606060] hover:text-[#171717]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                      currentView === link.id
                        ? 'bg-[#171717] text-white'
                        : 'text-[#171717] hover:bg-[#F5F5F5]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Quick Contact & Quote in Drawer */}
            <div className="pt-4 border-t border-[#E7E7E7] space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-[#F59A23] hover:bg-[#D97706] text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Get a Corporate Quote {quoteItemCount > 0 ? `(${quoteItemCount} items)` : ''}</span>
              </button>

              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#171717] hover:bg-neutral-800 text-white py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#F59A23]" />
                <span>WhatsApp Procurement Desk</span>
              </a>

              <p className="text-[11px] text-center text-[#606060]">
                Commercial cleaning & facility supplies across Nigeria.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
