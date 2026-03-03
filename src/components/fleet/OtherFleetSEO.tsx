import React from 'react';
import Link from 'next/link';
import { Car, Users, Briefcase, MapPin, ShieldCheck, Banknote, BadgeCheck } from 'lucide-react';

export default function OtherFleetSEO({ vehicleId }: { vehicleId: string }) {
    if (vehicleId === 'camry') {
        return (
            <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block flex justify-center items-center gap-2">
                            <BadgeCheck size={18} /> Economy Elite Guide
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-slate-900 dark:text-white mb-6 leading-tight">
                            Toyota Camry: The Smart Solo & Couple Umrah Taxi
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            The <Link href="/booking?vehicle=camry" className="text-amber-600 font-semibold hover:underline">Toyota Camry</Link> is our most requested sedan for <Link href="/services/jeddah-airport-transfer" className="text-amber-600 hover:underline">Jeddah Airport transfers</Link> and Makkah intercity transport. It perfectly balances legendary Japanese reliability with extreme cost efficiency for small parties.
                        </p>
                    </div>

                    <div className="mb-16 bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                                <Banknote className="text-amber-600" size={24} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold font-playfair text-slate-900 dark:text-white">
                                Maximum Value for 1-4 Passengers
                            </h3>
                        </div>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                            <p>
                                If you are traveling alone or with your spouse, hiring a large SUV like a GMC is unnecessary. The 2024 Toyota Camry offers a private, door-to-door <Link href="/services/makkah-madinah-taxi" className="text-amber-600 hover:underline">taxi service from Makkah to Madinah</Link> at a fraction of the cost, often beating the combined price of Haramain train tickets while providing superior door-to-door convenience.
                            </p>
                            <ul>
                                <li><strong>Fuel Efficient:</strong> Allows us to pass the savings directly to you with our lowest starting rates.</li>
                                <li><strong>Trunk Space:</strong> Easily fits 3 medium-sized suitcases or 2 large 23kg bags plus Zamzam water.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (vehicleId === 'hiace' || vehicleId === 'starex') {
        return (
            <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block flex justify-center items-center gap-2">
                            <BadgeCheck size={18} /> Group Economy Guide
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-slate-900 dark:text-white mb-6 leading-tight">
                            The Definitive 9-11 Seater Umrah Solution
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            For extended families and mid-sized tour groups, booking a <Link href={`/booking?vehicle=${vehicleId}`} className="text-amber-600 font-semibold hover:underline border-b border-amber-600/30">{vehicleId === 'hiace' ? 'Toyota Hiace' : 'Hyundai Starex'}</Link> is the most economical way to travel between Makkah, Madinah, and Jeddah Airport.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <h3 className="text-2xl font-bold font-playfair mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                                <Users className="text-emerald-500" /> Keep the Group Intact
                            </h3>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                                The biggest challenge for groups of 8+ is staying together. Splitting into 3 separate sedans increases costs and logistical headaches (like different drivers arriving at different times). A dedicated 11-seater van ensures everyone arrives simultaneously.
                            </p>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                This is highly recommended for <Link href="/services/ziyarat-tours" className="text-amber-600 hover:underline">Ziyarat tours</Link> so the entire group can listen to the guide together.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <h3 className="text-2xl font-bold font-playfair mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                                <Briefcase className="text-emerald-500" /> True Luggage Capacity
                            </h3>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                                Our vans are specifically configured for Umrah luggage requirements. We keep the rear seats positioned to guarantee space for 10+ suitcases, eliminating the need to tie luggage to the roof (a major safety hazard on Saudi highways).
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (vehicleId === 'coaster') {
        return (
            <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block flex justify-center items-center gap-2">
                            <BadgeCheck size={18} /> Bus Transport Guide
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-slate-900 dark:text-white mb-6 leading-tight">
                            Toyota Coaster: Premium Bus Service for Umrah Campaigns
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            The <Link href="/booking?vehicle=coaster" className="text-amber-600 font-semibold hover:underline border-b border-amber-600/30">Toyota Coaster (22-25 Seater)</Link> is the industry standard for organized Umrah and Hajj campaigns. It offers coach-level comfort for <Link href="/services/makkah-madinah-taxi" className="text-amber-600 hover:underline">intercity transport</Link> without the massive footprint of a 50-seater bus.
                        </p>
                    </div>

                    <div className="mb-16 bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                                <ShieldCheck className="text-amber-600" size={24} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold font-playfair text-slate-900 dark:text-white">
                                Why Book a Coaster Built for Tourism?
                            </h3>
                        </div>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                            <p>
                                Organizing large groups requires precision. Our Coaster buses are heavily upgraded beyond factory standards to serve international pilgrims specifically.
                            </p>
                            <ul>
                                <li><strong>PA Systems:</strong> Integrated microphones so group leaders (Mutawwifs) can conduct <Link href="/services/ziyarat-tours" className="text-amber-600 hover:underline">Ziyarat tours</Link> and recite Talbiyah effectively.</li>
                                <li><strong>Heavy Duty AC:</strong> Dual high-capacity ceiling vents ensure the rear of the bus is cooled just as rapidly as the front.</li>
                                <li><strong>Airport Logistics:</strong> The perfect shuttle for <Link href="/services/jeddah-airport-transfer" className="text-amber-600 hover:underline">Jeddah Airport arrivals</Link>, allowing the entire campaign group to load luggage into a dedicated trailer (provided free of charge for 20+ bags) while passengers board the air-conditioned bus.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return null; // Fallback
}
