'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ShieldCheck, Headphones, CreditCard, Check } from 'lucide-react';
import { usePricing } from '@/context/PricingContext';
import JourneyStep from './steps/JourneyStep';
import VehicleStep from './steps/VehicleStep';
import DetailsStep from './steps/DetailsStep';

const STEPS = [
    { id: 1, title: 'Journey', description: 'Route & Date' },
    { id: 2, title: 'Vehicle', description: 'Choose Fleet' },
    { id: 3, title: 'Details', description: 'Confirm & Book' }
];

export default function BookingWizard() {
    const { routes, vehicles, isLoading, calculatePrice } = usePricing();
    const [currentStep, setCurrentStep] = useState(1);
    const [bookingData, setBookingData] = useState({
        serviceType: 'Intercity',
        routeId: '',
        pickup: '',
        dropoff: '',
        date: null as Date | null,
        time: null as Date | null,
        selectedVehicle: null as string | null,
        vehicleCount: 1,
        passengers: 1,
        luggage: 0,
        name: '',
        email: '',
        phone: '',
        notes: ''
    });

    const updateData = (data: Partial<typeof bookingData>) => {
        setBookingData(prev => ({ ...prev, ...data }));
    };

    const handleNext = () => {
        if (currentStep < 3) setCurrentStep(prev => prev + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(prev => prev - 1);
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-8 md:py-16 relative">
            {/* Spiritual Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none -z-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] mix-blend-multiply" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] mix-blend-multiply" />
            </div>

            {/* Elegant Progress Header */}
            <div className="flex justify-between items-center mb-12 relative z-10 px-4 md:px-12">
                {/* Connecting Line */}
                <div className="absolute top-5 left-16 right-16 h-[2px] bg-slate-200 dark:bg-slate-800 -z-10 hidden md:block" />

                {STEPS.map((step) => (
                    <div key={step.id} className="flex flex-col items-center gap-3 group relative">
                        <div className={`
                            w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 relative z-10
                            ${currentStep >= step.id
                                ? 'bg-secondary text-white shadow-lg shadow-secondary/30 ring-4 ring-secondary/10 scale-110'
                                : 'bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-300'}
                        `}>
                            {currentStep > step.id ? <Check size={20} strokeWidth={3} /> : step.id}
                        </div>
                        <div className="text-center">
                            <h3 className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${currentStep >= step.id ? 'text-primary' : 'text-slate-400'}`}>
                                {step.title}
                            </h3>
                            <span className="text-[10px] font-medium text-slate-400 hidden md:block mt-1">
                                {step.description}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Card */}
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-[32px] shadow-2xl shadow-slate-200/50 dark:shadow-black/20 border border-white/50 dark:border-slate-700 overflow-hidden relative">
                {/* Internal Decorative Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-50" />

                <div className="p-6 md:p-12 relative z-10 min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {currentStep === 1 && <JourneyStep data={bookingData} updateData={updateData} onNext={handleNext} />}
                            {currentStep === 2 && <VehicleStep data={bookingData} updateData={updateData} onNext={handleNext} onBack={handleBack} />}
                            {currentStep === 3 && <DetailsStep data={bookingData} updateData={updateData} onBack={handleBack} />}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Trust Footer */}
                <div className="bg-slate-50/80 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700 py-5 px-6 md:px-12 flex flex-wrap justify-center md:justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-primary/60 dark:text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                        <ShieldCheck size={16} className="text-emerald-500" />
                        Safe & Secure
                    </div>
                    <div className="flex items-center gap-2 text-primary/60 dark:text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                        <Headphones size={16} className="text-secondary" />
                        24/7 Support
                    </div>
                    <div className="flex items-center gap-2 text-primary/60 dark:text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                        <CreditCard size={16} className="text-blue-500" />
                        Pay on Arrival
                    </div>
                </div>
            </div>

            {/* Google Maps Script */}
            <Script
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || ''}&libraries=places`}
                strategy="afterInteractive"
            />
        </div>
    );
}
