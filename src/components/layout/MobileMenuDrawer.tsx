import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navigationLinks } from './navigation';
import GlassButton from '@/components/ui/GlassButton';

interface MobileMenuDrawerProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    mounted: boolean;
    pathname: string;
}

export default function MobileMenuDrawer({
    isMenuOpen,
    setIsMenuOpen,
    mounted,
    pathname
}: MobileMenuDrawerProps) {
    return (
        <div
            className={`fixed top-0 right-0 h-[100dvh] w-[85%] max-w-sm bg-white shadow-2xl z-40 transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) xl:hidden flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            role="dialog"
            aria-modal="true"
        >
            <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>

            <div className="relative flex items-center justify-between p-6 border-b border-secondary/5">
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                        <Image
                            src="/ahsas-logo-v2.png"
                            alt="Ahsas Cab"
                            fill
                            className="object-contain"
                            sizes="48px"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-secondary font-playfair flex items-center gap-1.5">Ahsas Cab <span className="font-sans text-primary">| إحساس الرحلات</span></span>
                        <span className="text-[0.6rem] font-bold text-primary tracking-widest uppercase">Luxury Transport</span>
                    </div>
                </Link>
            </div>

            <div className="relative flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1">
                {navigationLinks.map((link) => (
                    <div key={link.href} className="flex flex-col">
                        {link.children ? (
                            <div className="space-y-1">
                                <div className="px-4 py-3 text-sm font-bold text-secondary/40 uppercase tracking-widest">
                                    {link.label}
                                </div>
                                <div className="pl-4 border-l-2 border-secondary/5 ml-4 space-y-1">
                                    {link.children.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${mounted && pathname === child.href
                                                ? 'bg-primary/10 text-primary font-bold'
                                                : 'text-secondary/70 hover:text-secondary hover:bg-secondary/5'
                                                }`}
                                            onClick={() => setTimeout(() => setIsMenuOpen(false), 150)}
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                href={link.href}
                                className={`px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${mounted && pathname === link.href
                                    ? 'bg-primary/10 text-primary font-bold'
                                    : 'text-secondary/80 hover:text-secondary hover:bg-secondary/5'
                                    }`}
                                onClick={() => setTimeout(() => setIsMenuOpen(false), 150)}
                            >
                                {link.label}
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            <div className="relative p-6 border-t border-secondary/5 bg-secondary/5 space-y-4">
                <GlassButton
                    href="/booking"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center shadow-md btn-gold font-bold"
                    onClick={() => setTimeout(() => setIsMenuOpen(false), 150)}
                >
                    Book Your Ride
                </GlassButton>
            </div>
        </div>
    );
}
