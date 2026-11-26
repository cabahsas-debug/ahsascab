import { MetadataRoute } from 'next';
import { getBaseUrl } from '@/lib/url-utils';

export default function robots(): MetadataRoute.Robots {
    const CANONICAL_URL = getBaseUrl();
    return {
        rules: [
            // Allow crawlers only on the canonical custom domain
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/api/', '/_next/', '/private/', '/fleet-debug/'],
            },
            {
                userAgent: 'Googlebot',
                allow: ['/', '/images/', '/fleet/', '/manifest.webmanifest', '/manifest.json'],
                disallow: ['/admin/', '/api/'],
            }
        ],
        sitemap: `${CANONICAL_URL}/sitemap.xml`,
        host: CANONICAL_URL,
    };
}
