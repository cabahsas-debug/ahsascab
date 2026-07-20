'use client';

import Link from 'next/link';
import { Send } from 'lucide-react';
import { useSettings } from '@/context/SettingsContext';
import FooterTrustBar from './FooterTrustBar';
import FooterBrand from './FooterBrand';

export default function Footer() {
    const { settings } = useSettings();

    if (!settings) return null;

    const { contact, general } = settings;

    const popularRoutes = [
        { label: "Jeddah Airport to Makkah", href: "/services/jeddah-makkah-taxi" },
        { label: "Makkah to Madinah Taxi", href: "/services/makkah-madinah-taxi" },
        { label: "Madinah Airport to Hotel", href: "/services/madinah-airport-transfer" },
        { label: "Jeddah to Madinah", href: "/services/jeddah-madinah-taxi" },
        { label: "Makkah to Jeddah Airport", href: "/services/makkah-jeddah-taxi" },
    ];

    const religiousSites = [
        { label: "Masjid Quba", href: "/services/ziyarat-tours" },
        { label: "Mount Uhud", href: "/services/ziyarat-tours" },
        { label: "Cave Hira (Jabal Al-Nour)", href: "/services/ziyarat-tours" },
        { label: "Masjid Al-Qiblatain", href: "/services/ziyarat-tours" },
    ];

    const servicesLinks = [
        { href: "/services/ziyarat-tours", label: "Ziyarat Tours" },
        { href: "/services/airport-transfers", label: "Airport Transfers" },
        { href: "/services/intercity-transfer", label: "Intercity Transfer" },
        { href: "/fleet/gmc-yukon-at4", label: "VIP Transport" },
        { href: "/services/ramadan-transport", label: "Ramadan Services" },
    ];

    const fleetLinks = [
        { href: "/fleet/gmc-yukon-at4", label: "GMC Yukon XL" },
        { href: "/fleet/toyota-camry", label: "Toyota Camry" },
        { href: "/fleet/hyundai-staria", label: "Hyundai Staria" },
        { href: "/fleet/toyota-hiace", label: "Toyota Hiace" },
    ];

    return (
        <footer className="relative bg-secondary text-white pt-24 pb-12 overflow-hidden border-t border-primary/20 font-sans">
            {/* Spiritual Pattern Overlay */}
            <div className="absolute inset-0 pattern-grid-fade opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <FooterTrustBar />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
                    <FooterBrand general={general} contact={contact} />

                    {/* Column 2: Popular Routes (3 cols) */}
                    <div className="lg:col-span-3 flex flex-col">
                        <h3 className="text-lg font-bold font-playfair text-white mb-6 relative inline-block">
                            <span className="relative z-10">Popular Routes</span>
                            <span className="absolute bottom-1 left-0 w-1/2 h-2 bg-primary/20 -z-0"></span>
                        </h3>
                        <ul className="space-y-3">
                            {popularRoutes.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-white/60 text-sm hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/services" className="text-primary text-sm font-bold mt-2 inline-block hover:underline">
                                    View All Routes →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Services & Ziyarat (2 cols) */}
                    <div className="lg:col-span-2 flex flex-col">
                        <h3 className="text-lg font-bold font-playfair text-white mb-6 relative inline-block">
                            <span className="relative z-10">Services</span>
                            <span className="absolute bottom-1 left-0 w-1/2 h-2 bg-primary/20 -z-0"></span>
                        </h3>
                        <ul className="space-y-3">
                            {servicesLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-white/60 text-sm hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h4 className="text-sm font-bold font-playfair text-white mt-8 mb-4">Top Sites</h4>
                        <ul className="space-y-2">
                            {religiousSites.map((site) => (
                                <li key={site.label}>
                                    <Link href={site.href} className="text-white/50 text-xs hover:text-white transition-colors">
                                        {site.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Fleet & Newsletter (3 cols) */}
                    <div className="lg:col-span-3 flex flex-col">
                        <h3 className="text-lg font-bold font-playfair text-white mb-6 relative inline-block">
                            <span className="relative z-10">Our Fleet</span>
                            <span className="absolute bottom-1 left-0 w-1/2 h-2 bg-primary/20 -z-0"></span>
                        </h3>
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {fleetLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="bg-white/5 border border-white/5 rounded-lg p-2 text-center hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                                >
                                    <span className="text-white/70 text-xs font-medium block">{link.label}</span>
                                </Link>
                            ))}
                        </div>

                        <div className="bg-primary/10 rounded-xl p-5 border border-primary/20">
                            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Subscribe</h4>
                            <p className="text-xs text-white/50 mb-4">Get the latest Umrah travel updates.</p>
                            <form className="relative" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 pr-10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1 bottom-1 w-8 h-8 rounded-md bg-primary text-secondary flex items-center justify-center hover:bg-white transition-all duration-300"
                                    aria-label="Subscribe"
                                >
                                    <Send size={14} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <div className="text-white/40 text-xs tracking-wide">
                        {general.footerText}
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-white/40 text-xs hover:text-primary transition-colors">Privacy Policy</Link>
                        <span className="text-white/10">|</span>
                        <Link href="/terms" className="text-white/40 text-xs hover:text-primary transition-colors">Terms & Conditions</Link>
                        <span className="text-white/10">|</span>
                        <Link href="/about" className="text-white/40 text-xs hover:text-primary transition-colors">About Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
