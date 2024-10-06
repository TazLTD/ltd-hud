var Ot = Object.defineProperty;
var Ct = (e, t, n) => t in e ? Ot(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var Se = (e, t, n) => (Ct(e, typeof t != "symbol" ? t + "" : t, n), n);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
    new MutationObserver(r => {
        for (const l of r)
            if (l.type === "childList")
                for (const i of l.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && s(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(r) {
        const l = {};
        return r.integrity && (l.integrity = r.integrity), r.referrerPolicy && (l.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? l.credentials = "include" : r.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
    }

    function s(r) {
        if (r.ep) return;
        r.ep = !0;
        const l = n(r);
        fetch(r.href, l)
    }
})();

function U() {}
const de = e => e;

function Ve(e, t) {
    for (const n in t) e[n] = t[n];
    return e
}

function ct(e) {
    return e()
}

function Fe() {
    return Object.create(null)
}

function x(e) {
    e.forEach(ct)
}

function Te(e) {
    return typeof e == "function"
}

function fe(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}

function Et(e) {
    return Object.keys(e).length === 0
}

function dt(e, ...t) {
    if (e == null) {
        for (const s of t) s(void 0);
        return U
    }
    const n = e.subscribe(...t);
    return n.unsubscribe ? () => n.unsubscribe() : n
}

function Le(e) {
    let t;
    return dt(e, n => t = n)(), t
}

function je(e, t, n) {
    e.$$.on_destroy.push(dt(t, n))
}

function Ge(e) {
    return e ?? ""
}
const ht = typeof window < "u";
let _t = ht ? () => window.performance.now() : () => Date.now(),
    De = ht ? e => requestAnimationFrame(e) : U;
const oe = new Set;

function mt(e) {
    oe.forEach(t => {
        t.c(e) || (oe.delete(t), t.f())
    }), oe.size !== 0 && De(mt)
}

function gt(e) {
    let t;
    return oe.size === 0 && De(mt), {
        promise: new Promise(n => {
            oe.add(t = {
                c: e,
                f: n
            })
        }),
        abort() {
            oe.delete(t)
        }
    }
}

function d(e, t) {
    e.appendChild(t)
}

function vt(e) {
    if (!e) return document;
    const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return t && t.host ? t : e.ownerDocument
}

function St(e) {
    const t = b("style");
    return t.textContent = "/* empty */", Nt(vt(e), t), t.sheet
}

function Nt(e, t) {
    return d(e.head || e, t), t.sheet
}

function A(e, t, n) {
    e.insertBefore(t, n || null)
}

function P(e) {
    e.parentNode && e.parentNode.removeChild(e)
}

function Pt(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
}

function b(e) {
    return document.createElement(e)
}

function Z(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e)
}

function q(e) {
    return document.createTextNode(e)
}

function T() {
    return q(" ")
}

function ge() {
    return q("")
}

function o(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}

function At(e) {
    return Array.from(e.childNodes)
}

function $(e, t) {
    t = "" + t, e.data !== t && (e.data = t)
}

function I(e, t, n, s) {
    n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, s ? "important" : "")
}

function Rt(e, t, {
    bubbles: n = !1,
    cancelable: s = !1
} = {}) {
    return new CustomEvent(e, {
        detail: t,
        bubbles: n,
        cancelable: s
    })
}
const Be = new Map;
let Oe = 0;

function Tt(e) {
    let t = 5381,
        n = e.length;
    for (; n--;) t = (t << 5) - t ^ e.charCodeAt(n);
    return t >>> 0
}

function Lt(e, t) {
    const n = {
        stylesheet: St(t),
        rules: {}
    };
    return Be.set(e, n), n
}

function qe(e, t, n, s, r, l, i, a = 0) {
    const c = 16.666 / s;
    let f = `{
`;
    for (let k = 0; k <= 1; k += c) {
        const w = t + (n - t) * l(k);
        f += k * 100 + `%{${i(w,1-w)}}
`
    }
    const m = f + `100% {${i(n,1-n)}}
}`,
        h = `__svelte_${Tt(m)}_${a}`,
        u = vt(e),
        {
            stylesheet: v,
            rules: g
        } = Be.get(u) || Lt(u, e);
    g[h] || (g[h] = !0, v.insertRule(`@keyframes ${h} ${m}`, v.cssRules.length));
    const B = e.style.animation || "";
    return e.style.animation = `${B?`${B}, `:""}${h} ${s}ms linear ${r}ms 1 both`, Oe += 1, h
}

function Dt(e, t) {
    const n = (e.style.animation || "").split(", "),
        s = n.filter(t ? l => l.indexOf(t) < 0 : l => l.indexOf("__svelte") === -1),
        r = n.length - s.length;
    r && (e.style.animation = s.join(", "), Oe -= r, Oe || It())
}

function It() {
    De(() => {
        Oe || (Be.forEach(e => {
            const {
                ownerNode: t
            } = e.stylesheet;
            t && P(t)
        }), Be.clear())
    })
}
let he;

function ce(e) {
    he = e
}

function pt() {
    if (!he) throw new Error("Function called outside component initialization");
    return he
}

function Mt(e) {
    pt().$$.on_mount.push(e)
}

function Wt(e) {
    pt().$$.on_destroy.push(e)
}
const le = [],
    He = [];
let ae = [];
const Ue = [],
    zt = Promise.resolve();
let Ae = !1;

function Vt() {
    Ae || (Ae = !0, zt.then(yt))
}

function Q(e) {
    ae.push(e)
}
const Ne = new Set;
let ne = 0;

function yt() {
    if (ne !== 0) return;
    const e = he;
    do {
        try {
            for (; ne < le.length;) {
                const t = le[ne];
                ne++, ce(t), Ft(t.$$)
            }
        } catch (t) {
            throw le.length = 0, ne = 0, t
        }
        for (ce(null), le.length = 0, ne = 0; He.length;) He.pop()();
        for (let t = 0; t < ae.length; t += 1) {
            const n = ae[t];
            Ne.has(n) || (Ne.add(n), n())
        }
        ae.length = 0
    } while (le.length);
    for (; Ue.length;) Ue.pop()();
    Ae = !1, Ne.clear(), ce(e)
}

function Ft(e) {
    if (e.fragment !== null) {
        e.update(), x(e.before_update);
        const t = e.dirty;
        e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Q)
    }
}

function Gt(e) {
    const t = [],
        n = [];
    ae.forEach(s => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach(s => s()), ae = t
}
let ue;

function qt() {
    return ue || (ue = Promise.resolve(), ue.then(() => {
        ue = null
    })), ue
}

function Pe(e, t, n) {
    e.dispatchEvent(Rt(`${t?"intro":"outro"}${n}`))
}
const ke = new Set;
let Y;

function bt() {
    Y = {
        r: 0,
        c: [],
        p: Y
    }
}

function wt() {
    Y.r || x(Y.c), Y = Y.p
}

function F(e, t) {
    e && e.i && (ke.delete(e), e.i(t))
}

function K(e, t, n, s) {
    if (e && e.o) {
        if (ke.has(e)) return;
        ke.add(e), Y.c.push(() => {
            ke.delete(e), s && (n && e.d(1), s())
        }), e.o(t)
    } else s && s()
}
const Ht = {
    duration: 0
};

function J(e, t, n, s) {
    let l = t(e, n, {
            direction: "both"
        }),
        i = s ? 0 : 1,
        a = null,
        c = null,
        f = null,
        m;

    function h() {
        f && Dt(e, f)
    }

    function u(g, B) {
        const k = g.b - i;
        return B *= Math.abs(k), {
            a: i,
            b: g.b,
            d: k,
            duration: B,
            start: g.start,
            end: g.start + B,
            group: g.group
        }
    }

    function v(g) {
        const {
            delay: B = 0,
            duration: k = 300,
            easing: w = de,
            tick: j = U,
            css: N
        } = l || Ht, D = {
            start: _t() + B,
            b: g
        };
        g || (D.group = Y, Y.r += 1), "inert" in e && (g ? m !== void 0 && (e.inert = m) : (m = e.inert, e.inert = !0)), a || c ? c = D : (N && (h(), f = qe(e, i, g, k, B, w, N)), g && j(0, 1), a = u(D, k), Q(() => Pe(e, g, "start")), gt(E => {
            if (c && E > c.start && (a = u(c, k), c = null, Pe(e, a.b, "start"), N && (h(), f = qe(e, i, a.b, a.duration, 0, w, l.css))), a) {
                if (E >= a.end) j(i = a.b, 1 - i), Pe(e, a.b, "end"), c || (a.b ? h() : --a.group.r || x(a.group.c)), a = null;
                else if (E >= a.start) {
                    const R = E - a.start;
                    i = a.a + a.d * w(R / a.duration), j(i, 1 - i)
                }
            }
            return !!(a || c)
        }))
    }
    return {
        run(g) {
            Te(l) ? qt().then(() => {
                l = l({
                    direction: g ? "in" : "out"
                }), v(g)
            }) : v(g)
        },
        end() {
            h(), a = c = null
        }
    }
}

function se(e) {
    return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e)
}

function Xe(e, t) {
    e.d(1), t.delete(e.key)
}

function Ye(e, t, n, s, r, l, i, a, c, f, m, h) {
    let u = e.length,
        v = l.length,
        g = u;
    const B = {};
    for (; g--;) B[e[g].key] = g;
    const k = [],
        w = new Map,
        j = new Map,
        N = [];
    for (g = v; g--;) {
        const p = h(r, l, g),
            S = n(p);
        let L = i.get(S);
        L ? s && N.push(() => L.p(p, t)) : (L = f(S, p), L.c()), w.set(S, k[g] = L), S in B && j.set(S, Math.abs(g - B[S]))
    }
    const D = new Set,
        E = new Set;

    function R(p) {
        F(p, 1), p.m(a, m), i.set(p.key, p), m = p.first, v--
    }
    for (; u && v;) {
        const p = k[v - 1],
            S = e[u - 1],
            L = p.key,
            z = S.key;
        p === S ? (m = p.first, u--, v--) : w.has(z) ? !i.has(L) || D.has(L) ? R(p) : E.has(z) ? u-- : j.get(L) > j.get(z) ? (E.add(L), R(p)) : (D.add(z), u--) : (c(S, i), u--)
    }
    for (; u--;) {
        const p = e[u];
        w.has(p.key) || c(p, i)
    }
    for (; v;) R(k[v - 1]);
    return x(N), k
}

function Ce(e) {
    e && e.c()
}

function _e(e, t, n) {
    const {
        fragment: s,
        after_update: r
    } = e.$$;
    s && s.m(t, n), Q(() => {
        const l = e.$$.on_mount.map(ct).filter(Te);
        e.$$.on_destroy ? e.$$.on_destroy.push(...l) : x(l), e.$$.on_mount = []
    }), r.forEach(Q)
}

function me(e, t) {
    const n = e.$$;
    n.fragment !== null && (Gt(n.after_update), x(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
}

function Ut(e, t) {
    e.$$.dirty[0] === -1 && (le.push(e), Vt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}

function ve(e, t, n, s, r, l, i, a = [-1]) {
    const c = he;
    ce(e);
    const f = e.$$ = {
        fragment: null,
        ctx: [],
        props: l,
        update: U,
        not_equal: r,
        bound: Fe(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (c ? c.$$.context : [])),
        callbacks: Fe(),
        dirty: a,
        skip_bound: !1,
        root: t.target || c.$$.root
    };
    i && i(f.root);
    let m = !1;
    if (f.ctx = n ? n(e, t.props || {}, (h, u, ...v) => {
            const g = v.length ? v[0] : u;
            return f.ctx && r(f.ctx[h], f.ctx[h] = g) && (!f.skip_bound && f.bound[h] && f.bound[h](g), m && Ut(e, h)), u
        }) : [], f.update(), m = !0, x(f.before_update), f.fragment = s ? s(f.ctx) : !1, t.target) {
        if (t.hydrate) {
            const h = At(t.target);
            f.fragment && f.fragment.l(h), h.forEach(P)
        } else f.fragment && f.fragment.c();
        t.intro && F(e.$$.fragment), _e(e, t.target, t.anchor), yt()
    }
    ce(c)
}
class pe {
    constructor() {
        Se(this, "$$");
        Se(this, "$$set")
    }
    $destroy() {
        me(this, 1), this.$destroy = U
    }
    $on(t, n) {
        if (!Te(n)) return U;
        const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return s.push(n), () => {
            const r = s.indexOf(n);
            r !== -1 && s.splice(r, 1)
        }
    }
    $set(t) {
        this.$$set && !Et(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
    }
}
const Xt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(Xt);
const re = [];

function ye(e, t = U) {
    let n;
    const s = new Set;

    function r(a) {
        if (fe(e, a) && (e = a, n)) {
            const c = !re.length;
            for (const f of s) f[1](), re.push(f, e);
            if (c) {
                for (let f = 0; f < re.length; f += 2) re[f][0](re[f + 1]);
                re.length = 0
            }
        }
    }

    function l(a) {
        r(a(e))
    }

    function i(a, c = U) {
        const f = [a, c];
        return s.add(f), s.size === 1 && (n = t(r, l) || U), a(e), () => {
            s.delete(f), s.size === 0 && n && (n(), n = null)
        }
    }
    return {
        set: r,
        update: l,
        subscribe: i
    }
}
const kt = ye({
        fallbackResourceName: "debug",
        allowEscapeKey: !0
    }),
    Yt = ye(window.GetParentResourceName ? "LTD-Hud" : Le(kt).DEBUG_RESOURCE_NAME),
    jt = ye(!window.invokeNative),
    Kt = ye({
        hunger: {
            color: "yellow",
            icon: "pot-food",
            hide: 100
        },
        thirst: {
            color: "rgb(0, 238, 255)",
            icon: "glass",
            hide: 100
        },
        stress: {
            color: "rgb(139, 91, 252)",
            icon: "brain",
            hide: 0
        }
    });
var Bt = (e => (e.visible = "resource:visible", e.imageResize = "resource:imageSize", e.imageInvert = "resource:imageInvert", e.changeText = "resource:changeText", e.resetText = "resource:resetText", e))(Bt || {});
Le(jt);
Le(Yt);

function Ee(e, t) {
    const n = s => {
        const {
            action: r,
            data: l
        } = s.data;
        r === e && t(l)
    };
    Mt(() => window.addEventListener("message", n)), Wt(() => window.removeEventListener("message", n))
}
const Jt = [{
    action: Bt.visible,
    handler: e => {
        console.log("This is always listened to because it is in the AlwaysListened array.")
    }
}];

function Qt() {
    for (const e of Jt) Ee(e.action, e.handler)
}

function Zt(e) {
    const t = e - 1;
    return t * t * t + 1
}

function Ke(e) {
    return --e * e * e * e * e + 1
}

function ie(e, {
    delay: t = 0,
    duration: n = 400,
    easing: s = de
} = {}) {
    const r = +getComputedStyle(e).opacity;
    return {
        delay: t,
        duration: n,
        easing: s,
        css: l => `opacity: ${l*r}`
    }
}

function Je(e, {
    delay: t = 0,
    duration: n = 400,
    easing: s = Zt,
    start: r = 0,
    opacity: l = 0
} = {}) {
    const i = getComputedStyle(e),
        a = +i.opacity,
        c = i.transform === "none" ? "" : i.transform,
        f = 1 - r,
        m = a * (1 - l);
    return {
        delay: t,
        duration: n,
        easing: s,
        css: (h, u) => `
			transform: ${c} scale(${1-f*u});
			opacity: ${a-m*u}
		`
    }
}

function Qe(e, t, n) {
    const s = e.slice();
    return s[11] = t[n], s[13] = n, s
}

function Ze(e, t, n) {
    const s = e.slice();
    return s[11] = t[n], s[13] = n, s
}

function $e(e, t, n) {
    const s = e.slice();
    return s[15] = t[n], s
}

function xe(e) {
    let t, n, s, r, l, i, a, c, f, m, h, u, v, g, B, k, w, j, N, D, E, R, p = [],
        S = new Map,
        L, z, M = [],
        X = new Map,
        H, y, V = e[2] > 0 && et(e),
        ee = se(e[10]),
        W = [];
    for (let _ = 0; _ < ee.length; _ += 1) W[_] = nt($e(e, ee, _));

    function Ie(_, O) {
        if (_[6]) return xt;
        if (_[5]) return $t
    }
    let te = Ie(e),
        G = te && te(e),
        be = se(Array(7));
    const Me = _ => _[13];
    for (let _ = 0; _ < be.length; _ += 1) {
        let O = Ze(e, be, _),
            C = Me(O);
        S.set(C, p[_] = st(C, O))
    }
    let we = se(Array(3));
    const We = _ => _[13];
    for (let _ = 0; _ < we.length; _ += 1) {
        let O = Qe(e, we, _),
            C = We(O);
        X.set(C, M[_] = rt(C, O))
    }
    return {
        c() {
            t = b("div"), n = b("div"), s = b("div"), V && V.c(), r = T(), l = b("div"), i = b("i"), c = T(), f = b("span"), m = q(e[1]), u = T(), v = b("div"), g = b("div"), k = T(), w = b("div");
            for (let _ = 0; _ < W.length; _ += 1) W[_].c();
            N = T(), G && G.c(), D = T(), E = b("div"), R = b("div");
            for (let _ = 0; _ < p.length; _ += 1) p[_].c();
            L = T(), z = b("div");
            for (let _ = 0; _ < M.length; _ += 1) M[_].c();
            o(i, "class", "fa-solid fa-heart icon svelte-sjjc3e"), o(i, "style", a = e[1] == 0 && "color:red;"), o(f, "class", "barTxt svelte-sjjc3e"), o(f, "style", h = e[1] == 0 && "color:red;"), o(g, "class", "healthbar svelte-sjjc3e"), I(g, "width", e[1] + "%"), o(v, "class", "barBase svelte-sjjc3e"), o(v, "style", B = e[1] == 0 && "box-shadow: 0 0 1vh red;"), o(l, "class", "barWrapper svelte-sjjc3e"), o(w, "class", "statWrapper svelte-sjjc3e"), o(s, "class", "wasteWrapper svelte-sjjc3e"), o(n, "class", "barsWrapper svelte-sjjc3e"), o(t, "class", "leftDiv svelte-sjjc3e"), o(R, "class", "audioBarsWrapper svelte-sjjc3e"), o(z, "class", "audioRangWrapper svelte-sjjc3e"), o(E, "class", "rightDiv svelte-sjjc3e")
        },
        m(_, O) {
            A(_, t, O), d(t, n), d(n, s), V && V.m(s, null), d(s, r), d(s, l), d(l, i), d(l, c), d(l, f), d(f, m), d(l, u), d(l, v), d(v, g), d(s, k), d(s, w);
            for (let C = 0; C < W.length; C += 1) W[C] && W[C].m(w, null);
            A(_, N, O), G && G.m(_, O), A(_, D, O), A(_, E, O), d(E, R);
            for (let C = 0; C < p.length; C += 1) p[C] && p[C].m(R, null);
            d(E, L), d(E, z);
            for (let C = 0; C < M.length; C += 1) M[C] && M[C].m(z, null);
            y = !0
        },
        p(_, O) {
            if (_[2] > 0 ? V ? V.p(_, O) : (V = et(_), V.c(), V.m(s, r)) : V && (V.d(1), V = null), (!y || O & 2 && a !== (a = _[1] == 0 && "color:red;")) && o(i, "style", a), (!y || O & 2) && $(m, _[1]), (!y || O & 2 && h !== (h = _[1] == 0 && "color:red;")) && o(f, "style", h), (!y || O & 2) && I(g, "width", _[1] + "%"), (!y || O & 2 && B !== (B = _[1] == 0 && "box-shadow: 0 0 1vh red;")) && o(v, "style", B), O & 1792) {
                ee = se(_[10]);
                let C;
                for (C = 0; C < ee.length; C += 1) {
                    const ze = $e(_, ee, C);
                    W[C] ? W[C].p(ze, O) : (W[C] = nt(ze), W[C].c(), W[C].m(w, null))
                }
                for (; C < W.length; C += 1) W[C].d(1);
                W.length = ee.length
            }
            te !== (te = Ie(_)) && (G && G.d(1), G = te && te(_), G && (G.c(), G.m(D.parentNode, D))), O & 152 && (be = se(Array(7)), p = Ye(p, O, Me, 1, _, be, S, R, Xe, st, null, Ze)), O & 128 && (we = se(Array(3)), M = Ye(M, O, We, 1, _, we, X, z, Xe, rt, null, Qe))
        },
        i(_) {
            y || (_ && Q(() => {
                y && (j || (j = J(t, ie, {
                    duration: 100
                }, !0)), j.run(1))
            }), _ && Q(() => {
                y && (H || (H = J(E, ie, {
                    duration: 100
                }, !0)), H.run(1))
            }), y = !0)
        },
        o(_) {
            _ && (j || (j = J(t, ie, {
                duration: 100
            }, !1)), j.run(0)), _ && (H || (H = J(E, ie, {
                duration: 100
            }, !1)), H.run(0)), y = !1
        },
        d(_) {
            _ && (P(t), P(N), P(D), P(E)), V && V.d(), Pt(W, _), _ && j && j.end(), G && G.d(_);
            for (let O = 0; O < p.length; O += 1) p[O].d();
            for (let O = 0; O < M.length; O += 1) M[O].d();
            _ && H && H.end()
        }
    }
}

function et(e) {
    let t, n, s, r, l, i, a, c, f, m, h;
    return {
        c() {
            t = b("div"), n = b("i"), s = T(), r = b("span"), l = q(e[2]), i = T(), a = b("div"), c = b("div"), c.innerHTML = '<div class="armorBarPill svelte-sjjc3e"></div> <div class="armorBarPill svelte-sjjc3e"></div> <div class="armorBarPill svelte-sjjc3e"></div> <div class="armorBarPill svelte-sjjc3e"></div> <div class="armorBarPill svelte-sjjc3e"></div>', f = T(), m = b("div"), h = b("div"), h.innerHTML = '<div class="armorBarPill svelte-sjjc3e" style="background-color: #2489db; box-shadow: 0 0 0.5vh #2489db; "></div> <div class="armorBarPill svelte-sjjc3e" style="background-color: #2489db; box-shadow: 0 0 0.5vh #2489db; "></div> <div class="armorBarPill svelte-sjjc3e" style="background-color: #2489db; box-shadow: 0 0 0.5vh #2489db; "></div> <div class="armorBarPill svelte-sjjc3e" style="background-color: #2489db; box-shadow: 0 0 0.5vh #2489db; "></div> <div class="armorBarPill svelte-sjjc3e" style="background-color: #2489db; box-shadow: 0 0 0.5vh #2489db; "></div>', o(n, "class", "fa-solid fa-shield icon svelte-sjjc3e"), o(r, "class", "barTxt svelte-sjjc3e"), I(r, "color", "#2489db"), o(c, "class", "armorBarBase svelte-sjjc3e"), o(h, "class", "armorBarBase svelte-sjjc3e"), o(m, "class", "armorBar svelte-sjjc3e"), I(m, "width", e[2] + "%"), o(a, "class", "armorBarWrapper svelte-sjjc3e"), o(t, "class", "barWrapper svelte-sjjc3e")
        },
        m(u, v) {
            A(u, t, v), d(t, n), d(t, s), d(t, r), d(r, l), d(t, i), d(t, a), d(a, c), d(a, f), d(a, m), d(m, h)
        },
        p(u, v) {
            v & 4 && $(l, u[2]), v & 4 && I(m, "width", u[2] + "%")
        },
        d(u) {
            u && P(t)
        }
    }
}

function tt(e) {
    let t, n, s, r, l, i, a;
    return {
        c() {
            t = b("div"), n = b("div"), s = b("div"), r = T(), l = b("i"), a = T(), o(s, "class", "statBar svelte-sjjc3e"), I(s, "height", e[8][e[15]] + "%"), I(s, "background-color", e[9][e[15]].color), I(s, "box-shadow", "0 0 0.5vh " + e[9][e[15]].color), o(n, "class", "statBarBase svelte-sjjc3e"), o(l, "class", i = "fa-light fa-" + e[9][e[15]].icon + " barIcon svelte-sjjc3e"), o(t, "class", "stat svelte-sjjc3e")
        },
        m(c, f) {
            A(c, t, f), d(t, n), d(n, s), d(t, r), d(t, l), d(t, a)
        },
        p(c, f) {
            f & 256 && I(s, "height", c[8][c[15]] + "%"), f & 512 && I(s, "background-color", c[9][c[15]].color), f & 512 && I(s, "box-shadow", "0 0 0.5vh " + c[9][c[15]].color), f & 512 && i !== (i = "fa-light fa-" + c[9][c[15]].icon + " barIcon svelte-sjjc3e") && o(l, "class", i)
        },
        d(c) {
            c && P(t)
        }
    }
}

function nt(e) {
    let t, n = e[8][e[15]] && e[9][e[15]] && e[9][e[15]].hide != e[8][e[15]] && tt(e);
    return {
        c() {
            n && n.c(), t = ge()
        },
        m(s, r) {
            n && n.m(s, r), A(s, t, r)
        },
        p(s, r) {
            s[8][s[15]] && s[9][s[15]] && s[9][s[15]].hide != s[8][s[15]] ? n ? n.p(s, r) : (n = tt(s), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null)
        },
        d(s) {
            s && P(t), n && n.d(s)
        }
    }
}

function $t(e) {
    let t;
    return {
        c() {
            t = b("i"), o(t, "class", "fa-regular fa-walkie-talkie talkingIcon svelte-sjjc3e")
        },
        m(n, s) {
            A(n, t, s)
        },
        d(n) {
            n && P(t)
        }
    }
}

function xt(e) {
    let t;
    return {
        c() {
            t = b("i"), o(t, "class", "fa-regular fa-phone talkingIcon svelte-sjjc3e")
        },
        m(n, s) {
            A(n, t, s)
        },
        d(n) {
            n && P(t)
        }
    }
}

function st(e, t) {
    let n, s, r;
    return {
        key: e,
        first: null,
        c() {
            n = b("div"), o(n, "class", s = "audioBar " + (t[4] ? "audioRadio" : t[3] && "audioTalking") + " svelte-sjjc3e"), o(n, "style", r = t[7] == 1 ? "max-height: 50%" : t[7] == 2 && "max-height: 70%"), this.first = n
        },
        m(l, i) {
            A(l, n, i)
        },
        p(l, i) {
            t = l, i & 24 && s !== (s = "audioBar " + (t[4] ? "audioRadio" : t[3] && "audioTalking") + " svelte-sjjc3e") && o(n, "class", s), i & 128 && r !== (r = t[7] == 1 ? "max-height: 50%" : t[7] == 2 && "max-height: 70%") && o(n, "style", r)
        },
        d(l) {
            l && P(n)
        }
    }
}

function rt(e, t) {
    let n, s;
    return {
        key: e,
        first: null,
        c() {
            n = b("div"), o(n, "class", s = Ge(t[7] < t[13] + 1 ? "audioRangeBar" : "audioBarActive") + " svelte-sjjc3e"), this.first = n
        },
        m(r, l) {
            A(r, n, l)
        },
        p(r, l) {
            t = r, l & 128 && s !== (s = Ge(t[7] < t[13] + 1 ? "audioRangeBar" : "audioBarActive") + " svelte-sjjc3e") && o(n, "class", s)
        },
        d(r) {
            r && P(n)
        }
    }
}

function en(e) {
    let t, n = e[0] && xe(e);
    return {
        c() {
            n && n.c(), t = ge()
        },
        m(s, r) {
            n && n.m(s, r), A(s, t, r)
        },
        p(s, [r]) {
            s[0] ? n ? (n.p(s, r), r & 1 && F(n, 1)) : (n = xe(s), n.c(), F(n, 1), n.m(t.parentNode, t)) : n && (bt(), K(n, 1, 1, () => {
                n = null
            }), wt())
        },
        i(s) {
            F(n)
        },
        o(s) {
            K(n)
        },
        d(s) {
            s && P(t), n && n.d(s)
        }
    }
}

function tn(e, t, n) {
    let s;
    je(e, Kt, g => n(9, s = g));
    let r = !1,
        l = 47,
        i = 10,
        a = !1,
        c = !1,
        f = !1,
        m = !1,
        h = 0,
        u = {
            hunger: 90,
            thirst: 50,
            stress: 10
        },
        v = ["hunger", "thirst", "stress"];
    return Ee("updateStats", g => {
        n(0, r = g.showing), n(1, l = g.health), n(2, i = g.armor), n(3, a = g.isTalking), n(4, c = g.talkingOnRadio), n(5, f = g.onRadio), n(6, m = g.onPhone), n(7, h = g.voiceRange), n(8, u = g.stats)
    }), [r, l, i, a, c, f, m, h, u, s, v]
}
class nn extends pe {
    constructor(t) {
        super(), ve(this, t, tn, en, fe, {})
    }
}

function lt(e) {
    return Object.prototype.toString.call(e) === "[object Date]"
}

function Re(e, t) {
    if (e === t || e !== e) return () => e;
    const n = typeof e;
    if (n !== typeof t || Array.isArray(e) !== Array.isArray(t)) throw new Error("Cannot interpolate values of different type");
    if (Array.isArray(e)) {
        const s = t.map((r, l) => Re(e[l], r));
        return r => s.map(l => l(r))
    }
    if (n === "object") {
        if (!e || !t) throw new Error("Object cannot be null");
        if (lt(e) && lt(t)) {
            e = e.getTime(), t = t.getTime();
            const l = t - e;
            return i => new Date(e + i * l)
        }
        const s = Object.keys(t),
            r = {};
        return s.forEach(l => {
            r[l] = Re(e[l], t[l])
        }), l => {
            const i = {};
            return s.forEach(a => {
                i[a] = r[a](l)
            }), i
        }
    }
    if (n === "number") {
        const s = t - e;
        return r => e + r * s
    }
    throw new Error(`Cannot interpolate ${n} values`)
}

function it(e, t = {}) {
    const n = ye(e);
    let s, r = e;

    function l(i, a) {
        if (e == null) return n.set(e = i), Promise.resolve();
        r = i;
        let c = s,
            f = !1,
            {
                delay: m = 0,
                duration: h = 400,
                easing: u = de,
                interpolate: v = Re
            } = Ve(Ve({}, t), a);
        if (h === 0) return c && (c.abort(), c = null), n.set(e = r), Promise.resolve();
        const g = _t() + m;
        let B;
        return s = gt(k => {
            if (k < g) return !0;
            f || (B = v(e, i), typeof h == "function" && (h = h(e, i)), f = !0), c && (c.abort(), c = null);
            const w = k - g;
            return w > h ? (n.set(e = i), !1) : (n.set(e = B(u(w / h))), !0)
        }), s.promise
    }
    return {
        set: l,
        update: (i, a) => l(i(r, e), a),
        subscribe: n.subscribe
    }
}

function ot(e) {
    let t, n, s, r;
    return {
        c() {
            t = Z("circle"), o(t, "opacity", e[4]), o(t, "fill", "transparent"), o(t, "stroke", e[3]), o(t, "stroke-dashoffset", n = e[15] - e[10] / 100 * e[15]), o(t, "stroke-dasharray", s = e[15] + " " + e[15]), o(t, "stroke-width", e[6]), o(t, "r", e[14]), o(t, "cx", e[13]), o(t, "cy", e[13]), o(t, "transform", r = "rotate(-90, " + e[13] + ", " + e[13] + ")")
        },
        m(l, i) {
            A(l, t, i)
        },
        p(l, i) {
            i & 16 && o(t, "opacity", l[4]), i & 8 && o(t, "stroke", l[3]), i & 33792 && n !== (n = l[15] - l[10] / 100 * l[15]) && o(t, "stroke-dashoffset", n), i & 32768 && s !== (s = l[15] + " " + l[15]) && o(t, "stroke-dasharray", s), i & 64 && o(t, "stroke-width", l[6]), i & 16384 && o(t, "r", l[14]), i & 8192 && o(t, "cx", l[13]), i & 8192 && o(t, "cy", l[13]), i & 8192 && r !== (r = "rotate(-90, " + l[13] + ", " + l[13] + ")") && o(t, "transform", r)
        },
        d(l) {
            l && P(t)
        }
    }
}

function at(e) {
    let t, n, s, r, l;
    return {
        c() {
            t = Z("circle"), o(t, "fill", e[1]), o(t, "fill-opacity", e[2]), o(t, "stroke", "transparent"), o(t, "stroke-dashoffset", 0), o(t, "stroke-dasharray", n = e[15] + " " + e[15]), o(t, "stroke-width", s = e[6] - .6), o(t, "r", r = e[14] - e[6] / 2 + .1), o(t, "cx", e[13]), o(t, "cy", e[13]), o(t, "transform", l = "rotate(-90, " + e[13] + ", " + e[13] + ")")
        },
        m(i, a) {
            A(i, t, a)
        },
        p(i, a) {
            a & 2 && o(t, "fill", i[1]), a & 4 && o(t, "fill-opacity", i[2]), a & 32768 && n !== (n = i[15] + " " + i[15]) && o(t, "stroke-dasharray", n), a & 64 && s !== (s = i[6] - .6) && o(t, "stroke-width", s), a & 16448 && r !== (r = i[14] - i[6] / 2 + .1) && o(t, "r", r), a & 8192 && o(t, "cx", i[13]), a & 8192 && o(t, "cy", i[13]), a & 8192 && l !== (l = "rotate(-90, " + i[13] + ", " + i[13] + ")") && o(t, "transform", l)
        },
        d(i) {
            i && P(t)
        }
    }
}

function ft(e) {
    let t, n = Math.floor(e[17]) + "",
        s, r, l;
    return {
        c() {
            t = Z("text"), s = q(n), r = Z("text"), l = q(e[12]), o(t, "class", "vehicle-number svelte-4yl9he"), o(t, "x", "50%"), o(t, "y", "45%"), o(t, "dominant-baseline", "middle"), o(t, "text-anchor", "middle"), o(r, "class", "vehicle-text svelte-4yl9he"), o(r, "x", "50%"), o(r, "y", "70%"), o(r, "dominant-baseline", "middle"), o(r, "text-anchor", "middle")
        },
        m(i, a) {
            A(i, t, a), d(t, s), A(i, r, a), d(r, l)
        },
        p(i, a) {
            a & 131072 && n !== (n = Math.floor(i[17]) + "") && $(s, n), a & 4096 && $(l, i[12])
        },
        d(i) {
            i && (P(t), P(r))
        }
    }
}

function sn(e) {
    let t, n, s, r, l, i, a, c, f = e[0] && ot(e),
        m = e[11] && at(e),
        h = e[12] && ft(e);
    return {
        c() {
            t = Z("svg"), n = Z("g"), f && f.c(), s = ge(), m && m.c(), r = Z("circle"), h && h.c(), o(r, "stroke", e[5]), o(r, "fill", "transparent"), o(r, "stroke-dashoffset", e[16]), o(r, "stroke-dasharray", l = e[15] + " " + e[15]), o(r, "stroke-width", e[6]), o(r, "r", e[14]), o(r, "cx", e[13]), o(r, "cy", e[13]), o(r, "transform", i = "rotate(-90, " + e[13] + ", " + e[13] + ")"), I(r, "filter", "drop-shadow(0 0 0.1vh " + e[5] + ")"), o(n, "transform", a = `
	  ` + (e[7] > 0 ? "rotate(" + e[7] + " " + e[13] + " " + e[13] + ")" : "") + `
	  ` + ("translate(" + e[8] + " " + e[9] + ")")), o(t, "width", "100%"), o(t, "height", "100%"), o(t, "viewBox", c = "0 0 " + e[13] * 2 + " " + e[13] * 2), o(t, "overflow", "visible")
        },
        m(u, v) {
            A(u, t, v), d(t, n), f && f.m(n, null), d(n, s), m && m.m(n, null), d(n, r), h && h.m(t, null)
        },
        p(u, [v]) {
            u[0] ? f ? f.p(u, v) : (f = ot(u), f.c(), f.m(n, s)) : f && (f.d(1), f = null), u[11] ? m ? m.p(u, v) : (m = at(u), m.c(), m.m(n, r)) : m && (m.d(1), m = null), v & 32 && o(r, "stroke", u[5]), v & 65536 && o(r, "stroke-dashoffset", u[16]), v & 32768 && l !== (l = u[15] + " " + u[15]) && o(r, "stroke-dasharray", l), v & 64 && o(r, "stroke-width", u[6]), v & 16384 && o(r, "r", u[14]), v & 8192 && o(r, "cx", u[13]), v & 8192 && o(r, "cy", u[13]), v & 8192 && i !== (i = "rotate(-90, " + u[13] + ", " + u[13] + ")") && o(r, "transform", i), v & 32 && I(r, "filter", "drop-shadow(0 0 0.1vh " + u[5] + ")"), v & 9088 && a !== (a = `
	  ` + (u[7] > 0 ? "rotate(" + u[7] + " " + u[13] + " " + u[13] + ")" : "") + `
	  ` + ("translate(" + u[8] + " " + u[9] + ")")) && o(n, "transform", a), u[12] ? h ? h.p(u, v) : (h = ft(u), h.c(), h.m(t, null)) : h && (h.d(1), h = null), v & 8192 && c !== (c = "0 0 " + u[13] * 2 + " " + u[13] * 2) && o(t, "viewBox", c)
        },
        i: U,
        o: U,
        d(u) {
            u && P(t), f && f.d(), m && m.d(), h && h.d()
        }
    }
}

function rn(e, t, n) {
    let s, r, {
            displayOutline: l = !0
        } = t,
        {
            height: i = 50
        } = t,
        {
            innerColor: a = "#212121"
        } = t,
        {
            innerColorOpacity: c = 1
        } = t,
        {
            outlineColor: f = "red"
        } = t,
        {
            outlineColorOpacity: m = .4
        } = t,
        {
            progressColor: h = "red"
        } = t,
        {
            progressValue: u = 100
        } = t,
        {
            ringSize: v = 4
        } = t,
        {
            rotateDegree: g = 0
        } = t,
        {
            translateX: B = 0
        } = t,
        {
            translateY: k = 0
        } = t,
        {
            width: w = 50
        } = t,
        {
            maxLengthDisplay: j = 100
        } = t,
        {
            maxProgressValue: N = 100
        } = t,
        {
            showInnerBG: D = !1
        } = t,
        {
            displayNumber: E = 0
        } = t,
        {
            text: R = ""
        } = t,
        p = 25,
        S = u / N * 100;
    const L = it(S, {
        duration: 200,
        easing: de
    });
    je(e, L, y => n(26, s = y));
    const z = it(E, {
        duration: 600,
        easing: de
    });
    je(e, z, y => n(17, r = y));
    let M = p - v / 2,
        X = M * 2 * Math.PI,
        H = X - s / 100 * X;
    return e.$$set = y => {
        "displayOutline" in y && n(0, l = y.displayOutline), "height" in y && n(21, i = y.height), "innerColor" in y && n(1, a = y.innerColor), "innerColorOpacity" in y && n(2, c = y.innerColorOpacity), "outlineColor" in y && n(3, f = y.outlineColor), "outlineColorOpacity" in y && n(4, m = y.outlineColorOpacity), "progressColor" in y && n(5, h = y.progressColor), "progressValue" in y && n(20, u = y.progressValue), "ringSize" in y && n(6, v = y.ringSize), "rotateDegree" in y && n(7, g = y.rotateDegree), "translateX" in y && n(8, B = y.translateX), "translateY" in y && n(9, k = y.translateY), "width" in y && n(22, w = y.width), "maxLengthDisplay" in y && n(10, j = y.maxLengthDisplay), "maxProgressValue" in y && n(23, N = y.maxProgressValue), "showInnerBG" in y && n(11, D = y.showInnerBG), "displayNumber" in y && n(24, E = y.displayNumber), "text" in y && n(12, R = y.text)
    }, e.$$.update = () => {
        e.$$.dirty & 42991616 && (n(20, u = Math.min(u, N)), n(25, S = u / N * 100), L.set(S)), e.$$.dirty & 16777216 && z.set(E), e.$$.dirty & 6291456 && n(13, p = i > w ? i / 2 : w / 2), e.$$.dirty & 24640 && (n(14, M = p - v / 2), n(15, X = M * 2 * Math.PI)), e.$$.dirty & 67142656 && n(16, H = X - s / (100 / j) / 100 * X)
    }, [l, a, c, f, m, h, v, g, B, k, j, D, R, p, M, X, H, r, L, z, u, i, w, N, E, S, s]
}
class ln extends pe {
    constructor(t) {
        super(), ve(this, t, rn, sn, fe, {
            displayOutline: 0,
            height: 21,
            innerColor: 1,
            innerColorOpacity: 2,
            outlineColor: 3,
            outlineColorOpacity: 4,
            progressColor: 5,
            progressValue: 20,
            ringSize: 6,
            rotateDegree: 7,
            translateX: 8,
            translateY: 9,
            width: 22,
            maxLengthDisplay: 10,
            maxProgressValue: 23,
            showInnerBG: 11,
            displayNumber: 24,
            text: 12
        })
    }
}

function on(e) {
    let t, n, s, r, l, i, a, c, f, m, h, u, v, g, B, k, w;
    return {
        c() {
            t = b("div"), n = b("div"), s = b("i"), r = T(), l = q(e[0]), i = T(), a = b("div"), c = b("i"), f = T(), m = q(e[1]), h = T(), u = b("div"), v = b("i"), g = T(), B = q(e[2]), o(s, "class", "fa-regular fa-compass icon svelte-1kds20a"), o(n, "class", "keyWrapper svelte-1kds20a"), o(c, "class", "fa-regular fa-location-dot icon svelte-1kds20a"), o(a, "class", "keyWrapper svelte-1kds20a"), o(v, "class", "fa-regular fa-map icon svelte-1kds20a"), o(u, "class", "keyWrapper svelte-1kds20a"), o(t, "class", "wrapper svelte-1kds20a")
        },
        m(j, N) {
            A(j, t, N), d(t, n), d(n, s), d(n, r), d(n, l), d(t, i), d(t, a), d(a, c), d(a, f), d(a, m), d(t, h), d(t, u), d(u, v), d(u, g), d(u, B), w = !0
        },
        p(j, [N]) {
            (!w || N & 1) && $(l, j[0]), (!w || N & 2) && $(m, j[1]), (!w || N & 4) && $(B, j[2])
        },
        i(j) {
            w || (j && Q(() => {
                w && (k || (k = J(t, ie, {
                    duration: 100
                }, !0)), k.run(1))
            }), w = !0)
        },
        o(j) {
            j && (k || (k = J(t, ie, {
                duration: 100
            }, !1)), k.run(0)), w = !1
        },
        d(j) {
            j && P(t), j && k && k.end()
        }
    }
}

function an(e, t, n) {
    let s = "N",
        r = "Strawberry Ave x Olympic Fwy",
        l = "Strawberry";
    return Ee("compasstick", i => {
        n(0, s = i.direction), n(1, r = i.roads), n(2, l = i.zone)
    }), [s, r, l]
}
class fn extends pe {
    constructor(t) {
        super(), ve(this, t, an, on, fe, {})
    }
}

function ut(e) {
    let t, n, s, r, l, i, a, c, f, m, h, u, v, g, B, k, w, j, N, D, E, R;
    return t = new fn({}), r = new ln({
        props: {
            maxLengthDisplay: 72,
            rotateDegree: 230,
            ringSize: 3.5,
            progressColor: e[1] < .9 ? "greenyellow" : "#FF3838",
            outlineColor: "black",
            outlineColorOpacity: .6,
            height: 60,
            width: 60,
            progressValue: e[1],
            text: "MPH",
            displayNumber: e[2],
            maxProgressValue: 1
        }
    }), {
        c() {
            Ce(t.$$.fragment), n = T(), s = b("div"), Ce(r.$$.fragment), l = T(), i = b("div"), a = b("div"), c = q(`FUEL
				`), f = b("div"), m = b("div"), h = T(), u = b("div"), v = q(`ENG
				`), g = b("div"), B = b("div"), k = T(), w = b("div"), j = q(`BELT
				`), N = b("div"), D = b("div"), o(m, "class", "statBar svelte-11kj79j"), I(m, "width", e[3] + "%"), I(m, "background-color", "rgb(255, 185, 34)"), o(f, "class", "statBarBase svelte-11kj79j"), o(a, "class", "statWrapper svelte-11kj79j"), o(B, "class", "statBar svelte-11kj79j"), I(B, "width", (e[4] ? 100 : 0) + "%"), o(g, "class", "statBarBase svelte-11kj79j"), o(u, "class", "statWrapper svelte-11kj79j"), o(D, "class", "statBar svelte-11kj79j"), I(D, "width", (e[5] ? 100 : 0) + "%"), o(N, "class", "statBarBase svelte-11kj79j"), o(w, "class", "statWrapper svelte-11kj79j"), o(i, "class", "statsWrapper svelte-11kj79j"), o(s, "class", "speedometer svelte-11kj79j")
        },
        m(p, S) {
            _e(t, p, S), A(p, n, S), A(p, s, S), _e(r, s, null), d(s, l), d(s, i), d(i, a), d(a, c), d(a, f), d(f, m), d(i, h), d(i, u), d(u, v), d(u, g), d(g, B), d(i, k), d(i, w), d(w, j), d(w, N), d(N, D), R = !0
        },
        p(p, S) {
            e = p;
            const L = {};
            S & 2 && (L.progressColor = e[1] < .9 ? "greenyellow" : "#FF3838"), S & 2 && (L.progressValue = e[1]), S & 4 && (L.displayNumber = e[2]), r.$set(L), (!R || S & 8) && I(m, "width", e[3] + "%"), (!R || S & 16) && I(B, "width", (e[4] ? 100 : 0) + "%"), (!R || S & 32) && I(D, "width", (e[5] ? 100 : 0) + "%")
        },
        i(p) {
            R || (F(t.$$.fragment, p), F(r.$$.fragment, p), p && Q(() => {
                R && (E || (E = J(s, Je, {
                    duration: 200,
                    opacity: 0,
                    start: 0,
                    easing: Ke
                }, !0)), E.run(1))
            }), R = !0)
        },
        o(p) {
            K(t.$$.fragment, p), K(r.$$.fragment, p), p && (E || (E = J(s, Je, {
                duration: 200,
                opacity: 0,
                start: 0,
                easing: Ke
            }, !1)), E.run(0)), R = !1
        },
        d(p) {
            p && (P(n), P(s)), me(t, p), me(r), p && E && E.end()
        }
    }
}

function un(e) {
    let t, n, s = e[0] && ut(e);
    return {
        c() {
            s && s.c(), t = ge()
        },
        m(r, l) {
            s && s.m(r, l), A(r, t, l), n = !0
        },
        p(r, [l]) {
            r[0] ? s ? (s.p(r, l), l & 1 && F(s, 1)) : (s = ut(r), s.c(), F(s, 1), s.m(t.parentNode, t)) : s && (bt(), K(s, 1, 1, () => {
                s = null
            }), wt())
        },
        i(r) {
            n || (F(s), n = !0)
        },
        o(r) {
            K(s), n = !1
        },
        d(r) {
            r && P(t), s && s.d(r)
        }
    }
}

function cn(e, t, n) {
    let s = !1,
        r = 0,
        l = 0,
        i = 50,
        a = !1,
        c = !1;
    return Ee("updateVehicle", f => {
        n(0, s = f.showing), n(1, r = f.rpm), n(2, l = f.speed), n(3, i = f.fuel), n(4, a = f.engineOn), n(5, c = f.beltOn)
    }), [s, r, l, i, a, c]
}
class dn extends pe {
    constructor(t) {
        super(), ve(this, t, cn, un, fe, {})
    }
}

function hn(e) {
    let t, n, s, r, l, i, a;
    n = new nn({}), r = new dn({});
    let c = !1;
    return {
        c() {
            t = b("main"), Ce(n.$$.fragment), s = T(), Ce(r.$$.fragment), l = T(), i = ge(), o(t, "class", "svelte-1y4be3q")
        },
        m(f, m) {
            A(f, t, m), _e(n, t, null), d(t, s), _e(r, t, null), A(f, l, m), A(f, i, m), a = !0
        },
        p(f, [m]) {},
        i(f) {
            a || (F(n.$$.fragment, f), F(r.$$.fragment, f), F(c), a = !0)
        },
        o(f) {
            K(n.$$.fragment, f), K(r.$$.fragment, f), K(c), a = !1
        },
        d(f) {
            f && (P(t), P(l), P(i)), me(n), me(r)
        }
    }
}

function _n(e, t, n) {
    let s;
    return je(e, jt, r => n(0, s = r)), kt.set({
        fallbackResourceName: "debug",
        allowEscapeKey: !0
    }), Qt(), [s]
}
class mn extends pe {
    constructor(t) {
        super(), ve(this, t, _n, hn, fe, {})
    }
}
new mn({
    target: document.getElementById("app")
});