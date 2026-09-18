export type Language = 'es-MX' | 'es-ES' | 'en-US_UK';

export type CurrencyCode = 'MXN' | 'USD' | 'EUR' | 'GBP' | 'ARS' | 'JPY' | 'CAD' | 'BRL';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: Record<Language, string>;
  rateFromUSD: number; // base USD
  formatLocale: string;
}

export type DestinationId = 
  | 'argentina'
  | 'brazil'
  | 'spain'
  | 'japan'
  | 'canada'
  | 'portugal'
  | 'south-korea';

export interface TravelPackage {
  id: string;
  title: Record<Language, string>;
  durationDays: number;
  basePriceUSD: number;
  description: Record<Language, string>;
  highlights: Record<Language, string[]>;
  includesFlightFromMexico: boolean;
}

export interface ItineraryItem {
  days: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  highlightLocation: string;
}

export interface ArticleSection {
  id: string;
  title: Record<Language, string>;
  content: Record<Language, string>;
  subsections?: {
    subtitle: Record<Language, string>;
    text: Record<Language, string>;
    sourceTag?: string;
  }[];
  quote?: {
    text: Record<Language, string>;
    author: string;
    source?: string;
  };
  image?: {
    url: string;
    caption: Record<Language, string>;
  };
}

export interface DestinationArticle {
  id: DestinationId;
  slug: string;
  countryName: Record<Language, string>;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  author: {
    name: string;
    role: Record<Language, string>;
    avatar: string;
  };
  readTimeMin: number;
  publishedDate: string;
  heroImage: string;
  galleryImages: string[];
  quickStats: {
    capital: Record<Language, string>;
    flightTimeFromCDMX: Record<Language, string>;
    bestSeason: Record<Language, string>;
    visaForMexicans: Record<Language, string>;
    languageSpoken: Record<Language, string>;
    averageDailyBudgetUSD: number;
  };
  overview: Record<Language, string>;
  sections: ArticleSection[];
  curatedReasons?: {
    title: Record<Language, string>;
    description: Record<Language, string>;
    sourceRef?: string;
    iconName?: string;
  }[];
  itinerary: ItineraryItem[];
  packages: TravelPackage[];
  mexicoTravelerTips: Record<Language, string[]>;
}
