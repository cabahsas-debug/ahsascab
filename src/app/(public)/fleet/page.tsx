import Hero from '@/components/common/Hero';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Suspense } from 'react';
import FleetShowcaseLoader from '@/components/fleet/FleetShowcaseLoader';
import ComparisonTable from '@/components/fleet/ComparisonTable';
import FeatureHighlights from '@/components/fleet/FeatureHighlights';
import QuickBookingForm from '@/components/home/QuickBookingForm';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { getSectionContent, getSectionImage, getCustomField } from '@/lib/content-service';



export async function generateMetadata() {
    return {
        title: "Umrah Taxi Fleet 2025 | Book GMC Yukon & Hyundai Staria",
        description: "Explore our premium Umrah taxi fleet. Book a luxury GMC Yukon XL, family Hyundai Staria, or Toyota Hiace for your journey in Saudi Arabia.",
        keywords: [
            "Umrah Taxi Fleet", "GMC Yukon Booking", "Hyundai Staria Rental",
            "Toyota Hiace Bus Makkah", "Luxury Car Rental Saudi Arabia", "Family Umrah Transport",
            "أسطول نقل المعتمرين", "حجز جمس يوكن", "تأجير باص هيونداي"
        ],
        alternates: {
            canonical: 'https://ahsascab.com/fleet',
        },
    };
}

export default async function FleetPage() {
    const section = await getSectionContent('fleet-hero');

    const title = section?.title || "Our Premium Fleet";
    const subtitle = section?.subtitle || "Experience luxury and comfort with our diverse range of vehicles, tailored for your spiritual journey.";
    const bgImage = getSectionImage(section, 'desktop') || "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2000&auto=format&fit=crop";
    const badge = getCustomField(section, 'badge_text') || "Premium Collection 2025";

    return (
        <main className="bg-background">
            <Hero
                title={title}
                subtitle={subtitle}
                bgImage={bgImage}
                ctaText="Book Your Ride"
                ctaLink="/booking"
                badge={badge}
                breadcrumbs={<Breadcrumbs />}
            />
            <ScrollReveal width="100%">
                <Suspense fallback={<div className="h-[800px] w-full bg-navy-50 animate-pulse rounded-xl" />}>
                    <FleetShowcaseLoader />
                </Suspense>
            </ScrollReveal>
            <ScrollReveal width="100%">
                <ComparisonTable />
            </ScrollReveal>
            <ScrollReveal width="100%">
                <FeatureHighlights />
            </ScrollReveal>

            <section className="py-16 bg-navy-900/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/patterns/islamic-pattern.png')] opacity-10" />
                <div className="container relative z-10">
                    <ScrollReveal width="100%">
                        <div className="max-w-4xl mx-auto">
                            <QuickBookingForm
                                title="Book Your Luxury Ride"
                                subtitle="Reserve your premium vehicle for a comfortable spiritual journey"
                                variant="fleet"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
