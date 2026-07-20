'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import { useMobileMenu } from '@/context/MobileMenuContext';
import NavBrand from './NavBrand';
import DesktopNav from './DesktopNav';
import MobileMenuDrawer from './MobileMenuDrawer';

export default function Navbar() {
    const pathname = usePathname();
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
                <NavBrand showDarkNav={showDarkNav} />
                
                <DesktopNav mounted={mounted} pathname={pathname} showDarkNav={showDarkNav} />

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

            <MobileMenuDrawer
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                mounted={mounted}
                pathname={pathname}
            />
        </nav>
    );
}
