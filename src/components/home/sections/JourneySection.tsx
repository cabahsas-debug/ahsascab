import { Card, Section, SectionHeading, SubHeading } from './ui';

const STEPS = [
    { title: 'Landing at Jeddah', text: 'Your driver meets you in arrivals with a name sign.' },
    { title: 'First Umrah', text: 'If you are in Ihram, we drop you near the Haram and help take your bags to the hotel.' },
    { title: 'Hotel check in', text: 'A door drop on Ibrahim Al Khalil Road, in Ajyad, Aziziyah or wherever you stay.' },
    { title: 'Ziyarat day', text: 'A morning tour of Hira, Thawr, Mina, Muzdalifah and Arafat.' },
    { title: 'Second Umrah', text: 'A return trip to Masjid e Aisha to enter Ihram.' },
    { title: 'Madinah', text: 'A private car to your Madinah hotel, with salah stops on the way.' },
    { title: 'Going home', text: 'A pickup timed to your flight from Jeddah or Madinah.' },
];

export default function JourneySection() {
    return (
        <Section id="umrah-journey" tone="navy">
            <SectionHeading
                dark
                eyebrow="From landing to departure"
                title="Umrah taxi services in Saudi Arabia from landing to departure"
                intro={
                    <p>
                        For the 2026 to 2027 season, Saudi Arabia issues an Umrah visa only after your hotel and ground transport are confirmed on the Nusuk platform. Travel guides call it &quot;no booking, no visa&quot;. So your airport and intercity taxi services in Saudi Arabia should be booked before you apply, not after you land.
                    </p>
                }
            />

            <p className="mb-6 font-semibold text-white">This is how a typical Umrah trip runs with us:</p>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {STEPS.map((step, i) => (
                    <li key={step.title} className="rounded-[15px] border border-white/10 bg-white/5 p-5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-secondary">{i + 1}</span>
                        <p className="mt-3 font-bold text-white">{step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-300">{step.text}</p>
                    </li>
                ))}
            </ol>

            <Card className="mt-10 border-white/10 bg-white text-slate-700">
                <SubHeading>Private Makkah taxi for Umrah pilgrims, with no shared seats</SubHeading>
                <p className="leading-relaxed">
                    Many cheap rides in Makkah are shared. Local drivers sell seats one at a time and only leave when the car is full. One driver filmed near Masjid Bilal said plainly that a car to Madinah waits for four paying passengers, even if that takes one, two or three hours. Shared cars also drop you at a central point, not at your hotel. With a private booking the car is yours. It leaves when you are ready and stops at your door.
                </p>
            </Card>
        </Section>
    );
}
