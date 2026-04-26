import {c as n, j as e, m as a} from "./index-CVEK021F.js";
import {T as d} from "./TikTokLogo-COOyS_hv.js";
import {T as c} from "./quiz-data-Br8uF9yo.js";
import {V as l, G as m, c as p} from "./TrustElements-cm1JSaYm.js";
import "./users-Dr0-zyS0.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i = n("LockOpen", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 9.9-1",
    key: "1mm8w8"
}]])
  , t = {
    hidden: {
        opacity: 0,
        y: 12
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .35,
            ease: "easeOut"
        }
    }
}
  , x = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: .08
        }
    }
}
  , b = ({timerEnd: o}) => e.jsx("div", {
    className: "min-h-screen flex justify-center items-center bg-gradient-to-br from-background via-background to-accent/30 p-0 sm:p-5",
    children: e.jsxs(a.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "w-full max-w-[520px] bg-card rounded-none sm:rounded-3xl shadow-2xl shadow-foreground/5 overflow-hidden border border-border/40",
        children: [e.jsx(a.div, {
            initial: {
                y: -30,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1
            },
            className: "bg-gradient-to-r from-primary via-primary to-primary/80 text-primary-foreground p-3.5 text-center text-xs font-bold tracking-wide uppercase",
            children: "⚡ Assista o vídeo abaixo para liberar seu saque e acesso vitalício"
        }), e.jsxs(a.div, {
            className: "p-5",
            variants: x,
            initial: "hidden",
            animate: "visible",
            children: [e.jsxs(a.div, {
                variants: t,
                className: "flex justify-between items-center mb-5",
                children: [e.jsx(d, {}), e.jsxs(a.div, {
                    whileHover: {
                        scale: 1.04
                    },
                    className: "bg-accent/80 rounded-2xl py-2.5 px-4 text-center border border-primary/20",
                    children: [e.jsx("div", {
                        className: "text-[10px] font-bold text-muted-foreground tracking-wider uppercase",
                        children: "Saldo"
                    }), e.jsxs("div", {
                        className: "text-lg font-black text-primary tabular-nums",
                        children: ["R$ ", c]
                    })]
                })]
            }), e.jsx(a.div, {
                variants: t,
                className: "h-px bg-gradient-to-r from-transparent via-border to-transparent mb-5"
            }), e.jsxs(a.div, {
                variants: t,
                className: "flex items-center gap-3 mb-4",
                children: [e.jsx("div", {
                    className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",
                    children: e.jsx(i, {
                        className: "w-5 h-5 text-primary"
                    })
                }), e.jsxs("div", {
                    children: [e.jsx("h1", {
                        className: "text-primary font-black text-lg leading-tight",
                        children: "DESBLOQUEIO DE SALDO"
                    }), e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Veja como liberar seu saque assistindo ao vídeo."
                    })]
                })]
            }), e.jsxs(a.div, {
                variants: t,
                className: "rounded-2xl overflow-hidden shadow-xl shadow-primary/10 mb-5 relative group",
                children: [e.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                }), e.jsxs("video", {
                    controls: !0,
                    autoPlay: !0,
                    muted: !0,
                    preload: "metadata",
                    playsInline: !0,
                    className: "w-full aspect-[9/16] bg-foreground",
                    children: [e.jsx("source", {
                        src: "/media/vsltiktok.mp4",
                        type: "video/mp4"
                    }), "Seu navegador não suporta a reprodução de vídeo."]
                })]
            }), e.jsxs(a.button, {
                variants: t,
                whileHover: {
                    scale: 1.03,
                    y: -2
                },
                whileTap: {
                    scale: .97
                },
                onClick: () => {
                    const r = window.location.search
                      , s = "https://go.zeroonepay.com.br/nog3rl5gqg";
                    window.location.href = r ? `${s}${r}` : s
                }
                ,
                className: "w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold text-base shadow-xl shadow-primary/25 transition-all flex items-center justify-center gap-2 mb-4",
                children: [e.jsx(i, {
                    className: "w-4 h-4"
                }), "DESBLOQUEAR AGORA"]
            }), e.jsx(l, {
                timerEnd: o
            }), e.jsx(m, {}), e.jsx(p, {}), e.jsx("div", {
                className: "text-center text-[11px] text-muted-foreground",
                children: "Acesso vitalício garantido após desbloqueio"
            })]
        })]
    })
});
export {b as default};
