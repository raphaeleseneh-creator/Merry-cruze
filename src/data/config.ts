/**
 * Configurable business placeholder settings for Merrycruze.
 * 
 * IMPORTANT CONTENT RULE:
 * Never invent Merrycruze information. All contact numbers, addresses,
 * and delivery parameters are kept strictly configurable.
 */

export const MERRYCRUZE_CONFIG = {
  brandName: 'MERRYCRUZE',
  tagline: 'Cleaner. Safer. Better-Equipped Spaces.',
  eyebrow: 'CLEANING • HOME • FACILITY',
  
  // Configurable Contact Placeholders
  whatsappNumber: '+2348000000000', // Configurable placeholder (Nigeria format e.g., +234...)
  phoneNumber: '+234 1 234 5678', // Configurable placeholder
  email: 'procurement@merrycruze.com',
  corporateEmail: 'b2b@merrycruze.com',
  
  // Locations & Operational Reach
  headquarters: 'Lagos, Nigeria',
  fulfillmentHubs: ['Lagos Central', 'Abuja FCT Depot', 'Port Harcourt Hub'],
  nationwideDispatchNote: 'Nationwide commercial dispatch and corporate fulfillment across Nigeria.',
  
  // Visual Theme Colors
  colors: {
    orange: '#F59A23',
    orangeDark: '#D97706',
    white: '#FFFFFF',
    charcoal: '#171717',
    secondaryText: '#606060',
    softGrey: '#F5F5F5',
    border: '#E7E7E7',
  },

  // Social Channels
  socials: [
    { label: 'WhatsApp', href: 'https://wa.me/2348000000000' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'X (Twitter)', href: '#' },
  ]
};

/**
 * Generate a pre-filled WhatsApp link for product or quote enquiries.
 */
export function getProductWhatsAppLink(productName: string): string {
  const cleanNumber = MERRYCRUZE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const message = `Hello Merrycruze, I'm interested in the ${productName}. Please send me more information and pricing.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsAppLink(subject?: string): string {
  const cleanNumber = MERRYCRUZE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const message = subject 
    ? `Hello Merrycruze, I would like to request information regarding: ${subject}.`
    : `Hello Merrycruze, I would like to make an enquiry regarding products and facility supplies.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function getBulkQuoteWhatsAppLink(itemsCount: number, facilityType?: string): string {
  const cleanNumber = MERRYCRUZE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const message = `Hello Merrycruze B2B Team, I would like to request corporate/bulk pricing for ${itemsCount} product item(s)${facilityType ? ` for our ${facilityType}` : ''}.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
