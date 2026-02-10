'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Search, FileText } from 'lucide-react';

import { Toast } from '@/components/ui/Toast';
import AdminConfirmDialog from '@/components/admin/AdminConfirmDialog';

interface BlogPost {
    id: string;
    title: string;
    category: string;
    date: string;
    author: string;
}

export default function BlogAdminPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [confirmDialog, setConfirmDialog] = useState<{
        isOpen: boolean;
        title: string;
        message: string;
        onConfirm: () => void;
    }>({ isOpen: false, title: '', message: '', onConfirm: () => { } });

    const showToast = React.useCallback((message: string, type: 'success' | 'error') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    }, []);

    const fetchPosts = React.useCallback(async () => {
        try {
            const res = await fetch('/api/blog');
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.error('Failed to fetch posts:', error);
            showToast('Failed to fetch posts', 'error');
        } finally {
            setLoading(false);
        }
    }, [showToast]);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const handleDelete = (id: string) => {
        setConfirmDialog({
            isOpen: true,
            title: 'Delete Post',
            message: 'Are you sure you want to delete this post? This action cannot be undone.',
            onConfirm: async () => {
                try {
                    const res = await fetch(`/api/blog/${id}`, {
                        method: 'DELETE',
                    });

                    if (res.ok) {
                        setPosts(posts.filter(post => post.id !== id));
                        showToast('Post deleted successfully', 'success');
                    } else {
                        throw new Error('Failed to delete post');
                    }
                } catch (error) {
                    console.error('Failed to delete post:', error);
                    showToast('Failed to delete post', 'error');
                } finally {
                    setConfirmDialog(prev => ({ ...prev, isOpen: false }));
                }
            }
        });
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8">
            {toast && <Toast message={toast.message} type={toast.type} isVisible={true} onClose={() => setToast(null)} />}

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent font-playfair">Blog Management</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your blog posts and articles</p>
                </div>
                <Link
                    href="/admin/blog/new"
                    className="flex items-center gap-2 bg-gold text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-gold/20 hover:scale-105 transition-transform"
                >
                    <Plus size={20} />
                    <span>New Post</span>
                </Link>
            </div>

            {/* Search and Filter */}
            <div className="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 p-4 rounded-xl shadow-sm">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-950/50 text-navy-900 dark:text-white focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none transition-all"
                    />
                </div>
            </div>

            {/* Posts Table */}
            <div className="bg-white/80 dark:bg-navy-900/80 backdrop-blur-md border border-gray-200 dark:border-navy-800 rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200 dark:border-navy-800 bg-gray-50/50 dark:bg-navy-950/50">
                                <th className="p-4 font-bold text-navy-900 dark:text-white uppercase tracking-wider text-xs">Title</th>
                                <th className="p-4 font-bold text-navy-900 dark:text-white uppercase tracking-wider text-xs">Category</th>
                                <th className="p-4 font-bold text-navy-900 dark:text-white uppercase tracking-wider text-xs">Author</th>
                                <th className="p-4 font-bold text-navy-900 dark:text-white uppercase tracking-wider text-xs">Date</th>
                                <th className="p-4 font-bold text-navy-900 dark:text-white uppercase tracking-wider text-xs text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-navy-800">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="p-8 text-center text-gray-500">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold mx-auto" />
                                    </td>
                                </tr>
                            ) : filteredPosts.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="p-8 text-center text-gray-500">
                                        <div className="flex flex-col items-center gap-2">
                                            <FileText size={32} className="opacity-20" />
                                            <p>No posts found</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                filteredPosts.map((post) => (
                                    <tr key={post.id} className="group hover:bg-gray-50 dark:hover:bg-navy-800/50 transition-colors">
                                        <td className="p-4 font-medium">
                                            <div className="text-navy-900 dark:text-white">{post.title}</div>
                                            <div className="text-xs text-gray-500 font-mono mt-1">{post.id}</div>
                                        </td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-gold bg-gold/10 border border-gold/20">
                                                {post.category}
                                            </span>
                                        </td>
                                        <td className="p-4 text-gray-600 dark:text-gray-300">{post.author}</td>
                                        <td className="p-4 text-gray-500">
                                            {new Date(post.date).toLocaleDateString()}
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Link
                                                    href={`/admin/blog/${post.id}`}
                                                    className="p-2 text-gold hover:bg-gold/10 rounded-lg transition-colors border border-transparent hover:border-gold/20"
                                                    title="Edit"
                                                >
                                                    <Edit size={18} />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(post.id)}
                                                    className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors border border-transparent hover:border-red-500/20"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <AdminConfirmDialog
                isOpen={confirmDialog.isOpen}
                title={confirmDialog.title}
                message={confirmDialog.message}
                onConfirm={confirmDialog.onConfirm}
                onCancel={() => setConfirmDialog(prev => ({ ...prev, isOpen: false }))}
                isDestructive
            />
        </div>
    );
}
