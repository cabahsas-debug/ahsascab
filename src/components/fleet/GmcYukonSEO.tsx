import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Luggage, Wind, Users, Map, Star, BadgeCheck } from 'lucide-react';

export default function GmcYukonSEO() {
    return (
        <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Main H2 Header */}
                <div className="text-center mb-16">
                    <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block flex justify-center items-center gap-2">
                        <BadgeCheck size={18} /> Premium Fleet Guide
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair text-slate-900 dark:text-white mb-6 leading-tight">
                        Why the GMC Yukon XL is the Ultimate Umrah Vehicle
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
                        When travelling for Umrah, the journey between Jeddah, Makkah, and Madinah is physically demanding. Choosing the <Link href="/booking?vehicle=gmc" className="text-amber-600 font-semibold hover:underline border-b border-amber-600/30">GMC Yukon XL 2024</Link> for your intercity transfers ensures that you arrive at the holy sanctuaries rested, unbothered by the harsh desert climate, and free from luggage anxieties.
                    </p>
                </div>

                {/* Deep Dive: Luggage & Space */}
                <div className="mb-16 bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                            <Luggage className="text-amber-600" size={24} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold font-playfair text-slate-900 dark:text-white">
                            Unmatched Luggage Capacity for Pilgrims
                        </h3>
                    </div>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                        <p>
                            One of the most common mistakes pilgrims make is underestimating the amount of luggage they will acquire. Between your initial arrival from the airport, shopping for gifts in Makkah, and securing mandated 5-liter Zamzam water boxes for the flight home, luggage space disappears rapidly.
                        </p>
                        <p>
                            Unlike the standard Yukon or Tahoe, the <strong>GMC Yukon XL</strong> (Extra Long) boasts a massive <strong>41.5 cubic feet of cargo space</strong> behind the third row.
                        </p>
                        <ul>
                            <li><strong>Jeddah Airport Arrival:</strong> Easily swallows 5+ large 23kg suitcases plus cabin baggage without folding down the vital third-row seats.</li>
                            <li><strong>Return Journey:</strong> Comfortably accommodates 4-5 passengers along with their luggage and safe, upright storage for multiple Zamzam boxes.</li>
                        </ul>
                    </div>
                </div>

                {/* Grid: Climate & Suspension */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-2xl font-bold font-playfair mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                            <Wind className="text-emerald-500" /> Tri-Zone Climate Control
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                            Saudi Arabian summers routinely exceed 45°C (113°F). Standard taxis struggle to cool the rear cabins efficiently. The GMC Yukon features American-engineered <strong>Tri-Zone Automatic Climate Control</strong>.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            Passengers in the second and third rows have dedicated air vents and independent temperature controls. Whether you are doing a <Link href="/services/makkah-madinah-taxi" className="text-amber-600 hover:underline">Makkah to Madinah taxi</Link> run at midday or a midnight <Link href="/services/ziyarat-tours" className="text-amber-600 hover:underline">Ziyarat tour</Link>, the cabin remains a refreshing oasis.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-2xl font-bold font-playfair mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                            <ShieldCheck className="text-emerald-500" /> Highway Safety & Suspension
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                            Safety is our priority. The Yukon is a heavy-duty, body-on-frame SUV. It commands respect on the fast-paced Hijrah Highway connecting the holy cities.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            Equipped with <strong>Magnetic Ride Control</strong> suspension, it absorbs bumps and road imperfections, delivering a "floating" ride quality. This is crucial for elderly pilgrims or those prone to motion sickness during the 4.5-hour intercity drive.
                        </p>
                    </div>
                </div>

                {/* Final Booking Push */}
                <div className="text-center bg-navy-900 p-10 rounded-3xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
                    <h3 className="text-3xl font-bold font-playfair mb-4 relative z-10">Experience VIP VIP Treatment</h3>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
                        Our GMC Yukons are operated exclusively by senior chauffeurs who are intimately familiar with VIP protocols, Makkah hotel entrances, and VIP airport terminal pickups.
                    </p>
                    <Link href="/booking?vehicle=gmc" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-amber-500/40 relative z-10">
                        Reserve the GMC Yukon Details <Map className="w-5 h-5" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
