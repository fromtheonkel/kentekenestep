// src/components/LatestBlog.tsx

"use client";

import React from 'react';
import { Calendar, User, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getLatestArticle } from '@/data/blog/articles';

export default function LatestBlog() {
  const latestArticle = getLatestArticle();

  if (!latestArticle) return null;

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

        {/* Latest Article Card */}
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-2/5 h-64 md:h-auto bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                {latestArticle.image ? (
                  <Image 
                    src={latestArticle.image} 
                    alt={latestArticle.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized={true} // Tijdelijke fix
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-2xl">{latestArticle.category}</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="md:w-3/5 p-8">
                {/* Meta Information */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    {latestArticle.category}
                  </span>
                  {latestArticle.featured && (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      ⭐ Uitgelicht
                    </span>
                  )}
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    🆕 Nieuw
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                  {latestArticle.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  {latestArticle.excerpt}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center gap-6 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {latestArticle.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(latestArticle.date).toLocaleDateString('nl-NL')}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {latestArticle.readTime}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {latestArticle.tags.slice(0, 4).map(tag => (
                    <span key={tag} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={`/blog/${latestArticle.slug}`} className="flex-1">
                    <button className="w-full bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group">
                      Lees artikel 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <Link href="/blog">
                    <button className="w-full sm:w-auto border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-800 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                      Alle artikelen
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </article>
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