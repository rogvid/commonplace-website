'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Set initial scroll state
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/notes', label: 'Notes' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/"
            className="text-xl font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
          >
            Rógvi Dávid Arge's Commonplace Site
          </Link>

          <div className="hidden md:flex items-center">
            <div className="flex">
              {navItems.map((item) => (
                <div key={item.href} className="w-24 text-center h-8 flex items-center justify-center">
                  <Link
                    href={item.href}
                    className={`${pathname === item.href ? 'nav-link-active' : 'nav-link'}`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className={`ml-8 hidden md:inline-flex items-center px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 ${
                pathname === '/contact' ? 'ring-2 ring-indigo-300' : ''
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-900 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-200"
              style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'none' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4">
            {[...navItems, { href: '/contact', label: 'Contact' }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 ${
                  pathname === item.href 
                    ? 'text-indigo-600 font-semibold' 
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 