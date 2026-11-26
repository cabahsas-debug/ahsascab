import { Mail, MapPin, Phone, Star } from 'lucide-react';
import { CONTACT, DRIVERS, GOOGLE_RATING, REVIEWS } from '@/data/home-content';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { Card, Section, SectionHeading, SubHeading } from './ui';

const initials = (name: string) =>
    name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();

export default function AboutSection() {
    return (
        <>
            <Section id="about">
                <SectionHeading
                    eyebrow="Since 2015"
                    title="About Ahsas Cab, Saudi Arabia's trusted taxi service provider in Makkah"
                />
                <div className="grid gap-8 lg:grid-cols-5">
                    <div className="lg:col-span-3 space-y-4 leading-relaxed">
                        <p>
                            Ahsas Cab, known in Arabic as <span lang="ar">إحساس الرحلات</span> (Ahsas Alrihlat), is a taxi service provider in Makkah. Of all the taxi services in Saudi Arabia, we focus on one kind of passenger: the Umrah pilgrim. We have driven Umrah pilgrims since 2015 from our base on Ibn Abi Al Mukhtar in Al Jamiah, Makkah 24352 (plus code {CONTACT.plusCode}). Our fleet runs from Toyota Camry sedans to 21 seat Toyota Coasters, with GMC Yukons for VIP rides. Our office is open daily from 9 AM to 10 PM, and WhatsApp support runs around the clock.
                        </p>
                        <p>The name says what we care about. Ehsaas means feeling and care in Urdu and Arabic, and that is how we want every pilgrim to feel in our cars: looked after.</p>
                        <SubHeading>Our mission: serving the guests of Allah</SubHeading>
                        <p>Pilgrims are Duyoof ar Rahman, the guests of the Most Merciful. Our job is simple: get them to the Haram, the holy sites and home again on time, at a fair price, without stress about the ride. We want your time in Makkah spent on Tawaf and dua, not on bargaining with drivers.</p>
                    </div>
                    <Card className="lg:col-span-2 h-fit bg-secondary border-secondary text-slate-200">
                        <p className="font-bold text-white text-lg mb-4">Contact Ahsas Cab</p>
                        <ul className="space-y-4">
                            <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden /><span>{CONTACT.address}<br />Plus code {CONTACT.plusCode}</span></li>
                            <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden /><span>Call <a className="font-semibold text-white underline-offset-2 hover:underline" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a><br />WhatsApp <a className="font-semibold text-white underline-offset-2 hover:underline" href={getWhatsAppLink('Salam Ahsas Cab')} target="_blank" rel="noopener noreferrer">{CONTACT.whatsappDisplay}</a></span></li>
                            <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden /><a className="font-semibold text-white underline-offset-2 hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
                        </ul>
                        <p className="mt-5 text-sm text-slate-400">Office: {CONTACT.officeHours}. WhatsApp support 24 hours.</p>
                    </Card>
                </div>
            </Section>

            <Section id="drivers" tone="muted">
                <SectionHeading
                    eyebrow="Your drivers"
                    title="Meet our team"
                    intro="When you ride with Ahsas Cab, you ride with one of our regular drivers:"
                />
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {DRIVERS.map((name) => (
                        <li key={name} className="rounded-[15px] border border-slate-200 bg-white p-5 text-center shadow-sm">
                            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary font-playfair text-xl font-bold text-primary ring-4 ring-primary/20" aria-hidden>
                                {initials(name)}
                            </span>
                            <p className="mt-3 font-bold text-secondary">{name}</p>
                            <p className="text-sm text-slate-500">Driver</p>
                        </li>
                    ))}
                </ul>
                <p className="mt-6 leading-relaxed max-w-3xl">
                    They drive the Jeddah, Makkah and Madinah roads every week and know the Ziyarat sites well. Between them they speak Urdu, English and Arabic. The day before your trip, we send you your driver&apos;s name, phone number and car plate, so you know who is coming.
                </p>
            </Section>

            <Section id="reviews">
                <SectionHeading eyebrow="Google reviews" title="What pilgrims say about Ahsas Cab" />
                <div className="mb-8 flex flex-wrap items-center gap-3">
                    <span className="flex" aria-hidden>
                        {Array.from({ length: 5 }, (_, i) => <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />)}
                    </span>
                    <p className="text-lg font-bold text-secondary">
                        Trusted by pilgrims: rated {GOOGLE_RATING.score} from {GOOGLE_RATING.count} Google reviews
                    </p>
                </div>
                <p className="mb-6 text-slate-600">These reviews come from the Ahsas Cab Google Business Profile, quoted as the pilgrims wrote them:</p>
                <ul className="grid gap-6 md:grid-cols-3">
                    {REVIEWS.map((r) => (
                        <li key={r.author}>
                            <figure className="h-full rounded-[15px] border border-slate-200 bg-slate-50 p-6">
                                <blockquote className="text-lg leading-relaxed text-secondary">&ldquo;{r.quote}&rdquo;</blockquote>
                                <figcaption className="mt-4 text-sm font-semibold text-slate-600">{r.author}, Google review, {r.year}</figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>
            </Section>
        </>
    );
}
