export type ProductCategory = 
  | 'cleaning-janitorial'
  | 'bathroom-essentials'
  | 'waste-management'
  | 'home-essentials'
  | 'utility-furniture';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  shortDescription: string;
  description: string;
  priceDisplay: 'Request Price';
  inStock: boolean;
  images: {
    primary: string;
    secondary?: string;
    alt: string;
  };
  features: string[];
  applications: {
    b2c: string[];
    b2b: string[];
  };
  specifications: {
    label: string;
    value: string;
  }[];
  dimensions?: string;
  material?: string;
  isHeroFeatured?: boolean;
  isBestseller?: boolean;
  relatedProductSlugs?: string[];
  relatedGuideSlugs?: string[];
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  headline: string;
  description: string;
  itemCount: number;
  featuredProducts: string[];
}

export interface IndustrySolution {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  recommendedProducts: string[];
  facilityChallenges: string[];
}

export interface CleaningGuide {
  id: string;
  slug: string;
  title: string;
  readTime: string;
  category: string;
  publishedDate: string;
  summary: string;
  sections: {
    heading: string;
    content: string;
    checklist?: string[];
  }[];
  relatedProducts: string[];
}

export interface QuoteItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export interface CorporateInquiry {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  facilityType: string;
  location: string;
  requirements: string;
  items: QuoteItem[];
}
