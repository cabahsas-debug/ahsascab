import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface PopularRoutesChartProps {
    data: { name: string; value: number }[];
}

export default function PopularRoutesChart({ data }: PopularRoutesChartProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="bg-white dark:bg-navy-900/50 backdrop-blur-xl border border-gray-200 dark:border-navy-800 rounded-2xl p-6 shadow-sm shadow-gray-200/50 dark:shadow-xl"
        >
            <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-6 flex items-center gap-2 font-playfair">
                <TrendingUp size={18} className="text-emerald-500" />
                Popular Routes
            </h3>
            <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 10, fill: '#64748b' }} interval={0} />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            formatter={(value: any) => [value, 'Bookings']}
                        />
                        <Bar dataKey="value" fill="#10b981" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}
