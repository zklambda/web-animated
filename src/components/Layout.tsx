import React, { useState, useEffect } from 'react';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-hubot min-h-screen bg-gradient-to-b from-[#feffaf] to-white text-gray-900">
      <Navigation scrolled={scrolled} />
      <main>{children}</main>
    </div>
  );
};