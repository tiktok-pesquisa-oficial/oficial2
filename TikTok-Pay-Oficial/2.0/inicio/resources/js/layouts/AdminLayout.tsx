import { Link } from '@inertiajs/react';
import { LayoutDashboard, Settings, LogOut, ShieldCheck } from 'lucide-react';
import TikTokLogo from '@/../components/TikTokLogo';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col md:flex-row">
            <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex flex-col shrink-0">
                <div className="p-6 border-b border-slate-100 flex items-center justify-center">
                    <TikTokLogo />
                </div>
                
                <nav className="flex-1 p-4 space-y-2">
                    <Link 
                        href="/admin/dashboard"
                        className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                            window.location.pathname === '/admin/dashboard' 
                            ? 'bg-slate-900 text-white' 
                            : 'text-slate-500 hover:bg-slate-50'
                        }`}
                    >
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard
                    </Link>
                    <Link 
                        href="/admin/settings"
                        className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                            window.location.pathname === '/admin/settings' 
                            ? 'bg-slate-900 text-white' 
                            : 'text-slate-500 hover:bg-slate-50'
                        }`}
                    >
                        <Settings className="w-4 h-4" />
                        Configurações
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-100">
                    <Link 
                        href="/admin/logout" 
                        method="post" 
                        as="button"
                        className="flex w-full items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all"
                    >
                        <LogOut className="w-4 h-4" />
                        Sair do Painel
                    </Link>
                </div>
            </aside>

            <main className="flex-1 overflow-y-auto p-4 sm:p-8">
                {children}
            </main>
        </div>
    );
}
