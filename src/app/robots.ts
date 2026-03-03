import { MetadataRoute } from 'next';
import { getBaseUrl } from '@/lib/url-utils';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = getBaseUrl();

    return {
        rules: [
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
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
