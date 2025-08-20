import { jsx as ht, jsxs as Qa } from "https://esm.sh/react/jsx-runtime";
import * as ft from "https://esm.sh/react";
import _e, { useState as Me, useRef as Js, useEffect as Sl, useMemo as ro } from "https://esm.sh/react";
import { createRoot as Lm } from "https://esm.sh/react-dom/client";
import * as W from "https://esm.sh/three";
import { GLTFLoader as Wm } from "https://esm.sh/three/examples/jsm/loaders/GLTFLoader";
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
function Fm() {
  return xs || (xs = 1, Ql.ConcurrentRoot = 1, Ql.ContinuousEventPriority = 8, Ql.DefaultEventPriority = 32, Ql.DiscreteEventPriority = 2, Ql.IdleEventPriority = 268435456, Ql.LegacyRoot = 0, Ql.NoEventPriority = 0), Ql;
}
var Ls;
function Pm() {
  return Ls || (Ls = 1, Hc.exports = Fm()), Hc.exports;
}
var qu = Pm(), Oc = { exports: {} }, Uc = {}, Rc = { exports: {} }, Ac = {};
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
function wm() {
  if (Ws) return Ac;
  Ws = 1;
  var c = _e;
  function i(z, g) {
    return z === g && (z !== 0 || 1 / z === 1 / g) || z !== z && g !== g;
  }
  var s = typeof Object.is == "function" ? Object.is : i, m = c.useState, o = c.useEffect, E = c.useLayoutEffect, C = c.useDebugValue;
  function M(z, g) {
    var R = g(), Q = m({ inst: { value: R, getSnapshot: g } }), V = Q[0].inst, B = Q[1];
    return E(
      function() {
        V.value = R, V.getSnapshot = g, r(V) && B({ inst: V });
      },
      [z, R, g]
    ), o(
      function() {
        return r(V) && B({ inst: V }), z(function() {
          r(V) && B({ inst: V });
        });
      },
      [z]
    ), C(R), R;
  }
  function r(z) {
    var g = z.getSnapshot;
    z = z.value;
    try {
      var R = g();
      return !s(z, R);
    } catch {
      return !0;
    }
  }
  function H(z, g) {
    return g();
  }
  var _ = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? H : M;
  return Ac.useSyncExternalStore = c.useSyncExternalStore !== void 0 ? c.useSyncExternalStore : _, Ac;
}
var Fs;
function Im() {
  return Fs || (Fs = 1, Rc.exports = wm()), Rc.exports;
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
function $m() {
  if (Ps) return Uc;
  Ps = 1;
  var c = _e, i = Im();
  function s(H, _) {
    return H === _ && (H !== 0 || 1 / H === 1 / _) || H !== H && _ !== _;
  }
  var m = typeof Object.is == "function" ? Object.is : s, o = i.useSyncExternalStore, E = c.useRef, C = c.useEffect, M = c.useMemo, r = c.useDebugValue;
  return Uc.useSyncExternalStoreWithSelector = function(H, _, z, g, R) {
    var Q = E(null);
    if (Q.current === null) {
      var V = { hasValue: !1, value: null };
      Q.current = V;
    } else V = Q.current;
    Q = M(
      function() {
        function T(G) {
          if (!N) {
            if (N = !0, Z = G, G = g(G), R !== void 0 && V.hasValue) {
              var nt = V.value;
              if (R(nt, G))
                return K = nt;
            }
            return K = G;
          }
          if (nt = K, m(Z, G)) return nt;
          var st = g(G);
          return R !== void 0 && R(nt, st) ? (Z = G, nt) : (Z = G, K = st);
        }
        var N = !1, Z, K, x = z === void 0 ? null : z;
        return [
          function() {
            return T(_());
          },
          x === null ? void 0 : function() {
            return T(x());
          }
        ];
      },
      [_, z, g, R]
    );
    var B = o(H, Q[0], Q[1]);
    return C(
      function() {
        V.hasValue = !0, V.value = B;
      },
      [B]
    ), r(B), B;
  }, Uc;
}
var ws;
function km() {
  return ws || (ws = 1, Oc.exports = $m()), Oc.exports;
}
var td = km();
const ld = /* @__PURE__ */ ho(td), Is = (c) => {
  let i;
  const s = /* @__PURE__ */ new Set(), m = (H, _) => {
    const z = typeof H == "function" ? H(i) : H;
    if (!Object.is(z, i)) {
      const g = i;
      i = _ ?? (typeof z != "object" || z === null) ? z : Object.assign({}, i, z), s.forEach((R) => R(i, g));
    }
  }, o = () => i, M = { setState: m, getState: o, getInitialState: () => r, subscribe: (H) => (s.add(H), () => s.delete(H)) }, r = i = c(m, o, M);
  return M;
}, ed = (c) => c ? Is(c) : Is, { useSyncExternalStoreWithSelector: ad } = ld, ud = (c) => c;
function nd(c, i = ud, s) {
  const m = ad(
    c.subscribe,
    c.getState,
    c.getInitialState,
    i,
    s
  );
  return _e.useDebugValue(m), m;
}
const $s = (c, i) => {
  const s = ed(c), m = (o, E = i) => nd(s, o, E);
  return Object.assign(m, s), m;
}, cd = (c, i) => c ? $s(c, i) : $s;
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
function id() {
  return ks || (ks = 1, function(c) {
    function i(S, O) {
      var D = S.length;
      S.push(O);
      t: for (; 0 < D; ) {
        var Y = D - 1 >>> 1, J = S[Y];
        if (0 < o(J, O))
          S[Y] = O, S[D] = J, D = Y;
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
        t: for (var Y = 0, J = S.length, k = J >>> 1; Y < k; ) {
          var ct = 2 * (Y + 1) - 1, Nt = S[ct], et = ct + 1, Ut = S[et];
          if (0 > o(Nt, D))
            et < J && 0 > o(Ut, Nt) ? (S[Y] = Ut, S[et] = D, Y = et) : (S[Y] = Nt, S[ct] = D, Y = ct);
          else if (et < J && 0 > o(Ut, D))
            S[Y] = Ut, S[et] = D, Y = et;
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
      var C = Date, M = C.now();
      c.unstable_now = function() {
        return C.now() - M;
      };
    }
    var r = [], H = [], _ = 1, z = null, g = 3, R = !1, Q = !1, V = !1, B = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    function Z(S) {
      for (var O = s(H); O !== null; ) {
        if (O.callback === null) m(H);
        else if (O.startTime <= S)
          m(H), O.sortIndex = O.expirationTime, i(r, O);
        else break;
        O = s(H);
      }
    }
    function K(S) {
      if (V = !1, Z(S), !Q)
        if (s(r) !== null)
          Q = !0, dt();
        else {
          var O = s(H);
          O !== null && Mt(K, O.startTime - S);
        }
    }
    var x = !1, G = -1, nt = 5, st = -1;
    function lt() {
      return !(c.unstable_now() - st < nt);
    }
    function P() {
      if (x) {
        var S = c.unstable_now();
        st = S;
        var O = !0;
        try {
          t: {
            Q = !1, V && (V = !1, T(G), G = -1), R = !0;
            var D = g;
            try {
              l: {
                for (Z(S), z = s(r); z !== null && !(z.expirationTime > S && lt()); ) {
                  var Y = z.callback;
                  if (typeof Y == "function") {
                    z.callback = null, g = z.priorityLevel;
                    var J = Y(
                      z.expirationTime <= S
                    );
                    if (S = c.unstable_now(), typeof J == "function") {
                      z.callback = J, Z(S), O = !0;
                      break l;
                    }
                    z === s(r) && m(r), Z(S);
                  } else m(r);
                  z = s(r);
                }
                if (z !== null) O = !0;
                else {
                  var k = s(H);
                  k !== null && Mt(
                    K,
                    k.startTime - S
                  ), O = !1;
                }
              }
              break t;
            } finally {
              z = null, g = D, R = !1;
            }
            O = void 0;
          }
        } finally {
          O ? I() : x = !1;
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
        B(P, 0);
      };
    function dt() {
      x || (x = !0, I());
    }
    function Mt(S, O) {
      G = B(function() {
        S(c.unstable_now());
      }, O);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, c.unstable_continueExecution = function() {
      Q || R || (Q = !0, dt());
    }, c.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : nt = 0 < S ? Math.floor(1e3 / S) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, c.unstable_getFirstCallbackNode = function() {
      return s(r);
    }, c.unstable_next = function(S) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = g;
      }
      var D = g;
      g = O;
      try {
        return S();
      } finally {
        g = D;
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
      var D = g;
      g = S;
      try {
        return O();
      } finally {
        g = D;
      }
    }, c.unstable_scheduleCallback = function(S, O, D) {
      var Y = c.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? Y + D : Y) : D = Y, S) {
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
      return J = D + J, S = {
        id: _++,
        callback: O,
        priorityLevel: S,
        startTime: D,
        expirationTime: J,
        sortIndex: -1
      }, D > Y ? (S.sortIndex = D, i(H, S), s(r) === null && S === s(H) && (V ? (T(G), G = -1) : V = !0, Mt(K, D - Y))) : (S.sortIndex = J, i(r, S), Q || R || (Q = !0, dt())), S;
    }, c.unstable_shouldYield = lt, c.unstable_wrapCallback = function(S) {
      var O = g;
      return function() {
        var D = g;
        g = O;
        try {
          return S.apply(this, arguments);
        } finally {
          g = D;
        }
      };
    };
  }(qc)), qc;
}
var to;
function fd() {
  return to || (to = 1, jc.exports = id()), jc.exports;
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
function sd() {
  return lo || (lo = 1, function(c) {
    c.exports = function(i) {
      function s(t, l, e, a) {
        return new sv(t, l, e, a);
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
        return t === null || typeof t != "object" ? null : (t = os && t[os] || t["@@iterator"], typeof t == "function" ? t : null);
      }
      function C(t) {
        if (t == null) return null;
        if (typeof t == "function")
          return t.$$typeof === yv ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
          case Be:
            return "Fragment";
          case qe:
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
            case Fl:
              return (t.displayName || "Context") + ".Provider";
            case fs:
              return (t._context.displayName || "Context") + ".Consumer";
            case Pn:
              var l = t.render;
              return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case $n:
              return l = t.displayName || null, l !== null ? l : C(t.type) || "Memo";
            case Pl:
              l = t._payload, t = t._init;
              try {
                return C(t(l));
              } catch {
              }
          }
        return null;
      }
      function M(t) {
        if (kn === void 0)
          try {
            throw Error();
          } catch (e) {
            var l = e.stack.trim().match(/\n( *(at )?)/);
            kn = l && l[1] || "", vs = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + kn + t + vs;
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
                  var j = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(j.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(j, []);
                    } catch (w) {
                      var q = w;
                    }
                    Reflect.construct(t, [], j);
                  } else {
                    try {
                      j.call();
                    } catch (w) {
                      q = w;
                    }
                    t.call(j.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (w) {
                    q = w;
                  }
                  (j = t()) && typeof j.catch == "function" && j.catch(function() {
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
          var n = a.DetermineComponentFrameRoot(), f = n[0], v = n[1];
          if (f && v) {
            var p = f.split(`
`), b = v.split(`
`);
            for (u = a = 0; a < p.length && !p[a].includes("DetermineComponentFrameRoot"); )
              a++;
            for (; u < b.length && !b[u].includes(
              "DetermineComponentFrameRoot"
            ); )
              u++;
            if (a === p.length || u === b.length)
              for (a = p.length - 1, u = b.length - 1; 1 <= a && 0 <= u && p[a] !== b[u]; )
                u--;
            for (; 1 <= a && 0 <= u; a--, u--)
              if (p[a] !== b[u]) {
                if (a !== 1 || u !== 1)
                  do
                    if (a--, u--, 0 > u || p[a] !== b[u]) {
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
        return (e = t ? t.displayName || t.name : "") ? M(e) : "";
      }
      function H(t) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            return M(t.type);
          case 16:
            return M("Lazy");
          case 13:
            return M("Suspense");
          case 19:
            return M("SuspenseList");
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
      function g(t) {
        if (z(t) !== t)
          throw Error(o(188));
      }
      function R(t) {
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
              if (n === e) return g(u), t;
              if (n === a) return g(u), l;
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
      function B(t) {
        return { current: t };
      }
      function T(t) {
        0 > Ye || (t.current = cc[Ye], cc[Ye] = null, Ye--);
      }
      function N(t, l) {
        Ye++, cc[Ye] = t.current, t.current = l;
      }
      function Z(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (Rm(t) / Am | 0) | 0;
      }
      function K(t) {
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
        return v !== 0 ? (e = v & ~u, e !== 0 ? a = K(e) : (n &= v, n !== 0 ? a = K(n) : t || (f = v & ~f, f !== 0 && (a = K(f))))) : (v = e & ~u, v !== 0 ? a = K(v) : n !== 0 ? a = K(n) : t || (f = e & ~f, f !== 0 && (a = K(f)))), a === 0 ? 0 : l !== 0 && l !== a && (l & u) === 0 && (u = a & -a, f = l & -l, u >= f || u === 32 && (f & 4194176) !== 0) ? l : a;
      }
      function G(t, l) {
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
        var t = du;
        return du <<= 1, (du & 4194176) === 0 && (du = 128), t;
      }
      function lt() {
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
        var v = t.entanglements, p = t.expirationTimes, b = t.hiddenUpdates;
        for (e = f & ~e; 0 < e; ) {
          var A = 31 - ll(e), j = 1 << A;
          v[A] = 0, p[A] = -1;
          var q = b[A];
          if (q !== null)
            for (b[A] = null, A = 0; A < q.length; A++) {
              var w = q[A];
              w !== null && (w.lane &= -536870913);
            }
          e &= ~j;
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
      function Mt(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function S(t) {
        if (el && typeof el.onCommitFiberRoot == "function")
          try {
            el.onCommitFiberRoot(
              ga,
              t,
              void 0,
              (t.current.flags & 128) === 128
            );
          } catch {
          }
      }
      function O(t) {
        if (typeof Bm == "function" && Qm(t), el && typeof el.setStrictMode == "function")
          try {
            el.setStrictMode(ga, t);
          } catch {
          }
      }
      function D(t, l) {
        return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
      }
      function Y(t, l) {
        if (typeof t == "object" && t !== null) {
          var e = Qs.get(t);
          return e !== void 0 ? e : (l = {
            value: t,
            source: l,
            stack: _(l)
          }, Qs.set(t, l), l);
        }
        return {
          value: t,
          source: l,
          stack: _(l)
        };
      }
      function J(t, l) {
        Ge[Xe++] = hu, Ge[Xe++] = ru, ru = t, hu = l;
      }
      function k(t, l, e) {
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
        t.return !== null && (J(t, 1), k(t, 1, 0));
      }
      function Nt(t) {
        for (; t === ru; )
          ru = Ge[--Xe], Ge[Xe] = null, hu = Ge[--Xe], Ge[Xe] = null;
        for (; t === pe; )
          pe = fl[--sl], fl[sl] = null, Dl = fl[--sl], fl[sl] = null, Al = fl[--sl], fl[sl] = null;
      }
      function et(t, l) {
        N(Il, l), N(_a, t), N(Yt, null), t = Sv(l), T(Yt), N(Yt, t);
      }
      function Ut() {
        T(Yt), T(_a), T(Il);
      }
      function Oe(t) {
        t.memoizedState !== null && N(Su, t);
        var l = Yt.current, e = Ev(l, t.type);
        l !== e && (N(_a, t), N(Yt, e));
      }
      function Xa(t) {
        _a.current === t && (T(Yt), T(_a)), Su.current === t && (T(Su), Rl ? de._currentValue = Qe : de._currentValue2 = Qe);
      }
      function ne(t) {
        var l = Error(o(418, ""));
        throw fa(Y(l, t)), sc;
      }
      function li(t, l) {
        if (!cl) throw Error(o(175));
        mm(
          t.stateNode,
          t.type,
          t.memoizedProps,
          l,
          t
        ) || ne(t);
      }
      function ei(t) {
        for (xt = t.return; xt; )
          switch (xt.tag) {
            case 3:
            case 27:
              zl = !0;
              return;
            case 5:
            case 13:
              zl = !1;
              return;
            default:
              xt = xt.return;
          }
      }
      function ca(t) {
        if (!cl || t !== xt) return !1;
        if (!ot) return ei(t), ot = !0, !1;
        var l = !1;
        if (Xt ? t.tag !== 3 && t.tag !== 27 && (t.tag !== 5 || _s(t.type) && !mu(t.type, t.memoizedProps)) && (l = !0) : t.tag !== 3 && (t.tag !== 5 || _s(t.type) && !mu(t.type, t.memoizedProps)) && (l = !0), l && Zt && ne(t), ei(t), t.tag === 13) {
          if (!cl) throw Error(o(316));
          if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
          Zt = ym(t);
        } else
          Zt = xt ? Ms(t.stateNode) : null;
        return !0;
      }
      function ia() {
        cl && (Zt = xt = null, ot = !1);
      }
      function fa(t) {
        rl === null ? rl = [t] : rl.push(t);
      }
      function Za() {
        for (var t = Ze, l = oc = Ze = 0; l < t; ) {
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
          n !== 0 && ai(e, u, n);
        }
      }
      function Ka(t, l, e, a) {
        ol[Ze++] = t, ol[Ze++] = l, ol[Ze++] = e, ol[Ze++] = a, oc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
      }
      function Zu(t, l, e, a) {
        return Ka(t, l, e, a), Ja(t);
      }
      function Yl(t, l) {
        return Ka(t, null, null, l), Ja(t);
      }
      function ai(t, l, e) {
        t.lanes |= e;
        var a = t.alternate;
        a !== null && (a.lanes |= e);
        for (var u = !1, n = t.return; n !== null; )
          n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (u = !0)), t = n, n = n.return;
        u && l !== null && t.tag === 3 && (n = t.stateNode, u = 31 - ll(e), n = n.hiddenUpdates, t = n[u], t === null ? n[u] = [l] : t.push(l), l.lane = e | 536870912);
      }
      function Ja(t) {
        if (50 < qa)
          throw qa = 0, _c = null, Error(o(185));
        for (var l = t.return; l !== null; )
          t = l, l = t.return;
        return t.tag === 3 ? t.stateNode : null;
      }
      function El(t) {
        t !== Ke && t.next === null && (Ke === null ? Eu = Ke = t : Ke = Ke.next = t), zu = !0, vc || (vc = !0, Go(Vo));
      }
      function Ue(t, l) {
        if (!mc && zu) {
          mc = !0;
          do
            for (var e = !1, a = Eu; a !== null; ) {
              if (t !== 0) {
                var u = a.pendingLanes;
                if (u === 0) var n = 0;
                else {
                  var f = a.suspendedLanes, v = a.pingedLanes;
                  n = (1 << 31 - ll(42 | t) + 1) - 1, n &= u & ~(f & ~v), n = n & 201326677 ? n & 201326677 | 1 : n ? n | 2 : 0;
                }
                n !== 0 && (e = !0, ci(a, n));
              } else
                n = it, n = x(
                  a,
                  a === St ? n : 0
                ), (n & 3) === 0 || G(a, n) || (e = !0, ci(a, n));
              a = a.next;
            }
          while (e);
          mc = !1;
        }
      }
      function Vo() {
        zu = vc = !1;
        var t = 0;
        Je !== 0 && (Hv() && (t = Je), Je = 0);
        for (var l = yl(), e = null, a = Eu; a !== null; ) {
          var u = a.next, n = ui(a, l);
          n === 0 ? (a.next = null, e === null ? Eu = u : e.next = u, u === null && (Ke = e)) : (e = a, (t !== 0 || (n & 3) !== 0) && (zu = !0)), a = u;
        }
        Ue(t);
      }
      function ui(t, l) {
        for (var e = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
          var f = 31 - ll(n), v = 1 << f, p = u[f];
          p === -1 ? ((v & e) === 0 || (v & a) !== 0) && (u[f] = nt(v, l)) : p <= l && (t.expiredLanes |= v), n &= ~v;
        }
        if (l = St, e = it, e = x(
          t,
          t === l ? e : 0
        ), a = t.callbackNode, e === 0 || t === l && Et === 2 || t.cancelPendingCommit !== null)
          return a !== null && a !== null && ic(a), t.callbackNode = null, t.callbackPriority = 0;
        if ((e & 3) === 0 || G(t, e)) {
          if (l = e & -e, l === t.callbackPriority) return l;
          switch (a !== null && ic(a), Mt(e)) {
            case 2:
            case 8:
              e = jm;
              break;
            case 32:
              e = fc;
              break;
            case 268435456:
              e = qm;
              break;
            default:
              e = fc;
          }
          return a = ni.bind(null, t), e = yu(e, a), t.callbackPriority = l, t.callbackNode = e, l;
        }
        return a !== null && a !== null && ic(a), t.callbackPriority = 2, t.callbackNode = null, 2;
      }
      function ni(t, l) {
        var e = t.callbackNode;
        if (oe() && t.callbackNode !== e)
          return null;
        var a = it;
        return a = x(
          t,
          t === St ? a : 0
        ), a === 0 ? null : (Gf(t, a, l), ui(t, yl()), t.callbackNode != null && t.callbackNode === e ? ni.bind(null, t) : null);
      }
      function ci(t, l) {
        if (oe()) return null;
        Gf(t, l, !0);
      }
      function Go(t) {
        Cv ? jv(function() {
          (rt & 6) !== 0 ? yu(Bs, t) : t();
        }) : yu(Bs, t);
      }
      function Ku() {
        return Je === 0 && (Je = st()), Je;
      }
      function Xo(t, l) {
        if (Ha === null) {
          var e = Ha = [];
          dc = 0, xe = Ku(), Le = {
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
        if (--dc === 0 && Ha !== null) {
          Le !== null && (Le.status = "fulfilled");
          var t = Ha;
          Ha = null, xe = 0, Le = null;
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
      function Gl(t, l, e) {
        var a = t.updateQueue;
        if (a === null) return null;
        if (a = a.shared, (rt & 2) !== 0) {
          var u = a.pending;
          return u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l, l = Ja(t), ai(t, null, e), l;
        }
        return Ka(t, a, l, e), Ja(t);
      }
      function sa(t, l, e) {
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
      function oa() {
        if (pc) {
          var t = Le;
          if (t !== null) throw t;
        }
      }
      function va(t, l, e, a) {
        pc = !1;
        var u = t.updateQueue;
        $l = !1;
        var n = u.firstBaseUpdate, f = u.lastBaseUpdate, v = u.shared.pending;
        if (v !== null) {
          u.shared.pending = null;
          var p = v, b = p.next;
          p.next = null, f === null ? n = b : f.next = b, f = p;
          var A = t.alternate;
          A !== null && (A = A.updateQueue, v = A.lastBaseUpdate, v !== f && (v === null ? A.firstBaseUpdate = b : v.next = b, A.lastBaseUpdate = p));
        }
        if (n !== null) {
          var j = u.baseState;
          f = 0, A = b = p = null, v = n;
          do {
            var q = v.lane & -536870913, w = q !== v.lane;
            if (w ? (it & q) === q : (a & q) === q) {
              q !== 0 && q === xe && (pc = !0), A !== null && (A = A.next = {
                lane: 0,
                tag: v.tag,
                payload: v.payload,
                callback: null,
                next: null
              });
              t: {
                var dl = t, Ba = v;
                q = l;
                var be = e;
                switch (Ba.tag) {
                  case 1:
                    if (dl = Ba.payload, typeof dl == "function") {
                      j = dl.call(
                        be,
                        j,
                        q
                      );
                      break t;
                    }
                    j = dl;
                    break t;
                  case 3:
                    dl.flags = dl.flags & -65537 | 128;
                  case 0:
                    if (dl = Ba.payload, q = typeof dl == "function" ? dl.call(be, j, q) : dl, q == null) break t;
                    j = Wn({}, j, q);
                    break t;
                  case 2:
                    $l = !0;
                }
              }
              q = v.callback, q !== null && (t.flags |= 64, w && (t.flags |= 8192), w = u.callbacks, w === null ? u.callbacks = [q] : w.push(q));
            } else
              w = {
                lane: q,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              }, A === null ? (b = A = w, p = j) : A = A.next = w, f |= q;
            if (v = v.next, v === null) {
              if (v = u.shared.pending, v === null)
                break;
              w = v, v = w.next, w.next = null, u.lastBaseUpdate = w, u.shared.pending = null;
            }
          } while (!0);
          A === null && (p = j), u.baseState = p, u.firstBaseUpdate = b, u.lastBaseUpdate = A, n === null && (u.shared.lanes = 0), le |= f, t.lanes = f, t.memoizedState = j;
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
        if (al(t, l)) return !0;
        if (typeof t != "object" || t === null || typeof l != "object" || l === null)
          return !1;
        var e = Object.keys(t), a = Object.keys(l);
        if (e.length !== a.length) return !1;
        for (a = 0; a < e.length; a++) {
          var u = e[a];
          if (!Ym.call(l, u) || !al(t[u], l[u]))
            return !1;
        }
        return !0;
      }
      function oi(t) {
        return t = t.status, t === "fulfilled" || t === "rejected";
      }
      function La() {
      }
      function vi(t, l, e) {
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
            throw We = l, Oa;
        }
      }
      function mi() {
        if (We === null) throw Error(o(459));
        var t = We;
        return We = null, t;
      }
      function Wa(t) {
        var l = Ua;
        return Ua += 1, Fe === null && (Fe = []), vi(Fe, t, l);
      }
      function ma(t, l) {
        l = l.props.ref, t.ref = l !== void 0 ? l : null;
      }
      function Fa(t, l) {
        throw l.$$typeof === mv ? Error(o(525)) : (t = Object.prototype.toString.call(l), Error(
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
          var X = h.type;
          return X === Be ? A(
            y,
            d,
            h.props.children,
            U,
            h.key
          ) : d !== null && (d.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Pl && di(X) === d.type) ? (d = u(d, h.props), ma(d, h), d.return = y, d) : (d = su(
            h.type,
            h.key,
            h.props,
            null,
            y.mode,
            U
          ), ma(d, h), d.return = y, d);
        }
        function b(y, d, h, U) {
          return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = xn(h, y.mode, U), d.return = y, d) : (d = u(d, h.children || []), d.return = y, d);
        }
        function A(y, d, h, U, X) {
          return d === null || d.tag !== 7 ? (d = ve(
            h,
            y.mode,
            U,
            X
          ), d.return = y, d) : (d = u(d, h), d.return = y, d);
        }
        function j(y, d, h) {
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
                ), ma(h, d), h.return = y, h;
              case qe:
                return d = xn(
                  d,
                  y.mode,
                  h
                ), d.return = y, d;
              case Pl:
                var U = d._init;
                return d = U(d._payload), j(y, d, h);
            }
            if (vu(d) || E(d))
              return d = ve(
                d,
                y.mode,
                h,
                null
              ), d.return = y, d;
            if (typeof d.then == "function")
              return j(y, Wa(d), h);
            if (d.$$typeof === Fl)
              return j(
                y,
                au(y, d),
                h
              );
            Fa(y, d);
          }
          return null;
        }
        function q(y, d, h, U) {
          var X = d !== null ? d.key : null;
          if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
            return X !== null ? null : v(y, d, "" + h, U);
          if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
              case ou:
                return h.key === X ? p(y, d, h, U) : null;
              case qe:
                return h.key === X ? b(y, d, h, U) : null;
              case Pl:
                return X = h._init, h = X(h._payload), q(y, d, h, U);
            }
            if (vu(h) || E(h))
              return X !== null ? null : A(y, d, h, U, null);
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
        function w(y, d, h, U, X) {
          if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
            return y = y.get(h) || null, v(d, y, "" + U, X);
          if (typeof U == "object" && U !== null) {
            switch (U.$$typeof) {
              case ou:
                return y = y.get(
                  U.key === null ? h : U.key
                ) || null, p(d, y, U, X);
              case qe:
                return y = y.get(
                  U.key === null ? h : U.key
                ) || null, b(d, y, U, X);
              case Pl:
                var zt = U._init;
                return U = zt(U._payload), w(
                  y,
                  d,
                  h,
                  U,
                  X
                );
            }
            if (vu(U) || E(U))
              return y = y.get(h) || null, A(d, y, U, X, null);
            if (typeof U.then == "function")
              return w(
                y,
                d,
                h,
                Wa(U),
                X
              );
            if (U.$$typeof === Fl)
              return w(
                y,
                d,
                h,
                au(d, U),
                X
              );
            Fa(d, U);
          }
          return null;
        }
        function dl(y, d, h, U) {
          for (var X = null, zt = null, L = d, vt = d = 0, Bt = null; L !== null && vt < h.length; vt++) {
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
            t && L && mt.alternate === null && l(y, L), d = n(mt, d, vt), zt === null ? X = mt : zt.sibling = mt, zt = mt, L = Bt;
          }
          if (vt === h.length)
            return e(y, L), ot && J(y, vt), X;
          if (L === null) {
            for (; vt < h.length; vt++)
              L = j(y, h[vt], U), L !== null && (d = n(
                L,
                d,
                vt
              ), zt === null ? X = L : zt.sibling = L, zt = L);
            return ot && J(y, vt), X;
          }
          for (L = a(L); vt < h.length; vt++)
            Bt = w(
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
            ), zt === null ? X = Bt : zt.sibling = Bt, zt = Bt);
          return t && L.forEach(function(ae) {
            return l(y, ae);
          }), ot && J(y, vt), X;
        }
        function Ba(y, d, h, U) {
          if (h == null) throw Error(o(151));
          for (var X = null, zt = null, L = d, vt = d = 0, Bt = null, mt = h.next(); L !== null && !mt.done; vt++, mt = h.next()) {
            L.index > vt ? (Bt = L, L = null) : Bt = L.sibling;
            var ae = q(y, L, mt.value, U);
            if (ae === null) {
              L === null && (L = Bt);
              break;
            }
            t && L && ae.alternate === null && l(y, L), d = n(ae, d, vt), zt === null ? X = ae : zt.sibling = ae, zt = ae, L = Bt;
          }
          if (mt.done)
            return e(y, L), ot && J(y, vt), X;
          if (L === null) {
            for (; !mt.done; vt++, mt = h.next())
              mt = j(y, mt.value, U), mt !== null && (d = n(
                mt,
                d,
                vt
              ), zt === null ? X = mt : zt.sibling = mt, zt = mt);
            return ot && J(y, vt), X;
          }
          for (L = a(L); !mt.done; vt++, mt = h.next())
            mt = w(
              L,
              y,
              vt,
              mt.value,
              U
            ), mt !== null && (t && mt.alternate !== null && L.delete(mt.key === null ? vt : mt.key), d = n(mt, d, vt), zt === null ? X = mt : zt.sibling = mt, zt = mt);
          return t && L.forEach(function(xm) {
            return l(y, xm);
          }), ot && J(y, vt), X;
        }
        function be(y, d, h, U) {
          if (typeof h == "object" && h !== null && h.type === Be && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
              case ou:
                t: {
                  for (var X = h.key; d !== null; ) {
                    if (d.key === X) {
                      if (X = h.type, X === Be) {
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
                      } else if (d.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Pl && di(X) === d.type) {
                        e(
                          y,
                          d.sibling
                        ), U = u(d, h.props), ma(U, h), U.return = y, y = U;
                        break t;
                      }
                      e(y, d);
                      break;
                    } else l(y, d);
                    d = d.sibling;
                  }
                  h.type === Be ? (U = ve(
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
                  ), ma(U, h), U.return = y, y = U);
                }
                return f(y);
              case qe:
                t: {
                  for (X = h.key; d !== null; ) {
                    if (d.key === X)
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
                return X = h._init, h = X(h._payload), be(
                  y,
                  d,
                  h,
                  U
                );
            }
            if (vu(h))
              return dl(
                y,
                d,
                h,
                U
              );
            if (E(h)) {
              if (X = E(h), typeof X != "function")
                throw Error(o(150));
              return h = X.call(h), Ba(
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
            var X = be(
              y,
              d,
              h,
              U
            );
            return Fe = null, X;
          } catch (L) {
            if (L === Oa) throw L;
            var zt = s(29, L, null, y.mode);
            return zt.lanes = U, zt.return = y, zt;
          } finally {
          }
        };
      }
      function yi(t, l) {
        t = Bl, N(Nu, t), N(Pe, l), Bl = t | l.baseLanes;
      }
      function Wu() {
        N(Nu, Bl), N(Pe, Pe.current);
      }
      function Fu() {
        Bl = Nu.current, T(Pe), T(Nu);
      }
      function Xl(t) {
        var l = t.alternate;
        N(Ct, Ct.current & 1), N(vl, t), Tl === null && (l === null || Pe.current !== null || l.memoizedState !== null) && (Tl = t);
      }
      function ri(t) {
        if (t.tag === 22) {
          if (N(Ct, Ct.current), N(vl, t), Tl === null) {
            var l = t.alternate;
            l !== null && l.memoizedState !== null && (Tl = t);
          }
        } else Zl();
      }
      function Zl() {
        N(Ct, Ct.current), N(vl, vl.current);
      }
      function Ml(t) {
        T(vl), Tl === t && (Tl = null), T(Ct);
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
          if (!al(t[e], l[e])) return !1;
        return !0;
      }
      function wu(t, l, e, a, u, n) {
        return kl = n, tt = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, F.H = t === null || t.memoizedState === null ? he : te, re = !1, n = e(a, u), re = !1, we && (n = Si(
          l,
          e,
          a,
          u
        )), hi(t), n;
      }
      function hi(t) {
        F.H = Nl;
        var l = yt !== null && yt.next !== null;
        if (kl = 0, At = yt = tt = null, bu = !1, Ra = 0, Ie = null, l) throw Error(o(300));
        t === null || jt || (t = t.dependencies, t !== null && eu(t) && (jt = !0));
      }
      function Si(t, l, e, a) {
        tt = t;
        var u = 0;
        do {
          if (we && (Ie = null), Ra = 0, we = !1, 25 <= u) throw Error(o(301));
          if (u += 1, At = yt = null, t.updateQueue != null) {
            var n = t.updateQueue;
            n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
          }
          F.H = Se, n = l(e, a);
        } while (we);
        return n;
      }
      function Ko() {
        var t = F.H, l = t.useState()[0];
        return l = typeof l.then == "function" ? da(l) : l, t = t.useState()[0], (yt !== null ? yt.memoizedState : null) !== t && (tt.flags |= 1024), l;
      }
      function Iu() {
        var t = Mu !== 0;
        return Mu = 0, t;
      }
      function $u(t, l, e) {
        l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
      }
      function ku(t) {
        if (bu) {
          for (t = t.memoizedState; t !== null; ) {
            var l = t.queue;
            l !== null && (l.pending = null), t = t.next;
          }
          bu = !1;
        }
        kl = 0, At = yt = tt = null, we = !1, Ra = Mu = 0, Ie = null;
      }
      function Wt() {
        var t = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return At === null ? tt.memoizedState = At = t : At = At.next = t, At;
      }
      function Rt() {
        if (yt === null) {
          var t = tt.alternate;
          t = t !== null ? t.memoizedState : null;
        } else t = yt.next;
        var l = At === null ? tt.memoizedState : At.next;
        if (l !== null)
          At = l, yt = t;
        else {
          if (t === null)
            throw tt.alternate === null ? Error(o(467)) : Error(o(310));
          yt = t, t = {
            memoizedState: yt.memoizedState,
            baseState: yt.baseState,
            baseQueue: yt.baseQueue,
            queue: yt.queue,
            next: null
          }, At === null ? tt.memoizedState = At = t : At = At.next = t;
        }
        return At;
      }
      function da(t) {
        var l = Ra;
        return Ra += 1, Ie === null && (Ie = []), t = vi(Ie, t, l), l = tt, (At === null ? l.memoizedState : At.next) === null && (l = l.alternate, F.H = l === null || l.memoizedState === null ? he : te), t;
      }
      function wa(t) {
        if (t !== null && typeof t == "object") {
          if (typeof t.then == "function") return da(t);
          if (t.$$typeof === Fl) return Vt(t);
        }
        throw Error(o(438, String(t)));
      }
      function tn(t) {
        var l = null, e = tt.updateQueue;
        if (e !== null && (l = e.memoCache), l == null) {
          var a = tt.alternate;
          a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
            data: a.data.map(function(u) {
              return u.slice();
            }),
            index: 0
          })));
        }
        if (l == null && (l = { data: [], index: 0 }), e === null && (e = rc(), tt.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
          for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
            e[a] = pv;
        return l.index++, e;
      }
      function gl(t, l) {
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
          var v = f = null, p = null, b = l, A = !1;
          do {
            var j = b.lane & -536870913;
            if (j !== b.lane ? (it & j) === j : (kl & j) === j) {
              var q = b.revertLane;
              if (q === 0)
                p !== null && (p = p.next = {
                  lane: 0,
                  revertLane: 0,
                  action: b.action,
                  hasEagerState: b.hasEagerState,
                  eagerState: b.eagerState,
                  next: null
                }), j === xe && (A = !0);
              else if ((kl & q) === q) {
                b = b.next, q === xe && (A = !0);
                continue;
              } else
                j = {
                  lane: 0,
                  revertLane: b.revertLane,
                  action: b.action,
                  hasEagerState: b.hasEagerState,
                  eagerState: b.eagerState,
                  next: null
                }, p === null ? (v = p = j, f = n) : p = p.next = j, tt.lanes |= q, le |= q;
              j = b.action, re && e(n, j), n = b.hasEagerState ? b.eagerState : e(n, j);
            } else
              q = {
                lane: j,
                revertLane: b.revertLane,
                action: b.action,
                hasEagerState: b.hasEagerState,
                eagerState: b.eagerState,
                next: null
              }, p === null ? (v = p = q, f = n) : p = p.next = q, tt.lanes |= j, le |= j;
            b = b.next;
          } while (b !== null && b !== l);
          if (p === null ? f = n : p.next = v, !al(n, t.memoizedState) && (jt = !0, A && (e = Le, e !== null)))
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
          al(n, l.memoizedState) || (jt = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
        }
        return [n, a];
      }
      function Ei(t, l, e) {
        var a = tt, u = Rt(), n = ot;
        if (n) {
          if (e === void 0)
            throw Error(o(407));
          e = e();
        } else e = l();
        var f = !al(
          (yt || u).memoizedState,
          e
        );
        if (f && (u.memoizedState = e, jt = !0), u = u.queue, nn(Ni.bind(null, a, u, t), [
          t
        ]), u.getSnapshot !== l || f || At !== null && At.memoizedState.tag & 1) {
          if (a.flags |= 2048, Re(
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
          n || (kl & 60) !== 0 || zi(a, l, e);
        }
        return e;
      }
      function zi(t, l, e) {
        t.flags |= 16384, t = { getSnapshot: l, value: e }, l = tt.updateQueue, l === null ? (l = rc(), tt.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
      }
      function Ti(t, l, e, a) {
        l.value = e, l.getSnapshot = a, bi(l) && Mi(t);
      }
      function Ni(t, l, e) {
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
          lastRenderedReducer: gl,
          lastRenderedState: t
        }, l;
      }
      function gi(t, l, e, a) {
        return t.baseState = e, ln(
          t,
          yt,
          typeof a == "function" ? a : gl
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
            var v = e(u, a), p = F.S;
            p !== null && p(f, v), Hi(t, l, v);
          } catch (b) {
            un(t, l, b);
          } finally {
            F.T = n;
          }
        } else
          try {
            n = e(u, a), Hi(t, l, n);
          } catch (b) {
            un(t, l, b);
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
        if (ot) {
          var e = St.formState;
          if (e !== null) {
            t: {
              var a = tt;
              if (ot) {
                if (Zt) {
                  var u = nm(
                    Zt,
                    zl
                  );
                  if (u) {
                    Zt = Ms(u), a = cm(u);
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
          lastRenderedReducer: Ri,
          lastRenderedState: l
        }, e.queue = a, e = Fi.bind(
          null,
          tt,
          a
        ), a.dispatch = e, a = an(!1);
        var n = on.bind(
          null,
          tt,
          !1,
          a.queue
        );
        return a = Wt(), u = {
          state: l,
          dispatch: null,
          action: t,
          pending: null
        }, a.queue = u, e = Jo.bind(
          null,
          tt,
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
        )[0], t = Ia(gl)[0], l = typeof l == "object" && l !== null && typeof l.then == "function" ? da(l) : l;
        var a = Rt(), u = a.queue, n = u.dispatch;
        return e !== a.memoizedState && (tt.flags |= 2048, Re(
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
      function Re(t, l, e, a) {
        return t = { tag: t, create: l, inst: e, deps: a, next: null }, l = tt.updateQueue, l === null && (l = rc(), tt.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
      }
      function qi() {
        return Rt().memoizedState;
      }
      function $a(t, l, e, a) {
        var u = Wt();
        tt.flags |= t, u.memoizedState = Re(
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
        yt !== null && a !== null && Pu(a, yt.memoizedState.deps) ? u.memoizedState = Re(l, e, n, a) : (tt.flags |= t, u.memoizedState = Re(1 | l, e, n, a));
      }
      function Bi(t, l) {
        $a(8390656, 8, t, l);
      }
      function nn(t, l) {
        ka(2048, 8, t, l);
      }
      function Qi(t, l) {
        return ka(4, 2, t, l);
      }
      function Yi(t, l) {
        return ka(4, 4, t, l);
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
      function Gi(t, l, e) {
        e = e != null ? e.concat([t]) : null, ka(
          4,
          4,
          Vi.bind(null, l, t),
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
        return e === void 0 || (kl & 1073741824) !== 0 ? t.memoizedState = l : (t.memoizedState = e, t = Vf(), tt.lanes |= t, le |= t, e);
      }
      function Ki(t, l, e, a) {
        return al(e, l) ? e : Pe.current !== null ? (t = fn(t, e, a), al(t, l) || (jt = !0), t) : (kl & 42) === 0 ? (jt = !0, t.memoizedState = e) : (t = Vf(), tt.lanes |= t, le |= t, l);
      }
      function Ji(t, l, e, a, u) {
        var n = me();
        Pt(
          n !== 0 && 8 > n ? n : 8
        );
        var f = F.T, v = {};
        F.T = v, on(t, !1, l, e);
        try {
          var p = u(), b = F.S;
          if (b !== null && b(v, p), p !== null && typeof p == "object" && typeof p.then == "function") {
            var A = Zo(
              p,
              a
            );
            pa(
              t,
              l,
              A,
              kt(t)
            );
          } else
            pa(
              t,
              l,
              a,
              kt(t)
            );
        } catch (j) {
          pa(
            t,
            l,
            { then: function() {
            }, status: "rejected", reason: j },
            kt()
          );
        } finally {
          Pt(n), F.T = f;
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
            lastRenderedReducer: gl,
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
            lastRenderedReducer: gl,
            lastRenderedState: e
          },
          next: null
        }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
      }
      function sn() {
        return Vt(de);
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
              var e = kt();
              t = Vl(e);
              var a = Gl(l, t, e);
              a !== null && (Jt(a, l, e), sa(a, l, e)), l = { cache: bn() }, t.payload = l;
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
        }, tu(t) ? Pi(l, e) : (e = Zu(t, l, e, a), e !== null && (Jt(e, t, a), wi(e, l, a)));
      }
      function Fi(t, l, e) {
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
        if (tu(t)) Pi(l, u);
        else {
          var n = t.alternate;
          if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
            try {
              var f = l.lastRenderedState, v = n(f, e);
              if (u.hasEagerState = !0, u.eagerState = v, al(v, f))
                return Ka(t, l, u, 0), St === null && Za(), !1;
            } catch {
            } finally {
            }
          if (e = Zu(t, l, u, a), e !== null)
            return Jt(e, t, a), wi(e, l, a), !0;
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
          ), l !== null && Jt(l, t, 2);
      }
      function tu(t) {
        var l = t.alternate;
        return t === tt || l !== null && l === tt;
      }
      function Pi(t, l) {
        we = bu = !0;
        var e = t.pending;
        e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
      }
      function wi(t, l, e) {
        if ((e & 4194176) !== 0) {
          var a = l.lanes;
          a &= t.pendingLanes, e |= a, l.lanes = e, dt(t, e);
        }
      }
      function vn(t, l, e, a) {
        l = t.memoizedState, e = e(a, l), e = e == null ? l : Wn({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
      }
      function Ii(t, l, e, a, u, n, f) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, f) : l.prototype && l.prototype.isPureReactComponent ? !xa(e, a) || !xa(u, n) : !0;
      }
      function $i(t, l, e, a) {
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
      function mn(t, l, e) {
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
          ki(l, e, a), typeof u != "function" && (ee === null ? ee = /* @__PURE__ */ new Set([this]) : ee.add(this));
          var v = a.stack;
          this.componentDidCatch(a.value, {
            componentStack: v !== null ? v : ""
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
          ), e = vl.current, e !== null) {
            switch (e.tag) {
              case 13:
                return Tl === null ? Gn() : e.alternate === null && Ht === 0 && (Ht = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === Tu ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Zn(t, a, u)), !1;
              case 22:
                return e.flags |= 65536, a === Tu ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([a])
                }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Zn(t, a, u)), !1;
            }
            throw Error(o(435, e.tag));
          }
          return Zn(t, a, u), Gn(), !1;
        }
        if (ot)
          return l = vl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, a !== sc && (t = Error(o(422), { cause: a }), fa(
            Y(t, e)
          ))) : (a !== sc && (l = Error(o(423), {
            cause: a
          }), fa(
            Y(l, e)
          )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = Y(a, e), u = mn(
            t.stateNode,
            a,
            u
          ), Lu(t, u), Ht !== 4 && (Ht = 2)), !1;
        var n = Error(o(520), { cause: a });
        if (n = Y(n, e), Da === null ? Da = [n] : Da.push(n), Ht !== 4 && (Ht = 2), l === null) return !0;
        a = Y(a, e), e = l;
        do {
          switch (e.tag) {
            case 3:
              return e.flags |= 65536, t = u & -u, e.lanes |= t, t = mn(e.stateNode, a, t), Lu(e, t), !1;
            case 1:
              if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ee === null || !ee.has(
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
        l.child = t === null ? Ys(l, null, e, a) : ye(
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
        ), v = Iu(), t !== null && !jt ? ($u(t, l, u), _l(t, l, u)) : (ot && v && ct(l), l.flags |= 1, Qt(t, l, a, u), l.child);
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
            return _l(
              t,
              l,
              u
            );
        }
        return l.flags |= 1, t = Wl(n, a), t.ref = l.ref, t.return = l, l.child = t;
      }
      function uf(t, l, e, a, u) {
        if (t !== null) {
          var n = t.memoizedProps;
          if (xa(n, a) && t.ref === l.ref)
            if (jt = !1, l.pendingProps = a = n, zn(t, u))
              (t.flags & 131072) !== 0 && (jt = !0);
            else
              return l.lanes = t.lanes, _l(t, l, u);
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
            ), f !== null ? yi(l, f) : Wu(), ri(l);
          else
            return l.lanes = l.childLanes = 536870912, cf(
              t,
              l,
              f !== null ? f.baseLanes | e : e,
              e
            );
        } else
          f !== null ? (uu(l, f.cachePool), yi(l, f), Zl(), l.memoizedState = null) : (t !== null && uu(l, null), Wu(), Zl());
        return Qt(t, l, u, e), l.child;
      }
      function cf(t, l, e, a) {
        var u = Mn();
        return u = u === null ? null : {
          parent: Rl ? gt._currentValue : gt._currentValue2,
          pool: u
        }, l.memoizedState = {
          baseLanes: e,
          cachePool: u
        }, t !== null && uu(l, null), Wu(), ri(l), t !== null && ra(t, l, a, !0), null;
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
        return ie(l), e = wu(
          t,
          l,
          e,
          a,
          void 0,
          u
        ), a = Iu(), t !== null && !jt ? ($u(t, l, u), _l(t, l, u)) : (ot && a && ct(l), l.flags |= 1, Qt(t, l, e, u), l.child);
      }
      function ff(t, l, e, a, u, n) {
        return ie(l), l.updateQueue = null, e = Si(
          l,
          a,
          e,
          u
        ), hi(t), a = Iu(), t !== null && !jt ? ($u(t, l, n), _l(t, l, n)) : (ot && a && ct(l), l.flags |= 1, Qt(t, l, e, n), l.child);
      }
      function sf(t, l, e, a, u) {
        if (ie(l), l.stateNode === null) {
          var n = Ve, f = e.contextType;
          typeof f == "object" && f !== null && (n = Vt(f)), n = new e(a, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = hc, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = a, n.state = l.memoizedState, n.refs = {}, Ju(l), f = e.contextType, n.context = typeof f == "object" && f !== null ? Vt(f) : Ve, n.state = l.memoizedState, f = e.getDerivedStateFromProps, typeof f == "function" && (vn(
            l,
            e,
            f,
            a
          ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && hc.enqueueReplaceState(
            n,
            n.state,
            null
          ), va(l, a, n, u), oa(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
        } else if (t === null) {
          n = l.stateNode;
          var v = l.memoizedProps, p = ce(e, v);
          n.props = p;
          var b = n.context, A = e.contextType;
          f = Ve, typeof A == "object" && A !== null && (f = Vt(A));
          var j = e.getDerivedStateFromProps;
          A = typeof j == "function" || typeof n.getSnapshotBeforeUpdate == "function", v = l.pendingProps !== v, A || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (v || b !== f) && $i(
            l,
            n,
            a,
            f
          ), $l = !1;
          var q = l.memoizedState;
          n.state = q, va(l, a, n, u), oa(), b = l.memoizedState, v || q !== b || $l ? (typeof j == "function" && (vn(
            l,
            e,
            j,
            a
          ), b = l.memoizedState), (p = $l || Ii(
            l,
            e,
            p,
            a,
            q,
            b,
            f
          )) ? (A || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = b), n.props = a, n.state = b, n.context = f, a = p) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
        } else {
          n = l.stateNode, xu(t, l), f = l.memoizedProps, A = ce(e, f), n.props = A, j = l.pendingProps, q = n.context, b = e.contextType, p = Ve, typeof b == "object" && b !== null && (p = Vt(b)), v = e.getDerivedStateFromProps, (b = typeof v == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== j || q !== p) && $i(
            l,
            n,
            a,
            p
          ), $l = !1, q = l.memoizedState, n.state = q, va(l, a, n, u), oa();
          var w = l.memoizedState;
          f !== j || q !== w || $l || t !== null && t.dependencies !== null && eu(t.dependencies) ? (typeof v == "function" && (vn(
            l,
            e,
            v,
            a
          ), w = l.memoizedState), (A = $l || Ii(
            l,
            e,
            A,
            a,
            q,
            w,
            p
          ) || t !== null && t.dependencies !== null && eu(t.dependencies)) ? (b || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, w, p), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
            a,
            w,
            p
          )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === t.memoizedProps && q === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && q === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = w), n.props = a, n.state = w, n.context = p, a = A) : (typeof n.componentDidUpdate != "function" || f === t.memoizedProps && q === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && q === t.memoizedState || (l.flags |= 1024), a = !1);
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
        )) : Qt(t, l, e, u), l.memoizedState = n.state, t = l.child) : t = _l(
          t,
          l,
          u
        ), t;
      }
      function of(t, l, e, a) {
        return ia(), l.flags |= 256, Qt(t, l, e, a), l.child;
      }
      function pn(t) {
        return { baseLanes: t, cachePool: rf() };
      }
      function yn(t, l, e) {
        return t = t !== null ? t.childLanes & ~e : 0, l && (t |= ml), t;
      }
      function vf(t, l, e) {
        var a = l.pendingProps, u = !1, n = (l.flags & 128) !== 0, f;
        if ((f = n) || (f = t !== null && t.memoizedState === null ? !1 : (Ct.current & 2) !== 0), f && (u = !0, l.flags &= -129), f = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
          if (ot) {
            if (u ? Xl(l) : Zl(), ot) {
              var v = Zt, p;
              (p = v) && (v = vm(
                v,
                zl
              ), v !== null ? (l.memoizedState = {
                dehydrated: v,
                treeContext: pe !== null ? { id: Al, overflow: Dl } : null,
                retryLane: 536870912
              }, p = s(18, null, null, 0), p.stateNode = v, p.return = l, l.child = p, xt = l, Zt = null, p = !0) : p = !1), p || ne(l);
            }
            if (v = l.memoizedState, v !== null && (v = v.dehydrated, v !== null))
              return uc(v) ? l.lanes = 16 : l.lanes = 536870912, null;
            Ml(l);
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
            f = am(v).digest, a = Error(o(419)), a.stack = "", a.digest = f, fa({ value: a, source: null, stack: null }), l = Sn(
              t,
              l,
              e
            );
          else if (jt || ra(
            t,
            l,
            e,
            !1
          ), f = (e & t.childLanes) !== 0, jt || f) {
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
                throw p.retryLane = a, Yl(t, a), Jt(f, t, a), Gs;
            }
            ac(v) || Gn(), l = Sn(
              t,
              l,
              e
            );
          } else
            ac(v) ? (l.flags |= 128, l.child = t.child, l = cv.bind(
              null,
              t
            ), um(v, l), l = null) : (t = p.treeContext, cl && (Zt = fm(v), xt = l, ot = !0, rl = null, zl = !1, t !== null && (fl[sl++] = Al, fl[sl++] = Dl, fl[sl++] = pe, Al = t.id, Dl = t.overflow, pe = l)), l = rn(
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
        ), u.flags |= 2), u.return = l, a.return = l, a.sibling = u, l.child = a, a = u, u = l.child, v = t.child.memoizedState, v === null ? v = pn(e) : (p = v.cachePool, p !== null ? (n = Rl ? gt._currentValue : gt._currentValue2, p = p.parent !== n ? { parent: n, pool: n } : p) : p = rf(), v = {
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
        return ls(t, l, 0, null);
      }
      function Sn(t, l, e) {
        return ye(l, t.child, null, e), t = rn(
          l,
          l.pendingProps.children
        ), t.flags |= 2, l.memoizedState = null, t;
      }
      function mf(t, l, e) {
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
        if (Qt(t, l, a.children, e), a = Ct.current, (a & 2) !== 0)
          a = a & 1 | 2, l.flags |= 128;
        else {
          if (t !== null && (t.flags & 128) !== 0)
            t: for (t = l.child; t !== null; ) {
              if (t.tag === 13)
                t.memoizedState !== null && mf(t, e, l);
              else if (t.tag === 19)
                mf(t, e, l);
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
        switch (N(Ct, a), u) {
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
      function _l(t, l, e) {
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
      function zn(t, l) {
        return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && eu(t)));
      }
      function Po(t, l, e) {
        switch (l.tag) {
          case 3:
            et(
              l,
              l.stateNode.containerInfo
            ), Kl(l, gt, t.memoizedState.cache), ia();
            break;
          case 27:
          case 5:
            Oe(l);
            break;
          case 4:
            et(
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
              return a.dehydrated !== null ? (Xl(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? vf(
                t,
                l,
                e
              ) : (Xl(l), t = _l(
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
                return df(
                  t,
                  l,
                  e
                );
              l.flags |= 128;
            }
            if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), N(Ct, Ct.current), a) break;
            return null;
          case 22:
          case 23:
            return l.lanes = 0, nf(t, l, e);
          case 24:
            Kl(l, gt, t.memoizedState.cache);
        }
        return _l(t, l, e);
      }
      function pf(t, l, e) {
        if (t !== null)
          if (t.memoizedProps !== l.pendingProps)
            jt = !0;
          else {
            if (!zn(t, e) && (l.flags & 128) === 0)
              return jt = !1, Po(
                t,
                l,
                e
              );
            jt = (t.flags & 131072) !== 0;
          }
        else
          jt = !1, ot && (l.flags & 1048576) !== 0 && k(l, hu, l.index);
        switch (l.lanes = 0, l.tag) {
          case 16:
            t: {
              t = l.pendingProps;
              var a = l.elementType, u = a._init;
              if (a = u(a._payload), l.type = a, typeof a == "function")
                Kn(a) ? (t = ce(a, t), l.tag = 1, l = sf(
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
                throw l = C(a) || a, Error(o(306, l, ""));
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
            ), sf(
              t,
              l,
              a,
              u,
              e
            );
          case 3:
            t: {
              if (et(
                l,
                l.stateNode.containerInfo
              ), t === null) throw Error(o(387));
              var n = l.pendingProps;
              u = l.memoizedState, a = u.element, xu(t, l), va(l, n, null, e);
              var f = l.memoizedState;
              if (n = f.cache, Kl(l, gt, n), n !== u.cache && Nn(
                l,
                [gt],
                e,
                !0
              ), oa(), n = f.element, cl && u.isDehydrated)
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
                  a = Y(
                    Error(o(424)),
                    l
                  ), fa(a), l = of(
                    t,
                    l,
                    n,
                    e
                  );
                  break t;
                } else
                  for (cl && (Zt = im(
                    l.stateNode.containerInfo
                  ), xt = l, ot = !0, rl = null, zl = !0), e = Ys(
                    l,
                    null,
                    n,
                    e
                  ), l.child = e; e; )
                    e.flags = e.flags & -3 | 4096, e = e.sibling;
              else {
                if (ia(), n === a) {
                  l = _l(
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
              return ya(t, l), t === null ? (e = Os(
                l.type,
                null,
                l.pendingProps,
                null
              )) ? l.memoizedState = e : ot || (l.stateNode = bm(
                l.type,
                l.pendingProps,
                Il.current,
                l
              )) : l.memoizedState = Os(
                l.type,
                t.memoizedProps,
                l.pendingProps,
                t.memoizedState
              ), null;
          case 27:
            if (Xt)
              return Oe(l), t === null && Xt && ot && (a = l.stateNode = js(
                l.type,
                l.pendingProps,
                Il.current,
                Yt.current,
                !1
              ), xt = l, zl = !0, Zt = gs(a)), a = l.pendingProps.children, t !== null || ot ? Qt(
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
            return t === null && ot && (zm(
              l.type,
              l.pendingProps,
              Yt.current
            ), (u = a = Zt) && (a = sm(
              a,
              l.type,
              l.pendingProps,
              zl
            ), a !== null ? (l.stateNode = a, xt = l, Zt = gs(a), zl = !1, u = !0) : u = !1), u || ne(l)), Oe(l), u = l.type, n = l.pendingProps, f = t !== null ? t.memoizedProps : null, a = n.children, mu(u, n) ? a = null : f !== null && mu(u, f) && (l.flags |= 32), l.memoizedState !== null && (u = wu(
              t,
              l,
              Ko,
              null,
              null,
              e
            ), Rl ? de._currentValue = u : de._currentValue2 = u), ya(t, l), Qt(t, l, a, e), l.child;
          case 6:
            return t === null && ot && (Tm(
              l.pendingProps,
              Yt.current
            ), (t = e = Zt) && (e = om(
              e,
              l.pendingProps,
              zl
            ), e !== null ? (l.stateNode = e, xt = l, Zt = null, t = !0) : t = !1), t || ne(l)), null;
          case 13:
            return vf(t, l, e);
          case 4:
            return et(
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
            return u = l.type._context, a = l.pendingProps.children, ie(l), u = Vt(u), a = a(u), l.flags |= 1, Qt(
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
            return ie(l), a = Vt(gt), t === null ? (u = Mn(), u === null && (u = St, n = bn(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), l.memoizedState = {
              parent: a,
              cache: u
            }, Ju(l), Kl(l, gt, u)) : ((t.lanes & e) !== 0 && (xu(t, l), va(l, null, null, e), oa()), u = t.memoizedState, n = l.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), Kl(l, gt, a)) : (a = n.cache, Kl(l, gt, a), a !== u.cache && Nn(
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
      function Kl(t, l, e) {
        Rl ? (N(gu, l._currentValue), l._currentValue = e) : (N(gu, l._currentValue2), l._currentValue2 = e);
      }
      function Hl(t) {
        var l = gu.current;
        Rl ? t._currentValue = l : t._currentValue2 = l, T(gu);
      }
      function Tn(t, l, e) {
        for (; t !== null; ) {
          var a = t.alternate;
          if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
          t = t.return;
        }
      }
      function Nn(t, l, e, a) {
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
                  n.lanes |= e, v = n.alternate, v !== null && (v.lanes |= e), Tn(
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
              var v = u.type;
              al(u.pendingProps.value, f.value) || (t !== null ? t.push(v) : t = [v]);
            }
          } else if (u === Su.current) {
            if (f = u.alternate, f === null) throw Error(o(387));
            f.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(de) : t = [de]);
          }
          u = u.return;
        }
        t !== null && Nn(
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
        Ee = t, Cl = null, t = t.dependencies, t !== null && (t.firstContext = null);
      }
      function Vt(t) {
        return yf(Ee, t);
      }
      function au(t, l) {
        return Ee === null && ie(t), yf(t, l);
      }
      function yf(t, l) {
        var e = Rl ? l._currentValue : l._currentValue2;
        if (l = { context: l, memoizedValue: e, next: null }, Cl === null) {
          if (t === null) throw Error(o(308));
          Cl = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
        } else Cl = Cl.next = l;
        return e;
      }
      function bn() {
        return {
          controller: new Gm(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function ha(t) {
        t.refCount--, t.refCount === 0 && Xm(Zm, function() {
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
      function rf() {
        var t = Mn();
        return t === null ? null : {
          parent: Rl ? gt._currentValue : gt._currentValue2,
          pool: t
        };
      }
      function wt(t) {
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
        if (Gt)
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
              e && a && (n = Ns(
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
        if (wl)
          for (var u = l.child; u !== null; ) {
            if (u.tag === 5) {
              var n = u.stateNode;
              e && a && (n = Ns(
                n,
                u.type,
                u.memoizedProps
              )), zs(t, n);
            } else if (u.tag === 6)
              n = u.stateNode, e && a && (n = bs(
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
        if (wl && hf(t, l)) {
          t = l.stateNode;
          var e = t.containerInfo, a = Es();
          Sf(a, l, !1, !1), t.pendingChildren = a, wt(l), em(e, a);
        }
      }
      function _n(t, l, e, a) {
        if (Gt)
          t.memoizedProps !== a && wt(l);
        else if (wl) {
          var u = t.stateNode, n = t.memoizedProps;
          if ((t = hf(t, l)) || n !== a) {
            var f = Yt.current;
            n = lm(
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
            ) && wt(l), l.stateNode = n, t ? gn(n, l, !1, !1) : wt(l));
          } else l.stateNode = u;
        }
      }
      function Hn(t, l, e) {
        if (Uv(l, e)) {
          if (t.flags |= 16777216, !rs(l, e))
            if (Jf()) t.flags |= 8192;
            else
              throw We = Tu, yc;
        } else t.flags &= -16777217;
      }
      function zf(t, l) {
        if (gm(l)) {
          if (t.flags |= 16777216, !Cs(l))
            if (Jf()) t.flags |= 8192;
            else
              throw We = Tu, yc;
        } else t.flags &= -16777217;
      }
      function nu(t, l) {
        l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? lt() : 536870912, t.lanes |= l, ta |= l);
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
        switch (Nt(l), l.tag) {
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
            return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Hl(gt), Ut(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (ca(l) ? wt(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, rl !== null && (Yn(rl), rl = null))), Ef(t, l), bt(l), null;
          case 26:
            if (il) {
              e = l.type;
              var u = l.memoizedState;
              return t === null ? (wt(l), u !== null ? (bt(l), zf(
                l,
                u
              )) : (bt(l), Hn(
                l,
                e,
                a
              ))) : u ? u !== t.memoizedState ? (wt(l), bt(l), zf(
                l,
                u
              )) : (bt(l), l.flags &= -16777217) : (Gt ? t.memoizedProps !== a && wt(l) : _n(
                t,
                l,
                e,
                a
              ), bt(l), Hn(
                l,
                e,
                a
              )), null;
            }
          case 27:
            if (Xt) {
              if (Xa(l), e = Il.current, u = l.type, t !== null && l.stateNode != null)
                Gt ? t.memoizedProps !== a && wt(l) : _n(
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
                t = Yt.current, ca(l) ? li(l, t) : (t = js(
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
              _n(t, l, e, a);
            else {
              if (!a) {
                if (l.stateNode === null)
                  throw Error(o(166));
                return bt(l), null;
              }
              t = Yt.current, ca(l) ? li(l, t) : (u = Nv(
                e,
                a,
                Il.current,
                t,
                l
              ), gn(u, l, !1, !1), l.stateNode = u, ds(
                u,
                e,
                a,
                t
              ) && wt(l));
            }
            return bt(l), Hn(
              l,
              l.type,
              l.pendingProps
            ), null;
          case 6:
            if (t && l.stateNode != null)
              e = t.memoizedProps, Gt ? e !== a && wt(l) : wl && (e !== a ? (l.stateNode = ps(
                a,
                Il.current,
                Yt.current,
                l
              ), wt(l)) : l.stateNode = t.stateNode);
            else {
              if (typeof a != "string" && l.stateNode === null)
                throw Error(o(166));
              if (t = Il.current, e = Yt.current, ca(l)) {
                if (!cl) throw Error(o(176));
                if (t = l.stateNode, e = l.memoizedProps, a = null, u = xt, u !== null)
                  switch (u.tag) {
                    case 27:
                    case 5:
                      a = u.memoizedProps;
                  }
                dm(
                  t,
                  e,
                  l,
                  a
                ) || ne(l);
              } else
                l.stateNode = ps(
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
                  pm(u, l);
                } else
                  ia(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
                bt(l), u = !1;
              } else
                rl !== null && (Yn(rl), rl = null), u = !0;
              if (!u)
                return l.flags & 256 ? (Ml(l), l) : (Ml(l), null);
            }
            if (Ml(l), (l.flags & 128) !== 0)
              return l.lanes = e, l;
            if (e = a !== null, t = t !== null && t.memoizedState !== null, e) {
              a = l.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool);
              var n = null;
              a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048);
            }
            return e !== t && e && (l.child.flags |= 8192), nu(l, l.updateQueue), bt(l), null;
          case 4:
            return Ut(), Ef(t, l), t === null && gv(l.stateNode.containerInfo), bt(l), null;
          case 10:
            return Hl(l.type), bt(l), null;
          case 19:
            if (T(Ct), u = l.memoizedState, u === null)
              return bt(l), null;
            if (a = (l.flags & 128) !== 0, n = u.rendering, n === null)
              if (a) Sa(u, !1);
              else {
                if (Ht !== 0 || t !== null && (t.flags & 128) !== 0)
                  for (t = l.child; t !== null; ) {
                    if (n = Pa(t), n !== null) {
                      for (l.flags |= 128, Sa(u, !1), t = n.updateQueue, l.updateQueue = t, nu(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                        ts(e, t), e = e.sibling;
                      return N(
                        Ct,
                        Ct.current & 1 | 2
                      ), l.child;
                    }
                    t = t.sibling;
                  }
                u.tail !== null && yl() > Ca && (l.flags |= 128, a = !0, Sa(u, !1), l.lanes = 4194304);
              }
            else {
              if (!a)
                if (t = Pa(n), t !== null) {
                  if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, nu(l, t), Sa(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !ot)
                    return bt(l), null;
                } else
                  2 * yl() - u.renderingStartTime > Ca && e !== 536870912 && (l.flags |= 128, a = !0, Sa(u, !1), l.lanes = 4194304);
              u.isBackwards ? (n.sibling = l.child, l.child = n) : (t = u.last, t !== null ? t.sibling = n : l.child = n, u.last = n);
            }
            return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = yl(), l.sibling = null, t = Ct.current, N(
              Ct,
              a ? t & 1 | 2 : t & 1
            ), l) : (bt(l), null);
          case 22:
          case 23:
            return Ml(l), Fu(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (bt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : bt(l), e = l.updateQueue, e !== null && nu(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && T(ze), null;
          case 24:
            return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Hl(gt), bt(l), null;
          case 25:
            return null;
        }
        throw Error(o(156, l.tag));
      }
      function Io(t, l) {
        switch (Nt(l), l.tag) {
          case 1:
            return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
          case 3:
            return Hl(gt), Ut(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
          case 26:
          case 27:
          case 5:
            return Xa(l), null;
          case 13:
            if (Ml(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
              if (l.alternate === null)
                throw Error(o(340));
              ia();
            }
            return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
          case 19:
            return T(Ct), null;
          case 4:
            return Ut(), null;
          case 10:
            return Hl(l.type), null;
          case 22:
          case 23:
            return Ml(l), Fu(), t !== null && T(ze), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
          case 24:
            return Hl(gt), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function Tf(t, l) {
        switch (Nt(l), l.tag) {
          case 3:
            Hl(gt), Ut();
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
            Ml(l);
            break;
          case 19:
            T(Ct);
            break;
          case 10:
            Hl(l.type);
            break;
          case 22:
          case 23:
            Ml(l), Fu(), t !== null && T(ze);
            break;
          case 24:
            Hl(gt);
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
                  } catch (b) {
                    pt(
                      u,
                      p,
                      b
                    );
                  }
                }
              }
              a = a.next;
            } while (a !== n);
          }
        } catch (b) {
          pt(l, l.return, b);
        }
      }
      function Nf(t) {
        var l = t.updateQueue;
        if (l !== null) {
          var e = t.stateNode;
          try {
            si(l, e);
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
                var u = Na(a);
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
          Jv(a, l, e, t);
        } catch (u) {
          pt(t, t.return, u);
        }
      }
      function gf(t, l, e) {
        try {
          xv(
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
      function _f(t) {
        return t.tag === 5 || t.tag === 3 || (il ? t.tag === 26 : !1) || (Xt ? t.tag === 27 : !1) || t.tag === 4;
      }
      function On(t) {
        t: for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || _f(t.return)) return null;
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
          t = t.stateNode, l ? Wv(e, t, l) : Zv(e, t);
        else if (!(a === 4 || Xt && a === 27) && (t = t.child, t !== null))
          for (Un(t, l, e), t = t.sibling; t !== null; )
            Un(t, l, e), t = t.sibling;
      }
      function cu(t, l, e) {
        var a = t.tag;
        if (a === 5 || a === 6)
          t = t.stateNode, l ? Lv(e, t, l) : Xv(e, t);
        else if (!(a === 4 || Xt && a === 27) && (t = t.child, t !== null))
          for (cu(t, l, e), t = t.sibling; t !== null; )
            cu(t, l, e), t = t.sibling;
      }
      function Hf(t, l, e) {
        t = t.containerInfo;
        try {
          Ts(t, e);
        } catch (a) {
          pt(l, l.return, a);
        }
      }
      function $o(t, l) {
        for (zv(t.containerInfo), qt = l; qt !== null; )
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
                  (l & 1024) !== 0 && Gt && tm(t.stateNode.containerInfo);
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
        return f = Ks, Ks = !1, f;
      }
      function Of(t, l, e) {
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
            a & 64 && Nf(e), a & 512 && fe(e, e.return);
            break;
          case 3:
            if (Ol(t, e), a & 64 && (a = e.updateQueue, a !== null)) {
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
            Ol(t, e), a & 4 && Rf(t, e);
            break;
          case 22:
            if (u = e.memoizedState !== null || jl, !u) {
              l = l !== null && l.memoizedState !== null || _t;
              var n = jl, f = _t;
              jl = u, (_t = l) && !f ? xl(
                t,
                e,
                (e.subtreeFlags & 8772) !== 0
              ) : Ol(t, e), jl = n, _t = f;
            }
            a & 512 && (e.memoizedProps.mode === "manual" ? fe(e, e.return) : It(e, e.return));
            break;
          default:
            Ol(t, e);
        }
      }
      function Uf(t) {
        var l = t.alternate;
        l !== null && (t.alternate = null, Uf(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && Ov(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
      }
      function pl(t, l, e) {
        for (e = e.child; e !== null; )
          Rn(
            t,
            l,
            e
          ), e = e.sibling;
      }
      function Rn(t, l, e) {
        if (el && typeof el.onCommitFiberUnmount == "function")
          try {
            el.onCommitFiberUnmount(ga, e);
          } catch {
          }
        switch (e.tag) {
          case 26:
            if (il) {
              _t || It(e, l), pl(
                t,
                l,
                e
              ), e.memoizedState ? Rs(e.memoizedState) : e.stateNode && Ds(e.stateNode);
              break;
            }
          case 27:
            if (Xt) {
              _t || It(e, l);
              var a = Dt, u = ul;
              Dt = e.stateNode, pl(
                t,
                l,
                e
              ), Um(e.stateNode), Dt = a, ul = u;
              break;
            }
          case 5:
            _t || It(e, l);
          case 6:
            if (Gt) {
              if (a = Dt, u = ul, Dt = null, pl(
                t,
                l,
                e
              ), Dt = a, ul = u, Dt !== null)
                if (ul)
                  try {
                    Pv(Dt, e.stateNode);
                  } catch (n) {
                    pt(
                      e,
                      l,
                      n
                    );
                  }
                else
                  try {
                    Fv(Dt, e.stateNode);
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
            Gt && Dt !== null && (ul ? Em(
              Dt,
              e.stateNode
            ) : Sm(Dt, e.stateNode));
            break;
          case 4:
            Gt ? (a = Dt, u = ul, Dt = e.stateNode.containerInfo, ul = !0, pl(
              t,
              l,
              e
            ), Dt = a, ul = u) : (wl && Hf(
              e.stateNode,
              e,
              Es()
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
            _t || Jl(2, e, l), _t || Jl(4, e, l), pl(
              t,
              l,
              e
            );
            break;
          case 1:
            _t || (It(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && bf(
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
            _t || It(e, l), _t = (a = _t) || e.memoizedState !== null, pl(
              t,
              l,
              e
            ), _t = a;
            break;
          default:
            pl(
              t,
              l,
              e
            );
        }
      }
      function Rf(t, l) {
        if (cl && l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
          try {
            hm(t);
          } catch (e) {
            pt(l, l.return, e);
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
          var u = iv.bind(null, t, a);
          e.has(a) || (e.add(a), a.then(u, u));
        });
      }
      function Ft(t, l) {
        var e = l.deletions;
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var u = e[a], n = t, f = l;
            if (Gt) {
              var v = f;
              t: for (; v !== null; ) {
                switch (v.tag) {
                  case 27:
                  case 5:
                    Dt = v.stateNode, ul = !1;
                    break t;
                  case 3:
                    Dt = v.stateNode.containerInfo, ul = !0;
                    break t;
                  case 4:
                    Dt = v.stateNode.containerInfo, ul = !0;
                    break t;
                }
                v = v.return;
              }
              if (Dt === null) throw Error(o(160));
              Rn(n, f, u), Dt = null, ul = !1;
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
            Ft(l, t), $t(t), a & 4 && (Jl(3, t, t.return), Ea(3, t), Jl(5, t, t.return));
            break;
          case 1:
            Ft(l, t), $t(t), a & 512 && (_t || e === null || It(e, e.return)), a & 64 && jl && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
            break;
          case 26:
            if (il) {
              var u = hl;
              Ft(l, t), $t(t), a & 512 && (_t || e === null || It(e, e.return)), a & 4 && (a = e !== null ? e.memoizedState : null, l = t.memoizedState, e === null ? l === null ? t.stateNode === null ? t.stateNode = Nm(
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
            if (Xt && a & 4 && t.alternate === null) {
              u = t.stateNode;
              var n = t.memoizedProps;
              try {
                Hm(u), Om(
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
            if (Ft(l, t), $t(t), a & 512 && (_t || e === null || It(e, e.return)), Gt) {
              if (t.flags & 32) {
                l = t.stateNode;
                try {
                  Ss(l);
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
            if (Ft(l, t), $t(t), a & 4 && Gt) {
              if (t.stateNode === null)
                throw Error(o(162));
              a = t.memoizedProps, e = e !== null ? e.memoizedProps : a, l = t.stateNode;
              try {
                Kv(l, e, a);
              } catch (A) {
                pt(t, t.return, A);
              }
            }
            break;
          case 3:
            if (il ? (Mm(), u = hl, hl = nc(l.containerInfo), Ft(l, t), hl = u) : Ft(l, t), $t(t), a & 4) {
              if (Gt && cl && e !== null && e.memoizedState.isDehydrated)
                try {
                  rm(l.containerInfo);
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
            Ec && (Ec = !1, Df(t));
            break;
          case 4:
            il ? (e = hl, hl = nc(
              t.stateNode.containerInfo
            ), Ft(l, t), $t(t), hl = e) : (Ft(l, t), $t(t)), a & 4 && wl && Hf(
              t.stateNode,
              t,
              t.stateNode.pendingChildren
            );
            break;
          case 12:
            Ft(l, t), $t(t);
            break;
          case 13:
            Ft(l, t), $t(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (bc = yl()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, An(t, a)));
            break;
          case 22:
            a & 512 && (_t || e === null || It(e, e.return)), u = t.memoizedState !== null;
            var f = e !== null && e.memoizedState !== null, v = jl, p = _t;
            if (jl = v || u, _t = p || f, Ft(l, t), _t = p, jl = v, $t(t), l = t.stateNode, l._current = t, l._visibility &= -3, l._visibility |= l._pendingVisibility & 2, a & 8192 && (l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (l = jl || _t, e === null || f || l || Ae(t)), Gt && (t.memoizedProps === null || t.memoizedProps.mode !== "manual"))) {
              t: if (e = null, Gt)
                for (l = t; ; ) {
                  if (l.tag === 5 || il && l.tag === 26 || Xt && l.tag === 27) {
                    if (e === null) {
                      f = e = l;
                      try {
                        n = f.stateNode, u ? wv(n) : $v(
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
                        var b = f.stateNode;
                        u ? Iv(b) : kv(b, f.memoizedProps);
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
            a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, An(t, e))));
            break;
          case 19:
            Ft(l, t), $t(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, An(t, a)));
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
                  if (Xt) {
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
                  var v = On(t);
                  cu(t, v, f);
                  break;
                case 3:
                case 4:
                  var p = a.stateNode.containerInfo, b = On(t);
                  Un(
                    t,
                    b,
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
      function Df(t) {
        if (t.subtreeFlags & 1024)
          for (t = t.child; t !== null; ) {
            var l = t;
            Df(l), l.tag === 5 && l.flags & 1024 && Dv(l.stateNode), t = t.sibling;
          }
      }
      function Ol(t, l) {
        if (l.subtreeFlags & 8772)
          for (l = l.child; l !== null; )
            Of(t, l.alternate, l), l = l.sibling;
      }
      function Ae(t) {
        for (t = t.child; t !== null; ) {
          var l = t;
          switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Jl(4, l, l.return), Ae(l);
              break;
            case 1:
              It(l, l.return);
              var e = l.stateNode;
              typeof e.componentWillUnmount == "function" && bf(
                l,
                l.return,
                e
              ), Ae(l);
              break;
            case 26:
            case 27:
            case 5:
              It(l, l.return), Ae(l);
              break;
            case 22:
              It(l, l.return), l.memoizedState === null && Ae(l);
              break;
            default:
              Ae(l);
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
              ), Ea(4, n);
              break;
            case 1:
              if (xl(
                u,
                n,
                e
              ), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
                try {
                  u.componentDidMount();
                } catch (b) {
                  pt(a, a.return, b);
                }
              if (a = n, u = a.updateQueue, u !== null) {
                var v = a.stateNode;
                try {
                  var p = u.shared.hiddenCallbacks;
                  if (p !== null)
                    for (u.shared.hiddenCallbacks = null, u = 0; u < p.length; u++)
                      fi(p[u], v);
                } catch (b) {
                  pt(a, a.return, b);
                }
              }
              e && f & 64 && Nf(n), fe(n, n.return);
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
              ), e && f & 4 && Rf(u, n);
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
      function Dn(t, l) {
        var e = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && ha(e));
      }
      function Cn(t, l) {
        t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && ha(t));
      }
      function Ll(t, l, e, a) {
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
            ) : za(
              t,
              l
            ) : n._visibility & 4 ? Ll(
              t,
              l,
              e,
              a
            ) : (n._visibility |= 4, De(
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
      function De(t, l, e, a, u) {
        for (u = u && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
          var n = t, f = l, v = e, p = a, b = f.flags;
          switch (f.tag) {
            case 0:
            case 11:
            case 15:
              De(
                n,
                f,
                v,
                p,
                u
              ), Ea(8, f);
              break;
            case 23:
              break;
            case 22:
              var A = f.stateNode;
              f.memoizedState !== null ? A._visibility & 4 ? De(
                n,
                f,
                v,
                p,
                u
              ) : za(
                n,
                f
              ) : (A._visibility |= 4, De(
                n,
                f,
                v,
                p,
                u
              )), u && b & 2048 && Dn(
                f.alternate,
                f
              );
              break;
            case 24:
              De(
                n,
                f,
                v,
                p,
                u
              ), u && b & 2048 && Cn(f.alternate, f);
              break;
            default:
              De(
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
      function za(t, l) {
        if (l.subtreeFlags & 10256)
          for (l = l.child; l !== null; ) {
            var e = t, a = l, u = a.flags;
            switch (a.tag) {
              case 22:
                za(e, a), u & 2048 && Dn(
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
        if (t.subtreeFlags & $e)
          for (t = t.child; t !== null; )
            jf(t), t = t.sibling;
      }
      function jf(t) {
        switch (t.tag) {
          case 26:
            se(t), t.flags & $e && (t.memoizedState !== null ? _m(
              hl,
              t.memoizedState,
              t.memoizedProps
            ) : hs(t.type, t.memoizedProps));
            break;
          case 5:
            se(t), t.flags & $e && hs(t.type, t.memoizedProps);
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
            t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = $e, $e = 16777216, se(t), $e = l) : se(t));
            break;
          default:
            se(t);
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
      function Ta(t) {
        var l = t.deletions;
        if ((t.flags & 16) !== 0) {
          if (l !== null)
            for (var e = 0; e < l.length; e++) {
              var a = l[e];
              qt = a, Qf(
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
            Ta(t), t.flags & 2048 && Jl(9, t, t.return);
            break;
          case 3:
            Ta(t);
            break;
          case 12:
            Ta(t);
            break;
          case 22:
            var l = t.stateNode;
            t.memoizedState !== null && l._visibility & 4 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -5, iu(t)) : Ta(t);
            break;
          default:
            Ta(t);
        }
      }
      function iu(t) {
        var l = t.deletions;
        if ((t.flags & 16) !== 0) {
          if (l !== null)
            for (var e = 0; e < l.length; e++) {
              var a = l[e];
              qt = a, Qf(
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
              Jl(8, l, l.return), iu(l);
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
      function Qf(t, l) {
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
              ha(e.memoizedState.cache);
          }
          if (a = e.child, a !== null) a.return = e, qt = a;
          else
            t: for (e = t; qt !== null; ) {
              a = qt;
              var u = a.sibling, n = a.return;
              if (Uf(a), a === e) {
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
      function jn(t) {
        var l = ys(t);
        if (l != null) {
          if (typeof l.memoizedProps["data-testname"] != "string")
            throw Error(o(364));
          return l;
        }
        if (t = qv(t), t === null) throw Error(o(362));
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
                if (u !== 5 && u !== 26 && u !== 27 || !Ma(a)) {
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
            if ((e === 5 || e === 26 || e === 27) && Yv(t.stateNode, l.value))
              return !0;
            break;
          case Ru:
            if ((e === 5 || e === 6 || e === 26 || e === 27) && (t = Qv(t), t !== null && 0 <= t.indexOf(l.value)))
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
            return "<" + (C(t.value) || "Unknown") + ">";
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
      function Yf(t, l) {
        var e = [];
        t = [t, 0];
        for (var a = 0; a < t.length; ) {
          var u = t[a++], n = u.tag, f = t[a++], v = l[f];
          if (n !== 5 && n !== 26 && n !== 27 || !Ma(u)) {
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
        if (!ba) throw Error(o(363));
        t = jn(t), t = Yf(t, l), l = [], t = Array.from(t);
        for (var e = 0; e < t.length; ) {
          var a = t[e++], u = a.tag;
          if (u === 5 || u === 26 || u === 27)
            Ma(a) || l.push(a.stateNode);
          else
            for (a = a.child; a !== null; )
              t.push(a), a = a.sibling;
        }
        return l;
      }
      function kt() {
        if ((rt & 2) !== 0 && it !== 0)
          return it & -it;
        if (F.T !== null) {
          var t = xe;
          return t !== 0 ? t : Ku();
        }
        return _v();
      }
      function Vf() {
        ml === 0 && (ml = (it & 536870912) === 0 || ot ? st() : 536870912);
        var t = vl.current;
        return t !== null && (t.flags |= 32), ml;
      }
      function Jt(t, l, e) {
        (t === St && Et === 2 || t.cancelPendingCommit !== null) && (Ce(t, 0), Ul(
          t,
          it,
          ml,
          !1
        )), I(t, e), ((rt & 2) === 0 || t !== St) && (t === St && ((rt & 2) === 0 && (Te |= e), Ht === 4 && Ul(
          t,
          it,
          ml,
          !1
        )), El(t));
      }
      function Gf(t, l, e) {
        if ((rt & 6) !== 0) throw Error(o(327));
        var a = !e && (l & 60) === 0 && (l & t.expiredLanes) === 0 || G(t, l), u = a ? ev(t, l) : Xn(t, l, !0), n = a;
        do {
          if (u === 0) {
            ke && !a && Ul(t, l, 0, !1);
            break;
          } else if (u === 6)
            Ul(
              t,
              l,
              0,
              !ql
            );
          else {
            if (e = t.current.alternate, n && !tv(e)) {
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
                  u = Da;
                  var p = cl && v.current.memoizedState.isDehydrated;
                  if (p && (Ce(v, f).flags |= 256), f = Xn(
                    v,
                    f,
                    !1
                  ), f !== 2) {
                    if (zc && !p) {
                      v.errorRecoveryDisabledLanes |= n, Te |= n, u = 4;
                      break t;
                    }
                    n = bl, bl = u, n !== null && Yn(n);
                  }
                  u = f;
                }
                if (n = !1, u !== 2) continue;
              }
            }
            if (u === 1) {
              Ce(t, 0), Ul(t, l, 0, !0);
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
                  bl = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(o(329));
              }
              if (a.finishedWork = e, a.finishedLanes = l, (l & 62914560) === l && (n = bc + 300 - yl(), 10 < n)) {
                if (Ul(
                  a,
                  l,
                  ml,
                  !ql
                ), x(a, 0) !== 0) break t;
                a.timeoutHandle = bv(
                  Xf.bind(
                    null,
                    a,
                    e,
                    bl,
                    Au,
                    Nc,
                    l,
                    ml,
                    Te,
                    ta,
                    ql,
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
                Nc,
                l,
                ml,
                Te,
                ta,
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
      function Yn(t) {
        bl === null ? bl = t : bl.push.apply(
          bl,
          t
        );
      }
      function Xf(t, l, e, a, u, n, f, v, p, b, A, j, q) {
        var w = l.subtreeFlags;
        if ((w & 8192 || (w & 16785408) === 16785408) && (Rv(), jf(l), l = Av(), l !== null)) {
          t.cancelPendingCommit = l(
            wf.bind(
              null,
              t,
              e,
              a,
              u,
              f,
              v,
              p,
              1,
              j,
              q
            )
          ), Ul(t, n, f, !b);
          return;
        }
        wf(
          t,
          e,
          a,
          u,
          f,
          v,
          p,
          A,
          j,
          q
        );
      }
      function tv(t) {
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
        l &= ~Tc, l &= ~Te, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
        for (var u = l; 0 < u; ) {
          var n = 31 - ll(u), f = 1 << n;
          a[n] = -1, u &= ~f;
        }
        e !== 0 && $(t, e, l);
      }
      function Zf() {
        return (rt & 6) === 0 ? (Ue(0), !1) : !0;
      }
      function Vn() {
        if (ut !== null) {
          if (Et === 0)
            var t = ut.return;
          else
            t = ut, Cl = Ee = null, ku(t), Fe = null, Ua = 0, t = ut;
          for (; t !== null; )
            Tf(t.alternate, t), t = t.return;
          ut = null;
        }
      }
      function Ce(t, l) {
        t.finishedWork = null, t.finishedLanes = 0;
        var e = t.timeoutHandle;
        e !== ec && (t.timeoutHandle = ec, Mv(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Vn(), St = t, ut = e = Wl(t.current, null), it = l, Et = 0, nl = null, ql = !1, ke = G(t, l), zc = !1, ta = ml = Tc = Te = le = Ht = 0, bl = Da = null, Nc = !1, (l & 8) !== 0 && (l |= l & 32);
        var a = t.entangledLanes;
        if (a !== 0)
          for (t = t.entanglements, a &= l; 0 < a; ) {
            var u = 31 - ll(a), n = 1 << u;
            l |= t[u], a &= ~n;
          }
        return Bl = l, Za(), e;
      }
      function Kf(t, l) {
        tt = null, F.H = Nl, l === Oa ? (l = mi(), Et = 3) : l === yc ? (l = mi(), Et = 4) : Et = l === Gs ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, nl = l, ut === null && (Ht = 1, lu(
          t,
          Y(l, t.current)
        ));
      }
      function Jf() {
        var t = vl.current;
        return t === null ? !0 : (it & 4194176) === it ? Tl === null : (it & 62914560) === it || (it & 536870912) !== 0 ? t === Tl : !1;
      }
      function xf() {
        var t = F.H;
        return F.H = Nl, t === null ? Nl : t;
      }
      function Lf() {
        var t = F.A;
        return F.A = Km, t;
      }
      function Gn() {
        Ht = 4, ql || (it & 4194176) !== it && vl.current !== null || (ke = !0), (le & 134217727) === 0 && (Te & 134217727) === 0 || St === null || Ul(
          St,
          it,
          ml,
          !1
        );
      }
      function Xn(t, l, e) {
        var a = rt;
        rt |= 2;
        var u = xf(), n = Lf();
        (St !== t || it !== l) && (Au = null, Ce(t, l)), l = !1;
        var f = Ht;
        t: do
          try {
            if (Et !== 0 && ut !== null) {
              var v = ut, p = nl;
              switch (Et) {
                case 8:
                  Vn(), f = 6;
                  break t;
                case 3:
                case 2:
                case 6:
                  vl.current === null && (l = !0);
                  var b = Et;
                  if (Et = 0, nl = null, je(t, v, p, b), e && ke) {
                    f = 0;
                    break t;
                  }
                  break;
                default:
                  b = Et, Et = 0, nl = null, je(t, v, p, b);
              }
            }
            lv(), f = Ht;
            break;
          } catch (A) {
            Kf(t, A);
          }
        while (!0);
        return l && t.shellSuspendCounter++, Cl = Ee = null, rt = a, F.H = u, F.A = n, ut === null && (St = null, it = 0, Za()), f;
      }
      function lv() {
        for (; ut !== null; ) Wf(ut);
      }
      function ev(t, l) {
        var e = rt;
        rt |= 2;
        var a = xf(), u = Lf();
        St !== t || it !== l ? (Au = null, Ca = yl() + 500, Ce(t, l)) : ke = G(
          t,
          l
        );
        t: do
          try {
            if (Et !== 0 && ut !== null) {
              l = ut;
              var n = nl;
              l: switch (Et) {
                case 1:
                  Et = 0, nl = null, je(t, l, n, 1);
                  break;
                case 2:
                  if (oi(n)) {
                    Et = 0, nl = null, Ff(l);
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
                  oi(n) ? (Et = 0, nl = null, Ff(l)) : (Et = 0, nl = null, je(t, l, n, 7));
                  break;
                case 5:
                  var f = null;
                  switch (ut.tag) {
                    case 26:
                      f = ut.memoizedState;
                    case 5:
                    case 27:
                      var v = ut, p = v.type, b = v.pendingProps;
                      if (f ? Cs(f) : rs(p, b)) {
                        Et = 0, nl = null;
                        var A = v.sibling;
                        if (A !== null) ut = A;
                        else {
                          var j = v.return;
                          j !== null ? (ut = j, fu(j)) : ut = null;
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
                  Vn(), Ht = 6;
                  break t;
                default:
                  throw Error(o(462));
              }
            }
            av();
            break;
          } catch (q) {
            Kf(t, q);
          }
        while (!0);
        return Cl = Ee = null, F.H = a, F.A = u, rt = e, ut !== null ? 0 : (St = null, it = 0, Za(), Ht);
      }
      function av() {
        for (; ut !== null && !Dm(); )
          Wf(ut);
      }
      function Wf(t) {
        var l = pf(
          t.alternate,
          t,
          Bl
        );
        t.memoizedProps = t.pendingProps, l === null ? fu(t) : ut = l;
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
              it
            );
            break;
          case 11:
            l = ff(
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
            Tf(e, l), l = ut = ts(l, Bl), l = pf(e, l, Bl);
        }
        t.memoizedProps = t.pendingProps, l === null ? fu(t) : ut = l;
      }
      function je(t, l, e, a) {
        Cl = Ee = null, ku(l), Fe = null, Ua = 0;
        var u = l.return;
        try {
          if (Fo(
            t,
            u,
            l,
            e,
            it
          )) {
            Ht = 1, lu(
              t,
              Y(e, t.current)
            ), ut = null;
            return;
          }
        } catch (n) {
          if (u !== null) throw ut = u, n;
          Ht = 1, lu(
            t,
            Y(e, t.current)
          ), ut = null;
          return;
        }
        l.flags & 32768 ? (ot || a === 1 ? t = !0 : ke || (it & 536870912) !== 0 ? t = !1 : (ql = t = !0, (a === 2 || a === 3 || a === 6) && (a = vl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Pf(l, t)) : fu(l);
      }
      function fu(t) {
        var l = t;
        do {
          if ((l.flags & 32768) !== 0) {
            Pf(
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
            ut = e;
            return;
          }
          if (l = l.sibling, l !== null) {
            ut = l;
            return;
          }
          ut = l = t;
        } while (l !== null);
        Ht === 0 && (Ht = 5);
      }
      function Pf(t, l) {
        do {
          var e = Io(t.alternate, t);
          if (e !== null) {
            e.flags &= 32767, ut = e;
            return;
          }
          if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
            ut = t;
            return;
          }
          ut = t = e;
        } while (t !== null);
        Ht = 6, ut = null;
      }
      function wf(t, l, e, a, u, n, f, v, p, b) {
        var A = F.T, j = me();
        try {
          Pt(2), F.T = null, uv(
            t,
            l,
            e,
            a,
            j,
            u,
            n,
            f,
            v,
            p,
            b
          );
        } finally {
          F.T = A, Pt(j);
        }
      }
      function uv(t, l, e, a, u, n, f, v) {
        do
          oe();
        while (Ne !== null);
        if ((rt & 6) !== 0) throw Error(o(327));
        var p = t.finishedWork;
        if (a = t.finishedLanes, p === null) return null;
        if (t.finishedWork = null, t.finishedLanes = 0, p === t.current) throw Error(o(177));
        t.callbackNode = null, t.callbackPriority = 0, t.cancelPendingCommit = null;
        var b = p.lanes | p.childLanes;
        if (b |= oc, Kt(
          t,
          a,
          b,
          n,
          f,
          v
        ), t === St && (ut = St = null, it = 0), (p.subtreeFlags & 10256) === 0 && (p.flags & 10256) === 0 || Du || (Du = !0, Mc = b, gc = e, fv(fc, function() {
          return oe(), null;
        })), e = (p.flags & 15990) !== 0, (p.subtreeFlags & 15990) !== 0 || e ? (e = F.T, F.T = null, n = me(), Pt(2), f = rt, rt |= 4, $o(t, p), Af(p, t), Tv(t.containerInfo), t.current = p, Of(t, p.alternate, p), Cm(), rt = f, Pt(n), F.T = e) : t.current = p, Du ? (Du = !1, Ne = t, ja = a) : If(t, b), b = t.pendingLanes, b === 0 && (ee = null), S(p.stateNode), El(t), l !== null)
          for (u = t.onRecoverableError, p = 0; p < l.length; p++)
            b = l[p], u(b.value, {
              componentStack: b.stack
            });
        return (ja & 3) !== 0 && oe(), b = t.pendingLanes, (a & 4194218) !== 0 && (b & 42) !== 0 ? t === _c ? qa++ : (qa = 0, _c = t) : qa = 0, Ue(0), null;
      }
      function If(t, l) {
        (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, ha(l)));
      }
      function oe() {
        if (Ne !== null) {
          var t = Ne, l = Mc;
          Mc = 0;
          var e = Mt(ja), a = 32 > e ? 32 : e;
          e = F.T;
          var u = me();
          try {
            if (Pt(a), F.T = null, Ne === null)
              var n = !1;
            else {
              a = gc, gc = null;
              var f = Ne, v = ja;
              if (Ne = null, ja = 0, (rt & 6) !== 0)
                throw Error(o(331));
              var p = rt;
              if (rt |= 4, Bf(f.current), Cf(
                f,
                f.current,
                v,
                a
              ), rt = p, Ue(0, !1), el && typeof el.onPostCommitFiberRoot == "function")
                try {
                  el.onPostCommitFiberRoot(ga, f);
                } catch {
                }
              n = !0;
            }
            return n;
          } finally {
            Pt(u), F.T = e, If(t, l);
          }
        }
        return !1;
      }
      function $f(t, l, e) {
        l = Y(e, l), l = mn(t.stateNode, l, 2), t = Gl(t, l, 2), t !== null && (I(t, 2), El(t));
      }
      function pt(t, l, e) {
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
              if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ee === null || !ee.has(a))) {
                t = Y(e, t), e = tf(2), a = Gl(l, e, 2), a !== null && (lf(
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
      function Zn(t, l, e) {
        var a = t.pingCache;
        if (a === null) {
          a = t.pingCache = new Jm();
          var u = /* @__PURE__ */ new Set();
          a.set(l, u);
        } else
          u = a.get(l), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(l, u));
        u.has(e) || (zc = !0, u.add(e), t = nv.bind(null, t, l, e), l.then(t, t));
      }
      function nv(t, l, e) {
        var a = t.pingCache;
        a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, St === t && (it & e) === e && (Ht === 4 || Ht === 3 && (it & 62914560) === it && 300 > yl() - bc ? (rt & 2) === 0 && Ce(t, 0) : Tc |= e, ta === it && (ta = 0)), El(t);
      }
      function kf(t, l) {
        l === 0 && (l = lt()), t = Yl(t, l), t !== null && (I(t, l), El(t));
      }
      function cv(t) {
        var l = t.memoizedState, e = 0;
        l !== null && (e = l.retryLane), kf(t, e);
      }
      function iv(t, l) {
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
      function fv(t, l) {
        return yu(t, l);
      }
      function sv(t, l, e, a) {
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
          f = il && Xt ? Hs(t, e, Yt.current) ? 26 : qs(t) ? 27 : 5 : il ? Hs(
            t,
            e,
            Yt.current
          ) ? 26 : 5 : Xt && qs(t) ? 27 : 5;
        else
          t: switch (t) {
            case Be:
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
                  case dv:
                  case Fl:
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
      function ov(t, l, e, a, u, n, f, v) {
        this.tag = 1, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ec, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = P(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = P(0), this.hiddenUpdates = P(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function es(t, l, e, a, u, n, f, v, p, b, A, j) {
        return t = new ov(
          t,
          l,
          e,
          f,
          v,
          p,
          b,
          j
        ), l = 1, n === !0 && (l |= 24), n = s(3, null, null, l), t.current = n, n.stateNode = t, l = bn(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
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
        return t = R(l), t = t !== null ? Q(t) : null, t === null ? null : Na(t.stateNode);
      }
      function ns(t, l, e, a, u, n) {
        u = as(u), a.context === null ? a.context = u : a.pendingContext = u, a = Vl(l), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = Gl(t, a, l), e !== null && (Jt(e, t, l), sa(e, t, l));
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
      var at = {}, vv = _e, tl = fd(), Wn = Object.assign, mv = Symbol.for("react.element"), ou = Symbol.for("react.transitional.element"), qe = Symbol.for("react.portal"), Be = Symbol.for("react.fragment"), is = Symbol.for("react.strict_mode"), Fn = Symbol.for("react.profiler"), dv = Symbol.for("react.provider"), fs = Symbol.for("react.consumer"), Fl = Symbol.for("react.context"), Pn = Symbol.for("react.forward_ref"), wn = Symbol.for("react.suspense"), In = Symbol.for("react.suspense_list"), $n = Symbol.for("react.memo"), Pl = Symbol.for("react.lazy"), ss = Symbol.for("react.offscreen"), pv = Symbol.for("react.memo_cache_sentinel"), os = Symbol.iterator, yv = Symbol.for("react.client.reference"), F = vv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, kn, vs, tc = !1, vu = Array.isArray, rv = i.rendererVersion, hv = i.rendererPackageName, ms = i.extraDevToolsConfig, Na = i.getPublicInstance, Sv = i.getRootHostContext, Ev = i.getChildHostContext, zv = i.prepareForCommit, Tv = i.resetAfterCommit, Nv = i.createInstance, lc = i.appendInitialChild, ds = i.finalizeInitialChildren, mu = i.shouldSetTextContent, ps = i.createTextInstance, bv = i.scheduleTimeout, Mv = i.cancelTimeout, ec = i.noTimeout, Rl = i.isPrimaryRenderer;
      i.warnsIfNotActing;
      var Gt = i.supportsMutation, wl = i.supportsPersistence, cl = i.supportsHydration, ys = i.getInstanceFromNode;
      i.beforeActiveInstanceBlur, i.afterActiveInstanceBlur;
      var gv = i.preparePortalMount;
      i.prepareScopeUpdate, i.getInstanceFromScope;
      var Pt = i.setCurrentUpdatePriority, me = i.getCurrentUpdatePriority, _v = i.resolveUpdatePriority;
      i.resolveEventType, i.resolveEventTimeStamp;
      var Hv = i.shouldAttemptEagerTransition, Ov = i.detachDeletedInstance;
      i.requestPostPaintCallback;
      var Uv = i.maySuspendCommit, rs = i.preloadInstance, Rv = i.startSuspendingCommit, hs = i.suspendInstance, Av = i.waitForCommitToBeReady, Qe = i.NotPendingTransition, de = i.HostTransitionContext, Dv = i.resetFormInstance;
      i.bindToConsole;
      var Cv = i.supportsMicrotasks, jv = i.scheduleMicrotask, ba = i.supportsTestSelectors, qv = i.findFiberRoot, Bv = i.getBoundingRect, Qv = i.getTextContent, Ma = i.isHiddenSubtree, Yv = i.matchAccessibilityRole, Vv = i.setFocusIfFocusable, Gv = i.setupIntersectionObserver, Xv = i.appendChild, Zv = i.appendChildToContainer, Kv = i.commitTextUpdate, Jv = i.commitMount, xv = i.commitUpdate, Lv = i.insertBefore, Wv = i.insertInContainerBefore, Fv = i.removeChild, Pv = i.removeChildFromContainer, Ss = i.resetTextContent, wv = i.hideInstance, Iv = i.hideTextInstance, $v = i.unhideInstance, kv = i.unhideTextInstance, tm = i.clearContainer, lm = i.cloneInstance, Es = i.createContainerChildSet, zs = i.appendChildToContainerChildSet, em = i.finalizeContainerChildren, Ts = i.replaceContainerChildren, Ns = i.cloneHiddenInstance, bs = i.cloneHiddenTextInstance, ac = i.isSuspenseInstancePending, uc = i.isSuspenseInstanceFallback, am = i.getSuspenseInstanceFallbackErrorDetails, um = i.registerSuspenseInstanceRetry, nm = i.canHydrateFormStateMarker, cm = i.isFormStateMarkerMatching, Ms = i.getNextHydratableSibling, gs = i.getFirstHydratableChild, im = i.getFirstHydratableChildWithinContainer, fm = i.getFirstHydratableChildWithinSuspenseInstance, sm = i.canHydrateInstance, om = i.canHydrateTextInstance, vm = i.canHydrateSuspenseInstance, mm = i.hydrateInstance, dm = i.hydrateTextInstance, pm = i.hydrateSuspenseInstance, ym = i.getNextHydratableInstanceAfterSuspenseInstance, rm = i.commitHydratedContainer, hm = i.commitHydratedSuspenseInstance, Sm = i.clearSuspenseBoundary, Em = i.clearSuspenseBoundaryFromContainer, _s = i.shouldDeleteUnhydratedTailInstances;
      i.diffHydratedPropsForDevWarnings, i.diffHydratedTextForDevWarnings, i.describeHydratableInstanceForDevWarnings;
      var zm = i.validateHydratableInstance, Tm = i.validateHydratableTextInstance, il = i.supportsResources, Hs = i.isHostHoistableType, nc = i.getHoistableRoot, Os = i.getResource, Us = i.acquireResource, Rs = i.releaseResource, Nm = i.hydrateHoistable, As = i.mountHoistable, Ds = i.unmountHoistable, bm = i.createHoistableInstance, Mm = i.prepareToCommitHoistables, gm = i.mayResourceSuspendCommit, Cs = i.preloadResource, _m = i.suspendResource, Xt = i.supportsSingletons, js = i.resolveSingletonInstance, Hm = i.clearSingleton, Om = i.acquireSingletonInstance, Um = i.releaseSingletonInstance, qs = i.isHostSingletonType, cc = [], Ye = -1, Ve = {}, ll = Math.clz32 ? Math.clz32 : Z, Rm = Math.log, Am = Math.LN2, du = 128, pu = 4194304, yu = tl.unstable_scheduleCallback, ic = tl.unstable_cancelCallback, Dm = tl.unstable_shouldYield, Cm = tl.unstable_requestPaint, yl = tl.unstable_now, Bs = tl.unstable_ImmediatePriority, jm = tl.unstable_UserBlockingPriority, fc = tl.unstable_NormalPriority, qm = tl.unstable_IdlePriority, Bm = tl.log, Qm = tl.unstable_setDisableYieldValue, ga = null, el = null, al = typeof Object.is == "function" ? Object.is : D, Qs = /* @__PURE__ */ new WeakMap(), Ge = [], Xe = 0, ru = null, hu = 0, fl = [], sl = 0, pe = null, Al = 1, Dl = "", Yt = B(null), _a = B(null), Il = B(null), Su = B(null), xt = null, Zt = null, ot = !1, rl = null, zl = !1, sc = Error(o(519)), ol = [], Ze = 0, oc = 0, Eu = null, Ke = null, vc = !1, zu = !1, mc = !1, Je = 0, Ha = null, dc = 0, xe = 0, Le = null, $l = !1, pc = !1, Ym = Object.prototype.hasOwnProperty, Oa = Error(o(460)), yc = Error(o(474)), Tu = { then: function() {
      } }, We = null, Fe = null, Ua = 0, ye = pi(!0), Ys = pi(!1), Pe = B(null), Nu = B(0), vl = B(null), Tl = null, Ct = B(0), kl = 0, tt = null, yt = null, At = null, bu = !1, we = !1, re = !1, Mu = 0, Ra = 0, Ie = null, Vm = 0, rc = function() {
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
        useEffect: Bi,
        useImperativeHandle: function(t, l, e) {
          e = e != null ? e.concat([t]) : null, $a(
            4194308,
            4,
            Vi.bind(null, l, t),
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
            tt,
            t
          ), [a.memoizedState, t];
        },
        useRef: function(t) {
          var l = Wt();
          return t = { current: t }, l.memoizedState = t;
        },
        useState: function(t) {
          t = an(t);
          var l = t.queue, e = Fi.bind(
            null,
            tt,
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
          return t = Ji.bind(
            null,
            tt,
            t.queue,
            !0,
            !1
          ), Wt().memoizedState = t, [!1, t];
        },
        useSyncExternalStore: function(t, l, e) {
          var a = tt, u = Wt();
          if (ot) {
            if (e === void 0)
              throw Error(o(407));
            e = e();
          } else {
            if (e = l(), St === null)
              throw Error(o(349));
            (it & 60) !== 0 || zi(a, l, e);
          }
          u.memoizedState = e;
          var n = { value: e, getSnapshot: l };
          return u.queue = n, Bi(Ni.bind(null, a, n, t), [
            t
          ]), a.flags |= 2048, Re(
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
            var e = Dl, a = Al;
            e = (a & ~(1 << 32 - ll(a) - 1)).toString(32) + e, l = ":" + l + "R" + e, e = Mu++, 0 < e && (l += "H" + e.toString(32)), l += ":";
          } else
            e = Vm++, l = ":" + l + "r" + e.toString(32) + ":";
          return t.memoizedState = l;
        },
        useCacheRefresh: function() {
          return Wt().memoizedState = Lo.bind(
            null,
            tt
          );
        }
      };
      he.useMemoCache = tn, he.useHostTransitionStatus = sn, he.useFormState = Ai, he.useActionState = Ai, he.useOptimistic = function(t) {
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
          tt,
          !0,
          e
        ), e.dispatch = l, [t, l];
      };
      var te = {
        readContext: Vt,
        use: wa,
        useCallback: Xi,
        useContext: Vt,
        useEffect: nn,
        useImperativeHandle: Gi,
        useInsertionEffect: Qi,
        useLayoutEffect: Yi,
        useMemo: Zi,
        useReducer: Ia,
        useRef: qi,
        useState: function() {
          return Ia(gl);
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
          var t = Ia(gl)[0], l = Rt().memoizedState;
          return [
            typeof t == "boolean" ? t : da(t),
            l
          ];
        },
        useSyncExternalStore: Ei,
        useId: Li
      };
      te.useCacheRefresh = Wi, te.useMemoCache = tn, te.useHostTransitionStatus = sn, te.useFormState = Di, te.useActionState = Di, te.useOptimistic = function(t, l) {
        var e = Rt();
        return gi(e, yt, t, l);
      };
      var Se = {
        readContext: Vt,
        use: wa,
        useCallback: Xi,
        useContext: Vt,
        useEffect: nn,
        useImperativeHandle: Gi,
        useInsertionEffect: Qi,
        useLayoutEffect: Yi,
        useMemo: Zi,
        useReducer: en,
        useRef: qi,
        useState: function() {
          return en(gl);
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
          var t = en(gl)[0], l = Rt().memoizedState;
          return [
            typeof t == "boolean" ? t : da(t),
            l
          ];
        },
        useSyncExternalStore: Ei,
        useId: Li
      };
      Se.useCacheRefresh = Wi, Se.useMemoCache = tn, Se.useHostTransitionStatus = sn, Se.useFormState = ji, Se.useActionState = ji, Se.useOptimistic = function(t, l) {
        var e = Rt();
        return yt !== null ? gi(e, yt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
      };
      var hc = {
        isMounted: function(t) {
          return (t = t._reactInternals) ? z(t) === t : !1;
        },
        enqueueSetState: function(t, l, e) {
          t = t._reactInternals;
          var a = kt(), u = Vl(a);
          u.payload = l, e != null && (u.callback = e), l = Gl(t, u, a), l !== null && (Jt(l, t, a), sa(l, t, a));
        },
        enqueueReplaceState: function(t, l, e) {
          t = t._reactInternals;
          var a = kt(), u = Vl(a);
          u.tag = 1, u.payload = l, e != null && (u.callback = e), l = Gl(t, u, a), l !== null && (Jt(l, t, a), sa(l, t, a));
        },
        enqueueForceUpdate: function(t, l) {
          t = t._reactInternals;
          var e = kt(), a = Vl(e);
          a.tag = 2, l != null && (a.callback = l), l = Gl(t, a, e), l !== null && (Jt(l, t, e), sa(l, t, e));
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
      }, Gs = Error(o(461)), jt = !1, Sc = { dehydrated: null, treeContext: null, retryLane: 0 }, gu = B(null), Ee = null, Cl = null, Gm = typeof AbortController < "u" ? AbortController : function() {
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
      }, Xm = tl.unstable_scheduleCallback, Zm = tl.unstable_NormalPriority, gt = {
        $$typeof: Fl,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      }, Xs = F.S;
      F.S = function(t, l) {
        typeof l == "object" && l !== null && typeof l.then == "function" && Xo(t, l), Xs !== null && Xs(t, l);
      };
      var ze = B(null), jl = !1, _t = !1, Ec = !1, Zs = typeof WeakSet == "function" ? WeakSet : Set, qt = null, Ks = !1, Dt = null, ul = !1, hl = null, $e = 8192, Km = {
        getCacheForType: function(t) {
          var l = Vt(gt), e = l.data.get(t);
          return e === void 0 && (e = t(), l.data.set(t, e)), e;
        }
      }, _u = 0, Hu = 1, Ou = 2, Uu = 3, Ru = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var Aa = Symbol.for;
        _u = Aa("selector.component"), Hu = Aa("selector.has_pseudo_class"), Ou = Aa("selector.role"), Uu = Aa("selector.test_id"), Ru = Aa("selector.text");
      }
      var Jm = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, St = null, ut = null, it = 0, Et = 0, nl = null, ql = !1, ke = !1, zc = !1, Bl = 0, Ht = 0, le = 0, Te = 0, Tc = 0, ml = 0, ta = 0, Da = null, bl = null, Nc = !1, bc = 0, Ca = 1 / 0, Au = null, ee = null, Du = !1, Ne = null, ja = 0, Mc = 0, gc = null, qa = 0, _c = null;
      return at.attemptContinuousHydration = function(t) {
        if (t.tag === 13) {
          var l = Yl(t, 67108864);
          l !== null && Jt(l, t, 67108864), Ln(t, 67108864);
        }
      }, at.attemptHydrationAtCurrentPriority = function(t) {
        if (t.tag === 13) {
          var l = kt(), e = Yl(t, l);
          e !== null && Jt(e, t, l), Ln(t, l);
        }
      }, at.attemptSynchronousHydration = function(t) {
        switch (t.tag) {
          case 3:
            if (t = t.stateNode, t.current.memoizedState.isDehydrated) {
              var l = K(t.pendingLanes);
              if (l !== 0) {
                for (t.pendingLanes |= 2, t.entangledLanes |= 2; l; ) {
                  var e = 1 << 31 - ll(l);
                  t.entanglements[1] |= e, l &= ~e;
                }
                El(t), (rt & 6) === 0 && (Ca = yl() + 500, Ue(0));
              }
            }
            break;
          case 13:
            l = Yl(t, 2), l !== null && Jt(l, t, 2), Zf(), Ln(t, 2);
        }
      }, at.batchedUpdates = function(t, l) {
        return t(l);
      }, at.createComponentSelector = function(t) {
        return { $$typeof: _u, value: t };
      }, at.createContainer = function(t, l, e, a, u, n, f, v, p, b) {
        return es(
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
          b,
          null
        );
      }, at.createHasPseudoClassSelector = function(t) {
        return { $$typeof: Hu, value: t };
      }, at.createHydrationContainer = function(t, l, e, a, u, n, f, v, p, b, A, j, q) {
        return t = es(
          e,
          a,
          !0,
          t,
          u,
          n,
          v,
          p,
          b,
          A,
          j,
          q
        ), t.context = as(null), e = t.current, a = kt(), u = Vl(a), u.callback = l ?? null, Gl(e, u, a), t.current.lanes = a, I(t, a), El(t), t;
      }, at.createPortal = function(t, l, e) {
        var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: qe,
          key: a == null ? null : "" + a,
          children: t,
          containerInfo: l,
          implementation: e
        };
      }, at.createRoleSelector = function(t) {
        return { $$typeof: Ou, value: t };
      }, at.createTestNameSelector = function(t) {
        return { $$typeof: Uu, value: t };
      }, at.createTextSelector = function(t) {
        return { $$typeof: Ru, value: t };
      }, at.defaultOnCaughtError = function(t) {
        console.error(t);
      }, at.defaultOnRecoverableError = function(t) {
        Vs(t);
      }, at.defaultOnUncaughtError = function(t) {
        Vs(t);
      }, at.deferredUpdates = function(t) {
        var l = F.T, e = me();
        try {
          return Pt(32), F.T = null, t();
        } finally {
          Pt(e), F.T = l;
        }
      }, at.discreteUpdates = function(t, l, e, a, u) {
        var n = F.T, f = me();
        try {
          return Pt(2), F.T = null, t(l, e, a, u);
        } finally {
          Pt(f), F.T = n, rt === 0 && (Ca = yl() + 500);
        }
      }, at.findAllNodes = Qn, at.findBoundingRects = function(t, l) {
        if (!ba) throw Error(o(363));
        l = Qn(t, l), t = [];
        for (var e = 0; e < l.length; e++)
          t.push(Bv(l[e]));
        for (l = t.length - 1; 0 < l; l--) {
          e = t[l];
          for (var a = e.x, u = a + e.width, n = e.y, f = n + e.height, v = l - 1; 0 <= v; v--)
            if (l !== v) {
              var p = t[v], b = p.x, A = b + p.width, j = p.y, q = j + p.height;
              if (a >= b && n >= j && u <= A && f <= q) {
                t.splice(l, 1);
                break;
              } else if (a !== b || e.width !== p.width || q < n || j > f) {
                if (!(n !== j || e.height !== p.height || A < a || b > u)) {
                  b > a && (p.width += b - a, p.x = a), A < u && (p.width = u - b), t.splice(l, 1);
                  break;
                }
              } else {
                j > n && (p.height += j - n, p.y = n), q < f && (p.height = f - j), t.splice(l, 1);
                break;
              }
            }
        }
        return t;
      }, at.findHostInstance = us, at.findHostInstanceWithNoPortals = function(t) {
        return t = R(t), t = t !== null ? V(t) : null, t === null ? null : Na(t.stateNode);
      }, at.findHostInstanceWithWarning = function(t) {
        return us(t);
      }, at.flushPassiveEffects = oe, at.flushSyncFromReconciler = function(t) {
        var l = rt;
        rt |= 1;
        var e = F.T, a = me();
        try {
          if (Pt(2), F.T = null, t)
            return t();
        } finally {
          Pt(a), F.T = e, rt = l, (rt & 6) === 0 && Ue(0);
        }
      }, at.flushSyncWork = Zf, at.focusWithin = function(t, l) {
        if (!ba) throw Error(o(363));
        for (t = jn(t), l = Yf(t, l), l = Array.from(l), t = 0; t < l.length; ) {
          var e = l[t++], a = e.tag;
          if (!Ma(e)) {
            if ((a === 5 || a === 26 || a === 27) && Vv(e.stateNode))
              return !0;
            for (e = e.child; e !== null; )
              l.push(e), e = e.sibling;
          }
        }
        return !1;
      }, at.getFindAllNodesFailureDescription = function(t, l) {
        if (!ba) throw Error(o(363));
        var e = 0, a = [];
        t = [jn(t), 0];
        for (var u = 0; u < t.length; ) {
          var n = t[u++], f = n.tag, v = t[u++], p = l[v];
          if ((f !== 5 && f !== 26 && f !== 27 || !Ma(n)) && (qn(n, p) && (a.push(Bn(p)), v++, v > e && (e = v)), v < l.length))
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
      }, at.getPublicRootInstance = function(t) {
        if (t = t.current, !t.child) return null;
        switch (t.child.tag) {
          case 27:
          case 5:
            return Na(t.child.stateNode);
          default:
            return t.child.stateNode;
        }
      }, at.injectIntoDevTools = function() {
        var t = {
          bundleType: 0,
          version: rv,
          rendererPackageName: hv,
          currentDispatcherRef: F,
          findFiberByHostInstance: ys,
          reconcilerVersion: "19.0.0"
        };
        if (ms !== null && (t.rendererConfig = ms), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") t = !1;
        else {
          var l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (l.isDisabled || !l.supportsFiber) t = !0;
          else {
            try {
              ga = l.inject(t), el = l;
            } catch {
            }
            t = !!l.checkDCE;
          }
        }
        return t;
      }, at.isAlreadyRendering = function() {
        return !1;
      }, at.observeVisibleRects = function(t, l, e, a) {
        if (!ba) throw Error(o(363));
        t = Qn(t, l);
        var u = Gv(
          t,
          e,
          a
        ).disconnect;
        return {
          disconnect: function() {
            u();
          }
        };
      }, at.shouldError = function() {
        return null;
      }, at.shouldSuspend = function() {
        return !1;
      }, at.startHostTransition = function(t, l, e, a) {
        if (t.tag !== 5) throw Error(o(476));
        var u = xi(t).queue;
        Ji(
          t,
          u,
          l,
          Qe,
          e === null ? m : function() {
            var n = xi(t).next.queue;
            return pa(
              t,
              n,
              {},
              kt()
            ), e(a);
          }
        );
      }, at.updateContainer = function(t, l, e, a) {
        var u = l.current, n = kt();
        return ns(
          u,
          n,
          t,
          l,
          e,
          a
        ), n;
      }, at.updateContainerSync = function(t, l, e, a) {
        return l.tag === 0 && oe(), ns(
          l.current,
          2,
          t,
          l,
          e,
          a
        ), 2;
      }, at;
    }, c.exports.default = c.exports, Object.defineProperty(c.exports, "__esModule", { value: !0 });
  }(Cc)), Cc.exports;
}
var eo;
function od() {
  return eo || (eo = 1, Dc.exports = sd()), Dc.exports;
}
var vd = od();
const md = /* @__PURE__ */ ho(vd);
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
function dd() {
  return ao || (ao = 1, function(c) {
    function i(S, O) {
      var D = S.length;
      S.push(O);
      t: for (; 0 < D; ) {
        var Y = D - 1 >>> 1, J = S[Y];
        if (0 < o(J, O))
          S[Y] = O, S[D] = J, D = Y;
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
        t: for (var Y = 0, J = S.length, k = J >>> 1; Y < k; ) {
          var ct = 2 * (Y + 1) - 1, Nt = S[ct], et = ct + 1, Ut = S[et];
          if (0 > o(Nt, D))
            et < J && 0 > o(Ut, Nt) ? (S[Y] = Ut, S[et] = D, Y = et) : (S[Y] = Nt, S[ct] = D, Y = ct);
          else if (et < J && 0 > o(Ut, D))
            S[Y] = Ut, S[et] = D, Y = et;
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
      var C = Date, M = C.now();
      c.unstable_now = function() {
        return C.now() - M;
      };
    }
    var r = [], H = [], _ = 1, z = null, g = 3, R = !1, Q = !1, V = !1, B = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    function Z(S) {
      for (var O = s(H); O !== null; ) {
        if (O.callback === null) m(H);
        else if (O.startTime <= S)
          m(H), O.sortIndex = O.expirationTime, i(r, O);
        else break;
        O = s(H);
      }
    }
    function K(S) {
      if (V = !1, Z(S), !Q)
        if (s(r) !== null)
          Q = !0, dt();
        else {
          var O = s(H);
          O !== null && Mt(K, O.startTime - S);
        }
    }
    var x = !1, G = -1, nt = 5, st = -1;
    function lt() {
      return !(c.unstable_now() - st < nt);
    }
    function P() {
      if (x) {
        var S = c.unstable_now();
        st = S;
        var O = !0;
        try {
          t: {
            Q = !1, V && (V = !1, T(G), G = -1), R = !0;
            var D = g;
            try {
              l: {
                for (Z(S), z = s(r); z !== null && !(z.expirationTime > S && lt()); ) {
                  var Y = z.callback;
                  if (typeof Y == "function") {
                    z.callback = null, g = z.priorityLevel;
                    var J = Y(
                      z.expirationTime <= S
                    );
                    if (S = c.unstable_now(), typeof J == "function") {
                      z.callback = J, Z(S), O = !0;
                      break l;
                    }
                    z === s(r) && m(r), Z(S);
                  } else m(r);
                  z = s(r);
                }
                if (z !== null) O = !0;
                else {
                  var k = s(H);
                  k !== null && Mt(
                    K,
                    k.startTime - S
                  ), O = !1;
                }
              }
              break t;
            } finally {
              z = null, g = D, R = !1;
            }
            O = void 0;
          }
        } finally {
          O ? I() : x = !1;
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
        B(P, 0);
      };
    function dt() {
      x || (x = !0, I());
    }
    function Mt(S, O) {
      G = B(function() {
        S(c.unstable_now());
      }, O);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, c.unstable_continueExecution = function() {
      Q || R || (Q = !0, dt());
    }, c.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : nt = 0 < S ? Math.floor(1e3 / S) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, c.unstable_getFirstCallbackNode = function() {
      return s(r);
    }, c.unstable_next = function(S) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = g;
      }
      var D = g;
      g = O;
      try {
        return S();
      } finally {
        g = D;
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
      var D = g;
      g = S;
      try {
        return O();
      } finally {
        g = D;
      }
    }, c.unstable_scheduleCallback = function(S, O, D) {
      var Y = c.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? Y + D : Y) : D = Y, S) {
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
      return J = D + J, S = {
        id: _++,
        callback: O,
        priorityLevel: S,
        startTime: D,
        expirationTime: J,
        sortIndex: -1
      }, D > Y ? (S.sortIndex = D, i(H, S), s(r) === null && S === s(H) && (V ? (T(G), G = -1) : V = !0, Mt(K, D - Y))) : (S.sortIndex = J, i(r, S), Q || R || (Q = !0, dt())), S;
    }, c.unstable_shouldYield = lt, c.unstable_wrapCallback = function(S) {
      var O = g;
      return function() {
        var D = g;
        g = O;
        try {
          return S.apply(this, arguments);
        } finally {
          g = D;
        }
      };
    };
  }(Qc)), Qc;
}
var uo;
function pd() {
  return uo || (uo = 1, Bc.exports = dd()), Bc.exports;
}
var no = pd();
const yd = (c) => typeof c == "object" && typeof c.then == "function", ge = [];
function So(c, i, s = (m, o) => m === o) {
  if (c === i) return !0;
  if (!c || !i) return !1;
  const m = c.length;
  if (i.length !== m) return !1;
  for (let o = 0; o < m; o++) if (!s(c[o], i[o])) return !1;
  return !0;
}
function Eo(c, i = null, s = !1, m = {}) {
  i === null && (i = [c]);
  for (const E of ge)
    if (So(i, E.keys, E.equal)) {
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
      const E = ge.indexOf(o);
      E !== -1 && ge.splice(E, 1);
    },
    promise: (
      // Execute the promise
      (yd(c) ? c : c(...i)).then((E) => {
        o.response = E, m.lifespan && m.lifespan > 0 && (o.timeout = setTimeout(o.remove, m.lifespan));
      }).catch((E) => o.error = E)
    )
  };
  if (ge.push(o), !s) throw o.promise;
}
const rd = (c, i, s) => Eo(c, i, !1, s), hd = (c, i, s) => void Eo(c, i, !0, s), Sd = (c) => {
  if (c === void 0 || c.length === 0) ge.splice(0, ge.length);
  else {
    const i = ge.find((s) => So(c, s.keys, s.equal));
    i && i.remove();
  }
};
function Ic(c, i, s) {
  if (!c) return;
  if (s(c) === !0) return c;
  let m = i ? c.return : c.child;
  for (; m; ) {
    const o = Ic(m, i, s);
    if (o) return o;
    m = i ? null : m.sibling;
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
const $c = /* @__PURE__ */ zo(/* @__PURE__ */ ft.createContext(null));
class To extends ft.Component {
  render() {
    return /* @__PURE__ */ ft.createElement($c.Provider, { value: this._reactInternals }, this.props.children);
  }
}
function No() {
  const c = ft.useContext($c);
  if (c === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const i = ft.useId();
  return ft.useMemo(() => {
    for (const s of [c, c?.alternate]) {
      if (!s) continue;
      const m = Ic(s, !1, (o) => {
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
const Ed = Symbol.for("react.context"), zd = (c) => c !== null && typeof c == "object" && "$$typeof" in c && c.$$typeof === Ed;
function Td() {
  const c = No(), [i] = ft.useState(() => /* @__PURE__ */ new Map());
  i.clear();
  let s = c;
  for (; s; ) {
    const m = s.type;
    zd(m) && m !== $c && !i.has(m) && i.set(m, ft.use(zo(m))), s = s.return;
  }
  return i;
}
function Nd() {
  const c = Td();
  return ft.useMemo(
    () => Array.from(c.keys()).reduce(
      (i, s) => (m) => /* @__PURE__ */ ft.createElement(i, null, /* @__PURE__ */ ft.createElement(s.Provider, { ...m, value: c.get(s) })),
      (i) => /* @__PURE__ */ ft.createElement(To, { ...i })
    ),
    [c]
  );
}
function bo(c) {
  let i = c.root;
  for (; i.getState().previousRoot; ) i = i.getState().previousRoot;
  return i;
}
const Mo = (c) => c && c.isOrthographicCamera, bd = (c) => c && c.hasOwnProperty("current"), Md = (c) => c != null && (typeof c == "string" || typeof c == "number" || c.isColor), Ga = /* @__PURE__ */ ((c, i) => typeof window < "u" && (((c = window.document) == null ? void 0 : c.createElement) || ((i = window.navigator) == null ? void 0 : i.product) === "ReactNative"))() ? ft.useLayoutEffect : ft.useEffect;
function go(c) {
  const i = ft.useRef(c);
  return Ga(() => void (i.current = c), [c]), i;
}
function gd() {
  const c = No(), i = Nd();
  return ft.useMemo(() => ({
    children: s
  }) => {
    const o = !!Ic(c, !0, (E) => E.type === ft.StrictMode) ? ft.StrictMode : ft.Fragment;
    return /* @__PURE__ */ ht(o, {
      children: /* @__PURE__ */ ht(i, {
        children: s
      })
    });
  }, [c, i]);
}
function _d({
  set: c
}) {
  return Ga(() => (c(new Promise(() => null)), () => c(!1)), [c]), null;
}
const Hd = /* @__PURE__ */ ((c) => (c = class extends ft.Component {
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
function la(c) {
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
    objects: m = "reference",
    strict: o = !0
  } = {}) {
    if (typeof c != typeof i || !!c != !!i) return !1;
    if (Tt.str(c) || Tt.num(c) || Tt.boo(c)) return c === i;
    const E = Tt.obj(c);
    if (E && m === "reference") return c === i;
    const C = Tt.arr(c);
    if (C && s === "reference") return c === i;
    if ((C || E) && c === i) return !0;
    let M;
    for (M in c) if (!(M in i)) return !1;
    if (E && s === "shallow" && m === "shallow") {
      for (M in o ? i : c) if (!Tt.equ(c[M], i[M], {
        strict: o,
        objects: "reference"
      })) return !1;
    } else
      for (M in o ? i : c) if (c[M] !== i[M]) return !1;
    if (Tt.und(M)) {
      if (C && c.length === 0 && i.length === 0 || E && Object.keys(c).length === 0 && Object.keys(i).length === 0) return !0;
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
function Qu(c, i, s, m) {
  const o = c;
  let E = o?.__r3f;
  return E || (E = {
    root: i,
    type: s,
    parent: null,
    children: [],
    props: Rd(m),
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
function Yu(c, i) {
  if (Tt.str(i.props.attach)) {
    if (co.test(i.props.attach)) {
      const o = i.props.attach.replace(co, ""), {
        root: E,
        key: C
      } = Va(c.object, o);
      Array.isArray(E[C]) || (E[C] = []);
    }
    const {
      root: s,
      key: m
    } = Va(c.object, i.props.attach);
    i.previousAttach = s[m], s[m] = i.object;
  } else Tt.fun(i.props.attach) && (i.previousAttach = i.props.attach(c.object, i.object));
}
function Vu(c, i) {
  if (Tt.str(i.props.attach)) {
    const {
      root: s,
      key: m
    } = Va(c.object, i.props.attach), o = i.previousAttach;
    o === void 0 ? delete s[m] : s[m] = o;
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
    if (!xc.includes(m) && !Tt.equ(i[m], c.props[m])) {
      s[m] = i[m];
      for (const o in i)
        o.startsWith(`${m}-`) && (s[o] = i[o]);
    }
  for (const m in c.props) {
    if (xc.includes(m) || i.hasOwnProperty(m)) continue;
    const {
      root: o,
      key: E
    } = Va(c.object, m);
    if (o.constructor && o.constructor.length === 0) {
      const C = Ad(o);
      Tt.und(C) || (s[E] = C[E]);
    } else
      s[E] = 0;
  }
  return s;
}
const Cd = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"], jd = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function ue(c, i) {
  var s;
  const m = c.__r3f, o = m && bo(m).getState(), E = m?.eventCount;
  for (const M in i) {
    let r = i[M];
    if (xc.includes(M)) continue;
    if (m && jd.test(M)) {
      typeof r == "function" ? m.handlers[M] = r : delete m.handlers[M], m.eventCount = Object.keys(m.handlers).length;
      continue;
    }
    if (r === void 0) continue;
    let {
      root: H,
      key: _,
      target: z
    } = Va(c, M);
    if (z instanceof W.Layers && r instanceof W.Layers)
      z.mask = r.mask;
    else if (z instanceof W.Color && Md(r))
      z.set(r);
    else if (z !== null && typeof z == "object" && typeof z.set == "function" && typeof z.copy == "function" && r != null && r.constructor && z.constructor === r.constructor)
      z.copy(r);
    else if (z !== null && typeof z == "object" && typeof z.set == "function" && Array.isArray(r))
      typeof z.fromArray == "function" ? z.fromArray(r) : z.set(...r);
    else if (z !== null && typeof z == "object" && typeof z.set == "function" && typeof r == "number")
      typeof z.setScalar == "function" ? z.setScalar(r) : z.set(r);
    else {
      var C;
      H[_] = r, o && !o.linear && Cd.includes(_) && (C = H[_]) != null && C.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
      H[_].format === W.RGBAFormat && H[_].type === W.UnsignedByteType && (H[_].colorSpace = W.SRGBColorSpace);
    }
  }
  if (m != null && m.parent && o != null && o.internal && (s = m.object) != null && s.isObject3D && E !== m.eventCount) {
    const M = m.object, r = o.internal.interaction.indexOf(M);
    r > -1 && o.internal.interaction.splice(r, 1), m.eventCount && M.raycast !== null && o.internal.interaction.push(M);
  }
  return m && m.props.attach === void 0 && (m.object.isBufferGeometry ? m.props.attach = "geometry" : m.object.isMaterial && (m.props.attach = "material")), m && na(m), c;
}
function na(c) {
  var i;
  if (!c.parent) return;
  c.props.onUpdate == null || c.props.onUpdate(c.object);
  const s = (i = c.root) == null || i.getState == null ? void 0 : i.getState();
  s && s.internal.frames === 0 && s.invalidate();
}
function qd(c, i) {
  c.manual || (Mo(c) ? (c.left = i.width / -2, c.right = i.width / 2, c.top = i.height / 2, c.bottom = i.height / -2) : c.aspect = i.width / i.height, c.updateProjectionMatrix());
}
const Lt = (c) => c?.isObject3D;
function Cu(c) {
  return (c.eventObject || c.object).uuid + "/" + c.index + c.instanceId;
}
function Oo(c, i, s, m) {
  const o = s.get(i);
  o && (s.delete(i), s.size === 0 && (c.delete(m), o.target.releasePointerCapture(m)));
}
function Bd(c, i) {
  const {
    internal: s
  } = c.getState();
  s.interaction = s.interaction.filter((m) => m !== i), s.initialHits = s.initialHits.filter((m) => m !== i), s.hovered.forEach((m, o) => {
    (m.eventObject === i || m.object === i) && s.hovered.delete(o);
  }), s.capturedMap.forEach((m, o) => {
    Oo(s.capturedMap, i, m, o);
  });
}
function Qd(c) {
  function i(r) {
    const {
      internal: H
    } = c.getState(), _ = r.offsetX - H.initialClick[0], z = r.offsetY - H.initialClick[1];
    return Math.round(Math.sqrt(_ * _ + z * z));
  }
  function s(r) {
    return r.filter((H) => ["Move", "Over", "Enter", "Out", "Leave"].some((_) => {
      var z;
      return (z = H.__r3f) == null ? void 0 : z.handlers["onPointer" + _];
    }));
  }
  function m(r, H) {
    const _ = c.getState(), z = /* @__PURE__ */ new Set(), g = [], R = H ? H(_.internal.interaction) : _.internal.interaction;
    for (let T = 0; T < R.length; T++) {
      const N = la(R[T]);
      N && (N.raycaster.camera = void 0);
    }
    _.previousRoot || _.events.compute == null || _.events.compute(r, _);
    function Q(T) {
      const N = la(T);
      if (!N || !N.events.enabled || N.raycaster.camera === null) return [];
      if (N.raycaster.camera === void 0) {
        var Z;
        N.events.compute == null || N.events.compute(r, N, (Z = N.previousRoot) == null ? void 0 : Z.getState()), N.raycaster.camera === void 0 && (N.raycaster.camera = null);
      }
      return N.raycaster.camera ? N.raycaster.intersectObject(T, !0) : [];
    }
    let V = R.flatMap(Q).sort((T, N) => {
      const Z = la(T.object), K = la(N.object);
      return !Z || !K ? T.distance - N.distance : K.events.priority - Z.events.priority || T.distance - N.distance;
    }).filter((T) => {
      const N = Cu(T);
      return z.has(N) ? !1 : (z.add(N), !0);
    });
    _.events.filter && (V = _.events.filter(V, _));
    for (const T of V) {
      let N = T.object;
      for (; N; ) {
        var B;
        (B = N.__r3f) != null && B.eventCount && g.push({
          ...T,
          eventObject: N
        }), N = N.parent;
      }
    }
    if ("pointerId" in r && _.internal.capturedMap.has(r.pointerId))
      for (let T of _.internal.capturedMap.get(r.pointerId).values())
        z.has(Cu(T.intersection)) || g.push(T.intersection);
    return g;
  }
  function o(r, H, _, z) {
    if (r.length) {
      const g = {
        stopped: !1
      };
      for (const R of r) {
        let Q = la(R.object);
        if (Q || R.object.traverseAncestors((V) => {
          const B = la(V);
          if (B)
            return Q = B, !1;
        }), Q) {
          const {
            raycaster: V,
            pointer: B,
            camera: T,
            internal: N
          } = Q, Z = new W.Vector3(B.x, B.y, 0).unproject(T), K = (lt) => {
            var P, I;
            return (P = (I = N.capturedMap.get(lt)) == null ? void 0 : I.has(R.eventObject)) != null ? P : !1;
          }, x = (lt) => {
            const P = {
              intersection: R,
              target: H.target
            };
            N.capturedMap.has(lt) ? N.capturedMap.get(lt).set(R.eventObject, P) : N.capturedMap.set(lt, /* @__PURE__ */ new Map([[R.eventObject, P]])), H.target.setPointerCapture(lt);
          }, G = (lt) => {
            const P = N.capturedMap.get(lt);
            P && Oo(N.capturedMap, R.eventObject, P, lt);
          };
          let nt = {};
          for (let lt in H) {
            let P = H[lt];
            typeof P != "function" && (nt[lt] = P);
          }
          let st = {
            ...R,
            ...nt,
            pointer: B,
            intersections: r,
            stopped: g.stopped,
            delta: _,
            unprojectedPoint: Z,
            ray: V.ray,
            camera: T,
            // Hijack stopPropagation, which just sets a flag
            stopPropagation() {
              const lt = "pointerId" in H && N.capturedMap.get(H.pointerId);
              if (
                // ...if this pointer hasn't been captured
                (!lt || // ... or if the hit object is capturing the pointer
                lt.has(R.eventObject)) && (st.stopped = g.stopped = !0, N.hovered.size && Array.from(N.hovered.values()).find((P) => P.eventObject === R.eventObject))
              ) {
                const P = r.slice(0, r.indexOf(R));
                E([...P, R]);
              }
            },
            // there should be a distinction between target and currentTarget
            target: {
              hasPointerCapture: K,
              setPointerCapture: x,
              releasePointerCapture: G
            },
            currentTarget: {
              hasPointerCapture: K,
              setPointerCapture: x,
              releasePointerCapture: G
            },
            nativeEvent: H
          };
          if (z(st), g.stopped === !0) break;
        }
      }
    }
    return r;
  }
  function E(r) {
    const {
      internal: H
    } = c.getState();
    for (const _ of H.hovered.values())
      if (!r.length || !r.find((z) => z.object === _.object && z.index === _.index && z.instanceId === _.instanceId)) {
        const g = _.eventObject.__r3f;
        if (H.hovered.delete(Cu(_)), g != null && g.eventCount) {
          const R = g.handlers, Q = {
            ..._,
            intersections: r
          };
          R.onPointerOut == null || R.onPointerOut(Q), R.onPointerLeave == null || R.onPointerLeave(Q);
        }
      }
  }
  function C(r, H) {
    for (let _ = 0; _ < H.length; _++) {
      const z = H[_].__r3f;
      z == null || z.handlers.onPointerMissed == null || z.handlers.onPointerMissed(r);
    }
  }
  function M(r) {
    switch (r) {
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
        internal: g
      } = c.getState();
      g.lastEvent.current = _;
      const R = r === "onPointerMove", Q = r === "onClick" || r === "onContextMenu" || r === "onDoubleClick", B = m(_, R ? s : void 0), T = Q ? i(_) : 0;
      r === "onPointerDown" && (g.initialClick = [_.offsetX, _.offsetY], g.initialHits = B.map((Z) => Z.eventObject)), Q && !B.length && T <= 2 && (C(_, g.interaction), z && z(_)), R && E(B);
      function N(Z) {
        const K = Z.eventObject, x = K.__r3f;
        if (!(x != null && x.eventCount)) return;
        const G = x.handlers;
        if (R) {
          if (G.onPointerOver || G.onPointerEnter || G.onPointerOut || G.onPointerLeave) {
            const nt = Cu(Z), st = g.hovered.get(nt);
            st ? st.stopped && Z.stopPropagation() : (g.hovered.set(nt, Z), G.onPointerOver == null || G.onPointerOver(Z), G.onPointerEnter == null || G.onPointerEnter(Z));
          }
          G.onPointerMove == null || G.onPointerMove(Z);
        } else {
          const nt = G[r];
          nt ? (!Q || g.initialHits.includes(K)) && (C(_, g.interaction.filter((st) => !g.initialHits.includes(st))), nt(Z)) : Q && g.initialHits.includes(K) && C(_, g.interaction.filter((st) => !g.initialHits.includes(st)));
        }
      }
      o(B, _, T, N);
    };
  }
  return {
    handlePointer: M
  };
}
const fo = (c) => !!(c != null && c.render), Uo = /* @__PURE__ */ ft.createContext(null), Yd = (c, i) => {
  const s = cd((M, r) => {
    const H = new W.Vector3(), _ = new W.Vector3(), z = new W.Vector3();
    function g(T = r().camera, N = _, Z = r().size) {
      const {
        width: K,
        height: x,
        top: G,
        left: nt
      } = Z, st = K / x;
      N.isVector3 ? z.copy(N) : z.set(...N);
      const lt = T.getWorldPosition(H).distanceTo(z);
      if (Mo(T))
        return {
          width: K / T.zoom,
          height: x / T.zoom,
          top: G,
          left: nt,
          factor: 1,
          distance: lt,
          aspect: st
        };
      {
        const P = T.fov * Math.PI / 180, I = 2 * Math.tan(P / 2) * lt, Kt = I * (K / x);
        return {
          width: Kt,
          height: I,
          top: G,
          left: nt,
          factor: K / Kt,
          distance: lt,
          aspect: st
        };
      }
    }
    let R;
    const Q = (T) => M((N) => ({
      performance: {
        ...N.performance,
        current: T
      }
    })), V = new W.Vector2();
    return {
      set: M,
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
      invalidate: (T = 1) => c(r(), T),
      advance: (T, N) => i(T, N, r()),
      legacy: !1,
      linear: !1,
      flat: !1,
      controls: null,
      clock: new W.Clock(),
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
          const T = r();
          R && clearTimeout(R), T.performance.current !== T.performance.min && Q(T.performance.min), R = setTimeout(() => Q(r().performance.max), T.performance.debounce);
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
        getCurrentViewport: g
      },
      setEvents: (T) => M((N) => ({
        ...N,
        events: {
          ...N.events,
          ...T
        }
      })),
      setSize: (T, N, Z = 0, K = 0) => {
        const x = r().camera, G = {
          width: T,
          height: N,
          top: Z,
          left: K
        };
        M((nt) => ({
          size: G,
          viewport: {
            ...nt.viewport,
            ...g(x, _, G)
          }
        }));
      },
      setDpr: (T) => M((N) => {
        const Z = _o(T);
        return {
          viewport: {
            ...N.viewport,
            dpr: Z,
            initialDpr: N.viewport.initialDpr || Z
          }
        };
      }),
      setFrameloop: (T = "always") => {
        const N = r().clock;
        N.stop(), N.elapsedTime = 0, T !== "never" && (N.start(), N.elapsedTime = 0), M(() => ({
          frameloop: T
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
        subscribe: (T, N, Z) => {
          const K = r().internal;
          return K.priority = K.priority + (N > 0 ? 1 : 0), K.subscribers.push({
            ref: T,
            priority: N,
            store: Z
          }), K.subscribers = K.subscribers.sort((x, G) => x.priority - G.priority), () => {
            const x = r().internal;
            x != null && x.subscribers && (x.priority = x.priority - (N > 0 ? 1 : 0), x.subscribers = x.subscribers.filter((G) => G.ref !== T));
          };
        }
      }
    };
  }), m = s.getState();
  let o = m.size, E = m.viewport.dpr, C = m.camera;
  return s.subscribe(() => {
    const {
      camera: M,
      size: r,
      viewport: H,
      gl: _,
      set: z
    } = s.getState();
    if (r.width !== o.width || r.height !== o.height || H.dpr !== E) {
      o = r, E = H.dpr, qd(M, r), H.dpr > 0 && _.setPixelRatio(H.dpr);
      const g = typeof HTMLCanvasElement < "u" && _.domElement instanceof HTMLCanvasElement;
      _.setSize(r.width, r.height, g);
    }
    M !== C && (C = M, z((g) => ({
      viewport: {
        ...g.viewport,
        ...g.viewport.getCurrentViewport(M)
      }
    })));
  }), s.subscribe((M) => c(M)), s;
};
function Ro() {
  const c = ft.useContext(Uo);
  if (!c) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return c;
}
function Vd(c = (s) => s, i) {
  return Ro()(c, i);
}
function Gd(c, i = 0) {
  const s = Ro(), m = s.getState().internal.subscribe, o = go(c);
  return Ga(() => m(o, i, s), [i, m, s]), null;
}
const so = /* @__PURE__ */ new WeakMap(), Xd = (c) => {
  var i;
  return typeof c == "function" && (c == null || (i = c.prototype) == null ? void 0 : i.constructor) === c;
};
function Ao(c, i) {
  return function(s, ...m) {
    let o;
    return Xd(s) ? (o = so.get(s), o || (o = new s(), so.set(s, o))) : o = s, c && c(o), Promise.all(m.map((E) => new Promise((C, M) => o.load(E, (r) => {
      Lt(r?.scene) && Object.assign(r, Od(r.scene)), C(r);
    }, i, (r) => M(new Error(`Could not load ${E}: ${r?.message}`))))));
  };
}
function kc(c, i, s, m) {
  const o = Array.isArray(i) ? i : [i], E = rd(Ao(s, m), [c, ...o], {
    equal: Tt.equ
  });
  return Array.isArray(i) ? E : E[0];
}
kc.preload = function(c, i, s) {
  const m = Array.isArray(i) ? i : [i];
  return hd(Ao(s), [c, ...m]);
};
kc.clear = function(c, i) {
  const s = Array.isArray(i) ? i : [i];
  return Sd([c, ...s]);
};
function Zd(c) {
  const i = md(c);
  return i.injectIntoDevTools({
    bundleType: 0,
    rendererPackageName: "@react-three/fiber",
    version: ft.version
  }), i;
}
const Do = 0, ua = {}, Kd = /^three(?=[A-Z])/, Xu = (c) => `${c[0].toUpperCase()}${c.slice(1)}`;
let Jd = 0;
const xd = (c) => typeof c == "function";
function Ld(c) {
  if (xd(c)) {
    const i = `${Jd++}`;
    return ua[i] = c, i;
  } else
    Object.assign(ua, c);
}
function Co(c, i) {
  const s = Xu(c), m = ua[s];
  if (c !== "primitive" && !m) throw new Error(`R3F: ${s} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (c === "primitive" && !i.object) throw new Error("R3F: Primitives without 'object' are invalid!");
  if (i.args !== void 0 && !Array.isArray(i.args)) throw new Error("R3F: The args prop must be an array!");
}
function Wd(c, i, s) {
  var m;
  return c = Xu(c) in ua ? c : c.replace(Kd, ""), Co(c, i), c === "primitive" && (m = i.object) != null && m.__r3f && delete i.object.__r3f, Qu(i.object, s, c, i);
}
function Fd(c) {
  if (!c.isHidden) {
    var i;
    c.props.attach && (i = c.parent) != null && i.object ? Vu(c.parent, c) : Lt(c.object) && (c.object.visible = !1), c.isHidden = !0, na(c);
  }
}
function jo(c) {
  if (c.isHidden) {
    var i;
    c.props.attach && (i = c.parent) != null && i.object ? Yu(c.parent, c) : Lt(c.object) && c.props.visible !== !1 && (c.object.visible = !0), c.isHidden = !1, na(c);
  }
}
function ti(c, i, s) {
  const m = i.root.getState();
  if (!(!c.parent && c.object !== m.scene)) {
    if (!i.object) {
      var o, E;
      const C = ua[Xu(i.type)];
      i.object = (o = i.props.object) != null ? o : new C(...(E = i.props.args) != null ? E : []), i.object.__r3f = i;
    }
    if (ue(i.object, i.props), i.props.attach)
      Yu(c, i);
    else if (Lt(i.object) && Lt(c.object)) {
      const C = c.object.children.indexOf(s?.object);
      if (s && C !== -1) {
        const M = c.object.children.indexOf(i.object);
        if (M !== -1) {
          c.object.children.splice(M, 1);
          const r = M < C ? C - 1 : C;
          c.object.children.splice(r, 0, i.object);
        } else
          i.object.parent = c.object, c.object.children.splice(C, 0, i.object), i.object.dispatchEvent({
            type: "added"
          }), c.object.dispatchEvent({
            type: "childadded",
            child: i.object
          });
      } else
        c.object.add(i.object);
    }
    for (const C of i.children) ti(i, C);
    na(i);
  }
}
function Yc(c, i) {
  i && (i.parent = c, c.children.push(i), ti(c, i));
}
function oo(c, i, s) {
  if (!i || !s) return;
  i.parent = c;
  const m = c.children.indexOf(s);
  m !== -1 ? c.children.splice(m, 0, i) : c.children.push(i), ti(c, i, s);
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
  const m = c.children.indexOf(i);
  m !== -1 && c.children.splice(m, 1), i.props.attach ? Vu(c, i) : Lt(i.object) && Lt(c.object) && (c.object.remove(i.object), Bd(bo(i), i.object));
  const o = i.props.dispose !== null && s !== !1;
  for (let E = i.children.length - 1; E >= 0; E--) {
    const C = i.children[E];
    Lc(i, C, o);
  }
  i.children.length = 0, delete i.object.__r3f, o && i.type !== "primitive" && i.object.type !== "Scene" && qo(i.object), s === void 0 && na(i);
}
function Pd(c, i) {
  for (const s of [c, c.alternate])
    if (s !== null)
      if (typeof s.ref == "function") {
        s.refCleanup == null || s.refCleanup();
        const m = s.ref(i);
        typeof m == "function" && (s.refCleanup = m);
      } else s.ref && (s.ref.current = i);
}
const Bu = [];
function wd() {
  for (const [s] of Bu) {
    const m = s.parent;
    if (m) {
      s.props.attach ? Vu(m, s) : Lt(s.object) && Lt(m.object) && m.object.remove(s.object);
      for (const o of s.children)
        o.props.attach ? Vu(s, o) : Lt(o.object) && Lt(s.object) && s.object.remove(o.object);
    }
    s.isHidden && jo(s), s.object.__r3f && delete s.object.__r3f, s.type !== "primitive" && qo(s.object);
  }
  for (const [s, m, o] of Bu) {
    s.props = m;
    const E = s.parent;
    if (E) {
      var c, i;
      const C = ua[Xu(s.type)];
      s.object = (c = s.props.object) != null ? c : new C(...(i = s.props.args) != null ? i : []), s.object.__r3f = s, Pd(o, s.object), ue(s.object, s.props), s.props.attach ? Yu(E, s) : Lt(s.object) && Lt(E.object) && E.object.add(s.object);
      for (const M of s.children)
        M.props.attach ? Yu(s, M) : Lt(M.object) && Lt(s.object) && s.object.add(M.object);
      na(s);
    }
  }
  Bu.length = 0;
}
const Vc = () => {
}, vo = {};
let ju = Do;
const Id = 0, $d = 4, Wc = /* @__PURE__ */ Zd({
  isPrimaryRenderer: !1,
  warnsIfNotActing: !1,
  supportsMutation: !0,
  supportsPersistence: !1,
  supportsHydration: !1,
  createInstance: Wd,
  removeChild: Lc,
  appendChild: Yc,
  appendInitialChild: Yc,
  insertBefore: oo,
  appendChildToContainer(c, i) {
    const s = c.getState().scene.__r3f;
    !i || !s || Yc(s, i);
  },
  removeChildFromContainer(c, i) {
    const s = c.getState().scene.__r3f;
    !i || !s || Lc(s, i);
  },
  insertInContainerBefore(c, i, s) {
    const m = c.getState().scene.__r3f;
    !i || !s || !m || oo(m, i, s);
  },
  getRootHostContext: () => vo,
  getChildHostContext: () => vo,
  commitUpdate(c, i, s, m, o) {
    var E, C, M;
    Co(i, m);
    let r = !1;
    if ((c.type === "primitive" && s.object !== m.object || ((E = m.args) == null ? void 0 : E.length) !== ((C = s.args) == null ? void 0 : C.length) || (M = m.args) != null && M.some((_, z) => {
      var g;
      return _ !== ((g = s.args) == null ? void 0 : g[z]);
    })) && (r = !0), r)
      Bu.push([c, {
        ...m
      }, o]);
    else {
      const _ = Dd(c, m);
      Object.keys(_).length && (Object.assign(c.props, _), ue(c.object, _));
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
  unhideInstance: jo,
  createTextInstance: Vc,
  hideTextInstance: Vc,
  unhideTextInstance: Vc,
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
}), He = /* @__PURE__ */ new Map(), ea = {
  objects: "shallow",
  strict: !1
};
function kd(c, i) {
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
function tp(c) {
  const i = He.get(c), s = i?.fiber, m = i?.store;
  i && console.warn("R3F.createRoot should only be called once!");
  const o = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  ), E = m || Yd(wc, po), C = s || Wc.createContainer(
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
  i || He.set(c, {
    fiber: C,
    store: E
  });
  let M, r, H = !1, _ = null;
  return {
    async configure(z = {}) {
      let g;
      _ = new Promise((k) => g = k);
      let {
        gl: R,
        size: Q,
        scene: V,
        events: B,
        onCreated: T,
        shadows: N = !1,
        linear: Z = !1,
        flat: K = !1,
        legacy: x = !1,
        orthographic: G = !1,
        frameloop: nt = "always",
        dpr: st = [1, 2],
        performance: lt,
        raycaster: P,
        camera: I,
        onPointerMissed: Kt
      } = z, $ = E.getState(), dt = $.gl;
      if (!$.gl) {
        const k = {
          canvas: c,
          powerPreference: "high-performance",
          antialias: !0,
          alpha: !0
        }, ct = typeof R == "function" ? await R(k) : R;
        fo(ct) ? dt = ct : dt = new W.WebGLRenderer({
          ...k,
          ...R
        }), $.set({
          gl: dt
        });
      }
      let Mt = $.raycaster;
      Mt || $.set({
        raycaster: Mt = new W.Raycaster()
      });
      const {
        params: S,
        ...O
      } = P || {};
      if (Tt.equ(O, Mt, ea) || ue(Mt, {
        ...O
      }), Tt.equ(S, Mt.params, ea) || ue(Mt, {
        params: {
          ...Mt.params,
          ...S
        }
      }), !$.camera || $.camera === r && !Tt.equ(r, I, ea)) {
        r = I;
        const k = I?.isCamera, ct = k ? I : G ? new W.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new W.PerspectiveCamera(75, 0, 0.1, 1e3);
        k || (ct.position.z = 5, I && (ue(ct, I), ct.manual || ("aspect" in I || "left" in I || "right" in I || "bottom" in I || "top" in I) && (ct.manual = !0, ct.updateProjectionMatrix())), !$.camera && !(I != null && I.rotation) && ct.lookAt(0, 0, 0)), $.set({
          camera: ct
        }), Mt.camera = ct;
      }
      if (!$.scene) {
        let k;
        V != null && V.isScene ? (k = V, Qu(k, E, "", {})) : (k = new W.Scene(), Qu(k, E, "", {}), V && ue(k, V)), $.set({
          scene: k
        });
      }
      B && !$.events.handlers && $.set({
        events: B(E)
      });
      const D = kd(c, Q);
      if (Tt.equ(D, $.size, ea) || $.setSize(D.width, D.height, D.top, D.left), st && $.viewport.dpr !== _o(st) && $.setDpr(st), $.frameloop !== nt && $.setFrameloop(nt), $.onPointerMissed || $.set({
        onPointerMissed: Kt
      }), lt && !Tt.equ(lt, $.performance, ea) && $.set((k) => ({
        performance: {
          ...k.performance,
          ...lt
        }
      })), !$.xr) {
        var Y;
        const k = (et, Ut) => {
          const Oe = E.getState();
          Oe.frameloop !== "never" && po(et, !0, Oe, Ut);
        }, ct = () => {
          const et = E.getState();
          et.gl.xr.enabled = et.gl.xr.isPresenting, et.gl.xr.setAnimationLoop(et.gl.xr.isPresenting ? k : null), et.gl.xr.isPresenting || wc(et);
        }, Nt = {
          connect() {
            const et = E.getState().gl;
            et.xr.addEventListener("sessionstart", ct), et.xr.addEventListener("sessionend", ct);
          },
          disconnect() {
            const et = E.getState().gl;
            et.xr.removeEventListener("sessionstart", ct), et.xr.removeEventListener("sessionend", ct);
          }
        };
        typeof ((Y = dt.xr) == null ? void 0 : Y.addEventListener) == "function" && Nt.connect(), $.set({
          xr: Nt
        });
      }
      if (dt.shadowMap) {
        const k = dt.shadowMap.enabled, ct = dt.shadowMap.type;
        if (dt.shadowMap.enabled = !!N, Tt.boo(N))
          dt.shadowMap.type = W.PCFSoftShadowMap;
        else if (Tt.str(N)) {
          var J;
          const Nt = {
            basic: W.BasicShadowMap,
            percentage: W.PCFShadowMap,
            soft: W.PCFSoftShadowMap,
            variance: W.VSMShadowMap
          };
          dt.shadowMap.type = (J = Nt[N]) != null ? J : W.PCFSoftShadowMap;
        } else Tt.obj(N) && Object.assign(dt.shadowMap, N);
        (k !== dt.shadowMap.enabled || ct !== dt.shadowMap.type) && (dt.shadowMap.needsUpdate = !0);
      }
      return W.ColorManagement.enabled = !x, H || (dt.outputColorSpace = Z ? W.LinearSRGBColorSpace : W.SRGBColorSpace, dt.toneMapping = K ? W.NoToneMapping : W.ACESFilmicToneMapping), $.legacy !== x && $.set(() => ({
        legacy: x
      })), $.linear !== Z && $.set(() => ({
        linear: Z
      })), $.flat !== K && $.set(() => ({
        flat: K
      })), R && !Tt.fun(R) && !fo(R) && !Tt.equ(R, dt, ea) && ue(dt, R), M = T, H = !0, g(), this;
    },
    render(z) {
      return !H && !_ && this.configure(), _.then(() => {
        Wc.updateContainer(/* @__PURE__ */ ht(lp, {
          store: E,
          children: z,
          onCreated: M,
          rootElement: c
        }), C, null, () => {
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
  }, []), /* @__PURE__ */ ht(Uo.Provider, {
    value: c,
    children: i
  });
}
function Bo(c, i) {
  const s = He.get(c), m = s?.fiber;
  if (m) {
    const o = s?.store.getState();
    o && (o.internal.active = !1), Wc.updateContainer(null, m, null, () => {
      o && setTimeout(() => {
        try {
          var E, C, M, r;
          o.events.disconnect == null || o.events.disconnect(), (E = o.gl) == null || (C = E.renderLists) == null || C.dispose == null || C.dispose(), (M = o.gl) == null || M.forceContextLoss == null || M.forceContextLoss(), (r = o.gl) != null && r.xr && o.xr.disconnect(), Ud(o.scene), He.delete(c);
        } catch {
        }
      }, 500);
    });
  }
}
const ep = /* @__PURE__ */ new Set(), ap = /* @__PURE__ */ new Set(), up = /* @__PURE__ */ new Set();
function Gc(c, i) {
  if (c.size)
    for (const {
      callback: s
    } of c.values())
      s(i);
}
function Ya(c, i) {
  switch (c) {
    case "before":
      return Gc(ep, i);
    case "after":
      return Gc(ap, i);
    case "tail":
      return Gc(up, i);
  }
}
let Xc, Zc;
function Fc(c, i, s) {
  let m = i.clock.getDelta();
  i.frameloop === "never" && typeof c == "number" && (m = c - i.clock.elapsedTime, i.clock.oldTime = i.clock.elapsedTime, i.clock.elapsedTime = c), Xc = i.internal.subscribers;
  for (let o = 0; o < Xc.length; o++)
    Zc = Xc[o], Zc.ref.current(Zc.store.getState(), m, s);
  return !i.internal.priority && i.gl.render && i.gl.render(i.scene, i.camera), i.internal.frames = Math.max(0, i.internal.frames - 1), i.frameloop === "always" ? 1 : i.internal.frames;
}
let Gu = !1, Pc = !1, Kc, mo, aa;
function Qo(c) {
  mo = requestAnimationFrame(Qo), Gu = !0, Kc = 0, Ya("before", c), Pc = !0;
  for (const s of He.values()) {
    var i;
    aa = s.store.getState(), aa.internal.active && (aa.frameloop === "always" || aa.internal.frames > 0) && !((i = aa.gl.xr) != null && i.isPresenting) && (Kc += Fc(c, aa));
  }
  if (Pc = !1, Ya("after", c), Kc === 0)
    return Ya("tail", c), Gu = !1, cancelAnimationFrame(mo);
}
function wc(c, i = 1) {
  var s;
  if (!c) return He.forEach((m) => wc(m.store.getState(), i));
  (s = c.gl.xr) != null && s.isPresenting || !c.internal.active || c.frameloop === "never" || (i > 1 ? c.internal.frames = Math.min(60, c.internal.frames + i) : Pc ? c.internal.frames = 2 : c.internal.frames = 1, Gu || (Gu = !0, requestAnimationFrame(Qo)));
}
function po(c, i = !0, s, m) {
  if (i && Ya("before", c), s) Fc(c, s, m);
  else for (const o of He.values()) Fc(c, o.store.getState());
  i && Ya("after", c);
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
  } = Qd(c);
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
          const C = o.handlers[E], [M, r] = Jc[E];
          s.addEventListener(M, C, {
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
            const E = m.handlers[o], [C] = Jc[o];
            m.connected.removeEventListener(C, E);
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
function cp({ debounce: c, scroll: i, polyfill: s, offsetSize: m } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const o = s || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!o) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [E, C] = Me({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), M = Js({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: E, orientationHandler: null }), r = c ? typeof c == "number" ? c : c.scroll : null, H = c ? typeof c == "number" ? c : c.resize : null, _ = Js(!1);
  Sl(() => (_.current = !0, () => void (_.current = !1)));
  const [z, g, R] = ro(() => {
    const T = () => {
      if (!M.current.element) return;
      const { left: N, top: Z, width: K, height: x, bottom: G, right: nt, x: st, y: lt } = M.current.element.getBoundingClientRect(), P = { left: N, top: Z, width: K, height: x, bottom: G, right: nt, x: st, y: lt };
      M.current.element instanceof HTMLElement && m && (P.height = M.current.element.offsetHeight, P.width = M.current.element.offsetWidth), Object.freeze(P), _.current && !op(M.current.lastBounds, P) && C(M.current.lastBounds = P);
    };
    return [T, H ? yo(T, H) : T, r ? yo(T, r) : T];
  }, [C, m, r, H]);
  function Q() {
    M.current.scrollContainers && (M.current.scrollContainers.forEach((T) => T.removeEventListener("scroll", R, !0)), M.current.scrollContainers = null), M.current.resizeObserver && (M.current.resizeObserver.disconnect(), M.current.resizeObserver = null), M.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", M.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", M.current.orientationHandler));
  }
  function V() {
    M.current.element && (M.current.resizeObserver = new o(R), M.current.resizeObserver.observe(M.current.element), i && M.current.scrollContainers && M.current.scrollContainers.forEach((T) => T.addEventListener("scroll", R, { capture: !0, passive: !0 })), M.current.orientationHandler = () => {
      R();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", M.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", M.current.orientationHandler));
  }
  const B = (T) => {
    !T || T === M.current.element || (Q(), M.current.element = T, M.current.scrollContainers = Yo(T), V());
  };
  return fp(R, !!i), ip(g), Sl(() => {
    Q(), V();
  }, [i, R, g]), Sl(() => Q, []), [B, E, z];
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
function Yo(c) {
  const i = [];
  if (!c || c === document.body) return i;
  const { overflow: s, overflowX: m, overflowY: o } = window.getComputedStyle(c);
  return [s, m, o].some((E) => E === "auto" || E === "scroll") && i.push(c), [...i, ...Yo(c.parentElement)];
}
const sp = ["x", "y", "top", "bottom", "left", "right", "width", "height"], op = (c, i) => sp.every((s) => c[s] === i[s]);
function vp({
  ref: c,
  children: i,
  fallback: s,
  resize: m,
  style: o,
  gl: E,
  events: C = np,
  eventSource: M,
  eventPrefix: r,
  shadows: H,
  linear: _,
  flat: z,
  legacy: g,
  orthographic: R,
  frameloop: Q,
  dpr: V,
  performance: B,
  raycaster: T,
  camera: N,
  scene: Z,
  onPointerMissed: K,
  onCreated: x,
  ...G
}) {
  ft.useMemo(() => Ld(W), []);
  const nt = gd(), [st, lt] = cp({
    scroll: !0,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...m
  }), P = ft.useRef(null), I = ft.useRef(null);
  ft.useImperativeHandle(c, () => P.current);
  const Kt = go(K), [$, dt] = ft.useState(!1), [Mt, S] = ft.useState(!1);
  if ($) throw $;
  if (Mt) throw Mt;
  const O = ft.useRef(null);
  return Ga(() => {
    const Y = P.current;
    if (lt.width > 0 && lt.height > 0 && Y) {
      O.current || (O.current = tp(Y));
      async function J() {
        await O.current.configure({
          gl: E,
          scene: Z,
          events: C,
          shadows: H,
          linear: _,
          flat: z,
          legacy: g,
          orthographic: R,
          frameloop: Q,
          dpr: V,
          performance: B,
          raycaster: T,
          camera: N,
          size: lt,
          // Pass mutable reference to onPointerMissed so it's free to update
          onPointerMissed: (...k) => Kt.current == null ? void 0 : Kt.current(...k),
          onCreated: (k) => {
            k.events.connect == null || k.events.connect(M ? bd(M) ? M.current : M : I.current), r && k.setEvents({
              compute: (ct, Nt) => {
                const et = ct[r + "X"], Ut = ct[r + "Y"];
                Nt.pointer.set(et / Nt.size.width * 2 - 1, -(Ut / Nt.size.height) * 2 + 1), Nt.raycaster.setFromCamera(Nt.pointer, Nt.camera);
              }
            }), x?.(k);
          }
        }), O.current.render(/* @__PURE__ */ ht(nt, {
          children: /* @__PURE__ */ ht(Hd, {
            set: S,
            children: /* @__PURE__ */ ht(ft.Suspense, {
              fallback: /* @__PURE__ */ ht(_d, {
                set: dt
              }),
              children: i ?? null
            })
          })
        }));
      }
      J();
    }
  }), ft.useEffect(() => {
    const Y = P.current;
    if (Y) return () => Bo(Y);
  }, []), /* @__PURE__ */ ht("div", {
    ref: I,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: M ? "none" : "auto",
      ...o
    },
    ...G,
    children: /* @__PURE__ */ ht("div", {
      ref: st,
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
function mp(c) {
  return /* @__PURE__ */ ht(To, {
    children: /* @__PURE__ */ ht(vp, {
      ...c
    })
  });
}
function dp() {
  return /* @__PURE__ */ Qa("group", { children: [
    /* @__PURE__ */ Qa("mesh", { rotation: [0, 0, Math.PI / 2], children: [
      /* @__PURE__ */ ht("cylinderGeometry", { args: [3e-3, 3e-3, 0.3, 32] }),
      /* @__PURE__ */ ht("meshStandardMaterial", { color: "red" })
    ] }),
    /* @__PURE__ */ Qa("mesh", { position: [0.15, 0, 0], rotation: [0, 0, -Math.PI / 2], children: [
      /* @__PURE__ */ ht("coneGeometry", { args: [9e-3, 0.03, 32] }),
      /* @__PURE__ */ ht("meshStandardMaterial", { color: "red" })
    ] })
  ] });
}
function pp({ spinRate: c, playing: i, spinAxis: s, seam_orientation_lat: m, seam_orientation_lon: o, userRotX: E, userRotY: C, useSeamOrientation: M }) {
  const r = kc(Wm, "/models/baseball.gltf"), H = _e.useRef(), _ = _e.useRef(), z = _e.useRef(), { invalidate: g } = Vd();
  return Sl(() => {
    r.scene && r.scene.rotation.set(Math.PI / 2, 3 * Math.PI / 2, 0);
  }, [r]), Sl(() => {
    if (_.current) {
      if (_.current.quaternion.identity(), M && m != null && o != null && s && !isNaN(m) && !isNaN(o)) {
        const R = W.MathUtils.degToRad(m), Q = W.MathUtils.degToRad(o), V = Math.cos(R) * Math.sin(Q), B = Math.sin(R), T = Math.cos(R) * Math.cos(Q), N = new W.Vector3(-V, B, T).normalize(), Z = new W.Vector3(1, 0, 0), K = new W.Quaternion().setFromUnitVectors(
          Z,
          N
        );
        _.current.quaternion.copy(K);
      }
      if (E !== 0 || C !== 0) {
        const R = W.MathUtils.degToRad(E), Q = new W.Quaternion().setFromAxisAngle(
          new W.Vector3(0, 1, 0),
          R
        ), V = W.MathUtils.degToRad(C), B = new W.Quaternion().setFromAxisAngle(
          new W.Vector3(1, 0, 0),
          V
        );
        _.current.quaternion.multiply(Q).multiply(B);
      }
      g();
    }
  }, [M, m, o, s, E, C, g]), Sl(() => {
    if (z.current && s) {
      const R = new W.Vector3(1, 0, 0), Q = new W.Quaternion().setFromUnitVectors(
        R,
        s.clone().normalize()
      );
      z.current.quaternion.copy(Q), g();
    }
  }, [s, g]), Gd((R, Q) => {
    if (i && H.current) {
      const B = c * 2 * Math.PI / 60 * Q, T = new W.Vector3(1, 0, 0), N = new W.Quaternion();
      N.setFromAxisAngle(T, B), H.current.quaternion.multiplyQuaternions(N, H.current.quaternion);
    }
  }), /* @__PURE__ */ ht("group", { children: /* @__PURE__ */ Qa("group", { ref: z, children: [
    /* @__PURE__ */ ht(dp, {}),
    /* @__PURE__ */ ht("group", { ref: H, children: /* @__PURE__ */ ht("group", { ref: _, children: /* @__PURE__ */ ht("primitive", { object: r.scene, scale: 2 }) }) })
  ] }) });
}
function yp() {
  const [c, i] = Me([]), [s, m] = Me(null), [o, E] = Me(!0), [C, M] = Me(new W.Vector3(1, 0, 0)), [r, H] = Me(0), [_, z] = Me(0);
  Sl(() => {
    fetch("/gilbert_augEighth.json").then((B) => B.json()).then((B) => {
      i(B || []), B && B.length > 0 && m(B[0].PitchUID);
    });
  }, []), Sl(() => {
    const B = (T) => {
      if (T.data?.type === "pitch_uid")
        console.log("Pitch UID changed:", T.data.value), m(T.data.value), H(0), z(0);
      else if (T.data?.type === "slider_update") {
        if ("spinVectorX" in T.data && "spinVectorY" in T.data && "spinVectorZ" in T.data) {
          const N = new W.Vector3(
            T.data.spinVectorX,
            T.data.spinVectorY,
            T.data.spinVectorZ
          ).normalize();
          console.log("Received spin vector - Tilt:", T.data.spinTilt, "Gyro:", T.data.spinGyro, "Vector:", N), M(N);
        }
        "ballX" in T.data && H(T.data.ballX), "ballY" in T.data && z(T.data.ballY);
      } else T.data?.type === "play_toggle" && E(!!T.data.value);
    };
    return window.addEventListener("message", B), () => window.removeEventListener("message", B);
  }, []);
  const g = ro(() => !s || !c.length ? null : c.find((B) => B.PitchUID === s) || null, [s, c]);
  Sl(() => {
    if (g) {
      const B = new W.Vector3(
        g.spin_backspin,
        g.spin_sidespin,
        -g.spin_gyrospin
      ).normalize();
      M(B);
    }
  }, [g]);
  const R = g?.seam_orientation_lat ?? null, Q = g?.seam_orientation_lon ?? null;
  return /* @__PURE__ */ ht("div", { style: { width: "100vw", height: "100vh", position: "relative" }, children: /* @__PURE__ */ Qa(mp, { camera: { position: [0, 0, 0.45], fov: 50 }, children: [
    /* @__PURE__ */ ht("ambientLight", { intensity: 1 }),
    /* @__PURE__ */ ht("directionalLight", { position: [0, 0, 0.3], intensity: 1 }),
    /* @__PURE__ */ ht(
      pp,
      {
        spinRate: 50,
        playing: o,
        spinAxis: C,
        seam_orientation_lat: R,
        seam_orientation_lon: Q,
        userRotX: r,
        userRotY: _,
        useSeamOrientation: !0
      }
    )
  ] }) });
}
const rp = document.getElementById("root"), hp = Lm(rp);
hp.render(/* @__PURE__ */ ht(yp, {}));
