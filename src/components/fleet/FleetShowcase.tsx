'use client';

import styles from './FleetShowcase.module.css';
import { Users, Briefcase, Check } from 'lucide-react';
import Image from 'next/image';
import FadeIn from '@/components/common/FadeIn';
import { useSettings } from '@/context/SettingsContext';
import { getWhatsAppLink } from '@/lib/whatsapp';

export interface Vehicle {
    id: string;
    name: string;
    price: string;
    passengers: number;
    luggage: number;
    features: string[];
    image: string;
}

interface FleetShowcaseProps {
    vehicles: Vehicle[];
}

export default function FleetShowcase({ vehicles }: FleetShowcaseProps) {
    const { settings } = useSettings();

    const calculateDiscountedPrice = (priceString: string) => {
        if (!settings?.discount?.enabled) return null;

        // Check dates
        // Check dates
        const now = new Date();
        const nowCheck = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        if (settings.discount.startDate) {
            const startDate = new Date(settings.discount.startDate);
            const startCheck = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
            if (startCheck > nowCheck) return null;
        }

        if (settings.discount.endDate) {
            const endDate = new Date(settings.discount.endDate);
            // For end date, we want to include the full end day, so check if now is strictly after end date
            // But usually end date from picker is 00:00. Let's assume end of day?
            // If picker gives 00:00, "End Date: Dec 4" usually means "Until Dec 4 23:59".
            // So we should compare if nowCheck > endCheck.
            const endCheck = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
            if (nowCheck > endCheck) return null;
        }

        // Extract number from price string (e.g. "From 150 SAR" -> 150)
        const match = priceString.match(/(\d+)/);
        if (!match) return null;

        const originalPrice = parseInt(match[0]);
        let finalPrice = originalPrice;

        if (settings.discount.type === 'percentage') {
            finalPrice = Math.round(originalPrice * (1 - settings.discount.value / 100));
        } else {
            finalPrice = Math.max(0, originalPrice - settings.discount.value);
        }

        return {
            original: originalPrice,
            final: finalPrice,
            formatted: priceString.replace(match[0], finalPrice.toString())
        };
    };

    return (
        <section className="py-20 bg-slate-50 dark:bg-navy-950 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('/patterns/islamic-pattern.png')] bg-repeat z-0 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4 font-playfair">Our Premium <span className="text-gold">Fleet</span></h2>
                    <p className="text-lg text-navy-600 dark:text-gray-300 max-w-2xl mx-auto font-light">Choose from our wide range of luxury vehicles, ensuring comfort and spirituality on your journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vehicles.map((vehicle, index) => {
                        const discountInfo = calculateDiscountedPrice(vehicle.price);

                        return (
                            <FadeIn key={vehicle.id} delay={index * 0.1}>
                                <div className="group relative bg-white dark:bg-navy-900 rounded-[2rem] overflow-hidden border border-gray-200 dark:border-navy-700 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                                    {/* Image Area */}
                                    <div className="relative h-64 w-full bg-gray-100 dark:bg-navy-800 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opactiy-60" />
                                        <Image
                                            src={vehicle.image}
                                            alt={vehicle.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        {discountInfo && settings?.discount && (
                                            <div className="absolute top-4 right-4 bg-gold text-navy-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20 animate-pulse border border-yellow-400">
                                                {settings.discount.type === 'percentage' ? `-${settings.discount.value}% OFF` : `-${settings.discount.value} SAR`}
                                            </div>
                                        )}
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <h3 className="text-2xl font-bold text-white font-playfair">{vehicle.name}</h3>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex justify-between items-end mb-6 border-b border-gray-100 dark:border-navy-800 pb-4">
                                            <div>
                                                <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">Starting From</span>
                                                <div className="flex flex-col">
                                                    {discountInfo ? (
                                                        <>
                                                            <span className="text-sm text-gray-400 line-through">{vehicle.price}</span>
                                                            <span className="text-2xl font-bold text-navy-900 dark:text-white">{discountInfo.formatted}</span>
                                                        </>
                                                    ) : (
                                                        <span className="text-2xl font-bold text-navy-900 dark:text-white">{vehicle.price}</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="flex flex-col items-center bg-gray-50 dark:bg-navy-800 p-2 rounded-xl min-w-[60px] border border-gray-100 dark:border-navy-700">
                                                    <Users size={18} className="text-gold mb-1" />
                                                    <span className="text-xs font-bold text-navy-600 dark:text-gray-300">{vehicle.passengers} pax</span>
                                                </div>
                                                <div className="flex flex-col items-center bg-gray-50 dark:bg-navy-800 p-2 rounded-xl min-w-[60px] border border-gray-100 dark:border-navy-700">
                                                    <Briefcase size={18} className="text-gold mb-1" />
                                                    <span className="text-xs font-bold text-navy-600 dark:text-gray-300">{vehicle.luggage} bags</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3 mb-8 flex-grow">
                                            {vehicle.features.map((feature: string, i: number) => (
                                                <div key={i} className="flex items-start gap-3 text-sm text-navy-600 dark:text-gray-300">
                                                    <div className="mt-0.5 bg-gold/10 p-1 rounded-full">
                                                        <Check size={10} className="text-gold" strokeWidth={3} />
                                                    </div>
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <a
                                            href={getWhatsAppLink(`Salam Ahsas Alrihlat, I would like to book the ${vehicle.name}.`)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.bookBtn}
                                        >
                                            <span>Book via WhatsApp</span>
                                        </a>
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section >
    );
}
