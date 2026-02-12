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
        canonicalUrl: 'https://ahsascab.com/about',
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
        "url": "https://alaqsaumrahtransport.com/about",
        "mainEntity": {
            "@type": "TransportationService",
            "name": "Ahsas Cab",
            "sameAs": "https://alaqsaumrahtransport.com"
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