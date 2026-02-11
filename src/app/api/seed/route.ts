import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Route, Vehicle, RoutePrice } from '@/models';
import pricingData from '@/data/pricing.json';
import { revalidatePath, revalidateTag } from 'next/cache';

// Helper to parse "4 Seater" -> 4
const parseCapacity = (cap: string) => {
    const match = cap.match(/\d+/);
    return match ? parseInt(match[0]) : 4;
};

// Helper to parse "2 Large Suitcases" -> 2
const parseLuggage = (lug: string) => {
    const match = lug.match(/\d+/);
    return match ? parseInt(match[0]) : 2;
};

// Helper to infer category from route name
const inferCategory = (name: string, origin: string, destination: string) => {
    const lowerName = name.toLowerCase();
    const lowerDest = destination.toLowerCase();
    const lowerOrigin = origin.toLowerCase();

    if (lowerDest.includes('airport')) return 'Airport Departure';
    if (lowerOrigin.includes('airport')) return 'Airport Arrival';
    if (lowerName.includes('ziarat') || lowerName.includes('ziyarat')) return 'Ziarat';
    return 'Intercity';
};

export async function GET() {
    try {
        await dbConnect();

        // 1. Clear existing data
        await Route.deleteMany({});
        await Vehicle.deleteMany({});
        await RoutePrice.deleteMany({});

        console.log('Cleared existing data.');

        // 2. Insert Vehicles
        const vehicleMap = new Map<string, string>(); // JsonID -> MongoID

        for (const vData of pricingData.vehicles) {
            const newVehicle = await Vehicle.create({
                name: vData.name,
                image: `/images/fleet/${vData.id}.png`,
                passengers: parseCapacity(vData.capacity),
                luggage: parseLuggage(vData.luggage as string),
                features: vData.features,
                price: "0",
                hourlyRate: "0",
                category: vData.category || "Standard",
                isActive: true
            });
            vehicleMap.set(vData.id, newVehicle._id.toString());
        }

        console.log(`Seeded ${vehicleMap.size} vehicles.`);

        // 3. Insert Routes
        let routeCount = 0;
        for (const rData of pricingData.routes) {
            // Parse Origin/Destination
            let origin = 'Unknown';
            let destination = 'Unknown';

            if (rData.name.includes(' to ')) {
                const parts = rData.name.split(' to ');
                origin = parts[0].trim();
                destination = parts[1].trim();
            } else {
                origin = rData.name; // Fallback
            }

            const category = inferCategory(rData.name, origin, destination);

            const newRoute = await Route.create({
                origin,
                destination,
                distance: rData.distance,
                duration: rData.time,
                category,
                isActive: true
            });

            // Insert Prices
            if (rData.customRates) {
                const rates = rData.customRates as Record<string, number>;

                for (const [vKey, price] of Object.entries(rates)) {
                    const vehicleId = vehicleMap.get(vKey);
                    if (vehicleId) {
                        await RoutePrice.create({
                            route: newRoute._id.toString(),
                            vehicle: vehicleId,
                            price: price
                        });
                    }
                }
            }
            routeCount++;
        }

        console.log(`Seeded ${routeCount} routes.`);

        // 4. Revalidate Cache
        revalidatePath('/booking');
        revalidatePath('/admin/routes');
        revalidatePath('/api/pricing');
        // @ts-expect-error: revalidateTag signature mismatch in this next version
        revalidateTag('routes');
        // @ts-expect-error: revalidateTag signature mismatch in this next version
        revalidateTag('vehicles');

        return NextResponse.json({
            success: true,
            message: `Seeded ${routeCount} routes and ${vehicleMap.size} vehicles. Cache revalidated.`
        });
    } catch (error) {
        console.error('Seeding error:', error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
