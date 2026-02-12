import { vehicleService } from '@/services/vehicleService';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function FleetDebugPage() {
    const vehicles = await vehicleService.getActiveVehicles();

    return (
        <div className="p-10 bg-white text-black">
            <h1 className="text-2xl font-bold mb-5">Fleet Debug</h1>
            <p className="mb-5">Found {vehicles.length} vehicles</p>
            <div className="grid grid-cols-1 gap-4">
                {vehicles.map((v: any) => (
                    <div key={v.id} className="border p-4 rounded">
                        <h2 className="font-bold">{v.name}</h2>
                        <p>ID: {v.id}</p>
                        <p>Image Path: {v.image}</p>
                        <div className="relative w-64 h-40 bg-gray-200 mt-2">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <Image src={v.image} alt={v.name} fill className="object-cover" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
