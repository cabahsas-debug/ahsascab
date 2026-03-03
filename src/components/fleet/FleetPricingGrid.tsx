'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';
import pricingData from '@/data/pricing.json';
import { trackConversion } from '@/lib/analytics';
import { getWhatsAppLink } from '@/lib/whatsapp';

interface RouteProduct {
    id: string;
    title: string;
    price: string;
    image: string;
}

interface FleetPricingGridProps {
    vehicleId: string;
    vehicleImage: string;
    vehicleType: string; // 'camry', 'gmc', 'staria', 'starex', 'hiace', 'coaster'
    title?: string;
    subtitle?: string;
}

const PricingCard = ({ route, dbVehicleId }: { route: RouteProduct; dbVehicleId: string }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="group bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 p-3 sm:p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden h-full flex flex-col justify-between">
            {/* Decorator */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500 ease-out" />

            <div>
                <div className="relative w-full aspect-[16/9] mb-4">
                    <Image
                        src={route.image}
                        alt={route.title}
                        fill
                        className="object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 33vw, 25vw"
                    />
                </div>

                <div className="text-center space-y-1 sm:space-y-2 mb-4">
                    <h3 className="font-bold text-xs sm:text-sm leading-tight h-[2.5rem] flex items-center justify-center text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                        {route.title}
                    </h3>

                    <div className="text-lg sm:text-xl font-bold text-amber-500 dark:text-amber-400 font-playfair tracking-tight">
                        {route.price}
                    </div>
                </div>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                {/* Quantity Simulator */}
                <div className="flex items-center justify-center gap-2">
                    <button
                        onClick={handleDecrement}
                        className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 text-slate-600 dark:text-slate-400 flex items-center justify-center transition-colors"
                    >
                        <Minus size={14} />
                    </button>
                    <span className="font-bold text-sm sm:text-lg w-6 text-center text-slate-800 dark:text-white">{quantity}</span>
                    <button
                        onClick={handleIncrement}
                        className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 text-slate-600 dark:text-slate-400 flex items-center justify-center transition-colors"
                    >
                        <Plus size={14} />
                    </button>
                </div>

                <a
                    href={getWhatsAppLink(`Salam Ahsas Alrihlat, I would like to book a ${route.title} trip.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackConversion('other', `pricing_grid_${route.id}_${dbVehicleId}`)}
                    className="block w-full bg-amber-400 text-slate-900 hover:bg-white hover:text-slate-900 font-bold py-1.5 px-1 sm:py-2 sm:px-4 rounded text-[10px] sm:text-xs transition-all duration-300 shadow-sm hover:shadow-amber-400/25 text-center whitespace-nowrap cursor-pointer"
                >
                    Book Now
                </a>
            </div>
        </div>
    );
};

export default function FleetPricingGrid({
    vehicleId,
    vehicleImage,
    vehicleType,
    title,
    subtitle
}: FleetPricingGridProps) {
    // Generate routes based on pricing.json
    const routes: RouteProduct[] = pricingData.routes
        .filter(r => r.customRates && (r.customRates as any)[vehicleType])
        .map(r => ({
            id: r.id,
            title: r.name,
            price: `${(r.customRates as any)[vehicleType]}.00 SR`,
            image: vehicleImage
        }))
        // Filter out some less common routes for the grid to keep it clean (like train stations)
        .filter(r => !r.title.toLowerCase().includes('train'))
        .filter(r => !r.title.toLowerCase().includes('train')); // Show all routes except train

    return (
        <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-slate-900 dark:text-white">
                        {title || `Affordable ${vehicleType.toUpperCase()} Services`}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
                        {subtitle || `Best value and comfort for your journey. Enjoy a premium ride with our ${vehicleType.toUpperCase()} fleet.`}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                    {routes.map((route, index) => (
                        <FadeIn key={route.id} delay={index * 0.05} scale>
                            <PricingCard route={route} dbVehicleId={vehicleId} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
