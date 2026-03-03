import { Metadata } from 'next';
import { getSettings } from './settings-storage';
import { getBaseUrl } from './url-utils';

interface SeoProps {
    title?: string;
    description?: string;
    keywords?: string[] | string;
    image?: string;
    canonicalUrl?: string; // Absolute URL preferred
    type?: 'website' | 'article' | 'profile';
    noIndex?: boolean;
    publishedTime?: string;
    authors?: string[];
}

export async function constructMetadata({
    title,
    description,
    keywords,
    image,
    canonicalUrl,
    type = 'website',
    noIndex = false,
    publishedTime,
    authors,
}: SeoProps = {}): Promise<Metadata> {
    const settings = await getSettings();
    const siteName = settings.general.siteName || "Ahsas Cab";
    const baseUrl = getBaseUrl();

    // defaults from settings
    const defaultTitle = settings.seo.defaultTitle || "Ahsas Cab - Premium Transport Services";
    const defaultDescription = settings.seo.defaultDescription || "Book trusted Umrah transport services in Saudi Arabia. Ramadan 2026 bookings open. Private GMC Yukon & luxury taxi transfers from Jeddah Airport to Makkah & Madinah.";

    // Process Keywords: Handle string or array input, merge with defaults
    const settingKeywords = typeof settings.seo.keywords === 'string'
        ? settings.seo.keywords.split(',').map(k => k.trim())
        : (settings.seo.keywords || []);

    const paramKeywords = typeof keywords === 'string'
        ? keywords.split(',').map(k => k.trim())
        : (keywords || []);

    const mergedKeywords = Array.from(new Set([
        ...paramKeywords,
        ...settingKeywords,
        "Umrah taxi", "Jeddah Airport transfer", "Makkah taxi", "Madinah taxi"
    ])); // Allow 100+ keywords per user feedback

    // Construct full title
    const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
    const finalDescription = description || defaultDescription;

    // Resolve Image: Ensure absolute URL
    // If image starts with http, use it. If /, append base. If neither, assume relative to base.
    let finalImage = image || getSettingsImage(settings) || '/images/og-default.jpg';
    if (finalImage.startsWith('/')) {
        finalImage = `${baseUrl}${finalImage}`;
    }

    // Resolve Canonical: Strictly prefer passed URL, fallback to baseUrl
    const finalCanonical = canonicalUrl
        ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl.startsWith('/') ? canonicalUrl : '/' + canonicalUrl}`)
        : baseUrl;

    return {
        title: fullTitle,
        description: finalDescription,
        keywords: mergedKeywords,
        applicationName: siteName,
        metadataBase: new URL(baseUrl),
        authors: authors ? authors.map(name => ({ name })) : [{ name: siteName }],
        creator: siteName,
        publisher: siteName,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        openGraph: {
            title: fullTitle,
            description: finalDescription,
            type,
            url: finalCanonical,
            siteName: siteName,
            locale: 'en_US',
            images: [
                {
                    url: finalImage,
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description: finalDescription,
            images: [finalImage],
            creator: '@ahsascab', // Replace with actual handle if available
        },
        alternates: {
            canonical: finalCanonical,
            languages: {
                'en-SA': finalCanonical,
                // 'ar-SA': `${baseUrl}/ar${path}`, // Placeholder for future Arabic support
            },
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        category: 'Travel',
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
            yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
        },
        // Geo-targeting for Local SEO
        other: {
            'geo.region': 'SA-02', // Makkah Region
            'geo.placename': 'Makkah',
            'geo.position': '21.3891;39.8579', // Makkah coordinates
            'ICBM': '21.3891, 39.8579',
        },
        appleWebApp: {
            capable: true,
            statusBarStyle: 'black-translucent',
            title: siteName,
        },
    };
}

function getSettingsImage(settings: any): string | null {
    if (settings.general?.logo) return settings.general.logo;
    return null;
}
