'use client';

import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function AnimatedBackground() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    // On mobile, just render a static gradient or very simple background to prevent layout thrashing
    // or significantly reduce the number of animated elements and their complexity
    if (isMobile) {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl opacity-30" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl opacity-20" />
            </div>
        );
    }

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Top Right Golden Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-3xl"
            />

            {/* Bottom Left Blue Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl"
            />

            {/* Floating Shapes */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-tr from-amber-500/5 to-transparent rounded-full blur-2xl"
            />
        </div>
    );
}
