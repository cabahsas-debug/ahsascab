import React, { Suspense } from 'react';
import Link from 'next/link';
import { Bus, MapPin, Users, Headphones, ArrowRight, Calendar, CheckCircle, Car, Check } from 'lucide-react';
import styles from './page.module.css';
import FleetSectionLoader from '@/components/services/FleetSectionLoader';
import FadeIn from '@/components/common/FadeIn';
import Hero from '@/components/common/Hero';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import FAQSection from '@/components/services/FAQSection';
import GlassCard from '@/components/ui/GlassCard';
import TrustAmenities from '@/components/services/TrustAmenities';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { constructMetadata } from '@/lib/metadata';

const ReviewsSection = dynamic(() => import('@/components/reviews/ReviewsSection'), {
    loading: () => <div className="h-[400px] w-full bg-gray-100 dark:bg-navy-900 animate-pulse" />
});

export async function generateMetadata() {
    return constructMetadata({
        title: "Umrah Taxi Services & Ziyarat Tours | Jeddah, Makkah, Madinah",
        description: "Comprehensive Umrah transport services: Jeddah Airport pickup, Makkah to Madinah taxi, and historic Ziyarat tours. Reliable 24/7 service.",
        keywords: [
            "Umrah Taxi Services", "Ziyarat Tours Makkah", "Intercity Transfers Saudi",
            "Jeddah Airport Pickup", "Madinah Ziyarat", "Makkah to Madinah Taxi",
            "خدمات نقل المعتمرين", "زيارات المدينة المنورة", "توصيل مطار جدة"
        ],
        canonicalUrl: 'https://ahsascab.com/services',
    });
}

const processSteps = [
    {
        title: "Book Online",
        description: "Select your vehicle and schedule your pickup in just a few clicks.",
        icon: <Calendar size={24} />
    },
    {
        title: "Get Confirmation",
        description: "Receive instant confirmation with driver details and tracking link.",
        icon: <CheckCircle size={24} />
    },
    {
        title: "Enjoy the Ride",
        description: "Travel in comfort and safety to your destination.",
        icon: <Car size={24} />
    }
];

export default function ServicesPage() {
    const services = [
        {
            title: 'Makkah to Madinah Taxi & Private Car',
            description: 'Premium intercity transfers between the Holy Cities. Enjoy a comfortable 450km journey in our wide range of fleets including GMC Yukon XL and Hyundai H1.',
            image: '/images/routes/makkah-madinah-route-hero.png',
            link: '/services/makkah-madinah-taxi',
            features: ['Door-to-Door Service', 'Luxury Fleet Options', '4.5 Hour Average Time'],
            alt: 'Makkah to Madinah Intercity Private Taxi App Map'
        },
        {
            title: 'Jeddah Airport (KAIA) to Makkah Taxi',
            description: 'Hassle-free airport authorities approved pickup. Our driver will welcome you at Jeddah Airport arrivals for a seamless transfer to your Makkah hotel or Haram.',
            image: '/images/routes/jeddah-airport-hero-professional.png',
            link: '/services/jeddah-airport-transfer',
            features: ['Flight Tracking', 'Free Meet & Greet', 'Luggage Assistance'],
            alt: 'Jeddah Airport (KAIA) to Makkah Hotel Transfer Driver Chauffeur'
        },
        {
            title: 'VIP Luxury GMC Yukon Umrah Transport',
            description: 'Travel in style with our VIP service. Top-of-the-line vehicles (GMC Yukon XL) and private chauffeurs for maximum privacy and ease.',
            image: '/images/fleet/gmc-yukon-hero-professional.png',
            link: '/booking?service=luxury',
            features: ['Private Chauffeur', 'Latest Model Vehicles', 'Privacy Partition'],
            alt: 'GMC Yukon XL 2025 VIP Black SUV for Umrah Transport'
        },
        {
            title: 'Makkah & Madinah Ziyarat Tours',
            description: 'Comprehensive Ziyarat packages to holy sites. Visit Masjid Quba, Mount Uhud, Jabal Al-Nour, and other historical Islamic landmarks with knowledgeable drivers.',
            image: '/images/routes/makkah-ziyarat-hero.png',
            link: '/services/ziyarat-tours',
            features: ['Custom Itinerary', 'Expert Local Knowledge', 'Flexible Hours'],
            alt: 'Makkah and Madinah Historical Ziyarat Tour Mountains and Mosques'
        }
    ];

    const serviceFAQs = [
        {
            question: "How do I book a taxi from Jeddah Airport to Makkah?",
            answer: <span>Booking is simple. You can reserve your <Link href="/services/jeddah-airport-transfer" className="text-gold hover:underline">Jeddah Airport to Makkah taxi</Link> online in advance. We monitor your flight arrival and our driver meets you at the terminal with a name sign.</span>
        },
        {
            question: "What is the best transport for Umrah families?",
            answer: <span>For families, we highly recommend our <Link href="/fleet/gmc-yukon-at4" className="text-gold hover:underline">GMC Yukon XL</Link> or <Link href="/fleet/hyundai-staria" className="text-gold hover:underline">Hyundai Staria</Link>. These spacious vehicles offer ample luggage space and AC comfort for the 1-hour journey to Makkah.</span>
        },
        {
            question: "Do you offer direct Makkah to Madinah taxi services?",
            answer: <span>Yes, our <Link href="/services/makkah-madinah-taxi" className="text-gold hover:underline">Makkah to Madinah private taxi</Link> service is the most convenient option. Unlike the train or bus, we offer door-to-door service from your Makkah hotel lobby directly to your Madinah hotel.</span>
        },
        {
            question: "Can I stop at Miqat on the way to Makkah?",
            answer: "Absolutely. If you are travelling from Madinah or Jeddah, our drivers are happy to stop at the designated Miqat (e.g., Bir Ali or Juhfah) for you to assume Ihram and pray."
        },
        {
            question: "Is the taxi fare fixed or metered?",
            answer: <span>Our prices are fixed and transparent. You will know the exact cost of your <Link href="/booking" className="text-gold hover:underline">Umrah transport booking</Link> upfront, with no hidden fees or toll charges.</span>
        },
        {
            question: "Do you provide Ziyarat tours in Makkah and Madinah?",
            answer: <span>Yes, our comprehensive <Link href="/services/ziyarat-tours" className="text-gold hover:underline">Ziyarat packages</Link>. Visit historical sites like Jabal Al-Nour, Masjid Quba, and Mount Uhud in the comfort of a private vehicle with a knowledgeable driver.</span>
        }
    ];

    return (
        <main className="bg-background min-h-screen">
            {/* Hero Section */}
            <Hero
                title="Trusted Umrah Transport Services in Saudi Arabia"
                subtitle="From Jeddah Airport pickup to Ziyarat tours, we provide safe, affordable, and comfortable taxi services for pilgrims."
                bgImage="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2000&auto=format&fit=crop"
                ctaText="Book Your Ride"
                ctaLink="/booking"
                secondaryCtaText="Contact Us"
                secondaryCtaLink="/contact"
                breadcrumbs={<Breadcrumbs />}
                alt="Jeddah Airport to Makkah & Madinah Umrah Taxi Services Fleet"
            />

            {/* Trust Amenities Section - NEW */}
            <TrustAmenities />

            {/* Services Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/patterns/islamic-pattern.png')] opacity-5 z-0 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold text-center text-navy-900 dark:text-white mb-16 font-playfair">Our Premium <span className="text-gold">Umrah Transport</span> Services</h2>
                    </FadeIn>
                    <div className="flex flex-col gap-24 px-4 max-w-7xl mx-auto">
                        {services.map((service, index) => {
                            // Zig-Zag Logic:
                            // Index 0 (First): Image Left, Text Right (Image Order 1)
                            // Index 1 (Second): Text Left, Image Right (Image Order 2)
                            const isImageRight = index % 2 !== 0;

                            return (
                                <div key={index} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                                    {/* Image Side */}
                                    <div className={`w-full lg:w-1/2 relative h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500 z-10" />

                                        <Image
                                            src={service.image}
                                            alt={service.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>

                                    {/* Content Side */}
                                    <div className={`w-full lg:w-1/2 flex flex-col justify-center ${isImageRight ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="mb-6">
                                            <h3 className="text-3xl lg:text-5xl font-bold font-playfair text-navy-900 dark:text-white mb-6 leading-tight">
                                                {service.title}
                                            </h3>
                                            <div className="h-2 w-24 bg-gold rounded-full" />
                                        </div>

                                        <p className="text-navy-600 dark:text-gray-300 text-lg leading-relaxed mb-8 font-light">
                                            {service.description}
                                        </p>

                                        {/* Benefits List */}
                                        <ul className="mb-10 space-y-4">
                                            {service.features.map((feat, i) => (
                                                <li key={i} className="flex items-center gap-3 text-navy-700 dark:text-gray-200 font-medium text-lg">
                                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 text-gold flex items-center justify-center border border-gold/20">
                                                        <Check size={14} strokeWidth={3} />
                                                    </span>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href={service.link}
                                            className="inline-flex items-center gap-2 text-navy-900 bg-gold hover:bg-gold/90 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all shadow-lg hover:shadow-gold/30 group/link self-start"
                                        >
                                            Learn More
                                            <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-white dark:bg-navy-900 border-y border-gray-100 dark:border-navy-800">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold text-center text-navy-900 dark:text-white mb-16 font-playfair">How It Works</h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <FadeIn key={index} delay={index * 0.2} direction="up">
                                <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 dark:bg-navy-800 border border-gray-100 dark:border-navy-700 hover:shadow-xl transition-all duration-300 relative group">
                                    <div className="absolute top-4 right-4 text-6xl font-bold text-gray-200 dark:text-navy-700 opacity-20 group-hover:opacity-40 transition-opacity font-outfit">
                                        {index + 1}
                                    </div>
                                    <div className="bg-gold/10 p-4 rounded-full text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-3 font-playfair">{step.title}</h3>
                                    <p className="text-navy-600 dark:text-gray-400 font-light leading-relaxed">{step.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fleet Showcase */}
            <section className="py-24 bg-gray-50 dark:bg-navy-950">
                <FadeIn>
                    <Suspense fallback={<div className="h-[600px] w-full bg-gray-200 dark:bg-navy-800 animate-pulse rounded-3xl" />}>
                        <FleetSectionLoader />
                    </Suspense>
                </FadeIn>
            </section>

            {/* Reviews Section - NEW */}
            <ReviewsSection />

            {/* FAQSection */}
            <FAQSection items={serviceFAQs} title="Frequently Asked Questions about Umrah Transport" />

            {/* Booking CTA */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-navy-900 z-0">
                    <div className="absolute inset-0 opacity-10 bg-[url('/patterns/islamic-pattern.png')] bg-repeat" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <FadeIn>
                        <blockquote className="text-3xl md:text-5xl font-playfair text-white font-bold leading-tight mb-8">
                            &ldquo;Your journey of faith deserves comfort and care.&rdquo;
                        </blockquote>
                        <Link href="/booking" className="inline-flex items-center gap-3 bg-white text-navy-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl hover:-translate-y-1 transform duration-300">
                            Book Your Ride Now <ArrowRight size={24} />
                        </Link>
                    </FadeIn>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Umrah Transport",
                        "provider": {
                            "@type": "TransportationService",
                            "name": "Ahsas Cab"
                        },
                        "areaServed": {
                            "@type": "Place",
                            "name": "Saudi Arabia"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Transport Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Pilgrim Transport Makkah and Madinah"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Jeddah Airport to Makkah Transport"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />
        </main>
    );
}
