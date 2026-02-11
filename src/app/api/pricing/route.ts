import { NextResponse } from 'next/server';
import { routeService } from '@/services/routeService';
import { vehicleService } from '@/services/vehicleService';
import pricingData from '@/data/pricing.json';

const DEFAULT_ROUTES = pricingData.routes;
const DEFAULT_VEHICLES = pricingData.vehicles;

export const dynamic = 'force-dynamic'; // Force dynamic to avoid caching for debug

export async function GET() {
    try {
        const [routes, vehicles] = await Promise.all([
            routeService.getActiveRoutes(),
            vehicleService.getActiveVehicles()
        ]);

        // Fallback to default data if database is empty
        if (routes.length === 0 && vehicles.length === 0) {
            return NextResponse.json({
                routes: DEFAULT_ROUTES,
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                vehicles: DEFAULT_VEHICLES
            });
        }

        return NextResponse.json({
            routes: routes.map(route => {
                // Determine baseRate logic
                let baseRate = 0;
                // If route has 'price' or we calculate it?
                // The interface IRoute doesn't have baseRate. 
                // Context logic: base = route.price || 0;
                // But Route model doesn't have price field. 
                // RouteWithPrices has prices array.
                // We need to match what frontend expects.
                // Frontend expects: customRates map.

                const customRates = (route.prices || []).reduce((acc: Record<string, number>, rp: any) => {
                    acc[rp.vehicleId] = rp.price;
                    return acc;
                }, {} as Record<string, number>);

                // Determine baseRate? Maybe min price?
                const prices = Object.values(customRates) as number[];
                baseRate = prices.length > 0 ? Math.min(...prices) : 0;

                return {
                    id: route._id.toString(), // Ensure string ID
                    name: `${route.origin} to ${route.destination}`,
                    slug: route._id.toString(), // or generate a slug if stored
                    seo: {
                        title: `${route.origin} to ${route.destination} Taxi`,
                        description: `Book taxi from ${route.origin} to ${route.destination}`,
                        keywords: []
                    },
                    distance: route.distance,
                    time: route.duration,
                    baseRate,
                    customRates
                };
            }),
            vehicles: vehicles.map(vehicle => ({
                id: vehicle.id,
                name: vehicle.name,
                capacity: vehicle.capacity || `${vehicle.passengers} Seater`,
                multiplier: 1, // Default
                features: vehicle.features,
                luggage: `${vehicle.luggage} Bags`,
                image: vehicle.image,
                category: vehicle.category,
                // Include other fields if needed
                seo: { title: vehicle.name, description: vehicle.name, keywords: [] }
            }))
        });
    } catch (error) {
        console.error('Error fetching pricing:', error);
        return NextResponse.json({ error: 'Failed to fetch pricing' }, { status: 500 });
    }
}
