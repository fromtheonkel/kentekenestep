// src/components/blog/BlogList.tsx

import React from 'react';
import { Calendar, ArrowRight, Search, User } from 'lucide-react';
import { BlogPost } from './blogData';

interface BlogListProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
  filteredPosts: BlogPost[];
  featuredPosts: BlogPost[];
  onReadMore: (id: number) => void;
}

export default function BlogList({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  filteredPosts,
  featuredPosts,
  onReadMore
}: BlogListProps) {
  return (
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
                {category === 'all' ? 'Alle Categorieën' : category}
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
                      target.parentElement!.innerHTML = '<div class="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500">Geen afbeelding</div>';
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
                    onClick={() => onReadMore(post.id)}
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
                      onClick={() => onReadMore(post.id)}
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
                        target.parentElement!.innerHTML = '<div class="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500">Geen afbeelding</div>';
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
                      onClick={() => onReadMore(post.id)}
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
                        onClick={() => onReadMore(post.id)}
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
  );
}