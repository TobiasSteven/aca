import React, { useState } from 'react';
import { Search, Filter, Grid, List, MapPin, Calendar, Globe, Users, Building, X, Heart, ExternalLink } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const Membres = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [filters, setFilters] = useState({
    type: [],
    country: [],
    status: [],
    region: []
  });
  const [showFilters, setShowFilters] = useState(false);

  const breadcrumbItems = [
    { label: 'Accueil', href: '#' },
    { label: 'Nos Membres' }
  ];

  const members = [
    {
      id: 1,
      name: 'CottonCorp Mali',
      type: 'Producteur',
      country: 'Mali',
      region: 'Afrique de l\'Ouest',
      status: 'Membre actif',
      logo: 'https://via.placeholder.com/80x80/2D9B8A/FFFFFF?text=CCM',
      description: 'Leader de la production cotonnière au Mali avec plus de 50 000 hectares cultivés.',
      joinDate: '2012-03-15',
      website: 'https://cottoncorp-mali.com',
      email: 'contact@cottoncorp-mali.com',
      phone: '+223 20 22 33 44',
      address: 'Bamako, Mali',
      capacity: '25 000 tonnes/an',
      certifications: ['Bio', 'Fair Trade', 'GOTS'],
      employees: 1200
    },
    {
      id: 2,
      name: 'Textile Afrique CI',
      type: 'Transformateur',
      country: 'Côte d\'Ivoire',
      region: 'Afrique de l\'Ouest',
      status: 'Membre actif',
      logo: 'https://via.placeholder.com/80x80/28A745/FFFFFF?text=TAC',
      description: 'Spécialiste de la transformation textile avec des technologies de pointe.',
      joinDate: '2014-07-22',
      website: 'https://textile-afrique.ci',
      email: 'info@textile-afrique.ci',
      phone: '+225 27 20 30 40',
      address: 'Abidjan, Côte d\'Ivoire',
      capacity: '15 000 tonnes/an',
      certifications: ['ISO 9001', 'OEKO-TEX'],
      employees: 800
    },
    {
      id: 3,
      name: 'Burkina Cotton Export',
      type: 'Négociant',
      country: 'Burkina Faso',
      region: 'Afrique de l\'Ouest',
      status: 'Membre associé',
      logo: 'https://via.placeholder.com/80x80/FD7E14/FFFFFF?text=BCE',
      description: 'Exportateur de coton burkinabé vers les marchés internationaux.',
      joinDate: '2016-11-08',
      website: 'https://burkina-cotton.bf',
      email: 'export@burkina-cotton.bf',
      phone: '+226 25 30 40 50',
      address: 'Ouagadougou, Burkina Faso',
      capacity: '10 000 tonnes/an',
      certifications: ['Fair Trade'],
      employees: 150
    },
    {
      id: 4,
      name: 'Institut Coton Sénégal',
      type: 'Institution',
      country: 'Sénégal',
      region: 'Afrique de l\'Ouest',
      status: 'Partenaire',
      logo: 'https://via.placeholder.com/80x80/2D9B8A/FFFFFF?text=ICS',
      description: 'Centre de recherche et développement pour l\'amélioration des variétés cotonnières.',
      joinDate: '2011-05-12',
      website: 'https://institut-coton.sn',
      email: 'recherche@institut-coton.sn',
      phone: '+221 33 824 50 60',
      address: 'Dakar, Sénégal',
      capacity: 'Recherche & Développement',
      certifications: ['ISO 17025'],
      employees: 45
    },
    {
      id: 5,
      name: 'Ghana Cotton Company',
      type: 'Producteur',
      country: 'Ghana',
      region: 'Afrique de l\'Ouest',
      status: 'Membre actif',
      logo: 'https://via.placeholder.com/80x80/28A745/FFFFFF?text=GCC',
      description: 'Producteur et transformateur intégré avec focus sur la durabilité.',
      joinDate: '2013-09-30',
      website: 'https://ghana-cotton.gh',
      email: 'info@ghana-cotton.gh',
      phone: '+233 30 276 8900',
      address: 'Accra, Ghana',
      capacity: '18 000 tonnes/an',
      certifications: ['Bio', 'GOTS', 'Fair Trade'],
      employees: 950
    },
    {
      id: 6,
      name: 'Cameroon Textile Mills',
      type: 'Transformateur',
      country: 'Cameroun',
      region: 'Afrique Centrale',
      status: 'Membre actif',
      logo: 'https://via.placeholder.com/80x80/FD7E14/FFFFFF?text=CTM',
      description: 'Filature moderne avec capacité d\'exportation vers l\'Europe.',
      joinDate: '2015-02-18',
      website: 'https://cameroon-textile.cm',
      email: 'contact@cameroon-textile.cm',
      phone: '+237 233 42 56 78',
      address: 'Douala, Cameroun',
      capacity: '12 000 tonnes/an',
      certifications: ['ISO 9001', 'OEKO-TEX'],
      employees: 600
    }
  ];

  const memberTypes = ['Producteur', 'Transformateur', 'Négociant', 'Institution', 'Partenaire'];
  const countries = [...new Set(members.map(m => m.country))];
  const regions = [...new Set(members.map(m => m.region))];
  const statuses = [...new Set(members.map(m => m.status))];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Membre actif': return 'bg-[#28A745]';
      case 'Membre associé': return 'bg-[#FD7E14]';
      case 'Partenaire': return 'bg-[#2D9B8A]';
      default: return 'bg-[#6C757D]';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Producteur': return 'text-[#28A745]';
      case 'Transformateur': return 'text-[#2D9B8A]';
      case 'Négociant': return 'text-[#FD7E14]';
      case 'Institution': return 'text-[#6C757D]';
      case 'Partenaire': return 'text-[#2D9B8A]';
      default: return 'text-[#6C757D]';
    }
  };

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filters.type.length === 0 || filters.type.includes(member.type);
    const matchesCountry = filters.country.length === 0 || filters.country.includes(member.country);
    const matchesStatus = filters.status.length === 0 || filters.status.includes(member.status);
    const matchesRegion = filters.region.length === 0 || filters.region.includes(member.region);

    return matchesSearch && matchesType && matchesCountry && matchesStatus && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="bg-[#2D9B8A] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos Membres
          </h1>
          <p className="text-xl text-[#A8E6CF] mb-6">
            Un réseau de {members.length} professionnels à travers l'Afrique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white">
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              <span>{countries.length} pays représentés</span>
            </div>
            <div className="flex items-center">
              <Building className="w-5 h-5 mr-2" />
              <span>{memberTypes.length} secteurs d'activité</span>
            </div>
          </div>
          <button className="mt-8 px-8 py-3 bg-[#28A745] text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
            Devenir Membre
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filtres */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-[#F8F9FA] rounded-lg p-6 border-r border-[#E9ECEF]">
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h3 className="text-lg font-bold text-[#1F6B5C]">Filtres</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-[#6C757D] hover:text-[#2D9B8A]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Recherche */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#1F6B5C] mb-2">
                  Rechercher un membre
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6C757D] w-4 h-4" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Nom, description..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D9B8A] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Type de membre */}
              <div className="mb-6">
                <h4 className="font-medium text-[#1F6B5C] mb-3">Type de membre</h4>
                <div className="space-y-2">
                  {memberTypes.map(type => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-[#2D9B8A] focus:ring-[#2D9B8A]"
                        checked={filters.type.includes(type)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters(prev => ({ ...prev, type: [...prev.type, type] }));
                          } else {
                            setFilters(prev => ({ ...prev, type: prev.type.filter(t => t !== type) }));
                          }
                        }}
                      />
                      <span className="ml-2 text-sm text-[#6C757D]">
                        {type} ({members.filter(m => m.type === type).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pays */}
              <div className="mb-6">
                <h4 className="font-medium text-[#1F6B5C] mb-3">Pays</h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {countries.map(country => (
                    <label key={country} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-[#2D9B8A] focus:ring-[#2D9B8A]"
                        checked={filters.country.includes(country)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters(prev => ({ ...prev, country: [...prev.country, country] }));
                          } else {
                            setFilters(prev => ({ ...prev, country: prev.country.filter(c => c !== country) }));
                          }
                        }}
                      />
                      <span className="ml-2 text-sm text-[#6C757D]">
                        {country} ({members.filter(m => m.country === country).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Statut */}
              <div className="mb-6">
                <h4 className="font-medium text-[#1F6B5C] mb-3">Statut</h4>
                <div className="space-y-2">
                  {statuses.map(status => (
                    <label key={status} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-[#2D9B8A] focus:ring-[#2D9B8A]"
                        checked={filters.status.includes(status)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters(prev => ({ ...prev, status: [...prev.status, status] }));
                          } else {
                            setFilters(prev => ({ ...prev, status: prev.status.filter(s => s !== status) }));
                          }
                        }}
                      />
                      <span className="ml-2 text-sm text-[#6C757D]">
                        {status} ({members.filter(m => m.status === status).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* CTA Devenir Membre */}
              <div className="bg-[#2D9B8A] rounded-lg p-4 text-center">
                <h4 className="text-white font-semibold mb-2">Rejoignez-nous !</h4>
                <p className="text-[#A8E6CF] text-sm mb-3">
                  Bénéficiez de notre réseau et expertise
                </p>
                <button className="w-full px-4 py-2 bg-[#28A745] text-white rounded-lg hover:bg-green-600 transition-colors">
                  Candidater
                </button>
              </div>
            </div>
          </div>

          {/* Zone Principale */}
          <div className="flex-1">
            {/* Contrôles */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center px-4 py-2 border border-[#2D9B8A] text-[#2D9B8A] rounded-lg hover:bg-[#2D9B8A] hover:text-white transition-colors"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filtres
                </button>
                <span className="text-[#6C757D]">
                  {filteredMembers.length} membres trouvés
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex border border-[#E9ECEF] rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-[#2D9B8A] text-white' : 'text-[#6C757D] hover:text-[#2D9B8A]'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-[#2D9B8A] text-white' : 'text-[#6C757D] hover:text-[#2D9B8A]'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Grille/Liste des Membres */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredMembers.map(member => (
                  <div
                    key={member.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#A8E6CF] group cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <img
                          src={member.logo}
                          alt={member.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <span className={`${getStatusColor(member.status)} text-white px-2 py-1 rounded-full text-xs font-medium`}>
                          {member.status}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-[#1F6B5C] mb-2 group-hover:text-[#2D9B8A] transition-colors">
                        {member.name}
                      </h3>
                      
                      <p className={`${getTypeColor(member.type)} font-medium text-sm mb-2`}>
                        {member.type}
                      </p>
                      
                      <div className="flex items-center text-[#6C757D] text-sm mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        {member.country}
                      </div>
                      
                      <p className="text-[#6C757D] text-sm mb-4 line-clamp-2">
                        {member.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-[#6C757D] text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          Membre depuis {new Date(member.joinDate).getFullYear()}
                        </div>
                        <button className="text-[#2D9B8A] font-medium hover:text-[#1F6B5C] transition-colors text-sm">
                          Voir profil
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredMembers.map(member => (
                  <div
                    key={member.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={member.logo}
                          alt={member.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-bold text-[#1F6B5C] hover:text-[#2D9B8A] transition-colors">
                            {member.name}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-[#6C757D]">
                            <span className={getTypeColor(member.type)}>{member.type}</span>
                            <span className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {member.country}
                            </span>
                            <span className={`${getStatusColor(member.status)} text-white px-2 py-1 rounded-full text-xs`}>
                              {member.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="text-[#2D9B8A] font-medium hover:text-[#1F6B5C] transition-colors">
                        Voir profil
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Profil Membre */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedMember.logo}
                    alt={selectedMember.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-[#1F6B5C]">
                      {selectedMember.name}
                    </h3>
                    <p className={`${getTypeColor(selectedMember.type)} font-medium mb-1`}>
                      {selectedMember.type}
                    </p>
                    <span className={`${getStatusColor(selectedMember.status)} text-white px-3 py-1 rounded-full text-sm`}>
                      {selectedMember.status}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-[#6C757D] hover:text-[#2D9B8A] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-[#1F6B5C] mb-4">Informations générales</h4>
                  <div className="space-y-3 text-[#343A40]">
                    <p><strong>Description:</strong> {selectedMember.description}</p>
                    <p><strong>Adresse:</strong> {selectedMember.address}</p>
                    <p><strong>Téléphone:</strong> {selectedMember.phone}</p>
                    <p><strong>Email:</strong> {selectedMember.email}</p>
                    <p><strong>Site web:</strong> 
                      <a href={selectedMember.website} className="text-[#2D9B8A] hover:underline ml-1">
                        {selectedMember.website}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-[#1F6B5C] mb-4">Profil détaillé</h4>
                  <div className="space-y-3 text-[#343A40]">
                    <p><strong>Capacité:</strong> {selectedMember.capacity}</p>
                    <p><strong>Employés:</strong> {selectedMember.employees}</p>
                    <p><strong>Date d'adhésion:</strong> {new Date(selectedMember.joinDate).toLocaleDateString('fr-FR')}</p>
                    <div>
                      <strong>Certifications:</strong>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {selectedMember.certifications.map((cert: string, index: number) => (
                          <span key={index} className="bg-[#A8E6CF] text-[#1F6B5C] px-2 py-1 rounded-full text-xs">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="px-6 py-3 bg-[#28A745] text-white font-semibold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Contacter
                </button>
                <button className="px-6 py-3 border-2 border-[#2D9B8A] text-[#2D9B8A] font-semibold rounded-lg hover:bg-[#2D9B8A] hover:text-white transition-colors flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Site web
                </button>
                <button className="px-6 py-3 border-2 border-[#6C757D] text-[#6C757D] font-semibold rounded-lg hover:bg-[#6C757D] hover:text-white transition-colors flex items-center justify-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Ajouter aux favoris
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Membres;