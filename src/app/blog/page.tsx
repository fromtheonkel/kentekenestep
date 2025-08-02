"use client";

import React, { useState } from 'react';
import { Calendar, ArrowRight, Search, User } from 'lucide-react';
import Image from 'next/image';
import { blogPosts } from '@/components/blog/blogData'; // ✨ IMPORT ALLE ARTIKELEN

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const handleReadMore = (articleId: number) => {
    setSelectedArticle(articleId);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  const categories = ['all', 'Product Update', 'Markt Update', 'Product Review', 'Regelgeving'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const currentArticle = selectedArticle ? blogPosts.find(post => post.id === selectedArticle) : null;

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
              <a href="/" className="text-slate-600 hover:text-slate-800">Home</a>
              <a href="/vergelijken" className="text-slate-600 hover:text-slate-800">Vergelijken</a>
              <a href="/rdw-info" className="text-slate-600 hover:text-slate-800">E-Step Regelgeving</a>
              <a href="/blog" className="text-slate-600 hover:text-slate-800 font-semibold">Blog</a>
              <a href="/contact" className="text-slate-600 hover:text-slate-800">Contact</a>
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
              Blijf op de hoogte van de laatste ontwikkelingen in RDW regelgeving en e-step nieuws
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Detail View */}
        {currentArticle ? (
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button 
              onClick={handleBackToList}
              className="mb-8 flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors bg-white rounded-lg px-4 py-2 shadow-sm border border-slate-200 hover:shadow-md"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Terug naar overzicht
            </button>

            {/* Article Header */}
            <header className="mb-12 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                  {currentArticle.category}
                </span>
                <span className="text-slate-400 text-sm">•</span>
                <div className="flex items-center gap-1 text-slate-500 text-sm bg-slate-50 px-3 py-1 rounded-full">
                  <Calendar className="w-3 h-3" />
                  {currentArticle.readTime} lezen
                </div>
                {currentArticle.featured && (
                  <>
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                      ⭐ Uitgelicht
                    </span>
                  </>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                {currentArticle.title}
              </h1>
              
              <div className="flex items-center gap-8 text-slate-600 bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {currentArticle.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{currentArticle.author}</div>
                    <div className="text-sm text-slate-500">Auteur</div>
                  </div>
                </div>
                <div className="h-8 w-px bg-slate-300"></div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center text-white">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {new Date(currentArticle.date).toLocaleDateString('nl-NL', { 
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="text-sm text-slate-500">Gepubliceerd</div>
                  </div>
                </div>
              </div>
            </header>

            {/* Article Image */}
            <div className="mb-12 h-64 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center p-8 shadow-sm border border-slate-100 overflow-hidden">
              <img 
                src={currentArticle.image} 
                alt={currentArticle.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-orange-500 to-orange-600"></div>
              
              <div 
                dangerouslySetInnerHTML={{ __html: currentArticle.content }}
                className="article-content text-slate-700 leading-relaxed text-lg 
                [&>p]:mb-6 [&>p]:text-slate-700 [&>p]:leading-8 
                [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-12 [&>h3]:mb-6 [&>h3]:pb-3 [&>h3]:border-b-2 [&>h3]:border-orange-100 
                [&>h4]:text-xl [&>h4]:font-semibold [&>h4]:text-slate-800 [&>h4]:mt-8 [&>h4]:mb-4 
                [&>ul]:my-8 [&>ul]:space-y-4 [&>ul]:ml-0 [&>ul]:bg-slate-50 [&>ul]:rounded-xl [&>ul]:p-6 [&>ul]:border [&>ul]:border-slate-200 
                [&>li]:mb-3 [&>li]:pl-8 [&>li]:relative [&>li]:list-none [&>li]:text-slate-700 [&>li]:leading-7 [&>li]:bg-white [&>li]:rounded-lg [&>li]:p-3 [&>li]:shadow-sm [&>li]:border [&>li]:border-slate-100 
                [&>strong]:font-semibold [&>strong]:text-slate-900 [&>strong]:bg-orange-50 [&>strong]:px-2 [&>strong]:py-1 [&>strong]:rounded [&>strong]:border [&>strong]:border-orange-100 
                [&_a]:text-orange-600 [&_a]:hover:text-orange-700 [&_a]:font-semibold [&_a]:underline"
              />
            </div>

            {/* Article Tags */}
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-700 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">#</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Tags</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {currentArticle.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-gradient-to-r from-slate-50 to-slate-100 hover:from-orange-50 hover:to-orange-100 text-slate-700 hover:text-orange-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200 hover:border-orange-200 transition-all cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
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
                      {category === 'all' ? 'Alle Categorieen' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Articles */}
            {searchTerm === '' && selectedCategory === 'all' && (
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Uitgelichte Artikelen</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {featuredPosts.map(post => (
                    <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover rounded"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            if (target.parentElement) {
                              target.parentElement.innerHTML = '<div class="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500">Geen afbeelding</div>';
                            }
                          }}
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm font-medium">
                            {post.category}
                          </span>
                          <span className="text-slate-500 text-sm">•</span>
                          <span className="text-slate-500 text-sm">{post.readTime} lezen</span>
                        </div>
                        <h3 
                          className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 cursor-pointer hover:text-orange-600 transition-colors" 
                          onClick={() => handleReadMore(post.id)}
                        >
                          {post.title}
                        </h3>
                        <p className="text-slate-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('nl-NL')}
                          </div>
                          <button 
                            onClick={() => handleReadMore(post.id)}
                            className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1"
                          >
                            Lees meer <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

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
                    <article key={post.id} className="bg-white rounded-lg shadow border hover:shadow-lg transition-shadow">
                      <div className="md:flex">
                        <div className="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover rounded"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              if (target.parentElement) {
                                target.parentElement.innerHTML = '<div class="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500">Geen afbeelding</div>';
                              }
                            }}
                          />
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
                          
                          <h3 
                            className="text-2xl font-bold text-slate-900 mb-3 cursor-pointer hover:text-orange-600 transition-colors" 
                            onClick={() => handleReadMore(post.id)}
                          >
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
                            <button 
                              onClick={() => handleReadMore(post.id)}
                              className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1"
                            >
                              Lees artikel <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>

            {/* Newsletter Signup */}
            <section className="mt-16 bg-slate-700 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Blijf op de hoogte</h2>
              <p className="text-xl text-slate-200 mb-8">
                Ontvang de laatste updates over RDW goedkeuringen en e-step regelgeving
              </p>
              <div className="max-w-md mx-auto flex gap-3">
                <input
                  type="email"
                  placeholder="Jouw email adres"
                  className="flex-1 px-4 py-3 rounded-lg text-slate-900 border-0 focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                  Abonneren
                </button>
              </div>
              <p className="text-sm text-slate-400 mt-4">
                Geen spam, alleen belangrijke updates
              </p>
            </section>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-16">
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
                <li><a href="/vergelijken" className="hover:text-white">RDW Goedgekeurd</a></li>
                <li><a href="/vergelijken" className="hover:text-white">Top 3 Modellen</a></li>
                <li><a href="/vergelijken" className="hover:text-white">Prijsvergelijking</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Informatie</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/rdw-info" className="hover:text-white">E-Step Regelgeving</a></li>
                <li><a href="/verzekering" className="hover:text-white">Verzekering</a></li>
                <li><a href="/waar-mag-je-rijden" className="hover:text-white">Waar mag je rijden?</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 KentekenEstep.nl. Affiliate links naar MediaMarkt kunnen commissie opleveren.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}