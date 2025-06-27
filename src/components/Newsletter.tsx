import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-[#2D9B8A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Merci pour votre inscription !
            </h2>
            <p className="text-[#A8E6CF] text-lg">
              Vous recevrez bientôt nos dernières actualités et informations exclusives sur la filière cotonnière africaine.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#2D9B8A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <Mail className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Restez Informé
          </h2>
          <p className="text-[#A8E6CF] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Recevez les dernières actualités, analyses de marché et opportunités de la filière cotonnière africaine directement dans votre boîte mail.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="w-full px-6 py-4 rounded-lg border-0 focus:ring-4 focus:ring-white/20 focus:outline-none text-[#343A40] placeholder-gray-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-4 bg-[#28A745] text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  S'abonner
                </>
              )}
            </button>
          </div>
        </form>

        <p className="text-[#A8E6CF] text-sm mt-4 opacity-80">
          Nous respectons votre vie privée. Désabonnement possible à tout moment.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Newsletter Hebdomadaire</h3>
            <p className="text-[#A8E6CF] text-sm">Actualités et analyses chaque semaine</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Contenu Exclusif</h3>
            <p className="text-[#A8E6CF] text-sm">Rapports et études réservés aux abonnés</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Send className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Invitations Prioritaires</h3>
            <p className="text-[#A8E6CF] text-sm">Accès privilégié aux événements ACA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;