import { jsx as ht, jsxs as qa } from "https://esm.sh/react/jsx-runtime";
import * as ft from "https://esm.sh/react";
import Vu, { useState as xc, useRef as Ba, useEffect as _l, useMemo as Jm } from "https://esm.sh/react";
import { createRoot as xm } from "https://esm.sh/react-dom/client";
import * as ut from "https://esm.sh/three";
import { GLTFLoader as Lm } from "https://esm.sh/three/examples/jsm/loaders/GLTFLoader";
function ro(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Hc = { exports: {} }, Ql = {};
/**
 * @license React
 * react-reconciler-constants.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xs;
function Wm() {
  return xs || (xs = 1, Ql.ConcurrentRoot = 1, Ql.ContinuousEventPriority = 8, Ql.DefaultEventPriority = 32, Ql.DiscreteEventPriority = 2, Ql.IdleEventPriority = 268435456, Ql.LegacyRoot = 0, Ql.NoEventPriority = 0), Ql;
}
var Ls;
function Fm() {
  return Ls || (Ls = 1, Hc.exports = Wm()), Hc.exports;
}
var Ru = Fm(), Oc = { exports: {} }, Uc = {}, Ac = { exports: {} }, Dc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ws;
function Pm() {
  if (Ws) return Dc;
  Ws = 1;
  var c = Vu;
  function i(z, b) {
    return z === b && (z !== 0 || 1 / z === 1 / b) || z !== z && b !== b;
  }
  var s = typeof Object.is == "function" ? Object.is : i, m = c.useState, o = c.useEffect, E = c.useLayoutEffect, j = c.useDebugValue;
  function T(z, b) {
    var C = b(), Q = m({ inst: { value: C, getSnapshot: b } }), V = Q[0].inst, J = Q[1];
    return E(
      function() {
        V.value = C, V.getSnapshot = b, r(V) && J({ inst: V });
      },
      [z, C, b]
    ), o(
      function() {
        return r(V) && J({ inst: V }), z(function() {
          r(V) && J({ inst: V });
        });
      },
      [z]
    ), j(C), C;
  }
  function r(z) {
    var b = z.getSnapshot;
    z = z.value;
    try {
      var C = b();
      return !s(z, C);
    } catch {
      return !0;
    }
  }
  function H(z, b) {
    return b();
  }
  var M = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? H : T;
  return Dc.useSyncExternalStore = c.useSyncExternalStore !== void 0 ? c.useSyncExternalStore : M, Dc;
}
var Fs;
function wm() {
  return Fs || (Fs = 1, Ac.exports = Pm()), Ac.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ps;
function Im() {
  if (Ps) return Uc;
  Ps = 1;
  var c = Vu, i = wm();
  function s(H, M) {
    return H === M && (H !== 0 || 1 / H === 1 / M) || H !== H && M !== M;
  }
  var m = typeof Object.is == "function" ? Object.is : s, o = i.useSyncExternalStore, E = c.useRef, j = c.useEffect, T = c.useMemo, r = c.useDebugValue;
  return Uc.useSyncExternalStoreWithSelector = function(H, M, z, b, C) {
    var Q = E(null);
    if (Q.current === null) {
      var V = { hasValue: !1, value: null };
      Q.current = V;
    } else V = Q.current;
    Q = T(
      function() {
        function g(Y) {
          if (!_) {
            if (_ = !0, X = Y, Y = b(Y), C !== void 0 && V.hasValue) {
              var nt = V.value;
              if (C(nt, Y))
                return Z = nt;
            }
            return Z = Y;
          }
          if (nt = Z, m(X, Y)) return nt;
          var st = b(Y);
          return C !== void 0 && C(nt, st) ? (X = Y, nt) : (X = Y, Z = st);
        }
        var _ = !1, X, Z, x = z === void 0 ? null : z;
        return [
          function() {
            return g(M());
          },
          x === null ? void 0 : function() {
            return g(x());
          }
        ];
      },
      [M, z, b, C]
    );
    var J = o(H, Q[0], Q[1]);
    return j(
      function() {
        V.hasValue = !0, V.value = J;
      },
      [J]
    ), r(J), J;
  }, Uc;
}
var ws;
function $m() {
  return ws || (ws = 1, Oc.exports = Im()), Oc.exports;
}
var km = $m();
const td = /* @__PURE__ */ ro(km), Is = (c) => {
  let i;
  const s = /* @__PURE__ */ new Set(), m = (H, M) => {
    const z = typeof H == "function" ? H(i) : H;
    if (!Object.is(z, i)) {
      const b = i;
      i = M ?? (typeof z != "object" || z === null) ? z : Object.assign({}, i, z), s.forEach((C) => C(i, b));
    }
  }, o = () => i, T = { setState: m, getState: o, getInitialState: () => r, subscribe: (H) => (s.add(H), () => s.delete(H)) }, r = i = c(m, o, T);
  return T;
}, ld = (c) => c ? Is(c) : Is, { useSyncExternalStoreWithSelector: ed } = td, ad = (c) => c;
function ud(c, i = ad, s) {
  const m = ed(
    c.subscribe,
    c.getState,
    c.getInitialState,
    i,
    s
  );
  return Vu.useDebugValue(m), m;
}
const $s = (c, i) => {
  const s = ld(c), m = (o, E = i) => ud(s, o, E);
  return Object.assign(m, s), m;
}, nd = (c, i) => c ? $s(c, i) : $s;
var Cc = { exports: {} }, jc = { exports: {} }, Rc = { exports: {} }, qc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ks;
function cd() {
  return ks || (ks = 1, function(c) {
    function i(S, O) {
      var D = S.length;
      S.push(O);
      t: for (; 0 < D; ) {
        var B = D - 1 >>> 1, K = S[B];
        if (0 < o(K, O))
          S[B] = O, S[D] = K, D = B;
        else break t;
      }
    }
    function s(S) {
      return S.length === 0 ? null : S[0];
    }
    function m(S) {
      if (S.length === 0) return null;
      var O = S[0], D = S.pop();
      if (D !== O) {
        S[0] = D;
        t: for (var B = 0, K = S.length, $ = K >>> 1; B < $; ) {
          var ct = 2 * (B + 1) - 1, Tt = S[ct], lt = ct + 1, Ut = S[lt];
          if (0 > o(Tt, D))
            lt < K && 0 > o(Ut, Tt) ? (S[B] = Ut, S[lt] = D, B = lt) : (S[B] = Tt, S[ct] = D, B = ct);
          else if (lt < K && 0 > o(Ut, D))
            S[B] = Ut, S[lt] = D, B = lt;
          else break t;
        }
      }
      return O;
    }
    function o(S, O) {
      var D = S.sortIndex - O.sortIndex;
      return D !== 0 ? D : S.id - O.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      c.unstable_now = function() {
        return E.now();
      };
    } else {
      var j = Date, T = j.now();
      c.unstable_now = function() {
        return j.now() - T;
      };
    }
    var r = [], H = [], M = 1, z = null, b = 3, C = !1, Q = !1, V = !1, J = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, _ = typeof setImmediate < "u" ? setImmediate : null;
    function X(S) {
      for (var O = s(H); O !== null; ) {
        if (O.callback === null) m(H);
        else if (O.startTime <= S)
          m(H), O.sortIndex = O.expirationTime, i(r, O);
        else break;
        O = s(H);
      }
    }
    function Z(S) {
      if (V = !1, X(S), !Q)
        if (s(r) !== null)
          Q = !0, dt();
        else {
          var O = s(H);
          O !== null && bt(Z, O.startTime - S);
        }
    }
    var x = !1, Y = -1, nt = 5, st = -1;
    function tt() {
      return !(c.unstable_now() - st < nt);
    }
    function F() {
      if (x) {
        var S = c.unstable_now();
        st = S;
        var O = !0;
        try {
          t: {
            Q = !1, V && (V = !1, g(Y), Y = -1), C = !0;
            var D = b;
            try {
              l: {
                for (X(S), z = s(r); z !== null && !(z.expirationTime > S && tt()); ) {
                  var B = z.callback;
                  if (typeof B == "function") {
                    z.callback = null, b = z.priorityLevel;
                    var K = B(
                      z.expirationTime <= S
                    );
                    if (S = c.unstable_now(), typeof K == "function") {
                      z.callback = K, X(S), O = !0;
                      break l;
                    }
                    z === s(r) && m(r), X(S);
                  } else m(r);
                  z = s(r);
                }
                if (z !== null) O = !0;
                else {
                  var $ = s(H);
                  $ !== null && bt(
                    Z,
                    $.startTime - S
                  ), O = !1;
                }
              }
              break t;
            } finally {
              z = null, b = D, C = !1;
            }
            O = void 0;
          }
        } finally {
          O ? w() : x = !1;
        }
      }
    }
    var w;
    if (typeof _ == "function")
      w = function() {
        _(F);
      };
    else if (typeof MessageChannel < "u") {
      var Kt = new MessageChannel(), I = Kt.port2;
      Kt.port1.onmessage = F, w = function() {
        I.postMessage(null);
      };
    } else
      w = function() {
        J(F, 0);
      };
    function dt() {
      x || (x = !0, w());
    }
    function bt(S, O) {
      Y = J(function() {
        S(c.unstable_now());
      }, O);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, c.unstable_continueExecution = function() {
      Q || C || (Q = !0, dt());
    }, c.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : nt = 0 < S ? Math.floor(1e3 / S) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, c.unstable_getFirstCallbackNode = function() {
      return s(r);
    }, c.unstable_next = function(S) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = b;
      }
      var D = b;
      b = O;
      try {
        return S();
      } finally {
        b = D;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(S, O) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var D = b;
      b = S;
      try {
        return O();
      } finally {
        b = D;
      }
    }, c.unstable_scheduleCallback = function(S, O, D) {
      var B = c.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? B + D : B) : D = B, S) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return K = D + K, S = {
        id: M++,
        callback: O,
        priorityLevel: S,
        startTime: D,
        expirationTime: K,
        sortIndex: -1
      }, D > B ? (S.sortIndex = D, i(H, S), s(r) === null && S === s(H) && (V ? (g(Y), Y = -1) : V = !0, bt(Z, D - B))) : (S.sortIndex = K, i(r, S), Q || C || (Q = !0, dt())), S;
    }, c.unstable_shouldYield = tt, c.unstable_wrapCallback = function(S) {
      var O = b;
      return function() {
        var D = b;
        b = O;
        try {
          return S.apply(this, arguments);
        } finally {
          b = D;
        }
      };
    };
  }(qc)), qc;
}
var to;
function id() {
  return to || (to = 1, Rc.exports = cd()), Rc.exports;
}
/**
 * @license React
 * react-reconciler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function fd() {
  return lo || (lo = 1, function(c) {
    c.exports = function(i) {
      function s(t, l, e, a) {
        return new iv(t, l, e, a);
      }
      function m() {
      }
      function o(t) {
        var l = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
          l += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var e = 2; e < arguments.length; e++)
            l += "&args[]=" + encodeURIComponent(arguments[e]);
        }
        return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      function E(t) {
        return t === null || typeof t != "object" ? null : (t = vs && t[vs] || t["@@iterator"], typeof t == "function" ? t : null);
      }
      function j(t) {
        if (t == null) return null;
        if (typeof t == "function")
          return t.$$typeof === dv ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
          case Re:
            return "Fragment";
          case je:
            return "Portal";
          case Fn:
            return "Profiler";
          case fs:
            return "StrictMode";
          case wn:
            return "Suspense";
          case In:
            return "SuspenseList";
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case Fl:
              return (t.displayName || "Context") + ".Provider";
            case ss:
              return (t._context.displayName || "Context") + ".Consumer";
            case Pn:
              var l = t.render;
              return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case $n:
              return l = t.displayName || null, l !== null ? l : j(t.type) || "Memo";
            case Pl:
              l = t._payload, t = t._init;
              try {
                return j(t(l));
              } catch {
              }
          }
        return null;
      }
      function T(t) {
        if (kn === void 0)
          try {
            throw Error();
          } catch (e) {
            var l = e.stack.trim().match(/\n( *(at )?)/);
            kn = l && l[1] || "", ms = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + kn + t + ms;
      }
      function r(t, l) {
        if (!t || tc) return "";
        tc = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var a = {
            DetermineComponentFrameRoot: function() {
              try {
                if (l) {
                  var R = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(R.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(R, []);
                    } catch (P) {
                      var q = P;
                    }
                    Reflect.construct(t, [], R);
                  } else {
                    try {
                      R.call();
                    } catch (P) {
                      q = P;
                    }
                    t.call(R.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (P) {
                    q = P;
                  }
                  (R = t()) && typeof R.catch == "function" && R.catch(function() {
                  });
                }
              } catch (P) {
                if (P && q && typeof P.stack == "string")
                  return [P.stack, q.stack];
              }
              return [null, null];
            }
          };
          a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var u = Object.getOwnPropertyDescriptor(
            a.DetermineComponentFrameRoot,
            "name"
          );
          u && u.configurable && Object.defineProperty(
            a.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var n = a.DetermineComponentFrameRoot(), f = n[0], v = n[1];
          if (f && v) {
            var p = f.split(`
`), N = v.split(`
`);
            for (u = a = 0; a < p.length && !p[a].includes("DetermineComponentFrameRoot"); )
              a++;
            for (; u < N.length && !N[u].includes(
              "DetermineComponentFrameRoot"
            ); )
              u++;
            if (a === p.length || u === N.length)
              for (a = p.length - 1, u = N.length - 1; 1 <= a && 0 <= u && p[a] !== N[u]; )
                u--;
            for (; 1 <= a && 0 <= u; a--, u--)
              if (p[a] !== N[u]) {
                if (a !== 1 || u !== 1)
                  do
                    if (a--, u--, 0 > u || p[a] !== N[u]) {
                      var A = `
` + p[a].replace(" at new ", " at ");
                      return t.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", t.displayName)), A;
                    }
                  while (1 <= a && 0 <= u);
                break;
              }
          }
        } finally {
          tc = !1, Error.prepareStackTrace = e;
        }
        return (e = t ? t.displayName || t.name : "") ? T(e) : "";
      }
      function H(t) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            return T(t.type);
          case 16:
            return T("Lazy");
          case 13:
            return T("Suspense");
          case 19:
            return T("SuspenseList");
          case 0:
          case 15:
            return t = r(t.type, !1), t;
          case 11:
            return t = r(t.type.render, !1), t;
          case 1:
            return t = r(t.type, !0), t;
          default:
            return "";
        }
      }
      function M(t) {
        try {
          var l = "";
          do
            l += H(t), t = t.return;
          while (t);
          return l;
        } catch (e) {
          return `
Error generating stack: ` + e.message + `
` + e.stack;
        }
      }
      function z(t) {
        var l = t, e = t;
        if (t.alternate) for (; l.return; ) l = l.return;
        else {
          t = l;
          do
            l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
          while (t);
        }
        return l.tag === 3 ? e : null;
      }
      function b(t) {
        if (z(t) !== t)
          throw Error(o(188));
      }
      function C(t) {
        var l = t.alternate;
        if (!l) {
          if (l = z(t), l === null) throw Error(o(188));
          return l !== t ? null : t;
        }
        for (var e = t, a = l; ; ) {
          var u = e.return;
          if (u === null) break;
          var n = u.alternate;
          if (n === null) {
            if (a = u.return, a !== null) {
              e = a;
              continue;
            }
            break;
          }
          if (u.child === n.child) {
            for (n = u.child; n; ) {
              if (n === e) return b(u), t;
              if (n === a) return b(u), l;
              n = n.sibling;
            }
            throw Error(o(188));
          }
          if (e.return !== a.return) e = u, a = n;
          else {
            for (var f = !1, v = u.child; v; ) {
              if (v === e) {
                f = !0, e = u, a = n;
                break;
              }
              if (v === a) {
                f = !0, a = u, e = n;
                break;
              }
              v = v.sibling;
            }
            if (!f) {
              for (v = n.child; v; ) {
                if (v === e) {
                  f = !0, e = n, a = u;
                  break;
                }
                if (v === a) {
                  f = !0, a = n, e = u;
                  break;
                }
                v = v.sibling;
              }
              if (!f) throw Error(o(189));
            }
          }
          if (e.alternate !== a) throw Error(o(190));
        }
        if (e.tag !== 3) throw Error(o(188));
        return e.stateNode.current === e ? t : l;
      }
      function Q(t) {
        var l = t.tag;
        if (l === 5 || l === 26 || l === 27 || l === 6) return t;
        for (t = t.child; t !== null; ) {
          if (l = Q(t), l !== null) return l;
          t = t.sibling;
        }
        return null;
      }
      function V(t) {
        var l = t.tag;
        if (l === 5 || l === 26 || l === 27 || l === 6) return t;
        for (t = t.child; t !== null; ) {
          if (t.tag !== 4 && (l = V(t), l !== null))
            return l;
          t = t.sibling;
        }
        return null;
      }
      function J(t) {
        return { current: t };
      }
      function g(t) {
        0 > Be || (t.current = cc[Be], cc[Be] = null, Be--);
      }
      function _(t, l) {
        Be++, cc[Be] = t.current, t.current = l;
      }
      function X(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (Om(t) / Um | 0) | 0;
      }
      function Z(t) {
        var l = t & 42;
        if (l !== 0) return l;
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
            return t & 4194176;
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
            return t;
        }
      }
      function x(t, l) {
        var e = t.pendingLanes;
        if (e === 0) return 0;
        var a = 0, u = t.suspendedLanes, n = t.pingedLanes, f = t.warmLanes;
        t = t.finishedLanes !== 0;
        var v = e & 134217727;
        return v !== 0 ? (e = v & ~u, e !== 0 ? a = Z(e) : (n &= v, n !== 0 ? a = Z(n) : t || (f = v & ~f, f !== 0 && (a = Z(f))))) : (v = e & ~u, v !== 0 ? a = Z(v) : n !== 0 ? a = Z(n) : t || (f = e & ~f, f !== 0 && (a = Z(f)))), a === 0 ? 0 : l !== 0 && l !== a && (l & u) === 0 && (u = a & -a, f = l & -l, u >= f || u === 32 && (f & 4194176) !== 0) ? l : a;
      }
      function Y(t, l) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
      }
      function nt(t, l) {
        switch (t) {
          case 1:
          case 2:
          case 4:
          case 8:
            return l + 250;
          case 16:
          case 32:
          case 64:
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
            return l + 5e3;
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
            return -1;
        }
      }
      function st() {
        var t = mu;
        return mu <<= 1, (mu & 4194176) === 0 && (mu = 128), t;
      }
      function tt() {
        var t = du;
        return du <<= 1, (du & 62914560) === 0 && (du = 4194304), t;
      }
      function F(t) {
        for (var l = [], e = 0; 31 > e; e++) l.push(t);
        return l;
      }
      function w(t, l) {
        t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
      }
      function Kt(t, l, e, a, u, n) {
        var f = t.pendingLanes;
        t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
        var v = t.entanglements, p = t.expirationTimes, N = t.hiddenUpdates;
        for (e = f & ~e; 0 < e; ) {
          var A = 31 - ll(e), R = 1 << A;
          v[A] = 0, p[A] = -1;
          var q = N[A];
          if (q !== null)
            for (N[A] = null, A = 0; A < q.length; A++) {
              var P = q[A];
              P !== null && (P.lane &= -536870913);
            }
          e &= ~R;
        }
        a !== 0 && I(t, a, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(f & ~l));
      }
      function I(t, l, e) {
        t.pendingLanes |= l, t.suspendedLanes &= ~l;
        var a = 31 - ll(l);
        t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 4194218;
      }
      function dt(t, l) {
        var e = t.entangledLanes |= l;
        for (t = t.entanglements; e; ) {
          var a = 31 - ll(e), u = 1 << a;
          u & l | t[a] & l && (t[a] |= l), e &= ~u;
        }
      }
      function bt(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function S(t) {
        if (el && typeof el.onCommitFiberRoot == "function")
          try {
            el.onCommitFiberRoot(
              _a,
              t,
              void 0,
              (t.current.flags & 128) === 128
            );
          } catch {
          }
      }
      function O(t) {
        if (typeof Rm == "function" && qm(t), el && typeof el.setStrictMode == "function")
          try {
            el.setStrictMode(_a, t);
          } catch {
          }
      }
      function D(t, l) {
        return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
      }
      function B(t, l) {
        if (typeof t == "object" && t !== null) {
          var e = Ys.get(t);
          return e !== void 0 ? e : (l = {
            value: t,
            source: l,
            stack: M(l)
          }, Ys.set(t, l), l);
        }
        return {
          value: t,
          source: l,
          stack: M(l)
        };
      }
      function K(t, l) {
        Ye[Ge++] = ru, Ye[Ge++] = yu, yu = t, ru = l;
      }
      function $(t, l, e) {
        fl[sl++] = Dl, fl[sl++] = Cl, fl[sl++] = pe, pe = t;
        var a = Dl;
        t = Cl;
        var u = 32 - ll(a) - 1;
        a &= ~(1 << u), e += 1;
        var n = 32 - ll(l) + u;
        if (30 < n) {
          var f = u - u % 5;
          n = (a & (1 << f) - 1).toString(32), a >>= f, u -= f, Dl = 1 << 32 - ll(l) + u | e << u | a, Cl = n + t;
        } else
          Dl = 1 << n | e << u | a, Cl = t;
      }
      function ct(t) {
        t.return !== null && (K(t, 1), $(t, 1, 0));
      }
      function Tt(t) {
        for (; t === yu; )
          yu = Ye[--Ge], Ye[Ge] = null, ru = Ye[--Ge], Ye[Ge] = null;
        for (; t === pe; )
          pe = fl[--sl], fl[sl] = null, Cl = fl[--sl], fl[sl] = null, Dl = fl[--sl], fl[sl] = null;
      }
      function lt(t, l) {
        _(Il, l), _(ba, t), _(Yt, null), t = rv(l), g(Yt), _(Yt, t);
      }
      function Ut() {
        g(Yt), g(ba), g(Il);
      }
      function ge(t) {
        t.memoizedState !== null && _(hu, t);
        var l = Yt.current, e = hv(l, t.type);
        l !== e && (_(ba, t), _(Yt, e));
      }
      function Va(t) {
        ba.current === t && (g(Yt), g(ba)), hu.current === t && (g(hu), Al ? de._currentValue = qe : de._currentValue2 = qe);
      }
      function ne(t) {
        var l = Error(o(418, ""));
        throw ca(B(l, t)), sc;
      }
      function ei(t, l) {
        if (!cl) throw Error(o(175));
        om(
          t.stateNode,
          t.type,
          t.memoizedProps,
          l,
          t
        ) || ne(t);
      }
      function ai(t) {
        for (xt = t.return; xt; )
          switch (xt.tag) {
            case 3:
            case 27:
              El = !0;
              return;
            case 5:
            case 13:
              El = !1;
              return;
            default:
              xt = xt.return;
          }
      }
      function ua(t) {
        if (!cl || t !== xt) return !1;
        if (!ot) return ai(t), ot = !0, !1;
        var l = !1;
        if (Xt ? t.tag !== 3 && t.tag !== 27 && (t.tag !== 5 || Hs(t.type) && !vu(t.type, t.memoizedProps)) && (l = !0) : t.tag !== 3 && (t.tag !== 5 || Hs(t.type) && !vu(t.type, t.memoizedProps)) && (l = !0), l && Zt && ne(t), ai(t), t.tag === 13) {
          if (!cl) throw Error(o(316));
          if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
          Zt = dm(t);
        } else
          Zt = xt ? Ms(t.stateNode) : null;
        return !0;
      }
      function na() {
        cl && (Zt = xt = null, ot = !1);
      }
      function ca(t) {
        rl === null ? rl = [t] : rl.push(t);
      }
      function Xa() {
        for (var t = Ve, l = oc = Ve = 0; l < t; ) {
          var e = ol[l];
          ol[l++] = null;
          var a = ol[l];
          ol[l++] = null;
          var u = ol[l];
          ol[l++] = null;
          var n = ol[l];
          if (ol[l++] = null, a !== null && u !== null) {
            var f = a.pending;
            f === null ? u.next = u : (u.next = f.next, f.next = u), a.pending = u;
          }
          n !== 0 && ui(e, u, n);
        }
      }
      function Za(t, l, e, a) {
        ol[Ve++] = t, ol[Ve++] = l, ol[Ve++] = e, ol[Ve++] = a, oc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
      }
      function Zu(t, l, e, a) {
        return Za(t, l, e, a), Ka(t);
      }
      function Yl(t, l) {
        return Za(t, null, null, l), Ka(t);
      }
      function ui(t, l, e) {
        t.lanes |= e;
        var a = t.alternate;
        a !== null && (a.lanes |= e);
        for (var u = !1, n = t.return; n !== null; )
          n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (u = !0)), t = n, n = n.return;
        u && l !== null && t.tag === 3 && (n = t.stateNode, u = 31 - ll(e), n = n.hiddenUpdates, t = n[u], t === null ? n[u] = [l] : t.push(l), l.lane = e | 536870912);
      }
      function Ka(t) {
        if (50 < ja)
          throw ja = 0, gc = null, Error(o(185));
        for (var l = t.return; l !== null; )
          t = l, l = t.return;
        return t.tag === 3 ? t.stateNode : null;
      }
      function Sl(t) {
        t !== Xe && t.next === null && (Xe === null ? Su = Xe = t : Xe = Xe.next = t), Eu = !0, vc || (vc = !0, Yo(Qo));
      }
      function He(t, l) {
        if (!mc && Eu) {
          mc = !0;
          do
            for (var e = !1, a = Su; a !== null; ) {
              if (t !== 0) {
                var u = a.pendingLanes;
                if (u === 0) var n = 0;
                else {
                  var f = a.suspendedLanes, v = a.pingedLanes;
                  n = (1 << 31 - ll(42 | t) + 1) - 1, n &= u & ~(f & ~v), n = n & 201326677 ? n & 201326677 | 1 : n ? n | 2 : 0;
                }
                n !== 0 && (e = !0, ii(a, n));
              } else
                n = it, n = x(
                  a,
                  a === St ? n : 0
                ), (n & 3) === 0 || Y(a, n) || (e = !0, ii(a, n));
              a = a.next;
            }
          while (e);
          mc = !1;
        }
      }
      function Qo() {
        Eu = vc = !1;
        var t = 0;
        Ze !== 0 && (Mv() && (t = Ze), Ze = 0);
        for (var l = yl(), e = null, a = Su; a !== null; ) {
          var u = a.next, n = ni(a, l);
          n === 0 ? (a.next = null, e === null ? Su = u : e.next = u, u === null && (Xe = e)) : (e = a, (t !== 0 || (n & 3) !== 0) && (Eu = !0)), a = u;
        }
        He(t);
      }
      function ni(t, l) {
        for (var e = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
          var f = 31 - ll(n), v = 1 << f, p = u[f];
          p === -1 ? ((v & e) === 0 || (v & a) !== 0) && (u[f] = nt(v, l)) : p <= l && (t.expiredLanes |= v), n &= ~v;
        }
        if (l = St, e = it, e = x(
          t,
          t === l ? e : 0
        ), a = t.callbackNode, e === 0 || t === l && Et === 2 || t.cancelPendingCommit !== null)
          return a !== null && a !== null && ic(a), t.callbackNode = null, t.callbackPriority = 0;
        if ((e & 3) === 0 || Y(t, e)) {
          if (l = e & -e, l === t.callbackPriority) return l;
          switch (a !== null && ic(a), bt(e)) {
            case 2:
            case 8:
              e = Cm;
              break;
            case 32:
              e = fc;
              break;
            case 268435456:
              e = jm;
              break;
            default:
              e = fc;
          }
          return a = ci.bind(null, t), e = pu(e, a), t.callbackPriority = l, t.callbackNode = e, l;
        }
        return a !== null && a !== null && ic(a), t.callbackPriority = 2, t.callbackNode = null, 2;
      }
      function ci(t, l) {
        var e = t.callbackNode;
        if (oe() && t.callbackNode !== e)
          return null;
        var a = it;
        return a = x(
          t,
          t === St ? a : 0
        ), a === 0 ? null : (Xf(t, a, l), ni(t, yl()), t.callbackNode != null && t.callbackNode === e ? ci.bind(null, t) : null);
      }
      function ii(t, l) {
        if (oe()) return null;
        Xf(t, l, !0);
      }
      function Yo(t) {
        Dv ? Cv(function() {
          (rt & 6) !== 0 ? pu(Qs, t) : t();
        }) : pu(Qs, t);
      }
      function Ku() {
        return Ze === 0 && (Ze = st()), Ze;
      }
      function Go(t, l) {
        if (Ma === null) {
          var e = Ma = [];
          dc = 0, Ke = Ku(), Je = {
            status: "pending",
            value: void 0,
            then: function(a) {
              e.push(a);
            }
          };
        }
        return dc++, l.then(fi, fi), l;
      }
      function fi() {
        if (--dc === 0 && Ma !== null) {
          Je !== null && (Je.status = "fulfilled");
          var t = Ma;
          Ma = null, Ke = 0, Je = null;
          for (var l = 0; l < t.length; l++) (0, t[l])();
        }
      }
      function Vo(t, l) {
        var e = [], a = {
          status: "pending",
          value: null,
          reason: null,
          then: function(u) {
            e.push(u);
          }
        };
        return t.then(
          function() {
            a.status = "fulfilled", a.value = l;
            for (var u = 0; u < e.length; u++) (0, e[u])(l);
          },
          function(u) {
            for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
              (0, e[u])(void 0);
          }
        ), a;
      }
      function Ju(t) {
        t.updateQueue = {
          baseState: t.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null
        };
      }
      function xu(t, l) {
        t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null
        });
      }
      function Gl(t) {
        return { lane: t, tag: 0, payload: null, callback: null, next: null };
      }
      function Vl(t, l, e) {
        var a = t.updateQueue;
        if (a === null) return null;
        if (a = a.shared, (rt & 2) !== 0) {
          var u = a.pending;
          return u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l, l = Ka(t), ui(t, null, e), l;
        }
        return Za(t, a, l, e), Ka(t);
      }
      function ia(t, l, e) {
        if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194176) !== 0)) {
          var a = l.lanes;
          a &= t.pendingLanes, e |= a, l.lanes = e, dt(t, e);
        }
      }
      function Lu(t, l) {
        var e = t.updateQueue, a = t.alternate;
        if (a !== null && (a = a.updateQueue, e === a)) {
          var u = null, n = null;
          if (e = e.firstBaseUpdate, e !== null) {
            do {
              var f = {
                lane: e.lane,
                tag: e.tag,
                payload: e.payload,
                callback: null,
                next: null
              };
              n === null ? u = n = f : n = n.next = f, e = e.next;
            } while (e !== null);
            n === null ? u = n = l : n = n.next = l;
          } else u = n = l;
          e = {
            baseState: a.baseState,
            firstBaseUpdate: u,
            lastBaseUpdate: n,
            shared: a.shared,
            callbacks: a.callbacks
          }, t.updateQueue = e;
          return;
        }
        t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
      }
      function fa() {
        if (pc) {
          var t = Je;
          if (t !== null) throw t;
        }
      }
      function sa(t, l, e, a) {
        pc = !1;
        var u = t.updateQueue;
        $l = !1;
        var n = u.firstBaseUpdate, f = u.lastBaseUpdate, v = u.shared.pending;
        if (v !== null) {
          u.shared.pending = null;
          var p = v, N = p.next;
          p.next = null, f === null ? n = N : f.next = N, f = p;
          var A = t.alternate;
          A !== null && (A = A.updateQueue, v = A.lastBaseUpdate, v !== f && (v === null ? A.firstBaseUpdate = N : v.next = N, A.lastBaseUpdate = p));
        }
        if (n !== null) {
          var R = u.baseState;
          f = 0, A = N = p = null, v = n;
          do {
            var q = v.lane & -536870913, P = q !== v.lane;
            if (P ? (it & q) === q : (a & q) === q) {
              q !== 0 && q === Ke && (pc = !0), A !== null && (A = A.next = {
                lane: 0,
                tag: v.tag,
                payload: v.payload,
                callback: null,
                next: null
              });
              t: {
                var dl = t, Ra = v;
                q = l;
                var _e = e;
                switch (Ra.tag) {
                  case 1:
                    if (dl = Ra.payload, typeof dl == "function") {
                      R = dl.call(
                        _e,
                        R,
                        q
                      );
                      break t;
                    }
                    R = dl;
                    break t;
                  case 3:
                    dl.flags = dl.flags & -65537 | 128;
                  case 0:
                    if (dl = Ra.payload, q = typeof dl == "function" ? dl.call(_e, R, q) : dl, q == null) break t;
                    R = Wn({}, R, q);
                    break t;
                  case 2:
                    $l = !0;
                }
              }
              q = v.callback, q !== null && (t.flags |= 64, P && (t.flags |= 8192), P = u.callbacks, P === null ? u.callbacks = [q] : P.push(q));
            } else
              P = {
                lane: q,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              }, A === null ? (N = A = P, p = R) : A = A.next = P, f |= q;
            if (v = v.next, v === null) {
              if (v = u.shared.pending, v === null)
                break;
              P = v, v = P.next, P.next = null, u.lastBaseUpdate = P, u.shared.pending = null;
            }
          } while (!0);
          A === null && (p = R), u.baseState = p, u.firstBaseUpdate = N, u.lastBaseUpdate = A, n === null && (u.shared.lanes = 0), le |= f, t.lanes = f, t.memoizedState = R;
        }
      }
      function si(t, l) {
        if (typeof t != "function")
          throw Error(o(191, t));
        t.call(l);
      }
      function oi(t, l) {
        var e = t.callbacks;
        if (e !== null)
          for (t.callbacks = null, t = 0; t < e.length; t++)
            si(e[t], l);
      }
      function Ja(t, l) {
        if (al(t, l)) return !0;
        if (typeof t != "object" || t === null || typeof l != "object" || l === null)
          return !1;
        var e = Object.keys(t), a = Object.keys(l);
        if (e.length !== a.length) return !1;
        for (a = 0; a < e.length; a++) {
          var u = e[a];
          if (!Bm.call(l, u) || !al(t[u], l[u]))
            return !1;
        }
        return !0;
      }
      function vi(t) {
        return t = t.status, t === "fulfilled" || t === "rejected";
      }
      function xa() {
      }
      function mi(t, l, e) {
        switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(xa, xa), l = e), l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, t === ga ? Error(o(483)) : t;
          default:
            if (typeof l.status == "string") l.then(xa, xa);
            else {
              if (t = St, t !== null && 100 < t.shellSuspendCounter)
                throw Error(o(482));
              t = l, t.status = "pending", t.then(
                function(a) {
                  if (l.status === "pending") {
                    var u = l;
                    u.status = "fulfilled", u.value = a;
                  }
                },
                function(a) {
                  if (l.status === "pending") {
                    var u = l;
                    u.status = "rejected", u.reason = a;
                  }
                }
              );
            }
            switch (l.status) {
              case "fulfilled":
                return l.value;
              case "rejected":
                throw t = l.reason, t === ga ? Error(o(483)) : t;
            }
            throw xe = l, ga;
        }
      }
      function di() {
        if (xe === null) throw Error(o(459));
        var t = xe;
        return xe = null, t;
      }
      function La(t) {
        var l = Ha;
        return Ha += 1, Le === null && (Le = []), mi(Le, t, l);
      }
      function oa(t, l) {
        l = l.props.ref, t.ref = l !== void 0 ? l : null;
      }
      function Wa(t, l) {
        throw l.$$typeof === ov ? Error(o(525)) : (t = Object.prototype.toString.call(l), Error(
          o(
            31,
            t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
          )
        ));
      }
      function pi(t) {
        var l = t._init;
        return l(t._payload);
      }
      function yi(t) {
        function l(y, d) {
          if (t) {
            var h = y.deletions;
            h === null ? (y.deletions = [d], y.flags |= 16) : h.push(d);
          }
        }
        function e(y, d) {
          if (!t) return null;
          for (; d !== null; )
            l(y, d), d = d.sibling;
          return null;
        }
        function a(y) {
          for (var d = /* @__PURE__ */ new Map(); y !== null; )
            y.key !== null ? d.set(y.key, y) : d.set(y.index, y), y = y.sibling;
          return d;
        }
        function u(y, d) {
          return y = Wl(y, d), y.index = 0, y.sibling = null, y;
        }
        function n(y, d, h) {
          return y.index = h, t ? (h = y.alternate, h !== null ? (h = h.index, h < d ? (y.flags |= 33554434, d) : h) : (y.flags |= 33554434, d)) : (y.flags |= 1048576, d);
        }
        function f(y) {
          return t && y.alternate === null && (y.flags |= 33554434), y;
        }
        function v(y, d, h, U) {
          return d === null || d.tag !== 6 ? (d = Jn(h, y.mode, U), d.return = y, d) : (d = u(d, h), d.return = y, d);
        }
        function p(y, d, h, U) {
          var G = h.type;
          return G === Re ? A(
            y,
            d,
            h.props.children,
            U,
            h.key
          ) : d !== null && (d.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Pl && pi(G) === d.type) ? (d = u(d, h.props), oa(d, h), d.return = y, d) : (d = fu(
            h.type,
            h.key,
            h.props,
            null,
            y.mode,
            U
          ), oa(d, h), d.return = y, d);
        }
        function N(y, d, h, U) {
          return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = xn(h, y.mode, U), d.return = y, d) : (d = u(d, h.children || []), d.return = y, d);
        }
        function A(y, d, h, U, G) {
          return d === null || d.tag !== 7 ? (d = ve(
            h,
            y.mode,
            U,
            G
          ), d.return = y, d) : (d = u(d, h), d.return = y, d);
        }
        function R(y, d, h) {
          if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
            return d = Jn(
              "" + d,
              y.mode,
              h
            ), d.return = y, d;
          if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
              case su:
                return h = fu(
                  d.type,
                  d.key,
                  d.props,
                  null,
                  y.mode,
                  h
                ), oa(h, d), h.return = y, h;
              case je:
                return d = xn(
                  d,
                  y.mode,
                  h
                ), d.return = y, d;
              case Pl:
                var U = d._init;
                return d = U(d._payload), R(y, d, h);
            }
            if (ou(d) || E(d))
              return d = ve(
                d,
                y.mode,
                h,
                null
              ), d.return = y, d;
            if (typeof d.then == "function")
              return R(y, La(d), h);
            if (d.$$typeof === Fl)
              return R(
                y,
                eu(y, d),
                h
              );
            Wa(y, d);
          }
          return null;
        }
        function q(y, d, h, U) {
          var G = d !== null ? d.key : null;
          if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
            return G !== null ? null : v(y, d, "" + h, U);
          if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
              case su:
                return h.key === G ? p(y, d, h, U) : null;
              case je:
                return h.key === G ? N(y, d, h, U) : null;
              case Pl:
                return G = h._init, h = G(h._payload), q(y, d, h, U);
            }
            if (ou(h) || E(h))
              return G !== null ? null : A(y, d, h, U, null);
            if (typeof h.then == "function")
              return q(
                y,
                d,
                La(h),
                U
              );
            if (h.$$typeof === Fl)
              return q(
                y,
                d,
                eu(y, h),
                U
              );
            Wa(y, h);
          }
          return null;
        }
        function P(y, d, h, U, G) {
          if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
            return y = y.get(h) || null, v(d, y, "" + U, G);
          if (typeof U == "object" && U !== null) {
            switch (U.$$typeof) {
              case su:
                return y = y.get(
                  U.key === null ? h : U.key
                ) || null, p(d, y, U, G);
              case je:
                return y = y.get(
                  U.key === null ? h : U.key
                ) || null, N(d, y, U, G);
              case Pl:
                var zt = U._init;
                return U = zt(U._payload), P(
                  y,
                  d,
                  h,
                  U,
                  G
                );
            }
            if (ou(U) || E(U))
              return y = y.get(h) || null, A(d, y, U, G, null);
            if (typeof U.then == "function")
              return P(
                y,
                d,
                h,
                La(U),
                G
              );
            if (U.$$typeof === Fl)
              return P(
                y,
                d,
                h,
                eu(d, U),
                G
              );
            Wa(d, U);
          }
          return null;
        }
        function dl(y, d, h, U) {
          for (var G = null, zt = null, L = d, vt = d = 0, Bt = null; L !== null && vt < h.length; vt++) {
            L.index > vt ? (Bt = L, L = null) : Bt = L.sibling;
            var mt = q(
              y,
              L,
              h[vt],
              U
            );
            if (mt === null) {
              L === null && (L = Bt);
              break;
            }
            t && L && mt.alternate === null && l(y, L), d = n(mt, d, vt), zt === null ? G = mt : zt.sibling = mt, zt = mt, L = Bt;
          }
          if (vt === h.length)
            return e(y, L), ot && K(y, vt), G;
          if (L === null) {
            for (; vt < h.length; vt++)
              L = R(y, h[vt], U), L !== null && (d = n(
                L,
                d,
                vt
              ), zt === null ? G = L : zt.sibling = L, zt = L);
            return ot && K(y, vt), G;
          }
          for (L = a(L); vt < h.length; vt++)
            Bt = P(
              L,
              y,
              vt,
              h[vt],
              U
            ), Bt !== null && (t && Bt.alternate !== null && L.delete(
              Bt.key === null ? vt : Bt.key
            ), d = n(
              Bt,
              d,
              vt
            ), zt === null ? G = Bt : zt.sibling = Bt, zt = Bt);
          return t && L.forEach(function(ae) {
            return l(y, ae);
          }), ot && K(y, vt), G;
        }
        function Ra(y, d, h, U) {
          if (h == null) throw Error(o(151));
          for (var G = null, zt = null, L = d, vt = d = 0, Bt = null, mt = h.next(); L !== null && !mt.done; vt++, mt = h.next()) {
            L.index > vt ? (Bt = L, L = null) : Bt = L.sibling;
            var ae = q(y, L, mt.value, U);
            if (ae === null) {
              L === null && (L = Bt);
              break;
            }
            t && L && ae.alternate === null && l(y, L), d = n(ae, d, vt), zt === null ? G = ae : zt.sibling = ae, zt = ae, L = Bt;
          }
          if (mt.done)
            return e(y, L), ot && K(y, vt), G;
          if (L === null) {
            for (; !mt.done; vt++, mt = h.next())
              mt = R(y, mt.value, U), mt !== null && (d = n(
                mt,
                d,
                vt
              ), zt === null ? G = mt : zt.sibling = mt, zt = mt);
            return ot && K(y, vt), G;
          }
          for (L = a(L); !mt.done; vt++, mt = h.next())
            mt = P(
              L,
              y,
              vt,
              mt.value,
              U
            ), mt !== null && (t && mt.alternate !== null && L.delete(mt.key === null ? vt : mt.key), d = n(mt, d, vt), zt === null ? G = mt : zt.sibling = mt, zt = mt);
          return t && L.forEach(function(Km) {
            return l(y, Km);
          }), ot && K(y, vt), G;
        }
        function _e(y, d, h, U) {
          if (typeof h == "object" && h !== null && h.type === Re && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
              case su:
                t: {
                  for (var G = h.key; d !== null; ) {
                    if (d.key === G) {
                      if (G = h.type, G === Re) {
                        if (d.tag === 7) {
                          e(
                            y,
                            d.sibling
                          ), U = u(
                            d,
                            h.props.children
                          ), U.return = y, y = U;
                          break t;
                        }
                      } else if (d.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Pl && pi(G) === d.type) {
                        e(
                          y,
                          d.sibling
                        ), U = u(d, h.props), oa(U, h), U.return = y, y = U;
                        break t;
                      }
                      e(y, d);
                      break;
                    } else l(y, d);
                    d = d.sibling;
                  }
                  h.type === Re ? (U = ve(
                    h.props.children,
                    y.mode,
                    U,
                    h.key
                  ), U.return = y, y = U) : (U = fu(
                    h.type,
                    h.key,
                    h.props,
                    null,
                    y.mode,
                    U
                  ), oa(U, h), U.return = y, y = U);
                }
                return f(y);
              case je:
                t: {
                  for (G = h.key; d !== null; ) {
                    if (d.key === G)
                      if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                        e(
                          y,
                          d.sibling
                        ), U = u(
                          d,
                          h.children || []
                        ), U.return = y, y = U;
                        break t;
                      } else {
                        e(y, d);
                        break;
                      }
                    else l(y, d);
                    d = d.sibling;
                  }
                  U = xn(h, y.mode, U), U.return = y, y = U;
                }
                return f(y);
              case Pl:
                return G = h._init, h = G(h._payload), _e(
                  y,
                  d,
                  h,
                  U
                );
            }
            if (ou(h))
              return dl(
                y,
                d,
                h,
                U
              );
            if (E(h)) {
              if (G = E(h), typeof G != "function")
                throw Error(o(150));
              return h = G.call(h), Ra(
                y,
                d,
                h,
                U
              );
            }
            if (typeof h.then == "function")
              return _e(
                y,
                d,
                La(h),
                U
              );
            if (h.$$typeof === Fl)
              return _e(
                y,
                d,
                eu(y, h),
                U
              );
            Wa(y, h);
          }
          return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, d !== null && d.tag === 6 ? (e(y, d.sibling), U = u(d, h), U.return = y, y = U) : (e(y, d), U = Jn(h, y.mode, U), U.return = y, y = U), f(y)) : e(y, d);
        }
        return function(y, d, h, U) {
          try {
            Ha = 0;
            var G = _e(
              y,
              d,
              h,
              U
            );
            return Le = null, G;
          } catch (L) {
            if (L === ga) throw L;
            var zt = s(29, L, null, y.mode);
            return zt.lanes = U, zt.return = y, zt;
          } finally {
          }
        };
      }
      function ri(t, l) {
        t = Bl, _(Nu, t), _(We, l), Bl = t | l.baseLanes;
      }
      function Wu() {
        _(Nu, Bl), _(We, We.current);
      }
      function Fu() {
        Bl = Nu.current, g(We), g(Nu);
      }
      function Xl(t) {
        var l = t.alternate;
        _(jt, jt.current & 1), _(vl, t), zl === null && (l === null || We.current !== null || l.memoizedState !== null) && (zl = t);
      }
      function hi(t) {
        if (t.tag === 22) {
          if (_(jt, jt.current), _(vl, t), zl === null) {
            var l = t.alternate;
            l !== null && l.memoizedState !== null && (zl = t);
          }
        } else Zl();
      }
      function Zl() {
        _(jt, jt.current), _(vl, vl.current);
      }
      function bl(t) {
        g(vl), zl === t && (zl = null), g(jt);
      }
      function Fa(t) {
        for (var l = t; l !== null; ) {
          if (l.tag === 13) {
            var e = l.memoizedState;
            if (e !== null && (e = e.dehydrated, e === null || ac(e) || uc(e)))
              return l;
          } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
            if ((l.flags & 128) !== 0) return l;
          } else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === t) break;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) return null;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
        return null;
      }
      function Ot() {
        throw Error(o(321));
      }
      function Pu(t, l) {
        if (l === null) return !1;
        for (var e = 0; e < l.length && e < t.length; e++)
          if (!al(t[e], l[e])) return !1;
        return !0;
      }
      function wu(t, l, e, a, u, n) {
        return kl = n, k = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, W.H = t === null || t.memoizedState === null ? he : te, re = !1, n = e(a, u), re = !1, Fe && (n = Ei(
          l,
          e,
          a,
          u
        )), Si(t), n;
      }
      function Si(t) {
        W.H = Nl;
        var l = yt !== null && yt.next !== null;
        if (kl = 0, Dt = yt = k = null, Tu = !1, Oa = 0, Pe = null, l) throw Error(o(300));
        t === null || Rt || (t = t.dependencies, t !== null && lu(t) && (Rt = !0));
      }
      function Ei(t, l, e, a) {
        k = t;
        var u = 0;
        do {
          if (Fe && (Pe = null), Oa = 0, Fe = !1, 25 <= u) throw Error(o(301));
          if (u += 1, Dt = yt = null, t.updateQueue != null) {
            var n = t.updateQueue;
            n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
          }
          W.H = Se, n = l(e, a);
        } while (Fe);
        return n;
      }
      function Xo() {
        var t = W.H, l = t.useState()[0];
        return l = typeof l.then == "function" ? va(l) : l, t = t.useState()[0], (yt !== null ? yt.memoizedState : null) !== t && (k.flags |= 1024), l;
      }
      function Iu() {
        var t = _u !== 0;
        return _u = 0, t;
      }
      function $u(t, l, e) {
        l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
      }
      function ku(t) {
        if (Tu) {
          for (t = t.memoizedState; t !== null; ) {
            var l = t.queue;
            l !== null && (l.pending = null), t = t.next;
          }
          Tu = !1;
        }
        kl = 0, Dt = yt = k = null, Fe = !1, Oa = _u = 0, Pe = null;
      }
      function Wt() {
        var t = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return Dt === null ? k.memoizedState = Dt = t : Dt = Dt.next = t, Dt;
      }
      function At() {
        if (yt === null) {
          var t = k.alternate;
          t = t !== null ? t.memoizedState : null;
        } else t = yt.next;
        var l = Dt === null ? k.memoizedState : Dt.next;
        if (l !== null)
          Dt = l, yt = t;
        else {
          if (t === null)
            throw k.alternate === null ? Error(o(467)) : Error(o(310));
          yt = t, t = {
            memoizedState: yt.memoizedState,
            baseState: yt.baseState,
            baseQueue: yt.baseQueue,
            queue: yt.queue,
            next: null
          }, Dt === null ? k.memoizedState = Dt = t : Dt = Dt.next = t;
        }
        return Dt;
      }
      function va(t) {
        var l = Oa;
        return Oa += 1, Pe === null && (Pe = []), t = mi(Pe, t, l), l = k, (Dt === null ? l.memoizedState : Dt.next) === null && (l = l.alternate, W.H = l === null || l.memoizedState === null ? he : te), t;
      }
      function Pa(t) {
        if (t !== null && typeof t == "object") {
          if (typeof t.then == "function") return va(t);
          if (t.$$typeof === Fl) return Gt(t);
        }
        throw Error(o(438, String(t)));
      }
      function tn(t) {
        var l = null, e = k.updateQueue;
        if (e !== null && (l = e.memoCache), l == null) {
          var a = k.alternate;
          a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
            data: a.data.map(function(u) {
              return u.slice();
            }),
            index: 0
          })));
        }
        if (l == null && (l = { data: [], index: 0 }), e === null && (e = rc(), k.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
          for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
            e[a] = mv;
        return l.index++, e;
      }
      function Ml(t, l) {
        return typeof l == "function" ? l(t) : l;
      }
      function wa(t) {
        var l = At();
        return ln(l, yt, t);
      }
      function ln(t, l, e) {
        var a = t.queue;
        if (a === null) throw Error(o(311));
        a.lastRenderedReducer = e;
        var u = t.baseQueue, n = a.pending;
        if (n !== null) {
          if (u !== null) {
            var f = u.next;
            u.next = n.next, n.next = f;
          }
          l.baseQueue = u = n, a.pending = null;
        }
        if (n = t.baseState, u === null) t.memoizedState = n;
        else {
          l = u.next;
          var v = f = null, p = null, N = l, A = !1;
          do {
            var R = N.lane & -536870913;
            if (R !== N.lane ? (it & R) === R : (kl & R) === R) {
              var q = N.revertLane;
              if (q === 0)
                p !== null && (p = p.next = {
                  lane: 0,
                  revertLane: 0,
                  action: N.action,
                  hasEagerState: N.hasEagerState,
                  eagerState: N.eagerState,
                  next: null
                }), R === Ke && (A = !0);
              else if ((kl & q) === q) {
                N = N.next, q === Ke && (A = !0);
                continue;
              } else
                R = {
                  lane: 0,
                  revertLane: N.revertLane,
                  action: N.action,
                  hasEagerState: N.hasEagerState,
                  eagerState: N.eagerState,
                  next: null
                }, p === null ? (v = p = R, f = n) : p = p.next = R, k.lanes |= q, le |= q;
              R = N.action, re && e(n, R), n = N.hasEagerState ? N.eagerState : e(n, R);
            } else
              q = {
                lane: R,
                revertLane: N.revertLane,
                action: N.action,
                hasEagerState: N.hasEagerState,
                eagerState: N.eagerState,
                next: null
              }, p === null ? (v = p = q, f = n) : p = p.next = q, k.lanes |= R, le |= R;
            N = N.next;
          } while (N !== null && N !== l);
          if (p === null ? f = n : p.next = v, !al(n, t.memoizedState) && (Rt = !0, A && (e = Je, e !== null)))
            throw e;
          t.memoizedState = n, t.baseState = f, t.baseQueue = p, a.lastRenderedState = n;
        }
        return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
      }
      function en(t) {
        var l = At(), e = l.queue;
        if (e === null) throw Error(o(311));
        e.lastRenderedReducer = t;
        var a = e.dispatch, u = e.pending, n = l.memoizedState;
        if (u !== null) {
          e.pending = null;
          var f = u = u.next;
          do
            n = t(n, f.action), f = f.next;
          while (f !== u);
          al(n, l.memoizedState) || (Rt = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
        }
        return [n, a];
      }
      function zi(t, l, e) {
        var a = k, u = At(), n = ot;
        if (n) {
          if (e === void 0)
            throw Error(o(407));
          e = e();
        } else e = l();
        var f = !al(
          (yt || u).memoizedState,
          e
        );
        if (f && (u.memoizedState = e, Rt = !0), u = u.queue, nn(_i.bind(null, a, u, t), [
          t
        ]), u.getSnapshot !== l || f || Dt !== null && Dt.memoizedState.tag & 1) {
          if (a.flags |= 2048, Oe(
            9,
            Ti.bind(
              null,
              a,
              u,
              e,
              l
            ),
            { destroy: void 0 },
            null
          ), St === null) throw Error(o(349));
          n || (kl & 60) !== 0 || Ni(a, l, e);
        }
        return e;
      }
      function Ni(t, l, e) {
        t.flags |= 16384, t = { getSnapshot: l, value: e }, l = k.updateQueue, l === null ? (l = rc(), k.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
      }
      function Ti(t, l, e, a) {
        l.value = e, l.getSnapshot = a, bi(l) && Mi(t);
      }
      function _i(t, l, e) {
        return e(function() {
          bi(l) && Mi(t);
        });
      }
      function bi(t) {
        var l = t.getSnapshot;
        t = t.value;
        try {
          var e = l();
          return !al(t, e);
        } catch {
          return !0;
        }
      }
      function Mi(t) {
        var l = Yl(t, 2);
        l !== null && Jt(l, t, 2);
      }
      function an(t) {
        var l = Wt();
        if (typeof t == "function") {
          var e = t;
          if (t = e(), re) {
            O(!0);
            try {
              e();
            } finally {
              O(!1);
            }
          }
        }
        return l.memoizedState = l.baseState = t, l.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ml,
          lastRenderedState: t
        }, l;
      }
      function gi(t, l, e, a) {
        return t.baseState = e, ln(
          t,
          yt,
          typeof a == "function" ? a : Ml
        );
      }
      function Zo(t, l, e, a, u) {
        if (ka(t)) throw Error(o(485));
        if (t = l.action, t !== null) {
          var n = {
            payload: u,
            action: t,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function(f) {
              n.listeners.push(f);
            }
          };
          W.T !== null ? e(!0) : n.isTransition = !1, a(n), e = l.pending, e === null ? (n.next = l.pending = n, Hi(l, n)) : (n.next = e.next, l.pending = e.next = n);
        }
      }
      function Hi(t, l) {
        var e = l.action, a = l.payload, u = t.state;
        if (l.isTransition) {
          var n = W.T, f = {};
          W.T = f;
          try {
            var v = e(u, a), p = W.S;
            p !== null && p(f, v), Oi(t, l, v);
          } catch (N) {
            un(t, l, N);
          } finally {
            W.T = n;
          }
        } else
          try {
            n = e(u, a), Oi(t, l, n);
          } catch (N) {
            un(t, l, N);
          }
      }
      function Oi(t, l, e) {
        e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
          function(a) {
            Ui(t, l, a);
          },
          function(a) {
            return un(t, l, a);
          }
        ) : Ui(t, l, e);
      }
      function Ui(t, l, e) {
        l.status = "fulfilled", l.value = e, Ai(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, Hi(t, e)));
      }
      function un(t, l, e) {
        var a = t.pending;
        if (t.pending = null, a !== null) {
          a = a.next;
          do
            l.status = "rejected", l.reason = e, Ai(l), l = l.next;
          while (l !== a);
        }
        t.action = null;
      }
      function Ai(t) {
        t = t.listeners;
        for (var l = 0; l < t.length; l++) (0, t[l])();
      }
      function Di(t, l) {
        return l;
      }
      function Ci(t, l) {
        if (ot) {
          var e = St.formState;
          if (e !== null) {
            t: {
              var a = k;
              if (ot) {
                if (Zt) {
                  var u = am(
                    Zt,
                    El
                  );
                  if (u) {
                    Zt = Ms(u), a = um(u);
                    break t;
                  }
                }
                ne(a);
              }
              a = !1;
            }
            a && (l = e[0]);
          }
        }
        e = Wt(), e.memoizedState = e.baseState = l, a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Di,
          lastRenderedState: l
        }, e.queue = a, e = Pi.bind(
          null,
          k,
          a
        ), a.dispatch = e, a = an(!1);
        var n = on.bind(
          null,
          k,
          !1,
          a.queue
        );
        return a = Wt(), u = {
          state: l,
          dispatch: null,
          action: t,
          pending: null
        }, a.queue = u, e = Zo.bind(
          null,
          k,
          u,
          n,
          e
        ), u.dispatch = e, a.memoizedState = t, [l, e, !1];
      }
      function ji(t) {
        var l = At();
        return Ri(l, yt, t);
      }
      function Ri(t, l, e) {
        l = ln(
          t,
          l,
          Di
        )[0], t = wa(Ml)[0], l = typeof l == "object" && l !== null && typeof l.then == "function" ? va(l) : l;
        var a = At(), u = a.queue, n = u.dispatch;
        return e !== a.memoizedState && (k.flags |= 2048, Oe(
          9,
          Ko.bind(null, u, e),
          { destroy: void 0 },
          null
        )), [l, n, t];
      }
      function Ko(t, l) {
        t.action = l;
      }
      function qi(t) {
        var l = At(), e = yt;
        if (e !== null)
          return Ri(l, e, t);
        At(), l = l.memoizedState, e = At();
        var a = e.queue.dispatch;
        return e.memoizedState = t, [l, a, !1];
      }
      function Oe(t, l, e, a) {
        return t = { tag: t, create: l, inst: e, deps: a, next: null }, l = k.updateQueue, l === null && (l = rc(), k.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
      }
      function Bi() {
        return At().memoizedState;
      }
      function Ia(t, l, e, a) {
        var u = Wt();
        k.flags |= t, u.memoizedState = Oe(
          1 | l,
          e,
          { destroy: void 0 },
          a === void 0 ? null : a
        );
      }
      function $a(t, l, e, a) {
        var u = At();
        a = a === void 0 ? null : a;
        var n = u.memoizedState.inst;
        yt !== null && a !== null && Pu(a, yt.memoizedState.deps) ? u.memoizedState = Oe(l, e, n, a) : (k.flags |= t, u.memoizedState = Oe(1 | l, e, n, a));
      }
      function Qi(t, l) {
        Ia(8390656, 8, t, l);
      }
      function nn(t, l) {
        $a(2048, 8, t, l);
      }
      function Yi(t, l) {
        return $a(4, 2, t, l);
      }
      function Gi(t, l) {
        return $a(4, 4, t, l);
      }
      function Vi(t, l) {
        if (typeof l == "function") {
          t = t();
          var e = l(t);
          return function() {
            typeof e == "function" ? e() : l(null);
          };
        }
        if (l != null)
          return t = t(), l.current = t, function() {
            l.current = null;
          };
      }
      function Xi(t, l, e) {
        e = e != null ? e.concat([t]) : null, $a(
          4,
          4,
          Vi.bind(null, l, t),
          e
        );
      }
      function cn() {
      }
      function Zi(t, l) {
        var e = At();
        l = l === void 0 ? null : l;
        var a = e.memoizedState;
        return l !== null && Pu(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
      }
      function Ki(t, l) {
        var e = At();
        l = l === void 0 ? null : l;
        var a = e.memoizedState;
        if (l !== null && Pu(l, a[1]))
          return a[0];
        if (a = t(), re) {
          O(!0);
          try {
            t();
          } finally {
            O(!1);
          }
        }
        return e.memoizedState = [a, l], a;
      }
      function fn(t, l, e) {
        return e === void 0 || (kl & 1073741824) !== 0 ? t.memoizedState = l : (t.memoizedState = e, t = Vf(), k.lanes |= t, le |= t, e);
      }
      function Ji(t, l, e, a) {
        return al(e, l) ? e : We.current !== null ? (t = fn(t, e, a), al(t, l) || (Rt = !0), t) : (kl & 42) === 0 ? (Rt = !0, t.memoizedState = e) : (t = Vf(), k.lanes |= t, le |= t, l);
      }
      function xi(t, l, e, a, u) {
        var n = me();
        Pt(
          n !== 0 && 8 > n ? n : 8
        );
        var f = W.T, v = {};
        W.T = v, on(t, !1, l, e);
        try {
          var p = u(), N = W.S;
          if (N !== null && N(v, p), p !== null && typeof p == "object" && typeof p.then == "function") {
            var A = Vo(
              p,
              a
            );
            ma(
              t,
              l,
              A,
              kt(t)
            );
          } else
            ma(
              t,
              l,
              a,
              kt(t)
            );
        } catch (R) {
          ma(
            t,
            l,
            { then: function() {
            }, status: "rejected", reason: R },
            kt()
          );
        } finally {
          Pt(n), W.T = f;
        }
      }
      function Li(t) {
        var l = t.memoizedState;
        if (l !== null) return l;
        l = {
          memoizedState: qe,
          baseState: qe,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ml,
            lastRenderedState: qe
          },
          next: null
        };
        var e = {};
        return l.next = {
          memoizedState: e,
          baseState: e,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ml,
            lastRenderedState: e
          },
          next: null
        }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
      }
      function sn() {
        return Gt(de);
      }
      function Wi() {
        return At().memoizedState;
      }
      function Fi() {
        return At().memoizedState;
      }
      function Jo(t) {
        for (var l = t.return; l !== null; ) {
          switch (l.tag) {
            case 24:
            case 3:
              var e = kt();
              t = Gl(e);
              var a = Vl(l, t, e);
              a !== null && (Jt(a, l, e), ia(a, l, e)), l = { cache: _n() }, t.payload = l;
              return;
          }
          l = l.return;
        }
      }
      function xo(t, l, e) {
        var a = kt();
        e = {
          lane: a,
          revertLane: 0,
          action: e,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, ka(t) ? wi(l, e) : (e = Zu(t, l, e, a), e !== null && (Jt(e, t, a), Ii(e, l, a)));
      }
      function Pi(t, l, e) {
        var a = kt();
        ma(t, l, e, a);
      }
      function ma(t, l, e, a) {
        var u = {
          lane: a,
          revertLane: 0,
          action: e,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (ka(t)) wi(l, u);
        else {
          var n = t.alternate;
          if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
            try {
              var f = l.lastRenderedState, v = n(f, e);
              if (u.hasEagerState = !0, u.eagerState = v, al(v, f))
                return Za(t, l, u, 0), St === null && Xa(), !1;
            } catch {
            } finally {
            }
          if (e = Zu(t, l, u, a), e !== null)
            return Jt(e, t, a), Ii(e, l, a), !0;
        }
        return !1;
      }
      function on(t, l, e, a) {
        if (a = {
          lane: 2,
          revertLane: Ku(),
          action: a,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, ka(t)) {
          if (l) throw Error(o(479));
        } else
          l = Zu(
            t,
            e,
            a,
            2
          ), l !== null && Jt(l, t, 2);
      }
      function ka(t) {
        var l = t.alternate;
        return t === k || l !== null && l === k;
      }
      function wi(t, l) {
        Fe = Tu = !0;
        var e = t.pending;
        e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
      }
      function Ii(t, l, e) {
        if ((e & 4194176) !== 0) {
          var a = l.lanes;
          a &= t.pendingLanes, e |= a, l.lanes = e, dt(t, e);
        }
      }
      function vn(t, l, e, a) {
        l = t.memoizedState, e = e(a, l), e = e == null ? l : Wn({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
      }
      function $i(t, l, e, a, u, n, f) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, f) : l.prototype && l.prototype.isPureReactComponent ? !Ja(e, a) || !Ja(u, n) : !0;
      }
      function ki(t, l, e, a) {
        t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && hc.enqueueReplaceState(l, l.state, null);
      }
      function ce(t, l) {
        var e = l;
        if ("ref" in l) {
          e = {};
          for (var a in l)
            a !== "ref" && (e[a] = l[a]);
        }
        if (t = t.defaultProps) {
          e === l && (e = Wn({}, e));
          for (var u in t)
            e[u] === void 0 && (e[u] = t[u]);
        }
        return e;
      }
      function tu(t, l) {
        try {
          var e = t.onUncaughtError;
          e(l.value, { componentStack: l.stack });
        } catch (a) {
          setTimeout(function() {
            throw a;
          });
        }
      }
      function tf(t, l, e) {
        try {
          var a = t.onCaughtError;
          a(e.value, {
            componentStack: e.stack,
            errorBoundary: l.tag === 1 ? l.stateNode : null
          });
        } catch (u) {
          setTimeout(function() {
            throw u;
          });
        }
      }
      function mn(t, l, e) {
        return e = Gl(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
          tu(t, l);
        }, e;
      }
      function lf(t) {
        return t = Gl(t), t.tag = 3, t;
      }
      function ef(t, l, e, a) {
        var u = e.type.getDerivedStateFromError;
        if (typeof u == "function") {
          var n = a.value;
          t.payload = function() {
            return u(n);
          }, t.callback = function() {
            tf(l, e, a);
          };
        }
        var f = e.stateNode;
        f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
          tf(l, e, a), typeof u != "function" && (ee === null ? ee = /* @__PURE__ */ new Set([this]) : ee.add(this));
          var v = a.stack;
          this.componentDidCatch(a.value, {
            componentStack: v !== null ? v : ""
          });
        });
      }
      function Lo(t, l, e, a, u) {
        if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          if (l = e.alternate, l !== null && pa(
            l,
            e,
            u,
            !0
          ), e = vl.current, e !== null) {
            switch (e.tag) {
              case 13:
                return zl === null ? Vn() : e.alternate === null && Ht === 0 && (Ht = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === zu ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Zn(t, a, u)), !1;
              case 22:
                return e.flags |= 65536, a === zu ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([a])
                }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Zn(t, a, u)), !1;
            }
            throw Error(o(435, e.tag));
          }
          return Zn(t, a, u), Vn(), !1;
        }
        if (ot)
          return l = vl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, a !== sc && (t = Error(o(422), { cause: a }), ca(
            B(t, e)
          ))) : (a !== sc && (l = Error(o(423), {
            cause: a
          }), ca(
            B(l, e)
          )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = B(a, e), u = mn(
            t.stateNode,
            a,
            u
          ), Lu(t, u), Ht !== 4 && (Ht = 2)), !1;
        var n = Error(o(520), { cause: a });
        if (n = B(n, e), Aa === null ? Aa = [n] : Aa.push(n), Ht !== 4 && (Ht = 2), l === null) return !0;
        a = B(a, e), e = l;
        do {
          switch (e.tag) {
            case 3:
              return e.flags |= 65536, t = u & -u, e.lanes |= t, t = mn(e.stateNode, a, t), Lu(e, t), !1;
            case 1:
              if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ee === null || !ee.has(
                n
              ))))
                return e.flags |= 65536, u &= -u, e.lanes |= u, u = lf(u), ef(
                  u,
                  t,
                  e,
                  a
                ), Lu(e, u), !1;
          }
          e = e.return;
        } while (e !== null);
        return !1;
      }
      function Qt(t, l, e, a) {
        l.child = t === null ? Gs(l, null, e, a) : ye(
          l,
          t.child,
          e,
          a
        );
      }
      function af(t, l, e, a, u) {
        e = e.render;
        var n = l.ref;
        if ("ref" in a) {
          var f = {};
          for (var v in a)
            v !== "ref" && (f[v] = a[v]);
        } else f = a;
        return ie(l), a = wu(
          t,
          l,
          e,
          f,
          n,
          u
        ), v = Iu(), t !== null && !Rt ? ($u(t, l, u), gl(t, l, u)) : (ot && v && ct(l), l.flags |= 1, Qt(t, l, a, u), l.child);
      }
      function uf(t, l, e, a, u) {
        if (t === null) {
          var n = e.type;
          return typeof n == "function" && !Kn(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, nf(
            t,
            l,
            n,
            a,
            u
          )) : (t = fu(
            e.type,
            null,
            a,
            l,
            l.mode,
            u
          ), t.ref = l.ref, t.return = l, l.child = t);
        }
        if (n = t.child, !zn(t, u)) {
          var f = n.memoizedProps;
          if (e = e.compare, e = e !== null ? e : Ja, e(f, a) && t.ref === l.ref)
            return gl(
              t,
              l,
              u
            );
        }
        return l.flags |= 1, t = Wl(n, a), t.ref = l.ref, t.return = l, l.child = t;
      }
      function nf(t, l, e, a, u) {
        if (t !== null) {
          var n = t.memoizedProps;
          if (Ja(n, a) && t.ref === l.ref)
            if (Rt = !1, l.pendingProps = a = n, zn(t, u))
              (t.flags & 131072) !== 0 && (Rt = !0);
            else
              return l.lanes = t.lanes, gl(t, l, u);
        }
        return dn(
          t,
          l,
          e,
          a,
          u
        );
      }
      function cf(t, l, e) {
        var a = l.pendingProps, u = a.children, n = (l.stateNode._pendingVisibility & 2) !== 0, f = t !== null ? t.memoizedState : null;
        if (da(t, l), a.mode === "hidden" || n) {
          if ((l.flags & 128) !== 0) {
            if (a = f !== null ? f.baseLanes | e : e, t !== null) {
              for (u = l.child = t.child, n = 0; u !== null; )
                n = n | u.lanes | u.childLanes, u = u.sibling;
              l.childLanes = n & ~a;
            } else l.childLanes = 0, l.child = null;
            return ff(
              t,
              l,
              a,
              e
            );
          }
          if ((e & 536870912) !== 0)
            l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && au(
              l,
              f !== null ? f.cachePool : null
            ), f !== null ? ri(l, f) : Wu(), hi(l);
          else
            return l.lanes = l.childLanes = 536870912, ff(
              t,
              l,
              f !== null ? f.baseLanes | e : e,
              e
            );
        } else
          f !== null ? (au(l, f.cachePool), ri(l, f), Zl(), l.memoizedState = null) : (t !== null && au(l, null), Wu(), Zl());
        return Qt(t, l, u, e), l.child;
      }
      function ff(t, l, e, a) {
        var u = bn();
        return u = u === null ? null : {
          parent: Al ? Mt._currentValue : Mt._currentValue2,
          pool: u
        }, l.memoizedState = {
          baseLanes: e,
          cachePool: u
        }, t !== null && au(l, null), Wu(), hi(l), t !== null && pa(t, l, a, !0), null;
      }
      function da(t, l) {
        var e = l.ref;
        if (e === null)
          t !== null && t.ref !== null && (l.flags |= 2097664);
        else {
          if (typeof e != "function" && typeof e != "object")
            throw Error(o(284));
          (t === null || t.ref !== e) && (l.flags |= 2097664);
        }
      }
      function dn(t, l, e, a, u) {
        return ie(l), e = wu(
          t,
          l,
          e,
          a,
          void 0,
          u
        ), a = Iu(), t !== null && !Rt ? ($u(t, l, u), gl(t, l, u)) : (ot && a && ct(l), l.flags |= 1, Qt(t, l, e, u), l.child);
      }
      function sf(t, l, e, a, u, n) {
        return ie(l), l.updateQueue = null, e = Ei(
          l,
          a,
          e,
          u
        ), Si(t), a = Iu(), t !== null && !Rt ? ($u(t, l, n), gl(t, l, n)) : (ot && a && ct(l), l.flags |= 1, Qt(t, l, e, n), l.child);
      }
      function of(t, l, e, a, u) {
        if (ie(l), l.stateNode === null) {
          var n = Qe, f = e.contextType;
          typeof f == "object" && f !== null && (n = Gt(f)), n = new e(a, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = hc, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = a, n.state = l.memoizedState, n.refs = {}, Ju(l), f = e.contextType, n.context = typeof f == "object" && f !== null ? Gt(f) : Qe, n.state = l.memoizedState, f = e.getDerivedStateFromProps, typeof f == "function" && (vn(
            l,
            e,
            f,
            a
          ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && hc.enqueueReplaceState(
            n,
            n.state,
            null
          ), sa(l, a, n, u), fa(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
        } else if (t === null) {
          n = l.stateNode;
          var v = l.memoizedProps, p = ce(e, v);
          n.props = p;
          var N = n.context, A = e.contextType;
          f = Qe, typeof A == "object" && A !== null && (f = Gt(A));
          var R = e.getDerivedStateFromProps;
          A = typeof R == "function" || typeof n.getSnapshotBeforeUpdate == "function", v = l.pendingProps !== v, A || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (v || N !== f) && ki(
            l,
            n,
            a,
            f
          ), $l = !1;
          var q = l.memoizedState;
          n.state = q, sa(l, a, n, u), fa(), N = l.memoizedState, v || q !== N || $l ? (typeof R == "function" && (vn(
            l,
            e,
            R,
            a
          ), N = l.memoizedState), (p = $l || $i(
            l,
            e,
            p,
            a,
            q,
            N,
            f
          )) ? (A || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = N), n.props = a, n.state = N, n.context = f, a = p) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
        } else {
          n = l.stateNode, xu(t, l), f = l.memoizedProps, A = ce(e, f), n.props = A, R = l.pendingProps, q = n.context, N = e.contextType, p = Qe, typeof N == "object" && N !== null && (p = Gt(N)), v = e.getDerivedStateFromProps, (N = typeof v == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== R || q !== p) && ki(
            l,
            n,
            a,
            p
          ), $l = !1, q = l.memoizedState, n.state = q, sa(l, a, n, u), fa();
          var P = l.memoizedState;
          f !== R || q !== P || $l || t !== null && t.dependencies !== null && lu(t.dependencies) ? (typeof v == "function" && (vn(
            l,
            e,
            v,
            a
          ), P = l.memoizedState), (A = $l || $i(
            l,
            e,
            A,
            a,
            q,
            P,
            p
          ) || t !== null && t.dependencies !== null && lu(t.dependencies)) ? (N || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, P, p), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
            a,
            P,
            p
          )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === t.memoizedProps && q === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && q === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = P), n.props = a, n.state = P, n.context = p, a = A) : (typeof n.componentDidUpdate != "function" || f === t.memoizedProps && q === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && q === t.memoizedState || (l.flags |= 1024), a = !1);
        }
        return n = a, da(t, l), a = (l.flags & 128) !== 0, n || a ? (n = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && a ? (l.child = ye(
          l,
          t.child,
          null,
          u
        ), l.child = ye(
          l,
          null,
          e,
          u
        )) : Qt(t, l, e, u), l.memoizedState = n.state, t = l.child) : t = gl(
          t,
          l,
          u
        ), t;
      }
      function vf(t, l, e, a) {
        return na(), l.flags |= 256, Qt(t, l, e, a), l.child;
      }
      function pn(t) {
        return { baseLanes: t, cachePool: hf() };
      }
      function yn(t, l, e) {
        return t = t !== null ? t.childLanes & ~e : 0, l && (t |= ml), t;
      }
      function mf(t, l, e) {
        var a = l.pendingProps, u = !1, n = (l.flags & 128) !== 0, f;
        if ((f = n) || (f = t !== null && t.memoizedState === null ? !1 : (jt.current & 2) !== 0), f && (u = !0, l.flags &= -129), f = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
          if (ot) {
            if (u ? Xl(l) : Zl(), ot) {
              var v = Zt, p;
              (p = v) && (v = sm(
                v,
                El
              ), v !== null ? (l.memoizedState = {
                dehydrated: v,
                treeContext: pe !== null ? { id: Dl, overflow: Cl } : null,
                retryLane: 536870912
              }, p = s(18, null, null, 0), p.stateNode = v, p.return = l, l.child = p, xt = l, Zt = null, p = !0) : p = !1), p || ne(l);
            }
            if (v = l.memoizedState, v !== null && (v = v.dehydrated, v !== null))
              return uc(v) ? l.lanes = 16 : l.lanes = 536870912, null;
            bl(l);
          }
          return v = a.children, a = a.fallback, u ? (Zl(), u = l.mode, v = hn(
            { mode: "hidden", children: v },
            u
          ), a = ve(
            a,
            u,
            e,
            null
          ), v.return = l, a.return = l, v.sibling = a, l.child = v, u = l.child, u.memoizedState = pn(e), u.childLanes = yn(
            t,
            f,
            e
          ), l.memoizedState = Sc, a) : (Xl(l), rn(l, v));
        }
        if (p = t.memoizedState, p !== null && (v = p.dehydrated, v !== null)) {
          if (n)
            l.flags & 256 ? (Xl(l), l.flags &= -257, l = Sn(
              t,
              l,
              e
            )) : l.memoizedState !== null ? (Zl(), l.child = t.child, l.flags |= 128, l = null) : (Zl(), u = a.fallback, v = l.mode, a = hn(
              { mode: "visible", children: a.children },
              v
            ), u = ve(
              u,
              v,
              e,
              null
            ), u.flags |= 2, a.return = l, u.return = l, a.sibling = u, l.child = a, ye(
              l,
              t.child,
              null,
              e
            ), a = l.child, a.memoizedState = pn(e), a.childLanes = yn(
              t,
              f,
              e
            ), l.memoizedState = Sc, l = u);
          else if (Xl(l), uc(v))
            f = lm(v).digest, a = Error(o(419)), a.stack = "", a.digest = f, ca({ value: a, source: null, stack: null }), l = Sn(
              t,
              l,
              e
            );
          else if (Rt || pa(
            t,
            l,
            e,
            !1
          ), f = (e & t.childLanes) !== 0, Rt || f) {
            if (f = St, f !== null) {
              if (a = e & -e, (a & 42) !== 0) a = 1;
              else
                switch (a) {
                  case 2:
                    a = 1;
                    break;
                  case 8:
                    a = 4;
                    break;
                  case 32:
                    a = 16;
                    break;
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
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                    a = 64;
                    break;
                  case 268435456:
                    a = 134217728;
                    break;
                  default:
                    a = 0;
                }
              if (a = (a & (f.suspendedLanes | e)) !== 0 ? 0 : a, a !== 0 && a !== p.retryLane)
                throw p.retryLane = a, Yl(t, a), Jt(f, t, a), Xs;
            }
            ac(v) || Vn(), l = Sn(
              t,
              l,
              e
            );
          } else
            ac(v) ? (l.flags |= 128, l.child = t.child, l = uv.bind(
              null,
              t
            ), em(v, l), l = null) : (t = p.treeContext, cl && (Zt = cm(v), xt = l, ot = !0, rl = null, El = !1, t !== null && (fl[sl++] = Dl, fl[sl++] = Cl, fl[sl++] = pe, Dl = t.id, Cl = t.overflow, pe = l)), l = rn(
              l,
              a.children
            ), l.flags |= 4096);
          return l;
        }
        return u ? (Zl(), u = a.fallback, v = l.mode, p = t.child, n = p.sibling, a = Wl(p, {
          mode: "hidden",
          children: a.children
        }), a.subtreeFlags = p.subtreeFlags & 31457280, n !== null ? u = Wl(n, u) : (u = ve(
          u,
          v,
          e,
          null
        ), u.flags |= 2), u.return = l, a.return = l, a.sibling = u, l.child = a, a = u, u = l.child, v = t.child.memoizedState, v === null ? v = pn(e) : (p = v.cachePool, p !== null ? (n = Al ? Mt._currentValue : Mt._currentValue2, p = p.parent !== n ? { parent: n, pool: n } : p) : p = hf(), v = {
          baseLanes: v.baseLanes | e,
          cachePool: p
        }), u.memoizedState = v, u.childLanes = yn(
          t,
          f,
          e
        ), l.memoizedState = Sc, a) : (Xl(l), e = t.child, t = e.sibling, e = Wl(e, {
          mode: "visible",
          children: a.children
        }), e.return = l, e.sibling = null, t !== null && (f = l.deletions, f === null ? (l.deletions = [t], l.flags |= 16) : f.push(t)), l.child = e, l.memoizedState = null, e);
      }
      function rn(t, l) {
        return l = hn(
          { mode: "visible", children: l },
          t.mode
        ), l.return = t, t.child = l;
      }
      function hn(t, l) {
        return es(t, l, 0, null);
      }
      function Sn(t, l, e) {
        return ye(l, t.child, null, e), t = rn(
          l,
          l.pendingProps.children
        ), t.flags |= 2, l.memoizedState = null, t;
      }
      function df(t, l, e) {
        t.lanes |= l;
        var a = t.alternate;
        a !== null && (a.lanes |= l), Nn(t.return, l, e);
      }
      function En(t, l, e, a, u) {
        var n = t.memoizedState;
        n === null ? t.memoizedState = {
          isBackwards: l,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: u
        } : (n.isBackwards = l, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = e, n.tailMode = u);
      }
      function pf(t, l, e) {
        var a = l.pendingProps, u = a.revealOrder, n = a.tail;
        if (Qt(t, l, a.children, e), a = jt.current, (a & 2) !== 0)
          a = a & 1 | 2, l.flags |= 128;
        else {
          if (t !== null && (t.flags & 128) !== 0)
            t: for (t = l.child; t !== null; ) {
              if (t.tag === 13)
                t.memoizedState !== null && df(t, e, l);
              else if (t.tag === 19)
                df(t, e, l);
              else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === l) break t;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === l)
                  break t;
                t = t.return;
              }
              t.sibling.return = t.return, t = t.sibling;
            }
          a &= 1;
        }
        switch (_(jt, a), u) {
          case "forwards":
            for (e = l.child, u = null; e !== null; )
              t = e.alternate, t !== null && Fa(t) === null && (u = e), e = e.sibling;
            e = u, e === null ? (u = l.child, l.child = null) : (u = e.sibling, e.sibling = null), En(
              l,
              !1,
              u,
              e,
              n
            );
            break;
          case "backwards":
            for (e = null, u = l.child, l.child = null; u !== null; ) {
              if (t = u.alternate, t !== null && Fa(t) === null) {
                l.child = u;
                break;
              }
              t = u.sibling, u.sibling = e, e = u, u = t;
            }
            En(
              l,
              !0,
              e,
              null,
              n
            );
            break;
          case "together":
            En(l, !1, null, null, void 0);
            break;
          default:
            l.memoizedState = null;
        }
        return l.child;
      }
      function gl(t, l, e) {
        if (t !== null && (l.dependencies = t.dependencies), le |= l.lanes, (e & l.childLanes) === 0)
          if (t !== null) {
            if (pa(
              t,
              l,
              e,
              !1
            ), (e & l.childLanes) === 0)
              return null;
          } else return null;
        if (t !== null && l.child !== t.child)
          throw Error(o(153));
        if (l.child !== null) {
          for (t = l.child, e = Wl(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
            t = t.sibling, e = e.sibling = Wl(t, t.pendingProps), e.return = l;
          e.sibling = null;
        }
        return l.child;
      }
      function zn(t, l) {
        return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && lu(t)));
      }
      function Wo(t, l, e) {
        switch (l.tag) {
          case 3:
            lt(
              l,
              l.stateNode.containerInfo
            ), Kl(l, Mt, t.memoizedState.cache), na();
            break;
          case 27:
          case 5:
            ge(l);
            break;
          case 4:
            lt(
              l,
              l.stateNode.containerInfo
            );
            break;
          case 10:
            Kl(
              l,
              l.type,
              l.memoizedProps.value
            );
            break;
          case 13:
            var a = l.memoizedState;
            if (a !== null)
              return a.dehydrated !== null ? (Xl(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? mf(
                t,
                l,
                e
              ) : (Xl(l), t = gl(
                t,
                l,
                e
              ), t !== null ? t.sibling : null);
            Xl(l);
            break;
          case 19:
            var u = (t.flags & 128) !== 0;
            if (a = (e & l.childLanes) !== 0, a || (pa(
              t,
              l,
              e,
              !1
            ), a = (e & l.childLanes) !== 0), u) {
              if (a)
                return pf(
                  t,
                  l,
                  e
                );
              l.flags |= 128;
            }
            if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), _(jt, jt.current), a) break;
            return null;
          case 22:
          case 23:
            return l.lanes = 0, cf(t, l, e);
          case 24:
            Kl(l, Mt, t.memoizedState.cache);
        }
        return gl(t, l, e);
      }
      function yf(t, l, e) {
        if (t !== null)
          if (t.memoizedProps !== l.pendingProps)
            Rt = !0;
          else {
            if (!zn(t, e) && (l.flags & 128) === 0)
              return Rt = !1, Wo(
                t,
                l,
                e
              );
            Rt = (t.flags & 131072) !== 0;
          }
        else
          Rt = !1, ot && (l.flags & 1048576) !== 0 && $(l, ru, l.index);
        switch (l.lanes = 0, l.tag) {
          case 16:
            t: {
              t = l.pendingProps;
              var a = l.elementType, u = a._init;
              if (a = u(a._payload), l.type = a, typeof a == "function")
                Kn(a) ? (t = ce(a, t), l.tag = 1, l = of(
                  null,
                  l,
                  a,
                  t,
                  e
                )) : (l.tag = 0, l = dn(
                  null,
                  l,
                  a,
                  t,
                  e
                ));
              else {
                if (a != null) {
                  if (u = a.$$typeof, u === Pn) {
                    l.tag = 11, l = af(
                      null,
                      l,
                      a,
                      t,
                      e
                    );
                    break t;
                  } else if (u === $n) {
                    l.tag = 14, l = uf(
                      null,
                      l,
                      a,
                      t,
                      e
                    );
                    break t;
                  }
                }
                throw l = j(a) || a, Error(o(306, l, ""));
              }
            }
            return l;
          case 0:
            return dn(
              t,
              l,
              l.type,
              l.pendingProps,
              e
            );
          case 1:
            return a = l.type, u = ce(
              a,
              l.pendingProps
            ), of(
              t,
              l,
              a,
              u,
              e
            );
          case 3:
            t: {
              if (lt(
                l,
                l.stateNode.containerInfo
              ), t === null) throw Error(o(387));
              var n = l.pendingProps;
              u = l.memoizedState, a = u.element, xu(t, l), sa(l, n, null, e);
              var f = l.memoizedState;
              if (n = f.cache, Kl(l, Mt, n), n !== u.cache && Tn(
                l,
                [Mt],
                e,
                !0
              ), fa(), n = f.element, cl && u.isDehydrated)
                if (u = {
                  element: n,
                  isDehydrated: !1,
                  cache: f.cache
                }, l.updateQueue.baseState = u, l.memoizedState = u, l.flags & 256) {
                  l = vf(
                    t,
                    l,
                    n,
                    e
                  );
                  break t;
                } else if (n !== a) {
                  a = B(
                    Error(o(424)),
                    l
                  ), ca(a), l = vf(
                    t,
                    l,
                    n,
                    e
                  );
                  break t;
                } else
                  for (cl && (Zt = nm(
                    l.stateNode.containerInfo
                  ), xt = l, ot = !0, rl = null, El = !0), e = Gs(
                    l,
                    null,
                    n,
                    e
                  ), l.child = e; e; )
                    e.flags = e.flags & -3 | 4096, e = e.sibling;
              else {
                if (na(), n === a) {
                  l = gl(
                    t,
                    l,
                    e
                  );
                  break t;
                }
                Qt(t, l, n, e);
              }
              l = l.child;
            }
            return l;
          case 26:
            if (il)
              return da(t, l), t === null ? (e = Us(
                l.type,
                null,
                l.pendingProps,
                null
              )) ? l.memoizedState = e : ot || (l.stateNode = Nm(
                l.type,
                l.pendingProps,
                Il.current,
                l
              )) : l.memoizedState = Us(
                l.type,
                t.memoizedProps,
                l.pendingProps,
                t.memoizedState
              ), null;
          case 27:
            if (Xt)
              return ge(l), t === null && Xt && ot && (a = l.stateNode = qs(
                l.type,
                l.pendingProps,
                Il.current,
                Yt.current,
                !1
              ), xt = l, El = !0, Zt = gs(a)), a = l.pendingProps.children, t !== null || ot ? Qt(
                t,
                l,
                a,
                e
              ) : l.child = ye(
                l,
                null,
                a,
                e
              ), da(t, l), l.child;
          case 5:
            return t === null && ot && (Sm(
              l.type,
              l.pendingProps,
              Yt.current
            ), (u = a = Zt) && (a = im(
              a,
              l.type,
              l.pendingProps,
              El
            ), a !== null ? (l.stateNode = a, xt = l, Zt = gs(a), El = !1, u = !0) : u = !1), u || ne(l)), ge(l), u = l.type, n = l.pendingProps, f = t !== null ? t.memoizedProps : null, a = n.children, vu(u, n) ? a = null : f !== null && vu(u, f) && (l.flags |= 32), l.memoizedState !== null && (u = wu(
              t,
              l,
              Xo,
              null,
              null,
              e
            ), Al ? de._currentValue = u : de._currentValue2 = u), da(t, l), Qt(t, l, a, e), l.child;
          case 6:
            return t === null && ot && (Em(
              l.pendingProps,
              Yt.current
            ), (t = e = Zt) && (e = fm(
              e,
              l.pendingProps,
              El
            ), e !== null ? (l.stateNode = e, xt = l, Zt = null, t = !0) : t = !1), t || ne(l)), null;
          case 13:
            return mf(t, l, e);
          case 4:
            return lt(
              l,
              l.stateNode.containerInfo
            ), a = l.pendingProps, t === null ? l.child = ye(
              l,
              null,
              a,
              e
            ) : Qt(
              t,
              l,
              a,
              e
            ), l.child;
          case 11:
            return af(
              t,
              l,
              l.type,
              l.pendingProps,
              e
            );
          case 7:
            return Qt(
              t,
              l,
              l.pendingProps,
              e
            ), l.child;
          case 8:
            return Qt(
              t,
              l,
              l.pendingProps.children,
              e
            ), l.child;
          case 12:
            return Qt(
              t,
              l,
              l.pendingProps.children,
              e
            ), l.child;
          case 10:
            return a = l.pendingProps, Kl(
              l,
              l.type,
              a.value
            ), Qt(
              t,
              l,
              a.children,
              e
            ), l.child;
          case 9:
            return u = l.type._context, a = l.pendingProps.children, ie(l), u = Gt(u), a = a(u), l.flags |= 1, Qt(
              t,
              l,
              a,
              e
            ), l.child;
          case 14:
            return uf(
              t,
              l,
              l.type,
              l.pendingProps,
              e
            );
          case 15:
            return nf(
              t,
              l,
              l.type,
              l.pendingProps,
              e
            );
          case 19:
            return pf(
              t,
              l,
              e
            );
          case 22:
            return cf(t, l, e);
          case 24:
            return ie(l), a = Gt(Mt), t === null ? (u = bn(), u === null && (u = St, n = _n(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), l.memoizedState = {
              parent: a,
              cache: u
            }, Ju(l), Kl(l, Mt, u)) : ((t.lanes & e) !== 0 && (xu(t, l), sa(l, null, null, e), fa()), u = t.memoizedState, n = l.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), Kl(l, Mt, a)) : (a = n.cache, Kl(l, Mt, a), a !== u.cache && Tn(
              l,
              [Mt],
              e,
              !0
            ))), Qt(
              t,
              l,
              l.pendingProps.children,
              e
            ), l.child;
          case 29:
            throw l.pendingProps;
        }
        throw Error(o(156, l.tag));
      }
      function Kl(t, l, e) {
        Al ? (_(bu, l._currentValue), l._currentValue = e) : (_(bu, l._currentValue2), l._currentValue2 = e);
      }
      function Hl(t) {
        var l = bu.current;
        Al ? t._currentValue = l : t._currentValue2 = l, g(bu);
      }
      function Nn(t, l, e) {
        for (; t !== null; ) {
          var a = t.alternate;
          if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
          t = t.return;
        }
      }
      function Tn(t, l, e, a) {
        var u = t.child;
        for (u !== null && (u.return = t); u !== null; ) {
          var n = u.dependencies;
          if (n !== null) {
            var f = u.child;
            n = n.firstContext;
            t: for (; n !== null; ) {
              var v = n;
              n = u;
              for (var p = 0; p < l.length; p++)
                if (v.context === l[p]) {
                  n.lanes |= e, v = n.alternate, v !== null && (v.lanes |= e), Nn(
                    n.return,
                    e,
                    t
                  ), a || (f = null);
                  break t;
                }
              n = v.next;
            }
          } else if (u.tag === 18) {
            if (f = u.return, f === null) throw Error(o(341));
            f.lanes |= e, n = f.alternate, n !== null && (n.lanes |= e), Nn(f, e, t), f = null;
          } else f = u.child;
          if (f !== null) f.return = u;
          else
            for (f = u; f !== null; ) {
              if (f === t) {
                f = null;
                break;
              }
              if (u = f.sibling, u !== null) {
                u.return = f.return, f = u;
                break;
              }
              f = f.return;
            }
          u = f;
        }
      }
      function pa(t, l, e, a) {
        t = null;
        for (var u = l, n = !1; u !== null; ) {
          if (!n) {
            if ((u.flags & 524288) !== 0) n = !0;
            else if ((u.flags & 262144) !== 0) break;
          }
          if (u.tag === 10) {
            var f = u.alternate;
            if (f === null) throw Error(o(387));
            if (f = f.memoizedProps, f !== null) {
              var v = u.type;
              al(u.pendingProps.value, f.value) || (t !== null ? t.push(v) : t = [v]);
            }
          } else if (u === hu.current) {
            if (f = u.alternate, f === null) throw Error(o(387));
            f.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(de) : t = [de]);
          }
          u = u.return;
        }
        t !== null && Tn(
          l,
          t,
          e,
          a
        ), l.flags |= 262144;
      }
      function lu(t) {
        for (t = t.firstContext; t !== null; ) {
          var l = t.context;
          if (!al(
            Al ? l._currentValue : l._currentValue2,
            t.memoizedValue
          ))
            return !0;
          t = t.next;
        }
        return !1;
      }
      function ie(t) {
        Ee = t, jl = null, t = t.dependencies, t !== null && (t.firstContext = null);
      }
      function Gt(t) {
        return rf(Ee, t);
      }
      function eu(t, l) {
        return Ee === null && ie(t), rf(t, l);
      }
      function rf(t, l) {
        var e = Al ? l._currentValue : l._currentValue2;
        if (l = { context: l, memoizedValue: e, next: null }, jl === null) {
          if (t === null) throw Error(o(308));
          jl = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
        } else jl = jl.next = l;
        return e;
      }
      function _n() {
        return {
          controller: new Ym(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function ya(t) {
        t.refCount--, t.refCount === 0 && Gm(Vm, function() {
          t.controller.abort();
        });
      }
      function bn() {
        var t = ze.current;
        return t !== null ? t : St.pooledCache;
      }
      function au(t, l) {
        l === null ? _(ze, ze.current) : _(ze, l.pool);
      }
      function hf() {
        var t = bn();
        return t === null ? null : {
          parent: Al ? Mt._currentValue : Mt._currentValue2,
          pool: t
        };
      }
      function wt(t) {
        t.flags |= 4;
      }
      function Sf(t, l) {
        if (t !== null && t.child === l.child) return !1;
        if ((l.flags & 16) !== 0) return !0;
        for (t = l.child; t !== null; ) {
          if ((t.flags & 13878) !== 0 || (t.subtreeFlags & 13878) !== 0)
            return !0;
          t = t.sibling;
        }
        return !1;
      }
      function Mn(t, l, e, a) {
        if (Vt)
          for (e = l.child; e !== null; ) {
            if (e.tag === 5 || e.tag === 6)
              lc(t, e.stateNode);
            else if (!(e.tag === 4 || Xt && e.tag === 27) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === l) break;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === l)
                return;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        else if (wl)
          for (var u = l.child; u !== null; ) {
            if (u.tag === 5) {
              var n = u.stateNode;
              e && a && (n = _s(
                n,
                u.type,
                u.memoizedProps
              )), lc(t, n);
            } else if (u.tag === 6)
              n = u.stateNode, e && a && (n = bs(
                n,
                u.memoizedProps
              )), lc(t, n);
            else if (u.tag !== 4) {
              if (u.tag === 22 && u.memoizedState !== null)
                n = u.child, n !== null && (n.return = u), Mn(t, u, !0, !0);
              else if (u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
            }
            if (u === l) break;
            for (; u.sibling === null; ) {
              if (u.return === null || u.return === l)
                return;
              u = u.return;
            }
            u.sibling.return = u.return, u = u.sibling;
          }
      }
      function Ef(t, l, e, a) {
        if (wl)
          for (var u = l.child; u !== null; ) {
            if (u.tag === 5) {
              var n = u.stateNode;
              e && a && (n = _s(
                n,
                u.type,
                u.memoizedProps
              )), Ns(t, n);
            } else if (u.tag === 6)
              n = u.stateNode, e && a && (n = bs(
                n,
                u.memoizedProps
              )), Ns(t, n);
            else if (u.tag !== 4) {
              if (u.tag === 22 && u.memoizedState !== null)
                n = u.child, n !== null && (n.return = u), Ef(
                  t,
                  u,
                  !(u.memoizedProps !== null && u.memoizedProps.mode === "manual"),
                  !0
                );
              else if (u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
            }
            if (u === l) break;
            for (; u.sibling === null; ) {
              if (u.return === null || u.return === l) return;
              u = u.return;
            }
            u.sibling.return = u.return, u = u.sibling;
          }
      }
      function zf(t, l) {
        if (wl && Sf(t, l)) {
          t = l.stateNode;
          var e = t.containerInfo, a = zs();
          Ef(a, l, !1, !1), t.pendingChildren = a, wt(l), tm(e, a);
        }
      }
      function gn(t, l, e, a) {
        if (Vt)
          t.memoizedProps !== a && wt(l);
        else if (wl) {
          var u = t.stateNode, n = t.memoizedProps;
          if ((t = Sf(t, l)) || n !== a) {
            var f = Yt.current;
            n = kv(
              u,
              e,
              n,
              a,
              !t,
              null
            ), n === u ? l.stateNode = u : (ps(
              n,
              e,
              a,
              f
            ) && wt(l), l.stateNode = n, t ? Mn(n, l, !1, !1) : wt(l));
          } else l.stateNode = u;
        }
      }
      function Hn(t, l, e) {
        if (Hv(l, e)) {
          if (t.flags |= 16777216, !hs(l, e))
            if (xf()) t.flags |= 8192;
            else
              throw xe = zu, yc;
        } else t.flags &= -16777217;
      }
      function Nf(t, l) {
        if (_m(l)) {
          if (t.flags |= 16777216, !Rs(l))
            if (xf()) t.flags |= 8192;
            else
              throw xe = zu, yc;
        } else t.flags &= -16777217;
      }
      function uu(t, l) {
        l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? tt() : 536870912, t.lanes |= l, $e |= l);
      }
      function ra(t, l) {
        if (!ot)
          switch (t.tailMode) {
            case "hidden":
              l = t.tail;
              for (var e = null; l !== null; )
                l.alternate !== null && (e = l), l = l.sibling;
              e === null ? t.tail = null : e.sibling = null;
              break;
            case "collapsed":
              e = t.tail;
              for (var a = null; e !== null; )
                e.alternate !== null && (a = e), e = e.sibling;
              a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
          }
      }
      function _t(t) {
        var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
        if (l)
          for (var u = t.child; u !== null; )
            e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 31457280, a |= u.flags & 31457280, u.return = t, u = u.sibling;
        else
          for (u = t.child; u !== null; )
            e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = t, u = u.sibling;
        return t.subtreeFlags |= a, t.childLanes = e, l;
      }
      function Fo(t, l, e) {
        var a = l.pendingProps;
        switch (Tt(l), l.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return _t(l), null;
          case 1:
            return _t(l), null;
          case 3:
            return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Hl(Mt), Ut(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (ua(l) ? wt(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, rl !== null && (Yn(rl), rl = null))), zf(t, l), _t(l), null;
          case 26:
            if (il) {
              e = l.type;
              var u = l.memoizedState;
              return t === null ? (wt(l), u !== null ? (_t(l), Nf(
                l,
                u
              )) : (_t(l), Hn(
                l,
                e,
                a
              ))) : u ? u !== t.memoizedState ? (wt(l), _t(l), Nf(
                l,
                u
              )) : (_t(l), l.flags &= -16777217) : (Vt ? t.memoizedProps !== a && wt(l) : gn(
                t,
                l,
                e,
                a
              ), _t(l), Hn(
                l,
                e,
                a
              )), null;
            }
          case 27:
            if (Xt) {
              if (Va(l), e = Il.current, u = l.type, t !== null && l.stateNode != null)
                Vt ? t.memoizedProps !== a && wt(l) : gn(
                  t,
                  l,
                  u,
                  a
                );
              else {
                if (!a) {
                  if (l.stateNode === null)
                    throw Error(o(166));
                  return _t(l), null;
                }
                t = Yt.current, ua(l) ? ei(l, t) : (t = qs(
                  u,
                  a,
                  e,
                  t,
                  !0
                ), l.stateNode = t, wt(l));
              }
              return _t(l), null;
            }
          case 5:
            if (Va(l), e = l.type, t !== null && l.stateNode != null)
              gn(t, l, e, a);
            else {
              if (!a) {
                if (l.stateNode === null)
                  throw Error(o(166));
                return _t(l), null;
              }
              t = Yt.current, ua(l) ? ei(l, t) : (u = zv(
                e,
                a,
                Il.current,
                t,
                l
              ), Mn(u, l, !1, !1), l.stateNode = u, ps(
                u,
                e,
                a,
                t
              ) && wt(l));
            }
            return _t(l), Hn(
              l,
              l.type,
              l.pendingProps
            ), null;
          case 6:
            if (t && l.stateNode != null)
              e = t.memoizedProps, Vt ? e !== a && wt(l) : wl && (e !== a ? (l.stateNode = ys(
                a,
                Il.current,
                Yt.current,
                l
              ), wt(l)) : l.stateNode = t.stateNode);
            else {
              if (typeof a != "string" && l.stateNode === null)
                throw Error(o(166));
              if (t = Il.current, e = Yt.current, ua(l)) {
                if (!cl) throw Error(o(176));
                if (t = l.stateNode, e = l.memoizedProps, a = null, u = xt, u !== null)
                  switch (u.tag) {
                    case 27:
                    case 5:
                      a = u.memoizedProps;
                  }
                vm(
                  t,
                  e,
                  l,
                  a
                ) || ne(l);
              } else
                l.stateNode = ys(
                  a,
                  t,
                  e,
                  l
                );
            }
            return _t(l), null;
          case 13:
            if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
              if (u = ua(l), a !== null && a.dehydrated !== null) {
                if (t === null) {
                  if (!u) throw Error(o(318));
                  if (!cl) throw Error(o(344));
                  if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
                  mm(u, l);
                } else
                  na(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
                _t(l), u = !1;
              } else
                rl !== null && (Yn(rl), rl = null), u = !0;
              if (!u)
                return l.flags & 256 ? (bl(l), l) : (bl(l), null);
            }
            if (bl(l), (l.flags & 128) !== 0)
              return l.lanes = e, l;
            if (e = a !== null, t = t !== null && t.memoizedState !== null, e) {
              a = l.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool);
              var n = null;
              a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048);
            }
            return e !== t && e && (l.child.flags |= 8192), uu(l, l.updateQueue), _t(l), null;
          case 4:
            return Ut(), zf(t, l), t === null && _v(l.stateNode.containerInfo), _t(l), null;
          case 10:
            return Hl(l.type), _t(l), null;
          case 19:
            if (g(jt), u = l.memoizedState, u === null)
              return _t(l), null;
            if (a = (l.flags & 128) !== 0, n = u.rendering, n === null)
              if (a) ra(u, !1);
              else {
                if (Ht !== 0 || t !== null && (t.flags & 128) !== 0)
                  for (t = l.child; t !== null; ) {
                    if (n = Fa(t), n !== null) {
                      for (l.flags |= 128, ra(u, !1), t = n.updateQueue, l.updateQueue = t, uu(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                        ls(e, t), e = e.sibling;
                      return _(
                        jt,
                        jt.current & 1 | 2
                      ), l.child;
                    }
                    t = t.sibling;
                  }
                u.tail !== null && yl() > Da && (l.flags |= 128, a = !0, ra(u, !1), l.lanes = 4194304);
              }
            else {
              if (!a)
                if (t = Fa(n), t !== null) {
                  if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, uu(l, t), ra(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !ot)
                    return _t(l), null;
                } else
                  2 * yl() - u.renderingStartTime > Da && e !== 536870912 && (l.flags |= 128, a = !0, ra(u, !1), l.lanes = 4194304);
              u.isBackwards ? (n.sibling = l.child, l.child = n) : (t = u.last, t !== null ? t.sibling = n : l.child = n, u.last = n);
            }
            return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = yl(), l.sibling = null, t = jt.current, _(
              jt,
              a ? t & 1 | 2 : t & 1
            ), l) : (_t(l), null);
          case 22:
          case 23:
            return bl(l), Fu(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (_t(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : _t(l), e = l.updateQueue, e !== null && uu(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && g(ze), null;
          case 24:
            return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Hl(Mt), _t(l), null;
          case 25:
            return null;
        }
        throw Error(o(156, l.tag));
      }
      function Po(t, l) {
        switch (Tt(l), l.tag) {
          case 1:
            return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
          case 3:
            return Hl(Mt), Ut(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
          case 26:
          case 27:
          case 5:
            return Va(l), null;
          case 13:
            if (bl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
              if (l.alternate === null)
                throw Error(o(340));
              na();
            }
            return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
          case 19:
            return g(jt), null;
          case 4:
            return Ut(), null;
          case 10:
            return Hl(l.type), null;
          case 22:
          case 23:
            return bl(l), Fu(), t !== null && g(ze), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
          case 24:
            return Hl(Mt), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function Tf(t, l) {
        switch (Tt(l), l.tag) {
          case 3:
            Hl(Mt), Ut();
            break;
          case 26:
          case 27:
          case 5:
            Va(l);
            break;
          case 4:
            Ut();
            break;
          case 13:
            bl(l);
            break;
          case 19:
            g(jt);
            break;
          case 10:
            Hl(l.type);
            break;
          case 22:
          case 23:
            bl(l), Fu(), t !== null && g(ze);
            break;
          case 24:
            Hl(Mt);
        }
      }
      function ha(t, l) {
        try {
          var e = l.updateQueue, a = e !== null ? e.lastEffect : null;
          if (a !== null) {
            var u = a.next;
            e = u;
            do {
              if ((e.tag & t) === t) {
                a = void 0;
                var n = e.create, f = e.inst;
                a = n(), f.destroy = a;
              }
              e = e.next;
            } while (e !== u);
          }
        } catch (v) {
          pt(l, l.return, v);
        }
      }
      function Jl(t, l, e) {
        try {
          var a = l.updateQueue, u = a !== null ? a.lastEffect : null;
          if (u !== null) {
            var n = u.next;
            a = n;
            do {
              if ((a.tag & t) === t) {
                var f = a.inst, v = f.destroy;
                if (v !== void 0) {
                  f.destroy = void 0, u = l;
                  var p = e;
                  try {
                    v();
                  } catch (N) {
                    pt(
                      u,
                      p,
                      N
                    );
                  }
                }
              }
              a = a.next;
            } while (a !== n);
          }
        } catch (N) {
          pt(l, l.return, N);
        }
      }
      function _f(t) {
        var l = t.updateQueue;
        if (l !== null) {
          var e = t.stateNode;
          try {
            oi(l, e);
          } catch (a) {
            pt(t, t.return, a);
          }
        }
      }
      function bf(t, l, e) {
        e.props = ce(
          t.type,
          t.memoizedProps
        ), e.state = t.memoizedState;
        try {
          e.componentWillUnmount();
        } catch (a) {
          pt(t, l, a);
        }
      }
      function fe(t, l) {
        try {
          var e = t.ref;
          if (e !== null) {
            var a = t.stateNode;
            switch (t.tag) {
              case 26:
              case 27:
              case 5:
                var u = za(a);
                break;
              default:
                u = a;
            }
            typeof e == "function" ? t.refCleanup = e(u) : e.current = u;
          }
        } catch (n) {
          pt(t, l, n);
        }
      }
      function It(t, l) {
        var e = t.ref, a = t.refCleanup;
        if (e !== null)
          if (typeof a == "function")
            try {
              a();
            } catch (u) {
              pt(t, l, u);
            } finally {
              t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
            }
          else if (typeof e == "function")
            try {
              e(null);
            } catch (u) {
              pt(t, l, u);
            }
          else e.current = null;
      }
      function Mf(t) {
        var l = t.type, e = t.memoizedProps, a = t.stateNode;
        try {
          Zv(a, l, e, t);
        } catch (u) {
          pt(t, t.return, u);
        }
      }
      function gf(t, l, e) {
        try {
          Kv(
            t.stateNode,
            t.type,
            e,
            l,
            t
          );
        } catch (a) {
          pt(t, t.return, a);
        }
      }
      function Hf(t) {
        return t.tag === 5 || t.tag === 3 || (il ? t.tag === 26 : !1) || (Xt ? t.tag === 27 : !1) || t.tag === 4;
      }
      function On(t) {
        t: for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || Hf(t.return)) return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && (!Xt || t.tag !== 27) && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & 2)) return t.stateNode;
        }
      }
      function Un(t, l, e) {
        var a = t.tag;
        if (a === 5 || a === 6)
          t = t.stateNode, l ? xv(e, t, l) : Vv(e, t);
        else if (!(a === 4 || Xt && a === 27) && (t = t.child, t !== null))
          for (Un(t, l, e), t = t.sibling; t !== null; )
            Un(t, l, e), t = t.sibling;
      }
      function nu(t, l, e) {
        var a = t.tag;
        if (a === 5 || a === 6)
          t = t.stateNode, l ? Jv(e, t, l) : Gv(e, t);
        else if (!(a === 4 || Xt && a === 27) && (t = t.child, t !== null))
          for (nu(t, l, e), t = t.sibling; t !== null; )
            nu(t, l, e), t = t.sibling;
      }
      function Of(t, l, e) {
        t = t.containerInfo;
        try {
          Ts(t, e);
        } catch (a) {
          pt(l, l.return, a);
        }
      }
      function wo(t, l) {
        for (Sv(t.containerInfo), qt = l; qt !== null; )
          if (t = qt, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
            l.return = t, qt = l;
          else
            for (; qt !== null; ) {
              t = qt;
              var e = t.alternate;
              switch (l = t.flags, t.tag) {
                case 0:
                  break;
                case 11:
                case 15:
                  break;
                case 1:
                  if ((l & 1024) !== 0 && e !== null) {
                    l = void 0;
                    var a = t, u = e.memoizedProps;
                    e = e.memoizedState;
                    var n = a.stateNode;
                    try {
                      var f = ce(
                        a.type,
                        u,
                        a.elementType === a.type
                      );
                      l = n.getSnapshotBeforeUpdate(
                        f,
                        e
                      ), n.__reactInternalSnapshotBeforeUpdate = l;
                    } catch (v) {
                      pt(
                        a,
                        a.return,
                        v
                      );
                    }
                  }
                  break;
                case 3:
                  (l & 1024) !== 0 && Vt && $v(t.stateNode.containerInfo);
                  break;
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  if ((l & 1024) !== 0)
                    throw Error(o(163));
              }
              if (l = t.sibling, l !== null) {
                l.return = t.return, qt = l;
                break;
              }
              qt = t.return;
            }
        return f = Js, Js = !1, f;
      }
      function Uf(t, l, e) {
        var a = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Ol(t, e), a & 4 && ha(5, e);
            break;
          case 1:
            if (Ol(t, e), a & 4)
              if (t = e.stateNode, l === null)
                try {
                  t.componentDidMount();
                } catch (v) {
                  pt(e, e.return, v);
                }
              else {
                var u = ce(
                  e.type,
                  l.memoizedProps
                );
                l = l.memoizedState;
                try {
                  t.componentDidUpdate(
                    u,
                    l,
                    t.__reactInternalSnapshotBeforeUpdate
                  );
                } catch (v) {
                  pt(
                    e,
                    e.return,
                    v
                  );
                }
              }
            a & 64 && _f(e), a & 512 && fe(e, e.return);
            break;
          case 3:
            if (Ol(t, e), a & 64 && (a = e.updateQueue, a !== null)) {
              if (t = null, e.child !== null)
                switch (e.child.tag) {
                  case 27:
                  case 5:
                    t = za(e.child.stateNode);
                    break;
                  case 1:
                    t = e.child.stateNode;
                }
              try {
                oi(a, t);
              } catch (v) {
                pt(e, e.return, v);
              }
            }
            break;
          case 26:
            if (il) {
              Ol(t, e), a & 512 && fe(e, e.return);
              break;
            }
          case 27:
          case 5:
            Ol(t, e), l === null && a & 4 && Mf(e), a & 512 && fe(e, e.return);
            break;
          case 12:
            Ol(t, e);
            break;
          case 13:
            Ol(t, e), a & 4 && Df(t, e);
            break;
          case 22:
            if (u = e.memoizedState !== null || Rl, !u) {
              l = l !== null && l.memoizedState !== null || gt;
              var n = Rl, f = gt;
              Rl = u, (gt = l) && !f ? xl(
                t,
                e,
                (e.subtreeFlags & 8772) !== 0
              ) : Ol(t, e), Rl = n, gt = f;
            }
            a & 512 && (e.memoizedProps.mode === "manual" ? fe(e, e.return) : It(e, e.return));
            break;
          default:
            Ol(t, e);
        }
      }
      function Af(t) {
        var l = t.alternate;
        l !== null && (t.alternate = null, Af(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && gv(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
      }
      function pl(t, l, e) {
        for (e = e.child; e !== null; )
          An(
            t,
            l,
            e
          ), e = e.sibling;
      }
      function An(t, l, e) {
        if (el && typeof el.onCommitFiberUnmount == "function")
          try {
            el.onCommitFiberUnmount(_a, e);
          } catch {
          }
        switch (e.tag) {
          case 26:
            if (il) {
              gt || It(e, l), pl(
                t,
                l,
                e
              ), e.memoizedState ? Ds(e.memoizedState) : e.stateNode && js(e.stateNode);
              break;
            }
          case 27:
            if (Xt) {
              gt || It(e, l);
              var a = Ct, u = ul;
              Ct = e.stateNode, pl(
                t,
                l,
                e
              ), Hm(e.stateNode), Ct = a, ul = u;
              break;
            }
          case 5:
            gt || It(e, l);
          case 6:
            if (Vt) {
              if (a = Ct, u = ul, Ct = null, pl(
                t,
                l,
                e
              ), Ct = a, ul = u, Ct !== null)
                if (ul)
                  try {
                    Wv(Ct, e.stateNode);
                  } catch (n) {
                    pt(
                      e,
                      l,
                      n
                    );
                  }
                else
                  try {
                    Lv(Ct, e.stateNode);
                  } catch (n) {
                    pt(
                      e,
                      l,
                      n
                    );
                  }
            } else
              pl(
                t,
                l,
                e
              );
            break;
          case 18:
            Vt && Ct !== null && (ul ? hm(
              Ct,
              e.stateNode
            ) : rm(Ct, e.stateNode));
            break;
          case 4:
            Vt ? (a = Ct, u = ul, Ct = e.stateNode.containerInfo, ul = !0, pl(
              t,
              l,
              e
            ), Ct = a, ul = u) : (wl && Of(
              e.stateNode,
              e,
              zs()
            ), pl(
              t,
              l,
              e
            ));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            gt || Jl(2, e, l), gt || Jl(4, e, l), pl(
              t,
              l,
              e
            );
            break;
          case 1:
            gt || (It(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && bf(
              e,
              l,
              a
            )), pl(
              t,
              l,
              e
            );
            break;
          case 21:
            pl(
              t,
              l,
              e
            );
            break;
          case 22:
            gt || It(e, l), gt = (a = gt) || e.memoizedState !== null, pl(
              t,
              l,
              e
            ), gt = a;
            break;
          default:
            pl(
              t,
              l,
              e
            );
        }
      }
      function Df(t, l) {
        if (cl && l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
          try {
            ym(t);
          } catch (e) {
            pt(l, l.return, e);
          }
      }
      function Io(t) {
        switch (t.tag) {
          case 13:
          case 19:
            var l = t.stateNode;
            return l === null && (l = t.stateNode = new Ks()), l;
          case 22:
            return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new Ks()), l;
          default:
            throw Error(o(435, t.tag));
        }
      }
      function Dn(t, l) {
        var e = Io(t);
        l.forEach(function(a) {
          var u = nv.bind(null, t, a);
          e.has(a) || (e.add(a), a.then(u, u));
        });
      }
      function Ft(t, l) {
        var e = l.deletions;
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var u = e[a], n = t, f = l;
            if (Vt) {
              var v = f;
              t: for (; v !== null; ) {
                switch (v.tag) {
                  case 27:
                  case 5:
                    Ct = v.stateNode, ul = !1;
                    break t;
                  case 3:
                    Ct = v.stateNode.containerInfo, ul = !0;
                    break t;
                  case 4:
                    Ct = v.stateNode.containerInfo, ul = !0;
                    break t;
                }
                v = v.return;
              }
              if (Ct === null) throw Error(o(160));
              An(n, f, u), Ct = null, ul = !1;
            } else An(n, f, u);
            n = u.alternate, n !== null && (n.return = null), u.return = null;
          }
        if (l.subtreeFlags & 13878)
          for (l = l.child; l !== null; )
            Cf(l, t), l = l.sibling;
      }
      function Cf(t, l) {
        var e = t.alternate, a = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Ft(l, t), $t(t), a & 4 && (Jl(3, t, t.return), ha(3, t), Jl(5, t, t.return));
            break;
          case 1:
            Ft(l, t), $t(t), a & 512 && (gt || e === null || It(e, e.return)), a & 64 && Rl && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
            break;
          case 26:
            if (il) {
              var u = hl;
              Ft(l, t), $t(t), a & 512 && (gt || e === null || It(e, e.return)), a & 4 && (a = e !== null ? e.memoizedState : null, l = t.memoizedState, e === null ? l === null ? t.stateNode === null ? t.stateNode = zm(
                u,
                t.type,
                t.memoizedProps,
                t
              ) : Cs(
                u,
                t.type,
                t.stateNode
              ) : t.stateNode = As(
                u,
                l,
                t.memoizedProps
              ) : a !== l ? (a === null ? e.stateNode !== null && js(e.stateNode) : Ds(a), l === null ? Cs(
                u,
                t.type,
                t.stateNode
              ) : As(
                u,
                l,
                t.memoizedProps
              )) : l === null && t.stateNode !== null && gf(
                t,
                t.memoizedProps,
                e.memoizedProps
              ));
              break;
            }
          case 27:
            if (Xt && a & 4 && t.alternate === null) {
              u = t.stateNode;
              var n = t.memoizedProps;
              try {
                Mm(u), gm(
                  t.type,
                  n,
                  u,
                  t
                );
              } catch (A) {
                pt(t, t.return, A);
              }
            }
          case 5:
            if (Ft(l, t), $t(t), a & 512 && (gt || e === null || It(e, e.return)), Vt) {
              if (t.flags & 32) {
                l = t.stateNode;
                try {
                  Es(l);
                } catch (A) {
                  pt(t, t.return, A);
                }
              }
              a & 4 && t.stateNode != null && (l = t.memoizedProps, gf(
                t,
                l,
                e !== null ? e.memoizedProps : l
              )), a & 1024 && (Ec = !0);
            }
            break;
          case 6:
            if (Ft(l, t), $t(t), a & 4 && Vt) {
              if (t.stateNode === null)
                throw Error(o(162));
              a = t.memoizedProps, e = e !== null ? e.memoizedProps : a, l = t.stateNode;
              try {
                Xv(l, e, a);
              } catch (A) {
                pt(t, t.return, A);
              }
            }
            break;
          case 3:
            if (il ? (Tm(), u = hl, hl = nc(l.containerInfo), Ft(l, t), hl = u) : Ft(l, t), $t(t), a & 4) {
              if (Vt && cl && e !== null && e.memoizedState.isDehydrated)
                try {
                  pm(l.containerInfo);
                } catch (A) {
                  pt(t, t.return, A);
                }
              if (wl) {
                a = l.containerInfo, e = l.pendingChildren;
                try {
                  Ts(a, e);
                } catch (A) {
                  pt(t, t.return, A);
                }
              }
            }
            Ec && (Ec = !1, jf(t));
            break;
          case 4:
            il ? (e = hl, hl = nc(
              t.stateNode.containerInfo
            ), Ft(l, t), $t(t), hl = e) : (Ft(l, t), $t(t)), a & 4 && wl && Of(
              t.stateNode,
              t,
              t.stateNode.pendingChildren
            );
            break;
          case 12:
            Ft(l, t), $t(t);
            break;
          case 13:
            Ft(l, t), $t(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (_c = yl()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Dn(t, a)));
            break;
          case 22:
            a & 512 && (gt || e === null || It(e, e.return)), u = t.memoizedState !== null;
            var f = e !== null && e.memoizedState !== null, v = Rl, p = gt;
            if (Rl = v || u, gt = p || f, Ft(l, t), gt = p, Rl = v, $t(t), l = t.stateNode, l._current = t, l._visibility &= -3, l._visibility |= l._pendingVisibility & 2, a & 8192 && (l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (l = Rl || gt, e === null || f || l || Ue(t)), Vt && (t.memoizedProps === null || t.memoizedProps.mode !== "manual"))) {
              t: if (e = null, Vt)
                for (l = t; ; ) {
                  if (l.tag === 5 || il && l.tag === 26 || Xt && l.tag === 27) {
                    if (e === null) {
                      f = e = l;
                      try {
                        n = f.stateNode, u ? Fv(n) : wv(
                          f.stateNode,
                          f.memoizedProps
                        );
                      } catch (A) {
                        pt(f, f.return, A);
                      }
                    }
                  } else if (l.tag === 6) {
                    if (e === null) {
                      f = l;
                      try {
                        var N = f.stateNode;
                        u ? Pv(N) : Iv(N, f.memoizedProps);
                      } catch (A) {
                        pt(f, f.return, A);
                      }
                    }
                  } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
                    l.child.return = l, l = l.child;
                    continue;
                  }
                  if (l === t) break t;
                  for (; l.sibling === null; ) {
                    if (l.return === null || l.return === t)
                      break t;
                    e === l && (e = null), l = l.return;
                  }
                  e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
                }
            }
            a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Dn(t, e))));
            break;
          case 19:
            Ft(l, t), $t(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Dn(t, a)));
            break;
          case 21:
            break;
          default:
            Ft(l, t), $t(t);
        }
      }
      function $t(t) {
        var l = t.flags;
        if (l & 2) {
          try {
            if (Vt && (!Xt || t.tag !== 27)) {
              t: {
                for (var e = t.return; e !== null; ) {
                  if (Hf(e)) {
                    var a = e;
                    break t;
                  }
                  e = e.return;
                }
                throw Error(o(160));
              }
              switch (a.tag) {
                case 27:
                  if (Xt) {
                    var u = a.stateNode, n = On(t);
                    nu(
                      t,
                      n,
                      u
                    );
                    break;
                  }
                case 5:
                  var f = a.stateNode;
                  a.flags & 32 && (Es(f), a.flags &= -33);
                  var v = On(t);
                  nu(t, v, f);
                  break;
                case 3:
                case 4:
                  var p = a.stateNode.containerInfo, N = On(t);
                  Un(
                    t,
                    N,
                    p
                  );
                  break;
                default:
                  throw Error(o(161));
              }
            }
          } catch (A) {
            pt(t, t.return, A);
          }
          t.flags &= -3;
        }
        l & 4096 && (t.flags &= -4097);
      }
      function jf(t) {
        if (t.subtreeFlags & 1024)
          for (t = t.child; t !== null; ) {
            var l = t;
            jf(l), l.tag === 5 && l.flags & 1024 && Av(l.stateNode), t = t.sibling;
          }
      }
      function Ol(t, l) {
        if (l.subtreeFlags & 8772)
          for (l = l.child; l !== null; )
            Uf(t, l.alternate, l), l = l.sibling;
      }
      function Ue(t) {
        for (t = t.child; t !== null; ) {
          var l = t;
          switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Jl(4, l, l.return), Ue(l);
              break;
            case 1:
              It(l, l.return);
              var e = l.stateNode;
              typeof e.componentWillUnmount == "function" && bf(
                l,
                l.return,
                e
              ), Ue(l);
              break;
            case 26:
            case 27:
            case 5:
              It(l, l.return), Ue(l);
              break;
            case 22:
              It(l, l.return), l.memoizedState === null && Ue(l);
              break;
            default:
              Ue(l);
          }
          t = t.sibling;
        }
      }
      function xl(t, l, e) {
        for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
          var a = l.alternate, u = t, n = l, f = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              xl(
                u,
                n,
                e
              ), ha(4, n);
              break;
            case 1:
              if (xl(
                u,
                n,
                e
              ), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
                try {
                  u.componentDidMount();
                } catch (N) {
                  pt(a, a.return, N);
                }
              if (a = n, u = a.updateQueue, u !== null) {
                var v = a.stateNode;
                try {
                  var p = u.shared.hiddenCallbacks;
                  if (p !== null)
                    for (u.shared.hiddenCallbacks = null, u = 0; u < p.length; u++)
                      si(p[u], v);
                } catch (N) {
                  pt(a, a.return, N);
                }
              }
              e && f & 64 && _f(n), fe(n, n.return);
              break;
            case 26:
            case 27:
            case 5:
              xl(
                u,
                n,
                e
              ), e && a === null && f & 4 && Mf(n), fe(n, n.return);
              break;
            case 12:
              xl(
                u,
                n,
                e
              );
              break;
            case 13:
              xl(
                u,
                n,
                e
              ), e && f & 4 && Df(u, n);
              break;
            case 22:
              n.memoizedState === null && xl(
                u,
                n,
                e
              ), fe(n, n.return);
              break;
            default:
              xl(
                u,
                n,
                e
              );
          }
          l = l.sibling;
        }
      }
      function Cn(t, l) {
        var e = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && ya(e));
      }
      function jn(t, l) {
        t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && ya(t));
      }
      function Ll(t, l, e, a) {
        if (l.subtreeFlags & 10256)
          for (l = l.child; l !== null; )
            Rf(
              t,
              l,
              e,
              a
            ), l = l.sibling;
      }
      function Rf(t, l, e, a) {
        var u = l.flags;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            Ll(
              t,
              l,
              e,
              a
            ), u & 2048 && ha(9, l);
            break;
          case 3:
            Ll(
              t,
              l,
              e,
              a
            ), u & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && ya(t)));
            break;
          case 12:
            if (u & 2048) {
              Ll(
                t,
                l,
                e,
                a
              ), t = l.stateNode;
              try {
                var n = l.memoizedProps, f = n.id, v = n.onPostCommit;
                typeof v == "function" && v(
                  f,
                  l.alternate === null ? "mount" : "update",
                  t.passiveEffectDuration,
                  -0
                );
              } catch (p) {
                pt(l, l.return, p);
              }
            } else
              Ll(
                t,
                l,
                e,
                a
              );
            break;
          case 23:
            break;
          case 22:
            n = l.stateNode, l.memoizedState !== null ? n._visibility & 4 ? Ll(
              t,
              l,
              e,
              a
            ) : Sa(
              t,
              l
            ) : n._visibility & 4 ? Ll(
              t,
              l,
              e,
              a
            ) : (n._visibility |= 4, Ae(
              t,
              l,
              e,
              a,
              (l.subtreeFlags & 10256) !== 0
            )), u & 2048 && Cn(
              l.alternate,
              l
            );
            break;
          case 24:
            Ll(
              t,
              l,
              e,
              a
            ), u & 2048 && jn(l.alternate, l);
            break;
          default:
            Ll(
              t,
              l,
              e,
              a
            );
        }
      }
      function Ae(t, l, e, a, u) {
        for (u = u && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
          var n = t, f = l, v = e, p = a, N = f.flags;
          switch (f.tag) {
            case 0:
            case 11:
            case 15:
              Ae(
                n,
                f,
                v,
                p,
                u
              ), ha(8, f);
              break;
            case 23:
              break;
            case 22:
              var A = f.stateNode;
              f.memoizedState !== null ? A._visibility & 4 ? Ae(
                n,
                f,
                v,
                p,
                u
              ) : Sa(
                n,
                f
              ) : (A._visibility |= 4, Ae(
                n,
                f,
                v,
                p,
                u
              )), u && N & 2048 && Cn(
                f.alternate,
                f
              );
              break;
            case 24:
              Ae(
                n,
                f,
                v,
                p,
                u
              ), u && N & 2048 && jn(f.alternate, f);
              break;
            default:
              Ae(
                n,
                f,
                v,
                p,
                u
              );
          }
          l = l.sibling;
        }
      }
      function Sa(t, l) {
        if (l.subtreeFlags & 10256)
          for (l = l.child; l !== null; ) {
            var e = t, a = l, u = a.flags;
            switch (a.tag) {
              case 22:
                Sa(e, a), u & 2048 && Cn(
                  a.alternate,
                  a
                );
                break;
              case 24:
                Sa(e, a), u & 2048 && jn(
                  a.alternate,
                  a
                );
                break;
              default:
                Sa(e, a);
            }
            l = l.sibling;
          }
      }
      function se(t) {
        if (t.subtreeFlags & we)
          for (t = t.child; t !== null; )
            qf(t), t = t.sibling;
      }
      function qf(t) {
        switch (t.tag) {
          case 26:
            se(t), t.flags & we && (t.memoizedState !== null ? bm(
              hl,
              t.memoizedState,
              t.memoizedProps
            ) : Ss(t.type, t.memoizedProps));
            break;
          case 5:
            se(t), t.flags & we && Ss(t.type, t.memoizedProps);
            break;
          case 3:
          case 4:
            if (il) {
              var l = hl;
              hl = nc(
                t.stateNode.containerInfo
              ), se(t), hl = l;
            } else se(t);
            break;
          case 22:
            t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = we, we = 16777216, se(t), we = l) : se(t));
            break;
          default:
            se(t);
        }
      }
      function Bf(t) {
        var l = t.alternate;
        if (l !== null && (t = l.child, t !== null)) {
          l.child = null;
          do
            l = t.sibling, t.sibling = null, t = l;
          while (t !== null);
        }
      }
      function Ea(t) {
        var l = t.deletions;
        if ((t.flags & 16) !== 0) {
          if (l !== null)
            for (var e = 0; e < l.length; e++) {
              var a = l[e];
              qt = a, Yf(
                a,
                t
              );
            }
          Bf(t);
        }
        if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null; )
            Qf(t), t = t.sibling;
      }
      function Qf(t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ea(t), t.flags & 2048 && Jl(9, t, t.return);
            break;
          case 3:
            Ea(t);
            break;
          case 12:
            Ea(t);
            break;
          case 22:
            var l = t.stateNode;
            t.memoizedState !== null && l._visibility & 4 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -5, cu(t)) : Ea(t);
            break;
          default:
            Ea(t);
        }
      }
      function cu(t) {
        var l = t.deletions;
        if ((t.flags & 16) !== 0) {
          if (l !== null)
            for (var e = 0; e < l.length; e++) {
              var a = l[e];
              qt = a, Yf(
                a,
                t
              );
            }
          Bf(t);
        }
        for (t = t.child; t !== null; ) {
          switch (l = t, l.tag) {
            case 0:
            case 11:
            case 15:
              Jl(8, l, l.return), cu(l);
              break;
            case 22:
              e = l.stateNode, e._visibility & 4 && (e._visibility &= -5, cu(l));
              break;
            default:
              cu(l);
          }
          t = t.sibling;
        }
      }
      function Yf(t, l) {
        for (; qt !== null; ) {
          var e = qt;
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Jl(8, e, l);
              break;
            case 23:
            case 22:
              if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                var a = e.memoizedState.cachePool.pool;
                a != null && a.refCount++;
              }
              break;
            case 24:
              ya(e.memoizedState.cache);
          }
          if (a = e.child, a !== null) a.return = e, qt = a;
          else
            t: for (e = t; qt !== null; ) {
              a = qt;
              var u = a.sibling, n = a.return;
              if (Af(a), a === e) {
                qt = null;
                break t;
              }
              if (u !== null) {
                u.return = n, qt = u;
                break t;
              }
              qt = n;
            }
        }
      }
      function Rn(t) {
        var l = rs(t);
        if (l != null) {
          if (typeof l.memoizedProps["data-testname"] != "string")
            throw Error(o(364));
          return l;
        }
        if (t = jv(t), t === null) throw Error(o(362));
        return t.stateNode.current;
      }
      function qn(t, l) {
        var e = t.tag;
        switch (l.$$typeof) {
          case Mu:
            if (t.type === l.value) return !0;
            break;
          case gu:
            t: {
              for (l = l.value, t = [t, 0], e = 0; e < t.length; ) {
                var a = t[e++], u = a.tag, n = t[e++], f = l[n];
                if (u !== 5 && u !== 26 && u !== 27 || !Ta(a)) {
                  for (; f != null && qn(a, f); )
                    n++, f = l[n];
                  if (n === l.length) {
                    l = !0;
                    break t;
                  } else
                    for (a = a.child; a !== null; )
                      t.push(a, n), a = a.sibling;
                }
              }
              l = !1;
            }
            return l;
          case Hu:
            if ((e === 5 || e === 26 || e === 27) && Bv(t.stateNode, l.value))
              return !0;
            break;
          case Uu:
            if ((e === 5 || e === 6 || e === 26 || e === 27) && (t = qv(t), t !== null && 0 <= t.indexOf(l.value)))
              return !0;
            break;
          case Ou:
            if ((e === 5 || e === 26 || e === 27) && (t = t.memoizedProps["data-testname"], typeof t == "string" && t.toLowerCase() === l.value.toLowerCase()))
              return !0;
            break;
          default:
            throw Error(o(365));
        }
        return !1;
      }
      function Bn(t) {
        switch (t.$$typeof) {
          case Mu:
            return "<" + (j(t.value) || "Unknown") + ">";
          case gu:
            return ":has(" + (Bn(t) || "") + ")";
          case Hu:
            return '[role="' + t.value + '"]';
          case Uu:
            return '"' + t.value + '"';
          case Ou:
            return '[data-testname="' + t.value + '"]';
          default:
            throw Error(o(365));
        }
      }
      function Gf(t, l) {
        var e = [];
        t = [t, 0];
        for (var a = 0; a < t.length; ) {
          var u = t[a++], n = u.tag, f = t[a++], v = l[f];
          if (n !== 5 && n !== 26 && n !== 27 || !Ta(u)) {
            for (; v != null && qn(u, v); )
              f++, v = l[f];
            if (f === l.length) e.push(u);
            else
              for (u = u.child; u !== null; )
                t.push(u, f), u = u.sibling;
          }
        }
        return e;
      }
      function Qn(t, l) {
        if (!Na) throw Error(o(363));
        t = Rn(t), t = Gf(t, l), l = [], t = Array.from(t);
        for (var e = 0; e < t.length; ) {
          var a = t[e++], u = a.tag;
          if (u === 5 || u === 26 || u === 27)
            Ta(a) || l.push(a.stateNode);
          else
            for (a = a.child; a !== null; )
              t.push(a), a = a.sibling;
        }
        return l;
      }
      function kt() {
        if ((rt & 2) !== 0 && it !== 0)
          return it & -it;
        if (W.T !== null) {
          var t = Ke;
          return t !== 0 ? t : Ku();
        }
        return bv();
      }
      function Vf() {
        ml === 0 && (ml = (it & 536870912) === 0 || ot ? st() : 536870912);
        var t = vl.current;
        return t !== null && (t.flags |= 32), ml;
      }
      function Jt(t, l, e) {
        (t === St && Et === 2 || t.cancelPendingCommit !== null) && (De(t, 0), Ul(
          t,
          it,
          ml,
          !1
        )), w(t, e), ((rt & 2) === 0 || t !== St) && (t === St && ((rt & 2) === 0 && (Ne |= e), Ht === 4 && Ul(
          t,
          it,
          ml,
          !1
        )), Sl(t));
      }
      function Xf(t, l, e) {
        if ((rt & 6) !== 0) throw Error(o(327));
        var a = !e && (l & 60) === 0 && (l & t.expiredLanes) === 0 || Y(t, l), u = a ? tv(t, l) : Xn(t, l, !0), n = a;
        do {
          if (u === 0) {
            Ie && !a && Ul(t, l, 0, !1);
            break;
          } else if (u === 6)
            Ul(
              t,
              l,
              0,
              !ql
            );
          else {
            if (e = t.current.alternate, n && !$o(e)) {
              u = Xn(t, l, !1), n = !1;
              continue;
            }
            if (u === 2) {
              if (n = l, t.errorRecoveryDisabledLanes & n)
                var f = 0;
              else
                f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
              if (f !== 0) {
                l = f;
                t: {
                  var v = t;
                  u = Aa;
                  var p = cl && v.current.memoizedState.isDehydrated;
                  if (p && (De(v, f).flags |= 256), f = Xn(
                    v,
                    f,
                    !1
                  ), f !== 2) {
                    if (zc && !p) {
                      v.errorRecoveryDisabledLanes |= n, Ne |= n, u = 4;
                      break t;
                    }
                    n = Tl, Tl = u, n !== null && Yn(n);
                  }
                  u = f;
                }
                if (n = !1, u !== 2) continue;
              }
            }
            if (u === 1) {
              De(t, 0), Ul(t, l, 0, !0);
              break;
            }
            t: {
              switch (a = t, u) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 4:
                  if ((l & 4194176) === l) {
                    Ul(
                      a,
                      l,
                      ml,
                      !ql
                    );
                    break t;
                  }
                  break;
                case 2:
                  Tl = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(o(329));
              }
              if (a.finishedWork = e, a.finishedLanes = l, (l & 62914560) === l && (n = _c + 300 - yl(), 10 < n)) {
                if (Ul(
                  a,
                  l,
                  ml,
                  !ql
                ), x(a, 0) !== 0) break t;
                a.timeoutHandle = Nv(
                  Zf.bind(
                    null,
                    a,
                    e,
                    Tl,
                    Au,
                    Tc,
                    l,
                    ml,
                    Ne,
                    $e,
                    ql,
                    2,
                    -0,
                    0
                  ),
                  n
                );
                break t;
              }
              Zf(
                a,
                e,
                Tl,
                Au,
                Tc,
                l,
                ml,
                Ne,
                $e,
                ql,
                0,
                -0,
                0
              );
            }
          }
          break;
        } while (!0);
        Sl(t);
      }
      function Yn(t) {
        Tl === null ? Tl = t : Tl.push.apply(
          Tl,
          t
        );
      }
      function Zf(t, l, e, a, u, n, f, v, p, N, A, R, q) {
        var P = l.subtreeFlags;
        if ((P & 8192 || (P & 16785408) === 16785408) && (Ov(), qf(l), l = Uv(), l !== null)) {
          t.cancelPendingCommit = l(
            If.bind(
              null,
              t,
              e,
              a,
              u,
              f,
              v,
              p,
              1,
              R,
              q
            )
          ), Ul(t, n, f, !N);
          return;
        }
        If(
          t,
          e,
          a,
          u,
          f,
          v,
          p,
          A,
          R,
          q
        );
      }
      function $o(t) {
        for (var l = t; ; ) {
          var e = l.tag;
          if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
            for (var a = 0; a < e.length; a++) {
              var u = e[a], n = u.getSnapshot;
              u = u.value;
              try {
                if (!al(n(), u)) return !1;
              } catch {
                return !1;
              }
            }
          if (e = l.child, l.subtreeFlags & 16384 && e !== null)
            e.return = l, l = e;
          else {
            if (l === t) break;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) return !0;
              l = l.return;
            }
            l.sibling.return = l.return, l = l.sibling;
          }
        }
        return !0;
      }
      function Ul(t, l, e, a) {
        l &= ~Nc, l &= ~Ne, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
        for (var u = l; 0 < u; ) {
          var n = 31 - ll(u), f = 1 << n;
          a[n] = -1, u &= ~f;
        }
        e !== 0 && I(t, e, l);
      }
      function Kf() {
        return (rt & 6) === 0 ? (He(0), !1) : !0;
      }
      function Gn() {
        if (at !== null) {
          if (Et === 0)
            var t = at.return;
          else
            t = at, jl = Ee = null, ku(t), Le = null, Ha = 0, t = at;
          for (; t !== null; )
            Tf(t.alternate, t), t = t.return;
          at = null;
        }
      }
      function De(t, l) {
        t.finishedWork = null, t.finishedLanes = 0;
        var e = t.timeoutHandle;
        e !== ec && (t.timeoutHandle = ec, Tv(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Gn(), St = t, at = e = Wl(t.current, null), it = l, Et = 0, nl = null, ql = !1, Ie = Y(t, l), zc = !1, $e = ml = Nc = Ne = le = Ht = 0, Tl = Aa = null, Tc = !1, (l & 8) !== 0 && (l |= l & 32);
        var a = t.entangledLanes;
        if (a !== 0)
          for (t = t.entanglements, a &= l; 0 < a; ) {
            var u = 31 - ll(a), n = 1 << u;
            l |= t[u], a &= ~n;
          }
        return Bl = l, Xa(), e;
      }
      function Jf(t, l) {
        k = null, W.H = Nl, l === ga ? (l = di(), Et = 3) : l === yc ? (l = di(), Et = 4) : Et = l === Xs ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, nl = l, at === null && (Ht = 1, tu(
          t,
          B(l, t.current)
        ));
      }
      function xf() {
        var t = vl.current;
        return t === null ? !0 : (it & 4194176) === it ? zl === null : (it & 62914560) === it || (it & 536870912) !== 0 ? t === zl : !1;
      }
      function Lf() {
        var t = W.H;
        return W.H = Nl, t === null ? Nl : t;
      }
      function Wf() {
        var t = W.A;
        return W.A = Xm, t;
      }
      function Vn() {
        Ht = 4, ql || (it & 4194176) !== it && vl.current !== null || (Ie = !0), (le & 134217727) === 0 && (Ne & 134217727) === 0 || St === null || Ul(
          St,
          it,
          ml,
          !1
        );
      }
      function Xn(t, l, e) {
        var a = rt;
        rt |= 2;
        var u = Lf(), n = Wf();
        (St !== t || it !== l) && (Au = null, De(t, l)), l = !1;
        var f = Ht;
        t: do
          try {
            if (Et !== 0 && at !== null) {
              var v = at, p = nl;
              switch (Et) {
                case 8:
                  Gn(), f = 6;
                  break t;
                case 3:
                case 2:
                case 6:
                  vl.current === null && (l = !0);
                  var N = Et;
                  if (Et = 0, nl = null, Ce(t, v, p, N), e && Ie) {
                    f = 0;
                    break t;
                  }
                  break;
                default:
                  N = Et, Et = 0, nl = null, Ce(t, v, p, N);
              }
            }
            ko(), f = Ht;
            break;
          } catch (A) {
            Jf(t, A);
          }
        while (!0);
        return l && t.shellSuspendCounter++, jl = Ee = null, rt = a, W.H = u, W.A = n, at === null && (St = null, it = 0, Xa()), f;
      }
      function ko() {
        for (; at !== null; ) Ff(at);
      }
      function tv(t, l) {
        var e = rt;
        rt |= 2;
        var a = Lf(), u = Wf();
        St !== t || it !== l ? (Au = null, Da = yl() + 500, De(t, l)) : Ie = Y(
          t,
          l
        );
        t: do
          try {
            if (Et !== 0 && at !== null) {
              l = at;
              var n = nl;
              l: switch (Et) {
                case 1:
                  Et = 0, nl = null, Ce(t, l, n, 1);
                  break;
                case 2:
                  if (vi(n)) {
                    Et = 0, nl = null, Pf(l);
                    break;
                  }
                  l = function() {
                    Et === 2 && St === t && (Et = 7), Sl(t);
                  }, n.then(l, l);
                  break t;
                case 3:
                  Et = 7;
                  break t;
                case 4:
                  Et = 5;
                  break t;
                case 7:
                  vi(n) ? (Et = 0, nl = null, Pf(l)) : (Et = 0, nl = null, Ce(t, l, n, 7));
                  break;
                case 5:
                  var f = null;
                  switch (at.tag) {
                    case 26:
                      f = at.memoizedState;
                    case 5:
                    case 27:
                      var v = at, p = v.type, N = v.pendingProps;
                      if (f ? Rs(f) : hs(p, N)) {
                        Et = 0, nl = null;
                        var A = v.sibling;
                        if (A !== null) at = A;
                        else {
                          var R = v.return;
                          R !== null ? (at = R, iu(R)) : at = null;
                        }
                        break l;
                      }
                  }
                  Et = 0, nl = null, Ce(t, l, n, 5);
                  break;
                case 6:
                  Et = 0, nl = null, Ce(t, l, n, 6);
                  break;
                case 8:
                  Gn(), Ht = 6;
                  break t;
                default:
                  throw Error(o(462));
              }
            }
            lv();
            break;
          } catch (q) {
            Jf(t, q);
          }
        while (!0);
        return jl = Ee = null, W.H = a, W.A = u, rt = e, at !== null ? 0 : (St = null, it = 0, Xa(), Ht);
      }
      function lv() {
        for (; at !== null && !Am(); )
          Ff(at);
      }
      function Ff(t) {
        var l = yf(
          t.alternate,
          t,
          Bl
        );
        t.memoizedProps = t.pendingProps, l === null ? iu(t) : at = l;
      }
      function Pf(t) {
        var l = t, e = l.alternate;
        switch (l.tag) {
          case 15:
          case 0:
            l = sf(
              e,
              l,
              l.pendingProps,
              l.type,
              void 0,
              it
            );
            break;
          case 11:
            l = sf(
              e,
              l,
              l.pendingProps,
              l.type.render,
              l.ref,
              it
            );
            break;
          case 5:
            ku(l);
          default:
            Tf(e, l), l = at = ls(l, Bl), l = yf(e, l, Bl);
        }
        t.memoizedProps = t.pendingProps, l === null ? iu(t) : at = l;
      }
      function Ce(t, l, e, a) {
        jl = Ee = null, ku(l), Le = null, Ha = 0;
        var u = l.return;
        try {
          if (Lo(
            t,
            u,
            l,
            e,
            it
          )) {
            Ht = 1, tu(
              t,
              B(e, t.current)
            ), at = null;
            return;
          }
        } catch (n) {
          if (u !== null) throw at = u, n;
          Ht = 1, tu(
            t,
            B(e, t.current)
          ), at = null;
          return;
        }
        l.flags & 32768 ? (ot || a === 1 ? t = !0 : Ie || (it & 536870912) !== 0 ? t = !1 : (ql = t = !0, (a === 2 || a === 3 || a === 6) && (a = vl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), wf(l, t)) : iu(l);
      }
      function iu(t) {
        var l = t;
        do {
          if ((l.flags & 32768) !== 0) {
            wf(
              l,
              ql
            );
            return;
          }
          t = l.return;
          var e = Fo(
            l.alternate,
            l,
            Bl
          );
          if (e !== null) {
            at = e;
            return;
          }
          if (l = l.sibling, l !== null) {
            at = l;
            return;
          }
          at = l = t;
        } while (l !== null);
        Ht === 0 && (Ht = 5);
      }
      function wf(t, l) {
        do {
          var e = Po(t.alternate, t);
          if (e !== null) {
            e.flags &= 32767, at = e;
            return;
          }
          if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
            at = t;
            return;
          }
          at = t = e;
        } while (t !== null);
        Ht = 6, at = null;
      }
      function If(t, l, e, a, u, n, f, v, p, N) {
        var A = W.T, R = me();
        try {
          Pt(2), W.T = null, ev(
            t,
            l,
            e,
            a,
            R,
            u,
            n,
            f,
            v,
            p,
            N
          );
        } finally {
          W.T = A, Pt(R);
        }
      }
      function ev(t, l, e, a, u, n, f, v) {
        do
          oe();
        while (Te !== null);
        if ((rt & 6) !== 0) throw Error(o(327));
        var p = t.finishedWork;
        if (a = t.finishedLanes, p === null) return null;
        if (t.finishedWork = null, t.finishedLanes = 0, p === t.current) throw Error(o(177));
        t.callbackNode = null, t.callbackPriority = 0, t.cancelPendingCommit = null;
        var N = p.lanes | p.childLanes;
        if (N |= oc, Kt(
          t,
          a,
          N,
          n,
          f,
          v
        ), t === St && (at = St = null, it = 0), (p.subtreeFlags & 10256) === 0 && (p.flags & 10256) === 0 || Du || (Du = !0, bc = N, Mc = e, cv(fc, function() {
          return oe(), null;
        })), e = (p.flags & 15990) !== 0, (p.subtreeFlags & 15990) !== 0 || e ? (e = W.T, W.T = null, n = me(), Pt(2), f = rt, rt |= 4, wo(t, p), Cf(p, t), Ev(t.containerInfo), t.current = p, Uf(t, p.alternate, p), Dm(), rt = f, Pt(n), W.T = e) : t.current = p, Du ? (Du = !1, Te = t, Ca = a) : $f(t, N), N = t.pendingLanes, N === 0 && (ee = null), S(p.stateNode), Sl(t), l !== null)
          for (u = t.onRecoverableError, p = 0; p < l.length; p++)
            N = l[p], u(N.value, {
              componentStack: N.stack
            });
        return (Ca & 3) !== 0 && oe(), N = t.pendingLanes, (a & 4194218) !== 0 && (N & 42) !== 0 ? t === gc ? ja++ : (ja = 0, gc = t) : ja = 0, He(0), null;
      }
      function $f(t, l) {
        (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, ya(l)));
      }
      function oe() {
        if (Te !== null) {
          var t = Te, l = bc;
          bc = 0;
          var e = bt(Ca), a = 32 > e ? 32 : e;
          e = W.T;
          var u = me();
          try {
            if (Pt(a), W.T = null, Te === null)
              var n = !1;
            else {
              a = Mc, Mc = null;
              var f = Te, v = Ca;
              if (Te = null, Ca = 0, (rt & 6) !== 0)
                throw Error(o(331));
              var p = rt;
              if (rt |= 4, Qf(f.current), Rf(
                f,
                f.current,
                v,
                a
              ), rt = p, He(0, !1), el && typeof el.onPostCommitFiberRoot == "function")
                try {
                  el.onPostCommitFiberRoot(_a, f);
                } catch {
                }
              n = !0;
            }
            return n;
          } finally {
            Pt(u), W.T = e, $f(t, l);
          }
        }
        return !1;
      }
      function kf(t, l, e) {
        l = B(e, l), l = mn(t.stateNode, l, 2), t = Vl(t, l, 2), t !== null && (w(t, 2), Sl(t));
      }
      function pt(t, l, e) {
        if (t.tag === 3)
          kf(t, t, e);
        else
          for (; l !== null; ) {
            if (l.tag === 3) {
              kf(
                l,
                t,
                e
              );
              break;
            } else if (l.tag === 1) {
              var a = l.stateNode;
              if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ee === null || !ee.has(a))) {
                t = B(e, t), e = lf(2), a = Vl(l, e, 2), a !== null && (ef(
                  e,
                  a,
                  l,
                  t
                ), w(a, 2), Sl(a));
                break;
              }
            }
            l = l.return;
          }
      }
      function Zn(t, l, e) {
        var a = t.pingCache;
        if (a === null) {
          a = t.pingCache = new Zm();
          var u = /* @__PURE__ */ new Set();
          a.set(l, u);
        } else
          u = a.get(l), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(l, u));
        u.has(e) || (zc = !0, u.add(e), t = av.bind(null, t, l, e), l.then(t, t));
      }
      function av(t, l, e) {
        var a = t.pingCache;
        a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, St === t && (it & e) === e && (Ht === 4 || Ht === 3 && (it & 62914560) === it && 300 > yl() - _c ? (rt & 2) === 0 && De(t, 0) : Nc |= e, $e === it && ($e = 0)), Sl(t);
      }
      function ts(t, l) {
        l === 0 && (l = tt()), t = Yl(t, l), t !== null && (w(t, l), Sl(t));
      }
      function uv(t) {
        var l = t.memoizedState, e = 0;
        l !== null && (e = l.retryLane), ts(t, e);
      }
      function nv(t, l) {
        var e = 0;
        switch (t.tag) {
          case 13:
            var a = t.stateNode, u = t.memoizedState;
            u !== null && (e = u.retryLane);
            break;
          case 19:
            a = t.stateNode;
            break;
          case 22:
            a = t.stateNode._retryCache;
            break;
          default:
            throw Error(o(314));
        }
        a !== null && a.delete(l), ts(t, e);
      }
      function cv(t, l) {
        return pu(t, l);
      }
      function iv(t, l, e, a) {
        this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Kn(t) {
        return t = t.prototype, !(!t || !t.isReactComponent);
      }
      function Wl(t, l) {
        var e = t.alternate;
        return e === null ? (e = s(
          t.tag,
          l,
          t.key,
          t.mode
        ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 31457280, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
      }
      function ls(t, l) {
        t.flags &= 31457282;
        var e = t.alternate;
        return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }), t;
      }
      function fu(t, l, e, a, u, n) {
        var f = 0;
        if (a = t, typeof t == "function") Kn(t) && (f = 1);
        else if (typeof t == "string")
          f = il && Xt ? Os(t, e, Yt.current) ? 26 : Bs(t) ? 27 : 5 : il ? Os(
            t,
            e,
            Yt.current
          ) ? 26 : 5 : Xt && Bs(t) ? 27 : 5;
        else
          t: switch (t) {
            case Re:
              return ve(
                e.children,
                u,
                n,
                l
              );
            case fs:
              f = 8, u |= 24;
              break;
            case Fn:
              return t = s(12, e, l, u | 2), t.elementType = Fn, t.lanes = n, t;
            case wn:
              return t = s(13, e, l, u), t.elementType = wn, t.lanes = n, t;
            case In:
              return t = s(19, e, l, u), t.elementType = In, t.lanes = n, t;
            case os:
              return es(e, u, n, l);
            default:
              if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                  case vv:
                  case Fl:
                    f = 10;
                    break t;
                  case ss:
                    f = 9;
                    break t;
                  case Pn:
                    f = 11;
                    break t;
                  case $n:
                    f = 14;
                    break t;
                  case Pl:
                    f = 16, a = null;
                    break t;
                }
              f = 29, e = Error(
                o(
                  130,
                  t === null ? "null" : typeof t,
                  ""
                )
              ), a = null;
          }
        return l = s(f, e, l, u), l.elementType = t, l.type = a, l.lanes = n, l;
      }
      function ve(t, l, e, a) {
        return t = s(7, t, a, l), t.lanes = e, t;
      }
      function es(t, l, e, a) {
        t = s(22, t, a, l), t.elementType = os, t.lanes = e;
        var u = {
          _visibility: 1,
          _pendingVisibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
          _current: null,
          detach: function() {
            var n = u._current;
            if (n === null) throw Error(o(456));
            if ((u._pendingVisibility & 2) === 0) {
              var f = Yl(n, 2);
              f !== null && (u._pendingVisibility |= 2, Jt(f, n, 2));
            }
          },
          attach: function() {
            var n = u._current;
            if (n === null) throw Error(o(456));
            if ((u._pendingVisibility & 2) !== 0) {
              var f = Yl(n, 2);
              f !== null && (u._pendingVisibility &= -3, Jt(f, n, 2));
            }
          }
        };
        return t.stateNode = u, t;
      }
      function Jn(t, l, e) {
        return t = s(6, t, null, l), t.lanes = e, t;
      }
      function xn(t, l, e) {
        return l = s(
          4,
          t.children !== null ? t.children : [],
          t.key,
          l
        ), l.lanes = e, l.stateNode = {
          containerInfo: t.containerInfo,
          pendingChildren: null,
          implementation: t.implementation
        }, l;
      }
      function fv(t, l, e, a, u, n, f, v) {
        this.tag = 1, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ec, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = F(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = F(0), this.hiddenUpdates = F(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function as(t, l, e, a, u, n, f, v, p, N, A, R) {
        return t = new fv(
          t,
          l,
          e,
          f,
          v,
          p,
          N,
          R
        ), l = 1, n === !0 && (l |= 24), n = s(3, null, null, l), t.current = n, n.stateNode = t, l = _n(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
          element: a,
          isDehydrated: e,
          cache: l
        }, Ju(n), t;
      }
      function us(t) {
        return t ? (t = Qe, t) : Qe;
      }
      function ns(t) {
        var l = t._reactInternals;
        if (l === void 0)
          throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
        return t = C(l), t = t !== null ? Q(t) : null, t === null ? null : za(t.stateNode);
      }
      function cs(t, l, e, a, u, n) {
        u = us(u), a.context === null ? a.context = u : a.pendingContext = u, a = Gl(l), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = Vl(t, a, l), e !== null && (Jt(e, t, l), ia(e, t, l));
      }
      function is(t, l) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
          var e = t.retryLane;
          t.retryLane = e !== 0 && e < l ? e : l;
        }
      }
      function Ln(t, l) {
        is(t, l), (t = t.alternate) && is(t, l);
      }
      var et = {}, sv = Vu, tl = id(), Wn = Object.assign, ov = Symbol.for("react.element"), su = Symbol.for("react.transitional.element"), je = Symbol.for("react.portal"), Re = Symbol.for("react.fragment"), fs = Symbol.for("react.strict_mode"), Fn = Symbol.for("react.profiler"), vv = Symbol.for("react.provider"), ss = Symbol.for("react.consumer"), Fl = Symbol.for("react.context"), Pn = Symbol.for("react.forward_ref"), wn = Symbol.for("react.suspense"), In = Symbol.for("react.suspense_list"), $n = Symbol.for("react.memo"), Pl = Symbol.for("react.lazy"), os = Symbol.for("react.offscreen"), mv = Symbol.for("react.memo_cache_sentinel"), vs = Symbol.iterator, dv = Symbol.for("react.client.reference"), W = sv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, kn, ms, tc = !1, ou = Array.isArray, pv = i.rendererVersion, yv = i.rendererPackageName, ds = i.extraDevToolsConfig, za = i.getPublicInstance, rv = i.getRootHostContext, hv = i.getChildHostContext, Sv = i.prepareForCommit, Ev = i.resetAfterCommit, zv = i.createInstance, lc = i.appendInitialChild, ps = i.finalizeInitialChildren, vu = i.shouldSetTextContent, ys = i.createTextInstance, Nv = i.scheduleTimeout, Tv = i.cancelTimeout, ec = i.noTimeout, Al = i.isPrimaryRenderer;
      i.warnsIfNotActing;
      var Vt = i.supportsMutation, wl = i.supportsPersistence, cl = i.supportsHydration, rs = i.getInstanceFromNode;
      i.beforeActiveInstanceBlur, i.afterActiveInstanceBlur;
      var _v = i.preparePortalMount;
      i.prepareScopeUpdate, i.getInstanceFromScope;
      var Pt = i.setCurrentUpdatePriority, me = i.getCurrentUpdatePriority, bv = i.resolveUpdatePriority;
      i.resolveEventType, i.resolveEventTimeStamp;
      var Mv = i.shouldAttemptEagerTransition, gv = i.detachDeletedInstance;
      i.requestPostPaintCallback;
      var Hv = i.maySuspendCommit, hs = i.preloadInstance, Ov = i.startSuspendingCommit, Ss = i.suspendInstance, Uv = i.waitForCommitToBeReady, qe = i.NotPendingTransition, de = i.HostTransitionContext, Av = i.resetFormInstance;
      i.bindToConsole;
      var Dv = i.supportsMicrotasks, Cv = i.scheduleMicrotask, Na = i.supportsTestSelectors, jv = i.findFiberRoot, Rv = i.getBoundingRect, qv = i.getTextContent, Ta = i.isHiddenSubtree, Bv = i.matchAccessibilityRole, Qv = i.setFocusIfFocusable, Yv = i.setupIntersectionObserver, Gv = i.appendChild, Vv = i.appendChildToContainer, Xv = i.commitTextUpdate, Zv = i.commitMount, Kv = i.commitUpdate, Jv = i.insertBefore, xv = i.insertInContainerBefore, Lv = i.removeChild, Wv = i.removeChildFromContainer, Es = i.resetTextContent, Fv = i.hideInstance, Pv = i.hideTextInstance, wv = i.unhideInstance, Iv = i.unhideTextInstance, $v = i.clearContainer, kv = i.cloneInstance, zs = i.createContainerChildSet, Ns = i.appendChildToContainerChildSet, tm = i.finalizeContainerChildren, Ts = i.replaceContainerChildren, _s = i.cloneHiddenInstance, bs = i.cloneHiddenTextInstance, ac = i.isSuspenseInstancePending, uc = i.isSuspenseInstanceFallback, lm = i.getSuspenseInstanceFallbackErrorDetails, em = i.registerSuspenseInstanceRetry, am = i.canHydrateFormStateMarker, um = i.isFormStateMarkerMatching, Ms = i.getNextHydratableSibling, gs = i.getFirstHydratableChild, nm = i.getFirstHydratableChildWithinContainer, cm = i.getFirstHydratableChildWithinSuspenseInstance, im = i.canHydrateInstance, fm = i.canHydrateTextInstance, sm = i.canHydrateSuspenseInstance, om = i.hydrateInstance, vm = i.hydrateTextInstance, mm = i.hydrateSuspenseInstance, dm = i.getNextHydratableInstanceAfterSuspenseInstance, pm = i.commitHydratedContainer, ym = i.commitHydratedSuspenseInstance, rm = i.clearSuspenseBoundary, hm = i.clearSuspenseBoundaryFromContainer, Hs = i.shouldDeleteUnhydratedTailInstances;
      i.diffHydratedPropsForDevWarnings, i.diffHydratedTextForDevWarnings, i.describeHydratableInstanceForDevWarnings;
      var Sm = i.validateHydratableInstance, Em = i.validateHydratableTextInstance, il = i.supportsResources, Os = i.isHostHoistableType, nc = i.getHoistableRoot, Us = i.getResource, As = i.acquireResource, Ds = i.releaseResource, zm = i.hydrateHoistable, Cs = i.mountHoistable, js = i.unmountHoistable, Nm = i.createHoistableInstance, Tm = i.prepareToCommitHoistables, _m = i.mayResourceSuspendCommit, Rs = i.preloadResource, bm = i.suspendResource, Xt = i.supportsSingletons, qs = i.resolveSingletonInstance, Mm = i.clearSingleton, gm = i.acquireSingletonInstance, Hm = i.releaseSingletonInstance, Bs = i.isHostSingletonType, cc = [], Be = -1, Qe = {}, ll = Math.clz32 ? Math.clz32 : X, Om = Math.log, Um = Math.LN2, mu = 128, du = 4194304, pu = tl.unstable_scheduleCallback, ic = tl.unstable_cancelCallback, Am = tl.unstable_shouldYield, Dm = tl.unstable_requestPaint, yl = tl.unstable_now, Qs = tl.unstable_ImmediatePriority, Cm = tl.unstable_UserBlockingPriority, fc = tl.unstable_NormalPriority, jm = tl.unstable_IdlePriority, Rm = tl.log, qm = tl.unstable_setDisableYieldValue, _a = null, el = null, al = typeof Object.is == "function" ? Object.is : D, Ys = /* @__PURE__ */ new WeakMap(), Ye = [], Ge = 0, yu = null, ru = 0, fl = [], sl = 0, pe = null, Dl = 1, Cl = "", Yt = J(null), ba = J(null), Il = J(null), hu = J(null), xt = null, Zt = null, ot = !1, rl = null, El = !1, sc = Error(o(519)), ol = [], Ve = 0, oc = 0, Su = null, Xe = null, vc = !1, Eu = !1, mc = !1, Ze = 0, Ma = null, dc = 0, Ke = 0, Je = null, $l = !1, pc = !1, Bm = Object.prototype.hasOwnProperty, ga = Error(o(460)), yc = Error(o(474)), zu = { then: function() {
      } }, xe = null, Le = null, Ha = 0, ye = yi(!0), Gs = yi(!1), We = J(null), Nu = J(0), vl = J(null), zl = null, jt = J(0), kl = 0, k = null, yt = null, Dt = null, Tu = !1, Fe = !1, re = !1, _u = 0, Oa = 0, Pe = null, Qm = 0, rc = function() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }, Nl = {
        readContext: Gt,
        use: Pa,
        useCallback: Ot,
        useContext: Ot,
        useEffect: Ot,
        useImperativeHandle: Ot,
        useLayoutEffect: Ot,
        useInsertionEffect: Ot,
        useMemo: Ot,
        useReducer: Ot,
        useRef: Ot,
        useState: Ot,
        useDebugValue: Ot,
        useDeferredValue: Ot,
        useTransition: Ot,
        useSyncExternalStore: Ot,
        useId: Ot
      };
      Nl.useCacheRefresh = Ot, Nl.useMemoCache = Ot, Nl.useHostTransitionStatus = Ot, Nl.useFormState = Ot, Nl.useActionState = Ot, Nl.useOptimistic = Ot;
      var he = {
        readContext: Gt,
        use: Pa,
        useCallback: function(t, l) {
          return Wt().memoizedState = [
            t,
            l === void 0 ? null : l
          ], t;
        },
        useContext: Gt,
        useEffect: Qi,
        useImperativeHandle: function(t, l, e) {
          e = e != null ? e.concat([t]) : null, Ia(
            4194308,
            4,
            Vi.bind(null, l, t),
            e
          );
        },
        useLayoutEffect: function(t, l) {
          return Ia(4194308, 4, t, l);
        },
        useInsertionEffect: function(t, l) {
          Ia(4, 2, t, l);
        },
        useMemo: function(t, l) {
          var e = Wt();
          l = l === void 0 ? null : l;
          var a = t();
          if (re) {
            O(!0);
            try {
              t();
            } finally {
              O(!1);
            }
          }
          return e.memoizedState = [a, l], a;
        },
        useReducer: function(t, l, e) {
          var a = Wt();
          if (e !== void 0) {
            var u = e(l);
            if (re) {
              O(!0);
              try {
                e(l);
              } finally {
                O(!1);
              }
            }
          } else u = l;
          return a.memoizedState = a.baseState = u, t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u
          }, a.queue = t, t = t.dispatch = xo.bind(
            null,
            k,
            t
          ), [a.memoizedState, t];
        },
        useRef: function(t) {
          var l = Wt();
          return t = { current: t }, l.memoizedState = t;
        },
        useState: function(t) {
          t = an(t);
          var l = t.queue, e = Pi.bind(
            null,
            k,
            l
          );
          return l.dispatch = e, [t.memoizedState, e];
        },
        useDebugValue: cn,
        useDeferredValue: function(t, l) {
          var e = Wt();
          return fn(e, t, l);
        },
        useTransition: function() {
          var t = an(!1);
          return t = xi.bind(
            null,
            k,
            t.queue,
            !0,
            !1
          ), Wt().memoizedState = t, [!1, t];
        },
        useSyncExternalStore: function(t, l, e) {
          var a = k, u = Wt();
          if (ot) {
            if (e === void 0)
              throw Error(o(407));
            e = e();
          } else {
            if (e = l(), St === null)
              throw Error(o(349));
            (it & 60) !== 0 || Ni(a, l, e);
          }
          u.memoizedState = e;
          var n = { value: e, getSnapshot: l };
          return u.queue = n, Qi(_i.bind(null, a, n, t), [
            t
          ]), a.flags |= 2048, Oe(
            9,
            Ti.bind(
              null,
              a,
              n,
              e,
              l
            ),
            { destroy: void 0 },
            null
          ), e;
        },
        useId: function() {
          var t = Wt(), l = St.identifierPrefix;
          if (ot) {
            var e = Cl, a = Dl;
            e = (a & ~(1 << 32 - ll(a) - 1)).toString(32) + e, l = ":" + l + "R" + e, e = _u++, 0 < e && (l += "H" + e.toString(32)), l += ":";
          } else
            e = Qm++, l = ":" + l + "r" + e.toString(32) + ":";
          return t.memoizedState = l;
        },
        useCacheRefresh: function() {
          return Wt().memoizedState = Jo.bind(
            null,
            k
          );
        }
      };
      he.useMemoCache = tn, he.useHostTransitionStatus = sn, he.useFormState = Ci, he.useActionState = Ci, he.useOptimistic = function(t) {
        var l = Wt();
        l.memoizedState = l.baseState = t;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return l.queue = e, l = on.bind(
          null,
          k,
          !0,
          e
        ), e.dispatch = l, [t, l];
      };
      var te = {
        readContext: Gt,
        use: Pa,
        useCallback: Zi,
        useContext: Gt,
        useEffect: nn,
        useImperativeHandle: Xi,
        useInsertionEffect: Yi,
        useLayoutEffect: Gi,
        useMemo: Ki,
        useReducer: wa,
        useRef: Bi,
        useState: function() {
          return wa(Ml);
        },
        useDebugValue: cn,
        useDeferredValue: function(t, l) {
          var e = At();
          return Ji(
            e,
            yt.memoizedState,
            t,
            l
          );
        },
        useTransition: function() {
          var t = wa(Ml)[0], l = At().memoizedState;
          return [
            typeof t == "boolean" ? t : va(t),
            l
          ];
        },
        useSyncExternalStore: zi,
        useId: Wi
      };
      te.useCacheRefresh = Fi, te.useMemoCache = tn, te.useHostTransitionStatus = sn, te.useFormState = ji, te.useActionState = ji, te.useOptimistic = function(t, l) {
        var e = At();
        return gi(e, yt, t, l);
      };
      var Se = {
        readContext: Gt,
        use: Pa,
        useCallback: Zi,
        useContext: Gt,
        useEffect: nn,
        useImperativeHandle: Xi,
        useInsertionEffect: Yi,
        useLayoutEffect: Gi,
        useMemo: Ki,
        useReducer: en,
        useRef: Bi,
        useState: function() {
          return en(Ml);
        },
        useDebugValue: cn,
        useDeferredValue: function(t, l) {
          var e = At();
          return yt === null ? fn(e, t, l) : Ji(
            e,
            yt.memoizedState,
            t,
            l
          );
        },
        useTransition: function() {
          var t = en(Ml)[0], l = At().memoizedState;
          return [
            typeof t == "boolean" ? t : va(t),
            l
          ];
        },
        useSyncExternalStore: zi,
        useId: Wi
      };
      Se.useCacheRefresh = Fi, Se.useMemoCache = tn, Se.useHostTransitionStatus = sn, Se.useFormState = qi, Se.useActionState = qi, Se.useOptimistic = function(t, l) {
        var e = At();
        return yt !== null ? gi(e, yt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
      };
      var hc = {
        isMounted: function(t) {
          return (t = t._reactInternals) ? z(t) === t : !1;
        },
        enqueueSetState: function(t, l, e) {
          t = t._reactInternals;
          var a = kt(), u = Gl(a);
          u.payload = l, e != null && (u.callback = e), l = Vl(t, u, a), l !== null && (Jt(l, t, a), ia(l, t, a));
        },
        enqueueReplaceState: function(t, l, e) {
          t = t._reactInternals;
          var a = kt(), u = Gl(a);
          u.tag = 1, u.payload = l, e != null && (u.callback = e), l = Vl(t, u, a), l !== null && (Jt(l, t, a), ia(l, t, a));
        },
        enqueueForceUpdate: function(t, l) {
          t = t._reactInternals;
          var e = kt(), a = Gl(e);
          a.tag = 2, l != null && (a.callback = l), l = Vl(t, a, e), l !== null && (Jt(l, t, e), ia(l, t, e));
        }
      }, Vs = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var l = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
            error: t
          });
          if (!window.dispatchEvent(l)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", t);
          return;
        }
        console.error(t);
      }, Xs = Error(o(461)), Rt = !1, Sc = { dehydrated: null, treeContext: null, retryLane: 0 }, bu = J(null), Ee = null, jl = null, Ym = typeof AbortController < "u" ? AbortController : function() {
        var t = [], l = this.signal = {
          aborted: !1,
          addEventListener: function(e, a) {
            t.push(a);
          }
        };
        this.abort = function() {
          l.aborted = !0, t.forEach(function(e) {
            return e();
          });
        };
      }, Gm = tl.unstable_scheduleCallback, Vm = tl.unstable_NormalPriority, Mt = {
        $$typeof: Fl,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      }, Zs = W.S;
      W.S = function(t, l) {
        typeof l == "object" && l !== null && typeof l.then == "function" && Go(t, l), Zs !== null && Zs(t, l);
      };
      var ze = J(null), Rl = !1, gt = !1, Ec = !1, Ks = typeof WeakSet == "function" ? WeakSet : Set, qt = null, Js = !1, Ct = null, ul = !1, hl = null, we = 8192, Xm = {
        getCacheForType: function(t) {
          var l = Gt(Mt), e = l.data.get(t);
          return e === void 0 && (e = t(), l.data.set(t, e)), e;
        }
      }, Mu = 0, gu = 1, Hu = 2, Ou = 3, Uu = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var Ua = Symbol.for;
        Mu = Ua("selector.component"), gu = Ua("selector.has_pseudo_class"), Hu = Ua("selector.role"), Ou = Ua("selector.test_id"), Uu = Ua("selector.text");
      }
      var Zm = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, St = null, at = null, it = 0, Et = 0, nl = null, ql = !1, Ie = !1, zc = !1, Bl = 0, Ht = 0, le = 0, Ne = 0, Nc = 0, ml = 0, $e = 0, Aa = null, Tl = null, Tc = !1, _c = 0, Da = 1 / 0, Au = null, ee = null, Du = !1, Te = null, Ca = 0, bc = 0, Mc = null, ja = 0, gc = null;
      return et.attemptContinuousHydration = function(t) {
        if (t.tag === 13) {
          var l = Yl(t, 67108864);
          l !== null && Jt(l, t, 67108864), Ln(t, 67108864);
        }
      }, et.attemptHydrationAtCurrentPriority = function(t) {
        if (t.tag === 13) {
          var l = kt(), e = Yl(t, l);
          e !== null && Jt(e, t, l), Ln(t, l);
        }
      }, et.attemptSynchronousHydration = function(t) {
        switch (t.tag) {
          case 3:
            if (t = t.stateNode, t.current.memoizedState.isDehydrated) {
              var l = Z(t.pendingLanes);
              if (l !== 0) {
                for (t.pendingLanes |= 2, t.entangledLanes |= 2; l; ) {
                  var e = 1 << 31 - ll(l);
                  t.entanglements[1] |= e, l &= ~e;
                }
                Sl(t), (rt & 6) === 0 && (Da = yl() + 500, He(0));
              }
            }
            break;
          case 13:
            l = Yl(t, 2), l !== null && Jt(l, t, 2), Kf(), Ln(t, 2);
        }
      }, et.batchedUpdates = function(t, l) {
        return t(l);
      }, et.createComponentSelector = function(t) {
        return { $$typeof: Mu, value: t };
      }, et.createContainer = function(t, l, e, a, u, n, f, v, p, N) {
        return as(
          t,
          l,
          !1,
          null,
          e,
          a,
          n,
          f,
          v,
          p,
          N,
          null
        );
      }, et.createHasPseudoClassSelector = function(t) {
        return { $$typeof: gu, value: t };
      }, et.createHydrationContainer = function(t, l, e, a, u, n, f, v, p, N, A, R, q) {
        return t = as(
          e,
          a,
          !0,
          t,
          u,
          n,
          v,
          p,
          N,
          A,
          R,
          q
        ), t.context = us(null), e = t.current, a = kt(), u = Gl(a), u.callback = l ?? null, Vl(e, u, a), t.current.lanes = a, w(t, a), Sl(t), t;
      }, et.createPortal = function(t, l, e) {
        var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: je,
          key: a == null ? null : "" + a,
          children: t,
          containerInfo: l,
          implementation: e
        };
      }, et.createRoleSelector = function(t) {
        return { $$typeof: Hu, value: t };
      }, et.createTestNameSelector = function(t) {
        return { $$typeof: Ou, value: t };
      }, et.createTextSelector = function(t) {
        return { $$typeof: Uu, value: t };
      }, et.defaultOnCaughtError = function(t) {
        console.error(t);
      }, et.defaultOnRecoverableError = function(t) {
        Vs(t);
      }, et.defaultOnUncaughtError = function(t) {
        Vs(t);
      }, et.deferredUpdates = function(t) {
        var l = W.T, e = me();
        try {
          return Pt(32), W.T = null, t();
        } finally {
          Pt(e), W.T = l;
        }
      }, et.discreteUpdates = function(t, l, e, a, u) {
        var n = W.T, f = me();
        try {
          return Pt(2), W.T = null, t(l, e, a, u);
        } finally {
          Pt(f), W.T = n, rt === 0 && (Da = yl() + 500);
        }
      }, et.findAllNodes = Qn, et.findBoundingRects = function(t, l) {
        if (!Na) throw Error(o(363));
        l = Qn(t, l), t = [];
        for (var e = 0; e < l.length; e++)
          t.push(Rv(l[e]));
        for (l = t.length - 1; 0 < l; l--) {
          e = t[l];
          for (var a = e.x, u = a + e.width, n = e.y, f = n + e.height, v = l - 1; 0 <= v; v--)
            if (l !== v) {
              var p = t[v], N = p.x, A = N + p.width, R = p.y, q = R + p.height;
              if (a >= N && n >= R && u <= A && f <= q) {
                t.splice(l, 1);
                break;
              } else if (a !== N || e.width !== p.width || q < n || R > f) {
                if (!(n !== R || e.height !== p.height || A < a || N > u)) {
                  N > a && (p.width += N - a, p.x = a), A < u && (p.width = u - N), t.splice(l, 1);
                  break;
                }
              } else {
                R > n && (p.height += R - n, p.y = n), q < f && (p.height = f - R), t.splice(l, 1);
                break;
              }
            }
        }
        return t;
      }, et.findHostInstance = ns, et.findHostInstanceWithNoPortals = function(t) {
        return t = C(t), t = t !== null ? V(t) : null, t === null ? null : za(t.stateNode);
      }, et.findHostInstanceWithWarning = function(t) {
        return ns(t);
      }, et.flushPassiveEffects = oe, et.flushSyncFromReconciler = function(t) {
        var l = rt;
        rt |= 1;
        var e = W.T, a = me();
        try {
          if (Pt(2), W.T = null, t)
            return t();
        } finally {
          Pt(a), W.T = e, rt = l, (rt & 6) === 0 && He(0);
        }
      }, et.flushSyncWork = Kf, et.focusWithin = function(t, l) {
        if (!Na) throw Error(o(363));
        for (t = Rn(t), l = Gf(t, l), l = Array.from(l), t = 0; t < l.length; ) {
          var e = l[t++], a = e.tag;
          if (!Ta(e)) {
            if ((a === 5 || a === 26 || a === 27) && Qv(e.stateNode))
              return !0;
            for (e = e.child; e !== null; )
              l.push(e), e = e.sibling;
          }
        }
        return !1;
      }, et.getFindAllNodesFailureDescription = function(t, l) {
        if (!Na) throw Error(o(363));
        var e = 0, a = [];
        t = [Rn(t), 0];
        for (var u = 0; u < t.length; ) {
          var n = t[u++], f = n.tag, v = t[u++], p = l[v];
          if ((f !== 5 && f !== 26 && f !== 27 || !Ta(n)) && (qn(n, p) && (a.push(Bn(p)), v++, v > e && (e = v)), v < l.length))
            for (n = n.child; n !== null; )
              t.push(n, v), n = n.sibling;
        }
        if (e < l.length) {
          for (t = []; e < l.length; e++)
            t.push(Bn(l[e]));
          return `findAllNodes was able to match part of the selector:
  ` + (a.join(" > ") + `

No matching component was found for:
  `) + t.join(" > ");
        }
        return null;
      }, et.getPublicRootInstance = function(t) {
        if (t = t.current, !t.child) return null;
        switch (t.child.tag) {
          case 27:
          case 5:
            return za(t.child.stateNode);
          default:
            return t.child.stateNode;
        }
      }, et.injectIntoDevTools = function() {
        var t = {
          bundleType: 0,
          version: pv,
          rendererPackageName: yv,
          currentDispatcherRef: W,
          findFiberByHostInstance: rs,
          reconcilerVersion: "19.0.0"
        };
        if (ds !== null && (t.rendererConfig = ds), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") t = !1;
        else {
          var l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (l.isDisabled || !l.supportsFiber) t = !0;
          else {
            try {
              _a = l.inject(t), el = l;
            } catch {
            }
            t = !!l.checkDCE;
          }
        }
        return t;
      }, et.isAlreadyRendering = function() {
        return !1;
      }, et.observeVisibleRects = function(t, l, e, a) {
        if (!Na) throw Error(o(363));
        t = Qn(t, l);
        var u = Yv(
          t,
          e,
          a
        ).disconnect;
        return {
          disconnect: function() {
            u();
          }
        };
      }, et.shouldError = function() {
        return null;
      }, et.shouldSuspend = function() {
        return !1;
      }, et.startHostTransition = function(t, l, e, a) {
        if (t.tag !== 5) throw Error(o(476));
        var u = Li(t).queue;
        xi(
          t,
          u,
          l,
          qe,
          e === null ? m : function() {
            var n = Li(t).next.queue;
            return ma(
              t,
              n,
              {},
              kt()
            ), e(a);
          }
        );
      }, et.updateContainer = function(t, l, e, a) {
        var u = l.current, n = kt();
        return cs(
          u,
          n,
          t,
          l,
          e,
          a
        ), n;
      }, et.updateContainerSync = function(t, l, e, a) {
        return l.tag === 0 && oe(), cs(
          l.current,
          2,
          t,
          l,
          e,
          a
        ), 2;
      }, et;
    }, c.exports.default = c.exports, Object.defineProperty(c.exports, "__esModule", { value: !0 });
  }(jc)), jc.exports;
}
var eo;
function sd() {
  return eo || (eo = 1, Cc.exports = fd()), Cc.exports;
}
var od = sd();
const vd = /* @__PURE__ */ ro(od);
var Bc = { exports: {} }, Qc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ao;
function md() {
  return ao || (ao = 1, function(c) {
    function i(S, O) {
      var D = S.length;
      S.push(O);
      t: for (; 0 < D; ) {
        var B = D - 1 >>> 1, K = S[B];
        if (0 < o(K, O))
          S[B] = O, S[D] = K, D = B;
        else break t;
      }
    }
    function s(S) {
      return S.length === 0 ? null : S[0];
    }
    function m(S) {
      if (S.length === 0) return null;
      var O = S[0], D = S.pop();
      if (D !== O) {
        S[0] = D;
        t: for (var B = 0, K = S.length, $ = K >>> 1; B < $; ) {
          var ct = 2 * (B + 1) - 1, Tt = S[ct], lt = ct + 1, Ut = S[lt];
          if (0 > o(Tt, D))
            lt < K && 0 > o(Ut, Tt) ? (S[B] = Ut, S[lt] = D, B = lt) : (S[B] = Tt, S[ct] = D, B = ct);
          else if (lt < K && 0 > o(Ut, D))
            S[B] = Ut, S[lt] = D, B = lt;
          else break t;
        }
      }
      return O;
    }
    function o(S, O) {
      var D = S.sortIndex - O.sortIndex;
      return D !== 0 ? D : S.id - O.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      c.unstable_now = function() {
        return E.now();
      };
    } else {
      var j = Date, T = j.now();
      c.unstable_now = function() {
        return j.now() - T;
      };
    }
    var r = [], H = [], M = 1, z = null, b = 3, C = !1, Q = !1, V = !1, J = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, _ = typeof setImmediate < "u" ? setImmediate : null;
    function X(S) {
      for (var O = s(H); O !== null; ) {
        if (O.callback === null) m(H);
        else if (O.startTime <= S)
          m(H), O.sortIndex = O.expirationTime, i(r, O);
        else break;
        O = s(H);
      }
    }
    function Z(S) {
      if (V = !1, X(S), !Q)
        if (s(r) !== null)
          Q = !0, dt();
        else {
          var O = s(H);
          O !== null && bt(Z, O.startTime - S);
        }
    }
    var x = !1, Y = -1, nt = 5, st = -1;
    function tt() {
      return !(c.unstable_now() - st < nt);
    }
    function F() {
      if (x) {
        var S = c.unstable_now();
        st = S;
        var O = !0;
        try {
          t: {
            Q = !1, V && (V = !1, g(Y), Y = -1), C = !0;
            var D = b;
            try {
              l: {
                for (X(S), z = s(r); z !== null && !(z.expirationTime > S && tt()); ) {
                  var B = z.callback;
                  if (typeof B == "function") {
                    z.callback = null, b = z.priorityLevel;
                    var K = B(
                      z.expirationTime <= S
                    );
                    if (S = c.unstable_now(), typeof K == "function") {
                      z.callback = K, X(S), O = !0;
                      break l;
                    }
                    z === s(r) && m(r), X(S);
                  } else m(r);
                  z = s(r);
                }
                if (z !== null) O = !0;
                else {
                  var $ = s(H);
                  $ !== null && bt(
                    Z,
                    $.startTime - S
                  ), O = !1;
                }
              }
              break t;
            } finally {
              z = null, b = D, C = !1;
            }
            O = void 0;
          }
        } finally {
          O ? w() : x = !1;
        }
      }
    }
    var w;
    if (typeof _ == "function")
      w = function() {
        _(F);
      };
    else if (typeof MessageChannel < "u") {
      var Kt = new MessageChannel(), I = Kt.port2;
      Kt.port1.onmessage = F, w = function() {
        I.postMessage(null);
      };
    } else
      w = function() {
        J(F, 0);
      };
    function dt() {
      x || (x = !0, w());
    }
    function bt(S, O) {
      Y = J(function() {
        S(c.unstable_now());
      }, O);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, c.unstable_continueExecution = function() {
      Q || C || (Q = !0, dt());
    }, c.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : nt = 0 < S ? Math.floor(1e3 / S) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, c.unstable_getFirstCallbackNode = function() {
      return s(r);
    }, c.unstable_next = function(S) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = b;
      }
      var D = b;
      b = O;
      try {
        return S();
      } finally {
        b = D;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(S, O) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var D = b;
      b = S;
      try {
        return O();
      } finally {
        b = D;
      }
    }, c.unstable_scheduleCallback = function(S, O, D) {
      var B = c.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? B + D : B) : D = B, S) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return K = D + K, S = {
        id: M++,
        callback: O,
        priorityLevel: S,
        startTime: D,
        expirationTime: K,
        sortIndex: -1
      }, D > B ? (S.sortIndex = D, i(H, S), s(r) === null && S === s(H) && (V ? (g(Y), Y = -1) : V = !0, bt(Z, D - B))) : (S.sortIndex = K, i(r, S), Q || C || (Q = !0, dt())), S;
    }, c.unstable_shouldYield = tt, c.unstable_wrapCallback = function(S) {
      var O = b;
      return function() {
        var D = b;
        b = O;
        try {
          return S.apply(this, arguments);
        } finally {
          b = D;
        }
      };
    };
  }(Qc)), Qc;
}
var uo;
function dd() {
  return uo || (uo = 1, Bc.exports = md()), Bc.exports;
}
var no = dd();
const pd = (c) => typeof c == "object" && typeof c.then == "function", be = [];
function ho(c, i, s = (m, o) => m === o) {
  if (c === i) return !0;
  if (!c || !i) return !1;
  const m = c.length;
  if (i.length !== m) return !1;
  for (let o = 0; o < m; o++) if (!s(c[o], i[o])) return !1;
  return !0;
}
function So(c, i = null, s = !1, m = {}) {
  i === null && (i = [c]);
  for (const E of be)
    if (ho(i, E.keys, E.equal)) {
      if (s) return;
      if (Object.prototype.hasOwnProperty.call(E, "error")) throw E.error;
      if (Object.prototype.hasOwnProperty.call(E, "response"))
        return m.lifespan && m.lifespan > 0 && (E.timeout && clearTimeout(E.timeout), E.timeout = setTimeout(E.remove, m.lifespan)), E.response;
      if (!s) throw E.promise;
    }
  const o = {
    keys: i,
    equal: m.equal,
    remove: () => {
      const E = be.indexOf(o);
      E !== -1 && be.splice(E, 1);
    },
    promise: (
      // Execute the promise
      (pd(c) ? c : c(...i)).then((E) => {
        o.response = E, m.lifespan && m.lifespan > 0 && (o.timeout = setTimeout(o.remove, m.lifespan));
      }).catch((E) => o.error = E)
    )
  };
  if (be.push(o), !s) throw o.promise;
}
const yd = (c, i, s) => So(c, i, !1, s), rd = (c, i, s) => void So(c, i, !0, s), hd = (c) => {
  if (c === void 0 || c.length === 0) be.splice(0, be.length);
  else {
    const i = be.find((s) => ho(c, s.keys, s.equal));
    i && i.remove();
  }
};
function $c(c, i, s) {
  if (!c) return;
  if (s(c) === !0) return c;
  let m = i ? c.return : c.child;
  for (; m; ) {
    const o = $c(m, i, s);
    if (o) return o;
    m = i ? null : m.sibling;
  }
}
function Eo(c) {
  try {
    return Object.defineProperties(c, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {
        }
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {
        }
      }
    });
  } catch {
    return c;
  }
}
const kc = /* @__PURE__ */ Eo(/* @__PURE__ */ ft.createContext(null));
class zo extends ft.Component {
  render() {
    return /* @__PURE__ */ ft.createElement(kc.Provider, { value: this._reactInternals }, this.props.children);
  }
}
function No() {
  const c = ft.useContext(kc);
  if (c === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const i = ft.useId();
  return ft.useMemo(() => {
    for (const s of [c, c?.alternate]) {
      if (!s) continue;
      const m = $c(s, !1, (o) => {
        let E = o.memoizedState;
        for (; E; ) {
          if (E.memoizedState === i) return !0;
          E = E.next;
        }
      });
      if (m) return m;
    }
  }, [c, i]);
}
const Sd = Symbol.for("react.context"), Ed = (c) => c !== null && typeof c == "object" && "$$typeof" in c && c.$$typeof === Sd;
function zd() {
  const c = No(), [i] = ft.useState(() => /* @__PURE__ */ new Map());
  i.clear();
  let s = c;
  for (; s; ) {
    const m = s.type;
    Ed(m) && m !== kc && !i.has(m) && i.set(m, ft.use(Eo(m))), s = s.return;
  }
  return i;
}
function Nd() {
  const c = zd();
  return ft.useMemo(
    () => Array.from(c.keys()).reduce(
      (i, s) => (m) => /* @__PURE__ */ ft.createElement(i, null, /* @__PURE__ */ ft.createElement(s.Provider, { ...m, value: c.get(s) })),
      (i) => /* @__PURE__ */ ft.createElement(zo, { ...i })
    ),
    [c]
  );
}
function To(c) {
  let i = c.root;
  for (; i.getState().previousRoot; ) i = i.getState().previousRoot;
  return i;
}
const _o = (c) => c && c.isOrthographicCamera, Td = (c) => c && c.hasOwnProperty("current"), _d = (c) => c != null && (typeof c == "string" || typeof c == "number" || c.isColor), Ga = /* @__PURE__ */ ((c, i) => typeof window < "u" && (((c = window.document) == null ? void 0 : c.createElement) || ((i = window.navigator) == null ? void 0 : i.product) === "ReactNative"))() ? ft.useLayoutEffect : ft.useEffect;
function bo(c) {
  const i = ft.useRef(c);
  return Ga(() => void (i.current = c), [c]), i;
}
function bd() {
  const c = No(), i = Nd();
  return ft.useMemo(() => ({
    children: s
  }) => {
    const o = !!$c(c, !0, (E) => E.type === ft.StrictMode) ? ft.StrictMode : ft.Fragment;
    return /* @__PURE__ */ ht(o, {
      children: /* @__PURE__ */ ht(i, {
        children: s
      })
    });
  }, [c, i]);
}
function Md({
  set: c
}) {
  return Ga(() => (c(new Promise(() => null)), () => c(!1)), [c]), null;
}
const gd = /* @__PURE__ */ ((c) => (c = class extends ft.Component {
  constructor(...s) {
    super(...s), this.state = {
      error: !1
    };
  }
  componentDidCatch(s) {
    this.props.set(s);
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
}, c.getDerivedStateFromError = () => ({
  error: !0
}), c))();
function Mo(c) {
  var i;
  const s = typeof window < "u" ? (i = window.devicePixelRatio) != null ? i : 2 : 1;
  return Array.isArray(c) ? Math.min(Math.max(c[0], s), c[1]) : c;
}
function ke(c) {
  var i;
  return (i = c.__r3f) == null ? void 0 : i.root.getState();
}
const Nt = {
  obj: (c) => c === Object(c) && !Nt.arr(c) && typeof c != "function",
  fun: (c) => typeof c == "function",
  str: (c) => typeof c == "string",
  num: (c) => typeof c == "number",
  boo: (c) => typeof c == "boolean",
  und: (c) => c === void 0,
  nul: (c) => c === null,
  arr: (c) => Array.isArray(c),
  equ(c, i, {
    arrays: s = "shallow",
    objects: m = "reference",
    strict: o = !0
  } = {}) {
    if (typeof c != typeof i || !!c != !!i) return !1;
    if (Nt.str(c) || Nt.num(c) || Nt.boo(c)) return c === i;
    const E = Nt.obj(c);
    if (E && m === "reference") return c === i;
    const j = Nt.arr(c);
    if (j && s === "reference") return c === i;
    if ((j || E) && c === i) return !0;
    let T;
    for (T in c) if (!(T in i)) return !1;
    if (E && s === "shallow" && m === "shallow") {
      for (T in o ? i : c) if (!Nt.equ(c[T], i[T], {
        strict: o,
        objects: "reference"
      })) return !1;
    } else
      for (T in o ? i : c) if (c[T] !== i[T]) return !1;
    if (Nt.und(T)) {
      if (j && c.length === 0 && i.length === 0 || E && Object.keys(c).length === 0 && Object.keys(i).length === 0) return !0;
      if (c !== i) return !1;
    }
    return !0;
  }
};
function Hd(c) {
  const i = {
    nodes: {},
    materials: {},
    meshes: {}
  };
  return c && c.traverse((s) => {
    s.name && (i.nodes[s.name] = s), s.material && !i.materials[s.material.name] && (i.materials[s.material.name] = s.material), s.isMesh && !i.meshes[s.name] && (i.meshes[s.name] = s);
  }), i;
}
function Od(c) {
  c.type !== "Scene" && (c.dispose == null || c.dispose());
  for (const i in c) {
    const s = c[i];
    s?.type !== "Scene" && (s == null || s.dispose == null || s.dispose());
  }
}
const go = ["children", "key", "ref"];
function Ud(c) {
  const i = {};
  for (const s in c)
    go.includes(s) || (i[s] = c[s]);
  return i;
}
function Bu(c, i, s, m) {
  const o = c;
  let E = o?.__r3f;
  return E || (E = {
    root: i,
    type: s,
    parent: null,
    children: [],
    props: Ud(m),
    object: o,
    eventCount: 0,
    handlers: {},
    isHidden: !1
  }, o && (o.__r3f = E)), E;
}
function Ya(c, i) {
  let s = c[i];
  if (!i.includes("-")) return {
    root: c,
    key: i,
    target: s
  };
  s = c;
  for (const o of i.split("-")) {
    var m;
    i = o, c = s, s = (m = s) == null ? void 0 : m[i];
  }
  return {
    root: c,
    key: i,
    target: s
  };
}
const co = /-\d+$/;
function Qu(c, i) {
  if (Nt.str(i.props.attach)) {
    if (co.test(i.props.attach)) {
      const o = i.props.attach.replace(co, ""), {
        root: E,
        key: j
      } = Ya(c.object, o);
      Array.isArray(E[j]) || (E[j] = []);
    }
    const {
      root: s,
      key: m
    } = Ya(c.object, i.props.attach);
    i.previousAttach = s[m], s[m] = i.object;
  } else Nt.fun(i.props.attach) && (i.previousAttach = i.props.attach(c.object, i.object));
}
function Yu(c, i) {
  if (Nt.str(i.props.attach)) {
    const {
      root: s,
      key: m
    } = Ya(c.object, i.props.attach), o = i.previousAttach;
    o === void 0 ? delete s[m] : s[m] = o;
  } else
    i.previousAttach == null || i.previousAttach(c.object, i.object);
  delete i.previousAttach;
}
const Lc = [
  ...go,
  // Instance props
  "args",
  "dispose",
  "attach",
  "object",
  "onUpdate",
  // Behavior flags
  "dispose"
], io = /* @__PURE__ */ new Map();
function Ad(c) {
  let i = io.get(c.constructor);
  try {
    i || (i = new c.constructor(), io.set(c.constructor, i));
  } catch {
  }
  return i;
}
function Dd(c, i) {
  const s = {};
  for (const m in i)
    if (!Lc.includes(m) && !Nt.equ(i[m], c.props[m])) {
      s[m] = i[m];
      for (const o in i)
        o.startsWith(`${m}-`) && (s[o] = i[o]);
    }
  for (const m in c.props) {
    if (Lc.includes(m) || i.hasOwnProperty(m)) continue;
    const {
      root: o,
      key: E
    } = Ya(c.object, m);
    if (o.constructor && o.constructor.length === 0) {
      const j = Ad(o);
      Nt.und(j) || (s[E] = j[E]);
    } else
      s[E] = 0;
  }
  return s;
}
const Cd = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"], jd = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function ue(c, i) {
  var s;
  const m = c.__r3f, o = m && To(m).getState(), E = m?.eventCount;
  for (const T in i) {
    let r = i[T];
    if (Lc.includes(T)) continue;
    if (m && jd.test(T)) {
      typeof r == "function" ? m.handlers[T] = r : delete m.handlers[T], m.eventCount = Object.keys(m.handlers).length;
      continue;
    }
    if (r === void 0) continue;
    let {
      root: H,
      key: M,
      target: z
    } = Ya(c, T);
    if (z instanceof ut.Layers && r instanceof ut.Layers)
      z.mask = r.mask;
    else if (z instanceof ut.Color && _d(r))
      z.set(r);
    else if (z !== null && typeof z == "object" && typeof z.set == "function" && typeof z.copy == "function" && r != null && r.constructor && z.constructor === r.constructor)
      z.copy(r);
    else if (z !== null && typeof z == "object" && typeof z.set == "function" && Array.isArray(r))
      typeof z.fromArray == "function" ? z.fromArray(r) : z.set(...r);
    else if (z !== null && typeof z == "object" && typeof z.set == "function" && typeof r == "number")
      typeof z.setScalar == "function" ? z.setScalar(r) : z.set(r);
    else {
      var j;
      H[M] = r, o && !o.linear && Cd.includes(M) && (j = H[M]) != null && j.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
      H[M].format === ut.RGBAFormat && H[M].type === ut.UnsignedByteType && (H[M].colorSpace = ut.SRGBColorSpace);
    }
  }
  if (m != null && m.parent && o != null && o.internal && (s = m.object) != null && s.isObject3D && E !== m.eventCount) {
    const T = m.object, r = o.internal.interaction.indexOf(T);
    r > -1 && o.internal.interaction.splice(r, 1), m.eventCount && T.raycast !== null && o.internal.interaction.push(T);
  }
  return m && m.props.attach === void 0 && (m.object.isBufferGeometry ? m.props.attach = "geometry" : m.object.isMaterial && (m.props.attach = "material")), m && aa(m), c;
}
function aa(c) {
  var i;
  if (!c.parent) return;
  c.props.onUpdate == null || c.props.onUpdate(c.object);
  const s = (i = c.root) == null || i.getState == null ? void 0 : i.getState();
  s && s.internal.frames === 0 && s.invalidate();
}
function Rd(c, i) {
  c.manual || (_o(c) ? (c.left = i.width / -2, c.right = i.width / 2, c.top = i.height / 2, c.bottom = i.height / -2) : c.aspect = i.width / i.height, c.updateProjectionMatrix());
}
const Lt = (c) => c?.isObject3D;
function Cu(c) {
  return (c.eventObject || c.object).uuid + "/" + c.index + c.instanceId;
}
function Ho(c, i, s, m) {
  const o = s.get(i);
  o && (s.delete(i), s.size === 0 && (c.delete(m), o.target.releasePointerCapture(m)));
}
function qd(c, i) {
  const {
    internal: s
  } = c.getState();
  s.interaction = s.interaction.filter((m) => m !== i), s.initialHits = s.initialHits.filter((m) => m !== i), s.hovered.forEach((m, o) => {
    (m.eventObject === i || m.object === i) && s.hovered.delete(o);
  }), s.capturedMap.forEach((m, o) => {
    Ho(s.capturedMap, i, m, o);
  });
}
function Bd(c) {
  function i(r) {
    const {
      internal: H
    } = c.getState(), M = r.offsetX - H.initialClick[0], z = r.offsetY - H.initialClick[1];
    return Math.round(Math.sqrt(M * M + z * z));
  }
  function s(r) {
    return r.filter((H) => ["Move", "Over", "Enter", "Out", "Leave"].some((M) => {
      var z;
      return (z = H.__r3f) == null ? void 0 : z.handlers["onPointer" + M];
    }));
  }
  function m(r, H) {
    const M = c.getState(), z = /* @__PURE__ */ new Set(), b = [], C = H ? H(M.internal.interaction) : M.internal.interaction;
    for (let g = 0; g < C.length; g++) {
      const _ = ke(C[g]);
      _ && (_.raycaster.camera = void 0);
    }
    M.previousRoot || M.events.compute == null || M.events.compute(r, M);
    function Q(g) {
      const _ = ke(g);
      if (!_ || !_.events.enabled || _.raycaster.camera === null) return [];
      if (_.raycaster.camera === void 0) {
        var X;
        _.events.compute == null || _.events.compute(r, _, (X = _.previousRoot) == null ? void 0 : X.getState()), _.raycaster.camera === void 0 && (_.raycaster.camera = null);
      }
      return _.raycaster.camera ? _.raycaster.intersectObject(g, !0) : [];
    }
    let V = C.flatMap(Q).sort((g, _) => {
      const X = ke(g.object), Z = ke(_.object);
      return !X || !Z ? g.distance - _.distance : Z.events.priority - X.events.priority || g.distance - _.distance;
    }).filter((g) => {
      const _ = Cu(g);
      return z.has(_) ? !1 : (z.add(_), !0);
    });
    M.events.filter && (V = M.events.filter(V, M));
    for (const g of V) {
      let _ = g.object;
      for (; _; ) {
        var J;
        (J = _.__r3f) != null && J.eventCount && b.push({
          ...g,
          eventObject: _
        }), _ = _.parent;
      }
    }
    if ("pointerId" in r && M.internal.capturedMap.has(r.pointerId))
      for (let g of M.internal.capturedMap.get(r.pointerId).values())
        z.has(Cu(g.intersection)) || b.push(g.intersection);
    return b;
  }
  function o(r, H, M, z) {
    if (r.length) {
      const b = {
        stopped: !1
      };
      for (const C of r) {
        let Q = ke(C.object);
        if (Q || C.object.traverseAncestors((V) => {
          const J = ke(V);
          if (J)
            return Q = J, !1;
        }), Q) {
          const {
            raycaster: V,
            pointer: J,
            camera: g,
            internal: _
          } = Q, X = new ut.Vector3(J.x, J.y, 0).unproject(g), Z = (tt) => {
            var F, w;
            return (F = (w = _.capturedMap.get(tt)) == null ? void 0 : w.has(C.eventObject)) != null ? F : !1;
          }, x = (tt) => {
            const F = {
              intersection: C,
              target: H.target
            };
            _.capturedMap.has(tt) ? _.capturedMap.get(tt).set(C.eventObject, F) : _.capturedMap.set(tt, /* @__PURE__ */ new Map([[C.eventObject, F]])), H.target.setPointerCapture(tt);
          }, Y = (tt) => {
            const F = _.capturedMap.get(tt);
            F && Ho(_.capturedMap, C.eventObject, F, tt);
          };
          let nt = {};
          for (let tt in H) {
            let F = H[tt];
            typeof F != "function" && (nt[tt] = F);
          }
          let st = {
            ...C,
            ...nt,
            pointer: J,
            intersections: r,
            stopped: b.stopped,
            delta: M,
            unprojectedPoint: X,
            ray: V.ray,
            camera: g,
            // Hijack stopPropagation, which just sets a flag
            stopPropagation() {
              const tt = "pointerId" in H && _.capturedMap.get(H.pointerId);
              if (
                // ...if this pointer hasn't been captured
                (!tt || // ... or if the hit object is capturing the pointer
                tt.has(C.eventObject)) && (st.stopped = b.stopped = !0, _.hovered.size && Array.from(_.hovered.values()).find((F) => F.eventObject === C.eventObject))
              ) {
                const F = r.slice(0, r.indexOf(C));
                E([...F, C]);
              }
            },
            // there should be a distinction between target and currentTarget
            target: {
              hasPointerCapture: Z,
              setPointerCapture: x,
              releasePointerCapture: Y
            },
            currentTarget: {
              hasPointerCapture: Z,
              setPointerCapture: x,
              releasePointerCapture: Y
            },
            nativeEvent: H
          };
          if (z(st), b.stopped === !0) break;
        }
      }
    }
    return r;
  }
  function E(r) {
    const {
      internal: H
    } = c.getState();
    for (const M of H.hovered.values())
      if (!r.length || !r.find((z) => z.object === M.object && z.index === M.index && z.instanceId === M.instanceId)) {
        const b = M.eventObject.__r3f;
        if (H.hovered.delete(Cu(M)), b != null && b.eventCount) {
          const C = b.handlers, Q = {
            ...M,
            intersections: r
          };
          C.onPointerOut == null || C.onPointerOut(Q), C.onPointerLeave == null || C.onPointerLeave(Q);
        }
      }
  }
  function j(r, H) {
    for (let M = 0; M < H.length; M++) {
      const z = H[M].__r3f;
      z == null || z.handlers.onPointerMissed == null || z.handlers.onPointerMissed(r);
    }
  }
  function T(r) {
    switch (r) {
      case "onPointerLeave":
      case "onPointerCancel":
        return () => E([]);
      case "onLostPointerCapture":
        return (H) => {
          const {
            internal: M
          } = c.getState();
          "pointerId" in H && M.capturedMap.has(H.pointerId) && requestAnimationFrame(() => {
            M.capturedMap.has(H.pointerId) && (M.capturedMap.delete(H.pointerId), E([]));
          });
        };
    }
    return function(M) {
      const {
        onPointerMissed: z,
        internal: b
      } = c.getState();
      b.lastEvent.current = M;
      const C = r === "onPointerMove", Q = r === "onClick" || r === "onContextMenu" || r === "onDoubleClick", J = m(M, C ? s : void 0), g = Q ? i(M) : 0;
      r === "onPointerDown" && (b.initialClick = [M.offsetX, M.offsetY], b.initialHits = J.map((X) => X.eventObject)), Q && !J.length && g <= 2 && (j(M, b.interaction), z && z(M)), C && E(J);
      function _(X) {
        const Z = X.eventObject, x = Z.__r3f;
        if (!(x != null && x.eventCount)) return;
        const Y = x.handlers;
        if (C) {
          if (Y.onPointerOver || Y.onPointerEnter || Y.onPointerOut || Y.onPointerLeave) {
            const nt = Cu(X), st = b.hovered.get(nt);
            st ? st.stopped && X.stopPropagation() : (b.hovered.set(nt, X), Y.onPointerOver == null || Y.onPointerOver(X), Y.onPointerEnter == null || Y.onPointerEnter(X));
          }
          Y.onPointerMove == null || Y.onPointerMove(X);
        } else {
          const nt = Y[r];
          nt ? (!Q || b.initialHits.includes(Z)) && (j(M, b.interaction.filter((st) => !b.initialHits.includes(st))), nt(X)) : Q && b.initialHits.includes(Z) && j(M, b.interaction.filter((st) => !b.initialHits.includes(st)));
        }
      }
      o(J, M, g, _);
    };
  }
  return {
    handlePointer: T
  };
}
const fo = (c) => !!(c != null && c.render), Oo = /* @__PURE__ */ ft.createContext(null), Qd = (c, i) => {
  const s = nd((T, r) => {
    const H = new ut.Vector3(), M = new ut.Vector3(), z = new ut.Vector3();
    function b(g = r().camera, _ = M, X = r().size) {
      const {
        width: Z,
        height: x,
        top: Y,
        left: nt
      } = X, st = Z / x;
      _.isVector3 ? z.copy(_) : z.set(..._);
      const tt = g.getWorldPosition(H).distanceTo(z);
      if (_o(g))
        return {
          width: Z / g.zoom,
          height: x / g.zoom,
          top: Y,
          left: nt,
          factor: 1,
          distance: tt,
          aspect: st
        };
      {
        const F = g.fov * Math.PI / 180, w = 2 * Math.tan(F / 2) * tt, Kt = w * (Z / x);
        return {
          width: Kt,
          height: w,
          top: Y,
          left: nt,
          factor: Z / Kt,
          distance: tt,
          aspect: st
        };
      }
    }
    let C;
    const Q = (g) => T((_) => ({
      performance: {
        ..._.performance,
        current: g
      }
    })), V = new ut.Vector2();
    return {
      set: T,
      get: r,
      // Mock objects that have to be configured
      gl: null,
      camera: null,
      raycaster: null,
      events: {
        priority: 1,
        enabled: !0,
        connected: !1
      },
      scene: null,
      xr: null,
      invalidate: (g = 1) => c(r(), g),
      advance: (g, _) => i(g, _, r()),
      legacy: !1,
      linear: !1,
      flat: !1,
      controls: null,
      clock: new ut.Clock(),
      pointer: V,
      mouse: V,
      frameloop: "always",
      onPointerMissed: void 0,
      performance: {
        current: 1,
        min: 0.5,
        max: 1,
        debounce: 200,
        regress: () => {
          const g = r();
          C && clearTimeout(C), g.performance.current !== g.performance.min && Q(g.performance.min), C = setTimeout(() => Q(r().performance.max), g.performance.debounce);
        }
      },
      size: {
        width: 0,
        height: 0,
        top: 0,
        left: 0
      },
      viewport: {
        initialDpr: 0,
        dpr: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        aspect: 0,
        distance: 0,
        factor: 0,
        getCurrentViewport: b
      },
      setEvents: (g) => T((_) => ({
        ..._,
        events: {
          ..._.events,
          ...g
        }
      })),
      setSize: (g, _, X = 0, Z = 0) => {
        const x = r().camera, Y = {
          width: g,
          height: _,
          top: X,
          left: Z
        };
        T((nt) => ({
          size: Y,
          viewport: {
            ...nt.viewport,
            ...b(x, M, Y)
          }
        }));
      },
      setDpr: (g) => T((_) => {
        const X = Mo(g);
        return {
          viewport: {
            ..._.viewport,
            dpr: X,
            initialDpr: _.viewport.initialDpr || X
          }
        };
      }),
      setFrameloop: (g = "always") => {
        const _ = r().clock;
        _.stop(), _.elapsedTime = 0, g !== "never" && (_.start(), _.elapsedTime = 0), T(() => ({
          frameloop: g
        }));
      },
      previousRoot: void 0,
      internal: {
        // Events
        interaction: [],
        hovered: /* @__PURE__ */ new Map(),
        subscribers: [],
        initialClick: [0, 0],
        initialHits: [],
        capturedMap: /* @__PURE__ */ new Map(),
        lastEvent: /* @__PURE__ */ ft.createRef(),
        // Updates
        active: !1,
        frames: 0,
        priority: 0,
        subscribe: (g, _, X) => {
          const Z = r().internal;
          return Z.priority = Z.priority + (_ > 0 ? 1 : 0), Z.subscribers.push({
            ref: g,
            priority: _,
            store: X
          }), Z.subscribers = Z.subscribers.sort((x, Y) => x.priority - Y.priority), () => {
            const x = r().internal;
            x != null && x.subscribers && (x.priority = x.priority - (_ > 0 ? 1 : 0), x.subscribers = x.subscribers.filter((Y) => Y.ref !== g));
          };
        }
      }
    };
  }), m = s.getState();
  let o = m.size, E = m.viewport.dpr, j = m.camera;
  return s.subscribe(() => {
    const {
      camera: T,
      size: r,
      viewport: H,
      gl: M,
      set: z
    } = s.getState();
    if (r.width !== o.width || r.height !== o.height || H.dpr !== E) {
      o = r, E = H.dpr, Rd(T, r), H.dpr > 0 && M.setPixelRatio(H.dpr);
      const b = typeof HTMLCanvasElement < "u" && M.domElement instanceof HTMLCanvasElement;
      M.setSize(r.width, r.height, b);
    }
    T !== j && (j = T, z((b) => ({
      viewport: {
        ...b.viewport,
        ...b.viewport.getCurrentViewport(T)
      }
    })));
  }), s.subscribe((T) => c(T)), s;
};
function Yd() {
  const c = ft.useContext(Oo);
  if (!c) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return c;
}
function Gd(c, i = 0) {
  const s = Yd(), m = s.getState().internal.subscribe, o = bo(c);
  return Ga(() => m(o, i, s), [i, m, s]), null;
}
const so = /* @__PURE__ */ new WeakMap(), Vd = (c) => {
  var i;
  return typeof c == "function" && (c == null || (i = c.prototype) == null ? void 0 : i.constructor) === c;
};
function Uo(c, i) {
  return function(s, ...m) {
    let o;
    return Vd(s) ? (o = so.get(s), o || (o = new s(), so.set(s, o))) : o = s, c && c(o), Promise.all(m.map((E) => new Promise((j, T) => o.load(E, (r) => {
      Lt(r?.scene) && Object.assign(r, Hd(r.scene)), j(r);
    }, i, (r) => T(new Error(`Could not load ${E}: ${r?.message}`))))));
  };
}
function ti(c, i, s, m) {
  const o = Array.isArray(i) ? i : [i], E = yd(Uo(s, m), [c, ...o], {
    equal: Nt.equ
  });
  return Array.isArray(i) ? E : E[0];
}
ti.preload = function(c, i, s) {
  const m = Array.isArray(i) ? i : [i];
  return rd(Uo(s), [c, ...m]);
};
ti.clear = function(c, i) {
  const s = Array.isArray(i) ? i : [i];
  return hd([c, ...s]);
};
function Xd(c) {
  const i = vd(c);
  return i.injectIntoDevTools({
    bundleType: 0,
    rendererPackageName: "@react-three/fiber",
    version: ft.version
  }), i;
}
const Ao = 0, ea = {}, Zd = /^three(?=[A-Z])/, Xu = (c) => `${c[0].toUpperCase()}${c.slice(1)}`;
let Kd = 0;
const Jd = (c) => typeof c == "function";
function xd(c) {
  if (Jd(c)) {
    const i = `${Kd++}`;
    return ea[i] = c, i;
  } else
    Object.assign(ea, c);
}
function Do(c, i) {
  const s = Xu(c), m = ea[s];
  if (c !== "primitive" && !m) throw new Error(`R3F: ${s} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (c === "primitive" && !i.object) throw new Error("R3F: Primitives without 'object' are invalid!");
  if (i.args !== void 0 && !Array.isArray(i.args)) throw new Error("R3F: The args prop must be an array!");
}
function Ld(c, i, s) {
  var m;
  return c = Xu(c) in ea ? c : c.replace(Zd, ""), Do(c, i), c === "primitive" && (m = i.object) != null && m.__r3f && delete i.object.__r3f, Bu(i.object, s, c, i);
}
function Wd(c) {
  if (!c.isHidden) {
    var i;
    c.props.attach && (i = c.parent) != null && i.object ? Yu(c.parent, c) : Lt(c.object) && (c.object.visible = !1), c.isHidden = !0, aa(c);
  }
}
function Co(c) {
  if (c.isHidden) {
    var i;
    c.props.attach && (i = c.parent) != null && i.object ? Qu(c.parent, c) : Lt(c.object) && c.props.visible !== !1 && (c.object.visible = !0), c.isHidden = !1, aa(c);
  }
}
function li(c, i, s) {
  const m = i.root.getState();
  if (!(!c.parent && c.object !== m.scene)) {
    if (!i.object) {
      var o, E;
      const j = ea[Xu(i.type)];
      i.object = (o = i.props.object) != null ? o : new j(...(E = i.props.args) != null ? E : []), i.object.__r3f = i;
    }
    if (ue(i.object, i.props), i.props.attach)
      Qu(c, i);
    else if (Lt(i.object) && Lt(c.object)) {
      const j = c.object.children.indexOf(s?.object);
      if (s && j !== -1) {
        const T = c.object.children.indexOf(i.object);
        if (T !== -1) {
          c.object.children.splice(T, 1);
          const r = T < j ? j - 1 : j;
          c.object.children.splice(r, 0, i.object);
        } else
          i.object.parent = c.object, c.object.children.splice(j, 0, i.object), i.object.dispatchEvent({
            type: "added"
          }), c.object.dispatchEvent({
            type: "childadded",
            child: i.object
          });
      } else
        c.object.add(i.object);
    }
    for (const j of i.children) li(i, j);
    aa(i);
  }
}
function Yc(c, i) {
  i && (i.parent = c, c.children.push(i), li(c, i));
}
function oo(c, i, s) {
  if (!i || !s) return;
  i.parent = c;
  const m = c.children.indexOf(s);
  m !== -1 ? c.children.splice(m, 0, i) : c.children.push(i), li(c, i, s);
}
function jo(c) {
  if (typeof c.dispose == "function") {
    const i = () => {
      try {
        c.dispose();
      } catch {
      }
    };
    typeof IS_REACT_ACT_ENVIRONMENT < "u" ? i() : no.unstable_scheduleCallback(no.unstable_IdlePriority, i);
  }
}
function Wc(c, i, s) {
  if (!i) return;
  i.parent = null;
  const m = c.children.indexOf(i);
  m !== -1 && c.children.splice(m, 1), i.props.attach ? Yu(c, i) : Lt(i.object) && Lt(c.object) && (c.object.remove(i.object), qd(To(i), i.object));
  const o = i.props.dispose !== null && s !== !1;
  for (let E = i.children.length - 1; E >= 0; E--) {
    const j = i.children[E];
    Wc(i, j, o);
  }
  i.children.length = 0, delete i.object.__r3f, o && i.type !== "primitive" && i.object.type !== "Scene" && jo(i.object), s === void 0 && aa(i);
}
function Fd(c, i) {
  for (const s of [c, c.alternate])
    if (s !== null)
      if (typeof s.ref == "function") {
        s.refCleanup == null || s.refCleanup();
        const m = s.ref(i);
        typeof m == "function" && (s.refCleanup = m);
      } else s.ref && (s.ref.current = i);
}
const qu = [];
function Pd() {
  for (const [s] of qu) {
    const m = s.parent;
    if (m) {
      s.props.attach ? Yu(m, s) : Lt(s.object) && Lt(m.object) && m.object.remove(s.object);
      for (const o of s.children)
        o.props.attach ? Yu(s, o) : Lt(o.object) && Lt(s.object) && s.object.remove(o.object);
    }
    s.isHidden && Co(s), s.object.__r3f && delete s.object.__r3f, s.type !== "primitive" && jo(s.object);
  }
  for (const [s, m, o] of qu) {
    s.props = m;
    const E = s.parent;
    if (E) {
      var c, i;
      const j = ea[Xu(s.type)];
      s.object = (c = s.props.object) != null ? c : new j(...(i = s.props.args) != null ? i : []), s.object.__r3f = s, Fd(o, s.object), ue(s.object, s.props), s.props.attach ? Qu(E, s) : Lt(s.object) && Lt(E.object) && E.object.add(s.object);
      for (const T of s.children)
        T.props.attach ? Qu(s, T) : Lt(T.object) && Lt(s.object) && s.object.add(T.object);
      aa(s);
    }
  }
  qu.length = 0;
}
const Gc = () => {
}, vo = {};
let ju = Ao;
const wd = 0, Id = 4, Fc = /* @__PURE__ */ Xd({
  isPrimaryRenderer: !1,
  warnsIfNotActing: !1,
  supportsMutation: !0,
  supportsPersistence: !1,
  supportsHydration: !1,
  createInstance: Ld,
  removeChild: Wc,
  appendChild: Yc,
  appendInitialChild: Yc,
  insertBefore: oo,
  appendChildToContainer(c, i) {
    const s = c.getState().scene.__r3f;
    !i || !s || Yc(s, i);
  },
  removeChildFromContainer(c, i) {
    const s = c.getState().scene.__r3f;
    !i || !s || Wc(s, i);
  },
  insertInContainerBefore(c, i, s) {
    const m = c.getState().scene.__r3f;
    !i || !s || !m || oo(m, i, s);
  },
  getRootHostContext: () => vo,
  getChildHostContext: () => vo,
  commitUpdate(c, i, s, m, o) {
    var E, j, T;
    Do(i, m);
    let r = !1;
    if ((c.type === "primitive" && s.object !== m.object || ((E = m.args) == null ? void 0 : E.length) !== ((j = s.args) == null ? void 0 : j.length) || (T = m.args) != null && T.some((M, z) => {
      var b;
      return M !== ((b = s.args) == null ? void 0 : b[z]);
    })) && (r = !0), r)
      qu.push([c, {
        ...m
      }, o]);
    else {
      const M = Dd(c, m);
      Object.keys(M).length && (Object.assign(c.props, M), ue(c.object, M));
    }
    (o.sibling === null || (o.flags & Id) === wd) && Pd();
  },
  finalizeInitialChildren: () => !1,
  commitMount() {
  },
  getPublicInstance: (c) => c?.object,
  prepareForCommit: () => null,
  preparePortalMount: (c) => Bu(c.getState().scene, c, "", {}),
  resetAfterCommit: () => {
  },
  shouldSetTextContent: () => !1,
  clearContainer: () => !1,
  hideInstance: Wd,
  unhideInstance: Co,
  createTextInstance: Gc,
  hideTextInstance: Gc,
  unhideTextInstance: Gc,
  scheduleTimeout: typeof setTimeout == "function" ? setTimeout : void 0,
  cancelTimeout: typeof clearTimeout == "function" ? clearTimeout : void 0,
  noTimeout: -1,
  getInstanceFromNode: () => null,
  beforeActiveInstanceBlur() {
  },
  afterActiveInstanceBlur() {
  },
  detachDeletedInstance() {
  },
  prepareScopeUpdate() {
  },
  getInstanceFromScope: () => null,
  shouldAttemptEagerTransition: () => !1,
  trackSchedulerEvent: () => {
  },
  resolveEventType: () => null,
  resolveEventTimeStamp: () => -1.1,
  requestPostPaintCallback() {
  },
  maySuspendCommit: () => !1,
  preloadInstance: () => !0,
  // true indicates already loaded
  startSuspendingCommit() {
  },
  suspendInstance() {
  },
  waitForCommitToBeReady: () => null,
  NotPendingTransition: null,
  HostTransitionContext: /* @__PURE__ */ ft.createContext(null),
  setCurrentUpdatePriority(c) {
    ju = c;
  },
  getCurrentUpdatePriority() {
    return ju;
  },
  resolveUpdatePriority() {
    var c;
    if (ju !== Ao) return ju;
    switch (typeof window < "u" && ((c = window.event) == null ? void 0 : c.type)) {
      case "click":
      case "contextmenu":
      case "dblclick":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
        return Ru.DiscreteEventPriority;
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerenter":
      case "pointerleave":
      case "wheel":
        return Ru.ContinuousEventPriority;
      default:
        return Ru.DefaultEventPriority;
    }
  },
  resetFormInstance() {
  }
}), Me = /* @__PURE__ */ new Map(), ta = {
  objects: "shallow",
  strict: !1
};
function $d(c, i) {
  if (!i && typeof HTMLCanvasElement < "u" && c instanceof HTMLCanvasElement && c.parentElement) {
    const {
      width: s,
      height: m,
      top: o,
      left: E
    } = c.parentElement.getBoundingClientRect();
    return {
      width: s,
      height: m,
      top: o,
      left: E
    };
  } else if (!i && typeof OffscreenCanvas < "u" && c instanceof OffscreenCanvas)
    return {
      width: c.width,
      height: c.height,
      top: 0,
      left: 0
    };
  return {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    ...i
  };
}
function kd(c) {
  const i = Me.get(c), s = i?.fiber, m = i?.store;
  i && console.warn("R3F.createRoot should only be called once!");
  const o = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  ), E = m || Qd(Ic, po), j = s || Fc.createContainer(
    E,
    // container
    Ru.ConcurrentRoot,
    // tag
    null,
    // hydration callbacks
    !1,
    // isStrictMode
    null,
    // concurrentUpdatesByDefaultOverride
    "",
    // identifierPrefix
    o,
    // onUncaughtError
    o,
    // onCaughtError
    o,
    // onRecoverableError
    null
    // transitionCallbacks
  );
  i || Me.set(c, {
    fiber: j,
    store: E
  });
  let T, r, H = !1, M = null;
  return {
    async configure(z = {}) {
      let b;
      M = new Promise(($) => b = $);
      let {
        gl: C,
        size: Q,
        scene: V,
        events: J,
        onCreated: g,
        shadows: _ = !1,
        linear: X = !1,
        flat: Z = !1,
        legacy: x = !1,
        orthographic: Y = !1,
        frameloop: nt = "always",
        dpr: st = [1, 2],
        performance: tt,
        raycaster: F,
        camera: w,
        onPointerMissed: Kt
      } = z, I = E.getState(), dt = I.gl;
      if (!I.gl) {
        const $ = {
          canvas: c,
          powerPreference: "high-performance",
          antialias: !0,
          alpha: !0
        }, ct = typeof C == "function" ? await C($) : C;
        fo(ct) ? dt = ct : dt = new ut.WebGLRenderer({
          ...$,
          ...C
        }), I.set({
          gl: dt
        });
      }
      let bt = I.raycaster;
      bt || I.set({
        raycaster: bt = new ut.Raycaster()
      });
      const {
        params: S,
        ...O
      } = F || {};
      if (Nt.equ(O, bt, ta) || ue(bt, {
        ...O
      }), Nt.equ(S, bt.params, ta) || ue(bt, {
        params: {
          ...bt.params,
          ...S
        }
      }), !I.camera || I.camera === r && !Nt.equ(r, w, ta)) {
        r = w;
        const $ = w?.isCamera, ct = $ ? w : Y ? new ut.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new ut.PerspectiveCamera(75, 0, 0.1, 1e3);
        $ || (ct.position.z = 5, w && (ue(ct, w), ct.manual || ("aspect" in w || "left" in w || "right" in w || "bottom" in w || "top" in w) && (ct.manual = !0, ct.updateProjectionMatrix())), !I.camera && !(w != null && w.rotation) && ct.lookAt(0, 0, 0)), I.set({
          camera: ct
        }), bt.camera = ct;
      }
      if (!I.scene) {
        let $;
        V != null && V.isScene ? ($ = V, Bu($, E, "", {})) : ($ = new ut.Scene(), Bu($, E, "", {}), V && ue($, V)), I.set({
          scene: $
        });
      }
      J && !I.events.handlers && I.set({
        events: J(E)
      });
      const D = $d(c, Q);
      if (Nt.equ(D, I.size, ta) || I.setSize(D.width, D.height, D.top, D.left), st && I.viewport.dpr !== Mo(st) && I.setDpr(st), I.frameloop !== nt && I.setFrameloop(nt), I.onPointerMissed || I.set({
        onPointerMissed: Kt
      }), tt && !Nt.equ(tt, I.performance, ta) && I.set(($) => ({
        performance: {
          ...$.performance,
          ...tt
        }
      })), !I.xr) {
        var B;
        const $ = (lt, Ut) => {
          const ge = E.getState();
          ge.frameloop !== "never" && po(lt, !0, ge, Ut);
        }, ct = () => {
          const lt = E.getState();
          lt.gl.xr.enabled = lt.gl.xr.isPresenting, lt.gl.xr.setAnimationLoop(lt.gl.xr.isPresenting ? $ : null), lt.gl.xr.isPresenting || Ic(lt);
        }, Tt = {
          connect() {
            const lt = E.getState().gl;
            lt.xr.addEventListener("sessionstart", ct), lt.xr.addEventListener("sessionend", ct);
          },
          disconnect() {
            const lt = E.getState().gl;
            lt.xr.removeEventListener("sessionstart", ct), lt.xr.removeEventListener("sessionend", ct);
          }
        };
        typeof ((B = dt.xr) == null ? void 0 : B.addEventListener) == "function" && Tt.connect(), I.set({
          xr: Tt
        });
      }
      if (dt.shadowMap) {
        const $ = dt.shadowMap.enabled, ct = dt.shadowMap.type;
        if (dt.shadowMap.enabled = !!_, Nt.boo(_))
          dt.shadowMap.type = ut.PCFSoftShadowMap;
        else if (Nt.str(_)) {
          var K;
          const Tt = {
            basic: ut.BasicShadowMap,
            percentage: ut.PCFShadowMap,
            soft: ut.PCFSoftShadowMap,
            variance: ut.VSMShadowMap
          };
          dt.shadowMap.type = (K = Tt[_]) != null ? K : ut.PCFSoftShadowMap;
        } else Nt.obj(_) && Object.assign(dt.shadowMap, _);
        ($ !== dt.shadowMap.enabled || ct !== dt.shadowMap.type) && (dt.shadowMap.needsUpdate = !0);
      }
      return ut.ColorManagement.enabled = !x, H || (dt.outputColorSpace = X ? ut.LinearSRGBColorSpace : ut.SRGBColorSpace, dt.toneMapping = Z ? ut.NoToneMapping : ut.ACESFilmicToneMapping), I.legacy !== x && I.set(() => ({
        legacy: x
      })), I.linear !== X && I.set(() => ({
        linear: X
      })), I.flat !== Z && I.set(() => ({
        flat: Z
      })), C && !Nt.fun(C) && !fo(C) && !Nt.equ(C, dt, ta) && ue(dt, C), T = g, H = !0, b(), this;
    },
    render(z) {
      return !H && !M && this.configure(), M.then(() => {
        Fc.updateContainer(/* @__PURE__ */ ht(tp, {
          store: E,
          children: z,
          onCreated: T,
          rootElement: c
        }), j, null, () => {
        });
      }), E;
    },
    unmount() {
      Ro(c);
    }
  };
}
function tp({
  store: c,
  children: i,
  onCreated: s,
  rootElement: m
}) {
  return Ga(() => {
    const o = c.getState();
    o.set((E) => ({
      internal: {
        ...E.internal,
        active: !0
      }
    })), s && s(o), c.getState().events.connected || o.events.connect == null || o.events.connect(m);
  }, []), /* @__PURE__ */ ht(Oo.Provider, {
    value: c,
    children: i
  });
}
function Ro(c, i) {
  const s = Me.get(c), m = s?.fiber;
  if (m) {
    const o = s?.store.getState();
    o && (o.internal.active = !1), Fc.updateContainer(null, m, null, () => {
      o && setTimeout(() => {
        try {
          var E, j, T, r;
          o.events.disconnect == null || o.events.disconnect(), (E = o.gl) == null || (j = E.renderLists) == null || j.dispose == null || j.dispose(), (T = o.gl) == null || T.forceContextLoss == null || T.forceContextLoss(), (r = o.gl) != null && r.xr && o.xr.disconnect(), Od(o.scene), Me.delete(c);
        } catch {
        }
      }, 500);
    });
  }
}
const lp = /* @__PURE__ */ new Set(), ep = /* @__PURE__ */ new Set(), ap = /* @__PURE__ */ new Set();
function Vc(c, i) {
  if (c.size)
    for (const {
      callback: s
    } of c.values())
      s(i);
}
function Qa(c, i) {
  switch (c) {
    case "before":
      return Vc(lp, i);
    case "after":
      return Vc(ep, i);
    case "tail":
      return Vc(ap, i);
  }
}
let Xc, Zc;
function Pc(c, i, s) {
  let m = i.clock.getDelta();
  i.frameloop === "never" && typeof c == "number" && (m = c - i.clock.elapsedTime, i.clock.oldTime = i.clock.elapsedTime, i.clock.elapsedTime = c), Xc = i.internal.subscribers;
  for (let o = 0; o < Xc.length; o++)
    Zc = Xc[o], Zc.ref.current(Zc.store.getState(), m, s);
  return !i.internal.priority && i.gl.render && i.gl.render(i.scene, i.camera), i.internal.frames = Math.max(0, i.internal.frames - 1), i.frameloop === "always" ? 1 : i.internal.frames;
}
let Gu = !1, wc = !1, Kc, mo, la;
function qo(c) {
  mo = requestAnimationFrame(qo), Gu = !0, Kc = 0, Qa("before", c), wc = !0;
  for (const s of Me.values()) {
    var i;
    la = s.store.getState(), la.internal.active && (la.frameloop === "always" || la.internal.frames > 0) && !((i = la.gl.xr) != null && i.isPresenting) && (Kc += Pc(c, la));
  }
  if (wc = !1, Qa("after", c), Kc === 0)
    return Qa("tail", c), Gu = !1, cancelAnimationFrame(mo);
}
function Ic(c, i = 1) {
  var s;
  if (!c) return Me.forEach((m) => Ic(m.store.getState(), i));
  (s = c.gl.xr) != null && s.isPresenting || !c.internal.active || c.frameloop === "never" || (i > 1 ? c.internal.frames = Math.min(60, c.internal.frames + i) : wc ? c.internal.frames = 2 : c.internal.frames = 1, Gu || (Gu = !0, requestAnimationFrame(qo)));
}
function po(c, i = !0, s, m) {
  if (i && Qa("before", c), s) Pc(c, s, m);
  else for (const o of Me.values()) Pc(c, o.store.getState());
  i && Qa("after", c);
}
const Jc = {
  onClick: ["click", !1],
  onContextMenu: ["contextmenu", !1],
  onDoubleClick: ["dblclick", !1],
  onWheel: ["wheel", !0],
  onPointerDown: ["pointerdown", !0],
  onPointerUp: ["pointerup", !0],
  onPointerLeave: ["pointerleave", !0],
  onPointerMove: ["pointermove", !0],
  onPointerCancel: ["pointercancel", !0],
  onLostPointerCapture: ["lostpointercapture", !0]
};
function up(c) {
  const {
    handlePointer: i
  } = Bd(c);
  return {
    priority: 1,
    enabled: !0,
    compute(s, m, o) {
      m.pointer.set(s.offsetX / m.size.width * 2 - 1, -(s.offsetY / m.size.height) * 2 + 1), m.raycaster.setFromCamera(m.pointer, m.camera);
    },
    connected: void 0,
    handlers: Object.keys(Jc).reduce((s, m) => ({
      ...s,
      [m]: i(m)
    }), {}),
    update: () => {
      var s;
      const {
        events: m,
        internal: o
      } = c.getState();
      (s = o.lastEvent) != null && s.current && m.handlers && m.handlers.onPointerMove(o.lastEvent.current);
    },
    connect: (s) => {
      const {
        set: m,
        events: o
      } = c.getState();
      if (o.disconnect == null || o.disconnect(), m((E) => ({
        events: {
          ...E.events,
          connected: s
        }
      })), o.handlers)
        for (const E in o.handlers) {
          const j = o.handlers[E], [T, r] = Jc[E];
          s.addEventListener(T, j, {
            passive: r
          });
        }
    },
    disconnect: () => {
      const {
        set: s,
        events: m
      } = c.getState();
      if (m.connected) {
        if (m.handlers)
          for (const o in m.handlers) {
            const E = m.handlers[o], [j] = Jc[o];
            m.connected.removeEventListener(j, E);
          }
        s((o) => ({
          events: {
            ...o.events,
            connected: void 0
          }
        }));
      }
    }
  };
}
function yo(c, i) {
  let s;
  return (...m) => {
    window.clearTimeout(s), s = window.setTimeout(() => c(...m), i);
  };
}
function np({ debounce: c, scroll: i, polyfill: s, offsetSize: m } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const o = s || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!o) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [E, j] = xc({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), T = Ba({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: E, orientationHandler: null }), r = c ? typeof c == "number" ? c : c.scroll : null, H = c ? typeof c == "number" ? c : c.resize : null, M = Ba(!1);
  _l(() => (M.current = !0, () => void (M.current = !1)));
  const [z, b, C] = Jm(() => {
    const g = () => {
      if (!T.current.element) return;
      const { left: _, top: X, width: Z, height: x, bottom: Y, right: nt, x: st, y: tt } = T.current.element.getBoundingClientRect(), F = { left: _, top: X, width: Z, height: x, bottom: Y, right: nt, x: st, y: tt };
      T.current.element instanceof HTMLElement && m && (F.height = T.current.element.offsetHeight, F.width = T.current.element.offsetWidth), Object.freeze(F), M.current && !sp(T.current.lastBounds, F) && j(T.current.lastBounds = F);
    };
    return [g, H ? yo(g, H) : g, r ? yo(g, r) : g];
  }, [j, m, r, H]);
  function Q() {
    T.current.scrollContainers && (T.current.scrollContainers.forEach((g) => g.removeEventListener("scroll", C, !0)), T.current.scrollContainers = null), T.current.resizeObserver && (T.current.resizeObserver.disconnect(), T.current.resizeObserver = null), T.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", T.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", T.current.orientationHandler));
  }
  function V() {
    T.current.element && (T.current.resizeObserver = new o(C), T.current.resizeObserver.observe(T.current.element), i && T.current.scrollContainers && T.current.scrollContainers.forEach((g) => g.addEventListener("scroll", C, { capture: !0, passive: !0 })), T.current.orientationHandler = () => {
      C();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", T.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", T.current.orientationHandler));
  }
  const J = (g) => {
    !g || g === T.current.element || (Q(), T.current.element = g, T.current.scrollContainers = Bo(g), V());
  };
  return ip(C, !!i), cp(b), _l(() => {
    Q(), V();
  }, [i, C, b]), _l(() => Q, []), [J, E, z];
}
function cp(c) {
  _l(() => {
    const i = c;
    return window.addEventListener("resize", i), () => void window.removeEventListener("resize", i);
  }, [c]);
}
function ip(c, i) {
  _l(() => {
    if (i) {
      const s = c;
      return window.addEventListener("scroll", s, { capture: !0, passive: !0 }), () => void window.removeEventListener("scroll", s, !0);
    }
  }, [c, i]);
}
function Bo(c) {
  const i = [];
  if (!c || c === document.body) return i;
  const { overflow: s, overflowX: m, overflowY: o } = window.getComputedStyle(c);
  return [s, m, o].some((E) => E === "auto" || E === "scroll") && i.push(c), [...i, ...Bo(c.parentElement)];
}
const fp = ["x", "y", "top", "bottom", "left", "right", "width", "height"], sp = (c, i) => fp.every((s) => c[s] === i[s]);
function op({
  ref: c,
  children: i,
  fallback: s,
  resize: m,
  style: o,
  gl: E,
  events: j = up,
  eventSource: T,
  eventPrefix: r,
  shadows: H,
  linear: M,
  flat: z,
  legacy: b,
  orthographic: C,
  frameloop: Q,
  dpr: V,
  performance: J,
  raycaster: g,
  camera: _,
  scene: X,
  onPointerMissed: Z,
  onCreated: x,
  ...Y
}) {
  ft.useMemo(() => xd(ut), []);
  const nt = bd(), [st, tt] = np({
    scroll: !0,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...m
  }), F = ft.useRef(null), w = ft.useRef(null);
  ft.useImperativeHandle(c, () => F.current);
  const Kt = bo(Z), [I, dt] = ft.useState(!1), [bt, S] = ft.useState(!1);
  if (I) throw I;
  if (bt) throw bt;
  const O = ft.useRef(null);
  return Ga(() => {
    const B = F.current;
    if (tt.width > 0 && tt.height > 0 && B) {
      O.current || (O.current = kd(B));
      async function K() {
        await O.current.configure({
          gl: E,
          scene: X,
          events: j,
          shadows: H,
          linear: M,
          flat: z,
          legacy: b,
          orthographic: C,
          frameloop: Q,
          dpr: V,
          performance: J,
          raycaster: g,
          camera: _,
          size: tt,
          // Pass mutable reference to onPointerMissed so it's free to update
          onPointerMissed: (...$) => Kt.current == null ? void 0 : Kt.current(...$),
          onCreated: ($) => {
            $.events.connect == null || $.events.connect(T ? Td(T) ? T.current : T : w.current), r && $.setEvents({
              compute: (ct, Tt) => {
                const lt = ct[r + "X"], Ut = ct[r + "Y"];
                Tt.pointer.set(lt / Tt.size.width * 2 - 1, -(Ut / Tt.size.height) * 2 + 1), Tt.raycaster.setFromCamera(Tt.pointer, Tt.camera);
              }
            }), x?.($);
          }
        }), O.current.render(/* @__PURE__ */ ht(nt, {
          children: /* @__PURE__ */ ht(gd, {
            set: S,
            children: /* @__PURE__ */ ht(ft.Suspense, {
              fallback: /* @__PURE__ */ ht(Md, {
                set: dt
              }),
              children: i ?? null
            })
          })
        }));
      }
      K();
    }
  }), ft.useEffect(() => {
    const B = F.current;
    if (B) return () => Ro(B);
  }, []), /* @__PURE__ */ ht("div", {
    ref: w,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: T ? "none" : "auto",
      ...o
    },
    ...Y,
    children: /* @__PURE__ */ ht("div", {
      ref: st,
      style: {
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ ht("canvas", {
        ref: F,
        style: {
          display: "block"
        },
        children: s
      })
    })
  });
}
function vp(c) {
  return /* @__PURE__ */ ht(zo, {
    children: /* @__PURE__ */ ht(op, {
      ...c
    })
  });
}
function mp() {
  return /* @__PURE__ */ qa("group", { children: [
    /* @__PURE__ */ qa("mesh", { rotation: [0, 0, Math.PI / 2], children: [
      /* @__PURE__ */ ht("cylinderGeometry", { args: [75e-4, 75e-4, 0.3, 32] }),
      /* @__PURE__ */ ht("meshStandardMaterial", { color: "red" })
    ] }),
    /* @__PURE__ */ qa("mesh", { position: [0.15, 0, 0], rotation: [0, 0, -Math.PI / 2], children: [
      /* @__PURE__ */ ht("coneGeometry", { args: [0.015, 0.05, 32] }),
      /* @__PURE__ */ ht("meshStandardMaterial", { color: "red" })
    ] })
  ] });
}
function dp({ spinRate: c, playing: i, seamOrientation: s, spinAxis: m, useSeamOrientation: o }) {
  const E = ti(Lm, "/models/baseball.gltf"), j = Ba(), T = Ba(), r = Ba();
  return _l(() => {
    E.scene && E.scene.rotation.set(Math.PI / 2, 3 * Math.PI / 2, 0);
  }, [E]), _l(() => {
    if (T.current)
      if (o && s) {
        const H = new ut.Matrix4();
        H.set(
          s.xx,
          -s.yx,
          -s.zx,
          0,
          s.xy,
          -s.yy,
          -s.zy,
          0,
          s.xz,
          -s.yz,
          -s.zz,
          0,
          0,
          0,
          0,
          1
        );
        const M = new ut.Quaternion();
        M.setFromRotationMatrix(H), T.current.quaternion.copy(M);
      } else
        T.current.quaternion.identity(), T.current.rotation.set(0, 0, 0);
  }, [o, s]), _l(() => {
    if (r.current)
      if (o && m) {
        const H = new ut.Vector3(1, 0, 0), M = new ut.Quaternion().setFromUnitVectors(
          H,
          m.clone().normalize()
        );
        r.current.quaternion.copy(M);
      } else
        r.current.quaternion.identity();
  }, [m, o]), Gd((H, M) => {
    if (i && j.current) {
      const b = 5 * M, C = new ut.Vector3(1, 0, 0), Q = new ut.Quaternion();
      Q.setFromAxisAngle(C, b), j.current.quaternion.multiplyQuaternions(Q, j.current.quaternion);
    }
  }), /* @__PURE__ */ ht("group", { children: /* @__PURE__ */ qa("group", { ref: r, children: [
    /* @__PURE__ */ ht(mp, {}),
    /* @__PURE__ */ ht("group", { ref: j, children: /* @__PURE__ */ ht("group", { ref: T, children: /* @__PURE__ */ ht("primitive", { object: E.scene, scale: 2 }) }) })
  ] }) });
}
function pp(c) {
  return c ? {
    xx: c.seam_orientation_xx,
    xy: c.seam_orientation_xy,
    xz: c.seam_orientation_xz,
    yx: c.seam_orientation_yx,
    yy: c.seam_orientation_yy,
    yz: c.seam_orientation_yz,
    zx: c.seam_orientation_zx,
    zy: c.seam_orientation_zy,
    zz: c.seam_orientation_zz
  } : null;
}
function yp() {
  const [c, i] = xc([]), [s, m] = xc(0);
  _l(() => {
    const r = (H) => {
      H.data?.type === "pitch_idx" && m(Number(H.data.value));
    };
    return window.addEventListener("message", r), () => window.removeEventListener("message", r);
  }, []), _l(() => {
    fetch("/gilbert_augEighth.json").then((r) => r.json()).then((r) => i(r || []));
  }, []);
  const o = c[s] || null, E = pp(o), j = o ? new ut.Vector3(
    -o.spin_x,
    o.spin_z,
    o.spin_y
  ) : new ut.Vector3(1, 0, 0);
  return /* @__PURE__ */ ht("div", { style: { width: "100vw", height: "100vh", position: "relative" }, children: /* @__PURE__ */ qa(vp, { camera: { position: [0, 0, 0.45], fov: 50 }, children: [
    /* @__PURE__ */ ht("ambientLight", { intensity: 1 }),
    /* @__PURE__ */ ht("directionalLight", { position: [0, 0, 0.3], intensity: 1 }),
    /* @__PURE__ */ ht(
      dp,
      {
        spinRate: 10,
        playing: !0,
        seamOrientation: E,
        spinAxis: j,
        useSeamOrientation: !0
      }
    )
  ] }) });
}
const rp = document.getElementById("root"), hp = xm(rp);
hp.render(/* @__PURE__ */ ht(yp, {}));
