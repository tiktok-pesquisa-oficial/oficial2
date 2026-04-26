import { motion, AnimatePresence } from 'framer-motion';
import { 
    ShieldCheck, 
    Loader2, 
    CheckCircle2, 
    ArrowRight,
    Lock,
    CreditCard
} from 'lucide-react';
import { useEffect, useState } from 'react';
import TikTokLogo from '@/../components/TikTokLogo';

interface ProcessingViewProps {
    finalBalance: number;
    onComplete: () => void;
}

export const ProcessingView = ({ finalBalance, onComplete }: ProcessingViewProps) => {
    const [status, setStatus] = useState<'analyzing' | 'verifying' | 'ready'>('analyzing');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        const s1 = setTimeout(() => setStatus('verifying'), 1500);
        const s2 = setTimeout(() => setStatus('ready'), 3500);

        return () => {
            clearInterval(timer);
            clearTimeout(s1);
            clearTimeout(s2);
        };
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-accent/30 p-0 sm:p-5">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-[480px] overflow-hidden border border-border/40 bg-card shadow-2xl shadow-foreground/5 rounded-none sm:rounded-3xl"
            >
                <div className="p-8 flex flex-col items-center text-center">
                    <TikTokLogo />
                    
                    <div className="mt-8 mb-6 relative">
                        <div className="w-24 h-24 rounded-full border-4 border-muted flex items-center justify-center relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                {status !== 'ready' ? (
                                    <motion.div
                                        key="loader"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <Loader2 className="w-10 h-10 text-primary animate-spin" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="check"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="bg-green-500 rounded-full w-full h-full flex items-center justify-center"
                                    >
                                        <CheckCircle2 className="w-12 h-12 text-white" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        {status !== 'ready' && (
                            <svg className="absolute top-0 left-0 w-24 h-24 -rotate-90">
                                <circle
                                    cx="48"
                                    cy="48"
                                    r="44"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="transparent"
                                    className="text-primary"
                                    strokeDasharray={276}
                                    strokeDashoffset={276 - (276 * progress) / 100}
                                />
                            </svg>
                        )}
                    </div>

                    <h1 className="text-2xl font-black mb-2">
                        {status === 'analyzing' && 'Analisando Saldo...'}
                        {status === 'verifying' && 'Verificando Chave PIX...'}
                        {status === 'ready' && 'Tudo Pronto!'}
                    </h1>
                    
                    <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                        {status === 'analyzing' && 'Estamos calculando suas recompensas acumuladas e bônus de participação.'}
                        {status === 'verifying' && 'Validando sua chave de transferência junto ao Banco Central.'}
                        {status === 'ready' && 'Seu documento de liberação de R$ ' + finalBalance.toFixed(2) + ' foi gerado com sucesso.'}
                    </p>

                    <div className="w-full bg-accent/30 rounded-2xl p-6 mb-8 border border-border/40">
                        <div className="flex justify-between items-center mb-4 pb-4 border-b border-border/20">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Saldo Bloqueado</span>
                            <span className="text-xl font-black text-foreground">R$ {finalBalance.toFixed(2)}</span>
                        </div>
                    </div>

                    <motion.button
                        disabled={status !== 'ready'}
                        whileHover={status === 'ready' ? { scale: 1.02 } : {}}
                        whileTap={status === 'ready' ? { scale: 0.98 } : {}}
                        onClick={onComplete}
                        className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${
                            status === 'ready' 
                            ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/30' 
                            : 'bg-muted text-muted-foreground cursor-not-allowed'
                        }`}
                    >
                        {status === 'ready' ? (
                            <>
                                LIBERAR MEU SALDO AGORA
                                <ArrowRight className="w-5 h-5" />
                            </>
                        ) : (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                GERANDO DOCUMENTO...
                            </>
                        )}
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};
