'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface RouteCardProps {
    from: string;
    to: string;
    duration: string;
    distance: string;
    price?: number;
    delay?: number;
}

export default function RouteCard({
    from,
    to,
    duration,
    distance,
    price,
    delay = 0,
}: RouteCardProps) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay }}
            className="group block relative bg-white dark:bg-navy-900 rounded-2xl border border-gray-200 dark:border-navy-700 hover:border-gold/50 dark:hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300"
        >
            <Link href={`/booking?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&service=transfer`} className="block p-6">

                {/* Header: Locations */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                    {/* Origin */}
                    <div className="flex items-center gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0`}>
                            <MapPin className="text-gold" size={20} />
                        </div>
                        <div>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">From</span>
                            <h3 className="text-lg font-bold text-navy-900 dark:text-white leading-tight">{from}</h3>
                        </div>
                    </div>

                    {/* Animated Connector (Simple) */}
                    <div className="hidden md:flex flex-col items-center justify-center w-32 relative">
                        <div className="w-full h-[2px] bg-gray-100 dark:bg-navy-800 rounded-full relative overflow-hidden">
                            <motion.div
                                className={`absolute inset-0 bg-gold`}
                                initial={{ x: '-100%' }}
                                whileInView={{ x: '100%' }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                style={{ opacity: 0.3 }}
                            />
                        </div>
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-navy-900 px-2 text-xs font-medium text-gray-500 flex flex-col items-center`}>
                            <span className="whitespace-nowrap">{distance}</span>
                        </div>
                    </div>

                    {/* Destination */}
                    <div className="flex items-center gap-4 flex-1 md:justify-end">
                        <div className="md:text-right order-2 md:order-1">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">To</span>
                            <h3 className="text-lg font-bold text-navy-900 dark:text-white leading-tight">{to}</h3>
                        </div>
                        <div className={`w-12 h-12 rounded-full bg-gray-100 dark:bg-navy-800 flex items-center justify-center shrink-0 order-1 md:order-2 group-hover:bg-gold group-hover:text-navy-900 transition-colors duration-300`}>
                            <MapPin size={20} className="text-gray-400 group-hover:text-navy-900 transition-colors" />
                        </div>
                    </div>
                </div>

                {/* Footer: Details & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-navy-800/50">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock size={16} className="text-gold" />
                            <span>{duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 md:hidden">
                            <ArrowRight size={16} className="text-gold" />
                            <span>{distance}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {price && (
                            <div className="text-right">
                                <span className="block text-xs text-gray-400">Starting from</span>
                                <span className="font-bold text-lg text-navy-900 dark:text-white">{price} SAR</span>
                            </div>
                        )}
                        <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-navy-800 flex items-center justify-center group-hover:bg-gold group-hover:text-navy-900 transition-all duration-300 group-hover:translate-x-1">
                            <ChevronRight size={20} />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
