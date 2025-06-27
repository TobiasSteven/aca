import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KeyStats from './components/KeyStats';
import LatestNews from './components/LatestNews';
import Missions from './components/Missions';
import UpcomingEvents from './components/UpcomingEvents';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

// Import pages
import Presentation from './pages/Presentation';
import Membres from './pages/Membres';
import Actualites from './pages/Actualites';
import Publications from './pages/Publications';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');

  const renderPage = () => {
    switch (currentPage) {
      case 'presentation':
        return <Presentation />;
      case 'membres':
        return <Membres />;
      case 'actualites':
        return <Actualites />;
      case 'publications':
        return <Publications />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <main>
            <Hero />
            <KeyStats />
            <LatestNews />
            <Missions />
            <UpcomingEvents />
            <Testimonials />
            <Newsletter />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;