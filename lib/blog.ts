import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Lang = 'es' | 'en';

export type BlogCategory =
  | 'Guías'
  | 'Auto'
  | 'Vida'
  | 'Salud'
  | 'Comercial'
  | 'Ahorro'
  | 'Noticias';

export const CATEGORIES: Record<Lang, { slug: BlogCategory; label: string }[]> = {
  es: [
    { slug: 'Guías', label: 'Guías' },
    { slug: 'Auto', label: 'Auto' },
    { slug: 'Vida', label: 'Vida' },
    { slug: 'Salud', label: 'Salud' },
    { slug: 'Comercial', label: 'Comercial' },
    { slug: 'Ahorro', label: 'Ahorro' },
    { slug: 'Noticias', label: 'Noticias' },
  ],
  en: [
    { slug: 'Guías', label: 'Guides' },
    { slug: 'Auto', label: 'Auto' },
    { slug: 'Vida', label: 'Life' },
    { slug: 'Salud', label: 'Health' },
    { slug: 'Comercial', label: 'Business' },
    { slug: 'Ahorro', label: 'Savings' },
    { slug: 'Noticias', label: 'News' },
  ],
};

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: BlogCategory;
  coverImage?: string;
  readingTime: number;
  lang: Lang;
  tags?: string[];
  author?: string;
  translationSlug?: string;
}

export interface Post extends PostMeta {
  content: string;
}

function postsDir(lang: Lang): string {
  return path.join(process.cwd(), 'content/blog', lang);
}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function getAllPosts(lang: Lang): PostMeta[] {
  const dir = postsDir(lang);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(dir, fileName), 'utf8');
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        excerpt: data.excerpt ?? '',
        category: (data.category as BlogCategory) ?? 'Guías',
        coverImage: data.coverImage,
        readingTime: estimateReadingTime(content),
        lang,
        tags: data.tags ?? [],
        author: data.author ?? 'Maria Fernanda',
        translationSlug: data.translationSlug,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string, lang: Lang): Post {
  const fullPath = path.join(postsDir(lang), `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    category: (data.category as BlogCategory) ?? 'Guías',
    coverImage: data.coverImage,
    readingTime: estimateReadingTime(content),
    lang,
    tags: data.tags ?? [],
    author: data.author ?? 'Maria Fernanda',
    translationSlug: data.translationSlug,
    content,
  };
}

export function getRelatedPosts(currentSlug: string, lang: Lang, limit = 3): PostMeta[] {
  const all = getAllPosts(lang);
  const current = all.find((p) => p.slug === currentSlug);
  if (!current) return all.filter((p) => p.slug !== currentSlug).slice(0, limit);

  return all
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 2 : 0;
      const bMatch = b.category === current.category ? 2 : 0;
      const aTagMatch = (a.tags ?? []).filter((t) => (current.tags ?? []).includes(t)).length;
      const bTagMatch = (b.tags ?? []).filter((t) => (current.tags ?? []).includes(t)).length;
      return (bMatch + bTagMatch) - (aMatch + aTagMatch);
    })
    .slice(0, limit);
}

export function formatDate(dateStr: string, lang: Lang = 'es'): string {
  const date = new Date(dateStr + 'T12:00:00');
  return date.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** Extract h2 headings from MDX content for table of contents */
export function extractHeadings(content: string): { id: string; text: string }[] {
  const headingRegex = /^## (.+)$/gm;
  const headings: { id: string; text: string }[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    headings.push({ id, text });
  }
  return headings;
}
