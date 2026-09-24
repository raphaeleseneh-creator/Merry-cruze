export interface FAQItem {
  id: string;
  category: 'Orders & Quotes' | 'Delivery & Logistics' | 'B2B & Institutional' | 'Product Standards';
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Orders & Quotes',
    question: 'Why do product prices show "Request Price" instead of fixed prices?',
    answer: 'Merrycruze supplies both single units to homeowners and bulk container volumes to commercial hotels, schools, and facility management firms. Due to dynamic institutional order quantities and volume discount tiers, we provide tailored quotes to ensure you receive the most competitive direct rates.'
  },
  {
    id: 'faq-2',
    category: 'Orders & Quotes',
    question: 'How do I place an order or request an official quote?',
    answer: 'You can build a quote request directly on this website by adding items to your Quote Basket and submitting your facility requirements. Alternatively, click any "WhatsApp Enquiry" button to connect directly with our procurement desk with pre-filled product details.'
  },
  {
    id: 'faq-3',
    category: 'B2B & Institutional',
    question: 'Can Merrycruze provide formal proforma invoices and corporate purchase order (PO) fulfillment?',
    answer: 'Yes. For corporate bodies, educational institutions, healthcare centers, and hospitality clients, our corporate desk generates formal itemized proforma invoices, complete with tax schedules and payment details.'
  },
  {
    id: 'faq-4',
    category: 'B2B & Institutional',
    question: 'Is there a Minimum Order Quantity (MOQ)?',
    answer: 'Individual homeowners and short-let operators can purchase individual units. For commercial volume discount tiering or customized bulk packaging, specific unit thresholds apply depending on the equipment category.'
  },
  {
    id: 'faq-5',
    category: 'Delivery & Logistics',
    question: 'Where does Merrycruze deliver in Nigeria?',
    answer: 'We coordinate nationwide delivery and commercial freight across Nigeria. Express dispatch is available within metropolitan commercial centers, with consolidated freight arranged for outstation facilities and regional state capitals.'
  },
  {
    id: 'faq-6',
    category: 'Product Standards',
    question: 'What materials and durability standards are used in Merrycruze equipment?',
    answer: 'Our janitorial carts, mop buckets, and utility furniture are manufactured with high-density structural polypropylene, powder-coated steel, and non-marking casters specifically engineered to resist commercial cleaning detergents, repeated impact, and high-frequency usage.'
  },
  {
    id: 'faq-7',
    category: 'Product Standards',
    question: 'Can we inspect the equipment upon delivery?',
    answer: 'Yes. Institutional and individual orders are accompanied by a physical delivery waybill. Facility managers or receiving officers are encouraged to verify item quantities, casters, and accessories prior to signing receipt.'
  }
];
