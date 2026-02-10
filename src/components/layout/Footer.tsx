'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';
import { useSettings } from '@/context/SettingsContext';

export default function Footer() {
    const { settings } = useSettings();

    if (!settings) return null;

    const { contact, general } = settings;

    return (
        <footer className="relative bg-secondary text-white pt-24 pb-12 overflow-hidden border-t border-primary/20">
            {/* Spiritual Pattern Overlay */}
            <div className="absolute inset-0 pattern-grid-fade opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Identity & Contact */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <Link href="/" className="flex items-center gap-4 group">
                                <div className="relative w-20 h-20 transition-transform duration-500 group-hover:scale-105">
                                    <Image
                                        src="/ahsas-logo-v2.png"
                                        alt={general.siteName}
                                        fill
                                        className="object-contain drop-shadow-lg"
                                        sizes="80px"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold font-playfair text-white leading-none">
                                        Ahsas <span className="text-primary">Cab</span>
                                    </span>
                                    <span className="text-xs font-bold text-white/80 tracking-[0.25em] uppercase leading-relaxed mt-1">
                                        Luxury Transport
                                    </span>
                                </div>
                            </Link>
                            <p className="text-white/60 leading-relaxed text-sm mt-4 max-w-sm">
                                {general.description}
                            </p>
                        </div>

                        <div className="flex gap-3">
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
                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/60 transition-all duration-300 hover:bg-primary hover:border-primary hover:text-secondary hover:-translate-y-1 shadow-lg"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={18} />
                                    </a>
                                )
                            ))}
                        </div>

                        <div className="space-y-4 pt-4">
                            {contact.address && (
                                <a href="https://www.google.com/maps?cid=13304906274217460428" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                                    <MapPin size={20} className="text-primary mt-1 min-w-[20px]" />
                                    <span className="text-white/70 group-hover:text-white transition-colors text-sm leading-relaxed">{contact.address}</span>
                                </a>
                            )}
                            <a
                                href={`https://wa.me/${(contact.phone || '').replace(/\D/g, '')}`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 group w-fit"
                            >
                                <div className="w-5 h-5 flex items-center justify-center rounded-sm bg-green-500/20 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                </div>
                                <span className="text-white/70 group-hover:text-primary transition-colors font-bold text-sm">WhatsApp Us</span>
                            </a>
                            {contact.phone && (
                                <a href={`tel:${contact.phone}`} className="flex items-center gap-3 group">
                                    <Phone size={20} className="text-primary" />
                                    <span className="text-white/70 group-hover:text-white transition-colors text-sm">{contact.phone}</span>
                                </a>
                            )}
                            {contact.email && (
                                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 group">
                                    <Mail size={20} className="text-primary" />
                                    <span className="text-white/70 group-hover:text-white transition-colors text-sm">{contact.email}</span>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold font-playfair text-white mb-6">Company</h3>
                        <ul className="space-y-3">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/about", label: "About Us" },
                                { href: "/blog", label: "Blog & Updates" },
                                { href: "/safety", label: "Safety Guide" },
                                { href: "/track-booking", label: "Track Booking" },
                                { href: "/contact", label: "Contact Support" },
                                { href: "/privacy", label: "Privacy Policy" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-white/60 text-sm hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold font-playfair text-white mb-6">Services</h3>
                        <ul className="space-y-3">
                            {[
                                { href: "/services/ramadan-transport", label: "Ramadan 2026 Transport" },
                                { href: "/services/jeddah-airport-transfer", label: "Jeddah Airport Transfer" },
                                { href: "/services/makkah-madinah-taxi", label: "Makkah ⇄ Madinah Taxi" },
                                { href: "/services/madinah-airport-transfer", label: "Madinah Airport Transfer" },
                                { href: "/services/ziyarat-tours", label: "Ziyarat Tours" },
                                { href: "/services/airport-transfers", label: "Airport Transfers" },
                                { href: "/services/intercity-transfer", label: "Intercity Transfer" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-white/60 text-sm hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Fleet & Newsletter */}
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold font-playfair text-white mb-6">Our Fleet</h3>
                        <ul className="space-y-3 mb-8">
                            {[
                                { href: "/fleet/gmc-yukon-at4", label: "GMC Yukon XL (VIP)" },
                                { href: "/fleet/toyota-camry", label: "Toyota Camry" },
                                { href: "/fleet/hyundai-staria", label: "Hyundai Staria" },
                                { href: "/fleet/hyundai-starex", label: "Hyundai Starex" },
                                { href: "/fleet/toyota-hiace", label: "Toyota Hiace" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-white/60 text-sm hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6 border-t border-white/5">
                            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 opacity-90">Newsletter</h4>
                            <form className="relative" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 pr-12 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1 bottom-1 w-10 h-10 rounded-full bg-primary text-secondary flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-300"
                                    aria-label="Subscribe"
                                >
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <div className="text-white/40 text-xs tracking-wide">
                        {general.footerText}
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-white/40 text-xs hover:text-primary transition-colors">Privacy Policy</Link>
                        <span className="text-white/10">|</span>
                        <Link href="/terms" className="text-white/40 text-xs hover:text-primary transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
