'use client';

import { useState } from 'react';
import styles from '@/app/contact/page.module.css';
import GlassButton from '@/components/ui/GlassButton';
import { User, Mail, MessageSquare, Send } from 'lucide-react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [emailError, setEmailError] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setEmailError('');

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;

        // Strict Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address (e.g., user@example.com)');
            return;
        }

        setStatus('submitting');
        const data = {
            name: formData.get('name'),
            email: email,
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 flex items-center justify-between uppercase tracking-wider" htmlFor="name">
                    <span>Full Name</span>
                    <span className="text-xs text-secondary font-arabic">الاسم الكامل</span>
                </label>
                <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors h-5 w-5" />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl pl-12 pr-4 py-4 focus:ring-4 focus:ring-secondary/10 focus:border-secondary outline-none transition-all placeholder:text-slate-500 text-white font-medium"
                        placeholder="e.g. Abdullah Ahmed"
                        required
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 flex items-center justify-between uppercase tracking-wider" htmlFor="email">
                    <span>Email Address</span>
                    <span className="text-xs text-secondary font-arabic">البريد الإلكتروني</span>
                </label>
                <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors h-5 w-5" />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`w-full bg-slate-800/50 border rounded-xl pl-12 pr-4 py-4 outline-none transition-all placeholder:text-slate-500 text-white font-medium ${emailError ? 'border-red-500 focus:ring-red-500/50' : 'border-slate-700 focus:ring-4 focus:ring-secondary/10 focus:border-secondary'}`}
                        placeholder="your@email.com"
                        required
                        onChange={() => setEmailError('')}
                    />
                </div>
                {emailError && <p className="text-red-500 text-xs mt-1 animate-pulse bg-red-500/10 p-2 rounded-lg border border-red-500/20">{emailError}</p>}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 flex items-center justify-between uppercase tracking-wider" htmlFor="message">
                    <span>Message</span>
                    <span className="text-xs text-secondary font-arabic">الرسالة</span>
                </label>
                <div className="relative group">
                    <MessageSquare className="absolute left-4 top-5 text-slate-400 group-focus-within:text-secondary transition-colors h-5 w-5" />
                    <textarea
                        id="message"
                        name="message"
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl pl-12 pr-4 py-4 h-32 resize-none focus:ring-4 focus:ring-secondary/10 focus:border-secondary outline-none transition-all placeholder:text-slate-500 text-white font-medium"
                        placeholder="How can we help you? (كيف يمكننا مساعدتك؟)"
                        required
                    ></textarea>
                </div>
            </div>

            <GlassButton
                type="submit"
                variant="primary"
                size="lg"
                className="w-full relative overflow-hidden group !bg-amber-500 hover:!bg-amber-600 text-white"
                disabled={status === 'submitting'}
            >
                <div className="relative z-10 flex items-center justify-center gap-2">
                    {status === 'submitting' ? (
                        <>
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            <span>Send Message (ارسال)</span>
                        </>
                    )}
                </div>
            </GlassButton>

            {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 dark:text-green-400 text-center text-sm animate-in fade-in slide-in-from-bottom-2">
                    Message sent successfully! We will contact you soon.
                    <br />
                    <span className="font-arabic text-xs opacity-75">تم الإرسال بنجاح! سنتواصل معك قريباً.</span>
                </div>
            )}

            {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400 text-center text-sm animate-in fade-in slide-in-from-bottom-2">
                    Failed to send message. Please try again.
                    <br />
                    <span className="font-arabic text-xs opacity-75">فشل الإرسال. يرجى المحاولة مرة أخرى.</span>
                </div>
            )}
        </form>
    );
}
