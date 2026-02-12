import React from 'react';
import { vehicleService } from '@/services/vehicleService';
import FleetShowcase, { Vehicle as ShowcaseVehicle } from '@/components/fleet/FleetShowcase';

export default async function FleetShowcaseLoader() {
    const vehicles = await vehicleService.getActiveVehicles();

    const showcaseVehicles: ShowcaseVehicle[] = vehicles.map(v => ({
        id: v.id || '',
        name: v.name,
        price: v.price > 0 ? `SAR ${v.price}` : getStartingPrice(v.name),
        passengers: v.passengers,
        luggage: v.luggage,
        features: v.features,
        image: v.image
    }));

    return <FleetShowcase vehicles={showcaseVehicles} />;
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
