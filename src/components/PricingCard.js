import React from 'react';
import { Check, Star } from 'lucide-react';

const PricingCard = ({ plan }) => {
  return (
         <div className={`card relative ${plan.popular ? 'ring-2 ring-black' : ''}`}>
       {plan.popular && (
         <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
           <div className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
             <Star className="w-4 h-4" />
             <span>Most Popular</span>
           </div>
         </div>
       )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.plan}</h3>
                 <div className="text-4xl font-bold text-black mb-2">{plan.price}</div>
        <p className="text-gray-600">{plan.description}</p>
      </div>

      <div className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
                         <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
               <Check className="w-3 h-3 text-black" />
             </div>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
          plan.popular ? 'btn-primary' : 'btn-secondary'
        }`}
      >
        {plan.popular ? 'Get Started' : 'Choose Plan'}
      </button>
    </div>
  );
};

export default PricingCard;
