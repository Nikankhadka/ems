'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Sample events data - in a real app, this would come from an API
const events = [
  {
    id: '1',
    title: 'Tech Conference 2024',
    description: 'Join us for the biggest tech conference of the year featuring industry leaders and innovative workshops.',
    date: '2024-03-15',
    time: '09:00',
    location: 'Convention Center, San Francisco',
    category: 'conference',
    price: '$199',
    capacity: 500,
    registered: 234,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    organizer: 'Tech Events Inc.',
    organizerEmail: 'contact@techevents.com',
    agenda: [
      { time: '09:00', title: 'Registration and Welcome Coffee' },
      { time: '10:00', title: 'Keynote Speech: Future of Technology' },
      { time: '11:30', title: 'Panel Discussion: AI and Machine Learning' },
      { time: '13:00', title: 'Lunch Break' },
      { time: '14:30', title: 'Workshop Sessions' },
      { time: '16:30', title: 'Networking Session' },
      { time: '18:00', title: 'Closing Remarks' },
    ],
  },
  // Add other events here...
];

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const event = events.find(e => e.id === params.id);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Event Not Found</h1>
            <p className="mt-2 text-gray-600">The event you're looking for doesn't exist.</p>
            <Link
              href="/events"
              className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-blue-500 rounded-md hover:from-pink-600 hover:to-blue-600"
            >
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Events
          </button>
        </div>

        {/* Event Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-96">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="px-3 py-1 text-sm font-medium bg-pink-500 rounded-full">
                {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
              </span>
              <h1 className="mt-2 text-3xl font-bold">{event.title}</h1>
              <div className="mt-2 flex items-center space-x-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(event.date).toLocaleDateString()} at {event.time}
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose max-w-none">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Event</h2>
                  <p className="text-gray-600">{event.description}</p>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Agenda</h2>
                  <div className="space-y-4">
                    {event.agenda.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-20 text-sm font-medium text-gray-900">
                          {item.time}
                        </div>
                        <div className="ml-4 text-sm text-gray-600">
                          {item.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{event.price}</div>
                    <div className="text-sm text-gray-600 mb-4">
                      {event.registered} / {event.capacity} registered
                    </div>
                    <button
                      onClick={() => router.push(`/events/${event.id}/register`)}
                      className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-blue-500 rounded-md hover:from-pink-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >
                      Register Now
                    </button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Organizer</h3>
                    <div className="text-sm text-gray-600">
                      <p>{event.organizer}</p>
                      <p>{event.organizerEmail}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 