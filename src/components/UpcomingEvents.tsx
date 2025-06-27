import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const UpcomingEvents = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const events = [
    {
      id: 1,
      date: '2024-11-25',
      title: 'Forum International du Coton Africain',
      location: 'Abidjan, Côte d\'Ivoire',
      time: '09:00 - 17:00',
      participants: 150,
      type: 'Conférence',
      status: 'upcoming'
    },
    {
      id: 2,
      date: '2024-12-05',
      title: 'Atelier Innovation Textile',
      location: 'Dakar, Sénégal',
      time: '14:00 - 18:00',
      participants: 80,
      type: 'Atelier',
      status: 'upcoming'
    },
    {
      id: 3,
      date: '2024-12-15',
      title: 'Assemblée Générale ACA',
      location: 'Ouagadougou, Burkina Faso',
      time: '10:00 - 16:00',
      participants: 200,
      type: 'Assemblée',
      status: 'upcoming'
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Conférence': return 'bg-[#28A745]';
      case 'Atelier': return 'bg-[#FD7E14]';
      case 'Assemblée': return 'bg-[#2D9B8A]';
      default: return 'bg-[#6C757D]';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('fr-FR', { month: 'short' }),
      year: date.getFullYear()
    };
  };

  // Simple calendar component
  const Calendar = () => {
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptyDays = Array.from({ length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 }, (_, i) => i);

    const hasEvent = (day: number) => {
      const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      return events.some(event => event.date === dateStr);
    };

    const nextMonth = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const prevMonth = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    return (
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
          {emptyDays.map(day => (
            <div key={`empty-${day}`} className="p-2"></div>
          ))}
          {days.map(day => (
            <div
              key={day}
              className={`p-2 text-center text-sm rounded cursor-pointer transition-colors ${
                hasEvent(day)
                  ? 'bg-[#2D9B8A] text-white font-bold'
                  : 'hover:bg-[#A8E6CF] text-[#1F6B5C]'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F6B5C] mb-4">
            Événements à Venir
          </h2>
          <p className="text-lg text-[#6C757D] max-w-2xl mx-auto">
            Participez aux événements qui façonnent l'avenir de la filière cotonnière africaine
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-1">
            <Calendar />
          </div>

          {/* Events List */}
          <div className="lg:col-span-2 space-y-6">
            {events.map((event) => {
              const eventDate = formatDate(event.date);
              return (
                <div
                  key={event.id}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#2D9B8A]"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Date */}
                    <div className="flex-shrink-0">
                      <div className="bg-[#28A745] text-white rounded-lg p-4 text-center min-w-[80px]">
                        <div className="text-2xl font-bold">{eventDate.day}</div>
                        <div className="text-sm uppercase">{eventDate.month}</div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-grow">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-[#1F6B5C] group-hover:text-[#2D9B8A] transition-colors">
                          {event.title}
                        </h3>
                        <span className={`${getEventTypeColor(event.type)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                          {event.type}
                        </span>
                      </div>

                      <div className="space-y-2 text-[#6C757D]">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{event.participants} participants attendus</span>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-col sm:flex-row gap-3">
                        <button className="px-6 py-2 bg-[#2D9B8A] text-white rounded-lg hover:bg-[#1F6B5C] transition-colors">
                          S'inscrire
                        </button>
                        <button className="px-6 py-2 border border-[#2D9B8A] text-[#2D9B8A] rounded-lg hover:bg-[#2D9B8A] hover:text-white transition-colors">
                          Voir détails
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;