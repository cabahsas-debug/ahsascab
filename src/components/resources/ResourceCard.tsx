'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Download, FileText } from 'lucide-react';
import { Resource } from '@/data/resources';
import GlassCard from '@/components/ui/GlassCard';
import LeadGenModal from './LeadGenModal';

export default function ResourceCard(resource: Resource) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <GlassCard className="p-0 overflow-hidden flex flex-col h-full group hover:border-gold/50 transition-all duration-500">
                {/* Thumbnail */}
                <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gold text-navy text-[10px] font-bold uppercase tracking-widest rounded-full shadow-md">
                            {resource.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold font-playfair text-navy dark:text-white mb-3 group-hover:text-secondary transition-colors">
                        {resource.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-1">
                        {resource.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                        <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                            <FileText size={14} />
                            {resource.fileSize} PDF
                        </span>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 text-sm font-bold text-navy dark:text-white hover:text-gold transition-colors"
                        >
                            Download
                            <Download size={16} />
                        </button>
                    </div>
                </div>
            </GlassCard>

            <LeadGenModal
                resource={resource}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
