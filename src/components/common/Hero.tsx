'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import GlassButton from '@/components/ui/GlassButton';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface HeroProps {
    title: string;
    subtitle: string | React.ReactNode;
    bgImage: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    showBookingForm?: boolean;
    children?: React.ReactNode;
    layout?: 'center' | 'two-column';
    badge?: string;
    backgroundChildren?: React.ReactNode;
    breadcrumbs?: React.ReactNode;
    alt?: string;
}

const Hero: React.FC<HeroProps> = ({
    title,
    subtitle,
    bgImage,
    ctaText,
    ctaLink,
    secondaryCtaText,
    secondaryCtaLink,
    children,
    layout = 'center',
    badge,
    backgroundChildren,
    breadcrumbs,
    alt
}) => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const isTwoColumn = layout === 'two-column';

    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Ken Burns Effect */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1 }}
                    animate={isMobile ? { scale: 1 } : { scale: 1.1 }}
                    transition={isMobile ? {} : { duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    className="relative w-full h-full"
                >
                    <Image
                        src={bgImage}
                        alt={alt || "Ahsas Cab Premium Transport"}
                        fill
                        priority
                        quality={85}
                        className="object-cover"
                        sizes="100vw"
                    />
                </motion.div>
                {/* Premium Spiritual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-navy/70 to-slate-900/50 z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 z-[1]" />

                {/* Subtle light leak for spiritual feel */}
                <div className="absolute top-0 right-1/4 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-60 mix-blend-screen z-[1]" />

                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-[1]" />
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 relative z-30 pt-24 pb-20 md:pb-32">
                <div className={cn(
                    "grid gap-12 items-center",
                    isTwoColumn ? "lg:grid-cols-2" : "grid-cols-1 text-center max-w-4xl mx-auto"
                )}>
                    {/* Text Content */}
                    <div className={cn(
                        "space-y-8 relative z-10",
                        isTwoColumn ? "text-left lg:pr-8" : "text-center",
                        "p-6 md:p-10 rounded-[2.5rem] backdrop-blur-[4px] bg-white/[0.03] border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
                    )}>
                        {breadcrumbs && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                {breadcrumbs}
                            </motion.div>
                        )}

                        {badge && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className={cn("inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-gold text-xs font-bold tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(212,175,55,0.15)]", !isTwoColumn && "mx-auto")}
                            >
                                <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)] animate-pulse" />
                                {badge}
                            </motion.div>
                        )}

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-playfair leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                {title}
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <div className="text-base md:text-lg lg:text-xl text-slate-100/90 font-light leading-relaxed max-w-xl tracking-wide">
                                {subtitle}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className={cn("flex flex-wrap gap-4", !isTwoColumn && "justify-center")}
                        >
                            {ctaText && ctaLink && (
                                <GlassButton
                                    href={ctaLink}
                                    variant="primary"
                                    size="lg"
                                    className="h-14 px-10 text-lg font-bold btn-gold shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
                                >
                                    {ctaText}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </GlassButton>
                            )}
                            {secondaryCtaText && secondaryCtaLink && (
                                <GlassButton
                                    href={secondaryCtaLink}
                                    variant="outline"
                                    size="lg"
                                    className="h-14 px-8 text-lg text-white border-white/20 hover:bg-white/10 hover:border-gold/40 hover:text-gold transition-colors"
                                >
                                    {secondaryCtaText}
                                </GlassButton>
                            )}
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className={cn("flex flex-wrap gap-6 text-sm text-white/60 pt-4", !isTwoColumn && "justify-center")}
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>Official License</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>24/7 Support</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>Best Price Guarantee</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column / Children (Booking Form) */}
                    {children && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className={cn("w-full max-w-md mx-auto lg:ml-auto", isTwoColumn ? "block" : "hidden lg:block mt-12")}
                        >
                            {children}
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
            >
                <ChevronDown className="w-8 h-8" />
            </motion.div>

            {/* Custom Background Children */}
            {backgroundChildren && (
                <div className="absolute inset-0 z-[2] pointer-events-none">
                    {backgroundChildren}
                </div>
            )}
        </section>
    );
};

export default Hero;
