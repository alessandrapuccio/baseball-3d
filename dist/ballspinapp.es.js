import { jsx as ht, jsxs as Ya } from "https://esm.sh/react/jsx-runtime";
import * as st from "https://esm.sh/react";
import Me, { useState as aa, useRef as Lc, useEffect as Sl, useMemo as qu } from "https://esm.sh/react";
import { createRoot as Lv } from "https://esm.sh/react-dom/client";
import * as L from "https://esm.sh/three";
import { GLTFLoader as Wv } from "https://esm.sh/three/examples/jsm/loaders/GLTFLoader";
function ho(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Oc = { exports: {} }, Yl = {};
/**
 * @license React
 * react-reconciler-constants.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ls;
function Fv() {
  return Ls || (Ls = 1, Yl.ConcurrentRoot = 1, Yl.ContinuousEventPriority = 8, Yl.DefaultEventPriority = 32, Yl.DiscreteEventPriority = 2, Yl.IdleEventPriority = 268435456, Yl.LegacyRoot = 0, Yl.NoEventPriority = 0), Yl;
}
var Ws;
function Pv() {
  return Ws || (Ws = 1, Oc.exports = Fv()), Oc.exports;
}
var Bu = Pv(), Uc = { exports: {} }, Rc = {}, Ac = { exports: {} }, Dc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fs;
function wv() {
  if (Fs) return Dc;
  Fs = 1;
  var c = Me;
  function i(z, M) {
    return z === M && (z !== 0 || 1 / z === 1 / M) || z !== z && M !== M;
  }
  var s = typeof Object.is == "function" ? Object.is : i, v = c.useState, o = c.useEffect, E = c.useLayoutEffect, j = c.useDebugValue;
  function _(z, M) {
    var D = M(), G = v({ inst: { value: D, getSnapshot: M } }), X = G[0].inst, Z = G[1];
    return E(
      function() {
        X.value = D, X.getSnapshot = M, r(X) && Z({ inst: X });
      },
      [z, D, M]
    ), o(
      function() {
        return r(X) && Z({ inst: X }), z(function() {
          r(X) && Z({ inst: X });
        });
      },
      [z]
    ), j(D), D;
  }
  function r(z) {
    var M = z.getSnapshot;
    z = z.value;
    try {
      var D = M();
      return !s(z, D);
    } catch {
      return !0;
    }
  }
  function H(z, M) {
    return M();
  }
  var b = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? H : _;
  return Dc.useSyncExternalStore = c.useSyncExternalStore !== void 0 ? c.useSyncExternalStore : b, Dc;
}
var Ps;
function Iv() {
  return Ps || (Ps = 1, Ac.exports = wv()), Ac.exports;
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
var ws;
function $v() {
  if (ws) return Rc;
  ws = 1;
  var c = Me, i = Iv();
  function s(H, b) {
    return H === b && (H !== 0 || 1 / H === 1 / b) || H !== H && b !== b;
  }
  var v = typeof Object.is == "function" ? Object.is : s, o = i.useSyncExternalStore, E = c.useRef, j = c.useEffect, _ = c.useMemo, r = c.useDebugValue;
  return Rc.useSyncExternalStoreWithSelector = function(H, b, z, M, D) {
    var G = E(null);
    if (G.current === null) {
      var X = { hasValue: !1, value: null };
      G.current = X;
    } else X = G.current;
    G = _(
      function() {
        function g(V) {
          if (!N) {
            if (N = !0, Y = V, V = M(V), D !== void 0 && X.hasValue) {
              var et = X.value;
              if (D(et, V))
                return B = et;
            }
            return B = V;
          }
          if (et = B, v(Y, V)) return et;
          var it = M(V);
          return D !== void 0 && D(et, it) ? (Y = V, et) : (Y = V, B = it);
        }
        var N = !1, Y, B, K = z === void 0 ? null : z;
        return [
          function() {
            return g(b());
          },
          K === null ? void 0 : function() {
            return g(K());
          }
        ];
      },
      [b, z, M, D]
    );
    var Z = o(H, G[0], G[1]);
    return j(
      function() {
        X.hasValue = !0, X.value = Z;
      },
      [Z]
    ), r(Z), Z;
  }, Rc;
}
var Is;
function kv() {
  return Is || (Is = 1, Uc.exports = $v()), Uc.exports;
}
var td = kv();
const ld = /* @__PURE__ */ ho(td), $s = (c) => {
  let i;
  const s = /* @__PURE__ */ new Set(), v = (H, b) => {
    const z = typeof H == "function" ? H(i) : H;
    if (!Object.is(z, i)) {
      const M = i;
      i = b ?? (typeof z != "object" || z === null) ? z : Object.assign({}, i, z), s.forEach((D) => D(i, M));
    }
  }, o = () => i, _ = { setState: v, getState: o, getInitialState: () => r, subscribe: (H) => (s.add(H), () => s.delete(H)) }, r = i = c(v, o, _);
  return _;
}, ed = (c) => c ? $s(c) : $s, { useSyncExternalStoreWithSelector: ad } = ld, ud = (c) => c;
function nd(c, i = ud, s) {
  const v = ad(
    c.subscribe,
    c.getState,
    c.getInitialState,
    i,
    s
  );
  return Me.useDebugValue(v), v;
}
const ks = (c, i) => {
  const s = ed(c), v = (o, E = i) => nd(s, o, E);
  return Object.assign(v, s), v;
}, cd = (c, i) => c ? ks(c, i) : ks;
var jc = { exports: {} }, Cc = { exports: {} }, qc = { exports: {} }, Bc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var to;
function id() {
  return to || (to = 1, function(c) {
    function i(S, O) {
      var A = S.length;
      S.push(O);
      t: for (; 0 < A; ) {
        var Q = A - 1 >>> 1, J = S[Q];
        if (0 < o(J, O))
          S[Q] = O, S[A] = J, A = Q;
        else break t;
      }
    }
    function s(S) {
      return S.length === 0 ? null : S[0];
    }
    function v(S) {
      if (S.length === 0) return null;
      var O = S[0], A = S.pop();
      if (A !== O) {
        S[0] = A;
        t: for (var Q = 0, J = S.length, tt = J >>> 1; Q < tt; ) {
          var ct = 2 * (Q + 1) - 1, Tt = S[ct], at = ct + 1, Ut = S[at];
          if (0 > o(Tt, A))
            at < J && 0 > o(Ut, Tt) ? (S[Q] = Ut, S[at] = A, Q = at) : (S[Q] = Tt, S[ct] = A, Q = ct);
          else if (at < J && 0 > o(Ut, A))
            S[Q] = Ut, S[at] = A, Q = at;
          else break t;
        }
      }
      return O;
    }
    function o(S, O) {
      var A = S.sortIndex - O.sortIndex;
      return A !== 0 ? A : S.id - O.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      c.unstable_now = function() {
        return E.now();
      };
    } else {
      var j = Date, _ = j.now();
      c.unstable_now = function() {
        return j.now() - _;
      };
    }
    var r = [], H = [], b = 1, z = null, M = 3, D = !1, G = !1, X = !1, Z = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    function Y(S) {
      for (var O = s(H); O !== null; ) {
        if (O.callback === null) v(H);
        else if (O.startTime <= S)
          v(H), O.sortIndex = O.expirationTime, i(r, O);
        else break;
        O = s(H);
      }
    }
    function B(S) {
      if (X = !1, Y(S), !G)
        if (s(r) !== null)
          G = !0, dt();
        else {
          var O = s(H);
          O !== null && Nt(B, O.startTime - S);
        }
    }
    var K = !1, V = -1, et = 5, it = -1;
    function k() {
      return !(c.unstable_now() - it < et);
    }
    function P() {
      if (K) {
        var S = c.unstable_now();
        it = S;
        var O = !0;
        try {
          t: {
            G = !1, X && (X = !1, g(V), V = -1), D = !0;
            var A = M;
            try {
              l: {
                for (Y(S), z = s(r); z !== null && !(z.expirationTime > S && k()); ) {
                  var Q = z.callback;
                  if (typeof Q == "function") {
                    z.callback = null, M = z.priorityLevel;
                    var J = Q(
                      z.expirationTime <= S
                    );
                    if (S = c.unstable_now(), typeof J == "function") {
                      z.callback = J, Y(S), O = !0;
                      break l;
                    }
                    z === s(r) && v(r), Y(S);
                  } else v(r);
                  z = s(r);
                }
                if (z !== null) O = !0;
                else {
                  var tt = s(H);
                  tt !== null && Nt(
                    B,
                    tt.startTime - S
                  ), O = !1;
                }
              }
              break t;
            } finally {
              z = null, M = A, D = !1;
            }
            O = void 0;
          }
        } finally {
          O ? I() : K = !1;
        }
      }
    }
    var I;
    if (typeof N == "function")
      I = function() {
        N(P);
      };
    else if (typeof MessageChannel < "u") {
      var Kt = new MessageChannel(), $ = Kt.port2;
      Kt.port1.onmessage = P, I = function() {
        $.postMessage(null);
      };
    } else
      I = function() {
        Z(P, 0);
      };
    function dt() {
      K || (K = !0, I());
    }
    function Nt(S, O) {
      V = Z(function() {
        S(c.unstable_now());
      }, O);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, c.unstable_continueExecution = function() {
      G || D || (G = !0, dt());
    }, c.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : et = 0 < S ? Math.floor(1e3 / S) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, c.unstable_getFirstCallbackNode = function() {
      return s(r);
    }, c.unstable_next = function(S) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = M;
      }
      var A = M;
      M = O;
      try {
        return S();
      } finally {
        M = A;
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
      var A = M;
      M = S;
      try {
        return O();
      } finally {
        M = A;
      }
    }, c.unstable_scheduleCallback = function(S, O, A) {
      var Q = c.unstable_now();
      switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? Q + A : Q) : A = Q, S) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return J = A + J, S = {
        id: b++,
        callback: O,
        priorityLevel: S,
        startTime: A,
        expirationTime: J,
        sortIndex: -1
      }, A > Q ? (S.sortIndex = A, i(H, S), s(r) === null && S === s(H) && (X ? (g(V), V = -1) : X = !0, Nt(B, A - Q))) : (S.sortIndex = J, i(r, S), G || D || (G = !0, dt())), S;
    }, c.unstable_shouldYield = k, c.unstable_wrapCallback = function(S) {
      var O = M;
      return function() {
        var A = M;
        M = O;
        try {
          return S.apply(this, arguments);
        } finally {
          M = A;
        }
      };
    };
  }(Bc)), Bc;
}
var lo;
function fd() {
  return lo || (lo = 1, qc.exports = id()), qc.exports;
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
var eo;
function sd() {
  return eo || (eo = 1, function(c) {
    c.exports = function(i) {
      function s(t, l, e, a) {
        return new sm(t, l, e, a);
      }
      function v() {
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
          return t.$$typeof === ym ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
          case qe:
            return "Fragment";
          case Ce:
            return "Portal";
          case Pn:
            return "Profiler";
          case ss:
            return "StrictMode";
          case In:
            return "Suspense";
          case $n:
            return "SuspenseList";
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case Fl:
              return (t.displayName || "Context") + ".Provider";
            case os:
              return (t._context.displayName || "Context") + ".Consumer";
            case wn:
              var l = t.render;
              return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case kn:
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
      function _(t) {
        if (tc === void 0)
          try {
            throw Error();
          } catch (e) {
            var l = e.stack.trim().match(/\n( *(at )?)/);
            tc = l && l[1] || "", ds = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + tc + t + ds;
      }
      function r(t, l) {
        if (!t || lc) return "";
        lc = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var a = {
            DetermineComponentFrameRoot: function() {
              try {
                if (l) {
                  var C = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(C.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(C, []);
                    } catch (w) {
                      var q = w;
                    }
                    Reflect.construct(t, [], C);
                  } else {
                    try {
                      C.call();
                    } catch (w) {
                      q = w;
                    }
                    t.call(C.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (w) {
                    q = w;
                  }
                  (C = t()) && typeof C.catch == "function" && C.catch(function() {
                  });
                }
              } catch (w) {
                if (w && q && typeof w.stack == "string")
                  return [w.stack, q.stack];
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
          var n = a.DetermineComponentFrameRoot(), f = n[0], m = n[1];
          if (f && m) {
            var p = f.split(`
`), T = m.split(`
`);
            for (u = a = 0; a < p.length && !p[a].includes("DetermineComponentFrameRoot"); )
              a++;
            for (; u < T.length && !T[u].includes(
              "DetermineComponentFrameRoot"
            ); )
              u++;
            if (a === p.length || u === T.length)
              for (a = p.length - 1, u = T.length - 1; 1 <= a && 0 <= u && p[a] !== T[u]; )
                u--;
            for (; 1 <= a && 0 <= u; a--, u--)
              if (p[a] !== T[u]) {
                if (a !== 1 || u !== 1)
                  do
                    if (a--, u--, 0 > u || p[a] !== T[u]) {
                      var R = `
` + p[a].replace(" at new ", " at ");
                      return t.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", t.displayName)), R;
                    }
                  while (1 <= a && 0 <= u);
                break;
              }
          }
        } finally {
          lc = !1, Error.prepareStackTrace = e;
        }
        return (e = t ? t.displayName || t.name : "") ? _(e) : "";
      }
      function H(t) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            return _(t.type);
          case 16:
            return _("Lazy");
          case 13:
            return _("Suspense");
          case 19:
            return _("SuspenseList");
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
      function b(t) {
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
      function M(t) {
        if (z(t) !== t)
          throw Error(o(188));
      }
      function D(t) {
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
              if (n === e) return M(u), t;
              if (n === a) return M(u), l;
              n = n.sibling;
            }
            throw Error(o(188));
          }
          if (e.return !== a.return) e = u, a = n;
          else {
            for (var f = !1, m = u.child; m; ) {
              if (m === e) {
                f = !0, e = u, a = n;
                break;
              }
              if (m === a) {
                f = !0, a = u, e = n;
                break;
              }
              m = m.sibling;
            }
            if (!f) {
              for (m = n.child; m; ) {
                if (m === e) {
                  f = !0, e = n, a = u;
                  break;
                }
                if (m === a) {
                  f = !0, a = n, e = u;
                  break;
                }
                m = m.sibling;
              }
              if (!f) throw Error(o(189));
            }
          }
          if (e.alternate !== a) throw Error(o(190));
        }
        if (e.tag !== 3) throw Error(o(188));
        return e.stateNode.current === e ? t : l;
      }
      function G(t) {
        var l = t.tag;
        if (l === 5 || l === 26 || l === 27 || l === 6) return t;
        for (t = t.child; t !== null; ) {
          if (l = G(t), l !== null) return l;
          t = t.sibling;
        }
        return null;
      }
      function X(t) {
        var l = t.tag;
        if (l === 5 || l === 26 || l === 27 || l === 6) return t;
        for (t = t.child; t !== null; ) {
          if (t.tag !== 4 && (l = X(t), l !== null))
            return l;
          t = t.sibling;
        }
        return null;
      }
      function Z(t) {
        return { current: t };
      }
      function g(t) {
        0 > Ye || (t.current = ic[Ye], ic[Ye] = null, Ye--);
      }
      function N(t, l) {
        Ye++, ic[Ye] = t.current, t.current = l;
      }
      function Y(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (Rv(t) / Av | 0) | 0;
      }
      function B(t) {
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
      function K(t, l) {
        var e = t.pendingLanes;
        if (e === 0) return 0;
        var a = 0, u = t.suspendedLanes, n = t.pingedLanes, f = t.warmLanes;
        t = t.finishedLanes !== 0;
        var m = e & 134217727;
        return m !== 0 ? (e = m & ~u, e !== 0 ? a = B(e) : (n &= m, n !== 0 ? a = B(n) : t || (f = m & ~f, f !== 0 && (a = B(f))))) : (m = e & ~u, m !== 0 ? a = B(m) : n !== 0 ? a = B(n) : t || (f = e & ~f, f !== 0 && (a = B(f)))), a === 0 ? 0 : l !== 0 && l !== a && (l & u) === 0 && (u = a & -a, f = l & -l, u >= f || u === 32 && (f & 4194176) !== 0) ? l : a;
      }
      function V(t, l) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
      }
      function et(t, l) {
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
      function it() {
        var t = du;
        return du <<= 1, (du & 4194176) === 0 && (du = 128), t;
      }
      function k() {
        var t = pu;
        return pu <<= 1, (pu & 62914560) === 0 && (pu = 4194304), t;
      }
      function P(t) {
        for (var l = [], e = 0; 31 > e; e++) l.push(t);
        return l;
      }
      function I(t, l) {
        t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
      }
      function Kt(t, l, e, a, u, n) {
        var f = t.pendingLanes;
        t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
        var m = t.entanglements, p = t.expirationTimes, T = t.hiddenUpdates;
        for (e = f & ~e; 0 < e; ) {
          var R = 31 - ll(e), C = 1 << R;
          m[R] = 0, p[R] = -1;
          var q = T[R];
          if (q !== null)
            for (T[R] = null, R = 0; R < q.length; R++) {
              var w = q[R];
              w !== null && (w.lane &= -536870913);
            }
          e &= ~C;
        }
        a !== 0 && $(t, a, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(f & ~l));
      }
      function $(t, l, e) {
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
      function Nt(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function S(t) {
        if (el && typeof el.onCommitFiberRoot == "function")
          try {
            el.onCommitFiberRoot(
              Ma,
              t,
              void 0,
              (t.current.flags & 128) === 128
            );
          } catch {
          }
      }
      function O(t) {
        if (typeof Bv == "function" && Yv(t), el && typeof el.setStrictMode == "function")
          try {
            el.setStrictMode(Ma, t);
          } catch {
          }
      }
      function A(t, l) {
        return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
      }
      function Q(t, l) {
        if (typeof t == "object" && t !== null) {
          var e = Vs.get(t);
          return e !== void 0 ? e : (l = {
            value: t,
            source: l,
            stack: b(l)
          }, Vs.set(t, l), l);
        }
        return {
          value: t,
          source: l,
          stack: b(l)
        };
      }
      function J(t, l) {
        Ve[Ge++] = hu, Ve[Ge++] = ru, ru = t, hu = l;
      }
      function tt(t, l, e) {
        fl[sl++] = Al, fl[sl++] = Dl, fl[sl++] = pe, pe = t;
        var a = Al;
        t = Dl;
        var u = 32 - ll(a) - 1;
        a &= ~(1 << u), e += 1;
        var n = 32 - ll(l) + u;
        if (30 < n) {
          var f = u - u % 5;
          n = (a & (1 << f) - 1).toString(32), a >>= f, u -= f, Al = 1 << 32 - ll(l) + u | e << u | a, Dl = n + t;
        } else
          Al = 1 << n | e << u | a, Dl = t;
      }
      function ct(t) {
        t.return !== null && (J(t, 1), tt(t, 1, 0));
      }
      function Tt(t) {
        for (; t === ru; )
          ru = Ve[--Ge], Ve[Ge] = null, hu = Ve[--Ge], Ve[Ge] = null;
        for (; t === pe; )
          pe = fl[--sl], fl[sl] = null, Dl = fl[--sl], fl[sl] = null, Al = fl[--sl], fl[sl] = null;
      }
      function at(t, l) {
        N(Il, l), N(ga, t), N(Qt, null), t = Sm(l), g(Qt), N(Qt, t);
      }
      function Ut() {
        g(Qt), g(ga), g(Il);
      }
      function He(t) {
        t.memoizedState !== null && N(Su, t);
        var l = Qt.current, e = Em(l, t.type);
        l !== e && (N(ga, t), N(Qt, e));
      }
      function Xa(t) {
        ga.current === t && (g(Qt), g(ga)), Su.current === t && (g(Su), Rl ? de._currentValue = Be : de._currentValue2 = Be);
      }
      function ne(t) {
        var l = Error(o(418, ""));
        throw fa(Q(l, t)), oc;
      }
      function ai(t, l) {
        if (!cl) throw Error(o(175));
        vv(
          t.stateNode,
          t.type,
          t.memoizedProps,
          l,
          t
        ) || ne(t);
      }
      function ui(t) {
        for (Jt = t.return; Jt; )
          switch (Jt.tag) {
            case 3:
            case 27:
              zl = !0;
              return;
            case 5:
            case 13:
              zl = !1;
              return;
            default:
              Jt = Jt.return;
          }
      }
      function ca(t) {
        if (!cl || t !== Jt) return !1;
        if (!ot) return ui(t), ot = !0, !1;
        var l = !1;
        if (Xt ? t.tag !== 3 && t.tag !== 27 && (t.tag !== 5 || Os(t.type) && !vu(t.type, t.memoizedProps)) && (l = !0) : t.tag !== 3 && (t.tag !== 5 || Os(t.type) && !vu(t.type, t.memoizedProps)) && (l = !0), l && Zt && ne(t), ui(t), t.tag === 13) {
          if (!cl) throw Error(o(316));
          if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
          Zt = yv(t);
        } else
          Zt = Jt ? gs(t.stateNode) : null;
        return !0;
      }
      function ia() {
        cl && (Zt = Jt = null, ot = !1);
      }
      function fa(t) {
        rl === null ? rl = [t] : rl.push(t);
      }
      function Za() {
        for (var t = Xe, l = mc = Xe = 0; l < t; ) {
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
          n !== 0 && ni(e, u, n);
        }
      }
      function Ka(t, l, e, a) {
        ol[Xe++] = t, ol[Xe++] = l, ol[Xe++] = e, ol[Xe++] = a, mc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
      }
      function Ku(t, l, e, a) {
        return Ka(t, l, e, a), xa(t);
      }
      function Ql(t, l) {
        return Ka(t, null, null, l), xa(t);
      }
      function ni(t, l, e) {
        t.lanes |= e;
        var a = t.alternate;
        a !== null && (a.lanes |= e);
        for (var u = !1, n = t.return; n !== null; )
          n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (u = !0)), t = n, n = n.return;
        u && l !== null && t.tag === 3 && (n = t.stateNode, u = 31 - ll(e), n = n.hiddenUpdates, t = n[u], t === null ? n[u] = [l] : t.push(l), l.lane = e | 536870912);
      }
      function xa(t) {
        if (50 < qa)
          throw qa = 0, Hc = null, Error(o(185));
        for (var l = t.return; l !== null; )
          t = l, l = t.return;
        return t.tag === 3 ? t.stateNode : null;
      }
      function El(t) {
        t !== Ze && t.next === null && (Ze === null ? Eu = Ze = t : Ze = Ze.next = t), zu = !0, vc || (vc = !0, Go(Vo));
      }
      function Oe(t, l) {
        if (!dc && zu) {
          dc = !0;
          do
            for (var e = !1, a = Eu; a !== null; ) {
              if (t !== 0) {
                var u = a.pendingLanes;
                if (u === 0) var n = 0;
                else {
                  var f = a.suspendedLanes, m = a.pingedLanes;
                  n = (1 << 31 - ll(42 | t) + 1) - 1, n &= u & ~(f & ~m), n = n & 201326677 ? n & 201326677 | 1 : n ? n | 2 : 0;
                }
                n !== 0 && (e = !0, fi(a, n));
              } else
                n = ft, n = K(
                  a,
                  a === St ? n : 0
                ), (n & 3) === 0 || V(a, n) || (e = !0, fi(a, n));
              a = a.next;
            }
          while (e);
          dc = !1;
        }
      }
      function Vo() {
        zu = vc = !1;
        var t = 0;
        Ke !== 0 && (Hm() && (t = Ke), Ke = 0);
        for (var l = yl(), e = null, a = Eu; a !== null; ) {
          var u = a.next, n = ci(a, l);
          n === 0 ? (a.next = null, e === null ? Eu = u : e.next = u, u === null && (Ze = e)) : (e = a, (t !== 0 || (n & 3) !== 0) && (zu = !0)), a = u;
        }
        Oe(t);
      }
      function ci(t, l) {
        for (var e = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
          var f = 31 - ll(n), m = 1 << f, p = u[f];
          p === -1 ? ((m & e) === 0 || (m & a) !== 0) && (u[f] = et(m, l)) : p <= l && (t.expiredLanes |= m), n &= ~m;
        }
        if (l = St, e = ft, e = K(
          t,
          t === l ? e : 0
        ), a = t.callbackNode, e === 0 || t === l && Et === 2 || t.cancelPendingCommit !== null)
          return a !== null && a !== null && fc(a), t.callbackNode = null, t.callbackPriority = 0;
        if ((e & 3) === 0 || V(t, e)) {
          if (l = e & -e, l === t.callbackPriority) return l;
          switch (a !== null && fc(a), Nt(e)) {
            case 2:
            case 8:
              e = Cv;
              break;
            case 32:
              e = sc;
              break;
            case 268435456:
              e = qv;
              break;
            default:
              e = sc;
          }
          return a = ii.bind(null, t), e = yu(e, a), t.callbackPriority = l, t.callbackNode = e, l;
        }
        return a !== null && a !== null && fc(a), t.callbackPriority = 2, t.callbackNode = null, 2;
      }
      function ii(t, l) {
        var e = t.callbackNode;
        if (oe() && t.callbackNode !== e)
          return null;
        var a = ft;
        return a = K(
          t,
          t === St ? a : 0
        ), a === 0 ? null : (Zf(t, a, l), ci(t, yl()), t.callbackNode != null && t.callbackNode === e ? ii.bind(null, t) : null);
      }
      function fi(t, l) {
        if (oe()) return null;
        Zf(t, l, !0);
      }
      function Go(t) {
        jm ? Cm(function() {
          (rt & 6) !== 0 ? yu(Qs, t) : t();
        }) : yu(Qs, t);
      }
      function xu() {
        return Ke === 0 && (Ke = it()), Ke;
      }
      function Xo(t, l) {
        if (Ha === null) {
          var e = Ha = [];
          pc = 0, xe = xu(), Je = {
            status: "pending",
            value: void 0,
            then: function(a) {
              e.push(a);
            }
          };
        }
        return pc++, l.then(si, si), l;
      }
      function si() {
        if (--pc === 0 && Ha !== null) {
          Je !== null && (Je.status = "fulfilled");
          var t = Ha;
          Ha = null, xe = 0, Je = null;
          for (var l = 0; l < t.length; l++) (0, t[l])();
        }
      }
      function Zo(t, l) {
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
      function Lu(t, l) {
        t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null
        });
      }
      function Vl(t) {
        return { lane: t, tag: 0, payload: null, callback: null, next: null };
      }
      function Gl(t, l, e) {
        var a = t.updateQueue;
        if (a === null) return null;
        if (a = a.shared, (rt & 2) !== 0) {
          var u = a.pending;
          return u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l, l = xa(t), ni(t, null, e), l;
        }
        return Ka(t, a, l, e), xa(t);
      }
      function sa(t, l, e) {
        if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194176) !== 0)) {
          var a = l.lanes;
          a &= t.pendingLanes, e |= a, l.lanes = e, dt(t, e);
        }
      }
      function Wu(t, l) {
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
      function oa() {
        if (yc) {
          var t = Je;
          if (t !== null) throw t;
        }
      }
      function ma(t, l, e, a) {
        yc = !1;
        var u = t.updateQueue;
        $l = !1;
        var n = u.firstBaseUpdate, f = u.lastBaseUpdate, m = u.shared.pending;
        if (m !== null) {
          u.shared.pending = null;
          var p = m, T = p.next;
          p.next = null, f === null ? n = T : f.next = T, f = p;
          var R = t.alternate;
          R !== null && (R = R.updateQueue, m = R.lastBaseUpdate, m !== f && (m === null ? R.firstBaseUpdate = T : m.next = T, R.lastBaseUpdate = p));
        }
        if (n !== null) {
          var C = u.baseState;
          f = 0, R = T = p = null, m = n;
          do {
            var q = m.lane & -536870913, w = q !== m.lane;
            if (w ? (ft & q) === q : (a & q) === q) {
              q !== 0 && q === xe && (yc = !0), R !== null && (R = R.next = {
                lane: 0,
                tag: m.tag,
                payload: m.payload,
                callback: null,
                next: null
              });
              t: {
                var dl = t, Ba = m;
                q = l;
                var be = e;
                switch (Ba.tag) {
                  case 1:
                    if (dl = Ba.payload, typeof dl == "function") {
                      C = dl.call(
                        be,
                        C,
                        q
                      );
                      break t;
                    }
                    C = dl;
                    break t;
                  case 3:
                    dl.flags = dl.flags & -65537 | 128;
                  case 0:
                    if (dl = Ba.payload, q = typeof dl == "function" ? dl.call(be, C, q) : dl, q == null) break t;
                    C = Fn({}, C, q);
                    break t;
                  case 2:
                    $l = !0;
                }
              }
              q = m.callback, q !== null && (t.flags |= 64, w && (t.flags |= 8192), w = u.callbacks, w === null ? u.callbacks = [q] : w.push(q));
            } else
              w = {
                lane: q,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null
              }, R === null ? (T = R = w, p = C) : R = R.next = w, f |= q;
            if (m = m.next, m === null) {
              if (m = u.shared.pending, m === null)
                break;
              w = m, m = w.next, w.next = null, u.lastBaseUpdate = w, u.shared.pending = null;
            }
          } while (!0);
          R === null && (p = C), u.baseState = p, u.firstBaseUpdate = T, u.lastBaseUpdate = R, n === null && (u.shared.lanes = 0), le |= f, t.lanes = f, t.memoizedState = C;
        }
      }
      function oi(t, l) {
        if (typeof t != "function")
          throw Error(o(191, t));
        t.call(l);
      }
      function mi(t, l) {
        var e = t.callbacks;
        if (e !== null)
          for (t.callbacks = null, t = 0; t < e.length; t++)
            oi(e[t], l);
      }
      function Ja(t, l) {
        if (al(t, l)) return !0;
        if (typeof t != "object" || t === null || typeof l != "object" || l === null)
          return !1;
        var e = Object.keys(t), a = Object.keys(l);
        if (e.length !== a.length) return !1;
        for (a = 0; a < e.length; a++) {
          var u = e[a];
          if (!Qv.call(l, u) || !al(t[u], l[u]))
            return !1;
        }
        return !0;
      }
      function vi(t) {
        return t = t.status, t === "fulfilled" || t === "rejected";
      }
      function La() {
      }
      function di(t, l, e) {
        switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(La, La), l = e), l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, t === Oa ? Error(o(483)) : t;
          default:
            if (typeof l.status == "string") l.then(La, La);
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
                throw t = l.reason, t === Oa ? Error(o(483)) : t;
            }
            throw Le = l, Oa;
        }
      }
      function pi() {
        if (Le === null) throw Error(o(459));
        var t = Le;
        return Le = null, t;
      }
      function Wa(t) {
        var l = Ua;
        return Ua += 1, We === null && (We = []), di(We, t, l);
      }
      function va(t, l) {
        l = l.props.ref, t.ref = l !== void 0 ? l : null;
      }
      function Fa(t, l) {
        throw l.$$typeof === vm ? Error(o(525)) : (t = Object.prototype.toString.call(l), Error(
          o(
            31,
            t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
          )
        ));
      }
      function yi(t) {
        var l = t._init;
        return l(t._payload);
      }
      function ri(t) {
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
        function m(y, d, h, U) {
          return d === null || d.tag !== 6 ? (d = Jn(h, y.mode, U), d.return = y, d) : (d = u(d, h), d.return = y, d);
        }
        function p(y, d, h, U) {
          var x = h.type;
          return x === qe ? R(
            y,
            d,
            h.props.children,
            U,
            h.key
          ) : d !== null && (d.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Pl && yi(x) === d.type) ? (d = u(d, h.props), va(d, h), d.return = y, d) : (d = su(
            h.type,
            h.key,
            h.props,
            null,
            y.mode,
            U
          ), va(d, h), d.return = y, d);
        }
        function T(y, d, h, U) {
          return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = Ln(h, y.mode, U), d.return = y, d) : (d = u(d, h.children || []), d.return = y, d);
        }
        function R(y, d, h, U, x) {
          return d === null || d.tag !== 7 ? (d = me(
            h,
            y.mode,
            U,
            x
          ), d.return = y, d) : (d = u(d, h), d.return = y, d);
        }
        function C(y, d, h) {
          if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
            return d = Jn(
              "" + d,
              y.mode,
              h
            ), d.return = y, d;
          if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
              case ou:
                return h = su(
                  d.type,
                  d.key,
                  d.props,
                  null,
                  y.mode,
                  h
                ), va(h, d), h.return = y, h;
              case Ce:
                return d = Ln(
                  d,
                  y.mode,
                  h
                ), d.return = y, d;
              case Pl:
                var U = d._init;
                return d = U(d._payload), C(y, d, h);
            }
            if (mu(d) || E(d))
              return d = me(
                d,
                y.mode,
                h,
                null
              ), d.return = y, d;
            if (typeof d.then == "function")
              return C(y, Wa(d), h);
            if (d.$$typeof === Fl)
              return C(
                y,
                au(y, d),
                h
              );
            Fa(y, d);
          }
          return null;
        }
        function q(y, d, h, U) {
          var x = d !== null ? d.key : null;
          if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
            return x !== null ? null : m(y, d, "" + h, U);
          if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
              case ou:
                return h.key === x ? p(y, d, h, U) : null;
              case Ce:
                return h.key === x ? T(y, d, h, U) : null;
              case Pl:
                return x = h._init, h = x(h._payload), q(y, d, h, U);
            }
            if (mu(h) || E(h))
              return x !== null ? null : R(y, d, h, U, null);
            if (typeof h.then == "function")
              return q(
                y,
                d,
                Wa(h),
                U
              );
            if (h.$$typeof === Fl)
              return q(
                y,
                d,
                au(y, h),
                U
              );
            Fa(y, h);
          }
          return null;
        }
        function w(y, d, h, U, x) {
          if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
            return y = y.get(h) || null, m(d, y, "" + U, x);
          if (typeof U == "object" && U !== null) {
            switch (U.$$typeof) {
              case ou:
                return y = y.get(
                  U.key === null ? h : U.key
                ) || null, p(d, y, U, x);
              case Ce:
                return y = y.get(
                  U.key === null ? h : U.key
                ) || null, T(d, y, U, x);
              case Pl:
                var zt = U._init;
                return U = zt(U._payload), w(
                  y,
                  d,
                  h,
                  U,
                  x
                );
            }
            if (mu(U) || E(U))
              return y = y.get(h) || null, R(d, y, U, x, null);
            if (typeof U.then == "function")
              return w(
                y,
                d,
                h,
                Wa(U),
                x
              );
            if (U.$$typeof === Fl)
              return w(
                y,
                d,
                h,
                au(d, U),
                x
              );
            Fa(d, U);
          }
          return null;
        }
        function dl(y, d, h, U) {
          for (var x = null, zt = null, W = d, mt = d = 0, Bt = null; W !== null && mt < h.length; mt++) {
            W.index > mt ? (Bt = W, W = null) : Bt = W.sibling;
            var vt = q(
              y,
              W,
              h[mt],
              U
            );
            if (vt === null) {
              W === null && (W = Bt);
              break;
            }
            t && W && vt.alternate === null && l(y, W), d = n(vt, d, mt), zt === null ? x = vt : zt.sibling = vt, zt = vt, W = Bt;
          }
          if (mt === h.length)
            return e(y, W), ot && J(y, mt), x;
          if (W === null) {
            for (; mt < h.length; mt++)
              W = C(y, h[mt], U), W !== null && (d = n(
                W,
                d,
                mt
              ), zt === null ? x = W : zt.sibling = W, zt = W);
            return ot && J(y, mt), x;
          }
          for (W = a(W); mt < h.length; mt++)
            Bt = w(
              W,
              y,
              mt,
              h[mt],
              U
            ), Bt !== null && (t && Bt.alternate !== null && W.delete(
              Bt.key === null ? mt : Bt.key
            ), d = n(
              Bt,
              d,
              mt
            ), zt === null ? x = Bt : zt.sibling = Bt, zt = Bt);
          return t && W.forEach(function(ae) {
            return l(y, ae);
          }), ot && J(y, mt), x;
        }
        function Ba(y, d, h, U) {
          if (h == null) throw Error(o(151));
          for (var x = null, zt = null, W = d, mt = d = 0, Bt = null, vt = h.next(); W !== null && !vt.done; mt++, vt = h.next()) {
            W.index > mt ? (Bt = W, W = null) : Bt = W.sibling;
            var ae = q(y, W, vt.value, U);
            if (ae === null) {
              W === null && (W = Bt);
              break;
            }
            t && W && ae.alternate === null && l(y, W), d = n(ae, d, mt), zt === null ? x = ae : zt.sibling = ae, zt = ae, W = Bt;
          }
          if (vt.done)
            return e(y, W), ot && J(y, mt), x;
          if (W === null) {
            for (; !vt.done; mt++, vt = h.next())
              vt = C(y, vt.value, U), vt !== null && (d = n(
                vt,
                d,
                mt
              ), zt === null ? x = vt : zt.sibling = vt, zt = vt);
            return ot && J(y, mt), x;
          }
          for (W = a(W); !vt.done; mt++, vt = h.next())
            vt = w(
              W,
              y,
              mt,
              vt.value,
              U
            ), vt !== null && (t && vt.alternate !== null && W.delete(vt.key === null ? mt : vt.key), d = n(vt, d, mt), zt === null ? x = vt : zt.sibling = vt, zt = vt);
          return t && W.forEach(function(Jv) {
            return l(y, Jv);
          }), ot && J(y, mt), x;
        }
        function be(y, d, h, U) {
          if (typeof h == "object" && h !== null && h.type === qe && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
              case ou:
                t: {
                  for (var x = h.key; d !== null; ) {
                    if (d.key === x) {
                      if (x = h.type, x === qe) {
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
                      } else if (d.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Pl && yi(x) === d.type) {
                        e(
                          y,
                          d.sibling
                        ), U = u(d, h.props), va(U, h), U.return = y, y = U;
                        break t;
                      }
                      e(y, d);
                      break;
                    } else l(y, d);
                    d = d.sibling;
                  }
                  h.type === qe ? (U = me(
                    h.props.children,
                    y.mode,
                    U,
                    h.key
                  ), U.return = y, y = U) : (U = su(
                    h.type,
                    h.key,
                    h.props,
                    null,
                    y.mode,
                    U
                  ), va(U, h), U.return = y, y = U);
                }
                return f(y);
              case Ce:
                t: {
                  for (x = h.key; d !== null; ) {
                    if (d.key === x)
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
                  U = Ln(h, y.mode, U), U.return = y, y = U;
                }
                return f(y);
              case Pl:
                return x = h._init, h = x(h._payload), be(
                  y,
                  d,
                  h,
                  U
                );
            }
            if (mu(h))
              return dl(
                y,
                d,
                h,
                U
              );
            if (E(h)) {
              if (x = E(h), typeof x != "function")
                throw Error(o(150));
              return h = x.call(h), Ba(
                y,
                d,
                h,
                U
              );
            }
            if (typeof h.then == "function")
              return be(
                y,
                d,
                Wa(h),
                U
              );
            if (h.$$typeof === Fl)
              return be(
                y,
                d,
                au(y, h),
                U
              );
            Fa(y, h);
          }
          return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, d !== null && d.tag === 6 ? (e(y, d.sibling), U = u(d, h), U.return = y, y = U) : (e(y, d), U = Jn(h, y.mode, U), U.return = y, y = U), f(y)) : e(y, d);
        }
        return function(y, d, h, U) {
          try {
            Ua = 0;
            var x = be(
              y,
              d,
              h,
              U
            );
            return We = null, x;
          } catch (W) {
            if (W === Oa) throw W;
            var zt = s(29, W, null, y.mode);
            return zt.lanes = U, zt.return = y, zt;
          } finally {
          }
        };
      }
      function hi(t, l) {
        t = Bl, N(Tu, t), N(Fe, l), Bl = t | l.baseLanes;
      }
      function Fu() {
        N(Tu, Bl), N(Fe, Fe.current);
      }
      function Pu() {
        Bl = Tu.current, g(Fe), g(Tu);
      }
      function Xl(t) {
        var l = t.alternate;
        N(jt, jt.current & 1), N(ml, t), _l === null && (l === null || Fe.current !== null || l.memoizedState !== null) && (_l = t);
      }
      function Si(t) {
        if (t.tag === 22) {
          if (N(jt, jt.current), N(ml, t), _l === null) {
            var l = t.alternate;
            l !== null && l.memoizedState !== null && (_l = t);
          }
        } else Zl();
      }
      function Zl() {
        N(jt, jt.current), N(ml, ml.current);
      }
      function Nl(t) {
        g(ml), _l === t && (_l = null), g(jt);
      }
      function Pa(t) {
        for (var l = t; l !== null; ) {
          if (l.tag === 13) {
            var e = l.memoizedState;
            if (e !== null && (e = e.dehydrated, e === null || uc(e) || nc(e)))
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
      function wu(t, l) {
        if (l === null) return !1;
        for (var e = 0; e < l.length && e < t.length; e++)
          if (!al(t[e], l[e])) return !1;
        return !0;
      }
      function Iu(t, l, e, a, u, n) {
        return kl = n, lt = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, F.H = t === null || t.memoizedState === null ? he : te, re = !1, n = e(a, u), re = !1, Pe && (n = zi(
          l,
          e,
          a,
          u
        )), Ei(t), n;
      }
      function Ei(t) {
        F.H = Tl;
        var l = yt !== null && yt.next !== null;
        if (kl = 0, At = yt = lt = null, bu = !1, Ra = 0, we = null, l) throw Error(o(300));
        t === null || Ct || (t = t.dependencies, t !== null && eu(t) && (Ct = !0));
      }
      function zi(t, l, e, a) {
        lt = t;
        var u = 0;
        do {
          if (Pe && (we = null), Ra = 0, Pe = !1, 25 <= u) throw Error(o(301));
          if (u += 1, At = yt = null, t.updateQueue != null) {
            var n = t.updateQueue;
            n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
          }
          F.H = Se, n = l(e, a);
        } while (Pe);
        return n;
      }
      function Ko() {
        var t = F.H, l = t.useState()[0];
        return l = typeof l.then == "function" ? da(l) : l, t = t.useState()[0], (yt !== null ? yt.memoizedState : null) !== t && (lt.flags |= 1024), l;
      }
      function $u() {
        var t = Nu !== 0;
        return Nu = 0, t;
      }
      function ku(t, l, e) {
        l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
      }
      function tn(t) {
        if (bu) {
          for (t = t.memoizedState; t !== null; ) {
            var l = t.queue;
            l !== null && (l.pending = null), t = t.next;
          }
          bu = !1;
        }
        kl = 0, At = yt = lt = null, Pe = !1, Ra = Nu = 0, we = null;
      }
      function Wt() {
        var t = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return At === null ? lt.memoizedState = At = t : At = At.next = t, At;
      }
      function Rt() {
        if (yt === null) {
          var t = lt.alternate;
          t = t !== null ? t.memoizedState : null;
        } else t = yt.next;
        var l = At === null ? lt.memoizedState : At.next;
        if (l !== null)
          At = l, yt = t;
        else {
          if (t === null)
            throw lt.alternate === null ? Error(o(467)) : Error(o(310));
          yt = t, t = {
            memoizedState: yt.memoizedState,
            baseState: yt.baseState,
            baseQueue: yt.baseQueue,
            queue: yt.queue,
            next: null
          }, At === null ? lt.memoizedState = At = t : At = At.next = t;
        }
        return At;
      }
      function da(t) {
        var l = Ra;
        return Ra += 1, we === null && (we = []), t = di(we, t, l), l = lt, (At === null ? l.memoizedState : At.next) === null && (l = l.alternate, F.H = l === null || l.memoizedState === null ? he : te), t;
      }
      function wa(t) {
        if (t !== null && typeof t == "object") {
          if (typeof t.then == "function") return da(t);
          if (t.$$typeof === Fl) return Vt(t);
        }
        throw Error(o(438, String(t)));
      }
      function ln(t) {
        var l = null, e = lt.updateQueue;
        if (e !== null && (l = e.memoCache), l == null) {
          var a = lt.alternate;
          a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
            data: a.data.map(function(u) {
              return u.slice();
            }),
            index: 0
          })));
        }
        if (l == null && (l = { data: [], index: 0 }), e === null && (e = hc(), lt.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
          for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
            e[a] = pm;
        return l.index++, e;
      }
      function Ml(t, l) {
        return typeof l == "function" ? l(t) : l;
      }
      function Ia(t) {
        var l = Rt();
        return en(l, yt, t);
      }
      function en(t, l, e) {
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
          var m = f = null, p = null, T = l, R = !1;
          do {
            var C = T.lane & -536870913;
            if (C !== T.lane ? (ft & C) === C : (kl & C) === C) {
              var q = T.revertLane;
              if (q === 0)
                p !== null && (p = p.next = {
                  lane: 0,
                  revertLane: 0,
                  action: T.action,
                  hasEagerState: T.hasEagerState,
                  eagerState: T.eagerState,
                  next: null
                }), C === xe && (R = !0);
              else if ((kl & q) === q) {
                T = T.next, q === xe && (R = !0);
                continue;
              } else
                C = {
                  lane: 0,
                  revertLane: T.revertLane,
                  action: T.action,
                  hasEagerState: T.hasEagerState,
                  eagerState: T.eagerState,
                  next: null
                }, p === null ? (m = p = C, f = n) : p = p.next = C, lt.lanes |= q, le |= q;
              C = T.action, re && e(n, C), n = T.hasEagerState ? T.eagerState : e(n, C);
            } else
              q = {
                lane: C,
                revertLane: T.revertLane,
                action: T.action,
                hasEagerState: T.hasEagerState,
                eagerState: T.eagerState,
                next: null
              }, p === null ? (m = p = q, f = n) : p = p.next = q, lt.lanes |= C, le |= C;
            T = T.next;
          } while (T !== null && T !== l);
          if (p === null ? f = n : p.next = m, !al(n, t.memoizedState) && (Ct = !0, R && (e = Je, e !== null)))
            throw e;
          t.memoizedState = n, t.baseState = f, t.baseQueue = p, a.lastRenderedState = n;
        }
        return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
      }
      function an(t) {
        var l = Rt(), e = l.queue;
        if (e === null) throw Error(o(311));
        e.lastRenderedReducer = t;
        var a = e.dispatch, u = e.pending, n = l.memoizedState;
        if (u !== null) {
          e.pending = null;
          var f = u = u.next;
          do
            n = t(n, f.action), f = f.next;
          while (f !== u);
          al(n, l.memoizedState) || (Ct = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
        }
        return [n, a];
      }
      function _i(t, l, e) {
        var a = lt, u = Rt(), n = ot;
        if (n) {
          if (e === void 0)
            throw Error(o(407));
          e = e();
        } else e = l();
        var f = !al(
          (yt || u).memoizedState,
          e
        );
        if (f && (u.memoizedState = e, Ct = !0), u = u.queue, cn(Ni.bind(null, a, u, t), [
          t
        ]), u.getSnapshot !== l || f || At !== null && At.memoizedState.tag & 1) {
          if (a.flags |= 2048, Ue(
            9,
            bi.bind(
              null,
              a,
              u,
              e,
              l
            ),
            { destroy: void 0 },
            null
          ), St === null) throw Error(o(349));
          n || (kl & 60) !== 0 || Ti(a, l, e);
        }
        return e;
      }
      function Ti(t, l, e) {
        t.flags |= 16384, t = { getSnapshot: l, value: e }, l = lt.updateQueue, l === null ? (l = hc(), lt.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
      }
      function bi(t, l, e, a) {
        l.value = e, l.getSnapshot = a, Mi(l) && gi(t);
      }
      function Ni(t, l, e) {
        return e(function() {
          Mi(l) && gi(t);
        });
      }
      function Mi(t) {
        var l = t.getSnapshot;
        t = t.value;
        try {
          var e = l();
          return !al(t, e);
        } catch {
          return !0;
        }
      }
      function gi(t) {
        var l = Ql(t, 2);
        l !== null && xt(l, t, 2);
      }
      function un(t) {
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
      function Hi(t, l, e, a) {
        return t.baseState = e, en(
          t,
          yt,
          typeof a == "function" ? a : Ml
        );
      }
      function xo(t, l, e, a, u) {
        if (tu(t)) throw Error(o(485));
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
          F.T !== null ? e(!0) : n.isTransition = !1, a(n), e = l.pending, e === null ? (n.next = l.pending = n, Oi(l, n)) : (n.next = e.next, l.pending = e.next = n);
        }
      }
      function Oi(t, l) {
        var e = l.action, a = l.payload, u = t.state;
        if (l.isTransition) {
          var n = F.T, f = {};
          F.T = f;
          try {
            var m = e(u, a), p = F.S;
            p !== null && p(f, m), Ui(t, l, m);
          } catch (T) {
            nn(t, l, T);
          } finally {
            F.T = n;
          }
        } else
          try {
            n = e(u, a), Ui(t, l, n);
          } catch (T) {
            nn(t, l, T);
          }
      }
      function Ui(t, l, e) {
        e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
          function(a) {
            Ri(t, l, a);
          },
          function(a) {
            return nn(t, l, a);
          }
        ) : Ri(t, l, e);
      }
      function Ri(t, l, e) {
        l.status = "fulfilled", l.value = e, Ai(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, Oi(t, e)));
      }
      function nn(t, l, e) {
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
      function ji(t, l) {
        if (ot) {
          var e = St.formState;
          if (e !== null) {
            t: {
              var a = lt;
              if (ot) {
                if (Zt) {
                  var u = nv(
                    Zt,
                    zl
                  );
                  if (u) {
                    Zt = gs(u), a = cv(u);
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
        }, e.queue = a, e = wi.bind(
          null,
          lt,
          a
        ), a.dispatch = e, a = un(!1);
        var n = mn.bind(
          null,
          lt,
          !1,
          a.queue
        );
        return a = Wt(), u = {
          state: l,
          dispatch: null,
          action: t,
          pending: null
        }, a.queue = u, e = xo.bind(
          null,
          lt,
          u,
          n,
          e
        ), u.dispatch = e, a.memoizedState = t, [l, e, !1];
      }
      function Ci(t) {
        var l = Rt();
        return qi(l, yt, t);
      }
      function qi(t, l, e) {
        l = en(
          t,
          l,
          Di
        )[0], t = Ia(Ml)[0], l = typeof l == "object" && l !== null && typeof l.then == "function" ? da(l) : l;
        var a = Rt(), u = a.queue, n = u.dispatch;
        return e !== a.memoizedState && (lt.flags |= 2048, Ue(
          9,
          Jo.bind(null, u, e),
          { destroy: void 0 },
          null
        )), [l, n, t];
      }
      function Jo(t, l) {
        t.action = l;
      }
      function Bi(t) {
        var l = Rt(), e = yt;
        if (e !== null)
          return qi(l, e, t);
        Rt(), l = l.memoizedState, e = Rt();
        var a = e.queue.dispatch;
        return e.memoizedState = t, [l, a, !1];
      }
      function Ue(t, l, e, a) {
        return t = { tag: t, create: l, inst: e, deps: a, next: null }, l = lt.updateQueue, l === null && (l = hc(), lt.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
      }
      function Yi() {
        return Rt().memoizedState;
      }
      function $a(t, l, e, a) {
        var u = Wt();
        lt.flags |= t, u.memoizedState = Ue(
          1 | l,
          e,
          { destroy: void 0 },
          a === void 0 ? null : a
        );
      }
      function ka(t, l, e, a) {
        var u = Rt();
        a = a === void 0 ? null : a;
        var n = u.memoizedState.inst;
        yt !== null && a !== null && wu(a, yt.memoizedState.deps) ? u.memoizedState = Ue(l, e, n, a) : (lt.flags |= t, u.memoizedState = Ue(1 | l, e, n, a));
      }
      function Qi(t, l) {
        $a(8390656, 8, t, l);
      }
      function cn(t, l) {
        ka(2048, 8, t, l);
      }
      function Vi(t, l) {
        return ka(4, 2, t, l);
      }
      function Gi(t, l) {
        return ka(4, 4, t, l);
      }
      function Xi(t, l) {
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
      function Zi(t, l, e) {
        e = e != null ? e.concat([t]) : null, ka(
          4,
          4,
          Xi.bind(null, l, t),
          e
        );
      }
      function fn() {
      }
      function Ki(t, l) {
        var e = Rt();
        l = l === void 0 ? null : l;
        var a = e.memoizedState;
        return l !== null && wu(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
      }
      function xi(t, l) {
        var e = Rt();
        l = l === void 0 ? null : l;
        var a = e.memoizedState;
        if (l !== null && wu(l, a[1]))
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
      function sn(t, l, e) {
        return e === void 0 || (kl & 1073741824) !== 0 ? t.memoizedState = l : (t.memoizedState = e, t = Xf(), lt.lanes |= t, le |= t, e);
      }
      function Ji(t, l, e, a) {
        return al(e, l) ? e : Fe.current !== null ? (t = sn(t, e, a), al(t, l) || (Ct = !0), t) : (kl & 42) === 0 ? (Ct = !0, t.memoizedState = e) : (t = Xf(), lt.lanes |= t, le |= t, l);
      }
      function Li(t, l, e, a, u) {
        var n = ve();
        Pt(
          n !== 0 && 8 > n ? n : 8
        );
        var f = F.T, m = {};
        F.T = m, mn(t, !1, l, e);
        try {
          var p = u(), T = F.S;
          if (T !== null && T(m, p), p !== null && typeof p == "object" && typeof p.then == "function") {
            var R = Zo(
              p,
              a
            );
            pa(
              t,
              l,
              R,
              kt(t)
            );
          } else
            pa(
              t,
              l,
              a,
              kt(t)
            );
        } catch (C) {
          pa(
            t,
            l,
            { then: function() {
            }, status: "rejected", reason: C },
            kt()
          );
        } finally {
          Pt(n), F.T = f;
        }
      }
      function Wi(t) {
        var l = t.memoizedState;
        if (l !== null) return l;
        l = {
          memoizedState: Be,
          baseState: Be,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ml,
            lastRenderedState: Be
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
      function on() {
        return Vt(de);
      }
      function Fi() {
        return Rt().memoizedState;
      }
      function Pi() {
        return Rt().memoizedState;
      }
      function Lo(t) {
        for (var l = t.return; l !== null; ) {
          switch (l.tag) {
            case 24:
            case 3:
              var e = kt();
              t = Vl(e);
              var a = Gl(l, t, e);
              a !== null && (xt(a, l, e), sa(a, l, e)), l = { cache: Nn() }, t.payload = l;
              return;
          }
          l = l.return;
        }
      }
      function Wo(t, l, e) {
        var a = kt();
        e = {
          lane: a,
          revertLane: 0,
          action: e,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, tu(t) ? Ii(l, e) : (e = Ku(t, l, e, a), e !== null && (xt(e, t, a), $i(e, l, a)));
      }
      function wi(t, l, e) {
        var a = kt();
        pa(t, l, e, a);
      }
      function pa(t, l, e, a) {
        var u = {
          lane: a,
          revertLane: 0,
          action: e,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (tu(t)) Ii(l, u);
        else {
          var n = t.alternate;
          if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
            try {
              var f = l.lastRenderedState, m = n(f, e);
              if (u.hasEagerState = !0, u.eagerState = m, al(m, f))
                return Ka(t, l, u, 0), St === null && Za(), !1;
            } catch {
            } finally {
            }
          if (e = Ku(t, l, u, a), e !== null)
            return xt(e, t, a), $i(e, l, a), !0;
        }
        return !1;
      }
      function mn(t, l, e, a) {
        if (a = {
          lane: 2,
          revertLane: xu(),
          action: a,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, tu(t)) {
          if (l) throw Error(o(479));
        } else
          l = Ku(
            t,
            e,
            a,
            2
          ), l !== null && xt(l, t, 2);
      }
      function tu(t) {
        var l = t.alternate;
        return t === lt || l !== null && l === lt;
      }
      function Ii(t, l) {
        Pe = bu = !0;
        var e = t.pending;
        e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
      }
      function $i(t, l, e) {
        if ((e & 4194176) !== 0) {
          var a = l.lanes;
          a &= t.pendingLanes, e |= a, l.lanes = e, dt(t, e);
        }
      }
      function vn(t, l, e, a) {
        l = t.memoizedState, e = e(a, l), e = e == null ? l : Fn({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
      }
      function ki(t, l, e, a, u, n, f) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, f) : l.prototype && l.prototype.isPureReactComponent ? !Ja(e, a) || !Ja(u, n) : !0;
      }
      function tf(t, l, e, a) {
        t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && Sc.enqueueReplaceState(l, l.state, null);
      }
      function ce(t, l) {
        var e = l;
        if ("ref" in l) {
          e = {};
          for (var a in l)
            a !== "ref" && (e[a] = l[a]);
        }
        if (t = t.defaultProps) {
          e === l && (e = Fn({}, e));
          for (var u in t)
            e[u] === void 0 && (e[u] = t[u]);
        }
        return e;
      }
      function lu(t, l) {
        try {
          var e = t.onUncaughtError;
          e(l.value, { componentStack: l.stack });
        } catch (a) {
          setTimeout(function() {
            throw a;
          });
        }
      }
      function lf(t, l, e) {
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
      function dn(t, l, e) {
        return e = Vl(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
          lu(t, l);
        }, e;
      }
      function ef(t) {
        return t = Vl(t), t.tag = 3, t;
      }
      function af(t, l, e, a) {
        var u = e.type.getDerivedStateFromError;
        if (typeof u == "function") {
          var n = a.value;
          t.payload = function() {
            return u(n);
          }, t.callback = function() {
            lf(l, e, a);
          };
        }
        var f = e.stateNode;
        f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
          lf(l, e, a), typeof u != "function" && (ee === null ? ee = /* @__PURE__ */ new Set([this]) : ee.add(this));
          var m = a.stack;
          this.componentDidCatch(a.value, {
            componentStack: m !== null ? m : ""
          });
        });
      }
      function Fo(t, l, e, a, u) {
        if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          if (l = e.alternate, l !== null && ra(
            l,
            e,
            u,
            !0
          ), e = ml.current, e !== null) {
            switch (e.tag) {
              case 13:
                return _l === null ? Xn() : e.alternate === null && Ht === 0 && (Ht = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === _u ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Kn(t, a, u)), !1;
              case 22:
                return e.flags |= 65536, a === _u ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([a])
                }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Kn(t, a, u)), !1;
            }
            throw Error(o(435, e.tag));
          }
          return Kn(t, a, u), Xn(), !1;
        }
        if (ot)
          return l = ml.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, a !== oc && (t = Error(o(422), { cause: a }), fa(
            Q(t, e)
          ))) : (a !== oc && (l = Error(o(423), {
            cause: a
          }), fa(
            Q(l, e)
          )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = Q(a, e), u = dn(
            t.stateNode,
            a,
            u
          ), Wu(t, u), Ht !== 4 && (Ht = 2)), !1;
        var n = Error(o(520), { cause: a });
        if (n = Q(n, e), Da === null ? Da = [n] : Da.push(n), Ht !== 4 && (Ht = 2), l === null) return !0;
        a = Q(a, e), e = l;
        do {
          switch (e.tag) {
            case 3:
              return e.flags |= 65536, t = u & -u, e.lanes |= t, t = dn(e.stateNode, a, t), Wu(e, t), !1;
            case 1:
              if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ee === null || !ee.has(
                n
              ))))
                return e.flags |= 65536, u &= -u, e.lanes |= u, u = ef(u), af(
                  u,
                  t,
                  e,
                  a
                ), Wu(e, u), !1;
          }
          e = e.return;
        } while (e !== null);
        return !1;
      }
      function Yt(t, l, e, a) {
        l.child = t === null ? Gs(l, null, e, a) : ye(
          l,
          t.child,
          e,
          a
        );
      }
      function uf(t, l, e, a, u) {
        e = e.render;
        var n = l.ref;
        if ("ref" in a) {
          var f = {};
          for (var m in a)
            m !== "ref" && (f[m] = a[m]);
        } else f = a;
        return ie(l), a = Iu(
          t,
          l,
          e,
          f,
          n,
          u
        ), m = $u(), t !== null && !Ct ? (ku(t, l, u), gl(t, l, u)) : (ot && m && ct(l), l.flags |= 1, Yt(t, l, a, u), l.child);
      }
      function nf(t, l, e, a, u) {
        if (t === null) {
          var n = e.type;
          return typeof n == "function" && !xn(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, cf(
            t,
            l,
            n,
            a,
            u
          )) : (t = su(
            e.type,
            null,
            a,
            l,
            l.mode,
            u
          ), t.ref = l.ref, t.return = l, l.child = t);
        }
        if (n = t.child, !_n(t, u)) {
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
      function cf(t, l, e, a, u) {
        if (t !== null) {
          var n = t.memoizedProps;
          if (Ja(n, a) && t.ref === l.ref)
            if (Ct = !1, l.pendingProps = a = n, _n(t, u))
              (t.flags & 131072) !== 0 && (Ct = !0);
            else
              return l.lanes = t.lanes, gl(t, l, u);
        }
        return pn(
          t,
          l,
          e,
          a,
          u
        );
      }
      function ff(t, l, e) {
        var a = l.pendingProps, u = a.children, n = (l.stateNode._pendingVisibility & 2) !== 0, f = t !== null ? t.memoizedState : null;
        if (ya(t, l), a.mode === "hidden" || n) {
          if ((l.flags & 128) !== 0) {
            if (a = f !== null ? f.baseLanes | e : e, t !== null) {
              for (u = l.child = t.child, n = 0; u !== null; )
                n = n | u.lanes | u.childLanes, u = u.sibling;
              l.childLanes = n & ~a;
            } else l.childLanes = 0, l.child = null;
            return sf(
              t,
              l,
              a,
              e
            );
          }
          if ((e & 536870912) !== 0)
            l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && uu(
              l,
              f !== null ? f.cachePool : null
            ), f !== null ? hi(l, f) : Fu(), Si(l);
          else
            return l.lanes = l.childLanes = 536870912, sf(
              t,
              l,
              f !== null ? f.baseLanes | e : e,
              e
            );
        } else
          f !== null ? (uu(l, f.cachePool), hi(l, f), Zl(), l.memoizedState = null) : (t !== null && uu(l, null), Fu(), Zl());
        return Yt(t, l, u, e), l.child;
      }
      function sf(t, l, e, a) {
        var u = Mn();
        return u = u === null ? null : {
          parent: Rl ? Mt._currentValue : Mt._currentValue2,
          pool: u
        }, l.memoizedState = {
          baseLanes: e,
          cachePool: u
        }, t !== null && uu(l, null), Fu(), Si(l), t !== null && ra(t, l, a, !0), null;
      }
      function ya(t, l) {
        var e = l.ref;
        if (e === null)
          t !== null && t.ref !== null && (l.flags |= 2097664);
        else {
          if (typeof e != "function" && typeof e != "object")
            throw Error(o(284));
          (t === null || t.ref !== e) && (l.flags |= 2097664);
        }
      }
      function pn(t, l, e, a, u) {
        return ie(l), e = Iu(
          t,
          l,
          e,
          a,
          void 0,
          u
        ), a = $u(), t !== null && !Ct ? (ku(t, l, u), gl(t, l, u)) : (ot && a && ct(l), l.flags |= 1, Yt(t, l, e, u), l.child);
      }
      function of(t, l, e, a, u, n) {
        return ie(l), l.updateQueue = null, e = zi(
          l,
          a,
          e,
          u
        ), Ei(t), a = $u(), t !== null && !Ct ? (ku(t, l, n), gl(t, l, n)) : (ot && a && ct(l), l.flags |= 1, Yt(t, l, e, n), l.child);
      }
      function mf(t, l, e, a, u) {
        if (ie(l), l.stateNode === null) {
          var n = Qe, f = e.contextType;
          typeof f == "object" && f !== null && (n = Vt(f)), n = new e(a, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Sc, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = a, n.state = l.memoizedState, n.refs = {}, Ju(l), f = e.contextType, n.context = typeof f == "object" && f !== null ? Vt(f) : Qe, n.state = l.memoizedState, f = e.getDerivedStateFromProps, typeof f == "function" && (vn(
            l,
            e,
            f,
            a
          ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && Sc.enqueueReplaceState(
            n,
            n.state,
            null
          ), ma(l, a, n, u), oa(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
        } else if (t === null) {
          n = l.stateNode;
          var m = l.memoizedProps, p = ce(e, m);
          n.props = p;
          var T = n.context, R = e.contextType;
          f = Qe, typeof R == "object" && R !== null && (f = Vt(R));
          var C = e.getDerivedStateFromProps;
          R = typeof C == "function" || typeof n.getSnapshotBeforeUpdate == "function", m = l.pendingProps !== m, R || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (m || T !== f) && tf(
            l,
            n,
            a,
            f
          ), $l = !1;
          var q = l.memoizedState;
          n.state = q, ma(l, a, n, u), oa(), T = l.memoizedState, m || q !== T || $l ? (typeof C == "function" && (vn(
            l,
            e,
            C,
            a
          ), T = l.memoizedState), (p = $l || ki(
            l,
            e,
            p,
            a,
            q,
            T,
            f
          )) ? (R || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = T), n.props = a, n.state = T, n.context = f, a = p) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
        } else {
          n = l.stateNode, Lu(t, l), f = l.memoizedProps, R = ce(e, f), n.props = R, C = l.pendingProps, q = n.context, T = e.contextType, p = Qe, typeof T == "object" && T !== null && (p = Vt(T)), m = e.getDerivedStateFromProps, (T = typeof m == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== C || q !== p) && tf(
            l,
            n,
            a,
            p
          ), $l = !1, q = l.memoizedState, n.state = q, ma(l, a, n, u), oa();
          var w = l.memoizedState;
          f !== C || q !== w || $l || t !== null && t.dependencies !== null && eu(t.dependencies) ? (typeof m == "function" && (vn(
            l,
            e,
            m,
            a
          ), w = l.memoizedState), (R = $l || ki(
            l,
            e,
            R,
            a,
            q,
            w,
            p
          ) || t !== null && t.dependencies !== null && eu(t.dependencies)) ? (T || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, w, p), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
            a,
            w,
            p
          )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === t.memoizedProps && q === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && q === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = w), n.props = a, n.state = w, n.context = p, a = R) : (typeof n.componentDidUpdate != "function" || f === t.memoizedProps && q === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && q === t.memoizedState || (l.flags |= 1024), a = !1);
        }
        return n = a, ya(t, l), a = (l.flags & 128) !== 0, n || a ? (n = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && a ? (l.child = ye(
          l,
          t.child,
          null,
          u
        ), l.child = ye(
          l,
          null,
          e,
          u
        )) : Yt(t, l, e, u), l.memoizedState = n.state, t = l.child) : t = gl(
          t,
          l,
          u
        ), t;
      }
      function vf(t, l, e, a) {
        return ia(), l.flags |= 256, Yt(t, l, e, a), l.child;
      }
      function yn(t) {
        return { baseLanes: t, cachePool: Sf() };
      }
      function rn(t, l, e) {
        return t = t !== null ? t.childLanes & ~e : 0, l && (t |= vl), t;
      }
      function df(t, l, e) {
        var a = l.pendingProps, u = !1, n = (l.flags & 128) !== 0, f;
        if ((f = n) || (f = t !== null && t.memoizedState === null ? !1 : (jt.current & 2) !== 0), f && (u = !0, l.flags &= -129), f = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
          if (ot) {
            if (u ? Xl(l) : Zl(), ot) {
              var m = Zt, p;
              (p = m) && (m = mv(
                m,
                zl
              ), m !== null ? (l.memoizedState = {
                dehydrated: m,
                treeContext: pe !== null ? { id: Al, overflow: Dl } : null,
                retryLane: 536870912
              }, p = s(18, null, null, 0), p.stateNode = m, p.return = l, l.child = p, Jt = l, Zt = null, p = !0) : p = !1), p || ne(l);
            }
            if (m = l.memoizedState, m !== null && (m = m.dehydrated, m !== null))
              return nc(m) ? l.lanes = 16 : l.lanes = 536870912, null;
            Nl(l);
          }
          return m = a.children, a = a.fallback, u ? (Zl(), u = l.mode, m = Sn(
            { mode: "hidden", children: m },
            u
          ), a = me(
            a,
            u,
            e,
            null
          ), m.return = l, a.return = l, m.sibling = a, l.child = m, u = l.child, u.memoizedState = yn(e), u.childLanes = rn(
            t,
            f,
            e
          ), l.memoizedState = Ec, a) : (Xl(l), hn(l, m));
        }
        if (p = t.memoizedState, p !== null && (m = p.dehydrated, m !== null)) {
          if (n)
            l.flags & 256 ? (Xl(l), l.flags &= -257, l = En(
              t,
              l,
              e
            )) : l.memoizedState !== null ? (Zl(), l.child = t.child, l.flags |= 128, l = null) : (Zl(), u = a.fallback, m = l.mode, a = Sn(
              { mode: "visible", children: a.children },
              m
            ), u = me(
              u,
              m,
              e,
              null
            ), u.flags |= 2, a.return = l, u.return = l, a.sibling = u, l.child = a, ye(
              l,
              t.child,
              null,
              e
            ), a = l.child, a.memoizedState = yn(e), a.childLanes = rn(
              t,
              f,
              e
            ), l.memoizedState = Ec, l = u);
          else if (Xl(l), nc(m))
            f = av(m).digest, a = Error(o(419)), a.stack = "", a.digest = f, fa({ value: a, source: null, stack: null }), l = En(
              t,
              l,
              e
            );
          else if (Ct || ra(
            t,
            l,
            e,
            !1
          ), f = (e & t.childLanes) !== 0, Ct || f) {
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
                throw p.retryLane = a, Ql(t, a), xt(f, t, a), Zs;
            }
            uc(m) || Xn(), l = En(
              t,
              l,
              e
            );
          } else
            uc(m) ? (l.flags |= 128, l.child = t.child, l = cm.bind(
              null,
              t
            ), uv(m, l), l = null) : (t = p.treeContext, cl && (Zt = fv(m), Jt = l, ot = !0, rl = null, zl = !1, t !== null && (fl[sl++] = Al, fl[sl++] = Dl, fl[sl++] = pe, Al = t.id, Dl = t.overflow, pe = l)), l = hn(
              l,
              a.children
            ), l.flags |= 4096);
          return l;
        }
        return u ? (Zl(), u = a.fallback, m = l.mode, p = t.child, n = p.sibling, a = Wl(p, {
          mode: "hidden",
          children: a.children
        }), a.subtreeFlags = p.subtreeFlags & 31457280, n !== null ? u = Wl(n, u) : (u = me(
          u,
          m,
          e,
          null
        ), u.flags |= 2), u.return = l, a.return = l, a.sibling = u, l.child = a, a = u, u = l.child, m = t.child.memoizedState, m === null ? m = yn(e) : (p = m.cachePool, p !== null ? (n = Rl ? Mt._currentValue : Mt._currentValue2, p = p.parent !== n ? { parent: n, pool: n } : p) : p = Sf(), m = {
          baseLanes: m.baseLanes | e,
          cachePool: p
        }), u.memoizedState = m, u.childLanes = rn(
          t,
          f,
          e
        ), l.memoizedState = Ec, a) : (Xl(l), e = t.child, t = e.sibling, e = Wl(e, {
          mode: "visible",
          children: a.children
        }), e.return = l, e.sibling = null, t !== null && (f = l.deletions, f === null ? (l.deletions = [t], l.flags |= 16) : f.push(t)), l.child = e, l.memoizedState = null, e);
      }
      function hn(t, l) {
        return l = Sn(
          { mode: "visible", children: l },
          t.mode
        ), l.return = t, t.child = l;
      }
      function Sn(t, l) {
        return as(t, l, 0, null);
      }
      function En(t, l, e) {
        return ye(l, t.child, null, e), t = hn(
          l,
          l.pendingProps.children
        ), t.flags |= 2, l.memoizedState = null, t;
      }
      function pf(t, l, e) {
        t.lanes |= l;
        var a = t.alternate;
        a !== null && (a.lanes |= l), Tn(t.return, l, e);
      }
      function zn(t, l, e, a, u) {
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
      function yf(t, l, e) {
        var a = l.pendingProps, u = a.revealOrder, n = a.tail;
        if (Yt(t, l, a.children, e), a = jt.current, (a & 2) !== 0)
          a = a & 1 | 2, l.flags |= 128;
        else {
          if (t !== null && (t.flags & 128) !== 0)
            t: for (t = l.child; t !== null; ) {
              if (t.tag === 13)
                t.memoizedState !== null && pf(t, e, l);
              else if (t.tag === 19)
                pf(t, e, l);
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
        switch (N(jt, a), u) {
          case "forwards":
            for (e = l.child, u = null; e !== null; )
              t = e.alternate, t !== null && Pa(t) === null && (u = e), e = e.sibling;
            e = u, e === null ? (u = l.child, l.child = null) : (u = e.sibling, e.sibling = null), zn(
              l,
              !1,
              u,
              e,
              n
            );
            break;
          case "backwards":
            for (e = null, u = l.child, l.child = null; u !== null; ) {
              if (t = u.alternate, t !== null && Pa(t) === null) {
                l.child = u;
                break;
              }
              t = u.sibling, u.sibling = e, e = u, u = t;
            }
            zn(
              l,
              !0,
              e,
              null,
              n
            );
            break;
          case "together":
            zn(l, !1, null, null, void 0);
            break;
          default:
            l.memoizedState = null;
        }
        return l.child;
      }
      function gl(t, l, e) {
        if (t !== null && (l.dependencies = t.dependencies), le |= l.lanes, (e & l.childLanes) === 0)
          if (t !== null) {
            if (ra(
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
      function _n(t, l) {
        return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && eu(t)));
      }
      function Po(t, l, e) {
        switch (l.tag) {
          case 3:
            at(
              l,
              l.stateNode.containerInfo
            ), Kl(l, Mt, t.memoizedState.cache), ia();
            break;
          case 27:
          case 5:
            He(l);
            break;
          case 4:
            at(
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
              return a.dehydrated !== null ? (Xl(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? df(
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
            if (a = (e & l.childLanes) !== 0, a || (ra(
              t,
              l,
              e,
              !1
            ), a = (e & l.childLanes) !== 0), u) {
              if (a)
                return yf(
                  t,
                  l,
                  e
                );
              l.flags |= 128;
            }
            if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), N(jt, jt.current), a) break;
            return null;
          case 22:
          case 23:
            return l.lanes = 0, ff(t, l, e);
          case 24:
            Kl(l, Mt, t.memoizedState.cache);
        }
        return gl(t, l, e);
      }
      function rf(t, l, e) {
        if (t !== null)
          if (t.memoizedProps !== l.pendingProps)
            Ct = !0;
          else {
            if (!_n(t, e) && (l.flags & 128) === 0)
              return Ct = !1, Po(
                t,
                l,
                e
              );
            Ct = (t.flags & 131072) !== 0;
          }
        else
          Ct = !1, ot && (l.flags & 1048576) !== 0 && tt(l, hu, l.index);
        switch (l.lanes = 0, l.tag) {
          case 16:
            t: {
              t = l.pendingProps;
              var a = l.elementType, u = a._init;
              if (a = u(a._payload), l.type = a, typeof a == "function")
                xn(a) ? (t = ce(a, t), l.tag = 1, l = mf(
                  null,
                  l,
                  a,
                  t,
                  e
                )) : (l.tag = 0, l = pn(
                  null,
                  l,
                  a,
                  t,
                  e
                ));
              else {
                if (a != null) {
                  if (u = a.$$typeof, u === wn) {
                    l.tag = 11, l = uf(
                      null,
                      l,
                      a,
                      t,
                      e
                    );
                    break t;
                  } else if (u === kn) {
                    l.tag = 14, l = nf(
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
            return pn(
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
            ), mf(
              t,
              l,
              a,
              u,
              e
            );
          case 3:
            t: {
              if (at(
                l,
                l.stateNode.containerInfo
              ), t === null) throw Error(o(387));
              var n = l.pendingProps;
              u = l.memoizedState, a = u.element, Lu(t, l), ma(l, n, null, e);
              var f = l.memoizedState;
              if (n = f.cache, Kl(l, Mt, n), n !== u.cache && bn(
                l,
                [Mt],
                e,
                !0
              ), oa(), n = f.element, cl && u.isDehydrated)
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
                  a = Q(
                    Error(o(424)),
                    l
                  ), fa(a), l = vf(
                    t,
                    l,
                    n,
                    e
                  );
                  break t;
                } else
                  for (cl && (Zt = iv(
                    l.stateNode.containerInfo
                  ), Jt = l, ot = !0, rl = null, zl = !0), e = Gs(
                    l,
                    null,
                    n,
                    e
                  ), l.child = e; e; )
                    e.flags = e.flags & -3 | 4096, e = e.sibling;
              else {
                if (ia(), n === a) {
                  l = gl(
                    t,
                    l,
                    e
                  );
                  break t;
                }
                Yt(t, l, n, e);
              }
              l = l.child;
            }
            return l;
          case 26:
            if (il)
              return ya(t, l), t === null ? (e = Rs(
                l.type,
                null,
                l.pendingProps,
                null
              )) ? l.memoizedState = e : ot || (l.stateNode = bv(
                l.type,
                l.pendingProps,
                Il.current,
                l
              )) : l.memoizedState = Rs(
                l.type,
                t.memoizedProps,
                l.pendingProps,
                t.memoizedState
              ), null;
          case 27:
            if (Xt)
              return He(l), t === null && Xt && ot && (a = l.stateNode = Bs(
                l.type,
                l.pendingProps,
                Il.current,
                Qt.current,
                !1
              ), Jt = l, zl = !0, Zt = Hs(a)), a = l.pendingProps.children, t !== null || ot ? Yt(
                t,
                l,
                a,
                e
              ) : l.child = ye(
                l,
                null,
                a,
                e
              ), ya(t, l), l.child;
          case 5:
            return t === null && ot && (zv(
              l.type,
              l.pendingProps,
              Qt.current
            ), (u = a = Zt) && (a = sv(
              a,
              l.type,
              l.pendingProps,
              zl
            ), a !== null ? (l.stateNode = a, Jt = l, Zt = Hs(a), zl = !1, u = !0) : u = !1), u || ne(l)), He(l), u = l.type, n = l.pendingProps, f = t !== null ? t.memoizedProps : null, a = n.children, vu(u, n) ? a = null : f !== null && vu(u, f) && (l.flags |= 32), l.memoizedState !== null && (u = Iu(
              t,
              l,
              Ko,
              null,
              null,
              e
            ), Rl ? de._currentValue = u : de._currentValue2 = u), ya(t, l), Yt(t, l, a, e), l.child;
          case 6:
            return t === null && ot && (_v(
              l.pendingProps,
              Qt.current
            ), (t = e = Zt) && (e = ov(
              e,
              l.pendingProps,
              zl
            ), e !== null ? (l.stateNode = e, Jt = l, Zt = null, t = !0) : t = !1), t || ne(l)), null;
          case 13:
            return df(t, l, e);
          case 4:
            return at(
              l,
              l.stateNode.containerInfo
            ), a = l.pendingProps, t === null ? l.child = ye(
              l,
              null,
              a,
              e
            ) : Yt(
              t,
              l,
              a,
              e
            ), l.child;
          case 11:
            return uf(
              t,
              l,
              l.type,
              l.pendingProps,
              e
            );
          case 7:
            return Yt(
              t,
              l,
              l.pendingProps,
              e
            ), l.child;
          case 8:
            return Yt(
              t,
              l,
              l.pendingProps.children,
              e
            ), l.child;
          case 12:
            return Yt(
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
            ), Yt(
              t,
              l,
              a.children,
              e
            ), l.child;
          case 9:
            return u = l.type._context, a = l.pendingProps.children, ie(l), u = Vt(u), a = a(u), l.flags |= 1, Yt(
              t,
              l,
              a,
              e
            ), l.child;
          case 14:
            return nf(
              t,
              l,
              l.type,
              l.pendingProps,
              e
            );
          case 15:
            return cf(
              t,
              l,
              l.type,
              l.pendingProps,
              e
            );
          case 19:
            return yf(
              t,
              l,
              e
            );
          case 22:
            return ff(t, l, e);
          case 24:
            return ie(l), a = Vt(Mt), t === null ? (u = Mn(), u === null && (u = St, n = Nn(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), l.memoizedState = {
              parent: a,
              cache: u
            }, Ju(l), Kl(l, Mt, u)) : ((t.lanes & e) !== 0 && (Lu(t, l), ma(l, null, null, e), oa()), u = t.memoizedState, n = l.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), Kl(l, Mt, a)) : (a = n.cache, Kl(l, Mt, a), a !== u.cache && bn(
              l,
              [Mt],
              e,
              !0
            ))), Yt(
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
        Rl ? (N(Mu, l._currentValue), l._currentValue = e) : (N(Mu, l._currentValue2), l._currentValue2 = e);
      }
      function Hl(t) {
        var l = Mu.current;
        Rl ? t._currentValue = l : t._currentValue2 = l, g(Mu);
      }
      function Tn(t, l, e) {
        for (; t !== null; ) {
          var a = t.alternate;
          if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
          t = t.return;
        }
      }
      function bn(t, l, e, a) {
        var u = t.child;
        for (u !== null && (u.return = t); u !== null; ) {
          var n = u.dependencies;
          if (n !== null) {
            var f = u.child;
            n = n.firstContext;
            t: for (; n !== null; ) {
              var m = n;
              n = u;
              for (var p = 0; p < l.length; p++)
                if (m.context === l[p]) {
                  n.lanes |= e, m = n.alternate, m !== null && (m.lanes |= e), Tn(
                    n.return,
                    e,
                    t
                  ), a || (f = null);
                  break t;
                }
              n = m.next;
            }
          } else if (u.tag === 18) {
            if (f = u.return, f === null) throw Error(o(341));
            f.lanes |= e, n = f.alternate, n !== null && (n.lanes |= e), Tn(f, e, t), f = null;
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
      function ra(t, l, e, a) {
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
              var m = u.type;
              al(u.pendingProps.value, f.value) || (t !== null ? t.push(m) : t = [m]);
            }
          } else if (u === Su.current) {
            if (f = u.alternate, f === null) throw Error(o(387));
            f.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(de) : t = [de]);
          }
          u = u.return;
        }
        t !== null && bn(
          l,
          t,
          e,
          a
        ), l.flags |= 262144;
      }
      function eu(t) {
        for (t = t.firstContext; t !== null; ) {
          var l = t.context;
          if (!al(
            Rl ? l._currentValue : l._currentValue2,
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
      function Vt(t) {
        return hf(Ee, t);
      }
      function au(t, l) {
        return Ee === null && ie(t), hf(t, l);
      }
      function hf(t, l) {
        var e = Rl ? l._currentValue : l._currentValue2;
        if (l = { context: l, memoizedValue: e, next: null }, jl === null) {
          if (t === null) throw Error(o(308));
          jl = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
        } else jl = jl.next = l;
        return e;
      }
      function Nn() {
        return {
          controller: new Gv(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function ha(t) {
        t.refCount--, t.refCount === 0 && Xv(Zv, function() {
          t.controller.abort();
        });
      }
      function Mn() {
        var t = ze.current;
        return t !== null ? t : St.pooledCache;
      }
      function uu(t, l) {
        l === null ? N(ze, ze.current) : N(ze, l.pool);
      }
      function Sf() {
        var t = Mn();
        return t === null ? null : {
          parent: Rl ? Mt._currentValue : Mt._currentValue2,
          pool: t
        };
      }
      function wt(t) {
        t.flags |= 4;
      }
      function Ef(t, l) {
        if (t !== null && t.child === l.child) return !1;
        if ((l.flags & 16) !== 0) return !0;
        for (t = l.child; t !== null; ) {
          if ((t.flags & 13878) !== 0 || (t.subtreeFlags & 13878) !== 0)
            return !0;
          t = t.sibling;
        }
        return !1;
      }
      function gn(t, l, e, a) {
        if (Gt)
          for (e = l.child; e !== null; ) {
            if (e.tag === 5 || e.tag === 6)
              ec(t, e.stateNode);
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
              e && a && (n = Ns(
                n,
                u.type,
                u.memoizedProps
              )), ec(t, n);
            } else if (u.tag === 6)
              n = u.stateNode, e && a && (n = Ms(
                n,
                u.memoizedProps
              )), ec(t, n);
            else if (u.tag !== 4) {
              if (u.tag === 22 && u.memoizedState !== null)
                n = u.child, n !== null && (n.return = u), gn(t, u, !0, !0);
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
      function zf(t, l, e, a) {
        if (wl)
          for (var u = l.child; u !== null; ) {
            if (u.tag === 5) {
              var n = u.stateNode;
              e && a && (n = Ns(
                n,
                u.type,
                u.memoizedProps
              )), Ts(t, n);
            } else if (u.tag === 6)
              n = u.stateNode, e && a && (n = Ms(
                n,
                u.memoizedProps
              )), Ts(t, n);
            else if (u.tag !== 4) {
              if (u.tag === 22 && u.memoizedState !== null)
                n = u.child, n !== null && (n.return = u), zf(
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
      function _f(t, l) {
        if (wl && Ef(t, l)) {
          t = l.stateNode;
          var e = t.containerInfo, a = _s();
          zf(a, l, !1, !1), t.pendingChildren = a, wt(l), ev(e, a);
        }
      }
      function Hn(t, l, e, a) {
        if (Gt)
          t.memoizedProps !== a && wt(l);
        else if (wl) {
          var u = t.stateNode, n = t.memoizedProps;
          if ((t = Ef(t, l)) || n !== a) {
            var f = Qt.current;
            n = lv(
              u,
              e,
              n,
              a,
              !t,
              null
            ), n === u ? l.stateNode = u : (ys(
              n,
              e,
              a,
              f
            ) && wt(l), l.stateNode = n, t ? gn(n, l, !1, !1) : wt(l));
          } else l.stateNode = u;
        }
      }
      function On(t, l, e) {
        if (Um(l, e)) {
          if (t.flags |= 16777216, !Ss(l, e))
            if (Lf()) t.flags |= 8192;
            else
              throw Le = _u, rc;
        } else t.flags &= -16777217;
      }
      function Tf(t, l) {
        if (Mv(l)) {
          if (t.flags |= 16777216, !qs(l))
            if (Lf()) t.flags |= 8192;
            else
              throw Le = _u, rc;
        } else t.flags &= -16777217;
      }
      function nu(t, l) {
        l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? k() : 536870912, t.lanes |= l, ke |= l);
      }
      function Sa(t, l) {
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
      function bt(t) {
        var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
        if (l)
          for (var u = t.child; u !== null; )
            e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 31457280, a |= u.flags & 31457280, u.return = t, u = u.sibling;
        else
          for (u = t.child; u !== null; )
            e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = t, u = u.sibling;
        return t.subtreeFlags |= a, t.childLanes = e, l;
      }
      function wo(t, l, e) {
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
            return bt(l), null;
          case 1:
            return bt(l), null;
          case 3:
            return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Hl(Mt), Ut(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (ca(l) ? wt(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, rl !== null && (Vn(rl), rl = null))), _f(t, l), bt(l), null;
          case 26:
            if (il) {
              e = l.type;
              var u = l.memoizedState;
              return t === null ? (wt(l), u !== null ? (bt(l), Tf(
                l,
                u
              )) : (bt(l), On(
                l,
                e,
                a
              ))) : u ? u !== t.memoizedState ? (wt(l), bt(l), Tf(
                l,
                u
              )) : (bt(l), l.flags &= -16777217) : (Gt ? t.memoizedProps !== a && wt(l) : Hn(
                t,
                l,
                e,
                a
              ), bt(l), On(
                l,
                e,
                a
              )), null;
            }
          case 27:
            if (Xt) {
              if (Xa(l), e = Il.current, u = l.type, t !== null && l.stateNode != null)
                Gt ? t.memoizedProps !== a && wt(l) : Hn(
                  t,
                  l,
                  u,
                  a
                );
              else {
                if (!a) {
                  if (l.stateNode === null)
                    throw Error(o(166));
                  return bt(l), null;
                }
                t = Qt.current, ca(l) ? ai(l, t) : (t = Bs(
                  u,
                  a,
                  e,
                  t,
                  !0
                ), l.stateNode = t, wt(l));
              }
              return bt(l), null;
            }
          case 5:
            if (Xa(l), e = l.type, t !== null && l.stateNode != null)
              Hn(t, l, e, a);
            else {
              if (!a) {
                if (l.stateNode === null)
                  throw Error(o(166));
                return bt(l), null;
              }
              t = Qt.current, ca(l) ? ai(l, t) : (u = Tm(
                e,
                a,
                Il.current,
                t,
                l
              ), gn(u, l, !1, !1), l.stateNode = u, ys(
                u,
                e,
                a,
                t
              ) && wt(l));
            }
            return bt(l), On(
              l,
              l.type,
              l.pendingProps
            ), null;
          case 6:
            if (t && l.stateNode != null)
              e = t.memoizedProps, Gt ? e !== a && wt(l) : wl && (e !== a ? (l.stateNode = rs(
                a,
                Il.current,
                Qt.current,
                l
              ), wt(l)) : l.stateNode = t.stateNode);
            else {
              if (typeof a != "string" && l.stateNode === null)
                throw Error(o(166));
              if (t = Il.current, e = Qt.current, ca(l)) {
                if (!cl) throw Error(o(176));
                if (t = l.stateNode, e = l.memoizedProps, a = null, u = Jt, u !== null)
                  switch (u.tag) {
                    case 27:
                    case 5:
                      a = u.memoizedProps;
                  }
                dv(
                  t,
                  e,
                  l,
                  a
                ) || ne(l);
              } else
                l.stateNode = rs(
                  a,
                  t,
                  e,
                  l
                );
            }
            return bt(l), null;
          case 13:
            if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
              if (u = ca(l), a !== null && a.dehydrated !== null) {
                if (t === null) {
                  if (!u) throw Error(o(318));
                  if (!cl) throw Error(o(344));
                  if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
                  pv(u, l);
                } else
                  ia(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
                bt(l), u = !1;
              } else
                rl !== null && (Vn(rl), rl = null), u = !0;
              if (!u)
                return l.flags & 256 ? (Nl(l), l) : (Nl(l), null);
            }
            if (Nl(l), (l.flags & 128) !== 0)
              return l.lanes = e, l;
            if (e = a !== null, t = t !== null && t.memoizedState !== null, e) {
              a = l.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool);
              var n = null;
              a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048);
            }
            return e !== t && e && (l.child.flags |= 8192), nu(l, l.updateQueue), bt(l), null;
          case 4:
            return Ut(), _f(t, l), t === null && Mm(l.stateNode.containerInfo), bt(l), null;
          case 10:
            return Hl(l.type), bt(l), null;
          case 19:
            if (g(jt), u = l.memoizedState, u === null)
              return bt(l), null;
            if (a = (l.flags & 128) !== 0, n = u.rendering, n === null)
              if (a) Sa(u, !1);
              else {
                if (Ht !== 0 || t !== null && (t.flags & 128) !== 0)
                  for (t = l.child; t !== null; ) {
                    if (n = Pa(t), n !== null) {
                      for (l.flags |= 128, Sa(u, !1), t = n.updateQueue, l.updateQueue = t, nu(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                        es(e, t), e = e.sibling;
                      return N(
                        jt,
                        jt.current & 1 | 2
                      ), l.child;
                    }
                    t = t.sibling;
                  }
                u.tail !== null && yl() > ja && (l.flags |= 128, a = !0, Sa(u, !1), l.lanes = 4194304);
              }
            else {
              if (!a)
                if (t = Pa(n), t !== null) {
                  if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, nu(l, t), Sa(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !ot)
                    return bt(l), null;
                } else
                  2 * yl() - u.renderingStartTime > ja && e !== 536870912 && (l.flags |= 128, a = !0, Sa(u, !1), l.lanes = 4194304);
              u.isBackwards ? (n.sibling = l.child, l.child = n) : (t = u.last, t !== null ? t.sibling = n : l.child = n, u.last = n);
            }
            return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = yl(), l.sibling = null, t = jt.current, N(
              jt,
              a ? t & 1 | 2 : t & 1
            ), l) : (bt(l), null);
          case 22:
          case 23:
            return Nl(l), Pu(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (bt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : bt(l), e = l.updateQueue, e !== null && nu(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && g(ze), null;
          case 24:
            return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Hl(Mt), bt(l), null;
          case 25:
            return null;
        }
        throw Error(o(156, l.tag));
      }
      function Io(t, l) {
        switch (Tt(l), l.tag) {
          case 1:
            return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
          case 3:
            return Hl(Mt), Ut(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
          case 26:
          case 27:
          case 5:
            return Xa(l), null;
          case 13:
            if (Nl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
              if (l.alternate === null)
                throw Error(o(340));
              ia();
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
            return Nl(l), Pu(), t !== null && g(ze), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
          case 24:
            return Hl(Mt), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function bf(t, l) {
        switch (Tt(l), l.tag) {
          case 3:
            Hl(Mt), Ut();
            break;
          case 26:
          case 27:
          case 5:
            Xa(l);
            break;
          case 4:
            Ut();
            break;
          case 13:
            Nl(l);
            break;
          case 19:
            g(jt);
            break;
          case 10:
            Hl(l.type);
            break;
          case 22:
          case 23:
            Nl(l), Pu(), t !== null && g(ze);
            break;
          case 24:
            Hl(Mt);
        }
      }
      function Ea(t, l) {
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
        } catch (m) {
          pt(l, l.return, m);
        }
      }
      function xl(t, l, e) {
        try {
          var a = l.updateQueue, u = a !== null ? a.lastEffect : null;
          if (u !== null) {
            var n = u.next;
            a = n;
            do {
              if ((a.tag & t) === t) {
                var f = a.inst, m = f.destroy;
                if (m !== void 0) {
                  f.destroy = void 0, u = l;
                  var p = e;
                  try {
                    m();
                  } catch (T) {
                    pt(
                      u,
                      p,
                      T
                    );
                  }
                }
              }
              a = a.next;
            } while (a !== n);
          }
        } catch (T) {
          pt(l, l.return, T);
        }
      }
      function Nf(t) {
        var l = t.updateQueue;
        if (l !== null) {
          var e = t.stateNode;
          try {
            mi(l, e);
          } catch (a) {
            pt(t, t.return, a);
          }
        }
      }
      function Mf(t, l, e) {
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
                var u = Ta(a);
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
      function gf(t) {
        var l = t.type, e = t.memoizedProps, a = t.stateNode;
        try {
          xm(a, l, e, t);
        } catch (u) {
          pt(t, t.return, u);
        }
      }
      function Hf(t, l, e) {
        try {
          Jm(
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
      function Of(t) {
        return t.tag === 5 || t.tag === 3 || (il ? t.tag === 26 : !1) || (Xt ? t.tag === 27 : !1) || t.tag === 4;
      }
      function Un(t) {
        t: for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || Of(t.return)) return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && (!Xt || t.tag !== 27) && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & 2)) return t.stateNode;
        }
      }
      function Rn(t, l, e) {
        var a = t.tag;
        if (a === 5 || a === 6)
          t = t.stateNode, l ? Wm(e, t, l) : Zm(e, t);
        else if (!(a === 4 || Xt && a === 27) && (t = t.child, t !== null))
          for (Rn(t, l, e), t = t.sibling; t !== null; )
            Rn(t, l, e), t = t.sibling;
      }
      function cu(t, l, e) {
        var a = t.tag;
        if (a === 5 || a === 6)
          t = t.stateNode, l ? Lm(e, t, l) : Xm(e, t);
        else if (!(a === 4 || Xt && a === 27) && (t = t.child, t !== null))
          for (cu(t, l, e), t = t.sibling; t !== null; )
            cu(t, l, e), t = t.sibling;
      }
      function Uf(t, l, e) {
        t = t.containerInfo;
        try {
          bs(t, e);
        } catch (a) {
          pt(l, l.return, a);
        }
      }
      function $o(t, l) {
        for (zm(t.containerInfo), qt = l; qt !== null; )
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
                    } catch (m) {
                      pt(
                        a,
                        a.return,
                        m
                      );
                    }
                  }
                  break;
                case 3:
                  (l & 1024) !== 0 && Gt && tv(t.stateNode.containerInfo);
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
      function Rf(t, l, e) {
        var a = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Ol(t, e), a & 4 && Ea(5, e);
            break;
          case 1:
            if (Ol(t, e), a & 4)
              if (t = e.stateNode, l === null)
                try {
                  t.componentDidMount();
                } catch (m) {
                  pt(e, e.return, m);
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
                } catch (m) {
                  pt(
                    e,
                    e.return,
                    m
                  );
                }
              }
            a & 64 && Nf(e), a & 512 && fe(e, e.return);
            break;
          case 3:
            if (Ol(t, e), a & 64 && (a = e.updateQueue, a !== null)) {
              if (t = null, e.child !== null)
                switch (e.child.tag) {
                  case 27:
                  case 5:
                    t = Ta(e.child.stateNode);
                    break;
                  case 1:
                    t = e.child.stateNode;
                }
              try {
                mi(a, t);
              } catch (m) {
                pt(e, e.return, m);
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
            Ol(t, e), l === null && a & 4 && gf(e), a & 512 && fe(e, e.return);
            break;
          case 12:
            Ol(t, e);
            break;
          case 13:
            Ol(t, e), a & 4 && Df(t, e);
            break;
          case 22:
            if (u = e.memoizedState !== null || Cl, !u) {
              l = l !== null && l.memoizedState !== null || gt;
              var n = Cl, f = gt;
              Cl = u, (gt = l) && !f ? Jl(
                t,
                e,
                (e.subtreeFlags & 8772) !== 0
              ) : Ol(t, e), Cl = n, gt = f;
            }
            a & 512 && (e.memoizedProps.mode === "manual" ? fe(e, e.return) : It(e, e.return));
            break;
          default:
            Ol(t, e);
        }
      }
      function Af(t) {
        var l = t.alternate;
        l !== null && (t.alternate = null, Af(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && Om(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
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
            el.onCommitFiberUnmount(Ma, e);
          } catch {
          }
        switch (e.tag) {
          case 26:
            if (il) {
              gt || It(e, l), pl(
                t,
                l,
                e
              ), e.memoizedState ? Ds(e.memoizedState) : e.stateNode && Cs(e.stateNode);
              break;
            }
          case 27:
            if (Xt) {
              gt || It(e, l);
              var a = Dt, u = ul;
              Dt = e.stateNode, pl(
                t,
                l,
                e
              ), Uv(e.stateNode), Dt = a, ul = u;
              break;
            }
          case 5:
            gt || It(e, l);
          case 6:
            if (Gt) {
              if (a = Dt, u = ul, Dt = null, pl(
                t,
                l,
                e
              ), Dt = a, ul = u, Dt !== null)
                if (ul)
                  try {
                    Pm(Dt, e.stateNode);
                  } catch (n) {
                    pt(
                      e,
                      l,
                      n
                    );
                  }
                else
                  try {
                    Fm(Dt, e.stateNode);
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
            Gt && Dt !== null && (ul ? Ev(
              Dt,
              e.stateNode
            ) : Sv(Dt, e.stateNode));
            break;
          case 4:
            Gt ? (a = Dt, u = ul, Dt = e.stateNode.containerInfo, ul = !0, pl(
              t,
              l,
              e
            ), Dt = a, ul = u) : (wl && Uf(
              e.stateNode,
              e,
              _s()
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
            gt || xl(2, e, l), gt || xl(4, e, l), pl(
              t,
              l,
              e
            );
            break;
          case 1:
            gt || (It(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && Mf(
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
            hv(t);
          } catch (e) {
            pt(l, l.return, e);
          }
      }
      function ko(t) {
        switch (t.tag) {
          case 13:
          case 19:
            var l = t.stateNode;
            return l === null && (l = t.stateNode = new xs()), l;
          case 22:
            return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new xs()), l;
          default:
            throw Error(o(435, t.tag));
        }
      }
      function Dn(t, l) {
        var e = ko(t);
        l.forEach(function(a) {
          var u = im.bind(null, t, a);
          e.has(a) || (e.add(a), a.then(u, u));
        });
      }
      function Ft(t, l) {
        var e = l.deletions;
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var u = e[a], n = t, f = l;
            if (Gt) {
              var m = f;
              t: for (; m !== null; ) {
                switch (m.tag) {
                  case 27:
                  case 5:
                    Dt = m.stateNode, ul = !1;
                    break t;
                  case 3:
                    Dt = m.stateNode.containerInfo, ul = !0;
                    break t;
                  case 4:
                    Dt = m.stateNode.containerInfo, ul = !0;
                    break t;
                }
                m = m.return;
              }
              if (Dt === null) throw Error(o(160));
              An(n, f, u), Dt = null, ul = !1;
            } else An(n, f, u);
            n = u.alternate, n !== null && (n.return = null), u.return = null;
          }
        if (l.subtreeFlags & 13878)
          for (l = l.child; l !== null; )
            jf(l, t), l = l.sibling;
      }
      function jf(t, l) {
        var e = t.alternate, a = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Ft(l, t), $t(t), a & 4 && (xl(3, t, t.return), Ea(3, t), xl(5, t, t.return));
            break;
          case 1:
            Ft(l, t), $t(t), a & 512 && (gt || e === null || It(e, e.return)), a & 64 && Cl && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
            break;
          case 26:
            if (il) {
              var u = hl;
              Ft(l, t), $t(t), a & 512 && (gt || e === null || It(e, e.return)), a & 4 && (a = e !== null ? e.memoizedState : null, l = t.memoizedState, e === null ? l === null ? t.stateNode === null ? t.stateNode = Tv(
                u,
                t.type,
                t.memoizedProps,
                t
              ) : js(
                u,
                t.type,
                t.stateNode
              ) : t.stateNode = As(
                u,
                l,
                t.memoizedProps
              ) : a !== l ? (a === null ? e.stateNode !== null && Cs(e.stateNode) : Ds(a), l === null ? js(
                u,
                t.type,
                t.stateNode
              ) : As(
                u,
                l,
                t.memoizedProps
              )) : l === null && t.stateNode !== null && Hf(
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
                Hv(u), Ov(
                  t.type,
                  n,
                  u,
                  t
                );
              } catch (R) {
                pt(t, t.return, R);
              }
            }
          case 5:
            if (Ft(l, t), $t(t), a & 512 && (gt || e === null || It(e, e.return)), Gt) {
              if (t.flags & 32) {
                l = t.stateNode;
                try {
                  zs(l);
                } catch (R) {
                  pt(t, t.return, R);
                }
              }
              a & 4 && t.stateNode != null && (l = t.memoizedProps, Hf(
                t,
                l,
                e !== null ? e.memoizedProps : l
              )), a & 1024 && (zc = !0);
            }
            break;
          case 6:
            if (Ft(l, t), $t(t), a & 4 && Gt) {
              if (t.stateNode === null)
                throw Error(o(162));
              a = t.memoizedProps, e = e !== null ? e.memoizedProps : a, l = t.stateNode;
              try {
                Km(l, e, a);
              } catch (R) {
                pt(t, t.return, R);
              }
            }
            break;
          case 3:
            if (il ? (Nv(), u = hl, hl = cc(l.containerInfo), Ft(l, t), hl = u) : Ft(l, t), $t(t), a & 4) {
              if (Gt && cl && e !== null && e.memoizedState.isDehydrated)
                try {
                  rv(l.containerInfo);
                } catch (R) {
                  pt(t, t.return, R);
                }
              if (wl) {
                a = l.containerInfo, e = l.pendingChildren;
                try {
                  bs(a, e);
                } catch (R) {
                  pt(t, t.return, R);
                }
              }
            }
            zc && (zc = !1, Cf(t));
            break;
          case 4:
            il ? (e = hl, hl = cc(
              t.stateNode.containerInfo
            ), Ft(l, t), $t(t), hl = e) : (Ft(l, t), $t(t)), a & 4 && wl && Uf(
              t.stateNode,
              t,
              t.stateNode.pendingChildren
            );
            break;
          case 12:
            Ft(l, t), $t(t);
            break;
          case 13:
            Ft(l, t), $t(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Nc = yl()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Dn(t, a)));
            break;
          case 22:
            a & 512 && (gt || e === null || It(e, e.return)), u = t.memoizedState !== null;
            var f = e !== null && e.memoizedState !== null, m = Cl, p = gt;
            if (Cl = m || u, gt = p || f, Ft(l, t), gt = p, Cl = m, $t(t), l = t.stateNode, l._current = t, l._visibility &= -3, l._visibility |= l._pendingVisibility & 2, a & 8192 && (l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (l = Cl || gt, e === null || f || l || Re(t)), Gt && (t.memoizedProps === null || t.memoizedProps.mode !== "manual"))) {
              t: if (e = null, Gt)
                for (l = t; ; ) {
                  if (l.tag === 5 || il && l.tag === 26 || Xt && l.tag === 27) {
                    if (e === null) {
                      f = e = l;
                      try {
                        n = f.stateNode, u ? wm(n) : $m(
                          f.stateNode,
                          f.memoizedProps
                        );
                      } catch (R) {
                        pt(f, f.return, R);
                      }
                    }
                  } else if (l.tag === 6) {
                    if (e === null) {
                      f = l;
                      try {
                        var T = f.stateNode;
                        u ? Im(T) : km(T, f.memoizedProps);
                      } catch (R) {
                        pt(f, f.return, R);
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
            if (Gt && (!Xt || t.tag !== 27)) {
              t: {
                for (var e = t.return; e !== null; ) {
                  if (Of(e)) {
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
                    var u = a.stateNode, n = Un(t);
                    cu(
                      t,
                      n,
                      u
                    );
                    break;
                  }
                case 5:
                  var f = a.stateNode;
                  a.flags & 32 && (zs(f), a.flags &= -33);
                  var m = Un(t);
                  cu(t, m, f);
                  break;
                case 3:
                case 4:
                  var p = a.stateNode.containerInfo, T = Un(t);
                  Rn(
                    t,
                    T,
                    p
                  );
                  break;
                default:
                  throw Error(o(161));
              }
            }
          } catch (R) {
            pt(t, t.return, R);
          }
          t.flags &= -3;
        }
        l & 4096 && (t.flags &= -4097);
      }
      function Cf(t) {
        if (t.subtreeFlags & 1024)
          for (t = t.child; t !== null; ) {
            var l = t;
            Cf(l), l.tag === 5 && l.flags & 1024 && Dm(l.stateNode), t = t.sibling;
          }
      }
      function Ol(t, l) {
        if (l.subtreeFlags & 8772)
          for (l = l.child; l !== null; )
            Rf(t, l.alternate, l), l = l.sibling;
      }
      function Re(t) {
        for (t = t.child; t !== null; ) {
          var l = t;
          switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              xl(4, l, l.return), Re(l);
              break;
            case 1:
              It(l, l.return);
              var e = l.stateNode;
              typeof e.componentWillUnmount == "function" && Mf(
                l,
                l.return,
                e
              ), Re(l);
              break;
            case 26:
            case 27:
            case 5:
              It(l, l.return), Re(l);
              break;
            case 22:
              It(l, l.return), l.memoizedState === null && Re(l);
              break;
            default:
              Re(l);
          }
          t = t.sibling;
        }
      }
      function Jl(t, l, e) {
        for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
          var a = l.alternate, u = t, n = l, f = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              Jl(
                u,
                n,
                e
              ), Ea(4, n);
              break;
            case 1:
              if (Jl(
                u,
                n,
                e
              ), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
                try {
                  u.componentDidMount();
                } catch (T) {
                  pt(a, a.return, T);
                }
              if (a = n, u = a.updateQueue, u !== null) {
                var m = a.stateNode;
                try {
                  var p = u.shared.hiddenCallbacks;
                  if (p !== null)
                    for (u.shared.hiddenCallbacks = null, u = 0; u < p.length; u++)
                      oi(p[u], m);
                } catch (T) {
                  pt(a, a.return, T);
                }
              }
              e && f & 64 && Nf(n), fe(n, n.return);
              break;
            case 26:
            case 27:
            case 5:
              Jl(
                u,
                n,
                e
              ), e && a === null && f & 4 && gf(n), fe(n, n.return);
              break;
            case 12:
              Jl(
                u,
                n,
                e
              );
              break;
            case 13:
              Jl(
                u,
                n,
                e
              ), e && f & 4 && Df(u, n);
              break;
            case 22:
              n.memoizedState === null && Jl(
                u,
                n,
                e
              ), fe(n, n.return);
              break;
            default:
              Jl(
                u,
                n,
                e
              );
          }
          l = l.sibling;
        }
      }
      function jn(t, l) {
        var e = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && ha(e));
      }
      function Cn(t, l) {
        t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && ha(t));
      }
      function Ll(t, l, e, a) {
        if (l.subtreeFlags & 10256)
          for (l = l.child; l !== null; )
            qf(
              t,
              l,
              e,
              a
            ), l = l.sibling;
      }
      function qf(t, l, e, a) {
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
            ), u & 2048 && Ea(9, l);
            break;
          case 3:
            Ll(
              t,
              l,
              e,
              a
            ), u & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && ha(t)));
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
                var n = l.memoizedProps, f = n.id, m = n.onPostCommit;
                typeof m == "function" && m(
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
            ) : za(
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
            )), u & 2048 && jn(
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
            ), u & 2048 && Cn(l.alternate, l);
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
          var n = t, f = l, m = e, p = a, T = f.flags;
          switch (f.tag) {
            case 0:
            case 11:
            case 15:
              Ae(
                n,
                f,
                m,
                p,
                u
              ), Ea(8, f);
              break;
            case 23:
              break;
            case 22:
              var R = f.stateNode;
              f.memoizedState !== null ? R._visibility & 4 ? Ae(
                n,
                f,
                m,
                p,
                u
              ) : za(
                n,
                f
              ) : (R._visibility |= 4, Ae(
                n,
                f,
                m,
                p,
                u
              )), u && T & 2048 && jn(
                f.alternate,
                f
              );
              break;
            case 24:
              Ae(
                n,
                f,
                m,
                p,
                u
              ), u && T & 2048 && Cn(f.alternate, f);
              break;
            default:
              Ae(
                n,
                f,
                m,
                p,
                u
              );
          }
          l = l.sibling;
        }
      }
      function za(t, l) {
        if (l.subtreeFlags & 10256)
          for (l = l.child; l !== null; ) {
            var e = t, a = l, u = a.flags;
            switch (a.tag) {
              case 22:
                za(e, a), u & 2048 && jn(
                  a.alternate,
                  a
                );
                break;
              case 24:
                za(e, a), u & 2048 && Cn(
                  a.alternate,
                  a
                );
                break;
              default:
                za(e, a);
            }
            l = l.sibling;
          }
      }
      function se(t) {
        if (t.subtreeFlags & Ie)
          for (t = t.child; t !== null; )
            Bf(t), t = t.sibling;
      }
      function Bf(t) {
        switch (t.tag) {
          case 26:
            se(t), t.flags & Ie && (t.memoizedState !== null ? gv(
              hl,
              t.memoizedState,
              t.memoizedProps
            ) : Es(t.type, t.memoizedProps));
            break;
          case 5:
            se(t), t.flags & Ie && Es(t.type, t.memoizedProps);
            break;
          case 3:
          case 4:
            if (il) {
              var l = hl;
              hl = cc(
                t.stateNode.containerInfo
              ), se(t), hl = l;
            } else se(t);
            break;
          case 22:
            t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = Ie, Ie = 16777216, se(t), Ie = l) : se(t));
            break;
          default:
            se(t);
        }
      }
      function Yf(t) {
        var l = t.alternate;
        if (l !== null && (t = l.child, t !== null)) {
          l.child = null;
          do
            l = t.sibling, t.sibling = null, t = l;
          while (t !== null);
        }
      }
      function _a(t) {
        var l = t.deletions;
        if ((t.flags & 16) !== 0) {
          if (l !== null)
            for (var e = 0; e < l.length; e++) {
              var a = l[e];
              qt = a, Vf(
                a,
                t
              );
            }
          Yf(t);
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
            _a(t), t.flags & 2048 && xl(9, t, t.return);
            break;
          case 3:
            _a(t);
            break;
          case 12:
            _a(t);
            break;
          case 22:
            var l = t.stateNode;
            t.memoizedState !== null && l._visibility & 4 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -5, iu(t)) : _a(t);
            break;
          default:
            _a(t);
        }
      }
      function iu(t) {
        var l = t.deletions;
        if ((t.flags & 16) !== 0) {
          if (l !== null)
            for (var e = 0; e < l.length; e++) {
              var a = l[e];
              qt = a, Vf(
                a,
                t
              );
            }
          Yf(t);
        }
        for (t = t.child; t !== null; ) {
          switch (l = t, l.tag) {
            case 0:
            case 11:
            case 15:
              xl(8, l, l.return), iu(l);
              break;
            case 22:
              e = l.stateNode, e._visibility & 4 && (e._visibility &= -5, iu(l));
              break;
            default:
              iu(l);
          }
          t = t.sibling;
        }
      }
      function Vf(t, l) {
        for (; qt !== null; ) {
          var e = qt;
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              xl(8, e, l);
              break;
            case 23:
            case 22:
              if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                var a = e.memoizedState.cachePool.pool;
                a != null && a.refCount++;
              }
              break;
            case 24:
              ha(e.memoizedState.cache);
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
      function qn(t) {
        var l = hs(t);
        if (l != null) {
          if (typeof l.memoizedProps["data-testname"] != "string")
            throw Error(o(364));
          return l;
        }
        if (t = qm(t), t === null) throw Error(o(362));
        return t.stateNode.current;
      }
      function Bn(t, l) {
        var e = t.tag;
        switch (l.$$typeof) {
          case gu:
            if (t.type === l.value) return !0;
            break;
          case Hu:
            t: {
              for (l = l.value, t = [t, 0], e = 0; e < t.length; ) {
                var a = t[e++], u = a.tag, n = t[e++], f = l[n];
                if (u !== 5 && u !== 26 && u !== 27 || !Na(a)) {
                  for (; f != null && Bn(a, f); )
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
          case Ou:
            if ((e === 5 || e === 26 || e === 27) && Qm(t.stateNode, l.value))
              return !0;
            break;
          case Ru:
            if ((e === 5 || e === 6 || e === 26 || e === 27) && (t = Ym(t), t !== null && 0 <= t.indexOf(l.value)))
              return !0;
            break;
          case Uu:
            if ((e === 5 || e === 26 || e === 27) && (t = t.memoizedProps["data-testname"], typeof t == "string" && t.toLowerCase() === l.value.toLowerCase()))
              return !0;
            break;
          default:
            throw Error(o(365));
        }
        return !1;
      }
      function Yn(t) {
        switch (t.$$typeof) {
          case gu:
            return "<" + (j(t.value) || "Unknown") + ">";
          case Hu:
            return ":has(" + (Yn(t) || "") + ")";
          case Ou:
            return '[role="' + t.value + '"]';
          case Ru:
            return '"' + t.value + '"';
          case Uu:
            return '[data-testname="' + t.value + '"]';
          default:
            throw Error(o(365));
        }
      }
      function Gf(t, l) {
        var e = [];
        t = [t, 0];
        for (var a = 0; a < t.length; ) {
          var u = t[a++], n = u.tag, f = t[a++], m = l[f];
          if (n !== 5 && n !== 26 && n !== 27 || !Na(u)) {
            for (; m != null && Bn(u, m); )
              f++, m = l[f];
            if (f === l.length) e.push(u);
            else
              for (u = u.child; u !== null; )
                t.push(u, f), u = u.sibling;
          }
        }
        return e;
      }
      function Qn(t, l) {
        if (!ba) throw Error(o(363));
        t = qn(t), t = Gf(t, l), l = [], t = Array.from(t);
        for (var e = 0; e < t.length; ) {
          var a = t[e++], u = a.tag;
          if (u === 5 || u === 26 || u === 27)
            Na(a) || l.push(a.stateNode);
          else
            for (a = a.child; a !== null; )
              t.push(a), a = a.sibling;
        }
        return l;
      }
      function kt() {
        if ((rt & 2) !== 0 && ft !== 0)
          return ft & -ft;
        if (F.T !== null) {
          var t = xe;
          return t !== 0 ? t : xu();
        }
        return gm();
      }
      function Xf() {
        vl === 0 && (vl = (ft & 536870912) === 0 || ot ? it() : 536870912);
        var t = ml.current;
        return t !== null && (t.flags |= 32), vl;
      }
      function xt(t, l, e) {
        (t === St && Et === 2 || t.cancelPendingCommit !== null) && (De(t, 0), Ul(
          t,
          ft,
          vl,
          !1
        )), I(t, e), ((rt & 2) === 0 || t !== St) && (t === St && ((rt & 2) === 0 && (_e |= e), Ht === 4 && Ul(
          t,
          ft,
          vl,
          !1
        )), El(t));
      }
      function Zf(t, l, e) {
        if ((rt & 6) !== 0) throw Error(o(327));
        var a = !e && (l & 60) === 0 && (l & t.expiredLanes) === 0 || V(t, l), u = a ? em(t, l) : Zn(t, l, !0), n = a;
        do {
          if (u === 0) {
            $e && !a && Ul(t, l, 0, !1);
            break;
          } else if (u === 6)
            Ul(
              t,
              l,
              0,
              !ql
            );
          else {
            if (e = t.current.alternate, n && !tm(e)) {
              u = Zn(t, l, !1), n = !1;
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
                  var m = t;
                  u = Da;
                  var p = cl && m.current.memoizedState.isDehydrated;
                  if (p && (De(m, f).flags |= 256), f = Zn(
                    m,
                    f,
                    !1
                  ), f !== 2) {
                    if (_c && !p) {
                      m.errorRecoveryDisabledLanes |= n, _e |= n, u = 4;
                      break t;
                    }
                    n = bl, bl = u, n !== null && Vn(n);
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
                      vl,
                      !ql
                    );
                    break t;
                  }
                  break;
                case 2:
                  bl = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(o(329));
              }
              if (a.finishedWork = e, a.finishedLanes = l, (l & 62914560) === l && (n = Nc + 300 - yl(), 10 < n)) {
                if (Ul(
                  a,
                  l,
                  vl,
                  !ql
                ), K(a, 0) !== 0) break t;
                a.timeoutHandle = bm(
                  Kf.bind(
                    null,
                    a,
                    e,
                    bl,
                    Au,
                    bc,
                    l,
                    vl,
                    _e,
                    ke,
                    ql,
                    2,
                    -0,
                    0
                  ),
                  n
                );
                break t;
              }
              Kf(
                a,
                e,
                bl,
                Au,
                bc,
                l,
                vl,
                _e,
                ke,
                ql,
                0,
                -0,
                0
              );
            }
          }
          break;
        } while (!0);
        El(t);
      }
      function Vn(t) {
        bl === null ? bl = t : bl.push.apply(
          bl,
          t
        );
      }
      function Kf(t, l, e, a, u, n, f, m, p, T, R, C, q) {
        var w = l.subtreeFlags;
        if ((w & 8192 || (w & 16785408) === 16785408) && (Rm(), Bf(l), l = Am(), l !== null)) {
          t.cancelPendingCommit = l(
            $f.bind(
              null,
              t,
              e,
              a,
              u,
              f,
              m,
              p,
              1,
              C,
              q
            )
          ), Ul(t, n, f, !T);
          return;
        }
        $f(
          t,
          e,
          a,
          u,
          f,
          m,
          p,
          R,
          C,
          q
        );
      }
      function tm(t) {
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
        l &= ~Tc, l &= ~_e, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
        for (var u = l; 0 < u; ) {
          var n = 31 - ll(u), f = 1 << n;
          a[n] = -1, u &= ~f;
        }
        e !== 0 && $(t, e, l);
      }
      function xf() {
        return (rt & 6) === 0 ? (Oe(0), !1) : !0;
      }
      function Gn() {
        if (nt !== null) {
          if (Et === 0)
            var t = nt.return;
          else
            t = nt, jl = Ee = null, tn(t), We = null, Ua = 0, t = nt;
          for (; t !== null; )
            bf(t.alternate, t), t = t.return;
          nt = null;
        }
      }
      function De(t, l) {
        t.finishedWork = null, t.finishedLanes = 0;
        var e = t.timeoutHandle;
        e !== ac && (t.timeoutHandle = ac, Nm(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Gn(), St = t, nt = e = Wl(t.current, null), ft = l, Et = 0, nl = null, ql = !1, $e = V(t, l), _c = !1, ke = vl = Tc = _e = le = Ht = 0, bl = Da = null, bc = !1, (l & 8) !== 0 && (l |= l & 32);
        var a = t.entangledLanes;
        if (a !== 0)
          for (t = t.entanglements, a &= l; 0 < a; ) {
            var u = 31 - ll(a), n = 1 << u;
            l |= t[u], a &= ~n;
          }
        return Bl = l, Za(), e;
      }
      function Jf(t, l) {
        lt = null, F.H = Tl, l === Oa ? (l = pi(), Et = 3) : l === rc ? (l = pi(), Et = 4) : Et = l === Zs ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, nl = l, nt === null && (Ht = 1, lu(
          t,
          Q(l, t.current)
        ));
      }
      function Lf() {
        var t = ml.current;
        return t === null ? !0 : (ft & 4194176) === ft ? _l === null : (ft & 62914560) === ft || (ft & 536870912) !== 0 ? t === _l : !1;
      }
      function Wf() {
        var t = F.H;
        return F.H = Tl, t === null ? Tl : t;
      }
      function Ff() {
        var t = F.A;
        return F.A = Kv, t;
      }
      function Xn() {
        Ht = 4, ql || (ft & 4194176) !== ft && ml.current !== null || ($e = !0), (le & 134217727) === 0 && (_e & 134217727) === 0 || St === null || Ul(
          St,
          ft,
          vl,
          !1
        );
      }
      function Zn(t, l, e) {
        var a = rt;
        rt |= 2;
        var u = Wf(), n = Ff();
        (St !== t || ft !== l) && (Au = null, De(t, l)), l = !1;
        var f = Ht;
        t: do
          try {
            if (Et !== 0 && nt !== null) {
              var m = nt, p = nl;
              switch (Et) {
                case 8:
                  Gn(), f = 6;
                  break t;
                case 3:
                case 2:
                case 6:
                  ml.current === null && (l = !0);
                  var T = Et;
                  if (Et = 0, nl = null, je(t, m, p, T), e && $e) {
                    f = 0;
                    break t;
                  }
                  break;
                default:
                  T = Et, Et = 0, nl = null, je(t, m, p, T);
              }
            }
            lm(), f = Ht;
            break;
          } catch (R) {
            Jf(t, R);
          }
        while (!0);
        return l && t.shellSuspendCounter++, jl = Ee = null, rt = a, F.H = u, F.A = n, nt === null && (St = null, ft = 0, Za()), f;
      }
      function lm() {
        for (; nt !== null; ) Pf(nt);
      }
      function em(t, l) {
        var e = rt;
        rt |= 2;
        var a = Wf(), u = Ff();
        St !== t || ft !== l ? (Au = null, ja = yl() + 500, De(t, l)) : $e = V(
          t,
          l
        );
        t: do
          try {
            if (Et !== 0 && nt !== null) {
              l = nt;
              var n = nl;
              l: switch (Et) {
                case 1:
                  Et = 0, nl = null, je(t, l, n, 1);
                  break;
                case 2:
                  if (vi(n)) {
                    Et = 0, nl = null, wf(l);
                    break;
                  }
                  l = function() {
                    Et === 2 && St === t && (Et = 7), El(t);
                  }, n.then(l, l);
                  break t;
                case 3:
                  Et = 7;
                  break t;
                case 4:
                  Et = 5;
                  break t;
                case 7:
                  vi(n) ? (Et = 0, nl = null, wf(l)) : (Et = 0, nl = null, je(t, l, n, 7));
                  break;
                case 5:
                  var f = null;
                  switch (nt.tag) {
                    case 26:
                      f = nt.memoizedState;
                    case 5:
                    case 27:
                      var m = nt, p = m.type, T = m.pendingProps;
                      if (f ? qs(f) : Ss(p, T)) {
                        Et = 0, nl = null;
                        var R = m.sibling;
                        if (R !== null) nt = R;
                        else {
                          var C = m.return;
                          C !== null ? (nt = C, fu(C)) : nt = null;
                        }
                        break l;
                      }
                  }
                  Et = 0, nl = null, je(t, l, n, 5);
                  break;
                case 6:
                  Et = 0, nl = null, je(t, l, n, 6);
                  break;
                case 8:
                  Gn(), Ht = 6;
                  break t;
                default:
                  throw Error(o(462));
              }
            }
            am();
            break;
          } catch (q) {
            Jf(t, q);
          }
        while (!0);
        return jl = Ee = null, F.H = a, F.A = u, rt = e, nt !== null ? 0 : (St = null, ft = 0, Za(), Ht);
      }
      function am() {
        for (; nt !== null && !Dv(); )
          Pf(nt);
      }
      function Pf(t) {
        var l = rf(
          t.alternate,
          t,
          Bl
        );
        t.memoizedProps = t.pendingProps, l === null ? fu(t) : nt = l;
      }
      function wf(t) {
        var l = t, e = l.alternate;
        switch (l.tag) {
          case 15:
          case 0:
            l = of(
              e,
              l,
              l.pendingProps,
              l.type,
              void 0,
              ft
            );
            break;
          case 11:
            l = of(
              e,
              l,
              l.pendingProps,
              l.type.render,
              l.ref,
              ft
            );
            break;
          case 5:
            tn(l);
          default:
            bf(e, l), l = nt = es(l, Bl), l = rf(e, l, Bl);
        }
        t.memoizedProps = t.pendingProps, l === null ? fu(t) : nt = l;
      }
      function je(t, l, e, a) {
        jl = Ee = null, tn(l), We = null, Ua = 0;
        var u = l.return;
        try {
          if (Fo(
            t,
            u,
            l,
            e,
            ft
          )) {
            Ht = 1, lu(
              t,
              Q(e, t.current)
            ), nt = null;
            return;
          }
        } catch (n) {
          if (u !== null) throw nt = u, n;
          Ht = 1, lu(
            t,
            Q(e, t.current)
          ), nt = null;
          return;
        }
        l.flags & 32768 ? (ot || a === 1 ? t = !0 : $e || (ft & 536870912) !== 0 ? t = !1 : (ql = t = !0, (a === 2 || a === 3 || a === 6) && (a = ml.current, a !== null && a.tag === 13 && (a.flags |= 16384))), If(l, t)) : fu(l);
      }
      function fu(t) {
        var l = t;
        do {
          if ((l.flags & 32768) !== 0) {
            If(
              l,
              ql
            );
            return;
          }
          t = l.return;
          var e = wo(
            l.alternate,
            l,
            Bl
          );
          if (e !== null) {
            nt = e;
            return;
          }
          if (l = l.sibling, l !== null) {
            nt = l;
            return;
          }
          nt = l = t;
        } while (l !== null);
        Ht === 0 && (Ht = 5);
      }
      function If(t, l) {
        do {
          var e = Io(t.alternate, t);
          if (e !== null) {
            e.flags &= 32767, nt = e;
            return;
          }
          if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
            nt = t;
            return;
          }
          nt = t = e;
        } while (t !== null);
        Ht = 6, nt = null;
      }
      function $f(t, l, e, a, u, n, f, m, p, T) {
        var R = F.T, C = ve();
        try {
          Pt(2), F.T = null, um(
            t,
            l,
            e,
            a,
            C,
            u,
            n,
            f,
            m,
            p,
            T
          );
        } finally {
          F.T = R, Pt(C);
        }
      }
      function um(t, l, e, a, u, n, f, m) {
        do
          oe();
        while (Te !== null);
        if ((rt & 6) !== 0) throw Error(o(327));
        var p = t.finishedWork;
        if (a = t.finishedLanes, p === null) return null;
        if (t.finishedWork = null, t.finishedLanes = 0, p === t.current) throw Error(o(177));
        t.callbackNode = null, t.callbackPriority = 0, t.cancelPendingCommit = null;
        var T = p.lanes | p.childLanes;
        if (T |= mc, Kt(
          t,
          a,
          T,
          n,
          f,
          m
        ), t === St && (nt = St = null, ft = 0), (p.subtreeFlags & 10256) === 0 && (p.flags & 10256) === 0 || Du || (Du = !0, Mc = T, gc = e, fm(sc, function() {
          return oe(), null;
        })), e = (p.flags & 15990) !== 0, (p.subtreeFlags & 15990) !== 0 || e ? (e = F.T, F.T = null, n = ve(), Pt(2), f = rt, rt |= 4, $o(t, p), jf(p, t), _m(t.containerInfo), t.current = p, Rf(t, p.alternate, p), jv(), rt = f, Pt(n), F.T = e) : t.current = p, Du ? (Du = !1, Te = t, Ca = a) : kf(t, T), T = t.pendingLanes, T === 0 && (ee = null), S(p.stateNode), El(t), l !== null)
          for (u = t.onRecoverableError, p = 0; p < l.length; p++)
            T = l[p], u(T.value, {
              componentStack: T.stack
            });
        return (Ca & 3) !== 0 && oe(), T = t.pendingLanes, (a & 4194218) !== 0 && (T & 42) !== 0 ? t === Hc ? qa++ : (qa = 0, Hc = t) : qa = 0, Oe(0), null;
      }
      function kf(t, l) {
        (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, ha(l)));
      }
      function oe() {
        if (Te !== null) {
          var t = Te, l = Mc;
          Mc = 0;
          var e = Nt(Ca), a = 32 > e ? 32 : e;
          e = F.T;
          var u = ve();
          try {
            if (Pt(a), F.T = null, Te === null)
              var n = !1;
            else {
              a = gc, gc = null;
              var f = Te, m = Ca;
              if (Te = null, Ca = 0, (rt & 6) !== 0)
                throw Error(o(331));
              var p = rt;
              if (rt |= 4, Qf(f.current), qf(
                f,
                f.current,
                m,
                a
              ), rt = p, Oe(0, !1), el && typeof el.onPostCommitFiberRoot == "function")
                try {
                  el.onPostCommitFiberRoot(Ma, f);
                } catch {
                }
              n = !0;
            }
            return n;
          } finally {
            Pt(u), F.T = e, kf(t, l);
          }
        }
        return !1;
      }
      function ts(t, l, e) {
        l = Q(e, l), l = dn(t.stateNode, l, 2), t = Gl(t, l, 2), t !== null && (I(t, 2), El(t));
      }
      function pt(t, l, e) {
        if (t.tag === 3)
          ts(t, t, e);
        else
          for (; l !== null; ) {
            if (l.tag === 3) {
              ts(
                l,
                t,
                e
              );
              break;
            } else if (l.tag === 1) {
              var a = l.stateNode;
              if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ee === null || !ee.has(a))) {
                t = Q(e, t), e = ef(2), a = Gl(l, e, 2), a !== null && (af(
                  e,
                  a,
                  l,
                  t
                ), I(a, 2), El(a));
                break;
              }
            }
            l = l.return;
          }
      }
      function Kn(t, l, e) {
        var a = t.pingCache;
        if (a === null) {
          a = t.pingCache = new xv();
          var u = /* @__PURE__ */ new Set();
          a.set(l, u);
        } else
          u = a.get(l), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(l, u));
        u.has(e) || (_c = !0, u.add(e), t = nm.bind(null, t, l, e), l.then(t, t));
      }
      function nm(t, l, e) {
        var a = t.pingCache;
        a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, St === t && (ft & e) === e && (Ht === 4 || Ht === 3 && (ft & 62914560) === ft && 300 > yl() - Nc ? (rt & 2) === 0 && De(t, 0) : Tc |= e, ke === ft && (ke = 0)), El(t);
      }
      function ls(t, l) {
        l === 0 && (l = k()), t = Ql(t, l), t !== null && (I(t, l), El(t));
      }
      function cm(t) {
        var l = t.memoizedState, e = 0;
        l !== null && (e = l.retryLane), ls(t, e);
      }
      function im(t, l) {
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
        a !== null && a.delete(l), ls(t, e);
      }
      function fm(t, l) {
        return yu(t, l);
      }
      function sm(t, l, e, a) {
        this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function xn(t) {
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
      function es(t, l) {
        t.flags &= 31457282;
        var e = t.alternate;
        return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }), t;
      }
      function su(t, l, e, a, u, n) {
        var f = 0;
        if (a = t, typeof t == "function") xn(t) && (f = 1);
        else if (typeof t == "string")
          f = il && Xt ? Us(t, e, Qt.current) ? 26 : Ys(t) ? 27 : 5 : il ? Us(
            t,
            e,
            Qt.current
          ) ? 26 : 5 : Xt && Ys(t) ? 27 : 5;
        else
          t: switch (t) {
            case qe:
              return me(
                e.children,
                u,
                n,
                l
              );
            case ss:
              f = 8, u |= 24;
              break;
            case Pn:
              return t = s(12, e, l, u | 2), t.elementType = Pn, t.lanes = n, t;
            case In:
              return t = s(13, e, l, u), t.elementType = In, t.lanes = n, t;
            case $n:
              return t = s(19, e, l, u), t.elementType = $n, t.lanes = n, t;
            case ms:
              return as(e, u, n, l);
            default:
              if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                  case dm:
                  case Fl:
                    f = 10;
                    break t;
                  case os:
                    f = 9;
                    break t;
                  case wn:
                    f = 11;
                    break t;
                  case kn:
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
      function me(t, l, e, a) {
        return t = s(7, t, a, l), t.lanes = e, t;
      }
      function as(t, l, e, a) {
        t = s(22, t, a, l), t.elementType = ms, t.lanes = e;
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
              var f = Ql(n, 2);
              f !== null && (u._pendingVisibility |= 2, xt(f, n, 2));
            }
          },
          attach: function() {
            var n = u._current;
            if (n === null) throw Error(o(456));
            if ((u._pendingVisibility & 2) !== 0) {
              var f = Ql(n, 2);
              f !== null && (u._pendingVisibility &= -3, xt(f, n, 2));
            }
          }
        };
        return t.stateNode = u, t;
      }
      function Jn(t, l, e) {
        return t = s(6, t, null, l), t.lanes = e, t;
      }
      function Ln(t, l, e) {
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
      function om(t, l, e, a, u, n, f, m) {
        this.tag = 1, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ac, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = P(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = P(0), this.hiddenUpdates = P(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function us(t, l, e, a, u, n, f, m, p, T, R, C) {
        return t = new om(
          t,
          l,
          e,
          f,
          m,
          p,
          T,
          C
        ), l = 1, n === !0 && (l |= 24), n = s(3, null, null, l), t.current = n, n.stateNode = t, l = Nn(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
          element: a,
          isDehydrated: e,
          cache: l
        }, Ju(n), t;
      }
      function ns(t) {
        return t ? (t = Qe, t) : Qe;
      }
      function cs(t) {
        var l = t._reactInternals;
        if (l === void 0)
          throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
        return t = D(l), t = t !== null ? G(t) : null, t === null ? null : Ta(t.stateNode);
      }
      function is(t, l, e, a, u, n) {
        u = ns(u), a.context === null ? a.context = u : a.pendingContext = u, a = Vl(l), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = Gl(t, a, l), e !== null && (xt(e, t, l), sa(e, t, l));
      }
      function fs(t, l) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
          var e = t.retryLane;
          t.retryLane = e !== 0 && e < l ? e : l;
        }
      }
      function Wn(t, l) {
        fs(t, l), (t = t.alternate) && fs(t, l);
      }
      var ut = {}, mm = Me, tl = fd(), Fn = Object.assign, vm = Symbol.for("react.element"), ou = Symbol.for("react.transitional.element"), Ce = Symbol.for("react.portal"), qe = Symbol.for("react.fragment"), ss = Symbol.for("react.strict_mode"), Pn = Symbol.for("react.profiler"), dm = Symbol.for("react.provider"), os = Symbol.for("react.consumer"), Fl = Symbol.for("react.context"), wn = Symbol.for("react.forward_ref"), In = Symbol.for("react.suspense"), $n = Symbol.for("react.suspense_list"), kn = Symbol.for("react.memo"), Pl = Symbol.for("react.lazy"), ms = Symbol.for("react.offscreen"), pm = Symbol.for("react.memo_cache_sentinel"), vs = Symbol.iterator, ym = Symbol.for("react.client.reference"), F = mm.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, tc, ds, lc = !1, mu = Array.isArray, rm = i.rendererVersion, hm = i.rendererPackageName, ps = i.extraDevToolsConfig, Ta = i.getPublicInstance, Sm = i.getRootHostContext, Em = i.getChildHostContext, zm = i.prepareForCommit, _m = i.resetAfterCommit, Tm = i.createInstance, ec = i.appendInitialChild, ys = i.finalizeInitialChildren, vu = i.shouldSetTextContent, rs = i.createTextInstance, bm = i.scheduleTimeout, Nm = i.cancelTimeout, ac = i.noTimeout, Rl = i.isPrimaryRenderer;
      i.warnsIfNotActing;
      var Gt = i.supportsMutation, wl = i.supportsPersistence, cl = i.supportsHydration, hs = i.getInstanceFromNode;
      i.beforeActiveInstanceBlur, i.afterActiveInstanceBlur;
      var Mm = i.preparePortalMount;
      i.prepareScopeUpdate, i.getInstanceFromScope;
      var Pt = i.setCurrentUpdatePriority, ve = i.getCurrentUpdatePriority, gm = i.resolveUpdatePriority;
      i.resolveEventType, i.resolveEventTimeStamp;
      var Hm = i.shouldAttemptEagerTransition, Om = i.detachDeletedInstance;
      i.requestPostPaintCallback;
      var Um = i.maySuspendCommit, Ss = i.preloadInstance, Rm = i.startSuspendingCommit, Es = i.suspendInstance, Am = i.waitForCommitToBeReady, Be = i.NotPendingTransition, de = i.HostTransitionContext, Dm = i.resetFormInstance;
      i.bindToConsole;
      var jm = i.supportsMicrotasks, Cm = i.scheduleMicrotask, ba = i.supportsTestSelectors, qm = i.findFiberRoot, Bm = i.getBoundingRect, Ym = i.getTextContent, Na = i.isHiddenSubtree, Qm = i.matchAccessibilityRole, Vm = i.setFocusIfFocusable, Gm = i.setupIntersectionObserver, Xm = i.appendChild, Zm = i.appendChildToContainer, Km = i.commitTextUpdate, xm = i.commitMount, Jm = i.commitUpdate, Lm = i.insertBefore, Wm = i.insertInContainerBefore, Fm = i.removeChild, Pm = i.removeChildFromContainer, zs = i.resetTextContent, wm = i.hideInstance, Im = i.hideTextInstance, $m = i.unhideInstance, km = i.unhideTextInstance, tv = i.clearContainer, lv = i.cloneInstance, _s = i.createContainerChildSet, Ts = i.appendChildToContainerChildSet, ev = i.finalizeContainerChildren, bs = i.replaceContainerChildren, Ns = i.cloneHiddenInstance, Ms = i.cloneHiddenTextInstance, uc = i.isSuspenseInstancePending, nc = i.isSuspenseInstanceFallback, av = i.getSuspenseInstanceFallbackErrorDetails, uv = i.registerSuspenseInstanceRetry, nv = i.canHydrateFormStateMarker, cv = i.isFormStateMarkerMatching, gs = i.getNextHydratableSibling, Hs = i.getFirstHydratableChild, iv = i.getFirstHydratableChildWithinContainer, fv = i.getFirstHydratableChildWithinSuspenseInstance, sv = i.canHydrateInstance, ov = i.canHydrateTextInstance, mv = i.canHydrateSuspenseInstance, vv = i.hydrateInstance, dv = i.hydrateTextInstance, pv = i.hydrateSuspenseInstance, yv = i.getNextHydratableInstanceAfterSuspenseInstance, rv = i.commitHydratedContainer, hv = i.commitHydratedSuspenseInstance, Sv = i.clearSuspenseBoundary, Ev = i.clearSuspenseBoundaryFromContainer, Os = i.shouldDeleteUnhydratedTailInstances;
      i.diffHydratedPropsForDevWarnings, i.diffHydratedTextForDevWarnings, i.describeHydratableInstanceForDevWarnings;
      var zv = i.validateHydratableInstance, _v = i.validateHydratableTextInstance, il = i.supportsResources, Us = i.isHostHoistableType, cc = i.getHoistableRoot, Rs = i.getResource, As = i.acquireResource, Ds = i.releaseResource, Tv = i.hydrateHoistable, js = i.mountHoistable, Cs = i.unmountHoistable, bv = i.createHoistableInstance, Nv = i.prepareToCommitHoistables, Mv = i.mayResourceSuspendCommit, qs = i.preloadResource, gv = i.suspendResource, Xt = i.supportsSingletons, Bs = i.resolveSingletonInstance, Hv = i.clearSingleton, Ov = i.acquireSingletonInstance, Uv = i.releaseSingletonInstance, Ys = i.isHostSingletonType, ic = [], Ye = -1, Qe = {}, ll = Math.clz32 ? Math.clz32 : Y, Rv = Math.log, Av = Math.LN2, du = 128, pu = 4194304, yu = tl.unstable_scheduleCallback, fc = tl.unstable_cancelCallback, Dv = tl.unstable_shouldYield, jv = tl.unstable_requestPaint, yl = tl.unstable_now, Qs = tl.unstable_ImmediatePriority, Cv = tl.unstable_UserBlockingPriority, sc = tl.unstable_NormalPriority, qv = tl.unstable_IdlePriority, Bv = tl.log, Yv = tl.unstable_setDisableYieldValue, Ma = null, el = null, al = typeof Object.is == "function" ? Object.is : A, Vs = /* @__PURE__ */ new WeakMap(), Ve = [], Ge = 0, ru = null, hu = 0, fl = [], sl = 0, pe = null, Al = 1, Dl = "", Qt = Z(null), ga = Z(null), Il = Z(null), Su = Z(null), Jt = null, Zt = null, ot = !1, rl = null, zl = !1, oc = Error(o(519)), ol = [], Xe = 0, mc = 0, Eu = null, Ze = null, vc = !1, zu = !1, dc = !1, Ke = 0, Ha = null, pc = 0, xe = 0, Je = null, $l = !1, yc = !1, Qv = Object.prototype.hasOwnProperty, Oa = Error(o(460)), rc = Error(o(474)), _u = { then: function() {
      } }, Le = null, We = null, Ua = 0, ye = ri(!0), Gs = ri(!1), Fe = Z(null), Tu = Z(0), ml = Z(null), _l = null, jt = Z(0), kl = 0, lt = null, yt = null, At = null, bu = !1, Pe = !1, re = !1, Nu = 0, Ra = 0, we = null, Vv = 0, hc = function() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }, Tl = {
        readContext: Vt,
        use: wa,
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
      Tl.useCacheRefresh = Ot, Tl.useMemoCache = Ot, Tl.useHostTransitionStatus = Ot, Tl.useFormState = Ot, Tl.useActionState = Ot, Tl.useOptimistic = Ot;
      var he = {
        readContext: Vt,
        use: wa,
        useCallback: function(t, l) {
          return Wt().memoizedState = [
            t,
            l === void 0 ? null : l
          ], t;
        },
        useContext: Vt,
        useEffect: Qi,
        useImperativeHandle: function(t, l, e) {
          e = e != null ? e.concat([t]) : null, $a(
            4194308,
            4,
            Xi.bind(null, l, t),
            e
          );
        },
        useLayoutEffect: function(t, l) {
          return $a(4194308, 4, t, l);
        },
        useInsertionEffect: function(t, l) {
          $a(4, 2, t, l);
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
          }, a.queue = t, t = t.dispatch = Wo.bind(
            null,
            lt,
            t
          ), [a.memoizedState, t];
        },
        useRef: function(t) {
          var l = Wt();
          return t = { current: t }, l.memoizedState = t;
        },
        useState: function(t) {
          t = un(t);
          var l = t.queue, e = wi.bind(
            null,
            lt,
            l
          );
          return l.dispatch = e, [t.memoizedState, e];
        },
        useDebugValue: fn,
        useDeferredValue: function(t, l) {
          var e = Wt();
          return sn(e, t, l);
        },
        useTransition: function() {
          var t = un(!1);
          return t = Li.bind(
            null,
            lt,
            t.queue,
            !0,
            !1
          ), Wt().memoizedState = t, [!1, t];
        },
        useSyncExternalStore: function(t, l, e) {
          var a = lt, u = Wt();
          if (ot) {
            if (e === void 0)
              throw Error(o(407));
            e = e();
          } else {
            if (e = l(), St === null)
              throw Error(o(349));
            (ft & 60) !== 0 || Ti(a, l, e);
          }
          u.memoizedState = e;
          var n = { value: e, getSnapshot: l };
          return u.queue = n, Qi(Ni.bind(null, a, n, t), [
            t
          ]), a.flags |= 2048, Ue(
            9,
            bi.bind(
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
            var e = Dl, a = Al;
            e = (a & ~(1 << 32 - ll(a) - 1)).toString(32) + e, l = ":" + l + "R" + e, e = Nu++, 0 < e && (l += "H" + e.toString(32)), l += ":";
          } else
            e = Vv++, l = ":" + l + "r" + e.toString(32) + ":";
          return t.memoizedState = l;
        },
        useCacheRefresh: function() {
          return Wt().memoizedState = Lo.bind(
            null,
            lt
          );
        }
      };
      he.useMemoCache = ln, he.useHostTransitionStatus = on, he.useFormState = ji, he.useActionState = ji, he.useOptimistic = function(t) {
        var l = Wt();
        l.memoizedState = l.baseState = t;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return l.queue = e, l = mn.bind(
          null,
          lt,
          !0,
          e
        ), e.dispatch = l, [t, l];
      };
      var te = {
        readContext: Vt,
        use: wa,
        useCallback: Ki,
        useContext: Vt,
        useEffect: cn,
        useImperativeHandle: Zi,
        useInsertionEffect: Vi,
        useLayoutEffect: Gi,
        useMemo: xi,
        useReducer: Ia,
        useRef: Yi,
        useState: function() {
          return Ia(Ml);
        },
        useDebugValue: fn,
        useDeferredValue: function(t, l) {
          var e = Rt();
          return Ji(
            e,
            yt.memoizedState,
            t,
            l
          );
        },
        useTransition: function() {
          var t = Ia(Ml)[0], l = Rt().memoizedState;
          return [
            typeof t == "boolean" ? t : da(t),
            l
          ];
        },
        useSyncExternalStore: _i,
        useId: Fi
      };
      te.useCacheRefresh = Pi, te.useMemoCache = ln, te.useHostTransitionStatus = on, te.useFormState = Ci, te.useActionState = Ci, te.useOptimistic = function(t, l) {
        var e = Rt();
        return Hi(e, yt, t, l);
      };
      var Se = {
        readContext: Vt,
        use: wa,
        useCallback: Ki,
        useContext: Vt,
        useEffect: cn,
        useImperativeHandle: Zi,
        useInsertionEffect: Vi,
        useLayoutEffect: Gi,
        useMemo: xi,
        useReducer: an,
        useRef: Yi,
        useState: function() {
          return an(Ml);
        },
        useDebugValue: fn,
        useDeferredValue: function(t, l) {
          var e = Rt();
          return yt === null ? sn(e, t, l) : Ji(
            e,
            yt.memoizedState,
            t,
            l
          );
        },
        useTransition: function() {
          var t = an(Ml)[0], l = Rt().memoizedState;
          return [
            typeof t == "boolean" ? t : da(t),
            l
          ];
        },
        useSyncExternalStore: _i,
        useId: Fi
      };
      Se.useCacheRefresh = Pi, Se.useMemoCache = ln, Se.useHostTransitionStatus = on, Se.useFormState = Bi, Se.useActionState = Bi, Se.useOptimistic = function(t, l) {
        var e = Rt();
        return yt !== null ? Hi(e, yt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
      };
      var Sc = {
        isMounted: function(t) {
          return (t = t._reactInternals) ? z(t) === t : !1;
        },
        enqueueSetState: function(t, l, e) {
          t = t._reactInternals;
          var a = kt(), u = Vl(a);
          u.payload = l, e != null && (u.callback = e), l = Gl(t, u, a), l !== null && (xt(l, t, a), sa(l, t, a));
        },
        enqueueReplaceState: function(t, l, e) {
          t = t._reactInternals;
          var a = kt(), u = Vl(a);
          u.tag = 1, u.payload = l, e != null && (u.callback = e), l = Gl(t, u, a), l !== null && (xt(l, t, a), sa(l, t, a));
        },
        enqueueForceUpdate: function(t, l) {
          t = t._reactInternals;
          var e = kt(), a = Vl(e);
          a.tag = 2, l != null && (a.callback = l), l = Gl(t, a, e), l !== null && (xt(l, t, e), sa(l, t, e));
        }
      }, Xs = typeof reportError == "function" ? reportError : function(t) {
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
      }, Zs = Error(o(461)), Ct = !1, Ec = { dehydrated: null, treeContext: null, retryLane: 0 }, Mu = Z(null), Ee = null, jl = null, Gv = typeof AbortController < "u" ? AbortController : function() {
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
      }, Xv = tl.unstable_scheduleCallback, Zv = tl.unstable_NormalPriority, Mt = {
        $$typeof: Fl,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      }, Ks = F.S;
      F.S = function(t, l) {
        typeof l == "object" && l !== null && typeof l.then == "function" && Xo(t, l), Ks !== null && Ks(t, l);
      };
      var ze = Z(null), Cl = !1, gt = !1, zc = !1, xs = typeof WeakSet == "function" ? WeakSet : Set, qt = null, Js = !1, Dt = null, ul = !1, hl = null, Ie = 8192, Kv = {
        getCacheForType: function(t) {
          var l = Vt(Mt), e = l.data.get(t);
          return e === void 0 && (e = t(), l.data.set(t, e)), e;
        }
      }, gu = 0, Hu = 1, Ou = 2, Uu = 3, Ru = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var Aa = Symbol.for;
        gu = Aa("selector.component"), Hu = Aa("selector.has_pseudo_class"), Ou = Aa("selector.role"), Uu = Aa("selector.test_id"), Ru = Aa("selector.text");
      }
      var xv = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, St = null, nt = null, ft = 0, Et = 0, nl = null, ql = !1, $e = !1, _c = !1, Bl = 0, Ht = 0, le = 0, _e = 0, Tc = 0, vl = 0, ke = 0, Da = null, bl = null, bc = !1, Nc = 0, ja = 1 / 0, Au = null, ee = null, Du = !1, Te = null, Ca = 0, Mc = 0, gc = null, qa = 0, Hc = null;
      return ut.attemptContinuousHydration = function(t) {
        if (t.tag === 13) {
          var l = Ql(t, 67108864);
          l !== null && xt(l, t, 67108864), Wn(t, 67108864);
        }
      }, ut.attemptHydrationAtCurrentPriority = function(t) {
        if (t.tag === 13) {
          var l = kt(), e = Ql(t, l);
          e !== null && xt(e, t, l), Wn(t, l);
        }
      }, ut.attemptSynchronousHydration = function(t) {
        switch (t.tag) {
          case 3:
            if (t = t.stateNode, t.current.memoizedState.isDehydrated) {
              var l = B(t.pendingLanes);
              if (l !== 0) {
                for (t.pendingLanes |= 2, t.entangledLanes |= 2; l; ) {
                  var e = 1 << 31 - ll(l);
                  t.entanglements[1] |= e, l &= ~e;
                }
                El(t), (rt & 6) === 0 && (ja = yl() + 500, Oe(0));
              }
            }
            break;
          case 13:
            l = Ql(t, 2), l !== null && xt(l, t, 2), xf(), Wn(t, 2);
        }
      }, ut.batchedUpdates = function(t, l) {
        return t(l);
      }, ut.createComponentSelector = function(t) {
        return { $$typeof: gu, value: t };
      }, ut.createContainer = function(t, l, e, a, u, n, f, m, p, T) {
        return us(
          t,
          l,
          !1,
          null,
          e,
          a,
          n,
          f,
          m,
          p,
          T,
          null
        );
      }, ut.createHasPseudoClassSelector = function(t) {
        return { $$typeof: Hu, value: t };
      }, ut.createHydrationContainer = function(t, l, e, a, u, n, f, m, p, T, R, C, q) {
        return t = us(
          e,
          a,
          !0,
          t,
          u,
          n,
          m,
          p,
          T,
          R,
          C,
          q
        ), t.context = ns(null), e = t.current, a = kt(), u = Vl(a), u.callback = l ?? null, Gl(e, u, a), t.current.lanes = a, I(t, a), El(t), t;
      }, ut.createPortal = function(t, l, e) {
        var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Ce,
          key: a == null ? null : "" + a,
          children: t,
          containerInfo: l,
          implementation: e
        };
      }, ut.createRoleSelector = function(t) {
        return { $$typeof: Ou, value: t };
      }, ut.createTestNameSelector = function(t) {
        return { $$typeof: Uu, value: t };
      }, ut.createTextSelector = function(t) {
        return { $$typeof: Ru, value: t };
      }, ut.defaultOnCaughtError = function(t) {
        console.error(t);
      }, ut.defaultOnRecoverableError = function(t) {
        Xs(t);
      }, ut.defaultOnUncaughtError = function(t) {
        Xs(t);
      }, ut.deferredUpdates = function(t) {
        var l = F.T, e = ve();
        try {
          return Pt(32), F.T = null, t();
        } finally {
          Pt(e), F.T = l;
        }
      }, ut.discreteUpdates = function(t, l, e, a, u) {
        var n = F.T, f = ve();
        try {
          return Pt(2), F.T = null, t(l, e, a, u);
        } finally {
          Pt(f), F.T = n, rt === 0 && (ja = yl() + 500);
        }
      }, ut.findAllNodes = Qn, ut.findBoundingRects = function(t, l) {
        if (!ba) throw Error(o(363));
        l = Qn(t, l), t = [];
        for (var e = 0; e < l.length; e++)
          t.push(Bm(l[e]));
        for (l = t.length - 1; 0 < l; l--) {
          e = t[l];
          for (var a = e.x, u = a + e.width, n = e.y, f = n + e.height, m = l - 1; 0 <= m; m--)
            if (l !== m) {
              var p = t[m], T = p.x, R = T + p.width, C = p.y, q = C + p.height;
              if (a >= T && n >= C && u <= R && f <= q) {
                t.splice(l, 1);
                break;
              } else if (a !== T || e.width !== p.width || q < n || C > f) {
                if (!(n !== C || e.height !== p.height || R < a || T > u)) {
                  T > a && (p.width += T - a, p.x = a), R < u && (p.width = u - T), t.splice(l, 1);
                  break;
                }
              } else {
                C > n && (p.height += C - n, p.y = n), q < f && (p.height = f - C), t.splice(l, 1);
                break;
              }
            }
        }
        return t;
      }, ut.findHostInstance = cs, ut.findHostInstanceWithNoPortals = function(t) {
        return t = D(t), t = t !== null ? X(t) : null, t === null ? null : Ta(t.stateNode);
      }, ut.findHostInstanceWithWarning = function(t) {
        return cs(t);
      }, ut.flushPassiveEffects = oe, ut.flushSyncFromReconciler = function(t) {
        var l = rt;
        rt |= 1;
        var e = F.T, a = ve();
        try {
          if (Pt(2), F.T = null, t)
            return t();
        } finally {
          Pt(a), F.T = e, rt = l, (rt & 6) === 0 && Oe(0);
        }
      }, ut.flushSyncWork = xf, ut.focusWithin = function(t, l) {
        if (!ba) throw Error(o(363));
        for (t = qn(t), l = Gf(t, l), l = Array.from(l), t = 0; t < l.length; ) {
          var e = l[t++], a = e.tag;
          if (!Na(e)) {
            if ((a === 5 || a === 26 || a === 27) && Vm(e.stateNode))
              return !0;
            for (e = e.child; e !== null; )
              l.push(e), e = e.sibling;
          }
        }
        return !1;
      }, ut.getFindAllNodesFailureDescription = function(t, l) {
        if (!ba) throw Error(o(363));
        var e = 0, a = [];
        t = [qn(t), 0];
        for (var u = 0; u < t.length; ) {
          var n = t[u++], f = n.tag, m = t[u++], p = l[m];
          if ((f !== 5 && f !== 26 && f !== 27 || !Na(n)) && (Bn(n, p) && (a.push(Yn(p)), m++, m > e && (e = m)), m < l.length))
            for (n = n.child; n !== null; )
              t.push(n, m), n = n.sibling;
        }
        if (e < l.length) {
          for (t = []; e < l.length; e++)
            t.push(Yn(l[e]));
          return `findAllNodes was able to match part of the selector:
  ` + (a.join(" > ") + `

No matching component was found for:
  `) + t.join(" > ");
        }
        return null;
      }, ut.getPublicRootInstance = function(t) {
        if (t = t.current, !t.child) return null;
        switch (t.child.tag) {
          case 27:
          case 5:
            return Ta(t.child.stateNode);
          default:
            return t.child.stateNode;
        }
      }, ut.injectIntoDevTools = function() {
        var t = {
          bundleType: 0,
          version: rm,
          rendererPackageName: hm,
          currentDispatcherRef: F,
          findFiberByHostInstance: hs,
          reconcilerVersion: "19.0.0"
        };
        if (ps !== null && (t.rendererConfig = ps), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") t = !1;
        else {
          var l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (l.isDisabled || !l.supportsFiber) t = !0;
          else {
            try {
              Ma = l.inject(t), el = l;
            } catch {
            }
            t = !!l.checkDCE;
          }
        }
        return t;
      }, ut.isAlreadyRendering = function() {
        return !1;
      }, ut.observeVisibleRects = function(t, l, e, a) {
        if (!ba) throw Error(o(363));
        t = Qn(t, l);
        var u = Gm(
          t,
          e,
          a
        ).disconnect;
        return {
          disconnect: function() {
            u();
          }
        };
      }, ut.shouldError = function() {
        return null;
      }, ut.shouldSuspend = function() {
        return !1;
      }, ut.startHostTransition = function(t, l, e, a) {
        if (t.tag !== 5) throw Error(o(476));
        var u = Wi(t).queue;
        Li(
          t,
          u,
          l,
          Be,
          e === null ? v : function() {
            var n = Wi(t).next.queue;
            return pa(
              t,
              n,
              {},
              kt()
            ), e(a);
          }
        );
      }, ut.updateContainer = function(t, l, e, a) {
        var u = l.current, n = kt();
        return is(
          u,
          n,
          t,
          l,
          e,
          a
        ), n;
      }, ut.updateContainerSync = function(t, l, e, a) {
        return l.tag === 0 && oe(), is(
          l.current,
          2,
          t,
          l,
          e,
          a
        ), 2;
      }, ut;
    }, c.exports.default = c.exports, Object.defineProperty(c.exports, "__esModule", { value: !0 });
  }(Cc)), Cc.exports;
}
var ao;
function od() {
  return ao || (ao = 1, jc.exports = sd()), jc.exports;
}
var md = od();
const vd = /* @__PURE__ */ ho(md);
var Yc = { exports: {} }, Qc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uo;
function dd() {
  return uo || (uo = 1, function(c) {
    function i(S, O) {
      var A = S.length;
      S.push(O);
      t: for (; 0 < A; ) {
        var Q = A - 1 >>> 1, J = S[Q];
        if (0 < o(J, O))
          S[Q] = O, S[A] = J, A = Q;
        else break t;
      }
    }
    function s(S) {
      return S.length === 0 ? null : S[0];
    }
    function v(S) {
      if (S.length === 0) return null;
      var O = S[0], A = S.pop();
      if (A !== O) {
        S[0] = A;
        t: for (var Q = 0, J = S.length, tt = J >>> 1; Q < tt; ) {
          var ct = 2 * (Q + 1) - 1, Tt = S[ct], at = ct + 1, Ut = S[at];
          if (0 > o(Tt, A))
            at < J && 0 > o(Ut, Tt) ? (S[Q] = Ut, S[at] = A, Q = at) : (S[Q] = Tt, S[ct] = A, Q = ct);
          else if (at < J && 0 > o(Ut, A))
            S[Q] = Ut, S[at] = A, Q = at;
          else break t;
        }
      }
      return O;
    }
    function o(S, O) {
      var A = S.sortIndex - O.sortIndex;
      return A !== 0 ? A : S.id - O.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      c.unstable_now = function() {
        return E.now();
      };
    } else {
      var j = Date, _ = j.now();
      c.unstable_now = function() {
        return j.now() - _;
      };
    }
    var r = [], H = [], b = 1, z = null, M = 3, D = !1, G = !1, X = !1, Z = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    function Y(S) {
      for (var O = s(H); O !== null; ) {
        if (O.callback === null) v(H);
        else if (O.startTime <= S)
          v(H), O.sortIndex = O.expirationTime, i(r, O);
        else break;
        O = s(H);
      }
    }
    function B(S) {
      if (X = !1, Y(S), !G)
        if (s(r) !== null)
          G = !0, dt();
        else {
          var O = s(H);
          O !== null && Nt(B, O.startTime - S);
        }
    }
    var K = !1, V = -1, et = 5, it = -1;
    function k() {
      return !(c.unstable_now() - it < et);
    }
    function P() {
      if (K) {
        var S = c.unstable_now();
        it = S;
        var O = !0;
        try {
          t: {
            G = !1, X && (X = !1, g(V), V = -1), D = !0;
            var A = M;
            try {
              l: {
                for (Y(S), z = s(r); z !== null && !(z.expirationTime > S && k()); ) {
                  var Q = z.callback;
                  if (typeof Q == "function") {
                    z.callback = null, M = z.priorityLevel;
                    var J = Q(
                      z.expirationTime <= S
                    );
                    if (S = c.unstable_now(), typeof J == "function") {
                      z.callback = J, Y(S), O = !0;
                      break l;
                    }
                    z === s(r) && v(r), Y(S);
                  } else v(r);
                  z = s(r);
                }
                if (z !== null) O = !0;
                else {
                  var tt = s(H);
                  tt !== null && Nt(
                    B,
                    tt.startTime - S
                  ), O = !1;
                }
              }
              break t;
            } finally {
              z = null, M = A, D = !1;
            }
            O = void 0;
          }
        } finally {
          O ? I() : K = !1;
        }
      }
    }
    var I;
    if (typeof N == "function")
      I = function() {
        N(P);
      };
    else if (typeof MessageChannel < "u") {
      var Kt = new MessageChannel(), $ = Kt.port2;
      Kt.port1.onmessage = P, I = function() {
        $.postMessage(null);
      };
    } else
      I = function() {
        Z(P, 0);
      };
    function dt() {
      K || (K = !0, I());
    }
    function Nt(S, O) {
      V = Z(function() {
        S(c.unstable_now());
      }, O);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, c.unstable_continueExecution = function() {
      G || D || (G = !0, dt());
    }, c.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : et = 0 < S ? Math.floor(1e3 / S) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, c.unstable_getFirstCallbackNode = function() {
      return s(r);
    }, c.unstable_next = function(S) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = M;
      }
      var A = M;
      M = O;
      try {
        return S();
      } finally {
        M = A;
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
      var A = M;
      M = S;
      try {
        return O();
      } finally {
        M = A;
      }
    }, c.unstable_scheduleCallback = function(S, O, A) {
      var Q = c.unstable_now();
      switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? Q + A : Q) : A = Q, S) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return J = A + J, S = {
        id: b++,
        callback: O,
        priorityLevel: S,
        startTime: A,
        expirationTime: J,
        sortIndex: -1
      }, A > Q ? (S.sortIndex = A, i(H, S), s(r) === null && S === s(H) && (X ? (g(V), V = -1) : X = !0, Nt(B, A - Q))) : (S.sortIndex = J, i(r, S), G || D || (G = !0, dt())), S;
    }, c.unstable_shouldYield = k, c.unstable_wrapCallback = function(S) {
      var O = M;
      return function() {
        var A = M;
        M = O;
        try {
          return S.apply(this, arguments);
        } finally {
          M = A;
        }
      };
    };
  }(Qc)), Qc;
}
var no;
function pd() {
  return no || (no = 1, Yc.exports = dd()), Yc.exports;
}
var co = pd();
const yd = (c) => typeof c == "object" && typeof c.then == "function", Ne = [];
function So(c, i, s = (v, o) => v === o) {
  if (c === i) return !0;
  if (!c || !i) return !1;
  const v = c.length;
  if (i.length !== v) return !1;
  for (let o = 0; o < v; o++) if (!s(c[o], i[o])) return !1;
  return !0;
}
function Eo(c, i = null, s = !1, v = {}) {
  i === null && (i = [c]);
  for (const E of Ne)
    if (So(i, E.keys, E.equal)) {
      if (s) return;
      if (Object.prototype.hasOwnProperty.call(E, "error")) throw E.error;
      if (Object.prototype.hasOwnProperty.call(E, "response"))
        return v.lifespan && v.lifespan > 0 && (E.timeout && clearTimeout(E.timeout), E.timeout = setTimeout(E.remove, v.lifespan)), E.response;
      if (!s) throw E.promise;
    }
  const o = {
    keys: i,
    equal: v.equal,
    remove: () => {
      const E = Ne.indexOf(o);
      E !== -1 && Ne.splice(E, 1);
    },
    promise: (
      // Execute the promise
      (yd(c) ? c : c(...i)).then((E) => {
        o.response = E, v.lifespan && v.lifespan > 0 && (o.timeout = setTimeout(o.remove, v.lifespan));
      }).catch((E) => o.error = E)
    )
  };
  if (Ne.push(o), !s) throw o.promise;
}
const rd = (c, i, s) => Eo(c, i, !1, s), hd = (c, i, s) => void Eo(c, i, !0, s), Sd = (c) => {
  if (c === void 0 || c.length === 0) Ne.splice(0, Ne.length);
  else {
    const i = Ne.find((s) => So(c, s.keys, s.equal));
    i && i.remove();
  }
};
function kc(c, i, s) {
  if (!c) return;
  if (s(c) === !0) return c;
  let v = i ? c.return : c.child;
  for (; v; ) {
    const o = kc(v, i, s);
    if (o) return o;
    v = i ? null : v.sibling;
  }
}
function zo(c) {
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
const ti = /* @__PURE__ */ zo(/* @__PURE__ */ st.createContext(null));
class _o extends st.Component {
  render() {
    return /* @__PURE__ */ st.createElement(ti.Provider, { value: this._reactInternals }, this.props.children);
  }
}
function To() {
  const c = st.useContext(ti);
  if (c === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const i = st.useId();
  return st.useMemo(() => {
    for (const s of [c, c?.alternate]) {
      if (!s) continue;
      const v = kc(s, !1, (o) => {
        let E = o.memoizedState;
        for (; E; ) {
          if (E.memoizedState === i) return !0;
          E = E.next;
        }
      });
      if (v) return v;
    }
  }, [c, i]);
}
const Ed = Symbol.for("react.context"), zd = (c) => c !== null && typeof c == "object" && "$$typeof" in c && c.$$typeof === Ed;
function _d() {
  const c = To(), [i] = st.useState(() => /* @__PURE__ */ new Map());
  i.clear();
  let s = c;
  for (; s; ) {
    const v = s.type;
    zd(v) && v !== ti && !i.has(v) && i.set(v, st.use(zo(v))), s = s.return;
  }
  return i;
}
function Td() {
  const c = _d();
  return st.useMemo(
    () => Array.from(c.keys()).reduce(
      (i, s) => (v) => /* @__PURE__ */ st.createElement(i, null, /* @__PURE__ */ st.createElement(s.Provider, { ...v, value: c.get(s) })),
      (i) => /* @__PURE__ */ st.createElement(_o, { ...i })
    ),
    [c]
  );
}
function bo(c) {
  let i = c.root;
  for (; i.getState().previousRoot; ) i = i.getState().previousRoot;
  return i;
}
const No = (c) => c && c.isOrthographicCamera, bd = (c) => c && c.hasOwnProperty("current"), Nd = (c) => c != null && (typeof c == "string" || typeof c == "number" || c.isColor), Ga = /* @__PURE__ */ ((c, i) => typeof window < "u" && (((c = window.document) == null ? void 0 : c.createElement) || ((i = window.navigator) == null ? void 0 : i.product) === "ReactNative"))() ? st.useLayoutEffect : st.useEffect;
function Mo(c) {
  const i = st.useRef(c);
  return Ga(() => void (i.current = c), [c]), i;
}
function Md() {
  const c = To(), i = Td();
  return st.useMemo(() => ({
    children: s
  }) => {
    const o = !!kc(c, !0, (E) => E.type === st.StrictMode) ? st.StrictMode : st.Fragment;
    return /* @__PURE__ */ ht(o, {
      children: /* @__PURE__ */ ht(i, {
        children: s
      })
    });
  }, [c, i]);
}
function gd({
  set: c
}) {
  return Ga(() => (c(new Promise(() => null)), () => c(!1)), [c]), null;
}
const Hd = /* @__PURE__ */ ((c) => (c = class extends st.Component {
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
function go(c) {
  var i;
  const s = typeof window < "u" ? (i = window.devicePixelRatio) != null ? i : 2 : 1;
  return Array.isArray(c) ? Math.min(Math.max(c[0], s), c[1]) : c;
}
function ta(c) {
  var i;
  return (i = c.__r3f) == null ? void 0 : i.root.getState();
}
const _t = {
  obj: (c) => c === Object(c) && !_t.arr(c) && typeof c != "function",
  fun: (c) => typeof c == "function",
  str: (c) => typeof c == "string",
  num: (c) => typeof c == "number",
  boo: (c) => typeof c == "boolean",
  und: (c) => c === void 0,
  nul: (c) => c === null,
  arr: (c) => Array.isArray(c),
  equ(c, i, {
    arrays: s = "shallow",
    objects: v = "reference",
    strict: o = !0
  } = {}) {
    if (typeof c != typeof i || !!c != !!i) return !1;
    if (_t.str(c) || _t.num(c) || _t.boo(c)) return c === i;
    const E = _t.obj(c);
    if (E && v === "reference") return c === i;
    const j = _t.arr(c);
    if (j && s === "reference") return c === i;
    if ((j || E) && c === i) return !0;
    let _;
    for (_ in c) if (!(_ in i)) return !1;
    if (E && s === "shallow" && v === "shallow") {
      for (_ in o ? i : c) if (!_t.equ(c[_], i[_], {
        strict: o,
        objects: "reference"
      })) return !1;
    } else
      for (_ in o ? i : c) if (c[_] !== i[_]) return !1;
    if (_t.und(_)) {
      if (j && c.length === 0 && i.length === 0 || E && Object.keys(c).length === 0 && Object.keys(i).length === 0) return !0;
      if (c !== i) return !1;
    }
    return !0;
  }
};
function Od(c) {
  const i = {
    nodes: {},
    materials: {},
    meshes: {}
  };
  return c && c.traverse((s) => {
    s.name && (i.nodes[s.name] = s), s.material && !i.materials[s.material.name] && (i.materials[s.material.name] = s.material), s.isMesh && !i.meshes[s.name] && (i.meshes[s.name] = s);
  }), i;
}
function Ud(c) {
  c.type !== "Scene" && (c.dispose == null || c.dispose());
  for (const i in c) {
    const s = c[i];
    s?.type !== "Scene" && (s == null || s.dispose == null || s.dispose());
  }
}
const Ho = ["children", "key", "ref"];
function Rd(c) {
  const i = {};
  for (const s in c)
    Ho.includes(s) || (i[s] = c[s]);
  return i;
}
function Qu(c, i, s, v) {
  const o = c;
  let E = o?.__r3f;
  return E || (E = {
    root: i,
    type: s,
    parent: null,
    children: [],
    props: Rd(v),
    object: o,
    eventCount: 0,
    handlers: {},
    isHidden: !1
  }, o && (o.__r3f = E)), E;
}
function Va(c, i) {
  let s = c[i];
  if (!i.includes("-")) return {
    root: c,
    key: i,
    target: s
  };
  s = c;
  for (const o of i.split("-")) {
    var v;
    i = o, c = s, s = (v = s) == null ? void 0 : v[i];
  }
  return {
    root: c,
    key: i,
    target: s
  };
}
const io = /-\d+$/;
function Vu(c, i) {
  if (_t.str(i.props.attach)) {
    if (io.test(i.props.attach)) {
      const o = i.props.attach.replace(io, ""), {
        root: E,
        key: j
      } = Va(c.object, o);
      Array.isArray(E[j]) || (E[j] = []);
    }
    const {
      root: s,
      key: v
    } = Va(c.object, i.props.attach);
    i.previousAttach = s[v], s[v] = i.object;
  } else _t.fun(i.props.attach) && (i.previousAttach = i.props.attach(c.object, i.object));
}
function Gu(c, i) {
  if (_t.str(i.props.attach)) {
    const {
      root: s,
      key: v
    } = Va(c.object, i.props.attach), o = i.previousAttach;
    o === void 0 ? delete s[v] : s[v] = o;
  } else
    i.previousAttach == null || i.previousAttach(c.object, i.object);
  delete i.previousAttach;
}
const Wc = [
  ...Ho,
  // Instance props
  "args",
  "dispose",
  "attach",
  "object",
  "onUpdate",
  // Behavior flags
  "dispose"
], fo = /* @__PURE__ */ new Map();
function Ad(c) {
  let i = fo.get(c.constructor);
  try {
    i || (i = new c.constructor(), fo.set(c.constructor, i));
  } catch {
  }
  return i;
}
function Dd(c, i) {
  const s = {};
  for (const v in i)
    if (!Wc.includes(v) && !_t.equ(i[v], c.props[v])) {
      s[v] = i[v];
      for (const o in i)
        o.startsWith(`${v}-`) && (s[o] = i[o]);
    }
  for (const v in c.props) {
    if (Wc.includes(v) || i.hasOwnProperty(v)) continue;
    const {
      root: o,
      key: E
    } = Va(c.object, v);
    if (o.constructor && o.constructor.length === 0) {
      const j = Ad(o);
      _t.und(j) || (s[E] = j[E]);
    } else
      s[E] = 0;
  }
  return s;
}
const jd = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"], Cd = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function ue(c, i) {
  var s;
  const v = c.__r3f, o = v && bo(v).getState(), E = v?.eventCount;
  for (const _ in i) {
    let r = i[_];
    if (Wc.includes(_)) continue;
    if (v && Cd.test(_)) {
      typeof r == "function" ? v.handlers[_] = r : delete v.handlers[_], v.eventCount = Object.keys(v.handlers).length;
      continue;
    }
    if (r === void 0) continue;
    let {
      root: H,
      key: b,
      target: z
    } = Va(c, _);
    if (z instanceof L.Layers && r instanceof L.Layers)
      z.mask = r.mask;
    else if (z instanceof L.Color && Nd(r))
      z.set(r);
    else if (z !== null && typeof z == "object" && typeof z.set == "function" && typeof z.copy == "function" && r != null && r.constructor && z.constructor === r.constructor)
      z.copy(r);
    else if (z !== null && typeof z == "object" && typeof z.set == "function" && Array.isArray(r))
      typeof z.fromArray == "function" ? z.fromArray(r) : z.set(...r);
    else if (z !== null && typeof z == "object" && typeof z.set == "function" && typeof r == "number")
      typeof z.setScalar == "function" ? z.setScalar(r) : z.set(r);
    else {
      var j;
      H[b] = r, o && !o.linear && jd.includes(b) && (j = H[b]) != null && j.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
      H[b].format === L.RGBAFormat && H[b].type === L.UnsignedByteType && (H[b].colorSpace = L.SRGBColorSpace);
    }
  }
  if (v != null && v.parent && o != null && o.internal && (s = v.object) != null && s.isObject3D && E !== v.eventCount) {
    const _ = v.object, r = o.internal.interaction.indexOf(_);
    r > -1 && o.internal.interaction.splice(r, 1), v.eventCount && _.raycast !== null && o.internal.interaction.push(_);
  }
  return v && v.props.attach === void 0 && (v.object.isBufferGeometry ? v.props.attach = "geometry" : v.object.isMaterial && (v.props.attach = "material")), v && na(v), c;
}
function na(c) {
  var i;
  if (!c.parent) return;
  c.props.onUpdate == null || c.props.onUpdate(c.object);
  const s = (i = c.root) == null || i.getState == null ? void 0 : i.getState();
  s && s.internal.frames === 0 && s.invalidate();
}
function qd(c, i) {
  c.manual || (No(c) ? (c.left = i.width / -2, c.right = i.width / 2, c.top = i.height / 2, c.bottom = i.height / -2) : c.aspect = i.width / i.height, c.updateProjectionMatrix());
}
const Lt = (c) => c?.isObject3D;
function ju(c) {
  return (c.eventObject || c.object).uuid + "/" + c.index + c.instanceId;
}
function Oo(c, i, s, v) {
  const o = s.get(i);
  o && (s.delete(i), s.size === 0 && (c.delete(v), o.target.releasePointerCapture(v)));
}
function Bd(c, i) {
  const {
    internal: s
  } = c.getState();
  s.interaction = s.interaction.filter((v) => v !== i), s.initialHits = s.initialHits.filter((v) => v !== i), s.hovered.forEach((v, o) => {
    (v.eventObject === i || v.object === i) && s.hovered.delete(o);
  }), s.capturedMap.forEach((v, o) => {
    Oo(s.capturedMap, i, v, o);
  });
}
function Yd(c) {
  function i(r) {
    const {
      internal: H
    } = c.getState(), b = r.offsetX - H.initialClick[0], z = r.offsetY - H.initialClick[1];
    return Math.round(Math.sqrt(b * b + z * z));
  }
  function s(r) {
    return r.filter((H) => ["Move", "Over", "Enter", "Out", "Leave"].some((b) => {
      var z;
      return (z = H.__r3f) == null ? void 0 : z.handlers["onPointer" + b];
    }));
  }
  function v(r, H) {
    const b = c.getState(), z = /* @__PURE__ */ new Set(), M = [], D = H ? H(b.internal.interaction) : b.internal.interaction;
    for (let g = 0; g < D.length; g++) {
      const N = ta(D[g]);
      N && (N.raycaster.camera = void 0);
    }
    b.previousRoot || b.events.compute == null || b.events.compute(r, b);
    function G(g) {
      const N = ta(g);
      if (!N || !N.events.enabled || N.raycaster.camera === null) return [];
      if (N.raycaster.camera === void 0) {
        var Y;
        N.events.compute == null || N.events.compute(r, N, (Y = N.previousRoot) == null ? void 0 : Y.getState()), N.raycaster.camera === void 0 && (N.raycaster.camera = null);
      }
      return N.raycaster.camera ? N.raycaster.intersectObject(g, !0) : [];
    }
    let X = D.flatMap(G).sort((g, N) => {
      const Y = ta(g.object), B = ta(N.object);
      return !Y || !B ? g.distance - N.distance : B.events.priority - Y.events.priority || g.distance - N.distance;
    }).filter((g) => {
      const N = ju(g);
      return z.has(N) ? !1 : (z.add(N), !0);
    });
    b.events.filter && (X = b.events.filter(X, b));
    for (const g of X) {
      let N = g.object;
      for (; N; ) {
        var Z;
        (Z = N.__r3f) != null && Z.eventCount && M.push({
          ...g,
          eventObject: N
        }), N = N.parent;
      }
    }
    if ("pointerId" in r && b.internal.capturedMap.has(r.pointerId))
      for (let g of b.internal.capturedMap.get(r.pointerId).values())
        z.has(ju(g.intersection)) || M.push(g.intersection);
    return M;
  }
  function o(r, H, b, z) {
    if (r.length) {
      const M = {
        stopped: !1
      };
      for (const D of r) {
        let G = ta(D.object);
        if (G || D.object.traverseAncestors((X) => {
          const Z = ta(X);
          if (Z)
            return G = Z, !1;
        }), G) {
          const {
            raycaster: X,
            pointer: Z,
            camera: g,
            internal: N
          } = G, Y = new L.Vector3(Z.x, Z.y, 0).unproject(g), B = (k) => {
            var P, I;
            return (P = (I = N.capturedMap.get(k)) == null ? void 0 : I.has(D.eventObject)) != null ? P : !1;
          }, K = (k) => {
            const P = {
              intersection: D,
              target: H.target
            };
            N.capturedMap.has(k) ? N.capturedMap.get(k).set(D.eventObject, P) : N.capturedMap.set(k, /* @__PURE__ */ new Map([[D.eventObject, P]])), H.target.setPointerCapture(k);
          }, V = (k) => {
            const P = N.capturedMap.get(k);
            P && Oo(N.capturedMap, D.eventObject, P, k);
          };
          let et = {};
          for (let k in H) {
            let P = H[k];
            typeof P != "function" && (et[k] = P);
          }
          let it = {
            ...D,
            ...et,
            pointer: Z,
            intersections: r,
            stopped: M.stopped,
            delta: b,
            unprojectedPoint: Y,
            ray: X.ray,
            camera: g,
            // Hijack stopPropagation, which just sets a flag
            stopPropagation() {
              const k = "pointerId" in H && N.capturedMap.get(H.pointerId);
              if (
                // ...if this pointer hasn't been captured
                (!k || // ... or if the hit object is capturing the pointer
                k.has(D.eventObject)) && (it.stopped = M.stopped = !0, N.hovered.size && Array.from(N.hovered.values()).find((P) => P.eventObject === D.eventObject))
              ) {
                const P = r.slice(0, r.indexOf(D));
                E([...P, D]);
              }
            },
            // there should be a distinction between target and currentTarget
            target: {
              hasPointerCapture: B,
              setPointerCapture: K,
              releasePointerCapture: V
            },
            currentTarget: {
              hasPointerCapture: B,
              setPointerCapture: K,
              releasePointerCapture: V
            },
            nativeEvent: H
          };
          if (z(it), M.stopped === !0) break;
        }
      }
    }
    return r;
  }
  function E(r) {
    const {
      internal: H
    } = c.getState();
    for (const b of H.hovered.values())
      if (!r.length || !r.find((z) => z.object === b.object && z.index === b.index && z.instanceId === b.instanceId)) {
        const M = b.eventObject.__r3f;
        if (H.hovered.delete(ju(b)), M != null && M.eventCount) {
          const D = M.handlers, G = {
            ...b,
            intersections: r
          };
          D.onPointerOut == null || D.onPointerOut(G), D.onPointerLeave == null || D.onPointerLeave(G);
        }
      }
  }
  function j(r, H) {
    for (let b = 0; b < H.length; b++) {
      const z = H[b].__r3f;
      z == null || z.handlers.onPointerMissed == null || z.handlers.onPointerMissed(r);
    }
  }
  function _(r) {
    switch (r) {
      case "onPointerLeave":
      case "onPointerCancel":
        return () => E([]);
      case "onLostPointerCapture":
        return (H) => {
          const {
            internal: b
          } = c.getState();
          "pointerId" in H && b.capturedMap.has(H.pointerId) && requestAnimationFrame(() => {
            b.capturedMap.has(H.pointerId) && (b.capturedMap.delete(H.pointerId), E([]));
          });
        };
    }
    return function(b) {
      const {
        onPointerMissed: z,
        internal: M
      } = c.getState();
      M.lastEvent.current = b;
      const D = r === "onPointerMove", G = r === "onClick" || r === "onContextMenu" || r === "onDoubleClick", Z = v(b, D ? s : void 0), g = G ? i(b) : 0;
      r === "onPointerDown" && (M.initialClick = [b.offsetX, b.offsetY], M.initialHits = Z.map((Y) => Y.eventObject)), G && !Z.length && g <= 2 && (j(b, M.interaction), z && z(b)), D && E(Z);
      function N(Y) {
        const B = Y.eventObject, K = B.__r3f;
        if (!(K != null && K.eventCount)) return;
        const V = K.handlers;
        if (D) {
          if (V.onPointerOver || V.onPointerEnter || V.onPointerOut || V.onPointerLeave) {
            const et = ju(Y), it = M.hovered.get(et);
            it ? it.stopped && Y.stopPropagation() : (M.hovered.set(et, Y), V.onPointerOver == null || V.onPointerOver(Y), V.onPointerEnter == null || V.onPointerEnter(Y));
          }
          V.onPointerMove == null || V.onPointerMove(Y);
        } else {
          const et = V[r];
          et ? (!G || M.initialHits.includes(B)) && (j(b, M.interaction.filter((it) => !M.initialHits.includes(it))), et(Y)) : G && M.initialHits.includes(B) && j(b, M.interaction.filter((it) => !M.initialHits.includes(it)));
        }
      }
      o(Z, b, g, N);
    };
  }
  return {
    handlePointer: _
  };
}
const so = (c) => !!(c != null && c.render), Uo = /* @__PURE__ */ st.createContext(null), Qd = (c, i) => {
  const s = cd((_, r) => {
    const H = new L.Vector3(), b = new L.Vector3(), z = new L.Vector3();
    function M(g = r().camera, N = b, Y = r().size) {
      const {
        width: B,
        height: K,
        top: V,
        left: et
      } = Y, it = B / K;
      N.isVector3 ? z.copy(N) : z.set(...N);
      const k = g.getWorldPosition(H).distanceTo(z);
      if (No(g))
        return {
          width: B / g.zoom,
          height: K / g.zoom,
          top: V,
          left: et,
          factor: 1,
          distance: k,
          aspect: it
        };
      {
        const P = g.fov * Math.PI / 180, I = 2 * Math.tan(P / 2) * k, Kt = I * (B / K);
        return {
          width: Kt,
          height: I,
          top: V,
          left: et,
          factor: B / Kt,
          distance: k,
          aspect: it
        };
      }
    }
    let D;
    const G = (g) => _((N) => ({
      performance: {
        ...N.performance,
        current: g
      }
    })), X = new L.Vector2();
    return {
      set: _,
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
      advance: (g, N) => i(g, N, r()),
      legacy: !1,
      linear: !1,
      flat: !1,
      controls: null,
      clock: new L.Clock(),
      pointer: X,
      mouse: X,
      frameloop: "always",
      onPointerMissed: void 0,
      performance: {
        current: 1,
        min: 0.5,
        max: 1,
        debounce: 200,
        regress: () => {
          const g = r();
          D && clearTimeout(D), g.performance.current !== g.performance.min && G(g.performance.min), D = setTimeout(() => G(r().performance.max), g.performance.debounce);
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
        getCurrentViewport: M
      },
      setEvents: (g) => _((N) => ({
        ...N,
        events: {
          ...N.events,
          ...g
        }
      })),
      setSize: (g, N, Y = 0, B = 0) => {
        const K = r().camera, V = {
          width: g,
          height: N,
          top: Y,
          left: B
        };
        _((et) => ({
          size: V,
          viewport: {
            ...et.viewport,
            ...M(K, b, V)
          }
        }));
      },
      setDpr: (g) => _((N) => {
        const Y = go(g);
        return {
          viewport: {
            ...N.viewport,
            dpr: Y,
            initialDpr: N.viewport.initialDpr || Y
          }
        };
      }),
      setFrameloop: (g = "always") => {
        const N = r().clock;
        N.stop(), N.elapsedTime = 0, g !== "never" && (N.start(), N.elapsedTime = 0), _(() => ({
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
        lastEvent: /* @__PURE__ */ st.createRef(),
        // Updates
        active: !1,
        frames: 0,
        priority: 0,
        subscribe: (g, N, Y) => {
          const B = r().internal;
          return B.priority = B.priority + (N > 0 ? 1 : 0), B.subscribers.push({
            ref: g,
            priority: N,
            store: Y
          }), B.subscribers = B.subscribers.sort((K, V) => K.priority - V.priority), () => {
            const K = r().internal;
            K != null && K.subscribers && (K.priority = K.priority - (N > 0 ? 1 : 0), K.subscribers = K.subscribers.filter((V) => V.ref !== g));
          };
        }
      }
    };
  }), v = s.getState();
  let o = v.size, E = v.viewport.dpr, j = v.camera;
  return s.subscribe(() => {
    const {
      camera: _,
      size: r,
      viewport: H,
      gl: b,
      set: z
    } = s.getState();
    if (r.width !== o.width || r.height !== o.height || H.dpr !== E) {
      o = r, E = H.dpr, qd(_, r), H.dpr > 0 && b.setPixelRatio(H.dpr);
      const M = typeof HTMLCanvasElement < "u" && b.domElement instanceof HTMLCanvasElement;
      b.setSize(r.width, r.height, M);
    }
    _ !== j && (j = _, z((M) => ({
      viewport: {
        ...M.viewport,
        ...M.viewport.getCurrentViewport(_)
      }
    })));
  }), s.subscribe((_) => c(_)), s;
};
function Ro() {
  const c = st.useContext(Uo);
  if (!c) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return c;
}
function Vd(c = (s) => s, i) {
  return Ro()(c, i);
}
function Gd(c, i = 0) {
  const s = Ro(), v = s.getState().internal.subscribe, o = Mo(c);
  return Ga(() => v(o, i, s), [i, v, s]), null;
}
const oo = /* @__PURE__ */ new WeakMap(), Xd = (c) => {
  var i;
  return typeof c == "function" && (c == null || (i = c.prototype) == null ? void 0 : i.constructor) === c;
};
function Ao(c, i) {
  return function(s, ...v) {
    let o;
    return Xd(s) ? (o = oo.get(s), o || (o = new s(), oo.set(s, o))) : o = s, c && c(o), Promise.all(v.map((E) => new Promise((j, _) => o.load(E, (r) => {
      Lt(r?.scene) && Object.assign(r, Od(r.scene)), j(r);
    }, i, (r) => _(new Error(`Could not load ${E}: ${r?.message}`))))));
  };
}
function li(c, i, s, v) {
  const o = Array.isArray(i) ? i : [i], E = rd(Ao(s, v), [c, ...o], {
    equal: _t.equ
  });
  return Array.isArray(i) ? E : E[0];
}
li.preload = function(c, i, s) {
  const v = Array.isArray(i) ? i : [i];
  return hd(Ao(s), [c, ...v]);
};
li.clear = function(c, i) {
  const s = Array.isArray(i) ? i : [i];
  return Sd([c, ...s]);
};
function Zd(c) {
  const i = vd(c);
  return i.injectIntoDevTools({
    bundleType: 0,
    rendererPackageName: "@react-three/fiber",
    version: st.version
  }), i;
}
const Do = 0, ua = {}, Kd = /^three(?=[A-Z])/, Zu = (c) => `${c[0].toUpperCase()}${c.slice(1)}`;
let xd = 0;
const Jd = (c) => typeof c == "function";
function Ld(c) {
  if (Jd(c)) {
    const i = `${xd++}`;
    return ua[i] = c, i;
  } else
    Object.assign(ua, c);
}
function jo(c, i) {
  const s = Zu(c), v = ua[s];
  if (c !== "primitive" && !v) throw new Error(`R3F: ${s} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (c === "primitive" && !i.object) throw new Error("R3F: Primitives without 'object' are invalid!");
  if (i.args !== void 0 && !Array.isArray(i.args)) throw new Error("R3F: The args prop must be an array!");
}
function Wd(c, i, s) {
  var v;
  return c = Zu(c) in ua ? c : c.replace(Kd, ""), jo(c, i), c === "primitive" && (v = i.object) != null && v.__r3f && delete i.object.__r3f, Qu(i.object, s, c, i);
}
function Fd(c) {
  if (!c.isHidden) {
    var i;
    c.props.attach && (i = c.parent) != null && i.object ? Gu(c.parent, c) : Lt(c.object) && (c.object.visible = !1), c.isHidden = !0, na(c);
  }
}
function Co(c) {
  if (c.isHidden) {
    var i;
    c.props.attach && (i = c.parent) != null && i.object ? Vu(c.parent, c) : Lt(c.object) && c.props.visible !== !1 && (c.object.visible = !0), c.isHidden = !1, na(c);
  }
}
function ei(c, i, s) {
  const v = i.root.getState();
  if (!(!c.parent && c.object !== v.scene)) {
    if (!i.object) {
      var o, E;
      const j = ua[Zu(i.type)];
      i.object = (o = i.props.object) != null ? o : new j(...(E = i.props.args) != null ? E : []), i.object.__r3f = i;
    }
    if (ue(i.object, i.props), i.props.attach)
      Vu(c, i);
    else if (Lt(i.object) && Lt(c.object)) {
      const j = c.object.children.indexOf(s?.object);
      if (s && j !== -1) {
        const _ = c.object.children.indexOf(i.object);
        if (_ !== -1) {
          c.object.children.splice(_, 1);
          const r = _ < j ? j - 1 : j;
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
    for (const j of i.children) ei(i, j);
    na(i);
  }
}
function Vc(c, i) {
  i && (i.parent = c, c.children.push(i), ei(c, i));
}
function mo(c, i, s) {
  if (!i || !s) return;
  i.parent = c;
  const v = c.children.indexOf(s);
  v !== -1 ? c.children.splice(v, 0, i) : c.children.push(i), ei(c, i, s);
}
function qo(c) {
  if (typeof c.dispose == "function") {
    const i = () => {
      try {
        c.dispose();
      } catch {
      }
    };
    typeof IS_REACT_ACT_ENVIRONMENT < "u" ? i() : co.unstable_scheduleCallback(co.unstable_IdlePriority, i);
  }
}
function Fc(c, i, s) {
  if (!i) return;
  i.parent = null;
  const v = c.children.indexOf(i);
  v !== -1 && c.children.splice(v, 1), i.props.attach ? Gu(c, i) : Lt(i.object) && Lt(c.object) && (c.object.remove(i.object), Bd(bo(i), i.object));
  const o = i.props.dispose !== null && s !== !1;
  for (let E = i.children.length - 1; E >= 0; E--) {
    const j = i.children[E];
    Fc(i, j, o);
  }
  i.children.length = 0, delete i.object.__r3f, o && i.type !== "primitive" && i.object.type !== "Scene" && qo(i.object), s === void 0 && na(i);
}
function Pd(c, i) {
  for (const s of [c, c.alternate])
    if (s !== null)
      if (typeof s.ref == "function") {
        s.refCleanup == null || s.refCleanup();
        const v = s.ref(i);
        typeof v == "function" && (s.refCleanup = v);
      } else s.ref && (s.ref.current = i);
}
const Yu = [];
function wd() {
  for (const [s] of Yu) {
    const v = s.parent;
    if (v) {
      s.props.attach ? Gu(v, s) : Lt(s.object) && Lt(v.object) && v.object.remove(s.object);
      for (const o of s.children)
        o.props.attach ? Gu(s, o) : Lt(o.object) && Lt(s.object) && s.object.remove(o.object);
    }
    s.isHidden && Co(s), s.object.__r3f && delete s.object.__r3f, s.type !== "primitive" && qo(s.object);
  }
  for (const [s, v, o] of Yu) {
    s.props = v;
    const E = s.parent;
    if (E) {
      var c, i;
      const j = ua[Zu(s.type)];
      s.object = (c = s.props.object) != null ? c : new j(...(i = s.props.args) != null ? i : []), s.object.__r3f = s, Pd(o, s.object), ue(s.object, s.props), s.props.attach ? Vu(E, s) : Lt(s.object) && Lt(E.object) && E.object.add(s.object);
      for (const _ of s.children)
        _.props.attach ? Vu(s, _) : Lt(_.object) && Lt(s.object) && s.object.add(_.object);
      na(s);
    }
  }
  Yu.length = 0;
}
const Gc = () => {
}, vo = {};
let Cu = Do;
const Id = 0, $d = 4, Pc = /* @__PURE__ */ Zd({
  isPrimaryRenderer: !1,
  warnsIfNotActing: !1,
  supportsMutation: !0,
  supportsPersistence: !1,
  supportsHydration: !1,
  createInstance: Wd,
  removeChild: Fc,
  appendChild: Vc,
  appendInitialChild: Vc,
  insertBefore: mo,
  appendChildToContainer(c, i) {
    const s = c.getState().scene.__r3f;
    !i || !s || Vc(s, i);
  },
  removeChildFromContainer(c, i) {
    const s = c.getState().scene.__r3f;
    !i || !s || Fc(s, i);
  },
  insertInContainerBefore(c, i, s) {
    const v = c.getState().scene.__r3f;
    !i || !s || !v || mo(v, i, s);
  },
  getRootHostContext: () => vo,
  getChildHostContext: () => vo,
  commitUpdate(c, i, s, v, o) {
    var E, j, _;
    jo(i, v);
    let r = !1;
    if ((c.type === "primitive" && s.object !== v.object || ((E = v.args) == null ? void 0 : E.length) !== ((j = s.args) == null ? void 0 : j.length) || (_ = v.args) != null && _.some((b, z) => {
      var M;
      return b !== ((M = s.args) == null ? void 0 : M[z]);
    })) && (r = !0), r)
      Yu.push([c, {
        ...v
      }, o]);
    else {
      const b = Dd(c, v);
      Object.keys(b).length && (Object.assign(c.props, b), ue(c.object, b));
    }
    (o.sibling === null || (o.flags & $d) === Id) && wd();
  },
  finalizeInitialChildren: () => !1,
  commitMount() {
  },
  getPublicInstance: (c) => c?.object,
  prepareForCommit: () => null,
  preparePortalMount: (c) => Qu(c.getState().scene, c, "", {}),
  resetAfterCommit: () => {
  },
  shouldSetTextContent: () => !1,
  clearContainer: () => !1,
  hideInstance: Fd,
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
  HostTransitionContext: /* @__PURE__ */ st.createContext(null),
  setCurrentUpdatePriority(c) {
    Cu = c;
  },
  getCurrentUpdatePriority() {
    return Cu;
  },
  resolveUpdatePriority() {
    var c;
    if (Cu !== Do) return Cu;
    switch (typeof window < "u" && ((c = window.event) == null ? void 0 : c.type)) {
      case "click":
      case "contextmenu":
      case "dblclick":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
        return Bu.DiscreteEventPriority;
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerenter":
      case "pointerleave":
      case "wheel":
        return Bu.ContinuousEventPriority;
      default:
        return Bu.DefaultEventPriority;
    }
  },
  resetFormInstance() {
  }
}), ge = /* @__PURE__ */ new Map(), la = {
  objects: "shallow",
  strict: !1
};
function kd(c, i) {
  if (!i && typeof HTMLCanvasElement < "u" && c instanceof HTMLCanvasElement && c.parentElement) {
    const {
      width: s,
      height: v,
      top: o,
      left: E
    } = c.parentElement.getBoundingClientRect();
    return {
      width: s,
      height: v,
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
function tp(c) {
  const i = ge.get(c), s = i?.fiber, v = i?.store;
  i && console.warn("R3F.createRoot should only be called once!");
  const o = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  ), E = v || Qd($c, yo), j = s || Pc.createContainer(
    E,
    // container
    Bu.ConcurrentRoot,
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
  i || ge.set(c, {
    fiber: j,
    store: E
  });
  let _, r, H = !1, b = null;
  return {
    async configure(z = {}) {
      let M;
      b = new Promise((tt) => M = tt);
      let {
        gl: D,
        size: G,
        scene: X,
        events: Z,
        onCreated: g,
        shadows: N = !1,
        linear: Y = !1,
        flat: B = !1,
        legacy: K = !1,
        orthographic: V = !1,
        frameloop: et = "always",
        dpr: it = [1, 2],
        performance: k,
        raycaster: P,
        camera: I,
        onPointerMissed: Kt
      } = z, $ = E.getState(), dt = $.gl;
      if (!$.gl) {
        const tt = {
          canvas: c,
          powerPreference: "high-performance",
          antialias: !0,
          alpha: !0
        }, ct = typeof D == "function" ? await D(tt) : D;
        so(ct) ? dt = ct : dt = new L.WebGLRenderer({
          ...tt,
          ...D
        }), $.set({
          gl: dt
        });
      }
      let Nt = $.raycaster;
      Nt || $.set({
        raycaster: Nt = new L.Raycaster()
      });
      const {
        params: S,
        ...O
      } = P || {};
      if (_t.equ(O, Nt, la) || ue(Nt, {
        ...O
      }), _t.equ(S, Nt.params, la) || ue(Nt, {
        params: {
          ...Nt.params,
          ...S
        }
      }), !$.camera || $.camera === r && !_t.equ(r, I, la)) {
        r = I;
        const tt = I?.isCamera, ct = tt ? I : V ? new L.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new L.PerspectiveCamera(75, 0, 0.1, 1e3);
        tt || (ct.position.z = 5, I && (ue(ct, I), ct.manual || ("aspect" in I || "left" in I || "right" in I || "bottom" in I || "top" in I) && (ct.manual = !0, ct.updateProjectionMatrix())), !$.camera && !(I != null && I.rotation) && ct.lookAt(0, 0, 0)), $.set({
          camera: ct
        }), Nt.camera = ct;
      }
      if (!$.scene) {
        let tt;
        X != null && X.isScene ? (tt = X, Qu(tt, E, "", {})) : (tt = new L.Scene(), Qu(tt, E, "", {}), X && ue(tt, X)), $.set({
          scene: tt
        });
      }
      Z && !$.events.handlers && $.set({
        events: Z(E)
      });
      const A = kd(c, G);
      if (_t.equ(A, $.size, la) || $.setSize(A.width, A.height, A.top, A.left), it && $.viewport.dpr !== go(it) && $.setDpr(it), $.frameloop !== et && $.setFrameloop(et), $.onPointerMissed || $.set({
        onPointerMissed: Kt
      }), k && !_t.equ(k, $.performance, la) && $.set((tt) => ({
        performance: {
          ...tt.performance,
          ...k
        }
      })), !$.xr) {
        var Q;
        const tt = (at, Ut) => {
          const He = E.getState();
          He.frameloop !== "never" && yo(at, !0, He, Ut);
        }, ct = () => {
          const at = E.getState();
          at.gl.xr.enabled = at.gl.xr.isPresenting, at.gl.xr.setAnimationLoop(at.gl.xr.isPresenting ? tt : null), at.gl.xr.isPresenting || $c(at);
        }, Tt = {
          connect() {
            const at = E.getState().gl;
            at.xr.addEventListener("sessionstart", ct), at.xr.addEventListener("sessionend", ct);
          },
          disconnect() {
            const at = E.getState().gl;
            at.xr.removeEventListener("sessionstart", ct), at.xr.removeEventListener("sessionend", ct);
          }
        };
        typeof ((Q = dt.xr) == null ? void 0 : Q.addEventListener) == "function" && Tt.connect(), $.set({
          xr: Tt
        });
      }
      if (dt.shadowMap) {
        const tt = dt.shadowMap.enabled, ct = dt.shadowMap.type;
        if (dt.shadowMap.enabled = !!N, _t.boo(N))
          dt.shadowMap.type = L.PCFSoftShadowMap;
        else if (_t.str(N)) {
          var J;
          const Tt = {
            basic: L.BasicShadowMap,
            percentage: L.PCFShadowMap,
            soft: L.PCFSoftShadowMap,
            variance: L.VSMShadowMap
          };
          dt.shadowMap.type = (J = Tt[N]) != null ? J : L.PCFSoftShadowMap;
        } else _t.obj(N) && Object.assign(dt.shadowMap, N);
        (tt !== dt.shadowMap.enabled || ct !== dt.shadowMap.type) && (dt.shadowMap.needsUpdate = !0);
      }
      return L.ColorManagement.enabled = !K, H || (dt.outputColorSpace = Y ? L.LinearSRGBColorSpace : L.SRGBColorSpace, dt.toneMapping = B ? L.NoToneMapping : L.ACESFilmicToneMapping), $.legacy !== K && $.set(() => ({
        legacy: K
      })), $.linear !== Y && $.set(() => ({
        linear: Y
      })), $.flat !== B && $.set(() => ({
        flat: B
      })), D && !_t.fun(D) && !so(D) && !_t.equ(D, dt, la) && ue(dt, D), _ = g, H = !0, M(), this;
    },
    render(z) {
      return !H && !b && this.configure(), b.then(() => {
        Pc.updateContainer(/* @__PURE__ */ ht(lp, {
          store: E,
          children: z,
          onCreated: _,
          rootElement: c
        }), j, null, () => {
        });
      }), E;
    },
    unmount() {
      Bo(c);
    }
  };
}
function lp({
  store: c,
  children: i,
  onCreated: s,
  rootElement: v
}) {
  return Ga(() => {
    const o = c.getState();
    o.set((E) => ({
      internal: {
        ...E.internal,
        active: !0
      }
    })), s && s(o), c.getState().events.connected || o.events.connect == null || o.events.connect(v);
  }, []), /* @__PURE__ */ ht(Uo.Provider, {
    value: c,
    children: i
  });
}
function Bo(c, i) {
  const s = ge.get(c), v = s?.fiber;
  if (v) {
    const o = s?.store.getState();
    o && (o.internal.active = !1), Pc.updateContainer(null, v, null, () => {
      o && setTimeout(() => {
        try {
          var E, j, _, r;
          o.events.disconnect == null || o.events.disconnect(), (E = o.gl) == null || (j = E.renderLists) == null || j.dispose == null || j.dispose(), (_ = o.gl) == null || _.forceContextLoss == null || _.forceContextLoss(), (r = o.gl) != null && r.xr && o.xr.disconnect(), Ud(o.scene), ge.delete(c);
        } catch {
        }
      }, 500);
    });
  }
}
const ep = /* @__PURE__ */ new Set(), ap = /* @__PURE__ */ new Set(), up = /* @__PURE__ */ new Set();
function Xc(c, i) {
  if (c.size)
    for (const {
      callback: s
    } of c.values())
      s(i);
}
function Qa(c, i) {
  switch (c) {
    case "before":
      return Xc(ep, i);
    case "after":
      return Xc(ap, i);
    case "tail":
      return Xc(up, i);
  }
}
let Zc, Kc;
function wc(c, i, s) {
  let v = i.clock.getDelta();
  i.frameloop === "never" && typeof c == "number" && (v = c - i.clock.elapsedTime, i.clock.oldTime = i.clock.elapsedTime, i.clock.elapsedTime = c), Zc = i.internal.subscribers;
  for (let o = 0; o < Zc.length; o++)
    Kc = Zc[o], Kc.ref.current(Kc.store.getState(), v, s);
  return !i.internal.priority && i.gl.render && i.gl.render(i.scene, i.camera), i.internal.frames = Math.max(0, i.internal.frames - 1), i.frameloop === "always" ? 1 : i.internal.frames;
}
let Xu = !1, Ic = !1, xc, po, ea;
function Yo(c) {
  po = requestAnimationFrame(Yo), Xu = !0, xc = 0, Qa("before", c), Ic = !0;
  for (const s of ge.values()) {
    var i;
    ea = s.store.getState(), ea.internal.active && (ea.frameloop === "always" || ea.internal.frames > 0) && !((i = ea.gl.xr) != null && i.isPresenting) && (xc += wc(c, ea));
  }
  if (Ic = !1, Qa("after", c), xc === 0)
    return Qa("tail", c), Xu = !1, cancelAnimationFrame(po);
}
function $c(c, i = 1) {
  var s;
  if (!c) return ge.forEach((v) => $c(v.store.getState(), i));
  (s = c.gl.xr) != null && s.isPresenting || !c.internal.active || c.frameloop === "never" || (i > 1 ? c.internal.frames = Math.min(60, c.internal.frames + i) : Ic ? c.internal.frames = 2 : c.internal.frames = 1, Xu || (Xu = !0, requestAnimationFrame(Yo)));
}
function yo(c, i = !0, s, v) {
  if (i && Qa("before", c), s) wc(c, s, v);
  else for (const o of ge.values()) wc(c, o.store.getState());
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
function np(c) {
  const {
    handlePointer: i
  } = Yd(c);
  return {
    priority: 1,
    enabled: !0,
    compute(s, v, o) {
      v.pointer.set(s.offsetX / v.size.width * 2 - 1, -(s.offsetY / v.size.height) * 2 + 1), v.raycaster.setFromCamera(v.pointer, v.camera);
    },
    connected: void 0,
    handlers: Object.keys(Jc).reduce((s, v) => ({
      ...s,
      [v]: i(v)
    }), {}),
    update: () => {
      var s;
      const {
        events: v,
        internal: o
      } = c.getState();
      (s = o.lastEvent) != null && s.current && v.handlers && v.handlers.onPointerMove(o.lastEvent.current);
    },
    connect: (s) => {
      const {
        set: v,
        events: o
      } = c.getState();
      if (o.disconnect == null || o.disconnect(), v((E) => ({
        events: {
          ...E.events,
          connected: s
        }
      })), o.handlers)
        for (const E in o.handlers) {
          const j = o.handlers[E], [_, r] = Jc[E];
          s.addEventListener(_, j, {
            passive: r
          });
        }
    },
    disconnect: () => {
      const {
        set: s,
        events: v
      } = c.getState();
      if (v.connected) {
        if (v.handlers)
          for (const o in v.handlers) {
            const E = v.handlers[o], [j] = Jc[o];
            v.connected.removeEventListener(j, E);
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
function ro(c, i) {
  let s;
  return (...v) => {
    window.clearTimeout(s), s = window.setTimeout(() => c(...v), i);
  };
}
function cp({ debounce: c, scroll: i, polyfill: s, offsetSize: v } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const o = s || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!o) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [E, j] = aa({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), _ = Lc({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: E, orientationHandler: null }), r = c ? typeof c == "number" ? c : c.scroll : null, H = c ? typeof c == "number" ? c : c.resize : null, b = Lc(!1);
  Sl(() => (b.current = !0, () => void (b.current = !1)));
  const [z, M, D] = qu(() => {
    const g = () => {
      if (!_.current.element) return;
      const { left: N, top: Y, width: B, height: K, bottom: V, right: et, x: it, y: k } = _.current.element.getBoundingClientRect(), P = { left: N, top: Y, width: B, height: K, bottom: V, right: et, x: it, y: k };
      _.current.element instanceof HTMLElement && v && (P.height = _.current.element.offsetHeight, P.width = _.current.element.offsetWidth), Object.freeze(P), b.current && !op(_.current.lastBounds, P) && j(_.current.lastBounds = P);
    };
    return [g, H ? ro(g, H) : g, r ? ro(g, r) : g];
  }, [j, v, r, H]);
  function G() {
    _.current.scrollContainers && (_.current.scrollContainers.forEach((g) => g.removeEventListener("scroll", D, !0)), _.current.scrollContainers = null), _.current.resizeObserver && (_.current.resizeObserver.disconnect(), _.current.resizeObserver = null), _.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", _.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", _.current.orientationHandler));
  }
  function X() {
    _.current.element && (_.current.resizeObserver = new o(D), _.current.resizeObserver.observe(_.current.element), i && _.current.scrollContainers && _.current.scrollContainers.forEach((g) => g.addEventListener("scroll", D, { capture: !0, passive: !0 })), _.current.orientationHandler = () => {
      D();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", _.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", _.current.orientationHandler));
  }
  const Z = (g) => {
    !g || g === _.current.element || (G(), _.current.element = g, _.current.scrollContainers = Qo(g), X());
  };
  return fp(D, !!i), ip(M), Sl(() => {
    G(), X();
  }, [i, D, M]), Sl(() => G, []), [Z, E, z];
}
function ip(c) {
  Sl(() => {
    const i = c;
    return window.addEventListener("resize", i), () => void window.removeEventListener("resize", i);
  }, [c]);
}
function fp(c, i) {
  Sl(() => {
    if (i) {
      const s = c;
      return window.addEventListener("scroll", s, { capture: !0, passive: !0 }), () => void window.removeEventListener("scroll", s, !0);
    }
  }, [c, i]);
}
function Qo(c) {
  const i = [];
  if (!c || c === document.body) return i;
  const { overflow: s, overflowX: v, overflowY: o } = window.getComputedStyle(c);
  return [s, v, o].some((E) => E === "auto" || E === "scroll") && i.push(c), [...i, ...Qo(c.parentElement)];
}
const sp = ["x", "y", "top", "bottom", "left", "right", "width", "height"], op = (c, i) => sp.every((s) => c[s] === i[s]);
function mp({
  ref: c,
  children: i,
  fallback: s,
  resize: v,
  style: o,
  gl: E,
  events: j = np,
  eventSource: _,
  eventPrefix: r,
  shadows: H,
  linear: b,
  flat: z,
  legacy: M,
  orthographic: D,
  frameloop: G,
  dpr: X,
  performance: Z,
  raycaster: g,
  camera: N,
  scene: Y,
  onPointerMissed: B,
  onCreated: K,
  ...V
}) {
  st.useMemo(() => Ld(L), []);
  const et = Md(), [it, k] = cp({
    scroll: !0,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...v
  }), P = st.useRef(null), I = st.useRef(null);
  st.useImperativeHandle(c, () => P.current);
  const Kt = Mo(B), [$, dt] = st.useState(!1), [Nt, S] = st.useState(!1);
  if ($) throw $;
  if (Nt) throw Nt;
  const O = st.useRef(null);
  return Ga(() => {
    const Q = P.current;
    if (k.width > 0 && k.height > 0 && Q) {
      O.current || (O.current = tp(Q));
      async function J() {
        await O.current.configure({
          gl: E,
          scene: Y,
          events: j,
          shadows: H,
          linear: b,
          flat: z,
          legacy: M,
          orthographic: D,
          frameloop: G,
          dpr: X,
          performance: Z,
          raycaster: g,
          camera: N,
          size: k,
          // Pass mutable reference to onPointerMissed so it's free to update
          onPointerMissed: (...tt) => Kt.current == null ? void 0 : Kt.current(...tt),
          onCreated: (tt) => {
            tt.events.connect == null || tt.events.connect(_ ? bd(_) ? _.current : _ : I.current), r && tt.setEvents({
              compute: (ct, Tt) => {
                const at = ct[r + "X"], Ut = ct[r + "Y"];
                Tt.pointer.set(at / Tt.size.width * 2 - 1, -(Ut / Tt.size.height) * 2 + 1), Tt.raycaster.setFromCamera(Tt.pointer, Tt.camera);
              }
            }), K?.(tt);
          }
        }), O.current.render(/* @__PURE__ */ ht(et, {
          children: /* @__PURE__ */ ht(Hd, {
            set: S,
            children: /* @__PURE__ */ ht(st.Suspense, {
              fallback: /* @__PURE__ */ ht(gd, {
                set: dt
              }),
              children: i ?? null
            })
          })
        }));
      }
      J();
    }
  }), st.useEffect(() => {
    const Q = P.current;
    if (Q) return () => Bo(Q);
  }, []), /* @__PURE__ */ ht("div", {
    ref: I,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: _ ? "none" : "auto",
      ...o
    },
    ...V,
    children: /* @__PURE__ */ ht("div", {
      ref: it,
      style: {
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ ht("canvas", {
        ref: P,
        style: {
          display: "block"
        },
        children: s
      })
    })
  });
}
function vp(c) {
  return /* @__PURE__ */ ht(_o, {
    children: /* @__PURE__ */ ht(mp, {
      ...c
    })
  });
}
function dp() {
  return /* @__PURE__ */ Ya("group", { children: [
    /* @__PURE__ */ Ya("mesh", { rotation: [0, 0, Math.PI / 2], children: [
      /* @__PURE__ */ ht("cylinderGeometry", { args: [75e-4, 75e-4, 0.3, 32] }),
      /* @__PURE__ */ ht("meshStandardMaterial", { color: "red" })
    ] }),
    /* @__PURE__ */ Ya("mesh", { position: [0.15, 0, 0], rotation: [0, 0, -Math.PI / 2], children: [
      /* @__PURE__ */ ht("coneGeometry", { args: [0.015, 0.05, 32] }),
      /* @__PURE__ */ ht("meshStandardMaterial", { color: "red" })
    ] })
  ] });
}
function pp({ spinRate: c, playing: i, seamOrientation: s, spinAxis: v, useSeamOrientation: o }) {
  const E = li(Wv, "/models/baseball.gltf"), j = Me.useRef(), _ = Me.useRef(), r = Me.useRef(), { invalidate: H } = Vd();
  return Sl(() => {
    E.scene && E.scene.rotation.set(Math.PI / 2, 3 * Math.PI / 2, 0);
  }, [E]), Sl(() => {
    if (_.current)
      if (o && s) {
        const b = new L.Matrix4();
        b.set(
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
        const z = new L.Quaternion();
        z.setFromRotationMatrix(b), _.current.quaternion.copy(z);
      } else
        _.current.quaternion.identity(), _.current.rotation.set(0, 0, 0);
    H();
  }, [o, s, H]), Sl(() => {
    if (r.current)
      if (o && v) {
        const b = new L.Vector3(1, 0, 0), z = new L.Quaternion().setFromUnitVectors(
          b,
          v.clone().normalize()
        );
        r.current.quaternion.copy(z);
      } else
        r.current.quaternion.identity();
    H();
  }, [v, o, H]), Gd((b, z) => {
    if (i && j.current) {
      const D = c * 2 * Math.PI / 60 * z, G = new L.Vector3(1, 0, 0), X = new L.Quaternion();
      X.setFromAxisAngle(G, D), j.current.quaternion.multiplyQuaternions(X, j.current.quaternion);
    }
  }), /* @__PURE__ */ ht("group", { children: /* @__PURE__ */ Ya("group", { ref: r, children: [
    /* @__PURE__ */ ht(dp, {}),
    /* @__PURE__ */ ht("group", { ref: j, children: /* @__PURE__ */ ht("group", { ref: _, children: /* @__PURE__ */ ht("primitive", { object: E.scene, scale: 2 }) }) })
  ] }) });
}
function yp(c) {
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
function rp(c) {
  const i = c.elements;
  return {
    seam_orientation_xx: i[0],
    seam_orientation_xy: i[1],
    seam_orientation_xz: i[2],
    seam_orientation_yx: i[4],
    seam_orientation_yy: i[5],
    seam_orientation_yz: i[6],
    seam_orientation_zx: i[8],
    seam_orientation_zy: i[9],
    seam_orientation_zz: i[10]
  };
}
function hp(c) {
  if (!c) return new L.Matrix4();
  const i = [
    c.xx,
    c.xy,
    c.xz,
    0,
    c.yx,
    c.yy,
    c.yz,
    0,
    c.zx,
    c.zy,
    c.zz,
    0,
    0,
    0,
    0,
    1
  ], s = new L.Matrix4();
  return s.set(...i), s;
}
function Sp() {
  const [c, i] = aa([]), [s, v] = aa(0), [o, E] = aa(!0), [j, _] = aa(null), [r, H] = aa(null);
  Sl(() => {
    fetch("/gilbert_augEighth.json").then((Y) => Y.json()).then((Y) => i(Y || []));
  }, []), Sl(() => {
    const Y = (B) => {
      if (B.data?.type === "pitch_idx")
        v(Number(B.data.value));
      else if (B.data?.type === "slider_update") {
        if ("spinTilt" in B.data && "spinGyro" in B.data) {
          const K = L.MathUtils.degToRad(B.data.spinTilt), V = L.MathUtils.degToRad(B.data.spinGyro), et = Math.cos(K), it = Math.sin(K) * Math.sin(V), k = Math.sin(K) * Math.cos(V);
          _(new L.Vector3(et, it, k).normalize());
        }
        if ("ballX" in B.data && "ballY" in B.data) {
          const K = new L.Matrix4();
          K.makeRotationFromEuler(new L.Euler(
            L.MathUtils.degToRad(B.data.ballX),
            L.MathUtils.degToRad(B.data.ballY),
            0,
            "XYZ"
          )), H(K);
        }
      } else B.data?.type === "play_toggle" && E(!!B.data.value);
    };
    return window.addEventListener("message", Y), () => window.removeEventListener("message", Y);
  }, []);
  const b = c[s] || null, z = yp(b), M = Lc(null);
  Sl(() => {
    if (M.current !== s && (M.current = s, b)) {
      const Y = new L.Vector3(
        -b.spin_x,
        b.spin_z,
        b.spin_y
      ).normalize(), B = L.MathUtils.radToDeg(Math.acos(Y.x)), K = (L.MathUtils.radToDeg(Math.atan2(Y.y, Y.z)) + 360) % 360;
      window.Shiny && window.Shiny.setInputValue && (window.Shiny.setInputValue("spinTilt", B, { priority: "event" }), window.Shiny.setInputValue("spinGyro", K, { priority: "event" }), window.Shiny.setInputValue("ballX", 0, { priority: "event" }), window.Shiny.setInputValue("ballY", 0, { priority: "event" }), window.Shiny.setInputValue("playing", !0, { priority: "event" }));
    }
  }, [b, s]);
  const D = qu(() => j || (b ? new L.Vector3(
    -b.spin_x,
    b.spin_z,
    b.spin_y
  ).normalize() : new L.Vector3(1, 0, 0)), [b, j]), G = qu(() => hp(z), [z]), X = qu(() => {
    const Y = G.clone();
    return r && Y.multiply(r), Y;
  }, [G, r]), Z = rp(X), g = {
    xx: Z.seam_orientation_xx,
    xy: Z.seam_orientation_xy,
    xz: Z.seam_orientation_xz,
    yx: Z.seam_orientation_yx,
    yy: Z.seam_orientation_yy,
    yz: Z.seam_orientation_yz,
    zx: Z.seam_orientation_zx,
    zy: Z.seam_orientation_zy,
    zz: Z.seam_orientation_zz
  };
  return /* @__PURE__ */ ht("div", { style: { width: "100vw", height: "100vh", position: "relative" }, children: /* @__PURE__ */ Ya(vp, { camera: { position: [0, 0, 0.45], fov: 50 }, children: [
    /* @__PURE__ */ ht("ambientLight", { intensity: 1 }),
    /* @__PURE__ */ ht("directionalLight", { position: [0, 0, 0.3], intensity: 1 }),
    /* @__PURE__ */ ht(
      pp,
      {
        spinRate: 50,
        playing: o,
        seamOrientation: g,
        spinAxis: D,
        useSeamOrientation: !0
      }
    )
  ] }) });
}
const Ep = document.getElementById("root"), zp = Lv(Ep);
zp.render(/* @__PURE__ */ ht(Sp, {}));
