import pricingData from '@/data/pricing.json';
import { staticBlogPosts } from '@/data/blog-posts';
import { blogService } from '@/services/blogService';
import { getBaseUrl } from '@/lib/url-utils';

export interface SitemapEntry {
    loc: string;
    lastmod?: Date;
}

// Indexable public pages only. Do not list noindex pages (e.g. /booking, /rate/*)
// or paths without a page (they would 404).
const STATIC_PAGES = [
    '',
    '/services',
    '/fleet',
    '/routes',
    '/blog',
    '/about',
    '/contact',
    '/safety',
    '/resources',
    '/services/jeddah-airport-transfer',
    '/services/makkah-madinah-taxi',
    '/services/madinah-airport-transfer',
    '/services/airport-transfers',
    '/services/hotel-transfers',
    '/services/intercity-transfer',
    '/services/ziyarat-tours',
    '/services/ramadan-transport',
    '/fleet/gmc-yukon-at4',
    '/fleet/toyota-camry',
    '/fleet/hyundai-starex',
    '/fleet/hyundai-staria',
    '/fleet/toyota-hiace',
    '/fleet/toyota-coaster',
    '/privacy',
    '/terms',
    '/cookie-preferences',
];

export function getSiteUrl(): string {
    return getBaseUrl().replace(/\/+$/, '');
}

export function getPageEntries(): SitemapEntry[] {
    const siteUrl = getSiteUrl();
    const routePages = pricingData.routes
        .filter((route) => route.slug)
        .map((route) => `/routes/${route.slug}`);

    return [...STATIC_PAGES, ...routePages].map((path) => ({
        loc: encodeURI(`${siteUrl}${path}`),
    }));
}

interface PostLike {
    slug: string;
    date?: Date | string;
    updatedAt?: Date | string;
    isPublished?: boolean;
}

async function loadPosts(): Promise<PostLike[]> {
    try {
        return await blogService.getPosts();
    } catch (error) {
        // DB unavailable: fall back to bundled posts so the post sitemap is never empty.
        console.warn('post-sitemap: DB fetch failed, using static posts:', error);
        return staticBlogPosts;
    }
}

function toValidDate(value?: Date | string): Date | undefined {
    if (!value) return undefined;
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? undefined : date;
}

export async function getPostEntries(): Promise<SitemapEntry[]> {
    const siteUrl = getSiteUrl();
    const posts = await loadPosts();

    return posts
        .filter((post) => post.slug && post.isPublished !== false)
        .map((post) => ({
            loc: encodeURI(`${siteUrl}/blog/${post.slug}`),
            lastmod: toValidDate(post.updatedAt) ?? toValidDate(post.date),
        }));
}

export function latestLastmod(entries: SitemapEntry[]): Date | undefined {
    return entries.reduce<Date | undefined>(
        (latest, { lastmod }) => (lastmod && (!latest || lastmod > latest) ? lastmod : latest),
        undefined
    );
}

function escapeXml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function renderEntries(tag: 'url' | 'sitemap', entries: SitemapEntry[]): string {
    return entries
        .map(({ loc, lastmod }) => {
            const lastmodTag = lastmod ? `<lastmod>${lastmod.toISOString()}</lastmod>` : '';
            return `<${tag}><loc>${escapeXml(loc)}</loc>${lastmodTag}</${tag}>`;
        })
        .join('\n');
}

const XML_HEADER = '<?xml version="1.0" encoding="UTF-8"?>';
const SITEMAP_NS = 'http://www.sitemaps.org/schemas/sitemap/0.9';

export function renderUrlset(entries: SitemapEntry[]): string {
    return `${XML_HEADER}\n<urlset xmlns="${SITEMAP_NS}">\n${renderEntries('url', entries)}\n</urlset>\n`;
}

export function renderSitemapIndex(entries: SitemapEntry[]): string {
    return `${XML_HEADER}\n<sitemapindex xmlns="${SITEMAP_NS}">\n${renderEntries('sitemap', entries)}\n</sitemapindex>\n`;
}

export function xmlResponse(xml: string): Response {
    return new Response(xml, {
        headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    });
}
