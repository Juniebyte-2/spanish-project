import React, { useState } from 'react';
import { 
  DestinationArticle, 
  Language, 
  CurrencyCode, 
  DestinationId 
} from '../types';
import { formatPrice } from '../data/currencies';
import { UI_TRANSLATIONS } from '../data/translations';
import { DESTINATION_ARTICLES } from '../data/articles';
import { 
  Clock, 
  Calendar, 
  MapPin, 
  Plane, 
  ShieldCheck, 
  Coins, 
  Sparkles, 
  CheckCircle2, 
  Share2, 
  ExternalLink,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Compass,
  FileText,
  Heart,
  Quote
} from 'lucide-react';

interface ArticlePageProps {
  article: DestinationArticle;
  currentLanguage: Language;
  currentCurrency: CurrencyCode;
  onSelectDestination: (id: DestinationId | null) => void;
  onOpenQuoteModal: (destinationName?: string, packageName?: string) => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({
  article,
  currentLanguage,
  currentCurrency,
  onSelectDestination,
  onOpenQuoteModal,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedItineraryDay, setSelectedItineraryDay] = useState(0);

  const t = UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS['es-MX'];
  const currentIndex = DESTINATION_ARTICLES.findIndex((d) => d.id === article.id);
  const prevArticle = currentIndex > 0 ? DESTINATION_ARTICLES[currentIndex - 1] : DESTINATION_ARTICLES[DESTINATION_ARTICLES.length - 1];
  const nextArticle = currentIndex < DESTINATION_ARTICLES.length - 1 ? DESTINATION_ARTICLES[currentIndex + 1] : DESTINATION_ARTICLES[0];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const isArgentina = article.id === 'argentina';

  return (
    <article className="min-h-screen bg-stone-50/50 pb-20">
      
      {/* Breadcrumb & Navigation Bar */}
      <div className="bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => onSelectDestination(null)}
              className="hover:text-amber-700 transition-colors font-medium flex items-center gap-1"
            >
              <span>Sunny Travels</span>
            </button>
            <ChevronRight className="w-3 h-3 text-stone-400" />
            <span className="text-stone-400">{t.navArticles}</span>
            <ChevronRight className="w-3 h-3 text-stone-400" />
            <span className="font-semibold text-stone-800">{article.countryName[currentLanguage]}</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleShare}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              <Share2 className="w-3 h-3 text-stone-500" />
              <span>{copiedLink ? (currentLanguage === 'en-US_UK' ? 'Copied!' : '¡Copiado!') : (currentLanguage === 'en-US_UK' ? 'Share' : 'Compartir')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="relative bg-stone-900 text-white overflow-hidden">
        {/* Background Image with warm gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={article.heroImage}
            alt={article.countryName[currentLanguage]}
            className="w-full h-full object-cover opacity-35 filter brightness-95"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
          {/* Badge & Country Name */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500 text-stone-950 shadow-xs">
              {article.countryName[currentLanguage]}
            </span>
            <span className="flex items-center gap-1 text-xs text-stone-300 font-mono">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{article.readTimeMin} {t.readTime}</span>
            </span>
            <span className="text-stone-500">•</span>
            <span className="flex items-center gap-1 text-xs text-stone-300">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>{article.publishedDate}</span>
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white leading-tight mb-5">
            {article.title[currentLanguage]}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-stone-200 font-light leading-relaxed max-w-3xl mb-8">
            {article.subtitle[currentLanguage]}
          </p>

          {/* Author Card & Mexican Agency Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-stone-800/80">
            <div className="flex items-center space-x-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-500"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{article.author.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Sunny Travels
                  </span>
                </div>
                <p className="text-xs text-stone-400">
                  {article.author.role[currentLanguage]}
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenQuoteModal(article.countryName[currentLanguage])}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-stone-950 font-bold px-5 py-2.5 rounded-xl shadow-md transition-all hover:scale-105 text-sm"
            >
              <Sparkles className="w-4 h-4 text-stone-900" />
              <span>{t.consultExpert}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid with Live Currency Conversion */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200/90 p-5 sm:p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 divide-y md:divide-y-0 md:divide-x divide-stone-100">
          
          <div className="pt-2 md:pt-0 px-2">
            <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Capital</span>
            </div>
            <div className="text-sm font-bold text-stone-900">
              {article.quickStats.capital[currentLanguage]}
            </div>
          </div>

          <div className="pt-2 md:pt-0 px-2">
            <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
              <Plane className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.flightTimeLabel}</span>
            </div>
            <div className="text-sm font-bold text-stone-900">
              {article.quickStats.flightTimeFromCDMX[currentLanguage]}
            </div>
          </div>

          <div className="pt-2 md:pt-0 px-2">
            <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.bestSeasonLabel}</span>
            </div>
            <div className="text-sm font-bold text-stone-900">
              {article.quickStats.bestSeason[currentLanguage]}
            </div>
          </div>

          <div className="pt-2 md:pt-0 px-2">
            <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.visaLabel}</span>
            </div>
            <div className="text-xs font-bold text-stone-900 leading-snug">
              {article.quickStats.visaForMexicans[currentLanguage]}
            </div>
          </div>

          <div className="pt-2 md:pt-0 px-2">
            <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
              <Compass className="w-3.5 h-3.5 text-amber-600" />
              <span>{currentLanguage === 'en-US_UK' ? 'Local Language' : 'Idioma local'}</span>
            </div>
            <div className="text-xs font-bold text-stone-900">
              {article.quickStats.languageSpoken[currentLanguage]}
            </div>
          </div>

          {/* Daily Budget in Target Currency */}
          <div className="pt-2 md:pt-0 px-2 bg-amber-50/50 rounded-xl p-2 border border-amber-200/50">
            <div className="flex items-center gap-1.5 text-[11px] text-amber-900 font-semibold mb-0.5">
              <Coins className="w-3.5 h-3.5 text-amber-700" />
              <span>{t.budgetLabel}</span>
            </div>
            <div className="text-base font-extrabold text-amber-900 font-mono">
              {formatPrice(article.quickStats.averageDailyBudgetUSD, currentCurrency, currentLanguage)}
            </div>
            <div className="text-[10px] text-amber-700/80">
              {t.perPerson} / {currentLanguage === 'en-US_UK' ? 'day' : 'día'}
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        
        {/* Article Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 mb-4 flex items-center gap-2">
            <span className="w-2.5 h-6 rounded-full bg-amber-500 inline-block"></span>
            <span>{currentLanguage === 'en-US_UK' ? 'Destination Overview' : 'Visión General del Destino'}</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            {article.overview[currentLanguage]}
          </p>
        </section>

        {/* Curated Reasons & Highlights Grid */}
        {article.curatedReasons && article.curatedReasons.length > 0 && (
          <section>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
                {isArgentina 
                  ? (currentLanguage === 'en-US_UK' 
                      ? '9 Key Highlights in Argentina' 
                      : '9 Experiencias Maestras en Argentina')
                  : (currentLanguage === 'en-US_UK' 
                      ? `Highlights & Experiences in ${article.countryName[currentLanguage]}`
                      : `Experiencias Imprescindibles en ${article.countryName[currentLanguage]}`)}
              </h2>
              <p className="text-sm text-stone-600 mt-2">
                {currentLanguage === 'en-US_UK'
                  ? 'Curated by Sunny Travels destination specialists'
                  : 'Selección exclusiva de los asesores de Sunny Travels México'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {article.curatedReasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm font-mono">
                        {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-stone-900 mb-2 leading-snug">
                      {reason.title[currentLanguage]}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {reason.description[currentLanguage]}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-amber-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    <span>{currentLanguage === 'en-US_UK' ? 'Included in Sunny Travels routes' : 'Incluido en rutas Sunny Travels'}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Detailed Editorial Sections */}
        <section className="space-y-12">
          {article.sections.map((section) => (
            <div 
              key={section.id} 
              id={section.id}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 border-b border-stone-100 pb-3">
                {section.title[currentLanguage]}
              </h2>

              <p className="text-base text-stone-700 leading-relaxed whitespace-pre-line">
                {section.content[currentLanguage]}
              </p>

              {/* Quote Block if present */}
              {section.quote && (
                <div className="my-6 bg-amber-50/80 border-l-4 border-amber-500 rounded-r-2xl p-5 relative">
                  <Quote className="w-8 h-8 text-amber-300 absolute top-4 right-4 -z-0 opacity-40" />
                  <p className="relative z-10 text-sm sm:text-base italic text-amber-950 font-serif leading-relaxed">
                    "{section.quote.text[currentLanguage]}"
                  </p>
                  <div className="mt-3 text-xs font-bold text-amber-900 flex items-center gap-1.5">
                    <span>— {section.quote.author}</span>
                    {section.quote.source && (
                      <span className="text-amber-700/80 font-normal">({section.quote.source})</span>
                    )}
                  </div>
                </div>
              )}

              {/* Subsections if present */}
              {section.subsections && section.subsections.length > 0 && (
                <div className="grid grid-cols-1 gap-6 pt-4">
                  {section.subsections.map((sub, sIdx) => (
                    <div key={sIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70">
                      <div className="mb-2">
                        <h4 className="text-base font-bold text-stone-900">
                          {sub.subtitle[currentLanguage]}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {sub.text[currentLanguage]}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Photo Gallery Grid */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80">
          <h3 className="text-xl font-bold font-serif text-stone-900 mb-6">
            {currentLanguage === 'en-US_UK' 
              ? `Visual Journey: Landscapes of ${article.countryName[currentLanguage]}`
              : `Galería Fotográfica: Postales de ${article.countryName[currentLanguage]}`}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {article.galleryImages.map((imgUrl, gIdx) => (
              <div key={gIdx} className="group relative overflow-hidden rounded-2xl aspect-4/3 bg-stone-100 shadow-xs">
                <img
                  src={imgUrl}
                  alt={`${article.countryName[currentLanguage]} photo ${gIdx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Suggested Itinerary with Day-by-Day View */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                {currentLanguage === 'en-US_UK' ? 'Curated Travel Route' : 'Ruta Sugerida por Expertos'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
                {t.itineraryTitle}
              </h2>
            </div>
            <div className="text-xs text-stone-500 font-medium">
              {currentLanguage === 'en-US_UK' ? 'Flexible itineraries customizable to your preferences' : 'Itinerarios 100% adaptables a tu ritmo'}
            </div>
          </div>

          {/* Days Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 pb-2 border-b border-stone-100">
            {article.itinerary.map((item, dIdx) => (
              <button
                key={dIdx}
                onClick={() => setSelectedItineraryDay(dIdx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                  selectedItineraryDay === dIdx
                    ? 'bg-amber-500 text-stone-950 shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {item.days}
              </button>
            ))}
          </div>

          {/* Selected Itinerary Card */}
          {article.itinerary[selectedItineraryDay] && (
            <div className="bg-amber-50/40 rounded-2xl p-6 border border-amber-200/60">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-200 text-amber-900">
                  {article.itinerary[selectedItineraryDay].days}
                </span>
                <span className="flex items-center gap-1 text-xs text-stone-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{article.itinerary[selectedItineraryDay].highlightLocation}</span>
                </span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                {article.itinerary[selectedItineraryDay].title[currentLanguage]}
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                {article.itinerary[selectedItineraryDay].description[currentLanguage]}
              </p>
            </div>
          )}
        </section>

        {/* Travel Packages with Real-Time Currency Switcher Conversion */}
        <section className="bg-gradient-to-br from-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-stone-800">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Sunny Travels México
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-1">
              {t.packagesTitle}
            </h2>
            <p className="text-sm text-stone-400 mt-2">
              {t.packagesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {article.packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700/80 flex flex-col justify-between hover:border-amber-500/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {pkg.durationDays} {t.daysTag}
                    </span>
                    {pkg.includesFlightFromMexico && (
                      <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                        <Plane className="w-3 h-3" />
                        <span>{currentLanguage === 'en-US_UK' ? 'Flights Included' : 'Vuelos Redondos'}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {pkg.title[currentLanguage]}
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed mb-4">
                    {pkg.description[currentLanguage]}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mb-6">
                    {pkg.highlights[currentLanguage]?.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-stone-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-stone-700/80 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-stone-400 block">{t.fromPrice}</span>
                    <div className="text-2xl font-black text-amber-400 font-mono">
                      {formatPrice(pkg.basePriceUSD, currentCurrency, currentLanguage)}
                    </div>
                    <span className="text-[10px] text-stone-400">{t.perPerson}</span>
                  </div>

                  <button
                    onClick={() => onOpenQuoteModal(article.countryName[currentLanguage], pkg.title[currentLanguage])}
                    className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-colors"
                  >
                    {t.bookPackage}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Financing / MSI Note for Mexico */}
          <div className="mt-8 bg-stone-800/40 rounded-xl p-4 border border-stone-700 text-xs text-stone-400 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-amber-400" />
              <span>
                {currentLanguage === 'en-US_UK' 
                  ? 'Flexible installment plans available with major Mexican & international credit cards.'
                  : 'Paga a 3, 6, 9 o 12 Meses Sin Intereses con tarjetas BBVA, Banorte, Citibanamex, Santander y AMEX.'}
              </span>
            </div>
            <span className="text-[11px] text-amber-400 font-mono font-medium">
              Sunny Travels Guarantee
            </span>
          </div>
        </section>

        {/* Tips for Mexican and International Travelers */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
                {t.tipsTitle}
              </h2>
              <p className="text-xs text-stone-500">
                {currentLanguage === 'en-US_UK' 
                  ? 'Practical advice for a smooth and memorable voyage'
                  : 'Consejos prácticos de nuestros asesores de viaje en CDMX'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {article.mexicoTravelerTips[currentLanguage]?.map((tip, tIdx) => (
              <div key={tIdx} className="bg-stone-50 rounded-2xl p-4 border border-stone-200/70 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  {tIdx + 1}
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Prev / Next Article Navigation */}
        <nav className="pt-6 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={() => onSelectDestination(prevArticle.id)}
            className="flex items-center gap-2 text-stone-700 hover:text-amber-700 transition-colors text-sm font-semibold group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="text-[10px] text-stone-400 uppercase tracking-wider block">{t.prevArticle}</span>
              <span>{prevArticle.countryName[currentLanguage]}</span>
            </div>
          </button>

          <button
            onClick={() => onSelectDestination(null)}
            className="hidden sm:inline-block px-4 py-2 rounded-xl text-xs font-medium text-stone-600 hover:bg-stone-100 transition-colors"
          >
            {t.viewAllDestinations}
          </button>

          <button
            onClick={() => onSelectDestination(nextArticle.id)}
            className="flex items-center gap-2 text-stone-700 hover:text-amber-700 transition-colors text-sm font-semibold group"
          >
            <div className="text-right">
              <span className="text-[10px] text-stone-400 uppercase tracking-wider block">{t.nextArticle}</span>
              <span>{nextArticle.countryName[currentLanguage]}</span>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </nav>

      </div>
    </article>
  );
};
