// src/app/blog/[slug]/page.tsx - VERVANG je huidige bestand hiermee

import React from 'react';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { blogArticles } from '@/data/blog/articles';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogArticles
    .filter(article => article.published)
    .map((article) => ({
      slug: article.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = blogArticles.find(article => article.slug === slug && article.published);
  
  if (!article) {
    return {
      title: 'Artikel niet gevonden',
    };
  }

  return {
    title: `${article.title} | KentekenEstep.nl`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = blogArticles.find(article => article.slug === slug && article.published);

  if (!article) {
    notFound();
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = blogArticles
    .filter(a => a.published && a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Terug naar blog
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          {/* Category and Meta */}
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
            {article.featured && (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                ⭐ Uitgelicht
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-8">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {article.author}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(article.date).toLocaleDateString('nl-NL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map(tag => (
              <span key={tag} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>

          {/* Share Button */}
          <button className="flex items-center gap-2 text-slate-600 hover:text-slate-800 border border-slate-300 hover:border-slate-400 px-4 py-2 rounded-lg transition-colors">
            <Share2 className="w-4 h-4" />
            Delen
          </button>
        </header>

        {/* Featured Image */}
        {article.image && (
          <div className="mb-12">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
              <Image 
                src={article.image} 
                alt={article.title}
                width={800}
                height={400}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="mb-16">
          {article.content ? (
            <div 
              className="prose prose-lg prose-slate max-w-none
                [&_p]:mb-6 [&_p]:leading-relaxed [&_p]:text-lg [&_p]:text-gray-700
                [&_p.lead]:text-xl [&_p.lead]:font-medium [&_p.lead]:text-gray-600 [&_p.lead]:mb-8 [&_p.lead]:border-l-4 [&_p.lead]:border-orange-500 [&_p.lead]:pl-4 [&_p.lead]:bg-orange-50 [&_p.lead]:p-4 [&_p.lead]:rounded-lg
                [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-6 [&_h2]:pb-2 [&_h2]:border-b-4 [&_h2]:border-orange-500
                [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-4
                [&_strong]:font-semibold [&_strong]:text-gray-900
                [&_em]:italic [&_em]:text-gray-600
                [&_a]:text-orange-600 [&_a]:no-underline [&_a]:hover:underline
                [&_ul]:my-6 [&_ul]:pl-6
                [&_ol]:my-6 [&_ol]:pl-6
                [&_li]:mb-2 [&_li]:text-gray-700 [&_li]:text-lg
                [&_table]:w-full [&_table]:border-collapse [&_table]:border [&_table]:border-gray-300 [&_table]:my-6
                [&_th]:border [&_th]:border-gray-300 [&_th]:px-4 [&_th]:py-2 [&_th]:bg-gray-50 [&_th]:text-left [&_th]:font-semibold
                [&_td]:border [&_td]:border-gray-300 [&_td]:px-4 [&_td]:py-2
                [&_hr]:my-12 [&_hr]:border-0 [&_hr]:border-t [&_hr]:border-gray-300"
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />
          ) : (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <p className="text-orange-700 mb-0">
                <strong>Dit artikel is nog in ontwikkeling.</strong> De volledige inhoud wordt binnenkort toegevoegd.
              </p>
            </div>
          )}
        </div>

        {/* Article Footer */}
        <footer className="border-t pt-8">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-500">
              Laatst bijgewerkt: {new Date(article.date).toLocaleDateString('nl-NL')}
            </div>
            <button className="flex items-center gap-2 text-slate-600 hover:text-slate-800">
              <Share2 className="w-4 h-4" />
              Delen
            </button>
          </div>
        </footer>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Gerelateerde artikelen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map(relatedArticle => (
                <Link href={`/blog/${relatedArticle.slug}`} key={relatedArticle.id}>
                  <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      {relatedArticle.image ? (
                        <Image 
                          src={relatedArticle.image} 
                          alt={relatedArticle.title}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-slate-600 font-bold">{relatedArticle.category}</span>
                      )}
                    </div>
                    <div className="p-6">
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm font-medium">
                        {relatedArticle.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-3">
                        {relatedArticle.excerpt.slice(0, 120)}...
                      </p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span>{relatedArticle.readTime}</span>
                        <span>{new Date(relatedArticle.date).toLocaleDateString('nl-NL')}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <div className="bg-slate-700 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Terug naar alle artikelen
          </Link>
        </div>
      </div>
    </div>
  );
}