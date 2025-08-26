import React, { useState, useEffect } from 'react';
import { Users, Clock, Zap, Shield } from 'lucide-react';
import PricingCard from '../components/PricingCard';
import pricingData from '../data/pricing.json';

const Pricing = () => {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    setPricing(pricingData.pricing);
  }, []);

  const features = [
    {
      icon: Users,
      title: "Expert Coaches",
      description: "Certified CrossFit trainers with years of experience"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Multiple sessions daily to fit your busy lifestyle"
    },
    {
      icon: Zap,
      title: "High-Intensity Workouts",
      description: "Constantly varied functional movements at high intensity"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Proper form guidance and injury prevention focus"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Fitness Journey
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Flexible membership options designed to help you achieve your fitness goals. 
            Whether you're just starting out or a seasoned athlete, we have a plan for you.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricing.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose The PAC?
            </h2>
            <p className="text-lg text-gray-600">
              Experience the difference with our comprehensive CrossFit program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                               <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <Icon className="w-8 h-8 text-black" />
             </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if I'm new to CrossFit?
              </h3>
              <p className="text-gray-600">
                No problem! We offer beginner-friendly sessions and our coaches will guide you through proper form and technique. 
                Everyone starts somewhere, and we're here to support your journey.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I cancel my membership?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your membership at any time. Monthly memberships can be cancelled with 30 days notice, 
                and annual memberships have a prorated refund policy.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What equipment do I need?
              </h3>
              <p className="text-gray-600">
                We provide all the necessary equipment for your workouts. Just bring comfortable workout clothes, 
                supportive shoes, and a water bottle. We have lockers and showers available.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How often should I attend sessions?
              </h3>
              <p className="text-gray-600">
                We recommend 3-5 sessions per week for optimal results, but this varies based on your fitness level and goals. 
                Our coaches can help you create a personalized plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Fitness?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join The PAC today and start your CrossFit journey with our supportive community
          </p>
                     <button className="btn-primary bg-white text-black hover:bg-gray-100">
             Get Started Today
           </button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
