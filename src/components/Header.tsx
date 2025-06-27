import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navigation = [
    { name: 'Accueil',  id: 'accueil', active: currentPage === 'accueil' },
    { name: 'À Propos', id: 'presentation', active: currentPage === 'presentation' },
    { name: 'Membres', id: 'membres', active: currentPage === 'membres' },
    { name: 'Actualités', id: 'actualites', active: currentPage === 'actualites' },
    { name: 'Publications', id: 'publications', active: currentPage === 'publications' },
    { name: 'Contact', id: 'contact', active: currentPage === 'contact' }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#2D9B8A] shadow-lg relative z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('accueil')}>
            <div className="bg-white rounded-lg p-2 mr-4">
              <div className="w-12 h-8 bg-[#2D9B8A] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">ACA</span>
              </div>
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold">Association Cotonnière Africaine</h1>
              <p className="text-[#A8E6CF] text-sm">Excellence Cotonnière en Afrique</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div className="bg-[#1F6B5C] rounded-lg px-1 py-1 flex items-center space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    item.active
                      ? 'bg-[#2D9B8A] text-white'
                      : 'text-white hover:bg-[#A8E6CF] hover:text-[#1F6B5C]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Language Selector */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-white hover:text-[#A8E6CF] transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">FR</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FR</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">EN</a>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button className="ml-4 bg-[#28A745] text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors">
              Devenir Membre
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-[#A8E6CF] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1F6B5C] border-t border-[#2D9B8A]">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-[#2D9B8A] text-white'
                    : 'text-white hover:bg-[#A8E6CF] hover:text-[#1F6B5C]'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-[#2D9B8A]">
              <button className="w-full bg-[#28A745] text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors">
                Devenir Membre
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;