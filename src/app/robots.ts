import { MetadataRoute } from 'next';
import { getBaseUrl } from '@/lib/url-utils';

export default function robots(): MetadataRoute.Robots {
    const siteUrl = getBaseUrl();
    return {
        // One group for every crawler. A separate Googlebot group would make Google
        // ignore these rules. /_next/ stays crawlable so Google can render pages.
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/api/', '/fleet-debug/'],
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
