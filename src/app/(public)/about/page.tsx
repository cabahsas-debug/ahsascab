import { getBaseUrl } from '@/lib/url-utils';
import React from 'react';
import Hero from '@/components/common/Hero';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import WelcomeSection from '@/components/about/WelcomeSection';
import CompanyStory from '@/components/about/CompanyStory';
import MissionVision from '@/components/about/MissionVision';
import CoreValues from '@/components/about/CoreValues';
import TrustSection from '@/components/about/TrustSection';
import SEOContent from '@/components/about/SEOContent';
import ImpactStats from '@/components/about/ImpactStats';
import TeamTeaser from '@/components/about/TeamTeaser';
import PilgrimVoices from '@/components/about/PilgrimVoices';
import { getSectionContent, getSectionImage } from '@/lib/content-service';
import ScrollReveal from '@/components/ui/ScrollReveal';


import { constructMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return constructMetadata({
        title: "About Ahsas Cab | Premier Makkah Taxi | من نحن",
        description: "Learn about Ahsas Cab, the leading Umrah transport provider in Saudi Arabia. We offer safe, reliable, and comfortable journeys for pilgrims.",
        keywords: [
            // Brand & Identity (25)
            "About Ahsas Umrah Cab", "Ahsas Cab transport company", "Umrah transport agency Saudi Arabia", "pilgrim travel partners", "Makkah taxi company", "reliable Umrah transport provider", "trusted Umrah cab service", "best Umrah taxi in Jeddah", "licensed transport company Saudi Arabia", "professional Umrah drivers", "Umrah transport specialists", "Saudi Arabia premium car rental", "safe pilgrim transport", "experienced Umrah drivers Makkah", "Ahsas Cab reviews", "Ahsas Cab fleet", "Ahsas Cab history", "Umrah transport experts", "top rated Umrah taxi company", "certified Umrah transport", "Ahsas Cab mission", "Ahsas Cab vision", "pilgrim focused transport", "VIP Umrah services company", "Ahsas Cab contact info",
            // Core Services Offered (25)
            "Jeddah airport transfer services", "Makkah to Madinah transport services", "Madinah airport taxi services", "Ziyarat tour services Makkah", "Ziyarat tour services Madinah", "Umrah family transport services", "VIP vehicle rental Saudi Arabia", "GMC Yukon rental service", "Hyundai Staria rental service", "Toyota Hiace bus rental Makkah", "Umrah group transport services", "private car hire Makkah", "chauffeur driver service Jeddah", "wheelchair accessible Umrah transport", "luxury SUV rental Jeddah airport", "affordable Umrah taxi packages", "Umrah cab booking online", "24/7 Umrah taxi service", "instant Umrah cab booking", "WhatsApp Umrah taxi booking", "female pilgrim safe transport", "elderly pilgrim transport care", "Umrah transport corporate accounts", "Hajj and Umrah transport solutions", "Saudi railways train station transfer",
            // Trust & Reliability (25)
            "safe Umrah journey", "secure pilgrim transport", "transparent Umrah taxi pricing", "no hidden fees Umrah cab", "English speaking Umrah drivers", "Urdu speaking drivers Makkah", "Arabic speaking taxi drivers", "clean Umrah vehicles", "sanitized Umrah cabs", "punctual Umrah transport", "on time airport transfers Jeddah", "GPS tracked Umrah taxi", "insured Umrah transport", "comfortable ride to Makkah", "hassle free Umrah travel", "peace of mind Umrah transport", "family friendly Umrah taxi", "child seat available Umrah cab", "VIP treatment Umrah transport", "luxury travel experience Saudi Arabia", "excellent customer service Umrah cab", "5 star Umrah taxi", "trusted by thousands of pilgrims", "satisfaction guaranteed Umrah transport", "premium quality Umrah vehicles",
            // Target Market Locations (25)
            "Umrah transport UK pilgrims", "Umrah taxi for USA pilgrims", "Pakistan pilgrims Umrah cab", "Indian pilgrims Makkah transport", "Malaysia Umrah group bus", "Indonesia Umrah family van", "South Africa Umrah premium transport", "UAE residents Umrah taxi", "Dubai to Makkah transport", "Umrah transport for international travelers", "global Umrah packages transport", "Oman to Saudi Umrah cab", "Qatar to Makkah taxi", "Bahrain Umrah road transport guide", "Makkah hotels transfer", "Madinah hotels taxi", "Jeddah Islamic port passenger transfer", "Yanbu port to Makkah transport", "King Abdulaziz Airport taxi", "Prince Mohammad Bin Abdulaziz Airport cab", "Haramain High Speed Railway station taxi", "Makkah train station transfer", "Madinah train station to hotel cab", "Jeddah train station taxi", "Taif airport to Makkah cab"
        ],
        canonicalUrl: '/about',
    });
}

export default async function AboutPage() {
    const section = await getSectionContent('about-hero');
    const title = section?.title || "About Ahsas Cab";
    const subtitle = section?.subtitle || "Serving Guests of Allah with VIP Transport & Reliable Airport Transfers";
    const bgImage = getSectionImage(section, 'desktop') || "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=2000&auto=format&fit=crop";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Ahsas Cab",
        "description": "Information about Ahsas Cab, a leading provider of pilgrim transport services in Saudi Arabia.",
        "url": `${getBaseUrl()}/about`,
        "mainEntity": {
            "@type": "TransportationService",
            "name": "Ahsas Cab",
            "sameAs": `${getBaseUrl()}`
        }
    };

    return (
        <main className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="contents">
                <Hero
                    title={title}
                    subtitle={subtitle}
                    bgImage={bgImage}
                    breadcrumbs={<Breadcrumbs />}
                />
                <ScrollReveal width="100%">
                    <WelcomeSection />
                </ScrollReveal>
                <ScrollReveal width="100%">
                    <ImpactStats />
                </ScrollReveal>
                <ScrollReveal width="100%">
                    <CompanyStory />
                </ScrollReveal>
                <ScrollReveal width="100%">
                    <MissionVision />
                </ScrollReveal>
                <ScrollReveal width="100%">
                    <CoreValues />
                </ScrollReveal>
                <ScrollReveal width="100%">
                    <TrustSection />
                </ScrollReveal>
                <ScrollReveal width="100%">
                    <TeamTeaser />
                </ScrollReveal>
                <ScrollReveal width="100%">
                    <PilgrimVoices />
                </ScrollReveal>
                <SEOContent />
            </div>
        </main>
    );
}
