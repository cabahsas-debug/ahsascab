'use client';

import React, { useState } from 'react';
import { Search, MapPin, Calendar, User, Phone, CheckCircle, Clock, XCircle, AlertCircle, ArrowRight, Car, Shield, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/common/FadeIn';

export default function TrackBookingPage() {
    const [formData, setFormData] = useState({ reference: '', email: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [booking, setBooking] = useState<any>(null);

    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchBookingDetails = async (isBackground = false) => {
        if (!isBackground) {
            setLoading(true);
            setBooking(null);
        } else {
            setIsRefreshing(true);
        }
        setError('');

        try {
            const res = await fetch('/api/bookings/track', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (data.success) {
                setBooking(data.booking);
            } else {
                if (!isBackground) setError(data.message || 'Booking not found');
            }
        } catch (err) {
            if (!isBackground) setError('Failed to track booking. Please try again.');
        } finally {
            setLoading(false);
            setIsRefreshing(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetchBookingDetails(false);
    };

    // Real-time updates (Pusher logic remains same, just ensure it's robust)
    React.useEffect(() => {
        if (!booking || !booking.id) return;

        const initPusher = async () => {
            const Pusher = (await import('pusher-js')).default;
            const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
                cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
            });

            const channel = pusher.subscribe(`booking-channel-${booking.id}`);
            channel.bind('status-updated', (data: any) => {
                console.log('Status update received:', data);
                fetchBookingDetails(true);
            });

            return () => {
                pusher.unsubscribe(`booking-channel-${booking.id}`);
                pusher.disconnect();
            };
        };

        const cleanupPromise = initPusher();

        return () => {
            cleanupPromise.then(cleanup => cleanup && cleanup());
        };
    }, [booking?.id]);

    const getStatusStep = (status: string) => {
        switch (status.toLowerCase()) {
            case 'pending': return 1;
            case 'confirmed': return 2;
            case 'driver_assigned': return 3;
            case 'in_progress': return 3; // Driver on way/trip started
            case 'completed': return 4;
            case 'cancelled': return -1;
            default: return 1;
        }
    };

    const currentStep = booking ? getStatusStep(booking.status) : 0;

    const timelineSteps = [
        { id: 1, label: 'Booking Received', icon: Clock },
        { id: 2, label: 'Confirmed', icon: CheckCircle },
        { id: 3, label: 'Driver Assigned', icon: Car },
        { id: 4, label: 'Journey Completed', icon: Star },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-navy-950 flex flex-col relative overflow-hidden font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--gold) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <main className="flex-1 container mx-auto px-4 py-32 flex flex-col items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl w-full"
                >
                    <div className="text-center mb-12">
                        <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-2 block">Guest Portal</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6 font-playfair">Track Your Journey</h1>
                        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto font-light">
                            Enter your booking details below to view real-time status, driver information, and trip updates.
                        </p>
                    </div>

                    <div className="bg-white/80 dark:bg-navy-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl shadow-gray-200/50 dark:shadow-black/50 border border-white/20 dark:border-navy-800 relative overflow-hidden">
                        {/* Decorative Glow */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Booking Reference</label>
                                    <div className="relative group">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gold transition-colors" size={20} />
                                        <input
                                            type="text"
                                            placeholder="e.g. BOOK-12345"
                                            className="w-full bg-gray-50/50 dark:bg-navy-950/50 rounded-xl pl-12 pr-4 py-4 text-navy-900 dark:text-white outline-none border border-gray-200 dark:border-navy-800 focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all"
                                            value={formData.reference}
                                            onChange={e => setFormData({ ...formData, reference: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gold transition-colors" size={20} />
                                        <input
                                            type="email"
                                            placeholder="name@example.com"
                                            className="w-full bg-gray-50/50 dark:bg-navy-950/50 rounded-xl pl-12 pr-4 py-4 text-navy-900 dark:text-white outline-none border border-gray-200 dark:border-navy-800 focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-navy-900 dark:bg-white text-white dark:text-navy-900 font-bold py-4 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg"
                            >
                                {loading ? (
                                    <span className="w-6 h-6 border-2 border-white/30 dark:border-navy-900/30 border-t-white dark:border-t-navy-900 rounded-full animate-spin" />
                                ) : (
                                    <>Access Booking Portal <ArrowRight size={20} /></>
                                )}
                            </button>
                        </form>

                        <AnimatePresence mode='wait'>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                    animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                    className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400 overflow-hidden"
                                >
                                    <AlertCircle size={20} className="shrink-0" />
                                    <p className="text-sm font-medium">{error}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <AnimatePresence>
                        {booking && (
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", bounce: 0.3 }}
                                className="mt-8 space-y-6"
                            >
                                {/* Results Card */}
                                <div className="bg-white dark:bg-navy-900 rounded-3xl shadow-xl border border-gray-100 dark:border-navy-800 overflow-hidden">
                                    {/* Header Band */}
                                    <div className="bg-navy-900 text-white p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="text-2xl font-playfair font-bold text-gold">
                                                    {booking.status === 'cancelled' ? 'Booking Cancelled' : 'Booking Active'}
                                                </h3>
                                                {booking.status === 'confirmed' && <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase border border-emerald-500/20">Confirmed</span>}
                                                {booking.status === 'pending' && <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-bold uppercase border border-amber-500/20">Pending</span>}
                                            </div>
                                            <p className="text-gray-400 text-sm">Ref: <span className="font-mono text-white">{booking.id}</span></p>
                                        </div>
                                        <div className="text-right hidden md:block">
                                            <div className="text-sm text-gray-400 uppercase tracking-wider">Scheduled For</div>
                                            <div className="text-lg font-bold">{new Date(booking.date).toLocaleDateString()} at {booking.time}</div>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        {/* Status Timeline */}
                                        {booking.status !== 'cancelled' && (
                                            <div className="mb-12 relative">
                                                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 dark:bg-navy-800 -translate-y-1/2 z-0" />
                                                <div className="relative z-10 flex justify-between">
                                                    {timelineSteps.map((step) => {
                                                        const isCompleted = currentStep >= step.id;
                                                        const isCurrent = currentStep === step.id;
                                                        return (
                                                            <div key={step.id} className="flex flex-col items-center gap-3">
                                                                <div className={`
                                                                    w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all duration-500
                                                                    ${isCompleted
                                                                        ? 'bg-gold border-gold text-navy-900 scale-110'
                                                                        : 'bg-white dark:bg-navy-900 border-gray-200 dark:border-navy-700 text-gray-300'}
                                                                `}>
                                                                    <step.icon size={isCompleted ? 20 : 16} />
                                                                </div>
                                                                <span className={`text-xs font-bold uppercase tracking-wider ${isCompleted ? 'text-navy-900 dark:text-white' : 'text-gray-400'}`}>
                                                                    {step.label}
                                                                </span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        <div className="grid md:grid-cols-2 gap-12">
                                            {/* Journey Details */}
                                            <div className="space-y-6">
                                                <h4 className="text-lg font-bold text-navy-900 dark:text-white border-b border-gray-100 dark:border-navy-800 pb-3 mb-6">Journey Details</h4>

                                                <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-gold before:to-gray-200 dark:before:to-navy-800">
                                                    <div className="relative">
                                                        <div className="absolute -left-[32px] top-1 w-6 h-6 rounded-full border-4 border-white dark:border-navy-900 bg-gold shadow-lg" />
                                                        <div>
                                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Pickup Location</p>
                                                            <p className="font-bold text-navy-900 dark:text-white text-lg leading-tight">{booking.pickup}</p>
                                                        </div>
                                                    </div>
                                                    <div className="relative">
                                                        <div className="absolute -left-[32px] top-1 w-6 h-6 rounded-full border-4 border-white dark:border-navy-900 bg-navy-900 dark:bg-white shadow-lg" />
                                                        <div>
                                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Drop-off Destination</p>
                                                            <p className="font-bold text-navy-900 dark:text-white text-lg leading-tight">{booking.dropoff}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-gray-50 dark:bg-navy-800/50 rounded-2xl p-4 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-white dark:bg-navy-800 flex items-center justify-center text-gold shadow-sm">
                                                            <Clock size={20} />
                                                        </div>
                                                        <div>
                                                            <p className="text-xs text-gray-500">Pickup Time</p>
                                                            <p className="font-bold text-navy-900 dark:text-white">{booking.time}</p>
                                                        </div>
                                                    </div>
                                                    <div className="w-px h-8 bg-gray-200 dark:bg-navy-700" />
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-white dark:bg-navy-800 flex items-center justify-center text-gold shadow-sm">
                                                            <User size={20} />
                                                        </div>
                                                        <div>
                                                            <p className="text-xs text-gray-500">Passenger</p>
                                                            <p className="font-bold text-navy-900 dark:text-white">{booking.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Vehicle & Payment */}
                                            <div className="space-y-6">
                                                <h4 className="text-lg font-bold text-navy-900 dark:text-white border-b border-gray-100 dark:border-navy-800 pb-3 mb-6">Vehicle & Service</h4>

                                                <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white rounded-2xl p-6 relative overflow-hidden group">
                                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                                                    <div className="relative z-10 flex items-start justify-between">
                                                        <div>
                                                            <p className="text-gold font-bold text-sm mb-1 uppercase tracking-wider">Premium Class</p>
                                                            <h3 className="text-2xl font-playfair font-bold mb-4">{booking.vehicle}</h3>

                                                            <ul className="space-y-2 text-sm text-gray-300">
                                                                <li className="flex items-center gap-2"><User size={14} /> {booking.passengers} Passengers</li>
                                                                <li className="flex items-center gap-2"><Car size={14} /> Air Conditioned</li>
                                                                <li className="flex items-center gap-2"><Shield size={14} /> Insurance Included</li>
                                                            </ul>
                                                        </div>
                                                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                                                            <Car size={32} className="text-white" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="border border-gray-100 dark:border-navy-800 rounded-2xl p-6">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-gray-500 dark:text-gray-400">Total Price</span>
                                                        <span className="text-xs font-bold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded">Pay on Arrival</span>
                                                    </div>
                                                    <div className="text-3xl font-bold text-navy-900 dark:text-white font-playfair">
                                                        <span className="text-lg text-gray-400 font-sans font-normal mr-1">SAR</span>
                                                        {booking.price?.toFixed(2) || '---'}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </main>
        </div>
    );
}
