import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Calendar, Trophy } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Dumbbell },
    { path: '/pricing', label: 'Pricing', icon: Calendar },
    { path: '/dashboard', label: 'Dashboard', icon: Trophy },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
                         <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden bg-gray-100">
               <img 
                 src="/pac-removebg-preview.png" 
                 alt="The PAC Logo" 
                 className="w-full h-full object-contain"
                 onError={(e) => {
                   console.error('Image failed to load:', e.target.src);
                   e.target.style.display = 'none';
                 }}
               />
             </div>
            <span className="text-xl font-bold text-gray-900">The PAC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                                   className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
                   isActive
                     ? 'text-black bg-gray-100'
                     : 'text-gray-600 hover:text-black hover:bg-gray-50'
                 }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

                     {/* Mobile menu button */}
           <div className="md:hidden">
             <button 
               className="p-2 rounded-lg text-gray-600 hover:text-black hover:bg-gray-50"
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               </svg>
             </button>
           </div>
        </div>
      </div>

             {/* Mobile Navigation */}
       <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
         <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                                 className={`flex items-center space-x-3 px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
                   isActive
                     ? 'text-black bg-gray-100'
                     : 'text-gray-600 hover:text-black hover:bg-gray-50'
                 }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
