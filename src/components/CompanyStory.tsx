import React from 'react';

export default function CompanyStory() {
    return (
        <section className="py-16 px-4 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1 rounded-full bg-teal-900/50 text-teal-200 text-sm font-medium border border-teal-700/50">
                            Our Journey
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            From Vision to Service, <span className="text-gold">Guided by Faith</span>
                        </h2>
                        <p className="text-teal-100/80 leading-relaxed">
                            Ahsas Cab was founded with a simple yet profound mission: to serve the guests of Allah with the dignity and comfort they deserve. What started as a humble initiative has grown into a trusted name in Umrah transportation.
                        </p>
                        <p className="text-teal-100/80 leading-relaxed">
                            We understand that your journey is not just physical but spiritual. That&apos;s why every aspect of our service—from our well-maintained fleet to our courteous drivers—is designed to ensure your peace of mind, allowing you to focus entirely on your worship.
                        </p>

                        <div className="pt-4 border-l-4 border-gold pl-4">
                            <p className="text-lg font-medium text-white/90 italic">
                                &quot;We don&apos;t just drive you to your destination; we accompany you on your sacred journey.&quot;
                            </p>
                        </div>
                    </div>

                    {/* Visual/Timeline Placeholder */}
                    <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-xl border border-white/20 backdrop-blur-sm">
                        {/* Placeholder for an image */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            [Company History Image / Timeline Graphic]
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-teal-950/90 backdrop-blur-md p-6 border-t border-white/10">
                            <div className="flex justify-between text-center">
                                <div>
                                    <div className="text-2xl font-bold text-gold">5+</div>
                                    <div className="text-xs text-teal-200">Years Serving</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gold">10k+</div>
                                    <div className="text-xs text-teal-200">Happy Pilgrims</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gold">100%</div>
                                    <div className="text-xs text-teal-200">Reliability</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
