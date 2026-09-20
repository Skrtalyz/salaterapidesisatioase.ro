export interface BonusItem {
  id: number;
  badge: string;
  title: string;
  description: string;
  normalPriceEur: string;
  normalPriceRon: string;
  iconName: string;
}

export interface RecipeCategory {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  age: number;
  city: string;
  text: string;
  audioDuration: string;
  avatarUrl?: string;
  rating: number;
  highlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: 'basic' | 'complete';
  name: string;
  tagline: string;
  priceEur: string;
  priceRon: string;
  originalPriceEur: string;
  originalPriceRon: string;
  checkoutUrl?: string;
  isPopular?: boolean;
  features: {
    included: boolean;
    text: string;
  }[];
  ctaText: string;
}
