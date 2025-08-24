'use client';

import { useState, useEffect } from 'react';
import { Calendar, User, Clock, Save, Eye, Lock } from 'lucide-react';

interface ArticleData {
  title: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  featured: boolean;
  readTime: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const [plainText, setPlainText] = useState('');
  const [articleData, setArticleData] = useState<ArticleData>({
    title: '',
    content: '',
    excerpt: '',
    category: 'Nieuws',
    tags: [],
    featured: false,
    readTime: '5 min'
  });
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishStatus, setPublishStatus] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const categories = ['Nieuws', 'Reviews', 'Regelgeving', 'Tips', 'Vergelijking'];

  // Check authentication on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth/check');
      const data = await response.json();
      
      if (data.success) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setIsCheckingAuth(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsAuthenticated(true);
        setPassword('');
      } else {
        setAuthError(data.error || 'Authentication failed');
      }
    } catch (error) {
      setAuthError('Network error occurred');
    }
  };

  const generateArticleFromText = () => {
    const lines = plainText.trim().split('\n').filter(line => line.trim());
    if (lines.length === 0) return;

    // Extract title (first line)
    const title = lines[0].replace(/^#+\s*/, '').trim();
    
    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    // Generate excerpt (first paragraph after title)
    const firstParagraph = lines.find(line => 
      !line.startsWith('#') && 
      line.length > 50 && 
      !line.match(/^(datum:|auteur:|categorie:|tags:)/i)
    );
    const excerpt = firstParagraph?.slice(0, 150) + '...' || 'Lees meer over dit onderwerp.';

    // Convert to HTML
    let htmlContent = '';
    let currentSection = '';
    
    lines.slice(1).forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) return;

      if (trimmed.startsWith('##')) {
        htmlContent += `<h2>${trimmed.replace(/^##\s*/, '')}</h2>\n\n`;
      } else if (trimmed.startsWith('#')) {
        htmlContent += `<h3>${trimmed.replace(/^#\s*/, '')}</h3>\n\n`;
      } else if (trimmed.startsWith('-') || trimmed.startsWith('*')) {
        if (!currentSection.includes('<ul>')) {
          htmlContent += '<ul>\n';
          currentSection = 'ul';
        }
        htmlContent += `<li>${trimmed.replace(/^[-*]\s*/, '')}</li>\n`;
      } else {
        if (currentSection === 'ul') {
          htmlContent += '</ul>\n\n';
          currentSection = '';
        }
        
        // Check if it's a lead paragraph (first substantial paragraph)
        const isLeadParagraph = htmlContent.trim() === '' && trimmed.length > 100;
        const className = isLeadParagraph ? ' class="lead"' : '';
        
        htmlContent += `<p${className}>${trimmed}</p>\n\n`;
      }
    });

    if (currentSection === 'ul') {
      htmlContent += '</ul>\n';
    }

    // Generate tags based on content
    const contentLower = plainText.toLowerCase();
    const possibleTags = [
      'RDW', 'Verzekering', 'Kenteken', 'Regelgeving', 'Selana', 'Alpha',
      'E-step', 'Elektrische step', 'Rechtszaak', 'Aansprakelijkheid',
      'Gouda', 'NRC', 'Wet', '2025', 'Nieuws', 'Tips'
    ];
    
    const detectedTags = possibleTags.filter(tag => 
      contentLower.includes(tag.toLowerCase())
    ).slice(0, 5);

    // Estimate read time (average 200 words per minute)
    const wordCount = plainText.split(/\s+/).length;
    const readMinutes = Math.ceil(wordCount / 200);
    const readTime = `${readMinutes} min`;

    setArticleData({
      title,
      content: htmlContent.trim(),
      excerpt,
      category: 'Nieuws',
      tags: detectedTags,
      featured: false,
      readTime
    });
  };

  const publishArticle = async () => {
    if (!articleData.title || !articleData.content) {
      setPublishStatus('Vul eerst alle velden in');
      return;
    }

    setIsPublishing(true);
    setPublishStatus('Artikel wordt gepubliceerd...');

    try {
      const response = await fetch('/api/publish-article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });

      if (response.ok) {
        setPublishStatus('✅ Artikel succesvol gepubliceerd!');
        setPlainText('');
        setArticleData({
          title: '',
          content: '',
          excerpt: '',
          category: 'Nieuws',
          tags: [],
          featured: false,
          readTime: '5 min'
        });
      } else {
        const error = await response.text();
        setPublishStatus(`❌ Fout bij publiceren: ${error}`);
      }
    } catch (error) {
      setPublishStatus(`❌ Netwerk fout: ${error}`);
    }

    setIsPublishing(false);
  };

  // Show loading while checking authentication
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <Lock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
              <p className="text-gray-600 mt-2">Enter password to access blog admin panel</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter admin password"
                  required
                />
              </div>

              {authError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm">{authError}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Login
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Protected by IP whitelist + password authentication
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Artikel Toevoegen</h1>
          <p className="text-gray-600 mb-8">Plak je platte tekst hieronder en het wordt automatisch omgezet naar een opgemaakt artikel.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Artikel Tekst (Platte Tekst)
              </label>
              <textarea
                value={plainText}
                onChange={(e) => setPlainText(e.target.value)}
                className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm"
                placeholder={`Titel van je artikel

Introductie paragraaf die dient als excerpt...

## Hoofdkop 1

Eerste paragraaf onder hoofdkop.

Tweede paragraaf met meer informatie.

## Hoofdkop 2

- Lijst item 1
- Lijst item 2
- Lijst item 3

Nog een paragraaf met conclusie.`}
              />
              
              <button
                onClick={generateArticleFromText}
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                disabled={!plainText.trim()}
              >
                <Eye className="w-4 h-4 inline mr-2" />
                Genereer Artikel
              </button>
            </div>

            {/* Preview/Edit Section */}
            <div>
              {articleData.title && (
                <>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Titel</label>
                      <input
                        type="text"
                        value={articleData.title}
                        onChange={(e) => setArticleData({...articleData, title: e.target.value})}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
                      <textarea
                        value={articleData.excerpt}
                        onChange={(e) => setArticleData({...articleData, excerpt: e.target.value})}
                        className="w-full p-2 border border-gray-300 rounded h-20"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Categorie</label>
                        <select
                          value={articleData.category}
                          onChange={(e) => setArticleData({...articleData, category: e.target.value})}
                          className="w-full p-2 border border-gray-300 rounded"
                        >
                          {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Leestijd</label>
                        <input
                          type="text"
                          value={articleData.readTime}
                          onChange={(e) => setArticleData({...articleData, readTime: e.target.value})}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tags (komma gescheiden)</label>
                      <input
                        type="text"
                        value={articleData.tags.join(', ')}
                        onChange={(e) => setArticleData({...articleData, tags: e.target.value.split(',').map(t => t.trim()).filter(t => t)})}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={articleData.featured}
                        onChange={(e) => setArticleData({...articleData, featured: e.target.checked})}
                        className="rounded"
                      />
                      <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                        Uitgelicht artikel
                      </label>
                    </div>
                  </div>

                  {/* Preview Toggle */}
                  <div className="border-t pt-4">
                    <button
                      onClick={() => setShowPreview(!showPreview)}
                      className="mb-4 text-orange-600 hover:text-orange-700 font-medium"
                    >
                      {showPreview ? 'Verberg Preview' : 'Toon Preview'}
                    </button>

                    {showPreview && (
                      <div className="bg-gray-50 p-4 rounded border max-h-96 overflow-y-auto">
                        <h2 className="text-xl font-bold mb-2">{articleData.title}</h2>
                        <p className="text-gray-600 mb-4">{articleData.excerpt}</p>
                        <div 
                          className="prose prose-sm max-w-none"
                          dangerouslySetInnerHTML={{ __html: articleData.content }}
                        />
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Publish Section */}
          {articleData.title && (
            <div className="border-t pt-8 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Klaar om te publiceren?</h3>
                  <p className="text-gray-600">Het artikel wordt toegevoegd aan de blog, homepage en sitemap.</p>
                </div>
                
                <button
                  onClick={publishArticle}
                  disabled={isPublishing}
                  className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {isPublishing ? 'Publiceren...' : 'Publiceer Artikel'}
                </button>
              </div>

              {publishStatus && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p className="font-medium">{publishStatus}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}