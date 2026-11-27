import { getBaseUrl } from '@/lib/url-utils';
import React from 'react';
import { Clock, ShieldCheck, Globe, Star, MapPin } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';
import ContactForm from '@/components/contact/ContactForm';
import Hero from '@/components/common/Hero';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import GlassCard from '@/components/ui/GlassCard';
import ContactGrid from '@/components/contact/ContactGrid';
import { constructMetadata } from '@/lib/metadata';
import { getSettings } from '@/lib/settings-storage';
import { businessSchemaId } from '@/lib/schema-server';
import { BUSINESS_ADDRESS_LINE, BUSINESS_MAP_URL, BUSINESS_PHONE } from '@/lib/contact';

export async function generateMetadata() {
    return constructMetadata({
        title: "Contact Ahsas Alrihlat | Book Your Ride Today",
        description: "Constant support for your Umrah journey. Contact us via WhatsApp or phone for immediate booking assistance.",
        keywords: [
            // Contact & Inquiries (25)
            "Contact Ahsas Umrah Cab", "Umrah taxi support", "Saudi Arabia transport inquiries", "book pilgrim taxi", "Umrah cab customer service", "Makkah taxi booking number", "Jeddah airport transfer contact", "Madinah transport reservation", "Umrah transport whatsapp number", "Ahsas Cab email address", "Umrah taxi phone number", "24/7 Umrah transport support", "pilgrim travel assistance", "Umrah fleet booking inquiry", "Umrah taxi fare estimate", "GMC Yukon booking contact", "Hyundai Staria rental phone", "Toyota Hiace Makkah booking", "Umrah group transport booking", "VIP Umrah car reservation", "cheap Umrah taxi contact", "Umrah cab online support", "Makkah Ziyarat booking", "Madinah Ziyarat contact", "Saudi transport agency number",
            // Services (25)
            "book Makkah to Madinah taxi", "Jeddah to Makkah cab reservation", "Madinah airport taxi booking", "Taif Ziyarat transport contact", "wheelchair Umrah cab booking", "family Umrah van reservation", "corporate Umrah travel contact", "luxury Umrah transport booking", "Umrah driver hire Saudi Arabia", "rent car with driver Makkah", "book VIP SUV Umrah", "Umrah bus rental contact", "Hajj transport booking", "Ramadan Umrah taxi reservation", "last minute Umrah cab", "pre book Umrah taxi", "Umrah transport cancellation", "Umrah taxi modifications", "Ahsas Cab booking status", "Umrah journey planner contact", "custom Umrah travel route", "multi city Umrah transport", "Haramain train station taxi", "Jeddah Islamic port transfer", "hotel to Haram taxi Makkah",
            // Trust / Locations (50)
            "safe Umrah taxi Saudi Arabia", "reliable Makkah transport company", "trusted Madinah cab service", "official Umrah transport provider", "licensed Saudi taxi for pilgrims", "English speaking Umrah driver contact", "Urdu speaker taxi Makkah", "Arabic speaking driver Madinah", "Jeddah airport meet and greet", "Makkah hotel pickup", "Madinah hotel drop off", "Umrah transport UK pilgrims", "USA pilgrim taxi Saudi Arabia", "Pakistan Umrah transport", "India Umrah cab booking", "Malaysia pilgrim transport", "Indonesia Umrah journey cab", "South Africa Umrah agency partner", "UAE to Makkah transport", "Dubai Umrah taxi booking", "global Umrah travel transport", "international pilgrim cab", "Umrah taxi reviews contact", "best Umrah car rental", "top rated Makkah cab", "affordable Jeddah to Makkah taxi", "premium Madinah transport", "VIP Jeddah airport transfer", "luxury Makkah Ziyarat", "comfortable Madinah Ziyarat", "cheap Umrah cab fare", "Umrah taxi discount", "Umrah transport promotional code", "Ahsas Cab head office", "Makkah taxi branch", "Jeddah transport office", "Madinah cab company address", "book taxi for Cave Hira", "Jabal Thawr transport booking", "Arafat taxi reservation", "Mina transport contact", "Muzdalifah cab booking", "Quba Mosque taxi contact", "Mount Uhud transport reservation", "Masjid Qiblatayn cab", "Taif city tour booking", "Jeddah city tour agency", "Al Ula transport contact", "Yanbu taxi agency", "Badar transport booking"
        ],
        canonicalUrl: '/contact',
    });
}

export default async function ContactPage() {
    const settings = await getSettings();

    const phone1 = BUSINESS_PHONE.display;
    const email = settings?.contact.email || 'info@ahsascab.com';
    const address = BUSINESS_ADDRESS_LINE;

    const baseUrl = getBaseUrl();
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${baseUrl}/contact#webpage`,
        "url": `${baseUrl}/contact`,
        "name": "Contact Ahsas Cab",
        "about": { "@id": businessSchemaId(baseUrl) },
        "mainEntity": { "@id": businessSchemaId(baseUrl) }
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

                        {/* Location */}
                        <FadeIn direction="up" delay={0.4}>
                            <GlassCard className="p-6 bg-white border border-gold/20 shadow-lg" id="map">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                                        <MapPin size={24} strokeWidth={1.5} aria-hidden />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg text-navy mb-1 font-playfair">Our location in Makkah</h3>
                                        <p className="text-slate-600 text-sm mb-4">{address}</p>
                                        <a
                                            href={BUSINESS_MAP_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-bold text-white hover:bg-secondary/90 transition-colors"
                                        >
                                            Open in Google Maps
                                        </a>
                                    </div>
                                </div>
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

