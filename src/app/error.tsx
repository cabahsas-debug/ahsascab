'use client';

import { useEffect } from 'react';
import GlassButton from '@/components/ui/GlassButton';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Global Error Boundary Caught:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-navy-900 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>

            <div className="bg-navy-800/50 backdrop-blur-md border border-navy-700 p-8 rounded-2xl shadow-2xl max-w-lg w-full relative z-10">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                </div>

                <h2 className="text-2xl font-bold text-white mb-2 font-playfair">Something went wrong!</h2>
                <p className="text-gray-400 mb-6 text-sm">
                    We apologize for the inconvenience. An unexpected error occurred.
                </p>

                {/* Development Helper: Show full error details */}
                {process.env.NODE_ENV === 'development' && (
                    <div className="bg-black/30 p-4 rounded-lg text-left text-xs font-mono mb-6 overflow-auto max-h-48 border border-navy-700 text-gray-300">
                        <p className="font-bold text-red-400">{error.name}: {error.message}</p>
                        {error.digest && <p className="text-gray-500 mt-1">Digest: {error.digest}</p>}
                    </div>
                )}

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="px-6 py-2 bg-gold text-white font-bold rounded-lg hover:bg-yellow-600 transition-colors shadow-lg shadow-gold/20"
                    >
                        Try again
                    </button>
                    <GlassButton href="/" variant="outline" className="border-navy-600 text-gray-300 hover:text-white hover:bg-white/5">
                        Go Home
                    </GlassButton>
                </div>
            </div>
        </div>
    );
}
