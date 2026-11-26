import { ChevronDown } from 'lucide-react';
import { CONTACT, FAQS } from '@/data/home-content';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { Section, SectionHeading } from './ui';

export function faqSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
    };
}

export default function FaqSection() {
    return (
        <>
            <Section id="book" tone="navy" className="text-center">
                <SectionHeading
                    dark
                    center
                    title="Book your Makkah taxi with Ahsas Cab"
                    intro={`To book our taxi services in Makkah, send your flight number, hotel, number of people and bags on WhatsApp ${CONTACT.whatsappDisplay}, call ${CONTACT.phoneDisplay} or email ${CONTACT.email}. We reply with one fixed price for the car, usually within 5 minutes. You pay on arrival in cash or by card, and cancellation is free.`}
                />
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                    <a
                        href={getWhatsAppLink('Salam Ahsas Cab, I would like to book a taxi.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-[15px] bg-primary px-8 py-4 text-lg font-bold text-secondary hover:brightness-110 transition"
                    >
                        Get your fixed fare on WhatsApp
                    </a>
                    <a href={CONTACT.phoneHref} className="inline-flex items-center justify-center rounded-[15px] border border-white/30 px-8 py-4 text-lg font-bold text-white hover:bg-white/10 transition-colors">
                        Call {CONTACT.phoneDisplay}
                    </a>
                </div>
            </Section>

            <Section id="faq">
                <SectionHeading center eyebrow="FAQ" title="Frequently asked questions about Makkah taxi services" />
                <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-[15px] border border-slate-200 bg-white">
                    {FAQS.map((f) => (
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
        </>
    );
}
