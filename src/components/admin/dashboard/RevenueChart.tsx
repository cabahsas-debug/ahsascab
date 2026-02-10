import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface RevenueChartProps {
    data: { name: string; revenue: number; bookings: number }[];
}

export default function RevenueChart({ data }: RevenueChartProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-navy-900/50 backdrop-blur-xl border border-gray-200 dark:border-navy-800 rounded-2xl p-6 shadow-sm shadow-gray-200/50 dark:shadow-xl"
        >
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-bold text-navy-900 dark:text-white flex items-center gap-2 font-playfair">
                        <TrendingUp size={20} className="text-gold" />
                        Revenue Analytics
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Monthly performance overview</p>
                </div>
            </div>
            <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--gold)" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="var(--gold)" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-gray-200 dark:text-navy-800" vertical={false} />
                        <XAxis
                            dataKey="name"
                            stroke="#94a3b8"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            dy={10}
                        />
                        <YAxis
                            stroke="#94a3b8"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value / 1000}k`}
                            dx={-10}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                borderColor: '#e2e8f0',
                                color: '#0f172a',
                                borderRadius: '12px',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                            }}
                            itemStyle={{ color: 'var(--gold)' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="var(--gold)"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorRevenue)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}
