'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { Edit, Plus, Search, FileText, Layout } from 'lucide-react';

interface Section {
    _id: string;
    name: string;
    page: string;
    type: string;
    title: string;
    updatedAt: string;
}

export default function ContentManagementPage() {
    const [sections, setSections] = useState<Section[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchSections();
    }, []);

    const fetchSections = async () => {
        try {
            const res = await fetch('/api/sections');
            if (res.ok) {
                const data = await res.json();
                setSections(data);
            }
        } catch (error) {
            console.error('Error fetching sections:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredSections = sections.filter(section =>
        section.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        section.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const groupedSections = filteredSections.reduce((acc, section) => {
        const page = section.page || 'Other';
        if (!acc[page]) acc[page] = [];
        acc[page].push(section);
        return acc;
    }, {} as Record<string, Section[]>);

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent font-playfair">Content Management</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage website sections and text content</p>
                </div>
                <button
                    onClick={() => {
                        if (confirm('This will seed default sections if they don\'t exist. Continue?')) {
                            fetch('/api/sections/seed', { method: 'POST' })
                                .then(res => res.json())
                                .then(data => {
                                    alert(data.message);
                                    fetchSections();
                                });
                        }
                    }}
                    className="bg-navy-900 dark:bg-navy-800 hover:bg-navy-800 text-white px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-navy-900/20 transition-all hover:scale-105 font-bold text-sm"
                >
                    <Plus size={18} />
                    Seed Defaults
                </button>
            </div>

            <div className="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 p-4 rounded-xl shadow-sm">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search sections..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950/50 text-navy-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none transition-all"
                    />
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold" />
                </div>
            ) : Object.keys(groupedSections).length === 0 ? (
                <div className="text-center py-20 bg-white/50 dark:bg-navy-900/50 rounded-2xl border border-dashed border-gray-300 dark:border-navy-700">
                    <Layout className="mx-auto text-gray-400 mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-navy-900 dark:text-white">No sections found</h3>
                    <p className="text-gray-500 mt-2">Try seeding defaults to get started.</p>
                </div>
            ) : (
                <div className="space-y-8">
                    {Object.entries(groupedSections).map(([page, pageSections]) => (
                        <div key={page} className="bg-white dark:bg-navy-900 rounded-2xl shadow-sm border border-gray-200 dark:border-navy-800 overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 dark:bg-navy-800/50 border-b border-gray-200 dark:border-navy-800 flex items-center gap-2">
                                <Layout size={20} className="text-gold" />
                                <h2 className="text-lg font-bold text-navy-900 dark:text-white capitalize">{page} Page</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50/50 dark:bg-navy-950/30 text-navy-900 dark:text-white border-b border-gray-100 dark:border-navy-800">
                                        <tr>
                                            <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider">Section Name</th>
                                            <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider">Type</th>
                                            <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider">Title</th>
                                            <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider">Last Updated</th>
                                            <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-navy-800">
                                        {pageSections.map((section) => (
                                            <tr key={section._id} className="hover:bg-gray-50/80 dark:hover:bg-navy-800/30 transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-gold/10 rounded-lg text-gold">
                                                            <FileText size={16} />
                                                        </div>
                                                        <span className="font-medium text-navy-900 dark:text-white">{section.name}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-navy-100 text-navy-800 dark:bg-navy-800 dark:text-navy-200 capitalize">
                                                        {section.type}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                                    <span className="line-clamp-1">{section.title}</span>
                                                </td>
                                                <td className="px-6 py-4 text-gray-500 text-sm">
                                                    {new Date(section.updatedAt).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <Link
                                                        href={`/admin/content/${section._id}`}
                                                        className="inline-flex items-center gap-1.5 text-gold hover:text-yellow-600 font-bold text-sm transition-colors opacity-0 group-hover:opacity-100"
                                                    >
                                                        <Edit size={16} />
                                                        Edit Content
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
