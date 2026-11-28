import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Clock, MapPin, MessageCircle, Phone, X } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { getBaseUrl } from '@/lib/url-utils';
import { businessSchemaId } from '@/lib/schema-server';
import { BUSINESS_PHONE } from '@/lib/contact';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';
import Hero from '@/components/common/Hero';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Card, CheckList, DataTable, Section, SectionHeading, SubHeading } from '@/components/home/sections/ui';
import {
    BOOKING_STEPS, ETIQUETTE, INCLUDED, LOCAL_NAMES, NEARBY, PICKUP_AREAS, PRICE_FACTORS, QUICK_FACTS, ROUTE_3H,
    SITE_DETAILS, SITES_TABLE, TOUR_DAY, TOURS, TRUST_POINTS, VEHICLES, WHEN_TO_GO, ZIYARAT_FAQS, ZIYARAT_PRICE_FROM,
    ZIYARAT_PRICES, formatSar, type SourceLabel,
} from '@/data/ziyarat-makkah-content';

const PATH = '/services/ziyarat-tours';
const TITLE = 'Ziyarat Places in Makkah: 14 Sites, Map and Prices';
const DESCRIPTION = 'Visit 14 ziyarat places in Makkah with true history, distance from the Haram and best timings. Private Makkah ziyarat tour with hotel pickup.';
const HERO_IMAGE = '/images/routes/makkah-ziyarat-hero.png';

const WHATSAPP = getWhatsAppLink('Salam Ahsas Cab, I would like to book a Makkah ziyarat tour. Hotel: , Date: , People: ');
const ROUTE_MAP_URL =
    'https://www.google.com/maps/dir/?api=1&origin=Jannat+al+Mualla+Makkah&destination=Jabal+Thawr+Makkah' +
    '&waypoints=Jabal+al+Nour+Makkah%7CMina+Makkah%7CMuzdalifah+Makkah%7CJabal+al+Rahmah+Arafat&travelmode=driving';

const TOC = [
    { id: 'what-are', label: 'What are ziyarat places' },
    { id: 'tours', label: 'Tours' },
    { id: 'tour-day', label: 'Tour day' },
    { id: 'sites', label: '14 sites' },
    { id: 'etiquette', label: 'Etiquette' },
    { id: 'route', label: 'Best route' },
    { id: 'prices', label: 'Prices 2026' },
    { id: 'transport', label: 'Vehicles and guide' },
    { id: 'booking', label: 'How to book' },
    { id: 'pickup', label: 'Pickup areas' },
    { id: 'faq', label: 'FAQs' },
];

export async function generateMetadata(): Promise<Metadata> {
    const meta = await constructMetadata({
        title: TITLE,
        description: DESCRIPTION,
        keywords: [
            'ziyarat places in Makkah', 'Makkah ziyarat tour', 'ziyarat in Makkah', 'Makkah ziyarat tour price',
            'Cave of Hira', 'Jabal Thawr', 'Hira Cultural District', 'مزارات مكة المكرمة', 'زيارة جبل النور',
        ],
        canonicalUrl: PATH,
        image: HERO_IMAGE,
    });
    // The SEO title is used as given, without the site-name suffix (keeps it under 60 characters).
    return {
        ...meta,
        title: { absolute: TITLE },
        openGraph: { ...meta.openGraph, title: TITLE },
        twitter: { ...meta.twitter, title: TITLE },
    };
}

function schema() {
    const baseUrl = getBaseUrl();
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'TouristTrip',
                '@id': `${baseUrl}${PATH}#trip`,
                name: 'Makkah Ziyarat Tour',
                description: DESCRIPTION,
                url: `${baseUrl}${PATH}`,
                image: `${baseUrl}${HERO_IMAGE}`,
                provider: { '@id': businessSchemaId(baseUrl) },
                availableLanguage: ['ur', 'en', 'ar'],
                itinerary: {
                    '@type': 'ItemList',
                    itemListElement: SITES_TABLE.map(([name], i) => ({
                        '@type': 'ListItem',
                        position: i + 1,
                        item: { '@type': 'TouristAttraction', name },
                    })),
                },
                offers: {
                    '@type': 'AggregateOffer',
                    priceCurrency: 'SAR',
                    lowPrice: ZIYARAT_PRICE_FROM,
                    highPrice: ZIYARAT_PRICES.coaster,
                    availability: 'https://schema.org/InStock',
                },
            },
            {
                '@type': 'FAQPage',
                '@id': `${baseUrl}${PATH}#faq`,
                mainEntity: ZIYARAT_FAQS.map((f) => ({
                    '@type': 'Question',
                    name: f.question,
                    acceptedAnswer: { '@type': 'Answer', text: f.answer },
                })),
            },
        ],
    };
}

const LABEL_STYLES: Record<SourceLabel, string> = {
    Authentic: 'bg-emerald-50 text-emerald-800 ring-emerald-200',
    'Historical report': 'bg-sky-50 text-sky-800 ring-sky-200',
    'Popular story, not proven': 'bg-amber-50 text-amber-900 ring-amber-200',
};

function SourceBadge({ label }: { label: SourceLabel }) {
    return (
        <span className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1', LABEL_STYLES[label])}>
            {label}
        </span>
    );
}

function WhatsAppButton({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                'inline-flex items-center justify-center gap-2 rounded-[15px] bg-primary px-6 py-3.5 font-bold text-secondary hover:brightness-110 transition',
                className
            )}
        >
            <MessageCircle className="h-5 w-5" aria-hidden />
            {children}
        </a>
    );
}

function CtaBox({ children, button }: { children: React.ReactNode; button: string }) {
    return (
        <div className="mt-10 flex flex-col gap-4 rounded-[15px] bg-secondary p-6 text-slate-200 md:flex-row md:items-center md:justify-between md:p-8">
            <p className="max-w-2xl leading-relaxed">{children}</p>
            <WhatsAppButton className="shrink-0">{button}</WhatsAppButton>
        </div>
    );
}

const NumberedList = ({ items }: { items: React.ReactNode[] }) => (
    <ol className="space-y-3">
        {items.map((item, i) => (
            <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">{i + 1}</span>
                <span className="pt-0.5 leading-relaxed text-slate-700">{item}</span>
            </li>
        ))}
    </ol>
);

export default function ZiyaratToursPage() {
    return (
        <main className="overflow-x-hidden font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema()) }} />

            <Hero
                title="Ziyarat Places in Makkah: Sacred Sites, True History and Easy Tours"
                titleClassName="text-3xl md:text-5xl lg:text-6xl"
                subtitle={
                    <>
                        Stand where the first verse came down at Jabal al Nour, and where the Prophet ﷺ hid at Thawr. Know each
                        site&apos;s real story, its distance from your hotel and the best hour to go. Book a private car with a guide
                        who speaks Urdu, English or Arabic, from Ajyad to Aziziyah.
                    </>
                }
                bgImage={HERO_IMAGE}
                ctaText={`Book on WhatsApp: ${BUSINESS_PHONE.display}`}
                ctaLink={WHATSAPP}
                secondaryCtaText="Call now"
                secondaryCtaLink={BUSINESS_PHONE.href}
                layout="center"
                breadcrumbs={<Breadcrumbs />}
                alt="Jabal al Nour mountain with the Cave of Hira above a road in Makkah"
            />

            {/* On this page */}
            <nav aria-label="On this page" className="border-b border-slate-200 bg-white">
                <div className="container mx-auto max-w-6xl px-4">
                    <ul className="flex gap-2 overflow-x-auto py-3 text-sm [scrollbar-width:none]">
                        {TOC.map((t) => (
                            <li key={t.id} className="shrink-0">
                                <a href={`#${t.id}`} className="inline-block rounded-full border border-slate-200 px-3.5 py-1.5 font-medium text-slate-700 hover:border-primary hover:text-secondary">
                                    {t.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* What are ziyarat places */}
            <Section id="what-are">
                <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
                    <div>
                        <SectionHeading title="What Are Ziyarat Places in Makkah?" />
                        <div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-700">
                            <p>
                                Ziyarat places in Makkah are the sites tied to the life of the Prophet ﷺ, his family and the first
                                Muslims. Visiting them is optional. Ziyarat is not a rite of Umrah or Hajj, so your Umrah is complete
                                without it.
                            </p>
                            <p>
                                Most pilgrims see 8 to 10 sites in one morning, in about 3 to 4 hours after Fajr. The Royal Commission
                                for Makkah City and Holy Sites has opened 27 historical sites to visitors and reports 17.5 million
                                visits to them. Each year more sites get signboards, paths and visitor centres.
                            </p>
                        </div>
                    </div>
                    <Card className="bg-slate-50">
                        <SubHeading>Quick facts</SubHeading>
                        <dl className="divide-y divide-slate-200">
                            {QUICK_FACTS.map((f) => (
                                <div key={f.label} className="flex items-start justify-between gap-4 py-3">
                                    <dt className="text-sm text-slate-500">{f.label}</dt>
                                    <dd className="text-right">
                                        <span className="font-bold text-secondary">{f.value}</span>
                                        {f.note && <span className="block text-xs text-slate-500">{f.note}</span>}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </Card>
                </div>
            </Section>

            {/* Tours */}
            <Section id="tours" tone="muted">
                <SectionHeading
                    title="Why Pilgrims Choose a Makkah Ziyarat Tour After Umrah"
                    intro="A Makkah ziyarat tour saves your energy for the Haram. The sites stretch from Al Hajun, just north of the Haram, to Arafat, about 20 km east along the Mina road. By noon the heat can pass 40°C. Street taxis often quote a new price at every stop. A booked car with a guide fixes all of this before you leave your hotel."
                />
                <p className="mb-4 font-semibold text-secondary">Choose the tour that fits your group:</p>
                <DataTable
                    caption="Makkah ziyarat tours by group size"
                    stickyFirstColumn
                    headers={['Tour', 'Best for', 'Vehicle', 'Time', 'Price']}
                    rows={TOURS.map((t) => [
                        t.name,
                        t.bestFor,
                        <Link key={t.href} href={t.href} className="text-amber-700 underline-offset-4 hover:underline">{t.vehicle}</Link>,
                        t.time,
                        <span key="p" className="font-bold text-secondary whitespace-nowrap">From {formatSar(t.price)}</span>,
                    ])}
                />
                <div className="mt-8 max-w-3xl">
                    <SubHeading>Easy or comfortable?</SubHeading>
                    <p className="leading-relaxed text-slate-700">
                        Easy tours ziyarat Makkah drivers run are quick drive-past trips, good if you are short on time.
                        Comfortable Makkah ziyarat tours add longer stops, cold water, a guide who explains each site, and time for
                        the Hira Cultural District. Families with parents almost always pick comfort.
                    </p>
                </div>
                <CtaBox button="Get my fixed price">
                    Ready to pick a tour? Send your hotel name, date and group size on WhatsApp ({BUSINESS_PHONE.display}) and get
                    one fixed price before you travel. See full details on our{' '}
                    <Link href="/routes/makkah-ziyarat-taxi" className="font-semibold text-gold underline underline-offset-4">
                        Makkah ziyarat tour price page
                    </Link>
                    .
                </CtaBox>
            </Section>

            {/* Tour day */}
            <Section id="tour-day">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    <div>
                        <SectionHeading
                            title="What Happens on Your Makkah Ziyarat Tour Day"
                            intro="Your day runs on one simple plan, so your parents never wait in the sun."
                        />
                        <ol className="relative space-y-6 border-l-2 border-primary/40 pl-6">
                            {TOUR_DAY.map((s, i) => (
                                <li key={s.title} className="relative">
                                    <span className="absolute -left-[37px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-secondary">
                                        {i + 1}
                                    </span>
                                    <p className="font-bold text-secondary">{s.title}</p>
                                    <p className="leading-relaxed text-slate-700">{s.text}</p>
                                </li>
                            ))}
                        </ol>
                        <p className="mt-6 rounded-[15px] bg-slate-50 p-4 text-slate-700">
                            Need a stop for breakfast, Zamzam or a washroom? Just ask. The car waits.
                        </p>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[15px] shadow-lg">
                        <Image
                            src="/images/fleet/staria.png"
                            alt="Hyundai Staria family van used for Makkah ziyarat tours"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* 14 sites */}
            <Section id="sites" tone="muted">
                <SectionHeading
                    title="14 Ziyarat Places to Visit in Makkah"
                    intro={
                        <>
                            Here are the 14 ziyarat places to visit in Makkah, with the distance from Masjid al Haram and how hard
                            each one is. Each story carries a label:{' '}
                            <span className="inline-flex flex-wrap gap-1.5 align-middle">
                                <SourceBadge label="Authentic" /> (Quran or Sahih hadith), <SourceBadge label="Historical report" />, or{' '}
                                <SourceBadge label="Popular story, not proven" />.
                            </span>
                        </>
                    }
                />
                <DataTable
                    caption="14 ziyarat places in Makkah with distance, time and effort"
                    stickyFirstColumn
                    headers={['Site', 'Distance from Haram', 'Time there', 'Effort']}
                    rows={SITES_TABLE}
                />

                <div className="mt-12">
                    <SubHeading>Local names to show your driver</SubHeading>
                    <p className="mb-4 max-w-3xl leading-relaxed text-slate-700">
                        Road signs and drivers use the Arabic names. Pilgrims from Pakistan and India often use the Urdu forms.
                    </p>
                    <DataTable
                        caption="Arabic and Urdu names of Makkah ziyarat sites"
                        headers={['Site', 'Arabic', 'Urdu or common name']}
                        rows={LOCAL_NAMES.map(([en, ar, ur]) => [en, <span key="ar" lang="ar" dir="rtl" className="text-lg">{ar}</span>, ur])}
                    />
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-2">
                    {SITE_DETAILS.map((site) => (
                        <Card key={site.title}>
                            <SubHeading>{site.title}</SubHeading>
                            {site.labels.length > 0 && (
                                <div className="mb-3 flex flex-wrap gap-1.5">
                                    {site.labels.map((l) => <SourceBadge key={l} label={l} />)}
                                </div>
                            )}
                            <p className="leading-relaxed text-slate-700">{site.text}</p>
                        </Card>
                    ))}
                </div>

                <CtaBox button="Book your Makkah ziyarat tour">
                    Want all 14 sites in one easy morning? Our guide plans the order around traffic and prayer times.
                </CtaBox>
            </Section>

            {/* Etiquette */}
            <Section id="etiquette">
                <SectionHeading
                    title="Ziyarat in Makkah: Etiquette, Rulings and Common Mistakes"
                    intro="Ziyarat in Makkah is for learning and reflection, not a special act of worship at each site. No authentic hadith sets a special prayer or dua for these places. You can make your own dua anywhere."
                />
                <div className="grid gap-5 md:grid-cols-2">
                    <Card className="border-emerald-200">
                        <SubHeading>Do</SubHeading>
                        <CheckList items={ETIQUETTE.do} />
                    </Card>
                    <Card className="border-rose-200">
                        <SubHeading>Avoid</SubHeading>
                        <ul className="space-y-3">
                            {ETIQUETTE.avoid.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700">
                                        <X className="h-3.5 w-3.5" aria-hidden />
                                    </span>
                                    <span className="leading-relaxed text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
                <div className="mt-8 max-w-3xl">
                    <SubHeading>Women, elderly and wheelchair users</SubHeading>
                    <p className="leading-relaxed text-slate-700">
                        Women visit every site, and a private car gives more privacy. For elderly parents, skip the climbs at Hira
                        and Thawr. Mu&apos;alla, Masjid al Jinn, Mina, Muzdalifah, Arafat and the Hira Cultural District all work by
                        car, with few steps. More help in our guide to{' '}
                        <Link href="/blog/tips-for-umrah-with-elderly-parents" className="font-semibold text-amber-700 underline-offset-4 hover:underline">
                            Umrah with elderly parents
                        </Link>
                        .
                    </p>
                </div>
            </Section>

            {/* Route */}
            <Section id="route" tone="muted">
                <SectionHeading
                    title="Best Makkah Ziyarat Tour Route: 3 Hour and Full Day Plans"
                    intro="The best route starts north and loops east, so you never drive back over the same road."
                />
                <div className="grid gap-5 lg:grid-cols-2">
                    <Card>
                        <SubHeading>3 hour route (pickup 6:30 AM after Fajr)</SubHeading>
                        <NumberedList items={ROUTE_3H} />
                        <a
                            href={ROUTE_MAP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 font-semibold text-amber-700 underline-offset-4 hover:underline"
                        >
                            <MapPin className="h-4 w-4" aria-hidden />
                            Open this route in Google Maps
                        </a>
                    </Card>
                    <div className="space-y-5">
                        <Card>
                            <SubHeading>Full day route</SubHeading>
                            <p className="leading-relaxed text-slate-700">
                                Add the Cave of Hira climb at dawn, two hours in the Hira Cultural District, and Masjid Aisha or
                                Masjid al Ji&apos;ranah if you plan a second Umrah.
                            </p>
                        </Card>
                        <Card>
                            <SubHeading>When to go</SubHeading>
                            <dl className="space-y-3">
                                {WHEN_TO_GO.map((w) => (
                                    <div key={w.label} className="flex gap-3">
                                        <Clock className="mt-1 h-4 w-4 shrink-0 text-amber-700" aria-hidden />
                                        <div>
                                            <dt className="inline font-semibold text-secondary">{w.label}: </dt>
                                            <dd className="inline text-slate-700">{w.text}</dd>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Prices */}
            <Section id="prices">
                <SectionHeading
                    title="Makkah Ziyarat Tour Packages and Prices 2026"
                    intro={`Our Makkah ziyarat tour packages start from SAR ${ZIYARAT_PRICE_FROM} for a private car, with one fixed price for the whole vehicle, not per person.`}
                />
                <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
                    {VEHICLES.map((v) => (
                        <Link key={v.name} href={v.href} className="rounded-[15px] border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:border-primary">
                            <span className="block text-sm text-slate-500">{v.name}</span>
                            <span className="mt-1 block text-xl font-bold text-secondary">{formatSar(v.price)}</span>
                        </Link>
                    ))}
                </div>
                <p className="mt-3 text-sm text-slate-500">
                    Prices for the 3 to 4 hour tour from a central Makkah hotel. Longer days are charged by the hour, from SAR{' '}
                    {ZIYARAT_PRICES.hourlyFrom} per hour.
                </p>
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    <Card>
                        <SubHeading>Makkah ziyarat tour price: what changes the cost</SubHeading>
                        <CheckList items={PRICE_FACTORS} />
                    </Card>
                    <Card>
                        <SubHeading>What is included in our ziyarat tours in Makkah</SubHeading>
                        <CheckList items={INCLUDED} />
                        <p className="mt-4 text-sm text-slate-500">Not included: museum tickets in the Hira Cultural District and meals.</p>
                    </Card>
                </div>
                <div className="mt-8 max-w-3xl">
                    <SubHeading>Ziyarat with your Umrah package</SubHeading>
                    <p className="leading-relaxed text-slate-700">
                        Adding ziyarat to an Umrah package? Tell us your hotel and dates. Build your own tour: pick your sites,
                        vehicle and guide language, and we quote one price on WhatsApp.
                    </p>
                </div>
            </Section>

            {/* Transport and guide */}
            <Section id="transport" tone="muted">
                <SectionHeading
                    title="Makkah Ziyarat Tour Transportation Services and Guide"
                    intro="Our Makkah ziyarat tour transportation services use licensed cars and vans driven by drivers who know every site road, from Kudai to Al Shara'i."
                />
                <div className="grid gap-5 lg:grid-cols-3">
                    <Card className="lg:col-span-1">
                        <SubHeading>Vehicles for your ziyarat tour Makkah</SubHeading>
                        <ul className="space-y-3">
                            {VEHICLES.map((v) => (
                                <li key={v.name} className="leading-relaxed text-slate-700">
                                    <Link href={v.href} className="font-semibold text-secondary underline-offset-4 hover:underline">{v.name}</Link>: {v.text}
                                </li>
                            ))}
                        </ul>
                    </Card>
                    <Card>
                        <SubHeading>Makkah ziyarat tour guide</SubHeading>
                        <p className="leading-relaxed text-slate-700">
                            Your guide tells the story at each stop in Urdu, English or Arabic. He also marks which stories are
                            authentic and which are popular tales.
                        </p>
                    </Card>
                    <Card>
                        <SubHeading>Going on your own?</SubHeading>
                        <p className="leading-relaxed text-slate-700">
                            Makkah Bus route 9H, launched in January 2026, runs from Station 137 near the Haram straight to the Hira
                            Cultural District. The Royal Commission also runs cultural bus tours from the Abraj Al Bait station.
                            Uber and Careem work for one or two sites. For the full loop to Arafat and Thawr, a ziyarat car is cheaper
                            and simpler.
                        </p>
                    </Card>
                </div>
            </Section>

            {/* Booking */}
            <Section id="booking">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                        <SectionHeading title="How to Book Your Ziyarat in Makkah in 4 Steps" />
                        <NumberedList items={BOOKING_STEPS} />
                        <p className="mt-6 leading-relaxed text-slate-700">
                            Book a day ahead in Ramadan and on weekends. No Nusuk permit is needed for open air sites like Jabal al
                            Nour, Mina or Arafat. Nusuk permits apply to Umrah and some areas of Masjid al Haram, so check the app for
                            the latest rules.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center gap-3 rounded-[15px] bg-secondary p-6 md:p-8">
                        <p className="font-playfair text-2xl font-bold text-white">Send your hotel, date and group size</p>
                        <p className="text-slate-300">We reply with one fixed price, your driver&apos;s details and a pickup time.</p>
                        <WhatsAppButton>WhatsApp {BUSINESS_PHONE.display}</WhatsAppButton>
                        <a
                            href={BUSINESS_PHONE.href}
                            className="inline-flex items-center justify-center gap-2 rounded-[15px] border border-white/30 px-6 py-3.5 font-bold text-white hover:bg-white/10 transition-colors"
                        >
                            <Phone className="h-5 w-5" aria-hidden />
                            Call {BUSINESS_PHONE.display}
                        </a>
                    </div>
                </div>
            </Section>

            {/* Pickup areas */}
            <Section id="pickup" tone="muted">
                <SectionHeading title="Pickup Areas We Cover in Makkah" intro="We pick up across Makkah, not only next to the Haram." />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {PICKUP_AREAS.map((a) => (
                        <Card key={a.title}>
                            <SubHeading>{a.title}</SubHeading>
                            <p className="leading-relaxed text-slate-700">{a.text}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Nearby */}
            <Section>
                <SectionHeading title="Near Makkah Ziyarat Places: Hotels, Markets and Barbers" />
                <div className="grid gap-5 md:grid-cols-3">
                    {NEARBY.map((n) => (
                        <Card key={n.title}>
                            <SubHeading>{n.title}</SubHeading>
                            <p className="leading-relaxed text-slate-700">{n.text}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Trust */}
            <Section tone="muted">
                <SectionHeading title="Why Trust Our Makkah Ziyarat Places Guide" />
                <div className="max-w-3xl">
                    <CheckList items={TRUST_POINTS} />
                </div>
            </Section>

            {/* Madinah */}
            <Section>
                <SectionHeading title="Ziyarat Sites in Madinah" />
                <p className="max-w-3xl text-base md:text-lg leading-relaxed text-slate-700">
                    Visiting Madinah is not part of Umrah, but most pilgrims go. The main Madinah ziyarat covers Masjid Quba,
                    Masjid al Qiblatain, Jabal Uhud and the Martyrs&apos; Cemetery, Jannat al Baqi and the Sab&apos;ah Masajid, in
                    about 3 hours. Going on to Madinah? See our{' '}
                    <Link href="/routes/madinah-ziyarat-taxi" className="font-semibold text-amber-700 underline-offset-4 hover:underline">
                        Madinah ziyarat guide
                    </Link>{' '}
                    and{' '}
                    <Link href="/routes/makkah-to-madinah-taxi" className="font-semibold text-amber-700 underline-offset-4 hover:underline">
                        Makkah to Madinah taxi
                    </Link>
                    .
                </p>
            </Section>

            {/* FAQ */}
            <Section id="faq" tone="muted">
                <SectionHeading center title="FAQs About Ziyarat Places in Makkah" />
                <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-[15px] border border-slate-200 bg-white">
                    {ZIYARAT_FAQS.map((f) => (
                        <details key={f.question} className="group px-5 md:px-6">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold text-secondary [&::-webkit-details-marker]:hidden">
                                <h3 className="text-base md:text-lg">{f.question}</h3>
                                <ChevronDown className="h-5 w-5 shrink-0 text-amber-600 transition-transform group-open:rotate-180" aria-hidden />
                            </summary>
                            <p className="pb-5 leading-relaxed text-slate-700">{f.answer}</p>
                        </details>
                    ))}
                </div>
            </Section>

            {/* Final CTA */}
            <Section tone="navy" className="text-center">
                <SectionHeading
                    dark
                    center
                    title="Book Your Makkah Ziyarat Tour Today"
                    intro="Tell us three things on WhatsApp: your hotel, your date and how many people. We send one fixed price, your driver's details and a 6:30 AM pickup time."
                />
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                    <WhatsAppButton className="px-8 py-4 text-lg">WhatsApp {BUSINESS_PHONE.display}</WhatsAppButton>
                    <a
                        href={BUSINESS_PHONE.href}
                        className="inline-flex items-center justify-center gap-2 rounded-[15px] border border-white/30 px-8 py-4 text-lg font-bold text-white hover:bg-white/10 transition-colors"
                    >
                        <Phone className="h-5 w-5" aria-hidden />
                        Call {BUSINESS_PHONE.display}
                    </a>
                </div>
            </Section>
        </main>
    );
}
