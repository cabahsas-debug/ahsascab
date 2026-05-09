import { MetadataRoute } from 'next';

const CANONICAL_URL = 'https://www.ahsascab.com';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Block ALL crawlers on the raw Vercel subdomain
            {
                userAgent: '*',
                disallow: '/',
                // This rule applies when host is ahsascab.vercel.app
            },
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
