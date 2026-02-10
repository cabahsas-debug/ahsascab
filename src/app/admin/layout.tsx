'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Calendar, Car, DollarSign, Settings, LogOut, MapPin, MessageSquare, FileText, Users, Image as ImageIcon, PenTool, UserCheck, Navigation, BarChart3, Menu, X } from 'lucide-react';
import { logout } from '@/lib/auth';

import AdminAutoLock from '@/components/admin/AdminAutoLock';

interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'manager' | 'operational_manager';
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        // Close sidebar on route change (mobile)
        setIsSidebarOpen(false);
    }, [pathname]);

    useEffect(() => {
        const checkAuth = async () => {
            if (pathname === '/admin/login') {
                setLoading(false);
                return;
            }

            try {
                const res = await fetch('/api/auth/me');
                const data = await res.json();

                if (data.authenticated) {
                    setUser(data.user);
                } else {
                    router.push('/admin/login');
                }
            } catch (error) {
                console.error('Auth check failed:', error);
                router.push('/admin/login');
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [pathname, router]);

    // If on login page, render full screen without sidebar
    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-slate-50 dark:bg-navy-950 gap-4">
                <div className="w-16 h-16 border-4 border-gold/30 border-t-gold rounded-full animate-spin"></div>
                <div className="text-navy-600 font-medium animate-pulse font-outfit">Verifying Session...</div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    const handleLogout = async (e: React.MouseEvent) => {
        e.preventDefault();
        await logout();
        router.push('/admin/login');
    };

    const allLinks = [
        { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, roles: ['admin', 'manager', 'operational_manager'] },
        { href: '/admin/analytics', label: 'Analytics', icon: BarChart3, roles: ['admin', 'manager'] },
        { href: '/admin/bookings', label: 'Bookings', icon: Calendar, roles: ['admin', 'manager', 'operational_manager'] },
        { href: '/admin/routes', label: 'Routes', icon: MapPin, roles: ['admin', 'manager', 'operational_manager'] },
        { href: '/admin/fleet', label: 'Fleet', icon: Car, roles: ['admin', 'manager', 'operational_manager'] },
        { href: '/admin/pricing', label: 'Pricing', icon: DollarSign, roles: ['admin'] },
        { href: '/admin/reviews', label: 'Reviews', icon: MessageSquare, roles: ['admin', 'manager', 'operational_manager'] },
        { href: '/admin/blog', label: 'Blog', icon: FileText, roles: ['admin', 'manager', 'operational_manager'] },
        { href: '/admin/gallery', label: 'Gallery', icon: ImageIcon, roles: ['admin', 'manager', 'operational_manager'] },
        { href: '/admin/content', label: 'Content', icon: PenTool, roles: ['admin', 'manager', 'operational_manager'] },
        { href: '/admin/marketing', label: 'Marketing', icon: MessageSquare, roles: ['admin', 'manager'] },
        { href: '/admin/users', label: 'Users', icon: Users, roles: ['admin'] },
        { href: '/admin/settings', label: 'Settings', icon: Settings, roles: ['admin'] },
    ];

    const userRole = user.role.toLowerCase();
    const visibleLinks = allLinks.filter(link => link.roles.includes(userRole));

    const getRoleDisplay = (role: string) => {
        switch (role) {
            case 'admin': return 'Administrator';
            case 'manager': return 'Manager';
            case 'operational_manager': return 'Ops Manager';
            default: return role;
        }
    };

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-navy-950">
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-navy-900 border-b border-gray-200 dark:border-navy-800 px-4 py-3 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 -ml-2 text-navy-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-800 rounded-lg transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <span className="font-bold text-lg text-navy-900 dark:text-white font-playfair">Admin Panel</span>
                </div>
                {user && (
                    <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-navy-900 font-bold text-sm shadow-md">
                        {user.name.charAt(0)}
                    </div>
                )}
            </div>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed lg:sticky top-0 left-0 z-50 h-[100dvh] w-72 bg-[#0A192F] text-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out border-r border-navy-800
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                {/* Logo Area */}
                <div className="p-6 border-b border-navy-800 bg-navy-950/50">
                    <div className="flex flex-col items-start gap-1">
                        <div className="flex flex-col items-start text-left">
                            <span className="text-2xl font-bold text-gold font-playfair">Ahsas</span>
                            <span className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase font-outfit">Alrihlat</span>
                            <span className="text-lg font-bold text-gold mt-1 font-[family-name:var(--font-reem-kufi)] opacity-90">احساس الرحلات</span>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1 custom-scrollbar">
                    <div className="px-3 mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider">Main Menu</div>
                    {visibleLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`
                                    flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group
                                    ${isActive
                                        ? 'bg-gold text-navy-900 shadow-lg shadow-gold/20 font-bold'
                                        : 'text-gray-400 hover:bg-navy-800 hover:text-white'}
                                `}
                            >
                                <Icon size={20} className={`transition-colors ${isActive ? 'text-navy-900' : 'group-hover:text-gold'}`} />
                                <span>{link.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* User Profile Footer */}
                <div className="p-4 border-t border-navy-800 bg-navy-950/30">
                    <div className="flex items-center gap-3 p-2 rounded-xl bg-navy-800/50 border border-navy-700/50">
                        <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy-900 font-bold shadow-inner">
                            {user.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-white truncate">{user.name}</div>
                            <div className="text-xs text-gray-400 truncate">{getRoleDisplay(user.role)}</div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                            title="Logout"
                        >
                            <LogOut size={18} />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-w-0 lg:pl-0 pt-[60px] lg:pt-0 transition-all duration-300">
                <div className="p-4 md:p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
            <AdminAutoLock />
        </div>
    );
}
