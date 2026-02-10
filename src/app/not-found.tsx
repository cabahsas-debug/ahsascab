'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import GlassButton from '@/components/ui/GlassButton';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-navy-900 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800 via-navy-950 to-black opacity-80 pointer-events-none"></div>

            <div className="relative z-10 max-w-lg w-full">
                <h1 className="text-9xl font-bold text-gold opacity-20 font-playfair mb-4 animate-pulse-slow selection:bg-gold/30">404</h1>
                <h2 className="text-3xl font-bold text-white mb-4 font-playfair">Page Not Found</h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <GlassButton href="/" variant="primary" size="lg" className="btn-gold group shadow-lg shadow-gold/20">
                        <Home className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                        Go Home
                    </GlassButton>
                    <GlassButton href="/contact" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                        <ArrowLeft className="mr-2" size={20} />
                        Contact Support
                    </GlassButton>
                </div>
            </div>
        </div>
    );
}
