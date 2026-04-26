(function() {
    const c = document.createElement("link").relList;
    if (c && c.supports && c.supports("modulepreload"))
        return;
    for (const d of document.querySelectorAll('link[rel="modulepreload"]'))
        f(d);
    new MutationObserver(d => {
        for (const y of d)
            if (y.type === "childList")
                for (const v of y.addedNodes)
                    v.tagName === "LINK" && v.rel === "modulepreload" && f(v)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(d) {
        const y = {};
        return d.integrity && (y.integrity = d.integrity),
        d.referrerPolicy && (y.referrerPolicy = d.referrerPolicy),
        d.crossOrigin === "use-credentials" ? y.credentials = "include" : d.crossOrigin === "anonymous" ? y.credentials = "omit" : y.credentials = "same-origin",
        y
    }
    function f(d) {
        if (d.ep)
            return;
        d.ep = !0;
        const y = s(d);
        fetch(d.href, y)
    }
}
)();
function Qf(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
}
var Df = {
    exports: {}
}
  , Hn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zd;
function vy() {
    if (Zd)
        return Hn;
    Zd = 1;
    var i = Symbol.for("react.transitional.element")
      , c = Symbol.for("react.fragment");
    function s(f, d, y) {
        var v = null;
        if (y !== void 0 && (v = "" + y),
        d.key !== void 0 && (v = "" + d.key),
        "key"in d) {
            y = {};
            for (var R in d)
                R !== "key" && (y[R] = d[R])
        } else
            y = d;
        return d = y.ref,
        {
            $$typeof: i,
            type: f,
            key: v,
            ref: d !== void 0 ? d : null,
            props: y
        }
    }
    return Hn.Fragment = c,
    Hn.jsx = s,
    Hn.jsxs = s,
    Hn
}
var Ld;
function py() {
    return Ld || (Ld = 1,
    Df.exports = vy()),
    Df.exports
}
var k = py()
  , _f = {
    exports: {}
}
  , jn = {}
  , Nf = {
    exports: {}
}
  , qf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qd;
function gy() {
    return Qd || (Qd = 1,
    function(i) {
        function c(g, M) {
            var q = g.length;
            g.push(M);
            t: for (; 0 < q; ) {
                var K = q - 1 >>> 1
                  , h = g[K];
                if (0 < d(h, M))
                    g[K] = M,
                    g[q] = h,
                    q = K;
                else
                    break t
            }
        }
        function s(g) {
            return g.length === 0 ? null : g[0]
        }
        function f(g) {
            if (g.length === 0)
                return null;
            var M = g[0]
              , q = g.pop();
            if (q !== M) {
                g[0] = q;
                t: for (var K = 0, h = g.length, D = h >>> 1; K < D; ) {
                    var w = 2 * (K + 1) - 1
                      , j = g[w]
                      , Z = w + 1
                      , et = g[Z];
                    if (0 > d(j, q))
                        Z < h && 0 > d(et, j) ? (g[K] = et,
                        g[Z] = q,
                        K = Z) : (g[K] = j,
                        g[w] = q,
                        K = w);
                    else if (Z < h && 0 > d(et, q))
                        g[K] = et,
                        g[Z] = q,
                        K = Z;
                    else
                        break t
                }
            }
            return M
        }
        function d(g, M) {
            var q = g.sortIndex - M.sortIndex;
            return q !== 0 ? q : g.id - M.id
        }
        if (i.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var y = performance;
            i.unstable_now = function() {
                return y.now()
            }
        } else {
            var v = Date
              , R = v.now();
            i.unstable_now = function() {
                return v.now() - R
            }
        }
        var _ = []
          , S = []
          , U = 1
          , H = null
          , Y = 3
          , P = !1
          , V = !1
          , X = !1
          , G = !1
          , dt = typeof setTimeout == "function" ? setTimeout : null
          , st = typeof clearTimeout == "function" ? clearTimeout : null
          , at = typeof setImmediate < "u" ? setImmediate : null;
        function At(g) {
            for (var M = s(S); M !== null; ) {
                if (M.callback === null)
                    f(S);
                else if (M.startTime <= g)
                    f(S),
                    M.sortIndex = M.expirationTime,
                    c(_, M);
                else
                    break;
                M = s(S)
            }
        }
        function W(g) {
            if (X = !1,
            At(g),
            !V)
                if (s(_) !== null)
                    V = !0,
                    ht || (ht = !0,
                    Mt());
                else {
                    var M = s(S);
                    M !== null && B(W, M.startTime - g)
                }
        }
        var ht = !1
          , Ut = -1
          , xt = 5
          , Bt = -1;
        function St() {
            return G ? !0 : !(i.unstable_now() - Bt < xt)
        }
        function ut() {
            if (G = !1,
            ht) {
                var g = i.unstable_now();
                Bt = g;
                var M = !0;
                try {
                    t: {
                        V = !1,
                        X && (X = !1,
                        st(Ut),
                        Ut = -1),
                        P = !0;
                        var q = Y;
                        try {
                            e: {
                                for (At(g),
                                H = s(_); H !== null && !(H.expirationTime > g && St()); ) {
                                    var K = H.callback;
                                    if (typeof K == "function") {
                                        H.callback = null,
                                        Y = H.priorityLevel;
                                        var h = K(H.expirationTime <= g);
                                        if (g = i.unstable_now(),
                                        typeof h == "function") {
                                            H.callback = h,
                                            At(g),
                                            M = !0;
                                            break e
                                        }
                                        H === s(_) && f(_),
                                        At(g)
                                    } else
                                        f(_);
                                    H = s(_)
                                }
                                if (H !== null)
                                    M = !0;
                                else {
                                    var D = s(S);
                                    D !== null && B(W, D.startTime - g),
                                    M = !1
                                }
                            }
                            break t
                        } finally {
                            H = null,
                            Y = q,
                            P = !1
                        }
                        M = void 0
                    }
                } finally {
                    M ? Mt() : ht = !1
                }
            }
        }
        var Mt;
        if (typeof at == "function")
            Mt = function() {
                at(ut)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Dt = new MessageChannel
              , J = Dt.port2;
            Dt.port1.onmessage = ut,
            Mt = function() {
                J.postMessage(null)
            }
        } else
            Mt = function() {
                dt(ut, 0)
            }
            ;
        function B(g, M) {
            Ut = dt(function() {
                g(i.unstable_now())
            }, M)
        }
        i.unstable_IdlePriority = 5,
        i.unstable_ImmediatePriority = 1,
        i.unstable_LowPriority = 4,
        i.unstable_NormalPriority = 3,
        i.unstable_Profiling = null,
        i.unstable_UserBlockingPriority = 2,
        i.unstable_cancelCallback = function(g) {
            g.callback = null
        }
        ,
        i.unstable_forceFrameRate = function(g) {
            0 > g || 125 < g ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : xt = 0 < g ? Math.floor(1e3 / g) : 5
        }
        ,
        i.unstable_getCurrentPriorityLevel = function() {
            return Y
        }
        ,
        i.unstable_next = function(g) {
            switch (Y) {
            case 1:
            case 2:
            case 3:
                var M = 3;
                break;
            default:
                M = Y
            }
            var q = Y;
            Y = M;
            try {
                return g()
            } finally {
                Y = q
            }
        }
        ,
        i.unstable_requestPaint = function() {
            G = !0
        }
        ,
        i.unstable_runWithPriority = function(g, M) {
            switch (g) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                g = 3
            }
            var q = Y;
            Y = g;
            try {
                return M()
            } finally {
                Y = q
            }
        }
        ,
        i.unstable_scheduleCallback = function(g, M, q) {
            var K = i.unstable_now();
            switch (typeof q == "object" && q !== null ? (q = q.delay,
            q = typeof q == "number" && 0 < q ? K + q : K) : q = K,
            g) {
            case 1:
                var h = -1;
                break;
            case 2:
                h = 250;
                break;
            case 5:
                h = 1073741823;
                break;
            case 4:
                h = 1e4;
                break;
            default:
                h = 5e3
            }
            return h = q + h,
            g = {
                id: U++,
                callback: M,
                priorityLevel: g,
                startTime: q,
                expirationTime: h,
                sortIndex: -1
            },
            q > K ? (g.sortIndex = q,
            c(S, g),
            s(_) === null && g === s(S) && (X ? (st(Ut),
            Ut = -1) : X = !0,
            B(W, q - K))) : (g.sortIndex = h,
            c(_, g),
            V || P || (V = !0,
            ht || (ht = !0,
            Mt()))),
            g
        }
        ,
        i.unstable_shouldYield = St,
        i.unstable_wrapCallback = function(g) {
            var M = Y;
            return function() {
                var q = Y;
                Y = M;
                try {
                    return g.apply(this, arguments)
                } finally {
                    Y = q
                }
            }
        }
    }(qf)),
    qf
}
var Jd;
function Sy() {
    return Jd || (Jd = 1,
    Nf.exports = gy()),
    Nf.exports
}
var zf = {
    exports: {}
}
  , nt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wd;
function by() {
    if (Wd)
        return nt;
    Wd = 1;
    var i = Symbol.for("react.transitional.element")
      , c = Symbol.for("react.portal")
      , s = Symbol.for("react.fragment")
      , f = Symbol.for("react.strict_mode")
      , d = Symbol.for("react.profiler")
      , y = Symbol.for("react.consumer")
      , v = Symbol.for("react.context")
      , R = Symbol.for("react.forward_ref")
      , _ = Symbol.for("react.suspense")
      , S = Symbol.for("react.memo")
      , U = Symbol.for("react.lazy")
      , H = Symbol.iterator;
    function Y(h) {
        return h === null || typeof h != "object" ? null : (h = H && h[H] || h["@@iterator"],
        typeof h == "function" ? h : null)
    }
    var P = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , V = Object.assign
      , X = {};
    function G(h, D, w) {
        this.props = h,
        this.context = D,
        this.refs = X,
        this.updater = w || P
    }
    G.prototype.isReactComponent = {},
    G.prototype.setState = function(h, D) {
        if (typeof h != "object" && typeof h != "function" && h != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, D, "setState")
    }
    ,
    G.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate")
    }
    ;
    function dt() {}
    dt.prototype = G.prototype;
    function st(h, D, w) {
        this.props = h,
        this.context = D,
        this.refs = X,
        this.updater = w || P
    }
    var at = st.prototype = new dt;
    at.constructor = st,
    V(at, G.prototype),
    at.isPureReactComponent = !0;
    var At = Array.isArray
      , W = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , ht = Object.prototype.hasOwnProperty;
    function Ut(h, D, w, j, Z, et) {
        return w = et.ref,
        {
            $$typeof: i,
            type: h,
            key: D,
            ref: w !== void 0 ? w : null,
            props: et
        }
    }
    function xt(h, D) {
        return Ut(h.type, D, void 0, void 0, void 0, h.props)
    }
    function Bt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === i
    }
    function St(h) {
        var D = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + h.replace(/[=:]/g, function(w) {
            return D[w]
        })
    }
    var ut = /\/+/g;
    function Mt(h, D) {
        return typeof h == "object" && h !== null && h.key != null ? St("" + h.key) : D.toString(36)
    }
    function Dt() {}
    function J(h) {
        switch (h.status) {
        case "fulfilled":
            return h.value;
        case "rejected":
            throw h.reason;
        default:
            switch (typeof h.status == "string" ? h.then(Dt, Dt) : (h.status = "pending",
            h.then(function(D) {
                h.status === "pending" && (h.status = "fulfilled",
                h.value = D)
            }, function(D) {
                h.status === "pending" && (h.status = "rejected",
                h.reason = D)
            })),
            h.status) {
            case "fulfilled":
                return h.value;
            case "rejected":
                throw h.reason
            }
        }
        throw h
    }
    function B(h, D, w, j, Z) {
        var et = typeof h;
        (et === "undefined" || et === "boolean") && (h = null);
        var $ = !1;
        if (h === null)
            $ = !0;
        else
            switch (et) {
            case "bigint":
            case "string":
            case "number":
                $ = !0;
                break;
            case "object":
                switch (h.$$typeof) {
                case i:
                case c:
                    $ = !0;
                    break;
                case U:
                    return $ = h._init,
                    B($(h._payload), D, w, j, Z)
                }
            }
        if ($)
            return Z = Z(h),
            $ = j === "" ? "." + Mt(h, 0) : j,
            At(Z) ? (w = "",
            $ != null && (w = $.replace(ut, "$&/") + "/"),
            B(Z, D, w, "", function(Pt) {
                return Pt
            })) : Z != null && (Bt(Z) && (Z = xt(Z, w + (Z.key == null || h && h.key === Z.key ? "" : ("" + Z.key).replace(ut, "$&/") + "/") + $)),
            D.push(Z)),
            1;
        $ = 0;
        var Ct = j === "" ? "." : j + ":";
        if (At(h))
            for (var vt = 0; vt < h.length; vt++)
                j = h[vt],
                et = Ct + Mt(j, vt),
                $ += B(j, D, w, et, Z);
        else if (vt = Y(h),
        typeof vt == "function")
            for (h = vt.call(h),
            vt = 0; !(j = h.next()).done; )
                j = j.value,
                et = Ct + Mt(j, vt++),
                $ += B(j, D, w, et, Z);
        else if (et === "object") {
            if (typeof h.then == "function")
                return B(J(h), D, w, j, Z);
            throw D = String(h),
            Error("Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead.")
        }
        return $
    }
    function g(h, D, w) {
        if (h == null)
            return h;
        var j = []
          , Z = 0;
        return B(h, j, "", "", function(et) {
            return D.call(w, et, Z++)
        }),
        j
    }
    function M(h) {
        if (h._status === -1) {
            var D = h._result;
            D = D(),
            D.then(function(w) {
                (h._status === 0 || h._status === -1) && (h._status = 1,
                h._result = w)
            }, function(w) {
                (h._status === 0 || h._status === -1) && (h._status = 2,
                h._result = w)
            }),
            h._status === -1 && (h._status = 0,
            h._result = D)
        }
        if (h._status === 1)
            return h._result.default;
        throw h._result
    }
    var q = typeof reportError == "function" ? reportError : function(h) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var D = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
                error: h
            });
            if (!window.dispatchEvent(D))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", h);
            return
        }
        console.error(h)
    }
    ;
    function K() {}
    return nt.Children = {
        map: g,
        forEach: function(h, D, w) {
            g(h, function() {
                D.apply(this, arguments)
            }, w)
        },
        count: function(h) {
            var D = 0;
            return g(h, function() {
                D++
            }),
            D
        },
        toArray: function(h) {
            return g(h, function(D) {
                return D
            }) || []
        },
        only: function(h) {
            if (!Bt(h))
                throw Error("React.Children.only expected to receive a single React element child.");
            return h
        }
    },
    nt.Component = G,
    nt.Fragment = s,
    nt.Profiler = d,
    nt.PureComponent = st,
    nt.StrictMode = f,
    nt.Suspense = _,
    nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W,
    nt.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(h) {
            return W.H.useMemoCache(h)
        }
    },
    nt.cache = function(h) {
        return function() {
            return h.apply(null, arguments)
        }
    }
    ,
    nt.cloneElement = function(h, D, w) {
        if (h == null)
            throw Error("The argument must be a React element, but you passed " + h + ".");
        var j = V({}, h.props)
          , Z = h.key
          , et = void 0;
        if (D != null)
            for ($ in D.ref !== void 0 && (et = void 0),
            D.key !== void 0 && (Z = "" + D.key),
            D)
                !ht.call(D, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && D.ref === void 0 || (j[$] = D[$]);
        var $ = arguments.length - 2;
        if ($ === 1)
            j.children = w;
        else if (1 < $) {
            for (var Ct = Array($), vt = 0; vt < $; vt++)
                Ct[vt] = arguments[vt + 2];
            j.children = Ct
        }
        return Ut(h.type, Z, void 0, void 0, et, j)
    }
    ,
    nt.createContext = function(h) {
        return h = {
            $$typeof: v,
            _currentValue: h,
            _currentValue2: h,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        h.Provider = h,
        h.Consumer = {
            $$typeof: y,
            _context: h
        },
        h
    }
    ,
    nt.createElement = function(h, D, w) {
        var j, Z = {}, et = null;
        if (D != null)
            for (j in D.key !== void 0 && (et = "" + D.key),
            D)
                ht.call(D, j) && j !== "key" && j !== "__self" && j !== "__source" && (Z[j] = D[j]);
        var $ = arguments.length - 2;
        if ($ === 1)
            Z.children = w;
        else if (1 < $) {
            for (var Ct = Array($), vt = 0; vt < $; vt++)
                Ct[vt] = arguments[vt + 2];
            Z.children = Ct
        }
        if (h && h.defaultProps)
            for (j in $ = h.defaultProps,
            $)
                Z[j] === void 0 && (Z[j] = $[j]);
        return Ut(h, et, void 0, void 0, null, Z)
    }
    ,
    nt.createRef = function() {
        return {
            current: null
        }
    }
    ,
    nt.forwardRef = function(h) {
        return {
            $$typeof: R,
            render: h
        }
    }
    ,
    nt.isValidElement = Bt,
    nt.lazy = function(h) {
        return {
            $$typeof: U,
            _payload: {
                _status: -1,
                _result: h
            },
            _init: M
        }
    }
    ,
    nt.memo = function(h, D) {
        return {
            $$typeof: S,
            type: h,
            compare: D === void 0 ? null : D
        }
    }
    ,
    nt.startTransition = function(h) {
        var D = W.T
          , w = {};
        W.T = w;
        try {
            var j = h()
              , Z = W.S;
            Z !== null && Z(w, j),
            typeof j == "object" && j !== null && typeof j.then == "function" && j.then(K, q)
        } catch (et) {
            q(et)
        } finally {
            W.T = D
        }
    }
    ,
    nt.unstable_useCacheRefresh = function() {
        return W.H.useCacheRefresh()
    }
    ,
    nt.use = function(h) {
        return W.H.use(h)
    }
    ,
    nt.useActionState = function(h, D, w) {
        return W.H.useActionState(h, D, w)
    }
    ,
    nt.useCallback = function(h, D) {
        return W.H.useCallback(h, D)
    }
    ,
    nt.useContext = function(h) {
        return W.H.useContext(h)
    }
    ,
    nt.useDebugValue = function() {}
    ,
    nt.useDeferredValue = function(h, D) {
        return W.H.useDeferredValue(h, D)
    }
    ,
    nt.useEffect = function(h, D, w) {
        var j = W.H;
        if (typeof w == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return j.useEffect(h, D)
    }
    ,
    nt.useId = function() {
        return W.H.useId()
    }
    ,
    nt.useImperativeHandle = function(h, D, w) {
        return W.H.useImperativeHandle(h, D, w)
    }
    ,
    nt.useInsertionEffect = function(h, D) {
        return W.H.useInsertionEffect(h, D)
    }
    ,
    nt.useLayoutEffect = function(h, D) {
        return W.H.useLayoutEffect(h, D)
    }
    ,
    nt.useMemo = function(h, D) {
        return W.H.useMemo(h, D)
    }
    ,
    nt.useOptimistic = function(h, D) {
        return W.H.useOptimistic(h, D)
    }
    ,
    nt.useReducer = function(h, D, w) {
        return W.H.useReducer(h, D, w)
    }
    ,
    nt.useRef = function(h) {
        return W.H.useRef(h)
    }
    ,
    nt.useState = function(h) {
        return W.H.useState(h)
    }
    ,
    nt.useSyncExternalStore = function(h, D, w) {
        return W.H.useSyncExternalStore(h, D, w)
    }
    ,
    nt.useTransition = function() {
        return W.H.useTransition()
    }
    ,
    nt.version = "19.1.0",
    nt
}
var kd;
function Jf() {
    return kd || (kd = 1,
    zf.exports = by()),
    zf.exports
}
var Cf = {
    exports: {}
}
  , ee = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $d;
function Ey() {
    if ($d)
        return ee;
    $d = 1;
    var i = Jf();
    function c(_) {
        var S = "https://react.dev/errors/" + _;
        if (1 < arguments.length) {
            S += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var U = 2; U < arguments.length; U++)
                S += "&args[]=" + encodeURIComponent(arguments[U])
        }
        return "Minified React error #" + _ + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function s() {}
    var f = {
        d: {
            f: s,
            r: function() {
                throw Error(c(522))
            },
            D: s,
            C: s,
            L: s,
            m: s,
            X: s,
            S: s,
            M: s
        },
        p: 0,
        findDOMNode: null
    }
      , d = Symbol.for("react.portal");
    function y(_, S, U) {
        var H = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: d,
            key: H == null ? null : "" + H,
            children: _,
            containerInfo: S,
            implementation: U
        }
    }
    var v = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function R(_, S) {
        if (_ === "font")
            return "";
        if (typeof S == "string")
            return S === "use-credentials" ? S : ""
    }
    return ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f,
    ee.createPortal = function(_, S) {
        var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11)
            throw Error(c(299));
        return y(_, S, null, U)
    }
    ,
    ee.flushSync = function(_) {
        var S = v.T
          , U = f.p;
        try {
            if (v.T = null,
            f.p = 2,
            _)
                return _()
        } finally {
            v.T = S,
            f.p = U,
            f.d.f()
        }
    }
    ,
    ee.preconnect = function(_, S) {
        typeof _ == "string" && (S ? (S = S.crossOrigin,
        S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null,
        f.d.C(_, S))
    }
    ,
    ee.prefetchDNS = function(_) {
        typeof _ == "string" && f.d.D(_)
    }
    ,
    ee.preinit = function(_, S) {
        if (typeof _ == "string" && S && typeof S.as == "string") {
            var U = S.as
              , H = R(U, S.crossOrigin)
              , Y = typeof S.integrity == "string" ? S.integrity : void 0
              , P = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
            U === "style" ? f.d.S(_, typeof S.precedence == "string" ? S.precedence : void 0, {
                crossOrigin: H,
                integrity: Y,
                fetchPriority: P
            }) : U === "script" && f.d.X(_, {
                crossOrigin: H,
                integrity: Y,
                fetchPriority: P,
                nonce: typeof S.nonce == "string" ? S.nonce : void 0
            })
        }
    }
    ,
    ee.preinitModule = function(_, S) {
        if (typeof _ == "string")
            if (typeof S == "object" && S !== null) {
                if (S.as == null || S.as === "script") {
                    var U = R(S.as, S.crossOrigin);
                    f.d.M(_, {
                        crossOrigin: U,
                        integrity: typeof S.integrity == "string" ? S.integrity : void 0,
                        nonce: typeof S.nonce == "string" ? S.nonce : void 0
                    })
                }
            } else
                S == null && f.d.M(_)
    }
    ,
    ee.preload = function(_, S) {
        if (typeof _ == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
            var U = S.as
              , H = R(U, S.crossOrigin);
            f.d.L(_, U, {
                crossOrigin: H,
                integrity: typeof S.integrity == "string" ? S.integrity : void 0,
                nonce: typeof S.nonce == "string" ? S.nonce : void 0,
                type: typeof S.type == "string" ? S.type : void 0,
                fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
                referrerPolicy: typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
                imageSrcSet: typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
                imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
                media: typeof S.media == "string" ? S.media : void 0
            })
        }
    }
    ,
    ee.preloadModule = function(_, S) {
        if (typeof _ == "string")
            if (S) {
                var U = R(S.as, S.crossOrigin);
                f.d.m(_, {
                    as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
                    crossOrigin: U,
                    integrity: typeof S.integrity == "string" ? S.integrity : void 0
                })
            } else
                f.d.m(_)
    }
    ,
    ee.requestFormReset = function(_) {
        f.d.r(_)
    }
    ,
    ee.unstable_batchedUpdates = function(_, S) {
        return _(S)
    }
    ,
    ee.useFormState = function(_, S, U) {
        return v.H.useFormState(_, S, U)
    }
    ,
    ee.useFormStatus = function() {
        return v.H.useHostTransitionStatus()
    }
    ,
    ee.version = "19.1.0",
    ee
}
var Fd;
function Ty() {
    if (Fd)
        return Cf.exports;
    Fd = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (c) {
                console.error(c)
            }
    }
    return i(),
    Cf.exports = Ey(),
    Cf.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pd;
function Oy() {
    if (Pd)
        return jn;
    Pd = 1;
    var i = Sy()
      , c = Jf()
      , s = Ty();
    function f(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++)
                e += "&args[]=" + encodeURIComponent(arguments[l])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function d(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function y(t) {
        var e = t
          , l = t;
        if (t.alternate)
            for (; e.return; )
                e = e.return;
        else {
            t = e;
            do
                e = t,
                (e.flags & 4098) !== 0 && (l = e.return),
                t = e.return;
            while (t)
        }
        return e.tag === 3 ? l : null
    }
    function v(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function R(t) {
        if (y(t) !== t)
            throw Error(f(188))
    }
    function _(t) {
        var e = t.alternate;
        if (!e) {
            if (e = y(t),
            e === null)
                throw Error(f(188));
            return e !== t ? null : t
        }
        for (var l = t, a = e; ; ) {
            var n = l.return;
            if (n === null)
                break;
            var u = n.alternate;
            if (u === null) {
                if (a = n.return,
                a !== null) {
                    l = a;
                    continue
                }
                break
            }
            if (n.child === u.child) {
                for (u = n.child; u; ) {
                    if (u === l)
                        return R(n),
                        t;
                    if (u === a)
                        return R(n),
                        e;
                    u = u.sibling
                }
                throw Error(f(188))
            }
            if (l.return !== a.return)
                l = n,
                a = u;
            else {
                for (var r = !1, o = n.child; o; ) {
                    if (o === l) {
                        r = !0,
                        l = n,
                        a = u;
                        break
                    }
                    if (o === a) {
                        r = !0,
                        a = n,
                        l = u;
                        break
                    }
                    o = o.sibling
                }
                if (!r) {
                    for (o = u.child; o; ) {
                        if (o === l) {
                            r = !0,
                            l = u,
                            a = n;
                            break
                        }
                        if (o === a) {
                            r = !0,
                            a = u,
                            l = n;
                            break
                        }
                        o = o.sibling
                    }
                    if (!r)
                        throw Error(f(189))
                }
            }
            if (l.alternate !== a)
                throw Error(f(190))
        }
        if (l.tag !== 3)
            throw Error(f(188));
        return l.stateNode.current === l ? t : e
    }
    function S(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (e = S(t),
            e !== null)
                return e;
            t = t.sibling
        }
        return null
    }
    var U = Object.assign
      , H = Symbol.for("react.element")
      , Y = Symbol.for("react.transitional.element")
      , P = Symbol.for("react.portal")
      , V = Symbol.for("react.fragment")
      , X = Symbol.for("react.strict_mode")
      , G = Symbol.for("react.profiler")
      , dt = Symbol.for("react.provider")
      , st = Symbol.for("react.consumer")
      , at = Symbol.for("react.context")
      , At = Symbol.for("react.forward_ref")
      , W = Symbol.for("react.suspense")
      , ht = Symbol.for("react.suspense_list")
      , Ut = Symbol.for("react.memo")
      , xt = Symbol.for("react.lazy")
      , Bt = Symbol.for("react.activity")
      , St = Symbol.for("react.memo_cache_sentinel")
      , ut = Symbol.iterator;
    function Mt(t) {
        return t === null || typeof t != "object" ? null : (t = ut && t[ut] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var Dt = Symbol.for("react.client.reference");
    function J(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === Dt ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case V:
            return "Fragment";
        case G:
            return "Profiler";
        case X:
            return "StrictMode";
        case W:
            return "Suspense";
        case ht:
            return "SuspenseList";
        case Bt:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case P:
                return "Portal";
            case at:
                return (t.displayName || "Context") + ".Provider";
            case st:
                return (t._context.displayName || "Context") + ".Consumer";
            case At:
                var e = t.render;
                return t = t.displayName,
                t || (t = e.displayName || e.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case Ut:
                return e = t.displayName || null,
                e !== null ? e : J(t.type) || "Memo";
            case xt:
                e = t._payload,
                t = t._init;
                try {
                    return J(t(e))
                } catch {}
            }
        return null
    }
    var B = Array.isArray
      , g = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , M = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , q = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , K = []
      , h = -1;
    function D(t) {
        return {
            current: t
        }
    }
    function w(t) {
        0 > h || (t.current = K[h],
        K[h] = null,
        h--)
    }
    function j(t, e) {
        h++,
        K[h] = t.current,
        t.current = e
    }
    var Z = D(null)
      , et = D(null)
      , $ = D(null)
      , Ct = D(null);
    function vt(t, e) {
        switch (j($, e),
        j(et, t),
        j(Z, null),
        e.nodeType) {
        case 9:
        case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? gd(t) : 0;
            break;
        default:
            if (t = e.tagName,
            e = e.namespaceURI)
                e = gd(e),
                t = Sd(e, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        w(Z),
        j(Z, t)
    }
    function Pt() {
        w(Z),
        w(et),
        w($)
    }
    function Zt(t) {
        t.memoizedState !== null && j(Ct, t);
        var e = Z.current
          , l = Sd(e, t.type);
        e !== l && (j(et, t),
        j(Z, l))
    }
    function se(t) {
        et.current === t && (w(Z),
        w(et)),
        Ct.current === t && (w(Ct),
        _n._currentValue = q)
    }
    var Ge = Object.prototype.hasOwnProperty
      , al = i.unstable_scheduleCallback
      , vi = i.unstable_cancelCallback
      , Wh = i.unstable_shouldYield
      , kh = i.unstable_requestPaint
      , Ce = i.unstable_now
      , $h = i.unstable_getCurrentPriorityLevel
      , Ff = i.unstable_ImmediatePriority
      , Pf = i.unstable_UserBlockingPriority
      , Kn = i.unstable_NormalPriority
      , Fh = i.unstable_LowPriority
      , If = i.unstable_IdlePriority
      , Ph = i.log
      , Ih = i.unstable_setDisableYieldValue
      , wa = null
      , oe = null;
    function nl(t) {
        if (typeof Ph == "function" && Ih(t),
        oe && typeof oe.setStrictMode == "function")
            try {
                oe.setStrictMode(wa, t)
            } catch {}
    }
    var de = Math.clz32 ? Math.clz32 : l0
      , t0 = Math.log
      , e0 = Math.LN2;
    function l0(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (t0(t) / e0 | 0) | 0
    }
    var Xn = 256
      , Zn = 4194304;
    function Ml(t) {
        var e = t & 42;
        if (e !== 0)
            return e;
        switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return t
        }
    }
    function Ln(t, e, l) {
        var a = t.pendingLanes;
        if (a === 0)
            return 0;
        var n = 0
          , u = t.suspendedLanes
          , r = t.pingedLanes;
        t = t.warmLanes;
        var o = a & 134217727;
        return o !== 0 ? (a = o & ~u,
        a !== 0 ? n = Ml(a) : (r &= o,
        r !== 0 ? n = Ml(r) : l || (l = o & ~t,
        l !== 0 && (n = Ml(l))))) : (o = a & ~u,
        o !== 0 ? n = Ml(o) : r !== 0 ? n = Ml(r) : l || (l = a & ~t,
        l !== 0 && (n = Ml(l)))),
        n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n,
        l = e & -e,
        u >= l || u === 32 && (l & 4194048) !== 0) ? e : n
    }
    function Ba(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function a0(t, e) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function tr() {
        var t = Xn;
        return Xn <<= 1,
        (Xn & 4194048) === 0 && (Xn = 256),
        t
    }
    function er() {
        var t = Zn;
        return Zn <<= 1,
        (Zn & 62914560) === 0 && (Zn = 4194304),
        t
    }
    function pi(t) {
        for (var e = [], l = 0; 31 > l; l++)
            e.push(t);
        return e
    }
    function Va(t, e) {
        t.pendingLanes |= e,
        e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function n0(t, e, l, a, n, u) {
        var r = t.pendingLanes;
        t.pendingLanes = l,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= l,
        t.entangledLanes &= l,
        t.errorRecoveryDisabledLanes &= l,
        t.shellSuspendCounter = 0;
        var o = t.entanglements
          , m = t.expirationTimes
          , T = t.hiddenUpdates;
        for (l = r & ~l; 0 < l; ) {
            var N = 31 - de(l)
              , C = 1 << N;
            o[N] = 0,
            m[N] = -1;
            var O = T[N];
            if (O !== null)
                for (T[N] = null,
                N = 0; N < O.length; N++) {
                    var A = O[N];
                    A !== null && (A.lane &= -536870913)
                }
            l &= ~C
        }
        a !== 0 && lr(t, a, 0),
        u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(r & ~e))
    }
    function lr(t, e, l) {
        t.pendingLanes |= e,
        t.suspendedLanes &= ~e;
        var a = 31 - de(e);
        t.entangledLanes |= e,
        t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 4194090
    }
    function ar(t, e) {
        var l = t.entangledLanes |= e;
        for (t = t.entanglements; l; ) {
            var a = 31 - de(l)
              , n = 1 << a;
            n & e | t[a] & e && (t[a] |= e),
            l &= ~n
        }
    }
    function gi(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function Si(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function nr() {
        var t = M.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : Bd(t.type))
    }
    function u0(t, e) {
        var l = M.p;
        try {
            return M.p = t,
            e()
        } finally {
            M.p = l
        }
    }
    var ul = Math.random().toString(36).slice(2)
      , It = "__reactFiber$" + ul
      , ne = "__reactProps$" + ul
      , $l = "__reactContainer$" + ul
      , bi = "__reactEvents$" + ul
      , i0 = "__reactListeners$" + ul
      , c0 = "__reactHandles$" + ul
      , ur = "__reactResources$" + ul
      , Ya = "__reactMarker$" + ul;
    function Ei(t) {
        delete t[It],
        delete t[ne],
        delete t[bi],
        delete t[i0],
        delete t[c0]
    }
    function Fl(t) {
        var e = t[It];
        if (e)
            return e;
        for (var l = t.parentNode; l; ) {
            if (e = l[$l] || l[It]) {
                if (l = e.alternate,
                e.child !== null || l !== null && l.child !== null)
                    for (t = Od(t); t !== null; ) {
                        if (l = t[It])
                            return l;
                        t = Od(t)
                    }
                return e
            }
            t = l,
            l = t.parentNode
        }
        return null
    }
    function Pl(t) {
        if (t = t[It] || t[$l]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
                return t
        }
        return null
    }
    function Ga(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t.stateNode;
        throw Error(f(33))
    }
    function Il(t) {
        var e = t[ur];
        return e || (e = t[ur] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function Lt(t) {
        t[Ya] = !0
    }
    var ir = new Set
      , cr = {};
    function Dl(t, e) {
        ta(t, e),
        ta(t + "Capture", e)
    }
    function ta(t, e) {
        for (cr[t] = e,
        t = 0; t < e.length; t++)
            ir.add(e[t])
    }
    var f0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , fr = {}
      , rr = {};
    function r0(t) {
        return Ge.call(rr, t) ? !0 : Ge.call(fr, t) ? !1 : f0.test(t) ? rr[t] = !0 : (fr[t] = !0,
        !1)
    }
    function Qn(t, e, l) {
        if (r0(e))
            if (l === null)
                t.removeAttribute(e);
            else {
                switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var a = e.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
                }
                t.setAttribute(e, "" + l)
            }
    }
    function Jn(t, e, l) {
        if (l === null)
            t.removeAttribute(e);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttribute(e, "" + l)
        }
    }
    function Ke(t, e, l, a) {
        if (a === null)
            t.removeAttribute(l);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(l);
                return
            }
            t.setAttributeNS(e, l, "" + a)
        }
    }
    var Ti, sr;
    function ea(t) {
        if (Ti === void 0)
            try {
                throw Error()
            } catch (l) {
                var e = l.stack.trim().match(/\n( *(at )?)/);
                Ti = e && e[1] || "",
                sr = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Ti + t + sr
    }
    var Oi = !1;
    function Ai(t, e) {
        if (!t || Oi)
            return "";
        Oi = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var C = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(C.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(C, [])
                                } catch (A) {
                                    var O = A
                                }
                                Reflect.construct(t, [], C)
                            } else {
                                try {
                                    C.call()
                                } catch (A) {
                                    O = A
                                }
                                t.call(C.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (A) {
                                O = A
                            }
                            (C = t()) && typeof C.catch == "function" && C.catch(function() {})
                        }
                    } catch (A) {
                        if (A && O && typeof A.stack == "string")
                            return [A.stack, O.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = a.DetermineComponentFrameRoot()
              , r = u[0]
              , o = u[1];
            if (r && o) {
                var m = r.split(`
`)
                  , T = o.split(`
`);
                for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; n < T.length && !T[n].includes("DetermineComponentFrameRoot"); )
                    n++;
                if (a === m.length || n === T.length)
                    for (a = m.length - 1,
                    n = T.length - 1; 1 <= a && 0 <= n && m[a] !== T[n]; )
                        n--;
                for (; 1 <= a && 0 <= n; a--,
                n--)
                    if (m[a] !== T[n]) {
                        if (a !== 1 || n !== 1)
                            do
                                if (a--,
                                n--,
                                0 > n || m[a] !== T[n]) {
                                    var N = `
` + m[a].replace(" at new ", " at ");
                                    return t.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", t.displayName)),
                                    N
                                }
                            while (1 <= a && 0 <= n);
                        break
                    }
            }
        } finally {
            Oi = !1,
            Error.prepareStackTrace = l
        }
        return (l = t ? t.displayName || t.name : "") ? ea(l) : ""
    }
    function s0(t) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return ea(t.type);
        case 16:
            return ea("Lazy");
        case 13:
            return ea("Suspense");
        case 19:
            return ea("SuspenseList");
        case 0:
        case 15:
            return Ai(t.type, !1);
        case 11:
            return Ai(t.type.render, !1);
        case 1:
            return Ai(t.type, !0);
        case 31:
            return ea("Activity");
        default:
            return ""
        }
    }
    function or(t) {
        try {
            var e = "";
            do
                e += s0(t),
                t = t.return;
            while (t);
            return e
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }
    function Ee(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function dr(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function o0(t) {
        var e = dr(t) ? "checked" : "value"
          , l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
          , a = "" + t[e];
        if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var n = l.get
              , u = l.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return n.call(this)
                },
                set: function(r) {
                    a = "" + r,
                    u.call(this, r)
                }
            }),
            Object.defineProperty(t, e, {
                enumerable: l.enumerable
            }),
            {
                getValue: function() {
                    return a
                },
                setValue: function(r) {
                    a = "" + r
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[e]
                }
            }
        }
    }
    function Wn(t) {
        t._valueTracker || (t._valueTracker = o0(t))
    }
    function hr(t) {
        if (!t)
            return !1;
        var e = t._valueTracker;
        if (!e)
            return !0;
        var l = e.getValue()
          , a = "";
        return t && (a = dr(t) ? t.checked ? "true" : "false" : t.value),
        t = a,
        t !== l ? (e.setValue(t),
        !0) : !1
    }
    function kn(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var d0 = /[\n"\\]/g;
    function Te(t) {
        return t.replace(d0, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function Ui(t, e, l, a, n, u, r, o) {
        t.name = "",
        r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.type = r : t.removeAttribute("type"),
        e != null ? r === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ee(e)) : t.value !== "" + Ee(e) && (t.value = "" + Ee(e)) : r !== "submit" && r !== "reset" || t.removeAttribute("value"),
        e != null ? Ri(t, r, Ee(e)) : l != null ? Ri(t, r, Ee(l)) : a != null && t.removeAttribute("value"),
        n == null && u != null && (t.defaultChecked = !!u),
        n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"),
        o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + Ee(o) : t.removeAttribute("name")
    }
    function mr(t, e, l, a, n, u, r, o) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u),
        e != null || l != null) {
            if (!(u !== "submit" && u !== "reset" || e != null))
                return;
            l = l != null ? "" + Ee(l) : "",
            e = e != null ? "" + Ee(e) : l,
            o || e === t.value || (t.value = e),
            t.defaultValue = e
        }
        a = a ?? n,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        t.checked = o ? t.checked : !!a,
        t.defaultChecked = !!a,
        r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.name = r)
    }
    function Ri(t, e, l) {
        e === "number" && kn(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l)
    }
    function la(t, e, l, a) {
        if (t = t.options,
        e) {
            e = {};
            for (var n = 0; n < l.length; n++)
                e["$" + l[n]] = !0;
            for (l = 0; l < t.length; l++)
                n = e.hasOwnProperty("$" + t[l].value),
                t[l].selected !== n && (t[l].selected = n),
                n && a && (t[l].defaultSelected = !0)
        } else {
            for (l = "" + Ee(l),
            e = null,
            n = 0; n < t.length; n++) {
                if (t[n].value === l) {
                    t[n].selected = !0,
                    a && (t[n].defaultSelected = !0);
                    return
                }
                e !== null || t[n].disabled || (e = t[n])
            }
            e !== null && (e.selected = !0)
        }
    }
    function yr(t, e, l) {
        if (e != null && (e = "" + Ee(e),
        e !== t.value && (t.value = e),
        l == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = l != null ? "" + Ee(l) : ""
    }
    function vr(t, e, l, a) {
        if (e == null) {
            if (a != null) {
                if (l != null)
                    throw Error(f(92));
                if (B(a)) {
                    if (1 < a.length)
                        throw Error(f(93));
                    a = a[0]
                }
                l = a
            }
            l == null && (l = ""),
            e = l
        }
        l = Ee(e),
        t.defaultValue = l,
        a = t.textContent,
        a === l && a !== "" && a !== null && (t.value = a)
    }
    function aa(t, e) {
        if (e) {
            var l = t.firstChild;
            if (l && l === t.lastChild && l.nodeType === 3) {
                l.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var h0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function pr(t, e, l) {
        var a = e.indexOf("--") === 0;
        l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || h0.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px"
    }
    function gr(t, e, l) {
        if (e != null && typeof e != "object")
            throw Error(f(62));
        if (t = t.style,
        l != null) {
            for (var a in l)
                !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
            for (var n in e)
                a = e[n],
                e.hasOwnProperty(n) && l[n] !== a && pr(t, n, a)
        } else
            for (var u in e)
                e.hasOwnProperty(u) && pr(t, u, e[u])
    }
    function xi(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var m0 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , y0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function $n(t) {
        return y0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    var Mi = null;
    function Di(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var na = null
      , ua = null;
    function Sr(t) {
        var e = Pl(t);
        if (e && (t = e.stateNode)) {
            var l = t[ne] || null;
            t: switch (t = e.stateNode,
            e.type) {
            case "input":
                if (Ui(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
                e = l.name,
                l.type === "radio" && e != null) {
                    for (l = t; l.parentNode; )
                        l = l.parentNode;
                    for (l = l.querySelectorAll('input[name="' + Te("" + e) + '"][type="radio"]'),
                    e = 0; e < l.length; e++) {
                        var a = l[e];
                        if (a !== t && a.form === t.form) {
                            var n = a[ne] || null;
                            if (!n)
                                throw Error(f(90));
                            Ui(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
                        }
                    }
                    for (e = 0; e < l.length; e++)
                        a = l[e],
                        a.form === t.form && hr(a)
                }
                break t;
            case "textarea":
                yr(t, l.value, l.defaultValue);
                break t;
            case "select":
                e = l.value,
                e != null && la(t, !!l.multiple, e, !1)
            }
        }
    }
    var _i = !1;
    function br(t, e, l) {
        if (_i)
            return t(e, l);
        _i = !0;
        try {
            var a = t(e);
            return a
        } finally {
            if (_i = !1,
            (na !== null || ua !== null) && (Hu(),
            na && (e = na,
            t = ua,
            ua = na = null,
            Sr(e),
            t)))
                for (e = 0; e < t.length; e++)
                    Sr(t[e])
        }
    }
    function Ka(t, e) {
        var l = t.stateNode;
        if (l === null)
            return null;
        var a = l[ne] || null;
        if (a === null)
            return null;
        l = a[e];
        t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (a = !a.disabled) || (t = t.type,
            a = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !a;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (l && typeof l != "function")
            throw Error(f(231, e, typeof l));
        return l
    }
    var Xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Ni = !1;
    if (Xe)
        try {
            var Xa = {};
            Object.defineProperty(Xa, "passive", {
                get: function() {
                    Ni = !0
                }
            }),
            window.addEventListener("test", Xa, Xa),
            window.removeEventListener("test", Xa, Xa)
        } catch {
            Ni = !1
        }
    var il = null
      , qi = null
      , Fn = null;
    function Er() {
        if (Fn)
            return Fn;
        var t, e = qi, l = e.length, a, n = "value"in il ? il.value : il.textContent, u = n.length;
        for (t = 0; t < l && e[t] === n[t]; t++)
            ;
        var r = l - t;
        for (a = 1; a <= r && e[l - a] === n[u - a]; a++)
            ;
        return Fn = n.slice(t, 1 < a ? 1 - a : void 0)
    }
    function Pn(t) {
        var e = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function In() {
        return !0
    }
    function Tr() {
        return !1
    }
    function ue(t) {
        function e(l, a, n, u, r) {
            this._reactName = l,
            this._targetInst = n,
            this.type = a,
            this.nativeEvent = u,
            this.target = r,
            this.currentTarget = null;
            for (var o in t)
                t.hasOwnProperty(o) && (l = t[o],
                this[o] = l ? l(u) : u[o]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? In : Tr,
            this.isPropagationStopped = Tr,
            this
        }
        return U(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1),
                this.isDefaultPrevented = In)
            },
            stopPropagation: function() {
                var l = this.nativeEvent;
                l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
                this.isPropagationStopped = In)
            },
            persist: function() {},
            isPersistent: In
        }),
        e
    }
    var _l = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, tu = ue(_l), Za = U({}, _l, {
        view: 0,
        detail: 0
    }), v0 = ue(Za), zi, Ci, La, eu = U({}, Za, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ji,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== La && (La && t.type === "mousemove" ? (zi = t.screenX - La.screenX,
            Ci = t.screenY - La.screenY) : Ci = zi = 0,
            La = t),
            zi)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : Ci
        }
    }), Or = ue(eu), p0 = U({}, eu, {
        dataTransfer: 0
    }), g0 = ue(p0), S0 = U({}, Za, {
        relatedTarget: 0
    }), Hi = ue(S0), b0 = U({}, _l, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), E0 = ue(b0), T0 = U({}, _l, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), O0 = ue(T0), A0 = U({}, _l, {
        data: 0
    }), Ar = ue(A0), U0 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, R0 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, x0 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function M0(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = x0[t]) ? !!e[t] : !1
    }
    function ji() {
        return M0
    }
    var D0 = U({}, Za, {
        key: function(t) {
            if (t.key) {
                var e = U0[t.key] || t.key;
                if (e !== "Unidentified")
                    return e
            }
            return t.type === "keypress" ? (t = Pn(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? R0[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ji,
        charCode: function(t) {
            return t.type === "keypress" ? Pn(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? Pn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , _0 = ue(D0)
      , N0 = U({}, eu, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Ur = ue(N0)
      , q0 = U({}, Za, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ji
    })
      , z0 = ue(q0)
      , C0 = U({}, _l, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , H0 = ue(C0)
      , j0 = U({}, eu, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , w0 = ue(j0)
      , B0 = U({}, _l, {
        newState: 0,
        oldState: 0
    })
      , V0 = ue(B0)
      , Y0 = [9, 13, 27, 32]
      , wi = Xe && "CompositionEvent"in window
      , Qa = null;
    Xe && "documentMode"in document && (Qa = document.documentMode);
    var G0 = Xe && "TextEvent"in window && !Qa
      , Rr = Xe && (!wi || Qa && 8 < Qa && 11 >= Qa)
      , xr = " "
      , Mr = !1;
    function Dr(t, e) {
        switch (t) {
        case "keyup":
            return Y0.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function _r(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var ia = !1;
    function K0(t, e) {
        switch (t) {
        case "compositionend":
            return _r(e);
        case "keypress":
            return e.which !== 32 ? null : (Mr = !0,
            xr);
        case "textInput":
            return t = e.data,
            t === xr && Mr ? null : t;
        default:
            return null
        }
    }
    function X0(t, e) {
        if (ia)
            return t === "compositionend" || !wi && Dr(t, e) ? (t = Er(),
            Fn = qi = il = null,
            ia = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return Rr && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var Z0 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Nr(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!Z0[t.type] : e === "textarea"
    }
    function qr(t, e, l, a) {
        na ? ua ? ua.push(a) : ua = [a] : na = a,
        e = Gu(e, "onChange"),
        0 < e.length && (l = new tu("onChange","change",null,l,a),
        t.push({
            event: l,
            listeners: e
        }))
    }
    var Ja = null
      , Wa = null;
    function L0(t) {
        hd(t, 0)
    }
    function lu(t) {
        var e = Ga(t);
        if (hr(e))
            return t
    }
    function zr(t, e) {
        if (t === "change")
            return e
    }
    var Cr = !1;
    if (Xe) {
        var Bi;
        if (Xe) {
            var Vi = "oninput"in document;
            if (!Vi) {
                var Hr = document.createElement("div");
                Hr.setAttribute("oninput", "return;"),
                Vi = typeof Hr.oninput == "function"
            }
            Bi = Vi
        } else
            Bi = !1;
        Cr = Bi && (!document.documentMode || 9 < document.documentMode)
    }
    function jr() {
        Ja && (Ja.detachEvent("onpropertychange", wr),
        Wa = Ja = null)
    }
    function wr(t) {
        if (t.propertyName === "value" && lu(Wa)) {
            var e = [];
            qr(e, Wa, t, Di(t)),
            br(L0, e)
        }
    }
    function Q0(t, e, l) {
        t === "focusin" ? (jr(),
        Ja = e,
        Wa = l,
        Ja.attachEvent("onpropertychange", wr)) : t === "focusout" && jr()
    }
    function J0(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return lu(Wa)
    }
    function W0(t, e) {
        if (t === "click")
            return lu(e)
    }
    function k0(t, e) {
        if (t === "input" || t === "change")
            return lu(e)
    }
    function $0(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var he = typeof Object.is == "function" ? Object.is : $0;
    function ka(t, e) {
        if (he(t, e))
            return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
            return !1;
        var l = Object.keys(t)
          , a = Object.keys(e);
        if (l.length !== a.length)
            return !1;
        for (a = 0; a < l.length; a++) {
            var n = l[a];
            if (!Ge.call(e, n) || !he(t[n], e[n]))
                return !1
        }
        return !0
    }
    function Br(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function Vr(t, e) {
        var l = Br(t);
        t = 0;
        for (var a; l; ) {
            if (l.nodeType === 3) {
                if (a = t + l.textContent.length,
                t <= e && a >= e)
                    return {
                        node: l,
                        offset: e - t
                    };
                t = a
            }
            t: {
                for (; l; ) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break t
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = Br(l)
        }
    }
    function Yr(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Yr(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function Gr(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = kn(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var l = typeof e.contentWindow.location.href == "string"
            } catch {
                l = !1
            }
            if (l)
                t = e.contentWindow;
            else
                break;
            e = kn(t.document)
        }
        return e
    }
    function Yi(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var F0 = Xe && "documentMode"in document && 11 >= document.documentMode
      , ca = null
      , Gi = null
      , $a = null
      , Ki = !1;
    function Kr(t, e, l) {
        var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        Ki || ca == null || ca !== kn(a) || (a = ca,
        "selectionStart"in a && Yi(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        $a && ka($a, a) || ($a = a,
        a = Gu(Gi, "onSelect"),
        0 < a.length && (e = new tu("onSelect","select",null,e,l),
        t.push({
            event: e,
            listeners: a
        }),
        e.target = ca)))
    }
    function Nl(t, e) {
        var l = {};
        return l[t.toLowerCase()] = e.toLowerCase(),
        l["Webkit" + t] = "webkit" + e,
        l["Moz" + t] = "moz" + e,
        l
    }
    var fa = {
        animationend: Nl("Animation", "AnimationEnd"),
        animationiteration: Nl("Animation", "AnimationIteration"),
        animationstart: Nl("Animation", "AnimationStart"),
        transitionrun: Nl("Transition", "TransitionRun"),
        transitionstart: Nl("Transition", "TransitionStart"),
        transitioncancel: Nl("Transition", "TransitionCancel"),
        transitionend: Nl("Transition", "TransitionEnd")
    }
      , Xi = {}
      , Xr = {};
    Xe && (Xr = document.createElement("div").style,
    "AnimationEvent"in window || (delete fa.animationend.animation,
    delete fa.animationiteration.animation,
    delete fa.animationstart.animation),
    "TransitionEvent"in window || delete fa.transitionend.transition);
    function ql(t) {
        if (Xi[t])
            return Xi[t];
        if (!fa[t])
            return t;
        var e = fa[t], l;
        for (l in e)
            if (e.hasOwnProperty(l) && l in Xr)
                return Xi[t] = e[l];
        return t
    }
    var Zr = ql("animationend")
      , Lr = ql("animationiteration")
      , Qr = ql("animationstart")
      , P0 = ql("transitionrun")
      , I0 = ql("transitionstart")
      , tm = ql("transitioncancel")
      , Jr = ql("transitionend")
      , Wr = new Map
      , Zi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Zi.push("scrollEnd");
    function _e(t, e) {
        Wr.set(t, e),
        Dl(e, [t])
    }
    var kr = new WeakMap;
    function Oe(t, e) {
        if (typeof t == "object" && t !== null) {
            var l = kr.get(t);
            return l !== void 0 ? l : (e = {
                value: t,
                source: e,
                stack: or(e)
            },
            kr.set(t, e),
            e)
        }
        return {
            value: t,
            source: e,
            stack: or(e)
        }
    }
    var Ae = []
      , ra = 0
      , Li = 0;
    function au() {
        for (var t = ra, e = Li = ra = 0; e < t; ) {
            var l = Ae[e];
            Ae[e++] = null;
            var a = Ae[e];
            Ae[e++] = null;
            var n = Ae[e];
            Ae[e++] = null;
            var u = Ae[e];
            if (Ae[e++] = null,
            a !== null && n !== null) {
                var r = a.pending;
                r === null ? n.next = n : (n.next = r.next,
                r.next = n),
                a.pending = n
            }
            u !== 0 && $r(l, n, u)
        }
    }
    function nu(t, e, l, a) {
        Ae[ra++] = t,
        Ae[ra++] = e,
        Ae[ra++] = l,
        Ae[ra++] = a,
        Li |= a,
        t.lanes |= a,
        t = t.alternate,
        t !== null && (t.lanes |= a)
    }
    function Qi(t, e, l, a) {
        return nu(t, e, l, a),
        uu(t)
    }
    function sa(t, e) {
        return nu(t, null, null, e),
        uu(t)
    }
    function $r(t, e, l) {
        t.lanes |= l;
        var a = t.alternate;
        a !== null && (a.lanes |= l);
        for (var n = !1, u = t.return; u !== null; )
            u.childLanes |= l,
            a = u.alternate,
            a !== null && (a.childLanes |= l),
            u.tag === 22 && (t = u.stateNode,
            t === null || t._visibility & 1 || (n = !0)),
            t = u,
            u = u.return;
        return t.tag === 3 ? (u = t.stateNode,
        n && e !== null && (n = 31 - de(l),
        t = u.hiddenUpdates,
        a = t[n],
        a === null ? t[n] = [e] : a.push(e),
        e.lane = l | 536870912),
        u) : null
    }
    function uu(t) {
        if (50 < Tn)
            throw Tn = 0,
            Pc = null,
            Error(f(185));
        for (var e = t.return; e !== null; )
            t = e,
            e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var oa = {};
    function em(t, e, l, a) {
        this.tag = t,
        this.key = l,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function me(t, e, l, a) {
        return new em(t,e,l,a)
    }
    function Ji(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function Ze(t, e) {
        var l = t.alternate;
        return l === null ? (l = me(t.tag, e, t.key, t.mode),
        l.elementType = t.elementType,
        l.type = t.type,
        l.stateNode = t.stateNode,
        l.alternate = t,
        t.alternate = l) : (l.pendingProps = e,
        l.type = t.type,
        l.flags = 0,
        l.subtreeFlags = 0,
        l.deletions = null),
        l.flags = t.flags & 65011712,
        l.childLanes = t.childLanes,
        l.lanes = t.lanes,
        l.child = t.child,
        l.memoizedProps = t.memoizedProps,
        l.memoizedState = t.memoizedState,
        l.updateQueue = t.updateQueue,
        e = t.dependencies,
        l.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        l.sibling = t.sibling,
        l.index = t.index,
        l.ref = t.ref,
        l.refCleanup = t.refCleanup,
        l
    }
    function Fr(t, e) {
        t.flags &= 65011714;
        var l = t.alternate;
        return l === null ? (t.childLanes = 0,
        t.lanes = e,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = l.childLanes,
        t.lanes = l.lanes,
        t.child = l.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = l.memoizedProps,
        t.memoizedState = l.memoizedState,
        t.updateQueue = l.updateQueue,
        t.type = l.type,
        e = l.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        t
    }
    function iu(t, e, l, a, n, u) {
        var r = 0;
        if (a = t,
        typeof t == "function")
            Ji(t) && (r = 1);
        else if (typeof t == "string")
            r = ay(t, l, Z.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case Bt:
                return t = me(31, l, e, n),
                t.elementType = Bt,
                t.lanes = u,
                t;
            case V:
                return zl(l.children, n, u, e);
            case X:
                r = 8,
                n |= 24;
                break;
            case G:
                return t = me(12, l, e, n | 2),
                t.elementType = G,
                t.lanes = u,
                t;
            case W:
                return t = me(13, l, e, n),
                t.elementType = W,
                t.lanes = u,
                t;
            case ht:
                return t = me(19, l, e, n),
                t.elementType = ht,
                t.lanes = u,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case dt:
                    case at:
                        r = 10;
                        break t;
                    case st:
                        r = 9;
                        break t;
                    case At:
                        r = 11;
                        break t;
                    case Ut:
                        r = 14;
                        break t;
                    case xt:
                        r = 16,
                        a = null;
                        break t
                    }
                r = 29,
                l = Error(f(130, t === null ? "null" : typeof t, "")),
                a = null
            }
        return e = me(r, l, e, n),
        e.elementType = t,
        e.type = a,
        e.lanes = u,
        e
    }
    function zl(t, e, l, a) {
        return t = me(7, t, a, e),
        t.lanes = l,
        t
    }
    function Wi(t, e, l) {
        return t = me(6, t, null, e),
        t.lanes = l,
        t
    }
    function ki(t, e, l) {
        return e = me(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = l,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
    }
    var da = []
      , ha = 0
      , cu = null
      , fu = 0
      , Ue = []
      , Re = 0
      , Cl = null
      , Le = 1
      , Qe = "";
    function Hl(t, e) {
        da[ha++] = fu,
        da[ha++] = cu,
        cu = t,
        fu = e
    }
    function Pr(t, e, l) {
        Ue[Re++] = Le,
        Ue[Re++] = Qe,
        Ue[Re++] = Cl,
        Cl = t;
        var a = Le;
        t = Qe;
        var n = 32 - de(a) - 1;
        a &= ~(1 << n),
        l += 1;
        var u = 32 - de(e) + n;
        if (30 < u) {
            var r = n - n % 5;
            u = (a & (1 << r) - 1).toString(32),
            a >>= r,
            n -= r,
            Le = 1 << 32 - de(e) + n | l << n | a,
            Qe = u + t
        } else
            Le = 1 << u | l << n | a,
            Qe = t
    }
    function $i(t) {
        t.return !== null && (Hl(t, 1),
        Pr(t, 1, 0))
    }
    function Fi(t) {
        for (; t === cu; )
            cu = da[--ha],
            da[ha] = null,
            fu = da[--ha],
            da[ha] = null;
        for (; t === Cl; )
            Cl = Ue[--Re],
            Ue[Re] = null,
            Qe = Ue[--Re],
            Ue[Re] = null,
            Le = Ue[--Re],
            Ue[Re] = null
    }
    var ae = null
      , qt = null
      , yt = !1
      , jl = null
      , He = !1
      , Pi = Error(f(519));
    function wl(t) {
        var e = Error(f(418, ""));
        throw Ia(Oe(e, t)),
        Pi
    }
    function Ir(t) {
        var e = t.stateNode
          , l = t.type
          , a = t.memoizedProps;
        switch (e[It] = t,
        e[ne] = a,
        l) {
        case "dialog":
            rt("cancel", e),
            rt("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            rt("load", e);
            break;
        case "video":
        case "audio":
            for (l = 0; l < An.length; l++)
                rt(An[l], e);
            break;
        case "source":
            rt("error", e);
            break;
        case "img":
        case "image":
        case "link":
            rt("error", e),
            rt("load", e);
            break;
        case "details":
            rt("toggle", e);
            break;
        case "input":
            rt("invalid", e),
            mr(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0),
            Wn(e);
            break;
        case "select":
            rt("invalid", e);
            break;
        case "textarea":
            rt("invalid", e),
            vr(e, a.value, a.defaultValue, a.children),
            Wn(e)
        }
        l = a.children,
        typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || pd(e.textContent, l) ? (a.popover != null && (rt("beforetoggle", e),
        rt("toggle", e)),
        a.onScroll != null && rt("scroll", e),
        a.onScrollEnd != null && rt("scrollend", e),
        a.onClick != null && (e.onclick = Ku),
        e = !0) : e = !1,
        e || wl(t)
    }
    function ts(t) {
        for (ae = t.return; ae; )
            switch (ae.tag) {
            case 5:
            case 13:
                He = !1;
                return;
            case 27:
            case 3:
                He = !0;
                return;
            default:
                ae = ae.return
            }
    }
    function Fa(t) {
        if (t !== ae)
            return !1;
        if (!yt)
            return ts(t),
            yt = !0,
            !1;
        var e = t.tag, l;
        if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type,
        l = !(l !== "form" && l !== "button") || yf(t.type, t.memoizedProps)),
        l = !l),
        l && qt && wl(t),
        ts(t),
        e === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(f(317));
            t: {
                for (t = t.nextSibling,
                e = 0; t; ) {
                    if (t.nodeType === 8)
                        if (l = t.data,
                        l === "/$") {
                            if (e === 0) {
                                qt = qe(t.nextSibling);
                                break t
                            }
                            e--
                        } else
                            l !== "$" && l !== "$!" && l !== "$?" || e++;
                    t = t.nextSibling
                }
                qt = null
            }
        } else
            e === 27 ? (e = qt,
            Tl(t.type) ? (t = Sf,
            Sf = null,
            qt = t) : qt = e) : qt = ae ? qe(t.stateNode.nextSibling) : null;
        return !0
    }
    function Pa() {
        qt = ae = null,
        yt = !1
    }
    function es() {
        var t = jl;
        return t !== null && (fe === null ? fe = t : fe.push.apply(fe, t),
        jl = null),
        t
    }
    function Ia(t) {
        jl === null ? jl = [t] : jl.push(t)
    }
    var Ii = D(null)
      , Bl = null
      , Je = null;
    function cl(t, e, l) {
        j(Ii, e._currentValue),
        e._currentValue = l
    }
    function We(t) {
        t._currentValue = Ii.current,
        w(Ii)
    }
    function tc(t, e, l) {
        for (; t !== null; ) {
            var a = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
            t === l)
                break;
            t = t.return
        }
    }
    function ec(t, e, l, a) {
        var n = t.child;
        for (n !== null && (n.return = t); n !== null; ) {
            var u = n.dependencies;
            if (u !== null) {
                var r = n.child;
                u = u.firstContext;
                t: for (; u !== null; ) {
                    var o = u;
                    u = n;
                    for (var m = 0; m < e.length; m++)
                        if (o.context === e[m]) {
                            u.lanes |= l,
                            o = u.alternate,
                            o !== null && (o.lanes |= l),
                            tc(u.return, l, t),
                            a || (r = null);
                            break t
                        }
                    u = o.next
                }
            } else if (n.tag === 18) {
                if (r = n.return,
                r === null)
                    throw Error(f(341));
                r.lanes |= l,
                u = r.alternate,
                u !== null && (u.lanes |= l),
                tc(r, l, t),
                r = null
            } else
                r = n.child;
            if (r !== null)
                r.return = n;
            else
                for (r = n; r !== null; ) {
                    if (r === t) {
                        r = null;
                        break
                    }
                    if (n = r.sibling,
                    n !== null) {
                        n.return = r.return,
                        r = n;
                        break
                    }
                    r = r.return
                }
            n = r
        }
    }
    function tn(t, e, l, a) {
        t = null;
        for (var n = e, u = !1; n !== null; ) {
            if (!u) {
                if ((n.flags & 524288) !== 0)
                    u = !0;
                else if ((n.flags & 262144) !== 0)
                    break
            }
            if (n.tag === 10) {
                var r = n.alternate;
                if (r === null)
                    throw Error(f(387));
                if (r = r.memoizedProps,
                r !== null) {
                    var o = n.type;
                    he(n.pendingProps.value, r.value) || (t !== null ? t.push(o) : t = [o])
                }
            } else if (n === Ct.current) {
                if (r = n.alternate,
                r === null)
                    throw Error(f(387));
                r.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(_n) : t = [_n])
            }
            n = n.return
        }
        t !== null && ec(e, t, l, a),
        e.flags |= 262144
    }
    function ru(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!he(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function Vl(t) {
        Bl = t,
        Je = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function te(t) {
        return ls(Bl, t)
    }
    function su(t, e) {
        return Bl === null && Vl(t),
        ls(t, e)
    }
    function ls(t, e) {
        var l = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: l,
            next: null
        },
        Je === null) {
            if (t === null)
                throw Error(f(308));
            Je = e,
            t.dependencies = {
                lanes: 0,
                firstContext: e
            },
            t.flags |= 524288
        } else
            Je = Je.next = e;
        return l
    }
    var lm = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(l, a) {
                t.push(a)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            t.forEach(function(l) {
                return l()
            })
        }
    }
      , am = i.unstable_scheduleCallback
      , nm = i.unstable_NormalPriority
      , Gt = {
        $$typeof: at,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function lc() {
        return {
            controller: new lm,
            data: new Map,
            refCount: 0
        }
    }
    function en(t) {
        t.refCount--,
        t.refCount === 0 && am(nm, function() {
            t.controller.abort()
        })
    }
    var ln = null
      , ac = 0
      , ma = 0
      , ya = null;
    function um(t, e) {
        if (ln === null) {
            var l = ln = [];
            ac = 0,
            ma = uf(),
            ya = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    l.push(a)
                }
            }
        }
        return ac++,
        e.then(as, as),
        e
    }
    function as() {
        if (--ac === 0 && ln !== null) {
            ya !== null && (ya.status = "fulfilled");
            var t = ln;
            ln = null,
            ma = 0,
            ya = null;
            for (var e = 0; e < t.length; e++)
                (0,
                t[e])()
        }
    }
    function im(t, e) {
        var l = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(n) {
                l.push(n)
            }
        };
        return t.then(function() {
            a.status = "fulfilled",
            a.value = e;
            for (var n = 0; n < l.length; n++)
                (0,
                l[n])(e)
        }, function(n) {
            for (a.status = "rejected",
            a.reason = n,
            n = 0; n < l.length; n++)
                (0,
                l[n])(void 0)
        }),
        a
    }
    var ns = g.S;
    g.S = function(t, e) {
        typeof e == "object" && e !== null && typeof e.then == "function" && um(t, e),
        ns !== null && ns(t, e)
    }
    ;
    var Yl = D(null);
    function nc() {
        var t = Yl.current;
        return t !== null ? t : Rt.pooledCache
    }
    function ou(t, e) {
        e === null ? j(Yl, Yl.current) : j(Yl, e.pool)
    }
    function us() {
        var t = nc();
        return t === null ? null : {
            parent: Gt._currentValue,
            pool: t
        }
    }
    var an = Error(f(460))
      , is = Error(f(474))
      , du = Error(f(542))
      , uc = {
        then: function() {}
    };
    function cs(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function hu() {}
    function fs(t, e, l) {
        switch (l = t[l],
        l === void 0 ? t.push(e) : l !== e && (e.then(hu, hu),
        e = l),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            ss(t),
            t;
        default:
            if (typeof e.status == "string")
                e.then(hu, hu);
            else {
                if (t = Rt,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(f(482));
                t = e,
                t.status = "pending",
                t.then(function(a) {
                    if (e.status === "pending") {
                        var n = e;
                        n.status = "fulfilled",
                        n.value = a
                    }
                }, function(a) {
                    if (e.status === "pending") {
                        var n = e;
                        n.status = "rejected",
                        n.reason = a
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason,
                ss(t),
                t
            }
            throw nn = e,
            an
        }
    }
    var nn = null;
    function rs() {
        if (nn === null)
            throw Error(f(459));
        var t = nn;
        return nn = null,
        t
    }
    function ss(t) {
        if (t === an || t === du)
            throw Error(f(483))
    }
    var fl = !1;
    function ic(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function cc(t, e) {
        t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function rl(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function sl(t, e, l) {
        var a = t.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (pt & 2) !== 0) {
            var n = a.pending;
            return n === null ? e.next = e : (e.next = n.next,
            n.next = e),
            a.pending = e,
            e = uu(t),
            $r(t, null, l),
            e
        }
        return nu(t, a, e, l),
        uu(t)
    }
    function un(t, e, l) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (l & 4194048) !== 0)) {
            var a = e.lanes;
            a &= t.pendingLanes,
            l |= a,
            e.lanes = l,
            ar(t, l)
        }
    }
    function fc(t, e) {
        var l = t.updateQueue
          , a = t.alternate;
        if (a !== null && (a = a.updateQueue,
        l === a)) {
            var n = null
              , u = null;
            if (l = l.firstBaseUpdate,
            l !== null) {
                do {
                    var r = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? n = u = r : u = u.next = r,
                    l = l.next
                } while (l !== null);
                u === null ? n = u = e : u = u.next = e
            } else
                n = u = e;
            l = {
                baseState: a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: u,
                shared: a.shared,
                callbacks: a.callbacks
            },
            t.updateQueue = l;
            return
        }
        t = l.lastBaseUpdate,
        t === null ? l.firstBaseUpdate = e : t.next = e,
        l.lastBaseUpdate = e
    }
    var rc = !1;
    function cn() {
        if (rc) {
            var t = ya;
            if (t !== null)
                throw t
        }
    }
    function fn(t, e, l, a) {
        rc = !1;
        var n = t.updateQueue;
        fl = !1;
        var u = n.firstBaseUpdate
          , r = n.lastBaseUpdate
          , o = n.shared.pending;
        if (o !== null) {
            n.shared.pending = null;
            var m = o
              , T = m.next;
            m.next = null,
            r === null ? u = T : r.next = T,
            r = m;
            var N = t.alternate;
            N !== null && (N = N.updateQueue,
            o = N.lastBaseUpdate,
            o !== r && (o === null ? N.firstBaseUpdate = T : o.next = T,
            N.lastBaseUpdate = m))
        }
        if (u !== null) {
            var C = n.baseState;
            r = 0,
            N = T = m = null,
            o = u;
            do {
                var O = o.lane & -536870913
                  , A = O !== o.lane;
                if (A ? (ot & O) === O : (a & O) === O) {
                    O !== 0 && O === ma && (rc = !0),
                    N !== null && (N = N.next = {
                        lane: 0,
                        tag: o.tag,
                        payload: o.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var tt = t
                          , F = o;
                        O = e;
                        var Tt = l;
                        switch (F.tag) {
                        case 1:
                            if (tt = F.payload,
                            typeof tt == "function") {
                                C = tt.call(Tt, C, O);
                                break t
                            }
                            C = tt;
                            break t;
                        case 3:
                            tt.flags = tt.flags & -65537 | 128;
                        case 0:
                            if (tt = F.payload,
                            O = typeof tt == "function" ? tt.call(Tt, C, O) : tt,
                            O == null)
                                break t;
                            C = U({}, C, O);
                            break t;
                        case 2:
                            fl = !0
                        }
                    }
                    O = o.callback,
                    O !== null && (t.flags |= 64,
                    A && (t.flags |= 8192),
                    A = n.callbacks,
                    A === null ? n.callbacks = [O] : A.push(O))
                } else
                    A = {
                        lane: O,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    },
                    N === null ? (T = N = A,
                    m = C) : N = N.next = A,
                    r |= O;
                if (o = o.next,
                o === null) {
                    if (o = n.shared.pending,
                    o === null)
                        break;
                    A = o,
                    o = A.next,
                    A.next = null,
                    n.lastBaseUpdate = A,
                    n.shared.pending = null
                }
            } while (!0);
            N === null && (m = C),
            n.baseState = m,
            n.firstBaseUpdate = T,
            n.lastBaseUpdate = N,
            u === null && (n.shared.lanes = 0),
            gl |= r,
            t.lanes = r,
            t.memoizedState = C
        }
    }
    function os(t, e) {
        if (typeof t != "function")
            throw Error(f(191, t));
        t.call(e)
    }
    function ds(t, e) {
        var l = t.callbacks;
        if (l !== null)
            for (t.callbacks = null,
            t = 0; t < l.length; t++)
                os(l[t], e)
    }
    var va = D(null)
      , mu = D(0);
    function hs(t, e) {
        t = el,
        j(mu, t),
        j(va, e),
        el = t | e.baseLanes
    }
    function sc() {
        j(mu, el),
        j(va, va.current)
    }
    function oc() {
        el = mu.current,
        w(va),
        w(mu)
    }
    var ol = 0
      , it = null
      , bt = null
      , Vt = null
      , yu = !1
      , pa = !1
      , Gl = !1
      , vu = 0
      , rn = 0
      , ga = null
      , cm = 0;
    function Ht() {
        throw Error(f(321))
    }
    function dc(t, e) {
        if (e === null)
            return !1;
        for (var l = 0; l < e.length && l < t.length; l++)
            if (!he(t[l], e[l]))
                return !1;
        return !0
    }
    function hc(t, e, l, a, n, u) {
        return ol = u,
        it = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        g.H = t === null || t.memoizedState === null ? $s : Fs,
        Gl = !1,
        u = l(a, n),
        Gl = !1,
        pa && (u = ys(e, l, a, n)),
        ms(t),
        u
    }
    function ms(t) {
        g.H = Tu;
        var e = bt !== null && bt.next !== null;
        if (ol = 0,
        Vt = bt = it = null,
        yu = !1,
        rn = 0,
        ga = null,
        e)
            throw Error(f(300));
        t === null || Qt || (t = t.dependencies,
        t !== null && ru(t) && (Qt = !0))
    }
    function ys(t, e, l, a) {
        it = t;
        var n = 0;
        do {
            if (pa && (ga = null),
            rn = 0,
            pa = !1,
            25 <= n)
                throw Error(f(301));
            if (n += 1,
            Vt = bt = null,
            t.updateQueue != null) {
                var u = t.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            g.H = mm,
            u = e(l, a)
        } while (pa);
        return u
    }
    function fm() {
        var t = g.H
          , e = t.useState()[0];
        return e = typeof e.then == "function" ? sn(e) : e,
        t = t.useState()[0],
        (bt !== null ? bt.memoizedState : null) !== t && (it.flags |= 1024),
        e
    }
    function mc() {
        var t = vu !== 0;
        return vu = 0,
        t
    }
    function yc(t, e, l) {
        e.updateQueue = t.updateQueue,
        e.flags &= -2053,
        t.lanes &= ~l
    }
    function vc(t) {
        if (yu) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null),
                t = t.next
            }
            yu = !1
        }
        ol = 0,
        Vt = bt = it = null,
        pa = !1,
        rn = vu = 0,
        ga = null
    }
    function ie() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Vt === null ? it.memoizedState = Vt = t : Vt = Vt.next = t,
        Vt
    }
    function Yt() {
        if (bt === null) {
            var t = it.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = bt.next;
        var e = Vt === null ? it.memoizedState : Vt.next;
        if (e !== null)
            Vt = e,
            bt = t;
        else {
            if (t === null)
                throw it.alternate === null ? Error(f(467)) : Error(f(310));
            bt = t,
            t = {
                memoizedState: bt.memoizedState,
                baseState: bt.baseState,
                baseQueue: bt.baseQueue,
                queue: bt.queue,
                next: null
            },
            Vt === null ? it.memoizedState = Vt = t : Vt = Vt.next = t
        }
        return Vt
    }
    function pc() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function sn(t) {
        var e = rn;
        return rn += 1,
        ga === null && (ga = []),
        t = fs(ga, t, e),
        e = it,
        (Vt === null ? e.memoizedState : Vt.next) === null && (e = e.alternate,
        g.H = e === null || e.memoizedState === null ? $s : Fs),
        t
    }
    function pu(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return sn(t);
            if (t.$$typeof === at)
                return te(t)
        }
        throw Error(f(438, String(t)))
    }
    function gc(t) {
        var e = null
          , l = it.updateQueue;
        if (l !== null && (e = l.memoCache),
        e == null) {
            var a = it.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (e = {
                data: a.data.map(function(n) {
                    return n.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        l === null && (l = pc(),
        it.updateQueue = l),
        l.memoCache = e,
        l = e.data[e.index],
        l === void 0)
            for (l = e.data[e.index] = Array(t),
            a = 0; a < t; a++)
                l[a] = St;
        return e.index++,
        l
    }
    function ke(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    function gu(t) {
        var e = Yt();
        return Sc(e, bt, t)
    }
    function Sc(t, e, l) {
        var a = t.queue;
        if (a === null)
            throw Error(f(311));
        a.lastRenderedReducer = l;
        var n = t.baseQueue
          , u = a.pending;
        if (u !== null) {
            if (n !== null) {
                var r = n.next;
                n.next = u.next,
                u.next = r
            }
            e.baseQueue = n = u,
            a.pending = null
        }
        if (u = t.baseState,
        n === null)
            t.memoizedState = u;
        else {
            e = n.next;
            var o = r = null
              , m = null
              , T = e
              , N = !1;
            do {
                var C = T.lane & -536870913;
                if (C !== T.lane ? (ot & C) === C : (ol & C) === C) {
                    var O = T.revertLane;
                    if (O === 0)
                        m !== null && (m = m.next = {
                            lane: 0,
                            revertLane: 0,
                            action: T.action,
                            hasEagerState: T.hasEagerState,
                            eagerState: T.eagerState,
                            next: null
                        }),
                        C === ma && (N = !0);
                    else if ((ol & O) === O) {
                        T = T.next,
                        O === ma && (N = !0);
                        continue
                    } else
                        C = {
                            lane: 0,
                            revertLane: T.revertLane,
                            action: T.action,
                            hasEagerState: T.hasEagerState,
                            eagerState: T.eagerState,
                            next: null
                        },
                        m === null ? (o = m = C,
                        r = u) : m = m.next = C,
                        it.lanes |= O,
                        gl |= O;
                    C = T.action,
                    Gl && l(u, C),
                    u = T.hasEagerState ? T.eagerState : l(u, C)
                } else
                    O = {
                        lane: C,
                        revertLane: T.revertLane,
                        action: T.action,
                        hasEagerState: T.hasEagerState,
                        eagerState: T.eagerState,
                        next: null
                    },
                    m === null ? (o = m = O,
                    r = u) : m = m.next = O,
                    it.lanes |= C,
                    gl |= C;
                T = T.next
            } while (T !== null && T !== e);
            if (m === null ? r = u : m.next = o,
            !he(u, t.memoizedState) && (Qt = !0,
            N && (l = ya,
            l !== null)))
                throw l;
            t.memoizedState = u,
            t.baseState = r,
            t.baseQueue = m,
            a.lastRenderedState = u
        }
        return n === null && (a.lanes = 0),
        [t.memoizedState, a.dispatch]
    }
    function bc(t) {
        var e = Yt()
          , l = e.queue;
        if (l === null)
            throw Error(f(311));
        l.lastRenderedReducer = t;
        var a = l.dispatch
          , n = l.pending
          , u = e.memoizedState;
        if (n !== null) {
            l.pending = null;
            var r = n = n.next;
            do
                u = t(u, r.action),
                r = r.next;
            while (r !== n);
            he(u, e.memoizedState) || (Qt = !0),
            e.memoizedState = u,
            e.baseQueue === null && (e.baseState = u),
            l.lastRenderedState = u
        }
        return [u, a]
    }
    function vs(t, e, l) {
        var a = it
          , n = Yt()
          , u = yt;
        if (u) {
            if (l === void 0)
                throw Error(f(407));
            l = l()
        } else
            l = e();
        var r = !he((bt || n).memoizedState, l);
        r && (n.memoizedState = l,
        Qt = !0),
        n = n.queue;
        var o = Ss.bind(null, a, n, t);
        if (on(2048, 8, o, [t]),
        n.getSnapshot !== e || r || Vt !== null && Vt.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            Sa(9, Su(), gs.bind(null, a, n, l, e), null),
            Rt === null)
                throw Error(f(349));
            u || (ol & 124) !== 0 || ps(a, e, l)
        }
        return l
    }
    function ps(t, e, l) {
        t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: l
        },
        e = it.updateQueue,
        e === null ? (e = pc(),
        it.updateQueue = e,
        e.stores = [t]) : (l = e.stores,
        l === null ? e.stores = [t] : l.push(t))
    }
    function gs(t, e, l, a) {
        e.value = l,
        e.getSnapshot = a,
        bs(e) && Es(t)
    }
    function Ss(t, e, l) {
        return l(function() {
            bs(e) && Es(t)
        })
    }
    function bs(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var l = e();
            return !he(t, l)
        } catch {
            return !0
        }
    }
    function Es(t) {
        var e = sa(t, 2);
        e !== null && Se(e, t, 2)
    }
    function Ec(t) {
        var e = ie();
        if (typeof t == "function") {
            var l = t;
            if (t = l(),
            Gl) {
                nl(!0);
                try {
                    l()
                } finally {
                    nl(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ke,
            lastRenderedState: t
        },
        e
    }
    function Ts(t, e, l, a) {
        return t.baseState = l,
        Sc(t, bt, typeof a == "function" ? a : ke)
    }
    function rm(t, e, l, a, n) {
        if (Eu(t))
            throw Error(f(485));
        if (t = e.action,
        t !== null) {
            var u = {
                payload: n,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(r) {
                    u.listeners.push(r)
                }
            };
            g.T !== null ? l(!0) : u.isTransition = !1,
            a(u),
            l = e.pending,
            l === null ? (u.next = e.pending = u,
            Os(e, u)) : (u.next = l.next,
            e.pending = l.next = u)
        }
    }
    function Os(t, e) {
        var l = e.action
          , a = e.payload
          , n = t.state;
        if (e.isTransition) {
            var u = g.T
              , r = {};
            g.T = r;
            try {
                var o = l(n, a)
                  , m = g.S;
                m !== null && m(r, o),
                As(t, e, o)
            } catch (T) {
                Tc(t, e, T)
            } finally {
                g.T = u
            }
        } else
            try {
                u = l(n, a),
                As(t, e, u)
            } catch (T) {
                Tc(t, e, T)
            }
    }
    function As(t, e, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
            Us(t, e, a)
        }, function(a) {
            return Tc(t, e, a)
        }) : Us(t, e, l)
    }
    function Us(t, e, l) {
        e.status = "fulfilled",
        e.value = l,
        Rs(e),
        t.state = l,
        e = t.pending,
        e !== null && (l = e.next,
        l === e ? t.pending = null : (l = l.next,
        e.next = l,
        Os(t, l)))
    }
    function Tc(t, e, l) {
        var a = t.pending;
        if (t.pending = null,
        a !== null) {
            a = a.next;
            do
                e.status = "rejected",
                e.reason = l,
                Rs(e),
                e = e.next;
            while (e !== a)
        }
        t.action = null
    }
    function Rs(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
    function xs(t, e) {
        return e
    }
    function Ms(t, e) {
        if (yt) {
            var l = Rt.formState;
            if (l !== null) {
                t: {
                    var a = it;
                    if (yt) {
                        if (qt) {
                            e: {
                                for (var n = qt, u = He; n.nodeType !== 8; ) {
                                    if (!u) {
                                        n = null;
                                        break e
                                    }
                                    if (n = qe(n.nextSibling),
                                    n === null) {
                                        n = null;
                                        break e
                                    }
                                }
                                u = n.data,
                                n = u === "F!" || u === "F" ? n : null
                            }
                            if (n) {
                                qt = qe(n.nextSibling),
                                a = n.data === "F!";
                                break t
                            }
                        }
                        wl(a)
                    }
                    a = !1
                }
                a && (e = l[0])
            }
        }
        return l = ie(),
        l.memoizedState = l.baseState = e,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: xs,
            lastRenderedState: e
        },
        l.queue = a,
        l = Js.bind(null, it, a),
        a.dispatch = l,
        a = Ec(!1),
        u = xc.bind(null, it, !1, a.queue),
        a = ie(),
        n = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        },
        a.queue = n,
        l = rm.bind(null, it, n, u, l),
        n.dispatch = l,
        a.memoizedState = t,
        [e, l, !1]
    }
    function Ds(t) {
        var e = Yt();
        return _s(e, bt, t)
    }
    function _s(t, e, l) {
        if (e = Sc(t, e, xs)[0],
        t = gu(ke)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var a = sn(e)
            } catch (r) {
                throw r === an ? du : r
            }
        else
            a = e;
        e = Yt();
        var n = e.queue
          , u = n.dispatch;
        return l !== e.memoizedState && (it.flags |= 2048,
        Sa(9, Su(), sm.bind(null, n, l), null)),
        [a, u, t]
    }
    function sm(t, e) {
        t.action = e
    }
    function Ns(t) {
        var e = Yt()
          , l = bt;
        if (l !== null)
            return _s(e, l, t);
        Yt(),
        e = e.memoizedState,
        l = Yt();
        var a = l.queue.dispatch;
        return l.memoizedState = t,
        [e, a, !1]
    }
    function Sa(t, e, l, a) {
        return t = {
            tag: t,
            create: l,
            deps: a,
            inst: e,
            next: null
        },
        e = it.updateQueue,
        e === null && (e = pc(),
        it.updateQueue = e),
        l = e.lastEffect,
        l === null ? e.lastEffect = t.next = t : (a = l.next,
        l.next = t,
        t.next = a,
        e.lastEffect = t),
        t
    }
    function Su() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function qs() {
        return Yt().memoizedState
    }
    function bu(t, e, l, a) {
        var n = ie();
        a = a === void 0 ? null : a,
        it.flags |= t,
        n.memoizedState = Sa(1 | e, Su(), l, a)
    }
    function on(t, e, l, a) {
        var n = Yt();
        a = a === void 0 ? null : a;
        var u = n.memoizedState.inst;
        bt !== null && a !== null && dc(a, bt.memoizedState.deps) ? n.memoizedState = Sa(e, u, l, a) : (it.flags |= t,
        n.memoizedState = Sa(1 | e, u, l, a))
    }
    function zs(t, e) {
        bu(8390656, 8, t, e)
    }
    function Cs(t, e) {
        on(2048, 8, t, e)
    }
    function Hs(t, e) {
        return on(4, 2, t, e)
    }
    function js(t, e) {
        return on(4, 4, t, e)
    }
    function ws(t, e) {
        if (typeof e == "function") {
            t = t();
            var l = e(t);
            return function() {
                typeof l == "function" ? l() : e(null)
            }
        }
        if (e != null)
            return t = t(),
            e.current = t,
            function() {
                e.current = null
            }
    }
    function Bs(t, e, l) {
        l = l != null ? l.concat([t]) : null,
        on(4, 4, ws.bind(null, e, t), l)
    }
    function Oc() {}
    function Vs(t, e) {
        var l = Yt();
        e = e === void 0 ? null : e;
        var a = l.memoizedState;
        return e !== null && dc(e, a[1]) ? a[0] : (l.memoizedState = [t, e],
        t)
    }
    function Ys(t, e) {
        var l = Yt();
        e = e === void 0 ? null : e;
        var a = l.memoizedState;
        if (e !== null && dc(e, a[1]))
            return a[0];
        if (a = t(),
        Gl) {
            nl(!0);
            try {
                t()
            } finally {
                nl(!1)
            }
        }
        return l.memoizedState = [a, e],
        a
    }
    function Ac(t, e, l) {
        return l === void 0 || (ol & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = l,
        t = Zo(),
        it.lanes |= t,
        gl |= t,
        l)
    }
    function Gs(t, e, l, a) {
        return he(l, e) ? l : va.current !== null ? (t = Ac(t, l, a),
        he(t, e) || (Qt = !0),
        t) : (ol & 42) === 0 ? (Qt = !0,
        t.memoizedState = l) : (t = Zo(),
        it.lanes |= t,
        gl |= t,
        e)
    }
    function Ks(t, e, l, a, n) {
        var u = M.p;
        M.p = u !== 0 && 8 > u ? u : 8;
        var r = g.T
          , o = {};
        g.T = o,
        xc(t, !1, e, l);
        try {
            var m = n()
              , T = g.S;
            if (T !== null && T(o, m),
            m !== null && typeof m == "object" && typeof m.then == "function") {
                var N = im(m, a);
                dn(t, e, N, ge(t))
            } else
                dn(t, e, a, ge(t))
        } catch (C) {
            dn(t, e, {
                then: function() {},
                status: "rejected",
                reason: C
            }, ge())
        } finally {
            M.p = u,
            g.T = r
        }
    }
    function om() {}
    function Uc(t, e, l, a) {
        if (t.tag !== 5)
            throw Error(f(476));
        var n = Xs(t).queue;
        Ks(t, n, e, q, l === null ? om : function() {
            return Zs(t),
            l(a)
        }
        )
    }
    function Xs(t) {
        var e = t.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: q,
            baseState: q,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ke,
                lastRenderedState: q
            },
            next: null
        };
        var l = {};
        return e.next = {
            memoizedState: l,
            baseState: l,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ke,
                lastRenderedState: l
            },
            next: null
        },
        t.memoizedState = e,
        t = t.alternate,
        t !== null && (t.memoizedState = e),
        e
    }
    function Zs(t) {
        var e = Xs(t).next.queue;
        dn(t, e, {}, ge())
    }
    function Rc() {
        return te(_n)
    }
    function Ls() {
        return Yt().memoizedState
    }
    function Qs() {
        return Yt().memoizedState
    }
    function dm(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var l = ge();
                t = rl(l);
                var a = sl(e, t, l);
                a !== null && (Se(a, e, l),
                un(a, e, l)),
                e = {
                    cache: lc()
                },
                t.payload = e;
                return
            }
            e = e.return
        }
    }
    function hm(t, e, l) {
        var a = ge();
        l = {
            lane: a,
            revertLane: 0,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Eu(t) ? Ws(e, l) : (l = Qi(t, e, l, a),
        l !== null && (Se(l, t, a),
        ks(l, e, a)))
    }
    function Js(t, e, l) {
        var a = ge();
        dn(t, e, l, a)
    }
    function dn(t, e, l, a) {
        var n = {
            lane: a,
            revertLane: 0,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Eu(t))
            Ws(e, n);
        else {
            var u = t.alternate;
            if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer,
            u !== null))
                try {
                    var r = e.lastRenderedState
                      , o = u(r, l);
                    if (n.hasEagerState = !0,
                    n.eagerState = o,
                    he(o, r))
                        return nu(t, e, n, 0),
                        Rt === null && au(),
                        !1
                } catch {} finally {}
            if (l = Qi(t, e, n, a),
            l !== null)
                return Se(l, t, a),
                ks(l, e, a),
                !0
        }
        return !1
    }
    function xc(t, e, l, a) {
        if (a = {
            lane: 2,
            revertLane: uf(),
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Eu(t)) {
            if (e)
                throw Error(f(479))
        } else
            e = Qi(t, l, a, 2),
            e !== null && Se(e, t, 2)
    }
    function Eu(t) {
        var e = t.alternate;
        return t === it || e !== null && e === it
    }
    function Ws(t, e) {
        pa = yu = !0;
        var l = t.pending;
        l === null ? e.next = e : (e.next = l.next,
        l.next = e),
        t.pending = e
    }
    function ks(t, e, l) {
        if ((l & 4194048) !== 0) {
            var a = e.lanes;
            a &= t.pendingLanes,
            l |= a,
            e.lanes = l,
            ar(t, l)
        }
    }
    var Tu = {
        readContext: te,
        use: pu,
        useCallback: Ht,
        useContext: Ht,
        useEffect: Ht,
        useImperativeHandle: Ht,
        useLayoutEffect: Ht,
        useInsertionEffect: Ht,
        useMemo: Ht,
        useReducer: Ht,
        useRef: Ht,
        useState: Ht,
        useDebugValue: Ht,
        useDeferredValue: Ht,
        useTransition: Ht,
        useSyncExternalStore: Ht,
        useId: Ht,
        useHostTransitionStatus: Ht,
        useFormState: Ht,
        useActionState: Ht,
        useOptimistic: Ht,
        useMemoCache: Ht,
        useCacheRefresh: Ht
    }
      , $s = {
        readContext: te,
        use: pu,
        useCallback: function(t, e) {
            return ie().memoizedState = [t, e === void 0 ? null : e],
            t
        },
        useContext: te,
        useEffect: zs,
        useImperativeHandle: function(t, e, l) {
            l = l != null ? l.concat([t]) : null,
            bu(4194308, 4, ws.bind(null, e, t), l)
        },
        useLayoutEffect: function(t, e) {
            return bu(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            bu(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var l = ie();
            e = e === void 0 ? null : e;
            var a = t();
            if (Gl) {
                nl(!0);
                try {
                    t()
                } finally {
                    nl(!1)
                }
            }
            return l.memoizedState = [a, e],
            a
        },
        useReducer: function(t, e, l) {
            var a = ie();
            if (l !== void 0) {
                var n = l(e);
                if (Gl) {
                    nl(!0);
                    try {
                        l(e)
                    } finally {
                        nl(!1)
                    }
                }
            } else
                n = e;
            return a.memoizedState = a.baseState = n,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: n
            },
            a.queue = t,
            t = t.dispatch = hm.bind(null, it, t),
            [a.memoizedState, t]
        },
        useRef: function(t) {
            var e = ie();
            return t = {
                current: t
            },
            e.memoizedState = t
        },
        useState: function(t) {
            t = Ec(t);
            var e = t.queue
              , l = Js.bind(null, it, e);
            return e.dispatch = l,
            [t.memoizedState, l]
        },
        useDebugValue: Oc,
        useDeferredValue: function(t, e) {
            var l = ie();
            return Ac(l, t, e)
        },
        useTransition: function() {
            var t = Ec(!1);
            return t = Ks.bind(null, it, t.queue, !0, !1),
            ie().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, e, l) {
            var a = it
              , n = ie();
            if (yt) {
                if (l === void 0)
                    throw Error(f(407));
                l = l()
            } else {
                if (l = e(),
                Rt === null)
                    throw Error(f(349));
                (ot & 124) !== 0 || ps(a, e, l)
            }
            n.memoizedState = l;
            var u = {
                value: l,
                getSnapshot: e
            };
            return n.queue = u,
            zs(Ss.bind(null, a, u, t), [t]),
            a.flags |= 2048,
            Sa(9, Su(), gs.bind(null, a, u, l, e), null),
            l
        },
        useId: function() {
            var t = ie()
              , e = Rt.identifierPrefix;
            if (yt) {
                var l = Qe
                  , a = Le;
                l = (a & ~(1 << 32 - de(a) - 1)).toString(32) + l,
                e = "«" + e + "R" + l,
                l = vu++,
                0 < l && (e += "H" + l.toString(32)),
                e += "»"
            } else
                l = cm++,
                e = "«" + e + "r" + l.toString(32) + "»";
            return t.memoizedState = e
        },
        useHostTransitionStatus: Rc,
        useFormState: Ms,
        useActionState: Ms,
        useOptimistic: function(t) {
            var e = ie();
            e.memoizedState = e.baseState = t;
            var l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = l,
            e = xc.bind(null, it, !0, l),
            l.dispatch = e,
            [t, e]
        },
        useMemoCache: gc,
        useCacheRefresh: function() {
            return ie().memoizedState = dm.bind(null, it)
        }
    }
      , Fs = {
        readContext: te,
        use: pu,
        useCallback: Vs,
        useContext: te,
        useEffect: Cs,
        useImperativeHandle: Bs,
        useInsertionEffect: Hs,
        useLayoutEffect: js,
        useMemo: Ys,
        useReducer: gu,
        useRef: qs,
        useState: function() {
            return gu(ke)
        },
        useDebugValue: Oc,
        useDeferredValue: function(t, e) {
            var l = Yt();
            return Gs(l, bt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = gu(ke)[0]
              , e = Yt().memoizedState;
            return [typeof t == "boolean" ? t : sn(t), e]
        },
        useSyncExternalStore: vs,
        useId: Ls,
        useHostTransitionStatus: Rc,
        useFormState: Ds,
        useActionState: Ds,
        useOptimistic: function(t, e) {
            var l = Yt();
            return Ts(l, bt, t, e)
        },
        useMemoCache: gc,
        useCacheRefresh: Qs
    }
      , mm = {
        readContext: te,
        use: pu,
        useCallback: Vs,
        useContext: te,
        useEffect: Cs,
        useImperativeHandle: Bs,
        useInsertionEffect: Hs,
        useLayoutEffect: js,
        useMemo: Ys,
        useReducer: bc,
        useRef: qs,
        useState: function() {
            return bc(ke)
        },
        useDebugValue: Oc,
        useDeferredValue: function(t, e) {
            var l = Yt();
            return bt === null ? Ac(l, t, e) : Gs(l, bt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = bc(ke)[0]
              , e = Yt().memoizedState;
            return [typeof t == "boolean" ? t : sn(t), e]
        },
        useSyncExternalStore: vs,
        useId: Ls,
        useHostTransitionStatus: Rc,
        useFormState: Ns,
        useActionState: Ns,
        useOptimistic: function(t, e) {
            var l = Yt();
            return bt !== null ? Ts(l, bt, t, e) : (l.baseState = t,
            [t, l.queue.dispatch])
        },
        useMemoCache: gc,
        useCacheRefresh: Qs
    }
      , ba = null
      , hn = 0;
    function Ou(t) {
        var e = hn;
        return hn += 1,
        ba === null && (ba = []),
        fs(ba, t, e)
    }
    function mn(t, e) {
        e = e.props.ref,
        t.ref = e !== void 0 ? e : null
    }
    function Au(t, e) {
        throw e.$$typeof === H ? Error(f(525)) : (t = Object.prototype.toString.call(e),
        Error(f(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }
    function Ps(t) {
        var e = t._init;
        return e(t._payload)
    }
    function Is(t) {
        function e(b, p) {
            if (t) {
                var E = b.deletions;
                E === null ? (b.deletions = [p],
                b.flags |= 16) : E.push(p)
            }
        }
        function l(b, p) {
            if (!t)
                return null;
            for (; p !== null; )
                e(b, p),
                p = p.sibling;
            return null
        }
        function a(b) {
            for (var p = new Map; b !== null; )
                b.key !== null ? p.set(b.key, b) : p.set(b.index, b),
                b = b.sibling;
            return p
        }
        function n(b, p) {
            return b = Ze(b, p),
            b.index = 0,
            b.sibling = null,
            b
        }
        function u(b, p, E) {
            return b.index = E,
            t ? (E = b.alternate,
            E !== null ? (E = E.index,
            E < p ? (b.flags |= 67108866,
            p) : E) : (b.flags |= 67108866,
            p)) : (b.flags |= 1048576,
            p)
        }
        function r(b) {
            return t && b.alternate === null && (b.flags |= 67108866),
            b
        }
        function o(b, p, E, z) {
            return p === null || p.tag !== 6 ? (p = Wi(E, b.mode, z),
            p.return = b,
            p) : (p = n(p, E),
            p.return = b,
            p)
        }
        function m(b, p, E, z) {
            var L = E.type;
            return L === V ? N(b, p, E.props.children, z, E.key) : p !== null && (p.elementType === L || typeof L == "object" && L !== null && L.$$typeof === xt && Ps(L) === p.type) ? (p = n(p, E.props),
            mn(p, E),
            p.return = b,
            p) : (p = iu(E.type, E.key, E.props, null, b.mode, z),
            mn(p, E),
            p.return = b,
            p)
        }
        function T(b, p, E, z) {
            return p === null || p.tag !== 4 || p.stateNode.containerInfo !== E.containerInfo || p.stateNode.implementation !== E.implementation ? (p = ki(E, b.mode, z),
            p.return = b,
            p) : (p = n(p, E.children || []),
            p.return = b,
            p)
        }
        function N(b, p, E, z, L) {
            return p === null || p.tag !== 7 ? (p = zl(E, b.mode, z, L),
            p.return = b,
            p) : (p = n(p, E),
            p.return = b,
            p)
        }
        function C(b, p, E) {
            if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
                return p = Wi("" + p, b.mode, E),
                p.return = b,
                p;
            if (typeof p == "object" && p !== null) {
                switch (p.$$typeof) {
                case Y:
                    return E = iu(p.type, p.key, p.props, null, b.mode, E),
                    mn(E, p),
                    E.return = b,
                    E;
                case P:
                    return p = ki(p, b.mode, E),
                    p.return = b,
                    p;
                case xt:
                    var z = p._init;
                    return p = z(p._payload),
                    C(b, p, E)
                }
                if (B(p) || Mt(p))
                    return p = zl(p, b.mode, E, null),
                    p.return = b,
                    p;
                if (typeof p.then == "function")
                    return C(b, Ou(p), E);
                if (p.$$typeof === at)
                    return C(b, su(b, p), E);
                Au(b, p)
            }
            return null
        }
        function O(b, p, E, z) {
            var L = p !== null ? p.key : null;
            if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
                return L !== null ? null : o(b, p, "" + E, z);
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case Y:
                    return E.key === L ? m(b, p, E, z) : null;
                case P:
                    return E.key === L ? T(b, p, E, z) : null;
                case xt:
                    return L = E._init,
                    E = L(E._payload),
                    O(b, p, E, z)
                }
                if (B(E) || Mt(E))
                    return L !== null ? null : N(b, p, E, z, null);
                if (typeof E.then == "function")
                    return O(b, p, Ou(E), z);
                if (E.$$typeof === at)
                    return O(b, p, su(b, E), z);
                Au(b, E)
            }
            return null
        }
        function A(b, p, E, z, L) {
            if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
                return b = b.get(E) || null,
                o(p, b, "" + z, L);
            if (typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                case Y:
                    return b = b.get(z.key === null ? E : z.key) || null,
                    m(p, b, z, L);
                case P:
                    return b = b.get(z.key === null ? E : z.key) || null,
                    T(p, b, z, L);
                case xt:
                    var ct = z._init;
                    return z = ct(z._payload),
                    A(b, p, E, z, L)
                }
                if (B(z) || Mt(z))
                    return b = b.get(E) || null,
                    N(p, b, z, L, null);
                if (typeof z.then == "function")
                    return A(b, p, E, Ou(z), L);
                if (z.$$typeof === at)
                    return A(b, p, E, su(p, z), L);
                Au(p, z)
            }
            return null
        }
        function tt(b, p, E, z) {
            for (var L = null, ct = null, Q = p, I = p = 0, Wt = null; Q !== null && I < E.length; I++) {
                Q.index > I ? (Wt = Q,
                Q = null) : Wt = Q.sibling;
                var mt = O(b, Q, E[I], z);
                if (mt === null) {
                    Q === null && (Q = Wt);
                    break
                }
                t && Q && mt.alternate === null && e(b, Q),
                p = u(mt, p, I),
                ct === null ? L = mt : ct.sibling = mt,
                ct = mt,
                Q = Wt
            }
            if (I === E.length)
                return l(b, Q),
                yt && Hl(b, I),
                L;
            if (Q === null) {
                for (; I < E.length; I++)
                    Q = C(b, E[I], z),
                    Q !== null && (p = u(Q, p, I),
                    ct === null ? L = Q : ct.sibling = Q,
                    ct = Q);
                return yt && Hl(b, I),
                L
            }
            for (Q = a(Q); I < E.length; I++)
                Wt = A(Q, b, I, E[I], z),
                Wt !== null && (t && Wt.alternate !== null && Q.delete(Wt.key === null ? I : Wt.key),
                p = u(Wt, p, I),
                ct === null ? L = Wt : ct.sibling = Wt,
                ct = Wt);
            return t && Q.forEach(function(xl) {
                return e(b, xl)
            }),
            yt && Hl(b, I),
            L
        }
        function F(b, p, E, z) {
            if (E == null)
                throw Error(f(151));
            for (var L = null, ct = null, Q = p, I = p = 0, Wt = null, mt = E.next(); Q !== null && !mt.done; I++,
            mt = E.next()) {
                Q.index > I ? (Wt = Q,
                Q = null) : Wt = Q.sibling;
                var xl = O(b, Q, mt.value, z);
                if (xl === null) {
                    Q === null && (Q = Wt);
                    break
                }
                t && Q && xl.alternate === null && e(b, Q),
                p = u(xl, p, I),
                ct === null ? L = xl : ct.sibling = xl,
                ct = xl,
                Q = Wt
            }
            if (mt.done)
                return l(b, Q),
                yt && Hl(b, I),
                L;
            if (Q === null) {
                for (; !mt.done; I++,
                mt = E.next())
                    mt = C(b, mt.value, z),
                    mt !== null && (p = u(mt, p, I),
                    ct === null ? L = mt : ct.sibling = mt,
                    ct = mt);
                return yt && Hl(b, I),
                L
            }
            for (Q = a(Q); !mt.done; I++,
            mt = E.next())
                mt = A(Q, b, I, mt.value, z),
                mt !== null && (t && mt.alternate !== null && Q.delete(mt.key === null ? I : mt.key),
                p = u(mt, p, I),
                ct === null ? L = mt : ct.sibling = mt,
                ct = mt);
            return t && Q.forEach(function(yy) {
                return e(b, yy)
            }),
            yt && Hl(b, I),
            L
        }
        function Tt(b, p, E, z) {
            if (typeof E == "object" && E !== null && E.type === V && E.key === null && (E = E.props.children),
            typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case Y:
                    t: {
                        for (var L = E.key; p !== null; ) {
                            if (p.key === L) {
                                if (L = E.type,
                                L === V) {
                                    if (p.tag === 7) {
                                        l(b, p.sibling),
                                        z = n(p, E.props.children),
                                        z.return = b,
                                        b = z;
                                        break t
                                    }
                                } else if (p.elementType === L || typeof L == "object" && L !== null && L.$$typeof === xt && Ps(L) === p.type) {
                                    l(b, p.sibling),
                                    z = n(p, E.props),
                                    mn(z, E),
                                    z.return = b,
                                    b = z;
                                    break t
                                }
                                l(b, p);
                                break
                            } else
                                e(b, p);
                            p = p.sibling
                        }
                        E.type === V ? (z = zl(E.props.children, b.mode, z, E.key),
                        z.return = b,
                        b = z) : (z = iu(E.type, E.key, E.props, null, b.mode, z),
                        mn(z, E),
                        z.return = b,
                        b = z)
                    }
                    return r(b);
                case P:
                    t: {
                        for (L = E.key; p !== null; ) {
                            if (p.key === L)
                                if (p.tag === 4 && p.stateNode.containerInfo === E.containerInfo && p.stateNode.implementation === E.implementation) {
                                    l(b, p.sibling),
                                    z = n(p, E.children || []),
                                    z.return = b,
                                    b = z;
                                    break t
                                } else {
                                    l(b, p);
                                    break
                                }
                            else
                                e(b, p);
                            p = p.sibling
                        }
                        z = ki(E, b.mode, z),
                        z.return = b,
                        b = z
                    }
                    return r(b);
                case xt:
                    return L = E._init,
                    E = L(E._payload),
                    Tt(b, p, E, z)
                }
                if (B(E))
                    return tt(b, p, E, z);
                if (Mt(E)) {
                    if (L = Mt(E),
                    typeof L != "function")
                        throw Error(f(150));
                    return E = L.call(E),
                    F(b, p, E, z)
                }
                if (typeof E.then == "function")
                    return Tt(b, p, Ou(E), z);
                if (E.$$typeof === at)
                    return Tt(b, p, su(b, E), z);
                Au(b, E)
            }
            return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E,
            p !== null && p.tag === 6 ? (l(b, p.sibling),
            z = n(p, E),
            z.return = b,
            b = z) : (l(b, p),
            z = Wi(E, b.mode, z),
            z.return = b,
            b = z),
            r(b)) : l(b, p)
        }
        return function(b, p, E, z) {
            try {
                hn = 0;
                var L = Tt(b, p, E, z);
                return ba = null,
                L
            } catch (Q) {
                if (Q === an || Q === du)
                    throw Q;
                var ct = me(29, Q, null, b.mode);
                return ct.lanes = z,
                ct.return = b,
                ct
            } finally {}
        }
    }
    var Ea = Is(!0)
      , to = Is(!1)
      , xe = D(null)
      , je = null;
    function dl(t) {
        var e = t.alternate;
        j(Kt, Kt.current & 1),
        j(xe, t),
        je === null && (e === null || va.current !== null || e.memoizedState !== null) && (je = t)
    }
    function eo(t) {
        if (t.tag === 22) {
            if (j(Kt, Kt.current),
            j(xe, t),
            je === null) {
                var e = t.alternate;
                e !== null && e.memoizedState !== null && (je = t)
            }
        } else
            hl()
    }
    function hl() {
        j(Kt, Kt.current),
        j(xe, xe.current)
    }
    function $e(t) {
        w(xe),
        je === t && (je = null),
        w(Kt)
    }
    var Kt = D(0);
    function Uu(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var l = e.memoizedState;
                if (l !== null && (l = l.dehydrated,
                l === null || l.data === "$?" || gf(l)))
                    return e
            } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    function Mc(t, e, l, a) {
        e = t.memoizedState,
        l = l(a, e),
        l = l == null ? e : U({}, e, l),
        t.memoizedState = l,
        t.lanes === 0 && (t.updateQueue.baseState = l)
    }
    var Dc = {
        enqueueSetState: function(t, e, l) {
            t = t._reactInternals;
            var a = ge()
              , n = rl(a);
            n.payload = e,
            l != null && (n.callback = l),
            e = sl(t, n, a),
            e !== null && (Se(e, t, a),
            un(e, t, a))
        },
        enqueueReplaceState: function(t, e, l) {
            t = t._reactInternals;
            var a = ge()
              , n = rl(a);
            n.tag = 1,
            n.payload = e,
            l != null && (n.callback = l),
            e = sl(t, n, a),
            e !== null && (Se(e, t, a),
            un(e, t, a))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var l = ge()
              , a = rl(l);
            a.tag = 2,
            e != null && (a.callback = e),
            e = sl(t, a, l),
            e !== null && (Se(e, t, l),
            un(e, t, l))
        }
    };
    function lo(t, e, l, a, n, u, r) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, r) : e.prototype && e.prototype.isPureReactComponent ? !ka(l, a) || !ka(n, u) : !0
    }
    function ao(t, e, l, a) {
        t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a),
        e.state !== t && Dc.enqueueReplaceState(e, e.state, null)
    }
    function Kl(t, e) {
        var l = e;
        if ("ref"in e) {
            l = {};
            for (var a in e)
                a !== "ref" && (l[a] = e[a])
        }
        if (t = t.defaultProps) {
            l === e && (l = U({}, l));
            for (var n in t)
                l[n] === void 0 && (l[n] = t[n])
        }
        return l
    }
    var Ru = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
    ;
    function no(t) {
        Ru(t)
    }
    function uo(t) {
        console.error(t)
    }
    function io(t) {
        Ru(t)
    }
    function xu(t, e) {
        try {
            var l = t.onUncaughtError;
            l(e.value, {
                componentStack: e.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function co(t, e, l) {
        try {
            var a = t.onCaughtError;
            a(l.value, {
                componentStack: l.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    function _c(t, e, l) {
        return l = rl(l),
        l.tag = 3,
        l.payload = {
            element: null
        },
        l.callback = function() {
            xu(t, e)
        }
        ,
        l
    }
    function fo(t) {
        return t = rl(t),
        t.tag = 3,
        t
    }
    function ro(t, e, l, a) {
        var n = l.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var u = a.value;
            t.payload = function() {
                return n(u)
            }
            ,
            t.callback = function() {
                co(e, l, a)
            }
        }
        var r = l.stateNode;
        r !== null && typeof r.componentDidCatch == "function" && (t.callback = function() {
            co(e, l, a),
            typeof n != "function" && (Sl === null ? Sl = new Set([this]) : Sl.add(this));
            var o = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: o !== null ? o : ""
            })
        }
        )
    }
    function ym(t, e, l, a, n) {
        if (l.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (e = l.alternate,
            e !== null && tn(e, l, n, !0),
            l = xe.current,
            l !== null) {
                switch (l.tag) {
                case 13:
                    return je === null ? tf() : l.alternate === null && zt === 0 && (zt = 3),
                    l.flags &= -257,
                    l.flags |= 65536,
                    l.lanes = n,
                    a === uc ? l.flags |= 16384 : (e = l.updateQueue,
                    e === null ? l.updateQueue = new Set([a]) : e.add(a),
                    lf(t, a, n)),
                    !1;
                case 22:
                    return l.flags |= 65536,
                    a === uc ? l.flags |= 16384 : (e = l.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    l.updateQueue = e) : (l = e.retryQueue,
                    l === null ? e.retryQueue = new Set([a]) : l.add(a)),
                    lf(t, a, n)),
                    !1
                }
                throw Error(f(435, l.tag))
            }
            return lf(t, a, n),
            tf(),
            !1
        }
        if (yt)
            return e = xe.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = n,
            a !== Pi && (t = Error(f(422), {
                cause: a
            }),
            Ia(Oe(t, l)))) : (a !== Pi && (e = Error(f(423), {
                cause: a
            }),
            Ia(Oe(e, l))),
            t = t.current.alternate,
            t.flags |= 65536,
            n &= -n,
            t.lanes |= n,
            a = Oe(a, l),
            n = _c(t.stateNode, a, n),
            fc(t, n),
            zt !== 4 && (zt = 2)),
            !1;
        var u = Error(f(520), {
            cause: a
        });
        if (u = Oe(u, l),
        En === null ? En = [u] : En.push(u),
        zt !== 4 && (zt = 2),
        e === null)
            return !0;
        a = Oe(a, l),
        l = e;
        do {
            switch (l.tag) {
            case 3:
                return l.flags |= 65536,
                t = n & -n,
                l.lanes |= t,
                t = _c(l.stateNode, a, t),
                fc(l, t),
                !1;
            case 1:
                if (e = l.type,
                u = l.stateNode,
                (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Sl === null || !Sl.has(u))))
                    return l.flags |= 65536,
                    n &= -n,
                    l.lanes |= n,
                    n = fo(n),
                    ro(n, t, l, a),
                    fc(l, n),
                    !1
            }
            l = l.return
        } while (l !== null);
        return !1
    }
    var so = Error(f(461))
      , Qt = !1;
    function kt(t, e, l, a) {
        e.child = t === null ? to(e, null, l, a) : Ea(e, t.child, l, a)
    }
    function oo(t, e, l, a, n) {
        l = l.render;
        var u = e.ref;
        if ("ref"in a) {
            var r = {};
            for (var o in a)
                o !== "ref" && (r[o] = a[o])
        } else
            r = a;
        return Vl(e),
        a = hc(t, e, l, r, u, n),
        o = mc(),
        t !== null && !Qt ? (yc(t, e, n),
        Fe(t, e, n)) : (yt && o && $i(e),
        e.flags |= 1,
        kt(t, e, a, n),
        e.child)
    }
    function ho(t, e, l, a, n) {
        if (t === null) {
            var u = l.type;
            return typeof u == "function" && !Ji(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15,
            e.type = u,
            mo(t, e, u, a, n)) : (t = iu(l.type, null, a, e, e.mode, n),
            t.ref = e.ref,
            t.return = e,
            e.child = t)
        }
        if (u = t.child,
        !Bc(t, n)) {
            var r = u.memoizedProps;
            if (l = l.compare,
            l = l !== null ? l : ka,
            l(r, a) && t.ref === e.ref)
                return Fe(t, e, n)
        }
        return e.flags |= 1,
        t = Ze(u, a),
        t.ref = e.ref,
        t.return = e,
        e.child = t
    }
    function mo(t, e, l, a, n) {
        if (t !== null) {
            var u = t.memoizedProps;
            if (ka(u, a) && t.ref === e.ref)
                if (Qt = !1,
                e.pendingProps = a = u,
                Bc(t, n))
                    (t.flags & 131072) !== 0 && (Qt = !0);
                else
                    return e.lanes = t.lanes,
                    Fe(t, e, n)
        }
        return Nc(t, e, l, a, n)
    }
    function yo(t, e, l) {
        var a = e.pendingProps
          , n = a.children
          , u = t !== null ? t.memoizedState : null;
        if (a.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (a = u !== null ? u.baseLanes | l : l,
                t !== null) {
                    for (n = e.child = t.child,
                    u = 0; n !== null; )
                        u = u | n.lanes | n.childLanes,
                        n = n.sibling;
                    e.childLanes = u & ~a
                } else
                    e.childLanes = 0,
                    e.child = null;
                return vo(t, e, a, l)
            }
            if ((l & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && ou(e, u !== null ? u.cachePool : null),
                u !== null ? hs(e, u) : sc(),
                eo(e);
            else
                return e.lanes = e.childLanes = 536870912,
                vo(t, e, u !== null ? u.baseLanes | l : l, l)
        } else
            u !== null ? (ou(e, u.cachePool),
            hs(e, u),
            hl(),
            e.memoizedState = null) : (t !== null && ou(e, null),
            sc(),
            hl());
        return kt(t, e, n, l),
        e.child
    }
    function vo(t, e, l, a) {
        var n = nc();
        return n = n === null ? null : {
            parent: Gt._currentValue,
            pool: n
        },
        e.memoizedState = {
            baseLanes: l,
            cachePool: n
        },
        t !== null && ou(e, null),
        sc(),
        eo(e),
        t !== null && tn(t, e, a, !0),
        null
    }
    function Mu(t, e) {
        var l = e.ref;
        if (l === null)
            t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof l != "function" && typeof l != "object")
                throw Error(f(284));
            (t === null || t.ref !== l) && (e.flags |= 4194816)
        }
    }
    function Nc(t, e, l, a, n) {
        return Vl(e),
        l = hc(t, e, l, a, void 0, n),
        a = mc(),
        t !== null && !Qt ? (yc(t, e, n),
        Fe(t, e, n)) : (yt && a && $i(e),
        e.flags |= 1,
        kt(t, e, l, n),
        e.child)
    }
    function po(t, e, l, a, n, u) {
        return Vl(e),
        e.updateQueue = null,
        l = ys(e, a, l, n),
        ms(t),
        a = mc(),
        t !== null && !Qt ? (yc(t, e, u),
        Fe(t, e, u)) : (yt && a && $i(e),
        e.flags |= 1,
        kt(t, e, l, u),
        e.child)
    }
    function go(t, e, l, a, n) {
        if (Vl(e),
        e.stateNode === null) {
            var u = oa
              , r = l.contextType;
            typeof r == "object" && r !== null && (u = te(r)),
            u = new l(a,u),
            e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = Dc,
            e.stateNode = u,
            u._reactInternals = e,
            u = e.stateNode,
            u.props = a,
            u.state = e.memoizedState,
            u.refs = {},
            ic(e),
            r = l.contextType,
            u.context = typeof r == "object" && r !== null ? te(r) : oa,
            u.state = e.memoizedState,
            r = l.getDerivedStateFromProps,
            typeof r == "function" && (Mc(e, l, r, a),
            u.state = e.memoizedState),
            typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (r = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            r !== u.state && Dc.enqueueReplaceState(u, u.state, null),
            fn(e, a, u, n),
            cn(),
            u.state = e.memoizedState),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            a = !0
        } else if (t === null) {
            u = e.stateNode;
            var o = e.memoizedProps
              , m = Kl(l, o);
            u.props = m;
            var T = u.context
              , N = l.contextType;
            r = oa,
            typeof N == "object" && N !== null && (r = te(N));
            var C = l.getDerivedStateFromProps;
            N = typeof C == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            o = e.pendingProps !== o,
            N || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || T !== r) && ao(e, u, a, r),
            fl = !1;
            var O = e.memoizedState;
            u.state = O,
            fn(e, a, u, n),
            cn(),
            T = e.memoizedState,
            o || O !== T || fl ? (typeof C == "function" && (Mc(e, l, C, a),
            T = e.memoizedState),
            (m = fl || lo(e, l, m, a, O, T, r)) ? (N || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = a,
            e.memoizedState = T),
            u.props = a,
            u.state = T,
            u.context = r,
            a = m) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            a = !1)
        } else {
            u = e.stateNode,
            cc(t, e),
            r = e.memoizedProps,
            N = Kl(l, r),
            u.props = N,
            C = e.pendingProps,
            O = u.context,
            T = l.contextType,
            m = oa,
            typeof T == "object" && T !== null && (m = te(T)),
            o = l.getDerivedStateFromProps,
            (T = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r !== C || O !== m) && ao(e, u, a, m),
            fl = !1,
            O = e.memoizedState,
            u.state = O,
            fn(e, a, u, n),
            cn();
            var A = e.memoizedState;
            r !== C || O !== A || fl || t !== null && t.dependencies !== null && ru(t.dependencies) ? (typeof o == "function" && (Mc(e, l, o, a),
            A = e.memoizedState),
            (N = fl || lo(e, l, N, a, O, A, m) || t !== null && t.dependencies !== null && ru(t.dependencies)) ? (T || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, A, m),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, A, m)),
            typeof u.componentDidUpdate == "function" && (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || r === t.memoizedProps && O === t.memoizedState || (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || r === t.memoizedProps && O === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = a,
            e.memoizedState = A),
            u.props = a,
            u.state = A,
            u.context = m,
            a = N) : (typeof u.componentDidUpdate != "function" || r === t.memoizedProps && O === t.memoizedState || (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || r === t.memoizedProps && O === t.memoizedState || (e.flags |= 1024),
            a = !1)
        }
        return u = a,
        Mu(t, e),
        a = (e.flags & 128) !== 0,
        u || a ? (u = e.stateNode,
        l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(),
        e.flags |= 1,
        t !== null && a ? (e.child = Ea(e, t.child, null, n),
        e.child = Ea(e, null, l, n)) : kt(t, e, l, n),
        e.memoizedState = u.state,
        t = e.child) : t = Fe(t, e, n),
        t
    }
    function So(t, e, l, a) {
        return Pa(),
        e.flags |= 256,
        kt(t, e, l, a),
        e.child
    }
    var qc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function zc(t) {
        return {
            baseLanes: t,
            cachePool: us()
        }
    }
    function Cc(t, e, l) {
        return t = t !== null ? t.childLanes & ~l : 0,
        e && (t |= Me),
        t
    }
    function bo(t, e, l) {
        var a = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, r;
        if ((r = u) || (r = t !== null && t.memoizedState === null ? !1 : (Kt.current & 2) !== 0),
        r && (n = !0,
        e.flags &= -129),
        r = (e.flags & 32) !== 0,
        e.flags &= -33,
        t === null) {
            if (yt) {
                if (n ? dl(e) : hl(),
                yt) {
                    var o = qt, m;
                    if (m = o) {
                        t: {
                            for (m = o,
                            o = He; m.nodeType !== 8; ) {
                                if (!o) {
                                    o = null;
                                    break t
                                }
                                if (m = qe(m.nextSibling),
                                m === null) {
                                    o = null;
                                    break t
                                }
                            }
                            o = m
                        }
                        o !== null ? (e.memoizedState = {
                            dehydrated: o,
                            treeContext: Cl !== null ? {
                                id: Le,
                                overflow: Qe
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        m = me(18, null, null, 0),
                        m.stateNode = o,
                        m.return = e,
                        e.child = m,
                        ae = e,
                        qt = null,
                        m = !0) : m = !1
                    }
                    m || wl(e)
                }
                if (o = e.memoizedState,
                o !== null && (o = o.dehydrated,
                o !== null))
                    return gf(o) ? e.lanes = 32 : e.lanes = 536870912,
                    null;
                $e(e)
            }
            return o = a.children,
            a = a.fallback,
            n ? (hl(),
            n = e.mode,
            o = Du({
                mode: "hidden",
                children: o
            }, n),
            a = zl(a, n, l, null),
            o.return = e,
            a.return = e,
            o.sibling = a,
            e.child = o,
            n = e.child,
            n.memoizedState = zc(l),
            n.childLanes = Cc(t, r, l),
            e.memoizedState = qc,
            a) : (dl(e),
            Hc(e, o))
        }
        if (m = t.memoizedState,
        m !== null && (o = m.dehydrated,
        o !== null)) {
            if (u)
                e.flags & 256 ? (dl(e),
                e.flags &= -257,
                e = jc(t, e, l)) : e.memoizedState !== null ? (hl(),
                e.child = t.child,
                e.flags |= 128,
                e = null) : (hl(),
                n = a.fallback,
                o = e.mode,
                a = Du({
                    mode: "visible",
                    children: a.children
                }, o),
                n = zl(n, o, l, null),
                n.flags |= 2,
                a.return = e,
                n.return = e,
                a.sibling = n,
                e.child = a,
                Ea(e, t.child, null, l),
                a = e.child,
                a.memoizedState = zc(l),
                a.childLanes = Cc(t, r, l),
                e.memoizedState = qc,
                e = n);
            else if (dl(e),
            gf(o)) {
                if (r = o.nextSibling && o.nextSibling.dataset,
                r)
                    var T = r.dgst;
                r = T,
                a = Error(f(419)),
                a.stack = "",
                a.digest = r,
                Ia({
                    value: a,
                    source: null,
                    stack: null
                }),
                e = jc(t, e, l)
            } else if (Qt || tn(t, e, l, !1),
            r = (l & t.childLanes) !== 0,
            Qt || r) {
                if (r = Rt,
                r !== null && (a = l & -l,
                a = (a & 42) !== 0 ? 1 : gi(a),
                a = (a & (r.suspendedLanes | l)) !== 0 ? 0 : a,
                a !== 0 && a !== m.retryLane))
                    throw m.retryLane = a,
                    sa(t, a),
                    Se(r, t, a),
                    so;
                o.data === "$?" || tf(),
                e = jc(t, e, l)
            } else
                o.data === "$?" ? (e.flags |= 192,
                e.child = t.child,
                e = null) : (t = m.treeContext,
                qt = qe(o.nextSibling),
                ae = e,
                yt = !0,
                jl = null,
                He = !1,
                t !== null && (Ue[Re++] = Le,
                Ue[Re++] = Qe,
                Ue[Re++] = Cl,
                Le = t.id,
                Qe = t.overflow,
                Cl = e),
                e = Hc(e, a.children),
                e.flags |= 4096);
            return e
        }
        return n ? (hl(),
        n = a.fallback,
        o = e.mode,
        m = t.child,
        T = m.sibling,
        a = Ze(m, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = m.subtreeFlags & 65011712,
        T !== null ? n = Ze(T, n) : (n = zl(n, o, l, null),
        n.flags |= 2),
        n.return = e,
        a.return = e,
        a.sibling = n,
        e.child = a,
        a = n,
        n = e.child,
        o = t.child.memoizedState,
        o === null ? o = zc(l) : (m = o.cachePool,
        m !== null ? (T = Gt._currentValue,
        m = m.parent !== T ? {
            parent: T,
            pool: T
        } : m) : m = us(),
        o = {
            baseLanes: o.baseLanes | l,
            cachePool: m
        }),
        n.memoizedState = o,
        n.childLanes = Cc(t, r, l),
        e.memoizedState = qc,
        a) : (dl(e),
        l = t.child,
        t = l.sibling,
        l = Ze(l, {
            mode: "visible",
            children: a.children
        }),
        l.return = e,
        l.sibling = null,
        t !== null && (r = e.deletions,
        r === null ? (e.deletions = [t],
        e.flags |= 16) : r.push(t)),
        e.child = l,
        e.memoizedState = null,
        l)
    }
    function Hc(t, e) {
        return e = Du({
            mode: "visible",
            children: e
        }, t.mode),
        e.return = t,
        t.child = e
    }
    function Du(t, e) {
        return t = me(22, t, null, e),
        t.lanes = 0,
        t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        },
        t
    }
    function jc(t, e, l) {
        return Ea(e, t.child, null, l),
        t = Hc(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
    }
    function Eo(t, e, l) {
        t.lanes |= e;
        var a = t.alternate;
        a !== null && (a.lanes |= e),
        tc(t.return, e, l)
    }
    function wc(t, e, l, a, n) {
        var u = t.memoizedState;
        u === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: l,
            tailMode: n
        } : (u.isBackwards = e,
        u.rendering = null,
        u.renderingStartTime = 0,
        u.last = a,
        u.tail = l,
        u.tailMode = n)
    }
    function To(t, e, l) {
        var a = e.pendingProps
          , n = a.revealOrder
          , u = a.tail;
        if (kt(t, e, a.children, l),
        a = Kt.current,
        (a & 2) !== 0)
            a = a & 1 | 2,
            e.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0)
                t: for (t = e.child; t !== null; ) {
                    if (t.tag === 13)
                        t.memoizedState !== null && Eo(t, l, e);
                    else if (t.tag === 19)
                        Eo(t, l, e);
                    else if (t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break t;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break t;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            a &= 1
        }
        switch (j(Kt, a),
        n) {
        case "forwards":
            for (l = e.child,
            n = null; l !== null; )
                t = l.alternate,
                t !== null && Uu(t) === null && (n = l),
                l = l.sibling;
            l = n,
            l === null ? (n = e.child,
            e.child = null) : (n = l.sibling,
            l.sibling = null),
            wc(e, !1, n, l, u);
            break;
        case "backwards":
            for (l = null,
            n = e.child,
            e.child = null; n !== null; ) {
                if (t = n.alternate,
                t !== null && Uu(t) === null) {
                    e.child = n;
                    break
                }
                t = n.sibling,
                n.sibling = l,
                l = n,
                n = t
            }
            wc(e, !0, l, null, u);
            break;
        case "together":
            wc(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function Fe(t, e, l) {
        if (t !== null && (e.dependencies = t.dependencies),
        gl |= e.lanes,
        (l & e.childLanes) === 0)
            if (t !== null) {
                if (tn(t, e, l, !1),
                (l & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && e.child !== t.child)
            throw Error(f(153));
        if (e.child !== null) {
            for (t = e.child,
            l = Ze(t, t.pendingProps),
            e.child = l,
            l.return = e; t.sibling !== null; )
                t = t.sibling,
                l = l.sibling = Ze(t, t.pendingProps),
                l.return = e;
            l.sibling = null
        }
        return e.child
    }
    function Bc(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && ru(t)))
    }
    function vm(t, e, l) {
        switch (e.tag) {
        case 3:
            vt(e, e.stateNode.containerInfo),
            cl(e, Gt, t.memoizedState.cache),
            Pa();
            break;
        case 27:
        case 5:
            Zt(e);
            break;
        case 4:
            vt(e, e.stateNode.containerInfo);
            break;
        case 10:
            cl(e, e.type, e.memoizedProps.value);
            break;
        case 13:
            var a = e.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (dl(e),
                e.flags |= 128,
                null) : (l & e.child.childLanes) !== 0 ? bo(t, e, l) : (dl(e),
                t = Fe(t, e, l),
                t !== null ? t.sibling : null);
            dl(e);
            break;
        case 19:
            var n = (t.flags & 128) !== 0;
            if (a = (l & e.childLanes) !== 0,
            a || (tn(t, e, l, !1),
            a = (l & e.childLanes) !== 0),
            n) {
                if (a)
                    return To(t, e, l);
                e.flags |= 128
            }
            if (n = e.memoizedState,
            n !== null && (n.rendering = null,
            n.tail = null,
            n.lastEffect = null),
            j(Kt, Kt.current),
            a)
                break;
            return null;
        case 22:
        case 23:
            return e.lanes = 0,
            yo(t, e, l);
        case 24:
            cl(e, Gt, t.memoizedState.cache)
        }
        return Fe(t, e, l)
    }
    function Oo(t, e, l) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps)
                Qt = !0;
            else {
                if (!Bc(t, l) && (e.flags & 128) === 0)
                    return Qt = !1,
                    vm(t, e, l);
                Qt = (t.flags & 131072) !== 0
            }
        else
            Qt = !1,
            yt && (e.flags & 1048576) !== 0 && Pr(e, fu, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            t: {
                t = e.pendingProps;
                var a = e.elementType
                  , n = a._init;
                if (a = n(a._payload),
                e.type = a,
                typeof a == "function")
                    Ji(a) ? (t = Kl(a, t),
                    e.tag = 1,
                    e = go(null, e, a, t, l)) : (e.tag = 0,
                    e = Nc(null, e, a, t, l));
                else {
                    if (a != null) {
                        if (n = a.$$typeof,
                        n === At) {
                            e.tag = 11,
                            e = oo(null, e, a, t, l);
                            break t
                        } else if (n === Ut) {
                            e.tag = 14,
                            e = ho(null, e, a, t, l);
                            break t
                        }
                    }
                    throw e = J(a) || a,
                    Error(f(306, e, ""))
                }
            }
            return e;
        case 0:
            return Nc(t, e, e.type, e.pendingProps, l);
        case 1:
            return a = e.type,
            n = Kl(a, e.pendingProps),
            go(t, e, a, n, l);
        case 3:
            t: {
                if (vt(e, e.stateNode.containerInfo),
                t === null)
                    throw Error(f(387));
                a = e.pendingProps;
                var u = e.memoizedState;
                n = u.element,
                cc(t, e),
                fn(e, a, null, l);
                var r = e.memoizedState;
                if (a = r.cache,
                cl(e, Gt, a),
                a !== u.cache && ec(e, [Gt], l, !0),
                cn(),
                a = r.element,
                u.isDehydrated)
                    if (u = {
                        element: a,
                        isDehydrated: !1,
                        cache: r.cache
                    },
                    e.updateQueue.baseState = u,
                    e.memoizedState = u,
                    e.flags & 256) {
                        e = So(t, e, a, l);
                        break t
                    } else if (a !== n) {
                        n = Oe(Error(f(424)), e),
                        Ia(n),
                        e = So(t, e, a, l);
                        break t
                    } else {
                        switch (t = e.stateNode.containerInfo,
                        t.nodeType) {
                        case 9:
                            t = t.body;
                            break;
                        default:
                            t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                        }
                        for (qt = qe(t.firstChild),
                        ae = e,
                        yt = !0,
                        jl = null,
                        He = !0,
                        l = to(e, null, a, l),
                        e.child = l; l; )
                            l.flags = l.flags & -3 | 4096,
                            l = l.sibling
                    }
                else {
                    if (Pa(),
                    a === n) {
                        e = Fe(t, e, l);
                        break t
                    }
                    kt(t, e, a, l)
                }
                e = e.child
            }
            return e;
        case 26:
            return Mu(t, e),
            t === null ? (l = xd(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : yt || (l = e.type,
            t = e.pendingProps,
            a = Xu($.current).createElement(l),
            a[It] = e,
            a[ne] = t,
            Ft(a, l, t),
            Lt(a),
            e.stateNode = a) : e.memoizedState = xd(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
            null;
        case 27:
            return Zt(e),
            t === null && yt && (a = e.stateNode = Ad(e.type, e.pendingProps, $.current),
            ae = e,
            He = !0,
            n = qt,
            Tl(e.type) ? (Sf = n,
            qt = qe(a.firstChild)) : qt = n),
            kt(t, e, e.pendingProps.children, l),
            Mu(t, e),
            t === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return t === null && yt && ((n = a = qt) && (a = Zm(a, e.type, e.pendingProps, He),
            a !== null ? (e.stateNode = a,
            ae = e,
            qt = qe(a.firstChild),
            He = !1,
            n = !0) : n = !1),
            n || wl(e)),
            Zt(e),
            n = e.type,
            u = e.pendingProps,
            r = t !== null ? t.memoizedProps : null,
            a = u.children,
            yf(n, u) ? a = null : r !== null && yf(n, r) && (e.flags |= 32),
            e.memoizedState !== null && (n = hc(t, e, fm, null, null, l),
            _n._currentValue = n),
            Mu(t, e),
            kt(t, e, a, l),
            e.child;
        case 6:
            return t === null && yt && ((t = l = qt) && (l = Lm(l, e.pendingProps, He),
            l !== null ? (e.stateNode = l,
            ae = e,
            qt = null,
            t = !0) : t = !1),
            t || wl(e)),
            null;
        case 13:
            return bo(t, e, l);
        case 4:
            return vt(e, e.stateNode.containerInfo),
            a = e.pendingProps,
            t === null ? e.child = Ea(e, null, a, l) : kt(t, e, a, l),
            e.child;
        case 11:
            return oo(t, e, e.type, e.pendingProps, l);
        case 7:
            return kt(t, e, e.pendingProps, l),
            e.child;
        case 8:
            return kt(t, e, e.pendingProps.children, l),
            e.child;
        case 12:
            return kt(t, e, e.pendingProps.children, l),
            e.child;
        case 10:
            return a = e.pendingProps,
            cl(e, e.type, a.value),
            kt(t, e, a.children, l),
            e.child;
        case 9:
            return n = e.type._context,
            a = e.pendingProps.children,
            Vl(e),
            n = te(n),
            a = a(n),
            e.flags |= 1,
            kt(t, e, a, l),
            e.child;
        case 14:
            return ho(t, e, e.type, e.pendingProps, l);
        case 15:
            return mo(t, e, e.type, e.pendingProps, l);
        case 19:
            return To(t, e, l);
        case 31:
            return a = e.pendingProps,
            l = e.mode,
            a = {
                mode: a.mode,
                children: a.children
            },
            t === null ? (l = Du(a, l),
            l.ref = e.ref,
            e.child = l,
            l.return = e,
            e = l) : (l = Ze(t.child, a),
            l.ref = e.ref,
            e.child = l,
            l.return = e,
            e = l),
            e;
        case 22:
            return yo(t, e, l);
        case 24:
            return Vl(e),
            a = te(Gt),
            t === null ? (n = nc(),
            n === null && (n = Rt,
            u = lc(),
            n.pooledCache = u,
            u.refCount++,
            u !== null && (n.pooledCacheLanes |= l),
            n = u),
            e.memoizedState = {
                parent: a,
                cache: n
            },
            ic(e),
            cl(e, Gt, n)) : ((t.lanes & l) !== 0 && (cc(t, e),
            fn(e, null, null, l),
            cn()),
            n = t.memoizedState,
            u = e.memoizedState,
            n.parent !== a ? (n = {
                parent: a,
                cache: a
            },
            e.memoizedState = n,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n),
            cl(e, Gt, a)) : (a = u.cache,
            cl(e, Gt, a),
            a !== n.cache && ec(e, [Gt], l, !0))),
            kt(t, e, e.pendingProps.children, l),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(f(156, e.tag))
    }
    function Pe(t) {
        t.flags |= 4
    }
    function Ao(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !qd(e)) {
            if (e = xe.current,
            e !== null && ((ot & 4194048) === ot ? je !== null : (ot & 62914560) !== ot && (ot & 536870912) === 0 || e !== je))
                throw nn = uc,
                is;
            t.flags |= 8192
        }
    }
    function _u(t, e) {
        e !== null && (t.flags |= 4),
        t.flags & 16384 && (e = t.tag !== 22 ? er() : 536870912,
        t.lanes |= e,
        Ua |= e)
    }
    function yn(t, e) {
        if (!yt)
            switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var l = null; e !== null; )
                    e.alternate !== null && (l = e),
                    e = e.sibling;
                l === null ? t.tail = null : l.sibling = null;
                break;
            case "collapsed":
                l = t.tail;
                for (var a = null; l !== null; )
                    l.alternate !== null && (a = l),
                    l = l.sibling;
                a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
            }
    }
    function Nt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child
          , l = 0
          , a = 0;
        if (e)
            for (var n = t.child; n !== null; )
                l |= n.lanes | n.childLanes,
                a |= n.subtreeFlags & 65011712,
                a |= n.flags & 65011712,
                n.return = t,
                n = n.sibling;
        else
            for (n = t.child; n !== null; )
                l |= n.lanes | n.childLanes,
                a |= n.subtreeFlags,
                a |= n.flags,
                n.return = t,
                n = n.sibling;
        return t.subtreeFlags |= a,
        t.childLanes = l,
        e
    }
    function pm(t, e, l) {
        var a = e.pendingProps;
        switch (Fi(e),
        e.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Nt(e),
            null;
        case 1:
            return Nt(e),
            null;
        case 3:
            return l = e.stateNode,
            a = null,
            t !== null && (a = t.memoizedState.cache),
            e.memoizedState.cache !== a && (e.flags |= 2048),
            We(Gt),
            Pt(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (t === null || t.child === null) && (Fa(e) ? Pe(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            es())),
            Nt(e),
            null;
        case 26:
            return l = e.memoizedState,
            t === null ? (Pe(e),
            l !== null ? (Nt(e),
            Ao(e, l)) : (Nt(e),
            e.flags &= -16777217)) : l ? l !== t.memoizedState ? (Pe(e),
            Nt(e),
            Ao(e, l)) : (Nt(e),
            e.flags &= -16777217) : (t.memoizedProps !== a && Pe(e),
            Nt(e),
            e.flags &= -16777217),
            null;
        case 27:
            se(e),
            l = $.current;
            var n = e.type;
            if (t !== null && e.stateNode != null)
                t.memoizedProps !== a && Pe(e);
            else {
                if (!a) {
                    if (e.stateNode === null)
                        throw Error(f(166));
                    return Nt(e),
                    null
                }
                t = Z.current,
                Fa(e) ? Ir(e) : (t = Ad(n, a, l),
                e.stateNode = t,
                Pe(e))
            }
            return Nt(e),
            null;
        case 5:
            if (se(e),
            l = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== a && Pe(e);
            else {
                if (!a) {
                    if (e.stateNode === null)
                        throw Error(f(166));
                    return Nt(e),
                    null
                }
                if (t = Z.current,
                Fa(e))
                    Ir(e);
                else {
                    switch (n = Xu($.current),
                    t) {
                    case 1:
                        t = n.createElementNS("http://www.w3.org/2000/svg", l);
                        break;
                    case 2:
                        t = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                        break;
                    default:
                        switch (l) {
                        case "svg":
                            t = n.createElementNS("http://www.w3.org/2000/svg", l);
                            break;
                        case "math":
                            t = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                            break;
                        case "script":
                            t = n.createElement("div"),
                            t.innerHTML = "<script><\/script>",
                            t = t.removeChild(t.firstChild);
                            break;
                        case "select":
                            t = typeof a.is == "string" ? n.createElement("select", {
                                is: a.is
                            }) : n.createElement("select"),
                            a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                            break;
                        default:
                            t = typeof a.is == "string" ? n.createElement(l, {
                                is: a.is
                            }) : n.createElement(l)
                        }
                    }
                    t[It] = e,
                    t[ne] = a;
                    t: for (n = e.child; n !== null; ) {
                        if (n.tag === 5 || n.tag === 6)
                            t.appendChild(n.stateNode);
                        else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                            n.child.return = n,
                            n = n.child;
                            continue
                        }
                        if (n === e)
                            break t;
                        for (; n.sibling === null; ) {
                            if (n.return === null || n.return === e)
                                break t;
                            n = n.return
                        }
                        n.sibling.return = n.return,
                        n = n.sibling
                    }
                    e.stateNode = t;
                    t: switch (Ft(t, l, a),
                    l) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        t = !!a.autoFocus;
                        break t;
                    case "img":
                        t = !0;
                        break t;
                    default:
                        t = !1
                    }
                    t && Pe(e)
                }
            }
            return Nt(e),
            e.flags &= -16777217,
            null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== a && Pe(e);
            else {
                if (typeof a != "string" && e.stateNode === null)
                    throw Error(f(166));
                if (t = $.current,
                Fa(e)) {
                    if (t = e.stateNode,
                    l = e.memoizedProps,
                    a = null,
                    n = ae,
                    n !== null)
                        switch (n.tag) {
                        case 27:
                        case 5:
                            a = n.memoizedProps
                        }
                    t[It] = e,
                    t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || pd(t.nodeValue, l)),
                    t || wl(e)
                } else
                    t = Xu(t).createTextNode(a),
                    t[It] = e,
                    e.stateNode = t
            }
            return Nt(e),
            null;
        case 13:
            if (a = e.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (n = Fa(e),
                a !== null && a.dehydrated !== null) {
                    if (t === null) {
                        if (!n)
                            throw Error(f(318));
                        if (n = e.memoizedState,
                        n = n !== null ? n.dehydrated : null,
                        !n)
                            throw Error(f(317));
                        n[It] = e
                    } else
                        Pa(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Nt(e),
                    n = !1
                } else
                    n = es(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
                    n = !0;
                if (!n)
                    return e.flags & 256 ? ($e(e),
                    e) : ($e(e),
                    null)
            }
            if ($e(e),
            (e.flags & 128) !== 0)
                return e.lanes = l,
                e;
            if (l = a !== null,
            t = t !== null && t.memoizedState !== null,
            l) {
                a = e.child,
                n = null,
                a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
                var u = null;
                a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)
            }
            return l !== t && l && (e.child.flags |= 8192),
            _u(e, e.updateQueue),
            Nt(e),
            null;
        case 4:
            return Pt(),
            t === null && sf(e.stateNode.containerInfo),
            Nt(e),
            null;
        case 10:
            return We(e.type),
            Nt(e),
            null;
        case 19:
            if (w(Kt),
            n = e.memoizedState,
            n === null)
                return Nt(e),
                null;
            if (a = (e.flags & 128) !== 0,
            u = n.rendering,
            u === null)
                if (a)
                    yn(n, !1);
                else {
                    if (zt !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null; ) {
                            if (u = Uu(t),
                            u !== null) {
                                for (e.flags |= 128,
                                yn(n, !1),
                                t = u.updateQueue,
                                e.updateQueue = t,
                                _u(e, t),
                                e.subtreeFlags = 0,
                                t = l,
                                l = e.child; l !== null; )
                                    Fr(l, t),
                                    l = l.sibling;
                                return j(Kt, Kt.current & 1 | 2),
                                e.child
                            }
                            t = t.sibling
                        }
                    n.tail !== null && Ce() > zu && (e.flags |= 128,
                    a = !0,
                    yn(n, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!a)
                    if (t = Uu(u),
                    t !== null) {
                        if (e.flags |= 128,
                        a = !0,
                        t = t.updateQueue,
                        e.updateQueue = t,
                        _u(e, t),
                        yn(n, !0),
                        n.tail === null && n.tailMode === "hidden" && !u.alternate && !yt)
                            return Nt(e),
                            null
                    } else
                        2 * Ce() - n.renderingStartTime > zu && l !== 536870912 && (e.flags |= 128,
                        a = !0,
                        yn(n, !1),
                        e.lanes = 4194304);
                n.isBackwards ? (u.sibling = e.child,
                e.child = u) : (t = n.last,
                t !== null ? t.sibling = u : e.child = u,
                n.last = u)
            }
            return n.tail !== null ? (e = n.tail,
            n.rendering = e,
            n.tail = e.sibling,
            n.renderingStartTime = Ce(),
            e.sibling = null,
            t = Kt.current,
            j(Kt, a ? t & 1 | 2 : t & 1),
            e) : (Nt(e),
            null);
        case 22:
        case 23:
            return $e(e),
            oc(),
            a = e.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192),
            a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Nt(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : Nt(e),
            l = e.updateQueue,
            l !== null && _u(e, l.retryQueue),
            l = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
            a = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            a !== l && (e.flags |= 2048),
            t !== null && w(Yl),
            null;
        case 24:
            return l = null,
            t !== null && (l = t.memoizedState.cache),
            e.memoizedState.cache !== l && (e.flags |= 2048),
            We(Gt),
            Nt(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(f(156, e.tag))
    }
    function gm(t, e) {
        switch (Fi(e),
        e.tag) {
        case 1:
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 3:
            return We(Gt),
            Pt(),
            t = e.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return se(e),
            null;
        case 13:
            if ($e(e),
            t = e.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(f(340));
                Pa()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 19:
            return w(Kt),
            null;
        case 4:
            return Pt(),
            null;
        case 10:
            return We(e.type),
            null;
        case 22:
        case 23:
            return $e(e),
            oc(),
            t !== null && w(Yl),
            t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 24:
            return We(Gt),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Uo(t, e) {
        switch (Fi(e),
        e.tag) {
        case 3:
            We(Gt),
            Pt();
            break;
        case 26:
        case 27:
        case 5:
            se(e);
            break;
        case 4:
            Pt();
            break;
        case 13:
            $e(e);
            break;
        case 19:
            w(Kt);
            break;
        case 10:
            We(e.type);
            break;
        case 22:
        case 23:
            $e(e),
            oc(),
            t !== null && w(Yl);
            break;
        case 24:
            We(Gt)
        }
    }
    function vn(t, e) {
        try {
            var l = e.updateQueue
              , a = l !== null ? l.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                l = n;
                do {
                    if ((l.tag & t) === t) {
                        a = void 0;
                        var u = l.create
                          , r = l.inst;
                        a = u(),
                        r.destroy = a
                    }
                    l = l.next
                } while (l !== n)
            }
        } catch (o) {
            Ot(e, e.return, o)
        }
    }
    function ml(t, e, l) {
        try {
            var a = e.updateQueue
              , n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var u = n.next;
                a = u;
                do {
                    if ((a.tag & t) === t) {
                        var r = a.inst
                          , o = r.destroy;
                        if (o !== void 0) {
                            r.destroy = void 0,
                            n = e;
                            var m = l
                              , T = o;
                            try {
                                T()
                            } catch (N) {
                                Ot(n, m, N)
                            }
                        }
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (N) {
            Ot(e, e.return, N)
        }
    }
    function Ro(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var l = t.stateNode;
            try {
                ds(e, l)
            } catch (a) {
                Ot(t, t.return, a)
            }
        }
    }
    function xo(t, e, l) {
        l.props = Kl(t.type, t.memoizedProps),
        l.state = t.memoizedState;
        try {
            l.componentWillUnmount()
        } catch (a) {
            Ot(t, e, a)
        }
    }
    function pn(t, e) {
        try {
            var l = t.ref;
            if (l !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var a = t.stateNode;
                    break;
                case 30:
                    a = t.stateNode;
                    break;
                default:
                    a = t.stateNode
                }
                typeof l == "function" ? t.refCleanup = l(a) : l.current = a
            }
        } catch (n) {
            Ot(t, e, n)
        }
    }
    function we(t, e) {
        var l = t.ref
          , a = t.refCleanup;
        if (l !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (n) {
                    Ot(t, e, n)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof l == "function")
                try {
                    l(null)
                } catch (n) {
                    Ot(t, e, n)
                }
            else
                l.current = null
    }
    function Mo(t) {
        var e = t.type
          , l = t.memoizedProps
          , a = t.stateNode;
        try {
            t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                l.autoFocus && a.focus();
                break t;
            case "img":
                l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
            }
        } catch (n) {
            Ot(t, t.return, n)
        }
    }
    function Vc(t, e, l) {
        try {
            var a = t.stateNode;
            Vm(a, t.type, l, e),
            a[ne] = e
        } catch (n) {
            Ot(t, t.return, n)
        }
    }
    function Do(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Tl(t.type) || t.tag === 4
    }
    function Yc(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || Do(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && Tl(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function Gc(t, e, l) {
        var a = t.tag;
        if (a === 5 || a === 6)
            t = t.stateNode,
            e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
            e.appendChild(t),
            l = l._reactRootContainer,
            l != null || e.onclick !== null || (e.onclick = Ku));
        else if (a !== 4 && (a === 27 && Tl(t.type) && (l = t.stateNode,
        e = null),
        t = t.child,
        t !== null))
            for (Gc(t, e, l),
            t = t.sibling; t !== null; )
                Gc(t, e, l),
                t = t.sibling
    }
    function Nu(t, e, l) {
        var a = t.tag;
        if (a === 5 || a === 6)
            t = t.stateNode,
            e ? l.insertBefore(t, e) : l.appendChild(t);
        else if (a !== 4 && (a === 27 && Tl(t.type) && (l = t.stateNode),
        t = t.child,
        t !== null))
            for (Nu(t, e, l),
            t = t.sibling; t !== null; )
                Nu(t, e, l),
                t = t.sibling
    }
    function _o(t) {
        var e = t.stateNode
          , l = t.memoizedProps;
        try {
            for (var a = t.type, n = e.attributes; n.length; )
                e.removeAttributeNode(n[0]);
            Ft(e, a, l),
            e[It] = t,
            e[ne] = l
        } catch (u) {
            Ot(t, t.return, u)
        }
    }
    var Ie = !1
      , jt = !1
      , Kc = !1
      , No = typeof WeakSet == "function" ? WeakSet : Set
      , Jt = null;
    function Sm(t, e) {
        if (t = t.containerInfo,
        hf = ku,
        t = Gr(t),
        Yi(t)) {
            if ("selectionStart"in t)
                var l = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    l = (l = t.ownerDocument) && l.defaultView || window;
                    var a = l.getSelection && l.getSelection();
                    if (a && a.rangeCount !== 0) {
                        l = a.anchorNode;
                        var n = a.anchorOffset
                          , u = a.focusNode;
                        a = a.focusOffset;
                        try {
                            l.nodeType,
                            u.nodeType
                        } catch {
                            l = null;
                            break t
                        }
                        var r = 0
                          , o = -1
                          , m = -1
                          , T = 0
                          , N = 0
                          , C = t
                          , O = null;
                        e: for (; ; ) {
                            for (var A; C !== l || n !== 0 && C.nodeType !== 3 || (o = r + n),
                            C !== u || a !== 0 && C.nodeType !== 3 || (m = r + a),
                            C.nodeType === 3 && (r += C.nodeValue.length),
                            (A = C.firstChild) !== null; )
                                O = C,
                                C = A;
                            for (; ; ) {
                                if (C === t)
                                    break e;
                                if (O === l && ++T === n && (o = r),
                                O === u && ++N === a && (m = r),
                                (A = C.nextSibling) !== null)
                                    break;
                                C = O,
                                O = C.parentNode
                            }
                            C = A
                        }
                        l = o === -1 || m === -1 ? null : {
                            start: o,
                            end: m
                        }
                    } else
                        l = null
                }
            l = l || {
                start: 0,
                end: 0
            }
        } else
            l = null;
        for (mf = {
            focusedElem: t,
            selectionRange: l
        },
        ku = !1,
        Jt = e; Jt !== null; )
            if (e = Jt,
            t = e.child,
            (e.subtreeFlags & 1024) !== 0 && t !== null)
                t.return = e,
                Jt = t;
            else
                for (; Jt !== null; ) {
                    switch (e = Jt,
                    u = e.alternate,
                    t = e.flags,
                    e.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && u !== null) {
                            t = void 0,
                            l = e,
                            n = u.memoizedProps,
                            u = u.memoizedState,
                            a = l.stateNode;
                            try {
                                var tt = Kl(l.type, n, l.elementType === l.type);
                                t = a.getSnapshotBeforeUpdate(tt, u),
                                a.__reactInternalSnapshotBeforeUpdate = t
                            } catch (F) {
                                Ot(l, l.return, F)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo,
                            l = t.nodeType,
                            l === 9)
                                pf(t);
                            else if (l === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    pf(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(f(163))
                    }
                    if (t = e.sibling,
                    t !== null) {
                        t.return = e.return,
                        Jt = t;
                        break
                    }
                    Jt = e.return
                }
    }
    function qo(t, e, l) {
        var a = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            yl(t, l),
            a & 4 && vn(5, l);
            break;
        case 1:
            if (yl(t, l),
            a & 4)
                if (t = l.stateNode,
                e === null)
                    try {
                        t.componentDidMount()
                    } catch (r) {
                        Ot(l, l.return, r)
                    }
                else {
                    var n = Kl(l.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (r) {
                        Ot(l, l.return, r)
                    }
                }
            a & 64 && Ro(l),
            a & 512 && pn(l, l.return);
            break;
        case 3:
            if (yl(t, l),
            a & 64 && (t = l.updateQueue,
            t !== null)) {
                if (e = null,
                l.child !== null)
                    switch (l.child.tag) {
                    case 27:
                    case 5:
                        e = l.child.stateNode;
                        break;
                    case 1:
                        e = l.child.stateNode
                    }
                try {
                    ds(t, e)
                } catch (r) {
                    Ot(l, l.return, r)
                }
            }
            break;
        case 27:
            e === null && a & 4 && _o(l);
        case 26:
        case 5:
            yl(t, l),
            e === null && a & 4 && Mo(l),
            a & 512 && pn(l, l.return);
            break;
        case 12:
            yl(t, l);
            break;
        case 13:
            yl(t, l),
            a & 4 && Ho(t, l),
            a & 64 && (t = l.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (l = Mm.bind(null, l),
            Qm(t, l))));
            break;
        case 22:
            if (a = l.memoizedState !== null || Ie,
            !a) {
                e = e !== null && e.memoizedState !== null || jt,
                n = Ie;
                var u = jt;
                Ie = a,
                (jt = e) && !u ? vl(t, l, (l.subtreeFlags & 8772) !== 0) : yl(t, l),
                Ie = n,
                jt = u
            }
            break;
        case 30:
            break;
        default:
            yl(t, l)
        }
    }
    function zo(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null,
        zo(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
        e !== null && Ei(e)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var _t = null
      , ce = !1;
    function tl(t, e, l) {
        for (l = l.child; l !== null; )
            Co(t, e, l),
            l = l.sibling
    }
    function Co(t, e, l) {
        if (oe && typeof oe.onCommitFiberUnmount == "function")
            try {
                oe.onCommitFiberUnmount(wa, l)
            } catch {}
        switch (l.tag) {
        case 26:
            jt || we(l, e),
            tl(t, e, l),
            l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode,
            l.parentNode.removeChild(l));
            break;
        case 27:
            jt || we(l, e);
            var a = _t
              , n = ce;
            Tl(l.type) && (_t = l.stateNode,
            ce = !1),
            tl(t, e, l),
            Rn(l.stateNode),
            _t = a,
            ce = n;
            break;
        case 5:
            jt || we(l, e);
        case 6:
            if (a = _t,
            n = ce,
            _t = null,
            tl(t, e, l),
            _t = a,
            ce = n,
            _t !== null)
                if (ce)
                    try {
                        (_t.nodeType === 9 ? _t.body : _t.nodeName === "HTML" ? _t.ownerDocument.body : _t).removeChild(l.stateNode)
                    } catch (u) {
                        Ot(l, e, u)
                    }
                else
                    try {
                        _t.removeChild(l.stateNode)
                    } catch (u) {
                        Ot(l, e, u)
                    }
            break;
        case 18:
            _t !== null && (ce ? (t = _t,
            Td(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode),
            Cn(t)) : Td(_t, l.stateNode));
            break;
        case 4:
            a = _t,
            n = ce,
            _t = l.stateNode.containerInfo,
            ce = !0,
            tl(t, e, l),
            _t = a,
            ce = n;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            jt || ml(2, l, e),
            jt || ml(4, l, e),
            tl(t, e, l);
            break;
        case 1:
            jt || (we(l, e),
            a = l.stateNode,
            typeof a.componentWillUnmount == "function" && xo(l, e, a)),
            tl(t, e, l);
            break;
        case 21:
            tl(t, e, l);
            break;
        case 22:
            jt = (a = jt) || l.memoizedState !== null,
            tl(t, e, l),
            jt = a;
            break;
        default:
            tl(t, e, l)
        }
    }
    function Ho(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                Cn(t)
            } catch (l) {
                Ot(e, e.return, l)
            }
    }
    function bm(t) {
        switch (t.tag) {
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new No),
            e;
        case 22:
            return t = t.stateNode,
            e = t._retryCache,
            e === null && (e = t._retryCache = new No),
            e;
        default:
            throw Error(f(435, t.tag))
        }
    }
    function Xc(t, e) {
        var l = bm(t);
        e.forEach(function(a) {
            var n = Dm.bind(null, t, a);
            l.has(a) || (l.add(a),
            a.then(n, n))
        })
    }
    function ye(t, e) {
        var l = e.deletions;
        if (l !== null)
            for (var a = 0; a < l.length; a++) {
                var n = l[a]
                  , u = t
                  , r = e
                  , o = r;
                t: for (; o !== null; ) {
                    switch (o.tag) {
                    case 27:
                        if (Tl(o.type)) {
                            _t = o.stateNode,
                            ce = !1;
                            break t
                        }
                        break;
                    case 5:
                        _t = o.stateNode,
                        ce = !1;
                        break t;
                    case 3:
                    case 4:
                        _t = o.stateNode.containerInfo,
                        ce = !0;
                        break t
                    }
                    o = o.return
                }
                if (_t === null)
                    throw Error(f(160));
                Co(u, r, n),
                _t = null,
                ce = !1,
                u = n.alternate,
                u !== null && (u.return = null),
                n.return = null
            }
        if (e.subtreeFlags & 13878)
            for (e = e.child; e !== null; )
                jo(e, t),
                e = e.sibling
    }
    var Ne = null;
    function jo(t, e) {
        var l = t.alternate
          , a = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ye(e, t),
            ve(t),
            a & 4 && (ml(3, t, t.return),
            vn(3, t),
            ml(5, t, t.return));
            break;
        case 1:
            ye(e, t),
            ve(t),
            a & 512 && (jt || l === null || we(l, l.return)),
            a & 64 && Ie && (t = t.updateQueue,
            t !== null && (a = t.callbacks,
            a !== null && (l = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
            break;
        case 26:
            var n = Ne;
            if (ye(e, t),
            ve(t),
            a & 512 && (jt || l === null || we(l, l.return)),
            a & 4) {
                var u = l !== null ? l.memoizedState : null;
                if (a = t.memoizedState,
                l === null)
                    if (a === null)
                        if (t.stateNode === null) {
                            t: {
                                a = t.type,
                                l = t.memoizedProps,
                                n = n.ownerDocument || n;
                                e: switch (a) {
                                case "title":
                                    u = n.getElementsByTagName("title")[0],
                                    (!u || u[Ya] || u[It] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a),
                                    n.head.insertBefore(u, n.querySelector("head > title"))),
                                    Ft(u, a, l),
                                    u[It] = t,
                                    Lt(u),
                                    a = u;
                                    break t;
                                case "link":
                                    var r = _d("link", "href", n).get(a + (l.href || ""));
                                    if (r) {
                                        for (var o = 0; o < r.length; o++)
                                            if (u = r[o],
                                            u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                r.splice(o, 1);
                                                break e
                                            }
                                    }
                                    u = n.createElement(a),
                                    Ft(u, a, l),
                                    n.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (r = _d("meta", "content", n).get(a + (l.content || ""))) {
                                        for (o = 0; o < r.length; o++)
                                            if (u = r[o],
                                            u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                r.splice(o, 1);
                                                break e
                                            }
                                    }
                                    u = n.createElement(a),
                                    Ft(u, a, l),
                                    n.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(f(468, a))
                                }
                                u[It] = t,
                                Lt(u),
                                a = u
                            }
                            t.stateNode = a
                        } else
                            Nd(n, t.type, t.stateNode);
                    else
                        t.stateNode = Dd(n, a, t.memoizedProps);
                else
                    u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode,
                    l.parentNode.removeChild(l)) : u.count--,
                    a === null ? Nd(n, t.type, t.stateNode) : Dd(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && Vc(t, t.memoizedProps, l.memoizedProps)
            }
            break;
        case 27:
            ye(e, t),
            ve(t),
            a & 512 && (jt || l === null || we(l, l.return)),
            l !== null && a & 4 && Vc(t, t.memoizedProps, l.memoizedProps);
            break;
        case 5:
            if (ye(e, t),
            ve(t),
            a & 512 && (jt || l === null || we(l, l.return)),
            t.flags & 32) {
                n = t.stateNode;
                try {
                    aa(n, "")
                } catch (A) {
                    Ot(t, t.return, A)
                }
            }
            a & 4 && t.stateNode != null && (n = t.memoizedProps,
            Vc(t, n, l !== null ? l.memoizedProps : n)),
            a & 1024 && (Kc = !0);
            break;
        case 6:
            if (ye(e, t),
            ve(t),
            a & 4) {
                if (t.stateNode === null)
                    throw Error(f(162));
                a = t.memoizedProps,
                l = t.stateNode;
                try {
                    l.nodeValue = a
                } catch (A) {
                    Ot(t, t.return, A)
                }
            }
            break;
        case 3:
            if (Qu = null,
            n = Ne,
            Ne = Zu(e.containerInfo),
            ye(e, t),
            Ne = n,
            ve(t),
            a & 4 && l !== null && l.memoizedState.isDehydrated)
                try {
                    Cn(e.containerInfo)
                } catch (A) {
                    Ot(t, t.return, A)
                }
            Kc && (Kc = !1,
            wo(t));
            break;
        case 4:
            a = Ne,
            Ne = Zu(t.stateNode.containerInfo),
            ye(e, t),
            ve(t),
            Ne = a;
            break;
        case 12:
            ye(e, t),
            ve(t);
            break;
        case 13:
            ye(e, t),
            ve(t),
            t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (kc = Ce()),
            a & 4 && (a = t.updateQueue,
            a !== null && (t.updateQueue = null,
            Xc(t, a)));
            break;
        case 22:
            n = t.memoizedState !== null;
            var m = l !== null && l.memoizedState !== null
              , T = Ie
              , N = jt;
            if (Ie = T || n,
            jt = N || m,
            ye(e, t),
            jt = N,
            Ie = T,
            ve(t),
            a & 8192)
                t: for (e = t.stateNode,
                e._visibility = n ? e._visibility & -2 : e._visibility | 1,
                n && (l === null || m || Ie || jt || Xl(t)),
                l = null,
                e = t; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (l === null) {
                            m = l = e;
                            try {
                                if (u = m.stateNode,
                                n)
                                    r = u.style,
                                    typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
                                else {
                                    o = m.stateNode;
                                    var C = m.memoizedProps.style
                                      , O = C != null && C.hasOwnProperty("display") ? C.display : null;
                                    o.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim()
                                }
                            } catch (A) {
                                Ot(m, m.return, A)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (l === null) {
                            m = e;
                            try {
                                m.stateNode.nodeValue = n ? "" : m.memoizedProps
                            } catch (A) {
                                Ot(m, m.return, A)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break t;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break t;
                        l === e && (l = null),
                        e = e.return
                    }
                    l === e && (l = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            a & 4 && (a = t.updateQueue,
            a !== null && (l = a.retryQueue,
            l !== null && (a.retryQueue = null,
            Xc(t, l))));
            break;
        case 19:
            ye(e, t),
            ve(t),
            a & 4 && (a = t.updateQueue,
            a !== null && (t.updateQueue = null,
            Xc(t, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            ye(e, t),
            ve(t)
        }
    }
    function ve(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var l, a = t.return; a !== null; ) {
                    if (Do(a)) {
                        l = a;
                        break
                    }
                    a = a.return
                }
                if (l == null)
                    throw Error(f(160));
                switch (l.tag) {
                case 27:
                    var n = l.stateNode
                      , u = Yc(t);
                    Nu(t, u, n);
                    break;
                case 5:
                    var r = l.stateNode;
                    l.flags & 32 && (aa(r, ""),
                    l.flags &= -33);
                    var o = Yc(t);
                    Nu(t, o, r);
                    break;
                case 3:
                case 4:
                    var m = l.stateNode.containerInfo
                      , T = Yc(t);
                    Gc(t, T, m);
                    break;
                default:
                    throw Error(f(161))
                }
            } catch (N) {
                Ot(t, t.return, N)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function wo(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                wo(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                t = t.sibling
            }
    }
    function yl(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                qo(t, e.alternate, e),
                e = e.sibling
    }
    function Xl(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ml(4, e, e.return),
                Xl(e);
                break;
            case 1:
                we(e, e.return);
                var l = e.stateNode;
                typeof l.componentWillUnmount == "function" && xo(e, e.return, l),
                Xl(e);
                break;
            case 27:
                Rn(e.stateNode);
            case 26:
            case 5:
                we(e, e.return),
                Xl(e);
                break;
            case 22:
                e.memoizedState === null && Xl(e);
                break;
            case 30:
                Xl(e);
                break;
            default:
                Xl(e)
            }
            t = t.sibling
        }
    }
    function vl(t, e, l) {
        for (l = l && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var a = e.alternate
              , n = t
              , u = e
              , r = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                vl(n, u, l),
                vn(4, u);
                break;
            case 1:
                if (vl(n, u, l),
                a = u,
                n = a.stateNode,
                typeof n.componentDidMount == "function")
                    try {
                        n.componentDidMount()
                    } catch (T) {
                        Ot(a, a.return, T)
                    }
                if (a = u,
                n = a.updateQueue,
                n !== null) {
                    var o = a.stateNode;
                    try {
                        var m = n.shared.hiddenCallbacks;
                        if (m !== null)
                            for (n.shared.hiddenCallbacks = null,
                            n = 0; n < m.length; n++)
                                os(m[n], o)
                    } catch (T) {
                        Ot(a, a.return, T)
                    }
                }
                l && r & 64 && Ro(u),
                pn(u, u.return);
                break;
            case 27:
                _o(u);
            case 26:
            case 5:
                vl(n, u, l),
                l && a === null && r & 4 && Mo(u),
                pn(u, u.return);
                break;
            case 12:
                vl(n, u, l);
                break;
            case 13:
                vl(n, u, l),
                l && r & 4 && Ho(n, u);
                break;
            case 22:
                u.memoizedState === null && vl(n, u, l),
                pn(u, u.return);
                break;
            case 30:
                break;
            default:
                vl(n, u, l)
            }
            e = e.sibling
        }
    }
    function Zc(t, e) {
        var l = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
        t = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        t !== l && (t != null && t.refCount++,
        l != null && en(l))
    }
    function Lc(t, e) {
        t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && en(t))
    }
    function Be(t, e, l, a) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Bo(t, e, l, a),
                e = e.sibling
    }
    function Bo(t, e, l, a) {
        var n = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Be(t, e, l, a),
            n & 2048 && vn(9, e);
            break;
        case 1:
            Be(t, e, l, a);
            break;
        case 3:
            Be(t, e, l, a),
            n & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
            t != null && en(t)));
            break;
        case 12:
            if (n & 2048) {
                Be(t, e, l, a),
                t = e.stateNode;
                try {
                    var u = e.memoizedProps
                      , r = u.id
                      , o = u.onPostCommit;
                    typeof o == "function" && o(r, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (m) {
                    Ot(e, e.return, m)
                }
            } else
                Be(t, e, l, a);
            break;
        case 13:
            Be(t, e, l, a);
            break;
        case 23:
            break;
        case 22:
            u = e.stateNode,
            r = e.alternate,
            e.memoizedState !== null ? u._visibility & 2 ? Be(t, e, l, a) : gn(t, e) : u._visibility & 2 ? Be(t, e, l, a) : (u._visibility |= 2,
            Ta(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
            n & 2048 && Zc(r, e);
            break;
        case 24:
            Be(t, e, l, a),
            n & 2048 && Lc(e.alternate, e);
            break;
        default:
            Be(t, e, l, a)
        }
    }
    function Ta(t, e, l, a, n) {
        for (n = n && (e.subtreeFlags & 10256) !== 0,
        e = e.child; e !== null; ) {
            var u = t
              , r = e
              , o = l
              , m = a
              , T = r.flags;
            switch (r.tag) {
            case 0:
            case 11:
            case 15:
                Ta(u, r, o, m, n),
                vn(8, r);
                break;
            case 23:
                break;
            case 22:
                var N = r.stateNode;
                r.memoizedState !== null ? N._visibility & 2 ? Ta(u, r, o, m, n) : gn(u, r) : (N._visibility |= 2,
                Ta(u, r, o, m, n)),
                n && T & 2048 && Zc(r.alternate, r);
                break;
            case 24:
                Ta(u, r, o, m, n),
                n && T & 2048 && Lc(r.alternate, r);
                break;
            default:
                Ta(u, r, o, m, n)
            }
            e = e.sibling
        }
    }
    function gn(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var l = t
                  , a = e
                  , n = a.flags;
                switch (a.tag) {
                case 22:
                    gn(l, a),
                    n & 2048 && Zc(a.alternate, a);
                    break;
                case 24:
                    gn(l, a),
                    n & 2048 && Lc(a.alternate, a);
                    break;
                default:
                    gn(l, a)
                }
                e = e.sibling
            }
    }
    var Sn = 8192;
    function Oa(t) {
        if (t.subtreeFlags & Sn)
            for (t = t.child; t !== null; )
                Vo(t),
                t = t.sibling
    }
    function Vo(t) {
        switch (t.tag) {
        case 26:
            Oa(t),
            t.flags & Sn && t.memoizedState !== null && uy(Ne, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            Oa(t);
            break;
        case 3:
        case 4:
            var e = Ne;
            Ne = Zu(t.stateNode.containerInfo),
            Oa(t),
            Ne = e;
            break;
        case 22:
            t.memoizedState === null && (e = t.alternate,
            e !== null && e.memoizedState !== null ? (e = Sn,
            Sn = 16777216,
            Oa(t),
            Sn = e) : Oa(t));
            break;
        default:
            Oa(t)
        }
    }
    function Yo(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child,
        t !== null)) {
            e.child = null;
            do
                e = t.sibling,
                t.sibling = null,
                t = e;
            while (t !== null)
        }
    }
    function bn(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var l = 0; l < e.length; l++) {
                    var a = e[l];
                    Jt = a,
                    Ko(a, t)
                }
            Yo(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Go(t),
                t = t.sibling
    }
    function Go(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            bn(t),
            t.flags & 2048 && ml(9, t, t.return);
            break;
        case 3:
            bn(t);
            break;
        case 12:
            bn(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
            qu(t)) : bn(t);
            break;
        default:
            bn(t)
        }
    }
    function qu(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var l = 0; l < e.length; l++) {
                    var a = e[l];
                    Jt = a,
                    Ko(a, t)
                }
            Yo(t)
        }
        for (t = t.child; t !== null; ) {
            switch (e = t,
            e.tag) {
            case 0:
            case 11:
            case 15:
                ml(8, e, e.return),
                qu(e);
                break;
            case 22:
                l = e.stateNode,
                l._visibility & 2 && (l._visibility &= -3,
                qu(e));
                break;
            default:
                qu(e)
            }
            t = t.sibling
        }
    }
    function Ko(t, e) {
        for (; Jt !== null; ) {
            var l = Jt;
            switch (l.tag) {
            case 0:
            case 11:
            case 15:
                ml(8, l, e);
                break;
            case 23:
            case 22:
                if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                    var a = l.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                en(l.memoizedState.cache)
            }
            if (a = l.child,
            a !== null)
                a.return = l,
                Jt = a;
            else
                t: for (l = t; Jt !== null; ) {
                    a = Jt;
                    var n = a.sibling
                      , u = a.return;
                    if (zo(a),
                    a === l) {
                        Jt = null;
                        break t
                    }
                    if (n !== null) {
                        n.return = u,
                        Jt = n;
                        break t
                    }
                    Jt = u
                }
        }
    }
    var Em = {
        getCacheForType: function(t) {
            var e = te(Gt)
              , l = e.data.get(t);
            return l === void 0 && (l = t(),
            e.data.set(t, l)),
            l
        }
    }
      , Tm = typeof WeakMap == "function" ? WeakMap : Map
      , pt = 0
      , Rt = null
      , ft = null
      , ot = 0
      , gt = 0
      , pe = null
      , pl = !1
      , Aa = !1
      , Qc = !1
      , el = 0
      , zt = 0
      , gl = 0
      , Zl = 0
      , Jc = 0
      , Me = 0
      , Ua = 0
      , En = null
      , fe = null
      , Wc = !1
      , kc = 0
      , zu = 1 / 0
      , Cu = null
      , Sl = null
      , $t = 0
      , bl = null
      , Ra = null
      , xa = 0
      , $c = 0
      , Fc = null
      , Xo = null
      , Tn = 0
      , Pc = null;
    function ge() {
        if ((pt & 2) !== 0 && ot !== 0)
            return ot & -ot;
        if (g.T !== null) {
            var t = ma;
            return t !== 0 ? t : uf()
        }
        return nr()
    }
    function Zo() {
        Me === 0 && (Me = (ot & 536870912) === 0 || yt ? tr() : 536870912);
        var t = xe.current;
        return t !== null && (t.flags |= 32),
        Me
    }
    function Se(t, e, l) {
        (t === Rt && (gt === 2 || gt === 9) || t.cancelPendingCommit !== null) && (Ma(t, 0),
        El(t, ot, Me, !1)),
        Va(t, l),
        ((pt & 2) === 0 || t !== Rt) && (t === Rt && ((pt & 2) === 0 && (Zl |= l),
        zt === 4 && El(t, ot, Me, !1)),
        Ve(t))
    }
    function Lo(t, e, l) {
        if ((pt & 6) !== 0)
            throw Error(f(327));
        var a = !l && (e & 124) === 0 && (e & t.expiredLanes) === 0 || Ba(t, e)
          , n = a ? Um(t, e) : ef(t, e, !0)
          , u = a;
        do {
            if (n === 0) {
                Aa && !a && El(t, e, 0, !1);
                break
            } else {
                if (l = t.current.alternate,
                u && !Om(l)) {
                    n = ef(t, e, !1),
                    u = !1;
                    continue
                }
                if (n === 2) {
                    if (u = e,
                    t.errorRecoveryDisabledLanes & u)
                        var r = 0;
                    else
                        r = t.pendingLanes & -536870913,
                        r = r !== 0 ? r : r & 536870912 ? 536870912 : 0;
                    if (r !== 0) {
                        e = r;
                        t: {
                            var o = t;
                            n = En;
                            var m = o.current.memoizedState.isDehydrated;
                            if (m && (Ma(o, r).flags |= 256),
                            r = ef(o, r, !1),
                            r !== 2) {
                                if (Qc && !m) {
                                    o.errorRecoveryDisabledLanes |= u,
                                    Zl |= u,
                                    n = 4;
                                    break t
                                }
                                u = fe,
                                fe = n,
                                u !== null && (fe === null ? fe = u : fe.push.apply(fe, u))
                            }
                            n = r
                        }
                        if (u = !1,
                        n !== 2)
                            continue
                    }
                }
                if (n === 1) {
                    Ma(t, 0),
                    El(t, e, 0, !0);
                    break
                }
                t: {
                    switch (a = t,
                    u = n,
                    u) {
                    case 0:
                    case 1:
                        throw Error(f(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        El(a, e, Me, !pl);
                        break t;
                    case 2:
                        fe = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(f(329))
                    }
                    if ((e & 62914560) === e && (n = kc + 300 - Ce(),
                    10 < n)) {
                        if (El(a, e, Me, !pl),
                        Ln(a, 0, !0) !== 0)
                            break t;
                        a.timeoutHandle = bd(Qo.bind(null, a, l, fe, Cu, Wc, e, Me, Zl, Ua, pl, u, 2, -0, 0), n);
                        break t
                    }
                    Qo(a, l, fe, Cu, Wc, e, Me, Zl, Ua, pl, u, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Ve(t)
    }
    function Qo(t, e, l, a, n, u, r, o, m, T, N, C, O, A) {
        if (t.timeoutHandle = -1,
        C = e.subtreeFlags,
        (C & 8192 || (C & 16785408) === 16785408) && (Dn = {
            stylesheets: null,
            count: 0,
            unsuspend: ny
        },
        Vo(e),
        C = iy(),
        C !== null)) {
            t.cancelPendingCommit = C(Io.bind(null, t, e, u, l, a, n, r, o, m, N, 1, O, A)),
            El(t, u, r, !T);
            return
        }
        Io(t, e, u, l, a, n, r, o, m)
    }
    function Om(t) {
        for (var e = t; ; ) {
            var l = e.tag;
            if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue,
            l !== null && (l = l.stores,
            l !== null)))
                for (var a = 0; a < l.length; a++) {
                    var n = l[a]
                      , u = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!he(u(), n))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (l = e.child,
            e.subtreeFlags & 16384 && l !== null)
                l.return = e,
                e = l;
            else {
                if (e === t)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function El(t, e, l, a) {
        e &= ~Jc,
        e &= ~Zl,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        a && (t.warmLanes |= e),
        a = t.expirationTimes;
        for (var n = e; 0 < n; ) {
            var u = 31 - de(n)
              , r = 1 << u;
            a[u] = -1,
            n &= ~r
        }
        l !== 0 && lr(t, l, e)
    }
    function Hu() {
        return (pt & 6) === 0 ? (On(0),
        !1) : !0
    }
    function Ic() {
        if (ft !== null) {
            if (gt === 0)
                var t = ft.return;
            else
                t = ft,
                Je = Bl = null,
                vc(t),
                ba = null,
                hn = 0,
                t = ft;
            for (; t !== null; )
                Uo(t.alternate, t),
                t = t.return;
            ft = null
        }
    }
    function Ma(t, e) {
        var l = t.timeoutHandle;
        l !== -1 && (t.timeoutHandle = -1,
        Gm(l)),
        l = t.cancelPendingCommit,
        l !== null && (t.cancelPendingCommit = null,
        l()),
        Ic(),
        Rt = t,
        ft = l = Ze(t.current, null),
        ot = e,
        gt = 0,
        pe = null,
        pl = !1,
        Aa = Ba(t, e),
        Qc = !1,
        Ua = Me = Jc = Zl = gl = zt = 0,
        fe = En = null,
        Wc = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var a = t.entangledLanes;
        if (a !== 0)
            for (t = t.entanglements,
            a &= e; 0 < a; ) {
                var n = 31 - de(a)
                  , u = 1 << n;
                e |= t[n],
                a &= ~u
            }
        return el = e,
        au(),
        l
    }
    function Jo(t, e) {
        it = null,
        g.H = Tu,
        e === an || e === du ? (e = rs(),
        gt = 3) : e === is ? (e = rs(),
        gt = 4) : gt = e === so ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        pe = e,
        ft === null && (zt = 1,
        xu(t, Oe(e, t.current)))
    }
    function Wo() {
        var t = g.H;
        return g.H = Tu,
        t === null ? Tu : t
    }
    function ko() {
        var t = g.A;
        return g.A = Em,
        t
    }
    function tf() {
        zt = 4,
        pl || (ot & 4194048) !== ot && xe.current !== null || (Aa = !0),
        (gl & 134217727) === 0 && (Zl & 134217727) === 0 || Rt === null || El(Rt, ot, Me, !1)
    }
    function ef(t, e, l) {
        var a = pt;
        pt |= 2;
        var n = Wo()
          , u = ko();
        (Rt !== t || ot !== e) && (Cu = null,
        Ma(t, e)),
        e = !1;
        var r = zt;
        t: do
            try {
                if (gt !== 0 && ft !== null) {
                    var o = ft
                      , m = pe;
                    switch (gt) {
                    case 8:
                        Ic(),
                        r = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        xe.current === null && (e = !0);
                        var T = gt;
                        if (gt = 0,
                        pe = null,
                        Da(t, o, m, T),
                        l && Aa) {
                            r = 0;
                            break t
                        }
                        break;
                    default:
                        T = gt,
                        gt = 0,
                        pe = null,
                        Da(t, o, m, T)
                    }
                }
                Am(),
                r = zt;
                break
            } catch (N) {
                Jo(t, N)
            }
        while (!0);
        return e && t.shellSuspendCounter++,
        Je = Bl = null,
        pt = a,
        g.H = n,
        g.A = u,
        ft === null && (Rt = null,
        ot = 0,
        au()),
        r
    }
    function Am() {
        for (; ft !== null; )
            $o(ft)
    }
    function Um(t, e) {
        var l = pt;
        pt |= 2;
        var a = Wo()
          , n = ko();
        Rt !== t || ot !== e ? (Cu = null,
        zu = Ce() + 500,
        Ma(t, e)) : Aa = Ba(t, e);
        t: do
            try {
                if (gt !== 0 && ft !== null) {
                    e = ft;
                    var u = pe;
                    e: switch (gt) {
                    case 1:
                        gt = 0,
                        pe = null,
                        Da(t, e, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (cs(u)) {
                            gt = 0,
                            pe = null,
                            Fo(e);
                            break
                        }
                        e = function() {
                            gt !== 2 && gt !== 9 || Rt !== t || (gt = 7),
                            Ve(t)
                        }
                        ,
                        u.then(e, e);
                        break t;
                    case 3:
                        gt = 7;
                        break t;
                    case 4:
                        gt = 5;
                        break t;
                    case 7:
                        cs(u) ? (gt = 0,
                        pe = null,
                        Fo(e)) : (gt = 0,
                        pe = null,
                        Da(t, e, u, 7));
                        break;
                    case 5:
                        var r = null;
                        switch (ft.tag) {
                        case 26:
                            r = ft.memoizedState;
                        case 5:
                        case 27:
                            var o = ft;
                            if (!r || qd(r)) {
                                gt = 0,
                                pe = null;
                                var m = o.sibling;
                                if (m !== null)
                                    ft = m;
                                else {
                                    var T = o.return;
                                    T !== null ? (ft = T,
                                    ju(T)) : ft = null
                                }
                                break e
                            }
                        }
                        gt = 0,
                        pe = null,
                        Da(t, e, u, 5);
                        break;
                    case 6:
                        gt = 0,
                        pe = null,
                        Da(t, e, u, 6);
                        break;
                    case 8:
                        Ic(),
                        zt = 6;
                        break t;
                    default:
                        throw Error(f(462))
                    }
                }
                Rm();
                break
            } catch (N) {
                Jo(t, N)
            }
        while (!0);
        return Je = Bl = null,
        g.H = a,
        g.A = n,
        pt = l,
        ft !== null ? 0 : (Rt = null,
        ot = 0,
        au(),
        zt)
    }
    function Rm() {
        for (; ft !== null && !Wh(); )
            $o(ft)
    }
    function $o(t) {
        var e = Oo(t.alternate, t, el);
        t.memoizedProps = t.pendingProps,
        e === null ? ju(t) : ft = e
    }
    function Fo(t) {
        var e = t
          , l = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = po(l, e, e.pendingProps, e.type, void 0, ot);
            break;
        case 11:
            e = po(l, e, e.pendingProps, e.type.render, e.ref, ot);
            break;
        case 5:
            vc(e);
        default:
            Uo(l, e),
            e = ft = Fr(e, el),
            e = Oo(l, e, el)
        }
        t.memoizedProps = t.pendingProps,
        e === null ? ju(t) : ft = e
    }
    function Da(t, e, l, a) {
        Je = Bl = null,
        vc(e),
        ba = null,
        hn = 0;
        var n = e.return;
        try {
            if (ym(t, n, e, l, ot)) {
                zt = 1,
                xu(t, Oe(l, t.current)),
                ft = null;
                return
            }
        } catch (u) {
            if (n !== null)
                throw ft = n,
                u;
            zt = 1,
            xu(t, Oe(l, t.current)),
            ft = null;
            return
        }
        e.flags & 32768 ? (yt || a === 1 ? t = !0 : Aa || (ot & 536870912) !== 0 ? t = !1 : (pl = t = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = xe.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        Po(e, t)) : ju(e)
    }
    function ju(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                Po(e, pl);
                return
            }
            t = e.return;
            var l = pm(e.alternate, e, el);
            if (l !== null) {
                ft = l;
                return
            }
            if (e = e.sibling,
            e !== null) {
                ft = e;
                return
            }
            ft = e = t
        } while (e !== null);
        zt === 0 && (zt = 5)
    }
    function Po(t, e) {
        do {
            var l = gm(t.alternate, t);
            if (l !== null) {
                l.flags &= 32767,
                ft = l;
                return
            }
            if (l = t.return,
            l !== null && (l.flags |= 32768,
            l.subtreeFlags = 0,
            l.deletions = null),
            !e && (t = t.sibling,
            t !== null)) {
                ft = t;
                return
            }
            ft = t = l
        } while (t !== null);
        zt = 6,
        ft = null
    }
    function Io(t, e, l, a, n, u, r, o, m) {
        t.cancelPendingCommit = null;
        do
            wu();
        while ($t !== 0);
        if ((pt & 6) !== 0)
            throw Error(f(327));
        if (e !== null) {
            if (e === t.current)
                throw Error(f(177));
            if (u = e.lanes | e.childLanes,
            u |= Li,
            n0(t, l, u, r, o, m),
            t === Rt && (ft = Rt = null,
            ot = 0),
            Ra = e,
            bl = t,
            xa = l,
            $c = u,
            Fc = n,
            Xo = a,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            _m(Kn, function() {
                return nd(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            a = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || a) {
                a = g.T,
                g.T = null,
                n = M.p,
                M.p = 2,
                r = pt,
                pt |= 4;
                try {
                    Sm(t, e, l)
                } finally {
                    pt = r,
                    M.p = n,
                    g.T = a
                }
            }
            $t = 1,
            td(),
            ed(),
            ld()
        }
    }
    function td() {
        if ($t === 1) {
            $t = 0;
            var t = bl
              , e = Ra
              , l = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || l) {
                l = g.T,
                g.T = null;
                var a = M.p;
                M.p = 2;
                var n = pt;
                pt |= 4;
                try {
                    jo(e, t);
                    var u = mf
                      , r = Gr(t.containerInfo)
                      , o = u.focusedElem
                      , m = u.selectionRange;
                    if (r !== o && o && o.ownerDocument && Yr(o.ownerDocument.documentElement, o)) {
                        if (m !== null && Yi(o)) {
                            var T = m.start
                              , N = m.end;
                            if (N === void 0 && (N = T),
                            "selectionStart"in o)
                                o.selectionStart = T,
                                o.selectionEnd = Math.min(N, o.value.length);
                            else {
                                var C = o.ownerDocument || document
                                  , O = C && C.defaultView || window;
                                if (O.getSelection) {
                                    var A = O.getSelection()
                                      , tt = o.textContent.length
                                      , F = Math.min(m.start, tt)
                                      , Tt = m.end === void 0 ? F : Math.min(m.end, tt);
                                    !A.extend && F > Tt && (r = Tt,
                                    Tt = F,
                                    F = r);
                                    var b = Vr(o, F)
                                      , p = Vr(o, Tt);
                                    if (b && p && (A.rangeCount !== 1 || A.anchorNode !== b.node || A.anchorOffset !== b.offset || A.focusNode !== p.node || A.focusOffset !== p.offset)) {
                                        var E = C.createRange();
                                        E.setStart(b.node, b.offset),
                                        A.removeAllRanges(),
                                        F > Tt ? (A.addRange(E),
                                        A.extend(p.node, p.offset)) : (E.setEnd(p.node, p.offset),
                                        A.addRange(E))
                                    }
                                }
                            }
                        }
                        for (C = [],
                        A = o; A = A.parentNode; )
                            A.nodeType === 1 && C.push({
                                element: A,
                                left: A.scrollLeft,
                                top: A.scrollTop
                            });
                        for (typeof o.focus == "function" && o.focus(),
                        o = 0; o < C.length; o++) {
                            var z = C[o];
                            z.element.scrollLeft = z.left,
                            z.element.scrollTop = z.top
                        }
                    }
                    ku = !!hf,
                    mf = hf = null
                } finally {
                    pt = n,
                    M.p = a,
                    g.T = l
                }
            }
            t.current = e,
            $t = 2
        }
    }
    function ed() {
        if ($t === 2) {
            $t = 0;
            var t = bl
              , e = Ra
              , l = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || l) {
                l = g.T,
                g.T = null;
                var a = M.p;
                M.p = 2;
                var n = pt;
                pt |= 4;
                try {
                    qo(t, e.alternate, e)
                } finally {
                    pt = n,
                    M.p = a,
                    g.T = l
                }
            }
            $t = 3
        }
    }
    function ld() {
        if ($t === 4 || $t === 3) {
            $t = 0,
            kh();
            var t = bl
              , e = Ra
              , l = xa
              , a = Xo;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? $t = 5 : ($t = 0,
            Ra = bl = null,
            ad(t, t.pendingLanes));
            var n = t.pendingLanes;
            if (n === 0 && (Sl = null),
            Si(l),
            e = e.stateNode,
            oe && typeof oe.onCommitFiberRoot == "function")
                try {
                    oe.onCommitFiberRoot(wa, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                e = g.T,
                n = M.p,
                M.p = 2,
                g.T = null;
                try {
                    for (var u = t.onRecoverableError, r = 0; r < a.length; r++) {
                        var o = a[r];
                        u(o.value, {
                            componentStack: o.stack
                        })
                    }
                } finally {
                    g.T = e,
                    M.p = n
                }
            }
            (xa & 3) !== 0 && wu(),
            Ve(t),
            n = t.pendingLanes,
            (l & 4194090) !== 0 && (n & 42) !== 0 ? t === Pc ? Tn++ : (Tn = 0,
            Pc = t) : Tn = 0,
            On(0)
        }
    }
    function ad(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
        e != null && (t.pooledCache = null,
        en(e)))
    }
    function wu(t) {
        return td(),
        ed(),
        ld(),
        nd()
    }
    function nd() {
        if ($t !== 5)
            return !1;
        var t = bl
          , e = $c;
        $c = 0;
        var l = Si(xa)
          , a = g.T
          , n = M.p;
        try {
            M.p = 32 > l ? 32 : l,
            g.T = null,
            l = Fc,
            Fc = null;
            var u = bl
              , r = xa;
            if ($t = 0,
            Ra = bl = null,
            xa = 0,
            (pt & 6) !== 0)
                throw Error(f(331));
            var o = pt;
            if (pt |= 4,
            Go(u.current),
            Bo(u, u.current, r, l),
            pt = o,
            On(0, !1),
            oe && typeof oe.onPostCommitFiberRoot == "function")
                try {
                    oe.onPostCommitFiberRoot(wa, u)
                } catch {}
            return !0
        } finally {
            M.p = n,
            g.T = a,
            ad(t, e)
        }
    }
    function ud(t, e, l) {
        e = Oe(l, e),
        e = _c(t.stateNode, e, 2),
        t = sl(t, e, 2),
        t !== null && (Va(t, 2),
        Ve(t))
    }
    function Ot(t, e, l) {
        if (t.tag === 3)
            ud(t, t, l);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    ud(e, t, l);
                    break
                } else if (e.tag === 1) {
                    var a = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Sl === null || !Sl.has(a))) {
                        t = Oe(l, t),
                        l = fo(2),
                        a = sl(e, l, 2),
                        a !== null && (ro(l, a, e, t),
                        Va(a, 2),
                        Ve(a));
                        break
                    }
                }
                e = e.return
            }
    }
    function lf(t, e, l) {
        var a = t.pingCache;
        if (a === null) {
            a = t.pingCache = new Tm;
            var n = new Set;
            a.set(e, n)
        } else
            n = a.get(e),
            n === void 0 && (n = new Set,
            a.set(e, n));
        n.has(l) || (Qc = !0,
        n.add(l),
        t = xm.bind(null, t, e, l),
        e.then(t, t))
    }
    function xm(t, e, l) {
        var a = t.pingCache;
        a !== null && a.delete(e),
        t.pingedLanes |= t.suspendedLanes & l,
        t.warmLanes &= ~l,
        Rt === t && (ot & l) === l && (zt === 4 || zt === 3 && (ot & 62914560) === ot && 300 > Ce() - kc ? (pt & 2) === 0 && Ma(t, 0) : Jc |= l,
        Ua === ot && (Ua = 0)),
        Ve(t)
    }
    function id(t, e) {
        e === 0 && (e = er()),
        t = sa(t, e),
        t !== null && (Va(t, e),
        Ve(t))
    }
    function Mm(t) {
        var e = t.memoizedState
          , l = 0;
        e !== null && (l = e.retryLane),
        id(t, l)
    }
    function Dm(t, e) {
        var l = 0;
        switch (t.tag) {
        case 13:
            var a = t.stateNode
              , n = t.memoizedState;
            n !== null && (l = n.retryLane);
            break;
        case 19:
            a = t.stateNode;
            break;
        case 22:
            a = t.stateNode._retryCache;
            break;
        default:
            throw Error(f(314))
        }
        a !== null && a.delete(e),
        id(t, l)
    }
    function _m(t, e) {
        return al(t, e)
    }
    var Bu = null
      , _a = null
      , af = !1
      , Vu = !1
      , nf = !1
      , Ll = 0;
    function Ve(t) {
        t !== _a && t.next === null && (_a === null ? Bu = _a = t : _a = _a.next = t),
        Vu = !0,
        af || (af = !0,
        qm())
    }
    function On(t, e) {
        if (!nf && Vu) {
            nf = !0;
            do
                for (var l = !1, a = Bu; a !== null; ) {
                    if (t !== 0) {
                        var n = a.pendingLanes;
                        if (n === 0)
                            var u = 0;
                        else {
                            var r = a.suspendedLanes
                              , o = a.pingedLanes;
                            u = (1 << 31 - de(42 | t) + 1) - 1,
                            u &= n & ~(r & ~o),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (l = !0,
                        sd(a, u))
                    } else
                        u = ot,
                        u = Ln(a, a === Rt ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (u & 3) === 0 || Ba(a, u) || (l = !0,
                        sd(a, u));
                    a = a.next
                }
            while (l);
            nf = !1
        }
    }
    function Nm() {
        cd()
    }
    function cd() {
        Vu = af = !1;
        var t = 0;
        Ll !== 0 && (Ym() && (t = Ll),
        Ll = 0);
        for (var e = Ce(), l = null, a = Bu; a !== null; ) {
            var n = a.next
              , u = fd(a, e);
            u === 0 ? (a.next = null,
            l === null ? Bu = n : l.next = n,
            n === null && (_a = l)) : (l = a,
            (t !== 0 || (u & 3) !== 0) && (Vu = !0)),
            a = n
        }
        On(t)
    }
    function fd(t, e) {
        for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
            var r = 31 - de(u)
              , o = 1 << r
              , m = n[r];
            m === -1 ? ((o & l) === 0 || (o & a) !== 0) && (n[r] = a0(o, e)) : m <= e && (t.expiredLanes |= o),
            u &= ~o
        }
        if (e = Rt,
        l = ot,
        l = Ln(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        a = t.callbackNode,
        l === 0 || t === e && (gt === 2 || gt === 9) || t.cancelPendingCommit !== null)
            return a !== null && a !== null && vi(a),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((l & 3) === 0 || Ba(t, l)) {
            if (e = l & -l,
            e === t.callbackPriority)
                return e;
            switch (a !== null && vi(a),
            Si(l)) {
            case 2:
            case 8:
                l = Pf;
                break;
            case 32:
                l = Kn;
                break;
            case 268435456:
                l = If;
                break;
            default:
                l = Kn
            }
            return a = rd.bind(null, t),
            l = al(l, a),
            t.callbackPriority = e,
            t.callbackNode = l,
            e
        }
        return a !== null && a !== null && vi(a),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function rd(t, e) {
        if ($t !== 0 && $t !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var l = t.callbackNode;
        if (wu() && t.callbackNode !== l)
            return null;
        var a = ot;
        return a = Ln(t, t === Rt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        a === 0 ? null : (Lo(t, a, e),
        fd(t, Ce()),
        t.callbackNode != null && t.callbackNode === l ? rd.bind(null, t) : null)
    }
    function sd(t, e) {
        if (wu())
            return null;
        Lo(t, e, !0)
    }
    function qm() {
        Km(function() {
            (pt & 6) !== 0 ? al(Ff, Nm) : cd()
        })
    }
    function uf() {
        return Ll === 0 && (Ll = tr()),
        Ll
    }
    function od(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : $n("" + t)
    }
    function dd(t, e) {
        var l = e.ownerDocument.createElement("input");
        return l.name = e.name,
        l.value = e.value,
        t.id && l.setAttribute("form", t.id),
        e.parentNode.insertBefore(l, e),
        t = new FormData(t),
        l.parentNode.removeChild(l),
        t
    }
    function zm(t, e, l, a, n) {
        if (e === "submit" && l && l.stateNode === n) {
            var u = od((n[ne] || null).action)
              , r = a.submitter;
            r && (e = (e = r[ne] || null) ? od(e.formAction) : r.getAttribute("formAction"),
            e !== null && (u = e,
            r = null));
            var o = new tu("action","action",null,a,n);
            t.push({
                event: o,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (Ll !== 0) {
                                var m = r ? dd(n, r) : new FormData(n);
                                Uc(l, {
                                    pending: !0,
                                    data: m,
                                    method: n.method,
                                    action: u
                                }, null, m)
                            }
                        } else
                            typeof u == "function" && (o.preventDefault(),
                            m = r ? dd(n, r) : new FormData(n),
                            Uc(l, {
                                pending: !0,
                                data: m,
                                method: n.method,
                                action: u
                            }, u, m))
                    },
                    currentTarget: n
                }]
            })
        }
    }
    for (var cf = 0; cf < Zi.length; cf++) {
        var ff = Zi[cf]
          , Cm = ff.toLowerCase()
          , Hm = ff[0].toUpperCase() + ff.slice(1);
        _e(Cm, "on" + Hm)
    }
    _e(Zr, "onAnimationEnd"),
    _e(Lr, "onAnimationIteration"),
    _e(Qr, "onAnimationStart"),
    _e("dblclick", "onDoubleClick"),
    _e("focusin", "onFocus"),
    _e("focusout", "onBlur"),
    _e(P0, "onTransitionRun"),
    _e(I0, "onTransitionStart"),
    _e(tm, "onTransitionCancel"),
    _e(Jr, "onTransitionEnd"),
    ta("onMouseEnter", ["mouseout", "mouseover"]),
    ta("onMouseLeave", ["mouseout", "mouseover"]),
    ta("onPointerEnter", ["pointerout", "pointerover"]),
    ta("onPointerLeave", ["pointerout", "pointerover"]),
    Dl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Dl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Dl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Dl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Dl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Dl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var An = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , jm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(An));
    function hd(t, e) {
        e = (e & 4) !== 0;
        for (var l = 0; l < t.length; l++) {
            var a = t[l]
              , n = a.event;
            a = a.listeners;
            t: {
                var u = void 0;
                if (e)
                    for (var r = a.length - 1; 0 <= r; r--) {
                        var o = a[r]
                          , m = o.instance
                          , T = o.currentTarget;
                        if (o = o.listener,
                        m !== u && n.isPropagationStopped())
                            break t;
                        u = o,
                        n.currentTarget = T;
                        try {
                            u(n)
                        } catch (N) {
                            Ru(N)
                        }
                        n.currentTarget = null,
                        u = m
                    }
                else
                    for (r = 0; r < a.length; r++) {
                        if (o = a[r],
                        m = o.instance,
                        T = o.currentTarget,
                        o = o.listener,
                        m !== u && n.isPropagationStopped())
                            break t;
                        u = o,
                        n.currentTarget = T;
                        try {
                            u(n)
                        } catch (N) {
                            Ru(N)
                        }
                        n.currentTarget = null,
                        u = m
                    }
            }
        }
    }
    function rt(t, e) {
        var l = e[bi];
        l === void 0 && (l = e[bi] = new Set);
        var a = t + "__bubble";
        l.has(a) || (md(e, t, 2, !1),
        l.add(a))
    }
    function rf(t, e, l) {
        var a = 0;
        e && (a |= 4),
        md(l, t, a, e)
    }
    var Yu = "_reactListening" + Math.random().toString(36).slice(2);
    function sf(t) {
        if (!t[Yu]) {
            t[Yu] = !0,
            ir.forEach(function(l) {
                l !== "selectionchange" && (jm.has(l) || rf(l, !1, t),
                rf(l, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[Yu] || (e[Yu] = !0,
            rf("selectionchange", !1, e))
        }
    }
    function md(t, e, l, a) {
        switch (Bd(e)) {
        case 2:
            var n = ry;
            break;
        case 8:
            n = sy;
            break;
        default:
            n = Af
        }
        l = n.bind(null, e, l, t),
        n = void 0,
        !Ni || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0),
        a ? n !== void 0 ? t.addEventListener(e, l, {
            capture: !0,
            passive: n
        }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
            passive: n
        }) : t.addEventListener(e, l, !1)
    }
    function of(t, e, l, a, n) {
        var u = a;
        if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
            t: for (; ; ) {
                if (a === null)
                    return;
                var r = a.tag;
                if (r === 3 || r === 4) {
                    var o = a.stateNode.containerInfo;
                    if (o === n)
                        break;
                    if (r === 4)
                        for (r = a.return; r !== null; ) {
                            var m = r.tag;
                            if ((m === 3 || m === 4) && r.stateNode.containerInfo === n)
                                return;
                            r = r.return
                        }
                    for (; o !== null; ) {
                        if (r = Fl(o),
                        r === null)
                            return;
                        if (m = r.tag,
                        m === 5 || m === 6 || m === 26 || m === 27) {
                            a = u = r;
                            continue t
                        }
                        o = o.parentNode
                    }
                }
                a = a.return
            }
        br(function() {
            var T = u
              , N = Di(l)
              , C = [];
            t: {
                var O = Wr.get(t);
                if (O !== void 0) {
                    var A = tu
                      , tt = t;
                    switch (t) {
                    case "keypress":
                        if (Pn(l) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        A = _0;
                        break;
                    case "focusin":
                        tt = "focus",
                        A = Hi;
                        break;
                    case "focusout":
                        tt = "blur",
                        A = Hi;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        A = Hi;
                        break;
                    case "click":
                        if (l.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        A = Or;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        A = g0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        A = z0;
                        break;
                    case Zr:
                    case Lr:
                    case Qr:
                        A = E0;
                        break;
                    case Jr:
                        A = H0;
                        break;
                    case "scroll":
                    case "scrollend":
                        A = v0;
                        break;
                    case "wheel":
                        A = w0;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        A = O0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        A = Ur;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        A = V0
                    }
                    var F = (e & 4) !== 0
                      , Tt = !F && (t === "scroll" || t === "scrollend")
                      , b = F ? O !== null ? O + "Capture" : null : O;
                    F = [];
                    for (var p = T, E; p !== null; ) {
                        var z = p;
                        if (E = z.stateNode,
                        z = z.tag,
                        z !== 5 && z !== 26 && z !== 27 || E === null || b === null || (z = Ka(p, b),
                        z != null && F.push(Un(p, z, E))),
                        Tt)
                            break;
                        p = p.return
                    }
                    0 < F.length && (O = new A(O,tt,null,l,N),
                    C.push({
                        event: O,
                        listeners: F
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (O = t === "mouseover" || t === "pointerover",
                    A = t === "mouseout" || t === "pointerout",
                    O && l !== Mi && (tt = l.relatedTarget || l.fromElement) && (Fl(tt) || tt[$l]))
                        break t;
                    if ((A || O) && (O = N.window === N ? N : (O = N.ownerDocument) ? O.defaultView || O.parentWindow : window,
                    A ? (tt = l.relatedTarget || l.toElement,
                    A = T,
                    tt = tt ? Fl(tt) : null,
                    tt !== null && (Tt = y(tt),
                    F = tt.tag,
                    tt !== Tt || F !== 5 && F !== 27 && F !== 6) && (tt = null)) : (A = null,
                    tt = T),
                    A !== tt)) {
                        if (F = Or,
                        z = "onMouseLeave",
                        b = "onMouseEnter",
                        p = "mouse",
                        (t === "pointerout" || t === "pointerover") && (F = Ur,
                        z = "onPointerLeave",
                        b = "onPointerEnter",
                        p = "pointer"),
                        Tt = A == null ? O : Ga(A),
                        E = tt == null ? O : Ga(tt),
                        O = new F(z,p + "leave",A,l,N),
                        O.target = Tt,
                        O.relatedTarget = E,
                        z = null,
                        Fl(N) === T && (F = new F(b,p + "enter",tt,l,N),
                        F.target = E,
                        F.relatedTarget = Tt,
                        z = F),
                        Tt = z,
                        A && tt)
                            e: {
                                for (F = A,
                                b = tt,
                                p = 0,
                                E = F; E; E = Na(E))
                                    p++;
                                for (E = 0,
                                z = b; z; z = Na(z))
                                    E++;
                                for (; 0 < p - E; )
                                    F = Na(F),
                                    p--;
                                for (; 0 < E - p; )
                                    b = Na(b),
                                    E--;
                                for (; p--; ) {
                                    if (F === b || b !== null && F === b.alternate)
                                        break e;
                                    F = Na(F),
                                    b = Na(b)
                                }
                                F = null
                            }
                        else
                            F = null;
                        A !== null && yd(C, O, A, F, !1),
                        tt !== null && Tt !== null && yd(C, Tt, tt, F, !0)
                    }
                }
                t: {
                    if (O = T ? Ga(T) : window,
                    A = O.nodeName && O.nodeName.toLowerCase(),
                    A === "select" || A === "input" && O.type === "file")
                        var L = zr;
                    else if (Nr(O))
                        if (Cr)
                            L = k0;
                        else {
                            L = J0;
                            var ct = Q0
                        }
                    else
                        A = O.nodeName,
                        !A || A.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? T && xi(T.elementType) && (L = zr) : L = W0;
                    if (L && (L = L(t, T))) {
                        qr(C, L, l, N);
                        break t
                    }
                    ct && ct(t, O, T),
                    t === "focusout" && T && O.type === "number" && T.memoizedProps.value != null && Ri(O, "number", O.value)
                }
                switch (ct = T ? Ga(T) : window,
                t) {
                case "focusin":
                    (Nr(ct) || ct.contentEditable === "true") && (ca = ct,
                    Gi = T,
                    $a = null);
                    break;
                case "focusout":
                    $a = Gi = ca = null;
                    break;
                case "mousedown":
                    Ki = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ki = !1,
                    Kr(C, l, N);
                    break;
                case "selectionchange":
                    if (F0)
                        break;
                case "keydown":
                case "keyup":
                    Kr(C, l, N)
                }
                var Q;
                if (wi)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var I = "onCompositionStart";
                            break t;
                        case "compositionend":
                            I = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            I = "onCompositionUpdate";
                            break t
                        }
                        I = void 0
                    }
                else
                    ia ? Dr(t, l) && (I = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (I = "onCompositionStart");
                I && (Rr && l.locale !== "ko" && (ia || I !== "onCompositionStart" ? I === "onCompositionEnd" && ia && (Q = Er()) : (il = N,
                qi = "value"in il ? il.value : il.textContent,
                ia = !0)),
                ct = Gu(T, I),
                0 < ct.length && (I = new Ar(I,t,null,l,N),
                C.push({
                    event: I,
                    listeners: ct
                }),
                Q ? I.data = Q : (Q = _r(l),
                Q !== null && (I.data = Q)))),
                (Q = G0 ? K0(t, l) : X0(t, l)) && (I = Gu(T, "onBeforeInput"),
                0 < I.length && (ct = new Ar("onBeforeInput","beforeinput",null,l,N),
                C.push({
                    event: ct,
                    listeners: I
                }),
                ct.data = Q)),
                zm(C, t, T, l, N)
            }
            hd(C, e)
        })
    }
    function Un(t, e, l) {
        return {
            instance: t,
            listener: e,
            currentTarget: l
        }
    }
    function Gu(t, e) {
        for (var l = e + "Capture", a = []; t !== null; ) {
            var n = t
              , u = n.stateNode;
            if (n = n.tag,
            n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ka(t, l),
            n != null && a.unshift(Un(t, n, u)),
            n = Ka(t, e),
            n != null && a.push(Un(t, n, u))),
            t.tag === 3)
                return a;
            t = t.return
        }
        return []
    }
    function Na(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function yd(t, e, l, a, n) {
        for (var u = e._reactName, r = []; l !== null && l !== a; ) {
            var o = l
              , m = o.alternate
              , T = o.stateNode;
            if (o = o.tag,
            m !== null && m === a)
                break;
            o !== 5 && o !== 26 && o !== 27 || T === null || (m = T,
            n ? (T = Ka(l, u),
            T != null && r.unshift(Un(l, T, m))) : n || (T = Ka(l, u),
            T != null && r.push(Un(l, T, m)))),
            l = l.return
        }
        r.length !== 0 && t.push({
            event: e,
            listeners: r
        })
    }
    var wm = /\r\n?/g
      , Bm = /\u0000|\uFFFD/g;
    function vd(t) {
        return (typeof t == "string" ? t : "" + t).replace(wm, `
`).replace(Bm, "")
    }
    function pd(t, e) {
        return e = vd(e),
        vd(t) === e
    }
    function Ku() {}
    function Et(t, e, l, a, n, u) {
        switch (l) {
        case "children":
            typeof a == "string" ? e === "body" || e === "textarea" && a === "" || aa(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && aa(t, "" + a);
            break;
        case "className":
            Jn(t, "class", a);
            break;
        case "tabIndex":
            Jn(t, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Jn(t, l, a);
            break;
        case "style":
            gr(t, a, u);
            break;
        case "data":
            if (e !== "object") {
                Jn(t, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (e !== "a" || l !== "href")) {
                t.removeAttribute(l);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(l);
                break
            }
            a = $n("" + a),
            t.setAttribute(l, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (l === "formAction" ? (e !== "input" && Et(t, e, "name", n.name, n, null),
                Et(t, e, "formEncType", n.formEncType, n, null),
                Et(t, e, "formMethod", n.formMethod, n, null),
                Et(t, e, "formTarget", n.formTarget, n, null)) : (Et(t, e, "encType", n.encType, n, null),
                Et(t, e, "method", n.method, n, null),
                Et(t, e, "target", n.target, n, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(l);
                break
            }
            a = $n("" + a),
            t.setAttribute(l, a);
            break;
        case "onClick":
            a != null && (t.onclick = Ku);
            break;
        case "onScroll":
            a != null && rt("scroll", t);
            break;
        case "onScrollEnd":
            a != null && rt("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(f(61));
                if (l = a.__html,
                l != null) {
                    if (n.children != null)
                        throw Error(f(60));
                    t.innerHTML = l
                }
            }
            break;
        case "multiple":
            t.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            t.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            l = $n("" + a),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
            break;
        case "capture":
        case "download":
            a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
            break;
        case "popover":
            rt("beforetoggle", t),
            rt("toggle", t),
            Qn(t, "popover", a);
            break;
        case "xlinkActuate":
            Ke(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            Ke(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            Ke(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            Ke(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            Ke(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            Ke(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            Ke(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            Ke(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            Ke(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            Qn(t, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = m0.get(l) || l,
            Qn(t, l, a))
        }
    }
    function df(t, e, l, a, n, u) {
        switch (l) {
        case "style":
            gr(t, a, u);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(f(61));
                if (l = a.__html,
                l != null) {
                    if (n.children != null)
                        throw Error(f(60));
                    t.innerHTML = l
                }
            }
            break;
        case "children":
            typeof a == "string" ? aa(t, a) : (typeof a == "number" || typeof a == "bigint") && aa(t, "" + a);
            break;
        case "onScroll":
            a != null && rt("scroll", t);
            break;
        case "onScrollEnd":
            a != null && rt("scrollend", t);
            break;
        case "onClick":
            a != null && (t.onclick = Ku);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!cr.hasOwnProperty(l))
                t: {
                    if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"),
                    e = l.slice(2, n ? l.length - 7 : void 0),
                    u = t[ne] || null,
                    u = u != null ? u[l] : null,
                    typeof u == "function" && t.removeEventListener(e, u, n),
                    typeof a == "function")) {
                        typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)),
                        t.addEventListener(e, a, n);
                        break t
                    }
                    l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : Qn(t, l, a)
                }
        }
    }
    function Ft(t, e, l) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            rt("error", t),
            rt("load", t);
            var a = !1, n = !1, u;
            for (u in l)
                if (l.hasOwnProperty(u)) {
                    var r = l[u];
                    if (r != null)
                        switch (u) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            n = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(f(137, e));
                        default:
                            Et(t, e, u, r, l, null)
                        }
                }
            n && Et(t, e, "srcSet", l.srcSet, l, null),
            a && Et(t, e, "src", l.src, l, null);
            return;
        case "input":
            rt("invalid", t);
            var o = u = r = n = null
              , m = null
              , T = null;
            for (a in l)
                if (l.hasOwnProperty(a)) {
                    var N = l[a];
                    if (N != null)
                        switch (a) {
                        case "name":
                            n = N;
                            break;
                        case "type":
                            r = N;
                            break;
                        case "checked":
                            m = N;
                            break;
                        case "defaultChecked":
                            T = N;
                            break;
                        case "value":
                            u = N;
                            break;
                        case "defaultValue":
                            o = N;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (N != null)
                                throw Error(f(137, e));
                            break;
                        default:
                            Et(t, e, a, N, l, null)
                        }
                }
            mr(t, u, o, m, T, r, n, !1),
            Wn(t);
            return;
        case "select":
            rt("invalid", t),
            a = r = u = null;
            for (n in l)
                if (l.hasOwnProperty(n) && (o = l[n],
                o != null))
                    switch (n) {
                    case "value":
                        u = o;
                        break;
                    case "defaultValue":
                        r = o;
                        break;
                    case "multiple":
                        a = o;
                    default:
                        Et(t, e, n, o, l, null)
                    }
            e = u,
            l = r,
            t.multiple = !!a,
            e != null ? la(t, !!a, e, !1) : l != null && la(t, !!a, l, !0);
            return;
        case "textarea":
            rt("invalid", t),
            u = n = a = null;
            for (r in l)
                if (l.hasOwnProperty(r) && (o = l[r],
                o != null))
                    switch (r) {
                    case "value":
                        a = o;
                        break;
                    case "defaultValue":
                        n = o;
                        break;
                    case "children":
                        u = o;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (o != null)
                            throw Error(f(91));
                        break;
                    default:
                        Et(t, e, r, o, l, null)
                    }
            vr(t, a, n, u),
            Wn(t);
            return;
        case "option":
            for (m in l)
                if (l.hasOwnProperty(m) && (a = l[m],
                a != null))
                    switch (m) {
                    case "selected":
                        t.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        Et(t, e, m, a, l, null)
                    }
            return;
        case "dialog":
            rt("beforetoggle", t),
            rt("toggle", t),
            rt("cancel", t),
            rt("close", t);
            break;
        case "iframe":
        case "object":
            rt("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < An.length; a++)
                rt(An[a], t);
            break;
        case "image":
            rt("error", t),
            rt("load", t);
            break;
        case "details":
            rt("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            rt("error", t),
            rt("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (T in l)
                if (l.hasOwnProperty(T) && (a = l[T],
                a != null))
                    switch (T) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(f(137, e));
                    default:
                        Et(t, e, T, a, l, null)
                    }
            return;
        default:
            if (xi(e)) {
                for (N in l)
                    l.hasOwnProperty(N) && (a = l[N],
                    a !== void 0 && df(t, e, N, a, l, void 0));
                return
            }
        }
        for (o in l)
            l.hasOwnProperty(o) && (a = l[o],
            a != null && Et(t, e, o, a, l, null))
    }
    function Vm(t, e, l, a) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var n = null
              , u = null
              , r = null
              , o = null
              , m = null
              , T = null
              , N = null;
            for (A in l) {
                var C = l[A];
                if (l.hasOwnProperty(A) && C != null)
                    switch (A) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        m = C;
                    default:
                        a.hasOwnProperty(A) || Et(t, e, A, null, a, C)
                    }
            }
            for (var O in a) {
                var A = a[O];
                if (C = l[O],
                a.hasOwnProperty(O) && (A != null || C != null))
                    switch (O) {
                    case "type":
                        u = A;
                        break;
                    case "name":
                        n = A;
                        break;
                    case "checked":
                        T = A;
                        break;
                    case "defaultChecked":
                        N = A;
                        break;
                    case "value":
                        r = A;
                        break;
                    case "defaultValue":
                        o = A;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (A != null)
                            throw Error(f(137, e));
                        break;
                    default:
                        A !== C && Et(t, e, O, A, a, C)
                    }
            }
            Ui(t, r, o, m, T, N, u, n);
            return;
        case "select":
            A = r = o = O = null;
            for (u in l)
                if (m = l[u],
                l.hasOwnProperty(u) && m != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        A = m;
                    default:
                        a.hasOwnProperty(u) || Et(t, e, u, null, a, m)
                    }
            for (n in a)
                if (u = a[n],
                m = l[n],
                a.hasOwnProperty(n) && (u != null || m != null))
                    switch (n) {
                    case "value":
                        O = u;
                        break;
                    case "defaultValue":
                        o = u;
                        break;
                    case "multiple":
                        r = u;
                    default:
                        u !== m && Et(t, e, n, u, a, m)
                    }
            e = o,
            l = r,
            a = A,
            O != null ? la(t, !!l, O, !1) : !!a != !!l && (e != null ? la(t, !!l, e, !0) : la(t, !!l, l ? [] : "", !1));
            return;
        case "textarea":
            A = O = null;
            for (o in l)
                if (n = l[o],
                l.hasOwnProperty(o) && n != null && !a.hasOwnProperty(o))
                    switch (o) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Et(t, e, o, null, a, n)
                    }
            for (r in a)
                if (n = a[r],
                u = l[r],
                a.hasOwnProperty(r) && (n != null || u != null))
                    switch (r) {
                    case "value":
                        O = n;
                        break;
                    case "defaultValue":
                        A = n;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (n != null)
                            throw Error(f(91));
                        break;
                    default:
                        n !== u && Et(t, e, r, n, a, u)
                    }
            yr(t, O, A);
            return;
        case "option":
            for (var tt in l)
                if (O = l[tt],
                l.hasOwnProperty(tt) && O != null && !a.hasOwnProperty(tt))
                    switch (tt) {
                    case "selected":
                        t.selected = !1;
                        break;
                    default:
                        Et(t, e, tt, null, a, O)
                    }
            for (m in a)
                if (O = a[m],
                A = l[m],
                a.hasOwnProperty(m) && O !== A && (O != null || A != null))
                    switch (m) {
                    case "selected":
                        t.selected = O && typeof O != "function" && typeof O != "symbol";
                        break;
                    default:
                        Et(t, e, m, O, a, A)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var F in l)
                O = l[F],
                l.hasOwnProperty(F) && O != null && !a.hasOwnProperty(F) && Et(t, e, F, null, a, O);
            for (T in a)
                if (O = a[T],
                A = l[T],
                a.hasOwnProperty(T) && O !== A && (O != null || A != null))
                    switch (T) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (O != null)
                            throw Error(f(137, e));
                        break;
                    default:
                        Et(t, e, T, O, a, A)
                    }
            return;
        default:
            if (xi(e)) {
                for (var Tt in l)
                    O = l[Tt],
                    l.hasOwnProperty(Tt) && O !== void 0 && !a.hasOwnProperty(Tt) && df(t, e, Tt, void 0, a, O);
                for (N in a)
                    O = a[N],
                    A = l[N],
                    !a.hasOwnProperty(N) || O === A || O === void 0 && A === void 0 || df(t, e, N, O, a, A);
                return
            }
        }
        for (var b in l)
            O = l[b],
            l.hasOwnProperty(b) && O != null && !a.hasOwnProperty(b) && Et(t, e, b, null, a, O);
        for (C in a)
            O = a[C],
            A = l[C],
            !a.hasOwnProperty(C) || O === A || O == null && A == null || Et(t, e, C, O, a, A)
    }
    var hf = null
      , mf = null;
    function Xu(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function gd(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Sd(t, e) {
        if (t === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && e === "foreignObject" ? 0 : t
    }
    function yf(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var vf = null;
    function Ym() {
        var t = window.event;
        return t && t.type === "popstate" ? t === vf ? !1 : (vf = t,
        !0) : (vf = null,
        !1)
    }
    var bd = typeof setTimeout == "function" ? setTimeout : void 0
      , Gm = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Ed = typeof Promise == "function" ? Promise : void 0
      , Km = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ed < "u" ? function(t) {
        return Ed.resolve(null).then(t).catch(Xm)
    }
    : bd;
    function Xm(t) {
        setTimeout(function() {
            throw t
        })
    }
    function Tl(t) {
        return t === "head"
    }
    function Td(t, e) {
        var l = e
          , a = 0
          , n = 0;
        do {
            var u = l.nextSibling;
            if (t.removeChild(l),
            u && u.nodeType === 8)
                if (l = u.data,
                l === "/$") {
                    if (0 < a && 8 > a) {
                        l = a;
                        var r = t.ownerDocument;
                        if (l & 1 && Rn(r.documentElement),
                        l & 2 && Rn(r.body),
                        l & 4)
                            for (l = r.head,
                            Rn(l),
                            r = l.firstChild; r; ) {
                                var o = r.nextSibling
                                  , m = r.nodeName;
                                r[Ya] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && r.rel.toLowerCase() === "stylesheet" || l.removeChild(r),
                                r = o
                            }
                    }
                    if (n === 0) {
                        t.removeChild(u),
                        Cn(e);
                        return
                    }
                    n--
                } else
                    l === "$" || l === "$?" || l === "$!" ? n++ : a = l.charCodeAt(0) - 48;
            else
                a = 0;
            l = u
        } while (l);
        Cn(e)
    }
    function pf(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var l = e;
            switch (e = e.nextSibling,
            l.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                pf(l),
                Ei(l);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (l.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(l)
        }
    }
    function Zm(t, e, l, a) {
        for (; t.nodeType === 1; ) {
            var n = l;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (a) {
                if (!t[Ya])
                    switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (u = t.getAttribute("rel"),
                        u === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (u = t.getAttribute("src"),
                        (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (e === "input" && t.type === "hidden") {
                var u = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && t.getAttribute("name") === u)
                    return t
            } else
                return t;
            if (t = qe(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function Lm(t, e, l) {
        if (e === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = qe(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function gf(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
    }
    function Qm(t, e) {
        var l = t.ownerDocument;
        if (t.data !== "$?" || l.readyState === "complete")
            e();
        else {
            var a = function() {
                e(),
                l.removeEventListener("DOMContentLoaded", a)
            };
            l.addEventListener("DOMContentLoaded", a),
            t._reactRetry = a
        }
    }
    function qe(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = t.data,
                e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
                    break;
                if (e === "/$")
                    return null
            }
        }
        return t
    }
    var Sf = null;
    function Od(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var l = t.data;
                if (l === "$" || l === "$!" || l === "$?") {
                    if (e === 0)
                        return t;
                    e--
                } else
                    l === "/$" && e++
            }
            t = t.previousSibling
        }
        return null
    }
    function Ad(t, e, l) {
        switch (e = Xu(l),
        t) {
        case "html":
            if (t = e.documentElement,
            !t)
                throw Error(f(452));
            return t;
        case "head":
            if (t = e.head,
            !t)
                throw Error(f(453));
            return t;
        case "body":
            if (t = e.body,
            !t)
                throw Error(f(454));
            return t;
        default:
            throw Error(f(451))
        }
    }
    function Rn(t) {
        for (var e = t.attributes; e.length; )
            t.removeAttributeNode(e[0]);
        Ei(t)
    }
    var De = new Map
      , Ud = new Set;
    function Zu(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var ll = M.d;
    M.d = {
        f: Jm,
        r: Wm,
        D: km,
        C: $m,
        L: Fm,
        m: Pm,
        X: ty,
        S: Im,
        M: ey
    };
    function Jm() {
        var t = ll.f()
          , e = Hu();
        return t || e
    }
    function Wm(t) {
        var e = Pl(t);
        e !== null && e.tag === 5 && e.type === "form" ? Zs(e) : ll.r(t)
    }
    var qa = typeof document > "u" ? null : document;
    function Rd(t, e, l) {
        var a = qa;
        if (a && typeof e == "string" && e) {
            var n = Te(e);
            n = 'link[rel="' + t + '"][href="' + n + '"]',
            typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
            Ud.has(n) || (Ud.add(n),
            t = {
                rel: t,
                crossOrigin: l,
                href: e
            },
            a.querySelector(n) === null && (e = a.createElement("link"),
            Ft(e, "link", t),
            Lt(e),
            a.head.appendChild(e)))
        }
    }
    function km(t) {
        ll.D(t),
        Rd("dns-prefetch", t, null)
    }
    function $m(t, e) {
        ll.C(t, e),
        Rd("preconnect", t, e)
    }
    function Fm(t, e, l) {
        ll.L(t, e, l);
        var a = qa;
        if (a && t && e) {
            var n = 'link[rel="preload"][as="' + Te(e) + '"]';
            e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Te(l.imageSrcSet) + '"]',
            typeof l.imageSizes == "string" && (n += '[imagesizes="' + Te(l.imageSizes) + '"]')) : n += '[href="' + Te(t) + '"]';
            var u = n;
            switch (e) {
            case "style":
                u = za(t);
                break;
            case "script":
                u = Ca(t)
            }
            De.has(u) || (t = U({
                rel: "preload",
                href: e === "image" && l && l.imageSrcSet ? void 0 : t,
                as: e
            }, l),
            De.set(u, t),
            a.querySelector(n) !== null || e === "style" && a.querySelector(xn(u)) || e === "script" && a.querySelector(Mn(u)) || (e = a.createElement("link"),
            Ft(e, "link", t),
            Lt(e),
            a.head.appendChild(e)))
        }
    }
    function Pm(t, e) {
        ll.m(t, e);
        var l = qa;
        if (l && t) {
            var a = e && typeof e.as == "string" ? e.as : "script"
              , n = 'link[rel="modulepreload"][as="' + Te(a) + '"][href="' + Te(t) + '"]'
              , u = n;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = Ca(t)
            }
            if (!De.has(u) && (t = U({
                rel: "modulepreload",
                href: t
            }, e),
            De.set(u, t),
            l.querySelector(n) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (l.querySelector(Mn(u)))
                        return
                }
                a = l.createElement("link"),
                Ft(a, "link", t),
                Lt(a),
                l.head.appendChild(a)
            }
        }
    }
    function Im(t, e, l) {
        ll.S(t, e, l);
        var a = qa;
        if (a && t) {
            var n = Il(a).hoistableStyles
              , u = za(t);
            e = e || "default";
            var r = n.get(u);
            if (!r) {
                var o = {
                    loading: 0,
                    preload: null
                };
                if (r = a.querySelector(xn(u)))
                    o.loading = 5;
                else {
                    t = U({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, l),
                    (l = De.get(u)) && bf(t, l);
                    var m = r = a.createElement("link");
                    Lt(m),
                    Ft(m, "link", t),
                    m._p = new Promise(function(T, N) {
                        m.onload = T,
                        m.onerror = N
                    }
                    ),
                    m.addEventListener("load", function() {
                        o.loading |= 1
                    }),
                    m.addEventListener("error", function() {
                        o.loading |= 2
                    }),
                    o.loading |= 4,
                    Lu(r, e, a)
                }
                r = {
                    type: "stylesheet",
                    instance: r,
                    count: 1,
                    state: o
                },
                n.set(u, r)
            }
        }
    }
    function ty(t, e) {
        ll.X(t, e);
        var l = qa;
        if (l && t) {
            var a = Il(l).hoistableScripts
              , n = Ca(t)
              , u = a.get(n);
            u || (u = l.querySelector(Mn(n)),
            u || (t = U({
                src: t,
                async: !0
            }, e),
            (e = De.get(n)) && Ef(t, e),
            u = l.createElement("script"),
            Lt(u),
            Ft(u, "link", t),
            l.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(n, u))
        }
    }
    function ey(t, e) {
        ll.M(t, e);
        var l = qa;
        if (l && t) {
            var a = Il(l).hoistableScripts
              , n = Ca(t)
              , u = a.get(n);
            u || (u = l.querySelector(Mn(n)),
            u || (t = U({
                src: t,
                async: !0,
                type: "module"
            }, e),
            (e = De.get(n)) && Ef(t, e),
            u = l.createElement("script"),
            Lt(u),
            Ft(u, "link", t),
            l.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(n, u))
        }
    }
    function xd(t, e, l, a) {
        var n = (n = $.current) ? Zu(n) : null;
        if (!n)
            throw Error(f(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof l.precedence == "string" && typeof l.href == "string" ? (e = za(l.href),
            l = Il(n).hoistableStyles,
            a = l.get(e),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            l.set(e, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                t = za(l.href);
                var u = Il(n).hoistableStyles
                  , r = u.get(t);
                if (r || (n = n.ownerDocument || n,
                r = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                u.set(t, r),
                (u = n.querySelector(xn(t))) && !u._p && (r.instance = u,
                r.state.loading = 5),
                De.has(t) || (l = {
                    rel: "preload",
                    as: "style",
                    href: l.href,
                    crossOrigin: l.crossOrigin,
                    integrity: l.integrity,
                    media: l.media,
                    hrefLang: l.hrefLang,
                    referrerPolicy: l.referrerPolicy
                },
                De.set(t, l),
                u || ly(n, t, l, r.state))),
                e && a === null)
                    throw Error(f(528, ""));
                return r
            }
            if (e && a !== null)
                throw Error(f(529, ""));
            return null;
        case "script":
            return e = l.async,
            l = l.src,
            typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ca(l),
            l = Il(n).hoistableScripts,
            a = l.get(e),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            l.set(e, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(f(444, t))
        }
    }
    function za(t) {
        return 'href="' + Te(t) + '"'
    }
    function xn(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function Md(t) {
        return U({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function ly(t, e, l, a) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"),
        a.preload = e,
        e.addEventListener("load", function() {
            return a.loading |= 1
        }),
        e.addEventListener("error", function() {
            return a.loading |= 2
        }),
        Ft(e, "link", l),
        Lt(e),
        t.head.appendChild(e))
    }
    function Ca(t) {
        return '[src="' + Te(t) + '"]'
    }
    function Mn(t) {
        return "script[async]" + t
    }
    function Dd(t, e, l) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var a = t.querySelector('style[data-href~="' + Te(l.href) + '"]');
                if (a)
                    return e.instance = a,
                    Lt(a),
                    a;
                var n = U({}, l, {
                    "data-href": l.href,
                    "data-precedence": l.precedence,
                    href: null,
                    precedence: null
                });
                return a = (t.ownerDocument || t).createElement("style"),
                Lt(a),
                Ft(a, "style", n),
                Lu(a, l.precedence, t),
                e.instance = a;
            case "stylesheet":
                n = za(l.href);
                var u = t.querySelector(xn(n));
                if (u)
                    return e.state.loading |= 4,
                    e.instance = u,
                    Lt(u),
                    u;
                a = Md(l),
                (n = De.get(n)) && bf(a, n),
                u = (t.ownerDocument || t).createElement("link"),
                Lt(u);
                var r = u;
                return r._p = new Promise(function(o, m) {
                    r.onload = o,
                    r.onerror = m
                }
                ),
                Ft(u, "link", a),
                e.state.loading |= 4,
                Lu(u, l.precedence, t),
                e.instance = u;
            case "script":
                return u = Ca(l.src),
                (n = t.querySelector(Mn(u))) ? (e.instance = n,
                Lt(n),
                n) : (a = l,
                (n = De.get(u)) && (a = U({}, l),
                Ef(a, n)),
                t = t.ownerDocument || t,
                n = t.createElement("script"),
                Lt(n),
                Ft(n, "link", a),
                t.head.appendChild(n),
                e.instance = n);
            case "void":
                return null;
            default:
                throw Error(f(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance,
            e.state.loading |= 4,
            Lu(a, l.precedence, t));
        return e.instance
    }
    function Lu(t, e, l) {
        for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, r = 0; r < a.length; r++) {
            var o = a[r];
            if (o.dataset.precedence === e)
                u = o;
            else if (u !== n)
                break
        }
        u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l,
        e.insertBefore(t, e.firstChild))
    }
    function bf(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title)
    }
    function Ef(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity)
    }
    var Qu = null;
    function _d(t, e, l) {
        if (Qu === null) {
            var a = new Map
              , n = Qu = new Map;
            n.set(l, a)
        } else
            n = Qu,
            a = n.get(l),
            a || (a = new Map,
            n.set(l, a));
        if (a.has(t))
            return a;
        for (a.set(t, null),
        l = l.getElementsByTagName(t),
        n = 0; n < l.length; n++) {
            var u = l[n];
            if (!(u[Ya] || u[It] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var r = u.getAttribute(e) || "";
                r = t + r;
                var o = a.get(r);
                o ? o.push(u) : a.set(r, [u])
            }
        }
        return a
    }
    function Nd(t, e, l) {
        t = t.ownerDocument || t,
        t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null)
    }
    function ay(t, e, l) {
        if (l === 1 || e.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            switch (e.rel) {
            case "stylesheet":
                return t = e.disabled,
                typeof e.precedence == "string" && t == null;
            default:
                return !0
            }
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function qd(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    var Dn = null;
    function ny() {}
    function uy(t, e, l) {
        if (Dn === null)
            throw Error(f(475));
        var a = Dn;
        if (e.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (e.state.loading & 4) === 0) {
            if (e.instance === null) {
                var n = za(l.href)
                  , u = t.querySelector(xn(n));
                if (u) {
                    t = u._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++,
                    a = Ju.bind(a),
                    t.then(a, a)),
                    e.state.loading |= 4,
                    e.instance = u,
                    Lt(u);
                    return
                }
                u = t.ownerDocument || t,
                l = Md(l),
                (n = De.get(n)) && bf(l, n),
                u = u.createElement("link"),
                Lt(u);
                var r = u;
                r._p = new Promise(function(o, m) {
                    r.onload = o,
                    r.onerror = m
                }
                ),
                Ft(u, "link", l),
                e.instance = u
            }
            a.stylesheets === null && (a.stylesheets = new Map),
            a.stylesheets.set(e, t),
            (t = e.state.preload) && (e.state.loading & 3) === 0 && (a.count++,
            e = Ju.bind(a),
            t.addEventListener("load", e),
            t.addEventListener("error", e))
        }
    }
    function iy() {
        if (Dn === null)
            throw Error(f(475));
        var t = Dn;
        return t.stylesheets && t.count === 0 && Tf(t, t.stylesheets),
        0 < t.count ? function(e) {
            var l = setTimeout(function() {
                if (t.stylesheets && Tf(t, t.stylesheets),
                t.unsuspend) {
                    var a = t.unsuspend;
                    t.unsuspend = null,
                    a()
                }
            }, 6e4);
            return t.unsuspend = e,
            function() {
                t.unsuspend = null,
                clearTimeout(l)
            }
        }
        : null
    }
    function Ju() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                Tf(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var Wu = null;
    function Tf(t, e) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        Wu = new Map,
        e.forEach(cy, t),
        Wu = null,
        Ju.call(t))
    }
    function cy(t, e) {
        if (!(e.state.loading & 4)) {
            var l = Wu.get(t);
            if (l)
                var a = l.get(null);
            else {
                l = new Map,
                Wu.set(t, l);
                for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
                    var r = n[u];
                    (r.nodeName === "LINK" || r.getAttribute("media") !== "not all") && (l.set(r.dataset.precedence, r),
                    a = r)
                }
                a && l.set(null, a)
            }
            n = e.instance,
            r = n.getAttribute("data-precedence"),
            u = l.get(r) || a,
            u === a && l.set(null, n),
            l.set(r, n),
            this.count++,
            a = Ju.bind(this),
            n.addEventListener("load", a),
            n.addEventListener("error", a),
            u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(n, t.firstChild)),
            e.state.loading |= 4
        }
    }
    var _n = {
        $$typeof: at,
        Provider: null,
        Consumer: null,
        _currentValue: q,
        _currentValue2: q,
        _threadCount: 0
    };
    function fy(t, e, l, a, n, u, r, o) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = pi(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = pi(0),
        this.hiddenUpdates = pi(null),
        this.identifierPrefix = a,
        this.onUncaughtError = n,
        this.onCaughtError = u,
        this.onRecoverableError = r,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = o,
        this.incompleteTransitions = new Map
    }
    function zd(t, e, l, a, n, u, r, o, m, T, N, C) {
        return t = new fy(t,e,l,r,o,m,T,C),
        e = 1,
        u === !0 && (e |= 24),
        u = me(3, null, null, e),
        t.current = u,
        u.stateNode = t,
        e = lc(),
        e.refCount++,
        t.pooledCache = e,
        e.refCount++,
        u.memoizedState = {
            element: a,
            isDehydrated: l,
            cache: e
        },
        ic(u),
        t
    }
    function Cd(t) {
        return t ? (t = oa,
        t) : oa
    }
    function Hd(t, e, l, a, n, u) {
        n = Cd(n),
        a.context === null ? a.context = n : a.pendingContext = n,
        a = rl(e),
        a.payload = {
            element: l
        },
        u = u === void 0 ? null : u,
        u !== null && (a.callback = u),
        l = sl(t, a, e),
        l !== null && (Se(l, t, e),
        un(l, t, e))
    }
    function jd(t, e) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var l = t.retryLane;
            t.retryLane = l !== 0 && l < e ? l : e
        }
    }
    function Of(t, e) {
        jd(t, e),
        (t = t.alternate) && jd(t, e)
    }
    function wd(t) {
        if (t.tag === 13) {
            var e = sa(t, 67108864);
            e !== null && Se(e, t, 67108864),
            Of(t, 67108864)
        }
    }
    var ku = !0;
    function ry(t, e, l, a) {
        var n = g.T;
        g.T = null;
        var u = M.p;
        try {
            M.p = 2,
            Af(t, e, l, a)
        } finally {
            M.p = u,
            g.T = n
        }
    }
    function sy(t, e, l, a) {
        var n = g.T;
        g.T = null;
        var u = M.p;
        try {
            M.p = 8,
            Af(t, e, l, a)
        } finally {
            M.p = u,
            g.T = n
        }
    }
    function Af(t, e, l, a) {
        if (ku) {
            var n = Uf(a);
            if (n === null)
                of(t, e, a, $u, l),
                Vd(t, a);
            else if (dy(n, t, e, l, a))
                a.stopPropagation();
            else if (Vd(t, a),
            e & 4 && -1 < oy.indexOf(t)) {
                for (; n !== null; ) {
                    var u = Pl(n);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var r = Ml(u.pendingLanes);
                                if (r !== 0) {
                                    var o = u;
                                    for (o.pendingLanes |= 2,
                                    o.entangledLanes |= 2; r; ) {
                                        var m = 1 << 31 - de(r);
                                        o.entanglements[1] |= m,
                                        r &= ~m
                                    }
                                    Ve(u),
                                    (pt & 6) === 0 && (zu = Ce() + 500,
                                    On(0))
                                }
                            }
                            break;
                        case 13:
                            o = sa(u, 2),
                            o !== null && Se(o, u, 2),
                            Hu(),
                            Of(u, 2)
                        }
                    if (u = Uf(a),
                    u === null && of(t, e, a, $u, l),
                    u === n)
                        break;
                    n = u
                }
                n !== null && a.stopPropagation()
            } else
                of(t, e, a, null, l)
        }
    }
    function Uf(t) {
        return t = Di(t),
        Rf(t)
    }
    var $u = null;
    function Rf(t) {
        if ($u = null,
        t = Fl(t),
        t !== null) {
            var e = y(t);
            if (e === null)
                t = null;
            else {
                var l = e.tag;
                if (l === 13) {
                    if (t = v(e),
                    t !== null)
                        return t;
                    t = null
                } else if (l === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else
                    e !== t && (t = null)
            }
        }
        return $u = t,
        null
    }
    function Bd(t) {
        switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch ($h()) {
            case Ff:
                return 2;
            case Pf:
                return 8;
            case Kn:
            case Fh:
                return 32;
            case If:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var xf = !1
      , Ol = null
      , Al = null
      , Ul = null
      , Nn = new Map
      , qn = new Map
      , Rl = []
      , oy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Vd(t, e) {
        switch (t) {
        case "focusin":
        case "focusout":
            Ol = null;
            break;
        case "dragenter":
        case "dragleave":
            Al = null;
            break;
        case "mouseover":
        case "mouseout":
            Ul = null;
            break;
        case "pointerover":
        case "pointerout":
            Nn.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            qn.delete(e.pointerId)
        }
    }
    function zn(t, e, l, a, n, u) {
        return t === null || t.nativeEvent !== u ? (t = {
            blockedOn: e,
            domEventName: l,
            eventSystemFlags: a,
            nativeEvent: u,
            targetContainers: [n]
        },
        e !== null && (e = Pl(e),
        e !== null && wd(e)),
        t) : (t.eventSystemFlags |= a,
        e = t.targetContainers,
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t)
    }
    function dy(t, e, l, a, n) {
        switch (e) {
        case "focusin":
            return Ol = zn(Ol, t, e, l, a, n),
            !0;
        case "dragenter":
            return Al = zn(Al, t, e, l, a, n),
            !0;
        case "mouseover":
            return Ul = zn(Ul, t, e, l, a, n),
            !0;
        case "pointerover":
            var u = n.pointerId;
            return Nn.set(u, zn(Nn.get(u) || null, t, e, l, a, n)),
            !0;
        case "gotpointercapture":
            return u = n.pointerId,
            qn.set(u, zn(qn.get(u) || null, t, e, l, a, n)),
            !0
        }
        return !1
    }
    function Yd(t) {
        var e = Fl(t.target);
        if (e !== null) {
            var l = y(e);
            if (l !== null) {
                if (e = l.tag,
                e === 13) {
                    if (e = v(l),
                    e !== null) {
                        t.blockedOn = e,
                        u0(t.priority, function() {
                            if (l.tag === 13) {
                                var a = ge();
                                a = gi(a);
                                var n = sa(l, a);
                                n !== null && Se(n, l, a),
                                Of(l, a)
                            }
                        });
                        return
                    }
                } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function Fu(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var l = Uf(t.nativeEvent);
            if (l === null) {
                l = t.nativeEvent;
                var a = new l.constructor(l.type,l);
                Mi = a,
                l.target.dispatchEvent(a),
                Mi = null
            } else
                return e = Pl(l),
                e !== null && wd(e),
                t.blockedOn = l,
                !1;
            e.shift()
        }
        return !0
    }
    function Gd(t, e, l) {
        Fu(t) && l.delete(e)
    }
    function hy() {
        xf = !1,
        Ol !== null && Fu(Ol) && (Ol = null),
        Al !== null && Fu(Al) && (Al = null),
        Ul !== null && Fu(Ul) && (Ul = null),
        Nn.forEach(Gd),
        qn.forEach(Gd)
    }
    function Pu(t, e) {
        t.blockedOn === e && (t.blockedOn = null,
        xf || (xf = !0,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, hy)))
    }
    var Iu = null;
    function Kd(t) {
        Iu !== t && (Iu = t,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
            Iu === t && (Iu = null);
            for (var e = 0; e < t.length; e += 3) {
                var l = t[e]
                  , a = t[e + 1]
                  , n = t[e + 2];
                if (typeof a != "function") {
                    if (Rf(a || l) === null)
                        continue;
                    break
                }
                var u = Pl(l);
                u !== null && (t.splice(e, 3),
                e -= 3,
                Uc(u, {
                    pending: !0,
                    data: n,
                    method: l.method,
                    action: a
                }, a, n))
            }
        }))
    }
    function Cn(t) {
        function e(m) {
            return Pu(m, t)
        }
        Ol !== null && Pu(Ol, t),
        Al !== null && Pu(Al, t),
        Ul !== null && Pu(Ul, t),
        Nn.forEach(e),
        qn.forEach(e);
        for (var l = 0; l < Rl.length; l++) {
            var a = Rl[l];
            a.blockedOn === t && (a.blockedOn = null)
        }
        for (; 0 < Rl.length && (l = Rl[0],
        l.blockedOn === null); )
            Yd(l),
            l.blockedOn === null && Rl.shift();
        if (l = (t.ownerDocument || t).$$reactFormReplay,
        l != null)
            for (a = 0; a < l.length; a += 3) {
                var n = l[a]
                  , u = l[a + 1]
                  , r = n[ne] || null;
                if (typeof u == "function")
                    r || Kd(l);
                else if (r) {
                    var o = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (n = u,
                        r = u[ne] || null)
                            o = r.formAction;
                        else if (Rf(n) !== null)
                            continue
                    } else
                        o = r.action;
                    typeof o == "function" ? l[a + 1] = o : (l.splice(a, 3),
                    a -= 3),
                    Kd(l)
                }
            }
    }
    function Mf(t) {
        this._internalRoot = t
    }
    ti.prototype.render = Mf.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(f(409));
        var l = e.current
          , a = ge();
        Hd(l, a, t, e, null, null)
    }
    ,
    ti.prototype.unmount = Mf.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            Hd(t.current, 2, null, t, null, null),
            Hu(),
            e[$l] = null
        }
    }
    ;
    function ti(t) {
        this._internalRoot = t
    }
    ti.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = nr();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var l = 0; l < Rl.length && e !== 0 && e < Rl[l].priority; l++)
                ;
            Rl.splice(l, 0, t),
            l === 0 && Yd(t)
        }
    }
    ;
    var Xd = c.version;
    if (Xd !== "19.1.0")
        throw Error(f(527, Xd, "19.1.0"));
    M.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","),
            Error(f(268, t)));
        return t = _(e),
        t = t !== null ? S(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var my = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: g,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ei.isDisabled && ei.supportsFiber)
            try {
                wa = ei.inject(my),
                oe = ei
            } catch {}
    }
    return jn.createRoot = function(t, e) {
        if (!d(t))
            throw Error(f(299));
        var l = !1
          , a = ""
          , n = no
          , u = uo
          , r = io
          , o = null;
        return e != null && (e.unstable_strictMode === !0 && (l = !0),
        e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
        e.onCaughtError !== void 0 && (u = e.onCaughtError),
        e.onRecoverableError !== void 0 && (r = e.onRecoverableError),
        e.unstable_transitionCallbacks !== void 0 && (o = e.unstable_transitionCallbacks)),
        e = zd(t, 1, !1, null, null, l, a, n, u, r, o, null),
        t[$l] = e.current,
        sf(t),
        new Mf(e)
    }
    ,
    jn.hydrateRoot = function(t, e, l) {
        if (!d(t))
            throw Error(f(299));
        var a = !1
          , n = ""
          , u = no
          , r = uo
          , o = io
          , m = null
          , T = null;
        return l != null && (l.unstable_strictMode === !0 && (a = !0),
        l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
        l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
        l.onCaughtError !== void 0 && (r = l.onCaughtError),
        l.onRecoverableError !== void 0 && (o = l.onRecoverableError),
        l.unstable_transitionCallbacks !== void 0 && (m = l.unstable_transitionCallbacks),
        l.formState !== void 0 && (T = l.formState)),
        e = zd(t, 1, !0, e, l ?? null, a, n, u, r, o, m, T),
        e.context = Cd(null),
        l = e.current,
        a = ge(),
        a = gi(a),
        n = rl(a),
        n.callback = null,
        sl(l, n, a),
        l = a,
        e.current.lanes = l,
        Va(e, l),
        Ve(e),
        t[$l] = e.current,
        sf(t),
        new ti(e)
    }
    ,
    jn.version = "19.1.0",
    jn
}
var Id;
function Ay() {
    if (Id)
        return _f.exports;
    Id = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (c) {
                console.error(c)
            }
    }
    return i(),
    _f.exports = Oy(),
    _f.exports
}
var Uy = Ay(), li = {
    exports: {}
}, Ry = li.exports, th;
function xy() {
    return th || (th = 1,
    function(i, c) {
        (function(s, f) {
            i.exports = f()
        }
        )(Ry, function() {
            var s = 1e3
              , f = 6e4
              , d = 36e5
              , y = "millisecond"
              , v = "second"
              , R = "minute"
              , _ = "hour"
              , S = "day"
              , U = "week"
              , H = "month"
              , Y = "quarter"
              , P = "year"
              , V = "date"
              , X = "Invalid Date"
              , G = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
              , dt = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
              , st = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                ordinal: function(J) {
                    var B = ["th", "st", "nd", "rd"]
                      , g = J % 100;
                    return "[" + J + (B[(g - 20) % 10] || B[g] || B[0]) + "]"
                }
            }
              , at = function(J, B, g) {
                var M = String(J);
                return !M || M.length >= B ? J : "" + Array(B + 1 - M.length).join(g) + J
            }
              , At = {
                s: at,
                z: function(J) {
                    var B = -J.utcOffset()
                      , g = Math.abs(B)
                      , M = Math.floor(g / 60)
                      , q = g % 60;
                    return (B <= 0 ? "+" : "-") + at(M, 2, "0") + ":" + at(q, 2, "0")
                },
                m: function J(B, g) {
                    if (B.date() < g.date())
                        return -J(g, B);
                    var M = 12 * (g.year() - B.year()) + (g.month() - B.month())
                      , q = B.clone().add(M, H)
                      , K = g - q < 0
                      , h = B.clone().add(M + (K ? -1 : 1), H);
                    return +(-(M + (g - q) / (K ? q - h : h - q)) || 0)
                },
                a: function(J) {
                    return J < 0 ? Math.ceil(J) || 0 : Math.floor(J)
                },
                p: function(J) {
                    return {
                        M: H,
                        y: P,
                        w: U,
                        d: S,
                        D: V,
                        h: _,
                        m: R,
                        s: v,
                        ms: y,
                        Q: Y
                    }[J] || String(J || "").toLowerCase().replace(/s$/, "")
                },
                u: function(J) {
                    return J === void 0
                }
            }
              , W = "en"
              , ht = {};
            ht[W] = st;
            var Ut = "$isDayjsObject"
              , xt = function(J) {
                return J instanceof Mt || !(!J || !J[Ut])
            }
              , Bt = function J(B, g, M) {
                var q;
                if (!B)
                    return W;
                if (typeof B == "string") {
                    var K = B.toLowerCase();
                    ht[K] && (q = K),
                    g && (ht[K] = g,
                    q = K);
                    var h = B.split("-");
                    if (!q && h.length > 1)
                        return J(h[0])
                } else {
                    var D = B.name;
                    ht[D] = B,
                    q = D
                }
                return !M && q && (W = q),
                q || !M && W
            }
              , St = function(J, B) {
                if (xt(J))
                    return J.clone();
                var g = typeof B == "object" ? B : {};
                return g.date = J,
                g.args = arguments,
                new Mt(g)
            }
              , ut = At;
            ut.l = Bt,
            ut.i = xt,
            ut.w = function(J, B) {
                return St(J, {
                    locale: B.$L,
                    utc: B.$u,
                    x: B.$x,
                    $offset: B.$offset
                })
            }
            ;
            var Mt = function() {
                function J(g) {
                    this.$L = Bt(g.locale, null, !0),
                    this.parse(g),
                    this.$x = this.$x || g.x || {},
                    this[Ut] = !0
                }
                var B = J.prototype;
                return B.parse = function(g) {
                    this.$d = function(M) {
                        var q = M.date
                          , K = M.utc;
                        if (q === null)
                            return new Date(NaN);
                        if (ut.u(q))
                            return new Date;
                        if (q instanceof Date)
                            return new Date(q);
                        if (typeof q == "string" && !/Z$/i.test(q)) {
                            var h = q.match(G);
                            if (h) {
                                var D = h[2] - 1 || 0
                                  , w = (h[7] || "0").substring(0, 3);
                                return K ? new Date(Date.UTC(h[1], D, h[3] || 1, h[4] || 0, h[5] || 0, h[6] || 0, w)) : new Date(h[1],D,h[3] || 1,h[4] || 0,h[5] || 0,h[6] || 0,w)
                            }
                        }
                        return new Date(q)
                    }(g),
                    this.init()
                }
                ,
                B.init = function() {
                    var g = this.$d;
                    this.$y = g.getFullYear(),
                    this.$M = g.getMonth(),
                    this.$D = g.getDate(),
                    this.$W = g.getDay(),
                    this.$H = g.getHours(),
                    this.$m = g.getMinutes(),
                    this.$s = g.getSeconds(),
                    this.$ms = g.getMilliseconds()
                }
                ,
                B.$utils = function() {
                    return ut
                }
                ,
                B.isValid = function() {
                    return this.$d.toString() !== X
                }
                ,
                B.isSame = function(g, M) {
                    var q = St(g);
                    return this.startOf(M) <= q && q <= this.endOf(M)
                }
                ,
                B.isAfter = function(g, M) {
                    return St(g) < this.startOf(M)
                }
                ,
                B.isBefore = function(g, M) {
                    return this.endOf(M) < St(g)
                }
                ,
                B.$g = function(g, M, q) {
                    return ut.u(g) ? this[M] : this.set(q, g)
                }
                ,
                B.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }
                ,
                B.valueOf = function() {
                    return this.$d.getTime()
                }
                ,
                B.startOf = function(g, M) {
                    var q = this
                      , K = !!ut.u(M) || M
                      , h = ut.p(g)
                      , D = function(Pt, Zt) {
                        var se = ut.w(q.$u ? Date.UTC(q.$y, Zt, Pt) : new Date(q.$y,Zt,Pt), q);
                        return K ? se : se.endOf(S)
                    }
                      , w = function(Pt, Zt) {
                        return ut.w(q.toDate()[Pt].apply(q.toDate("s"), (K ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Zt)), q)
                    }
                      , j = this.$W
                      , Z = this.$M
                      , et = this.$D
                      , $ = "set" + (this.$u ? "UTC" : "");
                    switch (h) {
                    case P:
                        return K ? D(1, 0) : D(31, 11);
                    case H:
                        return K ? D(1, Z) : D(0, Z + 1);
                    case U:
                        var Ct = this.$locale().weekStart || 0
                          , vt = (j < Ct ? j + 7 : j) - Ct;
                        return D(K ? et - vt : et + (6 - vt), Z);
                    case S:
                    case V:
                        return w($ + "Hours", 0);
                    case _:
                        return w($ + "Minutes", 1);
                    case R:
                        return w($ + "Seconds", 2);
                    case v:
                        return w($ + "Milliseconds", 3);
                    default:
                        return this.clone()
                    }
                }
                ,
                B.endOf = function(g) {
                    return this.startOf(g, !1)
                }
                ,
                B.$set = function(g, M) {
                    var q, K = ut.p(g), h = "set" + (this.$u ? "UTC" : ""), D = (q = {},
                    q[S] = h + "Date",
                    q[V] = h + "Date",
                    q[H] = h + "Month",
                    q[P] = h + "FullYear",
                    q[_] = h + "Hours",
                    q[R] = h + "Minutes",
                    q[v] = h + "Seconds",
                    q[y] = h + "Milliseconds",
                    q)[K], w = K === S ? this.$D + (M - this.$W) : M;
                    if (K === H || K === P) {
                        var j = this.clone().set(V, 1);
                        j.$d[D](w),
                        j.init(),
                        this.$d = j.set(V, Math.min(this.$D, j.daysInMonth())).$d
                    } else
                        D && this.$d[D](w);
                    return this.init(),
                    this
                }
                ,
                B.set = function(g, M) {
                    return this.clone().$set(g, M)
                }
                ,
                B.get = function(g) {
                    return this[ut.p(g)]()
                }
                ,
                B.add = function(g, M) {
                    var q, K = this;
                    g = Number(g);
                    var h = ut.p(M)
                      , D = function(Z) {
                        var et = St(K);
                        return ut.w(et.date(et.date() + Math.round(Z * g)), K)
                    };
                    if (h === H)
                        return this.set(H, this.$M + g);
                    if (h === P)
                        return this.set(P, this.$y + g);
                    if (h === S)
                        return D(1);
                    if (h === U)
                        return D(7);
                    var w = (q = {},
                    q[R] = f,
                    q[_] = d,
                    q[v] = s,
                    q)[h] || 1
                      , j = this.$d.getTime() + g * w;
                    return ut.w(j, this)
                }
                ,
                B.subtract = function(g, M) {
                    return this.add(-1 * g, M)
                }
                ,
                B.format = function(g) {
                    var M = this
                      , q = this.$locale();
                    if (!this.isValid())
                        return q.invalidDate || X;
                    var K = g || "YYYY-MM-DDTHH:mm:ssZ"
                      , h = ut.z(this)
                      , D = this.$H
                      , w = this.$m
                      , j = this.$M
                      , Z = q.weekdays
                      , et = q.months
                      , $ = q.meridiem
                      , Ct = function(Zt, se, Ge, al) {
                        return Zt && (Zt[se] || Zt(M, K)) || Ge[se].slice(0, al)
                    }
                      , vt = function(Zt) {
                        return ut.s(D % 12 || 12, Zt, "0")
                    }
                      , Pt = $ || function(Zt, se, Ge) {
                        var al = Zt < 12 ? "AM" : "PM";
                        return Ge ? al.toLowerCase() : al
                    }
                    ;
                    return K.replace(dt, function(Zt, se) {
                        return se || function(Ge) {
                            switch (Ge) {
                            case "YY":
                                return String(M.$y).slice(-2);
                            case "YYYY":
                                return ut.s(M.$y, 4, "0");
                            case "M":
                                return j + 1;
                            case "MM":
                                return ut.s(j + 1, 2, "0");
                            case "MMM":
                                return Ct(q.monthsShort, j, et, 3);
                            case "MMMM":
                                return Ct(et, j);
                            case "D":
                                return M.$D;
                            case "DD":
                                return ut.s(M.$D, 2, "0");
                            case "d":
                                return String(M.$W);
                            case "dd":
                                return Ct(q.weekdaysMin, M.$W, Z, 2);
                            case "ddd":
                                return Ct(q.weekdaysShort, M.$W, Z, 3);
                            case "dddd":
                                return Z[M.$W];
                            case "H":
                                return String(D);
                            case "HH":
                                return ut.s(D, 2, "0");
                            case "h":
                                return vt(1);
                            case "hh":
                                return vt(2);
                            case "a":
                                return Pt(D, w, !0);
                            case "A":
                                return Pt(D, w, !1);
                            case "m":
                                return String(w);
                            case "mm":
                                return ut.s(w, 2, "0");
                            case "s":
                                return String(M.$s);
                            case "ss":
                                return ut.s(M.$s, 2, "0");
                            case "SSS":
                                return ut.s(M.$ms, 3, "0");
                            case "Z":
                                return h
                            }
                            return null
                        }(Zt) || h.replace(":", "")
                    })
                }
                ,
                B.utcOffset = function() {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }
                ,
                B.diff = function(g, M, q) {
                    var K, h = this, D = ut.p(M), w = St(g), j = (w.utcOffset() - this.utcOffset()) * f, Z = this - w, et = function() {
                        return ut.m(h, w)
                    };
                    switch (D) {
                    case P:
                        K = et() / 12;
                        break;
                    case H:
                        K = et();
                        break;
                    case Y:
                        K = et() / 3;
                        break;
                    case U:
                        K = (Z - j) / 6048e5;
                        break;
                    case S:
                        K = (Z - j) / 864e5;
                        break;
                    case _:
                        K = Z / d;
                        break;
                    case R:
                        K = Z / f;
                        break;
                    case v:
                        K = Z / s;
                        break;
                    default:
                        K = Z
                    }
                    return q ? K : ut.a(K)
                }
                ,
                B.daysInMonth = function() {
                    return this.endOf(H).$D
                }
                ,
                B.$locale = function() {
                    return ht[this.$L]
                }
                ,
                B.locale = function(g, M) {
                    if (!g)
                        return this.$L;
                    var q = this.clone()
                      , K = Bt(g, M, !0);
                    return K && (q.$L = K),
                    q
                }
                ,
                B.clone = function() {
                    return ut.w(this.$d, this)
                }
                ,
                B.toDate = function() {
                    return new Date(this.valueOf())
                }
                ,
                B.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }
                ,
                B.toISOString = function() {
                    return this.$d.toISOString()
                }
                ,
                B.toString = function() {
                    return this.$d.toUTCString()
                }
                ,
                J
            }()
              , Dt = Mt.prototype;
            return St.prototype = Dt,
            [["$ms", y], ["$s", v], ["$m", R], ["$H", _], ["$W", S], ["$M", H], ["$y", P], ["$D", V]].forEach(function(J) {
                Dt[J[1]] = function(B) {
                    return this.$g(B, J[0], J[1])
                }
            }),
            St.extend = function(J, B) {
                return J.$i || (J(B, Mt, St),
                J.$i = !0),
                St
            }
            ,
            St.locale = Bt,
            St.isDayjs = xt,
            St.unix = function(J) {
                return St(1e3 * J)
            }
            ,
            St.en = ht[W],
            St.Ls = ht,
            St.p = {},
            St
        })
    }(li)),
    li.exports
}
var My = xy();
const Dy = Qf(My);
var Xt = Jf();
const Jl = Qf(Xt)
  , _y = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3c!--%20Fundo%20verde%20do%20botão%20--%3e%3crect%20x='0'%20y='0'%20width='24'%20height='24'%20rx='4'%20fill='%2328a745'%20/%3e%3c!--%20Ícone%20de%20cadeado%20--%3e%3cg%20fill='white'%20transform='translate(4,%204)'%3e%3c!--%20Corpo%20do%20cadeado%20--%3e%3crect%20x='3'%20y='7'%20width='10'%20height='7'%20rx='1'%20/%3e%3c!--%20Arco%20do%20cadeado%20--%3e%3cpath%20d='M5,7%20L5,4.5%20C5,2.5%207,1%208,1%20C9,1%2011,2.5%2011,4.5%20L11,7'%20stroke='white'%20fill='none'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c/g%3e%3c/svg%3e";
var Hf, eh;
function Ny() {
    return eh || (eh = 1,
    Hf = function() {
        var i = document.getSelection();
        if (!i.rangeCount)
            return function() {}
            ;
        for (var c = document.activeElement, s = [], f = 0; f < i.rangeCount; f++)
            s.push(i.getRangeAt(f));
        switch (c.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
            c.blur();
            break;
        default:
            c = null;
            break
        }
        return i.removeAllRanges(),
        function() {
            i.type === "Caret" && i.removeAllRanges(),
            i.rangeCount || s.forEach(function(d) {
                i.addRange(d)
            }),
            c && c.focus()
        }
    }
    ),
    Hf
}
var jf, lh;
function qy() {
    if (lh)
        return jf;
    lh = 1;
    var i = Ny()
      , c = {
        "text/plain": "Text",
        "text/html": "Url",
        default: "Text"
    }
      , s = "Copy to clipboard: #{key}, Enter";
    function f(y) {
        var v = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
        return y.replace(/#{\s*key\s*}/g, v)
    }
    function d(y, v) {
        var R, _, S, U, H, Y, P = !1;
        v || (v = {}),
        R = v.debug || !1;
        try {
            S = i(),
            U = document.createRange(),
            H = document.getSelection(),
            Y = document.createElement("span"),
            Y.textContent = y,
            Y.ariaHidden = "true",
            Y.style.all = "unset",
            Y.style.position = "fixed",
            Y.style.top = 0,
            Y.style.clip = "rect(0, 0, 0, 0)",
            Y.style.whiteSpace = "pre",
            Y.style.webkitUserSelect = "text",
            Y.style.MozUserSelect = "text",
            Y.style.msUserSelect = "text",
            Y.style.userSelect = "text",
            Y.addEventListener("copy", function(X) {
                if (X.stopPropagation(),
                v.format)
                    if (X.preventDefault(),
                    typeof X.clipboardData > "u") {
                        R && console.warn("unable to use e.clipboardData"),
                        R && console.warn("trying IE specific stuff"),
                        window.clipboardData.clearData();
                        var G = c[v.format] || c.default;
                        window.clipboardData.setData(G, y)
                    } else
                        X.clipboardData.clearData(),
                        X.clipboardData.setData(v.format, y);
                v.onCopy && (X.preventDefault(),
                v.onCopy(X.clipboardData))
            }),
            document.body.appendChild(Y),
            U.selectNodeContents(Y),
            H.addRange(U);
            var V = document.execCommand("copy");
            if (!V)
                throw new Error("copy command was unsuccessful");
            P = !0
        } catch (X) {
            R && console.error("unable to copy using execCommand: ", X),
            R && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(v.format || "text", y),
                v.onCopy && v.onCopy(window.clipboardData),
                P = !0
            } catch (G) {
                R && console.error("unable to copy using clipboardData: ", G),
                R && console.error("falling back to prompt"),
                _ = f("message"in v ? v.message : s),
                window.prompt(_, y)
            }
        } finally {
            H && (typeof H.removeRange == "function" ? H.removeRange(U) : H.removeAllRanges()),
            Y && document.body.removeChild(Y),
            S()
        }
        return P
    }
    return jf = d,
    jf
}
var zy = qy();
const Cy = Qf(zy);
var Th = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , ah = Jl.createContext && Jl.createContext(Th)
  , Hy = ["attr", "size", "title"];
function jy(i, c) {
    if (i == null)
        return {};
    var s = wy(i, c), f, d;
    if (Object.getOwnPropertySymbols) {
        var y = Object.getOwnPropertySymbols(i);
        for (d = 0; d < y.length; d++)
            f = y[d],
            !(c.indexOf(f) >= 0) && Object.prototype.propertyIsEnumerable.call(i, f) && (s[f] = i[f])
    }
    return s
}
function wy(i, c) {
    if (i == null)
        return {};
    var s = {};
    for (var f in i)
        if (Object.prototype.hasOwnProperty.call(i, f)) {
            if (c.indexOf(f) >= 0)
                continue;
            s[f] = i[f]
        }
    return s
}
function ii() {
    return ii = Object.assign ? Object.assign.bind() : function(i) {
        for (var c = 1; c < arguments.length; c++) {
            var s = arguments[c];
            for (var f in s)
                Object.prototype.hasOwnProperty.call(s, f) && (i[f] = s[f])
        }
        return i
    }
    ,
    ii.apply(this, arguments)
}
function nh(i, c) {
    var s = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(i);
        c && (f = f.filter(function(d) {
            return Object.getOwnPropertyDescriptor(i, d).enumerable
        })),
        s.push.apply(s, f)
    }
    return s
}
function ci(i) {
    for (var c = 1; c < arguments.length; c++) {
        var s = arguments[c] != null ? arguments[c] : {};
        c % 2 ? nh(Object(s), !0).forEach(function(f) {
            By(i, f, s[f])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : nh(Object(s)).forEach(function(f) {
            Object.defineProperty(i, f, Object.getOwnPropertyDescriptor(s, f))
        })
    }
    return i
}
function By(i, c, s) {
    return c = Vy(c),
    c in i ? Object.defineProperty(i, c, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[c] = s,
    i
}
function Vy(i) {
    var c = Yy(i, "string");
    return typeof c == "symbol" ? c : c + ""
}
function Yy(i, c) {
    if (typeof i != "object" || !i)
        return i;
    var s = i[Symbol.toPrimitive];
    if (s !== void 0) {
        var f = s.call(i, c);
        if (typeof f != "object")
            return f;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (c === "string" ? String : Number)(i)
}
function Oh(i) {
    return i && i.map( (c, s) => Jl.createElement(c.tag, ci({
        key: s
    }, c.attr), Oh(c.child)))
}
function Vn(i) {
    return c => Jl.createElement(Gy, ii({
        attr: ci({}, i.attr)
    }, c), Oh(i.child))
}
function Gy(i) {
    var c = s => {
        var {attr: f, size: d, title: y} = i, v = jy(i, Hy), R = d || s.size || "1em", _;
        return s.className && (_ = s.className),
        i.className && (_ = (_ ? _ + " " : "") + i.className),
        Jl.createElement("svg", ii({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, s.attr, f, v, {
            className: _,
            style: ci(ci({
                color: i.color || s.color
            }, s.style), i.style),
            height: R,
            width: R,
            xmlns: "http://www.w3.org/2000/svg"
        }), y && Jl.createElement("title", null, y), i.children)
    }
    ;
    return ah !== void 0 ? Jl.createElement(ah.Consumer, null, s => c(s)) : c(Th)
}
function Ky(i) {
    return Vn({
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "g",
            attr: {
                id: "Clock_2"
            },
            child: [{
                tag: "g",
                attr: {},
                child: [{
                    tag: "path",
                    attr: {
                        d: "M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z"
                    },
                    child: []
                }, {
                    tag: "path",
                    attr: {
                        d: "M18,12.5H12a.429.429,0,0,1-.34-.14c-.01,0-.01-.01-.02-.02A.429.429,0,0,1,11.5,12V6a.5.5,0,0,1,1,0v5.5H18A.5.5,0,0,1,18,12.5Z"
                    },
                    child: []
                }]
            }]
        }]
    })(i)
}
function Xy(i) {
    return Vn({
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69v-60.47zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4-22.53-1.81-43.59-6.31-63.71-13.62zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44 5.87-26.08 27.5-45.88 54.32-49.28v57.72zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55 19.54 2.17 38.09 6.23 55.81 12.66v48.89z"
            },
            child: []
        }]
    })(i)
}
function Zy(i) {
    return Vn({
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
            },
            child: []
        }]
    })(i)
}
function uh(i) {
    return Vn({
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0V0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
            },
            child: []
        }]
    })(i)
}
function Ly(i) {
    return Vn({
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0V0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 17H7V4h10v14zm-3 3h-4v-1h4v1z"
            },
            child: []
        }]
    })(i)
}
const Qy = ({pixCode: i="00020126870014br.gov.bcb.pix2565pix.primepag.com.br/qr/v3/at/3982bb3d-e590-417a-b8c8-ecc4abd9af4c5204000053039865802BR5923RUSHPAY PAGAMENTOS LTDA6014SAO PAULO DE O62070503***630496DA", qrCode: c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADkCAYAAACIV4iNAAAAAklEQVR4AewaftIAAAxESURBVO3BQW4ky5LAQDKh+1+Z00tfBZCokibeh5vZP6y1rvCw1rrGw1rrGg9rrWs8rLWu8bDWusbDWusaD2utazysta7xsNa6xsNa6xoPa61rPKy1rvGw1rrGw1rrGg9rrWv88CGVv1QxqbxRMal8omJSmSpOVKaKE5WpYlKZKiaVqWJS+UsVn1CZKiaVv1TxiYe11jUe1lrXeFhrXeOHL6v4JpU3KiaVk4pJZaqYVCaVqWJS+UsVk8onKt5QmSreUPlNFd+k8k0Pa61rPKy1rvGw1rrGD79M5Y2KNyomlaliUpkqpopPqEwVJyonKlPFicpJxaQyVbyhMlVMKlPFGxWTyjepvFHxmx7WWtd4WGtd42GtdY0f/uNUpopJZaqYVKaKSWWqmFROVE4qTiomlW+qmFT+Syr+lzysta7xsNa6xsNa6xo//MdVvKEyVUwqU8WkMlWcqEwVk8pfUpkqflPFpDJVvFHxv+xhrXWNh7XWNR7WWtf44ZdV/CWVqWJSmVSmim+qOKk4UZkq3lCZKiaVk4o3VE4qJpWpYlKZKr6p4iYPa61rPKy1rvGw1rrGD1+m8pdUpopJZaqYVE5UpopJZaqYVKaKSWWqeENlqvhExaQyVUwqU8Wk8ptUpooTlZs9rLWu8bDWusbDWusaP3yo4n9ZxaRyojJV/KaKb1KZKiaVNyomlW+qOKn4L3lYa13jYa11jYe11jXsHz6gMlVMKicVk8obFZPKJyo+oXJS8YbKN1WcqLxRMamcVEwqU8WJyknFpDJVnKhMFZPKScUnHtZa13hYa13jYa11jR++TGWqmFTeqJhUTireUHlDZap4Q2WqmFTeqJhUPlExqZyoTBUnKlPFpDJVnFRMKicqb6j8pYe11jUe1lrXeFhrXeOHy6l8k8qJyhsqv6liUplUpopJ5URlqpgqTlQmlTdUflPFicpJxaQyVXzTw1rrGg9rrWs8rLWu8cOHKk5UpopJ5aRiUplU3qh4Q2WqmFSmikllqphUPlExqXxC5Y2KE5WTiknlpGJS+UTFpPKGylTxiYe11jUe1lrXeFhrXeOHD6lMFScqU8WkMqlMFScqJyonFScqJypvVJyofKLipOINlUnljYpJ5Q2V/08Vk8o3Pay1rvGw1rrGw1rrGj98mcpU8UbFicpUcVIxqUwVk8pUMalMFScqk8pU8UbFJ1ROKiaVk4pJZar4pooTlROVqWKqOFGZKr7pYa11jYe11jUe1lrXsH/4RSrfVDGpTBWTyhsVJyonFZPKGxUnKm9UnKicVEwqb1S8oTJVTCpTxYnKGxX/nx7WWtd4WGtd42GtdY0fPqQyVXxTxaQyVUwqn1CZKt5Q+U0Vn1CZKiaVSWWqOFF5Q2WqmFR+U8WkMlWcqEwVn3hYa13jYa11jYe11jV++FDFJypOVKaKT1RMKp+omFSmik+ofKJiqnij4kTlROWk4qRiUvlExaTyhspU8U0Pa61rPKy1rvGw1rqG/cMfUpkq/pLKVDGpnFRMKlPFpDJVfEJlqphUTipOVD5R8YbKScUnVKaKSWWqmFTeqPjEw1rrGg9rrWs8rLWu8cMvU5kqTlTeqDhR+S9TmSpOKiaVE5Wp4kTlEypTxSdUPlHxRsVvelhrXeNhrXWNh7XWNewfPqByUvGbVKaKE5VvqnhD5Y2KN1ROKk5UpopPqEwVb6hMFZPKGxWTylTxhspU8YmHtdY1HtZa13hYa13jhy+rmFTeqJhUpooTlaliqphU3qiYVE4qpopvUjmpmFQ+ofJGxTepvFExqUwVb6j8poe11jUe1lrXeFhrXeOHD1WcVEwqU8WkMlWcVHxTxaQyqZxUfELljYpJ5RMVJxWTyhsqU8VJxaRyUvGGyk0e1lrXeFhrXeNhrXWNHz6kMlWcVEwqJyqfqJhUfpPKGxVTxaRyonKiMlWcqJxU/CaVqeINlb9U8U0Pa61rPKy1rvGw1rqG/cMXqUwVk8pJxRsqU8WJylQxqZxUTCp/qeINlaniZiqfqHhD5ZsqPvGw1rrGw1rrGg9rrWv8cDmVqeINlaliUpkqflPFGyonKlPFicpUMamcVEwqU8UbKr9JZao4qZhUpopJ5Zse1lrXeFhrXeNhrXWNHz6kMlVMKlPFpHJS8YmKSeVEZaqYVN6oOFGZKt6o+ITKGypvqEwVJxVvqJxUfKLiLz2sta7xsNa6xsNa6xr2D1+kMlWcqPymihOVqWJSmSq+SeUvVZyoTBWTylQxqZxUTCpTxaQyVUwq/58qvulhrXWNh7XWNR7WWtewf/hDKicVJyonFScqb1RMKicV36QyVUwqU8WJylQxqZxUnKhMFZPKVHGiclLxhspJxYnKScUnHtZa13hYa13jYa11jR8+pDJVTConFScqU8WkMqlMFW9UnFScqHxTxUnFicpUMamcVEwqJxUnFScqU8UbKt+k8pce1lrXeFhrXeNhrXUN+4cvUpkqTlROKiaVqWJSeaNiUpkqJpWp4g2VqeITKlPFicpUcaIyVUwqn6iYVKaKE5WTihOVNyp+08Na6xoPa61rPKy1rmH/8AGVqWJSmSreUJkq3lD5TRVvqEwVk8pUMam8UTGpnFRMKlPFicpUcaIyVZyonFR8QmWq+EsPa61rPKy1rvGw1rrGDx+qmFSmiknlpGKqmFSmiknlpOIvqUwVk8pUMamcVEwqJxWTyhsqU8VUMalMFVPFpHJScaIyVUwqU8UnVKaKTzysta7xsNa6xsNa6xo/fEjlm1ROKk4qJpVJ5aRiUpkqTlSmim+qeEPlpOKkYlL5JpWpYlJ5o+Kk4qRiUpkqpopvelhrXeNhrXWNh7XWNewfvkjlpGJSOamYVE4qJpWp4g2VqWJS+U0Vk8pUMalMFZPKJyp+k8pUcTOVqeITD2utazysta7xsNa6hv3DL1K5WcWkMlVMKlPFicpUMalMFScqJxVvqEwVk8onKr5JZaqYVN6omFSmir/0sNa6xsNa6xoPa61r/PBlKp+oeENlqnhDZar4hMpUMalMFZPKJ1Smit9UcaIyVUwqb1RMKicVk8qkMlVMKm9UfOJhrXWNh7XWNR7WWtewf/iAylQxqUwVb6hMFW+ofKJiUpkqJpWTikllqvgmlaniROWk4jepnFRMKlPFpPKJir/0sNa6xsNa6xoPa61r/PChikllqjhROal4Q+WNiknlDZWpYlKZVN5QmSpuonJS8U0qU8VJxaRyUjGpnFR808Na6xoPa61rPKy1rmH/8EUqU8UbKicVJyqfqJhUporfpPJGxaQyVUwq31QxqUwVn1A5qZhUpoo3VKaKSeWk4hMPa61rPKy1rvGw1rrGD79M5aRiqjhRmSqmijdUJpU3VKaKN1SmijdUpopJ5Y2Kb1I5qTipmFS+SWWq+P/0sNa6xsNa6xoPa61r/PAhlTcq3lCZKj6hMlVMKicqJypTxSdU3lB5o+JE5aTipOINlZOKSeVE5RMqJxXf9LDWusbDWusaD2uta9g//IepfKLiEypTxYnKJyreUHmj4hMqU8WkMlVMKp+oeENlqjhROan4xMNa6xoPa61rPKy1rvHDh1T+UsVJxaRyojJVTCpTxRsqb1RMKicqU8UbFZ9QeaPijYoTlROVqeINlaliUvmmh7XWNR7WWtd4WGtd44cvq/gmlU9UTCpTxaTyCZWTim+qeKNiUnmj4qTiDZWp4psqPlHxlx7WWtd4WGtd42GtdY0ffpnKGxVvVEwqJxWTyjdVnKhMFW+ofFPFGyonKlPFJ1TeUPkve1hrXeNhrXWNh7XWNX74j1N5Q+Wk4kTlm1ROKk5UpopPqPwmlanipGJSmSpOVKaKSeUmD2utazysta7xsNa6xg//YypOVKaKSWWqOKmYVE4q3lD5hMpU8UbFicpUMamcqJxU/KaKSWWqmFSmim96WGtd42GtdY2HtdY17B8+oDJVfJPKVHGi8psq3lCZKiaVk4pJ5Y2KE5Wp4hMqv6niEypTxaTyRsU3Pay1rvGw1rrGw1rrGj98mcpfUpkq3lB5Q+Wk4kTlpGJSmSomlaliUvmEyicqTlQ+oTJVTConKicVJypTxSce1lrXeFhrXeNhrXUN+4e11hUe1lrXeFhrXeNhrXWNh7XWNR7WWtd4WGtd42GtdY2HtdY1HtZa13hYa13jYa11jYe11jUe1lrXeFhrXeNhrXWN/wNkTKMtzo/hYwAAAABJRU5ErkJggg==", expiresAt: s, value: f}) => {
    const [d,y] = Xt.useState(!1)
      , v = async () => {
        try {
            Cy(i),
            y(!0),
            setTimeout( () => {
                y(!1)
            }
            , 2e3)
        } catch (R) {
            console.error("Failed to copy text: ", R)
        }
    }
    ;
    return k.jsxs("div", {
        className: "w-full",
        children: [k.jsxs("div", {
            className: "flex flex-col items-center mb-6",
            children: [k.jsxs("p", {
                className: "text-center text-primary font-medium text-xl flex items-center gap-x-2",
                children: [k.jsx(Ly, {}), k.jsx("span", {
                    children: "Escaneie o QRCode abaixo"
                })]
            }), k.jsx("img", {
                src: c,
                alt: "Qr code",
                className: "my-5"
            }), k.jsxs("p", {
                className: "text-center text-primary font-medium text-xl flex items-center gap-x-2",
                children: [k.jsx(uh, {}), "Ou copie o código PIX"]
            })]
        }), k.jsx("div", {
            children: k.jsxs("div", {
                className: "max-w-xs mx-auto bg-white rounded-lg",
                children: [k.jsx("div", {
                    className: "text-gray-700 text-sm font-mono whitespace-nowrap overflow-hidden text-ellipsis bg-gray-100 p-2 mb-3 rounded-md",
                    children: i
                }), k.jsx("button", {
                    onClick: v,
                    className: "w-full bg-primary hover:bg-primary-600 text-white rounded-md py-2 flex items-center justify-center transition-colors mb-4 text-sm cursor-pointer",
                    children: d ? "Copiado!" : k.jsxs(k.Fragment, {
                        children: [k.jsx(uh, {
                            size: 14,
                            className: "mr-2"
                        }), "Copiar"]
                    })
                }), k.jsxs("div", {
                    className: "flex flex-col space-y-3 mt-8 bg-gray-50 p-4 rounded-md",
                    children: [k.jsxs("div", {
                        className: "flex border-l-4 border-primary pl-3",
                        children: [k.jsxs("div", {
                            className: "flex items-center",
                            children: [k.jsx(Xy, {
                                size: 18,
                                className: "text-primary mr-2"
                            }), k.jsx("span", {
                                className: "text-primary font-medium",
                                children: "Valor:"
                            })]
                        }), k.jsx("div", {
                            className: "ml-auto font-medium text-gray-600",
                            children: f == null ? void 0 : f.toLocaleString("pt-BR", {
                                currency: "BRL",
                                style: "currency"
                            })
                        })]
                    }), k.jsxs("div", {
                        className: "flex border-l-4 border-primary pl-3",
                        children: [k.jsxs("div", {
                            className: "flex items-center",
                            children: [k.jsx(Ky, {
                                size: 18,
                                className: "text-primary mr-2"
                            }), k.jsx("span", {
                                className: "text-primary font-medium",
                                children: "Válido até:"
                            })]
                        }), k.jsx("div", {
                            className: "ml-auto font-medium text-gray-600",
                            children: s
                        })]
                    })]
                })]
            })
        })]
    })
}
  , Jy = () => k.jsxs("svg", {
    className: "w-12 h-12 text-primary-50 animate-spin",
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    children: [k.jsx("path", {
        d: "M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z",
        stroke: "currentColor",
        "stroke-width": "5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), k.jsx("path", {
        d: "M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762",
        stroke: "currentColor",
        "stroke-width": "5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        className: "text-primary"
    })]
});
function Ah(i, c) {
    return function() {
        return i.apply(c, arguments)
    }
}
const {toString: Wy} = Object.prototype
  , {getPrototypeOf: Wf} = Object
  , si = (i => c => {
    const s = Wy.call(c);
    return i[s] || (i[s] = s.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , ze = i => (i = i.toLowerCase(),
c => si(c) === i)
  , oi = i => c => typeof c === i
  , {isArray: Ha} = Array
  , Bn = oi("undefined");
function ky(i) {
    return i !== null && !Bn(i) && i.constructor !== null && !Bn(i.constructor) && be(i.constructor.isBuffer) && i.constructor.isBuffer(i)
}
const Uh = ze("ArrayBuffer");
function $y(i) {
    let c;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? c = ArrayBuffer.isView(i) : c = i && i.buffer && Uh(i.buffer),
    c
}
const Fy = oi("string")
  , be = oi("function")
  , Rh = oi("number")
  , di = i => i !== null && typeof i == "object"
  , Py = i => i === !0 || i === !1
  , ai = i => {
    if (si(i) !== "object")
        return !1;
    const c = Wf(i);
    return (c === null || c === Object.prototype || Object.getPrototypeOf(c) === null) && !(Symbol.toStringTag in i) && !(Symbol.iterator in i)
}
  , Iy = ze("Date")
  , t1 = ze("File")
  , e1 = ze("Blob")
  , l1 = ze("FileList")
  , a1 = i => di(i) && be(i.pipe)
  , n1 = i => {
    let c;
    return i && (typeof FormData == "function" && i instanceof FormData || be(i.append) && ((c = si(i)) === "formdata" || c === "object" && be(i.toString) && i.toString() === "[object FormData]"))
}
  , u1 = ze("URLSearchParams")
  , [i1,c1,f1,r1] = ["ReadableStream", "Request", "Response", "Headers"].map(ze)
  , s1 = i => i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Yn(i, c, {allOwnKeys: s=!1}={}) {
    if (i === null || typeof i > "u")
        return;
    let f, d;
    if (typeof i != "object" && (i = [i]),
    Ha(i))
        for (f = 0,
        d = i.length; f < d; f++)
            c.call(null, i[f], f, i);
    else {
        const y = s ? Object.getOwnPropertyNames(i) : Object.keys(i)
          , v = y.length;
        let R;
        for (f = 0; f < v; f++)
            R = y[f],
            c.call(null, i[R], R, i)
    }
}
function xh(i, c) {
    c = c.toLowerCase();
    const s = Object.keys(i);
    let f = s.length, d;
    for (; f-- > 0; )
        if (d = s[f],
        c === d.toLowerCase())
            return d;
    return null
}
const Ql = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , Mh = i => !Bn(i) && i !== Ql;
function Yf() {
    const {caseless: i} = Mh(this) && this || {}
      , c = {}
      , s = (f, d) => {
        const y = i && xh(c, d) || d;
        ai(c[y]) && ai(f) ? c[y] = Yf(c[y], f) : ai(f) ? c[y] = Yf({}, f) : Ha(f) ? c[y] = f.slice() : c[y] = f
    }
    ;
    for (let f = 0, d = arguments.length; f < d; f++)
        arguments[f] && Yn(arguments[f], s);
    return c
}
const o1 = (i, c, s, {allOwnKeys: f}={}) => (Yn(c, (d, y) => {
    s && be(d) ? i[y] = Ah(d, s) : i[y] = d
}
, {
    allOwnKeys: f
}),
i)
  , d1 = i => (i.charCodeAt(0) === 65279 && (i = i.slice(1)),
i)
  , h1 = (i, c, s, f) => {
    i.prototype = Object.create(c.prototype, f),
    i.prototype.constructor = i,
    Object.defineProperty(i, "super", {
        value: c.prototype
    }),
    s && Object.assign(i.prototype, s)
}
  , m1 = (i, c, s, f) => {
    let d, y, v;
    const R = {};
    if (c = c || {},
    i == null)
        return c;
    do {
        for (d = Object.getOwnPropertyNames(i),
        y = d.length; y-- > 0; )
            v = d[y],
            (!f || f(v, i, c)) && !R[v] && (c[v] = i[v],
            R[v] = !0);
        i = s !== !1 && Wf(i)
    } while (i && (!s || s(i, c)) && i !== Object.prototype);
    return c
}
  , y1 = (i, c, s) => {
    i = String(i),
    (s === void 0 || s > i.length) && (s = i.length),
    s -= c.length;
    const f = i.indexOf(c, s);
    return f !== -1 && f === s
}
  , v1 = i => {
    if (!i)
        return null;
    if (Ha(i))
        return i;
    let c = i.length;
    if (!Rh(c))
        return null;
    const s = new Array(c);
    for (; c-- > 0; )
        s[c] = i[c];
    return s
}
  , p1 = (i => c => i && c instanceof i)(typeof Uint8Array < "u" && Wf(Uint8Array))
  , g1 = (i, c) => {
    const f = (i && i[Symbol.iterator]).call(i);
    let d;
    for (; (d = f.next()) && !d.done; ) {
        const y = d.value;
        c.call(i, y[0], y[1])
    }
}
  , S1 = (i, c) => {
    let s;
    const f = [];
    for (; (s = i.exec(c)) !== null; )
        f.push(s);
    return f
}
  , b1 = ze("HTMLFormElement")
  , E1 = i => i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(s, f, d) {
    return f.toUpperCase() + d
})
  , ih = ( ({hasOwnProperty: i}) => (c, s) => i.call(c, s))(Object.prototype)
  , T1 = ze("RegExp")
  , Dh = (i, c) => {
    const s = Object.getOwnPropertyDescriptors(i)
      , f = {};
    Yn(s, (d, y) => {
        let v;
        (v = c(d, y, i)) !== !1 && (f[y] = v || d)
    }
    ),
    Object.defineProperties(i, f)
}
  , O1 = i => {
    Dh(i, (c, s) => {
        if (be(i) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
            return !1;
        const f = i[s];
        if (be(f)) {
            if (c.enumerable = !1,
            "writable"in c) {
                c.writable = !1;
                return
            }
            c.set || (c.set = () => {
                throw Error("Can not rewrite read-only method '" + s + "'")
            }
            )
        }
    }
    )
}
  , A1 = (i, c) => {
    const s = {}
      , f = d => {
        d.forEach(y => {
            s[y] = !0
        }
        )
    }
    ;
    return Ha(i) ? f(i) : f(String(i).split(c)),
    s
}
  , U1 = () => {}
  , R1 = (i, c) => i != null && Number.isFinite(i = +i) ? i : c;
function x1(i) {
    return !!(i && be(i.append) && i[Symbol.toStringTag] === "FormData" && i[Symbol.iterator])
}
const M1 = i => {
    const c = new Array(10)
      , s = (f, d) => {
        if (di(f)) {
            if (c.indexOf(f) >= 0)
                return;
            if (!("toJSON"in f)) {
                c[d] = f;
                const y = Ha(f) ? [] : {};
                return Yn(f, (v, R) => {
                    const _ = s(v, d + 1);
                    !Bn(_) && (y[R] = _)
                }
                ),
                c[d] = void 0,
                y
            }
        }
        return f
    }
    ;
    return s(i, 0)
}
  , D1 = ze("AsyncFunction")
  , _1 = i => i && (di(i) || be(i)) && be(i.then) && be(i.catch)
  , _h = ( (i, c) => i ? setImmediate : c ? ( (s, f) => (Ql.addEventListener("message", ({source: d, data: y}) => {
    d === Ql && y === s && f.length && f.shift()()
}
, !1),
d => {
    f.push(d),
    Ql.postMessage(s, "*")
}
))(`axios@${Math.random()}`, []) : s => setTimeout(s))(typeof setImmediate == "function", be(Ql.postMessage))
  , N1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ql) : typeof process < "u" && process.nextTick || _h
  , x = {
    isArray: Ha,
    isArrayBuffer: Uh,
    isBuffer: ky,
    isFormData: n1,
    isArrayBufferView: $y,
    isString: Fy,
    isNumber: Rh,
    isBoolean: Py,
    isObject: di,
    isPlainObject: ai,
    isReadableStream: i1,
    isRequest: c1,
    isResponse: f1,
    isHeaders: r1,
    isUndefined: Bn,
    isDate: Iy,
    isFile: t1,
    isBlob: e1,
    isRegExp: T1,
    isFunction: be,
    isStream: a1,
    isURLSearchParams: u1,
    isTypedArray: p1,
    isFileList: l1,
    forEach: Yn,
    merge: Yf,
    extend: o1,
    trim: s1,
    stripBOM: d1,
    inherits: h1,
    toFlatObject: m1,
    kindOf: si,
    kindOfTest: ze,
    endsWith: y1,
    toArray: v1,
    forEachEntry: g1,
    matchAll: S1,
    isHTMLForm: b1,
    hasOwnProperty: ih,
    hasOwnProp: ih,
    reduceDescriptors: Dh,
    freezeMethods: O1,
    toObjectSet: A1,
    toCamelCase: E1,
    noop: U1,
    toFiniteNumber: R1,
    findKey: xh,
    global: Ql,
    isContextDefined: Mh,
    isSpecCompliantForm: x1,
    toJSONObject: M1,
    isAsyncFn: D1,
    isThenable: _1,
    setImmediate: _h,
    asap: N1
};
function lt(i, c, s, f, d) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = i,
    this.name = "AxiosError",
    c && (this.code = c),
    s && (this.config = s),
    f && (this.request = f),
    d && (this.response = d,
    this.status = d.status ? d.status : null)
}
x.inherits(lt, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: x.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const Nh = lt.prototype
  , qh = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(i => {
    qh[i] = {
        value: i
    }
}
);
Object.defineProperties(lt, qh);
Object.defineProperty(Nh, "isAxiosError", {
    value: !0
});
lt.from = (i, c, s, f, d, y) => {
    const v = Object.create(Nh);
    return x.toFlatObject(i, v, function(_) {
        return _ !== Error.prototype
    }, R => R !== "isAxiosError"),
    lt.call(v, i.message, c, s, f, d),
    v.cause = i,
    v.name = i.name,
    y && Object.assign(v, y),
    v
}
;
const q1 = null;
function Gf(i) {
    return x.isPlainObject(i) || x.isArray(i)
}
function zh(i) {
    return x.endsWith(i, "[]") ? i.slice(0, -2) : i
}
function ch(i, c, s) {
    return i ? i.concat(c).map(function(d, y) {
        return d = zh(d),
        !s && y ? "[" + d + "]" : d
    }).join(s ? "." : "") : c
}
function z1(i) {
    return x.isArray(i) && !i.some(Gf)
}
const C1 = x.toFlatObject(x, {}, null, function(c) {
    return /^is[A-Z]/.test(c)
});
function hi(i, c, s) {
    if (!x.isObject(i))
        throw new TypeError("target must be an object");
    c = c || new FormData,
    s = x.toFlatObject(s, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(X, G) {
        return !x.isUndefined(G[X])
    });
    const f = s.metaTokens
      , d = s.visitor || U
      , y = s.dots
      , v = s.indexes
      , _ = (s.Blob || typeof Blob < "u" && Blob) && x.isSpecCompliantForm(c);
    if (!x.isFunction(d))
        throw new TypeError("visitor must be a function");
    function S(V) {
        if (V === null)
            return "";
        if (x.isDate(V))
            return V.toISOString();
        if (!_ && x.isBlob(V))
            throw new lt("Blob is not supported. Use a Buffer instead.");
        return x.isArrayBuffer(V) || x.isTypedArray(V) ? _ && typeof Blob == "function" ? new Blob([V]) : Buffer.from(V) : V
    }
    function U(V, X, G) {
        let dt = V;
        if (V && !G && typeof V == "object") {
            if (x.endsWith(X, "{}"))
                X = f ? X : X.slice(0, -2),
                V = JSON.stringify(V);
            else if (x.isArray(V) && z1(V) || (x.isFileList(V) || x.endsWith(X, "[]")) && (dt = x.toArray(V)))
                return X = zh(X),
                dt.forEach(function(at, At) {
                    !(x.isUndefined(at) || at === null) && c.append(v === !0 ? ch([X], At, y) : v === null ? X : X + "[]", S(at))
                }),
                !1
        }
        return Gf(V) ? !0 : (c.append(ch(G, X, y), S(V)),
        !1)
    }
    const H = []
      , Y = Object.assign(C1, {
        defaultVisitor: U,
        convertValue: S,
        isVisitable: Gf
    });
    function P(V, X) {
        if (!x.isUndefined(V)) {
            if (H.indexOf(V) !== -1)
                throw Error("Circular reference detected in " + X.join("."));
            H.push(V),
            x.forEach(V, function(dt, st) {
                (!(x.isUndefined(dt) || dt === null) && d.call(c, dt, x.isString(st) ? st.trim() : st, X, Y)) === !0 && P(dt, X ? X.concat(st) : [st])
            }),
            H.pop()
        }
    }
    if (!x.isObject(i))
        throw new TypeError("data must be an object");
    return P(i),
    c
}
function fh(i) {
    const c = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function(f) {
        return c[f]
    })
}
function kf(i, c) {
    this._pairs = [],
    i && hi(i, this, c)
}
const Ch = kf.prototype;
Ch.append = function(c, s) {
    this._pairs.push([c, s])
}
;
Ch.toString = function(c) {
    const s = c ? function(f) {
        return c.call(this, f, fh)
    }
    : fh;
    return this._pairs.map(function(d) {
        return s(d[0]) + "=" + s(d[1])
    }, "").join("&")
}
;
function H1(i) {
    return encodeURIComponent(i).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function Hh(i, c, s) {
    if (!c)
        return i;
    const f = s && s.encode || H1;
    x.isFunction(s) && (s = {
        serialize: s
    });
    const d = s && s.serialize;
    let y;
    if (d ? y = d(c, s) : y = x.isURLSearchParams(c) ? c.toString() : new kf(c,s).toString(f),
    y) {
        const v = i.indexOf("#");
        v !== -1 && (i = i.slice(0, v)),
        i += (i.indexOf("?") === -1 ? "?" : "&") + y
    }
    return i
}
class rh {
    constructor() {
        this.handlers = []
    }
    use(c, s, f) {
        return this.handlers.push({
            fulfilled: c,
            rejected: s,
            synchronous: f ? f.synchronous : !1,
            runWhen: f ? f.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(c) {
        this.handlers[c] && (this.handlers[c] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(c) {
        x.forEach(this.handlers, function(f) {
            f !== null && c(f)
        })
    }
}
const jh = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , j1 = typeof URLSearchParams < "u" ? URLSearchParams : kf
  , w1 = typeof FormData < "u" ? FormData : null
  , B1 = typeof Blob < "u" ? Blob : null
  , V1 = {
    isBrowser: !0,
    classes: {
        URLSearchParams: j1,
        FormData: w1,
        Blob: B1
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , $f = typeof window < "u" && typeof document < "u"
  , Kf = typeof navigator == "object" && navigator || void 0
  , Y1 = $f && (!Kf || ["ReactNative", "NativeScript", "NS"].indexOf(Kf.product) < 0)
  , G1 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , K1 = $f && window.location.href || "http://localhost"
  , X1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: $f,
    hasStandardBrowserEnv: Y1,
    hasStandardBrowserWebWorkerEnv: G1,
    navigator: Kf,
    origin: K1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , le = {
    ...X1,
    ...V1
};
function Z1(i, c) {
    return hi(i, new le.classes.URLSearchParams, Object.assign({
        visitor: function(s, f, d, y) {
            return le.isNode && x.isBuffer(s) ? (this.append(f, s.toString("base64")),
            !1) : y.defaultVisitor.apply(this, arguments)
        }
    }, c))
}
function L1(i) {
    return x.matchAll(/\w+|\[(\w*)]/g, i).map(c => c[0] === "[]" ? "" : c[1] || c[0])
}
function Q1(i) {
    const c = {}
      , s = Object.keys(i);
    let f;
    const d = s.length;
    let y;
    for (f = 0; f < d; f++)
        y = s[f],
        c[y] = i[y];
    return c
}
function wh(i) {
    function c(s, f, d, y) {
        let v = s[y++];
        if (v === "__proto__")
            return !0;
        const R = Number.isFinite(+v)
          , _ = y >= s.length;
        return v = !v && x.isArray(d) ? d.length : v,
        _ ? (x.hasOwnProp(d, v) ? d[v] = [d[v], f] : d[v] = f,
        !R) : ((!d[v] || !x.isObject(d[v])) && (d[v] = []),
        c(s, f, d[v], y) && x.isArray(d[v]) && (d[v] = Q1(d[v])),
        !R)
    }
    if (x.isFormData(i) && x.isFunction(i.entries)) {
        const s = {};
        return x.forEachEntry(i, (f, d) => {
            c(L1(f), d, s, 0)
        }
        ),
        s
    }
    return null
}
function J1(i, c, s) {
    if (x.isString(i))
        try {
            return (c || JSON.parse)(i),
            x.trim(i)
        } catch (f) {
            if (f.name !== "SyntaxError")
                throw f
        }
    return (s || JSON.stringify)(i)
}
const Gn = {
    transitional: jh,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(c, s) {
        const f = s.getContentType() || ""
          , d = f.indexOf("application/json") > -1
          , y = x.isObject(c);
        if (y && x.isHTMLForm(c) && (c = new FormData(c)),
        x.isFormData(c))
            return d ? JSON.stringify(wh(c)) : c;
        if (x.isArrayBuffer(c) || x.isBuffer(c) || x.isStream(c) || x.isFile(c) || x.isBlob(c) || x.isReadableStream(c))
            return c;
        if (x.isArrayBufferView(c))
            return c.buffer;
        if (x.isURLSearchParams(c))
            return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            c.toString();
        let R;
        if (y) {
            if (f.indexOf("application/x-www-form-urlencoded") > -1)
                return Z1(c, this.formSerializer).toString();
            if ((R = x.isFileList(c)) || f.indexOf("multipart/form-data") > -1) {
                const _ = this.env && this.env.FormData;
                return hi(R ? {
                    "files[]": c
                } : c, _ && new _, this.formSerializer)
            }
        }
        return y || d ? (s.setContentType("application/json", !1),
        J1(c)) : c
    }
    ],
    transformResponse: [function(c) {
        const s = this.transitional || Gn.transitional
          , f = s && s.forcedJSONParsing
          , d = this.responseType === "json";
        if (x.isResponse(c) || x.isReadableStream(c))
            return c;
        if (c && x.isString(c) && (f && !this.responseType || d)) {
            const v = !(s && s.silentJSONParsing) && d;
            try {
                return JSON.parse(c)
            } catch (R) {
                if (v)
                    throw R.name === "SyntaxError" ? lt.from(R, lt.ERR_BAD_RESPONSE, this, null, this.response) : R
            }
        }
        return c
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: le.classes.FormData,
        Blob: le.classes.Blob
    },
    validateStatus: function(c) {
        return c >= 200 && c < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
x.forEach(["delete", "get", "head", "post", "put", "patch"], i => {
    Gn.headers[i] = {}
}
);
const W1 = x.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , k1 = i => {
    const c = {};
    let s, f, d;
    return i && i.split(`
`).forEach(function(v) {
        d = v.indexOf(":"),
        s = v.substring(0, d).trim().toLowerCase(),
        f = v.substring(d + 1).trim(),
        !(!s || c[s] && W1[s]) && (s === "set-cookie" ? c[s] ? c[s].push(f) : c[s] = [f] : c[s] = c[s] ? c[s] + ", " + f : f)
    }),
    c
}
  , sh = Symbol("internals");
function wn(i) {
    return i && String(i).trim().toLowerCase()
}
function ni(i) {
    return i === !1 || i == null ? i : x.isArray(i) ? i.map(ni) : String(i)
}
function $1(i) {
    const c = Object.create(null)
      , s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let f;
    for (; f = s.exec(i); )
        c[f[1]] = f[2];
    return c
}
const F1 = i => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function wf(i, c, s, f, d) {
    if (x.isFunction(f))
        return f.call(this, c, s);
    if (d && (c = s),
    !!x.isString(c)) {
        if (x.isString(f))
            return c.indexOf(f) !== -1;
        if (x.isRegExp(f))
            return f.test(c)
    }
}
function P1(i) {
    return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (c, s, f) => s.toUpperCase() + f)
}
function I1(i, c) {
    const s = x.toCamelCase(" " + c);
    ["get", "set", "has"].forEach(f => {
        Object.defineProperty(i, f + s, {
            value: function(d, y, v) {
                return this[f].call(this, c, d, y, v)
            },
            configurable: !0
        })
    }
    )
}
let re = class {
    constructor(c) {
        c && this.set(c)
    }
    set(c, s, f) {
        const d = this;
        function y(R, _, S) {
            const U = wn(_);
            if (!U)
                throw new Error("header name must be a non-empty string");
            const H = x.findKey(d, U);
            (!H || d[H] === void 0 || S === !0 || S === void 0 && d[H] !== !1) && (d[H || _] = ni(R))
        }
        const v = (R, _) => x.forEach(R, (S, U) => y(S, U, _));
        if (x.isPlainObject(c) || c instanceof this.constructor)
            v(c, s);
        else if (x.isString(c) && (c = c.trim()) && !F1(c))
            v(k1(c), s);
        else if (x.isHeaders(c))
            for (const [R,_] of c.entries())
                y(_, R, f);
        else
            c != null && y(s, c, f);
        return this
    }
    get(c, s) {
        if (c = wn(c),
        c) {
            const f = x.findKey(this, c);
            if (f) {
                const d = this[f];
                if (!s)
                    return d;
                if (s === !0)
                    return $1(d);
                if (x.isFunction(s))
                    return s.call(this, d, f);
                if (x.isRegExp(s))
                    return s.exec(d);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(c, s) {
        if (c = wn(c),
        c) {
            const f = x.findKey(this, c);
            return !!(f && this[f] !== void 0 && (!s || wf(this, this[f], f, s)))
        }
        return !1
    }
    delete(c, s) {
        const f = this;
        let d = !1;
        function y(v) {
            if (v = wn(v),
            v) {
                const R = x.findKey(f, v);
                R && (!s || wf(f, f[R], R, s)) && (delete f[R],
                d = !0)
            }
        }
        return x.isArray(c) ? c.forEach(y) : y(c),
        d
    }
    clear(c) {
        const s = Object.keys(this);
        let f = s.length
          , d = !1;
        for (; f--; ) {
            const y = s[f];
            (!c || wf(this, this[y], y, c, !0)) && (delete this[y],
            d = !0)
        }
        return d
    }
    normalize(c) {
        const s = this
          , f = {};
        return x.forEach(this, (d, y) => {
            const v = x.findKey(f, y);
            if (v) {
                s[v] = ni(d),
                delete s[y];
                return
            }
            const R = c ? P1(y) : String(y).trim();
            R !== y && delete s[y],
            s[R] = ni(d),
            f[R] = !0
        }
        ),
        this
    }
    concat(...c) {
        return this.constructor.concat(this, ...c)
    }
    toJSON(c) {
        const s = Object.create(null);
        return x.forEach(this, (f, d) => {
            f != null && f !== !1 && (s[d] = c && x.isArray(f) ? f.join(", ") : f)
        }
        ),
        s
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([c,s]) => c + ": " + s).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(c) {
        return c instanceof this ? c : new this(c)
    }
    static concat(c, ...s) {
        const f = new this(c);
        return s.forEach(d => f.set(d)),
        f
    }
    static accessor(c) {
        const f = (this[sh] = this[sh] = {
            accessors: {}
        }).accessors
          , d = this.prototype;
        function y(v) {
            const R = wn(v);
            f[R] || (I1(d, v),
            f[R] = !0)
        }
        return x.isArray(c) ? c.forEach(y) : y(c),
        this
    }
}
;
re.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
x.reduceDescriptors(re.prototype, ({value: i}, c) => {
    let s = c[0].toUpperCase() + c.slice(1);
    return {
        get: () => i,
        set(f) {
            this[s] = f
        }
    }
}
);
x.freezeMethods(re);
function Bf(i, c) {
    const s = this || Gn
      , f = c || s
      , d = re.from(f.headers);
    let y = f.data;
    return x.forEach(i, function(R) {
        y = R.call(s, y, d.normalize(), c ? c.status : void 0)
    }),
    d.normalize(),
    y
}
function Bh(i) {
    return !!(i && i.__CANCEL__)
}
function ja(i, c, s) {
    lt.call(this, i ?? "canceled", lt.ERR_CANCELED, c, s),
    this.name = "CanceledError"
}
x.inherits(ja, lt, {
    __CANCEL__: !0
});
function Vh(i, c, s) {
    const f = s.config.validateStatus;
    !s.status || !f || f(s.status) ? i(s) : c(new lt("Request failed with status code " + s.status,[lt.ERR_BAD_REQUEST, lt.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],s.config,s.request,s))
}
function tv(i) {
    const c = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
    return c && c[1] || ""
}
function ev(i, c) {
    i = i || 10;
    const s = new Array(i)
      , f = new Array(i);
    let d = 0, y = 0, v;
    return c = c !== void 0 ? c : 1e3,
    function(_) {
        const S = Date.now()
          , U = f[y];
        v || (v = S),
        s[d] = _,
        f[d] = S;
        let H = y
          , Y = 0;
        for (; H !== d; )
            Y += s[H++],
            H = H % i;
        if (d = (d + 1) % i,
        d === y && (y = (y + 1) % i),
        S - v < c)
            return;
        const P = U && S - U;
        return P ? Math.round(Y * 1e3 / P) : void 0
    }
}
function lv(i, c) {
    let s = 0, f = 1e3 / c, d, y;
    const v = (S, U=Date.now()) => {
        s = U,
        d = null,
        y && (clearTimeout(y),
        y = null),
        i.apply(null, S)
    }
    ;
    return [ (...S) => {
        const U = Date.now()
          , H = U - s;
        H >= f ? v(S, U) : (d = S,
        y || (y = setTimeout( () => {
            y = null,
            v(d)
        }
        , f - H)))
    }
    , () => d && v(d)]
}
const fi = (i, c, s=3) => {
    let f = 0;
    const d = ev(50, 250);
    return lv(y => {
        const v = y.loaded
          , R = y.lengthComputable ? y.total : void 0
          , _ = v - f
          , S = d(_)
          , U = v <= R;
        f = v;
        const H = {
            loaded: v,
            total: R,
            progress: R ? v / R : void 0,
            bytes: _,
            rate: S || void 0,
            estimated: S && R && U ? (R - v) / S : void 0,
            event: y,
            lengthComputable: R != null,
            [c ? "download" : "upload"]: !0
        };
        i(H)
    }
    , s)
}
  , oh = (i, c) => {
    const s = i != null;
    return [f => c[0]({
        lengthComputable: s,
        total: i,
        loaded: f
    }), c[1]]
}
  , dh = i => (...c) => x.asap( () => i(...c))
  , av = le.hasStandardBrowserEnv ? ( (i, c) => s => (s = new URL(s,le.origin),
i.protocol === s.protocol && i.host === s.host && (c || i.port === s.port)))(new URL(le.origin), le.navigator && /(msie|trident)/i.test(le.navigator.userAgent)) : () => !0
  , nv = le.hasStandardBrowserEnv ? {
    write(i, c, s, f, d, y) {
        const v = [i + "=" + encodeURIComponent(c)];
        x.isNumber(s) && v.push("expires=" + new Date(s).toGMTString()),
        x.isString(f) && v.push("path=" + f),
        x.isString(d) && v.push("domain=" + d),
        y === !0 && v.push("secure"),
        document.cookie = v.join("; ")
    },
    read(i) {
        const c = document.cookie.match(new RegExp("(^|;\\s*)(" + i + ")=([^;]*)"));
        return c ? decodeURIComponent(c[3]) : null
    },
    remove(i) {
        this.write(i, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function uv(i) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)
}
function iv(i, c) {
    return c ? i.replace(/\/?\/$/, "") + "/" + c.replace(/^\/+/, "") : i
}
function Yh(i, c, s) {
    let f = !uv(c);
    return i && (f || s == !1) ? iv(i, c) : c
}
const hh = i => i instanceof re ? {
    ...i
} : i;
function kl(i, c) {
    c = c || {};
    const s = {};
    function f(S, U, H, Y) {
        return x.isPlainObject(S) && x.isPlainObject(U) ? x.merge.call({
            caseless: Y
        }, S, U) : x.isPlainObject(U) ? x.merge({}, U) : x.isArray(U) ? U.slice() : U
    }
    function d(S, U, H, Y) {
        if (x.isUndefined(U)) {
            if (!x.isUndefined(S))
                return f(void 0, S, H, Y)
        } else
            return f(S, U, H, Y)
    }
    function y(S, U) {
        if (!x.isUndefined(U))
            return f(void 0, U)
    }
    function v(S, U) {
        if (x.isUndefined(U)) {
            if (!x.isUndefined(S))
                return f(void 0, S)
        } else
            return f(void 0, U)
    }
    function R(S, U, H) {
        if (H in c)
            return f(S, U);
        if (H in i)
            return f(void 0, S)
    }
    const _ = {
        url: y,
        method: y,
        data: y,
        baseURL: v,
        transformRequest: v,
        transformResponse: v,
        paramsSerializer: v,
        timeout: v,
        timeoutMessage: v,
        withCredentials: v,
        withXSRFToken: v,
        adapter: v,
        responseType: v,
        xsrfCookieName: v,
        xsrfHeaderName: v,
        onUploadProgress: v,
        onDownloadProgress: v,
        decompress: v,
        maxContentLength: v,
        maxBodyLength: v,
        beforeRedirect: v,
        transport: v,
        httpAgent: v,
        httpsAgent: v,
        cancelToken: v,
        socketPath: v,
        responseEncoding: v,
        validateStatus: R,
        headers: (S, U, H) => d(hh(S), hh(U), H, !0)
    };
    return x.forEach(Object.keys(Object.assign({}, i, c)), function(U) {
        const H = _[U] || d
          , Y = H(i[U], c[U], U);
        x.isUndefined(Y) && H !== R || (s[U] = Y)
    }),
    s
}
const Gh = i => {
    const c = kl({}, i);
    let {data: s, withXSRFToken: f, xsrfHeaderName: d, xsrfCookieName: y, headers: v, auth: R} = c;
    c.headers = v = re.from(v),
    c.url = Hh(Yh(c.baseURL, c.url, c.allowAbsoluteUrls), i.params, i.paramsSerializer),
    R && v.set("Authorization", "Basic " + btoa((R.username || "") + ":" + (R.password ? unescape(encodeURIComponent(R.password)) : "")));
    let _;
    if (x.isFormData(s)) {
        if (le.hasStandardBrowserEnv || le.hasStandardBrowserWebWorkerEnv)
            v.setContentType(void 0);
        else if ((_ = v.getContentType()) !== !1) {
            const [S,...U] = _ ? _.split(";").map(H => H.trim()).filter(Boolean) : [];
            v.setContentType([S || "multipart/form-data", ...U].join("; "))
        }
    }
    if (le.hasStandardBrowserEnv && (f && x.isFunction(f) && (f = f(c)),
    f || f !== !1 && av(c.url))) {
        const S = d && y && nv.read(y);
        S && v.set(d, S)
    }
    return c
}
  , cv = typeof XMLHttpRequest < "u"
  , fv = cv && function(i) {
    return new Promise(function(s, f) {
        const d = Gh(i);
        let y = d.data;
        const v = re.from(d.headers).normalize();
        let {responseType: R, onUploadProgress: _, onDownloadProgress: S} = d, U, H, Y, P, V;
        function X() {
            P && P(),
            V && V(),
            d.cancelToken && d.cancelToken.unsubscribe(U),
            d.signal && d.signal.removeEventListener("abort", U)
        }
        let G = new XMLHttpRequest;
        G.open(d.method.toUpperCase(), d.url, !0),
        G.timeout = d.timeout;
        function dt() {
            if (!G)
                return;
            const at = re.from("getAllResponseHeaders"in G && G.getAllResponseHeaders())
              , W = {
                data: !R || R === "text" || R === "json" ? G.responseText : G.response,
                status: G.status,
                statusText: G.statusText,
                headers: at,
                config: i,
                request: G
            };
            Vh(function(Ut) {
                s(Ut),
                X()
            }, function(Ut) {
                f(Ut),
                X()
            }, W),
            G = null
        }
        "onloadend"in G ? G.onloadend = dt : G.onreadystatechange = function() {
            !G || G.readyState !== 4 || G.status === 0 && !(G.responseURL && G.responseURL.indexOf("file:") === 0) || setTimeout(dt)
        }
        ,
        G.onabort = function() {
            G && (f(new lt("Request aborted",lt.ECONNABORTED,i,G)),
            G = null)
        }
        ,
        G.onerror = function() {
            f(new lt("Network Error",lt.ERR_NETWORK,i,G)),
            G = null
        }
        ,
        G.ontimeout = function() {
            let At = d.timeout ? "timeout of " + d.timeout + "ms exceeded" : "timeout exceeded";
            const W = d.transitional || jh;
            d.timeoutErrorMessage && (At = d.timeoutErrorMessage),
            f(new lt(At,W.clarifyTimeoutError ? lt.ETIMEDOUT : lt.ECONNABORTED,i,G)),
            G = null
        }
        ,
        y === void 0 && v.setContentType(null),
        "setRequestHeader"in G && x.forEach(v.toJSON(), function(At, W) {
            G.setRequestHeader(W, At)
        }),
        x.isUndefined(d.withCredentials) || (G.withCredentials = !!d.withCredentials),
        R && R !== "json" && (G.responseType = d.responseType),
        S && ([Y,V] = fi(S, !0),
        G.addEventListener("progress", Y)),
        _ && G.upload && ([H,P] = fi(_),
        G.upload.addEventListener("progress", H),
        G.upload.addEventListener("loadend", P)),
        (d.cancelToken || d.signal) && (U = at => {
            G && (f(!at || at.type ? new ja(null,i,G) : at),
            G.abort(),
            G = null)
        }
        ,
        d.cancelToken && d.cancelToken.subscribe(U),
        d.signal && (d.signal.aborted ? U() : d.signal.addEventListener("abort", U)));
        const st = tv(d.url);
        if (st && le.protocols.indexOf(st) === -1) {
            f(new lt("Unsupported protocol " + st + ":",lt.ERR_BAD_REQUEST,i));
            return
        }
        G.send(y || null)
    }
    )
}
  , rv = (i, c) => {
    const {length: s} = i = i ? i.filter(Boolean) : [];
    if (c || s) {
        let f = new AbortController, d;
        const y = function(S) {
            if (!d) {
                d = !0,
                R();
                const U = S instanceof Error ? S : this.reason;
                f.abort(U instanceof lt ? U : new ja(U instanceof Error ? U.message : U))
            }
        };
        let v = c && setTimeout( () => {
            v = null,
            y(new lt(`timeout ${c} of ms exceeded`,lt.ETIMEDOUT))
        }
        , c);
        const R = () => {
            i && (v && clearTimeout(v),
            v = null,
            i.forEach(S => {
                S.unsubscribe ? S.unsubscribe(y) : S.removeEventListener("abort", y)
            }
            ),
            i = null)
        }
        ;
        i.forEach(S => S.addEventListener("abort", y));
        const {signal: _} = f;
        return _.unsubscribe = () => x.asap(R),
        _
    }
}
  , sv = function*(i, c) {
    let s = i.byteLength;
    if (s < c) {
        yield i;
        return
    }
    let f = 0, d;
    for (; f < s; )
        d = f + c,
        yield i.slice(f, d),
        f = d
}
  , ov = async function*(i, c) {
    for await(const s of dv(i))
        yield*sv(s, c)
}
  , dv = async function*(i) {
    if (i[Symbol.asyncIterator]) {
        yield*i;
        return
    }
    const c = i.getReader();
    try {
        for (; ; ) {
            const {done: s, value: f} = await c.read();
            if (s)
                break;
            yield f
        }
    } finally {
        await c.cancel()
    }
}
  , mh = (i, c, s, f) => {
    const d = ov(i, c);
    let y = 0, v, R = _ => {
        v || (v = !0,
        f && f(_))
    }
    ;
    return new ReadableStream({
        async pull(_) {
            try {
                const {done: S, value: U} = await d.next();
                if (S) {
                    R(),
                    _.close();
                    return
                }
                let H = U.byteLength;
                if (s) {
                    let Y = y += H;
                    s(Y)
                }
                _.enqueue(new Uint8Array(U))
            } catch (S) {
                throw R(S),
                S
            }
        },
        cancel(_) {
            return R(_),
            d.return()
        }
    },{
        highWaterMark: 2
    })
}
  , mi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , Kh = mi && typeof ReadableStream == "function"
  , hv = mi && (typeof TextEncoder == "function" ? (i => c => i.encode(c))(new TextEncoder) : async i => new Uint8Array(await new Response(i).arrayBuffer()))
  , Xh = (i, ...c) => {
    try {
        return !!i(...c)
    } catch {
        return !1
    }
}
  , mv = Kh && Xh( () => {
    let i = !1;
    const c = new Request(le.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return i = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return i && !c
}
)
  , yh = 64 * 1024
  , Xf = Kh && Xh( () => x.isReadableStream(new Response("").body))
  , ri = {
    stream: Xf && (i => i.body)
};
mi && (i => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(c => {
        !ri[c] && (ri[c] = x.isFunction(i[c]) ? s => s[c]() : (s, f) => {
            throw new lt(`Response type '${c}' is not supported`,lt.ERR_NOT_SUPPORT,f)
        }
        )
    }
    )
}
)(new Response);
const yv = async i => {
    if (i == null)
        return 0;
    if (x.isBlob(i))
        return i.size;
    if (x.isSpecCompliantForm(i))
        return (await new Request(le.origin,{
            method: "POST",
            body: i
        }).arrayBuffer()).byteLength;
    if (x.isArrayBufferView(i) || x.isArrayBuffer(i))
        return i.byteLength;
    if (x.isURLSearchParams(i) && (i = i + ""),
    x.isString(i))
        return (await hv(i)).byteLength
}
  , vv = async (i, c) => {
    const s = x.toFiniteNumber(i.getContentLength());
    return s ?? yv(c)
}
  , pv = mi && (async i => {
    let {url: c, method: s, data: f, signal: d, cancelToken: y, timeout: v, onDownloadProgress: R, onUploadProgress: _, responseType: S, headers: U, withCredentials: H="same-origin", fetchOptions: Y} = Gh(i);
    S = S ? (S + "").toLowerCase() : "text";
    let P = rv([d, y && y.toAbortSignal()], v), V;
    const X = P && P.unsubscribe && ( () => {
        P.unsubscribe()
    }
    );
    let G;
    try {
        if (_ && mv && s !== "get" && s !== "head" && (G = await vv(U, f)) !== 0) {
            let W = new Request(c,{
                method: "POST",
                body: f,
                duplex: "half"
            }), ht;
            if (x.isFormData(f) && (ht = W.headers.get("content-type")) && U.setContentType(ht),
            W.body) {
                const [Ut,xt] = oh(G, fi(dh(_)));
                f = mh(W.body, yh, Ut, xt)
            }
        }
        x.isString(H) || (H = H ? "include" : "omit");
        const dt = "credentials"in Request.prototype;
        V = new Request(c,{
            ...Y,
            signal: P,
            method: s.toUpperCase(),
            headers: U.normalize().toJSON(),
            body: f,
            duplex: "half",
            credentials: dt ? H : void 0
        });
        let st = await fetch(V);
        const at = Xf && (S === "stream" || S === "response");
        if (Xf && (R || at && X)) {
            const W = {};
            ["status", "statusText", "headers"].forEach(Bt => {
                W[Bt] = st[Bt]
            }
            );
            const ht = x.toFiniteNumber(st.headers.get("content-length"))
              , [Ut,xt] = R && oh(ht, fi(dh(R), !0)) || [];
            st = new Response(mh(st.body, yh, Ut, () => {
                xt && xt(),
                X && X()
            }
            ),W)
        }
        S = S || "text";
        let At = await ri[x.findKey(ri, S) || "text"](st, i);
        return !at && X && X(),
        await new Promise( (W, ht) => {
            Vh(W, ht, {
                data: At,
                headers: re.from(st.headers),
                status: st.status,
                statusText: st.statusText,
                config: i,
                request: V
            })
        }
        )
    } catch (dt) {
        throw X && X(),
        dt && dt.name === "TypeError" && /fetch/i.test(dt.message) ? Object.assign(new lt("Network Error",lt.ERR_NETWORK,i,V), {
            cause: dt.cause || dt
        }) : lt.from(dt, dt && dt.code, i, V)
    }
}
)
  , Zf = {
    http: q1,
    xhr: fv,
    fetch: pv
};
x.forEach(Zf, (i, c) => {
    if (i) {
        try {
            Object.defineProperty(i, "name", {
                value: c
            })
        } catch {}
        Object.defineProperty(i, "adapterName", {
            value: c
        })
    }
}
);
const vh = i => `- ${i}`
  , gv = i => x.isFunction(i) || i === null || i === !1
  , Zh = {
    getAdapter: i => {
        i = x.isArray(i) ? i : [i];
        const {length: c} = i;
        let s, f;
        const d = {};
        for (let y = 0; y < c; y++) {
            s = i[y];
            let v;
            if (f = s,
            !gv(s) && (f = Zf[(v = String(s)).toLowerCase()],
            f === void 0))
                throw new lt(`Unknown adapter '${v}'`);
            if (f)
                break;
            d[v || "#" + y] = f
        }
        if (!f) {
            const y = Object.entries(d).map( ([R,_]) => `adapter ${R} ` + (_ === !1 ? "is not supported by the environment" : "is not available in the build"));
            let v = c ? y.length > 1 ? `since :
` + y.map(vh).join(`
`) : " " + vh(y[0]) : "as no adapter specified";
            throw new lt("There is no suitable adapter to dispatch the request " + v,"ERR_NOT_SUPPORT")
        }
        return f
    }
    ,
    adapters: Zf
};
function Vf(i) {
    if (i.cancelToken && i.cancelToken.throwIfRequested(),
    i.signal && i.signal.aborted)
        throw new ja(null,i)
}
function ph(i) {
    return Vf(i),
    i.headers = re.from(i.headers),
    i.data = Bf.call(i, i.transformRequest),
    ["post", "put", "patch"].indexOf(i.method) !== -1 && i.headers.setContentType("application/x-www-form-urlencoded", !1),
    Zh.getAdapter(i.adapter || Gn.adapter)(i).then(function(f) {
        return Vf(i),
        f.data = Bf.call(i, i.transformResponse, f),
        f.headers = re.from(f.headers),
        f
    }, function(f) {
        return Bh(f) || (Vf(i),
        f && f.response && (f.response.data = Bf.call(i, i.transformResponse, f.response),
        f.response.headers = re.from(f.response.headers))),
        Promise.reject(f)
    })
}
const Lh = "1.8.4"
  , yi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (i, c) => {
    yi[i] = function(f) {
        return typeof f === i || "a" + (c < 1 ? "n " : " ") + i
    }
}
);
const gh = {};
yi.transitional = function(c, s, f) {
    function d(y, v) {
        return "[Axios v" + Lh + "] Transitional option '" + y + "'" + v + (f ? ". " + f : "")
    }
    return (y, v, R) => {
        if (c === !1)
            throw new lt(d(v, " has been removed" + (s ? " in " + s : "")),lt.ERR_DEPRECATED);
        return s && !gh[v] && (gh[v] = !0,
        console.warn(d(v, " has been deprecated since v" + s + " and will be removed in the near future"))),
        c ? c(y, v, R) : !0
    }
}
;
yi.spelling = function(c) {
    return (s, f) => (console.warn(`${f} is likely a misspelling of ${c}`),
    !0)
}
;
function Sv(i, c, s) {
    if (typeof i != "object")
        throw new lt("options must be an object",lt.ERR_BAD_OPTION_VALUE);
    const f = Object.keys(i);
    let d = f.length;
    for (; d-- > 0; ) {
        const y = f[d]
          , v = c[y];
        if (v) {
            const R = i[y]
              , _ = R === void 0 || v(R, y, i);
            if (_ !== !0)
                throw new lt("option " + y + " must be " + _,lt.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (s !== !0)
            throw new lt("Unknown option " + y,lt.ERR_BAD_OPTION)
    }
}
const ui = {
    assertOptions: Sv,
    validators: yi
}
  , Ye = ui.validators;
let Wl = class {
    constructor(c) {
        this.defaults = c,
        this.interceptors = {
            request: new rh,
            response: new rh
        }
    }
    async request(c, s) {
        try {
            return await this._request(c, s)
        } catch (f) {
            if (f instanceof Error) {
                let d = {};
                Error.captureStackTrace ? Error.captureStackTrace(d) : d = new Error;
                const y = d.stack ? d.stack.replace(/^.+\n/, "") : "";
                try {
                    f.stack ? y && !String(f.stack).endsWith(y.replace(/^.+\n.+\n/, "")) && (f.stack += `
` + y) : f.stack = y
                } catch {}
            }
            throw f
        }
    }
    _request(c, s) {
        typeof c == "string" ? (s = s || {},
        s.url = c) : s = c || {},
        s = kl(this.defaults, s);
        const {transitional: f, paramsSerializer: d, headers: y} = s;
        f !== void 0 && ui.assertOptions(f, {
            silentJSONParsing: Ye.transitional(Ye.boolean),
            forcedJSONParsing: Ye.transitional(Ye.boolean),
            clarifyTimeoutError: Ye.transitional(Ye.boolean)
        }, !1),
        d != null && (x.isFunction(d) ? s.paramsSerializer = {
            serialize: d
        } : ui.assertOptions(d, {
            encode: Ye.function,
            serialize: Ye.function
        }, !0)),
        s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0),
        ui.assertOptions(s, {
            baseUrl: Ye.spelling("baseURL"),
            withXsrfToken: Ye.spelling("withXSRFToken")
        }, !0),
        s.method = (s.method || this.defaults.method || "get").toLowerCase();
        let v = y && x.merge(y.common, y[s.method]);
        y && x.forEach(["delete", "get", "head", "post", "put", "patch", "common"], V => {
            delete y[V]
        }
        ),
        s.headers = re.concat(v, y);
        const R = [];
        let _ = !0;
        this.interceptors.request.forEach(function(X) {
            typeof X.runWhen == "function" && X.runWhen(s) === !1 || (_ = _ && X.synchronous,
            R.unshift(X.fulfilled, X.rejected))
        });
        const S = [];
        this.interceptors.response.forEach(function(X) {
            S.push(X.fulfilled, X.rejected)
        });
        let U, H = 0, Y;
        if (!_) {
            const V = [ph.bind(this), void 0];
            for (V.unshift.apply(V, R),
            V.push.apply(V, S),
            Y = V.length,
            U = Promise.resolve(s); H < Y; )
                U = U.then(V[H++], V[H++]);
            return U
        }
        Y = R.length;
        let P = s;
        for (H = 0; H < Y; ) {
            const V = R[H++]
              , X = R[H++];
            try {
                P = V(P)
            } catch (G) {
                X.call(this, G);
                break
            }
        }
        try {
            U = ph.call(this, P)
        } catch (V) {
            return Promise.reject(V)
        }
        for (H = 0,
        Y = S.length; H < Y; )
            U = U.then(S[H++], S[H++]);
        return U
    }
    getUri(c) {
        c = kl(this.defaults, c);
        const s = Yh(c.baseURL, c.url, c.allowAbsoluteUrls);
        return Hh(s, c.params, c.paramsSerializer)
    }
}
;
x.forEach(["delete", "get", "head", "options"], function(c) {
    Wl.prototype[c] = function(s, f) {
        return this.request(kl(f || {}, {
            method: c,
            url: s,
            data: (f || {}).data
        }))
    }
});
x.forEach(["post", "put", "patch"], function(c) {
    function s(f) {
        return function(y, v, R) {
            return this.request(kl(R || {}, {
                method: c,
                headers: f ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: y,
                data: v
            }))
        }
    }
    Wl.prototype[c] = s(),
    Wl.prototype[c + "Form"] = s(!0)
});
let bv = class Qh {
    constructor(c) {
        if (typeof c != "function")
            throw new TypeError("executor must be a function.");
        let s;
        this.promise = new Promise(function(y) {
            s = y
        }
        );
        const f = this;
        this.promise.then(d => {
            if (!f._listeners)
                return;
            let y = f._listeners.length;
            for (; y-- > 0; )
                f._listeners[y](d);
            f._listeners = null
        }
        ),
        this.promise.then = d => {
            let y;
            const v = new Promise(R => {
                f.subscribe(R),
                y = R
            }
            ).then(d);
            return v.cancel = function() {
                f.unsubscribe(y)
            }
            ,
            v
        }
        ,
        c(function(y, v, R) {
            f.reason || (f.reason = new ja(y,v,R),
            s(f.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(c) {
        if (this.reason) {
            c(this.reason);
            return
        }
        this._listeners ? this._listeners.push(c) : this._listeners = [c]
    }
    unsubscribe(c) {
        if (!this._listeners)
            return;
        const s = this._listeners.indexOf(c);
        s !== -1 && this._listeners.splice(s, 1)
    }
    toAbortSignal() {
        const c = new AbortController
          , s = f => {
            c.abort(f)
        }
        ;
        return this.subscribe(s),
        c.signal.unsubscribe = () => this.unsubscribe(s),
        c.signal
    }
    static source() {
        let c;
        return {
            token: new Qh(function(d) {
                c = d
            }
            ),
            cancel: c
        }
    }
}
;
function Ev(i) {
    return function(s) {
        return i.apply(null, s)
    }
}
function Tv(i) {
    return x.isObject(i) && i.isAxiosError === !0
}
const Lf = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Lf).forEach( ([i,c]) => {
    Lf[c] = i
}
);
function Jh(i) {
    const c = new Wl(i)
      , s = Ah(Wl.prototype.request, c);
    return x.extend(s, Wl.prototype, c, {
        allOwnKeys: !0
    }),
    x.extend(s, c, null, {
        allOwnKeys: !0
    }),
    s.create = function(d) {
        return Jh(kl(i, d))
    }
    ,
    s
}
const wt = Jh(Gn);
wt.Axios = Wl;
wt.CanceledError = ja;
wt.CancelToken = bv;
wt.isCancel = Bh;
wt.VERSION = Lh;
wt.toFormData = hi;
wt.AxiosError = lt;
wt.Cancel = wt.CanceledError;
wt.all = function(c) {
    return Promise.all(c)
}
;
wt.spread = Ev;
wt.isAxiosError = Tv;
wt.mergeConfig = kl;
wt.AxiosHeaders = re;
wt.formToJSON = i => wh(x.isHTMLForm(i) ? new FormData(i) : i);
wt.getAdapter = Zh.getAdapter;
wt.HttpStatusCode = Lf;
wt.default = wt;
const {Axios: xv, AxiosError: Mv, CanceledError: Dv, isCancel: _v, CancelToken: Nv, VERSION: qv, all: zv, Cancel: Cv, isAxiosError: Hv, spread: jv, toFormData: wv, AxiosHeaders: Bv, HttpStatusCode: Vv, formToJSON: Yv, getAdapter: Gv, mergeConfig: Kv} = wt
  , Sh = wt.create({
    baseURL: `${window.location.origin}/production`,
    timeout: 2e4,
    headers: {
        "Content-Type": "application/json"
    }
})
  , bh = {
    findTransactionById: async i => Sh.get(`/payments.php/${i}`),
    generatePayment: async (i) => Sh.post("/payments.php", i)
}
  , Ov = ({isOpen: i, onClose: c}) => i ? k.jsx("div", {
    className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
    children: k.jsx("div", {
        className: "bg-white rounded-lg p-6 max-w-sm w-full mx-4",
        children: k.jsxs("div", {
            className: "flex flex-col items-center text-center",
            children: [k.jsx(Zy, {
                className: "text-red-500 text-5xl mb-4"
            }), k.jsx("h2", {
                className: "text-xl font-semibold text-gray-800 mb-2",
                children: "Erro ao gerar PIX"
            }), k.jsx("p", {
                className: "text-gray-600 mb-6",
                children: "Ocorreu um erro ao gerar o código PIX. Por favor, tente novamente."
            }), k.jsx("button", {
                onClick: c,
                className: "bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md transition-colors",
                children: "Tentar Novamente"
            })]
        })
    })
}) : null;
let Eh = !1;
function Av() {
    // Função para detectar upsell atual e calcular próximo
    function getNextUpsell() {
        const path = window.location.pathname;
        const upsellMap = {
            '/up1/checkout': { current: 1, next: '/up2', page: 2 },
            '/up2/checkout': { current: 2, next: '/up4', page: 3 },
            '/up4/checkout': { current: 4, next: '/up5', page: 4 },
            '/up5/checkout': { current: 5, next: '/up6', page: 5 },
            '/up6/checkout': { current: 6, next: '/up7', page: 6 },
            '/up7/checkout': { current: 7, next: '/up8', page: 7 },
            '/up8/checkout': { current: 8, next: '/up9', page: 8 },
            '/up9/checkout': { current: 9, next: null, page: 9 }
        };
        // Tenta encontrar match exato primeiro
        if (upsellMap[path]) {
            return upsellMap[path];
        }
        // Tenta encontrar por padrão (pode ter index.html ou outros)
        for (const key in upsellMap) {
            if (path.includes(key.replace('/checkout', ''))) {
                return upsellMap[key];
            }
        }
        // Fallback: se estiver em /checkout (front principal), vai para up1
        if (path.includes('/checkout') && !path.includes('/up')) {
            return { current: 0, next: '/up1', page: 1 };
        }
        // Fallback padrão
        return { current: 1, next: '/up2', page: 2 };
    }
    const [i,c] = Xt.useState(!0)
      , [s,f] = Xt.useState()
      , [d,y] = Xt.useState()
      , [v,R] = Xt.useState("06/04/2025, 12:00")
      , [_,S] = Xt.useState(27.90)
      , [U,H] = Xt.useState(27.90)
      , [Y,P] = Xt.useState()
      , [V,X] = Xt.useState(!1)
      , [G,dt] = Xt.useState(!0)
      , [st,at] = Xt.useState()
      , [At,W] = Xt.useState()
      , [ht,Ut] = Xt.useState()
      , [xt,Bt] = Xt.useState()
      , [St,ut] = Xt.useState()
      , Mt = Xt.useCallback(async () => {
        try {
            X(!1),
            c(!0);
            const upsellInfo = getNextUpsell();
            // Constrói utmQuery como string de URLSearchParams
            const utmParams = new URLSearchParams();
            st && utmParams.set("utm_source", st);
            At && utmParams.set("CampaignID", At);
            ht && utmParams.set("adSETID", ht);
            xt && utmParams.set("CreativeID", xt);
            St && utmParams.set("pixel_id", St);
            Y && utmParams.set("click_id", Y);
            const utmQuery = utmParams.toString();
            // Prepara payload com utmQuery no body
            const paymentPayload = {
                installments: 1,
                value: U ?? 27.90,
                payerName: "Pagamento Seguro",
                productName: "UP1",
                description: "UP1",
                kwaiClickId: Y,
                page: upsellInfo.page
            };
            // Adiciona utmQuery se houver parâmetros
            if (utmQuery) {
                paymentPayload.utmQuery = utmQuery;
            }
            const {data: Dt} = await bh.generatePayment(paymentPayload);
            f(Dt.paymentInfo.qrCode),
            y(Dt.paymentInfo.base64QrCode),
            S(Dt.value);
            const B = Dy().add(20, "minute");
            R(B.format("DD/MM/YYYY, HH:mm"));
            const g = upsellInfo.next ? `${window.location.origin}${upsellInfo.next}` : null;
            if (g) {
                setInterval(async () => {
                    const {data: M} = await bh.findTransactionById(Dt.paymentInfo.id);
                    M.status === "APPROVED" && window.location.replace(g)
                }
                , 3e3)
            }
        } catch (Dt) {
            X(!0),
            console.log(Dt)
        } finally {
            c(!1)
        }
    }
    , [ht, At, xt, Y, St, st, U]);
    return Xt.useEffect( () => {
        G || Eh || (Mt(),
        Eh = !0)
    }
    , [Mt, G]),
    Xt.useEffect( () => {
        const Dt = new URLSearchParams(window.location.search)
          , J = Dt.get("value")
          , B = Dt.get("click_id")
          , g = Dt.get("utm_source")
          , M = Dt.get("CampaignID")
          , q = Dt.get("CreativeID")
          , K = Dt.get("pixel_id")
          , h = Dt.get("adSETID");
        J && H(Number(J)),
        B && P(B),
        g && at(g),
        M && W(M),
        q && Bt(q),
        K && ut(K),
        h && Ut(h),
        dt(!1)
    }
    , [H]),
    k.jsxs(k.Fragment, {
        children: [k.jsxs("main", {
            className: "min-h-screen bg-gray-50 pb-12",
            children: [k.jsx("div", {
                className: "w-full h-40 lg:h-60 xl:h-90",
                children: k.jsx("img", {
                    src: "./tktk.jpg",
                    alt: "Kwai Banner",
                    className: "w-full h-full object-cover",
                    loading: "eager"
                })
            }), k.jsx("div", {
                className: "custom-container",
                children: k.jsxs("div", {
                    className: "mt-10 bg-white shadow-lg rounded-xl p-4 border border-gray-200 min-h-60 max-w-4xl mx-auto",
                    children: [k.jsx("div", {
                        className: "flex justify-end",
                        children: k.jsxs("div", {
                            className: "flex items-center bg-green-600 text-white rounded-md text-xs py-1 px-2",
                            children: [k.jsx("img", {
                                src: _y,
                                alt: "",
                                width: 20,
                                height: 5
                            }), "Ambiente Seguro"]
                        })
                    }), i ? k.jsxs("div", {
                        className: "flex flex-col gap-y-1 items-center mt-6 max-w-60 mx-auto",
                        children: [k.jsx("div", {
                            className: "mb-2",
                            children: k.jsx(Jy, {})
                        }), k.jsx("p", {
                            className: "text-center text-gray-800",
                            children: "Gerando QRCode para pagamento..."
                        })]
                    }) : V ? null : k.jsx("div", {
                        className: "flex flex-col gap-y-1 items-center mt-6",
                        children: k.jsx(Qy, {
                            pixCode: s,
                            qrCode: d,
                            expiresAt: v,
                            value: U ?? _
                        })
                    })]
                })
            })]
        }), k.jsx(Ov, {
            isOpen: V,
            onClose: Mt
        })]
    })
}
Uy.createRoot(document.getElementById("root")).render(k.jsx(Av, {}));
