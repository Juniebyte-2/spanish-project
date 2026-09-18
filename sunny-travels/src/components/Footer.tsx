import React from 'react';
import { 
  Plane, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  CreditCard 
} from 'lucide-react';
import { Language, CurrencyCode, DestinationId } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { DESTINATION_ARTICLES } from '../data/articles';

interface FooterProps {
  currentLanguage: Language;
  currentCurrency: CurrencyCode;
  onSelectDestination: (id: DestinationId | null) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLanguage,
  currentCurrency,
  onSelectDestination,
  onOpenQuoteModal,
}) => {
  const t = UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS['es-MX'];

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => onSelectDestination(null)}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold shadow-md">
                <Plane className="w-5 h-5 -rotate-45" />
              </div>
              <div>
                <span className="text-2xl font-bold font-serif text-white tracking-tight">
                  Sunny Travels
                </span>
                <span className="ml-2 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase">
                  México
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {t.footerAbout}
            </p>

            <div className="space-y-2 text-xs text-stone-400 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{t.footerOffice}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+52 (55) 4169-8200 / WhatsApp 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>viajes@sunnytravels.mx</span>
              </div>
            </div>
          </div>

          {/* 7 Destinations / Articles Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              {currentLanguage === 'en-US_UK' ? '7 Travel Articles' : '7 Guías Maestras'}
            </h4>
            <ul className="space-y-2 text-xs">
              {DESTINATION_ARTICLES.map((dest) => (
                <li key={dest.id}>
                  <button
                    onClick={() => onSelectDestination(dest.id)}
                    className="text-stone-400 hover:text-amber-400 transition-colors flex items-center justify-between w-full text-left"
                  >
                    <span>{dest.countryName[currentLanguage]}</span>
                    <span className="text-[10px] text-stone-600 font-mono">
                      {dest.readTimeMin}m
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Agency Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              {currentLanguage === 'en-US_UK' ? 'Agency Services' : 'Servicios Sunny'}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onOpenQuoteModal()} className="hover:text-amber-400 transition-colors">
                  {currentLanguage === 'en-US_UK' ? 'Order Custom Itinerary' : 'Solicitar Itinerario Personalizado'}
                </button>
              </li>
              <li>{currentLanguage === 'en-US_UK' ? 'Flexible installment plans (Mexican Banks)' : 'Planes de 3 a 12 MSI (Bancos MX)'}</li>
              <li>{currentLanguage === 'en-US_UK' ? 'International Schengen Travel Insurance' : 'Seguro Médico Internacional Schengen'}</li>
              <li>{currentLanguage === 'en-US_UK' ? 'Direct Flights from Mexico (MEX / CUN)' : 'Vuelos Directos desde AICM / CUN'}</li>
              <li>{currentLanguage === 'en-US_UK' ? 'Private Luxury Tours & Exclusive Stays' : 'Tours Privados y Alojamientos Exclusivos'}</li>
              <li>{currentLanguage === 'en-US_UK' ? 'Bilingual Tour Leaders & Guides' : 'Guías Acreditados en Español e Inglés'}</li>
            </ul>
          </div>

          {/* Verification & Badges */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              {currentLanguage === 'en-US_UK' ? 'Certifications' : 'Garantía Oficial'}
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="bg-stone-900 rounded-xl p-3 border border-stone-800">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>RNT México 0409015842</span>
                </div>
                <p className="text-[11px] text-stone-500">
                  {currentLanguage === 'en-US_UK'
                    ? 'Registered and certified agency by the Mexican Ministry of Tourism (SECTUR).'
                    : 'Agencia registrada y avalada por la Secretaría de Turismo del Gobierno de México.'}
                </p>
              </div>

              <div className="bg-stone-900 rounded-xl p-3 border border-stone-800">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-1">
                  <CreditCard className="w-4 h-4" />
                  <span>{currentLanguage === 'en-US_UK' ? 'Accepted Currencies' : 'Monedas Aceptadas'}</span>
                </div>
                <p className="text-[11px] text-stone-500">
                  {currentLanguage === 'en-US_UK'
                    ? 'Real-time quotes in MXN, USD, EUR, GBP, ARS, JPY, CAD, and BRL.'
                    : 'Cotizaciones en tiempo real en MXN, USD, EUR, GBP, ARS, JPY, CAD y BRL.'}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Language Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <div>
            © {new Date().getFullYear()} Sunny Travels S.A. de C.V. {t.footerRights}
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>
              {currentLanguage === 'en-US_UK'
                ? 'Languages: Spanish (Mexico) • Spanish (Spain) • English (US & UK)'
                : 'Idiomas: Español (México) • Español (España) • English (US & UK)'}
            </span>
            <span>•</span>
            <span className="font-mono">
              {currentLanguage === 'en-US_UK' ? `Active currency: ${currentCurrency}` : `Divisa actual: ${currentCurrency}`}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
