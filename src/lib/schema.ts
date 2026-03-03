import { getBaseUrl } from './url-utils';

export type SchemaType = 'LocalBusiness' | 'Product' | 'BreadcrumbList' | 'FAQPage' | 'Service';

export const ORGANIZATION_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ahsas Cab",
    "url": "https://ahsascab.com",
    "logo": "https://ahsascab.com/ahsas-logo-v2.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966-54-549-4921",
        "contactType": "customer service",
        "areaServed": "SA",
        "availableLanguage": ["en", "ar", "ur"]
    },
    "sameAs": [
        "https://www.facebook.com/ahsascab",
        "https://www.instagram.com/ahsascab",
        "https://twitter.com/ahsascab"
    ]
};

export function generateProductSchema(route: {
    name: string;
    description?: string;
    baseRate: number;
    slug: string;
    image?: string;
    rating?: { value: number; count: number };
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": route.name,
        "description": route.description,
        "image": route.image || `${getBaseUrl()}/images/routes/${route.slug}.jpg`,
        "sku": `ROUTE-${route.slug.toUpperCase()}`,
        "brand": {
            "@type": "Brand",
            "name": "Ahsas Cab"
        },
        "offers": {
            "@type": "AggregateOffer",
            "url": `${getBaseUrl()}/routes/${route.slug}`,
            "priceCurrency": "SAR",
            "lowPrice": route.baseRate,
            "offerCount": 5, // Camry, GMC, Hiace, Staria, Coaster
            "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": route.rating?.value || 4.9,
            "reviewCount": route.rating?.count || 127
        }
    };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.item.startsWith('http') ? item.item : `${getBaseUrl()}${item.item}`
        }))
    };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}
