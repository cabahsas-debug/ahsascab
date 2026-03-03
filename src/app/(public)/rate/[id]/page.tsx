import { constructMetadata } from '@/lib/metadata';
import RateBookingClient from './RateBookingClient';

export async function generateMetadata() {
    return constructMetadata({
        title: "Rate Your Trip | Ahsas Cab",
        description: "Rate your recent Umrah taxi journey with Ahsas Cab.",
        noIndex: true, // Keep out of SERPs
    });
}

export default async function RateBookingPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <RateBookingClient bookingId={id} />;
}
