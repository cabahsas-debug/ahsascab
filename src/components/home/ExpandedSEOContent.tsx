import React from 'react';
import { MapPin, Clock, Shield, Star, Car, Info, PlaneLanding, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ExpandedSEOContent() {
    return (
        <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Main SEO Header - H2 for Hierarchy */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair text-slate-900 dark:text-white mb-6 leading-tight">
                        The Complete Guide to Umrah Transportation 2026
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        Planning your spiritual journey to Makkah and Madinah? Navigating Saudi Arabia's transport options can be overwhelming. <strong>Ahsas Cab</strong> provides the most reliable <Link href="/services/jeddah-airport-transfer" className="text-amber-600 font-semibold hover:underline border-b border-amber-600/30">Jeddah Airport to Makkah taxi</Link> service.
                        Whether you are arriving at King Abdulaziz International Airport (KAIA) for the first time or travelling frequently between the holy cities, our guide covers everything you need to know about booking safe, affordable, and VIP private car transfers.
                    </p>
                </div>

                {/* Section 1: H3 - Airport Arrivals */}
                <div className="mb-16 bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                            <PlaneLanding className="text-amber-600" size={24} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold font-playfair text-slate-900 dark:text-white">
                            Arriving at Jeddah Airport: What Pilgrims Must Know
                        </h3>
                    </div>

                    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                        <p>
                            King Abdulaziz International Airport (KAIA) in Jeddah is the primary gateway for millions of Umrah pilgrims. The airport has multiple terminals, notably Terminal 1, the North Terminal, and the dedicated Hajj Terminal. Finding reliable transport upon arrival, especially while in the state of Ihram, requires pre-planning.
                        </p>
                        <p>
                            By booking your <strong>Umrah taxi from Jeddah Airport</strong> in advance with Ahsas Cab, you bypass the chaotic taxi ranks outside the arrival halls. Our chauffeurs offer a premium "Meet and Greet" service. We track your flight using your flight number, meaning we adjust to delays automatically. Your driver will be waiting holding a name-board, ready to assist with your luggage and guide you directly to a pre-cooled vehicle.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                                <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Terminal 1 Arrivals</h4>
                                <p className="text-sm">The newest and largest terminal. Our drivers wait directly at the arrivals hall exit gate with a personalized signboard.</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                                <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">North & Hajj Terminals</h4>
                                <p className="text-sm">For chartered flights and specific airlines. Our operations team coordinates directly via WhatsApp upon your landing.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: H3 - Private Taxi vs Train */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-6 text-slate-900 dark:text-white inline-flex items-center gap-3">
                            <Car className="text-amber-600" /> Private Taxi vs. Haramain Train
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            While the Haramain High-Speed Railway is a modern marvel, a private car rental with a driver often provides a superior experience for families and elderly pilgrims. Here is why thousands of pilgrims choose an <strong>Umrah taxi service</strong>:
                        </p>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <Shield className="text-emerald-500 shrink-0 mt-1" size={24} />
                                <div>
                                    <strong className="block text-slate-900 dark:text-white mb-1">True Door-to-Door Service</strong>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">Trains only take you station-to-station. You still need a taxi from the Makkah station to your hotel. Our service transports you from the airport arrivals hall directly to your hotel lobby.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Clock className="text-emerald-500 shrink-0 mt-1" size={24} />
                                <div>
                                    <strong className="block text-slate-900 dark:text-white mb-1">Flexible 24/7 Availability</strong>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">Flights arrive at 3 AM. Trains do not run 24 hours. A private taxi is ready the moment you exit customs, regardless of the hour.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Briefcase className="text-emerald-500 shrink-0 mt-1" size={24} />
                                <div>
                                    <strong className="block text-slate-900 dark:text-white mb-1">Zero Luggage Hassles</strong>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">Trains impose strict baggage limits (often one piece per person). Our SUVs, like the <Link href="/fleet/gmc-yukon-at4" className="text-amber-600 hover:underline">GMC Yukon XL</Link>, effortlessly accommodate Zamzam water and 5+ large suitcases.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Intercity Distances Table */}
                    <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
                        <h4 className="text-xl font-bold font-playfair mb-6 flex items-center gap-2">
                            <MapPin className="text-amber-500" /> Essential Holy Route Distances
                        </h4>
                        <div className="space-y-4 relative z-10">
                            {[
                                { route: 'Jeddah Airport → Makkah', dist: '100 km', time: '1hr 15m' },
                                { route: 'Makkah → Madinah', dist: '450 km', time: '4hr 30m' },
                                { route: 'Jeddah Airport → Madinah', dist: '400 km', time: '4hr' },
                                { route: 'Makkah → Jeddah Hotel', dist: '85 km', time: '1hr' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="font-medium">{item.route}</div>
                                    <div className="text-right">
                                        <div className="text-amber-400 font-bold">{item.dist}</div>
                                        <div className="text-xs text-slate-400">{item.time} est.</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 3: H3 - Choosing the Right Vehicle / Internal Links */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold font-playfair text-center text-slate-900 dark:text-white mb-10">
                        Choosing the Right Vehicle for Your Group
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Option 1 */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center group hover:border-amber-500/50 transition-colors">
                            <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">The VIP GMC Yukon XL</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-1">
                                The ultimate in luxury and safety. Perfect for the long 4.5-hour drive on the <Link href="/services/makkah-madinah-taxi" className="font-semibold underline underline-offset-2">Makkah to Madinah taxi</Link> route. Seats up to 7 passengers with massive luggage capacity.
                            </p>
                            <Link href="/fleet/gmc-yukon-at4" className="text-sm font-bold text-amber-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                                View GMC Details <ChevronRight size={16} />
                            </Link>
                        </div>

                        {/* Option 2 */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center group hover:border-amber-500/50 transition-colors">
                            <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">Hyundai Staria Van</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-1">
                                The best 9-seater family van for group Umrah packages. Economical, spacious, and features dual-climate control. Ideal for large families needing <Link href="/services/jeddah-airport-transfer" className="font-semibold underline underline-offset-2">Jeddah airport transfers</Link>.
                            </p>
                            <Link href="/fleet/hyundai-staria" className="text-sm font-bold text-amber-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                                View Staria Details <ChevronRight size={16} />
                            </Link>
                        </div>

                        {/* Option 3 */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center group hover:border-amber-500/50 transition-colors">
                            <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">Toyota Camry Sedan</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-1">
                                Affordable, comfortable, and reliable. The preferred choice for solo travelers and couples carrying standard luggage. The most common vehicle for <Link href="/services/makkah-jeddah-taxi" className="font-semibold underline underline-offset-2">Makkah to Jeddah city</Link> drop-offs.
                            </p>
                            <Link href="/fleet/toyota-camry" className="text-sm font-bold text-amber-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                                View Camry Details <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Section 4: H3 - Popular Questions / Semantic FAQ Snippets */}
                <div className="bg-amber-50 dark:bg-slate-900/80 p-8 md:p-12 rounded-3xl border border-amber-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-8 justify-center">
                        <Info className="text-amber-600" size={28} />
                        <h3 className="text-2xl md:text-3xl font-bold font-playfair text-slate-900 dark:text-white">
                            Frequently Asked Questions (2026 Updates)
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                        <div>
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-slate-900 dark:text-white">
                                <CheckCircle2 className="text-amber-500 shrink-0" size={18} /> How much is a taxi from Jeddah Airport to Makkah?
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed pl-6">
                                The standard taxi fare from Jeddah Airport to Makkah starts from <strong>250 SAR</strong> for a Toyota Camry sedan. For luxury VIP options like the GMC Yukon, prices are approximately <strong>550 SAR</strong> to 600 SAR depending on the season (Ramadan/Hajj). All prices are fixed with zero hidden meter fees.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-slate-900 dark:text-white">
                                <CheckCircle2 className="text-amber-500 shrink-0" size={18} /> Do your drivers stop at Miqat (Masjid Dhul Hulaifah)?
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed pl-6">
                                Yes. When travelling from Madinah to Makkah to perform Umrah, our drivers always provide a complimentary stop at the Miqat (Abyar Ali) allowing you time to shower, wear your Ihram, and pray two Raka'ats before continuing the journey.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-slate-900 dark:text-white">
                                <CheckCircle2 className="text-amber-500 shrink-0" size={18} /> Is it safe to book an Umrah taxi online?
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed pl-6">
                                Booking through Ahsas Cab is 100% secure. You do not need to pay online—we offer a "Book Now, Pay Later" policy where you pay your driver in cash (SAR) or via card upon arrival. We send you the driver's name, photo, and license plate via WhatsApp 24 hours before your trip.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-slate-900 dark:text-white">
                                <CheckCircle2 className="text-amber-500 shrink-0" size={18} /> Do you offer Ziyarat historical tours?
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed pl-6">
                                Yes, we offer comprehensive 3 to 4-hour <Link href="/services/ziyarat-tours" className="text-amber-600 font-semibold hover:underline">Makkah and Madinah Ziyarat packages</Link>. Our knowledgeable drivers will take you to Jabal al-Nour (Cave Hira), Arafat, Mina, Quba Mosque, and Mount Uhud in air-conditioned comfort.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
