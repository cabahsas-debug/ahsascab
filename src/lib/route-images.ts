// Picks an existing hero image for a route slug (there is no per-route photo).
export function getRouteImage(slug: string): string {
    if (slug.includes('jeddah-airport')) return '/images/routes/jeddah-airport-hero-professional.png';
    if (slug.includes('madinah-airport')) return '/images/routes/madinah-airport-hero.png';
    if (slug.includes('ziyarat')) return '/images/routes/makkah-ziyarat-hero.png';
    return '/images/routes/makkah-madinah-route-hero.png';
}
