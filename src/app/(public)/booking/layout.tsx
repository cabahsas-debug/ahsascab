import { constructMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return constructMetadata({
        title: "Book Umrah Taxi | VIP Transfers | Ahsas Cab",
        description: "Book your Umrah taxi and intercity transfers online. Secure checkout and instant confirmation.",
        canonicalUrl: '/booking',
        noIndex: true, // Keep out of SERPs to save crawl budget
    });
}

export default function BookingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
