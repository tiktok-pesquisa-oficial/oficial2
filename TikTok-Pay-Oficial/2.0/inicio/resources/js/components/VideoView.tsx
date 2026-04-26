import TikTokLogo from '@/../components/TikTokLogo';
import { motion, Variants } from 'framer-motion';
import { LockOpen } from 'lucide-react';
import { TOTAL_REWARD } from './QuizData';
import {
    BalanceTimer,
    GuaranteeBadge,
    RecentWithdrawals,
} from './TrustElements';

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants: Variants = {
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

interface VideoViewProps {
    timerEnd?: number;
    finalBalance?: number;
    onComplete: () => void;
}

export const VideoView = ({ timerEnd, finalBalance = TOTAL_REWARD, onComplete }: VideoViewProps) => {
    const handleUnlock = () => {
        onComplete();
    };

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
                    ⚡ Assista o vídeo abaixo para liberar seu saque e acesso vitalício
                </motion.div>

                <motion.div
                    className="p-5"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="mb-5 flex items-center justify-between">
                        <TikTokLogo />
                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            className="rounded-2xl border border-primary/20 bg-accent/80 py-2.5 px-4 text-center"
                        >
                            <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                Saldo
                            </div>
                            <div className="text-lg font-black tabular-nums text-primary">
                                R$ {finalBalance.toFixed(2)}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-5 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                    <motion.div variants={itemVariants} className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                            <LockOpen className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-lg font-black leading-tight text-primary uppercase">
                                DESBLOQUEIO DE SALDO
                            </h1>
                            <p className="text-xs text-muted-foreground">
                                Veja como liberar seu saque assistindo ao vídeo.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="group relative mb-5 overflow-hidden rounded-2xl shadow-xl shadow-primary/10"
                    >
                        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <video
                            controls
                            autoPlay
                            muted
                            preload="metadata"
                            playsInline
                            className="aspect-[9/16] w-full bg-foreground"
                        >
                            <source src="/media/vsltiktok.mp4" type="video/mp4" />
                            Seu navegador não suporta a reprodução de vídeo.
                        </video>
                    </motion.div>

                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleUnlock}
                        className="mb-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-base font-bold text-primary-foreground shadow-xl shadow-primary/25 transition-all"
                    >
                        <LockOpen className="h-4 w-4" />
                        DESBLOQUEAR AGORA
                    </motion.button>

                    <BalanceTimer timerEnd={timerEnd} />
                    <GuaranteeBadge />
                    <RecentWithdrawals />

                    <div className="text-center text-[11px] text-muted-foreground">
                        Acesso vitalício garantido após desbloqueio
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};
