import React from 'react';

const Footer = () => {
  return (
    <footer className="degen-gradient-dark text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-white bg-opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.5
      }}></div>
      
      {/* Sunset grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.2) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/bf459d76-b23a-4319-94af-016491b57411.png" 
                alt="DEGEN Logo" 
                className="h-20 w-auto mr-8 filter brightness-0 invert"
              />
            </div>
          </div>
          
          <div>
            <ul className="space-y-3 text-orange-200">
              <li>
                <a href="#" className="hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 transform inline-block relative group">
                  All Products
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 transform inline-block relative group">
                  Apparel
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 transform inline-block relative group">
                  Accessories
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <ul className="space-y-3 text-orange-200">
              <li>
                <a href="#" className="hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 transform inline-block relative group">
                  Contact Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 transform inline-block relative group">
                  Shipping Info
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 transform inline-block relative group">
                  Returns
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-orange-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-orange-300 text-sm">
              &copy; 2024 DEGEN. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-orange-300 hover:text-yellow-300 text-sm transition-colors duration-300 relative group">
                Terms of Service
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;