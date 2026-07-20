export interface NavLink {
    href: string;
    label: string;
    children?: {
        href: string;
        label: string;
    }[];
}

export const navigationLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    {
        href: '/routes',
        label: 'Routes',
        children: [
            { href: '/services/makkah-madinah-taxi', label: 'Makkah ⇄ Madinah' },
            { href: '/services/jeddah-airport-transfer', label: 'Jeddah Airport ⇄ Makkah' },
            { href: '/services/madinah-airport-transfer', label: 'Madinah Airport ⇄ Hotel' },
            { href: '/services/intercity-transfer', label: 'Jeddah Airport ⇄ Madinah' },
            { href: '/services/ziyarat-tours', label: 'Ziyarat Tours (City Tours)' },
        ]
    },
    {
        href: '/services',
        label: 'Services',
        children: [
            { href: '/services/ramadan-transport', label: 'Ramadan 2026 Transport' },
            { href: '/services/airport-transfers', label: 'Airport Transfer (General)' },
            { href: '/services/intercity-transfer', label: 'Intercity Transfer' },
            { href: '/services/hotel-transfers', label: 'Hotel Transfer' },
            { href: '/track-booking', label: 'Track Booking' },
        ]
    },
    {
        href: '/fleet',
        label: 'Fleet',
        children: [
            { href: '/fleet/gmc-yukon-at4', label: 'GMC Yukon XL' },
            { href: '/fleet/hyundai-staria', label: 'Hyundai Staria' },
            { href: '/fleet/hyundai-starex', label: 'Hyundai H1 Starex' },
            { href: '/fleet/toyota-hiace', label: 'Toyota Hiace' },
            { href: '/fleet/toyota-camry', label: 'Toyota Camry' },
        ]
    },
    {
        href: '/about',
        label: 'About Us',
        children: [
            { href: '/about', label: 'Company Profile' },
        ]
    },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact us' },
];
