'use client';

import { Quote } from 'lucide-react';

export default function TrustSection() {
    return (
        <section className="py-20 bg-background relative overflow-hidden text-foreground">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-secondary/5 mix-blend-overlay z-0" />
            <div className="absolute inset-0 opacity-5 bg-[url('/patterns/islamic-pattern.png')] bg-repeat z-0" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-0" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 backdrop-blur-sm mb-8 border border-secondary/20 shadow-[0_0_15px_rgba(197,160,73,0.3)]">
                        <Quote size={32} className="text-secondary fill-secondary/20" />
                    </div>

                    <blockquote className="text-2xl md:text-4xl font-serif leading-relaxed mb-8 opacity-90 drop-shadow-sm italic text-primary dark:text-white">
                        &quot;Trust is the foundation of our service. We are honored to accompany you on your sacred journey, treating every mile as a promise kept.&quot;
                    </blockquote>

                    <cite className="block text-lg font-bold tracking-wide text-secondary not-italic uppercase">
                        — CEO, Ahsas Cab
                    </cite>
                </div>
            </div>
        </section>
    );
}
