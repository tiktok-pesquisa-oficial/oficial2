import { motion, AnimatePresence } from 'framer-motion';
import {
    CircleCheck,
    Clock,
    Zap,
    ShieldCheck,
    Trophy,
    Users,
    DollarSign,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export const PeopleAnsweredToday = () => {
    const [count, setCount] = useState(() => Math.floor(Math.random() * 800) + 4200);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground mt-1 mb-2">
            <Users className="h-3 w-3" />
            <span>
                <span className="font-bold text-foreground">
                    {count.toLocaleString('pt-BR')}
                </span>{' '}
                pessoas responderam hoje
            </span>
        </div>
    );
};

export const QuizProgressWarning = ({ currentQ, total }: { currentQ: number; total: number }) => {
    const remaining = total - currentQ - 1;
    if (remaining > 3) return null;

    const stages = [
        { text: 'Falta pouco! Quase lá! 🔥', icon: Zap },
        { text: 'Você está quase finalizando! 💰', icon: Trophy },
        { text: 'Última pergunta! Seu prêmio está esperando! 🎉', icon: CircleCheck },
    ];

    const stage = remaining <= 0 ? stages[2] : remaining <= 1 ? stages[1] : stages[0];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-3 flex items-center gap-2 rounded-xl border border-reward/20 bg-reward/10 px-3 py-2"
        >
            <stage.icon className="h-4 w-4 shrink-0 text-reward" />
            <span className="text-xs font-bold text-reward">{stage.text}</span>
        </motion.div>
    );
};

export const TrustBadges = () => (
    <div className="flex items-center justify-center gap-3 px-4 py-2">
        <div className="flex items-center gap-1 text-muted-foreground">
            <ShieldCheck className="h-3 w-3" />
            <span className="text-[10px] font-medium">Dados protegidos</span>
        </div>
        <div className="h-3 w-px bg-border" />
        <div className="flex items-center gap-1 text-muted-foreground">
            <CircleCheck className="h-3 w-3 text-primary" />
            <span className="text-[10px] font-medium">Pesquisa oficial</span>
        </div>
    </div>
);

export const BalanceTimer = ({ timerEnd }: { timerEnd?: number }) => {
    const getRemaining = () =>
        timerEnd ? Math.max(0, Math.floor((timerEnd - Date.now()) / 1000)) : 452;

    const [timeLeft, setTimeLeft] = useState(getRemaining);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getRemaining());
        }, 1000);
        return () => clearInterval(interval);
    }, [timerEnd]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 flex items-center gap-3 rounded-2xl border border-destructive/20 bg-destructive/8 p-3"
        >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10">
                <Clock className="h-5 w-5 text-destructive" />
            </div>
            <div className="flex-1">
                <div className="text-xs font-bold text-destructive">Seu saldo está reservado por</div>
                <div className="text-lg font-black text-destructive tabular-nums">
                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </div>
            </div>
            <div className="text-right text-[10px] font-medium text-destructive/70">
                Após esse tempo,
                <br />
                o saldo expira
            </div>
        </motion.div>
    );
};

export const PixInfoBadge = () => (
    <div className="mb-4 flex items-center justify-center gap-2 rounded-xl border border-border/30 bg-accent/40 p-2.5">
        <ShieldCheck className="h-3.5 w-3.5 text-primary" />
        <span className="text-[11px] font-semibold text-muted-foreground">
            Transferência via PIX — Regulado pelo{' '}
            <span className="font-bold text-foreground">Banco Central do Brasil</span>
        </span>
    </div>
);

export const RecentWithdrawals = () => {
    const names = ['Maria L.', 'Pedro S.', 'Ana C.', 'Carlos M.', 'Fernanda R.', 'Lucas B.'];
    const cities = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Salvador'];
    const amounts = ['R$ 868,75', 'R$ 845,10', 'R$ 821,75', 'R$ 799,60'];

    const generateWithdrawal = () => ({
        name: names[Math.floor(Math.random() * names.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        amount: amounts[Math.floor(Math.random() * amounts.length)],
        time: 'agora',
        id: Date.now() + Math.random(),
    });

    const [items, setItems] = useState(() => [
        { ...generateWithdrawal(), time: 'há 1 min', id: 1 },
        { ...generateWithdrawal(), time: 'há 3 min', id: 2 },
        { ...generateWithdrawal(), time: 'há 5 min', id: 3 },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setItems((prev) => {
                const updated = prev.map((item) => ({
                    ...item,
                    time:
                        item.time === 'agora'
                            ? 'há 1 min'
                            : item.time === 'há 1 min'
                              ? 'há 2 min'
                              : 'há 5 min',
                }));
                return [generateWithdrawal(), ...updated].slice(0, 4);
            });
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
        >
            <div className="mb-2 flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-reward" />
                <span className="text-[11px] font-bold">Saques recentes</span>
                <span className="relative ml-1 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-reward/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-reward" />
                </span>
            </div>
            <div className="space-y-1.5">
                <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20, height: 0 }}
                            animate={{ opacity: 1, x: 0, height: 'auto' }}
                            exit={{ opacity: 0, x: 20, height: 0 }}
                            transition={{ duration: 0.3 }}
                            layout
                            className="flex items-center justify-between rounded-xl border border-reward/10 bg-reward/5 p-2.5"
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-reward/10 text-[10px] font-bold text-reward">
                                    {item.name[0]}
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold">{item.name}</span>
                                    <span className="text-[10px] text-muted-foreground"> • {item.city}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-[11px] font-black text-reward">{item.amount}</div>
                                <div className="text-[9px] text-muted-foreground">{item.time}</div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export const WithdrawalProgress = () => {
    const steps = [
        { label: 'Quiz completado', done: true },
        { label: 'Prêmio aprovado', done: true },
        { label: 'Chave PIX verificada', done: true },
        { label: 'Confirmação de identidade', done: false, current: true },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 rounded-2xl border border-border/30 bg-accent/40 p-4"
        >
            <div className="mb-3 flex items-center gap-1.5 text-xs font-bold">
                <CircleCheck className="h-3.5 w-3.5 text-primary" />
                Progresso do seu saque
            </div>
            <div className="space-y-2">
                {steps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                        <div
                            className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                                step.done
                                    ? 'bg-green-500 text-white'
                                    : step.current
                                      ? 'animate-pulse bg-primary text-primary-foreground'
                                      : 'bg-muted text-muted-foreground'
                            }`}
                        >
                            {step.done ? '✓' : idx + 1}
                        </div>
                        <span
                            className={`text-xs ${
                                step.done
                                    ? 'font-medium text-foreground line-through opacity-70'
                                    : step.current
                                      ? 'font-bold text-foreground'
                                      : 'text-muted-foreground'
                            }`}
                        >
                            {step.label}
                        </span>
                        {step.current && (
                            <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-bold text-primary">
                                ETAPA ATUAL
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export const GuaranteeBadge = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-4 flex items-center gap-3 rounded-2xl border border-green-500/20 bg-green-500/8 p-3"
    >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10">
            <ShieldCheck className="h-5 w-5 text-green-500" />
        </div>
        <div>
            <div className="text-xs font-bold text-green-600">Garantia de reembolso de 7 dias</div>
            <div className="text-[10px] text-muted-foreground">Se não receber, devolvemos 100% do valor</div>
        </div>
    </motion.div>
);
