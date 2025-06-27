import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#343A40] text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-[#2D9B8A] hover:bg-[#1F6B5C] text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-white rounded-lg p-2 mr-3">
                <div className="w-10 h-6 bg-[#2D9B8A] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">ACA</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">ACA</h3>
                <p className="text-[#A8E6CF] text-sm">Excellence Cotonnière</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              L'Association Cotonnière Africaine fédère les acteurs de la filière coton pour promouvoir l'excellence et le développement durable du secteur en Afrique.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#2D9B8A] hover:text-[#A8E6CF] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#2D9B8A] hover:text-[#A8E6CF] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#2D9B8A] hover:text-[#A8E6CF] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#2D9B8A] hover:text-[#A8E6CF] transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              {[
                'Accueil',
                'À Propos',
                'Nos Membres',
                'Actualités',
                'Publications',
                'Événements',
                'Contact'
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#A8E6CF] transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#2D9B8A] rounded-full mr-3 group-hover:bg-[#A8E6CF] transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#2D9B8A] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123 Avenue de l'Indépendance<br />
                    Abidjan, Côte d'Ivoire<br />
                    BP 1234
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#2D9B8A] mr-3" />
                <p className="text-gray-300">+225 20 21 22 23</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#2D9B8A] mr-3" />
                <p className="text-gray-300">contact@aca-coton.org</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {[
                'Accompagnement technique',
                'Formation professionnelle',
                'Études de marché',
                'Certification qualité',
                'Mise en réseau',
                'Veille technologique'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#A8E6CF] transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#2D9B8A] rounded-full mr-3 group-hover:bg-[#A8E6CF] transition-colors"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Restez connecté avec l'ACA</h3>
            <p className="text-gray-300 mb-6">
              Recevez nos dernières actualités et opportunités
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D9B8A] focus:border-transparent"
              />
              <button className="px-6 py-3 bg-[#28A745] text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#1F6B5C] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Association Cotonnière Africaine. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-[#A8E6CF] text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-300 hover:text-[#A8E6CF] text-sm transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-300 hover:text-[#A8E6CF] text-sm transition-colors">
                Plan du site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;