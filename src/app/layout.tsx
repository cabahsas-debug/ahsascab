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
  const settings = await getSettings();
  const siteName = settings.general.siteName || "Ahsas Cab";

  return {
    metadataBase: new URL('https://ahsascab.com'),
    title: {
      default: settings.seo.defaultTitle || "Ahsas Cab - Premium Transport Services",
      template: `%s | ${siteName}`
    },
    description: "Book trusted Umrah transport services in Saudi Arabia. Ramadan 2026 bookings open. Private GMC Yukon & luxury taxi transfers from Jeddah Airport to Makkah & Madinah.",
    icons: {
      icon: [
        { url: '/favicon.png', sizes: '32x32' },
      ],
      shortcut: '/favicon.png',
      apple: '/apple-touch-icon.png',
    },
    verification: {
      // google: 'verification_code', // TODO: Add new verification code
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${interMono.variable} ${playfair.variable} ${openSans.variable} ${reemKufi.variable}`}>
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
