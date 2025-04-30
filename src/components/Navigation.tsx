import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  scrolled: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold relative group">
            zk<span className="text-purple-700">λ</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="font-medium hover:text-purple-700 transition-colors relative group"
          >
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#security"
            className="font-medium hover:text-purple-700 transition-colors relative group"
          >
            Security
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#technical"
            className="font-medium hover:text-purple-700 transition-colors relative group"
          >
            Technical
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <button
            onClick={() => {
              window.location.href = "mailto:info@zk-lokomotive.xyz";
            }}
            className="bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-purple-700 
            transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Contact Sales
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-40 transition-transform duration-300 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a
            href="#features"
            className="text-2xl font-medium hover:text-purple-700 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#security"
            className="text-2xl font-medium hover:text-purple-700 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Security
          </a>
          <a
            href="#technical"
            className="text-2xl font-medium hover:text-purple-700 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Technical
          </a>
          <button
            onClick={() => {
              window.location.href = "mailto:info@zk-lokomotive.xyz";
            }}
            className="bg-gray-900 text-white px-8 py-3 rounded-lg text-xl hover:bg-purple-700 
            transition-colors shadow-lg"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </header>
  );
};
