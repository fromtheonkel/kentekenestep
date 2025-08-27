// src/components/LatestBlog.tsx

"use client";

import React from 'react';
import { Calendar, User, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getLatest3Articles } from '@/data/blog/articles';

export default function LatestBlog() {
  const articles = getLatest3Articles();

  if (!articles.length) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Laatste <span className="text-orange-500">Nieuws</span>
          </h2>
          <p className="text-xl text-slate-600">
            Blijf op de hoogte van de laatste ontwikkelingen
          </p>
        </div>

        {/* Latest 3 Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={article.id} className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''}`}>
              {/* Image Section */}
              <div className={`h-48 ${index === 0 ? 'lg:h-64' : ''} bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden relative`}>
                {article.image ? (
                  <Image 
                    src={article.image} 
                    alt={article.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-2xl">{article.category}</span>
                  </div>
                )}
                {/* Badges */}
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-100/90 text-orange-700 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
                {index === 0 && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-100/90 text-blue-700 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      🆕 Nieuw
                    </span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title */}
                <h3 className={`font-bold text-slate-900 mb-3 leading-tight ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                  {article.title}
                </h3>
                
                {/* Excerpt */}
                <p className={`text-slate-600 mb-4 leading-relaxed ${index === 0 ? 'text-lg' : 'text-base'}`}>
                  {article.excerpt}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(article.date).toLocaleDateString('nl-NL')}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Read More Button */}
                <Link href={`/blog/${article.slug}`}>
                  <button className="w-full bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group">
                    Lees meer
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Quick Links to Other Articles */}
        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold">
            Bekijk alle artikelen 
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}