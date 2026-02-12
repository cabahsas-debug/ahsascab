'use client';

import React, { useState } from 'react';
import { X, Download, CheckCircle, Loader2 } from 'lucide-react';
import { Resource } from '@/data/resources';

interface LeadGenModalProps {
    resource: Resource;
    isOpen: boolean;
    onClose: () => void;
}

export default function LeadGenModal({ resource, isOpen, onClose }: LeadGenModalProps) {
    const [step, setStep] = useState<'form' | 'success'>('form');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        email: ''
    });

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Todo: Integrate with actual backend/CRM
        console.log('Lead Captured:', { resource: resource.title, ...formData });

        setIsSubmitting(false);
        setStep('success');

        // Trigger download after short delay
        setTimeout(() => {
            // Create a fake download link for now
            const link = document.createElement('a');
            link.href = resource.downloadUrl;
            link.download = resource.title;
            // link.click(); // Commented out until actual files exist
            console.log('Downloading file...', resource.downloadUrl);
        }, 1000);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
            <div
                className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl shadow-2xl border border-gold/20 overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-navy dark:hover:text-white transition-colors z-10"
                >
                    <X size={20} />
                </button>

                {step === 'form' ? (
                    <div className="p-8">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                                <Download size={32} />
                            </div>
                            <h3 className="text-2xl font-bold font-playfair text-navy dark:text-white mb-2">
                                Download Free Guide
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Enter your details to receive the <b>{resource.title}</b> immediately.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-navy dark:text-gold uppercase tracking-wider mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                                    placeholder="e.g. Abdullah Khan"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-navy dark:text-gold uppercase tracking-wider mb-2">
                                    WhatsApp Number
                                </label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                                    placeholder="+966 50 123 4567"
                                    value={formData.whatsapp}
                                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-navy dark:text-gold uppercase tracking-wider mb-2">
                                    Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gold text-navy font-bold rounded-xl hover:bg-white border-2 border-transparent hover:border-gold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mt-6 uppercase tracking-widest text-sm"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Download Now
                                        <Download size={18} />
                                    </>
                                )}
                            </button>
                        </form>

                        <p className="text-[10px] text-center text-slate-400 mt-4">
                            We respect your privacy. Your info is safe with us.
                        </p>
                    </div>
                ) : (
                    <div className="p-12 text-center bg-emerald-50 dark:bg-emerald-900/20 h-full flex flex-col items-center justify-center min-h-[400px]">
                        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 animate-bounce">
                            <CheckCircle size={40} />
                        </div>
                        <h3 className="text-2xl font-bold font-playfair text-navy dark:text-white mb-2">
                            Download Started!
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-8">
                            Your guide is being downloaded. Check your downloads folder.
                        </p>
                        <button
                            onClick={onClose}
                            className="px-8 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            Close Window
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
