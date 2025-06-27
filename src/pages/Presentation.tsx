import React, { useState } from 'react';
import { Eye, Target, Star, Users, Award, Globe, Calendar, Download, X } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const Presentation = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const breadcrumbItems = [
    { label: 'Accueil', href: '#' },
    { label: 'À Propos', href: '#' },
    { label: 'Présentation ACA' }
  ];

  const visionValues = [
    {
      icon: Eye,
      title: 'Vision',
      description: 'Être la référence continentale pour l\'excellence et l\'innovation dans la filière cotonnière africaine.',
      color: '#2D9B8A'
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'Fédérer les acteurs de la filière coton pour promouvoir le développement durable et l\'excellence opérationnelle.',
      color: '#28A745'
    },
    {
      icon: Star,
      title: 'Valeurs',
      description: 'Excellence, Intégrité, Collaboration, Innovation, Durabilité, Transparence',
      color: '#FD7E14'
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Création de l\'ACA',
      description: 'Fondation de l\'Association avec 15 membres fondateurs de 8 pays africains.'
    },
    {
      year: '2013',
      title: 'Premier Forum Continental',
      description: 'Organisation du premier forum international du coton africain à Abidjan.'
    },
    {
      year: '2016',
      title: 'Expansion Régionale',
      description: 'Extension à 20 pays membres et lancement des programmes de formation.'
    },
    {
      year: '2019',
      title: 'Certification Qualité',
      description: 'Mise en place du label ACA Excellence pour la certification des productions.'
    },
    {
      year: '2022',
      title: 'Transformation Digitale',
      description: 'Lancement de la plateforme digitale et des outils d\'accompagnement en ligne.'
    },
    {
      year: '2024',
      title: 'Partenariats Stratégiques',
      description: 'Signature d\'accords majeurs avec les institutions internationales.'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Aminata Traoré',
      position: 'Directrice Générale',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Experte en développement agricole avec plus de 20 ans d\'expérience dans la filière cotonnière africaine. Docteure en agronomie de l\'Université de Montpellier.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 2,
      name: 'Jean-Baptiste Koffi',
      position: 'Directeur Technique',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Ingénieur agronome spécialisé dans l\'innovation textile et les technologies de transformation du coton. 15 ans d\'expérience internationale.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 3,
      name: 'Fatima Ouedraogo',
      position: 'Directrice des Partenariats',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Spécialiste en coopération internationale et développement des partenariats stratégiques. MBA en management international.',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  const partners = [
    { name: 'Banque Africaine de Développement', type: 'Institutionnel', logo: 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=BAD' },
    { name: 'UEMOA', type: 'Institutionnel', logo: 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=UEMOA' },
    { name: 'CEDEAO', type: 'Institutionnel', logo: 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=CEDEAO' },
    { name: 'ICAC', type: 'Technique', logo: 'https://via.placeholder.com/120x60/28A745/FFFFFF?text=ICAC' },
    { name: 'FAO', type: 'Technique', logo: 'https://via.placeholder.com/120x60/28A745/FFFFFF?text=FAO' },
    { name: 'ONUDI', type: 'Technique', logo: 'https://via.placeholder.com/120x60/28A745/FFFFFF?text=ONUDI' }
  ];

  const getPartnerTypeColor = (type: string) => {
    switch (type) {
      case 'Institutionnel': return 'bg-[#2D9B8A]';
      case 'Technique': return 'bg-[#28A745]';
      case 'Commercial': return 'bg-[#FD7E14]';
      default: return 'bg-[#6C757D]';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D9B8A]/80 to-[#2D9B8A]/60" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              L'Association Cotonnière Africaine
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Fédérer, Promouvoir, Développer
            </p>
            <div className="w-24 h-1 bg-[#A8E6CF] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Histoire & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#1F6B5C] mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-[#343A40]">
                <p className="text-lg leading-relaxed">
                  Fondée en <span className="text-[#2D9B8A] font-semibold">2010</span>, l'Association Cotonnière Africaine (ACA) 
                  est née de la volonté commune des acteurs de la filière coton de créer une plateforme d'échange et de 
                  coopération à l'échelle continentale.
                </p>
                <blockquote className="border-l-4 border-[#A8E6CF] pl-6 italic text-lg text-[#6C757D]">
                  "Notre mission est de transformer la filière cotonnière africaine en un secteur d'excellence, 
                  compétitif et durable, au service du développement économique du continent."
                </blockquote>
                <p className="leading-relaxed">
                  Depuis sa création, l'ACA a accompagné plus de <span className="text-[#2D9B8A] font-semibold">150 membres</span> 
                  dans <span className="text-[#2D9B8A] font-semibold">25 pays africains</span>, contribuant à l'amélioration 
                  de la qualité, de la productivité et de la durabilité de la production cotonnière.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                alt="Équipe ACA"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Valeurs */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F6B5C] mb-4">
              Vision & Valeurs
            </h2>
            <p className="text-lg text-[#6C757D] max-w-2xl mx-auto">
              Les fondements qui guident notre action quotidienne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionValues.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <div className="mb-6 inline-flex items-center justify-center">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: item.color }}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1F6B5C] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#6C757D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F6B5C] mb-4">
              Nos Réalisations Clés
            </h2>
            <p className="text-lg text-[#6C757D] max-w-2xl mx-auto">
              Une décennie d'engagement pour l'excellence cotonnière
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#2D9B8A]"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#2D9B8A]">
                      <div className="text-2xl font-bold text-[#28A745] mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-[#1F6B5C] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#6C757D]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-[#A8E6CF] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Équipe Dirigeante */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F6B5C] mb-4">
              Notre Équipe
            </h2>
            <p className="text-lg text-[#6C757D] max-w-2xl mx-auto">
              Des experts passionnés au service de l'excellence cotonnière
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#2D9B8A] object-cover"
                />
                <h3 className="text-xl font-bold text-[#1F6B5C] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#28A745] font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-[#6C757D] text-sm leading-relaxed">
                  {member.bio.substring(0, 100)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F6B5C] mb-4">
              Nos Partenaires Stratégiques
            </h2>
            <p className="text-lg text-[#6C757D] max-w-2xl mx-auto">
              Un réseau de partenaires de confiance pour un impact continental
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-[#F8F9FA] rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-16 object-contain mb-4"
                />
                <h3 className="text-lg font-bold text-[#1F6B5C] mb-2">
                  {partner.name}
                </h3>
                <span className={`${getPartnerTypeColor(partner.type)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {partner.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2D9B8A] to-[#A8E6CF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Rejoignez-nous !
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Participez au développement de l'excellence cotonnière africaine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#28A745] text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
              Devenir Membre
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#2D9B8A] transition-all duration-300 transform hover:scale-105">
              Télécharger la Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Modal Biographie */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-20 h-20 rounded-full border-4 border-[#2D9B8A] object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-[#1F6B5C]">
                      {selectedMember.name}
                    </h3>
                    <p className="text-[#28A745] font-medium">
                      {selectedMember.position}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-[#6C757D] hover:text-[#2D9B8A] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="text-[#343A40] leading-relaxed mb-6">
                <p>{selectedMember.bio}</p>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={selectedMember.social.linkedin}
                  className="text-[#2D9B8A] hover:text-[#1F6B5C] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={selectedMember.social.twitter}
                  className="text-[#2D9B8A] hover:text-[#1F6B5C] transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Presentation;