import { jsx as ce, jsxs as ut } from "https://esm.sh/react/jsx-runtime";
import * as qe from "https://esm.sh/react";
import Ua, { useState as ta, useRef as Qi, useEffect as Pt, useMemo as vs, Suspense as Ih } from "https://esm.sh/react";
import { createRoot as $h } from "https://esm.sh/react-dom/client";
import * as Ne from "https://esm.sh/three";
import { MeshDistanceMaterial as ev, MeshDepthMaterial as tv, RGBADepthPacking as av, UniformsUtils as nv, ShaderChunk as lv, Mesh as Lo, MeshBasicMaterial as iv, Color as Ku, Vector3 as Yo, Matrix4 as uv, Vector2 as Lu, InstancedBufferGeometry as rv, Sphere as ov, Box3 as ps, InstancedBufferAttribute as fv, Texture as cv, LinearFilter as Cc, Matrix3 as sv, Vector4 as Rc, DoubleSide as dv, PlaneGeometry as qo } from "https://esm.sh/three";
import { GLTFLoader as Oc } from "https://esm.sh/three/examples/jsm/loaders/GLTFLoader";
import { MeshoptDecoder as zc } from "https://esm.sh/three/examples/jsm/libs/meshopt_decoder.module.js";
function ms(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var oo = { exports: {} }, rn = {};
/**
 * @license React
 * react-reconciler-constants.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xc;
function hv() {
  return xc || (xc = 1, rn.ConcurrentRoot = 1, rn.ContinuousEventPriority = 8, rn.DefaultEventPriority = 32, rn.DiscreteEventPriority = 2, rn.IdleEventPriority = 268435456, rn.LegacyRoot = 0, rn.NoEventPriority = 0), rn;
}
var Nc;
function vv() {
  return Nc || (Nc = 1, oo.exports = hv()), oo.exports;
}
var Gu = vv(), fo = { exports: {} }, co = {}, so = { exports: {} }, ho = {};
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
function pv() {
  if (Bc) return ho;
  Bc = 1;
  var o = Ua;
  function l(y, g) {
    return y === g && (y !== 0 || 1 / y === 1 / g) || y !== y && g !== g;
  }
  var p = typeof Object.is == "function" ? Object.is : l, m = o.useState, i = o.useEffect, n = o.useLayoutEffect, s = o.useDebugValue;
  function c(y, g) {
    var E = g(), _ = m({ inst: { value: E, getSnapshot: g } }), D = _[0].inst, C = _[1];
    return n(
      function() {
        D.value = E, D.getSnapshot = g, f(D) && C({ inst: D });
      },
      [y, E, g]
    ), i(
      function() {
        return f(D) && C({ inst: D }), y(function() {
          f(D) && C({ inst: D });
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
  var v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : c;
  return ho.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : v, ho;
}
var Gc;
function mv() {
  return Gc || (Gc = 1, so.exports = pv()), so.exports;
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
function yv() {
  if (jc) return co;
  jc = 1;
  var o = Ua, l = mv();
  function p(d, v) {
    return d === v && (d !== 0 || 1 / d === 1 / v) || d !== d && v !== v;
  }
  var m = typeof Object.is == "function" ? Object.is : p, i = l.useSyncExternalStore, n = o.useRef, s = o.useEffect, c = o.useMemo, f = o.useDebugValue;
  return co.useSyncExternalStoreWithSelector = function(d, v, y, g, E) {
    var _ = n(null);
    if (_.current === null) {
      var D = { hasValue: !1, value: null };
      _.current = D;
    } else D = _.current;
    _ = c(
      function() {
        function U(H) {
          if (!b) {
            if (b = !0, z = H, H = g(H), E !== void 0 && D.hasValue) {
              var G = D.value;
              if (E(G, H))
                return R = G;
            }
            return R = H;
          }
          if (G = R, m(z, H)) return G;
          var L = g(H);
          return E !== void 0 && E(G, L) ? (z = H, G) : (z = H, R = L);
        }
        var b = !1, z, R, x = y === void 0 ? null : y;
        return [
          function() {
            return U(v());
          },
          x === null ? void 0 : function() {
            return U(x());
          }
        ];
      },
      [v, y, g, E]
    );
    var C = i(d, _[0], _[1]);
    return s(
      function() {
        D.hasValue = !0, D.value = C;
      },
      [C]
    ), f(C), C;
  }, co;
}
var Hc;
function gv() {
  return Hc || (Hc = 1, fo.exports = yv()), fo.exports;
}
var Sv = gv();
const Ev = /* @__PURE__ */ ms(Sv), Vc = (o) => {
  let l;
  const p = /* @__PURE__ */ new Set(), m = (d, v) => {
    const y = typeof d == "function" ? d(l) : d;
    if (!Object.is(y, l)) {
      const g = l;
      l = v ?? (typeof y != "object" || y === null) ? y : Object.assign({}, l, y), p.forEach((E) => E(l, g));
    }
  }, i = () => l, c = { setState: m, getState: i, getInitialState: () => f, subscribe: (d) => (p.add(d), () => p.delete(d)) }, f = l = o(m, i, c);
  return c;
}, bv = ((o) => o ? Vc(o) : Vc), { useSyncExternalStoreWithSelector: Tv } = Ev, _v = (o) => o;
function Uv(o, l = _v, p) {
  const m = Tv(
    o.subscribe,
    o.getState,
    o.getInitialState,
    l,
    p
  );
  return Ua.useDebugValue(m), m;
}
const Lc = (o, l) => {
  const p = bv(o), m = (i, n = l) => Uv(p, i, n);
  return Object.assign(m, p), m;
}, Mv = ((o, l) => o ? Lc(o, l) : Lc), Dv = (o) => typeof o == "object" && typeof o.then == "function", sl = [];
function ys(o, l, p = (m, i) => m === i) {
  if (o === l) return !0;
  if (!o || !l) return !1;
  const m = o.length;
  if (l.length !== m) return !1;
  for (let i = 0; i < m; i++) if (!p(o[i], l[i])) return !1;
  return !0;
}
function gs(o, l = null, p = !1, m = {}) {
  l === null && (l = [o]);
  for (const n of sl)
    if (ys(l, n.keys, n.equal)) {
      if (p) return;
      if (Object.prototype.hasOwnProperty.call(n, "error")) throw n.error;
      if (Object.prototype.hasOwnProperty.call(n, "response"))
        return m.lifespan && m.lifespan > 0 && (n.timeout && clearTimeout(n.timeout), n.timeout = setTimeout(n.remove, m.lifespan)), n.response;
      if (!p) throw n.promise;
    }
  const i = {
    keys: l,
    equal: m.equal,
    remove: () => {
      const n = sl.indexOf(i);
      n !== -1 && sl.splice(n, 1);
    },
    promise: (
      // Execute the promise
      (Dv(o) ? o : o(...l)).then((n) => {
        i.response = n, m.lifespan && m.lifespan > 0 && (i.timeout = setTimeout(i.remove, m.lifespan));
      }).catch((n) => i.error = n)
    )
  };
  if (sl.push(i), !p) throw i.promise;
}
const Ss = (o, l, p) => gs(o, l, !1, p), Av = (o, l, p) => void gs(o, l, !0, p), Cv = (o) => {
  if (o === void 0 || o.length === 0) sl.splice(0, sl.length);
  else {
    const l = sl.find((p) => ys(o, p.keys, p.equal));
    l && l.remove();
  }
};
var vo = { exports: {} }, po = { exports: {} }, mo = { exports: {} }, yo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yc;
function Rv() {
  return Yc || (Yc = 1, (function(o) {
    function l(j, P) {
      var ee = j.length;
      j.push(P);
      e: for (; 0 < ee; ) {
        var Z = ee - 1 >>> 1, w = j[Z];
        if (0 < i(w, P))
          j[Z] = P, j[ee] = w, ee = Z;
        else break e;
      }
    }
    function p(j) {
      return j.length === 0 ? null : j[0];
    }
    function m(j) {
      if (j.length === 0) return null;
      var P = j[0], ee = j.pop();
      if (ee !== P) {
        j[0] = ee;
        e: for (var Z = 0, w = j.length, T = w >>> 1; Z < T; ) {
          var A = 2 * (Z + 1) - 1, V = j[A], Q = A + 1, K = j[Q];
          if (0 > i(V, ee))
            Q < w && 0 > i(K, V) ? (j[Z] = K, j[Q] = ee, Z = Q) : (j[Z] = V, j[A] = ee, Z = A);
          else if (Q < w && 0 > i(K, ee))
            j[Z] = K, j[Q] = ee, Z = Q;
          else break e;
        }
      }
      return P;
    }
    function i(j, P) {
      var ee = j.sortIndex - P.sortIndex;
      return ee !== 0 ? ee : j.id - P.id;
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
    var f = [], d = [], v = 1, y = null, g = 3, E = !1, _ = !1, D = !1, C = typeof setTimeout == "function" ? setTimeout : null, U = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    function z(j) {
      for (var P = p(d); P !== null; ) {
        if (P.callback === null) m(d);
        else if (P.startTime <= j)
          m(d), P.sortIndex = P.expirationTime, l(f, P);
        else break;
        P = p(d);
      }
    }
    function R(j) {
      if (D = !1, z(j), !_)
        if (p(f) !== null)
          _ = !0, Y();
        else {
          var P = p(d);
          P !== null && le(R, P.startTime - j);
        }
    }
    var x = !1, H = -1, G = 5, L = -1;
    function W() {
      return !(o.unstable_now() - L < G);
    }
    function q() {
      if (x) {
        var j = o.unstable_now();
        L = j;
        var P = !0;
        try {
          e: {
            _ = !1, D && (D = !1, U(H), H = -1), E = !0;
            var ee = g;
            try {
              t: {
                for (z(j), y = p(f); y !== null && !(y.expirationTime > j && W()); ) {
                  var Z = y.callback;
                  if (typeof Z == "function") {
                    y.callback = null, g = y.priorityLevel;
                    var w = Z(
                      y.expirationTime <= j
                    );
                    if (j = o.unstable_now(), typeof w == "function") {
                      y.callback = w, z(j), P = !0;
                      break t;
                    }
                    y === p(f) && m(f), z(j);
                  } else m(f);
                  y = p(f);
                }
                if (y !== null) P = !0;
                else {
                  var T = p(d);
                  T !== null && le(
                    R,
                    T.startTime - j
                  ), P = !1;
                }
              }
              break e;
            } finally {
              y = null, g = ee, E = !1;
            }
            P = void 0;
          }
        } finally {
          P ? ae() : x = !1;
        }
      }
    }
    var ae;
    if (typeof b == "function")
      ae = function() {
        b(q);
      };
    else if (typeof MessageChannel < "u") {
      var O = new MessageChannel(), X = O.port2;
      O.port1.onmessage = q, ae = function() {
        X.postMessage(null);
      };
    } else
      ae = function() {
        C(q, 0);
      };
    function Y() {
      x || (x = !0, ae());
    }
    function le(j, P) {
      H = C(function() {
        j(o.unstable_now());
      }, P);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, o.unstable_continueExecution = function() {
      _ || E || (_ = !0, Y());
    }, o.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : G = 0 < j ? Math.floor(1e3 / j) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, o.unstable_getFirstCallbackNode = function() {
      return p(f);
    }, o.unstable_next = function(j) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = g;
      }
      var ee = g;
      g = P;
      try {
        return j();
      } finally {
        g = ee;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(j, P) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var ee = g;
      g = j;
      try {
        return P();
      } finally {
        g = ee;
      }
    }, o.unstable_scheduleCallback = function(j, P, ee) {
      var Z = o.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? Z + ee : Z) : ee = Z, j) {
        case 1:
          var w = -1;
          break;
        case 2:
          w = 250;
          break;
        case 5:
          w = 1073741823;
          break;
        case 4:
          w = 1e4;
          break;
        default:
          w = 5e3;
      }
      return w = ee + w, j = {
        id: v++,
        callback: P,
        priorityLevel: j,
        startTime: ee,
        expirationTime: w,
        sortIndex: -1
      }, ee > Z ? (j.sortIndex = ee, l(d, j), p(f) === null && j === p(d) && (D ? (U(H), H = -1) : D = !0, le(R, ee - Z))) : (j.sortIndex = w, l(f, j), _ || E || (_ = !0, Y())), j;
    }, o.unstable_shouldYield = W, o.unstable_wrapCallback = function(j) {
      var P = g;
      return function() {
        var ee = g;
        g = P;
        try {
          return j.apply(this, arguments);
        } finally {
          g = ee;
        }
      };
    };
  })(yo)), yo;
}
var qc;
function Es() {
  return qc || (qc = 1, mo.exports = Rv()), mo.exports;
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
function Ov() {
  return Xc || (Xc = 1, (function(o) {
    o.exports = function(l) {
      function p(e, t, a, u) {
        return new pd(e, t, a, u);
      }
      function m() {
      }
      function i(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
          t += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var a = 2; a < arguments.length; a++)
            t += "&args[]=" + encodeURIComponent(arguments[a]);
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      function n(e) {
        return e === null || typeof e != "object" ? null : (e = Jf && e[Jf] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function s(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === bd ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case Nl:
            return "Fragment";
          case xl:
            return "Portal";
          case Rr:
            return "Profiler";
          case Kf:
            return "StrictMode";
          case zr:
            return "Suspense";
          case xr:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case gn:
              return (e.displayName || "Context") + ".Provider";
            case Zf:
              return (e._context.displayName || "Context") + ".Consumer";
            case Or:
              var t = e.render;
              return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Nr:
              return t = e.displayName || null, t !== null ? t : s(e.type) || "Memo";
            case Sn:
              t = e._payload, e = e._init;
              try {
                return s(e(t));
              } catch {
              }
          }
        return null;
      }
      function c(e) {
        if (Br === void 0)
          try {
            throw Error();
          } catch (a) {
            var t = a.stack.trim().match(/\n( *(at )?)/);
            Br = t && t[1] || "", Wf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + Br + e + Wf;
      }
      function f(e, t) {
        if (!e || Gr) return "";
        Gr = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var u = {
            DetermineComponentFrameRoot: function() {
              try {
                if (t) {
                  var se = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(se.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(se, []);
                    } catch (Ye) {
                      var pe = Ye;
                    }
                    Reflect.construct(e, [], se);
                  } else {
                    try {
                      se.call();
                    } catch (Ye) {
                      pe = Ye;
                    }
                    e.call(se.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (Ye) {
                    pe = Ye;
                  }
                  (se = e()) && typeof se.catch == "function" && se.catch(function() {
                  });
                }
              } catch (Ye) {
                if (Ye && pe && typeof Ye.stack == "string")
                  return [Ye.stack, pe.stack];
              }
              return [null, null];
            }
          };
          u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var r = Object.getOwnPropertyDescriptor(
            u.DetermineComponentFrameRoot,
            "name"
          );
          r && r.configurable && Object.defineProperty(
            u.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var h = u.DetermineComponentFrameRoot(), S = h[0], M = h[1];
          if (S && M) {
            var B = S.split(`
`), k = M.split(`
`);
            for (r = u = 0; u < B.length && !B[u].includes("DetermineComponentFrameRoot"); )
              u++;
            for (; r < k.length && !k[r].includes(
              "DetermineComponentFrameRoot"
            ); )
              r++;
            if (u === B.length || r === k.length)
              for (u = B.length - 1, r = k.length - 1; 1 <= u && 0 <= r && B[u] !== k[r]; )
                r--;
            for (; 1 <= u && 0 <= r; u--, r--)
              if (B[u] !== k[r]) {
                if (u !== 1 || r !== 1)
                  do
                    if (u--, r--, 0 > r || B[u] !== k[r]) {
                      var re = `
` + B[u].replace(" at new ", " at ");
                      return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), re;
                    }
                  while (1 <= u && 0 <= r);
                break;
              }
          }
        } finally {
          Gr = !1, Error.prepareStackTrace = a;
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
      function v(e) {
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
          throw Error(i(188));
      }
      function E(e) {
        var t = e.alternate;
        if (!t) {
          if (t = y(e), t === null) throw Error(i(188));
          return t !== e ? null : e;
        }
        for (var a = e, u = t; ; ) {
          var r = a.return;
          if (r === null) break;
          var h = r.alternate;
          if (h === null) {
            if (u = r.return, u !== null) {
              a = u;
              continue;
            }
            break;
          }
          if (r.child === h.child) {
            for (h = r.child; h; ) {
              if (h === a) return g(r), e;
              if (h === u) return g(r), t;
              h = h.sibling;
            }
            throw Error(i(188));
          }
          if (a.return !== u.return) a = r, u = h;
          else {
            for (var S = !1, M = r.child; M; ) {
              if (M === a) {
                S = !0, a = r, u = h;
                break;
              }
              if (M === u) {
                S = !0, u = r, a = h;
                break;
              }
              M = M.sibling;
            }
            if (!S) {
              for (M = h.child; M; ) {
                if (M === a) {
                  S = !0, a = h, u = r;
                  break;
                }
                if (M === u) {
                  S = !0, u = h, a = r;
                  break;
                }
                M = M.sibling;
              }
              if (!S) throw Error(i(189));
            }
          }
          if (a.alternate !== u) throw Error(i(190));
        }
        if (a.tag !== 3) throw Error(i(188));
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
      function D(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null; ) {
          if (e.tag !== 4 && (t = D(e), t !== null))
            return t;
          e = e.sibling;
        }
        return null;
      }
      function C(e) {
        return { current: e };
      }
      function U(e) {
        0 > Gl || (e.current = qr[Gl], qr[Gl] = null, Gl--);
      }
      function b(e, t) {
        Gl++, qr[Gl] = e.current, e.current = t;
      }
      function z(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (jh(e) / Hh | 0) | 0;
      }
      function R(e) {
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
        var u = 0, r = e.suspendedLanes, h = e.pingedLanes, S = e.warmLanes;
        e = e.finishedLanes !== 0;
        var M = a & 134217727;
        return M !== 0 ? (a = M & ~r, a !== 0 ? u = R(a) : (h &= M, h !== 0 ? u = R(h) : e || (S = M & ~S, S !== 0 && (u = R(S))))) : (M = a & ~r, M !== 0 ? u = R(M) : h !== 0 ? u = R(h) : e || (S = a & ~S, S !== 0 && (u = R(S)))), u === 0 ? 0 : t !== 0 && t !== u && (t & r) === 0 && (r = u & -u, S = t & -t, r >= S || r === 32 && (S & 4194176) !== 0) ? t : u;
      }
      function H(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
      }
      function G(e, t) {
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
      function L() {
        var e = su;
        return su <<= 1, (su & 4194176) === 0 && (su = 128), e;
      }
      function W() {
        var e = du;
        return du <<= 1, (du & 62914560) === 0 && (du = 4194304), e;
      }
      function q(e) {
        for (var t = [], a = 0; 31 > a; a++) t.push(e);
        return t;
      }
      function ae(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
      }
      function O(e, t, a, u, r, h) {
        var S = e.pendingLanes;
        e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
        var M = e.entanglements, B = e.expirationTimes, k = e.hiddenUpdates;
        for (a = S & ~a; 0 < a; ) {
          var re = 31 - oa(a), se = 1 << re;
          M[re] = 0, B[re] = -1;
          var pe = k[re];
          if (pe !== null)
            for (k[re] = null, re = 0; re < pe.length; re++) {
              var Ye = pe[re];
              Ye !== null && (Ye.lane &= -536870913);
            }
          a &= ~se;
        }
        u !== 0 && X(e, u, 0), h !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= h & ~(S & ~t));
      }
      function X(e, t, a) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var u = 31 - oa(t);
        e.entangledLanes |= t, e.entanglements[u] = e.entanglements[u] | 1073741824 | a & 4194218;
      }
      function Y(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a; ) {
          var u = 31 - oa(a), r = 1 << u;
          r & t | e[u] & t && (e[u] |= t), a &= ~r;
        }
      }
      function le(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function j(e) {
        if (fa && typeof fa.onCommitFiberRoot == "function")
          try {
            fa.onCommitFiberRoot(
              Ri,
              e,
              void 0,
              (e.current.flags & 128) === 128
            );
          } catch {
          }
      }
      function P(e) {
        if (typeof Xh == "function" && Qh(e), fa && typeof fa.setStrictMode == "function")
          try {
            fa.setStrictMode(Ri, e);
          } catch {
          }
      }
      function ee(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
      }
      function Z(e, t) {
        if (typeof e == "object" && e !== null) {
          var a = bc.get(e);
          return a !== void 0 ? a : (t = {
            value: e,
            source: t,
            stack: v(t)
          }, bc.set(e, t), t);
        }
        return {
          value: e,
          source: t,
          stack: v(t)
        };
      }
      function w(e, t) {
        Hl[Vl++] = pu, Hl[Vl++] = vu, vu = e, pu = t;
      }
      function T(e, t, a) {
        ga[Sa++] = en, ga[Sa++] = tn, ga[Sa++] = el, el = e;
        var u = en;
        e = tn;
        var r = 32 - oa(u) - 1;
        u &= ~(1 << r), a += 1;
        var h = 32 - oa(t) + r;
        if (30 < h) {
          var S = r - r % 5;
          h = (u & (1 << S) - 1).toString(32), u >>= S, r -= S, en = 1 << 32 - oa(t) + r | a << r | u, tn = h + e;
        } else
          en = 1 << h | a << r | u, tn = e;
      }
      function A(e) {
        e.return !== null && (w(e, 1), T(e, 1, 0));
      }
      function V(e) {
        for (; e === vu; )
          vu = Hl[--Vl], Hl[Vl] = null, pu = Hl[--Vl], Hl[Vl] = null;
        for (; e === el; )
          el = ga[--Sa], ga[Sa] = null, tn = ga[--Sa], ga[Sa] = null, en = ga[--Sa], ga[Sa] = null;
      }
      function Q(e, t) {
        b(bn, t), b(Oi, e), b(Vt, null), e = Ud(t), U(Vt), b(Vt, e);
      }
      function K() {
        U(Vt), U(Oi), U(bn);
      }
      function ne(e) {
        e.memoizedState !== null && b(mu, e);
        var t = Vt.current, a = Md(t, e.type);
        t !== a && (b(Oi, e), b(Vt, a));
      }
      function I(e) {
        Oi.current === e && (U(Vt), U(Oi)), mu.current === e && (U(mu), $a ? $n._currentValue = Bl : $n._currentValue2 = Bl);
      }
      function te(e) {
        var t = Error(i(418, ""));
        throw Be(Z(t, e)), Fr;
      }
      function de(e, t) {
        if (!ma) throw Error(i(175));
        gh(
          e.stateNode,
          e.type,
          e.memoizedProps,
          t,
          e
        ) || te(e);
      }
      function Se(e) {
        for (Jt = e.return; Jt; )
          switch (Jt.tag) {
            case 3:
            case 27:
              ja = !0;
              return;
            case 5:
            case 13:
              ja = !1;
              return;
            default:
              Jt = Jt.return;
          }
      }
      function oe(e) {
        if (!ma || e !== Jt) return !1;
        if (!Pe) return Se(e), Pe = !0, !1;
        var t = !1;
        if (Ft ? e.tag !== 3 && e.tag !== 27 && (e.tag !== 5 || cc(e.type) && !cu(e.type, e.memoizedProps)) && (t = !0) : e.tag !== 3 && (e.tag !== 5 || cc(e.type) && !cu(e.type, e.memoizedProps)) && (t = !0), t && Kt && te(e), Se(e), e.tag === 13) {
          if (!ma) throw Error(i(316));
          if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
          Kt = bh(e);
        } else
          Kt = Jt ? oc(e.stateNode) : null;
        return !0;
      }
      function ie() {
        ma && (Kt = Jt = null, Pe = !1);
      }
      function Be(e) {
        Na === null ? Na = [e] : Na.push(e);
      }
      function Ce() {
        for (var e = Ll, t = Kr = Ll = 0; t < e; ) {
          var a = Ea[t];
          Ea[t++] = null;
          var u = Ea[t];
          Ea[t++] = null;
          var r = Ea[t];
          Ea[t++] = null;
          var h = Ea[t];
          if (Ea[t++] = null, u !== null && r !== null) {
            var S = u.pending;
            S === null ? r.next = r : (r.next = S.next, S.next = r), u.pending = r;
          }
          h !== 0 && fe(a, r, h);
        }
      }
      function me(e, t, a, u) {
        Ea[Ll++] = e, Ea[Ll++] = t, Ea[Ll++] = a, Ea[Ll++] = u, Kr |= u, e.lanes |= u, e = e.alternate, e !== null && (e.lanes |= u);
      }
      function Ee(e, t, a, u) {
        return me(e, t, a, u), ge(e);
      }
      function be(e, t) {
        return me(e, null, null, t), ge(e);
      }
      function fe(e, t, a) {
        e.lanes |= a;
        var u = e.alternate;
        u !== null && (u.lanes |= a);
        for (var r = !1, h = e.return; h !== null; )
          h.childLanes |= a, u = h.alternate, u !== null && (u.childLanes |= a), h.tag === 22 && (e = h.stateNode, e === null || e._visibility & 1 || (r = !0)), e = h, h = h.return;
        r && t !== null && e.tag === 3 && (h = e.stateNode, r = 31 - oa(a), h = h.hiddenUpdates, e = h[r], e === null ? h[r] = [t] : e.push(t), t.lane = a | 536870912);
      }
      function ge(e) {
        if (50 < Li)
          throw Li = 0, ro = null, Error(i(185));
        for (var t = e.return; t !== null; )
          e = t, t = e.return;
        return e.tag === 3 ? e.stateNode : null;
      }
      function ve(e) {
        e !== Yl && e.next === null && (Yl === null ? yu = Yl = e : Yl = Yl.next = e), gu = !0, Zr || (Zr = !0, We(Ve));
      }
      function $(e, t) {
        if (!wr && gu) {
          wr = !0;
          do
            for (var a = !1, u = yu; u !== null; ) {
              if (e !== 0) {
                var r = u.pendingLanes;
                if (r === 0) var h = 0;
                else {
                  var S = u.suspendedLanes, M = u.pingedLanes;
                  h = (1 << 31 - oa(42 | e) + 1) - 1, h &= r & ~(S & ~M), h = h & 201326677 ? h & 201326677 | 1 : h ? h | 2 : 0;
                }
                h !== 0 && (a = !0, he(u, h));
              } else
                h = we, h = x(
                  u,
                  u === st ? h : 0
                ), (h & 3) === 0 || H(u, h) || (a = !0, he(u, h));
              u = u.next;
            }
          while (a);
          wr = !1;
        }
      }
      function Ve() {
        gu = Zr = !1;
        var e = 0;
        ql !== 0 && (Nd() && (e = ql), ql = 0);
        for (var t = xa(), a = null, u = yu; u !== null; ) {
          var r = u.next, h = ye(u, t);
          h === 0 ? (u.next = null, a === null ? yu = r : a.next = r, r === null && (Yl = a)) : (a = u, (e !== 0 || (h & 3) !== 0) && (gu = !0)), u = r;
        }
        $(e);
      }
      function ye(e, t) {
        for (var a = e.suspendedLanes, u = e.pingedLanes, r = e.expirationTimes, h = e.pendingLanes & -62914561; 0 < h; ) {
          var S = 31 - oa(h), M = 1 << S, B = r[S];
          B === -1 ? ((M & a) === 0 || (M & u) !== 0) && (r[S] = G(M, t)) : B <= t && (e.expiredLanes |= M), h &= ~M;
        }
        if (t = st, a = we, a = x(
          e,
          e === t ? a : 0
        ), u = e.callbackNode, a === 0 || e === t && dt === 2 || e.cancelPendingCommit !== null)
          return u !== null && u !== null && Xr(u), e.callbackNode = null, e.callbackPriority = 0;
        if ((a & 3) === 0 || H(e, a)) {
          if (t = a & -a, t === e.callbackPriority) return t;
          switch (u !== null && Xr(u), le(a)) {
            case 2:
            case 8:
              a = Yh;
              break;
            case 32:
              a = Qr;
              break;
            case 268435456:
              a = qh;
              break;
            default:
              a = Qr;
          }
          return u = Ue.bind(null, e), a = hu(a, u), e.callbackPriority = t, e.callbackNode = a, t;
        }
        return u !== null && u !== null && Xr(u), e.callbackPriority = 2, e.callbackNode = null, 2;
      }
      function Ue(e, t) {
        var a = e.callbackNode;
        if (Pn() && e.callbackNode !== a)
          return null;
        var u = we;
        return u = x(
          e,
          e === st ? u : 0
        ), u === 0 ? null : (Uf(e, u, t), ye(e, xa()), e.callbackNode != null && e.callbackNode === a ? Ue.bind(null, e) : null);
      }
      function he(e, t) {
        if (Pn()) return null;
        Uf(e, t, !0);
      }
      function We(e) {
        Ld ? Yd(function() {
          (ot & 6) !== 0 ? hu(Ec, e) : e();
        }) : hu(Ec, e);
      }
      function Te() {
        return ql === 0 && (ql = L()), ql;
      }
      function De(e, t) {
        if (zi === null) {
          var a = zi = [];
          Jr = 0, Xl = Te(), Ql = {
            status: "pending",
            value: void 0,
            then: function(u) {
              a.push(u);
            }
          };
        }
        return Jr++, t.then(Re, Re), t;
      }
      function Re() {
        if (--Jr === 0 && zi !== null) {
          Ql !== null && (Ql.status = "fulfilled");
          var e = zi;
          zi = null, Xl = 0, Ql = null;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
      }
      function Le(e, t) {
        var a = [], u = {
          status: "pending",
          value: null,
          reason: null,
          then: function(r) {
            a.push(r);
          }
        };
        return e.then(
          function() {
            u.status = "fulfilled", u.value = t;
            for (var r = 0; r < a.length; r++) (0, a[r])(t);
          },
          function(r) {
            for (u.status = "rejected", u.reason = r, r = 0; r < a.length; r++)
              (0, a[r])(void 0);
          }
        ), u;
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
      function ft(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null
        });
      }
      function Ge(e) {
        return { lane: e, tag: 0, payload: null, callback: null, next: null };
      }
      function je(e, t, a) {
        var u = e.updateQueue;
        if (u === null) return null;
        if (u = u.shared, (ot & 2) !== 0) {
          var r = u.pending;
          return r === null ? t.next = t : (t.next = r.next, r.next = t), u.pending = t, t = ge(e), fe(e, null, a), t;
        }
        return me(e, u, t, a), ge(e);
      }
      function Me(e, t, a) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194176) !== 0)) {
          var u = t.lanes;
          u &= e.pendingLanes, a |= u, t.lanes = a, Y(e, a);
        }
      }
      function ct(e, t) {
        var a = e.updateQueue, u = e.alternate;
        if (u !== null && (u = u.updateQueue, a === u)) {
          var r = null, h = null;
          if (a = a.firstBaseUpdate, a !== null) {
            do {
              var S = {
                lane: a.lane,
                tag: a.tag,
                payload: a.payload,
                callback: null,
                next: null
              };
              h === null ? r = h = S : h = h.next = S, a = a.next;
            } while (a !== null);
            h === null ? r = h = t : h = h.next = t;
          } else r = h = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: h,
            shared: u.shared,
            callbacks: u.callbacks
          }, e.updateQueue = a;
          return;
        }
        e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
      }
      function et() {
        if (Wr) {
          var e = Ql;
          if (e !== null) throw e;
        }
      }
      function _t(e, t, a, u) {
        Wr = !1;
        var r = e.updateQueue;
        Tn = !1;
        var h = r.firstBaseUpdate, S = r.lastBaseUpdate, M = r.shared.pending;
        if (M !== null) {
          r.shared.pending = null;
          var B = M, k = B.next;
          B.next = null, S === null ? h = k : S.next = k, S = B;
          var re = e.alternate;
          re !== null && (re = re.updateQueue, M = re.lastBaseUpdate, M !== S && (M === null ? re.firstBaseUpdate = k : M.next = k, re.lastBaseUpdate = B));
        }
        if (h !== null) {
          var se = r.baseState;
          S = 0, re = k = B = null, M = h;
          do {
            var pe = M.lane & -536870913, Ye = pe !== M.lane;
            if (Ye ? (we & pe) === pe : (u & pe) === pe) {
              pe !== 0 && pe === Xl && (Wr = !0), re !== null && (re = re.next = {
                lane: 0,
                tag: M.tag,
                payload: M.payload,
                callback: null,
                next: null
              });
              e: {
                var _a = e, Yi = M;
                pe = t;
                var fl = a;
                switch (Yi.tag) {
                  case 1:
                    if (_a = Yi.payload, typeof _a == "function") {
                      se = _a.call(
                        fl,
                        se,
                        pe
                      );
                      break e;
                    }
                    se = _a;
                    break e;
                  case 3:
                    _a.flags = _a.flags & -65537 | 128;
                  case 0:
                    if (_a = Yi.payload, pe = typeof _a == "function" ? _a.call(fl, se, pe) : _a, pe == null) break e;
                    se = Cr({}, se, pe);
                    break e;
                  case 2:
                    Tn = !0;
                }
              }
              pe = M.callback, pe !== null && (e.flags |= 64, Ye && (e.flags |= 8192), Ye = r.callbacks, Ye === null ? r.callbacks = [pe] : Ye.push(pe));
            } else
              Ye = {
                lane: pe,
                tag: M.tag,
                payload: M.payload,
                callback: M.callback,
                next: null
              }, re === null ? (k = re = Ye, B = se) : re = re.next = Ye, S |= pe;
            if (M = M.next, M === null) {
              if (M = r.shared.pending, M === null)
                break;
              Ye = M, M = Ye.next, Ye.next = null, r.lastBaseUpdate = Ye, r.shared.pending = null;
            }
          } while (!0);
          re === null && (B = se), r.baseState = B, r.firstBaseUpdate = k, r.lastBaseUpdate = re, h === null && (r.shared.lanes = 0), Mn |= S, e.lanes = S, e.memoizedState = se;
        }
      }
      function tt(e, t) {
        if (typeof e != "function")
          throw Error(i(191, e));
        e.call(t);
      }
      function Oe(e, t) {
        var a = e.callbacks;
        if (a !== null)
          for (e.callbacks = null, e = 0; e < a.length; e++)
            tt(a[e], t);
      }
      function Ze(e, t) {
        if (ca(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
          return !1;
        var a = Object.keys(e), u = Object.keys(t);
        if (a.length !== u.length) return !1;
        for (u = 0; u < a.length; u++) {
          var r = a[u];
          if (!Fh.call(t, r) || !ca(e[r], t[r]))
            return !1;
        }
        return !0;
      }
      function Ma(e) {
        return e = e.status, e === "fulfilled" || e === "rejected";
      }
      function Je() {
      }
      function Xe(e, t, a) {
        switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Je, Je), t = a), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, e === xi ? Error(i(483)) : e;
          default:
            if (typeof t.status == "string") t.then(Je, Je);
            else {
              if (e = st, e !== null && 100 < e.shellSuspendCounter)
                throw Error(i(482));
              e = t, e.status = "pending", e.then(
                function(u) {
                  if (t.status === "pending") {
                    var r = t;
                    r.status = "fulfilled", r.value = u;
                  }
                },
                function(u) {
                  if (t.status === "pending") {
                    var r = t;
                    r.status = "rejected", r.reason = u;
                  }
                }
              );
            }
            switch (t.status) {
              case "fulfilled":
                return t.value;
              case "rejected":
                throw e = t.reason, e === xi ? Error(i(483)) : e;
            }
            throw Fl = t, xi;
        }
      }
      function mt() {
        if (Fl === null) throw Error(i(459));
        var e = Fl;
        return Fl = null, e;
      }
      function at(e) {
        var t = Ni;
        return Ni += 1, Kl === null && (Kl = []), Xe(Kl, e, t);
      }
      function ze(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null;
      }
      function nt(e, t) {
        throw t.$$typeof === gd ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(
          i(
            31,
            e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
          )
        ));
      }
      function xt(e) {
        var t = e._init;
        return t(e._payload);
      }
      function Ct(e) {
        function t(F, N) {
          if (e) {
            var J = F.deletions;
            J === null ? (F.deletions = [N], F.flags |= 16) : J.push(N);
          }
        }
        function a(F, N) {
          if (!e) return null;
          for (; N !== null; )
            t(F, N), N = N.sibling;
          return null;
        }
        function u(F) {
          for (var N = /* @__PURE__ */ new Map(); F !== null; )
            F.key !== null ? N.set(F.key, F) : N.set(F.index, F), F = F.sibling;
          return N;
        }
        function r(F, N) {
          return F = yn(F, N), F.index = 0, F.sibling = null, F;
        }
        function h(F, N, J) {
          return F.index = J, e ? (J = F.alternate, J !== null ? (J = J.index, J < N ? (F.flags |= 33554434, N) : J) : (F.flags |= 33554434, N)) : (F.flags |= 1048576, N);
        }
        function S(F) {
          return e && F.alternate === null && (F.flags |= 33554434), F;
        }
        function M(F, N, J, ue) {
          return N === null || N.tag !== 6 ? (N = Mr(J, F.mode, ue), N.return = F, N) : (N = r(N, J), N.return = F, N);
        }
        function B(F, N, J, ue) {
          var Ae = J.type;
          return Ae === Nl ? re(
            F,
            N,
            J.props.children,
            ue,
            J.key
          ) : N !== null && (N.elementType === Ae || typeof Ae == "object" && Ae !== null && Ae.$$typeof === Sn && xt(Ae) === N.type) ? (N = r(N, J.props), ze(N, J), N.return = F, N) : (N = ru(
            J.type,
            J.key,
            J.props,
            null,
            F.mode,
            ue
          ), ze(N, J), N.return = F, N);
        }
        function k(F, N, J, ue) {
          return N === null || N.tag !== 4 || N.stateNode.containerInfo !== J.containerInfo || N.stateNode.implementation !== J.implementation ? (N = Dr(J, F.mode, ue), N.return = F, N) : (N = r(N, J.children || []), N.return = F, N);
        }
        function re(F, N, J, ue, Ae) {
          return N === null || N.tag !== 7 ? (N = kn(
            J,
            F.mode,
            ue,
            Ae
          ), N.return = F, N) : (N = r(N, J), N.return = F, N);
        }
        function se(F, N, J) {
          if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
            return N = Mr(
              "" + N,
              F.mode,
              J
            ), N.return = F, N;
          if (typeof N == "object" && N !== null) {
            switch (N.$$typeof) {
              case ou:
                return J = ru(
                  N.type,
                  N.key,
                  N.props,
                  null,
                  F.mode,
                  J
                ), ze(J, N), J.return = F, J;
              case xl:
                return N = Dr(
                  N,
                  F.mode,
                  J
                ), N.return = F, N;
              case Sn:
                var ue = N._init;
                return N = ue(N._payload), se(F, N, J);
            }
            if (fu(N) || n(N))
              return N = kn(
                N,
                F.mode,
                J,
                null
              ), N.return = F, N;
            if (typeof N.then == "function")
              return se(F, at(N), J);
            if (N.$$typeof === gn)
              return se(
                F,
                tu(F, N),
                J
              );
            nt(F, N);
          }
          return null;
        }
        function pe(F, N, J, ue) {
          var Ae = N !== null ? N.key : null;
          if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
            return Ae !== null ? null : M(F, N, "" + J, ue);
          if (typeof J == "object" && J !== null) {
            switch (J.$$typeof) {
              case ou:
                return J.key === Ae ? B(F, N, J, ue) : null;
              case xl:
                return J.key === Ae ? k(F, N, J, ue) : null;
              case Sn:
                return Ae = J._init, J = Ae(J._payload), pe(F, N, J, ue);
            }
            if (fu(J) || n(J))
              return Ae !== null ? null : re(F, N, J, ue, null);
            if (typeof J.then == "function")
              return pe(
                F,
                N,
                at(J),
                ue
              );
            if (J.$$typeof === gn)
              return pe(
                F,
                N,
                tu(F, J),
                ue
              );
            nt(F, J);
          }
          return null;
        }
        function Ye(F, N, J, ue, Ae) {
          if (typeof ue == "string" && ue !== "" || typeof ue == "number" || typeof ue == "bigint")
            return F = F.get(J) || null, M(N, F, "" + ue, Ae);
          if (typeof ue == "object" && ue !== null) {
            switch (ue.$$typeof) {
              case ou:
                return F = F.get(
                  ue.key === null ? J : ue.key
                ) || null, B(N, F, ue, Ae);
              case xl:
                return F = F.get(
                  ue.key === null ? J : ue.key
                ) || null, k(N, F, ue, Ae);
              case Sn:
                var ht = ue._init;
                return ue = ht(ue._payload), Ye(
                  F,
                  N,
                  J,
                  ue,
                  Ae
                );
            }
            if (fu(ue) || n(ue))
              return F = F.get(J) || null, re(N, F, ue, Ae, null);
            if (typeof ue.then == "function")
              return Ye(
                F,
                N,
                J,
                at(ue),
                Ae
              );
            if (ue.$$typeof === gn)
              return Ye(
                F,
                N,
                J,
                tu(N, ue),
                Ae
              );
            nt(N, ue);
          }
          return null;
        }
        function _a(F, N, J, ue) {
          for (var Ae = null, ht = null, xe = N, ke = N = 0, jt = null; xe !== null && ke < J.length; ke++) {
            xe.index > ke ? (jt = xe, xe = null) : jt = xe.sibling;
            var Ie = pe(
              F,
              xe,
              J[ke],
              ue
            );
            if (Ie === null) {
              xe === null && (xe = jt);
              break;
            }
            e && xe && Ie.alternate === null && t(F, xe), N = h(Ie, N, ke), ht === null ? Ae = Ie : ht.sibling = Ie, ht = Ie, xe = jt;
          }
          if (ke === J.length)
            return a(F, xe), Pe && w(F, ke), Ae;
          if (xe === null) {
            for (; ke < J.length; ke++)
              xe = se(F, J[ke], ue), xe !== null && (N = h(
                xe,
                N,
                ke
              ), ht === null ? Ae = xe : ht.sibling = xe, ht = xe);
            return Pe && w(F, ke), Ae;
          }
          for (xe = u(xe); ke < J.length; ke++)
            jt = Ye(
              xe,
              F,
              ke,
              J[ke],
              ue
            ), jt !== null && (e && jt.alternate !== null && xe.delete(
              jt.key === null ? ke : jt.key
            ), N = h(
              jt,
              N,
              ke
            ), ht === null ? Ae = jt : ht.sibling = jt, ht = jt);
          return e && xe.forEach(function(An) {
            return t(F, An);
          }), Pe && w(F, ke), Ae;
        }
        function Yi(F, N, J, ue) {
          if (J == null) throw Error(i(151));
          for (var Ae = null, ht = null, xe = N, ke = N = 0, jt = null, Ie = J.next(); xe !== null && !Ie.done; ke++, Ie = J.next()) {
            xe.index > ke ? (jt = xe, xe = null) : jt = xe.sibling;
            var An = pe(F, xe, Ie.value, ue);
            if (An === null) {
              xe === null && (xe = jt);
              break;
            }
            e && xe && An.alternate === null && t(F, xe), N = h(An, N, ke), ht === null ? Ae = An : ht.sibling = An, ht = An, xe = jt;
          }
          if (Ie.done)
            return a(F, xe), Pe && w(F, ke), Ae;
          if (xe === null) {
            for (; !Ie.done; ke++, Ie = J.next())
              Ie = se(F, Ie.value, ue), Ie !== null && (N = h(
                Ie,
                N,
                ke
              ), ht === null ? Ae = Ie : ht.sibling = Ie, ht = Ie);
            return Pe && w(F, ke), Ae;
          }
          for (xe = u(xe); !Ie.done; ke++, Ie = J.next())
            Ie = Ye(
              xe,
              F,
              ke,
              Ie.value,
              ue
            ), Ie !== null && (e && Ie.alternate !== null && xe.delete(Ie.key === null ? ke : Ie.key), N = h(Ie, N, ke), ht === null ? Ae = Ie : ht.sibling = Ie, ht = Ie);
          return e && xe.forEach(function(kh) {
            return t(F, kh);
          }), Pe && w(F, ke), Ae;
        }
        function fl(F, N, J, ue) {
          if (typeof J == "object" && J !== null && J.type === Nl && J.key === null && (J = J.props.children), typeof J == "object" && J !== null) {
            switch (J.$$typeof) {
              case ou:
                e: {
                  for (var Ae = J.key; N !== null; ) {
                    if (N.key === Ae) {
                      if (Ae = J.type, Ae === Nl) {
                        if (N.tag === 7) {
                          a(
                            F,
                            N.sibling
                          ), ue = r(
                            N,
                            J.props.children
                          ), ue.return = F, F = ue;
                          break e;
                        }
                      } else if (N.elementType === Ae || typeof Ae == "object" && Ae !== null && Ae.$$typeof === Sn && xt(Ae) === N.type) {
                        a(
                          F,
                          N.sibling
                        ), ue = r(N, J.props), ze(ue, J), ue.return = F, F = ue;
                        break e;
                      }
                      a(F, N);
                      break;
                    } else t(F, N);
                    N = N.sibling;
                  }
                  J.type === Nl ? (ue = kn(
                    J.props.children,
                    F.mode,
                    ue,
                    J.key
                  ), ue.return = F, F = ue) : (ue = ru(
                    J.type,
                    J.key,
                    J.props,
                    null,
                    F.mode,
                    ue
                  ), ze(ue, J), ue.return = F, F = ue);
                }
                return S(F);
              case xl:
                e: {
                  for (Ae = J.key; N !== null; ) {
                    if (N.key === Ae)
                      if (N.tag === 4 && N.stateNode.containerInfo === J.containerInfo && N.stateNode.implementation === J.implementation) {
                        a(
                          F,
                          N.sibling
                        ), ue = r(
                          N,
                          J.children || []
                        ), ue.return = F, F = ue;
                        break e;
                      } else {
                        a(F, N);
                        break;
                      }
                    else t(F, N);
                    N = N.sibling;
                  }
                  ue = Dr(J, F.mode, ue), ue.return = F, F = ue;
                }
                return S(F);
              case Sn:
                return Ae = J._init, J = Ae(J._payload), fl(
                  F,
                  N,
                  J,
                  ue
                );
            }
            if (fu(J))
              return _a(
                F,
                N,
                J,
                ue
              );
            if (n(J)) {
              if (Ae = n(J), typeof Ae != "function")
                throw Error(i(150));
              return J = Ae.call(J), Yi(
                F,
                N,
                J,
                ue
              );
            }
            if (typeof J.then == "function")
              return fl(
                F,
                N,
                at(J),
                ue
              );
            if (J.$$typeof === gn)
              return fl(
                F,
                N,
                tu(F, J),
                ue
              );
            nt(F, J);
          }
          return typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint" ? (J = "" + J, N !== null && N.tag === 6 ? (a(F, N.sibling), ue = r(N, J), ue.return = F, F = ue) : (a(F, N), ue = Mr(J, F.mode, ue), ue.return = F, F = ue), S(F)) : a(F, N);
        }
        return function(F, N, J, ue) {
          try {
            Ni = 0;
            var Ae = fl(
              F,
              N,
              J,
              ue
            );
            return Kl = null, Ae;
          } catch (xe) {
            if (xe === xi) throw xe;
            var ht = p(29, xe, null, F.mode);
            return ht.lanes = ue, ht.return = F, ht;
          } finally {
          }
        };
      }
      function gt(e, t) {
        e = un, b(Eu, e), b(Zl, t), un = e | t.baseLanes;
      }
      function Zt() {
        b(Eu, un), b(Zl, Zl.current);
      }
      function ha() {
        un = Eu.current, U(Zl), U(Eu);
      }
      function Nt(e) {
        var t = e.alternate;
        b(zt, zt.current & 1), b(ba, e), Ha === null && (t === null || Zl.current !== null || t.memoizedState !== null) && (Ha = e);
      }
      function Da(e) {
        if (e.tag === 22) {
          if (b(zt, zt.current), b(ba, e), Ha === null) {
            var t = e.alternate;
            t !== null && t.memoizedState !== null && (Ha = e);
          }
        } else Yt();
      }
      function Yt() {
        b(zt, zt.current), b(ba, ba.current);
      }
      function Rt(e) {
        U(ba), Ha === e && (Ha = null), U(zt);
      }
      function Ut(e) {
        for (var t = e; t !== null; ) {
          if (t.tag === 13) {
            var a = t.memoizedState;
            if (a !== null && (a = a.dehydrated, a === null || Vr(a) || Lr(a)))
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
        throw Error(i(321));
      }
      function vl(e, t) {
        if (t === null) return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
          if (!ca(e[a], t[a])) return !1;
        return !0;
      }
      function Rn(e, t, a, u, r, h) {
        return _n = h, Qe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, He.H = e === null || e.memoizedState === null ? nl : Un, al = !1, h = a(u, r), al = !1, wl && (h = ii(
          t,
          a,
          u,
          r
        )), Wi(e), h;
      }
      function Wi(e) {
        He.H = Va;
        var t = rt !== null && rt.next !== null;
        if (_n = 0, Dt = rt = Qe = null, bu = !1, Bi = 0, Jl = null, t) throw Error(i(300));
        e === null || Bt || (e = e.dependencies, e !== null && eu(e) && (Bt = !0));
      }
      function ii(e, t, a, u) {
        Qe = e;
        var r = 0;
        do {
          if (wl && (Jl = null), Bi = 0, wl = !1, 25 <= r) throw Error(i(301));
          if (r += 1, Dt = rt = null, e.updateQueue != null) {
            var h = e.updateQueue;
            h.lastEffect = null, h.events = null, h.stores = null, h.memoCache != null && (h.memoCache.index = 0);
          }
          He.H = ll, h = t(a, u);
        } while (wl);
        return h;
      }
      function pl() {
        var e = He.H, t = e.useState()[0];
        return t = typeof t.then == "function" ? Ya(t) : t, e = e.useState()[0], (rt !== null ? rt.memoizedState : null) !== e && (Qe.flags |= 1024), t;
      }
      function On() {
        var e = Tu !== 0;
        return Tu = 0, e;
      }
      function ui(e, t, a) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
      }
      function ml(e) {
        if (bu) {
          for (e = e.memoizedState; e !== null; ) {
            var t = e.queue;
            t !== null && (t.pending = null), e = e.next;
          }
          bu = !1;
        }
        _n = 0, Dt = rt = Qe = null, wl = !1, Bi = Tu = 0, Jl = null;
      }
      function Ot() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return Dt === null ? Qe.memoizedState = Dt = e : Dt = Dt.next = e, Dt;
      }
      function vt() {
        if (rt === null) {
          var e = Qe.alternate;
          e = e !== null ? e.memoizedState : null;
        } else e = rt.next;
        var t = Dt === null ? Qe.memoizedState : Dt.next;
        if (t !== null)
          Dt = t, rt = e;
        else {
          if (e === null)
            throw Qe.alternate === null ? Error(i(467)) : Error(i(310));
          rt = e, e = {
            memoizedState: rt.memoizedState,
            baseState: rt.baseState,
            baseQueue: rt.baseQueue,
            queue: rt.queue,
            next: null
          }, Dt === null ? Qe.memoizedState = Dt = e : Dt = Dt.next = e;
        }
        return Dt;
      }
      function Ya(e) {
        var t = Bi;
        return Bi += 1, Jl === null && (Jl = []), e = Xe(Jl, e, t), t = Qe, (Dt === null ? t.memoizedState : Dt.next) === null && (t = t.alternate, He.H = t === null || t.memoizedState === null ? nl : Un), e;
      }
      function _e(e) {
        if (e !== null && typeof e == "object") {
          if (typeof e.then == "function") return Ya(e);
          if (e.$$typeof === gn) return Xt(e);
        }
        throw Error(i(438, String(e)));
      }
      function qa(e) {
        var t = null, a = Qe.updateQueue;
        if (a !== null && (t = a.memoCache), t == null) {
          var u = Qe.alternate;
          u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
            data: u.data.map(function(r) {
              return r.slice();
            }),
            index: 0
          })));
        }
        if (t == null && (t = { data: [], index: 0 }), a === null && (a = kr(), Qe.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
          for (a = t.data[t.index] = Array(e), u = 0; u < e; u++)
            a[u] = Ed;
        return t.index++, a;
      }
      function Aa(e, t) {
        return typeof t == "function" ? t(e) : t;
      }
      function Ca(e) {
        var t = vt();
        return on(t, rt, e);
      }
      function on(e, t, a) {
        var u = e.queue;
        if (u === null) throw Error(i(311));
        u.lastRenderedReducer = a;
        var r = e.baseQueue, h = u.pending;
        if (h !== null) {
          if (r !== null) {
            var S = r.next;
            r.next = h.next, h.next = S;
          }
          t.baseQueue = r = h, u.pending = null;
        }
        if (h = e.baseState, r === null) e.memoizedState = h;
        else {
          t = r.next;
          var M = S = null, B = null, k = t, re = !1;
          do {
            var se = k.lane & -536870913;
            if (se !== k.lane ? (we & se) === se : (_n & se) === se) {
              var pe = k.revertLane;
              if (pe === 0)
                B !== null && (B = B.next = {
                  lane: 0,
                  revertLane: 0,
                  action: k.action,
                  hasEagerState: k.hasEagerState,
                  eagerState: k.eagerState,
                  next: null
                }), se === Xl && (re = !0);
              else if ((_n & pe) === pe) {
                k = k.next, pe === Xl && (re = !0);
                continue;
              } else
                se = {
                  lane: 0,
                  revertLane: k.revertLane,
                  action: k.action,
                  hasEagerState: k.hasEagerState,
                  eagerState: k.eagerState,
                  next: null
                }, B === null ? (M = B = se, S = h) : B = B.next = se, Qe.lanes |= pe, Mn |= pe;
              se = k.action, al && a(h, se), h = k.hasEagerState ? k.eagerState : a(h, se);
            } else
              pe = {
                lane: se,
                revertLane: k.revertLane,
                action: k.action,
                hasEagerState: k.hasEagerState,
                eagerState: k.eagerState,
                next: null
              }, B === null ? (M = B = pe, S = h) : B = B.next = pe, Qe.lanes |= se, Mn |= se;
            k = k.next;
          } while (k !== null && k !== t);
          if (B === null ? S = h : B.next = M, !ca(h, e.memoizedState) && (Bt = !0, re && (a = Ql, a !== null)))
            throw a;
          e.memoizedState = h, e.baseState = S, e.baseQueue = B, u.lastRenderedState = h;
        }
        return r === null && (u.lanes = 0), [e.memoizedState, u.dispatch];
      }
      function yl(e) {
        var t = vt(), a = t.queue;
        if (a === null) throw Error(i(311));
        a.lastRenderedReducer = e;
        var u = a.dispatch, r = a.pending, h = t.memoizedState;
        if (r !== null) {
          a.pending = null;
          var S = r = r.next;
          do
            h = e(h, S.action), S = S.next;
          while (S !== r);
          ca(h, t.memoizedState) || (Bt = !0), t.memoizedState = h, t.baseQueue === null && (t.baseState = h), a.lastRenderedState = h;
        }
        return [h, u];
      }
      function gl(e, t, a) {
        var u = Qe, r = vt(), h = Pe;
        if (h) {
          if (a === void 0)
            throw Error(i(407));
          a = a();
        } else a = t();
        var S = !ca(
          (rt || r).memoizedState,
          a
        );
        if (S && (r.memoizedState = a, Bt = !0), r = r.queue, Qa(ri.bind(null, u, r, e), [
          e
        ]), r.getSnapshot !== t || S || Dt !== null && Dt.memoizedState.tag & 1) {
          if (u.flags |= 2048, Ra(
            9,
            xn.bind(
              null,
              u,
              r,
              a,
              t
            ),
            { destroy: void 0 },
            null
          ), st === null) throw Error(i(349));
          h || (_n & 60) !== 0 || zn(u, t, a);
        }
        return a;
      }
      function zn(e, t, a) {
        e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Qe.updateQueue, t === null ? (t = kr(), Qe.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
      }
      function xn(e, t, a, u) {
        t.value = a, t.getSnapshot = u, Nn(t) && oi(e);
      }
      function ri(e, t, a) {
        return a(function() {
          Nn(t) && oi(e);
        });
      }
      function Nn(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var a = t();
          return !ca(e, a);
        } catch {
          return !0;
        }
      }
      function oi(e) {
        var t = be(e, 2);
        t !== null && wt(t, e, 2);
      }
      function Bn(e) {
        var t = Ot();
        if (typeof e == "function") {
          var a = e;
          if (e = a(), al) {
            P(!0);
            try {
              a();
            } finally {
              P(!1);
            }
          }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Aa,
          lastRenderedState: e
        }, t;
      }
      function fi(e, t, a, u) {
        return e.baseState = a, on(
          e,
          rt,
          typeof u == "function" ? u : Aa
        );
      }
      function Gn(e, t, a, u, r) {
        if (Kn(e)) throw Error(i(485));
        if (e = t.action, e !== null) {
          var h = {
            payload: r,
            action: e,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function(S) {
              h.listeners.push(S);
            }
          };
          He.T !== null ? a(!0) : h.isTransition = !1, u(h), a = t.pending, a === null ? (h.next = t.pending = h, Sl(t, h)) : (h.next = a.next, t.pending = a.next = h);
        }
      }
      function Sl(e, t) {
        var a = t.action, u = t.payload, r = e.state;
        if (t.isTransition) {
          var h = He.T, S = {};
          He.T = S;
          try {
            var M = a(r, u), B = He.S;
            B !== null && B(S, M), Xa(e, t, M);
          } catch (k) {
            jn(e, t, k);
          } finally {
            He.T = h;
          }
        } else
          try {
            h = a(r, u), Xa(e, t, h);
          } catch (k) {
            jn(e, t, k);
          }
      }
      function Xa(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
          function(u) {
            El(e, t, u);
          },
          function(u) {
            return jn(e, t, u);
          }
        ) : El(e, t, a);
      }
      function El(e, t, a) {
        t.status = "fulfilled", t.value = a, bl(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Sl(e, a)));
      }
      function jn(e, t, a) {
        var u = e.pending;
        if (e.pending = null, u !== null) {
          u = u.next;
          do
            t.status = "rejected", t.reason = a, bl(t), t = t.next;
          while (t !== u);
        }
        e.action = null;
      }
      function bl(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
      function aa(e, t) {
        return t;
      }
      function Pi(e, t) {
        if (Pe) {
          var a = st.formState;
          if (a !== null) {
            e: {
              var u = Qe;
              if (Pe) {
                if (Kt) {
                  var r = sh(
                    Kt,
                    ja
                  );
                  if (r) {
                    Kt = oc(r), u = dh(r);
                    break e;
                  }
                }
                te(u);
              }
              u = !1;
            }
            u && (t = a[0]);
          }
        }
        a = Ot(), a.memoizedState = a.baseState = t, u = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: aa,
          lastRenderedState: t
        }, a.queue = u, a = pi.bind(
          null,
          Qe,
          u
        ), u.dispatch = a, u = Bn(!1);
        var h = Ml.bind(
          null,
          Qe,
          !1,
          u.queue
        );
        return u = Ot(), r = {
          state: t,
          dispatch: null,
          action: e,
          pending: null
        }, u.queue = r, a = Gn.bind(
          null,
          Qe,
          r,
          h,
          a
        ), r.dispatch = a, u.memoizedState = e, [t, a, !1];
      }
      function Hn(e) {
        var t = vt();
        return fn(t, rt, e);
      }
      function fn(e, t, a) {
        t = on(
          e,
          t,
          aa
        )[0], e = Ca(Aa)[0], t = typeof t == "object" && t !== null && typeof t.then == "function" ? Ya(t) : t;
        var u = vt(), r = u.queue, h = r.dispatch;
        return a !== u.memoizedState && (Qe.flags |= 2048, Ra(
          9,
          ki.bind(null, r, a),
          { destroy: void 0 },
          null
        )), [t, h, e];
      }
      function ki(e, t) {
        e.action = t;
      }
      function Vn(e) {
        var t = vt(), a = rt;
        if (a !== null)
          return fn(t, a, e);
        vt(), t = t.memoizedState, a = vt();
        var u = a.queue.dispatch;
        return a.memoizedState = e, [t, u, !1];
      }
      function Ra(e, t, a, u) {
        return e = { tag: e, create: t, inst: a, deps: u, next: null }, t = Qe.updateQueue, t === null && (t = kr(), Qe.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (u = a.next, a.next = e, e.next = u, t.lastEffect = e), e;
      }
      function Tl() {
        return vt().memoizedState;
      }
      function Ln(e, t, a, u) {
        var r = Ot();
        Qe.flags |= e, r.memoizedState = Ra(
          1 | t,
          a,
          { destroy: void 0 },
          u === void 0 ? null : u
        );
      }
      function Yn(e, t, a, u) {
        var r = vt();
        u = u === void 0 ? null : u;
        var h = r.memoizedState.inst;
        rt !== null && u !== null && vl(u, rt.memoizedState.deps) ? r.memoizedState = Ra(t, a, h, u) : (Qe.flags |= e, r.memoizedState = Ra(1 | t, a, h, u));
      }
      function _l(e, t) {
        Ln(8390656, 8, e, t);
      }
      function Qa(e, t) {
        Yn(2048, 8, e, t);
      }
      function ci(e, t) {
        return Yn(4, 2, e, t);
      }
      function qn(e, t) {
        return Yn(4, 4, e, t);
      }
      function Fa(e, t) {
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
      function Ka(e, t, a) {
        a = a != null ? a.concat([e]) : null, Yn(
          4,
          4,
          Fa.bind(null, t, e),
          a
        );
      }
      function Za() {
      }
      function si(e, t) {
        var a = vt();
        t = t === void 0 ? null : t;
        var u = a.memoizedState;
        return t !== null && vl(t, u[1]) ? u[0] : (a.memoizedState = [e, t], e);
      }
      function cn(e, t) {
        var a = vt();
        t = t === void 0 ? null : t;
        var u = a.memoizedState;
        if (t !== null && vl(t, u[1]))
          return u[0];
        if (u = e(), al) {
          P(!0);
          try {
            e();
          } finally {
            P(!1);
          }
        }
        return a.memoizedState = [u, t], u;
      }
      function Xn(e, t, a) {
        return a === void 0 || (_n & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = _f(), Qe.lanes |= e, Mn |= e, a);
      }
      function Ul(e, t, a, u) {
        return ca(a, t) ? a : Zl.current !== null ? (e = Xn(e, a, u), ca(e, t) || (Bt = !0), e) : (_n & 42) === 0 ? (Bt = !0, e.memoizedState = a) : (e = _f(), Qe.lanes |= e, Mn |= e, t);
      }
      function di(e, t, a, u, r) {
        var h = In();
        ea(
          h !== 0 && 8 > h ? h : 8
        );
        var S = He.T, M = {};
        He.T = M, Ml(e, !1, t, a);
        try {
          var B = r(), k = He.S;
          if (k !== null && k(M, B), B !== null && typeof B == "object" && typeof B.then == "function") {
            var re = Le(
              B,
              u
            );
            wa(
              e,
              t,
              re,
              ua(e)
            );
          } else
            wa(
              e,
              t,
              u,
              ua(e)
            );
        } catch (se) {
          wa(
            e,
            t,
            { then: function() {
            }, status: "rejected", reason: se },
            ua()
          );
        } finally {
          ea(h), He.T = S;
        }
      }
      function Qn(e) {
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
            lastRenderedReducer: Aa,
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
            lastRenderedReducer: Aa,
            lastRenderedState: a
          },
          next: null
        }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
      }
      function Fn() {
        return Xt($n);
      }
      function hi() {
        return vt().memoizedState;
      }
      function kt() {
        return vt().memoizedState;
      }
      function vi(e) {
        for (var t = e.return; t !== null; ) {
          switch (t.tag) {
            case 24:
            case 3:
              var a = ua();
              e = Ge(a);
              var u = je(t, e, a);
              u !== null && (wt(u, t, a), Me(u, t, a)), t = { cache: lr() }, e.payload = t;
              return;
          }
          t = t.return;
        }
      }
      function Ii(e, t, a) {
        var u = ua();
        a = {
          lane: u,
          revertLane: 0,
          action: a,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Kn(e) ? sn(t, a) : (a = Ee(e, t, a, u), a !== null && (wt(a, e, u), dn(a, t, u)));
      }
      function pi(e, t, a) {
        var u = ua();
        wa(e, t, a, u);
      }
      function wa(e, t, a, u) {
        var r = {
          lane: u,
          revertLane: 0,
          action: a,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (Kn(e)) sn(t, r);
        else {
          var h = e.alternate;
          if (e.lanes === 0 && (h === null || h.lanes === 0) && (h = t.lastRenderedReducer, h !== null))
            try {
              var S = t.lastRenderedState, M = h(S, a);
              if (r.hasEagerState = !0, r.eagerState = M, ca(M, S))
                return me(e, t, r, 0), st === null && Ce(), !1;
            } catch {
            } finally {
            }
          if (a = Ee(e, t, r, u), a !== null)
            return wt(a, e, u), dn(a, t, u), !0;
        }
        return !1;
      }
      function Ml(e, t, a, u) {
        if (u = {
          lane: 2,
          revertLane: Te(),
          action: u,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Kn(e)) {
          if (t) throw Error(i(479));
        } else
          t = Ee(
            e,
            a,
            u,
            2
          ), t !== null && wt(t, e, 2);
      }
      function Kn(e) {
        var t = e.alternate;
        return e === Qe || t !== null && t === Qe;
      }
      function sn(e, t) {
        wl = bu = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
      }
      function dn(e, t, a) {
        if ((a & 4194176) !== 0) {
          var u = t.lanes;
          u &= e.pendingLanes, a |= u, t.lanes = a, Y(e, a);
        }
      }
      function va(e, t, a, u) {
        t = e.memoizedState, a = a(u, t), a = a == null ? t : Cr({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
      }
      function mi(e, t, a, u, r, h, S) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(u, h, S) : t.prototype && t.prototype.isPureReactComponent ? !Ze(a, u) || !Ze(r, h) : !0;
      }
      function Dl(e, t, a, u) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== e && Ir.enqueueReplaceState(t, t.state, null);
      }
      function Oa(e, t) {
        var a = t;
        if ("ref" in t) {
          a = {};
          for (var u in t)
            u !== "ref" && (a[u] = t[u]);
        }
        if (e = e.defaultProps) {
          a === t && (a = Cr({}, a));
          for (var r in e)
            a[r] === void 0 && (a[r] = e[r]);
        }
        return a;
      }
      function Ga(e, t) {
        try {
          var a = e.onUncaughtError;
          a(t.value, { componentStack: t.stack });
        } catch (u) {
          setTimeout(function() {
            throw u;
          });
        }
      }
      function yi(e, t, a) {
        try {
          var u = e.onCaughtError;
          u(a.value, {
            componentStack: a.stack,
            errorBoundary: t.tag === 1 ? t.stateNode : null
          });
        } catch (r) {
          setTimeout(function() {
            throw r;
          });
        }
      }
      function Ja(e, t, a) {
        return a = Ge(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
          Ga(e, t);
        }, a;
      }
      function Al(e) {
        return e = Ge(e), e.tag = 3, e;
      }
      function qt(e, t, a, u) {
        var r = a.type.getDerivedStateFromError;
        if (typeof r == "function") {
          var h = u.value;
          e.payload = function() {
            return r(h);
          }, e.callback = function() {
            yi(t, a, u);
          };
        }
        var S = a.stateNode;
        S !== null && typeof S.componentDidCatch == "function" && (e.callback = function() {
          yi(t, a, u), typeof r != "function" && (Dn === null ? Dn = /* @__PURE__ */ new Set([this]) : Dn.add(this));
          var M = u.stack;
          this.componentDidCatch(u.value, {
            componentStack: M !== null ? M : ""
          });
        });
      }
      function Ju(e, t, a, u, r) {
        if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          if (t = a.alternate, t !== null && Ei(
            t,
            a,
            r,
            !0
          ), a = ba.current, a !== null) {
            switch (a.tag) {
              case 13:
                return Ha === null ? br() : a.alternate === null && Tt === 0 && (Tt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = r, u === Su ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), _r(e, u, r)), !1;
              case 22:
                return a.flags |= 65536, u === Su ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([u])
                }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), _r(e, u, r)), !1;
            }
            throw Error(i(435, a.tag));
          }
          return _r(e, u, r), br(), !1;
        }
        if (Pe)
          return t = ba.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = r, u !== Fr && (e = Error(i(422), { cause: u }), Be(
            Z(e, a)
          ))) : (u !== Fr && (t = Error(i(423), {
            cause: u
          }), Be(
            Z(t, a)
          )), e = e.current.alternate, e.flags |= 65536, r &= -r, e.lanes |= r, u = Z(u, a), r = Ja(
            e.stateNode,
            u,
            r
          ), ct(e, r), Tt !== 4 && (Tt = 2)), !1;
        var h = Error(i(520), { cause: u });
        if (h = Z(h, a), ji === null ? ji = [h] : ji.push(h), Tt !== 4 && (Tt = 2), t === null) return !0;
        u = Z(u, a), a = t;
        do {
          switch (a.tag) {
            case 3:
              return a.flags |= 65536, e = r & -r, a.lanes |= e, e = Ja(a.stateNode, u, e), ct(a, e), !1;
            case 1:
              if (t = a.type, h = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Dn === null || !Dn.has(
                h
              ))))
                return a.flags |= 65536, r &= -r, a.lanes |= r, r = Al(r), qt(
                  r,
                  e,
                  a,
                  u
                ), ct(a, r), !1;
          }
          a = a.return;
        } while (a !== null);
        return !1;
      }
      function St(e, t, a, u) {
        t.child = e === null ? Tc(t, null, a, u) : tl(
          t,
          e.child,
          a,
          u
        );
      }
      function Zn(e, t, a, u, r) {
        a = a.render;
        var h = t.ref;
        if ("ref" in u) {
          var S = {};
          for (var M in u)
            M !== "ref" && (S[M] = u[M]);
        } else S = u;
        return wn(t), u = Rn(
          e,
          t,
          a,
          S,
          h,
          r
        ), M = On(), e !== null && !Bt ? (ui(e, t, r), Wa(e, t, r)) : (Pe && M && A(t), t.flags |= 1, St(e, t, u, r), t.child);
      }
      function gi(e, t, a, u, r) {
        if (e === null) {
          var h = a.type;
          return typeof h == "function" && !Ur(h) && h.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = h, $i(
            e,
            t,
            h,
            u,
            r
          )) : (e = ru(
            a.type,
            null,
            u,
            t,
            t.mode,
            r
          ), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (h = e.child, !tr(e, r)) {
          var S = h.memoizedProps;
          if (a = a.compare, a = a !== null ? a : Ze, a(S, u) && e.ref === t.ref)
            return Wa(
              e,
              t,
              r
            );
        }
        return t.flags |= 1, e = yn(h, u), e.ref = t.ref, e.return = t, t.child = e;
      }
      function $i(e, t, a, u, r) {
        if (e !== null) {
          var h = e.memoizedProps;
          if (Ze(h, u) && e.ref === t.ref)
            if (Bt = !1, t.pendingProps = u = h, tr(e, r))
              (e.flags & 131072) !== 0 && (Bt = !0);
            else
              return t.lanes = e.lanes, Wa(e, t, r);
        }
        return pa(
          e,
          t,
          a,
          u,
          r
        );
      }
      function Ht(e, t, a) {
        var u = t.pendingProps, r = u.children, h = (t.stateNode._pendingVisibility & 2) !== 0, S = e !== null ? e.memoizedState : null;
        if (Mt(e, t), u.mode === "hidden" || h) {
          if ((t.flags & 128) !== 0) {
            if (u = S !== null ? S.baseLanes | a : a, e !== null) {
              for (r = t.child = e.child, h = 0; r !== null; )
                h = h | r.lanes | r.childLanes, r = r.sibling;
              t.childLanes = h & ~u;
            } else t.childLanes = 0, t.child = null;
            return It(
              e,
              t,
              u,
              a
            );
          }
          if ((a & 536870912) !== 0)
            t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && au(
              t,
              S !== null ? S.cachePool : null
            ), S !== null ? gt(t, S) : Zt(), Da(t);
          else
            return t.lanes = t.childLanes = 536870912, It(
              e,
              t,
              S !== null ? S.baseLanes | a : a,
              a
            );
        } else
          S !== null ? (au(t, S.cachePool), gt(t, S), Yt(), t.memoizedState = null) : (e !== null && au(t, null), Zt(), Yt());
        return St(e, t, r, a), t.child;
      }
      function It(e, t, a, u) {
        var r = ir();
        return r = r === null ? null : {
          parent: $a ? Et._currentValue : Et._currentValue2,
          pool: r
        }, t.memoizedState = {
          baseLanes: a,
          cachePool: r
        }, e !== null && au(t, null), Zt(), Da(t), e !== null && Ei(e, t, u, !0), null;
      }
      function Mt(e, t) {
        var a = t.ref;
        if (a === null)
          e !== null && e.ref !== null && (t.flags |= 2097664);
        else {
          if (typeof a != "function" && typeof a != "object")
            throw Error(i(284));
          (e === null || e.ref !== a) && (t.flags |= 2097664);
        }
      }
      function pa(e, t, a, u, r) {
        return wn(t), a = Rn(
          e,
          t,
          a,
          u,
          void 0,
          r
        ), u = On(), e !== null && !Bt ? (ui(e, t, r), Wa(e, t, r)) : (Pe && u && A(t), t.flags |= 1, St(e, t, a, r), t.child);
      }
      function Si(e, t, a, u, r, h) {
        return wn(t), t.updateQueue = null, a = ii(
          t,
          u,
          a,
          r
        ), Wi(e), u = On(), e !== null && !Bt ? (ui(e, t, h), Wa(e, t, h)) : (Pe && u && A(t), t.flags |= 1, St(e, t, a, h), t.child);
      }
      function Zo(e, t, a, u, r) {
        if (wn(t), t.stateNode === null) {
          var h = jl, S = a.contextType;
          typeof S == "object" && S !== null && (h = Xt(S)), h = new a(u, h), t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, h.updater = Ir, t.stateNode = h, h._reactInternals = t, h = t.stateNode, h.props = u, h.state = t.memoizedState, h.refs = {}, $e(t), S = a.contextType, h.context = typeof S == "object" && S !== null ? Xt(S) : jl, h.state = t.memoizedState, S = a.getDerivedStateFromProps, typeof S == "function" && (va(
            t,
            a,
            S,
            u
          ), h.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (S = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), S !== h.state && Ir.enqueueReplaceState(
            h,
            h.state,
            null
          ), _t(t, u, h, r), et(), h.state = t.memoizedState), typeof h.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
        } else if (e === null) {
          h = t.stateNode;
          var M = t.memoizedProps, B = Oa(a, M);
          h.props = B;
          var k = h.context, re = a.contextType;
          S = jl, typeof re == "object" && re !== null && (S = Xt(re));
          var se = a.getDerivedStateFromProps;
          re = typeof se == "function" || typeof h.getSnapshotBeforeUpdate == "function", M = t.pendingProps !== M, re || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (M || k !== S) && Dl(
            t,
            h,
            u,
            S
          ), Tn = !1;
          var pe = t.memoizedState;
          h.state = pe, _t(t, u, h, r), et(), k = t.memoizedState, M || pe !== k || Tn ? (typeof se == "function" && (va(
            t,
            a,
            se,
            u
          ), k = t.memoizedState), (B = Tn || mi(
            t,
            a,
            B,
            u,
            pe,
            k,
            S
          )) ? (re || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = k), h.props = u, h.state = k, h.context = S, u = B) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
        } else {
          h = t.stateNode, ft(e, t), S = t.memoizedProps, re = Oa(a, S), h.props = re, se = t.pendingProps, pe = h.context, k = a.contextType, B = jl, typeof k == "object" && k !== null && (B = Xt(k)), M = a.getDerivedStateFromProps, (k = typeof M == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== se || pe !== B) && Dl(
            t,
            h,
            u,
            B
          ), Tn = !1, pe = t.memoizedState, h.state = pe, _t(t, u, h, r), et();
          var Ye = t.memoizedState;
          S !== se || pe !== Ye || Tn || e !== null && e.dependencies !== null && eu(e.dependencies) ? (typeof M == "function" && (va(
            t,
            a,
            M,
            u
          ), Ye = t.memoizedState), (re = Tn || mi(
            t,
            a,
            re,
            u,
            pe,
            Ye,
            B
          ) || e !== null && e.dependencies !== null && eu(e.dependencies)) ? (k || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(u, Ye, B), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(
            u,
            Ye,
            B
          )), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === e.memoizedProps && pe === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && pe === e.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = Ye), h.props = u, h.state = Ye, h.context = B, u = re) : (typeof h.componentDidUpdate != "function" || S === e.memoizedProps && pe === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && pe === e.memoizedState || (t.flags |= 1024), u = !1);
        }
        return h = u, Mt(e, t), u = (t.flags & 128) !== 0, h || u ? (h = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : h.render(), t.flags |= 1, e !== null && u ? (t.child = tl(
          t,
          e.child,
          null,
          r
        ), t.child = tl(
          t,
          null,
          a,
          r
        )) : St(e, t, a, r), t.memoizedState = h.state, e = t.child) : e = Wa(
          e,
          t,
          r
        ), e;
      }
      function wo(e, t, a, u) {
        return ie(), t.flags |= 256, St(e, t, a, u), t.child;
      }
      function Wu(e) {
        return { baseLanes: e, cachePool: $o() };
      }
      function Pu(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Ta), e;
      }
      function Jo(e, t, a) {
        var u = t.pendingProps, r = !1, h = (t.flags & 128) !== 0, S;
        if ((S = h) || (S = e !== null && e.memoizedState === null ? !1 : (zt.current & 2) !== 0), S && (r = !0, t.flags &= -129), S = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
          if (Pe) {
            if (r ? Nt(t) : Yt(), Pe) {
              var M = Kt, B;
              (B = M) && (M = yh(
                M,
                ja
              ), M !== null ? (t.memoizedState = {
                dehydrated: M,
                treeContext: el !== null ? { id: en, overflow: tn } : null,
                retryLane: 536870912
              }, B = p(18, null, null, 0), B.stateNode = M, B.return = t, t.child = B, Jt = t, Kt = null, B = !0) : B = !1), B || te(t);
            }
            if (M = t.memoizedState, M !== null && (M = M.dehydrated, M !== null))
              return Lr(M) ? t.lanes = 16 : t.lanes = 536870912, null;
            Rt(t);
          }
          return M = u.children, u = u.fallback, r ? (Yt(), r = t.mode, M = Iu(
            { mode: "hidden", children: M },
            r
          ), u = kn(
            u,
            r,
            a,
            null
          ), M.return = t, u.return = t, M.sibling = u, t.child = M, r = t.child, r.memoizedState = Wu(a), r.childLanes = Pu(
            e,
            S,
            a
          ), t.memoizedState = $r, u) : (Nt(t), ku(t, M));
        }
        if (B = e.memoizedState, B !== null && (M = B.dehydrated, M !== null)) {
          if (h)
            t.flags & 256 ? (Nt(t), t.flags &= -257, t = $u(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (Yt(), t.child = e.child, t.flags |= 128, t = null) : (Yt(), r = u.fallback, M = t.mode, u = Iu(
              { mode: "visible", children: u.children },
              M
            ), r = kn(
              r,
              M,
              a,
              null
            ), r.flags |= 2, u.return = t, r.return = t, u.sibling = r, t.child = u, tl(
              t,
              e.child,
              null,
              a
            ), u = t.child, u.memoizedState = Wu(a), u.childLanes = Pu(
              e,
              S,
              a
            ), t.memoizedState = $r, t = r);
          else if (Nt(t), Lr(M))
            S = fh(M).digest, u = Error(i(419)), u.stack = "", u.digest = S, Be({ value: u, source: null, stack: null }), t = $u(
              e,
              t,
              a
            );
          else if (Bt || Ei(
            e,
            t,
            a,
            !1
          ), S = (a & e.childLanes) !== 0, Bt || S) {
            if (S = st, S !== null) {
              if (u = a & -a, (u & 42) !== 0) u = 1;
              else
                switch (u) {
                  case 2:
                    u = 1;
                    break;
                  case 8:
                    u = 4;
                    break;
                  case 32:
                    u = 16;
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
                    u = 64;
                    break;
                  case 268435456:
                    u = 134217728;
                    break;
                  default:
                    u = 0;
                }
              if (u = (u & (S.suspendedLanes | a)) !== 0 ? 0 : u, u !== 0 && u !== B.retryLane)
                throw B.retryLane = u, be(e, u), wt(S, e, u), Uc;
            }
            Vr(M) || br(), t = $u(
              e,
              t,
              a
            );
          } else
            Vr(M) ? (t.flags |= 128, t.child = e.child, t = dd.bind(
              null,
              e
            ), ch(M, t), t = null) : (e = B.treeContext, ma && (Kt = vh(M), Jt = t, Pe = !0, Na = null, ja = !1, e !== null && (ga[Sa++] = en, ga[Sa++] = tn, ga[Sa++] = el, en = e.id, tn = e.overflow, el = t)), t = ku(
              t,
              u.children
            ), t.flags |= 4096);
          return t;
        }
        return r ? (Yt(), r = u.fallback, M = t.mode, B = e.child, h = B.sibling, u = yn(B, {
          mode: "hidden",
          children: u.children
        }), u.subtreeFlags = B.subtreeFlags & 31457280, h !== null ? r = yn(h, r) : (r = kn(
          r,
          M,
          a,
          null
        ), r.flags |= 2), r.return = t, u.return = t, u.sibling = r, t.child = u, u = r, r = t.child, M = e.child.memoizedState, M === null ? M = Wu(a) : (B = M.cachePool, B !== null ? (h = $a ? Et._currentValue : Et._currentValue2, B = B.parent !== h ? { parent: h, pool: h } : B) : B = $o(), M = {
          baseLanes: M.baseLanes | a,
          cachePool: B
        }), r.memoizedState = M, r.childLanes = Pu(
          e,
          S,
          a
        ), t.memoizedState = $r, u) : (Nt(t), a = e.child, e = a.sibling, a = yn(a, {
          mode: "visible",
          children: u.children
        }), a.return = t, a.sibling = null, e !== null && (S = t.deletions, S === null ? (t.deletions = [e], t.flags |= 16) : S.push(e)), t.child = a, t.memoizedState = null, a);
      }
      function ku(e, t) {
        return t = Iu(
          { mode: "visible", children: t },
          e.mode
        ), t.return = e, e.child = t;
      }
      function Iu(e, t) {
        return Lf(e, t, 0, null);
      }
      function $u(e, t, a) {
        return tl(t, e.child, null, a), e = ku(
          t,
          t.pendingProps.children
        ), e.flags |= 2, t.memoizedState = null, e;
      }
      function Wo(e, t, a) {
        e.lanes |= t;
        var u = e.alternate;
        u !== null && (u.lanes |= t), ar(e.return, t, a);
      }
      function er(e, t, a, u, r) {
        var h = e.memoizedState;
        h === null ? e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: r
        } : (h.isBackwards = t, h.rendering = null, h.renderingStartTime = 0, h.last = u, h.tail = a, h.tailMode = r);
      }
      function Po(e, t, a) {
        var u = t.pendingProps, r = u.revealOrder, h = u.tail;
        if (St(e, t, u.children, a), u = zt.current, (u & 2) !== 0)
          u = u & 1 | 2, t.flags |= 128;
        else {
          if (e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
              if (e.tag === 13)
                e.memoizedState !== null && Wo(e, a, t);
              else if (e.tag === 19)
                Wo(e, a, t);
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
          u &= 1;
        }
        switch (b(zt, u), r) {
          case "forwards":
            for (a = t.child, r = null; a !== null; )
              e = a.alternate, e !== null && Ut(e) === null && (r = a), a = a.sibling;
            a = r, a === null ? (r = t.child, t.child = null) : (r = a.sibling, a.sibling = null), er(
              t,
              !1,
              r,
              a,
              h
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
            er(
              t,
              !0,
              a,
              null,
              h
            );
            break;
          case "together":
            er(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
        return t.child;
      }
      function Wa(e, t, a) {
        if (e !== null && (t.dependencies = e.dependencies), Mn |= t.lanes, (a & t.childLanes) === 0)
          if (e !== null) {
            if (Ei(
              e,
              t,
              a,
              !1
            ), (a & t.childLanes) === 0)
              return null;
          } else return null;
        if (e !== null && t.child !== e.child)
          throw Error(i(153));
        if (t.child !== null) {
          for (e = t.child, a = yn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
            e = e.sibling, a = a.sibling = yn(e, e.pendingProps), a.return = t;
          a.sibling = null;
        }
        return t.child;
      }
      function tr(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && eu(e)));
      }
      function td(e, t, a) {
        switch (t.tag) {
          case 3:
            Q(
              t,
              t.stateNode.containerInfo
            ), hn(t, Et, e.memoizedState.cache), ie();
            break;
          case 27:
          case 5:
            ne(t);
            break;
          case 4:
            Q(
              t,
              t.stateNode.containerInfo
            );
            break;
          case 10:
            hn(
              t,
              t.type,
              t.memoizedProps.value
            );
            break;
          case 13:
            var u = t.memoizedState;
            if (u !== null)
              return u.dehydrated !== null ? (Nt(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Jo(
                e,
                t,
                a
              ) : (Nt(t), e = Wa(
                e,
                t,
                a
              ), e !== null ? e.sibling : null);
            Nt(t);
            break;
          case 19:
            var r = (e.flags & 128) !== 0;
            if (u = (a & t.childLanes) !== 0, u || (Ei(
              e,
              t,
              a,
              !1
            ), u = (a & t.childLanes) !== 0), r) {
              if (u)
                return Po(
                  e,
                  t,
                  a
                );
              t.flags |= 128;
            }
            if (r = t.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), b(zt, zt.current), u) break;
            return null;
          case 22:
          case 23:
            return t.lanes = 0, Ht(e, t, a);
          case 24:
            hn(t, Et, e.memoizedState.cache);
        }
        return Wa(e, t, a);
      }
      function ko(e, t, a) {
        if (e !== null)
          if (e.memoizedProps !== t.pendingProps)
            Bt = !0;
          else {
            if (!tr(e, a) && (t.flags & 128) === 0)
              return Bt = !1, td(
                e,
                t,
                a
              );
            Bt = (e.flags & 131072) !== 0;
          }
        else
          Bt = !1, Pe && (t.flags & 1048576) !== 0 && T(t, pu, t.index);
        switch (t.lanes = 0, t.tag) {
          case 16:
            e: {
              e = t.pendingProps;
              var u = t.elementType, r = u._init;
              if (u = r(u._payload), t.type = u, typeof u == "function")
                Ur(u) ? (e = Oa(u, e), t.tag = 1, t = Zo(
                  null,
                  t,
                  u,
                  e,
                  a
                )) : (t.tag = 0, t = pa(
                  null,
                  t,
                  u,
                  e,
                  a
                ));
              else {
                if (u != null) {
                  if (r = u.$$typeof, r === Or) {
                    t.tag = 11, t = Zn(
                      null,
                      t,
                      u,
                      e,
                      a
                    );
                    break e;
                  } else if (r === Nr) {
                    t.tag = 14, t = gi(
                      null,
                      t,
                      u,
                      e,
                      a
                    );
                    break e;
                  }
                }
                throw t = s(u) || u, Error(i(306, t, ""));
              }
            }
            return t;
          case 0:
            return pa(
              e,
              t,
              t.type,
              t.pendingProps,
              a
            );
          case 1:
            return u = t.type, r = Oa(
              u,
              t.pendingProps
            ), Zo(
              e,
              t,
              u,
              r,
              a
            );
          case 3:
            e: {
              if (Q(
                t,
                t.stateNode.containerInfo
              ), e === null) throw Error(i(387));
              var h = t.pendingProps;
              r = t.memoizedState, u = r.element, ft(e, t), _t(t, h, null, a);
              var S = t.memoizedState;
              if (h = S.cache, hn(t, Et, h), h !== r.cache && nr(
                t,
                [Et],
                a,
                !0
              ), et(), h = S.element, ma && r.isDehydrated)
                if (r = {
                  element: h,
                  isDehydrated: !1,
                  cache: S.cache
                }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
                  t = wo(
                    e,
                    t,
                    h,
                    a
                  );
                  break e;
                } else if (h !== u) {
                  u = Z(
                    Error(i(424)),
                    t
                  ), Be(u), t = wo(
                    e,
                    t,
                    h,
                    a
                  );
                  break e;
                } else
                  for (ma && (Kt = hh(
                    t.stateNode.containerInfo
                  ), Jt = t, Pe = !0, Na = null, ja = !0), a = Tc(
                    t,
                    null,
                    h,
                    a
                  ), t.child = a; a; )
                    a.flags = a.flags & -3 | 4096, a = a.sibling;
              else {
                if (ie(), h === u) {
                  t = Wa(
                    e,
                    t,
                    a
                  );
                  break e;
                }
                St(e, t, h, a);
              }
              t = t.child;
            }
            return t;
          case 26:
            if (ya)
              return Mt(e, t), e === null ? (a = dc(
                t.type,
                null,
                t.pendingProps,
                null
              )) ? t.memoizedState = a : Pe || (t.stateNode = Rh(
                t.type,
                t.pendingProps,
                bn.current,
                t
              )) : t.memoizedState = dc(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              ), null;
          case 27:
            if (Ft)
              return ne(t), e === null && Ft && Pe && (u = t.stateNode = gc(
                t.type,
                t.pendingProps,
                bn.current,
                Vt.current,
                !1
              ), Jt = t, ja = !0, Kt = fc(u)), u = t.pendingProps.children, e !== null || Pe ? St(
                e,
                t,
                u,
                a
              ) : t.child = tl(
                t,
                null,
                u,
                a
              ), Mt(e, t), t.child;
          case 5:
            return e === null && Pe && (Dh(
              t.type,
              t.pendingProps,
              Vt.current
            ), (r = u = Kt) && (u = ph(
              u,
              t.type,
              t.pendingProps,
              ja
            ), u !== null ? (t.stateNode = u, Jt = t, Kt = fc(u), ja = !1, r = !0) : r = !1), r || te(t)), ne(t), r = t.type, h = t.pendingProps, S = e !== null ? e.memoizedProps : null, u = h.children, cu(r, h) ? u = null : S !== null && cu(r, S) && (t.flags |= 32), t.memoizedState !== null && (r = Rn(
              e,
              t,
              pl,
              null,
              null,
              a
            ), $a ? $n._currentValue = r : $n._currentValue2 = r), Mt(e, t), St(e, t, u, a), t.child;
          case 6:
            return e === null && Pe && (Ah(
              t.pendingProps,
              Vt.current
            ), (e = a = Kt) && (a = mh(
              a,
              t.pendingProps,
              ja
            ), a !== null ? (t.stateNode = a, Jt = t, Kt = null, e = !0) : e = !1), e || te(t)), null;
          case 13:
            return Jo(e, t, a);
          case 4:
            return Q(
              t,
              t.stateNode.containerInfo
            ), u = t.pendingProps, e === null ? t.child = tl(
              t,
              null,
              u,
              a
            ) : St(
              e,
              t,
              u,
              a
            ), t.child;
          case 11:
            return Zn(
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
            return u = t.pendingProps, hn(
              t,
              t.type,
              u.value
            ), St(
              e,
              t,
              u.children,
              a
            ), t.child;
          case 9:
            return r = t.type._context, u = t.pendingProps.children, wn(t), r = Xt(r), u = u(r), t.flags |= 1, St(
              e,
              t,
              u,
              a
            ), t.child;
          case 14:
            return gi(
              e,
              t,
              t.type,
              t.pendingProps,
              a
            );
          case 15:
            return $i(
              e,
              t,
              t.type,
              t.pendingProps,
              a
            );
          case 19:
            return Po(
              e,
              t,
              a
            );
          case 22:
            return Ht(e, t, a);
          case 24:
            return wn(t), u = Xt(Et), e === null ? (r = ir(), r === null && (r = st, h = lr(), r.pooledCache = h, h.refCount++, h !== null && (r.pooledCacheLanes |= a), r = h), t.memoizedState = {
              parent: u,
              cache: r
            }, $e(t), hn(t, Et, r)) : ((e.lanes & a) !== 0 && (ft(e, t), _t(t, null, null, a), et()), r = e.memoizedState, h = t.memoizedState, r.parent !== u ? (r = { parent: u, cache: u }, t.memoizedState = r, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = r), hn(t, Et, u)) : (u = h.cache, hn(t, Et, u), u !== r.cache && nr(
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
        throw Error(i(156, t.tag));
      }
      function hn(e, t, a) {
        $a ? (b(_u, t._currentValue), t._currentValue = a) : (b(_u, t._currentValue2), t._currentValue2 = a);
      }
      function Pa(e) {
        var t = _u.current;
        $a ? e._currentValue = t : e._currentValue2 = t, U(_u);
      }
      function ar(e, t, a) {
        for (; e !== null; ) {
          var u = e.alternate;
          if ((e.childLanes & t) !== t ? (e.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), e === a) break;
          e = e.return;
        }
      }
      function nr(e, t, a, u) {
        var r = e.child;
        for (r !== null && (r.return = e); r !== null; ) {
          var h = r.dependencies;
          if (h !== null) {
            var S = r.child;
            h = h.firstContext;
            e: for (; h !== null; ) {
              var M = h;
              h = r;
              for (var B = 0; B < t.length; B++)
                if (M.context === t[B]) {
                  h.lanes |= a, M = h.alternate, M !== null && (M.lanes |= a), ar(
                    h.return,
                    a,
                    e
                  ), u || (S = null);
                  break e;
                }
              h = M.next;
            }
          } else if (r.tag === 18) {
            if (S = r.return, S === null) throw Error(i(341));
            S.lanes |= a, h = S.alternate, h !== null && (h.lanes |= a), ar(S, a, e), S = null;
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
      function Ei(e, t, a, u) {
        e = null;
        for (var r = t, h = !1; r !== null; ) {
          if (!h) {
            if ((r.flags & 524288) !== 0) h = !0;
            else if ((r.flags & 262144) !== 0) break;
          }
          if (r.tag === 10) {
            var S = r.alternate;
            if (S === null) throw Error(i(387));
            if (S = S.memoizedProps, S !== null) {
              var M = r.type;
              ca(r.pendingProps.value, S.value) || (e !== null ? e.push(M) : e = [M]);
            }
          } else if (r === mu.current) {
            if (S = r.alternate, S === null) throw Error(i(387));
            S.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push($n) : e = [$n]);
          }
          r = r.return;
        }
        e !== null && nr(
          t,
          e,
          a,
          u
        ), t.flags |= 262144;
      }
      function eu(e) {
        for (e = e.firstContext; e !== null; ) {
          var t = e.context;
          if (!ca(
            $a ? t._currentValue : t._currentValue2,
            e.memoizedValue
          ))
            return !0;
          e = e.next;
        }
        return !1;
      }
      function wn(e) {
        il = e, an = null, e = e.dependencies, e !== null && (e.firstContext = null);
      }
      function Xt(e) {
        return Io(il, e);
      }
      function tu(e, t) {
        return il === null && wn(e), Io(e, t);
      }
      function Io(e, t) {
        var a = $a ? t._currentValue : t._currentValue2;
        if (t = { context: t, memoizedValue: a, next: null }, an === null) {
          if (e === null) throw Error(i(308));
          an = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
        } else an = an.next = t;
        return a;
      }
      function lr() {
        return {
          controller: new Zh(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function bi(e) {
        e.refCount--, e.refCount === 0 && wh(Jh, function() {
          e.controller.abort();
        });
      }
      function ir() {
        var e = ul.current;
        return e !== null ? e : st.pooledCache;
      }
      function au(e, t) {
        t === null ? b(ul, ul.current) : b(ul, t.pool);
      }
      function $o() {
        var e = ir();
        return e === null ? null : {
          parent: $a ? Et._currentValue : Et._currentValue2,
          pool: e
        };
      }
      function na(e) {
        e.flags |= 4;
      }
      function ef(e, t) {
        if (e !== null && e.child === t.child) return !1;
        if ((t.flags & 16) !== 0) return !0;
        for (e = t.child; e !== null; ) {
          if ((e.flags & 13878) !== 0 || (e.subtreeFlags & 13878) !== 0)
            return !0;
          e = e.sibling;
        }
        return !1;
      }
      function ur(e, t, a, u) {
        if (Qt)
          for (a = t.child; a !== null; ) {
            if (a.tag === 5 || a.tag === 6)
              jr(e, a.stateNode);
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
        else if (En)
          for (var r = t.child; r !== null; ) {
            if (r.tag === 5) {
              var h = r.stateNode;
              a && u && (h = uc(
                h,
                r.type,
                r.memoizedProps
              )), jr(e, h);
            } else if (r.tag === 6)
              h = r.stateNode, a && u && (h = rc(
                h,
                r.memoizedProps
              )), jr(e, h);
            else if (r.tag !== 4) {
              if (r.tag === 22 && r.memoizedState !== null)
                h = r.child, h !== null && (h.return = r), ur(e, r, !0, !0);
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
      function tf(e, t, a, u) {
        if (En)
          for (var r = t.child; r !== null; ) {
            if (r.tag === 5) {
              var h = r.stateNode;
              a && u && (h = uc(
                h,
                r.type,
                r.memoizedProps
              )), lc(e, h);
            } else if (r.tag === 6)
              h = r.stateNode, a && u && (h = rc(
                h,
                r.memoizedProps
              )), lc(e, h);
            else if (r.tag !== 4) {
              if (r.tag === 22 && r.memoizedState !== null)
                h = r.child, h !== null && (h.return = r), tf(
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
      function af(e, t) {
        if (En && ef(e, t)) {
          e = t.stateNode;
          var a = e.containerInfo, u = nc();
          tf(u, t, !1, !1), e.pendingChildren = u, na(t), oh(a, u);
        }
      }
      function rr(e, t, a, u) {
        if (Qt)
          e.memoizedProps !== u && na(t);
        else if (En) {
          var r = e.stateNode, h = e.memoizedProps;
          if ((e = ef(e, t)) || h !== u) {
            var S = Vt.current;
            h = rh(
              r,
              a,
              h,
              u,
              !e,
              null
            ), h === r ? t.stateNode = r : (kf(
              h,
              a,
              u,
              S
            ) && na(t), t.stateNode = h, e ? ur(h, t, !1, !1) : na(t));
          } else t.stateNode = r;
        }
      }
      function or(e, t, a) {
        if (Gd(t, a)) {
          if (e.flags |= 16777216, !ec(t, a))
            if (Cf()) e.flags |= 8192;
            else
              throw Fl = Su, Pr;
        } else e.flags &= -16777217;
      }
      function nf(e, t) {
        if (zh(t)) {
          if (e.flags |= 16777216, !yc(t))
            if (Cf()) e.flags |= 8192;
            else
              throw Fl = Su, Pr;
        } else e.flags &= -16777217;
      }
      function nu(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? W() : 536870912, e.lanes |= t, kl |= t);
      }
      function Ti(e, t) {
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
              for (var u = null; a !== null; )
                a.alternate !== null && (u = a), a = a.sibling;
              u === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : u.sibling = null;
          }
      }
      function yt(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, a = 0, u = 0;
        if (t)
          for (var r = e.child; r !== null; )
            a |= r.lanes | r.childLanes, u |= r.subtreeFlags & 31457280, u |= r.flags & 31457280, r.return = e, r = r.sibling;
        else
          for (r = e.child; r !== null; )
            a |= r.lanes | r.childLanes, u |= r.subtreeFlags, u |= r.flags, r.return = e, r = r.sibling;
        return e.subtreeFlags |= u, e.childLanes = a, t;
      }
      function ad(e, t, a) {
        var u = t.pendingProps;
        switch (V(t), t.tag) {
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
            return a = t.stateNode, u = null, e !== null && (u = e.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Pa(Et), K(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (oe(t) ? na(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Na !== null && (Sr(Na), Na = null))), af(e, t), yt(t), null;
          case 26:
            if (ya) {
              a = t.type;
              var r = t.memoizedState;
              return e === null ? (na(t), r !== null ? (yt(t), nf(
                t,
                r
              )) : (yt(t), or(
                t,
                a,
                u
              ))) : r ? r !== e.memoizedState ? (na(t), yt(t), nf(
                t,
                r
              )) : (yt(t), t.flags &= -16777217) : (Qt ? e.memoizedProps !== u && na(t) : rr(
                e,
                t,
                a,
                u
              ), yt(t), or(
                t,
                a,
                u
              )), null;
            }
          case 27:
            if (Ft) {
              if (I(t), a = bn.current, r = t.type, e !== null && t.stateNode != null)
                Qt ? e.memoizedProps !== u && na(t) : rr(
                  e,
                  t,
                  r,
                  u
                );
              else {
                if (!u) {
                  if (t.stateNode === null)
                    throw Error(i(166));
                  return yt(t), null;
                }
                e = Vt.current, oe(t) ? de(t, e) : (e = gc(
                  r,
                  u,
                  a,
                  e,
                  !0
                ), t.stateNode = e, na(t));
              }
              return yt(t), null;
            }
          case 5:
            if (I(t), a = t.type, e !== null && t.stateNode != null)
              rr(e, t, a, u);
            else {
              if (!u) {
                if (t.stateNode === null)
                  throw Error(i(166));
                return yt(t), null;
              }
              e = Vt.current, oe(t) ? de(t, e) : (r = Cd(
                a,
                u,
                bn.current,
                e,
                t
              ), ur(r, t, !1, !1), t.stateNode = r, kf(
                r,
                a,
                u,
                e
              ) && na(t));
            }
            return yt(t), or(
              t,
              t.type,
              t.pendingProps
            ), null;
          case 6:
            if (e && t.stateNode != null)
              a = e.memoizedProps, Qt ? a !== u && na(t) : En && (a !== u ? (t.stateNode = If(
                u,
                bn.current,
                Vt.current,
                t
              ), na(t)) : t.stateNode = e.stateNode);
            else {
              if (typeof u != "string" && t.stateNode === null)
                throw Error(i(166));
              if (e = bn.current, a = Vt.current, oe(t)) {
                if (!ma) throw Error(i(176));
                if (e = t.stateNode, a = t.memoizedProps, u = null, r = Jt, r !== null)
                  switch (r.tag) {
                    case 27:
                    case 5:
                      u = r.memoizedProps;
                  }
                Sh(
                  e,
                  a,
                  t,
                  u
                ) || te(t);
              } else
                t.stateNode = If(
                  u,
                  e,
                  a,
                  t
                );
            }
            return yt(t), null;
          case 13:
            if (u = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
              if (r = oe(t), u !== null && u.dehydrated !== null) {
                if (e === null) {
                  if (!r) throw Error(i(318));
                  if (!ma) throw Error(i(344));
                  if (r = t.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(i(317));
                  Eh(r, t);
                } else
                  ie(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                yt(t), r = !1;
              } else
                Na !== null && (Sr(Na), Na = null), r = !0;
              if (!r)
                return t.flags & 256 ? (Rt(t), t) : (Rt(t), null);
            }
            if (Rt(t), (t.flags & 128) !== 0)
              return t.lanes = a, t;
            if (a = u !== null, e = e !== null && e.memoizedState !== null, a) {
              u = t.child, r = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (r = u.alternate.memoizedState.cachePool.pool);
              var h = null;
              u.memoizedState !== null && u.memoizedState.cachePool !== null && (h = u.memoizedState.cachePool.pool), h !== r && (u.flags |= 2048);
            }
            return a !== e && a && (t.child.flags |= 8192), nu(t, t.updateQueue), yt(t), null;
          case 4:
            return K(), af(e, t), e === null && zd(t.stateNode.containerInfo), yt(t), null;
          case 10:
            return Pa(t.type), yt(t), null;
          case 19:
            if (U(zt), r = t.memoizedState, r === null)
              return yt(t), null;
            if (u = (t.flags & 128) !== 0, h = r.rendering, h === null)
              if (u) Ti(r, !1);
              else {
                if (Tt !== 0 || e !== null && (e.flags & 128) !== 0)
                  for (e = t.child; e !== null; ) {
                    if (h = Ut(e), h !== null) {
                      for (t.flags |= 128, Ti(r, !1), e = h.updateQueue, t.updateQueue = e, nu(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                        Vf(a, e), a = a.sibling;
                      return b(
                        zt,
                        zt.current & 1 | 2
                      ), t.child;
                    }
                    e = e.sibling;
                  }
                r.tail !== null && xa() > Hi && (t.flags |= 128, u = !0, Ti(r, !1), t.lanes = 4194304);
              }
            else {
              if (!u)
                if (e = Ut(h), e !== null) {
                  if (t.flags |= 128, u = !0, e = e.updateQueue, t.updateQueue = e, nu(t, e), Ti(r, !0), r.tail === null && r.tailMode === "hidden" && !h.alternate && !Pe)
                    return yt(t), null;
                } else
                  2 * xa() - r.renderingStartTime > Hi && a !== 536870912 && (t.flags |= 128, u = !0, Ti(r, !1), t.lanes = 4194304);
              r.isBackwards ? (h.sibling = t.child, t.child = h) : (e = r.last, e !== null ? e.sibling = h : t.child = h, r.last = h);
            }
            return r.tail !== null ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.renderingStartTime = xa(), t.sibling = null, e = zt.current, b(
              zt,
              u ? e & 1 | 2 : e & 1
            ), t) : (yt(t), null);
          case 22:
          case 23:
            return Rt(t), ha(), u = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), a = t.updateQueue, a !== null && nu(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), e !== null && U(ul), null;
          case 24:
            return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Pa(Et), yt(t), null;
          case 25:
            return null;
        }
        throw Error(i(156, t.tag));
      }
      function nd(e, t) {
        switch (V(t), t.tag) {
          case 1:
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 3:
            return Pa(Et), K(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
          case 26:
          case 27:
          case 5:
            return I(t), null;
          case 13:
            if (Rt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
              if (t.alternate === null)
                throw Error(i(340));
              ie();
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 19:
            return U(zt), null;
          case 4:
            return K(), null;
          case 10:
            return Pa(t.type), null;
          case 22:
          case 23:
            return Rt(t), ha(), e !== null && U(ul), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 24:
            return Pa(Et), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function lf(e, t) {
        switch (V(t), t.tag) {
          case 3:
            Pa(Et), K();
            break;
          case 26:
          case 27:
          case 5:
            I(t);
            break;
          case 4:
            K();
            break;
          case 13:
            Rt(t);
            break;
          case 19:
            U(zt);
            break;
          case 10:
            Pa(t.type);
            break;
          case 22:
          case 23:
            Rt(t), ha(), e !== null && U(ul);
            break;
          case 24:
            Pa(Et);
        }
      }
      function _i(e, t) {
        try {
          var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
          if (u !== null) {
            var r = u.next;
            a = r;
            do {
              if ((a.tag & e) === e) {
                u = void 0;
                var h = a.create, S = a.inst;
                u = h(), S.destroy = u;
              }
              a = a.next;
            } while (a !== r);
          }
        } catch (M) {
          it(t, t.return, M);
        }
      }
      function vn(e, t, a) {
        try {
          var u = t.updateQueue, r = u !== null ? u.lastEffect : null;
          if (r !== null) {
            var h = r.next;
            u = h;
            do {
              if ((u.tag & e) === e) {
                var S = u.inst, M = S.destroy;
                if (M !== void 0) {
                  S.destroy = void 0, r = t;
                  var B = a;
                  try {
                    M();
                  } catch (k) {
                    it(
                      r,
                      B,
                      k
                    );
                  }
                }
              }
              u = u.next;
            } while (u !== h);
          }
        } catch (k) {
          it(t, t.return, k);
        }
      }
      function uf(e) {
        var t = e.updateQueue;
        if (t !== null) {
          var a = e.stateNode;
          try {
            Oe(t, a);
          } catch (u) {
            it(e, e.return, u);
          }
        }
      }
      function rf(e, t, a) {
        a.props = Oa(
          e.type,
          e.memoizedProps
        ), a.state = e.memoizedState;
        try {
          a.componentWillUnmount();
        } catch (u) {
          it(e, t, u);
        }
      }
      function Jn(e, t) {
        try {
          var a = e.ref;
          if (a !== null) {
            var u = e.stateNode;
            switch (e.tag) {
              case 26:
              case 27:
              case 5:
                var r = Di(u);
                break;
              default:
                r = u;
            }
            typeof a == "function" ? e.refCleanup = a(r) : a.current = r;
          }
        } catch (h) {
          it(e, t, h);
        }
      }
      function la(e, t) {
        var a = e.ref, u = e.refCleanup;
        if (a !== null)
          if (typeof u == "function")
            try {
              u();
            } catch (r) {
              it(e, t, r);
            } finally {
              e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
          else if (typeof a == "function")
            try {
              a(null);
            } catch (r) {
              it(e, t, r);
            }
          else a.current = null;
      }
      function of(e) {
        var t = e.type, a = e.memoizedProps, u = e.stateNode;
        try {
          Pd(u, t, a, e);
        } catch (r) {
          it(e, e.return, r);
        }
      }
      function ff(e, t, a) {
        try {
          kd(
            e.stateNode,
            e.type,
            a,
            t,
            e
          );
        } catch (u) {
          it(e, e.return, u);
        }
      }
      function cf(e) {
        return e.tag === 5 || e.tag === 3 || (ya ? e.tag === 26 : !1) || (Ft ? e.tag === 27 : !1) || e.tag === 4;
      }
      function fr(e) {
        e: for (; ; ) {
          for (; e.sibling === null; ) {
            if (e.return === null || cf(e.return)) return null;
            e = e.return;
          }
          for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && (!Ft || e.tag !== 27) && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child;
          }
          if (!(e.flags & 2)) return e.stateNode;
        }
      }
      function cr(e, t, a) {
        var u = e.tag;
        if (u === 5 || u === 6)
          e = e.stateNode, t ? $d(a, e, t) : Jd(a, e);
        else if (!(u === 4 || Ft && u === 27) && (e = e.child, e !== null))
          for (cr(e, t, a), e = e.sibling; e !== null; )
            cr(e, t, a), e = e.sibling;
      }
      function lu(e, t, a) {
        var u = e.tag;
        if (u === 5 || u === 6)
          e = e.stateNode, t ? Id(a, e, t) : wd(a, e);
        else if (!(u === 4 || Ft && u === 27) && (e = e.child, e !== null))
          for (lu(e, t, a), e = e.sibling; e !== null; )
            lu(e, t, a), e = e.sibling;
      }
      function sf(e, t, a) {
        e = e.containerInfo;
        try {
          ic(e, a);
        } catch (u) {
          it(t, t.return, u);
        }
      }
      function ld(e, t) {
        for (Dd(e.containerInfo), Gt = t; Gt !== null; )
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
                    var u = e, r = a.memoizedProps;
                    a = a.memoizedState;
                    var h = u.stateNode;
                    try {
                      var S = Oa(
                        u.type,
                        r,
                        u.elementType === u.type
                      );
                      t = h.getSnapshotBeforeUpdate(
                        S,
                        a
                      ), h.__reactInternalSnapshotBeforeUpdate = t;
                    } catch (M) {
                      it(
                        u,
                        u.return,
                        M
                      );
                    }
                  }
                  break;
                case 3:
                  (t & 1024) !== 0 && Qt && uh(e.stateNode.containerInfo);
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
                    throw Error(i(163));
              }
              if (t = e.sibling, t !== null) {
                t.return = e.return, Gt = t;
                break;
              }
              Gt = e.return;
            }
        return S = Ac, Ac = !1, S;
      }
      function df(e, t, a) {
        var u = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            ka(e, a), u & 4 && _i(5, a);
            break;
          case 1:
            if (ka(e, a), u & 4)
              if (e = a.stateNode, t === null)
                try {
                  e.componentDidMount();
                } catch (M) {
                  it(a, a.return, M);
                }
              else {
                var r = Oa(
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
                } catch (M) {
                  it(
                    a,
                    a.return,
                    M
                  );
                }
              }
            u & 64 && uf(a), u & 512 && Jn(a, a.return);
            break;
          case 3:
            if (ka(e, a), u & 64 && (u = a.updateQueue, u !== null)) {
              if (e = null, a.child !== null)
                switch (a.child.tag) {
                  case 27:
                  case 5:
                    e = Di(a.child.stateNode);
                    break;
                  case 1:
                    e = a.child.stateNode;
                }
              try {
                Oe(u, e);
              } catch (M) {
                it(a, a.return, M);
              }
            }
            break;
          case 26:
            if (ya) {
              ka(e, a), u & 512 && Jn(a, a.return);
              break;
            }
          case 27:
          case 5:
            ka(e, a), t === null && u & 4 && of(a), u & 512 && Jn(a, a.return);
            break;
          case 12:
            ka(e, a);
            break;
          case 13:
            ka(e, a), u & 4 && vf(e, a);
            break;
          case 22:
            if (r = a.memoizedState !== null || nn, !r) {
              t = t !== null && t.memoizedState !== null || bt;
              var h = nn, S = bt;
              nn = r, (bt = t) && !S ? pn(
                e,
                a,
                (a.subtreeFlags & 8772) !== 0
              ) : ka(e, a), nn = h, bt = S;
            }
            u & 512 && (a.memoizedProps.mode === "manual" ? Jn(a, a.return) : la(a, a.return));
            break;
          default:
            ka(e, a);
        }
      }
      function hf(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, hf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Bd(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
      function za(e, t, a) {
        for (a = a.child; a !== null; )
          sr(
            e,
            t,
            a
          ), a = a.sibling;
      }
      function sr(e, t, a) {
        if (fa && typeof fa.onCommitFiberUnmount == "function")
          try {
            fa.onCommitFiberUnmount(Ri, a);
          } catch {
          }
        switch (a.tag) {
          case 26:
            if (ya) {
              bt || la(a, t), za(
                e,
                t,
                a
              ), a.memoizedState ? vc(a.memoizedState) : a.stateNode && mc(a.stateNode);
              break;
            }
          case 27:
            if (Ft) {
              bt || la(a, t);
              var u = At, r = sa;
              At = a.stateNode, za(
                e,
                t,
                a
              ), Gh(a.stateNode), At = u, sa = r;
              break;
            }
          case 5:
            bt || la(a, t);
          case 6:
            if (Qt) {
              if (u = At, r = sa, At = null, za(
                e,
                t,
                a
              ), At = u, sa = r, At !== null)
                if (sa)
                  try {
                    th(At, a.stateNode);
                  } catch (h) {
                    it(
                      a,
                      t,
                      h
                    );
                  }
                else
                  try {
                    eh(At, a.stateNode);
                  } catch (h) {
                    it(
                      a,
                      t,
                      h
                    );
                  }
            } else
              za(
                e,
                t,
                a
              );
            break;
          case 18:
            Qt && At !== null && (sa ? Mh(
              At,
              a.stateNode
            ) : Uh(At, a.stateNode));
            break;
          case 4:
            Qt ? (u = At, r = sa, At = a.stateNode.containerInfo, sa = !0, za(
              e,
              t,
              a
            ), At = u, sa = r) : (En && sf(
              a.stateNode,
              a,
              nc()
            ), za(
              e,
              t,
              a
            ));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            bt || vn(2, a, t), bt || vn(4, a, t), za(
              e,
              t,
              a
            );
            break;
          case 1:
            bt || (la(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && rf(
              a,
              t,
              u
            )), za(
              e,
              t,
              a
            );
            break;
          case 21:
            za(
              e,
              t,
              a
            );
            break;
          case 22:
            bt || la(a, t), bt = (u = bt) || a.memoizedState !== null, za(
              e,
              t,
              a
            ), bt = u;
            break;
          default:
            za(
              e,
              t,
              a
            );
        }
      }
      function vf(e, t) {
        if (ma && t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
          try {
            _h(e);
          } catch (a) {
            it(t, t.return, a);
          }
      }
      function id(e) {
        switch (e.tag) {
          case 13:
          case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new Dc()), t;
          case 22:
            return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Dc()), t;
          default:
            throw Error(i(435, e.tag));
        }
      }
      function dr(e, t) {
        var a = id(e);
        t.forEach(function(u) {
          var r = hd.bind(null, e, u);
          a.has(u) || (a.add(u), u.then(r, r));
        });
      }
      function $t(e, t) {
        var a = t.deletions;
        if (a !== null)
          for (var u = 0; u < a.length; u++) {
            var r = a[u], h = e, S = t;
            if (Qt) {
              var M = S;
              e: for (; M !== null; ) {
                switch (M.tag) {
                  case 27:
                  case 5:
                    At = M.stateNode, sa = !1;
                    break e;
                  case 3:
                    At = M.stateNode.containerInfo, sa = !0;
                    break e;
                  case 4:
                    At = M.stateNode.containerInfo, sa = !0;
                    break e;
                }
                M = M.return;
              }
              if (At === null) throw Error(i(160));
              sr(h, S, r), At = null, sa = !1;
            } else sr(h, S, r);
            h = r.alternate, h !== null && (h.return = null), r.return = null;
          }
        if (t.subtreeFlags & 13878)
          for (t = t.child; t !== null; )
            pf(t, e), t = t.sibling;
      }
      function pf(e, t) {
        var a = e.alternate, u = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            $t(t, e), ia(e), u & 4 && (vn(3, e, e.return), _i(3, e), vn(5, e, e.return));
            break;
          case 1:
            $t(t, e), ia(e), u & 512 && (bt || a === null || la(a, a.return)), u & 64 && nn && (e = e.updateQueue, e !== null && (u = e.callbacks, u !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
            break;
          case 26:
            if (ya) {
              var r = Ba;
              $t(t, e), ia(e), u & 512 && (bt || a === null || la(a, a.return)), u & 4 && (u = a !== null ? a.memoizedState : null, t = e.memoizedState, a === null ? t === null ? e.stateNode === null ? e.stateNode = Ch(
                r,
                e.type,
                e.memoizedProps,
                e
              ) : pc(
                r,
                e.type,
                e.stateNode
              ) : e.stateNode = hc(
                r,
                t,
                e.memoizedProps
              ) : u !== t ? (u === null ? a.stateNode !== null && mc(a.stateNode) : vc(u), t === null ? pc(
                r,
                e.type,
                e.stateNode
              ) : hc(
                r,
                t,
                e.memoizedProps
              )) : t === null && e.stateNode !== null && ff(
                e,
                e.memoizedProps,
                a.memoizedProps
              ));
              break;
            }
          case 27:
            if (Ft && u & 4 && e.alternate === null) {
              r = e.stateNode;
              var h = e.memoizedProps;
              try {
                Nh(r), Bh(
                  e.type,
                  h,
                  r,
                  e
                );
              } catch (re) {
                it(e, e.return, re);
              }
            }
          case 5:
            if ($t(t, e), ia(e), u & 512 && (bt || a === null || la(a, a.return)), Qt) {
              if (e.flags & 32) {
                t = e.stateNode;
                try {
                  ac(t);
                } catch (re) {
                  it(e, e.return, re);
                }
              }
              u & 4 && e.stateNode != null && (t = e.memoizedProps, ff(
                e,
                t,
                a !== null ? a.memoizedProps : t
              )), u & 1024 && (eo = !0);
            }
            break;
          case 6:
            if ($t(t, e), ia(e), u & 4 && Qt) {
              if (e.stateNode === null)
                throw Error(i(162));
              u = e.memoizedProps, a = a !== null ? a.memoizedProps : u, t = e.stateNode;
              try {
                Wd(t, a, u);
              } catch (re) {
                it(e, e.return, re);
              }
            }
            break;
          case 3:
            if (ya ? (Oh(), r = Ba, Ba = Yr(t.containerInfo), $t(t, e), Ba = r) : $t(t, e), ia(e), u & 4) {
              if (Qt && ma && a !== null && a.memoizedState.isDehydrated)
                try {
                  Th(t.containerInfo);
                } catch (re) {
                  it(e, e.return, re);
                }
              if (En) {
                u = t.containerInfo, a = t.pendingChildren;
                try {
                  ic(u, a);
                } catch (re) {
                  it(e, e.return, re);
                }
              }
            }
            eo && (eo = !1, mf(e));
            break;
          case 4:
            ya ? (a = Ba, Ba = Yr(
              e.stateNode.containerInfo
            ), $t(t, e), ia(e), Ba = a) : ($t(t, e), ia(e)), u & 4 && En && sf(
              e.stateNode,
              e,
              e.stateNode.pendingChildren
            );
            break;
          case 12:
            $t(t, e), ia(e);
            break;
          case 13:
            $t(t, e), ia(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (lo = xa()), u & 4 && (u = e.updateQueue, u !== null && (e.updateQueue = null, dr(e, u)));
            break;
          case 22:
            u & 512 && (bt || a === null || la(a, a.return)), r = e.memoizedState !== null;
            var S = a !== null && a.memoizedState !== null, M = nn, B = bt;
            if (nn = M || r, bt = B || S, $t(t, e), bt = B, nn = M, ia(e), t = e.stateNode, t._current = e, t._visibility &= -3, t._visibility |= t._pendingVisibility & 2, u & 8192 && (t._visibility = r ? t._visibility & -2 : t._visibility | 1, r && (t = nn || bt, a === null || S || t || Cl(e)), Qt && (e.memoizedProps === null || e.memoizedProps.mode !== "manual"))) {
              e: if (a = null, Qt)
                for (t = e; ; ) {
                  if (t.tag === 5 || ya && t.tag === 26 || Ft && t.tag === 27) {
                    if (a === null) {
                      S = a = t;
                      try {
                        h = S.stateNode, r ? ah(h) : lh(
                          S.stateNode,
                          S.memoizedProps
                        );
                      } catch (re) {
                        it(S, S.return, re);
                      }
                    }
                  } else if (t.tag === 6) {
                    if (a === null) {
                      S = t;
                      try {
                        var k = S.stateNode;
                        r ? nh(k) : ih(k, S.memoizedProps);
                      } catch (re) {
                        it(S, S.return, re);
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
            u & 4 && (u = e.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, dr(e, a))));
            break;
          case 19:
            $t(t, e), ia(e), u & 4 && (u = e.updateQueue, u !== null && (e.updateQueue = null, dr(e, u)));
            break;
          case 21:
            break;
          default:
            $t(t, e), ia(e);
        }
      }
      function ia(e) {
        var t = e.flags;
        if (t & 2) {
          try {
            if (Qt && (!Ft || e.tag !== 27)) {
              e: {
                for (var a = e.return; a !== null; ) {
                  if (cf(a)) {
                    var u = a;
                    break e;
                  }
                  a = a.return;
                }
                throw Error(i(160));
              }
              switch (u.tag) {
                case 27:
                  if (Ft) {
                    var r = u.stateNode, h = fr(e);
                    lu(
                      e,
                      h,
                      r
                    );
                    break;
                  }
                case 5:
                  var S = u.stateNode;
                  u.flags & 32 && (ac(S), u.flags &= -33);
                  var M = fr(e);
                  lu(e, M, S);
                  break;
                case 3:
                case 4:
                  var B = u.stateNode.containerInfo, k = fr(e);
                  cr(
                    e,
                    k,
                    B
                  );
                  break;
                default:
                  throw Error(i(161));
              }
            }
          } catch (re) {
            it(e, e.return, re);
          }
          e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
      }
      function mf(e) {
        if (e.subtreeFlags & 1024)
          for (e = e.child; e !== null; ) {
            var t = e;
            mf(t), t.tag === 5 && t.flags & 1024 && Vd(t.stateNode), e = e.sibling;
          }
      }
      function ka(e, t) {
        if (t.subtreeFlags & 8772)
          for (t = t.child; t !== null; )
            df(e, t.alternate, t), t = t.sibling;
      }
      function Cl(e) {
        for (e = e.child; e !== null; ) {
          var t = e;
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              vn(4, t, t.return), Cl(t);
              break;
            case 1:
              la(t, t.return);
              var a = t.stateNode;
              typeof a.componentWillUnmount == "function" && rf(
                t,
                t.return,
                a
              ), Cl(t);
              break;
            case 26:
            case 27:
            case 5:
              la(t, t.return), Cl(t);
              break;
            case 22:
              la(t, t.return), t.memoizedState === null && Cl(t);
              break;
            default:
              Cl(t);
          }
          e = e.sibling;
        }
      }
      function pn(e, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
          var u = t.alternate, r = e, h = t, S = h.flags;
          switch (h.tag) {
            case 0:
            case 11:
            case 15:
              pn(
                r,
                h,
                a
              ), _i(4, h);
              break;
            case 1:
              if (pn(
                r,
                h,
                a
              ), u = h, r = u.stateNode, typeof r.componentDidMount == "function")
                try {
                  r.componentDidMount();
                } catch (k) {
                  it(u, u.return, k);
                }
              if (u = h, r = u.updateQueue, r !== null) {
                var M = u.stateNode;
                try {
                  var B = r.shared.hiddenCallbacks;
                  if (B !== null)
                    for (r.shared.hiddenCallbacks = null, r = 0; r < B.length; r++)
                      tt(B[r], M);
                } catch (k) {
                  it(u, u.return, k);
                }
              }
              a && S & 64 && uf(h), Jn(h, h.return);
              break;
            case 26:
            case 27:
            case 5:
              pn(
                r,
                h,
                a
              ), a && u === null && S & 4 && of(h), Jn(h, h.return);
              break;
            case 12:
              pn(
                r,
                h,
                a
              );
              break;
            case 13:
              pn(
                r,
                h,
                a
              ), a && S & 4 && vf(r, h);
              break;
            case 22:
              h.memoizedState === null && pn(
                r,
                h,
                a
              ), Jn(h, h.return);
              break;
            default:
              pn(
                r,
                h,
                a
              );
          }
          t = t.sibling;
        }
      }
      function hr(e, t) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && bi(a));
      }
      function vr(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && bi(e));
      }
      function mn(e, t, a, u) {
        if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null; )
            yf(
              e,
              t,
              a,
              u
            ), t = t.sibling;
      }
      function yf(e, t, a, u) {
        var r = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            mn(
              e,
              t,
              a,
              u
            ), r & 2048 && _i(9, t);
            break;
          case 3:
            mn(
              e,
              t,
              a,
              u
            ), r & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && bi(e)));
            break;
          case 12:
            if (r & 2048) {
              mn(
                e,
                t,
                a,
                u
              ), e = t.stateNode;
              try {
                var h = t.memoizedProps, S = h.id, M = h.onPostCommit;
                typeof M == "function" && M(
                  S,
                  t.alternate === null ? "mount" : "update",
                  e.passiveEffectDuration,
                  -0
                );
              } catch (B) {
                it(t, t.return, B);
              }
            } else
              mn(
                e,
                t,
                a,
                u
              );
            break;
          case 23:
            break;
          case 22:
            h = t.stateNode, t.memoizedState !== null ? h._visibility & 4 ? mn(
              e,
              t,
              a,
              u
            ) : Ui(
              e,
              t
            ) : h._visibility & 4 ? mn(
              e,
              t,
              a,
              u
            ) : (h._visibility |= 4, Rl(
              e,
              t,
              a,
              u,
              (t.subtreeFlags & 10256) !== 0
            )), r & 2048 && hr(
              t.alternate,
              t
            );
            break;
          case 24:
            mn(
              e,
              t,
              a,
              u
            ), r & 2048 && vr(t.alternate, t);
            break;
          default:
            mn(
              e,
              t,
              a,
              u
            );
        }
      }
      function Rl(e, t, a, u, r) {
        for (r = r && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
          var h = e, S = t, M = a, B = u, k = S.flags;
          switch (S.tag) {
            case 0:
            case 11:
            case 15:
              Rl(
                h,
                S,
                M,
                B,
                r
              ), _i(8, S);
              break;
            case 23:
              break;
            case 22:
              var re = S.stateNode;
              S.memoizedState !== null ? re._visibility & 4 ? Rl(
                h,
                S,
                M,
                B,
                r
              ) : Ui(
                h,
                S
              ) : (re._visibility |= 4, Rl(
                h,
                S,
                M,
                B,
                r
              )), r && k & 2048 && hr(
                S.alternate,
                S
              );
              break;
            case 24:
              Rl(
                h,
                S,
                M,
                B,
                r
              ), r && k & 2048 && vr(S.alternate, S);
              break;
            default:
              Rl(
                h,
                S,
                M,
                B,
                r
              );
          }
          t = t.sibling;
        }
      }
      function Ui(e, t) {
        if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null; ) {
            var a = e, u = t, r = u.flags;
            switch (u.tag) {
              case 22:
                Ui(a, u), r & 2048 && hr(
                  u.alternate,
                  u
                );
                break;
              case 24:
                Ui(a, u), r & 2048 && vr(
                  u.alternate,
                  u
                );
                break;
              default:
                Ui(a, u);
            }
            t = t.sibling;
          }
      }
      function Wn(e) {
        if (e.subtreeFlags & Wl)
          for (e = e.child; e !== null; )
            gf(e), e = e.sibling;
      }
      function gf(e) {
        switch (e.tag) {
          case 26:
            Wn(e), e.flags & Wl && (e.memoizedState !== null ? xh(
              Ba,
              e.memoizedState,
              e.memoizedProps
            ) : tc(e.type, e.memoizedProps));
            break;
          case 5:
            Wn(e), e.flags & Wl && tc(e.type, e.memoizedProps);
            break;
          case 3:
          case 4:
            if (ya) {
              var t = Ba;
              Ba = Yr(
                e.stateNode.containerInfo
              ), Wn(e), Ba = t;
            } else Wn(e);
            break;
          case 22:
            e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Wl, Wl = 16777216, Wn(e), Wl = t) : Wn(e));
            break;
          default:
            Wn(e);
        }
      }
      function Sf(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child, e !== null)) {
          t.child = null;
          do
            t = e.sibling, e.sibling = null, e = t;
          while (e !== null);
        }
      }
      function Mi(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
          if (t !== null)
            for (var a = 0; a < t.length; a++) {
              var u = t[a];
              Gt = u, bf(
                u,
                e
              );
            }
          Sf(e);
        }
        if (e.subtreeFlags & 10256)
          for (e = e.child; e !== null; )
            Ef(e), e = e.sibling;
      }
      function Ef(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Mi(e), e.flags & 2048 && vn(9, e, e.return);
            break;
          case 3:
            Mi(e);
            break;
          case 12:
            Mi(e);
            break;
          case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 4 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -5, iu(e)) : Mi(e);
            break;
          default:
            Mi(e);
        }
      }
      function iu(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
          if (t !== null)
            for (var a = 0; a < t.length; a++) {
              var u = t[a];
              Gt = u, bf(
                u,
                e
              );
            }
          Sf(e);
        }
        for (e = e.child; e !== null; ) {
          switch (t = e, t.tag) {
            case 0:
            case 11:
            case 15:
              vn(8, t, t.return), iu(t);
              break;
            case 22:
              a = t.stateNode, a._visibility & 4 && (a._visibility &= -5, iu(t));
              break;
            default:
              iu(t);
          }
          e = e.sibling;
        }
      }
      function bf(e, t) {
        for (; Gt !== null; ) {
          var a = Gt;
          switch (a.tag) {
            case 0:
            case 11:
            case 15:
              vn(8, a, t);
              break;
            case 23:
            case 22:
              if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                var u = a.memoizedState.cachePool.pool;
                u != null && u.refCount++;
              }
              break;
            case 24:
              bi(a.memoizedState.cache);
          }
          if (u = a.child, u !== null) u.return = a, Gt = u;
          else
            e: for (a = e; Gt !== null; ) {
              u = Gt;
              var r = u.sibling, h = u.return;
              if (hf(u), u === a) {
                Gt = null;
                break e;
              }
              if (r !== null) {
                r.return = h, Gt = r;
                break e;
              }
              Gt = h;
            }
        }
      }
      function pr(e) {
        var t = $f(e);
        if (t != null) {
          if (typeof t.memoizedProps["data-testname"] != "string")
            throw Error(i(364));
          return t;
        }
        if (e = qd(e), e === null) throw Error(i(362));
        return e.stateNode.current;
      }
      function mr(e, t) {
        var a = e.tag;
        switch (t.$$typeof) {
          case Uu:
            if (e.type === t.value) return !0;
            break;
          case Mu:
            e: {
              for (t = t.value, e = [e, 0], a = 0; a < e.length; ) {
                var u = e[a++], r = u.tag, h = e[a++], S = t[h];
                if (r !== 5 && r !== 26 && r !== 27 || !Ci(u)) {
                  for (; S != null && mr(u, S); )
                    h++, S = t[h];
                  if (h === t.length) {
                    t = !0;
                    break e;
                  } else
                    for (u = u.child; u !== null; )
                      e.push(u, h), u = u.sibling;
                }
              }
              t = !1;
            }
            return t;
          case Du:
            if ((a === 5 || a === 26 || a === 27) && Fd(e.stateNode, t.value))
              return !0;
            break;
          case Cu:
            if ((a === 5 || a === 6 || a === 26 || a === 27) && (e = Qd(e), e !== null && 0 <= e.indexOf(t.value)))
              return !0;
            break;
          case Au:
            if ((a === 5 || a === 26 || a === 27) && (e = e.memoizedProps["data-testname"], typeof e == "string" && e.toLowerCase() === t.value.toLowerCase()))
              return !0;
            break;
          default:
            throw Error(i(365));
        }
        return !1;
      }
      function yr(e) {
        switch (e.$$typeof) {
          case Uu:
            return "<" + (s(e.value) || "Unknown") + ">";
          case Mu:
            return ":has(" + (yr(e) || "") + ")";
          case Du:
            return '[role="' + e.value + '"]';
          case Cu:
            return '"' + e.value + '"';
          case Au:
            return '[data-testname="' + e.value + '"]';
          default:
            throw Error(i(365));
        }
      }
      function Tf(e, t) {
        var a = [];
        e = [e, 0];
        for (var u = 0; u < e.length; ) {
          var r = e[u++], h = r.tag, S = e[u++], M = t[S];
          if (h !== 5 && h !== 26 && h !== 27 || !Ci(r)) {
            for (; M != null && mr(r, M); )
              S++, M = t[S];
            if (S === t.length) a.push(r);
            else
              for (r = r.child; r !== null; )
                e.push(r, S), r = r.sibling;
          }
        }
        return a;
      }
      function gr(e, t) {
        if (!Ai) throw Error(i(363));
        e = pr(e), e = Tf(e, t), t = [], e = Array.from(e);
        for (var a = 0; a < e.length; ) {
          var u = e[a++], r = u.tag;
          if (r === 5 || r === 26 || r === 27)
            Ci(u) || t.push(u.stateNode);
          else
            for (u = u.child; u !== null; )
              e.push(u), u = u.sibling;
        }
        return t;
      }
      function ua() {
        if ((ot & 2) !== 0 && we !== 0)
          return we & -we;
        if (He.T !== null) {
          var e = Xl;
          return e !== 0 ? e : Te();
        }
        return xd();
      }
      function _f() {
        Ta === 0 && (Ta = (we & 536870912) === 0 || Pe ? L() : 536870912);
        var e = ba.current;
        return e !== null && (e.flags |= 32), Ta;
      }
      function wt(e, t, a) {
        (e === st && dt === 2 || e.cancelPendingCommit !== null) && (Ol(e, 0), Ia(
          e,
          we,
          Ta,
          !1
        )), ae(e, a), ((ot & 2) === 0 || e !== st) && (e === st && ((ot & 2) === 0 && (rl |= a), Tt === 4 && Ia(
          e,
          we,
          Ta,
          !1
        )), ve(e));
      }
      function Uf(e, t, a) {
        if ((ot & 6) !== 0) throw Error(i(327));
        var u = !a && (t & 60) === 0 && (t & e.expiredLanes) === 0 || H(e, t), r = u ? od(e, t) : Tr(e, t, !0), h = u;
        do {
          if (r === 0) {
            Pl && !u && Ia(e, t, 0, !1);
            break;
          } else if (r === 6)
            Ia(
              e,
              t,
              0,
              !ln
            );
          else {
            if (a = e.current.alternate, h && !ud(a)) {
              r = Tr(e, t, !1), h = !1;
              continue;
            }
            if (r === 2) {
              if (h = t, e.errorRecoveryDisabledLanes & h)
                var S = 0;
              else
                S = e.pendingLanes & -536870913, S = S !== 0 ? S : S & 536870912 ? 536870912 : 0;
              if (S !== 0) {
                t = S;
                e: {
                  var M = e;
                  r = ji;
                  var B = ma && M.current.memoizedState.isDehydrated;
                  if (B && (Ol(M, S).flags |= 256), S = Tr(
                    M,
                    S,
                    !1
                  ), S !== 2) {
                    if (to && !B) {
                      M.errorRecoveryDisabledLanes |= h, rl |= h, r = 4;
                      break e;
                    }
                    h = La, La = r, h !== null && Sr(h);
                  }
                  r = S;
                }
                if (h = !1, r !== 2) continue;
              }
            }
            if (r === 1) {
              Ol(e, 0), Ia(e, t, 0, !0);
              break;
            }
            e: {
              switch (u = e, r) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 4:
                  if ((t & 4194176) === t) {
                    Ia(
                      u,
                      t,
                      Ta,
                      !ln
                    );
                    break e;
                  }
                  break;
                case 2:
                  La = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(i(329));
              }
              if (u.finishedWork = a, u.finishedLanes = t, (t & 62914560) === t && (h = lo + 300 - xa(), 10 < h)) {
                if (Ia(
                  u,
                  t,
                  Ta,
                  !ln
                ), x(u, 0) !== 0) break e;
                u.timeoutHandle = Rd(
                  Mf.bind(
                    null,
                    u,
                    a,
                    La,
                    Ru,
                    no,
                    t,
                    Ta,
                    rl,
                    kl,
                    ln,
                    2,
                    -0,
                    0
                  ),
                  h
                );
                break e;
              }
              Mf(
                u,
                a,
                La,
                Ru,
                no,
                t,
                Ta,
                rl,
                kl,
                ln,
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
      function Sr(e) {
        La === null ? La = e : La.push.apply(
          La,
          e
        );
      }
      function Mf(e, t, a, u, r, h, S, M, B, k, re, se, pe) {
        var Ye = t.subtreeFlags;
        if ((Ye & 8192 || (Ye & 16785408) === 16785408) && (jd(), gf(t), t = Hd(), t !== null)) {
          e.cancelPendingCommit = t(
            Bf.bind(
              null,
              e,
              a,
              u,
              r,
              S,
              M,
              B,
              1,
              se,
              pe
            )
          ), Ia(e, h, S, !k);
          return;
        }
        Bf(
          e,
          a,
          u,
          r,
          S,
          M,
          B,
          re,
          se,
          pe
        );
      }
      function ud(e) {
        for (var t = e; ; ) {
          var a = t.tag;
          if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
            for (var u = 0; u < a.length; u++) {
              var r = a[u], h = r.getSnapshot;
              r = r.value;
              try {
                if (!ca(h(), r)) return !1;
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
      function Ia(e, t, a, u) {
        t &= ~ao, t &= ~rl, e.suspendedLanes |= t, e.pingedLanes &= ~t, u && (e.warmLanes |= t), u = e.expirationTimes;
        for (var r = t; 0 < r; ) {
          var h = 31 - oa(r), S = 1 << h;
          u[h] = -1, r &= ~S;
        }
        a !== 0 && X(e, a, t);
      }
      function Df() {
        return (ot & 6) === 0 ? ($(0), !1) : !0;
      }
      function Er() {
        if (Ke !== null) {
          if (dt === 0)
            var e = Ke.return;
          else
            e = Ke, an = il = null, ml(e), Kl = null, Ni = 0, e = Ke;
          for (; e !== null; )
            lf(e.alternate, e), e = e.return;
          Ke = null;
        }
      }
      function Ol(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var a = e.timeoutHandle;
        a !== Hr && (e.timeoutHandle = Hr, Od(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Er(), st = e, Ke = a = yn(e.current, null), we = t, dt = 0, da = null, ln = !1, Pl = H(e, t), to = !1, kl = Ta = ao = rl = Mn = Tt = 0, La = ji = null, no = !1, (t & 8) !== 0 && (t |= t & 32);
        var u = e.entangledLanes;
        if (u !== 0)
          for (e = e.entanglements, u &= t; 0 < u; ) {
            var r = 31 - oa(u), h = 1 << r;
            t |= e[r], u &= ~h;
          }
        return un = t, Ce(), a;
      }
      function Af(e, t) {
        Qe = null, He.H = Va, t === xi ? (t = mt(), dt = 3) : t === Pr ? (t = mt(), dt = 4) : dt = t === Uc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, da = t, Ke === null && (Tt = 1, Ga(
          e,
          Z(t, e.current)
        ));
      }
      function Cf() {
        var e = ba.current;
        return e === null ? !0 : (we & 4194176) === we ? Ha === null : (we & 62914560) === we || (we & 536870912) !== 0 ? e === Ha : !1;
      }
      function Rf() {
        var e = He.H;
        return He.H = Va, e === null ? Va : e;
      }
      function Of() {
        var e = He.A;
        return He.A = Wh, e;
      }
      function br() {
        Tt = 4, ln || (we & 4194176) !== we && ba.current !== null || (Pl = !0), (Mn & 134217727) === 0 && (rl & 134217727) === 0 || st === null || Ia(
          st,
          we,
          Ta,
          !1
        );
      }
      function Tr(e, t, a) {
        var u = ot;
        ot |= 2;
        var r = Rf(), h = Of();
        (st !== e || we !== t) && (Ru = null, Ol(e, t)), t = !1;
        var S = Tt;
        e: do
          try {
            if (dt !== 0 && Ke !== null) {
              var M = Ke, B = da;
              switch (dt) {
                case 8:
                  Er(), S = 6;
                  break e;
                case 3:
                case 2:
                case 6:
                  ba.current === null && (t = !0);
                  var k = dt;
                  if (dt = 0, da = null, zl(e, M, B, k), a && Pl) {
                    S = 0;
                    break e;
                  }
                  break;
                default:
                  k = dt, dt = 0, da = null, zl(e, M, B, k);
              }
            }
            rd(), S = Tt;
            break;
          } catch (re) {
            Af(e, re);
          }
        while (!0);
        return t && e.shellSuspendCounter++, an = il = null, ot = u, He.H = r, He.A = h, Ke === null && (st = null, we = 0, Ce()), S;
      }
      function rd() {
        for (; Ke !== null; ) zf(Ke);
      }
      function od(e, t) {
        var a = ot;
        ot |= 2;
        var u = Rf(), r = Of();
        st !== e || we !== t ? (Ru = null, Hi = xa() + 500, Ol(e, t)) : Pl = H(
          e,
          t
        );
        e: do
          try {
            if (dt !== 0 && Ke !== null) {
              t = Ke;
              var h = da;
              t: switch (dt) {
                case 1:
                  dt = 0, da = null, zl(e, t, h, 1);
                  break;
                case 2:
                  if (Ma(h)) {
                    dt = 0, da = null, xf(t);
                    break;
                  }
                  t = function() {
                    dt === 2 && st === e && (dt = 7), ve(e);
                  }, h.then(t, t);
                  break e;
                case 3:
                  dt = 7;
                  break e;
                case 4:
                  dt = 5;
                  break e;
                case 7:
                  Ma(h) ? (dt = 0, da = null, xf(t)) : (dt = 0, da = null, zl(e, t, h, 7));
                  break;
                case 5:
                  var S = null;
                  switch (Ke.tag) {
                    case 26:
                      S = Ke.memoizedState;
                    case 5:
                    case 27:
                      var M = Ke, B = M.type, k = M.pendingProps;
                      if (S ? yc(S) : ec(B, k)) {
                        dt = 0, da = null;
                        var re = M.sibling;
                        if (re !== null) Ke = re;
                        else {
                          var se = M.return;
                          se !== null ? (Ke = se, uu(se)) : Ke = null;
                        }
                        break t;
                      }
                  }
                  dt = 0, da = null, zl(e, t, h, 5);
                  break;
                case 6:
                  dt = 0, da = null, zl(e, t, h, 6);
                  break;
                case 8:
                  Er(), Tt = 6;
                  break e;
                default:
                  throw Error(i(462));
              }
            }
            fd();
            break;
          } catch (pe) {
            Af(e, pe);
          }
        while (!0);
        return an = il = null, He.H = u, He.A = r, ot = a, Ke !== null ? 0 : (st = null, we = 0, Ce(), Tt);
      }
      function fd() {
        for (; Ke !== null && !Vh(); )
          zf(Ke);
      }
      function zf(e) {
        var t = ko(
          e.alternate,
          e,
          un
        );
        e.memoizedProps = e.pendingProps, t === null ? uu(e) : Ke = t;
      }
      function xf(e) {
        var t = e, a = t.alternate;
        switch (t.tag) {
          case 15:
          case 0:
            t = Si(
              a,
              t,
              t.pendingProps,
              t.type,
              void 0,
              we
            );
            break;
          case 11:
            t = Si(
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
            lf(a, t), t = Ke = Vf(t, un), t = ko(a, t, un);
        }
        e.memoizedProps = e.pendingProps, t === null ? uu(e) : Ke = t;
      }
      function zl(e, t, a, u) {
        an = il = null, ml(t), Kl = null, Ni = 0;
        var r = t.return;
        try {
          if (Ju(
            e,
            r,
            t,
            a,
            we
          )) {
            Tt = 1, Ga(
              e,
              Z(a, e.current)
            ), Ke = null;
            return;
          }
        } catch (h) {
          if (r !== null) throw Ke = r, h;
          Tt = 1, Ga(
            e,
            Z(a, e.current)
          ), Ke = null;
          return;
        }
        t.flags & 32768 ? (Pe || u === 1 ? e = !0 : Pl || (we & 536870912) !== 0 ? e = !1 : (ln = e = !0, (u === 2 || u === 3 || u === 6) && (u = ba.current, u !== null && u.tag === 13 && (u.flags |= 16384))), Nf(t, e)) : uu(t);
      }
      function uu(e) {
        var t = e;
        do {
          if ((t.flags & 32768) !== 0) {
            Nf(
              t,
              ln
            );
            return;
          }
          e = t.return;
          var a = ad(
            t.alternate,
            t,
            un
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
        Tt === 0 && (Tt = 5);
      }
      function Nf(e, t) {
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
        Tt = 6, Ke = null;
      }
      function Bf(e, t, a, u, r, h, S, M, B, k) {
        var re = He.T, se = In();
        try {
          ea(2), He.T = null, cd(
            e,
            t,
            a,
            u,
            se,
            r,
            h,
            S,
            M,
            B,
            k
          );
        } finally {
          He.T = re, ea(se);
        }
      }
      function cd(e, t, a, u, r, h, S, M) {
        do
          Pn();
        while (ol !== null);
        if ((ot & 6) !== 0) throw Error(i(327));
        var B = e.finishedWork;
        if (u = e.finishedLanes, B === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, B === e.current) throw Error(i(177));
        e.callbackNode = null, e.callbackPriority = 0, e.cancelPendingCommit = null;
        var k = B.lanes | B.childLanes;
        if (k |= Kr, O(
          e,
          u,
          k,
          h,
          S,
          M
        ), e === st && (Ke = st = null, we = 0), (B.subtreeFlags & 10256) === 0 && (B.flags & 10256) === 0 || Ou || (Ou = !0, io = k, uo = a, vd(Qr, function() {
          return Pn(), null;
        })), a = (B.flags & 15990) !== 0, (B.subtreeFlags & 15990) !== 0 || a ? (a = He.T, He.T = null, h = In(), ea(2), S = ot, ot |= 4, ld(e, B), pf(B, e), Ad(e.containerInfo), e.current = B, df(e, B.alternate, B), Lh(), ot = S, ea(h), He.T = a) : e.current = B, Ou ? (Ou = !1, ol = e, Vi = u) : Gf(e, k), k = e.pendingLanes, k === 0 && (Dn = null), j(B.stateNode), ve(e), t !== null)
          for (r = e.onRecoverableError, B = 0; B < t.length; B++)
            k = t[B], r(k.value, {
              componentStack: k.stack
            });
        return (Vi & 3) !== 0 && Pn(), k = e.pendingLanes, (u & 4194218) !== 0 && (k & 42) !== 0 ? e === ro ? Li++ : (Li = 0, ro = e) : Li = 0, $(0), null;
      }
      function Gf(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, bi(t)));
      }
      function Pn() {
        if (ol !== null) {
          var e = ol, t = io;
          io = 0;
          var a = le(Vi), u = 32 > a ? 32 : a;
          a = He.T;
          var r = In();
          try {
            if (ea(u), He.T = null, ol === null)
              var h = !1;
            else {
              u = uo, uo = null;
              var S = ol, M = Vi;
              if (ol = null, Vi = 0, (ot & 6) !== 0)
                throw Error(i(331));
              var B = ot;
              if (ot |= 4, Ef(S.current), yf(
                S,
                S.current,
                M,
                u
              ), ot = B, $(0, !1), fa && typeof fa.onPostCommitFiberRoot == "function")
                try {
                  fa.onPostCommitFiberRoot(Ri, S);
                } catch {
                }
              h = !0;
            }
            return h;
          } finally {
            ea(r), He.T = a, Gf(e, t);
          }
        }
        return !1;
      }
      function jf(e, t, a) {
        t = Z(a, t), t = Ja(e.stateNode, t, 2), e = je(e, t, 2), e !== null && (ae(e, 2), ve(e));
      }
      function it(e, t, a) {
        if (e.tag === 3)
          jf(e, e, a);
        else
          for (; t !== null; ) {
            if (t.tag === 3) {
              jf(
                t,
                e,
                a
              );
              break;
            } else if (t.tag === 1) {
              var u = t.stateNode;
              if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Dn === null || !Dn.has(u))) {
                e = Z(a, e), a = Al(2), u = je(t, a, 2), u !== null && (qt(
                  a,
                  u,
                  t,
                  e
                ), ae(u, 2), ve(u));
                break;
              }
            }
            t = t.return;
          }
      }
      function _r(e, t, a) {
        var u = e.pingCache;
        if (u === null) {
          u = e.pingCache = new Ph();
          var r = /* @__PURE__ */ new Set();
          u.set(t, r);
        } else
          r = u.get(t), r === void 0 && (r = /* @__PURE__ */ new Set(), u.set(t, r));
        r.has(a) || (to = !0, r.add(a), e = sd.bind(null, e, t, a), t.then(e, e));
      }
      function sd(e, t, a) {
        var u = e.pingCache;
        u !== null && u.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, st === e && (we & a) === a && (Tt === 4 || Tt === 3 && (we & 62914560) === we && 300 > xa() - lo ? (ot & 2) === 0 && Ol(e, 0) : ao |= a, kl === we && (kl = 0)), ve(e);
      }
      function Hf(e, t) {
        t === 0 && (t = W()), e = be(e, t), e !== null && (ae(e, t), ve(e));
      }
      function dd(e) {
        var t = e.memoizedState, a = 0;
        t !== null && (a = t.retryLane), Hf(e, a);
      }
      function hd(e, t) {
        var a = 0;
        switch (e.tag) {
          case 13:
            var u = e.stateNode, r = e.memoizedState;
            r !== null && (a = r.retryLane);
            break;
          case 19:
            u = e.stateNode;
            break;
          case 22:
            u = e.stateNode._retryCache;
            break;
          default:
            throw Error(i(314));
        }
        u !== null && u.delete(t), Hf(e, a);
      }
      function vd(e, t) {
        return hu(e, t);
      }
      function pd(e, t, a, u) {
        this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Ur(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
      }
      function yn(e, t) {
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
      function Vf(e, t) {
        e.flags &= 31457282;
        var a = e.alternate;
        return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext
        }), e;
      }
      function ru(e, t, a, u, r, h) {
        var S = 0;
        if (u = e, typeof e == "function") Ur(e) && (S = 1);
        else if (typeof e == "string")
          S = ya && Ft ? sc(e, a, Vt.current) ? 26 : Sc(e) ? 27 : 5 : ya ? sc(
            e,
            a,
            Vt.current
          ) ? 26 : 5 : Ft && Sc(e) ? 27 : 5;
        else
          e: switch (e) {
            case Nl:
              return kn(
                a.children,
                r,
                h,
                t
              );
            case Kf:
              S = 8, r |= 24;
              break;
            case Rr:
              return e = p(12, a, t, r | 2), e.elementType = Rr, e.lanes = h, e;
            case zr:
              return e = p(13, a, t, r), e.elementType = zr, e.lanes = h, e;
            case xr:
              return e = p(19, a, t, r), e.elementType = xr, e.lanes = h, e;
            case wf:
              return Lf(a, r, h, t);
            default:
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Sd:
                  case gn:
                    S = 10;
                    break e;
                  case Zf:
                    S = 9;
                    break e;
                  case Or:
                    S = 11;
                    break e;
                  case Nr:
                    S = 14;
                    break e;
                  case Sn:
                    S = 16, u = null;
                    break e;
                }
              S = 29, a = Error(
                i(
                  130,
                  e === null ? "null" : typeof e,
                  ""
                )
              ), u = null;
          }
        return t = p(S, a, t, r), t.elementType = e, t.type = u, t.lanes = h, t;
      }
      function kn(e, t, a, u) {
        return e = p(7, e, u, t), e.lanes = a, e;
      }
      function Lf(e, t, a, u) {
        e = p(22, e, u, t), e.elementType = wf, e.lanes = a;
        var r = {
          _visibility: 1,
          _pendingVisibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
          _current: null,
          detach: function() {
            var h = r._current;
            if (h === null) throw Error(i(456));
            if ((r._pendingVisibility & 2) === 0) {
              var S = be(h, 2);
              S !== null && (r._pendingVisibility |= 2, wt(S, h, 2));
            }
          },
          attach: function() {
            var h = r._current;
            if (h === null) throw Error(i(456));
            if ((r._pendingVisibility & 2) !== 0) {
              var S = be(h, 2);
              S !== null && (r._pendingVisibility &= -3, wt(S, h, 2));
            }
          }
        };
        return e.stateNode = r, e;
      }
      function Mr(e, t, a) {
        return e = p(6, e, null, t), e.lanes = a, e;
      }
      function Dr(e, t, a) {
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
      function md(e, t, a, u, r, h, S, M) {
        this.tag = 1, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Hr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = q(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = q(0), this.hiddenUpdates = q(null), this.identifierPrefix = u, this.onUncaughtError = r, this.onCaughtError = h, this.onRecoverableError = S, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = M, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function Yf(e, t, a, u, r, h, S, M, B, k, re, se) {
        return e = new md(
          e,
          t,
          a,
          S,
          M,
          B,
          k,
          se
        ), t = 1, h === !0 && (t |= 24), h = p(3, null, null, t), e.current = h, h.stateNode = e, t = lr(), t.refCount++, e.pooledCache = t, t.refCount++, h.memoizedState = {
          element: u,
          isDehydrated: a,
          cache: t
        }, $e(h), e;
      }
      function qf(e) {
        return e ? (e = jl, e) : jl;
      }
      function Xf(e) {
        var t = e._reactInternals;
        if (t === void 0)
          throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
        return e = E(t), e = e !== null ? _(e) : null, e === null ? null : Di(e.stateNode);
      }
      function Qf(e, t, a, u, r, h) {
        r = qf(r), u.context === null ? u.context = r : u.pendingContext = r, u = Ge(t), u.payload = { element: a }, h = h === void 0 ? null : h, h !== null && (u.callback = h), a = je(e, u, t), a !== null && (wt(a, e, t), Me(a, e, t));
      }
      function Ff(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
          var a = e.retryLane;
          e.retryLane = a !== 0 && a < t ? a : t;
        }
      }
      function Ar(e, t) {
        Ff(e, t), (e = e.alternate) && Ff(e, t);
      }
      var Fe = {}, yd = Ua, ra = Es(), Cr = Object.assign, gd = Symbol.for("react.element"), ou = Symbol.for("react.transitional.element"), xl = Symbol.for("react.portal"), Nl = Symbol.for("react.fragment"), Kf = Symbol.for("react.strict_mode"), Rr = Symbol.for("react.profiler"), Sd = Symbol.for("react.provider"), Zf = Symbol.for("react.consumer"), gn = Symbol.for("react.context"), Or = Symbol.for("react.forward_ref"), zr = Symbol.for("react.suspense"), xr = Symbol.for("react.suspense_list"), Nr = Symbol.for("react.memo"), Sn = Symbol.for("react.lazy"), wf = Symbol.for("react.offscreen"), Ed = Symbol.for("react.memo_cache_sentinel"), Jf = Symbol.iterator, bd = Symbol.for("react.client.reference"), He = yd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Br, Wf, Gr = !1, fu = Array.isArray, Td = l.rendererVersion, _d = l.rendererPackageName, Pf = l.extraDevToolsConfig, Di = l.getPublicInstance, Ud = l.getRootHostContext, Md = l.getChildHostContext, Dd = l.prepareForCommit, Ad = l.resetAfterCommit, Cd = l.createInstance, jr = l.appendInitialChild, kf = l.finalizeInitialChildren, cu = l.shouldSetTextContent, If = l.createTextInstance, Rd = l.scheduleTimeout, Od = l.cancelTimeout, Hr = l.noTimeout, $a = l.isPrimaryRenderer;
      l.warnsIfNotActing;
      var Qt = l.supportsMutation, En = l.supportsPersistence, ma = l.supportsHydration, $f = l.getInstanceFromNode;
      l.beforeActiveInstanceBlur, l.afterActiveInstanceBlur;
      var zd = l.preparePortalMount;
      l.prepareScopeUpdate, l.getInstanceFromScope;
      var ea = l.setCurrentUpdatePriority, In = l.getCurrentUpdatePriority, xd = l.resolveUpdatePriority;
      l.resolveEventType, l.resolveEventTimeStamp;
      var Nd = l.shouldAttemptEagerTransition, Bd = l.detachDeletedInstance;
      l.requestPostPaintCallback;
      var Gd = l.maySuspendCommit, ec = l.preloadInstance, jd = l.startSuspendingCommit, tc = l.suspendInstance, Hd = l.waitForCommitToBeReady, Bl = l.NotPendingTransition, $n = l.HostTransitionContext, Vd = l.resetFormInstance;
      l.bindToConsole;
      var Ld = l.supportsMicrotasks, Yd = l.scheduleMicrotask, Ai = l.supportsTestSelectors, qd = l.findFiberRoot, Xd = l.getBoundingRect, Qd = l.getTextContent, Ci = l.isHiddenSubtree, Fd = l.matchAccessibilityRole, Kd = l.setFocusIfFocusable, Zd = l.setupIntersectionObserver, wd = l.appendChild, Jd = l.appendChildToContainer, Wd = l.commitTextUpdate, Pd = l.commitMount, kd = l.commitUpdate, Id = l.insertBefore, $d = l.insertInContainerBefore, eh = l.removeChild, th = l.removeChildFromContainer, ac = l.resetTextContent, ah = l.hideInstance, nh = l.hideTextInstance, lh = l.unhideInstance, ih = l.unhideTextInstance, uh = l.clearContainer, rh = l.cloneInstance, nc = l.createContainerChildSet, lc = l.appendChildToContainerChildSet, oh = l.finalizeContainerChildren, ic = l.replaceContainerChildren, uc = l.cloneHiddenInstance, rc = l.cloneHiddenTextInstance, Vr = l.isSuspenseInstancePending, Lr = l.isSuspenseInstanceFallback, fh = l.getSuspenseInstanceFallbackErrorDetails, ch = l.registerSuspenseInstanceRetry, sh = l.canHydrateFormStateMarker, dh = l.isFormStateMarkerMatching, oc = l.getNextHydratableSibling, fc = l.getFirstHydratableChild, hh = l.getFirstHydratableChildWithinContainer, vh = l.getFirstHydratableChildWithinSuspenseInstance, ph = l.canHydrateInstance, mh = l.canHydrateTextInstance, yh = l.canHydrateSuspenseInstance, gh = l.hydrateInstance, Sh = l.hydrateTextInstance, Eh = l.hydrateSuspenseInstance, bh = l.getNextHydratableInstanceAfterSuspenseInstance, Th = l.commitHydratedContainer, _h = l.commitHydratedSuspenseInstance, Uh = l.clearSuspenseBoundary, Mh = l.clearSuspenseBoundaryFromContainer, cc = l.shouldDeleteUnhydratedTailInstances;
      l.diffHydratedPropsForDevWarnings, l.diffHydratedTextForDevWarnings, l.describeHydratableInstanceForDevWarnings;
      var Dh = l.validateHydratableInstance, Ah = l.validateHydratableTextInstance, ya = l.supportsResources, sc = l.isHostHoistableType, Yr = l.getHoistableRoot, dc = l.getResource, hc = l.acquireResource, vc = l.releaseResource, Ch = l.hydrateHoistable, pc = l.mountHoistable, mc = l.unmountHoistable, Rh = l.createHoistableInstance, Oh = l.prepareToCommitHoistables, zh = l.mayResourceSuspendCommit, yc = l.preloadResource, xh = l.suspendResource, Ft = l.supportsSingletons, gc = l.resolveSingletonInstance, Nh = l.clearSingleton, Bh = l.acquireSingletonInstance, Gh = l.releaseSingletonInstance, Sc = l.isHostSingletonType, qr = [], Gl = -1, jl = {}, oa = Math.clz32 ? Math.clz32 : z, jh = Math.log, Hh = Math.LN2, su = 128, du = 4194304, hu = ra.unstable_scheduleCallback, Xr = ra.unstable_cancelCallback, Vh = ra.unstable_shouldYield, Lh = ra.unstable_requestPaint, xa = ra.unstable_now, Ec = ra.unstable_ImmediatePriority, Yh = ra.unstable_UserBlockingPriority, Qr = ra.unstable_NormalPriority, qh = ra.unstable_IdlePriority, Xh = ra.log, Qh = ra.unstable_setDisableYieldValue, Ri = null, fa = null, ca = typeof Object.is == "function" ? Object.is : ee, bc = /* @__PURE__ */ new WeakMap(), Hl = [], Vl = 0, vu = null, pu = 0, ga = [], Sa = 0, el = null, en = 1, tn = "", Vt = C(null), Oi = C(null), bn = C(null), mu = C(null), Jt = null, Kt = null, Pe = !1, Na = null, ja = !1, Fr = Error(i(519)), Ea = [], Ll = 0, Kr = 0, yu = null, Yl = null, Zr = !1, gu = !1, wr = !1, ql = 0, zi = null, Jr = 0, Xl = 0, Ql = null, Tn = !1, Wr = !1, Fh = Object.prototype.hasOwnProperty, xi = Error(i(460)), Pr = Error(i(474)), Su = { then: function() {
      } }, Fl = null, Kl = null, Ni = 0, tl = Ct(!0), Tc = Ct(!1), Zl = C(null), Eu = C(0), ba = C(null), Ha = null, zt = C(0), _n = 0, Qe = null, rt = null, Dt = null, bu = !1, wl = !1, al = !1, Tu = 0, Bi = 0, Jl = null, Kh = 0, kr = function() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }, Va = {
        readContext: Xt,
        use: _e,
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
      Va.useCacheRefresh = lt, Va.useMemoCache = lt, Va.useHostTransitionStatus = lt, Va.useFormState = lt, Va.useActionState = lt, Va.useOptimistic = lt;
      var nl = {
        readContext: Xt,
        use: _e,
        useCallback: function(e, t) {
          return Ot().memoizedState = [
            e,
            t === void 0 ? null : t
          ], e;
        },
        useContext: Xt,
        useEffect: _l,
        useImperativeHandle: function(e, t, a) {
          a = a != null ? a.concat([e]) : null, Ln(
            4194308,
            4,
            Fa.bind(null, t, e),
            a
          );
        },
        useLayoutEffect: function(e, t) {
          return Ln(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
          Ln(4, 2, e, t);
        },
        useMemo: function(e, t) {
          var a = Ot();
          t = t === void 0 ? null : t;
          var u = e();
          if (al) {
            P(!0);
            try {
              e();
            } finally {
              P(!1);
            }
          }
          return a.memoizedState = [u, t], u;
        },
        useReducer: function(e, t, a) {
          var u = Ot();
          if (a !== void 0) {
            var r = a(t);
            if (al) {
              P(!0);
              try {
                a(t);
              } finally {
                P(!1);
              }
            }
          } else r = t;
          return u.memoizedState = u.baseState = r, e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: r
          }, u.queue = e, e = e.dispatch = Ii.bind(
            null,
            Qe,
            e
          ), [u.memoizedState, e];
        },
        useRef: function(e) {
          var t = Ot();
          return e = { current: e }, t.memoizedState = e;
        },
        useState: function(e) {
          e = Bn(e);
          var t = e.queue, a = pi.bind(
            null,
            Qe,
            t
          );
          return t.dispatch = a, [e.memoizedState, a];
        },
        useDebugValue: Za,
        useDeferredValue: function(e, t) {
          var a = Ot();
          return Xn(a, e, t);
        },
        useTransition: function() {
          var e = Bn(!1);
          return e = di.bind(
            null,
            Qe,
            e.queue,
            !0,
            !1
          ), Ot().memoizedState = e, [!1, e];
        },
        useSyncExternalStore: function(e, t, a) {
          var u = Qe, r = Ot();
          if (Pe) {
            if (a === void 0)
              throw Error(i(407));
            a = a();
          } else {
            if (a = t(), st === null)
              throw Error(i(349));
            (we & 60) !== 0 || zn(u, t, a);
          }
          r.memoizedState = a;
          var h = { value: a, getSnapshot: t };
          return r.queue = h, _l(ri.bind(null, u, h, e), [
            e
          ]), u.flags |= 2048, Ra(
            9,
            xn.bind(
              null,
              u,
              h,
              a,
              t
            ),
            { destroy: void 0 },
            null
          ), a;
        },
        useId: function() {
          var e = Ot(), t = st.identifierPrefix;
          if (Pe) {
            var a = tn, u = en;
            a = (u & ~(1 << 32 - oa(u) - 1)).toString(32) + a, t = ":" + t + "R" + a, a = Tu++, 0 < a && (t += "H" + a.toString(32)), t += ":";
          } else
            a = Kh++, t = ":" + t + "r" + a.toString(32) + ":";
          return e.memoizedState = t;
        },
        useCacheRefresh: function() {
          return Ot().memoizedState = vi.bind(
            null,
            Qe
          );
        }
      };
      nl.useMemoCache = qa, nl.useHostTransitionStatus = Fn, nl.useFormState = Pi, nl.useActionState = Pi, nl.useOptimistic = function(e) {
        var t = Ot();
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
      var Un = {
        readContext: Xt,
        use: _e,
        useCallback: si,
        useContext: Xt,
        useEffect: Qa,
        useImperativeHandle: Ka,
        useInsertionEffect: ci,
        useLayoutEffect: qn,
        useMemo: cn,
        useReducer: Ca,
        useRef: Tl,
        useState: function() {
          return Ca(Aa);
        },
        useDebugValue: Za,
        useDeferredValue: function(e, t) {
          var a = vt();
          return Ul(
            a,
            rt.memoizedState,
            e,
            t
          );
        },
        useTransition: function() {
          var e = Ca(Aa)[0], t = vt().memoizedState;
          return [
            typeof e == "boolean" ? e : Ya(e),
            t
          ];
        },
        useSyncExternalStore: gl,
        useId: hi
      };
      Un.useCacheRefresh = kt, Un.useMemoCache = qa, Un.useHostTransitionStatus = Fn, Un.useFormState = Hn, Un.useActionState = Hn, Un.useOptimistic = function(e, t) {
        var a = vt();
        return fi(a, rt, e, t);
      };
      var ll = {
        readContext: Xt,
        use: _e,
        useCallback: si,
        useContext: Xt,
        useEffect: Qa,
        useImperativeHandle: Ka,
        useInsertionEffect: ci,
        useLayoutEffect: qn,
        useMemo: cn,
        useReducer: yl,
        useRef: Tl,
        useState: function() {
          return yl(Aa);
        },
        useDebugValue: Za,
        useDeferredValue: function(e, t) {
          var a = vt();
          return rt === null ? Xn(a, e, t) : Ul(
            a,
            rt.memoizedState,
            e,
            t
          );
        },
        useTransition: function() {
          var e = yl(Aa)[0], t = vt().memoizedState;
          return [
            typeof e == "boolean" ? e : Ya(e),
            t
          ];
        },
        useSyncExternalStore: gl,
        useId: hi
      };
      ll.useCacheRefresh = kt, ll.useMemoCache = qa, ll.useHostTransitionStatus = Fn, ll.useFormState = Vn, ll.useActionState = Vn, ll.useOptimistic = function(e, t) {
        var a = vt();
        return rt !== null ? fi(a, rt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
      };
      var Ir = {
        isMounted: function(e) {
          return (e = e._reactInternals) ? y(e) === e : !1;
        },
        enqueueSetState: function(e, t, a) {
          e = e._reactInternals;
          var u = ua(), r = Ge(u);
          r.payload = t, a != null && (r.callback = a), t = je(e, r, u), t !== null && (wt(t, e, u), Me(t, e, u));
        },
        enqueueReplaceState: function(e, t, a) {
          e = e._reactInternals;
          var u = ua(), r = Ge(u);
          r.tag = 1, r.payload = t, a != null && (r.callback = a), t = je(e, r, u), t !== null && (wt(t, e, u), Me(t, e, u));
        },
        enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var a = ua(), u = Ge(a);
          u.tag = 2, t != null && (u.callback = t), t = je(e, u, a), t !== null && (wt(t, e, a), Me(t, e, a));
        }
      }, _c = typeof reportError == "function" ? reportError : function(e) {
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
      }, Uc = Error(i(461)), Bt = !1, $r = { dehydrated: null, treeContext: null, retryLane: 0 }, _u = C(null), il = null, an = null, Zh = typeof AbortController < "u" ? AbortController : function() {
        var e = [], t = this.signal = {
          aborted: !1,
          addEventListener: function(a, u) {
            e.push(u);
          }
        };
        this.abort = function() {
          t.aborted = !0, e.forEach(function(a) {
            return a();
          });
        };
      }, wh = ra.unstable_scheduleCallback, Jh = ra.unstable_NormalPriority, Et = {
        $$typeof: gn,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      }, Mc = He.S;
      He.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && De(e, t), Mc !== null && Mc(e, t);
      };
      var ul = C(null), nn = !1, bt = !1, eo = !1, Dc = typeof WeakSet == "function" ? WeakSet : Set, Gt = null, Ac = !1, At = null, sa = !1, Ba = null, Wl = 8192, Wh = {
        getCacheForType: function(e) {
          var t = Xt(Et), a = t.data.get(e);
          return a === void 0 && (a = e(), t.data.set(e, a)), a;
        }
      }, Uu = 0, Mu = 1, Du = 2, Au = 3, Cu = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var Gi = Symbol.for;
        Uu = Gi("selector.component"), Mu = Gi("selector.has_pseudo_class"), Du = Gi("selector.role"), Au = Gi("selector.test_id"), Cu = Gi("selector.text");
      }
      var Ph = typeof WeakMap == "function" ? WeakMap : Map, ot = 0, st = null, Ke = null, we = 0, dt = 0, da = null, ln = !1, Pl = !1, to = !1, un = 0, Tt = 0, Mn = 0, rl = 0, ao = 0, Ta = 0, kl = 0, ji = null, La = null, no = !1, lo = 0, Hi = 1 / 0, Ru = null, Dn = null, Ou = !1, ol = null, Vi = 0, io = 0, uo = null, Li = 0, ro = null;
      return Fe.attemptContinuousHydration = function(e) {
        if (e.tag === 13) {
          var t = be(e, 67108864);
          t !== null && wt(t, e, 67108864), Ar(e, 67108864);
        }
      }, Fe.attemptHydrationAtCurrentPriority = function(e) {
        if (e.tag === 13) {
          var t = ua(), a = be(e, t);
          a !== null && wt(a, e, t), Ar(e, t);
        }
      }, Fe.attemptSynchronousHydration = function(e) {
        switch (e.tag) {
          case 3:
            if (e = e.stateNode, e.current.memoizedState.isDehydrated) {
              var t = R(e.pendingLanes);
              if (t !== 0) {
                for (e.pendingLanes |= 2, e.entangledLanes |= 2; t; ) {
                  var a = 1 << 31 - oa(t);
                  e.entanglements[1] |= a, t &= ~a;
                }
                ve(e), (ot & 6) === 0 && (Hi = xa() + 500, $(0));
              }
            }
            break;
          case 13:
            t = be(e, 2), t !== null && wt(t, e, 2), Df(), Ar(e, 2);
        }
      }, Fe.batchedUpdates = function(e, t) {
        return e(t);
      }, Fe.createComponentSelector = function(e) {
        return { $$typeof: Uu, value: e };
      }, Fe.createContainer = function(e, t, a, u, r, h, S, M, B, k) {
        return Yf(
          e,
          t,
          !1,
          null,
          a,
          u,
          h,
          S,
          M,
          B,
          k,
          null
        );
      }, Fe.createHasPseudoClassSelector = function(e) {
        return { $$typeof: Mu, value: e };
      }, Fe.createHydrationContainer = function(e, t, a, u, r, h, S, M, B, k, re, se, pe) {
        return e = Yf(
          a,
          u,
          !0,
          e,
          r,
          h,
          M,
          B,
          k,
          re,
          se,
          pe
        ), e.context = qf(null), a = e.current, u = ua(), r = Ge(u), r.callback = t ?? null, je(a, r, u), e.current.lanes = u, ae(e, u), ve(e), e;
      }, Fe.createPortal = function(e, t, a) {
        var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: xl,
          key: u == null ? null : "" + u,
          children: e,
          containerInfo: t,
          implementation: a
        };
      }, Fe.createRoleSelector = function(e) {
        return { $$typeof: Du, value: e };
      }, Fe.createTestNameSelector = function(e) {
        return { $$typeof: Au, value: e };
      }, Fe.createTextSelector = function(e) {
        return { $$typeof: Cu, value: e };
      }, Fe.defaultOnCaughtError = function(e) {
        console.error(e);
      }, Fe.defaultOnRecoverableError = function(e) {
        _c(e);
      }, Fe.defaultOnUncaughtError = function(e) {
        _c(e);
      }, Fe.deferredUpdates = function(e) {
        var t = He.T, a = In();
        try {
          return ea(32), He.T = null, e();
        } finally {
          ea(a), He.T = t;
        }
      }, Fe.discreteUpdates = function(e, t, a, u, r) {
        var h = He.T, S = In();
        try {
          return ea(2), He.T = null, e(t, a, u, r);
        } finally {
          ea(S), He.T = h, ot === 0 && (Hi = xa() + 500);
        }
      }, Fe.findAllNodes = gr, Fe.findBoundingRects = function(e, t) {
        if (!Ai) throw Error(i(363));
        t = gr(e, t), e = [];
        for (var a = 0; a < t.length; a++)
          e.push(Xd(t[a]));
        for (t = e.length - 1; 0 < t; t--) {
          a = e[t];
          for (var u = a.x, r = u + a.width, h = a.y, S = h + a.height, M = t - 1; 0 <= M; M--)
            if (t !== M) {
              var B = e[M], k = B.x, re = k + B.width, se = B.y, pe = se + B.height;
              if (u >= k && h >= se && r <= re && S <= pe) {
                e.splice(t, 1);
                break;
              } else if (u !== k || a.width !== B.width || pe < h || se > S) {
                if (!(h !== se || a.height !== B.height || re < u || k > r)) {
                  k > u && (B.width += k - u, B.x = u), re < r && (B.width = r - k), e.splice(t, 1);
                  break;
                }
              } else {
                se > h && (B.height += se - h, B.y = h), pe < S && (B.height = S - se), e.splice(t, 1);
                break;
              }
            }
        }
        return e;
      }, Fe.findHostInstance = Xf, Fe.findHostInstanceWithNoPortals = function(e) {
        return e = E(e), e = e !== null ? D(e) : null, e === null ? null : Di(e.stateNode);
      }, Fe.findHostInstanceWithWarning = function(e) {
        return Xf(e);
      }, Fe.flushPassiveEffects = Pn, Fe.flushSyncFromReconciler = function(e) {
        var t = ot;
        ot |= 1;
        var a = He.T, u = In();
        try {
          if (ea(2), He.T = null, e)
            return e();
        } finally {
          ea(u), He.T = a, ot = t, (ot & 6) === 0 && $(0);
        }
      }, Fe.flushSyncWork = Df, Fe.focusWithin = function(e, t) {
        if (!Ai) throw Error(i(363));
        for (e = pr(e), t = Tf(e, t), t = Array.from(t), e = 0; e < t.length; ) {
          var a = t[e++], u = a.tag;
          if (!Ci(a)) {
            if ((u === 5 || u === 26 || u === 27) && Kd(a.stateNode))
              return !0;
            for (a = a.child; a !== null; )
              t.push(a), a = a.sibling;
          }
        }
        return !1;
      }, Fe.getFindAllNodesFailureDescription = function(e, t) {
        if (!Ai) throw Error(i(363));
        var a = 0, u = [];
        e = [pr(e), 0];
        for (var r = 0; r < e.length; ) {
          var h = e[r++], S = h.tag, M = e[r++], B = t[M];
          if ((S !== 5 && S !== 26 && S !== 27 || !Ci(h)) && (mr(h, B) && (u.push(yr(B)), M++, M > a && (a = M)), M < t.length))
            for (h = h.child; h !== null; )
              e.push(h, M), h = h.sibling;
        }
        if (a < t.length) {
          for (e = []; a < t.length; a++)
            e.push(yr(t[a]));
          return `findAllNodes was able to match part of the selector:
  ` + (u.join(" > ") + `

No matching component was found for:
  `) + e.join(" > ");
        }
        return null;
      }, Fe.getPublicRootInstance = function(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
          case 27:
          case 5:
            return Di(e.child.stateNode);
          default:
            return e.child.stateNode;
        }
      }, Fe.injectIntoDevTools = function() {
        var e = {
          bundleType: 0,
          version: Td,
          rendererPackageName: _d,
          currentDispatcherRef: He,
          findFiberByHostInstance: $f,
          reconcilerVersion: "19.0.0"
        };
        if (Pf !== null && (e.rendererConfig = Pf), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") e = !1;
        else {
          var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (t.isDisabled || !t.supportsFiber) e = !0;
          else {
            try {
              Ri = t.inject(e), fa = t;
            } catch {
            }
            e = !!t.checkDCE;
          }
        }
        return e;
      }, Fe.isAlreadyRendering = function() {
        return !1;
      }, Fe.observeVisibleRects = function(e, t, a, u) {
        if (!Ai) throw Error(i(363));
        e = gr(e, t);
        var r = Zd(
          e,
          a,
          u
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
      }, Fe.startHostTransition = function(e, t, a, u) {
        if (e.tag !== 5) throw Error(i(476));
        var r = Qn(e).queue;
        di(
          e,
          r,
          t,
          Bl,
          a === null ? m : function() {
            var h = Qn(e).next.queue;
            return wa(
              e,
              h,
              {},
              ua()
            ), a(u);
          }
        );
      }, Fe.updateContainer = function(e, t, a, u) {
        var r = t.current, h = ua();
        return Qf(
          r,
          h,
          e,
          t,
          a,
          u
        ), h;
      }, Fe.updateContainerSync = function(e, t, a, u) {
        return t.tag === 0 && Pn(), Qf(
          t.current,
          2,
          e,
          t,
          a,
          u
        ), 2;
      }, Fe;
    }, o.exports.default = o.exports, Object.defineProperty(o.exports, "__esModule", { value: !0 });
  })(po)), po.exports;
}
var Qc;
function zv() {
  return Qc || (Qc = 1, vo.exports = Ov()), vo.exports;
}
var xv = zv();
const Nv = /* @__PURE__ */ ms(xv);
var Fc = Es();
function Xo(o, l, p) {
  if (!o) return;
  if (p(o) === !0) return o;
  let m = l ? o.return : o.child;
  for (; m; ) {
    const i = Xo(m, l, p);
    if (i) return i;
    m = l ? null : m.sibling;
  }
}
function bs(o) {
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
const Qo = /* @__PURE__ */ bs(/* @__PURE__ */ qe.createContext(null));
class Ts extends qe.Component {
  render() {
    return /* @__PURE__ */ qe.createElement(Qo.Provider, { value: this._reactInternals }, this.props.children);
  }
}
function _s() {
  const o = qe.useContext(Qo);
  if (o === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const l = qe.useId();
  return qe.useMemo(() => {
    for (const p of [o, o?.alternate]) {
      if (!p) continue;
      const m = Xo(p, !1, (i) => {
        let n = i.memoizedState;
        for (; n; ) {
          if (n.memoizedState === l) return !0;
          n = n.next;
        }
      });
      if (m) return m;
    }
  }, [o, l]);
}
const Bv = Symbol.for("react.context"), Gv = (o) => o !== null && typeof o == "object" && "$$typeof" in o && o.$$typeof === Bv;
function jv() {
  const o = _s(), [l] = qe.useState(() => /* @__PURE__ */ new Map());
  l.clear();
  let p = o;
  for (; p; ) {
    const m = p.type;
    Gv(m) && m !== Qo && !l.has(m) && l.set(m, qe.use(bs(m))), p = p.return;
  }
  return l;
}
function Hv() {
  const o = jv();
  return qe.useMemo(
    () => Array.from(o.keys()).reduce(
      (l, p) => (m) => /* @__PURE__ */ qe.createElement(l, null, /* @__PURE__ */ qe.createElement(p.Provider, { ...m, value: o.get(p) })),
      (l) => /* @__PURE__ */ qe.createElement(Ts, { ...l })
    ),
    [o]
  );
}
function Us(o) {
  let l = o.root;
  for (; l.getState().previousRoot; ) l = l.getState().previousRoot;
  return l;
}
const Ms = (o) => o && o.isOrthographicCamera, Vv = (o) => o && o.hasOwnProperty("current"), Lv = (o) => o != null && (typeof o == "string" || typeof o == "number" || o.isColor), Ji = /* @__PURE__ */ ((o, l) => typeof window < "u" && (((o = window.document) == null ? void 0 : o.createElement) || ((l = window.navigator) == null ? void 0 : l.product) === "ReactNative"))() ? qe.useLayoutEffect : qe.useEffect;
function Ds(o) {
  const l = qe.useRef(o);
  return Ji(() => void (l.current = o), [o]), l;
}
function Yv() {
  const o = _s(), l = Hv();
  return qe.useMemo(() => ({
    children: p
  }) => {
    const i = !!Xo(o, !0, (n) => n.type === qe.StrictMode) ? qe.StrictMode : qe.Fragment;
    return /* @__PURE__ */ ce(i, {
      children: /* @__PURE__ */ ce(l, {
        children: p
      })
    });
  }, [o, l]);
}
function qv({
  set: o
}) {
  return Ji(() => (o(new Promise(() => null)), () => o(!1)), [o]), null;
}
const Xv = /* @__PURE__ */ ((o) => (o = class extends qe.Component {
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
    strict: i = !0
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
      for (c in i ? l : o) if (!pt.equ(o[c], l[c], {
        strict: i,
        objects: "reference"
      })) return !1;
    } else
      for (c in i ? l : o) if (o[c] !== l[c]) return !1;
    if (pt.und(c)) {
      if (s && o.length === 0 && l.length === 0 || n && Object.keys(o).length === 0 && Object.keys(l).length === 0) return !0;
      if (o !== l) return !1;
    }
    return !0;
  }
};
function Qv(o) {
  const l = {
    nodes: {},
    materials: {},
    meshes: {}
  };
  return o && o.traverse((p) => {
    p.name && (l.nodes[p.name] = p), p.material && !l.materials[p.material.name] && (l.materials[p.material.name] = p.material), p.isMesh && !l.meshes[p.name] && (l.meshes[p.name] = p);
  }), l;
}
function Fv(o) {
  o.type !== "Scene" && (o.dispose == null || o.dispose());
  for (const l in o) {
    const p = o[l];
    p?.type !== "Scene" && (p == null || p.dispose == null || p.dispose());
  }
}
const Cs = ["children", "key", "ref"];
function Kv(o) {
  const l = {};
  for (const p in o)
    Cs.includes(p) || (l[p] = o[p]);
  return l;
}
function Yu(o, l, p, m) {
  const i = o;
  let n = i?.__r3f;
  return n || (n = {
    root: l,
    type: p,
    parent: null,
    children: [],
    props: Kv(m),
    object: i,
    eventCount: 0,
    handlers: {},
    isHidden: !1
  }, i && (i.__r3f = n)), n;
}
function wi(o, l) {
  let p = o[l];
  if (!l.includes("-")) return {
    root: o,
    key: l,
    target: p
  };
  p = o;
  for (const i of l.split("-")) {
    var m;
    l = i, o = p, p = (m = p) == null ? void 0 : m[l];
  }
  return {
    root: o,
    key: l,
    target: p
  };
}
const Kc = /-\d+$/;
function qu(o, l) {
  if (pt.str(l.props.attach)) {
    if (Kc.test(l.props.attach)) {
      const i = l.props.attach.replace(Kc, ""), {
        root: n,
        key: s
      } = wi(o.object, i);
      Array.isArray(n[s]) || (n[s] = []);
    }
    const {
      root: p,
      key: m
    } = wi(o.object, l.props.attach);
    l.previousAttach = p[m], p[m] = l.object;
  } else pt.fun(l.props.attach) && (l.previousAttach = l.props.attach(o.object, l.object));
}
function Xu(o, l) {
  if (pt.str(l.props.attach)) {
    const {
      root: p,
      key: m
    } = wi(o.object, l.props.attach), i = l.previousAttach;
    i === void 0 ? delete p[m] : p[m] = i;
  } else
    l.previousAttach == null || l.previousAttach(o.object, l.object);
  delete l.previousAttach;
}
const Co = [
  ...Cs,
  // Instance props
  "args",
  "dispose",
  "attach",
  "object",
  "onUpdate",
  // Behavior flags
  "dispose"
], Zc = /* @__PURE__ */ new Map();
function Zv(o) {
  let l = Zc.get(o.constructor);
  try {
    l || (l = new o.constructor(), Zc.set(o.constructor, l));
  } catch {
  }
  return l;
}
function wv(o, l) {
  const p = {};
  for (const m in l)
    if (!Co.includes(m) && !pt.equ(l[m], o.props[m])) {
      p[m] = l[m];
      for (const i in l)
        i.startsWith(`${m}-`) && (p[i] = l[i]);
    }
  for (const m in o.props) {
    if (Co.includes(m) || l.hasOwnProperty(m)) continue;
    const {
      root: i,
      key: n
    } = wi(o.object, m);
    if (i.constructor && i.constructor.length === 0) {
      const s = Zv(i);
      pt.und(s) || (p[n] = s[n]);
    } else
      p[n] = 0;
  }
  return p;
}
const Jv = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"], Wv = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function Cn(o, l) {
  var p;
  const m = o.__r3f, i = m && Us(m).getState(), n = m?.eventCount;
  for (const c in l) {
    let f = l[c];
    if (Co.includes(c)) continue;
    if (m && Wv.test(c)) {
      typeof f == "function" ? m.handlers[c] = f : delete m.handlers[c], m.eventCount = Object.keys(m.handlers).length;
      continue;
    }
    if (f === void 0) continue;
    let {
      root: d,
      key: v,
      target: y
    } = wi(o, c);
    if (y instanceof Ne.Layers && f instanceof Ne.Layers)
      y.mask = f.mask;
    else if (y instanceof Ne.Color && Lv(f))
      y.set(f);
    else if (y !== null && typeof y == "object" && typeof y.set == "function" && typeof y.copy == "function" && f != null && f.constructor && y.constructor === f.constructor)
      y.copy(f);
    else if (y !== null && typeof y == "object" && typeof y.set == "function" && Array.isArray(f))
      typeof y.fromArray == "function" ? y.fromArray(f) : y.set(...f);
    else if (y !== null && typeof y == "object" && typeof y.set == "function" && typeof f == "number")
      typeof y.setScalar == "function" ? y.setScalar(f) : y.set(f);
    else {
      var s;
      d[v] = f, i && !i.linear && Jv.includes(v) && (s = d[v]) != null && s.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
      d[v].format === Ne.RGBAFormat && d[v].type === Ne.UnsignedByteType && (d[v].colorSpace = Ne.SRGBColorSpace);
    }
  }
  if (m != null && m.parent && i != null && i.internal && (p = m.object) != null && p.isObject3D && n !== m.eventCount) {
    const c = m.object, f = i.internal.interaction.indexOf(c);
    f > -1 && i.internal.interaction.splice(f, 1), m.eventCount && c.raycast !== null && i.internal.interaction.push(c);
  }
  return m && m.props.attach === void 0 && (m.object.isBufferGeometry ? m.props.attach = "geometry" : m.object.isMaterial && (m.props.attach = "material")), m && ni(m), o;
}
function ni(o) {
  var l;
  if (!o.parent) return;
  o.props.onUpdate == null || o.props.onUpdate(o.object);
  const p = (l = o.root) == null || l.getState == null ? void 0 : l.getState();
  p && p.internal.frames === 0 && p.invalidate();
}
function Pv(o, l) {
  o.manual || (Ms(o) ? (o.left = l.width / -2, o.right = l.width / 2, o.top = l.height / 2, o.bottom = l.height / -2) : o.aspect = l.width / l.height, o.updateProjectionMatrix());
}
const Wt = (o) => o?.isObject3D;
function zu(o) {
  return (o.eventObject || o.object).uuid + "/" + o.index + o.instanceId;
}
function Rs(o, l, p, m) {
  const i = p.get(l);
  i && (p.delete(l), p.size === 0 && (o.delete(m), i.target.releasePointerCapture(m)));
}
function kv(o, l) {
  const {
    internal: p
  } = o.getState();
  p.interaction = p.interaction.filter((m) => m !== l), p.initialHits = p.initialHits.filter((m) => m !== l), p.hovered.forEach((m, i) => {
    (m.eventObject === l || m.object === l) && p.hovered.delete(i);
  }), p.capturedMap.forEach((m, i) => {
    Rs(p.capturedMap, l, m, i);
  });
}
function Iv(o) {
  function l(f) {
    const {
      internal: d
    } = o.getState(), v = f.offsetX - d.initialClick[0], y = f.offsetY - d.initialClick[1];
    return Math.round(Math.sqrt(v * v + y * y));
  }
  function p(f) {
    return f.filter((d) => ["Move", "Over", "Enter", "Out", "Leave"].some((v) => {
      var y;
      return (y = d.__r3f) == null ? void 0 : y.handlers["onPointer" + v];
    }));
  }
  function m(f, d) {
    const v = o.getState(), y = /* @__PURE__ */ new Set(), g = [], E = d ? d(v.internal.interaction) : v.internal.interaction;
    for (let U = 0; U < E.length; U++) {
      const b = Il(E[U]);
      b && (b.raycaster.camera = void 0);
    }
    v.previousRoot || v.events.compute == null || v.events.compute(f, v);
    function _(U) {
      const b = Il(U);
      if (!b || !b.events.enabled || b.raycaster.camera === null) return [];
      if (b.raycaster.camera === void 0) {
        var z;
        b.events.compute == null || b.events.compute(f, b, (z = b.previousRoot) == null ? void 0 : z.getState()), b.raycaster.camera === void 0 && (b.raycaster.camera = null);
      }
      return b.raycaster.camera ? b.raycaster.intersectObject(U, !0) : [];
    }
    let D = E.flatMap(_).sort((U, b) => {
      const z = Il(U.object), R = Il(b.object);
      return !z || !R ? U.distance - b.distance : R.events.priority - z.events.priority || U.distance - b.distance;
    }).filter((U) => {
      const b = zu(U);
      return y.has(b) ? !1 : (y.add(b), !0);
    });
    v.events.filter && (D = v.events.filter(D, v));
    for (const U of D) {
      let b = U.object;
      for (; b; ) {
        var C;
        (C = b.__r3f) != null && C.eventCount && g.push({
          ...U,
          eventObject: b
        }), b = b.parent;
      }
    }
    if ("pointerId" in f && v.internal.capturedMap.has(f.pointerId))
      for (let U of v.internal.capturedMap.get(f.pointerId).values())
        y.has(zu(U.intersection)) || g.push(U.intersection);
    return g;
  }
  function i(f, d, v, y) {
    if (f.length) {
      const g = {
        stopped: !1
      };
      for (const E of f) {
        let _ = Il(E.object);
        if (_ || E.object.traverseAncestors((D) => {
          const C = Il(D);
          if (C)
            return _ = C, !1;
        }), _) {
          const {
            raycaster: D,
            pointer: C,
            camera: U,
            internal: b
          } = _, z = new Ne.Vector3(C.x, C.y, 0).unproject(U), R = (W) => {
            var q, ae;
            return (q = (ae = b.capturedMap.get(W)) == null ? void 0 : ae.has(E.eventObject)) != null ? q : !1;
          }, x = (W) => {
            const q = {
              intersection: E,
              target: d.target
            };
            b.capturedMap.has(W) ? b.capturedMap.get(W).set(E.eventObject, q) : b.capturedMap.set(W, /* @__PURE__ */ new Map([[E.eventObject, q]])), d.target.setPointerCapture(W);
          }, H = (W) => {
            const q = b.capturedMap.get(W);
            q && Rs(b.capturedMap, E.eventObject, q, W);
          };
          let G = {};
          for (let W in d) {
            let q = d[W];
            typeof q != "function" && (G[W] = q);
          }
          let L = {
            ...E,
            ...G,
            pointer: C,
            intersections: f,
            stopped: g.stopped,
            delta: v,
            unprojectedPoint: z,
            ray: D.ray,
            camera: U,
            // Hijack stopPropagation, which just sets a flag
            stopPropagation() {
              const W = "pointerId" in d && b.capturedMap.get(d.pointerId);
              if (
                // ...if this pointer hasn't been captured
                (!W || // ... or if the hit object is capturing the pointer
                W.has(E.eventObject)) && (L.stopped = g.stopped = !0, b.hovered.size && Array.from(b.hovered.values()).find((q) => q.eventObject === E.eventObject))
              ) {
                const q = f.slice(0, f.indexOf(E));
                n([...q, E]);
              }
            },
            // there should be a distinction between target and currentTarget
            target: {
              hasPointerCapture: R,
              setPointerCapture: x,
              releasePointerCapture: H
            },
            currentTarget: {
              hasPointerCapture: R,
              setPointerCapture: x,
              releasePointerCapture: H
            },
            nativeEvent: d
          };
          if (y(L), g.stopped === !0) break;
        }
      }
    }
    return f;
  }
  function n(f) {
    const {
      internal: d
    } = o.getState();
    for (const v of d.hovered.values())
      if (!f.length || !f.find((y) => y.object === v.object && y.index === v.index && y.instanceId === v.instanceId)) {
        const g = v.eventObject.__r3f;
        if (d.hovered.delete(zu(v)), g != null && g.eventCount) {
          const E = g.handlers, _ = {
            ...v,
            intersections: f
          };
          E.onPointerOut == null || E.onPointerOut(_), E.onPointerLeave == null || E.onPointerLeave(_);
        }
      }
  }
  function s(f, d) {
    for (let v = 0; v < d.length; v++) {
      const y = d[v].__r3f;
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
            internal: v
          } = o.getState();
          "pointerId" in d && v.capturedMap.has(d.pointerId) && requestAnimationFrame(() => {
            v.capturedMap.has(d.pointerId) && (v.capturedMap.delete(d.pointerId), n([]));
          });
        };
    }
    return function(v) {
      const {
        onPointerMissed: y,
        internal: g
      } = o.getState();
      g.lastEvent.current = v;
      const E = f === "onPointerMove", _ = f === "onClick" || f === "onContextMenu" || f === "onDoubleClick", C = m(v, E ? p : void 0), U = _ ? l(v) : 0;
      f === "onPointerDown" && (g.initialClick = [v.offsetX, v.offsetY], g.initialHits = C.map((z) => z.eventObject)), _ && !C.length && U <= 2 && (s(v, g.interaction), y && y(v)), E && n(C);
      function b(z) {
        const R = z.eventObject, x = R.__r3f;
        if (!(x != null && x.eventCount)) return;
        const H = x.handlers;
        if (E) {
          if (H.onPointerOver || H.onPointerEnter || H.onPointerOut || H.onPointerLeave) {
            const G = zu(z), L = g.hovered.get(G);
            L ? L.stopped && z.stopPropagation() : (g.hovered.set(G, z), H.onPointerOver == null || H.onPointerOver(z), H.onPointerEnter == null || H.onPointerEnter(z));
          }
          H.onPointerMove == null || H.onPointerMove(z);
        } else {
          const G = H[f];
          G ? (!_ || g.initialHits.includes(R)) && (s(v, g.interaction.filter((L) => !g.initialHits.includes(L))), G(z)) : _ && g.initialHits.includes(R) && s(v, g.interaction.filter((L) => !g.initialHits.includes(L)));
        }
      }
      i(C, v, U, b);
    };
  }
  return {
    handlePointer: c
  };
}
const wc = (o) => !!(o != null && o.render), Os = /* @__PURE__ */ qe.createContext(null), $v = (o, l) => {
  const p = Mv((c, f) => {
    const d = new Ne.Vector3(), v = new Ne.Vector3(), y = new Ne.Vector3();
    function g(U = f().camera, b = v, z = f().size) {
      const {
        width: R,
        height: x,
        top: H,
        left: G
      } = z, L = R / x;
      b.isVector3 ? y.copy(b) : y.set(...b);
      const W = U.getWorldPosition(d).distanceTo(y);
      if (Ms(U))
        return {
          width: R / U.zoom,
          height: x / U.zoom,
          top: H,
          left: G,
          factor: 1,
          distance: W,
          aspect: L
        };
      {
        const q = U.fov * Math.PI / 180, ae = 2 * Math.tan(q / 2) * W, O = ae * (R / x);
        return {
          width: O,
          height: ae,
          top: H,
          left: G,
          factor: R / O,
          distance: W,
          aspect: L
        };
      }
    }
    let E;
    const _ = (U) => c((b) => ({
      performance: {
        ...b.performance,
        current: U
      }
    })), D = new Ne.Vector2();
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
      invalidate: (U = 1) => o(f(), U),
      advance: (U, b) => l(U, b, f()),
      legacy: !1,
      linear: !1,
      flat: !1,
      controls: null,
      clock: new Ne.Clock(),
      pointer: D,
      mouse: D,
      frameloop: "always",
      onPointerMissed: void 0,
      performance: {
        current: 1,
        min: 0.5,
        max: 1,
        debounce: 200,
        regress: () => {
          const U = f();
          E && clearTimeout(E), U.performance.current !== U.performance.min && _(U.performance.min), E = setTimeout(() => _(f().performance.max), U.performance.debounce);
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
      setEvents: (U) => c((b) => ({
        ...b,
        events: {
          ...b.events,
          ...U
        }
      })),
      setSize: (U, b, z = 0, R = 0) => {
        const x = f().camera, H = {
          width: U,
          height: b,
          top: z,
          left: R
        };
        c((G) => ({
          size: H,
          viewport: {
            ...G.viewport,
            ...g(x, v, H)
          }
        }));
      },
      setDpr: (U) => c((b) => {
        const z = As(U);
        return {
          viewport: {
            ...b.viewport,
            dpr: z,
            initialDpr: b.viewport.initialDpr || z
          }
        };
      }),
      setFrameloop: (U = "always") => {
        const b = f().clock;
        b.stop(), b.elapsedTime = 0, U !== "never" && (b.start(), b.elapsedTime = 0), c(() => ({
          frameloop: U
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
        lastEvent: /* @__PURE__ */ qe.createRef(),
        // Updates
        active: !1,
        frames: 0,
        priority: 0,
        subscribe: (U, b, z) => {
          const R = f().internal;
          return R.priority = R.priority + (b > 0 ? 1 : 0), R.subscribers.push({
            ref: U,
            priority: b,
            store: z
          }), R.subscribers = R.subscribers.sort((x, H) => x.priority - H.priority), () => {
            const x = f().internal;
            x != null && x.subscribers && (x.priority = x.priority - (b > 0 ? 1 : 0), x.subscribers = x.subscribers.filter((H) => H.ref !== U));
          };
        }
      }
    };
  }), m = p.getState();
  let i = m.size, n = m.viewport.dpr, s = m.camera;
  return p.subscribe(() => {
    const {
      camera: c,
      size: f,
      viewport: d,
      gl: v,
      set: y
    } = p.getState();
    if (f.width !== i.width || f.height !== i.height || d.dpr !== n) {
      i = f, n = d.dpr, Pv(c, f), d.dpr > 0 && v.setPixelRatio(d.dpr);
      const g = typeof HTMLCanvasElement < "u" && v.domElement instanceof HTMLCanvasElement;
      v.setSize(f.width, f.height, g);
    }
    c !== s && (s = c, y((g) => ({
      viewport: {
        ...g.viewport,
        ...g.viewport.getCurrentViewport(c)
      }
    })));
  }), p.subscribe((c) => o(c)), p;
};
function zs() {
  const o = qe.useContext(Os);
  if (!o) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return o;
}
function xs(o = (p) => p, l) {
  return zs()(o, l);
}
function Ns(o, l = 0) {
  const p = zs(), m = p.getState().internal.subscribe, i = Ds(o);
  return Ji(() => m(i, l, p), [l, m, p]), null;
}
const Jc = /* @__PURE__ */ new WeakMap(), e0 = (o) => {
  var l;
  return typeof o == "function" && (o == null || (l = o.prototype) == null ? void 0 : l.constructor) === o;
};
function Bs(o, l) {
  return function(p, ...m) {
    let i;
    return e0(p) ? (i = Jc.get(p), i || (i = new p(), Jc.set(p, i))) : i = p, o && o(i), Promise.all(m.map((n) => new Promise((s, c) => i.load(n, (f) => {
      Wt(f?.scene) && Object.assign(f, Qv(f.scene)), s(f);
    }, l, (f) => c(new Error(`Could not load ${n}: ${f?.message}`))))));
  };
}
function Qu(o, l, p, m) {
  const i = Array.isArray(l) ? l : [l], n = Ss(Bs(p, m), [o, ...i], {
    equal: pt.equ
  });
  return Array.isArray(l) ? n : n[0];
}
Qu.preload = function(o, l, p) {
  const m = Array.isArray(l) ? l : [l];
  return Av(Bs(p), [o, ...m]);
};
Qu.clear = function(o, l) {
  const p = Array.isArray(l) ? l : [l];
  return Cv([o, ...p]);
};
function t0(o) {
  const l = Nv(o);
  return l.injectIntoDevTools({
    bundleType: 0,
    rendererPackageName: "@react-three/fiber",
    version: qe.version
  }), l;
}
const Gs = 0, ai = {}, a0 = /^three(?=[A-Z])/, Zu = (o) => `${o[0].toUpperCase()}${o.slice(1)}`;
let n0 = 0;
const l0 = (o) => typeof o == "function";
function i0(o) {
  if (l0(o)) {
    const l = `${n0++}`;
    return ai[l] = o, l;
  } else
    Object.assign(ai, o);
}
function js(o, l) {
  const p = Zu(o), m = ai[p];
  if (o !== "primitive" && !m) throw new Error(`R3F: ${p} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (o === "primitive" && !l.object) throw new Error("R3F: Primitives without 'object' are invalid!");
  if (l.args !== void 0 && !Array.isArray(l.args)) throw new Error("R3F: The args prop must be an array!");
}
function u0(o, l, p) {
  var m;
  return o = Zu(o) in ai ? o : o.replace(a0, ""), js(o, l), o === "primitive" && (m = l.object) != null && m.__r3f && delete l.object.__r3f, Yu(l.object, p, o, l);
}
function r0(o) {
  if (!o.isHidden) {
    var l;
    o.props.attach && (l = o.parent) != null && l.object ? Xu(o.parent, o) : Wt(o.object) && (o.object.visible = !1), o.isHidden = !0, ni(o);
  }
}
function Hs(o) {
  if (o.isHidden) {
    var l;
    o.props.attach && (l = o.parent) != null && l.object ? qu(o.parent, o) : Wt(o.object) && o.props.visible !== !1 && (o.object.visible = !0), o.isHidden = !1, ni(o);
  }
}
function Fo(o, l, p) {
  const m = l.root.getState();
  if (!(!o.parent && o.object !== m.scene)) {
    if (!l.object) {
      var i, n;
      const s = ai[Zu(l.type)];
      l.object = (i = l.props.object) != null ? i : new s(...(n = l.props.args) != null ? n : []), l.object.__r3f = l;
    }
    if (Cn(l.object, l.props), l.props.attach)
      qu(o, l);
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
    for (const s of l.children) Fo(l, s);
    ni(l);
  }
}
function go(o, l) {
  l && (l.parent = o, o.children.push(l), Fo(o, l));
}
function Wc(o, l, p) {
  if (!l || !p) return;
  l.parent = o;
  const m = o.children.indexOf(p);
  m !== -1 ? o.children.splice(m, 0, l) : o.children.push(l), Fo(o, l, p);
}
function Vs(o) {
  if (typeof o.dispose == "function") {
    const l = () => {
      try {
        o.dispose();
      } catch {
      }
    };
    typeof IS_REACT_ACT_ENVIRONMENT < "u" ? l() : Fc.unstable_scheduleCallback(Fc.unstable_IdlePriority, l);
  }
}
function Ro(o, l, p) {
  if (!l) return;
  l.parent = null;
  const m = o.children.indexOf(l);
  m !== -1 && o.children.splice(m, 1), l.props.attach ? Xu(o, l) : Wt(l.object) && Wt(o.object) && (o.object.remove(l.object), kv(Us(l), l.object));
  const i = l.props.dispose !== null && p !== !1;
  for (let n = l.children.length - 1; n >= 0; n--) {
    const s = l.children[n];
    Ro(l, s, i);
  }
  l.children.length = 0, delete l.object.__r3f, i && l.type !== "primitive" && l.object.type !== "Scene" && Vs(l.object), p === void 0 && ni(l);
}
function o0(o, l) {
  for (const p of [o, o.alternate])
    if (p !== null)
      if (typeof p.ref == "function") {
        p.refCleanup == null || p.refCleanup();
        const m = p.ref(l);
        typeof m == "function" && (p.refCleanup = m);
      } else p.ref && (p.ref.current = l);
}
const ju = [];
function f0() {
  for (const [p] of ju) {
    const m = p.parent;
    if (m) {
      p.props.attach ? Xu(m, p) : Wt(p.object) && Wt(m.object) && m.object.remove(p.object);
      for (const i of p.children)
        i.props.attach ? Xu(p, i) : Wt(i.object) && Wt(p.object) && p.object.remove(i.object);
    }
    p.isHidden && Hs(p), p.object.__r3f && delete p.object.__r3f, p.type !== "primitive" && Vs(p.object);
  }
  for (const [p, m, i] of ju) {
    p.props = m;
    const n = p.parent;
    if (n) {
      var o, l;
      const s = ai[Zu(p.type)];
      p.object = (o = p.props.object) != null ? o : new s(...(l = p.props.args) != null ? l : []), p.object.__r3f = p, o0(i, p.object), Cn(p.object, p.props), p.props.attach ? qu(n, p) : Wt(p.object) && Wt(n.object) && n.object.add(p.object);
      for (const c of p.children)
        c.props.attach ? qu(p, c) : Wt(c.object) && Wt(p.object) && p.object.add(c.object);
      ni(p);
    }
  }
  ju.length = 0;
}
const So = () => {
}, Pc = {};
let xu = Gs;
const c0 = 0, s0 = 4, Oo = /* @__PURE__ */ t0({
  isPrimaryRenderer: !1,
  warnsIfNotActing: !1,
  supportsMutation: !0,
  supportsPersistence: !1,
  supportsHydration: !1,
  createInstance: u0,
  removeChild: Ro,
  appendChild: go,
  appendInitialChild: go,
  insertBefore: Wc,
  appendChildToContainer(o, l) {
    const p = o.getState().scene.__r3f;
    !l || !p || go(p, l);
  },
  removeChildFromContainer(o, l) {
    const p = o.getState().scene.__r3f;
    !l || !p || Ro(p, l);
  },
  insertInContainerBefore(o, l, p) {
    const m = o.getState().scene.__r3f;
    !l || !p || !m || Wc(m, l, p);
  },
  getRootHostContext: () => Pc,
  getChildHostContext: () => Pc,
  commitUpdate(o, l, p, m, i) {
    var n, s, c;
    js(l, m);
    let f = !1;
    if ((o.type === "primitive" && p.object !== m.object || ((n = m.args) == null ? void 0 : n.length) !== ((s = p.args) == null ? void 0 : s.length) || (c = m.args) != null && c.some((v, y) => {
      var g;
      return v !== ((g = p.args) == null ? void 0 : g[y]);
    })) && (f = !0), f)
      ju.push([o, {
        ...m
      }, i]);
    else {
      const v = wv(o, m);
      Object.keys(v).length && (Object.assign(o.props, v), Cn(o.object, v));
    }
    (i.sibling === null || (i.flags & s0) === c0) && f0();
  },
  finalizeInitialChildren: () => !1,
  commitMount() {
  },
  getPublicInstance: (o) => o?.object,
  prepareForCommit: () => null,
  preparePortalMount: (o) => Yu(o.getState().scene, o, "", {}),
  resetAfterCommit: () => {
  },
  shouldSetTextContent: () => !1,
  clearContainer: () => !1,
  hideInstance: r0,
  unhideInstance: Hs,
  createTextInstance: So,
  hideTextInstance: So,
  unhideTextInstance: So,
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
  // The reconciler types use the internal ReactContext with all the hidden properties
  // so we have to cast from the public React.Context type
  HostTransitionContext: /* @__PURE__ */ qe.createContext(null),
  setCurrentUpdatePriority(o) {
    xu = o;
  },
  getCurrentUpdatePriority() {
    return xu;
  },
  resolveUpdatePriority() {
    var o;
    if (xu !== Gs) return xu;
    switch (typeof window < "u" && ((o = window.event) == null ? void 0 : o.type)) {
      case "click":
      case "contextmenu":
      case "dblclick":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
        return Gu.DiscreteEventPriority;
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerenter":
      case "pointerleave":
      case "wheel":
        return Gu.ContinuousEventPriority;
      default:
        return Gu.DefaultEventPriority;
    }
  },
  resetFormInstance() {
  }
}), hl = /* @__PURE__ */ new Map(), $l = {
  objects: "shallow",
  strict: !1
};
function d0(o, l) {
  if (!l && typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement && o.parentElement) {
    const {
      width: p,
      height: m,
      top: i,
      left: n
    } = o.parentElement.getBoundingClientRect();
    return {
      width: p,
      height: m,
      top: i,
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
function h0(o) {
  const l = hl.get(o), p = l?.fiber, m = l?.store;
  l && console.warn("R3F.createRoot should only be called once!");
  const i = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  ), n = m || $v(No, Ic), s = p || Oo.createContainer(
    n,
    // container
    Gu.ConcurrentRoot,
    // tag
    null,
    // hydration callbacks
    !1,
    // isStrictMode
    null,
    // concurrentUpdatesByDefaultOverride
    "",
    // identifierPrefix
    i,
    // onUncaughtError
    i,
    // onCaughtError
    i,
    // onRecoverableError
    null
    // transitionCallbacks
  );
  l || hl.set(o, {
    fiber: s,
    store: n
  });
  let c, f, d = !1, v = null;
  return {
    async configure(y = {}) {
      let g;
      v = new Promise((T) => g = T);
      let {
        gl: E,
        size: _,
        scene: D,
        events: C,
        onCreated: U,
        shadows: b = !1,
        linear: z = !1,
        flat: R = !1,
        legacy: x = !1,
        orthographic: H = !1,
        frameloop: G = "always",
        dpr: L = [1, 2],
        performance: W,
        raycaster: q,
        camera: ae,
        onPointerMissed: O
      } = y, X = n.getState(), Y = X.gl;
      if (!X.gl) {
        const T = {
          canvas: o,
          powerPreference: "high-performance",
          antialias: !0,
          alpha: !0
        }, A = typeof E == "function" ? await E(T) : E;
        wc(A) ? Y = A : Y = new Ne.WebGLRenderer({
          ...T,
          ...E
        }), X.set({
          gl: Y
        });
      }
      let le = X.raycaster;
      le || X.set({
        raycaster: le = new Ne.Raycaster()
      });
      const {
        params: j,
        ...P
      } = q || {};
      if (pt.equ(P, le, $l) || Cn(le, {
        ...P
      }), pt.equ(j, le.params, $l) || Cn(le, {
        params: {
          ...le.params,
          ...j
        }
      }), !X.camera || X.camera === f && !pt.equ(f, ae, $l)) {
        f = ae;
        const T = ae?.isCamera, A = T ? ae : H ? new Ne.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new Ne.PerspectiveCamera(75, 0, 0.1, 1e3);
        T || (A.position.z = 5, ae && (Cn(A, ae), A.manual || ("aspect" in ae || "left" in ae || "right" in ae || "bottom" in ae || "top" in ae) && (A.manual = !0, A.updateProjectionMatrix())), !X.camera && !(ae != null && ae.rotation) && A.lookAt(0, 0, 0)), X.set({
          camera: A
        }), le.camera = A;
      }
      if (!X.scene) {
        let T;
        D != null && D.isScene ? (T = D, Yu(T, n, "", {})) : (T = new Ne.Scene(), Yu(T, n, "", {}), D && Cn(T, D)), X.set({
          scene: T
        });
      }
      C && !X.events.handlers && X.set({
        events: C(n)
      });
      const ee = d0(o, _);
      if (pt.equ(ee, X.size, $l) || X.setSize(ee.width, ee.height, ee.top, ee.left), L && X.viewport.dpr !== As(L) && X.setDpr(L), X.frameloop !== G && X.setFrameloop(G), X.onPointerMissed || X.set({
        onPointerMissed: O
      }), W && !pt.equ(W, X.performance, $l) && X.set((T) => ({
        performance: {
          ...T.performance,
          ...W
        }
      })), !X.xr) {
        var Z;
        const T = (Q, K) => {
          const ne = n.getState();
          ne.frameloop !== "never" && Ic(Q, !0, ne, K);
        }, A = () => {
          const Q = n.getState();
          Q.gl.xr.enabled = Q.gl.xr.isPresenting, Q.gl.xr.setAnimationLoop(Q.gl.xr.isPresenting ? T : null), Q.gl.xr.isPresenting || No(Q);
        }, V = {
          connect() {
            const Q = n.getState().gl;
            Q.xr.addEventListener("sessionstart", A), Q.xr.addEventListener("sessionend", A);
          },
          disconnect() {
            const Q = n.getState().gl;
            Q.xr.removeEventListener("sessionstart", A), Q.xr.removeEventListener("sessionend", A);
          }
        };
        typeof ((Z = Y.xr) == null ? void 0 : Z.addEventListener) == "function" && V.connect(), X.set({
          xr: V
        });
      }
      if (Y.shadowMap) {
        const T = Y.shadowMap.enabled, A = Y.shadowMap.type;
        if (Y.shadowMap.enabled = !!b, pt.boo(b))
          Y.shadowMap.type = Ne.PCFSoftShadowMap;
        else if (pt.str(b)) {
          var w;
          const V = {
            basic: Ne.BasicShadowMap,
            percentage: Ne.PCFShadowMap,
            soft: Ne.PCFSoftShadowMap,
            variance: Ne.VSMShadowMap
          };
          Y.shadowMap.type = (w = V[b]) != null ? w : Ne.PCFSoftShadowMap;
        } else pt.obj(b) && Object.assign(Y.shadowMap, b);
        (T !== Y.shadowMap.enabled || A !== Y.shadowMap.type) && (Y.shadowMap.needsUpdate = !0);
      }
      return Ne.ColorManagement.enabled = !x, d || (Y.outputColorSpace = z ? Ne.LinearSRGBColorSpace : Ne.SRGBColorSpace, Y.toneMapping = R ? Ne.NoToneMapping : Ne.ACESFilmicToneMapping), X.legacy !== x && X.set(() => ({
        legacy: x
      })), X.linear !== z && X.set(() => ({
        linear: z
      })), X.flat !== R && X.set(() => ({
        flat: R
      })), E && !pt.fun(E) && !wc(E) && !pt.equ(E, Y, $l) && Cn(Y, E), c = U, d = !0, g(), this;
    },
    render(y) {
      return !d && !v && this.configure(), v.then(() => {
        Oo.updateContainer(/* @__PURE__ */ ce(v0, {
          store: n,
          children: y,
          onCreated: c,
          rootElement: o
        }), s, null, () => {
        });
      }), n;
    },
    unmount() {
      Ls(o);
    }
  };
}
function v0({
  store: o,
  children: l,
  onCreated: p,
  rootElement: m
}) {
  return Ji(() => {
    const i = o.getState();
    i.set((n) => ({
      internal: {
        ...n.internal,
        active: !0
      }
    })), p && p(i), o.getState().events.connected || i.events.connect == null || i.events.connect(m);
  }, []), /* @__PURE__ */ ce(Os.Provider, {
    value: o,
    children: l
  });
}
function Ls(o, l) {
  const p = hl.get(o), m = p?.fiber;
  if (m) {
    const i = p?.store.getState();
    i && (i.internal.active = !1), Oo.updateContainer(null, m, null, () => {
      i && setTimeout(() => {
        try {
          var n, s, c, f;
          i.events.disconnect == null || i.events.disconnect(), (n = i.gl) == null || (s = n.renderLists) == null || s.dispose == null || s.dispose(), (c = i.gl) == null || c.forceContextLoss == null || c.forceContextLoss(), (f = i.gl) != null && f.xr && i.xr.disconnect(), Fv(i.scene), hl.delete(o);
        } catch {
        }
      }, 500);
    });
  }
}
const p0 = /* @__PURE__ */ new Set(), m0 = /* @__PURE__ */ new Set(), y0 = /* @__PURE__ */ new Set();
function Eo(o, l) {
  if (o.size)
    for (const {
      callback: p
    } of o.values())
      p(l);
}
function Fi(o, l) {
  switch (o) {
    case "before":
      return Eo(p0, l);
    case "after":
      return Eo(m0, l);
    case "tail":
      return Eo(y0, l);
  }
}
let bo, To;
function zo(o, l, p) {
  let m = l.clock.getDelta();
  l.frameloop === "never" && typeof o == "number" && (m = o - l.clock.elapsedTime, l.clock.oldTime = l.clock.elapsedTime, l.clock.elapsedTime = o), bo = l.internal.subscribers;
  for (let i = 0; i < bo.length; i++)
    To = bo[i], To.ref.current(To.store.getState(), m, p);
  return !l.internal.priority && l.gl.render && l.gl.render(l.scene, l.camera), l.internal.frames = Math.max(0, l.internal.frames - 1), l.frameloop === "always" ? 1 : l.internal.frames;
}
let Fu = !1, xo = !1, _o, kc, ei;
function Ys(o) {
  kc = requestAnimationFrame(Ys), Fu = !0, _o = 0, Fi("before", o), xo = !0;
  for (const p of hl.values()) {
    var l;
    ei = p.store.getState(), ei.internal.active && (ei.frameloop === "always" || ei.internal.frames > 0) && !((l = ei.gl.xr) != null && l.isPresenting) && (_o += zo(o, ei));
  }
  if (xo = !1, Fi("after", o), _o === 0)
    return Fi("tail", o), Fu = !1, cancelAnimationFrame(kc);
}
function No(o, l = 1) {
  var p;
  if (!o) return hl.forEach((m) => No(m.store.getState(), l));
  (p = o.gl.xr) != null && p.isPresenting || !o.internal.active || o.frameloop === "never" || (l > 1 ? o.internal.frames = Math.min(60, o.internal.frames + l) : xo ? o.internal.frames = 2 : o.internal.frames = 1, Fu || (Fu = !0, requestAnimationFrame(Ys)));
}
function Ic(o, l = !0, p, m) {
  if (l && Fi("before", o), p) zo(o, p, m);
  else for (const i of hl.values()) zo(o, i.store.getState());
  l && Fi("after", o);
}
const Uo = {
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
function g0(o) {
  const {
    handlePointer: l
  } = Iv(o);
  return {
    priority: 1,
    enabled: !0,
    compute(p, m, i) {
      m.pointer.set(p.offsetX / m.size.width * 2 - 1, -(p.offsetY / m.size.height) * 2 + 1), m.raycaster.setFromCamera(m.pointer, m.camera);
    },
    connected: void 0,
    handlers: Object.keys(Uo).reduce((p, m) => ({
      ...p,
      [m]: l(m)
    }), {}),
    update: () => {
      var p;
      const {
        events: m,
        internal: i
      } = o.getState();
      (p = i.lastEvent) != null && p.current && m.handlers && m.handlers.onPointerMove(i.lastEvent.current);
    },
    connect: (p) => {
      const {
        set: m,
        events: i
      } = o.getState();
      if (i.disconnect == null || i.disconnect(), m((n) => ({
        events: {
          ...n.events,
          connected: p
        }
      })), i.handlers)
        for (const n in i.handlers) {
          const s = i.handlers[n], [c, f] = Uo[n];
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
          for (const i in m.handlers) {
            const n = m.handlers[i], [s] = Uo[i];
            m.connected.removeEventListener(s, n);
          }
        p((i) => ({
          events: {
            ...i.events,
            connected: void 0
          }
        }));
      }
    }
  };
}
function $c(o, l) {
  let p;
  return (...m) => {
    window.clearTimeout(p), p = window.setTimeout(() => o(...m), l);
  };
}
function S0({ debounce: o, scroll: l, polyfill: p, offsetSize: m } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const i = p || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!i) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [n, s] = ta({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), c = Qi({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: n, orientationHandler: null }), f = o ? typeof o == "number" ? o : o.scroll : null, d = o ? typeof o == "number" ? o : o.resize : null, v = Qi(!1);
  Pt(() => (v.current = !0, () => void (v.current = !1)));
  const [y, g, E] = vs(() => {
    const U = () => {
      if (!c.current.element) return;
      const { left: b, top: z, width: R, height: x, bottom: H, right: G, x: L, y: W } = c.current.element.getBoundingClientRect(), q = { left: b, top: z, width: R, height: x, bottom: H, right: G, x: L, y: W };
      c.current.element instanceof HTMLElement && m && (q.height = c.current.element.offsetHeight, q.width = c.current.element.offsetWidth), Object.freeze(q), v.current && !_0(c.current.lastBounds, q) && s(c.current.lastBounds = q);
    };
    return [U, d ? $c(U, d) : U, f ? $c(U, f) : U];
  }, [s, m, f, d]);
  function _() {
    c.current.scrollContainers && (c.current.scrollContainers.forEach((U) => U.removeEventListener("scroll", E, !0)), c.current.scrollContainers = null), c.current.resizeObserver && (c.current.resizeObserver.disconnect(), c.current.resizeObserver = null), c.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", c.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", c.current.orientationHandler));
  }
  function D() {
    c.current.element && (c.current.resizeObserver = new i(E), c.current.resizeObserver.observe(c.current.element), l && c.current.scrollContainers && c.current.scrollContainers.forEach((U) => U.addEventListener("scroll", E, { capture: !0, passive: !0 })), c.current.orientationHandler = () => {
      E();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", c.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", c.current.orientationHandler));
  }
  const C = (U) => {
    !U || U === c.current.element || (_(), c.current.element = U, c.current.scrollContainers = qs(U), D());
  };
  return b0(E, !!l), E0(g), Pt(() => {
    _(), D();
  }, [l, E, g]), Pt(() => _, []), [C, n, y];
}
function E0(o) {
  Pt(() => {
    const l = o;
    return window.addEventListener("resize", l), () => void window.removeEventListener("resize", l);
  }, [o]);
}
function b0(o, l) {
  Pt(() => {
    if (l) {
      const p = o;
      return window.addEventListener("scroll", p, { capture: !0, passive: !0 }), () => void window.removeEventListener("scroll", p, !0);
    }
  }, [o, l]);
}
function qs(o) {
  const l = [];
  if (!o || o === document.body) return l;
  const { overflow: p, overflowX: m, overflowY: i } = window.getComputedStyle(o);
  return [p, m, i].some((n) => n === "auto" || n === "scroll") && l.push(o), [...l, ...qs(o.parentElement)];
}
const T0 = ["x", "y", "top", "bottom", "left", "right", "width", "height"], _0 = (o, l) => T0.every((p) => o[p] === l[p]);
function U0({
  ref: o,
  children: l,
  fallback: p,
  resize: m,
  style: i,
  gl: n,
  events: s = g0,
  eventSource: c,
  eventPrefix: f,
  shadows: d,
  linear: v,
  flat: y,
  legacy: g,
  orthographic: E,
  frameloop: _,
  dpr: D,
  performance: C,
  raycaster: U,
  camera: b,
  scene: z,
  onPointerMissed: R,
  onCreated: x,
  ...H
}) {
  qe.useMemo(() => i0(Ne), []);
  const G = Yv(), [L, W] = S0({
    scroll: !0,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...m
  }), q = qe.useRef(null), ae = qe.useRef(null);
  qe.useImperativeHandle(o, () => q.current);
  const O = Ds(R), [X, Y] = qe.useState(!1), [le, j] = qe.useState(!1);
  if (X) throw X;
  if (le) throw le;
  const P = qe.useRef(null);
  return Ji(() => {
    const Z = q.current;
    if (W.width > 0 && W.height > 0 && Z) {
      P.current || (P.current = h0(Z));
      async function w() {
        await P.current.configure({
          gl: n,
          scene: z,
          events: s,
          shadows: d,
          linear: v,
          flat: y,
          legacy: g,
          orthographic: E,
          frameloop: _,
          dpr: D,
          performance: C,
          raycaster: U,
          camera: b,
          size: W,
          // Pass mutable reference to onPointerMissed so it's free to update
          onPointerMissed: (...T) => O.current == null ? void 0 : O.current(...T),
          onCreated: (T) => {
            T.events.connect == null || T.events.connect(c ? Vv(c) ? c.current : c : ae.current), f && T.setEvents({
              compute: (A, V) => {
                const Q = A[f + "X"], K = A[f + "Y"];
                V.pointer.set(Q / V.size.width * 2 - 1, -(K / V.size.height) * 2 + 1), V.raycaster.setFromCamera(V.pointer, V.camera);
              }
            }), x?.(T);
          }
        }), P.current.render(/* @__PURE__ */ ce(G, {
          children: /* @__PURE__ */ ce(Xv, {
            set: j,
            children: /* @__PURE__ */ ce(qe.Suspense, {
              fallback: /* @__PURE__ */ ce(qv, {
                set: Y
              }),
              children: l ?? null
            })
          })
        }));
      }
      w();
    }
  }), qe.useEffect(() => {
    const Z = q.current;
    if (Z) return () => Ls(Z);
  }, []), /* @__PURE__ */ ce("div", {
    ref: ae,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: c ? "none" : "auto",
      ...i
    },
    ...H,
    children: /* @__PURE__ */ ce("div", {
      ref: L,
      style: {
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ ce("canvas", {
        ref: q,
        style: {
          display: "block"
        },
        children: p
      })
    })
  });
}
function M0(o) {
  return /* @__PURE__ */ ce(Ts, {
    children: /* @__PURE__ */ ce(U0, {
      ...o
    })
  });
}
function Bo() {
  return Bo = Object.assign ? Object.assign.bind() : function(o) {
    for (var l = 1; l < arguments.length; l++) {
      var p = arguments[l];
      for (var m in p) ({}).hasOwnProperty.call(p, m) && (o[m] = p[m]);
    }
    return o;
  }, Bo.apply(null, arguments);
}
function D0() {
  var o = /* @__PURE__ */ Object.create(null);
  function l(i, n) {
    var s = i.id, c = i.name, f = i.dependencies;
    f === void 0 && (f = []);
    var d = i.init;
    d === void 0 && (d = function() {
    });
    var v = i.getTransferables;
    if (v === void 0 && (v = null), !o[s])
      try {
        f = f.map(function(g) {
          return g && g.isWorkerModule && (l(g, function(E) {
            if (E instanceof Error)
              throw E;
          }), g = o[g.id].value), g;
        }), d = m("<" + c + ">.init", d), v && (v = m("<" + c + ">.getTransferables", v));
        var y = null;
        typeof d == "function" ? y = d.apply(void 0, f) : console.error("worker module init function failed to rehydrate"), o[s] = {
          id: s,
          value: y,
          getTransferables: v
        }, n(y);
      } catch (g) {
        g && g.noLog || console.error(g), n(g);
      }
  }
  function p(i, n) {
    var s, c = i.id, f = i.args;
    (!o[c] || typeof o[c].value != "function") && n(new Error("Worker module " + c + ": not found or its 'init' did not return a function"));
    try {
      var d = (s = o[c]).value.apply(s, f);
      d && typeof d.then == "function" ? d.then(v, function(y) {
        return n(y instanceof Error ? y : new Error("" + y));
      }) : v(d);
    } catch (y) {
      n(y);
    }
    function v(y) {
      try {
        var g = o[c].getTransferables && o[c].getTransferables(y);
        (!g || !Array.isArray(g) || !g.length) && (g = void 0), n(y, g);
      } catch (E) {
        console.error(E), n(E);
      }
    }
  }
  function m(i, n) {
    var s = void 0;
    self.troikaDefine = function(f) {
      return s = f;
    };
    var c = URL.createObjectURL(
      new Blob(
        ["/** " + i.replace(/\*/g, "") + ` **/

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
  self.addEventListener("message", function(i) {
    var n = i.data, s = n.messageId, c = n.action, f = n.data;
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
      }), c === "callModule" && p(f, function(d, v) {
        d instanceof Error ? postMessage({
          messageId: s,
          success: !1,
          error: d.message
        }) : postMessage({
          messageId: s,
          success: !0,
          result: d
        }, v || void 0);
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
function A0(o) {
  var l = function() {
    for (var p = [], m = arguments.length; m--; ) p[m] = arguments[m];
    return l._getInitResult().then(function(i) {
      if (typeof i == "function")
        return i.apply(void 0, p);
      throw new Error("Worker module function was called but `init` did not return a callable function");
    });
  };
  return l._getInitResult = function() {
    var p = o.dependencies, m = o.init;
    p = Array.isArray(p) ? p.map(function(n) {
      return n && (n = n.onMainThread || n, n._getInitResult && (n = n._getInitResult())), n;
    }) : [];
    var i = Promise.all(p).then(function(n) {
      return m.apply(null, n);
    });
    return l._getInitResult = function() {
      return i;
    }, i;
  }, l;
}
var Xs = function() {
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
  return Xs = function() {
    return o;
  }, o;
}, C0 = 0, R0 = 0, Mo = !1, Ki = /* @__PURE__ */ Object.create(null), Zi = /* @__PURE__ */ Object.create(null), Go = /* @__PURE__ */ Object.create(null);
function li(o) {
  if ((!o || typeof o.init != "function") && !Mo)
    throw new Error("requires `options.init` function");
  var l = o.dependencies, p = o.init, m = o.getTransferables, i = o.workerId, n = A0(o);
  i == null && (i = "#default");
  var s = "workerModule" + ++C0, c = o.name || s, f = null;
  l = l && l.map(function(v) {
    return typeof v == "function" && !v.workerModuleData && (Mo = !0, v = li({
      workerId: i,
      name: "<" + c + "> function dependency: " + v.name,
      init: `function(){return (
` + Hu(v) + `
)}`
    }), Mo = !1), v && v.workerModuleData && (v = v.workerModuleData), v;
  });
  function d() {
    for (var v = [], y = arguments.length; y--; ) v[y] = arguments[y];
    if (!Xs())
      return n.apply(void 0, v);
    if (!f) {
      f = es(i, "registerModule", d.workerModuleData);
      var g = function() {
        f = null, Zi[i].delete(g);
      };
      (Zi[i] || (Zi[i] = /* @__PURE__ */ new Set())).add(g);
    }
    return f.then(function(E) {
      var _ = E.isCallable;
      if (_)
        return es(i, "callModule", { id: s, args: v });
      throw new Error("Worker module function was called but `init` did not return a callable function");
    });
  }
  return d.workerModuleData = {
    isWorkerModule: !0,
    id: s,
    name: c,
    dependencies: l,
    init: Hu(p),
    getTransferables: m && Hu(m)
  }, d.onMainThread = n, d;
}
function O0(o) {
  Zi[o] && Zi[o].forEach(function(l) {
    l();
  }), Ki[o] && (Ki[o].terminate(), delete Ki[o]);
}
function Hu(o) {
  var l = o.toString();
  return !/^function/.test(l) && /^\w+\s*\(/.test(l) && (l = "function " + l), l;
}
function z0(o) {
  var l = Ki[o];
  if (!l) {
    var p = Hu(D0);
    l = Ki[o] = new Worker(
      URL.createObjectURL(
        new Blob(
          ["/** Worker Module Bootstrap: " + o.replace(/\*/g, "") + ` **/

;(` + p + ")()"],
          { type: "application/javascript" }
        )
      )
    ), l.onmessage = function(m) {
      var i = m.data, n = i.messageId, s = Go[n];
      if (!s)
        throw new Error("WorkerModule response with empty or unknown messageId");
      delete Go[n], s(i);
    };
  }
  return l;
}
function es(o, l, p) {
  return new Promise(function(m, i) {
    var n = ++R0;
    Go[n] = function(s) {
      s.success ? m(s.result) : i(new Error("Error in worker " + l + " call: " + s.error));
    }, z0(o).postMessage({
      messageId: n,
      action: l,
      data: p
    });
  });
}
function Qs() {
  var o = (function(l) {
    function p(Z, w, T, A, V, Q, K, ne) {
      var I = 1 - K;
      ne.x = I * I * Z + 2 * I * K * T + K * K * V, ne.y = I * I * w + 2 * I * K * A + K * K * Q;
    }
    function m(Z, w, T, A, V, Q, K, ne, I, te) {
      var de = 1 - I;
      te.x = de * de * de * Z + 3 * de * de * I * T + 3 * de * I * I * V + I * I * I * K, te.y = de * de * de * w + 3 * de * de * I * A + 3 * de * I * I * Q + I * I * I * ne;
    }
    function i(Z, w) {
      for (var T = /([MLQCZ])([^MLQCZ]*)/g, A, V, Q, K, ne; A = T.exec(Z); ) {
        var I = A[2].replace(/^\s*|\s*$/g, "").split(/[,\s]+/).map(function(te) {
          return parseFloat(te);
        });
        switch (A[1]) {
          case "M":
            K = V = I[0], ne = Q = I[1];
            break;
          case "L":
            (I[0] !== K || I[1] !== ne) && w("L", K, ne, K = I[0], ne = I[1]);
            break;
          case "Q": {
            w("Q", K, ne, K = I[2], ne = I[3], I[0], I[1]);
            break;
          }
          case "C": {
            w("C", K, ne, K = I[4], ne = I[5], I[0], I[1], I[2], I[3]);
            break;
          }
          case "Z":
            (K !== V || ne !== Q) && w("L", K, ne, V, Q);
            break;
        }
      }
    }
    function n(Z, w, T) {
      T === void 0 && (T = 16);
      var A = { x: 0, y: 0 };
      i(Z, function(V, Q, K, ne, I, te, de, Se, oe) {
        switch (V) {
          case "L":
            w(Q, K, ne, I);
            break;
          case "Q": {
            for (var ie = Q, Be = K, Ce = 1; Ce < T; Ce++)
              p(
                Q,
                K,
                te,
                de,
                ne,
                I,
                Ce / (T - 1),
                A
              ), w(ie, Be, A.x, A.y), ie = A.x, Be = A.y;
            break;
          }
          case "C": {
            for (var me = Q, Ee = K, be = 1; be < T; be++)
              m(
                Q,
                K,
                te,
                de,
                Se,
                oe,
                ne,
                I,
                be / (T - 1),
                A
              ), w(me, Ee, A.x, A.y), me = A.x, Ee = A.y;
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
    function v(Z, w) {
      var T = Z.getContext ? Z.getContext("webgl", d) : Z, A = f.get(T);
      if (!A) {
        let de = function(me) {
          var Ee = Q[me];
          if (!Ee && (Ee = Q[me] = T.getExtension(me), !Ee))
            throw new Error(me + " not supported");
          return Ee;
        }, Se = function(me, Ee) {
          var be = T.createShader(Ee);
          return T.shaderSource(be, me), T.compileShader(be), be;
        }, oe = function(me, Ee, be, fe) {
          if (!K[me]) {
            var ge = {}, ve = {}, $ = T.createProgram();
            T.attachShader($, Se(Ee, T.VERTEX_SHADER)), T.attachShader($, Se(be, T.FRAGMENT_SHADER)), T.linkProgram($), K[me] = {
              program: $,
              transaction: function(ye) {
                T.useProgram($), ye({
                  setUniform: function(he, We) {
                    for (var Te = [], De = arguments.length - 2; De-- > 0; ) Te[De] = arguments[De + 2];
                    var Re = ve[We] || (ve[We] = T.getUniformLocation($, We));
                    T["uniform" + he].apply(T, [Re].concat(Te));
                  },
                  setAttribute: function(he, We, Te, De, Re) {
                    var Le = ge[he];
                    Le || (Le = ge[he] = {
                      buf: T.createBuffer(),
                      // TODO should we destroy our buffers?
                      loc: T.getAttribLocation($, he),
                      data: null
                    }), T.bindBuffer(T.ARRAY_BUFFER, Le.buf), T.vertexAttribPointer(Le.loc, We, T.FLOAT, !1, 0, 0), T.enableVertexAttribArray(Le.loc), V ? T.vertexAttribDivisor(Le.loc, De) : de("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Le.loc, De), Re !== Le.data && (T.bufferData(T.ARRAY_BUFFER, Re, Te), Le.data = Re);
                  }
                });
              }
            };
          }
          K[me].transaction(fe);
        }, ie = function(me, Ee) {
          I++;
          try {
            T.activeTexture(T.TEXTURE0 + I);
            var be = ne[me];
            be || (be = ne[me] = T.createTexture(), T.bindTexture(T.TEXTURE_2D, be), T.texParameteri(T.TEXTURE_2D, T.TEXTURE_MIN_FILTER, T.NEAREST), T.texParameteri(T.TEXTURE_2D, T.TEXTURE_MAG_FILTER, T.NEAREST)), T.bindTexture(T.TEXTURE_2D, be), Ee(be, I);
          } finally {
            I--;
          }
        }, Be = function(me, Ee, be) {
          var fe = T.createFramebuffer();
          te.push(fe), T.bindFramebuffer(T.FRAMEBUFFER, fe), T.activeTexture(T.TEXTURE0 + Ee), T.bindTexture(T.TEXTURE_2D, me), T.framebufferTexture2D(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_2D, me, 0);
          try {
            be(fe);
          } finally {
            T.deleteFramebuffer(fe), T.bindFramebuffer(T.FRAMEBUFFER, te[--te.length - 1] || null);
          }
        }, Ce = function() {
          Q = {}, K = {}, ne = {}, I = -1, te.length = 0;
        };
        var V = typeof WebGL2RenderingContext < "u" && T instanceof WebGL2RenderingContext, Q = {}, K = {}, ne = {}, I = -1, te = [];
        T.canvas.addEventListener("webglcontextlost", function(me) {
          Ce(), me.preventDefault();
        }, !1), f.set(T, A = {
          gl: T,
          isWebGL2: V,
          getExtension: de,
          withProgram: oe,
          withTexture: ie,
          withTextureFramebuffer: Be,
          handleContextLoss: Ce
        });
      }
      w(A);
    }
    function y(Z, w, T, A, V, Q, K, ne) {
      K === void 0 && (K = 15), ne === void 0 && (ne = null), v(Z, function(I) {
        var te = I.gl, de = I.withProgram, Se = I.withTexture;
        Se("copy", function(oe, ie) {
          te.texImage2D(te.TEXTURE_2D, 0, te.RGBA, V, Q, 0, te.RGBA, te.UNSIGNED_BYTE, w), de("copy", s, c, function(Be) {
            var Ce = Be.setUniform, me = Be.setAttribute;
            me("aUV", 2, te.STATIC_DRAW, 0, new Float32Array([0, 0, 2, 0, 0, 2])), Ce("1i", "image", ie), te.bindFramebuffer(te.FRAMEBUFFER, ne || null), te.disable(te.BLEND), te.colorMask(K & 8, K & 4, K & 2, K & 1), te.viewport(T, A, V, Q), te.scissor(T, A, V, Q), te.drawArrays(te.TRIANGLES, 0, 3);
          });
        });
      });
    }
    function g(Z, w, T) {
      var A = Z.width, V = Z.height;
      v(Z, function(Q) {
        var K = Q.gl, ne = new Uint8Array(A * V * 4);
        K.readPixels(0, 0, A, V, K.RGBA, K.UNSIGNED_BYTE, ne), Z.width = w, Z.height = T, y(K, ne, 0, 0, A, V);
      });
    }
    var E = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      withWebGLContext: v,
      renderImageData: y,
      resizeWebGLCanvasWithoutClearing: g
    });
    function _(Z, w, T, A, V, Q) {
      Q === void 0 && (Q = 1);
      var K = new Uint8Array(Z * w), ne = A[2] - A[0], I = A[3] - A[1], te = [];
      n(T, function(me, Ee, be, fe) {
        te.push({
          x1: me,
          y1: Ee,
          x2: be,
          y2: fe,
          minX: Math.min(me, be),
          minY: Math.min(Ee, fe),
          maxX: Math.max(me, be),
          maxY: Math.max(Ee, fe)
        });
      }), te.sort(function(me, Ee) {
        return me.maxX - Ee.maxX;
      });
      for (var de = 0; de < Z; de++)
        for (var Se = 0; Se < w; Se++) {
          var oe = Be(
            A[0] + ne * (de + 0.5) / Z,
            A[1] + I * (Se + 0.5) / w
          ), ie = Math.pow(1 - Math.abs(oe) / V, Q) / 2;
          oe < 0 && (ie = 1 - ie), ie = Math.max(0, Math.min(255, Math.round(ie * 255))), K[Se * Z + de] = ie;
        }
      return K;
      function Be(me, Ee) {
        for (var be = 1 / 0, fe = 1 / 0, ge = te.length; ge--; ) {
          var ve = te[ge];
          if (ve.maxX + fe <= me)
            break;
          if (me + fe > ve.minX && Ee - fe < ve.maxY && Ee + fe > ve.minY) {
            var $ = U(me, Ee, ve.x1, ve.y1, ve.x2, ve.y2);
            $ < be && (be = $, fe = Math.sqrt(be));
          }
        }
        return Ce(me, Ee) && (fe = -fe), fe;
      }
      function Ce(me, Ee) {
        for (var be = 0, fe = te.length; fe--; ) {
          var ge = te[fe];
          if (ge.maxX <= me)
            break;
          var ve = ge.y1 > Ee != ge.y2 > Ee && me < (ge.x2 - ge.x1) * (Ee - ge.y1) / (ge.y2 - ge.y1) + ge.x1;
          ve && (be += ge.y1 < ge.y2 ? 1 : -1);
        }
        return be !== 0;
      }
    }
    function D(Z, w, T, A, V, Q, K, ne, I, te) {
      Q === void 0 && (Q = 1), ne === void 0 && (ne = 0), I === void 0 && (I = 0), te === void 0 && (te = 0), C(Z, w, T, A, V, Q, K, null, ne, I, te);
    }
    function C(Z, w, T, A, V, Q, K, ne, I, te, de) {
      Q === void 0 && (Q = 1), I === void 0 && (I = 0), te === void 0 && (te = 0), de === void 0 && (de = 0);
      for (var Se = _(Z, w, T, A, V, Q), oe = new Uint8Array(Se.length * 4), ie = 0; ie < Se.length; ie++)
        oe[ie * 4 + de] = Se[ie];
      y(K, oe, I, te, Z, w, 1 << 3 - de, ne);
    }
    function U(Z, w, T, A, V, Q) {
      var K = V - T, ne = Q - A, I = K * K + ne * ne, te = I ? Math.max(0, Math.min(1, ((Z - T) * K + (w - A) * ne) / I)) : 0, de = Z - (T + te * K), Se = w - (A + te * ne);
      return de * de + Se * Se;
    }
    var b = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      generate: _,
      generateIntoCanvas: D,
      generateIntoFramebuffer: C
    }), z = "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", R = "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}", x = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}", H = new Float32Array([0, 0, 2, 0, 0, 2]), G = null, L = !1, W = {}, q = /* @__PURE__ */ new WeakMap();
    function ae(Z) {
      if (!L && !le(Z))
        throw new Error("WebGL generation not supported");
    }
    function O(Z, w, T, A, V, Q, K) {
      if (Q === void 0 && (Q = 1), K === void 0 && (K = null), !K && (K = G, !K)) {
        var ne = typeof OffscreenCanvas == "function" ? new OffscreenCanvas(1, 1) : typeof document < "u" ? document.createElement("canvas") : null;
        if (!ne)
          throw new Error("OffscreenCanvas or DOM canvas not supported");
        K = G = ne.getContext("webgl", { depth: !1 });
      }
      ae(K);
      var I = new Uint8Array(Z * w * 4);
      v(K, function(oe) {
        var ie = oe.gl, Be = oe.withTexture, Ce = oe.withTextureFramebuffer;
        Be("readable", function(me, Ee) {
          ie.texImage2D(ie.TEXTURE_2D, 0, ie.RGBA, Z, w, 0, ie.RGBA, ie.UNSIGNED_BYTE, null), Ce(me, Ee, function(be) {
            Y(
              Z,
              w,
              T,
              A,
              V,
              Q,
              ie,
              be,
              0,
              0,
              0
              // red channel
            ), ie.readPixels(0, 0, Z, w, ie.RGBA, ie.UNSIGNED_BYTE, I);
          });
        });
      });
      for (var te = new Uint8Array(Z * w), de = 0, Se = 0; de < I.length; de += 4)
        te[Se++] = I[de];
      return te;
    }
    function X(Z, w, T, A, V, Q, K, ne, I, te) {
      Q === void 0 && (Q = 1), ne === void 0 && (ne = 0), I === void 0 && (I = 0), te === void 0 && (te = 0), Y(Z, w, T, A, V, Q, K, null, ne, I, te);
    }
    function Y(Z, w, T, A, V, Q, K, ne, I, te, de) {
      Q === void 0 && (Q = 1), I === void 0 && (I = 0), te === void 0 && (te = 0), de === void 0 && (de = 0), ae(K);
      var Se = [];
      n(T, function(oe, ie, Be, Ce) {
        Se.push(oe, ie, Be, Ce);
      }), Se = new Float32Array(Se), v(K, function(oe) {
        var ie = oe.gl, Be = oe.isWebGL2, Ce = oe.getExtension, me = oe.withProgram, Ee = oe.withTexture, be = oe.withTextureFramebuffer, fe = oe.handleContextLoss;
        if (Ee("rawDistances", function(ge, ve) {
          (Z !== ge._lastWidth || w !== ge._lastHeight) && ie.texImage2D(
            ie.TEXTURE_2D,
            0,
            ie.RGBA,
            ge._lastWidth = Z,
            ge._lastHeight = w,
            0,
            ie.RGBA,
            ie.UNSIGNED_BYTE,
            null
          ), me("main", z, R, function($) {
            var Ve = $.setAttribute, ye = $.setUniform, Ue = !Be && Ce("ANGLE_instanced_arrays"), he = !Be && Ce("EXT_blend_minmax");
            Ve("aUV", 2, ie.STATIC_DRAW, 0, H), Ve("aLineSegment", 4, ie.DYNAMIC_DRAW, 1, Se), ye.apply(void 0, ["4f", "uGlyphBounds"].concat(A)), ye("1f", "uMaxDistance", V), ye("1f", "uExponent", Q), be(ge, ve, function(We) {
              ie.enable(ie.BLEND), ie.colorMask(!0, !0, !0, !0), ie.viewport(0, 0, Z, w), ie.scissor(0, 0, Z, w), ie.blendFunc(ie.ONE, ie.ONE), ie.blendEquationSeparate(ie.FUNC_ADD, Be ? ie.MAX : he.MAX_EXT), ie.clear(ie.COLOR_BUFFER_BIT), Be ? ie.drawArraysInstanced(ie.TRIANGLES, 0, 3, Se.length / 4) : Ue.drawArraysInstancedANGLE(ie.TRIANGLES, 0, 3, Se.length / 4);
            });
          }), me("post", s, x, function($) {
            $.setAttribute("aUV", 2, ie.STATIC_DRAW, 0, H), $.setUniform("1i", "tex", ve), ie.bindFramebuffer(ie.FRAMEBUFFER, ne), ie.disable(ie.BLEND), ie.colorMask(de === 0, de === 1, de === 2, de === 3), ie.viewport(I, te, Z, w), ie.scissor(I, te, Z, w), ie.drawArrays(ie.TRIANGLES, 0, 3);
          });
        }), ie.isContextLost())
          throw fe(), new Error("webgl context lost");
      });
    }
    function le(Z) {
      var w = !Z || Z === G ? W : Z.canvas || Z, T = q.get(w);
      if (T === void 0) {
        L = !0;
        var A = null;
        try {
          var V = [
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
          ], Q = O(
            4,
            4,
            "M8,8L16,8L24,24L16,24Z",
            [0, 0, 32, 32],
            24,
            1,
            Z
          );
          T = Q && V.length === Q.length && Q.every(function(K, ne) {
            return K === V[ne];
          }), T || (A = "bad trial run results", console.info(V, Q));
        } catch (K) {
          T = !1, A = K.message;
        }
        A && console.warn("WebGL SDF generation not supported:", A), L = !1, q.set(w, T);
      }
      return T;
    }
    var j = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      generate: O,
      generateIntoCanvas: X,
      generateIntoFramebuffer: Y,
      isSupported: le
    });
    function P(Z, w, T, A, V, Q) {
      V === void 0 && (V = Math.max(A[2] - A[0], A[3] - A[1]) / 2), Q === void 0 && (Q = 1);
      try {
        return O.apply(j, arguments);
      } catch (K) {
        return console.info("WebGL SDF generation failed, falling back to JS", K), _.apply(b, arguments);
      }
    }
    function ee(Z, w, T, A, V, Q, K, ne, I, te) {
      V === void 0 && (V = Math.max(A[2] - A[0], A[3] - A[1]) / 2), Q === void 0 && (Q = 1), ne === void 0 && (ne = 0), I === void 0 && (I = 0), te === void 0 && (te = 0);
      try {
        return X.apply(j, arguments);
      } catch (de) {
        return console.info("WebGL SDF generation failed, falling back to JS", de), D.apply(b, arguments);
      }
    }
    return l.forEachPathCommand = i, l.generate = P, l.generateIntoCanvas = ee, l.javascript = b, l.pathToLineSegments = n, l.webgl = j, l.webglUtils = E, Object.defineProperty(l, "__esModule", { value: !0 }), l;
  })({});
  return o;
}
function x0() {
  var o = (function(l) {
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
    }, m = {}, i = {};
    m.L = 1, i[1] = "L", Object.keys(p).forEach(function(fe, ge) {
      m[fe] = 1 << ge + 1, i[m[fe]] = fe;
    }), Object.freeze(m);
    var n = m.LRI | m.RLI | m.FSI, s = m.L | m.R | m.AL, c = m.B | m.S | m.WS | m.ON | m.FSI | m.LRI | m.RLI | m.PDI, f = m.BN | m.RLE | m.LRE | m.RLO | m.LRO | m.PDF, d = m.S | m.WS | m.B | n | m.PDI | f, v = null;
    function y() {
      if (!v) {
        v = /* @__PURE__ */ new Map();
        var fe = function(ve) {
          if (p.hasOwnProperty(ve)) {
            var $ = 0;
            p[ve].split(",").forEach(function(Ve) {
              var ye = Ve.split("+"), Ue = ye[0], he = ye[1];
              Ue = parseInt(Ue, 36), he = he ? parseInt(he, 36) : 0, v.set($ += Ue, m[ve]);
              for (var We = 0; We < he; We++)
                v.set(++$, m[ve]);
            });
          }
        };
        for (var ge in p) fe(ge);
      }
    }
    function g(fe) {
      return y(), v.get(fe.codePointAt(0)) || m.L;
    }
    function E(fe) {
      return i[g(fe)];
    }
    var _ = {
      pairs: "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
      canonical: "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"
    };
    function D(fe, ge) {
      var ve = 36, $ = 0, Ve = /* @__PURE__ */ new Map(), ye = ge && /* @__PURE__ */ new Map(), Ue;
      return fe.split(",").forEach(function he(We) {
        if (We.indexOf("+") !== -1)
          for (var Te = +We; Te--; )
            he(Ue);
        else {
          Ue = We;
          var De = We.split(">"), Re = De[0], Le = De[1];
          Re = String.fromCodePoint($ += parseInt(Re, ve)), Le = String.fromCodePoint($ += parseInt(Le, ve)), Ve.set(Re, Le), ge && ye.set(Le, Re);
        }
      }), { map: Ve, reverseMap: ye };
    }
    var C, U, b;
    function z() {
      if (!C) {
        var fe = D(_.pairs, !0), ge = fe.map, ve = fe.reverseMap;
        C = ge, U = ve, b = D(_.canonical, !1).map;
      }
    }
    function R(fe) {
      return z(), C.get(fe) || null;
    }
    function x(fe) {
      return z(), U.get(fe) || null;
    }
    function H(fe) {
      return z(), b.get(fe) || null;
    }
    var G = m.L, L = m.R, W = m.EN, q = m.ES, ae = m.ET, O = m.AN, X = m.CS, Y = m.B, le = m.S, j = m.ON, P = m.BN, ee = m.NSM, Z = m.AL, w = m.LRO, T = m.RLO, A = m.LRE, V = m.RLE, Q = m.PDF, K = m.LRI, ne = m.RLI, I = m.FSI, te = m.PDI;
    function de(fe, ge) {
      for (var ve = 125, $ = new Uint32Array(fe.length), Ve = 0; Ve < fe.length; Ve++)
        $[Ve] = g(fe[Ve]);
      var ye = /* @__PURE__ */ new Map();
      function Ue(Ht, It) {
        var Mt = $[Ht];
        $[Ht] = It, ye.set(Mt, ye.get(Mt) - 1), Mt & c && ye.set(c, ye.get(c) - 1), ye.set(It, (ye.get(It) || 0) + 1), It & c && ye.set(c, (ye.get(c) || 0) + 1);
      }
      for (var he = new Uint8Array(fe.length), We = /* @__PURE__ */ new Map(), Te = [], De = null, Re = 0; Re < fe.length; Re++)
        De || Te.push(De = {
          start: Re,
          end: fe.length - 1,
          // 3.3.1 P2-P3: Determine the paragraph level
          level: ge === "rtl" ? 1 : ge === "ltr" ? 0 : gi(Re, !1)
        }), $[Re] & Y && (De.end = Re, De = null);
      for (var Le = V | A | T | w | n | te | Q | Y, $e = function(Ht) {
        return Ht + (Ht & 1 ? 1 : 2);
      }, ft = function(Ht) {
        return Ht + (Ht & 1 ? 2 : 1);
      }, Ge = 0; Ge < Te.length; Ge++) {
        De = Te[Ge];
        var je = [{
          _level: De.level,
          _override: 0,
          //0=neutral, 1=L, 2=R
          _isolate: 0
          //bool
        }], Me = void 0, ct = 0, et = 0, _t = 0;
        ye.clear();
        for (var tt = De.start; tt <= De.end; tt++) {
          var Oe = $[tt];
          if (Me = je[je.length - 1], ye.set(Oe, (ye.get(Oe) || 0) + 1), Oe & c && ye.set(c, (ye.get(c) || 0) + 1), Oe & Le)
            if (Oe & (V | A)) {
              he[tt] = Me._level;
              var Ze = (Oe === V ? ft : $e)(Me._level);
              Ze <= ve && !ct && !et ? je.push({
                _level: Ze,
                _override: 0,
                _isolate: 0
              }) : ct || et++;
            } else if (Oe & (T | w)) {
              he[tt] = Me._level;
              var Ma = (Oe === T ? ft : $e)(Me._level);
              Ma <= ve && !ct && !et ? je.push({
                _level: Ma,
                _override: Oe & T ? L : G,
                _isolate: 0
              }) : ct || et++;
            } else if (Oe & n) {
              Oe & I && (Oe = gi(tt + 1, !0) === 1 ? ne : K), he[tt] = Me._level, Me._override && Ue(tt, Me._override);
              var Je = (Oe === ne ? ft : $e)(Me._level);
              Je <= ve && ct === 0 && et === 0 ? (_t++, je.push({
                _level: Je,
                _override: 0,
                _isolate: 1,
                _isolInitIndex: tt
              })) : ct++;
            } else if (Oe & te) {
              if (ct > 0)
                ct--;
              else if (_t > 0) {
                for (et = 0; !je[je.length - 1]._isolate; )
                  je.pop();
                var Xe = je[je.length - 1]._isolInitIndex;
                Xe != null && (We.set(Xe, tt), We.set(tt, Xe)), je.pop(), _t--;
              }
              Me = je[je.length - 1], he[tt] = Me._level, Me._override && Ue(tt, Me._override);
            } else Oe & Q ? (ct === 0 && (et > 0 ? et-- : !Me._isolate && je.length > 1 && (je.pop(), Me = je[je.length - 1])), he[tt] = Me._level) : Oe & Y && (he[tt] = De.level);
          else
            he[tt] = Me._level, Me._override && Oe !== P && Ue(tt, Me._override);
        }
        for (var mt = [], at = null, ze = De.start; ze <= De.end; ze++) {
          var nt = $[ze];
          if (!(nt & f)) {
            var xt = he[ze], Ct = nt & n, gt = nt === te;
            at && xt === at._level ? (at._end = ze, at._endsWithIsolInit = Ct) : mt.push(at = {
              _start: ze,
              _end: ze,
              _level: xt,
              _startsWithPDI: gt,
              _endsWithIsolInit: Ct
            });
          }
        }
        for (var Zt = [], ha = 0; ha < mt.length; ha++) {
          var Nt = mt[ha];
          if (!Nt._startsWithPDI || Nt._startsWithPDI && !We.has(Nt._start)) {
            for (var Da = [at = Nt], Yt = void 0; at && at._endsWithIsolInit && (Yt = We.get(at._end)) != null; )
              for (var Rt = ha + 1; Rt < mt.length; Rt++)
                if (mt[Rt]._start === Yt) {
                  Da.push(at = mt[Rt]);
                  break;
                }
            for (var Ut = [], lt = 0; lt < Da.length; lt++)
              for (var vl = Da[lt], Rn = vl._start; Rn <= vl._end; Rn++)
                Ut.push(Rn);
            for (var Wi = he[Ut[0]], ii = De.level, pl = Ut[0] - 1; pl >= 0; pl--)
              if (!($[pl] & f)) {
                ii = he[pl];
                break;
              }
            var On = Ut[Ut.length - 1], ui = he[On], ml = De.level;
            if (!($[On] & n)) {
              for (var Ot = On + 1; Ot <= De.end; Ot++)
                if (!($[Ot] & f)) {
                  ml = he[Ot];
                  break;
                }
            }
            Zt.push({
              _seqIndices: Ut,
              _sosType: Math.max(ii, Wi) % 2 ? L : G,
              _eosType: Math.max(ml, ui) % 2 ? L : G
            });
          }
        }
        for (var vt = 0; vt < Zt.length; vt++) {
          var Ya = Zt[vt], _e = Ya._seqIndices, qa = Ya._sosType, Aa = Ya._eosType, Ca = he[_e[0]] & 1 ? L : G;
          if (ye.get(ee))
            for (var on = 0; on < _e.length; on++) {
              var yl = _e[on];
              if ($[yl] & ee) {
                for (var gl = qa, zn = on - 1; zn >= 0; zn--)
                  if (!($[_e[zn]] & f)) {
                    gl = $[_e[zn]];
                    break;
                  }
                Ue(yl, gl & (n | te) ? j : gl);
              }
            }
          if (ye.get(W))
            for (var xn = 0; xn < _e.length; xn++) {
              var ri = _e[xn];
              if ($[ri] & W)
                for (var Nn = xn - 1; Nn >= -1; Nn--) {
                  var oi = Nn === -1 ? qa : $[_e[Nn]];
                  if (oi & s) {
                    oi === Z && Ue(ri, O);
                    break;
                  }
                }
            }
          if (ye.get(Z))
            for (var Bn = 0; Bn < _e.length; Bn++) {
              var fi = _e[Bn];
              $[fi] & Z && Ue(fi, L);
            }
          if (ye.get(q) || ye.get(X))
            for (var Gn = 1; Gn < _e.length - 1; Gn++) {
              var Sl = _e[Gn];
              if ($[Sl] & (q | X)) {
                for (var Xa = 0, El = 0, jn = Gn - 1; jn >= 0 && (Xa = $[_e[jn]], !!(Xa & f)); jn--)
                  ;
                for (var bl = Gn + 1; bl < _e.length && (El = $[_e[bl]], !!(El & f)); bl++)
                  ;
                Xa === El && ($[Sl] === q ? Xa === W : Xa & (W | O)) && Ue(Sl, Xa);
              }
            }
          if (ye.get(W))
            for (var aa = 0; aa < _e.length; aa++) {
              var Pi = _e[aa];
              if ($[Pi] & W) {
                for (var Hn = aa - 1; Hn >= 0 && $[_e[Hn]] & (ae | f); Hn--)
                  Ue(_e[Hn], W);
                for (aa++; aa < _e.length && $[_e[aa]] & (ae | f | W); aa++)
                  $[_e[aa]] !== W && Ue(_e[aa], W);
              }
            }
          if (ye.get(ae) || ye.get(q) || ye.get(X))
            for (var fn = 0; fn < _e.length; fn++) {
              var ki = _e[fn];
              if ($[ki] & (ae | q | X)) {
                Ue(ki, j);
                for (var Vn = fn - 1; Vn >= 0 && $[_e[Vn]] & f; Vn--)
                  Ue(_e[Vn], j);
                for (var Ra = fn + 1; Ra < _e.length && $[_e[Ra]] & f; Ra++)
                  Ue(_e[Ra], j);
              }
            }
          if (ye.get(W))
            for (var Tl = 0, Ln = qa; Tl < _e.length; Tl++) {
              var Yn = _e[Tl], _l = $[Yn];
              _l & W ? Ln === G && Ue(Yn, G) : _l & s && (Ln = _l);
            }
          if (ye.get(c)) {
            var Qa = L | W | O, ci = Qa | G, qn = [];
            {
              for (var Fa = [], Ka = 0; Ka < _e.length; Ka++)
                if ($[_e[Ka]] & c) {
                  var Za = fe[_e[Ka]], si = void 0;
                  if (R(Za) !== null)
                    if (Fa.length < 63)
                      Fa.push({ char: Za, seqIndex: Ka });
                    else
                      break;
                  else if ((si = x(Za)) !== null)
                    for (var cn = Fa.length - 1; cn >= 0; cn--) {
                      var Xn = Fa[cn].char;
                      if (Xn === si || Xn === x(H(Za)) || R(H(Xn)) === Za) {
                        qn.push([Fa[cn].seqIndex, Ka]), Fa.length = cn;
                        break;
                      }
                    }
                }
              qn.sort(function(Ht, It) {
                return Ht[0] - It[0];
              });
            }
            for (var Ul = 0; Ul < qn.length; Ul++) {
              for (var di = qn[Ul], Qn = di[0], Fn = di[1], hi = !1, kt = 0, vi = Qn + 1; vi < Fn; vi++) {
                var Ii = _e[vi];
                if ($[Ii] & ci) {
                  hi = !0;
                  var pi = $[Ii] & Qa ? L : G;
                  if (pi === Ca) {
                    kt = pi;
                    break;
                  }
                }
              }
              if (hi && !kt) {
                kt = qa;
                for (var wa = Qn - 1; wa >= 0; wa--) {
                  var Ml = _e[wa];
                  if ($[Ml] & ci) {
                    var Kn = $[Ml] & Qa ? L : G;
                    Kn !== Ca ? kt = Kn : kt = Ca;
                    break;
                  }
                }
              }
              if (kt) {
                if ($[_e[Qn]] = $[_e[Fn]] = kt, kt !== Ca) {
                  for (var sn = Qn + 1; sn < _e.length; sn++)
                    if (!($[_e[sn]] & f)) {
                      g(fe[_e[sn]]) & ee && ($[_e[sn]] = kt);
                      break;
                    }
                }
                if (kt !== Ca) {
                  for (var dn = Fn + 1; dn < _e.length; dn++)
                    if (!($[_e[dn]] & f)) {
                      g(fe[_e[dn]]) & ee && ($[_e[dn]] = kt);
                      break;
                    }
                }
              }
            }
            for (var va = 0; va < _e.length; va++)
              if ($[_e[va]] & c) {
                for (var mi = va, Dl = va, Oa = qa, Ga = va - 1; Ga >= 0; Ga--)
                  if ($[_e[Ga]] & f)
                    mi = Ga;
                  else {
                    Oa = $[_e[Ga]] & Qa ? L : G;
                    break;
                  }
                for (var yi = Aa, Ja = va + 1; Ja < _e.length; Ja++)
                  if ($[_e[Ja]] & (c | f))
                    Dl = Ja;
                  else {
                    yi = $[_e[Ja]] & Qa ? L : G;
                    break;
                  }
                for (var Al = mi; Al <= Dl; Al++)
                  $[_e[Al]] = Oa === yi ? Oa : Ca;
                va = Dl;
              }
          }
        }
        for (var qt = De.start; qt <= De.end; qt++) {
          var Ju = he[qt], St = $[qt];
          if (Ju & 1 ? St & (G | W | O) && he[qt]++ : St & L ? he[qt]++ : St & (O | W) && (he[qt] += 2), St & f && (he[qt] = qt === 0 ? De.level : he[qt - 1]), qt === De.end || g(fe[qt]) & (le | Y))
            for (var Zn = qt; Zn >= 0 && g(fe[Zn]) & d; Zn--)
              he[Zn] = De.level;
        }
      }
      return {
        levels: he,
        paragraphs: Te
      };
      function gi(Ht, It) {
        for (var Mt = Ht; Mt < fe.length; Mt++) {
          var pa = $[Mt];
          if (pa & (L | Z))
            return 1;
          if (pa & (Y | G) || It && pa === te)
            return 0;
          if (pa & n) {
            var Si = $i(Mt);
            Mt = Si === -1 ? fe.length : Si;
          }
        }
        return 0;
      }
      function $i(Ht) {
        for (var It = 1, Mt = Ht + 1; Mt < fe.length; Mt++) {
          var pa = $[Mt];
          if (pa & Y)
            break;
          if (pa & te) {
            if (--It === 0)
              return Mt;
          } else pa & n && It++;
        }
        return -1;
      }
    }
    var Se = "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1", oe;
    function ie() {
      if (!oe) {
        var fe = D(Se, !0), ge = fe.map, ve = fe.reverseMap;
        ve.forEach(function($, Ve) {
          ge.set(Ve, $);
        }), oe = ge;
      }
    }
    function Be(fe) {
      return ie(), oe.get(fe) || null;
    }
    function Ce(fe, ge, ve, $) {
      var Ve = fe.length;
      ve = Math.max(0, ve == null ? 0 : +ve), $ = Math.min(Ve - 1, $ == null ? Ve - 1 : +$);
      for (var ye = /* @__PURE__ */ new Map(), Ue = ve; Ue <= $; Ue++)
        if (ge[Ue] & 1) {
          var he = Be(fe[Ue]);
          he !== null && ye.set(Ue, he);
        }
      return ye;
    }
    function me(fe, ge, ve, $) {
      var Ve = fe.length;
      ve = Math.max(0, ve == null ? 0 : +ve), $ = Math.min(Ve - 1, $ == null ? Ve - 1 : +$);
      var ye = [];
      return ge.paragraphs.forEach(function(Ue) {
        var he = Math.max(ve, Ue.start), We = Math.min($, Ue.end);
        if (he < We) {
          for (var Te = ge.levels.slice(he, We + 1), De = We; De >= he && g(fe[De]) & d; De--)
            Te[De] = Ue.level;
          for (var Re = Ue.level, Le = 1 / 0, $e = 0; $e < Te.length; $e++) {
            var ft = Te[$e];
            ft > Re && (Re = ft), ft < Le && (Le = ft | 1);
          }
          for (var Ge = Re; Ge >= Le; Ge--)
            for (var je = 0; je < Te.length; je++)
              if (Te[je] >= Ge) {
                for (var Me = je; je + 1 < Te.length && Te[je + 1] >= Ge; )
                  je++;
                je > Me && ye.push([Me + he, je + he]);
              }
        }
      }), ye;
    }
    function Ee(fe, ge, ve, $) {
      var Ve = be(fe, ge, ve, $), ye = [].concat(fe);
      return Ve.forEach(function(Ue, he) {
        ye[he] = (ge.levels[Ue] & 1 ? Be(fe[Ue]) : null) || fe[Ue];
      }), ye.join("");
    }
    function be(fe, ge, ve, $) {
      for (var Ve = me(fe, ge, ve, $), ye = [], Ue = 0; Ue < fe.length; Ue++)
        ye[Ue] = Ue;
      return Ve.forEach(function(he) {
        for (var We = he[0], Te = he[1], De = ye.slice(We, Te + 1), Re = De.length; Re--; )
          ye[Te - Re] = De[Re];
      }), ye;
    }
    return l.closingToOpeningBracket = x, l.getBidiCharType = g, l.getBidiCharTypeName = E, l.getCanonicalBracket = H, l.getEmbeddingLevels = de, l.getMirroredCharacter = Be, l.getMirroredCharactersMap = Ce, l.getReorderSegments = me, l.getReorderedIndices = be, l.getReorderedString = Ee, l.openingToClosingBracket = R, Object.defineProperty(l, "__esModule", { value: !0 }), l;
  })({});
  return o;
}
const Fs = /\bvoid\s+main\s*\(\s*\)\s*{/g;
function jo(o) {
  const l = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function p(m, i) {
    let n = lv[i];
    return n ? jo(n) : m;
  }
  return o.replace(l, p);
}
const Lt = [];
for (let o = 0; o < 256; o++)
  Lt[o] = (o < 16 ? "0" : "") + o.toString(16);
function N0() {
  const o = Math.random() * 4294967295 | 0, l = Math.random() * 4294967295 | 0, p = Math.random() * 4294967295 | 0, m = Math.random() * 4294967295 | 0;
  return (Lt[o & 255] + Lt[o >> 8 & 255] + Lt[o >> 16 & 255] + Lt[o >> 24 & 255] + "-" + Lt[l & 255] + Lt[l >> 8 & 255] + "-" + Lt[l >> 16 & 15 | 64] + Lt[l >> 24 & 255] + "-" + Lt[p & 63 | 128] + Lt[p >> 8 & 255] + "-" + Lt[p >> 16 & 255] + Lt[p >> 24 & 255] + Lt[m & 255] + Lt[m >> 8 & 255] + Lt[m >> 16 & 255] + Lt[m >> 24 & 255]).toUpperCase();
}
const cl = Object.assign || function() {
  let o = arguments[0];
  for (let l = 1, p = arguments.length; l < p; l++) {
    let m = arguments[l];
    if (m)
      for (let i in m)
        Object.prototype.hasOwnProperty.call(m, i) && (o[i] = m[i]);
  }
  return o;
}, B0 = Date.now(), ts = /* @__PURE__ */ new WeakMap(), as = /* @__PURE__ */ new Map();
let G0 = 1e10;
function Ho(o, l) {
  const p = L0(l);
  let m = ts.get(o);
  if (m || ts.set(o, m = /* @__PURE__ */ Object.create(null)), m[p])
    return new m[p]();
  const i = `_onBeforeCompile${p}`, n = function(d, v) {
    o.onBeforeCompile.call(this, d, v);
    const y = this.customProgramCacheKey() + "|" + d.vertexShader + "|" + d.fragmentShader;
    let g = as[y];
    if (!g) {
      const E = j0(this, d, l, p);
      g = as[y] = E;
    }
    d.vertexShader = g.vertexShader, d.fragmentShader = g.fragmentShader, cl(d.uniforms, this.uniforms), l.timeUniform && (d.uniforms[l.timeUniform] = {
      get value() {
        return Date.now() - B0;
      }
    }), this[i] && this[i](d);
  }, s = function() {
    return c(l.chained ? o : o.clone());
  }, c = function(d) {
    const v = Object.create(d, f);
    return Object.defineProperty(v, "baseMaterial", { value: o }), Object.defineProperty(v, "id", { value: G0++ }), v.uuid = N0(), v.uniforms = cl({}, d.uniforms, l.uniforms), v.defines = cl({}, d.defines, l.defines), v.defines[`TROIKA_DERIVED_MATERIAL_${p}`] = "", v.extensions = cl({}, d.extensions, l.extensions), v._listeners = void 0, v;
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
        const v = this.baseMaterial;
        return d === v || v.isDerivedMaterial && v.isDerivedFrom(d) || !1;
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
        this[i] = d;
      }
    },
    copy: {
      writable: !0,
      configurable: !0,
      value: function(d) {
        return o.copy.call(this, d), !o.isShaderMaterial && !o.isDerivedMaterial && (cl(this.extensions, d.extensions), cl(this.defines, d.defines), cl(this.uniforms, nv.clone(d.uniforms))), this;
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
        return d || (d = this._depthMaterial = Ho(
          o.isDerivedMaterial ? o.getDepthMaterial() : new tv({ depthPacking: av }),
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
        return d || (d = this._distanceMaterial = Ho(
          o.isDerivedMaterial ? o.getDistanceMaterial() : new ev(),
          l
        ), d.defines.IS_DISTANCE_MATERIAL = "", d.uniforms = this.uniforms), d;
      }
    },
    dispose: {
      writable: !0,
      configurable: !0,
      value() {
        const { _depthMaterial: d, _distanceMaterial: v } = this;
        d && d.dispose(), v && v.dispose(), o.dispose.call(this);
      }
    }
  };
  return m[p] = s, new s();
}
function j0(o, { vertexShader: l, fragmentShader: p }, m, i) {
  let {
    vertexDefs: n,
    vertexMainIntro: s,
    vertexMainOutro: c,
    vertexTransform: f,
    fragmentDefs: d,
    fragmentMainIntro: v,
    fragmentMainOutro: y,
    fragmentColorTransform: g,
    customRewriter: E,
    timeUniform: _
  } = m;
  if (n = n || "", s = s || "", c = c || "", d = d || "", v = v || "", y = y || "", (f || E) && (l = jo(l)), (g || E) && (p = p.replace(
    /^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,
    `
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`
  ), p = jo(p)), E) {
    let D = E({ vertexShader: l, fragmentShader: p });
    l = D.vertexShader, p = D.fragmentShader;
  }
  if (g) {
    let D = [];
    p = p.replace(
      /^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,
      // [^]+? = non-greedy match of any chars including newlines
      (C) => (D.push(C), "")
    ), y = `${g}
${D.join(`
`)}
${y}`;
  }
  if (_) {
    const D = `
uniform float ${_};
`;
    n = D + n, d = D + d;
  }
  return f && (l = `vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${l}
`, n = `${n}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${f}
}
`, s = `
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${s}
`, l = l.replace(/\b(position|normal|uv)\b/g, (D, C, U, b) => /\battribute\s+vec[23]\s+$/.test(b.substr(0, U)) ? C : `troika_${C}_${i}`), o.map && o.map.channel > 0 || (l = l.replace(/\bMAP_UV\b/g, `troika_uv_${i}`))), l = ns(l, i, n, s, c), p = ns(p, i, d, v, y), {
    vertexShader: l,
    fragmentShader: p
  };
}
function ns(o, l, p, m, i) {
  return (m || i || p) && (o = o.replace(
    Fs,
    `
${p}
void troikaOrigMain${l}() {`
  ), o += `
void main() {
  ${m}
  troikaOrigMain${l}();
  ${i}
}`), o;
}
function H0(o, l) {
  return o === "uniforms" ? void 0 : typeof l == "function" ? l.toString() : l;
}
let V0 = 0;
const ls = /* @__PURE__ */ new Map();
function L0(o) {
  const l = JSON.stringify(o, H0);
  let p = ls.get(l);
  return p == null && ls.set(l, p = ++V0), p;
}
/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/
function Y0() {
  return typeof window > "u" && (self.window = self), (function(o) {
    var l = { parse: function(i) {
      var n = l._bin, s = new Uint8Array(i);
      if (n.readASCII(s, 0, 4) == "ttcf") {
        var c = 4;
        n.readUshort(s, c), c += 2, n.readUshort(s, c), c += 2;
        var f = n.readUint(s, c);
        c += 4;
        for (var d = [], v = 0; v < f; v++) {
          var y = n.readUint(s, c);
          c += 4, d.push(l._readFont(s, y));
        }
        return d;
      }
      return [l._readFont(s, 0)];
    }, _readFont: function(i, n) {
      var s = l._bin, c = n;
      s.readFixed(i, n), n += 4;
      var f = s.readUshort(i, n);
      n += 2, s.readUshort(i, n), n += 2, s.readUshort(i, n), n += 2, s.readUshort(i, n), n += 2;
      for (var d = ["cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GDEF", "GPOS", "GSUB", "SVG "], v = { _data: i, _offset: c }, y = {}, g = 0; g < f; g++) {
        var E = s.readASCII(i, n, 4);
        n += 4, s.readUint(i, n), n += 4;
        var _ = s.readUint(i, n);
        n += 4;
        var D = s.readUint(i, n);
        n += 4, y[E] = { offset: _, length: D };
      }
      for (g = 0; g < d.length; g++) {
        var C = d[g];
        y[C] && (v[C.trim()] = l[C.trim()].parse(i, y[C].offset, y[C].length, v));
      }
      return v;
    }, _tabOffset: function(i, n, s) {
      for (var c = l._bin, f = c.readUshort(i, s + 4), d = s + 12, v = 0; v < f; v++) {
        var y = c.readASCII(i, d, 4);
        d += 4, c.readUint(i, d), d += 4;
        var g = c.readUint(i, d);
        if (d += 4, c.readUint(i, d), d += 4, y == n) return g;
      }
      return 0;
    } };
    l._bin = { readFixed: function(i, n) {
      return (i[n] << 8 | i[n + 1]) + (i[n + 2] << 8 | i[n + 3]) / 65540;
    }, readF2dot14: function(i, n) {
      return l._bin.readShort(i, n) / 16384;
    }, readInt: function(i, n) {
      return l._bin._view(i).getInt32(n);
    }, readInt8: function(i, n) {
      return l._bin._view(i).getInt8(n);
    }, readShort: function(i, n) {
      return l._bin._view(i).getInt16(n);
    }, readUshort: function(i, n) {
      return l._bin._view(i).getUint16(n);
    }, readUshorts: function(i, n, s) {
      for (var c = [], f = 0; f < s; f++) c.push(l._bin.readUshort(i, n + 2 * f));
      return c;
    }, readUint: function(i, n) {
      return l._bin._view(i).getUint32(n);
    }, readUint64: function(i, n) {
      return 4294967296 * l._bin.readUint(i, n) + l._bin.readUint(i, n + 4);
    }, readASCII: function(i, n, s) {
      for (var c = "", f = 0; f < s; f++) c += String.fromCharCode(i[n + f]);
      return c;
    }, readUnicode: function(i, n, s) {
      for (var c = "", f = 0; f < s; f++) {
        var d = i[n++] << 8 | i[n++];
        c += String.fromCharCode(d);
      }
      return c;
    }, _tdec: typeof window < "u" && window.TextDecoder ? new window.TextDecoder() : null, readUTF8: function(i, n, s) {
      var c = l._bin._tdec;
      return c && n == 0 && s == i.length ? c.decode(i) : l._bin.readASCII(i, n, s);
    }, readBytes: function(i, n, s) {
      for (var c = [], f = 0; f < s; f++) c.push(i[n + f]);
      return c;
    }, readASCIIArray: function(i, n, s) {
      for (var c = [], f = 0; f < s; f++) c.push(String.fromCharCode(i[n + f]));
      return c;
    }, _view: function(i) {
      return i._dataView || (i._dataView = i.buffer ? new DataView(i.buffer, i.byteOffset, i.byteLength) : new DataView(new Uint8Array(i).buffer));
    } }, l._lctf = {}, l._lctf.parse = function(i, n, s, c, f) {
      var d = l._bin, v = {}, y = n;
      d.readFixed(i, n), n += 4;
      var g = d.readUshort(i, n);
      n += 2;
      var E = d.readUshort(i, n);
      n += 2;
      var _ = d.readUshort(i, n);
      return n += 2, v.scriptList = l._lctf.readScriptList(i, y + g), v.featureList = l._lctf.readFeatureList(i, y + E), v.lookupList = l._lctf.readLookupList(i, y + _, f), v;
    }, l._lctf.readLookupList = function(i, n, s) {
      var c = l._bin, f = n, d = [], v = c.readUshort(i, n);
      n += 2;
      for (var y = 0; y < v; y++) {
        var g = c.readUshort(i, n);
        n += 2;
        var E = l._lctf.readLookupTable(i, f + g, s);
        d.push(E);
      }
      return d;
    }, l._lctf.readLookupTable = function(i, n, s) {
      var c = l._bin, f = n, d = { tabs: [] };
      d.ltype = c.readUshort(i, n), n += 2, d.flag = c.readUshort(i, n), n += 2;
      var v = c.readUshort(i, n);
      n += 2;
      for (var y = d.ltype, g = 0; g < v; g++) {
        var E = c.readUshort(i, n);
        n += 2;
        var _ = s(i, y, f + E, d);
        d.tabs.push(_);
      }
      return d;
    }, l._lctf.numOfOnes = function(i) {
      for (var n = 0, s = 0; s < 32; s++) (i >>> s & 1) != 0 && n++;
      return n;
    }, l._lctf.readClassDef = function(i, n) {
      var s = l._bin, c = [], f = s.readUshort(i, n);
      if (n += 2, f == 1) {
        var d = s.readUshort(i, n);
        n += 2;
        var v = s.readUshort(i, n);
        n += 2;
        for (var y = 0; y < v; y++) c.push(d + y), c.push(d + y), c.push(s.readUshort(i, n)), n += 2;
      }
      if (f == 2) {
        var g = s.readUshort(i, n);
        for (n += 2, y = 0; y < g; y++) c.push(s.readUshort(i, n)), n += 2, c.push(s.readUshort(i, n)), n += 2, c.push(s.readUshort(i, n)), n += 2;
      }
      return c;
    }, l._lctf.getInterval = function(i, n) {
      for (var s = 0; s < i.length; s += 3) {
        var c = i[s], f = i[s + 1];
        if (i[s + 2], c <= n && n <= f) return s;
      }
      return -1;
    }, l._lctf.readCoverage = function(i, n) {
      var s = l._bin, c = {};
      c.fmt = s.readUshort(i, n), n += 2;
      var f = s.readUshort(i, n);
      return n += 2, c.fmt == 1 && (c.tab = s.readUshorts(i, n, f)), c.fmt == 2 && (c.tab = s.readUshorts(i, n, 3 * f)), c;
    }, l._lctf.coverageIndex = function(i, n) {
      var s = i.tab;
      if (i.fmt == 1) return s.indexOf(n);
      if (i.fmt == 2) {
        var c = l._lctf.getInterval(s, n);
        if (c != -1) return s[c + 2] + (n - s[c]);
      }
      return -1;
    }, l._lctf.readFeatureList = function(i, n) {
      var s = l._bin, c = n, f = [], d = s.readUshort(i, n);
      n += 2;
      for (var v = 0; v < d; v++) {
        var y = s.readASCII(i, n, 4);
        n += 4;
        var g = s.readUshort(i, n);
        n += 2;
        var E = l._lctf.readFeatureTable(i, c + g);
        E.tag = y.trim(), f.push(E);
      }
      return f;
    }, l._lctf.readFeatureTable = function(i, n) {
      var s = l._bin, c = n, f = {}, d = s.readUshort(i, n);
      n += 2, d > 0 && (f.featureParams = c + d);
      var v = s.readUshort(i, n);
      n += 2, f.tab = [];
      for (var y = 0; y < v; y++) f.tab.push(s.readUshort(i, n + 2 * y));
      return f;
    }, l._lctf.readScriptList = function(i, n) {
      var s = l._bin, c = n, f = {}, d = s.readUshort(i, n);
      n += 2;
      for (var v = 0; v < d; v++) {
        var y = s.readASCII(i, n, 4);
        n += 4;
        var g = s.readUshort(i, n);
        n += 2, f[y.trim()] = l._lctf.readScriptTable(i, c + g);
      }
      return f;
    }, l._lctf.readScriptTable = function(i, n) {
      var s = l._bin, c = n, f = {}, d = s.readUshort(i, n);
      n += 2, d > 0 && (f.default = l._lctf.readLangSysTable(i, c + d));
      var v = s.readUshort(i, n);
      n += 2;
      for (var y = 0; y < v; y++) {
        var g = s.readASCII(i, n, 4);
        n += 4;
        var E = s.readUshort(i, n);
        n += 2, f[g.trim()] = l._lctf.readLangSysTable(i, c + E);
      }
      return f;
    }, l._lctf.readLangSysTable = function(i, n) {
      var s = l._bin, c = {};
      s.readUshort(i, n), n += 2, c.reqFeature = s.readUshort(i, n), n += 2;
      var f = s.readUshort(i, n);
      return n += 2, c.features = s.readUshorts(i, n, f), c;
    }, l.CFF = {}, l.CFF.parse = function(i, n, s) {
      var c = l._bin;
      (i = new Uint8Array(i.buffer, n, s))[n = 0], i[++n], i[++n], i[++n], n++;
      var f = [];
      n = l.CFF.readIndex(i, n, f);
      for (var d = [], v = 0; v < f.length - 1; v++) d.push(c.readASCII(i, n + f[v], f[v + 1] - f[v]));
      n += f[f.length - 1];
      var y = [];
      n = l.CFF.readIndex(i, n, y);
      var g = [];
      for (v = 0; v < y.length - 1; v++) g.push(l.CFF.readDict(i, n + y[v], n + y[v + 1]));
      n += y[y.length - 1];
      var E = g[0], _ = [];
      n = l.CFF.readIndex(i, n, _);
      var D = [];
      for (v = 0; v < _.length - 1; v++) D.push(c.readASCII(i, n + _[v], _[v + 1] - _[v]));
      if (n += _[_.length - 1], l.CFF.readSubrs(i, n, E), E.CharStrings) {
        n = E.CharStrings, _ = [], n = l.CFF.readIndex(i, n, _);
        var C = [];
        for (v = 0; v < _.length - 1; v++) C.push(c.readBytes(i, n + _[v], _[v + 1] - _[v]));
        E.CharStrings = C;
      }
      if (E.ROS) {
        n = E.FDArray;
        var U = [];
        for (n = l.CFF.readIndex(i, n, U), E.FDArray = [], v = 0; v < U.length - 1; v++) {
          var b = l.CFF.readDict(i, n + U[v], n + U[v + 1]);
          l.CFF._readFDict(i, b, D), E.FDArray.push(b);
        }
        n += U[U.length - 1], n = E.FDSelect, E.FDSelect = [];
        var z = i[n];
        if (n++, z != 3) throw z;
        var R = c.readUshort(i, n);
        for (n += 2, v = 0; v < R + 1; v++) E.FDSelect.push(c.readUshort(i, n), i[n + 2]), n += 3;
      }
      return E.Encoding && (E.Encoding = l.CFF.readEncoding(i, E.Encoding, E.CharStrings.length)), E.charset && (E.charset = l.CFF.readCharset(i, E.charset, E.CharStrings.length)), l.CFF._readFDict(i, E, D), E;
    }, l.CFF._readFDict = function(i, n, s) {
      var c;
      for (var f in n.Private && (c = n.Private[1], n.Private = l.CFF.readDict(i, c, c + n.Private[0]), n.Private.Subrs && l.CFF.readSubrs(i, c + n.Private.Subrs, n.Private)), n) ["FamilyName", "FontName", "FullName", "Notice", "version", "Copyright"].indexOf(f) != -1 && (n[f] = s[n[f] - 426 + 35]);
    }, l.CFF.readSubrs = function(i, n, s) {
      var c = l._bin, f = [];
      n = l.CFF.readIndex(i, n, f);
      var d, v = f.length;
      d = v < 1240 ? 107 : v < 33900 ? 1131 : 32768, s.Bias = d, s.Subrs = [];
      for (var y = 0; y < f.length - 1; y++) s.Subrs.push(c.readBytes(i, n + f[y], f[y + 1] - f[y]));
    }, l.CFF.tableSE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0], l.CFF.glyphByUnicode = function(i, n) {
      for (var s = 0; s < i.charset.length; s++) if (i.charset[s] == n) return s;
      return -1;
    }, l.CFF.glyphBySE = function(i, n) {
      return n < 0 || n > 255 ? -1 : l.CFF.glyphByUnicode(i, l.CFF.tableSE[n]);
    }, l.CFF.readEncoding = function(i, n, s) {
      l._bin;
      var c = [".notdef"], f = i[n];
      if (n++, f != 0) throw "error: unknown encoding format: " + f;
      var d = i[n];
      n++;
      for (var v = 0; v < d; v++) c.push(i[n + v]);
      return c;
    }, l.CFF.readCharset = function(i, n, s) {
      var c = l._bin, f = [".notdef"], d = i[n];
      if (n++, d == 0) for (var v = 0; v < s; v++) {
        var y = c.readUshort(i, n);
        n += 2, f.push(y);
      }
      else {
        if (d != 1 && d != 2) throw "error: format: " + d;
        for (; f.length < s; ) {
          y = c.readUshort(i, n), n += 2;
          var g = 0;
          for (d == 1 ? (g = i[n], n++) : (g = c.readUshort(i, n), n += 2), v = 0; v <= g; v++) f.push(y), y++;
        }
      }
      return f;
    }, l.CFF.readIndex = function(i, n, s) {
      var c = l._bin, f = c.readUshort(i, n) + 1, d = i[n += 2];
      if (n++, d == 1) for (var v = 0; v < f; v++) s.push(i[n + v]);
      else if (d == 2) for (v = 0; v < f; v++) s.push(c.readUshort(i, n + 2 * v));
      else if (d == 3) for (v = 0; v < f; v++) s.push(16777215 & c.readUint(i, n + 3 * v - 1));
      else if (f != 1) throw "unsupported offset size: " + d + ", count: " + f;
      return (n += f * d) - 1;
    }, l.CFF.getCharString = function(i, n, s) {
      var c = l._bin, f = i[n], d = i[n + 1];
      i[n + 2], i[n + 3], i[n + 4];
      var v = 1, y = null, g = null;
      f <= 20 && (y = f, v = 1), f == 12 && (y = 100 * f + d, v = 2), 21 <= f && f <= 27 && (y = f, v = 1), f == 28 && (g = c.readShort(i, n + 1), v = 3), 29 <= f && f <= 31 && (y = f, v = 1), 32 <= f && f <= 246 && (g = f - 139, v = 1), 247 <= f && f <= 250 && (g = 256 * (f - 247) + d + 108, v = 2), 251 <= f && f <= 254 && (g = 256 * -(f - 251) - d - 108, v = 2), f == 255 && (g = c.readInt(i, n + 1) / 65535, v = 5), s.val = g ?? "o" + y, s.size = v;
    }, l.CFF.readCharString = function(i, n, s) {
      for (var c = n + s, f = l._bin, d = []; n < c; ) {
        var v = i[n], y = i[n + 1];
        i[n + 2], i[n + 3], i[n + 4];
        var g = 1, E = null, _ = null;
        v <= 20 && (E = v, g = 1), v == 12 && (E = 100 * v + y, g = 2), v != 19 && v != 20 || (E = v, g = 2), 21 <= v && v <= 27 && (E = v, g = 1), v == 28 && (_ = f.readShort(i, n + 1), g = 3), 29 <= v && v <= 31 && (E = v, g = 1), 32 <= v && v <= 246 && (_ = v - 139, g = 1), 247 <= v && v <= 250 && (_ = 256 * (v - 247) + y + 108, g = 2), 251 <= v && v <= 254 && (_ = 256 * -(v - 251) - y - 108, g = 2), v == 255 && (_ = f.readInt(i, n + 1) / 65535, g = 5), d.push(_ ?? "o" + E), n += g;
      }
      return d;
    }, l.CFF.readDict = function(i, n, s) {
      for (var c = l._bin, f = {}, d = []; n < s; ) {
        var v = i[n], y = i[n + 1];
        i[n + 2], i[n + 3], i[n + 4];
        var g = 1, E = null, _ = null;
        if (v == 28 && (_ = c.readShort(i, n + 1), g = 3), v == 29 && (_ = c.readInt(i, n + 1), g = 5), 32 <= v && v <= 246 && (_ = v - 139, g = 1), 247 <= v && v <= 250 && (_ = 256 * (v - 247) + y + 108, g = 2), 251 <= v && v <= 254 && (_ = 256 * -(v - 251) - y - 108, g = 2), v == 255) throw _ = c.readInt(i, n + 1) / 65535, g = 5, "unknown number";
        if (v == 30) {
          var D = [];
          for (g = 1; ; ) {
            var C = i[n + g];
            g++;
            var U = C >> 4, b = 15 & C;
            if (U != 15 && D.push(U), b != 15 && D.push(b), b == 15) break;
          }
          for (var z = "", R = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"], x = 0; x < D.length; x++) z += R[D[x]];
          _ = parseFloat(z);
        }
        v <= 21 && (E = ["version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX"][v], g = 1, v == 12 && (E = ["Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName"][y], g = 2)), E != null ? (f[E] = d.length == 1 ? d[0] : d, d = []) : d.push(_), n += g;
      }
      return f;
    }, l.cmap = {}, l.cmap.parse = function(i, n, s) {
      i = new Uint8Array(i.buffer, n, s), n = 0;
      var c = l._bin, f = {};
      c.readUshort(i, n), n += 2;
      var d = c.readUshort(i, n);
      n += 2;
      var v = [];
      f.tables = [];
      for (var y = 0; y < d; y++) {
        var g = c.readUshort(i, n);
        n += 2;
        var E = c.readUshort(i, n);
        n += 2;
        var _ = c.readUint(i, n);
        n += 4;
        var D = "p" + g + "e" + E, C = v.indexOf(_);
        if (C == -1) {
          var U;
          C = f.tables.length, v.push(_);
          var b = c.readUshort(i, _);
          b == 0 ? U = l.cmap.parse0(i, _) : b == 4 ? U = l.cmap.parse4(i, _) : b == 6 ? U = l.cmap.parse6(i, _) : b == 12 ? U = l.cmap.parse12(i, _) : console.debug("unknown format: " + b, g, E, _), f.tables.push(U);
        }
        if (f[D] != null) throw "multiple tables for one platform+encoding";
        f[D] = C;
      }
      return f;
    }, l.cmap.parse0 = function(i, n) {
      var s = l._bin, c = {};
      c.format = s.readUshort(i, n), n += 2;
      var f = s.readUshort(i, n);
      n += 2, s.readUshort(i, n), n += 2, c.map = [];
      for (var d = 0; d < f - 6; d++) c.map.push(i[n + d]);
      return c;
    }, l.cmap.parse4 = function(i, n) {
      var s = l._bin, c = n, f = {};
      f.format = s.readUshort(i, n), n += 2;
      var d = s.readUshort(i, n);
      n += 2, s.readUshort(i, n), n += 2;
      var v = s.readUshort(i, n);
      n += 2;
      var y = v / 2;
      f.searchRange = s.readUshort(i, n), n += 2, f.entrySelector = s.readUshort(i, n), n += 2, f.rangeShift = s.readUshort(i, n), n += 2, f.endCount = s.readUshorts(i, n, y), n += 2 * y, n += 2, f.startCount = s.readUshorts(i, n, y), n += 2 * y, f.idDelta = [];
      for (var g = 0; g < y; g++) f.idDelta.push(s.readShort(i, n)), n += 2;
      for (f.idRangeOffset = s.readUshorts(i, n, y), n += 2 * y, f.glyphIdArray = []; n < c + d; ) f.glyphIdArray.push(s.readUshort(i, n)), n += 2;
      return f;
    }, l.cmap.parse6 = function(i, n) {
      var s = l._bin, c = {};
      c.format = s.readUshort(i, n), n += 2, s.readUshort(i, n), n += 2, s.readUshort(i, n), n += 2, c.firstCode = s.readUshort(i, n), n += 2;
      var f = s.readUshort(i, n);
      n += 2, c.glyphIdArray = [];
      for (var d = 0; d < f; d++) c.glyphIdArray.push(s.readUshort(i, n)), n += 2;
      return c;
    }, l.cmap.parse12 = function(i, n) {
      var s = l._bin, c = {};
      c.format = s.readUshort(i, n), n += 2, n += 2, s.readUint(i, n), n += 4, s.readUint(i, n), n += 4;
      var f = s.readUint(i, n);
      n += 4, c.groups = [];
      for (var d = 0; d < f; d++) {
        var v = n + 12 * d, y = s.readUint(i, v + 0), g = s.readUint(i, v + 4), E = s.readUint(i, v + 8);
        c.groups.push([y, g, E]);
      }
      return c;
    }, l.glyf = {}, l.glyf.parse = function(i, n, s, c) {
      for (var f = [], d = 0; d < c.maxp.numGlyphs; d++) f.push(null);
      return f;
    }, l.glyf._parseGlyf = function(i, n) {
      var s = l._bin, c = i._data, f = l._tabOffset(c, "glyf", i._offset) + i.loca[n];
      if (i.loca[n] == i.loca[n + 1]) return null;
      var d = {};
      if (d.noc = s.readShort(c, f), f += 2, d.xMin = s.readShort(c, f), f += 2, d.yMin = s.readShort(c, f), f += 2, d.xMax = s.readShort(c, f), f += 2, d.yMax = s.readShort(c, f), f += 2, d.xMin >= d.xMax || d.yMin >= d.yMax) return null;
      if (d.noc > 0) {
        d.endPts = [];
        for (var v = 0; v < d.noc; v++) d.endPts.push(s.readUshort(c, f)), f += 2;
        var y = s.readUshort(c, f);
        if (f += 2, c.length - f < y) return null;
        d.instructions = s.readBytes(c, f, y), f += y;
        var g = d.endPts[d.noc - 1] + 1;
        for (d.flags = [], v = 0; v < g; v++) {
          var E = c[f];
          if (f++, d.flags.push(E), (8 & E) != 0) {
            var _ = c[f];
            f++;
            for (var D = 0; D < _; D++) d.flags.push(E), v++;
          }
        }
        for (d.xs = [], v = 0; v < g; v++) {
          var C = (2 & d.flags[v]) != 0, U = (16 & d.flags[v]) != 0;
          C ? (d.xs.push(U ? c[f] : -c[f]), f++) : U ? d.xs.push(0) : (d.xs.push(s.readShort(c, f)), f += 2);
        }
        for (d.ys = [], v = 0; v < g; v++)
          C = (4 & d.flags[v]) != 0, U = (32 & d.flags[v]) != 0, C ? (d.ys.push(U ? c[f] : -c[f]), f++) : U ? d.ys.push(0) : (d.ys.push(s.readShort(c, f)), f += 2);
        var b = 0, z = 0;
        for (v = 0; v < g; v++) b += d.xs[v], z += d.ys[v], d.xs[v] = b, d.ys[v] = z;
      } else {
        var R;
        d.parts = [];
        do {
          R = s.readUshort(c, f), f += 2;
          var x = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
          if (d.parts.push(x), x.glyphIndex = s.readUshort(c, f), f += 2, 1 & R) {
            var H = s.readShort(c, f);
            f += 2;
            var G = s.readShort(c, f);
            f += 2;
          } else
            H = s.readInt8(c, f), f++, G = s.readInt8(c, f), f++;
          2 & R ? (x.m.tx = H, x.m.ty = G) : (x.p1 = H, x.p2 = G), 8 & R ? (x.m.a = x.m.d = s.readF2dot14(c, f), f += 2) : 64 & R ? (x.m.a = s.readF2dot14(c, f), f += 2, x.m.d = s.readF2dot14(c, f), f += 2) : 128 & R && (x.m.a = s.readF2dot14(c, f), f += 2, x.m.b = s.readF2dot14(c, f), f += 2, x.m.c = s.readF2dot14(c, f), f += 2, x.m.d = s.readF2dot14(c, f), f += 2);
        } while (32 & R);
        if (256 & R) {
          var L = s.readUshort(c, f);
          for (f += 2, d.instr = [], v = 0; v < L; v++) d.instr.push(c[f]), f++;
        }
      }
      return d;
    }, l.GDEF = {}, l.GDEF.parse = function(i, n, s, c) {
      var f = n;
      n += 4;
      var d = l._bin.readUshort(i, n);
      return { glyphClassDef: d === 0 ? null : l._lctf.readClassDef(i, f + d) };
    }, l.GPOS = {}, l.GPOS.parse = function(i, n, s, c) {
      return l._lctf.parse(i, n, s, c, l.GPOS.subt);
    }, l.GPOS.subt = function(i, n, s, c) {
      var f = l._bin, d = s, v = {};
      if (v.fmt = f.readUshort(i, s), s += 2, n == 1 || n == 2 || n == 3 || n == 7 || n == 8 && v.fmt <= 2) {
        var y = f.readUshort(i, s);
        s += 2, v.coverage = l._lctf.readCoverage(i, y + d);
      }
      if (n == 1 && v.fmt == 1) {
        var g = f.readUshort(i, s);
        s += 2, g != 0 && (v.pos = l.GPOS.readValueRecord(i, s, g));
      } else if (n == 2 && v.fmt >= 1 && v.fmt <= 2) {
        g = f.readUshort(i, s), s += 2;
        var E = f.readUshort(i, s);
        s += 2;
        var _ = l._lctf.numOfOnes(g), D = l._lctf.numOfOnes(E);
        if (v.fmt == 1) {
          v.pairsets = [];
          var C = f.readUshort(i, s);
          s += 2;
          for (var U = 0; U < C; U++) {
            var b = d + f.readUshort(i, s);
            s += 2;
            var z = f.readUshort(i, b);
            b += 2;
            for (var R = [], x = 0; x < z; x++) {
              var H = f.readUshort(i, b);
              b += 2, g != 0 && (O = l.GPOS.readValueRecord(i, b, g), b += 2 * _), E != 0 && (X = l.GPOS.readValueRecord(i, b, E), b += 2 * D), R.push({ gid2: H, val1: O, val2: X });
            }
            v.pairsets.push(R);
          }
        }
        if (v.fmt == 2) {
          var G = f.readUshort(i, s);
          s += 2;
          var L = f.readUshort(i, s);
          s += 2;
          var W = f.readUshort(i, s);
          s += 2;
          var q = f.readUshort(i, s);
          for (s += 2, v.classDef1 = l._lctf.readClassDef(i, d + G), v.classDef2 = l._lctf.readClassDef(i, d + L), v.matrix = [], U = 0; U < W; U++) {
            var ae = [];
            for (x = 0; x < q; x++) {
              var O = null, X = null;
              g != 0 && (O = l.GPOS.readValueRecord(i, s, g), s += 2 * _), E != 0 && (X = l.GPOS.readValueRecord(i, s, E), s += 2 * D), ae.push({ val1: O, val2: X });
            }
            v.matrix.push(ae);
          }
        }
      } else if (n == 4 && v.fmt == 1) v.markCoverage = l._lctf.readCoverage(i, f.readUshort(i, s) + d), v.baseCoverage = l._lctf.readCoverage(i, f.readUshort(i, s + 2) + d), v.markClassCount = f.readUshort(i, s + 4), v.markArray = l.GPOS.readMarkArray(i, f.readUshort(i, s + 6) + d), v.baseArray = l.GPOS.readBaseArray(i, f.readUshort(i, s + 8) + d, v.markClassCount);
      else if (n == 6 && v.fmt == 1) v.mark1Coverage = l._lctf.readCoverage(i, f.readUshort(i, s) + d), v.mark2Coverage = l._lctf.readCoverage(i, f.readUshort(i, s + 2) + d), v.markClassCount = f.readUshort(i, s + 4), v.mark1Array = l.GPOS.readMarkArray(i, f.readUshort(i, s + 6) + d), v.mark2Array = l.GPOS.readBaseArray(i, f.readUshort(i, s + 8) + d, v.markClassCount);
      else {
        if (n == 9 && v.fmt == 1) {
          var Y = f.readUshort(i, s);
          s += 2;
          var le = f.readUint(i, s);
          if (s += 4, c.ltype == 9) c.ltype = Y;
          else if (c.ltype != Y) throw "invalid extension substitution";
          return l.GPOS.subt(i, c.ltype, d + le);
        }
        console.debug("unsupported GPOS table LookupType", n, "format", v.fmt);
      }
      return v;
    }, l.GPOS.readValueRecord = function(i, n, s) {
      var c = l._bin, f = [];
      return f.push(1 & s ? c.readShort(i, n) : 0), n += 1 & s ? 2 : 0, f.push(2 & s ? c.readShort(i, n) : 0), n += 2 & s ? 2 : 0, f.push(4 & s ? c.readShort(i, n) : 0), n += 4 & s ? 2 : 0, f.push(8 & s ? c.readShort(i, n) : 0), n += 8 & s ? 2 : 0, f;
    }, l.GPOS.readBaseArray = function(i, n, s) {
      var c = l._bin, f = [], d = n, v = c.readUshort(i, n);
      n += 2;
      for (var y = 0; y < v; y++) {
        for (var g = [], E = 0; E < s; E++) g.push(l.GPOS.readAnchorRecord(i, d + c.readUshort(i, n))), n += 2;
        f.push(g);
      }
      return f;
    }, l.GPOS.readMarkArray = function(i, n) {
      var s = l._bin, c = [], f = n, d = s.readUshort(i, n);
      n += 2;
      for (var v = 0; v < d; v++) {
        var y = l.GPOS.readAnchorRecord(i, s.readUshort(i, n + 2) + f);
        y.markClass = s.readUshort(i, n), c.push(y), n += 4;
      }
      return c;
    }, l.GPOS.readAnchorRecord = function(i, n) {
      var s = l._bin, c = {};
      return c.fmt = s.readUshort(i, n), c.x = s.readShort(i, n + 2), c.y = s.readShort(i, n + 4), c;
    }, l.GSUB = {}, l.GSUB.parse = function(i, n, s, c) {
      return l._lctf.parse(i, n, s, c, l.GSUB.subt);
    }, l.GSUB.subt = function(i, n, s, c) {
      var f = l._bin, d = s, v = {};
      if (v.fmt = f.readUshort(i, s), s += 2, n != 1 && n != 2 && n != 4 && n != 5 && n != 6) return null;
      if (n == 1 || n == 2 || n == 4 || n == 5 && v.fmt <= 2 || n == 6 && v.fmt <= 2) {
        var y = f.readUshort(i, s);
        s += 2, v.coverage = l._lctf.readCoverage(i, d + y);
      }
      if (n == 1 && v.fmt >= 1 && v.fmt <= 2) {
        if (v.fmt == 1) v.delta = f.readShort(i, s), s += 2;
        else if (v.fmt == 2) {
          var g = f.readUshort(i, s);
          s += 2, v.newg = f.readUshorts(i, s, g), s += 2 * v.newg.length;
        }
      } else if (n == 2 && v.fmt == 1) {
        g = f.readUshort(i, s), s += 2, v.seqs = [];
        for (var E = 0; E < g; E++) {
          var _ = f.readUshort(i, s) + d;
          s += 2;
          var D = f.readUshort(i, _);
          v.seqs.push(f.readUshorts(i, _ + 2, D));
        }
      } else if (n == 4)
        for (v.vals = [], g = f.readUshort(i, s), s += 2, E = 0; E < g; E++) {
          var C = f.readUshort(i, s);
          s += 2, v.vals.push(l.GSUB.readLigatureSet(i, d + C));
        }
      else if (n == 5 && v.fmt == 2) {
        if (v.fmt == 2) {
          var U = f.readUshort(i, s);
          s += 2, v.cDef = l._lctf.readClassDef(i, d + U), v.scset = [];
          var b = f.readUshort(i, s);
          for (s += 2, E = 0; E < b; E++) {
            var z = f.readUshort(i, s);
            s += 2, v.scset.push(z == 0 ? null : l.GSUB.readSubClassSet(i, d + z));
          }
        }
      } else if (n == 6 && v.fmt == 3) {
        if (v.fmt == 3) {
          for (E = 0; E < 3; E++) {
            g = f.readUshort(i, s), s += 2;
            for (var R = [], x = 0; x < g; x++) R.push(l._lctf.readCoverage(i, d + f.readUshort(i, s + 2 * x)));
            s += 2 * g, E == 0 && (v.backCvg = R), E == 1 && (v.inptCvg = R), E == 2 && (v.ahedCvg = R);
          }
          g = f.readUshort(i, s), s += 2, v.lookupRec = l.GSUB.readSubstLookupRecords(i, s, g);
        }
      } else {
        if (n == 7 && v.fmt == 1) {
          var H = f.readUshort(i, s);
          s += 2;
          var G = f.readUint(i, s);
          if (s += 4, c.ltype == 9) c.ltype = H;
          else if (c.ltype != H) throw "invalid extension substitution";
          return l.GSUB.subt(i, c.ltype, d + G);
        }
        console.debug("unsupported GSUB table LookupType", n, "format", v.fmt);
      }
      return v;
    }, l.GSUB.readSubClassSet = function(i, n) {
      var s = l._bin.readUshort, c = n, f = [], d = s(i, n);
      n += 2;
      for (var v = 0; v < d; v++) {
        var y = s(i, n);
        n += 2, f.push(l.GSUB.readSubClassRule(i, c + y));
      }
      return f;
    }, l.GSUB.readSubClassRule = function(i, n) {
      var s = l._bin.readUshort, c = {}, f = s(i, n), d = s(i, n += 2);
      n += 2, c.input = [];
      for (var v = 0; v < f - 1; v++) c.input.push(s(i, n)), n += 2;
      return c.substLookupRecords = l.GSUB.readSubstLookupRecords(i, n, d), c;
    }, l.GSUB.readSubstLookupRecords = function(i, n, s) {
      for (var c = l._bin.readUshort, f = [], d = 0; d < s; d++) f.push(c(i, n), c(i, n + 2)), n += 4;
      return f;
    }, l.GSUB.readChainSubClassSet = function(i, n) {
      var s = l._bin, c = n, f = [], d = s.readUshort(i, n);
      n += 2;
      for (var v = 0; v < d; v++) {
        var y = s.readUshort(i, n);
        n += 2, f.push(l.GSUB.readChainSubClassRule(i, c + y));
      }
      return f;
    }, l.GSUB.readChainSubClassRule = function(i, n) {
      for (var s = l._bin, c = {}, f = ["backtrack", "input", "lookahead"], d = 0; d < f.length; d++) {
        var v = s.readUshort(i, n);
        n += 2, d == 1 && v--, c[f[d]] = s.readUshorts(i, n, v), n += 2 * c[f[d]].length;
      }
      return v = s.readUshort(i, n), n += 2, c.subst = s.readUshorts(i, n, 2 * v), n += 2 * c.subst.length, c;
    }, l.GSUB.readLigatureSet = function(i, n) {
      var s = l._bin, c = n, f = [], d = s.readUshort(i, n);
      n += 2;
      for (var v = 0; v < d; v++) {
        var y = s.readUshort(i, n);
        n += 2, f.push(l.GSUB.readLigature(i, c + y));
      }
      return f;
    }, l.GSUB.readLigature = function(i, n) {
      var s = l._bin, c = { chain: [] };
      c.nglyph = s.readUshort(i, n), n += 2;
      var f = s.readUshort(i, n);
      n += 2;
      for (var d = 0; d < f - 1; d++) c.chain.push(s.readUshort(i, n)), n += 2;
      return c;
    }, l.head = {}, l.head.parse = function(i, n, s) {
      var c = l._bin, f = {};
      return c.readFixed(i, n), n += 4, f.fontRevision = c.readFixed(i, n), n += 4, c.readUint(i, n), n += 4, c.readUint(i, n), n += 4, f.flags = c.readUshort(i, n), n += 2, f.unitsPerEm = c.readUshort(i, n), n += 2, f.created = c.readUint64(i, n), n += 8, f.modified = c.readUint64(i, n), n += 8, f.xMin = c.readShort(i, n), n += 2, f.yMin = c.readShort(i, n), n += 2, f.xMax = c.readShort(i, n), n += 2, f.yMax = c.readShort(i, n), n += 2, f.macStyle = c.readUshort(i, n), n += 2, f.lowestRecPPEM = c.readUshort(i, n), n += 2, f.fontDirectionHint = c.readShort(i, n), n += 2, f.indexToLocFormat = c.readShort(i, n), n += 2, f.glyphDataFormat = c.readShort(i, n), n += 2, f;
    }, l.hhea = {}, l.hhea.parse = function(i, n, s) {
      var c = l._bin, f = {};
      return c.readFixed(i, n), n += 4, f.ascender = c.readShort(i, n), n += 2, f.descender = c.readShort(i, n), n += 2, f.lineGap = c.readShort(i, n), n += 2, f.advanceWidthMax = c.readUshort(i, n), n += 2, f.minLeftSideBearing = c.readShort(i, n), n += 2, f.minRightSideBearing = c.readShort(i, n), n += 2, f.xMaxExtent = c.readShort(i, n), n += 2, f.caretSlopeRise = c.readShort(i, n), n += 2, f.caretSlopeRun = c.readShort(i, n), n += 2, f.caretOffset = c.readShort(i, n), n += 2, n += 8, f.metricDataFormat = c.readShort(i, n), n += 2, f.numberOfHMetrics = c.readUshort(i, n), n += 2, f;
    }, l.hmtx = {}, l.hmtx.parse = function(i, n, s, c) {
      for (var f = l._bin, d = { aWidth: [], lsBearing: [] }, v = 0, y = 0, g = 0; g < c.maxp.numGlyphs; g++) g < c.hhea.numberOfHMetrics && (v = f.readUshort(i, n), n += 2, y = f.readShort(i, n), n += 2), d.aWidth.push(v), d.lsBearing.push(y);
      return d;
    }, l.kern = {}, l.kern.parse = function(i, n, s, c) {
      var f = l._bin, d = f.readUshort(i, n);
      if (n += 2, d == 1) return l.kern.parseV1(i, n - 2, s, c);
      var v = f.readUshort(i, n);
      n += 2;
      for (var y = { glyph1: [], rval: [] }, g = 0; g < v; g++) {
        n += 2, s = f.readUshort(i, n), n += 2;
        var E = f.readUshort(i, n);
        n += 2;
        var _ = E >>> 8;
        if ((_ &= 15) != 0) throw "unknown kern table format: " + _;
        n = l.kern.readFormat0(i, n, y);
      }
      return y;
    }, l.kern.parseV1 = function(i, n, s, c) {
      var f = l._bin;
      f.readFixed(i, n), n += 4;
      var d = f.readUint(i, n);
      n += 4;
      for (var v = { glyph1: [], rval: [] }, y = 0; y < d; y++) {
        f.readUint(i, n), n += 4;
        var g = f.readUshort(i, n);
        n += 2, f.readUshort(i, n), n += 2;
        var E = g >>> 8;
        if ((E &= 15) != 0) throw "unknown kern table format: " + E;
        n = l.kern.readFormat0(i, n, v);
      }
      return v;
    }, l.kern.readFormat0 = function(i, n, s) {
      var c = l._bin, f = -1, d = c.readUshort(i, n);
      n += 2, c.readUshort(i, n), n += 2, c.readUshort(i, n), n += 2, c.readUshort(i, n), n += 2;
      for (var v = 0; v < d; v++) {
        var y = c.readUshort(i, n);
        n += 2;
        var g = c.readUshort(i, n);
        n += 2;
        var E = c.readShort(i, n);
        n += 2, y != f && (s.glyph1.push(y), s.rval.push({ glyph2: [], vals: [] }));
        var _ = s.rval[s.rval.length - 1];
        _.glyph2.push(g), _.vals.push(E), f = y;
      }
      return n;
    }, l.loca = {}, l.loca.parse = function(i, n, s, c) {
      var f = l._bin, d = [], v = c.head.indexToLocFormat, y = c.maxp.numGlyphs + 1;
      if (v == 0) for (var g = 0; g < y; g++) d.push(f.readUshort(i, n + (g << 1)) << 1);
      if (v == 1) for (g = 0; g < y; g++) d.push(f.readUint(i, n + (g << 2)));
      return d;
    }, l.maxp = {}, l.maxp.parse = function(i, n, s) {
      var c = l._bin, f = {}, d = c.readUint(i, n);
      return n += 4, f.numGlyphs = c.readUshort(i, n), n += 2, d == 65536 && (f.maxPoints = c.readUshort(i, n), n += 2, f.maxContours = c.readUshort(i, n), n += 2, f.maxCompositePoints = c.readUshort(i, n), n += 2, f.maxCompositeContours = c.readUshort(i, n), n += 2, f.maxZones = c.readUshort(i, n), n += 2, f.maxTwilightPoints = c.readUshort(i, n), n += 2, f.maxStorage = c.readUshort(i, n), n += 2, f.maxFunctionDefs = c.readUshort(i, n), n += 2, f.maxInstructionDefs = c.readUshort(i, n), n += 2, f.maxStackElements = c.readUshort(i, n), n += 2, f.maxSizeOfInstructions = c.readUshort(i, n), n += 2, f.maxComponentElements = c.readUshort(i, n), n += 2, f.maxComponentDepth = c.readUshort(i, n), n += 2), f;
    }, l.name = {}, l.name.parse = function(i, n, s) {
      var c = l._bin, f = {};
      c.readUshort(i, n), n += 2;
      var d = c.readUshort(i, n);
      n += 2, c.readUshort(i, n);
      for (var v, y = ["copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette"], g = n += 2, E = 0; E < d; E++) {
        var _ = c.readUshort(i, n);
        n += 2;
        var D = c.readUshort(i, n);
        n += 2;
        var C = c.readUshort(i, n);
        n += 2;
        var U = c.readUshort(i, n);
        n += 2;
        var b = c.readUshort(i, n);
        n += 2;
        var z = c.readUshort(i, n);
        n += 2;
        var R, x = y[U], H = g + 12 * d + z;
        if (_ == 0) R = c.readUnicode(i, H, b / 2);
        else if (_ == 3 && D == 0) R = c.readUnicode(i, H, b / 2);
        else if (D == 0) R = c.readASCII(i, H, b);
        else if (D == 1) R = c.readUnicode(i, H, b / 2);
        else if (D == 3) R = c.readUnicode(i, H, b / 2);
        else {
          if (_ != 1) throw "unknown encoding " + D + ", platformID: " + _;
          R = c.readASCII(i, H, b), console.debug("reading unknown MAC encoding " + D + " as ASCII");
        }
        var G = "p" + _ + "," + C.toString(16);
        f[G] == null && (f[G] = {}), f[G][x !== void 0 ? x : U] = R, f[G]._lang = C;
      }
      for (var L in f) if (f[L].postScriptName != null && f[L]._lang == 1033) return f[L];
      for (var L in f) if (f[L].postScriptName != null && f[L]._lang == 0) return f[L];
      for (var L in f) if (f[L].postScriptName != null && f[L]._lang == 3084) return f[L];
      for (var L in f) if (f[L].postScriptName != null) return f[L];
      for (var L in f) {
        v = L;
        break;
      }
      return console.debug("returning name table with languageID " + f[v]._lang), f[v];
    }, l["OS/2"] = {}, l["OS/2"].parse = function(i, n, s) {
      var c = l._bin.readUshort(i, n);
      n += 2;
      var f = {};
      if (c == 0) l["OS/2"].version0(i, n, f);
      else if (c == 1) l["OS/2"].version1(i, n, f);
      else if (c == 2 || c == 3 || c == 4) l["OS/2"].version2(i, n, f);
      else {
        if (c != 5) throw "unknown OS/2 table version: " + c;
        l["OS/2"].version5(i, n, f);
      }
      return f;
    }, l["OS/2"].version0 = function(i, n, s) {
      var c = l._bin;
      return s.xAvgCharWidth = c.readShort(i, n), n += 2, s.usWeightClass = c.readUshort(i, n), n += 2, s.usWidthClass = c.readUshort(i, n), n += 2, s.fsType = c.readUshort(i, n), n += 2, s.ySubscriptXSize = c.readShort(i, n), n += 2, s.ySubscriptYSize = c.readShort(i, n), n += 2, s.ySubscriptXOffset = c.readShort(i, n), n += 2, s.ySubscriptYOffset = c.readShort(i, n), n += 2, s.ySuperscriptXSize = c.readShort(i, n), n += 2, s.ySuperscriptYSize = c.readShort(i, n), n += 2, s.ySuperscriptXOffset = c.readShort(i, n), n += 2, s.ySuperscriptYOffset = c.readShort(i, n), n += 2, s.yStrikeoutSize = c.readShort(i, n), n += 2, s.yStrikeoutPosition = c.readShort(i, n), n += 2, s.sFamilyClass = c.readShort(i, n), n += 2, s.panose = c.readBytes(i, n, 10), n += 10, s.ulUnicodeRange1 = c.readUint(i, n), n += 4, s.ulUnicodeRange2 = c.readUint(i, n), n += 4, s.ulUnicodeRange3 = c.readUint(i, n), n += 4, s.ulUnicodeRange4 = c.readUint(i, n), n += 4, s.achVendID = [c.readInt8(i, n), c.readInt8(i, n + 1), c.readInt8(i, n + 2), c.readInt8(i, n + 3)], n += 4, s.fsSelection = c.readUshort(i, n), n += 2, s.usFirstCharIndex = c.readUshort(i, n), n += 2, s.usLastCharIndex = c.readUshort(i, n), n += 2, s.sTypoAscender = c.readShort(i, n), n += 2, s.sTypoDescender = c.readShort(i, n), n += 2, s.sTypoLineGap = c.readShort(i, n), n += 2, s.usWinAscent = c.readUshort(i, n), n += 2, s.usWinDescent = c.readUshort(i, n), n += 2;
    }, l["OS/2"].version1 = function(i, n, s) {
      var c = l._bin;
      return n = l["OS/2"].version0(i, n, s), s.ulCodePageRange1 = c.readUint(i, n), n += 4, s.ulCodePageRange2 = c.readUint(i, n), n += 4;
    }, l["OS/2"].version2 = function(i, n, s) {
      var c = l._bin;
      return n = l["OS/2"].version1(i, n, s), s.sxHeight = c.readShort(i, n), n += 2, s.sCapHeight = c.readShort(i, n), n += 2, s.usDefault = c.readUshort(i, n), n += 2, s.usBreak = c.readUshort(i, n), n += 2, s.usMaxContext = c.readUshort(i, n), n += 2;
    }, l["OS/2"].version5 = function(i, n, s) {
      var c = l._bin;
      return n = l["OS/2"].version2(i, n, s), s.usLowerOpticalPointSize = c.readUshort(i, n), n += 2, s.usUpperOpticalPointSize = c.readUshort(i, n), n += 2;
    }, l.post = {}, l.post.parse = function(i, n, s) {
      var c = l._bin, f = {};
      return f.version = c.readFixed(i, n), n += 4, f.italicAngle = c.readFixed(i, n), n += 4, f.underlinePosition = c.readShort(i, n), n += 2, f.underlineThickness = c.readShort(i, n), n += 2, f;
    }, l == null && (l = {}), l.U == null && (l.U = {}), l.U.codeToGlyph = function(i, n) {
      var s = i.cmap, c = -1;
      if (s.p0e4 != null ? c = s.p0e4 : s.p3e1 != null ? c = s.p3e1 : s.p1e0 != null ? c = s.p1e0 : s.p0e3 != null && (c = s.p0e3), c == -1) throw "no familiar platform and encoding!";
      var f = s.tables[c];
      if (f.format == 0) return n >= f.map.length ? 0 : f.map[n];
      if (f.format == 4) {
        for (var d = -1, v = 0; v < f.endCount.length; v++) if (n <= f.endCount[v]) {
          d = v;
          break;
        }
        return d == -1 || f.startCount[d] > n ? 0 : 65535 & (f.idRangeOffset[d] != 0 ? f.glyphIdArray[n - f.startCount[d] + (f.idRangeOffset[d] >> 1) - (f.idRangeOffset.length - d)] : n + f.idDelta[d]);
      }
      if (f.format == 12) {
        if (n > f.groups[f.groups.length - 1][1]) return 0;
        for (v = 0; v < f.groups.length; v++) {
          var y = f.groups[v];
          if (y[0] <= n && n <= y[1]) return y[2] + (n - y[0]);
        }
        return 0;
      }
      throw "unknown cmap table format " + f.format;
    }, l.U.glyphToPath = function(i, n) {
      var s = { cmds: [], crds: [] };
      if (i.SVG && i.SVG.entries[n]) {
        var c = i.SVG.entries[n];
        return c == null ? s : (typeof c == "string" && (c = l.SVG.toPath(c), i.SVG.entries[n] = c), c);
      }
      if (i.CFF) {
        var f = { x: 0, y: 0, stack: [], nStems: 0, haveWidth: !1, width: i.CFF.Private ? i.CFF.Private.defaultWidthX : 0, open: !1 }, d = i.CFF, v = i.CFF.Private;
        if (d.ROS) {
          for (var y = 0; d.FDSelect[y + 2] <= n; ) y += 2;
          v = d.FDArray[d.FDSelect[y + 1]].Private;
        }
        l.U._drawCFF(i.CFF.CharStrings[n], f, d, v, s);
      } else i.glyf && l.U._drawGlyf(n, i, s);
      return s;
    }, l.U._drawGlyf = function(i, n, s) {
      var c = n.glyf[i];
      c == null && (c = n.glyf[i] = l.glyf._parseGlyf(n, i)), c != null && (c.noc > -1 ? l.U._simpleGlyph(c, s) : l.U._compoGlyph(c, n, s));
    }, l.U._simpleGlyph = function(i, n) {
      for (var s = 0; s < i.noc; s++) {
        for (var c = s == 0 ? 0 : i.endPts[s - 1] + 1, f = i.endPts[s], d = c; d <= f; d++) {
          var v = d == c ? f : d - 1, y = d == f ? c : d + 1, g = 1 & i.flags[d], E = 1 & i.flags[v], _ = 1 & i.flags[y], D = i.xs[d], C = i.ys[d];
          if (d == c) if (g) {
            if (!E) {
              l.U.P.moveTo(n, D, C);
              continue;
            }
            l.U.P.moveTo(n, i.xs[v], i.ys[v]);
          } else E ? l.U.P.moveTo(n, i.xs[v], i.ys[v]) : l.U.P.moveTo(n, (i.xs[v] + D) / 2, (i.ys[v] + C) / 2);
          g ? E && l.U.P.lineTo(n, D, C) : _ ? l.U.P.qcurveTo(n, D, C, i.xs[y], i.ys[y]) : l.U.P.qcurveTo(n, D, C, (D + i.xs[y]) / 2, (C + i.ys[y]) / 2);
        }
        l.U.P.closePath(n);
      }
    }, l.U._compoGlyph = function(i, n, s) {
      for (var c = 0; c < i.parts.length; c++) {
        var f = { cmds: [], crds: [] }, d = i.parts[c];
        l.U._drawGlyf(d.glyphIndex, n, f);
        for (var v = d.m, y = 0; y < f.crds.length; y += 2) {
          var g = f.crds[y], E = f.crds[y + 1];
          s.crds.push(g * v.a + E * v.b + v.tx), s.crds.push(g * v.c + E * v.d + v.ty);
        }
        for (y = 0; y < f.cmds.length; y++) s.cmds.push(f.cmds[y]);
      }
    }, l.U._getGlyphClass = function(i, n) {
      var s = l._lctf.getInterval(n, i);
      return s == -1 ? 0 : n[s + 2];
    }, l.U._applySubs = function(i, n, s, c) {
      for (var f = i.length - n - 1, d = 0; d < s.tabs.length; d++) if (s.tabs[d] != null) {
        var v, y = s.tabs[d];
        if (!y.coverage || (v = l._lctf.coverageIndex(y.coverage, i[n])) != -1) {
          if (s.ltype == 1) i[n], y.fmt == 1 ? i[n] = i[n] + y.delta : i[n] = y.newg[v];
          else if (s.ltype == 4) for (var g = y.vals[v], E = 0; E < g.length; E++) {
            var _ = g[E], D = _.chain.length;
            if (!(D > f)) {
              for (var C = !0, U = 0, b = 0; b < D; b++) {
                for (; i[n + U + (1 + b)] == -1; ) U++;
                _.chain[b] != i[n + U + (1 + b)] && (C = !1);
              }
              if (C) {
                for (i[n] = _.nglyph, b = 0; b < D + U; b++) i[n + b + 1] = -1;
                break;
              }
            }
          }
          else if (s.ltype == 5 && y.fmt == 2) for (var z = l._lctf.getInterval(y.cDef, i[n]), R = y.cDef[z + 2], x = y.scset[R], H = 0; H < x.length; H++) {
            var G = x[H], L = G.input;
            if (!(L.length > f)) {
              for (C = !0, b = 0; b < L.length; b++) {
                var W = l._lctf.getInterval(y.cDef, i[n + 1 + b]);
                if (z == -1 && y.cDef[W + 2] != L[b]) {
                  C = !1;
                  break;
                }
              }
              if (C) {
                var q = G.substLookupRecords;
                for (E = 0; E < q.length; E += 2) q[E], q[E + 1];
              }
            }
          }
          else if (s.ltype == 6 && y.fmt == 3) {
            if (!l.U._glsCovered(i, y.backCvg, n - y.backCvg.length) || !l.U._glsCovered(i, y.inptCvg, n) || !l.U._glsCovered(i, y.ahedCvg, n + y.inptCvg.length)) continue;
            var ae = y.lookupRec;
            for (H = 0; H < ae.length; H += 2) {
              z = ae[H];
              var O = c[ae[H + 1]];
              l.U._applySubs(i, n + z, O, c);
            }
          }
        }
      }
    }, l.U._glsCovered = function(i, n, s) {
      for (var c = 0; c < n.length; c++)
        if (l._lctf.coverageIndex(n[c], i[s + c]) == -1) return !1;
      return !0;
    }, l.U.glyphsToPath = function(i, n, s) {
      for (var c = { cmds: [], crds: [] }, f = 0, d = 0; d < n.length; d++) {
        var v = n[d];
        if (v != -1) {
          for (var y = d < n.length - 1 && n[d + 1] != -1 ? n[d + 1] : 0, g = l.U.glyphToPath(i, v), E = 0; E < g.crds.length; E += 2) c.crds.push(g.crds[E] + f), c.crds.push(g.crds[E + 1]);
          for (s && c.cmds.push(s), E = 0; E < g.cmds.length; E++) c.cmds.push(g.cmds[E]);
          s && c.cmds.push("X"), f += i.hmtx.aWidth[v], d < n.length - 1 && (f += l.U.getPairAdjustment(i, v, y));
        }
      }
      return c;
    }, l.U.P = {}, l.U.P.moveTo = function(i, n, s) {
      i.cmds.push("M"), i.crds.push(n, s);
    }, l.U.P.lineTo = function(i, n, s) {
      i.cmds.push("L"), i.crds.push(n, s);
    }, l.U.P.curveTo = function(i, n, s, c, f, d, v) {
      i.cmds.push("C"), i.crds.push(n, s, c, f, d, v);
    }, l.U.P.qcurveTo = function(i, n, s, c, f) {
      i.cmds.push("Q"), i.crds.push(n, s, c, f);
    }, l.U.P.closePath = function(i) {
      i.cmds.push("Z");
    }, l.U._drawCFF = function(i, n, s, c, f) {
      for (var d = n.stack, v = n.nStems, y = n.haveWidth, g = n.width, E = n.open, _ = 0, D = n.x, C = n.y, U = 0, b = 0, z = 0, R = 0, x = 0, H = 0, G = 0, L = 0, W = 0, q = 0, ae = { val: 0, size: 0 }; _ < i.length; ) {
        l.CFF.getCharString(i, _, ae);
        var O = ae.val;
        if (_ += ae.size, O == "o1" || O == "o18") d.length % 2 != 0 && !y && (g = d.shift() + c.nominalWidthX), v += d.length >> 1, d.length = 0, y = !0;
        else if (O == "o3" || O == "o23")
          d.length % 2 != 0 && !y && (g = d.shift() + c.nominalWidthX), v += d.length >> 1, d.length = 0, y = !0;
        else if (O == "o4") d.length > 1 && !y && (g = d.shift() + c.nominalWidthX, y = !0), E && l.U.P.closePath(f), C += d.pop(), l.U.P.moveTo(f, D, C), E = !0;
        else if (O == "o5") for (; d.length > 0; ) D += d.shift(), C += d.shift(), l.U.P.lineTo(f, D, C);
        else if (O == "o6" || O == "o7") for (var X = d.length, Y = O == "o6", le = 0; le < X; le++) {
          var j = d.shift();
          Y ? D += j : C += j, Y = !Y, l.U.P.lineTo(f, D, C);
        }
        else if (O == "o8" || O == "o24") {
          X = d.length;
          for (var P = 0; P + 6 <= X; ) U = D + d.shift(), b = C + d.shift(), z = U + d.shift(), R = b + d.shift(), D = z + d.shift(), C = R + d.shift(), l.U.P.curveTo(f, U, b, z, R, D, C), P += 6;
          O == "o24" && (D += d.shift(), C += d.shift(), l.U.P.lineTo(f, D, C));
        } else {
          if (O == "o11") break;
          if (O == "o1234" || O == "o1235" || O == "o1236" || O == "o1237") O == "o1234" && (b = C, z = (U = D + d.shift()) + d.shift(), q = R = b + d.shift(), H = R, L = C, D = (G = (x = (W = z + d.shift()) + d.shift()) + d.shift()) + d.shift(), l.U.P.curveTo(f, U, b, z, R, W, q), l.U.P.curveTo(f, x, H, G, L, D, C)), O == "o1235" && (U = D + d.shift(), b = C + d.shift(), z = U + d.shift(), R = b + d.shift(), W = z + d.shift(), q = R + d.shift(), x = W + d.shift(), H = q + d.shift(), G = x + d.shift(), L = H + d.shift(), D = G + d.shift(), C = L + d.shift(), d.shift(), l.U.P.curveTo(f, U, b, z, R, W, q), l.U.P.curveTo(f, x, H, G, L, D, C)), O == "o1236" && (U = D + d.shift(), b = C + d.shift(), z = U + d.shift(), q = R = b + d.shift(), H = R, G = (x = (W = z + d.shift()) + d.shift()) + d.shift(), L = H + d.shift(), D = G + d.shift(), l.U.P.curveTo(f, U, b, z, R, W, q), l.U.P.curveTo(f, x, H, G, L, D, C)), O == "o1237" && (U = D + d.shift(), b = C + d.shift(), z = U + d.shift(), R = b + d.shift(), W = z + d.shift(), q = R + d.shift(), x = W + d.shift(), H = q + d.shift(), G = x + d.shift(), L = H + d.shift(), Math.abs(G - D) > Math.abs(L - C) ? D = G + d.shift() : C = L + d.shift(), l.U.P.curveTo(f, U, b, z, R, W, q), l.U.P.curveTo(f, x, H, G, L, D, C));
          else if (O == "o14") {
            if (d.length > 0 && !y && (g = d.shift() + s.nominalWidthX, y = !0), d.length == 4) {
              var ee = d.shift(), Z = d.shift(), w = d.shift(), T = d.shift(), A = l.CFF.glyphBySE(s, w), V = l.CFF.glyphBySE(s, T);
              l.U._drawCFF(s.CharStrings[A], n, s, c, f), n.x = ee, n.y = Z, l.U._drawCFF(s.CharStrings[V], n, s, c, f);
            }
            E && (l.U.P.closePath(f), E = !1);
          } else if (O == "o19" || O == "o20")
            d.length % 2 != 0 && !y && (g = d.shift() + c.nominalWidthX), v += d.length >> 1, d.length = 0, y = !0, _ += v + 7 >> 3;
          else if (O == "o21") d.length > 2 && !y && (g = d.shift() + c.nominalWidthX, y = !0), C += d.pop(), D += d.pop(), E && l.U.P.closePath(f), l.U.P.moveTo(f, D, C), E = !0;
          else if (O == "o22") d.length > 1 && !y && (g = d.shift() + c.nominalWidthX, y = !0), D += d.pop(), E && l.U.P.closePath(f), l.U.P.moveTo(f, D, C), E = !0;
          else if (O == "o25") {
            for (; d.length > 6; ) D += d.shift(), C += d.shift(), l.U.P.lineTo(f, D, C);
            U = D + d.shift(), b = C + d.shift(), z = U + d.shift(), R = b + d.shift(), D = z + d.shift(), C = R + d.shift(), l.U.P.curveTo(f, U, b, z, R, D, C);
          } else if (O == "o26") for (d.length % 2 && (D += d.shift()); d.length > 0; ) U = D, b = C + d.shift(), D = z = U + d.shift(), C = (R = b + d.shift()) + d.shift(), l.U.P.curveTo(f, U, b, z, R, D, C);
          else if (O == "o27") for (d.length % 2 && (C += d.shift()); d.length > 0; ) b = C, z = (U = D + d.shift()) + d.shift(), R = b + d.shift(), D = z + d.shift(), C = R, l.U.P.curveTo(f, U, b, z, R, D, C);
          else if (O == "o10" || O == "o29") {
            var Q = O == "o10" ? c : s;
            if (d.length == 0) console.debug("error: empty stack");
            else {
              var K = d.pop(), ne = Q.Subrs[K + Q.Bias];
              n.x = D, n.y = C, n.nStems = v, n.haveWidth = y, n.width = g, n.open = E, l.U._drawCFF(ne, n, s, c, f), D = n.x, C = n.y, v = n.nStems, y = n.haveWidth, g = n.width, E = n.open;
            }
          } else if (O == "o30" || O == "o31") {
            var I = d.length, te = (P = 0, O == "o31");
            for (P += I - (X = -3 & I); P < X; ) te ? (b = C, z = (U = D + d.shift()) + d.shift(), C = (R = b + d.shift()) + d.shift(), X - P == 5 ? (D = z + d.shift(), P++) : D = z, te = !1) : (U = D, b = C + d.shift(), z = U + d.shift(), R = b + d.shift(), D = z + d.shift(), X - P == 5 ? (C = R + d.shift(), P++) : C = R, te = !0), l.U.P.curveTo(f, U, b, z, R, D, C), P += 4;
          } else {
            if ((O + "").charAt(0) == "o") throw console.debug("Unknown operation: " + O, i), O;
            d.push(O);
          }
        }
      }
      n.x = D, n.y = C, n.nStems = v, n.haveWidth = y, n.width = g, n.open = E;
    };
    var p = l, m = { Typr: p };
    return o.Typr = p, o.default = m, Object.defineProperty(o, "__esModule", { value: !0 }), o;
  })({}).Typr;
}
/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/
function q0() {
  return (function(o) {
    var l = Uint8Array, p = Uint16Array, m = Uint32Array, i = new l([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), n = new l([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), s = new l([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), c = function(O, X) {
      for (var Y = new p(31), le = 0; le < 31; ++le) Y[le] = X += 1 << O[le - 1];
      var j = new m(Y[30]);
      for (le = 1; le < 30; ++le) for (var P = Y[le]; P < Y[le + 1]; ++P) j[P] = P - Y[le] << 5 | le;
      return [Y, j];
    }, f = c(i, 2), d = f[0], v = f[1];
    d[28] = 258, v[258] = 28;
    for (var y = c(n, 0)[0], g = new p(32768), E = 0; E < 32768; ++E) {
      var _ = (43690 & E) >>> 1 | (21845 & E) << 1;
      _ = (61680 & (_ = (52428 & _) >>> 2 | (13107 & _) << 2)) >>> 4 | (3855 & _) << 4, g[E] = ((65280 & _) >>> 8 | (255 & _) << 8) >>> 1;
    }
    var D = function(O, X, Y) {
      for (var le = O.length, j = 0, P = new p(X); j < le; ++j) ++P[O[j] - 1];
      var ee, Z = new p(X);
      for (j = 0; j < X; ++j) Z[j] = Z[j - 1] + P[j - 1] << 1;
      {
        ee = new p(1 << X);
        var w = 15 - X;
        for (j = 0; j < le; ++j) if (O[j]) for (var T = j << 4 | O[j], A = X - O[j], V = Z[O[j] - 1]++ << A, Q = V | (1 << A) - 1; V <= Q; ++V) ee[g[V] >>> w] = T;
      }
      return ee;
    }, C = new l(288);
    for (E = 0; E < 144; ++E) C[E] = 8;
    for (E = 144; E < 256; ++E) C[E] = 9;
    for (E = 256; E < 280; ++E) C[E] = 7;
    for (E = 280; E < 288; ++E) C[E] = 8;
    var U = new l(32);
    for (E = 0; E < 32; ++E) U[E] = 5;
    var b = D(C, 9), z = D(U, 5), R = function(O) {
      for (var X = O[0], Y = 1; Y < O.length; ++Y) O[Y] > X && (X = O[Y]);
      return X;
    }, x = function(O, X, Y) {
      var le = X / 8 | 0;
      return (O[le] | O[le + 1] << 8) >> (7 & X) & Y;
    }, H = function(O, X) {
      var Y = X / 8 | 0;
      return (O[Y] | O[Y + 1] << 8 | O[Y + 2] << 16) >> (7 & X);
    }, G = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], L = function(O, X, Y) {
      var le = new Error(X || G[O]);
      if (le.code = O, Error.captureStackTrace && Error.captureStackTrace(le, L), !Y) throw le;
      return le;
    }, W = function(O, X, Y) {
      var le = O.length;
      if (!le || Y && !Y.l && le < 5) return X || new l(0);
      var j = !X || Y, P = !Y || Y.i;
      Y || (Y = {}), X || (X = new l(3 * le));
      var ee, Z = function(Me) {
        var ct = X.length;
        if (Me > ct) {
          var et = new l(Math.max(2 * ct, Me));
          et.set(X), X = et;
        }
      }, w = Y.f || 0, T = Y.p || 0, A = Y.b || 0, V = Y.l, Q = Y.d, K = Y.m, ne = Y.n, I = 8 * le;
      do {
        if (!V) {
          Y.f = w = x(O, T, 1);
          var te = x(O, T + 1, 3);
          if (T += 3, !te) {
            var de = O[(ve = ((ee = T) / 8 | 0) + (7 & ee && 1) + 4) - 4] | O[ve - 3] << 8, Se = ve + de;
            if (Se > le) {
              P && L(0);
              break;
            }
            j && Z(A + de), X.set(O.subarray(ve, Se), A), Y.b = A += de, Y.p = T = 8 * Se;
            continue;
          }
          if (te == 1) V = b, Q = z, K = 9, ne = 5;
          else if (te == 2) {
            var oe = x(O, T, 31) + 257, ie = x(O, T + 10, 15) + 4, Be = oe + x(O, T + 5, 31) + 1;
            T += 14;
            for (var Ce = new l(Be), me = new l(19), Ee = 0; Ee < ie; ++Ee) me[s[Ee]] = x(O, T + 3 * Ee, 7);
            T += 3 * ie;
            var be = R(me), fe = (1 << be) - 1, ge = D(me, be);
            for (Ee = 0; Ee < Be; ) {
              var ve, $ = ge[x(O, T, fe)];
              if (T += 15 & $, (ve = $ >>> 4) < 16) Ce[Ee++] = ve;
              else {
                var Ve = 0, ye = 0;
                for (ve == 16 ? (ye = 3 + x(O, T, 3), T += 2, Ve = Ce[Ee - 1]) : ve == 17 ? (ye = 3 + x(O, T, 7), T += 3) : ve == 18 && (ye = 11 + x(O, T, 127), T += 7); ye--; ) Ce[Ee++] = Ve;
              }
            }
            var Ue = Ce.subarray(0, oe), he = Ce.subarray(oe);
            K = R(Ue), ne = R(he), V = D(Ue, K), Q = D(he, ne);
          } else L(1);
          if (T > I) {
            P && L(0);
            break;
          }
        }
        j && Z(A + 131072);
        for (var We = (1 << K) - 1, Te = (1 << ne) - 1, De = T; ; De = T) {
          var Re = (Ve = V[H(O, T) & We]) >>> 4;
          if ((T += 15 & Ve) > I) {
            P && L(0);
            break;
          }
          if (Ve || L(2), Re < 256) X[A++] = Re;
          else {
            if (Re == 256) {
              De = T, V = null;
              break;
            }
            var Le = Re - 254;
            if (Re > 264) {
              var $e = i[Ee = Re - 257];
              Le = x(O, T, (1 << $e) - 1) + d[Ee], T += $e;
            }
            var ft = Q[H(O, T) & Te], Ge = ft >>> 4;
            if (ft || L(3), T += 15 & ft, he = y[Ge], Ge > 3 && ($e = n[Ge], he += H(O, T) & (1 << $e) - 1, T += $e), T > I) {
              P && L(0);
              break;
            }
            j && Z(A + 131072);
            for (var je = A + Le; A < je; A += 4) X[A] = X[A - he], X[A + 1] = X[A + 1 - he], X[A + 2] = X[A + 2 - he], X[A + 3] = X[A + 3 - he];
            A = je;
          }
        }
        Y.l = V, Y.p = De, Y.b = A, V && (w = 1, Y.m = K, Y.d = Q, Y.n = ne);
      } while (!w);
      return A == X.length ? X : (function(Me, ct, et) {
        (et == null || et > Me.length) && (et = Me.length);
        var _t = new (Me instanceof p ? p : Me instanceof m ? m : l)(et - ct);
        return _t.set(Me.subarray(ct, et)), _t;
      })(X, 0, A);
    }, q = new l(0), ae = typeof TextDecoder < "u" && new TextDecoder();
    try {
      ae.decode(q, { stream: !0 });
    } catch {
    }
    return o.convert_streams = function(O) {
      var X = new DataView(O), Y = 0;
      function le() {
        var oe = X.getUint16(Y);
        return Y += 2, oe;
      }
      function j() {
        var oe = X.getUint32(Y);
        return Y += 4, oe;
      }
      function P(oe) {
        de.setUint16(Se, oe), Se += 2;
      }
      function ee(oe) {
        de.setUint32(Se, oe), Se += 4;
      }
      for (var Z = { signature: j(), flavor: j(), length: j(), numTables: le(), reserved: le(), totalSfntSize: j(), majorVersion: le(), minorVersion: le(), metaOffset: j(), metaLength: j(), metaOrigLength: j(), privOffset: j(), privLength: j() }, w = 0; Math.pow(2, w) <= Z.numTables; ) w++;
      w--;
      for (var T = 16 * Math.pow(2, w), A = 16 * Z.numTables - T, V = 12, Q = [], K = 0; K < Z.numTables; K++) Q.push({ tag: j(), offset: j(), compLength: j(), origLength: j(), origChecksum: j() }), V += 16;
      var ne, I = new Uint8Array(12 + 16 * Q.length + Q.reduce((function(oe, ie) {
        return oe + ie.origLength + 4;
      }), 0)), te = I.buffer, de = new DataView(te), Se = 0;
      return ee(Z.flavor), P(Z.numTables), P(T), P(w), P(A), Q.forEach((function(oe) {
        ee(oe.tag), ee(oe.origChecksum), ee(V), ee(oe.origLength), oe.outOffset = V, (V += oe.origLength) % 4 != 0 && (V += 4 - V % 4);
      })), Q.forEach((function(oe) {
        var ie, Be = O.slice(oe.offset, oe.offset + oe.compLength);
        if (oe.compLength != oe.origLength) {
          var Ce = new Uint8Array(oe.origLength);
          ie = new Uint8Array(Be, 2), W(ie, Ce);
        } else Ce = new Uint8Array(Be);
        I.set(Ce, oe.outOffset);
        var me = 0;
        (V = oe.outOffset + oe.origLength) % 4 != 0 && (me = 4 - V % 4), I.set(new Uint8Array(me).buffer, oe.outOffset + oe.origLength), ne = V + me;
      })), te.slice(0, ne);
    }, Object.defineProperty(o, "__esModule", { value: !0 }), o;
  })({}).convert_streams;
}
function X0(o, l) {
  const p = {
    M: 2,
    L: 2,
    Q: 4,
    C: 6,
    Z: 0
  }, m = { C: "18g,ca,368,1kz", D: "17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v", R: "17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6", L: "x9u,jff,a,fd,jv", T: "4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n" }, i = 1, n = 2, s = 4, c = 8, f = 16, d = 32;
  let v;
  function y(G) {
    if (!v) {
      const L = {
        R: n,
        L: i,
        D: s,
        C: f,
        U: d,
        T: c
      };
      v = /* @__PURE__ */ new Map();
      for (let W in m) {
        let q = 0;
        m[W].split(",").forEach((ae) => {
          let [O, X] = ae.split("+");
          O = parseInt(O, 36), X = X ? parseInt(X, 36) : 0, v.set(q += O, L[W]);
          for (let Y = X; Y--; )
            v.set(++q, L[W]);
        });
      }
    }
    return v.get(G) || d;
  }
  const g = 1, E = 2, _ = 3, D = 4, C = [null, "isol", "init", "fina", "medi"];
  function U(G) {
    const L = new Uint8Array(G.length);
    let W = d, q = g, ae = -1;
    for (let O = 0; O < G.length; O++) {
      const X = G.codePointAt(O);
      let Y = y(X) | 0, le = g;
      Y & c || (W & (i | s | f) ? Y & (n | s | f) ? (le = _, (q === g || q === _) && L[ae]++) : Y & (i | d) && (q === E || q === D) && L[ae]-- : W & (n | d) && (q === E || q === D) && L[ae]--, q = L[O] = le, W = Y, ae = O, X > 65535 && O++);
    }
    return L;
  }
  function b(G, L) {
    const W = [];
    for (let ae = 0; ae < L.length; ae++) {
      const O = L.codePointAt(ae);
      O > 65535 && ae++, W.push(o.U.codeToGlyph(G, O));
    }
    const q = G.GSUB;
    if (q) {
      const { lookupList: ae, featureList: O } = q;
      let X;
      const Y = /^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/, le = [];
      O.forEach((j) => {
        if (Y.test(j.tag))
          for (let P = 0; P < j.tab.length; P++) {
            if (le[j.tab[P]]) continue;
            le[j.tab[P]] = !0;
            const ee = ae[j.tab[P]], Z = /^(isol|init|fina|medi)$/.test(j.tag);
            Z && !X && (X = U(L));
            for (let w = 0; w < W.length; w++)
              (!X || !Z || C[X[w]] === j.tag) && o.U._applySubs(W, w, ee, ae);
          }
      });
    }
    return W;
  }
  function z(G, L) {
    const W = new Int16Array(L.length * 3);
    let q = 0;
    for (; q < L.length; q++) {
      const Y = L[q];
      if (Y === -1) continue;
      W[q * 3 + 2] = G.hmtx.aWidth[Y];
      const le = G.GPOS;
      if (le) {
        const j = le.lookupList;
        for (let P = 0; P < j.length; P++) {
          const ee = j[P];
          for (let Z = 0; Z < ee.tabs.length; Z++) {
            const w = ee.tabs[Z];
            if (ee.ltype === 1) {
              if (o._lctf.coverageIndex(w.coverage, Y) !== -1 && w.pos) {
                X(w.pos, q);
                break;
              }
            } else if (ee.ltype === 2) {
              let T = null, A = ae();
              if (A !== -1) {
                const V = o._lctf.coverageIndex(w.coverage, L[A]);
                if (V !== -1) {
                  if (w.fmt === 1) {
                    const Q = w.pairsets[V];
                    for (let K = 0; K < Q.length; K++)
                      Q[K].gid2 === Y && (T = Q[K]);
                  } else if (w.fmt === 2) {
                    const Q = o.U._getGlyphClass(L[A], w.classDef1), K = o.U._getGlyphClass(Y, w.classDef2);
                    T = w.matrix[Q][K];
                  }
                  if (T) {
                    T.val1 && X(T.val1, A), T.val2 && X(T.val2, q);
                    break;
                  }
                }
              }
            } else if (ee.ltype === 4) {
              const T = o._lctf.coverageIndex(w.markCoverage, Y);
              if (T !== -1) {
                const A = ae(O), V = A === -1 ? -1 : o._lctf.coverageIndex(w.baseCoverage, L[A]);
                if (V !== -1) {
                  const Q = w.markArray[T], K = w.baseArray[V][Q.markClass];
                  W[q * 3] = K.x - Q.x + W[A * 3] - W[A * 3 + 2], W[q * 3 + 1] = K.y - Q.y + W[A * 3 + 1];
                  break;
                }
              }
            } else if (ee.ltype === 6) {
              const T = o._lctf.coverageIndex(w.mark1Coverage, Y);
              if (T !== -1) {
                const A = ae();
                if (A !== -1) {
                  const V = L[A];
                  if (R(G, V) === 3) {
                    const Q = o._lctf.coverageIndex(w.mark2Coverage, V);
                    if (Q !== -1) {
                      const K = w.mark1Array[T], ne = w.mark2Array[Q][K.markClass];
                      W[q * 3] = ne.x - K.x + W[A * 3] - W[A * 3 + 2], W[q * 3 + 1] = ne.y - K.y + W[A * 3 + 1];
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      } else if (G.kern && !G.cff) {
        const j = ae();
        if (j !== -1) {
          const P = G.kern.glyph1.indexOf(L[j]);
          if (P !== -1) {
            const ee = G.kern.rval[P].glyph2.indexOf(Y);
            ee !== -1 && (W[j * 3 + 2] += G.kern.rval[P].vals[ee]);
          }
        }
      }
    }
    return W;
    function ae(Y) {
      for (let le = q - 1; le >= 0; le--)
        if (L[le] !== -1 && (!Y || Y(L[le])))
          return le;
      return -1;
    }
    function O(Y) {
      return R(G, Y) === 1;
    }
    function X(Y, le) {
      for (let j = 0; j < 3; j++)
        W[le * 3 + j] += Y[j] || 0;
    }
  }
  function R(G, L) {
    const W = G.GDEF && G.GDEF.glyphClassDef;
    return W ? o.U._getGlyphClass(L, W) : 0;
  }
  function x(...G) {
    for (let L = 0; L < G.length; L++)
      if (typeof G[L] == "number")
        return G[L];
  }
  function H(G) {
    const L = /* @__PURE__ */ Object.create(null), W = G["OS/2"], q = G.hhea, ae = G.head.unitsPerEm, O = x(W && W.sTypoAscender, q && q.ascender, ae), X = {
      unitsPerEm: ae,
      ascender: O,
      descender: x(W && W.sTypoDescender, q && q.descender, 0),
      capHeight: x(W && W.sCapHeight, O),
      xHeight: x(W && W.sxHeight, O),
      lineGap: x(W && W.sTypoLineGap, q && q.lineGap),
      supportsCodePoint(Y) {
        return o.U.codeToGlyph(G, Y) > 0;
      },
      forEachGlyph(Y, le, j, P) {
        let ee = 0;
        const Z = 1 / X.unitsPerEm * le, w = b(G, Y);
        let T = 0;
        const A = z(G, w);
        return w.forEach((V, Q) => {
          if (V !== -1) {
            let K = L[V];
            if (!K) {
              const { cmds: ne, crds: I } = o.U.glyphToPath(G, V);
              let te = "", de = 0;
              for (let Ce = 0, me = ne.length; Ce < me; Ce++) {
                const Ee = p[ne[Ce]];
                te += ne[Ce];
                for (let be = 1; be <= Ee; be++)
                  te += (be > 1 ? "," : "") + I[de++];
              }
              let Se, oe, ie, Be;
              if (I.length) {
                Se = oe = 1 / 0, ie = Be = -1 / 0;
                for (let Ce = 0, me = I.length; Ce < me; Ce += 2) {
                  let Ee = I[Ce], be = I[Ce + 1];
                  Ee < Se && (Se = Ee), be < oe && (oe = be), Ee > ie && (ie = Ee), be > Be && (Be = be);
                }
              } else
                Se = ie = oe = Be = 0;
              K = L[V] = {
                index: V,
                advanceWidth: G.hmtx.aWidth[V],
                xMin: Se,
                yMin: oe,
                xMax: ie,
                yMax: Be,
                path: te
              };
            }
            P.call(
              null,
              K,
              ee + A[Q * 3] * Z,
              A[Q * 3 + 1] * Z,
              T
            ), ee += A[Q * 3 + 2] * Z, j && (ee += j * le);
          }
          T += Y.codePointAt(T) > 65535 ? 2 : 1;
        }), ee;
      }
    };
    return X;
  }
  return function(L) {
    const W = new Uint8Array(L, 0, 4), q = o._bin.readASCII(W, 0, 4);
    if (q === "wOFF")
      L = l(L);
    else if (q === "wOF2")
      throw new Error("woff2 fonts not supported");
    return H(o.parse(L)[0]);
  };
}
const Q0 = /* @__PURE__ */ li({
  name: "Typr Font Parser",
  dependencies: [Y0, q0, X0],
  init(o, l, p) {
    const m = o(), i = l();
    return p(m, i);
  }
});
/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/
function F0() {
  return (function(o) {
    var l = function() {
      this.buckets = /* @__PURE__ */ new Map();
    };
    l.prototype.add = function(z) {
      var R = z >> 5;
      this.buckets.set(R, (this.buckets.get(R) || 0) | 1 << (31 & z));
    }, l.prototype.has = function(z) {
      var R = this.buckets.get(z >> 5);
      return R !== void 0 && (R & 1 << (31 & z)) != 0;
    }, l.prototype.serialize = function() {
      var z = [];
      return this.buckets.forEach((function(R, x) {
        z.push((+x).toString(36) + ":" + R.toString(36));
      })), z.join(",");
    }, l.prototype.deserialize = function(z) {
      var R = this;
      this.buckets.clear(), z.split(",").forEach((function(x) {
        var H = x.split(":");
        R.buckets.set(parseInt(H[0], 36), parseInt(H[1], 36));
      }));
    };
    var p = Math.pow(2, 8), m = p - 1, i = ~m;
    function n(z) {
      var R = (function(H) {
        return H & i;
      })(z).toString(16), x = (function(H) {
        return (H & i) + p - 1;
      })(z).toString(16);
      return "codepoint-index/plane" + (z >> 16) + "/" + R + "-" + x + ".json";
    }
    function s(z, R) {
      var x = z & m, H = R.codePointAt(x / 6 | 0);
      return ((H = (H || 48) - 48) & 1 << x % 6) != 0;
    }
    function c(z, R) {
      var x;
      (x = z, x.replace(/U\+/gi, "").replace(/^,+|,+$/g, "").split(/,+/).map((function(H) {
        return H.split("-").map((function(G) {
          return parseInt(G.trim(), 16);
        }));
      }))).forEach((function(H) {
        var G = H[0], L = H[1];
        L === void 0 && (L = G), R(G, L);
      }));
    }
    function f(z, R) {
      c(z, (function(x, H) {
        for (var G = x; G <= H; G++) R(G);
      }));
    }
    var d = {}, v = {}, y = /* @__PURE__ */ new WeakMap(), g = "https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";
    function E(z) {
      var R = y.get(z);
      return R || (R = new l(), f(z.ranges, (function(x) {
        return R.add(x);
      })), y.set(z, R)), R;
    }
    var _, D = /* @__PURE__ */ new Map();
    function C(z, R, x) {
      return z[R] ? R : z[x] ? x : (function(H) {
        for (var G in H) return G;
      })(z);
    }
    function U(z, R) {
      var x = R;
      if (!z.includes(x)) {
        x = 1 / 0;
        for (var H = 0; H < z.length; H++) Math.abs(z[H] - R) < Math.abs(x - R) && (x = z[H]);
      }
      return x;
    }
    function b(z) {
      return _ || (_ = /* @__PURE__ */ new Set(), f("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000", (function(R) {
        _.add(R);
      }))), _.has(z);
    }
    return o.CodePointSet = l, o.clearCache = function() {
      d = {}, v = {};
    }, o.getFontsForString = function(z, R) {
      R === void 0 && (R = {});
      var x, H = R.lang;
      H === void 0 && (H = new RegExp("\\p{Script=Hangul}", "u").test(x = z) ? "ko" : new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}", "u").test(x) ? "ja" : "en");
      var G = R.category;
      G === void 0 && (G = "sans-serif");
      var L = R.style;
      L === void 0 && (L = "normal");
      var W = R.weight;
      W === void 0 && (W = 400);
      var q = (R.dataUrl || g).replace(/\/$/g, ""), ae = /* @__PURE__ */ new Map(), O = new Uint8Array(z.length), X = {}, Y = {}, le = new Array(z.length), j = /* @__PURE__ */ new Map(), P = !1;
      function ee(T) {
        var A = D.get(T);
        return A || (A = fetch(q + "/" + T).then((function(V) {
          if (!V.ok) throw new Error(V.statusText);
          return V.json().then((function(Q) {
            if (!Array.isArray(Q) || Q[0] !== 1) throw new Error("Incorrect schema version; need 1, got " + Q[0]);
            return Q[1];
          }));
        })).catch((function(V) {
          if (q !== g) return P || (console.error('unicode-font-resolver: Failed loading from dataUrl "' + q + '", trying default CDN. ' + V.message), P = !0), q = g, D.delete(T), ee(T);
          throw V;
        })), D.set(T, A)), A;
      }
      for (var Z = function(T) {
        var A = z.codePointAt(T), V = n(A);
        le[T] = V, d[V] || j.has(V) || j.set(V, ee(V).then((function(Q) {
          d[V] = Q;
        }))), A > 65535 && (T++, w = T);
      }, w = 0; w < z.length; w++) Z(w);
      return Promise.all(j.values()).then((function() {
        j.clear();
        for (var T = function(V) {
          var Q = z.codePointAt(V), K = null, ne = d[le[V]], I = void 0;
          for (var te in ne) {
            var de = Y[te];
            if (de === void 0 && (de = Y[te] = new RegExp(te).test(H || "en")), de) {
              for (var Se in I = te, ne[te]) if (s(Q, ne[te][Se])) {
                K = Se;
                break;
              }
              break;
            }
          }
          if (!K) {
            e: for (var oe in ne) if (oe !== I) {
              for (var ie in ne[oe]) if (s(Q, ne[oe][ie])) {
                K = ie;
                break e;
              }
            }
          }
          K || (console.debug("No font coverage for U+" + Q.toString(16)), K = "latin"), le[V] = K, v[K] || j.has(K) || j.set(K, ee("font-meta/" + K + ".json").then((function(Be) {
            v[K] = Be;
          }))), Q > 65535 && (V++, A = V);
        }, A = 0; A < z.length; A++) T(A);
        return Promise.all(j.values());
      })).then((function() {
        for (var T, A = null, V = 0; V < z.length; V++) {
          var Q = z.codePointAt(V);
          if (A && (b(Q) || E(A).has(Q))) O[V] = O[V - 1];
          else {
            A = v[le[V]];
            var K = X[A.id];
            if (!K) {
              var ne = A.typeforms, I = C(ne, G, "sans-serif"), te = C(ne[I], L, "normal"), de = U((T = ne[I]) === null || T === void 0 ? void 0 : T[te], W);
              K = X[A.id] = q + "/font-files/" + A.id + "/" + I + "." + te + "." + de + ".woff";
            }
            var Se = ae.get(K);
            Se == null && (Se = ae.size, ae.set(K, Se)), O[V] = Se;
          }
          Q > 65535 && (V++, O[V] = O[V - 1]);
        }
        return { fontUrls: Array.from(ae.keys()), chars: O };
      }));
    }, Object.defineProperty(o, "__esModule", { value: !0 }), o;
  })({});
}
function K0(o, l) {
  const p = /* @__PURE__ */ Object.create(null), m = /* @__PURE__ */ Object.create(null);
  function i(s, c) {
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
            const v = o(d.response);
            v.src = s, c(v);
          } catch (v) {
            f(v);
          }
      }, d.onerror = f, d.send();
    } catch (d) {
      f(d);
    }
  }
  function n(s, c) {
    let f = p[s];
    f ? c(f) : m[s] ? m[s].push(c) : (m[s] = [c], i(s, (d) => {
      d.src = s, p[s] = d, m[s].forEach((v) => v(d)), delete m[s];
    }));
  }
  return function(s, c, {
    lang: f,
    fonts: d = [],
    style: v = "normal",
    weight: y = "normal",
    unicodeFontsURL: g
  } = {}) {
    const E = new Uint8Array(s.length), _ = [];
    s.length || b();
    const D = /* @__PURE__ */ new Map(), C = [];
    if (v !== "italic" && (v = "normal"), typeof y != "number" && (y = y === "bold" ? 700 : 400), d && !Array.isArray(d) && (d = [d]), d = d.slice().filter((R) => !R.lang || R.lang.test(f)).reverse(), d.length) {
      let G = 0;
      (function L(W = 0) {
        for (let q = W, ae = s.length; q < ae; q++) {
          const O = s.codePointAt(q);
          if (G === 1 && _[E[q - 1]].supportsCodePoint(O) || q > 0 && /\s/.test(s[q]))
            E[q] = E[q - 1], G === 2 && (C[C.length - 1][1] = q);
          else
            for (let X = E[q], Y = d.length; X <= Y; X++)
              if (X === Y) {
                const le = G === 2 ? C[C.length - 1] : C[C.length] = [q, q];
                le[1] = q, G = 2;
              } else {
                E[q] = X;
                const { src: le, unicodeRange: j } = d[X];
                if (!j || z(O, j)) {
                  const P = p[le];
                  if (!P) {
                    n(le, () => {
                      L(q);
                    });
                    return;
                  }
                  if (P.supportsCodePoint(O)) {
                    let ee = D.get(P);
                    typeof ee != "number" && (ee = _.length, _.push(P), D.set(P, ee)), E[q] = ee, G = 1;
                    break;
                  }
                }
              }
          O > 65535 && q + 1 < ae && (E[q + 1] = E[q], q++, G === 2 && (C[C.length - 1][1] = q));
        }
        U();
      })();
    } else
      C.push([0, s.length - 1]), U();
    function U() {
      if (C.length) {
        const R = C.map((x) => s.substring(x[0], x[1] + 1)).join(`
`);
        l.getFontsForString(R, {
          lang: f || void 0,
          style: v,
          weight: y,
          dataUrl: g
        }).then(({ fontUrls: x, chars: H }) => {
          const G = _.length;
          let L = 0;
          C.forEach((q) => {
            for (let ae = 0, O = q[1] - q[0]; ae <= O; ae++)
              E[q[0] + ae] = H[L++] + G;
            L++;
          });
          let W = 0;
          x.forEach((q, ae) => {
            n(q, (O) => {
              _[ae + G] = O, ++W === x.length && b();
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
    function z(R, x) {
      for (let H = 0; H < x.length; H++) {
        const [G, L = G] = x[H];
        if (G <= R && R <= L)
          return !0;
      }
      return !1;
    }
  };
}
const Z0 = /* @__PURE__ */ li({
  name: "FontResolver",
  dependencies: [
    K0,
    Q0,
    F0
  ],
  init(o, l, p) {
    return o(l, p());
  }
});
function w0(o, l) {
  const m = /[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/, i = "[^\\S\\u00A0]", n = new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);
  function s({ text: _, lang: D, fonts: C, style: U, weight: b, preResolvedFonts: z, unicodeFontsURL: R }, x) {
    const H = ({ chars: G, fonts: L }) => {
      let W, q;
      const ae = [];
      for (let O = 0; O < G.length; O++)
        G[O] !== q ? (q = G[O], ae.push(W = { start: O, end: O, fontObj: L[G[O]] })) : W.end = O;
      x(ae);
    };
    z ? H(z) : o(
      _,
      H,
      { lang: D, fonts: C, style: U, weight: b, unicodeFontsURL: R }
    );
  }
  function c({
    text: _ = "",
    font: D,
    lang: C,
    sdfGlyphSize: U = 64,
    fontSize: b = 400,
    fontWeight: z = 1,
    fontStyle: R = "normal",
    letterSpacing: x = 0,
    lineHeight: H = "normal",
    maxWidth: G = 1 / 0,
    direction: L,
    textAlign: W = "left",
    textIndent: q = 0,
    whiteSpace: ae = "normal",
    overflowWrap: O = "normal",
    anchorX: X = 0,
    anchorY: Y = 0,
    metricsOnly: le = !1,
    unicodeFontsURL: j,
    preResolvedFonts: P = null,
    includeCaretPositions: ee = !1,
    chunkedBoundsSize: Z = 8192,
    colorRanges: w = null
  }, T) {
    const A = y(), V = { fontLoad: 0, typesetting: 0 };
    _.indexOf("\r") > -1 && (console.info("Typesetter: got text with \\r chars; normalizing to \\n"), _ = _.replace(/\r\n/g, `
`).replace(/\r/g, `
`)), b = +b, x = +x, G = +G, H = H || "normal", q = +q, s({
      text: _,
      lang: C,
      style: R,
      weight: z,
      fonts: typeof D == "string" ? [{ src: D }] : D,
      unicodeFontsURL: j,
      preResolvedFonts: P
    }, (Q) => {
      V.fontLoad = y() - A;
      const K = isFinite(G);
      let ne = null, I = null, te = null, de = null, Se = null, oe = null, ie = null, Be = null, Ce = 0, me = 0, Ee = ae !== "nowrap";
      const be = /* @__PURE__ */ new Map(), fe = y();
      let ge = q, ve = 0, $ = new g();
      const Ve = [$];
      Q.forEach((Te) => {
        const { fontObj: De } = Te, { ascender: Re, descender: Le, unitsPerEm: $e, lineGap: ft, capHeight: Ge, xHeight: je } = De;
        let Me = be.get(De);
        if (!Me) {
          const Oe = b / $e, Ze = H === "normal" ? (Re - Le + ft) * Oe : H * b, Ma = (Ze - (Re - Le) * Oe) / 2, Je = Math.min(Ze, (Re - Le) * Oe), Xe = (Re + Le) / 2 * Oe + Je / 2;
          Me = {
            index: be.size,
            src: De.src,
            fontObj: De,
            fontSizeMult: Oe,
            unitsPerEm: $e,
            ascender: Re * Oe,
            descender: Le * Oe,
            capHeight: Ge * Oe,
            xHeight: je * Oe,
            lineHeight: Ze,
            baseline: -Ma - Re * Oe,
            // baseline offset from top of line height
            // cap: -halfLeading - capHeight * fontSizeMult, // cap from top of line height
            // ex: -halfLeading - xHeight * fontSizeMult, // ex from top of line height
            caretTop: Xe,
            caretBottom: Xe - Je
          }, be.set(De, Me);
        }
        const { fontSizeMult: ct } = Me, et = _.slice(Te.start, Te.end + 1);
        let _t, tt;
        De.forEachGlyph(et, b, x, (Oe, Ze, Ma, Je) => {
          Ze += ve, Je += Te.start, _t = Ze, tt = Oe;
          const Xe = _.charAt(Je), mt = Oe.advanceWidth * ct, at = $.count;
          let ze;
          if ("isEmpty" in Oe || (Oe.isWhitespace = !!Xe && new RegExp(i).test(Xe), Oe.canBreakAfter = !!Xe && n.test(Xe), Oe.isEmpty = Oe.xMin === Oe.xMax || Oe.yMin === Oe.yMax || m.test(Xe)), !Oe.isWhitespace && !Oe.isEmpty && me++, Ee && K && !Oe.isWhitespace && Ze + mt + ge > G && at) {
            if ($.glyphAt(at - 1).glyphObj.canBreakAfter)
              ze = new g(), ge = -Ze;
            else
              for (let xt = at; xt--; )
                if (xt === 0 && O === "break-word") {
                  ze = new g(), ge = -Ze;
                  break;
                } else if ($.glyphAt(xt).glyphObj.canBreakAfter) {
                  ze = $.splitAt(xt + 1);
                  const Ct = ze.glyphAt(0).x;
                  ge -= Ct;
                  for (let gt = ze.count; gt--; )
                    ze.glyphAt(gt).x -= Ct;
                  break;
                }
            ze && ($.isSoftWrapped = !0, $ = ze, Ve.push($), Ce = G);
          }
          let nt = $.glyphAt($.count);
          nt.glyphObj = Oe, nt.x = Ze + ge, nt.y = Ma, nt.width = mt, nt.charIndex = Je, nt.fontData = Me, Xe === `
` && ($ = new g(), Ve.push($), ge = -(Ze + mt + x * b) + q);
        }), ve = _t + tt.advanceWidth * ct + x * b;
      });
      let ye = 0;
      Ve.forEach((Te) => {
        let De = !0;
        for (let Re = Te.count; Re--; ) {
          const Le = Te.glyphAt(Re);
          De && !Le.glyphObj.isWhitespace && (Te.width = Le.x + Le.width, Te.width > Ce && (Ce = Te.width), De = !1);
          let { lineHeight: $e, capHeight: ft, xHeight: Ge, baseline: je } = Le.fontData;
          $e > Te.lineHeight && (Te.lineHeight = $e);
          const Me = je - Te.baseline;
          Me < 0 && (Te.baseline += Me, Te.cap += Me, Te.ex += Me), Te.cap = Math.max(Te.cap, Te.baseline + ft), Te.ex = Math.max(Te.ex, Te.baseline + Ge);
        }
        Te.baseline -= ye, Te.cap -= ye, Te.ex -= ye, ye += Te.lineHeight;
      });
      let Ue = 0, he = 0;
      if (X && (typeof X == "number" ? Ue = -X : typeof X == "string" && (Ue = -Ce * (X === "left" ? 0 : X === "center" ? 0.5 : X === "right" ? 1 : d(X)))), Y && (typeof Y == "number" ? he = -Y : typeof Y == "string" && (he = Y === "top" ? 0 : Y === "top-baseline" ? -Ve[0].baseline : Y === "top-cap" ? -Ve[0].cap : Y === "top-ex" ? -Ve[0].ex : Y === "middle" ? ye / 2 : Y === "bottom" ? ye : Y === "bottom-baseline" ? -Ve[Ve.length - 1].baseline : d(Y) * ye)), !le) {
        const Te = l.getEmbeddingLevels(_, L);
        ne = new Uint16Array(me), I = new Uint8Array(me), te = new Float32Array(me * 2), de = {}, ie = [1 / 0, 1 / 0, -1 / 0, -1 / 0], Be = [], ee && (oe = new Float32Array(_.length * 4)), w && (Se = new Uint8Array(me * 3));
        let De = 0, Re = -1, Le = -1, $e, ft;
        if (Ve.forEach((Ge, je) => {
          let { count: Me, width: ct } = Ge;
          if (Me > 0) {
            let et = 0;
            for (let Je = Me; Je-- && Ge.glyphAt(Je).glyphObj.isWhitespace; )
              et++;
            let _t = 0, tt = 0;
            if (W === "center")
              _t = (Ce - ct) / 2;
            else if (W === "right")
              _t = Ce - ct;
            else if (W === "justify" && Ge.isSoftWrapped) {
              let Je = 0;
              for (let Xe = Me - et; Xe--; )
                Ge.glyphAt(Xe).glyphObj.isWhitespace && Je++;
              tt = (Ce - ct) / Je;
            }
            if (tt || _t) {
              let Je = 0;
              for (let Xe = 0; Xe < Me; Xe++) {
                let mt = Ge.glyphAt(Xe);
                const at = mt.glyphObj;
                mt.x += _t + Je, tt !== 0 && at.isWhitespace && Xe < Me - et && (Je += tt, mt.width += tt);
              }
            }
            const Oe = l.getReorderSegments(
              _,
              Te,
              Ge.glyphAt(0).charIndex,
              Ge.glyphAt(Ge.count - 1).charIndex
            );
            for (let Je = 0; Je < Oe.length; Je++) {
              const [Xe, mt] = Oe[Je];
              let at = 1 / 0, ze = -1 / 0;
              for (let nt = 0; nt < Me; nt++)
                if (Ge.glyphAt(nt).charIndex >= Xe) {
                  let xt = nt, Ct = nt;
                  for (; Ct < Me; Ct++) {
                    let gt = Ge.glyphAt(Ct);
                    if (gt.charIndex > mt)
                      break;
                    Ct < Me - et && (at = Math.min(at, gt.x), ze = Math.max(ze, gt.x + gt.width));
                  }
                  for (let gt = xt; gt < Ct; gt++) {
                    const Zt = Ge.glyphAt(gt);
                    Zt.x = ze - (Zt.x + Zt.width - at);
                  }
                  break;
                }
            }
            let Ze;
            const Ma = (Je) => Ze = Je;
            for (let Je = 0; Je < Me; Je++) {
              const Xe = Ge.glyphAt(Je);
              Ze = Xe.glyphObj;
              const mt = Ze.index, at = Te.levels[Xe.charIndex] & 1;
              if (at) {
                const ze = l.getMirroredCharacter(_[Xe.charIndex]);
                ze && Xe.fontData.fontObj.forEachGlyph(ze, 0, 0, Ma);
              }
              if (ee) {
                const { charIndex: ze, fontData: nt } = Xe, xt = Xe.x + Ue, Ct = Xe.x + Xe.width + Ue;
                oe[ze * 4] = at ? Ct : xt, oe[ze * 4 + 1] = at ? xt : Ct, oe[ze * 4 + 2] = Ge.baseline + nt.caretBottom + he, oe[ze * 4 + 3] = Ge.baseline + nt.caretTop + he;
                const gt = ze - Re;
                gt > 1 && v(oe, Re, gt), Re = ze;
              }
              if (w) {
                const { charIndex: ze } = Xe;
                for (; ze > Le; )
                  Le++, w.hasOwnProperty(Le) && (ft = w[Le]);
              }
              if (!Ze.isWhitespace && !Ze.isEmpty) {
                const ze = De++, { fontSizeMult: nt, src: xt, index: Ct } = Xe.fontData, gt = de[xt] || (de[xt] = {});
                gt[mt] || (gt[mt] = {
                  path: Ze.path,
                  pathBounds: [Ze.xMin, Ze.yMin, Ze.xMax, Ze.yMax]
                });
                const Zt = Xe.x + Ue, ha = Xe.y + Ge.baseline + he;
                te[ze * 2] = Zt, te[ze * 2 + 1] = ha;
                const Nt = Zt + Ze.xMin * nt, Da = ha + Ze.yMin * nt, Yt = Zt + Ze.xMax * nt, Rt = ha + Ze.yMax * nt;
                Nt < ie[0] && (ie[0] = Nt), Da < ie[1] && (ie[1] = Da), Yt > ie[2] && (ie[2] = Yt), Rt > ie[3] && (ie[3] = Rt), ze % Z === 0 && ($e = { start: ze, end: ze, rect: [1 / 0, 1 / 0, -1 / 0, -1 / 0] }, Be.push($e)), $e.end++;
                const Ut = $e.rect;
                if (Nt < Ut[0] && (Ut[0] = Nt), Da < Ut[1] && (Ut[1] = Da), Yt > Ut[2] && (Ut[2] = Yt), Rt > Ut[3] && (Ut[3] = Rt), ne[ze] = mt, I[ze] = Ct, w) {
                  const lt = ze * 3;
                  Se[lt] = ft >> 16 & 255, Se[lt + 1] = ft >> 8 & 255, Se[lt + 2] = ft & 255;
                }
              }
            }
          }
        }), oe) {
          const Ge = _.length - Re;
          Ge > 1 && v(oe, Re, Ge);
        }
      }
      const We = [];
      be.forEach(({ index: Te, src: De, unitsPerEm: Re, ascender: Le, descender: $e, lineHeight: ft, capHeight: Ge, xHeight: je }) => {
        We[Te] = { src: De, unitsPerEm: Re, ascender: Le, descender: $e, lineHeight: ft, capHeight: Ge, xHeight: je };
      }), V.typesetting = y() - fe, T({
        glyphIds: ne,
        //id for each glyph, specific to that glyph's font
        glyphFontIndices: I,
        //index into fontData for each glyph
        glyphPositions: te,
        //x,y of each glyph's origin in layout
        glyphData: de,
        //dict holding data about each glyph appearing in the text
        fontData: We,
        //data about each font used in the text
        caretPositions: oe,
        //startX,endX,bottomY caret positions for each char
        // caretHeight, //height of cursor from bottom to top - todo per glyph?
        glyphColors: Se,
        //color for each glyph, if color ranges supplied
        chunkedBounds: Be,
        //total rects per (n=chunkedBoundsSize) consecutive glyphs
        fontSize: b,
        //calculated em height
        topBaseline: he + Ve[0].baseline,
        //y coordinate of the top line's baseline
        blockBounds: [
          //bounds for the whole block of text, including vertical padding for lineHeight
          Ue,
          he - ye,
          Ue + Ce,
          he
        ],
        visibleBounds: ie,
        //total bounds of visible text paths, may be larger or smaller than blockBounds
        timings: V
      });
    });
  }
  function f(_, D) {
    c({ ..._, metricsOnly: !0 }, (C) => {
      const [U, b, z, R] = C.blockBounds;
      D({
        width: z - U,
        height: R - b
      });
    });
  }
  function d(_) {
    let D = _.match(/^([\d.]+)%$/), C = D ? parseFloat(D[1]) : NaN;
    return isNaN(C) ? 0 : C / 100;
  }
  function v(_, D, C) {
    const U = _[D * 4], b = _[D * 4 + 1], z = _[D * 4 + 2], R = _[D * 4 + 3], x = (b - U) / C;
    for (let H = 0; H < C; H++) {
      const G = (D + H) * 4;
      _[G] = U + x * H, _[G + 1] = U + x * (H + 1), _[G + 2] = z, _[G + 3] = R;
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
      let D = g.flyweight;
      return D.data = this.data, D.index = _, D;
    },
    splitAt(_) {
      let D = new g();
      return D.data = this.data.splice(_ * E.length), D;
    }
  }, g.flyweight = E.reduce((_, D, C, U) => (Object.defineProperty(_, D, {
    get() {
      return this.data[this.index * E.length + C];
    },
    set(b) {
      this.data[this.index * E.length + C] = b;
    }
  }), _), { data: null, index: 0 }), {
    typeset: c,
    measure: f
  };
}
const dl = () => (self.performance || Date).now(), wu = /* @__PURE__ */ Qs();
let is;
function J0(o, l, p, m, i, n, s, c, f, d, v = !0) {
  return v ? P0(o, l, p, m, i, n, s, c, f, d).then(
    null,
    (y) => (is || (console.warn("WebGL SDF generation failed, falling back to JS", y), is = !0), rs(o, l, p, m, i, n, s, c, f, d))
  ) : rs(o, l, p, m, i, n, s, c, f, d);
}
const Vu = [], W0 = 5;
let Vo = 0;
function Ks() {
  const o = dl();
  for (; Vu.length && dl() - o < W0; )
    Vu.shift()();
  Vo = Vu.length ? setTimeout(Ks, 0) : 0;
}
const P0 = (...o) => new Promise((l, p) => {
  Vu.push(() => {
    const m = dl();
    try {
      wu.webgl.generateIntoCanvas(...o), l({ timing: dl() - m });
    } catch (i) {
      p(i);
    }
  }), Vo || (Vo = setTimeout(Ks, 0));
}), k0 = 4, I0 = 2e3, us = {};
let $0 = 0;
function rs(o, l, p, m, i, n, s, c, f, d) {
  const v = "TroikaTextSDFGenerator_JS_" + $0++ % k0;
  let y = us[v];
  return y || (y = us[v] = {
    workerModule: li({
      name: v,
      workerId: v,
      dependencies: [
        Qs,
        dl
      ],
      init(g, E) {
        const _ = g().javascript.generate;
        return function(...D) {
          const C = E();
          return {
            textureData: _(...D),
            timing: E() - C
          };
        };
      },
      getTransferables(g) {
        return [g.textureData.buffer];
      }
    }),
    requests: 0,
    idleTimer: null
  }), y.requests++, clearTimeout(y.idleTimer), y.workerModule(o, l, p, m, i, n).then(({ textureData: g, timing: E }) => {
    const _ = dl(), D = new Uint8Array(g.length * 4);
    for (let C = 0; C < g.length; C++)
      D[C * 4 + d] = g[C];
    return wu.webglUtils.renderImageData(s, D, c, f, o, l, 1 << 3 - d), E += dl() - _, --y.requests === 0 && (y.idleTimer = setTimeout(() => {
      O0(v);
    }, I0)), { timing: E };
  });
}
function e1(o) {
  o._warm || (wu.webgl.isSupported(o), o._warm = !0);
}
const t1 = wu.webglUtils.resizeWebGLCanvasWithoutClearing, Xi = {
  unicodeFontsURL: null,
  sdfGlyphSize: 64,
  sdfMargin: 1 / 16,
  sdfExponent: 9,
  textureWidth: 2048
}, a1 = /* @__PURE__ */ new Ku();
function ti() {
  return (self.performance || Date).now();
}
const os = /* @__PURE__ */ Object.create(null);
function Zs(o, l) {
  o = i1({}, o);
  const p = ti(), m = [];
  if (o.font && m.push({ label: "user", src: u1(o.font) }), o.font = m, o.text = "" + o.text, o.sdfGlyphSize = o.sdfGlyphSize || Xi.sdfGlyphSize, o.unicodeFontsURL = o.unicodeFontsURL || Xi.unicodeFontsURL, o.colorRanges != null) {
    let g = {};
    for (let E in o.colorRanges)
      if (o.colorRanges.hasOwnProperty(E)) {
        let _ = o.colorRanges[E];
        typeof _ != "number" && (_ = a1.set(_).getHex()), g[E] = _;
      }
    o.colorRanges = g;
  }
  Object.freeze(o);
  const { textureWidth: i, sdfExponent: n } = Xi, { sdfGlyphSize: s } = o, c = i / s * 4;
  let f = os[s];
  if (!f) {
    const g = document.createElement("canvas");
    g.width = i, g.height = s * 256 / c, f = os[s] = {
      glyphCount: 0,
      sdfGlyphSize: s,
      sdfCanvas: g,
      sdfTexture: new cv(
        g,
        void 0,
        void 0,
        void 0,
        Cc,
        Cc
      ),
      contextLost: !1,
      glyphsByFont: /* @__PURE__ */ new Map()
    }, f.sdfTexture.generateMipmaps = !1, n1(f);
  }
  const { sdfTexture: d, sdfCanvas: v } = f;
  Ws(o).then((g) => {
    const { glyphIds: E, glyphFontIndices: _, fontData: D, glyphPositions: C, fontSize: U, timings: b } = g, z = [], R = new Float32Array(E.length * 4);
    let x = 0, H = 0;
    const G = ti(), L = D.map((X) => {
      let Y = f.glyphsByFont.get(X.src);
      return Y || f.glyphsByFont.set(X.src, Y = /* @__PURE__ */ new Map()), Y;
    });
    E.forEach((X, Y) => {
      const le = _[Y], { src: j, unitsPerEm: P } = D[le];
      let ee = L[le].get(X);
      if (!ee) {
        const { path: V, pathBounds: Q } = g.glyphData[j][X], K = Math.max(Q[2] - Q[0], Q[3] - Q[1]) / s * (Xi.sdfMargin * s + 0.5), ne = f.glyphCount++, I = [
          Q[0] - K,
          Q[1] - K,
          Q[2] + K,
          Q[3] + K
        ];
        L[le].set(X, ee = { path: V, atlasIndex: ne, sdfViewBox: I }), z.push(ee);
      }
      const { sdfViewBox: Z } = ee, w = C[H++], T = C[H++], A = U / P;
      R[x++] = w + Z[0] * A, R[x++] = T + Z[1] * A, R[x++] = w + Z[2] * A, R[x++] = T + Z[3] * A, E[Y] = ee.atlasIndex;
    }), b.quads = (b.quads || 0) + (ti() - G);
    const W = ti();
    b.sdf = {};
    const q = v.height, ae = Math.ceil(f.glyphCount / c), O = Math.pow(2, Math.ceil(Math.log2(ae * s)));
    O > q && (console.info(`Increasing SDF texture size ${q}->${O}`), t1(v, i, O), d.dispose()), Promise.all(z.map(
      (X) => ws(X, f, o.gpuAccelerateSDF).then(({ timing: Y }) => {
        b.sdf[X.atlasIndex] = Y;
      })
    )).then(() => {
      z.length && !f.contextLost && (Js(f), d.needsUpdate = !0), b.sdfTotal = ti() - W, b.total = ti() - p, l(Object.freeze({
        parameters: o,
        sdfTexture: d,
        sdfGlyphSize: s,
        sdfExponent: n,
        glyphBounds: R,
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
    f.contextLost || e1(v);
  });
}
function ws({ path: o, atlasIndex: l, sdfViewBox: p }, { sdfGlyphSize: m, sdfCanvas: i, contextLost: n }, s) {
  if (n)
    return Promise.resolve({ timing: -1 });
  const { textureWidth: c, sdfExponent: f } = Xi, d = Math.max(p[2] - p[0], p[3] - p[1]), v = Math.floor(l / 4), y = v % (c / m) * m, g = Math.floor(v / (c / m)) * m, E = l % 4;
  return J0(m, m, o, p, d, f, i, y, g, E, s);
}
function n1(o) {
  const l = o.sdfCanvas;
  l.addEventListener("webglcontextlost", (p) => {
    console.log("Context Lost", p), p.preventDefault(), o.contextLost = !0;
  }), l.addEventListener("webglcontextrestored", (p) => {
    console.log("Context Restored", p), o.contextLost = !1;
    const m = [];
    o.glyphsByFont.forEach((i) => {
      i.forEach((n) => {
        m.push(ws(n, o, !0));
      });
    }), Promise.all(m).then(() => {
      Js(o), o.sdfTexture.needsUpdate = !0;
    });
  });
}
function l1({ font: o, characters: l, sdfGlyphSize: p }, m) {
  let i = Array.isArray(l) ? l.join(`
`) : "" + l;
  Zs({ font: o, sdfGlyphSize: p, text: i }, m);
}
function i1(o, l) {
  for (let p in l)
    l.hasOwnProperty(p) && (o[p] = l[p]);
  return o;
}
let Nu;
function u1(o) {
  return Nu || (Nu = typeof document > "u" ? {} : document.createElement("a")), Nu.href = o, Nu.href;
}
function Js(o) {
  if (typeof createImageBitmap != "function") {
    console.info("Safari<15: applying SDF canvas workaround");
    const { sdfCanvas: l, sdfTexture: p } = o, { width: m, height: i } = l, n = o.sdfCanvas.getContext("webgl");
    let s = p.image.data;
    (!s || s.length !== m * i * 4) && (s = new Uint8Array(m * i * 4), p.image = { width: m, height: i, data: s }, p.flipY = !1, p.isDataTexture = !0), n.readPixels(0, 0, m, i, n.RGBA, n.UNSIGNED_BYTE, s);
  }
}
const r1 = /* @__PURE__ */ li({
  name: "Typesetter",
  dependencies: [
    w0,
    Z0,
    x0
  ],
  init(o, l, p) {
    return o(l, p());
  }
}), Ws = /* @__PURE__ */ li({
  name: "Typesetter",
  dependencies: [
    r1
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
Ws.onMainThread;
const fs = {};
function o1(o) {
  let l = fs[o];
  return l || (l = fs[o] = new qo(1, 1, o, o).translate(0.5, 0.5, 0)), l;
}
const f1 = "aTroikaGlyphBounds", cs = "aTroikaGlyphIndex", c1 = "aTroikaGlyphColor";
class s1 extends rv {
  constructor() {
    super(), this.detail = 1, this.curveRadius = 0, this.groups = [
      { start: 0, count: 1 / 0, materialIndex: 0 },
      { start: 0, count: 1 / 0, materialIndex: 1 }
    ], this.boundingSphere = new ov(), this.boundingBox = new ps();
  }
  computeBoundingSphere() {
  }
  computeBoundingBox() {
  }
  set detail(l) {
    if (l !== this._detail) {
      this._detail = l, (typeof l != "number" || l < 1) && (l = 1);
      let p = o1(l);
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
  updateGlyphs(l, p, m, i, n) {
    this.updateAttributeData(f1, l, 4), this.updateAttributeData(cs, p, 1), this.updateAttributeData(c1, n, 3), this._blockBounds = m, this._chunkedBounds = i, this.instanceCount = p.length, this._updateBounds();
  }
  _updateBounds() {
    const l = this._blockBounds;
    if (l) {
      const { curveRadius: p, boundingBox: m } = this;
      if (p) {
        const { PI: i, floor: n, min: s, max: c, sin: f, cos: d } = Math, v = i / 2, y = i * 2, g = Math.abs(p), E = l[0] / g, _ = l[2] / g, D = n((E + v) / y) !== n((_ + v) / y) ? -g : s(f(E) * g, f(_) * g), C = n((E - v) / y) !== n((_ - v) / y) ? g : c(f(E) * g, f(_) * g), U = n((E + i) / y) !== n((_ + i) / y) ? g * 2 : c(g - d(E) * g, g - d(_) * g);
        m.min.set(D, l[1], p < 0 ? -U : 0), m.max.set(C, l[3], p < 0 ? 0 : U);
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
    let p = this.getAttribute(cs).count, m = this._chunkedBounds;
    if (m)
      for (let i = m.length; i--; ) {
        p = m[i].end;
        let n = m[i].rect;
        if (n[1] < l.w && n[3] > l.y && n[0] < l.z && n[2] > l.x)
          break;
      }
    this.instanceCount = p;
  }
  /**
   * Utility for updating instance attributes with automatic resizing
   */
  updateAttributeData(l, p, m) {
    const i = this.getAttribute(l);
    p ? i && i.array.length === p.length ? (i.array.set(p), i.needsUpdate = !0) : (this.setAttribute(l, new fv(p, m)), delete this._maxInstanceCount, this.dispose()) : i && this.deleteAttribute(l);
  }
}
const d1 = `
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
`, h1 = `
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
`, v1 = `
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
`, p1 = `
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
function m1(o) {
  const l = Ho(o, {
    chained: !0,
    extensions: {
      derivatives: !0
    },
    uniforms: {
      uTroikaSDFTexture: { value: null },
      uTroikaSDFTextureSize: { value: new Lu() },
      uTroikaSDFGlyphSize: { value: 0 },
      uTroikaSDFExponent: { value: 0 },
      uTroikaTotalBounds: { value: new Rc(0, 0, 0, 0) },
      uTroikaClipRect: { value: new Rc(0, 0, 0, 0) },
      uTroikaEdgeOffset: { value: 0 },
      uTroikaFillOpacity: { value: 1 },
      uTroikaPositionOffset: { value: new Lu() },
      uTroikaCurveRadius: { value: 0 },
      uTroikaBlurRadius: { value: 0 },
      uTroikaStrokeWidth: { value: 0 },
      uTroikaStrokeColor: { value: new Ku() },
      uTroikaStrokeOpacity: { value: 1 },
      uTroikaOrient: { value: new sv() },
      uTroikaUseGlyphColors: { value: !0 },
      uTroikaSDFDebug: { value: !1 }
    },
    vertexDefs: d1,
    vertexTransform: h1,
    fragmentDefs: v1,
    fragmentColorTransform: p1,
    customRewriter({ vertexShader: p, fragmentShader: m }) {
      let i = /\buniform\s+vec3\s+diffuse\b/;
      return i.test(m) && (m = m.replace(i, "varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g, "vTroikaGlyphColor"), i.test(p) || (p = p.replace(
        Fs,
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
const Ko = /* @__PURE__ */ new iv({
  color: 16777215,
  side: dv,
  transparent: !0
}), ss = 8421504, ds = /* @__PURE__ */ new uv(), Bu = /* @__PURE__ */ new Yo(), Do = /* @__PURE__ */ new Yo(), qi = [], y1 = /* @__PURE__ */ new Yo(), Ao = "+x+y";
function hs(o) {
  return Array.isArray(o) ? o[0] : o;
}
let Ps = () => {
  const o = new Lo(
    new qo(1, 1),
    Ko
  );
  return Ps = () => o, o;
}, ks = () => {
  const o = new Lo(
    new qo(1, 1, 32, 1),
    Ko
  );
  return ks = () => o, o;
};
const g1 = { type: "syncstart" }, S1 = { type: "synccomplete" }, Is = [
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
], E1 = Is.concat(
  "material",
  "color",
  "depthOffset",
  "clipRect",
  "curveRadius",
  "orientation",
  "glyphGeometryDetail"
);
let $s = class extends Lo {
  constructor() {
    const l = new s1();
    super(l, null), this.text = "", this.anchorX = 0, this.anchorY = 0, this.curveRadius = 0, this.direction = "auto", this.font = null, this.unicodeFontsURL = null, this.fontSize = 0.1, this.fontWeight = "normal", this.fontStyle = "normal", this.lang = null, this.letterSpacing = 0, this.lineHeight = "normal", this.maxWidth = 1 / 0, this.overflowWrap = "normal", this.textAlign = "left", this.textIndent = 0, this.whiteSpace = "normal", this.material = null, this.color = null, this.colorRanges = null, this.outlineWidth = 0, this.outlineColor = 0, this.outlineOpacity = 1, this.outlineBlur = 0, this.outlineOffsetX = 0, this.outlineOffsetY = 0, this.strokeWidth = 0, this.strokeColor = ss, this.strokeOpacity = 1, this.fillOpacity = 1, this.depthOffset = 0, this.clipRect = null, this.orientation = Ao, this.glyphGeometryDetail = 1, this.sdfGlyphSize = null, this.gpuAccelerateSDF = !0, this.debugSDF = !1;
  }
  /**
   * Updates the text rendering according to the current text-related configuration properties.
   * This is an async process, so you can pass in a callback function to be executed when it
   * finishes.
   * @param {function} [callback]
   */
  sync(l) {
    this._needsSync && (this._needsSync = !1, this._isSyncing ? (this._queuedSyncs || (this._queuedSyncs = [])).push(l) : (this._isSyncing = !0, this.dispatchEvent(g1), Zs({
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
        m.forEach((i) => i && i());
      })), this.dispatchEvent(S1), l && l();
    })));
  }
  /**
   * Initiate a sync if needed - note it won't complete until next frame at the
   * earliest so if possible it's a good idea to call sync() manually as soon as
   * all the properties have been set.
   * @override
   */
  onBeforeRender(l, p, m, i, n, s) {
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
    return m1(l);
  }
  // Handler for automatically wrapping the base material with our upgrades. We do the wrapping
  // lazily on _read_ rather than write to avoid unnecessary wrapping on transient values.
  get material() {
    let l = this._derivedMaterial;
    const p = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = Ko.clone());
    if ((!l || !l.isDerivedFrom(p)) && (l = this._derivedMaterial = this.createDerivedMaterial(p), p.addEventListener("dispose", function m() {
      p.removeEventListener("dispose", m), l.dispose();
    })), this.hasOutline()) {
      let m = l._outlineMtl;
      return m || (m = l._outlineMtl = Object.create(l, {
        id: { value: l.id + 0.1 }
      }), m.isTextOutlineMaterial = !0, m.depthWrite = !1, m.map = null, l.addEventListener("dispose", function i() {
        l.removeEventListener("dispose", i), m.dispose();
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
    return hs(this.material).getDepthMaterial();
  }
  set customDepthMaterial(l) {
  }
  get customDistanceMaterial() {
    return hs(this.material).getDistanceMaterial();
  }
  set customDistanceMaterial(l) {
  }
  _prepareForRender(l) {
    const p = l.isTextOutlineMaterial, m = l.uniforms, i = this.textRenderInfo;
    if (i) {
      const { sdfTexture: c, blockBounds: f } = i;
      m.uTroikaSDFTexture.value = c, m.uTroikaSDFTextureSize.value.set(c.image.width, c.image.height), m.uTroikaSDFGlyphSize.value = i.sdfGlyphSize, m.uTroikaSDFExponent.value = i.sdfExponent, m.uTroikaTotalBounds.value.fromArray(f), m.uTroikaUseGlyphColors.value = !p && !!i.glyphColors;
      let d = 0, v = 0, y = 0, g, E, _, D = 0, C = 0;
      if (p) {
        let { outlineWidth: b, outlineOffsetX: z, outlineOffsetY: R, outlineBlur: x, outlineOpacity: H } = this;
        d = this._parsePercent(b) || 0, v = Math.max(0, this._parsePercent(x) || 0), g = H, D = this._parsePercent(z) || 0, C = this._parsePercent(R) || 0;
      } else
        y = Math.max(0, this._parsePercent(this.strokeWidth) || 0), y && (_ = this.strokeColor, m.uTroikaStrokeColor.value.set(_ ?? ss), E = this.strokeOpacity, E == null && (E = 1)), g = this.fillOpacity;
      m.uTroikaEdgeOffset.value = d, m.uTroikaPositionOffset.value.set(D, C), m.uTroikaBlurRadius.value = v, m.uTroikaStrokeWidth.value = y, m.uTroikaStrokeOpacity.value = E, m.uTroikaFillOpacity.value = g ?? 1, m.uTroikaCurveRadius.value = this.curveRadius || 0;
      let U = this.clipRect;
      if (U && Array.isArray(U) && U.length === 4)
        m.uTroikaClipRect.value.fromArray(U);
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
      const c = l.hasOwnProperty("color") ? l.color : l.color = new Ku();
      (n !== c._input || typeof n == "object") && c.set(c._input = n);
    }
    let s = this.orientation || Ao;
    if (s !== l._orientation) {
      let c = m.uTroikaOrient.value;
      s = s.replace(/[^-+xyz]/g, "");
      let f = s !== Ao && s.match(/^([-+])([xyz])([-+])([xyz])$/);
      if (f) {
        let [, d, v, y, g] = f;
        Bu.set(0, 0, 0)[v] = d === "-" ? 1 : -1, Do.set(0, 0, 0)[g] = y === "-" ? -1 : 1, ds.lookAt(y1, Bu.cross(Do), Do), c.setFromMatrix4(ds);
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
  localPositionToTextCoords(l, p = new Lu()) {
    p.copy(l);
    const m = this.curveRadius;
    return m && (p.x = Math.atan2(l.x, Math.abs(m) - Math.abs(l.z)) * Math.abs(m)), p;
  }
  /**
   * Translate a point in world space to an x/y in the text plane.
   */
  worldPositionToTextCoords(l, p = new Lu()) {
    return Bu.copy(l), this.localPositionToTextCoords(this.worldToLocal(Bu), p);
  }
  /**
   * @override Custom raycasting to test against the whole text block's max rectangular bounds
   * TODO is there any reason to make this more granular, like within individual line or glyph rects?
   */
  raycast(l, p) {
    const { textRenderInfo: m, curveRadius: i } = this;
    if (m) {
      const n = m.blockBounds, s = i ? ks() : Ps(), c = s.geometry, { position: f, uv: d } = c.attributes;
      for (let v = 0; v < d.count; v++) {
        let y = n[0] + d.getX(v) * (n[2] - n[0]);
        const g = n[1] + d.getY(v) * (n[3] - n[1]);
        let E = 0;
        i && (E = i - Math.cos(y / i) * i, y = Math.sin(y / i) * i), f.setXYZ(v, y, g, E);
      }
      c.boundingSphere = this.geometry.boundingSphere, c.boundingBox = this.geometry.boundingBox, s.matrixWorld = this.matrixWorld, s.material.side = this.material.side, qi.length = 0, s.raycast(l, qi);
      for (let v = 0; v < qi.length; v++)
        qi[v].object = this, p.push(qi[v]);
    }
  }
  copy(l) {
    const p = this.geometry;
    return super.copy(l), this.geometry = p, E1.forEach((m) => {
      this[m] = l[m];
    }), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
Is.forEach((o) => {
  const l = "_private_" + o;
  Object.defineProperty($s.prototype, o, {
    get() {
      return this[l];
    },
    set(p) {
      p !== this[l] && (this[l] = p, this._needsSync = !0);
    }
  });
});
new ps();
new Ku();
const ed = /* @__PURE__ */ qe.forwardRef(({
  sdfGlyphSize: o = 64,
  anchorX: l = "center",
  anchorY: p = "middle",
  font: m,
  fontSize: i = 1,
  children: n,
  characters: s,
  onSync: c,
  ...f
}, d) => {
  const v = xs(({
    invalidate: _
  }) => _), [y] = qe.useState(() => new $s()), [g, E] = qe.useMemo(() => {
    const _ = [];
    let D = "";
    return qe.Children.forEach(n, (C) => {
      typeof C == "string" || typeof C == "number" ? D += C : _.push(C);
    }), [_, D];
  }, [n]);
  return Ss(() => new Promise((_) => l1({
    font: m,
    characters: s
  }, _)), ["troika-text", m, s]), qe.useLayoutEffect(() => void y.sync(() => {
    v(), c && c(y);
  })), qe.useEffect(() => () => y.dispose(), [y]), /* @__PURE__ */ qe.createElement("primitive", Bo({
    object: y,
    ref: d,
    font: m,
    text: E,
    anchorX: l,
    anchorY: p,
    fontSize: i,
    sdfGlyphSize: o
  }, f), g);
});
function b1() {
  const p = [];
  for (let i = 1; i <= 12; i++) {
    const n = (90 - i * 30) * (Math.PI / 180), s = Math.cos(n) * 0.133 * 0.85, c = Math.sin(n) * 0.133 * 0.85;
    p.push(
      /* @__PURE__ */ ce(
        ed,
        {
          position: [s, c + 85e-4, 1e-3],
          fontSize: 0.013,
          color: "#ffffffff",
          anchorX: "center",
          anchorY: "center",
          children: i
        },
        `num-${i}`
      )
    );
  }
  const m = [];
  for (let i = 0; i < 60; i++) {
    const n = (90 - i * 6) * (Math.PI / 180), s = i % 5 === 0, c = 0.133 * 0.985, f = s ? c - 0.133 * 0.06 : c - 0.133 * 0.03, d = (c + f) / 2, v = c - f, y = s ? 0.133 * 0.01 : 0.133 * 5e-3, g = Math.cos(n) * d, E = Math.sin(n) * d, _ = n - Math.PI / 2;
    m.push(
      /* @__PURE__ */ ut("mesh", { position: [g, E, 0], rotation: [0, 0, _], children: [
        /* @__PURE__ */ ce("boxGeometry", { args: [y, v, 1e-3] }),
        /* @__PURE__ */ ce("meshBasicMaterial", { color: "#ffffffff" })
      ] }, `tick-${i}`)
    );
  }
  return /* @__PURE__ */ ut("group", { children: [
    /* @__PURE__ */ ut("mesh", { children: [
      /* @__PURE__ */ ce("ringGeometry", { args: [0.133 * 0.985, 0.133, 64] }),
      /* @__PURE__ */ ce("meshBasicMaterial", { color: "#ffffffff" })
    ] }),
    p,
    m
  ] });
}
function T1() {
  return /* @__PURE__ */ ut("group", { children: [
    /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -6, -4], children: [
      /* @__PURE__ */ ce("planeGeometry", { args: [200, 100] }),
      " ",
      /* @__PURE__ */ ce("meshPhongMaterial", { color: "#489147" })
    ] }),
    /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -1.139, -5.76], children: [
      /* @__PURE__ */ ce("circleGeometry", { args: [1, 64] }),
      /* @__PURE__ */ ce("meshPhongMaterial", { color: "#DEB887" })
    ] }),
    /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, Math.PI], position: [0, -1.138, -5.6], children: [
      /* @__PURE__ */ ce("shapeGeometry", { args: [
        (() => {
          const o = new Ne.Shape();
          return o.moveTo(-0.2, 0.2), o.lineTo(0.2, 0.2), o.lineTo(0.2, -0.24), o.lineTo(0, -0.56), o.lineTo(-0.2, -0.24), o.lineTo(-0.2, 0.2), o;
        })()
      ] }),
      /* @__PURE__ */ ce("meshBasicMaterial", { color: "white" })
    ] }),
    /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, -Math.PI / 4], position: [-3, -1.049, -2.3], children: [
      /* @__PURE__ */ ce("planeGeometry", { args: [0.02, 7] }),
      /* @__PURE__ */ ce("meshBasicMaterial", { color: "white" })
    ] }),
    /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, Math.PI / 4], position: [3, -1.049, -2.3], children: [
      /* @__PURE__ */ ce("planeGeometry", { args: [0.02, 7] }),
      /* @__PURE__ */ ce("meshBasicMaterial", { color: "white" })
    ] }),
    /* @__PURE__ */ ut("group", { position: [0.45, -1.137, -5.6], children: [
      /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0.4], children: [
        /* @__PURE__ */ ce("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ ce("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, -0.4], children: [
        /* @__PURE__ */ ce("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ ce("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [-0.15, 0, 0], children: [
        /* @__PURE__ */ ce("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ ce("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0.15, 0, 0], children: [
        /* @__PURE__ */ ce("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ ce("meshBasicMaterial", { color: "white" })
      ] })
    ] }),
    /* @__PURE__ */ ut("group", { position: [-0.45, -1.137, -5.6], children: [
      /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0.4], children: [
        /* @__PURE__ */ ce("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ ce("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, -0.4], children: [
        /* @__PURE__ */ ce("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ ce("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [-0.15, 0, 0], children: [
        /* @__PURE__ */ ce("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ ce("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0.15, 0, 0], children: [
        /* @__PURE__ */ ce("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ ce("meshBasicMaterial", { color: "white" })
      ] })
    ] })
  ] });
}
function _1() {
  const o = Qi(), l = Qi(), p = Qi();
  return Ns((m) => {
    const i = m.clock.elapsedTime;
    o.current && o.current.scale.setScalar(0.5 + Math.max(0, Math.sin(i * 3)) * 0.5), l.current && l.current.scale.setScalar(0.5 + Math.max(0, Math.sin(i * 3 - 0.5)) * 0.5), p.current && p.current.scale.setScalar(0.5 + Math.max(0, Math.sin(i * 3 - 1)) * 0.5);
  }), /* @__PURE__ */ ut("group", { children: [
    /* @__PURE__ */ ce(
      ed,
      {
        position: [0, 0.01, 0],
        fontSize: 8e-3,
        color: "#666666",
        anchorX: "center",
        anchorY: "center",
        children: "Ball loading"
      }
    ),
    /* @__PURE__ */ ut("mesh", { ref: o, position: [-8e-3, -0.01, 0], children: [
      /* @__PURE__ */ ce("sphereGeometry", { args: [2e-3, 8, 8] }),
      /* @__PURE__ */ ce("meshBasicMaterial", { color: "#999999" })
    ] }),
    /* @__PURE__ */ ut("mesh", { ref: l, position: [0, -0.01, 0], children: [
      /* @__PURE__ */ ce("sphereGeometry", { args: [2e-3, 8, 8] }),
      /* @__PURE__ */ ce("meshBasicMaterial", { color: "#999999" })
    ] }),
    /* @__PURE__ */ ut("mesh", { ref: p, position: [8e-3, -0.01, 0], children: [
      /* @__PURE__ */ ce("sphereGeometry", { args: [2e-3, 8, 8] }),
      /* @__PURE__ */ ce("meshBasicMaterial", { color: "#999999" })
    ] })
  ] });
}
function U1() {
  return /* @__PURE__ */ ut("group", { children: [
    /* @__PURE__ */ ut("mesh", { rotation: [0, 0, Math.PI / 2], children: [
      /* @__PURE__ */ ce("cylinderGeometry", { args: [3e-3, 3e-3, 0.3, 32] }),
      /* @__PURE__ */ ce("meshStandardMaterial", { color: "red" })
    ] }),
    /* @__PURE__ */ ut("mesh", { position: [0.15, 0, 0], rotation: [0, 0, -Math.PI / 2], children: [
      /* @__PURE__ */ ce("coneGeometry", { args: [9e-3, 0.03, 32] }),
      /* @__PURE__ */ ce("meshStandardMaterial", { color: "red" })
    ] })
  ] });
}
function M1({ spinRate: o, playing: l, spinAxis: p, currentSeamLat: m, currentSeamLon: i, useSeamOrientation: n, resetSpin: s, showRod: c, showStencil: f, gyro_degree: d }) {
  const v = Qu(
    Oc,
    "/models/baseball-v2.glb",
    (U) => {
      U.setMeshoptDecoder(zc);
    }
  ), y = Qu(
    Oc,
    "/models/seam_stamper.glb",
    (U) => {
      U.setMeshoptDecoder(zc);
    }
  ), g = Ua.useRef(), E = Ua.useRef(), _ = Ua.useRef(), D = Ua.useRef(), { invalidate: C } = xs();
  return Pt(() => {
    y.scene && y.scene.traverse((U) => {
      U.isMesh && U.material && (U.material.color.set("#686868"), U.material.needsUpdate = !0);
    });
  }, [y]), Pt(() => {
    v.scene && v.scene.rotation.set(Math.PI / 2, 3 * Math.PI / 2, 0);
  }, [v]), Pt(() => {
    g.current && (g.current.quaternion.identity(), C());
  }, [s, C]), Pt(() => {
    if (E.current) {
      if (E.current.quaternion.identity(), n && m != null && i != null && !isNaN(m) && !isNaN(i)) {
        const U = Ne.MathUtils.degToRad(m), b = Ne.MathUtils.degToRad(i), z = Math.cos(U) * Math.sin(b), R = Math.sin(U), x = Math.cos(U) * Math.cos(b), H = new Ne.Vector3(-z, R, x).normalize(), G = new Ne.Vector3(1, 0, 0), L = new Ne.Quaternion().setFromUnitVectors(
          G,
          H
        );
        E.current.quaternion.copy(L);
      }
      C();
    }
  }, [n, m, i, C]), Pt(() => {
    if (_.current && p) {
      const U = new Ne.Vector3(1, 0, 0), b = new Ne.Quaternion().setFromUnitVectors(
        U,
        p.clone().normalize()
      );
      _.current.quaternion.copy(b), C();
    }
  }, [p, C]), Pt(() => {
    if (D.current) {
      if (D.current.quaternion.identity(), d != null && d < -45) {
        const U = new Ne.Quaternion();
        U.setFromAxisAngle(new Ne.Vector3(0, 1, 0), -Math.PI / 2), D.current.quaternion.copy(U);
      } else if (d != null && d > 45) {
        const U = new Ne.Quaternion();
        U.setFromAxisAngle(new Ne.Vector3(0, 1, 0), Math.PI / 2), D.current.quaternion.copy(U);
      }
      C();
    }
  }, [d, C]), Ns((U, b) => {
    if (l && g.current) {
      const R = o * 2 * Math.PI / 60 * b, x = new Ne.Vector3(1, 0, 0), H = new Ne.Quaternion();
      H.setFromAxisAngle(x, R), g.current.quaternion.multiplyQuaternions(H, g.current.quaternion);
    }
  }), /* @__PURE__ */ ce("group", { children: /* @__PURE__ */ ut("group", { ref: _, children: [
    c && /* @__PURE__ */ ce(U1, {}),
    /* @__PURE__ */ ce("group", { ref: D, children: f && /* @__PURE__ */ ce("primitive", { object: y.scene, scale: 2e-3 }) }),
    /* @__PURE__ */ ce("group", { ref: g, children: /* @__PURE__ */ ce("group", { ref: E, children: /* @__PURE__ */ ce("primitive", { object: v.scene, scale: 2.2 }) }) })
  ] }) });
}
function D1() {
  const [o, l] = ta(!0), [p, m] = ta(!0), [i, n] = ta(!0), [s, c] = ta(!0), [f, d] = ta(!1), [v, y] = ta([]), [g, E] = ta(null), [_, D] = ta(!1), [C, U] = ta(new Ne.Vector3(1, 0, 0)), [b, z] = ta(0), [R, x] = ta(0), [H, G] = ta(!1), [L, W] = ta(-58);
  Pt(() => {
    const T = (A) => {
      if (A.data?.type === "pitch_uid")
        console.log("Pitch UID changed:", A.data.value), E(A.data.value);
      else if (A.data?.type === "slider_update") {
        if ("spinVectorX" in A.data && "spinVectorY" in A.data && "spinVectorZ" in A.data) {
          const V = new Ne.Vector3(
            A.data.spinVectorX,
            A.data.spinVectorY,
            A.data.spinVectorZ
          ).normalize();
          W(A.data.spinGyro), console.log("Received spin vector - Tilt:", A.data.spinTilt, "Gyro:", A.data.spinGyro, "Vector:", V), U(V);
        }
        "ballX" in A.data && x(A.data.ballX), "ballY" in A.data && z(A.data.ballY);
      } else A.data?.type === "play_toggle" ? D(!!A.data.value) : A.data?.type === "reset_spin_rotation" ? G((V) => !V) : A.data?.type === "clock_toggle" ? l(!!A.data.value) : A.data?.type === "field_toggle" ? m(!!A.data.value) : A.data?.type === "rod_toggle" ? n(!!A.data.value) : A.data?.type === "stencil_toggle" ? c(!!A.data.value) : A.data?.type === "reset_ball_drag" && d(!!A.data.value);
    };
    return window.addEventListener("message", T), () => window.removeEventListener("message", T);
  }, []);
  const q = vs(() => !g || !v.length ? null : v.find((T) => T.PitchUID === g) || null, [g, v]);
  Pt(() => {
    if (q) {
      const T = new Ne.Vector3(
        q.spin_backspin,
        q.spin_sidespin,
        -q.spin_gyrospin
      ).normalize();
      U(T), z(q.seam_orientation_lat || 0), x(q.seam_orientation_lon || 0);
    }
  }, [q]), Pt(() => {
    const T = () => {
      window.dispatchEvent(new Event("resize"));
    }, A = new MutationObserver((V) => {
      V.forEach((Q) => {
        Q.attributeName === "class" && setTimeout(T, 350);
      });
    });
    return A.observe(document.body, { attributes: !0 }), () => A.disconnect();
  }, []);
  const ae = 50, O = Ua.useRef(), [X, Y] = Ua.useState(!1), [le, j] = Ua.useState({ x: 0, y: 0 }), P = Ua.useRef({ x: 0, y: 0 }), ee = (T) => {
    Y(!0), j({ x: T.clientX, y: T.clientY });
  }, Z = (T) => {
    if (!X || !O.current) return;
    d(!1);
    const A = T.clientX - le.x, V = T.clientY - le.y;
    P.current.y += A * 0.01, P.current.x += V * -0.01, O.current.rotation.order = "YXZ", O.current.rotation.y = P.current.y, O.current.rotation.x = P.current.x, j({ x: T.clientX, y: T.clientY });
  }, w = () => {
    Y(!1);
  };
  return Pt(() => {
    f && (P.current = { x: 0, y: 0 }, O.current && (O.current.rotation.x = 0, O.current.rotation.y = 0), d(!1));
  }, [f]), /* @__PURE__ */ ce(
    "div",
    {
      style: { width: "100%", height: "100vh", position: "relative" },
      onMouseDown: ee,
      onMouseMove: Z,
      onMouseUp: w,
      onMouseLeave: w,
      children: /* @__PURE__ */ ut(
        M0,
        {
          camera: { position: [0, 0, 0.47], fov: 50 },
          style: { width: "100%", height: "100%" },
          onCreated: ({ gl: T, camera: A }) => {
            const V = T.domElement.parentElement;
            T.setSize(V.clientWidth, V.clientHeight), A.aspect = V.clientWidth / V.clientHeight, A.updateProjectionMatrix();
          },
          children: [
            /* @__PURE__ */ ut("mesh", { scale: [50, 50, 50], children: [
              /* @__PURE__ */ ce("sphereGeometry", { args: [1, 32, 32] }),
              /* @__PURE__ */ ce("meshBasicMaterial", { color: "#000000", side: Ne.BackSide })
            ] }),
            /* @__PURE__ */ ce("ambientLight", { intensity: 1 }),
            /* @__PURE__ */ ce("directionalLight", { position: [0, 0, 0.3], intensity: 1 }),
            p && /* @__PURE__ */ ce(T1, {}),
            o && /* @__PURE__ */ ce(b1, {}),
            /* @__PURE__ */ ce("group", { ref: O, children: /* @__PURE__ */ ce(Ih, { fallback: /* @__PURE__ */ ce(_1, {}), children: /* @__PURE__ */ ce(
              M1,
              {
                spinRate: ae,
                playing: _,
                spinAxis: C,
                currentSeamLat: b,
                currentSeamLon: R,
                useSeamOrientation: !0,
                resetSpin: H,
                showRod: i,
                showStencil: s,
                gyro_degree: L
              }
            ) }) })
          ]
        }
      )
    }
  );
}
const A1 = document.getElementById("root"), C1 = $h(A1);
C1.render(/* @__PURE__ */ ce(D1, {}));
