import {c as i, j as e, m as a} from "./index-CVEK021F.js";
import {T as n} from "./TikTokLogo-COOyS_hv.js";
import {d, G as l, c, e as m} from "./TrustElements-cm1JSaYm.js";
import {S as x} from "./users-Dr0-zyS0.js";
import {C as h} from "./chevron-right-BHOMC3Eh.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p = i("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u = i("RefreshCw", [["path", {
    d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
    key: "v9h5vc"
}], ["path", {
    d: "M21 3v5h-5",
    key: "1q7to0"
}], ["path", {
    d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
    key: "3uifl3"
}], ["path", {
    d: "M8 16H3v5",
    key: "1cv678"
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
  , g = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: .07
        }
    }
}
  , f = [{
    icon: m,
    title: "Taxa obrigatória",
    desc: "Obrigatório para realizar o saque dos seus ganhos."
}, {
    icon: u,
    title: "Valor reembolsável",
    desc: "Você recebe os R$ 19,90 de volta após finalizar."
}, {
    icon: p,
    title: "Garantia de segurança",
    desc: "Seu pagamento é seguro e protegido por Banco Central do Brasil."
}]
  , N = ({onSubmit: o}) => e.jsx("div", {
    className: "min-h-screen flex justify-center items-center bg-gradient-to-br from-background via-background to-accent/30 p-0 sm:p-5",
    children: e.jsx(a.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "w-full max-w-[520px] bg-card rounded-none sm:rounded-3xl shadow-2xl shadow-foreground/5 overflow-hidden border border-border/40",
        children: e.jsxs(a.div, {
            className: "p-6",
            variants: g,
            initial: "hidden",
            animate: "visible",
            children: [e.jsx(a.div, {
                variants: t,
                className: "flex justify-center my-6",
                children: e.jsx(n, {})
            }), e.jsx(d, {}), e.jsxs(a.div, {
                variants: t,
                className: "flex justify-center items-center gap-3 mb-5",
                children: [e.jsx("div", {
                    className: "w-12 h-12 bg-reward/10 rounded-2xl flex items-center justify-center",
                    children: e.jsx(x, {
                        className: "w-6 h-6 text-reward"
                    })
                }), e.jsx("h1", {
                    className: "text-xl font-bold",
                    children: "Taxa de Cadastro"
                })]
            }), e.jsxs(a.p, {
                variants: t,
                className: "text-muted-foreground my-4 leading-relaxed text-[15px] text-center max-w-[400px] mx-auto",
                children: ["Seguindo as diretrizes do Banco Central do Brasil, solicitamos uma confirmação de identidade de ", e.jsx("span", {
                    className: "font-bold text-foreground",
                    children: "R$ 19,90"
                }), " para garantir a autenticidade dos participantes."]
            }), e.jsx(a.p, {
                variants: t,
                className: "text-muted-foreground mb-4 text-sm text-center",
                children: "O dinheiro será totalmente reembolsado entre 1 a 5 minutos junto ao saldo acumulado."
            }), e.jsx(l, {}), e.jsx(a.div, {
                variants: t,
                className: "space-y-3 mb-8",
                children: f.map( (s, r) => e.jsxs(a.div, {
                    initial: {
                        opacity: 0,
                        x: -16
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        delay: .35 + r * .1
                    },
                    whileHover: {
                        scale: 1.01,
                        x: 3
                    },
                    className: "flex items-center gap-4 text-left p-4 bg-muted/40 rounded-2xl border border-border/30 hover:shadow-md hover:bg-muted/60 transition-all",
                    children: [e.jsx("div", {
                        className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0",
                        children: e.jsx(s.icon, {
                            className: "w-5 h-5 text-primary"
                        })
                    }), e.jsxs("div", {
                        children: [e.jsx("h3", {
                            className: "text-[14px] font-bold mb-0.5",
                            children: s.title
                        }), e.jsx("p", {
                            className: "text-xs text-muted-foreground leading-relaxed",
                            children: s.desc
                        })]
                    })]
                }, r))
            }), e.jsxs(a.button, {
                variants: t,
                whileHover: {
                    scale: 1.02,
                    y: -1
                },
                whileTap: {
                    scale: .98
                },
                onClick: o,
                className: "w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold text-base uppercase shadow-xl shadow-primary/25 transition-all btn-glow flex items-center justify-center gap-2",
                children: ["Realizar Saque", e.jsx(h, {
                    className: "w-4 h-4"
                })]
            }), e.jsx(c, {}), e.jsx("div", {
                className: "mt-3 text-[11px] text-muted-foreground text-center",
                children: "Pagamento seguro e protegido"
            })]
        })
    })
});
export {N as default};
