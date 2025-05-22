import React from 'react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: 'Event Creation',
      description: 'Create and manage your events with ease',
      icon: '🎉',
      color: 'from-pink-500 to-purple-500',
    },
    {
      title: 'Registration & Ticketing',
      description: 'Handle registrations and ticket sales seamlessly',
      icon: '🎫',
      color: 'from-purple-500 to-blue-500',
    },
    {
      title: 'Event Marketing',
      description: 'Promote your events effectively',
      icon: '📢',
      color: 'from-blue-500 to-pink-500',
    },
    {
      title: 'Check-In & Badges',
      description: 'Streamline check-in process and print badges',
      icon: '🎪',
      color: 'from-pink-500 to-blue-500',
    },
    {
      title: 'Agenda Management',
      description: 'Organize sessions and schedules',
      icon: '📅',
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Attendee Engagement',
      description: 'Keep your attendees engaged',
      icon: '🤝',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track event performance and insights',
      icon: '📊',
      color: 'from-pink-500 to-blue-500',
    },
    {
      title: 'Mobile App',
      description: 'Access your events on the go',
      icon: '📱',
      color: 'from-blue-500 to-purple-500',
    },
  ];

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Event Management System
          </h1>
          <p className="text-lg text-gray-600">
            Your all-in-one solution for managing successful events
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link
              href={`/${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              key={index}
              className="group"
            >
              <div className={`p-6 rounded-xl bg-gradient-to-br ${feature.color} text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/dashboard">
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
} 