'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Quote } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

export default function PilgrimVoices() {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

    const testimonials = [
        { id: 1, author: "Ahmed Al-Sayed", location: "Egypt", text: "Ahsas Cab made our Umrah journey so smooth. The driver was punctual and very polite. Highly recommended!" },
        { id: 2, author: "Fatima Khan", location: "Pakistan", text: "Excellent service! The car was clean and comfortable. Will definitely book again for my next trip." },
        { id: 3, author: "Yusuf Rahman", location: "Indonesia", text: "Very professional team. They handled our group transport perfectly. Thank you for the great experience." },
    ];

    return (
        <section className="py-20 bg-slate-900 dark:bg-black relative overflow-hidden" ref={ref as unknown as React.RefObject<HTMLElement>}>
            {/* Decorative Background */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className={`text-3xl md:text-5xl font-bold text-white mb-6 font-playfair transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Pilgrim Voices
                    </h2>
                    <p className={`text-lg text-slate-300 transition-all duration-700 delay-100 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Hear from those who have journeyed with us.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <GlassCard
                            key={item.id}
                            className={`p-8 relative h-full flex flex-col bg-white/5 border border-white/10 backdrop-blur-md`}
                            delay={index * 0.2}
                        >
                            <Quote size={40} className="text-secondary/20 absolute top-6 right-6" />

                            <p className="text-slate-200 italic mb-6 relative z-10 flex-grow leading-relaxed font-light">
                                &quot;{item.text}&quot;
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-xl font-bold text-secondary border border-secondary/20">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{item.author}</div>
                                    <div className="text-sm text-slate-400">{item.location}</div>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
