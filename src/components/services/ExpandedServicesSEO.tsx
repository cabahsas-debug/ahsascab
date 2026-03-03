import React from 'react';
import { MapPin, ShieldCheck, Clock, Users, Link as LinkIcon, Building, Luggage, BedDouble } from 'lucide-react';
import Link from 'next/link';

export default function ExpandedServicesSEO() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Main Heading - H2 */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair text-slate-900 dark:text-white mb-6 leading-tight">
                        Comprehensive Umrah Taxi Services: Your Guide to Holy Transport
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        When undertaking the sacred journey of Umrah or Hajj, reliable transportation is as critical as your accommodation. Ahsas Cab offers a dedicated suite of <Link href="/services/jeddah-airport-transfer" className="text-gold font-semibold hover:underline border-b border-gold/30">Umrah taxi services</Link> designed specifically for the unique needs of pilgrims travelling across Saudi Arabia. From immediate airport pickups to comprehensive historical Ziyarat tours, we manage the logistics so you can focus entirely on your worship.
                    </p>
                </div>

                {/* Detailed Service Breakdown 1 */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center">
                            <Building className="text-gold" size={28} />
                        </div>
                        <h3 className="text-3xl font-bold font-playfair text-slate-900 dark:text-white">
                            Intercity Transfers: The Makkah to Madinah Route
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        <div className="text-slate-700 dark:text-slate-300 space-y-5 leading-relaxed">
                            <p>
                                The journey between the two holy mosques is arguably the most important transit you will take. The distance between Makkah and Madinah is approximately 450 kilometers, translating to a 4.5-hour drive via the modern Haramain Expressway.
                            </p>
                            <p>
                                While high-speed trains exist, thousands of pilgrims prefer our <Link href="/services/makkah-madinah-taxi" className="text-gold font-bold hover:underline">Makkah to Madinah taxi</Link> service for its unmatched convenience. We pick you up directly from your hotel lobby in Makkah—handling all your heavy luggage—and drop you directly at your accommodation in Madinah.
                            </p>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mt-6">
                                <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                                    <ShieldCheck className="text-emerald-500" size={20} /> Why Choose Private Intercity Transport?
                                </h4>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                                        <span><strong>Zero Luggage Restrictions:</strong> Unlike trains, our SUVs (<Link href="/fleet/gmc-yukon-at4" className="text-gold hover:underline">GMC Yukon</Link>) can carry unlimited Zamzam water boxes and massive suitcases.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                                        <span><strong>Comfort Stops:</strong> Our drivers are happy to stop at authorized highway rest areas (Sasco) for prayer, food, or bathroom breaks at your command.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                                        <span><strong>Group Economics:</strong> For families of 5 or more, booking a <Link href="/fleet/hyundai-staria" className="text-gold hover:underline">Hyundai Staria van</Link> is significantly cheaper than buying individual train tickets.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Ziyarat Insight Card */}
                        <div className="bg-navy-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/20 rounded-full blur-3xl pointer-events-none" />
                            <h4 className="text-2xl font-bold font-playfair mb-4 flex items-center gap-3">
                                <MapPin className="text-gold" /> Exclusive Ziyarat Tours
                            </h4>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                No Umrah is complete without visiting the historical Islamic sites. We offer dedicated 3 to 4-hour <Link href="/services/ziyarat-tours" className="text-white underline decoration-gold underline-offset-4 font-semibold hover:text-gold transition-colors">Ziyarat packages</Link> in both holy cities.
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <strong className="block text-gold mb-1">Makkah Ziyarat Includes:</strong>
                                    <span className="text-sm text-slate-300">Jabal Al-Nour (Cave Hira), Jabal Thawr, Arafat, Mina, Muzdalifah, and Jannat al-Mu'alla.</span>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <strong className="block text-gold mb-1">Madinah Ziyarat Includes:</strong>
                                    <span className="text-sm text-slate-300">Masjid Quba (First Mosque in Islam), Mount Uhud (Battle Site), Masjid al-Qiblatayn, and Seven Mosques.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Airport Transfers Deep Dive */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold font-playfair text-slate-900 dark:text-white mb-8 text-center">
                        Airport Transfers: Ensuring a Smooth Arrival
                    </h3>
                    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 p-8 md:p-12">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                            Most pilgrims land at King Abdulaziz International Airport (JED) before proceeding to Makkah. Booking your <Link href="/services/jeddah-airport-transfer" className="text-gold font-bold hover:underline">Jeddah Airport taxi</Link> in advance eliminates the stress of haggling with local drivers after a long flight. Our operations team monitors your flight arrival via radar, meaning if your flight is delayed by 2 hours, your driver will automatically adjust his arrival time—no extra charge.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                                <div className="mx-auto w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                                    <Luggage size={24} />
                                </div>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Luggage Assistance</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Our chauffeurs meet you at the arrivals gate and handle your heavy bags directly to the vehicle.</p>
                            </div>
                            <div className="text-center p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center mb-4">
                                    <BedDouble size={24} />
                                </div>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Hotel Drop-off</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">We navigate the complex Makkah traffic around the Haram to drop you precisely at your hotel lobby.</p>
                            </div>
                            <div className="text-center p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                                <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full flex items-center justify-center mb-4">
                                    <Clock size={24} />
                                </div>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2">24/7 Dispatch</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Flights landing at 4:00 AM? Our night dispatch team guarantees your vehicle is waiting securely.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
