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



// Lazy load heavy components
const InstantPriceCalculator = dynamic(() => import('@/components/home/InstantPriceCalculator'));
const Features = dynamic(() => import('@/components/home/Features'));
const SafetyPromise = dynamic(() => import('@/components/home/SafetyPromise'));
const PassengerCare = dynamic(() => import('@/components/home/PassengerCare'));
const FleetCarouselWrapper = dynamic(() => import('@/components/home/FleetCarouselWrapper'));
const ReviewsSection = dynamic(() => import('@/components/reviews/ReviewsSection'));
const CustomerGallery = dynamic(() => import('@/components/home/CustomerGallery'));
const LatestArticles = dynamic(() => import('@/components/home/LatestArticles'));
const ExpandedSEOContent = dynamic(() => import('@/components/home/ExpandedSEOContent'));

const TransportServices = dynamic(() => import('@/components/home/TransportServices'));
const Testimonials = dynamic(() => import('@/components/home/Testimonials'));
const FleetGallery = dynamic(() => import('@/components/home/FleetGallery'));
const BookingGuide = dynamic(() => import('@/components/home/BookingGuide'));
const QuickBookingForm = dynamic(() => import('@/components/home/QuickBookingForm'));

export async function generateMetadata() {
  return constructMetadata({
    title: 'Trusted Umrah Taxi Service | Jeddah to Makkah & Madinah',
    description: 'Ahsas Cab offers trusted, affordable, and safe Umrah travel services worldwide. Serving pilgrims with comfort and care with our luxury fleet.',
    keywords: [
      "Umrah transport services", "Umrah travel agency", "Umrah packages worldwide",
      "Pilgrimage transport solutions", "Affordable Umrah transport", "Trusted Umrah travel partner",
      "Umrah bus service", "Umrah taxi service", "Umrah group transport", "International Umrah pilgrims",
      "Taxi Jeddah Airport to Makkah", "GMC Yukon Makkah"
    ],
    canonicalUrl: 'https://ahsascab.com',
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Ahsas Cab",
        "url": "https://alaqsaumrahtransport.com",
        "logo": "https://alaqsaumrahtransport.com/ahsas-logo-v2.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+966-54-549-4921",
          "contactType": "customer service",
          "areaServed": "SA",
          "availableLanguage": ["en", "ar"]
        },
        "sameAs": [
          "https://www.facebook.com/alaqsaumrahtransport",
          "https://www.instagram.com/alaqsaumrahtransport"
        ]
      },
      {
        "@type": "WebSite",
        "name": "Ahsas Cab Services",
        "url": "https://alaqsaumrahtransport.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://alaqsaumrahtransport.com/search?q={search_term_string}",
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
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-2xl shadow-2xl">
            <QuickBookingForm
              title="Book Your Ride"
              subtitle="Instant Confirmation"
              className="shadow-none border-0 bg-transparent"
            />
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
