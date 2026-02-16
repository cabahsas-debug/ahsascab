import React from 'react';
import { MapPin, Clock, Shield, Star, Car } from 'lucide-react';
import Link from 'next/link';

export default function ExpandedSEOContent() {
    return (
        <section className="py-16 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Main SEO Header */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-playfair text-slate-900 dark:text-white mb-6">
                        Complete Guide to Umrah Taxi Service 2026
                    </h2>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                        Planning your spiritual journey? <strong>Ahsas Cab</strong> provides the most reliable <Link href="/routes/jeddah-airport-to-makkah" className="text-amber-600 hover:underline">Jeddah Airport to Makkah taxi</Link> service.
                        Unlike shared buses or trains, our <strong>private car with driver</strong> ensures a door-to-door experience, taking you directly from King Abdulaziz International Airport (KAIA) to your hotel in Makkah or Madinah.
                        Whether you need a luxury <strong>GMC Yukon for VIP transfer</strong> or an affordable <strong>Toyota Camry</strong>, we guarantee the best rates and professional service for pilgrims.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">

                    {/* Why Private Taxi */}
                    <div>
                        <h3 className="text-2xl font-bold font-playfair mb-4 flex items-center gap-2">
                            <Car className="text-amber-600" /> Why Choose Private Taxi over Haramain Train?
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Shield className="text-green-600 shrink-0 mt-1" size={20} />
                                <p className="text-slate-700 dark:text-slate-300">
                                    <strong>Door-to-Door Service:</strong> No need to drag luggage to train stations. We pick you up from the terminal and drop you at your hotel lobby.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="text-green-600 shrink-0 mt-1" size={20} />
                                <p className="text-slate-700 dark:text-slate-300">
                                    <strong>24/7 Availability:</strong> Flights land at all hours. Our <strong>Jeddah airport taxi</strong> service is active 24/7, unlike trains with fixed schedules.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <Star className="text-green-600 shrink-0 mt-1" size={20} />
                                <p className="text-slate-700 dark:text-slate-300">
                                    <strong>Fixed Pricing:</strong> No hidden meter charges. The price for your <Link href="/routes/makkah-to-madinah-taxi" className="text-amber-600 hover:underline">Makkah to Madinah taxi</Link> is agreed upon upfront.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Intercity Distances Table */}
                    <div>
                        <h3 className="text-2xl font-bold font-playfair mb-4 flex items-center gap-2">
                            <MapPin className="text-amber-600" /> Distances & Travel Times
                        </h3>
                        <div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                                    <tr>
                                        <th className="p-4 font-bold text-slate-900 dark:text-white">Route</th>
                                        <th className="p-4 font-bold text-slate-900 dark:text-white">Distance</th>
                                        <th className="p-4 font-bold text-slate-900 dark:text-white">Est. Time</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                                        <td className="p-4 text-slate-700 dark:text-slate-300">Jeddah Airport to Makkah</td>
                                        <td className="p-4 text-slate-700 dark:text-slate-300">100 km</td>
                                        <td className="p-4 text-slate-700 dark:text-slate-300">60 - 90 mins</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                                        <td className="p-4 text-slate-700 dark:text-slate-300">Makkah to Madinah</td>
                                        <td className="p-4 text-slate-700 dark:text-slate-300">450 km</td>
                                        <td className="p-4 text-slate-700 dark:text-slate-300">4.5 Hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                                        <td className="p-4 text-slate-700 dark:text-slate-300">Jeddah to Madinah</td>
                                        <td className="p-4 text-slate-700 dark:text-slate-300">400 km</td>
                                        <td className="p-4 text-slate-700 dark:text-slate-300">4 Hours</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Popular Questions / Semantic FAQ Snippets */}
                <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold font-playfair mb-6 text-center">Frequently Asked Questions about Umrah Transport</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">How much is a taxi from Jeddah Airport to Makkah?</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                                Our rates start from <strong>250 SAR</strong> for a sedan. For larger families, we offer Hyundai Staria and GMC Yukon. Prices are fixed and include airport meet & greet.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Do you stop at Miqat?</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                                Yes, for trips from <Link href="/routes/madinah-to-makkah-taxi" className="text-amber-600 hover:underline">Madinah to Makkah</Link>, we offer a complimentary stop at <strong>Masjid Dhul Hulaifah (Miqat)</strong> for you to enter Ihram.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Is it safe to book a taxi online?</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                                Absolutely. Ahsas Cab uses official, licensed vehicles. You can book now and pay later upon arrival. We provide driver details via WhatsApp before your trip.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Can I book a Ziyarat tour?</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                                Yes, we offer comprehensive <Link href="/routes/madinah-ziyarat-taxi" className="text-amber-600 hover:underline">Madinah Ziyarat</Link> and Makkah Ziyarat tours to historical sites like Quba Mosque, Mount Uhud, and Hira Cave.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
