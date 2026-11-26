import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';
import { FARE_ROUTES, VEHICLES } from '@/data/home-content';
import { Section, SectionHeading } from './ui';

// "From" price = Jeddah Airport to Makkah fare, the trip most pilgrims book first.
const AIRPORT_ROUTE = FARE_ROUTES[0];

export default function FleetSection() {
    return (
        <Section id="fleet" tone="muted">
            <SectionHeading
                eyebrow="Our vehicles"
                title="Choose your Makkah car service by seats and luggage"
                intro="Pick your car by the number of bags, not only the number of people. A family of five with five large suitcases will not fit in a sedan, and a cramped five hour drive to Madinah is hard on parents."
            />

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {VEHICLES.map((v) => (
                    <li key={v.id} className="group flex flex-col overflow-hidden rounded-[15px] border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                        <div className="relative aspect-[16/10] bg-gradient-to-b from-slate-100 to-white">
                            <Image
                                src={v.image}
                                alt={`${v.name} taxi in Makkah`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                                className="object-contain p-4"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-xl font-bold text-secondary">{v.name}</h3>
                                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white">
                                    <Users className="w-3.5 h-3.5" aria-hidden /> {v.passengers}
                                </span>
                            </div>
                            <p className="mt-1 text-sm font-semibold text-amber-700">Best for {v.bestFor}</p>
                            <p className="mt-3 flex-1 leading-relaxed text-slate-600">{v.description}</p>
                            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                                <p className="text-sm text-slate-500">
                                    Airport to Makkah
                                    <span className="block text-lg font-bold text-secondary">SAR {AIRPORT_ROUTE.fares[v.id]}</span>
                                </p>
                                <Link href={v.href} className="inline-flex items-center gap-1 font-semibold text-amber-700 hover:text-amber-800" aria-label={`${v.name} details`}>
                                    Details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                                </Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <p className="mt-8 rounded-[15px] border border-primary/30 bg-primary/10 p-5 font-semibold text-secondary">
                Luggage is never left behind. Tell us how many bags you are bringing, and we send a car with room for all of them.
            </p>
        </Section>
    );
}
