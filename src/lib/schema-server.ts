import { getSettings } from "./settings-storage";

export async function generateLocalBusinessSchema() {
    const settings = await getSettings();

    return {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": settings.general.siteName || "Ahsas Cab",
        "image": "https://ahsascab.com/images/og-default.jpg",
        "@id": "https://ahsascab.com",
        "url": "https://ahsascab.com",
        "telephone": settings.contact.phone || "+966545494921",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Abdul Aziz Road",
            "addressLocality": "Makkah",
            "addressRegion": "Makkah Region",
            "postalCode": "24231",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.3891,
            "longitude": 39.8579
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.facebook.com/ahsascab",
            "https://www.instagram.com/ahsascab"
        ]
    };
}
