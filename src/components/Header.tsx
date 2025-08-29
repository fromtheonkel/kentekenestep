'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/logo_estep_rdw.svg" 
                alt="KentekenEstep.nl Logo" 
                width="40" 
                height="40" 
                className="h-10 w-auto"
              />
              <div className="text-2xl font-bold text-slate-700">
                KentekenEstep.nl
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/vergelijken" 
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              Vergelijken
            </Link>
            <Link 
              href="/rdw-info" 
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              Elektrische Step Regelgeving
            </Link>
            <Link 
              href="/blog" 
              className="text-slate-600 hover:text-slate-800 transition-colors font-semibold"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-slate-600 hover:text-slate-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link 
                href="/" 
                className="block px-3 py-2 text-slate-600 hover:text-slate-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/vergelijken" 
                className="block px-3 py-2 text-slate-600 hover:text-slate-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Vergelijken
              </Link>
              <Link 
                href="/rdw-info" 
                className="block px-3 py-2 text-slate-600 hover:text-slate-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Elektrische Step Regelgeving
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-slate-600 hover:text-slate-800 font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-slate-600 hover:text-slate-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}