import React from 'react';
import Link from 'next/link';
import { PlaneLanding, PlaneTakeoff, MapPin, Shield, CheckCircle2, Clock, Landmark } from 'lucide-react';
import ExpandedZiyaratSEO from '../services/ExpandedZiyaratSEO';

export default function RouteSEOContent({ slug }: { slug: string }) {

    // Ziyarat Routes - Reuse the comprehensive Ziyarat SEO component
    if (['makkah-ziyarat-taxi', 'madinah-ziyarat-taxi', 'madinah-ziyarat-wadi-jinn'].includes(slug)) {
        return <ExpandedZiyaratSEO />;
    }

    // ---------- JEDDAH AIRPORT <-> MAKKAH ----------
    if (slug === 'jeddah-airport-to-makkah') {
        return (
            <div className="py-16 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-8 text-slate-900 dark:text-white">
                        Your Complete Guide: Taxi from Jeddah Airport to Makkah
                    </h2>

                    <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                        <p className="lead text-xl mb-8">
                            Arriving at <strong>King Abdulaziz International Airport (KAIA)</strong> in Jeddah is the beginning of your spiritual journey. Securing a reliable <Link href="/booking?route=jeddah-airport-to-makkah" className="text-amber-600 hover:underline font-semibold">Jeddah Airport to Makkah taxi</Link> ensures you transition from your flight to the Holy City seamlessly and safely.
                        </p>

                        <div className="bg-amber-50 dark:bg-slate-900/50 p-8 rounded-2xl mb-10 border border-amber-100 dark:border-slate-800">
                            <h3 className="text-2xl font-bold font-playfair mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                                <PlaneLanding className="text-amber-600" /> Airport Arrival & Pick-up Process
                            </h3>
                            <p className="mb-4">
                                Navigating KAIA can be overwhelming, especially during peak Umrah seasons. Booking a private taxi in advance with <strong>Ahsas Cab</strong> guarantees a stress-free arrival at Terminal 1 or North Terminal.
                            </p>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} /> <strong>Flight Tracking:</strong> We monitor your flight schedule automatically.</li>
                                <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} /> <strong>Meet and Greet:</strong> Chauffeur waiting at arrivals with a name board.</li>
                                <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} /> <strong>Luggage Assistance:</strong> Zero hassle while in Ihram.</li>
                            </ul>
                        </div>

                        <h3 className="text-2xl font-bold font-playfair mb-4 text-slate-900 dark:text-white">
                            Distance and Travel Time
                        </h3>
                        <p className="mb-8">
                            The distance from <strong>Jeddah Airport (JED) to Makkah</strong> is approximately <strong>100 kilometers</strong> via the Makkah Expressway, taking about <strong>60 to 90 minutes</strong>. We provide direct door-to-door transfer right to the lobby of your hotel near Masjid al-Haram.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    if (slug === 'makkah-to-jeddah-airport') {
        return (
            <div className="py-16 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-8 text-slate-900 dark:text-white">
                        Reliable Departure: Taxi from Makkah to Jeddah Airport
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                        <p className="lead text-xl mb-8">
                            Concluding your Umrah journey requires a punctual and stress-free transfer. Our <Link href="/booking?route=makkah-to-jeddah-airport" className="text-amber-600 hover:underline font-semibold">Makkah to Jeddah Airport taxi</Link> service guarantees you catch your flight on time.
                        </p>

                        <div className="bg-amber-50 dark:bg-slate-900/50 p-8 rounded-2xl mb-10 border border-amber-100 dark:border-slate-800">
                            <h3 className="text-2xl font-bold font-playfair mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                                <PlaneTakeoff className="text-amber-600" /> Departure Guidelines
                            </h3>
                            <ul className="space-y-3 list-none pl-0">
                                <li className="flex gap-3"><Clock className="text-amber-500 shrink-0 mt-1" size={20} /> <strong>Timing:</strong> For international flights, we recommend scheduling your pickup from Makkah at least <strong>4-5 hours</strong> before flight departure.</li>
                                <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} /> <strong>Direct Pickup:</strong> We pick you up directly from your Makkah hotel lobby.</li>
                                <li className="flex gap-3"><Shield className="text-emerald-500 shrink-0 mt-1" size={20} /> <strong>Zamzam Water:</strong> Our spacious SUVs like the GMC Yukon have plenty of room for your packed Zamzam water bottles.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ---------- MAKKAH <-> MADINAH ----------
    if (slug === 'makkah-to-madinah-taxi' || slug === 'madinah-to-makkah-taxi') {
        const isMadinahToMakkah = slug === 'madinah-to-makkah-taxi';
        return (
            <div className="py-16 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-8 text-slate-900 dark:text-white">
                        {isMadinahToMakkah ? "Madinah to Makkah" : "Makkah to Madinah"} Taxi: Your Intercity Travel Guide
                    </h2>

                    <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                        <p className="lead text-xl mb-8">
                            The journey between the two Holy Mosques is a deeply significant part of your pilgrimage. Booking a reliable and comfortable <Link href={`/booking?route=${slug}`} className="text-amber-600 hover:underline font-semibold">private intercity taxi</Link> is essential for the 450-kilometer journey via the Hijrah Highway.
                        </p>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl mb-10 border border-slate-200 dark:border-slate-800">
                            <h3 className="text-2xl font-bold font-playfair mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                                <MapPin className="text-amber-600" /> Route Overview & Distances
                            </h3>
                            <p className="mb-4">
                                Approximately <strong>450 km (280 miles)</strong>. Estimated travel time is <strong>4 to 4.5 hours</strong>. Our drivers are highly experienced with intercity highway driving regulations and enforce strict safety standards.
                            </p>
                        </div>

                        {isMadinahToMakkah && (
                            <div className="bg-amber-50 dark:bg-slate-900/50 p-8 rounded-2xl mb-10 border border-amber-200 dark:border-slate-800">
                                <h3 className="text-2xl font-bold font-playfair mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                                    <Landmark className="text-amber-600" /> Miqat Stop at Dhul Hulaifah (Abyar Ali)
                                </h3>
                                <p className="mb-4">
                                    Since you are traveling towards Makkah to perform Umrah, it is mandatory to enter the state of Ihram at the Miqat. Our drivers are fully instructed to make a complimentary stop at <strong>Masjid Dhul Hulaifah</strong> just outside Madinah.
                                </p>
                                <p className="mb-0">
                                    Your driver will wait patiently while you shower, change into your Ihram garments, and pray your two raka'ats before continuing the journey.
                                </p>
                            </div>
                        )}

                        <h3 className="text-2xl font-bold font-playfair mb-4 text-slate-900 dark:text-white">
                            Comfort Stops & VIP Amenities
                        </h3>
                        <p className="mb-8">
                            Unlike public transportation where stops are rigidly scheduled, a private chauffeur offers flexibility. Our drivers will happily pull over at high-quality highway rest stations (such as Sasco) offering clean prayer areas, restrooms, and food options (like Al Baik).
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // ---------- MADINAH AIRPORT <-> HOTEL ----------
    if (slug === 'madinah-airport-to-hotel' || slug === 'madinah-hotel-to-airport') {
        const isArrival = slug === 'madinah-airport-to-hotel';
        return (
            <div className="py-16 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-8 text-slate-900 dark:text-white">
                        Madinah Airport (MED) {isArrival ? "Arrival" : "Departure"} Transfer
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                        <p className="lead text-xl mb-8">
                            Ensure a smooth start or end to your stay in the City of the Prophet. Prince Mohammad Bin Abdulaziz International Airport (MED) is located about 20km from the central Haram area (Markaziya).
                        </p>
                        <p>
                            Pre-booking your <Link href={`/booking?route=${slug}`} className="text-amber-600 hover:underline font-semibold">Madinah airport taxi</Link> means no waiting in queues outside the terminal. The swift 25-minute journey in our clean, air-conditioned vehicles provides the perfect peace of mind.
                        </p>
                        {isArrival && (
                            <ul className="mt-6 font-medium">
                                <li>Meet & Greet included at Arrivals.</li>
                                <li>Free waiting time for flight delays.</li>
                                <li>Direct drop-off at your hotel near Masjid an-Nabawi.</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // ---------- JEDDAH AIRPORT <-> MADINAH ----------
    if (slug === 'jeddah-airport-to-madinah' || slug === 'madinah-to-jeddah-taxi') {
        const isFromJeddah = slug === 'jeddah-airport-to-madinah';
        return (
            <div className="py-16 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-8 text-slate-900 dark:text-white">
                        {isFromJeddah ? "Jeddah Airport directly to Madinah" : "Madinah directly to Jeddah"}
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                        <p className="lead text-xl mb-6">
                            For pilgrims who prefer to visit Madinah {isFromJeddah ? "first upon landing in Saudi Arabia" : "before flying out of Jeddah"}, our direct 400km intercity transfer is the most comfortable option.
                        </p>
                        <p className="mb-4">
                            Taking a private taxi bypasses the need to travel from Jeddah airport to the train station, wait for train schedules, and then take another taxi in Madinah. We load your luggage once, and deliver you directly to your hotel.
                        </p>
                        <p className="mb-4">
                            We highly recommend the <Link href="/fleet/hyundai-staria" className="text-amber-600 hover:underline">Hyundai Staria</Link> or <Link href="/fleet/gmc-yukon-at4" className="text-amber-600 hover:underline">GMC Yukon</Link> for this 4-hour journey to ensure maximum legroom and relaxation.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Generic Fallback for other routes (e.g., Taif tours)
    return (
        <div className="py-16 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                    <h2 className="text-3xl font-bold font-playfair mb-6 text-slate-900 dark:text-white">
                        Private Taxi Service for this Route
                    </h2>
                    <p className="mb-4">
                        Ahsas Cab provides premium, direct door-to-door transportation. Booking a private taxi ensures you don't have to share your vehicle, wait in long lines, or handle luggage struggles.
                    </p>
                    <p>
                        Our fixed-price guarantee means the price you see is the final price. All vehicles are air-conditioned, fully sanitized, and driven by professional chauffeurs local to Saudi Arabia.
                    </p>
                </div>
            </div>
        </div>
    );
}
