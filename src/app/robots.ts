import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://ahsascab.com';

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
