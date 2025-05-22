import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const stats = [
    { title: 'Total Events', value: '24', change: '+12%', icon: '🎉' },
    { title: 'Active Tickets', value: '1,234', change: '+8%', icon: '🎫' },
    { title: 'Total Revenue', value: '$45,678', change: '+23%', icon: '💰' },
    { title: 'Attendees', value: '3,456', change: '+15%', icon: '👥' },
  ];

  const upcomingEvents = [
    {
      name: 'Tech Conference 2024',
      date: 'Mar 15, 2024',
      attendees: 234,
      status: 'Upcoming',
    },
    {
      name: 'Design Workshop',
      date: 'Mar 20, 2024',
      attendees: 89,
      status: 'Upcoming',
    },
    {
      name: 'Networking Mixer',
      date: 'Mar 25, 2024',
      attendees: 156,
      status: 'Upcoming',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                <p className="text-sm text-green-500 mt-1">{stat.change}</p>
              </div>
              <div className="text-3xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Upcoming Events</h2>
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <h3 className="font-medium text-gray-800">{event.name}</h3>
                <p className="text-sm text-gray-600">{event.date}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">{event.attendees} attendees</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {event.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/create-event">
          <button className="w-full p-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            Create New Event
          </button>
        </Link>
        <Link href="/analytics">
          <button className="w-full p-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            View Reports
          </button>
        </Link>
        <Link href="/tickets">
          <button className="w-full p-6 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            Manage Tickets
          </button>
        </Link>
      </div>
    </div>
  );
} 