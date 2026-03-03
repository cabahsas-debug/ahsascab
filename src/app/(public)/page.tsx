import dynamic from 'next/dynamic';
import Link from 'next/link';
// import styles from './page.module.css'; // Removed
import FadeIn from '@/components/common/FadeIn';
import Hero from '@/components/common/Hero';

import { ArrowRight } from 'lucide-react';

import { getSectionContent, getSectionImage, getCustomField } from '@/lib/content-service';
import { getWhatsAppLink } from '@/lib/whatsapp';

import AnimatedBackground from '@/components/ui/AnimatedBackground';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { constructMetadata } from '@/lib/metadata';
import { getBaseUrl } from '@/lib/url-utils';



import InstantPriceCalculator from '@/components/home/InstantPriceCalculator';
import Features from '@/components/home/Features';
import TransportServices from '@/components/home/TransportServices';

// Lazy load non-critical components below the fold
const SafetyPromise = dynamic(() => import('@/components/home/SafetyPromise'));
const PassengerCare = dynamic(() => import('@/components/home/PassengerCare'));
const FleetCarouselWrapper = dynamic(() => import('@/components/home/FleetCarouselWrapper'));
const ReviewsSection = dynamic(() => import('@/components/reviews/ReviewsSection'));
const CustomerGallery = dynamic(() => import('@/components/home/CustomerGallery'));
const LatestArticles = dynamic(() => import('@/components/home/LatestArticles'));
const ExpandedSEOContent = dynamic(() => import('@/components/home/ExpandedSEOContent'));

const Testimonials = dynamic(() => import('@/components/home/Testimonials'));
const FleetGallery = dynamic(() => import('@/components/home/FleetGallery'));
const BookingGuide = dynamic(() => import('@/components/home/BookingGuide'));
import QuickBookingForm from '@/components/home/QuickBookingForm';

export async function generateMetadata() {
  return constructMetadata({
    title: 'Trusted Umrah Taxi Service | Jeddah to Makkah & Madinah',
    description: 'Ahsas Cab offers trusted, affordable, and safe Umrah travel services worldwide. Serving pilgrims with comfort and care with our luxury fleet.',
    keywords: [
      // Core Service Keywords (15)
      "Umrah cab service", "Umrah transport Saudi Arabia", "pilgrim taxi", "Ahsas Umrah Cab", "trusted Umrah transport", "premium Umrah taxi", "affordable Umrah cab", "luxury Umrah transport", "Umrah taxi booking online", "Umrah travel agency Saudi Arabia", "Umrah group transport", "family Umrah taxi", "cheap Umrah cab", "best Umrah transport company", "VIP Umrah transport",
      // Locational / Airport Transfers (30)
      "taxi Jeddah airport to Makkah", "Jeddah to Makkah transport", "Jeddah Islamic Port to Makkah taxi", "cab from Jeddah to Madinah", "taxi Makkah to Madinah", "Makkah to Jeddah airport cab", "Madinah to Jeddah airport taxi", "Madinah airport to Madinah hotel transport", "Jeddah airport to Madinah taxi fare", "Makkah to Madinah Haram taxi", "Jeddah to Makkah Haram transport", "Jeddah to Taif taxi", "Makkah to Taif taxi service", "airport transfer Jeddah", "Madinah airport transfer", "Saudi Arabia airport taxi", "booking transport from Jeddah to Makkah", "Jeddah airport VIP transfer", "private taxi Jeddah to Makkah", "Jeddah airport to Makkah hotel transport", "Makkah to Madinah train station taxi", "Madinah train station to hotel taxi", "Jeddah to Makkah private car", "Madinah to Makkah luxury transport", "Jeddah to Al Ula transport", "Jeddah to Yanbu taxi", "Makkah to Yanbu taxi", "cab from Madinah to Yanbu", "Jeddah to Badar transport", "Makkah to Badar taxi",
      // Ziyarat & Tourism (25)
      "Makkah Ziyarat taxi", "Madinah Ziyarat cab", "historical places Makkah transport", "historical places Madinah taxi", "Taif Ziyarat taxi", "Jabal al-Nour transport", "Cave of Hira taxi", "Jabal Thawr transport", "Arafat transport", "Muzdalifah taxi", "Mina transport service", "Quba Mosque taxi", "Masjid al-Qiblatayn transport", "Mount Uhud taxi service", "Battle of Khandaq site transport", "Jeddah city tour cab", "Taif city tour transport", "Al Baqi cemetery taxi", "Masjid Quba visitation transport", "Makkah holy sites tour", "Madinah holy sites tour", "Ziyarat packages Makkah", "Ziyarat packages Madinah", "Umrah Ziyarat private car", "guided Ziyarat tour transport",
      // Fleet / Vehicle Specific (20)
      "GMC Yukon XL booking Saudi Arabia", "Hyundai Staria Umrah taxi", "Toyota Hiace bus Makkah", "Ford Taurus taxi Jeddah", "Toyota Camry Umrah transport", "Hyundai Sonata Makkah taxi", "GMC Yukon Umrah booking", "11 passenger bus Makkah", "7 seater Umrah cab", "5 seater taxi Jeddah to Makkah", "VIP car rental Makkah", "luxury SUV Umrah transport", "family van rental Madinah", "coaster bus for Umrah group", "book GMC Yukon Makkah", "rent Hyundai Staria Jeddah", "Toyota Hiace for rent Madinah", "luxury fleet Umrah Saudi Arabia", "premium SUV Jeddah to Madinah", "chauffeur driven car Makkah",
      // Target Audience / Intent (15)
      "Umrah packages worldwide transport", "international Umrah pilgrims transport", "UK pilgrims Umrah taxi", "USA pilgrims Umrah transport", "Pakistan to Saudi Umrah transport", "India to Saudi Umrah cab", "Malaysia Umrah group transport", "Indonesia Umrah travel taxi", "safe Umrah journey transport", "comfortable Umrah ride", "reliable taxi for Umrah", "online Umrah taxi reservation", "Umrah transport cost calculator", "Umrah taxi app alternatives", "book Umrah cab via WhatsApp"
    ],
    canonicalUrl: '/',
  });
}

export default async function Home() {
  const heroSection = await getSectionContent('home-hero');
  // SEO Optimized Fallbacks
  const heroTitle = heroSection?.title || "Premium Umrah Transport";
  // Styled Subtitle with Arabic
  const heroSubtitleText = heroSection?.subtitle || "Jeddah, Makkah & Madinah • Airport Transfers • Intercity Travel";
  const heroSubtitleContent = (
    <>
      <span className="block mb-4 opacity-90 font-light tracking-wider uppercase text-sm md:text-base">{heroSubtitleText}</span>
      <h2
        className="block text-xl md:text-2xl mt-2 text-gold font-bold tracking-wide drop-shadow-sm opacity-100"
        style={{ fontFamily: 'var(--font-reem-kufi)' }}
        lang="ar"
        dir="rtl"
      >
        خدمة نقل المعتمرين VIP
      </h2>
    </>
  );

  const heroImage = getSectionImage(heroSection, 'desktop') || "/images/blog/makkah-haram-view-new.png";
  const ctaText = getCustomField(heroSection, 'cta_text') || "Book Now / احجز الآن";
  const ctaLink = "/booking";

  const baseUrl = getBaseUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Ahsas Cab",
        "url": baseUrl,
        "logo": `${baseUrl}/ahsas-logo-v2.png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+966-54-549-4921",
          "contactType": "customer service",
          "areaServed": "SA",
          "availableLanguage": ["en", "ar"]
        },
        "sameAs": [
          "https://www.facebook.com/ahsascab",
          "https://www.instagram.com/ahsascab"
        ]
      },
      {
        "@type": "WebSite",
        "name": "Ahsas Cab Services",
        "url": baseUrl,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <main className="overflow-x-hidden bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <Hero
        title={heroTitle}
        subtitle={heroSubtitleContent}
        bgImage={heroImage}
        layout="two-column"
        ctaText={ctaText}
        ctaLink={ctaLink}
        backgroundChildren={<AnimatedBackground />}
      >
        <div className="hidden md:block w-full max-w-md ml-auto">
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-3 rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative overflow-hidden group">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative z-10">
              <QuickBookingForm
                title="Book Your Ride"
                subtitle="Instant Confirmation"
                className="shadow-none border-0 bg-transparent"
              />
            </div>
          </div>
        </div>
      </Hero>

      {/* Transport Services Section - NEW */}
      <ScrollReveal width="100%">
        <TransportServices />
      </ScrollReveal>

      {/* Instant Price Calculator Section */}
      <InstantPriceCalculator />

      {/* Booking Guide Section - NEW */}
      <BookingGuide />

      {/* Features Section */}
      <ScrollReveal width="100%">
        <Features />
      </ScrollReveal>

      {/* Passenger Care Section */}
      <PassengerCare />

      {/* Fleet Gallery - NEW */}
      <ScrollReveal width="100%">
        <FleetGallery />
      </ScrollReveal>

      {/* Fleet Section */}
      <FadeIn>
        <FleetCarouselWrapper />
      </FadeIn>

      {/* Gallery Section */}
      <CustomerGallery />

      {/* Testimonials Section */}
      <ScrollReveal width="100%">
        <Testimonials />
      </ScrollReveal>
      {/* Reviews Section */}
      <ReviewsSection />

      {/* SEO Content Section - Enhanced */}
      <ExpandedSEOContent />

      {/* Latest Articles Section */}
      <LatestArticles />

      {/* Safety Promise Section - Moved to Bottom */}
      <FadeIn>
        <SafetyPromise />
      </FadeIn>

      {/* CTA Section */}
      <section className="relative py-20 bg-secondary text-white overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 pattern-grid-fade opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary via-secondary to-[#0a0f1d] z-0"></div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6 tracking-tight drop-shadow-lg">
              Ready to Begin Your <span className="text-gold italic">Blessed Journey?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Book your VIP transport now and let us take care of the logistics while you focus on your worship.
            </p>
            <a
              href={getWhatsAppLink("Salam Ahsas Cab, I am ready to book my journey.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              Book Your Ride via WhatsApp
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>
      {/* Force Rebuild */}
    </main>
  );
}
