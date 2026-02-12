export interface Resource {
    id: string;
    title: string;
    description: string;
    image: string;
    category: 'Guide' | 'Checklist' | 'Tips' | 'Map';
    downloadUrl: string;
    fileSize: string;
}

export const resources: Resource[] = [
    {
        id: 'umrah-guide-2026',
        title: 'Ultimate Umrah Guide 2026',
        description: 'A comprehensive step-by-step guide to performing Umrah, including rituals, duas, and practical travel tips for a spiritual journey.',
        image: '/images/blog-hero-professional.png', // Placeholder
        category: 'Guide',
        downloadUrl: '/downloads/umrah-guide-2026.pdf',
        fileSize: '2.4 MB'
    },
    {
        id: 'madinah-ziyarat-checklist',
        title: 'Madinah Ziyarat Checklist',
        description: 'Complete checklist of historical sites to visit in Madinah, with historical context and best times to visit each location.',
        image: '/images/services/intercity-transport-v2.png', // Placeholder
        category: 'Checklist',
        downloadUrl: '/downloads/madinah-checklist.pdf',
        fileSize: '1.2 MB'
    },
    {
        id: 'family-travel-essentials',
        title: 'Family Travel Essentials',
        description: 'Everything you need to know about traveling for Umrah with children and elderly family members. Safety tips and packing lists included.',
        image: '/images/services/hotel-transfers-v2.png', // Placeholder
        category: 'Tips',
        downloadUrl: '/downloads/family-essentials.pdf',
        fileSize: '1.8 MB'
    },
    {
        id: 'makkah-transport-map',
        title: 'Makkah Transport Map',
        description: 'Detailed map of Makkah showing key transport hubs, Haram boundaries, and hotel zones to help you navigate the city.',
        image: '/images/services/makkah-madinah-taxi-v2.png', // Placeholder
        category: 'Map',
        downloadUrl: '/downloads/makkah-map.pdf',
        fileSize: '3.5 MB'
    },
    {
        id: 'dua-book-pdf',
        title: 'Essential Duas for Umrah',
        description: 'A pocket-friendly collection of authentic Duas for every stage of your Umrah, transliterated and translated.',
        image: '/images/services/ziyarat-tours-v2.png', // Placeholder
        category: 'Guide',
        downloadUrl: '/downloads/dua-book.pdf',
        fileSize: '1.5 MB'
    }
];
