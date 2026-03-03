import React from 'react';
import Link from 'next/link';
import { Users2, Wallet, Camera, ShieldCheck, MapPin, BadgeCheck } from 'lucide-react';

export default function HyundaiStariaSEO() {
    return (
        <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Main H2 Header */}
                <div className="text-center mb-16">
                    <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block flex justify-center items-center gap-2">
                        <BadgeCheck size={18} /> Group Travel Guide
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair text-slate-900 dark:text-white mb-6 leading-tight">
                        Hyundai Staria: The Smart Choice for Umrah Group Travel
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
                        Traveling to the Holy Cities as an extended family or a tight-knit group? The <Link href="/booking?vehicle=staria" className="text-amber-600 font-semibold hover:underline border-b border-amber-600/30">Hyundai Staria 9-Seater</Link> is revolutionizing group Umrah transport. It bridges the gap between hiring multiple small taxis and booking an oversized, expensive Coaster bus, offering a premium yet highly economical solution.
                    </p>
                </div>

                {/* Deep Dive: Economy & Space */}
                <div className="mb-16 bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                            <Wallet className="text-amber-600" size={24} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold font-playfair text-slate-900 dark:text-white">
                            Maximizing Value: Why the Staria Beats the Train
                        </h3>
                    </div>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                        <p>
                            When planning a <Link href="/services/makkah-madinah-taxi" className="text-amber-600 hover:underline">trip from Makkah to Madinah</Link> for 7 to 9 people, the Haramain High-Speed Railway seems appealing until you calculate the total cost. Buying 9 individual train tickets heavily outweighs the cost of a single, private Hyundai Staria.
                        </p>
                        <p>
                            Furthermore, a private Staria offers <strong>door-to-door service</strong>. You bypass the hidden costs and physical strain of taking two separate local taxis to get to the train station in Makkah, and then repeating the process upon arrival in Madinah.
                        </p>
                        <ul>
                            <li><strong>Fixed Pricing:</strong> The price per vehicle is split 9 ways, making it frequently cheaper than budget airline or train tickets.</li>
                            <li><strong>Unmatched Headroom:</strong> The Staria's futuristic, high-roof design ensures that even tall passengers don't feel claustrophobic during the 4.5-hour intercity drive.</li>
                        </ul>
                    </div>
                </div>

                {/* Grid: Ziyarat & Safety */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-2xl font-bold font-playfair mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                            <Camera className="text-emerald-500" /> Perfect for Ziyarat Tours
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                            Makkah and Madinah are rich with Islamic history. A <Link href="/services/ziyarat-tours" className="text-amber-600 hover:underline">Ziyarat tour</Link> requires navigating narrow streets near Jabal al-Nour (Cave of Hira) or Mount Uhud.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            The Staria's massive panoramic windows offer unparalleled viewing angles for the entire group. Its nimble turning radius allows it to reach historical sites that larger 50-seater buses physically cannot access, giving your group a superior, private touring experience.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-2xl font-bold font-playfair mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                            <Users2 className="text-emerald-500" /> Accessibility & Comfort
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                            Traveling with elderly parents or young children? The Staria features ultra-wide dual sliding doors and low step-in heights, making embarking and disembarking effortless while wearing Ihram.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            Multiple USB charging ports across all rows keep children’s devices powered during long drives, and the heavy-duty AC system is explicitly calibrated for the extreme Saudi Arabian summer heat.
                        </p>
                    </div>
                </div>

                {/* Final Booking Push */}
                <div className="text-center bg-navy-900 p-10 rounded-3xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
                    <h3 className="text-3xl font-bold font-playfair mb-4 relative z-10">Keep the Family Together</h3>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
                        Don't split your group across multiple small cars. Experience the joy of traveling together in modern comfort from the moment you land at Jeddah Airport.
                    </p>
                    <Link href="/booking?vehicle=staria" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-amber-500/40 relative z-10">
                        Check Hyundai Staria Availability <MapPin className="w-5 h-5" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
