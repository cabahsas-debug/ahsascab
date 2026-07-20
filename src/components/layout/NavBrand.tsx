import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavBrandProps {
    showDarkNav: boolean;
}

export default function NavBrand({ showDarkNav }: NavBrandProps) {
    return (
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
                <div className={`flex flex-col ml-3 transition-opacity duration-300 ${showDarkNav ? 'opacity-0 lg:opacity-100' : 'opacity-100'}`}>
                    <span className={`text-xl lg:text-2xl font-bold font-playfair leading-none tracking-tight transition-colors duration-300 flex items-center gap-2 ${showDarkNav ? 'text-secondary' : 'text-white'}`}>
                        <span>Ahsas <span className="text-primary">Cab</span></span>
                        <span className="font-sans text-xl lg:text-2xl text-primary/90">| إحساس الرحلات</span>
                    </span>
                    <span className={`text-[0.65rem] lg:text-xs font-medium tracking-[0.2em] uppercase leading-none mt-1 transition-colors duration-300 ${showDarkNav ? 'text-muted-foreground' : 'text-white/80'}`}>
                        Luxury Transport
                    </span>
                </div>
            </div>
        </Link>
    );
}
