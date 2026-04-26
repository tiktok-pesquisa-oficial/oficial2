import AdminLayout from '@/layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { Save, Target, CreditCard, DollarSign, Image as ImageIcon, Search, Code } from 'lucide-react';
import { useRef } from 'react';

interface Props {
    settings: {
        tiktok_pixel_id?: string;
        paradise_api_key?: string;
        paradise_product_hash?: string;
        registration_tax_value?: string;
        favicon_path?: string;
        seo_title?: string;
        seo_description?: string;
        header_scripts?: string;
    }
}

export default function Settings({ settings }: Props) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { data, setData, post, processing, recentlySuccessful } = useForm({
        tiktok_pixel_id: settings.tiktok_pixel_id || '',
        paradise_api_key: settings.paradise_api_key || '',
        paradise_product_hash: settings.paradise_product_hash || '',
        registration_tax_value: settings.registration_tax_value || '20.19',
        seo_title: settings.seo_title || 'TikTok Pay - Oficial',
        seo_description: settings.seo_description || 'Ganhe dinheiro respondendo pesquisas rápidas no TikTok.',
        header_scripts: settings.header_scripts || '',
        favicon: null as File | null,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/settings', {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="Painel Admin - Configurações" />
            
            <div className="max-w-4xl mx-auto">
                <header className="mb-8 text-center md:text-left">
                    <h1 className="text-3xl font-black text-slate-900">Configurações do Funil</h1>
                    <p className="text-slate-500 text-sm">Controle total sobre Rastreamento, SEO e Scripts</p>
                </header>

                <form onSubmit={submit} className="space-y-8 pb-32">
                    <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                                <Search className="text-blue-600 w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-black text-slate-800">SEO & Rastreamento</h2>
                                <p className="text-slate-400 text-xs">Configure o título, descrição e Pixel do TikTok</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Título da Página (Meta Title)</label>
                                    <input 
                                        type="text"
                                        value={data.seo_title}
                                        onChange={e => setData('seo_title', e.target.value)}
                                        placeholder="Ex: TikTok Pay - Oficial"
                                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm font-bold outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">ID do Pixel TikTok</label>
                                    <div className="relative">
                                        <Target className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input 
                                            type="text"
                                            value={data.tiktok_pixel_id}
                                            onChange={e => setData('tiktok_pixel_id', e.target.value)}
                                            placeholder="Ex: C1234567890"
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-sm font-bold outline-none focus:ring-4 focus:ring-black/5 focus:border-black transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Descrição SEO (Meta Description)</label>
                                <textarea 
                                    rows={2}
                                    value={data.seo_description}
                                    onChange={e => setData('seo_description', e.target.value)}
                                    placeholder="Uma breve descrição sobre o seu funil..."
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm font-bold outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                                <Code className="text-purple-600 w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-black text-slate-800">Scripts Adicionais (Header)</h2>
                                <p className="text-slate-400 text-xs">Insira scripts personalizados entre as tags &lt;head&gt; &lt;/head&gt;</p>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Código HTML/JS</label>
                            <textarea 
                                rows={6}
                                value={data.header_scripts}
                                onChange={e => setData('header_scripts', e.target.value)}
                                placeholder="<!-- Cole seus scripts aqui -->"
                                className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-6 px-6 text-xs font-mono text-green-400 outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all resize-none"
                            />
                            <p className="mt-2 text-[10px] text-slate-400 font-medium italic">
                                Use este campo para Google Analytics, GTM, outros Pixels ou Chat.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                                <ImageIcon className="text-slate-600 w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-black text-slate-800">Identidade Visual</h2>
                                <p className="text-slate-400 text-xs">Mude o ícone que aparece na aba do navegador</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="w-20 h-20 rounded-2xl bg-white border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden shadow-sm">
                                {settings.favicon_path ? (
                                    <img src={`/${settings.favicon_path}`} className="w-10 h-10 object-contain" alt="Favicon" />
                                ) : (
                                    <ImageIcon className="text-slate-300 w-8 h-8" />
                                )}
                            </div>
                            <div className="flex-1">
                                <input 
                                    type="file" 
                                    ref={fileInputRef}
                                    onChange={e => setData('favicon', e.target.files?.[0] || null)}
                                    className="hidden" 
                                    accept="image/*"
                                />
                                <button 
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 py-3 px-6 rounded-xl font-black text-[10px] tracking-widest uppercase transition-all mb-2"
                                >
                                    ALTERAR ÍCONE (FAVICON)
                                </button>
                                {data.favicon && <p className="text-[10px] text-primary font-black mt-1">✓ Selecionado: {data.favicon.name}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center">
                                    <DollarSign className="text-green-600 w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-black text-slate-800">Taxa</h2>
                            </div>
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Valor da Taxa (R$)</label>
                            <input 
                                type="number"
                                step="0.01"
                                value={data.registration_tax_value}
                                onChange={e => setData('registration_tax_value', e.target.value)}
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm font-bold outline-none focus:ring-4 focus:ring-green-500/5 focus:border-green-500 transition-all"
                            />
                        </div>

                        <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <CreditCard className="text-primary w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-black text-slate-800">Paradise</h2>
                            </div>
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">X-API-Key</label>
                            <input 
                                type="password"
                                value={data.paradise_api_key}
                                onChange={e => setData('paradise_api_key', e.target.value)}
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm font-bold outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all"
                            />
                        </div>
                    </div>

                    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 bg-slate-900/90 backdrop-blur-xl p-3 pl-8 rounded-full border border-white/10 shadow-2xl w-full max-w-xl">
                        <div className="flex-1">
                            <span className="text-white font-black text-xs uppercase tracking-widest block">Configurações Gerais</span>
                            <span className="text-white/40 text-[9px] uppercase font-bold tracking-tight">Todas as alterações serão aplicadas instantaneamente</span>
                        </div>
                        {recentlySuccessful && (
                            <div className="bg-green-500 text-white px-4 py-3 rounded-full font-black text-[9px] uppercase animate-bounce">
                                Salvo com sucesso!
                            </div>
                        )}
                        <button 
                            disabled={processing}
                            className="bg-white text-slate-900 py-4 px-8 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-slate-100 transition-all active:scale-95 disabled:opacity-50"
                        >
                            <Save className="w-4 h-4" />
                            {processing ? 'SALVANDO...' : 'SALVAR AGORA'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
