import React from 'react';
import type { Metadata } from 'next';
import { Download } from 'lucide-react';
import Hero from '@/components/common/Hero';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import FadeIn from '@/components/common/FadeIn';
import ResourceCard from '@/components/resources/ResourceCard';
import { resources } from '@/data/resources';
import { constructMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return constructMetadata({
        title: 'Pilgrim Resources & Downloads | Free Umrah Guides',
        description: 'Download our exclusive Umrah guides, checklists, and travel tips for free. Essential resources for a spiritual and hassle-free journey.',
        canonicalUrl: 'https://ahsascab.com/resources',
    });
}

export default function ResourcesPage() {
    return (
        <main className="bg-white dark:bg-slate-950 min-h-screen">
            <Hero
                title="Pilgrim Resources"
                subtitle="Curated guides and checklists to support your spiritual journey."
                bgImage="/images/blog-hero-professional.png" // Placeholder
                breadcrumbs={<Breadcrumbs />}
            />

            <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                                Free Downloads
                            </span>
                            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-navy dark:text-white mb-6">
                                Essential Tools for Your Journey
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                We have compiled a list of valuable resources to help you focus on your worship.
                                Download them for free and prepare for a blessed Umrah.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.map((resource, index) => (
                            <FadeIn key={resource.id} delay={index * 0.1}>
                                <ResourceCard {...resource} />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter / CTA Section */}
            <section className="py-24 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <FadeIn>
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
                            <Download size={32} className="text-gold" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
                            Get All Resources in One Pack
                        </h2>
                        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                            Save time by downloading our complete "Umrah Pilgrim Kit" containing all the guides,
                            checklists, and maps in a single ZIP file.
                        </p>
                        <button className="px-10 py-4 bg-gold text-navy font-bold rounded-xl hover:bg-white transition-all duration-300 shadow-lg shadow-gold/20 flex items-center gap-3 mx-auto uppercase tracking-widest text-sm transform hover:-translate-y-1">
                            Download Full Kit
                            <Download size={18} />
                        </button>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
