'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, PlaneLanding, PlaneTakeoff, Building2, Navigation, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import MapAutocomplete from '../MapAutocomplete';
import { usePricing } from '@/context/PricingContext';
import { splitRouteName } from '@/lib/utils/route-utils'; // Need to create or check if exists

interface JourneyStepProps {
    data: any;
    updateData: (data: any) => void;
    onNext: () => void;
}

export default function JourneyStep({ data, updateData, onNext }: JourneyStepProps) {
    const { routes } = usePricing();
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleNext = () => {
        const newErrors: Record<string, string> = {};
        if (!data.pickup) newErrors.pickup = 'Pickup location is required';
        if (!data.dropoff) newErrors.dropoff = 'Dropoff location is required';
        if (!data.date) newErrors.date = 'Please select a date';
        if (!data.time) newErrors.time = 'Please select a time';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        onNext();
    };

    // Attempt to match a predefined route for better pricing/UX
    useEffect(() => {
        if (!data.pickup || !data.dropoff) return;

        const matched = routes.find(r => {
            const [p, d] = r.name.toLowerCase().split(/\u2192|\u2194| to /);
            const pMatch = data.pickup.toLowerCase().includes(p?.trim()) || p?.trim().includes(data.pickup.toLowerCase());
            const dMatch = data.dropoff.toLowerCase().includes(d?.trim()) || d?.trim().includes(data.dropoff.toLowerCase());
            return pMatch && dMatch;
        });

        if (matched && matched.id !== data.routeId) {
            updateData({ routeId: matched.id });
        } else if (!matched && data.routeId !== 'custom') {
            updateData({ routeId: 'custom' });
        }
    }, [data.pickup, data.dropoff, routes]);

    return (
        <div className="space-y-10">
            <div className="text-center md:text-left border-l-4 border-secondary pl-6">
                <h2 className="text-3xl font-bold font-playfair text-primary dark:text-white">Plan Your Journey</h2>
                <p className="text-slate-500 mt-2 text-lg">Where would you like to go today?</p>
            </div>

            {/* Service Type Selector */}
            <div className="grid grid-cols-3 gap-4">
                {[
                    { id: 'Intercity', icon: Building2, label: 'Intercity' },
                    { id: 'Airport', icon: PlaneLanding, label: 'Airport' },
                    { id: 'Ziarat', icon: Navigation, label: 'Ziarat' }
                ].map((type) => (
                    <button
                        key={type.id}
                        onClick={() => updateData({ serviceType: type.id })}
                        className={`
                            flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 group
                            ${data.serviceType === type.id
                                ? 'border-secondary bg-secondary text-white shadow-xl shadow-secondary/20 scale-105'
                                : 'border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-400 hover:border-secondary/50 hover:bg-white'}
                        `}
                    >
                        <type.icon size={28} className={`mb-3 ${data.serviceType === type.id ? 'text-white' : 'text-slate-400 group-hover:text-secondary'}`} />
                        <span className="text-xs font-bold uppercase tracking-widest">{type.label}</span>
                    </button>
                ))}
            </div>

            {/* Locations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MapAutocomplete
                    label="Pickup Location"
                    placeholder="Enter Pickup Location"
                    value={data.pickup}
                    onChange={(val) => updateData({ pickup: val })}
                    error={errors.pickup}
                />
                <MapAutocomplete
                    label="Dropoff Destination"
                    placeholder="Enter Dropoff Destination"
                    value={data.dropoff}
                    onChange={(val) => updateData({ dropoff: val })}
                    error={errors.dropoff}
                />
            </div>

            {/* Schedule */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-dashed border-slate-200 dark:border-slate-700">
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Travel Date</label>
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary z-10 transition-colors">
                            <Calendar size={22} />
                        </div>
                        <input
                            type="date"
                            value={data.date ? data.date.toISOString().split('T')[0] : ''}
                            onChange={(e) => {
                                if (!e.target.value) {
                                    updateData({ date: null });
                                    return;
                                }
                                const newDate = new Date(e.target.value);
                                updateData({ date: newDate });
                            }}
                            min={new Date().toISOString().split('T')[0]}
                            className={`
                                w-full pl-14 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 
                                border border-slate-200 dark:border-slate-700 
                                rounded-xl outline-none transition-all duration-300
                                focus:border-secondary focus:ring-4 focus:ring-secondary/10 focus:bg-white
                                text-primary dark:text-white font-medium
                                ${errors.date ? 'border-red-500 bg-red-50' : ''}
                                [color-scheme:light] dark:[color-scheme:dark]
                            `}
                        />
                    </div>
                    {errors.date && <span className="text-xs text-red-500 font-medium ml-1 flex items-center gap-1">Required</span>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Pickup Time</label>
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary z-10 transition-colors">
                            <Clock size={22} />
                        </div>
                        <input
                            type="time"
                            value={data.time ? data.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }) : ''}
                            onChange={(e) => {
                                if (!e.target.value) {
                                    updateData({ time: null });
                                    return;
                                }
                                const [hours, minutes] = e.target.value.split(':').map(Number);
                                const newTime = new Date();
                                newTime.setHours(hours);
                                newTime.setMinutes(minutes);
                                updateData({ time: newTime });
                            }}
                            className={`
                                w-full pl-14 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 
                                border border-slate-200 dark:border-slate-700 
                                rounded-xl outline-none transition-all duration-300
                                focus:border-secondary focus:ring-4 focus:ring-secondary/10 focus:bg-white
                                text-primary dark:text-white font-medium
                                ${errors.time ? 'border-red-500 bg-red-50' : ''}
                                [color-scheme:light] dark:[color-scheme:dark]
                            `}
                        />
                    </div>
                    {errors.time && <span className="text-xs text-red-500 font-medium ml-1 flex items-center gap-1">Required</span>}
                </div>
            </div>

            <div className="pt-8">
                <button
                    onClick={handleNext}
                    className="w-full py-5 bg-gradient-to-r from-primary to-primary/90 text-secondary font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Select Vehicle <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
            </div>
        </div>
    );
}
