import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Zap } from 'lucide-react';
import SessionCard from '../components/SessionCard';
import PricingCard from '../components/PricingCard';
import sessionsData from '../data/sessions.json';
import pricingData from '../data/pricing.json';

const Home = () => {
  const [sessions, setSessions] = useState([]);
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    setSessions(sessionsData.sessions);
    setPricing(pricingData.pricing);
  }, []);

  const upcomingSessions = sessions.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-white">The PAC</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Transform your fitness journey with our premium CrossFit experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing" className="btn-primary bg-white text-black hover:bg-gray-100">
                View Pricing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/dashboard" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-primary-600">
                My Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
                             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Users className="w-8 h-8 text-black" />
               </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="text-center">
                             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Zap className="w-8 h-8 text-black" />
               </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Weekly Sessions</p>
            </div>
            <div className="text-center">
                             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Calendar className="w-8 h-8 text-black" />
               </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Open Gym Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Sessions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Sessions
            </h2>
            <p className="text-lg text-gray-600">
              Join our next CrossFit sessions and push your limits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingSessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/pricing" className="btn-primary">
              View All Sessions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600">
              Flexible options to fit your fitness goals and schedule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join The PAC today and become part of our fitness community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <Link to="/pricing" className="btn-primary bg-white text-black hover:bg-gray-100">
               Get Started Today
             </Link>
                         <Link to="/dashboard" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-black">
               View Dashboard
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
