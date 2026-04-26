import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
    ChevronLeft, 
    Smartphone, 
    ArrowRight, 
    History, 
    Wallet, 
    Copy, 
    CheckCircle2, 
    Clock, 
    AlertCircle,
    UserCircle,
    Building2,
    Mail,
    Key
} from 'lucide-react';
import TikTokLogo from '@/../components/TikTokLogo';
import { useState, useEffect } from 'react';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const BalanceTimer = ({ timerEnd }: { timerEnd: number }) => {
    const [timeLeft, setTimeLeft] = useState(timerEnd - Date.now());
    useEffect(() => {
        const interval = setInterval(() => setTimeLeft(timerEnd - Date.now()), 1000);
        return () => clearInterval(interval);
    }, [timerEnd]);
    if (timeLeft <= 0) return null;
    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    return (
        <motion.div variants={itemVariants} className="mb-4 flex items-center justify-center gap-2 rounded-2xl bg-destructive/10 py-2.5 text-[11px] font-black text-destructive uppercase tracking-widest border border-destructive/10">
            <Clock className="h-3.5 w-3.5" />
            Bônus expira em: {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </motion.div>
    );
};

interface WithdrawViewProps {
    onBack: () => void;
    onSubmit: () => void;
    lastReward: number;
    timerEnd: number;
}

export const WithdrawView = ({ onBack, onSubmit, lastReward, timerEnd }: WithdrawViewProps) => {
    const [pixType, setPixType] = useState<'cpf' | 'cnpj' | 'email' | 'phone' | 'random'>('cpf');
    const [pixKey, setPixKey] = useState('');
    const [selectedAmountIdx, setSelectedAmountIdx] = useState(3);
    const amounts = [100, 250, 500, 868.75];

    const formatPixKey = (value: string, type: string) => {
        let cleanValue = value.replace(/\D/g, '');
        
        if (type === 'cpf') {
            cleanValue = cleanValue.slice(0, 11);
            return cleanValue
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1');
        }
        if (type === 'cnpj') {
            cleanValue = cleanValue.slice(0, 14);
            return cleanValue
                .replace(/^(\d{2})(\d)/, '$1.$2')
                .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
                .replace(/\.(\d{3})(\d)/, '.$1/$2')
                .replace(/(\d{4})(\d)/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1');
        }
        if (type === 'phone') {
            cleanValue = cleanValue.slice(0, 11);
            return cleanValue
                .replace(/^(\d{2})(\d)/g, '($1) $2')
                .replace(/(\d{5})(\d)/, '$1-$2')
                .replace(/(-\d{4})\d+?$/, '$1');
        }
        if (type === 'email') return value.toLowerCase().trim();
        return value.trim();
    };

    const validatePixKey = () => {
        if (!pixKey) return false;
        const clean = pixKey.replace(/\D/g, '');
        
        switch (pixType) {
            case 'cpf': return clean.length === 11;
            case 'cnpj': return clean.length === 14;
            case 'phone': return clean.length === 11;
            case 'email': return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pixKey);
            case 'random': return pixKey.length > 20;
            default: return false;
        }
    };

    const handlePixChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPixKey(formatPixKey(e.target.value, pixType));
    };

    useEffect(() => {
        setPixKey('');
    }, [pixType]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#eff6ff] p-0 sm:p-5">
            <div className="flex min-h-[600px] w-full max-w-[520px] flex-col overflow-hidden border border-border/40 bg-card shadow-2xl shadow-foreground/5 rounded-none sm:rounded-3xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-1 flex-col px-6 py-6"
                >
                    <motion.div variants={itemVariants} className="mb-5 flex items-center justify-between">
                        <motion.button
                            whileHover={{ scale: 1.1, x: -3 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onBack}
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 transition-colors hover:bg-accent/40"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </motion.button>
                        <TikTokLogo />
                        <div className="w-10" />
                    </motion.div>

                    <BalanceTimer timerEnd={timerEnd} />

                    <motion.button
                        variants={itemVariants}
                        onClick={() => setSelectedAmountIdx(3)}
                        className="relative mb-6 flex flex-col items-center justify-center rounded-[32px] bg-gradient-to-br from-primary via-primary to-primary/80 py-10 text-primary-foreground shadow-2xl shadow-primary/20 transition-transform active:scale-[0.98]"
                    >
                        <span className="mb-1 text-[11px] font-black uppercase tracking-[0.2em] opacity-80">Saldo Disponível</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-black">R$</span>
                            <span className="text-5xl font-black tracking-tight">868,75</span>
                        </div>
                        <div className="mt-4 flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-[10px] font-bold backdrop-blur-md">
                            <CheckCircle2 className="h-3.5 w-3.5 text-green-300" />
                            SAQUE LIBERADO
                        </div>
                    </motion.button>

                    <motion.div variants={itemVariants} className="mb-8 text-center text-xs font-bold text-primary">
                        Últimas recompensas: R${lastReward.toFixed(2)}
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-6">
                        <h2 className="mb-4 text-lg font-black uppercase tracking-tight text-foreground/80">Sacar dinheiro</h2>
                        
                        <div className="mb-5 flex flex-col gap-4">
                            <div className="grid grid-cols-5 gap-2">
                                {[
                                    { id: 'cpf', icon: UserCircle, label: 'CPF' },
                                    { id: 'cnpj', icon: Building2, label: 'CNPJ' },
                                    { id: 'email', icon: Mail, label: 'E-mail' },
                                    { id: 'phone', icon: Smartphone, label: 'Fone' },
                                    { id: 'random', icon: Key, label: 'Aleat.' },
                                ].map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => setPixType(type.id as any)}
                                        className={`flex flex-col items-center gap-1 rounded-2xl p-2.5 transition-all ${
                                            pixType === type.id 
                                            ? 'bg-primary text-primary-foreground shadow-md' 
                                            : 'bg-accent/20 text-muted-foreground hover:bg-accent/40'
                                        }`}
                                    >
                                        <type.icon className="h-4 w-4" />
                                        <span className="text-[9px] font-bold uppercase">{type.label}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="relative">
                                {(() => {
                                    const IconComponent = {
                                        cpf: UserCircle,
                                        cnpj: Building2,
                                        email: Mail,
                                        phone: Smartphone,
                                        random: Key
                                    }[pixType];
                                    return (
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40">
                                            <IconComponent className="h-5 w-5" />
                                        </div>
                                    );
                                })()}
                                <input
                                    type={pixType === 'email' ? 'email' : 'text'}
                                    value={pixKey}
                                    onChange={handlePixChange}
                                    placeholder={`Digite sua chave ${pixType.toUpperCase()}`}
                                    className="w-full rounded-2xl border-2 border-accent/20 bg-accent/10 py-4 pl-12 pr-4 text-sm font-bold outline-none transition-all focus:border-primary/40 focus:bg-background"
                                />
                                {pixKey && (
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                        {validatePixKey() ? (
                                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                                        ) : (
                                            <AlertCircle className="h-5 w-5 text-destructive/40" />
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mb-6 grid grid-cols-4 gap-2">
                            {amounts.map((amt, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedAmountIdx(idx)}
                                    className={`rounded-2xl py-3 text-xs font-black transition-all ${
                                        selectedAmountIdx === idx 
                                        ? 'bg-foreground text-background shadow-lg' 
                                        : 'bg-accent/10 text-muted-foreground hover:bg-accent/20'
                                    }`}
                                >
                                    R$ {amt}
                                </button>
                            ))}
                        </div>

                        <motion.button
                            whileHover={validatePixKey() ? { scale: 1.02 } : {}}
                            whileTap={validatePixKey() ? { scale: 0.98 } : {}}
                            disabled={!validatePixKey()}
                            onClick={onSubmit}
                            className={`flex w-full items-center justify-center gap-3 rounded-2xl py-4.5 text-base font-black uppercase tracking-widest transition-all ${
                                validatePixKey() 
                                ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/20' 
                                : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                            }`}
                        >
                            RECEBER RECOMPENSA
                            <ArrowRight className="h-5 w-5" />
                        </motion.button>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mb-8 rounded-2xl bg-muted/20 p-4 text-center border border-border/10"
                    >
                        <h3 className="mb-1 text-sm font-black text-foreground/70 uppercase">Como funciona o saque?</h3>
                        <p className="text-[10px] leading-relaxed text-muted-foreground font-medium">
                            Insira sua chave PIX acima. O valor será transferido instantaneamente após a confirmação da sua conta.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};
