import Hero from '@/components/common/Hero';
import QuickBookingForm from '@/components/home/QuickBookingForm';
import { getSectionContent, getSectionImage } from '@/lib/content-service';
import { constructMetadata } from '@/lib/metadata';
import { getBaseUrl } from '@/lib/url-utils';
import { businessSchemaId } from '@/lib/schema-server';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { CONTACT } from '@/data/home-content';

import FaresSection from '@/components/home/sections/FaresSection';
import ServicesSection from '@/components/home/sections/ServicesSection';
import JourneySection from '@/components/home/sections/JourneySection';
import FleetSection from '@/components/home/sections/FleetSection';
import RoutesSection from '@/components/home/sections/RoutesSection';
import WhyUsSection from '@/components/home/sections/WhyUsSection';
import SafetySection from '@/components/home/sections/SafetySection';
import GuideSection from '@/components/home/sections/GuideSection';
import AboutSection from '@/components/home/sections/AboutSection';
import FaqSection, { faqSchema } from '@/components/home/sections/FaqSection';

const HOME_TITLE = 'Taxi Services in Makkah from SAR 200 | Ahsas Cab';
const HOME_DESCRIPTION = 'Makkah Taxi services since 2015. Jeddah Airport to Makkah from SAR 200, Madinah and Ziyarat trips. Pay on arrival. WhatsApp +966 53 286 6430';

export async function generateMetadata() {
  const metadata = await constructMetadata({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
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

  // Use the exact title, without the site name suffix that constructMetadata adds.
  return {
    ...metadata,
    title: { absolute: HOME_TITLE },
    openGraph: { ...metadata.openGraph, title: HOME_TITLE },
    twitter: { ...metadata.twitter, title: HOME_TITLE },
  };
}

export default async function Home() {
  const heroSection = await getSectionContent('home-hero');
  const heroImage = getSectionImage(heroSection, 'desktop') || '/images/blog/makkah-haram-view-new.png';

  const baseUrl = getBaseUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "name": "Ahsas Cab",
        "url": baseUrl,
        "inLanguage": "en",
        "publisher": { "@id": businessSchemaId(baseUrl) }
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        "url": baseUrl,
        "name": HOME_TITLE,
        "description": HOME_DESCRIPTION,
        "isPartOf": { "@id": `${baseUrl}/#website` },
        "about": { "@id": businessSchemaId(baseUrl) },
        "inLanguage": "en"
      }
    ]
  };

  return (
    <main className="overflow-x-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }} />

      <Hero
        title="Taxi services in Makkah with fixed fares for Umrah, airport and Ziyarat trips"
        titleClassName="text-3xl md:text-4xl lg:text-5xl"
        subtitle={
          <p className="normal-case">
            Landed at Jeddah tired, in Ihram, with bags and family? Ahsas Cab&apos;s taxi services in Makkah take you from the airport to your Makkah hotel door from SAR 200 per car, with no prepayment and free cancellation. Since 2015 our Urdu, English and Arabic speaking drivers have carried pilgrims to the Haram, Madinah, Taif and the Ziyarat sites, day and night: WhatsApp {CONTACT.whatsappDisplay} for your fixed fare.
          </p>
        }
        bgImage={heroImage}
        alt="Masjid al Haram in Makkah"
        layout="two-column"
        ctaText="Get your fixed fare on WhatsApp"
        ctaLink={getWhatsAppLink('Salam Ahsas Cab, I would like a fixed fare.')}
        secondaryCtaText="See 2026 fares"
        secondaryCtaLink="#fares"
      >
        <div className="hidden md:block w-full max-w-md ml-auto">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 relative overflow-hidden group">
            <div className="relative z-10">
              <QuickBookingForm
                className="shadow-none border-0 bg-transparent"
              />
            </div>
          </div>
        </div>
      </Hero>

      <FaresSection />
      <ServicesSection />
      <JourneySection />
      <FleetSection />
      <RoutesSection />
      <WhyUsSection />
      <SafetySection />
      <GuideSection />
      <AboutSection />
      <FaqSection />
    </main>
  );
}
