import React from 'react';
import { Clock, ShieldCheck, Globe, Star } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';
import ContactForm from '@/components/contact/ContactForm';
import Hero from '@/components/common/Hero';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import GlassCard from '@/components/ui/GlassCard';
import ContactGrid from '@/components/contact/ContactGrid';
import { constructMetadata } from '@/lib/metadata';
import { getSettings } from '@/lib/settings-storage';

export async function generateMetadata() {
    return constructMetadata({
        title: "Contact Ahsas Alrihlat | Book Your Ride Today",
        description: "Constant support for your Umrah journey. Contact us via WhatsApp or phone for immediate booking assistance.",
        canonicalUrl: 'https://ahsascab.com/contact',
    });
}

export default async function ContactPage() {
    const settings = await getSettings();

    // Fallback values
    const phone1 = settings?.contact.phone || '+966 54 549 4921';
    const email = settings?.contact.email || 'info@alaqsaumrahtransport.com';
    const address = settings?.contact.address || 'Al Aziziyah, Makkah, Saudi Arabia';

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TransportationService",
        "name": "Ahsas Alrihlat",
        "alternateName": "احساس الرحلات",
        "image": "https://alaqsaumrahtransport.com/images/logo.png",
        "@id": "https://alaqsaumrahtransport.com",
        "url": "https://alaqsaumrahtransport.com",
        "telephone": phone1,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Aziziyah",
            "addressLocality": "Makkah",
            "addressRegion": "Makkah Region",
            "postalCode": "24243",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.4478336,
            "longitude": 39.8126588
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": phone1,
            "contactType": "customer service",
            "areaServed": "SA",
            "availableLanguage": ["en", "ar", "ur"]
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero
                title="Get in Touch | تواصل معنا"
                subtitle="Reliable Booking & 24/7 Support for Your Umrah Journey. Premium Transport Services from Makkah to Madinah."
                bgImage="/images/contact-hero.jpg"
                breadcrumbs={<Breadcrumbs />}
            />

            <div className="container mx-auto px-4 -mt-16 relative z-10">
                {/* Intro Trust Strip */}
                <FadeIn direction="up" delay={0.1}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {[
                            { icon: Clock, text: "24/7 Service", sub: "خدمة على مدار الساعة" },
                            { icon: ShieldCheck, text: "Licensed & Safe", sub: "مرخص ومؤمن" },
                            { icon: Globe, text: "Multilingual", sub: "دعم متعدد اللغات" },
                            { icon: Star, text: "Top Rated", sub: "أعلى تقييم" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 text-center transform hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-10 h-10 mx-auto mb-2 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-navy text-sm md:text-base">{item.text}</h3>
                                <p className="text-xs text-slate-500 font-arabic">{item.sub}</p>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Contact Info Column */}
                    <div className="lg:col-span-5 space-y-6">
                        <ContactGrid contactSettings={{
                            phone: phone1,
                            email,
                            address
                        }} />

                        {/* Map Placeholder */}
                        <FadeIn direction="up" delay={0.4}>
                            <GlassCard className="p-0 overflow-hidden min-h-[400px] relative flex items-center justify-center bg-white border border-gold/20 shadow-lg" id="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.526883410923!2d39.8126588!3d21.447833599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21d9da1e4d599%3A0xb8a485c3949902cc!2sAl%20Aqsa%20Umrah%20Transport!5e0!3m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    className="w-full h-full min-h-[400px] border-0 grayscale hover:grayscale-0 transition-all duration-700"
                                    title="Ahsas Alrihlat Map"
                                    allowFullScreen
                                />
                            </GlassCard>
                        </FadeIn>
                    </div>

                    {/* Contact Form Column */}
                    <div className="lg:col-span-7">
                        <FadeIn direction="left" delay={0.3}>
                            <GlassCard className="p-8 md:p-10 border-t-4 border-t-secondary bg-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-10 -mt-10" />
                                <div className="mb-8 relative z-10">
                                    <h2 className="text-3xl font-bold text-navy mb-2 font-playfair">
                                        Send Us a Message
                                        <span className="block text-xl font-arabic font-normal text-secondary mt-2">أرسل لنا رسالة</span>
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed">
                                        Need a custom quote for your Umrah group? Have questions about our GMC Yukon fleet?
                                        Fill out the form below and our team will get back to you within minutes.
                                    </p>
                                </div>
                                <ContactForm />
                            </GlassCard>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div >
    );
}
