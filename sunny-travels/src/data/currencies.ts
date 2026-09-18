import { CurrencyCode, CurrencyConfig, Language } from '../types';

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  MXN: {
    code: 'MXN',
    symbol: '$',
    rateFromUSD: 19.85,
    formatLocale: 'es-MX',
    name: {
      'es-MX': 'Peso Mexicano (MXN)',
      'es-ES': 'Peso Mexicano (MXN)',
      'en-US_UK': 'Mexican Peso (MXN)',
    },
  },
  USD: {
    code: 'USD',
    symbol: '$',
    rateFromUSD: 1.0,
    formatLocale: 'en-US',
    name: {
      'es-MX': 'Dólar Estadounidense (USD)',
      'es-ES': 'Dólar Estadounidense (USD)',
      'en-US_UK': 'US Dollar (USD)',
    },
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    rateFromUSD: 0.92,
    formatLocale: 'es-ES',
    name: {
      'es-MX': 'Euro (EUR)',
      'es-ES': 'Euro (EUR)',
      'en-US_UK': 'Euro (EUR)',
    },
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    rateFromUSD: 0.79,
    formatLocale: 'en-GB',
    name: {
      'es-MX': 'Libra Esterlina (GBP)',
      'es-ES': 'Libra Esterlina (GBP)',
      'en-US_UK': 'British Pound (GBP)',
    },
  },
  ARS: {
    code: 'ARS',
    symbol: '$',
    rateFromUSD: 1280.0,
    formatLocale: 'es-AR',
    name: {
      'es-MX': 'Peso Argentino (ARS)',
      'es-ES': 'Peso Argentino (ARS)',
      'en-US_UK': 'Argentine Peso (ARS)',
    },
  },
  JPY: {
    code: 'JPY',
    symbol: '¥',
    rateFromUSD: 154.5,
    formatLocale: 'ja-JP',
    name: {
      'es-MX': 'Yen Japonés (JPY)',
      'es-ES': 'Yen Japonés (JPY)',
      'en-US_UK': 'Japanese Yen (JPY)',
    },
  },
  CAD: {
    code: 'CAD',
    symbol: 'CA$',
    rateFromUSD: 1.38,
    formatLocale: 'en-CA',
    name: {
      'es-MX': 'Dólar Canadiense (CAD)',
      'es-ES': 'Dólar Canadiense (CAD)',
      'en-US_UK': 'Canadian Dollar (CAD)',
    },
  },
  BRL: {
    code: 'BRL',
    symbol: 'R$',
    rateFromUSD: 5.65,
    formatLocale: 'pt-BR',
    name: {
      'es-MX': 'Real Brasileño (BRL)',
      'es-ES': 'Real Brasileño (BRL)',
      'en-US_UK': 'Brazilian Real (BRL)',
    },
  },
};

export function convertUSD(amountUSD: number, targetCurrency: CurrencyCode): number {
  const config = CURRENCIES[targetCurrency] || CURRENCIES.USD;
  return amountUSD * config.rateFromUSD;
}

export function formatPrice(
  amountUSD: number,
  targetCurrency: CurrencyCode,
  language: Language = 'es-MX'
): string {
  const config = CURRENCIES[targetCurrency] || CURRENCIES.MXN;
  const converted = amountUSD * config.rateFromUSD;

  // Choose rounding according to currency
  const maximumFractionDigits = targetCurrency === 'JPY' || targetCurrency === 'ARS' ? 0 : 0;

  try {
    return new Intl.NumberFormat(config.formatLocale, {
      style: 'currency',
      currency: config.code,
      maximumFractionDigits,
    }).format(converted);
  } catch {
    return `${config.symbol} ${converted.toLocaleString(undefined, { maximumFractionDigits: 0 })} ${config.code}`;
  }
}
