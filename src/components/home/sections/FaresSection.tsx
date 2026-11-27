import { CONTACT, FARE_ROUTES, FARE_VEHICLES, PRICES_UPDATED } from '@/data/home-content';
import { getWhatsAppLink } from '@/lib/whatsapp';
import FareCalculator from './FareCalculator';
import { Card, DataTable, Section, SectionHeading, SubHeading } from './ui';

export default function FaresSection() {
    const headers = [
        'Route',
        'Road distance',
        'Drive time',
        ...FARE_VEHICLES.map((v) => (
            <>
                {v.name}
                <span className="block text-xs font-normal text-slate-300">{v.seats} (SAR)</span>
            </>
        )),
    ];
    const rows = FARE_ROUTES.map((r) => [r.name, r.distance, r.time, ...FARE_VEHICLES.map((v) => r.fares[v.id])]);

    return (
        <Section id="fares" tone="muted">
            <SectionHeading
                eyebrow="Fixed fares per car"
                title="Makkah taxi services fares for 2026"
                intro="A private taxi from Jeddah Airport to a hotel in Makkah costs SAR 200 in a Camry and SAR 250 in a 7 seat Staria or Starex with Ahsas Cab. The price is for the whole car, not for each person. It includes waiting time for late flights, help with your luggage and drop off at your hotel door."
            />

            <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
                <div className="min-w-0">
                    <FareCalculator />
                </div>
                <div className="min-w-0 space-y-6">
                <Card>
                    <SubHeading>What your fare includes with our affordable taxi service in Makkah</SubHeading>
                    <p className="leading-relaxed">
                        You pay one agreed price. It covers fuel, the driver and your bags, and your driver still waits for you if your flight lands late. There is no meter running and nothing added at the end of the ride. There is no prepayment: you pay when you arrive, in cash or by card. Children travel in the same car at no extra cost, and baby seats are available on request.
                    </p>
                </Card>
                <Card>
                    <SubHeading>Do taxi prices go up in Ramadan and Hajj?</SubHeading>
                    <p className="leading-relaxed">
                        Yes. Demand in Makkah jumps in Ramadan and during Hajj, and most drivers raise their prices. One Makkah vlogger filmed shared car drivers near the Masjid Bilal parking asking 50 riyals per person to Madinah on normal days, 60 to 70 in the first ten days of Ramadan and up to 100 in the last ten. Our Ramadan fare is fixed and confirmed in writing before you book, so it cannot rise on the day. Book early for the last ten nights, because cars fill up fast.
                    </p>
                </Card>
                </div>
            </div>

            <div className="mt-10 space-y-4">
                <DataTable caption={`Ahsas Cab taxi fares, updated ${PRICES_UPDATED}`} headers={headers} rows={rows} stickyFirstColumn />
                <p className="text-sm text-slate-600">
                    Prices updated: {PRICES_UPDATED}. All fares are per vehicle, in Saudi riyals. Hourly hire inside Makkah starts at SAR 70 per hour.
                </p>
                <p className="font-semibold text-secondary">
                    Book your fixed fare on{' '}
                    <a className="text-amber-700 underline underline-offset-2" href={getWhatsAppLink('Salam Ahsas Cab, I would like a fixed fare.')} target="_blank" rel="noopener noreferrer">
                        WhatsApp
                    </a>{' '}
                    or call{' '}
                    <a className="text-amber-700 underline underline-offset-2" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>. No prepayment, and cancellation is free.
                </p>
            </div>
        </Section>
    );
}
