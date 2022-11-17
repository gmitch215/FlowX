import {
  S as ie,
  i as oe,
  s as te,
  e as S,
  a as v,
  b as D,
  c as He,
  l as X,
  n as re,
  d as H,
  r as Fe,
  f as ln,
  o as Oe,
  g as ke,
  h as Z,
  j as pn,
  w as Ze,
  q as Ce,
  k as mn,
  m as x,
  p as z,
  t as le,
  u as U,
  v as C,
  x as Se,
  y as Ve,
  z as T,
  A as E,
  B as Xe,
  C as ee,
  D as V,
  E as K,
  F as k,
  G as ce,
  H as de,
  I as gn,
  J as Ue,
  K as ge,
  L as ct,
  M as gt,
  N as on,
  O as vn,
  P as Ge,
  Q as _e,
  R as ve,
  T as Ne,
  U as vt,
  V as dt,
  W as ht,
  X as _t,
  Y as pt,
  Z as Ke,
  _ as Ye,
  $ as sn,
  a0 as he,
  a1 as bn,
  a2 as rt,
  a3 as bt,
  a4 as wn,
  a5 as wt,
  a6 as kn,
} from './vendor.dae6e1c7.js';
const yn = function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) l(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const s of o.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && l(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
      i.crossorigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossorigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function l(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = t(i);
    fetch(i.href, o);
  }
};
yn();
class Sn {
  constructor(e) {
    (this.callbacks = { any: [] }),
      (this.data = e),
      this.loadFromLocalStorage();
  }
  setValue(e, t) {
    if (((this.data[e].value = t), this.callbacks[e]))
      for (let l of this.callbacks[e]) l(e);
    for (let l of this.callbacks.any) l(e);
  }
  subscribe(e, t) {
    for (let l of e)
      this.callbacks[l] || (this.callbacks[l] = []),
        this.callbacks[l].push(t),
        t(l);
    return () => {
      for (let l of e)
        this.callbacks[l] = this.callbacks[l].filter((i) => i != t);
    };
  }
  saveToLocalStorage() {
    let e = {};
    for (var t in this.data)
      this.data[t].value != this.data[t].auto && (e[t] = this.data[t].value);
    localStorage.setItem('settings', JSON.stringify(e));
  }
  loadFromLocalStorage() {
    if (localStorage.getItem('settings')) {
      let t = JSON.parse(localStorage.getItem('settings'));
      try {
        for (var e in t) this.setValue(e, t[e]);
      } catch {
        localStorage.setItem('settings', JSON.stringify({})),
          this.resetToAuto();
      }
    }
  }
  resetToAuto() {
    for (var e in this.data) this.setValue(e, this.data[e].auto);
  }
  randomize() {
    for (var e in this.data) {
      let t = this.data[e];
      t.type == 'slider'
        ? this.setValue(
            e,
            t.detail.min + Math.random() * (t.detail.max - t.detail.min)
          )
        : t.type == 'radio'
        ? this.setValue(e, Math.floor(Math.random() * t.detail.options.length))
        : t.type == 'toggle' && this.setValue(e, Math.random() < 0.5);
    }
  }
}
let G = new Sn({
  debateStyle: {
    name: 'Debate Style',
    type: 'radio',
    value: 0,
    auto: 0,
    detail: { options: ['Policy', 'Public forum', 'Lincoln douglass'] },
    info: "Already created flows won't be affected by this setting",
  },
  colorTheme: {
    name: 'Color theme',
    type: 'radio',
    value: 0,
    auto: 0,
    detail: { options: ['System default', 'Light theme', 'Dark theme'] },
  },
  columnWidth: {
    name: 'Column width',
    type: 'slider',
    value: 150,
    auto: 150,
    detail: { min: 50, max: 300, step: 1 },
  },
  accentHue: {
    name: 'Primary color hue',
    type: 'slider',
    value: 192,
    auto: 192,
    detail: { min: 0, max: 360, step: 1, hue: !0 },
    info: 'This color will be used for aff',
  },
  accentSecondaryHue: {
    name: 'Secondary color hue',
    type: 'slider',
    value: 26,
    auto: 26,
    detail: { min: 0, max: 360, step: 1, hue: !0 },
    info: 'This color will be used for neg',
  },
  transitionSpeed: {
    name: 'Transition duration',
    type: 'slider',
    value: 300,
    auto: 300,
    detail: { min: 0, max: 1e3, step: 1 },
  },
  useTooltips: { name: 'Use tooltips', type: 'toggle', value: !0, auto: !0 },
  fontSize: {
    name: 'Font size',
    type: 'slider',
    value: 0.9,
    auto: 0.9,
    detail: { min: 0.2, max: 2, step: 0.01 },
  },
  fontWeight: {
    name: 'Font weight',
    type: 'slider',
    value: 300,
    auto: 300,
    detail: { min: 100, max: 900, step: 50 },
  },
  fontFamily: {
    name: 'Font',
    type: 'radio',
    value: 0,
    auto: 0,
    detail: {
      options: ['Merriweather Sans', 'Helvetica', 'Georgia', 'Courier New'],
      customOption: !0,
      customOptionValue: '',
    },
    info: 'Type in a custom font name if it is installed on your computer',
  },
  borderRadius: {
    name: 'Border radius',
    type: 'slider',
    value: 12,
    auto: 12,
    detail: { min: 0, max: 30, step: 1 },
  },
  padding: {
    name: 'Padding',
    value: 8,
    auto: 8,
    type: 'slider',
    detail: { min: 0, max: 30, step: 1 },
  },
  gap: {
    name: 'Grid Gap',
    value: 12,
    auto: 12,
    type: 'slider',
    detail: { min: 0, max: 30, step: 1 },
  },
});
function Fn(n) {
  let e, t, l, i;
  return {
    c() {
      (e = S('textarea')),
        v(e, 'spellcheck', 'false'),
        v(e, 'placeholder', n[1]),
        v(e, 'style', (t = `--white-space:${n[3]};`)),
        v(e, 'class', 'svelte-1ggsm2f');
    },
    m(o, s) {
      D(o, e, s),
        He(e, n[0]),
        n[13](e),
        l ||
          ((i = [
            X(e, 'input', n[12]),
            X(e, 'load', n[2]),
            X(e, 'input', n[2]),
            X(e, 'input', n[7]),
            X(e, 'beforeinput', n[8]),
            X(e, 'keydown', n[9]),
            X(e, 'focus', n[10]),
            X(e, 'blur', n[11]),
          ]),
          (l = !0));
    },
    p(o, [s]) {
      s & 2 && v(e, 'placeholder', o[1]),
        s & 8 && t !== (t = `--white-space:${o[3]};`) && v(e, 'style', t),
        s & 1 && He(e, o[0]);
    },
    i: re,
    o: re,
    d(o) {
      o && H(e), n[13](null), (l = !1), Fe(i);
    },
  };
}
function Cn(n, e, t) {
  let { value: l } = e,
    { placeholder: i = '' } = e,
    { nowrap: o = !1 } = e,
    s,
    a;
  function u() {
    a &&
      (t(4, (a.value = a.value.replace(/\r?\n|\r/g, '')), a),
      t(4, (a.style.height = '0px'), a),
      t(4, (a.style.height = a.scrollHeight + 'px'), a));
  }
  ln(function () {
    u();
  }),
    Oe(G.subscribe(['fontSize'], u));
  const r = () => {
    a.focus();
  };
  function d(m) {
    ke.call(this, n, m);
  }
  function c(m) {
    ke.call(this, n, m);
  }
  function h(m) {
    ke.call(this, n, m);
  }
  function f(m) {
    ke.call(this, n, m);
  }
  function p(m) {
    ke.call(this, n, m);
  }
  function _() {
    (l = this.value), t(0, l);
  }
  function b(m) {
    Z[m ? 'unshift' : 'push'](() => {
      (a = m), t(4, a);
    });
  }
  return (
    (n.$$set = (m) => {
      'value' in m && t(0, (l = m.value)),
        'placeholder' in m && t(1, (i = m.placeholder)),
        'nowrap' in m && t(5, (o = m.nowrap));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 32 && (o ? t(3, (s = 'nowrap')) : t(3, (s = 'auto')));
    }),
    [l, i, u, s, a, o, r, d, c, h, f, p, _, b]
  );
}
class mt extends ie {
  constructor(e) {
    super();
    oe(this, e, Cn, Fn, te, {
      value: 0,
      placeholder: 1,
      nowrap: 5,
      autoHeight: 2,
      focus: 6,
    });
  }
  get autoHeight() {
    return this.$$.ctx[2];
  }
  get focus() {
    return this.$$.ctx[6];
  }
}
function Ln(n) {
  let e,
    t = n[1].svg + '',
    l;
  return {
    c() {
      (e = pn('svg')),
        v(e, 'style', (l = `width:${n[0]};height:${n[0]};`)),
        v(e, 'viewBox', '0 0 ' + 100 + ' ' + 100),
        v(e, 'fill', 'none'),
        v(e, 'stroke', 'var(--text)'),
        v(e, 'class', 'svelte-1pducja');
    },
    m(i, o) {
      D(i, e, o), (e.innerHTML = t);
    },
    p(i, [o]) {
      o & 2 && t !== (t = i[1].svg + '') && (e.innerHTML = t),
        o & 1 &&
          l !== (l = `width:${i[0]};height:${i[0]};`) &&
          v(e, 'style', l);
    },
    i: re,
    o: re,
    d(i) {
      i && H(e);
    },
  };
}
function Mn(n, e, t) {
  let { name: l } = e,
    { size: i = '1rem' } = e,
    o = [
      {
        name: 'arrowRight',
        svg: '<path d="M27 7L74 50L27 93" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>',
      },
      {
        name: 'arrowLeft',
        svg: '<path d="M74 93L27 50L74 7" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>',
      },
      {
        name: 'arrowUp',
        svg: '<path d="M7.5 73.5L50.5 26.5L93.5 73.5" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>',
      },
      {
        name: 'arrowDown',
        svg: '<path d="M93.5 26.5L50.5 73.5L7.5 26.5" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>',
      },
      {
        name: 'delete',
        svg: `<path d="M78.5685 22L22 78.5685" stroke-width="10" stroke-linecap="round"/>
<path d="M22 22L78.5685 78.5685" stroke-width="10" stroke-linecap="round"/>`,
      },
      {
        name: 'add',
        svg: `<path d="M50 15L50 85" stroke-width="10" stroke-linecap="round"/>
<path d="M15 50H85" stroke-width="10" stroke-linecap="round"/>`,
      },
      {
        name: 'download',
        svg: `<path d="M71 45L50 68L29 45" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 85L80 85" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M50 66L50 14" stroke-width="10" stroke-linecap="round"/>`,
      },
      {
        name: 'upload',
        svg: `<path d="M29 37L50 14L71 37" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 85L80 85" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M50 16L50 68" stroke-width="10" stroke-linecap="round"/>`,
      },
      {
        name: 'addUp',
        svg: `<path d="M85 25V25C87.7614 25 90 27.2386 90 30V70C90 75.5228 85.5228 80 80 80H20C14.4772 80 10 75.5228 10 70L10 30C10 27.2386 12.2386 25 15 25V25" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35 25H65" stroke-width="10" stroke-linecap="round"/>
<path d="M50 40V10" stroke-width="10" stroke-linecap="round"/>`,
      },
      {
        name: 'addDown',
        svg: `<path d="M15 75V75C12.2386 75 10 72.7614 10 70L10 30C10 24.4772 14.4772 20 20 20L80 20C85.5228 20 90 24.4772 90 30L90 70C90 72.7614 87.7614 75 85 75V75" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M65 75H35" stroke-width="10" stroke-linecap="round"/>
<path d="M50 60L50 90" stroke-width="10" stroke-linecap="round"/>`,
      },
      {
        name: 'addRight',
        svg: `<path d="M75 85V85C75 87.7614 72.7614 90 70 90H30C24.4772 90 20 85.5228 20 80V20C20 14.4772 24.4772 10 30 10H70C72.7614 10 75 12.2386 75 15V15" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M75 35V65" stroke-width="10" stroke-linecap="round"/>
<path d="M60 50H90" stroke-width="10" stroke-linecap="round"/>`,
      },
      {
        name: 'undo',
        svg: `<path d="M10 47H70C81.0457 47 90 55.9543 90 67V77" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36 70L10 47L36 24" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
      },
      {
        name: 'redo',
        svg: `<path d="M90 47H30C18.9543 47 10 55.9543 10 67V77" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M64 70L90 47L64 24" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
      },
      {
        name: 'settings',
        svg: `<line x1="10" y1="50" x2="90" y2="50" stroke-width="10" stroke-linecap="round"/>
<line x1="10" y1="80" x2="90" y2="80" stroke-width="10" stroke-linecap="round"/>
<line x1="10" y1="20" x2="90" y2="20" stroke-width="10" stroke-linecap="round"/>
<circle cx="26.25" cy="50.25" r="6.25" stroke-width="10"/>
<circle cx="71.25" cy="80.25" r="6.25" stroke-width="10"/>
<circle cx="71.25" cy="20.25" r="6.25" stroke-width="10"/>`,
      },
      {
        name: 'check',
        svg: '<path d="M88.7817 29.2843L39.2842 78.7817L11 50.4975" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>',
      },
      {
        name: 'dots',
        svg: `<circle cx="26.25" cy="50.25" r="5.625" stroke-width="11.25"/>
<circle cx="71.25" cy="80.25" r="5.625" stroke-width="11.25"/>
<circle cx="71.25" cy="20.25" r="5.625" stroke-width="11.25"/>`,
      },
    ],
    s;
  function a() {
    t(1, (s = o.find((u) => u.name === l)));
  }
  return (
    a(),
    (n.$$set = (u) => {
      'name' in u && t(2, (l = u.name)), 'size' in u && t(0, (i = u.size));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 4 && a();
    }),
    [i, s, l]
  );
}
class an extends ie {
  constructor(e) {
    super();
    oe(this, e, Mn, Ln, te, { name: 2, size: 0 });
  }
}
const Ee = Ze(!0),
  ne = Ze([]);
let Re = Ze(0),
  qe = Ze(!1),
  An = {
    policy: {
      aff: {
        columns: ['1AC', '1NC', '2AC', '2NC/1NR', '1AR', '2NR', '2AR'],
        invert: !1,
      },
      neg: {
        columns: ['1NC', '2AC', '2NC/1NR', '1AR', '2NR', '2AR'],
        invert: !0,
      },
    },
    publicForum: {
      aff: {
        columns: ['1AC', '1NC', '2AC', '2NC', 'AS', 'NS', 'AFF', 'NFF'],
        invert: !1,
      },
      neg: {
        columns: ['1NC', '2AC', '2NC', 'AS', 'NS', 'AFF', 'NFF'],
        invert: !0,
      },
    },
    lincolnDouglas: {
      aff: { columns: ['AC', 'NC', '1AR', '1NR', '2AR'], invert: !1 },
      neg: { columns: ['NC', '1AR', '1NR', '2AR'], invert: !0 },
    },
  },
  Tn = ['policy', 'publicForum', 'lincolnDouglas'],
  Qe;
ne.subscribe((n) => {
  Qe = n;
});
function Ie(n, e, t) {
  return { content: '', children: [], index: n, level: e, focus: t };
}
function Rn(n, e) {
  let t = An[Tn[G.data.debateStyle.value]];
  return {
    content: '',
    level: 0,
    columns: t[e].columns,
    invert: t[e].invert,
    focus: !0,
    index: n,
    lastFocus: [n],
    children: [Ie(0, 1, !1)],
    history: new un(),
  };
}
function me(n, e = 0) {
  let t = Qe[n[0]];
  for (let l = 1; l < n.length - e; l++)
    if (((t = t == null ? void 0 : t.children[n[l]]), !t)) return null;
  return t;
}
class un {
  constructor() {
    (this.index = -1), (this.data = []), (this.lastFocus = void 0);
  }
  lastAction() {
    return this.data[this.index];
  }
  add(e, t, l) {
    qe.set(!1), this.resolveAllPending();
    let i = {
      type: e,
      path: t,
      lastFocus: [...this.lastFocus],
      nextFocus: void 0,
      other: l,
      pending: !1,
    };
    (this.data = this.data.slice(0, this.index + 1)),
      this.data.push(i),
      (this.index = this.data.length - 1);
  }
  addPending(e, t, l) {
    qe.set(!1),
      (this.data = this.data.slice(0, this.index + 1)),
      this.data.push({
        type: e,
        path: t,
        lastFocus: void 0,
        nextFocus: void 0,
        other: l,
        pending: !0,
      }),
      (this.index = this.data.length - 1);
  }
  resolveAllPending() {
    let e = !1;
    for (let t = 0; t < this.data.length; t++) {
      let l = this.data[t];
      if (l.pending) {
        let i = {
            type: l.type,
            path: l.path,
            lastFocus: l.path,
            nextFocus: l.path,
            other: l.other,
            pending: !1,
          },
          o = !0;
        i.type == 'edit' &&
          ((i.other.lastContent = l.other.lastContent),
          (i.other.nextContent = l.other.getNextContent()),
          i.other.lastContent == i.other.nextContent && (o = !1),
          l.other.createEditBreak()),
          o
            ? ((e = !0), (this.data[t] = i))
            : ((this.data[t] = null), this.index >= t && (this.index -= 1));
      }
    }
    (this.data = this.data.filter((t) => t != null)),
      e && console.log('resolving all pending');
  }
  addFocus(e) {
    (this.lastFocus = e),
      this.lastAction() &&
        this.lastAction().nextFocus == null &&
        (this.lastAction().nextFocus = e);
  }
  undoAction(e) {
    console.log('undo', this.index, this.data);
    let t = me(e.path, 1),
      l = e.path[e.path.length - 1],
      i = [...t.children];
    e.type == 'add'
      ? i.splice(l, 1)
      : e.type == 'delete'
      ? i.splice(l, 0, e.other.box)
      : e.type == 'edit' && (i[l].content = e.other.lastContent);
    for (let o = l; o < i.length; o++) i[o].index = o;
    t.children = [...i];
  }
  redoAction(e) {
    console.log('redo', this.index, this.data);
    let t = me(e.path, 1),
      l = e.path[e.path.length - 1],
      i = [...t.children];
    e.type == 'add'
      ? i.splice(l, 0, Ie(l, t.level + 1, !1))
      : e.type == 'delete'
      ? i.splice(l, 1)
      : e.type == 'edit' && (i[l].content = e.other.nextContent);
    for (let o = l; o < i.length; o++) i[o].index = o;
    t.children = [...i];
  }
  focus(e) {
    let t = me(e);
    t.focus = !0;
  }
  undo() {
    if ((this.resolveAllPending(), this.index > -1)) {
      let e = this.lastAction();
      this.undoAction(e),
        this.focus(e.lastFocus),
        ne.set(Qe),
        (this.index -= 1);
    }
  }
  redo() {
    if ((this.resolveAllPending(), this.index < this.data.length - 1)) {
      this.index += 1;
      let e = this.lastAction();
      this.redoAction(e), this.focus(e.nextFocus), ne.set(Qe);
    }
  }
}
function On(n, e) {
  const t = n.clientHeight;
  return {
    duration: G.data.transitionSpeed.value,
    css: (l) => {
      const i = Ce(l);
      return `
        height: calc(${i * t}px - var(--padding) * 2);
        overflow: visible;
        clip-path: inset(${(1 - i) * t - 2}px 0 -${t}px 0);
        transform: translateY(${(1 - i) * -t}px);
        `;
    },
  };
}
function Nn(n, e) {
  const t = n.clientHeight;
  return {
    duration: G.data.transitionSpeed.value,
    css: (l) => {
      const i = Ce(l);
      return `
        height: ${i * t}px;
        overflow: visible;
        clip-path: inset(${(1 - i) * t}px 0 0 0);
        transform: translateY(${(1 - i) * -t}px);
        `;
    },
  };
}
function Pn(n, e) {
  return {
    duration: G.data.transitionSpeed.value,
    css: (t) => `
        opacity:${t};
      `,
  };
}
function kt(n, e) {
  return {
    duration: G.data.transitionSpeed.value,
    css: (t) => {
      const l = Ce(t);
      return `
        clip-path:inset(0% ${(1 - l) * 100}% 0% 0%);
        transform: translateX(${(1 - l) * 50}%);
      `;
    },
  };
}
function yt(n, e) {
  return {
    duration: G.data.transitionSpeed.value,
    css: (t) => {
      const l = mn(t);
      return `
      clip-path:inset(0% ${(1 - l) * 100}% 0% 0%);
      transform: translateX(${(1 - l) * 50}%)`;
    },
  };
}
function Dn(n, e) {
  const t = n.clientHeight;
  return {
    duration: G.data.transitionSpeed.value,
    css: (l) => {
      const i = Ce(l);
      return `
        height: ${t * i}px;
        margin-bottom: calc(${i} * var(--padding));
        overflow: hidden;
        transform: translateX(${-100 * (1 - i)}%);
      `;
    },
  };
}
function Hn(n, e) {
  const t = n.clientHeight;
  return {
    duration: G.data.transitionSpeed.value,
    css: (l) => {
      const i = Ce(l);
      return `
        height: ${t * i}px;
        margin-bottom: calc(${i} * var(--padding));
        overflow: hidden;
        transform: translateX(${-100 * (1 - i)}%);
      `;
    },
  };
}
function St(n, e) {
  return {
    duration: G.data.transitionSpeed.value,
    css: (t) => `
        transform: scale(${Ce(t)});
        opacity: ${t};
      `,
  };
}
function Vn(n, e) {
  return {
    duration: G.data.transitionSpeed.value,
    css: (t) => `
        transform: scale(${Ce(t)});
        opacity: ${t};
      `,
  };
}
function qn(n, e) {
  return {
    duration: G.data.transitionSpeed.value,
    css: (t) => `
        transform: scale(${Ce(t)});
        opacity: ${t};
      `,
  };
}
function Ft(n, e) {
  return {
    duration: G.data.transitionSpeed.value,
    css: (t) => `
        opacity: ${t};
      `,
  };
}
function Ct(n, e, t) {
  const l = n.slice();
  return (l[54] = e[t]), (l[55] = e), (l[56] = t), l;
}
function Lt(n) {
  let e, t, l, i, o, s, a;
  return (
    (t = new an({ props: { name: 'add' } })),
    {
      c() {
        (e = S('button')),
          z(t.$$.fragment),
          v(e, 'class', (l = le(`add palette-${n[13]}`) + ' svelte-m947dr'));
      },
      m(u, r) {
        D(u, e, r),
          U(t, e, null),
          (o = !0),
          s || ((a = [X(e, 'click', n[34]), X(e, 'mousedown', ft)]), (s = !0));
      },
      p(u, r) {
        (!o ||
          (r[0] & 8192 &&
            l !== (l = le(`add palette-${u[13]}`) + ' svelte-m947dr'))) &&
          v(e, 'class', l);
      },
      i(u) {
        o ||
          (C(t.$$.fragment, u),
          u &&
            (i ||
              Se(() => {
                (i = Ve(e, Pn, {})), i.start();
              })),
          (o = !0));
      },
      o(u) {
        T(t.$$.fragment, u), (o = !1);
      },
      d(u) {
        u && H(e), E(t), (s = !1), Fe(a);
      },
    }
  );
}
function Mt(n, e) {
  let t, l, i, o, s, a, u, r;
  function d(b) {
    e[35](b, e[54]);
  }
  function c(b) {
    e[36](b, e[54]);
  }
  function h(b) {
    e[37](b, e[54]);
  }
  function f(b) {
    e[38](b, e[54]);
  }
  function p(b) {
    e[39](b, e[54]);
  }
  let _ = {
    addSibling: e[22],
    deleteSelf: e[23],
    focusSibling: e[24],
    focusParent: e[25],
    dispatchSelfFocus: e[17],
    parentPath: e[8],
  };
  return (
    e[54].content !== void 0 && (_.content = e[54].content),
    e[54].children !== void 0 && (_.children = e[54].children),
    e[54].index !== void 0 && (_.index = e[54].index),
    e[54].level !== void 0 && (_.level = e[54].level),
    e[54].focus !== void 0 && (_.focus = e[54].focus),
    (l = new rn({ props: _ })),
    Z.push(() => x(l, 'content', d)),
    Z.push(() => x(l, 'children', c)),
    Z.push(() => x(l, 'index', h)),
    Z.push(() => x(l, 'level', f)),
    Z.push(() => x(l, 'focus', p)),
    l.$on('saveFocus', e[40]),
    {
      key: n,
      first: null,
      c() {
        (t = Xe()), z(l.$$.fragment), (this.first = t);
      },
      m(b, m) {
        D(b, t, m), U(l, b, m), (r = !0);
      },
      p(b, m) {
        e = b;
        const w = {};
        m[0] & 256 && (w.parentPath = e[8]),
          !i &&
            m[0] & 4 &&
            ((i = !0), (w.content = e[54].content), ee(() => (i = !1))),
          !o &&
            m[0] & 4 &&
            ((o = !0), (w.children = e[54].children), ee(() => (o = !1))),
          !s &&
            m[0] & 4 &&
            ((s = !0), (w.index = e[54].index), ee(() => (s = !1))),
          !a &&
            m[0] & 4 &&
            ((a = !0), (w.level = e[54].level), ee(() => (a = !1))),
          !u &&
            m[0] & 4 &&
            ((u = !0), (w.focus = e[54].focus), ee(() => (u = !1))),
          l.$set(w);
      },
      i(b) {
        r || (C(l.$$.fragment, b), (r = !0));
      },
      o(b) {
        T(l.$$.fragment, b), (r = !1);
      },
      d(b) {
        b && H(t), E(l, b);
      },
    }
  );
}
function Bn(n) {
  let e,
    t,
    l,
    i,
    o,
    s,
    a,
    u,
    r,
    d,
    c,
    h,
    f,
    p,
    _,
    b,
    m,
    w = [],
    F = new Map(),
    R,
    J,
    M,
    O,
    q,
    $;
  function j(N) {
    n[31](N);
  }
  let g = { placeholder: n[11] };
  n[1] !== void 0 && (g.value = n[1]),
    (r = new mt({ props: g })),
    Z.push(() => x(r, 'value', j)),
    n[32](r),
    r.$on('keydown', n[20]),
    r.$on('beforeinput', n[21]),
    r.$on('blur', n[19]),
    r.$on('focus', n[18]);
  let L = n[2].length == 0 && n[5] < n[15] && Lt(n),
    I = n[2];
  const P = (N) => N[54];
  for (let N = 0; N < I.length; N += 1) {
    let B = Ct(n, I, N),
      se = P(B);
    F.set(se, (w[N] = Mt(se, B)));
  }
  return {
    c() {
      (e = S('div')),
        (t = S('div')),
        (l = S('div')),
        (i = S('div')),
        (a = V()),
        (u = S('div')),
        z(r.$$.fragment),
        (c = V()),
        (h = S('div')),
        (_ = V()),
        L && L.c(),
        (b = V()),
        (m = S('ul'));
      for (let N = 0; N < w.length; N += 1) w[N].c();
      v(i, 'class', 'line above svelte-m947dr'),
        K(i, 'left', n[2].length > 0),
        K(i, 'right', n[4] == 0 && n[5] > 1),
        v(u, 'class', 'text svelte-m947dr'),
        v(h, 'class', 'line below svelte-m947dr'),
        v(l, 'class', 'barcontainer svelte-m947dr'),
        v(t, 'class', 'content svelte-m947dr'),
        v(t, 'style', `--this-background: ${n[16]}`),
        K(t, 'root', n[3]),
        K(t, 'left', n[2].length > 0),
        K(t, 'right', n[4] == 0 && n[5] > 1),
        v(m, 'class', 'children svelte-m947dr'),
        v(e, 'class', (R = le(`top palette-${n[12]}`) + ' svelte-m947dr')),
        K(e, 'empty', n[2].length == 0),
        K(e, 'focus', n[0]),
        K(e, 'childFocus', n[10]),
        K(e, 'activeMouse', n[14]),
        K(e, 'highlight', n[10] || n[0]);
    },
    m(N, B) {
      D(N, e, B),
        k(e, t),
        k(t, l),
        k(l, i),
        k(l, a),
        k(l, u),
        U(r, u, null),
        k(l, c),
        k(l, h),
        k(t, _),
        L && L.m(t, null),
        k(e, b),
        k(e, m);
      for (let se = 0; se < w.length; se += 1) w[se].m(m, null);
      (O = !0),
        q ||
          (($ = [
            X(i, 'click', n[30]),
            X(i, 'mousedown', ft),
            X(h, 'click', n[33]),
            X(h, 'mousedown', ft),
          ]),
          (q = !0));
    },
    p(N, B) {
      B[0] & 4 && K(i, 'left', N[2].length > 0),
        B[0] & 48 && K(i, 'right', N[4] == 0 && N[5] > 1);
      const se = {};
      B[0] & 2048 && (se.placeholder = N[11]),
        !d && B[0] & 2 && ((d = !0), (se.value = N[1]), ee(() => (d = !1))),
        r.$set(se),
        N[2].length == 0 && N[5] < N[15]
          ? L
            ? (L.p(N, B), B[0] & 36 && C(L, 1))
            : ((L = Lt(N)), L.c(), C(L, 1), L.m(t, null))
          : L &&
            (ce(),
            T(L, 1, 1, () => {
              L = null;
            }),
            de()),
        B[0] & 8 && K(t, 'root', N[3]),
        B[0] & 4 && K(t, 'left', N[2].length > 0),
        B[0] & 48 && K(t, 'right', N[4] == 0 && N[5] > 1),
        B[0] & 63045892 &&
          ((I = N[2]),
          ce(),
          (w = gn(w, B, P, 1, N, I, F, m, vn, Mt, null, Ct)),
          de()),
        (!O ||
          (B[0] & 4096 &&
            R !== (R = le(`top palette-${N[12]}`) + ' svelte-m947dr'))) &&
          v(e, 'class', R),
        B[0] & 4100 && K(e, 'empty', N[2].length == 0),
        B[0] & 4097 && K(e, 'focus', N[0]),
        B[0] & 5120 && K(e, 'childFocus', N[10]),
        B[0] & 20480 && K(e, 'activeMouse', N[14]),
        B[0] & 5121 && K(e, 'highlight', N[10] || N[0]);
    },
    i(N) {
      if (!O) {
        N &&
          Se(() => {
            s && s.end(1), (o = Ve(i, kt, {})), o.start();
          }),
          C(r.$$.fragment, N),
          N &&
            Se(() => {
              p && p.end(1), (f = Ve(h, kt, {})), f.start();
            }),
          C(L);
        for (let B = 0; B < I.length; B += 1) C(w[B]);
        N &&
          Se(() => {
            M && M.end(1), (J = Ve(e, On, {})), J.start();
          }),
          (O = !0);
      }
    },
    o(N) {
      o && o.invalidate(),
        N && (s = Ue(i, yt, {})),
        T(r.$$.fragment, N),
        f && f.invalidate(),
        N && (p = Ue(h, yt, {})),
        T(L);
      for (let B = 0; B < w.length; B += 1) T(w[B]);
      J && J.invalidate(), N && (M = Ue(e, Nn, {})), (O = !1);
    },
    d(N) {
      N && H(e),
        N && s && s.end(),
        n[32](null),
        E(r),
        N && p && p.end(),
        L && L.d();
      for (let B = 0; B < w.length; B += 1) w[B].d();
      N && M && M.end(), (q = !1), Fe($);
    },
  };
}
function ft(n) {
  n.preventDefault();
}
function jn(n, e, t) {
  let l, i, o, s;
  ge(n, Re, (A) => t(43, (i = A))),
    ge(n, ne, (A) => t(44, (o = A))),
    ge(n, Ee, (A) => t(14, (s = A)));
  var a =
    (this && this.__awaiter) ||
    function (A, Y, ae, pe) {
      function ye(Me) {
        return Me instanceof ae
          ? Me
          : new ae(function (Ae) {
              Ae(Me);
            });
      }
      return new (ae || (ae = Promise))(function (Me, Ae) {
        function hn(Te) {
          try {
            at(pe.next(Te));
          } catch (ut) {
            Ae(ut);
          }
        }
        function _n(Te) {
          try {
            at(pe.throw(Te));
          } catch (ut) {
            Ae(ut);
          }
        }
        function at(Te) {
          Te.done ? Me(Te.value) : ye(Te.value).then(hn, _n);
        }
        at((pe = pe.apply(A, Y || [])).next());
      });
    };
  const u = ct();
  let { root: r = !1 } = e,
    { content: d = '' } = e,
    { children: c } = e,
    { index: h } = e,
    { level: f } = e,
    { focus: p = !1 } = e,
    { parentPath: _ = [] } = e,
    { addSibling: b = () => !1 } = e,
    { deleteSelf: m = () => {} } = e,
    { focusSibling: w = () => {} } = e,
    { focusParent: F = () => {} } = e,
    { dispatchSelfFocus: R = () => {} } = e;
  const { getInvert: J } = gt('invert');
  let M = J();
  const { getColumnCount: O } = gt('columnCount');
  let q = O(),
    $,
    j,
    g = !1,
    L = -1;
  function I(A, Y) {
    Y ? (t(10, (g = !0)), (L = A)) : A == L && (t(10, (g = !1)), (L = -1));
  }
  let P = !1;
  function N() {
    p
      ? (R(h, !0),
        f >= 1 &&
          (o[i].history.addFocus([...l]), u('saveFocus', l), $ && $.focus()))
      : (R(h, !1), (P = !1));
  }
  on(N);
  function B() {
    p && (R(h, !0), o[i].history.addFocus([...l]));
  }
  let se = '';
  function xe() {
    p || W();
  }
  function et() {
    p && t(0, (p = !1));
  }
  class be {
    constructor(Y, ae = () => !0, pe = !0, ye = !0, Me = !0) {
      (this.require = ae),
        (this.stopRepeat = pe),
        (this.preventDefault = ye),
        (this.blur = Me),
        (this.handle = function (Ae) {
          return !this.require() ||
            (this.preventDefault && Ae.preventDefault(),
            this.stopRepeat && Ae.repeat == !0)
            ? !1
            : (this.blur && t(0, (p = !1)), Y(), !0);
        });
    }
  }
  const Pe = {
    shift: {
      Enter: new be(() => {
        Be(0, 0) && y(0, 0);
      }),
    },
    other: {
      Enter: new be(() => {
        b(h, 1) && w(h, 1);
      }),
      Backspace: new be(
        () => {
          m(h);
        },
        () => d.length == 0
      ),
      ArrowUp: new be(() => w(h, -1)),
      ArrowDown: new be(() => w(h, 1)),
      ArrowLeft: new be(() => F()),
      ArrowRight: new be(() => {
        c.length > 0 ? y(0, 0) : w(h, 1);
      }),
    },
  };
  function tt(A) {
    A.shiftKey && Pe.shift[A.key]
      ? Pe.shift[A.key].handle(A)
      : Pe.other[A.key] && Pe.other[A.key].handle(A);
  }
  function nt(A) {
    P ||
      o[i].history.addPending('edit', [...l], {
        lastContent: d,
        getNextContent() {
          return d;
        },
        createEditBreak() {
          P = !1;
        },
      }),
      (P = !0);
  }
  function Be(A, Y) {
    let ae = A + Y;
    if (f < q) {
      let pe = [...c];
      pe.splice(ae, 0, Ie(ae, f + 1, !0));
      for (let ye = ae; ye < pe.length; ye++) pe[ye].index = ye;
      return o[i].history.add('add', [...l, ae]), t(2, (c = [...pe])), !0;
    } else return W(), !1;
  }
  function lt(A) {
    return a(this, void 0, void 0, function* () {
      if (c.length > 1 || f >= 1) {
        let Y = [...c];
        o[i].history.add('delete', [...l, A], { box: Y[A] }),
          (Y[A].focus = !1),
          t(2, (c = [...Y])),
          yield Ge(),
          Y.splice(A, 1);
        for (let ae = 0; ae < Y.length; ae++) Y[ae].index = ae;
        return (
          t(2, (c = [...Y])),
          c[A - 1] ? y(A - 1, 0) : c.length == 0 ? W() : A == 0 && y(0, 0),
          !0
        );
      } else return y(0, 0), !1;
    });
  }
  function y(A, Y) {
    let ae = A + Y;
    if (ae < 0) {
      W();
      return;
    }
    ae >= c.length
      ? c[c.length - 1].children.length > 0
        ? t(2, (c[c.length - 1].children[0].focus = !0), c)
        : t(2, (c[A].focus = !0), c)
      : t(2, (c[ae].focus = !0), c),
      t(2, c);
  }
  function W() {
    t(0, (p = !0));
  }
  let Q, fe;
  const it = () => {
    b(h, 0) && w(h, 0);
  };
  function Le(A) {
    (d = A), t(1, d);
  }
  function De(A) {
    Z[A ? 'unshift' : 'push'](() => {
      ($ = A), t(9, $);
    });
  }
  const ot = () => {
      b(h, 1) && w(h, 1);
    },
    st = () => {
      Be(0, 0), y(0, 0);
    };
  function je(A, Y) {
    n.$$.not_equal(Y.content, A) && ((Y.content = A), t(2, c));
  }
  function we(A, Y) {
    n.$$.not_equal(Y.children, A) && ((Y.children = A), t(2, c));
  }
  function ze(A, Y) {
    n.$$.not_equal(Y.index, A) && ((Y.index = A), t(2, c));
  }
  function fn(A, Y) {
    n.$$.not_equal(Y.level, A) && ((Y.level = A), t(2, c));
  }
  function cn(A, Y) {
    n.$$.not_equal(Y.focus, A) && ((Y.focus = A), t(2, c));
  }
  function dn(A) {
    ke.call(this, n, A);
  }
  return (
    (n.$$set = (A) => {
      'root' in A && t(3, (r = A.root)),
        'content' in A && t(1, (d = A.content)),
        'children' in A && t(2, (c = A.children)),
        'index' in A && t(4, (h = A.index)),
        'level' in A && t(5, (f = A.level)),
        'focus' in A && t(0, (p = A.focus)),
        'parentPath' in A && t(26, (_ = A.parentPath)),
        'addSibling' in A && t(6, (b = A.addSibling)),
        'deleteSelf' in A && t(27, (m = A.deleteSelf)),
        'focusSibling' in A && t(7, (w = A.focusSibling)),
        'focusParent' in A && t(28, (F = A.focusParent)),
        'dispatchSelfFocus' in A && t(29, (R = A.dispatchSelfFocus));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 67108880 && t(8, (l = [..._, h])),
        n.$$.dirty[0] & 1 && N(),
        n.$$.dirty[0] & 256 && B(),
        n.$$.dirty[0] & 48 &&
          (f == 1 && h == 0 ? t(11, (se = 'type here')) : t(11, (se = ''))),
        n.$$.dirty[0] & 32 &&
          ((f % 2 == 0 && !M) || (f % 2 == 1 && M)
            ? t(12, (Q = 'accent-secondary'))
            : t(12, (Q = 'accent'))),
        n.$$.dirty[0] & 32 &&
          ((f % 2 == 0 && !M) || (f % 2 == 1 && M)
            ? t(13, (fe = 'accent'))
            : t(13, (fe = 'accent-secondary')));
    }),
    [
      p,
      d,
      c,
      r,
      h,
      f,
      b,
      w,
      l,
      $,
      g,
      se,
      Q,
      fe,
      s,
      q,
      j,
      I,
      xe,
      et,
      tt,
      nt,
      Be,
      lt,
      y,
      W,
      _,
      m,
      F,
      R,
      it,
      Le,
      De,
      ot,
      st,
      je,
      we,
      ze,
      fn,
      cn,
      dn,
    ]
  );
}
class rn extends ie {
  constructor(e) {
    super();
    oe(
      this,
      e,
      jn,
      Bn,
      te,
      {
        root: 3,
        content: 1,
        children: 2,
        index: 4,
        level: 5,
        focus: 0,
        parentPath: 26,
        addSibling: 6,
        deleteSelf: 27,
        focusSibling: 7,
        focusParent: 28,
        dispatchSelfFocus: 29,
      },
      null,
      [-1, -1]
    );
  }
}
function zn(n) {
  let e, t;
  return {
    c() {
      (e = S('div')), (t = _e(n[0])), v(e, 'class', 'top svelte-10zixka');
    },
    m(l, i) {
      D(l, e, i), k(e, t);
    },
    p(l, [i]) {
      i & 1 && ve(t, l[0]);
    },
    i: re,
    o: re,
    d(l) {
      l && H(e);
    },
  };
}
function Un(n, e, t) {
  let { column: l } = e;
  return (
    (n.$$set = (i) => {
      'column' in i && t(0, (l = i.column));
    }),
    [l]
  );
}
class En extends ie {
  constructor(e) {
    super();
    oe(this, e, Un, zn, te, { column: 0 });
  }
}
function At(n, e, t) {
  const l = n.slice();
  return (l[8] = e[t]), (l[10] = t), l;
}
function Tt(n, e, t) {
  const l = n.slice();
  return (l[11] = e[t]), (l[10] = t), l;
}
function Rt(n) {
  let e, t, l, i, o;
  return (
    (t = new En({ props: { column: n[11] } })),
    t.$on('focusFlow', n[7]),
    {
      c() {
        (e = S('div')),
          z(t.$$.fragment),
          (l = V()),
          v(
            e,
            'class',
            (i =
              le(
                `header palette-${
                  !!(n[10] % 2) == n[0].invert ? 'accent' : 'accent-secondary'
                }`
              ) + ' svelte-150s666')
          );
      },
      m(s, a) {
        D(s, e, a), U(t, e, null), k(e, l), (o = !0);
      },
      p(s, a) {
        const u = {};
        a & 1 && (u.column = s[11]),
          t.$set(u),
          (!o ||
            (a & 1 &&
              i !==
                (i =
                  le(
                    `header palette-${
                      !!(s[10] % 2) == s[0].invert
                        ? 'accent'
                        : 'accent-secondary'
                    }`
                  ) + ' svelte-150s666'))) &&
            v(e, 'class', i);
      },
      i(s) {
        o || (C(t.$$.fragment, s), (o = !0));
      },
      o(s) {
        T(t.$$.fragment, s), (o = !1);
      },
      d(s) {
        s && H(e), E(t);
      },
    }
  );
}
function Ot(n) {
  let e, t;
  return {
    c() {
      (e = S('div')),
        v(
          e,
          'class',
          (t =
            le(
              `column palette-${
                !!(n[10] % 2) == n[0].invert ? 'plain' : 'plain-secondary'
              }`
            ) + ' svelte-150s666')
        );
    },
    m(l, i) {
      D(l, e, i);
    },
    p(l, i) {
      i & 1 &&
        t !==
          (t =
            le(
              `column palette-${
                !!(l[10] % 2) == l[0].invert ? 'plain' : 'plain-secondary'
              }`
            ) + ' svelte-150s666') &&
        v(e, 'class', t);
    },
    d(l) {
      l && H(e);
    },
  };
}
function In(n) {
  let e, t, l, i, o, s, a, u, r, d, c, h, f, p, _;
  function b(g) {
    n[2](g);
  }
  function m(g) {
    n[3](g);
  }
  function w(g) {
    n[4](g);
  }
  function F(g) {
    n[5](g);
  }
  function R(g) {
    n[6](g);
  }
  let J = { root: !0 };
  n[0].content !== void 0 && (J.content = n[0].content),
    n[0].children !== void 0 && (J.children = n[0].children),
    n[0].index !== void 0 && (J.index = n[0].index),
    n[0].level !== void 0 && (J.level = n[0].level),
    n[0].focus !== void 0 && (J.focus = n[0].focus),
    (i = new rn({ props: J })),
    Z.push(() => x(i, 'content', b)),
    Z.push(() => x(i, 'children', m)),
    Z.push(() => x(i, 'index', w)),
    Z.push(() => x(i, 'level', F)),
    Z.push(() => x(i, 'focus', R)),
    i.$on('saveFocus', n[1]);
  let M = n[0].columns,
    O = [];
  for (let g = 0; g < M.length; g += 1) O[g] = Rt(Tt(n, M, g));
  const q = (g) =>
    T(O[g], 1, 1, () => {
      O[g] = null;
    });
  let $ = n[0].columns,
    j = [];
  for (let g = 0; g < $.length; g += 1) j[g] = Ot(At(n, $, g));
  return {
    c() {
      (e = S('div')),
        (t = S('div')),
        (l = S('div')),
        z(i.$$.fragment),
        (d = V()),
        (c = S('div'));
      for (let g = 0; g < O.length; g += 1) O[g].c();
      (h = V()), (f = S('div'));
      for (let g = 0; g < j.length; g += 1) j[g].c();
      v(l, 'class', 'content svelte-150s666'),
        v(c, 'class', 'headers svelte-150s666'),
        v(f, 'class', 'columns svelte-150s666'),
        v(t, 'class', 'viewer svelte-150s666'),
        v(e, 'class', 'top svelte-150s666'),
        v(e, 'style', (p = `--column-count: ${n[0].columns.length};`)),
        K(e, 'invert', n[0].invert);
    },
    m(g, L) {
      D(g, e, L), k(e, t), k(t, l), U(i, l, null), k(t, d), k(t, c);
      for (let I = 0; I < O.length; I += 1) O[I].m(c, null);
      k(t, h), k(t, f);
      for (let I = 0; I < j.length; I += 1) j[I].m(f, null);
      _ = !0;
    },
    p(g, [L]) {
      const I = {};
      if (
        (!o &&
          L & 1 &&
          ((o = !0), (I.content = g[0].content), ee(() => (o = !1))),
        !s &&
          L & 1 &&
          ((s = !0), (I.children = g[0].children), ee(() => (s = !1))),
        !a && L & 1 && ((a = !0), (I.index = g[0].index), ee(() => (a = !1))),
        !u && L & 1 && ((u = !0), (I.level = g[0].level), ee(() => (u = !1))),
        !r && L & 1 && ((r = !0), (I.focus = g[0].focus), ee(() => (r = !1))),
        i.$set(I),
        L & 1)
      ) {
        M = g[0].columns;
        let P;
        for (P = 0; P < M.length; P += 1) {
          const N = Tt(g, M, P);
          O[P]
            ? (O[P].p(N, L), C(O[P], 1))
            : ((O[P] = Rt(N)), O[P].c(), C(O[P], 1), O[P].m(c, null));
        }
        for (ce(), P = M.length; P < O.length; P += 1) q(P);
        de();
      }
      if (L & 1) {
        $ = g[0].columns;
        let P;
        for (P = 0; P < $.length; P += 1) {
          const N = At(g, $, P);
          j[P] ? j[P].p(N, L) : ((j[P] = Ot(N)), j[P].c(), j[P].m(f, null));
        }
        for (; P < j.length; P += 1) j[P].d(1);
        j.length = $.length;
      }
      (!_ ||
        (L & 1 && p !== (p = `--column-count: ${g[0].columns.length};`))) &&
        v(e, 'style', p),
        L & 1 && K(e, 'invert', g[0].invert);
    },
    i(g) {
      if (!_) {
        C(i.$$.fragment, g);
        for (let L = 0; L < M.length; L += 1) C(O[L]);
        _ = !0;
      }
    },
    o(g) {
      T(i.$$.fragment, g), (O = O.filter(Boolean));
      for (let L = 0; L < O.length; L += 1) T(O[L]);
      _ = !1;
    },
    d(g) {
      g && H(e), E(i), Ne(O, g), Ne(j, g);
    },
  };
}
function Xn(n, e, t) {
  let { root: l } = e;
  vt('invert', { getInvert: () => l.invert }),
    vt('columnCount', { getColumnCount: () => l.columns.length });
  function i(c) {
    t(0, (l.lastFocus = c.detail), l), t(0, l);
  }
  function o(c) {
    n.$$.not_equal(l.content, c) && ((l.content = c), t(0, l));
  }
  function s(c) {
    n.$$.not_equal(l.children, c) && ((l.children = c), t(0, l));
  }
  function a(c) {
    n.$$.not_equal(l.index, c) && ((l.index = c), t(0, l));
  }
  function u(c) {
    n.$$.not_equal(l.level, c) && ((l.level = c), t(0, l));
  }
  function r(c) {
    n.$$.not_equal(l.focus, c) && ((l.focus = c), t(0, l));
  }
  function d(c) {
    ke.call(this, n, c);
  }
  return (
    (n.$$set = (c) => {
      'root' in c && t(0, (l = c.root));
    }),
    [l, i, o, s, a, u, r, d]
  );
}
class Kn extends ie {
  constructor(e) {
    super();
    oe(this, e, Xn, In, te, { root: 0 });
  }
}
function Nt(n, e, t) {
  const l = n.slice();
  return (l[2] = e[t]), (l[4] = t), l;
}
function Wn(n) {
  let e,
    t = n[2].toUpperCase() + '',
    l;
  return {
    c() {
      (e = S('kbd')), (l = _e(t)), v(e, 'class', 'key svelte-1ngepvq');
    },
    m(i, o) {
      D(i, e, o), k(e, l);
    },
    p(i, o) {
      o & 1 && t !== (t = i[2].toUpperCase() + '') && ve(l, t);
    },
    d(i) {
      i && H(e);
    },
  };
}
function Jn(n) {
  let e,
    t = n[1][n[2]] + '',
    l;
  return {
    c() {
      (e = S('kbd')), (l = _e(t)), v(e, 'class', 'modifier svelte-1ngepvq');
    },
    m(i, o) {
      D(i, e, o), k(e, l);
    },
    p(i, o) {
      o & 1 && t !== (t = i[1][i[2]] + '') && ve(l, t);
    },
    d(i) {
      i && H(e);
    },
  };
}
function Pt(n) {
  let e;
  function t(o, s) {
    return o[2] in o[1] ? Jn : Wn;
  }
  let l = t(n),
    i = l(n);
  return {
    c() {
      i.c(), (e = Xe());
    },
    m(o, s) {
      i.m(o, s), D(o, e, s);
    },
    p(o, s) {
      l === (l = t(o)) && i
        ? i.p(o, s)
        : (i.d(1), (i = l(o)), i && (i.c(), i.m(e.parentNode, e)));
    },
    d(o) {
      i.d(o), o && H(e);
    },
  };
}
function Gn(n) {
  let e,
    t = n[0],
    l = [];
  for (let i = 0; i < t.length; i += 1) l[i] = Pt(Nt(n, t, i));
  return {
    c() {
      e = S('span');
      for (let i = 0; i < l.length; i += 1) l[i].c();
      v(e, 'class', 'top svelte-1ngepvq');
    },
    m(i, o) {
      D(i, e, o);
      for (let s = 0; s < l.length; s += 1) l[s].m(e, null);
    },
    p(i, [o]) {
      if (o & 3) {
        t = i[0];
        let s;
        for (s = 0; s < t.length; s += 1) {
          const a = Nt(i, t, s);
          l[s] ? l[s].p(a, o) : ((l[s] = Pt(a)), l[s].c(), l[s].m(e, null));
        }
        for (; s < l.length; s += 1) l[s].d(1);
        l.length = t.length;
      }
    },
    i: re,
    o: re,
    d(i) {
      i && H(e), Ne(l, i);
    },
  };
}
function Yn(n, e, t) {
  let { keys: l } = e,
    i = {
      command: '\u2318',
      shift: '\u21E7',
      option: '\u2325',
      control: '\u2303',
      up: '\u2191',
      down: '\u2193',
      left: '\u2190',
      right: '\u2192',
      escape: '\u238B',
      return: '\u21B5',
      space: '\u2423',
      delete: '\u232B',
      backspace: '\u2326',
      tab: '\u21E5',
      home: '\u21F1',
      end: '\u21F2',
      pageup: '\u21DE',
      pagedown: '\u21DF',
      insert: '\u2324',
    };
  return (
    (n.$$set = (o) => {
      'keys' in o && t(0, (l = o.keys));
    }),
    [l, i]
  );
}
class Qn extends ie {
  constructor(e) {
    super();
    oe(this, e, Yn, Gn, te, { keys: 0 });
  }
}
function Zn(n) {
  let e;
  const t = n[14].default,
    l = dt(t, n, n[13], null);
  return {
    c() {
      l && l.c();
    },
    m(i, o) {
      l && l.m(i, o), (e = !0);
    },
    p(i, o) {
      l &&
        l.p &&
        (!e || o & 8192) &&
        ht(l, t, i, i[13], e ? pt(t, i[13], o, null) : _t(i[13]), null);
    },
    i(i) {
      e || (C(l, i), (e = !0));
    },
    o(i) {
      T(l, i), (e = !1);
    },
    d(i) {
      l && l.d(i);
    },
  };
}
function $n(n) {
  let e, t, l, i, o, s;
  const a = n[14].default,
    u = dt(a, n, n[13], null);
  let r = n[4] && Dt(n);
  return {
    c() {
      (e = S('div')),
        u && u.c(),
        (t = V()),
        r && r.c(),
        (l = Xe()),
        v(e, 'class', 'element svelte-1vroict');
    },
    m(d, c) {
      D(d, e, c),
        u && u.m(e, null),
        n[15](e),
        D(d, t, c),
        r && r.m(d, c),
        D(d, l, c),
        (i = !0),
        o ||
          ((s = [
            X(e, 'mouseover', n[9]),
            X(e, 'focus', n[9]),
            X(e, 'mouseleave', n[11]),
            X(e, 'blur', n[11]),
            X(e, 'mousemove', n[10]),
          ]),
          (o = !0));
    },
    p(d, c) {
      u &&
        u.p &&
        (!i || c & 8192) &&
        ht(u, a, d, d[13], i ? pt(a, d[13], c, null) : _t(d[13]), null),
        d[4]
          ? r
            ? (r.p(d, c), c & 16 && C(r, 1))
            : ((r = Dt(d)), r.c(), C(r, 1), r.m(l.parentNode, l))
          : r &&
            (ce(),
            T(r, 1, 1, () => {
              r = null;
            }),
            de());
    },
    i(d) {
      i || (C(u, d), C(r), (i = !0));
    },
    o(d) {
      T(u, d), T(r), (i = !1);
    },
    d(d) {
      d && H(e),
        u && u.d(d),
        n[15](null),
        d && H(t),
        r && r.d(d),
        d && H(l),
        (o = !1),
        Fe(s);
    },
  };
}
function Dt(n) {
  let e,
    t,
    l,
    i,
    o,
    s,
    a,
    u = !n[2] && n[1] && Ht(n),
    r = n[2] && Vt(n);
  return {
    c() {
      (e = S('div')),
        (t = S('div')),
        (l = _e(n[0])),
        (i = V()),
        u && u.c(),
        (o = V()),
        r && r.c(),
        v(t, 'class', 'content'),
        Ke(e, 'top', n[6] + 'px'),
        Ke(e, 'left', n[5] + 'px'),
        v(e, 'class', 'tooltip svelte-1vroict');
    },
    m(d, c) {
      D(d, e, c),
        k(e, t),
        k(t, l),
        k(e, i),
        u && u.m(e, null),
        k(e, o),
        r && r.m(e, null),
        n[16](e),
        (a = !0);
    },
    p(d, c) {
      (!a || c & 1) && ve(l, d[0]),
        !d[2] && d[1]
          ? u
            ? (u.p(d, c), c & 6 && C(u, 1))
            : ((u = Ht(d)), u.c(), C(u, 1), u.m(e, o))
          : u &&
            (ce(),
            T(u, 1, 1, () => {
              u = null;
            }),
            de()),
        d[2]
          ? r
            ? r.p(d, c)
            : ((r = Vt(d)), r.c(), r.m(e, null))
          : r && (r.d(1), (r = null)),
        (!a || c & 64) && Ke(e, 'top', d[6] + 'px'),
        (!a || c & 32) && Ke(e, 'left', d[5] + 'px');
    },
    i(d) {
      a ||
        (C(u),
        Se(() => {
          s || (s = Ye(e, St, {}, !0)), s.run(1);
        }),
        (a = !0));
    },
    o(d) {
      T(u), s || (s = Ye(e, St, {}, !1)), s.run(0), (a = !1);
    },
    d(d) {
      d && H(e), u && u.d(), r && r.d(), n[16](null), d && s && s.end();
    },
  };
}
function Ht(n) {
  let e, t;
  return (
    (e = new Qn({ props: { keys: n[1] } })),
    {
      c() {
        z(e.$$.fragment);
      },
      m(l, i) {
        U(e, l, i), (t = !0);
      },
      p(l, i) {
        const o = {};
        i & 2 && (o.keys = l[1]), e.$set(o);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        E(e, l);
      },
    }
  );
}
function Vt(n) {
  let e, t;
  return {
    c() {
      (e = S('div')), (t = _e(n[2])), v(e, 'class', 'disabled svelte-1vroict');
    },
    m(l, i) {
      D(l, e, i), k(e, t);
    },
    p(l, i) {
      i & 4 && ve(t, l[2]);
    },
    d(l) {
      l && H(e);
    },
  };
}
function xn(n) {
  let e, t, l, i;
  const o = [$n, Zn],
    s = [];
  function a(u, r) {
    return u[0] && u[8] ? 0 : 1;
  }
  return (
    (e = a(n)),
    (t = s[e] = o[e](n)),
    {
      c() {
        t.c(), (l = Xe());
      },
      m(u, r) {
        s[e].m(u, r), D(u, l, r), (i = !0);
      },
      p(u, [r]) {
        let d = e;
        (e = a(u)),
          e === d
            ? s[e].p(u, r)
            : (ce(),
              T(s[d], 1, 1, () => {
                s[d] = null;
              }),
              de(),
              (t = s[e]),
              t ? t.p(u, r) : ((t = s[e] = o[e](u)), t.c()),
              C(t, 1),
              t.m(l.parentNode, l));
      },
      i(u) {
        i || (C(t), (i = !0));
      },
      o(u) {
        T(t), (i = !1);
      },
      d(u) {
        s[e].d(u), u && H(l);
      },
    }
  );
}
function el(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e;
  var o =
    (this && this.__awaiter) ||
    function (M, O, q, $) {
      function j(g) {
        return g instanceof q
          ? g
          : new q(function (L) {
              L(g);
            });
      }
      return new (q || (q = Promise))(function (g, L) {
        function I(B) {
          try {
            N($.next(B));
          } catch (se) {
            L(se);
          }
        }
        function P(B) {
          try {
            N($.throw(B));
          } catch (se) {
            L(se);
          }
        }
        function N(B) {
          B.done ? g(B.value) : j(B.value).then(I, P);
        }
        N(($ = $.apply(M, O || [])).next());
      });
    };
  let { content: s } = e,
    { shortcut: a } = e,
    { disabled: u = !1 } = e,
    { layout: r = 'bottom' } = e,
    d = !1,
    c = 0,
    h = 0,
    f,
    p,
    _ = !0;
  Oe(
    G.subscribe(['useTooltips'], function () {
      t(8, (_ = G.data.useTooltips.value));
    })
  );
  function b() {
    t(4, (d = !0)), m();
  }
  function m() {
    if (p) {
      let M = f.getBoundingClientRect();
      r == 'bottom' || r == 'top'
        ? (t(5, (c = M.left - p.offsetWidth / 2 + M.width / 2)),
          c < 4
            ? t(5, (c = 4))
            : c + p.offsetWidth > window.innerWidth - 4 &&
              t(5, (c = window.innerWidth - p.offsetWidth - 4)),
          r == 'bottom'
            ? t(6, (h = M.bottom + 4))
            : r == 'top' && t(6, (h = M.top - p.offsetHeight - 4)))
        : (r == 'left' || r == 'right') &&
          (t(6, (h = M.top - p.offsetHeight / 2 + M.height / 2)),
          h < 4
            ? t(6, (h = 4))
            : h + p.offsetHeight > window.innerHeight - 4 &&
              t(6, (h = window.innerHeight - p.offsetHeight - 4)),
          r == 'left'
            ? t(5, (c = M.left - p.offsetWidth - 4))
            : r == 'right' && t(5, (c = M.right + 4)));
    }
  }
  function w() {
    return o(this, void 0, void 0, function* () {
      yield Ge(), m();
    });
  }
  function F() {
    t(4, (d = !1));
  }
  function R(M) {
    Z[M ? 'unshift' : 'push'](() => {
      (f = M), t(7, f);
    });
  }
  function J(M) {
    Z[M ? 'unshift' : 'push'](() => {
      (p = M), t(3, p);
    });
  }
  return (
    (n.$$set = (M) => {
      'content' in M && t(0, (s = M.content)),
        'shortcut' in M && t(1, (a = M.shortcut)),
        'disabled' in M && t(2, (u = M.disabled)),
        'layout' in M && t(12, (r = M.layout)),
        '$$scope' in M && t(13, (i = M.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 4111 && w();
    }),
    [s, a, u, p, d, c, h, f, _, b, m, F, r, i, l, R, J]
  );
}
class tl extends ie {
  constructor(e) {
    super();
    oe(this, e, el, xn, te, {
      content: 0,
      shortcut: 1,
      disabled: 2,
      layout: 12,
    });
  }
}
function qt(n) {
  let e, t;
  return {
    c() {
      (e = S('p')), (t = _e(n[1])), v(e, 'class', 'svelte-14fho1m');
    },
    m(l, i) {
      D(l, e, i), k(e, t);
    },
    p(l, i) {
      i & 2 && ve(t, l[1]);
    },
    d(l) {
      l && H(e);
    },
  };
}
function nl(n) {
  let e, t, l, i, o, s, a, u;
  t = new an({ props: { name: n[0], size: 'var(--button-size)' } });
  let r = n[1] && qt(n);
  return {
    c() {
      (e = S('button')),
        z(t.$$.fragment),
        (l = V()),
        r && r.c(),
        v(
          e,
          'class',
          (i = le(`top ${n[5] ? 'palette-' + n[5] : ''}`) + ' svelte-14fho1m')
        ),
        (e.disabled = o = !!n[3]),
        K(e, 'disabled', n[3]);
    },
    m(d, c) {
      D(d, e, c),
        U(t, e, null),
        k(e, l),
        r && r.m(e, null),
        (s = !0),
        a || ((u = [X(e, 'click', n[8]), X(e, 'mousedown', il)]), (a = !0));
    },
    p(d, c) {
      const h = {};
      c & 1 && (h.name = d[0]),
        t.$set(h),
        d[1]
          ? r
            ? r.p(d, c)
            : ((r = qt(d)), r.c(), r.m(e, null))
          : r && (r.d(1), (r = null)),
        (!s ||
          (c & 32 &&
            i !==
              (i =
                le(`top ${d[5] ? 'palette-' + d[5] : ''}`) +
                ' svelte-14fho1m'))) &&
          v(e, 'class', i),
        (!s || (c & 8 && o !== (o = !!d[3]))) && (e.disabled = o),
        c & 40 && K(e, 'disabled', d[3]);
    },
    i(d) {
      s || (C(t.$$.fragment, d), (s = !0));
    },
    o(d) {
      T(t.$$.fragment, d), (s = !1);
    },
    d(d) {
      d && H(e), E(t), r && r.d(), (a = !1), Fe(u);
    },
  };
}
function ll(n) {
  let e, t;
  return (
    (e = new tl({
      props: {
        content: n[2],
        disabled: n[3] && n[6],
        shortcut: n[4],
        layout: n[7],
        $$slots: { default: [nl] },
        $$scope: { ctx: n },
      },
    })),
    {
      c() {
        z(e.$$.fragment);
      },
      m(l, i) {
        U(e, l, i), (t = !0);
      },
      p(l, [i]) {
        const o = {};
        i & 4 && (o.content = l[2]),
          i & 72 && (o.disabled = l[3] && l[6]),
          i & 16 && (o.shortcut = l[4]),
          i & 128 && (o.layout = l[7]),
          i & 555 && (o.$$scope = { dirty: i, ctx: l }),
          e.$set(o);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        E(e, l);
      },
    }
  );
}
function il(n) {
  n.preventDefault();
}
function ol(n, e, t) {
  let { icon: l } = e,
    { text: i = null } = e,
    { tooltip: o = null } = e,
    { disabled: s = !1 } = e,
    { shortcut: a = null } = e,
    { palette: u = null } = e,
    { disabledReason: r = 'disabled' } = e,
    { tooltipLayout: d = 'bottom' } = e;
  function c(h) {
    ke.call(this, n, h);
  }
  return (
    (n.$$set = (h) => {
      'icon' in h && t(0, (l = h.icon)),
        'text' in h && t(1, (i = h.text)),
        'tooltip' in h && t(2, (o = h.tooltip)),
        'disabled' in h && t(3, (s = h.disabled)),
        'shortcut' in h && t(4, (a = h.shortcut)),
        'palette' in h && t(5, (u = h.palette)),
        'disabledReason' in h && t(6, (r = h.disabledReason)),
        'tooltipLayout' in h && t(7, (d = h.tooltipLayout));
    }),
    [l, i, o, s, a, u, r, d, c]
  );
}
class ue extends ie {
  constructor(e) {
    super();
    oe(this, e, ol, ll, te, {
      icon: 0,
      text: 1,
      tooltip: 2,
      disabled: 3,
      shortcut: 4,
      palette: 5,
      disabledReason: 6,
      tooltipLayout: 7,
    });
  }
}
function sl(n) {
  let e, t;
  const l = n[1].default,
    i = dt(l, n, n[0], null);
  return {
    c() {
      (e = S('div')), i && i.c(), v(e, 'class', 'top svelte-p5tbxi');
    },
    m(o, s) {
      D(o, e, s), i && i.m(e, null), (t = !0);
    },
    p(o, [s]) {
      i &&
        i.p &&
        (!t || s & 1) &&
        ht(i, l, o, o[0], t ? pt(l, o[0], s, null) : _t(o[0]), null);
    },
    i(o) {
      t || (C(i, o), (t = !0));
    },
    o(o) {
      T(i, o), (t = !1);
    },
    d(o) {
      o && H(e), i && i.d(o);
    },
  };
}
function al(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e;
  return (
    (n.$$set = (o) => {
      '$$scope' in o && t(0, (i = o.$$scope));
    }),
    [i, l]
  );
}
class $e extends ie {
  constructor(e) {
    super();
    oe(this, e, al, sl, te, {});
  }
}
function ul(n) {
  let e, t;
  return (
    (e = new ue({ props: { icon: 'delete', tooltip: 'delete flow' } })),
    e.$on('click', function () {
      sn(n[3]) && n[3].apply(this, arguments);
    }),
    {
      c() {
        z(e.$$.fragment);
      },
      m(l, i) {
        U(e, l, i), (t = !0);
      },
      p(l, i) {
        n = l;
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        E(e, l);
      },
    }
  );
}
function rl(n) {
  let e, t, l, i, o, s, a, u, r;
  function d(h) {
    n[12](h);
  }
  let c = { nowrap: !0, placeholder: 'type name here' };
  return (
    n[1] !== void 0 && (c.value = n[1]),
    (i = new mt({ props: c })),
    Z.push(() => x(i, 'value', d)),
    n[13](i),
    i.$on('blur', n[6]),
    i.$on('focus', n[7]),
    i.$on('keydown', n[8]),
    i.$on('beforeinput', n[9]),
    (a = new $e({
      props: { $$slots: { default: [ul] }, $$scope: { ctx: n } },
    })),
    {
      c() {
        (e = S('div')),
          (t = S('div')),
          (l = S('div')),
          z(i.$$.fragment),
          (s = V()),
          z(a.$$.fragment),
          v(l, 'class', 'text svelte-1ys6vmc'),
          K(l, 'focus', n[0]),
          v(
            t,
            'class',
            (u = le(`content palette-${n[5]}`) + ' svelte-1ys6vmc')
          ),
          v(e, 'class', le('top') + ' svelte-1ys6vmc'),
          K(e, 'invert', n[2]);
      },
      m(h, f) {
        D(h, e, f),
          k(e, t),
          k(t, l),
          U(i, l, null),
          k(t, s),
          U(a, t, null),
          (r = !0);
      },
      p(h, [f]) {
        const p = {};
        !o && f & 2 && ((o = !0), (p.value = h[1]), ee(() => (o = !1))),
          i.$set(p),
          f & 1 && K(l, 'focus', h[0]);
        const _ = {};
        f & 1048584 && (_.$$scope = { dirty: f, ctx: h }),
          a.$set(_),
          (!r ||
            (f & 32 &&
              u !== (u = le(`content palette-${h[5]}`) + ' svelte-1ys6vmc'))) &&
            v(t, 'class', u),
          f & 4 && K(e, 'invert', h[2]);
      },
      i(h) {
        r || (C(i.$$.fragment, h), C(a.$$.fragment, h), (r = !0));
      },
      o(h) {
        T(i.$$.fragment, h), T(a.$$.fragment, h), (r = !1);
      },
      d(h) {
        h && H(e), n[13](null), E(i), E(a);
      },
    }
  );
}
function fl(n, e, t) {
  let l, i, o;
  ge(n, Re, (O) => t(16, (i = O))), ge(n, ne, (O) => t(17, (o = O)));
  const s = ct();
  let { content: a } = e,
    { children: u } = e,
    { index: r } = e,
    { focus: d } = e,
    { invert: c } = e,
    { deleteSelf: h = () => {} } = e,
    f;
  function p() {
    d && t(0, (d = !1));
  }
  function _() {
    d || t(0, (d = !0));
  }
  function b(O) {
    (O.key == 'Enter' || O.key == 'ArrowDown') &&
      (O.preventDefault(),
      u.length > 0 && (t(10, (u[0].focus = !0), u), t(0, (d = !1))));
  }
  let m = !1;
  function w() {
    d
      ? (o[i].history.addFocus([...l]),
        s('saveFocus', l),
        he(ne, (o[i].lastFocus = [...l]), o),
        ne.set(o),
        f && f.focus())
      : (m = !1);
  }
  on(w);
  function F(O) {
    m ||
      o[i].history.addPending('edit', [...l], {
        lastContent: a,
        getNextContent() {
          return a;
        },
        createEditBreak() {
          m = !1;
        },
      }),
      (m = !0);
  }
  let R = 'plain';
  function J(O) {
    (a = O), t(1, a);
  }
  function M(O) {
    Z[O ? 'unshift' : 'push'](() => {
      (f = O), t(4, f);
    });
  }
  return (
    (n.$$set = (O) => {
      'content' in O && t(1, (a = O.content)),
        'children' in O && t(10, (u = O.children)),
        'index' in O && t(11, (r = O.index)),
        'focus' in O && t(0, (d = O.focus)),
        'invert' in O && t(2, (c = O.invert)),
        'deleteSelf' in O && t(3, (h = O.deleteSelf));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 2048 && (l = [r]),
        n.$$.dirty & 1 && w(),
        n.$$.dirty & 4 &&
          (c ? t(5, (R = 'accent-secondary')) : t(5, (R = 'accent')));
    }),
    [d, a, c, h, f, R, p, _, b, F, u, r, J, M]
  );
}
class cl extends ie {
  constructor(e) {
    super();
    oe(this, e, fl, rl, te, {
      content: 1,
      children: 10,
      index: 11,
      focus: 0,
      invert: 2,
      deleteSelf: 3,
    });
  }
}
function dl(n) {
  let e, t, l, i, o, s, a, u, r, d, c, h;
  return (
    (e = new ue({
      props: {
        icon: 'undo',
        disabled: n[0].history.index == -1,
        tooltip: 'undo',
        shortcut: ['command', 'z'],
        disabledReason: 'nothing to undo',
      },
    })),
    e.$on('click', n[5]),
    (l = new ue({
      props: {
        disabled: n[0].history.index == n[0].history.data.length - 1,
        icon: 'redo',
        tooltip: 'redo',
        shortcut: ['command', 'shift', 'z'],
        disabledReason: 'nothing to redo',
      },
    })),
    l.$on('click', n[6]),
    (o = new ue({
      props: {
        icon: 'addRight',
        disabled: !n[1],
        disabledReason: We,
        tooltip: 'add response',
        shortcut: ['shift', 'return'],
      },
    })),
    o.$on('click', n[3]),
    (a = new ue({
      props: {
        icon: 'addUp',
        disabled: !n[1],
        disabledReason: We,
        tooltip: 'add arguement above',
      },
    })),
    a.$on('click', n[7]),
    (r = new ue({
      props: {
        icon: 'addDown',
        disabled: !n[1],
        disabledReason: We,
        tooltip: 'add arguement below',
        shortcut: ['return'],
      },
    })),
    r.$on('click', n[8]),
    (c = new ue({
      props: {
        icon: 'delete',
        disabled: !n[1],
        disabledReason: We,
        tooltip: 'delete selected',
      },
    })),
    c.$on('click', n[2]),
    {
      c() {
        z(e.$$.fragment),
          (t = V()),
          z(l.$$.fragment),
          (i = V()),
          z(o.$$.fragment),
          (s = V()),
          z(a.$$.fragment),
          (u = V()),
          z(r.$$.fragment),
          (d = V()),
          z(c.$$.fragment);
      },
      m(f, p) {
        U(e, f, p),
          D(f, t, p),
          U(l, f, p),
          D(f, i, p),
          U(o, f, p),
          D(f, s, p),
          U(a, f, p),
          D(f, u, p),
          U(r, f, p),
          D(f, d, p),
          U(c, f, p),
          (h = !0);
      },
      p(f, p) {
        const _ = {};
        p & 1 && (_.disabled = f[0].history.index == -1), e.$set(_);
        const b = {};
        p & 1 &&
          (b.disabled = f[0].history.index == f[0].history.data.length - 1),
          l.$set(b);
        const m = {};
        p & 2 && (m.disabled = !f[1]), o.$set(m);
        const w = {};
        p & 2 && (w.disabled = !f[1]), a.$set(w);
        const F = {};
        p & 2 && (F.disabled = !f[1]), r.$set(F);
        const R = {};
        p & 2 && (R.disabled = !f[1]), c.$set(R);
      },
      i(f) {
        h ||
          (C(e.$$.fragment, f),
          C(l.$$.fragment, f),
          C(o.$$.fragment, f),
          C(a.$$.fragment, f),
          C(r.$$.fragment, f),
          C(c.$$.fragment, f),
          (h = !0));
      },
      o(f) {
        T(e.$$.fragment, f),
          T(l.$$.fragment, f),
          T(o.$$.fragment, f),
          T(a.$$.fragment, f),
          T(r.$$.fragment, f),
          T(c.$$.fragment, f),
          (h = !1);
      },
      d(f) {
        E(e, f),
          f && H(t),
          E(l, f),
          f && H(i),
          E(o, f),
          f && H(s),
          E(a, f),
          f && H(u),
          E(r, f),
          f && H(d),
          E(c, f);
      },
    }
  );
}
function hl(n) {
  let e, t, l, i, o, s;
  return (
    (l = new $e({
      props: { $$slots: { default: [dl] }, $$scope: { ctx: n } },
    })),
    {
      c() {
        (e = S('div')),
          (t = S('div')),
          z(l.$$.fragment),
          v(t, 'class', 'buttons-wrapper svelte-psed4t'),
          v(e, 'class', 'top svelte-psed4t');
      },
      m(a, u) {
        D(a, e, u),
          k(e, t),
          U(l, t, null),
          (i = !0),
          o || ((s = X(e, 'mousedown', _l)), (o = !0));
      },
      p(a, [u]) {
        const r = {};
        u & 2051 && (r.$$scope = { dirty: u, ctx: a }), l.$set(r);
      },
      i(a) {
        i || (C(l.$$.fragment, a), (i = !0));
      },
      o(a) {
        T(l.$$.fragment, a), (i = !1);
      },
      d(a) {
        a && H(e), E(l), (o = !1), s();
      },
    }
  );
}
let We = 'no cell selected';
function _l(n) {
  n.preventDefault();
}
function pl(n, e, t) {
  var l =
    (this && this.__awaiter) ||
    function (p, _, b, m) {
      function w(F) {
        return F instanceof b
          ? F
          : new b(function (R) {
              R(F);
            });
      }
      return new (b || (b = Promise))(function (F, R) {
        function J(q) {
          try {
            O(m.next(q));
          } catch ($) {
            R($);
          }
        }
        function M(q) {
          try {
            O(m.throw(q));
          } catch ($) {
            R($);
          }
        }
        function O(q) {
          q.done ? F(q.value) : w(q.value).then(J, M);
        }
        O((m = m.apply(p, _ || [])).next());
      });
    };
  let { flow: i } = e,
    o = !1;
  function s() {
    return l(this, void 0, void 0, function* () {
      if ((yield Ge(), i.lastFocus && i.lastFocus.length > 1)) {
        let p = me(i.lastFocus);
        t(1, (o = p == null ? void 0 : p.focus));
      }
    });
  }
  ln(function () {
    s();
  });
  function a() {
    return l(this, void 0, void 0, function* () {
      if (!o) return;
      let p = me(i.lastFocus, 1),
        _ = me(i.lastFocus),
        b = [...p.children];
      if (b.length > 1 || p.level >= 1) {
        i.history.add('delete', i.lastFocus, { box: b[_.index] }),
          (b[_.index].focus = !1),
          (p.children = [...b]),
          t(0, i),
          yield Ge(),
          b.splice(_.index, 1);
        for (let m = _.index; m < b.length; m++) b[m].index = m;
        b.length <= 0
          ? (p.focus = !0)
          : _.index >= b.length
          ? (b[b.length - 1].focus = !0)
          : (b[_.index].focus = !0),
          (p.children = [...b]),
          t(0, i);
      }
    });
  }
  function u() {
    if (!o) return;
    let p = me(i.lastFocus),
      _ = [...p.children];
    if (p.level < i.columns.length) {
      _.splice(0, 0, Ie(0, p.level + 1, !1));
      for (let b = 0; b < _.length; b++) _[b].index = b;
      i.history.add('add', [...i.lastFocus, 0]), (p.children = [..._]), t(0, i);
    }
  }
  function r(p) {
    if (!o) return;
    let _ = me(i.lastFocus, 1),
      b = me(i.lastFocus),
      m = [..._.children];
    m.splice(b.index + p, 0, Ie(b.index + p, b.level, !1));
    for (let F = b.index; F < m.length; F++) m[F].index = F;
    let w = [...i.lastFocus];
    p == 0
      ? ((w[w.length - 1] -= 0),
        t(0, (i.lastFocus[i.lastFocus.length - 1] += 1), i))
      : (w[w.length - 1] += 1),
      i.history.add('add', w),
      (_.children = [...m]),
      t(0, i);
  }
  const d = () => i.history.undo(),
    c = () => i.history.redo(),
    h = () => r(0),
    f = () => r(1);
  return (
    (n.$$set = (p) => {
      'flow' in p && t(0, (i = p.flow));
    }),
    [i, o, a, u, r, d, c, h, f]
  );
}
class ml extends ie {
  constructor(e) {
    super();
    oe(this, e, pl, hl, te, { flow: 0 });
  }
}
function gl(n) {
  let e, t, l, i, o, s, a, u, r, d;
  (l = new ue({ props: { icon: 'delete', tooltip: 'close' } })),
    l.$on('click', function () {
      sn(n[1]) && n[1].apply(this, arguments);
    });
  var c = n[0];
  function h(f) {
    return { props: { closePopup: f[1] } };
  }
  return (
    c && (o = new c(h(n))),
    {
      c() {
        (e = S('div')),
          (t = S('div')),
          z(l.$$.fragment),
          (i = V()),
          o && z(o.$$.fragment),
          v(t, 'class', 'close svelte-xzcwlv'),
          v(e, 'class', 'top svelte-xzcwlv');
      },
      m(f, p) {
        D(f, e, p),
          k(e, t),
          U(l, t, null),
          k(e, i),
          o && U(o, e, null),
          (u = !0),
          r || ((d = X(window, 'keydown', n[2])), (r = !0));
      },
      p(f, [p]) {
        n = f;
        const _ = {};
        if ((p & 2 && (_.closePopup = n[1]), c !== (c = n[0]))) {
          if (o) {
            ce();
            const b = o;
            T(b.$$.fragment, 1, 0, () => {
              E(b, 1);
            }),
              de();
          }
          c
            ? ((o = new c(h(n))),
              z(o.$$.fragment),
              C(o.$$.fragment, 1),
              U(o, e, null))
            : (o = null);
        } else c && o.$set(_);
      },
      i(f) {
        u ||
          (C(l.$$.fragment, f),
          o && C(o.$$.fragment, f),
          Se(() => {
            a && a.end(1), (s = Ve(e, Vn, {})), s.start();
          }),
          (u = !0));
      },
      o(f) {
        T(l.$$.fragment, f),
          o && T(o.$$.fragment, f),
          s && s.invalidate(),
          (a = Ue(e, qn, {})),
          (u = !1);
      },
      d(f) {
        f && H(e), E(l), o && E(o), f && a && a.end(), (r = !1), d();
      },
    }
  );
}
function vl(n, e, t) {
  let { component: l } = e,
    { closeSelf: i } = e;
  function o(s) {
    s.key === 'Escape' && i();
  }
  return (
    (n.$$set = (s) => {
      'component' in s && t(0, (l = s.component)),
        'closeSelf' in s && t(1, (i = s.closeSelf));
    }),
    [l, i, o]
  );
}
class bl extends ie {
  constructor(e) {
    super();
    oe(this, e, vl, gl, te, { component: 0, closeSelf: 1 });
  }
}
function wl(n) {
  let e, t, l, i, o, s, a, u, r, d, c;
  return (
    (l = new ue({
      props: {
        icon: 'download',
        text: 'download as JSON',
        tooltip: 'saves JSON file on your computer',
        tooltipLayout: 'top',
        disabled: n[0].length == 0,
        disabledReason: 'nothing to download',
      },
    })),
    l.$on('click', n[1]),
    (u = new ue({
      props: {
        icon: 'download',
        text: 'download as XLSX',
        tooltip: 'saves XLSX file on your computer',
        tooltipLayout: 'top',
        disabled: n[0].length == 0,
        disabledReason: 'nothing to download',
      },
    })),
    u.$on('click', n[2]),
    {
      c() {
        (e = S('div')),
          (t = S('section')),
          z(l.$$.fragment),
          (i = V()),
          (o = S('ul')),
          (o.innerHTML = `<li>Can reopen file in this editor</li> 
      <li>More data is saved (last focused cell etc.)</li>`),
          (s = V()),
          (a = S('section')),
          z(u.$$.fragment),
          (r = V()),
          (d = S('ul')),
          (d.innerHTML = '<li>Anyone can view it</li>'),
          v(o, 'class', 'svelte-87ygo3'),
          v(t, 'class', 'json svelte-87ygo3'),
          v(d, 'class', 'svelte-87ygo3'),
          v(a, 'class', 'xlsx svelte-87ygo3'),
          v(e, 'class', 'top svelte-87ygo3');
      },
      m(h, f) {
        D(h, e, f),
          k(e, t),
          U(l, t, null),
          k(t, i),
          k(t, o),
          k(e, s),
          k(e, a),
          U(u, a, null),
          k(a, r),
          k(a, d),
          (c = !0);
      },
      p(h, [f]) {
        const p = {};
        f & 1 && (p.disabled = h[0].length == 0), l.$set(p);
        const _ = {};
        f & 1 && (_.disabled = h[0].length == 0), u.$set(_);
      },
      i(h) {
        c || (C(l.$$.fragment, h), C(u.$$.fragment, h), (c = !0));
      },
      o(h) {
        T(l.$$.fragment, h), T(u.$$.fragment, h), (c = !1);
      },
      d(h) {
        h && H(e), E(l), E(u);
      },
    }
  );
}
function kl(n, e, t) {
  let l, i;
  ge(n, ne, (u) => t(0, (l = u))), ge(n, qe, (u) => t(4, (i = u)));
  let { closePopup: o } = e;
  function s() {
    he(qe, (i = !0), i);
    let u = JSON.stringify(l, (d, c) => {
        if (d !== 'history') return c;
      }),
      r = document.createElement('a');
    r.setAttribute(
      'href',
      'data:text/json;charset=utf-8, ' + encodeURIComponent(u)
    ),
      r.setAttribute('download', 'flow.json'),
      document.body.appendChild(r),
      r.click(),
      document.body.removeChild(r),
      o();
  }
  function a() {
    he(qe, (i = !0), i);
    let u = new bn.exports.Workbook();
    for (let r of l) {
      let c = function (p, _, b) {
          for (; !d[b]; ) {
            let m = [];
            for (let w = 0; w < r.columns.length; w++) m.push('');
            d.push(m);
          }
          _ >= 0 && (d[b][_] = p.content),
            p.children.forEach(function (m, w) {
              c(m, _ + 1, b + w);
            });
        },
        d = [];
      c(r, -1, 0);
      let h = r.content;
      h.length >= 31 && (h = h.substring(0, 31));
      let f = u.addWorksheet(h);
      f.columns = r.columns.map(function (p) {
        return { header: p, width: 25 };
      });
      for (let p = 0; p < d.length; p++) {
        let _ = f.getRow(p + 2);
        for (let b = 0; b < d[p].length; b++) _.getCell(b + 1).value = d[p][b];
      }
      f.getRow(1).font = { bold: !0 };
    }
    u.xlsx
      .writeBuffer({ base64: !0 })
      .then(function (r) {
        let d = document.createElement('a'),
          c = new Blob([r], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          }),
          h = URL.createObjectURL(c);
        (d.href = h),
          (d.download = 'flow.xlsx'),
          document.body.appendChild(d),
          d.click(),
          setTimeout(function () {
            document.body.removeChild(d), window.URL.revokeObjectURL(h);
          }, 0);
      })
      .catch(function (r) {
        console.log(r.message);
      }),
      o();
  }
  return (
    (n.$$set = (u) => {
      'closePopup' in u && t(3, (o = u.closePopup));
    }),
    [l, s, a, o]
  );
}
class yl extends ie {
  constructor(e) {
    super();
    oe(this, e, kl, wl, te, { closePopup: 3 });
  }
}
function Sl(n) {
  let e, t, l, i, o;
  return (
    (t = new ue({
      props: {
        icon: 'upload',
        text: 'choose file from computer',
        tooltip: 'upload a JSON file from your computer',
        tooltipLayout: 'top',
      },
    })),
    t.$on('click', n[0]),
    {
      c() {
        (e = S('div')),
          z(t.$$.fragment),
          (l = V()),
          (i = S('p')),
          (i.textContent =
            'Or drag and drop a JSON file anywhere in this window'),
          v(i, 'class', 'svelte-1vv9x21'),
          v(e, 'class', 'top svelte-1vv9x21');
      },
      m(s, a) {
        D(s, e, a), U(t, e, null), k(e, l), k(e, i), (o = !0);
      },
      p: re,
      i(s) {
        o || (C(t.$$.fragment, s), (o = !0));
      },
      o(s) {
        T(t.$$.fragment, s), (o = !1);
      },
      d(s) {
        s && H(e), E(t);
      },
    }
  );
}
function Fl(n, e, t) {
  let { closePopup: l } = e;
  function i() {
    document.getElementById('uploadId').click(), l();
  }
  return (
    (n.$$set = (o) => {
      'closePopup' in o && t(1, (l = o.closePopup));
    }),
    [i, l]
  );
}
class Cl extends ie {
  constructor(e) {
    super();
    oe(this, e, Fl, Sl, te, { closePopup: 1 });
  }
}
function Ll(n) {
  let e, t, l, i, o, s, a;
  return {
    c() {
      (e = S('label')),
        (t = S('input')),
        (l = V()),
        (i = S('div')),
        (i.innerHTML = '<div class="switch svelte-8bq301"></div>'),
        v(t, 'type', 'checkbox'),
        v(t, 'class', 'svelte-8bq301'),
        v(i, 'class', 'background svelte-8bq301'),
        v(e, 'class', (o = le(`palette-${n[1]}`) + ' svelte-8bq301'));
    },
    m(u, r) {
      D(u, e, r),
        k(e, t),
        (t.checked = n[0]),
        k(e, l),
        k(e, i),
        s || ((a = X(t, 'change', n[3])), (s = !0));
    },
    p(u, [r]) {
      r & 1 && (t.checked = u[0]),
        r & 2 &&
          o !== (o = le(`palette-${u[1]}`) + ' svelte-8bq301') &&
          v(e, 'class', o);
    },
    i: re,
    o: re,
    d(u) {
      u && H(e), (s = !1), a();
    },
  };
}
function Ml(n, e, t) {
  let { value: l = !0 } = e,
    { auto: i = !0 } = e,
    o;
  function s() {
    (l = this.checked), t(0, l);
  }
  return (
    (n.$$set = (a) => {
      'value' in a && t(0, (l = a.value)), 'auto' in a && t(2, (i = a.auto));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 5 &&
        (l
          ? l == i
            ? t(1, (o = 'accent-secondary'))
            : t(1, (o = 'accent'))
          : t(1, (o = 'plain')));
    }),
    [l, o, i, s]
  );
}
class Al extends ie {
  constructor(e) {
    super();
    oe(this, e, Ml, Ll, te, { value: 0, auto: 2 });
  }
}
function Bt(n, e, t) {
  const l = n.slice();
  return (l[12] = e[t]), (l[14] = t), l;
}
function jt(n) {
  let e;
  return {
    c() {
      (e = S('p')),
        (e.textContent = 'default'),
        v(e, 'class', 'option-info svelte-ac5xa2');
    },
    m(t, l) {
      D(t, e, l);
    },
    d(t) {
      t && H(e);
    },
  };
}
function zt(n) {
  let e,
    t,
    l,
    i,
    o,
    s,
    a,
    u = n[12] + '',
    r,
    d,
    c,
    h,
    f = n[14] == n[3] && jt();
  return {
    c() {
      (e = S('label')),
        (t = S('input')),
        (o = V()),
        (s = S('li')),
        (a = S('p')),
        (r = _e(u)),
        (d = V()),
        f && f.c(),
        v(t, 'type', 'radio'),
        v(t, 'name', n[2]),
        (t.checked = l = n[14] == n[0]),
        (t.__value = i = n[14]),
        (t.value = t.__value),
        v(t, 'class', 'svelte-ac5xa2'),
        n[7][0].push(t),
        v(a, 'class', 'svelte-ac5xa2'),
        v(s, 'class', 'svelte-ac5xa2'),
        v(e, 'class', 'svelte-ac5xa2');
    },
    m(p, _) {
      D(p, e, _),
        k(e, t),
        (t.checked = t.__value === n[0]),
        k(e, o),
        k(e, s),
        k(s, a),
        k(a, r),
        k(s, d),
        f && f.m(s, null),
        c || ((h = X(t, 'change', n[6])), (c = !0));
    },
    p(p, _) {
      _ & 4 && v(t, 'name', p[2]),
        _ & 1 && l !== (l = p[14] == p[0]) && (t.checked = l),
        _ & 1 && (t.checked = t.__value === p[0]),
        _ & 2 && u !== (u = p[12] + '') && ve(r, u),
        p[14] == p[3]
          ? f || ((f = jt()), f.c(), f.m(s, null))
          : f && (f.d(1), (f = null));
    },
    d(p) {
      p && H(e),
        n[7][0].splice(n[7][0].indexOf(t), 1),
        f && f.d(),
        (c = !1),
        h();
    },
  };
}
function Ut(n) {
  let e, t, l, i, o, s, a, u, r, d, c, h;
  function f(b) {
    n[9](b);
  }
  let p = { placeholder: 'custom', nowrap: !0 };
  n[1].customOptionValue !== void 0 && (p.value = n[1].customOptionValue),
    (a = new mt({ props: p })),
    Z.push(() => x(a, 'value', f)),
    a.$on('input', n[10]),
    a.$on('focus', n[11]);
  let _ = n[1].customOptionValue != '' && Et();
  return {
    c() {
      (e = S('label')),
        (t = S('input')),
        (o = V()),
        (s = S('li')),
        z(a.$$.fragment),
        (r = V()),
        _ && _.c(),
        v(t, 'type', 'radio'),
        v(t, 'name', n[2]),
        (t.checked = l = n[0] == n[1].options.length),
        (t.__value = i = n[1].options.length),
        (t.value = t.__value),
        v(t, 'class', 'svelte-ac5xa2'),
        n[7][0].push(t),
        v(s, 'class', 'svelte-ac5xa2'),
        v(e, 'class', 'svelte-ac5xa2');
    },
    m(b, m) {
      D(b, e, m),
        k(e, t),
        (t.checked = t.__value === n[0]),
        k(e, o),
        k(e, s),
        U(a, s, null),
        k(s, r),
        _ && _.m(s, null),
        (d = !0),
        c || ((h = X(t, 'change', n[8])), (c = !0));
    },
    p(b, m) {
      (!d || m & 4) && v(t, 'name', b[2]),
        (!d || (m & 3 && l !== (l = b[0] == b[1].options.length))) &&
          (t.checked = l),
        (!d || (m & 2 && i !== (i = b[1].options.length))) &&
          ((t.__value = i), (t.value = t.__value)),
        m & 1 && (t.checked = t.__value === b[0]);
      const w = {};
      !u &&
        m & 2 &&
        ((u = !0), (w.value = b[1].customOptionValue), ee(() => (u = !1))),
        a.$set(w),
        b[1].customOptionValue != ''
          ? _ || ((_ = Et()), _.c(), _.m(s, null))
          : _ && (_.d(1), (_ = null));
    },
    i(b) {
      d || (C(a.$$.fragment, b), (d = !0));
    },
    o(b) {
      T(a.$$.fragment, b), (d = !1);
    },
    d(b) {
      b && H(e),
        n[7][0].splice(n[7][0].indexOf(t), 1),
        E(a),
        _ && _.d(),
        (c = !1),
        h();
    },
  };
}
function Et(n) {
  let e;
  return {
    c() {
      (e = S('p')),
        (e.textContent = 'custom'),
        v(e, 'class', 'option-info svelte-ac5xa2');
    },
    m(t, l) {
      D(t, e, l);
    },
    d(t) {
      t && H(e);
    },
  };
}
function Tl(n) {
  let e,
    t,
    l,
    i,
    o,
    s,
    a,
    u,
    r,
    d = n[1].options,
    c = [];
  for (let f = 0; f < d.length; f += 1) c[f] = zt(Bt(n, d, f));
  let h = n[1].customOption && Ut(n);
  return {
    c() {
      (e = S('div')), (t = S('div')), (l = S('div')), (o = V()), (s = S('ul'));
      for (let f = 0; f < c.length; f += 1) c[f].c();
      (a = V()),
        h && h.c(),
        v(l, 'class', 'switch svelte-ac5xa2'),
        v(
          l,
          'style',
          (i = `--pos:calc(${n[0]} * (var(--button-size) + var(--padding) * 2) + var(--padding-small))`)
        ),
        v(t, 'class', 'background svelte-ac5xa2'),
        v(s, 'class', 'svelte-ac5xa2'),
        v(e, 'class', (u = le(`top palette-${n[4]}`) + ' svelte-ac5xa2'));
    },
    m(f, p) {
      D(f, e, p), k(e, t), k(t, l), k(e, o), k(e, s);
      for (let _ = 0; _ < c.length; _ += 1) c[_].m(s, null);
      k(s, a), h && h.m(s, null), (r = !0);
    },
    p(f, [p]) {
      if (
        ((!r ||
          (p & 1 &&
            i !==
              (i = `--pos:calc(${f[0]} * (var(--button-size) + var(--padding) * 2) + var(--padding-small))`))) &&
          v(l, 'style', i),
        p & 15)
      ) {
        d = f[1].options;
        let _;
        for (_ = 0; _ < d.length; _ += 1) {
          const b = Bt(f, d, _);
          c[_] ? c[_].p(b, p) : ((c[_] = zt(b)), c[_].c(), c[_].m(s, a));
        }
        for (; _ < c.length; _ += 1) c[_].d(1);
        c.length = d.length;
      }
      f[1].customOption
        ? h
          ? (h.p(f, p), p & 2 && C(h, 1))
          : ((h = Ut(f)), h.c(), C(h, 1), h.m(s, null))
        : h &&
          (ce(),
          T(h, 1, 1, () => {
            h = null;
          }),
          de()),
        (!r ||
          (p & 16 &&
            u !== (u = le(`top palette-${f[4]}`) + ' svelte-ac5xa2'))) &&
          v(e, 'class', u);
    },
    i(f) {
      r || (C(h), (r = !0));
    },
    o(f) {
      T(h), (r = !1);
    },
    d(f) {
      f && H(e), Ne(c, f), h && h.d();
    },
  };
}
function Rl(n, e, t) {
  let l,
    { name: i } = e,
    { value: o } = e,
    { auto: s } = e;
  const a = ct();
  let { detail: u } = e;
  const r = [[]];
  function d() {
    (o = this.__value), t(0, o);
  }
  function c() {
    (o = this.__value), t(0, o);
  }
  function h(_) {
    n.$$.not_equal(u.customOptionValue, _) &&
      ((u.customOptionValue = _), t(1, u));
  }
  const f = () => a('forceUpdate'),
    p = () => t(0, (o = u.options.length));
  return (
    (n.$$set = (_) => {
      'name' in _ && t(2, (i = _.name)),
        'value' in _ && t(0, (o = _.value)),
        'auto' in _ && t(3, (s = _.auto)),
        'detail' in _ && t(1, (u = _.detail));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 9 && t(4, (l = s == o ? 'accent-secondary' : 'accent'));
    }),
    [o, u, i, s, l, a, d, r, c, h, f, p]
  );
}
class Ol extends ie {
  constructor(e) {
    super();
    oe(this, e, Rl, Tl, te, { name: 2, value: 0, auto: 3, detail: 1 });
  }
}
function Nl(n) {
  let e, t, l, i, o, s, a, u, r, d, c, h, f, p, _, b;
  return {
    c() {
      (e = S('div')),
        (t = S('label')),
        (l = S('div')),
        (o = V()),
        (s = S('input')),
        (d = V()),
        (c = S('label')),
        (h = S('input')),
        v(l, 'class', 'switch svelte-12gyw47'),
        v(
          l,
          'style',
          (i = `
      left: calc(var(--padding-small) + ${
        (Math.max(Math.min(n[0], n[1].max), n[1].min) - n[1].min) /
        (n[1].max - n[1].min)
      } * (100% - var(--button-size) - var(--padding-small) * 2));
      transition: left ${n[2] ? '0' : 'var(--transition-speed)'}
      , background var(--transition-speed);`)
        ),
        v(s, 'class', 'slider svelte-12gyw47'),
        v(s, 'type', 'range'),
        v(s, 'min', (a = n[1].min)),
        v(s, 'max', (u = n[1].max)),
        v(s, 'step', (r = n[1].step)),
        v(t, 'class', 'svelte-12gyw47'),
        v(h, 'type', 'number'),
        v(h, 'class', 'svelte-12gyw47'),
        v(c, 'class', 'small svelte-12gyw47'),
        v(e, 'class', (f = le(`top palette-${n[3]}`) + ' svelte-12gyw47')),
        v(e, 'style', (p = `--value: ${n[0]}`)),
        K(e, 'hue', n[1].hue);
    },
    m(m, w) {
      D(m, e, w),
        k(e, t),
        k(t, l),
        k(t, o),
        k(t, s),
        He(s, n[0]),
        k(e, d),
        k(e, c),
        k(c, h),
        He(h, n[0]),
        _ ||
          ((b = [
            X(s, 'change', n[8]),
            X(s, 'input', n[8]),
            X(h, 'input', n[9]),
            X(e, 'mousedown', n[4]),
            X(e, 'mousemove', n[5]),
            X(e, 'mouseup', n[6]),
          ]),
          (_ = !0));
    },
    p(m, [w]) {
      w & 7 &&
        i !==
          (i = `
      left: calc(var(--padding-small) + ${
        (Math.max(Math.min(m[0], m[1].max), m[1].min) - m[1].min) /
        (m[1].max - m[1].min)
      } * (100% - var(--button-size) - var(--padding-small) * 2));
      transition: left ${m[2] ? '0' : 'var(--transition-speed)'}
      , background var(--transition-speed);`) &&
        v(l, 'style', i),
        w & 2 && a !== (a = m[1].min) && v(s, 'min', a),
        w & 2 && u !== (u = m[1].max) && v(s, 'max', u),
        w & 2 && r !== (r = m[1].step) && v(s, 'step', r),
        w & 1 && He(s, m[0]),
        w & 1 && rt(h.value) !== m[0] && He(h, m[0]),
        w & 8 &&
          f !== (f = le(`top palette-${m[3]}`) + ' svelte-12gyw47') &&
          v(e, 'class', f),
        w & 1 && p !== (p = `--value: ${m[0]}`) && v(e, 'style', p),
        w & 10 && K(e, 'hue', m[1].hue);
    },
    i: re,
    o: re,
    d(m) {
      m && H(e), (_ = !1), Fe(b);
    },
  };
}
function Pl(n, e, t) {
  let l,
    { value: i } = e,
    { auto: o } = e,
    { detail: s } = e,
    a = !1,
    u = !1,
    r = 0;
  function d(_) {
    (a = !0), (r = _.pageX), t(2, (u = !1));
  }
  function c(_) {
    a && Math.abs(r - _.pageX) > 3 && t(2, (u = !0));
  }
  function h(_) {
    (a = !1), t(2, (u = !1));
  }
  function f() {
    (i = rt(this.value)), t(0, i);
  }
  function p() {
    (i = rt(this.value)), t(0, i);
  }
  return (
    (n.$$set = (_) => {
      'value' in _ && t(0, (i = _.value)),
        'auto' in _ && t(7, (o = _.auto)),
        'detail' in _ && t(1, (s = _.detail));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 129 && t(3, (l = o == i ? 'accent-secondary' : 'accent'));
    }),
    [i, s, u, l, d, c, h, o, f, p]
  );
}
class Dl extends ie {
  constructor(e) {
    super();
    oe(this, e, Pl, Nl, te, { value: 0, auto: 7, detail: 1 });
  }
}
function It(n) {
  let e, t, l;
  function i(s) {
    n[9](s);
  }
  let o = { auto: n[0].auto };
  return (
    n[1] !== void 0 && (o.value = n[1]),
    (e = new Al({ props: o })),
    Z.push(() => x(e, 'value', i)),
    {
      c() {
        z(e.$$.fragment);
      },
      m(s, a) {
        U(e, s, a), (l = !0);
      },
      p(s, a) {
        const u = {};
        a & 1 && (u.auto = s[0].auto),
          !t && a & 2 && ((t = !0), (u.value = s[1]), ee(() => (t = !1))),
          e.$set(u);
      },
      i(s) {
        l || (C(e.$$.fragment, s), (l = !0));
      },
      o(s) {
        T(e.$$.fragment, s), (l = !1);
      },
      d(s) {
        E(e, s);
      },
    }
  );
}
function Xt(n) {
  let e,
    t = n[0].info + '',
    l;
  return {
    c() {
      (e = S('p')), (l = _e(t)), v(e, 'class', 'svelte-1il06s5');
    },
    m(i, o) {
      D(i, e, o), k(e, l);
    },
    p(i, o) {
      o & 1 && t !== (t = i[0].info + '') && ve(l, t);
    },
    d(i) {
      i && H(e);
    },
  };
}
function Kt(n) {
  let e, t, l;
  function i(s) {
    n[10](s);
  }
  let o = { name: n[0].name, auto: n[0].auto, detail: n[0].detail };
  return (
    n[1] !== void 0 && (o.value = n[1]),
    (e = new Ol({ props: o })),
    Z.push(() => x(e, 'value', i)),
    e.$on('forceUpdate', n[11]),
    {
      c() {
        z(e.$$.fragment);
      },
      m(s, a) {
        U(e, s, a), (l = !0);
      },
      p(s, a) {
        const u = {};
        a & 1 && (u.name = s[0].name),
          a & 1 && (u.auto = s[0].auto),
          a & 1 && (u.detail = s[0].detail),
          !t && a & 2 && ((t = !0), (u.value = s[1]), ee(() => (t = !1))),
          e.$set(u);
      },
      i(s) {
        l || (C(e.$$.fragment, s), (l = !0));
      },
      o(s) {
        T(e.$$.fragment, s), (l = !1);
      },
      d(s) {
        E(e, s);
      },
    }
  );
}
function Wt(n) {
  let e, t, l;
  function i(s) {
    n[12](s);
  }
  let o = { auto: n[0].auto, detail: n[0].detail };
  return (
    n[1] !== void 0 && (o.value = n[1]),
    (e = new Dl({ props: o })),
    Z.push(() => x(e, 'value', i)),
    {
      c() {
        z(e.$$.fragment);
      },
      m(s, a) {
        U(e, s, a), (l = !0);
      },
      p(s, a) {
        const u = {};
        a & 1 && (u.auto = s[0].auto),
          a & 1 && (u.detail = s[0].detail),
          !t && a & 2 && ((t = !0), (u.value = s[1]), ee(() => (t = !1))),
          e.$set(u);
      },
      i(s) {
        l || (C(e.$$.fragment, s), (l = !0));
      },
      o(s) {
        T(e.$$.fragment, s), (l = !1);
      },
      d(s) {
        E(e, s);
      },
    }
  );
}
function Hl(n) {
  let e,
    t,
    l,
    i = n[0].name + '',
    o,
    s,
    a,
    u,
    r,
    d,
    c,
    h,
    f,
    p;
  (u = new ue({
    props: {
      icon: 'delete',
      tooltip: 'reset to default',
      tooltipLayout: 'right',
    },
  })),
    u.$on('click', n[6]);
  let _ = n[0].type == 'toggle' && It(n),
    b = n[0].info && Xt(n),
    m = n[0].type == 'radio' && Kt(n),
    w = n[0].type == 'slider' && Wt(n);
  return {
    c() {
      (e = S('div')),
        (t = S('span')),
        (l = S('h1')),
        (o = _e(i)),
        (s = V()),
        (a = S('div')),
        z(u.$$.fragment),
        (r = V()),
        _ && _.c(),
        (d = V()),
        b && b.c(),
        (c = V()),
        m && m.c(),
        (h = V()),
        w && w.c(),
        v(l, 'class', 'svelte-1il06s5'),
        v(a, 'class', 'reset svelte-1il06s5'),
        K(a, 'hidden', n[1] == n[0].auto),
        v(t, 'class', 'above svelte-1il06s5'),
        v(e, 'class', 'top svelte-1il06s5'),
        v(e, 'style', (f = `--spotlight:${n[4]}`));
    },
    m(F, R) {
      D(F, e, R),
        k(e, t),
        k(t, l),
        k(l, o),
        k(t, s),
        k(t, a),
        U(u, a, null),
        k(t, r),
        _ && _.m(t, null),
        k(t, d),
        b && b.m(t, null),
        k(e, c),
        m && m.m(e, null),
        k(e, h),
        w && w.m(e, null),
        n[13](e),
        (p = !0);
    },
    p(F, [R]) {
      (!p || R & 1) && i !== (i = F[0].name + '') && ve(o, i),
        R & 3 && K(a, 'hidden', F[1] == F[0].auto),
        F[0].type == 'toggle'
          ? _
            ? (_.p(F, R), R & 1 && C(_, 1))
            : ((_ = It(F)), _.c(), C(_, 1), _.m(t, d))
          : _ &&
            (ce(),
            T(_, 1, 1, () => {
              _ = null;
            }),
            de()),
        F[0].info
          ? b
            ? b.p(F, R)
            : ((b = Xt(F)), b.c(), b.m(t, null))
          : b && (b.d(1), (b = null)),
        F[0].type == 'radio'
          ? m
            ? (m.p(F, R), R & 1 && C(m, 1))
            : ((m = Kt(F)), m.c(), C(m, 1), m.m(e, h))
          : m &&
            (ce(),
            T(m, 1, 1, () => {
              m = null;
            }),
            de()),
        F[0].type == 'slider'
          ? w
            ? (w.p(F, R), R & 1 && C(w, 1))
            : ((w = Wt(F)), w.c(), C(w, 1), w.m(e, null))
          : w &&
            (ce(),
            T(w, 1, 1, () => {
              w = null;
            }),
            de()),
        (!p || (R & 16 && f !== (f = `--spotlight:${F[4]}`))) &&
          v(e, 'style', f);
    },
    i(F) {
      p || (C(u.$$.fragment, F), C(_), C(m), C(w), (p = !0));
    },
    o(F) {
      T(u.$$.fragment, F), T(_), T(m), T(w), (p = !1);
    },
    d(F) {
      F && H(e),
        E(u),
        _ && _.d(),
        b && b.d(),
        m && m.d(),
        w && w.d(),
        n[13](null);
    },
  };
}
function Vl(n, e, t) {
  let l,
    i = re,
    o = () => (i(), (i = wn(c, (F) => t(4, (l = F)))), c);
  n.$$.on_destroy.push(() => i());
  let { setting: s } = e,
    { key: a } = e,
    u = s.value;
  function r(F) {
    G.setValue(a, F), (F = s.value);
  }
  function d() {
    G.setValue(a, s.auto), t(1, (u = s.value));
  }
  Oe(
    G.subscribe([a], function (F) {
      s.value != u && t(1, (u = s.value));
    })
  );
  let c = bt(0);
  o();
  let h;
  function f() {
    h.scrollIntoView({ block: 'center' }),
      o(t(2, (c = bt(1, { duration: 2e3 })))),
      he(c, (l = 0), l);
  }
  function p(F) {
    (u = F), t(1, u);
  }
  function _(F) {
    (u = F), t(1, u);
  }
  const b = () => r(u);
  function m(F) {
    (u = F), t(1, u);
  }
  function w(F) {
    Z[F ? 'unshift' : 'push'](() => {
      (h = F), t(3, h);
    });
  }
  return (
    (n.$$set = (F) => {
      'setting' in F && t(0, (s = F.setting)), 'key' in F && t(7, (a = F.key));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 2 && r(u);
    }),
    [s, u, c, h, l, r, d, a, f, p, _, b, m, w]
  );
}
class ql extends ie {
  constructor(e) {
    super();
    oe(this, e, Vl, Hl, te, { setting: 0, key: 7, scrollToSelf: 8 });
  }
  get scrollToSelf() {
    return this.$$.ctx[8];
  }
}
function Jt(n, e, t) {
  const l = n.slice();
  return (l[7] = e[t]), (l[8] = e), (l[9] = t), l;
}
function Gt(n, e, t) {
  const l = n.slice();
  return (l[7] = e[t]), (l[9] = t), l;
}
function Yt(n) {
  let e,
    t,
    l = G.data[n[7]].name + '',
    i,
    o,
    s,
    a;
  function u() {
    return n[3](n[9]);
  }
  return {
    c() {
      (e = S('li')),
        (t = S('button')),
        (i = _e(l)),
        (o = V()),
        v(t, 'class', 'svelte-1r275ni');
    },
    m(r, d) {
      D(r, e, d),
        k(e, t),
        k(t, i),
        k(e, o),
        s || ((a = X(t, 'click', u)), (s = !0));
    },
    p(r, d) {
      n = r;
    },
    d(r) {
      r && H(e), (s = !1), a();
    },
  };
}
function Bl(n) {
  let e, t, l, i;
  return (
    (e = new ue({ props: { icon: 'delete', text: 'reset all settings' } })),
    e.$on('click', n[4]),
    (l = new ue({
      props: {
        icon: 'dots',
        text: 'randomize settings',
        tooltip: 'why would you click this',
      },
    })),
    l.$on('click', n[5]),
    {
      c() {
        z(e.$$.fragment), (t = V()), z(l.$$.fragment);
      },
      m(o, s) {
        U(e, o, s), D(o, t, s), U(l, o, s), (i = !0);
      },
      p: re,
      i(o) {
        i || (C(e.$$.fragment, o), C(l.$$.fragment, o), (i = !0));
      },
      o(o) {
        T(e.$$.fragment, o), T(l.$$.fragment, o), (i = !1);
      },
      d(o) {
        E(e, o), o && H(t), E(l, o);
      },
    }
  );
}
function Qt(n) {
  let e,
    t = n[9],
    l;
  const i = () => n[6](e, t),
    o = () => n[6](null, t);
  let s = { key: n[7], setting: G.data[n[7]] };
  return (
    (e = new ql({ props: s })),
    i(),
    {
      c() {
        z(e.$$.fragment);
      },
      m(a, u) {
        U(e, a, u), (l = !0);
      },
      p(a, u) {
        t !== a[9] && (o(), (t = a[9]), i());
        const r = {};
        e.$set(r);
      },
      i(a) {
        l || (C(e.$$.fragment, a), (l = !0));
      },
      o(a) {
        T(e.$$.fragment, a), (l = !1);
      },
      d(a) {
        o(), E(e, a);
      },
    }
  );
}
function jl(n) {
  let e,
    t,
    l,
    i,
    o,
    s,
    a,
    u,
    r,
    d,
    c,
    h = Object.keys(G.data),
    f = [];
  for (let m = 0; m < h.length; m += 1) f[m] = Yt(Gt(n, h, m));
  a = new $e({ props: { $$slots: { default: [Bl] }, $$scope: { ctx: n } } });
  let p = Object.keys(G.data),
    _ = [];
  for (let m = 0; m < p.length; m += 1) _[m] = Qt(Jt(n, p, m));
  const b = (m) =>
    T(_[m], 1, 1, () => {
      _[m] = null;
    });
  return {
    c() {
      (e = S('div')), (t = S('div')), (l = S('ul'));
      for (let m = 0; m < f.length; m += 1) f[m].c();
      (i = V()),
        (o = S('div')),
        (s = S('section')),
        z(a.$$.fragment),
        (u = V()),
        (r = S('section')),
        (d = S('ul'));
      for (let m = 0; m < _.length; m += 1) _[m].c();
      v(l, 'class', 'svelte-1r275ni'),
        v(t, 'class', 'outline svelte-1r275ni'),
        v(s, 'class', 'controls svelte-1r275ni'),
        v(d, 'class', 'svelte-1r275ni'),
        v(r, 'class', 'settings svelte-1r275ni'),
        v(o, 'class', 'content svelte-1r275ni'),
        v(e, 'class', 'top palette-plain svelte-1r275ni');
    },
    m(m, w) {
      D(m, e, w), k(e, t), k(t, l);
      for (let F = 0; F < f.length; F += 1) f[F].m(l, null);
      k(e, i), k(e, o), k(o, s), U(a, s, null), k(o, u), k(o, r), k(r, d);
      for (let F = 0; F < _.length; F += 1) _[F].m(d, null);
      c = !0;
    },
    p(m, [w]) {
      if (w & 2) {
        h = Object.keys(G.data);
        let R;
        for (R = 0; R < h.length; R += 1) {
          const J = Gt(m, h, R);
          f[R] ? f[R].p(J, w) : ((f[R] = Yt(J)), f[R].c(), f[R].m(l, null));
        }
        for (; R < f.length; R += 1) f[R].d(1);
        f.length = h.length;
      }
      const F = {};
      if ((w & 2048 && (F.$$scope = { dirty: w, ctx: m }), a.$set(F), w & 1)) {
        p = Object.keys(G.data);
        let R;
        for (R = 0; R < p.length; R += 1) {
          const J = Jt(m, p, R);
          _[R]
            ? (_[R].p(J, w), C(_[R], 1))
            : ((_[R] = Qt(J)), _[R].c(), C(_[R], 1), _[R].m(d, null));
        }
        for (ce(), R = p.length; R < _.length; R += 1) b(R);
        de();
      }
    },
    i(m) {
      if (!c) {
        C(a.$$.fragment, m);
        for (let w = 0; w < p.length; w += 1) C(_[w]);
        c = !0;
      }
    },
    o(m) {
      T(a.$$.fragment, m), (_ = _.filter(Boolean));
      for (let w = 0; w < _.length; w += 1) T(_[w]);
      c = !1;
    },
    d(m) {
      m && H(e), Ne(f, m), E(a), Ne(_, m);
    },
  };
}
function zl(n, e, t) {
  let { closePopup: l } = e;
  Oe(() => {
    G.saveToLocalStorage();
  });
  let i = [];
  function o(d) {
    i[d].scrollToSelf();
  }
  const s = (d) => o(d),
    a = () => G.resetToAuto(),
    u = () => G.randomize();
  function r(d, c) {
    Z[d ? 'unshift' : 'push'](() => {
      (i[c] = d), t(0, i);
    });
  }
  return (
    (n.$$set = (d) => {
      'closePopup' in d && t(2, (l = d.closePopup));
    }),
    [i, o, l, s, a, u, r]
  );
}
class Ul extends ie {
  constructor(e) {
    super();
    oe(this, e, zl, jl, te, { closePopup: 2 });
  }
}
function El(n) {
  let e;
  return {
    c() {
      e = _e('no name');
    },
    m(t, l) {
      D(t, e, l);
    },
    p: re,
    d(t) {
      t && H(e);
    },
  };
}
function Il(n) {
  let e = n[0].content + '',
    t;
  return {
    c() {
      t = _e(e);
    },
    m(l, i) {
      D(l, t, i);
    },
    p(l, i) {
      i & 1 && e !== (e = l[0].content + '') && ve(t, e);
    },
    d(l) {
      l && H(t);
    },
  };
}
function Xl(n) {
  let e, t, l, i, o, s, a, u;
  function r(h, f) {
    return h[0].content ? Il : El;
  }
  let d = r(n),
    c = d(n);
  return {
    c() {
      (e = S('div')),
        (t = S('button')),
        c.c(),
        v(t, 'class', 'svelte-1iz0948'),
        K(t, 'selected', n[1]),
        K(t, 'empty', n[0].content.length == 0),
        v(e, 'class', (l = le(`top palette-${n[2]}`) + ' svelte-1iz0948')),
        K(e, 'invert', n[0].invert);
    },
    m(h, f) {
      D(h, e, f),
        k(e, t),
        c.m(t, null),
        (s = !0),
        a || ((u = X(t, 'click', n[3])), (a = !0));
    },
    p(h, [f]) {
      d === (d = r(h)) && c
        ? c.p(h, f)
        : (c.d(1), (c = d(h)), c && (c.c(), c.m(t, null))),
        f & 2 && K(t, 'selected', h[1]),
        f & 1 && K(t, 'empty', h[0].content.length == 0),
        (!s ||
          (f & 4 &&
            l !== (l = le(`top palette-${h[2]}`) + ' svelte-1iz0948'))) &&
          v(e, 'class', l),
        f & 5 && K(e, 'invert', h[0].invert);
    },
    i(h) {
      s ||
        (Se(() => {
          o && o.end(1), (i = Ve(e, Dn, {})), i.start();
        }),
        (s = !0));
    },
    o(h) {
      i && i.invalidate(), (o = Ue(e, Hn, {})), (s = !1);
    },
    d(h) {
      h && H(e), c.d(), h && o && o.end(), (a = !1), u();
    },
  };
}
function Kl(n, e, t) {
  let { flow: l } = e,
    { selected: i } = e,
    o;
  function s(a) {
    ke.call(this, n, a);
  }
  return (
    (n.$$set = (a) => {
      'flow' in a && t(0, (l = a.flow)),
        'selected' in a && t(1, (i = a.selected));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 1 &&
        (l.invert ? t(2, (o = 'accent-secondary')) : t(2, (o = 'accent')));
    }),
    [l, i, o, s]
  );
}
class Wl extends ie {
  constructor(e) {
    super();
    oe(this, e, Kl, Xl, te, { flow: 0, selected: 1 });
  }
}
const { document: Je } = kn;
function Zt(n, e, t) {
  const l = n.slice();
  return (l[39] = e[t]), (l[40] = e), (l[41] = t), l;
}
function $t(n) {
  let e,
    t,
    l = n[0],
    i,
    o,
    s,
    a,
    u = xt(n);
  return {
    c() {
      (e = S('div')),
        (t = S('div')),
        u.c(),
        v(t, 'class', 'popups svelte-1ykl876'),
        v(e, 'class', 'screen svelte-1ykl876');
    },
    m(r, d) {
      D(r, e, d),
        k(e, t),
        u.m(t, null),
        (o = !0),
        s ||
          ((a = [X(t, 'click', wt(n[14])), X(e, 'click', wt(n[15]))]),
          (s = !0));
    },
    p(r, d) {
      d[0] & 1 && te(l, (l = r[0]))
        ? (ce(), T(u, 1, 1, re), de(), (u = xt(r)), u.c(), C(u), u.m(t, null))
        : u.p(r, d);
    },
    i(r) {
      o ||
        (C(u),
        Se(() => {
          i || (i = Ye(e, Ft, {}, !0)), i.run(1);
        }),
        (o = !0));
    },
    o(r) {
      T(u), i || (i = Ye(e, Ft, {}, !1)), i.run(0), (o = !1);
    },
    d(r) {
      r && H(e), u.d(r), r && i && i.end(), (s = !1), Fe(a);
    },
  };
}
function xt(n) {
  let e, t;
  return (
    (e = new bl({ props: { component: n[0][0], closeSelf: n[13] } })),
    {
      c() {
        z(e.$$.fragment);
      },
      m(l, i) {
        U(e, l, i), (t = !0);
      },
      p(l, i) {
        const o = {};
        i[0] & 1 && (o.component = l[0][0]), e.$set(o);
      },
      i(l) {
        t || (C(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        T(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        E(e, l);
      },
    }
  );
}
function Jl(n) {
  let e, t, l, i, o, s;
  return (
    (e = new ue({ props: { icon: 'settings', tooltip: 'settings' } })),
    e.$on('click', n[16]),
    (l = new ue({
      props: {
        icon: 'download',
        disabled: n[1].length == 0,
        disabledReason: 'nothing to download',
        tooltip: 'download as file',
      },
    })),
    l.$on('click', n[17]),
    (o = new ue({ props: { icon: 'upload', tooltip: 'import file' } })),
    o.$on('click', n[18]),
    {
      c() {
        z(e.$$.fragment),
          (t = V()),
          z(l.$$.fragment),
          (i = V()),
          z(o.$$.fragment);
      },
      m(a, u) {
        U(e, a, u), D(a, t, u), U(l, a, u), D(a, i, u), U(o, a, u), (s = !0);
      },
      p(a, u) {
        const r = {};
        u[0] & 2 && (r.disabled = a[1].length == 0), l.$set(r);
      },
      i(a) {
        s ||
          (C(e.$$.fragment, a),
          C(l.$$.fragment, a),
          C(o.$$.fragment, a),
          (s = !0));
      },
      o(a) {
        T(e.$$.fragment, a), T(l.$$.fragment, a), T(o.$$.fragment, a), (s = !1);
      },
      d(a) {
        E(e, a), a && H(t), E(l, a), a && H(i), E(o, a);
      },
    }
  );
}
function en(n) {
  let e, t, l;
  function i(a) {
    n[19](a, n[41]);
  }
  function o() {
    return n[20](n[41]);
  }
  let s = { selected: n[41] == n[2] };
  return (
    n[1][n[41]] !== void 0 && (s.flow = n[1][n[41]]),
    (e = new Wl({ props: s })),
    Z.push(() => x(e, 'flow', i)),
    e.$on('click', o),
    {
      c() {
        z(e.$$.fragment);
      },
      m(a, u) {
        U(e, a, u), (l = !0);
      },
      p(a, u) {
        n = a;
        const r = {};
        u[0] & 4 && (r.selected = n[41] == n[2]),
          !t &&
            u[0] & 2 &&
            ((t = !0), (r.flow = n[1][n[41]]), ee(() => (t = !1))),
          e.$set(r);
      },
      i(a) {
        l || (C(e.$$.fragment, a), (l = !0));
      },
      o(a) {
        T(e.$$.fragment, a), (l = !1);
      },
      d(a) {
        E(e, a);
      },
    }
  );
}
function tn(n) {
  let e = n[2],
    t,
    l,
    i = nn(n);
  return {
    c() {
      i.c(), (t = Xe());
    },
    m(o, s) {
      i.m(o, s), D(o, t, s), (l = !0);
    },
    p(o, s) {
      s[0] & 4 && te(e, (e = o[2]))
        ? (ce(),
          T(i, 1, 1, re),
          de(),
          (i = nn(o)),
          i.c(),
          C(i),
          i.m(t.parentNode, t))
        : i.p(o, s);
    },
    i(o) {
      l || (C(i), (l = !0));
    },
    o(o) {
      T(i), (l = !1);
    },
    d(o) {
      o && H(t), i.d(o);
    },
  };
}
function nn(n) {
  let e, t, l, i, o, s, a, u, r, d, c, h, f, p, _, b;
  function m(g) {
    n[24](g);
  }
  function w(g) {
    n[25](g);
  }
  function F(g) {
    n[26](g);
  }
  function R(g) {
    n[27](g);
  }
  function J(g) {
    n[28](g);
  }
  let M = { deleteSelf: n[23] };
  n[1][n[2]].content !== void 0 && (M.content = n[1][n[2]].content),
    n[1][n[2]].children !== void 0 && (M.children = n[1][n[2]].children),
    n[1][n[2]].index !== void 0 && (M.index = n[1][n[2]].index),
    n[1][n[2]].focus !== void 0 && (M.focus = n[1][n[2]].focus),
    n[1][n[2]].invert !== void 0 && (M.invert = n[1][n[2]].invert),
    (t = new cl({ props: M })),
    Z.push(() => x(t, 'content', m)),
    Z.push(() => x(t, 'children', w)),
    Z.push(() => x(t, 'index', F)),
    Z.push(() => x(t, 'focus', R)),
    Z.push(() => x(t, 'invert', J));
  function O(g) {
    n[29](g);
  }
  let q = {};
  n[1][n[2]] !== void 0 && (q.flow = n[1][n[2]]),
    (d = new ml({ props: q })),
    Z.push(() => x(d, 'flow', O));
  function $(g) {
    n[30](g);
  }
  let j = {};
  return (
    n[1][n[2]] !== void 0 && (j.root = n[1][n[2]]),
    (p = new Kn({ props: j })),
    Z.push(() => x(p, 'root', $)),
    p.$on('focusFlow', n[4]),
    {
      c() {
        (e = S('div')),
          z(t.$$.fragment),
          (u = V()),
          (r = S('div')),
          z(d.$$.fragment),
          (h = V()),
          (f = S('div')),
          z(p.$$.fragment),
          v(e, 'class', 'title svelte-1ykl876'),
          v(r, 'class', 'box-control svelte-1ykl876'),
          v(f, 'class', 'flow svelte-1ykl876');
      },
      m(g, L) {
        D(g, e, L),
          U(t, e, null),
          D(g, u, L),
          D(g, r, L),
          U(d, r, null),
          D(g, h, L),
          D(g, f, L),
          U(p, f, null),
          (b = !0);
      },
      p(g, L) {
        const I = {};
        L[0] & 4 && (I.deleteSelf = g[23]),
          !l &&
            L[0] & 6 &&
            ((l = !0), (I.content = g[1][g[2]].content), ee(() => (l = !1))),
          !i &&
            L[0] & 6 &&
            ((i = !0), (I.children = g[1][g[2]].children), ee(() => (i = !1))),
          !o &&
            L[0] & 6 &&
            ((o = !0), (I.index = g[1][g[2]].index), ee(() => (o = !1))),
          !s &&
            L[0] & 6 &&
            ((s = !0), (I.focus = g[1][g[2]].focus), ee(() => (s = !1))),
          !a &&
            L[0] & 6 &&
            ((a = !0), (I.invert = g[1][g[2]].invert), ee(() => (a = !1))),
          t.$set(I);
        const P = {};
        !c && L[0] & 6 && ((c = !0), (P.flow = g[1][g[2]]), ee(() => (c = !1))),
          d.$set(P);
        const N = {};
        !_ && L[0] & 6 && ((_ = !0), (N.root = g[1][g[2]]), ee(() => (_ = !1))),
          p.$set(N);
      },
      i(g) {
        b ||
          (C(t.$$.fragment, g),
          C(d.$$.fragment, g),
          C(p.$$.fragment, g),
          (b = !0));
      },
      o(g) {
        T(t.$$.fragment, g), T(d.$$.fragment, g), T(p.$$.fragment, g), (b = !1);
      },
      d(g) {
        g && H(e), E(t), g && H(u), g && H(r), E(d), g && H(h), g && H(f), E(p);
      },
    }
  );
}
function Gl(n) {
  let e,
    t,
    l,
    i,
    o,
    s,
    a,
    u,
    r,
    d,
    c,
    h,
    f,
    p,
    _,
    b,
    m,
    w,
    F,
    R,
    J,
    M = n[0].length > 0 && $t(n);
  r = new $e({ props: { $$slots: { default: [Jl] }, $$scope: { ctx: n } } });
  let O = n[1],
    q = [];
  for (let g = 0; g < O.length; g += 1) q[g] = en(Zt(n, O, g));
  const $ = (g) =>
    T(q[g], 1, 1, () => {
      q[g] = null;
    });
  (_ = new ue({
    props: {
      text: 'aff',
      palette: 'accent',
      icon: 'add',
      tooltip: 'create new aff flow',
      shortcut: ['control', 'n'],
    },
  })),
    _.$on('click', n[21]),
    (m = new ue({
      props: {
        text: 'neg',
        palette: 'accent-secondary',
        icon: 'add',
        tooltip: 'create new neg flow',
        shortcut: ['control', 'shift', 'n'],
      },
    })),
    m.$on('click', n[22]);
  let j = n[1].length > 0 && n[1][n[2]] && tn(n);
  return {
    c() {
      (e = V()),
        (t = S('main')),
        M && M.c(),
        (l = V()),
        (i = S('input')),
        (o = V()),
        (s = S('div')),
        (a = S('div')),
        (u = S('div')),
        z(r.$$.fragment),
        (d = V()),
        (c = S('div')),
        (h = S('ul'));
      for (let g = 0; g < q.length; g += 1) q[g].c();
      (f = V()),
        (p = S('div')),
        z(_.$$.fragment),
        (b = V()),
        z(m.$$.fragment),
        (w = V()),
        j && j.c(),
        v(i, 'id', 'uploadId'),
        v(i, 'type', 'file'),
        (i.hidden = !0),
        v(u, 'class', 'header svelte-1ykl876'),
        v(p, 'class', 'add-tab svelte-1ykl876'),
        v(h, 'class', 'svelte-1ykl876'),
        v(c, 'class', 'tabs svelte-1ykl876'),
        v(a, 'class', 'sidebar svelte-1ykl876'),
        v(s, 'class', 'grid svelte-1ykl876'),
        v(t, 'class', 'palette-plain'),
        K(t, 'activeMouse', Ee);
    },
    m(g, L) {
      D(g, e, L),
        D(g, t, L),
        M && M.m(t, null),
        k(t, l),
        k(t, i),
        k(t, o),
        k(t, s),
        k(s, a),
        k(a, u),
        U(r, u, null),
        k(a, d),
        k(a, c),
        k(c, h);
      for (let I = 0; I < q.length; I += 1) q[I].m(h, null);
      k(h, f),
        k(h, p),
        U(_, p, null),
        k(p, b),
        U(m, p, null),
        k(s, w),
        j && j.m(s, null),
        (F = !0),
        R ||
          ((J = [
            X(Je.body, 'keydown', n[8]),
            X(Je.body, 'mousemove', n[7]),
            X(Je.body, 'dragenter', Yl),
            X(Je.body, 'drop', n[9]),
            X(i, 'change', n[10]),
          ]),
          (R = !0));
    },
    p(g, L) {
      g[0].length > 0
        ? M
          ? (M.p(g, L), L[0] & 1 && C(M, 1))
          : ((M = $t(g)), M.c(), C(M, 1), M.m(t, l))
        : M &&
          (ce(),
          T(M, 1, 1, () => {
            M = null;
          }),
          de());
      const I = {};
      if (
        ((L[0] & 2) | (L[1] & 2048) && (I.$$scope = { dirty: L, ctx: g }),
        r.$set(I),
        L[0] & 14)
      ) {
        O = g[1];
        let P;
        for (P = 0; P < O.length; P += 1) {
          const N = Zt(g, O, P);
          q[P]
            ? (q[P].p(N, L), C(q[P], 1))
            : ((q[P] = en(N)), q[P].c(), C(q[P], 1), q[P].m(h, f));
        }
        for (ce(), P = O.length; P < q.length; P += 1) $(P);
        de();
      }
      g[1].length > 0 && g[1][g[2]]
        ? j
          ? (j.p(g, L), L[0] & 6 && C(j, 1))
          : ((j = tn(g)), j.c(), C(j, 1), j.m(s, null))
        : j &&
          (ce(),
          T(j, 1, 1, () => {
            j = null;
          }),
          de());
    },
    i(g) {
      if (!F) {
        C(M), C(r.$$.fragment, g);
        for (let L = 0; L < O.length; L += 1) C(q[L]);
        C(_.$$.fragment, g), C(m.$$.fragment, g), C(j), (F = !0);
      }
    },
    o(g) {
      T(M), T(r.$$.fragment, g), (q = q.filter(Boolean));
      for (let L = 0; L < q.length; L += 1) T(q[L]);
      T(_.$$.fragment, g), T(m.$$.fragment, g), T(j), (F = !1);
    },
    d(g) {
      g && H(e),
        g && H(t),
        M && M.d(),
        E(r),
        Ne(q, g),
        E(_),
        E(m),
        j && j.d(),
        (R = !1),
        Fe(J);
    },
  };
}
function Yl(n) {
  n.preventDefault();
}
function Ql(n, e, t) {
  let l, i, o, s;
  ge(n, qe, (y) => t(31, (l = y))),
    ge(n, ne, (y) => t(1, (i = y))),
    ge(n, Re, (y) => t(2, (o = y))),
    ge(n, Ee, (y) => t(32, (s = y)));
  var a =
    (this && this.__awaiter) ||
    function (y, W, Q, fe) {
      function it(Le) {
        return Le instanceof Q
          ? Le
          : new Q(function (De) {
              De(Le);
            });
      }
      return new (Q || (Q = Promise))(function (Le, De) {
        function ot(we) {
          try {
            je(fe.next(we));
          } catch (ze) {
            De(ze);
          }
        }
        function st(we) {
          try {
            je(fe.throw(we));
          } catch (ze) {
            De(ze);
          }
        }
        function je(we) {
          we.done ? Le(we.value) : it(we.value).then(ot, st);
        }
        je((fe = fe.apply(y, W || [])).next());
      });
    };
  let u = window.matchMedia('(prefers-color-scheme: dark)');
  function r() {
    G.data.colorTheme.value == 0 &&
      document.body.classList.toggle('dark', u.matches);
  }
  u.addEventListener('change', r),
    Oe(
      G.subscribe(['colorTheme'], function (y) {
        G.data.colorTheme.value == 1
          ? document.body.classList.remove('dark')
          : G.data.colorTheme.value == 2
          ? document.body.classList.add('dark')
          : r();
      })
    );
  let d = {
    accentHue: { name: 'accent-hue', unit: '' },
    accentSecondaryHue: { name: 'accent-secondary-hue', unit: '' },
    transitionSpeed: { name: 'transition-speed', unit: 'ms' },
    columnWidth: { name: 'column-width', unit: 'px' },
    borderRadius: { name: 'border-radius', unit: 'px' },
    padding: { name: 'padding', unit: 'px' },
    fontSize: { name: 'font-size', unit: 'rem' },
    fontWeight: { name: 'font-weight', unit: '' },
    gap: { name: 'gap', unit: 'px' },
  };
  Oe(
    G.subscribe(Object.keys(d), function (y) {
      let W = d[y].name,
        Q = G.data[y].value,
        fe = d[y].unit;
      document.body.style.setProperty(`--${W}`, `${Q}${fe}`);
    })
  ),
    Oe(
      G.subscribe(['fontFamily'], function (y) {
        let W = G.data.fontFamily;
        if (W.type != 'radio') return;
        let Q = W.value,
          fe;
        W.detail.customOption && W.detail.options.length == Q
          ? (fe = W.detail.customOptionValue)
          : W.detail.options[Q] && (fe = W.detail.options[Q]),
          fe
            ? document.body.style.setProperty(
                '--font-family',
                `'${fe}', 'Merriweather Sans', sans-serif`
              )
            : document.body.style.setProperty(
                '--font-family',
                "'Merriweather Sans', sans-serif"
              );
      })
    );
  function c(y) {
    he(Re, (o = y), o), h();
  }
  function h() {
    var y, W;
    let Q =
      ((y = i[o]) === null || y === void 0 ? void 0 : y.lastFocus) &&
      me((W = i[o]) === null || W === void 0 ? void 0 : W.lastFocus);
    Q ? (Q.focus = !0) : he(ne, (i[o].focus = !0), i), ne.set(i);
  }
  function f() {
    var y, W;
    if (i.length > 0) {
      let Q =
        ((y = i[o]) === null || y === void 0 ? void 0 : y.lastFocus) &&
        me((W = i[o]) === null || W === void 0 ? void 0 : W.lastFocus);
      Q || (Q = i[o]), (Q.focus = !1), (Q = Q), document.activeElement.blur();
    }
  }
  function p(y) {
    f(), i.push(Rn(i.length, y)), he(Re, (o = i.length - 1), o), ne.set(i);
  }
  function _(y) {
    return a(this, void 0, void 0, function* () {
      f(),
        i.splice(y, 1),
        y == 0 ? he(Re, (o = 0), o) : he(Re, (o = y - 1), o),
        ne.set(i),
        i.length > 0 && h();
    });
  }
  function b(y) {
    he(Ee, (s = !0), s);
  }
  function m(y) {
    he(Ee, (s = !1), s),
      y.ctrlKey && y.shiftKey && y.key == 'N'
        ? (y.preventDefault(), p('neg'))
        : y.ctrlKey && y.key == 'n' && (y.preventDefault(), p('aff')),
      y.metaKey && y.shiftKey && y.key == 'z'
        ? (y.preventDefault(), i[o].history.redo())
        : y.metaKey &&
          y.key == 'z' &&
          (y.preventDefault(), i[o].history.undo());
  }
  function w(y) {
    y.preventDefault();
    let W = y.dataTransfer.files[0],
      Q = new FileReader();
    (Q.onload = function (fe) {
      R(fe.target.result.toString());
    }),
      Q.readAsText(W, 'UTF-8');
  }
  function F() {
    let y = document.getElementById('uploadId').files[0],
      W = new FileReader();
    (W.onload = function (Q) {
      R(Q.target.result.toString());
    }),
      W.readAsText(y, 'UTF-8');
  }
  function R(y) {
    let W = JSON.parse(y);
    he(ne, (i = []), i);
    for (let Q of W) (Q.history = new un()), i.push(Q);
  }
  window.addEventListener(
    'dragover',
    function (y) {
      y.preventDefault();
    },
    !1
  ),
    window.addEventListener(
      'drop',
      function (y) {
        y.preventDefault();
      },
      !1
    );
  let J = [];
  function M(y) {
    J.splice(y, 1), t(0, J);
  }
  function O(y) {
    J.push(y), t(0, J);
  }
  window.addEventListener('beforeunload', function (y) {
    if (i.length > 0 && !l) {
      let W = 'Are you sure you want to leave?';
      return ((y || window.event).returnValue = W), W;
    }
  });
  const q = () => M(0),
    $ = () => {
      M(0);
    },
    j = () => {
      M(0);
    },
    g = () => O(Ul),
    L = () => O(yl),
    I = () => O(Cl);
  function P(y, W) {
    n.$$.not_equal(i[W], y) && ((i[W] = y), ne.set(i));
  }
  const N = (y) => c(y),
    B = () => p('aff'),
    se = () => p('neg'),
    xe = () => _(o);
  function et(y) {
    n.$$.not_equal(i[o].content, y) && ((i[o].content = y), ne.set(i));
  }
  function be(y) {
    n.$$.not_equal(i[o].children, y) && ((i[o].children = y), ne.set(i));
  }
  function Pe(y) {
    n.$$.not_equal(i[o].index, y) && ((i[o].index = y), ne.set(i));
  }
  function tt(y) {
    n.$$.not_equal(i[o].focus, y) && ((i[o].focus = y), ne.set(i));
  }
  function nt(y) {
    n.$$.not_equal(i[o].invert, y) && ((i[o].invert = y), ne.set(i));
  }
  function Be(y) {
    n.$$.not_equal(i[o], y) && ((i[o] = y), ne.set(i));
  }
  function lt(y) {
    n.$$.not_equal(i[o], y) && ((i[o] = y), ne.set(i));
  }
  return [
    J,
    i,
    o,
    c,
    h,
    p,
    _,
    b,
    m,
    w,
    F,
    M,
    O,
    q,
    $,
    j,
    g,
    L,
    I,
    P,
    N,
    B,
    se,
    xe,
    et,
    be,
    Pe,
    tt,
    nt,
    Be,
    lt,
  ];
}
class Zl extends ie {
  constructor(e) {
    super();
    oe(this, e, Ql, Gl, te, {}, null, [-1, -1]);
  }
}
new Zl({ target: document.body });
