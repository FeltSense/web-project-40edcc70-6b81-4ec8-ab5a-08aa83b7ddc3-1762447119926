'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16 md:h-20">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center gap-2">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 via-teal-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg md:text-xl">C</span>
        </div>
        <span className="hidden sm:inline font-bold text-lg md:text-xl text-slate-900 tracking-tight">
          Catalyst
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <Link
          href="/"
          className="px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
        >
          Home
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        <a
          href="#about"
          className="px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
        >
          About
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
        <a
          href="#services"
          className="px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
        >
          Services
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
      </div>

      {/* CTA Button */}
      <div className="hidden md:flex items-center gap-4">
        <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-slate-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    {/* Mobile Navigation */}
    <div className="md:hidden pb-4 border-t border-slate-200/50">
      <div className="flex flex-col gap-2 pt-4">
        <Link
          href="/"
          className="px-4 py-2.5 text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-lg transition-colors duration-200"
        >
          Home
        </Link>
        <a
          href="#about"
          className="px-4 py-2.5 text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-lg transition-colors duration-200"
        >
          About
        </a>
        <a
          href="#services"
          className="px-4 py-2.5 text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-lg transition-colors duration-200"
        >
          Services
        </a>
        <button className="mt-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg w-full hover:shadow-lg transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  </div>
</nav>
  );
}