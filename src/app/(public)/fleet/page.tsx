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
            // Fleet / Vehicle Core (25)
            "Umrah Taxi Fleet", "GMC Yukon Booking", "Hyundai Staria Rental", "Toyota Hiace Bus Makkah", "Luxury Car Rental Saudi Arabia", "Family Umrah Transport", "vip umrah transport", "premium umrah cab", "luxury umrah taxi", "executive umrah transport", "business class umrah cab", "chauffeur driven car makkah", "rent a car with driver jeddah", "umrah private car hire", "safe umrah vehicles", "comfortable umrah transport", "latest model umrah cabs", "spacious umrah family van", "umrah group buses", "luxury SUV makkah", "premium sedan for umrah", "VIP GMC Yukon XL Makkah", "cheap umrah fleet", "budget umrah taxi", "reliable umrah cab vehicles",
            // Specific Vehicles & Capacities (25)
            "GMC Yukon XL for Umrah", "book GMC Yukon Makkah", "GMC Yukon taxi Jeddah airport", "Hyundai Staria 7 seater Makkah", "Hyundai Staria 9 seater Jeddah", "rent Hyundai Staria Umrah", "Toyota Hiace 11 passenger Makkah", "Toyota Hiace 15 passenger bus Umrah", "book Toyota Hiace Madinah", "Ford Taurus taxi Makkah", "Toyota Camry Umrah cab", "Hyundai Sonata taxi Jeddah to Makkah", "Lucid Motors Makkah transport", "Range Rover VIP Umrah", "Mercedes Benz Umrah taxi", "BMW luxury Umrah transport", "Chevrolet Suburban taxi Makkah", "Kia Carnival family van Umrah", "Honda Odyssey Umrah cab", "Nissan Patrol VIP transport Makkah", "Toyota Land Cruiser Umrah taxi", "Lexus SUV for Umrah", "5 seater taxi Jeddah to Makkah", "7 seater cab Makkah to Madinah", "11 seater bus Jeddah airport",
            // Locational Fleet Booking (25)
            "rent GMC Yukon Jeddah airport", "book Hyundai Staria Madinah airport", "hire Toyota Hiace Makkah", "VIP taxi Jeddah to Makkah", "luxury cab Makkah to Madinah", "family van Jeddah to Madinah", "group transport Makkah to Madinah", "bus rental Jeddah airport", "SUV taxi Makkah Haram", "executive car Madinah Haram", "taxi for Ziyarat Makkah", "cab for Madinah Ziyarat", "cab from Makkah to Taif", "Jeddah city tour vehicle rental", "Al Ula transport rental", "Yanbu taxi service fleet", "Badar transport vehicles", "car rental for Umrah pilgrims Saudi Arabia", "rent car in Makkah with driver", "rent car in Madinah for Umrah", "Jeddah Islamic port VIP transport", "mecca to medina luxury rent a car", "jeddah airport luxury transfers", "makkah hotel transfers fleet", "madinah train station taxi booking",
            // Target Audience / Occasion (25)
            "Umrah fleet for families", "VIP Umrah packages transport", "corporate Umrah travel", "luxury Umrah experience", "Ramadan Umrah transport UAE pilgrims", "UK pilgrims Umrah car rental", "USA pilgrims VIP Umrah transport", "disabled friendly Umrah transport", "wheelchair accessible taxi Makkah", "elderly pilgrims Umrah cab", "large group Umrah bus", "small family Umrah taxi", "couples VIP Umrah transport", "honeymoon Umrah luxury car", "business delegates Umrah transport", "government officials Umrah VIP cars", "celebrity Umrah transport Saudi Arabia", "affordable family cab Makkah", "luxury travel agency Saudi Arabia vehicles", "Hajj and Umrah transport fleet", "book umrah cab online", "reserve umrah taxi via whatsapp", "instant confirmation umrah transport", "best umrah fleet reviews", "top rated umrah transport company vehicles",
            // Arabic/Urdu variations (10)
            "أسطول نقل المعتمرين", "حجز جمس يوكن", "تأجير باص هيونداي", "سائق خاص مكة", "توصيل مطار جدة", "مكة المكرمة تاكسي", "المدينة المنورة سيارة", "عمرة ترانسبورت", "جمس يوكن للايجار", "تأجير سيارات فخمة مكة"
        ],
        alternates: {
            // Use static path if we don't have absolute URL mechanism here easily. Next.js alternates expects full URL or path.
            canonical: '/fleet',
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
