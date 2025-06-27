import React, { useState, useEffect, useRef } from 'react';
import { Users, Globe, Package, TrendingUp } from 'lucide-react';

const KeyStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ members: 0, countries: 0, cotton: 0, projects: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Users,
      value: 150,
      label: 'Membres Actifs',
      color: '#A8E6CF',
      suffix: '+'
    },
    {
      icon: Globe,
      value: 25,
      label: 'Pays Représentés',
      color: '#A8E6CF',
      suffix: ''
    },
    {
      icon: Package,
      value: 2500,
      label: 'Tonnes de Coton',
      color: '#A8E6CF',
      suffix: 'K'
    },
    {
      icon: TrendingUp,
      value: 45,
      label: 'Projets en Cours',
      color: '#A8E6CF',
      suffix: ''
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat, index) => {
        let currentCount = 0;
        const increment = stat.value / steps;
        
        const timer = setInterval(() => {
          currentCount += increment;
          if (currentCount >= stat.value) {
            currentCount = stat.value;
            clearInterval(timer);
          }
          
          setCounts(prev => ({
            ...prev,
            [index === 0 ? 'members' : index === 1 ? 'countries' : index === 2 ? 'cotton' : 'projects']: Math.floor(currentCount)
          }));
        }, stepDuration);
      });
    }
  }, [isVisible]);

  const getCountValue = (index: number) => {
    switch (index) {
      case 0: return counts.members;
      case 1: return counts.countries;
      case 2: return counts.cotton;
      case 3: return counts.projects;
      default: return 0;
    }
  };

  return (
    <section ref={sectionRef} className="py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#2D9B8A]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 rounded-full" style={{ backgroundColor: stat.color }}>
                    <IconComponent className="w-8 h-8 text-[#1F6B5C]" />
                  </div>
                  <div className="text-4xl font-bold text-[#1F6B5C] mb-2">
                    {getCountValue(index)}{stat.suffix}
                  </div>
                  <div className="text-[#6C757D] font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyStats;