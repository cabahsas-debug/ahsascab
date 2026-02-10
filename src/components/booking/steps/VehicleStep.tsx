'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Info, Check, ArrowRight, ChevronLeft, Star } from 'lucide-react';
import { usePricing } from '@/context/PricingContext';

interface VehicleStepProps {
    data: any;
    updateData: (data: any) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function VehicleStep({ data, updateData, onNext, onBack }: VehicleStepProps) {
    const { vehicles, calculatePrice } = usePricing();

    const handleSelect = (vId: string) => {
        updateData({ selectedVehicle: vId });
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-6">
                <div className="border-l-4 border-secondary pl-6">
                    <h2 className="text-3xl font-bold font-playfair text-primary dark:text-white">Choose Your Fleet</h2>
                    <p className="text-slate-500 mt-2">Select the vehicle that best suits your needs.</p>
                </div>
                <button onClick={onBack} className="text-slate-400 hover:text-primary dark:hover:text-white flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-colors">
                    <ChevronLeft size={16} strokeWidth={3} />
                    Back
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {vehicles.map((vehicle) => {
                    const isSelected = data.selectedVehicle === vehicle.id;
                    const pricing = data.routeId && data.routeId !== 'custom'
                        ? calculatePrice(data.routeId, vehicle.id)
                        : null;

                    return (
                        <div
                            key={vehicle.id}
                            onClick={() => handleSelect(vehicle.id)}
                            className={`
                                relative p-1 rounded-3xl cursor-pointer transition-all duration-300 group
                                ${isSelected
                                    ? 'bg-gradient-to-br from-secondary to-[#B4941F] shadow-2xl shadow-secondary/30 scale-[1.02] z-10'
                                    : 'bg-white dark:bg-slate-800 border-2 border-transparent hover:border-secondary/30 hover:shadow-xl'}
                            `}
                        >
                            {!isSelected && <div className="absolute inset-0 rounded-3xl border-2 border-slate-100 dark:border-slate-700 pointer-events-none" />}

                            <div className={`
                                h-full rounded-[20px] p-5 transition-colors
                                ${isSelected ? 'bg-white dark:bg-slate-900' : 'bg-transparent'}
                            `}>
                                <div className="flex gap-5">
                                    <div className="w-28 h-28 relative overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-800 shrink-0">
                                        {vehicle.image ? (
                                            <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-slate-300">
                                                <Users size={32} />
                                            </div>
                                        )}
                                        {vehicle.name.includes('GMC') && (
                                            <div className="absolute top-2 right-2 bg-gradient-to-r from-secondary to-[#B4941F] text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest shadow-lg">
                                                VIP
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                                        <div>
                                            <div className="flex justify-between items-start gap-2">
                                                <h3 className={`font-black text-xl leading-tight truncate font-playfair ${isSelected ? 'text-secondary' : 'text-primary dark:text-white'}`}>
                                                    {vehicle.name}
                                                </h3>
                                                {isSelected && (
                                                    <div className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center shadow-md animate-in zoom-in spin-in-180 duration-300">
                                                        <Check size={14} strokeWidth={3} />
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex flex-wrap items-center gap-2 mt-3">
                                                <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                                                    <Users size={12} className="text-secondary" />
                                                    {vehicle.capacity} PAX
                                                </div>
                                                <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                                                    <Briefcase size={12} className="text-secondary" />
                                                    {vehicle.luggage} BAGS
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 flex items-end justify-between">
                                            {pricing ? (
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Fixed Price</span>
                                                    <div>
                                                        <span className="text-2xl font-black text-primary dark:text-white relative">
                                                            {pricing.price}
                                                            <span className="text-xs font-bold text-secondary ml-1 align-top">SAR</span>

                                                            {/* Simple underline decoration */}
                                                            <span className="absolute -bottom-1 left-0 w-1/2 h-[3px] bg-secondary/30 rounded-full"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1.5 rounded-lg uppercase tracking-widest border border-secondary/20">
                                                    Custom Quote
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="pt-8 border-t border-slate-100 dark:border-slate-700">
                <button
                    onClick={onNext}
                    disabled={!data.selectedVehicle}
                    className={`
                        w-full py-5 font-bold text-lg rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 group
                        ${data.selectedVehicle
                            ? 'bg-gradient-to-r from-primary to-primary/90 text-secondary hover:shadow-2xl hover:-translate-y-1'
                            : 'bg-slate-100 text-slate-400 cursor-not-allowed'}
                    `}
                >
                    Continue to Details
                    <ArrowRight size={20} className={data.selectedVehicle ? "group-hover:translate-x-1 transition-transform" : ""} />
                </button>
            </div>
        </div>
    );
}
