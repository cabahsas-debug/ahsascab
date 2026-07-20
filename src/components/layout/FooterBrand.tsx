import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Settings } from '@/lib/validations';

interface FooterBrandProps {
    general: Settings['general'];
    contact: Settings['contact'];
}

export default function FooterBrand({ general, contact }: FooterBrandProps) {
    return (
        <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col">
                <Link href="/" className="flex items-center gap-4 group mb-6">
                    <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-105">
                        <Image
                            src="/ahsas-logo-v2.png"
                            alt={general.siteName || "Ahsas Cab"}
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
                        <p className="text-white font-bold group-hover:text-primary transition-colors">{contact.phone || '+966 54 549 4921'}</p>
                    </div>
                </a>

                <div className="flex gap-4">
                    {[
                        { icon: Facebook, href: contact.social?.facebook, label: "Facebook" },
                        { icon: Instagram, href: contact.social?.instagram, label: "Instagram" },
                        { icon: Twitter, href: contact.social?.twitter, label: "Twitter" },
                        { icon: Linkedin, href: contact.social?.linkedin, label: "LinkedIn" }
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
    );
}
