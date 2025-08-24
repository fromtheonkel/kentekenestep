import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import { validateAuth } from '@/lib/auth';

const execAsync = promisify(exec);

interface ArticleData {
  title: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  featured: boolean;
  readTime: string;
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication first
    const authResult = validateAuth(request);
    
    if (!authResult.success) {
      return NextResponse.json(
        { error: authResult.error },
        { status: 401 }
      );
    }

    // Check session cookie
    const sessionCookie = request.cookies.get('admin-session');
    
    if (sessionCookie?.value !== 'authenticated') {
      return NextResponse.json(
        { error: 'Not authenticated. Please login first.' },
        { status: 401 }
      );
    }

    const articleData: ArticleData = await request.json();

    // Validate required fields
    if (!articleData.title || !articleData.content || !articleData.excerpt) {
      return NextResponse.json(
        { error: 'Missing required fields: title, content, or excerpt' },
        { status: 400 }
      );
    }

    // Generate slug from title
    const slug = articleData.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    // Read current articles file
    const articlesPath = path.join(process.cwd(), 'src/data/blog/articles.ts');
    let articlesContent = await fs.readFile(articlesPath, 'utf8');

    // Extract the current highest ID
    const idMatches = articlesContent.match(/id:\s*(\d+)/g);
    const ids = idMatches ? idMatches.map(match => parseInt(match.replace('id:', '').trim())) : [0];
    const nextId = Math.max(...ids) + 1;

    // Create new article object
    const newArticle = {
      id: nextId,
      title: articleData.title,
      slug: slug,
      excerpt: articleData.excerpt,
      author: "Iwan",
      date: new Date().toISOString().split('T')[0],
      category: articleData.category,
      tags: articleData.tags,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop&crop=center&q=80",
      featured: articleData.featured,
      readTime: articleData.readTime,
      published: true,
      content: `\`${articleData.content}\``
    };

    // Format the new article as TypeScript code
    const newArticleCode = `  {
    id: ${newArticle.id},
    title: "${newArticle.title.replace(/"/g, '\\"')}",
    slug: "${newArticle.slug}",
    excerpt: "${newArticle.excerpt.replace(/"/g, '\\"')}",
    author: "${newArticle.author}",
    date: "${newArticle.date}",
    category: "${newArticle.category}",
    tags: [${newArticle.tags.map(tag => `"${tag}"`).join(', ')}],
    image: "${newArticle.image}",
    featured: ${newArticle.featured},
    readTime: "${newArticle.readTime}",
    published: ${newArticle.published},
    content: \`${articleData.content}\`
  },`;

    // Insert the new article at the beginning of the blogArticles array
    const insertPosition = articlesContent.indexOf('export const blogArticles: BlogArticle[] = [');
    if (insertPosition === -1) {
      throw new Error('Could not find blogArticles array in articles.ts');
    }

    const beforeArray = articlesContent.substring(0, insertPosition + 'export const blogArticles: BlogArticle[] = ['.length);
    const afterArray = articlesContent.substring(insertPosition + 'export const blogArticles: BlogArticle[] = ['.length);

    // Find the end of the comment and start of first article
    const commentEndIndex = afterArray.indexOf('  {');
    const beforeFirstArticle = afterArray.substring(0, commentEndIndex);
    const afterComment = afterArray.substring(commentEndIndex);

    const updatedContent = beforeArray + beforeFirstArticle + newArticleCode + '\n' + afterComment;

    // Write updated content back to file
    await fs.writeFile(articlesPath, updatedContent, 'utf8');

    // Git operations
    try {
      // Add and commit the changes
      await execAsync('git add src/data/blog/articles.ts', { cwd: process.cwd() });
      
      const commitMessage = `Add new blog article: ${articleData.title}

Auto-generated article with SEO optimization and proper HTML formatting.

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>`;

      await execAsync(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`, { cwd: process.cwd() });
      
      // Push to remote
      await execAsync('git push', { cwd: process.cwd() });

      return NextResponse.json({
        success: true,
        message: 'Article published successfully!',
        slug: slug,
        id: nextId
      });

    } catch (gitError) {
      console.error('Git error:', gitError);
      return NextResponse.json(
        { error: `Git operation failed: ${gitError}` },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Publish error:', error);
    return NextResponse.json(
      { error: `Failed to publish article: ${error}` },
      { status: 500 }
    );
  }
}