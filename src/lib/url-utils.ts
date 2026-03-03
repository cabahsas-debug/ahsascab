export function getBaseUrl(): string {
    // If we're on the client, use the relative path
    if (typeof window !== 'undefined') {
        return '';
    }

    // Production explicitly defined
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
