"use client";

import React, { useState } from 'react';
import { Calendar, ArrowRight, Search, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { blogArticles, categories } from '@/data/blog/articles';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = blogArticles.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <Image 
                  src="/logo_estep_rdw.svg" 
                  alt="KentekenEstep.nl Logo" 
                  width={40} 
                  height={40} 
                  className="h-10 w-auto"
                />
                <div className="text-2xl font-bold text-slate-700">KentekenEstep.nl</div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-600 hover:text-slate-800">Home</Link>
              <Link href="/vergelijken" className="text-slate-600 hover:text-slate-800">Vergelijken</Link>
              <Link href="/rdw-info" className="text-slate-600 hover:text-slate-800">E-Step Regelgeving</Link>
              <Link href="/blog" className="text-slate-600 hover:text-slate-800 font-semibold">Blog</Link>
              <Link href="/contact" className="text-slate-600 hover:text-slate-800">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              E-Step <span className="text-orange-400">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Laatste nieuws, reviews en informatie over RDW goedgekeurde e-steps
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Zoek artikelen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-slate-600 hover:bg-orange-50 border border-slate-300'
                  }`}
                >
                  {category === 'all' ? 'Alle Categorieën' : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Uitgelichte Artikelen</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogArticles.filter(post => post.featured).slice(0, 2).map(post => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    {post.image?.startsWith('http') ? (
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-lg">{post.category}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        ⭐ Uitgelicht
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('nl-NL')}
                        </div>
                      </div>
                      <span className="text-orange-600 font-medium group-hover:underline">
                        Lees meer →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* All Articles */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            {searchTerm || selectedCategory !== 'all' ? 'Zoekresultaten' : 'Alle Artikelen'}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg mb-4">Geen artikelen gevonden.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Toon alle artikelen
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredPosts.map(post => (
                <Link href={`/blog/${post.slug}`} key={post.id}>
                  <article className="bg-white rounded-lg shadow border hover:shadow-lg transition-shadow group">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        {post.image?.startsWith('http') ? (
                          <Image 
                            src={post.image} 
                            alt={post.title}
                            width={400}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                            <span className="text-slate-600 font-bold">{post.category}</span>
                          </div>
                        )}
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm font-medium">
                            {post.category}
                          </span>
                          <span className="text-slate-500 text-sm">•</span>
                          <span className="text-slate-500 text-sm">{post.readTime} lezen</span>
                          {post.featured && (
                            <>
                              <span className="text-slate-500 text-sm">•</span>
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                                Uitgelicht
                              </span>
                            </>
                          )}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-600 mb-4">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map(tag => (
                            <span key={tag} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-sm">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-slate-500">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.date).toLocaleDateString('nl-NL')}
                            </div>
                          </div>
                          <span className="bg-slate-700 text-white px-4 py-2 rounded-lg group-hover:bg-slate-800 transition-colors flex items-center gap-1">
                            Lees artikel <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Newsletter Signup */}
      <section className="bg-slate-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Blijf op de hoogte</h2>
          <p className="text-xl text-slate-200 mb-8">
            Ontvang de laatste updates over RDW goedkeuringen en e-step regelgeving
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Jouw email adres"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition-colors">
              Aanmelden
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">KentekenEstep.nl</div>
              <p className="text-slate-400">
                Onafhankelijke informatie over e-steps en RDW regelgeving
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Vergelijken</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/vergelijken" className="hover:text-white">RDW Goedgekeurd</Link></li>
                <li><Link href="/vergelijken" className="hover:text-white">Top 3 Modellen</Link></li>
                <li><Link href="/vergelijken" className="hover:text-white">Prijsvergelijking</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Informatie</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/rdw-info" className="hover:text-white">E-Step Regelgeving</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/contact" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 KentekenEstep.nl. Affiliate links kunnen commissie opleveren.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}