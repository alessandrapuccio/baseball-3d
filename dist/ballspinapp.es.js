import { jsx as Z, jsxs as Ct } from "https://esm.sh/react/jsx-runtime";
import * as st from "https://esm.sh/react";
import He, { useState as ge, useRef as Js, useEffect as El, useMemo as yo } from "https://esm.sh/react";
import { createRoot as Lv } from "https://esm.sh/react-dom/client";
import * as I from "https://esm.sh/three";
import { GLTFLoader as Wv } from "https://esm.sh/three/examples/jsm/loaders/GLTFLoader";
function ho(c) {
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
function Fv() {
  return xs || (xs = 1, Ql.ConcurrentRoot = 1, Ql.ContinuousEventPriority = 8, Ql.DefaultEventPriority = 32, Ql.DiscreteEventPriority = 2, Ql.IdleEventPriority = 268435456, Ql.LegacyRoot = 0, Ql.NoEventPriority = 0), Ql;
}
var Ls;
function Pv() {
  return Ls || (Ls = 1, Hc.exports = Fv()), Hc.exports;
}
var qu = Pv(), Oc = { exports: {} }, Uc = {}, Rc = { exports: {} }, Ac = {};
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
function wv() {
  if (Ws) return Ac;
  Ws = 1;
  var c = He;
  function i(z, N) {
    return z === N && (z !== 0 || 1 / z === 1 / N) || z !== z && N !== N;
  }
  var s = typeof Object.is == "function" ? Object.is : i, v = c.useState, o = c.useEffect, E = c.useLayoutEffect, j = c.useDebugValue;
  function T(z, N) {
    var D = N(), C = v({ inst: { value: D, getSnapshot: N } }), q = C[0].inst, V = C[1];
    return E(
      function() {
        q.value = D, q.getSnapshot = N, y(q) && V({ inst: q });
      },
      [z, D, N]
    ), o(
      function() {
        return y(q) && V({ inst: q }), z(function() {
          y(q) && V({ inst: q });
        });
      },
      [z]
    ), j(D), D;
  }
  function y(z) {
    var N = z.getSnapshot;
    z = z.value;
    try {
      var D = N();
      return !s(z, D);
    } catch {
      return !0;
    }
  }
  function H(z, N) {
    return N();
  }
  var _ = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? H : T;
  return Ac.useSyncExternalStore = c.useSyncExternalStore !== void 0 ? c.useSyncExternalStore : _, Ac;
}
var Fs;
function Iv() {
  return Fs || (Fs = 1, Rc.exports = wv()), Rc.exports;
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
function $v() {
  if (Ps) return Uc;
  Ps = 1;
  var c = He, i = Iv();
  function s(H, _) {
    return H === _ && (H !== 0 || 1 / H === 1 / _) || H !== H && _ !== _;
  }
  var v = typeof Object.is == "function" ? Object.is : s, o = i.useSyncExternalStore, E = c.useRef, j = c.useEffect, T = c.useMemo, y = c.useDebugValue;
  return Uc.useSyncExternalStoreWithSelector = function(H, _, z, N, D) {
    var C = E(null);
    if (C.current === null) {
      var q = { hasValue: !1, value: null };
      C.current = q;
    } else q = C.current;
    C = T(
      function() {
        function g(G) {
          if (!b) {
            if (b = !0, K = G, G = N(G), D !== void 0 && q.hasValue) {
              var ct = q.value;
              if (D(ct, G))
                return J = ct;
            }
            return J = G;
          }
          if (ct = J, v(K, G)) return ct;
          var ot = N(G);
          return D !== void 0 && D(ct, ot) ? (K = G, ct) : (K = G, J = ot);
        }
        var b = !1, K, J, L = z === void 0 ? null : z;
        return [
          function() {
            return g(_());
          },
          L === null ? void 0 : function() {
            return g(L());
          }
        ];
      },
      [_, z, N, D]
    );
    var V = o(H, C[0], C[1]);
    return j(
      function() {
        q.hasValue = !0, q.value = V;
      },
      [V]
    ), y(V), V;
  }, Uc;
}
var ws;
function kv() {
  return ws || (ws = 1, Oc.exports = $v()), Oc.exports;
}
var t0 = kv();
const l0 = /* @__PURE__ */ ho(t0), Is = (c) => {
  let i;
  const s = /* @__PURE__ */ new Set(), v = (H, _) => {
    const z = typeof H == "function" ? H(i) : H;
    if (!Object.is(z, i)) {
      const N = i;
      i = _ ?? (typeof z != "object" || z === null) ? z : Object.assign({}, i, z), s.forEach((D) => D(i, N));
    }
  }, o = () => i, T = { setState: v, getState: o, getInitialState: () => y, subscribe: (H) => (s.add(H), () => s.delete(H)) }, y = i = c(v, o, T);
  return T;
}, e0 = (c) => c ? Is(c) : Is, { useSyncExternalStoreWithSelector: a0 } = l0, u0 = (c) => c;
function n0(c, i = u0, s) {
  const v = a0(
    c.subscribe,
    c.getState,
    c.getInitialState,
    i,
    s
  );
  return He.useDebugValue(v), v;
}
const $s = (c, i) => {
  const s = e0(c), v = (o, E = i) => n0(s, o, E);
  return Object.assign(v, s), v;
}, c0 = (c, i) => c ? $s(c, i) : $s;
var Dc = { exports: {} }, Cc = { exports: {} }, jc = { exports: {} }, qc = {};
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
function i0() {
  return ks || (ks = 1, function(c) {
    function i(S, O) {
      var A = S.length;
      S.push(O);
      t: for (; 0 < A; ) {
        var Q = A - 1 >>> 1, x = S[Q];
        if (0 < o(x, O))
          S[Q] = O, S[A] = x, A = Q;
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
        t: for (var Q = 0, x = S.length, tt = x >>> 1; Q < tt; ) {
          var it = 2 * (Q + 1) - 1, Mt = S[it], at = it + 1, Ut = S[at];
          if (0 > o(Mt, A))
            at < x && 0 > o(Ut, Mt) ? (S[Q] = Ut, S[at] = A, Q = at) : (S[Q] = Mt, S[it] = A, Q = it);
          else if (at < x && 0 > o(Ut, A))
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
      var j = Date, T = j.now();
      c.unstable_now = function() {
        return j.now() - T;
      };
    }
    var y = [], H = [], _ = 1, z = null, N = 3, D = !1, C = !1, q = !1, V = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    function K(S) {
      for (var O = s(H); O !== null; ) {
        if (O.callback === null) v(H);
        else if (O.startTime <= S)
          v(H), O.sortIndex = O.expirationTime, i(y, O);
        else break;
        O = s(H);
      }
    }
    function J(S) {
      if (q = !1, K(S), !C)
        if (s(y) !== null)
          C = !0, pt();
        else {
          var O = s(H);
          O !== null && bt(J, O.startTime - S);
        }
    }
    var L = !1, G = -1, ct = 5, ot = -1;
    function et() {
      return !(c.unstable_now() - ot < ct);
    }
    function P() {
      if (L) {
        var S = c.unstable_now();
        ot = S;
        var O = !0;
        try {
          t: {
            C = !1, q && (q = !1, g(G), G = -1), D = !0;
            var A = N;
            try {
              l: {
                for (K(S), z = s(y); z !== null && !(z.expirationTime > S && et()); ) {
                  var Q = z.callback;
                  if (typeof Q == "function") {
                    z.callback = null, N = z.priorityLevel;
                    var x = Q(
                      z.expirationTime <= S
                    );
                    if (S = c.unstable_now(), typeof x == "function") {
                      z.callback = x, K(S), O = !0;
                      break l;
                    }
                    z === s(y) && v(y), K(S);
                  } else v(y);
                  z = s(y);
                }
                if (z !== null) O = !0;
                else {
                  var tt = s(H);
                  tt !== null && bt(
                    J,
                    tt.startTime - S
                  ), O = !1;
                }
              }
              break t;
            } finally {
              z = null, N = A, D = !1;
            }
            O = void 0;
          }
        } finally {
          O ? $() : L = !1;
        }
      }
    }
    var $;
    if (typeof b == "function")
      $ = function() {
        b(P);
      };
    else if (typeof MessageChannel < "u") {
      var Jt = new MessageChannel(), k = Jt.port2;
      Jt.port1.onmessage = P, $ = function() {
        k.postMessage(null);
      };
    } else
      $ = function() {
        V(P, 0);
      };
    function pt() {
      L || (L = !0, $());
    }
    function bt(S, O) {
      G = V(function() {
        S(c.unstable_now());
      }, O);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, c.unstable_continueExecution = function() {
      C || D || (C = !0, pt());
    }, c.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ct = 0 < S ? Math.floor(1e3 / S) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, c.unstable_getFirstCallbackNode = function() {
      return s(y);
    }, c.unstable_next = function(S) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = N;
      }
      var A = N;
      N = O;
      try {
        return S();
      } finally {
        N = A;
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
      var A = N;
      N = S;
      try {
        return O();
      } finally {
        N = A;
      }
    }, c.unstable_scheduleCallback = function(S, O, A) {
      var Q = c.unstable_now();
      switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? Q + A : Q) : A = Q, S) {
        case 1:
          var x = -1;
          break;
        case 2:
          x = 250;
          break;
        case 5:
          x = 1073741823;
          break;
        case 4:
          x = 1e4;
          break;
        default:
          x = 5e3;
      }
      return x = A + x, S = {
        id: _++,
        callback: O,
        priorityLevel: S,
        startTime: A,
        expirationTime: x,
        sortIndex: -1
      }, A > Q ? (S.sortIndex = A, i(H, S), s(y) === null && S === s(H) && (q ? (g(G), G = -1) : q = !0, bt(J, A - Q))) : (S.sortIndex = x, i(y, S), C || D || (C = !0, pt())), S;
    }, c.unstable_shouldYield = et, c.unstable_wrapCallback = function(S) {
      var O = N;
      return function() {
        var A = N;
        N = O;
        try {
          return S.apply(this, arguments);
        } finally {
          N = A;
        }
      };
    };
  }(qc)), qc;
}
var to;
function f0() {
  return to || (to = 1, jc.exports = i0()), jc.exports;
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
function s0() {
  return lo || (lo = 1, function(c) {
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
        return t === null || typeof t != "object" ? null : (t = os && t[os] || t["@@iterator"], typeof t == "function" ? t : null);
      }
      function j(t) {
        if (t == null) return null;
        if (typeof t == "function")
          return t.$$typeof === rm ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
          case Ye:
            return "Fragment";
          case Be:
            return "Portal";
          case Fn:
            return "Profiler";
          case is:
            return "StrictMode";
          case wn:
            return "Suspense";
          case In:
            return "SuspenseList";
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case Pl:
              return (t.displayName || "Context") + ".Provider";
            case fs:
              return (t._context.displayName || "Context") + ".Consumer";
            case Pn:
              var l = t.render;
              return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case $n:
              return l = t.displayName || null, l !== null ? l : j(t.type) || "Memo";
            case wl:
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
      function y(t, l) {
        if (!t || tc) return "";
        tc = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var a = {
            DetermineComponentFrameRoot: function() {
              try {
                if (l) {
                  var B = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(B.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(B, []);
                    } catch (w) {
                      var Y = w;
                    }
                    Reflect.construct(t, [], B);
                  } else {
                    try {
                      B.call();
                    } catch (w) {
                      Y = w;
                    }
                    t.call(B.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (w) {
                    Y = w;
                  }
                  (B = t()) && typeof B.catch == "function" && B.catch(function() {
                  });
                }
              } catch (w) {
                if (w && Y && typeof w.stack == "string")
                  return [w.stack, Y.stack];
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
`), M = m.split(`
`);
            for (u = a = 0; a < p.length && !p[a].includes("DetermineComponentFrameRoot"); )
              a++;
            for (; u < M.length && !M[u].includes(
              "DetermineComponentFrameRoot"
            ); )
              u++;
            if (a === p.length || u === M.length)
              for (a = p.length - 1, u = M.length - 1; 1 <= a && 0 <= u && p[a] !== M[u]; )
                u--;
            for (; 1 <= a && 0 <= u; a--, u--)
              if (p[a] !== M[u]) {
                if (a !== 1 || u !== 1)
                  do
                    if (a--, u--, 0 > u || p[a] !== M[u]) {
                      var R = `
` + p[a].replace(" at new ", " at ");
                      return t.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", t.displayName)), R;
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
            return t = y(t.type, !1), t;
          case 11:
            return t = y(t.type.render, !1), t;
          case 1:
            return t = y(t.type, !0), t;
          default:
            return "";
        }
      }
      function _(t) {
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
      function N(t) {
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
              if (n === e) return N(u), t;
              if (n === a) return N(u), l;
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
      function C(t) {
        var l = t.tag;
        if (l === 5 || l === 26 || l === 27 || l === 6) return t;
        for (t = t.child; t !== null; ) {
          if (l = C(t), l !== null) return l;
          t = t.sibling;
        }
        return null;
      }
      function q(t) {
        var l = t.tag;
        if (l === 5 || l === 26 || l === 27 || l === 6) return t;
        for (t = t.child; t !== null; ) {
          if (t.tag !== 4 && (l = q(t), l !== null))
            return l;
          t = t.sibling;
        }
        return null;
      }
      function V(t) {
        return { current: t };
      }
      function g(t) {
        0 > Ge || (t.current = cc[Ge], cc[Ge] = null, Ge--);
      }
      function b(t, l) {
        Ge++, cc[Ge] = t.current, t.current = l;
      }
      function K(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (Rv(t) / Av | 0) | 0;
      }
      function J(t) {
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
      function L(t, l) {
        var e = t.pendingLanes;
        if (e === 0) return 0;
        var a = 0, u = t.suspendedLanes, n = t.pingedLanes, f = t.warmLanes;
        t = t.finishedLanes !== 0;
        var m = e & 134217727;
        return m !== 0 ? (e = m & ~u, e !== 0 ? a = J(e) : (n &= m, n !== 0 ? a = J(n) : t || (f = m & ~f, f !== 0 && (a = J(f))))) : (m = e & ~u, m !== 0 ? a = J(m) : n !== 0 ? a = J(n) : t || (f = e & ~f, f !== 0 && (a = J(f)))), a === 0 ? 0 : l !== 0 && l !== a && (l & u) === 0 && (u = a & -a, f = l & -l, u >= f || u === 32 && (f & 4194176) !== 0) ? l : a;
      }
      function G(t, l) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
      }
      function ct(t, l) {
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
      function ot() {
        var t = du;
        return du <<= 1, (du & 4194176) === 0 && (du = 128), t;
      }
      function et() {
        var t = pu;
        return pu <<= 1, (pu & 62914560) === 0 && (pu = 4194304), t;
      }
      function P(t) {
        for (var l = [], e = 0; 31 > e; e++) l.push(t);
        return l;
      }
      function $(t, l) {
        t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
      }
      function Jt(t, l, e, a, u, n) {
        var f = t.pendingLanes;
        t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
        var m = t.entanglements, p = t.expirationTimes, M = t.hiddenUpdates;
        for (e = f & ~e; 0 < e; ) {
          var R = 31 - el(e), B = 1 << R;
          m[R] = 0, p[R] = -1;
          var Y = M[R];
          if (Y !== null)
            for (M[R] = null, R = 0; R < Y.length; R++) {
              var w = Y[R];
              w !== null && (w.lane &= -536870913);
            }
          e &= ~B;
        }
        a !== 0 && k(t, a, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(f & ~l));
      }
      function k(t, l, e) {
        t.pendingLanes |= l, t.suspendedLanes &= ~l;
        var a = 31 - el(l);
        t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 4194218;
      }
      function pt(t, l) {
        var e = t.entangledLanes |= l;
        for (t = t.entanglements; e; ) {
          var a = 31 - el(e), u = 1 << a;
          u & l | t[a] & l && (t[a] |= l), e &= ~u;
        }
      }
      function bt(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function S(t) {
        if (al && typeof al.onCommitFiberRoot == "function")
          try {
            al.onCommitFiberRoot(
              _a,
              t,
              void 0,
              (t.current.flags & 128) === 128
            );
          } catch {
          }
      }
      function O(t) {
        if (typeof Bv == "function" && Yv(t), al && typeof al.setStrictMode == "function")
          try {
            al.setStrictMode(_a, t);
          } catch {
          }
      }
      function A(t, l) {
        return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
      }
      function Q(t, l) {
        if (typeof t == "object" && t !== null) {
          var e = Ys.get(t);
          return e !== void 0 ? e : (l = {
            value: t,
            source: l,
            stack: _(l)
          }, Ys.set(t, l), l);
        }
        return {
          value: t,
          source: l,
          stack: _(l)
        };
      }
      function x(t, l) {
        Xe[Ze++] = hu, Xe[Ze++] = yu, yu = t, hu = l;
      }
      function tt(t, l, e) {
        sl[ol++] = Dl, sl[ol++] = Cl, sl[ol++] = re, re = t;
        var a = Dl;
        t = Cl;
        var u = 32 - el(a) - 1;
        a &= ~(1 << u), e += 1;
        var n = 32 - el(l) + u;
        if (30 < n) {
          var f = u - u % 5;
          n = (a & (1 << f) - 1).toString(32), a >>= f, u -= f, Dl = 1 << 32 - el(l) + u | e << u | a, Cl = n + t;
        } else
          Dl = 1 << n | e << u | a, Cl = t;
      }
      function it(t) {
        t.return !== null && (x(t, 1), tt(t, 1, 0));
      }
      function Mt(t) {
        for (; t === yu; )
          yu = Xe[--Ze], Xe[Ze] = null, hu = Xe[--Ze], Xe[Ze] = null;
        for (; t === re; )
          re = sl[--ol], sl[ol] = null, Cl = sl[--ol], sl[ol] = null, Dl = sl[--ol], sl[ol] = null;
      }
      function at(t, l) {
        b($l, l), b(Ha, t), b(Gt, null), t = Sm(l), g(Gt), b(Gt, t);
      }
      function Ut() {
        g(Gt), g(Ha), g($l);
      }
      function Ue(t) {
        t.memoizedState !== null && b(Su, t);
        var l = Gt.current, e = Em(l, t.type);
        l !== e && (b(Ha, t), b(Gt, e));
      }
      function Xa(t) {
        Ha.current === t && (g(Gt), g(Ha)), Su.current === t && (g(Su), Al ? pe._currentValue = Qe : pe._currentValue2 = Qe);
      }
      function ce(t) {
        var l = Error(o(418, ""));
        throw sa(Q(l, t)), sc;
      }
      function li(t, l) {
        if (!il) throw Error(o(175));
        vv(
          t.stateNode,
          t.type,
          t.memoizedProps,
          l,
          t
        ) || ce(t);
      }
      function ei(t) {
        for (Lt = t.return; Lt; )
          switch (Lt.tag) {
            case 3:
            case 27:
              Tl = !0;
              return;
            case 5:
            case 13:
              Tl = !1;
              return;
            default:
              Lt = Lt.return;
          }
      }
      function ia(t) {
        if (!il || t !== Lt) return !1;
        if (!mt) return ei(t), mt = !0, !1;
        var l = !1;
        if (Zt ? t.tag !== 3 && t.tag !== 27 && (t.tag !== 5 || _s(t.type) && !vu(t.type, t.memoizedProps)) && (l = !0) : t.tag !== 3 && (t.tag !== 5 || _s(t.type) && !vu(t.type, t.memoizedProps)) && (l = !0), l && Kt && ce(t), ei(t), t.tag === 13) {
          if (!il) throw Error(o(316));
          if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
          Kt = rv(t);
        } else
          Kt = Lt ? bs(t.stateNode) : null;
        return !0;
      }
      function fa() {
        il && (Kt = Lt = null, mt = !1);
      }
      function sa(t) {
        hl === null ? hl = [t] : hl.push(t);
      }
      function Za() {
        for (var t = Ke, l = oc = Ke = 0; l < t; ) {
          var e = ml[l];
          ml[l++] = null;
          var a = ml[l];
          ml[l++] = null;
          var u = ml[l];
          ml[l++] = null;
          var n = ml[l];
          if (ml[l++] = null, a !== null && u !== null) {
            var f = a.pending;
            f === null ? u.next = u : (u.next = f.next, f.next = u), a.pending = u;
          }
          n !== 0 && ai(e, u, n);
        }
      }
      function Ka(t, l, e, a) {
        ml[Ke++] = t, ml[Ke++] = l, ml[Ke++] = e, ml[Ke++] = a, oc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
      }
      function Zu(t, l, e, a) {
        return Ka(t, l, e, a), Ja(t);
      }
      function Gl(t, l) {
        return Ka(t, null, null, l), Ja(t);
      }
      function ai(t, l, e) {
        t.lanes |= e;
        var a = t.alternate;
        a !== null && (a.lanes |= e);
        for (var u = !1, n = t.return; n !== null; )
          n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (u = !0)), t = n, n = n.return;
        u && l !== null && t.tag === 3 && (n = t.stateNode, u = 31 - el(e), n = n.hiddenUpdates, t = n[u], t === null ? n[u] = [l] : t.push(l), l.lane = e | 536870912);
      }
      function Ja(t) {
        if (50 < Ba)
          throw Ba = 0, _c = null, Error(o(185));
        for (var l = t.return; l !== null; )
          t = l, l = t.return;
        return t.tag === 3 ? t.stateNode : null;
      }
      function zl(t) {
        t !== Je && t.next === null && (Je === null ? Eu = Je = t : Je = Je.next = t), zu = !0, mc || (mc = !0, Vo(Go));
      }
      function Re(t, l) {
        if (!vc && zu) {
          vc = !0;
          do
            for (var e = !1, a = Eu; a !== null; ) {
              if (t !== 0) {
                var u = a.pendingLanes;
                if (u === 0) var n = 0;
                else {
                  var f = a.suspendedLanes, m = a.pingedLanes;
                  n = (1 << 31 - el(42 | t) + 1) - 1, n &= u & ~(f & ~m), n = n & 201326677 ? n & 201326677 | 1 : n ? n | 2 : 0;
                }
                n !== 0 && (e = !0, ci(a, n));
              } else
                n = ft, n = L(
                  a,
                  a === St ? n : 0
                ), (n & 3) === 0 || G(a, n) || (e = !0, ci(a, n));
              a = a.next;
            }
          while (e);
          vc = !1;
        }
      }
      function Go() {
        zu = mc = !1;
        var t = 0;
        xe !== 0 && (Hm() && (t = xe), xe = 0);
        for (var l = yl(), e = null, a = Eu; a !== null; ) {
          var u = a.next, n = ui(a, l);
          n === 0 ? (a.next = null, e === null ? Eu = u : e.next = u, u === null && (Je = e)) : (e = a, (t !== 0 || (n & 3) !== 0) && (zu = !0)), a = u;
        }
        Re(t);
      }
      function ui(t, l) {
        for (var e = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
          var f = 31 - el(n), m = 1 << f, p = u[f];
          p === -1 ? ((m & e) === 0 || (m & a) !== 0) && (u[f] = ct(m, l)) : p <= l && (t.expiredLanes |= m), n &= ~m;
        }
        if (l = St, e = ft, e = L(
          t,
          t === l ? e : 0
        ), a = t.callbackNode, e === 0 || t === l && Et === 2 || t.cancelPendingCommit !== null)
          return a !== null && a !== null && ic(a), t.callbackNode = null, t.callbackPriority = 0;
        if ((e & 3) === 0 || G(t, e)) {
          if (l = e & -e, l === t.callbackPriority) return l;
          switch (a !== null && ic(a), bt(e)) {
            case 2:
            case 8:
              e = jv;
              break;
            case 32:
              e = fc;
              break;
            case 268435456:
              e = qv;
              break;
            default:
              e = fc;
          }
          return a = ni.bind(null, t), e = ru(e, a), t.callbackPriority = l, t.callbackNode = e, l;
        }
        return a !== null && a !== null && ic(a), t.callbackPriority = 2, t.callbackNode = null, 2;
      }
      function ni(t, l) {
        var e = t.callbackNode;
        if (me() && t.callbackNode !== e)
          return null;
        var a = ft;
        return a = L(
          t,
          t === St ? a : 0
        ), a === 0 ? null : (Vf(t, a, l), ui(t, yl()), t.callbackNode != null && t.callbackNode === e ? ni.bind(null, t) : null);
      }
      function ci(t, l) {
        if (me()) return null;
        Vf(t, l, !0);
      }
      function Vo(t) {
        Cm ? jm(function() {
          (ht & 6) !== 0 ? ru(Bs, t) : t();
        }) : ru(Bs, t);
      }
      function Ku() {
        return xe === 0 && (xe = ot()), xe;
      }
      function Xo(t, l) {
        if (Oa === null) {
          var e = Oa = [];
          dc = 0, Le = Ku(), We = {
            status: "pending",
            value: void 0,
            then: function(a) {
              e.push(a);
            }
          };
        }
        return dc++, l.then(ii, ii), l;
      }
      function ii() {
        if (--dc === 0 && Oa !== null) {
          We !== null && (We.status = "fulfilled");
          var t = Oa;
          Oa = null, Le = 0, We = null;
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
      function xu(t, l) {
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
      function Xl(t, l, e) {
        var a = t.updateQueue;
        if (a === null) return null;
        if (a = a.shared, (ht & 2) !== 0) {
          var u = a.pending;
          return u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l, l = Ja(t), ai(t, null, e), l;
        }
        return Ka(t, a, l, e), Ja(t);
      }
      function oa(t, l, e) {
        if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194176) !== 0)) {
          var a = l.lanes;
          a &= t.pendingLanes, e |= a, l.lanes = e, pt(t, e);
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
      function ma() {
        if (pc) {
          var t = We;
          if (t !== null) throw t;
        }
      }
      function va(t, l, e, a) {
        pc = !1;
        var u = t.updateQueue;
        kl = !1;
        var n = u.firstBaseUpdate, f = u.lastBaseUpdate, m = u.shared.pending;
        if (m !== null) {
          u.shared.pending = null;
          var p = m, M = p.next;
          p.next = null, f === null ? n = M : f.next = M, f = p;
          var R = t.alternate;
          R !== null && (R = R.updateQueue, m = R.lastBaseUpdate, m !== f && (m === null ? R.firstBaseUpdate = M : m.next = M, R.lastBaseUpdate = p));
        }
        if (n !== null) {
          var B = u.baseState;
          f = 0, R = M = p = null, m = n;
          do {
            var Y = m.lane & -536870913, w = Y !== m.lane;
            if (w ? (ft & Y) === Y : (a & Y) === Y) {
              Y !== 0 && Y === Le && (pc = !0), R !== null && (R = R.next = {
                lane: 0,
                tag: m.tag,
                payload: m.payload,
                callback: null,
                next: null
              });
              t: {
                var pl = t, Ya = m;
                Y = l;
                var be = e;
                switch (Ya.tag) {
                  case 1:
                    if (pl = Ya.payload, typeof pl == "function") {
                      B = pl.call(
                        be,
                        B,
                        Y
                      );
                      break t;
                    }
                    B = pl;
                    break t;
                  case 3:
                    pl.flags = pl.flags & -65537 | 128;
                  case 0:
                    if (pl = Ya.payload, Y = typeof pl == "function" ? pl.call(be, B, Y) : pl, Y == null) break t;
                    B = Wn({}, B, Y);
                    break t;
                  case 2:
                    kl = !0;
                }
              }
              Y = m.callback, Y !== null && (t.flags |= 64, w && (t.flags |= 8192), w = u.callbacks, w === null ? u.callbacks = [Y] : w.push(Y));
            } else
              w = {
                lane: Y,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null
              }, R === null ? (M = R = w, p = B) : R = R.next = w, f |= Y;
            if (m = m.next, m === null) {
              if (m = u.shared.pending, m === null)
                break;
              w = m, m = w.next, w.next = null, u.lastBaseUpdate = w, u.shared.pending = null;
            }
          } while (!0);
          R === null && (p = B), u.baseState = p, u.firstBaseUpdate = M, u.lastBaseUpdate = R, n === null && (u.shared.lanes = 0), ee |= f, t.lanes = f, t.memoizedState = B;
        }
      }
      function fi(t, l) {
        if (typeof t != "function")
          throw Error(o(191, t));
        t.call(l);
      }
      function si(t, l) {
        var e = t.callbacks;
        if (e !== null)
          for (t.callbacks = null, t = 0; t < e.length; t++)
            fi(e[t], l);
      }
      function xa(t, l) {
        if (ul(t, l)) return !0;
        if (typeof t != "object" || t === null || typeof l != "object" || l === null)
          return !1;
        var e = Object.keys(t), a = Object.keys(l);
        if (e.length !== a.length) return !1;
        for (a = 0; a < e.length; a++) {
          var u = e[a];
          if (!Qv.call(l, u) || !ul(t[u], l[u]))
            return !1;
        }
        return !0;
      }
      function oi(t) {
        return t = t.status, t === "fulfilled" || t === "rejected";
      }
      function La() {
      }
      function mi(t, l, e) {
        switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(La, La), l = e), l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, t === Ua ? Error(o(483)) : t;
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
                throw t = l.reason, t === Ua ? Error(o(483)) : t;
            }
            throw Fe = l, Ua;
        }
      }
      function vi() {
        if (Fe === null) throw Error(o(459));
        var t = Fe;
        return Fe = null, t;
      }
      function Wa(t) {
        var l = Ra;
        return Ra += 1, Pe === null && (Pe = []), mi(Pe, t, l);
      }
      function da(t, l) {
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
      function di(t) {
        var l = t._init;
        return l(t._payload);
      }
      function pi(t) {
        function l(r, d) {
          if (t) {
            var h = r.deletions;
            h === null ? (r.deletions = [d], r.flags |= 16) : h.push(d);
          }
        }
        function e(r, d) {
          if (!t) return null;
          for (; d !== null; )
            l(r, d), d = d.sibling;
          return null;
        }
        function a(r) {
          for (var d = /* @__PURE__ */ new Map(); r !== null; )
            r.key !== null ? d.set(r.key, r) : d.set(r.index, r), r = r.sibling;
          return d;
        }
        function u(r, d) {
          return r = Fl(r, d), r.index = 0, r.sibling = null, r;
        }
        function n(r, d, h) {
          return r.index = h, t ? (h = r.alternate, h !== null ? (h = h.index, h < d ? (r.flags |= 33554434, d) : h) : (r.flags |= 33554434, d)) : (r.flags |= 1048576, d);
        }
        function f(r) {
          return t && r.alternate === null && (r.flags |= 33554434), r;
        }
        function m(r, d, h, U) {
          return d === null || d.tag !== 6 ? (d = Jn(h, r.mode, U), d.return = r, d) : (d = u(d, h), d.return = r, d);
        }
        function p(r, d, h, U) {
          var X = h.type;
          return X === Ye ? R(
            r,
            d,
            h.props.children,
            U,
            h.key
          ) : d !== null && (d.elementType === X || typeof X == "object" && X !== null && X.$$typeof === wl && di(X) === d.type) ? (d = u(d, h.props), da(d, h), d.return = r, d) : (d = su(
            h.type,
            h.key,
            h.props,
            null,
            r.mode,
            U
          ), da(d, h), d.return = r, d);
        }
        function M(r, d, h, U) {
          return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = xn(h, r.mode, U), d.return = r, d) : (d = u(d, h.children || []), d.return = r, d);
        }
        function R(r, d, h, U, X) {
          return d === null || d.tag !== 7 ? (d = ve(
            h,
            r.mode,
            U,
            X
          ), d.return = r, d) : (d = u(d, h), d.return = r, d);
        }
        function B(r, d, h) {
          if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
            return d = Jn(
              "" + d,
              r.mode,
              h
            ), d.return = r, d;
          if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
              case ou:
                return h = su(
                  d.type,
                  d.key,
                  d.props,
                  null,
                  r.mode,
                  h
                ), da(h, d), h.return = r, h;
              case Be:
                return d = xn(
                  d,
                  r.mode,
                  h
                ), d.return = r, d;
              case wl:
                var U = d._init;
                return d = U(d._payload), B(r, d, h);
            }
            if (mu(d) || E(d))
              return d = ve(
                d,
                r.mode,
                h,
                null
              ), d.return = r, d;
            if (typeof d.then == "function")
              return B(r, Wa(d), h);
            if (d.$$typeof === Pl)
              return B(
                r,
                au(r, d),
                h
              );
            Fa(r, d);
          }
          return null;
        }
        function Y(r, d, h, U) {
          var X = d !== null ? d.key : null;
          if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
            return X !== null ? null : m(r, d, "" + h, U);
          if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
              case ou:
                return h.key === X ? p(r, d, h, U) : null;
              case Be:
                return h.key === X ? M(r, d, h, U) : null;
              case wl:
                return X = h._init, h = X(h._payload), Y(r, d, h, U);
            }
            if (mu(h) || E(h))
              return X !== null ? null : R(r, d, h, U, null);
            if (typeof h.then == "function")
              return Y(
                r,
                d,
                Wa(h),
                U
              );
            if (h.$$typeof === Pl)
              return Y(
                r,
                d,
                au(r, h),
                U
              );
            Fa(r, h);
          }
          return null;
        }
        function w(r, d, h, U, X) {
          if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
            return r = r.get(h) || null, m(d, r, "" + U, X);
          if (typeof U == "object" && U !== null) {
            switch (U.$$typeof) {
              case ou:
                return r = r.get(
                  U.key === null ? h : U.key
                ) || null, p(d, r, U, X);
              case Be:
                return r = r.get(
                  U.key === null ? h : U.key
                ) || null, M(d, r, U, X);
              case wl:
                var zt = U._init;
                return U = zt(U._payload), w(
                  r,
                  d,
                  h,
                  U,
                  X
                );
            }
            if (mu(U) || E(U))
              return r = r.get(h) || null, R(d, r, U, X, null);
            if (typeof U.then == "function")
              return w(
                r,
                d,
                h,
                Wa(U),
                X
              );
            if (U.$$typeof === Pl)
              return w(
                r,
                d,
                h,
                au(d, U),
                X
              );
            Fa(d, U);
          }
          return null;
        }
        function pl(r, d, h, U) {
          for (var X = null, zt = null, W = d, vt = d = 0, Yt = null; W !== null && vt < h.length; vt++) {
            W.index > vt ? (Yt = W, W = null) : Yt = W.sibling;
            var dt = Y(
              r,
              W,
              h[vt],
              U
            );
            if (dt === null) {
              W === null && (W = Yt);
              break;
            }
            t && W && dt.alternate === null && l(r, W), d = n(dt, d, vt), zt === null ? X = dt : zt.sibling = dt, zt = dt, W = Yt;
          }
          if (vt === h.length)
            return e(r, W), mt && x(r, vt), X;
          if (W === null) {
            for (; vt < h.length; vt++)
              W = B(r, h[vt], U), W !== null && (d = n(
                W,
                d,
                vt
              ), zt === null ? X = W : zt.sibling = W, zt = W);
            return mt && x(r, vt), X;
          }
          for (W = a(W); vt < h.length; vt++)
            Yt = w(
              W,
              r,
              vt,
              h[vt],
              U
            ), Yt !== null && (t && Yt.alternate !== null && W.delete(
              Yt.key === null ? vt : Yt.key
            ), d = n(
              Yt,
              d,
              vt
            ), zt === null ? X = Yt : zt.sibling = Yt, zt = Yt);
          return t && W.forEach(function(ue) {
            return l(r, ue);
          }), mt && x(r, vt), X;
        }
        function Ya(r, d, h, U) {
          if (h == null) throw Error(o(151));
          for (var X = null, zt = null, W = d, vt = d = 0, Yt = null, dt = h.next(); W !== null && !dt.done; vt++, dt = h.next()) {
            W.index > vt ? (Yt = W, W = null) : Yt = W.sibling;
            var ue = Y(r, W, dt.value, U);
            if (ue === null) {
              W === null && (W = Yt);
              break;
            }
            t && W && ue.alternate === null && l(r, W), d = n(ue, d, vt), zt === null ? X = ue : zt.sibling = ue, zt = ue, W = Yt;
          }
          if (dt.done)
            return e(r, W), mt && x(r, vt), X;
          if (W === null) {
            for (; !dt.done; vt++, dt = h.next())
              dt = B(r, dt.value, U), dt !== null && (d = n(
                dt,
                d,
                vt
              ), zt === null ? X = dt : zt.sibling = dt, zt = dt);
            return mt && x(r, vt), X;
          }
          for (W = a(W); !dt.done; vt++, dt = h.next())
            dt = w(
              W,
              r,
              vt,
              dt.value,
              U
            ), dt !== null && (t && dt.alternate !== null && W.delete(dt.key === null ? vt : dt.key), d = n(dt, d, vt), zt === null ? X = dt : zt.sibling = dt, zt = dt);
          return t && W.forEach(function(xv) {
            return l(r, xv);
          }), mt && x(r, vt), X;
        }
        function be(r, d, h, U) {
          if (typeof h == "object" && h !== null && h.type === Ye && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
              case ou:
                t: {
                  for (var X = h.key; d !== null; ) {
                    if (d.key === X) {
                      if (X = h.type, X === Ye) {
                        if (d.tag === 7) {
                          e(
                            r,
                            d.sibling
                          ), U = u(
                            d,
                            h.props.children
                          ), U.return = r, r = U;
                          break t;
                        }
                      } else if (d.elementType === X || typeof X == "object" && X !== null && X.$$typeof === wl && di(X) === d.type) {
                        e(
                          r,
                          d.sibling
                        ), U = u(d, h.props), da(U, h), U.return = r, r = U;
                        break t;
                      }
                      e(r, d);
                      break;
                    } else l(r, d);
                    d = d.sibling;
                  }
                  h.type === Ye ? (U = ve(
                    h.props.children,
                    r.mode,
                    U,
                    h.key
                  ), U.return = r, r = U) : (U = su(
                    h.type,
                    h.key,
                    h.props,
                    null,
                    r.mode,
                    U
                  ), da(U, h), U.return = r, r = U);
                }
                return f(r);
              case Be:
                t: {
                  for (X = h.key; d !== null; ) {
                    if (d.key === X)
                      if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                        e(
                          r,
                          d.sibling
                        ), U = u(
                          d,
                          h.children || []
                        ), U.return = r, r = U;
                        break t;
                      } else {
                        e(r, d);
                        break;
                      }
                    else l(r, d);
                    d = d.sibling;
                  }
                  U = xn(h, r.mode, U), U.return = r, r = U;
                }
                return f(r);
              case wl:
                return X = h._init, h = X(h._payload), be(
                  r,
                  d,
                  h,
                  U
                );
            }
            if (mu(h))
              return pl(
                r,
                d,
                h,
                U
              );
            if (E(h)) {
              if (X = E(h), typeof X != "function")
                throw Error(o(150));
              return h = X.call(h), Ya(
                r,
                d,
                h,
                U
              );
            }
            if (typeof h.then == "function")
              return be(
                r,
                d,
                Wa(h),
                U
              );
            if (h.$$typeof === Pl)
              return be(
                r,
                d,
                au(r, h),
                U
              );
            Fa(r, h);
          }
          return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, d !== null && d.tag === 6 ? (e(r, d.sibling), U = u(d, h), U.return = r, r = U) : (e(r, d), U = Jn(h, r.mode, U), U.return = r, r = U), f(r)) : e(r, d);
        }
        return function(r, d, h, U) {
          try {
            Ra = 0;
            var X = be(
              r,
              d,
              h,
              U
            );
            return Pe = null, X;
          } catch (W) {
            if (W === Ua) throw W;
            var zt = s(29, W, null, r.mode);
            return zt.lanes = U, zt.return = r, zt;
          } finally {
          }
        };
      }
      function ri(t, l) {
        t = Yl, b(Mu, t), b(we, l), Yl = t | l.baseLanes;
      }
      function Wu() {
        b(Mu, Yl), b(we, we.current);
      }
      function Fu() {
        Yl = Mu.current, g(we), g(Mu);
      }
      function Zl(t) {
        var l = t.alternate;
        b(jt, jt.current & 1), b(vl, t), Ml === null && (l === null || we.current !== null || l.memoizedState !== null) && (Ml = t);
      }
      function yi(t) {
        if (t.tag === 22) {
          if (b(jt, jt.current), b(vl, t), Ml === null) {
            var l = t.alternate;
            l !== null && l.memoizedState !== null && (Ml = t);
          }
        } else Kl();
      }
      function Kl() {
        b(jt, jt.current), b(vl, vl.current);
      }
      function gl(t) {
        g(vl), Ml === t && (Ml = null), g(jt);
      }
      function Pa(t) {
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
          if (!ul(t[e], l[e])) return !1;
        return !0;
      }
      function wu(t, l, e, a, u, n) {
        return te = n, lt = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, F.H = t === null || t.memoizedState === null ? Se : le, he = !1, n = e(a, u), he = !1, Ie && (n = Si(
          l,
          e,
          a,
          u
        )), hi(t), n;
      }
      function hi(t) {
        F.H = Nl;
        var l = yt !== null && yt.next !== null;
        if (te = 0, At = yt = lt = null, Nu = !1, Aa = 0, $e = null, l) throw Error(o(300));
        t === null || qt || (t = t.dependencies, t !== null && eu(t) && (qt = !0));
      }
      function Si(t, l, e, a) {
        lt = t;
        var u = 0;
        do {
          if (Ie && ($e = null), Aa = 0, Ie = !1, 25 <= u) throw Error(o(301));
          if (u += 1, At = yt = null, t.updateQueue != null) {
            var n = t.updateQueue;
            n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
          }
          F.H = Ee, n = l(e, a);
        } while (Ie);
        return n;
      }
      function Ko() {
        var t = F.H, l = t.useState()[0];
        return l = typeof l.then == "function" ? pa(l) : l, t = t.useState()[0], (yt !== null ? yt.memoizedState : null) !== t && (lt.flags |= 1024), l;
      }
      function Iu() {
        var t = bu !== 0;
        return bu = 0, t;
      }
      function $u(t, l, e) {
        l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
      }
      function ku(t) {
        if (Nu) {
          for (t = t.memoizedState; t !== null; ) {
            var l = t.queue;
            l !== null && (l.pending = null), t = t.next;
          }
          Nu = !1;
        }
        te = 0, At = yt = lt = null, Ie = !1, Aa = bu = 0, $e = null;
      }
      function Ft() {
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
      function pa(t) {
        var l = Aa;
        return Aa += 1, $e === null && ($e = []), t = mi($e, t, l), l = lt, (At === null ? l.memoizedState : At.next) === null && (l = l.alternate, F.H = l === null || l.memoizedState === null ? Se : le), t;
      }
      function wa(t) {
        if (t !== null && typeof t == "object") {
          if (typeof t.then == "function") return pa(t);
          if (t.$$typeof === Pl) return Vt(t);
        }
        throw Error(o(438, String(t)));
      }
      function tn(t) {
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
        if (l == null && (l = { data: [], index: 0 }), e === null && (e = yc(), lt.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
          for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
            e[a] = pm;
        return l.index++, e;
      }
      function _l(t, l) {
        return typeof l == "function" ? l(t) : l;
      }
      function Ia(t) {
        var l = Rt();
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
          var m = f = null, p = null, M = l, R = !1;
          do {
            var B = M.lane & -536870913;
            if (B !== M.lane ? (ft & B) === B : (te & B) === B) {
              var Y = M.revertLane;
              if (Y === 0)
                p !== null && (p = p.next = {
                  lane: 0,
                  revertLane: 0,
                  action: M.action,
                  hasEagerState: M.hasEagerState,
                  eagerState: M.eagerState,
                  next: null
                }), B === Le && (R = !0);
              else if ((te & Y) === Y) {
                M = M.next, Y === Le && (R = !0);
                continue;
              } else
                B = {
                  lane: 0,
                  revertLane: M.revertLane,
                  action: M.action,
                  hasEagerState: M.hasEagerState,
                  eagerState: M.eagerState,
                  next: null
                }, p === null ? (m = p = B, f = n) : p = p.next = B, lt.lanes |= Y, ee |= Y;
              B = M.action, he && e(n, B), n = M.hasEagerState ? M.eagerState : e(n, B);
            } else
              Y = {
                lane: B,
                revertLane: M.revertLane,
                action: M.action,
                hasEagerState: M.hasEagerState,
                eagerState: M.eagerState,
                next: null
              }, p === null ? (m = p = Y, f = n) : p = p.next = Y, lt.lanes |= B, ee |= B;
            M = M.next;
          } while (M !== null && M !== l);
          if (p === null ? f = n : p.next = m, !ul(n, t.memoizedState) && (qt = !0, R && (e = We, e !== null)))
            throw e;
          t.memoizedState = n, t.baseState = f, t.baseQueue = p, a.lastRenderedState = n;
        }
        return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
      }
      function en(t) {
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
          ul(n, l.memoizedState) || (qt = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
        }
        return [n, a];
      }
      function Ei(t, l, e) {
        var a = lt, u = Rt(), n = mt;
        if (n) {
          if (e === void 0)
            throw Error(o(407));
          e = e();
        } else e = l();
        var f = !ul(
          (yt || u).memoizedState,
          e
        );
        if (f && (u.memoizedState = e, qt = !0), u = u.queue, nn(Mi.bind(null, a, u, t), [
          t
        ]), u.getSnapshot !== l || f || At !== null && At.memoizedState.tag & 1) {
          if (a.flags |= 2048, Ae(
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
          n || (te & 60) !== 0 || zi(a, l, e);
        }
        return e;
      }
      function zi(t, l, e) {
        t.flags |= 16384, t = { getSnapshot: l, value: e }, l = lt.updateQueue, l === null ? (l = yc(), lt.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
      }
      function Ti(t, l, e, a) {
        l.value = e, l.getSnapshot = a, Ni(l) && bi(t);
      }
      function Mi(t, l, e) {
        return e(function() {
          Ni(l) && bi(t);
        });
      }
      function Ni(t) {
        var l = t.getSnapshot;
        t = t.value;
        try {
          var e = l();
          return !ul(t, e);
        } catch {
          return !0;
        }
      }
      function bi(t) {
        var l = Gl(t, 2);
        l !== null && xt(l, t, 2);
      }
      function an(t) {
        var l = Ft();
        if (typeof t == "function") {
          var e = t;
          if (t = e(), he) {
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
          lastRenderedReducer: _l,
          lastRenderedState: t
        }, l;
      }
      function gi(t, l, e, a) {
        return t.baseState = e, ln(
          t,
          yt,
          typeof a == "function" ? a : _l
        );
      }
      function Jo(t, l, e, a, u) {
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
          F.T !== null ? e(!0) : n.isTransition = !1, a(n), e = l.pending, e === null ? (n.next = l.pending = n, _i(l, n)) : (n.next = e.next, l.pending = e.next = n);
        }
      }
      function _i(t, l) {
        var e = l.action, a = l.payload, u = t.state;
        if (l.isTransition) {
          var n = F.T, f = {};
          F.T = f;
          try {
            var m = e(u, a), p = F.S;
            p !== null && p(f, m), Hi(t, l, m);
          } catch (M) {
            un(t, l, M);
          } finally {
            F.T = n;
          }
        } else
          try {
            n = e(u, a), Hi(t, l, n);
          } catch (M) {
            un(t, l, M);
          }
      }
      function Hi(t, l, e) {
        e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
          function(a) {
            Oi(t, l, a);
          },
          function(a) {
            return un(t, l, a);
          }
        ) : Oi(t, l, e);
      }
      function Oi(t, l, e) {
        l.status = "fulfilled", l.value = e, Ui(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, _i(t, e)));
      }
      function un(t, l, e) {
        var a = t.pending;
        if (t.pending = null, a !== null) {
          a = a.next;
          do
            l.status = "rejected", l.reason = e, Ui(l), l = l.next;
          while (l !== a);
        }
        t.action = null;
      }
      function Ui(t) {
        t = t.listeners;
        for (var l = 0; l < t.length; l++) (0, t[l])();
      }
      function Ri(t, l) {
        return l;
      }
      function Ai(t, l) {
        if (mt) {
          var e = St.formState;
          if (e !== null) {
            t: {
              var a = lt;
              if (mt) {
                if (Kt) {
                  var u = nv(
                    Kt,
                    Tl
                  );
                  if (u) {
                    Kt = bs(u), a = cv(u);
                    break t;
                  }
                }
                ce(a);
              }
              a = !1;
            }
            a && (l = e[0]);
          }
        }
        e = Ft(), e.memoizedState = e.baseState = l, a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ri,
          lastRenderedState: l
        }, e.queue = a, e = Fi.bind(
          null,
          lt,
          a
        ), a.dispatch = e, a = an(!1);
        var n = on.bind(
          null,
          lt,
          !1,
          a.queue
        );
        return a = Ft(), u = {
          state: l,
          dispatch: null,
          action: t,
          pending: null
        }, a.queue = u, e = Jo.bind(
          null,
          lt,
          u,
          n,
          e
        ), u.dispatch = e, a.memoizedState = t, [l, e, !1];
      }
      function Di(t) {
        var l = Rt();
        return Ci(l, yt, t);
      }
      function Ci(t, l, e) {
        l = ln(
          t,
          l,
          Ri
        )[0], t = Ia(_l)[0], l = typeof l == "object" && l !== null && typeof l.then == "function" ? pa(l) : l;
        var a = Rt(), u = a.queue, n = u.dispatch;
        return e !== a.memoizedState && (lt.flags |= 2048, Ae(
          9,
          xo.bind(null, u, e),
          { destroy: void 0 },
          null
        )), [l, n, t];
      }
      function xo(t, l) {
        t.action = l;
      }
      function ji(t) {
        var l = Rt(), e = yt;
        if (e !== null)
          return Ci(l, e, t);
        Rt(), l = l.memoizedState, e = Rt();
        var a = e.queue.dispatch;
        return e.memoizedState = t, [l, a, !1];
      }
      function Ae(t, l, e, a) {
        return t = { tag: t, create: l, inst: e, deps: a, next: null }, l = lt.updateQueue, l === null && (l = yc(), lt.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
      }
      function qi() {
        return Rt().memoizedState;
      }
      function $a(t, l, e, a) {
        var u = Ft();
        lt.flags |= t, u.memoizedState = Ae(
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
        yt !== null && a !== null && Pu(a, yt.memoizedState.deps) ? u.memoizedState = Ae(l, e, n, a) : (lt.flags |= t, u.memoizedState = Ae(1 | l, e, n, a));
      }
      function Bi(t, l) {
        $a(8390656, 8, t, l);
      }
      function nn(t, l) {
        ka(2048, 8, t, l);
      }
      function Yi(t, l) {
        return ka(4, 2, t, l);
      }
      function Qi(t, l) {
        return ka(4, 4, t, l);
      }
      function Gi(t, l) {
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
      function Vi(t, l, e) {
        e = e != null ? e.concat([t]) : null, ka(
          4,
          4,
          Gi.bind(null, l, t),
          e
        );
      }
      function cn() {
      }
      function Xi(t, l) {
        var e = Rt();
        l = l === void 0 ? null : l;
        var a = e.memoizedState;
        return l !== null && Pu(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
      }
      function Zi(t, l) {
        var e = Rt();
        l = l === void 0 ? null : l;
        var a = e.memoizedState;
        if (l !== null && Pu(l, a[1]))
          return a[0];
        if (a = t(), he) {
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
        return e === void 0 || (te & 1073741824) !== 0 ? t.memoizedState = l : (t.memoizedState = e, t = Gf(), lt.lanes |= t, ee |= t, e);
      }
      function Ki(t, l, e, a) {
        return ul(e, l) ? e : we.current !== null ? (t = fn(t, e, a), ul(t, l) || (qt = !0), t) : (te & 42) === 0 ? (qt = !0, t.memoizedState = e) : (t = Gf(), lt.lanes |= t, ee |= t, l);
      }
      function Ji(t, l, e, a, u) {
        var n = de();
        wt(
          n !== 0 && 8 > n ? n : 8
        );
        var f = F.T, m = {};
        F.T = m, on(t, !1, l, e);
        try {
          var p = u(), M = F.S;
          if (M !== null && M(m, p), p !== null && typeof p == "object" && typeof p.then == "function") {
            var R = Zo(
              p,
              a
            );
            ra(
              t,
              l,
              R,
              tl(t)
            );
          } else
            ra(
              t,
              l,
              a,
              tl(t)
            );
        } catch (B) {
          ra(
            t,
            l,
            { then: function() {
            }, status: "rejected", reason: B },
            tl()
          );
        } finally {
          wt(n), F.T = f;
        }
      }
      function xi(t) {
        var l = t.memoizedState;
        if (l !== null) return l;
        l = {
          memoizedState: Qe,
          baseState: Qe,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: _l,
            lastRenderedState: Qe
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
            lastRenderedReducer: _l,
            lastRenderedState: e
          },
          next: null
        }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
      }
      function sn() {
        return Vt(pe);
      }
      function Li() {
        return Rt().memoizedState;
      }
      function Wi() {
        return Rt().memoizedState;
      }
      function Lo(t) {
        for (var l = t.return; l !== null; ) {
          switch (l.tag) {
            case 24:
            case 3:
              var e = tl();
              t = Vl(e);
              var a = Xl(l, t, e);
              a !== null && (xt(a, l, e), oa(a, l, e)), l = { cache: Nn() }, t.payload = l;
              return;
          }
          l = l.return;
        }
      }
      function Wo(t, l, e) {
        var a = tl();
        e = {
          lane: a,
          revertLane: 0,
          action: e,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, tu(t) ? Pi(l, e) : (e = Zu(t, l, e, a), e !== null && (xt(e, t, a), wi(e, l, a)));
      }
      function Fi(t, l, e) {
        var a = tl();
        ra(t, l, e, a);
      }
      function ra(t, l, e, a) {
        var u = {
          lane: a,
          revertLane: 0,
          action: e,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (tu(t)) Pi(l, u);
        else {
          var n = t.alternate;
          if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
            try {
              var f = l.lastRenderedState, m = n(f, e);
              if (u.hasEagerState = !0, u.eagerState = m, ul(m, f))
                return Ka(t, l, u, 0), St === null && Za(), !1;
            } catch {
            } finally {
            }
          if (e = Zu(t, l, u, a), e !== null)
            return xt(e, t, a), wi(e, l, a), !0;
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
        }, tu(t)) {
          if (l) throw Error(o(479));
        } else
          l = Zu(
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
      function Pi(t, l) {
        Ie = Nu = !0;
        var e = t.pending;
        e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
      }
      function wi(t, l, e) {
        if ((e & 4194176) !== 0) {
          var a = l.lanes;
          a &= t.pendingLanes, e |= a, l.lanes = e, pt(t, e);
        }
      }
      function mn(t, l, e, a) {
        l = t.memoizedState, e = e(a, l), e = e == null ? l : Wn({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
      }
      function Ii(t, l, e, a, u, n, f) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, f) : l.prototype && l.prototype.isPureReactComponent ? !xa(e, a) || !xa(u, n) : !0;
      }
      function $i(t, l, e, a) {
        t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && hc.enqueueReplaceState(l, l.state, null);
      }
      function ie(t, l) {
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
      function ki(t, l, e) {
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
      function vn(t, l, e) {
        return e = Vl(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
          lu(t, l);
        }, e;
      }
      function tf(t) {
        return t = Vl(t), t.tag = 3, t;
      }
      function lf(t, l, e, a) {
        var u = e.type.getDerivedStateFromError;
        if (typeof u == "function") {
          var n = a.value;
          t.payload = function() {
            return u(n);
          }, t.callback = function() {
            ki(l, e, a);
          };
        }
        var f = e.stateNode;
        f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
          ki(l, e, a), typeof u != "function" && (ae === null ? ae = /* @__PURE__ */ new Set([this]) : ae.add(this));
          var m = a.stack;
          this.componentDidCatch(a.value, {
            componentStack: m !== null ? m : ""
          });
        });
      }
      function Fo(t, l, e, a, u) {
        if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          if (l = e.alternate, l !== null && ha(
            l,
            e,
            u,
            !0
          ), e = vl.current, e !== null) {
            switch (e.tag) {
              case 13:
                return Ml === null ? Vn() : e.alternate === null && Ht === 0 && (Ht = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === Tu ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Zn(t, a, u)), !1;
              case 22:
                return e.flags |= 65536, a === Tu ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([a])
                }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Zn(t, a, u)), !1;
            }
            throw Error(o(435, e.tag));
          }
          return Zn(t, a, u), Vn(), !1;
        }
        if (mt)
          return l = vl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, a !== sc && (t = Error(o(422), { cause: a }), sa(
            Q(t, e)
          ))) : (a !== sc && (l = Error(o(423), {
            cause: a
          }), sa(
            Q(l, e)
          )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = Q(a, e), u = vn(
            t.stateNode,
            a,
            u
          ), Lu(t, u), Ht !== 4 && (Ht = 2)), !1;
        var n = Error(o(520), { cause: a });
        if (n = Q(n, e), Ca === null ? Ca = [n] : Ca.push(n), Ht !== 4 && (Ht = 2), l === null) return !0;
        a = Q(a, e), e = l;
        do {
          switch (e.tag) {
            case 3:
              return e.flags |= 65536, t = u & -u, e.lanes |= t, t = vn(e.stateNode, a, t), Lu(e, t), !1;
            case 1:
              if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ae === null || !ae.has(
                n
              ))))
                return e.flags |= 65536, u &= -u, e.lanes |= u, u = tf(u), lf(
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
        l.child = t === null ? Qs(l, null, e, a) : ye(
          l,
          t.child,
          e,
          a
        );
      }
      function ef(t, l, e, a, u) {
        e = e.render;
        var n = l.ref;
        if ("ref" in a) {
          var f = {};
          for (var m in a)
            m !== "ref" && (f[m] = a[m]);
        } else f = a;
        return fe(l), a = wu(
          t,
          l,
          e,
          f,
          n,
          u
        ), m = Iu(), t !== null && !qt ? ($u(t, l, u), Hl(t, l, u)) : (mt && m && it(l), l.flags |= 1, Qt(t, l, a, u), l.child);
      }
      function af(t, l, e, a, u) {
        if (t === null) {
          var n = e.type;
          return typeof n == "function" && !Kn(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, uf(
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
        if (n = t.child, !zn(t, u)) {
          var f = n.memoizedProps;
          if (e = e.compare, e = e !== null ? e : xa, e(f, a) && t.ref === l.ref)
            return Hl(
              t,
              l,
              u
            );
        }
        return l.flags |= 1, t = Fl(n, a), t.ref = l.ref, t.return = l, l.child = t;
      }
      function uf(t, l, e, a, u) {
        if (t !== null) {
          var n = t.memoizedProps;
          if (xa(n, a) && t.ref === l.ref)
            if (qt = !1, l.pendingProps = a = n, zn(t, u))
              (t.flags & 131072) !== 0 && (qt = !0);
            else
              return l.lanes = t.lanes, Hl(t, l, u);
        }
        return dn(
          t,
          l,
          e,
          a,
          u
        );
      }
      function nf(t, l, e) {
        var a = l.pendingProps, u = a.children, n = (l.stateNode._pendingVisibility & 2) !== 0, f = t !== null ? t.memoizedState : null;
        if (ya(t, l), a.mode === "hidden" || n) {
          if ((l.flags & 128) !== 0) {
            if (a = f !== null ? f.baseLanes | e : e, t !== null) {
              for (u = l.child = t.child, n = 0; u !== null; )
                n = n | u.lanes | u.childLanes, u = u.sibling;
              l.childLanes = n & ~a;
            } else l.childLanes = 0, l.child = null;
            return cf(
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
            ), f !== null ? ri(l, f) : Wu(), yi(l);
          else
            return l.lanes = l.childLanes = 536870912, cf(
              t,
              l,
              f !== null ? f.baseLanes | e : e,
              e
            );
        } else
          f !== null ? (uu(l, f.cachePool), ri(l, f), Kl(), l.memoizedState = null) : (t !== null && uu(l, null), Wu(), Kl());
        return Qt(t, l, u, e), l.child;
      }
      function cf(t, l, e, a) {
        var u = bn();
        return u = u === null ? null : {
          parent: Al ? gt._currentValue : gt._currentValue2,
          pool: u
        }, l.memoizedState = {
          baseLanes: e,
          cachePool: u
        }, t !== null && uu(l, null), Wu(), yi(l), t !== null && ha(t, l, a, !0), null;
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
      function dn(t, l, e, a, u) {
        return fe(l), e = wu(
          t,
          l,
          e,
          a,
          void 0,
          u
        ), a = Iu(), t !== null && !qt ? ($u(t, l, u), Hl(t, l, u)) : (mt && a && it(l), l.flags |= 1, Qt(t, l, e, u), l.child);
      }
      function ff(t, l, e, a, u, n) {
        return fe(l), l.updateQueue = null, e = Si(
          l,
          a,
          e,
          u
        ), hi(t), a = Iu(), t !== null && !qt ? ($u(t, l, n), Hl(t, l, n)) : (mt && a && it(l), l.flags |= 1, Qt(t, l, e, n), l.child);
      }
      function sf(t, l, e, a, u) {
        if (fe(l), l.stateNode === null) {
          var n = Ve, f = e.contextType;
          typeof f == "object" && f !== null && (n = Vt(f)), n = new e(a, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = hc, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = a, n.state = l.memoizedState, n.refs = {}, Ju(l), f = e.contextType, n.context = typeof f == "object" && f !== null ? Vt(f) : Ve, n.state = l.memoizedState, f = e.getDerivedStateFromProps, typeof f == "function" && (mn(
            l,
            e,
            f,
            a
          ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && hc.enqueueReplaceState(
            n,
            n.state,
            null
          ), va(l, a, n, u), ma(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
        } else if (t === null) {
          n = l.stateNode;
          var m = l.memoizedProps, p = ie(e, m);
          n.props = p;
          var M = n.context, R = e.contextType;
          f = Ve, typeof R == "object" && R !== null && (f = Vt(R));
          var B = e.getDerivedStateFromProps;
          R = typeof B == "function" || typeof n.getSnapshotBeforeUpdate == "function", m = l.pendingProps !== m, R || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (m || M !== f) && $i(
            l,
            n,
            a,
            f
          ), kl = !1;
          var Y = l.memoizedState;
          n.state = Y, va(l, a, n, u), ma(), M = l.memoizedState, m || Y !== M || kl ? (typeof B == "function" && (mn(
            l,
            e,
            B,
            a
          ), M = l.memoizedState), (p = kl || Ii(
            l,
            e,
            p,
            a,
            Y,
            M,
            f
          )) ? (R || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = M), n.props = a, n.state = M, n.context = f, a = p) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
        } else {
          n = l.stateNode, xu(t, l), f = l.memoizedProps, R = ie(e, f), n.props = R, B = l.pendingProps, Y = n.context, M = e.contextType, p = Ve, typeof M == "object" && M !== null && (p = Vt(M)), m = e.getDerivedStateFromProps, (M = typeof m == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== B || Y !== p) && $i(
            l,
            n,
            a,
            p
          ), kl = !1, Y = l.memoizedState, n.state = Y, va(l, a, n, u), ma();
          var w = l.memoizedState;
          f !== B || Y !== w || kl || t !== null && t.dependencies !== null && eu(t.dependencies) ? (typeof m == "function" && (mn(
            l,
            e,
            m,
            a
          ), w = l.memoizedState), (R = kl || Ii(
            l,
            e,
            R,
            a,
            Y,
            w,
            p
          ) || t !== null && t.dependencies !== null && eu(t.dependencies)) ? (M || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, w, p), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
            a,
            w,
            p
          )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === t.memoizedProps && Y === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && Y === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = w), n.props = a, n.state = w, n.context = p, a = R) : (typeof n.componentDidUpdate != "function" || f === t.memoizedProps && Y === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && Y === t.memoizedState || (l.flags |= 1024), a = !1);
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
        )) : Qt(t, l, e, u), l.memoizedState = n.state, t = l.child) : t = Hl(
          t,
          l,
          u
        ), t;
      }
      function of(t, l, e, a) {
        return fa(), l.flags |= 256, Qt(t, l, e, a), l.child;
      }
      function pn(t) {
        return { baseLanes: t, cachePool: yf() };
      }
      function rn(t, l, e) {
        return t = t !== null ? t.childLanes & ~e : 0, l && (t |= dl), t;
      }
      function mf(t, l, e) {
        var a = l.pendingProps, u = !1, n = (l.flags & 128) !== 0, f;
        if ((f = n) || (f = t !== null && t.memoizedState === null ? !1 : (jt.current & 2) !== 0), f && (u = !0, l.flags &= -129), f = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
          if (mt) {
            if (u ? Zl(l) : Kl(), mt) {
              var m = Kt, p;
              (p = m) && (m = mv(
                m,
                Tl
              ), m !== null ? (l.memoizedState = {
                dehydrated: m,
                treeContext: re !== null ? { id: Dl, overflow: Cl } : null,
                retryLane: 536870912
              }, p = s(18, null, null, 0), p.stateNode = m, p.return = l, l.child = p, Lt = l, Kt = null, p = !0) : p = !1), p || ce(l);
            }
            if (m = l.memoizedState, m !== null && (m = m.dehydrated, m !== null))
              return uc(m) ? l.lanes = 16 : l.lanes = 536870912, null;
            gl(l);
          }
          return m = a.children, a = a.fallback, u ? (Kl(), u = l.mode, m = hn(
            { mode: "hidden", children: m },
            u
          ), a = ve(
            a,
            u,
            e,
            null
          ), m.return = l, a.return = l, m.sibling = a, l.child = m, u = l.child, u.memoizedState = pn(e), u.childLanes = rn(
            t,
            f,
            e
          ), l.memoizedState = Sc, a) : (Zl(l), yn(l, m));
        }
        if (p = t.memoizedState, p !== null && (m = p.dehydrated, m !== null)) {
          if (n)
            l.flags & 256 ? (Zl(l), l.flags &= -257, l = Sn(
              t,
              l,
              e
            )) : l.memoizedState !== null ? (Kl(), l.child = t.child, l.flags |= 128, l = null) : (Kl(), u = a.fallback, m = l.mode, a = hn(
              { mode: "visible", children: a.children },
              m
            ), u = ve(
              u,
              m,
              e,
              null
            ), u.flags |= 2, a.return = l, u.return = l, a.sibling = u, l.child = a, ye(
              l,
              t.child,
              null,
              e
            ), a = l.child, a.memoizedState = pn(e), a.childLanes = rn(
              t,
              f,
              e
            ), l.memoizedState = Sc, l = u);
          else if (Zl(l), uc(m))
            f = av(m).digest, a = Error(o(419)), a.stack = "", a.digest = f, sa({ value: a, source: null, stack: null }), l = Sn(
              t,
              l,
              e
            );
          else if (qt || ha(
            t,
            l,
            e,
            !1
          ), f = (e & t.childLanes) !== 0, qt || f) {
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
                throw p.retryLane = a, Gl(t, a), xt(f, t, a), Vs;
            }
            ac(m) || Vn(), l = Sn(
              t,
              l,
              e
            );
          } else
            ac(m) ? (l.flags |= 128, l.child = t.child, l = cm.bind(
              null,
              t
            ), uv(m, l), l = null) : (t = p.treeContext, il && (Kt = fv(m), Lt = l, mt = !0, hl = null, Tl = !1, t !== null && (sl[ol++] = Dl, sl[ol++] = Cl, sl[ol++] = re, Dl = t.id, Cl = t.overflow, re = l)), l = yn(
              l,
              a.children
            ), l.flags |= 4096);
          return l;
        }
        return u ? (Kl(), u = a.fallback, m = l.mode, p = t.child, n = p.sibling, a = Fl(p, {
          mode: "hidden",
          children: a.children
        }), a.subtreeFlags = p.subtreeFlags & 31457280, n !== null ? u = Fl(n, u) : (u = ve(
          u,
          m,
          e,
          null
        ), u.flags |= 2), u.return = l, a.return = l, a.sibling = u, l.child = a, a = u, u = l.child, m = t.child.memoizedState, m === null ? m = pn(e) : (p = m.cachePool, p !== null ? (n = Al ? gt._currentValue : gt._currentValue2, p = p.parent !== n ? { parent: n, pool: n } : p) : p = yf(), m = {
          baseLanes: m.baseLanes | e,
          cachePool: p
        }), u.memoizedState = m, u.childLanes = rn(
          t,
          f,
          e
        ), l.memoizedState = Sc, a) : (Zl(l), e = t.child, t = e.sibling, e = Fl(e, {
          mode: "visible",
          children: a.children
        }), e.return = l, e.sibling = null, t !== null && (f = l.deletions, f === null ? (l.deletions = [t], l.flags |= 16) : f.push(t)), l.child = e, l.memoizedState = null, e);
      }
      function yn(t, l) {
        return l = hn(
          { mode: "visible", children: l },
          t.mode
        ), l.return = t, t.child = l;
      }
      function hn(t, l) {
        return ls(t, l, 0, null);
      }
      function Sn(t, l, e) {
        return ye(l, t.child, null, e), t = yn(
          l,
          l.pendingProps.children
        ), t.flags |= 2, l.memoizedState = null, t;
      }
      function vf(t, l, e) {
        t.lanes |= l;
        var a = t.alternate;
        a !== null && (a.lanes |= l), Tn(t.return, l, e);
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
      function df(t, l, e) {
        var a = l.pendingProps, u = a.revealOrder, n = a.tail;
        if (Qt(t, l, a.children, e), a = jt.current, (a & 2) !== 0)
          a = a & 1 | 2, l.flags |= 128;
        else {
          if (t !== null && (t.flags & 128) !== 0)
            t: for (t = l.child; t !== null; ) {
              if (t.tag === 13)
                t.memoizedState !== null && vf(t, e, l);
              else if (t.tag === 19)
                vf(t, e, l);
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
        switch (b(jt, a), u) {
          case "forwards":
            for (e = l.child, u = null; e !== null; )
              t = e.alternate, t !== null && Pa(t) === null && (u = e), e = e.sibling;
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
              if (t = u.alternate, t !== null && Pa(t) === null) {
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
      function Hl(t, l, e) {
        if (t !== null && (l.dependencies = t.dependencies), ee |= l.lanes, (e & l.childLanes) === 0)
          if (t !== null) {
            if (ha(
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
          for (t = l.child, e = Fl(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
            t = t.sibling, e = e.sibling = Fl(t, t.pendingProps), e.return = l;
          e.sibling = null;
        }
        return l.child;
      }
      function zn(t, l) {
        return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && eu(t)));
      }
      function Po(t, l, e) {
        switch (l.tag) {
          case 3:
            at(
              l,
              l.stateNode.containerInfo
            ), Jl(l, gt, t.memoizedState.cache), fa();
            break;
          case 27:
          case 5:
            Ue(l);
            break;
          case 4:
            at(
              l,
              l.stateNode.containerInfo
            );
            break;
          case 10:
            Jl(
              l,
              l.type,
              l.memoizedProps.value
            );
            break;
          case 13:
            var a = l.memoizedState;
            if (a !== null)
              return a.dehydrated !== null ? (Zl(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? mf(
                t,
                l,
                e
              ) : (Zl(l), t = Hl(
                t,
                l,
                e
              ), t !== null ? t.sibling : null);
            Zl(l);
            break;
          case 19:
            var u = (t.flags & 128) !== 0;
            if (a = (e & l.childLanes) !== 0, a || (ha(
              t,
              l,
              e,
              !1
            ), a = (e & l.childLanes) !== 0), u) {
              if (a)
                return df(
                  t,
                  l,
                  e
                );
              l.flags |= 128;
            }
            if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), b(jt, jt.current), a) break;
            return null;
          case 22:
          case 23:
            return l.lanes = 0, nf(t, l, e);
          case 24:
            Jl(l, gt, t.memoizedState.cache);
        }
        return Hl(t, l, e);
      }
      function pf(t, l, e) {
        if (t !== null)
          if (t.memoizedProps !== l.pendingProps)
            qt = !0;
          else {
            if (!zn(t, e) && (l.flags & 128) === 0)
              return qt = !1, Po(
                t,
                l,
                e
              );
            qt = (t.flags & 131072) !== 0;
          }
        else
          qt = !1, mt && (l.flags & 1048576) !== 0 && tt(l, hu, l.index);
        switch (l.lanes = 0, l.tag) {
          case 16:
            t: {
              t = l.pendingProps;
              var a = l.elementType, u = a._init;
              if (a = u(a._payload), l.type = a, typeof a == "function")
                Kn(a) ? (t = ie(a, t), l.tag = 1, l = sf(
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
                    l.tag = 11, l = ef(
                      null,
                      l,
                      a,
                      t,
                      e
                    );
                    break t;
                  } else if (u === $n) {
                    l.tag = 14, l = af(
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
            return a = l.type, u = ie(
              a,
              l.pendingProps
            ), sf(
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
              u = l.memoizedState, a = u.element, xu(t, l), va(l, n, null, e);
              var f = l.memoizedState;
              if (n = f.cache, Jl(l, gt, n), n !== u.cache && Mn(
                l,
                [gt],
                e,
                !0
              ), ma(), n = f.element, il && u.isDehydrated)
                if (u = {
                  element: n,
                  isDehydrated: !1,
                  cache: f.cache
                }, l.updateQueue.baseState = u, l.memoizedState = u, l.flags & 256) {
                  l = of(
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
                  ), sa(a), l = of(
                    t,
                    l,
                    n,
                    e
                  );
                  break t;
                } else
                  for (il && (Kt = iv(
                    l.stateNode.containerInfo
                  ), Lt = l, mt = !0, hl = null, Tl = !0), e = Qs(
                    l,
                    null,
                    n,
                    e
                  ), l.child = e; e; )
                    e.flags = e.flags & -3 | 4096, e = e.sibling;
              else {
                if (fa(), n === a) {
                  l = Hl(
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
            if (fl)
              return ya(t, l), t === null ? (e = Os(
                l.type,
                null,
                l.pendingProps,
                null
              )) ? l.memoizedState = e : mt || (l.stateNode = Nv(
                l.type,
                l.pendingProps,
                $l.current,
                l
              )) : l.memoizedState = Os(
                l.type,
                t.memoizedProps,
                l.pendingProps,
                t.memoizedState
              ), null;
          case 27:
            if (Zt)
              return Ue(l), t === null && Zt && mt && (a = l.stateNode = js(
                l.type,
                l.pendingProps,
                $l.current,
                Gt.current,
                !1
              ), Lt = l, Tl = !0, Kt = gs(a)), a = l.pendingProps.children, t !== null || mt ? Qt(
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
            return t === null && mt && (zv(
              l.type,
              l.pendingProps,
              Gt.current
            ), (u = a = Kt) && (a = sv(
              a,
              l.type,
              l.pendingProps,
              Tl
            ), a !== null ? (l.stateNode = a, Lt = l, Kt = gs(a), Tl = !1, u = !0) : u = !1), u || ce(l)), Ue(l), u = l.type, n = l.pendingProps, f = t !== null ? t.memoizedProps : null, a = n.children, vu(u, n) ? a = null : f !== null && vu(u, f) && (l.flags |= 32), l.memoizedState !== null && (u = wu(
              t,
              l,
              Ko,
              null,
              null,
              e
            ), Al ? pe._currentValue = u : pe._currentValue2 = u), ya(t, l), Qt(t, l, a, e), l.child;
          case 6:
            return t === null && mt && (Tv(
              l.pendingProps,
              Gt.current
            ), (t = e = Kt) && (e = ov(
              e,
              l.pendingProps,
              Tl
            ), e !== null ? (l.stateNode = e, Lt = l, Kt = null, t = !0) : t = !1), t || ce(l)), null;
          case 13:
            return mf(t, l, e);
          case 4:
            return at(
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
            return ef(
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
            return a = l.pendingProps, Jl(
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
            return u = l.type._context, a = l.pendingProps.children, fe(l), u = Vt(u), a = a(u), l.flags |= 1, Qt(
              t,
              l,
              a,
              e
            ), l.child;
          case 14:
            return af(
              t,
              l,
              l.type,
              l.pendingProps,
              e
            );
          case 15:
            return uf(
              t,
              l,
              l.type,
              l.pendingProps,
              e
            );
          case 19:
            return df(
              t,
              l,
              e
            );
          case 22:
            return nf(t, l, e);
          case 24:
            return fe(l), a = Vt(gt), t === null ? (u = bn(), u === null && (u = St, n = Nn(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), l.memoizedState = {
              parent: a,
              cache: u
            }, Ju(l), Jl(l, gt, u)) : ((t.lanes & e) !== 0 && (xu(t, l), va(l, null, null, e), ma()), u = t.memoizedState, n = l.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), Jl(l, gt, a)) : (a = n.cache, Jl(l, gt, a), a !== u.cache && Mn(
              l,
              [gt],
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
      function Jl(t, l, e) {
        Al ? (b(gu, l._currentValue), l._currentValue = e) : (b(gu, l._currentValue2), l._currentValue2 = e);
      }
      function Ol(t) {
        var l = gu.current;
        Al ? t._currentValue = l : t._currentValue2 = l, g(gu);
      }
      function Tn(t, l, e) {
        for (; t !== null; ) {
          var a = t.alternate;
          if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
          t = t.return;
        }
      }
      function Mn(t, l, e, a) {
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
      function ha(t, l, e, a) {
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
              ul(u.pendingProps.value, f.value) || (t !== null ? t.push(m) : t = [m]);
            }
          } else if (u === Su.current) {
            if (f = u.alternate, f === null) throw Error(o(387));
            f.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(pe) : t = [pe]);
          }
          u = u.return;
        }
        t !== null && Mn(
          l,
          t,
          e,
          a
        ), l.flags |= 262144;
      }
      function eu(t) {
        for (t = t.firstContext; t !== null; ) {
          var l = t.context;
          if (!ul(
            Al ? l._currentValue : l._currentValue2,
            t.memoizedValue
          ))
            return !0;
          t = t.next;
        }
        return !1;
      }
      function fe(t) {
        ze = t, jl = null, t = t.dependencies, t !== null && (t.firstContext = null);
      }
      function Vt(t) {
        return rf(ze, t);
      }
      function au(t, l) {
        return ze === null && fe(t), rf(t, l);
      }
      function rf(t, l) {
        var e = Al ? l._currentValue : l._currentValue2;
        if (l = { context: l, memoizedValue: e, next: null }, jl === null) {
          if (t === null) throw Error(o(308));
          jl = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
        } else jl = jl.next = l;
        return e;
      }
      function Nn() {
        return {
          controller: new Vv(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function Sa(t) {
        t.refCount--, t.refCount === 0 && Xv(Zv, function() {
          t.controller.abort();
        });
      }
      function bn() {
        var t = Te.current;
        return t !== null ? t : St.pooledCache;
      }
      function uu(t, l) {
        l === null ? b(Te, Te.current) : b(Te, l.pool);
      }
      function yf() {
        var t = bn();
        return t === null ? null : {
          parent: Al ? gt._currentValue : gt._currentValue2,
          pool: t
        };
      }
      function It(t) {
        t.flags |= 4;
      }
      function hf(t, l) {
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
        if (Xt)
          for (e = l.child; e !== null; ) {
            if (e.tag === 5 || e.tag === 6)
              lc(t, e.stateNode);
            else if (!(e.tag === 4 || Zt && e.tag === 27) && e.child !== null) {
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
        else if (Il)
          for (var u = l.child; u !== null; ) {
            if (u.tag === 5) {
              var n = u.stateNode;
              e && a && (n = Ms(
                n,
                u.type,
                u.memoizedProps
              )), lc(t, n);
            } else if (u.tag === 6)
              n = u.stateNode, e && a && (n = Ns(
                n,
                u.memoizedProps
              )), lc(t, n);
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
      function Sf(t, l, e, a) {
        if (Il)
          for (var u = l.child; u !== null; ) {
            if (u.tag === 5) {
              var n = u.stateNode;
              e && a && (n = Ms(
                n,
                u.type,
                u.memoizedProps
              )), zs(t, n);
            } else if (u.tag === 6)
              n = u.stateNode, e && a && (n = Ns(
                n,
                u.memoizedProps
              )), zs(t, n);
            else if (u.tag !== 4) {
              if (u.tag === 22 && u.memoizedState !== null)
                n = u.child, n !== null && (n.return = u), Sf(
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
      function Ef(t, l) {
        if (Il && hf(t, l)) {
          t = l.stateNode;
          var e = t.containerInfo, a = Es();
          Sf(a, l, !1, !1), t.pendingChildren = a, It(l), ev(e, a);
        }
      }
      function _n(t, l, e, a) {
        if (Xt)
          t.memoizedProps !== a && It(l);
        else if (Il) {
          var u = t.stateNode, n = t.memoizedProps;
          if ((t = hf(t, l)) || n !== a) {
            var f = Gt.current;
            n = lv(
              u,
              e,
              n,
              a,
              !t,
              null
            ), n === u ? l.stateNode = u : (ds(
              n,
              e,
              a,
              f
            ) && It(l), l.stateNode = n, t ? gn(n, l, !1, !1) : It(l));
          } else l.stateNode = u;
        }
      }
      function Hn(t, l, e) {
        if (Um(l, e)) {
          if (t.flags |= 16777216, !ys(l, e))
            if (Jf()) t.flags |= 8192;
            else
              throw Fe = Tu, rc;
        } else t.flags &= -16777217;
      }
      function zf(t, l) {
        if (gv(l)) {
          if (t.flags |= 16777216, !Cs(l))
            if (Jf()) t.flags |= 8192;
            else
              throw Fe = Tu, rc;
        } else t.flags &= -16777217;
      }
      function nu(t, l) {
        l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? et() : 536870912, t.lanes |= l, la |= l);
      }
      function Ea(t, l) {
        if (!mt)
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
      function Nt(t) {
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
        switch (Mt(l), l.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Nt(l), null;
          case 1:
            return Nt(l), null;
          case 3:
            return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Ol(gt), Ut(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (ia(l) ? It(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, hl !== null && (Qn(hl), hl = null))), Ef(t, l), Nt(l), null;
          case 26:
            if (fl) {
              e = l.type;
              var u = l.memoizedState;
              return t === null ? (It(l), u !== null ? (Nt(l), zf(
                l,
                u
              )) : (Nt(l), Hn(
                l,
                e,
                a
              ))) : u ? u !== t.memoizedState ? (It(l), Nt(l), zf(
                l,
                u
              )) : (Nt(l), l.flags &= -16777217) : (Xt ? t.memoizedProps !== a && It(l) : _n(
                t,
                l,
                e,
                a
              ), Nt(l), Hn(
                l,
                e,
                a
              )), null;
            }
          case 27:
            if (Zt) {
              if (Xa(l), e = $l.current, u = l.type, t !== null && l.stateNode != null)
                Xt ? t.memoizedProps !== a && It(l) : _n(
                  t,
                  l,
                  u,
                  a
                );
              else {
                if (!a) {
                  if (l.stateNode === null)
                    throw Error(o(166));
                  return Nt(l), null;
                }
                t = Gt.current, ia(l) ? li(l, t) : (t = js(
                  u,
                  a,
                  e,
                  t,
                  !0
                ), l.stateNode = t, It(l));
              }
              return Nt(l), null;
            }
          case 5:
            if (Xa(l), e = l.type, t !== null && l.stateNode != null)
              _n(t, l, e, a);
            else {
              if (!a) {
                if (l.stateNode === null)
                  throw Error(o(166));
                return Nt(l), null;
              }
              t = Gt.current, ia(l) ? li(l, t) : (u = Mm(
                e,
                a,
                $l.current,
                t,
                l
              ), gn(u, l, !1, !1), l.stateNode = u, ds(
                u,
                e,
                a,
                t
              ) && It(l));
            }
            return Nt(l), Hn(
              l,
              l.type,
              l.pendingProps
            ), null;
          case 6:
            if (t && l.stateNode != null)
              e = t.memoizedProps, Xt ? e !== a && It(l) : Il && (e !== a ? (l.stateNode = ps(
                a,
                $l.current,
                Gt.current,
                l
              ), It(l)) : l.stateNode = t.stateNode);
            else {
              if (typeof a != "string" && l.stateNode === null)
                throw Error(o(166));
              if (t = $l.current, e = Gt.current, ia(l)) {
                if (!il) throw Error(o(176));
                if (t = l.stateNode, e = l.memoizedProps, a = null, u = Lt, u !== null)
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
                ) || ce(l);
              } else
                l.stateNode = ps(
                  a,
                  t,
                  e,
                  l
                );
            }
            return Nt(l), null;
          case 13:
            if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
              if (u = ia(l), a !== null && a.dehydrated !== null) {
                if (t === null) {
                  if (!u) throw Error(o(318));
                  if (!il) throw Error(o(344));
                  if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
                  pv(u, l);
                } else
                  fa(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
                Nt(l), u = !1;
              } else
                hl !== null && (Qn(hl), hl = null), u = !0;
              if (!u)
                return l.flags & 256 ? (gl(l), l) : (gl(l), null);
            }
            if (gl(l), (l.flags & 128) !== 0)
              return l.lanes = e, l;
            if (e = a !== null, t = t !== null && t.memoizedState !== null, e) {
              a = l.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool);
              var n = null;
              a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048);
            }
            return e !== t && e && (l.child.flags |= 8192), nu(l, l.updateQueue), Nt(l), null;
          case 4:
            return Ut(), Ef(t, l), t === null && gm(l.stateNode.containerInfo), Nt(l), null;
          case 10:
            return Ol(l.type), Nt(l), null;
          case 19:
            if (g(jt), u = l.memoizedState, u === null)
              return Nt(l), null;
            if (a = (l.flags & 128) !== 0, n = u.rendering, n === null)
              if (a) Ea(u, !1);
              else {
                if (Ht !== 0 || t !== null && (t.flags & 128) !== 0)
                  for (t = l.child; t !== null; ) {
                    if (n = Pa(t), n !== null) {
                      for (l.flags |= 128, Ea(u, !1), t = n.updateQueue, l.updateQueue = t, nu(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                        ts(e, t), e = e.sibling;
                      return b(
                        jt,
                        jt.current & 1 | 2
                      ), l.child;
                    }
                    t = t.sibling;
                  }
                u.tail !== null && yl() > ja && (l.flags |= 128, a = !0, Ea(u, !1), l.lanes = 4194304);
              }
            else {
              if (!a)
                if (t = Pa(n), t !== null) {
                  if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, nu(l, t), Ea(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !mt)
                    return Nt(l), null;
                } else
                  2 * yl() - u.renderingStartTime > ja && e !== 536870912 && (l.flags |= 128, a = !0, Ea(u, !1), l.lanes = 4194304);
              u.isBackwards ? (n.sibling = l.child, l.child = n) : (t = u.last, t !== null ? t.sibling = n : l.child = n, u.last = n);
            }
            return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = yl(), l.sibling = null, t = jt.current, b(
              jt,
              a ? t & 1 | 2 : t & 1
            ), l) : (Nt(l), null);
          case 22:
          case 23:
            return gl(l), Fu(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Nt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Nt(l), e = l.updateQueue, e !== null && nu(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && g(Te), null;
          case 24:
            return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Ol(gt), Nt(l), null;
          case 25:
            return null;
        }
        throw Error(o(156, l.tag));
      }
      function Io(t, l) {
        switch (Mt(l), l.tag) {
          case 1:
            return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
          case 3:
            return Ol(gt), Ut(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
          case 26:
          case 27:
          case 5:
            return Xa(l), null;
          case 13:
            if (gl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
              if (l.alternate === null)
                throw Error(o(340));
              fa();
            }
            return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
          case 19:
            return g(jt), null;
          case 4:
            return Ut(), null;
          case 10:
            return Ol(l.type), null;
          case 22:
          case 23:
            return gl(l), Fu(), t !== null && g(Te), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
          case 24:
            return Ol(gt), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function Tf(t, l) {
        switch (Mt(l), l.tag) {
          case 3:
            Ol(gt), Ut();
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
            gl(l);
            break;
          case 19:
            g(jt);
            break;
          case 10:
            Ol(l.type);
            break;
          case 22:
          case 23:
            gl(l), Fu(), t !== null && g(Te);
            break;
          case 24:
            Ol(gt);
        }
      }
      function za(t, l) {
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
          rt(l, l.return, m);
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
                  } catch (M) {
                    rt(
                      u,
                      p,
                      M
                    );
                  }
                }
              }
              a = a.next;
            } while (a !== n);
          }
        } catch (M) {
          rt(l, l.return, M);
        }
      }
      function Mf(t) {
        var l = t.updateQueue;
        if (l !== null) {
          var e = t.stateNode;
          try {
            si(l, e);
          } catch (a) {
            rt(t, t.return, a);
          }
        }
      }
      function Nf(t, l, e) {
        e.props = ie(
          t.type,
          t.memoizedProps
        ), e.state = t.memoizedState;
        try {
          e.componentWillUnmount();
        } catch (a) {
          rt(t, l, a);
        }
      }
      function se(t, l) {
        try {
          var e = t.ref;
          if (e !== null) {
            var a = t.stateNode;
            switch (t.tag) {
              case 26:
              case 27:
              case 5:
                var u = Na(a);
                break;
              default:
                u = a;
            }
            typeof e == "function" ? t.refCleanup = e(u) : e.current = u;
          }
        } catch (n) {
          rt(t, l, n);
        }
      }
      function $t(t, l) {
        var e = t.ref, a = t.refCleanup;
        if (e !== null)
          if (typeof a == "function")
            try {
              a();
            } catch (u) {
              rt(t, l, u);
            } finally {
              t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
            }
          else if (typeof e == "function")
            try {
              e(null);
            } catch (u) {
              rt(t, l, u);
            }
          else e.current = null;
      }
      function bf(t) {
        var l = t.type, e = t.memoizedProps, a = t.stateNode;
        try {
          Jm(a, l, e, t);
        } catch (u) {
          rt(t, t.return, u);
        }
      }
      function gf(t, l, e) {
        try {
          xm(
            t.stateNode,
            t.type,
            e,
            l,
            t
          );
        } catch (a) {
          rt(t, t.return, a);
        }
      }
      function _f(t) {
        return t.tag === 5 || t.tag === 3 || (fl ? t.tag === 26 : !1) || (Zt ? t.tag === 27 : !1) || t.tag === 4;
      }
      function On(t) {
        t: for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || _f(t.return)) return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && (!Zt || t.tag !== 27) && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & 2)) return t.stateNode;
        }
      }
      function Un(t, l, e) {
        var a = t.tag;
        if (a === 5 || a === 6)
          t = t.stateNode, l ? Wm(e, t, l) : Zm(e, t);
        else if (!(a === 4 || Zt && a === 27) && (t = t.child, t !== null))
          for (Un(t, l, e), t = t.sibling; t !== null; )
            Un(t, l, e), t = t.sibling;
      }
      function cu(t, l, e) {
        var a = t.tag;
        if (a === 5 || a === 6)
          t = t.stateNode, l ? Lm(e, t, l) : Xm(e, t);
        else if (!(a === 4 || Zt && a === 27) && (t = t.child, t !== null))
          for (cu(t, l, e), t = t.sibling; t !== null; )
            cu(t, l, e), t = t.sibling;
      }
      function Hf(t, l, e) {
        t = t.containerInfo;
        try {
          Ts(t, e);
        } catch (a) {
          rt(l, l.return, a);
        }
      }
      function $o(t, l) {
        for (zm(t.containerInfo), Bt = l; Bt !== null; )
          if (t = Bt, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
            l.return = t, Bt = l;
          else
            for (; Bt !== null; ) {
              t = Bt;
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
                      var f = ie(
                        a.type,
                        u,
                        a.elementType === a.type
                      );
                      l = n.getSnapshotBeforeUpdate(
                        f,
                        e
                      ), n.__reactInternalSnapshotBeforeUpdate = l;
                    } catch (m) {
                      rt(
                        a,
                        a.return,
                        m
                      );
                    }
                  }
                  break;
                case 3:
                  (l & 1024) !== 0 && Xt && tv(t.stateNode.containerInfo);
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
                l.return = t.return, Bt = l;
                break;
              }
              Bt = t.return;
            }
        return f = Ks, Ks = !1, f;
      }
      function Of(t, l, e) {
        var a = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Ul(t, e), a & 4 && za(5, e);
            break;
          case 1:
            if (Ul(t, e), a & 4)
              if (t = e.stateNode, l === null)
                try {
                  t.componentDidMount();
                } catch (m) {
                  rt(e, e.return, m);
                }
              else {
                var u = ie(
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
                  rt(
                    e,
                    e.return,
                    m
                  );
                }
              }
            a & 64 && Mf(e), a & 512 && se(e, e.return);
            break;
          case 3:
            if (Ul(t, e), a & 64 && (a = e.updateQueue, a !== null)) {
              if (t = null, e.child !== null)
                switch (e.child.tag) {
                  case 27:
                  case 5:
                    t = Na(e.child.stateNode);
                    break;
                  case 1:
                    t = e.child.stateNode;
                }
              try {
                si(a, t);
              } catch (m) {
                rt(e, e.return, m);
              }
            }
            break;
          case 26:
            if (fl) {
              Ul(t, e), a & 512 && se(e, e.return);
              break;
            }
          case 27:
          case 5:
            Ul(t, e), l === null && a & 4 && bf(e), a & 512 && se(e, e.return);
            break;
          case 12:
            Ul(t, e);
            break;
          case 13:
            Ul(t, e), a & 4 && Rf(t, e);
            break;
          case 22:
            if (u = e.memoizedState !== null || ql, !u) {
              l = l !== null && l.memoizedState !== null || _t;
              var n = ql, f = _t;
              ql = u, (_t = l) && !f ? Ll(
                t,
                e,
                (e.subtreeFlags & 8772) !== 0
              ) : Ul(t, e), ql = n, _t = f;
            }
            a & 512 && (e.memoizedProps.mode === "manual" ? se(e, e.return) : $t(e, e.return));
            break;
          default:
            Ul(t, e);
        }
      }
      function Uf(t) {
        var l = t.alternate;
        l !== null && (t.alternate = null, Uf(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && Om(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
      }
      function rl(t, l, e) {
        for (e = e.child; e !== null; )
          Rn(
            t,
            l,
            e
          ), e = e.sibling;
      }
      function Rn(t, l, e) {
        if (al && typeof al.onCommitFiberUnmount == "function")
          try {
            al.onCommitFiberUnmount(_a, e);
          } catch {
          }
        switch (e.tag) {
          case 26:
            if (fl) {
              _t || $t(e, l), rl(
                t,
                l,
                e
              ), e.memoizedState ? Rs(e.memoizedState) : e.stateNode && Ds(e.stateNode);
              break;
            }
          case 27:
            if (Zt) {
              _t || $t(e, l);
              var a = Dt, u = nl;
              Dt = e.stateNode, rl(
                t,
                l,
                e
              ), Uv(e.stateNode), Dt = a, nl = u;
              break;
            }
          case 5:
            _t || $t(e, l);
          case 6:
            if (Xt) {
              if (a = Dt, u = nl, Dt = null, rl(
                t,
                l,
                e
              ), Dt = a, nl = u, Dt !== null)
                if (nl)
                  try {
                    Pm(Dt, e.stateNode);
                  } catch (n) {
                    rt(
                      e,
                      l,
                      n
                    );
                  }
                else
                  try {
                    Fm(Dt, e.stateNode);
                  } catch (n) {
                    rt(
                      e,
                      l,
                      n
                    );
                  }
            } else
              rl(
                t,
                l,
                e
              );
            break;
          case 18:
            Xt && Dt !== null && (nl ? Ev(
              Dt,
              e.stateNode
            ) : Sv(Dt, e.stateNode));
            break;
          case 4:
            Xt ? (a = Dt, u = nl, Dt = e.stateNode.containerInfo, nl = !0, rl(
              t,
              l,
              e
            ), Dt = a, nl = u) : (Il && Hf(
              e.stateNode,
              e,
              Es()
            ), rl(
              t,
              l,
              e
            ));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            _t || xl(2, e, l), _t || xl(4, e, l), rl(
              t,
              l,
              e
            );
            break;
          case 1:
            _t || ($t(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && Nf(
              e,
              l,
              a
            )), rl(
              t,
              l,
              e
            );
            break;
          case 21:
            rl(
              t,
              l,
              e
            );
            break;
          case 22:
            _t || $t(e, l), _t = (a = _t) || e.memoizedState !== null, rl(
              t,
              l,
              e
            ), _t = a;
            break;
          default:
            rl(
              t,
              l,
              e
            );
        }
      }
      function Rf(t, l) {
        if (il && l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
          try {
            hv(t);
          } catch (e) {
            rt(l, l.return, e);
          }
      }
      function ko(t) {
        switch (t.tag) {
          case 13:
          case 19:
            var l = t.stateNode;
            return l === null && (l = t.stateNode = new Zs()), l;
          case 22:
            return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new Zs()), l;
          default:
            throw Error(o(435, t.tag));
        }
      }
      function An(t, l) {
        var e = ko(t);
        l.forEach(function(a) {
          var u = im.bind(null, t, a);
          e.has(a) || (e.add(a), a.then(u, u));
        });
      }
      function Pt(t, l) {
        var e = l.deletions;
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var u = e[a], n = t, f = l;
            if (Xt) {
              var m = f;
              t: for (; m !== null; ) {
                switch (m.tag) {
                  case 27:
                  case 5:
                    Dt = m.stateNode, nl = !1;
                    break t;
                  case 3:
                    Dt = m.stateNode.containerInfo, nl = !0;
                    break t;
                  case 4:
                    Dt = m.stateNode.containerInfo, nl = !0;
                    break t;
                }
                m = m.return;
              }
              if (Dt === null) throw Error(o(160));
              Rn(n, f, u), Dt = null, nl = !1;
            } else Rn(n, f, u);
            n = u.alternate, n !== null && (n.return = null), u.return = null;
          }
        if (l.subtreeFlags & 13878)
          for (l = l.child; l !== null; )
            Af(l, t), l = l.sibling;
      }
      function Af(t, l) {
        var e = t.alternate, a = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Pt(l, t), kt(t), a & 4 && (xl(3, t, t.return), za(3, t), xl(5, t, t.return));
            break;
          case 1:
            Pt(l, t), kt(t), a & 512 && (_t || e === null || $t(e, e.return)), a & 64 && ql && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
            break;
          case 26:
            if (fl) {
              var u = Sl;
              Pt(l, t), kt(t), a & 512 && (_t || e === null || $t(e, e.return)), a & 4 && (a = e !== null ? e.memoizedState : null, l = t.memoizedState, e === null ? l === null ? t.stateNode === null ? t.stateNode = Mv(
                u,
                t.type,
                t.memoizedProps,
                t
              ) : As(
                u,
                t.type,
                t.stateNode
              ) : t.stateNode = Us(
                u,
                l,
                t.memoizedProps
              ) : a !== l ? (a === null ? e.stateNode !== null && Ds(e.stateNode) : Rs(a), l === null ? As(
                u,
                t.type,
                t.stateNode
              ) : Us(
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
            if (Zt && a & 4 && t.alternate === null) {
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
                rt(t, t.return, R);
              }
            }
          case 5:
            if (Pt(l, t), kt(t), a & 512 && (_t || e === null || $t(e, e.return)), Xt) {
              if (t.flags & 32) {
                l = t.stateNode;
                try {
                  Ss(l);
                } catch (R) {
                  rt(t, t.return, R);
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
            if (Pt(l, t), kt(t), a & 4 && Xt) {
              if (t.stateNode === null)
                throw Error(o(162));
              a = t.memoizedProps, e = e !== null ? e.memoizedProps : a, l = t.stateNode;
              try {
                Km(l, e, a);
              } catch (R) {
                rt(t, t.return, R);
              }
            }
            break;
          case 3:
            if (fl ? (bv(), u = Sl, Sl = nc(l.containerInfo), Pt(l, t), Sl = u) : Pt(l, t), kt(t), a & 4) {
              if (Xt && il && e !== null && e.memoizedState.isDehydrated)
                try {
                  yv(l.containerInfo);
                } catch (R) {
                  rt(t, t.return, R);
                }
              if (Il) {
                a = l.containerInfo, e = l.pendingChildren;
                try {
                  Ts(a, e);
                } catch (R) {
                  rt(t, t.return, R);
                }
              }
            }
            Ec && (Ec = !1, Df(t));
            break;
          case 4:
            fl ? (e = Sl, Sl = nc(
              t.stateNode.containerInfo
            ), Pt(l, t), kt(t), Sl = e) : (Pt(l, t), kt(t)), a & 4 && Il && Hf(
              t.stateNode,
              t,
              t.stateNode.pendingChildren
            );
            break;
          case 12:
            Pt(l, t), kt(t);
            break;
          case 13:
            Pt(l, t), kt(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Nc = yl()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, An(t, a)));
            break;
          case 22:
            a & 512 && (_t || e === null || $t(e, e.return)), u = t.memoizedState !== null;
            var f = e !== null && e.memoizedState !== null, m = ql, p = _t;
            if (ql = m || u, _t = p || f, Pt(l, t), _t = p, ql = m, kt(t), l = t.stateNode, l._current = t, l._visibility &= -3, l._visibility |= l._pendingVisibility & 2, a & 8192 && (l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (l = ql || _t, e === null || f || l || De(t)), Xt && (t.memoizedProps === null || t.memoizedProps.mode !== "manual"))) {
              t: if (e = null, Xt)
                for (l = t; ; ) {
                  if (l.tag === 5 || fl && l.tag === 26 || Zt && l.tag === 27) {
                    if (e === null) {
                      f = e = l;
                      try {
                        n = f.stateNode, u ? wm(n) : $m(
                          f.stateNode,
                          f.memoizedProps
                        );
                      } catch (R) {
                        rt(f, f.return, R);
                      }
                    }
                  } else if (l.tag === 6) {
                    if (e === null) {
                      f = l;
                      try {
                        var M = f.stateNode;
                        u ? Im(M) : km(M, f.memoizedProps);
                      } catch (R) {
                        rt(f, f.return, R);
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
            a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, An(t, e))));
            break;
          case 19:
            Pt(l, t), kt(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, An(t, a)));
            break;
          case 21:
            break;
          default:
            Pt(l, t), kt(t);
        }
      }
      function kt(t) {
        var l = t.flags;
        if (l & 2) {
          try {
            if (Xt && (!Zt || t.tag !== 27)) {
              t: {
                for (var e = t.return; e !== null; ) {
                  if (_f(e)) {
                    var a = e;
                    break t;
                  }
                  e = e.return;
                }
                throw Error(o(160));
              }
              switch (a.tag) {
                case 27:
                  if (Zt) {
                    var u = a.stateNode, n = On(t);
                    cu(
                      t,
                      n,
                      u
                    );
                    break;
                  }
                case 5:
                  var f = a.stateNode;
                  a.flags & 32 && (Ss(f), a.flags &= -33);
                  var m = On(t);
                  cu(t, m, f);
                  break;
                case 3:
                case 4:
                  var p = a.stateNode.containerInfo, M = On(t);
                  Un(
                    t,
                    M,
                    p
                  );
                  break;
                default:
                  throw Error(o(161));
              }
            }
          } catch (R) {
            rt(t, t.return, R);
          }
          t.flags &= -3;
        }
        l & 4096 && (t.flags &= -4097);
      }
      function Df(t) {
        if (t.subtreeFlags & 1024)
          for (t = t.child; t !== null; ) {
            var l = t;
            Df(l), l.tag === 5 && l.flags & 1024 && Dm(l.stateNode), t = t.sibling;
          }
      }
      function Ul(t, l) {
        if (l.subtreeFlags & 8772)
          for (l = l.child; l !== null; )
            Of(t, l.alternate, l), l = l.sibling;
      }
      function De(t) {
        for (t = t.child; t !== null; ) {
          var l = t;
          switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              xl(4, l, l.return), De(l);
              break;
            case 1:
              $t(l, l.return);
              var e = l.stateNode;
              typeof e.componentWillUnmount == "function" && Nf(
                l,
                l.return,
                e
              ), De(l);
              break;
            case 26:
            case 27:
            case 5:
              $t(l, l.return), De(l);
              break;
            case 22:
              $t(l, l.return), l.memoizedState === null && De(l);
              break;
            default:
              De(l);
          }
          t = t.sibling;
        }
      }
      function Ll(t, l, e) {
        for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
          var a = l.alternate, u = t, n = l, f = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              Ll(
                u,
                n,
                e
              ), za(4, n);
              break;
            case 1:
              if (Ll(
                u,
                n,
                e
              ), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
                try {
                  u.componentDidMount();
                } catch (M) {
                  rt(a, a.return, M);
                }
              if (a = n, u = a.updateQueue, u !== null) {
                var m = a.stateNode;
                try {
                  var p = u.shared.hiddenCallbacks;
                  if (p !== null)
                    for (u.shared.hiddenCallbacks = null, u = 0; u < p.length; u++)
                      fi(p[u], m);
                } catch (M) {
                  rt(a, a.return, M);
                }
              }
              e && f & 64 && Mf(n), se(n, n.return);
              break;
            case 26:
            case 27:
            case 5:
              Ll(
                u,
                n,
                e
              ), e && a === null && f & 4 && bf(n), se(n, n.return);
              break;
            case 12:
              Ll(
                u,
                n,
                e
              );
              break;
            case 13:
              Ll(
                u,
                n,
                e
              ), e && f & 4 && Rf(u, n);
              break;
            case 22:
              n.memoizedState === null && Ll(
                u,
                n,
                e
              ), se(n, n.return);
              break;
            default:
              Ll(
                u,
                n,
                e
              );
          }
          l = l.sibling;
        }
      }
      function Dn(t, l) {
        var e = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && Sa(e));
      }
      function Cn(t, l) {
        t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Sa(t));
      }
      function Wl(t, l, e, a) {
        if (l.subtreeFlags & 10256)
          for (l = l.child; l !== null; )
            Cf(
              t,
              l,
              e,
              a
            ), l = l.sibling;
      }
      function Cf(t, l, e, a) {
        var u = l.flags;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            Wl(
              t,
              l,
              e,
              a
            ), u & 2048 && za(9, l);
            break;
          case 3:
            Wl(
              t,
              l,
              e,
              a
            ), u & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Sa(t)));
            break;
          case 12:
            if (u & 2048) {
              Wl(
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
                rt(l, l.return, p);
              }
            } else
              Wl(
                t,
                l,
                e,
                a
              );
            break;
          case 23:
            break;
          case 22:
            n = l.stateNode, l.memoizedState !== null ? n._visibility & 4 ? Wl(
              t,
              l,
              e,
              a
            ) : Ta(
              t,
              l
            ) : n._visibility & 4 ? Wl(
              t,
              l,
              e,
              a
            ) : (n._visibility |= 4, Ce(
              t,
              l,
              e,
              a,
              (l.subtreeFlags & 10256) !== 0
            )), u & 2048 && Dn(
              l.alternate,
              l
            );
            break;
          case 24:
            Wl(
              t,
              l,
              e,
              a
            ), u & 2048 && Cn(l.alternate, l);
            break;
          default:
            Wl(
              t,
              l,
              e,
              a
            );
        }
      }
      function Ce(t, l, e, a, u) {
        for (u = u && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
          var n = t, f = l, m = e, p = a, M = f.flags;
          switch (f.tag) {
            case 0:
            case 11:
            case 15:
              Ce(
                n,
                f,
                m,
                p,
                u
              ), za(8, f);
              break;
            case 23:
              break;
            case 22:
              var R = f.stateNode;
              f.memoizedState !== null ? R._visibility & 4 ? Ce(
                n,
                f,
                m,
                p,
                u
              ) : Ta(
                n,
                f
              ) : (R._visibility |= 4, Ce(
                n,
                f,
                m,
                p,
                u
              )), u && M & 2048 && Dn(
                f.alternate,
                f
              );
              break;
            case 24:
              Ce(
                n,
                f,
                m,
                p,
                u
              ), u && M & 2048 && Cn(f.alternate, f);
              break;
            default:
              Ce(
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
      function Ta(t, l) {
        if (l.subtreeFlags & 10256)
          for (l = l.child; l !== null; ) {
            var e = t, a = l, u = a.flags;
            switch (a.tag) {
              case 22:
                Ta(e, a), u & 2048 && Dn(
                  a.alternate,
                  a
                );
                break;
              case 24:
                Ta(e, a), u & 2048 && Cn(
                  a.alternate,
                  a
                );
                break;
              default:
                Ta(e, a);
            }
            l = l.sibling;
          }
      }
      function oe(t) {
        if (t.subtreeFlags & ke)
          for (t = t.child; t !== null; )
            jf(t), t = t.sibling;
      }
      function jf(t) {
        switch (t.tag) {
          case 26:
            oe(t), t.flags & ke && (t.memoizedState !== null ? _v(
              Sl,
              t.memoizedState,
              t.memoizedProps
            ) : hs(t.type, t.memoizedProps));
            break;
          case 5:
            oe(t), t.flags & ke && hs(t.type, t.memoizedProps);
            break;
          case 3:
          case 4:
            if (fl) {
              var l = Sl;
              Sl = nc(
                t.stateNode.containerInfo
              ), oe(t), Sl = l;
            } else oe(t);
            break;
          case 22:
            t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = ke, ke = 16777216, oe(t), ke = l) : oe(t));
            break;
          default:
            oe(t);
        }
      }
      function qf(t) {
        var l = t.alternate;
        if (l !== null && (t = l.child, t !== null)) {
          l.child = null;
          do
            l = t.sibling, t.sibling = null, t = l;
          while (t !== null);
        }
      }
      function Ma(t) {
        var l = t.deletions;
        if ((t.flags & 16) !== 0) {
          if (l !== null)
            for (var e = 0; e < l.length; e++) {
              var a = l[e];
              Bt = a, Yf(
                a,
                t
              );
            }
          qf(t);
        }
        if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null; )
            Bf(t), t = t.sibling;
      }
      function Bf(t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ma(t), t.flags & 2048 && xl(9, t, t.return);
            break;
          case 3:
            Ma(t);
            break;
          case 12:
            Ma(t);
            break;
          case 22:
            var l = t.stateNode;
            t.memoizedState !== null && l._visibility & 4 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -5, iu(t)) : Ma(t);
            break;
          default:
            Ma(t);
        }
      }
      function iu(t) {
        var l = t.deletions;
        if ((t.flags & 16) !== 0) {
          if (l !== null)
            for (var e = 0; e < l.length; e++) {
              var a = l[e];
              Bt = a, Yf(
                a,
                t
              );
            }
          qf(t);
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
      function Yf(t, l) {
        for (; Bt !== null; ) {
          var e = Bt;
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
              Sa(e.memoizedState.cache);
          }
          if (a = e.child, a !== null) a.return = e, Bt = a;
          else
            t: for (e = t; Bt !== null; ) {
              a = Bt;
              var u = a.sibling, n = a.return;
              if (Uf(a), a === e) {
                Bt = null;
                break t;
              }
              if (u !== null) {
                u.return = n, Bt = u;
                break t;
              }
              Bt = n;
            }
        }
      }
      function jn(t) {
        var l = rs(t);
        if (l != null) {
          if (typeof l.memoizedProps["data-testname"] != "string")
            throw Error(o(364));
          return l;
        }
        if (t = qm(t), t === null) throw Error(o(362));
        return t.stateNode.current;
      }
      function qn(t, l) {
        var e = t.tag;
        switch (l.$$typeof) {
          case _u:
            if (t.type === l.value) return !0;
            break;
          case Hu:
            t: {
              for (l = l.value, t = [t, 0], e = 0; e < t.length; ) {
                var a = t[e++], u = a.tag, n = t[e++], f = l[n];
                if (u !== 5 && u !== 26 && u !== 27 || !ga(a)) {
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
      function Bn(t) {
        switch (t.$$typeof) {
          case _u:
            return "<" + (j(t.value) || "Unknown") + ">";
          case Hu:
            return ":has(" + (Bn(t) || "") + ")";
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
      function Qf(t, l) {
        var e = [];
        t = [t, 0];
        for (var a = 0; a < t.length; ) {
          var u = t[a++], n = u.tag, f = t[a++], m = l[f];
          if (n !== 5 && n !== 26 && n !== 27 || !ga(u)) {
            for (; m != null && qn(u, m); )
              f++, m = l[f];
            if (f === l.length) e.push(u);
            else
              for (u = u.child; u !== null; )
                t.push(u, f), u = u.sibling;
          }
        }
        return e;
      }
      function Yn(t, l) {
        if (!ba) throw Error(o(363));
        t = jn(t), t = Qf(t, l), l = [], t = Array.from(t);
        for (var e = 0; e < t.length; ) {
          var a = t[e++], u = a.tag;
          if (u === 5 || u === 26 || u === 27)
            ga(a) || l.push(a.stateNode);
          else
            for (a = a.child; a !== null; )
              t.push(a), a = a.sibling;
        }
        return l;
      }
      function tl() {
        if ((ht & 2) !== 0 && ft !== 0)
          return ft & -ft;
        if (F.T !== null) {
          var t = Le;
          return t !== 0 ? t : Ku();
        }
        return _m();
      }
      function Gf() {
        dl === 0 && (dl = (ft & 536870912) === 0 || mt ? ot() : 536870912);
        var t = vl.current;
        return t !== null && (t.flags |= 32), dl;
      }
      function xt(t, l, e) {
        (t === St && Et === 2 || t.cancelPendingCommit !== null) && (je(t, 0), Rl(
          t,
          ft,
          dl,
          !1
        )), $(t, e), ((ht & 2) === 0 || t !== St) && (t === St && ((ht & 2) === 0 && (Me |= e), Ht === 4 && Rl(
          t,
          ft,
          dl,
          !1
        )), zl(t));
      }
      function Vf(t, l, e) {
        if ((ht & 6) !== 0) throw Error(o(327));
        var a = !e && (l & 60) === 0 && (l & t.expiredLanes) === 0 || G(t, l), u = a ? em(t, l) : Xn(t, l, !0), n = a;
        do {
          if (u === 0) {
            ta && !a && Rl(t, l, 0, !1);
            break;
          } else if (u === 6)
            Rl(
              t,
              l,
              0,
              !Bl
            );
          else {
            if (e = t.current.alternate, n && !tm(e)) {
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
                  var m = t;
                  u = Ca;
                  var p = il && m.current.memoizedState.isDehydrated;
                  if (p && (je(m, f).flags |= 256), f = Xn(
                    m,
                    f,
                    !1
                  ), f !== 2) {
                    if (zc && !p) {
                      m.errorRecoveryDisabledLanes |= n, Me |= n, u = 4;
                      break t;
                    }
                    n = bl, bl = u, n !== null && Qn(n);
                  }
                  u = f;
                }
                if (n = !1, u !== 2) continue;
              }
            }
            if (u === 1) {
              je(t, 0), Rl(t, l, 0, !0);
              break;
            }
            t: {
              switch (a = t, u) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 4:
                  if ((l & 4194176) === l) {
                    Rl(
                      a,
                      l,
                      dl,
                      !Bl
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
                if (Rl(
                  a,
                  l,
                  dl,
                  !Bl
                ), L(a, 0) !== 0) break t;
                a.timeoutHandle = Nm(
                  Xf.bind(
                    null,
                    a,
                    e,
                    bl,
                    Au,
                    Mc,
                    l,
                    dl,
                    Me,
                    la,
                    Bl,
                    2,
                    -0,
                    0
                  ),
                  n
                );
                break t;
              }
              Xf(
                a,
                e,
                bl,
                Au,
                Mc,
                l,
                dl,
                Me,
                la,
                Bl,
                0,
                -0,
                0
              );
            }
          }
          break;
        } while (!0);
        zl(t);
      }
      function Qn(t) {
        bl === null ? bl = t : bl.push.apply(
          bl,
          t
        );
      }
      function Xf(t, l, e, a, u, n, f, m, p, M, R, B, Y) {
        var w = l.subtreeFlags;
        if ((w & 8192 || (w & 16785408) === 16785408) && (Rm(), jf(l), l = Am(), l !== null)) {
          t.cancelPendingCommit = l(
            wf.bind(
              null,
              t,
              e,
              a,
              u,
              f,
              m,
              p,
              1,
              B,
              Y
            )
          ), Rl(t, n, f, !M);
          return;
        }
        wf(
          t,
          e,
          a,
          u,
          f,
          m,
          p,
          R,
          B,
          Y
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
                if (!ul(n(), u)) return !1;
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
      function Rl(t, l, e, a) {
        l &= ~Tc, l &= ~Me, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
        for (var u = l; 0 < u; ) {
          var n = 31 - el(u), f = 1 << n;
          a[n] = -1, u &= ~f;
        }
        e !== 0 && k(t, e, l);
      }
      function Zf() {
        return (ht & 6) === 0 ? (Re(0), !1) : !0;
      }
      function Gn() {
        if (nt !== null) {
          if (Et === 0)
            var t = nt.return;
          else
            t = nt, jl = ze = null, ku(t), Pe = null, Ra = 0, t = nt;
          for (; t !== null; )
            Tf(t.alternate, t), t = t.return;
          nt = null;
        }
      }
      function je(t, l) {
        t.finishedWork = null, t.finishedLanes = 0;
        var e = t.timeoutHandle;
        e !== ec && (t.timeoutHandle = ec, bm(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Gn(), St = t, nt = e = Fl(t.current, null), ft = l, Et = 0, cl = null, Bl = !1, ta = G(t, l), zc = !1, la = dl = Tc = Me = ee = Ht = 0, bl = Ca = null, Mc = !1, (l & 8) !== 0 && (l |= l & 32);
        var a = t.entangledLanes;
        if (a !== 0)
          for (t = t.entanglements, a &= l; 0 < a; ) {
            var u = 31 - el(a), n = 1 << u;
            l |= t[u], a &= ~n;
          }
        return Yl = l, Za(), e;
      }
      function Kf(t, l) {
        lt = null, F.H = Nl, l === Ua ? (l = vi(), Et = 3) : l === rc ? (l = vi(), Et = 4) : Et = l === Vs ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, cl = l, nt === null && (Ht = 1, lu(
          t,
          Q(l, t.current)
        ));
      }
      function Jf() {
        var t = vl.current;
        return t === null ? !0 : (ft & 4194176) === ft ? Ml === null : (ft & 62914560) === ft || (ft & 536870912) !== 0 ? t === Ml : !1;
      }
      function xf() {
        var t = F.H;
        return F.H = Nl, t === null ? Nl : t;
      }
      function Lf() {
        var t = F.A;
        return F.A = Kv, t;
      }
      function Vn() {
        Ht = 4, Bl || (ft & 4194176) !== ft && vl.current !== null || (ta = !0), (ee & 134217727) === 0 && (Me & 134217727) === 0 || St === null || Rl(
          St,
          ft,
          dl,
          !1
        );
      }
      function Xn(t, l, e) {
        var a = ht;
        ht |= 2;
        var u = xf(), n = Lf();
        (St !== t || ft !== l) && (Au = null, je(t, l)), l = !1;
        var f = Ht;
        t: do
          try {
            if (Et !== 0 && nt !== null) {
              var m = nt, p = cl;
              switch (Et) {
                case 8:
                  Gn(), f = 6;
                  break t;
                case 3:
                case 2:
                case 6:
                  vl.current === null && (l = !0);
                  var M = Et;
                  if (Et = 0, cl = null, qe(t, m, p, M), e && ta) {
                    f = 0;
                    break t;
                  }
                  break;
                default:
                  M = Et, Et = 0, cl = null, qe(t, m, p, M);
              }
            }
            lm(), f = Ht;
            break;
          } catch (R) {
            Kf(t, R);
          }
        while (!0);
        return l && t.shellSuspendCounter++, jl = ze = null, ht = a, F.H = u, F.A = n, nt === null && (St = null, ft = 0, Za()), f;
      }
      function lm() {
        for (; nt !== null; ) Wf(nt);
      }
      function em(t, l) {
        var e = ht;
        ht |= 2;
        var a = xf(), u = Lf();
        St !== t || ft !== l ? (Au = null, ja = yl() + 500, je(t, l)) : ta = G(
          t,
          l
        );
        t: do
          try {
            if (Et !== 0 && nt !== null) {
              l = nt;
              var n = cl;
              l: switch (Et) {
                case 1:
                  Et = 0, cl = null, qe(t, l, n, 1);
                  break;
                case 2:
                  if (oi(n)) {
                    Et = 0, cl = null, Ff(l);
                    break;
                  }
                  l = function() {
                    Et === 2 && St === t && (Et = 7), zl(t);
                  }, n.then(l, l);
                  break t;
                case 3:
                  Et = 7;
                  break t;
                case 4:
                  Et = 5;
                  break t;
                case 7:
                  oi(n) ? (Et = 0, cl = null, Ff(l)) : (Et = 0, cl = null, qe(t, l, n, 7));
                  break;
                case 5:
                  var f = null;
                  switch (nt.tag) {
                    case 26:
                      f = nt.memoizedState;
                    case 5:
                    case 27:
                      var m = nt, p = m.type, M = m.pendingProps;
                      if (f ? Cs(f) : ys(p, M)) {
                        Et = 0, cl = null;
                        var R = m.sibling;
                        if (R !== null) nt = R;
                        else {
                          var B = m.return;
                          B !== null ? (nt = B, fu(B)) : nt = null;
                        }
                        break l;
                      }
                  }
                  Et = 0, cl = null, qe(t, l, n, 5);
                  break;
                case 6:
                  Et = 0, cl = null, qe(t, l, n, 6);
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
          } catch (Y) {
            Kf(t, Y);
          }
        while (!0);
        return jl = ze = null, F.H = a, F.A = u, ht = e, nt !== null ? 0 : (St = null, ft = 0, Za(), Ht);
      }
      function am() {
        for (; nt !== null && !Dv(); )
          Wf(nt);
      }
      function Wf(t) {
        var l = pf(
          t.alternate,
          t,
          Yl
        );
        t.memoizedProps = t.pendingProps, l === null ? fu(t) : nt = l;
      }
      function Ff(t) {
        var l = t, e = l.alternate;
        switch (l.tag) {
          case 15:
          case 0:
            l = ff(
              e,
              l,
              l.pendingProps,
              l.type,
              void 0,
              ft
            );
            break;
          case 11:
            l = ff(
              e,
              l,
              l.pendingProps,
              l.type.render,
              l.ref,
              ft
            );
            break;
          case 5:
            ku(l);
          default:
            Tf(e, l), l = nt = ts(l, Yl), l = pf(e, l, Yl);
        }
        t.memoizedProps = t.pendingProps, l === null ? fu(t) : nt = l;
      }
      function qe(t, l, e, a) {
        jl = ze = null, ku(l), Pe = null, Ra = 0;
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
        l.flags & 32768 ? (mt || a === 1 ? t = !0 : ta || (ft & 536870912) !== 0 ? t = !1 : (Bl = t = !0, (a === 2 || a === 3 || a === 6) && (a = vl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Pf(l, t)) : fu(l);
      }
      function fu(t) {
        var l = t;
        do {
          if ((l.flags & 32768) !== 0) {
            Pf(
              l,
              Bl
            );
            return;
          }
          t = l.return;
          var e = wo(
            l.alternate,
            l,
            Yl
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
      function Pf(t, l) {
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
      function wf(t, l, e, a, u, n, f, m, p, M) {
        var R = F.T, B = de();
        try {
          wt(2), F.T = null, um(
            t,
            l,
            e,
            a,
            B,
            u,
            n,
            f,
            m,
            p,
            M
          );
        } finally {
          F.T = R, wt(B);
        }
      }
      function um(t, l, e, a, u, n, f, m) {
        do
          me();
        while (Ne !== null);
        if ((ht & 6) !== 0) throw Error(o(327));
        var p = t.finishedWork;
        if (a = t.finishedLanes, p === null) return null;
        if (t.finishedWork = null, t.finishedLanes = 0, p === t.current) throw Error(o(177));
        t.callbackNode = null, t.callbackPriority = 0, t.cancelPendingCommit = null;
        var M = p.lanes | p.childLanes;
        if (M |= oc, Jt(
          t,
          a,
          M,
          n,
          f,
          m
        ), t === St && (nt = St = null, ft = 0), (p.subtreeFlags & 10256) === 0 && (p.flags & 10256) === 0 || Du || (Du = !0, bc = M, gc = e, fm(fc, function() {
          return me(), null;
        })), e = (p.flags & 15990) !== 0, (p.subtreeFlags & 15990) !== 0 || e ? (e = F.T, F.T = null, n = de(), wt(2), f = ht, ht |= 4, $o(t, p), Af(p, t), Tm(t.containerInfo), t.current = p, Of(t, p.alternate, p), Cv(), ht = f, wt(n), F.T = e) : t.current = p, Du ? (Du = !1, Ne = t, qa = a) : If(t, M), M = t.pendingLanes, M === 0 && (ae = null), S(p.stateNode), zl(t), l !== null)
          for (u = t.onRecoverableError, p = 0; p < l.length; p++)
            M = l[p], u(M.value, {
              componentStack: M.stack
            });
        return (qa & 3) !== 0 && me(), M = t.pendingLanes, (a & 4194218) !== 0 && (M & 42) !== 0 ? t === _c ? Ba++ : (Ba = 0, _c = t) : Ba = 0, Re(0), null;
      }
      function If(t, l) {
        (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Sa(l)));
      }
      function me() {
        if (Ne !== null) {
          var t = Ne, l = bc;
          bc = 0;
          var e = bt(qa), a = 32 > e ? 32 : e;
          e = F.T;
          var u = de();
          try {
            if (wt(a), F.T = null, Ne === null)
              var n = !1;
            else {
              a = gc, gc = null;
              var f = Ne, m = qa;
              if (Ne = null, qa = 0, (ht & 6) !== 0)
                throw Error(o(331));
              var p = ht;
              if (ht |= 4, Bf(f.current), Cf(
                f,
                f.current,
                m,
                a
              ), ht = p, Re(0, !1), al && typeof al.onPostCommitFiberRoot == "function")
                try {
                  al.onPostCommitFiberRoot(_a, f);
                } catch {
                }
              n = !0;
            }
            return n;
          } finally {
            wt(u), F.T = e, If(t, l);
          }
        }
        return !1;
      }
      function $f(t, l, e) {
        l = Q(e, l), l = vn(t.stateNode, l, 2), t = Xl(t, l, 2), t !== null && ($(t, 2), zl(t));
      }
      function rt(t, l, e) {
        if (t.tag === 3)
          $f(t, t, e);
        else
          for (; l !== null; ) {
            if (l.tag === 3) {
              $f(
                l,
                t,
                e
              );
              break;
            } else if (l.tag === 1) {
              var a = l.stateNode;
              if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ae === null || !ae.has(a))) {
                t = Q(e, t), e = tf(2), a = Xl(l, e, 2), a !== null && (lf(
                  e,
                  a,
                  l,
                  t
                ), $(a, 2), zl(a));
                break;
              }
            }
            l = l.return;
          }
      }
      function Zn(t, l, e) {
        var a = t.pingCache;
        if (a === null) {
          a = t.pingCache = new Jv();
          var u = /* @__PURE__ */ new Set();
          a.set(l, u);
        } else
          u = a.get(l), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(l, u));
        u.has(e) || (zc = !0, u.add(e), t = nm.bind(null, t, l, e), l.then(t, t));
      }
      function nm(t, l, e) {
        var a = t.pingCache;
        a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, St === t && (ft & e) === e && (Ht === 4 || Ht === 3 && (ft & 62914560) === ft && 300 > yl() - Nc ? (ht & 2) === 0 && je(t, 0) : Tc |= e, la === ft && (la = 0)), zl(t);
      }
      function kf(t, l) {
        l === 0 && (l = et()), t = Gl(t, l), t !== null && ($(t, l), zl(t));
      }
      function cm(t) {
        var l = t.memoizedState, e = 0;
        l !== null && (e = l.retryLane), kf(t, e);
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
        a !== null && a.delete(l), kf(t, e);
      }
      function fm(t, l) {
        return ru(t, l);
      }
      function sm(t, l, e, a) {
        this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Kn(t) {
        return t = t.prototype, !(!t || !t.isReactComponent);
      }
      function Fl(t, l) {
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
      function ts(t, l) {
        t.flags &= 31457282;
        var e = t.alternate;
        return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }), t;
      }
      function su(t, l, e, a, u, n) {
        var f = 0;
        if (a = t, typeof t == "function") Kn(t) && (f = 1);
        else if (typeof t == "string")
          f = fl && Zt ? Hs(t, e, Gt.current) ? 26 : qs(t) ? 27 : 5 : fl ? Hs(
            t,
            e,
            Gt.current
          ) ? 26 : 5 : Zt && qs(t) ? 27 : 5;
        else
          t: switch (t) {
            case Ye:
              return ve(
                e.children,
                u,
                n,
                l
              );
            case is:
              f = 8, u |= 24;
              break;
            case Fn:
              return t = s(12, e, l, u | 2), t.elementType = Fn, t.lanes = n, t;
            case wn:
              return t = s(13, e, l, u), t.elementType = wn, t.lanes = n, t;
            case In:
              return t = s(19, e, l, u), t.elementType = In, t.lanes = n, t;
            case ss:
              return ls(e, u, n, l);
            default:
              if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                  case dm:
                  case Pl:
                    f = 10;
                    break t;
                  case fs:
                    f = 9;
                    break t;
                  case Pn:
                    f = 11;
                    break t;
                  case $n:
                    f = 14;
                    break t;
                  case wl:
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
      function ls(t, l, e, a) {
        t = s(22, t, a, l), t.elementType = ss, t.lanes = e;
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
              var f = Gl(n, 2);
              f !== null && (u._pendingVisibility |= 2, xt(f, n, 2));
            }
          },
          attach: function() {
            var n = u._current;
            if (n === null) throw Error(o(456));
            if ((u._pendingVisibility & 2) !== 0) {
              var f = Gl(n, 2);
              f !== null && (u._pendingVisibility &= -3, xt(f, n, 2));
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
      function om(t, l, e, a, u, n, f, m) {
        this.tag = 1, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ec, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = P(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = P(0), this.hiddenUpdates = P(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function es(t, l, e, a, u, n, f, m, p, M, R, B) {
        return t = new om(
          t,
          l,
          e,
          f,
          m,
          p,
          M,
          B
        ), l = 1, n === !0 && (l |= 24), n = s(3, null, null, l), t.current = n, n.stateNode = t, l = Nn(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
          element: a,
          isDehydrated: e,
          cache: l
        }, Ju(n), t;
      }
      function as(t) {
        return t ? (t = Ve, t) : Ve;
      }
      function us(t) {
        var l = t._reactInternals;
        if (l === void 0)
          throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
        return t = D(l), t = t !== null ? C(t) : null, t === null ? null : Na(t.stateNode);
      }
      function ns(t, l, e, a, u, n) {
        u = as(u), a.context === null ? a.context = u : a.pendingContext = u, a = Vl(l), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = Xl(t, a, l), e !== null && (xt(e, t, l), oa(e, t, l));
      }
      function cs(t, l) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
          var e = t.retryLane;
          t.retryLane = e !== 0 && e < l ? e : l;
        }
      }
      function Ln(t, l) {
        cs(t, l), (t = t.alternate) && cs(t, l);
      }
      var ut = {}, mm = He, ll = f0(), Wn = Object.assign, vm = Symbol.for("react.element"), ou = Symbol.for("react.transitional.element"), Be = Symbol.for("react.portal"), Ye = Symbol.for("react.fragment"), is = Symbol.for("react.strict_mode"), Fn = Symbol.for("react.profiler"), dm = Symbol.for("react.provider"), fs = Symbol.for("react.consumer"), Pl = Symbol.for("react.context"), Pn = Symbol.for("react.forward_ref"), wn = Symbol.for("react.suspense"), In = Symbol.for("react.suspense_list"), $n = Symbol.for("react.memo"), wl = Symbol.for("react.lazy"), ss = Symbol.for("react.offscreen"), pm = Symbol.for("react.memo_cache_sentinel"), os = Symbol.iterator, rm = Symbol.for("react.client.reference"), F = mm.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, kn, ms, tc = !1, mu = Array.isArray, ym = i.rendererVersion, hm = i.rendererPackageName, vs = i.extraDevToolsConfig, Na = i.getPublicInstance, Sm = i.getRootHostContext, Em = i.getChildHostContext, zm = i.prepareForCommit, Tm = i.resetAfterCommit, Mm = i.createInstance, lc = i.appendInitialChild, ds = i.finalizeInitialChildren, vu = i.shouldSetTextContent, ps = i.createTextInstance, Nm = i.scheduleTimeout, bm = i.cancelTimeout, ec = i.noTimeout, Al = i.isPrimaryRenderer;
      i.warnsIfNotActing;
      var Xt = i.supportsMutation, Il = i.supportsPersistence, il = i.supportsHydration, rs = i.getInstanceFromNode;
      i.beforeActiveInstanceBlur, i.afterActiveInstanceBlur;
      var gm = i.preparePortalMount;
      i.prepareScopeUpdate, i.getInstanceFromScope;
      var wt = i.setCurrentUpdatePriority, de = i.getCurrentUpdatePriority, _m = i.resolveUpdatePriority;
      i.resolveEventType, i.resolveEventTimeStamp;
      var Hm = i.shouldAttemptEagerTransition, Om = i.detachDeletedInstance;
      i.requestPostPaintCallback;
      var Um = i.maySuspendCommit, ys = i.preloadInstance, Rm = i.startSuspendingCommit, hs = i.suspendInstance, Am = i.waitForCommitToBeReady, Qe = i.NotPendingTransition, pe = i.HostTransitionContext, Dm = i.resetFormInstance;
      i.bindToConsole;
      var Cm = i.supportsMicrotasks, jm = i.scheduleMicrotask, ba = i.supportsTestSelectors, qm = i.findFiberRoot, Bm = i.getBoundingRect, Ym = i.getTextContent, ga = i.isHiddenSubtree, Qm = i.matchAccessibilityRole, Gm = i.setFocusIfFocusable, Vm = i.setupIntersectionObserver, Xm = i.appendChild, Zm = i.appendChildToContainer, Km = i.commitTextUpdate, Jm = i.commitMount, xm = i.commitUpdate, Lm = i.insertBefore, Wm = i.insertInContainerBefore, Fm = i.removeChild, Pm = i.removeChildFromContainer, Ss = i.resetTextContent, wm = i.hideInstance, Im = i.hideTextInstance, $m = i.unhideInstance, km = i.unhideTextInstance, tv = i.clearContainer, lv = i.cloneInstance, Es = i.createContainerChildSet, zs = i.appendChildToContainerChildSet, ev = i.finalizeContainerChildren, Ts = i.replaceContainerChildren, Ms = i.cloneHiddenInstance, Ns = i.cloneHiddenTextInstance, ac = i.isSuspenseInstancePending, uc = i.isSuspenseInstanceFallback, av = i.getSuspenseInstanceFallbackErrorDetails, uv = i.registerSuspenseInstanceRetry, nv = i.canHydrateFormStateMarker, cv = i.isFormStateMarkerMatching, bs = i.getNextHydratableSibling, gs = i.getFirstHydratableChild, iv = i.getFirstHydratableChildWithinContainer, fv = i.getFirstHydratableChildWithinSuspenseInstance, sv = i.canHydrateInstance, ov = i.canHydrateTextInstance, mv = i.canHydrateSuspenseInstance, vv = i.hydrateInstance, dv = i.hydrateTextInstance, pv = i.hydrateSuspenseInstance, rv = i.getNextHydratableInstanceAfterSuspenseInstance, yv = i.commitHydratedContainer, hv = i.commitHydratedSuspenseInstance, Sv = i.clearSuspenseBoundary, Ev = i.clearSuspenseBoundaryFromContainer, _s = i.shouldDeleteUnhydratedTailInstances;
      i.diffHydratedPropsForDevWarnings, i.diffHydratedTextForDevWarnings, i.describeHydratableInstanceForDevWarnings;
      var zv = i.validateHydratableInstance, Tv = i.validateHydratableTextInstance, fl = i.supportsResources, Hs = i.isHostHoistableType, nc = i.getHoistableRoot, Os = i.getResource, Us = i.acquireResource, Rs = i.releaseResource, Mv = i.hydrateHoistable, As = i.mountHoistable, Ds = i.unmountHoistable, Nv = i.createHoistableInstance, bv = i.prepareToCommitHoistables, gv = i.mayResourceSuspendCommit, Cs = i.preloadResource, _v = i.suspendResource, Zt = i.supportsSingletons, js = i.resolveSingletonInstance, Hv = i.clearSingleton, Ov = i.acquireSingletonInstance, Uv = i.releaseSingletonInstance, qs = i.isHostSingletonType, cc = [], Ge = -1, Ve = {}, el = Math.clz32 ? Math.clz32 : K, Rv = Math.log, Av = Math.LN2, du = 128, pu = 4194304, ru = ll.unstable_scheduleCallback, ic = ll.unstable_cancelCallback, Dv = ll.unstable_shouldYield, Cv = ll.unstable_requestPaint, yl = ll.unstable_now, Bs = ll.unstable_ImmediatePriority, jv = ll.unstable_UserBlockingPriority, fc = ll.unstable_NormalPriority, qv = ll.unstable_IdlePriority, Bv = ll.log, Yv = ll.unstable_setDisableYieldValue, _a = null, al = null, ul = typeof Object.is == "function" ? Object.is : A, Ys = /* @__PURE__ */ new WeakMap(), Xe = [], Ze = 0, yu = null, hu = 0, sl = [], ol = 0, re = null, Dl = 1, Cl = "", Gt = V(null), Ha = V(null), $l = V(null), Su = V(null), Lt = null, Kt = null, mt = !1, hl = null, Tl = !1, sc = Error(o(519)), ml = [], Ke = 0, oc = 0, Eu = null, Je = null, mc = !1, zu = !1, vc = !1, xe = 0, Oa = null, dc = 0, Le = 0, We = null, kl = !1, pc = !1, Qv = Object.prototype.hasOwnProperty, Ua = Error(o(460)), rc = Error(o(474)), Tu = { then: function() {
      } }, Fe = null, Pe = null, Ra = 0, ye = pi(!0), Qs = pi(!1), we = V(null), Mu = V(0), vl = V(null), Ml = null, jt = V(0), te = 0, lt = null, yt = null, At = null, Nu = !1, Ie = !1, he = !1, bu = 0, Aa = 0, $e = null, Gv = 0, yc = function() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }, Nl = {
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
      Nl.useCacheRefresh = Ot, Nl.useMemoCache = Ot, Nl.useHostTransitionStatus = Ot, Nl.useFormState = Ot, Nl.useActionState = Ot, Nl.useOptimistic = Ot;
      var Se = {
        readContext: Vt,
        use: wa,
        useCallback: function(t, l) {
          return Ft().memoizedState = [
            t,
            l === void 0 ? null : l
          ], t;
        },
        useContext: Vt,
        useEffect: Bi,
        useImperativeHandle: function(t, l, e) {
          e = e != null ? e.concat([t]) : null, $a(
            4194308,
            4,
            Gi.bind(null, l, t),
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
          var e = Ft();
          l = l === void 0 ? null : l;
          var a = t();
          if (he) {
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
          var a = Ft();
          if (e !== void 0) {
            var u = e(l);
            if (he) {
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
          var l = Ft();
          return t = { current: t }, l.memoizedState = t;
        },
        useState: function(t) {
          t = an(t);
          var l = t.queue, e = Fi.bind(
            null,
            lt,
            l
          );
          return l.dispatch = e, [t.memoizedState, e];
        },
        useDebugValue: cn,
        useDeferredValue: function(t, l) {
          var e = Ft();
          return fn(e, t, l);
        },
        useTransition: function() {
          var t = an(!1);
          return t = Ji.bind(
            null,
            lt,
            t.queue,
            !0,
            !1
          ), Ft().memoizedState = t, [!1, t];
        },
        useSyncExternalStore: function(t, l, e) {
          var a = lt, u = Ft();
          if (mt) {
            if (e === void 0)
              throw Error(o(407));
            e = e();
          } else {
            if (e = l(), St === null)
              throw Error(o(349));
            (ft & 60) !== 0 || zi(a, l, e);
          }
          u.memoizedState = e;
          var n = { value: e, getSnapshot: l };
          return u.queue = n, Bi(Mi.bind(null, a, n, t), [
            t
          ]), a.flags |= 2048, Ae(
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
          var t = Ft(), l = St.identifierPrefix;
          if (mt) {
            var e = Cl, a = Dl;
            e = (a & ~(1 << 32 - el(a) - 1)).toString(32) + e, l = ":" + l + "R" + e, e = bu++, 0 < e && (l += "H" + e.toString(32)), l += ":";
          } else
            e = Gv++, l = ":" + l + "r" + e.toString(32) + ":";
          return t.memoizedState = l;
        },
        useCacheRefresh: function() {
          return Ft().memoizedState = Lo.bind(
            null,
            lt
          );
        }
      };
      Se.useMemoCache = tn, Se.useHostTransitionStatus = sn, Se.useFormState = Ai, Se.useActionState = Ai, Se.useOptimistic = function(t) {
        var l = Ft();
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
          lt,
          !0,
          e
        ), e.dispatch = l, [t, l];
      };
      var le = {
        readContext: Vt,
        use: wa,
        useCallback: Xi,
        useContext: Vt,
        useEffect: nn,
        useImperativeHandle: Vi,
        useInsertionEffect: Yi,
        useLayoutEffect: Qi,
        useMemo: Zi,
        useReducer: Ia,
        useRef: qi,
        useState: function() {
          return Ia(_l);
        },
        useDebugValue: cn,
        useDeferredValue: function(t, l) {
          var e = Rt();
          return Ki(
            e,
            yt.memoizedState,
            t,
            l
          );
        },
        useTransition: function() {
          var t = Ia(_l)[0], l = Rt().memoizedState;
          return [
            typeof t == "boolean" ? t : pa(t),
            l
          ];
        },
        useSyncExternalStore: Ei,
        useId: Li
      };
      le.useCacheRefresh = Wi, le.useMemoCache = tn, le.useHostTransitionStatus = sn, le.useFormState = Di, le.useActionState = Di, le.useOptimistic = function(t, l) {
        var e = Rt();
        return gi(e, yt, t, l);
      };
      var Ee = {
        readContext: Vt,
        use: wa,
        useCallback: Xi,
        useContext: Vt,
        useEffect: nn,
        useImperativeHandle: Vi,
        useInsertionEffect: Yi,
        useLayoutEffect: Qi,
        useMemo: Zi,
        useReducer: en,
        useRef: qi,
        useState: function() {
          return en(_l);
        },
        useDebugValue: cn,
        useDeferredValue: function(t, l) {
          var e = Rt();
          return yt === null ? fn(e, t, l) : Ki(
            e,
            yt.memoizedState,
            t,
            l
          );
        },
        useTransition: function() {
          var t = en(_l)[0], l = Rt().memoizedState;
          return [
            typeof t == "boolean" ? t : pa(t),
            l
          ];
        },
        useSyncExternalStore: Ei,
        useId: Li
      };
      Ee.useCacheRefresh = Wi, Ee.useMemoCache = tn, Ee.useHostTransitionStatus = sn, Ee.useFormState = ji, Ee.useActionState = ji, Ee.useOptimistic = function(t, l) {
        var e = Rt();
        return yt !== null ? gi(e, yt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
      };
      var hc = {
        isMounted: function(t) {
          return (t = t._reactInternals) ? z(t) === t : !1;
        },
        enqueueSetState: function(t, l, e) {
          t = t._reactInternals;
          var a = tl(), u = Vl(a);
          u.payload = l, e != null && (u.callback = e), l = Xl(t, u, a), l !== null && (xt(l, t, a), oa(l, t, a));
        },
        enqueueReplaceState: function(t, l, e) {
          t = t._reactInternals;
          var a = tl(), u = Vl(a);
          u.tag = 1, u.payload = l, e != null && (u.callback = e), l = Xl(t, u, a), l !== null && (xt(l, t, a), oa(l, t, a));
        },
        enqueueForceUpdate: function(t, l) {
          t = t._reactInternals;
          var e = tl(), a = Vl(e);
          a.tag = 2, l != null && (a.callback = l), l = Xl(t, a, e), l !== null && (xt(l, t, e), oa(l, t, e));
        }
      }, Gs = typeof reportError == "function" ? reportError : function(t) {
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
      }, Vs = Error(o(461)), qt = !1, Sc = { dehydrated: null, treeContext: null, retryLane: 0 }, gu = V(null), ze = null, jl = null, Vv = typeof AbortController < "u" ? AbortController : function() {
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
      }, Xv = ll.unstable_scheduleCallback, Zv = ll.unstable_NormalPriority, gt = {
        $$typeof: Pl,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      }, Xs = F.S;
      F.S = function(t, l) {
        typeof l == "object" && l !== null && typeof l.then == "function" && Xo(t, l), Xs !== null && Xs(t, l);
      };
      var Te = V(null), ql = !1, _t = !1, Ec = !1, Zs = typeof WeakSet == "function" ? WeakSet : Set, Bt = null, Ks = !1, Dt = null, nl = !1, Sl = null, ke = 8192, Kv = {
        getCacheForType: function(t) {
          var l = Vt(gt), e = l.data.get(t);
          return e === void 0 && (e = t(), l.data.set(t, e)), e;
        }
      }, _u = 0, Hu = 1, Ou = 2, Uu = 3, Ru = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var Da = Symbol.for;
        _u = Da("selector.component"), Hu = Da("selector.has_pseudo_class"), Ou = Da("selector.role"), Uu = Da("selector.test_id"), Ru = Da("selector.text");
      }
      var Jv = typeof WeakMap == "function" ? WeakMap : Map, ht = 0, St = null, nt = null, ft = 0, Et = 0, cl = null, Bl = !1, ta = !1, zc = !1, Yl = 0, Ht = 0, ee = 0, Me = 0, Tc = 0, dl = 0, la = 0, Ca = null, bl = null, Mc = !1, Nc = 0, ja = 1 / 0, Au = null, ae = null, Du = !1, Ne = null, qa = 0, bc = 0, gc = null, Ba = 0, _c = null;
      return ut.attemptContinuousHydration = function(t) {
        if (t.tag === 13) {
          var l = Gl(t, 67108864);
          l !== null && xt(l, t, 67108864), Ln(t, 67108864);
        }
      }, ut.attemptHydrationAtCurrentPriority = function(t) {
        if (t.tag === 13) {
          var l = tl(), e = Gl(t, l);
          e !== null && xt(e, t, l), Ln(t, l);
        }
      }, ut.attemptSynchronousHydration = function(t) {
        switch (t.tag) {
          case 3:
            if (t = t.stateNode, t.current.memoizedState.isDehydrated) {
              var l = J(t.pendingLanes);
              if (l !== 0) {
                for (t.pendingLanes |= 2, t.entangledLanes |= 2; l; ) {
                  var e = 1 << 31 - el(l);
                  t.entanglements[1] |= e, l &= ~e;
                }
                zl(t), (ht & 6) === 0 && (ja = yl() + 500, Re(0));
              }
            }
            break;
          case 13:
            l = Gl(t, 2), l !== null && xt(l, t, 2), Zf(), Ln(t, 2);
        }
      }, ut.batchedUpdates = function(t, l) {
        return t(l);
      }, ut.createComponentSelector = function(t) {
        return { $$typeof: _u, value: t };
      }, ut.createContainer = function(t, l, e, a, u, n, f, m, p, M) {
        return es(
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
          M,
          null
        );
      }, ut.createHasPseudoClassSelector = function(t) {
        return { $$typeof: Hu, value: t };
      }, ut.createHydrationContainer = function(t, l, e, a, u, n, f, m, p, M, R, B, Y) {
        return t = es(
          e,
          a,
          !0,
          t,
          u,
          n,
          m,
          p,
          M,
          R,
          B,
          Y
        ), t.context = as(null), e = t.current, a = tl(), u = Vl(a), u.callback = l ?? null, Xl(e, u, a), t.current.lanes = a, $(t, a), zl(t), t;
      }, ut.createPortal = function(t, l, e) {
        var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Be,
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
        Gs(t);
      }, ut.defaultOnUncaughtError = function(t) {
        Gs(t);
      }, ut.deferredUpdates = function(t) {
        var l = F.T, e = de();
        try {
          return wt(32), F.T = null, t();
        } finally {
          wt(e), F.T = l;
        }
      }, ut.discreteUpdates = function(t, l, e, a, u) {
        var n = F.T, f = de();
        try {
          return wt(2), F.T = null, t(l, e, a, u);
        } finally {
          wt(f), F.T = n, ht === 0 && (ja = yl() + 500);
        }
      }, ut.findAllNodes = Yn, ut.findBoundingRects = function(t, l) {
        if (!ba) throw Error(o(363));
        l = Yn(t, l), t = [];
        for (var e = 0; e < l.length; e++)
          t.push(Bm(l[e]));
        for (l = t.length - 1; 0 < l; l--) {
          e = t[l];
          for (var a = e.x, u = a + e.width, n = e.y, f = n + e.height, m = l - 1; 0 <= m; m--)
            if (l !== m) {
              var p = t[m], M = p.x, R = M + p.width, B = p.y, Y = B + p.height;
              if (a >= M && n >= B && u <= R && f <= Y) {
                t.splice(l, 1);
                break;
              } else if (a !== M || e.width !== p.width || Y < n || B > f) {
                if (!(n !== B || e.height !== p.height || R < a || M > u)) {
                  M > a && (p.width += M - a, p.x = a), R < u && (p.width = u - M), t.splice(l, 1);
                  break;
                }
              } else {
                B > n && (p.height += B - n, p.y = n), Y < f && (p.height = f - B), t.splice(l, 1);
                break;
              }
            }
        }
        return t;
      }, ut.findHostInstance = us, ut.findHostInstanceWithNoPortals = function(t) {
        return t = D(t), t = t !== null ? q(t) : null, t === null ? null : Na(t.stateNode);
      }, ut.findHostInstanceWithWarning = function(t) {
        return us(t);
      }, ut.flushPassiveEffects = me, ut.flushSyncFromReconciler = function(t) {
        var l = ht;
        ht |= 1;
        var e = F.T, a = de();
        try {
          if (wt(2), F.T = null, t)
            return t();
        } finally {
          wt(a), F.T = e, ht = l, (ht & 6) === 0 && Re(0);
        }
      }, ut.flushSyncWork = Zf, ut.focusWithin = function(t, l) {
        if (!ba) throw Error(o(363));
        for (t = jn(t), l = Qf(t, l), l = Array.from(l), t = 0; t < l.length; ) {
          var e = l[t++], a = e.tag;
          if (!ga(e)) {
            if ((a === 5 || a === 26 || a === 27) && Gm(e.stateNode))
              return !0;
            for (e = e.child; e !== null; )
              l.push(e), e = e.sibling;
          }
        }
        return !1;
      }, ut.getFindAllNodesFailureDescription = function(t, l) {
        if (!ba) throw Error(o(363));
        var e = 0, a = [];
        t = [jn(t), 0];
        for (var u = 0; u < t.length; ) {
          var n = t[u++], f = n.tag, m = t[u++], p = l[m];
          if ((f !== 5 && f !== 26 && f !== 27 || !ga(n)) && (qn(n, p) && (a.push(Bn(p)), m++, m > e && (e = m)), m < l.length))
            for (n = n.child; n !== null; )
              t.push(n, m), n = n.sibling;
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
      }, ut.getPublicRootInstance = function(t) {
        if (t = t.current, !t.child) return null;
        switch (t.child.tag) {
          case 27:
          case 5:
            return Na(t.child.stateNode);
          default:
            return t.child.stateNode;
        }
      }, ut.injectIntoDevTools = function() {
        var t = {
          bundleType: 0,
          version: ym,
          rendererPackageName: hm,
          currentDispatcherRef: F,
          findFiberByHostInstance: rs,
          reconcilerVersion: "19.0.0"
        };
        if (vs !== null && (t.rendererConfig = vs), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") t = !1;
        else {
          var l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (l.isDisabled || !l.supportsFiber) t = !0;
          else {
            try {
              _a = l.inject(t), al = l;
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
        t = Yn(t, l);
        var u = Vm(
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
        var u = xi(t).queue;
        Ji(
          t,
          u,
          l,
          Qe,
          e === null ? v : function() {
            var n = xi(t).next.queue;
            return ra(
              t,
              n,
              {},
              tl()
            ), e(a);
          }
        );
      }, ut.updateContainer = function(t, l, e, a) {
        var u = l.current, n = tl();
        return ns(
          u,
          n,
          t,
          l,
          e,
          a
        ), n;
      }, ut.updateContainerSync = function(t, l, e, a) {
        return l.tag === 0 && me(), ns(
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
var eo;
function o0() {
  return eo || (eo = 1, Dc.exports = s0()), Dc.exports;
}
var m0 = o0();
const v0 = /* @__PURE__ */ ho(m0);
var Bc = { exports: {} }, Yc = {};
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
function d0() {
  return ao || (ao = 1, function(c) {
    function i(S, O) {
      var A = S.length;
      S.push(O);
      t: for (; 0 < A; ) {
        var Q = A - 1 >>> 1, x = S[Q];
        if (0 < o(x, O))
          S[Q] = O, S[A] = x, A = Q;
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
        t: for (var Q = 0, x = S.length, tt = x >>> 1; Q < tt; ) {
          var it = 2 * (Q + 1) - 1, Mt = S[it], at = it + 1, Ut = S[at];
          if (0 > o(Mt, A))
            at < x && 0 > o(Ut, Mt) ? (S[Q] = Ut, S[at] = A, Q = at) : (S[Q] = Mt, S[it] = A, Q = it);
          else if (at < x && 0 > o(Ut, A))
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
      var j = Date, T = j.now();
      c.unstable_now = function() {
        return j.now() - T;
      };
    }
    var y = [], H = [], _ = 1, z = null, N = 3, D = !1, C = !1, q = !1, V = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    function K(S) {
      for (var O = s(H); O !== null; ) {
        if (O.callback === null) v(H);
        else if (O.startTime <= S)
          v(H), O.sortIndex = O.expirationTime, i(y, O);
        else break;
        O = s(H);
      }
    }
    function J(S) {
      if (q = !1, K(S), !C)
        if (s(y) !== null)
          C = !0, pt();
        else {
          var O = s(H);
          O !== null && bt(J, O.startTime - S);
        }
    }
    var L = !1, G = -1, ct = 5, ot = -1;
    function et() {
      return !(c.unstable_now() - ot < ct);
    }
    function P() {
      if (L) {
        var S = c.unstable_now();
        ot = S;
        var O = !0;
        try {
          t: {
            C = !1, q && (q = !1, g(G), G = -1), D = !0;
            var A = N;
            try {
              l: {
                for (K(S), z = s(y); z !== null && !(z.expirationTime > S && et()); ) {
                  var Q = z.callback;
                  if (typeof Q == "function") {
                    z.callback = null, N = z.priorityLevel;
                    var x = Q(
                      z.expirationTime <= S
                    );
                    if (S = c.unstable_now(), typeof x == "function") {
                      z.callback = x, K(S), O = !0;
                      break l;
                    }
                    z === s(y) && v(y), K(S);
                  } else v(y);
                  z = s(y);
                }
                if (z !== null) O = !0;
                else {
                  var tt = s(H);
                  tt !== null && bt(
                    J,
                    tt.startTime - S
                  ), O = !1;
                }
              }
              break t;
            } finally {
              z = null, N = A, D = !1;
            }
            O = void 0;
          }
        } finally {
          O ? $() : L = !1;
        }
      }
    }
    var $;
    if (typeof b == "function")
      $ = function() {
        b(P);
      };
    else if (typeof MessageChannel < "u") {
      var Jt = new MessageChannel(), k = Jt.port2;
      Jt.port1.onmessage = P, $ = function() {
        k.postMessage(null);
      };
    } else
      $ = function() {
        V(P, 0);
      };
    function pt() {
      L || (L = !0, $());
    }
    function bt(S, O) {
      G = V(function() {
        S(c.unstable_now());
      }, O);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, c.unstable_continueExecution = function() {
      C || D || (C = !0, pt());
    }, c.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ct = 0 < S ? Math.floor(1e3 / S) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, c.unstable_getFirstCallbackNode = function() {
      return s(y);
    }, c.unstable_next = function(S) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = N;
      }
      var A = N;
      N = O;
      try {
        return S();
      } finally {
        N = A;
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
      var A = N;
      N = S;
      try {
        return O();
      } finally {
        N = A;
      }
    }, c.unstable_scheduleCallback = function(S, O, A) {
      var Q = c.unstable_now();
      switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? Q + A : Q) : A = Q, S) {
        case 1:
          var x = -1;
          break;
        case 2:
          x = 250;
          break;
        case 5:
          x = 1073741823;
          break;
        case 4:
          x = 1e4;
          break;
        default:
          x = 5e3;
      }
      return x = A + x, S = {
        id: _++,
        callback: O,
        priorityLevel: S,
        startTime: A,
        expirationTime: x,
        sortIndex: -1
      }, A > Q ? (S.sortIndex = A, i(H, S), s(y) === null && S === s(H) && (q ? (g(G), G = -1) : q = !0, bt(J, A - Q))) : (S.sortIndex = x, i(y, S), C || D || (C = !0, pt())), S;
    }, c.unstable_shouldYield = et, c.unstable_wrapCallback = function(S) {
      var O = N;
      return function() {
        var A = N;
        N = O;
        try {
          return S.apply(this, arguments);
        } finally {
          N = A;
        }
      };
    };
  }(Yc)), Yc;
}
var uo;
function p0() {
  return uo || (uo = 1, Bc.exports = d0()), Bc.exports;
}
var no = p0();
const r0 = (c) => typeof c == "object" && typeof c.then == "function", _e = [];
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
  for (const E of _e)
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
      const E = _e.indexOf(o);
      E !== -1 && _e.splice(E, 1);
    },
    promise: (
      // Execute the promise
      (r0(c) ? c : c(...i)).then((E) => {
        o.response = E, v.lifespan && v.lifespan > 0 && (o.timeout = setTimeout(o.remove, v.lifespan));
      }).catch((E) => o.error = E)
    )
  };
  if (_e.push(o), !s) throw o.promise;
}
const y0 = (c, i, s) => Eo(c, i, !1, s), h0 = (c, i, s) => void Eo(c, i, !0, s), S0 = (c) => {
  if (c === void 0 || c.length === 0) _e.splice(0, _e.length);
  else {
    const i = _e.find((s) => So(c, s.keys, s.equal));
    i && i.remove();
  }
};
function Ic(c, i, s) {
  if (!c) return;
  if (s(c) === !0) return c;
  let v = i ? c.return : c.child;
  for (; v; ) {
    const o = Ic(v, i, s);
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
const $c = /* @__PURE__ */ zo(/* @__PURE__ */ st.createContext(null));
class To extends st.Component {
  render() {
    return /* @__PURE__ */ st.createElement($c.Provider, { value: this._reactInternals }, this.props.children);
  }
}
function Mo() {
  const c = st.useContext($c);
  if (c === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const i = st.useId();
  return st.useMemo(() => {
    for (const s of [c, c?.alternate]) {
      if (!s) continue;
      const v = Ic(s, !1, (o) => {
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
const E0 = Symbol.for("react.context"), z0 = (c) => c !== null && typeof c == "object" && "$$typeof" in c && c.$$typeof === E0;
function T0() {
  const c = Mo(), [i] = st.useState(() => /* @__PURE__ */ new Map());
  i.clear();
  let s = c;
  for (; s; ) {
    const v = s.type;
    z0(v) && v !== $c && !i.has(v) && i.set(v, st.use(zo(v))), s = s.return;
  }
  return i;
}
function M0() {
  const c = T0();
  return st.useMemo(
    () => Array.from(c.keys()).reduce(
      (i, s) => (v) => /* @__PURE__ */ st.createElement(i, null, /* @__PURE__ */ st.createElement(s.Provider, { ...v, value: c.get(s) })),
      (i) => /* @__PURE__ */ st.createElement(To, { ...i })
    ),
    [c]
  );
}
function No(c) {
  let i = c.root;
  for (; i.getState().previousRoot; ) i = i.getState().previousRoot;
  return i;
}
const bo = (c) => c && c.isOrthographicCamera, N0 = (c) => c && c.hasOwnProperty("current"), b0 = (c) => c != null && (typeof c == "string" || typeof c == "number" || c.isColor), Va = /* @__PURE__ */ ((c, i) => typeof window < "u" && (((c = window.document) == null ? void 0 : c.createElement) || ((i = window.navigator) == null ? void 0 : i.product) === "ReactNative"))() ? st.useLayoutEffect : st.useEffect;
function go(c) {
  const i = st.useRef(c);
  return Va(() => void (i.current = c), [c]), i;
}
function g0() {
  const c = Mo(), i = M0();
  return st.useMemo(() => ({
    children: s
  }) => {
    const o = !!Ic(c, !0, (E) => E.type === st.StrictMode) ? st.StrictMode : st.Fragment;
    return /* @__PURE__ */ Z(o, {
      children: /* @__PURE__ */ Z(i, {
        children: s
      })
    });
  }, [c, i]);
}
function _0({
  set: c
}) {
  return Va(() => (c(new Promise(() => null)), () => c(!1)), [c]), null;
}
const H0 = /* @__PURE__ */ ((c) => (c = class extends st.Component {
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
function _o(c) {
  var i;
  const s = typeof window < "u" ? (i = window.devicePixelRatio) != null ? i : 2 : 1;
  return Array.isArray(c) ? Math.min(Math.max(c[0], s), c[1]) : c;
}
function ea(c) {
  var i;
  return (i = c.__r3f) == null ? void 0 : i.root.getState();
}
const Tt = {
  obj: (c) => c === Object(c) && !Tt.arr(c) && typeof c != "function",
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
    if (Tt.str(c) || Tt.num(c) || Tt.boo(c)) return c === i;
    const E = Tt.obj(c);
    if (E && v === "reference") return c === i;
    const j = Tt.arr(c);
    if (j && s === "reference") return c === i;
    if ((j || E) && c === i) return !0;
    let T;
    for (T in c) if (!(T in i)) return !1;
    if (E && s === "shallow" && v === "shallow") {
      for (T in o ? i : c) if (!Tt.equ(c[T], i[T], {
        strict: o,
        objects: "reference"
      })) return !1;
    } else
      for (T in o ? i : c) if (c[T] !== i[T]) return !1;
    if (Tt.und(T)) {
      if (j && c.length === 0 && i.length === 0 || E && Object.keys(c).length === 0 && Object.keys(i).length === 0) return !0;
      if (c !== i) return !1;
    }
    return !0;
  }
};
function O0(c) {
  const i = {
    nodes: {},
    materials: {},
    meshes: {}
  };
  return c && c.traverse((s) => {
    s.name && (i.nodes[s.name] = s), s.material && !i.materials[s.material.name] && (i.materials[s.material.name] = s.material), s.isMesh && !i.meshes[s.name] && (i.meshes[s.name] = s);
  }), i;
}
function U0(c) {
  c.type !== "Scene" && (c.dispose == null || c.dispose());
  for (const i in c) {
    const s = c[i];
    s?.type !== "Scene" && (s == null || s.dispose == null || s.dispose());
  }
}
const Ho = ["children", "key", "ref"];
function R0(c) {
  const i = {};
  for (const s in c)
    Ho.includes(s) || (i[s] = c[s]);
  return i;
}
function Yu(c, i, s, v) {
  const o = c;
  let E = o?.__r3f;
  return E || (E = {
    root: i,
    type: s,
    parent: null,
    children: [],
    props: R0(v),
    object: o,
    eventCount: 0,
    handlers: {},
    isHidden: !1
  }, o && (o.__r3f = E)), E;
}
function Ga(c, i) {
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
const co = /-\d+$/;
function Qu(c, i) {
  if (Tt.str(i.props.attach)) {
    if (co.test(i.props.attach)) {
      const o = i.props.attach.replace(co, ""), {
        root: E,
        key: j
      } = Ga(c.object, o);
      Array.isArray(E[j]) || (E[j] = []);
    }
    const {
      root: s,
      key: v
    } = Ga(c.object, i.props.attach);
    i.previousAttach = s[v], s[v] = i.object;
  } else Tt.fun(i.props.attach) && (i.previousAttach = i.props.attach(c.object, i.object));
}
function Gu(c, i) {
  if (Tt.str(i.props.attach)) {
    const {
      root: s,
      key: v
    } = Ga(c.object, i.props.attach), o = i.previousAttach;
    o === void 0 ? delete s[v] : s[v] = o;
  } else
    i.previousAttach == null || i.previousAttach(c.object, i.object);
  delete i.previousAttach;
}
const xc = [
  ...Ho,
  // Instance props
  "args",
  "dispose",
  "attach",
  "object",
  "onUpdate",
  // Behavior flags
  "dispose"
], io = /* @__PURE__ */ new Map();
function A0(c) {
  let i = io.get(c.constructor);
  try {
    i || (i = new c.constructor(), io.set(c.constructor, i));
  } catch {
  }
  return i;
}
function D0(c, i) {
  const s = {};
  for (const v in i)
    if (!xc.includes(v) && !Tt.equ(i[v], c.props[v])) {
      s[v] = i[v];
      for (const o in i)
        o.startsWith(`${v}-`) && (s[o] = i[o]);
    }
  for (const v in c.props) {
    if (xc.includes(v) || i.hasOwnProperty(v)) continue;
    const {
      root: o,
      key: E
    } = Ga(c.object, v);
    if (o.constructor && o.constructor.length === 0) {
      const j = A0(o);
      Tt.und(j) || (s[E] = j[E]);
    } else
      s[E] = 0;
  }
  return s;
}
const C0 = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"], j0 = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function ne(c, i) {
  var s;
  const v = c.__r3f, o = v && No(v).getState(), E = v?.eventCount;
  for (const T in i) {
    let y = i[T];
    if (xc.includes(T)) continue;
    if (v && j0.test(T)) {
      typeof y == "function" ? v.handlers[T] = y : delete v.handlers[T], v.eventCount = Object.keys(v.handlers).length;
      continue;
    }
    if (y === void 0) continue;
    let {
      root: H,
      key: _,
      target: z
    } = Ga(c, T);
    if (z instanceof I.Layers && y instanceof I.Layers)
      z.mask = y.mask;
    else if (z instanceof I.Color && b0(y))
      z.set(y);
    else if (z !== null && typeof z == "object" && typeof z.set == "function" && typeof z.copy == "function" && y != null && y.constructor && z.constructor === y.constructor)
      z.copy(y);
    else if (z !== null && typeof z == "object" && typeof z.set == "function" && Array.isArray(y))
      typeof z.fromArray == "function" ? z.fromArray(y) : z.set(...y);
    else if (z !== null && typeof z == "object" && typeof z.set == "function" && typeof y == "number")
      typeof z.setScalar == "function" ? z.setScalar(y) : z.set(y);
    else {
      var j;
      H[_] = y, o && !o.linear && C0.includes(_) && (j = H[_]) != null && j.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
      H[_].format === I.RGBAFormat && H[_].type === I.UnsignedByteType && (H[_].colorSpace = I.SRGBColorSpace);
    }
  }
  if (v != null && v.parent && o != null && o.internal && (s = v.object) != null && s.isObject3D && E !== v.eventCount) {
    const T = v.object, y = o.internal.interaction.indexOf(T);
    y > -1 && o.internal.interaction.splice(y, 1), v.eventCount && T.raycast !== null && o.internal.interaction.push(T);
  }
  return v && v.props.attach === void 0 && (v.object.isBufferGeometry ? v.props.attach = "geometry" : v.object.isMaterial && (v.props.attach = "material")), v && ca(v), c;
}
function ca(c) {
  var i;
  if (!c.parent) return;
  c.props.onUpdate == null || c.props.onUpdate(c.object);
  const s = (i = c.root) == null || i.getState == null ? void 0 : i.getState();
  s && s.internal.frames === 0 && s.invalidate();
}
function q0(c, i) {
  c.manual || (bo(c) ? (c.left = i.width / -2, c.right = i.width / 2, c.top = i.height / 2, c.bottom = i.height / -2) : c.aspect = i.width / i.height, c.updateProjectionMatrix());
}
const Wt = (c) => c?.isObject3D;
function Cu(c) {
  return (c.eventObject || c.object).uuid + "/" + c.index + c.instanceId;
}
function Oo(c, i, s, v) {
  const o = s.get(i);
  o && (s.delete(i), s.size === 0 && (c.delete(v), o.target.releasePointerCapture(v)));
}
function B0(c, i) {
  const {
    internal: s
  } = c.getState();
  s.interaction = s.interaction.filter((v) => v !== i), s.initialHits = s.initialHits.filter((v) => v !== i), s.hovered.forEach((v, o) => {
    (v.eventObject === i || v.object === i) && s.hovered.delete(o);
  }), s.capturedMap.forEach((v, o) => {
    Oo(s.capturedMap, i, v, o);
  });
}
function Y0(c) {
  function i(y) {
    const {
      internal: H
    } = c.getState(), _ = y.offsetX - H.initialClick[0], z = y.offsetY - H.initialClick[1];
    return Math.round(Math.sqrt(_ * _ + z * z));
  }
  function s(y) {
    return y.filter((H) => ["Move", "Over", "Enter", "Out", "Leave"].some((_) => {
      var z;
      return (z = H.__r3f) == null ? void 0 : z.handlers["onPointer" + _];
    }));
  }
  function v(y, H) {
    const _ = c.getState(), z = /* @__PURE__ */ new Set(), N = [], D = H ? H(_.internal.interaction) : _.internal.interaction;
    for (let g = 0; g < D.length; g++) {
      const b = ea(D[g]);
      b && (b.raycaster.camera = void 0);
    }
    _.previousRoot || _.events.compute == null || _.events.compute(y, _);
    function C(g) {
      const b = ea(g);
      if (!b || !b.events.enabled || b.raycaster.camera === null) return [];
      if (b.raycaster.camera === void 0) {
        var K;
        b.events.compute == null || b.events.compute(y, b, (K = b.previousRoot) == null ? void 0 : K.getState()), b.raycaster.camera === void 0 && (b.raycaster.camera = null);
      }
      return b.raycaster.camera ? b.raycaster.intersectObject(g, !0) : [];
    }
    let q = D.flatMap(C).sort((g, b) => {
      const K = ea(g.object), J = ea(b.object);
      return !K || !J ? g.distance - b.distance : J.events.priority - K.events.priority || g.distance - b.distance;
    }).filter((g) => {
      const b = Cu(g);
      return z.has(b) ? !1 : (z.add(b), !0);
    });
    _.events.filter && (q = _.events.filter(q, _));
    for (const g of q) {
      let b = g.object;
      for (; b; ) {
        var V;
        (V = b.__r3f) != null && V.eventCount && N.push({
          ...g,
          eventObject: b
        }), b = b.parent;
      }
    }
    if ("pointerId" in y && _.internal.capturedMap.has(y.pointerId))
      for (let g of _.internal.capturedMap.get(y.pointerId).values())
        z.has(Cu(g.intersection)) || N.push(g.intersection);
    return N;
  }
  function o(y, H, _, z) {
    if (y.length) {
      const N = {
        stopped: !1
      };
      for (const D of y) {
        let C = ea(D.object);
        if (C || D.object.traverseAncestors((q) => {
          const V = ea(q);
          if (V)
            return C = V, !1;
        }), C) {
          const {
            raycaster: q,
            pointer: V,
            camera: g,
            internal: b
          } = C, K = new I.Vector3(V.x, V.y, 0).unproject(g), J = (et) => {
            var P, $;
            return (P = ($ = b.capturedMap.get(et)) == null ? void 0 : $.has(D.eventObject)) != null ? P : !1;
          }, L = (et) => {
            const P = {
              intersection: D,
              target: H.target
            };
            b.capturedMap.has(et) ? b.capturedMap.get(et).set(D.eventObject, P) : b.capturedMap.set(et, /* @__PURE__ */ new Map([[D.eventObject, P]])), H.target.setPointerCapture(et);
          }, G = (et) => {
            const P = b.capturedMap.get(et);
            P && Oo(b.capturedMap, D.eventObject, P, et);
          };
          let ct = {};
          for (let et in H) {
            let P = H[et];
            typeof P != "function" && (ct[et] = P);
          }
          let ot = {
            ...D,
            ...ct,
            pointer: V,
            intersections: y,
            stopped: N.stopped,
            delta: _,
            unprojectedPoint: K,
            ray: q.ray,
            camera: g,
            // Hijack stopPropagation, which just sets a flag
            stopPropagation() {
              const et = "pointerId" in H && b.capturedMap.get(H.pointerId);
              if (
                // ...if this pointer hasn't been captured
                (!et || // ... or if the hit object is capturing the pointer
                et.has(D.eventObject)) && (ot.stopped = N.stopped = !0, b.hovered.size && Array.from(b.hovered.values()).find((P) => P.eventObject === D.eventObject))
              ) {
                const P = y.slice(0, y.indexOf(D));
                E([...P, D]);
              }
            },
            // there should be a distinction between target and currentTarget
            target: {
              hasPointerCapture: J,
              setPointerCapture: L,
              releasePointerCapture: G
            },
            currentTarget: {
              hasPointerCapture: J,
              setPointerCapture: L,
              releasePointerCapture: G
            },
            nativeEvent: H
          };
          if (z(ot), N.stopped === !0) break;
        }
      }
    }
    return y;
  }
  function E(y) {
    const {
      internal: H
    } = c.getState();
    for (const _ of H.hovered.values())
      if (!y.length || !y.find((z) => z.object === _.object && z.index === _.index && z.instanceId === _.instanceId)) {
        const N = _.eventObject.__r3f;
        if (H.hovered.delete(Cu(_)), N != null && N.eventCount) {
          const D = N.handlers, C = {
            ..._,
            intersections: y
          };
          D.onPointerOut == null || D.onPointerOut(C), D.onPointerLeave == null || D.onPointerLeave(C);
        }
      }
  }
  function j(y, H) {
    for (let _ = 0; _ < H.length; _++) {
      const z = H[_].__r3f;
      z == null || z.handlers.onPointerMissed == null || z.handlers.onPointerMissed(y);
    }
  }
  function T(y) {
    switch (y) {
      case "onPointerLeave":
      case "onPointerCancel":
        return () => E([]);
      case "onLostPointerCapture":
        return (H) => {
          const {
            internal: _
          } = c.getState();
          "pointerId" in H && _.capturedMap.has(H.pointerId) && requestAnimationFrame(() => {
            _.capturedMap.has(H.pointerId) && (_.capturedMap.delete(H.pointerId), E([]));
          });
        };
    }
    return function(_) {
      const {
        onPointerMissed: z,
        internal: N
      } = c.getState();
      N.lastEvent.current = _;
      const D = y === "onPointerMove", C = y === "onClick" || y === "onContextMenu" || y === "onDoubleClick", V = v(_, D ? s : void 0), g = C ? i(_) : 0;
      y === "onPointerDown" && (N.initialClick = [_.offsetX, _.offsetY], N.initialHits = V.map((K) => K.eventObject)), C && !V.length && g <= 2 && (j(_, N.interaction), z && z(_)), D && E(V);
      function b(K) {
        const J = K.eventObject, L = J.__r3f;
        if (!(L != null && L.eventCount)) return;
        const G = L.handlers;
        if (D) {
          if (G.onPointerOver || G.onPointerEnter || G.onPointerOut || G.onPointerLeave) {
            const ct = Cu(K), ot = N.hovered.get(ct);
            ot ? ot.stopped && K.stopPropagation() : (N.hovered.set(ct, K), G.onPointerOver == null || G.onPointerOver(K), G.onPointerEnter == null || G.onPointerEnter(K));
          }
          G.onPointerMove == null || G.onPointerMove(K);
        } else {
          const ct = G[y];
          ct ? (!C || N.initialHits.includes(J)) && (j(_, N.interaction.filter((ot) => !N.initialHits.includes(ot))), ct(K)) : C && N.initialHits.includes(J) && j(_, N.interaction.filter((ot) => !N.initialHits.includes(ot)));
        }
      }
      o(V, _, g, b);
    };
  }
  return {
    handlePointer: T
  };
}
const fo = (c) => !!(c != null && c.render), Uo = /* @__PURE__ */ st.createContext(null), Q0 = (c, i) => {
  const s = c0((T, y) => {
    const H = new I.Vector3(), _ = new I.Vector3(), z = new I.Vector3();
    function N(g = y().camera, b = _, K = y().size) {
      const {
        width: J,
        height: L,
        top: G,
        left: ct
      } = K, ot = J / L;
      b.isVector3 ? z.copy(b) : z.set(...b);
      const et = g.getWorldPosition(H).distanceTo(z);
      if (bo(g))
        return {
          width: J / g.zoom,
          height: L / g.zoom,
          top: G,
          left: ct,
          factor: 1,
          distance: et,
          aspect: ot
        };
      {
        const P = g.fov * Math.PI / 180, $ = 2 * Math.tan(P / 2) * et, Jt = $ * (J / L);
        return {
          width: Jt,
          height: $,
          top: G,
          left: ct,
          factor: J / Jt,
          distance: et,
          aspect: ot
        };
      }
    }
    let D;
    const C = (g) => T((b) => ({
      performance: {
        ...b.performance,
        current: g
      }
    })), q = new I.Vector2();
    return {
      set: T,
      get: y,
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
      invalidate: (g = 1) => c(y(), g),
      advance: (g, b) => i(g, b, y()),
      legacy: !1,
      linear: !1,
      flat: !1,
      controls: null,
      clock: new I.Clock(),
      pointer: q,
      mouse: q,
      frameloop: "always",
      onPointerMissed: void 0,
      performance: {
        current: 1,
        min: 0.5,
        max: 1,
        debounce: 200,
        regress: () => {
          const g = y();
          D && clearTimeout(D), g.performance.current !== g.performance.min && C(g.performance.min), D = setTimeout(() => C(y().performance.max), g.performance.debounce);
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
        getCurrentViewport: N
      },
      setEvents: (g) => T((b) => ({
        ...b,
        events: {
          ...b.events,
          ...g
        }
      })),
      setSize: (g, b, K = 0, J = 0) => {
        const L = y().camera, G = {
          width: g,
          height: b,
          top: K,
          left: J
        };
        T((ct) => ({
          size: G,
          viewport: {
            ...ct.viewport,
            ...N(L, _, G)
          }
        }));
      },
      setDpr: (g) => T((b) => {
        const K = _o(g);
        return {
          viewport: {
            ...b.viewport,
            dpr: K,
            initialDpr: b.viewport.initialDpr || K
          }
        };
      }),
      setFrameloop: (g = "always") => {
        const b = y().clock;
        b.stop(), b.elapsedTime = 0, g !== "never" && (b.start(), b.elapsedTime = 0), T(() => ({
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
        subscribe: (g, b, K) => {
          const J = y().internal;
          return J.priority = J.priority + (b > 0 ? 1 : 0), J.subscribers.push({
            ref: g,
            priority: b,
            store: K
          }), J.subscribers = J.subscribers.sort((L, G) => L.priority - G.priority), () => {
            const L = y().internal;
            L != null && L.subscribers && (L.priority = L.priority - (b > 0 ? 1 : 0), L.subscribers = L.subscribers.filter((G) => G.ref !== g));
          };
        }
      }
    };
  }), v = s.getState();
  let o = v.size, E = v.viewport.dpr, j = v.camera;
  return s.subscribe(() => {
    const {
      camera: T,
      size: y,
      viewport: H,
      gl: _,
      set: z
    } = s.getState();
    if (y.width !== o.width || y.height !== o.height || H.dpr !== E) {
      o = y, E = H.dpr, q0(T, y), H.dpr > 0 && _.setPixelRatio(H.dpr);
      const N = typeof HTMLCanvasElement < "u" && _.domElement instanceof HTMLCanvasElement;
      _.setSize(y.width, y.height, N);
    }
    T !== j && (j = T, z((N) => ({
      viewport: {
        ...N.viewport,
        ...N.viewport.getCurrentViewport(T)
      }
    })));
  }), s.subscribe((T) => c(T)), s;
};
function Ro() {
  const c = st.useContext(Uo);
  if (!c) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return c;
}
function G0(c = (s) => s, i) {
  return Ro()(c, i);
}
function V0(c, i = 0) {
  const s = Ro(), v = s.getState().internal.subscribe, o = go(c);
  return Va(() => v(o, i, s), [i, v, s]), null;
}
const so = /* @__PURE__ */ new WeakMap(), X0 = (c) => {
  var i;
  return typeof c == "function" && (c == null || (i = c.prototype) == null ? void 0 : i.constructor) === c;
};
function Ao(c, i) {
  return function(s, ...v) {
    let o;
    return X0(s) ? (o = so.get(s), o || (o = new s(), so.set(s, o))) : o = s, c && c(o), Promise.all(v.map((E) => new Promise((j, T) => o.load(E, (y) => {
      Wt(y?.scene) && Object.assign(y, O0(y.scene)), j(y);
    }, i, (y) => T(new Error(`Could not load ${E}: ${y?.message}`))))));
  };
}
function kc(c, i, s, v) {
  const o = Array.isArray(i) ? i : [i], E = y0(Ao(s, v), [c, ...o], {
    equal: Tt.equ
  });
  return Array.isArray(i) ? E : E[0];
}
kc.preload = function(c, i, s) {
  const v = Array.isArray(i) ? i : [i];
  return h0(Ao(s), [c, ...v]);
};
kc.clear = function(c, i) {
  const s = Array.isArray(i) ? i : [i];
  return S0([c, ...s]);
};
function Z0(c) {
  const i = v0(c);
  return i.injectIntoDevTools({
    bundleType: 0,
    rendererPackageName: "@react-three/fiber",
    version: st.version
  }), i;
}
const Do = 0, na = {}, K0 = /^three(?=[A-Z])/, Xu = (c) => `${c[0].toUpperCase()}${c.slice(1)}`;
let J0 = 0;
const x0 = (c) => typeof c == "function";
function L0(c) {
  if (x0(c)) {
    const i = `${J0++}`;
    return na[i] = c, i;
  } else
    Object.assign(na, c);
}
function Co(c, i) {
  const s = Xu(c), v = na[s];
  if (c !== "primitive" && !v) throw new Error(`R3F: ${s} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (c === "primitive" && !i.object) throw new Error("R3F: Primitives without 'object' are invalid!");
  if (i.args !== void 0 && !Array.isArray(i.args)) throw new Error("R3F: The args prop must be an array!");
}
function W0(c, i, s) {
  var v;
  return c = Xu(c) in na ? c : c.replace(K0, ""), Co(c, i), c === "primitive" && (v = i.object) != null && v.__r3f && delete i.object.__r3f, Yu(i.object, s, c, i);
}
function F0(c) {
  if (!c.isHidden) {
    var i;
    c.props.attach && (i = c.parent) != null && i.object ? Gu(c.parent, c) : Wt(c.object) && (c.object.visible = !1), c.isHidden = !0, ca(c);
  }
}
function jo(c) {
  if (c.isHidden) {
    var i;
    c.props.attach && (i = c.parent) != null && i.object ? Qu(c.parent, c) : Wt(c.object) && c.props.visible !== !1 && (c.object.visible = !0), c.isHidden = !1, ca(c);
  }
}
function ti(c, i, s) {
  const v = i.root.getState();
  if (!(!c.parent && c.object !== v.scene)) {
    if (!i.object) {
      var o, E;
      const j = na[Xu(i.type)];
      i.object = (o = i.props.object) != null ? o : new j(...(E = i.props.args) != null ? E : []), i.object.__r3f = i;
    }
    if (ne(i.object, i.props), i.props.attach)
      Qu(c, i);
    else if (Wt(i.object) && Wt(c.object)) {
      const j = c.object.children.indexOf(s?.object);
      if (s && j !== -1) {
        const T = c.object.children.indexOf(i.object);
        if (T !== -1) {
          c.object.children.splice(T, 1);
          const y = T < j ? j - 1 : j;
          c.object.children.splice(y, 0, i.object);
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
    for (const j of i.children) ti(i, j);
    ca(i);
  }
}
function Qc(c, i) {
  i && (i.parent = c, c.children.push(i), ti(c, i));
}
function oo(c, i, s) {
  if (!i || !s) return;
  i.parent = c;
  const v = c.children.indexOf(s);
  v !== -1 ? c.children.splice(v, 0, i) : c.children.push(i), ti(c, i, s);
}
function qo(c) {
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
function Lc(c, i, s) {
  if (!i) return;
  i.parent = null;
  const v = c.children.indexOf(i);
  v !== -1 && c.children.splice(v, 1), i.props.attach ? Gu(c, i) : Wt(i.object) && Wt(c.object) && (c.object.remove(i.object), B0(No(i), i.object));
  const o = i.props.dispose !== null && s !== !1;
  for (let E = i.children.length - 1; E >= 0; E--) {
    const j = i.children[E];
    Lc(i, j, o);
  }
  i.children.length = 0, delete i.object.__r3f, o && i.type !== "primitive" && i.object.type !== "Scene" && qo(i.object), s === void 0 && ca(i);
}
function P0(c, i) {
  for (const s of [c, c.alternate])
    if (s !== null)
      if (typeof s.ref == "function") {
        s.refCleanup == null || s.refCleanup();
        const v = s.ref(i);
        typeof v == "function" && (s.refCleanup = v);
      } else s.ref && (s.ref.current = i);
}
const Bu = [];
function w0() {
  for (const [s] of Bu) {
    const v = s.parent;
    if (v) {
      s.props.attach ? Gu(v, s) : Wt(s.object) && Wt(v.object) && v.object.remove(s.object);
      for (const o of s.children)
        o.props.attach ? Gu(s, o) : Wt(o.object) && Wt(s.object) && s.object.remove(o.object);
    }
    s.isHidden && jo(s), s.object.__r3f && delete s.object.__r3f, s.type !== "primitive" && qo(s.object);
  }
  for (const [s, v, o] of Bu) {
    s.props = v;
    const E = s.parent;
    if (E) {
      var c, i;
      const j = na[Xu(s.type)];
      s.object = (c = s.props.object) != null ? c : new j(...(i = s.props.args) != null ? i : []), s.object.__r3f = s, P0(o, s.object), ne(s.object, s.props), s.props.attach ? Qu(E, s) : Wt(s.object) && Wt(E.object) && E.object.add(s.object);
      for (const T of s.children)
        T.props.attach ? Qu(s, T) : Wt(T.object) && Wt(s.object) && s.object.add(T.object);
      ca(s);
    }
  }
  Bu.length = 0;
}
const Gc = () => {
}, mo = {};
let ju = Do;
const I0 = 0, $0 = 4, Wc = /* @__PURE__ */ Z0({
  isPrimaryRenderer: !1,
  warnsIfNotActing: !1,
  supportsMutation: !0,
  supportsPersistence: !1,
  supportsHydration: !1,
  createInstance: W0,
  removeChild: Lc,
  appendChild: Qc,
  appendInitialChild: Qc,
  insertBefore: oo,
  appendChildToContainer(c, i) {
    const s = c.getState().scene.__r3f;
    !i || !s || Qc(s, i);
  },
  removeChildFromContainer(c, i) {
    const s = c.getState().scene.__r3f;
    !i || !s || Lc(s, i);
  },
  insertInContainerBefore(c, i, s) {
    const v = c.getState().scene.__r3f;
    !i || !s || !v || oo(v, i, s);
  },
  getRootHostContext: () => mo,
  getChildHostContext: () => mo,
  commitUpdate(c, i, s, v, o) {
    var E, j, T;
    Co(i, v);
    let y = !1;
    if ((c.type === "primitive" && s.object !== v.object || ((E = v.args) == null ? void 0 : E.length) !== ((j = s.args) == null ? void 0 : j.length) || (T = v.args) != null && T.some((_, z) => {
      var N;
      return _ !== ((N = s.args) == null ? void 0 : N[z]);
    })) && (y = !0), y)
      Bu.push([c, {
        ...v
      }, o]);
    else {
      const _ = D0(c, v);
      Object.keys(_).length && (Object.assign(c.props, _), ne(c.object, _));
    }
    (o.sibling === null || (o.flags & $0) === I0) && w0();
  },
  finalizeInitialChildren: () => !1,
  commitMount() {
  },
  getPublicInstance: (c) => c?.object,
  prepareForCommit: () => null,
  preparePortalMount: (c) => Yu(c.getState().scene, c, "", {}),
  resetAfterCommit: () => {
  },
  shouldSetTextContent: () => !1,
  clearContainer: () => !1,
  hideInstance: F0,
  unhideInstance: jo,
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
    ju = c;
  },
  getCurrentUpdatePriority() {
    return ju;
  },
  resolveUpdatePriority() {
    var c;
    if (ju !== Do) return ju;
    switch (typeof window < "u" && ((c = window.event) == null ? void 0 : c.type)) {
      case "click":
      case "contextmenu":
      case "dblclick":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
        return qu.DiscreteEventPriority;
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerenter":
      case "pointerleave":
      case "wheel":
        return qu.ContinuousEventPriority;
      default:
        return qu.DefaultEventPriority;
    }
  },
  resetFormInstance() {
  }
}), Oe = /* @__PURE__ */ new Map(), aa = {
  objects: "shallow",
  strict: !1
};
function k0(c, i) {
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
function td(c) {
  const i = Oe.get(c), s = i?.fiber, v = i?.store;
  i && console.warn("R3F.createRoot should only be called once!");
  const o = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  ), E = v || Q0(wc, po), j = s || Wc.createContainer(
    E,
    // container
    qu.ConcurrentRoot,
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
  i || Oe.set(c, {
    fiber: j,
    store: E
  });
  let T, y, H = !1, _ = null;
  return {
    async configure(z = {}) {
      let N;
      _ = new Promise((tt) => N = tt);
      let {
        gl: D,
        size: C,
        scene: q,
        events: V,
        onCreated: g,
        shadows: b = !1,
        linear: K = !1,
        flat: J = !1,
        legacy: L = !1,
        orthographic: G = !1,
        frameloop: ct = "always",
        dpr: ot = [1, 2],
        performance: et,
        raycaster: P,
        camera: $,
        onPointerMissed: Jt
      } = z, k = E.getState(), pt = k.gl;
      if (!k.gl) {
        const tt = {
          canvas: c,
          powerPreference: "high-performance",
          antialias: !0,
          alpha: !0
        }, it = typeof D == "function" ? await D(tt) : D;
        fo(it) ? pt = it : pt = new I.WebGLRenderer({
          ...tt,
          ...D
        }), k.set({
          gl: pt
        });
      }
      let bt = k.raycaster;
      bt || k.set({
        raycaster: bt = new I.Raycaster()
      });
      const {
        params: S,
        ...O
      } = P || {};
      if (Tt.equ(O, bt, aa) || ne(bt, {
        ...O
      }), Tt.equ(S, bt.params, aa) || ne(bt, {
        params: {
          ...bt.params,
          ...S
        }
      }), !k.camera || k.camera === y && !Tt.equ(y, $, aa)) {
        y = $;
        const tt = $?.isCamera, it = tt ? $ : G ? new I.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new I.PerspectiveCamera(75, 0, 0.1, 1e3);
        tt || (it.position.z = 5, $ && (ne(it, $), it.manual || ("aspect" in $ || "left" in $ || "right" in $ || "bottom" in $ || "top" in $) && (it.manual = !0, it.updateProjectionMatrix())), !k.camera && !($ != null && $.rotation) && it.lookAt(0, 0, 0)), k.set({
          camera: it
        }), bt.camera = it;
      }
      if (!k.scene) {
        let tt;
        q != null && q.isScene ? (tt = q, Yu(tt, E, "", {})) : (tt = new I.Scene(), Yu(tt, E, "", {}), q && ne(tt, q)), k.set({
          scene: tt
        });
      }
      V && !k.events.handlers && k.set({
        events: V(E)
      });
      const A = k0(c, C);
      if (Tt.equ(A, k.size, aa) || k.setSize(A.width, A.height, A.top, A.left), ot && k.viewport.dpr !== _o(ot) && k.setDpr(ot), k.frameloop !== ct && k.setFrameloop(ct), k.onPointerMissed || k.set({
        onPointerMissed: Jt
      }), et && !Tt.equ(et, k.performance, aa) && k.set((tt) => ({
        performance: {
          ...tt.performance,
          ...et
        }
      })), !k.xr) {
        var Q;
        const tt = (at, Ut) => {
          const Ue = E.getState();
          Ue.frameloop !== "never" && po(at, !0, Ue, Ut);
        }, it = () => {
          const at = E.getState();
          at.gl.xr.enabled = at.gl.xr.isPresenting, at.gl.xr.setAnimationLoop(at.gl.xr.isPresenting ? tt : null), at.gl.xr.isPresenting || wc(at);
        }, Mt = {
          connect() {
            const at = E.getState().gl;
            at.xr.addEventListener("sessionstart", it), at.xr.addEventListener("sessionend", it);
          },
          disconnect() {
            const at = E.getState().gl;
            at.xr.removeEventListener("sessionstart", it), at.xr.removeEventListener("sessionend", it);
          }
        };
        typeof ((Q = pt.xr) == null ? void 0 : Q.addEventListener) == "function" && Mt.connect(), k.set({
          xr: Mt
        });
      }
      if (pt.shadowMap) {
        const tt = pt.shadowMap.enabled, it = pt.shadowMap.type;
        if (pt.shadowMap.enabled = !!b, Tt.boo(b))
          pt.shadowMap.type = I.PCFSoftShadowMap;
        else if (Tt.str(b)) {
          var x;
          const Mt = {
            basic: I.BasicShadowMap,
            percentage: I.PCFShadowMap,
            soft: I.PCFSoftShadowMap,
            variance: I.VSMShadowMap
          };
          pt.shadowMap.type = (x = Mt[b]) != null ? x : I.PCFSoftShadowMap;
        } else Tt.obj(b) && Object.assign(pt.shadowMap, b);
        (tt !== pt.shadowMap.enabled || it !== pt.shadowMap.type) && (pt.shadowMap.needsUpdate = !0);
      }
      return I.ColorManagement.enabled = !L, H || (pt.outputColorSpace = K ? I.LinearSRGBColorSpace : I.SRGBColorSpace, pt.toneMapping = J ? I.NoToneMapping : I.ACESFilmicToneMapping), k.legacy !== L && k.set(() => ({
        legacy: L
      })), k.linear !== K && k.set(() => ({
        linear: K
      })), k.flat !== J && k.set(() => ({
        flat: J
      })), D && !Tt.fun(D) && !fo(D) && !Tt.equ(D, pt, aa) && ne(pt, D), T = g, H = !0, N(), this;
    },
    render(z) {
      return !H && !_ && this.configure(), _.then(() => {
        Wc.updateContainer(/* @__PURE__ */ Z(ld, {
          store: E,
          children: z,
          onCreated: T,
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
function ld({
  store: c,
  children: i,
  onCreated: s,
  rootElement: v
}) {
  return Va(() => {
    const o = c.getState();
    o.set((E) => ({
      internal: {
        ...E.internal,
        active: !0
      }
    })), s && s(o), c.getState().events.connected || o.events.connect == null || o.events.connect(v);
  }, []), /* @__PURE__ */ Z(Uo.Provider, {
    value: c,
    children: i
  });
}
function Bo(c, i) {
  const s = Oe.get(c), v = s?.fiber;
  if (v) {
    const o = s?.store.getState();
    o && (o.internal.active = !1), Wc.updateContainer(null, v, null, () => {
      o && setTimeout(() => {
        try {
          var E, j, T, y;
          o.events.disconnect == null || o.events.disconnect(), (E = o.gl) == null || (j = E.renderLists) == null || j.dispose == null || j.dispose(), (T = o.gl) == null || T.forceContextLoss == null || T.forceContextLoss(), (y = o.gl) != null && y.xr && o.xr.disconnect(), U0(o.scene), Oe.delete(c);
        } catch {
        }
      }, 500);
    });
  }
}
const ed = /* @__PURE__ */ new Set(), ad = /* @__PURE__ */ new Set(), ud = /* @__PURE__ */ new Set();
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
      return Vc(ed, i);
    case "after":
      return Vc(ad, i);
    case "tail":
      return Vc(ud, i);
  }
}
let Xc, Zc;
function Fc(c, i, s) {
  let v = i.clock.getDelta();
  i.frameloop === "never" && typeof c == "number" && (v = c - i.clock.elapsedTime, i.clock.oldTime = i.clock.elapsedTime, i.clock.elapsedTime = c), Xc = i.internal.subscribers;
  for (let o = 0; o < Xc.length; o++)
    Zc = Xc[o], Zc.ref.current(Zc.store.getState(), v, s);
  return !i.internal.priority && i.gl.render && i.gl.render(i.scene, i.camera), i.internal.frames = Math.max(0, i.internal.frames - 1), i.frameloop === "always" ? 1 : i.internal.frames;
}
let Vu = !1, Pc = !1, Kc, vo, ua;
function Yo(c) {
  vo = requestAnimationFrame(Yo), Vu = !0, Kc = 0, Qa("before", c), Pc = !0;
  for (const s of Oe.values()) {
    var i;
    ua = s.store.getState(), ua.internal.active && (ua.frameloop === "always" || ua.internal.frames > 0) && !((i = ua.gl.xr) != null && i.isPresenting) && (Kc += Fc(c, ua));
  }
  if (Pc = !1, Qa("after", c), Kc === 0)
    return Qa("tail", c), Vu = !1, cancelAnimationFrame(vo);
}
function wc(c, i = 1) {
  var s;
  if (!c) return Oe.forEach((v) => wc(v.store.getState(), i));
  (s = c.gl.xr) != null && s.isPresenting || !c.internal.active || c.frameloop === "never" || (i > 1 ? c.internal.frames = Math.min(60, c.internal.frames + i) : Pc ? c.internal.frames = 2 : c.internal.frames = 1, Vu || (Vu = !0, requestAnimationFrame(Yo)));
}
function po(c, i = !0, s, v) {
  if (i && Qa("before", c), s) Fc(c, s, v);
  else for (const o of Oe.values()) Fc(c, o.store.getState());
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
function nd(c) {
  const {
    handlePointer: i
  } = Y0(c);
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
          const j = o.handlers[E], [T, y] = Jc[E];
          s.addEventListener(T, j, {
            passive: y
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
function cd({ debounce: c, scroll: i, polyfill: s, offsetSize: v } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const o = s || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!o) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [E, j] = ge({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), T = Js({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: E, orientationHandler: null }), y = c ? typeof c == "number" ? c : c.scroll : null, H = c ? typeof c == "number" ? c : c.resize : null, _ = Js(!1);
  El(() => (_.current = !0, () => void (_.current = !1)));
  const [z, N, D] = yo(() => {
    const g = () => {
      if (!T.current.element) return;
      const { left: b, top: K, width: J, height: L, bottom: G, right: ct, x: ot, y: et } = T.current.element.getBoundingClientRect(), P = { left: b, top: K, width: J, height: L, bottom: G, right: ct, x: ot, y: et };
      T.current.element instanceof HTMLElement && v && (P.height = T.current.element.offsetHeight, P.width = T.current.element.offsetWidth), Object.freeze(P), _.current && !od(T.current.lastBounds, P) && j(T.current.lastBounds = P);
    };
    return [g, H ? ro(g, H) : g, y ? ro(g, y) : g];
  }, [j, v, y, H]);
  function C() {
    T.current.scrollContainers && (T.current.scrollContainers.forEach((g) => g.removeEventListener("scroll", D, !0)), T.current.scrollContainers = null), T.current.resizeObserver && (T.current.resizeObserver.disconnect(), T.current.resizeObserver = null), T.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", T.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", T.current.orientationHandler));
  }
  function q() {
    T.current.element && (T.current.resizeObserver = new o(D), T.current.resizeObserver.observe(T.current.element), i && T.current.scrollContainers && T.current.scrollContainers.forEach((g) => g.addEventListener("scroll", D, { capture: !0, passive: !0 })), T.current.orientationHandler = () => {
      D();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", T.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", T.current.orientationHandler));
  }
  const V = (g) => {
    !g || g === T.current.element || (C(), T.current.element = g, T.current.scrollContainers = Qo(g), q());
  };
  return fd(D, !!i), id(N), El(() => {
    C(), q();
  }, [i, D, N]), El(() => C, []), [V, E, z];
}
function id(c) {
  El(() => {
    const i = c;
    return window.addEventListener("resize", i), () => void window.removeEventListener("resize", i);
  }, [c]);
}
function fd(c, i) {
  El(() => {
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
const sd = ["x", "y", "top", "bottom", "left", "right", "width", "height"], od = (c, i) => sd.every((s) => c[s] === i[s]);
function md({
  ref: c,
  children: i,
  fallback: s,
  resize: v,
  style: o,
  gl: E,
  events: j = nd,
  eventSource: T,
  eventPrefix: y,
  shadows: H,
  linear: _,
  flat: z,
  legacy: N,
  orthographic: D,
  frameloop: C,
  dpr: q,
  performance: V,
  raycaster: g,
  camera: b,
  scene: K,
  onPointerMissed: J,
  onCreated: L,
  ...G
}) {
  st.useMemo(() => L0(I), []);
  const ct = g0(), [ot, et] = cd({
    scroll: !0,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...v
  }), P = st.useRef(null), $ = st.useRef(null);
  st.useImperativeHandle(c, () => P.current);
  const Jt = go(J), [k, pt] = st.useState(!1), [bt, S] = st.useState(!1);
  if (k) throw k;
  if (bt) throw bt;
  const O = st.useRef(null);
  return Va(() => {
    const Q = P.current;
    if (et.width > 0 && et.height > 0 && Q) {
      O.current || (O.current = td(Q));
      async function x() {
        await O.current.configure({
          gl: E,
          scene: K,
          events: j,
          shadows: H,
          linear: _,
          flat: z,
          legacy: N,
          orthographic: D,
          frameloop: C,
          dpr: q,
          performance: V,
          raycaster: g,
          camera: b,
          size: et,
          // Pass mutable reference to onPointerMissed so it's free to update
          onPointerMissed: (...tt) => Jt.current == null ? void 0 : Jt.current(...tt),
          onCreated: (tt) => {
            tt.events.connect == null || tt.events.connect(T ? N0(T) ? T.current : T : $.current), y && tt.setEvents({
              compute: (it, Mt) => {
                const at = it[y + "X"], Ut = it[y + "Y"];
                Mt.pointer.set(at / Mt.size.width * 2 - 1, -(Ut / Mt.size.height) * 2 + 1), Mt.raycaster.setFromCamera(Mt.pointer, Mt.camera);
              }
            }), L?.(tt);
          }
        }), O.current.render(/* @__PURE__ */ Z(ct, {
          children: /* @__PURE__ */ Z(H0, {
            set: S,
            children: /* @__PURE__ */ Z(st.Suspense, {
              fallback: /* @__PURE__ */ Z(_0, {
                set: pt
              }),
              children: i ?? null
            })
          })
        }));
      }
      x();
    }
  }), st.useEffect(() => {
    const Q = P.current;
    if (Q) return () => Bo(Q);
  }, []), /* @__PURE__ */ Z("div", {
    ref: $,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: T ? "none" : "auto",
      ...o
    },
    ...G,
    children: /* @__PURE__ */ Z("div", {
      ref: ot,
      style: {
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ Z("canvas", {
        ref: P,
        style: {
          display: "block"
        },
        children: s
      })
    })
  });
}
function vd(c) {
  return /* @__PURE__ */ Z(To, {
    children: /* @__PURE__ */ Z(md, {
      ...c
    })
  });
}
function dd() {
  return /* @__PURE__ */ Ct("group", { children: [
    /* @__PURE__ */ Ct("mesh", { rotation: [0, 0, Math.PI / 2], children: [
      /* @__PURE__ */ Z("cylinderGeometry", { args: [3e-3, 3e-3, 0.3, 32] }),
      /* @__PURE__ */ Z("meshStandardMaterial", { color: "red" })
    ] }),
    /* @__PURE__ */ Ct("mesh", { position: [0.15, 0, 0], rotation: [0, 0, -Math.PI / 2], children: [
      /* @__PURE__ */ Z("coneGeometry", { args: [9e-3, 0.03, 32] }),
      /* @__PURE__ */ Z("meshStandardMaterial", { color: "red" })
    ] })
  ] });
}
function pd({ spinRate: c, playing: i, spinAxis: s, currentSeamLat: v, currentSeamLon: o, useSeamOrientation: E }) {
  const j = kc(Wv, "/models/baseball.gltf"), T = He.useRef(), y = He.useRef(), H = He.useRef(), { invalidate: _ } = G0();
  return El(() => {
    j.scene && j.scene.rotation.set(Math.PI / 2, 3 * Math.PI / 2, 0);
  }, [j]), El(() => {
    if (y.current) {
      if (y.current.quaternion.identity(), E && v != null && o != null && !isNaN(v) && !isNaN(o)) {
        const z = I.MathUtils.degToRad(v), N = I.MathUtils.degToRad(o), D = Math.cos(z) * Math.sin(N), C = Math.sin(z), q = Math.cos(z) * Math.cos(N), V = new I.Vector3(-D, C, q).normalize(), g = new I.Vector3(1, 0, 0), b = new I.Quaternion().setFromUnitVectors(
          g,
          V
        );
        y.current.quaternion.copy(b);
      }
      _();
    }
  }, [E, v, o, _]), El(() => {
    if (H.current && s) {
      const z = new I.Vector3(1, 0, 0), N = new I.Quaternion().setFromUnitVectors(
        z,
        s.clone().normalize()
      );
      H.current.quaternion.copy(N), _();
    }
  }, [s, _]), V0((z, N) => {
    if (i && T.current) {
      const C = c * 2 * Math.PI / 60 * N, q = new I.Vector3(1, 0, 0), V = new I.Quaternion();
      V.setFromAxisAngle(q, C), T.current.quaternion.multiplyQuaternions(V, T.current.quaternion);
    }
  }), /* @__PURE__ */ Z("group", { children: /* @__PURE__ */ Ct("group", { ref: H, children: [
    /* @__PURE__ */ Z(dd, {}),
    /* @__PURE__ */ Z("group", { ref: T, children: /* @__PURE__ */ Z("group", { ref: y, children: /* @__PURE__ */ Z("primitive", { object: j.scene, scale: 2 }) }) })
  ] }) });
}
function rd() {
  const [c, i] = ge([]), [s, v] = ge(null), [o, E] = ge(!0), [j, T] = ge(new I.Vector3(1, 0, 0)), [y, H] = ge(0), [_, z] = ge(0);
  El(() => {
    fetch("/gilbert_augEighth.json").then((C) => C.json()).then((C) => {
      i(C || []), C && C.length > 0 && v(C[0].PitchUID);
    });
  }, []), El(() => {
    const C = (q) => {
      if (q.data?.type === "pitch_uid")
        console.log("Pitch UID changed:", q.data.value), v(q.data.value);
      else if (q.data?.type === "slider_update") {
        if ("spinVectorX" in q.data && "spinVectorY" in q.data && "spinVectorZ" in q.data) {
          const V = new I.Vector3(
            q.data.spinVectorX,
            q.data.spinVectorY,
            q.data.spinVectorZ
          ).normalize();
          console.log("Received spin vector - Tilt:", q.data.spinTilt, "Gyro:", q.data.spinGyro, "Vector:", V), T(V);
        }
        "ballX" in q.data && z(q.data.ballX), "ballY" in q.data && H(q.data.ballY);
      } else q.data?.type === "play_toggle" && E(!!q.data.value);
    };
    return window.addEventListener("message", C), () => window.removeEventListener("message", C);
  }, []);
  const N = yo(() => !s || !c.length ? null : c.find((C) => C.PitchUID === s) || null, [s, c]);
  return El(() => {
    if (N) {
      const C = new I.Vector3(
        N.spin_backspin,
        N.spin_sidespin,
        -N.spin_gyrospin
      ).normalize();
      T(C), H(N.seam_orientation_lat || 0), z(N.seam_orientation_lon || 0);
    }
  }, [N]), /* @__PURE__ */ Z("div", { style: { width: "100vw", height: "100vh", position: "relative" }, children: /* @__PURE__ */ Ct(vd, { camera: { position: [0, 0, 0.55], fov: 50 }, children: [
    /* @__PURE__ */ Z("ambientLight", { intensity: 1 }),
    /* @__PURE__ */ Z("directionalLight", { position: [0, 0, 0.3], intensity: 1 }),
    /* @__PURE__ */ Ct("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -1.14, -4], children: [
      /* @__PURE__ */ Z("planeGeometry", { args: [20, 16] }),
      /* @__PURE__ */ Z("meshPhongMaterial", { color: "#489147" })
    ] }),
    /* @__PURE__ */ Ct("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -1.139, -5.76], children: [
      /* @__PURE__ */ Z("circleGeometry", { args: [1, 64] }),
      /* @__PURE__ */ Z("meshPhongMaterial", { color: "#DEB887" })
    ] }),
    /* @__PURE__ */ Ct("mesh", { rotation: [-Math.PI / 2, 0, Math.PI], position: [0, -1.138, -5.6], children: [
      /* @__PURE__ */ Z("shapeGeometry", { args: [
        (() => {
          const C = new I.Shape();
          return C.moveTo(-0.2, 0.2), C.lineTo(0.2, 0.2), C.lineTo(0.2, -0.24), C.lineTo(0, -0.56), C.lineTo(-0.2, -0.24), C.lineTo(-0.2, 0.2), C;
        })()
      ] }),
      /* @__PURE__ */ Z("meshBasicMaterial", { color: "white" })
    ] }),
    /* @__PURE__ */ Ct("mesh", { rotation: [-Math.PI / 2, 0, -Math.PI / 4], position: [-3, -1.049, -2.3], children: [
      /* @__PURE__ */ Z("planeGeometry", { args: [0.02, 7] }),
      /* @__PURE__ */ Z("meshBasicMaterial", { color: "white" })
    ] }),
    /* @__PURE__ */ Ct("mesh", { rotation: [-Math.PI / 2, 0, Math.PI / 4], position: [3, -1.049, -2.3], children: [
      /* @__PURE__ */ Z("planeGeometry", { args: [0.02, 7] }),
      /* @__PURE__ */ Z("meshBasicMaterial", { color: "white" })
    ] }),
    /* @__PURE__ */ Ct("group", { position: [0.45, -1.137, -5.6], children: [
      /* @__PURE__ */ Ct("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0.4], children: [
        /* @__PURE__ */ Z("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ Z("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ Ct("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, -0.4], children: [
        /* @__PURE__ */ Z("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ Z("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ Ct("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [-0.15, 0, 0], children: [
        /* @__PURE__ */ Z("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ Z("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ Ct("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0.15, 0, 0], children: [
        /* @__PURE__ */ Z("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ Z("meshBasicMaterial", { color: "white" })
      ] })
    ] }),
    /* @__PURE__ */ Ct("group", { position: [-0.45, -1.137, -5.6], children: [
      /* @__PURE__ */ Ct("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0.4], children: [
        /* @__PURE__ */ Z("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ Z("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ Ct("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, -0.4], children: [
        /* @__PURE__ */ Z("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ Z("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ Ct("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [-0.15, 0, 0], children: [
        /* @__PURE__ */ Z("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ Z("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ Ct("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0.15, 0, 0], children: [
        /* @__PURE__ */ Z("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ Z("meshBasicMaterial", { color: "white" })
      ] })
    ] }),
    /* @__PURE__ */ Z(
      pd,
      {
        spinRate: 50,
        playing: o,
        spinAxis: j,
        currentSeamLat: y,
        currentSeamLon: _,
        useSeamOrientation: !0
      }
    )
  ] }) });
}
const yd = document.getElementById("root"), hd = Lv(yd);
hd.render(/* @__PURE__ */ Z(rd, {}));
