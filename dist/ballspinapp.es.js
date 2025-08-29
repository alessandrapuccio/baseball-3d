import { jsx as ye, jsxs as vt } from "https://esm.sh/react/jsx-runtime";
import * as Ye from "https://esm.sh/react";
import sl, { useState as Cn, useRef as Qu, useEffect as _a, useMemo as ms, Suspense as Iv } from "https://esm.sh/react";
import { createRoot as $v } from "https://esm.sh/react-dom/client";
import * as Le from "https://esm.sh/three";
import { MeshDistanceMaterial as eh, MeshDepthMaterial as th, RGBADepthPacking as ah, UniformsUtils as nh, ShaderChunk as lh, Mesh as qo, MeshBasicMaterial as uh, Color as Fi, Vector3 as Yo, Matrix4 as ih, Vector2 as Li, InstancedBufferGeometry as rh, Sphere as oh, Box3 as ys, InstancedBufferAttribute as fh, Texture as ch, LinearFilter as Rc, Matrix3 as sh, Vector4 as zc, DoubleSide as dh, PlaneGeometry as Xo } from "https://esm.sh/three";
import { GLTFLoader as vh } from "https://esm.sh/three/examples/jsm/loaders/GLTFLoader";
import { MeshoptDecoder as hh } from "https://esm.sh/three/examples/jsm/libs/meshopt_decoder.module.js";
function gs(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var ro = { exports: {} }, ln = {};
/**
 * @license React
 * react-reconciler-constants.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nc;
function ph() {
  return Nc || (Nc = 1, ln.ConcurrentRoot = 1, ln.ContinuousEventPriority = 8, ln.DefaultEventPriority = 32, ln.DiscreteEventPriority = 2, ln.IdleEventPriority = 268435456, ln.LegacyRoot = 0, ln.NoEventPriority = 0), ln;
}
var xc;
function mh() {
  return xc || (xc = 1, ro.exports = ph()), ro.exports;
}
var Gi = mh(), oo = { exports: {} }, fo = {}, co = { exports: {} }, so = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bc;
function yh() {
  if (Bc) return so;
  Bc = 1;
  var o = sl;
  function l(y, g) {
    return y === g && (y !== 0 || 1 / y === 1 / g) || y !== y && g !== g;
  }
  var p = typeof Object.is == "function" ? Object.is : l, m = o.useState, u = o.useEffect, n = o.useLayoutEffect, s = o.useDebugValue;
  function c(y, g) {
    var E = g(), _ = m({ inst: { value: E, getSnapshot: g } }), A = _[0].inst, T = _[1];
    return n(
      function() {
        A.value = E, A.getSnapshot = g, f(A) && T({ inst: A });
      },
      [y, E, g]
    ), u(
      function() {
        return f(A) && T({ inst: A }), y(function() {
          f(A) && T({ inst: A });
        });
      },
      [y]
    ), s(E), E;
  }
  function f(y) {
    var g = y.getSnapshot;
    y = y.value;
    try {
      var E = g();
      return !p(y, E);
    } catch {
      return !0;
    }
  }
  function d(y, g) {
    return g();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : c;
  return so.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : h, so;
}
var Gc;
function gh() {
  return Gc || (Gc = 1, co.exports = yh()), co.exports;
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
var jc;
function Sh() {
  if (jc) return fo;
  jc = 1;
  var o = sl, l = gh();
  function p(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var m = typeof Object.is == "function" ? Object.is : p, u = l.useSyncExternalStore, n = o.useRef, s = o.useEffect, c = o.useMemo, f = o.useDebugValue;
  return fo.useSyncExternalStoreWithSelector = function(d, h, y, g, E) {
    var _ = n(null);
    if (_.current === null) {
      var A = { hasValue: !1, value: null };
      _.current = A;
    } else A = _.current;
    _ = c(
      function() {
        function M(V) {
          if (!b) {
            if (b = !0, z = V, V = g(V), E !== void 0 && A.hasValue) {
              var j = A.value;
              if (E(j, V))
                return O = j;
            }
            return O = V;
          }
          if (j = O, m(z, V)) return j;
          var X = g(V);
          return E !== void 0 && E(j, X) ? (z = V, j) : (z = V, O = X);
        }
        var b = !1, z, O, x = y === void 0 ? null : y;
        return [
          function() {
            return M(h());
          },
          x === null ? void 0 : function() {
            return M(x());
          }
        ];
      },
      [h, y, g, E]
    );
    var T = u(d, _[0], _[1]);
    return s(
      function() {
        A.hasValue = !0, A.value = T;
      },
      [T]
    ), f(T), T;
  }, fo;
}
var Hc;
function Eh() {
  return Hc || (Hc = 1, oo.exports = Sh()), oo.exports;
}
var bh = Eh();
const _h = /* @__PURE__ */ gs(bh), Vc = (o) => {
  let l;
  const p = /* @__PURE__ */ new Set(), m = (d, h) => {
    const y = typeof d == "function" ? d(l) : d;
    if (!Object.is(y, l)) {
      const g = l;
      l = h ?? (typeof y != "object" || y === null) ? y : Object.assign({}, l, y), p.forEach((E) => E(l, g));
    }
  }, u = () => l, c = { setState: m, getState: u, getInitialState: () => f, subscribe: (d) => (p.add(d), () => p.delete(d)) }, f = l = o(m, u, c);
  return c;
}, Th = (o) => o ? Vc(o) : Vc, { useSyncExternalStoreWithSelector: Uh } = _h, Mh = (o) => o;
function Ch(o, l = Mh, p) {
  const m = Uh(
    o.subscribe,
    o.getState,
    o.getInitialState,
    l,
    p
  );
  return sl.useDebugValue(m), m;
}
const Lc = (o, l) => {
  const p = Th(o), m = (u, n = l) => Ch(p, u, n);
  return Object.assign(m, p), m;
}, Dh = (o, l) => o ? Lc(o, l) : Lc;
var vo = { exports: {} }, ho = { exports: {} }, po = { exports: {} }, mo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qc;
function Ah() {
  return qc || (qc = 1, function(o) {
    function l(U, F) {
      var W = U.length;
      U.push(F);
      e: for (; 0 < W; ) {
        var H = W - 1 >>> 1, q = U[H];
        if (0 < u(q, F))
          U[H] = F, U[W] = q, W = H;
        else break e;
      }
    }
    function p(U) {
      return U.length === 0 ? null : U[0];
    }
    function m(U) {
      if (U.length === 0) return null;
      var F = U[0], W = U.pop();
      if (W !== F) {
        U[0] = W;
        e: for (var H = 0, q = U.length, C = q >>> 1; H < C; ) {
          var R = 2 * (H + 1) - 1, J = U[R], L = R + 1, K = U[L];
          if (0 > u(J, W))
            L < q && 0 > u(K, J) ? (U[H] = K, U[L] = W, H = L) : (U[H] = J, U[R] = W, H = R);
          else if (L < q && 0 > u(K, W))
            U[H] = K, U[L] = W, H = L;
          else break e;
        }
      }
      return F;
    }
    function u(U, F) {
      var W = U.sortIndex - F.sortIndex;
      return W !== 0 ? W : U.id - F.id;
    }
    if (o.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var n = performance;
      o.unstable_now = function() {
        return n.now();
      };
    } else {
      var s = Date, c = s.now();
      o.unstable_now = function() {
        return s.now() - c;
      };
    }
    var f = [], d = [], h = 1, y = null, g = 3, E = !1, _ = !1, A = !1, T = typeof setTimeout == "function" ? setTimeout : null, M = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    function z(U) {
      for (var F = p(d); F !== null; ) {
        if (F.callback === null) m(d);
        else if (F.startTime <= U)
          m(d), F.sortIndex = F.expirationTime, l(f, F);
        else break;
        F = p(d);
      }
    }
    function O(U) {
      if (A = !1, z(U), !_)
        if (p(f) !== null)
          _ = !0, Y();
        else {
          var F = p(d);
          F !== null && ne(O, F.startTime - U);
        }
    }
    var x = !1, V = -1, j = 5, X = -1;
    function k() {
      return !(o.unstable_now() - X < j);
    }
    function w() {
      if (x) {
        var U = o.unstable_now();
        X = U;
        var F = !0;
        try {
          e: {
            _ = !1, A && (A = !1, M(V), V = -1), E = !0;
            var W = g;
            try {
              t: {
                for (z(U), y = p(f); y !== null && !(y.expirationTime > U && k()); ) {
                  var H = y.callback;
                  if (typeof H == "function") {
                    y.callback = null, g = y.priorityLevel;
                    var q = H(
                      y.expirationTime <= U
                    );
                    if (U = o.unstable_now(), typeof q == "function") {
                      y.callback = q, z(U), F = !0;
                      break t;
                    }
                    y === p(f) && m(f), z(U);
                  } else m(f);
                  y = p(f);
                }
                if (y !== null) F = !0;
                else {
                  var C = p(d);
                  C !== null && ne(
                    O,
                    C.startTime - U
                  ), F = !1;
                }
              }
              break e;
            } finally {
              y = null, g = W, E = !1;
            }
            F = void 0;
          }
        } finally {
          F ? te() : x = !1;
        }
      }
    }
    var te;
    if (typeof b == "function")
      te = function() {
        b(w);
      };
    else if (typeof MessageChannel < "u") {
      var B = new MessageChannel(), Q = B.port2;
      B.port1.onmessage = w, te = function() {
        Q.postMessage(null);
      };
    } else
      te = function() {
        T(w, 0);
      };
    function Y() {
      x || (x = !0, te());
    }
    function ne(U, F) {
      V = T(function() {
        U(o.unstable_now());
      }, F);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, o.unstable_continueExecution = function() {
      _ || E || (_ = !0, Y());
    }, o.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : j = 0 < U ? Math.floor(1e3 / U) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, o.unstable_getFirstCallbackNode = function() {
      return p(f);
    }, o.unstable_next = function(U) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = g;
      }
      var W = g;
      g = F;
      try {
        return U();
      } finally {
        g = W;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(U, F) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var W = g;
      g = U;
      try {
        return F();
      } finally {
        g = W;
      }
    }, o.unstable_scheduleCallback = function(U, F, W) {
      var H = o.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? H + W : H) : W = H, U) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return q = W + q, U = {
        id: h++,
        callback: F,
        priorityLevel: U,
        startTime: W,
        expirationTime: q,
        sortIndex: -1
      }, W > H ? (U.sortIndex = W, l(d, U), p(f) === null && U === p(d) && (A ? (M(V), V = -1) : A = !0, ne(O, W - H))) : (U.sortIndex = q, l(f, U), _ || E || (_ = !0, Y())), U;
    }, o.unstable_shouldYield = k, o.unstable_wrapCallback = function(U) {
      var F = g;
      return function() {
        var W = g;
        g = F;
        try {
          return U.apply(this, arguments);
        } finally {
          g = W;
        }
      };
    };
  }(mo)), mo;
}
var Yc;
function Oh() {
  return Yc || (Yc = 1, po.exports = Ah()), po.exports;
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
var Xc;
function Rh() {
  return Xc || (Xc = 1, function(o) {
    o.exports = function(l) {
      function p(e, t, a, i) {
        return new pd(e, t, a, i);
      }
      function m() {
      }
      function u(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
          t += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var a = 2; a < arguments.length; a++)
            t += "&args[]=" + encodeURIComponent(arguments[a]);
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      function n(e) {
        return e === null || typeof e != "object" ? null : (e = Pf && e[Pf] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function s(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === bd ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case xl:
            return "Fragment";
          case Nl:
            return "Portal";
          case Ar:
            return "Profiler";
          case wf:
            return "StrictMode";
          case Rr:
            return "Suspense";
          case zr:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case mn:
              return (e.displayName || "Context") + ".Provider";
            case Jf:
              return (e._context.displayName || "Context") + ".Consumer";
            case Or:
              var t = e.render;
              return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Nr:
              return t = e.displayName || null, t !== null ? t : s(e.type) || "Memo";
            case yn:
              t = e._payload, e = e._init;
              try {
                return s(e(t));
              } catch {
              }
          }
        return null;
      }
      function c(e) {
        if (xr === void 0)
          try {
            throw Error();
          } catch (a) {
            var t = a.stack.trim().match(/\n( *(at )?)/);
            xr = t && t[1] || "", kf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + xr + e + kf;
      }
      function f(e, t) {
        if (!e || Br) return "";
        Br = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var i = {
            DetermineComponentFrameRoot: function() {
              try {
                if (t) {
                  var ce = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(ce.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(ce, []);
                    } catch (qe) {
                      var he = qe;
                    }
                    Reflect.construct(e, [], ce);
                  } else {
                    try {
                      ce.call();
                    } catch (qe) {
                      he = qe;
                    }
                    e.call(ce.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (qe) {
                    he = qe;
                  }
                  (ce = e()) && typeof ce.catch == "function" && ce.catch(function() {
                  });
                }
              } catch (qe) {
                if (qe && he && typeof qe.stack == "string")
                  return [qe.stack, he.stack];
              }
              return [null, null];
            }
          };
          i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var r = Object.getOwnPropertyDescriptor(
            i.DetermineComponentFrameRoot,
            "name"
          );
          r && r.configurable && Object.defineProperty(
            i.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var v = i.DetermineComponentFrameRoot(), S = v[0], D = v[1];
          if (S && D) {
            var G = S.split(`
`), I = D.split(`
`);
            for (r = i = 0; i < G.length && !G[i].includes("DetermineComponentFrameRoot"); )
              i++;
            for (; r < I.length && !I[r].includes(
              "DetermineComponentFrameRoot"
            ); )
              r++;
            if (i === G.length || r === I.length)
              for (i = G.length - 1, r = I.length - 1; 1 <= i && 0 <= r && G[i] !== I[r]; )
                r--;
            for (; 1 <= i && 0 <= r; i--, r--)
              if (G[i] !== I[r]) {
                if (i !== 1 || r !== 1)
                  do
                    if (i--, r--, 0 > r || G[i] !== I[r]) {
                      var re = `
` + G[i].replace(" at new ", " at ");
                      return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), re;
                    }
                  while (1 <= i && 0 <= r);
                break;
              }
          }
        } finally {
          Br = !1, Error.prepareStackTrace = a;
        }
        return (a = e ? e.displayName || e.name : "") ? c(a) : "";
      }
      function d(e) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            return c(e.type);
          case 16:
            return c("Lazy");
          case 13:
            return c("Suspense");
          case 19:
            return c("SuspenseList");
          case 0:
          case 15:
            return e = f(e.type, !1), e;
          case 11:
            return e = f(e.type.render, !1), e;
          case 1:
            return e = f(e.type, !0), e;
          default:
            return "";
        }
      }
      function h(e) {
        try {
          var t = "";
          do
            t += d(e), e = e.return;
          while (e);
          return t;
        } catch (a) {
          return `
Error generating stack: ` + a.message + `
` + a.stack;
        }
      }
      function y(e) {
        var t = e, a = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do
            t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
          while (e);
        }
        return t.tag === 3 ? a : null;
      }
      function g(e) {
        if (y(e) !== e)
          throw Error(u(188));
      }
      function E(e) {
        var t = e.alternate;
        if (!t) {
          if (t = y(e), t === null) throw Error(u(188));
          return t !== e ? null : e;
        }
        for (var a = e, i = t; ; ) {
          var r = a.return;
          if (r === null) break;
          var v = r.alternate;
          if (v === null) {
            if (i = r.return, i !== null) {
              a = i;
              continue;
            }
            break;
          }
          if (r.child === v.child) {
            for (v = r.child; v; ) {
              if (v === a) return g(r), e;
              if (v === i) return g(r), t;
              v = v.sibling;
            }
            throw Error(u(188));
          }
          if (a.return !== i.return) a = r, i = v;
          else {
            for (var S = !1, D = r.child; D; ) {
              if (D === a) {
                S = !0, a = r, i = v;
                break;
              }
              if (D === i) {
                S = !0, i = r, a = v;
                break;
              }
              D = D.sibling;
            }
            if (!S) {
              for (D = v.child; D; ) {
                if (D === a) {
                  S = !0, a = v, i = r;
                  break;
                }
                if (D === i) {
                  S = !0, i = v, a = r;
                  break;
                }
                D = D.sibling;
              }
              if (!S) throw Error(u(189));
            }
          }
          if (a.alternate !== i) throw Error(u(190));
        }
        if (a.tag !== 3) throw Error(u(188));
        return a.stateNode.current === a ? e : t;
      }
      function _(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null; ) {
          if (t = _(e), t !== null) return t;
          e = e.sibling;
        }
        return null;
      }
      function A(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null; ) {
          if (e.tag !== 4 && (t = A(e), t !== null))
            return t;
          e = e.sibling;
        }
        return null;
      }
      function T(e) {
        return { current: e };
      }
      function M(e) {
        0 > Gl || (e.current = qr[Gl], qr[Gl] = null, Gl--);
      }
      function b(e, t) {
        Gl++, qr[Gl] = e.current, e.current = t;
      }
      function z(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (jv(e) / Hv | 0) | 0;
      }
      function O(e) {
        var t = e & 42;
        if (t !== 0) return t;
        switch (e & -e) {
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
            return e & 4194176;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return e & 62914560;
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
            return e;
        }
      }
      function x(e, t) {
        var a = e.pendingLanes;
        if (a === 0) return 0;
        var i = 0, r = e.suspendedLanes, v = e.pingedLanes, S = e.warmLanes;
        e = e.finishedLanes !== 0;
        var D = a & 134217727;
        return D !== 0 ? (a = D & ~r, a !== 0 ? i = O(a) : (v &= D, v !== 0 ? i = O(v) : e || (S = D & ~S, S !== 0 && (i = O(S))))) : (D = a & ~r, D !== 0 ? i = O(D) : v !== 0 ? i = O(v) : e || (S = a & ~S, S !== 0 && (i = O(S)))), i === 0 ? 0 : t !== 0 && t !== i && (t & r) === 0 && (r = i & -i, S = t & -t, r >= S || r === 32 && (S & 4194176) !== 0) ? t : i;
      }
      function V(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
      }
      function j(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
          case 8:
            return t + 250;
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
            return t + 5e3;
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
      function X() {
        var e = si;
        return si <<= 1, (si & 4194176) === 0 && (si = 128), e;
      }
      function k() {
        var e = di;
        return di <<= 1, (di & 62914560) === 0 && (di = 4194304), e;
      }
      function w(e) {
        for (var t = [], a = 0; 31 > a; a++) t.push(e);
        return t;
      }
      function te(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
      }
      function B(e, t, a, i, r, v) {
        var S = e.pendingLanes;
        e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
        var D = e.entanglements, G = e.expirationTimes, I = e.hiddenUpdates;
        for (a = S & ~a; 0 < a; ) {
          var re = 31 - ia(a), ce = 1 << re;
          D[re] = 0, G[re] = -1;
          var he = I[re];
          if (he !== null)
            for (I[re] = null, re = 0; re < he.length; re++) {
              var qe = he[re];
              qe !== null && (qe.lane &= -536870913);
            }
          a &= ~ce;
        }
        i !== 0 && Q(e, i, 0), v !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= v & ~(S & ~t));
      }
      function Q(e, t, a) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var i = 31 - ia(t);
        e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194218;
      }
      function Y(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a; ) {
          var i = 31 - ia(a), r = 1 << i;
          r & t | e[i] & t && (e[i] |= t), a &= ~r;
        }
      }
      function ne(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function U(e) {
        if (ra && typeof ra.onCommitFiberRoot == "function")
          try {
            ra.onCommitFiberRoot(
              Ou,
              e,
              void 0,
              (e.current.flags & 128) === 128
            );
          } catch {
          }
      }
      function F(e) {
        if (typeof Xv == "function" && Qv(e), ra && typeof ra.setStrictMode == "function")
          try {
            ra.setStrictMode(Ou, e);
          } catch {
          }
      }
      function W(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
      }
      function H(e, t) {
        if (typeof e == "object" && e !== null) {
          var a = Tc.get(e);
          return a !== void 0 ? a : (t = {
            value: e,
            source: t,
            stack: h(t)
          }, Tc.set(e, t), t);
        }
        return {
          value: e,
          source: t,
          stack: h(t)
        };
      }
      function q(e, t) {
        Hl[Vl++] = pi, Hl[Vl++] = hi, hi = e, pi = t;
      }
      function C(e, t, a) {
        ma[ya++] = Ia, ma[ya++] = $a, ma[ya++] = $n, $n = e;
        var i = Ia;
        e = $a;
        var r = 32 - ia(i) - 1;
        i &= ~(1 << r), a += 1;
        var v = 32 - ia(t) + r;
        if (30 < v) {
          var S = r - r % 5;
          v = (i & (1 << S) - 1).toString(32), i >>= S, r -= S, Ia = 1 << 32 - ia(t) + r | a << r | i, $a = v + e;
        } else
          Ia = 1 << v | a << r | i, $a = e;
      }
      function R(e) {
        e.return !== null && (q(e, 1), C(e, 1, 0));
      }
      function J(e) {
        for (; e === hi; )
          hi = Hl[--Vl], Hl[Vl] = null, pi = Hl[--Vl], Hl[Vl] = null;
        for (; e === $n; )
          $n = ma[--ya], ma[ya] = null, $a = ma[--ya], ma[ya] = null, Ia = ma[--ya], ma[ya] = null;
      }
      function L(e, t) {
        b(Sn, t), b(Ru, e), b(Vt, null), e = Ud(t), M(Vt), b(Vt, e);
      }
      function K() {
        M(Vt), M(Ru), M(Sn);
      }
      function le(e) {
        e.memoizedState !== null && b(mi, e);
        var t = Vt.current, a = Md(t, e.type);
        t !== a && (b(Ru, e), b(Vt, a));
      }
      function $(e) {
        Ru.current === e && (M(Vt), M(Ru)), mi.current === e && (M(mi), ka ? In._currentValue = Bl : In._currentValue2 = Bl);
      }
      function ae(e) {
        var t = Error(u(418, ""));
        throw xe(H(t, e)), Qr;
      }
      function se(e, t) {
        if (!ha) throw Error(u(175));
        gv(
          e.stateNode,
          e.type,
          e.memoizedProps,
          t,
          e
        ) || ae(e);
      }
      function Se(e) {
        for (Jt = e.return; Jt; )
          switch (Jt.tag) {
            case 3:
            case 27:
              Ba = !0;
              return;
            case 5:
            case 13:
              Ba = !1;
              return;
            default:
              Jt = Jt.return;
          }
      }
      function oe(e) {
        if (!ha || e !== Jt) return !1;
        if (!Pe) return Se(e), Pe = !0, !1;
        var t = !1;
        if (Ft ? e.tag !== 3 && e.tag !== 27 && (e.tag !== 5 || dc(e.type) && !ci(e.type, e.memoizedProps)) && (t = !0) : e.tag !== 3 && (e.tag !== 5 || dc(e.type) && !ci(e.type, e.memoizedProps)) && (t = !0), t && Kt && ae(e), Se(e), e.tag === 13) {
          if (!ha) throw Error(u(316));
          if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
          Kt = bv(e);
        } else
          Kt = Jt ? cc(e.stateNode) : null;
        return !0;
      }
      function ue() {
        ha && (Kt = Jt = null, Pe = !1);
      }
      function xe(e) {
        za === null ? za = [e] : za.push(e);
      }
      function Ae() {
        for (var e = Ll, t = Fr = Ll = 0; t < e; ) {
          var a = ga[t];
          ga[t++] = null;
          var i = ga[t];
          ga[t++] = null;
          var r = ga[t];
          ga[t++] = null;
          var v = ga[t];
          if (ga[t++] = null, i !== null && r !== null) {
            var S = i.pending;
            S === null ? r.next = r : (r.next = S.next, S.next = r), i.pending = r;
          }
          v !== 0 && fe(a, r, v);
        }
      }
      function pe(e, t, a, i) {
        ga[Ll++] = e, ga[Ll++] = t, ga[Ll++] = a, ga[Ll++] = i, Fr |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
      }
      function Ee(e, t, a, i) {
        return pe(e, t, a, i), ge(e);
      }
      function be(e, t) {
        return pe(e, null, null, t), ge(e);
      }
      function fe(e, t, a) {
        e.lanes |= a;
        var i = e.alternate;
        i !== null && (i.lanes |= a);
        for (var r = !1, v = e.return; v !== null; )
          v.childLanes |= a, i = v.alternate, i !== null && (i.childLanes |= a), v.tag === 22 && (e = v.stateNode, e === null || e._visibility & 1 || (r = !0)), e = v, v = v.return;
        r && t !== null && e.tag === 3 && (v = e.stateNode, r = 31 - ia(a), v = v.hiddenUpdates, e = v[r], e === null ? v[r] = [t] : e.push(t), t.lane = a | 536870912);
      }
      function ge(e) {
        if (50 < Lu)
          throw Lu = 0, io = null, Error(u(185));
        for (var t = e.return; t !== null; )
          e = t, t = e.return;
        return e.tag === 3 ? e.stateNode : null;
      }
      function ve(e) {
        e !== ql && e.next === null && (ql === null ? yi = ql = e : ql = ql.next = e), gi = !0, Kr || (Kr = !0, We(He));
      }
      function ee(e, t) {
        if (!Zr && gi) {
          Zr = !0;
          do
            for (var a = !1, i = yi; i !== null; ) {
              if (e !== 0) {
                var r = i.pendingLanes;
                if (r === 0) var v = 0;
                else {
                  var S = i.suspendedLanes, D = i.pingedLanes;
                  v = (1 << 31 - ia(42 | e) + 1) - 1, v &= r & ~(S & ~D), v = v & 201326677 ? v & 201326677 | 1 : v ? v | 2 : 0;
                }
                v !== 0 && (a = !0, de(i, v));
              } else
                v = we, v = x(
                  i,
                  i === ct ? v : 0
                ), (v & 3) === 0 || V(i, v) || (a = !0, de(i, v));
              i = i.next;
            }
          while (a);
          Zr = !1;
        }
      }
      function He() {
        gi = Kr = !1;
        var e = 0;
        Yl !== 0 && (xd() && (e = Yl), Yl = 0);
        for (var t = Ra(), a = null, i = yi; i !== null; ) {
          var r = i.next, v = me(i, t);
          v === 0 ? (i.next = null, a === null ? yi = r : a.next = r, r === null && (ql = a)) : (a = i, (e !== 0 || (v & 3) !== 0) && (gi = !0)), i = r;
        }
        ee(e);
      }
      function me(e, t) {
        for (var a = e.suspendedLanes, i = e.pingedLanes, r = e.expirationTimes, v = e.pendingLanes & -62914561; 0 < v; ) {
          var S = 31 - ia(v), D = 1 << S, G = r[S];
          G === -1 ? ((D & a) === 0 || (D & i) !== 0) && (r[S] = j(D, t)) : G <= t && (e.expiredLanes |= D), v &= ~D;
        }
        if (t = ct, a = we, a = x(
          e,
          e === t ? a : 0
        ), i = e.callbackNode, a === 0 || e === t && st === 2 || e.cancelPendingCommit !== null)
          return i !== null && i !== null && Yr(i), e.callbackNode = null, e.callbackPriority = 0;
        if ((a & 3) === 0 || V(e, a)) {
          if (t = a & -a, t === e.callbackPriority) return t;
          switch (i !== null && Yr(i), ne(a)) {
            case 2:
            case 8:
              a = qv;
              break;
            case 32:
              a = Xr;
              break;
            case 268435456:
              a = Yv;
              break;
            default:
              a = Xr;
          }
          return i = Ue.bind(null, e), a = vi(a, i), e.callbackPriority = t, e.callbackNode = a, t;
        }
        return i !== null && i !== null && Yr(i), e.callbackPriority = 2, e.callbackNode = null, 2;
      }
      function Ue(e, t) {
        var a = e.callbackNode;
        if (Wn() && e.callbackNode !== a)
          return null;
        var i = we;
        return i = x(
          e,
          e === ct ? i : 0
        ), i === 0 ? null : (Cf(e, i, t), me(e, Ra()), e.callbackNode != null && e.callbackNode === a ? Ue.bind(null, e) : null);
      }
      function de(e, t) {
        if (Wn()) return null;
        Cf(e, t, !0);
      }
      function We(e) {
        Ld ? qd(function() {
          (rt & 6) !== 0 ? vi(_c, e) : e();
        }) : vi(_c, e);
      }
      function _e() {
        return Yl === 0 && (Yl = X()), Yl;
      }
      function Ce(e, t) {
        if (zu === null) {
          var a = zu = [];
          wr = 0, Xl = _e(), Ql = {
            status: "pending",
            value: void 0,
            then: function(i) {
              a.push(i);
            }
          };
        }
        return wr++, t.then(Oe, Oe), t;
      }
      function Oe() {
        if (--wr === 0 && zu !== null) {
          Ql !== null && (Ql.status = "fulfilled");
          var e = zu;
          zu = null, Xl = 0, Ql = null;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
      }
      function Ve(e, t) {
        var a = [], i = {
          status: "pending",
          value: null,
          reason: null,
          then: function(r) {
            a.push(r);
          }
        };
        return e.then(
          function() {
            i.status = "fulfilled", i.value = t;
            for (var r = 0; r < a.length; r++) (0, a[r])(t);
          },
          function(r) {
            for (i.status = "rejected", i.reason = r, r = 0; r < a.length; r++)
              (0, a[r])(void 0);
          }
        ), i;
      }
      function $e(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null
        };
      }
      function ot(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null
        });
      }
      function Be(e) {
        return { lane: e, tag: 0, payload: null, callback: null, next: null };
      }
      function Ge(e, t, a) {
        var i = e.updateQueue;
        if (i === null) return null;
        if (i = i.shared, (rt & 2) !== 0) {
          var r = i.pending;
          return r === null ? t.next = t : (t.next = r.next, r.next = t), i.pending = t, t = ge(e), fe(e, null, a), t;
        }
        return pe(e, i, t, a), ge(e);
      }
      function Me(e, t, a) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194176) !== 0)) {
          var i = t.lanes;
          i &= e.pendingLanes, a |= i, t.lanes = a, Y(e, a);
        }
      }
      function ft(e, t) {
        var a = e.updateQueue, i = e.alternate;
        if (i !== null && (i = i.updateQueue, a === i)) {
          var r = null, v = null;
          if (a = a.firstBaseUpdate, a !== null) {
            do {
              var S = {
                lane: a.lane,
                tag: a.tag,
                payload: a.payload,
                callback: null,
                next: null
              };
              v === null ? r = v = S : v = v.next = S, a = a.next;
            } while (a !== null);
            v === null ? r = v = t : v = v.next = t;
          } else r = v = t;
          a = {
            baseState: i.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: v,
            shared: i.shared,
            callbacks: i.callbacks
          }, e.updateQueue = a;
          return;
        }
        e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
      }
      function et() {
        if (Jr) {
          var e = Ql;
          if (e !== null) throw e;
        }
      }
      function Tt(e, t, a, i) {
        Jr = !1;
        var r = e.updateQueue;
        En = !1;
        var v = r.firstBaseUpdate, S = r.lastBaseUpdate, D = r.shared.pending;
        if (D !== null) {
          r.shared.pending = null;
          var G = D, I = G.next;
          G.next = null, S === null ? v = I : S.next = I, S = G;
          var re = e.alternate;
          re !== null && (re = re.updateQueue, D = re.lastBaseUpdate, D !== S && (D === null ? re.firstBaseUpdate = I : D.next = I, re.lastBaseUpdate = G));
        }
        if (v !== null) {
          var ce = r.baseState;
          S = 0, re = I = G = null, D = v;
          do {
            var he = D.lane & -536870913, qe = he !== D.lane;
            if (qe ? (we & he) === he : (i & he) === he) {
              he !== 0 && he === Xl && (Jr = !0), re !== null && (re = re.next = {
                lane: 0,
                tag: D.tag,
                payload: D.payload,
                callback: null,
                next: null
              });
              e: {
                var ba = e, qu = D;
                he = t;
                var ol = a;
                switch (qu.tag) {
                  case 1:
                    if (ba = qu.payload, typeof ba == "function") {
                      ce = ba.call(
                        ol,
                        ce,
                        he
                      );
                      break e;
                    }
                    ce = ba;
                    break e;
                  case 3:
                    ba.flags = ba.flags & -65537 | 128;
                  case 0:
                    if (ba = qu.payload, he = typeof ba == "function" ? ba.call(ol, ce, he) : ba, he == null) break e;
                    ce = Dr({}, ce, he);
                    break e;
                  case 2:
                    En = !0;
                }
              }
              he = D.callback, he !== null && (e.flags |= 64, qe && (e.flags |= 8192), qe = r.callbacks, qe === null ? r.callbacks = [he] : qe.push(he));
            } else
              qe = {
                lane: he,
                tag: D.tag,
                payload: D.payload,
                callback: D.callback,
                next: null
              }, re === null ? (I = re = qe, G = ce) : re = re.next = qe, S |= he;
            if (D = D.next, D === null) {
              if (D = r.shared.pending, D === null)
                break;
              qe = D, D = qe.next, qe.next = null, r.lastBaseUpdate = qe, r.shared.pending = null;
            }
          } while (!0);
          re === null && (G = ce), r.baseState = G, r.firstBaseUpdate = I, r.lastBaseUpdate = re, v === null && (r.shared.lanes = 0), Tn |= S, e.lanes = S, e.memoizedState = ce;
        }
      }
      function tt(e, t) {
        if (typeof e != "function")
          throw Error(u(191, e));
        e.call(t);
      }
      function Re(e, t) {
        var a = e.callbacks;
        if (a !== null)
          for (e.callbacks = null, e = 0; e < a.length; e++)
            tt(a[e], t);
      }
      function Ze(e, t) {
        if (oa(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
          return !1;
        var a = Object.keys(e), i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (i = 0; i < a.length; i++) {
          var r = a[i];
          if (!Fv.call(t, r) || !oa(e[r], t[r]))
            return !1;
        }
        return !0;
      }
      function Ta(e) {
        return e = e.status, e === "fulfilled" || e === "rejected";
      }
      function Je() {
      }
      function Xe(e, t, a) {
        switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Je, Je), t = a), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, e === Nu ? Error(u(483)) : e;
          default:
            if (typeof t.status == "string") t.then(Je, Je);
            else {
              if (e = ct, e !== null && 100 < e.shellSuspendCounter)
                throw Error(u(482));
              e = t, e.status = "pending", e.then(
                function(i) {
                  if (t.status === "pending") {
                    var r = t;
                    r.status = "fulfilled", r.value = i;
                  }
                },
                function(i) {
                  if (t.status === "pending") {
                    var r = t;
                    r.status = "rejected", r.reason = i;
                  }
                }
              );
            }
            switch (t.status) {
              case "fulfilled":
                return t.value;
              case "rejected":
                throw e = t.reason, e === Nu ? Error(u(483)) : e;
            }
            throw Fl = t, Nu;
        }
      }
      function mt() {
        if (Fl === null) throw Error(u(459));
        var e = Fl;
        return Fl = null, e;
      }
      function at(e) {
        var t = xu;
        return xu += 1, Kl === null && (Kl = []), Xe(Kl, e, t);
      }
      function ze(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null;
      }
      function nt(e, t) {
        throw t.$$typeof === gd ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(
          u(
            31,
            e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
          )
        ));
      }
      function Nt(e) {
        var t = e._init;
        return t(e._payload);
      }
      function At(e) {
        function t(Z, N) {
          if (e) {
            var P = Z.deletions;
            P === null ? (Z.deletions = [N], Z.flags |= 16) : P.push(N);
          }
        }
        function a(Z, N) {
          if (!e) return null;
          for (; N !== null; )
            t(Z, N), N = N.sibling;
          return null;
        }
        function i(Z) {
          for (var N = /* @__PURE__ */ new Map(); Z !== null; )
            Z.key !== null ? N.set(Z.key, Z) : N.set(Z.index, Z), Z = Z.sibling;
          return N;
        }
        function r(Z, N) {
          return Z = pn(Z, N), Z.index = 0, Z.sibling = null, Z;
        }
        function v(Z, N, P) {
          return Z.index = P, e ? (P = Z.alternate, P !== null ? (P = P.index, P < N ? (Z.flags |= 33554434, N) : P) : (Z.flags |= 33554434, N)) : (Z.flags |= 1048576, N);
        }
        function S(Z) {
          return e && Z.alternate === null && (Z.flags |= 33554434), Z;
        }
        function D(Z, N, P, ie) {
          return N === null || N.tag !== 6 ? (N = Ur(P, Z.mode, ie), N.return = Z, N) : (N = r(N, P), N.return = Z, N);
        }
        function G(Z, N, P, ie) {
          var De = P.type;
          return De === xl ? re(
            Z,
            N,
            P.props.children,
            ie,
            P.key
          ) : N !== null && (N.elementType === De || typeof De == "object" && De !== null && De.$$typeof === yn && Nt(De) === N.type) ? (N = r(N, P.props), ze(N, P), N.return = Z, N) : (N = ri(
            P.type,
            P.key,
            P.props,
            null,
            Z.mode,
            ie
          ), ze(N, P), N.return = Z, N);
        }
        function I(Z, N, P, ie) {
          return N === null || N.tag !== 4 || N.stateNode.containerInfo !== P.containerInfo || N.stateNode.implementation !== P.implementation ? (N = Mr(P, Z.mode, ie), N.return = Z, N) : (N = r(N, P.children || []), N.return = Z, N);
        }
        function re(Z, N, P, ie, De) {
          return N === null || N.tag !== 7 ? (N = Pn(
            P,
            Z.mode,
            ie,
            De
          ), N.return = Z, N) : (N = r(N, P), N.return = Z, N);
        }
        function ce(Z, N, P) {
          if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
            return N = Ur(
              "" + N,
              Z.mode,
              P
            ), N.return = Z, N;
          if (typeof N == "object" && N !== null) {
            switch (N.$$typeof) {
              case oi:
                return P = ri(
                  N.type,
                  N.key,
                  N.props,
                  null,
                  Z.mode,
                  P
                ), ze(P, N), P.return = Z, P;
              case Nl:
                return N = Mr(
                  N,
                  Z.mode,
                  P
                ), N.return = Z, N;
              case yn:
                var ie = N._init;
                return N = ie(N._payload), ce(Z, N, P);
            }
            if (fi(N) || n(N))
              return N = Pn(
                N,
                Z.mode,
                P,
                null
              ), N.return = Z, N;
            if (typeof N.then == "function")
              return ce(Z, at(N), P);
            if (N.$$typeof === mn)
              return ce(
                Z,
                ti(Z, N),
                P
              );
            nt(Z, N);
          }
          return null;
        }
        function he(Z, N, P, ie) {
          var De = N !== null ? N.key : null;
          if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint")
            return De !== null ? null : D(Z, N, "" + P, ie);
          if (typeof P == "object" && P !== null) {
            switch (P.$$typeof) {
              case oi:
                return P.key === De ? G(Z, N, P, ie) : null;
              case Nl:
                return P.key === De ? I(Z, N, P, ie) : null;
              case yn:
                return De = P._init, P = De(P._payload), he(Z, N, P, ie);
            }
            if (fi(P) || n(P))
              return De !== null ? null : re(Z, N, P, ie, null);
            if (typeof P.then == "function")
              return he(
                Z,
                N,
                at(P),
                ie
              );
            if (P.$$typeof === mn)
              return he(
                Z,
                N,
                ti(Z, P),
                ie
              );
            nt(Z, P);
          }
          return null;
        }
        function qe(Z, N, P, ie, De) {
          if (typeof ie == "string" && ie !== "" || typeof ie == "number" || typeof ie == "bigint")
            return Z = Z.get(P) || null, D(N, Z, "" + ie, De);
          if (typeof ie == "object" && ie !== null) {
            switch (ie.$$typeof) {
              case oi:
                return Z = Z.get(
                  ie.key === null ? P : ie.key
                ) || null, G(N, Z, ie, De);
              case Nl:
                return Z = Z.get(
                  ie.key === null ? P : ie.key
                ) || null, I(N, Z, ie, De);
              case yn:
                var dt = ie._init;
                return ie = dt(ie._payload), qe(
                  Z,
                  N,
                  P,
                  ie,
                  De
                );
            }
            if (fi(ie) || n(ie))
              return Z = Z.get(P) || null, re(N, Z, ie, De, null);
            if (typeof ie.then == "function")
              return qe(
                Z,
                N,
                P,
                at(ie),
                De
              );
            if (ie.$$typeof === mn)
              return qe(
                Z,
                N,
                P,
                ti(N, ie),
                De
              );
            nt(N, ie);
          }
          return null;
        }
        function ba(Z, N, P, ie) {
          for (var De = null, dt = null, Ne = N, ke = N = 0, jt = null; Ne !== null && ke < P.length; ke++) {
            Ne.index > ke ? (jt = Ne, Ne = null) : jt = Ne.sibling;
            var Ie = he(
              Z,
              Ne,
              P[ke],
              ie
            );
            if (Ie === null) {
              Ne === null && (Ne = jt);
              break;
            }
            e && Ne && Ie.alternate === null && t(Z, Ne), N = v(Ie, N, ke), dt === null ? De = Ie : dt.sibling = Ie, dt = Ie, Ne = jt;
          }
          if (ke === P.length)
            return a(Z, Ne), Pe && q(Z, ke), De;
          if (Ne === null) {
            for (; ke < P.length; ke++)
              Ne = ce(Z, P[ke], ie), Ne !== null && (N = v(
                Ne,
                N,
                ke
              ), dt === null ? De = Ne : dt.sibling = Ne, dt = Ne);
            return Pe && q(Z, ke), De;
          }
          for (Ne = i(Ne); ke < P.length; ke++)
            jt = qe(
              Ne,
              Z,
              ke,
              P[ke],
              ie
            ), jt !== null && (e && jt.alternate !== null && Ne.delete(
              jt.key === null ? ke : jt.key
            ), N = v(
              jt,
              N,
              ke
            ), dt === null ? De = jt : dt.sibling = jt, dt = jt);
          return e && Ne.forEach(function(Mn) {
            return t(Z, Mn);
          }), Pe && q(Z, ke), De;
        }
        function qu(Z, N, P, ie) {
          if (P == null) throw Error(u(151));
          for (var De = null, dt = null, Ne = N, ke = N = 0, jt = null, Ie = P.next(); Ne !== null && !Ie.done; ke++, Ie = P.next()) {
            Ne.index > ke ? (jt = Ne, Ne = null) : jt = Ne.sibling;
            var Mn = he(Z, Ne, Ie.value, ie);
            if (Mn === null) {
              Ne === null && (Ne = jt);
              break;
            }
            e && Ne && Mn.alternate === null && t(Z, Ne), N = v(Mn, N, ke), dt === null ? De = Mn : dt.sibling = Mn, dt = Mn, Ne = jt;
          }
          if (Ie.done)
            return a(Z, Ne), Pe && q(Z, ke), De;
          if (Ne === null) {
            for (; !Ie.done; ke++, Ie = P.next())
              Ie = ce(Z, Ie.value, ie), Ie !== null && (N = v(
                Ie,
                N,
                ke
              ), dt === null ? De = Ie : dt.sibling = Ie, dt = Ie);
            return Pe && q(Z, ke), De;
          }
          for (Ne = i(Ne); !Ie.done; ke++, Ie = P.next())
            Ie = qe(
              Ne,
              Z,
              ke,
              Ie.value,
              ie
            ), Ie !== null && (e && Ie.alternate !== null && Ne.delete(Ie.key === null ? ke : Ie.key), N = v(Ie, N, ke), dt === null ? De = Ie : dt.sibling = Ie, dt = Ie);
          return e && Ne.forEach(function(kv) {
            return t(Z, kv);
          }), Pe && q(Z, ke), De;
        }
        function ol(Z, N, P, ie) {
          if (typeof P == "object" && P !== null && P.type === xl && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
            switch (P.$$typeof) {
              case oi:
                e: {
                  for (var De = P.key; N !== null; ) {
                    if (N.key === De) {
                      if (De = P.type, De === xl) {
                        if (N.tag === 7) {
                          a(
                            Z,
                            N.sibling
                          ), ie = r(
                            N,
                            P.props.children
                          ), ie.return = Z, Z = ie;
                          break e;
                        }
                      } else if (N.elementType === De || typeof De == "object" && De !== null && De.$$typeof === yn && Nt(De) === N.type) {
                        a(
                          Z,
                          N.sibling
                        ), ie = r(N, P.props), ze(ie, P), ie.return = Z, Z = ie;
                        break e;
                      }
                      a(Z, N);
                      break;
                    } else t(Z, N);
                    N = N.sibling;
                  }
                  P.type === xl ? (ie = Pn(
                    P.props.children,
                    Z.mode,
                    ie,
                    P.key
                  ), ie.return = Z, Z = ie) : (ie = ri(
                    P.type,
                    P.key,
                    P.props,
                    null,
                    Z.mode,
                    ie
                  ), ze(ie, P), ie.return = Z, Z = ie);
                }
                return S(Z);
              case Nl:
                e: {
                  for (De = P.key; N !== null; ) {
                    if (N.key === De)
                      if (N.tag === 4 && N.stateNode.containerInfo === P.containerInfo && N.stateNode.implementation === P.implementation) {
                        a(
                          Z,
                          N.sibling
                        ), ie = r(
                          N,
                          P.children || []
                        ), ie.return = Z, Z = ie;
                        break e;
                      } else {
                        a(Z, N);
                        break;
                      }
                    else t(Z, N);
                    N = N.sibling;
                  }
                  ie = Mr(P, Z.mode, ie), ie.return = Z, Z = ie;
                }
                return S(Z);
              case yn:
                return De = P._init, P = De(P._payload), ol(
                  Z,
                  N,
                  P,
                  ie
                );
            }
            if (fi(P))
              return ba(
                Z,
                N,
                P,
                ie
              );
            if (n(P)) {
              if (De = n(P), typeof De != "function")
                throw Error(u(150));
              return P = De.call(P), qu(
                Z,
                N,
                P,
                ie
              );
            }
            if (typeof P.then == "function")
              return ol(
                Z,
                N,
                at(P),
                ie
              );
            if (P.$$typeof === mn)
              return ol(
                Z,
                N,
                ti(Z, P),
                ie
              );
            nt(Z, P);
          }
          return typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint" ? (P = "" + P, N !== null && N.tag === 6 ? (a(Z, N.sibling), ie = r(N, P), ie.return = Z, Z = ie) : (a(Z, N), ie = Ur(P, Z.mode, ie), ie.return = Z, Z = ie), S(Z)) : a(Z, N);
        }
        return function(Z, N, P, ie) {
          try {
            xu = 0;
            var De = ol(
              Z,
              N,
              P,
              ie
            );
            return Kl = null, De;
          } catch (Ne) {
            if (Ne === Nu) throw Ne;
            var dt = p(29, Ne, null, Z.mode);
            return dt.lanes = ie, dt.return = Z, dt;
          } finally {
          }
        };
      }
      function gt(e, t) {
        e = nn, b(Ei, e), b(Zl, t), nn = e | t.baseLanes;
      }
      function Zt() {
        b(Ei, nn), b(Zl, Zl.current);
      }
      function sa() {
        nn = Ei.current, M(Zl), M(Ei);
      }
      function xt(e) {
        var t = e.alternate;
        b(zt, zt.current & 1), b(Sa, e), Ga === null && (t === null || Zl.current !== null || t.memoizedState !== null) && (Ga = e);
      }
      function Ua(e) {
        if (e.tag === 22) {
          if (b(zt, zt.current), b(Sa, e), Ga === null) {
            var t = e.alternate;
            t !== null && t.memoizedState !== null && (Ga = e);
          }
        } else qt();
      }
      function qt() {
        b(zt, zt.current), b(Sa, Sa.current);
      }
      function Ot(e) {
        M(Sa), Ga === e && (Ga = null), M(zt);
      }
      function Ut(e) {
        for (var t = e; t !== null; ) {
          if (t.tag === 13) {
            var a = t.memoizedState;
            if (a !== null && (a = a.dehydrated, a === null || Hr(a) || Vr(a)))
              return t;
          } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if ((t.flags & 128) !== 0) return t;
          } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
        return null;
      }
      function lt() {
        throw Error(u(321));
      }
      function hl(e, t) {
        if (t === null) return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
          if (!oa(e[a], t[a])) return !1;
        return !0;
      }
      function An(e, t, a, i, r, v) {
        return bn = v, Qe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, je.H = e === null || e.memoizedState === null ? al : _n, tl = !1, v = a(i, r), tl = !1, wl && (v = uu(
          t,
          a,
          i,
          r
        )), Wu(e), v;
      }
      function Wu(e) {
        je.H = ja;
        var t = it !== null && it.next !== null;
        if (bn = 0, Ct = it = Qe = null, bi = !1, Bu = 0, Jl = null, t) throw Error(u(300));
        e === null || Bt || (e = e.dependencies, e !== null && ei(e) && (Bt = !0));
      }
      function uu(e, t, a, i) {
        Qe = e;
        var r = 0;
        do {
          if (wl && (Jl = null), Bu = 0, wl = !1, 25 <= r) throw Error(u(301));
          if (r += 1, Ct = it = null, e.updateQueue != null) {
            var v = e.updateQueue;
            v.lastEffect = null, v.events = null, v.stores = null, v.memoCache != null && (v.memoCache.index = 0);
          }
          je.H = nl, v = t(a, i);
        } while (wl);
        return v;
      }
      function pl() {
        var e = je.H, t = e.useState()[0];
        return t = typeof t.then == "function" ? Va(t) : t, e = e.useState()[0], (it !== null ? it.memoizedState : null) !== e && (Qe.flags |= 1024), t;
      }
      function On() {
        var e = _i !== 0;
        return _i = 0, e;
      }
      function iu(e, t, a) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
      }
      function ml(e) {
        if (bi) {
          for (e = e.memoizedState; e !== null; ) {
            var t = e.queue;
            t !== null && (t.pending = null), e = e.next;
          }
          bi = !1;
        }
        bn = 0, Ct = it = Qe = null, wl = !1, Bu = _i = 0, Jl = null;
      }
      function Rt() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return Ct === null ? Qe.memoizedState = Ct = e : Ct = Ct.next = e, Ct;
      }
      function ht() {
        if (it === null) {
          var e = Qe.alternate;
          e = e !== null ? e.memoizedState : null;
        } else e = it.next;
        var t = Ct === null ? Qe.memoizedState : Ct.next;
        if (t !== null)
          Ct = t, it = e;
        else {
          if (e === null)
            throw Qe.alternate === null ? Error(u(467)) : Error(u(310));
          it = e, e = {
            memoizedState: it.memoizedState,
            baseState: it.baseState,
            baseQueue: it.baseQueue,
            queue: it.queue,
            next: null
          }, Ct === null ? Qe.memoizedState = Ct = e : Ct = Ct.next = e;
        }
        return Ct;
      }
      function Va(e) {
        var t = Bu;
        return Bu += 1, Jl === null && (Jl = []), e = Xe(Jl, e, t), t = Qe, (Ct === null ? t.memoizedState : Ct.next) === null && (t = t.alternate, je.H = t === null || t.memoizedState === null ? al : _n), e;
      }
      function Te(e) {
        if (e !== null && typeof e == "object") {
          if (typeof e.then == "function") return Va(e);
          if (e.$$typeof === mn) return Xt(e);
        }
        throw Error(u(438, String(e)));
      }
      function La(e) {
        var t = null, a = Qe.updateQueue;
        if (a !== null && (t = a.memoCache), t == null) {
          var i = Qe.alternate;
          i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
            data: i.data.map(function(r) {
              return r.slice();
            }),
            index: 0
          })));
        }
        if (t == null && (t = { data: [], index: 0 }), a === null && (a = Pr(), Qe.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
          for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
            a[i] = Ed;
        return t.index++, a;
      }
      function Ma(e, t) {
        return typeof t == "function" ? t(e) : t;
      }
      function Ca(e) {
        var t = ht();
        return un(t, it, e);
      }
      function un(e, t, a) {
        var i = e.queue;
        if (i === null) throw Error(u(311));
        i.lastRenderedReducer = a;
        var r = e.baseQueue, v = i.pending;
        if (v !== null) {
          if (r !== null) {
            var S = r.next;
            r.next = v.next, v.next = S;
          }
          t.baseQueue = r = v, i.pending = null;
        }
        if (v = e.baseState, r === null) e.memoizedState = v;
        else {
          t = r.next;
          var D = S = null, G = null, I = t, re = !1;
          do {
            var ce = I.lane & -536870913;
            if (ce !== I.lane ? (we & ce) === ce : (bn & ce) === ce) {
              var he = I.revertLane;
              if (he === 0)
                G !== null && (G = G.next = {
                  lane: 0,
                  revertLane: 0,
                  action: I.action,
                  hasEagerState: I.hasEagerState,
                  eagerState: I.eagerState,
                  next: null
                }), ce === Xl && (re = !0);
              else if ((bn & he) === he) {
                I = I.next, he === Xl && (re = !0);
                continue;
              } else
                ce = {
                  lane: 0,
                  revertLane: I.revertLane,
                  action: I.action,
                  hasEagerState: I.hasEagerState,
                  eagerState: I.eagerState,
                  next: null
                }, G === null ? (D = G = ce, S = v) : G = G.next = ce, Qe.lanes |= he, Tn |= he;
              ce = I.action, tl && a(v, ce), v = I.hasEagerState ? I.eagerState : a(v, ce);
            } else
              he = {
                lane: ce,
                revertLane: I.revertLane,
                action: I.action,
                hasEagerState: I.hasEagerState,
                eagerState: I.eagerState,
                next: null
              }, G === null ? (D = G = he, S = v) : G = G.next = he, Qe.lanes |= ce, Tn |= ce;
            I = I.next;
          } while (I !== null && I !== t);
          if (G === null ? S = v : G.next = D, !oa(v, e.memoizedState) && (Bt = !0, re && (a = Ql, a !== null)))
            throw a;
          e.memoizedState = v, e.baseState = S, e.baseQueue = G, i.lastRenderedState = v;
        }
        return r === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
      }
      function yl(e) {
        var t = ht(), a = t.queue;
        if (a === null) throw Error(u(311));
        a.lastRenderedReducer = e;
        var i = a.dispatch, r = a.pending, v = t.memoizedState;
        if (r !== null) {
          a.pending = null;
          var S = r = r.next;
          do
            v = e(v, S.action), S = S.next;
          while (S !== r);
          oa(v, t.memoizedState) || (Bt = !0), t.memoizedState = v, t.baseQueue === null && (t.baseState = v), a.lastRenderedState = v;
        }
        return [v, i];
      }
      function gl(e, t, a) {
        var i = Qe, r = ht(), v = Pe;
        if (v) {
          if (a === void 0)
            throw Error(u(407));
          a = a();
        } else a = t();
        var S = !oa(
          (it || r).memoizedState,
          a
        );
        if (S && (r.memoizedState = a, Bt = !0), r = r.queue, Ya(ru.bind(null, i, r, e), [
          e
        ]), r.getSnapshot !== t || S || Ct !== null && Ct.memoizedState.tag & 1) {
          if (i.flags |= 2048, Da(
            9,
            zn.bind(
              null,
              i,
              r,
              a,
              t
            ),
            { destroy: void 0 },
            null
          ), ct === null) throw Error(u(349));
          v || (bn & 60) !== 0 || Rn(i, t, a);
        }
        return a;
      }
      function Rn(e, t, a) {
        e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Qe.updateQueue, t === null ? (t = Pr(), Qe.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
      }
      function zn(e, t, a, i) {
        t.value = a, t.getSnapshot = i, Nn(t) && ou(e);
      }
      function ru(e, t, a) {
        return a(function() {
          Nn(t) && ou(e);
        });
      }
      function Nn(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var a = t();
          return !oa(e, a);
        } catch {
          return !0;
        }
      }
      function ou(e) {
        var t = be(e, 2);
        t !== null && wt(t, e, 2);
      }
      function xn(e) {
        var t = Rt();
        if (typeof e == "function") {
          var a = e;
          if (e = a(), tl) {
            F(!0);
            try {
              a();
            } finally {
              F(!1);
            }
          }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ma,
          lastRenderedState: e
        }, t;
      }
      function fu(e, t, a, i) {
        return e.baseState = a, un(
          e,
          it,
          typeof i == "function" ? i : Ma
        );
      }
      function Bn(e, t, a, i, r) {
        if (Fn(e)) throw Error(u(485));
        if (e = t.action, e !== null) {
          var v = {
            payload: r,
            action: e,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function(S) {
              v.listeners.push(S);
            }
          };
          je.T !== null ? a(!0) : v.isTransition = !1, i(v), a = t.pending, a === null ? (v.next = t.pending = v, Sl(t, v)) : (v.next = a.next, t.pending = a.next = v);
        }
      }
      function Sl(e, t) {
        var a = t.action, i = t.payload, r = e.state;
        if (t.isTransition) {
          var v = je.T, S = {};
          je.T = S;
          try {
            var D = a(r, i), G = je.S;
            G !== null && G(S, D), qa(e, t, D);
          } catch (I) {
            Gn(e, t, I);
          } finally {
            je.T = v;
          }
        } else
          try {
            v = a(r, i), qa(e, t, v);
          } catch (I) {
            Gn(e, t, I);
          }
      }
      function qa(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
          function(i) {
            El(e, t, i);
          },
          function(i) {
            return Gn(e, t, i);
          }
        ) : El(e, t, a);
      }
      function El(e, t, a) {
        t.status = "fulfilled", t.value = a, bl(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Sl(e, a)));
      }
      function Gn(e, t, a) {
        var i = e.pending;
        if (e.pending = null, i !== null) {
          i = i.next;
          do
            t.status = "rejected", t.reason = a, bl(t), t = t.next;
          while (t !== i);
        }
        e.action = null;
      }
      function bl(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
      function ea(e, t) {
        return t;
      }
      function Pu(e, t) {
        if (Pe) {
          var a = ct.formState;
          if (a !== null) {
            e: {
              var i = Qe;
              if (Pe) {
                if (Kt) {
                  var r = sv(
                    Kt,
                    Ba
                  );
                  if (r) {
                    Kt = cc(r), i = dv(r);
                    break e;
                  }
                }
                ae(i);
              }
              i = !1;
            }
            i && (t = a[0]);
          }
        }
        a = Rt(), a.memoizedState = a.baseState = t, i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ea,
          lastRenderedState: t
        }, a.queue = i, a = pu.bind(
          null,
          Qe,
          i
        ), i.dispatch = a, i = xn(!1);
        var v = Ml.bind(
          null,
          Qe,
          !1,
          i.queue
        );
        return i = Rt(), r = {
          state: t,
          dispatch: null,
          action: e,
          pending: null
        }, i.queue = r, a = Bn.bind(
          null,
          Qe,
          r,
          v,
          a
        ), r.dispatch = a, i.memoizedState = e, [t, a, !1];
      }
      function jn(e) {
        var t = ht();
        return rn(t, it, e);
      }
      function rn(e, t, a) {
        t = un(
          e,
          t,
          ea
        )[0], e = Ca(Ma)[0], t = typeof t == "object" && t !== null && typeof t.then == "function" ? Va(t) : t;
        var i = ht(), r = i.queue, v = r.dispatch;
        return a !== i.memoizedState && (Qe.flags |= 2048, Da(
          9,
          ku.bind(null, r, a),
          { destroy: void 0 },
          null
        )), [t, v, e];
      }
      function ku(e, t) {
        e.action = t;
      }
      function Hn(e) {
        var t = ht(), a = it;
        if (a !== null)
          return rn(t, a, e);
        ht(), t = t.memoizedState, a = ht();
        var i = a.queue.dispatch;
        return a.memoizedState = e, [t, i, !1];
      }
      function Da(e, t, a, i) {
        return e = { tag: e, create: t, inst: a, deps: i, next: null }, t = Qe.updateQueue, t === null && (t = Pr(), Qe.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
      }
      function _l() {
        return ht().memoizedState;
      }
      function Vn(e, t, a, i) {
        var r = Rt();
        Qe.flags |= e, r.memoizedState = Da(
          1 | t,
          a,
          { destroy: void 0 },
          i === void 0 ? null : i
        );
      }
      function Ln(e, t, a, i) {
        var r = ht();
        i = i === void 0 ? null : i;
        var v = r.memoizedState.inst;
        it !== null && i !== null && hl(i, it.memoizedState.deps) ? r.memoizedState = Da(t, a, v, i) : (Qe.flags |= e, r.memoizedState = Da(1 | t, a, v, i));
      }
      function Tl(e, t) {
        Vn(8390656, 8, e, t);
      }
      function Ya(e, t) {
        Ln(2048, 8, e, t);
      }
      function cu(e, t) {
        return Ln(4, 2, e, t);
      }
      function qn(e, t) {
        return Ln(4, 4, e, t);
      }
      function Xa(e, t) {
        if (typeof t == "function") {
          e = e();
          var a = t(e);
          return function() {
            typeof a == "function" ? a() : t(null);
          };
        }
        if (t != null)
          return e = e(), t.current = e, function() {
            t.current = null;
          };
      }
      function Qa(e, t, a) {
        a = a != null ? a.concat([e]) : null, Ln(
          4,
          4,
          Xa.bind(null, t, e),
          a
        );
      }
      function Fa() {
      }
      function su(e, t) {
        var a = ht();
        t = t === void 0 ? null : t;
        var i = a.memoizedState;
        return t !== null && hl(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
      }
      function on(e, t) {
        var a = ht();
        t = t === void 0 ? null : t;
        var i = a.memoizedState;
        if (t !== null && hl(t, i[1]))
          return i[0];
        if (i = e(), tl) {
          F(!0);
          try {
            e();
          } finally {
            F(!1);
          }
        }
        return a.memoizedState = [i, t], i;
      }
      function Yn(e, t, a) {
        return a === void 0 || (bn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Mf(), Qe.lanes |= e, Tn |= e, a);
      }
      function Ul(e, t, a, i) {
        return oa(a, t) ? a : Zl.current !== null ? (e = Yn(e, a, i), oa(e, t) || (Bt = !0), e) : (bn & 42) === 0 ? (Bt = !0, e.memoizedState = a) : (e = Mf(), Qe.lanes |= e, Tn |= e, t);
      }
      function du(e, t, a, i, r) {
        var v = kn();
        $t(
          v !== 0 && 8 > v ? v : 8
        );
        var S = je.T, D = {};
        je.T = D, Ml(e, !1, t, a);
        try {
          var G = r(), I = je.S;
          if (I !== null && I(D, G), G !== null && typeof G == "object" && typeof G.then == "function") {
            var re = Ve(
              G,
              i
            );
            Ka(
              e,
              t,
              re,
              la(e)
            );
          } else
            Ka(
              e,
              t,
              i,
              la(e)
            );
        } catch (ce) {
          Ka(
            e,
            t,
            { then: function() {
            }, status: "rejected", reason: ce },
            la()
          );
        } finally {
          $t(v), je.T = S;
        }
      }
      function Xn(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
          memoizedState: Bl,
          baseState: Bl,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ma,
            lastRenderedState: Bl
          },
          next: null
        };
        var a = {};
        return t.next = {
          memoizedState: a,
          baseState: a,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ma,
            lastRenderedState: a
          },
          next: null
        }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
      }
      function Qn() {
        return Xt(In);
      }
      function vu() {
        return ht().memoizedState;
      }
      function Pt() {
        return ht().memoizedState;
      }
      function hu(e) {
        for (var t = e.return; t !== null; ) {
          switch (t.tag) {
            case 24:
            case 3:
              var a = la();
              e = Be(a);
              var i = Ge(t, e, a);
              i !== null && (wt(i, t, a), Me(i, t, a)), t = { cache: nr() }, e.payload = t;
              return;
          }
          t = t.return;
        }
      }
      function Iu(e, t, a) {
        var i = la();
        a = {
          lane: i,
          revertLane: 0,
          action: a,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Fn(e) ? fn(t, a) : (a = Ee(e, t, a, i), a !== null && (wt(a, e, i), cn(a, t, i)));
      }
      function pu(e, t, a) {
        var i = la();
        Ka(e, t, a, i);
      }
      function Ka(e, t, a, i) {
        var r = {
          lane: i,
          revertLane: 0,
          action: a,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (Fn(e)) fn(t, r);
        else {
          var v = e.alternate;
          if (e.lanes === 0 && (v === null || v.lanes === 0) && (v = t.lastRenderedReducer, v !== null))
            try {
              var S = t.lastRenderedState, D = v(S, a);
              if (r.hasEagerState = !0, r.eagerState = D, oa(D, S))
                return pe(e, t, r, 0), ct === null && Ae(), !1;
            } catch {
            } finally {
            }
          if (a = Ee(e, t, r, i), a !== null)
            return wt(a, e, i), cn(a, t, i), !0;
        }
        return !1;
      }
      function Ml(e, t, a, i) {
        if (i = {
          lane: 2,
          revertLane: _e(),
          action: i,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Fn(e)) {
          if (t) throw Error(u(479));
        } else
          t = Ee(
            e,
            a,
            i,
            2
          ), t !== null && wt(t, e, 2);
      }
      function Fn(e) {
        var t = e.alternate;
        return e === Qe || t !== null && t === Qe;
      }
      function fn(e, t) {
        wl = bi = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
      }
      function cn(e, t, a) {
        if ((a & 4194176) !== 0) {
          var i = t.lanes;
          i &= e.pendingLanes, a |= i, t.lanes = a, Y(e, a);
        }
      }
      function da(e, t, a, i) {
        t = e.memoizedState, a = a(i, t), a = a == null ? t : Dr({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
      }
      function mu(e, t, a, i, r, v, S) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, v, S) : t.prototype && t.prototype.isPureReactComponent ? !Ze(a, i) || !Ze(r, v) : !0;
      }
      function Cl(e, t, a, i) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== e && kr.enqueueReplaceState(t, t.state, null);
      }
      function Aa(e, t) {
        var a = t;
        if ("ref" in t) {
          a = {};
          for (var i in t)
            i !== "ref" && (a[i] = t[i]);
        }
        if (e = e.defaultProps) {
          a === t && (a = Dr({}, a));
          for (var r in e)
            a[r] === void 0 && (a[r] = e[r]);
        }
        return a;
      }
      function xa(e, t) {
        try {
          var a = e.onUncaughtError;
          a(t.value, { componentStack: t.stack });
        } catch (i) {
          setTimeout(function() {
            throw i;
          });
        }
      }
      function yu(e, t, a) {
        try {
          var i = e.onCaughtError;
          i(a.value, {
            componentStack: a.stack,
            errorBoundary: t.tag === 1 ? t.stateNode : null
          });
        } catch (r) {
          setTimeout(function() {
            throw r;
          });
        }
      }
      function Za(e, t, a) {
        return a = Be(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
          xa(e, t);
        }, a;
      }
      function Dl(e) {
        return e = Be(e), e.tag = 3, e;
      }
      function Yt(e, t, a, i) {
        var r = a.type.getDerivedStateFromError;
        if (typeof r == "function") {
          var v = i.value;
          e.payload = function() {
            return r(v);
          }, e.callback = function() {
            yu(t, a, i);
          };
        }
        var S = a.stateNode;
        S !== null && typeof S.componentDidCatch == "function" && (e.callback = function() {
          yu(t, a, i), typeof r != "function" && (Un === null ? Un = /* @__PURE__ */ new Set([this]) : Un.add(this));
          var D = i.stack;
          this.componentDidCatch(i.value, {
            componentStack: D !== null ? D : ""
          });
        });
      }
      function wi(e, t, a, i, r) {
        if (a.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
          if (t = a.alternate, t !== null && Eu(
            t,
            a,
            r,
            !0
          ), a = Sa.current, a !== null) {
            switch (a.tag) {
              case 13:
                return Ga === null ? Er() : a.alternate === null && _t === 0 && (_t = 3), a.flags &= -257, a.flags |= 65536, a.lanes = r, i === Si ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), _r(e, i, r)), !1;
              case 22:
                return a.flags |= 65536, i === Si ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([i])
                }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), _r(e, i, r)), !1;
            }
            throw Error(u(435, a.tag));
          }
          return _r(e, i, r), Er(), !1;
        }
        if (Pe)
          return t = Sa.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = r, i !== Qr && (e = Error(u(422), { cause: i }), xe(
            H(e, a)
          ))) : (i !== Qr && (t = Error(u(423), {
            cause: i
          }), xe(
            H(t, a)
          )), e = e.current.alternate, e.flags |= 65536, r &= -r, e.lanes |= r, i = H(i, a), r = Za(
            e.stateNode,
            i,
            r
          ), ft(e, r), _t !== 4 && (_t = 2)), !1;
        var v = Error(u(520), { cause: i });
        if (v = H(v, a), ju === null ? ju = [v] : ju.push(v), _t !== 4 && (_t = 2), t === null) return !0;
        i = H(i, a), a = t;
        do {
          switch (a.tag) {
            case 3:
              return a.flags |= 65536, e = r & -r, a.lanes |= e, e = Za(a.stateNode, i, e), ft(a, e), !1;
            case 1:
              if (t = a.type, v = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Un === null || !Un.has(
                v
              ))))
                return a.flags |= 65536, r &= -r, a.lanes |= r, r = Dl(r), Yt(
                  r,
                  e,
                  a,
                  i
                ), ft(a, r), !1;
          }
          a = a.return;
        } while (a !== null);
        return !1;
      }
      function St(e, t, a, i) {
        t.child = e === null ? Uc(t, null, a, i) : el(
          t,
          e.child,
          a,
          i
        );
      }
      function Kn(e, t, a, i, r) {
        a = a.render;
        var v = t.ref;
        if ("ref" in i) {
          var S = {};
          for (var D in i)
            D !== "ref" && (S[D] = i[D]);
        } else S = i;
        return Zn(t), i = An(
          e,
          t,
          a,
          S,
          v,
          r
        ), D = On(), e !== null && !Bt ? (iu(e, t, r), wa(e, t, r)) : (Pe && D && R(t), t.flags |= 1, St(e, t, i, r), t.child);
      }
      function gu(e, t, a, i, r) {
        if (e === null) {
          var v = a.type;
          return typeof v == "function" && !Tr(v) && v.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = v, $u(
            e,
            t,
            v,
            i,
            r
          )) : (e = ri(
            a.type,
            null,
            i,
            t,
            t.mode,
            r
          ), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (v = e.child, !er(e, r)) {
          var S = v.memoizedProps;
          if (a = a.compare, a = a !== null ? a : Ze, a(S, i) && e.ref === t.ref)
            return wa(
              e,
              t,
              r
            );
        }
        return t.flags |= 1, e = pn(v, i), e.ref = t.ref, e.return = t, t.child = e;
      }
      function $u(e, t, a, i, r) {
        if (e !== null) {
          var v = e.memoizedProps;
          if (Ze(v, i) && e.ref === t.ref)
            if (Bt = !1, t.pendingProps = i = v, er(e, r))
              (e.flags & 131072) !== 0 && (Bt = !0);
            else
              return t.lanes = e.lanes, wa(e, t, r);
        }
        return va(
          e,
          t,
          a,
          i,
          r
        );
      }
      function Ht(e, t, a) {
        var i = t.pendingProps, r = i.children, v = (t.stateNode._pendingVisibility & 2) !== 0, S = e !== null ? e.memoizedState : null;
        if (Mt(e, t), i.mode === "hidden" || v) {
          if ((t.flags & 128) !== 0) {
            if (i = S !== null ? S.baseLanes | a : a, e !== null) {
              for (r = t.child = e.child, v = 0; r !== null; )
                v = v | r.lanes | r.childLanes, r = r.sibling;
              t.childLanes = v & ~i;
            } else t.childLanes = 0, t.child = null;
            return kt(
              e,
              t,
              i,
              a
            );
          }
          if ((a & 536870912) !== 0)
            t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ai(
              t,
              S !== null ? S.cachePool : null
            ), S !== null ? gt(t, S) : Zt(), Ua(t);
          else
            return t.lanes = t.childLanes = 536870912, kt(
              e,
              t,
              S !== null ? S.baseLanes | a : a,
              a
            );
        } else
          S !== null ? (ai(t, S.cachePool), gt(t, S), qt(), t.memoizedState = null) : (e !== null && ai(t, null), Zt(), qt());
        return St(e, t, r, a), t.child;
      }
      function kt(e, t, a, i) {
        var r = lr();
        return r = r === null ? null : {
          parent: ka ? Et._currentValue : Et._currentValue2,
          pool: r
        }, t.memoizedState = {
          baseLanes: a,
          cachePool: r
        }, e !== null && ai(t, null), Zt(), Ua(t), e !== null && Eu(e, t, i, !0), null;
      }
      function Mt(e, t) {
        var a = t.ref;
        if (a === null)
          e !== null && e.ref !== null && (t.flags |= 2097664);
        else {
          if (typeof a != "function" && typeof a != "object")
            throw Error(u(284));
          (e === null || e.ref !== a) && (t.flags |= 2097664);
        }
      }
      function va(e, t, a, i, r) {
        return Zn(t), a = An(
          e,
          t,
          a,
          i,
          void 0,
          r
        ), i = On(), e !== null && !Bt ? (iu(e, t, r), wa(e, t, r)) : (Pe && i && R(t), t.flags |= 1, St(e, t, a, r), t.child);
      }
      function Su(e, t, a, i, r, v) {
        return Zn(t), t.updateQueue = null, a = uu(
          t,
          i,
          a,
          r
        ), Wu(e), i = On(), e !== null && !Bt ? (iu(e, t, v), wa(e, t, v)) : (Pe && i && R(t), t.flags |= 1, St(e, t, a, v), t.child);
      }
      function Jo(e, t, a, i, r) {
        if (Zn(t), t.stateNode === null) {
          var v = jl, S = a.contextType;
          typeof S == "object" && S !== null && (v = Xt(S)), v = new a(i, v), t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, v.updater = kr, t.stateNode = v, v._reactInternals = t, v = t.stateNode, v.props = i, v.state = t.memoizedState, v.refs = {}, $e(t), S = a.contextType, v.context = typeof S == "object" && S !== null ? Xt(S) : jl, v.state = t.memoizedState, S = a.getDerivedStateFromProps, typeof S == "function" && (da(
            t,
            a,
            S,
            i
          ), v.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (S = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), S !== v.state && kr.enqueueReplaceState(
            v,
            v.state,
            null
          ), Tt(t, i, v, r), et(), v.state = t.memoizedState), typeof v.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
        } else if (e === null) {
          v = t.stateNode;
          var D = t.memoizedProps, G = Aa(a, D);
          v.props = G;
          var I = v.context, re = a.contextType;
          S = jl, typeof re == "object" && re !== null && (S = Xt(re));
          var ce = a.getDerivedStateFromProps;
          re = typeof ce == "function" || typeof v.getSnapshotBeforeUpdate == "function", D = t.pendingProps !== D, re || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (D || I !== S) && Cl(
            t,
            v,
            i,
            S
          ), En = !1;
          var he = t.memoizedState;
          v.state = he, Tt(t, i, v, r), et(), I = t.memoizedState, D || he !== I || En ? (typeof ce == "function" && (da(
            t,
            a,
            ce,
            i
          ), I = t.memoizedState), (G = En || mu(
            t,
            a,
            G,
            i,
            he,
            I,
            S
          )) ? (re || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()), typeof v.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = I), v.props = i, v.state = I, v.context = S, i = G) : (typeof v.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
        } else {
          v = t.stateNode, ot(e, t), S = t.memoizedProps, re = Aa(a, S), v.props = re, ce = t.pendingProps, he = v.context, I = a.contextType, G = jl, typeof I == "object" && I !== null && (G = Xt(I)), D = a.getDerivedStateFromProps, (I = typeof D == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (S !== ce || he !== G) && Cl(
            t,
            v,
            i,
            G
          ), En = !1, he = t.memoizedState, v.state = he, Tt(t, i, v, r), et();
          var qe = t.memoizedState;
          S !== ce || he !== qe || En || e !== null && e.dependencies !== null && ei(e.dependencies) ? (typeof D == "function" && (da(
            t,
            a,
            D,
            i
          ), qe = t.memoizedState), (re = En || mu(
            t,
            a,
            re,
            i,
            he,
            qe,
            G
          ) || e !== null && e.dependencies !== null && ei(e.dependencies)) ? (I || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(i, qe, G), typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(
            i,
            qe,
            G
          )), typeof v.componentDidUpdate == "function" && (t.flags |= 4), typeof v.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || S === e.memoizedProps && he === e.memoizedState || (t.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && he === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = qe), v.props = i, v.state = qe, v.context = G, i = re) : (typeof v.componentDidUpdate != "function" || S === e.memoizedProps && he === e.memoizedState || (t.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && he === e.memoizedState || (t.flags |= 1024), i = !1);
        }
        return v = i, Mt(e, t), i = (t.flags & 128) !== 0, v || i ? (v = t.stateNode, a = i && typeof a.getDerivedStateFromError != "function" ? null : v.render(), t.flags |= 1, e !== null && i ? (t.child = el(
          t,
          e.child,
          null,
          r
        ), t.child = el(
          t,
          null,
          a,
          r
        )) : St(e, t, a, r), t.memoizedState = v.state, e = t.child) : e = wa(
          e,
          t,
          r
        ), e;
      }
      function Wo(e, t, a, i) {
        return ue(), t.flags |= 256, St(e, t, a, i), t.child;
      }
      function Ji(e) {
        return { baseLanes: e, cachePool: tf() };
      }
      function Wi(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Ea), e;
      }
      function Po(e, t, a) {
        var i = t.pendingProps, r = !1, v = (t.flags & 128) !== 0, S;
        if ((S = v) || (S = e !== null && e.memoizedState === null ? !1 : (zt.current & 2) !== 0), S && (r = !0, t.flags &= -129), S = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
          if (Pe) {
            if (r ? xt(t) : qt(), Pe) {
              var D = Kt, G;
              (G = D) && (D = yv(
                D,
                Ba
              ), D !== null ? (t.memoizedState = {
                dehydrated: D,
                treeContext: $n !== null ? { id: Ia, overflow: $a } : null,
                retryLane: 536870912
              }, G = p(18, null, null, 0), G.stateNode = D, G.return = t, t.child = G, Jt = t, Kt = null, G = !0) : G = !1), G || ae(t);
            }
            if (D = t.memoizedState, D !== null && (D = D.dehydrated, D !== null))
              return Vr(D) ? t.lanes = 16 : t.lanes = 536870912, null;
            Ot(t);
          }
          return D = i.children, i = i.fallback, r ? (qt(), r = t.mode, D = ki(
            { mode: "hidden", children: D },
            r
          ), i = Pn(
            i,
            r,
            a,
            null
          ), D.return = t, i.return = t, D.sibling = i, t.child = D, r = t.child, r.memoizedState = Ji(a), r.childLanes = Wi(
            e,
            S,
            a
          ), t.memoizedState = Ir, i) : (xt(t), Pi(t, D));
        }
        if (G = e.memoizedState, G !== null && (D = G.dehydrated, D !== null)) {
          if (v)
            t.flags & 256 ? (xt(t), t.flags &= -257, t = Ii(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (qt(), t.child = e.child, t.flags |= 128, t = null) : (qt(), r = i.fallback, D = t.mode, i = ki(
              { mode: "visible", children: i.children },
              D
            ), r = Pn(
              r,
              D,
              a,
              null
            ), r.flags |= 2, i.return = t, r.return = t, i.sibling = r, t.child = i, el(
              t,
              e.child,
              null,
              a
            ), i = t.child, i.memoizedState = Ji(a), i.childLanes = Wi(
              e,
              S,
              a
            ), t.memoizedState = Ir, t = r);
          else if (xt(t), Vr(D))
            S = fv(D).digest, i = Error(u(419)), i.stack = "", i.digest = S, xe({ value: i, source: null, stack: null }), t = Ii(
              e,
              t,
              a
            );
          else if (Bt || Eu(
            e,
            t,
            a,
            !1
          ), S = (a & e.childLanes) !== 0, Bt || S) {
            if (S = ct, S !== null) {
              if (i = a & -a, (i & 42) !== 0) i = 1;
              else
                switch (i) {
                  case 2:
                    i = 1;
                    break;
                  case 8:
                    i = 4;
                    break;
                  case 32:
                    i = 16;
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
                    i = 64;
                    break;
                  case 268435456:
                    i = 134217728;
                    break;
                  default:
                    i = 0;
                }
              if (i = (i & (S.suspendedLanes | a)) !== 0 ? 0 : i, i !== 0 && i !== G.retryLane)
                throw G.retryLane = i, be(e, i), wt(S, e, i), Cc;
            }
            Hr(D) || Er(), t = Ii(
              e,
              t,
              a
            );
          } else
            Hr(D) ? (t.flags |= 128, t.child = e.child, t = dd.bind(
              null,
              e
            ), cv(D, t), t = null) : (e = G.treeContext, ha && (Kt = hv(D), Jt = t, Pe = !0, za = null, Ba = !1, e !== null && (ma[ya++] = Ia, ma[ya++] = $a, ma[ya++] = $n, Ia = e.id, $a = e.overflow, $n = t)), t = Pi(
              t,
              i.children
            ), t.flags |= 4096);
          return t;
        }
        return r ? (qt(), r = i.fallback, D = t.mode, G = e.child, v = G.sibling, i = pn(G, {
          mode: "hidden",
          children: i.children
        }), i.subtreeFlags = G.subtreeFlags & 31457280, v !== null ? r = pn(v, r) : (r = Pn(
          r,
          D,
          a,
          null
        ), r.flags |= 2), r.return = t, i.return = t, i.sibling = r, t.child = i, i = r, r = t.child, D = e.child.memoizedState, D === null ? D = Ji(a) : (G = D.cachePool, G !== null ? (v = ka ? Et._currentValue : Et._currentValue2, G = G.parent !== v ? { parent: v, pool: v } : G) : G = tf(), D = {
          baseLanes: D.baseLanes | a,
          cachePool: G
        }), r.memoizedState = D, r.childLanes = Wi(
          e,
          S,
          a
        ), t.memoizedState = Ir, i) : (xt(t), a = e.child, e = a.sibling, a = pn(a, {
          mode: "visible",
          children: i.children
        }), a.return = t, a.sibling = null, e !== null && (S = t.deletions, S === null ? (t.deletions = [e], t.flags |= 16) : S.push(e)), t.child = a, t.memoizedState = null, a);
      }
      function Pi(e, t) {
        return t = ki(
          { mode: "visible", children: t },
          e.mode
        ), t.return = e, e.child = t;
      }
      function ki(e, t) {
        return Yf(e, t, 0, null);
      }
      function Ii(e, t, a) {
        return el(t, e.child, null, a), e = Pi(
          t,
          t.pendingProps.children
        ), e.flags |= 2, t.memoizedState = null, e;
      }
      function ko(e, t, a) {
        e.lanes |= t;
        var i = e.alternate;
        i !== null && (i.lanes |= t), tr(e.return, t, a);
      }
      function $i(e, t, a, i, r) {
        var v = e.memoizedState;
        v === null ? e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: a,
          tailMode: r
        } : (v.isBackwards = t, v.rendering = null, v.renderingStartTime = 0, v.last = i, v.tail = a, v.tailMode = r);
      }
      function Io(e, t, a) {
        var i = t.pendingProps, r = i.revealOrder, v = i.tail;
        if (St(e, t, i.children, a), i = zt.current, (i & 2) !== 0)
          i = i & 1 | 2, t.flags |= 128;
        else {
          if (e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
              if (e.tag === 13)
                e.memoizedState !== null && ko(e, a, t);
              else if (e.tag === 19)
                ko(e, a, t);
              else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break e;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                  break e;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
          i &= 1;
        }
        switch (b(zt, i), r) {
          case "forwards":
            for (a = t.child, r = null; a !== null; )
              e = a.alternate, e !== null && Ut(e) === null && (r = a), a = a.sibling;
            a = r, a === null ? (r = t.child, t.child = null) : (r = a.sibling, a.sibling = null), $i(
              t,
              !1,
              r,
              a,
              v
            );
            break;
          case "backwards":
            for (a = null, r = t.child, t.child = null; r !== null; ) {
              if (e = r.alternate, e !== null && Ut(e) === null) {
                t.child = r;
                break;
              }
              e = r.sibling, r.sibling = a, a = r, r = e;
            }
            $i(
              t,
              !0,
              a,
              null,
              v
            );
            break;
          case "together":
            $i(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
        return t.child;
      }
      function wa(e, t, a) {
        if (e !== null && (t.dependencies = e.dependencies), Tn |= t.lanes, (a & t.childLanes) === 0)
          if (e !== null) {
            if (Eu(
              e,
              t,
              a,
              !1
            ), (a & t.childLanes) === 0)
              return null;
          } else return null;
        if (e !== null && t.child !== e.child)
          throw Error(u(153));
        if (t.child !== null) {
          for (e = t.child, a = pn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
            e = e.sibling, a = a.sibling = pn(e, e.pendingProps), a.return = t;
          a.sibling = null;
        }
        return t.child;
      }
      function er(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ei(e)));
      }
      function td(e, t, a) {
        switch (t.tag) {
          case 3:
            L(
              t,
              t.stateNode.containerInfo
            ), sn(t, Et, e.memoizedState.cache), ue();
            break;
          case 27:
          case 5:
            le(t);
            break;
          case 4:
            L(
              t,
              t.stateNode.containerInfo
            );
            break;
          case 10:
            sn(
              t,
              t.type,
              t.memoizedProps.value
            );
            break;
          case 13:
            var i = t.memoizedState;
            if (i !== null)
              return i.dehydrated !== null ? (xt(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Po(
                e,
                t,
                a
              ) : (xt(t), e = wa(
                e,
                t,
                a
              ), e !== null ? e.sibling : null);
            xt(t);
            break;
          case 19:
            var r = (e.flags & 128) !== 0;
            if (i = (a & t.childLanes) !== 0, i || (Eu(
              e,
              t,
              a,
              !1
            ), i = (a & t.childLanes) !== 0), r) {
              if (i)
                return Io(
                  e,
                  t,
                  a
                );
              t.flags |= 128;
            }
            if (r = t.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), b(zt, zt.current), i) break;
            return null;
          case 22:
          case 23:
            return t.lanes = 0, Ht(e, t, a);
          case 24:
            sn(t, Et, e.memoizedState.cache);
        }
        return wa(e, t, a);
      }
      function $o(e, t, a) {
        if (e !== null)
          if (e.memoizedProps !== t.pendingProps)
            Bt = !0;
          else {
            if (!er(e, a) && (t.flags & 128) === 0)
              return Bt = !1, td(
                e,
                t,
                a
              );
            Bt = (e.flags & 131072) !== 0;
          }
        else
          Bt = !1, Pe && (t.flags & 1048576) !== 0 && C(t, pi, t.index);
        switch (t.lanes = 0, t.tag) {
          case 16:
            e: {
              e = t.pendingProps;
              var i = t.elementType, r = i._init;
              if (i = r(i._payload), t.type = i, typeof i == "function")
                Tr(i) ? (e = Aa(i, e), t.tag = 1, t = Jo(
                  null,
                  t,
                  i,
                  e,
                  a
                )) : (t.tag = 0, t = va(
                  null,
                  t,
                  i,
                  e,
                  a
                ));
              else {
                if (i != null) {
                  if (r = i.$$typeof, r === Or) {
                    t.tag = 11, t = Kn(
                      null,
                      t,
                      i,
                      e,
                      a
                    );
                    break e;
                  } else if (r === Nr) {
                    t.tag = 14, t = gu(
                      null,
                      t,
                      i,
                      e,
                      a
                    );
                    break e;
                  }
                }
                throw t = s(i) || i, Error(u(306, t, ""));
              }
            }
            return t;
          case 0:
            return va(
              e,
              t,
              t.type,
              t.pendingProps,
              a
            );
          case 1:
            return i = t.type, r = Aa(
              i,
              t.pendingProps
            ), Jo(
              e,
              t,
              i,
              r,
              a
            );
          case 3:
            e: {
              if (L(
                t,
                t.stateNode.containerInfo
              ), e === null) throw Error(u(387));
              var v = t.pendingProps;
              r = t.memoizedState, i = r.element, ot(e, t), Tt(t, v, null, a);
              var S = t.memoizedState;
              if (v = S.cache, sn(t, Et, v), v !== r.cache && ar(
                t,
                [Et],
                a,
                !0
              ), et(), v = S.element, ha && r.isDehydrated)
                if (r = {
                  element: v,
                  isDehydrated: !1,
                  cache: S.cache
                }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
                  t = Wo(
                    e,
                    t,
                    v,
                    a
                  );
                  break e;
                } else if (v !== i) {
                  i = H(
                    Error(u(424)),
                    t
                  ), xe(i), t = Wo(
                    e,
                    t,
                    v,
                    a
                  );
                  break e;
                } else
                  for (ha && (Kt = vv(
                    t.stateNode.containerInfo
                  ), Jt = t, Pe = !0, za = null, Ba = !0), a = Uc(
                    t,
                    null,
                    v,
                    a
                  ), t.child = a; a; )
                    a.flags = a.flags & -3 | 4096, a = a.sibling;
              else {
                if (ue(), v === i) {
                  t = wa(
                    e,
                    t,
                    a
                  );
                  break e;
                }
                St(e, t, v, a);
              }
              t = t.child;
            }
            return t;
          case 26:
            if (pa)
              return Mt(e, t), e === null ? (a = hc(
                t.type,
                null,
                t.pendingProps,
                null
              )) ? t.memoizedState = a : Pe || (t.stateNode = Ov(
                t.type,
                t.pendingProps,
                Sn.current,
                t
              )) : t.memoizedState = hc(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              ), null;
          case 27:
            if (Ft)
              return le(t), e === null && Ft && Pe && (i = t.stateNode = Ec(
                t.type,
                t.pendingProps,
                Sn.current,
                Vt.current,
                !1
              ), Jt = t, Ba = !0, Kt = sc(i)), i = t.pendingProps.children, e !== null || Pe ? St(
                e,
                t,
                i,
                a
              ) : t.child = el(
                t,
                null,
                i,
                a
              ), Mt(e, t), t.child;
          case 5:
            return e === null && Pe && (Cv(
              t.type,
              t.pendingProps,
              Vt.current
            ), (r = i = Kt) && (i = pv(
              i,
              t.type,
              t.pendingProps,
              Ba
            ), i !== null ? (t.stateNode = i, Jt = t, Kt = sc(i), Ba = !1, r = !0) : r = !1), r || ae(t)), le(t), r = t.type, v = t.pendingProps, S = e !== null ? e.memoizedProps : null, i = v.children, ci(r, v) ? i = null : S !== null && ci(r, S) && (t.flags |= 32), t.memoizedState !== null && (r = An(
              e,
              t,
              pl,
              null,
              null,
              a
            ), ka ? In._currentValue = r : In._currentValue2 = r), Mt(e, t), St(e, t, i, a), t.child;
          case 6:
            return e === null && Pe && (Dv(
              t.pendingProps,
              Vt.current
            ), (e = a = Kt) && (a = mv(
              a,
              t.pendingProps,
              Ba
            ), a !== null ? (t.stateNode = a, Jt = t, Kt = null, e = !0) : e = !1), e || ae(t)), null;
          case 13:
            return Po(e, t, a);
          case 4:
            return L(
              t,
              t.stateNode.containerInfo
            ), i = t.pendingProps, e === null ? t.child = el(
              t,
              null,
              i,
              a
            ) : St(
              e,
              t,
              i,
              a
            ), t.child;
          case 11:
            return Kn(
              e,
              t,
              t.type,
              t.pendingProps,
              a
            );
          case 7:
            return St(
              e,
              t,
              t.pendingProps,
              a
            ), t.child;
          case 8:
            return St(
              e,
              t,
              t.pendingProps.children,
              a
            ), t.child;
          case 12:
            return St(
              e,
              t,
              t.pendingProps.children,
              a
            ), t.child;
          case 10:
            return i = t.pendingProps, sn(
              t,
              t.type,
              i.value
            ), St(
              e,
              t,
              i.children,
              a
            ), t.child;
          case 9:
            return r = t.type._context, i = t.pendingProps.children, Zn(t), r = Xt(r), i = i(r), t.flags |= 1, St(
              e,
              t,
              i,
              a
            ), t.child;
          case 14:
            return gu(
              e,
              t,
              t.type,
              t.pendingProps,
              a
            );
          case 15:
            return $u(
              e,
              t,
              t.type,
              t.pendingProps,
              a
            );
          case 19:
            return Io(
              e,
              t,
              a
            );
          case 22:
            return Ht(e, t, a);
          case 24:
            return Zn(t), i = Xt(Et), e === null ? (r = lr(), r === null && (r = ct, v = nr(), r.pooledCache = v, v.refCount++, v !== null && (r.pooledCacheLanes |= a), r = v), t.memoizedState = {
              parent: i,
              cache: r
            }, $e(t), sn(t, Et, r)) : ((e.lanes & a) !== 0 && (ot(e, t), Tt(t, null, null, a), et()), r = e.memoizedState, v = t.memoizedState, r.parent !== i ? (r = { parent: i, cache: i }, t.memoizedState = r, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = r), sn(t, Et, i)) : (i = v.cache, sn(t, Et, i), i !== r.cache && ar(
              t,
              [Et],
              a,
              !0
            ))), St(
              e,
              t,
              t.pendingProps.children,
              a
            ), t.child;
          case 29:
            throw t.pendingProps;
        }
        throw Error(u(156, t.tag));
      }
      function sn(e, t, a) {
        ka ? (b(Ti, t._currentValue), t._currentValue = a) : (b(Ti, t._currentValue2), t._currentValue2 = a);
      }
      function Ja(e) {
        var t = Ti.current;
        ka ? e._currentValue = t : e._currentValue2 = t, M(Ti);
      }
      function tr(e, t, a) {
        for (; e !== null; ) {
          var i = e.alternate;
          if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
          e = e.return;
        }
      }
      function ar(e, t, a, i) {
        var r = e.child;
        for (r !== null && (r.return = e); r !== null; ) {
          var v = r.dependencies;
          if (v !== null) {
            var S = r.child;
            v = v.firstContext;
            e: for (; v !== null; ) {
              var D = v;
              v = r;
              for (var G = 0; G < t.length; G++)
                if (D.context === t[G]) {
                  v.lanes |= a, D = v.alternate, D !== null && (D.lanes |= a), tr(
                    v.return,
                    a,
                    e
                  ), i || (S = null);
                  break e;
                }
              v = D.next;
            }
          } else if (r.tag === 18) {
            if (S = r.return, S === null) throw Error(u(341));
            S.lanes |= a, v = S.alternate, v !== null && (v.lanes |= a), tr(S, a, e), S = null;
          } else S = r.child;
          if (S !== null) S.return = r;
          else
            for (S = r; S !== null; ) {
              if (S === e) {
                S = null;
                break;
              }
              if (r = S.sibling, r !== null) {
                r.return = S.return, S = r;
                break;
              }
              S = S.return;
            }
          r = S;
        }
      }
      function Eu(e, t, a, i) {
        e = null;
        for (var r = t, v = !1; r !== null; ) {
          if (!v) {
            if ((r.flags & 524288) !== 0) v = !0;
            else if ((r.flags & 262144) !== 0) break;
          }
          if (r.tag === 10) {
            var S = r.alternate;
            if (S === null) throw Error(u(387));
            if (S = S.memoizedProps, S !== null) {
              var D = r.type;
              oa(r.pendingProps.value, S.value) || (e !== null ? e.push(D) : e = [D]);
            }
          } else if (r === mi.current) {
            if (S = r.alternate, S === null) throw Error(u(387));
            S.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push(In) : e = [In]);
          }
          r = r.return;
        }
        e !== null && ar(
          t,
          e,
          a,
          i
        ), t.flags |= 262144;
      }
      function ei(e) {
        for (e = e.firstContext; e !== null; ) {
          var t = e.context;
          if (!oa(
            ka ? t._currentValue : t._currentValue2,
            e.memoizedValue
          ))
            return !0;
          e = e.next;
        }
        return !1;
      }
      function Zn(e) {
        ll = e, en = null, e = e.dependencies, e !== null && (e.firstContext = null);
      }
      function Xt(e) {
        return ef(ll, e);
      }
      function ti(e, t) {
        return ll === null && Zn(e), ef(e, t);
      }
      function ef(e, t) {
        var a = ka ? t._currentValue : t._currentValue2;
        if (t = { context: t, memoizedValue: a, next: null }, en === null) {
          if (e === null) throw Error(u(308));
          en = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
        } else en = en.next = t;
        return a;
      }
      function nr() {
        return {
          controller: new Zv(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function bu(e) {
        e.refCount--, e.refCount === 0 && wv(Jv, function() {
          e.controller.abort();
        });
      }
      function lr() {
        var e = ul.current;
        return e !== null ? e : ct.pooledCache;
      }
      function ai(e, t) {
        t === null ? b(ul, ul.current) : b(ul, t.pool);
      }
      function tf() {
        var e = lr();
        return e === null ? null : {
          parent: ka ? Et._currentValue : Et._currentValue2,
          pool: e
        };
      }
      function ta(e) {
        e.flags |= 4;
      }
      function af(e, t) {
        if (e !== null && e.child === t.child) return !1;
        if ((t.flags & 16) !== 0) return !0;
        for (e = t.child; e !== null; ) {
          if ((e.flags & 13878) !== 0 || (e.subtreeFlags & 13878) !== 0)
            return !0;
          e = e.sibling;
        }
        return !1;
      }
      function ur(e, t, a, i) {
        if (Qt)
          for (a = t.child; a !== null; ) {
            if (a.tag === 5 || a.tag === 6)
              Gr(e, a.stateNode);
            else if (!(a.tag === 4 || Ft && a.tag === 27) && a.child !== null) {
              a.child.return = a, a = a.child;
              continue;
            }
            if (a === t) break;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === t)
                return;
              a = a.return;
            }
            a.sibling.return = a.return, a = a.sibling;
          }
        else if (gn)
          for (var r = t.child; r !== null; ) {
            if (r.tag === 5) {
              var v = r.stateNode;
              a && i && (v = oc(
                v,
                r.type,
                r.memoizedProps
              )), Gr(e, v);
            } else if (r.tag === 6)
              v = r.stateNode, a && i && (v = fc(
                v,
                r.memoizedProps
              )), Gr(e, v);
            else if (r.tag !== 4) {
              if (r.tag === 22 && r.memoizedState !== null)
                v = r.child, v !== null && (v.return = r), ur(e, r, !0, !0);
              else if (r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
            }
            if (r === t) break;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === t)
                return;
              r = r.return;
            }
            r.sibling.return = r.return, r = r.sibling;
          }
      }
      function nf(e, t, a, i) {
        if (gn)
          for (var r = t.child; r !== null; ) {
            if (r.tag === 5) {
              var v = r.stateNode;
              a && i && (v = oc(
                v,
                r.type,
                r.memoizedProps
              )), ic(e, v);
            } else if (r.tag === 6)
              v = r.stateNode, a && i && (v = fc(
                v,
                r.memoizedProps
              )), ic(e, v);
            else if (r.tag !== 4) {
              if (r.tag === 22 && r.memoizedState !== null)
                v = r.child, v !== null && (v.return = r), nf(
                  e,
                  r,
                  !(r.memoizedProps !== null && r.memoizedProps.mode === "manual"),
                  !0
                );
              else if (r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
            }
            if (r === t) break;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === t) return;
              r = r.return;
            }
            r.sibling.return = r.return, r = r.sibling;
          }
      }
      function lf(e, t) {
        if (gn && af(e, t)) {
          e = t.stateNode;
          var a = e.containerInfo, i = uc();
          nf(i, t, !1, !1), e.pendingChildren = i, ta(t), ov(a, i);
        }
      }
      function ir(e, t, a, i) {
        if (Qt)
          e.memoizedProps !== i && ta(t);
        else if (gn) {
          var r = e.stateNode, v = e.memoizedProps;
          if ((e = af(e, t)) || v !== i) {
            var S = Vt.current;
            v = rv(
              r,
              a,
              v,
              i,
              !e,
              null
            ), v === r ? t.stateNode = r : ($f(
              v,
              a,
              i,
              S
            ) && ta(t), t.stateNode = v, e ? ur(v, t, !1, !1) : ta(t));
          } else t.stateNode = r;
        }
      }
      function rr(e, t, a) {
        if (Gd(t, a)) {
          if (e.flags |= 16777216, !ac(t, a))
            if (Rf()) e.flags |= 8192;
            else
              throw Fl = Si, Wr;
        } else e.flags &= -16777217;
      }
      function uf(e, t) {
        if (zv(t)) {
          if (e.flags |= 16777216, !Sc(t))
            if (Rf()) e.flags |= 8192;
            else
              throw Fl = Si, Wr;
        } else e.flags &= -16777217;
      }
      function ni(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? k() : 536870912, e.lanes |= t, kl |= t);
      }
      function _u(e, t) {
        if (!Pe)
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var a = null; t !== null; )
                t.alternate !== null && (a = t), t = t.sibling;
              a === null ? e.tail = null : a.sibling = null;
              break;
            case "collapsed":
              a = e.tail;
              for (var i = null; a !== null; )
                a.alternate !== null && (i = a), a = a.sibling;
              i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
          }
      }
      function yt(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
        if (t)
          for (var r = e.child; r !== null; )
            a |= r.lanes | r.childLanes, i |= r.subtreeFlags & 31457280, i |= r.flags & 31457280, r.return = e, r = r.sibling;
        else
          for (r = e.child; r !== null; )
            a |= r.lanes | r.childLanes, i |= r.subtreeFlags, i |= r.flags, r.return = e, r = r.sibling;
        return e.subtreeFlags |= i, e.childLanes = a, t;
      }
      function ad(e, t, a) {
        var i = t.pendingProps;
        switch (J(t), t.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return yt(t), null;
          case 1:
            return yt(t), null;
          case 3:
            return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Ja(Et), K(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (oe(t) ? ta(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, za !== null && (gr(za), za = null))), lf(e, t), yt(t), null;
          case 26:
            if (pa) {
              a = t.type;
              var r = t.memoizedState;
              return e === null ? (ta(t), r !== null ? (yt(t), uf(
                t,
                r
              )) : (yt(t), rr(
                t,
                a,
                i
              ))) : r ? r !== e.memoizedState ? (ta(t), yt(t), uf(
                t,
                r
              )) : (yt(t), t.flags &= -16777217) : (Qt ? e.memoizedProps !== i && ta(t) : ir(
                e,
                t,
                a,
                i
              ), yt(t), rr(
                t,
                a,
                i
              )), null;
            }
          case 27:
            if (Ft) {
              if ($(t), a = Sn.current, r = t.type, e !== null && t.stateNode != null)
                Qt ? e.memoizedProps !== i && ta(t) : ir(
                  e,
                  t,
                  r,
                  i
                );
              else {
                if (!i) {
                  if (t.stateNode === null)
                    throw Error(u(166));
                  return yt(t), null;
                }
                e = Vt.current, oe(t) ? se(t, e) : (e = Ec(
                  r,
                  i,
                  a,
                  e,
                  !0
                ), t.stateNode = e, ta(t));
              }
              return yt(t), null;
            }
          case 5:
            if ($(t), a = t.type, e !== null && t.stateNode != null)
              ir(e, t, a, i);
            else {
              if (!i) {
                if (t.stateNode === null)
                  throw Error(u(166));
                return yt(t), null;
              }
              e = Vt.current, oe(t) ? se(t, e) : (r = Ad(
                a,
                i,
                Sn.current,
                e,
                t
              ), ur(r, t, !1, !1), t.stateNode = r, $f(
                r,
                a,
                i,
                e
              ) && ta(t));
            }
            return yt(t), rr(
              t,
              t.type,
              t.pendingProps
            ), null;
          case 6:
            if (e && t.stateNode != null)
              a = e.memoizedProps, Qt ? a !== i && ta(t) : gn && (a !== i ? (t.stateNode = ec(
                i,
                Sn.current,
                Vt.current,
                t
              ), ta(t)) : t.stateNode = e.stateNode);
            else {
              if (typeof i != "string" && t.stateNode === null)
                throw Error(u(166));
              if (e = Sn.current, a = Vt.current, oe(t)) {
                if (!ha) throw Error(u(176));
                if (e = t.stateNode, a = t.memoizedProps, i = null, r = Jt, r !== null)
                  switch (r.tag) {
                    case 27:
                    case 5:
                      i = r.memoizedProps;
                  }
                Sv(
                  e,
                  a,
                  t,
                  i
                ) || ae(t);
              } else
                t.stateNode = ec(
                  i,
                  e,
                  a,
                  t
                );
            }
            return yt(t), null;
          case 13:
            if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
              if (r = oe(t), i !== null && i.dehydrated !== null) {
                if (e === null) {
                  if (!r) throw Error(u(318));
                  if (!ha) throw Error(u(344));
                  if (r = t.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(u(317));
                  Ev(r, t);
                } else
                  ue(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                yt(t), r = !1;
              } else
                za !== null && (gr(za), za = null), r = !0;
              if (!r)
                return t.flags & 256 ? (Ot(t), t) : (Ot(t), null);
            }
            if (Ot(t), (t.flags & 128) !== 0)
              return t.lanes = a, t;
            if (a = i !== null, e = e !== null && e.memoizedState !== null, a) {
              i = t.child, r = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (r = i.alternate.memoizedState.cachePool.pool);
              var v = null;
              i.memoizedState !== null && i.memoizedState.cachePool !== null && (v = i.memoizedState.cachePool.pool), v !== r && (i.flags |= 2048);
            }
            return a !== e && a && (t.child.flags |= 8192), ni(t, t.updateQueue), yt(t), null;
          case 4:
            return K(), lf(e, t), e === null && zd(t.stateNode.containerInfo), yt(t), null;
          case 10:
            return Ja(t.type), yt(t), null;
          case 19:
            if (M(zt), r = t.memoizedState, r === null)
              return yt(t), null;
            if (i = (t.flags & 128) !== 0, v = r.rendering, v === null)
              if (i) _u(r, !1);
              else {
                if (_t !== 0 || e !== null && (e.flags & 128) !== 0)
                  for (e = t.child; e !== null; ) {
                    if (v = Ut(e), v !== null) {
                      for (t.flags |= 128, _u(r, !1), e = v.updateQueue, t.updateQueue = e, ni(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                        qf(a, e), a = a.sibling;
                      return b(
                        zt,
                        zt.current & 1 | 2
                      ), t.child;
                    }
                    e = e.sibling;
                  }
                r.tail !== null && Ra() > Hu && (t.flags |= 128, i = !0, _u(r, !1), t.lanes = 4194304);
              }
            else {
              if (!i)
                if (e = Ut(v), e !== null) {
                  if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, ni(t, e), _u(r, !0), r.tail === null && r.tailMode === "hidden" && !v.alternate && !Pe)
                    return yt(t), null;
                } else
                  2 * Ra() - r.renderingStartTime > Hu && a !== 536870912 && (t.flags |= 128, i = !0, _u(r, !1), t.lanes = 4194304);
              r.isBackwards ? (v.sibling = t.child, t.child = v) : (e = r.last, e !== null ? e.sibling = v : t.child = v, r.last = v);
            }
            return r.tail !== null ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.renderingStartTime = Ra(), t.sibling = null, e = zt.current, b(
              zt,
              i ? e & 1 | 2 : e & 1
            ), t) : (yt(t), null);
          case 22:
          case 23:
            return Ot(t), sa(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), a = t.updateQueue, a !== null && ni(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && M(ul), null;
          case 24:
            return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Ja(Et), yt(t), null;
          case 25:
            return null;
        }
        throw Error(u(156, t.tag));
      }
      function nd(e, t) {
        switch (J(t), t.tag) {
          case 1:
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 3:
            return Ja(Et), K(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
          case 26:
          case 27:
          case 5:
            return $(t), null;
          case 13:
            if (Ot(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
              if (t.alternate === null)
                throw Error(u(340));
              ue();
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 19:
            return M(zt), null;
          case 4:
            return K(), null;
          case 10:
            return Ja(t.type), null;
          case 22:
          case 23:
            return Ot(t), sa(), e !== null && M(ul), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 24:
            return Ja(Et), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function rf(e, t) {
        switch (J(t), t.tag) {
          case 3:
            Ja(Et), K();
            break;
          case 26:
          case 27:
          case 5:
            $(t);
            break;
          case 4:
            K();
            break;
          case 13:
            Ot(t);
            break;
          case 19:
            M(zt);
            break;
          case 10:
            Ja(t.type);
            break;
          case 22:
          case 23:
            Ot(t), sa(), e !== null && M(ul);
            break;
          case 24:
            Ja(Et);
        }
      }
      function Tu(e, t) {
        try {
          var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
          if (i !== null) {
            var r = i.next;
            a = r;
            do {
              if ((a.tag & e) === e) {
                i = void 0;
                var v = a.create, S = a.inst;
                i = v(), S.destroy = i;
              }
              a = a.next;
            } while (a !== r);
          }
        } catch (D) {
          ut(t, t.return, D);
        }
      }
      function dn(e, t, a) {
        try {
          var i = t.updateQueue, r = i !== null ? i.lastEffect : null;
          if (r !== null) {
            var v = r.next;
            i = v;
            do {
              if ((i.tag & e) === e) {
                var S = i.inst, D = S.destroy;
                if (D !== void 0) {
                  S.destroy = void 0, r = t;
                  var G = a;
                  try {
                    D();
                  } catch (I) {
                    ut(
                      r,
                      G,
                      I
                    );
                  }
                }
              }
              i = i.next;
            } while (i !== v);
          }
        } catch (I) {
          ut(t, t.return, I);
        }
      }
      function of(e) {
        var t = e.updateQueue;
        if (t !== null) {
          var a = e.stateNode;
          try {
            Re(t, a);
          } catch (i) {
            ut(e, e.return, i);
          }
        }
      }
      function ff(e, t, a) {
        a.props = Aa(
          e.type,
          e.memoizedProps
        ), a.state = e.memoizedState;
        try {
          a.componentWillUnmount();
        } catch (i) {
          ut(e, t, i);
        }
      }
      function wn(e, t) {
        try {
          var a = e.ref;
          if (a !== null) {
            var i = e.stateNode;
            switch (e.tag) {
              case 26:
              case 27:
              case 5:
                var r = Cu(i);
                break;
              default:
                r = i;
            }
            typeof a == "function" ? e.refCleanup = a(r) : a.current = r;
          }
        } catch (v) {
          ut(e, t, v);
        }
      }
      function aa(e, t) {
        var a = e.ref, i = e.refCleanup;
        if (a !== null)
          if (typeof i == "function")
            try {
              i();
            } catch (r) {
              ut(e, t, r);
            } finally {
              e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
          else if (typeof a == "function")
            try {
              a(null);
            } catch (r) {
              ut(e, t, r);
            }
          else a.current = null;
      }
      function cf(e) {
        var t = e.type, a = e.memoizedProps, i = e.stateNode;
        try {
          Pd(i, t, a, e);
        } catch (r) {
          ut(e, e.return, r);
        }
      }
      function sf(e, t, a) {
        try {
          kd(
            e.stateNode,
            e.type,
            a,
            t,
            e
          );
        } catch (i) {
          ut(e, e.return, i);
        }
      }
      function df(e) {
        return e.tag === 5 || e.tag === 3 || (pa ? e.tag === 26 : !1) || (Ft ? e.tag === 27 : !1) || e.tag === 4;
      }
      function or(e) {
        e: for (; ; ) {
          for (; e.sibling === null; ) {
            if (e.return === null || df(e.return)) return null;
            e = e.return;
          }
          for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && (!Ft || e.tag !== 27) && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child;
          }
          if (!(e.flags & 2)) return e.stateNode;
        }
      }
      function fr(e, t, a) {
        var i = e.tag;
        if (i === 5 || i === 6)
          e = e.stateNode, t ? $d(a, e, t) : Jd(a, e);
        else if (!(i === 4 || Ft && i === 27) && (e = e.child, e !== null))
          for (fr(e, t, a), e = e.sibling; e !== null; )
            fr(e, t, a), e = e.sibling;
      }
      function li(e, t, a) {
        var i = e.tag;
        if (i === 5 || i === 6)
          e = e.stateNode, t ? Id(a, e, t) : wd(a, e);
        else if (!(i === 4 || Ft && i === 27) && (e = e.child, e !== null))
          for (li(e, t, a), e = e.sibling; e !== null; )
            li(e, t, a), e = e.sibling;
      }
      function vf(e, t, a) {
        e = e.containerInfo;
        try {
          rc(e, a);
        } catch (i) {
          ut(t, t.return, i);
        }
      }
      function ld(e, t) {
        for (Cd(e.containerInfo), Gt = t; Gt !== null; )
          if (e = Gt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e, Gt = t;
          else
            for (; Gt !== null; ) {
              e = Gt;
              var a = e.alternate;
              switch (t = e.flags, e.tag) {
                case 0:
                  break;
                case 11:
                case 15:
                  break;
                case 1:
                  if ((t & 1024) !== 0 && a !== null) {
                    t = void 0;
                    var i = e, r = a.memoizedProps;
                    a = a.memoizedState;
                    var v = i.stateNode;
                    try {
                      var S = Aa(
                        i.type,
                        r,
                        i.elementType === i.type
                      );
                      t = v.getSnapshotBeforeUpdate(
                        S,
                        a
                      ), v.__reactInternalSnapshotBeforeUpdate = t;
                    } catch (D) {
                      ut(
                        i,
                        i.return,
                        D
                      );
                    }
                  }
                  break;
                case 3:
                  (t & 1024) !== 0 && Qt && iv(e.stateNode.containerInfo);
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
                    throw Error(u(163));
              }
              if (t = e.sibling, t !== null) {
                t.return = e.return, Gt = t;
                break;
              }
              Gt = e.return;
            }
        return S = Oc, Oc = !1, S;
      }
      function hf(e, t, a) {
        var i = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            Wa(e, a), i & 4 && Tu(5, a);
            break;
          case 1:
            if (Wa(e, a), i & 4)
              if (e = a.stateNode, t === null)
                try {
                  e.componentDidMount();
                } catch (D) {
                  ut(a, a.return, D);
                }
              else {
                var r = Aa(
                  a.type,
                  t.memoizedProps
                );
                t = t.memoizedState;
                try {
                  e.componentDidUpdate(
                    r,
                    t,
                    e.__reactInternalSnapshotBeforeUpdate
                  );
                } catch (D) {
                  ut(
                    a,
                    a.return,
                    D
                  );
                }
              }
            i & 64 && of(a), i & 512 && wn(a, a.return);
            break;
          case 3:
            if (Wa(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
              if (e = null, a.child !== null)
                switch (a.child.tag) {
                  case 27:
                  case 5:
                    e = Cu(a.child.stateNode);
                    break;
                  case 1:
                    e = a.child.stateNode;
                }
              try {
                Re(i, e);
              } catch (D) {
                ut(a, a.return, D);
              }
            }
            break;
          case 26:
            if (pa) {
              Wa(e, a), i & 512 && wn(a, a.return);
              break;
            }
          case 27:
          case 5:
            Wa(e, a), t === null && i & 4 && cf(a), i & 512 && wn(a, a.return);
            break;
          case 12:
            Wa(e, a);
            break;
          case 13:
            Wa(e, a), i & 4 && mf(e, a);
            break;
          case 22:
            if (r = a.memoizedState !== null || tn, !r) {
              t = t !== null && t.memoizedState !== null || bt;
              var v = tn, S = bt;
              tn = r, (bt = t) && !S ? vn(
                e,
                a,
                (a.subtreeFlags & 8772) !== 0
              ) : Wa(e, a), tn = v, bt = S;
            }
            i & 512 && (a.memoizedProps.mode === "manual" ? wn(a, a.return) : aa(a, a.return));
            break;
          default:
            Wa(e, a);
        }
      }
      function pf(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, pf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Bd(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
      function Oa(e, t, a) {
        for (a = a.child; a !== null; )
          cr(
            e,
            t,
            a
          ), a = a.sibling;
      }
      function cr(e, t, a) {
        if (ra && typeof ra.onCommitFiberUnmount == "function")
          try {
            ra.onCommitFiberUnmount(Ou, a);
          } catch {
          }
        switch (a.tag) {
          case 26:
            if (pa) {
              bt || aa(a, t), Oa(
                e,
                t,
                a
              ), a.memoizedState ? mc(a.memoizedState) : a.stateNode && gc(a.stateNode);
              break;
            }
          case 27:
            if (Ft) {
              bt || aa(a, t);
              var i = Dt, r = fa;
              Dt = a.stateNode, Oa(
                e,
                t,
                a
              ), Gv(a.stateNode), Dt = i, fa = r;
              break;
            }
          case 5:
            bt || aa(a, t);
          case 6:
            if (Qt) {
              if (i = Dt, r = fa, Dt = null, Oa(
                e,
                t,
                a
              ), Dt = i, fa = r, Dt !== null)
                if (fa)
                  try {
                    tv(Dt, a.stateNode);
                  } catch (v) {
                    ut(
                      a,
                      t,
                      v
                    );
                  }
                else
                  try {
                    ev(Dt, a.stateNode);
                  } catch (v) {
                    ut(
                      a,
                      t,
                      v
                    );
                  }
            } else
              Oa(
                e,
                t,
                a
              );
            break;
          case 18:
            Qt && Dt !== null && (fa ? Mv(
              Dt,
              a.stateNode
            ) : Uv(Dt, a.stateNode));
            break;
          case 4:
            Qt ? (i = Dt, r = fa, Dt = a.stateNode.containerInfo, fa = !0, Oa(
              e,
              t,
              a
            ), Dt = i, fa = r) : (gn && vf(
              a.stateNode,
              a,
              uc()
            ), Oa(
              e,
              t,
              a
            ));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            bt || dn(2, a, t), bt || dn(4, a, t), Oa(
              e,
              t,
              a
            );
            break;
          case 1:
            bt || (aa(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && ff(
              a,
              t,
              i
            )), Oa(
              e,
              t,
              a
            );
            break;
          case 21:
            Oa(
              e,
              t,
              a
            );
            break;
          case 22:
            bt || aa(a, t), bt = (i = bt) || a.memoizedState !== null, Oa(
              e,
              t,
              a
            ), bt = i;
            break;
          default:
            Oa(
              e,
              t,
              a
            );
        }
      }
      function mf(e, t) {
        if (ha && t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
          try {
            Tv(e);
          } catch (a) {
            ut(t, t.return, a);
          }
      }
      function ud(e) {
        switch (e.tag) {
          case 13:
          case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new Ac()), t;
          case 22:
            return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Ac()), t;
          default:
            throw Error(u(435, e.tag));
        }
      }
      function sr(e, t) {
        var a = ud(e);
        t.forEach(function(i) {
          var r = vd.bind(null, e, i);
          a.has(i) || (a.add(i), i.then(r, r));
        });
      }
      function It(e, t) {
        var a = t.deletions;
        if (a !== null)
          for (var i = 0; i < a.length; i++) {
            var r = a[i], v = e, S = t;
            if (Qt) {
              var D = S;
              e: for (; D !== null; ) {
                switch (D.tag) {
                  case 27:
                  case 5:
                    Dt = D.stateNode, fa = !1;
                    break e;
                  case 3:
                    Dt = D.stateNode.containerInfo, fa = !0;
                    break e;
                  case 4:
                    Dt = D.stateNode.containerInfo, fa = !0;
                    break e;
                }
                D = D.return;
              }
              if (Dt === null) throw Error(u(160));
              cr(v, S, r), Dt = null, fa = !1;
            } else cr(v, S, r);
            v = r.alternate, v !== null && (v.return = null), r.return = null;
          }
        if (t.subtreeFlags & 13878)
          for (t = t.child; t !== null; )
            yf(t, e), t = t.sibling;
      }
      function yf(e, t) {
        var a = e.alternate, i = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            It(t, e), na(e), i & 4 && (dn(3, e, e.return), Tu(3, e), dn(5, e, e.return));
            break;
          case 1:
            It(t, e), na(e), i & 512 && (bt || a === null || aa(a, a.return)), i & 64 && tn && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
            break;
          case 26:
            if (pa) {
              var r = Na;
              It(t, e), na(e), i & 512 && (bt || a === null || aa(a, a.return)), i & 4 && (i = a !== null ? a.memoizedState : null, t = e.memoizedState, a === null ? t === null ? e.stateNode === null ? e.stateNode = Av(
                r,
                e.type,
                e.memoizedProps,
                e
              ) : yc(
                r,
                e.type,
                e.stateNode
              ) : e.stateNode = pc(
                r,
                t,
                e.memoizedProps
              ) : i !== t ? (i === null ? a.stateNode !== null && gc(a.stateNode) : mc(i), t === null ? yc(
                r,
                e.type,
                e.stateNode
              ) : pc(
                r,
                t,
                e.memoizedProps
              )) : t === null && e.stateNode !== null && sf(
                e,
                e.memoizedProps,
                a.memoizedProps
              ));
              break;
            }
          case 27:
            if (Ft && i & 4 && e.alternate === null) {
              r = e.stateNode;
              var v = e.memoizedProps;
              try {
                xv(r), Bv(
                  e.type,
                  v,
                  r,
                  e
                );
              } catch (re) {
                ut(e, e.return, re);
              }
            }
          case 5:
            if (It(t, e), na(e), i & 512 && (bt || a === null || aa(a, a.return)), Qt) {
              if (e.flags & 32) {
                t = e.stateNode;
                try {
                  lc(t);
                } catch (re) {
                  ut(e, e.return, re);
                }
              }
              i & 4 && e.stateNode != null && (t = e.memoizedProps, sf(
                e,
                t,
                a !== null ? a.memoizedProps : t
              )), i & 1024 && ($r = !0);
            }
            break;
          case 6:
            if (It(t, e), na(e), i & 4 && Qt) {
              if (e.stateNode === null)
                throw Error(u(162));
              i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
              try {
                Wd(t, a, i);
              } catch (re) {
                ut(e, e.return, re);
              }
            }
            break;
          case 3:
            if (pa ? (Rv(), r = Na, Na = Lr(t.containerInfo), It(t, e), Na = r) : It(t, e), na(e), i & 4) {
              if (Qt && ha && a !== null && a.memoizedState.isDehydrated)
                try {
                  _v(t.containerInfo);
                } catch (re) {
                  ut(e, e.return, re);
                }
              if (gn) {
                i = t.containerInfo, a = t.pendingChildren;
                try {
                  rc(i, a);
                } catch (re) {
                  ut(e, e.return, re);
                }
              }
            }
            $r && ($r = !1, gf(e));
            break;
          case 4:
            pa ? (a = Na, Na = Lr(
              e.stateNode.containerInfo
            ), It(t, e), na(e), Na = a) : (It(t, e), na(e)), i & 4 && gn && vf(
              e.stateNode,
              e,
              e.stateNode.pendingChildren
            );
            break;
          case 12:
            It(t, e), na(e);
            break;
          case 13:
            It(t, e), na(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (no = Ra()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, sr(e, i)));
            break;
          case 22:
            i & 512 && (bt || a === null || aa(a, a.return)), r = e.memoizedState !== null;
            var S = a !== null && a.memoizedState !== null, D = tn, G = bt;
            if (tn = D || r, bt = G || S, It(t, e), bt = G, tn = D, na(e), t = e.stateNode, t._current = e, t._visibility &= -3, t._visibility |= t._pendingVisibility & 2, i & 8192 && (t._visibility = r ? t._visibility & -2 : t._visibility | 1, r && (t = tn || bt, a === null || S || t || Al(e)), Qt && (e.memoizedProps === null || e.memoizedProps.mode !== "manual"))) {
              e: if (a = null, Qt)
                for (t = e; ; ) {
                  if (t.tag === 5 || pa && t.tag === 26 || Ft && t.tag === 27) {
                    if (a === null) {
                      S = a = t;
                      try {
                        v = S.stateNode, r ? av(v) : lv(
                          S.stateNode,
                          S.memoizedProps
                        );
                      } catch (re) {
                        ut(S, S.return, re);
                      }
                    }
                  } else if (t.tag === 6) {
                    if (a === null) {
                      S = t;
                      try {
                        var I = S.stateNode;
                        r ? nv(I) : uv(I, S.memoizedProps);
                      } catch (re) {
                        ut(S, S.return, re);
                      }
                    }
                  } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue;
                  }
                  if (t === e) break e;
                  for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                      break e;
                    a === t && (a = null), t = t.return;
                  }
                  a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
                }
            }
            i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, sr(e, a))));
            break;
          case 19:
            It(t, e), na(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, sr(e, i)));
            break;
          case 21:
            break;
          default:
            It(t, e), na(e);
        }
      }
      function na(e) {
        var t = e.flags;
        if (t & 2) {
          try {
            if (Qt && (!Ft || e.tag !== 27)) {
              e: {
                for (var a = e.return; a !== null; ) {
                  if (df(a)) {
                    var i = a;
                    break e;
                  }
                  a = a.return;
                }
                throw Error(u(160));
              }
              switch (i.tag) {
                case 27:
                  if (Ft) {
                    var r = i.stateNode, v = or(e);
                    li(
                      e,
                      v,
                      r
                    );
                    break;
                  }
                case 5:
                  var S = i.stateNode;
                  i.flags & 32 && (lc(S), i.flags &= -33);
                  var D = or(e);
                  li(e, D, S);
                  break;
                case 3:
                case 4:
                  var G = i.stateNode.containerInfo, I = or(e);
                  fr(
                    e,
                    I,
                    G
                  );
                  break;
                default:
                  throw Error(u(161));
              }
            }
          } catch (re) {
            ut(e, e.return, re);
          }
          e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
      }
      function gf(e) {
        if (e.subtreeFlags & 1024)
          for (e = e.child; e !== null; ) {
            var t = e;
            gf(t), t.tag === 5 && t.flags & 1024 && Vd(t.stateNode), e = e.sibling;
          }
      }
      function Wa(e, t) {
        if (t.subtreeFlags & 8772)
          for (t = t.child; t !== null; )
            hf(e, t.alternate, t), t = t.sibling;
      }
      function Al(e) {
        for (e = e.child; e !== null; ) {
          var t = e;
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              dn(4, t, t.return), Al(t);
              break;
            case 1:
              aa(t, t.return);
              var a = t.stateNode;
              typeof a.componentWillUnmount == "function" && ff(
                t,
                t.return,
                a
              ), Al(t);
              break;
            case 26:
            case 27:
            case 5:
              aa(t, t.return), Al(t);
              break;
            case 22:
              aa(t, t.return), t.memoizedState === null && Al(t);
              break;
            default:
              Al(t);
          }
          e = e.sibling;
        }
      }
      function vn(e, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
          var i = t.alternate, r = e, v = t, S = v.flags;
          switch (v.tag) {
            case 0:
            case 11:
            case 15:
              vn(
                r,
                v,
                a
              ), Tu(4, v);
              break;
            case 1:
              if (vn(
                r,
                v,
                a
              ), i = v, r = i.stateNode, typeof r.componentDidMount == "function")
                try {
                  r.componentDidMount();
                } catch (I) {
                  ut(i, i.return, I);
                }
              if (i = v, r = i.updateQueue, r !== null) {
                var D = i.stateNode;
                try {
                  var G = r.shared.hiddenCallbacks;
                  if (G !== null)
                    for (r.shared.hiddenCallbacks = null, r = 0; r < G.length; r++)
                      tt(G[r], D);
                } catch (I) {
                  ut(i, i.return, I);
                }
              }
              a && S & 64 && of(v), wn(v, v.return);
              break;
            case 26:
            case 27:
            case 5:
              vn(
                r,
                v,
                a
              ), a && i === null && S & 4 && cf(v), wn(v, v.return);
              break;
            case 12:
              vn(
                r,
                v,
                a
              );
              break;
            case 13:
              vn(
                r,
                v,
                a
              ), a && S & 4 && mf(r, v);
              break;
            case 22:
              v.memoizedState === null && vn(
                r,
                v,
                a
              ), wn(v, v.return);
              break;
            default:
              vn(
                r,
                v,
                a
              );
          }
          t = t.sibling;
        }
      }
      function dr(e, t) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && bu(a));
      }
      function vr(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && bu(e));
      }
      function hn(e, t, a, i) {
        if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null; )
            Sf(
              e,
              t,
              a,
              i
            ), t = t.sibling;
      }
      function Sf(e, t, a, i) {
        var r = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            hn(
              e,
              t,
              a,
              i
            ), r & 2048 && Tu(9, t);
            break;
          case 3:
            hn(
              e,
              t,
              a,
              i
            ), r & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && bu(e)));
            break;
          case 12:
            if (r & 2048) {
              hn(
                e,
                t,
                a,
                i
              ), e = t.stateNode;
              try {
                var v = t.memoizedProps, S = v.id, D = v.onPostCommit;
                typeof D == "function" && D(
                  S,
                  t.alternate === null ? "mount" : "update",
                  e.passiveEffectDuration,
                  -0
                );
              } catch (G) {
                ut(t, t.return, G);
              }
            } else
              hn(
                e,
                t,
                a,
                i
              );
            break;
          case 23:
            break;
          case 22:
            v = t.stateNode, t.memoizedState !== null ? v._visibility & 4 ? hn(
              e,
              t,
              a,
              i
            ) : Uu(
              e,
              t
            ) : v._visibility & 4 ? hn(
              e,
              t,
              a,
              i
            ) : (v._visibility |= 4, Ol(
              e,
              t,
              a,
              i,
              (t.subtreeFlags & 10256) !== 0
            )), r & 2048 && dr(
              t.alternate,
              t
            );
            break;
          case 24:
            hn(
              e,
              t,
              a,
              i
            ), r & 2048 && vr(t.alternate, t);
            break;
          default:
            hn(
              e,
              t,
              a,
              i
            );
        }
      }
      function Ol(e, t, a, i, r) {
        for (r = r && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
          var v = e, S = t, D = a, G = i, I = S.flags;
          switch (S.tag) {
            case 0:
            case 11:
            case 15:
              Ol(
                v,
                S,
                D,
                G,
                r
              ), Tu(8, S);
              break;
            case 23:
              break;
            case 22:
              var re = S.stateNode;
              S.memoizedState !== null ? re._visibility & 4 ? Ol(
                v,
                S,
                D,
                G,
                r
              ) : Uu(
                v,
                S
              ) : (re._visibility |= 4, Ol(
                v,
                S,
                D,
                G,
                r
              )), r && I & 2048 && dr(
                S.alternate,
                S
              );
              break;
            case 24:
              Ol(
                v,
                S,
                D,
                G,
                r
              ), r && I & 2048 && vr(S.alternate, S);
              break;
            default:
              Ol(
                v,
                S,
                D,
                G,
                r
              );
          }
          t = t.sibling;
        }
      }
      function Uu(e, t) {
        if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null; ) {
            var a = e, i = t, r = i.flags;
            switch (i.tag) {
              case 22:
                Uu(a, i), r & 2048 && dr(
                  i.alternate,
                  i
                );
                break;
              case 24:
                Uu(a, i), r & 2048 && vr(
                  i.alternate,
                  i
                );
                break;
              default:
                Uu(a, i);
            }
            t = t.sibling;
          }
      }
      function Jn(e) {
        if (e.subtreeFlags & Wl)
          for (e = e.child; e !== null; )
            Ef(e), e = e.sibling;
      }
      function Ef(e) {
        switch (e.tag) {
          case 26:
            Jn(e), e.flags & Wl && (e.memoizedState !== null ? Nv(
              Na,
              e.memoizedState,
              e.memoizedProps
            ) : nc(e.type, e.memoizedProps));
            break;
          case 5:
            Jn(e), e.flags & Wl && nc(e.type, e.memoizedProps);
            break;
          case 3:
          case 4:
            if (pa) {
              var t = Na;
              Na = Lr(
                e.stateNode.containerInfo
              ), Jn(e), Na = t;
            } else Jn(e);
            break;
          case 22:
            e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Wl, Wl = 16777216, Jn(e), Wl = t) : Jn(e));
            break;
          default:
            Jn(e);
        }
      }
      function bf(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child, e !== null)) {
          t.child = null;
          do
            t = e.sibling, e.sibling = null, e = t;
          while (e !== null);
        }
      }
      function Mu(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
          if (t !== null)
            for (var a = 0; a < t.length; a++) {
              var i = t[a];
              Gt = i, Tf(
                i,
                e
              );
            }
          bf(e);
        }
        if (e.subtreeFlags & 10256)
          for (e = e.child; e !== null; )
            _f(e), e = e.sibling;
      }
      function _f(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Mu(e), e.flags & 2048 && dn(9, e, e.return);
            break;
          case 3:
            Mu(e);
            break;
          case 12:
            Mu(e);
            break;
          case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 4 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -5, ui(e)) : Mu(e);
            break;
          default:
            Mu(e);
        }
      }
      function ui(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
          if (t !== null)
            for (var a = 0; a < t.length; a++) {
              var i = t[a];
              Gt = i, Tf(
                i,
                e
              );
            }
          bf(e);
        }
        for (e = e.child; e !== null; ) {
          switch (t = e, t.tag) {
            case 0:
            case 11:
            case 15:
              dn(8, t, t.return), ui(t);
              break;
            case 22:
              a = t.stateNode, a._visibility & 4 && (a._visibility &= -5, ui(t));
              break;
            default:
              ui(t);
          }
          e = e.sibling;
        }
      }
      function Tf(e, t) {
        for (; Gt !== null; ) {
          var a = Gt;
          switch (a.tag) {
            case 0:
            case 11:
            case 15:
              dn(8, a, t);
              break;
            case 23:
            case 22:
              if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                var i = a.memoizedState.cachePool.pool;
                i != null && i.refCount++;
              }
              break;
            case 24:
              bu(a.memoizedState.cache);
          }
          if (i = a.child, i !== null) i.return = a, Gt = i;
          else
            e: for (a = e; Gt !== null; ) {
              i = Gt;
              var r = i.sibling, v = i.return;
              if (pf(i), i === a) {
                Gt = null;
                break e;
              }
              if (r !== null) {
                r.return = v, Gt = r;
                break e;
              }
              Gt = v;
            }
        }
      }
      function hr(e) {
        var t = tc(e);
        if (t != null) {
          if (typeof t.memoizedProps["data-testname"] != "string")
            throw Error(u(364));
          return t;
        }
        if (e = Yd(e), e === null) throw Error(u(362));
        return e.stateNode.current;
      }
      function pr(e, t) {
        var a = e.tag;
        switch (t.$$typeof) {
          case Ui:
            if (e.type === t.value) return !0;
            break;
          case Mi:
            e: {
              for (t = t.value, e = [e, 0], a = 0; a < e.length; ) {
                var i = e[a++], r = i.tag, v = e[a++], S = t[v];
                if (r !== 5 && r !== 26 && r !== 27 || !Au(i)) {
                  for (; S != null && pr(i, S); )
                    v++, S = t[v];
                  if (v === t.length) {
                    t = !0;
                    break e;
                  } else
                    for (i = i.child; i !== null; )
                      e.push(i, v), i = i.sibling;
                }
              }
              t = !1;
            }
            return t;
          case Ci:
            if ((a === 5 || a === 26 || a === 27) && Fd(e.stateNode, t.value))
              return !0;
            break;
          case Ai:
            if ((a === 5 || a === 6 || a === 26 || a === 27) && (e = Qd(e), e !== null && 0 <= e.indexOf(t.value)))
              return !0;
            break;
          case Di:
            if ((a === 5 || a === 26 || a === 27) && (e = e.memoizedProps["data-testname"], typeof e == "string" && e.toLowerCase() === t.value.toLowerCase()))
              return !0;
            break;
          default:
            throw Error(u(365));
        }
        return !1;
      }
      function mr(e) {
        switch (e.$$typeof) {
          case Ui:
            return "<" + (s(e.value) || "Unknown") + ">";
          case Mi:
            return ":has(" + (mr(e) || "") + ")";
          case Ci:
            return '[role="' + e.value + '"]';
          case Ai:
            return '"' + e.value + '"';
          case Di:
            return '[data-testname="' + e.value + '"]';
          default:
            throw Error(u(365));
        }
      }
      function Uf(e, t) {
        var a = [];
        e = [e, 0];
        for (var i = 0; i < e.length; ) {
          var r = e[i++], v = r.tag, S = e[i++], D = t[S];
          if (v !== 5 && v !== 26 && v !== 27 || !Au(r)) {
            for (; D != null && pr(r, D); )
              S++, D = t[S];
            if (S === t.length) a.push(r);
            else
              for (r = r.child; r !== null; )
                e.push(r, S), r = r.sibling;
          }
        }
        return a;
      }
      function yr(e, t) {
        if (!Du) throw Error(u(363));
        e = hr(e), e = Uf(e, t), t = [], e = Array.from(e);
        for (var a = 0; a < e.length; ) {
          var i = e[a++], r = i.tag;
          if (r === 5 || r === 26 || r === 27)
            Au(i) || t.push(i.stateNode);
          else
            for (i = i.child; i !== null; )
              e.push(i), i = i.sibling;
        }
        return t;
      }
      function la() {
        if ((rt & 2) !== 0 && we !== 0)
          return we & -we;
        if (je.T !== null) {
          var e = Xl;
          return e !== 0 ? e : _e();
        }
        return Nd();
      }
      function Mf() {
        Ea === 0 && (Ea = (we & 536870912) === 0 || Pe ? X() : 536870912);
        var e = Sa.current;
        return e !== null && (e.flags |= 32), Ea;
      }
      function wt(e, t, a) {
        (e === ct && st === 2 || e.cancelPendingCommit !== null) && (Rl(e, 0), Pa(
          e,
          we,
          Ea,
          !1
        )), te(e, a), ((rt & 2) === 0 || e !== ct) && (e === ct && ((rt & 2) === 0 && (il |= a), _t === 4 && Pa(
          e,
          we,
          Ea,
          !1
        )), ve(e));
      }
      function Cf(e, t, a) {
        if ((rt & 6) !== 0) throw Error(u(327));
        var i = !a && (t & 60) === 0 && (t & e.expiredLanes) === 0 || V(e, t), r = i ? od(e, t) : br(e, t, !0), v = i;
        do {
          if (r === 0) {
            Pl && !i && Pa(e, t, 0, !1);
            break;
          } else if (r === 6)
            Pa(
              e,
              t,
              0,
              !an
            );
          else {
            if (a = e.current.alternate, v && !id(a)) {
              r = br(e, t, !1), v = !1;
              continue;
            }
            if (r === 2) {
              if (v = t, e.errorRecoveryDisabledLanes & v)
                var S = 0;
              else
                S = e.pendingLanes & -536870913, S = S !== 0 ? S : S & 536870912 ? 536870912 : 0;
              if (S !== 0) {
                t = S;
                e: {
                  var D = e;
                  r = ju;
                  var G = ha && D.current.memoizedState.isDehydrated;
                  if (G && (Rl(D, S).flags |= 256), S = br(
                    D,
                    S,
                    !1
                  ), S !== 2) {
                    if (eo && !G) {
                      D.errorRecoveryDisabledLanes |= v, il |= v, r = 4;
                      break e;
                    }
                    v = Ha, Ha = r, v !== null && gr(v);
                  }
                  r = S;
                }
                if (v = !1, r !== 2) continue;
              }
            }
            if (r === 1) {
              Rl(e, 0), Pa(e, t, 0, !0);
              break;
            }
            e: {
              switch (i = e, r) {
                case 0:
                case 1:
                  throw Error(u(345));
                case 4:
                  if ((t & 4194176) === t) {
                    Pa(
                      i,
                      t,
                      Ea,
                      !an
                    );
                    break e;
                  }
                  break;
                case 2:
                  Ha = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(u(329));
              }
              if (i.finishedWork = a, i.finishedLanes = t, (t & 62914560) === t && (v = no + 300 - Ra(), 10 < v)) {
                if (Pa(
                  i,
                  t,
                  Ea,
                  !an
                ), x(i, 0) !== 0) break e;
                i.timeoutHandle = Od(
                  Df.bind(
                    null,
                    i,
                    a,
                    Ha,
                    Oi,
                    ao,
                    t,
                    Ea,
                    il,
                    kl,
                    an,
                    2,
                    -0,
                    0
                  ),
                  v
                );
                break e;
              }
              Df(
                i,
                a,
                Ha,
                Oi,
                ao,
                t,
                Ea,
                il,
                kl,
                an,
                0,
                -0,
                0
              );
            }
          }
          break;
        } while (!0);
        ve(e);
      }
      function gr(e) {
        Ha === null ? Ha = e : Ha.push.apply(
          Ha,
          e
        );
      }
      function Df(e, t, a, i, r, v, S, D, G, I, re, ce, he) {
        var qe = t.subtreeFlags;
        if ((qe & 8192 || (qe & 16785408) === 16785408) && (jd(), Ef(t), t = Hd(), t !== null)) {
          e.cancelPendingCommit = t(
            jf.bind(
              null,
              e,
              a,
              i,
              r,
              S,
              D,
              G,
              1,
              ce,
              he
            )
          ), Pa(e, v, S, !I);
          return;
        }
        jf(
          e,
          a,
          i,
          r,
          S,
          D,
          G,
          re,
          ce,
          he
        );
      }
      function id(e) {
        for (var t = e; ; ) {
          var a = t.tag;
          if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
            for (var i = 0; i < a.length; i++) {
              var r = a[i], v = r.getSnapshot;
              r = r.value;
              try {
                if (!oa(v(), r)) return !1;
              } catch {
                return !1;
              }
            }
          if (a = t.child, t.subtreeFlags & 16384 && a !== null)
            a.return = t, t = a;
          else {
            if (t === e) break;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) return !0;
              t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
          }
        }
        return !0;
      }
      function Pa(e, t, a, i) {
        t &= ~to, t &= ~il, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
        for (var r = t; 0 < r; ) {
          var v = 31 - ia(r), S = 1 << v;
          i[v] = -1, r &= ~S;
        }
        a !== 0 && Q(e, a, t);
      }
      function Af() {
        return (rt & 6) === 0 ? (ee(0), !1) : !0;
      }
      function Sr() {
        if (Ke !== null) {
          if (st === 0)
            var e = Ke.return;
          else
            e = Ke, en = ll = null, ml(e), Kl = null, xu = 0, e = Ke;
          for (; e !== null; )
            rf(e.alternate, e), e = e.return;
          Ke = null;
        }
      }
      function Rl(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var a = e.timeoutHandle;
        a !== jr && (e.timeoutHandle = jr, Rd(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Sr(), ct = e, Ke = a = pn(e.current, null), we = t, st = 0, ca = null, an = !1, Pl = V(e, t), eo = !1, kl = Ea = to = il = Tn = _t = 0, Ha = ju = null, ao = !1, (t & 8) !== 0 && (t |= t & 32);
        var i = e.entangledLanes;
        if (i !== 0)
          for (e = e.entanglements, i &= t; 0 < i; ) {
            var r = 31 - ia(i), v = 1 << r;
            t |= e[r], i &= ~v;
          }
        return nn = t, Ae(), a;
      }
      function Of(e, t) {
        Qe = null, je.H = ja, t === Nu ? (t = mt(), st = 3) : t === Wr ? (t = mt(), st = 4) : st = t === Cc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ca = t, Ke === null && (_t = 1, xa(
          e,
          H(t, e.current)
        ));
      }
      function Rf() {
        var e = Sa.current;
        return e === null ? !0 : (we & 4194176) === we ? Ga === null : (we & 62914560) === we || (we & 536870912) !== 0 ? e === Ga : !1;
      }
      function zf() {
        var e = je.H;
        return je.H = ja, e === null ? ja : e;
      }
      function Nf() {
        var e = je.A;
        return je.A = Wv, e;
      }
      function Er() {
        _t = 4, an || (we & 4194176) !== we && Sa.current !== null || (Pl = !0), (Tn & 134217727) === 0 && (il & 134217727) === 0 || ct === null || Pa(
          ct,
          we,
          Ea,
          !1
        );
      }
      function br(e, t, a) {
        var i = rt;
        rt |= 2;
        var r = zf(), v = Nf();
        (ct !== e || we !== t) && (Oi = null, Rl(e, t)), t = !1;
        var S = _t;
        e: do
          try {
            if (st !== 0 && Ke !== null) {
              var D = Ke, G = ca;
              switch (st) {
                case 8:
                  Sr(), S = 6;
                  break e;
                case 3:
                case 2:
                case 6:
                  Sa.current === null && (t = !0);
                  var I = st;
                  if (st = 0, ca = null, zl(e, D, G, I), a && Pl) {
                    S = 0;
                    break e;
                  }
                  break;
                default:
                  I = st, st = 0, ca = null, zl(e, D, G, I);
              }
            }
            rd(), S = _t;
            break;
          } catch (re) {
            Of(e, re);
          }
        while (!0);
        return t && e.shellSuspendCounter++, en = ll = null, rt = i, je.H = r, je.A = v, Ke === null && (ct = null, we = 0, Ae()), S;
      }
      function rd() {
        for (; Ke !== null; ) xf(Ke);
      }
      function od(e, t) {
        var a = rt;
        rt |= 2;
        var i = zf(), r = Nf();
        ct !== e || we !== t ? (Oi = null, Hu = Ra() + 500, Rl(e, t)) : Pl = V(
          e,
          t
        );
        e: do
          try {
            if (st !== 0 && Ke !== null) {
              t = Ke;
              var v = ca;
              t: switch (st) {
                case 1:
                  st = 0, ca = null, zl(e, t, v, 1);
                  break;
                case 2:
                  if (Ta(v)) {
                    st = 0, ca = null, Bf(t);
                    break;
                  }
                  t = function() {
                    st === 2 && ct === e && (st = 7), ve(e);
                  }, v.then(t, t);
                  break e;
                case 3:
                  st = 7;
                  break e;
                case 4:
                  st = 5;
                  break e;
                case 7:
                  Ta(v) ? (st = 0, ca = null, Bf(t)) : (st = 0, ca = null, zl(e, t, v, 7));
                  break;
                case 5:
                  var S = null;
                  switch (Ke.tag) {
                    case 26:
                      S = Ke.memoizedState;
                    case 5:
                    case 27:
                      var D = Ke, G = D.type, I = D.pendingProps;
                      if (S ? Sc(S) : ac(G, I)) {
                        st = 0, ca = null;
                        var re = D.sibling;
                        if (re !== null) Ke = re;
                        else {
                          var ce = D.return;
                          ce !== null ? (Ke = ce, ii(ce)) : Ke = null;
                        }
                        break t;
                      }
                  }
                  st = 0, ca = null, zl(e, t, v, 5);
                  break;
                case 6:
                  st = 0, ca = null, zl(e, t, v, 6);
                  break;
                case 8:
                  Sr(), _t = 6;
                  break e;
                default:
                  throw Error(u(462));
              }
            }
            fd();
            break;
          } catch (he) {
            Of(e, he);
          }
        while (!0);
        return en = ll = null, je.H = i, je.A = r, rt = a, Ke !== null ? 0 : (ct = null, we = 0, Ae(), _t);
      }
      function fd() {
        for (; Ke !== null && !Vv(); )
          xf(Ke);
      }
      function xf(e) {
        var t = $o(
          e.alternate,
          e,
          nn
        );
        e.memoizedProps = e.pendingProps, t === null ? ii(e) : Ke = t;
      }
      function Bf(e) {
        var t = e, a = t.alternate;
        switch (t.tag) {
          case 15:
          case 0:
            t = Su(
              a,
              t,
              t.pendingProps,
              t.type,
              void 0,
              we
            );
            break;
          case 11:
            t = Su(
              a,
              t,
              t.pendingProps,
              t.type.render,
              t.ref,
              we
            );
            break;
          case 5:
            ml(t);
          default:
            rf(a, t), t = Ke = qf(t, nn), t = $o(a, t, nn);
        }
        e.memoizedProps = e.pendingProps, t === null ? ii(e) : Ke = t;
      }
      function zl(e, t, a, i) {
        en = ll = null, ml(t), Kl = null, xu = 0;
        var r = t.return;
        try {
          if (wi(
            e,
            r,
            t,
            a,
            we
          )) {
            _t = 1, xa(
              e,
              H(a, e.current)
            ), Ke = null;
            return;
          }
        } catch (v) {
          if (r !== null) throw Ke = r, v;
          _t = 1, xa(
            e,
            H(a, e.current)
          ), Ke = null;
          return;
        }
        t.flags & 32768 ? (Pe || i === 1 ? e = !0 : Pl || (we & 536870912) !== 0 ? e = !1 : (an = e = !0, (i === 2 || i === 3 || i === 6) && (i = Sa.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Gf(t, e)) : ii(t);
      }
      function ii(e) {
        var t = e;
        do {
          if ((t.flags & 32768) !== 0) {
            Gf(
              t,
              an
            );
            return;
          }
          e = t.return;
          var a = ad(
            t.alternate,
            t,
            nn
          );
          if (a !== null) {
            Ke = a;
            return;
          }
          if (t = t.sibling, t !== null) {
            Ke = t;
            return;
          }
          Ke = t = e;
        } while (t !== null);
        _t === 0 && (_t = 5);
      }
      function Gf(e, t) {
        do {
          var a = nd(e.alternate, e);
          if (a !== null) {
            a.flags &= 32767, Ke = a;
            return;
          }
          if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
            Ke = e;
            return;
          }
          Ke = e = a;
        } while (e !== null);
        _t = 6, Ke = null;
      }
      function jf(e, t, a, i, r, v, S, D, G, I) {
        var re = je.T, ce = kn();
        try {
          $t(2), je.T = null, cd(
            e,
            t,
            a,
            i,
            ce,
            r,
            v,
            S,
            D,
            G,
            I
          );
        } finally {
          je.T = re, $t(ce);
        }
      }
      function cd(e, t, a, i, r, v, S, D) {
        do
          Wn();
        while (rl !== null);
        if ((rt & 6) !== 0) throw Error(u(327));
        var G = e.finishedWork;
        if (i = e.finishedLanes, G === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, G === e.current) throw Error(u(177));
        e.callbackNode = null, e.callbackPriority = 0, e.cancelPendingCommit = null;
        var I = G.lanes | G.childLanes;
        if (I |= Fr, B(
          e,
          i,
          I,
          v,
          S,
          D
        ), e === ct && (Ke = ct = null, we = 0), (G.subtreeFlags & 10256) === 0 && (G.flags & 10256) === 0 || Ri || (Ri = !0, lo = I, uo = a, hd(Xr, function() {
          return Wn(), null;
        })), a = (G.flags & 15990) !== 0, (G.subtreeFlags & 15990) !== 0 || a ? (a = je.T, je.T = null, v = kn(), $t(2), S = rt, rt |= 4, ld(e, G), yf(G, e), Dd(e.containerInfo), e.current = G, hf(e, G.alternate, G), Lv(), rt = S, $t(v), je.T = a) : e.current = G, Ri ? (Ri = !1, rl = e, Vu = i) : Hf(e, I), I = e.pendingLanes, I === 0 && (Un = null), U(G.stateNode), ve(e), t !== null)
          for (r = e.onRecoverableError, G = 0; G < t.length; G++)
            I = t[G], r(I.value, {
              componentStack: I.stack
            });
        return (Vu & 3) !== 0 && Wn(), I = e.pendingLanes, (i & 4194218) !== 0 && (I & 42) !== 0 ? e === io ? Lu++ : (Lu = 0, io = e) : Lu = 0, ee(0), null;
      }
      function Hf(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, bu(t)));
      }
      function Wn() {
        if (rl !== null) {
          var e = rl, t = lo;
          lo = 0;
          var a = ne(Vu), i = 32 > a ? 32 : a;
          a = je.T;
          var r = kn();
          try {
            if ($t(i), je.T = null, rl === null)
              var v = !1;
            else {
              i = uo, uo = null;
              var S = rl, D = Vu;
              if (rl = null, Vu = 0, (rt & 6) !== 0)
                throw Error(u(331));
              var G = rt;
              if (rt |= 4, _f(S.current), Sf(
                S,
                S.current,
                D,
                i
              ), rt = G, ee(0, !1), ra && typeof ra.onPostCommitFiberRoot == "function")
                try {
                  ra.onPostCommitFiberRoot(Ou, S);
                } catch {
                }
              v = !0;
            }
            return v;
          } finally {
            $t(r), je.T = a, Hf(e, t);
          }
        }
        return !1;
      }
      function Vf(e, t, a) {
        t = H(a, t), t = Za(e.stateNode, t, 2), e = Ge(e, t, 2), e !== null && (te(e, 2), ve(e));
      }
      function ut(e, t, a) {
        if (e.tag === 3)
          Vf(e, e, a);
        else
          for (; t !== null; ) {
            if (t.tag === 3) {
              Vf(
                t,
                e,
                a
              );
              break;
            } else if (t.tag === 1) {
              var i = t.stateNode;
              if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Un === null || !Un.has(i))) {
                e = H(a, e), a = Dl(2), i = Ge(t, a, 2), i !== null && (Yt(
                  a,
                  i,
                  t,
                  e
                ), te(i, 2), ve(i));
                break;
              }
            }
            t = t.return;
          }
      }
      function _r(e, t, a) {
        var i = e.pingCache;
        if (i === null) {
          i = e.pingCache = new Pv();
          var r = /* @__PURE__ */ new Set();
          i.set(t, r);
        } else
          r = i.get(t), r === void 0 && (r = /* @__PURE__ */ new Set(), i.set(t, r));
        r.has(a) || (eo = !0, r.add(a), e = sd.bind(null, e, t, a), t.then(e, e));
      }
      function sd(e, t, a) {
        var i = e.pingCache;
        i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, ct === e && (we & a) === a && (_t === 4 || _t === 3 && (we & 62914560) === we && 300 > Ra() - no ? (rt & 2) === 0 && Rl(e, 0) : to |= a, kl === we && (kl = 0)), ve(e);
      }
      function Lf(e, t) {
        t === 0 && (t = k()), e = be(e, t), e !== null && (te(e, t), ve(e));
      }
      function dd(e) {
        var t = e.memoizedState, a = 0;
        t !== null && (a = t.retryLane), Lf(e, a);
      }
      function vd(e, t) {
        var a = 0;
        switch (e.tag) {
          case 13:
            var i = e.stateNode, r = e.memoizedState;
            r !== null && (a = r.retryLane);
            break;
          case 19:
            i = e.stateNode;
            break;
          case 22:
            i = e.stateNode._retryCache;
            break;
          default:
            throw Error(u(314));
        }
        i !== null && i.delete(t), Lf(e, a);
      }
      function hd(e, t) {
        return vi(e, t);
      }
      function pd(e, t, a, i) {
        this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Tr(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
      }
      function pn(e, t) {
        var a = e.alternate;
        return a === null ? (a = p(
          e.tag,
          t,
          e.key,
          e.mode
        ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 31457280, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext
        }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
      }
      function qf(e, t) {
        e.flags &= 31457282;
        var a = e.alternate;
        return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext
        }), e;
      }
      function ri(e, t, a, i, r, v) {
        var S = 0;
        if (i = e, typeof e == "function") Tr(e) && (S = 1);
        else if (typeof e == "string")
          S = pa && Ft ? vc(e, a, Vt.current) ? 26 : bc(e) ? 27 : 5 : pa ? vc(
            e,
            a,
            Vt.current
          ) ? 26 : 5 : Ft && bc(e) ? 27 : 5;
        else
          e: switch (e) {
            case xl:
              return Pn(
                a.children,
                r,
                v,
                t
              );
            case wf:
              S = 8, r |= 24;
              break;
            case Ar:
              return e = p(12, a, t, r | 2), e.elementType = Ar, e.lanes = v, e;
            case Rr:
              return e = p(13, a, t, r), e.elementType = Rr, e.lanes = v, e;
            case zr:
              return e = p(19, a, t, r), e.elementType = zr, e.lanes = v, e;
            case Wf:
              return Yf(a, r, v, t);
            default:
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Sd:
                  case mn:
                    S = 10;
                    break e;
                  case Jf:
                    S = 9;
                    break e;
                  case Or:
                    S = 11;
                    break e;
                  case Nr:
                    S = 14;
                    break e;
                  case yn:
                    S = 16, i = null;
                    break e;
                }
              S = 29, a = Error(
                u(
                  130,
                  e === null ? "null" : typeof e,
                  ""
                )
              ), i = null;
          }
        return t = p(S, a, t, r), t.elementType = e, t.type = i, t.lanes = v, t;
      }
      function Pn(e, t, a, i) {
        return e = p(7, e, i, t), e.lanes = a, e;
      }
      function Yf(e, t, a, i) {
        e = p(22, e, i, t), e.elementType = Wf, e.lanes = a;
        var r = {
          _visibility: 1,
          _pendingVisibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
          _current: null,
          detach: function() {
            var v = r._current;
            if (v === null) throw Error(u(456));
            if ((r._pendingVisibility & 2) === 0) {
              var S = be(v, 2);
              S !== null && (r._pendingVisibility |= 2, wt(S, v, 2));
            }
          },
          attach: function() {
            var v = r._current;
            if (v === null) throw Error(u(456));
            if ((r._pendingVisibility & 2) !== 0) {
              var S = be(v, 2);
              S !== null && (r._pendingVisibility &= -3, wt(S, v, 2));
            }
          }
        };
        return e.stateNode = r, e;
      }
      function Ur(e, t, a) {
        return e = p(6, e, null, t), e.lanes = a, e;
      }
      function Mr(e, t, a) {
        return t = p(
          4,
          e.children !== null ? e.children : [],
          e.key,
          t
        ), t.lanes = a, t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }, t;
      }
      function md(e, t, a, i, r, v, S, D) {
        this.tag = 1, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = jr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = w(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = w(0), this.hiddenUpdates = w(null), this.identifierPrefix = i, this.onUncaughtError = r, this.onCaughtError = v, this.onRecoverableError = S, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = D, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function Xf(e, t, a, i, r, v, S, D, G, I, re, ce) {
        return e = new md(
          e,
          t,
          a,
          S,
          D,
          G,
          I,
          ce
        ), t = 1, v === !0 && (t |= 24), v = p(3, null, null, t), e.current = v, v.stateNode = e, t = nr(), t.refCount++, e.pooledCache = t, t.refCount++, v.memoizedState = {
          element: i,
          isDehydrated: a,
          cache: t
        }, $e(v), e;
      }
      function Qf(e) {
        return e ? (e = jl, e) : jl;
      }
      function Ff(e) {
        var t = e._reactInternals;
        if (t === void 0)
          throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
        return e = E(t), e = e !== null ? _(e) : null, e === null ? null : Cu(e.stateNode);
      }
      function Kf(e, t, a, i, r, v) {
        r = Qf(r), i.context === null ? i.context = r : i.pendingContext = r, i = Be(t), i.payload = { element: a }, v = v === void 0 ? null : v, v !== null && (i.callback = v), a = Ge(e, i, t), a !== null && (wt(a, e, t), Me(a, e, t));
      }
      function Zf(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
          var a = e.retryLane;
          e.retryLane = a !== 0 && a < t ? a : t;
        }
      }
      function Cr(e, t) {
        Zf(e, t), (e = e.alternate) && Zf(e, t);
      }
      var Fe = {}, yd = sl, ua = Oh(), Dr = Object.assign, gd = Symbol.for("react.element"), oi = Symbol.for("react.transitional.element"), Nl = Symbol.for("react.portal"), xl = Symbol.for("react.fragment"), wf = Symbol.for("react.strict_mode"), Ar = Symbol.for("react.profiler"), Sd = Symbol.for("react.provider"), Jf = Symbol.for("react.consumer"), mn = Symbol.for("react.context"), Or = Symbol.for("react.forward_ref"), Rr = Symbol.for("react.suspense"), zr = Symbol.for("react.suspense_list"), Nr = Symbol.for("react.memo"), yn = Symbol.for("react.lazy"), Wf = Symbol.for("react.offscreen"), Ed = Symbol.for("react.memo_cache_sentinel"), Pf = Symbol.iterator, bd = Symbol.for("react.client.reference"), je = yd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xr, kf, Br = !1, fi = Array.isArray, _d = l.rendererVersion, Td = l.rendererPackageName, If = l.extraDevToolsConfig, Cu = l.getPublicInstance, Ud = l.getRootHostContext, Md = l.getChildHostContext, Cd = l.prepareForCommit, Dd = l.resetAfterCommit, Ad = l.createInstance, Gr = l.appendInitialChild, $f = l.finalizeInitialChildren, ci = l.shouldSetTextContent, ec = l.createTextInstance, Od = l.scheduleTimeout, Rd = l.cancelTimeout, jr = l.noTimeout, ka = l.isPrimaryRenderer;
      l.warnsIfNotActing;
      var Qt = l.supportsMutation, gn = l.supportsPersistence, ha = l.supportsHydration, tc = l.getInstanceFromNode;
      l.beforeActiveInstanceBlur, l.afterActiveInstanceBlur;
      var zd = l.preparePortalMount;
      l.prepareScopeUpdate, l.getInstanceFromScope;
      var $t = l.setCurrentUpdatePriority, kn = l.getCurrentUpdatePriority, Nd = l.resolveUpdatePriority;
      l.resolveEventType, l.resolveEventTimeStamp;
      var xd = l.shouldAttemptEagerTransition, Bd = l.detachDeletedInstance;
      l.requestPostPaintCallback;
      var Gd = l.maySuspendCommit, ac = l.preloadInstance, jd = l.startSuspendingCommit, nc = l.suspendInstance, Hd = l.waitForCommitToBeReady, Bl = l.NotPendingTransition, In = l.HostTransitionContext, Vd = l.resetFormInstance;
      l.bindToConsole;
      var Ld = l.supportsMicrotasks, qd = l.scheduleMicrotask, Du = l.supportsTestSelectors, Yd = l.findFiberRoot, Xd = l.getBoundingRect, Qd = l.getTextContent, Au = l.isHiddenSubtree, Fd = l.matchAccessibilityRole, Kd = l.setFocusIfFocusable, Zd = l.setupIntersectionObserver, wd = l.appendChild, Jd = l.appendChildToContainer, Wd = l.commitTextUpdate, Pd = l.commitMount, kd = l.commitUpdate, Id = l.insertBefore, $d = l.insertInContainerBefore, ev = l.removeChild, tv = l.removeChildFromContainer, lc = l.resetTextContent, av = l.hideInstance, nv = l.hideTextInstance, lv = l.unhideInstance, uv = l.unhideTextInstance, iv = l.clearContainer, rv = l.cloneInstance, uc = l.createContainerChildSet, ic = l.appendChildToContainerChildSet, ov = l.finalizeContainerChildren, rc = l.replaceContainerChildren, oc = l.cloneHiddenInstance, fc = l.cloneHiddenTextInstance, Hr = l.isSuspenseInstancePending, Vr = l.isSuspenseInstanceFallback, fv = l.getSuspenseInstanceFallbackErrorDetails, cv = l.registerSuspenseInstanceRetry, sv = l.canHydrateFormStateMarker, dv = l.isFormStateMarkerMatching, cc = l.getNextHydratableSibling, sc = l.getFirstHydratableChild, vv = l.getFirstHydratableChildWithinContainer, hv = l.getFirstHydratableChildWithinSuspenseInstance, pv = l.canHydrateInstance, mv = l.canHydrateTextInstance, yv = l.canHydrateSuspenseInstance, gv = l.hydrateInstance, Sv = l.hydrateTextInstance, Ev = l.hydrateSuspenseInstance, bv = l.getNextHydratableInstanceAfterSuspenseInstance, _v = l.commitHydratedContainer, Tv = l.commitHydratedSuspenseInstance, Uv = l.clearSuspenseBoundary, Mv = l.clearSuspenseBoundaryFromContainer, dc = l.shouldDeleteUnhydratedTailInstances;
      l.diffHydratedPropsForDevWarnings, l.diffHydratedTextForDevWarnings, l.describeHydratableInstanceForDevWarnings;
      var Cv = l.validateHydratableInstance, Dv = l.validateHydratableTextInstance, pa = l.supportsResources, vc = l.isHostHoistableType, Lr = l.getHoistableRoot, hc = l.getResource, pc = l.acquireResource, mc = l.releaseResource, Av = l.hydrateHoistable, yc = l.mountHoistable, gc = l.unmountHoistable, Ov = l.createHoistableInstance, Rv = l.prepareToCommitHoistables, zv = l.mayResourceSuspendCommit, Sc = l.preloadResource, Nv = l.suspendResource, Ft = l.supportsSingletons, Ec = l.resolveSingletonInstance, xv = l.clearSingleton, Bv = l.acquireSingletonInstance, Gv = l.releaseSingletonInstance, bc = l.isHostSingletonType, qr = [], Gl = -1, jl = {}, ia = Math.clz32 ? Math.clz32 : z, jv = Math.log, Hv = Math.LN2, si = 128, di = 4194304, vi = ua.unstable_scheduleCallback, Yr = ua.unstable_cancelCallback, Vv = ua.unstable_shouldYield, Lv = ua.unstable_requestPaint, Ra = ua.unstable_now, _c = ua.unstable_ImmediatePriority, qv = ua.unstable_UserBlockingPriority, Xr = ua.unstable_NormalPriority, Yv = ua.unstable_IdlePriority, Xv = ua.log, Qv = ua.unstable_setDisableYieldValue, Ou = null, ra = null, oa = typeof Object.is == "function" ? Object.is : W, Tc = /* @__PURE__ */ new WeakMap(), Hl = [], Vl = 0, hi = null, pi = 0, ma = [], ya = 0, $n = null, Ia = 1, $a = "", Vt = T(null), Ru = T(null), Sn = T(null), mi = T(null), Jt = null, Kt = null, Pe = !1, za = null, Ba = !1, Qr = Error(u(519)), ga = [], Ll = 0, Fr = 0, yi = null, ql = null, Kr = !1, gi = !1, Zr = !1, Yl = 0, zu = null, wr = 0, Xl = 0, Ql = null, En = !1, Jr = !1, Fv = Object.prototype.hasOwnProperty, Nu = Error(u(460)), Wr = Error(u(474)), Si = { then: function() {
      } }, Fl = null, Kl = null, xu = 0, el = At(!0), Uc = At(!1), Zl = T(null), Ei = T(0), Sa = T(null), Ga = null, zt = T(0), bn = 0, Qe = null, it = null, Ct = null, bi = !1, wl = !1, tl = !1, _i = 0, Bu = 0, Jl = null, Kv = 0, Pr = function() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }, ja = {
        readContext: Xt,
        use: Te,
        useCallback: lt,
        useContext: lt,
        useEffect: lt,
        useImperativeHandle: lt,
        useLayoutEffect: lt,
        useInsertionEffect: lt,
        useMemo: lt,
        useReducer: lt,
        useRef: lt,
        useState: lt,
        useDebugValue: lt,
        useDeferredValue: lt,
        useTransition: lt,
        useSyncExternalStore: lt,
        useId: lt
      };
      ja.useCacheRefresh = lt, ja.useMemoCache = lt, ja.useHostTransitionStatus = lt, ja.useFormState = lt, ja.useActionState = lt, ja.useOptimistic = lt;
      var al = {
        readContext: Xt,
        use: Te,
        useCallback: function(e, t) {
          return Rt().memoizedState = [
            e,
            t === void 0 ? null : t
          ], e;
        },
        useContext: Xt,
        useEffect: Tl,
        useImperativeHandle: function(e, t, a) {
          a = a != null ? a.concat([e]) : null, Vn(
            4194308,
            4,
            Xa.bind(null, t, e),
            a
          );
        },
        useLayoutEffect: function(e, t) {
          return Vn(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
          Vn(4, 2, e, t);
        },
        useMemo: function(e, t) {
          var a = Rt();
          t = t === void 0 ? null : t;
          var i = e();
          if (tl) {
            F(!0);
            try {
              e();
            } finally {
              F(!1);
            }
          }
          return a.memoizedState = [i, t], i;
        },
        useReducer: function(e, t, a) {
          var i = Rt();
          if (a !== void 0) {
            var r = a(t);
            if (tl) {
              F(!0);
              try {
                a(t);
              } finally {
                F(!1);
              }
            }
          } else r = t;
          return i.memoizedState = i.baseState = r, e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: r
          }, i.queue = e, e = e.dispatch = Iu.bind(
            null,
            Qe,
            e
          ), [i.memoizedState, e];
        },
        useRef: function(e) {
          var t = Rt();
          return e = { current: e }, t.memoizedState = e;
        },
        useState: function(e) {
          e = xn(e);
          var t = e.queue, a = pu.bind(
            null,
            Qe,
            t
          );
          return t.dispatch = a, [e.memoizedState, a];
        },
        useDebugValue: Fa,
        useDeferredValue: function(e, t) {
          var a = Rt();
          return Yn(a, e, t);
        },
        useTransition: function() {
          var e = xn(!1);
          return e = du.bind(
            null,
            Qe,
            e.queue,
            !0,
            !1
          ), Rt().memoizedState = e, [!1, e];
        },
        useSyncExternalStore: function(e, t, a) {
          var i = Qe, r = Rt();
          if (Pe) {
            if (a === void 0)
              throw Error(u(407));
            a = a();
          } else {
            if (a = t(), ct === null)
              throw Error(u(349));
            (we & 60) !== 0 || Rn(i, t, a);
          }
          r.memoizedState = a;
          var v = { value: a, getSnapshot: t };
          return r.queue = v, Tl(ru.bind(null, i, v, e), [
            e
          ]), i.flags |= 2048, Da(
            9,
            zn.bind(
              null,
              i,
              v,
              a,
              t
            ),
            { destroy: void 0 },
            null
          ), a;
        },
        useId: function() {
          var e = Rt(), t = ct.identifierPrefix;
          if (Pe) {
            var a = $a, i = Ia;
            a = (i & ~(1 << 32 - ia(i) - 1)).toString(32) + a, t = ":" + t + "R" + a, a = _i++, 0 < a && (t += "H" + a.toString(32)), t += ":";
          } else
            a = Kv++, t = ":" + t + "r" + a.toString(32) + ":";
          return e.memoizedState = t;
        },
        useCacheRefresh: function() {
          return Rt().memoizedState = hu.bind(
            null,
            Qe
          );
        }
      };
      al.useMemoCache = La, al.useHostTransitionStatus = Qn, al.useFormState = Pu, al.useActionState = Pu, al.useOptimistic = function(e) {
        var t = Rt();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = a, t = Ml.bind(
          null,
          Qe,
          !0,
          a
        ), a.dispatch = t, [e, t];
      };
      var _n = {
        readContext: Xt,
        use: Te,
        useCallback: su,
        useContext: Xt,
        useEffect: Ya,
        useImperativeHandle: Qa,
        useInsertionEffect: cu,
        useLayoutEffect: qn,
        useMemo: on,
        useReducer: Ca,
        useRef: _l,
        useState: function() {
          return Ca(Ma);
        },
        useDebugValue: Fa,
        useDeferredValue: function(e, t) {
          var a = ht();
          return Ul(
            a,
            it.memoizedState,
            e,
            t
          );
        },
        useTransition: function() {
          var e = Ca(Ma)[0], t = ht().memoizedState;
          return [
            typeof e == "boolean" ? e : Va(e),
            t
          ];
        },
        useSyncExternalStore: gl,
        useId: vu
      };
      _n.useCacheRefresh = Pt, _n.useMemoCache = La, _n.useHostTransitionStatus = Qn, _n.useFormState = jn, _n.useActionState = jn, _n.useOptimistic = function(e, t) {
        var a = ht();
        return fu(a, it, e, t);
      };
      var nl = {
        readContext: Xt,
        use: Te,
        useCallback: su,
        useContext: Xt,
        useEffect: Ya,
        useImperativeHandle: Qa,
        useInsertionEffect: cu,
        useLayoutEffect: qn,
        useMemo: on,
        useReducer: yl,
        useRef: _l,
        useState: function() {
          return yl(Ma);
        },
        useDebugValue: Fa,
        useDeferredValue: function(e, t) {
          var a = ht();
          return it === null ? Yn(a, e, t) : Ul(
            a,
            it.memoizedState,
            e,
            t
          );
        },
        useTransition: function() {
          var e = yl(Ma)[0], t = ht().memoizedState;
          return [
            typeof e == "boolean" ? e : Va(e),
            t
          ];
        },
        useSyncExternalStore: gl,
        useId: vu
      };
      nl.useCacheRefresh = Pt, nl.useMemoCache = La, nl.useHostTransitionStatus = Qn, nl.useFormState = Hn, nl.useActionState = Hn, nl.useOptimistic = function(e, t) {
        var a = ht();
        return it !== null ? fu(a, it, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
      };
      var kr = {
        isMounted: function(e) {
          return (e = e._reactInternals) ? y(e) === e : !1;
        },
        enqueueSetState: function(e, t, a) {
          e = e._reactInternals;
          var i = la(), r = Be(i);
          r.payload = t, a != null && (r.callback = a), t = Ge(e, r, i), t !== null && (wt(t, e, i), Me(t, e, i));
        },
        enqueueReplaceState: function(e, t, a) {
          e = e._reactInternals;
          var i = la(), r = Be(i);
          r.tag = 1, r.payload = t, a != null && (r.callback = a), t = Ge(e, r, i), t !== null && (wt(t, e, i), Me(t, e, i));
        },
        enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var a = la(), i = Be(a);
          i.tag = 2, t != null && (i.callback = t), t = Ge(e, i, a), t !== null && (wt(t, e, a), Me(t, e, a));
        }
      }, Mc = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var t = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(t)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, Cc = Error(u(461)), Bt = !1, Ir = { dehydrated: null, treeContext: null, retryLane: 0 }, Ti = T(null), ll = null, en = null, Zv = typeof AbortController < "u" ? AbortController : function() {
        var e = [], t = this.signal = {
          aborted: !1,
          addEventListener: function(a, i) {
            e.push(i);
          }
        };
        this.abort = function() {
          t.aborted = !0, e.forEach(function(a) {
            return a();
          });
        };
      }, wv = ua.unstable_scheduleCallback, Jv = ua.unstable_NormalPriority, Et = {
        $$typeof: mn,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      }, Dc = je.S;
      je.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && Ce(e, t), Dc !== null && Dc(e, t);
      };
      var ul = T(null), tn = !1, bt = !1, $r = !1, Ac = typeof WeakSet == "function" ? WeakSet : Set, Gt = null, Oc = !1, Dt = null, fa = !1, Na = null, Wl = 8192, Wv = {
        getCacheForType: function(e) {
          var t = Xt(Et), a = t.data.get(e);
          return a === void 0 && (a = e(), t.data.set(e, a)), a;
        }
      }, Ui = 0, Mi = 1, Ci = 2, Di = 3, Ai = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var Gu = Symbol.for;
        Ui = Gu("selector.component"), Mi = Gu("selector.has_pseudo_class"), Ci = Gu("selector.role"), Di = Gu("selector.test_id"), Ai = Gu("selector.text");
      }
      var Pv = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, ct = null, Ke = null, we = 0, st = 0, ca = null, an = !1, Pl = !1, eo = !1, nn = 0, _t = 0, Tn = 0, il = 0, to = 0, Ea = 0, kl = 0, ju = null, Ha = null, ao = !1, no = 0, Hu = 1 / 0, Oi = null, Un = null, Ri = !1, rl = null, Vu = 0, lo = 0, uo = null, Lu = 0, io = null;
      return Fe.attemptContinuousHydration = function(e) {
        if (e.tag === 13) {
          var t = be(e, 67108864);
          t !== null && wt(t, e, 67108864), Cr(e, 67108864);
        }
      }, Fe.attemptHydrationAtCurrentPriority = function(e) {
        if (e.tag === 13) {
          var t = la(), a = be(e, t);
          a !== null && wt(a, e, t), Cr(e, t);
        }
      }, Fe.attemptSynchronousHydration = function(e) {
        switch (e.tag) {
          case 3:
            if (e = e.stateNode, e.current.memoizedState.isDehydrated) {
              var t = O(e.pendingLanes);
              if (t !== 0) {
                for (e.pendingLanes |= 2, e.entangledLanes |= 2; t; ) {
                  var a = 1 << 31 - ia(t);
                  e.entanglements[1] |= a, t &= ~a;
                }
                ve(e), (rt & 6) === 0 && (Hu = Ra() + 500, ee(0));
              }
            }
            break;
          case 13:
            t = be(e, 2), t !== null && wt(t, e, 2), Af(), Cr(e, 2);
        }
      }, Fe.batchedUpdates = function(e, t) {
        return e(t);
      }, Fe.createComponentSelector = function(e) {
        return { $$typeof: Ui, value: e };
      }, Fe.createContainer = function(e, t, a, i, r, v, S, D, G, I) {
        return Xf(
          e,
          t,
          !1,
          null,
          a,
          i,
          v,
          S,
          D,
          G,
          I,
          null
        );
      }, Fe.createHasPseudoClassSelector = function(e) {
        return { $$typeof: Mi, value: e };
      }, Fe.createHydrationContainer = function(e, t, a, i, r, v, S, D, G, I, re, ce, he) {
        return e = Xf(
          a,
          i,
          !0,
          e,
          r,
          v,
          D,
          G,
          I,
          re,
          ce,
          he
        ), e.context = Qf(null), a = e.current, i = la(), r = Be(i), r.callback = t ?? null, Ge(a, r, i), e.current.lanes = i, te(e, i), ve(e), e;
      }, Fe.createPortal = function(e, t, a) {
        var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Nl,
          key: i == null ? null : "" + i,
          children: e,
          containerInfo: t,
          implementation: a
        };
      }, Fe.createRoleSelector = function(e) {
        return { $$typeof: Ci, value: e };
      }, Fe.createTestNameSelector = function(e) {
        return { $$typeof: Di, value: e };
      }, Fe.createTextSelector = function(e) {
        return { $$typeof: Ai, value: e };
      }, Fe.defaultOnCaughtError = function(e) {
        console.error(e);
      }, Fe.defaultOnRecoverableError = function(e) {
        Mc(e);
      }, Fe.defaultOnUncaughtError = function(e) {
        Mc(e);
      }, Fe.deferredUpdates = function(e) {
        var t = je.T, a = kn();
        try {
          return $t(32), je.T = null, e();
        } finally {
          $t(a), je.T = t;
        }
      }, Fe.discreteUpdates = function(e, t, a, i, r) {
        var v = je.T, S = kn();
        try {
          return $t(2), je.T = null, e(t, a, i, r);
        } finally {
          $t(S), je.T = v, rt === 0 && (Hu = Ra() + 500);
        }
      }, Fe.findAllNodes = yr, Fe.findBoundingRects = function(e, t) {
        if (!Du) throw Error(u(363));
        t = yr(e, t), e = [];
        for (var a = 0; a < t.length; a++)
          e.push(Xd(t[a]));
        for (t = e.length - 1; 0 < t; t--) {
          a = e[t];
          for (var i = a.x, r = i + a.width, v = a.y, S = v + a.height, D = t - 1; 0 <= D; D--)
            if (t !== D) {
              var G = e[D], I = G.x, re = I + G.width, ce = G.y, he = ce + G.height;
              if (i >= I && v >= ce && r <= re && S <= he) {
                e.splice(t, 1);
                break;
              } else if (i !== I || a.width !== G.width || he < v || ce > S) {
                if (!(v !== ce || a.height !== G.height || re < i || I > r)) {
                  I > i && (G.width += I - i, G.x = i), re < r && (G.width = r - I), e.splice(t, 1);
                  break;
                }
              } else {
                ce > v && (G.height += ce - v, G.y = v), he < S && (G.height = S - ce), e.splice(t, 1);
                break;
              }
            }
        }
        return e;
      }, Fe.findHostInstance = Ff, Fe.findHostInstanceWithNoPortals = function(e) {
        return e = E(e), e = e !== null ? A(e) : null, e === null ? null : Cu(e.stateNode);
      }, Fe.findHostInstanceWithWarning = function(e) {
        return Ff(e);
      }, Fe.flushPassiveEffects = Wn, Fe.flushSyncFromReconciler = function(e) {
        var t = rt;
        rt |= 1;
        var a = je.T, i = kn();
        try {
          if ($t(2), je.T = null, e)
            return e();
        } finally {
          $t(i), je.T = a, rt = t, (rt & 6) === 0 && ee(0);
        }
      }, Fe.flushSyncWork = Af, Fe.focusWithin = function(e, t) {
        if (!Du) throw Error(u(363));
        for (e = hr(e), t = Uf(e, t), t = Array.from(t), e = 0; e < t.length; ) {
          var a = t[e++], i = a.tag;
          if (!Au(a)) {
            if ((i === 5 || i === 26 || i === 27) && Kd(a.stateNode))
              return !0;
            for (a = a.child; a !== null; )
              t.push(a), a = a.sibling;
          }
        }
        return !1;
      }, Fe.getFindAllNodesFailureDescription = function(e, t) {
        if (!Du) throw Error(u(363));
        var a = 0, i = [];
        e = [hr(e), 0];
        for (var r = 0; r < e.length; ) {
          var v = e[r++], S = v.tag, D = e[r++], G = t[D];
          if ((S !== 5 && S !== 26 && S !== 27 || !Au(v)) && (pr(v, G) && (i.push(mr(G)), D++, D > a && (a = D)), D < t.length))
            for (v = v.child; v !== null; )
              e.push(v, D), v = v.sibling;
        }
        if (a < t.length) {
          for (e = []; a < t.length; a++)
            e.push(mr(t[a]));
          return `findAllNodes was able to match part of the selector:
  ` + (i.join(" > ") + `

No matching component was found for:
  `) + e.join(" > ");
        }
        return null;
      }, Fe.getPublicRootInstance = function(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
          case 27:
          case 5:
            return Cu(e.child.stateNode);
          default:
            return e.child.stateNode;
        }
      }, Fe.injectIntoDevTools = function() {
        var e = {
          bundleType: 0,
          version: _d,
          rendererPackageName: Td,
          currentDispatcherRef: je,
          findFiberByHostInstance: tc,
          reconcilerVersion: "19.0.0"
        };
        if (If !== null && (e.rendererConfig = If), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") e = !1;
        else {
          var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (t.isDisabled || !t.supportsFiber) e = !0;
          else {
            try {
              Ou = t.inject(e), ra = t;
            } catch {
            }
            e = !!t.checkDCE;
          }
        }
        return e;
      }, Fe.isAlreadyRendering = function() {
        return !1;
      }, Fe.observeVisibleRects = function(e, t, a, i) {
        if (!Du) throw Error(u(363));
        e = yr(e, t);
        var r = Zd(
          e,
          a,
          i
        ).disconnect;
        return {
          disconnect: function() {
            r();
          }
        };
      }, Fe.shouldError = function() {
        return null;
      }, Fe.shouldSuspend = function() {
        return !1;
      }, Fe.startHostTransition = function(e, t, a, i) {
        if (e.tag !== 5) throw Error(u(476));
        var r = Xn(e).queue;
        du(
          e,
          r,
          t,
          Bl,
          a === null ? m : function() {
            var v = Xn(e).next.queue;
            return Ka(
              e,
              v,
              {},
              la()
            ), a(i);
          }
        );
      }, Fe.updateContainer = function(e, t, a, i) {
        var r = t.current, v = la();
        return Kf(
          r,
          v,
          e,
          t,
          a,
          i
        ), v;
      }, Fe.updateContainerSync = function(e, t, a, i) {
        return t.tag === 0 && Wn(), Kf(
          t.current,
          2,
          e,
          t,
          a,
          i
        ), 2;
      }, Fe;
    }, o.exports.default = o.exports, Object.defineProperty(o.exports, "__esModule", { value: !0 });
  }(ho)), ho.exports;
}
var Qc;
function zh() {
  return Qc || (Qc = 1, vo.exports = Rh()), vo.exports;
}
var Nh = zh();
const xh = /* @__PURE__ */ gs(Nh);
var yo = { exports: {} }, go = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fc;
function Bh() {
  return Fc || (Fc = 1, function(o) {
    function l(U, F) {
      var W = U.length;
      U.push(F);
      e: for (; 0 < W; ) {
        var H = W - 1 >>> 1, q = U[H];
        if (0 < u(q, F))
          U[H] = F, U[W] = q, W = H;
        else break e;
      }
    }
    function p(U) {
      return U.length === 0 ? null : U[0];
    }
    function m(U) {
      if (U.length === 0) return null;
      var F = U[0], W = U.pop();
      if (W !== F) {
        U[0] = W;
        e: for (var H = 0, q = U.length, C = q >>> 1; H < C; ) {
          var R = 2 * (H + 1) - 1, J = U[R], L = R + 1, K = U[L];
          if (0 > u(J, W))
            L < q && 0 > u(K, J) ? (U[H] = K, U[L] = W, H = L) : (U[H] = J, U[R] = W, H = R);
          else if (L < q && 0 > u(K, W))
            U[H] = K, U[L] = W, H = L;
          else break e;
        }
      }
      return F;
    }
    function u(U, F) {
      var W = U.sortIndex - F.sortIndex;
      return W !== 0 ? W : U.id - F.id;
    }
    if (o.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var n = performance;
      o.unstable_now = function() {
        return n.now();
      };
    } else {
      var s = Date, c = s.now();
      o.unstable_now = function() {
        return s.now() - c;
      };
    }
    var f = [], d = [], h = 1, y = null, g = 3, E = !1, _ = !1, A = !1, T = typeof setTimeout == "function" ? setTimeout : null, M = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    function z(U) {
      for (var F = p(d); F !== null; ) {
        if (F.callback === null) m(d);
        else if (F.startTime <= U)
          m(d), F.sortIndex = F.expirationTime, l(f, F);
        else break;
        F = p(d);
      }
    }
    function O(U) {
      if (A = !1, z(U), !_)
        if (p(f) !== null)
          _ = !0, Y();
        else {
          var F = p(d);
          F !== null && ne(O, F.startTime - U);
        }
    }
    var x = !1, V = -1, j = 5, X = -1;
    function k() {
      return !(o.unstable_now() - X < j);
    }
    function w() {
      if (x) {
        var U = o.unstable_now();
        X = U;
        var F = !0;
        try {
          e: {
            _ = !1, A && (A = !1, M(V), V = -1), E = !0;
            var W = g;
            try {
              t: {
                for (z(U), y = p(f); y !== null && !(y.expirationTime > U && k()); ) {
                  var H = y.callback;
                  if (typeof H == "function") {
                    y.callback = null, g = y.priorityLevel;
                    var q = H(
                      y.expirationTime <= U
                    );
                    if (U = o.unstable_now(), typeof q == "function") {
                      y.callback = q, z(U), F = !0;
                      break t;
                    }
                    y === p(f) && m(f), z(U);
                  } else m(f);
                  y = p(f);
                }
                if (y !== null) F = !0;
                else {
                  var C = p(d);
                  C !== null && ne(
                    O,
                    C.startTime - U
                  ), F = !1;
                }
              }
              break e;
            } finally {
              y = null, g = W, E = !1;
            }
            F = void 0;
          }
        } finally {
          F ? te() : x = !1;
        }
      }
    }
    var te;
    if (typeof b == "function")
      te = function() {
        b(w);
      };
    else if (typeof MessageChannel < "u") {
      var B = new MessageChannel(), Q = B.port2;
      B.port1.onmessage = w, te = function() {
        Q.postMessage(null);
      };
    } else
      te = function() {
        T(w, 0);
      };
    function Y() {
      x || (x = !0, te());
    }
    function ne(U, F) {
      V = T(function() {
        U(o.unstable_now());
      }, F);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, o.unstable_continueExecution = function() {
      _ || E || (_ = !0, Y());
    }, o.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : j = 0 < U ? Math.floor(1e3 / U) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, o.unstable_getFirstCallbackNode = function() {
      return p(f);
    }, o.unstable_next = function(U) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = g;
      }
      var W = g;
      g = F;
      try {
        return U();
      } finally {
        g = W;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(U, F) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var W = g;
      g = U;
      try {
        return F();
      } finally {
        g = W;
      }
    }, o.unstable_scheduleCallback = function(U, F, W) {
      var H = o.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? H + W : H) : W = H, U) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return q = W + q, U = {
        id: h++,
        callback: F,
        priorityLevel: U,
        startTime: W,
        expirationTime: q,
        sortIndex: -1
      }, W > H ? (U.sortIndex = W, l(d, U), p(f) === null && U === p(d) && (A ? (M(V), V = -1) : A = !0, ne(O, W - H))) : (U.sortIndex = q, l(f, U), _ || E || (_ = !0, Y())), U;
    }, o.unstable_shouldYield = k, o.unstable_wrapCallback = function(U) {
      var F = g;
      return function() {
        var W = g;
        g = F;
        try {
          return U.apply(this, arguments);
        } finally {
          g = W;
        }
      };
    };
  }(go)), go;
}
var Kc;
function Gh() {
  return Kc || (Kc = 1, yo.exports = Bh()), yo.exports;
}
var Zc = Gh();
const jh = (o) => typeof o == "object" && typeof o.then == "function", cl = [];
function Ss(o, l, p = (m, u) => m === u) {
  if (o === l) return !0;
  if (!o || !l) return !1;
  const m = o.length;
  if (l.length !== m) return !1;
  for (let u = 0; u < m; u++) if (!p(o[u], l[u])) return !1;
  return !0;
}
function Es(o, l = null, p = !1, m = {}) {
  l === null && (l = [o]);
  for (const n of cl)
    if (Ss(l, n.keys, n.equal)) {
      if (p) return;
      if (Object.prototype.hasOwnProperty.call(n, "error")) throw n.error;
      if (Object.prototype.hasOwnProperty.call(n, "response"))
        return m.lifespan && m.lifespan > 0 && (n.timeout && clearTimeout(n.timeout), n.timeout = setTimeout(n.remove, m.lifespan)), n.response;
      if (!p) throw n.promise;
    }
  const u = {
    keys: l,
    equal: m.equal,
    remove: () => {
      const n = cl.indexOf(u);
      n !== -1 && cl.splice(n, 1);
    },
    promise: (
      // Execute the promise
      (jh(o) ? o : o(...l)).then((n) => {
        u.response = n, m.lifespan && m.lifespan > 0 && (u.timeout = setTimeout(u.remove, m.lifespan));
      }).catch((n) => u.error = n)
    )
  };
  if (cl.push(u), !p) throw u.promise;
}
const bs = (o, l, p) => Es(o, l, !1, p), Hh = (o, l, p) => void Es(o, l, !0, p), Vh = (o) => {
  if (o === void 0 || o.length === 0) cl.splice(0, cl.length);
  else {
    const l = cl.find((p) => Ss(o, p.keys, p.equal));
    l && l.remove();
  }
};
function Qo(o, l, p) {
  if (!o) return;
  if (p(o) === !0) return o;
  let m = l ? o.return : o.child;
  for (; m; ) {
    const u = Qo(m, l, p);
    if (u) return u;
    m = l ? null : m.sibling;
  }
}
function _s(o) {
  try {
    return Object.defineProperties(o, {
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
    return o;
  }
}
const Fo = /* @__PURE__ */ _s(/* @__PURE__ */ Ye.createContext(null));
class Ts extends Ye.Component {
  render() {
    return /* @__PURE__ */ Ye.createElement(Fo.Provider, { value: this._reactInternals }, this.props.children);
  }
}
function Us() {
  const o = Ye.useContext(Fo);
  if (o === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const l = Ye.useId();
  return Ye.useMemo(() => {
    for (const p of [o, o?.alternate]) {
      if (!p) continue;
      const m = Qo(p, !1, (u) => {
        let n = u.memoizedState;
        for (; n; ) {
          if (n.memoizedState === l) return !0;
          n = n.next;
        }
      });
      if (m) return m;
    }
  }, [o, l]);
}
const Lh = Symbol.for("react.context"), qh = (o) => o !== null && typeof o == "object" && "$$typeof" in o && o.$$typeof === Lh;
function Yh() {
  const o = Us(), [l] = Ye.useState(() => /* @__PURE__ */ new Map());
  l.clear();
  let p = o;
  for (; p; ) {
    const m = p.type;
    qh(m) && m !== Fo && !l.has(m) && l.set(m, Ye.use(_s(m))), p = p.return;
  }
  return l;
}
function Xh() {
  const o = Yh();
  return Ye.useMemo(
    () => Array.from(o.keys()).reduce(
      (l, p) => (m) => /* @__PURE__ */ Ye.createElement(l, null, /* @__PURE__ */ Ye.createElement(p.Provider, { ...m, value: o.get(p) })),
      (l) => /* @__PURE__ */ Ye.createElement(Ts, { ...l })
    ),
    [o]
  );
}
function Ms(o) {
  let l = o.root;
  for (; l.getState().previousRoot; ) l = l.getState().previousRoot;
  return l;
}
const Cs = (o) => o && o.isOrthographicCamera, Qh = (o) => o && o.hasOwnProperty("current"), Fh = (o) => o != null && (typeof o == "string" || typeof o == "number" || o.isColor), Ju = /* @__PURE__ */ ((o, l) => typeof window < "u" && (((o = window.document) == null ? void 0 : o.createElement) || ((l = window.navigator) == null ? void 0 : l.product) === "ReactNative"))() ? Ye.useLayoutEffect : Ye.useEffect;
function Ds(o) {
  const l = Ye.useRef(o);
  return Ju(() => void (l.current = o), [o]), l;
}
function Kh() {
  const o = Us(), l = Xh();
  return Ye.useMemo(() => ({
    children: p
  }) => {
    const u = !!Qo(o, !0, (n) => n.type === Ye.StrictMode) ? Ye.StrictMode : Ye.Fragment;
    return /* @__PURE__ */ ye(u, {
      children: /* @__PURE__ */ ye(l, {
        children: p
      })
    });
  }, [o, l]);
}
function Zh({
  set: o
}) {
  return Ju(() => (o(new Promise(() => null)), () => o(!1)), [o]), null;
}
const wh = /* @__PURE__ */ ((o) => (o = class extends Ye.Component {
  constructor(...p) {
    super(...p), this.state = {
      error: !1
    };
  }
  componentDidCatch(p) {
    this.props.set(p);
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
}, o.getDerivedStateFromError = () => ({
  error: !0
}), o))();
function As(o) {
  var l;
  const p = typeof window < "u" ? (l = window.devicePixelRatio) != null ? l : 2 : 1;
  return Array.isArray(o) ? Math.min(Math.max(o[0], p), o[1]) : o;
}
function Il(o) {
  var l;
  return (l = o.__r3f) == null ? void 0 : l.root.getState();
}
const pt = {
  obj: (o) => o === Object(o) && !pt.arr(o) && typeof o != "function",
  fun: (o) => typeof o == "function",
  str: (o) => typeof o == "string",
  num: (o) => typeof o == "number",
  boo: (o) => typeof o == "boolean",
  und: (o) => o === void 0,
  nul: (o) => o === null,
  arr: (o) => Array.isArray(o),
  equ(o, l, {
    arrays: p = "shallow",
    objects: m = "reference",
    strict: u = !0
  } = {}) {
    if (typeof o != typeof l || !!o != !!l) return !1;
    if (pt.str(o) || pt.num(o) || pt.boo(o)) return o === l;
    const n = pt.obj(o);
    if (n && m === "reference") return o === l;
    const s = pt.arr(o);
    if (s && p === "reference") return o === l;
    if ((s || n) && o === l) return !0;
    let c;
    for (c in o) if (!(c in l)) return !1;
    if (n && p === "shallow" && m === "shallow") {
      for (c in u ? l : o) if (!pt.equ(o[c], l[c], {
        strict: u,
        objects: "reference"
      })) return !1;
    } else
      for (c in u ? l : o) if (o[c] !== l[c]) return !1;
    if (pt.und(c)) {
      if (s && o.length === 0 && l.length === 0 || n && Object.keys(o).length === 0 && Object.keys(l).length === 0) return !0;
      if (o !== l) return !1;
    }
    return !0;
  }
};
function Jh(o) {
  const l = {
    nodes: {},
    materials: {},
    meshes: {}
  };
  return o && o.traverse((p) => {
    p.name && (l.nodes[p.name] = p), p.material && !l.materials[p.material.name] && (l.materials[p.material.name] = p.material), p.isMesh && !l.meshes[p.name] && (l.meshes[p.name] = p);
  }), l;
}
function Wh(o) {
  o.type !== "Scene" && (o.dispose == null || o.dispose());
  for (const l in o) {
    const p = o[l];
    p?.type !== "Scene" && (p == null || p.dispose == null || p.dispose());
  }
}
const Os = ["children", "key", "ref"];
function Ph(o) {
  const l = {};
  for (const p in o)
    Os.includes(p) || (l[p] = o[p]);
  return l;
}
function qi(o, l, p, m) {
  const u = o;
  let n = u?.__r3f;
  return n || (n = {
    root: l,
    type: p,
    parent: null,
    children: [],
    props: Ph(m),
    object: u,
    eventCount: 0,
    handlers: {},
    isHidden: !1
  }, u && (u.__r3f = n)), n;
}
function wu(o, l) {
  let p = o[l];
  if (!l.includes("-")) return {
    root: o,
    key: l,
    target: p
  };
  p = o;
  for (const u of l.split("-")) {
    var m;
    l = u, o = p, p = (m = p) == null ? void 0 : m[l];
  }
  return {
    root: o,
    key: l,
    target: p
  };
}
const wc = /-\d+$/;
function Yi(o, l) {
  if (pt.str(l.props.attach)) {
    if (wc.test(l.props.attach)) {
      const u = l.props.attach.replace(wc, ""), {
        root: n,
        key: s
      } = wu(o.object, u);
      Array.isArray(n[s]) || (n[s] = []);
    }
    const {
      root: p,
      key: m
    } = wu(o.object, l.props.attach);
    l.previousAttach = p[m], p[m] = l.object;
  } else pt.fun(l.props.attach) && (l.previousAttach = l.props.attach(o.object, l.object));
}
function Xi(o, l) {
  if (pt.str(l.props.attach)) {
    const {
      root: p,
      key: m
    } = wu(o.object, l.props.attach), u = l.previousAttach;
    u === void 0 ? delete p[m] : p[m] = u;
  } else
    l.previousAttach == null || l.previousAttach(o.object, l.object);
  delete l.previousAttach;
}
const Oo = [
  ...Os,
  // Instance props
  "args",
  "dispose",
  "attach",
  "object",
  "onUpdate",
  // Behavior flags
  "dispose"
], Jc = /* @__PURE__ */ new Map();
function kh(o) {
  let l = Jc.get(o.constructor);
  try {
    l || (l = new o.constructor(), Jc.set(o.constructor, l));
  } catch {
  }
  return l;
}
function Ih(o, l) {
  const p = {};
  for (const m in l)
    if (!Oo.includes(m) && !pt.equ(l[m], o.props[m])) {
      p[m] = l[m];
      for (const u in l)
        u.startsWith(`${m}-`) && (p[u] = l[u]);
    }
  for (const m in o.props) {
    if (Oo.includes(m) || l.hasOwnProperty(m)) continue;
    const {
      root: u,
      key: n
    } = wu(o.object, m);
    if (u.constructor && u.constructor.length === 0) {
      const s = kh(u);
      pt.und(s) || (p[n] = s[n]);
    } else
      p[n] = 0;
  }
  return p;
}
const $h = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"], e1 = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function Dn(o, l) {
  var p;
  const m = o.__r3f, u = m && Ms(m).getState(), n = m?.eventCount;
  for (const c in l) {
    let f = l[c];
    if (Oo.includes(c)) continue;
    if (m && e1.test(c)) {
      typeof f == "function" ? m.handlers[c] = f : delete m.handlers[c], m.eventCount = Object.keys(m.handlers).length;
      continue;
    }
    if (f === void 0) continue;
    let {
      root: d,
      key: h,
      target: y
    } = wu(o, c);
    if (y instanceof Le.Layers && f instanceof Le.Layers)
      y.mask = f.mask;
    else if (y instanceof Le.Color && Fh(f))
      y.set(f);
    else if (y !== null && typeof y == "object" && typeof y.set == "function" && typeof y.copy == "function" && f != null && f.constructor && y.constructor === f.constructor)
      y.copy(f);
    else if (y !== null && typeof y == "object" && typeof y.set == "function" && Array.isArray(f))
      typeof y.fromArray == "function" ? y.fromArray(f) : y.set(...f);
    else if (y !== null && typeof y == "object" && typeof y.set == "function" && typeof f == "number")
      typeof y.setScalar == "function" ? y.setScalar(f) : y.set(f);
    else {
      var s;
      d[h] = f, u && !u.linear && $h.includes(h) && (s = d[h]) != null && s.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
      d[h].format === Le.RGBAFormat && d[h].type === Le.UnsignedByteType && (d[h].colorSpace = Le.SRGBColorSpace);
    }
  }
  if (m != null && m.parent && u != null && u.internal && (p = m.object) != null && p.isObject3D && n !== m.eventCount) {
    const c = m.object, f = u.internal.interaction.indexOf(c);
    f > -1 && u.internal.interaction.splice(f, 1), m.eventCount && c.raycast !== null && u.internal.interaction.push(c);
  }
  return m && m.props.attach === void 0 && (m.object.isBufferGeometry ? m.props.attach = "geometry" : m.object.isMaterial && (m.props.attach = "material")), m && nu(m), o;
}
function nu(o) {
  var l;
  if (!o.parent) return;
  o.props.onUpdate == null || o.props.onUpdate(o.object);
  const p = (l = o.root) == null || l.getState == null ? void 0 : l.getState();
  p && p.internal.frames === 0 && p.invalidate();
}
function t1(o, l) {
  o.manual || (Cs(o) ? (o.left = l.width / -2, o.right = l.width / 2, o.top = l.height / 2, o.bottom = l.height / -2) : o.aspect = l.width / l.height, o.updateProjectionMatrix());
}
const Wt = (o) => o?.isObject3D;
function zi(o) {
  return (o.eventObject || o.object).uuid + "/" + o.index + o.instanceId;
}
function Rs(o, l, p, m) {
  const u = p.get(l);
  u && (p.delete(l), p.size === 0 && (o.delete(m), u.target.releasePointerCapture(m)));
}
function a1(o, l) {
  const {
    internal: p
  } = o.getState();
  p.interaction = p.interaction.filter((m) => m !== l), p.initialHits = p.initialHits.filter((m) => m !== l), p.hovered.forEach((m, u) => {
    (m.eventObject === l || m.object === l) && p.hovered.delete(u);
  }), p.capturedMap.forEach((m, u) => {
    Rs(p.capturedMap, l, m, u);
  });
}
function n1(o) {
  function l(f) {
    const {
      internal: d
    } = o.getState(), h = f.offsetX - d.initialClick[0], y = f.offsetY - d.initialClick[1];
    return Math.round(Math.sqrt(h * h + y * y));
  }
  function p(f) {
    return f.filter((d) => ["Move", "Over", "Enter", "Out", "Leave"].some((h) => {
      var y;
      return (y = d.__r3f) == null ? void 0 : y.handlers["onPointer" + h];
    }));
  }
  function m(f, d) {
    const h = o.getState(), y = /* @__PURE__ */ new Set(), g = [], E = d ? d(h.internal.interaction) : h.internal.interaction;
    for (let M = 0; M < E.length; M++) {
      const b = Il(E[M]);
      b && (b.raycaster.camera = void 0);
    }
    h.previousRoot || h.events.compute == null || h.events.compute(f, h);
    function _(M) {
      const b = Il(M);
      if (!b || !b.events.enabled || b.raycaster.camera === null) return [];
      if (b.raycaster.camera === void 0) {
        var z;
        b.events.compute == null || b.events.compute(f, b, (z = b.previousRoot) == null ? void 0 : z.getState()), b.raycaster.camera === void 0 && (b.raycaster.camera = null);
      }
      return b.raycaster.camera ? b.raycaster.intersectObject(M, !0) : [];
    }
    let A = E.flatMap(_).sort((M, b) => {
      const z = Il(M.object), O = Il(b.object);
      return !z || !O ? M.distance - b.distance : O.events.priority - z.events.priority || M.distance - b.distance;
    }).filter((M) => {
      const b = zi(M);
      return y.has(b) ? !1 : (y.add(b), !0);
    });
    h.events.filter && (A = h.events.filter(A, h));
    for (const M of A) {
      let b = M.object;
      for (; b; ) {
        var T;
        (T = b.__r3f) != null && T.eventCount && g.push({
          ...M,
          eventObject: b
        }), b = b.parent;
      }
    }
    if ("pointerId" in f && h.internal.capturedMap.has(f.pointerId))
      for (let M of h.internal.capturedMap.get(f.pointerId).values())
        y.has(zi(M.intersection)) || g.push(M.intersection);
    return g;
  }
  function u(f, d, h, y) {
    if (f.length) {
      const g = {
        stopped: !1
      };
      for (const E of f) {
        let _ = Il(E.object);
        if (_ || E.object.traverseAncestors((A) => {
          const T = Il(A);
          if (T)
            return _ = T, !1;
        }), _) {
          const {
            raycaster: A,
            pointer: T,
            camera: M,
            internal: b
          } = _, z = new Le.Vector3(T.x, T.y, 0).unproject(M), O = (k) => {
            var w, te;
            return (w = (te = b.capturedMap.get(k)) == null ? void 0 : te.has(E.eventObject)) != null ? w : !1;
          }, x = (k) => {
            const w = {
              intersection: E,
              target: d.target
            };
            b.capturedMap.has(k) ? b.capturedMap.get(k).set(E.eventObject, w) : b.capturedMap.set(k, /* @__PURE__ */ new Map([[E.eventObject, w]])), d.target.setPointerCapture(k);
          }, V = (k) => {
            const w = b.capturedMap.get(k);
            w && Rs(b.capturedMap, E.eventObject, w, k);
          };
          let j = {};
          for (let k in d) {
            let w = d[k];
            typeof w != "function" && (j[k] = w);
          }
          let X = {
            ...E,
            ...j,
            pointer: T,
            intersections: f,
            stopped: g.stopped,
            delta: h,
            unprojectedPoint: z,
            ray: A.ray,
            camera: M,
            // Hijack stopPropagation, which just sets a flag
            stopPropagation() {
              const k = "pointerId" in d && b.capturedMap.get(d.pointerId);
              if (
                // ...if this pointer hasn't been captured
                (!k || // ... or if the hit object is capturing the pointer
                k.has(E.eventObject)) && (X.stopped = g.stopped = !0, b.hovered.size && Array.from(b.hovered.values()).find((w) => w.eventObject === E.eventObject))
              ) {
                const w = f.slice(0, f.indexOf(E));
                n([...w, E]);
              }
            },
            // there should be a distinction between target and currentTarget
            target: {
              hasPointerCapture: O,
              setPointerCapture: x,
              releasePointerCapture: V
            },
            currentTarget: {
              hasPointerCapture: O,
              setPointerCapture: x,
              releasePointerCapture: V
            },
            nativeEvent: d
          };
          if (y(X), g.stopped === !0) break;
        }
      }
    }
    return f;
  }
  function n(f) {
    const {
      internal: d
    } = o.getState();
    for (const h of d.hovered.values())
      if (!f.length || !f.find((y) => y.object === h.object && y.index === h.index && y.instanceId === h.instanceId)) {
        const g = h.eventObject.__r3f;
        if (d.hovered.delete(zi(h)), g != null && g.eventCount) {
          const E = g.handlers, _ = {
            ...h,
            intersections: f
          };
          E.onPointerOut == null || E.onPointerOut(_), E.onPointerLeave == null || E.onPointerLeave(_);
        }
      }
  }
  function s(f, d) {
    for (let h = 0; h < d.length; h++) {
      const y = d[h].__r3f;
      y == null || y.handlers.onPointerMissed == null || y.handlers.onPointerMissed(f);
    }
  }
  function c(f) {
    switch (f) {
      case "onPointerLeave":
      case "onPointerCancel":
        return () => n([]);
      case "onLostPointerCapture":
        return (d) => {
          const {
            internal: h
          } = o.getState();
          "pointerId" in d && h.capturedMap.has(d.pointerId) && requestAnimationFrame(() => {
            h.capturedMap.has(d.pointerId) && (h.capturedMap.delete(d.pointerId), n([]));
          });
        };
    }
    return function(h) {
      const {
        onPointerMissed: y,
        internal: g
      } = o.getState();
      g.lastEvent.current = h;
      const E = f === "onPointerMove", _ = f === "onClick" || f === "onContextMenu" || f === "onDoubleClick", T = m(h, E ? p : void 0), M = _ ? l(h) : 0;
      f === "onPointerDown" && (g.initialClick = [h.offsetX, h.offsetY], g.initialHits = T.map((z) => z.eventObject)), _ && !T.length && M <= 2 && (s(h, g.interaction), y && y(h)), E && n(T);
      function b(z) {
        const O = z.eventObject, x = O.__r3f;
        if (!(x != null && x.eventCount)) return;
        const V = x.handlers;
        if (E) {
          if (V.onPointerOver || V.onPointerEnter || V.onPointerOut || V.onPointerLeave) {
            const j = zi(z), X = g.hovered.get(j);
            X ? X.stopped && z.stopPropagation() : (g.hovered.set(j, z), V.onPointerOver == null || V.onPointerOver(z), V.onPointerEnter == null || V.onPointerEnter(z));
          }
          V.onPointerMove == null || V.onPointerMove(z);
        } else {
          const j = V[f];
          j ? (!_ || g.initialHits.includes(O)) && (s(h, g.interaction.filter((X) => !g.initialHits.includes(X))), j(z)) : _ && g.initialHits.includes(O) && s(h, g.interaction.filter((X) => !g.initialHits.includes(X)));
        }
      }
      u(T, h, M, b);
    };
  }
  return {
    handlePointer: c
  };
}
const Wc = (o) => !!(o != null && o.render), zs = /* @__PURE__ */ Ye.createContext(null), l1 = (o, l) => {
  const p = Dh((c, f) => {
    const d = new Le.Vector3(), h = new Le.Vector3(), y = new Le.Vector3();
    function g(M = f().camera, b = h, z = f().size) {
      const {
        width: O,
        height: x,
        top: V,
        left: j
      } = z, X = O / x;
      b.isVector3 ? y.copy(b) : y.set(...b);
      const k = M.getWorldPosition(d).distanceTo(y);
      if (Cs(M))
        return {
          width: O / M.zoom,
          height: x / M.zoom,
          top: V,
          left: j,
          factor: 1,
          distance: k,
          aspect: X
        };
      {
        const w = M.fov * Math.PI / 180, te = 2 * Math.tan(w / 2) * k, B = te * (O / x);
        return {
          width: B,
          height: te,
          top: V,
          left: j,
          factor: O / B,
          distance: k,
          aspect: X
        };
      }
    }
    let E;
    const _ = (M) => c((b) => ({
      performance: {
        ...b.performance,
        current: M
      }
    })), A = new Le.Vector2();
    return {
      set: c,
      get: f,
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
      invalidate: (M = 1) => o(f(), M),
      advance: (M, b) => l(M, b, f()),
      legacy: !1,
      linear: !1,
      flat: !1,
      controls: null,
      clock: new Le.Clock(),
      pointer: A,
      mouse: A,
      frameloop: "always",
      onPointerMissed: void 0,
      performance: {
        current: 1,
        min: 0.5,
        max: 1,
        debounce: 200,
        regress: () => {
          const M = f();
          E && clearTimeout(E), M.performance.current !== M.performance.min && _(M.performance.min), E = setTimeout(() => _(f().performance.max), M.performance.debounce);
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
      setEvents: (M) => c((b) => ({
        ...b,
        events: {
          ...b.events,
          ...M
        }
      })),
      setSize: (M, b, z = 0, O = 0) => {
        const x = f().camera, V = {
          width: M,
          height: b,
          top: z,
          left: O
        };
        c((j) => ({
          size: V,
          viewport: {
            ...j.viewport,
            ...g(x, h, V)
          }
        }));
      },
      setDpr: (M) => c((b) => {
        const z = As(M);
        return {
          viewport: {
            ...b.viewport,
            dpr: z,
            initialDpr: b.viewport.initialDpr || z
          }
        };
      }),
      setFrameloop: (M = "always") => {
        const b = f().clock;
        b.stop(), b.elapsedTime = 0, M !== "never" && (b.start(), b.elapsedTime = 0), c(() => ({
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
        lastEvent: /* @__PURE__ */ Ye.createRef(),
        // Updates
        active: !1,
        frames: 0,
        priority: 0,
        subscribe: (M, b, z) => {
          const O = f().internal;
          return O.priority = O.priority + (b > 0 ? 1 : 0), O.subscribers.push({
            ref: M,
            priority: b,
            store: z
          }), O.subscribers = O.subscribers.sort((x, V) => x.priority - V.priority), () => {
            const x = f().internal;
            x != null && x.subscribers && (x.priority = x.priority - (b > 0 ? 1 : 0), x.subscribers = x.subscribers.filter((V) => V.ref !== M));
          };
        }
      }
    };
  }), m = p.getState();
  let u = m.size, n = m.viewport.dpr, s = m.camera;
  return p.subscribe(() => {
    const {
      camera: c,
      size: f,
      viewport: d,
      gl: h,
      set: y
    } = p.getState();
    if (f.width !== u.width || f.height !== u.height || d.dpr !== n) {
      u = f, n = d.dpr, t1(c, f), d.dpr > 0 && h.setPixelRatio(d.dpr);
      const g = typeof HTMLCanvasElement < "u" && h.domElement instanceof HTMLCanvasElement;
      h.setSize(f.width, f.height, g);
    }
    c !== s && (s = c, y((g) => ({
      viewport: {
        ...g.viewport,
        ...g.viewport.getCurrentViewport(c)
      }
    })));
  }), p.subscribe((c) => o(c)), p;
};
function Ns() {
  const o = Ye.useContext(zs);
  if (!o) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return o;
}
function xs(o = (p) => p, l) {
  return Ns()(o, l);
}
function Bs(o, l = 0) {
  const p = Ns(), m = p.getState().internal.subscribe, u = Ds(o);
  return Ju(() => m(u, l, p), [l, m, p]), null;
}
const Pc = /* @__PURE__ */ new WeakMap(), u1 = (o) => {
  var l;
  return typeof o == "function" && (o == null || (l = o.prototype) == null ? void 0 : l.constructor) === o;
};
function Gs(o, l) {
  return function(p, ...m) {
    let u;
    return u1(p) ? (u = Pc.get(p), u || (u = new p(), Pc.set(p, u))) : u = p, o && o(u), Promise.all(m.map((n) => new Promise((s, c) => u.load(n, (f) => {
      Wt(f?.scene) && Object.assign(f, Jh(f.scene)), s(f);
    }, l, (f) => c(new Error(`Could not load ${n}: ${f?.message}`))))));
  };
}
function Ko(o, l, p, m) {
  const u = Array.isArray(l) ? l : [l], n = bs(Gs(p, m), [o, ...u], {
    equal: pt.equ
  });
  return Array.isArray(l) ? n : n[0];
}
Ko.preload = function(o, l, p) {
  const m = Array.isArray(l) ? l : [l];
  return Hh(Gs(p), [o, ...m]);
};
Ko.clear = function(o, l) {
  const p = Array.isArray(l) ? l : [l];
  return Vh([o, ...p]);
};
function i1(o) {
  const l = xh(o);
  return l.injectIntoDevTools({
    bundleType: 0,
    rendererPackageName: "@react-three/fiber",
    version: Ye.version
  }), l;
}
const js = 0, au = {}, r1 = /^three(?=[A-Z])/, Ki = (o) => `${o[0].toUpperCase()}${o.slice(1)}`;
let o1 = 0;
const f1 = (o) => typeof o == "function";
function c1(o) {
  if (f1(o)) {
    const l = `${o1++}`;
    return au[l] = o, l;
  } else
    Object.assign(au, o);
}
function Hs(o, l) {
  const p = Ki(o), m = au[p];
  if (o !== "primitive" && !m) throw new Error(`R3F: ${p} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (o === "primitive" && !l.object) throw new Error("R3F: Primitives without 'object' are invalid!");
  if (l.args !== void 0 && !Array.isArray(l.args)) throw new Error("R3F: The args prop must be an array!");
}
function s1(o, l, p) {
  var m;
  return o = Ki(o) in au ? o : o.replace(r1, ""), Hs(o, l), o === "primitive" && (m = l.object) != null && m.__r3f && delete l.object.__r3f, qi(l.object, p, o, l);
}
function d1(o) {
  if (!o.isHidden) {
    var l;
    o.props.attach && (l = o.parent) != null && l.object ? Xi(o.parent, o) : Wt(o.object) && (o.object.visible = !1), o.isHidden = !0, nu(o);
  }
}
function Vs(o) {
  if (o.isHidden) {
    var l;
    o.props.attach && (l = o.parent) != null && l.object ? Yi(o.parent, o) : Wt(o.object) && o.props.visible !== !1 && (o.object.visible = !0), o.isHidden = !1, nu(o);
  }
}
function Zo(o, l, p) {
  const m = l.root.getState();
  if (!(!o.parent && o.object !== m.scene)) {
    if (!l.object) {
      var u, n;
      const s = au[Ki(l.type)];
      l.object = (u = l.props.object) != null ? u : new s(...(n = l.props.args) != null ? n : []), l.object.__r3f = l;
    }
    if (Dn(l.object, l.props), l.props.attach)
      Yi(o, l);
    else if (Wt(l.object) && Wt(o.object)) {
      const s = o.object.children.indexOf(p?.object);
      if (p && s !== -1) {
        const c = o.object.children.indexOf(l.object);
        if (c !== -1) {
          o.object.children.splice(c, 1);
          const f = c < s ? s - 1 : s;
          o.object.children.splice(f, 0, l.object);
        } else
          l.object.parent = o.object, o.object.children.splice(s, 0, l.object), l.object.dispatchEvent({
            type: "added"
          }), o.object.dispatchEvent({
            type: "childadded",
            child: l.object
          });
      } else
        o.object.add(l.object);
    }
    for (const s of l.children) Zo(l, s);
    nu(l);
  }
}
function So(o, l) {
  l && (l.parent = o, o.children.push(l), Zo(o, l));
}
function kc(o, l, p) {
  if (!l || !p) return;
  l.parent = o;
  const m = o.children.indexOf(p);
  m !== -1 ? o.children.splice(m, 0, l) : o.children.push(l), Zo(o, l, p);
}
function Ls(o) {
  if (typeof o.dispose == "function") {
    const l = () => {
      try {
        o.dispose();
      } catch {
      }
    };
    typeof IS_REACT_ACT_ENVIRONMENT < "u" ? l() : Zc.unstable_scheduleCallback(Zc.unstable_IdlePriority, l);
  }
}
function Ro(o, l, p) {
  if (!l) return;
  l.parent = null;
  const m = o.children.indexOf(l);
  m !== -1 && o.children.splice(m, 1), l.props.attach ? Xi(o, l) : Wt(l.object) && Wt(o.object) && (o.object.remove(l.object), a1(Ms(l), l.object));
  const u = l.props.dispose !== null && p !== !1;
  for (let n = l.children.length - 1; n >= 0; n--) {
    const s = l.children[n];
    Ro(l, s, u);
  }
  l.children.length = 0, delete l.object.__r3f, u && l.type !== "primitive" && l.object.type !== "Scene" && Ls(l.object), p === void 0 && nu(l);
}
function v1(o, l) {
  for (const p of [o, o.alternate])
    if (p !== null)
      if (typeof p.ref == "function") {
        p.refCleanup == null || p.refCleanup();
        const m = p.ref(l);
        typeof m == "function" && (p.refCleanup = m);
      } else p.ref && (p.ref.current = l);
}
const ji = [];
function h1() {
  for (const [p] of ji) {
    const m = p.parent;
    if (m) {
      p.props.attach ? Xi(m, p) : Wt(p.object) && Wt(m.object) && m.object.remove(p.object);
      for (const u of p.children)
        u.props.attach ? Xi(p, u) : Wt(u.object) && Wt(p.object) && p.object.remove(u.object);
    }
    p.isHidden && Vs(p), p.object.__r3f && delete p.object.__r3f, p.type !== "primitive" && Ls(p.object);
  }
  for (const [p, m, u] of ji) {
    p.props = m;
    const n = p.parent;
    if (n) {
      var o, l;
      const s = au[Ki(p.type)];
      p.object = (o = p.props.object) != null ? o : new s(...(l = p.props.args) != null ? l : []), p.object.__r3f = p, v1(u, p.object), Dn(p.object, p.props), p.props.attach ? Yi(n, p) : Wt(p.object) && Wt(n.object) && n.object.add(p.object);
      for (const c of p.children)
        c.props.attach ? Yi(p, c) : Wt(c.object) && Wt(p.object) && p.object.add(c.object);
      nu(p);
    }
  }
  ji.length = 0;
}
const Eo = () => {
}, Ic = {};
let Ni = js;
const p1 = 0, m1 = 4, zo = /* @__PURE__ */ i1({
  isPrimaryRenderer: !1,
  warnsIfNotActing: !1,
  supportsMutation: !0,
  supportsPersistence: !1,
  supportsHydration: !1,
  createInstance: s1,
  removeChild: Ro,
  appendChild: So,
  appendInitialChild: So,
  insertBefore: kc,
  appendChildToContainer(o, l) {
    const p = o.getState().scene.__r3f;
    !l || !p || So(p, l);
  },
  removeChildFromContainer(o, l) {
    const p = o.getState().scene.__r3f;
    !l || !p || Ro(p, l);
  },
  insertInContainerBefore(o, l, p) {
    const m = o.getState().scene.__r3f;
    !l || !p || !m || kc(m, l, p);
  },
  getRootHostContext: () => Ic,
  getChildHostContext: () => Ic,
  commitUpdate(o, l, p, m, u) {
    var n, s, c;
    Hs(l, m);
    let f = !1;
    if ((o.type === "primitive" && p.object !== m.object || ((n = m.args) == null ? void 0 : n.length) !== ((s = p.args) == null ? void 0 : s.length) || (c = m.args) != null && c.some((h, y) => {
      var g;
      return h !== ((g = p.args) == null ? void 0 : g[y]);
    })) && (f = !0), f)
      ji.push([o, {
        ...m
      }, u]);
    else {
      const h = Ih(o, m);
      Object.keys(h).length && (Object.assign(o.props, h), Dn(o.object, h));
    }
    (u.sibling === null || (u.flags & m1) === p1) && h1();
  },
  finalizeInitialChildren: () => !1,
  commitMount() {
  },
  getPublicInstance: (o) => o?.object,
  prepareForCommit: () => null,
  preparePortalMount: (o) => qi(o.getState().scene, o, "", {}),
  resetAfterCommit: () => {
  },
  shouldSetTextContent: () => !1,
  clearContainer: () => !1,
  hideInstance: d1,
  unhideInstance: Vs,
  createTextInstance: Eo,
  hideTextInstance: Eo,
  unhideTextInstance: Eo,
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
  HostTransitionContext: /* @__PURE__ */ Ye.createContext(null),
  setCurrentUpdatePriority(o) {
    Ni = o;
  },
  getCurrentUpdatePriority() {
    return Ni;
  },
  resolveUpdatePriority() {
    var o;
    if (Ni !== js) return Ni;
    switch (typeof window < "u" && ((o = window.event) == null ? void 0 : o.type)) {
      case "click":
      case "contextmenu":
      case "dblclick":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
        return Gi.DiscreteEventPriority;
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerenter":
      case "pointerleave":
      case "wheel":
        return Gi.ContinuousEventPriority;
      default:
        return Gi.DefaultEventPriority;
    }
  },
  resetFormInstance() {
  }
}), vl = /* @__PURE__ */ new Map(), $l = {
  objects: "shallow",
  strict: !1
};
function y1(o, l) {
  if (!l && typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement && o.parentElement) {
    const {
      width: p,
      height: m,
      top: u,
      left: n
    } = o.parentElement.getBoundingClientRect();
    return {
      width: p,
      height: m,
      top: u,
      left: n
    };
  } else if (!l && typeof OffscreenCanvas < "u" && o instanceof OffscreenCanvas)
    return {
      width: o.width,
      height: o.height,
      top: 0,
      left: 0
    };
  return {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    ...l
  };
}
function g1(o) {
  const l = vl.get(o), p = l?.fiber, m = l?.store;
  l && console.warn("R3F.createRoot should only be called once!");
  const u = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  ), n = m || l1(Bo, es), s = p || zo.createContainer(
    n,
    // container
    Gi.ConcurrentRoot,
    // tag
    null,
    // hydration callbacks
    !1,
    // isStrictMode
    null,
    // concurrentUpdatesByDefaultOverride
    "",
    // identifierPrefix
    u,
    // onUncaughtError
    u,
    // onCaughtError
    u,
    // onRecoverableError
    null
    // transitionCallbacks
  );
  l || vl.set(o, {
    fiber: s,
    store: n
  });
  let c, f, d = !1, h = null;
  return {
    async configure(y = {}) {
      let g;
      h = new Promise((C) => g = C);
      let {
        gl: E,
        size: _,
        scene: A,
        events: T,
        onCreated: M,
        shadows: b = !1,
        linear: z = !1,
        flat: O = !1,
        legacy: x = !1,
        orthographic: V = !1,
        frameloop: j = "always",
        dpr: X = [1, 2],
        performance: k,
        raycaster: w,
        camera: te,
        onPointerMissed: B
      } = y, Q = n.getState(), Y = Q.gl;
      if (!Q.gl) {
        const C = {
          canvas: o,
          powerPreference: "high-performance",
          antialias: !0,
          alpha: !0
        }, R = typeof E == "function" ? await E(C) : E;
        Wc(R) ? Y = R : Y = new Le.WebGLRenderer({
          ...C,
          ...E
        }), Q.set({
          gl: Y
        });
      }
      let ne = Q.raycaster;
      ne || Q.set({
        raycaster: ne = new Le.Raycaster()
      });
      const {
        params: U,
        ...F
      } = w || {};
      if (pt.equ(F, ne, $l) || Dn(ne, {
        ...F
      }), pt.equ(U, ne.params, $l) || Dn(ne, {
        params: {
          ...ne.params,
          ...U
        }
      }), !Q.camera || Q.camera === f && !pt.equ(f, te, $l)) {
        f = te;
        const C = te?.isCamera, R = C ? te : V ? new Le.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new Le.PerspectiveCamera(75, 0, 0.1, 1e3);
        C || (R.position.z = 5, te && (Dn(R, te), R.manual || ("aspect" in te || "left" in te || "right" in te || "bottom" in te || "top" in te) && (R.manual = !0, R.updateProjectionMatrix())), !Q.camera && !(te != null && te.rotation) && R.lookAt(0, 0, 0)), Q.set({
          camera: R
        }), ne.camera = R;
      }
      if (!Q.scene) {
        let C;
        A != null && A.isScene ? (C = A, qi(C, n, "", {})) : (C = new Le.Scene(), qi(C, n, "", {}), A && Dn(C, A)), Q.set({
          scene: C
        });
      }
      T && !Q.events.handlers && Q.set({
        events: T(n)
      });
      const W = y1(o, _);
      if (pt.equ(W, Q.size, $l) || Q.setSize(W.width, W.height, W.top, W.left), X && Q.viewport.dpr !== As(X) && Q.setDpr(X), Q.frameloop !== j && Q.setFrameloop(j), Q.onPointerMissed || Q.set({
        onPointerMissed: B
      }), k && !pt.equ(k, Q.performance, $l) && Q.set((C) => ({
        performance: {
          ...C.performance,
          ...k
        }
      })), !Q.xr) {
        var H;
        const C = (L, K) => {
          const le = n.getState();
          le.frameloop !== "never" && es(L, !0, le, K);
        }, R = () => {
          const L = n.getState();
          L.gl.xr.enabled = L.gl.xr.isPresenting, L.gl.xr.setAnimationLoop(L.gl.xr.isPresenting ? C : null), L.gl.xr.isPresenting || Bo(L);
        }, J = {
          connect() {
            const L = n.getState().gl;
            L.xr.addEventListener("sessionstart", R), L.xr.addEventListener("sessionend", R);
          },
          disconnect() {
            const L = n.getState().gl;
            L.xr.removeEventListener("sessionstart", R), L.xr.removeEventListener("sessionend", R);
          }
        };
        typeof ((H = Y.xr) == null ? void 0 : H.addEventListener) == "function" && J.connect(), Q.set({
          xr: J
        });
      }
      if (Y.shadowMap) {
        const C = Y.shadowMap.enabled, R = Y.shadowMap.type;
        if (Y.shadowMap.enabled = !!b, pt.boo(b))
          Y.shadowMap.type = Le.PCFSoftShadowMap;
        else if (pt.str(b)) {
          var q;
          const J = {
            basic: Le.BasicShadowMap,
            percentage: Le.PCFShadowMap,
            soft: Le.PCFSoftShadowMap,
            variance: Le.VSMShadowMap
          };
          Y.shadowMap.type = (q = J[b]) != null ? q : Le.PCFSoftShadowMap;
        } else pt.obj(b) && Object.assign(Y.shadowMap, b);
        (C !== Y.shadowMap.enabled || R !== Y.shadowMap.type) && (Y.shadowMap.needsUpdate = !0);
      }
      return Le.ColorManagement.enabled = !x, d || (Y.outputColorSpace = z ? Le.LinearSRGBColorSpace : Le.SRGBColorSpace, Y.toneMapping = O ? Le.NoToneMapping : Le.ACESFilmicToneMapping), Q.legacy !== x && Q.set(() => ({
        legacy: x
      })), Q.linear !== z && Q.set(() => ({
        linear: z
      })), Q.flat !== O && Q.set(() => ({
        flat: O
      })), E && !pt.fun(E) && !Wc(E) && !pt.equ(E, Y, $l) && Dn(Y, E), c = M, d = !0, g(), this;
    },
    render(y) {
      return !d && !h && this.configure(), h.then(() => {
        zo.updateContainer(/* @__PURE__ */ ye(S1, {
          store: n,
          children: y,
          onCreated: c,
          rootElement: o
        }), s, null, () => {
        });
      }), n;
    },
    unmount() {
      qs(o);
    }
  };
}
function S1({
  store: o,
  children: l,
  onCreated: p,
  rootElement: m
}) {
  return Ju(() => {
    const u = o.getState();
    u.set((n) => ({
      internal: {
        ...n.internal,
        active: !0
      }
    })), p && p(u), o.getState().events.connected || u.events.connect == null || u.events.connect(m);
  }, []), /* @__PURE__ */ ye(zs.Provider, {
    value: o,
    children: l
  });
}
function qs(o, l) {
  const p = vl.get(o), m = p?.fiber;
  if (m) {
    const u = p?.store.getState();
    u && (u.internal.active = !1), zo.updateContainer(null, m, null, () => {
      u && setTimeout(() => {
        try {
          var n, s, c, f;
          u.events.disconnect == null || u.events.disconnect(), (n = u.gl) == null || (s = n.renderLists) == null || s.dispose == null || s.dispose(), (c = u.gl) == null || c.forceContextLoss == null || c.forceContextLoss(), (f = u.gl) != null && f.xr && u.xr.disconnect(), Wh(u.scene), vl.delete(o);
        } catch {
        }
      }, 500);
    });
  }
}
const E1 = /* @__PURE__ */ new Set(), b1 = /* @__PURE__ */ new Set(), _1 = /* @__PURE__ */ new Set();
function bo(o, l) {
  if (o.size)
    for (const {
      callback: p
    } of o.values())
      p(l);
}
function Fu(o, l) {
  switch (o) {
    case "before":
      return bo(E1, l);
    case "after":
      return bo(b1, l);
    case "tail":
      return bo(_1, l);
  }
}
let _o, To;
function No(o, l, p) {
  let m = l.clock.getDelta();
  l.frameloop === "never" && typeof o == "number" && (m = o - l.clock.elapsedTime, l.clock.oldTime = l.clock.elapsedTime, l.clock.elapsedTime = o), _o = l.internal.subscribers;
  for (let u = 0; u < _o.length; u++)
    To = _o[u], To.ref.current(To.store.getState(), m, p);
  return !l.internal.priority && l.gl.render && l.gl.render(l.scene, l.camera), l.internal.frames = Math.max(0, l.internal.frames - 1), l.frameloop === "always" ? 1 : l.internal.frames;
}
let Qi = !1, xo = !1, Uo, $c, eu;
function Ys(o) {
  $c = requestAnimationFrame(Ys), Qi = !0, Uo = 0, Fu("before", o), xo = !0;
  for (const p of vl.values()) {
    var l;
    eu = p.store.getState(), eu.internal.active && (eu.frameloop === "always" || eu.internal.frames > 0) && !((l = eu.gl.xr) != null && l.isPresenting) && (Uo += No(o, eu));
  }
  if (xo = !1, Fu("after", o), Uo === 0)
    return Fu("tail", o), Qi = !1, cancelAnimationFrame($c);
}
function Bo(o, l = 1) {
  var p;
  if (!o) return vl.forEach((m) => Bo(m.store.getState(), l));
  (p = o.gl.xr) != null && p.isPresenting || !o.internal.active || o.frameloop === "never" || (l > 1 ? o.internal.frames = Math.min(60, o.internal.frames + l) : xo ? o.internal.frames = 2 : o.internal.frames = 1, Qi || (Qi = !0, requestAnimationFrame(Ys)));
}
function es(o, l = !0, p, m) {
  if (l && Fu("before", o), p) No(o, p, m);
  else for (const u of vl.values()) No(o, u.store.getState());
  l && Fu("after", o);
}
const Mo = {
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
function T1(o) {
  const {
    handlePointer: l
  } = n1(o);
  return {
    priority: 1,
    enabled: !0,
    compute(p, m, u) {
      m.pointer.set(p.offsetX / m.size.width * 2 - 1, -(p.offsetY / m.size.height) * 2 + 1), m.raycaster.setFromCamera(m.pointer, m.camera);
    },
    connected: void 0,
    handlers: Object.keys(Mo).reduce((p, m) => ({
      ...p,
      [m]: l(m)
    }), {}),
    update: () => {
      var p;
      const {
        events: m,
        internal: u
      } = o.getState();
      (p = u.lastEvent) != null && p.current && m.handlers && m.handlers.onPointerMove(u.lastEvent.current);
    },
    connect: (p) => {
      const {
        set: m,
        events: u
      } = o.getState();
      if (u.disconnect == null || u.disconnect(), m((n) => ({
        events: {
          ...n.events,
          connected: p
        }
      })), u.handlers)
        for (const n in u.handlers) {
          const s = u.handlers[n], [c, f] = Mo[n];
          p.addEventListener(c, s, {
            passive: f
          });
        }
    },
    disconnect: () => {
      const {
        set: p,
        events: m
      } = o.getState();
      if (m.connected) {
        if (m.handlers)
          for (const u in m.handlers) {
            const n = m.handlers[u], [s] = Mo[u];
            m.connected.removeEventListener(s, n);
          }
        p((u) => ({
          events: {
            ...u.events,
            connected: void 0
          }
        }));
      }
    }
  };
}
function ts(o, l) {
  let p;
  return (...m) => {
    window.clearTimeout(p), p = window.setTimeout(() => o(...m), l);
  };
}
function U1({ debounce: o, scroll: l, polyfill: p, offsetSize: m } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const u = p || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!u) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [n, s] = Cn({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), c = Qu({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: n, orientationHandler: null }), f = o ? typeof o == "number" ? o : o.scroll : null, d = o ? typeof o == "number" ? o : o.resize : null, h = Qu(!1);
  _a(() => (h.current = !0, () => void (h.current = !1)));
  const [y, g, E] = ms(() => {
    const M = () => {
      if (!c.current.element) return;
      const { left: b, top: z, width: O, height: x, bottom: V, right: j, x: X, y: k } = c.current.element.getBoundingClientRect(), w = { left: b, top: z, width: O, height: x, bottom: V, right: j, x: X, y: k };
      c.current.element instanceof HTMLElement && m && (w.height = c.current.element.offsetHeight, w.width = c.current.element.offsetWidth), Object.freeze(w), h.current && !A1(c.current.lastBounds, w) && s(c.current.lastBounds = w);
    };
    return [M, d ? ts(M, d) : M, f ? ts(M, f) : M];
  }, [s, m, f, d]);
  function _() {
    c.current.scrollContainers && (c.current.scrollContainers.forEach((M) => M.removeEventListener("scroll", E, !0)), c.current.scrollContainers = null), c.current.resizeObserver && (c.current.resizeObserver.disconnect(), c.current.resizeObserver = null), c.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", c.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", c.current.orientationHandler));
  }
  function A() {
    c.current.element && (c.current.resizeObserver = new u(E), c.current.resizeObserver.observe(c.current.element), l && c.current.scrollContainers && c.current.scrollContainers.forEach((M) => M.addEventListener("scroll", E, { capture: !0, passive: !0 })), c.current.orientationHandler = () => {
      E();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", c.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", c.current.orientationHandler));
  }
  const T = (M) => {
    !M || M === c.current.element || (_(), c.current.element = M, c.current.scrollContainers = Xs(M), A());
  };
  return C1(E, !!l), M1(g), _a(() => {
    _(), A();
  }, [l, E, g]), _a(() => _, []), [T, n, y];
}
function M1(o) {
  _a(() => {
    const l = o;
    return window.addEventListener("resize", l), () => void window.removeEventListener("resize", l);
  }, [o]);
}
function C1(o, l) {
  _a(() => {
    if (l) {
      const p = o;
      return window.addEventListener("scroll", p, { capture: !0, passive: !0 }), () => void window.removeEventListener("scroll", p, !0);
    }
  }, [o, l]);
}
function Xs(o) {
  const l = [];
  if (!o || o === document.body) return l;
  const { overflow: p, overflowX: m, overflowY: u } = window.getComputedStyle(o);
  return [p, m, u].some((n) => n === "auto" || n === "scroll") && l.push(o), [...l, ...Xs(o.parentElement)];
}
const D1 = ["x", "y", "top", "bottom", "left", "right", "width", "height"], A1 = (o, l) => D1.every((p) => o[p] === l[p]);
function O1({
  ref: o,
  children: l,
  fallback: p,
  resize: m,
  style: u,
  gl: n,
  events: s = T1,
  eventSource: c,
  eventPrefix: f,
  shadows: d,
  linear: h,
  flat: y,
  legacy: g,
  orthographic: E,
  frameloop: _,
  dpr: A,
  performance: T,
  raycaster: M,
  camera: b,
  scene: z,
  onPointerMissed: O,
  onCreated: x,
  ...V
}) {
  Ye.useMemo(() => c1(Le), []);
  const j = Kh(), [X, k] = U1({
    scroll: !0,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...m
  }), w = Ye.useRef(null), te = Ye.useRef(null);
  Ye.useImperativeHandle(o, () => w.current);
  const B = Ds(O), [Q, Y] = Ye.useState(!1), [ne, U] = Ye.useState(!1);
  if (Q) throw Q;
  if (ne) throw ne;
  const F = Ye.useRef(null);
  return Ju(() => {
    const H = w.current;
    if (k.width > 0 && k.height > 0 && H) {
      F.current || (F.current = g1(H));
      async function q() {
        await F.current.configure({
          gl: n,
          scene: z,
          events: s,
          shadows: d,
          linear: h,
          flat: y,
          legacy: g,
          orthographic: E,
          frameloop: _,
          dpr: A,
          performance: T,
          raycaster: M,
          camera: b,
          size: k,
          // Pass mutable reference to onPointerMissed so it's free to update
          onPointerMissed: (...C) => B.current == null ? void 0 : B.current(...C),
          onCreated: (C) => {
            C.events.connect == null || C.events.connect(c ? Qh(c) ? c.current : c : te.current), f && C.setEvents({
              compute: (R, J) => {
                const L = R[f + "X"], K = R[f + "Y"];
                J.pointer.set(L / J.size.width * 2 - 1, -(K / J.size.height) * 2 + 1), J.raycaster.setFromCamera(J.pointer, J.camera);
              }
            }), x?.(C);
          }
        }), F.current.render(/* @__PURE__ */ ye(j, {
          children: /* @__PURE__ */ ye(wh, {
            set: U,
            children: /* @__PURE__ */ ye(Ye.Suspense, {
              fallback: /* @__PURE__ */ ye(Zh, {
                set: Y
              }),
              children: l ?? null
            })
          })
        }));
      }
      q();
    }
  }), Ye.useEffect(() => {
    const H = w.current;
    if (H) return () => qs(H);
  }, []), /* @__PURE__ */ ye("div", {
    ref: te,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: c ? "none" : "auto",
      ...u
    },
    ...V,
    children: /* @__PURE__ */ ye("div", {
      ref: X,
      style: {
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ ye("canvas", {
        ref: w,
        style: {
          display: "block"
        },
        children: p
      })
    })
  });
}
function R1(o) {
  return /* @__PURE__ */ ye(Ts, {
    children: /* @__PURE__ */ ye(O1, {
      ...o
    })
  });
}
function Go() {
  return Go = Object.assign ? Object.assign.bind() : function(o) {
    for (var l = 1; l < arguments.length; l++) {
      var p = arguments[l];
      for (var m in p) ({}).hasOwnProperty.call(p, m) && (o[m] = p[m]);
    }
    return o;
  }, Go.apply(null, arguments);
}
function z1() {
  var o = /* @__PURE__ */ Object.create(null);
  function l(u, n) {
    var s = u.id, c = u.name, f = u.dependencies;
    f === void 0 && (f = []);
    var d = u.init;
    d === void 0 && (d = function() {
    });
    var h = u.getTransferables;
    if (h === void 0 && (h = null), !o[s])
      try {
        f = f.map(function(g) {
          return g && g.isWorkerModule && (l(g, function(E) {
            if (E instanceof Error)
              throw E;
          }), g = o[g.id].value), g;
        }), d = m("<" + c + ">.init", d), h && (h = m("<" + c + ">.getTransferables", h));
        var y = null;
        typeof d == "function" ? y = d.apply(void 0, f) : console.error("worker module init function failed to rehydrate"), o[s] = {
          id: s,
          value: y,
          getTransferables: h
        }, n(y);
      } catch (g) {
        g && g.noLog || console.error(g), n(g);
      }
  }
  function p(u, n) {
    var s, c = u.id, f = u.args;
    (!o[c] || typeof o[c].value != "function") && n(new Error("Worker module " + c + ": not found or its 'init' did not return a function"));
    try {
      var d = (s = o[c]).value.apply(s, f);
      d && typeof d.then == "function" ? d.then(h, function(y) {
        return n(y instanceof Error ? y : new Error("" + y));
      }) : h(d);
    } catch (y) {
      n(y);
    }
    function h(y) {
      try {
        var g = o[c].getTransferables && o[c].getTransferables(y);
        (!g || !Array.isArray(g) || !g.length) && (g = void 0), n(y, g);
      } catch (E) {
        console.error(E), n(E);
      }
    }
  }
  function m(u, n) {
    var s = void 0;
    self.troikaDefine = function(f) {
      return s = f;
    };
    var c = URL.createObjectURL(
      new Blob(
        ["/** " + u.replace(/\*/g, "") + ` **/

troikaDefine(
` + n + `
)`],
        { type: "application/javascript" }
      )
    );
    try {
      importScripts(c);
    } catch (f) {
      console.error(f);
    }
    return URL.revokeObjectURL(c), delete self.troikaDefine, s;
  }
  self.addEventListener("message", function(u) {
    var n = u.data, s = n.messageId, c = n.action, f = n.data;
    try {
      c === "registerModule" && l(f, function(d) {
        d instanceof Error ? postMessage({
          messageId: s,
          success: !1,
          error: d.message
        }) : postMessage({
          messageId: s,
          success: !0,
          result: { isCallable: typeof d == "function" }
        });
      }), c === "callModule" && p(f, function(d, h) {
        d instanceof Error ? postMessage({
          messageId: s,
          success: !1,
          error: d.message
        }) : postMessage({
          messageId: s,
          success: !0,
          result: d
        }, h || void 0);
      });
    } catch (d) {
      postMessage({
        messageId: s,
        success: !1,
        error: d.stack
      });
    }
  });
}
function N1(o) {
  var l = function() {
    for (var p = [], m = arguments.length; m--; ) p[m] = arguments[m];
    return l._getInitResult().then(function(u) {
      if (typeof u == "function")
        return u.apply(void 0, p);
      throw new Error("Worker module function was called but `init` did not return a callable function");
    });
  };
  return l._getInitResult = function() {
    var p = o.dependencies, m = o.init;
    p = Array.isArray(p) ? p.map(function(n) {
      return n && (n = n.onMainThread || n, n._getInitResult && (n = n._getInitResult())), n;
    }) : [];
    var u = Promise.all(p).then(function(n) {
      return m.apply(null, n);
    });
    return l._getInitResult = function() {
      return u;
    }, u;
  }, l;
}
var Qs = function() {
  var o = !1;
  if (typeof window < "u" && typeof window.document < "u")
    try {
      var l = new Worker(
        URL.createObjectURL(new Blob([""], { type: "application/javascript" }))
      );
      l.terminate(), o = !0;
    } catch (p) {
      console.log(
        "Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" + p.message + "]"
      );
    }
  return Qs = function() {
    return o;
  }, o;
}, x1 = 0, B1 = 0, Co = !1, Ku = /* @__PURE__ */ Object.create(null), Zu = /* @__PURE__ */ Object.create(null), jo = /* @__PURE__ */ Object.create(null);
function lu(o) {
  if ((!o || typeof o.init != "function") && !Co)
    throw new Error("requires `options.init` function");
  var l = o.dependencies, p = o.init, m = o.getTransferables, u = o.workerId, n = N1(o);
  u == null && (u = "#default");
  var s = "workerModule" + ++x1, c = o.name || s, f = null;
  l = l && l.map(function(h) {
    return typeof h == "function" && !h.workerModuleData && (Co = !0, h = lu({
      workerId: u,
      name: "<" + c + "> function dependency: " + h.name,
      init: `function(){return (
` + Hi(h) + `
)}`
    }), Co = !1), h && h.workerModuleData && (h = h.workerModuleData), h;
  });
  function d() {
    for (var h = [], y = arguments.length; y--; ) h[y] = arguments[y];
    if (!Qs())
      return n.apply(void 0, h);
    if (!f) {
      f = as(u, "registerModule", d.workerModuleData);
      var g = function() {
        f = null, Zu[u].delete(g);
      };
      (Zu[u] || (Zu[u] = /* @__PURE__ */ new Set())).add(g);
    }
    return f.then(function(E) {
      var _ = E.isCallable;
      if (_)
        return as(u, "callModule", { id: s, args: h });
      throw new Error("Worker module function was called but `init` did not return a callable function");
    });
  }
  return d.workerModuleData = {
    isWorkerModule: !0,
    id: s,
    name: c,
    dependencies: l,
    init: Hi(p),
    getTransferables: m && Hi(m)
  }, d.onMainThread = n, d;
}
function G1(o) {
  Zu[o] && Zu[o].forEach(function(l) {
    l();
  }), Ku[o] && (Ku[o].terminate(), delete Ku[o]);
}
function Hi(o) {
  var l = o.toString();
  return !/^function/.test(l) && /^\w+\s*\(/.test(l) && (l = "function " + l), l;
}
function j1(o) {
  var l = Ku[o];
  if (!l) {
    var p = Hi(z1);
    l = Ku[o] = new Worker(
      URL.createObjectURL(
        new Blob(
          ["/** Worker Module Bootstrap: " + o.replace(/\*/g, "") + ` **/

;(` + p + ")()"],
          { type: "application/javascript" }
        )
      )
    ), l.onmessage = function(m) {
      var u = m.data, n = u.messageId, s = jo[n];
      if (!s)
        throw new Error("WorkerModule response with empty or unknown messageId");
      delete jo[n], s(u);
    };
  }
  return l;
}
function as(o, l, p) {
  return new Promise(function(m, u) {
    var n = ++B1;
    jo[n] = function(s) {
      s.success ? m(s.result) : u(new Error("Error in worker " + l + " call: " + s.error));
    }, j1(o).postMessage({
      messageId: n,
      action: l,
      data: p
    });
  });
}
function Fs() {
  var o = function(l) {
    function p(H, q, C, R, J, L, K, le) {
      var $ = 1 - K;
      le.x = $ * $ * H + 2 * $ * K * C + K * K * J, le.y = $ * $ * q + 2 * $ * K * R + K * K * L;
    }
    function m(H, q, C, R, J, L, K, le, $, ae) {
      var se = 1 - $;
      ae.x = se * se * se * H + 3 * se * se * $ * C + 3 * se * $ * $ * J + $ * $ * $ * K, ae.y = se * se * se * q + 3 * se * se * $ * R + 3 * se * $ * $ * L + $ * $ * $ * le;
    }
    function u(H, q) {
      for (var C = /([MLQCZ])([^MLQCZ]*)/g, R, J, L, K, le; R = C.exec(H); ) {
        var $ = R[2].replace(/^\s*|\s*$/g, "").split(/[,\s]+/).map(function(ae) {
          return parseFloat(ae);
        });
        switch (R[1]) {
          case "M":
            K = J = $[0], le = L = $[1];
            break;
          case "L":
            ($[0] !== K || $[1] !== le) && q("L", K, le, K = $[0], le = $[1]);
            break;
          case "Q": {
            q("Q", K, le, K = $[2], le = $[3], $[0], $[1]);
            break;
          }
          case "C": {
            q("C", K, le, K = $[4], le = $[5], $[0], $[1], $[2], $[3]);
            break;
          }
          case "Z":
            (K !== J || le !== L) && q("L", K, le, J, L);
            break;
        }
      }
    }
    function n(H, q, C) {
      C === void 0 && (C = 16);
      var R = { x: 0, y: 0 };
      u(H, function(J, L, K, le, $, ae, se, Se, oe) {
        switch (J) {
          case "L":
            q(L, K, le, $);
            break;
          case "Q": {
            for (var ue = L, xe = K, Ae = 1; Ae < C; Ae++)
              p(
                L,
                K,
                ae,
                se,
                le,
                $,
                Ae / (C - 1),
                R
              ), q(ue, xe, R.x, R.y), ue = R.x, xe = R.y;
            break;
          }
          case "C": {
            for (var pe = L, Ee = K, be = 1; be < C; be++)
              m(
                L,
                K,
                ae,
                se,
                Se,
                oe,
                le,
                $,
                be / (C - 1),
                R
              ), q(pe, Ee, R.x, R.y), pe = R.x, Ee = R.y;
            break;
          }
        }
      });
    }
    var s = "precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", c = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}", f = /* @__PURE__ */ new WeakMap(), d = {
      premultipliedAlpha: !1,
      preserveDrawingBuffer: !0,
      antialias: !1,
      depth: !1
    };
    function h(H, q) {
      var C = H.getContext ? H.getContext("webgl", d) : H, R = f.get(C);
      if (!R) {
        let se = function(pe) {
          var Ee = L[pe];
          if (!Ee && (Ee = L[pe] = C.getExtension(pe), !Ee))
            throw new Error(pe + " not supported");
          return Ee;
        }, Se = function(pe, Ee) {
          var be = C.createShader(Ee);
          return C.shaderSource(be, pe), C.compileShader(be), be;
        }, oe = function(pe, Ee, be, fe) {
          if (!K[pe]) {
            var ge = {}, ve = {}, ee = C.createProgram();
            C.attachShader(ee, Se(Ee, C.VERTEX_SHADER)), C.attachShader(ee, Se(be, C.FRAGMENT_SHADER)), C.linkProgram(ee), K[pe] = {
              program: ee,
              transaction: function(me) {
                C.useProgram(ee), me({
                  setUniform: function(de, We) {
                    for (var _e = [], Ce = arguments.length - 2; Ce-- > 0; ) _e[Ce] = arguments[Ce + 2];
                    var Oe = ve[We] || (ve[We] = C.getUniformLocation(ee, We));
                    C["uniform" + de].apply(C, [Oe].concat(_e));
                  },
                  setAttribute: function(de, We, _e, Ce, Oe) {
                    var Ve = ge[de];
                    Ve || (Ve = ge[de] = {
                      buf: C.createBuffer(),
                      // TODO should we destroy our buffers?
                      loc: C.getAttribLocation(ee, de),
                      data: null
                    }), C.bindBuffer(C.ARRAY_BUFFER, Ve.buf), C.vertexAttribPointer(Ve.loc, We, C.FLOAT, !1, 0, 0), C.enableVertexAttribArray(Ve.loc), J ? C.vertexAttribDivisor(Ve.loc, Ce) : se("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ve.loc, Ce), Oe !== Ve.data && (C.bufferData(C.ARRAY_BUFFER, Oe, _e), Ve.data = Oe);
                  }
                });
              }
            };
          }
          K[pe].transaction(fe);
        }, ue = function(pe, Ee) {
          $++;
          try {
            C.activeTexture(C.TEXTURE0 + $);
            var be = le[pe];
            be || (be = le[pe] = C.createTexture(), C.bindTexture(C.TEXTURE_2D, be), C.texParameteri(C.TEXTURE_2D, C.TEXTURE_MIN_FILTER, C.NEAREST), C.texParameteri(C.TEXTURE_2D, C.TEXTURE_MAG_FILTER, C.NEAREST)), C.bindTexture(C.TEXTURE_2D, be), Ee(be, $);
          } finally {
            $--;
          }
        }, xe = function(pe, Ee, be) {
          var fe = C.createFramebuffer();
          ae.push(fe), C.bindFramebuffer(C.FRAMEBUFFER, fe), C.activeTexture(C.TEXTURE0 + Ee), C.bindTexture(C.TEXTURE_2D, pe), C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, pe, 0);
          try {
            be(fe);
          } finally {
            C.deleteFramebuffer(fe), C.bindFramebuffer(C.FRAMEBUFFER, ae[--ae.length - 1] || null);
          }
        }, Ae = function() {
          L = {}, K = {}, le = {}, $ = -1, ae.length = 0;
        };
        var J = typeof WebGL2RenderingContext < "u" && C instanceof WebGL2RenderingContext, L = {}, K = {}, le = {}, $ = -1, ae = [];
        C.canvas.addEventListener("webglcontextlost", function(pe) {
          Ae(), pe.preventDefault();
        }, !1), f.set(C, R = {
          gl: C,
          isWebGL2: J,
          getExtension: se,
          withProgram: oe,
          withTexture: ue,
          withTextureFramebuffer: xe,
          handleContextLoss: Ae
        });
      }
      q(R);
    }
    function y(H, q, C, R, J, L, K, le) {
      K === void 0 && (K = 15), le === void 0 && (le = null), h(H, function($) {
        var ae = $.gl, se = $.withProgram, Se = $.withTexture;
        Se("copy", function(oe, ue) {
          ae.texImage2D(ae.TEXTURE_2D, 0, ae.RGBA, J, L, 0, ae.RGBA, ae.UNSIGNED_BYTE, q), se("copy", s, c, function(xe) {
            var Ae = xe.setUniform, pe = xe.setAttribute;
            pe("aUV", 2, ae.STATIC_DRAW, 0, new Float32Array([0, 0, 2, 0, 0, 2])), Ae("1i", "image", ue), ae.bindFramebuffer(ae.FRAMEBUFFER, le || null), ae.disable(ae.BLEND), ae.colorMask(K & 8, K & 4, K & 2, K & 1), ae.viewport(C, R, J, L), ae.scissor(C, R, J, L), ae.drawArrays(ae.TRIANGLES, 0, 3);
          });
        });
      });
    }
    function g(H, q, C) {
      var R = H.width, J = H.height;
      h(H, function(L) {
        var K = L.gl, le = new Uint8Array(R * J * 4);
        K.readPixels(0, 0, R, J, K.RGBA, K.UNSIGNED_BYTE, le), H.width = q, H.height = C, y(K, le, 0, 0, R, J);
      });
    }
    var E = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      withWebGLContext: h,
      renderImageData: y,
      resizeWebGLCanvasWithoutClearing: g
    });
    function _(H, q, C, R, J, L) {
      L === void 0 && (L = 1);
      var K = new Uint8Array(H * q), le = R[2] - R[0], $ = R[3] - R[1], ae = [];
      n(C, function(pe, Ee, be, fe) {
        ae.push({
          x1: pe,
          y1: Ee,
          x2: be,
          y2: fe,
          minX: Math.min(pe, be),
          minY: Math.min(Ee, fe),
          maxX: Math.max(pe, be),
          maxY: Math.max(Ee, fe)
        });
      }), ae.sort(function(pe, Ee) {
        return pe.maxX - Ee.maxX;
      });
      for (var se = 0; se < H; se++)
        for (var Se = 0; Se < q; Se++) {
          var oe = xe(
            R[0] + le * (se + 0.5) / H,
            R[1] + $ * (Se + 0.5) / q
          ), ue = Math.pow(1 - Math.abs(oe) / J, L) / 2;
          oe < 0 && (ue = 1 - ue), ue = Math.max(0, Math.min(255, Math.round(ue * 255))), K[Se * H + se] = ue;
        }
      return K;
      function xe(pe, Ee) {
        for (var be = 1 / 0, fe = 1 / 0, ge = ae.length; ge--; ) {
          var ve = ae[ge];
          if (ve.maxX + fe <= pe)
            break;
          if (pe + fe > ve.minX && Ee - fe < ve.maxY && Ee + fe > ve.minY) {
            var ee = M(pe, Ee, ve.x1, ve.y1, ve.x2, ve.y2);
            ee < be && (be = ee, fe = Math.sqrt(be));
          }
        }
        return Ae(pe, Ee) && (fe = -fe), fe;
      }
      function Ae(pe, Ee) {
        for (var be = 0, fe = ae.length; fe--; ) {
          var ge = ae[fe];
          if (ge.maxX <= pe)
            break;
          var ve = ge.y1 > Ee != ge.y2 > Ee && pe < (ge.x2 - ge.x1) * (Ee - ge.y1) / (ge.y2 - ge.y1) + ge.x1;
          ve && (be += ge.y1 < ge.y2 ? 1 : -1);
        }
        return be !== 0;
      }
    }
    function A(H, q, C, R, J, L, K, le, $, ae) {
      L === void 0 && (L = 1), le === void 0 && (le = 0), $ === void 0 && ($ = 0), ae === void 0 && (ae = 0), T(H, q, C, R, J, L, K, null, le, $, ae);
    }
    function T(H, q, C, R, J, L, K, le, $, ae, se) {
      L === void 0 && (L = 1), $ === void 0 && ($ = 0), ae === void 0 && (ae = 0), se === void 0 && (se = 0);
      for (var Se = _(H, q, C, R, J, L), oe = new Uint8Array(Se.length * 4), ue = 0; ue < Se.length; ue++)
        oe[ue * 4 + se] = Se[ue];
      y(K, oe, $, ae, H, q, 1 << 3 - se, le);
    }
    function M(H, q, C, R, J, L) {
      var K = J - C, le = L - R, $ = K * K + le * le, ae = $ ? Math.max(0, Math.min(1, ((H - C) * K + (q - R) * le) / $)) : 0, se = H - (C + ae * K), Se = q - (R + ae * le);
      return se * se + Se * Se;
    }
    var b = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      generate: _,
      generateIntoCanvas: A,
      generateIntoFramebuffer: T
    }), z = "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", O = "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}", x = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}", V = new Float32Array([0, 0, 2, 0, 0, 2]), j = null, X = !1, k = {}, w = /* @__PURE__ */ new WeakMap();
    function te(H) {
      if (!X && !ne(H))
        throw new Error("WebGL generation not supported");
    }
    function B(H, q, C, R, J, L, K) {
      if (L === void 0 && (L = 1), K === void 0 && (K = null), !K && (K = j, !K)) {
        var le = typeof OffscreenCanvas == "function" ? new OffscreenCanvas(1, 1) : typeof document < "u" ? document.createElement("canvas") : null;
        if (!le)
          throw new Error("OffscreenCanvas or DOM canvas not supported");
        K = j = le.getContext("webgl", { depth: !1 });
      }
      te(K);
      var $ = new Uint8Array(H * q * 4);
      h(K, function(oe) {
        var ue = oe.gl, xe = oe.withTexture, Ae = oe.withTextureFramebuffer;
        xe("readable", function(pe, Ee) {
          ue.texImage2D(ue.TEXTURE_2D, 0, ue.RGBA, H, q, 0, ue.RGBA, ue.UNSIGNED_BYTE, null), Ae(pe, Ee, function(be) {
            Y(
              H,
              q,
              C,
              R,
              J,
              L,
              ue,
              be,
              0,
              0,
              0
              // red channel
            ), ue.readPixels(0, 0, H, q, ue.RGBA, ue.UNSIGNED_BYTE, $);
          });
        });
      });
      for (var ae = new Uint8Array(H * q), se = 0, Se = 0; se < $.length; se += 4)
        ae[Se++] = $[se];
      return ae;
    }
    function Q(H, q, C, R, J, L, K, le, $, ae) {
      L === void 0 && (L = 1), le === void 0 && (le = 0), $ === void 0 && ($ = 0), ae === void 0 && (ae = 0), Y(H, q, C, R, J, L, K, null, le, $, ae);
    }
    function Y(H, q, C, R, J, L, K, le, $, ae, se) {
      L === void 0 && (L = 1), $ === void 0 && ($ = 0), ae === void 0 && (ae = 0), se === void 0 && (se = 0), te(K);
      var Se = [];
      n(C, function(oe, ue, xe, Ae) {
        Se.push(oe, ue, xe, Ae);
      }), Se = new Float32Array(Se), h(K, function(oe) {
        var ue = oe.gl, xe = oe.isWebGL2, Ae = oe.getExtension, pe = oe.withProgram, Ee = oe.withTexture, be = oe.withTextureFramebuffer, fe = oe.handleContextLoss;
        if (Ee("rawDistances", function(ge, ve) {
          (H !== ge._lastWidth || q !== ge._lastHeight) && ue.texImage2D(
            ue.TEXTURE_2D,
            0,
            ue.RGBA,
            ge._lastWidth = H,
            ge._lastHeight = q,
            0,
            ue.RGBA,
            ue.UNSIGNED_BYTE,
            null
          ), pe("main", z, O, function(ee) {
            var He = ee.setAttribute, me = ee.setUniform, Ue = !xe && Ae("ANGLE_instanced_arrays"), de = !xe && Ae("EXT_blend_minmax");
            He("aUV", 2, ue.STATIC_DRAW, 0, V), He("aLineSegment", 4, ue.DYNAMIC_DRAW, 1, Se), me.apply(void 0, ["4f", "uGlyphBounds"].concat(R)), me("1f", "uMaxDistance", J), me("1f", "uExponent", L), be(ge, ve, function(We) {
              ue.enable(ue.BLEND), ue.colorMask(!0, !0, !0, !0), ue.viewport(0, 0, H, q), ue.scissor(0, 0, H, q), ue.blendFunc(ue.ONE, ue.ONE), ue.blendEquationSeparate(ue.FUNC_ADD, xe ? ue.MAX : de.MAX_EXT), ue.clear(ue.COLOR_BUFFER_BIT), xe ? ue.drawArraysInstanced(ue.TRIANGLES, 0, 3, Se.length / 4) : Ue.drawArraysInstancedANGLE(ue.TRIANGLES, 0, 3, Se.length / 4);
            });
          }), pe("post", s, x, function(ee) {
            ee.setAttribute("aUV", 2, ue.STATIC_DRAW, 0, V), ee.setUniform("1i", "tex", ve), ue.bindFramebuffer(ue.FRAMEBUFFER, le), ue.disable(ue.BLEND), ue.colorMask(se === 0, se === 1, se === 2, se === 3), ue.viewport($, ae, H, q), ue.scissor($, ae, H, q), ue.drawArrays(ue.TRIANGLES, 0, 3);
          });
        }), ue.isContextLost())
          throw fe(), new Error("webgl context lost");
      });
    }
    function ne(H) {
      var q = !H || H === j ? k : H.canvas || H, C = w.get(q);
      if (C === void 0) {
        X = !0;
        var R = null;
        try {
          var J = [
            97,
            106,
            97,
            61,
            99,
            137,
            118,
            80,
            80,
            118,
            137,
            99,
            61,
            97,
            106,
            97
          ], L = B(
            4,
            4,
            "M8,8L16,8L24,24L16,24Z",
            [0, 0, 32, 32],
            24,
            1,
            H
          );
          C = L && J.length === L.length && L.every(function(K, le) {
            return K === J[le];
          }), C || (R = "bad trial run results", console.info(J, L));
        } catch (K) {
          C = !1, R = K.message;
        }
        R && console.warn("WebGL SDF generation not supported:", R), X = !1, w.set(q, C);
      }
      return C;
    }
    var U = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      generate: B,
      generateIntoCanvas: Q,
      generateIntoFramebuffer: Y,
      isSupported: ne
    });
    function F(H, q, C, R, J, L) {
      J === void 0 && (J = Math.max(R[2] - R[0], R[3] - R[1]) / 2), L === void 0 && (L = 1);
      try {
        return B.apply(U, arguments);
      } catch (K) {
        return console.info("WebGL SDF generation failed, falling back to JS", K), _.apply(b, arguments);
      }
    }
    function W(H, q, C, R, J, L, K, le, $, ae) {
      J === void 0 && (J = Math.max(R[2] - R[0], R[3] - R[1]) / 2), L === void 0 && (L = 1), le === void 0 && (le = 0), $ === void 0 && ($ = 0), ae === void 0 && (ae = 0);
      try {
        return Q.apply(U, arguments);
      } catch (se) {
        return console.info("WebGL SDF generation failed, falling back to JS", se), A.apply(b, arguments);
      }
    }
    return l.forEachPathCommand = u, l.generate = F, l.generateIntoCanvas = W, l.javascript = b, l.pathToLineSegments = n, l.webgl = U, l.webglUtils = E, Object.defineProperty(l, "__esModule", { value: !0 }), l;
  }({});
  return o;
}
function H1() {
  var o = function(l) {
    var p = {
      R: "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",
      EN: "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",
      ES: "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",
      ET: "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",
      AN: "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",
      CS: "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",
      B: "a,3,f+2,2v,690",
      S: "9,2,k",
      WS: "c,k,4f4,1vk+a,u,1j,335",
      ON: "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",
      BN: "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",
      NSM: "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",
      AL: "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",
      LRO: "6ct",
      RLO: "6cu",
      LRE: "6cq",
      RLE: "6cr",
      PDF: "6cs",
      LRI: "6ee",
      RLI: "6ef",
      FSI: "6eg",
      PDI: "6eh"
    }, m = {}, u = {};
    m.L = 1, u[1] = "L", Object.keys(p).forEach(function(fe, ge) {
      m[fe] = 1 << ge + 1, u[m[fe]] = fe;
    }), Object.freeze(m);
    var n = m.LRI | m.RLI | m.FSI, s = m.L | m.R | m.AL, c = m.B | m.S | m.WS | m.ON | m.FSI | m.LRI | m.RLI | m.PDI, f = m.BN | m.RLE | m.LRE | m.RLO | m.LRO | m.PDF, d = m.S | m.WS | m.B | n | m.PDI | f, h = null;
    function y() {
      if (!h) {
        h = /* @__PURE__ */ new Map();
        var fe = function(ve) {
          if (p.hasOwnProperty(ve)) {
            var ee = 0;
            p[ve].split(",").forEach(function(He) {
              var me = He.split("+"), Ue = me[0], de = me[1];
              Ue = parseInt(Ue, 36), de = de ? parseInt(de, 36) : 0, h.set(ee += Ue, m[ve]);
              for (var We = 0; We < de; We++)
                h.set(++ee, m[ve]);
            });
          }
        };
        for (var ge in p) fe(ge);
      }
    }
    function g(fe) {
      return y(), h.get(fe.codePointAt(0)) || m.L;
    }
    function E(fe) {
      return u[g(fe)];
    }
    var _ = {
      pairs: "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
      canonical: "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"
    };
    function A(fe, ge) {
      var ve = 36, ee = 0, He = /* @__PURE__ */ new Map(), me = ge && /* @__PURE__ */ new Map(), Ue;
      return fe.split(",").forEach(function de(We) {
        if (We.indexOf("+") !== -1)
          for (var _e = +We; _e--; )
            de(Ue);
        else {
          Ue = We;
          var Ce = We.split(">"), Oe = Ce[0], Ve = Ce[1];
          Oe = String.fromCodePoint(ee += parseInt(Oe, ve)), Ve = String.fromCodePoint(ee += parseInt(Ve, ve)), He.set(Oe, Ve), ge && me.set(Ve, Oe);
        }
      }), { map: He, reverseMap: me };
    }
    var T, M, b;
    function z() {
      if (!T) {
        var fe = A(_.pairs, !0), ge = fe.map, ve = fe.reverseMap;
        T = ge, M = ve, b = A(_.canonical, !1).map;
      }
    }
    function O(fe) {
      return z(), T.get(fe) || null;
    }
    function x(fe) {
      return z(), M.get(fe) || null;
    }
    function V(fe) {
      return z(), b.get(fe) || null;
    }
    var j = m.L, X = m.R, k = m.EN, w = m.ES, te = m.ET, B = m.AN, Q = m.CS, Y = m.B, ne = m.S, U = m.ON, F = m.BN, W = m.NSM, H = m.AL, q = m.LRO, C = m.RLO, R = m.LRE, J = m.RLE, L = m.PDF, K = m.LRI, le = m.RLI, $ = m.FSI, ae = m.PDI;
    function se(fe, ge) {
      for (var ve = 125, ee = new Uint32Array(fe.length), He = 0; He < fe.length; He++)
        ee[He] = g(fe[He]);
      var me = /* @__PURE__ */ new Map();
      function Ue(Ht, kt) {
        var Mt = ee[Ht];
        ee[Ht] = kt, me.set(Mt, me.get(Mt) - 1), Mt & c && me.set(c, me.get(c) - 1), me.set(kt, (me.get(kt) || 0) + 1), kt & c && me.set(c, (me.get(c) || 0) + 1);
      }
      for (var de = new Uint8Array(fe.length), We = /* @__PURE__ */ new Map(), _e = [], Ce = null, Oe = 0; Oe < fe.length; Oe++)
        Ce || _e.push(Ce = {
          start: Oe,
          end: fe.length - 1,
          // 3.3.1 P2-P3: Determine the paragraph level
          level: ge === "rtl" ? 1 : ge === "ltr" ? 0 : gu(Oe, !1)
        }), ee[Oe] & Y && (Ce.end = Oe, Ce = null);
      for (var Ve = J | R | C | q | n | ae | L | Y, $e = function(Ht) {
        return Ht + (Ht & 1 ? 1 : 2);
      }, ot = function(Ht) {
        return Ht + (Ht & 1 ? 2 : 1);
      }, Be = 0; Be < _e.length; Be++) {
        Ce = _e[Be];
        var Ge = [{
          _level: Ce.level,
          _override: 0,
          //0=neutral, 1=L, 2=R
          _isolate: 0
          //bool
        }], Me = void 0, ft = 0, et = 0, Tt = 0;
        me.clear();
        for (var tt = Ce.start; tt <= Ce.end; tt++) {
          var Re = ee[tt];
          if (Me = Ge[Ge.length - 1], me.set(Re, (me.get(Re) || 0) + 1), Re & c && me.set(c, (me.get(c) || 0) + 1), Re & Ve)
            if (Re & (J | R)) {
              de[tt] = Me._level;
              var Ze = (Re === J ? ot : $e)(Me._level);
              Ze <= ve && !ft && !et ? Ge.push({
                _level: Ze,
                _override: 0,
                _isolate: 0
              }) : ft || et++;
            } else if (Re & (C | q)) {
              de[tt] = Me._level;
              var Ta = (Re === C ? ot : $e)(Me._level);
              Ta <= ve && !ft && !et ? Ge.push({
                _level: Ta,
                _override: Re & C ? X : j,
                _isolate: 0
              }) : ft || et++;
            } else if (Re & n) {
              Re & $ && (Re = gu(tt + 1, !0) === 1 ? le : K), de[tt] = Me._level, Me._override && Ue(tt, Me._override);
              var Je = (Re === le ? ot : $e)(Me._level);
              Je <= ve && ft === 0 && et === 0 ? (Tt++, Ge.push({
                _level: Je,
                _override: 0,
                _isolate: 1,
                _isolInitIndex: tt
              })) : ft++;
            } else if (Re & ae) {
              if (ft > 0)
                ft--;
              else if (Tt > 0) {
                for (et = 0; !Ge[Ge.length - 1]._isolate; )
                  Ge.pop();
                var Xe = Ge[Ge.length - 1]._isolInitIndex;
                Xe != null && (We.set(Xe, tt), We.set(tt, Xe)), Ge.pop(), Tt--;
              }
              Me = Ge[Ge.length - 1], de[tt] = Me._level, Me._override && Ue(tt, Me._override);
            } else Re & L ? (ft === 0 && (et > 0 ? et-- : !Me._isolate && Ge.length > 1 && (Ge.pop(), Me = Ge[Ge.length - 1])), de[tt] = Me._level) : Re & Y && (de[tt] = Ce.level);
          else
            de[tt] = Me._level, Me._override && Re !== F && Ue(tt, Me._override);
        }
        for (var mt = [], at = null, ze = Ce.start; ze <= Ce.end; ze++) {
          var nt = ee[ze];
          if (!(nt & f)) {
            var Nt = de[ze], At = nt & n, gt = nt === ae;
            at && Nt === at._level ? (at._end = ze, at._endsWithIsolInit = At) : mt.push(at = {
              _start: ze,
              _end: ze,
              _level: Nt,
              _startsWithPDI: gt,
              _endsWithIsolInit: At
            });
          }
        }
        for (var Zt = [], sa = 0; sa < mt.length; sa++) {
          var xt = mt[sa];
          if (!xt._startsWithPDI || xt._startsWithPDI && !We.has(xt._start)) {
            for (var Ua = [at = xt], qt = void 0; at && at._endsWithIsolInit && (qt = We.get(at._end)) != null; )
              for (var Ot = sa + 1; Ot < mt.length; Ot++)
                if (mt[Ot]._start === qt) {
                  Ua.push(at = mt[Ot]);
                  break;
                }
            for (var Ut = [], lt = 0; lt < Ua.length; lt++)
              for (var hl = Ua[lt], An = hl._start; An <= hl._end; An++)
                Ut.push(An);
            for (var Wu = de[Ut[0]], uu = Ce.level, pl = Ut[0] - 1; pl >= 0; pl--)
              if (!(ee[pl] & f)) {
                uu = de[pl];
                break;
              }
            var On = Ut[Ut.length - 1], iu = de[On], ml = Ce.level;
            if (!(ee[On] & n)) {
              for (var Rt = On + 1; Rt <= Ce.end; Rt++)
                if (!(ee[Rt] & f)) {
                  ml = de[Rt];
                  break;
                }
            }
            Zt.push({
              _seqIndices: Ut,
              _sosType: Math.max(uu, Wu) % 2 ? X : j,
              _eosType: Math.max(ml, iu) % 2 ? X : j
            });
          }
        }
        for (var ht = 0; ht < Zt.length; ht++) {
          var Va = Zt[ht], Te = Va._seqIndices, La = Va._sosType, Ma = Va._eosType, Ca = de[Te[0]] & 1 ? X : j;
          if (me.get(W))
            for (var un = 0; un < Te.length; un++) {
              var yl = Te[un];
              if (ee[yl] & W) {
                for (var gl = La, Rn = un - 1; Rn >= 0; Rn--)
                  if (!(ee[Te[Rn]] & f)) {
                    gl = ee[Te[Rn]];
                    break;
                  }
                Ue(yl, gl & (n | ae) ? U : gl);
              }
            }
          if (me.get(k))
            for (var zn = 0; zn < Te.length; zn++) {
              var ru = Te[zn];
              if (ee[ru] & k)
                for (var Nn = zn - 1; Nn >= -1; Nn--) {
                  var ou = Nn === -1 ? La : ee[Te[Nn]];
                  if (ou & s) {
                    ou === H && Ue(ru, B);
                    break;
                  }
                }
            }
          if (me.get(H))
            for (var xn = 0; xn < Te.length; xn++) {
              var fu = Te[xn];
              ee[fu] & H && Ue(fu, X);
            }
          if (me.get(w) || me.get(Q))
            for (var Bn = 1; Bn < Te.length - 1; Bn++) {
              var Sl = Te[Bn];
              if (ee[Sl] & (w | Q)) {
                for (var qa = 0, El = 0, Gn = Bn - 1; Gn >= 0 && (qa = ee[Te[Gn]], !!(qa & f)); Gn--)
                  ;
                for (var bl = Bn + 1; bl < Te.length && (El = ee[Te[bl]], !!(El & f)); bl++)
                  ;
                qa === El && (ee[Sl] === w ? qa === k : qa & (k | B)) && Ue(Sl, qa);
              }
            }
          if (me.get(k))
            for (var ea = 0; ea < Te.length; ea++) {
              var Pu = Te[ea];
              if (ee[Pu] & k) {
                for (var jn = ea - 1; jn >= 0 && ee[Te[jn]] & (te | f); jn--)
                  Ue(Te[jn], k);
                for (ea++; ea < Te.length && ee[Te[ea]] & (te | f | k); ea++)
                  ee[Te[ea]] !== k && Ue(Te[ea], k);
              }
            }
          if (me.get(te) || me.get(w) || me.get(Q))
            for (var rn = 0; rn < Te.length; rn++) {
              var ku = Te[rn];
              if (ee[ku] & (te | w | Q)) {
                Ue(ku, U);
                for (var Hn = rn - 1; Hn >= 0 && ee[Te[Hn]] & f; Hn--)
                  Ue(Te[Hn], U);
                for (var Da = rn + 1; Da < Te.length && ee[Te[Da]] & f; Da++)
                  Ue(Te[Da], U);
              }
            }
          if (me.get(k))
            for (var _l = 0, Vn = La; _l < Te.length; _l++) {
              var Ln = Te[_l], Tl = ee[Ln];
              Tl & k ? Vn === j && Ue(Ln, j) : Tl & s && (Vn = Tl);
            }
          if (me.get(c)) {
            var Ya = X | k | B, cu = Ya | j, qn = [];
            {
              for (var Xa = [], Qa = 0; Qa < Te.length; Qa++)
                if (ee[Te[Qa]] & c) {
                  var Fa = fe[Te[Qa]], su = void 0;
                  if (O(Fa) !== null)
                    if (Xa.length < 63)
                      Xa.push({ char: Fa, seqIndex: Qa });
                    else
                      break;
                  else if ((su = x(Fa)) !== null)
                    for (var on = Xa.length - 1; on >= 0; on--) {
                      var Yn = Xa[on].char;
                      if (Yn === su || Yn === x(V(Fa)) || O(V(Yn)) === Fa) {
                        qn.push([Xa[on].seqIndex, Qa]), Xa.length = on;
                        break;
                      }
                    }
                }
              qn.sort(function(Ht, kt) {
                return Ht[0] - kt[0];
              });
            }
            for (var Ul = 0; Ul < qn.length; Ul++) {
              for (var du = qn[Ul], Xn = du[0], Qn = du[1], vu = !1, Pt = 0, hu = Xn + 1; hu < Qn; hu++) {
                var Iu = Te[hu];
                if (ee[Iu] & cu) {
                  vu = !0;
                  var pu = ee[Iu] & Ya ? X : j;
                  if (pu === Ca) {
                    Pt = pu;
                    break;
                  }
                }
              }
              if (vu && !Pt) {
                Pt = La;
                for (var Ka = Xn - 1; Ka >= 0; Ka--) {
                  var Ml = Te[Ka];
                  if (ee[Ml] & cu) {
                    var Fn = ee[Ml] & Ya ? X : j;
                    Fn !== Ca ? Pt = Fn : Pt = Ca;
                    break;
                  }
                }
              }
              if (Pt) {
                if (ee[Te[Xn]] = ee[Te[Qn]] = Pt, Pt !== Ca) {
                  for (var fn = Xn + 1; fn < Te.length; fn++)
                    if (!(ee[Te[fn]] & f)) {
                      g(fe[Te[fn]]) & W && (ee[Te[fn]] = Pt);
                      break;
                    }
                }
                if (Pt !== Ca) {
                  for (var cn = Qn + 1; cn < Te.length; cn++)
                    if (!(ee[Te[cn]] & f)) {
                      g(fe[Te[cn]]) & W && (ee[Te[cn]] = Pt);
                      break;
                    }
                }
              }
            }
            for (var da = 0; da < Te.length; da++)
              if (ee[Te[da]] & c) {
                for (var mu = da, Cl = da, Aa = La, xa = da - 1; xa >= 0; xa--)
                  if (ee[Te[xa]] & f)
                    mu = xa;
                  else {
                    Aa = ee[Te[xa]] & Ya ? X : j;
                    break;
                  }
                for (var yu = Ma, Za = da + 1; Za < Te.length; Za++)
                  if (ee[Te[Za]] & (c | f))
                    Cl = Za;
                  else {
                    yu = ee[Te[Za]] & Ya ? X : j;
                    break;
                  }
                for (var Dl = mu; Dl <= Cl; Dl++)
                  ee[Te[Dl]] = Aa === yu ? Aa : Ca;
                da = Cl;
              }
          }
        }
        for (var Yt = Ce.start; Yt <= Ce.end; Yt++) {
          var wi = de[Yt], St = ee[Yt];
          if (wi & 1 ? St & (j | k | B) && de[Yt]++ : St & X ? de[Yt]++ : St & (B | k) && (de[Yt] += 2), St & f && (de[Yt] = Yt === 0 ? Ce.level : de[Yt - 1]), Yt === Ce.end || g(fe[Yt]) & (ne | Y))
            for (var Kn = Yt; Kn >= 0 && g(fe[Kn]) & d; Kn--)
              de[Kn] = Ce.level;
        }
      }
      return {
        levels: de,
        paragraphs: _e
      };
      function gu(Ht, kt) {
        for (var Mt = Ht; Mt < fe.length; Mt++) {
          var va = ee[Mt];
          if (va & (X | H))
            return 1;
          if (va & (Y | j) || kt && va === ae)
            return 0;
          if (va & n) {
            var Su = $u(Mt);
            Mt = Su === -1 ? fe.length : Su;
          }
        }
        return 0;
      }
      function $u(Ht) {
        for (var kt = 1, Mt = Ht + 1; Mt < fe.length; Mt++) {
          var va = ee[Mt];
          if (va & Y)
            break;
          if (va & ae) {
            if (--kt === 0)
              return Mt;
          } else va & n && kt++;
        }
        return -1;
      }
    }
    var Se = "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1", oe;
    function ue() {
      if (!oe) {
        var fe = A(Se, !0), ge = fe.map, ve = fe.reverseMap;
        ve.forEach(function(ee, He) {
          ge.set(He, ee);
        }), oe = ge;
      }
    }
    function xe(fe) {
      return ue(), oe.get(fe) || null;
    }
    function Ae(fe, ge, ve, ee) {
      var He = fe.length;
      ve = Math.max(0, ve == null ? 0 : +ve), ee = Math.min(He - 1, ee == null ? He - 1 : +ee);
      for (var me = /* @__PURE__ */ new Map(), Ue = ve; Ue <= ee; Ue++)
        if (ge[Ue] & 1) {
          var de = xe(fe[Ue]);
          de !== null && me.set(Ue, de);
        }
      return me;
    }
    function pe(fe, ge, ve, ee) {
      var He = fe.length;
      ve = Math.max(0, ve == null ? 0 : +ve), ee = Math.min(He - 1, ee == null ? He - 1 : +ee);
      var me = [];
      return ge.paragraphs.forEach(function(Ue) {
        var de = Math.max(ve, Ue.start), We = Math.min(ee, Ue.end);
        if (de < We) {
          for (var _e = ge.levels.slice(de, We + 1), Ce = We; Ce >= de && g(fe[Ce]) & d; Ce--)
            _e[Ce] = Ue.level;
          for (var Oe = Ue.level, Ve = 1 / 0, $e = 0; $e < _e.length; $e++) {
            var ot = _e[$e];
            ot > Oe && (Oe = ot), ot < Ve && (Ve = ot | 1);
          }
          for (var Be = Oe; Be >= Ve; Be--)
            for (var Ge = 0; Ge < _e.length; Ge++)
              if (_e[Ge] >= Be) {
                for (var Me = Ge; Ge + 1 < _e.length && _e[Ge + 1] >= Be; )
                  Ge++;
                Ge > Me && me.push([Me + de, Ge + de]);
              }
        }
      }), me;
    }
    function Ee(fe, ge, ve, ee) {
      var He = be(fe, ge, ve, ee), me = [].concat(fe);
      return He.forEach(function(Ue, de) {
        me[de] = (ge.levels[Ue] & 1 ? xe(fe[Ue]) : null) || fe[Ue];
      }), me.join("");
    }
    function be(fe, ge, ve, ee) {
      for (var He = pe(fe, ge, ve, ee), me = [], Ue = 0; Ue < fe.length; Ue++)
        me[Ue] = Ue;
      return He.forEach(function(de) {
        for (var We = de[0], _e = de[1], Ce = me.slice(We, _e + 1), Oe = Ce.length; Oe--; )
          me[_e - Oe] = Ce[Oe];
      }), me;
    }
    return l.closingToOpeningBracket = x, l.getBidiCharType = g, l.getBidiCharTypeName = E, l.getCanonicalBracket = V, l.getEmbeddingLevels = se, l.getMirroredCharacter = xe, l.getMirroredCharactersMap = Ae, l.getReorderSegments = pe, l.getReorderedIndices = be, l.getReorderedString = Ee, l.openingToClosingBracket = O, Object.defineProperty(l, "__esModule", { value: !0 }), l;
  }({});
  return o;
}
const Ks = /\bvoid\s+main\s*\(\s*\)\s*{/g;
function Ho(o) {
  const l = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function p(m, u) {
    let n = lh[u];
    return n ? Ho(n) : m;
  }
  return o.replace(l, p);
}
const Lt = [];
for (let o = 0; o < 256; o++)
  Lt[o] = (o < 16 ? "0" : "") + o.toString(16);
function V1() {
  const o = Math.random() * 4294967295 | 0, l = Math.random() * 4294967295 | 0, p = Math.random() * 4294967295 | 0, m = Math.random() * 4294967295 | 0;
  return (Lt[o & 255] + Lt[o >> 8 & 255] + Lt[o >> 16 & 255] + Lt[o >> 24 & 255] + "-" + Lt[l & 255] + Lt[l >> 8 & 255] + "-" + Lt[l >> 16 & 15 | 64] + Lt[l >> 24 & 255] + "-" + Lt[p & 63 | 128] + Lt[p >> 8 & 255] + "-" + Lt[p >> 16 & 255] + Lt[p >> 24 & 255] + Lt[m & 255] + Lt[m >> 8 & 255] + Lt[m >> 16 & 255] + Lt[m >> 24 & 255]).toUpperCase();
}
const fl = Object.assign || function() {
  let o = arguments[0];
  for (let l = 1, p = arguments.length; l < p; l++) {
    let m = arguments[l];
    if (m)
      for (let u in m)
        Object.prototype.hasOwnProperty.call(m, u) && (o[u] = m[u]);
  }
  return o;
}, L1 = Date.now(), ns = /* @__PURE__ */ new WeakMap(), ls = /* @__PURE__ */ new Map();
let q1 = 1e10;
function Vo(o, l) {
  const p = F1(l);
  let m = ns.get(o);
  if (m || ns.set(o, m = /* @__PURE__ */ Object.create(null)), m[p])
    return new m[p]();
  const u = `_onBeforeCompile${p}`, n = function(d, h) {
    o.onBeforeCompile.call(this, d, h);
    const y = this.customProgramCacheKey() + "|" + d.vertexShader + "|" + d.fragmentShader;
    let g = ls[y];
    if (!g) {
      const E = Y1(this, d, l, p);
      g = ls[y] = E;
    }
    d.vertexShader = g.vertexShader, d.fragmentShader = g.fragmentShader, fl(d.uniforms, this.uniforms), l.timeUniform && (d.uniforms[l.timeUniform] = {
      get value() {
        return Date.now() - L1;
      }
    }), this[u] && this[u](d);
  }, s = function() {
    return c(l.chained ? o : o.clone());
  }, c = function(d) {
    const h = Object.create(d, f);
    return Object.defineProperty(h, "baseMaterial", { value: o }), Object.defineProperty(h, "id", { value: q1++ }), h.uuid = V1(), h.uniforms = fl({}, d.uniforms, l.uniforms), h.defines = fl({}, d.defines, l.defines), h.defines[`TROIKA_DERIVED_MATERIAL_${p}`] = "", h.extensions = fl({}, d.extensions, l.extensions), h._listeners = void 0, h;
  }, f = {
    constructor: { value: s },
    isDerivedMaterial: { value: !0 },
    type: {
      get: () => o.type,
      set: (d) => {
        o.type = d;
      }
    },
    isDerivedFrom: {
      writable: !0,
      configurable: !0,
      value: function(d) {
        const h = this.baseMaterial;
        return d === h || h.isDerivedMaterial && h.isDerivedFrom(d) || !1;
      }
    },
    customProgramCacheKey: {
      writable: !0,
      configurable: !0,
      value: function() {
        return o.customProgramCacheKey() + "|" + p;
      }
    },
    onBeforeCompile: {
      get() {
        return n;
      },
      set(d) {
        this[u] = d;
      }
    },
    copy: {
      writable: !0,
      configurable: !0,
      value: function(d) {
        return o.copy.call(this, d), !o.isShaderMaterial && !o.isDerivedMaterial && (fl(this.extensions, d.extensions), fl(this.defines, d.defines), fl(this.uniforms, nh.clone(d.uniforms))), this;
      }
    },
    clone: {
      writable: !0,
      configurable: !0,
      value: function() {
        const d = new o.constructor();
        return c(d).copy(this);
      }
    },
    /**
     * Utility to get a MeshDepthMaterial that will honor this derived material's vertex
     * transformations and discarded fragments.
     */
    getDepthMaterial: {
      writable: !0,
      configurable: !0,
      value: function() {
        let d = this._depthMaterial;
        return d || (d = this._depthMaterial = Vo(
          o.isDerivedMaterial ? o.getDepthMaterial() : new th({ depthPacking: ah }),
          l
        ), d.defines.IS_DEPTH_MATERIAL = "", d.uniforms = this.uniforms), d;
      }
    },
    /**
     * Utility to get a MeshDistanceMaterial that will honor this derived material's vertex
     * transformations and discarded fragments.
     */
    getDistanceMaterial: {
      writable: !0,
      configurable: !0,
      value: function() {
        let d = this._distanceMaterial;
        return d || (d = this._distanceMaterial = Vo(
          o.isDerivedMaterial ? o.getDistanceMaterial() : new eh(),
          l
        ), d.defines.IS_DISTANCE_MATERIAL = "", d.uniforms = this.uniforms), d;
      }
    },
    dispose: {
      writable: !0,
      configurable: !0,
      value() {
        const { _depthMaterial: d, _distanceMaterial: h } = this;
        d && d.dispose(), h && h.dispose(), o.dispose.call(this);
      }
    }
  };
  return m[p] = s, new s();
}
function Y1(o, { vertexShader: l, fragmentShader: p }, m, u) {
  let {
    vertexDefs: n,
    vertexMainIntro: s,
    vertexMainOutro: c,
    vertexTransform: f,
    fragmentDefs: d,
    fragmentMainIntro: h,
    fragmentMainOutro: y,
    fragmentColorTransform: g,
    customRewriter: E,
    timeUniform: _
  } = m;
  if (n = n || "", s = s || "", c = c || "", d = d || "", h = h || "", y = y || "", (f || E) && (l = Ho(l)), (g || E) && (p = p.replace(
    /^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,
    `
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`
  ), p = Ho(p)), E) {
    let A = E({ vertexShader: l, fragmentShader: p });
    l = A.vertexShader, p = A.fragmentShader;
  }
  if (g) {
    let A = [];
    p = p.replace(
      /^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,
      // [^]+? = non-greedy match of any chars including newlines
      (T) => (A.push(T), "")
    ), y = `${g}
${A.join(`
`)}
${y}`;
  }
  if (_) {
    const A = `
uniform float ${_};
`;
    n = A + n, d = A + d;
  }
  return f && (l = `vec3 troika_position_${u};
vec3 troika_normal_${u};
vec2 troika_uv_${u};
${l}
`, n = `${n}
void troikaVertexTransform${u}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${f}
}
`, s = `
troika_position_${u} = vec3(position);
troika_normal_${u} = vec3(normal);
troika_uv_${u} = vec2(uv);
troikaVertexTransform${u}(troika_position_${u}, troika_normal_${u}, troika_uv_${u});
${s}
`, l = l.replace(/\b(position|normal|uv)\b/g, (A, T, M, b) => /\battribute\s+vec[23]\s+$/.test(b.substr(0, M)) ? T : `troika_${T}_${u}`), o.map && o.map.channel > 0 || (l = l.replace(/\bMAP_UV\b/g, `troika_uv_${u}`))), l = us(l, u, n, s, c), p = us(p, u, d, h, y), {
    vertexShader: l,
    fragmentShader: p
  };
}
function us(o, l, p, m, u) {
  return (m || u || p) && (o = o.replace(
    Ks,
    `
${p}
void troikaOrigMain${l}() {`
  ), o += `
void main() {
  ${m}
  troikaOrigMain${l}();
  ${u}
}`), o;
}
function X1(o, l) {
  return o === "uniforms" ? void 0 : typeof l == "function" ? l.toString() : l;
}
let Q1 = 0;
const is = /* @__PURE__ */ new Map();
function F1(o) {
  const l = JSON.stringify(o, X1);
  let p = is.get(l);
  return p == null && is.set(l, p = ++Q1), p;
}
/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/
function K1() {
  return typeof window > "u" && (self.window = self), function(o) {
    var l = { parse: function(u) {
      var n = l._bin, s = new Uint8Array(u);
      if (n.readASCII(s, 0, 4) == "ttcf") {
        var c = 4;
        n.readUshort(s, c), c += 2, n.readUshort(s, c), c += 2;
        var f = n.readUint(s, c);
        c += 4;
        for (var d = [], h = 0; h < f; h++) {
          var y = n.readUint(s, c);
          c += 4, d.push(l._readFont(s, y));
        }
        return d;
      }
      return [l._readFont(s, 0)];
    }, _readFont: function(u, n) {
      var s = l._bin, c = n;
      s.readFixed(u, n), n += 4;
      var f = s.readUshort(u, n);
      n += 2, s.readUshort(u, n), n += 2, s.readUshort(u, n), n += 2, s.readUshort(u, n), n += 2;
      for (var d = ["cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GDEF", "GPOS", "GSUB", "SVG "], h = { _data: u, _offset: c }, y = {}, g = 0; g < f; g++) {
        var E = s.readASCII(u, n, 4);
        n += 4, s.readUint(u, n), n += 4;
        var _ = s.readUint(u, n);
        n += 4;
        var A = s.readUint(u, n);
        n += 4, y[E] = { offset: _, length: A };
      }
      for (g = 0; g < d.length; g++) {
        var T = d[g];
        y[T] && (h[T.trim()] = l[T.trim()].parse(u, y[T].offset, y[T].length, h));
      }
      return h;
    }, _tabOffset: function(u, n, s) {
      for (var c = l._bin, f = c.readUshort(u, s + 4), d = s + 12, h = 0; h < f; h++) {
        var y = c.readASCII(u, d, 4);
        d += 4, c.readUint(u, d), d += 4;
        var g = c.readUint(u, d);
        if (d += 4, c.readUint(u, d), d += 4, y == n) return g;
      }
      return 0;
    } };
    l._bin = { readFixed: function(u, n) {
      return (u[n] << 8 | u[n + 1]) + (u[n + 2] << 8 | u[n + 3]) / 65540;
    }, readF2dot14: function(u, n) {
      return l._bin.readShort(u, n) / 16384;
    }, readInt: function(u, n) {
      return l._bin._view(u).getInt32(n);
    }, readInt8: function(u, n) {
      return l._bin._view(u).getInt8(n);
    }, readShort: function(u, n) {
      return l._bin._view(u).getInt16(n);
    }, readUshort: function(u, n) {
      return l._bin._view(u).getUint16(n);
    }, readUshorts: function(u, n, s) {
      for (var c = [], f = 0; f < s; f++) c.push(l._bin.readUshort(u, n + 2 * f));
      return c;
    }, readUint: function(u, n) {
      return l._bin._view(u).getUint32(n);
    }, readUint64: function(u, n) {
      return 4294967296 * l._bin.readUint(u, n) + l._bin.readUint(u, n + 4);
    }, readASCII: function(u, n, s) {
      for (var c = "", f = 0; f < s; f++) c += String.fromCharCode(u[n + f]);
      return c;
    }, readUnicode: function(u, n, s) {
      for (var c = "", f = 0; f < s; f++) {
        var d = u[n++] << 8 | u[n++];
        c += String.fromCharCode(d);
      }
      return c;
    }, _tdec: typeof window < "u" && window.TextDecoder ? new window.TextDecoder() : null, readUTF8: function(u, n, s) {
      var c = l._bin._tdec;
      return c && n == 0 && s == u.length ? c.decode(u) : l._bin.readASCII(u, n, s);
    }, readBytes: function(u, n, s) {
      for (var c = [], f = 0; f < s; f++) c.push(u[n + f]);
      return c;
    }, readASCIIArray: function(u, n, s) {
      for (var c = [], f = 0; f < s; f++) c.push(String.fromCharCode(u[n + f]));
      return c;
    }, _view: function(u) {
      return u._dataView || (u._dataView = u.buffer ? new DataView(u.buffer, u.byteOffset, u.byteLength) : new DataView(new Uint8Array(u).buffer));
    } }, l._lctf = {}, l._lctf.parse = function(u, n, s, c, f) {
      var d = l._bin, h = {}, y = n;
      d.readFixed(u, n), n += 4;
      var g = d.readUshort(u, n);
      n += 2;
      var E = d.readUshort(u, n);
      n += 2;
      var _ = d.readUshort(u, n);
      return n += 2, h.scriptList = l._lctf.readScriptList(u, y + g), h.featureList = l._lctf.readFeatureList(u, y + E), h.lookupList = l._lctf.readLookupList(u, y + _, f), h;
    }, l._lctf.readLookupList = function(u, n, s) {
      var c = l._bin, f = n, d = [], h = c.readUshort(u, n);
      n += 2;
      for (var y = 0; y < h; y++) {
        var g = c.readUshort(u, n);
        n += 2;
        var E = l._lctf.readLookupTable(u, f + g, s);
        d.push(E);
      }
      return d;
    }, l._lctf.readLookupTable = function(u, n, s) {
      var c = l._bin, f = n, d = { tabs: [] };
      d.ltype = c.readUshort(u, n), n += 2, d.flag = c.readUshort(u, n), n += 2;
      var h = c.readUshort(u, n);
      n += 2;
      for (var y = d.ltype, g = 0; g < h; g++) {
        var E = c.readUshort(u, n);
        n += 2;
        var _ = s(u, y, f + E, d);
        d.tabs.push(_);
      }
      return d;
    }, l._lctf.numOfOnes = function(u) {
      for (var n = 0, s = 0; s < 32; s++) (u >>> s & 1) != 0 && n++;
      return n;
    }, l._lctf.readClassDef = function(u, n) {
      var s = l._bin, c = [], f = s.readUshort(u, n);
      if (n += 2, f == 1) {
        var d = s.readUshort(u, n);
        n += 2;
        var h = s.readUshort(u, n);
        n += 2;
        for (var y = 0; y < h; y++) c.push(d + y), c.push(d + y), c.push(s.readUshort(u, n)), n += 2;
      }
      if (f == 2) {
        var g = s.readUshort(u, n);
        for (n += 2, y = 0; y < g; y++) c.push(s.readUshort(u, n)), n += 2, c.push(s.readUshort(u, n)), n += 2, c.push(s.readUshort(u, n)), n += 2;
      }
      return c;
    }, l._lctf.getInterval = function(u, n) {
      for (var s = 0; s < u.length; s += 3) {
        var c = u[s], f = u[s + 1];
        if (u[s + 2], c <= n && n <= f) return s;
      }
      return -1;
    }, l._lctf.readCoverage = function(u, n) {
      var s = l._bin, c = {};
      c.fmt = s.readUshort(u, n), n += 2;
      var f = s.readUshort(u, n);
      return n += 2, c.fmt == 1 && (c.tab = s.readUshorts(u, n, f)), c.fmt == 2 && (c.tab = s.readUshorts(u, n, 3 * f)), c;
    }, l._lctf.coverageIndex = function(u, n) {
      var s = u.tab;
      if (u.fmt == 1) return s.indexOf(n);
      if (u.fmt == 2) {
        var c = l._lctf.getInterval(s, n);
        if (c != -1) return s[c + 2] + (n - s[c]);
      }
      return -1;
    }, l._lctf.readFeatureList = function(u, n) {
      var s = l._bin, c = n, f = [], d = s.readUshort(u, n);
      n += 2;
      for (var h = 0; h < d; h++) {
        var y = s.readASCII(u, n, 4);
        n += 4;
        var g = s.readUshort(u, n);
        n += 2;
        var E = l._lctf.readFeatureTable(u, c + g);
        E.tag = y.trim(), f.push(E);
      }
      return f;
    }, l._lctf.readFeatureTable = function(u, n) {
      var s = l._bin, c = n, f = {}, d = s.readUshort(u, n);
      n += 2, d > 0 && (f.featureParams = c + d);
      var h = s.readUshort(u, n);
      n += 2, f.tab = [];
      for (var y = 0; y < h; y++) f.tab.push(s.readUshort(u, n + 2 * y));
      return f;
    }, l._lctf.readScriptList = function(u, n) {
      var s = l._bin, c = n, f = {}, d = s.readUshort(u, n);
      n += 2;
      for (var h = 0; h < d; h++) {
        var y = s.readASCII(u, n, 4);
        n += 4;
        var g = s.readUshort(u, n);
        n += 2, f[y.trim()] = l._lctf.readScriptTable(u, c + g);
      }
      return f;
    }, l._lctf.readScriptTable = function(u, n) {
      var s = l._bin, c = n, f = {}, d = s.readUshort(u, n);
      n += 2, d > 0 && (f.default = l._lctf.readLangSysTable(u, c + d));
      var h = s.readUshort(u, n);
      n += 2;
      for (var y = 0; y < h; y++) {
        var g = s.readASCII(u, n, 4);
        n += 4;
        var E = s.readUshort(u, n);
        n += 2, f[g.trim()] = l._lctf.readLangSysTable(u, c + E);
      }
      return f;
    }, l._lctf.readLangSysTable = function(u, n) {
      var s = l._bin, c = {};
      s.readUshort(u, n), n += 2, c.reqFeature = s.readUshort(u, n), n += 2;
      var f = s.readUshort(u, n);
      return n += 2, c.features = s.readUshorts(u, n, f), c;
    }, l.CFF = {}, l.CFF.parse = function(u, n, s) {
      var c = l._bin;
      (u = new Uint8Array(u.buffer, n, s))[n = 0], u[++n], u[++n], u[++n], n++;
      var f = [];
      n = l.CFF.readIndex(u, n, f);
      for (var d = [], h = 0; h < f.length - 1; h++) d.push(c.readASCII(u, n + f[h], f[h + 1] - f[h]));
      n += f[f.length - 1];
      var y = [];
      n = l.CFF.readIndex(u, n, y);
      var g = [];
      for (h = 0; h < y.length - 1; h++) g.push(l.CFF.readDict(u, n + y[h], n + y[h + 1]));
      n += y[y.length - 1];
      var E = g[0], _ = [];
      n = l.CFF.readIndex(u, n, _);
      var A = [];
      for (h = 0; h < _.length - 1; h++) A.push(c.readASCII(u, n + _[h], _[h + 1] - _[h]));
      if (n += _[_.length - 1], l.CFF.readSubrs(u, n, E), E.CharStrings) {
        n = E.CharStrings, _ = [], n = l.CFF.readIndex(u, n, _);
        var T = [];
        for (h = 0; h < _.length - 1; h++) T.push(c.readBytes(u, n + _[h], _[h + 1] - _[h]));
        E.CharStrings = T;
      }
      if (E.ROS) {
        n = E.FDArray;
        var M = [];
        for (n = l.CFF.readIndex(u, n, M), E.FDArray = [], h = 0; h < M.length - 1; h++) {
          var b = l.CFF.readDict(u, n + M[h], n + M[h + 1]);
          l.CFF._readFDict(u, b, A), E.FDArray.push(b);
        }
        n += M[M.length - 1], n = E.FDSelect, E.FDSelect = [];
        var z = u[n];
        if (n++, z != 3) throw z;
        var O = c.readUshort(u, n);
        for (n += 2, h = 0; h < O + 1; h++) E.FDSelect.push(c.readUshort(u, n), u[n + 2]), n += 3;
      }
      return E.Encoding && (E.Encoding = l.CFF.readEncoding(u, E.Encoding, E.CharStrings.length)), E.charset && (E.charset = l.CFF.readCharset(u, E.charset, E.CharStrings.length)), l.CFF._readFDict(u, E, A), E;
    }, l.CFF._readFDict = function(u, n, s) {
      var c;
      for (var f in n.Private && (c = n.Private[1], n.Private = l.CFF.readDict(u, c, c + n.Private[0]), n.Private.Subrs && l.CFF.readSubrs(u, c + n.Private.Subrs, n.Private)), n) ["FamilyName", "FontName", "FullName", "Notice", "version", "Copyright"].indexOf(f) != -1 && (n[f] = s[n[f] - 426 + 35]);
    }, l.CFF.readSubrs = function(u, n, s) {
      var c = l._bin, f = [];
      n = l.CFF.readIndex(u, n, f);
      var d, h = f.length;
      d = h < 1240 ? 107 : h < 33900 ? 1131 : 32768, s.Bias = d, s.Subrs = [];
      for (var y = 0; y < f.length - 1; y++) s.Subrs.push(c.readBytes(u, n + f[y], f[y + 1] - f[y]));
    }, l.CFF.tableSE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0], l.CFF.glyphByUnicode = function(u, n) {
      for (var s = 0; s < u.charset.length; s++) if (u.charset[s] == n) return s;
      return -1;
    }, l.CFF.glyphBySE = function(u, n) {
      return n < 0 || n > 255 ? -1 : l.CFF.glyphByUnicode(u, l.CFF.tableSE[n]);
    }, l.CFF.readEncoding = function(u, n, s) {
      l._bin;
      var c = [".notdef"], f = u[n];
      if (n++, f != 0) throw "error: unknown encoding format: " + f;
      var d = u[n];
      n++;
      for (var h = 0; h < d; h++) c.push(u[n + h]);
      return c;
    }, l.CFF.readCharset = function(u, n, s) {
      var c = l._bin, f = [".notdef"], d = u[n];
      if (n++, d == 0) for (var h = 0; h < s; h++) {
        var y = c.readUshort(u, n);
        n += 2, f.push(y);
      }
      else {
        if (d != 1 && d != 2) throw "error: format: " + d;
        for (; f.length < s; ) {
          y = c.readUshort(u, n), n += 2;
          var g = 0;
          for (d == 1 ? (g = u[n], n++) : (g = c.readUshort(u, n), n += 2), h = 0; h <= g; h++) f.push(y), y++;
        }
      }
      return f;
    }, l.CFF.readIndex = function(u, n, s) {
      var c = l._bin, f = c.readUshort(u, n) + 1, d = u[n += 2];
      if (n++, d == 1) for (var h = 0; h < f; h++) s.push(u[n + h]);
      else if (d == 2) for (h = 0; h < f; h++) s.push(c.readUshort(u, n + 2 * h));
      else if (d == 3) for (h = 0; h < f; h++) s.push(16777215 & c.readUint(u, n + 3 * h - 1));
      else if (f != 1) throw "unsupported offset size: " + d + ", count: " + f;
      return (n += f * d) - 1;
    }, l.CFF.getCharString = function(u, n, s) {
      var c = l._bin, f = u[n], d = u[n + 1];
      u[n + 2], u[n + 3], u[n + 4];
      var h = 1, y = null, g = null;
      f <= 20 && (y = f, h = 1), f == 12 && (y = 100 * f + d, h = 2), 21 <= f && f <= 27 && (y = f, h = 1), f == 28 && (g = c.readShort(u, n + 1), h = 3), 29 <= f && f <= 31 && (y = f, h = 1), 32 <= f && f <= 246 && (g = f - 139, h = 1), 247 <= f && f <= 250 && (g = 256 * (f - 247) + d + 108, h = 2), 251 <= f && f <= 254 && (g = 256 * -(f - 251) - d - 108, h = 2), f == 255 && (g = c.readInt(u, n + 1) / 65535, h = 5), s.val = g ?? "o" + y, s.size = h;
    }, l.CFF.readCharString = function(u, n, s) {
      for (var c = n + s, f = l._bin, d = []; n < c; ) {
        var h = u[n], y = u[n + 1];
        u[n + 2], u[n + 3], u[n + 4];
        var g = 1, E = null, _ = null;
        h <= 20 && (E = h, g = 1), h == 12 && (E = 100 * h + y, g = 2), h != 19 && h != 20 || (E = h, g = 2), 21 <= h && h <= 27 && (E = h, g = 1), h == 28 && (_ = f.readShort(u, n + 1), g = 3), 29 <= h && h <= 31 && (E = h, g = 1), 32 <= h && h <= 246 && (_ = h - 139, g = 1), 247 <= h && h <= 250 && (_ = 256 * (h - 247) + y + 108, g = 2), 251 <= h && h <= 254 && (_ = 256 * -(h - 251) - y - 108, g = 2), h == 255 && (_ = f.readInt(u, n + 1) / 65535, g = 5), d.push(_ ?? "o" + E), n += g;
      }
      return d;
    }, l.CFF.readDict = function(u, n, s) {
      for (var c = l._bin, f = {}, d = []; n < s; ) {
        var h = u[n], y = u[n + 1];
        u[n + 2], u[n + 3], u[n + 4];
        var g = 1, E = null, _ = null;
        if (h == 28 && (_ = c.readShort(u, n + 1), g = 3), h == 29 && (_ = c.readInt(u, n + 1), g = 5), 32 <= h && h <= 246 && (_ = h - 139, g = 1), 247 <= h && h <= 250 && (_ = 256 * (h - 247) + y + 108, g = 2), 251 <= h && h <= 254 && (_ = 256 * -(h - 251) - y - 108, g = 2), h == 255) throw _ = c.readInt(u, n + 1) / 65535, g = 5, "unknown number";
        if (h == 30) {
          var A = [];
          for (g = 1; ; ) {
            var T = u[n + g];
            g++;
            var M = T >> 4, b = 15 & T;
            if (M != 15 && A.push(M), b != 15 && A.push(b), b == 15) break;
          }
          for (var z = "", O = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"], x = 0; x < A.length; x++) z += O[A[x]];
          _ = parseFloat(z);
        }
        h <= 21 && (E = ["version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX"][h], g = 1, h == 12 && (E = ["Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName"][y], g = 2)), E != null ? (f[E] = d.length == 1 ? d[0] : d, d = []) : d.push(_), n += g;
      }
      return f;
    }, l.cmap = {}, l.cmap.parse = function(u, n, s) {
      u = new Uint8Array(u.buffer, n, s), n = 0;
      var c = l._bin, f = {};
      c.readUshort(u, n), n += 2;
      var d = c.readUshort(u, n);
      n += 2;
      var h = [];
      f.tables = [];
      for (var y = 0; y < d; y++) {
        var g = c.readUshort(u, n);
        n += 2;
        var E = c.readUshort(u, n);
        n += 2;
        var _ = c.readUint(u, n);
        n += 4;
        var A = "p" + g + "e" + E, T = h.indexOf(_);
        if (T == -1) {
          var M;
          T = f.tables.length, h.push(_);
          var b = c.readUshort(u, _);
          b == 0 ? M = l.cmap.parse0(u, _) : b == 4 ? M = l.cmap.parse4(u, _) : b == 6 ? M = l.cmap.parse6(u, _) : b == 12 ? M = l.cmap.parse12(u, _) : console.debug("unknown format: " + b, g, E, _), f.tables.push(M);
        }
        if (f[A] != null) throw "multiple tables for one platform+encoding";
        f[A] = T;
      }
      return f;
    }, l.cmap.parse0 = function(u, n) {
      var s = l._bin, c = {};
      c.format = s.readUshort(u, n), n += 2;
      var f = s.readUshort(u, n);
      n += 2, s.readUshort(u, n), n += 2, c.map = [];
      for (var d = 0; d < f - 6; d++) c.map.push(u[n + d]);
      return c;
    }, l.cmap.parse4 = function(u, n) {
      var s = l._bin, c = n, f = {};
      f.format = s.readUshort(u, n), n += 2;
      var d = s.readUshort(u, n);
      n += 2, s.readUshort(u, n), n += 2;
      var h = s.readUshort(u, n);
      n += 2;
      var y = h / 2;
      f.searchRange = s.readUshort(u, n), n += 2, f.entrySelector = s.readUshort(u, n), n += 2, f.rangeShift = s.readUshort(u, n), n += 2, f.endCount = s.readUshorts(u, n, y), n += 2 * y, n += 2, f.startCount = s.readUshorts(u, n, y), n += 2 * y, f.idDelta = [];
      for (var g = 0; g < y; g++) f.idDelta.push(s.readShort(u, n)), n += 2;
      for (f.idRangeOffset = s.readUshorts(u, n, y), n += 2 * y, f.glyphIdArray = []; n < c + d; ) f.glyphIdArray.push(s.readUshort(u, n)), n += 2;
      return f;
    }, l.cmap.parse6 = function(u, n) {
      var s = l._bin, c = {};
      c.format = s.readUshort(u, n), n += 2, s.readUshort(u, n), n += 2, s.readUshort(u, n), n += 2, c.firstCode = s.readUshort(u, n), n += 2;
      var f = s.readUshort(u, n);
      n += 2, c.glyphIdArray = [];
      for (var d = 0; d < f; d++) c.glyphIdArray.push(s.readUshort(u, n)), n += 2;
      return c;
    }, l.cmap.parse12 = function(u, n) {
      var s = l._bin, c = {};
      c.format = s.readUshort(u, n), n += 2, n += 2, s.readUint(u, n), n += 4, s.readUint(u, n), n += 4;
      var f = s.readUint(u, n);
      n += 4, c.groups = [];
      for (var d = 0; d < f; d++) {
        var h = n + 12 * d, y = s.readUint(u, h + 0), g = s.readUint(u, h + 4), E = s.readUint(u, h + 8);
        c.groups.push([y, g, E]);
      }
      return c;
    }, l.glyf = {}, l.glyf.parse = function(u, n, s, c) {
      for (var f = [], d = 0; d < c.maxp.numGlyphs; d++) f.push(null);
      return f;
    }, l.glyf._parseGlyf = function(u, n) {
      var s = l._bin, c = u._data, f = l._tabOffset(c, "glyf", u._offset) + u.loca[n];
      if (u.loca[n] == u.loca[n + 1]) return null;
      var d = {};
      if (d.noc = s.readShort(c, f), f += 2, d.xMin = s.readShort(c, f), f += 2, d.yMin = s.readShort(c, f), f += 2, d.xMax = s.readShort(c, f), f += 2, d.yMax = s.readShort(c, f), f += 2, d.xMin >= d.xMax || d.yMin >= d.yMax) return null;
      if (d.noc > 0) {
        d.endPts = [];
        for (var h = 0; h < d.noc; h++) d.endPts.push(s.readUshort(c, f)), f += 2;
        var y = s.readUshort(c, f);
        if (f += 2, c.length - f < y) return null;
        d.instructions = s.readBytes(c, f, y), f += y;
        var g = d.endPts[d.noc - 1] + 1;
        for (d.flags = [], h = 0; h < g; h++) {
          var E = c[f];
          if (f++, d.flags.push(E), (8 & E) != 0) {
            var _ = c[f];
            f++;
            for (var A = 0; A < _; A++) d.flags.push(E), h++;
          }
        }
        for (d.xs = [], h = 0; h < g; h++) {
          var T = (2 & d.flags[h]) != 0, M = (16 & d.flags[h]) != 0;
          T ? (d.xs.push(M ? c[f] : -c[f]), f++) : M ? d.xs.push(0) : (d.xs.push(s.readShort(c, f)), f += 2);
        }
        for (d.ys = [], h = 0; h < g; h++)
          T = (4 & d.flags[h]) != 0, M = (32 & d.flags[h]) != 0, T ? (d.ys.push(M ? c[f] : -c[f]), f++) : M ? d.ys.push(0) : (d.ys.push(s.readShort(c, f)), f += 2);
        var b = 0, z = 0;
        for (h = 0; h < g; h++) b += d.xs[h], z += d.ys[h], d.xs[h] = b, d.ys[h] = z;
      } else {
        var O;
        d.parts = [];
        do {
          O = s.readUshort(c, f), f += 2;
          var x = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
          if (d.parts.push(x), x.glyphIndex = s.readUshort(c, f), f += 2, 1 & O) {
            var V = s.readShort(c, f);
            f += 2;
            var j = s.readShort(c, f);
            f += 2;
          } else
            V = s.readInt8(c, f), f++, j = s.readInt8(c, f), f++;
          2 & O ? (x.m.tx = V, x.m.ty = j) : (x.p1 = V, x.p2 = j), 8 & O ? (x.m.a = x.m.d = s.readF2dot14(c, f), f += 2) : 64 & O ? (x.m.a = s.readF2dot14(c, f), f += 2, x.m.d = s.readF2dot14(c, f), f += 2) : 128 & O && (x.m.a = s.readF2dot14(c, f), f += 2, x.m.b = s.readF2dot14(c, f), f += 2, x.m.c = s.readF2dot14(c, f), f += 2, x.m.d = s.readF2dot14(c, f), f += 2);
        } while (32 & O);
        if (256 & O) {
          var X = s.readUshort(c, f);
          for (f += 2, d.instr = [], h = 0; h < X; h++) d.instr.push(c[f]), f++;
        }
      }
      return d;
    }, l.GDEF = {}, l.GDEF.parse = function(u, n, s, c) {
      var f = n;
      n += 4;
      var d = l._bin.readUshort(u, n);
      return { glyphClassDef: d === 0 ? null : l._lctf.readClassDef(u, f + d) };
    }, l.GPOS = {}, l.GPOS.parse = function(u, n, s, c) {
      return l._lctf.parse(u, n, s, c, l.GPOS.subt);
    }, l.GPOS.subt = function(u, n, s, c) {
      var f = l._bin, d = s, h = {};
      if (h.fmt = f.readUshort(u, s), s += 2, n == 1 || n == 2 || n == 3 || n == 7 || n == 8 && h.fmt <= 2) {
        var y = f.readUshort(u, s);
        s += 2, h.coverage = l._lctf.readCoverage(u, y + d);
      }
      if (n == 1 && h.fmt == 1) {
        var g = f.readUshort(u, s);
        s += 2, g != 0 && (h.pos = l.GPOS.readValueRecord(u, s, g));
      } else if (n == 2 && h.fmt >= 1 && h.fmt <= 2) {
        g = f.readUshort(u, s), s += 2;
        var E = f.readUshort(u, s);
        s += 2;
        var _ = l._lctf.numOfOnes(g), A = l._lctf.numOfOnes(E);
        if (h.fmt == 1) {
          h.pairsets = [];
          var T = f.readUshort(u, s);
          s += 2;
          for (var M = 0; M < T; M++) {
            var b = d + f.readUshort(u, s);
            s += 2;
            var z = f.readUshort(u, b);
            b += 2;
            for (var O = [], x = 0; x < z; x++) {
              var V = f.readUshort(u, b);
              b += 2, g != 0 && (B = l.GPOS.readValueRecord(u, b, g), b += 2 * _), E != 0 && (Q = l.GPOS.readValueRecord(u, b, E), b += 2 * A), O.push({ gid2: V, val1: B, val2: Q });
            }
            h.pairsets.push(O);
          }
        }
        if (h.fmt == 2) {
          var j = f.readUshort(u, s);
          s += 2;
          var X = f.readUshort(u, s);
          s += 2;
          var k = f.readUshort(u, s);
          s += 2;
          var w = f.readUshort(u, s);
          for (s += 2, h.classDef1 = l._lctf.readClassDef(u, d + j), h.classDef2 = l._lctf.readClassDef(u, d + X), h.matrix = [], M = 0; M < k; M++) {
            var te = [];
            for (x = 0; x < w; x++) {
              var B = null, Q = null;
              g != 0 && (B = l.GPOS.readValueRecord(u, s, g), s += 2 * _), E != 0 && (Q = l.GPOS.readValueRecord(u, s, E), s += 2 * A), te.push({ val1: B, val2: Q });
            }
            h.matrix.push(te);
          }
        }
      } else if (n == 4 && h.fmt == 1) h.markCoverage = l._lctf.readCoverage(u, f.readUshort(u, s) + d), h.baseCoverage = l._lctf.readCoverage(u, f.readUshort(u, s + 2) + d), h.markClassCount = f.readUshort(u, s + 4), h.markArray = l.GPOS.readMarkArray(u, f.readUshort(u, s + 6) + d), h.baseArray = l.GPOS.readBaseArray(u, f.readUshort(u, s + 8) + d, h.markClassCount);
      else if (n == 6 && h.fmt == 1) h.mark1Coverage = l._lctf.readCoverage(u, f.readUshort(u, s) + d), h.mark2Coverage = l._lctf.readCoverage(u, f.readUshort(u, s + 2) + d), h.markClassCount = f.readUshort(u, s + 4), h.mark1Array = l.GPOS.readMarkArray(u, f.readUshort(u, s + 6) + d), h.mark2Array = l.GPOS.readBaseArray(u, f.readUshort(u, s + 8) + d, h.markClassCount);
      else {
        if (n == 9 && h.fmt == 1) {
          var Y = f.readUshort(u, s);
          s += 2;
          var ne = f.readUint(u, s);
          if (s += 4, c.ltype == 9) c.ltype = Y;
          else if (c.ltype != Y) throw "invalid extension substitution";
          return l.GPOS.subt(u, c.ltype, d + ne);
        }
        console.debug("unsupported GPOS table LookupType", n, "format", h.fmt);
      }
      return h;
    }, l.GPOS.readValueRecord = function(u, n, s) {
      var c = l._bin, f = [];
      return f.push(1 & s ? c.readShort(u, n) : 0), n += 1 & s ? 2 : 0, f.push(2 & s ? c.readShort(u, n) : 0), n += 2 & s ? 2 : 0, f.push(4 & s ? c.readShort(u, n) : 0), n += 4 & s ? 2 : 0, f.push(8 & s ? c.readShort(u, n) : 0), n += 8 & s ? 2 : 0, f;
    }, l.GPOS.readBaseArray = function(u, n, s) {
      var c = l._bin, f = [], d = n, h = c.readUshort(u, n);
      n += 2;
      for (var y = 0; y < h; y++) {
        for (var g = [], E = 0; E < s; E++) g.push(l.GPOS.readAnchorRecord(u, d + c.readUshort(u, n))), n += 2;
        f.push(g);
      }
      return f;
    }, l.GPOS.readMarkArray = function(u, n) {
      var s = l._bin, c = [], f = n, d = s.readUshort(u, n);
      n += 2;
      for (var h = 0; h < d; h++) {
        var y = l.GPOS.readAnchorRecord(u, s.readUshort(u, n + 2) + f);
        y.markClass = s.readUshort(u, n), c.push(y), n += 4;
      }
      return c;
    }, l.GPOS.readAnchorRecord = function(u, n) {
      var s = l._bin, c = {};
      return c.fmt = s.readUshort(u, n), c.x = s.readShort(u, n + 2), c.y = s.readShort(u, n + 4), c;
    }, l.GSUB = {}, l.GSUB.parse = function(u, n, s, c) {
      return l._lctf.parse(u, n, s, c, l.GSUB.subt);
    }, l.GSUB.subt = function(u, n, s, c) {
      var f = l._bin, d = s, h = {};
      if (h.fmt = f.readUshort(u, s), s += 2, n != 1 && n != 2 && n != 4 && n != 5 && n != 6) return null;
      if (n == 1 || n == 2 || n == 4 || n == 5 && h.fmt <= 2 || n == 6 && h.fmt <= 2) {
        var y = f.readUshort(u, s);
        s += 2, h.coverage = l._lctf.readCoverage(u, d + y);
      }
      if (n == 1 && h.fmt >= 1 && h.fmt <= 2) {
        if (h.fmt == 1) h.delta = f.readShort(u, s), s += 2;
        else if (h.fmt == 2) {
          var g = f.readUshort(u, s);
          s += 2, h.newg = f.readUshorts(u, s, g), s += 2 * h.newg.length;
        }
      } else if (n == 2 && h.fmt == 1) {
        g = f.readUshort(u, s), s += 2, h.seqs = [];
        for (var E = 0; E < g; E++) {
          var _ = f.readUshort(u, s) + d;
          s += 2;
          var A = f.readUshort(u, _);
          h.seqs.push(f.readUshorts(u, _ + 2, A));
        }
      } else if (n == 4)
        for (h.vals = [], g = f.readUshort(u, s), s += 2, E = 0; E < g; E++) {
          var T = f.readUshort(u, s);
          s += 2, h.vals.push(l.GSUB.readLigatureSet(u, d + T));
        }
      else if (n == 5 && h.fmt == 2) {
        if (h.fmt == 2) {
          var M = f.readUshort(u, s);
          s += 2, h.cDef = l._lctf.readClassDef(u, d + M), h.scset = [];
          var b = f.readUshort(u, s);
          for (s += 2, E = 0; E < b; E++) {
            var z = f.readUshort(u, s);
            s += 2, h.scset.push(z == 0 ? null : l.GSUB.readSubClassSet(u, d + z));
          }
        }
      } else if (n == 6 && h.fmt == 3) {
        if (h.fmt == 3) {
          for (E = 0; E < 3; E++) {
            g = f.readUshort(u, s), s += 2;
            for (var O = [], x = 0; x < g; x++) O.push(l._lctf.readCoverage(u, d + f.readUshort(u, s + 2 * x)));
            s += 2 * g, E == 0 && (h.backCvg = O), E == 1 && (h.inptCvg = O), E == 2 && (h.ahedCvg = O);
          }
          g = f.readUshort(u, s), s += 2, h.lookupRec = l.GSUB.readSubstLookupRecords(u, s, g);
        }
      } else {
        if (n == 7 && h.fmt == 1) {
          var V = f.readUshort(u, s);
          s += 2;
          var j = f.readUint(u, s);
          if (s += 4, c.ltype == 9) c.ltype = V;
          else if (c.ltype != V) throw "invalid extension substitution";
          return l.GSUB.subt(u, c.ltype, d + j);
        }
        console.debug("unsupported GSUB table LookupType", n, "format", h.fmt);
      }
      return h;
    }, l.GSUB.readSubClassSet = function(u, n) {
      var s = l._bin.readUshort, c = n, f = [], d = s(u, n);
      n += 2;
      for (var h = 0; h < d; h++) {
        var y = s(u, n);
        n += 2, f.push(l.GSUB.readSubClassRule(u, c + y));
      }
      return f;
    }, l.GSUB.readSubClassRule = function(u, n) {
      var s = l._bin.readUshort, c = {}, f = s(u, n), d = s(u, n += 2);
      n += 2, c.input = [];
      for (var h = 0; h < f - 1; h++) c.input.push(s(u, n)), n += 2;
      return c.substLookupRecords = l.GSUB.readSubstLookupRecords(u, n, d), c;
    }, l.GSUB.readSubstLookupRecords = function(u, n, s) {
      for (var c = l._bin.readUshort, f = [], d = 0; d < s; d++) f.push(c(u, n), c(u, n + 2)), n += 4;
      return f;
    }, l.GSUB.readChainSubClassSet = function(u, n) {
      var s = l._bin, c = n, f = [], d = s.readUshort(u, n);
      n += 2;
      for (var h = 0; h < d; h++) {
        var y = s.readUshort(u, n);
        n += 2, f.push(l.GSUB.readChainSubClassRule(u, c + y));
      }
      return f;
    }, l.GSUB.readChainSubClassRule = function(u, n) {
      for (var s = l._bin, c = {}, f = ["backtrack", "input", "lookahead"], d = 0; d < f.length; d++) {
        var h = s.readUshort(u, n);
        n += 2, d == 1 && h--, c[f[d]] = s.readUshorts(u, n, h), n += 2 * c[f[d]].length;
      }
      return h = s.readUshort(u, n), n += 2, c.subst = s.readUshorts(u, n, 2 * h), n += 2 * c.subst.length, c;
    }, l.GSUB.readLigatureSet = function(u, n) {
      var s = l._bin, c = n, f = [], d = s.readUshort(u, n);
      n += 2;
      for (var h = 0; h < d; h++) {
        var y = s.readUshort(u, n);
        n += 2, f.push(l.GSUB.readLigature(u, c + y));
      }
      return f;
    }, l.GSUB.readLigature = function(u, n) {
      var s = l._bin, c = { chain: [] };
      c.nglyph = s.readUshort(u, n), n += 2;
      var f = s.readUshort(u, n);
      n += 2;
      for (var d = 0; d < f - 1; d++) c.chain.push(s.readUshort(u, n)), n += 2;
      return c;
    }, l.head = {}, l.head.parse = function(u, n, s) {
      var c = l._bin, f = {};
      return c.readFixed(u, n), n += 4, f.fontRevision = c.readFixed(u, n), n += 4, c.readUint(u, n), n += 4, c.readUint(u, n), n += 4, f.flags = c.readUshort(u, n), n += 2, f.unitsPerEm = c.readUshort(u, n), n += 2, f.created = c.readUint64(u, n), n += 8, f.modified = c.readUint64(u, n), n += 8, f.xMin = c.readShort(u, n), n += 2, f.yMin = c.readShort(u, n), n += 2, f.xMax = c.readShort(u, n), n += 2, f.yMax = c.readShort(u, n), n += 2, f.macStyle = c.readUshort(u, n), n += 2, f.lowestRecPPEM = c.readUshort(u, n), n += 2, f.fontDirectionHint = c.readShort(u, n), n += 2, f.indexToLocFormat = c.readShort(u, n), n += 2, f.glyphDataFormat = c.readShort(u, n), n += 2, f;
    }, l.hhea = {}, l.hhea.parse = function(u, n, s) {
      var c = l._bin, f = {};
      return c.readFixed(u, n), n += 4, f.ascender = c.readShort(u, n), n += 2, f.descender = c.readShort(u, n), n += 2, f.lineGap = c.readShort(u, n), n += 2, f.advanceWidthMax = c.readUshort(u, n), n += 2, f.minLeftSideBearing = c.readShort(u, n), n += 2, f.minRightSideBearing = c.readShort(u, n), n += 2, f.xMaxExtent = c.readShort(u, n), n += 2, f.caretSlopeRise = c.readShort(u, n), n += 2, f.caretSlopeRun = c.readShort(u, n), n += 2, f.caretOffset = c.readShort(u, n), n += 2, n += 8, f.metricDataFormat = c.readShort(u, n), n += 2, f.numberOfHMetrics = c.readUshort(u, n), n += 2, f;
    }, l.hmtx = {}, l.hmtx.parse = function(u, n, s, c) {
      for (var f = l._bin, d = { aWidth: [], lsBearing: [] }, h = 0, y = 0, g = 0; g < c.maxp.numGlyphs; g++) g < c.hhea.numberOfHMetrics && (h = f.readUshort(u, n), n += 2, y = f.readShort(u, n), n += 2), d.aWidth.push(h), d.lsBearing.push(y);
      return d;
    }, l.kern = {}, l.kern.parse = function(u, n, s, c) {
      var f = l._bin, d = f.readUshort(u, n);
      if (n += 2, d == 1) return l.kern.parseV1(u, n - 2, s, c);
      var h = f.readUshort(u, n);
      n += 2;
      for (var y = { glyph1: [], rval: [] }, g = 0; g < h; g++) {
        n += 2, s = f.readUshort(u, n), n += 2;
        var E = f.readUshort(u, n);
        n += 2;
        var _ = E >>> 8;
        if ((_ &= 15) != 0) throw "unknown kern table format: " + _;
        n = l.kern.readFormat0(u, n, y);
      }
      return y;
    }, l.kern.parseV1 = function(u, n, s, c) {
      var f = l._bin;
      f.readFixed(u, n), n += 4;
      var d = f.readUint(u, n);
      n += 4;
      for (var h = { glyph1: [], rval: [] }, y = 0; y < d; y++) {
        f.readUint(u, n), n += 4;
        var g = f.readUshort(u, n);
        n += 2, f.readUshort(u, n), n += 2;
        var E = g >>> 8;
        if ((E &= 15) != 0) throw "unknown kern table format: " + E;
        n = l.kern.readFormat0(u, n, h);
      }
      return h;
    }, l.kern.readFormat0 = function(u, n, s) {
      var c = l._bin, f = -1, d = c.readUshort(u, n);
      n += 2, c.readUshort(u, n), n += 2, c.readUshort(u, n), n += 2, c.readUshort(u, n), n += 2;
      for (var h = 0; h < d; h++) {
        var y = c.readUshort(u, n);
        n += 2;
        var g = c.readUshort(u, n);
        n += 2;
        var E = c.readShort(u, n);
        n += 2, y != f && (s.glyph1.push(y), s.rval.push({ glyph2: [], vals: [] }));
        var _ = s.rval[s.rval.length - 1];
        _.glyph2.push(g), _.vals.push(E), f = y;
      }
      return n;
    }, l.loca = {}, l.loca.parse = function(u, n, s, c) {
      var f = l._bin, d = [], h = c.head.indexToLocFormat, y = c.maxp.numGlyphs + 1;
      if (h == 0) for (var g = 0; g < y; g++) d.push(f.readUshort(u, n + (g << 1)) << 1);
      if (h == 1) for (g = 0; g < y; g++) d.push(f.readUint(u, n + (g << 2)));
      return d;
    }, l.maxp = {}, l.maxp.parse = function(u, n, s) {
      var c = l._bin, f = {}, d = c.readUint(u, n);
      return n += 4, f.numGlyphs = c.readUshort(u, n), n += 2, d == 65536 && (f.maxPoints = c.readUshort(u, n), n += 2, f.maxContours = c.readUshort(u, n), n += 2, f.maxCompositePoints = c.readUshort(u, n), n += 2, f.maxCompositeContours = c.readUshort(u, n), n += 2, f.maxZones = c.readUshort(u, n), n += 2, f.maxTwilightPoints = c.readUshort(u, n), n += 2, f.maxStorage = c.readUshort(u, n), n += 2, f.maxFunctionDefs = c.readUshort(u, n), n += 2, f.maxInstructionDefs = c.readUshort(u, n), n += 2, f.maxStackElements = c.readUshort(u, n), n += 2, f.maxSizeOfInstructions = c.readUshort(u, n), n += 2, f.maxComponentElements = c.readUshort(u, n), n += 2, f.maxComponentDepth = c.readUshort(u, n), n += 2), f;
    }, l.name = {}, l.name.parse = function(u, n, s) {
      var c = l._bin, f = {};
      c.readUshort(u, n), n += 2;
      var d = c.readUshort(u, n);
      n += 2, c.readUshort(u, n);
      for (var h, y = ["copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette"], g = n += 2, E = 0; E < d; E++) {
        var _ = c.readUshort(u, n);
        n += 2;
        var A = c.readUshort(u, n);
        n += 2;
        var T = c.readUshort(u, n);
        n += 2;
        var M = c.readUshort(u, n);
        n += 2;
        var b = c.readUshort(u, n);
        n += 2;
        var z = c.readUshort(u, n);
        n += 2;
        var O, x = y[M], V = g + 12 * d + z;
        if (_ == 0) O = c.readUnicode(u, V, b / 2);
        else if (_ == 3 && A == 0) O = c.readUnicode(u, V, b / 2);
        else if (A == 0) O = c.readASCII(u, V, b);
        else if (A == 1) O = c.readUnicode(u, V, b / 2);
        else if (A == 3) O = c.readUnicode(u, V, b / 2);
        else {
          if (_ != 1) throw "unknown encoding " + A + ", platformID: " + _;
          O = c.readASCII(u, V, b), console.debug("reading unknown MAC encoding " + A + " as ASCII");
        }
        var j = "p" + _ + "," + T.toString(16);
        f[j] == null && (f[j] = {}), f[j][x !== void 0 ? x : M] = O, f[j]._lang = T;
      }
      for (var X in f) if (f[X].postScriptName != null && f[X]._lang == 1033) return f[X];
      for (var X in f) if (f[X].postScriptName != null && f[X]._lang == 0) return f[X];
      for (var X in f) if (f[X].postScriptName != null && f[X]._lang == 3084) return f[X];
      for (var X in f) if (f[X].postScriptName != null) return f[X];
      for (var X in f) {
        h = X;
        break;
      }
      return console.debug("returning name table with languageID " + f[h]._lang), f[h];
    }, l["OS/2"] = {}, l["OS/2"].parse = function(u, n, s) {
      var c = l._bin.readUshort(u, n);
      n += 2;
      var f = {};
      if (c == 0) l["OS/2"].version0(u, n, f);
      else if (c == 1) l["OS/2"].version1(u, n, f);
      else if (c == 2 || c == 3 || c == 4) l["OS/2"].version2(u, n, f);
      else {
        if (c != 5) throw "unknown OS/2 table version: " + c;
        l["OS/2"].version5(u, n, f);
      }
      return f;
    }, l["OS/2"].version0 = function(u, n, s) {
      var c = l._bin;
      return s.xAvgCharWidth = c.readShort(u, n), n += 2, s.usWeightClass = c.readUshort(u, n), n += 2, s.usWidthClass = c.readUshort(u, n), n += 2, s.fsType = c.readUshort(u, n), n += 2, s.ySubscriptXSize = c.readShort(u, n), n += 2, s.ySubscriptYSize = c.readShort(u, n), n += 2, s.ySubscriptXOffset = c.readShort(u, n), n += 2, s.ySubscriptYOffset = c.readShort(u, n), n += 2, s.ySuperscriptXSize = c.readShort(u, n), n += 2, s.ySuperscriptYSize = c.readShort(u, n), n += 2, s.ySuperscriptXOffset = c.readShort(u, n), n += 2, s.ySuperscriptYOffset = c.readShort(u, n), n += 2, s.yStrikeoutSize = c.readShort(u, n), n += 2, s.yStrikeoutPosition = c.readShort(u, n), n += 2, s.sFamilyClass = c.readShort(u, n), n += 2, s.panose = c.readBytes(u, n, 10), n += 10, s.ulUnicodeRange1 = c.readUint(u, n), n += 4, s.ulUnicodeRange2 = c.readUint(u, n), n += 4, s.ulUnicodeRange3 = c.readUint(u, n), n += 4, s.ulUnicodeRange4 = c.readUint(u, n), n += 4, s.achVendID = [c.readInt8(u, n), c.readInt8(u, n + 1), c.readInt8(u, n + 2), c.readInt8(u, n + 3)], n += 4, s.fsSelection = c.readUshort(u, n), n += 2, s.usFirstCharIndex = c.readUshort(u, n), n += 2, s.usLastCharIndex = c.readUshort(u, n), n += 2, s.sTypoAscender = c.readShort(u, n), n += 2, s.sTypoDescender = c.readShort(u, n), n += 2, s.sTypoLineGap = c.readShort(u, n), n += 2, s.usWinAscent = c.readUshort(u, n), n += 2, s.usWinDescent = c.readUshort(u, n), n += 2;
    }, l["OS/2"].version1 = function(u, n, s) {
      var c = l._bin;
      return n = l["OS/2"].version0(u, n, s), s.ulCodePageRange1 = c.readUint(u, n), n += 4, s.ulCodePageRange2 = c.readUint(u, n), n += 4;
    }, l["OS/2"].version2 = function(u, n, s) {
      var c = l._bin;
      return n = l["OS/2"].version1(u, n, s), s.sxHeight = c.readShort(u, n), n += 2, s.sCapHeight = c.readShort(u, n), n += 2, s.usDefault = c.readUshort(u, n), n += 2, s.usBreak = c.readUshort(u, n), n += 2, s.usMaxContext = c.readUshort(u, n), n += 2;
    }, l["OS/2"].version5 = function(u, n, s) {
      var c = l._bin;
      return n = l["OS/2"].version2(u, n, s), s.usLowerOpticalPointSize = c.readUshort(u, n), n += 2, s.usUpperOpticalPointSize = c.readUshort(u, n), n += 2;
    }, l.post = {}, l.post.parse = function(u, n, s) {
      var c = l._bin, f = {};
      return f.version = c.readFixed(u, n), n += 4, f.italicAngle = c.readFixed(u, n), n += 4, f.underlinePosition = c.readShort(u, n), n += 2, f.underlineThickness = c.readShort(u, n), n += 2, f;
    }, l == null && (l = {}), l.U == null && (l.U = {}), l.U.codeToGlyph = function(u, n) {
      var s = u.cmap, c = -1;
      if (s.p0e4 != null ? c = s.p0e4 : s.p3e1 != null ? c = s.p3e1 : s.p1e0 != null ? c = s.p1e0 : s.p0e3 != null && (c = s.p0e3), c == -1) throw "no familiar platform and encoding!";
      var f = s.tables[c];
      if (f.format == 0) return n >= f.map.length ? 0 : f.map[n];
      if (f.format == 4) {
        for (var d = -1, h = 0; h < f.endCount.length; h++) if (n <= f.endCount[h]) {
          d = h;
          break;
        }
        return d == -1 || f.startCount[d] > n ? 0 : 65535 & (f.idRangeOffset[d] != 0 ? f.glyphIdArray[n - f.startCount[d] + (f.idRangeOffset[d] >> 1) - (f.idRangeOffset.length - d)] : n + f.idDelta[d]);
      }
      if (f.format == 12) {
        if (n > f.groups[f.groups.length - 1][1]) return 0;
        for (h = 0; h < f.groups.length; h++) {
          var y = f.groups[h];
          if (y[0] <= n && n <= y[1]) return y[2] + (n - y[0]);
        }
        return 0;
      }
      throw "unknown cmap table format " + f.format;
    }, l.U.glyphToPath = function(u, n) {
      var s = { cmds: [], crds: [] };
      if (u.SVG && u.SVG.entries[n]) {
        var c = u.SVG.entries[n];
        return c == null ? s : (typeof c == "string" && (c = l.SVG.toPath(c), u.SVG.entries[n] = c), c);
      }
      if (u.CFF) {
        var f = { x: 0, y: 0, stack: [], nStems: 0, haveWidth: !1, width: u.CFF.Private ? u.CFF.Private.defaultWidthX : 0, open: !1 }, d = u.CFF, h = u.CFF.Private;
        if (d.ROS) {
          for (var y = 0; d.FDSelect[y + 2] <= n; ) y += 2;
          h = d.FDArray[d.FDSelect[y + 1]].Private;
        }
        l.U._drawCFF(u.CFF.CharStrings[n], f, d, h, s);
      } else u.glyf && l.U._drawGlyf(n, u, s);
      return s;
    }, l.U._drawGlyf = function(u, n, s) {
      var c = n.glyf[u];
      c == null && (c = n.glyf[u] = l.glyf._parseGlyf(n, u)), c != null && (c.noc > -1 ? l.U._simpleGlyph(c, s) : l.U._compoGlyph(c, n, s));
    }, l.U._simpleGlyph = function(u, n) {
      for (var s = 0; s < u.noc; s++) {
        for (var c = s == 0 ? 0 : u.endPts[s - 1] + 1, f = u.endPts[s], d = c; d <= f; d++) {
          var h = d == c ? f : d - 1, y = d == f ? c : d + 1, g = 1 & u.flags[d], E = 1 & u.flags[h], _ = 1 & u.flags[y], A = u.xs[d], T = u.ys[d];
          if (d == c) if (g) {
            if (!E) {
              l.U.P.moveTo(n, A, T);
              continue;
            }
            l.U.P.moveTo(n, u.xs[h], u.ys[h]);
          } else E ? l.U.P.moveTo(n, u.xs[h], u.ys[h]) : l.U.P.moveTo(n, (u.xs[h] + A) / 2, (u.ys[h] + T) / 2);
          g ? E && l.U.P.lineTo(n, A, T) : _ ? l.U.P.qcurveTo(n, A, T, u.xs[y], u.ys[y]) : l.U.P.qcurveTo(n, A, T, (A + u.xs[y]) / 2, (T + u.ys[y]) / 2);
        }
        l.U.P.closePath(n);
      }
    }, l.U._compoGlyph = function(u, n, s) {
      for (var c = 0; c < u.parts.length; c++) {
        var f = { cmds: [], crds: [] }, d = u.parts[c];
        l.U._drawGlyf(d.glyphIndex, n, f);
        for (var h = d.m, y = 0; y < f.crds.length; y += 2) {
          var g = f.crds[y], E = f.crds[y + 1];
          s.crds.push(g * h.a + E * h.b + h.tx), s.crds.push(g * h.c + E * h.d + h.ty);
        }
        for (y = 0; y < f.cmds.length; y++) s.cmds.push(f.cmds[y]);
      }
    }, l.U._getGlyphClass = function(u, n) {
      var s = l._lctf.getInterval(n, u);
      return s == -1 ? 0 : n[s + 2];
    }, l.U._applySubs = function(u, n, s, c) {
      for (var f = u.length - n - 1, d = 0; d < s.tabs.length; d++) if (s.tabs[d] != null) {
        var h, y = s.tabs[d];
        if (!y.coverage || (h = l._lctf.coverageIndex(y.coverage, u[n])) != -1) {
          if (s.ltype == 1) u[n], y.fmt == 1 ? u[n] = u[n] + y.delta : u[n] = y.newg[h];
          else if (s.ltype == 4) for (var g = y.vals[h], E = 0; E < g.length; E++) {
            var _ = g[E], A = _.chain.length;
            if (!(A > f)) {
              for (var T = !0, M = 0, b = 0; b < A; b++) {
                for (; u[n + M + (1 + b)] == -1; ) M++;
                _.chain[b] != u[n + M + (1 + b)] && (T = !1);
              }
              if (T) {
                for (u[n] = _.nglyph, b = 0; b < A + M; b++) u[n + b + 1] = -1;
                break;
              }
            }
          }
          else if (s.ltype == 5 && y.fmt == 2) for (var z = l._lctf.getInterval(y.cDef, u[n]), O = y.cDef[z + 2], x = y.scset[O], V = 0; V < x.length; V++) {
            var j = x[V], X = j.input;
            if (!(X.length > f)) {
              for (T = !0, b = 0; b < X.length; b++) {
                var k = l._lctf.getInterval(y.cDef, u[n + 1 + b]);
                if (z == -1 && y.cDef[k + 2] != X[b]) {
                  T = !1;
                  break;
                }
              }
              if (T) {
                var w = j.substLookupRecords;
                for (E = 0; E < w.length; E += 2) w[E], w[E + 1];
              }
            }
          }
          else if (s.ltype == 6 && y.fmt == 3) {
            if (!l.U._glsCovered(u, y.backCvg, n - y.backCvg.length) || !l.U._glsCovered(u, y.inptCvg, n) || !l.U._glsCovered(u, y.ahedCvg, n + y.inptCvg.length)) continue;
            var te = y.lookupRec;
            for (V = 0; V < te.length; V += 2) {
              z = te[V];
              var B = c[te[V + 1]];
              l.U._applySubs(u, n + z, B, c);
            }
          }
        }
      }
    }, l.U._glsCovered = function(u, n, s) {
      for (var c = 0; c < n.length; c++)
        if (l._lctf.coverageIndex(n[c], u[s + c]) == -1) return !1;
      return !0;
    }, l.U.glyphsToPath = function(u, n, s) {
      for (var c = { cmds: [], crds: [] }, f = 0, d = 0; d < n.length; d++) {
        var h = n[d];
        if (h != -1) {
          for (var y = d < n.length - 1 && n[d + 1] != -1 ? n[d + 1] : 0, g = l.U.glyphToPath(u, h), E = 0; E < g.crds.length; E += 2) c.crds.push(g.crds[E] + f), c.crds.push(g.crds[E + 1]);
          for (s && c.cmds.push(s), E = 0; E < g.cmds.length; E++) c.cmds.push(g.cmds[E]);
          s && c.cmds.push("X"), f += u.hmtx.aWidth[h], d < n.length - 1 && (f += l.U.getPairAdjustment(u, h, y));
        }
      }
      return c;
    }, l.U.P = {}, l.U.P.moveTo = function(u, n, s) {
      u.cmds.push("M"), u.crds.push(n, s);
    }, l.U.P.lineTo = function(u, n, s) {
      u.cmds.push("L"), u.crds.push(n, s);
    }, l.U.P.curveTo = function(u, n, s, c, f, d, h) {
      u.cmds.push("C"), u.crds.push(n, s, c, f, d, h);
    }, l.U.P.qcurveTo = function(u, n, s, c, f) {
      u.cmds.push("Q"), u.crds.push(n, s, c, f);
    }, l.U.P.closePath = function(u) {
      u.cmds.push("Z");
    }, l.U._drawCFF = function(u, n, s, c, f) {
      for (var d = n.stack, h = n.nStems, y = n.haveWidth, g = n.width, E = n.open, _ = 0, A = n.x, T = n.y, M = 0, b = 0, z = 0, O = 0, x = 0, V = 0, j = 0, X = 0, k = 0, w = 0, te = { val: 0, size: 0 }; _ < u.length; ) {
        l.CFF.getCharString(u, _, te);
        var B = te.val;
        if (_ += te.size, B == "o1" || B == "o18") d.length % 2 != 0 && !y && (g = d.shift() + c.nominalWidthX), h += d.length >> 1, d.length = 0, y = !0;
        else if (B == "o3" || B == "o23")
          d.length % 2 != 0 && !y && (g = d.shift() + c.nominalWidthX), h += d.length >> 1, d.length = 0, y = !0;
        else if (B == "o4") d.length > 1 && !y && (g = d.shift() + c.nominalWidthX, y = !0), E && l.U.P.closePath(f), T += d.pop(), l.U.P.moveTo(f, A, T), E = !0;
        else if (B == "o5") for (; d.length > 0; ) A += d.shift(), T += d.shift(), l.U.P.lineTo(f, A, T);
        else if (B == "o6" || B == "o7") for (var Q = d.length, Y = B == "o6", ne = 0; ne < Q; ne++) {
          var U = d.shift();
          Y ? A += U : T += U, Y = !Y, l.U.P.lineTo(f, A, T);
        }
        else if (B == "o8" || B == "o24") {
          Q = d.length;
          for (var F = 0; F + 6 <= Q; ) M = A + d.shift(), b = T + d.shift(), z = M + d.shift(), O = b + d.shift(), A = z + d.shift(), T = O + d.shift(), l.U.P.curveTo(f, M, b, z, O, A, T), F += 6;
          B == "o24" && (A += d.shift(), T += d.shift(), l.U.P.lineTo(f, A, T));
        } else {
          if (B == "o11") break;
          if (B == "o1234" || B == "o1235" || B == "o1236" || B == "o1237") B == "o1234" && (b = T, z = (M = A + d.shift()) + d.shift(), w = O = b + d.shift(), V = O, X = T, A = (j = (x = (k = z + d.shift()) + d.shift()) + d.shift()) + d.shift(), l.U.P.curveTo(f, M, b, z, O, k, w), l.U.P.curveTo(f, x, V, j, X, A, T)), B == "o1235" && (M = A + d.shift(), b = T + d.shift(), z = M + d.shift(), O = b + d.shift(), k = z + d.shift(), w = O + d.shift(), x = k + d.shift(), V = w + d.shift(), j = x + d.shift(), X = V + d.shift(), A = j + d.shift(), T = X + d.shift(), d.shift(), l.U.P.curveTo(f, M, b, z, O, k, w), l.U.P.curveTo(f, x, V, j, X, A, T)), B == "o1236" && (M = A + d.shift(), b = T + d.shift(), z = M + d.shift(), w = O = b + d.shift(), V = O, j = (x = (k = z + d.shift()) + d.shift()) + d.shift(), X = V + d.shift(), A = j + d.shift(), l.U.P.curveTo(f, M, b, z, O, k, w), l.U.P.curveTo(f, x, V, j, X, A, T)), B == "o1237" && (M = A + d.shift(), b = T + d.shift(), z = M + d.shift(), O = b + d.shift(), k = z + d.shift(), w = O + d.shift(), x = k + d.shift(), V = w + d.shift(), j = x + d.shift(), X = V + d.shift(), Math.abs(j - A) > Math.abs(X - T) ? A = j + d.shift() : T = X + d.shift(), l.U.P.curveTo(f, M, b, z, O, k, w), l.U.P.curveTo(f, x, V, j, X, A, T));
          else if (B == "o14") {
            if (d.length > 0 && !y && (g = d.shift() + s.nominalWidthX, y = !0), d.length == 4) {
              var W = d.shift(), H = d.shift(), q = d.shift(), C = d.shift(), R = l.CFF.glyphBySE(s, q), J = l.CFF.glyphBySE(s, C);
              l.U._drawCFF(s.CharStrings[R], n, s, c, f), n.x = W, n.y = H, l.U._drawCFF(s.CharStrings[J], n, s, c, f);
            }
            E && (l.U.P.closePath(f), E = !1);
          } else if (B == "o19" || B == "o20")
            d.length % 2 != 0 && !y && (g = d.shift() + c.nominalWidthX), h += d.length >> 1, d.length = 0, y = !0, _ += h + 7 >> 3;
          else if (B == "o21") d.length > 2 && !y && (g = d.shift() + c.nominalWidthX, y = !0), T += d.pop(), A += d.pop(), E && l.U.P.closePath(f), l.U.P.moveTo(f, A, T), E = !0;
          else if (B == "o22") d.length > 1 && !y && (g = d.shift() + c.nominalWidthX, y = !0), A += d.pop(), E && l.U.P.closePath(f), l.U.P.moveTo(f, A, T), E = !0;
          else if (B == "o25") {
            for (; d.length > 6; ) A += d.shift(), T += d.shift(), l.U.P.lineTo(f, A, T);
            M = A + d.shift(), b = T + d.shift(), z = M + d.shift(), O = b + d.shift(), A = z + d.shift(), T = O + d.shift(), l.U.P.curveTo(f, M, b, z, O, A, T);
          } else if (B == "o26") for (d.length % 2 && (A += d.shift()); d.length > 0; ) M = A, b = T + d.shift(), A = z = M + d.shift(), T = (O = b + d.shift()) + d.shift(), l.U.P.curveTo(f, M, b, z, O, A, T);
          else if (B == "o27") for (d.length % 2 && (T += d.shift()); d.length > 0; ) b = T, z = (M = A + d.shift()) + d.shift(), O = b + d.shift(), A = z + d.shift(), T = O, l.U.P.curveTo(f, M, b, z, O, A, T);
          else if (B == "o10" || B == "o29") {
            var L = B == "o10" ? c : s;
            if (d.length == 0) console.debug("error: empty stack");
            else {
              var K = d.pop(), le = L.Subrs[K + L.Bias];
              n.x = A, n.y = T, n.nStems = h, n.haveWidth = y, n.width = g, n.open = E, l.U._drawCFF(le, n, s, c, f), A = n.x, T = n.y, h = n.nStems, y = n.haveWidth, g = n.width, E = n.open;
            }
          } else if (B == "o30" || B == "o31") {
            var $ = d.length, ae = (F = 0, B == "o31");
            for (F += $ - (Q = -3 & $); F < Q; ) ae ? (b = T, z = (M = A + d.shift()) + d.shift(), T = (O = b + d.shift()) + d.shift(), Q - F == 5 ? (A = z + d.shift(), F++) : A = z, ae = !1) : (M = A, b = T + d.shift(), z = M + d.shift(), O = b + d.shift(), A = z + d.shift(), Q - F == 5 ? (T = O + d.shift(), F++) : T = O, ae = !0), l.U.P.curveTo(f, M, b, z, O, A, T), F += 4;
          } else {
            if ((B + "").charAt(0) == "o") throw console.debug("Unknown operation: " + B, u), B;
            d.push(B);
          }
        }
      }
      n.x = A, n.y = T, n.nStems = h, n.haveWidth = y, n.width = g, n.open = E;
    };
    var p = l, m = { Typr: p };
    return o.Typr = p, o.default = m, Object.defineProperty(o, "__esModule", { value: !0 }), o;
  }({}).Typr;
}
/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/
function Z1() {
  return function(o) {
    var l = Uint8Array, p = Uint16Array, m = Uint32Array, u = new l([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), n = new l([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), s = new l([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), c = function(B, Q) {
      for (var Y = new p(31), ne = 0; ne < 31; ++ne) Y[ne] = Q += 1 << B[ne - 1];
      var U = new m(Y[30]);
      for (ne = 1; ne < 30; ++ne) for (var F = Y[ne]; F < Y[ne + 1]; ++F) U[F] = F - Y[ne] << 5 | ne;
      return [Y, U];
    }, f = c(u, 2), d = f[0], h = f[1];
    d[28] = 258, h[258] = 28;
    for (var y = c(n, 0)[0], g = new p(32768), E = 0; E < 32768; ++E) {
      var _ = (43690 & E) >>> 1 | (21845 & E) << 1;
      _ = (61680 & (_ = (52428 & _) >>> 2 | (13107 & _) << 2)) >>> 4 | (3855 & _) << 4, g[E] = ((65280 & _) >>> 8 | (255 & _) << 8) >>> 1;
    }
    var A = function(B, Q, Y) {
      for (var ne = B.length, U = 0, F = new p(Q); U < ne; ++U) ++F[B[U] - 1];
      var W, H = new p(Q);
      for (U = 0; U < Q; ++U) H[U] = H[U - 1] + F[U - 1] << 1;
      {
        W = new p(1 << Q);
        var q = 15 - Q;
        for (U = 0; U < ne; ++U) if (B[U]) for (var C = U << 4 | B[U], R = Q - B[U], J = H[B[U] - 1]++ << R, L = J | (1 << R) - 1; J <= L; ++J) W[g[J] >>> q] = C;
      }
      return W;
    }, T = new l(288);
    for (E = 0; E < 144; ++E) T[E] = 8;
    for (E = 144; E < 256; ++E) T[E] = 9;
    for (E = 256; E < 280; ++E) T[E] = 7;
    for (E = 280; E < 288; ++E) T[E] = 8;
    var M = new l(32);
    for (E = 0; E < 32; ++E) M[E] = 5;
    var b = A(T, 9), z = A(M, 5), O = function(B) {
      for (var Q = B[0], Y = 1; Y < B.length; ++Y) B[Y] > Q && (Q = B[Y]);
      return Q;
    }, x = function(B, Q, Y) {
      var ne = Q / 8 | 0;
      return (B[ne] | B[ne + 1] << 8) >> (7 & Q) & Y;
    }, V = function(B, Q) {
      var Y = Q / 8 | 0;
      return (B[Y] | B[Y + 1] << 8 | B[Y + 2] << 16) >> (7 & Q);
    }, j = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], X = function(B, Q, Y) {
      var ne = new Error(Q || j[B]);
      if (ne.code = B, Error.captureStackTrace && Error.captureStackTrace(ne, X), !Y) throw ne;
      return ne;
    }, k = function(B, Q, Y) {
      var ne = B.length;
      if (!ne || Y && !Y.l && ne < 5) return Q || new l(0);
      var U = !Q || Y, F = !Y || Y.i;
      Y || (Y = {}), Q || (Q = new l(3 * ne));
      var W, H = function(Me) {
        var ft = Q.length;
        if (Me > ft) {
          var et = new l(Math.max(2 * ft, Me));
          et.set(Q), Q = et;
        }
      }, q = Y.f || 0, C = Y.p || 0, R = Y.b || 0, J = Y.l, L = Y.d, K = Y.m, le = Y.n, $ = 8 * ne;
      do {
        if (!J) {
          Y.f = q = x(B, C, 1);
          var ae = x(B, C + 1, 3);
          if (C += 3, !ae) {
            var se = B[(ve = ((W = C) / 8 | 0) + (7 & W && 1) + 4) - 4] | B[ve - 3] << 8, Se = ve + se;
            if (Se > ne) {
              F && X(0);
              break;
            }
            U && H(R + se), Q.set(B.subarray(ve, Se), R), Y.b = R += se, Y.p = C = 8 * Se;
            continue;
          }
          if (ae == 1) J = b, L = z, K = 9, le = 5;
          else if (ae == 2) {
            var oe = x(B, C, 31) + 257, ue = x(B, C + 10, 15) + 4, xe = oe + x(B, C + 5, 31) + 1;
            C += 14;
            for (var Ae = new l(xe), pe = new l(19), Ee = 0; Ee < ue; ++Ee) pe[s[Ee]] = x(B, C + 3 * Ee, 7);
            C += 3 * ue;
            var be = O(pe), fe = (1 << be) - 1, ge = A(pe, be);
            for (Ee = 0; Ee < xe; ) {
              var ve, ee = ge[x(B, C, fe)];
              if (C += 15 & ee, (ve = ee >>> 4) < 16) Ae[Ee++] = ve;
              else {
                var He = 0, me = 0;
                for (ve == 16 ? (me = 3 + x(B, C, 3), C += 2, He = Ae[Ee - 1]) : ve == 17 ? (me = 3 + x(B, C, 7), C += 3) : ve == 18 && (me = 11 + x(B, C, 127), C += 7); me--; ) Ae[Ee++] = He;
              }
            }
            var Ue = Ae.subarray(0, oe), de = Ae.subarray(oe);
            K = O(Ue), le = O(de), J = A(Ue, K), L = A(de, le);
          } else X(1);
          if (C > $) {
            F && X(0);
            break;
          }
        }
        U && H(R + 131072);
        for (var We = (1 << K) - 1, _e = (1 << le) - 1, Ce = C; ; Ce = C) {
          var Oe = (He = J[V(B, C) & We]) >>> 4;
          if ((C += 15 & He) > $) {
            F && X(0);
            break;
          }
          if (He || X(2), Oe < 256) Q[R++] = Oe;
          else {
            if (Oe == 256) {
              Ce = C, J = null;
              break;
            }
            var Ve = Oe - 254;
            if (Oe > 264) {
              var $e = u[Ee = Oe - 257];
              Ve = x(B, C, (1 << $e) - 1) + d[Ee], C += $e;
            }
            var ot = L[V(B, C) & _e], Be = ot >>> 4;
            if (ot || X(3), C += 15 & ot, de = y[Be], Be > 3 && ($e = n[Be], de += V(B, C) & (1 << $e) - 1, C += $e), C > $) {
              F && X(0);
              break;
            }
            U && H(R + 131072);
            for (var Ge = R + Ve; R < Ge; R += 4) Q[R] = Q[R - de], Q[R + 1] = Q[R + 1 - de], Q[R + 2] = Q[R + 2 - de], Q[R + 3] = Q[R + 3 - de];
            R = Ge;
          }
        }
        Y.l = J, Y.p = Ce, Y.b = R, J && (q = 1, Y.m = K, Y.d = L, Y.n = le);
      } while (!q);
      return R == Q.length ? Q : function(Me, ft, et) {
        (et == null || et > Me.length) && (et = Me.length);
        var Tt = new (Me instanceof p ? p : Me instanceof m ? m : l)(et - ft);
        return Tt.set(Me.subarray(ft, et)), Tt;
      }(Q, 0, R);
    }, w = new l(0), te = typeof TextDecoder < "u" && new TextDecoder();
    try {
      te.decode(w, { stream: !0 });
    } catch {
    }
    return o.convert_streams = function(B) {
      var Q = new DataView(B), Y = 0;
      function ne() {
        var oe = Q.getUint16(Y);
        return Y += 2, oe;
      }
      function U() {
        var oe = Q.getUint32(Y);
        return Y += 4, oe;
      }
      function F(oe) {
        se.setUint16(Se, oe), Se += 2;
      }
      function W(oe) {
        se.setUint32(Se, oe), Se += 4;
      }
      for (var H = { signature: U(), flavor: U(), length: U(), numTables: ne(), reserved: ne(), totalSfntSize: U(), majorVersion: ne(), minorVersion: ne(), metaOffset: U(), metaLength: U(), metaOrigLength: U(), privOffset: U(), privLength: U() }, q = 0; Math.pow(2, q) <= H.numTables; ) q++;
      q--;
      for (var C = 16 * Math.pow(2, q), R = 16 * H.numTables - C, J = 12, L = [], K = 0; K < H.numTables; K++) L.push({ tag: U(), offset: U(), compLength: U(), origLength: U(), origChecksum: U() }), J += 16;
      var le, $ = new Uint8Array(12 + 16 * L.length + L.reduce(function(oe, ue) {
        return oe + ue.origLength + 4;
      }, 0)), ae = $.buffer, se = new DataView(ae), Se = 0;
      return W(H.flavor), F(H.numTables), F(C), F(q), F(R), L.forEach(function(oe) {
        W(oe.tag), W(oe.origChecksum), W(J), W(oe.origLength), oe.outOffset = J, (J += oe.origLength) % 4 != 0 && (J += 4 - J % 4);
      }), L.forEach(function(oe) {
        var ue, xe = B.slice(oe.offset, oe.offset + oe.compLength);
        if (oe.compLength != oe.origLength) {
          var Ae = new Uint8Array(oe.origLength);
          ue = new Uint8Array(xe, 2), k(ue, Ae);
        } else Ae = new Uint8Array(xe);
        $.set(Ae, oe.outOffset);
        var pe = 0;
        (J = oe.outOffset + oe.origLength) % 4 != 0 && (pe = 4 - J % 4), $.set(new Uint8Array(pe).buffer, oe.outOffset + oe.origLength), le = J + pe;
      }), ae.slice(0, le);
    }, Object.defineProperty(o, "__esModule", { value: !0 }), o;
  }({}).convert_streams;
}
function w1(o, l) {
  const p = {
    M: 2,
    L: 2,
    Q: 4,
    C: 6,
    Z: 0
  }, m = { C: "18g,ca,368,1kz", D: "17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v", R: "17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6", L: "x9u,jff,a,fd,jv", T: "4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n" }, u = 1, n = 2, s = 4, c = 8, f = 16, d = 32;
  let h;
  function y(j) {
    if (!h) {
      const X = {
        R: n,
        L: u,
        D: s,
        C: f,
        U: d,
        T: c
      };
      h = /* @__PURE__ */ new Map();
      for (let k in m) {
        let w = 0;
        m[k].split(",").forEach((te) => {
          let [B, Q] = te.split("+");
          B = parseInt(B, 36), Q = Q ? parseInt(Q, 36) : 0, h.set(w += B, X[k]);
          for (let Y = Q; Y--; )
            h.set(++w, X[k]);
        });
      }
    }
    return h.get(j) || d;
  }
  const g = 1, E = 2, _ = 3, A = 4, T = [null, "isol", "init", "fina", "medi"];
  function M(j) {
    const X = new Uint8Array(j.length);
    let k = d, w = g, te = -1;
    for (let B = 0; B < j.length; B++) {
      const Q = j.codePointAt(B);
      let Y = y(Q) | 0, ne = g;
      Y & c || (k & (u | s | f) ? Y & (n | s | f) ? (ne = _, (w === g || w === _) && X[te]++) : Y & (u | d) && (w === E || w === A) && X[te]-- : k & (n | d) && (w === E || w === A) && X[te]--, w = X[B] = ne, k = Y, te = B, Q > 65535 && B++);
    }
    return X;
  }
  function b(j, X) {
    const k = [];
    for (let te = 0; te < X.length; te++) {
      const B = X.codePointAt(te);
      B > 65535 && te++, k.push(o.U.codeToGlyph(j, B));
    }
    const w = j.GSUB;
    if (w) {
      const { lookupList: te, featureList: B } = w;
      let Q;
      const Y = /^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/, ne = [];
      B.forEach((U) => {
        if (Y.test(U.tag))
          for (let F = 0; F < U.tab.length; F++) {
            if (ne[U.tab[F]]) continue;
            ne[U.tab[F]] = !0;
            const W = te[U.tab[F]], H = /^(isol|init|fina|medi)$/.test(U.tag);
            H && !Q && (Q = M(X));
            for (let q = 0; q < k.length; q++)
              (!Q || !H || T[Q[q]] === U.tag) && o.U._applySubs(k, q, W, te);
          }
      });
    }
    return k;
  }
  function z(j, X) {
    const k = new Int16Array(X.length * 3);
    let w = 0;
    for (; w < X.length; w++) {
      const Y = X[w];
      if (Y === -1) continue;
      k[w * 3 + 2] = j.hmtx.aWidth[Y];
      const ne = j.GPOS;
      if (ne) {
        const U = ne.lookupList;
        for (let F = 0; F < U.length; F++) {
          const W = U[F];
          for (let H = 0; H < W.tabs.length; H++) {
            const q = W.tabs[H];
            if (W.ltype === 1) {
              if (o._lctf.coverageIndex(q.coverage, Y) !== -1 && q.pos) {
                Q(q.pos, w);
                break;
              }
            } else if (W.ltype === 2) {
              let C = null, R = te();
              if (R !== -1) {
                const J = o._lctf.coverageIndex(q.coverage, X[R]);
                if (J !== -1) {
                  if (q.fmt === 1) {
                    const L = q.pairsets[J];
                    for (let K = 0; K < L.length; K++)
                      L[K].gid2 === Y && (C = L[K]);
                  } else if (q.fmt === 2) {
                    const L = o.U._getGlyphClass(X[R], q.classDef1), K = o.U._getGlyphClass(Y, q.classDef2);
                    C = q.matrix[L][K];
                  }
                  if (C) {
                    C.val1 && Q(C.val1, R), C.val2 && Q(C.val2, w);
                    break;
                  }
                }
              }
            } else if (W.ltype === 4) {
              const C = o._lctf.coverageIndex(q.markCoverage, Y);
              if (C !== -1) {
                const R = te(B), J = R === -1 ? -1 : o._lctf.coverageIndex(q.baseCoverage, X[R]);
                if (J !== -1) {
                  const L = q.markArray[C], K = q.baseArray[J][L.markClass];
                  k[w * 3] = K.x - L.x + k[R * 3] - k[R * 3 + 2], k[w * 3 + 1] = K.y - L.y + k[R * 3 + 1];
                  break;
                }
              }
            } else if (W.ltype === 6) {
              const C = o._lctf.coverageIndex(q.mark1Coverage, Y);
              if (C !== -1) {
                const R = te();
                if (R !== -1) {
                  const J = X[R];
                  if (O(j, J) === 3) {
                    const L = o._lctf.coverageIndex(q.mark2Coverage, J);
                    if (L !== -1) {
                      const K = q.mark1Array[C], le = q.mark2Array[L][K.markClass];
                      k[w * 3] = le.x - K.x + k[R * 3] - k[R * 3 + 2], k[w * 3 + 1] = le.y - K.y + k[R * 3 + 1];
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      } else if (j.kern && !j.cff) {
        const U = te();
        if (U !== -1) {
          const F = j.kern.glyph1.indexOf(X[U]);
          if (F !== -1) {
            const W = j.kern.rval[F].glyph2.indexOf(Y);
            W !== -1 && (k[U * 3 + 2] += j.kern.rval[F].vals[W]);
          }
        }
      }
    }
    return k;
    function te(Y) {
      for (let ne = w - 1; ne >= 0; ne--)
        if (X[ne] !== -1 && (!Y || Y(X[ne])))
          return ne;
      return -1;
    }
    function B(Y) {
      return O(j, Y) === 1;
    }
    function Q(Y, ne) {
      for (let U = 0; U < 3; U++)
        k[ne * 3 + U] += Y[U] || 0;
    }
  }
  function O(j, X) {
    const k = j.GDEF && j.GDEF.glyphClassDef;
    return k ? o.U._getGlyphClass(X, k) : 0;
  }
  function x(...j) {
    for (let X = 0; X < j.length; X++)
      if (typeof j[X] == "number")
        return j[X];
  }
  function V(j) {
    const X = /* @__PURE__ */ Object.create(null), k = j["OS/2"], w = j.hhea, te = j.head.unitsPerEm, B = x(k && k.sTypoAscender, w && w.ascender, te), Q = {
      unitsPerEm: te,
      ascender: B,
      descender: x(k && k.sTypoDescender, w && w.descender, 0),
      capHeight: x(k && k.sCapHeight, B),
      xHeight: x(k && k.sxHeight, B),
      lineGap: x(k && k.sTypoLineGap, w && w.lineGap),
      supportsCodePoint(Y) {
        return o.U.codeToGlyph(j, Y) > 0;
      },
      forEachGlyph(Y, ne, U, F) {
        let W = 0;
        const H = 1 / Q.unitsPerEm * ne, q = b(j, Y);
        let C = 0;
        const R = z(j, q);
        return q.forEach((J, L) => {
          if (J !== -1) {
            let K = X[J];
            if (!K) {
              const { cmds: le, crds: $ } = o.U.glyphToPath(j, J);
              let ae = "", se = 0;
              for (let Ae = 0, pe = le.length; Ae < pe; Ae++) {
                const Ee = p[le[Ae]];
                ae += le[Ae];
                for (let be = 1; be <= Ee; be++)
                  ae += (be > 1 ? "," : "") + $[se++];
              }
              let Se, oe, ue, xe;
              if ($.length) {
                Se = oe = 1 / 0, ue = xe = -1 / 0;
                for (let Ae = 0, pe = $.length; Ae < pe; Ae += 2) {
                  let Ee = $[Ae], be = $[Ae + 1];
                  Ee < Se && (Se = Ee), be < oe && (oe = be), Ee > ue && (ue = Ee), be > xe && (xe = be);
                }
              } else
                Se = ue = oe = xe = 0;
              K = X[J] = {
                index: J,
                advanceWidth: j.hmtx.aWidth[J],
                xMin: Se,
                yMin: oe,
                xMax: ue,
                yMax: xe,
                path: ae
              };
            }
            F.call(
              null,
              K,
              W + R[L * 3] * H,
              R[L * 3 + 1] * H,
              C
            ), W += R[L * 3 + 2] * H, U && (W += U * ne);
          }
          C += Y.codePointAt(C) > 65535 ? 2 : 1;
        }), W;
      }
    };
    return Q;
  }
  return function(X) {
    const k = new Uint8Array(X, 0, 4), w = o._bin.readASCII(k, 0, 4);
    if (w === "wOFF")
      X = l(X);
    else if (w === "wOF2")
      throw new Error("woff2 fonts not supported");
    return V(o.parse(X)[0]);
  };
}
const J1 = /* @__PURE__ */ lu({
  name: "Typr Font Parser",
  dependencies: [K1, Z1, w1],
  init(o, l, p) {
    const m = o(), u = l();
    return p(m, u);
  }
});
/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/
function W1() {
  return function(o) {
    var l = function() {
      this.buckets = /* @__PURE__ */ new Map();
    };
    l.prototype.add = function(z) {
      var O = z >> 5;
      this.buckets.set(O, (this.buckets.get(O) || 0) | 1 << (31 & z));
    }, l.prototype.has = function(z) {
      var O = this.buckets.get(z >> 5);
      return O !== void 0 && (O & 1 << (31 & z)) != 0;
    }, l.prototype.serialize = function() {
      var z = [];
      return this.buckets.forEach(function(O, x) {
        z.push((+x).toString(36) + ":" + O.toString(36));
      }), z.join(",");
    }, l.prototype.deserialize = function(z) {
      var O = this;
      this.buckets.clear(), z.split(",").forEach(function(x) {
        var V = x.split(":");
        O.buckets.set(parseInt(V[0], 36), parseInt(V[1], 36));
      });
    };
    var p = Math.pow(2, 8), m = p - 1, u = ~m;
    function n(z) {
      var O = function(V) {
        return V & u;
      }(z).toString(16), x = function(V) {
        return (V & u) + p - 1;
      }(z).toString(16);
      return "codepoint-index/plane" + (z >> 16) + "/" + O + "-" + x + ".json";
    }
    function s(z, O) {
      var x = z & m, V = O.codePointAt(x / 6 | 0);
      return ((V = (V || 48) - 48) & 1 << x % 6) != 0;
    }
    function c(z, O) {
      var x;
      (x = z, x.replace(/U\+/gi, "").replace(/^,+|,+$/g, "").split(/,+/).map(function(V) {
        return V.split("-").map(function(j) {
          return parseInt(j.trim(), 16);
        });
      })).forEach(function(V) {
        var j = V[0], X = V[1];
        X === void 0 && (X = j), O(j, X);
      });
    }
    function f(z, O) {
      c(z, function(x, V) {
        for (var j = x; j <= V; j++) O(j);
      });
    }
    var d = {}, h = {}, y = /* @__PURE__ */ new WeakMap(), g = "https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";
    function E(z) {
      var O = y.get(z);
      return O || (O = new l(), f(z.ranges, function(x) {
        return O.add(x);
      }), y.set(z, O)), O;
    }
    var _, A = /* @__PURE__ */ new Map();
    function T(z, O, x) {
      return z[O] ? O : z[x] ? x : function(V) {
        for (var j in V) return j;
      }(z);
    }
    function M(z, O) {
      var x = O;
      if (!z.includes(x)) {
        x = 1 / 0;
        for (var V = 0; V < z.length; V++) Math.abs(z[V] - O) < Math.abs(x - O) && (x = z[V]);
      }
      return x;
    }
    function b(z) {
      return _ || (_ = /* @__PURE__ */ new Set(), f("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000", function(O) {
        _.add(O);
      })), _.has(z);
    }
    return o.CodePointSet = l, o.clearCache = function() {
      d = {}, h = {};
    }, o.getFontsForString = function(z, O) {
      O === void 0 && (O = {});
      var x, V = O.lang;
      V === void 0 && (V = new RegExp("\\p{Script=Hangul}", "u").test(x = z) ? "ko" : new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}", "u").test(x) ? "ja" : "en");
      var j = O.category;
      j === void 0 && (j = "sans-serif");
      var X = O.style;
      X === void 0 && (X = "normal");
      var k = O.weight;
      k === void 0 && (k = 400);
      var w = (O.dataUrl || g).replace(/\/$/g, ""), te = /* @__PURE__ */ new Map(), B = new Uint8Array(z.length), Q = {}, Y = {}, ne = new Array(z.length), U = /* @__PURE__ */ new Map(), F = !1;
      function W(C) {
        var R = A.get(C);
        return R || (R = fetch(w + "/" + C).then(function(J) {
          if (!J.ok) throw new Error(J.statusText);
          return J.json().then(function(L) {
            if (!Array.isArray(L) || L[0] !== 1) throw new Error("Incorrect schema version; need 1, got " + L[0]);
            return L[1];
          });
        }).catch(function(J) {
          if (w !== g) return F || (console.error('unicode-font-resolver: Failed loading from dataUrl "' + w + '", trying default CDN. ' + J.message), F = !0), w = g, A.delete(C), W(C);
          throw J;
        }), A.set(C, R)), R;
      }
      for (var H = function(C) {
        var R = z.codePointAt(C), J = n(R);
        ne[C] = J, d[J] || U.has(J) || U.set(J, W(J).then(function(L) {
          d[J] = L;
        })), R > 65535 && (C++, q = C);
      }, q = 0; q < z.length; q++) H(q);
      return Promise.all(U.values()).then(function() {
        U.clear();
        for (var C = function(J) {
          var L = z.codePointAt(J), K = null, le = d[ne[J]], $ = void 0;
          for (var ae in le) {
            var se = Y[ae];
            if (se === void 0 && (se = Y[ae] = new RegExp(ae).test(V || "en")), se) {
              for (var Se in $ = ae, le[ae]) if (s(L, le[ae][Se])) {
                K = Se;
                break;
              }
              break;
            }
          }
          if (!K) {
            e: for (var oe in le) if (oe !== $) {
              for (var ue in le[oe]) if (s(L, le[oe][ue])) {
                K = ue;
                break e;
              }
            }
          }
          K || (console.debug("No font coverage for U+" + L.toString(16)), K = "latin"), ne[J] = K, h[K] || U.has(K) || U.set(K, W("font-meta/" + K + ".json").then(function(xe) {
            h[K] = xe;
          })), L > 65535 && (J++, R = J);
        }, R = 0; R < z.length; R++) C(R);
        return Promise.all(U.values());
      }).then(function() {
        for (var C, R = null, J = 0; J < z.length; J++) {
          var L = z.codePointAt(J);
          if (R && (b(L) || E(R).has(L))) B[J] = B[J - 1];
          else {
            R = h[ne[J]];
            var K = Q[R.id];
            if (!K) {
              var le = R.typeforms, $ = T(le, j, "sans-serif"), ae = T(le[$], X, "normal"), se = M((C = le[$]) === null || C === void 0 ? void 0 : C[ae], k);
              K = Q[R.id] = w + "/font-files/" + R.id + "/" + $ + "." + ae + "." + se + ".woff";
            }
            var Se = te.get(K);
            Se == null && (Se = te.size, te.set(K, Se)), B[J] = Se;
          }
          L > 65535 && (J++, B[J] = B[J - 1]);
        }
        return { fontUrls: Array.from(te.keys()), chars: B };
      });
    }, Object.defineProperty(o, "__esModule", { value: !0 }), o;
  }({});
}
function P1(o, l) {
  const p = /* @__PURE__ */ Object.create(null), m = /* @__PURE__ */ Object.create(null);
  function u(s, c) {
    const f = (d) => {
      console.error(`Failure loading font ${s}`, d);
    };
    try {
      const d = new XMLHttpRequest();
      d.open("get", s, !0), d.responseType = "arraybuffer", d.onload = function() {
        if (d.status >= 400)
          f(new Error(d.statusText));
        else if (d.status > 0)
          try {
            const h = o(d.response);
            h.src = s, c(h);
          } catch (h) {
            f(h);
          }
      }, d.onerror = f, d.send();
    } catch (d) {
      f(d);
    }
  }
  function n(s, c) {
    let f = p[s];
    f ? c(f) : m[s] ? m[s].push(c) : (m[s] = [c], u(s, (d) => {
      d.src = s, p[s] = d, m[s].forEach((h) => h(d)), delete m[s];
    }));
  }
  return function(s, c, {
    lang: f,
    fonts: d = [],
    style: h = "normal",
    weight: y = "normal",
    unicodeFontsURL: g
  } = {}) {
    const E = new Uint8Array(s.length), _ = [];
    s.length || b();
    const A = /* @__PURE__ */ new Map(), T = [];
    if (h !== "italic" && (h = "normal"), typeof y != "number" && (y = y === "bold" ? 700 : 400), d && !Array.isArray(d) && (d = [d]), d = d.slice().filter((O) => !O.lang || O.lang.test(f)).reverse(), d.length) {
      let j = 0;
      (function X(k = 0) {
        for (let w = k, te = s.length; w < te; w++) {
          const B = s.codePointAt(w);
          if (j === 1 && _[E[w - 1]].supportsCodePoint(B) || w > 0 && /\s/.test(s[w]))
            E[w] = E[w - 1], j === 2 && (T[T.length - 1][1] = w);
          else
            for (let Q = E[w], Y = d.length; Q <= Y; Q++)
              if (Q === Y) {
                const ne = j === 2 ? T[T.length - 1] : T[T.length] = [w, w];
                ne[1] = w, j = 2;
              } else {
                E[w] = Q;
                const { src: ne, unicodeRange: U } = d[Q];
                if (!U || z(B, U)) {
                  const F = p[ne];
                  if (!F) {
                    n(ne, () => {
                      X(w);
                    });
                    return;
                  }
                  if (F.supportsCodePoint(B)) {
                    let W = A.get(F);
                    typeof W != "number" && (W = _.length, _.push(F), A.set(F, W)), E[w] = W, j = 1;
                    break;
                  }
                }
              }
          B > 65535 && w + 1 < te && (E[w + 1] = E[w], w++, j === 2 && (T[T.length - 1][1] = w));
        }
        M();
      })();
    } else
      T.push([0, s.length - 1]), M();
    function M() {
      if (T.length) {
        const O = T.map((x) => s.substring(x[0], x[1] + 1)).join(`
`);
        l.getFontsForString(O, {
          lang: f || void 0,
          style: h,
          weight: y,
          dataUrl: g
        }).then(({ fontUrls: x, chars: V }) => {
          const j = _.length;
          let X = 0;
          T.forEach((w) => {
            for (let te = 0, B = w[1] - w[0]; te <= B; te++)
              E[w[0] + te] = V[X++] + j;
            X++;
          });
          let k = 0;
          x.forEach((w, te) => {
            n(w, (B) => {
              _[te + j] = B, ++k === x.length && b();
            });
          });
        });
      } else
        b();
    }
    function b() {
      c({
        chars: E,
        fonts: _
      });
    }
    function z(O, x) {
      for (let V = 0; V < x.length; V++) {
        const [j, X = j] = x[V];
        if (j <= O && O <= X)
          return !0;
      }
      return !1;
    }
  };
}
const k1 = /* @__PURE__ */ lu({
  name: "FontResolver",
  dependencies: [
    P1,
    J1,
    W1
  ],
  init(o, l, p) {
    return o(l, p());
  }
});
function I1(o, l) {
  const m = /[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/, u = "[^\\S\\u00A0]", n = new RegExp(`${u}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);
  function s({ text: _, lang: A, fonts: T, style: M, weight: b, preResolvedFonts: z, unicodeFontsURL: O }, x) {
    const V = ({ chars: j, fonts: X }) => {
      let k, w;
      const te = [];
      for (let B = 0; B < j.length; B++)
        j[B] !== w ? (w = j[B], te.push(k = { start: B, end: B, fontObj: X[j[B]] })) : k.end = B;
      x(te);
    };
    z ? V(z) : o(
      _,
      V,
      { lang: A, fonts: T, style: M, weight: b, unicodeFontsURL: O }
    );
  }
  function c({
    text: _ = "",
    font: A,
    lang: T,
    sdfGlyphSize: M = 64,
    fontSize: b = 400,
    fontWeight: z = 1,
    fontStyle: O = "normal",
    letterSpacing: x = 0,
    lineHeight: V = "normal",
    maxWidth: j = 1 / 0,
    direction: X,
    textAlign: k = "left",
    textIndent: w = 0,
    whiteSpace: te = "normal",
    overflowWrap: B = "normal",
    anchorX: Q = 0,
    anchorY: Y = 0,
    metricsOnly: ne = !1,
    unicodeFontsURL: U,
    preResolvedFonts: F = null,
    includeCaretPositions: W = !1,
    chunkedBoundsSize: H = 8192,
    colorRanges: q = null
  }, C) {
    const R = y(), J = { fontLoad: 0, typesetting: 0 };
    _.indexOf("\r") > -1 && (console.info("Typesetter: got text with \\r chars; normalizing to \\n"), _ = _.replace(/\r\n/g, `
`).replace(/\r/g, `
`)), b = +b, x = +x, j = +j, V = V || "normal", w = +w, s({
      text: _,
      lang: T,
      style: O,
      weight: z,
      fonts: typeof A == "string" ? [{ src: A }] : A,
      unicodeFontsURL: U,
      preResolvedFonts: F
    }, (L) => {
      J.fontLoad = y() - R;
      const K = isFinite(j);
      let le = null, $ = null, ae = null, se = null, Se = null, oe = null, ue = null, xe = null, Ae = 0, pe = 0, Ee = te !== "nowrap";
      const be = /* @__PURE__ */ new Map(), fe = y();
      let ge = w, ve = 0, ee = new g();
      const He = [ee];
      L.forEach((_e) => {
        const { fontObj: Ce } = _e, { ascender: Oe, descender: Ve, unitsPerEm: $e, lineGap: ot, capHeight: Be, xHeight: Ge } = Ce;
        let Me = be.get(Ce);
        if (!Me) {
          const Re = b / $e, Ze = V === "normal" ? (Oe - Ve + ot) * Re : V * b, Ta = (Ze - (Oe - Ve) * Re) / 2, Je = Math.min(Ze, (Oe - Ve) * Re), Xe = (Oe + Ve) / 2 * Re + Je / 2;
          Me = {
            index: be.size,
            src: Ce.src,
            fontObj: Ce,
            fontSizeMult: Re,
            unitsPerEm: $e,
            ascender: Oe * Re,
            descender: Ve * Re,
            capHeight: Be * Re,
            xHeight: Ge * Re,
            lineHeight: Ze,
            baseline: -Ta - Oe * Re,
            // baseline offset from top of line height
            // cap: -halfLeading - capHeight * fontSizeMult, // cap from top of line height
            // ex: -halfLeading - xHeight * fontSizeMult, // ex from top of line height
            caretTop: Xe,
            caretBottom: Xe - Je
          }, be.set(Ce, Me);
        }
        const { fontSizeMult: ft } = Me, et = _.slice(_e.start, _e.end + 1);
        let Tt, tt;
        Ce.forEachGlyph(et, b, x, (Re, Ze, Ta, Je) => {
          Ze += ve, Je += _e.start, Tt = Ze, tt = Re;
          const Xe = _.charAt(Je), mt = Re.advanceWidth * ft, at = ee.count;
          let ze;
          if ("isEmpty" in Re || (Re.isWhitespace = !!Xe && new RegExp(u).test(Xe), Re.canBreakAfter = !!Xe && n.test(Xe), Re.isEmpty = Re.xMin === Re.xMax || Re.yMin === Re.yMax || m.test(Xe)), !Re.isWhitespace && !Re.isEmpty && pe++, Ee && K && !Re.isWhitespace && Ze + mt + ge > j && at) {
            if (ee.glyphAt(at - 1).glyphObj.canBreakAfter)
              ze = new g(), ge = -Ze;
            else
              for (let Nt = at; Nt--; )
                if (Nt === 0 && B === "break-word") {
                  ze = new g(), ge = -Ze;
                  break;
                } else if (ee.glyphAt(Nt).glyphObj.canBreakAfter) {
                  ze = ee.splitAt(Nt + 1);
                  const At = ze.glyphAt(0).x;
                  ge -= At;
                  for (let gt = ze.count; gt--; )
                    ze.glyphAt(gt).x -= At;
                  break;
                }
            ze && (ee.isSoftWrapped = !0, ee = ze, He.push(ee), Ae = j);
          }
          let nt = ee.glyphAt(ee.count);
          nt.glyphObj = Re, nt.x = Ze + ge, nt.y = Ta, nt.width = mt, nt.charIndex = Je, nt.fontData = Me, Xe === `
` && (ee = new g(), He.push(ee), ge = -(Ze + mt + x * b) + w);
        }), ve = Tt + tt.advanceWidth * ft + x * b;
      });
      let me = 0;
      He.forEach((_e) => {
        let Ce = !0;
        for (let Oe = _e.count; Oe--; ) {
          const Ve = _e.glyphAt(Oe);
          Ce && !Ve.glyphObj.isWhitespace && (_e.width = Ve.x + Ve.width, _e.width > Ae && (Ae = _e.width), Ce = !1);
          let { lineHeight: $e, capHeight: ot, xHeight: Be, baseline: Ge } = Ve.fontData;
          $e > _e.lineHeight && (_e.lineHeight = $e);
          const Me = Ge - _e.baseline;
          Me < 0 && (_e.baseline += Me, _e.cap += Me, _e.ex += Me), _e.cap = Math.max(_e.cap, _e.baseline + ot), _e.ex = Math.max(_e.ex, _e.baseline + Be);
        }
        _e.baseline -= me, _e.cap -= me, _e.ex -= me, me += _e.lineHeight;
      });
      let Ue = 0, de = 0;
      if (Q && (typeof Q == "number" ? Ue = -Q : typeof Q == "string" && (Ue = -Ae * (Q === "left" ? 0 : Q === "center" ? 0.5 : Q === "right" ? 1 : d(Q)))), Y && (typeof Y == "number" ? de = -Y : typeof Y == "string" && (de = Y === "top" ? 0 : Y === "top-baseline" ? -He[0].baseline : Y === "top-cap" ? -He[0].cap : Y === "top-ex" ? -He[0].ex : Y === "middle" ? me / 2 : Y === "bottom" ? me : Y === "bottom-baseline" ? -He[He.length - 1].baseline : d(Y) * me)), !ne) {
        const _e = l.getEmbeddingLevels(_, X);
        le = new Uint16Array(pe), $ = new Uint8Array(pe), ae = new Float32Array(pe * 2), se = {}, ue = [1 / 0, 1 / 0, -1 / 0, -1 / 0], xe = [], W && (oe = new Float32Array(_.length * 4)), q && (Se = new Uint8Array(pe * 3));
        let Ce = 0, Oe = -1, Ve = -1, $e, ot;
        if (He.forEach((Be, Ge) => {
          let { count: Me, width: ft } = Be;
          if (Me > 0) {
            let et = 0;
            for (let Je = Me; Je-- && Be.glyphAt(Je).glyphObj.isWhitespace; )
              et++;
            let Tt = 0, tt = 0;
            if (k === "center")
              Tt = (Ae - ft) / 2;
            else if (k === "right")
              Tt = Ae - ft;
            else if (k === "justify" && Be.isSoftWrapped) {
              let Je = 0;
              for (let Xe = Me - et; Xe--; )
                Be.glyphAt(Xe).glyphObj.isWhitespace && Je++;
              tt = (Ae - ft) / Je;
            }
            if (tt || Tt) {
              let Je = 0;
              for (let Xe = 0; Xe < Me; Xe++) {
                let mt = Be.glyphAt(Xe);
                const at = mt.glyphObj;
                mt.x += Tt + Je, tt !== 0 && at.isWhitespace && Xe < Me - et && (Je += tt, mt.width += tt);
              }
            }
            const Re = l.getReorderSegments(
              _,
              _e,
              Be.glyphAt(0).charIndex,
              Be.glyphAt(Be.count - 1).charIndex
            );
            for (let Je = 0; Je < Re.length; Je++) {
              const [Xe, mt] = Re[Je];
              let at = 1 / 0, ze = -1 / 0;
              for (let nt = 0; nt < Me; nt++)
                if (Be.glyphAt(nt).charIndex >= Xe) {
                  let Nt = nt, At = nt;
                  for (; At < Me; At++) {
                    let gt = Be.glyphAt(At);
                    if (gt.charIndex > mt)
                      break;
                    At < Me - et && (at = Math.min(at, gt.x), ze = Math.max(ze, gt.x + gt.width));
                  }
                  for (let gt = Nt; gt < At; gt++) {
                    const Zt = Be.glyphAt(gt);
                    Zt.x = ze - (Zt.x + Zt.width - at);
                  }
                  break;
                }
            }
            let Ze;
            const Ta = (Je) => Ze = Je;
            for (let Je = 0; Je < Me; Je++) {
              const Xe = Be.glyphAt(Je);
              Ze = Xe.glyphObj;
              const mt = Ze.index, at = _e.levels[Xe.charIndex] & 1;
              if (at) {
                const ze = l.getMirroredCharacter(_[Xe.charIndex]);
                ze && Xe.fontData.fontObj.forEachGlyph(ze, 0, 0, Ta);
              }
              if (W) {
                const { charIndex: ze, fontData: nt } = Xe, Nt = Xe.x + Ue, At = Xe.x + Xe.width + Ue;
                oe[ze * 4] = at ? At : Nt, oe[ze * 4 + 1] = at ? Nt : At, oe[ze * 4 + 2] = Be.baseline + nt.caretBottom + de, oe[ze * 4 + 3] = Be.baseline + nt.caretTop + de;
                const gt = ze - Oe;
                gt > 1 && h(oe, Oe, gt), Oe = ze;
              }
              if (q) {
                const { charIndex: ze } = Xe;
                for (; ze > Ve; )
                  Ve++, q.hasOwnProperty(Ve) && (ot = q[Ve]);
              }
              if (!Ze.isWhitespace && !Ze.isEmpty) {
                const ze = Ce++, { fontSizeMult: nt, src: Nt, index: At } = Xe.fontData, gt = se[Nt] || (se[Nt] = {});
                gt[mt] || (gt[mt] = {
                  path: Ze.path,
                  pathBounds: [Ze.xMin, Ze.yMin, Ze.xMax, Ze.yMax]
                });
                const Zt = Xe.x + Ue, sa = Xe.y + Be.baseline + de;
                ae[ze * 2] = Zt, ae[ze * 2 + 1] = sa;
                const xt = Zt + Ze.xMin * nt, Ua = sa + Ze.yMin * nt, qt = Zt + Ze.xMax * nt, Ot = sa + Ze.yMax * nt;
                xt < ue[0] && (ue[0] = xt), Ua < ue[1] && (ue[1] = Ua), qt > ue[2] && (ue[2] = qt), Ot > ue[3] && (ue[3] = Ot), ze % H === 0 && ($e = { start: ze, end: ze, rect: [1 / 0, 1 / 0, -1 / 0, -1 / 0] }, xe.push($e)), $e.end++;
                const Ut = $e.rect;
                if (xt < Ut[0] && (Ut[0] = xt), Ua < Ut[1] && (Ut[1] = Ua), qt > Ut[2] && (Ut[2] = qt), Ot > Ut[3] && (Ut[3] = Ot), le[ze] = mt, $[ze] = At, q) {
                  const lt = ze * 3;
                  Se[lt] = ot >> 16 & 255, Se[lt + 1] = ot >> 8 & 255, Se[lt + 2] = ot & 255;
                }
              }
            }
          }
        }), oe) {
          const Be = _.length - Oe;
          Be > 1 && h(oe, Oe, Be);
        }
      }
      const We = [];
      be.forEach(({ index: _e, src: Ce, unitsPerEm: Oe, ascender: Ve, descender: $e, lineHeight: ot, capHeight: Be, xHeight: Ge }) => {
        We[_e] = { src: Ce, unitsPerEm: Oe, ascender: Ve, descender: $e, lineHeight: ot, capHeight: Be, xHeight: Ge };
      }), J.typesetting = y() - fe, C({
        glyphIds: le,
        //id for each glyph, specific to that glyph's font
        glyphFontIndices: $,
        //index into fontData for each glyph
        glyphPositions: ae,
        //x,y of each glyph's origin in layout
        glyphData: se,
        //dict holding data about each glyph appearing in the text
        fontData: We,
        //data about each font used in the text
        caretPositions: oe,
        //startX,endX,bottomY caret positions for each char
        // caretHeight, //height of cursor from bottom to top - todo per glyph?
        glyphColors: Se,
        //color for each glyph, if color ranges supplied
        chunkedBounds: xe,
        //total rects per (n=chunkedBoundsSize) consecutive glyphs
        fontSize: b,
        //calculated em height
        topBaseline: de + He[0].baseline,
        //y coordinate of the top line's baseline
        blockBounds: [
          //bounds for the whole block of text, including vertical padding for lineHeight
          Ue,
          de - me,
          Ue + Ae,
          de
        ],
        visibleBounds: ue,
        //total bounds of visible text paths, may be larger or smaller than blockBounds
        timings: J
      });
    });
  }
  function f(_, A) {
    c({ ..._, metricsOnly: !0 }, (T) => {
      const [M, b, z, O] = T.blockBounds;
      A({
        width: z - M,
        height: O - b
      });
    });
  }
  function d(_) {
    let A = _.match(/^([\d.]+)%$/), T = A ? parseFloat(A[1]) : NaN;
    return isNaN(T) ? 0 : T / 100;
  }
  function h(_, A, T) {
    const M = _[A * 4], b = _[A * 4 + 1], z = _[A * 4 + 2], O = _[A * 4 + 3], x = (b - M) / T;
    for (let V = 0; V < T; V++) {
      const j = (A + V) * 4;
      _[j] = M + x * V, _[j + 1] = M + x * (V + 1), _[j + 2] = z, _[j + 3] = O;
    }
  }
  function y() {
    return (self.performance || Date).now();
  }
  function g() {
    this.data = [];
  }
  const E = ["glyphObj", "x", "y", "width", "charIndex", "fontData"];
  return g.prototype = {
    width: 0,
    lineHeight: 0,
    baseline: 0,
    cap: 0,
    ex: 0,
    isSoftWrapped: !1,
    get count() {
      return Math.ceil(this.data.length / E.length);
    },
    glyphAt(_) {
      let A = g.flyweight;
      return A.data = this.data, A.index = _, A;
    },
    splitAt(_) {
      let A = new g();
      return A.data = this.data.splice(_ * E.length), A;
    }
  }, g.flyweight = E.reduce((_, A, T, M) => (Object.defineProperty(_, A, {
    get() {
      return this.data[this.index * E.length + T];
    },
    set(b) {
      this.data[this.index * E.length + T] = b;
    }
  }), _), { data: null, index: 0 }), {
    typeset: c,
    measure: f
  };
}
const dl = () => (self.performance || Date).now(), Zi = /* @__PURE__ */ Fs();
let rs;
function $1(o, l, p, m, u, n, s, c, f, d, h = !0) {
  return h ? t0(o, l, p, m, u, n, s, c, f, d).then(
    null,
    (y) => (rs || (console.warn("WebGL SDF generation failed, falling back to JS", y), rs = !0), fs(o, l, p, m, u, n, s, c, f, d))
  ) : fs(o, l, p, m, u, n, s, c, f, d);
}
const Vi = [], e0 = 5;
let Lo = 0;
function Zs() {
  const o = dl();
  for (; Vi.length && dl() - o < e0; )
    Vi.shift()();
  Lo = Vi.length ? setTimeout(Zs, 0) : 0;
}
const t0 = (...o) => new Promise((l, p) => {
  Vi.push(() => {
    const m = dl();
    try {
      Zi.webgl.generateIntoCanvas(...o), l({ timing: dl() - m });
    } catch (u) {
      p(u);
    }
  }), Lo || (Lo = setTimeout(Zs, 0));
}), a0 = 4, n0 = 2e3, os = {};
let l0 = 0;
function fs(o, l, p, m, u, n, s, c, f, d) {
  const h = "TroikaTextSDFGenerator_JS_" + l0++ % a0;
  let y = os[h];
  return y || (y = os[h] = {
    workerModule: lu({
      name: h,
      workerId: h,
      dependencies: [
        Fs,
        dl
      ],
      init(g, E) {
        const _ = g().javascript.generate;
        return function(...A) {
          const T = E();
          return {
            textureData: _(...A),
            timing: E() - T
          };
        };
      },
      getTransferables(g) {
        return [g.textureData.buffer];
      }
    }),
    requests: 0,
    idleTimer: null
  }), y.requests++, clearTimeout(y.idleTimer), y.workerModule(o, l, p, m, u, n).then(({ textureData: g, timing: E }) => {
    const _ = dl(), A = new Uint8Array(g.length * 4);
    for (let T = 0; T < g.length; T++)
      A[T * 4 + d] = g[T];
    return Zi.webglUtils.renderImageData(s, A, c, f, o, l, 1 << 3 - d), E += dl() - _, --y.requests === 0 && (y.idleTimer = setTimeout(() => {
      G1(h);
    }, n0)), { timing: E };
  });
}
function u0(o) {
  o._warm || (Zi.webgl.isSupported(o), o._warm = !0);
}
const i0 = Zi.webglUtils.resizeWebGLCanvasWithoutClearing, Xu = {
  unicodeFontsURL: null,
  sdfGlyphSize: 64,
  sdfMargin: 1 / 16,
  sdfExponent: 9,
  textureWidth: 2048
}, r0 = /* @__PURE__ */ new Fi();
function tu() {
  return (self.performance || Date).now();
}
const cs = /* @__PURE__ */ Object.create(null);
function ws(o, l) {
  o = c0({}, o);
  const p = tu(), m = [];
  if (o.font && m.push({ label: "user", src: s0(o.font) }), o.font = m, o.text = "" + o.text, o.sdfGlyphSize = o.sdfGlyphSize || Xu.sdfGlyphSize, o.unicodeFontsURL = o.unicodeFontsURL || Xu.unicodeFontsURL, o.colorRanges != null) {
    let g = {};
    for (let E in o.colorRanges)
      if (o.colorRanges.hasOwnProperty(E)) {
        let _ = o.colorRanges[E];
        typeof _ != "number" && (_ = r0.set(_).getHex()), g[E] = _;
      }
    o.colorRanges = g;
  }
  Object.freeze(o);
  const { textureWidth: u, sdfExponent: n } = Xu, { sdfGlyphSize: s } = o, c = u / s * 4;
  let f = cs[s];
  if (!f) {
    const g = document.createElement("canvas");
    g.width = u, g.height = s * 256 / c, f = cs[s] = {
      glyphCount: 0,
      sdfGlyphSize: s,
      sdfCanvas: g,
      sdfTexture: new ch(
        g,
        void 0,
        void 0,
        void 0,
        Rc,
        Rc
      ),
      contextLost: !1,
      glyphsByFont: /* @__PURE__ */ new Map()
    }, f.sdfTexture.generateMipmaps = !1, o0(f);
  }
  const { sdfTexture: d, sdfCanvas: h } = f;
  Ps(o).then((g) => {
    const { glyphIds: E, glyphFontIndices: _, fontData: A, glyphPositions: T, fontSize: M, timings: b } = g, z = [], O = new Float32Array(E.length * 4);
    let x = 0, V = 0;
    const j = tu(), X = A.map((Q) => {
      let Y = f.glyphsByFont.get(Q.src);
      return Y || f.glyphsByFont.set(Q.src, Y = /* @__PURE__ */ new Map()), Y;
    });
    E.forEach((Q, Y) => {
      const ne = _[Y], { src: U, unitsPerEm: F } = A[ne];
      let W = X[ne].get(Q);
      if (!W) {
        const { path: J, pathBounds: L } = g.glyphData[U][Q], K = Math.max(L[2] - L[0], L[3] - L[1]) / s * (Xu.sdfMargin * s + 0.5), le = f.glyphCount++, $ = [
          L[0] - K,
          L[1] - K,
          L[2] + K,
          L[3] + K
        ];
        X[ne].set(Q, W = { path: J, atlasIndex: le, sdfViewBox: $ }), z.push(W);
      }
      const { sdfViewBox: H } = W, q = T[V++], C = T[V++], R = M / F;
      O[x++] = q + H[0] * R, O[x++] = C + H[1] * R, O[x++] = q + H[2] * R, O[x++] = C + H[3] * R, E[Y] = W.atlasIndex;
    }), b.quads = (b.quads || 0) + (tu() - j);
    const k = tu();
    b.sdf = {};
    const w = h.height, te = Math.ceil(f.glyphCount / c), B = Math.pow(2, Math.ceil(Math.log2(te * s)));
    B > w && (console.info(`Increasing SDF texture size ${w}->${B}`), i0(h, u, B), d.dispose()), Promise.all(z.map(
      (Q) => Js(Q, f, o.gpuAccelerateSDF).then(({ timing: Y }) => {
        b.sdf[Q.atlasIndex] = Y;
      })
    )).then(() => {
      z.length && !f.contextLost && (Ws(f), d.needsUpdate = !0), b.sdfTotal = tu() - k, b.total = tu() - p, l(Object.freeze({
        parameters: o,
        sdfTexture: d,
        sdfGlyphSize: s,
        sdfExponent: n,
        glyphBounds: O,
        glyphAtlasIndices: E,
        glyphColors: g.glyphColors,
        caretPositions: g.caretPositions,
        chunkedBounds: g.chunkedBounds,
        ascender: g.ascender,
        descender: g.descender,
        lineHeight: g.lineHeight,
        capHeight: g.capHeight,
        xHeight: g.xHeight,
        topBaseline: g.topBaseline,
        blockBounds: g.blockBounds,
        visibleBounds: g.visibleBounds,
        timings: g.timings
      }));
    });
  }), Promise.resolve().then(() => {
    f.contextLost || u0(h);
  });
}
function Js({ path: o, atlasIndex: l, sdfViewBox: p }, { sdfGlyphSize: m, sdfCanvas: u, contextLost: n }, s) {
  if (n)
    return Promise.resolve({ timing: -1 });
  const { textureWidth: c, sdfExponent: f } = Xu, d = Math.max(p[2] - p[0], p[3] - p[1]), h = Math.floor(l / 4), y = h % (c / m) * m, g = Math.floor(h / (c / m)) * m, E = l % 4;
  return $1(m, m, o, p, d, f, u, y, g, E, s);
}
function o0(o) {
  const l = o.sdfCanvas;
  l.addEventListener("webglcontextlost", (p) => {
    console.log("Context Lost", p), p.preventDefault(), o.contextLost = !0;
  }), l.addEventListener("webglcontextrestored", (p) => {
    console.log("Context Restored", p), o.contextLost = !1;
    const m = [];
    o.glyphsByFont.forEach((u) => {
      u.forEach((n) => {
        m.push(Js(n, o, !0));
      });
    }), Promise.all(m).then(() => {
      Ws(o), o.sdfTexture.needsUpdate = !0;
    });
  });
}
function f0({ font: o, characters: l, sdfGlyphSize: p }, m) {
  let u = Array.isArray(l) ? l.join(`
`) : "" + l;
  ws({ font: o, sdfGlyphSize: p, text: u }, m);
}
function c0(o, l) {
  for (let p in l)
    l.hasOwnProperty(p) && (o[p] = l[p]);
  return o;
}
let xi;
function s0(o) {
  return xi || (xi = typeof document > "u" ? {} : document.createElement("a")), xi.href = o, xi.href;
}
function Ws(o) {
  if (typeof createImageBitmap != "function") {
    console.info("Safari<15: applying SDF canvas workaround");
    const { sdfCanvas: l, sdfTexture: p } = o, { width: m, height: u } = l, n = o.sdfCanvas.getContext("webgl");
    let s = p.image.data;
    (!s || s.length !== m * u * 4) && (s = new Uint8Array(m * u * 4), p.image = { width: m, height: u, data: s }, p.flipY = !1, p.isDataTexture = !0), n.readPixels(0, 0, m, u, n.RGBA, n.UNSIGNED_BYTE, s);
  }
}
const d0 = /* @__PURE__ */ lu({
  name: "Typesetter",
  dependencies: [
    I1,
    k1,
    H1
  ],
  init(o, l, p) {
    return o(l, p());
  }
}), Ps = /* @__PURE__ */ lu({
  name: "Typesetter",
  dependencies: [
    d0
  ],
  init(o) {
    return function(l) {
      return new Promise((p) => {
        o.typeset(l, p);
      });
    };
  },
  getTransferables(o) {
    const l = [];
    for (let p in o)
      o[p] && o[p].buffer && l.push(o[p].buffer);
    return l;
  }
});
Ps.onMainThread;
const ss = {};
function v0(o) {
  let l = ss[o];
  return l || (l = ss[o] = new Xo(1, 1, o, o).translate(0.5, 0.5, 0)), l;
}
const h0 = "aTroikaGlyphBounds", ds = "aTroikaGlyphIndex", p0 = "aTroikaGlyphColor";
class m0 extends rh {
  constructor() {
    super(), this.detail = 1, this.curveRadius = 0, this.groups = [
      { start: 0, count: 1 / 0, materialIndex: 0 },
      { start: 0, count: 1 / 0, materialIndex: 1 }
    ], this.boundingSphere = new oh(), this.boundingBox = new ys();
  }
  computeBoundingSphere() {
  }
  computeBoundingBox() {
  }
  set detail(l) {
    if (l !== this._detail) {
      this._detail = l, (typeof l != "number" || l < 1) && (l = 1);
      let p = v0(l);
      ["position", "normal", "uv"].forEach((m) => {
        this.attributes[m] = p.attributes[m].clone();
      }), this.setIndex(p.getIndex().clone());
    }
  }
  get detail() {
    return this._detail;
  }
  set curveRadius(l) {
    l !== this._curveRadius && (this._curveRadius = l, this._updateBounds());
  }
  get curveRadius() {
    return this._curveRadius;
  }
  /**
   * Update the geometry for a new set of glyphs.
   * @param {Float32Array} glyphBounds - An array holding the planar bounds for all glyphs
   *        to be rendered, 4 entries for each glyph: x1,x2,y1,y1
   * @param {Float32Array} glyphAtlasIndices - An array holding the index of each glyph within
   *        the SDF atlas texture.
   * @param {Array} blockBounds - An array holding the [minX, minY, maxX, maxY] across all glyphs
   * @param {Array} [chunkedBounds] - An array of objects describing bounds for each chunk of N
   *        consecutive glyphs: `{start:N, end:N, rect:[minX, minY, maxX, maxY]}`. This can be
   *        used with `applyClipRect` to choose an optimized `instanceCount`.
   * @param {Uint8Array} [glyphColors] - An array holding r,g,b values for each glyph.
   */
  updateGlyphs(l, p, m, u, n) {
    this.updateAttributeData(h0, l, 4), this.updateAttributeData(ds, p, 1), this.updateAttributeData(p0, n, 3), this._blockBounds = m, this._chunkedBounds = u, this.instanceCount = p.length, this._updateBounds();
  }
  _updateBounds() {
    const l = this._blockBounds;
    if (l) {
      const { curveRadius: p, boundingBox: m } = this;
      if (p) {
        const { PI: u, floor: n, min: s, max: c, sin: f, cos: d } = Math, h = u / 2, y = u * 2, g = Math.abs(p), E = l[0] / g, _ = l[2] / g, A = n((E + h) / y) !== n((_ + h) / y) ? -g : s(f(E) * g, f(_) * g), T = n((E - h) / y) !== n((_ - h) / y) ? g : c(f(E) * g, f(_) * g), M = n((E + u) / y) !== n((_ + u) / y) ? g * 2 : c(g - d(E) * g, g - d(_) * g);
        m.min.set(A, l[1], p < 0 ? -M : 0), m.max.set(T, l[3], p < 0 ? 0 : M);
      } else
        m.min.set(l[0], l[1], 0), m.max.set(l[2], l[3], 0);
      m.getBoundingSphere(this.boundingSphere);
    }
  }
  /**
   * Given a clipping rect, and the chunkedBounds from the last updateGlyphs call, choose the lowest
   * `instanceCount` that will show all glyphs within the clipped view. This is an optimization
   * for long blocks of text that are clipped, to skip vertex shader evaluation for glyphs that would
   * be clipped anyway.
   *
   * Note that since `drawElementsInstanced[ANGLE]` only accepts an instance count and not a starting
   * offset, this optimization becomes less effective as the clipRect moves closer to the end of the
   * text block. We could fix that by switching from instancing to a full geometry with a drawRange,
   * but at the expense of much larger attribute buffers (see classdoc above.)
   *
   * @param {Vector4} clipRect
   */
  applyClipRect(l) {
    let p = this.getAttribute(ds).count, m = this._chunkedBounds;
    if (m)
      for (let u = m.length; u--; ) {
        p = m[u].end;
        let n = m[u].rect;
        if (n[1] < l.w && n[3] > l.y && n[0] < l.z && n[2] > l.x)
          break;
      }
    this.instanceCount = p;
  }
  /**
   * Utility for updating instance attributes with automatic resizing
   */
  updateAttributeData(l, p, m) {
    const u = this.getAttribute(l);
    p ? u && u.array.length === p.length ? (u.array.set(p), u.needsUpdate = !0) : (this.setAttribute(l, new fh(p, m)), delete this._maxInstanceCount, this.dispose()) : u && this.deleteAttribute(l);
  }
}
const y0 = `
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`, g0 = `
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`, S0 = `
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`, E0 = `
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;
function b0(o) {
  const l = Vo(o, {
    chained: !0,
    extensions: {
      derivatives: !0
    },
    uniforms: {
      uTroikaSDFTexture: { value: null },
      uTroikaSDFTextureSize: { value: new Li() },
      uTroikaSDFGlyphSize: { value: 0 },
      uTroikaSDFExponent: { value: 0 },
      uTroikaTotalBounds: { value: new zc(0, 0, 0, 0) },
      uTroikaClipRect: { value: new zc(0, 0, 0, 0) },
      uTroikaEdgeOffset: { value: 0 },
      uTroikaFillOpacity: { value: 1 },
      uTroikaPositionOffset: { value: new Li() },
      uTroikaCurveRadius: { value: 0 },
      uTroikaBlurRadius: { value: 0 },
      uTroikaStrokeWidth: { value: 0 },
      uTroikaStrokeColor: { value: new Fi() },
      uTroikaStrokeOpacity: { value: 1 },
      uTroikaOrient: { value: new sh() },
      uTroikaUseGlyphColors: { value: !0 },
      uTroikaSDFDebug: { value: !1 }
    },
    vertexDefs: y0,
    vertexTransform: g0,
    fragmentDefs: S0,
    fragmentColorTransform: E0,
    customRewriter({ vertexShader: p, fragmentShader: m }) {
      let u = /\buniform\s+vec3\s+diffuse\b/;
      return u.test(m) && (m = m.replace(u, "varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g, "vTroikaGlyphColor"), u.test(p) || (p = p.replace(
        Ks,
        `uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`
      ))), { vertexShader: p, fragmentShader: m };
    }
  });
  return l.transparent = !0, l.forceSinglePass = !0, Object.defineProperties(l, {
    isTroikaTextMaterial: { value: !0 },
    // WebGLShadowMap reverses the side of the shadow material by default, which fails
    // for planes, so here we force the `shadowSide` to always match the main side.
    shadowSide: {
      get() {
        return this.side;
      },
      set() {
      }
    }
  }), l;
}
const wo = /* @__PURE__ */ new uh({
  color: 16777215,
  side: dh,
  transparent: !0
}), vs = 8421504, hs = /* @__PURE__ */ new ih(), Bi = /* @__PURE__ */ new Yo(), Do = /* @__PURE__ */ new Yo(), Yu = [], _0 = /* @__PURE__ */ new Yo(), Ao = "+x+y";
function ps(o) {
  return Array.isArray(o) ? o[0] : o;
}
let ks = () => {
  const o = new qo(
    new Xo(1, 1),
    wo
  );
  return ks = () => o, o;
}, Is = () => {
  const o = new qo(
    new Xo(1, 1, 32, 1),
    wo
  );
  return Is = () => o, o;
};
const T0 = { type: "syncstart" }, U0 = { type: "synccomplete" }, $s = [
  "font",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "lang",
  "letterSpacing",
  "lineHeight",
  "maxWidth",
  "overflowWrap",
  "text",
  "direction",
  "textAlign",
  "textIndent",
  "whiteSpace",
  "anchorX",
  "anchorY",
  "colorRanges",
  "sdfGlyphSize"
], M0 = $s.concat(
  "material",
  "color",
  "depthOffset",
  "clipRect",
  "curveRadius",
  "orientation",
  "glyphGeometryDetail"
);
let ed = class extends qo {
  constructor() {
    const l = new m0();
    super(l, null), this.text = "", this.anchorX = 0, this.anchorY = 0, this.curveRadius = 0, this.direction = "auto", this.font = null, this.unicodeFontsURL = null, this.fontSize = 0.1, this.fontWeight = "normal", this.fontStyle = "normal", this.lang = null, this.letterSpacing = 0, this.lineHeight = "normal", this.maxWidth = 1 / 0, this.overflowWrap = "normal", this.textAlign = "left", this.textIndent = 0, this.whiteSpace = "normal", this.material = null, this.color = null, this.colorRanges = null, this.outlineWidth = 0, this.outlineColor = 0, this.outlineOpacity = 1, this.outlineBlur = 0, this.outlineOffsetX = 0, this.outlineOffsetY = 0, this.strokeWidth = 0, this.strokeColor = vs, this.strokeOpacity = 1, this.fillOpacity = 1, this.depthOffset = 0, this.clipRect = null, this.orientation = Ao, this.glyphGeometryDetail = 1, this.sdfGlyphSize = null, this.gpuAccelerateSDF = !0, this.debugSDF = !1;
  }
  /**
   * Updates the text rendering according to the current text-related configuration properties.
   * This is an async process, so you can pass in a callback function to be executed when it
   * finishes.
   * @param {function} [callback]
   */
  sync(l) {
    this._needsSync && (this._needsSync = !1, this._isSyncing ? (this._queuedSyncs || (this._queuedSyncs = [])).push(l) : (this._isSyncing = !0, this.dispatchEvent(T0), ws({
      text: this.text,
      font: this.font,
      lang: this.lang,
      fontSize: this.fontSize || 0.1,
      fontWeight: this.fontWeight || "normal",
      fontStyle: this.fontStyle || "normal",
      letterSpacing: this.letterSpacing || 0,
      lineHeight: this.lineHeight || "normal",
      maxWidth: this.maxWidth,
      direction: this.direction || "auto",
      textAlign: this.textAlign,
      textIndent: this.textIndent,
      whiteSpace: this.whiteSpace,
      overflowWrap: this.overflowWrap,
      anchorX: this.anchorX,
      anchorY: this.anchorY,
      colorRanges: this.colorRanges,
      includeCaretPositions: !0,
      //TODO parameterize
      sdfGlyphSize: this.sdfGlyphSize,
      gpuAccelerateSDF: this.gpuAccelerateSDF,
      unicodeFontsURL: this.unicodeFontsURL
    }, (p) => {
      this._isSyncing = !1, this._textRenderInfo = p, this.geometry.updateGlyphs(
        p.glyphBounds,
        p.glyphAtlasIndices,
        p.blockBounds,
        p.chunkedBounds,
        p.glyphColors
      );
      const m = this._queuedSyncs;
      m && (this._queuedSyncs = null, this._needsSync = !0, this.sync(() => {
        m.forEach((u) => u && u());
      })), this.dispatchEvent(U0), l && l();
    })));
  }
  /**
   * Initiate a sync if needed - note it won't complete until next frame at the
   * earliest so if possible it's a good idea to call sync() manually as soon as
   * all the properties have been set.
   * @override
   */
  onBeforeRender(l, p, m, u, n, s) {
    this.sync(), n.isTroikaTextMaterial && this._prepareForRender(n);
  }
  /**
   * Shortcut to dispose the geometry specific to this instance.
   * Note: we don't also dispose the derived material here because if anything else is
   * sharing the same base material it will result in a pause next frame as the program
   * is recompiled. Instead users can dispose the base material manually, like normal,
   * and we'll also dispose the derived material at that time.
   */
  dispose() {
    this.geometry.dispose();
  }
  /**
   * @property {TroikaTextRenderInfo|null} textRenderInfo
   * @readonly
   * The current processed rendering data for this TextMesh, returned by the TextBuilder after
   * a `sync()` call. This will be `null` initially, and may be stale for a short period until
   * the asynchrous `sync()` process completes.
   */
  get textRenderInfo() {
    return this._textRenderInfo || null;
  }
  /**
   * Create the text derived material from the base material. Can be overridden to use a custom
   * derived material.
   */
  createDerivedMaterial(l) {
    return b0(l);
  }
  // Handler for automatically wrapping the base material with our upgrades. We do the wrapping
  // lazily on _read_ rather than write to avoid unnecessary wrapping on transient values.
  get material() {
    let l = this._derivedMaterial;
    const p = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = wo.clone());
    if ((!l || !l.isDerivedFrom(p)) && (l = this._derivedMaterial = this.createDerivedMaterial(p), p.addEventListener("dispose", function m() {
      p.removeEventListener("dispose", m), l.dispose();
    })), this.hasOutline()) {
      let m = l._outlineMtl;
      return m || (m = l._outlineMtl = Object.create(l, {
        id: { value: l.id + 0.1 }
      }), m.isTextOutlineMaterial = !0, m.depthWrite = !1, m.map = null, l.addEventListener("dispose", function u() {
        l.removeEventListener("dispose", u), m.dispose();
      })), [
        m,
        l
      ];
    } else
      return l;
  }
  set material(l) {
    l && l.isTroikaTextMaterial ? (this._derivedMaterial = l, this._baseMaterial = l.baseMaterial) : this._baseMaterial = l;
  }
  hasOutline() {
    return !!(this.outlineWidth || this.outlineBlur || this.outlineOffsetX || this.outlineOffsetY);
  }
  get glyphGeometryDetail() {
    return this.geometry.detail;
  }
  set glyphGeometryDetail(l) {
    this.geometry.detail = l;
  }
  get curveRadius() {
    return this.geometry.curveRadius;
  }
  set curveRadius(l) {
    this.geometry.curveRadius = l;
  }
  // Create and update material for shadows upon request:
  get customDepthMaterial() {
    return ps(this.material).getDepthMaterial();
  }
  set customDepthMaterial(l) {
  }
  get customDistanceMaterial() {
    return ps(this.material).getDistanceMaterial();
  }
  set customDistanceMaterial(l) {
  }
  _prepareForRender(l) {
    const p = l.isTextOutlineMaterial, m = l.uniforms, u = this.textRenderInfo;
    if (u) {
      const { sdfTexture: c, blockBounds: f } = u;
      m.uTroikaSDFTexture.value = c, m.uTroikaSDFTextureSize.value.set(c.image.width, c.image.height), m.uTroikaSDFGlyphSize.value = u.sdfGlyphSize, m.uTroikaSDFExponent.value = u.sdfExponent, m.uTroikaTotalBounds.value.fromArray(f), m.uTroikaUseGlyphColors.value = !p && !!u.glyphColors;
      let d = 0, h = 0, y = 0, g, E, _, A = 0, T = 0;
      if (p) {
        let { outlineWidth: b, outlineOffsetX: z, outlineOffsetY: O, outlineBlur: x, outlineOpacity: V } = this;
        d = this._parsePercent(b) || 0, h = Math.max(0, this._parsePercent(x) || 0), g = V, A = this._parsePercent(z) || 0, T = this._parsePercent(O) || 0;
      } else
        y = Math.max(0, this._parsePercent(this.strokeWidth) || 0), y && (_ = this.strokeColor, m.uTroikaStrokeColor.value.set(_ ?? vs), E = this.strokeOpacity, E == null && (E = 1)), g = this.fillOpacity;
      m.uTroikaEdgeOffset.value = d, m.uTroikaPositionOffset.value.set(A, T), m.uTroikaBlurRadius.value = h, m.uTroikaStrokeWidth.value = y, m.uTroikaStrokeOpacity.value = E, m.uTroikaFillOpacity.value = g ?? 1, m.uTroikaCurveRadius.value = this.curveRadius || 0;
      let M = this.clipRect;
      if (M && Array.isArray(M) && M.length === 4)
        m.uTroikaClipRect.value.fromArray(M);
      else {
        const b = (this.fontSize || 0.1) * 100;
        m.uTroikaClipRect.value.set(
          f[0] - b,
          f[1] - b,
          f[2] + b,
          f[3] + b
        );
      }
      this.geometry.applyClipRect(m.uTroikaClipRect.value);
    }
    m.uTroikaSDFDebug.value = !!this.debugSDF, l.polygonOffset = !!this.depthOffset, l.polygonOffsetFactor = l.polygonOffsetUnits = this.depthOffset || 0;
    const n = p ? this.outlineColor || 0 : this.color;
    if (n == null)
      delete l.color;
    else {
      const c = l.hasOwnProperty("color") ? l.color : l.color = new Fi();
      (n !== c._input || typeof n == "object") && c.set(c._input = n);
    }
    let s = this.orientation || Ao;
    if (s !== l._orientation) {
      let c = m.uTroikaOrient.value;
      s = s.replace(/[^-+xyz]/g, "");
      let f = s !== Ao && s.match(/^([-+])([xyz])([-+])([xyz])$/);
      if (f) {
        let [, d, h, y, g] = f;
        Bi.set(0, 0, 0)[h] = d === "-" ? 1 : -1, Do.set(0, 0, 0)[g] = y === "-" ? -1 : 1, hs.lookAt(_0, Bi.cross(Do), Do), c.setFromMatrix4(hs);
      } else
        c.identity();
      l._orientation = s;
    }
  }
  _parsePercent(l) {
    if (typeof l == "string") {
      let p = l.match(/^(-?[\d.]+)%$/), m = p ? parseFloat(p[1]) : NaN;
      l = (isNaN(m) ? 0 : m / 100) * this.fontSize;
    }
    return l;
  }
  /**
   * Translate a point in local space to an x/y in the text plane.
   */
  localPositionToTextCoords(l, p = new Li()) {
    p.copy(l);
    const m = this.curveRadius;
    return m && (p.x = Math.atan2(l.x, Math.abs(m) - Math.abs(l.z)) * Math.abs(m)), p;
  }
  /**
   * Translate a point in world space to an x/y in the text plane.
   */
  worldPositionToTextCoords(l, p = new Li()) {
    return Bi.copy(l), this.localPositionToTextCoords(this.worldToLocal(Bi), p);
  }
  /**
   * @override Custom raycasting to test against the whole text block's max rectangular bounds
   * TODO is there any reason to make this more granular, like within individual line or glyph rects?
   */
  raycast(l, p) {
    const { textRenderInfo: m, curveRadius: u } = this;
    if (m) {
      const n = m.blockBounds, s = u ? Is() : ks(), c = s.geometry, { position: f, uv: d } = c.attributes;
      for (let h = 0; h < d.count; h++) {
        let y = n[0] + d.getX(h) * (n[2] - n[0]);
        const g = n[1] + d.getY(h) * (n[3] - n[1]);
        let E = 0;
        u && (E = u - Math.cos(y / u) * u, y = Math.sin(y / u) * u), f.setXYZ(h, y, g, E);
      }
      c.boundingSphere = this.geometry.boundingSphere, c.boundingBox = this.geometry.boundingBox, s.matrixWorld = this.matrixWorld, s.material.side = this.material.side, Yu.length = 0, s.raycast(l, Yu);
      for (let h = 0; h < Yu.length; h++)
        Yu[h].object = this, p.push(Yu[h]);
    }
  }
  copy(l) {
    const p = this.geometry;
    return super.copy(l), this.geometry = p, M0.forEach((m) => {
      this[m] = l[m];
    }), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
$s.forEach((o) => {
  const l = "_private_" + o;
  Object.defineProperty(ed.prototype, o, {
    get() {
      return this[l];
    },
    set(p) {
      p !== this[l] && (this[l] = p, this._needsSync = !0);
    }
  });
});
new ys();
new Fi();
const C0 = /* @__PURE__ */ Ye.forwardRef(({
  sdfGlyphSize: o = 64,
  anchorX: l = "center",
  anchorY: p = "middle",
  font: m,
  fontSize: u = 1,
  children: n,
  characters: s,
  onSync: c,
  ...f
}, d) => {
  const h = xs(({
    invalidate: _
  }) => _), [y] = Ye.useState(() => new ed()), [g, E] = Ye.useMemo(() => {
    const _ = [];
    let A = "";
    return Ye.Children.forEach(n, (T) => {
      typeof T == "string" || typeof T == "number" ? A += T : _.push(T);
    }), [_, A];
  }, [n]);
  return bs(() => new Promise((_) => f0({
    font: m,
    characters: s
  }, _)), ["troika-text", m, s]), Ye.useLayoutEffect(() => void y.sync(() => {
    h(), c && c(y);
  })), Ye.useEffect(() => () => y.dispose(), [y]), /* @__PURE__ */ Ye.createElement("primitive", Go({
    object: y,
    ref: d,
    font: m,
    text: E,
    anchorX: l,
    anchorY: p,
    fontSize: u,
    sdfGlyphSize: o
  }, f), g);
});
function D0() {
  return /* @__PURE__ */ vt("group", { children: [
    /* @__PURE__ */ vt("mesh", { rotation: [0, 0, Math.PI / 2], children: [
      /* @__PURE__ */ ye("cylinderGeometry", { args: [3e-3, 3e-3, 0.3, 32] }),
      /* @__PURE__ */ ye("meshStandardMaterial", { color: "red" })
    ] }),
    /* @__PURE__ */ vt("mesh", { position: [0.15, 0, 0], rotation: [0, 0, -Math.PI / 2], children: [
      /* @__PURE__ */ ye("coneGeometry", { args: [9e-3, 0.03, 32] }),
      /* @__PURE__ */ ye("meshStandardMaterial", { color: "red" })
    ] })
  ] });
}
function A0() {
  const o = Qu(), l = Qu(), p = Qu();
  return Bs((m) => {
    const u = m.clock.elapsedTime;
    o.current && o.current.scale.setScalar(0.5 + Math.max(0, Math.sin(u * 3)) * 0.5), l.current && l.current.scale.setScalar(0.5 + Math.max(0, Math.sin(u * 3 - 0.5)) * 0.5), p.current && p.current.scale.setScalar(0.5 + Math.max(0, Math.sin(u * 3 - 1)) * 0.5);
  }), /* @__PURE__ */ vt("group", { children: [
    /* @__PURE__ */ ye(
      C0,
      {
        position: [0, 0.01, 0],
        fontSize: 8e-3,
        color: "#666666",
        anchorX: "center",
        anchorY: "center",
        children: "Ball loading"
      }
    ),
    /* @__PURE__ */ vt("mesh", { ref: o, position: [-8e-3, -0.01, 0], children: [
      /* @__PURE__ */ ye("sphereGeometry", { args: [2e-3, 8, 8] }),
      /* @__PURE__ */ ye("meshBasicMaterial", { color: "#999999" })
    ] }),
    /* @__PURE__ */ vt("mesh", { ref: l, position: [0, -0.01, 0], children: [
      /* @__PURE__ */ ye("sphereGeometry", { args: [2e-3, 8, 8] }),
      /* @__PURE__ */ ye("meshBasicMaterial", { color: "#999999" })
    ] }),
    /* @__PURE__ */ vt("mesh", { ref: p, position: [8e-3, -0.01, 0], children: [
      /* @__PURE__ */ ye("sphereGeometry", { args: [2e-3, 8, 8] }),
      /* @__PURE__ */ ye("meshBasicMaterial", { color: "#999999" })
    ] })
  ] });
}
function O0({ spinRate: o, playing: l, spinAxis: p, currentSeamLat: m, currentSeamLon: u, useSeamOrientation: n, resetSpin: s }) {
  const c = Ko(
    vh,
    "/models/baseball-v2.glb",
    (g) => {
      g.setMeshoptDecoder(hh);
    }
  ), f = sl.useRef(), d = sl.useRef(), h = sl.useRef(), { invalidate: y } = xs();
  return _a(() => {
    c.scene && c.scene.rotation.set(Math.PI / 2, 3 * Math.PI / 2, 0);
  }, [c]), _a(() => {
    f.current && (f.current.quaternion.identity(), y());
  }, [s, y]), _a(() => {
    if (d.current) {
      if (d.current.quaternion.identity(), n && m != null && u != null && !isNaN(m) && !isNaN(u)) {
        const g = Le.MathUtils.degToRad(m), E = Le.MathUtils.degToRad(u), _ = Math.cos(g) * Math.sin(E), A = Math.sin(g), T = Math.cos(g) * Math.cos(E), M = new Le.Vector3(-_, A, T).normalize(), b = new Le.Vector3(1, 0, 0), z = new Le.Quaternion().setFromUnitVectors(
          b,
          M
        );
        d.current.quaternion.copy(z);
      }
      y();
    }
  }, [n, m, u, y]), _a(() => {
    if (h.current && p) {
      const g = new Le.Vector3(1, 0, 0), E = new Le.Quaternion().setFromUnitVectors(
        g,
        p.clone().normalize()
      );
      h.current.quaternion.copy(E), y();
    }
  }, [p, y]), Bs((g, E) => {
    if (l && f.current) {
      const A = o * 2 * Math.PI / 60 * E, T = new Le.Vector3(1, 0, 0), M = new Le.Quaternion();
      M.setFromAxisAngle(T, A), f.current.quaternion.multiplyQuaternions(M, f.current.quaternion);
    }
  }), /* @__PURE__ */ ye("group", { children: /* @__PURE__ */ vt("group", { ref: h, children: [
    /* @__PURE__ */ ye(D0, {}),
    /* @__PURE__ */ ye("group", { ref: f, children: /* @__PURE__ */ ye("group", { ref: d, children: /* @__PURE__ */ ye("primitive", { object: c.scene, scale: 2 }) }) })
  ] }) });
}
function R0() {
  const [o, l] = Cn([]), [p, m] = Cn(null), [u, n] = Cn(!0), [s, c] = Cn(new Le.Vector3(1, 0, 0)), [f, d] = Cn(0), [h, y] = Cn(0), [g, E] = Cn(!1);
  _a(() => {
    fetch("/gilbert_augEighth.json").then((T) => T.json()).then((T) => {
      l(T || []), T && T.length > 0 && m(T[0].PitchUID);
    });
  }, []), _a(() => {
    const T = (M) => {
      if (M.data?.type === "pitch_uid")
        console.log("Pitch UID changed:", M.data.value), m(M.data.value);
      else if (M.data?.type === "slider_update") {
        if ("spinVectorX" in M.data && "spinVectorY" in M.data && "spinVectorZ" in M.data) {
          const b = new Le.Vector3(
            M.data.spinVectorX,
            M.data.spinVectorY,
            M.data.spinVectorZ
          ).normalize();
          console.log("Received spin vector - Tilt:", M.data.spinTilt, "Gyro:", M.data.spinGyro, "Vector:", b), c(b);
        }
        "ballX" in M.data && y(M.data.ballX), "ballY" in M.data && d(M.data.ballY);
      } else M.data?.type === "play_toggle" ? n(!!M.data.value) : M.data?.type === "reset_spin_rotation" && E((b) => !b);
    };
    return window.addEventListener("message", T), () => window.removeEventListener("message", T);
  }, []);
  const _ = ms(() => !p || !o.length ? null : o.find((T) => T.PitchUID === p) || null, [p, o]);
  return _a(() => {
    if (_) {
      const T = new Le.Vector3(
        _.spin_backspin,
        _.spin_sidespin,
        -_.spin_gyrospin
      ).normalize();
      c(T), d(_.seam_orientation_lat || 0), y(_.seam_orientation_lon || 0);
    }
  }, [_]), /* @__PURE__ */ ye("div", { style: { width: "100vw", height: "100vh", position: "relative" }, children: /* @__PURE__ */ vt(R1, { camera: { position: [0, 0, 0.55], fov: 50 }, children: [
    /* @__PURE__ */ vt("mesh", { scale: [50, 50, 50], children: [
      /* @__PURE__ */ ye("sphereGeometry", { args: [1, 32, 32] }),
      /* @__PURE__ */ ye("meshBasicMaterial", { color: "#a7cef2", side: Le.BackSide })
    ] }),
    /* @__PURE__ */ ye("ambientLight", { intensity: 1 }),
    /* @__PURE__ */ ye("directionalLight", { position: [0, 0, 0.3], intensity: 1 }),
    /* @__PURE__ */ vt("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -1.14, -4], children: [
      /* @__PURE__ */ ye("planeGeometry", { args: [20, 16] }),
      /* @__PURE__ */ ye("meshPhongMaterial", { color: "#489147" })
    ] }),
    /* @__PURE__ */ vt("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -1.139, -5.76], children: [
      /* @__PURE__ */ ye("circleGeometry", { args: [1, 64] }),
      /* @__PURE__ */ ye("meshPhongMaterial", { color: "#DEB887" })
    ] }),
    /* @__PURE__ */ vt("mesh", { rotation: [-Math.PI / 2, 0, Math.PI], position: [0, -1.138, -5.6], children: [
      /* @__PURE__ */ ye("shapeGeometry", { args: [
        (() => {
          const T = new Le.Shape();
          return T.moveTo(-0.2, 0.2), T.lineTo(0.2, 0.2), T.lineTo(0.2, -0.24), T.lineTo(0, -0.56), T.lineTo(-0.2, -0.24), T.lineTo(-0.2, 0.2), T;
        })()
      ] }),
      /* @__PURE__ */ ye("meshBasicMaterial", { color: "white" })
    ] }),
    /* @__PURE__ */ vt("mesh", { rotation: [-Math.PI / 2, 0, -Math.PI / 4], position: [-3, -1.049, -2.3], children: [
      /* @__PURE__ */ ye("planeGeometry", { args: [0.02, 7] }),
      /* @__PURE__ */ ye("meshBasicMaterial", { color: "white" })
    ] }),
    /* @__PURE__ */ vt("mesh", { rotation: [-Math.PI / 2, 0, Math.PI / 4], position: [3, -1.049, -2.3], children: [
      /* @__PURE__ */ ye("planeGeometry", { args: [0.02, 7] }),
      /* @__PURE__ */ ye("meshBasicMaterial", { color: "white" })
    ] }),
    /* @__PURE__ */ vt("group", { position: [0.45, -1.137, -5.6], children: [
      /* @__PURE__ */ vt("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0.4], children: [
        /* @__PURE__ */ ye("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ ye("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ vt("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, -0.4], children: [
        /* @__PURE__ */ ye("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ ye("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ vt("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [-0.15, 0, 0], children: [
        /* @__PURE__ */ ye("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ ye("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ vt("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0.15, 0, 0], children: [
        /* @__PURE__ */ ye("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ ye("meshBasicMaterial", { color: "white" })
      ] })
    ] }),
    /* @__PURE__ */ vt("group", { position: [-0.45, -1.137, -5.6], children: [
      /* @__PURE__ */ vt("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0.4], children: [
        /* @__PURE__ */ ye("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ ye("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ vt("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, -0.4], children: [
        /* @__PURE__ */ ye("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ ye("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ vt("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [-0.15, 0, 0], children: [
        /* @__PURE__ */ ye("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ ye("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ vt("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0.15, 0, 0], children: [
        /* @__PURE__ */ ye("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ ye("meshBasicMaterial", { color: "white" })
      ] })
    ] }),
    /* @__PURE__ */ ye(Iv, { fallback: /* @__PURE__ */ ye(A0, {}), children: /* @__PURE__ */ ye(
      O0,
      {
        spinRate: 50,
        playing: u,
        spinAxis: s,
        currentSeamLat: f,
        currentSeamLon: h,
        useSeamOrientation: !0,
        resetSpin: g
      }
    ) })
  ] }) });
}
const z0 = document.getElementById("root"), N0 = $v(z0);
N0.render(/* @__PURE__ */ ye(R0, {}));
