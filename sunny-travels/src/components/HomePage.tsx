import React, { useState } from 'react';
import { 
  Language, 
  CurrencyCode, 
  DestinationId 
} from '../types';
import { DESTINATION_ARTICLES } from '../data/articles';
import { formatPrice } from '../data/currencies';
import { UI_TRANSLATIONS } from '../data/translations';
import { 
  Compass, 
  Plane, 
  Calendar, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  Headphones, 
  Sparkles, 
  Search,
  FileText,
  MapPin,
  Coins,
  Star
} from 'lucide-react';

interface HomePageProps {
  currentLanguage: Language;
  currentCurrency: CurrencyCode;
  onSelectDestination: (id: DestinationId) => void;
  onOpenQuoteModal: (destinationName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentLanguage,
  currentCurrency,
  onSelectDestination,
  onOpenQuoteModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const t = UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS['es-MX'];

  const filteredArticles = DESTINATION_ARTICLES.filter((art) => {
    const query = searchQuery.toLowerCase();
    const country = art.countryName[currentLanguage].toLowerCase();
    const title = art.title[currentLanguage].toLowerCase();
    const overview = art.overview[currentLanguage].toLowerCase();
    return country.includes(query) || title.includes(query) || overview.includes(query);
  });

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stone-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80"
            alt="Travel background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{currentLanguage === 'en-US_UK' ? 'Boutique Travel Agency based in Mexico City' : 'Agencia de Viajes Boutique en Ciudad de México'}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight text-white leading-tight mb-6">
              {t.heroTitle}
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-stone-200 leading-relaxed font-light mb-8">
              {t.heroSubtitle}
            </p>

            {/* Search bar & Quick CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative grow max-w-md">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white text-stone-900 placeholder:text-stone-400 text-sm pl-10 pr-4 py-3 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button
                onClick={() => onOpenQuoteModal()}
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105 text-sm flex items-center justify-center gap-2"
              >
                <span>{t.consultExpert}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mexican Travelers Trust Badges */}
            <div className="mt-10 pt-6 border-t border-stone-800 flex flex-wrap items-center gap-6 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>{currentLanguage === 'en-US_UK' ? 'National Tourism Registry (RNT Mexico)' : 'Registro Nacional de Turismo (RNT México)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-amber-400" />
                <span>{currentLanguage === 'en-US_UK' ? 'Up to 12 Installment Payments (MSI)' : 'Hasta 12 Meses Sin Intereses (MSI)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Coins className="w-4 h-4 text-amber-400" />
                <span>{currentLanguage === 'en-US_UK' ? `Rates in ${currentCurrency}` : `Tarifas en ${currentCurrency}`}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured 7 Destination Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
              <Compass className="w-4 h-4 text-amber-600" />
              <span>{currentLanguage === 'en-US_UK' ? 'Exclusive Travel Guides' : 'Colección Editorial 2026'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-stone-900">
              {t.featuredArticlesTitle}
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-2xl">
              {t.featuredArticlesSubtitle}
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-stone-500 font-mono">
            {filteredArticles.length} {currentLanguage === 'en-US_UK' ? 'destinations displayed' : 'destinos disponibles'}
          </div>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => {
            const minPackagePrice = Math.min(...art.packages.map((p) => p.basePriceUSD));

            return (
              <div
                key={art.id}
                className="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image container with badges */}
                  <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                    <img
                      src={art.heroImage}
                      alt={art.countryName[currentLanguage]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-stone-900 shadow-xs">
                        {art.countryName[currentLanguage]}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-stone-900/80 backdrop-blur-sm text-white flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span>{art.readTimeMin} min</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-serif text-stone-900 mb-2 leading-snug group-hover:text-amber-700 transition-colors">
                      {art.title[currentLanguage]}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-3 mb-4 leading-relaxed">
                      {art.subtitle[currentLanguage]}
                    </p>

                    {/* Quick Metadata */}
                    <div className="space-y-1.5 py-3 border-y border-stone-100 text-xs text-stone-500">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-stone-600">
                          <Plane className="w-3.5 h-3.5 text-amber-600" />
                          <span>{t.flightTimeLabel}:</span>
                        </span>
                        <span className="font-semibold text-stone-800 text-right">
                          {art.quickStats.flightTimeFromCDMX[currentLanguage].split('(')[0]}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-stone-600">
                          <Calendar className="w-3.5 h-3.5 text-amber-600" />
                          <span>{t.bestSeasonLabel}:</span>
                        </span>
                        <span className="font-semibold text-stone-800 text-right">
                          {art.quickStats.bestSeason[currentLanguage].split('(')[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Price & CTA */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-medium">
                      {t.fromPrice}
                    </span>
                    <span className="text-xl font-extrabold text-stone-900 font-mono">
                      {formatPrice(minPackagePrice, currentCurrency, currentLanguage)}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectDestination(art.id)}
                    className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-4 py-2.5 rounded-xl text-xs shadow-xs transition-transform hover:scale-105"
                  >
                    <span>{t.readArticleBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Special Feature Section: Curated Argentina Destination Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-amber-50 via-orange-50/60 to-stone-50 rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200/70 text-amber-900 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>{currentLanguage === 'en-US_UK' ? 'Featured Guide • Signature Destination' : 'Artículo Destacado • Guía de Autor'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-stone-900 mb-4">
              {currentLanguage === 'en-US_UK'
                ? 'Argentina: 9 Key Experiences from North to South'
                : 'Argentina: 9 Razones Maestras para Explorar de Norte a Sur'}
            </h2>

            <p className="text-stone-700 text-base leading-relaxed mb-6">
              {currentLanguage === 'en-US_UK'
                ? 'Our signature Argentina guide covers folk peñas in Salta, the sacred Llullaillaco mummies at MAAM museum, high-altitude Torrontés wine tasting in Cafayate, legendary Mount Fitz Roy hiking in El Chaltén, trekking atop Perito Moreno glacier, sailing the Beagle Channel in Ushuaia, and the vibrant cafes and milongas of Buenos Aires.'
                : 'Nuestra guía de Argentina reúne sus vivencias más destacadas: peñas folclóricas en Salta, el museo MAAM de niños incas, el Torrontés de Cafayate, el trekking frente al Fitz Roy, caminar sobre el Perito Moreno, navegar el Canal Beagle y la vibrante escena cultural de Buenos Aires.'}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-amber-200/50">
                <div className="text-xs font-bold text-amber-900">
                  {currentLanguage === 'en-US_UK' ? 'Andean North' : 'Norte Andino'}
                </div>
                <div className="text-[11px] text-stone-600">Peñas, MAAM & Cafayate</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-amber-200/50">
                <div className="text-xs font-bold text-amber-900">
                  {currentLanguage === 'en-US_UK' ? 'Patagonia Wilds' : 'Patagonia Viva'}
                </div>
                <div className="text-[11px] text-stone-600">Fitz Roy & Perito Moreno</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-amber-200/50">
                <div className="text-xs font-bold text-amber-900">
                  {currentLanguage === 'en-US_UK' ? 'Tierra del Fuego' : 'Tierra del Fuego'}
                </div>
                <div className="text-[11px] text-stone-600">
                  {currentLanguage === 'en-US_UK' ? 'Penguins & Beagle' : 'Pingüinos & Beagle'}
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-amber-200/50">
                <div className="text-xs font-bold text-amber-900">Buenos Aires</div>
                <div className="text-[11px] text-stone-600">
                  {currentLanguage === 'en-US_UK' ? 'Tango, Cafes & Asado' : 'Tango, Librerías & Asado'}
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectDestination('argentina')}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all hover:scale-105 text-sm flex items-center gap-2"
            >
              <span>{currentLanguage === 'en-US_UK' ? 'Read full Argentina guide' : 'Leer la guía completa de Argentina'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Travel With Sunny Travels Mexico */}
      <section id="why-sunny-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
            Sunny Travels México
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-stone-900 mt-1">
            {t.whySunnyTravels}
          </h2>
          <p className="text-sm text-stone-600 mt-3">
            {currentLanguage === 'en-US_UK' 
              ? 'Founded in Mexico City with specialized bilingual destination managers for every continent.'
              : 'Somos una agencia con sede en CDMX que combina el trato cálido mexicano con estándares internacionales de excelencia.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              {t.reason1Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.reason1Desc}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              {t.reason2Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.reason2Desc}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              {t.reason3Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.reason3Desc}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              {t.reason4Title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t.reason4Desc}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials from Mexican Travelers */}
      <section className="bg-stone-100/70 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              {currentLanguage === 'en-US_UK' ? 'Traveler Testimonials' : 'Experiencias de Nuestros Viajeros'}
            </h2>
            <p className="text-xs text-stone-500 mt-2">
              {currentLanguage === 'en-US_UK' 
                ? 'Travelers from Mexico and abroad who explored the world with Sunny Travels.'
                : 'Viajeros que vivieron la experiencia de viajar con el respaldo de Sunny Travels México.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-stone-200/80 flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-stone-700 italic leading-relaxed mb-4">
                  {currentLanguage === 'en-US_UK'
                    ? '"Our voyage through Argentina was truly remarkable. Following the recommendation to visit Salta and Cafayate was the highlight; the folk peña and Torrontés wines were unforgettable. The customer service from Mexico City was top-tier."'
                    : '"El viaje a Argentina fue insuperable. Seguimos al pie de la letra la recomendación de ir a Salta y Cafayate; la peña folclórica y los vinos Torrontés fueron lo mejor del viaje. La atención desde CDMX estuvo impecable."'}
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-200 flex items-center justify-center font-bold text-xs text-amber-900">
                  MC
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Mariana & Carlos Ruiz</div>
                  <div className="text-[11px] text-stone-500">
                    {currentLanguage === 'en-US_UK' ? 'Mexico City (15-Day Argentina Route)' : 'Ciudad de México (Ruta Argentina 15 días)'}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xs border border-stone-200/80 flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-stone-700 italic leading-relaxed mb-4">
                  {currentLanguage === 'en-US_UK'
                    ? '"A wonderful family trip to Japan with Sunny Travels. The direct flight and bullet train pass made logistics completely effortless. Staying in a ryokan facing Mount Fuji was magical."'
                    : '"Japón en familia con Sunny Travels. El vuelo directo desde CDMX y el pase de tren bala hicieron todo facilísimo. Dormir en el ryokan frente al Monte Fuji fue mágico. Pagamos a 12 meses sin intereses."'}
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-orange-200 flex items-center justify-center font-bold text-xs text-orange-900">
                  EP
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">
                    {currentLanguage === 'en-US_UK' ? 'Espinosa Padilla Family' : 'Familia Espinosa Padilla'}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {currentLanguage === 'en-US_UK' ? 'Guadalajara, Jalisco (Golden Japan Route)' : 'Guadalajara, Jalisco (Ruta Japón Dorado)'}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xs border border-stone-200/80 flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-stone-700 italic leading-relaxed mb-4">
                  {currentLanguage === 'en-US_UK'
                    ? '"South Korea blew us away. Touring Gyeongbokgung Palace in traditional Hanbok and taking the KTX bullet train to Busan was a 10/10 journey. Excellent advisory for our travel logistics."'
                    : '"Corea del Sur nos sorprendió enormemente. Visitar el palacio real en Hanbok y después tomar el KTX a Busan fue una experiencia de 10. Gran recomendación de Sunny Travels para tramitar la K-ETA."'}
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-stone-200 flex items-center justify-center font-bold text-xs text-stone-900">
                  RA
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Rodrigo Almaraz</div>
                  <div className="text-[11px] text-stone-500">
                    {currentLanguage === 'en-US_UK' ? 'Monterrey, N.L. (Seoul & Jeju Route)' : 'Monterrey, N.L. (Ruta Seúl & Jeju)'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fast Quote CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-stone-900 to-amber-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {currentLanguage === 'en-US_UK' ? 'Bespoke Travel Advisory' : 'Asesoría de Viajes sin Costo'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-1">
              {currentLanguage === 'en-US_UK' 
                ? 'Ready to plan your next international voyage?' 
                : '¿Listo para diseñar tu próximo viaje internacional?'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 max-w-xl">
              {currentLanguage === 'en-US_UK'
                ? 'Receive an itemized itinerary with flights from Mexico City or worldwide, accommodations, and guided excursions.'
                : 'Recibe una cotización personalizada con salidas desde CDMX, Guadalajara, Monterrey o Cancún con vuelos, hospedaje y facilidades de pago.'}
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="shrink-0 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 text-sm"
          >
            {t.consultExpert}
          </button>
        </div>
      </section>

    </div>
  );
};
