import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Amadou Diallo',
      position: 'Directeur Général, CottonCorp Mali',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'L\'ACA a transformé notre approche de la production cotonnière. Grâce à leur accompagnement, nous avons amélioré notre rendement de 40% en deux ans.',
      country: 'Mali'
    },
    {
      id: 2,
      name: 'Fatima Ouedraogo',
      position: 'Présidente, Coopérative des Femmes Productrices',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Le réseau ACA nous permet d\'accéder à de nouveaux marchés et d\'échanger les meilleures pratiques avec nos homologues africains.',
      country: 'Burkina Faso'
    },
    {
      id: 3,
      name: 'Jean-Baptiste Koffi',
      position: 'Responsable Innovation, TextileAfric',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Les formations et les outils technologiques proposés par l\'ACA nous ont aidés à moderniser nos processus de transformation.',
      country: 'Côte d\'Ivoire'
    }
  ];

  const partners = [
    { name: 'AfDB', logo: 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=AfDB' },
    { name: 'UEMOA', logo: 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=UEMOA' },
    { name: 'CEDEAO', logo: 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=CEDEAO' },
    { name: 'FAO', logo: 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=FAO' },
    { name: 'ONUDI', logo: 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=ONUDI' },
    { name: 'ICAC', logo: 'https://via.placeholder.com/120x60/2D9B8A/FFFFFF?text=ICAC' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F6B5C] mb-4">
              Témoignages de nos Membres
            </h2>
            <p className="text-lg text-[#6C757D] max-w-2xl mx-auto">
              Découvrez comment l'ACA accompagne ses membres vers l'excellence
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6">
                <Quote className="w-12 h-12 text-[#A8E6CF]" />
              </div>

              {/* Content */}
              <div className="text-center pt-8">
                <blockquote className="text-xl md:text-2xl text-[#343A40] mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-[#2D9B8A]"
                  />
                  <div className="text-left">
                    <div className="font-bold text-[#1F6B5C] text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-[#6C757D]">
                      {testimonials[currentTestimonial].position}
                    </div>
                    <div className="text-[#2D9B8A] font-medium">
                      {testimonials[currentTestimonial].country}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-[#A8E6CF] transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-[#2D9B8A]" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-[#A8E6CF] transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-[#2D9B8A]" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-[#2D9B8A] scale-125' : 'bg-[#A8E6CF] hover:bg-[#2D9B8A]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#1F6B5C] mb-4">
              Nos Partenaires Stratégiques
            </h3>
            <p className="text-[#6C757D]">
              Ensemble pour le développement de la filière cotonnière africaine
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 grayscale hover:grayscale-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;