import { Card, DataTable, Section, SectionHeading, SubHeading } from './ui';

const JEDDAH_OPTIONS = [
    ['Ahsas Cab private taxi', '60 to 90 min', 'SAR 200 per car in a Camry', 'your hotel door'],
    ['Haramain train from the KAIA station', 'about 45 min', 'per person, see the official HHR booking site', 'Rusaifah station, about 3.5 km from the Haram'],
    ['Northwest Bus', 'about 1 to 1.5 hours', 'SAR 44 per person (March 2026)', 'Jarwal bus station, about a 15 minute walk to the Haram'],
    ['Uber or Careem', '60 to 90 min', 'changes with demand', 'your hotel, if the car is allowed in'],
];

export default function GuideSection() {
    return (
        <Section id="umrah-transport-guide" tone="muted">
            <SectionHeading
                eyebrow="Plan your trip"
                title="The complete guide to Umrah transportation 2026/2027"
                intro="There is more than one good way to move around Makkah. Here is a plain comparison so you can choose for your own family."
            />

            <SubHeading>Jeddah Airport to Makkah by taxi, train, bus or app</SubHeading>
            <DataTable caption="Jeddah Airport to Makkah transport options" headers={['Option', 'Time to Makkah', 'Cost', 'Where it ends']} rows={JEDDAH_OPTIONS} stickyFirstColumn />
            <p className="mt-6 leading-relaxed">
                The Pilgrim Experience Program puts the train ride from the KAIA station to Makkah at about 45 minutes. The station is inside Terminal 1, so you walk to the platform without leaving the airport. The train is a good choice for one or two people with light bags. Families with big suitcases often find a single car simpler than train plus taxi.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                <Card>
                    <SubHeading>From the Haramain station to your hotel</SubHeading>
                    <p className="leading-relaxed">The Makkah station is in Rusaifah, about 3.5 km from the Haram. Taxis, app cars and a shuttle wait outside. Pilgrims report that drivers at the exit ask far more than the fair fare, and that the shuttle needs an app ticket and drops you some way from many hotels. If you are arriving by train with elderly parents, book the last leg in advance.</p>
                </Card>
                <Card>
                    <SubHeading>Getting around Makkah in Ramadan and Hajj crowds</SubHeading>
                    <p className="leading-relaxed">The Makkah Bus, run under the Royal Commission for Makkah City and Holy Sites, grew to 12 routes and 431 stations by January 2026. Stations near the Haram include Ajyad Al Masafi, Jarwal and Shaib Amir. A single ride costs SAR 4. In Ramadan the roads near the Haram slow to a crawl at Iftar and Taraweeh, and walking is often faster for the last kilometre. Book taxis for the times that matter, such as airport runs and late night returns.</p>
                </Card>
                <Card>
                    <SubHeading>Makkah to Madinah by road or by train</SubHeading>
                    <p className="leading-relaxed">The Haramain train runs Makkah to Madinah in about 2 hours 20 minutes, with Economy fares from SAR 162 before VAT. Each passenger may carry one bag up to 25 kg and one hand item. You will also need a taxi at each end, from your Makkah hotel to Rusaifah and from Madinah station to your hotel.</p>
                    <p className="mt-3 leading-relaxed">For a family of five, compare five train tickets plus two taxis against one car from door to door. The car takes longer but needs no bag limits, no platform walking and no second taxi. Five Economy train tickets at SAR 162 or more each come to at least SAR 810 before VAT, plus a taxi at each end. A 7 seat Staria from your Makkah hotel to your Madinah hotel costs SAR 400 for the whole family.</p>
                </Card>
            </div>
        </Section>
    );
}
