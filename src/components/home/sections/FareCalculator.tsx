'use client';

import { useMemo, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { FARE_ROUTES, FARE_VEHICLES, type FareVehicleId } from '@/data/home-content';
import { getWhatsAppLink } from '@/lib/whatsapp';

const MAX_PEOPLE = FARE_VEHICLES[FARE_VEHICLES.length - 1].maxPassengers;

const clamp = (value: number, min: number, max: number) =>
    Number.isFinite(value) ? Math.min(Math.max(Math.round(value), min), max) : min;

const fieldClass =
    'w-full rounded-[15px] border border-slate-300 bg-white px-4 py-3 text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30';

export default function FareCalculator() {
    const [routeId, setRouteId] = useState(FARE_ROUTES[0].id);
    const [vehicleId, setVehicleId] = useState<FareVehicleId>('camry');
    const [date, setDate] = useState('');
    const [people, setPeople] = useState(2);
    const [bags, setBags] = useState(2);

    const route = FARE_ROUTES.find((r) => r.id === routeId) ?? FARE_ROUTES[0];
    const vehicle = FARE_VEHICLES.find((v) => v.id === vehicleId) ?? FARE_VEHICLES[0];
    const fare = route.fares[vehicle.id];

    // Smallest vehicle that fits everyone and every bag.
    const suggested = useMemo(
        () => FARE_VEHICLES.find((v) => v.maxPassengers >= people && v.maxBags >= bags),
        [people, bags]
    );
    const tooSmall = vehicle.maxPassengers < people || vehicle.maxBags < bags;

    const whatsappHref = getWhatsAppLink(
        [
            'Salam Ahsas Cab, I would like a fixed fare.',
            `Route: ${route.name}`,
            `Vehicle: ${vehicle.name} (${vehicle.seats})`,
            date && `Date: ${date}`,
            `People: ${people}, large bags: ${bags}`,
            typeof fare === 'number' ? `Fare shown: SAR ${fare}` : '',
        ]
            .filter(Boolean)
            .join('\n')
    );

    return (
        <div className="rounded-[15px] border border-slate-200 bg-white p-5 md:p-8 shadow-md">
            <p className="font-bold text-secondary text-lg mb-5">Instant price calculator</p>
            <div className="grid gap-4 md:grid-cols-2">
                <label className="block md:col-span-2">
                    <span className="block text-sm font-semibold text-slate-700 mb-1.5">Route</span>
                    <select className={fieldClass} value={routeId} onChange={(e) => setRouteId(e.target.value)}>
                        {FARE_ROUTES.map((r) => (
                            <option key={r.id} value={r.id}>{r.name}</option>
                        ))}
                    </select>
                </label>
                <label className="block">
                    <span className="block text-sm font-semibold text-slate-700 mb-1.5">Vehicle</span>
                    <select className={fieldClass} value={vehicleId} onChange={(e) => setVehicleId(e.target.value as FareVehicleId)}>
                        {FARE_VEHICLES.map((v) => (
                            <option key={v.id} value={v.id}>{v.name}, {v.seats}</option>
                        ))}
                    </select>
                </label>
                <label className="block">
                    <span className="block text-sm font-semibold text-slate-700 mb-1.5">Date</span>
                    <input type="date" className={fieldClass} value={date} onChange={(e) => setDate(e.target.value)} />
                </label>
                <label className="block">
                    <span className="block text-sm font-semibold text-slate-700 mb-1.5">People</span>
                    <input
                        type="number" inputMode="numeric" min={1} max={MAX_PEOPLE} className={fieldClass}
                        value={people} onChange={(e) => setPeople(clamp(Number(e.target.value), 1, MAX_PEOPLE))}
                    />
                </label>
                <label className="block">
                    <span className="block text-sm font-semibold text-slate-700 mb-1.5">Large bags</span>
                    <input
                        type="number" inputMode="numeric" min={0} max={MAX_PEOPLE} className={fieldClass}
                        value={bags} onChange={(e) => setBags(clamp(Number(e.target.value), 0, MAX_PEOPLE))}
                    />
                </label>
            </div>

            <div className="mt-6 rounded-[15px] bg-secondary p-5 text-white" aria-live="polite">
                <p className="text-sm text-slate-300">{route.name} · {route.time}</p>
                <p className="mt-1 font-playfair text-3xl font-bold text-primary">
                    {typeof fare === 'number' ? `SAR ${fare}` : `Fare ${fare}`}
                    <span className="ml-2 align-middle font-sans text-sm font-normal text-slate-300">per car, {vehicle.name}</span>
                </p>
                {tooSmall && (
                    <p className="mt-3 text-sm text-amber-200">
                        {suggested
                            ? `For ${people} people and ${bags} large bags we suggest the ${suggested.name} (${suggested.seats}).`
                            : 'For this group, message us and we will plan more than one car.'}
                        {suggested && (
                            <button type="button" onClick={() => setVehicleId(suggested.id)} className="ml-2 font-semibold underline underline-offset-2">
                                Use {suggested.name}
                            </button>
                        )}
                    </p>
                )}
            </div>

            <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-[15px] bg-[#1f8f4e] px-6 py-4 font-bold text-white hover:bg-[#187540] transition-colors"
            >
                <MessageCircle className="w-5 h-5" aria-hidden />
                Book this fixed fare on WhatsApp
            </a>
            <p className="mt-3 text-center text-xs text-slate-500">No prepayment. Free cancellation.</p>
        </div>
    );
}
