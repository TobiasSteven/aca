import React from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const LatestNews = () => {
  const news = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Production',
      date: '15 Nov 2024',
      title: 'Nouvelle technologie de transformation du coton en Côte d\'Ivoire',
      excerpt: 'L\'ACA accompagne l\'installation d\'équipements modernes pour améliorer la qualité et le rendement de la transformation cotonnière.',
      readTime: '5 min'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Marché',
      date: '12 Nov 2024',
      title: 'Accord commercial historique entre producteurs africains',
      excerpt: 'Signature d\'un partenariat stratégique pour renforcer les échanges commerciaux et stabiliser les prix du coton africain.',
      readTime: '3 min'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Innovation',
      date: '10 Nov 2024',
      title: 'Programme de formation digitale pour les producteurs',
      excerpt: 'Lancement d\'une plateforme e-learning dédiée aux bonnes pratiques agricoles et aux nouvelles technologies.',
      readTime: '4 min'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Production': return 'bg-[#28A745]';
      case 'Marché': return 'bg-[#FD7E14]';
      case 'Innovation': return 'bg-[#A8E6CF]';
      default: return 'bg-[#6C757D]';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F6B5C] mb-4">
            Dernières Actualités
          </h2>
          <p className="text-lg text-[#6C757D] max-w-2xl mx-auto">
            Restez informé des dernières nouvelles et développements de la filière cotonnière africaine
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`${getCategoryColor(article.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {article.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-[#2D9B8A] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {article.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1F6B5C] mb-3 group-hover:text-[#28A745] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-[#6C757D] mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                {/* Meta */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#6C757D] flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    {article.readTime} de lecture
                  </span>
                  <button className="text-[#2D9B8A] font-medium hover:text-[#28A745] transition-colors flex items-center">
                    Lire plus
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="px-8 py-3 border-2 border-[#2D9B8A] text-[#2D9B8A] font-semibold rounded-lg hover:bg-[#2D9B8A] hover:text-white transition-all duration-300 transform hover:scale-105">
            Voir toutes les actualités
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;