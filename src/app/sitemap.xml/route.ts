import {
    getPostEntries,
    getSiteUrl,
    latestLastmod,
    renderSitemapIndex,
    xmlResponse,
} from '@/lib/sitemap';

export const revalidate = 3600;

// Sitemap index. Kept at /sitemap.xml so the URL in robots.txt and Search Console stays valid.
export async function GET() {
    const siteUrl = getSiteUrl();
    const posts = await getPostEntries();

    return xmlResponse(
        renderSitemapIndex([
            { loc: `${siteUrl}/page-sitemap.xml` },
            { loc: `${siteUrl}/post-sitemap.xml`, lastmod: latestLastmod(posts) },
        ])
    );
}
