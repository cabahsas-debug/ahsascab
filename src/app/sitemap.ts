import { MetadataRoute } from 'next';
import { blogService } from '@/services/blogService';
import pricingData from '@/data/pricing.json';
import { getBaseUrl } from '@/lib/url-utils';

export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = getBaseUrl();

    // 1. Static Routes - High Priority
    const mainRoutes = [
        '',
        '/booking',
        '/services',
        '/fleet',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1.0 : 0.9,
    }));

    // 2. Service & Information Pages - Medium Priority
    const serviceRoutes = [
        '/about',
        '/safety',
        '/resources',
        '/services/jeddah-airport-transfer',
        '/services/makkah-madinah-taxi',
        '/services/ziyarat-tours',
        '/services/madinah-airport-transfer',
        '/services/intercity-transfer',
        '/services/airport-transfers',
        '/services/ramadan-transport',
        '/services/taif-city-tour',
        '/routes',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // 3. Fleet Pages - Dynamic from JSON or Static List
    // Checking known fleet pages from the codebase to be safe
    const fleetRoutes = [
        '/fleet/gmc-yukon-at4',
        '/fleet/toyota-camry',
        '/fleet/hyundai-starex',
        '/fleet/hyundai-staria',
        '/fleet/toyota-hiace',
        '/fleet/toyota-coaster',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // 4. Legal Pages - Low Priority
    const legalRoutes = [
        '/privacy',
        '/terms',
        '/cookie-preferences',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }));

    // 5. Dynamic Route Pages from Pricing Data
    const transportRoutes = pricingData.routes
        .filter(r => r.slug)
        .map((route) => ({
            url: `${baseUrl}/routes/${route.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const, // Price changes
            priority: 0.9, // High priority as these are landing pages
        }));

    // 6. Dynamic Blog Posts
    let blogRoutes: MetadataRoute.Sitemap = [];
    try {
        const posts = await blogService.getPosts();
        blogRoutes = posts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.updatedAt || post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));
    } catch (error) {
        console.warn('Failed to fetch blog posts for sitemap:', error);
    }

    // 7. Blog Index
    const blogIndex = {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.8,
    };

    return [
        ...mainRoutes,
        ...serviceRoutes,
        ...fleetRoutes,
        ...transportRoutes,
        blogIndex,
        ...blogRoutes,
        ...legalRoutes,
    ];
}
