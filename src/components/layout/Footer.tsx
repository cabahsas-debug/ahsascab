'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin, Send, ShieldCheck, Clock, CreditCard } from 'lucide-react';
import { useSettings } from '@/context/SettingsContext';

export default function Footer() {
    const { settings } = useSettings();

    if (!settings) return null;

    const { contact, general } = settings;

    // SEO Data (Manual selection for footer to ensure clean layout)
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

    return (
        <footer className="relative bg-secondary text-white pt-24 pb-12 overflow-hidden border-t border-primary/20 font-sans">
            {/* Spiritual Pattern Overlay */}
            <div className="absolute inset-0 pattern-grid-fade opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Top Trust Indicators Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/10 pb-12 mb-16">
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-lg font-playfair">Official License</h4>
                            <p className="text-white/60 text-sm">Authorized by Ministry of Transport</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-lg font-playfair">24/7 Support</h4>
                            <p className="text-white/60 text-sm">Always available for your journey</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                            <CreditCard size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-lg font-playfair">Fixed Pricing</h4>
                            <p className="text-white/60 text-sm">Transparent rates, no hidden fees</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
                    {/* Column 1: Brand & Contact (4 cols) */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="flex flex-col">
                            <Link href="/" className="flex items-center gap-4 group mb-6">
                                <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-105">
                                    <Image
                                        src="/ahsas-logo-v2.png"
                                        alt={general.siteName}
                                        fill
                                        className="object-contain drop-shadow-lg"
                                        sizes="64px"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold font-playfair text-white leading-none">
                                        Ahsas <span className="text-primary">Cab</span>
                                    </span>
                                    <span className="text-[10px] font-bold text-white/80 tracking-[0.3em] uppercase leading-relaxed mt-1">
                                        Luxury Transport
                                    </span>
                                </div>
                            </Link>
                            <p className="text-white/60 leading-relaxed text-sm max-w-sm border-l-2 border-primary/30 pl-4">
                                {general.description}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a
                                href={`https://wa.me/${(contact.phone || '').replace(/\D/g, '')}`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-white/60 uppercase tracking-wide font-bold">Book via WhatsApp</p>
                                    <p className="text-white font-bold group-hover:text-primary transition-colors">+966 54 549 4921</p>
                                </div>
                            </a>

                            <div className="flex gap-4">
                                {[
                                    { icon: Facebook, href: contact.social.facebook, label: "Facebook" },
                                    { icon: Instagram, href: contact.social.instagram, label: "Instagram" },
                                    { icon: Twitter, href: contact.social.twitter, label: "Twitter" },
                                    { icon: Linkedin, href: contact.social.linkedin, label: "LinkedIn" }
                                ].map((social, idx) => (
                                    social.href && (
                                        <a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/60 transition-all duration-300 hover:bg-primary hover:border-primary hover:text-secondary hover:-translate-y-1"
                                            aria-label={social.label}
                                        >
                                            <social.icon size={18} />
                                        </a>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>

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
                            {[
                                { href: "/services/ziyarat-tours", label: "Ziyarat Tours" },
                                { href: "/services/airport-transfers", label: "Airport Transfers" },
                                { href: "/services/intercity-transfer", label: "Intercity Transfer" },
                                { href: "/fleet/gmc-yukon-at4", label: "VIP Transport" },
                                { href: "/services/ramadan-transport", label: "Ramadan Services" },
                            ].map((link) => (
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
                            {[
                                { href: "/fleet/gmc-yukon-at4", label: "GMC Yukon XL" },
                                { href: "/fleet/toyota-camry", label: "Toyota Camry" },
                                { href: "/fleet/hyundai-staria", label: "Hyundai Staria" },
                                { href: "/fleet/toyota-hiace", label: "Toyota Hiace" },
                            ].map((link) => (
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
