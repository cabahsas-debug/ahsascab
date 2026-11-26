import { Clock, Languages, MapPinned, BadgeCheck, BadgeDollarSign } from 'lucide-react';
import { Card, DataTable, Section, SectionHeading, SubHeading } from './ui';

const OPTIONS = [
    ['Makkah Bus', 'SAR 4 per ride', 'solo pilgrims with light bags, short city trips', 'stops can be a walk from your hotel; hard with big suitcases'],
    ['Makkah Taxi (official metered taxi)', 'by the meter', 'short rides inside the city', 'fare changes with traffic; you still carry your own bags'],
    ['Uber, Careem or Jeeny', 'app price', 'quick city rides', 'prices rise with demand; pickup points near the Haram are limited'],
    ['Shared local car', 'per seat', 'budget travellers', 'waits until full; drops at a central point'],
    ['Ahsas Cab private car', 'fixed price per car', 'families, elderly parents, airport, Madinah and Ziyarat trips', 'must be booked ahead'],
];

const FEATURES = [
    {
        icon: Clock,
        title: 'Makkah Taxi Service 24/7, with flight tracking',
        text: 'Our office is open daily from 9 AM to 10 PM, and WhatsApp support runs 24 hours a day, including the hours after Fajr and late at night after Umrah. We aim to reply within 5 minutes. For airport pickups we track your flight number. If you land late, your driver waits and the price stays the same.',
    },
    {
        icon: MapPinned,
        title: 'Multiple drop offs on one booking',
        text: 'Travelling with relatives in two hotels? One car can drop the first family in Aziziyah and the second in Ajyad. Tell us when you book, and we agree the price for the extra stop with you first.',
    },
    {
        icon: Languages,
        title: 'English, Urdu and Arabic speaking drivers',
        text: 'Tell us your language when you book. Our drivers speak Urdu, English and Arabic, so you can explain your hotel, your needs and your stops without pointing at a map.',
    },
    {
        icon: BadgeCheck,
        title: 'Licensed, registered drivers',
        text: 'Every Ahsas Cab driver holds a valid Saudi driving licence and passes our driver checks before his first trip.',
    },
    {
        icon: BadgeDollarSign,
        title: 'Fixed fares with no surge pricing',
        text: 'The price you agree on WhatsApp is the price you pay. It does not change with traffic, the time of day or a busy Friday.',
    },
];

export default function WhyUsSection() {
    return (
        <Section id="why-ahsas-cab">
            <SectionHeading
                eyebrow="Honest comparison"
                title="Why pilgrims choose Ahsas Cab as a trusted Makkah taxi service"
                intro="Pilgrims often ask which is the best taxi service in Saudi Arabia for Umrah. The honest answer depends on your group and your bags. Makkah has good public options now, and for some trips they are cheaper than us."
            />

            <div className="grid gap-6 lg:grid-cols-2 mb-10 leading-relaxed">
                <p>
                    Most pilgrims reach Makkah tired. You land after a long flight, often already in Ihram, with suitcases, children or older parents, and then the bargaining starts. Pilgrims who filmed their first days here report drivers outside the Haramain station asking 50 to 70 riyals for a hotel 8 or 9 km away, then dropping to 30 once you walk off. Local vloggers say the same about the pickup points near Misfalah and Kudai: the first price is rarely the real price.
                </p>
                <p>
                    We run our taxi services in Makkah the other way round. You tell us your flight, your hotel and how many bags you have. We send you one price for the car before you fly, and the driver calls you as soon as you land.
                </p>
            </div>

            <DataTable caption="Ways to get around Makkah compared" headers={['Option', 'Typical price', 'Good for', 'Watch out for']} rows={OPTIONS} stickyFirstColumn />

            <p className="mt-6 leading-relaxed">
                The official Makkah Taxi was launched by the Royal Commission for Makkah City and Holy Sites, with hybrid and electric cars at 47 locations across the city. A solo pilgrim with a backpack going from Ajyad to the Haram will pay less on the bus or in a Makkah Taxi. A family landing at Jeddah with parents and suitcases is better off with a car booked in advance. That second trip is the one we are built for.
            </p>

            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {FEATURES.map(({ icon: Icon, title, text }) => (
                    <li key={title}>
                        <Card className="h-full">
                            <Icon className="mb-4 h-8 w-8 text-amber-600" aria-hidden />
                            <SubHeading>{title}</SubHeading>
                            <p className="leading-relaxed">{text}</p>
                        </Card>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
