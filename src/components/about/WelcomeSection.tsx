'use client';

import Link from 'next/link';
import { CheckCircle2, Quote } from 'lucide-react';

export default function WelcomeSection() {

    const parseMarkdown = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
        return parts.map((part, index) => {
            if (part && part.startsWith('**') && part.endsWith('**')) {
                const content = part.slice(2, -2);
                const subParts = content.split(/(\[.*?\]\(.*?\))/g);
                return (
                    <strong key={index} className="font-bold text-secondary">
                        {subParts.map((subPart, subIndex) => {
                            const linkMatch = subPart.match(/\[(.*?)\]\((.*?)\)/);
                            if (linkMatch) {
                                return (
                                    <Link key={subIndex} href={linkMatch[2]} className="hover:underline underline-offset-2">
                                        {linkMatch[1]}
                                    </Link>
                                );
                            }
                            return subPart;
                        })}
                    </strong>
                );
            }
            const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
            if (linkMatch) {
                return (
                    <Link href={linkMatch[2]} key={index} className="text-secondary font-semibold hover:underline decoration-2 underline-offset-2">
                        {linkMatch[1]}
                    </Link>
                );
            }
            return part;
        });
    };

    const whyChooseUsItems = [
        "**Reliable pilgrim transport** across Saudi Arabia",
        "**Specialized routes for Umrah pilgrims** (Makkah, Madinah, Jeddah)",
        "**Comfortable seating and air‑conditioned vehicles**",
        "**Affordable packages with transparent pricing**",
        "**Spiritual commitment to serving the Guests of Allah**"
    ];

    return (
        <section className="py-20 md:py-24 bg-transparent relative z-10">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-3 block">
                        Welcome | أهلاً بك
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 font-playfair leading-tight">
                        Welcome to Ahsas Cab
                        <span className="block text-2xl md:text-4xl mt-3 font-reem-kufi text-secondary">احساس الرحلات</span>
                    </h2>
                    <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
                        Your trusted partner in pilgrim travel across Saudi Arabia.
                        <span className="block font-arabic text-lg mt-2 text-secondary/80">شريكك الموثوق في رحلات العمرة عبر المملكة العربية السعودية.</span>
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Intro Content */}
                    <div className="space-y-8">
                        <p className="text-lg leading-relaxed text-slate-700">
                            {parseMarkdown("We specialize in providing **safe, comfortable, and affordable [Umrah transport services](/services)** for pilgrims traveling to Makkah, Madinah, and beyond.")}
                        </p>

                        <div className="bg-slate-50 border-l-4 border-secondary p-8 rounded-r-2xl shadow-sm">
                            <p className="text-xl font-medium text-navy italic mb-3 font-playfair">
                                &quot;Serving the Guests of Allah with comfort and care is our mission.&quot;
                            </p>
                            <p className="text-xl font-arabic text-secondary" dir="rtl">
                                "خدمة ضيوف الرحمن راحة وأمانة."
                            </p>
                        </div>

                        <p className="text-lg leading-relaxed text-slate-700">
                            {parseMarkdown("Our fleet of [modern buses and vans](/fleet) ensures **stress‑free [Jeddah Airport transfers](/services/jeddah-airport-transfer) and [Makkah to Madinah journeys](/services/makkah-madinah-taxi)**. We provide professional drivers dedicated to hospitality and punctuality. Whether you are traveling solo, with family, or in large groups, Ahsas Cab offers **[customized packages](/booking)** to meet your needs.")}
                        </p>
                    </div>

                    {/* Features & Quote */}
                    <div className="space-y-8">
                        {/* Features Box */}
                        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 ease-out" />

                            <h3 className="text-2xl font-bold text-navy mb-8 font-playfair flex justify-between items-center relative z-10">
                                Why Choose Us?
                                <span className="font-reem-kufi text-xl text-secondary">لماذا نحن؟</span>
                            </h3>
                            <ul className="space-y-5 relative z-10">
                                {whyChooseUsItems.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1 p-1 rounded-full bg-secondary/10 text-secondary">
                                            <CheckCircle2 size={16} strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-700 font-medium">{parseMarkdown(item)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Spiritual Quote */}
                        <div className="bg-navy text-white p-8 rounded-[32px] relative overflow-hidden shadow-xl border border-white/10">
                            <div className="absolute inset-0 bg-[url('/patterns/pattern-1.png')] opacity-10 mix-blend-overlay" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full pointer-events-none" />

                            <Quote className="absolute top-6 right-6 text-white/5 rotate-180" size={100} />

                            <blockquote className="relative z-10 text-xl font-playfair leading-relaxed opacity-90 mb-5 text-white/90 italic">
                                “And proclaim to the people the Hajj; they will come to you on foot and on every lean camel; they will come from every distant pass.”
                            </blockquote>
                            <blockquote className="relative z-10 text-2xl font-arabic leading-relaxed opacity-100 mb-6 text-right text-gold" dir="rtl">
                                "وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ"
                            </blockquote>
                            <cite className="block text-slate-400 font-bold not-italic text-sm tracking-wider uppercase border-t border-white/10 pt-6">
                                Qur’an (22:27) | سورة الحج
                            </cite>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
