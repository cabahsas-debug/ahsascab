'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Car, Plane, Building2 } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { getWhatsAppLink } from '@/lib/whatsapp';

/*
  Transport Services Section
  - Intercity Transport
  - Airport Transport
  - Hotel Transfers
  SEO Optimized with semantic HTML and keyword-rich content.
*/

const services = [
    {
        id: 'intercity',
        title: 'Intercity Transport',
        subtitle: 'Makkah • Madinah • Jeddah • Taif',
        description: 'Experience safe, comfortable travel between major Saudi cities. Our premium intercity transport ensures a smooth journey for pilgrims performing Umrah and Ziyarat. Punctual, reliable, and stress-free long-distance travel.',
        image: '/images/services/intercity-transport.png',
        icon: <Car size={32} />,
        link: '/services/intercity-transfer',
        whatsappMessage: 'Salam Ahsas Cab, I am interested in Intercity Transport (Makkah-Madinah).',
        keywords: ['intercity transport Saudi Arabia', 'Makkah to Madinah transport', 'long-distance travel for pilgrims']
    },
    {
        id: 'airport-pickups',
        title: 'Airport Transport',
        subtitle: 'Jeddah (KAIA) • Madinah (Prince Mohammad)',
        description: 'Seamless pickup and drop-off from Jeddah and Madinah airports. We offer real-time flight tracking, professional meet-and-greet service, and luggage assistance for a stress-free arrival in the Holy Land.',
        icon: <Plane size={32} />,
        image: '/images/services/airport-transfer-real.jpg',
        link: '/services/airport-transfers',
        whatsappMessage: 'Salam Ahsas Cab, I need an Airport Transfer (Jeddah/Madinah).',
        keywords: ['Jeddah Airport pickup', 'Madinah Airport transfer', 'Umrah airport transport']
    },
    {
        id: 'hotel-transfers',
        title: 'Hotel Transfers',
        subtitle: 'Door-to-Door • Makkah & Madinah Hotels',
        description: 'Quick and reliable transfers between your hotel and the Holy Mosques. Enjoy premium comfort and cleanliness, perfectly suitable for families, groups, and elderly pilgrims seeking ease of movement.',
        icon: <Building2 size={32} />,
        image: '/images/services/hotel-transfer-real.jpg',
        link: '/services/hotel-transfers', // Updated link to new dedicated page
        whatsappMessage: 'Salam Ahsas Cab, I need a Hotel Transfer in Makkah/Madinah.',
        keywords: ['hotel transfer Makkah', 'hotel shuttle Madinah', 'Umrah hotel transport']
    },
    {
        id: 'ziyarat-tours',
        title: 'Ziyarat Tours',
        subtitle: 'Historical Sites • Guided Tours',
        description: 'Enrich your Umrah with visits to sacred sites like Masjid Quba, Mount Uhud, and Cave Hira. Our knowledgeable drivers ensure you experience the history of Islam with comfort and convenience.',
        icon: <Building2 size={32} />, // Using Building2 as placeholder, ideally 'Landmark' or similar if available
        image: '/images/blog/makkah-haram-view.jpg', // Fixed broken path
        link: '/services/ziyarat-tours',
        whatsappMessage: 'Salam Ahsas Cab, I am interested in a Ziyarat Tour.',
        keywords: ['Makkah Ziyarat', 'Madinah Ziyarat', 'Islamic historical sites']
    },
    {
        id: 'ramadan-transport',
        title: 'Ramadan Transport',
        subtitle: '24/7 Availability • Tarawih & Qiyam',
        description: 'Specialized transport services for the Holy Month. We handle the heavy traffic during peak times so you can focus on your fasting and prayers. Pre-book to guarantee your ride.',
        icon: <Car size={32} />,
        image: '/images/hero/ramadan-transport-hero.png',
        link: '/services/ramadan-transport',
        whatsappMessage: 'Salam Ahsas Cab, I need transport during Ramadan.',
        keywords: ['Ramadan transport Makkah', 'Tarawih taxi', 'Ramadan 2026 transport']
    }
];

export default function TransportServices() {
    return (
        <section className="relative py-24 bg-secondary overflow-hidden -mt-12 md:-mt-20 z-20">
            {/* Seamless Gradient Transition from Hero */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-secondary/80 to-secondary z-10" />
            <ParticleBackground />

            {/* Spiritual Pattern Overlay */}
            <div className="absolute inset-0 pattern-grid-fade opacity-10 pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-4" suppressHydrationWarning>
                <FadeIn>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Our Core Services</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-white mb-6">
                            Premium Transport for <span className="text-primary">Your Spiritual Journey</span>
                        </h2>
                        <p className="text-lg text-white/80">
                            Comprehensive travel solutions designed for the Guests of Allah. From airport arrivals to intercity travel, we ensure every mile is comfortable and safe.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <FadeIn key={service.id} delay={index * 0.1} scale>
                            <article className="group h-full bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-500 border border-white/10 flex flex-col hover:-translate-y-2">
                                {/* Image Container - Now Clickable */}
                                <Link href={service.link} className="relative h-48 md:h-64 overflow-hidden block">
                                    <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10" />
                                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10" />
                                    <Image
                                        src={service.image}
                                        alt={service.title + " - " + service.keywords[0]}
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 z-20 bg-navy/90 backdrop-blur p-2 rounded-lg shadow-sm text-gold ring-1 ring-white/10">
                                        {service.icon}
                                    </div>
                                </Link>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="mb-4">
                                        <Link href={service.link}>
                                            <h3 className="text-2xl font-bold font-playfair text-white mb-1 hover:text-gold transition-colors">
                                                {service.title}
                                            </h3>
                                        </Link>
                                        <p className="text-sm font-medium text-gold">
                                            {service.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-white/70 leading-relaxed mb-6 flex-1">
                                        {service.description}
                                    </p>

                                    <div className="pt-6 border-t border-white/10 mt-auto">
                                        <Link
                                            href={service.link}
                                            className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all cursor-pointer hover:text-white"
                                            aria-label={`Read more about ${service.title}`}
                                        >
                                            Read More <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
