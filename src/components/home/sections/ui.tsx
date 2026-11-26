import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionProps {
    id?: string;
    tone?: 'white' | 'muted' | 'navy';
    className?: string;
    children: React.ReactNode;
}

const TONES = {
    white: 'bg-white text-slate-700',
    muted: 'bg-slate-50 text-slate-700',
    navy: 'bg-secondary text-slate-200',
};

export function Section({ id, tone = 'white', className, children }: SectionProps) {
    return (
        <section id={id} className={cn('py-14 md:py-20 scroll-mt-20', TONES[tone], className)}>
            <div className="container mx-auto px-4 max-w-6xl">{children}</div>
        </section>
    );
}

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    intro?: React.ReactNode;
    dark?: boolean;
    center?: boolean;
}

export function SectionHeading({ eyebrow, title, intro, dark, center }: SectionHeadingProps) {
    return (
        <header className={cn('mb-8 md:mb-10 max-w-3xl', center && 'mx-auto text-center')}>
            {eyebrow && (
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-3">{eyebrow}</p>
            )}
            <h2 className={cn('font-playfair font-bold text-3xl md:text-4xl leading-tight', dark ? 'text-white' : 'text-secondary')}>
                {title}
            </h2>
            {intro && <div className={cn('mt-4 text-base md:text-lg leading-relaxed', dark ? 'text-slate-300' : 'text-slate-600')}>{intro}</div>}
        </header>
    );
}

export function SubHeading({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
    return (
        <h3 className={cn('font-bold text-xl md:text-2xl leading-snug mb-3', dark ? 'text-white' : 'text-secondary')}>
            {children}
        </h3>
    );
}

export function ReadMore({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="inline-flex items-center gap-1.5 mt-4 font-semibold text-amber-700 hover:text-amber-800 underline-offset-4 hover:underline"
        >
            Read more: {children}
            <ArrowRight className="w-4 h-4" aria-hidden />
        </Link>
    );
}

export function CheckList({ items, dark }: { items: React.ReactNode[]; dark?: boolean }) {
    return (
        <ul className="space-y-3">
            {items.map((item, i) => (
                <li key={i} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-amber-700">
                        <Check className="w-3.5 h-3.5" aria-hidden />
                    </span>
                    <span className={cn('leading-relaxed', dark ? 'text-slate-200' : 'text-slate-700')}>{item}</span>
                </li>
            ))}
        </ul>
    );
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <div className={cn('rounded-[15px] border border-slate-200 bg-white p-6 md:p-7 shadow-sm', className)}>
            {children}
        </div>
    );
}

interface DataTableProps {
    caption: string;
    headers: React.ReactNode[];
    rows: React.ReactNode[][];
    /** Keep the first column visible while the table scrolls sideways on phones. */
    stickyFirstColumn?: boolean;
}

export function DataTable({ caption, headers, rows, stickyFirstColumn }: DataTableProps) {
    const sticky = stickyFirstColumn ? 'sticky left-0 z-10' : '';
    return (
        <div className="overflow-x-auto rounded-[15px] border border-slate-200 bg-white shadow-sm" tabIndex={0} role="region" aria-label={caption}>
            <table className="w-full min-w-[720px] text-left text-sm md:text-[15px]">
                <caption className="sr-only">{caption}</caption>
                <thead className="bg-secondary text-white">
                    <tr>
                        {headers.map((h, i) => (
                            <th key={i} scope="col" className={cn('px-4 py-3 font-semibold whitespace-nowrap align-bottom', i === 0 && cn(sticky, 'bg-secondary min-w-[190px]'))}>
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, r) => (
                        <tr key={r} className="border-t border-slate-100 even:bg-slate-50">
                            {row.map((cell, c) =>
                                c === 0 ? (
                                    <th key={c} scope="row" className={cn('px-4 py-3 font-semibold text-secondary', sticky, r % 2 ? 'bg-slate-50' : 'bg-white')}>
                                        {cell}
                                    </th>
                                ) : (
                                    <td key={c} className="px-4 py-3 text-slate-700">{cell}</td>
                                )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
