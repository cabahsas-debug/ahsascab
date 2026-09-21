import { MetadataRoute } from 'next';

const CANONICAL_URL = 'https://www.ahsascab.com';

export default function robots(): MetadataRoute.Robots {
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
