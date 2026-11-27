// Single source of truth for the public business contact details.
// Every phone, WhatsApp, map link and structured-data address on the site reads from here.

export const BUSINESS_PHONE = {
    display: '+966 53 286 6430',
    e164: '+966532866430',
    /** Digits only, for wa.me links. */
    digits: '966532866430',
    href: 'tel:+966532866430',
} as const;

export const BUSINESS_EMAIL = 'cabahsas@gmail.com';

/** Google Business Profile / Maps link for the office. */
export const BUSINESS_MAP_URL = 'https://share.google/qbv6jLPNMZduXqVJp';

export const BUSINESS_ADDRESS = {
    street: 'Ibn Abi Al Mukhtar, Al Jamiah',
    locality: 'Makkah',
    region: 'Makkah Province',
    postalCode: '24352',
    country: 'SA',
    plusCode: '9VVF+6G',
    /** Decoded from plus code 7GHX9VVF+6G. */
    latitude: 21.3931,
    longitude: 39.8738,
} as const;

export const BUSINESS_ADDRESS_LINE = `${BUSINESS_ADDRESS.street}, ${BUSINESS_ADDRESS.locality} ${BUSINESS_ADDRESS.postalCode}`;

// Numbers the business used before; CMS content (blog posts) may still contain them.
// +966 54 549 4921 and +966 50 339 6902, with or without spaces/dashes.
const LEGACY_TEL_LINK = /tel:\+?966[\s-]?(?:54[\s-]?549[\s-]?4921|50[\s-]?339[\s-]?6902)/g;
const LEGACY_WA_DIGITS = /(wa\.me\/|phone=)966(?:545494921|503396902)/g;
const LEGACY_DISPLAY = /(?:\+966[\s-]?|(?<!\d)0)(?:54[\s-]?549[\s-]?4921|50[\s-]?339[\s-]?6902)(?!\d)/g;

/** Replace any former business number in text/HTML with the current one. */
export function replaceLegacyPhones(text: string): string {
    return text
        .replace(LEGACY_TEL_LINK, BUSINESS_PHONE.href)
        .replace(LEGACY_WA_DIGITS, `$1${BUSINESS_PHONE.digits}`)
        .replace(LEGACY_DISPLAY, BUSINESS_PHONE.display);
}
