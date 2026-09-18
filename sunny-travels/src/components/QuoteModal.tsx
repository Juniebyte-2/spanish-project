import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle, 
  MapPin, 
  Plane, 
  Calendar, 
  Users, 
  Coins, 
  MessageSquare
} from 'lucide-react';
import { Language, CurrencyCode, DestinationId } from '../types';
import { CURRENCIES, formatPrice } from '../data/currencies';
import { UI_TRANSLATIONS } from '../data/translations';
import { DESTINATION_ARTICLES } from '../data/articles';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDestination?: string;
  defaultPackage?: string;
  currentLanguage: Language;
  currentCurrency: CurrencyCode;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultDestination,
  defaultPackage,
  currentLanguage,
  currentCurrency,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState(defaultDestination || 'Argentina');
  const [departureCity, setDepartureCity] = useState('Ciudad de México (AICM MEX)');
  const [travelers, setTravelers] = useState('2');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState(defaultPackage ? `Interés en el paquete: ${defaultPackage}` : '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultDestination) {
      setDestination(defaultDestination);
    }
    if (defaultPackage) {
      setNotes(`Interés en el paquete: ${defaultPackage}`);
    }
  }, [defaultDestination, defaultPackage]);

  if (!isOpen) return null;

  const t = UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS['es-MX'];
  const currencySymbol = CURRENCIES[currentCurrency].symbol;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds if needed
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-orange-700 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-1">
            <Plane className="w-3.5 h-3.5" />
            <span>{currentLanguage === 'en-US_UK' ? 'Sunny Travels Mexico • Personalized Consultation' : 'Sunny Travels México • Asesoría Personalizada'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
            {t.quoteModalTitle}
          </h3>
          <p className="text-xs text-amber-100 mt-1">
            {t.quoteModalSubtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto grow">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-stone-900">
                {currentLanguage === 'en-US_UK' ? 'Quote Request Sent!' : '¡Solicitud Enviada con Éxito!'}
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                {t.quoteSuccess}
              </p>
              <div className="bg-stone-50 rounded-2xl p-4 text-xs text-stone-500 border border-stone-200 max-w-md mx-auto text-left space-y-1">
                <div><strong>{currentLanguage === 'en-US_UK' ? 'Destination:' : 'Destino:'}</strong> {destination}</div>
                <div><strong>{currentLanguage === 'en-US_UK' ? 'Departure:' : 'Salida:'}</strong> {departureCity}</div>
                <div><strong>{currentLanguage === 'en-US_UK' ? 'Quoted Currency:' : 'Moneda cotizada:'}</strong> {currentCurrency} ({currencySymbol})</div>
                <div><strong>{currentLanguage === 'en-US_UK' ? 'Travelers:' : 'Viajeros:'}</strong> {travelers}</div>
              </div>
              <button
                onClick={onClose}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors"
              >
                {t.closeBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={currentLanguage === 'en-US_UK' ? 'e.g., Sophia Hernandez' : 'Ej. Sofía Hernández'}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t.emailAddress} *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={currentLanguage === 'en-US_UK' ? 'sophia@example.com' : 'sofia@ejemplo.com'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t.whatsappNumber} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+52 55 1234 5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {currentLanguage === 'en-US_UK' ? 'Destination' : 'Destino'}
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2.5 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
                  >
                    {DESTINATION_ARTICLES.map((art) => (
                      <option key={art.id} value={art.countryName[currentLanguage]}>
                        {art.countryName[currentLanguage]}
                      </option>
                    ))}
                    <option value="Combinado">{currentLanguage === 'en-US_UK' ? 'Multiple Destinations' : 'Varios países / Combinado'}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Departure City */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t.departureCity}
                  </label>
                  <select
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2.5 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
                  >
                    <option value="Ciudad de México (AICM MEX)">{currentLanguage === 'en-US_UK' ? 'Mexico City (MEX / NLU)' : 'Ciudad de México (AICM / Santa Lucía)'}</option>
                    <option value="Guadalajara (GDL)">Guadalajara (GDL)</option>
                    <option value="Monterrey (MTY)">Monterrey (MTY)</option>
                    <option value="Cancún (CUN)">{currentLanguage === 'en-US_UK' ? 'Cancun (CUN)' : 'Cancún (CUN)'}</option>
                    <option value="Tijuana (TIJ)">Tijuana (TIJ)</option>
                    <option value="Salida Internacional / EE.UU. / Europa">{currentLanguage === 'en-US_UK' ? 'International Departure (USA, UK, Europe, etc.)' : 'Salida Internacional (EE.UU., España, etc.)'}</option>
                  </select>
                </div>

                {/* Travelers Count */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t.travelersCount}
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2.5 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
                  >
                    <option value="1">{currentLanguage === 'en-US_UK' ? '1 traveler' : '1 viajero'}</option>
                    <option value="2">{currentLanguage === 'en-US_UK' ? '2 travelers' : '2 viajeros'}</option>
                    <option value="3-4">{currentLanguage === 'en-US_UK' ? '3 to 4 people' : '3 a 4 personas'}</option>
                    <option value="5+">{currentLanguage === 'en-US_UK' ? '5+ (Group)' : '5 o más (Grupo)'}</option>
                  </select>
                </div>
              </div>

              {/* Travel Date */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {t.preferredDate}
                </label>
                <input
                  type="text"
                  placeholder={currentLanguage === 'en-US_UK' ? 'e.g., November 2026 / Holiday season / Spring' : 'Ej. Noviembre 2026 / Semana Santa / Fin de año'}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {t.specialRequests}
                </label>
                <textarea
                  rows={3}
                  placeholder={currentLanguage === 'en-US_UK' ? 'Tell us if you are traveling for an anniversary, seeking boutique hotels, hiking, or cultural tours...' : 'Cuéntanos si viajas por aniversario, si buscas hoteles boutique, senderismo o compras...'}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Currency Notice */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200/70 text-amber-900 text-xs">
                <Coins className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  {currentLanguage === 'en-US_UK' 
                    ? `Your quote will be priced in ${currentCurrency} (${currencySymbol}) with flexible payment terms.`
                    : `Tu cotización se emitirá en ${currentCurrency} (${currencySymbol}) con opciones de pago a Meses Sin Intereses.`}
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3.5 rounded-xl text-sm shadow-md transition-transform hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t.sendQuoteBtn}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
