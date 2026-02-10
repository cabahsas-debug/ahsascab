import { motion } from 'framer-motion';
import { Check, Clock, MapPin, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

// Helper icon component for arrows
function ArrowUpRightIcon({ size = 24 }: { size?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
    );
}

interface RecentBookingsTableProps {
    bookings: any[];
    onStatusChange: (id: string, status: string) => void;
}

export default function RecentBookingsTable({ bookings, onStatusChange }: RecentBookingsTableProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-navy-900/50 backdrop-blur-xl border border-gray-200 dark:border-navy-800 rounded-2xl overflow-hidden shadow-sm shadow-gray-200/50 dark:shadow-xl"
        >
            <div className="p-6 border-b border-gray-200 dark:border-navy-800 flex justify-between items-center bg-gray-50/50 dark:bg-navy-900/50">
                <h3 className="text-xl font-bold text-navy-900 dark:text-white flex items-center gap-2 font-playfair">
                    <Clock size={20} className="text-blue-500" />
                    Recent Bookings
                </h3>
                <Link href="/admin/bookings" className="text-sm font-semibold text-gold hover:text-gold/80 transition-colors flex items-center gap-1">
                    View All <ArrowUpRightIcon size={14} />
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-navy-950/50 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200 dark:border-navy-800">
                            <th className="p-4 font-semibold">Customer</th>
                            <th className="p-4 font-semibold">Route</th>
                            <th className="p-4 font-semibold">Date & Time</th>
                            <th className="p-4 font-semibold">Status</th>
                            <th className="p-4 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-navy-800">
                        {bookings.map((booking) => (
                            <tr key={booking.id} className="group hover:bg-gray-50 dark:hover:bg-navy-800/50 transition-colors">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-navy-800 border border-gray-200 dark:border-navy-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
                                            {booking.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-navy-900 dark:text-white text-sm">{booking.name}</div>
                                            <div className="text-xs text-gray-500">{booking.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex flex-col gap-1">
                                        <div className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
                                            <MapPin size={10} className="text-emerald-500" /> {booking.pickup}
                                        </div>
                                        <div className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
                                            <MapPin size={10} className="text-rose-500" /> {booking.dropoff}
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="text-sm text-gray-700 dark:text-gray-300 font-mono">
                                        {new Date(booking.date).toLocaleDateString()}
                                    </div>
                                    <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                                        <Clock size={10} /> {booking.time}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className={`
                                        inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                                        ${booking.status === 'confirmed' ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20' :
                                            booking.status === 'cancelled' ? 'bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20' :
                                                'bg-gold/10 dark:bg-gold/10 text-gold dark:text-gold border border-gold/20 dark:border-gold/20'}
                                    `}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${booking.status === 'confirmed' ? 'bg-emerald-500' :
                                            booking.status === 'cancelled' ? 'bg-red-500' :
                                                'bg-gold'
                                            }`} />
                                        {booking.status || 'Pending'}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    {booking.status === 'pending' && (
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => onStatusChange(booking.id, 'confirmed')}
                                                className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 transition-all"
                                                title="Confirm"
                                            >
                                                <Check size={16} />
                                            </button>
                                            <button
                                                onClick={() => onStatusChange(booking.id, 'cancelled')}
                                                className="p-2 rounded-lg bg-red-50 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 transition-all"
                                                title="Cancel"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {bookings.length === 0 && (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-gray-500">
                                    No recent bookings found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
}
