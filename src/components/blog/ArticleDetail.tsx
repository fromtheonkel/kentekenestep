// src/components/blog/ArticleDetail.tsx

import React from 'react';
import { Calendar, ArrowRight, FileText } from 'lucide-react';
import { BlogPost } from './blogData';

interface ArticleDetailProps {
  article: BlogPost;
  onBack: () => void;
  relatedArticles: BlogPost[];
}

export default function ArticleDetail({ article, onBack, relatedArticles }: ArticleDetailProps) {
  const related = relatedArticles
    .filter(post => 
      post.category === article.category || 
      post.tags.some(tag => article.tags.includes(tag))
    )
    .slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors bg-white rounded-lg px-4 py-2 shadow-sm border border-slate-200 hover:shadow-md"
      >
        <ArrowRight className="w-4 h-4 rotate-180" />
        Terug naar overzicht
      </button>

      {/* Article Header */}
      <header className="mb-12 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
            {article.category}
          </span>
          <span className="text-slate-400 text-sm">•</span>
          <div className="flex items-center gap-1 text-slate-500 text-sm bg-slate-50 px-3 py-1 rounded-full">
            <Calendar className="w-3 h-3" />
            {article.readTime} lezen
          </div>
          {article.featured && (
            <>
              <span className="text-slate-400 text-sm">•</span>
              <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                ⭐ Uitgelicht
              </span>
            </>
          )}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
          {article.title}
        </h1>
        
        <div className="flex items-center gap-8 text-slate-600 bg-slate-50 rounded-xl p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
              {article.author.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-slate-900">{article.author}</div>
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
                {new Date(article.date).toLocaleDateString('nl-NL', { 
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
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover rounded-xl"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.innerHTML = '<div class="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500 text-lg">Afbeelding laden...</div>';
          }}
        />
      </div>

      {/* Article Content */}
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-orange-500 to-orange-600"></div>
        
        <div 
          dangerouslySetInnerHTML={{ __html: article.content }}
          className="article-content text-slate-700 leading-relaxed text-lg 
          [&>p]:mb-6 [&>p]:text-slate-700 [&>p]:leading-8 
          [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-12 [&>h3]:mb-6 [&>h3]:pb-3 [&>h3]:border-b-2 [&>h3]:border-orange-100 [&>h3]:relative [&>h3]:before:absolute [&>h3]:before:bottom-0 [&>h3]:before:left-0 [&>h3]:before:w-12 [&>h3]:before:h-0.5 [&>h3]:before:bg-orange-500 
          [&>h4]:text-xl [&>h4]:font-semibold [&>h4]:text-slate-800 [&>h4]:mt-8 [&>h4]:mb-4 
          [&>ul]:my-8 [&>ul]:space-y-4 [&>ul]:ml-0 [&>ul]:bg-slate-50 [&>ul]:rounded-xl [&>ul]:p-6 [&>ul]:border [&>ul]:border-slate-200 
          [&>li]:mb-3 [&>li]:pl-8 [&>li]:relative [&>li]:list-none [&>li]:text-slate-700 [&>li]:leading-7 [&>li]:bg-white [&>li]:rounded-lg [&>li]:p-3 [&>li]:shadow-sm [&>li]:border [&>li]:border-slate-100 [&>li]:before:absolute [&>li]:before:left-3 [&>li]:before:top-3 [&>li]:before:text-green-500 [&>li]:before:font-bold [&>li]:before:text-sm 
          [&>strong]:font-semibold [&>strong]:text-slate-900 [&>strong]:bg-orange-50 [&>strong]:px-2 [&>strong]:py-1 [&>strong]:rounded [&>strong]:border [&>strong]:border-orange-100 
          [&>p:first-child]:text-xl [&>p:first-child]:text-slate-600 [&>p:first-child]:font-medium [&>p:first-child]:leading-8 [&>p:first-child]:mb-10 [&>p:first-child]:pb-8 [&>p:first-child]:border-b-2 [&>p:first-child]:border-slate-200 [&>p:first-child]:italic [&>p:first-child]:bg-slate-50 [&>p:first-child]:p-6 [&>p:first-child]:rounded-xl [&>p:first-child]:relative 
          [&_a]:text-orange-600 [&_a]:hover:text-orange-700 [&_a]:font-semibold [&_a]:underline
          [&_.bg-orange-50]:bg-orange-50 [&_.border-l-4]:border-l-4 [&_.border-orange-400]:border-orange-400 [&_.p-4]:p-4 [&_.my-8]:my-8 [&_.text-orange-800]:text-orange-800"
        />
        
        <style jsx>{`
          .article-content li:before {
            content: '✓';
          }
          .article-content h3:before {
            content: '';
          }
          .article-content p:first-child:before {
            content: '"';
            position: absolute;
            top: 0.5rem;
            left: 1rem;
            font-size: 2.5rem;
            color: #fed7aa;
            font-family: serif;
          }
        `}</style>
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
          {article.tags.map(tag => (
            <span 
              key={tag} 
              className="bg-gradient-to-r from-slate-50 to-slate-100 hover:from-orange-50 hover:to-orange-100 text-slate-700 hover:text-orange-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200 hover:border-orange-200 transition-all cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Gerelateerde Artikelen</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map(post => (
              <article 
                key={post.id} 
                className="group bg-slate-50 hover:bg-white rounded-xl border border-slate-200 hover:border-orange-200 p-6 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center p-3 mb-4 group-hover:shadow-sm transition-shadow overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover rounded"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = '<div class="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500 text-sm">Geen afbeelding</div>';
                    }}
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-slate-400 text-xs">•</span>
                  <span className="text-slate-500 text-xs">{post.readTime}</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-orange-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Lees artikel <ArrowRight className="w-3 h-3" />
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}