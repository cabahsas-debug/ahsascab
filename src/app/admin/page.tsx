import { getBookings, getFleet, getDashboardStats } from '@/lib/db';
import { getLogs } from '@/lib/logger';
import { routeService } from '@/services/routeService';
import DashboardClient from './DashboardClient';
import AdminAutoLock from '@/components/admin/AdminAutoLock';
export default async function AdminDashboard() {
    const [stats, recentBookings, logsData] = await Promise.all([
        getDashboardStats(),
        getBookings(10), // Only fetch latest 10
        getLogs(1, 10)
    ]);

    // Ensure safe defaults
    const safeStats = stats || {
        totalBookings: 0,
        activeFleet: 0,
        totalFleet: 0,
        pendingBookings: 0,
        confirmedBookings: 0,
        totalRevenue: 0,
        analyticsData: { labels: [], bookings: [], revenue: [] }
    };

    const dashboardData = {
        totalBookings: safeStats.totalBookings,
        activeFleet: safeStats.activeFleet,
        totalFleet: safeStats.totalFleet,
        pendingBookings: safeStats.pendingBookings,
        confirmedBookings: safeStats.confirmedBookings,
        routesCount: await routeService.getRoutes().then(r => r.length).catch(() => 0),
        totalRevenue: safeStats.totalRevenue,
        recentBookings: (recentBookings || []).map(b => ({
            ...b,
            id: b.id || (b as any)._id?.toString() || '',
            status: b.status || 'pending'
        })) as any, // Cast to any to avoid strict type checks on minor mismatches for now
        recentLogs: (logsData ? logsData.logs : []).map(l => ({
            ...l,
            timestamp: new Date(l.timestamp),
            user: l.user || 'Unknown'
        })),
        analyticsData: safeStats.analyticsData
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pb-20 md:pb-0">
            <AdminAutoLock />
            <div className="max-w-[1600px] mx-auto">
                <DashboardClient
                    totalBookings={dashboardData.totalBookings}
                    activeFleet={dashboardData.activeFleet}
                    totalFleet={dashboardData.totalFleet}
                    pendingBookings={dashboardData.pendingBookings}
                    confirmedBookings={dashboardData.confirmedBookings}
                    routesCount={dashboardData.routesCount}
                    totalRevenue={dashboardData.totalRevenue}
                    recentBookings={dashboardData.recentBookings}
                    recentLogs={dashboardData.recentLogs}
                    analyticsData={dashboardData.analyticsData}
                />
            </div>
        </div>
    );
}
