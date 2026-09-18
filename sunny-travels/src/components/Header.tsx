import React, { useState, useRef, useEffect } from 'react';
import { 
  Globe, 
  Coins, 
  ChevronDown, 
  Compass, 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Sparkles,
  Plane
} from 'lucide-react';
import { Language, CurrencyCode, DestinationId } from '../types';
import { CURRENCIES } from '../data/currencies';
import { LANGUAGE_OPTIONS, UI_TRANSLATIONS } from '../data/translations';
import { DESTINATION_ARTICLES } from '../data/articles';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  currentCurrency: CurrencyCode;
  onCurrencyChange: (curr: CurrencyCode) => void;
  activeDestinationId: DestinationId | null;
  onSelectDestination: (id: DestinationId | null) => void;
  onOpenQuoteModal: (destinationName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  currentCurrency,
  onCurrencyChange,
  activeDestinationId,
  onSelectDestination,
  onOpenQuoteModal,
}) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);
  const destinationsRef = useRef<HTMLDivElement>(null);

  const t = UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS['es-MX'];
  const isEnglish = currentLanguage === 'en-US_UK';

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
      if (currencyRef.current && !currencyRef.current.contains(event.target as Node)) {
        setIsCurrencyOpen(false);
      }
      if (destinationsRef.current && !destinationsRef.current.contains(event.target as Node)) {
        setIsDestinationsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Determine current language label for the button
  const currentLangOption = LANGUAGE_OPTIONS.find((opt) => opt.code === currentLanguage) || LANGUAGE_OPTIONS[0];
  const currentLangLabel = currentLangOption.label[currentLanguage];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-100/70 shadow-xs">
      {/* Top Banner with Mexico HQ & WhatsApp */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-orange-700 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-200" />
              <span>{currentLanguage === 'en-US_UK' ? 'Mexico City • Roma Norte HQ (RNT 0409015842)' : 'Ciudad de México • Colonia Roma Norte (RNT 0409015842)'}</span>
            </span>
            <span className="hidden md:inline text-amber-200/60">•</span>
            <span className="hidden md:inline text-amber-100">
              {currentLanguage === 'en-US_UK' 
                ? 'Departures from MEX, GDL, MTY & CUN' 
                : 'Salidas desde CDMX, Guadalajara, Monterrey y Cancún'}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="tel:+525541698200" 
              className="flex items-center gap-1 text-amber-100 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">+52 (55) 4169-8200</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold px-3 py-1 rounded-full text-xs transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-stone-900" />
              <span>{currentLanguage === 'en-US_UK' ? 'Order Custom Itinerary' : 'Solicitar Itinerario Personalizado'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => {
              onSelectDestination(null);
              setIsMobileMenuOpen(false);
            }} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Plane className="w-6 h-6 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-bold font-serif tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
                  Sunny Travels
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200/60 uppercase tracking-wider">
                  México
                </span>
              </div>
              <p className="text-[11px] font-medium text-stone-500 -mt-0.5">
                {t.brandTagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => onSelectDestination(null)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeDestinationId === null
                  ? 'text-amber-700 bg-amber-50/80 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              {t.navHome}
            </button>

            {/* 7 Destinations Menu Dropdown */}
            <div className="relative" ref={destinationsRef}>
              <button
                onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDestinationId !== null
                    ? 'text-amber-700 bg-amber-50/80 font-semibold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                <Compass className="w-4 h-4 text-amber-600" />
                <span>{t.navDestinations} (7)</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDestinationsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDestinationsOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-stone-200/80 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-semibold tracking-wider text-stone-400 uppercase px-3 py-1.5 border-b border-stone-100">
                    {currentLanguage === 'en-US_UK' ? '7 Travel Articles' : '7 Artículos y Guías'}
                  </div>
                  <div className="py-1">
                    {DESTINATION_ARTICLES.map((dest) => (
                      <button
                        key={dest.id}
                        onClick={() => {
                          onSelectDestination(dest.id);
                          setIsDestinationsOpen(false);
                        }}
                        className={`w-full text-left flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                          activeDestinationId === dest.id
                            ? 'bg-amber-50 text-amber-800 font-semibold'
                            : 'text-stone-700 hover:bg-stone-50 hover:text-amber-700'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                          <span>{dest.countryName[currentLanguage]}</span>
                        </span>
                        <span className="text-[11px] text-stone-400 font-mono">
                          {dest.readTimeMin} {t.readTime}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                const element = document.getElementById('why-sunny-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onSelectDestination(null);
                  setTimeout(() => {
                    document.getElementById('why-sunny-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors"
            >
              {t.navAbout}
            </button>

            <button
              onClick={() => onOpenQuoteModal()}
              className="ml-2 flex items-center gap-1.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-xs shadow-amber-600/20 transition-all hover:scale-[1.02]"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>{t.navContact}</span>
            </button>
          </nav>

          {/* Upper Right Corner Controls: Currency Switcher & Language Switcher */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Currency Switcher */}
            <div className="relative" ref={currencyRef}>
              <button
                id="currency-switcher-btn"
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="flex items-center gap-1.5 bg-stone-50 hover:bg-stone-100/80 border border-stone-200 text-stone-800 text-xs sm:text-sm font-semibold px-2.5 py-1.5 rounded-lg transition-colors focus:outline-hidden focus:ring-2 focus:ring-amber-500/30"
                title={t.currencySelectorTitle}
              >
                <Coins className="w-3.5 h-3.5 text-amber-600" />
                <span>{CURRENCIES[currentCurrency].symbol}</span>
                <span className="font-mono">{currentCurrency}</span>
                <ChevronDown className={`w-3 h-3 text-stone-400 transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCurrencyOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-stone-200/80 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-semibold tracking-wider text-stone-400 uppercase px-3 py-1.5 border-b border-stone-100">
                    {t.currencySelectorTitle}
                  </div>
                  <div className="max-h-64 overflow-y-auto py-1 space-y-0.5">
                    {Object.values(CURRENCIES).map((curr) => (
                      <button
                        key={curr.code}
                        onClick={() => {
                          onCurrencyChange(curr.code);
                          setIsCurrencyOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                          currentCurrency === curr.code
                            ? 'bg-amber-50 text-amber-800 font-bold'
                            : 'text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-6 font-mono font-bold text-amber-700">{curr.symbol}</span>
                          <span>{curr.name[currentLanguage]}</span>
                        </span>
                        {currentCurrency === curr.code && (
                          <span className="text-amber-600 text-xs">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Language Switcher in Upper Right Corner */}
            <div className="relative" ref={langRef}>
              <button
                id="language-switcher-btn"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100/70 border border-amber-200 text-amber-900 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors focus:outline-hidden focus:ring-2 focus:ring-amber-500/40"
                title={t.languageSelectorTitle}
              >
                <Globe className="w-3.5 h-3.5 text-amber-600" />
                <span className="hidden md:inline font-medium text-amber-950">
                  {currentLangLabel}
                </span>
                <span className="md:hidden font-medium">
                  {currentLangOption.flag}
                </span>
                <ChevronDown className={`w-3 h-3 text-amber-700 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Switcher Menu: When English is selected, options change to English */}
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-amber-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between px-3 py-1.5 border-b border-stone-100">
                    <span className="text-[11px] font-semibold tracking-wider text-stone-400 uppercase">
                      {isEnglish ? 'Select Language' : 'Selecciona Idioma'}
                    </span>
                    <span className="text-[10px] text-amber-600 font-medium">
                      {isEnglish ? 'Languages update dynamically' : 'Traducción adaptada'}
                    </span>
                  </div>

                  <div className="py-1 space-y-1">
                    {LANGUAGE_OPTIONS.map((opt) => {
                      const isSelected = currentLanguage === opt.code;
                      // CRUCIAL REQUIREMENT: When english is selected, the languages in the switcher change!
                      const displayLabel = opt.label[currentLanguage];

                      return (
                        <button
                          key={opt.code}
                          id={`lang-option-${opt.code}`}
                          onClick={() => {
                            onLanguageChange(opt.code);
                            setIsLangOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs sm:text-sm transition-colors text-left ${
                            isSelected
                              ? 'bg-amber-500/10 text-amber-900 font-bold border border-amber-300/60'
                              : 'text-stone-700 hover:bg-stone-50 hover:text-amber-800'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-base">{opt.flag}</span>
                            <div>
                              <div className="leading-tight">{displayLabel}</div>
                              <div className="text-[10px] text-stone-400 font-normal">
                                {opt.code === 'es-MX' && (isEnglish ? 'Mexican Spanish (Default)' : 'Español de México (Predeterminado)')}
                                {opt.code === 'es-ES' && (isEnglish ? 'European Spanish (Castilian)' : 'Español de España (Castellano)')}
                                {opt.code === 'en-US_UK' && (isEnglish ? 'English for International Travelers' : 'Inglés para viajeros internacionales')}
                              </div>
                            </div>
                          </div>
                          {isSelected && (
                            <span className="text-amber-700 font-bold">●</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-3">
          <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider px-2">
            {t.navDestinations}
          </div>
          <div className="grid grid-cols-1 gap-1">
            <button
              onClick={() => {
                onSelectDestination(null);
                setIsMobileMenuOpen(false);
              }}
              className={`text-left px-3 py-2 rounded-lg text-sm ${
                activeDestinationId === null ? 'bg-amber-50 font-bold text-amber-800' : 'text-stone-700'
              }`}
            >
              {t.navHome}
            </button>
            {DESTINATION_ARTICLES.map((dest) => (
              <button
                key={dest.id}
                onClick={() => {
                  onSelectDestination(dest.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between ${
                  activeDestinationId === dest.id ? 'bg-amber-50 font-bold text-amber-800' : 'text-stone-700'
                }`}
              >
                <span>{dest.countryName[currentLanguage]}</span>
                <span className="text-xs text-stone-400">{dest.readTimeMin} min</span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-100 flex gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-amber-600 text-white font-medium py-2.5 rounded-xl text-sm"
            >
              {t.navContact}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
