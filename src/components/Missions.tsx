import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

const Missions = () => {
  const missions = [
    {
      icon: Target,
      title: 'Promotion de la Filière Coton',
      description: 'Développer et promouvoir l\'excellence de la filière cotonnière africaine à travers des initiatives stratégiques et des partenariats durables.',
      color: '#A8E6CF'
    },
    {
      icon: Users,
      title: 'Coopération entre Acteurs',
      description: 'Faciliter la collaboration entre producteurs, transformateurs, négociants et institutions pour renforcer l\'écosystème cotonnier.',
      color: '#A8E6CF'
    },
    {
      icon: TrendingUp,
      title: 'Valorisation des Productions',
      description: 'Accompagner la montée en gamme et l\'amélioration de la qualité des productions cotonnières africaines sur les marchés internationaux.',
      color: '#A8E6CF'
    }
  ];

  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F6B5C] mb-4">
            Nos Missions
          </h2>
          <p className="text-lg text-[#6C757D] max-w-2xl mx-auto">
            L'ACA s'engage à transformer et développer la filière cotonnière africaine à travers trois axes stratégiques
          </p>
        </div>

        {/* Missions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => {
            const IconComponent = mission.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border-l-4 border-[#2D9B8A]"
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className="mb-6 inline-flex items-center justify-center">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: mission.color }}
                    >
                      <IconComponent className="w-10 h-10 text-[#1F6B5C]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1F6B5C] mb-4 group-hover:text-[#2D9B8A] transition-colors">
                    {mission.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6C757D] leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#2D9B8A] to-[#A8E6CF] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Rejoignez Notre Mission
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Participez au développement de l'excellence cotonnière africaine
            </p>
            <button className="bg-[#28A745] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
              Devenir Partenaire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missions;