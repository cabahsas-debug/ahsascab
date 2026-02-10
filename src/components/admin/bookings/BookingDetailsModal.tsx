'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, User, Mail, Phone, Briefcase, Car, Check, XCircle, CheckCircle2, CarFront } from 'lucide-react';
import { format } from 'date-fns';

import { Booking } from '@/lib/validations';

interface BookingWithDetails extends Omit<Booking, 'driverStatus'> {
    id: string; // Ensure id is required here since we use it
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    vehicleCount?: number;
    createdAt?: string;


    // Rating
    rating?: number;
    review?: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

interface BookingDetailsModalProps {
    booking: BookingWithDetails | null;
    isOpen: boolean;
    onClose: () => void;
    onStatusUpdate: (id: string, status: BookingWithDetails['status']) => void;
    onUpdate?: (id: string, updates: Partial<BookingWithDetails>) => void; // Generic update callback
}

export default function BookingDetailsModal({ booking, isOpen, onClose, onStatusUpdate, onUpdate }: BookingDetailsModalProps) {

    if (!isOpen || !booking) return null;

    // Helper to format date for display
    const formattedDate = booking.date ? format(new Date(booking.date), 'EEEE, MMMM do, yyyy') : 'N/A';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex justify-between items-start p-6 border-b border-gray-100 dark:border-slate-800 sticky top-0 bg-white dark:bg-slate-900 z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-playfair">Booking Details</h2>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide border ${getStatusBadge(booking.status)}`}>
                                {booking.status}
                            </span>
                        </div>
                        <p className="text-sm text-gold font-mono">ID: #{booking.id}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 space-y-8">

                    {/* Journey Section */}
                    <section>
                        <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <MapPin size={14} className="text-gold" /> Journey Information
                        </h3>
                        <div className="bg-gray-50 dark:bg-slate-950/50 rounded-xl p-5 space-y-4 border border-gray-100 dark:border-slate-800">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <label className="text-xs text-gray-500 font-bold uppercase mb-1 block">Pickup Location</label>
                                    <p className="text-slate-900 dark:text-white font-medium">{booking.pickup}</p>
                                </div>
                                <div className="hidden md:block w-px bg-gray-200 dark:bg-slate-800"></div>
                                <div className="flex-1">
                                    <label className="text-xs text-gray-500 font-bold uppercase mb-1 block">Dropoff Location</label>
                                    <p className="text-slate-900 dark:text-white font-medium">{booking.dropoff}</p>
                                </div>
                            </div>
                            <div className="border-t border-gray-200 dark:border-slate-800 pt-4 flex gap-6">
                                <div>
                                    <label className="text-xs text-gray-500 font-bold uppercase mb-1 block">Date</label>
                                    <div className="flex items-center gap-2 text-slate-900 dark:text-white font-medium">
                                        <Calendar size={16} className="text-gold" />
                                        {formattedDate}
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 font-bold uppercase mb-1 block">Time</label>
                                    <p className="text-slate-900 dark:text-white font-medium">{booking.time}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Customer & Vehicle Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Customer Info */}
                        <section>
                            <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <User size={14} className="text-gold" /> Customer Details
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-slate-900 dark:text-white font-bold text-lg">{booking.name}</p>
                                    {booking.country && <p className="text-sm text-gray-500">{booking.country}</p>}
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <Mail size={16} className="text-slate-400" />
                                        <a href={`mailto:${booking.email}`} className="hover:text-gold hover:underline transition-colors">{booking.email}</a>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <Phone size={16} className="text-slate-400" />
                                        <a href={`tel:${booking.phone}`} className="hover:text-gold hover:underline transition-colors">{booking.phone}</a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Vehicle Info */}
                        <section>
                            <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Car size={14} className="text-gold" /> Vehicle & Requirements
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-lg">
                                        {booking.vehicle || 'Not selected'}
                                        {booking.vehicleCount && booking.vehicleCount > 1 && <span className="text-gold ml-2 text-sm">x{booking.vehicleCount}</span>}
                                    </p>
                                    {booking.selectedVehicles && booking.selectedVehicles.length > 0 && (
                                        <div className="text-xs text-gray-500 mt-1 pl-2 border-l-2 border-gold/50">
                                            {booking.selectedVehicles.map((v, i) => (
                                                <div key={i}>{v.name || 'Vehicle'} (x{v.quantity})</div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="flex items-center gap-1.5"><User size={14} /> {booking.passengers || 0} pax</span>
                                    <span className="flex items-center gap-1.5"><Briefcase size={14} /> {booking.luggage || 0} bags</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Rating & Review */}
                    {booking.rating && (
                        <section className="bg-gold/5 dark:bg-gold/10 p-5 rounded-xl border border-gold/20">
                            <h3 className="text-xs font-bold text-gold mb-3 uppercase tracking-widest flex items-center gap-2">
                                <span className="text-lg">⭐</span> Customer Feedback
                            </h3>
                            <div className="flex items-center gap-1 mb-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        className={`w-5 h-5 ${star <= (booking.rating || 0) ? 'text-gold fill-gold' : 'text-gray-300 dark:text-gray-700'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                ))}
                                <span className="ml-2 font-bold text-slate-900 dark:text-white">
                                    {booking.rating}/5
                                </span>
                            </div>
                            {booking.review && (
                                <p className="text-slate-800 dark:text-gray-300 italic">
                                    "{booking.review}"
                                </p>
                            )}
                        </section>
                    )}

                    {(booking.notes || booking.flightNumber || booking.arrivalDate) && (
                        <section className="bg-gray-50 dark:bg-slate-950/50 p-4 rounded-xl border border-gray-100 dark:border-slate-800">
                            <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-widest">Additional Information</h3>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                {booking.flightNumber && (
                                    <div>
                                        <span className="text-gray-500 font-bold uppercase text-xs block mb-1">Flight Number</span>
                                        <span className="text-slate-900 dark:text-white font-medium">{booking.flightNumber}</span>
                                    </div>
                                )}
                                {booking.arrivalDate && (
                                    <div>
                                        <span className="text-gray-500 font-bold uppercase text-xs block mb-1">Arrival Date</span>
                                        <span className="text-slate-900 dark:text-white font-medium">{booking.arrivalDate}</span>
                                    </div>
                                )}
                                {booking.notes && (
                                    <div className="md:col-span-2">
                                        <span className="text-gray-500 font-bold uppercase text-xs block mb-1">Customer Notes</span>
                                        <p className="text-slate-900 dark:text-white mt-1 italic">"{booking.notes}"</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-950/50 flex flex-wrap justify-between items-center gap-4 sticky bottom-0">
                    <button
                        onClick={onClose}
                        className="px-5 py-2.5 text-sm font-bold text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        Close
                    </button>

                    <div className="flex flex-wrap gap-2">
                        {booking.status === 'pending' && (
                            <>
                                <button
                                    onClick={() => onStatusUpdate(booking.id, 'cancelled')}
                                    className="px-5 py-2.5 text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg flex items-center gap-2 transition-colors"
                                >
                                    <XCircle size={18} /> Reject
                                </button>
                                <button
                                    onClick={() => onStatusUpdate(booking.id, 'confirmed')}
                                    className="px-5 py-2.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/20 rounded-lg flex items-center gap-2 transition-colors"
                                >
                                    <Check size={18} /> Confirm Booking
                                </button>
                            </>
                        )}

                        {booking.status === 'confirmed' && (
                            <>
                                <button
                                    onClick={() => onStatusUpdate(booking.id, 'cancelled')}
                                    className="px-5 py-2.5 text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg flex items-center gap-2 transition-colors"
                                >
                                    <XCircle size={18} /> Cancel
                                </button>
                                <button
                                    onClick={() => onStatusUpdate(booking.id, 'completed')}
                                    className="px-5 py-2.5 text-sm font-bold text-white bg-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/20 rounded-lg flex items-center gap-2 transition-colors"
                                >
                                    <CheckCircle2 size={18} /> Mark Complete
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function getStatusBadge(status: string) {
    switch (status) {
        case 'confirmed': return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
        case 'pending': return 'bg-gold/10 text-gold border-gold/20';
        case 'completed': return 'bg-secondary/10 text-secondary dark:text-gray-300 border-secondary/20';
        case 'cancelled': return 'bg-red-500/10 text-red-600 border-red-500/20';
        default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
}
