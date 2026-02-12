'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section className="py-20 bg-slate-50" ref={ref as unknown as React.RefObject<HTMLElement>}>
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Mission */}
                    <div
                        className={`bg-white p-8 md:p-12 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-700 transform group hover:-translate-y-2 ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                    >
                        <div className="w-16 h-16 bg-navy text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-navy/20 group-hover:scale-110 transition-transform duration-500">
                            <Target size={32} strokeWidth={1.5} />
                        </div>
                        <h2 className="text-3xl font-bold text-navy mb-4 font-playfair">Our Mission</h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            To provide safe, reliable, and spiritually enriching transport services for pilgrims, honoring the sanctity of their journey. We strive to ensure every mile traveled is filled with comfort, peace of mind, and the highest standards of hospitality.
                        </p>
                    </div>

                    {/* Vision */}
                    <div
                        className={`bg-navy text-white p-8 md:p-12 rounded-[32px] shadow-xl shadow-navy/20 border border-navy/50 relative overflow-hidden transition-all duration-700 delay-200 transform hover:-translate-y-2 ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                    >
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-[80px] pointer-events-none" />

                        <div className="w-16 h-16 bg-white/10 text-gold rounded-2xl flex items-center justify-center mb-6 border border-white/10 relative z-10 group-hover:scale-110 transition-transform duration-500">
                            <Eye size={32} strokeWidth={1.5} />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4 font-playfair relative z-10">Our Vision</h2>
                        <p className="text-lg text-slate-200 leading-relaxed font-medium relative z-10">
                            To be the most trusted and preferred transport partner for Hajj and Umrah pilgrims worldwide, setting the global benchmark for excellence in logistics, customer care, and spiritual tourism.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
