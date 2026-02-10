'use client';

import styles from './FeatureHighlights.module.css';
import { Shield, Star, Clock, HeartHandshake } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';

export default function FeatureHighlights() {

    const features = [
        { id: 'safety', icon: Shield, title: 'Safety First', desc: 'Our vehicles are regularly inspected and maintained to ensure your safety.' },
        { id: 'comfort', icon: Star, title: 'Premium Comfort', desc: 'Enjoy a relaxing journey with spacious seating and climate control.' },
        { id: 'reliability', icon: Clock, title: 'Always On Time', desc: 'We value your time and guarantee punctual pickups and drop-offs.' },
        { id: 'hospitality', icon: HeartHandshake, title: 'Warm Hospitality', desc: 'Our dedicated team is trained to serve you with respect and courtesy.' },
    ];

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FadeIn key={feature.id} delay={index * 0.1}>
                            <div className="h-full bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-secondary/30 transition-all duration-300 group text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-playfair">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">{feature.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
