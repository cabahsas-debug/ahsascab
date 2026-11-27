import { getSettings } from "./settings-storage";
import { getBaseUrl } from "./url-utils";
import { BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_MAP_URL, BUSINESS_PHONE } from "./contact";

/** Stable @id so page-level schema (WebPage, ContactPage, Service) can reference the business. */
export const businessSchemaId = (baseUrl: string) => `${baseUrl}/#business`;

const SERVED_CITIES = ['Makkah', 'Madinah', 'Jeddah', 'Taif'];

/** Site-wide LocalBusiness (TaxiService) schema, rendered once in the root layout. */
export async function generateLocalBusinessSchema() {
    const settings = await getSettings();
    const baseUrl = getBaseUrl();

    return {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "@id": businessSchemaId(baseUrl),
        "name": settings.general.siteName || "Ahsas Cab",
        "alternateName": ["Ahsas Alrihlat", "إحساس الرحلات"],
        "description": "Private taxi service in Makkah for Umrah pilgrims: Jeddah Airport transfers, Makkah to Madinah, Taif and Ziyarat trips at fixed fares per car.",
        "url": baseUrl,
        "logo": `${baseUrl}/ahsas-logo-v2.png`,
        "image": `${baseUrl}/images/blog/makkah-haram-view-new.png`,
        "telephone": BUSINESS_PHONE.e164,
        "email": BUSINESS_EMAIL,
        "foundingDate": "2015",
        "priceRange": "SAR 70 - SAR 900",
        "currenciesAccepted": "SAR",
        "paymentAccepted": "Cash, Credit Card",
        "knowsLanguage": ["en", "ar", "ur"],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": BUSINESS_ADDRESS.street,
            "addressLocality": BUSINESS_ADDRESS.locality,
            "addressRegion": BUSINESS_ADDRESS.region,
            "postalCode": BUSINESS_ADDRESS.postalCode,
            "addressCountry": BUSINESS_ADDRESS.country
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": BUSINESS_ADDRESS.latitude,
            "longitude": BUSINESS_ADDRESS.longitude
        },
        "hasMap": BUSINESS_MAP_URL,
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "22:00"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": BUSINESS_PHONE.e164,
            "contactType": "reservations",
            "areaServed": "SA",
            "availableLanguage": ["English", "Arabic", "Urdu"],
            "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
            }
        },
        "areaServed": SERVED_CITIES.map((name) => ({ "@type": "City", "name": name })),
        "sameAs": [
            BUSINESS_MAP_URL,
            "https://www.facebook.com/ahsascab",
            "https://www.instagram.com/ahsascab"
        ]
    };
}
