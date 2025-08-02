import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, FileText } from 'lucide-react';
import { getArticleBySlug, blogArticles } from '@/data/blog/articles';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: 'Artikel niet gevonden',
    };
  }

  return {
    title: `${article.title} | KentekenEstep.nl`,
    description: article.excerpt,
    keywords: article.tags.join(', '),
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: article.image?.startsWith('http') ? [article.image] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: article.image?.startsWith('http') ? [article.image] : undefined,
    },
  };
}

// Generate static params for all articles (for build optimization)
export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Get related articles (same category, exclude current)
  const relatedArticles = blogArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 2);

  // Blog Image Component for SVG illustrations
  const BlogImage = ({ type, className = "" }: { type: string; className?: string }) => {
    switch (type) {
      case 'market-growth':
        return (
          <div className={`bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center ${className}`}>
            <span className="text-green-700 font-bold text-2xl">📈 Marktgroei</span>
          </div>
        );
      case 'rdw-approval':
        return (
          <div className={`bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center ${className}`}>
            <span className="text-blue-700 font-bold text-2xl">✅ RDW Goedkeuring</span>
          </div>
        );
      case 'license-plate':
        return (
          <div className={`bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center ${className}`}>
            <span className="text-yellow-700 font-bold text-2xl">🏷️ Kenteken</span>
          </div>
        );
      case 'illegal-warning':
        return (
          <div className={`bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center ${className}`}>
            <span className="text-red-700 font-bold text-2xl">⚠️ Waarschuwing</span>
          </div>
        );
      default:
        return (
          <div className={`bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center ${className}`}>
            <FileText className="w-16 h-16 text-slate-400" />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors bg-white rounded-lg px-4 py-2 shadow-sm border border-slate-200 hover:shadow-md"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Terug naar blog overzicht
        </Link>

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
        <div className="mb-12 h-64 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          {article.image?.startsWith('http') ? (
            <Image 
              src={article.image} 
              alt={article.title}
              width={800}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          ) : (
            <BlogImage 
              type={article.image} 
              className="w-full h-full" 
            />
          )}
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden mb-12">
          <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-orange-500 to-orange-600"></div>
          
          <div 
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="prose prose-lg prose-slate max-w-none
              prose-headings:text-slate-900 prose-headings:font-bold
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:pb-3 prose-h3:border-b-2 prose-h3:border-orange-100
              prose-p:text-slate-700 prose-p:leading-8 prose-p:mb-6
              prose-strong:text-slate-900 prose-strong:bg-orange-50 prose-strong:px-2 prose-strong:py-1 prose-strong:rounded
              prose-ul:my-8 prose-ul:space-y-4
              prose-li:text-slate-700 prose-li:leading-7
              prose-a:text-orange-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline"
          />
        </div>

        {/* Article Tags */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-12">
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
        {relatedArticles.length > 0 && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Gerelateerde Artikelen</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map(post => (
                <Link href={`/blog/${post.slug}`} key={post.id}>
                  <article className="group bg-slate-50 hover:bg-white rounded-xl border border-slate-200 hover:border-orange-200 p-6 hover:shadow-lg transition-all">
                    <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-sm transition-shadow">
                      {post.image?.startsWith('http') ? (
                        <Image 
                          src={post.image} 
                          alt={post.title}
                          width={300}
                          height={150}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <BlogImage 
                          type={post.image} 
                          className="w-full h-full rounded-lg" 
                        />
                      )}
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
                    <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="text-orange-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Lees artikel <ArrowRight className="w-3 h-3" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
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