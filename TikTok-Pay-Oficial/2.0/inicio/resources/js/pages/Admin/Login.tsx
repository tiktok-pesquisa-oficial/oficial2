import { Head, useForm } from '@inertiajs/react';
import { ShieldCheck, Lock, Mail, Loader2 } from 'lucide-react';
import TikTokLogo from '@/../components/TikTokLogo';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/login');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <Head title="Login Admin" />
            
            <div className="w-full max-w-[400px]">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <TikTokLogo />
                    </div>
                    <h1 className="text-xl font-black text-slate-900">PAINEL ADMINISTRATIVO</h1>
                    <p className="text-slate-500 text-sm">Acesse para gerenciar o seu funil</p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2 ml-1">E-mail</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input 
                                    type="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="admin@admin.com"
                                />
                            </div>
                            {errors.email && <p className="mt-1 text-xs text-red-500 ml-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2 ml-1">Senha</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input 
                                    type="password"
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                            {errors.password && <p className="mt-1 text-xs text-red-500 ml-1">{errors.password}</p>}
                        </div>

                        <button 
                            disabled={processing}
                            className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-800 transition-all active:scale-95 disabled:opacity-50 mt-4"
                        >
                            {processing ? <Loader2 className="w-4 h-4 animate-spin" /> : 'ENTRAR NO PAINEL'}
                        </button>
                    </form>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">Sistema de Acesso Seguro</span>
                </div>
            </div>
        </div>
    );
}
