import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, MessageSquare, Building2, CheckCircle, Copy } from 'lucide-react';
import { QuoteItem, Product } from '../types';
import { MERRYCRUZE_CONFIG } from '../data/config';
import { ProductImage } from './ProductImage';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearItems: () => void;
  initialFacility?: string;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearItems,
  initialFacility = '',
}) => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [facilityType, setFacilityType] = useState(initialFacility || 'Hotel / Hospitality');
  const [deliveryLocation, setDeliveryLocation] = useState('Lagos, Nigeria');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateWhatsAppMessage = () => {
    let msg = `*MERRYCRUZE CORPORATE / BULK QUOTE REQUEST*\n`;
    if (companyName) msg += `*Organization:* ${companyName}\n`;
    if (contactName) msg += `*Contact Person:* ${contactName}\n`;
    if (phone) msg += `*Phone:* ${phone}\n`;
    if (facilityType) msg += `*Facility Type:* ${facilityType}\n`;
    msg += `*Delivery Location:* ${deliveryLocation}\n\n`;
    msg += `*REQUESTED ITEMS:*\n`;

    if (items.length === 0) {
      msg += `General facility supplies inquiry.\n`;
    } else {
      items.forEach((item, idx) => {
        msg += `${idx + 1}. ${item.product.name} — Qty: ${item.quantity} units\n`;
      });
    }

    msg += `\nPlease provide formal proforma pricing and lead time. Thank you.`;
    return msg;
  };

  const handleSendWhatsApp = () => {
    const cleanNumber = MERRYCRUZE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`;
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setSubmitted(true);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#E7E7E7] flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59A23]" />
              <h2 className="text-lg font-black uppercase text-[#171717] tracking-tight">
                Corporate Quote Desk
              </h2>
            </div>
            <p className="text-xs text-[#606060] mt-0.5">
              Multi-item pricing, institutional tenders, and home orders.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#606060] hover:text-[#171717] rounded-xl hover:bg-[#F5F5F5] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 space-y-6 flex-1">
          {submitted ? (
            <div className="text-center py-12 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#171717]">
                Quote Request Prepared!
              </h3>
              <p className="text-xs sm:text-sm text-[#606060] max-w-md mx-auto">
                Your request details have been opened in WhatsApp. Our procurement desk will review item availability and generate your formal proforma quotation.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-[#171717] text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Selected Items List */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#606060]">
                    Selected Products ({items.length})
                  </h3>
                  {items.length > 0 && (
                    <button
                      type="button"
                      onClick={onClearItems}
                      className="text-[11px] text-red-600 hover:underline cursor-pointer"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {items.length === 0 ? (
                  <div className="bg-[#F5F5F5] rounded-2xl p-6 text-center border border-dashed border-[#E7E7E7]">
                    <p className="text-xs text-[#606060]">
                      No specific hardware items added yet. You can still submit a general facility specification below or add products directly from the catalog.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="bg-[#F5F5F5] rounded-2xl p-3 sm:p-4 border border-[#E7E7E7] flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-white shrink-0">
                            <ProductImage
                              src={item.product.images.primary}
                              alt={item.product.name}
                              category={item.product.category}
                              slug={item.product.slug}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[#171717] line-clamp-1">
                              {item.product.name}
                            </h4>
                            <span className="text-[10px] text-[#606060]">
                              {item.product.categoryName}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center bg-white rounded-lg border border-[#E7E7E7] p-1">
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                              }
                              className="p-1 hover:text-[#F59A23] cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-7 text-center text-xs font-bold font-mono">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQuantity(item.product.id, item.quantity + 1)
                              }
                              className="p-1 hover:text-[#F59A23] cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.product.id)}
                            className="p-2 text-neutral-400 hover:text-red-600 transition-colors cursor-pointer"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Facility Details Form */}
              <div className="space-y-4 pt-4 border-t border-[#E7E7E7]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#606060]">
                  Facility & Procurement Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1">
                      Organization / Business Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Hotel & Suites / Private Residence"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-[#E7E7E7] bg-[#F5F5F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59A23]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-[#E7E7E7] bg-[#F5F5F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59A23]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+234..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-[#E7E7E7] bg-[#F5F5F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59A23]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1">
                      Email Address (For Proforma)
                    </label>
                    <input
                      type="email"
                      placeholder="procurement@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-[#E7E7E7] bg-[#F5F5F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59A23]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1">
                      Facility / Sector
                    </label>
                    <select
                      value={facilityType}
                      onChange={(e) => setFacilityType(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-[#E7E7E7] bg-[#F5F5F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59A23]"
                    >
                      <option value="Hotel & Hospitality">Hotel & Hospitality</option>
                      <option value="School / College / University">School / College / University</option>
                      <option value="Corporate Office">Corporate Office</option>
                      <option value="Healthcare / Clinic">Healthcare / Clinic</option>
                      <option value="Cleaning Contractor">Cleaning Contractor</option>
                      <option value="Facility Management Firm">Facility Management Firm</option>
                      <option value="Restaurant / Food Service">Restaurant / Food Service</option>
                      <option value="Residential Estate / Compound">Residential Estate / Compound</option>
                      <option value="Short-Let / Airbnb Operator">Short-Let / Airbnb Operator</option>
                      <option value="Private Homeowner">Private Homeowner</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1">
                      Delivery Location (Nigeria)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ikeja, Lagos / Wuse II, Abuja"
                      value={deliveryLocation}
                      onChange={(e) => setDeliveryLocation(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-[#E7E7E7] bg-[#F5F5F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59A23]"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        {!submitted && (
          <div className="p-6 border-t border-[#E7E7E7] bg-white space-y-3 sticky bottom-0">
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="w-full bg-[#F59A23] hover:bg-[#D97706] text-white py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-[#F59A23]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Transmit RFQ via WhatsApp Desk</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyText}
                className="flex-1 py-2.5 rounded-xl border border-[#E7E7E7] text-xs font-semibold text-[#171717] hover:bg-[#F5F5F5] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5 text-[#606060]" />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Formal Text Spec'}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-4 rounded-xl text-xs text-[#606060] hover:text-[#171717] cursor-pointer"
              >
                Close
              </button>
            </div>

            <p className="text-[10px] text-center text-[#606060]">
              Official proforma with VAT and commercial freight details will be generated.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
