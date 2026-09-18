import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ArticlePage } from './components/ArticlePage';
import { QuoteModal } from './components/QuoteModal';
import { Language, CurrencyCode, DestinationId } from './types';
import { DESTINATION_ARTICLES } from './data/articles';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('es-MX');
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyCode>('MXN');
  const [activeDestinationId, setActiveDestinationId] = useState<DestinationId | null>(null);
  
  // Quote modal state
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteDestination, setQuoteDestination] = useState<string | undefined>(undefined);
  const [quotePackage, setQuotePackage] = useState<string | undefined>(undefined);

  // Sync with URL hash on load & hashchange (e.g. #argentina, #japan)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (!hash) {
        setActiveDestinationId(null);
        return;
      }
      const matched = DESTINATION_ARTICLES.find(
        (art) => art.id.toLowerCase() === hash || art.slug.toLowerCase() === hash
      );
      if (matched) {
        setActiveDestinationId(matched.id);
      } else {
        setActiveDestinationId(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectDestination = (id: DestinationId | null) => {
    setActiveDestinationId(id);
    if (id) {
      window.location.hash = id;
    } else {
      window.history.pushState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (destinationName?: string, packageName?: string) => {
    setQuoteDestination(destinationName);
    setQuotePackage(packageName);
    setIsQuoteModalOpen(true);
  };

  // Find active article if one is selected
  const activeArticle = activeDestinationId
    ? DESTINATION_ARTICLES.find((art) => art.id === activeDestinationId)
    : null;

  // Update document title dynamically
  useEffect(() => {
    if (activeArticle) {
      document.title = `${activeArticle.countryName[currentLanguage]} | Sunny Travels México`;
    } else {
      document.title = currentLanguage === 'en-US_UK' 
        ? 'Sunny Travels | Mexico-Based Travel Agency'
        : 'Sunny Travels | Agencia de Viajes México';
    }
  }, [activeArticle, currentLanguage]);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 flex flex-col selection:bg-amber-500 selection:text-stone-950">
      
      {/* Header with Currency & Dynamic Language Switcher in upper right */}
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={(lang) => setCurrentLanguage(lang)}
        currentCurrency={currentCurrency}
        onCurrencyChange={(curr) => setCurrentCurrency(curr)}
        activeDestinationId={activeDestinationId}
        onSelectDestination={handleSelectDestination}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main View: Either Article Page (for any of the 7 pages) or Home Overview */}
      <main className="grow">
        {activeArticle ? (
          <ArticlePage
            article={activeArticle}
            currentLanguage={currentLanguage}
            currentCurrency={currentCurrency}
            onSelectDestination={handleSelectDestination}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        ) : (
          <HomePage
            currentLanguage={currentLanguage}
            currentCurrency={currentCurrency}
            onSelectDestination={handleSelectDestination}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}
      </main>

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultDestination={quoteDestination}
        defaultPackage={quotePackage}
        currentLanguage={currentLanguage}
        currentCurrency={currentCurrency}
      />

      {/* Footer */}
      <Footer
        currentLanguage={currentLanguage}
        currentCurrency={currentCurrency}
        onSelectDestination={handleSelectDestination}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

    </div>
  );
}
