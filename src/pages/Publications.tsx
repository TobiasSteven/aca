import React, { useState } from 'react';
import { Search, Filter, Grid, List, Download, Eye, FileText, Video, Headphones, Image, Star, Calendar, User, X, Share2, Bookmark } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const Publications = () => {
  const [activeTab, setActiveTab] = useState('tous');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'table'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDocument, setSelectedDocument] = useState<any>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    types: [],
    themes: [],
    languages: [],
    levels: []
  });

  const breadcrumbItems = [
    { label: 'Accueil', href: '#' },
    { label: 'Publications & Ressources' }
  ];

  const publications = [
    {
      id: 1,
      title: 'Guide du Producteur de Coton Biologique 2024',
      type: 'Guide',
      author: 'ACA Research Team',
      date: '2024-11-15',
      language: 'Français',
      level: 'Intermédiaire',
      theme: 'Production cotonnière',
      description: 'Guide complet pour la transition vers la production de coton biologique, incluant les techniques agricoles, la certification et la commercialisation.',
      thumbnail: 'https://via.placeholder.com/320x180/2D9B8A/FFFFFF?text=Guide+Bio',
      fileSize: '2.5 MB',
      pages: 45,
      downloads: 1250,
      rating: 4.8,
      tags: ['Bio', 'Production', 'Certification'],
      isNew: true
    },
    {
      id: 2,
      title: 'Rapport Annuel ACA 2023',
      type: 'Rapport',
      author: 'Direction ACA',
      date: '2024-03-20',
      language: 'Français',
      level: 'Expert',
      theme: 'Développement institutionnel',
      description: 'Bilan complet des activités, réalisations et perspectives de l\'Association Cotonnière Africaine pour l\'année 2023.',
      thumbnail: 'https://via.placeholder.com/320x180/28A745/FFFFFF?text=Rapport+2023',
      fileSize: '8.2 MB',
      pages: 120,
      downloads: 890,
      rating: 4.6,
      tags: ['Rapport', 'Bilan', 'Stratégie'],
      isNew: false
    },
    {
      id: 3,
      title: 'Innovations Technologiques dans la Filière Coton',
      type: 'Étude',
      author: 'Dr. Jean-Baptiste Koffi',
      date: '2024-10-08',
      language: 'Français',
      level: 'Expert',
      theme: 'Innovation',
      description: 'Analyse des dernières innovations technologiques et leur impact sur la productivité et la qualité dans la filière cotonnière africaine.',
      thumbnail: 'https://via.placeholder.com/320x180/FD7E14/FFFFFF?text=Innovation+Tech',
      fileSize: '4.1 MB',
      pages: 78,
      downloads: 650,
      rating: 4.9,
      tags: ['Innovation', 'Technologie', 'Productivité'],
      isNew: true
    },
    {
      id: 4,
      title: 'Formation : Techniques de Transformation Moderne',
      type: 'Vidéo',
      author: 'Centre de Formation ACA',
      date: '2024-09-12',
      language: 'Français',
      level: 'Débutant',
      theme: 'Transformation',
      description: 'Série de vidéos pédagogiques sur les techniques modernes de transformation du coton, de l\'égrenage au filage.',
      thumbnail: 'https://via.placeholder.com/320x180/17A2B8/FFFFFF?text=Formation+Video',
      fileSize: '250 MB',
      duration: '2h 15min',
      downloads: 420,
      rating: 4.7,
      tags: ['Formation', 'Transformation', 'Vidéo'],
      isNew: false
    },
    {
      id: 5,
      title: 'Étude de Marché : Coton Africain en Europe',
      type: 'Étude',
      author: 'Équipe Analyse Marchés',
      date: '2024-08-30',
      language: 'Français',
      level: 'Intermédiaire',
      theme: 'Commercialisation',
      description: 'Analyse approfondie des opportunités et défis pour le coton africain sur les marchés européens, avec recommandations stratégiques.',
      thumbnail: 'https://via.placeholder.com/320x180/6C757D/FFFFFF?text=Marche+Europe',
      fileSize: '3.8 MB',
      pages: 95,
      downloads: 780,
      rating: 4.5,
      tags: ['Marché', 'Europe', 'Export'],
      isNew: false
    },
    {
      id: 6,
      title: 'Podcast : Voix des Producteurs Africains',
      type: 'Audio',
      author: 'ACA Media',
      date: '2024-11-01',
      language: 'Français',
      level: 'Débutant',
      theme: 'Témoignages',
      description: 'Série de podcasts donnant la parole aux producteurs de coton africains, leurs défis, succès et vision d\'avenir.',
      thumbnail: 'https://via.placeholder.com/320x180/A8E6CF/FFFFFF?text=Podcast+ACA',
      fileSize: '45 MB',
      duration: '45min',
      downloads: 320,
      rating: 4.4,
      tags: ['Podcast', 'Témoignages', 'Producteurs'],
      isNew: true
    }
  ];

  const collections = [
    {
      title: 'Guide du Producteur Débutant',
      description: 'Ressources essentielles pour débuter dans la production cotonnière',
      icon: '📚',
      count: 8
    },
    {
      title: 'Innovation dans la Filière Coton',
      description: 'Technologies et innovations transformant le secteur',
      icon: '🔬',
      count: 12
    },
    {
      title: 'Études de Marché 2024',
      description: 'Analyses et tendances des marchés cotonniers',
      icon: '📊',
      count: 6
    },
    {
      title: 'Ressources Durabilité',
      description: 'Pratiques durables et certification environnementale',
      icon: '🌱',
      count: 15
    }
  ];

  const documentTypes = ['Guide', 'Rapport', 'Étude', 'Vidéo', 'Audio', 'Infographie'];
  const themes = ['Production cotonnière', 'Transformation', 'Commercialisation', 'Innovation', 'Durabilité', 'Formation'];
  const languages = ['Français', 'Anglais'];
  const levels = ['Débutant', 'Intermédiaire', 'Expert'];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Guide': return FileText;
      case 'Rapport': return FileText;
      case 'Étude': return FileText;
      case 'Vidéo': return Video;
      case 'Audio': return Headphones;
      case 'Infographie': return Image;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Guide': return 'bg-[#28A745]';
      case 'Rapport': return 'bg-[#2D9B8A]';
      case 'Étude': return 'bg-[#FD7E14]';
      case 'Vidéo': return 'bg-[#17A2B8]';
      case 'Audio': return 'bg-[#6C757D]';
      case 'Infographie': return 'bg-[#A8E6CF]';
      default: return 'bg-[#6C757D]';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant': return 'text-[#28A745]';
      case 'Intermédiaire': return 'text-[#FD7E14]';
      case 'Expert': return 'text-[#DC3545]';
      default: return 'text-[#6C757D]';
    }
  };

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filters.types.length === 0 || filters.types.includes(pub.type);
    const matchesTheme = filters.themes.length === 0 || filters.themes.includes(pub.theme);
    const matchesLanguage = filters.languages.length === 0 || filters.languages.includes(pub.language);
    const matchesLevel = filters.levels.length === 0 || filters.levels.includes(pub.level);

    return matchesSearch && matchesType && matchesTheme && matchesLanguage && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="bg-[#F8F9FA] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#2D9B8A] rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-[#2D9B8A] rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-[#2D9B8A] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1F6B5C] mb-4">
            Bibliothèque de Ressources Cotonnières
          </h1>
          <p className="text-xl text-[#6C757D] mb-6 max-w-3xl mx-auto">
            Base de connaissances spécialisée pour l'excellence de la filière cotonnière africaine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-[#6C757D] mb-8">
            <div className="flex items-center">
              <FileText className="w-5 h-5 mr-2 text-[#2D9B8A]" />
              <span>{publications.length} publications</span>
            </div>
            <div className="flex items-center">
              <Download className="w-5 h-5 mr-2 text-[#2D9B8A]" />
              <span>15K+ téléchargements</span>
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2 text-[#2D9B8A]" />
              <span>2 langues</span>
            </div>
          </div>
          
          {/* Barre de recherche principale */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6C757D] w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher par titre, auteur, mots-clés..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D9B8A] focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-[#E9ECEF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'tous', label: 'Tous' },
              { id: 'rapports', label: 'Rapports' },
              { id: 'guides', label: 'Guides' },
              { id: 'bulletins', label: 'Bulletins' },
              { id: 'recherches', label: 'Recherches' },
              { id: 'medias', label: 'Médias' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#2D9B8A] text-[#2D9B8A]'
                    : 'border-transparent text-[#6C757D] hover:text-[#2D9B8A] hover:border-[#A8E6CF]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Collections Spéciales */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1F6B5C] mb-6">Collections Spéciales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#2D9B8A] cursor-pointer"
              >
                <div className="text-3xl mb-3">{collection.icon}</div>
                <h3 className="text-lg font-bold text-[#1F6B5C] mb-2">
                  {collection.title}
                </h3>
                <p className="text-[#6C757D] text-sm mb-3">
                  {collection.description}
                </p>
                <span className="text-[#2D9B8A] font-medium text-sm">
                  {collection.count} ressources
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filtres */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg p-6 border border-[#E9ECEF] space-y-6">
              <div className="flex items-center justify-between lg:hidden">
                <h3 className="text-lg font-bold text-[#1F6B5C]">Filtres</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-[#6C757D] hover:text-[#2D9B8A]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Recherche Avancée */}
              <div>
                <h4 className="font-medium text-[#1F6B5C] mb-3">Recherche Avancée</h4>
                <div className="space-y-2">
                  <label className="flex items-center text-sm">
                    <input type="radio" name="searchType" className="mr-2" defaultChecked />
                    Recherche globale
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="radio" name="searchType" className="mr-2" />
                    Titre uniquement
                  </label>
                  <label className="flex items-center text-sm">
                    <input type="radio" name="searchType" className="mr-2" />
                    Correspondance exacte
                  </label>
                </div>
              </div>

              {/* Types de documents */}
              <div>
                <h4 className="font-medium text-[#1F6B5C] mb-3">Types de documents</h4>
                <div className="space-y-2">
                  {documentTypes.map(type => {
                    const IconComponent = getTypeIcon(type);
                    return (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-[#2D9B8A] focus:ring-[#2D9B8A] mr-2"
                          checked={filters.types.includes(type)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFilters(prev => ({ ...prev, types: [...prev.types, type] }));
                            } else {
                              setFilters(prev => ({ ...prev, types: prev.types.filter(t => t !== type) }));
                            }
                          }}
                        />
                        <IconComponent className="w-4 h-4 mr-2 text-[#6C757D]" />
                        <span className="text-sm text-[#6C757D]">
                          {type} ({publications.filter(p => p.type === type).length})
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Thématiques */}
              <div>
                <h4 className="font-medium text-[#1F6B5C] mb-3">Thématiques</h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {themes.map(theme => (
                    <label key={theme} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-[#2D9B8A] focus:ring-[#2D9B8A] mr-2"
                        checked={filters.themes.includes(theme)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters(prev => ({ ...prev, themes: [...prev.themes, theme] }));
                          } else {
                            setFilters(prev => ({ ...prev, themes: prev.themes.filter(t => t !== theme) }));
                          }
                        }}
                      />
                      <span className="text-sm text-[#6C757D]">
                        {theme}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Niveau */}
              <div>
                <h4 className="font-medium text-[#1F6B5C] mb-3">Niveau</h4>
                <div className="space-y-2">
                  {levels.map(level => (
                    <label key={level} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-[#2D9B8A] focus:ring-[#2D9B8A] mr-2"
                        checked={filters.levels.includes(level)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters(prev => ({ ...prev, levels: [...prev.levels, level] }));
                          } else {
                            setFilters(prev => ({ ...prev, levels: prev.levels.filter(l => l !== level) }));
                          }
                        }}
                      />
                      <span className={`text-sm font-medium ${getLevelColor(level)}`}>
                        {level}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Ma Bibliothèque */}
              <div className="bg-[#F8F9FA] rounded-lg p-4">
                <h4 className="font-medium text-[#1F6B5C] mb-3">Ma Bibliothèque</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-[#2D9B8A] hover:underline">
                    Mes favoris (12)
                  </a>
                  <a href="#" className="block text-[#2D9B8A] hover:underline">
                    Téléchargements (8)
                  </a>
                  <a href="#" className="block text-[#2D9B8A] hover:underline">
                    Recommandations (5)
                  </a>
                </div>
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
                  {filteredPublications.length} ressources trouvées
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#2D9B8A] focus:border-transparent">
                  <option>Plus récent</option>
                  <option>Plus téléchargé</option>
                  <option>Mieux noté</option>
                  <option>Alphabétique</option>
                </select>
                
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

            {/* Publications Grid */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPublications.map(publication => {
                  const TypeIcon = getTypeIcon(publication.type);
                  return (
                    <div
                      key={publication.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                      onClick={() => setSelectedDocument(publication)}
                    >
                      <div className="relative">
                        <img
                          src={publication.thumbnail}
                          alt={publication.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <span className={`${getTypeColor(publication.type)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                            {publication.type}
                          </span>
                        </div>
                        {publication.isNew && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-[#28A745] text-white px-2 py-1 rounded-full text-xs font-medium">
                              Nouveau
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-bold text-[#1F6B5C] mb-2 group-hover:text-[#2D9B8A] transition-colors line-clamp-2">
                          {publication.title}
                        </h3>
                        
                        <div className="flex items-center text-[#6C757D] text-sm mb-2">
                          <User className="w-4 h-4 mr-1" />
                          <span>{publication.author}</span>
                        </div>
                        
                        <p className="text-[#6C757D] text-sm mb-4 line-clamp-3">
                          {publication.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-[#6C757D] mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(publication.date).toLocaleDateString('fr-FR')}
                          </div>
                          <div className="flex items-center">
                            <Download className="w-3 h-3 mr-1" />
                            {publication.downloads}
                          </div>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 mr-1 text-yellow-500" />
                            {publication.rating}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className={`font-medium text-sm ${getLevelColor(publication.level)}`}>
                            {publication.level}
                          </span>
                          <div className="flex space-x-2">
                            <button className="p-2 text-[#2D9B8A] hover:bg-[#A8E6CF] rounded-lg transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-[#2D9B8A] hover:bg-[#A8E6CF] rounded-lg transition-colors">
                              <Download className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-[#2D9B8A] hover:bg-[#A8E6CF] rounded-lg transition-colors">
                              <Bookmark className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredPublications.map(publication => {
                  const TypeIcon = getTypeIcon(publication.type);
                  return (
                    <div
                      key={publication.id}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 cursor-pointer"
                      onClick={() => setSelectedDocument(publication)}
                    >
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 ${getTypeColor(publication.type)} rounded-lg flex items-center justify-center`}>
                            <TypeIcon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold text-[#1F6B5C] hover:text-[#2D9B8A] transition-colors">
                              {publication.title}
                            </h3>
                            <div className="flex items-center space-x-2">
                              {publication.isNew && (
                                <span className="bg-[#28A745] text-white px-2 py-1 rounded-full text-xs">
                                  Nouveau
                                </span>
                              )}
                              <span className={`${getTypeColor(publication.type)} text-white px-3 py-1 rounded-full text-sm`}>
                                {publication.type}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-[#6C757D] mb-3">
                            <span>{publication.author}</span>
                            <span>•</span>
                            <span>{new Date(publication.date).toLocaleDateString('fr-FR')}</span>
                            <span>•</span>
                            <span className={getLevelColor(publication.level)}>{publication.level}</span>
                            <span>•</span>
                            <span>{publication.fileSize}</span>
                          </div>
                          
                          <p className="text-[#6C757D] mb-4">
                            {publication.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-[#6C757D]">
                              <span className="flex items-center">
                                <Download className="w-4 h-4 mr-1" />
                                {publication.downloads} téléchargements
                              </span>
                              <span className="flex items-center">
                                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                                {publication.rating}
                              </span>
                            </div>
                            <div className="flex space-x-2">
                              <button className="px-4 py-2 bg-[#2D9B8A] text-white rounded-lg hover:bg-[#1F6B5C] transition-colors">
                                Télécharger
                              </button>
                              <button className="px-4 py-2 border border-[#2D9B8A] text-[#2D9B8A] rounded-lg hover:bg-[#2D9B8A] hover:text-white transition-colors">
                                Aperçu
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 text-[#6C757D] hover:text-[#2D9B8A] transition-colors">
                  Précédent
                </button>
                {[1, 2, 3, 4, 5].map(page => (
                  <button
                    key={page}
                    className={`px-3 py-2 rounded ${
                      page === 1
                        ? 'bg-[#2D9B8A] text-white'
                        : 'text-[#6C757D] hover:bg-[#A8E6CF] hover:text-[#1F6B5C]'
                    } transition-colors`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-3 py-2 text-[#6C757D] hover:text-[#2D9B8A] transition-colors">
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Aperçu Document */}
      {selectedDocument && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 ${getTypeColor(selectedDocument.type)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {React.createElement(getTypeIcon(selectedDocument.type), { className: "w-8 h-8 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1F6B5C] mb-2">
                      {selectedDocument.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-[#6C757D] text-sm">
                      <span>{selectedDocument.author}</span>
                      <span>•</span>
                      <span>{new Date(selectedDocument.date).toLocaleDateString('fr-FR')}</span>
                      <span>•</span>
                      <span className={getLevelColor(selectedDocument.level)}>{selectedDocument.level}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDocument(null)}
                  className="text-[#6C757D] hover:text-[#2D9B8A] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-[#F8F9FA] rounded-lg p-8 text-center mb-6">
                    <div className="text-6xl mb-4">📄</div>
                    <p className="text-[#6C757D]">
                      Aperçu du document disponible après téléchargement
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-[#1F6B5C] mb-4">Description</h4>
                    <p className="text-[#343A40] leading-relaxed mb-6">
                      {selectedDocument.description}
                    </p>
                    
                    {selectedDocument.tags && (
                      <div>
                        <h4 className="text-lg font-bold text-[#1F6B5C] mb-3">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedDocument.tags.map((tag: string, index: number) => (
                            <span key={index} className="bg-[#A8E6CF] text-[#1F6B5C] px-3 py-1 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <div className="bg-[#F8F9FA] rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-bold text-[#1F6B5C] mb-4">Informations</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#6C757D]">Type:</span>
                        <span className="font-medium">{selectedDocument.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6C757D]">Taille:</span>
                        <span className="font-medium">{selectedDocument.fileSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6C757D]">Pages:</span>
                        <span className="font-medium">{selectedDocument.pages || selectedDocument.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6C757D]">Langue:</span>
                        <span className="font-medium">{selectedDocument.language}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6C757D]">Téléchargements:</span>
                        <span className="font-medium">{selectedDocument.downloads}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6C757D]">Note:</span>
                        <span className="font-medium flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          {selectedDocument.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <button className="w-full px-6 py-3 bg-[#2D9B8A] text-white font-semibold rounded-lg hover:bg-[#1F6B5C] transition-colors flex items-center justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger
                    </button>
                    <button className="w-full px-6 py-3 border-2 border-[#2D9B8A] text-[#2D9B8A] font-semibold rounded-lg hover:bg-[#2D9B8A] hover:text-white transition-colors flex items-center justify-center">
                      <Share2 className="w-5 h-5 mr-2" />
                      Partager
                    </button>
                    <button className="w-full px-6 py-3 border-2 border-[#6C757D] text-[#6C757D] font-semibold rounded-lg hover:bg-[#6C757D] hover:text-white transition-colors flex items-center justify-center">
                      <Bookmark className="w-5 h-5 mr-2" />
                      Favoris
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Publications;