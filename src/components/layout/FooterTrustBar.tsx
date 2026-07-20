import React from 'react';
import { ShieldCheck, Clock, CreditCard } from 'lucide-react';

export default function FooterTrustBar() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/10 pb-12 mb-16">
            <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                    <ShieldCheck size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg font-playfair">Official License</h4>
                    <p className="text-white/60 text-sm">Authorized by Ministry of Transport</p>
                </div>
            </div>
            <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                    <Clock size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg font-playfair">24/7 Support</h4>
                    <p className="text-white/60 text-sm">Always available for your journey</p>
                </div>
            </div>
            <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                    <CreditCard size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg font-playfair">Fixed Pricing</h4>
                    <p className="text-white/60 text-sm">Transparent rates, no hidden fees</p>
                </div>
            </div>
        </div>
    );
}
