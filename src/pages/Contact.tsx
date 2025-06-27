import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Building, Globe, Facebook, Twitter, Linkedin, Youtube, CheckCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    contactReason: '',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const breadcrumbItems = [
    { label: 'Accueil', href: '#' },
    { label: 'Contact' }
  ];

  const contactReasons = [
    'Demande d\'adhésion',
    'Partenariat commercial',
    'Collaboration technique',
    'Demande d\'information',
    'Support technique',
    'Presse et médias',
    'Autre'
  ];

  const offices = [
    {
      id: 1,
      name: 'Siège Social',
      city: 'Abidjan',
      country: 'Côte d\'Ivoire',
      address: '123 Avenue de l\'Indépendance, Plateau',
      postalCode: 'BP 1234, Abidjan 01',
      phone: '+225 27 20 30 40 50',
      email: 'contact@aca-coton.org',
      hours: 'Lun-Ven: 8h00-17h00',
      isMain: true
    },
    {
      id: 2,
      name: 'Bureau Régional Ouest',
      city: 'Dakar',
      country: 'Sénégal',
      address: '45 Rue de la République, Dakar',
      postalCode: 'BP 5678, Dakar',
      phone: '+221 33 824 50 60',
      email: 'dakar@aca-coton.org',
      hours: 'Lun-Ven: 8h30-17h30',
      isMain: false
    },
    {
      id: 3,
      name: 'Bureau Régional Centre',
      city: 'Ouagadougou',
      country: 'Burkina Faso',
      address: '78 Avenue Kwame Nkrumah, Ouaga 2000',
      postalCode: 'BP 9012, Ouagadougou',
      phone: '+226 25 30 40 50',
      email: 'ouagadougou@aca-coton.org',
      hours: 'Lun-Ven: 8h00-17h00',
      isMain: false
    }
  ];

  const departments = [
    {
      name: 'Direction Générale',
      email: 'direction@aca-coton.org',
      phone: '+225 27 20 30 40 51',
      description: 'Questions stratégiques et partenariats institutionnels'
    },
    {
      name: 'Développement des Membres',
      email: 'membres@aca-coton.org',
      phone: '+225 27 20 30 40 52',
      description: 'Adhésions, services aux membres, networking'
    },
    {
      name: 'Programmes Techniques',
      email: 'technique@aca-coton.org',
      phone: '+225 27 20 30 40 53',
      description: 'Formation, certification, assistance technique'
    },
    {
      name: 'Communication',
      email: 'communication@aca-coton.org',
      phone: '+225 27 20 30 40 54',
      description: 'Presse, événements, publications'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organization: '',
        subject: '',
        message: '',
        contactReason: '',
        preferredContact: 'email'
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Breadcrumb items={breadcrumbItems} />
        
        <section className="py-16 bg-[#F8F9FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <CheckCircle className="w-20 h-20 text-[#28A745] mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-[#1F6B5C] mb-4">
                Message envoyé avec succès !
              </h1>
              <p className="text-lg text-[#6C757D] mb-8">
                Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais, généralement sous 24 heures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-[#2D9B8A] text-white font-semibold rounded-lg hover:bg-[#1F6B5C] transition-colors"
                >
                  Envoyer un autre message
                </button>
                <button 
                  onClick={() => window.location.href = '#'}
                  className="px-8 py-3 border-2 border-[#2D9B8A] text-[#2D9B8A] font-semibold rounded-lg hover:bg-[#2D9B8A] hover:text-white transition-colors"
                >
                  Retour à l'accueil
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

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
            Contactez-nous
          </h1>
          <p className="text-xl text-[#A8E6CF] mb-8 max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner dans vos projets cotonniers
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+225 27 20 30 40 50</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>contact@aca-coton.org</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>Lun-Ven: 8h00-17h00</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#1F6B5C] mb-6">
                Envoyez-nous un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1F6B5C] mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D9B8A] focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1F6B5C] mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D9B8A] focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1F6B5C] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D9B8A] focus:border-transparent"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1F6B5C] mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D9B8A] focus:border-transparent"
                      placeholder="+225 XX XX XX XX"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label className="block text-sm font-medium text-[#1F6B5C] mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D9B8A] focus:border-transparent"
                    placeholder="Nom de votre entreprise ou organisation"
                  />
                </div>

                {/* Contact Reason */}
                <div>
                  <label className="block text-sm font-medium text-[#1F6B5C] mb-2">
                    Motif de contact *
                  </label>
                  <select
                    name="contactReason"
                    value={formData.contactReason}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D9B8A] focus:border-transparent"
                  >
                    <option value="">Sélectionnez un motif</option>
                    {contactReasons.map(reason => (
                      <option key={reason} value={reason}>{reason}</option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-[#1F6B5C] mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D9B8A] focus:border-transparent"
                    placeholder="Résumé de votre demande"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-[#1F6B5C] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D9B8A] focus:border-transparent resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-medium text-[#1F6B5C] mb-3">
                    Méthode de contact préférée
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="text-[#2D9B8A] focus:ring-[#2D9B8A] mr-2"
                      />
                      <span className="text-sm text-[#6C757D]">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="text-[#2D9B8A] focus:ring-[#2D9B8A] mr-2"
                      />
                      <span className="text-sm text-[#6C757D]">Téléphone</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[#2D9B8A] text-white font-semibold rounded-lg hover:bg-[#1F6B5C] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-[#F8F9FA] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#1F6B5C] mb-4">
                Contact Rapide
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[#2D9B8A] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#1F6B5C]">Téléphone</p>
                    <p className="text-[#6C757D]">+225 27 20 30 40 50</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-[#2D9B8A] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#1F6B5C]">Email</p>
                    <p className="text-[#6C757D]">contact@aca-coton.org</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#2D9B8A] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#1F6B5C]">Horaires</p>
                    <p className="text-[#6C757D]">Lun-Ven: 8h00-17h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#1F6B5C] mb-4">
                Contacts Spécialisés
              </h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border-b border-[#E9ECEF] last:border-b-0 pb-4 last:pb-0">
                    <h4 className="font-medium text-[#1F6B5C] mb-1">
                      {dept.name}
                    </h4>
                    <p className="text-sm text-[#6C757D] mb-2">
                      {dept.description}
                    </p>
                    <div className="flex flex-col space-y-1 text-sm">
                      <a href={`mailto:${dept.email}`} className="text-[#2D9B8A] hover:underline">
                        {dept.email}
                      </a>
                      <a href={`tel:${dept.phone}`} className="text-[#2D9B8A] hover:underline">
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-[#2D9B8A] rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                Suivez-nous
              </h3>
              <p className="text-[#A8E6CF] mb-6">
                Restez connecté avec l'ACA sur les réseaux sociaux
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offices Section */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F6B5C] mb-4">
              Nos Bureaux
            </h2>
            <p className="text-lg text-[#6C757D] max-w-2xl mx-auto">
              L'ACA dispose de plusieurs bureaux à travers l'Afrique pour mieux vous servir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div
                key={office.id}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  office.isMain ? 'border-t-4 border-[#28A745]' : 'border-t-4 border-[#2D9B8A]'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1F6B5C] mb-1">
                      {office.name}
                    </h3>
                    <p className="text-[#2D9B8A] font-medium">
                      {office.city}, {office.country}
                    </p>
                  </div>
                  {office.isMain && (
                    <span className="bg-[#28A745] text-white px-2 py-1 rounded-full text-xs font-medium">
                      Siège
                    </span>
                  )}
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-[#6C757D] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#343A40]">{office.address}</p>
                      <p className="text-[#6C757D]">{office.postalCode}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-[#6C757D] mr-2 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-[#2D9B8A] hover:underline">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-[#6C757D] mr-2 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-[#2D9B8A] hover:underline">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-[#6C757D] mr-2 flex-shrink-0" />
                    <span className="text-[#6C757D]">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F6B5C] mb-4">
              Nous Localiser
            </h2>
            <p className="text-lg text-[#6C757D]">
              Siège social - Abidjan, Côte d'Ivoire
            </p>
          </div>
          
          <div className="bg-[#F8F9FA] rounded-xl p-8 text-center">
            <div className="w-full h-96 bg-gradient-to-br from-[#2D9B8A] to-[#A8E6CF] rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Carte Interactive</h3>
                <p className="text-lg opacity-90">
                  123 Avenue de l'Indépendance, Plateau<br />
                  Abidjan, Côte d'Ivoire
                </p>
                <button className="mt-4 px-6 py-2 bg-white text-[#2D9B8A] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Voir sur Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;