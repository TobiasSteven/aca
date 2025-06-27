import React, { useState } from 'react';
import { Search, Calendar, Tag, ArrowRight, Filter, Grid, List, Eye, Share2, Bookmark, X, MapPin, Clock, Users, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const Actualites = () => {
  const [activeTab, setActiveTab] = useState('actualites');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [calendarView, setCalendarView] = useState<'month' | 'list'>('month');
  const [filters, setFilters] = useState({
    categories: [],
    period: '',
    region: [],
    eventTypes: [],
    eventStatus: []
  });

  const breadcrumbItems = [
    { label: 'Accueil', href: '#' },
    { label: 'Actualités & Événements' }
  ];

  const featuredArticle = {
    id: 'featured',
    title: 'Signature d\'un accord historique pour la promotion du coton biologique en Afrique',
    excerpt: 'L\'ACA et ses partenaires internationaux s\'engagent dans un programme ambitieux de 50 millions d\'euros pour développer la filière coton biologique sur le continent.',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    category: 'Partenariats',
    date: '2024-11-20',
    author: 'Rédaction ACA',
    readTime: '8 min'
  };

  const articles = [
    {
      id: 1,
      title: 'Innovation technologique : nouvelle machine de transformation au Burkina Faso',
      excerpt: 'Une technologie révolutionnaire permet d\'augmenter le rendement de transformation de 35% tout en réduisant la consommation d\'eau.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Innovation',
      date: '2024-11-18',
      author: 'Dr. Jean Ouedraogo',
      readTime: '5 min',
      views: 1250,
      tags: ['Technologie', 'Burkina Faso', 'Transformation']
    },
    {
      id: 2,
      title: 'Prix du coton : stabilisation attendue pour le premier trimestre 2025',
      excerpt: 'Les analystes prévoient une stabilisation des cours mondiaux du coton grâce aux nouvelles politiques d\'exportation coordonnées.',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Marché',
      date: '2024-11-15',
      author: 'Marie Diallo',
      readTime: '6 min',
      views: 890,
      tags: ['Prix', 'Marché', 'Export']
    },
    {
      id: 3,
      title: 'Formation de 500 producteurs aux techniques agricoles durables',
      excerpt: 'Le programme de formation ACA 2024 a permis de sensibiliser les producteurs aux pratiques respectueuses de l\'environnement.',
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Formation',
      date: '2024-11-12',
      author: 'Amadou Traoré',
      readTime: '4 min',
      views: 650,
      tags: ['Formation', 'Durabilité', 'Producteurs']
    },
    {
      id: 4,
      title: 'Nouveau partenariat avec l\'Union Européenne pour la traçabilité',
      excerpt: 'Un accord de coopération technique vise à améliorer la traçabilité du coton africain sur les marchés européens.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Partenariats',
      date: '2024-11-10',
      author: 'Sophie Laurent',
      readTime: '7 min',
      views: 1100,
      tags: ['UE', 'Traçabilité', 'Export']
    },
    {
      id: 5,
      title: 'Certification biologique : 15 nouvelles exploitations labellisées',
      excerpt: 'L\'ACA félicite les producteurs qui ont obtenu la certification biologique, renforçant l\'offre de coton durable.',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Certification',
      date: '2024-11-08',
      author: 'Ibrahim Kone',
      readTime: '3 min',
      views: 420,
      tags: ['Bio', 'Certification', 'Qualité']
    },
    {
      id: 6,
      title: 'Étude de marché : opportunités en Asie pour le coton africain',
      excerpt: 'Une nouvelle étude révèle un potentiel de croissance de 40% pour les exportations de coton africain vers l\'Asie.',
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Marché',
      date: '2024-11-05',
      author: 'Fatima Diop',
      readTime: '9 min',
      views: 780,
      tags: ['Asie', 'Export', 'Opportunités']
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Forum International du Coton Africain 2024',
      description: 'Le plus grand rassemblement de la filière cotonnière africaine. Trois jours d\'échanges, de networking et de découvertes des dernières innovations.',
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '2024-12-15',
      endDate: '2024-12-17',
      time: '09:00',
      endTime: '18:00',
      location: 'Hôtel Ivoire, Abidjan',
      city: 'Abidjan',
      country: 'Côte d\'Ivoire',
      type: 'Conférence',
      status: 'À venir',
      participants: 250,
      maxParticipants: 300,
      price: 'Gratuit pour les membres',
      organizer: 'ACA',
      tags: ['Forum', 'International', 'Networking'],
      agenda: [
        { time: '09:00-10:30', title: 'Cérémonie d\'ouverture', speaker: 'Direction ACA' },
        { time: '10:45-12:00', title: 'État des lieux de la filière coton', speaker: 'Dr. Aminata Traoré' },
        { time: '14:00-15:30', title: 'Innovations technologiques', speaker: 'Panel d\'experts' },
        { time: '15:45-17:00', title: 'Table ronde : Défis et opportunités', speaker: 'Membres ACA' }
      ],
      registrationRequired: true,
      isHighlighted: true
    },
    {
      id: 2,
      title: 'Atelier Formation : Techniques de Transformation Moderne',
      description: 'Formation pratique sur les nouvelles techniques de transformation du coton, de l\'égrenage au filage.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '2024-12-05',
      endDate: '2024-12-06',
      time: '08:30',
      endTime: '17:00',
      location: 'Centre de Formation ACA',
      city: 'Dakar',
      country: 'Sénégal',
      type: 'Formation',
      status: 'À venir',
      participants: 45,
      maxParticipants: 50,
      price: '150 000 FCFA',
      organizer: 'ACA - Centre de Formation',
      tags: ['Formation', 'Transformation', 'Technique'],
      agenda: [
        { time: '08:30-10:00', title: 'Accueil et présentation', speaker: 'Équipe formation' },
        { time: '10:15-12:00', title: 'Théorie : Processus de transformation', speaker: 'Jean-Baptiste Koffi' },
        { time: '14:00-16:00', title: 'Pratique : Manipulation des équipements', speaker: 'Techniciens experts' },
        { time: '16:15-17:00', title: 'Évaluation et certification', speaker: 'Équipe formation' }
      ],
      registrationRequired: true,
      isHighlighted: false
    },
    {
      id: 3,
      title: 'Assemblée Générale Ordinaire ACA',
      description: 'Assemblée générale annuelle des membres de l\'Association Cotonnière Africaine.',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '2025-01-20',
      endDate: '2025-01-20',
      time: '09:00',
      endTime: '17:00',
      location: 'Palais des Congrès',
      city: 'Ouagadougou',
      country: 'Burkina Faso',
      type: 'Assemblée',
      status: 'À venir',
      participants: 120,
      maxParticipants: 200,
      price: 'Réservé aux membres',
      organizer: 'ACA',
      tags: ['Assemblée', 'Gouvernance', 'Membres'],
      agenda: [
        { time: '09:00-09:30', title: 'Accueil des participants', speaker: 'Secrétariat ACA' },
        { time: '09:30-11:00', title: 'Rapport d\'activités 2024', speaker: 'Direction Générale' },
        { time: '11:15-12:30', title: 'Rapport financier', speaker: 'Direction Administrative' },
        { time: '14:00-15:30', title: 'Orientations stratégiques 2025', speaker: 'Conseil d\'Administration' },
        { time: '15:45-17:00', title: 'Votes et résolutions', speaker: 'Assemblée' }
      ],
      registrationRequired: true,
      isHighlighted: false
    },
    {
      id: 4,
      title: 'Webinaire : Marchés Internationaux du Coton',
      description: 'Analyse des tendances des marchés internationaux et opportunités pour les producteurs africains.',
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '2024-11-28',
      endDate: '2024-11-28',
      time: '15:00',
      endTime: '16:30',
      location: 'En ligne',
      city: 'Virtuel',
      country: 'En ligne',
      type: 'Webinaire',
      status: 'À venir',
      participants: 180,
      maxParticipants: 500,
      price: 'Gratuit',
      organizer: 'ACA - Département Analyse',
      tags: ['Webinaire', 'Marchés', 'Analyse'],
      agenda: [
        { time: '15:00-15:15', title: 'Introduction et contexte', speaker: 'Marie Diallo' },
        { time: '15:15-15:45', title: 'Analyse des tendances 2024', speaker: 'Équipe Analyse' },
        { time: '15:45-16:15', title: 'Opportunités 2025', speaker: 'Experts invités' },
        { time: '16:15-16:30', title: 'Questions-réponses', speaker: 'Tous' }
      ],
      registrationRequired: true,
      isHighlighted: false
    },
    {
      id: 5,
      title: 'Salon de l\'Innovation Cotonnière',
      description: 'Exposition des dernières innovations technologiques dans la filière cotonnière africaine.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '2025-02-10',
      endDate: '2025-02-12',
      time: '10:00',
      endTime: '18:00',
      location: 'Centre d\'Exposition de Lomé',
      city: 'Lomé',
      country: 'Togo',
      type: 'Salon',
      status: 'À venir',
      participants: 85,
      maxParticipants: 400,
      price: '25 000 FCFA',
      organizer: 'ACA & Partenaires',
      tags: ['Salon', 'Innovation', 'Exposition'],
      agenda: [
        { time: '10:00-11:00', title: 'Ouverture officielle', speaker: 'Autorités' },
        { time: '11:00-17:00', title: 'Exposition et démonstrations', speaker: 'Exposants' },
        { time: '14:00-15:30', title: 'Conférences thématiques', speaker: 'Experts' },
        { time: '16:00-17:30', title: 'Networking et partenariats', speaker: 'Participants' }
      ],
      registrationRequired: true,
      isHighlighted: true
    }
  ];

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date()).slice(0, 3);

  const categories = ['Production', 'Marché', 'Innovation', 'Partenariats', 'Formation', 'Certification'];
  const regions = ['Afrique de l\'Ouest', 'Afrique Centrale', 'Afrique de l\'Est', 'International'];
  const eventTypes = ['Conférence', 'Formation', 'Assemblée', 'Webinaire', 'Salon', 'Atelier'];
  const eventStatuses = ['À venir', 'En cours', 'Terminé', 'Annulé'];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Production': return 'bg-[#28A745]';
      case 'Marché': return 'bg-[#FD7E14]';
      case 'Innovation': return 'bg-[#A8E6CF]';
      case 'Partenariats': return 'bg-[#6C757D]';
      case 'Formation': return 'bg-[#2D9B8A]';
      case 'Certification': return 'bg-[#17A2B8]';
      default: return 'bg-[#6C757D]';
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Conférence': return 'bg-[#2D9B8A]';
      case 'Formation': return 'bg-[#28A745]';
      case 'Assemblée': return 'bg-[#FD7E14]';
      case 'Webinaire': return 'bg-[#17A2B8]';
      case 'Salon': return 'bg-[#6C757D]';
      case 'Atelier': return 'bg-[#A8E6CF]';
      default: return 'bg-[#6C757D]';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'À venir': return 'bg-[#28A745]';
      case 'En cours': return 'bg-[#FD7E14]';
      case 'Terminé': return 'bg-[#6C757D]';
      case 'Annulé': return 'bg-[#DC3545]';
      default: return 'bg-[#6C757D]';
    }
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(article.category);
    
    return matchesSearch && matchesCategory;
  });

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filters.eventTypes.length === 0 || filters.eventTypes.includes(event.type);
    const matchesStatus = filters.eventStatus.length === 0 || filters.eventStatus.includes(event.status);
    
    return matchesSearch && matchesType && matchesStatus;
  });

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Convert Sunday (0) to 6, Monday (1) to 0, etc.
  };

  const getEventsForDate = (date: number) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const formatEventDate = (dateStr: string, endDateStr?: string) => {
    const date = new Date(dateStr);
    const endDate = endDateStr ? new Date(endDateStr) : null;
    
    if (endDate && endDate.getTime() !== date.getTime()) {
      return `${date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })} - ${endDate.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}`;
    }
    
    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Navigation Tabs */}
      <div className="bg-white border-b border-[#E9ECEF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'actualites', label: 'Actualités' },
              { id: 'evenements', label: 'Événements' },
              { id: 'archives', label: 'Archives' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
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

      {activeTab === 'actualites' && (
        <>
          {/* Hero Featured Article */}
          <section className="relative h-[400px] overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${featuredArticle.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2D9B8A]/70 to-[#2D9B8A]/50" />
            </div>
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl text-white">
                  <span className="inline-block px-3 py-1 bg-[#FD7E14] text-white text-sm font-medium rounded-full mb-4">
                    À la Une
                  </span>
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    {featuredArticle.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6 text-white/90">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-[#A8E6CF] mb-6">
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <span>{featuredArticle.author}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime} de lecture</span>
                  </div>
                  <button className="px-8 py-3 bg-[#28A745] text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                    Lire l'article
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <div className="bg-[#F8F9FA] rounded-lg p-6 space-y-6">
                  <div className="flex items-center justify-between lg:hidden">
                    <h3 className="text-lg font-bold text-[#1F6B5C]">Filtres</h3>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="text-[#6C757D] hover:text-[#2D9B8A]"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Recherche */}
                  <div>
                    <label className="block text-sm font-medium text-[#1F6B5C] mb-2">
                      Rechercher
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6C757D] w-4 h-4" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Rechercher dans les actualités..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D9B8A] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Catégories */}
                  <div>
                    <h4 className="font-medium text-[#1F6B5C] mb-3">Catégories</h4>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <label key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-[#2D9B8A] focus:ring-[#2D9B8A]"
                            checked={filters.categories.includes(category)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFilters(prev => ({ ...prev, categories: [...prev.categories, category] }));
                              } else {
                                setFilters(prev => ({ ...prev, categories: prev.categories.filter(c => c !== category) }));
                              }
                            }}
                          />
                          <span className="ml-2 text-sm text-[#6C757D]">
                            {category} ({articles.filter(a => a.category === category).length})
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Événements à venir */}
                  <div>
                    <h4 className="font-medium text-[#1F6B5C] mb-3">Événements à venir</h4>
                    <div className="space-y-3">
                      {upcomingEvents.map(event => (
                        <div key={event.id} className="bg-white rounded-lg p-3 border border-[#E9ECEF]">
                          <div className="flex items-center mb-2">
                            <span className="bg-[#2D9B8A] text-white px-2 py-1 rounded text-xs font-medium">
                              {new Date(event.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
                            </span>
                          </div>
                          <h5 className="font-medium text-[#1F6B5C] text-sm mb-1">
                            {event.title}
                          </h5>
                          <p className="text-[#6C757D] text-xs">
                            {event.location}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-[#2D9B8A] rounded-lg p-4 text-center">
                    <h4 className="text-white font-semibold mb-2">Newsletter</h4>
                    <p className="text-[#A8E6CF] text-sm mb-3">
                      Recevez nos actualités
                    </p>
                    <div className="flex">
                      <input
                        type="email"
                        placeholder="Email"
                        className="flex-1 px-3 py-2 rounded-l-lg border-0 text-sm"
                      />
                      <button className="px-4 py-2 bg-[#28A745] text-white rounded-r-lg hover:bg-green-600 transition-colors">
                        OK
                      </button>
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
                      {filteredArticles.length} articles trouvés
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#2D9B8A] focus:border-transparent">
                      <option>Plus récent</option>
                      <option>Plus lu</option>
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

                {/* Articles Grid/List */}
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map(article => (
                      <article
                        key={article.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                        onClick={() => setSelectedArticle(article)}
                      >
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
                            {new Date(article.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-[#1F6B5C] mb-3 group-hover:text-[#28A745] transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-[#6C757D] mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-[#6C757D]">
                              <span className="flex items-center">
                                <Tag className="w-4 h-4 mr-1" />
                                {article.readTime}
                              </span>
                              <span className="flex items-center">
                                <Eye className="w-4 h-4 mr-1" />
                                {article.views}
                              </span>
                            </div>
                            <button className="text-[#2D9B8A] font-medium hover:text-[#28A745] transition-colors flex items-center">
                              Lire plus
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredArticles.map(article => (
                      <article
                        key={article.id}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 cursor-pointer"
                        onClick={() => setSelectedArticle(article)}
                      >
                        <div className="flex flex-col md:flex-row gap-6">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full md:w-48 h-32 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                              <span className={`${getCategoryColor(article.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                                {article.category}
                              </span>
                              <span className="text-[#6C757D] text-sm">{article.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#1F6B5C] mb-2 hover:text-[#28A745] transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-[#6C757D] mb-4">
                              {article.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-[#6C757D]">
                                <span>{article.author}</span>
                                <span>•</span>
                                <span>{article.readTime}</span>
                                <span>•</span>
                                <span>{article.views} vues</span>
                              </div>
                              <button className="text-[#2D9B8A] font-medium hover:text-[#28A745] transition-colors">
                                Lire plus
                              </button>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
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
        </>
      )}

      {activeTab === 'evenements' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Events Sidebar */}
            <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-[#F8F9FA] rounded-lg p-6 space-y-6">
                <div className="flex items-center justify-between lg:hidden">
                  <h3 className="text-lg font-bold text-[#1F6B5C]">Filtres</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-[#6C757D] hover:text-[#2D9B8A]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Recherche Événements */}
                <div>
                  <label className="block text-sm font-medium text-[#1F6B5C] mb-2">
                    Rechercher un événement
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6C757D] w-4 h-4" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Titre, lieu, organisateur..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D9B8A] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Types d'événements */}
                <div>
                  <h4 className="font-medium text-[#1F6B5C] mb-3">Types d'événements</h4>
                  <div className="space-y-2">
                    {eventTypes.map(type => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-[#2D9B8A] focus:ring-[#2D9B8A]"
                          checked={filters.eventTypes.includes(type)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFilters(prev => ({ ...prev, eventTypes: [...prev.eventTypes, type] }));
                            } else {
                              setFilters(prev => ({ ...prev, eventTypes: prev.eventTypes.filter(t => t !== type) }));
                            }
                          }}
                        />
                        <span className="ml-2 text-sm text-[#6C757D]">
                          {type} ({events.filter(e => e.type === type).length})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Statut événements */}
                <div>
                  <h4 className="font-medium text-[#1F6B5C] mb-3">Statut</h4>
                  <div className="space-y-2">
                    {eventStatuses.map(status => (
                      <label key={status} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-[#2D9B8A] focus:ring-[#2D9B8A]"
                          checked={filters.eventStatus.includes(status)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFilters(prev => ({ ...prev, eventStatus: [...prev.eventStatus, status] }));
                            } else {
                              setFilters(prev => ({ ...prev, eventStatus: prev.eventStatus.filter(s => s !== status) }));
                            }
                          }}
                        />
                        <span className="ml-2 text-sm text-[#6C757D]">
                          {status} ({events.filter(e => e.status === status).length})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Créer un événement */}
                <div className="bg-[#2D9B8A] rounded-lg p-4 text-center">
                  <h4 className="text-white font-semibold mb-2">Organiser un événement</h4>
                  <p className="text-[#A8E6CF] text-sm mb-3">
                    Proposez votre événement à la communauté ACA
                  </p>
                  <button className="w-full px-4 py-2 bg-[#28A745] text-white rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Proposer un événement
                  </button>
                </div>
              </div>
            </div>

            {/* Events Main Content */}
            <div className="flex-1">
              {/* Events Controls */}
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
                    {filteredEvents.length} événements trouvés
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#2D9B8A] focus:border-transparent">
                    <option>Date croissante</option>
                    <option>Date décroissante</option>
                    <option>Alphabétique</option>
                    <option>Plus populaire</option>
                  </select>
                  
                  <div className="flex border border-[#E9ECEF] rounded-lg">
                    <button
                      onClick={() => setCalendarView('month')}
                      className={`p-2 ${calendarView === 'month' ? 'bg-[#2D9B8A] text-white' : 'text-[#6C757D] hover:text-[#2D9B8A]'}`}
                    >
                      <Calendar className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCalendarView('list')}
                      className={`p-2 ${calendarView === 'list' ? 'bg-[#2D9B8A] text-white' : 'text-[#6C757D] hover:text-[#2D9B8A]'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {calendarView === 'month' ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Calendar */}
                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-[#1F6B5C]">
                          {currentMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                        </h3>
                        <div className="flex space-x-2">
                          <button onClick={prevMonth} className="p-1 hover:bg-[#A8E6CF] rounded">
                            <ChevronLeft className="w-4 h-4 text-[#2D9B8A]" />
                          </button>
                          <button onClick={nextMonth} className="p-1 hover:bg-[#A8E6CF] rounded">
                            <ChevronRight className="w-4 h-4 text-[#2D9B8A]" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(day => (
                          <div key={day} className="text-center text-sm font-medium text-[#6C757D] p-2">
                            {day}
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: getFirstDayOfMonth(currentMonth) }, (_, i) => (
                          <div key={`empty-${i}`} className="p-2"></div>
                        ))}
                        {Array.from({ length: getDaysInMonth(currentMonth) }, (_, i) => {
                          const day = i + 1;
                          const dayEvents = getEventsForDate(day);
                          return (
                            <div
                              key={day}
                              className={`p-2 text-center text-sm rounded cursor-pointer transition-colors relative ${
                                dayEvents.length > 0
                                  ? 'bg-[#2D9B8A] text-white font-bold'
                                  : 'hover:bg-[#A8E6CF] text-[#1F6B5C]'
                              }`}
                            >
                              {day}
                              {dayEvents.length > 0 && (
                                <div className="absolute top-0 right-0 w-2 h-2 bg-[#28A745] rounded-full"></div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Events List */}
                  <div className="lg:col-span-2 space-y-6">
                    {filteredEvents.map((event) => (
                      <div
                        key={event.id}
                        className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                          event.isHighlighted ? 'border-l-4 border-[#28A745]' : 'border-l-4 border-[#2D9B8A]'
                        }`}
                        onClick={() => setSelectedEvent(event)}
                      >
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          {/* Event Date */}
                          <div className="flex-shrink-0">
                            <div className={`${getEventTypeColor(event.type)} text-white rounded-lg p-4 text-center min-w-[80px]`}>
                              <div className="text-2xl font-bold">
                                {new Date(event.date).getDate()}
                              </div>
                              <div className="text-sm uppercase">
                                {new Date(event.date).toLocaleDateString('fr-FR', { month: 'short' })}
                              </div>
                            </div>
                          </div>

                          {/* Event Details */}
                          <div className="flex-grow">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-bold text-[#1F6B5C] group-hover:text-[#2D9B8A] transition-colors">
                                {event.title}
                              </h3>
                              <div className="flex items-center space-x-2">
                                {event.isHighlighted && (
                                  <span className="bg-[#28A745] text-white px-2 py-1 rounded-full text-xs font-medium">
                                    Événement phare
                                  </span>
                                )}
                                <span className={`${getEventTypeColor(event.type)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                                  {event.type}
                                </span>
                              </div>
                            </div>

                            <p className="text-[#6C757D] mb-4 line-clamp-2">
                              {event.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#6C757D] mb-4">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>{formatEventDate(event.date, event.endDate)}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>{event.time} - {event.endTime}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>{event.location}, {event.city}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-2" />
                                <span>{event.participants}/{event.maxParticipants} participants</span>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                              <button className="px-6 py-2 bg-[#2D9B8A] text-white rounded-lg hover:bg-[#1F6B5C] transition-colors">
                                {event.registrationRequired ? 'S\'inscrire' : 'Voir détails'}
                              </button>
                              <button className="px-6 py-2 border border-[#2D9B8A] text-[#2D9B8A] rounded-lg hover:bg-[#2D9B8A] hover:text-white transition-colors">
                                Plus d'infos
                              </button>
                              <span className="text-sm text-[#28A745] font-medium self-center">
                                {event.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* List View */
                <div className="space-y-6">
                  {filteredEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                        event.isHighlighted ? 'border-l-4 border-[#28A745]' : 'border-l-4 border-[#2D9B8A]'
                      }`}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full lg:w-64 h-48 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-2xl font-bold text-[#1F6B5C] hover:text-[#2D9B8A] transition-colors">
                              {event.title}
                            </h3>
                            <div className="flex items-center space-x-2">
                              {event.isHighlighted && (
                                <span className="bg-[#28A745] text-white px-2 py-1 rounded-full text-xs font-medium">
                                  Événement phare
                                </span>
                              )}
                              <span className={`${getEventTypeColor(event.type)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                                {event.type}
                              </span>
                              <span className={`${getStatusColor(event.status)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                                {event.status}
                              </span>
                            </div>
                          </div>

                          <p className="text-[#6C757D] mb-4">
                            {event.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-[#6C757D] mb-6">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span>{formatEventDate(event.date, event.endDate)}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              <span>{event.time} - {event.endTime}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-2" />
                              <span>{event.participants}/{event.maxParticipants}</span>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="flex flex-wrap gap-2">
                              {event.tags.map((tag, index) => (
                                <span key={index} className="bg-[#A8E6CF] text-[#1F6B5C] px-2 py-1 rounded-full text-xs">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-[#28A745] font-medium">
                                {event.price}
                              </span>
                              <button className="px-6 py-2 bg-[#2D9B8A] text-white rounded-lg hover:bg-[#1F6B5C] transition-colors">
                                {event.registrationRequired ? 'S\'inscrire' : 'Voir détails'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal Article Détaillé */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className={`${getCategoryColor(selectedArticle.category)} text-white px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block`}>
                  {selectedArticle.category}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {selectedArticle.title}
                </h1>
                <div className="flex items-center space-x-4 text-white/80 text-sm">
                  <span>{selectedArticle.author}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                  <span>•</span>
                  <span>{selectedArticle.views} vues</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center px-4 py-2 text-[#2D9B8A] hover:bg-[#A8E6CF] rounded-lg transition-colors">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </button>
                  <button className="flex items-center px-4 py-2 text-[#2D9B8A] hover:bg-[#A8E6CF] rounded-lg transition-colors">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Sauvegarder
                  </button>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-[#343A40] leading-relaxed mb-6">
                  {selectedArticle.excerpt}
                </p>
                <p className="text-[#343A40] leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-[#343A40] leading-relaxed mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
                {selectedArticle.tags && (
                  <div className="mt-6 pt-6 border-t border-[#E9ECEF]">
                    <h4 className="font-medium text-[#1F6B5C] mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedArticle.tags.map((tag: string, index: number) => (
                        <span key={index} className="bg-[#A8E6CF] text-[#1F6B5C] px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Event Détaillé */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center space-x-2 mb-2">
                  {selectedEvent.isHighlighted && (
                    <span className="bg-[#28A745] text-white px-2 py-1 rounded-full text-xs font-medium">
                      Événement phare
                    </span>
                  )}
                  <span className={`${getEventTypeColor(selectedEvent.type)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {selectedEvent.type}
                  </span>
                  <span className={`${getStatusColor(selectedEvent.status)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {selectedEvent.status}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {selectedEvent.title}
                </h1>
                <div className="flex items-center space-x-4 text-white/80 text-sm">
                  <span>{formatEventDate(selectedEvent.date, selectedEvent.endDate)}</span>
                  <span>•</span>
                  <span>{selectedEvent.time} - {selectedEvent.endTime}</span>
                  <span>•</span>
                  <span>{selectedEvent.location}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-[#1F6B5C] mb-4">Description</h3>
                  <p className="text-[#343A40] leading-relaxed mb-6">
                    {selectedEvent.description}
                  </p>
                  
                  <h3 className="text-xl font-bold text-[#1F6B5C] mb-4">Programme</h3>
                  <div className="space-y-4">
                    {selectedEvent.agenda.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-[#F8F9FA] rounded-lg">
                        <div className="bg-[#2D9B8A] text-white px-3 py-1 rounded-lg text-sm font-medium min-w-[80px] text-center">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-[#1F6B5C] mb-1">{item.title}</h4>
                          <p className="text-[#6C757D] text-sm">{item.speaker}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {selectedEvent.tags && (
                    <div className="mt-6">
                      <h4 className="font-medium text-[#1F6B5C] mb-3">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedEvent.tags.map((tag: string, index: number) => (
                          <span key={index} className="bg-[#A8E6CF] text-[#1F6B5C] px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div>
                  <div className="bg-[#F8F9FA] rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-bold text-[#1F6B5C] mb-4">Informations pratiques</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <Calendar className="w-4 h-4 text-[#6C757D] mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">Date:</span>
                          <p className="text-[#6C757D]">{formatEventDate(selectedEvent.date, selectedEvent.endDate)}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-4 h-4 text-[#6C757D] mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">Horaires:</span>
                          <p className="text-[#6C757D]">{selectedEvent.time} - {selectedEvent.endTime}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 text-[#6C757D] mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">Lieu:</span>
                          <p className="text-[#6C757D]">{selectedEvent.location}</p>
                          <p className="text-[#6C757D]">{selectedEvent.city}, {selectedEvent.country}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-4 h-4 text-[#6C757D] mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">Participants:</span>
                          <p className="text-[#6C757D]">{selectedEvent.participants}/{selectedEvent.maxParticipants}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-4 h-4 text-[#6C757D] mr-2 mt-0.5">€</span>
                        <div>
                          <span className="font-medium">Tarif:</span>
                          <p className="text-[#28A745] font-medium">{selectedEvent.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {selectedEvent.registrationRequired && (
                      <button className="w-full px-6 py-3 bg-[#2D9B8A] text-white font-semibold rounded-lg hover:bg-[#1F6B5C] transition-colors">
                        S'inscrire à l'événement
                      </button>
                    )}
                    <button className="w-full px-6 py-3 border-2 border-[#2D9B8A] text-[#2D9B8A] font-semibold rounded-lg hover:bg-[#2D9B8A] hover:text-white transition-colors">
                      Ajouter au calendrier
                    </button>
                    <button className="w-full px-6 py-3 border-2 border-[#6C757D] text-[#6C757D] font-semibold rounded-lg hover:bg-[#6C757D] hover:text-white transition-colors flex items-center justify-center">
                      <Share2 className="w-4 h-4 mr-2" />
                      Partager
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

export default Actualites;