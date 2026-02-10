'use client';

import styles from './ComparisonTable.module.css';


export default function ComparisonTable() {

    const data = [
        { name: 'Toyota Camry', type: 'camry', capacity: '4', comfort: 'High', price: 'From SAR 200' },
        { name: 'GMC Yukon', type: 'gmc', capacity: '7', comfort: 'Premium', price: 'From SAR 400' },
        { name: 'Hyundai Staria', type: 'staria', capacity: '7', comfort: 'High', price: 'From SAR 300' },
        { name: 'Hyundai Starex', type: 'starex', capacity: '7', comfort: 'Standard', price: 'From SAR 250' },
        { name: 'Toyota Hiace', type: 'hiace', capacity: '11', comfort: 'Standard', price: 'From SAR 350' },
        { name: 'Toyota Coaster', type: 'coaster', capacity: '21', comfort: 'Standard', price: 'From SAR 600' },
    ];

    return (
        <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12 font-playfair">Compare Our Vehicles</h2>

                <div className="overflow-x-auto rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700">
                    <table className="w-full text-left border-collapse bg-white dark:bg-slate-800">
                        <thead>
                            <tr className="bg-slate-900 text-white">
                                <th className="p-6 font-bold text-lg font-playfair">Vehicle Type</th>
                                <th className="p-6 font-bold text-lg font-playfair">Capacity</th>
                                <th className="p-6 font-bold text-lg font-playfair">Comfort Level</th>
                                <th className="p-6 font-bold text-lg font-playfair">Starting Price</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
                            {data.map((row) => (
                                <tr key={row.type} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <td className="p-6 font-bold text-slate-900 dark:text-white">{row.name}</td>
                                    <td className="p-6">{row.capacity} Passengers</td>
                                    <td className="p-6">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${row.comfort === 'Premium' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                                                row.comfort === 'High' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                                                    'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                                            }`}>
                                            {row.comfort}
                                        </span>
                                    </td>
                                    <td className="p-6 font-semibold text-slate-900 dark:text-white">{row.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
