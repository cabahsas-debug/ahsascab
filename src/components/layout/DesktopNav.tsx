import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { navigationLinks } from './navigation';
import GlassButton from '@/components/ui/GlassButton';

interface DesktopNavProps {
    mounted: boolean;
    pathname: string;
    showDarkNav: boolean;
}

export default function DesktopNav({ mounted, pathname, showDarkNav }: DesktopNavProps) {
    return (
        <div className="hidden xl:flex items-center gap-8">
            <div className="flex items-center gap-8">
                {navigationLinks.map((link) => (
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

            <div className="flex items-center gap-4">
                <GlassButton
                    href="/booking"
                    variant="primary"
                    size="md"
                    className="font-bold shadow-lg btn-gold"
                >
                    Book Now
                </GlassButton>
            </div>
        </div>
    );
}
