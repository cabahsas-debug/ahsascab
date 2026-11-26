import { ShieldCheck } from 'lucide-react';
import { Card, CheckList, Section, SectionHeading, SubHeading } from './ui';

export default function SafetySection() {
    return (
        <>
            <Section id="safety" tone="muted">
                <SectionHeading
                    eyebrow="Your rights and our standards"
                    title="Safe and reliable Makkah taxi services"
                    intro="Safety in a Makkah taxi starts with knowing your rights. These rules come from the Transport General Authority (TGA), the body that licenses taxis in Saudi Arabia."
                />

                <div className="grid gap-6 lg:grid-cols-2">
                    <Card>
                        <SubHeading>Your rights in any Makkah taxi</SubHeading>
                        <CheckList
                            items={[
                                <><strong>Meters must run.</strong> In Makkah and Madinah, licensed taxis must switch on the electronic meter for the whole trip. During Hajj season, failing to do so can mean a fine of up to SAR 3,000.</>,
                                <><strong>No meter, no fare.</strong> The TGA has reminded passengers that if the driver does not start the meter, the passenger can finish the ride without paying.</>,
                                <><strong>Receipts and card payment.</strong> Licensed taxis must show their official ID and taxi logo, offer electronic payment and give printed receipts.</>,
                                <><strong>Avoid unmarked cars.</strong> In February 2026 the TGA proposed a SAR 2,600 fine for people who carry passengers in private cars without a licence.</>,
                            ]}
                        />
                        <p className="mt-5 leading-relaxed">Ahsas Cab is a booked in advance service with a fixed fare agreed in writing, so you know the price before the trip starts.</p>
                    </Card>

                    <div className="space-y-6">
                        <Card>
                            <SubHeading>What happens after an accident</SubHeading>
                            <p className="leading-relaxed">If there is an accident, the driver calls the traffic police and handles the report. We send a replacement car to you so your trip continues. In any emergency in the Makkah region, call 911, or 997 for an ambulance.</p>
                        </Card>
                        <Card>
                            <SubHeading>Driver checks, clean cars and GPS</SubHeading>
                            <p className="leading-relaxed">Every car is fitted with GPS tracking and cleaned before each airport run. Drivers do not smoke in the car. Google reviews of Makkah taxi firms show what pilgrims notice most: drivers arriving on time, clean cars and polite manners. We hold our drivers to those three.</p>
                        </Card>
                    </div>
                </div>

                <Card className="mt-6 border-primary/30">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start">
                        <ShieldCheck className="h-10 w-10 shrink-0 text-amber-600" aria-hidden />
                        <div>
                            <SubHeading>How we care for elderly parents, women travelling alone and wheelchair users</SubHeading>
                            <p className="leading-relaxed">If you are booking for your parents from Karachi or Manchester, tell us their needs. Wheelchair assistance and baby seats are available on request, and a folding wheelchair fits in the back of the Staria, Starex and Hiace. The driver helps your parents in and out of the car and drops them at the closest point traffic police allow near the Haram.</p>
                            <p className="mt-3 leading-relaxed">Women travelling alone get the driver&apos;s name, photo, phone number and plate before the trip, and can share their live location with family at home.</p>
                        </div>
                    </div>
                </Card>
            </Section>

            <Section id="nusuk-rules">
                <SectionHeading
                    eyebrow="2025 and 2026 changes"
                    title="Nusuk rules and Hajj Terminal pickups every pilgrim should know"
                    intro="Transport rules in Makkah changed a lot in 2025 and 2026. These are the ones that affect your taxi bookings."
                />
                <Card>
                    <CheckList
                        items={[
                            <><strong>No booking, no visa.</strong> Your hotel and ground transport must be confirmed through Nusuk before your Umrah visa is issued.</>,
                            <><strong>Umrah permit.</strong> A visa alone is not enough. You also need an Umrah permit on the Nusuk app to perform Umrah at Masjid al Haram.</>,
                            <><strong>Hajj season limits.</strong> Before and during Hajj, drivers cannot carry visit visa holders or people without a Hajj or Makkah entry permit into Makkah or the holy sites.</>,
                            <><strong>Friday closures.</strong> Streets around the Haram close to private cars for about one hour before and after Jumu&apos;ah. Plan pickups after Friday prayer for later.</>,
                            <><strong>Drop points near the Haram.</strong> Traffic police sometimes divert taxis away from the Haram area at busy times. Your driver will take you to the nearest point allowed.</>,
                            <><strong>Hajj Terminal and Tafweej.</strong> Pickups at the Hajj Terminal can carry extra parking or permit charges, and Tafweej rules apply in some seasons.</>,
                        ]}
                    />
                </Card>
            </Section>
        </>
    );
}
