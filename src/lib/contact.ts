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
