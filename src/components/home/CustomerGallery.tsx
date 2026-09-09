'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

import FadeIn from '@/components/common/FadeIn';



import { galleryItems } from '@/data/gallery';

interface GalleryItem {
    _id: string;
    image: string;
    caption: string;
    location: string;
}

export default function CustomerGallery() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    // Initialize with static data for instant load
    const [items, setItems] = useState<GalleryItem[]>(galleryItems);
    const [loading, setLoading] = useState(false); // No longer needed for blocking, but kept if we want a spinner overlay (optional)

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await fetch('/api/gallery');
                const data = await res.json();
                if (data && data.length > 0) {
                    setItems(data);
                }
            } catch (error) {
                console.error('Using fallback gallery due to fetch error:', error);
                // No action needed, fallback already set
            }
        };
        fetchItems();
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400; // Approx card width
            const currentScroll = scrollContainerRef.current.scrollLeft;
            const targetScroll = direction === 'left'
                ? currentScroll - scrollAmount
                : currentScroll + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    if (!loading && items.length === 0) return null;

    return (
        <section id="visitor-gallery" className="py-20 relative bg-slate-50 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pattern-grid-fade opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-gold font-bold tracking-wider uppercase text-sm mb-3 block">Guest Gallery</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-navy mb-6">Our Happy Pilgrims</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Moments of joy and spiritual fulfillment captured by our valued guests.
                        </p>
                    </FadeIn>
                </div>

                <div className="relative group/gallery">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white text-navy hover:text-gold rounded-full shadow-lg border border-slate-200 transition-all duration-300 opacity-0 group-hover/gallery:opacity-100 hover:scale-110 focus:opacity-100 disabled:opacity-0"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white text-navy hover:text-gold rounded-full shadow-lg border border-slate-200 transition-all duration-300 opacity-0 group-hover/gallery:opacity-100 hover:scale-110 focus:opacity-100 disabled:opacity-0"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div
                        className="flex overflow-x-auto gap-6 pb-8 pt-4 px-4 snap-x snap-mandatory scrollbar-hide -mx-4 scroll-smooth"
                        ref={scrollContainerRef}
                    >
                        {items.map((item, index) => (
                            <FadeIn key={item._id} delay={index * 0.1} className="min-w-[85vw] md:min-w-[350px] lg:min-w-[400px] snap-center shrink-0">
                                <div className="group relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg border border-white/20 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    <Image
                                        src={item.image}
                                        alt={item.caption}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                                    
                                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-white font-bold font-playfair text-xl md:text-2xl mb-2 drop-shadow-md">
                                            {item.caption}
                                        </h3>
                                        <span className="inline-flex items-center text-gold text-sm font-medium bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                            <MapPin size={14} className="mr-1.5" /> {item.location}
                                        </span>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
