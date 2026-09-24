/**
 * Safe client-side document and procurement file generators.
 * Uses standard browser Blob downloads that work offline and within iframes without network failures.
 */

import { PRODUCTS } from '../data/products';
import { MERRYCRUZE_CONFIG } from '../data/config';

export const downloadSitemapXml = () => {
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://merrycruze.com/</loc><priority>1.0</priority></url>
  <url><loc>https://merrycruze.com/products</loc><priority>0.9</priority></url>
  <url><loc>https://merrycruze.com/business-solutions</loc><priority>0.8</priority></url>
  <url><loc>https://merrycruze.com/industries</loc><priority>0.8</priority></url>
  <url><loc>https://merrycruze.com/resources</loc><priority>0.8</priority></url>
  <url><loc>https://merrycruze.com/about</loc><priority>0.7</priority></url>
  <url><loc>https://merrycruze.com/contact</loc><priority>0.7</priority></url>
</urlset>`;

  const blob = new Blob([xmlContent], { type: 'text/xml;charset=utf-8;' });
  triggerBrowserDownload(blob, 'merrycruze_sitemap.xml');
};

export const downloadBoqTemplateCsv = () => {
  const headers = ['Item No', 'Product Code', 'Product Name', 'Category', 'Required Quantity', 'Facility Department', 'Delivery Location', 'Notes / Specs'];
  const rows = PRODUCTS.map((p, idx) => [
    idx + 1,
    p.id.toUpperCase(),
    `"${p.name.replace(/"/g, '""')}"`,
    `"${p.categoryName}"`,
    '10', // Default recommended starter quantity
    'Housekeeping / Janitorial',
    'Lagos / Abuja / Port Harcourt',
    `"${p.shortDescription.replace(/"/g, '""')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  triggerBrowserDownload(blob, 'Merrycruze_Facility_BOQ_Template.csv');
};

export const downloadProductCatalogTxt = () => {
  let doc = `====================================================\n`;
  doc += `MERRYCRUZE PRODUCT & SUPPLY COMPANY\n`;
  doc += `Cleaner. Safer. Better-Equipped Spaces.\n`;
  doc += `Official Commercial Equipment & Domestic Catalog\n`;
  doc += `====================================================\n\n`;
  doc += `Contact: ${MERRYCRUZE_CONFIG.phoneNumber} | WhatsApp: ${MERRYCRUZE_CONFIG.whatsappNumber}\n`;
  doc += `Email: ${MERRYCRUZE_CONFIG.corporateEmail}\n`;
  doc += `Headquarters: ${MERRYCRUZE_CONFIG.headquarters}\n\n`;
  doc += `----------------------------------------------------\n`;
  doc += `PRODUCT LISTING & TECHNICAL SPECIFICATIONS\n`;
  doc += `----------------------------------------------------\n\n`;

  PRODUCTS.forEach((p, idx) => {
    doc += `[${idx + 1}] ${p.name.toUpperCase()}\n`;
    doc += `Item Code: ${p.id.toUpperCase()} | Category: ${p.categoryName}\n`;
    doc += `Pricing Standard: ${p.priceDisplay} (Tailored by volume)\n`;
    doc += `Summary: ${p.shortDescription}\n`;
    doc += `Key Features:\n`;
    p.features.forEach(f => {
      doc += `  • ${f}\n`;
    });
    doc += `Specifications:\n`;
    p.specifications.forEach(s => {
      doc += `  - ${s.label}: ${s.value}\n`;
    });
    doc += `\n----------------------------------------------------\n\n`;
  });

  doc += `HOW TO PLACE AN ORDER:\n`;
  doc += `1. Transmit your selected item numbers and required unit quantities.\n`;
  doc += `2. Request a formal proforma quotation for tax/WHT compliance.\n`;
  doc += `3. Goods dispatched with verified commercial waybill across Nigeria.\n`;

  const blob = new Blob([doc], { type: 'text/plain;charset=utf-8;' });
  triggerBrowserDownload(blob, 'Merrycruze_Equipment_Catalog_2026.txt');
};

function triggerBrowserDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
