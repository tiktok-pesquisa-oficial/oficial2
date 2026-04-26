import TikTokLogo from '@/../components/TikTokLogo';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronRight,
    CircleCheckBig,
    Gift,
    Trophy,
    Volume2,
    VolumeX,
    Sparkles,
    DollarSign
} from 'lucide-react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { QUESTIONS, generateRewards, TOTAL_REWARD } from './QuizData';
import {
    PeopleAnsweredToday,
    QuizProgressWarning,
    TrustBadges,
    RecentWithdrawals,
} from './TrustElements';


const playCoinSound = (audioCtx: AudioContext) => {
    const r = audioCtx.currentTime;
    const sampleRate = audioCtx.sampleRate;

    const buffer = audioCtx.createBuffer(1, sampleRate * 0.04, sampleRate);
    const data = buffer.getChannelData(0);
    for (let p = 0; p < data.length; p++) {
        data[p] = (Math.random() * 2 - 1) * 0.4;
    }

    const noiseSource = audioCtx.createBufferSource();
    noiseSource.buffer = buffer;
    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.3, r);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, r + 0.05);

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 3000;
    filter.Q.value = 2;

    noiseSource.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);
    noiseSource.start(r);

    const thudOsc = audioCtx.createOscillator();
    const thudGain = audioCtx.createGain();
    thudOsc.type = 'sine';
    thudOsc.frequency.setValueAtTime(150, r + 0.03);
    thudOsc.frequency.exponentialRampToValueAtTime(60, r + 0.12);
    thudGain.gain.setValueAtTime(0.2, r + 0.03);
    thudGain.gain.exponentialRampToValueAtTime(0.001, r + 0.12);
    thudOsc.connect(thudGain);
    thudGain.connect(audioCtx.destination);
    thudOsc.start(r + 0.03);
    thudOsc.stop(r + 0.15);

    [2637, 3520].forEach((p) => {
        const hOsc = audioCtx.createOscillator();
        const hGain = audioCtx.createGain();
        hOsc.type = 'sine';
        hOsc.frequency.setValueAtTime(p, r + 0.08);
        hGain.gain.setValueAtTime(0.18, r + 0.08);
        hGain.gain.exponentialRampToValueAtTime(0.001, r + 0.6);
        hOsc.connect(hGain);
        hGain.connect(audioCtx.destination);
        hOsc.start(r + 0.08);
        hOsc.stop(r + 0.6);

        const harmOsc = audioCtx.createOscillator();
        const harmGain = audioCtx.createGain();
        harmOsc.type = 'sine';
        harmOsc.frequency.setValueAtTime(p * 2, r + 0.08);
        harmGain.gain.setValueAtTime(0.06, r + 0.08);
        harmGain.gain.exponentialRampToValueAtTime(0.001, r + 0.4);
        harmOsc.connect(harmGain);
        harmGain.connect(audioCtx.destination);
        harmOsc.start(r + 0.08);
        harmOsc.stop(r + 0.4);
    });

    for (let p = 0; p < 5; p++) {
        const sOsc = audioCtx.createOscillator();
        const sGain = audioCtx.createGain();
        const startTime = r + 0.15 + p * 0.04;
        sOsc.type = 'sine';
        sOsc.frequency.setValueAtTime(4000 + Math.random() * 2000, startTime);
        sOsc.frequency.exponentialRampToValueAtTime(2000, startTime + 0.03);
        sGain.gain.setValueAtTime(0.06, startTime);
        sGain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.04);
        sOsc.connect(sGain);
        sGain.connect(audioCtx.destination);
        sOsc.start(startTime);
        sOsc.stop(startTime + 0.05);
    }
};

const useAudio = () => {
    const audioCtxRef = useRef<AudioContext | null>(null);
    const [muted, setMuted] = useState(false);

    const play = useCallback(() => {
        if (muted) return;
        try {
            if (!audioCtxRef.current) {
                audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            playCoinSound(audioCtxRef.current);
        } catch (e) {
            console.error('Audio context error', e);
        }
    }, [muted]);

    return { play, muted, setMuted };
};

const useLocation = () => {
    const [location, setLocation] = useState({
        userCity: null as string | null,
        loaded: false,
    });

    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then((res) => res.json())
            .then((data) => {
                setLocation({ userCity: data.city || null, loaded: true });
            })
            .catch(() => setLocation({ userCity: null, loaded: true }));
    }, []);

    return location;
};


const ConfettiCanvas = ({ active }: { active: boolean }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!active || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const pieces: any[] = [];
        for (let i = 0; i < 50; i++) {
            pieces.push({
                x: Math.random() * canvas.width,
                y: Math.random() * -canvas.height,
                w: 8,
                h: 6,
                color: ['#ff0050', '#00f2ea', '#ffffff', '#ffbd00'][Math.floor(Math.random() * 4)],
                speed: 2 + Math.random() * 3,
                rotation: Math.random() * 360,
            });
        }

        let animationFrame: number;
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pieces.forEach((p) => {
                p.y += p.speed;
                p.rotation += 2;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            });
            animationFrame = requestAnimationFrame(render);
        };

        render();
        return () => cancelAnimationFrame(animationFrame);
    }, [active]);

    return active ? (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-[9999]"
            style={{ width: '100vw', height: '100vh' }}
        />
    ) : null;
};

const RewardModal = ({
    open,
    reward,
    onContinue,
}: {
    open: boolean;
    reward: number;
    onContinue: () => void;
}) => {
    const [displayVal, setDisplayVal] = useState(0);

    useEffect(() => {
        if (open) {
            let start = 0;
            const duration = 800;
            const startTime = performance.now();

            const animate = (now: number) => {
                const progress = Math.min((now - startTime) / duration, 1);
                setDisplayVal(progress * reward);
                if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
        } else {
            setDisplayVal(0);
        }
    }, [open, reward]);

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-foreground/50 backdrop-blur-sm">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="relative w-[85%] max-w-[380px] overflow-hidden rounded-3xl border border-border/20 bg-card p-8 text-center shadow-2xl"
                    >
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-reward/10">
                            <Gift className="h-8 w-8 text-reward" />
                        </div>
                        <div className="mb-1 text-lg font-bold text-reward">Nova recompensa!</div>
                        <div className="mb-2 text-sm text-muted-foreground">Você ganhou</div>
                        <div className="my-4 text-5xl font-black tabular-nums text-reward">
                            R${displayVal.toFixed(2)}
                        </div>
                        <div className="mb-6 text-sm leading-relaxed text-muted-foreground">
                            Responda mais pesquisas para ganhar até R$850
                        </div>
                        <button
                            onClick={onContinue}
                            className="w-full rounded-2xl bg-foreground py-3.5 text-base font-bold text-background transition-all hover:shadow-lg"
                        >
                            Continuar recebendo
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const FinalRewardModal = ({ open, onReceive }: { open: boolean; onReceive: () => void }) => {
    const [displayVal, setDisplayVal] = useState(0);

    useEffect(() => {
        if (open) {
            let start = 0;
            const duration = 1500;
            const startTime = performance.now();
            const animate = (now: number) => {
                const progress = Math.min((now - startTime) / duration, 1);
                setDisplayVal(progress * TOTAL_REWARD);
                if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
        }
    }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-foreground/60 backdrop-blur-md">
                    <ConfettiCanvas active={open} />
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="relative w-[90%] max-w-[360px] overflow-hidden rounded-3xl border border-primary-foreground/10 bg-gradient-to-br from-primary via-primary to-primary/80 p-8 text-center shadow-2xl shadow-primary/40"
                    >
                        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-foreground/15">
                            <Trophy className="h-10 w-10 text-gold" />
                        </div>
                        <div className="mb-1 text-lg font-bold text-primary-foreground/80">
                            Parabéns! 🎉
                        </div>
                        <div className="mb-2 text-xl font-bold text-primary-foreground">
                            Você completou o quiz e ganhou
                        </div>
                        <div className="my-5 text-5xl font-black tabular-nums text-primary-foreground drop-shadow-lg">
                            R${displayVal.toFixed(2)}
                        </div>
                        <div className="mb-8 text-base text-primary-foreground/70">
                            Obrigado por participar da nossa pesquisa!
                        </div>
                        <button
                            onClick={onReceive}
                            className="w-full rounded-2xl bg-primary-foreground py-4 px-8 text-base font-bold text-foreground transition-all hover:shadow-xl"
                        >
                            Receber recompensa
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};



const WithdrawalNotification = () => {
    const [notifications, setNotifications] = useState<any[]>([]);
    const names = ['Maria', 'João', 'Fernanda', 'Lucas', 'Camila', 'Rafael'];
    const cities = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Goiânia'];

    const showNotification = useCallback(() => {
        const id = Date.now();
        const name = names[Math.floor(Math.random() * names.length)];
        const city = cities[Math.floor(Math.random() * cities.length)];
        const amount = (750 + Math.random() * 230).toFixed(2).replace('.', ',');

        const newNotif = { id, name, city, amount };
        setNotifications((prev) => [...prev.slice(-1), newNotif]);

        setTimeout(() => {
            setNotifications((prev) => prev.filter((n) => n.id !== id));
        }, 4000);
    }, []);

    useEffect(() => {
        showNotification();
        const interval = setInterval(showNotification, 8000 + Math.random() * 5000);
        return () => clearInterval(interval);
    }, [showNotification]);

    return (
        <div className="fixed right-4 top-4 z-[10000] flex flex-col gap-2 max-w-[280px]">
            <AnimatePresence>
                {notifications.map((n) => (
                    <motion.div
                        key={n.id}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 300, opacity: 0 }}
                        className="rounded-2xl border border-border/40 bg-card p-3 shadow-xl"
                    >
                        <div className="flex items-start gap-2.5">
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-reward/10">
                                <DollarSign className="h-4 w-4 text-reward" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-reward">Saque Realizado!</div>
                                <div className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                                    {n.name} de {n.city} sacou R$ {n.amount}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export const QuizView = ({ onComplete }: { onComplete: (val: number) => void }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [totalBalance, setTotalBalance] = useState(0);
    const [rewards] = useState(() => generateRewards());
    const [showRewardModal, setShowRewardModal] = useState(false);
    const [lastReward, setLastReward] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const audio = useAudio();

    const currentQuestion = QUESTIONS[Math.min(currentStep, QUESTIONS.length - 1)];
    const progress = (currentStep / QUESTIONS.length) * 100;

    const handleNext = () => {
        if (selectedOption === null) return;
        const reward = rewards[currentStep];
        setLastReward(reward);
        setTotalBalance((prev) => prev + reward);
        audio.play();
        setShowRewardModal(true);
    };

    const handleContinue = () => {
        setShowRewardModal(false);
        setSelectedOption(null);
        if (currentStep + 1 < QUESTIONS.length) {
            setCurrentStep((prev) => prev + 1);
        } else {
            setQuizFinished(true);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-background p-0 sm:p-5">
            <WithdrawalNotification />
            <div className="flex min-h-[600px] w-full max-w-[520px] flex-col overflow-hidden border border-border/40 bg-card shadow-2xl shadow-foreground/5 sm:rounded-3xl">
                <div className="flex items-center justify-between border-b border-border/40 bg-card px-5 py-4">
                    <TikTokLogo />
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => audio.setMuted(!audio.muted)}
                            className="flex h-8 w-8 items-center justify-center rounded-xl text-muted-foreground transition-all hover:bg-accent hover:text-foreground"
                        >
                            {audio.muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                        </button>
                        <div className="flex items-center gap-1.5 rounded-2xl bg-accent/80 px-4 py-2 text-sm font-bold text-accent-foreground/80">
                            <span className="text-xs opacity-60">R$</span>
                            <span className="text-foreground">{totalBalance.toFixed(2)}</span>
                        </div>
                        <button
                            onClick={() => setShowAlert(true)}
                            className="rounded-2xl bg-primary px-4 py-2 text-xs font-bold tracking-wider text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
                        >
                            SACAR
                        </button>
                    </div>
                </div>

                <div className="h-1 w-full overflow-hidden bg-muted/40">
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/70"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                <div className="flex flex-1 flex-col px-6 pb-4">
                    <div className="py-5">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                Pergunta {currentStep + 1} de {QUESTIONS.length}
                            </span>
                            <div className="flex gap-1">
                                {QUESTIONS.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                            i < currentStep
                                                ? 'bg-primary'
                                                : i === currentStep
                                                  ? 'scale-125 bg-primary ring-2 ring-primary/30'
                                                  : 'bg-muted'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.25 }}
                            className="flex flex-1 flex-col"
                        >
                            <QuizProgressWarning currentQ={currentStep} total={QUESTIONS.length} />
                            <h2 className="my-4 text-center text-xl font-bold leading-snug">
                                {currentQuestion.question}
                            </h2>

                            <div className="mb-5 flex flex-col gap-2.5">
                                {currentQuestion.options.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedOption(idx)}
                                        className={`flex cursor-pointer items-center rounded-2xl border-2 p-3.5 px-4 text-left transition-all duration-200 ${
                                            selectedOption === idx
                                                ? 'border-primary bg-primary/5 ring-1 ring-primary/20 shadow-lg shadow-primary/10'
                                                : 'border-border/50 hover:border-primary/30 hover:bg-accent/40'
                                        }`}
                                    >
                                        <div className="flex flex-1 items-center gap-3">
                                            <span className="text-2xl">{opt.emoji}</span>
                                            <span
                                                className={`text-[15px] font-medium ${
                                                    selectedOption === idx ? 'text-foreground' : 'text-foreground/80'
                                                }`}
                                            >
                                                {opt.text}
                                            </span>
                                        </div>
                                        <div
                                            className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                                                selectedOption === idx ? 'border-primary bg-primary' : 'border-muted-foreground/25'
                                            }`}
                                        >
                                            {selectedOption === idx && (
                                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                                    <path
                                                        d="M1 4L3.5 6.5L9 1"
                                                        stroke="white"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={handleNext}
                                disabled={selectedOption === null}
                                className={`mt-auto flex items-center justify-center gap-2 rounded-2xl py-3.5 text-base font-bold transition-all duration-300 ${
                                    selectedOption !== null
                                        ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/25'
                                        : 'bg-muted text-muted-foreground cursor-not-allowed'
                                }`}
                            >
                                Continuar
                                <ChevronRight className="h-4 w-4" />
                            </button>

                            <PeopleAnsweredToday />
                            <p className="mb-3 mt-2 flex items-center justify-center gap-1.5 text-center text-sm font-medium text-reward">
                                <Sparkles className="h-3.5 w-3.5" />
                                Concorra a um bônus adicional
                            </p>
                            <RecentWithdrawals />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="border-t border-border/30 bg-muted/10">
                    <TrustBadges />
                    <div className="px-4 pb-3 text-center text-[11px] text-muted-foreground">
                        Ao participar das atividades de recompensa, você concorda com nossos{' '}
                        <a href="#" className="font-medium text-primary hover:underline">
                            Termos
                        </a>{' '}
                        e{' '}
                        <a href="#" className="font-medium text-primary hover:underline">
                            Condições
                        </a>
                        .
                    </div>
                </div>
            </div>

            <RewardModal open={showRewardModal} reward={lastReward} onContinue={handleContinue} />
            <FinalRewardModal open={quizFinished} onReceive={() => onComplete(totalBalance)} />

            <AnimatePresence>
                {showAlert && (
                    <div
                        className="fixed inset-0 z-[99999] flex items-center justify-center bg-foreground/40 backdrop-blur-sm"
                        onClick={() => setShowAlert(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-[88%] max-w-[340px] overflow-hidden rounded-3xl border border-border/30 bg-card shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between bg-gradient-to-r from-primary to-primary/80 p-4 font-bold text-primary-foreground">
                                <span className="flex items-center gap-2">⚠️ Atenção</span>
                                <button
                                    onClick={() => setShowAlert(false)}
                                    className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-foreground/20 text-lg hover:bg-primary-foreground/30"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="p-6 text-center">
                                <p className="text-[15px] leading-relaxed text-foreground/80">
                                    Não é possível realizar o saque do valor ainda. É necessário prosseguir com a
                                    pesquisa.
                                </p>
                                <button
                                    onClick={() => setShowAlert(false)}
                                    className="mt-4 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
                                >
                                    Entendi
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
