import { CONTACT } from '@/data/home-content';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { Card, DataTable, Section, SectionHeading, SubHeading } from './ui';

const POPULAR_ROUTES = [
    ['Jeddah Airport to the Haram', 'about 85 to 95 km', '60 to 90 min'],
    ['Makkah to Madinah', 'about 435 to 450 km', 'about 4 h 20 min driving, 5 h with stops'],
    ['Makkah to Taif', 'about 90 km', 'about 1 hour'],
    ['Haramain station to the Haram', 'about 3.5 km', 'about 10 min'],
    ['Haram to Masjid e Aisha', 'about 7 km', 'about 15 to 20 min'],
];

const ROUTE_NOTES = [
    {
        title: 'Jeddah Airport to Makkah: what to expect',
        text: 'After immigration and baggage, most families are on the road within an hour of landing. The drive on Route 40 is straight and fast outside peak times. Your fare stays the same if traffic is slow.',
    },
    {
        title: 'Makkah to Madinah by road',
        text: 'The road trip suits families with heavy bags, elderly parents and anyone who wants door to door service. You leave from your Makkah hotel and arrive at your Madinah hotel without changing vehicles.',
    },
    {
        title: 'Makkah to Jeddah Airport: when to leave your hotel',
        text: 'Leave your Makkah hotel at least 4 to 4.5 hours before an international flight. The drive is 60 to 90 minutes, and airlines usually ask international passengers to check in about 3 hours before departure (check with your airline). After Jumu\'ah and in Ramadan, add another 30 minutes.',
    },
    {
        title: 'Makkah to Taif and back',
        text: 'A Taif trip makes a good rest day between Umrahs. The mountain air is cooler, and the driver waits for you all day.',
    },
];

const BOOKING_STEPS = [
    {
        title: 'Pick your vehicle and route',
        text: 'Tell us your route, date, flight number, hotel name, number of people and number of large bags. If you are not sure which car you need, send the bag count and we will choose for you.',
    },
    {
        title: 'Reservation: confirm your fixed fare on WhatsApp or online',
        text: `We reply with one fixed price and the car type in writing. Book on WhatsApp at ${CONTACT.whatsappDisplay}, by email at ${CONTACT.email} or through the form on this page. We aim to reply within 5 minutes.`,
        online: {
            title: 'Online taxi service in Makkah with no prepayment',
            text: 'Our online taxi service in Makkah takes no prepayment: you pay on arrival, in cash or by card. We never ask for your card or bank details on WhatsApp, so booking the online taxi service in Makkah from home is safe.',
        },
    },
    {
        title: 'Meet your driver',
        text: "The day before your trip, we send the driver's name, photo, phone number and car plate. At the airport he calls you as soon as your flight lands and guides you to where he is waiting. At a hotel, he waits at the main entrance and messages you when he is there.",
    },
];

export default function RoutesSection() {
    return (
        <>
            <Section id="routes">
                <SectionHeading
                    eyebrow="Most booked"
                    title="Popular routes from Makkah to Jeddah, Madinah and Taif"
                    intro="Pilgrims who ask for the best taxi service in Makkah to Jeddah or Madinah usually want two things: a fair price and a car that turns up on time. These are the routes we drive most."
                />
                <DataTable caption="Popular Ahsas Cab routes with distance and drive time" headers={['Route', 'Road distance', 'Usual drive time']} rows={POPULAR_ROUTES} />
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {ROUTE_NOTES.map((note) => (
                        <Card key={note.title}>
                            <SubHeading>{note.title}</SubHeading>
                            <p className="leading-relaxed">{note.text}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section id="how-to-book" tone="muted">
                <SectionHeading
                    eyebrow="Book in 10 minutes"
                    title="Book your Makkah taxi online in 3 steps"
                    intro="You can book from home in Lahore, London or Jakarta before you fly. Most bookings take less than ten minutes on WhatsApp."
                />
                <ol className="grid gap-6 md:grid-cols-3">
                    {BOOKING_STEPS.map((step, i) => (
                        <li key={step.title} className="relative rounded-[15px] border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
                            <span className="font-playfair text-5xl font-bold text-primary/30" aria-hidden>0{i + 1}</span>
                            <SubHeading>{step.title}</SubHeading>
                            <p className="leading-relaxed">{step.text}</p>
                            {step.online && (
                                <div className="mt-4 rounded-[12px] bg-slate-50 p-4">
                                    <h4 className="font-bold text-secondary">{step.online.title}</h4>
                                    <p className="mt-1 text-sm leading-relaxed">{step.online.text}</p>
                                </div>
                            )}
                        </li>
                    ))}
                </ol>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                        href={getWhatsAppLink('Salam Ahsas Cab, I would like to book a taxi.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-[15px] bg-[#1f8f4e] px-7 py-4 font-bold text-white hover:bg-[#187540] transition-colors"
                    >
                        WhatsApp {CONTACT.whatsappDisplay}
                    </a>
                    <a href={CONTACT.phoneHref} className="inline-flex items-center justify-center rounded-[15px] border border-secondary px-7 py-4 font-bold text-secondary hover:bg-secondary hover:text-white transition-colors">
                        Call {CONTACT.phoneDisplay}
                    </a>
                </div>
            </Section>
        </>
    );
}
