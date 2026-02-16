import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Open_Sans, Reem_Kufi } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { MobileMenuProvider } from "@/context/MobileMenuContext";
import { PricingProvider } from '@/context/PricingContext';
import { SettingsProvider } from '@/context/SettingsContext';
// import Preloader from "@/components/common/Preloader"; 
// import NextTopLoader from 'nextjs-toploader';
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { getSettings } from "@/lib/settings-storage";
import { constructMetadata } from "@/lib/metadata";
import { generateLocalBusinessSchema } from "@/lib/schema-server";
import { ORGANIZATION_SCHEMA } from "@/lib/schema";
import "./globals.css";


const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const interMono = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
  display: 'swap',
  preload: true,
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: 'swap',
});

const reemKufi = Reem_Kufi({
  variable: "--font-reem-kufi",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#C5A049',
};

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: undefined, // Uses default from utility
    description: undefined, // Uses default from utility
    image: '/images/og-default.jpg', // Fallback image
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();
  const localBusinessSchema = await generateLocalBusinessSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${interMono.variable} ${playfair.variable} ${openSans.variable} ${reemKufi.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {settings.general.googleAnalyticsId && (
          <GoogleAnalytics gaId={settings.general.googleAnalyticsId} />
        )}

        <MobileMenuProvider>
          <SettingsProvider initialSettings={settings}>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              forcedTheme="light"
              enableSystem={false}
              disableTransitionOnChange
            >
              <PricingProvider>
                {/* 
                   DISABLED PRELOADER & TOPLOADER 
                   These often cause hydration mismatches or window-not-defined errors
                */}
                {/* <Preloader /> */}
                {/* <NextTopLoader
                  color="#D4AF37"
                  initialPosition={0.08}
                  crawlSpeed={200}
                  height={4}
                  crawl={true}
                  showSpinner={false}
                  easing="ease"
                  speed={200}
                  shadow="0 0 15px #D4AF37,0 0 5px #D4AF37"
                /> */}

                {children}

              </PricingProvider>
            </ThemeProvider>
          </SettingsProvider>
        </MobileMenuProvider>

        <div id="datepicker-portal" />
      </body>
    </html>
  );
}
