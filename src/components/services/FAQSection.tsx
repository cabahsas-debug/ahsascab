'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQSection.module.css';
import FadeIn from '@/components/common/FadeIn';
import GlassCard from '@/components/ui/GlassCard';

interface FAQItem {
    question: string;
    answer: string | React.ReactNode;
}

interface FAQSectionProps {
    items?: FAQItem[];
    title?: string;
}

const defaultFAQs: FAQItem[] = [
    {
        question: "How do I book a ride?",
        answer: "You can book directly through our website by selecting your service type, vehicle, and dates. Alternatively, you can contact our 24/7 support team via WhatsApp for assistance."
    },
    {
        question: "Are your drivers licensed?",
        answer: "Yes, all our drivers are fully licensed, insured, and experienced in navigating the holy cities of Makkah and Madinah. They are also trained to assist pilgrims with their needs."
    },
    {
        question: "Can I change my booking?",
        answer: "Absolutely. We understand plans can change. You can modify your booking up to 24 hours before your scheduled pickup time without any extra charges."
    },
    {
        question: "Do you provide child seats?",
        answer: "Yes, child seats are available upon request. Please mention this requirement when making your booking so we can ensure the vehicle is properly equipped."
    }
];

export default function FAQSection({ items = defaultFAQs, title = "Frequently Asked Questions" }: FAQSectionProps) {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-16 font-playfair">{title}</h2>
                </FadeIn>
                <div className="max-w-3xl mx-auto space-y-4">
                    {items.map((faq, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className={`overflow-hidden rounded-2xl transition-all duration-300 ${activeAccordion === index
                                    ? 'bg-white dark:bg-slate-800 shadow-lg ring-1 ring-secondary/20'
                                    : 'bg-white/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800'
                                }`}>
                                <button
                                    className="w-full flex items-center justify-between p-6 text-left"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className={`text-lg font-bold font-playfair transition-colors ${activeAccordion === index ? 'text-secondary' : 'text-slate-900 dark:text-white'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-2 rounded-full transition-all duration-300 ${activeAccordion === index ? 'bg-secondary text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                                        }`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </button>
                                <div
                                    className={`px-6 text-slate-600 dark:text-slate-300 transition-all duration-300 ease-in-out ${activeAccordion === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 overflow-hidden'
                                        }`}
                                >
                                    <div className="pt-2 border-t border-slate-100 dark:border-slate-700/50 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
