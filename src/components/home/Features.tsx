'use client';

import { Shield, Clock, Heart } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import FadeIn from '@/components/common/FadeIn';

export default function Features() {
    return (
        <AnimatedSection className="py-12 md:py-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-gold/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-navy/20 rounded-full blur-3xl opacity-50" />
                <div className="absolute inset-0 pattern-grid-fade opacity-5"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 font-playfair px-4 md:px-0 text-navy">
                        Why Choose Ahsas Cab for <span className="text-gold">Umrah Transport?</span>
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <GlassCard delay={0.1} className="text-center group border border-gold/10 rounded-3xl shadow-lg py-10 md:py-12 bg-white/60 backdrop-blur-md transition-all duration-500 hover:shadow-xl hover:border-gold/30 hover:-translate-y-2">
                        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-lg shadow-gold/5 ring-1 ring-gold/20">
                            <Shield size={36} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 font-playfair tracking-tight text-navy group-hover:text-gold transition-colors">Safe & Trusted Pilgrim Transport</h3>
                        <p className="text-gold/90 font-bold font-reem-kufi mb-4 text-base">نقل آمن وموثوق</p>
                        <p className="text-navy/70 leading-relaxed px-4 md:px-2">
                            Officially licensed chauffeurs & well-maintained vehicles. The most trusted choice for safe Makkah to Madinah travel.
                        </p>
                    </GlassCard>

                    <GlassCard delay={0.2} className="text-center group border border-gold/10 rounded-3xl shadow-lg py-10 md:py-12 bg-white/60 backdrop-blur-md transition-all duration-500 hover:shadow-xl hover:border-gold/30 hover:-translate-y-2">
                        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-lg shadow-gold/5 ring-1 ring-gold/20">
                            <Clock size={36} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 font-playfair tracking-tight text-navy group-hover:text-gold transition-colors">Punctual Airport Transfers</h3>
                        <p className="text-gold/90 font-bold font-reem-kufi mb-4 text-base">دقة في المواعيد</p>
                        <p className="text-navy/70 leading-relaxed px-4 md:px-2">
                            We track your flight to ensure timely pickups. Reliable Jeddah & Madinah Airport service available 24/7.
                        </p>
                    </GlassCard>

                    <GlassCard delay={0.3} className="text-center group border border-gold/10 rounded-3xl shadow-lg py-10 md:py-12 bg-white/60 backdrop-blur-md transition-all duration-500 hover:shadow-xl hover:border-gold/30 hover:-translate-y-2">
                        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-lg shadow-gold/5 ring-1 ring-gold/20">
                            <Heart size={36} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 font-playfair tracking-tight text-navy group-hover:text-gold transition-colors">VIP Hospitality & Comfort</h3>
                        <p className="text-gold/90 font-bold font-reem-kufi mb-4 text-base">ضيافة وراحة VIP</p>
                        <p className="text-navy/70 leading-relaxed px-4 md:px-2">
                            Spacious GMC Yukons & luxury vans for families. We serve the guests of Allah with utmost respect and premium comfort.
                        </p>
                    </GlassCard>
                </div>
            </div>
        </AnimatedSection>
    );
}
