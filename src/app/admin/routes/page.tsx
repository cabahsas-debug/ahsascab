'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Plus, Trash2, Search, Clock, Navigation, Edit, X } from 'lucide-react';

import { Toast } from '@/components/ui/Toast';
import AdminConfirmDialog from '@/components/admin/AdminConfirmDialog';

interface Route {
    id: string;
    origin: string;
    destination: string;
    distance: string;
    duration: string;
    category: string;
}

export default function RoutesPage() {
    const [routes, setRoutes] = useState<Route[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const [confirmDialog, setConfirmDialog] = useState<{
        isOpen: boolean;
        title: string;
        message: string;
        onConfirm: () => void;
    }>({ isOpen: false, title: '', message: '', onConfirm: () => { } });

    const [formData, setFormData] = useState({
        origin: '',
        destination: '',
        distance: '',
        duration: '',
        category: 'Intercity'
    });

    const showToast = useCallback((message: string, type: 'success' | 'error') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    }, []);

    const fetchRoutes = useCallback(async () => {
        try {
            const res = await fetch('/api/admin/routes');
            const data = await res.json();
            if (Array.isArray(data)) {
                setRoutes(data);
            } else {
                setRoutes([]);
                console.error('API returned non-array:', data);
            }
        } catch (error) {
            console.error('Failed to fetch routes:', error);
            showToast('Failed to load routes', 'error');
            setRoutes([]);
        } finally {
            setLoading(false);
        }
    }, [showToast]);

    useEffect(() => {
        fetchRoutes();
    }, [fetchRoutes]);

    const handleEdit = (route: Route) => {
        setEditingId(route.id);
        setFormData({
            origin: route.origin,
            destination: route.destination,
            distance: route.distance,
            duration: route.duration,
            category: route.category
        });
        setShowModal(true);
    };

    const handleSaveRoute = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const url = '/api/admin/routes';
            const method = editingId ? 'PUT' : 'POST';
            const body = editingId ? { ...formData, id: editingId } : formData;

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            if (res.ok) {
                setShowModal(false);
                fetchRoutes();
                resetForm();
                showToast(`Route ${editingId ? 'updated' : 'created'} successfully`, 'success');
            } else {
                throw new Error('Failed to save');
            }
        } catch (error) {
            console.error('Failed to save route:', error);
            showToast('Failed to save route', 'error');
        }
    };

    const handleDelete = (id: string) => {
        setConfirmDialog({
            isOpen: true,
            title: 'Delete Route',
            message: 'Are you sure you want to delete this route? This action cannot be undone.',
            onConfirm: async () => {
                try {
                    const res = await fetch(`/api/admin/routes?id=${id}`, { method: 'DELETE' });
                    if (res.ok) {
                        fetchRoutes();
                        showToast('Route deleted successfully', 'success');
                    } else {
                        throw new Error('Failed to delete');
                    }
                } catch (error) {
                    console.error('Failed to delete route:', error);
                    showToast('Failed to delete route', 'error');
                } finally {
                    setConfirmDialog(prev => ({ ...prev, isOpen: false }));
                }
            }
        });
    };

    const resetForm = () => {
        setEditingId(null);
        setFormData({
            origin: '',
            destination: '',
            distance: '',
            duration: '',
            category: 'Intercity'
        });
    };

    const filteredRoutes = routes.filter(r => {
        const matchesSearch =
            r.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.destination.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'All' || r.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = ['All', 'Intercity', 'Airport', 'Airport Arrival', 'Airport Departure', 'Ziarat'];
    const formCategories = ['Intercity', 'Airport Arrival', 'Airport Departure', 'Ziarat'];

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8">
            {toast && <Toast message={toast.message} type={toast.type} isVisible={true} onClose={() => setToast(null)} />}

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent font-playfair">Route Management</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage transport routes, distances, and durations</p>
                </div>
                <button
                    onClick={() => { resetForm(); setShowModal(true); }}
                    className="flex items-center gap-2 bg-gold text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-gold/20 hover:scale-105 transition-transform"
                >
                    <Plus size={20} />
                    Add Route
                </button>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 p-4 rounded-xl shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search origin or destination..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950/50 text-navy-900 dark:text-white focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="px-4 py-2 rounded-lg border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950/50 text-navy-900 dark:text-white focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none cursor-pointer"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Routes Table/Grid */}
            <div className="bg-white/80 dark:bg-navy-900/80 backdrop-blur-md border border-gray-200 dark:border-navy-800 rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 dark:bg-navy-950/50 border-b border-gray-200 dark:border-navy-800">
                                <th className="p-4 font-bold text-navy-900 dark:text-white uppercase tracking-wider text-xs">Origin</th>
                                <th className="p-4 font-bold text-navy-900 dark:text-white uppercase tracking-wider text-xs">Destination</th>
                                <th className="p-4 font-bold text-navy-900 dark:text-white uppercase tracking-wider text-xs">Distance</th>
                                <th className="p-4 font-bold text-navy-900 dark:text-white uppercase tracking-wider text-xs">Duration</th>
                                <th className="p-4 font-bold text-navy-900 dark:text-white uppercase tracking-wider text-xs">Category</th>
                                <th className="p-4 font-bold text-navy-900 dark:text-white uppercase tracking-wider text-xs text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-navy-800">
                            <AnimatePresence mode='popLayout'>
                                {filteredRoutes.map((route) => (
                                    <motion.tr
                                        key={route.id}
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="group hover:bg-gray-50 dark:hover:bg-navy-800/50 transition-colors"
                                    >
                                        <td className="p-4 font-medium">
                                            <div className="flex items-center gap-2 text-navy-900 dark:text-white">
                                                <div className="w-2 h-2 rounded-full bg-gold" />
                                                {route.origin}
                                            </div>
                                        </td>
                                        <td className="p-4 font-medium">
                                            <div className="flex items-center gap-2 text-navy-900 dark:text-white">
                                                <MapPin size={16} className="text-gray-400" />
                                                {route.destination}
                                            </div>
                                        </td>
                                        <td className="p-4 text-gray-600 dark:text-gray-300">
                                            <div className="flex items-center gap-2">
                                                <Navigation size={16} className="text-gray-400" />
                                                {route.distance}
                                            </div>
                                        </td>
                                        <td className="p-4 text-gray-600 dark:text-gray-300">
                                            <div className="flex items-center gap-2">
                                                <Clock size={16} className="text-gray-400" />
                                                {route.duration}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${route.category?.includes('Airport')
                                                ? 'bg-blue-500/10 text-blue-600 border-blue-500/20'
                                                : route.category === 'Ziarat'
                                                    ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
                                                    : 'bg-gold/10 text-gold border-gold/20'
                                                }`}>
                                                {route.category}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => handleEdit(route)}
                                                    className="p-2 text-gold hover:bg-gold/10 rounded-lg transition-colors border border-transparent hover:border-gold/20"
                                                    title="Edit"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(route.id)}
                                                    className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors border border-transparent hover:border-red-500/20"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </AnimatePresence>
                            {filteredRoutes.length === 0 && !loading && (
                                <tr>
                                    <td colSpan={6} className="text-center py-12 text-gray-500">
                                        <div className="flex flex-col items-center gap-2">
                                            <Search size={32} className="opacity-20" />
                                            <p>No routes found matching your criteria</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add/Edit Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 rounded-2xl p-6 w-full max-w-md shadow-2xl relative"
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-navy-900 dark:text-white">
                                {editingId ? <Edit className="text-gold" /> : <Plus className="text-gold" />}
                                {editingId ? 'Edit Route' : 'Add New Route'}
                            </h2>

                            <form onSubmit={handleSaveRoute} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-navy-900 dark:text-white ml-1">Origin</label>
                                        <input
                                            required
                                            className="w-full p-2.5 rounded-lg border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950/50 text-navy-900 dark:text-white focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none transition-all"
                                            value={formData.origin}
                                            onChange={e => setFormData({ ...formData, origin: e.target.value })}
                                            placeholder="e.g. Makkah"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-navy-900 dark:text-white ml-1">Destination</label>
                                        <input
                                            required
                                            className="w-full p-2.5 rounded-lg border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950/50 text-navy-900 dark:text-white focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none transition-all"
                                            value={formData.destination}
                                            onChange={e => setFormData({ ...formData, destination: e.target.value })}
                                            placeholder="e.g. Madinah"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-navy-900 dark:text-white ml-1">Distance</label>
                                        <input
                                            className="w-full p-2.5 rounded-lg border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950/50 text-navy-900 dark:text-white focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none transition-all"
                                            value={formData.distance}
                                            onChange={e => setFormData({ ...formData, distance: e.target.value })}
                                            placeholder="e.g. 450 km"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-navy-900 dark:text-white ml-1">Duration</label>
                                        <input
                                            className="w-full p-2.5 rounded-lg border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950/50 text-navy-900 dark:text-white focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none transition-all"
                                            value={formData.duration}
                                            onChange={e => setFormData({ ...formData, duration: e.target.value })}
                                            placeholder="e.g. 4.5 hours"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-navy-900 dark:text-white ml-1">Category</label>
                                    <select
                                        className="w-full p-2.5 rounded-lg border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950/50 text-navy-900 dark:text-white focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none transition-all cursor-pointer"
                                        value={formData.category}
                                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                                    >
                                        <option value="">Select Category</option>
                                        {formCategories.map(c => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-navy-800">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-navy-900 dark:hover:text-white transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-gold text-white rounded-lg text-sm font-bold hover:bg-yellow-600 shadow-lg shadow-gold/20 hover:scale-105 transition-all"
                                    >
                                        {editingId ? 'Save Changes' : 'Create Route'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <AdminConfirmDialog
                isOpen={confirmDialog.isOpen}
                title={confirmDialog.title}
                message={confirmDialog.message}
                onConfirm={confirmDialog.onConfirm}
                onCancel={() => setConfirmDialog(prev => ({ ...prev, isOpen: false }))}
                isDestructive
            />
        </div >
    );
}
