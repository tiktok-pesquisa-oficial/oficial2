import AdminLayout from '@/layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { TrendingUp, Clock, Users, DollarSign, Globe, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface Props {
    stats: {
        total_paid: number;
        total_pending: number;
        count_paid: number;
        count_pending: number;
        recent_transactions: any[];
        webhook_url: string;
    }
}

export default function Dashboard({ stats }: Props) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(stats.webhook_url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AdminLayout>
            <Head title="Painel Admin - Dashboard" />
            
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900">Dashboard de Vendas</h1>
                        <p className="text-slate-500 text-sm">Resumo de faturamento e transações do seu funil</p>
                    </div>
                    
                    <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 flex items-center gap-4 max-w-md">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Globe className="text-primary w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">URL do Webhook</div>
                            <div className="text-xs font-mono text-slate-600 truncate">{stats.webhook_url}</div>
                        </div>
                        <button 
                            onClick={handleCopy}
                            className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-primary"
                            title="Copiar URL"
                        >
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                        <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mb-4">
                            <TrendingUp className="text-green-600 w-6 h-6" />
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Pago</div>
                        <div className="text-2xl font-black text-slate-900">R$ {stats.total_paid.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                        <div className="mt-1 text-[11px] text-green-600 font-bold">{stats.count_paid} vendas aprovadas</div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                        <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-4">
                            <Clock className="text-yellow-600 w-6 h-6" />
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Pendente</div>
                        <div className="text-2xl font-black text-slate-900">R$ {stats.total_pending.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                        <div className="mt-1 text-[11px] text-yellow-600 font-bold">{stats.count_pending} aguardando pagamento</div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                        <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
                            <Users className="text-slate-600 w-6 h-6" />
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Vendas</div>
                        <div className="text-2xl font-black text-slate-900">{stats.count_paid + stats.count_pending}</div>
                        <div className="mt-1 text-[11px] text-slate-400 font-bold">Volume total de pedidos</div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                            <DollarSign className="text-primary w-6 h-6" />
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Ticket Médio</div>
                        <div className="text-2xl font-black text-slate-900">
                            R$ {stats.count_paid > 0 ? (stats.total_paid / stats.count_paid).toFixed(2).replace('.', ',') : '0,00'}
                        </div>
                        <div className="mt-1 text-[11px] text-primary font-bold">Por venda aprovada</div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="font-bold">Últimas Transações</h2>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Atualizado agora</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-100">
                                <tr>
                                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase">Cliente</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase">Valor</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase">Status</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase">Data</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {stats.recent_transactions.map((t) => (
                                    <tr key={t.id} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-bold">{t.customer_name}</div>
                                            <div className="text-[10px] text-slate-400">{t.customer_email}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-bold text-slate-900">R$ {(t.amount / 100).toFixed(2).replace('.', ',')}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${
                                                t.status === 'approved' 
                                                ? 'bg-green-100 text-green-600' 
                                                : t.status === 'pending' 
                                                ? 'bg-yellow-100 text-yellow-600'
                                                : 'bg-red-100 text-red-600'
                                            }`}>
                                                {t.status === 'approved' ? 'Aprovado' : t.status === 'pending' ? 'Pendente' : t.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-[10px] font-bold text-slate-400">
                                                {new Date(t.created_at).toLocaleString('pt-BR')}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {stats.recent_transactions.length === 0 && (
                            <div className="p-20 text-center text-slate-400 italic text-sm">
                                Nenhuma transação encontrada.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
