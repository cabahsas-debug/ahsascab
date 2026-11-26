import { Plane, Route, TrainFront, Landmark, MapPin, Mountain, Moon, Siren } from 'lucide-react';
import { CONTACT } from '@/data/home-content';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { Card, CheckList, ReadMore, Section, SectionHeading, SubHeading } from './ui';

function ServiceCard({ icon: Icon, title, children }: { icon: typeof Plane; title: string; children: React.ReactNode }) {
    return (
        <Card className="h-full">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[12px] bg-secondary text-primary">
                <Icon className="w-5 h-5" aria-hidden />
            </div>
            <SubHeading>{title}</SubHeading>
            <div className="space-y-3 leading-relaxed">{children}</div>
        </Card>
    );
}

export default function ServicesSection() {
    return (
        <Section id="services">
            <SectionHeading
                eyebrow="Every trip, one fixed fare"
                title="Our Makkah taxi services for every trip"
                intro="We cover the rides pilgrims actually need: the airport, the train station, hotel moves, the holy sites, the Miqat, Madinah and Taif. Every booking is a private car with a fixed fare."
            />

            <div className="grid gap-6 md:grid-cols-2">
                <ServiceCard icon={Plane} title="Jeddah Airport to Makkah taxi">
                    <p>King Abdulaziz International Airport (KAIA) is about 19 km north of Jeddah. From there to the Haram is roughly 85 to 95 km on the Makkah Jeddah Expressway (Route 40). The drive takes 60 to 75 minutes in normal traffic and 90 to 120 minutes in Ramadan or after Jumu&apos;ah.</p>
                    <p>Your driver tracks your flight and calls you as soon as you land. He guides you to the meeting point in arrivals and loads your bags. If you are already in Ihram, tell us: he drops you near the Haram so you can start your Umrah, then helps take your luggage to the hotel. Landing at the Hajj Terminal? Tell us when you book, because the pickup rules there are different. We also collect pilgrims from Prince Mohammad bin Abdulaziz Airport in Madinah for the drive to Makkah.</p>
                    <ReadMore href="/services/jeddah-airport-transfer">Jeddah Airport to Makkah taxi</ReadMore>
                </ServiceCard>

                <ServiceCard icon={Route} title="Intercity transport to Madinah, Jeddah, Taif and Riyadh">
                    <p>The road from Makkah to Madinah is about 435 to 450 km. Without stops the drive is about 4 hours 20 minutes. With salah and food breaks, plan on 5 hours from hotel to hotel. The fare is SAR 350 in a Camry and SAR 400 in a Staria or Starex. Our drivers stop at every prayer time on the way.</p>
                    <p>Coming from Madinah to Makkah for Umrah? The driver stops at Dhul Hulaifah (Abyar Ali) so you can put on Ihram at the Miqat. We also drive Makkah to Jeddah city, Makkah to Taif (about 90 km, around one hour) and Makkah to Riyadh (about 875 km, a full day on the road).</p>
                    <div className="flex flex-col">
                        <ReadMore href="/services/makkah-madinah-taxi">Makkah to Madinah taxi</ReadMore>
                        <ReadMore href="/routes/jeddah-airport-to-madinah">Jeddah Airport to Madinah taxi</ReadMore>
                    </div>
                </ServiceCard>

                <ServiceCard icon={TrainFront} title="Hotel transfers and Haramain station pickups">
                    <p>The Makkah Haramain station sits in Ar Rusayfah, about 3.5 km from Masjid al Haram. The train is fast, but it stops at the station, not at your hotel. Pilgrims arriving there talk about two problems. Drivers at the exit quote high prices, and the station shuttle needs a ticket booked on a phone app, then drops you away from many hotels. Older pilgrims find that last walk hard.</p>
                    <p>For SAR 100 in a Camry, our driver meets you at the station exit and takes you to your hotel door, whether you stay on Ibrahim Al Khalil Road, in the Jabal Omar towers, in Aziziyah or in Kudai. We also move families between hotels. A common one is an Aziziyah apartment for the first week, then an Ajyad hotel close to the Haram for the last ten nights.</p>
                    <ReadMore href="/services/hotel-transfers">Hotel transfers in Makkah</ReadMore>
                </ServiceCard>

                <ServiceCard icon={Landmark} title="Makkah Ziarat taxi services for the holy sites">
                    <p>A Makkah Ziyarat tour takes you to the places linked to the life of the Prophet ﷺ and the rites of Hajj. Most families cover these in about 3 hours:</p>
                    <CheckList
                        items={[
                            'Jabal al Nour and the Cave of Hira, about 4 km northeast of the Haram. The climb is about 1,200 steps, so it does not suit people with limited mobility.',
                            'Jabal Thawr, about 6 km south, where the Prophet ﷺ and Abu Bakr (RA) hid during the Hijrah.',
                            'Mina, the tent city, about 6 km east, with Masjid al Khayf.',
                            'Muzdalifah, about 10 km east, between Mina and Arafat.',
                            'Arafat and Jabal al Rahmah, about 20 km east. Arafat is closed to visits during Hajj.',
                            "Masjid al Jinn and Jannat al Mu'alla, close to the Haram.",
                        ]}
                    />
                    <p>Our drivers explain the history in Urdu or English and give you time at each stop. Morning tours beat the heat and the crowds. Families often add the Hira Cultural District, which sits next to Jabal al Nour.</p>
                    <ReadMore href="/services/ziyarat-tours">Makkah Ziyarat taxi tour</ReadMore>
                </ServiceCard>

                <ServiceCard icon={MapPin} title="Masjid Aisha and Ji'ranah Miqat trips for a second Umrah">
                    <p>Masjid al Taneem, known to most pilgrims as Masjid e Aisha, is about 7 km from the Haram. It is the closest Miqat point for people staying in Makkah, so many families go there to enter Ihram for a second Umrah. Masjid al Ji&apos;ranah, on the road to Taif, is the other common choice.</p>
                    <p>We drive you there, wait while you pray and change, then bring you back to the Haram. The return fare includes waiting time while you pray and change, and we confirm it on WhatsApp before you go.</p>
                </ServiceCard>

                <ServiceCard icon={Mountain} title="Taif Ziyarat on the Al Hada road">
                    <p>Taif is about 90 km from Makkah, around one hour by road. The drive climbs the Al Hada mountain road, and many families add the Al Hada cable car. A Taif trip and back with Ahsas Cab costs SAR 450 in a Camry and SAR 500 in a Staria, with the driver staying with you all day.</p>
                    <ReadMore href="/routes/makkah-to-taif-taxi">Makkah to Taif taxi and Ziyarat</ReadMore>
                </ServiceCard>

                <ServiceCard icon={Moon} title="Ramadan and Hajj season transport">
                    <p>In Ramadan we put extra cars on the road after Taraweeh and around Tahajjud, when the streets near the Haram are full. During Hajj, the Transport General Authority bans carrying anyone to Makkah or the holy sites without a Hajj permit or a Makkah entry permit, until the end of 14 Dhu al Hijjah. Earlier TGA notices set fines of up to SAR 100,000 for drivers who break it. We follow this rule and ask for your permit details before any Hajj season booking.</p>
                </ServiceCard>

                <ServiceCard icon={Siren} title="Emergency Makkah taxi services, day and night">
                    <p>
                        Finished your Umrah at 2:30 in the morning and cannot find a ride back to Aziziyah? Need to reach a pharmacy or clinic with an elderly parent? Message us on WhatsApp at{' '}
                        <a className="font-semibold text-amber-700 underline underline-offset-2" href={getWhatsAppLink('Salam Ahsas Cab, I need a taxi now. My location:')} target="_blank" rel="noopener noreferrer">
                            {CONTACT.whatsappDisplay}
                        </a>{' '}
                        at any hour with your location pin. For a medical emergency, call the Saudi Red Crescent on 997 first. An ambulance can reach places a taxi cannot.
                    </p>
                </ServiceCard>
            </div>
        </Section>
    );
}
