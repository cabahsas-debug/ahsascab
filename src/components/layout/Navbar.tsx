'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Menu, X, ChevronDown } from 'lucide-react';

import { useMobileMenu } from '@/context/MobileMenuContext';
import GlassButton from '@/components/ui/GlassButton';

export default function Navbar() {
    const pathname = usePathname();
    // Force rebuild
    const { isMenuOpen, setIsMenuOpen, toggleMenu } = useMobileMenu();
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Auto-close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname, setIsMenuOpen]);

    const links = [
        { href: '/', label: 'Home' },
        {
            href: '/routes',
            label: 'Routes',
            children: [
                { href: '/services/makkah-madinah-taxi', label: 'Makkah ⇄ Madinah' },
                { href: '/services/jeddah-airport-transfer', label: 'Jeddah Airport ⇄ Makkah' },
                { href: '/services/madinah-airport-transfer', label: 'Madinah Airport ⇄ Hotel' },
                { href: '/services/intercity-transfer', label: 'Jeddah Airport ⇄ Madinah' },
                { href: '/services/ziyarat-tours', label: 'Ziyarat Tours (City Tours)' },
            ]
        },
        {
            href: '/services',
            label: 'Services',
            children: [
                { href: '/services/ramadan-transport', label: 'Ramadan 2026 Transport' },
                { href: '/services/airport-transfers', label: 'Airport Transfer (General)' },
                { href: '/services/intercity-transfer', label: 'Intercity Transfer' },
                { href: '/services/hotel-transfers', label: 'Hotel Transfer' },
                { href: '/track-booking', label: 'Track Booking' },
            ]
        },
        {
            href: '/fleet',
            label: 'Fleet',
            children: [
                { href: '/fleet/gmc-yukon-at4', label: 'GMC Yukon XL' },
                { href: '/fleet/hyundai-staria', label: 'Hyundai Staria' },
                { href: '/fleet/hyundai-starex', label: 'Hyundai H1 Starex' },
                { href: '/fleet/toyota-hiace', label: 'Toyota Hiace' },
                { href: '/fleet/toyota-camry', label: 'Toyota Camry' },
            ]
        },
        {
            href: '/about',
            label: 'About Us',
            children: [
                { href: '/about', label: 'Company Profile' },
            ]
        },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact us' },
    ];

    // Routes that have a light background physically at the top (no hero image)
    const lightRoutes = ['/booking', '/track-booking', '/contact'];
    const isLightPage = lightRoutes.includes(pathname);
    const showDarkNav = scrolled || isLightPage || isMenuOpen;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${mounted && showDarkNav
                ? 'bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg py-2 lg:py-3'
                : 'bg-transparent py-4 lg:py-6'
                } ${isMenuOpen ? 'bg-white' : ''}`}
        >
            <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
            <div className="container mx-auto px-4 flex items-center justify-between relative z-10">
                <Link href="/" className="flex items-center gap-4 group">
                    <div className="relative flex items-center">
                        <div className={`transition-all duration-500 ease-out ${showDarkNav ? 'w-12 h-12 lg:w-16 lg:h-16' : 'w-16 h-16 lg:w-20 lg:h-20'} relative`}>
                            <Image
                                src="/ahsas-logo-v2.png"
                                alt="Ahsas Cab"
                                fill
                                className="object-contain drop-shadow-md"
                                priority
                                sizes="(max-width: 768px) 64px, 80px"
                            />
                        </div>
                        <div className={`hidden sm:flex flex-col ml-3 transition-opacity duration-300 ${showDarkNav ? 'opacity-0 lg:opacity-100' : 'opacity-100'}`}>
                            <span className={`text-xl lg:text-2xl font-bold font-playfair leading-none tracking-tight transition-colors duration-300 ${showDarkNav ? 'text-secondary' : 'text-white'}`}>
                                Ahsas <span className="text-primary">Cab</span>
                            </span>
                            <span className={`text-[0.65rem] lg:text-xs font-medium tracking-[0.2em] uppercase leading-none mt-1 transition-colors duration-300 ${showDarkNav ? 'text-muted-foreground' : 'text-white/80'}`}>
                                Luxury Transport
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-8">
                    {links.map((link) => (
                        <div key={link.href} className="relative group/nav">
                            {link.href === '#' ? (
                                <span
                                    className={`relative text-sm font-medium transition-all duration-300 py-2 flex items-center gap-1 cursor-default ${showDarkNav ? 'text-secondary hover:text-primary' : 'text-white/90 hover:text-white'}`}
                                >
                                    {link.label}
                                    {link.children && <ChevronDown size={14} className="group-hover/nav:rotate-180 transition-transform duration-300" />}
                                </span>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={`relative text-sm font-medium transition-all duration-300 py-2 flex items-center gap-1 ${mounted && pathname === link.href
                                        ? 'text-primary font-bold'
                                        : (showDarkNav ? 'text-secondary hover:text-primary' : 'text-white/90 hover:text-white')
                                        }`}
                                >
                                    {link.label}
                                    {link.children && <ChevronDown size={14} className="group-hover/nav:rotate-180 transition-transform duration-300" />}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${mounted && pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100'}`} />
                                </Link>
                            )}

                            {/* Dropdown Menu */}
                            {link.children && (
                                <div className="absolute top-full left-0 w-64 pt-4 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 translate-y-2 group-hover/nav:translate-y-0">
                                    <div className="glass-card p-2 overflow-hidden bg-white/90 backdrop-blur-xl border border-white/20 shadow-xl rounded-xl">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block px-4 py-3 text-sm font-medium text-secondary/80 hover:text-primary hover:bg-secondary/5 rounded-lg transition-colors duration-200"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="hidden xl:flex items-center gap-4">
                    <div className="flex flex-col items-end mr-2 hidden 2xl:flex">
                        <span className="text-xs text-muted-foreground font-medium">Need Help?</span>
                        <span className="text-sm font-bold text-secondary font-mono">+966 5X XXX XXXX</span>
                    </div>
                    <GlassButton
                        href="/booking"
                        variant="primary"
                        size="md"
                        className="font-bold shadow-lg btn-gold"
                    >
                        Book Now
                    </GlassButton>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`xl:hidden p-2 transition-colors relative z-50 ${scrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary'}`}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 xl:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Sidebar Drawer */}
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
                            <span className="text-lg font-bold text-secondary font-playfair">Ahsas Cab</span>
                            <span className="text-[0.6rem] font-bold text-primary tracking-widest uppercase">Luxury Transport</span>
                        </div>
                    </Link>
                </div>

                <div className="relative flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1">
                    {links.map((link) => (
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
        </nav >
    );
}
