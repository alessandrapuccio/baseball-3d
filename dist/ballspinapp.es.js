import { jsx as Ct, jsxs as Zm } from "https://esm.sh/react/jsx-runtime";
import * as it from "https://esm.sh/react";
import Qu, { useState as Km, useRef as Kc, useEffect as Ra, useMemo as Jm } from "https://esm.sh/react";
import { createRoot as xm } from "https://esm.sh/react-dom/client";
import * as dt from "https://esm.sh/three";
import { GLTFLoader as Lm } from "https://esm.sh/three/examples/jsm/loaders/GLTFLoader";
function pv(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Mc = { exports: {} }, Bl = {};
/**
 * @license React
 * react-reconciler-constants.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ks;
function Wm() {
  return Ks || (Ks = 1, Bl.ConcurrentRoot = 1, Bl.ContinuousEventPriority = 8, Bl.DefaultEventPriority = 32, Bl.DiscreteEventPriority = 2, Bl.IdleEventPriority = 268435456, Bl.LegacyRoot = 0, Bl.NoEventPriority = 0), Bl;
}
var Js;
function Fm() {
  return Js || (Js = 1, Mc.exports = Wm()), Mc.exports;
}
var Cu = Fm(), Hc = { exports: {} }, Oc = {}, gc = { exports: {} }, Uc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xs;
function Pm() {
  if (xs) return Uc;
  xs = 1;
  var c = Qu;
  function i(T, _) {
    return T === _ && (T !== 0 || 1 / T === 1 / _) || T !== T && _ !== _;
  }
  var s = typeof Object.is == "function" ? Object.is : i, m = c.useState, v = c.useEffect, E = c.useLayoutEffect, R = c.useDebugValue;
  function N(T, _) {
    var C = _(), Q = m({ inst: { value: C, getSnapshot: _ } }), V = Q[0].inst, J = Q[1];
    return E(
      function() {
        V.value = C, V.getSnapshot = _, S(V) && J({ inst: V });
      },
      [T, C, _]
    ), v(
      function() {
        return S(V) && J({ inst: V }), T(function() {
          S(V) && J({ inst: V });
        });
      },
      [T]
    ), R(C), C;
  }
  function S(T) {
    var _ = T.getSnapshot;
    T = T.value;
    try {
      var C = _();
      return !s(T, C);
    } catch {
      return !0;
    }
  }
  function U(T, _) {
    return _();
  }
  var H = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? U : N;
  return Uc.useSyncExternalStore = c.useSyncExternalStore !== void 0 ? c.useSyncExternalStore : H, Uc;
}
var Ls;
function wm() {
  return Ls || (Ls = 1, gc.exports = Pm()), gc.exports;
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
var Ws;
function Im() {
  if (Ws) return Oc;
  Ws = 1;
  var c = Qu, i = wm();
  function s(U, H) {
    return U === H && (U !== 0 || 1 / U === 1 / H) || U !== U && H !== H;
  }
  var m = typeof Object.is == "function" ? Object.is : s, v = i.useSyncExternalStore, E = c.useRef, R = c.useEffect, N = c.useMemo, S = c.useDebugValue;
  return Oc.useSyncExternalStoreWithSelector = function(U, H, T, _, C) {
    var Q = E(null);
    if (Q.current === null) {
      var V = { hasValue: !1, value: null };
      Q.current = V;
    } else V = Q.current;
    Q = N(
      function() {
        function M(Y) {
          if (!b) {
            if (b = !0, X = Y, Y = _(Y), C !== void 0 && V.hasValue) {
              var ut = V.value;
              if (C(ut, Y))
                return Z = ut;
            }
            return Z = Y;
          }
          if (ut = Z, m(X, Y)) return ut;
          var ft = _(Y);
          return C !== void 0 && C(ut, ft) ? (X = Y, ut) : (X = Y, Z = ft);
        }
        var b = !1, X, Z, x = T === void 0 ? null : T;
        return [
          function() {
            return M(H());
          },
          x === null ? void 0 : function() {
            return M(x());
          }
        ];
      },
      [H, T, _, C]
    );
    var J = v(U, Q[0], Q[1]);
    return R(
      function() {
        V.hasValue = !0, V.value = J;
      },
      [J]
    ), S(J), J;
  }, Oc;
}
var Fs;
function $m() {
  return Fs || (Fs = 1, Hc.exports = Im()), Hc.exports;
}
var km = $m();
const tp = /* @__PURE__ */ pv(km), Ps = (c) => {
  let i;
  const s = /* @__PURE__ */ new Set(), m = (U, H) => {
    const T = typeof U == "function" ? U(i) : U;
    if (!Object.is(T, i)) {
      const _ = i;
      i = H ?? (typeof T != "object" || T === null) ? T : Object.assign({}, i, T), s.forEach((C) => C(i, _));
    }
  }, v = () => i, N = { setState: m, getState: v, getInitialState: () => S, subscribe: (U) => (s.add(U), () => s.delete(U)) }, S = i = c(m, v, N);
  return N;
}, lp = (c) => c ? Ps(c) : Ps, { useSyncExternalStoreWithSelector: ep } = tp, ap = (c) => c;
function up(c, i = ap, s) {
  const m = ep(
    c.subscribe,
    c.getState,
    c.getInitialState,
    i,
    s
  );
  return Qu.useDebugValue(m), m;
}
const ws = (c, i) => {
  const s = lp(c), m = (v, E = i) => up(s, v, E);
  return Object.assign(m, s), m;
}, np = (c, i) => c ? ws(c, i) : ws;
var Ac = { exports: {} }, Dc = { exports: {} }, Cc = { exports: {} }, jc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Is;
function cp() {
  return Is || (Is = 1, function(c) {
    function i(h, O) {
      var D = h.length;
      h.push(O);
      t: for (; 0 < D; ) {
        var B = D - 1 >>> 1, K = h[B];
        if (0 < v(K, O))
          h[B] = O, h[D] = K, D = B;
        else break t;
      }
    }
    function s(h) {
      return h.length === 0 ? null : h[0];
    }
    function m(h) {
      if (h.length === 0) return null;
      var O = h[0], D = h.pop();
      if (D !== O) {
        h[0] = D;
        t: for (var B = 0, K = h.length, $ = K >>> 1; B < $; ) {
          var nt = 2 * (B + 1) - 1, Tt = h[nt], lt = nt + 1, gt = h[lt];
          if (0 > v(Tt, D))
            lt < K && 0 > v(gt, Tt) ? (h[B] = gt, h[lt] = D, B = lt) : (h[B] = Tt, h[nt] = D, B = nt);
          else if (lt < K && 0 > v(gt, D))
            h[B] = gt, h[lt] = D, B = lt;
          else break t;
        }
      }
      return O;
    }
    function v(h, O) {
      var D = h.sortIndex - O.sortIndex;
      return D !== 0 ? D : h.id - O.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      c.unstable_now = function() {
        return E.now();
      };
    } else {
      var R = Date, N = R.now();
      c.unstable_now = function() {
        return R.now() - N;
      };
    }
    var S = [], U = [], H = 1, T = null, _ = 3, C = !1, Q = !1, V = !1, J = typeof setTimeout == "function" ? setTimeout : null, M = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    function X(h) {
      for (var O = s(U); O !== null; ) {
        if (O.callback === null) m(U);
        else if (O.startTime <= h)
          m(U), O.sortIndex = O.expirationTime, i(S, O);
        else break;
        O = s(U);
      }
    }
    function Z(h) {
      if (V = !1, X(h), !Q)
        if (s(S) !== null)
          Q = !0, mt();
        else {
          var O = s(U);
          O !== null && bt(Z, O.startTime - h);
        }
    }
    var x = !1, Y = -1, ut = 5, ft = -1;
    function tt() {
      return !(c.unstable_now() - ft < ut);
    }
    function F() {
      if (x) {
        var h = c.unstable_now();
        ft = h;
        var O = !0;
        try {
          t: {
            Q = !1, V && (V = !1, M(Y), Y = -1), C = !0;
            var D = _;
            try {
              l: {
                for (X(h), T = s(S); T !== null && !(T.expirationTime > h && tt()); ) {
                  var B = T.callback;
                  if (typeof B == "function") {
                    T.callback = null, _ = T.priorityLevel;
                    var K = B(
                      T.expirationTime <= h
                    );
                    if (h = c.unstable_now(), typeof K == "function") {
                      T.callback = K, X(h), O = !0;
                      break l;
                    }
                    T === s(S) && m(S), X(h);
                  } else m(S);
                  T = s(S);
                }
                if (T !== null) O = !0;
                else {
                  var $ = s(U);
                  $ !== null && bt(
                    Z,
                    $.startTime - h
                  ), O = !1;
                }
              }
              break t;
            } finally {
              T = null, _ = D, C = !1;
            }
            O = void 0;
          }
        } finally {
          O ? w() : x = !1;
        }
      }
    }
    var w;
    if (typeof b == "function")
      w = function() {
        b(F);
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
    function mt() {
      x || (x = !0, w());
    }
    function bt(h, O) {
      Y = J(function() {
        h(c.unstable_now());
      }, O);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(h) {
      h.callback = null;
    }, c.unstable_continueExecution = function() {
      Q || C || (Q = !0, mt());
    }, c.unstable_forceFrameRate = function(h) {
      0 > h || 125 < h ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ut = 0 < h ? Math.floor(1e3 / h) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return _;
    }, c.unstable_getFirstCallbackNode = function() {
      return s(S);
    }, c.unstable_next = function(h) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = _;
      }
      var D = _;
      _ = O;
      try {
        return h();
      } finally {
        _ = D;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(h, O) {
      switch (h) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          h = 3;
      }
      var D = _;
      _ = h;
      try {
        return O();
      } finally {
        _ = D;
      }
    }, c.unstable_scheduleCallback = function(h, O, D) {
      var B = c.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? B + D : B) : D = B, h) {
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
      return K = D + K, h = {
        id: H++,
        callback: O,
        priorityLevel: h,
        startTime: D,
        expirationTime: K,
        sortIndex: -1
      }, D > B ? (h.sortIndex = D, i(U, h), s(S) === null && h === s(U) && (V ? (M(Y), Y = -1) : V = !0, bt(Z, D - B))) : (h.sortIndex = K, i(S, h), Q || C || (Q = !0, mt())), h;
    }, c.unstable_shouldYield = tt, c.unstable_wrapCallback = function(h) {
      var O = _;
      return function() {
        var D = _;
        _ = O;
        try {
          return h.apply(this, arguments);
        } finally {
          _ = D;
        }
      };
    };
  }(jc)), jc;
}
var $s;
function ip() {
  return $s || ($s = 1, Cc.exports = cp()), Cc.exports;
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
var ks;
function fp() {
  return ks || (ks = 1, function(c) {
    c.exports = function(i) {
      function s(t, l, e, a) {
        return new uo(t, l, e, a);
      }
      function m() {
      }
      function v(t) {
        var l = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
          l += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var e = 2; e < arguments.length; e++)
            l += "&args[]=" + encodeURIComponent(arguments[e]);
        }
        return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      function E(t) {
        return t === null || typeof t != "object" ? null : (t = ss && t[ss] || t["@@iterator"], typeof t == "function" ? t : null);
      }
      function R(t) {
        if (t == null) return null;
        if (typeof t == "function")
          return t.$$typeof === vo ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
          case je:
            return "Fragment";
          case Ce:
            return "Portal";
          case Ln:
            return "Profiler";
          case cs:
            return "StrictMode";
          case Fn:
            return "Suspense";
          case Pn:
            return "SuspenseList";
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case Wl:
              return (t.displayName || "Context") + ".Provider";
            case is:
              return (t._context.displayName || "Context") + ".Consumer";
            case Wn:
              var l = t.render;
              return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case wn:
              return l = t.displayName || null, l !== null ? l : R(t.type) || "Memo";
            case Fl:
              l = t._payload, t = t._init;
              try {
                return R(t(l));
              } catch {
              }
          }
        return null;
      }
      function N(t) {
        if (In === void 0)
          try {
            throw Error();
          } catch (e) {
            var l = e.stack.trim().match(/\n( *(at )?)/);
            In = l && l[1] || "", vs = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + In + t + vs;
      }
      function S(t, l) {
        if (!t || $n) return "";
        $n = !0;
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
                    } catch (P) {
                      var q = P;
                    }
                    Reflect.construct(t, [], j);
                  } else {
                    try {
                      j.call();
                    } catch (P) {
                      q = P;
                    }
                    t.call(j.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (P) {
                    q = P;
                  }
                  (j = t()) && typeof j.catch == "function" && j.catch(function() {
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
          var n = a.DetermineComponentFrameRoot(), f = n[0], o = n[1];
          if (f && o) {
            var d = f.split(`
`), z = o.split(`
`);
            for (u = a = 0; a < d.length && !d[a].includes("DetermineComponentFrameRoot"); )
              a++;
            for (; u < z.length && !z[u].includes(
              "DetermineComponentFrameRoot"
            ); )
              u++;
            if (a === d.length || u === z.length)
              for (a = d.length - 1, u = z.length - 1; 1 <= a && 0 <= u && d[a] !== z[u]; )
                u--;
            for (; 1 <= a && 0 <= u; a--, u--)
              if (d[a] !== z[u]) {
                if (a !== 1 || u !== 1)
                  do
                    if (a--, u--, 0 > u || d[a] !== z[u]) {
                      var A = `
` + d[a].replace(" at new ", " at ");
                      return t.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", t.displayName)), A;
                    }
                  while (1 <= a && 0 <= u);
                break;
              }
          }
        } finally {
          $n = !1, Error.prepareStackTrace = e;
        }
        return (e = t ? t.displayName || t.name : "") ? N(e) : "";
      }
      function U(t) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            return N(t.type);
          case 16:
            return N("Lazy");
          case 13:
            return N("Suspense");
          case 19:
            return N("SuspenseList");
          case 0:
          case 15:
            return t = S(t.type, !1), t;
          case 11:
            return t = S(t.type.render, !1), t;
          case 1:
            return t = S(t.type, !0), t;
          default:
            return "";
        }
      }
      function H(t) {
        try {
          var l = "";
          do
            l += U(t), t = t.return;
          while (t);
          return l;
        } catch (e) {
          return `
Error generating stack: ` + e.message + `
` + e.stack;
        }
      }
      function T(t) {
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
      function _(t) {
        if (T(t) !== t)
          throw Error(v(188));
      }
      function C(t) {
        var l = t.alternate;
        if (!l) {
          if (l = T(t), l === null) throw Error(v(188));
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
              if (n === e) return _(u), t;
              if (n === a) return _(u), l;
              n = n.sibling;
            }
            throw Error(v(188));
          }
          if (e.return !== a.return) e = u, a = n;
          else {
            for (var f = !1, o = u.child; o; ) {
              if (o === e) {
                f = !0, e = u, a = n;
                break;
              }
              if (o === a) {
                f = !0, a = u, e = n;
                break;
              }
              o = o.sibling;
            }
            if (!f) {
              for (o = n.child; o; ) {
                if (o === e) {
                  f = !0, e = n, a = u;
                  break;
                }
                if (o === a) {
                  f = !0, a = n, e = u;
                  break;
                }
                o = o.sibling;
              }
              if (!f) throw Error(v(189));
            }
          }
          if (e.alternate !== a) throw Error(v(190));
        }
        if (e.tag !== 3) throw Error(v(188));
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
      function M(t) {
        0 > qe || (t.current = uc[qe], uc[qe] = null, qe--);
      }
      function b(t, l) {
        qe++, uc[qe] = t.current, t.current = l;
      }
      function X(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (Hm(t) / Om | 0) | 0;
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
        var o = e & 134217727;
        return o !== 0 ? (e = o & ~u, e !== 0 ? a = Z(e) : (n &= o, n !== 0 ? a = Z(n) : t || (f = o & ~f, f !== 0 && (a = Z(f))))) : (o = e & ~u, o !== 0 ? a = Z(o) : n !== 0 ? a = Z(n) : t || (f = e & ~f, f !== 0 && (a = Z(f)))), a === 0 ? 0 : l !== 0 && l !== a && (l & u) === 0 && (u = a & -a, f = l & -l, u >= f || u === 32 && (f & 4194176) !== 0) ? l : a;
      }
      function Y(t, l) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
      }
      function ut(t, l) {
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
      function ft() {
        var t = vu;
        return vu <<= 1, (vu & 4194176) === 0 && (vu = 128), t;
      }
      function tt() {
        var t = ou;
        return ou <<= 1, (ou & 62914560) === 0 && (ou = 4194304), t;
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
        var o = t.entanglements, d = t.expirationTimes, z = t.hiddenUpdates;
        for (e = f & ~e; 0 < e; ) {
          var A = 31 - ll(e), j = 1 << A;
          o[A] = 0, d[A] = -1;
          var q = z[A];
          if (q !== null)
            for (z[A] = null, A = 0; A < q.length; A++) {
              var P = q[A];
              P !== null && (P.lane &= -536870913);
            }
          e &= ~j;
        }
        a !== 0 && I(t, a, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(f & ~l));
      }
      function I(t, l, e) {
        t.pendingLanes |= l, t.suspendedLanes &= ~l;
        var a = 31 - ll(l);
        t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 4194218;
      }
      function mt(t, l) {
        var e = t.entangledLanes |= l;
        for (t = t.entanglements; e; ) {
          var a = 31 - ll(e), u = 1 << a;
          u & l | t[a] & l && (t[a] |= l), e &= ~u;
        }
      }
      function bt(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function h(t) {
        if (el && typeof el.onCommitFiberRoot == "function")
          try {
            el.onCommitFiberRoot(
              Na,
              t,
              void 0,
              (t.current.flags & 128) === 128
            );
          } catch {
          }
      }
      function O(t) {
        if (typeof Cm == "function" && jm(t), el && typeof el.setStrictMode == "function")
          try {
            el.setStrictMode(Na, t);
          } catch {
          }
      }
      function D(t, l) {
        return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
      }
      function B(t, l) {
        if (typeof t == "object" && t !== null) {
          var e = Bs.get(t);
          return e !== void 0 ? e : (l = {
            value: t,
            source: l,
            stack: H(l)
          }, Bs.set(t, l), l);
        }
        return {
          value: t,
          source: l,
          stack: H(l)
        };
      }
      function K(t, l) {
        Ye[Qe++] = du, Ye[Qe++] = pu, pu = t, du = l;
      }
      function $(t, l, e) {
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
      function nt(t) {
        t.return !== null && (K(t, 1), $(t, 1, 0));
      }
      function Tt(t) {
        for (; t === pu; )
          pu = Ye[--Qe], Ye[Qe] = null, du = Ye[--Qe], Ye[Qe] = null;
        for (; t === pe; )
          pe = fl[--sl], fl[sl] = null, Dl = fl[--sl], fl[sl] = null, Al = fl[--sl], fl[sl] = null;
      }
      function lt(t, l) {
        b(wl, l), b(ba, t), b(Qt, null), t = po(l), M(Qt), b(Qt, t);
      }
      function gt() {
        M(Qt), M(ba), M(wl);
      }
      function Me(t) {
        t.memoizedState !== null && b(yu, t);
        var l = Qt.current, e = yo(l, t.type);
        l !== e && (b(ba, t), b(Qt, e));
      }
      function Qa(t) {
        ba.current === t && (M(Qt), M(ba)), yu.current === t && (M(yu), Ul ? me._currentValue = Re : me._currentValue2 = Re);
      }
      function ue(t) {
        var l = Error(v(418, ""));
        throw na(B(l, t)), ic;
      }
      function ti(t, l) {
        if (!cl) throw Error(v(175));
        fm(
          t.stateNode,
          t.type,
          t.memoizedProps,
          l,
          t
        ) || ue(t);
      }
      function li(t) {
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
      function aa(t) {
        if (!cl || t !== xt) return !1;
        if (!st) return li(t), st = !0, !1;
        var l = !1;
        if (Xt ? t.tag !== 3 && t.tag !== 27 && (t.tag !== 5 || Ms(t.type) && !su(t.type, t.memoizedProps)) && (l = !0) : t.tag !== 3 && (t.tag !== 5 || Ms(t.type) && !su(t.type, t.memoizedProps)) && (l = !0), l && Zt && ue(t), li(t), t.tag === 13) {
          if (!cl) throw Error(v(316));
          if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(v(317));
          Zt = om(t);
        } else
          Zt = xt ? bs(t.stateNode) : null;
        return !0;
      }
      function ua() {
        cl && (Zt = xt = null, st = !1);
      }
      function na(t) {
        rl === null ? rl = [t] : rl.push(t);
      }
      function Ga() {
        for (var t = Ge, l = fc = Ge = 0; l < t; ) {
          var e = vl[l];
          vl[l++] = null;
          var a = vl[l];
          vl[l++] = null;
          var u = vl[l];
          vl[l++] = null;
          var n = vl[l];
          if (vl[l++] = null, a !== null && u !== null) {
            var f = a.pending;
            f === null ? u.next = u : (u.next = f.next, f.next = u), a.pending = u;
          }
          n !== 0 && ei(e, u, n);
        }
      }
      function Va(t, l, e, a) {
        vl[Ge++] = t, vl[Ge++] = l, vl[Ge++] = e, vl[Ge++] = a, fc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
      }
      function Vu(t, l, e, a) {
        return Va(t, l, e, a), Xa(t);
      }
      function Yl(t, l) {
        return Va(t, null, null, l), Xa(t);
      }
      function ei(t, l, e) {
        t.lanes |= e;
        var a = t.alternate;
        a !== null && (a.lanes |= e);
        for (var u = !1, n = t.return; n !== null; )
          n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (u = !0)), t = n, n = n.return;
        u && l !== null && t.tag === 3 && (n = t.stateNode, u = 31 - ll(e), n = n.hiddenUpdates, t = n[u], t === null ? n[u] = [l] : t.push(l), l.lane = e | 536870912);
      }
      function Xa(t) {
        if (50 < Ca)
          throw Ca = 0, _c = null, Error(v(185));
        for (var l = t.return; l !== null; )
          t = l, l = t.return;
        return t.tag === 3 ? t.stateNode : null;
      }
      function Sl(t) {
        t !== Ve && t.next === null && (Ve === null ? ru = Ve = t : Ve = Ve.next = t), hu = !0, sc || (sc = !0, qv(Rv));
      }
      function He(t, l) {
        if (!vc && hu) {
          vc = !0;
          do
            for (var e = !1, a = ru; a !== null; ) {
              if (t !== 0) {
                var u = a.pendingLanes;
                if (u === 0) var n = 0;
                else {
                  var f = a.suspendedLanes, o = a.pingedLanes;
                  n = (1 << 31 - ll(42 | t) + 1) - 1, n &= u & ~(f & ~o), n = n & 201326677 ? n & 201326677 | 1 : n ? n | 2 : 0;
                }
                n !== 0 && (e = !0, ni(a, n));
              } else
                n = ct, n = x(
                  a,
                  a === ht ? n : 0
                ), (n & 3) === 0 || Y(a, n) || (e = !0, ni(a, n));
              a = a.next;
            }
          while (e);
          vc = !1;
        }
      }
      function Rv() {
        hu = sc = !1;
        var t = 0;
        Xe !== 0 && (bo() && (t = Xe), Xe = 0);
        for (var l = yl(), e = null, a = ru; a !== null; ) {
          var u = a.next, n = ai(a, l);
          n === 0 ? (a.next = null, e === null ? ru = u : e.next = u, u === null && (Ve = e)) : (e = a, (t !== 0 || (n & 3) !== 0) && (hu = !0)), a = u;
        }
        He(t);
      }
      function ai(t, l) {
        for (var e = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
          var f = 31 - ll(n), o = 1 << f, d = u[f];
          d === -1 ? ((o & e) === 0 || (o & a) !== 0) && (u[f] = ut(o, l)) : d <= l && (t.expiredLanes |= o), n &= ~o;
        }
        if (l = ht, e = ct, e = x(
          t,
          t === l ? e : 0
        ), a = t.callbackNode, e === 0 || t === l && St === 2 || t.cancelPendingCommit !== null)
          return a !== null && a !== null && nc(a), t.callbackNode = null, t.callbackPriority = 0;
        if ((e & 3) === 0 || Y(t, e)) {
          if (l = e & -e, l === t.callbackPriority) return l;
          switch (a !== null && nc(a), bt(e)) {
            case 2:
            case 8:
              e = Am;
              break;
            case 32:
              e = cc;
              break;
            case 268435456:
              e = Dm;
              break;
            default:
              e = cc;
          }
          return a = ui.bind(null, t), e = mu(e, a), t.callbackPriority = l, t.callbackNode = e, l;
        }
        return a !== null && a !== null && nc(a), t.callbackPriority = 2, t.callbackNode = null, 2;
      }
      function ui(t, l) {
        var e = t.callbackNode;
        if (se() && t.callbackNode !== e)
          return null;
        var a = ct;
        return a = x(
          t,
          t === ht ? a : 0
        ), a === 0 ? null : (Gf(t, a, l), ai(t, yl()), t.callbackNode != null && t.callbackNode === e ? ui.bind(null, t) : null);
      }
      function ni(t, l) {
        if (se()) return null;
        Gf(t, l, !0);
      }
      function qv(t) {
        Uo ? Ao(function() {
          (rt & 6) !== 0 ? mu(qs, t) : t();
        }) : mu(qs, t);
      }
      function Xu() {
        return Xe === 0 && (Xe = ft()), Xe;
      }
      function Bv(t, l) {
        if (_a === null) {
          var e = _a = [];
          oc = 0, Ze = Xu(), Ke = {
            status: "pending",
            value: void 0,
            then: function(a) {
              e.push(a);
            }
          };
        }
        return oc++, l.then(ci, ci), l;
      }
      function ci() {
        if (--oc === 0 && _a !== null) {
          Ke !== null && (Ke.status = "fulfilled");
          var t = _a;
          _a = null, Ze = 0, Ke = null;
          for (var l = 0; l < t.length; l++) (0, t[l])();
        }
      }
      function Yv(t, l) {
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
      function Zu(t) {
        t.updateQueue = {
          baseState: t.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null
        };
      }
      function Ku(t, l) {
        t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null
        });
      }
      function Ql(t) {
        return { lane: t, tag: 0, payload: null, callback: null, next: null };
      }
      function Gl(t, l, e) {
        var a = t.updateQueue;
        if (a === null) return null;
        if (a = a.shared, (rt & 2) !== 0) {
          var u = a.pending;
          return u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l, l = Xa(t), ei(t, null, e), l;
        }
        return Va(t, a, l, e), Xa(t);
      }
      function ca(t, l, e) {
        if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194176) !== 0)) {
          var a = l.lanes;
          a &= t.pendingLanes, e |= a, l.lanes = e, mt(t, e);
        }
      }
      function Ju(t, l) {
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
      function ia() {
        if (mc) {
          var t = Ke;
          if (t !== null) throw t;
        }
      }
      function fa(t, l, e, a) {
        mc = !1;
        var u = t.updateQueue;
        Il = !1;
        var n = u.firstBaseUpdate, f = u.lastBaseUpdate, o = u.shared.pending;
        if (o !== null) {
          u.shared.pending = null;
          var d = o, z = d.next;
          d.next = null, f === null ? n = z : f.next = z, f = d;
          var A = t.alternate;
          A !== null && (A = A.updateQueue, o = A.lastBaseUpdate, o !== f && (o === null ? A.firstBaseUpdate = z : o.next = z, A.lastBaseUpdate = d));
        }
        if (n !== null) {
          var j = u.baseState;
          f = 0, A = z = d = null, o = n;
          do {
            var q = o.lane & -536870913, P = q !== o.lane;
            if (P ? (ct & q) === q : (a & q) === q) {
              q !== 0 && q === Ze && (mc = !0), A !== null && (A = A.next = {
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: null,
                next: null
              });
              t: {
                var pl = t, ja = o;
                q = l;
                var Ne = e;
                switch (ja.tag) {
                  case 1:
                    if (pl = ja.payload, typeof pl == "function") {
                      j = pl.call(
                        Ne,
                        j,
                        q
                      );
                      break t;
                    }
                    j = pl;
                    break t;
                  case 3:
                    pl.flags = pl.flags & -65537 | 128;
                  case 0:
                    if (pl = ja.payload, q = typeof pl == "function" ? pl.call(Ne, j, q) : pl, q == null) break t;
                    j = xn({}, j, q);
                    break t;
                  case 2:
                    Il = !0;
                }
              }
              q = o.callback, q !== null && (t.flags |= 64, P && (t.flags |= 8192), P = u.callbacks, P === null ? u.callbacks = [q] : P.push(q));
            } else
              P = {
                lane: q,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null
              }, A === null ? (z = A = P, d = j) : A = A.next = P, f |= q;
            if (o = o.next, o === null) {
              if (o = u.shared.pending, o === null)
                break;
              P = o, o = P.next, P.next = null, u.lastBaseUpdate = P, u.shared.pending = null;
            }
          } while (!0);
          A === null && (d = j), u.baseState = d, u.firstBaseUpdate = z, u.lastBaseUpdate = A, n === null && (u.shared.lanes = 0), te |= f, t.lanes = f, t.memoizedState = j;
        }
      }
      function ii(t, l) {
        if (typeof t != "function")
          throw Error(v(191, t));
        t.call(l);
      }
      function fi(t, l) {
        var e = t.callbacks;
        if (e !== null)
          for (t.callbacks = null, t = 0; t < e.length; t++)
            ii(e[t], l);
      }
      function Za(t, l) {
        if (al(t, l)) return !0;
        if (typeof t != "object" || t === null || typeof l != "object" || l === null)
          return !1;
        var e = Object.keys(t), a = Object.keys(l);
        if (e.length !== a.length) return !1;
        for (a = 0; a < e.length; a++) {
          var u = e[a];
          if (!Rm.call(l, u) || !al(t[u], l[u]))
            return !1;
        }
        return !0;
      }
      function si(t) {
        return t = t.status, t === "fulfilled" || t === "rejected";
      }
      function Ka() {
      }
      function vi(t, l, e) {
        switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(Ka, Ka), l = e), l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, t === Ma ? Error(v(483)) : t;
          default:
            if (typeof l.status == "string") l.then(Ka, Ka);
            else {
              if (t = ht, t !== null && 100 < t.shellSuspendCounter)
                throw Error(v(482));
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
                throw t = l.reason, t === Ma ? Error(v(483)) : t;
            }
            throw Je = l, Ma;
        }
      }
      function oi() {
        if (Je === null) throw Error(v(459));
        var t = Je;
        return Je = null, t;
      }
      function Ja(t) {
        var l = Ha;
        return Ha += 1, xe === null && (xe = []), vi(xe, t, l);
      }
      function sa(t, l) {
        l = l.props.ref, t.ref = l !== void 0 ? l : null;
      }
      function xa(t, l) {
        throw l.$$typeof === io ? Error(v(525)) : (t = Object.prototype.toString.call(l), Error(
          v(
            31,
            t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
          )
        ));
      }
      function mi(t) {
        var l = t._init;
        return l(t._payload);
      }
      function pi(t) {
        function l(y, p) {
          if (t) {
            var r = y.deletions;
            r === null ? (y.deletions = [p], y.flags |= 16) : r.push(p);
          }
        }
        function e(y, p) {
          if (!t) return null;
          for (; p !== null; )
            l(y, p), p = p.sibling;
          return null;
        }
        function a(y) {
          for (var p = /* @__PURE__ */ new Map(); y !== null; )
            y.key !== null ? p.set(y.key, y) : p.set(y.index, y), y = y.sibling;
          return p;
        }
        function u(y, p) {
          return y = Ll(y, p), y.index = 0, y.sibling = null, y;
        }
        function n(y, p, r) {
          return y.index = r, t ? (r = y.alternate, r !== null ? (r = r.index, r < p ? (y.flags |= 33554434, p) : r) : (y.flags |= 33554434, p)) : (y.flags |= 1048576, p);
        }
        function f(y) {
          return t && y.alternate === null && (y.flags |= 33554434), y;
        }
        function o(y, p, r, g) {
          return p === null || p.tag !== 6 ? (p = Zn(r, y.mode, g), p.return = y, p) : (p = u(p, r), p.return = y, p);
        }
        function d(y, p, r, g) {
          var G = r.type;
          return G === je ? A(
            y,
            p,
            r.props.children,
            g,
            r.key
          ) : p !== null && (p.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Fl && mi(G) === p.type) ? (p = u(p, r.props), sa(p, r), p.return = y, p) : (p = cu(
            r.type,
            r.key,
            r.props,
            null,
            y.mode,
            g
          ), sa(p, r), p.return = y, p);
        }
        function z(y, p, r, g) {
          return p === null || p.tag !== 4 || p.stateNode.containerInfo !== r.containerInfo || p.stateNode.implementation !== r.implementation ? (p = Kn(r, y.mode, g), p.return = y, p) : (p = u(p, r.children || []), p.return = y, p);
        }
        function A(y, p, r, g, G) {
          return p === null || p.tag !== 7 ? (p = ve(
            r,
            y.mode,
            g,
            G
          ), p.return = y, p) : (p = u(p, r), p.return = y, p);
        }
        function j(y, p, r) {
          if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
            return p = Zn(
              "" + p,
              y.mode,
              r
            ), p.return = y, p;
          if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
              case iu:
                return r = cu(
                  p.type,
                  p.key,
                  p.props,
                  null,
                  y.mode,
                  r
                ), sa(r, p), r.return = y, r;
              case Ce:
                return p = Kn(
                  p,
                  y.mode,
                  r
                ), p.return = y, p;
              case Fl:
                var g = p._init;
                return p = g(p._payload), j(y, p, r);
            }
            if (fu(p) || E(p))
              return p = ve(
                p,
                y.mode,
                r,
                null
              ), p.return = y, p;
            if (typeof p.then == "function")
              return j(y, Ja(p), r);
            if (p.$$typeof === Wl)
              return j(
                y,
                tu(y, p),
                r
              );
            xa(y, p);
          }
          return null;
        }
        function q(y, p, r, g) {
          var G = p !== null ? p.key : null;
          if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint")
            return G !== null ? null : o(y, p, "" + r, g);
          if (typeof r == "object" && r !== null) {
            switch (r.$$typeof) {
              case iu:
                return r.key === G ? d(y, p, r, g) : null;
              case Ce:
                return r.key === G ? z(y, p, r, g) : null;
              case Fl:
                return G = r._init, r = G(r._payload), q(y, p, r, g);
            }
            if (fu(r) || E(r))
              return G !== null ? null : A(y, p, r, g, null);
            if (typeof r.then == "function")
              return q(
                y,
                p,
                Ja(r),
                g
              );
            if (r.$$typeof === Wl)
              return q(
                y,
                p,
                tu(y, r),
                g
              );
            xa(y, r);
          }
          return null;
        }
        function P(y, p, r, g, G) {
          if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
            return y = y.get(r) || null, o(p, y, "" + g, G);
          if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
              case iu:
                return y = y.get(
                  g.key === null ? r : g.key
                ) || null, d(p, y, g, G);
              case Ce:
                return y = y.get(
                  g.key === null ? r : g.key
                ) || null, z(p, y, g, G);
              case Fl:
                var Et = g._init;
                return g = Et(g._payload), P(
                  y,
                  p,
                  r,
                  g,
                  G
                );
            }
            if (fu(g) || E(g))
              return y = y.get(r) || null, A(p, y, g, G, null);
            if (typeof g.then == "function")
              return P(
                y,
                p,
                r,
                Ja(g),
                G
              );
            if (g.$$typeof === Wl)
              return P(
                y,
                p,
                r,
                tu(p, g),
                G
              );
            xa(p, g);
          }
          return null;
        }
        function pl(y, p, r, g) {
          for (var G = null, Et = null, L = p, vt = p = 0, Bt = null; L !== null && vt < r.length; vt++) {
            L.index > vt ? (Bt = L, L = null) : Bt = L.sibling;
            var ot = q(
              y,
              L,
              r[vt],
              g
            );
            if (ot === null) {
              L === null && (L = Bt);
              break;
            }
            t && L && ot.alternate === null && l(y, L), p = n(ot, p, vt), Et === null ? G = ot : Et.sibling = ot, Et = ot, L = Bt;
          }
          if (vt === r.length)
            return e(y, L), st && K(y, vt), G;
          if (L === null) {
            for (; vt < r.length; vt++)
              L = j(y, r[vt], g), L !== null && (p = n(
                L,
                p,
                vt
              ), Et === null ? G = L : Et.sibling = L, Et = L);
            return st && K(y, vt), G;
          }
          for (L = a(L); vt < r.length; vt++)
            Bt = P(
              L,
              y,
              vt,
              r[vt],
              g
            ), Bt !== null && (t && Bt.alternate !== null && L.delete(
              Bt.key === null ? vt : Bt.key
            ), p = n(
              Bt,
              p,
              vt
            ), Et === null ? G = Bt : Et.sibling = Bt, Et = Bt);
          return t && L.forEach(function(ee) {
            return l(y, ee);
          }), st && K(y, vt), G;
        }
        function ja(y, p, r, g) {
          if (r == null) throw Error(v(151));
          for (var G = null, Et = null, L = p, vt = p = 0, Bt = null, ot = r.next(); L !== null && !ot.done; vt++, ot = r.next()) {
            L.index > vt ? (Bt = L, L = null) : Bt = L.sibling;
            var ee = q(y, L, ot.value, g);
            if (ee === null) {
              L === null && (L = Bt);
              break;
            }
            t && L && ee.alternate === null && l(y, L), p = n(ee, p, vt), Et === null ? G = ee : Et.sibling = ee, Et = ee, L = Bt;
          }
          if (ot.done)
            return e(y, L), st && K(y, vt), G;
          if (L === null) {
            for (; !ot.done; vt++, ot = r.next())
              ot = j(y, ot.value, g), ot !== null && (p = n(
                ot,
                p,
                vt
              ), Et === null ? G = ot : Et.sibling = ot, Et = ot);
            return st && K(y, vt), G;
          }
          for (L = a(L); !ot.done; vt++, ot = r.next())
            ot = P(
              L,
              y,
              vt,
              ot.value,
              g
            ), ot !== null && (t && ot.alternate !== null && L.delete(ot.key === null ? vt : ot.key), p = n(ot, p, vt), Et === null ? G = ot : Et.sibling = ot, Et = ot);
          return t && L.forEach(function(Xm) {
            return l(y, Xm);
          }), st && K(y, vt), G;
        }
        function Ne(y, p, r, g) {
          if (typeof r == "object" && r !== null && r.type === je && r.key === null && (r = r.props.children), typeof r == "object" && r !== null) {
            switch (r.$$typeof) {
              case iu:
                t: {
                  for (var G = r.key; p !== null; ) {
                    if (p.key === G) {
                      if (G = r.type, G === je) {
                        if (p.tag === 7) {
                          e(
                            y,
                            p.sibling
                          ), g = u(
                            p,
                            r.props.children
                          ), g.return = y, y = g;
                          break t;
                        }
                      } else if (p.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Fl && mi(G) === p.type) {
                        e(
                          y,
                          p.sibling
                        ), g = u(p, r.props), sa(g, r), g.return = y, y = g;
                        break t;
                      }
                      e(y, p);
                      break;
                    } else l(y, p);
                    p = p.sibling;
                  }
                  r.type === je ? (g = ve(
                    r.props.children,
                    y.mode,
                    g,
                    r.key
                  ), g.return = y, y = g) : (g = cu(
                    r.type,
                    r.key,
                    r.props,
                    null,
                    y.mode,
                    g
                  ), sa(g, r), g.return = y, y = g);
                }
                return f(y);
              case Ce:
                t: {
                  for (G = r.key; p !== null; ) {
                    if (p.key === G)
                      if (p.tag === 4 && p.stateNode.containerInfo === r.containerInfo && p.stateNode.implementation === r.implementation) {
                        e(
                          y,
                          p.sibling
                        ), g = u(
                          p,
                          r.children || []
                        ), g.return = y, y = g;
                        break t;
                      } else {
                        e(y, p);
                        break;
                      }
                    else l(y, p);
                    p = p.sibling;
                  }
                  g = Kn(r, y.mode, g), g.return = y, y = g;
                }
                return f(y);
              case Fl:
                return G = r._init, r = G(r._payload), Ne(
                  y,
                  p,
                  r,
                  g
                );
            }
            if (fu(r))
              return pl(
                y,
                p,
                r,
                g
              );
            if (E(r)) {
              if (G = E(r), typeof G != "function")
                throw Error(v(150));
              return r = G.call(r), ja(
                y,
                p,
                r,
                g
              );
            }
            if (typeof r.then == "function")
              return Ne(
                y,
                p,
                Ja(r),
                g
              );
            if (r.$$typeof === Wl)
              return Ne(
                y,
                p,
                tu(y, r),
                g
              );
            xa(y, r);
          }
          return typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint" ? (r = "" + r, p !== null && p.tag === 6 ? (e(y, p.sibling), g = u(p, r), g.return = y, y = g) : (e(y, p), g = Zn(r, y.mode, g), g.return = y, y = g), f(y)) : e(y, p);
        }
        return function(y, p, r, g) {
          try {
            Ha = 0;
            var G = Ne(
              y,
              p,
              r,
              g
            );
            return xe = null, G;
          } catch (L) {
            if (L === Ma) throw L;
            var Et = s(29, L, null, y.mode);
            return Et.lanes = g, Et.return = y, Et;
          } finally {
          }
        };
      }
      function di(t, l) {
        t = ql, b(Eu, t), b(Le, l), ql = t | l.baseLanes;
      }
      function xu() {
        b(Eu, ql), b(Le, Le.current);
      }
      function Lu() {
        ql = Eu.current, M(Le), M(Eu);
      }
      function Vl(t) {
        var l = t.alternate;
        b(jt, jt.current & 1), b(ol, t), zl === null && (l === null || Le.current !== null || l.memoizedState !== null) && (zl = t);
      }
      function yi(t) {
        if (t.tag === 22) {
          if (b(jt, jt.current), b(ol, t), zl === null) {
            var l = t.alternate;
            l !== null && l.memoizedState !== null && (zl = t);
          }
        } else Xl();
      }
      function Xl() {
        b(jt, jt.current), b(ol, ol.current);
      }
      function bl(t) {
        M(ol), zl === t && (zl = null), M(jt);
      }
      function La(t) {
        for (var l = t; l !== null; ) {
          if (l.tag === 13) {
            var e = l.memoizedState;
            if (e !== null && (e = e.dehydrated, e === null || lc(e) || ec(e)))
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
        throw Error(v(321));
      }
      function Wu(t, l) {
        if (l === null) return !1;
        for (var e = 0; e < l.length && e < t.length; e++)
          if (!al(t[e], l[e])) return !1;
        return !0;
      }
      function Fu(t, l, e, a, u, n) {
        return $l = n, k = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, W.H = t === null || t.memoizedState === null ? re : kl, ye = !1, n = e(a, u), ye = !1, We && (n = hi(
          l,
          e,
          a,
          u
        )), ri(t), n;
      }
      function ri(t) {
        W.H = Tl;
        var l = yt !== null && yt.next !== null;
        if ($l = 0, At = yt = k = null, zu = !1, Oa = 0, Fe = null, l) throw Error(v(300));
        t === null || Rt || (t = t.dependencies, t !== null && ka(t) && (Rt = !0));
      }
      function hi(t, l, e, a) {
        k = t;
        var u = 0;
        do {
          if (We && (Fe = null), Oa = 0, We = !1, 25 <= u) throw Error(v(301));
          if (u += 1, At = yt = null, t.updateQueue != null) {
            var n = t.updateQueue;
            n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
          }
          W.H = he, n = l(e, a);
        } while (We);
        return n;
      }
      function Qv() {
        var t = W.H, l = t.useState()[0];
        return l = typeof l.then == "function" ? va(l) : l, t = t.useState()[0], (yt !== null ? yt.memoizedState : null) !== t && (k.flags |= 1024), l;
      }
      function Pu() {
        var t = Tu !== 0;
        return Tu = 0, t;
      }
      function wu(t, l, e) {
        l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
      }
      function Iu(t) {
        if (zu) {
          for (t = t.memoizedState; t !== null; ) {
            var l = t.queue;
            l !== null && (l.pending = null), t = t.next;
          }
          zu = !1;
        }
        $l = 0, At = yt = k = null, We = !1, Oa = Tu = 0, Fe = null;
      }
      function Wt() {
        var t = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return At === null ? k.memoizedState = At = t : At = At.next = t, At;
      }
      function Ut() {
        if (yt === null) {
          var t = k.alternate;
          t = t !== null ? t.memoizedState : null;
        } else t = yt.next;
        var l = At === null ? k.memoizedState : At.next;
        if (l !== null)
          At = l, yt = t;
        else {
          if (t === null)
            throw k.alternate === null ? Error(v(467)) : Error(v(310));
          yt = t, t = {
            memoizedState: yt.memoizedState,
            baseState: yt.baseState,
            baseQueue: yt.baseQueue,
            queue: yt.queue,
            next: null
          }, At === null ? k.memoizedState = At = t : At = At.next = t;
        }
        return At;
      }
      function va(t) {
        var l = Oa;
        return Oa += 1, Fe === null && (Fe = []), t = vi(Fe, t, l), l = k, (At === null ? l.memoizedState : At.next) === null && (l = l.alternate, W.H = l === null || l.memoizedState === null ? re : kl), t;
      }
      function Wa(t) {
        if (t !== null && typeof t == "object") {
          if (typeof t.then == "function") return va(t);
          if (t.$$typeof === Wl) return Gt(t);
        }
        throw Error(v(438, String(t)));
      }
      function $u(t) {
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
        if (l == null && (l = { data: [], index: 0 }), e === null && (e = dc(), k.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
          for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
            e[a] = so;
        return l.index++, e;
      }
      function _l(t, l) {
        return typeof l == "function" ? l(t) : l;
      }
      function Fa(t) {
        var l = Ut();
        return ku(l, yt, t);
      }
      function ku(t, l, e) {
        var a = t.queue;
        if (a === null) throw Error(v(311));
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
          var o = f = null, d = null, z = l, A = !1;
          do {
            var j = z.lane & -536870913;
            if (j !== z.lane ? (ct & j) === j : ($l & j) === j) {
              var q = z.revertLane;
              if (q === 0)
                d !== null && (d = d.next = {
                  lane: 0,
                  revertLane: 0,
                  action: z.action,
                  hasEagerState: z.hasEagerState,
                  eagerState: z.eagerState,
                  next: null
                }), j === Ze && (A = !0);
              else if (($l & q) === q) {
                z = z.next, q === Ze && (A = !0);
                continue;
              } else
                j = {
                  lane: 0,
                  revertLane: z.revertLane,
                  action: z.action,
                  hasEagerState: z.hasEagerState,
                  eagerState: z.eagerState,
                  next: null
                }, d === null ? (o = d = j, f = n) : d = d.next = j, k.lanes |= q, te |= q;
              j = z.action, ye && e(n, j), n = z.hasEagerState ? z.eagerState : e(n, j);
            } else
              q = {
                lane: j,
                revertLane: z.revertLane,
                action: z.action,
                hasEagerState: z.hasEagerState,
                eagerState: z.eagerState,
                next: null
              }, d === null ? (o = d = q, f = n) : d = d.next = q, k.lanes |= j, te |= j;
            z = z.next;
          } while (z !== null && z !== l);
          if (d === null ? f = n : d.next = o, !al(n, t.memoizedState) && (Rt = !0, A && (e = Ke, e !== null)))
            throw e;
          t.memoizedState = n, t.baseState = f, t.baseQueue = d, a.lastRenderedState = n;
        }
        return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
      }
      function tn(t) {
        var l = Ut(), e = l.queue;
        if (e === null) throw Error(v(311));
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
      function Si(t, l, e) {
        var a = k, u = Ut(), n = st;
        if (n) {
          if (e === void 0)
            throw Error(v(407));
          e = e();
        } else e = l();
        var f = !al(
          (yt || u).memoizedState,
          e
        );
        if (f && (u.memoizedState = e, Rt = !0), u = u.queue, an(Ti.bind(null, a, u, t), [
          t
        ]), u.getSnapshot !== l || f || At !== null && At.memoizedState.tag & 1) {
          if (a.flags |= 2048, Oe(
            9,
            zi.bind(
              null,
              a,
              u,
              e,
              l
            ),
            { destroy: void 0 },
            null
          ), ht === null) throw Error(v(349));
          n || ($l & 60) !== 0 || Ei(a, l, e);
        }
        return e;
      }
      function Ei(t, l, e) {
        t.flags |= 16384, t = { getSnapshot: l, value: e }, l = k.updateQueue, l === null ? (l = dc(), k.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
      }
      function zi(t, l, e, a) {
        l.value = e, l.getSnapshot = a, Ni(l) && bi(t);
      }
      function Ti(t, l, e) {
        return e(function() {
          Ni(l) && bi(t);
        });
      }
      function Ni(t) {
        var l = t.getSnapshot;
        t = t.value;
        try {
          var e = l();
          return !al(t, e);
        } catch {
          return !0;
        }
      }
      function bi(t) {
        var l = Yl(t, 2);
        l !== null && Jt(l, t, 2);
      }
      function ln(t) {
        var l = Wt();
        if (typeof t == "function") {
          var e = t;
          if (t = e(), ye) {
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
      function _i(t, l, e, a) {
        return t.baseState = e, ku(
          t,
          yt,
          typeof a == "function" ? a : _l
        );
      }
      function Gv(t, l, e, a, u) {
        if (Ia(t)) throw Error(v(485));
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
          W.T !== null ? e(!0) : n.isTransition = !1, a(n), e = l.pending, e === null ? (n.next = l.pending = n, Mi(l, n)) : (n.next = e.next, l.pending = e.next = n);
        }
      }
      function Mi(t, l) {
        var e = l.action, a = l.payload, u = t.state;
        if (l.isTransition) {
          var n = W.T, f = {};
          W.T = f;
          try {
            var o = e(u, a), d = W.S;
            d !== null && d(f, o), Hi(t, l, o);
          } catch (z) {
            en(t, l, z);
          } finally {
            W.T = n;
          }
        } else
          try {
            n = e(u, a), Hi(t, l, n);
          } catch (z) {
            en(t, l, z);
          }
      }
      function Hi(t, l, e) {
        e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
          function(a) {
            Oi(t, l, a);
          },
          function(a) {
            return en(t, l, a);
          }
        ) : Oi(t, l, e);
      }
      function Oi(t, l, e) {
        l.status = "fulfilled", l.value = e, gi(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, Mi(t, e)));
      }
      function en(t, l, e) {
        var a = t.pending;
        if (t.pending = null, a !== null) {
          a = a.next;
          do
            l.status = "rejected", l.reason = e, gi(l), l = l.next;
          while (l !== a);
        }
        t.action = null;
      }
      function gi(t) {
        t = t.listeners;
        for (var l = 0; l < t.length; l++) (0, t[l])();
      }
      function Ui(t, l) {
        return l;
      }
      function Ai(t, l) {
        if (st) {
          var e = ht.formState;
          if (e !== null) {
            t: {
              var a = k;
              if (st) {
                if (Zt) {
                  var u = lm(
                    Zt,
                    El
                  );
                  if (u) {
                    Zt = bs(u), a = em(u);
                    break t;
                  }
                }
                ue(a);
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
          lastRenderedReducer: Ui,
          lastRenderedState: l
        }, e.queue = a, e = Wi.bind(
          null,
          k,
          a
        ), a.dispatch = e, a = ln(!1);
        var n = fn.bind(
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
        }, a.queue = u, e = Gv.bind(
          null,
          k,
          u,
          n,
          e
        ), u.dispatch = e, a.memoizedState = t, [l, e, !1];
      }
      function Di(t) {
        var l = Ut();
        return Ci(l, yt, t);
      }
      function Ci(t, l, e) {
        l = ku(
          t,
          l,
          Ui
        )[0], t = Fa(_l)[0], l = typeof l == "object" && l !== null && typeof l.then == "function" ? va(l) : l;
        var a = Ut(), u = a.queue, n = u.dispatch;
        return e !== a.memoizedState && (k.flags |= 2048, Oe(
          9,
          Vv.bind(null, u, e),
          { destroy: void 0 },
          null
        )), [l, n, t];
      }
      function Vv(t, l) {
        t.action = l;
      }
      function ji(t) {
        var l = Ut(), e = yt;
        if (e !== null)
          return Ci(l, e, t);
        Ut(), l = l.memoizedState, e = Ut();
        var a = e.queue.dispatch;
        return e.memoizedState = t, [l, a, !1];
      }
      function Oe(t, l, e, a) {
        return t = { tag: t, create: l, inst: e, deps: a, next: null }, l = k.updateQueue, l === null && (l = dc(), k.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
      }
      function Ri() {
        return Ut().memoizedState;
      }
      function Pa(t, l, e, a) {
        var u = Wt();
        k.flags |= t, u.memoizedState = Oe(
          1 | l,
          e,
          { destroy: void 0 },
          a === void 0 ? null : a
        );
      }
      function wa(t, l, e, a) {
        var u = Ut();
        a = a === void 0 ? null : a;
        var n = u.memoizedState.inst;
        yt !== null && a !== null && Wu(a, yt.memoizedState.deps) ? u.memoizedState = Oe(l, e, n, a) : (k.flags |= t, u.memoizedState = Oe(1 | l, e, n, a));
      }
      function qi(t, l) {
        Pa(8390656, 8, t, l);
      }
      function an(t, l) {
        wa(2048, 8, t, l);
      }
      function Bi(t, l) {
        return wa(4, 2, t, l);
      }
      function Yi(t, l) {
        return wa(4, 4, t, l);
      }
      function Qi(t, l) {
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
        e = e != null ? e.concat([t]) : null, wa(
          4,
          4,
          Qi.bind(null, l, t),
          e
        );
      }
      function un() {
      }
      function Vi(t, l) {
        var e = Ut();
        l = l === void 0 ? null : l;
        var a = e.memoizedState;
        return l !== null && Wu(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
      }
      function Xi(t, l) {
        var e = Ut();
        l = l === void 0 ? null : l;
        var a = e.memoizedState;
        if (l !== null && Wu(l, a[1]))
          return a[0];
        if (a = t(), ye) {
          O(!0);
          try {
            t();
          } finally {
            O(!1);
          }
        }
        return e.memoizedState = [a, l], a;
      }
      function nn(t, l, e) {
        return e === void 0 || ($l & 1073741824) !== 0 ? t.memoizedState = l : (t.memoizedState = e, t = Qf(), k.lanes |= t, te |= t, e);
      }
      function Zi(t, l, e, a) {
        return al(e, l) ? e : Le.current !== null ? (t = nn(t, e, a), al(t, l) || (Rt = !0), t) : ($l & 42) === 0 ? (Rt = !0, t.memoizedState = e) : (t = Qf(), k.lanes |= t, te |= t, l);
      }
      function Ki(t, l, e, a, u) {
        var n = oe();
        Pt(
          n !== 0 && 8 > n ? n : 8
        );
        var f = W.T, o = {};
        W.T = o, fn(t, !1, l, e);
        try {
          var d = u(), z = W.S;
          if (z !== null && z(o, d), d !== null && typeof d == "object" && typeof d.then == "function") {
            var A = Yv(
              d,
              a
            );
            oa(
              t,
              l,
              A,
              kt(t)
            );
          } else
            oa(
              t,
              l,
              a,
              kt(t)
            );
        } catch (j) {
          oa(
            t,
            l,
            { then: function() {
            }, status: "rejected", reason: j },
            kt()
          );
        } finally {
          Pt(n), W.T = f;
        }
      }
      function Ji(t) {
        var l = t.memoizedState;
        if (l !== null) return l;
        l = {
          memoizedState: Re,
          baseState: Re,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: _l,
            lastRenderedState: Re
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
      function cn() {
        return Gt(me);
      }
      function xi() {
        return Ut().memoizedState;
      }
      function Li() {
        return Ut().memoizedState;
      }
      function Xv(t) {
        for (var l = t.return; l !== null; ) {
          switch (l.tag) {
            case 24:
            case 3:
              var e = kt();
              t = Ql(e);
              var a = Gl(l, t, e);
              a !== null && (Jt(a, l, e), ca(a, l, e)), l = { cache: Tn() }, t.payload = l;
              return;
          }
          l = l.return;
        }
      }
      function Zv(t, l, e) {
        var a = kt();
        e = {
          lane: a,
          revertLane: 0,
          action: e,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Ia(t) ? Fi(l, e) : (e = Vu(t, l, e, a), e !== null && (Jt(e, t, a), Pi(e, l, a)));
      }
      function Wi(t, l, e) {
        var a = kt();
        oa(t, l, e, a);
      }
      function oa(t, l, e, a) {
        var u = {
          lane: a,
          revertLane: 0,
          action: e,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (Ia(t)) Fi(l, u);
        else {
          var n = t.alternate;
          if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
            try {
              var f = l.lastRenderedState, o = n(f, e);
              if (u.hasEagerState = !0, u.eagerState = o, al(o, f))
                return Va(t, l, u, 0), ht === null && Ga(), !1;
            } catch {
            } finally {
            }
          if (e = Vu(t, l, u, a), e !== null)
            return Jt(e, t, a), Pi(e, l, a), !0;
        }
        return !1;
      }
      function fn(t, l, e, a) {
        if (a = {
          lane: 2,
          revertLane: Xu(),
          action: a,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Ia(t)) {
          if (l) throw Error(v(479));
        } else
          l = Vu(
            t,
            e,
            a,
            2
          ), l !== null && Jt(l, t, 2);
      }
      function Ia(t) {
        var l = t.alternate;
        return t === k || l !== null && l === k;
      }
      function Fi(t, l) {
        We = zu = !0;
        var e = t.pending;
        e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
      }
      function Pi(t, l, e) {
        if ((e & 4194176) !== 0) {
          var a = l.lanes;
          a &= t.pendingLanes, e |= a, l.lanes = e, mt(t, e);
        }
      }
      function sn(t, l, e, a) {
        l = t.memoizedState, e = e(a, l), e = e == null ? l : xn({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
      }
      function wi(t, l, e, a, u, n, f) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, f) : l.prototype && l.prototype.isPureReactComponent ? !Za(e, a) || !Za(u, n) : !0;
      }
      function Ii(t, l, e, a) {
        t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && yc.enqueueReplaceState(l, l.state, null);
      }
      function ne(t, l) {
        var e = l;
        if ("ref" in l) {
          e = {};
          for (var a in l)
            a !== "ref" && (e[a] = l[a]);
        }
        if (t = t.defaultProps) {
          e === l && (e = xn({}, e));
          for (var u in t)
            e[u] === void 0 && (e[u] = t[u]);
        }
        return e;
      }
      function $a(t, l) {
        try {
          var e = t.onUncaughtError;
          e(l.value, { componentStack: l.stack });
        } catch (a) {
          setTimeout(function() {
            throw a;
          });
        }
      }
      function $i(t, l, e) {
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
        return e = Ql(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
          $a(t, l);
        }, e;
      }
      function ki(t) {
        return t = Ql(t), t.tag = 3, t;
      }
      function tf(t, l, e, a) {
        var u = e.type.getDerivedStateFromError;
        if (typeof u == "function") {
          var n = a.value;
          t.payload = function() {
            return u(n);
          }, t.callback = function() {
            $i(l, e, a);
          };
        }
        var f = e.stateNode;
        f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
          $i(l, e, a), typeof u != "function" && (le === null ? le = /* @__PURE__ */ new Set([this]) : le.add(this));
          var o = a.stack;
          this.componentDidCatch(a.value, {
            componentStack: o !== null ? o : ""
          });
        });
      }
      function Kv(t, l, e, a, u) {
        if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          if (l = e.alternate, l !== null && pa(
            l,
            e,
            u,
            !0
          ), e = ol.current, e !== null) {
            switch (e.tag) {
              case 13:
                return zl === null ? Qn() : e.alternate === null && Ht === 0 && (Ht = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === Su ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Vn(t, a, u)), !1;
              case 22:
                return e.flags |= 65536, a === Su ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([a])
                }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Vn(t, a, u)), !1;
            }
            throw Error(v(435, e.tag));
          }
          return Vn(t, a, u), Qn(), !1;
        }
        if (st)
          return l = ol.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, a !== ic && (t = Error(v(422), { cause: a }), na(
            B(t, e)
          ))) : (a !== ic && (l = Error(v(423), {
            cause: a
          }), na(
            B(l, e)
          )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = B(a, e), u = vn(
            t.stateNode,
            a,
            u
          ), Ju(t, u), Ht !== 4 && (Ht = 2)), !1;
        var n = Error(v(520), { cause: a });
        if (n = B(n, e), Ua === null ? Ua = [n] : Ua.push(n), Ht !== 4 && (Ht = 2), l === null) return !0;
        a = B(a, e), e = l;
        do {
          switch (e.tag) {
            case 3:
              return e.flags |= 65536, t = u & -u, e.lanes |= t, t = vn(e.stateNode, a, t), Ju(e, t), !1;
            case 1:
              if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (le === null || !le.has(
                n
              ))))
                return e.flags |= 65536, u &= -u, e.lanes |= u, u = ki(u), tf(
                  u,
                  t,
                  e,
                  a
                ), Ju(e, u), !1;
          }
          e = e.return;
        } while (e !== null);
        return !1;
      }
      function Yt(t, l, e, a) {
        l.child = t === null ? Ys(l, null, e, a) : de(
          l,
          t.child,
          e,
          a
        );
      }
      function lf(t, l, e, a, u) {
        e = e.render;
        var n = l.ref;
        if ("ref" in a) {
          var f = {};
          for (var o in a)
            o !== "ref" && (f[o] = a[o]);
        } else f = a;
        return ce(l), a = Fu(
          t,
          l,
          e,
          f,
          n,
          u
        ), o = Pu(), t !== null && !Rt ? (wu(t, l, u), Ml(t, l, u)) : (st && o && nt(l), l.flags |= 1, Yt(t, l, a, u), l.child);
      }
      function ef(t, l, e, a, u) {
        if (t === null) {
          var n = e.type;
          return typeof n == "function" && !Xn(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, af(
            t,
            l,
            n,
            a,
            u
          )) : (t = cu(
            e.type,
            null,
            a,
            l,
            l.mode,
            u
          ), t.ref = l.ref, t.return = l, l.child = t);
        }
        if (n = t.child, !Sn(t, u)) {
          var f = n.memoizedProps;
          if (e = e.compare, e = e !== null ? e : Za, e(f, a) && t.ref === l.ref)
            return Ml(
              t,
              l,
              u
            );
        }
        return l.flags |= 1, t = Ll(n, a), t.ref = l.ref, t.return = l, l.child = t;
      }
      function af(t, l, e, a, u) {
        if (t !== null) {
          var n = t.memoizedProps;
          if (Za(n, a) && t.ref === l.ref)
            if (Rt = !1, l.pendingProps = a = n, Sn(t, u))
              (t.flags & 131072) !== 0 && (Rt = !0);
            else
              return l.lanes = t.lanes, Ml(t, l, u);
        }
        return on(
          t,
          l,
          e,
          a,
          u
        );
      }
      function uf(t, l, e) {
        var a = l.pendingProps, u = a.children, n = (l.stateNode._pendingVisibility & 2) !== 0, f = t !== null ? t.memoizedState : null;
        if (ma(t, l), a.mode === "hidden" || n) {
          if ((l.flags & 128) !== 0) {
            if (a = f !== null ? f.baseLanes | e : e, t !== null) {
              for (u = l.child = t.child, n = 0; u !== null; )
                n = n | u.lanes | u.childLanes, u = u.sibling;
              l.childLanes = n & ~a;
            } else l.childLanes = 0, l.child = null;
            return nf(
              t,
              l,
              a,
              e
            );
          }
          if ((e & 536870912) !== 0)
            l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && lu(
              l,
              f !== null ? f.cachePool : null
            ), f !== null ? di(l, f) : xu(), yi(l);
          else
            return l.lanes = l.childLanes = 536870912, nf(
              t,
              l,
              f !== null ? f.baseLanes | e : e,
              e
            );
        } else
          f !== null ? (lu(l, f.cachePool), di(l, f), Xl(), l.memoizedState = null) : (t !== null && lu(l, null), xu(), Xl());
        return Yt(t, l, u, e), l.child;
      }
      function nf(t, l, e, a) {
        var u = Nn();
        return u = u === null ? null : {
          parent: Ul ? _t._currentValue : _t._currentValue2,
          pool: u
        }, l.memoizedState = {
          baseLanes: e,
          cachePool: u
        }, t !== null && lu(l, null), xu(), yi(l), t !== null && pa(t, l, a, !0), null;
      }
      function ma(t, l) {
        var e = l.ref;
        if (e === null)
          t !== null && t.ref !== null && (l.flags |= 2097664);
        else {
          if (typeof e != "function" && typeof e != "object")
            throw Error(v(284));
          (t === null || t.ref !== e) && (l.flags |= 2097664);
        }
      }
      function on(t, l, e, a, u) {
        return ce(l), e = Fu(
          t,
          l,
          e,
          a,
          void 0,
          u
        ), a = Pu(), t !== null && !Rt ? (wu(t, l, u), Ml(t, l, u)) : (st && a && nt(l), l.flags |= 1, Yt(t, l, e, u), l.child);
      }
      function cf(t, l, e, a, u, n) {
        return ce(l), l.updateQueue = null, e = hi(
          l,
          a,
          e,
          u
        ), ri(t), a = Pu(), t !== null && !Rt ? (wu(t, l, n), Ml(t, l, n)) : (st && a && nt(l), l.flags |= 1, Yt(t, l, e, n), l.child);
      }
      function ff(t, l, e, a, u) {
        if (ce(l), l.stateNode === null) {
          var n = Be, f = e.contextType;
          typeof f == "object" && f !== null && (n = Gt(f)), n = new e(a, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = yc, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = a, n.state = l.memoizedState, n.refs = {}, Zu(l), f = e.contextType, n.context = typeof f == "object" && f !== null ? Gt(f) : Be, n.state = l.memoizedState, f = e.getDerivedStateFromProps, typeof f == "function" && (sn(
            l,
            e,
            f,
            a
          ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && yc.enqueueReplaceState(
            n,
            n.state,
            null
          ), fa(l, a, n, u), ia(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
        } else if (t === null) {
          n = l.stateNode;
          var o = l.memoizedProps, d = ne(e, o);
          n.props = d;
          var z = n.context, A = e.contextType;
          f = Be, typeof A == "object" && A !== null && (f = Gt(A));
          var j = e.getDerivedStateFromProps;
          A = typeof j == "function" || typeof n.getSnapshotBeforeUpdate == "function", o = l.pendingProps !== o, A || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (o || z !== f) && Ii(
            l,
            n,
            a,
            f
          ), Il = !1;
          var q = l.memoizedState;
          n.state = q, fa(l, a, n, u), ia(), z = l.memoizedState, o || q !== z || Il ? (typeof j == "function" && (sn(
            l,
            e,
            j,
            a
          ), z = l.memoizedState), (d = Il || wi(
            l,
            e,
            d,
            a,
            q,
            z,
            f
          )) ? (A || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = z), n.props = a, n.state = z, n.context = f, a = d) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
        } else {
          n = l.stateNode, Ku(t, l), f = l.memoizedProps, A = ne(e, f), n.props = A, j = l.pendingProps, q = n.context, z = e.contextType, d = Be, typeof z == "object" && z !== null && (d = Gt(z)), o = e.getDerivedStateFromProps, (z = typeof o == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== j || q !== d) && Ii(
            l,
            n,
            a,
            d
          ), Il = !1, q = l.memoizedState, n.state = q, fa(l, a, n, u), ia();
          var P = l.memoizedState;
          f !== j || q !== P || Il || t !== null && t.dependencies !== null && ka(t.dependencies) ? (typeof o == "function" && (sn(
            l,
            e,
            o,
            a
          ), P = l.memoizedState), (A = Il || wi(
            l,
            e,
            A,
            a,
            q,
            P,
            d
          ) || t !== null && t.dependencies !== null && ka(t.dependencies)) ? (z || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, P, d), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
            a,
            P,
            d
          )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === t.memoizedProps && q === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && q === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = P), n.props = a, n.state = P, n.context = d, a = A) : (typeof n.componentDidUpdate != "function" || f === t.memoizedProps && q === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && q === t.memoizedState || (l.flags |= 1024), a = !1);
        }
        return n = a, ma(t, l), a = (l.flags & 128) !== 0, n || a ? (n = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && a ? (l.child = de(
          l,
          t.child,
          null,
          u
        ), l.child = de(
          l,
          null,
          e,
          u
        )) : Yt(t, l, e, u), l.memoizedState = n.state, t = l.child) : t = Ml(
          t,
          l,
          u
        ), t;
      }
      function sf(t, l, e, a) {
        return ua(), l.flags |= 256, Yt(t, l, e, a), l.child;
      }
      function mn(t) {
        return { baseLanes: t, cachePool: yf() };
      }
      function pn(t, l, e) {
        return t = t !== null ? t.childLanes & ~e : 0, l && (t |= ml), t;
      }
      function vf(t, l, e) {
        var a = l.pendingProps, u = !1, n = (l.flags & 128) !== 0, f;
        if ((f = n) || (f = t !== null && t.memoizedState === null ? !1 : (jt.current & 2) !== 0), f && (u = !0, l.flags &= -129), f = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
          if (st) {
            if (u ? Vl(l) : Xl(), st) {
              var o = Zt, d;
              (d = o) && (o = im(
                o,
                El
              ), o !== null ? (l.memoizedState = {
                dehydrated: o,
                treeContext: pe !== null ? { id: Al, overflow: Dl } : null,
                retryLane: 536870912
              }, d = s(18, null, null, 0), d.stateNode = o, d.return = l, l.child = d, xt = l, Zt = null, d = !0) : d = !1), d || ue(l);
            }
            if (o = l.memoizedState, o !== null && (o = o.dehydrated, o !== null))
              return ec(o) ? l.lanes = 16 : l.lanes = 536870912, null;
            bl(l);
          }
          return o = a.children, a = a.fallback, u ? (Xl(), u = l.mode, o = yn(
            { mode: "hidden", children: o },
            u
          ), a = ve(
            a,
            u,
            e,
            null
          ), o.return = l, a.return = l, o.sibling = a, l.child = o, u = l.child, u.memoizedState = mn(e), u.childLanes = pn(
            t,
            f,
            e
          ), l.memoizedState = rc, a) : (Vl(l), dn(l, o));
        }
        if (d = t.memoizedState, d !== null && (o = d.dehydrated, o !== null)) {
          if (n)
            l.flags & 256 ? (Vl(l), l.flags &= -257, l = rn(
              t,
              l,
              e
            )) : l.memoizedState !== null ? (Xl(), l.child = t.child, l.flags |= 128, l = null) : (Xl(), u = a.fallback, o = l.mode, a = yn(
              { mode: "visible", children: a.children },
              o
            ), u = ve(
              u,
              o,
              e,
              null
            ), u.flags |= 2, a.return = l, u.return = l, a.sibling = u, l.child = a, de(
              l,
              t.child,
              null,
              e
            ), a = l.child, a.memoizedState = mn(e), a.childLanes = pn(
              t,
              f,
              e
            ), l.memoizedState = rc, l = u);
          else if (Vl(l), ec(o))
            f = ko(o).digest, a = Error(v(419)), a.stack = "", a.digest = f, na({ value: a, source: null, stack: null }), l = rn(
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
            if (f = ht, f !== null) {
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
              if (a = (a & (f.suspendedLanes | e)) !== 0 ? 0 : a, a !== 0 && a !== d.retryLane)
                throw d.retryLane = a, Yl(t, a), Jt(f, t, a), Gs;
            }
            lc(o) || Qn(), l = rn(
              t,
              l,
              e
            );
          } else
            lc(o) ? (l.flags |= 128, l.child = t.child, l = lo.bind(
              null,
              t
            ), tm(o, l), l = null) : (t = d.treeContext, cl && (Zt = um(o), xt = l, st = !0, rl = null, El = !1, t !== null && (fl[sl++] = Al, fl[sl++] = Dl, fl[sl++] = pe, Al = t.id, Dl = t.overflow, pe = l)), l = dn(
              l,
              a.children
            ), l.flags |= 4096);
          return l;
        }
        return u ? (Xl(), u = a.fallback, o = l.mode, d = t.child, n = d.sibling, a = Ll(d, {
          mode: "hidden",
          children: a.children
        }), a.subtreeFlags = d.subtreeFlags & 31457280, n !== null ? u = Ll(n, u) : (u = ve(
          u,
          o,
          e,
          null
        ), u.flags |= 2), u.return = l, a.return = l, a.sibling = u, l.child = a, a = u, u = l.child, o = t.child.memoizedState, o === null ? o = mn(e) : (d = o.cachePool, d !== null ? (n = Ul ? _t._currentValue : _t._currentValue2, d = d.parent !== n ? { parent: n, pool: n } : d) : d = yf(), o = {
          baseLanes: o.baseLanes | e,
          cachePool: d
        }), u.memoizedState = o, u.childLanes = pn(
          t,
          f,
          e
        ), l.memoizedState = rc, a) : (Vl(l), e = t.child, t = e.sibling, e = Ll(e, {
          mode: "visible",
          children: a.children
        }), e.return = l, e.sibling = null, t !== null && (f = l.deletions, f === null ? (l.deletions = [t], l.flags |= 16) : f.push(t)), l.child = e, l.memoizedState = null, e);
      }
      function dn(t, l) {
        return l = yn(
          { mode: "visible", children: l },
          t.mode
        ), l.return = t, t.child = l;
      }
      function yn(t, l) {
        return ts(t, l, 0, null);
      }
      function rn(t, l, e) {
        return de(l, t.child, null, e), t = dn(
          l,
          l.pendingProps.children
        ), t.flags |= 2, l.memoizedState = null, t;
      }
      function of(t, l, e) {
        t.lanes |= l;
        var a = t.alternate;
        a !== null && (a.lanes |= l), En(t.return, l, e);
      }
      function hn(t, l, e, a, u) {
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
      function mf(t, l, e) {
        var a = l.pendingProps, u = a.revealOrder, n = a.tail;
        if (Yt(t, l, a.children, e), a = jt.current, (a & 2) !== 0)
          a = a & 1 | 2, l.flags |= 128;
        else {
          if (t !== null && (t.flags & 128) !== 0)
            t: for (t = l.child; t !== null; ) {
              if (t.tag === 13)
                t.memoizedState !== null && of(t, e, l);
              else if (t.tag === 19)
                of(t, e, l);
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
              t = e.alternate, t !== null && La(t) === null && (u = e), e = e.sibling;
            e = u, e === null ? (u = l.child, l.child = null) : (u = e.sibling, e.sibling = null), hn(
              l,
              !1,
              u,
              e,
              n
            );
            break;
          case "backwards":
            for (e = null, u = l.child, l.child = null; u !== null; ) {
              if (t = u.alternate, t !== null && La(t) === null) {
                l.child = u;
                break;
              }
              t = u.sibling, u.sibling = e, e = u, u = t;
            }
            hn(
              l,
              !0,
              e,
              null,
              n
            );
            break;
          case "together":
            hn(l, !1, null, null, void 0);
            break;
          default:
            l.memoizedState = null;
        }
        return l.child;
      }
      function Ml(t, l, e) {
        if (t !== null && (l.dependencies = t.dependencies), te |= l.lanes, (e & l.childLanes) === 0)
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
          throw Error(v(153));
        if (l.child !== null) {
          for (t = l.child, e = Ll(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
            t = t.sibling, e = e.sibling = Ll(t, t.pendingProps), e.return = l;
          e.sibling = null;
        }
        return l.child;
      }
      function Sn(t, l) {
        return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && ka(t)));
      }
      function Jv(t, l, e) {
        switch (l.tag) {
          case 3:
            lt(
              l,
              l.stateNode.containerInfo
            ), Zl(l, _t, t.memoizedState.cache), ua();
            break;
          case 27:
          case 5:
            Me(l);
            break;
          case 4:
            lt(
              l,
              l.stateNode.containerInfo
            );
            break;
          case 10:
            Zl(
              l,
              l.type,
              l.memoizedProps.value
            );
            break;
          case 13:
            var a = l.memoizedState;
            if (a !== null)
              return a.dehydrated !== null ? (Vl(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? vf(
                t,
                l,
                e
              ) : (Vl(l), t = Ml(
                t,
                l,
                e
              ), t !== null ? t.sibling : null);
            Vl(l);
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
                return mf(
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
            return l.lanes = 0, uf(t, l, e);
          case 24:
            Zl(l, _t, t.memoizedState.cache);
        }
        return Ml(t, l, e);
      }
      function pf(t, l, e) {
        if (t !== null)
          if (t.memoizedProps !== l.pendingProps)
            Rt = !0;
          else {
            if (!Sn(t, e) && (l.flags & 128) === 0)
              return Rt = !1, Jv(
                t,
                l,
                e
              );
            Rt = (t.flags & 131072) !== 0;
          }
        else
          Rt = !1, st && (l.flags & 1048576) !== 0 && $(l, du, l.index);
        switch (l.lanes = 0, l.tag) {
          case 16:
            t: {
              t = l.pendingProps;
              var a = l.elementType, u = a._init;
              if (a = u(a._payload), l.type = a, typeof a == "function")
                Xn(a) ? (t = ne(a, t), l.tag = 1, l = ff(
                  null,
                  l,
                  a,
                  t,
                  e
                )) : (l.tag = 0, l = on(
                  null,
                  l,
                  a,
                  t,
                  e
                ));
              else {
                if (a != null) {
                  if (u = a.$$typeof, u === Wn) {
                    l.tag = 11, l = lf(
                      null,
                      l,
                      a,
                      t,
                      e
                    );
                    break t;
                  } else if (u === wn) {
                    l.tag = 14, l = ef(
                      null,
                      l,
                      a,
                      t,
                      e
                    );
                    break t;
                  }
                }
                throw l = R(a) || a, Error(v(306, l, ""));
              }
            }
            return l;
          case 0:
            return on(
              t,
              l,
              l.type,
              l.pendingProps,
              e
            );
          case 1:
            return a = l.type, u = ne(
              a,
              l.pendingProps
            ), ff(
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
              ), t === null) throw Error(v(387));
              var n = l.pendingProps;
              u = l.memoizedState, a = u.element, Ku(t, l), fa(l, n, null, e);
              var f = l.memoizedState;
              if (n = f.cache, Zl(l, _t, n), n !== u.cache && zn(
                l,
                [_t],
                e,
                !0
              ), ia(), n = f.element, cl && u.isDehydrated)
                if (u = {
                  element: n,
                  isDehydrated: !1,
                  cache: f.cache
                }, l.updateQueue.baseState = u, l.memoizedState = u, l.flags & 256) {
                  l = sf(
                    t,
                    l,
                    n,
                    e
                  );
                  break t;
                } else if (n !== a) {
                  a = B(
                    Error(v(424)),
                    l
                  ), na(a), l = sf(
                    t,
                    l,
                    n,
                    e
                  );
                  break t;
                } else
                  for (cl && (Zt = am(
                    l.stateNode.containerInfo
                  ), xt = l, st = !0, rl = null, El = !0), e = Ys(
                    l,
                    null,
                    n,
                    e
                  ), l.child = e; e; )
                    e.flags = e.flags & -3 | 4096, e = e.sibling;
              else {
                if (ua(), n === a) {
                  l = Ml(
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
              return ma(t, l), t === null ? (e = Os(
                l.type,
                null,
                l.pendingProps,
                null
              )) ? l.memoizedState = e : st || (l.stateNode = Em(
                l.type,
                l.pendingProps,
                wl.current,
                l
              )) : l.memoizedState = Os(
                l.type,
                t.memoizedProps,
                l.pendingProps,
                t.memoizedState
              ), null;
          case 27:
            if (Xt)
              return Me(l), t === null && Xt && st && (a = l.stateNode = js(
                l.type,
                l.pendingProps,
                wl.current,
                Qt.current,
                !1
              ), xt = l, El = !0, Zt = _s(a)), a = l.pendingProps.children, t !== null || st ? Yt(
                t,
                l,
                a,
                e
              ) : l.child = de(
                l,
                null,
                a,
                e
              ), ma(t, l), l.child;
          case 5:
            return t === null && st && (rm(
              l.type,
              l.pendingProps,
              Qt.current
            ), (u = a = Zt) && (a = nm(
              a,
              l.type,
              l.pendingProps,
              El
            ), a !== null ? (l.stateNode = a, xt = l, Zt = _s(a), El = !1, u = !0) : u = !1), u || ue(l)), Me(l), u = l.type, n = l.pendingProps, f = t !== null ? t.memoizedProps : null, a = n.children, su(u, n) ? a = null : f !== null && su(u, f) && (l.flags |= 32), l.memoizedState !== null && (u = Fu(
              t,
              l,
              Qv,
              null,
              null,
              e
            ), Ul ? me._currentValue = u : me._currentValue2 = u), ma(t, l), Yt(t, l, a, e), l.child;
          case 6:
            return t === null && st && (hm(
              l.pendingProps,
              Qt.current
            ), (t = e = Zt) && (e = cm(
              e,
              l.pendingProps,
              El
            ), e !== null ? (l.stateNode = e, xt = l, Zt = null, t = !0) : t = !1), t || ue(l)), null;
          case 13:
            return vf(t, l, e);
          case 4:
            return lt(
              l,
              l.stateNode.containerInfo
            ), a = l.pendingProps, t === null ? l.child = de(
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
            return lf(
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
            return a = l.pendingProps, Zl(
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
            return u = l.type._context, a = l.pendingProps.children, ce(l), u = Gt(u), a = a(u), l.flags |= 1, Yt(
              t,
              l,
              a,
              e
            ), l.child;
          case 14:
            return ef(
              t,
              l,
              l.type,
              l.pendingProps,
              e
            );
          case 15:
            return af(
              t,
              l,
              l.type,
              l.pendingProps,
              e
            );
          case 19:
            return mf(
              t,
              l,
              e
            );
          case 22:
            return uf(t, l, e);
          case 24:
            return ce(l), a = Gt(_t), t === null ? (u = Nn(), u === null && (u = ht, n = Tn(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), l.memoizedState = {
              parent: a,
              cache: u
            }, Zu(l), Zl(l, _t, u)) : ((t.lanes & e) !== 0 && (Ku(t, l), fa(l, null, null, e), ia()), u = t.memoizedState, n = l.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), Zl(l, _t, a)) : (a = n.cache, Zl(l, _t, a), a !== u.cache && zn(
              l,
              [_t],
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
        throw Error(v(156, l.tag));
      }
      function Zl(t, l, e) {
        Ul ? (b(Nu, l._currentValue), l._currentValue = e) : (b(Nu, l._currentValue2), l._currentValue2 = e);
      }
      function Hl(t) {
        var l = Nu.current;
        Ul ? t._currentValue = l : t._currentValue2 = l, M(Nu);
      }
      function En(t, l, e) {
        for (; t !== null; ) {
          var a = t.alternate;
          if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
          t = t.return;
        }
      }
      function zn(t, l, e, a) {
        var u = t.child;
        for (u !== null && (u.return = t); u !== null; ) {
          var n = u.dependencies;
          if (n !== null) {
            var f = u.child;
            n = n.firstContext;
            t: for (; n !== null; ) {
              var o = n;
              n = u;
              for (var d = 0; d < l.length; d++)
                if (o.context === l[d]) {
                  n.lanes |= e, o = n.alternate, o !== null && (o.lanes |= e), En(
                    n.return,
                    e,
                    t
                  ), a || (f = null);
                  break t;
                }
              n = o.next;
            }
          } else if (u.tag === 18) {
            if (f = u.return, f === null) throw Error(v(341));
            f.lanes |= e, n = f.alternate, n !== null && (n.lanes |= e), En(f, e, t), f = null;
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
            if (f === null) throw Error(v(387));
            if (f = f.memoizedProps, f !== null) {
              var o = u.type;
              al(u.pendingProps.value, f.value) || (t !== null ? t.push(o) : t = [o]);
            }
          } else if (u === yu.current) {
            if (f = u.alternate, f === null) throw Error(v(387));
            f.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(me) : t = [me]);
          }
          u = u.return;
        }
        t !== null && zn(
          l,
          t,
          e,
          a
        ), l.flags |= 262144;
      }
      function ka(t) {
        for (t = t.firstContext; t !== null; ) {
          var l = t.context;
          if (!al(
            Ul ? l._currentValue : l._currentValue2,
            t.memoizedValue
          ))
            return !0;
          t = t.next;
        }
        return !1;
      }
      function ce(t) {
        Se = t, Cl = null, t = t.dependencies, t !== null && (t.firstContext = null);
      }
      function Gt(t) {
        return df(Se, t);
      }
      function tu(t, l) {
        return Se === null && ce(t), df(t, l);
      }
      function df(t, l) {
        var e = Ul ? l._currentValue : l._currentValue2;
        if (l = { context: l, memoizedValue: e, next: null }, Cl === null) {
          if (t === null) throw Error(v(308));
          Cl = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
        } else Cl = Cl.next = l;
        return e;
      }
      function Tn() {
        return {
          controller: new Bm(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function da(t) {
        t.refCount--, t.refCount === 0 && Ym(Qm, function() {
          t.controller.abort();
        });
      }
      function Nn() {
        var t = Ee.current;
        return t !== null ? t : ht.pooledCache;
      }
      function lu(t, l) {
        l === null ? b(Ee, Ee.current) : b(Ee, l.pool);
      }
      function yf() {
        var t = Nn();
        return t === null ? null : {
          parent: Ul ? _t._currentValue : _t._currentValue2,
          pool: t
        };
      }
      function wt(t) {
        t.flags |= 4;
      }
      function rf(t, l) {
        if (t !== null && t.child === l.child) return !1;
        if ((l.flags & 16) !== 0) return !0;
        for (t = l.child; t !== null; ) {
          if ((t.flags & 13878) !== 0 || (t.subtreeFlags & 13878) !== 0)
            return !0;
          t = t.sibling;
        }
        return !1;
      }
      function bn(t, l, e, a) {
        if (Vt)
          for (e = l.child; e !== null; ) {
            if (e.tag === 5 || e.tag === 6)
              kn(t, e.stateNode);
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
        else if (Pl)
          for (var u = l.child; u !== null; ) {
            if (u.tag === 5) {
              var n = u.stateNode;
              e && a && (n = Ts(
                n,
                u.type,
                u.memoizedProps
              )), kn(t, n);
            } else if (u.tag === 6)
              n = u.stateNode, e && a && (n = Ns(
                n,
                u.memoizedProps
              )), kn(t, n);
            else if (u.tag !== 4) {
              if (u.tag === 22 && u.memoizedState !== null)
                n = u.child, n !== null && (n.return = u), bn(t, u, !0, !0);
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
      function hf(t, l, e, a) {
        if (Pl)
          for (var u = l.child; u !== null; ) {
            if (u.tag === 5) {
              var n = u.stateNode;
              e && a && (n = Ts(
                n,
                u.type,
                u.memoizedProps
              )), Es(t, n);
            } else if (u.tag === 6)
              n = u.stateNode, e && a && (n = Ns(
                n,
                u.memoizedProps
              )), Es(t, n);
            else if (u.tag !== 4) {
              if (u.tag === 22 && u.memoizedState !== null)
                n = u.child, n !== null && (n.return = u), hf(
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
      function Sf(t, l) {
        if (Pl && rf(t, l)) {
          t = l.stateNode;
          var e = t.containerInfo, a = Ss();
          hf(a, l, !1, !1), t.pendingChildren = a, wt(l), $o(e, a);
        }
      }
      function _n(t, l, e, a) {
        if (Vt)
          t.memoizedProps !== a && wt(l);
        else if (Pl) {
          var u = t.stateNode, n = t.memoizedProps;
          if ((t = rf(t, l)) || n !== a) {
            var f = Qt.current;
            n = Io(
              u,
              e,
              n,
              a,
              !t,
              null
            ), n === u ? l.stateNode = u : (ms(
              n,
              e,
              a,
              f
            ) && wt(l), l.stateNode = n, t ? bn(n, l, !1, !1) : wt(l));
          } else l.stateNode = u;
        }
      }
      function Mn(t, l, e) {
        if (Mo(l, e)) {
          if (t.flags |= 16777216, !ys(l, e))
            if (Kf()) t.flags |= 8192;
            else
              throw Je = Su, pc;
        } else t.flags &= -16777217;
      }
      function Ef(t, l) {
        if (Tm(l)) {
          if (t.flags |= 16777216, !Cs(l))
            if (Kf()) t.flags |= 8192;
            else
              throw Je = Su, pc;
        } else t.flags &= -16777217;
      }
      function eu(t, l) {
        l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? tt() : 536870912, t.lanes |= l, Ie |= l);
      }
      function ya(t, l) {
        if (!st)
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
      function xv(t, l, e) {
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
            return Nt(l), null;
          case 1:
            return Nt(l), null;
          case 3:
            return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Hl(_t), gt(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (aa(l) ? wt(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, rl !== null && (Bn(rl), rl = null))), Sf(t, l), Nt(l), null;
          case 26:
            if (il) {
              e = l.type;
              var u = l.memoizedState;
              return t === null ? (wt(l), u !== null ? (Nt(l), Ef(
                l,
                u
              )) : (Nt(l), Mn(
                l,
                e,
                a
              ))) : u ? u !== t.memoizedState ? (wt(l), Nt(l), Ef(
                l,
                u
              )) : (Nt(l), l.flags &= -16777217) : (Vt ? t.memoizedProps !== a && wt(l) : _n(
                t,
                l,
                e,
                a
              ), Nt(l), Mn(
                l,
                e,
                a
              )), null;
            }
          case 27:
            if (Xt) {
              if (Qa(l), e = wl.current, u = l.type, t !== null && l.stateNode != null)
                Vt ? t.memoizedProps !== a && wt(l) : _n(
                  t,
                  l,
                  u,
                  a
                );
              else {
                if (!a) {
                  if (l.stateNode === null)
                    throw Error(v(166));
                  return Nt(l), null;
                }
                t = Qt.current, aa(l) ? ti(l, t) : (t = js(
                  u,
                  a,
                  e,
                  t,
                  !0
                ), l.stateNode = t, wt(l));
              }
              return Nt(l), null;
            }
          case 5:
            if (Qa(l), e = l.type, t !== null && l.stateNode != null)
              _n(t, l, e, a);
            else {
              if (!a) {
                if (l.stateNode === null)
                  throw Error(v(166));
                return Nt(l), null;
              }
              t = Qt.current, aa(l) ? ti(l, t) : (u = So(
                e,
                a,
                wl.current,
                t,
                l
              ), bn(u, l, !1, !1), l.stateNode = u, ms(
                u,
                e,
                a,
                t
              ) && wt(l));
            }
            return Nt(l), Mn(
              l,
              l.type,
              l.pendingProps
            ), null;
          case 6:
            if (t && l.stateNode != null)
              e = t.memoizedProps, Vt ? e !== a && wt(l) : Pl && (e !== a ? (l.stateNode = ps(
                a,
                wl.current,
                Qt.current,
                l
              ), wt(l)) : l.stateNode = t.stateNode);
            else {
              if (typeof a != "string" && l.stateNode === null)
                throw Error(v(166));
              if (t = wl.current, e = Qt.current, aa(l)) {
                if (!cl) throw Error(v(176));
                if (t = l.stateNode, e = l.memoizedProps, a = null, u = xt, u !== null)
                  switch (u.tag) {
                    case 27:
                    case 5:
                      a = u.memoizedProps;
                  }
                sm(
                  t,
                  e,
                  l,
                  a
                ) || ue(l);
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
              if (u = aa(l), a !== null && a.dehydrated !== null) {
                if (t === null) {
                  if (!u) throw Error(v(318));
                  if (!cl) throw Error(v(344));
                  if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(v(317));
                  vm(u, l);
                } else
                  ua(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
                Nt(l), u = !1;
              } else
                rl !== null && (Bn(rl), rl = null), u = !0;
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
            return e !== t && e && (l.child.flags |= 8192), eu(l, l.updateQueue), Nt(l), null;
          case 4:
            return gt(), Sf(t, l), t === null && To(l.stateNode.containerInfo), Nt(l), null;
          case 10:
            return Hl(l.type), Nt(l), null;
          case 19:
            if (M(jt), u = l.memoizedState, u === null)
              return Nt(l), null;
            if (a = (l.flags & 128) !== 0, n = u.rendering, n === null)
              if (a) ya(u, !1);
              else {
                if (Ht !== 0 || t !== null && (t.flags & 128) !== 0)
                  for (t = l.child; t !== null; ) {
                    if (n = La(t), n !== null) {
                      for (l.flags |= 128, ya(u, !1), t = n.updateQueue, l.updateQueue = t, eu(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                        kf(e, t), e = e.sibling;
                      return b(
                        jt,
                        jt.current & 1 | 2
                      ), l.child;
                    }
                    t = t.sibling;
                  }
                u.tail !== null && yl() > Aa && (l.flags |= 128, a = !0, ya(u, !1), l.lanes = 4194304);
              }
            else {
              if (!a)
                if (t = La(n), t !== null) {
                  if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, eu(l, t), ya(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !st)
                    return Nt(l), null;
                } else
                  2 * yl() - u.renderingStartTime > Aa && e !== 536870912 && (l.flags |= 128, a = !0, ya(u, !1), l.lanes = 4194304);
              u.isBackwards ? (n.sibling = l.child, l.child = n) : (t = u.last, t !== null ? t.sibling = n : l.child = n, u.last = n);
            }
            return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = yl(), l.sibling = null, t = jt.current, b(
              jt,
              a ? t & 1 | 2 : t & 1
            ), l) : (Nt(l), null);
          case 22:
          case 23:
            return bl(l), Lu(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Nt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Nt(l), e = l.updateQueue, e !== null && eu(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && M(Ee), null;
          case 24:
            return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Hl(_t), Nt(l), null;
          case 25:
            return null;
        }
        throw Error(v(156, l.tag));
      }
      function Lv(t, l) {
        switch (Tt(l), l.tag) {
          case 1:
            return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
          case 3:
            return Hl(_t), gt(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
          case 26:
          case 27:
          case 5:
            return Qa(l), null;
          case 13:
            if (bl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
              if (l.alternate === null)
                throw Error(v(340));
              ua();
            }
            return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
          case 19:
            return M(jt), null;
          case 4:
            return gt(), null;
          case 10:
            return Hl(l.type), null;
          case 22:
          case 23:
            return bl(l), Lu(), t !== null && M(Ee), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
          case 24:
            return Hl(_t), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function zf(t, l) {
        switch (Tt(l), l.tag) {
          case 3:
            Hl(_t), gt();
            break;
          case 26:
          case 27:
          case 5:
            Qa(l);
            break;
          case 4:
            gt();
            break;
          case 13:
            bl(l);
            break;
          case 19:
            M(jt);
            break;
          case 10:
            Hl(l.type);
            break;
          case 22:
          case 23:
            bl(l), Lu(), t !== null && M(Ee);
            break;
          case 24:
            Hl(_t);
        }
      }
      function ra(t, l) {
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
        } catch (o) {
          pt(l, l.return, o);
        }
      }
      function Kl(t, l, e) {
        try {
          var a = l.updateQueue, u = a !== null ? a.lastEffect : null;
          if (u !== null) {
            var n = u.next;
            a = n;
            do {
              if ((a.tag & t) === t) {
                var f = a.inst, o = f.destroy;
                if (o !== void 0) {
                  f.destroy = void 0, u = l;
                  var d = e;
                  try {
                    o();
                  } catch (z) {
                    pt(
                      u,
                      d,
                      z
                    );
                  }
                }
              }
              a = a.next;
            } while (a !== n);
          }
        } catch (z) {
          pt(l, l.return, z);
        }
      }
      function Tf(t) {
        var l = t.updateQueue;
        if (l !== null) {
          var e = t.stateNode;
          try {
            fi(l, e);
          } catch (a) {
            pt(t, t.return, a);
          }
        }
      }
      function Nf(t, l, e) {
        e.props = ne(
          t.type,
          t.memoizedProps
        ), e.state = t.memoizedState;
        try {
          e.componentWillUnmount();
        } catch (a) {
          pt(t, l, a);
        }
      }
      function ie(t, l) {
        try {
          var e = t.ref;
          if (e !== null) {
            var a = t.stateNode;
            switch (t.tag) {
              case 26:
              case 27:
              case 5:
                var u = Ea(a);
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
      function bf(t) {
        var l = t.type, e = t.memoizedProps, a = t.stateNode;
        try {
          Vo(a, l, e, t);
        } catch (u) {
          pt(t, t.return, u);
        }
      }
      function _f(t, l, e) {
        try {
          Xo(
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
      function Mf(t) {
        return t.tag === 5 || t.tag === 3 || (il ? t.tag === 26 : !1) || (Xt ? t.tag === 27 : !1) || t.tag === 4;
      }
      function Hn(t) {
        t: for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || Mf(t.return)) return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && (!Xt || t.tag !== 27) && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & 2)) return t.stateNode;
        }
      }
      function On(t, l, e) {
        var a = t.tag;
        if (a === 5 || a === 6)
          t = t.stateNode, l ? Ko(e, t, l) : Qo(e, t);
        else if (!(a === 4 || Xt && a === 27) && (t = t.child, t !== null))
          for (On(t, l, e), t = t.sibling; t !== null; )
            On(t, l, e), t = t.sibling;
      }
      function au(t, l, e) {
        var a = t.tag;
        if (a === 5 || a === 6)
          t = t.stateNode, l ? Zo(e, t, l) : Yo(e, t);
        else if (!(a === 4 || Xt && a === 27) && (t = t.child, t !== null))
          for (au(t, l, e), t = t.sibling; t !== null; )
            au(t, l, e), t = t.sibling;
      }
      function Hf(t, l, e) {
        t = t.containerInfo;
        try {
          zs(t, e);
        } catch (a) {
          pt(l, l.return, a);
        }
      }
      function Wv(t, l) {
        for (ro(t.containerInfo), qt = l; qt !== null; )
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
                      var f = ne(
                        a.type,
                        u,
                        a.elementType === a.type
                      );
                      l = n.getSnapshotBeforeUpdate(
                        f,
                        e
                      ), n.__reactInternalSnapshotBeforeUpdate = l;
                    } catch (o) {
                      pt(
                        a,
                        a.return,
                        o
                      );
                    }
                  }
                  break;
                case 3:
                  (l & 1024) !== 0 && Vt && wo(t.stateNode.containerInfo);
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
                    throw Error(v(163));
              }
              if (l = t.sibling, l !== null) {
                l.return = t.return, qt = l;
                break;
              }
              qt = t.return;
            }
        return f = Zs, Zs = !1, f;
      }
      function Of(t, l, e) {
        var a = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Ol(t, e), a & 4 && ra(5, e);
            break;
          case 1:
            if (Ol(t, e), a & 4)
              if (t = e.stateNode, l === null)
                try {
                  t.componentDidMount();
                } catch (o) {
                  pt(e, e.return, o);
                }
              else {
                var u = ne(
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
                } catch (o) {
                  pt(
                    e,
                    e.return,
                    o
                  );
                }
              }
            a & 64 && Tf(e), a & 512 && ie(e, e.return);
            break;
          case 3:
            if (Ol(t, e), a & 64 && (a = e.updateQueue, a !== null)) {
              if (t = null, e.child !== null)
                switch (e.child.tag) {
                  case 27:
                  case 5:
                    t = Ea(e.child.stateNode);
                    break;
                  case 1:
                    t = e.child.stateNode;
                }
              try {
                fi(a, t);
              } catch (o) {
                pt(e, e.return, o);
              }
            }
            break;
          case 26:
            if (il) {
              Ol(t, e), a & 512 && ie(e, e.return);
              break;
            }
          case 27:
          case 5:
            Ol(t, e), l === null && a & 4 && bf(e), a & 512 && ie(e, e.return);
            break;
          case 12:
            Ol(t, e);
            break;
          case 13:
            Ol(t, e), a & 4 && Uf(t, e);
            break;
          case 22:
            if (u = e.memoizedState !== null || jl, !u) {
              l = l !== null && l.memoizedState !== null || Mt;
              var n = jl, f = Mt;
              jl = u, (Mt = l) && !f ? Jl(
                t,
                e,
                (e.subtreeFlags & 8772) !== 0
              ) : Ol(t, e), jl = n, Mt = f;
            }
            a & 512 && (e.memoizedProps.mode === "manual" ? ie(e, e.return) : It(e, e.return));
            break;
          default:
            Ol(t, e);
        }
      }
      function gf(t) {
        var l = t.alternate;
        l !== null && (t.alternate = null, gf(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && _o(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
      }
      function dl(t, l, e) {
        for (e = e.child; e !== null; )
          gn(
            t,
            l,
            e
          ), e = e.sibling;
      }
      function gn(t, l, e) {
        if (el && typeof el.onCommitFiberUnmount == "function")
          try {
            el.onCommitFiberUnmount(Na, e);
          } catch {
          }
        switch (e.tag) {
          case 26:
            if (il) {
              Mt || It(e, l), dl(
                t,
                l,
                e
              ), e.memoizedState ? Us(e.memoizedState) : e.stateNode && Ds(e.stateNode);
              break;
            }
          case 27:
            if (Xt) {
              Mt || It(e, l);
              var a = Dt, u = ul;
              Dt = e.stateNode, dl(
                t,
                l,
                e
              ), Mm(e.stateNode), Dt = a, ul = u;
              break;
            }
          case 5:
            Mt || It(e, l);
          case 6:
            if (Vt) {
              if (a = Dt, u = ul, Dt = null, dl(
                t,
                l,
                e
              ), Dt = a, ul = u, Dt !== null)
                if (ul)
                  try {
                    xo(Dt, e.stateNode);
                  } catch (n) {
                    pt(
                      e,
                      l,
                      n
                    );
                  }
                else
                  try {
                    Jo(Dt, e.stateNode);
                  } catch (n) {
                    pt(
                      e,
                      l,
                      n
                    );
                  }
            } else
              dl(
                t,
                l,
                e
              );
            break;
          case 18:
            Vt && Dt !== null && (ul ? ym(
              Dt,
              e.stateNode
            ) : dm(Dt, e.stateNode));
            break;
          case 4:
            Vt ? (a = Dt, u = ul, Dt = e.stateNode.containerInfo, ul = !0, dl(
              t,
              l,
              e
            ), Dt = a, ul = u) : (Pl && Hf(
              e.stateNode,
              e,
              Ss()
            ), dl(
              t,
              l,
              e
            ));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            Mt || Kl(2, e, l), Mt || Kl(4, e, l), dl(
              t,
              l,
              e
            );
            break;
          case 1:
            Mt || (It(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && Nf(
              e,
              l,
              a
            )), dl(
              t,
              l,
              e
            );
            break;
          case 21:
            dl(
              t,
              l,
              e
            );
            break;
          case 22:
            Mt || It(e, l), Mt = (a = Mt) || e.memoizedState !== null, dl(
              t,
              l,
              e
            ), Mt = a;
            break;
          default:
            dl(
              t,
              l,
              e
            );
        }
      }
      function Uf(t, l) {
        if (cl && l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
          try {
            pm(t);
          } catch (e) {
            pt(l, l.return, e);
          }
      }
      function Fv(t) {
        switch (t.tag) {
          case 13:
          case 19:
            var l = t.stateNode;
            return l === null && (l = t.stateNode = new Xs()), l;
          case 22:
            return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new Xs()), l;
          default:
            throw Error(v(435, t.tag));
        }
      }
      function Un(t, l) {
        var e = Fv(t);
        l.forEach(function(a) {
          var u = eo.bind(null, t, a);
          e.has(a) || (e.add(a), a.then(u, u));
        });
      }
      function Ft(t, l) {
        var e = l.deletions;
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var u = e[a], n = t, f = l;
            if (Vt) {
              var o = f;
              t: for (; o !== null; ) {
                switch (o.tag) {
                  case 27:
                  case 5:
                    Dt = o.stateNode, ul = !1;
                    break t;
                  case 3:
                    Dt = o.stateNode.containerInfo, ul = !0;
                    break t;
                  case 4:
                    Dt = o.stateNode.containerInfo, ul = !0;
                    break t;
                }
                o = o.return;
              }
              if (Dt === null) throw Error(v(160));
              gn(n, f, u), Dt = null, ul = !1;
            } else gn(n, f, u);
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
            Ft(l, t), $t(t), a & 4 && (Kl(3, t, t.return), ra(3, t), Kl(5, t, t.return));
            break;
          case 1:
            Ft(l, t), $t(t), a & 512 && (Mt || e === null || It(e, e.return)), a & 64 && jl && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
            break;
          case 26:
            if (il) {
              var u = hl;
              Ft(l, t), $t(t), a & 512 && (Mt || e === null || It(e, e.return)), a & 4 && (a = e !== null ? e.memoizedState : null, l = t.memoizedState, e === null ? l === null ? t.stateNode === null ? t.stateNode = Sm(
                u,
                t.type,
                t.memoizedProps,
                t
              ) : As(
                u,
                t.type,
                t.stateNode
              ) : t.stateNode = gs(
                u,
                l,
                t.memoizedProps
              ) : a !== l ? (a === null ? e.stateNode !== null && Ds(e.stateNode) : Us(a), l === null ? As(
                u,
                t.type,
                t.stateNode
              ) : gs(
                u,
                l,
                t.memoizedProps
              )) : l === null && t.stateNode !== null && _f(
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
                bm(u), _m(
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
            if (Ft(l, t), $t(t), a & 512 && (Mt || e === null || It(e, e.return)), Vt) {
              if (t.flags & 32) {
                l = t.stateNode;
                try {
                  hs(l);
                } catch (A) {
                  pt(t, t.return, A);
                }
              }
              a & 4 && t.stateNode != null && (l = t.memoizedProps, _f(
                t,
                l,
                e !== null ? e.memoizedProps : l
              )), a & 1024 && (hc = !0);
            }
            break;
          case 6:
            if (Ft(l, t), $t(t), a & 4 && Vt) {
              if (t.stateNode === null)
                throw Error(v(162));
              a = t.memoizedProps, e = e !== null ? e.memoizedProps : a, l = t.stateNode;
              try {
                Go(l, e, a);
              } catch (A) {
                pt(t, t.return, A);
              }
            }
            break;
          case 3:
            if (il ? (zm(), u = hl, hl = ac(l.containerInfo), Ft(l, t), hl = u) : Ft(l, t), $t(t), a & 4) {
              if (Vt && cl && e !== null && e.memoizedState.isDehydrated)
                try {
                  mm(l.containerInfo);
                } catch (A) {
                  pt(t, t.return, A);
                }
              if (Pl) {
                a = l.containerInfo, e = l.pendingChildren;
                try {
                  zs(a, e);
                } catch (A) {
                  pt(t, t.return, A);
                }
              }
            }
            hc && (hc = !1, Df(t));
            break;
          case 4:
            il ? (e = hl, hl = ac(
              t.stateNode.containerInfo
            ), Ft(l, t), $t(t), hl = e) : (Ft(l, t), $t(t)), a & 4 && Pl && Hf(
              t.stateNode,
              t,
              t.stateNode.pendingChildren
            );
            break;
          case 12:
            Ft(l, t), $t(t);
            break;
          case 13:
            Ft(l, t), $t(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Tc = yl()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Un(t, a)));
            break;
          case 22:
            a & 512 && (Mt || e === null || It(e, e.return)), u = t.memoizedState !== null;
            var f = e !== null && e.memoizedState !== null, o = jl, d = Mt;
            if (jl = o || u, Mt = d || f, Ft(l, t), Mt = d, jl = o, $t(t), l = t.stateNode, l._current = t, l._visibility &= -3, l._visibility |= l._pendingVisibility & 2, a & 8192 && (l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (l = jl || Mt, e === null || f || l || ge(t)), Vt && (t.memoizedProps === null || t.memoizedProps.mode !== "manual"))) {
              t: if (e = null, Vt)
                for (l = t; ; ) {
                  if (l.tag === 5 || il && l.tag === 26 || Xt && l.tag === 27) {
                    if (e === null) {
                      f = e = l;
                      try {
                        n = f.stateNode, u ? Lo(n) : Fo(
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
                        var z = f.stateNode;
                        u ? Wo(z) : Po(z, f.memoizedProps);
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
            a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Un(t, e))));
            break;
          case 19:
            Ft(l, t), $t(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Un(t, a)));
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
                  if (Mf(e)) {
                    var a = e;
                    break t;
                  }
                  e = e.return;
                }
                throw Error(v(160));
              }
              switch (a.tag) {
                case 27:
                  if (Xt) {
                    var u = a.stateNode, n = Hn(t);
                    au(
                      t,
                      n,
                      u
                    );
                    break;
                  }
                case 5:
                  var f = a.stateNode;
                  a.flags & 32 && (hs(f), a.flags &= -33);
                  var o = Hn(t);
                  au(t, o, f);
                  break;
                case 3:
                case 4:
                  var d = a.stateNode.containerInfo, z = Hn(t);
                  On(
                    t,
                    z,
                    d
                  );
                  break;
                default:
                  throw Error(v(161));
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
            Df(l), l.tag === 5 && l.flags & 1024 && go(l.stateNode), t = t.sibling;
          }
      }
      function Ol(t, l) {
        if (l.subtreeFlags & 8772)
          for (l = l.child; l !== null; )
            Of(t, l.alternate, l), l = l.sibling;
      }
      function ge(t) {
        for (t = t.child; t !== null; ) {
          var l = t;
          switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Kl(4, l, l.return), ge(l);
              break;
            case 1:
              It(l, l.return);
              var e = l.stateNode;
              typeof e.componentWillUnmount == "function" && Nf(
                l,
                l.return,
                e
              ), ge(l);
              break;
            case 26:
            case 27:
            case 5:
              It(l, l.return), ge(l);
              break;
            case 22:
              It(l, l.return), l.memoizedState === null && ge(l);
              break;
            default:
              ge(l);
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
              ), ra(4, n);
              break;
            case 1:
              if (Jl(
                u,
                n,
                e
              ), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
                try {
                  u.componentDidMount();
                } catch (z) {
                  pt(a, a.return, z);
                }
              if (a = n, u = a.updateQueue, u !== null) {
                var o = a.stateNode;
                try {
                  var d = u.shared.hiddenCallbacks;
                  if (d !== null)
                    for (u.shared.hiddenCallbacks = null, u = 0; u < d.length; u++)
                      ii(d[u], o);
                } catch (z) {
                  pt(a, a.return, z);
                }
              }
              e && f & 64 && Tf(n), ie(n, n.return);
              break;
            case 26:
            case 27:
            case 5:
              Jl(
                u,
                n,
                e
              ), e && a === null && f & 4 && bf(n), ie(n, n.return);
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
              ), e && f & 4 && Uf(u, n);
              break;
            case 22:
              n.memoizedState === null && Jl(
                u,
                n,
                e
              ), ie(n, n.return);
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
      function An(t, l) {
        var e = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && da(e));
      }
      function Dn(t, l) {
        t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && da(t));
      }
      function xl(t, l, e, a) {
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
            xl(
              t,
              l,
              e,
              a
            ), u & 2048 && ra(9, l);
            break;
          case 3:
            xl(
              t,
              l,
              e,
              a
            ), u & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && da(t)));
            break;
          case 12:
            if (u & 2048) {
              xl(
                t,
                l,
                e,
                a
              ), t = l.stateNode;
              try {
                var n = l.memoizedProps, f = n.id, o = n.onPostCommit;
                typeof o == "function" && o(
                  f,
                  l.alternate === null ? "mount" : "update",
                  t.passiveEffectDuration,
                  -0
                );
              } catch (d) {
                pt(l, l.return, d);
              }
            } else
              xl(
                t,
                l,
                e,
                a
              );
            break;
          case 23:
            break;
          case 22:
            n = l.stateNode, l.memoizedState !== null ? n._visibility & 4 ? xl(
              t,
              l,
              e,
              a
            ) : ha(
              t,
              l
            ) : n._visibility & 4 ? xl(
              t,
              l,
              e,
              a
            ) : (n._visibility |= 4, Ue(
              t,
              l,
              e,
              a,
              (l.subtreeFlags & 10256) !== 0
            )), u & 2048 && An(
              l.alternate,
              l
            );
            break;
          case 24:
            xl(
              t,
              l,
              e,
              a
            ), u & 2048 && Dn(l.alternate, l);
            break;
          default:
            xl(
              t,
              l,
              e,
              a
            );
        }
      }
      function Ue(t, l, e, a, u) {
        for (u = u && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
          var n = t, f = l, o = e, d = a, z = f.flags;
          switch (f.tag) {
            case 0:
            case 11:
            case 15:
              Ue(
                n,
                f,
                o,
                d,
                u
              ), ra(8, f);
              break;
            case 23:
              break;
            case 22:
              var A = f.stateNode;
              f.memoizedState !== null ? A._visibility & 4 ? Ue(
                n,
                f,
                o,
                d,
                u
              ) : ha(
                n,
                f
              ) : (A._visibility |= 4, Ue(
                n,
                f,
                o,
                d,
                u
              )), u && z & 2048 && An(
                f.alternate,
                f
              );
              break;
            case 24:
              Ue(
                n,
                f,
                o,
                d,
                u
              ), u && z & 2048 && Dn(f.alternate, f);
              break;
            default:
              Ue(
                n,
                f,
                o,
                d,
                u
              );
          }
          l = l.sibling;
        }
      }
      function ha(t, l) {
        if (l.subtreeFlags & 10256)
          for (l = l.child; l !== null; ) {
            var e = t, a = l, u = a.flags;
            switch (a.tag) {
              case 22:
                ha(e, a), u & 2048 && An(
                  a.alternate,
                  a
                );
                break;
              case 24:
                ha(e, a), u & 2048 && Dn(
                  a.alternate,
                  a
                );
                break;
              default:
                ha(e, a);
            }
            l = l.sibling;
          }
      }
      function fe(t) {
        if (t.subtreeFlags & Pe)
          for (t = t.child; t !== null; )
            jf(t), t = t.sibling;
      }
      function jf(t) {
        switch (t.tag) {
          case 26:
            fe(t), t.flags & Pe && (t.memoizedState !== null ? Nm(
              hl,
              t.memoizedState,
              t.memoizedProps
            ) : rs(t.type, t.memoizedProps));
            break;
          case 5:
            fe(t), t.flags & Pe && rs(t.type, t.memoizedProps);
            break;
          case 3:
          case 4:
            if (il) {
              var l = hl;
              hl = ac(
                t.stateNode.containerInfo
              ), fe(t), hl = l;
            } else fe(t);
            break;
          case 22:
            t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = Pe, Pe = 16777216, fe(t), Pe = l) : fe(t));
            break;
          default:
            fe(t);
        }
      }
      function Rf(t) {
        var l = t.alternate;
        if (l !== null && (t = l.child, t !== null)) {
          l.child = null;
          do
            l = t.sibling, t.sibling = null, t = l;
          while (t !== null);
        }
      }
      function Sa(t) {
        var l = t.deletions;
        if ((t.flags & 16) !== 0) {
          if (l !== null)
            for (var e = 0; e < l.length; e++) {
              var a = l[e];
              qt = a, Bf(
                a,
                t
              );
            }
          Rf(t);
        }
        if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null; )
            qf(t), t = t.sibling;
      }
      function qf(t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Sa(t), t.flags & 2048 && Kl(9, t, t.return);
            break;
          case 3:
            Sa(t);
            break;
          case 12:
            Sa(t);
            break;
          case 22:
            var l = t.stateNode;
            t.memoizedState !== null && l._visibility & 4 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -5, uu(t)) : Sa(t);
            break;
          default:
            Sa(t);
        }
      }
      function uu(t) {
        var l = t.deletions;
        if ((t.flags & 16) !== 0) {
          if (l !== null)
            for (var e = 0; e < l.length; e++) {
              var a = l[e];
              qt = a, Bf(
                a,
                t
              );
            }
          Rf(t);
        }
        for (t = t.child; t !== null; ) {
          switch (l = t, l.tag) {
            case 0:
            case 11:
            case 15:
              Kl(8, l, l.return), uu(l);
              break;
            case 22:
              e = l.stateNode, e._visibility & 4 && (e._visibility &= -5, uu(l));
              break;
            default:
              uu(l);
          }
          t = t.sibling;
        }
      }
      function Bf(t, l) {
        for (; qt !== null; ) {
          var e = qt;
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Kl(8, e, l);
              break;
            case 23:
            case 22:
              if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                var a = e.memoizedState.cachePool.pool;
                a != null && a.refCount++;
              }
              break;
            case 24:
              da(e.memoizedState.cache);
          }
          if (a = e.child, a !== null) a.return = e, qt = a;
          else
            t: for (e = t; qt !== null; ) {
              a = qt;
              var u = a.sibling, n = a.return;
              if (gf(a), a === e) {
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
      function Cn(t) {
        var l = ds(t);
        if (l != null) {
          if (typeof l.memoizedProps["data-testname"] != "string")
            throw Error(v(364));
          return l;
        }
        if (t = Do(t), t === null) throw Error(v(362));
        return t.stateNode.current;
      }
      function jn(t, l) {
        var e = t.tag;
        switch (l.$$typeof) {
          case bu:
            if (t.type === l.value) return !0;
            break;
          case _u:
            t: {
              for (l = l.value, t = [t, 0], e = 0; e < t.length; ) {
                var a = t[e++], u = a.tag, n = t[e++], f = l[n];
                if (u !== 5 && u !== 26 && u !== 27 || !Ta(a)) {
                  for (; f != null && jn(a, f); )
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
          case Mu:
            if ((e === 5 || e === 26 || e === 27) && Ro(t.stateNode, l.value))
              return !0;
            break;
          case Ou:
            if ((e === 5 || e === 6 || e === 26 || e === 27) && (t = jo(t), t !== null && 0 <= t.indexOf(l.value)))
              return !0;
            break;
          case Hu:
            if ((e === 5 || e === 26 || e === 27) && (t = t.memoizedProps["data-testname"], typeof t == "string" && t.toLowerCase() === l.value.toLowerCase()))
              return !0;
            break;
          default:
            throw Error(v(365));
        }
        return !1;
      }
      function Rn(t) {
        switch (t.$$typeof) {
          case bu:
            return "<" + (R(t.value) || "Unknown") + ">";
          case _u:
            return ":has(" + (Rn(t) || "") + ")";
          case Mu:
            return '[role="' + t.value + '"]';
          case Ou:
            return '"' + t.value + '"';
          case Hu:
            return '[data-testname="' + t.value + '"]';
          default:
            throw Error(v(365));
        }
      }
      function Yf(t, l) {
        var e = [];
        t = [t, 0];
        for (var a = 0; a < t.length; ) {
          var u = t[a++], n = u.tag, f = t[a++], o = l[f];
          if (n !== 5 && n !== 26 && n !== 27 || !Ta(u)) {
            for (; o != null && jn(u, o); )
              f++, o = l[f];
            if (f === l.length) e.push(u);
            else
              for (u = u.child; u !== null; )
                t.push(u, f), u = u.sibling;
          }
        }
        return e;
      }
      function qn(t, l) {
        if (!za) throw Error(v(363));
        t = Cn(t), t = Yf(t, l), l = [], t = Array.from(t);
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
        if ((rt & 2) !== 0 && ct !== 0)
          return ct & -ct;
        if (W.T !== null) {
          var t = Ze;
          return t !== 0 ? t : Xu();
        }
        return No();
      }
      function Qf() {
        ml === 0 && (ml = (ct & 536870912) === 0 || st ? ft() : 536870912);
        var t = ol.current;
        return t !== null && (t.flags |= 32), ml;
      }
      function Jt(t, l, e) {
        (t === ht && St === 2 || t.cancelPendingCommit !== null) && (Ae(t, 0), gl(
          t,
          ct,
          ml,
          !1
        )), w(t, e), ((rt & 2) === 0 || t !== ht) && (t === ht && ((rt & 2) === 0 && (ze |= e), Ht === 4 && gl(
          t,
          ct,
          ml,
          !1
        )), Sl(t));
      }
      function Gf(t, l, e) {
        if ((rt & 6) !== 0) throw Error(v(327));
        var a = !e && (l & 60) === 0 && (l & t.expiredLanes) === 0 || Y(t, l), u = a ? Iv(t, l) : Gn(t, l, !0), n = a;
        do {
          if (u === 0) {
            we && !a && gl(t, l, 0, !1);
            break;
          } else if (u === 6)
            gl(
              t,
              l,
              0,
              !Rl
            );
          else {
            if (e = t.current.alternate, n && !Pv(e)) {
              u = Gn(t, l, !1), n = !1;
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
                  var o = t;
                  u = Ua;
                  var d = cl && o.current.memoizedState.isDehydrated;
                  if (d && (Ae(o, f).flags |= 256), f = Gn(
                    o,
                    f,
                    !1
                  ), f !== 2) {
                    if (Sc && !d) {
                      o.errorRecoveryDisabledLanes |= n, ze |= n, u = 4;
                      break t;
                    }
                    n = Nl, Nl = u, n !== null && Bn(n);
                  }
                  u = f;
                }
                if (n = !1, u !== 2) continue;
              }
            }
            if (u === 1) {
              Ae(t, 0), gl(t, l, 0, !0);
              break;
            }
            t: {
              switch (a = t, u) {
                case 0:
                case 1:
                  throw Error(v(345));
                case 4:
                  if ((l & 4194176) === l) {
                    gl(
                      a,
                      l,
                      ml,
                      !Rl
                    );
                    break t;
                  }
                  break;
                case 2:
                  Nl = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(v(329));
              }
              if (a.finishedWork = e, a.finishedLanes = l, (l & 62914560) === l && (n = Tc + 300 - yl(), 10 < n)) {
                if (gl(
                  a,
                  l,
                  ml,
                  !Rl
                ), x(a, 0) !== 0) break t;
                a.timeoutHandle = Eo(
                  Vf.bind(
                    null,
                    a,
                    e,
                    Nl,
                    gu,
                    zc,
                    l,
                    ml,
                    ze,
                    Ie,
                    Rl,
                    2,
                    -0,
                    0
                  ),
                  n
                );
                break t;
              }
              Vf(
                a,
                e,
                Nl,
                gu,
                zc,
                l,
                ml,
                ze,
                Ie,
                Rl,
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
      function Bn(t) {
        Nl === null ? Nl = t : Nl.push.apply(
          Nl,
          t
        );
      }
      function Vf(t, l, e, a, u, n, f, o, d, z, A, j, q) {
        var P = l.subtreeFlags;
        if ((P & 8192 || (P & 16785408) === 16785408) && (Ho(), jf(l), l = Oo(), l !== null)) {
          t.cancelPendingCommit = l(
            Pf.bind(
              null,
              t,
              e,
              a,
              u,
              f,
              o,
              d,
              1,
              j,
              q
            )
          ), gl(t, n, f, !z);
          return;
        }
        Pf(
          t,
          e,
          a,
          u,
          f,
          o,
          d,
          A,
          j,
          q
        );
      }
      function Pv(t) {
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
      function gl(t, l, e, a) {
        l &= ~Ec, l &= ~ze, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
        for (var u = l; 0 < u; ) {
          var n = 31 - ll(u), f = 1 << n;
          a[n] = -1, u &= ~f;
        }
        e !== 0 && I(t, e, l);
      }
      function Xf() {
        return (rt & 6) === 0 ? (He(0), !1) : !0;
      }
      function Yn() {
        if (at !== null) {
          if (St === 0)
            var t = at.return;
          else
            t = at, Cl = Se = null, Iu(t), xe = null, Ha = 0, t = at;
          for (; t !== null; )
            zf(t.alternate, t), t = t.return;
          at = null;
        }
      }
      function Ae(t, l) {
        t.finishedWork = null, t.finishedLanes = 0;
        var e = t.timeoutHandle;
        e !== tc && (t.timeoutHandle = tc, zo(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Yn(), ht = t, at = e = Ll(t.current, null), ct = l, St = 0, nl = null, Rl = !1, we = Y(t, l), Sc = !1, Ie = ml = Ec = ze = te = Ht = 0, Nl = Ua = null, zc = !1, (l & 8) !== 0 && (l |= l & 32);
        var a = t.entangledLanes;
        if (a !== 0)
          for (t = t.entanglements, a &= l; 0 < a; ) {
            var u = 31 - ll(a), n = 1 << u;
            l |= t[u], a &= ~n;
          }
        return ql = l, Ga(), e;
      }
      function Zf(t, l) {
        k = null, W.H = Tl, l === Ma ? (l = oi(), St = 3) : l === pc ? (l = oi(), St = 4) : St = l === Gs ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, nl = l, at === null && (Ht = 1, $a(
          t,
          B(l, t.current)
        ));
      }
      function Kf() {
        var t = ol.current;
        return t === null ? !0 : (ct & 4194176) === ct ? zl === null : (ct & 62914560) === ct || (ct & 536870912) !== 0 ? t === zl : !1;
      }
      function Jf() {
        var t = W.H;
        return W.H = Tl, t === null ? Tl : t;
      }
      function xf() {
        var t = W.A;
        return W.A = Gm, t;
      }
      function Qn() {
        Ht = 4, Rl || (ct & 4194176) !== ct && ol.current !== null || (we = !0), (te & 134217727) === 0 && (ze & 134217727) === 0 || ht === null || gl(
          ht,
          ct,
          ml,
          !1
        );
      }
      function Gn(t, l, e) {
        var a = rt;
        rt |= 2;
        var u = Jf(), n = xf();
        (ht !== t || ct !== l) && (gu = null, Ae(t, l)), l = !1;
        var f = Ht;
        t: do
          try {
            if (St !== 0 && at !== null) {
              var o = at, d = nl;
              switch (St) {
                case 8:
                  Yn(), f = 6;
                  break t;
                case 3:
                case 2:
                case 6:
                  ol.current === null && (l = !0);
                  var z = St;
                  if (St = 0, nl = null, De(t, o, d, z), e && we) {
                    f = 0;
                    break t;
                  }
                  break;
                default:
                  z = St, St = 0, nl = null, De(t, o, d, z);
              }
            }
            wv(), f = Ht;
            break;
          } catch (A) {
            Zf(t, A);
          }
        while (!0);
        return l && t.shellSuspendCounter++, Cl = Se = null, rt = a, W.H = u, W.A = n, at === null && (ht = null, ct = 0, Ga()), f;
      }
      function wv() {
        for (; at !== null; ) Lf(at);
      }
      function Iv(t, l) {
        var e = rt;
        rt |= 2;
        var a = Jf(), u = xf();
        ht !== t || ct !== l ? (gu = null, Aa = yl() + 500, Ae(t, l)) : we = Y(
          t,
          l
        );
        t: do
          try {
            if (St !== 0 && at !== null) {
              l = at;
              var n = nl;
              l: switch (St) {
                case 1:
                  St = 0, nl = null, De(t, l, n, 1);
                  break;
                case 2:
                  if (si(n)) {
                    St = 0, nl = null, Wf(l);
                    break;
                  }
                  l = function() {
                    St === 2 && ht === t && (St = 7), Sl(t);
                  }, n.then(l, l);
                  break t;
                case 3:
                  St = 7;
                  break t;
                case 4:
                  St = 5;
                  break t;
                case 7:
                  si(n) ? (St = 0, nl = null, Wf(l)) : (St = 0, nl = null, De(t, l, n, 7));
                  break;
                case 5:
                  var f = null;
                  switch (at.tag) {
                    case 26:
                      f = at.memoizedState;
                    case 5:
                    case 27:
                      var o = at, d = o.type, z = o.pendingProps;
                      if (f ? Cs(f) : ys(d, z)) {
                        St = 0, nl = null;
                        var A = o.sibling;
                        if (A !== null) at = A;
                        else {
                          var j = o.return;
                          j !== null ? (at = j, nu(j)) : at = null;
                        }
                        break l;
                      }
                  }
                  St = 0, nl = null, De(t, l, n, 5);
                  break;
                case 6:
                  St = 0, nl = null, De(t, l, n, 6);
                  break;
                case 8:
                  Yn(), Ht = 6;
                  break t;
                default:
                  throw Error(v(462));
              }
            }
            $v();
            break;
          } catch (q) {
            Zf(t, q);
          }
        while (!0);
        return Cl = Se = null, W.H = a, W.A = u, rt = e, at !== null ? 0 : (ht = null, ct = 0, Ga(), Ht);
      }
      function $v() {
        for (; at !== null && !gm(); )
          Lf(at);
      }
      function Lf(t) {
        var l = pf(
          t.alternate,
          t,
          ql
        );
        t.memoizedProps = t.pendingProps, l === null ? nu(t) : at = l;
      }
      function Wf(t) {
        var l = t, e = l.alternate;
        switch (l.tag) {
          case 15:
          case 0:
            l = cf(
              e,
              l,
              l.pendingProps,
              l.type,
              void 0,
              ct
            );
            break;
          case 11:
            l = cf(
              e,
              l,
              l.pendingProps,
              l.type.render,
              l.ref,
              ct
            );
            break;
          case 5:
            Iu(l);
          default:
            zf(e, l), l = at = kf(l, ql), l = pf(e, l, ql);
        }
        t.memoizedProps = t.pendingProps, l === null ? nu(t) : at = l;
      }
      function De(t, l, e, a) {
        Cl = Se = null, Iu(l), xe = null, Ha = 0;
        var u = l.return;
        try {
          if (Kv(
            t,
            u,
            l,
            e,
            ct
          )) {
            Ht = 1, $a(
              t,
              B(e, t.current)
            ), at = null;
            return;
          }
        } catch (n) {
          if (u !== null) throw at = u, n;
          Ht = 1, $a(
            t,
            B(e, t.current)
          ), at = null;
          return;
        }
        l.flags & 32768 ? (st || a === 1 ? t = !0 : we || (ct & 536870912) !== 0 ? t = !1 : (Rl = t = !0, (a === 2 || a === 3 || a === 6) && (a = ol.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ff(l, t)) : nu(l);
      }
      function nu(t) {
        var l = t;
        do {
          if ((l.flags & 32768) !== 0) {
            Ff(
              l,
              Rl
            );
            return;
          }
          t = l.return;
          var e = xv(
            l.alternate,
            l,
            ql
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
      function Ff(t, l) {
        do {
          var e = Lv(t.alternate, t);
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
      function Pf(t, l, e, a, u, n, f, o, d, z) {
        var A = W.T, j = oe();
        try {
          Pt(2), W.T = null, kv(
            t,
            l,
            e,
            a,
            j,
            u,
            n,
            f,
            o,
            d,
            z
          );
        } finally {
          W.T = A, Pt(j);
        }
      }
      function kv(t, l, e, a, u, n, f, o) {
        do
          se();
        while (Te !== null);
        if ((rt & 6) !== 0) throw Error(v(327));
        var d = t.finishedWork;
        if (a = t.finishedLanes, d === null) return null;
        if (t.finishedWork = null, t.finishedLanes = 0, d === t.current) throw Error(v(177));
        t.callbackNode = null, t.callbackPriority = 0, t.cancelPendingCommit = null;
        var z = d.lanes | d.childLanes;
        if (z |= fc, Kt(
          t,
          a,
          z,
          n,
          f,
          o
        ), t === ht && (at = ht = null, ct = 0), (d.subtreeFlags & 10256) === 0 && (d.flags & 10256) === 0 || Uu || (Uu = !0, Nc = z, bc = e, ao(cc, function() {
          return se(), null;
        })), e = (d.flags & 15990) !== 0, (d.subtreeFlags & 15990) !== 0 || e ? (e = W.T, W.T = null, n = oe(), Pt(2), f = rt, rt |= 4, Wv(t, d), Af(d, t), ho(t.containerInfo), t.current = d, Of(t, d.alternate, d), Um(), rt = f, Pt(n), W.T = e) : t.current = d, Uu ? (Uu = !1, Te = t, Da = a) : wf(t, z), z = t.pendingLanes, z === 0 && (le = null), h(d.stateNode), Sl(t), l !== null)
          for (u = t.onRecoverableError, d = 0; d < l.length; d++)
            z = l[d], u(z.value, {
              componentStack: z.stack
            });
        return (Da & 3) !== 0 && se(), z = t.pendingLanes, (a & 4194218) !== 0 && (z & 42) !== 0 ? t === _c ? Ca++ : (Ca = 0, _c = t) : Ca = 0, He(0), null;
      }
      function wf(t, l) {
        (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, da(l)));
      }
      function se() {
        if (Te !== null) {
          var t = Te, l = Nc;
          Nc = 0;
          var e = bt(Da), a = 32 > e ? 32 : e;
          e = W.T;
          var u = oe();
          try {
            if (Pt(a), W.T = null, Te === null)
              var n = !1;
            else {
              a = bc, bc = null;
              var f = Te, o = Da;
              if (Te = null, Da = 0, (rt & 6) !== 0)
                throw Error(v(331));
              var d = rt;
              if (rt |= 4, qf(f.current), Cf(
                f,
                f.current,
                o,
                a
              ), rt = d, He(0, !1), el && typeof el.onPostCommitFiberRoot == "function")
                try {
                  el.onPostCommitFiberRoot(Na, f);
                } catch {
                }
              n = !0;
            }
            return n;
          } finally {
            Pt(u), W.T = e, wf(t, l);
          }
        }
        return !1;
      }
      function If(t, l, e) {
        l = B(e, l), l = vn(t.stateNode, l, 2), t = Gl(t, l, 2), t !== null && (w(t, 2), Sl(t));
      }
      function pt(t, l, e) {
        if (t.tag === 3)
          If(t, t, e);
        else
          for (; l !== null; ) {
            if (l.tag === 3) {
              If(
                l,
                t,
                e
              );
              break;
            } else if (l.tag === 1) {
              var a = l.stateNode;
              if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (le === null || !le.has(a))) {
                t = B(e, t), e = ki(2), a = Gl(l, e, 2), a !== null && (tf(
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
      function Vn(t, l, e) {
        var a = t.pingCache;
        if (a === null) {
          a = t.pingCache = new Vm();
          var u = /* @__PURE__ */ new Set();
          a.set(l, u);
        } else
          u = a.get(l), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(l, u));
        u.has(e) || (Sc = !0, u.add(e), t = to.bind(null, t, l, e), l.then(t, t));
      }
      function to(t, l, e) {
        var a = t.pingCache;
        a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, ht === t && (ct & e) === e && (Ht === 4 || Ht === 3 && (ct & 62914560) === ct && 300 > yl() - Tc ? (rt & 2) === 0 && Ae(t, 0) : Ec |= e, Ie === ct && (Ie = 0)), Sl(t);
      }
      function $f(t, l) {
        l === 0 && (l = tt()), t = Yl(t, l), t !== null && (w(t, l), Sl(t));
      }
      function lo(t) {
        var l = t.memoizedState, e = 0;
        l !== null && (e = l.retryLane), $f(t, e);
      }
      function eo(t, l) {
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
            throw Error(v(314));
        }
        a !== null && a.delete(l), $f(t, e);
      }
      function ao(t, l) {
        return mu(t, l);
      }
      function uo(t, l, e, a) {
        this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Xn(t) {
        return t = t.prototype, !(!t || !t.isReactComponent);
      }
      function Ll(t, l) {
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
      function kf(t, l) {
        t.flags &= 31457282;
        var e = t.alternate;
        return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }), t;
      }
      function cu(t, l, e, a, u, n) {
        var f = 0;
        if (a = t, typeof t == "function") Xn(t) && (f = 1);
        else if (typeof t == "string")
          f = il && Xt ? Hs(t, e, Qt.current) ? 26 : Rs(t) ? 27 : 5 : il ? Hs(
            t,
            e,
            Qt.current
          ) ? 26 : 5 : Xt && Rs(t) ? 27 : 5;
        else
          t: switch (t) {
            case je:
              return ve(
                e.children,
                u,
                n,
                l
              );
            case cs:
              f = 8, u |= 24;
              break;
            case Ln:
              return t = s(12, e, l, u | 2), t.elementType = Ln, t.lanes = n, t;
            case Fn:
              return t = s(13, e, l, u), t.elementType = Fn, t.lanes = n, t;
            case Pn:
              return t = s(19, e, l, u), t.elementType = Pn, t.lanes = n, t;
            case fs:
              return ts(e, u, n, l);
            default:
              if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                  case fo:
                  case Wl:
                    f = 10;
                    break t;
                  case is:
                    f = 9;
                    break t;
                  case Wn:
                    f = 11;
                    break t;
                  case wn:
                    f = 14;
                    break t;
                  case Fl:
                    f = 16, a = null;
                    break t;
                }
              f = 29, e = Error(
                v(
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
      function ts(t, l, e, a) {
        t = s(22, t, a, l), t.elementType = fs, t.lanes = e;
        var u = {
          _visibility: 1,
          _pendingVisibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
          _current: null,
          detach: function() {
            var n = u._current;
            if (n === null) throw Error(v(456));
            if ((u._pendingVisibility & 2) === 0) {
              var f = Yl(n, 2);
              f !== null && (u._pendingVisibility |= 2, Jt(f, n, 2));
            }
          },
          attach: function() {
            var n = u._current;
            if (n === null) throw Error(v(456));
            if ((u._pendingVisibility & 2) !== 0) {
              var f = Yl(n, 2);
              f !== null && (u._pendingVisibility &= -3, Jt(f, n, 2));
            }
          }
        };
        return t.stateNode = u, t;
      }
      function Zn(t, l, e) {
        return t = s(6, t, null, l), t.lanes = e, t;
      }
      function Kn(t, l, e) {
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
      function no(t, l, e, a, u, n, f, o) {
        this.tag = 1, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = tc, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = F(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = F(0), this.hiddenUpdates = F(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = o, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function ls(t, l, e, a, u, n, f, o, d, z, A, j) {
        return t = new no(
          t,
          l,
          e,
          f,
          o,
          d,
          z,
          j
        ), l = 1, n === !0 && (l |= 24), n = s(3, null, null, l), t.current = n, n.stateNode = t, l = Tn(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
          element: a,
          isDehydrated: e,
          cache: l
        }, Zu(n), t;
      }
      function es(t) {
        return t ? (t = Be, t) : Be;
      }
      function as(t) {
        var l = t._reactInternals;
        if (l === void 0)
          throw typeof t.render == "function" ? Error(v(188)) : (t = Object.keys(t).join(","), Error(v(268, t)));
        return t = C(l), t = t !== null ? Q(t) : null, t === null ? null : Ea(t.stateNode);
      }
      function us(t, l, e, a, u, n) {
        u = es(u), a.context === null ? a.context = u : a.pendingContext = u, a = Ql(l), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = Gl(t, a, l), e !== null && (Jt(e, t, l), ca(e, t, l));
      }
      function ns(t, l) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
          var e = t.retryLane;
          t.retryLane = e !== 0 && e < l ? e : l;
        }
      }
      function Jn(t, l) {
        ns(t, l), (t = t.alternate) && ns(t, l);
      }
      var et = {}, co = Qu, tl = ip(), xn = Object.assign, io = Symbol.for("react.element"), iu = Symbol.for("react.transitional.element"), Ce = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), cs = Symbol.for("react.strict_mode"), Ln = Symbol.for("react.profiler"), fo = Symbol.for("react.provider"), is = Symbol.for("react.consumer"), Wl = Symbol.for("react.context"), Wn = Symbol.for("react.forward_ref"), Fn = Symbol.for("react.suspense"), Pn = Symbol.for("react.suspense_list"), wn = Symbol.for("react.memo"), Fl = Symbol.for("react.lazy"), fs = Symbol.for("react.offscreen"), so = Symbol.for("react.memo_cache_sentinel"), ss = Symbol.iterator, vo = Symbol.for("react.client.reference"), W = co.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, In, vs, $n = !1, fu = Array.isArray, oo = i.rendererVersion, mo = i.rendererPackageName, os = i.extraDevToolsConfig, Ea = i.getPublicInstance, po = i.getRootHostContext, yo = i.getChildHostContext, ro = i.prepareForCommit, ho = i.resetAfterCommit, So = i.createInstance, kn = i.appendInitialChild, ms = i.finalizeInitialChildren, su = i.shouldSetTextContent, ps = i.createTextInstance, Eo = i.scheduleTimeout, zo = i.cancelTimeout, tc = i.noTimeout, Ul = i.isPrimaryRenderer;
      i.warnsIfNotActing;
      var Vt = i.supportsMutation, Pl = i.supportsPersistence, cl = i.supportsHydration, ds = i.getInstanceFromNode;
      i.beforeActiveInstanceBlur, i.afterActiveInstanceBlur;
      var To = i.preparePortalMount;
      i.prepareScopeUpdate, i.getInstanceFromScope;
      var Pt = i.setCurrentUpdatePriority, oe = i.getCurrentUpdatePriority, No = i.resolveUpdatePriority;
      i.resolveEventType, i.resolveEventTimeStamp;
      var bo = i.shouldAttemptEagerTransition, _o = i.detachDeletedInstance;
      i.requestPostPaintCallback;
      var Mo = i.maySuspendCommit, ys = i.preloadInstance, Ho = i.startSuspendingCommit, rs = i.suspendInstance, Oo = i.waitForCommitToBeReady, Re = i.NotPendingTransition, me = i.HostTransitionContext, go = i.resetFormInstance;
      i.bindToConsole;
      var Uo = i.supportsMicrotasks, Ao = i.scheduleMicrotask, za = i.supportsTestSelectors, Do = i.findFiberRoot, Co = i.getBoundingRect, jo = i.getTextContent, Ta = i.isHiddenSubtree, Ro = i.matchAccessibilityRole, qo = i.setFocusIfFocusable, Bo = i.setupIntersectionObserver, Yo = i.appendChild, Qo = i.appendChildToContainer, Go = i.commitTextUpdate, Vo = i.commitMount, Xo = i.commitUpdate, Zo = i.insertBefore, Ko = i.insertInContainerBefore, Jo = i.removeChild, xo = i.removeChildFromContainer, hs = i.resetTextContent, Lo = i.hideInstance, Wo = i.hideTextInstance, Fo = i.unhideInstance, Po = i.unhideTextInstance, wo = i.clearContainer, Io = i.cloneInstance, Ss = i.createContainerChildSet, Es = i.appendChildToContainerChildSet, $o = i.finalizeContainerChildren, zs = i.replaceContainerChildren, Ts = i.cloneHiddenInstance, Ns = i.cloneHiddenTextInstance, lc = i.isSuspenseInstancePending, ec = i.isSuspenseInstanceFallback, ko = i.getSuspenseInstanceFallbackErrorDetails, tm = i.registerSuspenseInstanceRetry, lm = i.canHydrateFormStateMarker, em = i.isFormStateMarkerMatching, bs = i.getNextHydratableSibling, _s = i.getFirstHydratableChild, am = i.getFirstHydratableChildWithinContainer, um = i.getFirstHydratableChildWithinSuspenseInstance, nm = i.canHydrateInstance, cm = i.canHydrateTextInstance, im = i.canHydrateSuspenseInstance, fm = i.hydrateInstance, sm = i.hydrateTextInstance, vm = i.hydrateSuspenseInstance, om = i.getNextHydratableInstanceAfterSuspenseInstance, mm = i.commitHydratedContainer, pm = i.commitHydratedSuspenseInstance, dm = i.clearSuspenseBoundary, ym = i.clearSuspenseBoundaryFromContainer, Ms = i.shouldDeleteUnhydratedTailInstances;
      i.diffHydratedPropsForDevWarnings, i.diffHydratedTextForDevWarnings, i.describeHydratableInstanceForDevWarnings;
      var rm = i.validateHydratableInstance, hm = i.validateHydratableTextInstance, il = i.supportsResources, Hs = i.isHostHoistableType, ac = i.getHoistableRoot, Os = i.getResource, gs = i.acquireResource, Us = i.releaseResource, Sm = i.hydrateHoistable, As = i.mountHoistable, Ds = i.unmountHoistable, Em = i.createHoistableInstance, zm = i.prepareToCommitHoistables, Tm = i.mayResourceSuspendCommit, Cs = i.preloadResource, Nm = i.suspendResource, Xt = i.supportsSingletons, js = i.resolveSingletonInstance, bm = i.clearSingleton, _m = i.acquireSingletonInstance, Mm = i.releaseSingletonInstance, Rs = i.isHostSingletonType, uc = [], qe = -1, Be = {}, ll = Math.clz32 ? Math.clz32 : X, Hm = Math.log, Om = Math.LN2, vu = 128, ou = 4194304, mu = tl.unstable_scheduleCallback, nc = tl.unstable_cancelCallback, gm = tl.unstable_shouldYield, Um = tl.unstable_requestPaint, yl = tl.unstable_now, qs = tl.unstable_ImmediatePriority, Am = tl.unstable_UserBlockingPriority, cc = tl.unstable_NormalPriority, Dm = tl.unstable_IdlePriority, Cm = tl.log, jm = tl.unstable_setDisableYieldValue, Na = null, el = null, al = typeof Object.is == "function" ? Object.is : D, Bs = /* @__PURE__ */ new WeakMap(), Ye = [], Qe = 0, pu = null, du = 0, fl = [], sl = 0, pe = null, Al = 1, Dl = "", Qt = J(null), ba = J(null), wl = J(null), yu = J(null), xt = null, Zt = null, st = !1, rl = null, El = !1, ic = Error(v(519)), vl = [], Ge = 0, fc = 0, ru = null, Ve = null, sc = !1, hu = !1, vc = !1, Xe = 0, _a = null, oc = 0, Ze = 0, Ke = null, Il = !1, mc = !1, Rm = Object.prototype.hasOwnProperty, Ma = Error(v(460)), pc = Error(v(474)), Su = { then: function() {
      } }, Je = null, xe = null, Ha = 0, de = pi(!0), Ys = pi(!1), Le = J(null), Eu = J(0), ol = J(null), zl = null, jt = J(0), $l = 0, k = null, yt = null, At = null, zu = !1, We = !1, ye = !1, Tu = 0, Oa = 0, Fe = null, qm = 0, dc = function() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }, Tl = {
        readContext: Gt,
        use: Wa,
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
      var re = {
        readContext: Gt,
        use: Wa,
        useCallback: function(t, l) {
          return Wt().memoizedState = [
            t,
            l === void 0 ? null : l
          ], t;
        },
        useContext: Gt,
        useEffect: qi,
        useImperativeHandle: function(t, l, e) {
          e = e != null ? e.concat([t]) : null, Pa(
            4194308,
            4,
            Qi.bind(null, l, t),
            e
          );
        },
        useLayoutEffect: function(t, l) {
          return Pa(4194308, 4, t, l);
        },
        useInsertionEffect: function(t, l) {
          Pa(4, 2, t, l);
        },
        useMemo: function(t, l) {
          var e = Wt();
          l = l === void 0 ? null : l;
          var a = t();
          if (ye) {
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
            if (ye) {
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
          }, a.queue = t, t = t.dispatch = Zv.bind(
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
          t = ln(t);
          var l = t.queue, e = Wi.bind(
            null,
            k,
            l
          );
          return l.dispatch = e, [t.memoizedState, e];
        },
        useDebugValue: un,
        useDeferredValue: function(t, l) {
          var e = Wt();
          return nn(e, t, l);
        },
        useTransition: function() {
          var t = ln(!1);
          return t = Ki.bind(
            null,
            k,
            t.queue,
            !0,
            !1
          ), Wt().memoizedState = t, [!1, t];
        },
        useSyncExternalStore: function(t, l, e) {
          var a = k, u = Wt();
          if (st) {
            if (e === void 0)
              throw Error(v(407));
            e = e();
          } else {
            if (e = l(), ht === null)
              throw Error(v(349));
            (ct & 60) !== 0 || Ei(a, l, e);
          }
          u.memoizedState = e;
          var n = { value: e, getSnapshot: l };
          return u.queue = n, qi(Ti.bind(null, a, n, t), [
            t
          ]), a.flags |= 2048, Oe(
            9,
            zi.bind(
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
          var t = Wt(), l = ht.identifierPrefix;
          if (st) {
            var e = Dl, a = Al;
            e = (a & ~(1 << 32 - ll(a) - 1)).toString(32) + e, l = ":" + l + "R" + e, e = Tu++, 0 < e && (l += "H" + e.toString(32)), l += ":";
          } else
            e = qm++, l = ":" + l + "r" + e.toString(32) + ":";
          return t.memoizedState = l;
        },
        useCacheRefresh: function() {
          return Wt().memoizedState = Xv.bind(
            null,
            k
          );
        }
      };
      re.useMemoCache = $u, re.useHostTransitionStatus = cn, re.useFormState = Ai, re.useActionState = Ai, re.useOptimistic = function(t) {
        var l = Wt();
        l.memoizedState = l.baseState = t;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return l.queue = e, l = fn.bind(
          null,
          k,
          !0,
          e
        ), e.dispatch = l, [t, l];
      };
      var kl = {
        readContext: Gt,
        use: Wa,
        useCallback: Vi,
        useContext: Gt,
        useEffect: an,
        useImperativeHandle: Gi,
        useInsertionEffect: Bi,
        useLayoutEffect: Yi,
        useMemo: Xi,
        useReducer: Fa,
        useRef: Ri,
        useState: function() {
          return Fa(_l);
        },
        useDebugValue: un,
        useDeferredValue: function(t, l) {
          var e = Ut();
          return Zi(
            e,
            yt.memoizedState,
            t,
            l
          );
        },
        useTransition: function() {
          var t = Fa(_l)[0], l = Ut().memoizedState;
          return [
            typeof t == "boolean" ? t : va(t),
            l
          ];
        },
        useSyncExternalStore: Si,
        useId: xi
      };
      kl.useCacheRefresh = Li, kl.useMemoCache = $u, kl.useHostTransitionStatus = cn, kl.useFormState = Di, kl.useActionState = Di, kl.useOptimistic = function(t, l) {
        var e = Ut();
        return _i(e, yt, t, l);
      };
      var he = {
        readContext: Gt,
        use: Wa,
        useCallback: Vi,
        useContext: Gt,
        useEffect: an,
        useImperativeHandle: Gi,
        useInsertionEffect: Bi,
        useLayoutEffect: Yi,
        useMemo: Xi,
        useReducer: tn,
        useRef: Ri,
        useState: function() {
          return tn(_l);
        },
        useDebugValue: un,
        useDeferredValue: function(t, l) {
          var e = Ut();
          return yt === null ? nn(e, t, l) : Zi(
            e,
            yt.memoizedState,
            t,
            l
          );
        },
        useTransition: function() {
          var t = tn(_l)[0], l = Ut().memoizedState;
          return [
            typeof t == "boolean" ? t : va(t),
            l
          ];
        },
        useSyncExternalStore: Si,
        useId: xi
      };
      he.useCacheRefresh = Li, he.useMemoCache = $u, he.useHostTransitionStatus = cn, he.useFormState = ji, he.useActionState = ji, he.useOptimistic = function(t, l) {
        var e = Ut();
        return yt !== null ? _i(e, yt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
      };
      var yc = {
        isMounted: function(t) {
          return (t = t._reactInternals) ? T(t) === t : !1;
        },
        enqueueSetState: function(t, l, e) {
          t = t._reactInternals;
          var a = kt(), u = Ql(a);
          u.payload = l, e != null && (u.callback = e), l = Gl(t, u, a), l !== null && (Jt(l, t, a), ca(l, t, a));
        },
        enqueueReplaceState: function(t, l, e) {
          t = t._reactInternals;
          var a = kt(), u = Ql(a);
          u.tag = 1, u.payload = l, e != null && (u.callback = e), l = Gl(t, u, a), l !== null && (Jt(l, t, a), ca(l, t, a));
        },
        enqueueForceUpdate: function(t, l) {
          t = t._reactInternals;
          var e = kt(), a = Ql(e);
          a.tag = 2, l != null && (a.callback = l), l = Gl(t, a, e), l !== null && (Jt(l, t, e), ca(l, t, e));
        }
      }, Qs = typeof reportError == "function" ? reportError : function(t) {
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
      }, Gs = Error(v(461)), Rt = !1, rc = { dehydrated: null, treeContext: null, retryLane: 0 }, Nu = J(null), Se = null, Cl = null, Bm = typeof AbortController < "u" ? AbortController : function() {
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
      }, Ym = tl.unstable_scheduleCallback, Qm = tl.unstable_NormalPriority, _t = {
        $$typeof: Wl,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      }, Vs = W.S;
      W.S = function(t, l) {
        typeof l == "object" && l !== null && typeof l.then == "function" && Bv(t, l), Vs !== null && Vs(t, l);
      };
      var Ee = J(null), jl = !1, Mt = !1, hc = !1, Xs = typeof WeakSet == "function" ? WeakSet : Set, qt = null, Zs = !1, Dt = null, ul = !1, hl = null, Pe = 8192, Gm = {
        getCacheForType: function(t) {
          var l = Gt(_t), e = l.data.get(t);
          return e === void 0 && (e = t(), l.data.set(t, e)), e;
        }
      }, bu = 0, _u = 1, Mu = 2, Hu = 3, Ou = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var ga = Symbol.for;
        bu = ga("selector.component"), _u = ga("selector.has_pseudo_class"), Mu = ga("selector.role"), Hu = ga("selector.test_id"), Ou = ga("selector.text");
      }
      var Vm = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, ht = null, at = null, ct = 0, St = 0, nl = null, Rl = !1, we = !1, Sc = !1, ql = 0, Ht = 0, te = 0, ze = 0, Ec = 0, ml = 0, Ie = 0, Ua = null, Nl = null, zc = !1, Tc = 0, Aa = 1 / 0, gu = null, le = null, Uu = !1, Te = null, Da = 0, Nc = 0, bc = null, Ca = 0, _c = null;
      return et.attemptContinuousHydration = function(t) {
        if (t.tag === 13) {
          var l = Yl(t, 67108864);
          l !== null && Jt(l, t, 67108864), Jn(t, 67108864);
        }
      }, et.attemptHydrationAtCurrentPriority = function(t) {
        if (t.tag === 13) {
          var l = kt(), e = Yl(t, l);
          e !== null && Jt(e, t, l), Jn(t, l);
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
                Sl(t), (rt & 6) === 0 && (Aa = yl() + 500, He(0));
              }
            }
            break;
          case 13:
            l = Yl(t, 2), l !== null && Jt(l, t, 2), Xf(), Jn(t, 2);
        }
      }, et.batchedUpdates = function(t, l) {
        return t(l);
      }, et.createComponentSelector = function(t) {
        return { $$typeof: bu, value: t };
      }, et.createContainer = function(t, l, e, a, u, n, f, o, d, z) {
        return ls(
          t,
          l,
          !1,
          null,
          e,
          a,
          n,
          f,
          o,
          d,
          z,
          null
        );
      }, et.createHasPseudoClassSelector = function(t) {
        return { $$typeof: _u, value: t };
      }, et.createHydrationContainer = function(t, l, e, a, u, n, f, o, d, z, A, j, q) {
        return t = ls(
          e,
          a,
          !0,
          t,
          u,
          n,
          o,
          d,
          z,
          A,
          j,
          q
        ), t.context = es(null), e = t.current, a = kt(), u = Ql(a), u.callback = l ?? null, Gl(e, u, a), t.current.lanes = a, w(t, a), Sl(t), t;
      }, et.createPortal = function(t, l, e) {
        var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Ce,
          key: a == null ? null : "" + a,
          children: t,
          containerInfo: l,
          implementation: e
        };
      }, et.createRoleSelector = function(t) {
        return { $$typeof: Mu, value: t };
      }, et.createTestNameSelector = function(t) {
        return { $$typeof: Hu, value: t };
      }, et.createTextSelector = function(t) {
        return { $$typeof: Ou, value: t };
      }, et.defaultOnCaughtError = function(t) {
        console.error(t);
      }, et.defaultOnRecoverableError = function(t) {
        Qs(t);
      }, et.defaultOnUncaughtError = function(t) {
        Qs(t);
      }, et.deferredUpdates = function(t) {
        var l = W.T, e = oe();
        try {
          return Pt(32), W.T = null, t();
        } finally {
          Pt(e), W.T = l;
        }
      }, et.discreteUpdates = function(t, l, e, a, u) {
        var n = W.T, f = oe();
        try {
          return Pt(2), W.T = null, t(l, e, a, u);
        } finally {
          Pt(f), W.T = n, rt === 0 && (Aa = yl() + 500);
        }
      }, et.findAllNodes = qn, et.findBoundingRects = function(t, l) {
        if (!za) throw Error(v(363));
        l = qn(t, l), t = [];
        for (var e = 0; e < l.length; e++)
          t.push(Co(l[e]));
        for (l = t.length - 1; 0 < l; l--) {
          e = t[l];
          for (var a = e.x, u = a + e.width, n = e.y, f = n + e.height, o = l - 1; 0 <= o; o--)
            if (l !== o) {
              var d = t[o], z = d.x, A = z + d.width, j = d.y, q = j + d.height;
              if (a >= z && n >= j && u <= A && f <= q) {
                t.splice(l, 1);
                break;
              } else if (a !== z || e.width !== d.width || q < n || j > f) {
                if (!(n !== j || e.height !== d.height || A < a || z > u)) {
                  z > a && (d.width += z - a, d.x = a), A < u && (d.width = u - z), t.splice(l, 1);
                  break;
                }
              } else {
                j > n && (d.height += j - n, d.y = n), q < f && (d.height = f - j), t.splice(l, 1);
                break;
              }
            }
        }
        return t;
      }, et.findHostInstance = as, et.findHostInstanceWithNoPortals = function(t) {
        return t = C(t), t = t !== null ? V(t) : null, t === null ? null : Ea(t.stateNode);
      }, et.findHostInstanceWithWarning = function(t) {
        return as(t);
      }, et.flushPassiveEffects = se, et.flushSyncFromReconciler = function(t) {
        var l = rt;
        rt |= 1;
        var e = W.T, a = oe();
        try {
          if (Pt(2), W.T = null, t)
            return t();
        } finally {
          Pt(a), W.T = e, rt = l, (rt & 6) === 0 && He(0);
        }
      }, et.flushSyncWork = Xf, et.focusWithin = function(t, l) {
        if (!za) throw Error(v(363));
        for (t = Cn(t), l = Yf(t, l), l = Array.from(l), t = 0; t < l.length; ) {
          var e = l[t++], a = e.tag;
          if (!Ta(e)) {
            if ((a === 5 || a === 26 || a === 27) && qo(e.stateNode))
              return !0;
            for (e = e.child; e !== null; )
              l.push(e), e = e.sibling;
          }
        }
        return !1;
      }, et.getFindAllNodesFailureDescription = function(t, l) {
        if (!za) throw Error(v(363));
        var e = 0, a = [];
        t = [Cn(t), 0];
        for (var u = 0; u < t.length; ) {
          var n = t[u++], f = n.tag, o = t[u++], d = l[o];
          if ((f !== 5 && f !== 26 && f !== 27 || !Ta(n)) && (jn(n, d) && (a.push(Rn(d)), o++, o > e && (e = o)), o < l.length))
            for (n = n.child; n !== null; )
              t.push(n, o), n = n.sibling;
        }
        if (e < l.length) {
          for (t = []; e < l.length; e++)
            t.push(Rn(l[e]));
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
            return Ea(t.child.stateNode);
          default:
            return t.child.stateNode;
        }
      }, et.injectIntoDevTools = function() {
        var t = {
          bundleType: 0,
          version: oo,
          rendererPackageName: mo,
          currentDispatcherRef: W,
          findFiberByHostInstance: ds,
          reconcilerVersion: "19.0.0"
        };
        if (os !== null && (t.rendererConfig = os), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") t = !1;
        else {
          var l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (l.isDisabled || !l.supportsFiber) t = !0;
          else {
            try {
              Na = l.inject(t), el = l;
            } catch {
            }
            t = !!l.checkDCE;
          }
        }
        return t;
      }, et.isAlreadyRendering = function() {
        return !1;
      }, et.observeVisibleRects = function(t, l, e, a) {
        if (!za) throw Error(v(363));
        t = qn(t, l);
        var u = Bo(
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
        if (t.tag !== 5) throw Error(v(476));
        var u = Ji(t).queue;
        Ki(
          t,
          u,
          l,
          Re,
          e === null ? m : function() {
            var n = Ji(t).next.queue;
            return oa(
              t,
              n,
              {},
              kt()
            ), e(a);
          }
        );
      }, et.updateContainer = function(t, l, e, a) {
        var u = l.current, n = kt();
        return us(
          u,
          n,
          t,
          l,
          e,
          a
        ), n;
      }, et.updateContainerSync = function(t, l, e, a) {
        return l.tag === 0 && se(), us(
          l.current,
          2,
          t,
          l,
          e,
          a
        ), 2;
      }, et;
    }, c.exports.default = c.exports, Object.defineProperty(c.exports, "__esModule", { value: !0 });
  }(Dc)), Dc.exports;
}
var tv;
function sp() {
  return tv || (tv = 1, Ac.exports = fp()), Ac.exports;
}
var vp = sp();
const op = /* @__PURE__ */ pv(vp);
var Rc = { exports: {} }, qc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lv;
function mp() {
  return lv || (lv = 1, function(c) {
    function i(h, O) {
      var D = h.length;
      h.push(O);
      t: for (; 0 < D; ) {
        var B = D - 1 >>> 1, K = h[B];
        if (0 < v(K, O))
          h[B] = O, h[D] = K, D = B;
        else break t;
      }
    }
    function s(h) {
      return h.length === 0 ? null : h[0];
    }
    function m(h) {
      if (h.length === 0) return null;
      var O = h[0], D = h.pop();
      if (D !== O) {
        h[0] = D;
        t: for (var B = 0, K = h.length, $ = K >>> 1; B < $; ) {
          var nt = 2 * (B + 1) - 1, Tt = h[nt], lt = nt + 1, gt = h[lt];
          if (0 > v(Tt, D))
            lt < K && 0 > v(gt, Tt) ? (h[B] = gt, h[lt] = D, B = lt) : (h[B] = Tt, h[nt] = D, B = nt);
          else if (lt < K && 0 > v(gt, D))
            h[B] = gt, h[lt] = D, B = lt;
          else break t;
        }
      }
      return O;
    }
    function v(h, O) {
      var D = h.sortIndex - O.sortIndex;
      return D !== 0 ? D : h.id - O.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      c.unstable_now = function() {
        return E.now();
      };
    } else {
      var R = Date, N = R.now();
      c.unstable_now = function() {
        return R.now() - N;
      };
    }
    var S = [], U = [], H = 1, T = null, _ = 3, C = !1, Q = !1, V = !1, J = typeof setTimeout == "function" ? setTimeout : null, M = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    function X(h) {
      for (var O = s(U); O !== null; ) {
        if (O.callback === null) m(U);
        else if (O.startTime <= h)
          m(U), O.sortIndex = O.expirationTime, i(S, O);
        else break;
        O = s(U);
      }
    }
    function Z(h) {
      if (V = !1, X(h), !Q)
        if (s(S) !== null)
          Q = !0, mt();
        else {
          var O = s(U);
          O !== null && bt(Z, O.startTime - h);
        }
    }
    var x = !1, Y = -1, ut = 5, ft = -1;
    function tt() {
      return !(c.unstable_now() - ft < ut);
    }
    function F() {
      if (x) {
        var h = c.unstable_now();
        ft = h;
        var O = !0;
        try {
          t: {
            Q = !1, V && (V = !1, M(Y), Y = -1), C = !0;
            var D = _;
            try {
              l: {
                for (X(h), T = s(S); T !== null && !(T.expirationTime > h && tt()); ) {
                  var B = T.callback;
                  if (typeof B == "function") {
                    T.callback = null, _ = T.priorityLevel;
                    var K = B(
                      T.expirationTime <= h
                    );
                    if (h = c.unstable_now(), typeof K == "function") {
                      T.callback = K, X(h), O = !0;
                      break l;
                    }
                    T === s(S) && m(S), X(h);
                  } else m(S);
                  T = s(S);
                }
                if (T !== null) O = !0;
                else {
                  var $ = s(U);
                  $ !== null && bt(
                    Z,
                    $.startTime - h
                  ), O = !1;
                }
              }
              break t;
            } finally {
              T = null, _ = D, C = !1;
            }
            O = void 0;
          }
        } finally {
          O ? w() : x = !1;
        }
      }
    }
    var w;
    if (typeof b == "function")
      w = function() {
        b(F);
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
    function mt() {
      x || (x = !0, w());
    }
    function bt(h, O) {
      Y = J(function() {
        h(c.unstable_now());
      }, O);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(h) {
      h.callback = null;
    }, c.unstable_continueExecution = function() {
      Q || C || (Q = !0, mt());
    }, c.unstable_forceFrameRate = function(h) {
      0 > h || 125 < h ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ut = 0 < h ? Math.floor(1e3 / h) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return _;
    }, c.unstable_getFirstCallbackNode = function() {
      return s(S);
    }, c.unstable_next = function(h) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = _;
      }
      var D = _;
      _ = O;
      try {
        return h();
      } finally {
        _ = D;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(h, O) {
      switch (h) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          h = 3;
      }
      var D = _;
      _ = h;
      try {
        return O();
      } finally {
        _ = D;
      }
    }, c.unstable_scheduleCallback = function(h, O, D) {
      var B = c.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? B + D : B) : D = B, h) {
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
      return K = D + K, h = {
        id: H++,
        callback: O,
        priorityLevel: h,
        startTime: D,
        expirationTime: K,
        sortIndex: -1
      }, D > B ? (h.sortIndex = D, i(U, h), s(S) === null && h === s(U) && (V ? (M(Y), Y = -1) : V = !0, bt(Z, D - B))) : (h.sortIndex = K, i(S, h), Q || C || (Q = !0, mt())), h;
    }, c.unstable_shouldYield = tt, c.unstable_wrapCallback = function(h) {
      var O = _;
      return function() {
        var D = _;
        _ = O;
        try {
          return h.apply(this, arguments);
        } finally {
          _ = D;
        }
      };
    };
  }(qc)), qc;
}
var ev;
function pp() {
  return ev || (ev = 1, Rc.exports = mp()), Rc.exports;
}
var av = pp();
const dp = (c) => typeof c == "object" && typeof c.then == "function", be = [];
function dv(c, i, s = (m, v) => m === v) {
  if (c === i) return !0;
  if (!c || !i) return !1;
  const m = c.length;
  if (i.length !== m) return !1;
  for (let v = 0; v < m; v++) if (!s(c[v], i[v])) return !1;
  return !0;
}
function yv(c, i = null, s = !1, m = {}) {
  i === null && (i = [c]);
  for (const E of be)
    if (dv(i, E.keys, E.equal)) {
      if (s) return;
      if (Object.prototype.hasOwnProperty.call(E, "error")) throw E.error;
      if (Object.prototype.hasOwnProperty.call(E, "response"))
        return m.lifespan && m.lifespan > 0 && (E.timeout && clearTimeout(E.timeout), E.timeout = setTimeout(E.remove, m.lifespan)), E.response;
      if (!s) throw E.promise;
    }
  const v = {
    keys: i,
    equal: m.equal,
    remove: () => {
      const E = be.indexOf(v);
      E !== -1 && be.splice(E, 1);
    },
    promise: (
      // Execute the promise
      (dp(c) ? c : c(...i)).then((E) => {
        v.response = E, m.lifespan && m.lifespan > 0 && (v.timeout = setTimeout(v.remove, m.lifespan));
      }).catch((E) => v.error = E)
    )
  };
  if (be.push(v), !s) throw v.promise;
}
const yp = (c, i, s) => yv(c, i, !1, s), rp = (c, i, s) => void yv(c, i, !0, s), hp = (c) => {
  if (c === void 0 || c.length === 0) be.splice(0, be.length);
  else {
    const i = be.find((s) => dv(c, s.keys, s.equal));
    i && i.remove();
  }
};
function wc(c, i, s) {
  if (!c) return;
  if (s(c) === !0) return c;
  let m = i ? c.return : c.child;
  for (; m; ) {
    const v = wc(m, i, s);
    if (v) return v;
    m = i ? null : m.sibling;
  }
}
function rv(c) {
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
const Ic = /* @__PURE__ */ rv(/* @__PURE__ */ it.createContext(null));
class hv extends it.Component {
  render() {
    return /* @__PURE__ */ it.createElement(Ic.Provider, { value: this._reactInternals }, this.props.children);
  }
}
function Sv() {
  const c = it.useContext(Ic);
  if (c === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const i = it.useId();
  return it.useMemo(() => {
    for (const s of [c, c?.alternate]) {
      if (!s) continue;
      const m = wc(s, !1, (v) => {
        let E = v.memoizedState;
        for (; E; ) {
          if (E.memoizedState === i) return !0;
          E = E.next;
        }
      });
      if (m) return m;
    }
  }, [c, i]);
}
const Sp = Symbol.for("react.context"), Ep = (c) => c !== null && typeof c == "object" && "$$typeof" in c && c.$$typeof === Sp;
function zp() {
  const c = Sv(), [i] = it.useState(() => /* @__PURE__ */ new Map());
  i.clear();
  let s = c;
  for (; s; ) {
    const m = s.type;
    Ep(m) && m !== Ic && !i.has(m) && i.set(m, it.use(rv(m))), s = s.return;
  }
  return i;
}
function Tp() {
  const c = zp();
  return it.useMemo(
    () => Array.from(c.keys()).reduce(
      (i, s) => (m) => /* @__PURE__ */ it.createElement(i, null, /* @__PURE__ */ it.createElement(s.Provider, { ...m, value: c.get(s) })),
      (i) => /* @__PURE__ */ it.createElement(hv, { ...i })
    ),
    [c]
  );
}
function Ev(c) {
  let i = c.root;
  for (; i.getState().previousRoot; ) i = i.getState().previousRoot;
  return i;
}
const zv = (c) => c && c.isOrthographicCamera, Np = (c) => c && c.hasOwnProperty("current"), bp = (c) => c != null && (typeof c == "string" || typeof c == "number" || c.isColor), Ya = /* @__PURE__ */ ((c, i) => typeof window < "u" && (((c = window.document) == null ? void 0 : c.createElement) || ((i = window.navigator) == null ? void 0 : i.product) === "ReactNative"))() ? it.useLayoutEffect : it.useEffect;
function Tv(c) {
  const i = it.useRef(c);
  return Ya(() => void (i.current = c), [c]), i;
}
function _p() {
  const c = Sv(), i = Tp();
  return it.useMemo(() => ({
    children: s
  }) => {
    const v = !!wc(c, !0, (E) => E.type === it.StrictMode) ? it.StrictMode : it.Fragment;
    return /* @__PURE__ */ Ct(v, {
      children: /* @__PURE__ */ Ct(i, {
        children: s
      })
    });
  }, [c, i]);
}
function Mp({
  set: c
}) {
  return Ya(() => (c(new Promise(() => null)), () => c(!1)), [c]), null;
}
const Hp = /* @__PURE__ */ ((c) => (c = class extends it.Component {
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
function Nv(c) {
  var i;
  const s = typeof window < "u" ? (i = window.devicePixelRatio) != null ? i : 2 : 1;
  return Array.isArray(c) ? Math.min(Math.max(c[0], s), c[1]) : c;
}
function $e(c) {
  var i;
  return (i = c.__r3f) == null ? void 0 : i.root.getState();
}
const zt = {
  obj: (c) => c === Object(c) && !zt.arr(c) && typeof c != "function",
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
    strict: v = !0
  } = {}) {
    if (typeof c != typeof i || !!c != !!i) return !1;
    if (zt.str(c) || zt.num(c) || zt.boo(c)) return c === i;
    const E = zt.obj(c);
    if (E && m === "reference") return c === i;
    const R = zt.arr(c);
    if (R && s === "reference") return c === i;
    if ((R || E) && c === i) return !0;
    let N;
    for (N in c) if (!(N in i)) return !1;
    if (E && s === "shallow" && m === "shallow") {
      for (N in v ? i : c) if (!zt.equ(c[N], i[N], {
        strict: v,
        objects: "reference"
      })) return !1;
    } else
      for (N in v ? i : c) if (c[N] !== i[N]) return !1;
    if (zt.und(N)) {
      if (R && c.length === 0 && i.length === 0 || E && Object.keys(c).length === 0 && Object.keys(i).length === 0) return !0;
      if (c !== i) return !1;
    }
    return !0;
  }
};
function Op(c) {
  const i = {
    nodes: {},
    materials: {},
    meshes: {}
  };
  return c && c.traverse((s) => {
    s.name && (i.nodes[s.name] = s), s.material && !i.materials[s.material.name] && (i.materials[s.material.name] = s.material), s.isMesh && !i.meshes[s.name] && (i.meshes[s.name] = s);
  }), i;
}
function gp(c) {
  c.type !== "Scene" && (c.dispose == null || c.dispose());
  for (const i in c) {
    const s = c[i];
    s?.type !== "Scene" && (s == null || s.dispose == null || s.dispose());
  }
}
const bv = ["children", "key", "ref"];
function Up(c) {
  const i = {};
  for (const s in c)
    bv.includes(s) || (i[s] = c[s]);
  return i;
}
function Ru(c, i, s, m) {
  const v = c;
  let E = v?.__r3f;
  return E || (E = {
    root: i,
    type: s,
    parent: null,
    children: [],
    props: Up(m),
    object: v,
    eventCount: 0,
    handlers: {},
    isHidden: !1
  }, v && (v.__r3f = E)), E;
}
function Ba(c, i) {
  let s = c[i];
  if (!i.includes("-")) return {
    root: c,
    key: i,
    target: s
  };
  s = c;
  for (const v of i.split("-")) {
    var m;
    i = v, c = s, s = (m = s) == null ? void 0 : m[i];
  }
  return {
    root: c,
    key: i,
    target: s
  };
}
const uv = /-\d+$/;
function qu(c, i) {
  if (zt.str(i.props.attach)) {
    if (uv.test(i.props.attach)) {
      const v = i.props.attach.replace(uv, ""), {
        root: E,
        key: R
      } = Ba(c.object, v);
      Array.isArray(E[R]) || (E[R] = []);
    }
    const {
      root: s,
      key: m
    } = Ba(c.object, i.props.attach);
    i.previousAttach = s[m], s[m] = i.object;
  } else zt.fun(i.props.attach) && (i.previousAttach = i.props.attach(c.object, i.object));
}
function Bu(c, i) {
  if (zt.str(i.props.attach)) {
    const {
      root: s,
      key: m
    } = Ba(c.object, i.props.attach), v = i.previousAttach;
    v === void 0 ? delete s[m] : s[m] = v;
  } else
    i.previousAttach == null || i.previousAttach(c.object, i.object);
  delete i.previousAttach;
}
const Jc = [
  ...bv,
  // Instance props
  "args",
  "dispose",
  "attach",
  "object",
  "onUpdate",
  // Behavior flags
  "dispose"
], nv = /* @__PURE__ */ new Map();
function Ap(c) {
  let i = nv.get(c.constructor);
  try {
    i || (i = new c.constructor(), nv.set(c.constructor, i));
  } catch {
  }
  return i;
}
function Dp(c, i) {
  const s = {};
  for (const m in i)
    if (!Jc.includes(m) && !zt.equ(i[m], c.props[m])) {
      s[m] = i[m];
      for (const v in i)
        v.startsWith(`${m}-`) && (s[v] = i[v]);
    }
  for (const m in c.props) {
    if (Jc.includes(m) || i.hasOwnProperty(m)) continue;
    const {
      root: v,
      key: E
    } = Ba(c.object, m);
    if (v.constructor && v.constructor.length === 0) {
      const R = Ap(v);
      zt.und(R) || (s[E] = R[E]);
    } else
      s[E] = 0;
  }
  return s;
}
const Cp = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"], jp = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function ae(c, i) {
  var s;
  const m = c.__r3f, v = m && Ev(m).getState(), E = m?.eventCount;
  for (const N in i) {
    let S = i[N];
    if (Jc.includes(N)) continue;
    if (m && jp.test(N)) {
      typeof S == "function" ? m.handlers[N] = S : delete m.handlers[N], m.eventCount = Object.keys(m.handlers).length;
      continue;
    }
    if (S === void 0) continue;
    let {
      root: U,
      key: H,
      target: T
    } = Ba(c, N);
    if (T instanceof dt.Layers && S instanceof dt.Layers)
      T.mask = S.mask;
    else if (T instanceof dt.Color && bp(S))
      T.set(S);
    else if (T !== null && typeof T == "object" && typeof T.set == "function" && typeof T.copy == "function" && S != null && S.constructor && T.constructor === S.constructor)
      T.copy(S);
    else if (T !== null && typeof T == "object" && typeof T.set == "function" && Array.isArray(S))
      typeof T.fromArray == "function" ? T.fromArray(S) : T.set(...S);
    else if (T !== null && typeof T == "object" && typeof T.set == "function" && typeof S == "number")
      typeof T.setScalar == "function" ? T.setScalar(S) : T.set(S);
    else {
      var R;
      U[H] = S, v && !v.linear && Cp.includes(H) && (R = U[H]) != null && R.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
      U[H].format === dt.RGBAFormat && U[H].type === dt.UnsignedByteType && (U[H].colorSpace = dt.SRGBColorSpace);
    }
  }
  if (m != null && m.parent && v != null && v.internal && (s = m.object) != null && s.isObject3D && E !== m.eventCount) {
    const N = m.object, S = v.internal.interaction.indexOf(N);
    S > -1 && v.internal.interaction.splice(S, 1), m.eventCount && N.raycast !== null && v.internal.interaction.push(N);
  }
  return m && m.props.attach === void 0 && (m.object.isBufferGeometry ? m.props.attach = "geometry" : m.object.isMaterial && (m.props.attach = "material")), m && ea(m), c;
}
function ea(c) {
  var i;
  if (!c.parent) return;
  c.props.onUpdate == null || c.props.onUpdate(c.object);
  const s = (i = c.root) == null || i.getState == null ? void 0 : i.getState();
  s && s.internal.frames === 0 && s.invalidate();
}
function Rp(c, i) {
  c.manual || (zv(c) ? (c.left = i.width / -2, c.right = i.width / 2, c.top = i.height / 2, c.bottom = i.height / -2) : c.aspect = i.width / i.height, c.updateProjectionMatrix());
}
const Lt = (c) => c?.isObject3D;
function Au(c) {
  return (c.eventObject || c.object).uuid + "/" + c.index + c.instanceId;
}
function _v(c, i, s, m) {
  const v = s.get(i);
  v && (s.delete(i), s.size === 0 && (c.delete(m), v.target.releasePointerCapture(m)));
}
function qp(c, i) {
  const {
    internal: s
  } = c.getState();
  s.interaction = s.interaction.filter((m) => m !== i), s.initialHits = s.initialHits.filter((m) => m !== i), s.hovered.forEach((m, v) => {
    (m.eventObject === i || m.object === i) && s.hovered.delete(v);
  }), s.capturedMap.forEach((m, v) => {
    _v(s.capturedMap, i, m, v);
  });
}
function Bp(c) {
  function i(S) {
    const {
      internal: U
    } = c.getState(), H = S.offsetX - U.initialClick[0], T = S.offsetY - U.initialClick[1];
    return Math.round(Math.sqrt(H * H + T * T));
  }
  function s(S) {
    return S.filter((U) => ["Move", "Over", "Enter", "Out", "Leave"].some((H) => {
      var T;
      return (T = U.__r3f) == null ? void 0 : T.handlers["onPointer" + H];
    }));
  }
  function m(S, U) {
    const H = c.getState(), T = /* @__PURE__ */ new Set(), _ = [], C = U ? U(H.internal.interaction) : H.internal.interaction;
    for (let M = 0; M < C.length; M++) {
      const b = $e(C[M]);
      b && (b.raycaster.camera = void 0);
    }
    H.previousRoot || H.events.compute == null || H.events.compute(S, H);
    function Q(M) {
      const b = $e(M);
      if (!b || !b.events.enabled || b.raycaster.camera === null) return [];
      if (b.raycaster.camera === void 0) {
        var X;
        b.events.compute == null || b.events.compute(S, b, (X = b.previousRoot) == null ? void 0 : X.getState()), b.raycaster.camera === void 0 && (b.raycaster.camera = null);
      }
      return b.raycaster.camera ? b.raycaster.intersectObject(M, !0) : [];
    }
    let V = C.flatMap(Q).sort((M, b) => {
      const X = $e(M.object), Z = $e(b.object);
      return !X || !Z ? M.distance - b.distance : Z.events.priority - X.events.priority || M.distance - b.distance;
    }).filter((M) => {
      const b = Au(M);
      return T.has(b) ? !1 : (T.add(b), !0);
    });
    H.events.filter && (V = H.events.filter(V, H));
    for (const M of V) {
      let b = M.object;
      for (; b; ) {
        var J;
        (J = b.__r3f) != null && J.eventCount && _.push({
          ...M,
          eventObject: b
        }), b = b.parent;
      }
    }
    if ("pointerId" in S && H.internal.capturedMap.has(S.pointerId))
      for (let M of H.internal.capturedMap.get(S.pointerId).values())
        T.has(Au(M.intersection)) || _.push(M.intersection);
    return _;
  }
  function v(S, U, H, T) {
    if (S.length) {
      const _ = {
        stopped: !1
      };
      for (const C of S) {
        let Q = $e(C.object);
        if (Q || C.object.traverseAncestors((V) => {
          const J = $e(V);
          if (J)
            return Q = J, !1;
        }), Q) {
          const {
            raycaster: V,
            pointer: J,
            camera: M,
            internal: b
          } = Q, X = new dt.Vector3(J.x, J.y, 0).unproject(M), Z = (tt) => {
            var F, w;
            return (F = (w = b.capturedMap.get(tt)) == null ? void 0 : w.has(C.eventObject)) != null ? F : !1;
          }, x = (tt) => {
            const F = {
              intersection: C,
              target: U.target
            };
            b.capturedMap.has(tt) ? b.capturedMap.get(tt).set(C.eventObject, F) : b.capturedMap.set(tt, /* @__PURE__ */ new Map([[C.eventObject, F]])), U.target.setPointerCapture(tt);
          }, Y = (tt) => {
            const F = b.capturedMap.get(tt);
            F && _v(b.capturedMap, C.eventObject, F, tt);
          };
          let ut = {};
          for (let tt in U) {
            let F = U[tt];
            typeof F != "function" && (ut[tt] = F);
          }
          let ft = {
            ...C,
            ...ut,
            pointer: J,
            intersections: S,
            stopped: _.stopped,
            delta: H,
            unprojectedPoint: X,
            ray: V.ray,
            camera: M,
            // Hijack stopPropagation, which just sets a flag
            stopPropagation() {
              const tt = "pointerId" in U && b.capturedMap.get(U.pointerId);
              if (
                // ...if this pointer hasn't been captured
                (!tt || // ... or if the hit object is capturing the pointer
                tt.has(C.eventObject)) && (ft.stopped = _.stopped = !0, b.hovered.size && Array.from(b.hovered.values()).find((F) => F.eventObject === C.eventObject))
              ) {
                const F = S.slice(0, S.indexOf(C));
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
            nativeEvent: U
          };
          if (T(ft), _.stopped === !0) break;
        }
      }
    }
    return S;
  }
  function E(S) {
    const {
      internal: U
    } = c.getState();
    for (const H of U.hovered.values())
      if (!S.length || !S.find((T) => T.object === H.object && T.index === H.index && T.instanceId === H.instanceId)) {
        const _ = H.eventObject.__r3f;
        if (U.hovered.delete(Au(H)), _ != null && _.eventCount) {
          const C = _.handlers, Q = {
            ...H,
            intersections: S
          };
          C.onPointerOut == null || C.onPointerOut(Q), C.onPointerLeave == null || C.onPointerLeave(Q);
        }
      }
  }
  function R(S, U) {
    for (let H = 0; H < U.length; H++) {
      const T = U[H].__r3f;
      T == null || T.handlers.onPointerMissed == null || T.handlers.onPointerMissed(S);
    }
  }
  function N(S) {
    switch (S) {
      case "onPointerLeave":
      case "onPointerCancel":
        return () => E([]);
      case "onLostPointerCapture":
        return (U) => {
          const {
            internal: H
          } = c.getState();
          "pointerId" in U && H.capturedMap.has(U.pointerId) && requestAnimationFrame(() => {
            H.capturedMap.has(U.pointerId) && (H.capturedMap.delete(U.pointerId), E([]));
          });
        };
    }
    return function(H) {
      const {
        onPointerMissed: T,
        internal: _
      } = c.getState();
      _.lastEvent.current = H;
      const C = S === "onPointerMove", Q = S === "onClick" || S === "onContextMenu" || S === "onDoubleClick", J = m(H, C ? s : void 0), M = Q ? i(H) : 0;
      S === "onPointerDown" && (_.initialClick = [H.offsetX, H.offsetY], _.initialHits = J.map((X) => X.eventObject)), Q && !J.length && M <= 2 && (R(H, _.interaction), T && T(H)), C && E(J);
      function b(X) {
        const Z = X.eventObject, x = Z.__r3f;
        if (!(x != null && x.eventCount)) return;
        const Y = x.handlers;
        if (C) {
          if (Y.onPointerOver || Y.onPointerEnter || Y.onPointerOut || Y.onPointerLeave) {
            const ut = Au(X), ft = _.hovered.get(ut);
            ft ? ft.stopped && X.stopPropagation() : (_.hovered.set(ut, X), Y.onPointerOver == null || Y.onPointerOver(X), Y.onPointerEnter == null || Y.onPointerEnter(X));
          }
          Y.onPointerMove == null || Y.onPointerMove(X);
        } else {
          const ut = Y[S];
          ut ? (!Q || _.initialHits.includes(Z)) && (R(H, _.interaction.filter((ft) => !_.initialHits.includes(ft))), ut(X)) : Q && _.initialHits.includes(Z) && R(H, _.interaction.filter((ft) => !_.initialHits.includes(ft)));
        }
      }
      v(J, H, M, b);
    };
  }
  return {
    handlePointer: N
  };
}
const cv = (c) => !!(c != null && c.render), Mv = /* @__PURE__ */ it.createContext(null), Yp = (c, i) => {
  const s = np((N, S) => {
    const U = new dt.Vector3(), H = new dt.Vector3(), T = new dt.Vector3();
    function _(M = S().camera, b = H, X = S().size) {
      const {
        width: Z,
        height: x,
        top: Y,
        left: ut
      } = X, ft = Z / x;
      b.isVector3 ? T.copy(b) : T.set(...b);
      const tt = M.getWorldPosition(U).distanceTo(T);
      if (zv(M))
        return {
          width: Z / M.zoom,
          height: x / M.zoom,
          top: Y,
          left: ut,
          factor: 1,
          distance: tt,
          aspect: ft
        };
      {
        const F = M.fov * Math.PI / 180, w = 2 * Math.tan(F / 2) * tt, Kt = w * (Z / x);
        return {
          width: Kt,
          height: w,
          top: Y,
          left: ut,
          factor: Z / Kt,
          distance: tt,
          aspect: ft
        };
      }
    }
    let C;
    const Q = (M) => N((b) => ({
      performance: {
        ...b.performance,
        current: M
      }
    })), V = new dt.Vector2();
    return {
      set: N,
      get: S,
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
      invalidate: (M = 1) => c(S(), M),
      advance: (M, b) => i(M, b, S()),
      legacy: !1,
      linear: !1,
      flat: !1,
      controls: null,
      clock: new dt.Clock(),
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
          const M = S();
          C && clearTimeout(C), M.performance.current !== M.performance.min && Q(M.performance.min), C = setTimeout(() => Q(S().performance.max), M.performance.debounce);
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
        getCurrentViewport: _
      },
      setEvents: (M) => N((b) => ({
        ...b,
        events: {
          ...b.events,
          ...M
        }
      })),
      setSize: (M, b, X = 0, Z = 0) => {
        const x = S().camera, Y = {
          width: M,
          height: b,
          top: X,
          left: Z
        };
        N((ut) => ({
          size: Y,
          viewport: {
            ...ut.viewport,
            ..._(x, H, Y)
          }
        }));
      },
      setDpr: (M) => N((b) => {
        const X = Nv(M);
        return {
          viewport: {
            ...b.viewport,
            dpr: X,
            initialDpr: b.viewport.initialDpr || X
          }
        };
      }),
      setFrameloop: (M = "always") => {
        const b = S().clock;
        b.stop(), b.elapsedTime = 0, M !== "never" && (b.start(), b.elapsedTime = 0), N(() => ({
          frameloop: M
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
        lastEvent: /* @__PURE__ */ it.createRef(),
        // Updates
        active: !1,
        frames: 0,
        priority: 0,
        subscribe: (M, b, X) => {
          const Z = S().internal;
          return Z.priority = Z.priority + (b > 0 ? 1 : 0), Z.subscribers.push({
            ref: M,
            priority: b,
            store: X
          }), Z.subscribers = Z.subscribers.sort((x, Y) => x.priority - Y.priority), () => {
            const x = S().internal;
            x != null && x.subscribers && (x.priority = x.priority - (b > 0 ? 1 : 0), x.subscribers = x.subscribers.filter((Y) => Y.ref !== M));
          };
        }
      }
    };
  }), m = s.getState();
  let v = m.size, E = m.viewport.dpr, R = m.camera;
  return s.subscribe(() => {
    const {
      camera: N,
      size: S,
      viewport: U,
      gl: H,
      set: T
    } = s.getState();
    if (S.width !== v.width || S.height !== v.height || U.dpr !== E) {
      v = S, E = U.dpr, Rp(N, S), U.dpr > 0 && H.setPixelRatio(U.dpr);
      const _ = typeof HTMLCanvasElement < "u" && H.domElement instanceof HTMLCanvasElement;
      H.setSize(S.width, S.height, _);
    }
    N !== R && (R = N, T((_) => ({
      viewport: {
        ..._.viewport,
        ..._.viewport.getCurrentViewport(N)
      }
    })));
  }), s.subscribe((N) => c(N)), s;
};
function Qp() {
  const c = it.useContext(Mv);
  if (!c) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return c;
}
function Gp(c, i = 0) {
  const s = Qp(), m = s.getState().internal.subscribe, v = Tv(c);
  return Ya(() => m(v, i, s), [i, m, s]), null;
}
const iv = /* @__PURE__ */ new WeakMap(), Vp = (c) => {
  var i;
  return typeof c == "function" && (c == null || (i = c.prototype) == null ? void 0 : i.constructor) === c;
};
function Hv(c, i) {
  return function(s, ...m) {
    let v;
    return Vp(s) ? (v = iv.get(s), v || (v = new s(), iv.set(s, v))) : v = s, c && c(v), Promise.all(m.map((E) => new Promise((R, N) => v.load(E, (S) => {
      Lt(S?.scene) && Object.assign(S, Op(S.scene)), R(S);
    }, i, (S) => N(new Error(`Could not load ${E}: ${S?.message}`))))));
  };
}
function $c(c, i, s, m) {
  const v = Array.isArray(i) ? i : [i], E = yp(Hv(s, m), [c, ...v], {
    equal: zt.equ
  });
  return Array.isArray(i) ? E : E[0];
}
$c.preload = function(c, i, s) {
  const m = Array.isArray(i) ? i : [i];
  return rp(Hv(s), [c, ...m]);
};
$c.clear = function(c, i) {
  const s = Array.isArray(i) ? i : [i];
  return hp([c, ...s]);
};
function Xp(c) {
  const i = op(c);
  return i.injectIntoDevTools({
    bundleType: 0,
    rendererPackageName: "@react-three/fiber",
    version: it.version
  }), i;
}
const Ov = 0, la = {}, Zp = /^three(?=[A-Z])/, Gu = (c) => `${c[0].toUpperCase()}${c.slice(1)}`;
let Kp = 0;
const Jp = (c) => typeof c == "function";
function xp(c) {
  if (Jp(c)) {
    const i = `${Kp++}`;
    return la[i] = c, i;
  } else
    Object.assign(la, c);
}
function gv(c, i) {
  const s = Gu(c), m = la[s];
  if (c !== "primitive" && !m) throw new Error(`R3F: ${s} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (c === "primitive" && !i.object) throw new Error("R3F: Primitives without 'object' are invalid!");
  if (i.args !== void 0 && !Array.isArray(i.args)) throw new Error("R3F: The args prop must be an array!");
}
function Lp(c, i, s) {
  var m;
  return c = Gu(c) in la ? c : c.replace(Zp, ""), gv(c, i), c === "primitive" && (m = i.object) != null && m.__r3f && delete i.object.__r3f, Ru(i.object, s, c, i);
}
function Wp(c) {
  if (!c.isHidden) {
    var i;
    c.props.attach && (i = c.parent) != null && i.object ? Bu(c.parent, c) : Lt(c.object) && (c.object.visible = !1), c.isHidden = !0, ea(c);
  }
}
function Uv(c) {
  if (c.isHidden) {
    var i;
    c.props.attach && (i = c.parent) != null && i.object ? qu(c.parent, c) : Lt(c.object) && c.props.visible !== !1 && (c.object.visible = !0), c.isHidden = !1, ea(c);
  }
}
function kc(c, i, s) {
  const m = i.root.getState();
  if (!(!c.parent && c.object !== m.scene)) {
    if (!i.object) {
      var v, E;
      const R = la[Gu(i.type)];
      i.object = (v = i.props.object) != null ? v : new R(...(E = i.props.args) != null ? E : []), i.object.__r3f = i;
    }
    if (ae(i.object, i.props), i.props.attach)
      qu(c, i);
    else if (Lt(i.object) && Lt(c.object)) {
      const R = c.object.children.indexOf(s?.object);
      if (s && R !== -1) {
        const N = c.object.children.indexOf(i.object);
        if (N !== -1) {
          c.object.children.splice(N, 1);
          const S = N < R ? R - 1 : R;
          c.object.children.splice(S, 0, i.object);
        } else
          i.object.parent = c.object, c.object.children.splice(R, 0, i.object), i.object.dispatchEvent({
            type: "added"
          }), c.object.dispatchEvent({
            type: "childadded",
            child: i.object
          });
      } else
        c.object.add(i.object);
    }
    for (const R of i.children) kc(i, R);
    ea(i);
  }
}
function Bc(c, i) {
  i && (i.parent = c, c.children.push(i), kc(c, i));
}
function fv(c, i, s) {
  if (!i || !s) return;
  i.parent = c;
  const m = c.children.indexOf(s);
  m !== -1 ? c.children.splice(m, 0, i) : c.children.push(i), kc(c, i, s);
}
function Av(c) {
  if (typeof c.dispose == "function") {
    const i = () => {
      try {
        c.dispose();
      } catch {
      }
    };
    typeof IS_REACT_ACT_ENVIRONMENT < "u" ? i() : av.unstable_scheduleCallback(av.unstable_IdlePriority, i);
  }
}
function xc(c, i, s) {
  if (!i) return;
  i.parent = null;
  const m = c.children.indexOf(i);
  m !== -1 && c.children.splice(m, 1), i.props.attach ? Bu(c, i) : Lt(i.object) && Lt(c.object) && (c.object.remove(i.object), qp(Ev(i), i.object));
  const v = i.props.dispose !== null && s !== !1;
  for (let E = i.children.length - 1; E >= 0; E--) {
    const R = i.children[E];
    xc(i, R, v);
  }
  i.children.length = 0, delete i.object.__r3f, v && i.type !== "primitive" && i.object.type !== "Scene" && Av(i.object), s === void 0 && ea(i);
}
function Fp(c, i) {
  for (const s of [c, c.alternate])
    if (s !== null)
      if (typeof s.ref == "function") {
        s.refCleanup == null || s.refCleanup();
        const m = s.ref(i);
        typeof m == "function" && (s.refCleanup = m);
      } else s.ref && (s.ref.current = i);
}
const ju = [];
function Pp() {
  for (const [s] of ju) {
    const m = s.parent;
    if (m) {
      s.props.attach ? Bu(m, s) : Lt(s.object) && Lt(m.object) && m.object.remove(s.object);
      for (const v of s.children)
        v.props.attach ? Bu(s, v) : Lt(v.object) && Lt(s.object) && s.object.remove(v.object);
    }
    s.isHidden && Uv(s), s.object.__r3f && delete s.object.__r3f, s.type !== "primitive" && Av(s.object);
  }
  for (const [s, m, v] of ju) {
    s.props = m;
    const E = s.parent;
    if (E) {
      var c, i;
      const R = la[Gu(s.type)];
      s.object = (c = s.props.object) != null ? c : new R(...(i = s.props.args) != null ? i : []), s.object.__r3f = s, Fp(v, s.object), ae(s.object, s.props), s.props.attach ? qu(E, s) : Lt(s.object) && Lt(E.object) && E.object.add(s.object);
      for (const N of s.children)
        N.props.attach ? qu(s, N) : Lt(N.object) && Lt(s.object) && s.object.add(N.object);
      ea(s);
    }
  }
  ju.length = 0;
}
const Yc = () => {
}, sv = {};
let Du = Ov;
const wp = 0, Ip = 4, Lc = /* @__PURE__ */ Xp({
  isPrimaryRenderer: !1,
  warnsIfNotActing: !1,
  supportsMutation: !0,
  supportsPersistence: !1,
  supportsHydration: !1,
  createInstance: Lp,
  removeChild: xc,
  appendChild: Bc,
  appendInitialChild: Bc,
  insertBefore: fv,
  appendChildToContainer(c, i) {
    const s = c.getState().scene.__r3f;
    !i || !s || Bc(s, i);
  },
  removeChildFromContainer(c, i) {
    const s = c.getState().scene.__r3f;
    !i || !s || xc(s, i);
  },
  insertInContainerBefore(c, i, s) {
    const m = c.getState().scene.__r3f;
    !i || !s || !m || fv(m, i, s);
  },
  getRootHostContext: () => sv,
  getChildHostContext: () => sv,
  commitUpdate(c, i, s, m, v) {
    var E, R, N;
    gv(i, m);
    let S = !1;
    if ((c.type === "primitive" && s.object !== m.object || ((E = m.args) == null ? void 0 : E.length) !== ((R = s.args) == null ? void 0 : R.length) || (N = m.args) != null && N.some((H, T) => {
      var _;
      return H !== ((_ = s.args) == null ? void 0 : _[T]);
    })) && (S = !0), S)
      ju.push([c, {
        ...m
      }, v]);
    else {
      const H = Dp(c, m);
      Object.keys(H).length && (Object.assign(c.props, H), ae(c.object, H));
    }
    (v.sibling === null || (v.flags & Ip) === wp) && Pp();
  },
  finalizeInitialChildren: () => !1,
  commitMount() {
  },
  getPublicInstance: (c) => c?.object,
  prepareForCommit: () => null,
  preparePortalMount: (c) => Ru(c.getState().scene, c, "", {}),
  resetAfterCommit: () => {
  },
  shouldSetTextContent: () => !1,
  clearContainer: () => !1,
  hideInstance: Wp,
  unhideInstance: Uv,
  createTextInstance: Yc,
  hideTextInstance: Yc,
  unhideTextInstance: Yc,
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
  HostTransitionContext: /* @__PURE__ */ it.createContext(null),
  setCurrentUpdatePriority(c) {
    Du = c;
  },
  getCurrentUpdatePriority() {
    return Du;
  },
  resolveUpdatePriority() {
    var c;
    if (Du !== Ov) return Du;
    switch (typeof window < "u" && ((c = window.event) == null ? void 0 : c.type)) {
      case "click":
      case "contextmenu":
      case "dblclick":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
        return Cu.DiscreteEventPriority;
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerenter":
      case "pointerleave":
      case "wheel":
        return Cu.ContinuousEventPriority;
      default:
        return Cu.DefaultEventPriority;
    }
  },
  resetFormInstance() {
  }
}), _e = /* @__PURE__ */ new Map(), ke = {
  objects: "shallow",
  strict: !1
};
function $p(c, i) {
  if (!i && typeof HTMLCanvasElement < "u" && c instanceof HTMLCanvasElement && c.parentElement) {
    const {
      width: s,
      height: m,
      top: v,
      left: E
    } = c.parentElement.getBoundingClientRect();
    return {
      width: s,
      height: m,
      top: v,
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
function kp(c) {
  const i = _e.get(c), s = i?.fiber, m = i?.store;
  i && console.warn("R3F.createRoot should only be called once!");
  const v = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  ), E = m || Yp(Pc, ov), R = s || Lc.createContainer(
    E,
    // container
    Cu.ConcurrentRoot,
    // tag
    null,
    // hydration callbacks
    !1,
    // isStrictMode
    null,
    // concurrentUpdatesByDefaultOverride
    "",
    // identifierPrefix
    v,
    // onUncaughtError
    v,
    // onCaughtError
    v,
    // onRecoverableError
    null
    // transitionCallbacks
  );
  i || _e.set(c, {
    fiber: R,
    store: E
  });
  let N, S, U = !1, H = null;
  return {
    async configure(T = {}) {
      let _;
      H = new Promise(($) => _ = $);
      let {
        gl: C,
        size: Q,
        scene: V,
        events: J,
        onCreated: M,
        shadows: b = !1,
        linear: X = !1,
        flat: Z = !1,
        legacy: x = !1,
        orthographic: Y = !1,
        frameloop: ut = "always",
        dpr: ft = [1, 2],
        performance: tt,
        raycaster: F,
        camera: w,
        onPointerMissed: Kt
      } = T, I = E.getState(), mt = I.gl;
      if (!I.gl) {
        const $ = {
          canvas: c,
          powerPreference: "high-performance",
          antialias: !0,
          alpha: !0
        }, nt = typeof C == "function" ? await C($) : C;
        cv(nt) ? mt = nt : mt = new dt.WebGLRenderer({
          ...$,
          ...C
        }), I.set({
          gl: mt
        });
      }
      let bt = I.raycaster;
      bt || I.set({
        raycaster: bt = new dt.Raycaster()
      });
      const {
        params: h,
        ...O
      } = F || {};
      if (zt.equ(O, bt, ke) || ae(bt, {
        ...O
      }), zt.equ(h, bt.params, ke) || ae(bt, {
        params: {
          ...bt.params,
          ...h
        }
      }), !I.camera || I.camera === S && !zt.equ(S, w, ke)) {
        S = w;
        const $ = w?.isCamera, nt = $ ? w : Y ? new dt.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new dt.PerspectiveCamera(75, 0, 0.1, 1e3);
        $ || (nt.position.z = 5, w && (ae(nt, w), nt.manual || ("aspect" in w || "left" in w || "right" in w || "bottom" in w || "top" in w) && (nt.manual = !0, nt.updateProjectionMatrix())), !I.camera && !(w != null && w.rotation) && nt.lookAt(0, 0, 0)), I.set({
          camera: nt
        }), bt.camera = nt;
      }
      if (!I.scene) {
        let $;
        V != null && V.isScene ? ($ = V, Ru($, E, "", {})) : ($ = new dt.Scene(), Ru($, E, "", {}), V && ae($, V)), I.set({
          scene: $
        });
      }
      J && !I.events.handlers && I.set({
        events: J(E)
      });
      const D = $p(c, Q);
      if (zt.equ(D, I.size, ke) || I.setSize(D.width, D.height, D.top, D.left), ft && I.viewport.dpr !== Nv(ft) && I.setDpr(ft), I.frameloop !== ut && I.setFrameloop(ut), I.onPointerMissed || I.set({
        onPointerMissed: Kt
      }), tt && !zt.equ(tt, I.performance, ke) && I.set(($) => ({
        performance: {
          ...$.performance,
          ...tt
        }
      })), !I.xr) {
        var B;
        const $ = (lt, gt) => {
          const Me = E.getState();
          Me.frameloop !== "never" && ov(lt, !0, Me, gt);
        }, nt = () => {
          const lt = E.getState();
          lt.gl.xr.enabled = lt.gl.xr.isPresenting, lt.gl.xr.setAnimationLoop(lt.gl.xr.isPresenting ? $ : null), lt.gl.xr.isPresenting || Pc(lt);
        }, Tt = {
          connect() {
            const lt = E.getState().gl;
            lt.xr.addEventListener("sessionstart", nt), lt.xr.addEventListener("sessionend", nt);
          },
          disconnect() {
            const lt = E.getState().gl;
            lt.xr.removeEventListener("sessionstart", nt), lt.xr.removeEventListener("sessionend", nt);
          }
        };
        typeof ((B = mt.xr) == null ? void 0 : B.addEventListener) == "function" && Tt.connect(), I.set({
          xr: Tt
        });
      }
      if (mt.shadowMap) {
        const $ = mt.shadowMap.enabled, nt = mt.shadowMap.type;
        if (mt.shadowMap.enabled = !!b, zt.boo(b))
          mt.shadowMap.type = dt.PCFSoftShadowMap;
        else if (zt.str(b)) {
          var K;
          const Tt = {
            basic: dt.BasicShadowMap,
            percentage: dt.PCFShadowMap,
            soft: dt.PCFSoftShadowMap,
            variance: dt.VSMShadowMap
          };
          mt.shadowMap.type = (K = Tt[b]) != null ? K : dt.PCFSoftShadowMap;
        } else zt.obj(b) && Object.assign(mt.shadowMap, b);
        ($ !== mt.shadowMap.enabled || nt !== mt.shadowMap.type) && (mt.shadowMap.needsUpdate = !0);
      }
      return dt.ColorManagement.enabled = !x, U || (mt.outputColorSpace = X ? dt.LinearSRGBColorSpace : dt.SRGBColorSpace, mt.toneMapping = Z ? dt.NoToneMapping : dt.ACESFilmicToneMapping), I.legacy !== x && I.set(() => ({
        legacy: x
      })), I.linear !== X && I.set(() => ({
        linear: X
      })), I.flat !== Z && I.set(() => ({
        flat: Z
      })), C && !zt.fun(C) && !cv(C) && !zt.equ(C, mt, ke) && ae(mt, C), N = M, U = !0, _(), this;
    },
    render(T) {
      return !U && !H && this.configure(), H.then(() => {
        Lc.updateContainer(/* @__PURE__ */ Ct(td, {
          store: E,
          children: T,
          onCreated: N,
          rootElement: c
        }), R, null, () => {
        });
      }), E;
    },
    unmount() {
      Dv(c);
    }
  };
}
function td({
  store: c,
  children: i,
  onCreated: s,
  rootElement: m
}) {
  return Ya(() => {
    const v = c.getState();
    v.set((E) => ({
      internal: {
        ...E.internal,
        active: !0
      }
    })), s && s(v), c.getState().events.connected || v.events.connect == null || v.events.connect(m);
  }, []), /* @__PURE__ */ Ct(Mv.Provider, {
    value: c,
    children: i
  });
}
function Dv(c, i) {
  const s = _e.get(c), m = s?.fiber;
  if (m) {
    const v = s?.store.getState();
    v && (v.internal.active = !1), Lc.updateContainer(null, m, null, () => {
      v && setTimeout(() => {
        try {
          var E, R, N, S;
          v.events.disconnect == null || v.events.disconnect(), (E = v.gl) == null || (R = E.renderLists) == null || R.dispose == null || R.dispose(), (N = v.gl) == null || N.forceContextLoss == null || N.forceContextLoss(), (S = v.gl) != null && S.xr && v.xr.disconnect(), gp(v.scene), _e.delete(c);
        } catch {
        }
      }, 500);
    });
  }
}
const ld = /* @__PURE__ */ new Set(), ed = /* @__PURE__ */ new Set(), ad = /* @__PURE__ */ new Set();
function Qc(c, i) {
  if (c.size)
    for (const {
      callback: s
    } of c.values())
      s(i);
}
function qa(c, i) {
  switch (c) {
    case "before":
      return Qc(ld, i);
    case "after":
      return Qc(ed, i);
    case "tail":
      return Qc(ad, i);
  }
}
let Gc, Vc;
function Wc(c, i, s) {
  let m = i.clock.getDelta();
  i.frameloop === "never" && typeof c == "number" && (m = c - i.clock.elapsedTime, i.clock.oldTime = i.clock.elapsedTime, i.clock.elapsedTime = c), Gc = i.internal.subscribers;
  for (let v = 0; v < Gc.length; v++)
    Vc = Gc[v], Vc.ref.current(Vc.store.getState(), m, s);
  return !i.internal.priority && i.gl.render && i.gl.render(i.scene, i.camera), i.internal.frames = Math.max(0, i.internal.frames - 1), i.frameloop === "always" ? 1 : i.internal.frames;
}
let Yu = !1, Fc = !1, Xc, vv, ta;
function Cv(c) {
  vv = requestAnimationFrame(Cv), Yu = !0, Xc = 0, qa("before", c), Fc = !0;
  for (const s of _e.values()) {
    var i;
    ta = s.store.getState(), ta.internal.active && (ta.frameloop === "always" || ta.internal.frames > 0) && !((i = ta.gl.xr) != null && i.isPresenting) && (Xc += Wc(c, ta));
  }
  if (Fc = !1, qa("after", c), Xc === 0)
    return qa("tail", c), Yu = !1, cancelAnimationFrame(vv);
}
function Pc(c, i = 1) {
  var s;
  if (!c) return _e.forEach((m) => Pc(m.store.getState(), i));
  (s = c.gl.xr) != null && s.isPresenting || !c.internal.active || c.frameloop === "never" || (i > 1 ? c.internal.frames = Math.min(60, c.internal.frames + i) : Fc ? c.internal.frames = 2 : c.internal.frames = 1, Yu || (Yu = !0, requestAnimationFrame(Cv)));
}
function ov(c, i = !0, s, m) {
  if (i && qa("before", c), s) Wc(c, s, m);
  else for (const v of _e.values()) Wc(c, v.store.getState());
  i && qa("after", c);
}
const Zc = {
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
function ud(c) {
  const {
    handlePointer: i
  } = Bp(c);
  return {
    priority: 1,
    enabled: !0,
    compute(s, m, v) {
      m.pointer.set(s.offsetX / m.size.width * 2 - 1, -(s.offsetY / m.size.height) * 2 + 1), m.raycaster.setFromCamera(m.pointer, m.camera);
    },
    connected: void 0,
    handlers: Object.keys(Zc).reduce((s, m) => ({
      ...s,
      [m]: i(m)
    }), {}),
    update: () => {
      var s;
      const {
        events: m,
        internal: v
      } = c.getState();
      (s = v.lastEvent) != null && s.current && m.handlers && m.handlers.onPointerMove(v.lastEvent.current);
    },
    connect: (s) => {
      const {
        set: m,
        events: v
      } = c.getState();
      if (v.disconnect == null || v.disconnect(), m((E) => ({
        events: {
          ...E.events,
          connected: s
        }
      })), v.handlers)
        for (const E in v.handlers) {
          const R = v.handlers[E], [N, S] = Zc[E];
          s.addEventListener(N, R, {
            passive: S
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
          for (const v in m.handlers) {
            const E = m.handlers[v], [R] = Zc[v];
            m.connected.removeEventListener(R, E);
          }
        s((v) => ({
          events: {
            ...v.events,
            connected: void 0
          }
        }));
      }
    }
  };
}
function mv(c, i) {
  let s;
  return (...m) => {
    window.clearTimeout(s), s = window.setTimeout(() => c(...m), i);
  };
}
function nd({ debounce: c, scroll: i, polyfill: s, offsetSize: m } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const v = s || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!v) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [E, R] = Km({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), N = Kc({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: E, orientationHandler: null }), S = c ? typeof c == "number" ? c : c.scroll : null, U = c ? typeof c == "number" ? c : c.resize : null, H = Kc(!1);
  Ra(() => (H.current = !0, () => void (H.current = !1)));
  const [T, _, C] = Jm(() => {
    const M = () => {
      if (!N.current.element) return;
      const { left: b, top: X, width: Z, height: x, bottom: Y, right: ut, x: ft, y: tt } = N.current.element.getBoundingClientRect(), F = { left: b, top: X, width: Z, height: x, bottom: Y, right: ut, x: ft, y: tt };
      N.current.element instanceof HTMLElement && m && (F.height = N.current.element.offsetHeight, F.width = N.current.element.offsetWidth), Object.freeze(F), H.current && !sd(N.current.lastBounds, F) && R(N.current.lastBounds = F);
    };
    return [M, U ? mv(M, U) : M, S ? mv(M, S) : M];
  }, [R, m, S, U]);
  function Q() {
    N.current.scrollContainers && (N.current.scrollContainers.forEach((M) => M.removeEventListener("scroll", C, !0)), N.current.scrollContainers = null), N.current.resizeObserver && (N.current.resizeObserver.disconnect(), N.current.resizeObserver = null), N.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", N.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", N.current.orientationHandler));
  }
  function V() {
    N.current.element && (N.current.resizeObserver = new v(C), N.current.resizeObserver.observe(N.current.element), i && N.current.scrollContainers && N.current.scrollContainers.forEach((M) => M.addEventListener("scroll", C, { capture: !0, passive: !0 })), N.current.orientationHandler = () => {
      C();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", N.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", N.current.orientationHandler));
  }
  const J = (M) => {
    !M || M === N.current.element || (Q(), N.current.element = M, N.current.scrollContainers = jv(M), V());
  };
  return id(C, !!i), cd(_), Ra(() => {
    Q(), V();
  }, [i, C, _]), Ra(() => Q, []), [J, E, T];
}
function cd(c) {
  Ra(() => {
    const i = c;
    return window.addEventListener("resize", i), () => void window.removeEventListener("resize", i);
  }, [c]);
}
function id(c, i) {
  Ra(() => {
    if (i) {
      const s = c;
      return window.addEventListener("scroll", s, { capture: !0, passive: !0 }), () => void window.removeEventListener("scroll", s, !0);
    }
  }, [c, i]);
}
function jv(c) {
  const i = [];
  if (!c || c === document.body) return i;
  const { overflow: s, overflowX: m, overflowY: v } = window.getComputedStyle(c);
  return [s, m, v].some((E) => E === "auto" || E === "scroll") && i.push(c), [...i, ...jv(c.parentElement)];
}
const fd = ["x", "y", "top", "bottom", "left", "right", "width", "height"], sd = (c, i) => fd.every((s) => c[s] === i[s]);
function vd({
  ref: c,
  children: i,
  fallback: s,
  resize: m,
  style: v,
  gl: E,
  events: R = ud,
  eventSource: N,
  eventPrefix: S,
  shadows: U,
  linear: H,
  flat: T,
  legacy: _,
  orthographic: C,
  frameloop: Q,
  dpr: V,
  performance: J,
  raycaster: M,
  camera: b,
  scene: X,
  onPointerMissed: Z,
  onCreated: x,
  ...Y
}) {
  it.useMemo(() => xp(dt), []);
  const ut = _p(), [ft, tt] = nd({
    scroll: !0,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...m
  }), F = it.useRef(null), w = it.useRef(null);
  it.useImperativeHandle(c, () => F.current);
  const Kt = Tv(Z), [I, mt] = it.useState(!1), [bt, h] = it.useState(!1);
  if (I) throw I;
  if (bt) throw bt;
  const O = it.useRef(null);
  return Ya(() => {
    const B = F.current;
    if (tt.width > 0 && tt.height > 0 && B) {
      O.current || (O.current = kp(B));
      async function K() {
        await O.current.configure({
          gl: E,
          scene: X,
          events: R,
          shadows: U,
          linear: H,
          flat: T,
          legacy: _,
          orthographic: C,
          frameloop: Q,
          dpr: V,
          performance: J,
          raycaster: M,
          camera: b,
          size: tt,
          // Pass mutable reference to onPointerMissed so it's free to update
          onPointerMissed: (...$) => Kt.current == null ? void 0 : Kt.current(...$),
          onCreated: ($) => {
            $.events.connect == null || $.events.connect(N ? Np(N) ? N.current : N : w.current), S && $.setEvents({
              compute: (nt, Tt) => {
                const lt = nt[S + "X"], gt = nt[S + "Y"];
                Tt.pointer.set(lt / Tt.size.width * 2 - 1, -(gt / Tt.size.height) * 2 + 1), Tt.raycaster.setFromCamera(Tt.pointer, Tt.camera);
              }
            }), x?.($);
          }
        }), O.current.render(/* @__PURE__ */ Ct(ut, {
          children: /* @__PURE__ */ Ct(Hp, {
            set: h,
            children: /* @__PURE__ */ Ct(it.Suspense, {
              fallback: /* @__PURE__ */ Ct(Mp, {
                set: mt
              }),
              children: i ?? null
            })
          })
        }));
      }
      K();
    }
  }), it.useEffect(() => {
    const B = F.current;
    if (B) return () => Dv(B);
  }, []), /* @__PURE__ */ Ct("div", {
    ref: w,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: N ? "none" : "auto",
      ...v
    },
    ...Y,
    children: /* @__PURE__ */ Ct("div", {
      ref: ft,
      style: {
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ Ct("canvas", {
        ref: F,
        style: {
          display: "block"
        },
        children: s
      })
    })
  });
}
function od(c) {
  return /* @__PURE__ */ Ct(hv, {
    children: /* @__PURE__ */ Ct(vd, {
      ...c
    })
  });
}
function md({ spinRate: c = 10 }) {
  const i = $c(Lm, "/models/baseball.gltf"), s = Kc();
  return Gp((m, v) => {
    if (s.current) {
      const E = c * 2 * Math.PI / 60;
      s.current.rotation.x += E * v;
    }
  }), /* @__PURE__ */ Ct("group", { ref: s, rotation: [Math.PI / 2, 3 * Math.PI / 2, 0], children: /* @__PURE__ */ Ct("primitive", { object: i.scene, scale: 2 }) });
}
function pd() {
  return /* @__PURE__ */ Ct("div", { style: { width: "100vw", height: "100vh" }, children: /* @__PURE__ */ Zm(od, { camera: { position: [0, 0, 0.45], fov: 50 }, children: [
    /* @__PURE__ */ Ct("ambientLight", { intensity: 1 }),
    /* @__PURE__ */ Ct("directionalLight", { position: [0, 0, 0.3], intensity: 1 }),
    /* @__PURE__ */ Ct(md, { spinRate: 10 })
  ] }) });
}
const dd = document.getElementById("root"), yd = xm(dd);
yd.render(/* @__PURE__ */ Ct(pd, {}));
