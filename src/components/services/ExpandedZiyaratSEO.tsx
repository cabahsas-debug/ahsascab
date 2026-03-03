import React from 'react';
import Link from 'next/link';
import { BookOpen, MapPin, Compass, Mountain, Moon, History } from 'lucide-react';

export default function ExpandedZiyaratSEO() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 max-w-4xl">

                <div className="text-center mb-16">
                    <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block flex justify-center items-center gap-2">
                        <History size={18} /> Deep Historical Guide
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair text-slate-900 dark:text-white mb-6 leading-tight">
                        The Complete Pilgrim's Guide to Makkah & Madinah Ziyarat
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
                        Performing Umrah or Hajj is a physical and spiritual journey centered around the Haramain. However, stepping outside the Grand Mosques to explore the historical <Link href="/services/ziyarat-tours" className="text-amber-600 font-semibold hover:underline border-b border-amber-600/30">Ziyarat sites</Link> connects you directly to the life of Prophet Muhammad (ﷺ). Our <Link href="/booking" className="text-amber-600 font-semibold hover:underline">Ziyarat private taxi service</Link> ensures you experience these sites with respect and comfort.
                    </p>
                </div>

                {/* Deep Dive: Jabal al-Nour */}
                <div className="mb-16 bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                            <Mountain className="text-amber-600" size={24} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold font-playfair text-slate-900 dark:text-white">
                            Jabal al-Nour & The Cave of Hira (Makkah)
                        </h3>
                    </div>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                        <p>
                            Located just on the outskirts of Makkah, <strong>Jabal al-Nour</strong> (The Mountain of Light) holds the famous Cave of Hira. It is here that the Prophet (ﷺ) received the very first divine revelation of the Quran from the Angel Jibril (Gabriel).
                        </p>
                        <p>
                            Visiting the mountain is a profound experience. While climbing to the cave takes significant physical effort (usually 1.5 to 2 hours), simply standing at the base and reflecting on its historical weight is a core part of our Ziyarat tour.
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border-l-4 border-amber-500 my-6">
                            <h4 className="font-bold text-slate-900 dark:text-white mt-0 mb-2">Transport Tip</h4>
                            <p className="m-0 text-sm">
                                The roads approaching Jabal al-Nour can be heavily congested with large buses. By booking a private <Link href="/fleet/toyota-camry" className="text-amber-600 hover:underline">Toyota Camry</Link> or <Link href="/fleet/hyundai-staria" className="text-amber-600 hover:underline">Staria Van</Link>, our drivers can navigate tighter local streets, getting you much closer to the visitor center than traditional campaign buses.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive: Mina, Muzdalifah & Arafat */}
                <div className="mb-16 bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                            <Compass className="text-amber-600" size={24} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold font-playfair text-slate-900 dark:text-white">
                            The Sacred Mashaaer: Mina & Arafat
                        </h3>
                    </div>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                        <p>
                            Even if you are performing Umrah outside of the Hajj season, viewing the vast tent city of <strong>Mina</strong> and the plains of <strong>Arafat</strong> is highly recommended. These are the locations where millions gather annually for the pinnacle of the Islamic pilgrimage.
                        </p>
                        <ul className="space-y-4">
                            <li><strong>Mount Arafat (Jabal ar-Rahmah):</strong> Also known as the Mount of Mercy. This is where the Prophet (ﷺ) delivered his Farewell Sermon. Providing your family time to stand in this valley and make Dua in the quiet off-season is a beautiful experience.</li>
                            <li><strong>Muzdalifah:</strong> The open plain where pilgrims spend the night under the stars gathering pebbles for the Jamarat.</li>
                        </ul>
                    </div>
                </div>

                {/* Madinah Focus */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-2xl font-bold font-playfair mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                            <BookOpen className="text-emerald-500" /> Masjid Quba (Madinah)
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                            Masjid Quba is the first mosque built in Islamic history. The Prophet (ﷺ) laid its foundation stones upon arriving in Madinah during the Hijrah.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            It holds immense spiritual reward. The Prophet (ﷺ) said: <em>"Whoever makes ablutions at home and then goes and prays in the Mosque of Quba, he will have a reward like that of an 'Umrah."</em> Our Madinah <Link href="/services/makkah-madinah-taxi" className="text-amber-600 hover:underline">intercity taxis</Link> can seamlessly integrate this stop.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-2xl font-bold font-playfair mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                            <Moon className="text-emerald-500" /> Mount Uhud
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                            The site of the second major battle in Islam. The Prophet (ﷺ) said, <em>"Uhud is a mountain which loves us and which we love."</em>
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            Here lies the graveyard of the martyrs, including the Prophet's uncle, Hamza ibn Abd al-Muttalib (RA). A Ziyarat tour allows you to pay your respects at the Martyrs' Cemetery and understand the geographical strategy of the famous battle.
                        </p>
                    </div>
                </div>

                {/* Final Connect */}
                <div className="text-center bg-navy-900 p-10 rounded-3xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
                    <h3 className="text-3xl font-bold font-playfair mb-4 relative z-10">Private and Respected Travel</h3>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
                        Historical Ziyarat should not be rushed. By booking a private vehicle like the <Link href="/fleet/gmc-yukon-at4" className="text-amber-400 hover:underline text-sm ml-1">GMC Yukon</Link>, you control the pace. Stop for photos, make Dua at length, and return to your hotel comfortably.
                    </p>
                    <Link href="/booking?service=ziyarat" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-amber-500/40 relative z-10">
                        Schedule Your Private Ziyarat <MapPin className="w-5 h-5" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
