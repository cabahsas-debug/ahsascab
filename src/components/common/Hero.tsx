import React from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import GlassButton from '@/components/ui/GlassButton';

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
    /** Overrides the H1 font sizes, e.g. for long titles. */
    titleClassName?: string;
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
    alt,
    titleClassName
}) => {
    const isTwoColumn = layout === 'two-column';

    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                    <Image
                        src={bgImage}
                        alt={alt || "Ahsas Cab Premium Transport"}
                        fill
                        priority
                        quality={85}
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>
                {/* Simple Dark Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-black/60 z-[1]" />
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 relative z-30 pt-24 pb-20 md:pb-32">
                <div className={cn(
                    "grid gap-12 items-center",
                    isTwoColumn ? "lg:grid-cols-2" : "grid-cols-1 text-center max-w-4xl mx-auto"
                )}>
                    {/* Text Content */}
                    <div className={cn(
                        "space-y-6 relative z-10 p-4 md:p-8",
                        isTwoColumn ? "text-left lg:pr-8" : "text-center"
                    )}>
                        {breadcrumbs && (
                            <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                                {breadcrumbs}
                            </div>
                        )}

                        {badge && (
                            <div className={cn(
                                "inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-gold text-xs font-bold tracking-widest uppercase mb-2",
                                !isTwoColumn && "mx-auto"
                            )}>
                                <span className="w-2 h-2 rounded-full bg-gold" />
                                {badge}
                            </div>
                        )}

                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 fill-mode-both">
                            <h1 className={cn(titleClassName ?? "text-4xl md:text-5xl lg:text-6xl xl:text-7xl", "font-bold font-playfair leading-tight tracking-tight text-white drop-shadow-md")}>
                                {title}
                            </h1>
                        </div>

                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both">
                            <div className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-xl tracking-wide drop-shadow-sm">
                                {subtitle}
                            </div>
                        </div>

                        <div className={cn(
                            "flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-both",
                            !isTwoColumn && "justify-center"
                        )}>
                            {ctaText && ctaLink && (
                                <GlassButton
                                    href={ctaLink}
                                    variant="primary"
                                    size="lg"
                                    className="h-14 px-10 text-lg font-bold btn-gold shadow-lg hover:shadow-xl transition-all"
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
                                    className="h-14 px-8 text-lg text-white border-white/30 hover:bg-white/10 hover:border-gold/60 transition-colors"
                                >
                                    {secondaryCtaText}
                                </GlassButton>
                            )}
                        </div>

                        {/* Trust Indicators */}
                        <div className={cn(
                            "flex flex-wrap gap-6 text-sm text-white/80 pt-6 animate-in fade-in duration-500 delay-400 fill-mode-both",
                            !isTwoColumn && "justify-center"
                        )}>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                <span>Official License</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                <span>24/7 Support</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                <span>Best Price Guarantee</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column / Children (Booking Form) */}
                    {children && (
                        <div className={cn(
                            "w-full max-w-md mx-auto lg:ml-auto animate-in fade-in slide-in-from-right-8 duration-500 delay-200 fill-mode-both",
                            isTwoColumn ? "block" : "hidden lg:block mt-12"
                        )}>
                            {children}
                        </div>
                    )}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
                <ChevronDown className="w-8 h-8" />
            </div>

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
