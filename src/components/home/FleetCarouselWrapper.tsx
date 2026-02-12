import { Suspense } from 'react';
import FleetCarousel from './FleetCarousel';
import { vehicleService } from '@/services/vehicleService';
import { Vehicle as FleetVehicle } from './FleetCarousel';

import { getSettings } from '@/lib/settings-storage';

async function FleetCarouselFetcher() {
    const vehicles = await vehicleService.getVehicles();
    const settings = await getSettings();

    // Map to FleetCarousel format
    const carouselVehicles: FleetVehicle[] = vehicles
        .filter(v => v.isActive)
        .slice(0, 6)
        .map(v => ({
            id: v.id,
            name: v.name,
            image: v.image,
            passengers: v.name.toLowerCase().includes('hiace') ? "10/11" : v.passengers,
            luggage: v.luggage,
            features: v.features,
            price: v.price > 0 ? `SAR ${v.price}` : getStartingPrice(v.name)
        }));

    return <FleetCarousel vehicles={carouselVehicles} discount={settings.discount} />;
}

function getStartingPrice(name: string): string {
    const n = name.toLowerCase();
    if (n.includes('camry')) return 'SAR 200';
    if (n.includes('yukon') || n.includes('gmc')) return 'SAR 400';
    if (n.includes('staria')) return 'SAR 300';
    if (n.includes('starex') || n.includes('h1')) return 'SAR 250';
    if (n.includes('hiace')) return 'SAR 350';
    if (n.includes('coaster')) return 'SAR 600';
    if (n.includes('bus')) return 'SAR 600';
    return 'Contact us';
}

export default function FleetCarouselWrapper() {
    return (
        <Suspense fallback={<div className="h-[400px] bg-slate-100 dark:bg-slate-800 animate-pulse rounded-xl" />}>
            <FleetCarouselFetcher />
        </Suspense>
    );
}
