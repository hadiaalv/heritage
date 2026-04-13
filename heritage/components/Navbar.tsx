'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">Heritage</span>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link 
              href="/team" 
              className="text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Team
            </Link>
            <Link 
              href="/faq" 
              className="text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="rounded-md bg-blue-600 px-6 py-2 text-white font-medium hover:bg-blue-500 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <Link 
              href="/" 
              className="block px-0 py-3 text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-0 py-3 text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="block px-0 py-3 text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/team" 
              className="block px-0 py-3 text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link 
              href="/faq" 
              className="block px-0 py-3 text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="block px-0 py-3 mt-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors duration-200 text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
