// Canonical public origin. www.ahsascab.com has no valid SSL certificate, so canonicals,
// sitemaps, robots.txt and schema must point at the apex domain in production.
export const SITE_URL = 'https://ahsascab.com';

export function getBaseUrl(): string {
    // If we're on the client, use the relative path
    if (typeof window !== 'undefined') {
        return '';
    }

    // Live Vercel deployment: always the canonical domain, whatever NEXT_PUBLIC_APP_URL says
    if (process.env.VERCEL_ENV === 'production') {
        return SITE_URL;
    }

    // Explicitly configured URL (non-Vercel hosting)
    if (process.env.NEXT_PUBLIC_APP_URL) {
        return process.env.NEXT_PUBLIC_APP_URL;
    }

    // Vercel Preview/Branch URL
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }

    // Default to localhost for local development
    return 'http://localhost:3000';
}
