'use client';

import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, ChevronLeft, ArrowRight, ShieldCheck, MapPin, Calendar, Car, Loader2, CheckCircle } from 'lucide-react';
import { usePricing } from '@/context/PricingContext';
import Link from 'next/link';

interface DetailsStepProps {
    data: any;
    updateData: (data: any) => void;
    onBack: () => void;
}

export default function DetailsStep({ data, updateData, onBack }: DetailsStepProps) {
    const { vehicles, calculatePrice } = usePricing();
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Calculate Pricing for Summary
    const vehicle = vehicles.find(v => v.id === data.selectedVehicle);
    const pricing = data.routeId && data.routeId !== 'custom' && data.selectedVehicle
        ? calculatePrice(data.routeId, data.selectedVehicle)
        : null;

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!data.name.trim()) newErrors.name = 'Full name is required';
        if (!data.email.trim() || !data.email.includes('@')) newErrors.email = 'Valid email is required';
        if (!data.phone.trim()) newErrors.phone = 'WhatsApp number is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            const payload = {
                ...data,
                date: data.date?.toISOString().split('T')[0],
                time: data.time?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
                vehicle: vehicle?.name || 'Any',
                totalPrice: pricing ? pricing.price * data.vehicleCount : 0
            };

            const res = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setIsSuccess(true);
            } else {
                alert('Submission failed. Please try again.');
            }
        } catch (error) {
            console.error(error);
            alert('Something went wrong.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <CheckCircle size={48} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Booking Requested!</h2>
                <p className="text-slate-500 mt-4 max-w-sm mx-auto">
                    We've received your request. Our team will contact you on WhatsApp shortly to confirm availability.
                </p>
                <div className="mt-10 flex flex-col gap-3">
                    <Link href="/" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all">
                        Back to Home
                    </Link>
                    <button onClick={() => window.location.reload()} className="text-secondary font-bold hover:underline">
                        Book Another Trip
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-6">
                <div className="border-l-4 border-secondary pl-6">
                    <h2 className="text-3xl font-bold font-playfair text-primary dark:text-white">Final Details</h2>
                    <p className="text-slate-500 mt-2">Enter your info to secure your booking.</p>
                </div>
                <button onClick={onBack} className="text-slate-400 hover:text-primary dark:hover:text-white flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-colors">
                    <ChevronLeft size={16} strokeWidth={3} />
                    Back
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Form */}
                <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors">
                                <User size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={data.name}
                                onChange={(e) => updateData({ name: e.target.value })}
                                className={`
                                    w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 
                                    border border-slate-200 dark:border-slate-700 
                                    rounded-xl outline-none transition-all duration-300
                                    focus:border-secondary focus:ring-4 focus:ring-secondary/10 focus:bg-white
                                    text-primary dark:text-white font-medium
                                    ${errors.name ? 'border-red-500 bg-red-50' : ''}
                                `}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors">
                                <Mail size={20} />
                            </div>
                            <input
                                type="email"
                                placeholder="email@example.com"
                                value={data.email}
                                onChange={(e) => updateData({ email: e.target.value })}
                                className={`
                                    w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 
                                    border border-slate-200 dark:border-slate-700 
                                    rounded-xl outline-none transition-all duration-300
                                    focus:border-secondary focus:ring-4 focus:ring-secondary/10 focus:bg-white
                                    text-primary dark:text-white font-medium
                                    ${errors.email ? 'border-red-500 bg-red-50' : ''}
                                `}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">WhatsApp / Phone</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors">
                                <Phone size={20} />
                            </div>
                            <input
                                type="tel"
                                placeholder="+966 5..."
                                value={data.phone}
                                onChange={(e) => updateData({ phone: e.target.value })}
                                className={`
                                    w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 
                                    border border-slate-200 dark:border-slate-700 
                                    rounded-xl outline-none transition-all duration-300
                                    focus:border-secondary focus:ring-4 focus:ring-secondary/10 focus:bg-white
                                    text-primary dark:text-white font-medium
                                    ${errors.phone ? 'border-red-500 bg-red-50' : ''}
                                `}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Additional Notes (Optional)</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-5 text-slate-400 group-focus-within:text-secondary transition-colors">
                                <MessageSquare size={20} />
                            </div>
                            <textarea
                                placeholder="Luggage details, flight number, etc."
                                value={data.notes}
                                onChange={(e) => updateData({ notes: e.target.value })}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none transition-all duration-300 focus:border-secondary focus:ring-4 focus:ring-secondary/10 focus:bg-white text-primary dark:text-white font-medium min-h-[58px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Summary Card */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-primary to-slate-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden ring-1 ring-white/10">
                        {/* Golden Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none" />

                        <h3 className="text-sm font-black uppercase tracking-widest text-secondary mb-8 border-b border-white/10 pb-4">Booking Summary</h3>

                        <div className="space-y-6 relative z-10">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 text-secondary flex items-center justify-center shrink-0 border border-white/5">
                                    <MapPin size={18} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Journey</p>
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                                            <p className="text-sm font-medium leading-tight">{data.pickup}</p>
                                        </div>
                                        <div className="ml-[3px] border-l border-white/10 h-4" />
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/50 mt-1.5 shrink-0" />
                                            <p className="text-sm font-medium leading-tight text-slate-300">{data.dropoff}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 text-secondary flex items-center justify-center shrink-0 border border-white/5">
                                    <Calendar size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Pick Up</p>
                                    <p className="text-base font-bold text-white">
                                        {data.date?.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
                                    </p>
                                    <p className="text-sm text-secondary font-mono mt-0.5">
                                        {data.time?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 text-secondary flex items-center justify-center shrink-0 border border-white/5">
                                    <Car size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Vehicle</p>
                                    <p className="text-base font-bold text-white">{vehicle?.name || 'Any Available'}</p>
                                    <p className="text-xs text-slate-400">{data.vehicleCount} Vehicle(s)</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/10 mt-6">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Estimated</p>
                                        <p className="text-4xl font-black text-white mt-1">
                                            {pricing ? pricing.price * data.vehicleCount : 'Quote'}
                                            {pricing && <span className="text-sm text-secondary font-bold ml-1.5">SAR</span>}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex items-start gap-3">
                <ShieldCheck className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                <p className="text-xs text-emerald-800 dark:text-emerald-400 font-medium leading-relaxed">
                    <strong className="block text-emerald-600 dark:text-emerald-300">No Prepayment Required.</strong>
                    You will pay the driver directly upon arrival. Your booking is secure.
                </p>
            </div>

            <div className="pt-2">
                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full py-5 bg-gradient-to-r from-secondary to-[#B4941F] text-primary font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-secondary/20 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <Loader2 className="animate-spin" size={24} />
                    ) : (
                        <>
                            Confirm Booking Request
                            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
