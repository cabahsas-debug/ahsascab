import { Metadata } from 'next';
import { getSettings } from './settings-storage';

interface SeoProps {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    canonicalUrl?: string;
    type?: 'website' | 'article';
}

export async function constructMetadata({
    title,
    description,
    keywords,
    image = '/images/og-default.jpg', // Default OG image
    canonicalUrl,
    type = 'website'
}: SeoProps = {}): Promise<Metadata> {
    const settings = await getSettings();
    const siteName = settings.general.siteName || "Ahsas Cab";
    const defaultTitle = settings.seo.defaultTitle || "Ahsas Cab - Premium Transport Services";
    const defaultDescription = settings.seo.defaultDescription || "Book trusted Umrah transport services in Saudi Arabia. Ramadan 2026 bookings open. Private GMC Yukon & luxury taxi transfers from Jeddah Airport to Makkah & Madinah.";

    // Construct full title
    const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;

    return {
        title: fullTitle,
        description: description || defaultDescription,
        keywords: keywords || settings.seo.keywords || ["Umrah taxi", "Jeddah Airport transfer", "Makkah taxi", "Madinah taxi"],
        openGraph: {
            title: fullTitle,
            description: description || defaultDescription,
            type,
            url: canonicalUrl || 'https://ahsascab.com',
            siteName: siteName,
            images: [
                {
                    url: image, // Must be absolute URL in production, but relative works if host is set
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                }
            ],
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description: description || defaultDescription,
            images: [image],
        },
        alternates: {
            canonical: canonicalUrl || 'https://ahsascab.com',
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}
