import { jsx as he, jsxs as ut } from "https://esm.sh/react/jsx-runtime";
import * as qe from "https://esm.sh/react";
import sl, { useState as Va, useRef as Qi, useEffect as Ta, useMemo as ds, Suspense as Ph } from "https://esm.sh/react";
import { createRoot as kh } from "https://esm.sh/react-dom/client";
import * as Le from "https://esm.sh/three";
import { MeshDistanceMaterial as Ih, MeshDepthMaterial as $h, RGBADepthPacking as ev, UniformsUtils as tv, ShaderChunk as av, Mesh as Vo, MeshBasicMaterial as nv, Color as Fu, Vector3 as Lo, Matrix4 as lv, Vector2 as Lu, InstancedBufferGeometry as iv, Sphere as uv, Box3 as hs, InstancedBufferAttribute as rv, Texture as ov, LinearFilter as Cc, Matrix3 as fv, Vector4 as Oc, DoubleSide as cv, PlaneGeometry as Yo } from "https://esm.sh/three";
import { GLTFLoader as sv } from "https://esm.sh/three/examples/jsm/loaders/GLTFLoader";
import { MeshoptDecoder as dv } from "https://esm.sh/three/examples/jsm/libs/meshopt_decoder.module.js";
function vs(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var ro = { exports: {} }, un = {};
/**
 * @license React
 * react-reconciler-constants.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc;
function hv() {
  return Rc || (Rc = 1, un.ConcurrentRoot = 1, un.ContinuousEventPriority = 8, un.DefaultEventPriority = 32, un.DiscreteEventPriority = 2, un.IdleEventPriority = 268435456, un.LegacyRoot = 0, un.NoEventPriority = 0), un;
}
var zc;
function vv() {
  return zc || (zc = 1, ro.exports = hv()), ro.exports;
}
var Gu = vv(), oo = { exports: {} }, fo = {}, co = { exports: {} }, so = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xc;
function pv() {
  if (xc) return so;
  xc = 1;
  var o = sl;
  function l(y, g) {
    return y === g && (y !== 0 || 1 / y === 1 / g) || y !== y && g !== g;
  }
  var p = typeof Object.is == "function" ? Object.is : l, m = o.useState, i = o.useEffect, n = o.useLayoutEffect, s = o.useDebugValue;
  function c(y, g) {
    var E = g(), T = m({ inst: { value: E, getSnapshot: g } }), M = T[0].inst, D = T[1];
    return n(
      function() {
        M.value = E, M.getSnapshot = g, f(M) && D({ inst: M });
      },
      [y, E, g]
    ), i(
      function() {
        return f(M) && D({ inst: M }), y(function() {
          f(M) && D({ inst: M });
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
  return so.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : v, so;
}
var Nc;
function mv() {
  return Nc || (Nc = 1, co.exports = pv()), co.exports;
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
var Bc;
function yv() {
  if (Bc) return fo;
  Bc = 1;
  var o = sl, l = mv();
  function p(d, v) {
    return d === v && (d !== 0 || 1 / d === 1 / v) || d !== d && v !== v;
  }
  var m = typeof Object.is == "function" ? Object.is : p, i = l.useSyncExternalStore, n = o.useRef, s = o.useEffect, c = o.useMemo, f = o.useDebugValue;
  return fo.useSyncExternalStoreWithSelector = function(d, v, y, g, E) {
    var T = n(null);
    if (T.current === null) {
      var M = { hasValue: !1, value: null };
      T.current = M;
    } else M = T.current;
    T = c(
      function() {
        function A(H) {
          if (!b) {
            if (b = !0, x = H, H = g(H), E !== void 0 && M.hasValue) {
              var G = M.value;
              if (E(G, H))
                return C = G;
            }
            return C = H;
          }
          if (G = C, m(x, H)) return G;
          var V = g(H);
          return E !== void 0 && E(G, V) ? (x = H, G) : (x = H, C = V);
        }
        var b = !1, x, C, O = y === void 0 ? null : y;
        return [
          function() {
            return A(v());
          },
          O === null ? void 0 : function() {
            return A(O());
          }
        ];
      },
      [v, y, g, E]
    );
    var D = i(d, T[0], T[1]);
    return s(
      function() {
        M.hasValue = !0, M.value = D;
      },
      [D]
    ), f(D), D;
  }, fo;
}
var Gc;
function gv() {
  return Gc || (Gc = 1, oo.exports = yv()), oo.exports;
}
var Sv = gv();
const Ev = /* @__PURE__ */ vs(Sv), jc = (o) => {
  let l;
  const p = /* @__PURE__ */ new Set(), m = (d, v) => {
    const y = typeof d == "function" ? d(l) : d;
    if (!Object.is(y, l)) {
      const g = l;
      l = v ?? (typeof y != "object" || y === null) ? y : Object.assign({}, l, y), p.forEach((E) => E(l, g));
    }
  }, i = () => l, c = { setState: m, getState: i, getInitialState: () => f, subscribe: (d) => (p.add(d), () => p.delete(d)) }, f = l = o(m, i, c);
  return c;
}, bv = ((o) => o ? jc(o) : jc), { useSyncExternalStoreWithSelector: Tv } = Ev, _v = (o) => o;
function Uv(o, l = _v, p) {
  const m = Tv(
    o.subscribe,
    o.getState,
    o.getInitialState,
    l,
    p
  );
  return sl.useDebugValue(m), m;
}
const Hc = (o, l) => {
  const p = bv(o), m = (i, n = l) => Uv(p, i, n);
  return Object.assign(m, p), m;
}, Mv = ((o, l) => o ? Hc(o, l) : Hc), Dv = (o) => typeof o == "object" && typeof o.then == "function", cl = [];
function ps(o, l, p = (m, i) => m === i) {
  if (o === l) return !0;
  if (!o || !l) return !1;
  const m = o.length;
  if (l.length !== m) return !1;
  for (let i = 0; i < m; i++) if (!p(o[i], l[i])) return !1;
  return !0;
}
function ms(o, l = null, p = !1, m = {}) {
  l === null && (l = [o]);
  for (const n of cl)
    if (ps(l, n.keys, n.equal)) {
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
      const n = cl.indexOf(i);
      n !== -1 && cl.splice(n, 1);
    },
    promise: (
      // Execute the promise
      (Dv(o) ? o : o(...l)).then((n) => {
        i.response = n, m.lifespan && m.lifespan > 0 && (i.timeout = setTimeout(i.remove, m.lifespan));
      }).catch((n) => i.error = n)
    )
  };
  if (cl.push(i), !p) throw i.promise;
}
const ys = (o, l, p) => ms(o, l, !1, p), Av = (o, l, p) => void ms(o, l, !0, p), Cv = (o) => {
  if (o === void 0 || o.length === 0) cl.splice(0, cl.length);
  else {
    const l = cl.find((p) => ps(o, p.keys, p.equal));
    l && l.remove();
  }
};
var ho = { exports: {} }, vo = { exports: {} }, po = { exports: {} }, mo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vc;
function Ov() {
  return Vc || (Vc = 1, (function(o) {
    function l(j, I) {
      var te = j.length;
      j.push(I);
      e: for (; 0 < te; ) {
        var J = te - 1 >>> 1, w = j[J];
        if (0 < i(w, I))
          j[J] = I, j[te] = w, te = J;
        else break e;
      }
    }
    function p(j) {
      return j.length === 0 ? null : j[0];
    }
    function m(j) {
      if (j.length === 0) return null;
      var I = j[0], te = j.pop();
      if (te !== I) {
        j[0] = te;
        e: for (var J = 0, w = j.length, _ = w >>> 1; J < _; ) {
          var R = 2 * (J + 1) - 1, K = j[R], q = R + 1, F = j[q];
          if (0 > i(K, te))
            q < w && 0 > i(F, K) ? (j[J] = F, j[q] = te, J = q) : (j[J] = K, j[R] = te, J = R);
          else if (q < w && 0 > i(F, te))
            j[J] = F, j[q] = te, J = q;
          else break e;
        }
      }
      return I;
    }
    function i(j, I) {
      var te = j.sortIndex - I.sortIndex;
      return te !== 0 ? te : j.id - I.id;
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
    var f = [], d = [], v = 1, y = null, g = 3, E = !1, T = !1, M = !1, D = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    function x(j) {
      for (var I = p(d); I !== null; ) {
        if (I.callback === null) m(d);
        else if (I.startTime <= j)
          m(d), I.sortIndex = I.expirationTime, l(f, I);
        else break;
        I = p(d);
      }
    }
    function C(j) {
      if (M = !1, x(j), !T)
        if (p(f) !== null)
          T = !0, Y();
        else {
          var I = p(d);
          I !== null && ie(C, I.startTime - j);
        }
    }
    var O = !1, H = -1, G = 5, V = -1;
    function W() {
      return !(o.unstable_now() - V < G);
    }
    function Q() {
      if (O) {
        var j = o.unstable_now();
        V = j;
        var I = !0;
        try {
          e: {
            T = !1, M && (M = !1, A(H), H = -1), E = !0;
            var te = g;
            try {
              t: {
                for (x(j), y = p(f); y !== null && !(y.expirationTime > j && W()); ) {
                  var J = y.callback;
                  if (typeof J == "function") {
                    y.callback = null, g = y.priorityLevel;
                    var w = J(
                      y.expirationTime <= j
                    );
                    if (j = o.unstable_now(), typeof w == "function") {
                      y.callback = w, x(j), I = !0;
                      break t;
                    }
                    y === p(f) && m(f), x(j);
                  } else m(f);
                  y = p(f);
                }
                if (y !== null) I = !0;
                else {
                  var _ = p(d);
                  _ !== null && ie(
                    C,
                    _.startTime - j
                  ), I = !1;
                }
              }
              break e;
            } finally {
              y = null, g = te, E = !1;
            }
            I = void 0;
          }
        } finally {
          I ? ne() : O = !1;
        }
      }
    }
    var ne;
    if (typeof b == "function")
      ne = function() {
        b(Q);
      };
    else if (typeof MessageChannel < "u") {
      var N = new MessageChannel(), L = N.port2;
      N.port1.onmessage = Q, ne = function() {
        L.postMessage(null);
      };
    } else
      ne = function() {
        D(Q, 0);
      };
    function Y() {
      O || (O = !0, ne());
    }
    function ie(j, I) {
      H = D(function() {
        j(o.unstable_now());
      }, I);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, o.unstable_continueExecution = function() {
      T || E || (T = !0, Y());
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
          var I = 3;
          break;
        default:
          I = g;
      }
      var te = g;
      g = I;
      try {
        return j();
      } finally {
        g = te;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(j, I) {
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
      var te = g;
      g = j;
      try {
        return I();
      } finally {
        g = te;
      }
    }, o.unstable_scheduleCallback = function(j, I, te) {
      var J = o.unstable_now();
      switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? J + te : J) : te = J, j) {
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
      return w = te + w, j = {
        id: v++,
        callback: I,
        priorityLevel: j,
        startTime: te,
        expirationTime: w,
        sortIndex: -1
      }, te > J ? (j.sortIndex = te, l(d, j), p(f) === null && j === p(d) && (M ? (A(H), H = -1) : M = !0, ie(C, te - J))) : (j.sortIndex = w, l(f, j), T || E || (T = !0, Y())), j;
    }, o.unstable_shouldYield = W, o.unstable_wrapCallback = function(j) {
      var I = g;
      return function() {
        var te = g;
        g = I;
        try {
          return j.apply(this, arguments);
        } finally {
          g = te;
        }
      };
    };
  })(mo)), mo;
}
var Lc;
function gs() {
  return Lc || (Lc = 1, po.exports = Ov()), po.exports;
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
var Yc;
function Rv() {
  return Yc || (Yc = 1, (function(o) {
    o.exports = function(l) {
      function p(e, t, a, u) {
        return new hd(e, t, a, u);
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
        return e === null || typeof e != "object" ? null : (e = wf && e[wf] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function s(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === Sd ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case Nl:
            return "Fragment";
          case xl:
            return "Portal";
          case Cr:
            return "Profiler";
          case Kf:
            return "StrictMode";
          case Rr:
            return "Suspense";
          case zr:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case yn:
              return (e.displayName || "Context") + ".Provider";
            case Zf:
              return (e._context.displayName || "Context") + ".Consumer";
            case Or:
              var t = e.render;
              return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case xr:
              return t = e.displayName || null, t !== null ? t : s(e.type) || "Memo";
            case gn:
              t = e._payload, e = e._init;
              try {
                return s(e(t));
              } catch {
              }
          }
        return null;
      }
      function c(e) {
        if (Nr === void 0)
          try {
            throw Error();
          } catch (a) {
            var t = a.stack.trim().match(/\n( *(at )?)/);
            Nr = t && t[1] || "", Wf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + Nr + e + Wf;
      }
      function f(e, t) {
        if (!e || Br) return "";
        Br = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var u = {
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
                    } catch (Ye) {
                      var pe = Ye;
                    }
                    Reflect.construct(e, [], ce);
                  } else {
                    try {
                      ce.call();
                    } catch (Ye) {
                      pe = Ye;
                    }
                    e.call(ce.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (Ye) {
                    pe = Ye;
                  }
                  (ce = e()) && typeof ce.catch == "function" && ce.catch(function() {
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
          var h = u.DetermineComponentFrameRoot(), S = h[0], U = h[1];
          if (S && U) {
            var B = S.split(`
`), P = U.split(`
`);
            for (r = u = 0; u < B.length && !B[u].includes("DetermineComponentFrameRoot"); )
              u++;
            for (; r < P.length && !P[r].includes(
              "DetermineComponentFrameRoot"
            ); )
              r++;
            if (u === B.length || r === P.length)
              for (u = B.length - 1, r = P.length - 1; 1 <= u && 0 <= r && B[u] !== P[r]; )
                r--;
            for (; 1 <= u && 0 <= r; u--, r--)
              if (B[u] !== P[r]) {
                if (u !== 1 || r !== 1)
                  do
                    if (u--, r--, 0 > r || B[u] !== P[r]) {
                      var re = `
` + B[u].replace(" at new ", " at ");
                      return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), re;
                    }
                  while (1 <= u && 0 <= r);
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
            for (var S = !1, U = r.child; U; ) {
              if (U === a) {
                S = !0, a = r, u = h;
                break;
              }
              if (U === u) {
                S = !0, u = r, a = h;
                break;
              }
              U = U.sibling;
            }
            if (!S) {
              for (U = h.child; U; ) {
                if (U === a) {
                  S = !0, a = h, u = r;
                  break;
                }
                if (U === u) {
                  S = !0, u = h, a = r;
                  break;
                }
                U = U.sibling;
              }
              if (!S) throw Error(i(189));
            }
          }
          if (a.alternate !== u) throw Error(i(190));
        }
        if (a.tag !== 3) throw Error(i(188));
        return a.stateNode.current === a ? e : t;
      }
      function T(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null; ) {
          if (t = T(e), t !== null) return t;
          e = e.sibling;
        }
        return null;
      }
      function M(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null; ) {
          if (e.tag !== 4 && (t = M(e), t !== null))
            return t;
          e = e.sibling;
        }
        return null;
      }
      function D(e) {
        return { current: e };
      }
      function A(e) {
        0 > Gl || (e.current = Yr[Gl], Yr[Gl] = null, Gl--);
      }
      function b(e, t) {
        Gl++, Yr[Gl] = e.current, e.current = t;
      }
      function x(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Bh(e) / Gh | 0) | 0;
      }
      function C(e) {
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
      function O(e, t) {
        var a = e.pendingLanes;
        if (a === 0) return 0;
        var u = 0, r = e.suspendedLanes, h = e.pingedLanes, S = e.warmLanes;
        e = e.finishedLanes !== 0;
        var U = a & 134217727;
        return U !== 0 ? (a = U & ~r, a !== 0 ? u = C(a) : (h &= U, h !== 0 ? u = C(h) : e || (S = U & ~S, S !== 0 && (u = C(S))))) : (U = a & ~r, U !== 0 ? u = C(U) : h !== 0 ? u = C(h) : e || (S = a & ~S, S !== 0 && (u = C(S)))), u === 0 ? 0 : t !== 0 && t !== u && (t & r) === 0 && (r = u & -u, S = t & -t, r >= S || r === 32 && (S & 4194176) !== 0) ? t : u;
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
      function V() {
        var e = su;
        return su <<= 1, (su & 4194176) === 0 && (su = 128), e;
      }
      function W() {
        var e = du;
        return du <<= 1, (du & 62914560) === 0 && (du = 4194304), e;
      }
      function Q(e) {
        for (var t = [], a = 0; 31 > a; a++) t.push(e);
        return t;
      }
      function ne(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
      }
      function N(e, t, a, u, r, h) {
        var S = e.pendingLanes;
        e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
        var U = e.entanglements, B = e.expirationTimes, P = e.hiddenUpdates;
        for (a = S & ~a; 0 < a; ) {
          var re = 31 - ua(a), ce = 1 << re;
          U[re] = 0, B[re] = -1;
          var pe = P[re];
          if (pe !== null)
            for (P[re] = null, re = 0; re < pe.length; re++) {
              var Ye = pe[re];
              Ye !== null && (Ye.lane &= -536870913);
            }
          a &= ~ce;
        }
        u !== 0 && L(e, u, 0), h !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= h & ~(S & ~t));
      }
      function L(e, t, a) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var u = 31 - ua(t);
        e.entangledLanes |= t, e.entanglements[u] = e.entanglements[u] | 1073741824 | a & 4194218;
      }
      function Y(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a; ) {
          var u = 31 - ua(a), r = 1 << u;
          r & t | e[u] & t && (e[u] |= t), a &= ~r;
        }
      }
      function ie(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function j(e) {
        if (ra && typeof ra.onCommitFiberRoot == "function")
          try {
            ra.onCommitFiberRoot(
              Oi,
              e,
              void 0,
              (e.current.flags & 128) === 128
            );
          } catch {
          }
      }
      function I(e) {
        if (typeof Yh == "function" && qh(e), ra && typeof ra.setStrictMode == "function")
          try {
            ra.setStrictMode(Oi, e);
          } catch {
          }
      }
      function te(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
      }
      function J(e, t) {
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
      function _(e, t, a) {
        ma[ya++] = $a, ma[ya++] = en, ma[ya++] = $n, $n = e;
        var u = $a;
        e = en;
        var r = 32 - ua(u) - 1;
        u &= ~(1 << r), a += 1;
        var h = 32 - ua(t) + r;
        if (30 < h) {
          var S = r - r % 5;
          h = (u & (1 << S) - 1).toString(32), u >>= S, r -= S, $a = 1 << 32 - ua(t) + r | a << r | u, en = h + e;
        } else
          $a = 1 << h | a << r | u, en = e;
      }
      function R(e) {
        e.return !== null && (w(e, 1), _(e, 1, 0));
      }
      function K(e) {
        for (; e === vu; )
          vu = Hl[--Vl], Hl[Vl] = null, pu = Hl[--Vl], Hl[Vl] = null;
        for (; e === $n; )
          $n = ma[--ya], ma[ya] = null, en = ma[--ya], ma[ya] = null, $a = ma[--ya], ma[ya] = null;
      }
      function q(e, t) {
        b(En, t), b(Ri, e), b(Vt, null), e = Td(t), A(Vt), b(Vt, e);
      }
      function F() {
        A(Vt), A(Ri), A(En);
      }
      function ae(e) {
        e.memoizedState !== null && b(mu, e);
        var t = Vt.current, a = _d(t, e.type);
        t !== a && (b(Ri, e), b(Vt, a));
      }
      function k(e) {
        Ri.current === e && (A(Vt), A(Ri)), mu.current === e && (A(mu), Ia ? In._currentValue = Bl : In._currentValue2 = Bl);
      }
      function ee(e) {
        var t = Error(i(418, ""));
        throw Ne(J(t, e)), Qr;
      }
      function se(e, t) {
        if (!va) throw Error(i(175));
        mh(
          e.stateNode,
          e.type,
          e.memoizedProps,
          t,
          e
        ) || ee(e);
      }
      function Se(e) {
        for (wt = e.return; wt; )
          switch (wt.tag) {
            case 3:
            case 27:
              Ba = !0;
              return;
            case 5:
            case 13:
              Ba = !1;
              return;
            default:
              wt = wt.return;
          }
      }
      function oe(e) {
        if (!va || e !== wt) return !1;
        if (!Pe) return Se(e), Pe = !0, !1;
        var t = !1;
        if (Ft ? e.tag !== 3 && e.tag !== 27 && (e.tag !== 5 || cc(e.type) && !cu(e.type, e.memoizedProps)) && (t = !0) : e.tag !== 3 && (e.tag !== 5 || cc(e.type) && !cu(e.type, e.memoizedProps)) && (t = !0), t && Kt && ee(e), Se(e), e.tag === 13) {
          if (!va) throw Error(i(316));
          if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
          Kt = Sh(e);
        } else
          Kt = wt ? oc(e.stateNode) : null;
        return !0;
      }
      function le() {
        va && (Kt = wt = null, Pe = !1);
      }
      function Ne(e) {
        za === null ? za = [e] : za.push(e);
      }
      function Ce() {
        for (var e = Ll, t = Fr = Ll = 0; t < e; ) {
          var a = ga[t];
          ga[t++] = null;
          var u = ga[t];
          ga[t++] = null;
          var r = ga[t];
          ga[t++] = null;
          var h = ga[t];
          if (ga[t++] = null, u !== null && r !== null) {
            var S = u.pending;
            S === null ? r.next = r : (r.next = S.next, S.next = r), u.pending = r;
          }
          h !== 0 && fe(a, r, h);
        }
      }
      function me(e, t, a, u) {
        ga[Ll++] = e, ga[Ll++] = t, ga[Ll++] = a, ga[Ll++] = u, Fr |= u, e.lanes |= u, e = e.alternate, e !== null && (e.lanes |= u);
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
        r && t !== null && e.tag === 3 && (h = e.stateNode, r = 31 - ua(a), h = h.hiddenUpdates, e = h[r], e === null ? h[r] = [t] : e.push(t), t.lane = a | 536870912);
      }
      function ge(e) {
        if (50 < Li)
          throw Li = 0, uo = null, Error(i(185));
        for (var t = e.return; t !== null; )
          e = t, t = e.return;
        return e.tag === 3 ? e.stateNode : null;
      }
      function ve(e) {
        e !== Yl && e.next === null && (Yl === null ? yu = Yl = e : Yl = Yl.next = e), gu = !0, Kr || (Kr = !0, We(He));
      }
      function $(e, t) {
        if (!Zr && gu) {
          Zr = !0;
          do
            for (var a = !1, u = yu; u !== null; ) {
              if (e !== 0) {
                var r = u.pendingLanes;
                if (r === 0) var h = 0;
                else {
                  var S = u.suspendedLanes, U = u.pingedLanes;
                  h = (1 << 31 - ua(42 | e) + 1) - 1, h &= r & ~(S & ~U), h = h & 201326677 ? h & 201326677 | 1 : h ? h | 2 : 0;
                }
                h !== 0 && (a = !0, de(u, h));
              } else
                h = Je, h = O(
                  u,
                  u === st ? h : 0
                ), (h & 3) === 0 || H(u, h) || (a = !0, de(u, h));
              u = u.next;
            }
          while (a);
          Zr = !1;
        }
      }
      function He() {
        gu = Kr = !1;
        var e = 0;
        ql !== 0 && (zd() && (e = ql), ql = 0);
        for (var t = Ra(), a = null, u = yu; u !== null; ) {
          var r = u.next, h = ye(u, t);
          h === 0 ? (u.next = null, a === null ? yu = r : a.next = r, r === null && (Yl = a)) : (a = u, (e !== 0 || (h & 3) !== 0) && (gu = !0)), u = r;
        }
        $(e);
      }
      function ye(e, t) {
        for (var a = e.suspendedLanes, u = e.pingedLanes, r = e.expirationTimes, h = e.pendingLanes & -62914561; 0 < h; ) {
          var S = 31 - ua(h), U = 1 << S, B = r[S];
          B === -1 ? ((U & a) === 0 || (U & u) !== 0) && (r[S] = G(U, t)) : B <= t && (e.expiredLanes |= U), h &= ~U;
        }
        if (t = st, a = Je, a = O(
          e,
          e === t ? a : 0
        ), u = e.callbackNode, a === 0 || e === t && dt === 2 || e.cancelPendingCommit !== null)
          return u !== null && u !== null && qr(u), e.callbackNode = null, e.callbackPriority = 0;
        if ((a & 3) === 0 || H(e, a)) {
          if (t = a & -a, t === e.callbackPriority) return t;
          switch (u !== null && qr(u), ie(a)) {
            case 2:
            case 8:
              a = Vh;
              break;
            case 32:
              a = Xr;
              break;
            case 268435456:
              a = Lh;
              break;
            default:
              a = Xr;
          }
          return u = Ue.bind(null, e), a = hu(a, u), e.callbackPriority = t, e.callbackNode = a, t;
        }
        return u !== null && u !== null && qr(u), e.callbackPriority = 2, e.callbackNode = null, 2;
      }
      function Ue(e, t) {
        var a = e.callbackNode;
        if (Wn() && e.callbackNode !== a)
          return null;
        var u = Je;
        return u = O(
          e,
          e === st ? u : 0
        ), u === 0 ? null : (Uf(e, u, t), ye(e, Ra()), e.callbackNode != null && e.callbackNode === a ? Ue.bind(null, e) : null);
      }
      function de(e, t) {
        if (Wn()) return null;
        Uf(e, t, !0);
      }
      function We(e) {
        Hd ? Vd(function() {
          (ot & 6) !== 0 ? hu(Ec, e) : e();
        }) : hu(Ec, e);
      }
      function Te() {
        return ql === 0 && (ql = V()), ql;
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
        return Jr++, t.then(Oe, Oe), t;
      }
      function Oe() {
        if (--Jr === 0 && zi !== null) {
          Ql !== null && (Ql.status = "fulfilled");
          var e = zi;
          zi = null, Xl = 0, Ql = null;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
      }
      function Ve(e, t) {
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
      function Be(e) {
        return { lane: e, tag: 0, payload: null, callback: null, next: null };
      }
      function Ge(e, t, a) {
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
        if (wr) {
          var e = Ql;
          if (e !== null) throw e;
        }
      }
      function _t(e, t, a, u) {
        wr = !1;
        var r = e.updateQueue;
        bn = !1;
        var h = r.firstBaseUpdate, S = r.lastBaseUpdate, U = r.shared.pending;
        if (U !== null) {
          r.shared.pending = null;
          var B = U, P = B.next;
          B.next = null, S === null ? h = P : S.next = P, S = B;
          var re = e.alternate;
          re !== null && (re = re.updateQueue, U = re.lastBaseUpdate, U !== S && (U === null ? re.firstBaseUpdate = P : U.next = P, re.lastBaseUpdate = B));
        }
        if (h !== null) {
          var ce = r.baseState;
          S = 0, re = P = B = null, U = h;
          do {
            var pe = U.lane & -536870913, Ye = pe !== U.lane;
            if (Ye ? (Je & pe) === pe : (u & pe) === pe) {
              pe !== 0 && pe === Xl && (wr = !0), re !== null && (re = re.next = {
                lane: 0,
                tag: U.tag,
                payload: U.payload,
                callback: null,
                next: null
              });
              e: {
                var ba = e, Yi = U;
                pe = t;
                var ol = a;
                switch (Yi.tag) {
                  case 1:
                    if (ba = Yi.payload, typeof ba == "function") {
                      ce = ba.call(
                        ol,
                        ce,
                        pe
                      );
                      break e;
                    }
                    ce = ba;
                    break e;
                  case 3:
                    ba.flags = ba.flags & -65537 | 128;
                  case 0:
                    if (ba = Yi.payload, pe = typeof ba == "function" ? ba.call(ol, ce, pe) : ba, pe == null) break e;
                    ce = Ar({}, ce, pe);
                    break e;
                  case 2:
                    bn = !0;
                }
              }
              pe = U.callback, pe !== null && (e.flags |= 64, Ye && (e.flags |= 8192), Ye = r.callbacks, Ye === null ? r.callbacks = [pe] : Ye.push(pe));
            } else
              Ye = {
                lane: pe,
                tag: U.tag,
                payload: U.payload,
                callback: U.callback,
                next: null
              }, re === null ? (P = re = Ye, B = ce) : re = re.next = Ye, S |= pe;
            if (U = U.next, U === null) {
              if (U = r.shared.pending, U === null)
                break;
              Ye = U, U = Ye.next, Ye.next = null, r.lastBaseUpdate = Ye, r.shared.pending = null;
            }
          } while (!0);
          re === null && (B = ce), r.baseState = B, r.firstBaseUpdate = P, r.lastBaseUpdate = re, h === null && (r.shared.lanes = 0), Un |= S, e.lanes = S, e.memoizedState = ce;
        }
      }
      function tt(e, t) {
        if (typeof e != "function")
          throw Error(i(191, e));
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
        var a = Object.keys(e), u = Object.keys(t);
        if (a.length !== u.length) return !1;
        for (u = 0; u < a.length; u++) {
          var r = a[u];
          if (!Xh.call(t, r) || !oa(e[r], t[r]))
            return !1;
        }
        return !0;
      }
      function _a(e) {
        return e = e.status, e === "fulfilled" || e === "rejected";
      }
      function we() {
      }
      function Xe(e, t, a) {
        switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(we, we), t = a), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, e === xi ? Error(i(483)) : e;
          default:
            if (typeof t.status == "string") t.then(we, we);
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
        throw t.$$typeof === md ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(
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
        function t(X, z) {
          if (e) {
            var Z = X.deletions;
            Z === null ? (X.deletions = [z], X.flags |= 16) : Z.push(z);
          }
        }
        function a(X, z) {
          if (!e) return null;
          for (; z !== null; )
            t(X, z), z = z.sibling;
          return null;
        }
        function u(X) {
          for (var z = /* @__PURE__ */ new Map(); X !== null; )
            X.key !== null ? z.set(X.key, X) : z.set(X.index, X), X = X.sibling;
          return z;
        }
        function r(X, z) {
          return X = mn(X, z), X.index = 0, X.sibling = null, X;
        }
        function h(X, z, Z) {
          return X.index = Z, e ? (Z = X.alternate, Z !== null ? (Z = Z.index, Z < z ? (X.flags |= 33554434, z) : Z) : (X.flags |= 33554434, z)) : (X.flags |= 1048576, z);
        }
        function S(X) {
          return e && X.alternate === null && (X.flags |= 33554434), X;
        }
        function U(X, z, Z, ue) {
          return z === null || z.tag !== 6 ? (z = Ur(Z, X.mode, ue), z.return = X, z) : (z = r(z, Z), z.return = X, z);
        }
        function B(X, z, Z, ue) {
          var Ae = Z.type;
          return Ae === Nl ? re(
            X,
            z,
            Z.props.children,
            ue,
            Z.key
          ) : z !== null && (z.elementType === Ae || typeof Ae == "object" && Ae !== null && Ae.$$typeof === gn && xt(Ae) === z.type) ? (z = r(z, Z.props), ze(z, Z), z.return = X, z) : (z = ru(
            Z.type,
            Z.key,
            Z.props,
            null,
            X.mode,
            ue
          ), ze(z, Z), z.return = X, z);
        }
        function P(X, z, Z, ue) {
          return z === null || z.tag !== 4 || z.stateNode.containerInfo !== Z.containerInfo || z.stateNode.implementation !== Z.implementation ? (z = Mr(Z, X.mode, ue), z.return = X, z) : (z = r(z, Z.children || []), z.return = X, z);
        }
        function re(X, z, Z, ue, Ae) {
          return z === null || z.tag !== 7 ? (z = Pn(
            Z,
            X.mode,
            ue,
            Ae
          ), z.return = X, z) : (z = r(z, Z), z.return = X, z);
        }
        function ce(X, z, Z) {
          if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
            return z = Ur(
              "" + z,
              X.mode,
              Z
            ), z.return = X, z;
          if (typeof z == "object" && z !== null) {
            switch (z.$$typeof) {
              case ou:
                return Z = ru(
                  z.type,
                  z.key,
                  z.props,
                  null,
                  X.mode,
                  Z
                ), ze(Z, z), Z.return = X, Z;
              case xl:
                return z = Mr(
                  z,
                  X.mode,
                  Z
                ), z.return = X, z;
              case gn:
                var ue = z._init;
                return z = ue(z._payload), ce(X, z, Z);
            }
            if (fu(z) || n(z))
              return z = Pn(
                z,
                X.mode,
                Z,
                null
              ), z.return = X, z;
            if (typeof z.then == "function")
              return ce(X, at(z), Z);
            if (z.$$typeof === yn)
              return ce(
                X,
                tu(X, z),
                Z
              );
            nt(X, z);
          }
          return null;
        }
        function pe(X, z, Z, ue) {
          var Ae = z !== null ? z.key : null;
          if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
            return Ae !== null ? null : U(X, z, "" + Z, ue);
          if (typeof Z == "object" && Z !== null) {
            switch (Z.$$typeof) {
              case ou:
                return Z.key === Ae ? B(X, z, Z, ue) : null;
              case xl:
                return Z.key === Ae ? P(X, z, Z, ue) : null;
              case gn:
                return Ae = Z._init, Z = Ae(Z._payload), pe(X, z, Z, ue);
            }
            if (fu(Z) || n(Z))
              return Ae !== null ? null : re(X, z, Z, ue, null);
            if (typeof Z.then == "function")
              return pe(
                X,
                z,
                at(Z),
                ue
              );
            if (Z.$$typeof === yn)
              return pe(
                X,
                z,
                tu(X, Z),
                ue
              );
            nt(X, Z);
          }
          return null;
        }
        function Ye(X, z, Z, ue, Ae) {
          if (typeof ue == "string" && ue !== "" || typeof ue == "number" || typeof ue == "bigint")
            return X = X.get(Z) || null, U(z, X, "" + ue, Ae);
          if (typeof ue == "object" && ue !== null) {
            switch (ue.$$typeof) {
              case ou:
                return X = X.get(
                  ue.key === null ? Z : ue.key
                ) || null, B(z, X, ue, Ae);
              case xl:
                return X = X.get(
                  ue.key === null ? Z : ue.key
                ) || null, P(z, X, ue, Ae);
              case gn:
                var ht = ue._init;
                return ue = ht(ue._payload), Ye(
                  X,
                  z,
                  Z,
                  ue,
                  Ae
                );
            }
            if (fu(ue) || n(ue))
              return X = X.get(Z) || null, re(z, X, ue, Ae, null);
            if (typeof ue.then == "function")
              return Ye(
                X,
                z,
                Z,
                at(ue),
                Ae
              );
            if (ue.$$typeof === yn)
              return Ye(
                X,
                z,
                Z,
                tu(z, ue),
                Ae
              );
            nt(z, ue);
          }
          return null;
        }
        function ba(X, z, Z, ue) {
          for (var Ae = null, ht = null, xe = z, ke = z = 0, jt = null; xe !== null && ke < Z.length; ke++) {
            xe.index > ke ? (jt = xe, xe = null) : jt = xe.sibling;
            var Ie = pe(
              X,
              xe,
              Z[ke],
              ue
            );
            if (Ie === null) {
              xe === null && (xe = jt);
              break;
            }
            e && xe && Ie.alternate === null && t(X, xe), z = h(Ie, z, ke), ht === null ? Ae = Ie : ht.sibling = Ie, ht = Ie, xe = jt;
          }
          if (ke === Z.length)
            return a(X, xe), Pe && w(X, ke), Ae;
          if (xe === null) {
            for (; ke < Z.length; ke++)
              xe = ce(X, Z[ke], ue), xe !== null && (z = h(
                xe,
                z,
                ke
              ), ht === null ? Ae = xe : ht.sibling = xe, ht = xe);
            return Pe && w(X, ke), Ae;
          }
          for (xe = u(xe); ke < Z.length; ke++)
            jt = Ye(
              xe,
              X,
              ke,
              Z[ke],
              ue
            ), jt !== null && (e && jt.alternate !== null && xe.delete(
              jt.key === null ? ke : jt.key
            ), z = h(
              jt,
              z,
              ke
            ), ht === null ? Ae = jt : ht.sibling = jt, ht = jt);
          return e && xe.forEach(function(Dn) {
            return t(X, Dn);
          }), Pe && w(X, ke), Ae;
        }
        function Yi(X, z, Z, ue) {
          if (Z == null) throw Error(i(151));
          for (var Ae = null, ht = null, xe = z, ke = z = 0, jt = null, Ie = Z.next(); xe !== null && !Ie.done; ke++, Ie = Z.next()) {
            xe.index > ke ? (jt = xe, xe = null) : jt = xe.sibling;
            var Dn = pe(X, xe, Ie.value, ue);
            if (Dn === null) {
              xe === null && (xe = jt);
              break;
            }
            e && xe && Dn.alternate === null && t(X, xe), z = h(Dn, z, ke), ht === null ? Ae = Dn : ht.sibling = Dn, ht = Dn, xe = jt;
          }
          if (Ie.done)
            return a(X, xe), Pe && w(X, ke), Ae;
          if (xe === null) {
            for (; !Ie.done; ke++, Ie = Z.next())
              Ie = ce(X, Ie.value, ue), Ie !== null && (z = h(
                Ie,
                z,
                ke
              ), ht === null ? Ae = Ie : ht.sibling = Ie, ht = Ie);
            return Pe && w(X, ke), Ae;
          }
          for (xe = u(xe); !Ie.done; ke++, Ie = Z.next())
            Ie = Ye(
              xe,
              X,
              ke,
              Ie.value,
              ue
            ), Ie !== null && (e && Ie.alternate !== null && xe.delete(Ie.key === null ? ke : Ie.key), z = h(Ie, z, ke), ht === null ? Ae = Ie : ht.sibling = Ie, ht = Ie);
          return e && xe.forEach(function(Wh) {
            return t(X, Wh);
          }), Pe && w(X, ke), Ae;
        }
        function ol(X, z, Z, ue) {
          if (typeof Z == "object" && Z !== null && Z.type === Nl && Z.key === null && (Z = Z.props.children), typeof Z == "object" && Z !== null) {
            switch (Z.$$typeof) {
              case ou:
                e: {
                  for (var Ae = Z.key; z !== null; ) {
                    if (z.key === Ae) {
                      if (Ae = Z.type, Ae === Nl) {
                        if (z.tag === 7) {
                          a(
                            X,
                            z.sibling
                          ), ue = r(
                            z,
                            Z.props.children
                          ), ue.return = X, X = ue;
                          break e;
                        }
                      } else if (z.elementType === Ae || typeof Ae == "object" && Ae !== null && Ae.$$typeof === gn && xt(Ae) === z.type) {
                        a(
                          X,
                          z.sibling
                        ), ue = r(z, Z.props), ze(ue, Z), ue.return = X, X = ue;
                        break e;
                      }
                      a(X, z);
                      break;
                    } else t(X, z);
                    z = z.sibling;
                  }
                  Z.type === Nl ? (ue = Pn(
                    Z.props.children,
                    X.mode,
                    ue,
                    Z.key
                  ), ue.return = X, X = ue) : (ue = ru(
                    Z.type,
                    Z.key,
                    Z.props,
                    null,
                    X.mode,
                    ue
                  ), ze(ue, Z), ue.return = X, X = ue);
                }
                return S(X);
              case xl:
                e: {
                  for (Ae = Z.key; z !== null; ) {
                    if (z.key === Ae)
                      if (z.tag === 4 && z.stateNode.containerInfo === Z.containerInfo && z.stateNode.implementation === Z.implementation) {
                        a(
                          X,
                          z.sibling
                        ), ue = r(
                          z,
                          Z.children || []
                        ), ue.return = X, X = ue;
                        break e;
                      } else {
                        a(X, z);
                        break;
                      }
                    else t(X, z);
                    z = z.sibling;
                  }
                  ue = Mr(Z, X.mode, ue), ue.return = X, X = ue;
                }
                return S(X);
              case gn:
                return Ae = Z._init, Z = Ae(Z._payload), ol(
                  X,
                  z,
                  Z,
                  ue
                );
            }
            if (fu(Z))
              return ba(
                X,
                z,
                Z,
                ue
              );
            if (n(Z)) {
              if (Ae = n(Z), typeof Ae != "function")
                throw Error(i(150));
              return Z = Ae.call(Z), Yi(
                X,
                z,
                Z,
                ue
              );
            }
            if (typeof Z.then == "function")
              return ol(
                X,
                z,
                at(Z),
                ue
              );
            if (Z.$$typeof === yn)
              return ol(
                X,
                z,
                tu(X, Z),
                ue
              );
            nt(X, Z);
          }
          return typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint" ? (Z = "" + Z, z !== null && z.tag === 6 ? (a(X, z.sibling), ue = r(z, Z), ue.return = X, X = ue) : (a(X, z), ue = Ur(Z, X.mode, ue), ue.return = X, X = ue), S(X)) : a(X, z);
        }
        return function(X, z, Z, ue) {
          try {
            Ni = 0;
            var Ae = ol(
              X,
              z,
              Z,
              ue
            );
            return Kl = null, Ae;
          } catch (xe) {
            if (xe === xi) throw xe;
            var ht = p(29, xe, null, X.mode);
            return ht.lanes = ue, ht.return = X, ht;
          } finally {
          }
        };
      }
      function gt(e, t) {
        e = ln, b(Eu, e), b(Zl, t), ln = e | t.baseLanes;
      }
      function Zt() {
        b(Eu, ln), b(Zl, Zl.current);
      }
      function sa() {
        ln = Eu.current, A(Zl), A(Eu);
      }
      function Nt(e) {
        var t = e.alternate;
        b(zt, zt.current & 1), b(Sa, e), Ga === null && (t === null || Zl.current !== null || t.memoizedState !== null) && (Ga = e);
      }
      function Ua(e) {
        if (e.tag === 22) {
          if (b(zt, zt.current), b(Sa, e), Ga === null) {
            var t = e.alternate;
            t !== null && t.memoizedState !== null && (Ga = e);
          }
        } else Yt();
      }
      function Yt() {
        b(zt, zt.current), b(Sa, Sa.current);
      }
      function Ot(e) {
        A(Sa), Ga === e && (Ga = null), A(zt);
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
        throw Error(i(321));
      }
      function vl(e, t) {
        if (t === null) return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
          if (!oa(e[a], t[a])) return !1;
        return !0;
      }
      function Cn(e, t, a, u, r, h) {
        return Tn = h, Qe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, je.H = e === null || e.memoizedState === null ? al : _n, tl = !1, h = a(u, r), tl = !1, Jl && (h = ii(
          t,
          a,
          u,
          r
        )), Wi(e), h;
      }
      function Wi(e) {
        je.H = ja;
        var t = rt !== null && rt.next !== null;
        if (Tn = 0, Dt = rt = Qe = null, bu = !1, Bi = 0, wl = null, t) throw Error(i(300));
        e === null || Bt || (e = e.dependencies, e !== null && eu(e) && (Bt = !0));
      }
      function ii(e, t, a, u) {
        Qe = e;
        var r = 0;
        do {
          if (Jl && (wl = null), Bi = 0, Jl = !1, 25 <= r) throw Error(i(301));
          if (r += 1, Dt = rt = null, e.updateQueue != null) {
            var h = e.updateQueue;
            h.lastEffect = null, h.events = null, h.stores = null, h.memoCache != null && (h.memoCache.index = 0);
          }
          je.H = nl, h = t(a, u);
        } while (Jl);
        return h;
      }
      function pl() {
        var e = je.H, t = e.useState()[0];
        return t = typeof t.then == "function" ? La(t) : t, e = e.useState()[0], (rt !== null ? rt.memoizedState : null) !== e && (Qe.flags |= 1024), t;
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
        Tn = 0, Dt = rt = Qe = null, Jl = !1, Bi = Tu = 0, wl = null;
      }
      function Rt() {
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
      function La(e) {
        var t = Bi;
        return Bi += 1, wl === null && (wl = []), e = Xe(wl, e, t), t = Qe, (Dt === null ? t.memoizedState : Dt.next) === null && (t = t.alternate, je.H = t === null || t.memoizedState === null ? al : _n), e;
      }
      function _e(e) {
        if (e !== null && typeof e == "object") {
          if (typeof e.then == "function") return La(e);
          if (e.$$typeof === yn) return Xt(e);
        }
        throw Error(i(438, String(e)));
      }
      function Ya(e) {
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
        if (t == null && (t = { data: [], index: 0 }), a === null && (a = Pr(), Qe.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
          for (a = t.data[t.index] = Array(e), u = 0; u < e; u++)
            a[u] = gd;
        return t.index++, a;
      }
      function Ma(e, t) {
        return typeof t == "function" ? t(e) : t;
      }
      function Da(e) {
        var t = vt();
        return rn(t, rt, e);
      }
      function rn(e, t, a) {
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
          var U = S = null, B = null, P = t, re = !1;
          do {
            var ce = P.lane & -536870913;
            if (ce !== P.lane ? (Je & ce) === ce : (Tn & ce) === ce) {
              var pe = P.revertLane;
              if (pe === 0)
                B !== null && (B = B.next = {
                  lane: 0,
                  revertLane: 0,
                  action: P.action,
                  hasEagerState: P.hasEagerState,
                  eagerState: P.eagerState,
                  next: null
                }), ce === Xl && (re = !0);
              else if ((Tn & pe) === pe) {
                P = P.next, pe === Xl && (re = !0);
                continue;
              } else
                ce = {
                  lane: 0,
                  revertLane: P.revertLane,
                  action: P.action,
                  hasEagerState: P.hasEagerState,
                  eagerState: P.eagerState,
                  next: null
                }, B === null ? (U = B = ce, S = h) : B = B.next = ce, Qe.lanes |= pe, Un |= pe;
              ce = P.action, tl && a(h, ce), h = P.hasEagerState ? P.eagerState : a(h, ce);
            } else
              pe = {
                lane: ce,
                revertLane: P.revertLane,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null
              }, B === null ? (U = B = pe, S = h) : B = B.next = pe, Qe.lanes |= ce, Un |= ce;
            P = P.next;
          } while (P !== null && P !== t);
          if (B === null ? S = h : B.next = U, !oa(h, e.memoizedState) && (Bt = !0, re && (a = Ql, a !== null)))
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
          oa(h, t.memoizedState) || (Bt = !0), t.memoizedState = h, t.baseQueue === null && (t.baseState = h), a.lastRenderedState = h;
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
        var S = !oa(
          (rt || r).memoizedState,
          a
        );
        if (S && (r.memoizedState = a, Bt = !0), r = r.queue, Xa(ri.bind(null, u, r, e), [
          e
        ]), r.getSnapshot !== t || S || Dt !== null && Dt.memoizedState.tag & 1) {
          if (u.flags |= 2048, Aa(
            9,
            zn.bind(
              null,
              u,
              r,
              a,
              t
            ),
            { destroy: void 0 },
            null
          ), st === null) throw Error(i(349));
          h || (Tn & 60) !== 0 || Rn(u, t, a);
        }
        return a;
      }
      function Rn(e, t, a) {
        e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Qe.updateQueue, t === null ? (t = Pr(), Qe.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
      }
      function zn(e, t, a, u) {
        t.value = a, t.getSnapshot = u, xn(t) && oi(e);
      }
      function ri(e, t, a) {
        return a(function() {
          xn(t) && oi(e);
        });
      }
      function xn(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var a = t();
          return !oa(e, a);
        } catch {
          return !0;
        }
      }
      function oi(e) {
        var t = be(e, 2);
        t !== null && Jt(t, e, 2);
      }
      function Nn(e) {
        var t = Rt();
        if (typeof e == "function") {
          var a = e;
          if (e = a(), tl) {
            I(!0);
            try {
              a();
            } finally {
              I(!1);
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
      function fi(e, t, a, u) {
        return e.baseState = a, rn(
          e,
          rt,
          typeof u == "function" ? u : Ma
        );
      }
      function Bn(e, t, a, u, r) {
        if (Fn(e)) throw Error(i(485));
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
          je.T !== null ? a(!0) : h.isTransition = !1, u(h), a = t.pending, a === null ? (h.next = t.pending = h, Sl(t, h)) : (h.next = a.next, t.pending = a.next = h);
        }
      }
      function Sl(e, t) {
        var a = t.action, u = t.payload, r = e.state;
        if (t.isTransition) {
          var h = je.T, S = {};
          je.T = S;
          try {
            var U = a(r, u), B = je.S;
            B !== null && B(S, U), qa(e, t, U);
          } catch (P) {
            Gn(e, t, P);
          } finally {
            je.T = h;
          }
        } else
          try {
            h = a(r, u), qa(e, t, h);
          } catch (P) {
            Gn(e, t, P);
          }
      }
      function qa(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
          function(u) {
            El(e, t, u);
          },
          function(u) {
            return Gn(e, t, u);
          }
        ) : El(e, t, a);
      }
      function El(e, t, a) {
        t.status = "fulfilled", t.value = a, bl(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Sl(e, a)));
      }
      function Gn(e, t, a) {
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
      function ea(e, t) {
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
                  var r = fh(
                    Kt,
                    Ba
                  );
                  if (r) {
                    Kt = oc(r), u = ch(r);
                    break e;
                  }
                }
                ee(u);
              }
              u = !1;
            }
            u && (t = a[0]);
          }
        }
        a = Rt(), a.memoizedState = a.baseState = t, u = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ea,
          lastRenderedState: t
        }, a.queue = u, a = pi.bind(
          null,
          Qe,
          u
        ), u.dispatch = a, u = Nn(!1);
        var h = Ml.bind(
          null,
          Qe,
          !1,
          u.queue
        );
        return u = Rt(), r = {
          state: t,
          dispatch: null,
          action: e,
          pending: null
        }, u.queue = r, a = Bn.bind(
          null,
          Qe,
          r,
          h,
          a
        ), r.dispatch = a, u.memoizedState = e, [t, a, !1];
      }
      function jn(e) {
        var t = vt();
        return on(t, rt, e);
      }
      function on(e, t, a) {
        t = rn(
          e,
          t,
          ea
        )[0], e = Da(Ma)[0], t = typeof t == "object" && t !== null && typeof t.then == "function" ? La(t) : t;
        var u = vt(), r = u.queue, h = r.dispatch;
        return a !== u.memoizedState && (Qe.flags |= 2048, Aa(
          9,
          ki.bind(null, r, a),
          { destroy: void 0 },
          null
        )), [t, h, e];
      }
      function ki(e, t) {
        e.action = t;
      }
      function Hn(e) {
        var t = vt(), a = rt;
        if (a !== null)
          return on(t, a, e);
        vt(), t = t.memoizedState, a = vt();
        var u = a.queue.dispatch;
        return a.memoizedState = e, [t, u, !1];
      }
      function Aa(e, t, a, u) {
        return e = { tag: e, create: t, inst: a, deps: u, next: null }, t = Qe.updateQueue, t === null && (t = Pr(), Qe.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (u = a.next, a.next = e, e.next = u, t.lastEffect = e), e;
      }
      function Tl() {
        return vt().memoizedState;
      }
      function Vn(e, t, a, u) {
        var r = Rt();
        Qe.flags |= e, r.memoizedState = Aa(
          1 | t,
          a,
          { destroy: void 0 },
          u === void 0 ? null : u
        );
      }
      function Ln(e, t, a, u) {
        var r = vt();
        u = u === void 0 ? null : u;
        var h = r.memoizedState.inst;
        rt !== null && u !== null && vl(u, rt.memoizedState.deps) ? r.memoizedState = Aa(t, a, h, u) : (Qe.flags |= e, r.memoizedState = Aa(1 | t, a, h, u));
      }
      function _l(e, t) {
        Vn(8390656, 8, e, t);
      }
      function Xa(e, t) {
        Ln(2048, 8, e, t);
      }
      function ci(e, t) {
        return Ln(4, 2, e, t);
      }
      function Yn(e, t) {
        return Ln(4, 4, e, t);
      }
      function Qa(e, t) {
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
      function Fa(e, t, a) {
        a = a != null ? a.concat([e]) : null, Ln(
          4,
          4,
          Qa.bind(null, t, e),
          a
        );
      }
      function Ka() {
      }
      function si(e, t) {
        var a = vt();
        t = t === void 0 ? null : t;
        var u = a.memoizedState;
        return t !== null && vl(t, u[1]) ? u[0] : (a.memoizedState = [e, t], e);
      }
      function fn(e, t) {
        var a = vt();
        t = t === void 0 ? null : t;
        var u = a.memoizedState;
        if (t !== null && vl(t, u[1]))
          return u[0];
        if (u = e(), tl) {
          I(!0);
          try {
            e();
          } finally {
            I(!1);
          }
        }
        return a.memoizedState = [u, t], u;
      }
      function qn(e, t, a) {
        return a === void 0 || (Tn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = _f(), Qe.lanes |= e, Un |= e, a);
      }
      function Ul(e, t, a, u) {
        return oa(a, t) ? a : Zl.current !== null ? (e = qn(e, a, u), oa(e, t) || (Bt = !0), e) : (Tn & 42) === 0 ? (Bt = !0, e.memoizedState = a) : (e = _f(), Qe.lanes |= e, Un |= e, t);
      }
      function di(e, t, a, u, r) {
        var h = kn();
        $t(
          h !== 0 && 8 > h ? h : 8
        );
        var S = je.T, U = {};
        je.T = U, Ml(e, !1, t, a);
        try {
          var B = r(), P = je.S;
          if (P !== null && P(U, B), B !== null && typeof B == "object" && typeof B.then == "function") {
            var re = Ve(
              B,
              u
            );
            Za(
              e,
              t,
              re,
              la(e)
            );
          } else
            Za(
              e,
              t,
              u,
              la(e)
            );
        } catch (ce) {
          Za(
            e,
            t,
            { then: function() {
            }, status: "rejected", reason: ce },
            la()
          );
        } finally {
          $t(h), je.T = S;
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
      function hi() {
        return vt().memoizedState;
      }
      function Pt() {
        return vt().memoizedState;
      }
      function vi(e) {
        for (var t = e.return; t !== null; ) {
          switch (t.tag) {
            case 24:
            case 3:
              var a = la();
              e = Be(a);
              var u = Ge(t, e, a);
              u !== null && (Jt(u, t, a), Me(u, t, a)), t = { cache: nr() }, e.payload = t;
              return;
          }
          t = t.return;
        }
      }
      function Ii(e, t, a) {
        var u = la();
        a = {
          lane: u,
          revertLane: 0,
          action: a,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Fn(e) ? cn(t, a) : (a = Ee(e, t, a, u), a !== null && (Jt(a, e, u), sn(a, t, u)));
      }
      function pi(e, t, a) {
        var u = la();
        Za(e, t, a, u);
      }
      function Za(e, t, a, u) {
        var r = {
          lane: u,
          revertLane: 0,
          action: a,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (Fn(e)) cn(t, r);
        else {
          var h = e.alternate;
          if (e.lanes === 0 && (h === null || h.lanes === 0) && (h = t.lastRenderedReducer, h !== null))
            try {
              var S = t.lastRenderedState, U = h(S, a);
              if (r.hasEagerState = !0, r.eagerState = U, oa(U, S))
                return me(e, t, r, 0), st === null && Ce(), !1;
            } catch {
            } finally {
            }
          if (a = Ee(e, t, r, u), a !== null)
            return Jt(a, e, u), sn(a, t, u), !0;
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
        }, Fn(e)) {
          if (t) throw Error(i(479));
        } else
          t = Ee(
            e,
            a,
            u,
            2
          ), t !== null && Jt(t, e, 2);
      }
      function Fn(e) {
        var t = e.alternate;
        return e === Qe || t !== null && t === Qe;
      }
      function cn(e, t) {
        Jl = bu = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
      }
      function sn(e, t, a) {
        if ((a & 4194176) !== 0) {
          var u = t.lanes;
          u &= e.pendingLanes, a |= u, t.lanes = a, Y(e, a);
        }
      }
      function da(e, t, a, u) {
        t = e.memoizedState, a = a(u, t), a = a == null ? t : Ar({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
      }
      function mi(e, t, a, u, r, h, S) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(u, h, S) : t.prototype && t.prototype.isPureReactComponent ? !Ze(a, u) || !Ze(r, h) : !0;
      }
      function Dl(e, t, a, u) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== e && kr.enqueueReplaceState(t, t.state, null);
      }
      function Ca(e, t) {
        var a = t;
        if ("ref" in t) {
          a = {};
          for (var u in t)
            u !== "ref" && (a[u] = t[u]);
        }
        if (e = e.defaultProps) {
          a === t && (a = Ar({}, a));
          for (var r in e)
            a[r] === void 0 && (a[r] = e[r]);
        }
        return a;
      }
      function Na(e, t) {
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
        return a = Be(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
          Na(e, t);
        }, a;
      }
      function Al(e) {
        return e = Be(e), e.tag = 3, e;
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
          yi(t, a, u), typeof r != "function" && (Mn === null ? Mn = /* @__PURE__ */ new Set([this]) : Mn.add(this));
          var U = u.stack;
          this.componentDidCatch(u.value, {
            componentStack: U !== null ? U : ""
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
          ), a = Sa.current, a !== null) {
            switch (a.tag) {
              case 13:
                return Ga === null ? Er() : a.alternate === null && Tt === 0 && (Tt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = r, u === Su ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Tr(e, u, r)), !1;
              case 22:
                return a.flags |= 65536, u === Su ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([u])
                }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Tr(e, u, r)), !1;
            }
            throw Error(i(435, a.tag));
          }
          return Tr(e, u, r), Er(), !1;
        }
        if (Pe)
          return t = Sa.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = r, u !== Qr && (e = Error(i(422), { cause: u }), Ne(
            J(e, a)
          ))) : (u !== Qr && (t = Error(i(423), {
            cause: u
          }), Ne(
            J(t, a)
          )), e = e.current.alternate, e.flags |= 65536, r &= -r, e.lanes |= r, u = J(u, a), r = Ja(
            e.stateNode,
            u,
            r
          ), ct(e, r), Tt !== 4 && (Tt = 2)), !1;
        var h = Error(i(520), { cause: u });
        if (h = J(h, a), ji === null ? ji = [h] : ji.push(h), Tt !== 4 && (Tt = 2), t === null) return !0;
        u = J(u, a), a = t;
        do {
          switch (a.tag) {
            case 3:
              return a.flags |= 65536, e = r & -r, a.lanes |= e, e = Ja(a.stateNode, u, e), ct(a, e), !1;
            case 1:
              if (t = a.type, h = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Mn === null || !Mn.has(
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
        t.child = e === null ? Tc(t, null, a, u) : el(
          t,
          e.child,
          a,
          u
        );
      }
      function Kn(e, t, a, u, r) {
        a = a.render;
        var h = t.ref;
        if ("ref" in u) {
          var S = {};
          for (var U in u)
            U !== "ref" && (S[U] = u[U]);
        } else S = u;
        return Zn(t), u = Cn(
          e,
          t,
          a,
          S,
          h,
          r
        ), U = On(), e !== null && !Bt ? (ui(e, t, r), wa(e, t, r)) : (Pe && U && R(t), t.flags |= 1, St(e, t, u, r), t.child);
      }
      function gi(e, t, a, u, r) {
        if (e === null) {
          var h = a.type;
          return typeof h == "function" && !_r(h) && h.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = h, $i(
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
        if (h = e.child, !er(e, r)) {
          var S = h.memoizedProps;
          if (a = a.compare, a = a !== null ? a : Ze, a(S, u) && e.ref === t.ref)
            return wa(
              e,
              t,
              r
            );
        }
        return t.flags |= 1, e = mn(h, u), e.ref = t.ref, e.return = t, t.child = e;
      }
      function $i(e, t, a, u, r) {
        if (e !== null) {
          var h = e.memoizedProps;
          if (Ze(h, u) && e.ref === t.ref)
            if (Bt = !1, t.pendingProps = u = h, er(e, r))
              (e.flags & 131072) !== 0 && (Bt = !0);
            else
              return t.lanes = e.lanes, wa(e, t, r);
        }
        return ha(
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
            return kt(
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
            ), S !== null ? gt(t, S) : Zt(), Ua(t);
          else
            return t.lanes = t.childLanes = 536870912, kt(
              e,
              t,
              S !== null ? S.baseLanes | a : a,
              a
            );
        } else
          S !== null ? (au(t, S.cachePool), gt(t, S), Yt(), t.memoizedState = null) : (e !== null && au(t, null), Zt(), Yt());
        return St(e, t, r, a), t.child;
      }
      function kt(e, t, a, u) {
        var r = lr();
        return r = r === null ? null : {
          parent: Ia ? Et._currentValue : Et._currentValue2,
          pool: r
        }, t.memoizedState = {
          baseLanes: a,
          cachePool: r
        }, e !== null && au(t, null), Zt(), Ua(t), e !== null && Ei(e, t, u, !0), null;
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
      function ha(e, t, a, u, r) {
        return Zn(t), a = Cn(
          e,
          t,
          a,
          u,
          void 0,
          r
        ), u = On(), e !== null && !Bt ? (ui(e, t, r), wa(e, t, r)) : (Pe && u && R(t), t.flags |= 1, St(e, t, a, r), t.child);
      }
      function Si(e, t, a, u, r, h) {
        return Zn(t), t.updateQueue = null, a = ii(
          t,
          u,
          a,
          r
        ), Wi(e), u = On(), e !== null && !Bt ? (ui(e, t, h), wa(e, t, h)) : (Pe && u && R(t), t.flags |= 1, St(e, t, a, h), t.child);
      }
      function Zo(e, t, a, u, r) {
        if (Zn(t), t.stateNode === null) {
          var h = jl, S = a.contextType;
          typeof S == "object" && S !== null && (h = Xt(S)), h = new a(u, h), t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, h.updater = kr, t.stateNode = h, h._reactInternals = t, h = t.stateNode, h.props = u, h.state = t.memoizedState, h.refs = {}, $e(t), S = a.contextType, h.context = typeof S == "object" && S !== null ? Xt(S) : jl, h.state = t.memoizedState, S = a.getDerivedStateFromProps, typeof S == "function" && (da(
            t,
            a,
            S,
            u
          ), h.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (S = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), S !== h.state && kr.enqueueReplaceState(
            h,
            h.state,
            null
          ), _t(t, u, h, r), et(), h.state = t.memoizedState), typeof h.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
        } else if (e === null) {
          h = t.stateNode;
          var U = t.memoizedProps, B = Ca(a, U);
          h.props = B;
          var P = h.context, re = a.contextType;
          S = jl, typeof re == "object" && re !== null && (S = Xt(re));
          var ce = a.getDerivedStateFromProps;
          re = typeof ce == "function" || typeof h.getSnapshotBeforeUpdate == "function", U = t.pendingProps !== U, re || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (U || P !== S) && Dl(
            t,
            h,
            u,
            S
          ), bn = !1;
          var pe = t.memoizedState;
          h.state = pe, _t(t, u, h, r), et(), P = t.memoizedState, U || pe !== P || bn ? (typeof ce == "function" && (da(
            t,
            a,
            ce,
            u
          ), P = t.memoizedState), (B = bn || mi(
            t,
            a,
            B,
            u,
            pe,
            P,
            S
          )) ? (re || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = P), h.props = u, h.state = P, h.context = S, u = B) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
        } else {
          h = t.stateNode, ft(e, t), S = t.memoizedProps, re = Ca(a, S), h.props = re, ce = t.pendingProps, pe = h.context, P = a.contextType, B = jl, typeof P == "object" && P !== null && (B = Xt(P)), U = a.getDerivedStateFromProps, (P = typeof U == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== ce || pe !== B) && Dl(
            t,
            h,
            u,
            B
          ), bn = !1, pe = t.memoizedState, h.state = pe, _t(t, u, h, r), et();
          var Ye = t.memoizedState;
          S !== ce || pe !== Ye || bn || e !== null && e.dependencies !== null && eu(e.dependencies) ? (typeof U == "function" && (da(
            t,
            a,
            U,
            u
          ), Ye = t.memoizedState), (re = bn || mi(
            t,
            a,
            re,
            u,
            pe,
            Ye,
            B
          ) || e !== null && e.dependencies !== null && eu(e.dependencies)) ? (P || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(u, Ye, B), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(
            u,
            Ye,
            B
          )), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === e.memoizedProps && pe === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && pe === e.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = Ye), h.props = u, h.state = Ye, h.context = B, u = re) : (typeof h.componentDidUpdate != "function" || S === e.memoizedProps && pe === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && pe === e.memoizedState || (t.flags |= 1024), u = !1);
        }
        return h = u, Mt(e, t), u = (t.flags & 128) !== 0, h || u ? (h = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : h.render(), t.flags |= 1, e !== null && u ? (t.child = el(
          t,
          e.child,
          null,
          r
        ), t.child = el(
          t,
          null,
          a,
          r
        )) : St(e, t, a, r), t.memoizedState = h.state, e = t.child) : e = wa(
          e,
          t,
          r
        ), e;
      }
      function Jo(e, t, a, u) {
        return le(), t.flags |= 256, St(e, t, a, u), t.child;
      }
      function wu(e) {
        return { baseLanes: e, cachePool: $o() };
      }
      function Wu(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Ea), e;
      }
      function wo(e, t, a) {
        var u = t.pendingProps, r = !1, h = (t.flags & 128) !== 0, S;
        if ((S = h) || (S = e !== null && e.memoizedState === null ? !1 : (zt.current & 2) !== 0), S && (r = !0, t.flags &= -129), S = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
          if (Pe) {
            if (r ? Nt(t) : Yt(), Pe) {
              var U = Kt, B;
              (B = U) && (U = ph(
                U,
                Ba
              ), U !== null ? (t.memoizedState = {
                dehydrated: U,
                treeContext: $n !== null ? { id: $a, overflow: en } : null,
                retryLane: 536870912
              }, B = p(18, null, null, 0), B.stateNode = U, B.return = t, t.child = B, wt = t, Kt = null, B = !0) : B = !1), B || ee(t);
            }
            if (U = t.memoizedState, U !== null && (U = U.dehydrated, U !== null))
              return Vr(U) ? t.lanes = 16 : t.lanes = 536870912, null;
            Ot(t);
          }
          return U = u.children, u = u.fallback, r ? (Yt(), r = t.mode, U = ku(
            { mode: "hidden", children: U },
            r
          ), u = Pn(
            u,
            r,
            a,
            null
          ), U.return = t, u.return = t, U.sibling = u, t.child = U, r = t.child, r.memoizedState = wu(a), r.childLanes = Wu(
            e,
            S,
            a
          ), t.memoizedState = Ir, u) : (Nt(t), Pu(t, U));
        }
        if (B = e.memoizedState, B !== null && (U = B.dehydrated, U !== null)) {
          if (h)
            t.flags & 256 ? (Nt(t), t.flags &= -257, t = Iu(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (Yt(), t.child = e.child, t.flags |= 128, t = null) : (Yt(), r = u.fallback, U = t.mode, u = ku(
              { mode: "visible", children: u.children },
              U
            ), r = Pn(
              r,
              U,
              a,
              null
            ), r.flags |= 2, u.return = t, r.return = t, u.sibling = r, t.child = u, el(
              t,
              e.child,
              null,
              a
            ), u = t.child, u.memoizedState = wu(a), u.childLanes = Wu(
              e,
              S,
              a
            ), t.memoizedState = Ir, t = r);
          else if (Nt(t), Vr(U))
            S = rh(U).digest, u = Error(i(419)), u.stack = "", u.digest = S, Ne({ value: u, source: null, stack: null }), t = Iu(
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
                throw B.retryLane = u, be(e, u), Jt(S, e, u), Uc;
            }
            Hr(U) || Er(), t = Iu(
              e,
              t,
              a
            );
          } else
            Hr(U) ? (t.flags |= 128, t.child = e.child, t = cd.bind(
              null,
              e
            ), oh(U, t), t = null) : (e = B.treeContext, va && (Kt = dh(U), wt = t, Pe = !0, za = null, Ba = !1, e !== null && (ma[ya++] = $a, ma[ya++] = en, ma[ya++] = $n, $a = e.id, en = e.overflow, $n = t)), t = Pu(
              t,
              u.children
            ), t.flags |= 4096);
          return t;
        }
        return r ? (Yt(), r = u.fallback, U = t.mode, B = e.child, h = B.sibling, u = mn(B, {
          mode: "hidden",
          children: u.children
        }), u.subtreeFlags = B.subtreeFlags & 31457280, h !== null ? r = mn(h, r) : (r = Pn(
          r,
          U,
          a,
          null
        ), r.flags |= 2), r.return = t, u.return = t, u.sibling = r, t.child = u, u = r, r = t.child, U = e.child.memoizedState, U === null ? U = wu(a) : (B = U.cachePool, B !== null ? (h = Ia ? Et._currentValue : Et._currentValue2, B = B.parent !== h ? { parent: h, pool: h } : B) : B = $o(), U = {
          baseLanes: U.baseLanes | a,
          cachePool: B
        }), r.memoizedState = U, r.childLanes = Wu(
          e,
          S,
          a
        ), t.memoizedState = Ir, u) : (Nt(t), a = e.child, e = a.sibling, a = mn(a, {
          mode: "visible",
          children: u.children
        }), a.return = t, a.sibling = null, e !== null && (S = t.deletions, S === null ? (t.deletions = [e], t.flags |= 16) : S.push(e)), t.child = a, t.memoizedState = null, a);
      }
      function Pu(e, t) {
        return t = ku(
          { mode: "visible", children: t },
          e.mode
        ), t.return = e, e.child = t;
      }
      function ku(e, t) {
        return Lf(e, t, 0, null);
      }
      function Iu(e, t, a) {
        return el(t, e.child, null, a), e = Pu(
          t,
          t.pendingProps.children
        ), e.flags |= 2, t.memoizedState = null, e;
      }
      function Wo(e, t, a) {
        e.lanes |= t;
        var u = e.alternate;
        u !== null && (u.lanes |= t), tr(e.return, t, a);
      }
      function $u(e, t, a, u, r) {
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
            a = r, a === null ? (r = t.child, t.child = null) : (r = a.sibling, a.sibling = null), $u(
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
            $u(
              t,
              !0,
              a,
              null,
              h
            );
            break;
          case "together":
            $u(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
        return t.child;
      }
      function wa(e, t, a) {
        if (e !== null && (t.dependencies = e.dependencies), Un |= t.lanes, (a & t.childLanes) === 0)
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
          for (e = t.child, a = mn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
            e = e.sibling, a = a.sibling = mn(e, e.pendingProps), a.return = t;
          a.sibling = null;
        }
        return t.child;
      }
      function er(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && eu(e)));
      }
      function $s(e, t, a) {
        switch (t.tag) {
          case 3:
            q(
              t,
              t.stateNode.containerInfo
            ), dn(t, Et, e.memoizedState.cache), le();
            break;
          case 27:
          case 5:
            ae(t);
            break;
          case 4:
            q(
              t,
              t.stateNode.containerInfo
            );
            break;
          case 10:
            dn(
              t,
              t.type,
              t.memoizedProps.value
            );
            break;
          case 13:
            var u = t.memoizedState;
            if (u !== null)
              return u.dehydrated !== null ? (Nt(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? wo(
                e,
                t,
                a
              ) : (Nt(t), e = wa(
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
            dn(t, Et, e.memoizedState.cache);
        }
        return wa(e, t, a);
      }
      function ko(e, t, a) {
        if (e !== null)
          if (e.memoizedProps !== t.pendingProps)
            Bt = !0;
          else {
            if (!er(e, a) && (t.flags & 128) === 0)
              return Bt = !1, $s(
                e,
                t,
                a
              );
            Bt = (e.flags & 131072) !== 0;
          }
        else
          Bt = !1, Pe && (t.flags & 1048576) !== 0 && _(t, pu, t.index);
        switch (t.lanes = 0, t.tag) {
          case 16:
            e: {
              e = t.pendingProps;
              var u = t.elementType, r = u._init;
              if (u = r(u._payload), t.type = u, typeof u == "function")
                _r(u) ? (e = Ca(u, e), t.tag = 1, t = Zo(
                  null,
                  t,
                  u,
                  e,
                  a
                )) : (t.tag = 0, t = ha(
                  null,
                  t,
                  u,
                  e,
                  a
                ));
              else {
                if (u != null) {
                  if (r = u.$$typeof, r === Or) {
                    t.tag = 11, t = Kn(
                      null,
                      t,
                      u,
                      e,
                      a
                    );
                    break e;
                  } else if (r === xr) {
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
            return ha(
              e,
              t,
              t.type,
              t.pendingProps,
              a
            );
          case 1:
            return u = t.type, r = Ca(
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
              if (q(
                t,
                t.stateNode.containerInfo
              ), e === null) throw Error(i(387));
              var h = t.pendingProps;
              r = t.memoizedState, u = r.element, ft(e, t), _t(t, h, null, a);
              var S = t.memoizedState;
              if (h = S.cache, dn(t, Et, h), h !== r.cache && ar(
                t,
                [Et],
                a,
                !0
              ), et(), h = S.element, va && r.isDehydrated)
                if (r = {
                  element: h,
                  isDehydrated: !1,
                  cache: S.cache
                }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
                  t = Jo(
                    e,
                    t,
                    h,
                    a
                  );
                  break e;
                } else if (h !== u) {
                  u = J(
                    Error(i(424)),
                    t
                  ), Ne(u), t = Jo(
                    e,
                    t,
                    h,
                    a
                  );
                  break e;
                } else
                  for (va && (Kt = sh(
                    t.stateNode.containerInfo
                  ), wt = t, Pe = !0, za = null, Ba = !0), a = Tc(
                    t,
                    null,
                    h,
                    a
                  ), t.child = a; a; )
                    a.flags = a.flags & -3 | 4096, a = a.sibling;
              else {
                if (le(), h === u) {
                  t = wa(
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
            if (pa)
              return Mt(e, t), e === null ? (a = dc(
                t.type,
                null,
                t.pendingProps,
                null
              )) ? t.memoizedState = a : Pe || (t.stateNode = Ah(
                t.type,
                t.pendingProps,
                En.current,
                t
              )) : t.memoizedState = dc(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              ), null;
          case 27:
            if (Ft)
              return ae(t), e === null && Ft && Pe && (u = t.stateNode = gc(
                t.type,
                t.pendingProps,
                En.current,
                Vt.current,
                !1
              ), wt = t, Ba = !0, Kt = fc(u)), u = t.pendingProps.children, e !== null || Pe ? St(
                e,
                t,
                u,
                a
              ) : t.child = el(
                t,
                null,
                u,
                a
              ), Mt(e, t), t.child;
          case 5:
            return e === null && Pe && (Uh(
              t.type,
              t.pendingProps,
              Vt.current
            ), (r = u = Kt) && (u = hh(
              u,
              t.type,
              t.pendingProps,
              Ba
            ), u !== null ? (t.stateNode = u, wt = t, Kt = fc(u), Ba = !1, r = !0) : r = !1), r || ee(t)), ae(t), r = t.type, h = t.pendingProps, S = e !== null ? e.memoizedProps : null, u = h.children, cu(r, h) ? u = null : S !== null && cu(r, S) && (t.flags |= 32), t.memoizedState !== null && (r = Cn(
              e,
              t,
              pl,
              null,
              null,
              a
            ), Ia ? In._currentValue = r : In._currentValue2 = r), Mt(e, t), St(e, t, u, a), t.child;
          case 6:
            return e === null && Pe && (Mh(
              t.pendingProps,
              Vt.current
            ), (e = a = Kt) && (a = vh(
              a,
              t.pendingProps,
              Ba
            ), a !== null ? (t.stateNode = a, wt = t, Kt = null, e = !0) : e = !1), e || ee(t)), null;
          case 13:
            return wo(e, t, a);
          case 4:
            return q(
              t,
              t.stateNode.containerInfo
            ), u = t.pendingProps, e === null ? t.child = el(
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
            return u = t.pendingProps, dn(
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
            return r = t.type._context, u = t.pendingProps.children, Zn(t), r = Xt(r), u = u(r), t.flags |= 1, St(
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
            return Zn(t), u = Xt(Et), e === null ? (r = lr(), r === null && (r = st, h = nr(), r.pooledCache = h, h.refCount++, h !== null && (r.pooledCacheLanes |= a), r = h), t.memoizedState = {
              parent: u,
              cache: r
            }, $e(t), dn(t, Et, r)) : ((e.lanes & a) !== 0 && (ft(e, t), _t(t, null, null, a), et()), r = e.memoizedState, h = t.memoizedState, r.parent !== u ? (r = { parent: u, cache: u }, t.memoizedState = r, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = r), dn(t, Et, u)) : (u = h.cache, dn(t, Et, u), u !== r.cache && ar(
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
      function dn(e, t, a) {
        Ia ? (b(_u, t._currentValue), t._currentValue = a) : (b(_u, t._currentValue2), t._currentValue2 = a);
      }
      function Wa(e) {
        var t = _u.current;
        Ia ? e._currentValue = t : e._currentValue2 = t, A(_u);
      }
      function tr(e, t, a) {
        for (; e !== null; ) {
          var u = e.alternate;
          if ((e.childLanes & t) !== t ? (e.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), e === a) break;
          e = e.return;
        }
      }
      function ar(e, t, a, u) {
        var r = e.child;
        for (r !== null && (r.return = e); r !== null; ) {
          var h = r.dependencies;
          if (h !== null) {
            var S = r.child;
            h = h.firstContext;
            e: for (; h !== null; ) {
              var U = h;
              h = r;
              for (var B = 0; B < t.length; B++)
                if (U.context === t[B]) {
                  h.lanes |= a, U = h.alternate, U !== null && (U.lanes |= a), tr(
                    h.return,
                    a,
                    e
                  ), u || (S = null);
                  break e;
                }
              h = U.next;
            }
          } else if (r.tag === 18) {
            if (S = r.return, S === null) throw Error(i(341));
            S.lanes |= a, h = S.alternate, h !== null && (h.lanes |= a), tr(S, a, e), S = null;
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
              var U = r.type;
              oa(r.pendingProps.value, S.value) || (e !== null ? e.push(U) : e = [U]);
            }
          } else if (r === mu.current) {
            if (S = r.alternate, S === null) throw Error(i(387));
            S.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push(In) : e = [In]);
          }
          r = r.return;
        }
        e !== null && ar(
          t,
          e,
          a,
          u
        ), t.flags |= 262144;
      }
      function eu(e) {
        for (e = e.firstContext; e !== null; ) {
          var t = e.context;
          if (!oa(
            Ia ? t._currentValue : t._currentValue2,
            e.memoizedValue
          ))
            return !0;
          e = e.next;
        }
        return !1;
      }
      function Zn(e) {
        ll = e, tn = null, e = e.dependencies, e !== null && (e.firstContext = null);
      }
      function Xt(e) {
        return Io(ll, e);
      }
      function tu(e, t) {
        return ll === null && Zn(e), Io(e, t);
      }
      function Io(e, t) {
        var a = Ia ? t._currentValue : t._currentValue2;
        if (t = { context: t, memoizedValue: a, next: null }, tn === null) {
          if (e === null) throw Error(i(308));
          tn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
        } else tn = tn.next = t;
        return a;
      }
      function nr() {
        return {
          controller: new Fh(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function bi(e) {
        e.refCount--, e.refCount === 0 && Kh(Zh, function() {
          e.controller.abort();
        });
      }
      function lr() {
        var e = il.current;
        return e !== null ? e : st.pooledCache;
      }
      function au(e, t) {
        t === null ? b(il, il.current) : b(il, t.pool);
      }
      function $o() {
        var e = lr();
        return e === null ? null : {
          parent: Ia ? Et._currentValue : Et._currentValue2,
          pool: e
        };
      }
      function ta(e) {
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
      function ir(e, t, a, u) {
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
        else if (Sn)
          for (var r = t.child; r !== null; ) {
            if (r.tag === 5) {
              var h = r.stateNode;
              a && u && (h = uc(
                h,
                r.type,
                r.memoizedProps
              )), Gr(e, h);
            } else if (r.tag === 6)
              h = r.stateNode, a && u && (h = rc(
                h,
                r.memoizedProps
              )), Gr(e, h);
            else if (r.tag !== 4) {
              if (r.tag === 22 && r.memoizedState !== null)
                h = r.child, h !== null && (h.return = r), ir(e, r, !0, !0);
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
        if (Sn)
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
        if (Sn && ef(e, t)) {
          e = t.stateNode;
          var a = e.containerInfo, u = nc();
          tf(u, t, !1, !1), e.pendingChildren = u, ta(t), uh(a, u);
        }
      }
      function ur(e, t, a, u) {
        if (Qt)
          e.memoizedProps !== u && ta(t);
        else if (Sn) {
          var r = e.stateNode, h = e.memoizedProps;
          if ((e = ef(e, t)) || h !== u) {
            var S = Vt.current;
            h = ih(
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
            ) && ta(t), t.stateNode = h, e ? ir(h, t, !1, !1) : ta(t));
          } else t.stateNode = r;
        }
      }
      function rr(e, t, a) {
        if (Nd(t, a)) {
          if (e.flags |= 16777216, !ec(t, a))
            if (Cf()) e.flags |= 8192;
            else
              throw Fl = Su, Wr;
        } else e.flags &= -16777217;
      }
      function nf(e, t) {
        if (Oh(t)) {
          if (e.flags |= 16777216, !yc(t))
            if (Cf()) e.flags |= 8192;
            else
              throw Fl = Su, Wr;
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
      function ed(e, t, a) {
        var u = t.pendingProps;
        switch (K(t), t.tag) {
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
            return a = t.stateNode, u = null, e !== null && (u = e.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Wa(Et), F(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (oe(t) ? ta(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, za !== null && (gr(za), za = null))), af(e, t), yt(t), null;
          case 26:
            if (pa) {
              a = t.type;
              var r = t.memoizedState;
              return e === null ? (ta(t), r !== null ? (yt(t), nf(
                t,
                r
              )) : (yt(t), rr(
                t,
                a,
                u
              ))) : r ? r !== e.memoizedState ? (ta(t), yt(t), nf(
                t,
                r
              )) : (yt(t), t.flags &= -16777217) : (Qt ? e.memoizedProps !== u && ta(t) : ur(
                e,
                t,
                a,
                u
              ), yt(t), rr(
                t,
                a,
                u
              )), null;
            }
          case 27:
            if (Ft) {
              if (k(t), a = En.current, r = t.type, e !== null && t.stateNode != null)
                Qt ? e.memoizedProps !== u && ta(t) : ur(
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
                e = Vt.current, oe(t) ? se(t, e) : (e = gc(
                  r,
                  u,
                  a,
                  e,
                  !0
                ), t.stateNode = e, ta(t));
              }
              return yt(t), null;
            }
          case 5:
            if (k(t), a = t.type, e !== null && t.stateNode != null)
              ur(e, t, a, u);
            else {
              if (!u) {
                if (t.stateNode === null)
                  throw Error(i(166));
                return yt(t), null;
              }
              e = Vt.current, oe(t) ? se(t, e) : (r = Dd(
                a,
                u,
                En.current,
                e,
                t
              ), ir(r, t, !1, !1), t.stateNode = r, kf(
                r,
                a,
                u,
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
              a = e.memoizedProps, Qt ? a !== u && ta(t) : Sn && (a !== u ? (t.stateNode = If(
                u,
                En.current,
                Vt.current,
                t
              ), ta(t)) : t.stateNode = e.stateNode);
            else {
              if (typeof u != "string" && t.stateNode === null)
                throw Error(i(166));
              if (e = En.current, a = Vt.current, oe(t)) {
                if (!va) throw Error(i(176));
                if (e = t.stateNode, a = t.memoizedProps, u = null, r = wt, r !== null)
                  switch (r.tag) {
                    case 27:
                    case 5:
                      u = r.memoizedProps;
                  }
                yh(
                  e,
                  a,
                  t,
                  u
                ) || ee(t);
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
                  if (!va) throw Error(i(344));
                  if (r = t.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(i(317));
                  gh(r, t);
                } else
                  le(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                yt(t), r = !1;
              } else
                za !== null && (gr(za), za = null), r = !0;
              if (!r)
                return t.flags & 256 ? (Ot(t), t) : (Ot(t), null);
            }
            if (Ot(t), (t.flags & 128) !== 0)
              return t.lanes = a, t;
            if (a = u !== null, e = e !== null && e.memoizedState !== null, a) {
              u = t.child, r = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (r = u.alternate.memoizedState.cachePool.pool);
              var h = null;
              u.memoizedState !== null && u.memoizedState.cachePool !== null && (h = u.memoizedState.cachePool.pool), h !== r && (u.flags |= 2048);
            }
            return a !== e && a && (t.child.flags |= 8192), nu(t, t.updateQueue), yt(t), null;
          case 4:
            return F(), af(e, t), e === null && Od(t.stateNode.containerInfo), yt(t), null;
          case 10:
            return Wa(t.type), yt(t), null;
          case 19:
            if (A(zt), r = t.memoizedState, r === null)
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
                r.tail !== null && Ra() > Hi && (t.flags |= 128, u = !0, Ti(r, !1), t.lanes = 4194304);
              }
            else {
              if (!u)
                if (e = Ut(h), e !== null) {
                  if (t.flags |= 128, u = !0, e = e.updateQueue, t.updateQueue = e, nu(t, e), Ti(r, !0), r.tail === null && r.tailMode === "hidden" && !h.alternate && !Pe)
                    return yt(t), null;
                } else
                  2 * Ra() - r.renderingStartTime > Hi && a !== 536870912 && (t.flags |= 128, u = !0, Ti(r, !1), t.lanes = 4194304);
              r.isBackwards ? (h.sibling = t.child, t.child = h) : (e = r.last, e !== null ? e.sibling = h : t.child = h, r.last = h);
            }
            return r.tail !== null ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.renderingStartTime = Ra(), t.sibling = null, e = zt.current, b(
              zt,
              u ? e & 1 | 2 : e & 1
            ), t) : (yt(t), null);
          case 22:
          case 23:
            return Ot(t), sa(), u = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), a = t.updateQueue, a !== null && nu(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), e !== null && A(il), null;
          case 24:
            return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Wa(Et), yt(t), null;
          case 25:
            return null;
        }
        throw Error(i(156, t.tag));
      }
      function td(e, t) {
        switch (K(t), t.tag) {
          case 1:
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 3:
            return Wa(Et), F(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
          case 26:
          case 27:
          case 5:
            return k(t), null;
          case 13:
            if (Ot(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
              if (t.alternate === null)
                throw Error(i(340));
              le();
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 19:
            return A(zt), null;
          case 4:
            return F(), null;
          case 10:
            return Wa(t.type), null;
          case 22:
          case 23:
            return Ot(t), sa(), e !== null && A(il), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 24:
            return Wa(Et), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function lf(e, t) {
        switch (K(t), t.tag) {
          case 3:
            Wa(Et), F();
            break;
          case 26:
          case 27:
          case 5:
            k(t);
            break;
          case 4:
            F();
            break;
          case 13:
            Ot(t);
            break;
          case 19:
            A(zt);
            break;
          case 10:
            Wa(t.type);
            break;
          case 22:
          case 23:
            Ot(t), sa(), e !== null && A(il);
            break;
          case 24:
            Wa(Et);
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
        } catch (U) {
          it(t, t.return, U);
        }
      }
      function hn(e, t, a) {
        try {
          var u = t.updateQueue, r = u !== null ? u.lastEffect : null;
          if (r !== null) {
            var h = r.next;
            u = h;
            do {
              if ((u.tag & e) === e) {
                var S = u.inst, U = S.destroy;
                if (U !== void 0) {
                  S.destroy = void 0, r = t;
                  var B = a;
                  try {
                    U();
                  } catch (P) {
                    it(
                      r,
                      B,
                      P
                    );
                  }
                }
              }
              u = u.next;
            } while (u !== h);
          }
        } catch (P) {
          it(t, t.return, P);
        }
      }
      function uf(e) {
        var t = e.updateQueue;
        if (t !== null) {
          var a = e.stateNode;
          try {
            Re(t, a);
          } catch (u) {
            it(e, e.return, u);
          }
        }
      }
      function rf(e, t, a) {
        a.props = Ca(
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
      function aa(e, t) {
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
          wd(u, t, a, e);
        } catch (r) {
          it(e, e.return, r);
        }
      }
      function ff(e, t, a) {
        try {
          Wd(
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
        return e.tag === 5 || e.tag === 3 || (pa ? e.tag === 26 : !1) || (Ft ? e.tag === 27 : !1) || e.tag === 4;
      }
      function or(e) {
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
      function fr(e, t, a) {
        var u = e.tag;
        if (u === 5 || u === 6)
          e = e.stateNode, t ? kd(a, e, t) : Zd(a, e);
        else if (!(u === 4 || Ft && u === 27) && (e = e.child, e !== null))
          for (fr(e, t, a), e = e.sibling; e !== null; )
            fr(e, t, a), e = e.sibling;
      }
      function lu(e, t, a) {
        var u = e.tag;
        if (u === 5 || u === 6)
          e = e.stateNode, t ? Pd(a, e, t) : Kd(a, e);
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
      function ad(e, t) {
        for (Ud(e.containerInfo), Gt = t; Gt !== null; )
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
                      var S = Ca(
                        u.type,
                        r,
                        u.elementType === u.type
                      );
                      t = h.getSnapshotBeforeUpdate(
                        S,
                        a
                      ), h.__reactInternalSnapshotBeforeUpdate = t;
                    } catch (U) {
                      it(
                        u,
                        u.return,
                        U
                      );
                    }
                  }
                  break;
                case 3:
                  (t & 1024) !== 0 && Qt && lh(e.stateNode.containerInfo);
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
            Pa(e, a), u & 4 && _i(5, a);
            break;
          case 1:
            if (Pa(e, a), u & 4)
              if (e = a.stateNode, t === null)
                try {
                  e.componentDidMount();
                } catch (U) {
                  it(a, a.return, U);
                }
              else {
                var r = Ca(
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
                } catch (U) {
                  it(
                    a,
                    a.return,
                    U
                  );
                }
              }
            u & 64 && uf(a), u & 512 && Jn(a, a.return);
            break;
          case 3:
            if (Pa(e, a), u & 64 && (u = a.updateQueue, u !== null)) {
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
                Re(u, e);
              } catch (U) {
                it(a, a.return, U);
              }
            }
            break;
          case 26:
            if (pa) {
              Pa(e, a), u & 512 && Jn(a, a.return);
              break;
            }
          case 27:
          case 5:
            Pa(e, a), t === null && u & 4 && of(a), u & 512 && Jn(a, a.return);
            break;
          case 12:
            Pa(e, a);
            break;
          case 13:
            Pa(e, a), u & 4 && vf(e, a);
            break;
          case 22:
            if (r = a.memoizedState !== null || an, !r) {
              t = t !== null && t.memoizedState !== null || bt;
              var h = an, S = bt;
              an = r, (bt = t) && !S ? vn(
                e,
                a,
                (a.subtreeFlags & 8772) !== 0
              ) : Pa(e, a), an = h, bt = S;
            }
            u & 512 && (a.memoizedProps.mode === "manual" ? Jn(a, a.return) : aa(a, a.return));
            break;
          default:
            Pa(e, a);
        }
      }
      function hf(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, hf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && xd(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
            ra.onCommitFiberUnmount(Oi, a);
          } catch {
          }
        switch (a.tag) {
          case 26:
            if (pa) {
              bt || aa(a, t), Oa(
                e,
                t,
                a
              ), a.memoizedState ? vc(a.memoizedState) : a.stateNode && mc(a.stateNode);
              break;
            }
          case 27:
            if (Ft) {
              bt || aa(a, t);
              var u = At, r = fa;
              At = a.stateNode, Oa(
                e,
                t,
                a
              ), Nh(a.stateNode), At = u, fa = r;
              break;
            }
          case 5:
            bt || aa(a, t);
          case 6:
            if (Qt) {
              if (u = At, r = fa, At = null, Oa(
                e,
                t,
                a
              ), At = u, fa = r, At !== null)
                if (fa)
                  try {
                    $d(At, a.stateNode);
                  } catch (h) {
                    it(
                      a,
                      t,
                      h
                    );
                  }
                else
                  try {
                    Id(At, a.stateNode);
                  } catch (h) {
                    it(
                      a,
                      t,
                      h
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
            Qt && At !== null && (fa ? _h(
              At,
              a.stateNode
            ) : Th(At, a.stateNode));
            break;
          case 4:
            Qt ? (u = At, r = fa, At = a.stateNode.containerInfo, fa = !0, Oa(
              e,
              t,
              a
            ), At = u, fa = r) : (Sn && sf(
              a.stateNode,
              a,
              nc()
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
            bt || hn(2, a, t), bt || hn(4, a, t), Oa(
              e,
              t,
              a
            );
            break;
          case 1:
            bt || (aa(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && rf(
              a,
              t,
              u
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
            bt || aa(a, t), bt = (u = bt) || a.memoizedState !== null, Oa(
              e,
              t,
              a
            ), bt = u;
            break;
          default:
            Oa(
              e,
              t,
              a
            );
        }
      }
      function vf(e, t) {
        if (va && t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
          try {
            bh(e);
          } catch (a) {
            it(t, t.return, a);
          }
      }
      function nd(e) {
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
      function sr(e, t) {
        var a = nd(e);
        t.forEach(function(u) {
          var r = sd.bind(null, e, u);
          a.has(u) || (a.add(u), u.then(r, r));
        });
      }
      function It(e, t) {
        var a = t.deletions;
        if (a !== null)
          for (var u = 0; u < a.length; u++) {
            var r = a[u], h = e, S = t;
            if (Qt) {
              var U = S;
              e: for (; U !== null; ) {
                switch (U.tag) {
                  case 27:
                  case 5:
                    At = U.stateNode, fa = !1;
                    break e;
                  case 3:
                    At = U.stateNode.containerInfo, fa = !0;
                    break e;
                  case 4:
                    At = U.stateNode.containerInfo, fa = !0;
                    break e;
                }
                U = U.return;
              }
              if (At === null) throw Error(i(160));
              cr(h, S, r), At = null, fa = !1;
            } else cr(h, S, r);
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
            It(t, e), na(e), u & 4 && (hn(3, e, e.return), _i(3, e), hn(5, e, e.return));
            break;
          case 1:
            It(t, e), na(e), u & 512 && (bt || a === null || aa(a, a.return)), u & 64 && an && (e = e.updateQueue, e !== null && (u = e.callbacks, u !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
            break;
          case 26:
            if (pa) {
              var r = xa;
              It(t, e), na(e), u & 512 && (bt || a === null || aa(a, a.return)), u & 4 && (u = a !== null ? a.memoizedState : null, t = e.memoizedState, a === null ? t === null ? e.stateNode === null ? e.stateNode = Dh(
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
                zh(r), xh(
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
            if (It(t, e), na(e), u & 512 && (bt || a === null || aa(a, a.return)), Qt) {
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
              )), u & 1024 && ($r = !0);
            }
            break;
          case 6:
            if (It(t, e), na(e), u & 4 && Qt) {
              if (e.stateNode === null)
                throw Error(i(162));
              u = e.memoizedProps, a = a !== null ? a.memoizedProps : u, t = e.stateNode;
              try {
                Jd(t, a, u);
              } catch (re) {
                it(e, e.return, re);
              }
            }
            break;
          case 3:
            if (pa ? (Ch(), r = xa, xa = Lr(t.containerInfo), It(t, e), xa = r) : It(t, e), na(e), u & 4) {
              if (Qt && va && a !== null && a.memoizedState.isDehydrated)
                try {
                  Eh(t.containerInfo);
                } catch (re) {
                  it(e, e.return, re);
                }
              if (Sn) {
                u = t.containerInfo, a = t.pendingChildren;
                try {
                  ic(u, a);
                } catch (re) {
                  it(e, e.return, re);
                }
              }
            }
            $r && ($r = !1, mf(e));
            break;
          case 4:
            pa ? (a = xa, xa = Lr(
              e.stateNode.containerInfo
            ), It(t, e), na(e), xa = a) : (It(t, e), na(e)), u & 4 && Sn && sf(
              e.stateNode,
              e,
              e.stateNode.pendingChildren
            );
            break;
          case 12:
            It(t, e), na(e);
            break;
          case 13:
            It(t, e), na(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (no = Ra()), u & 4 && (u = e.updateQueue, u !== null && (e.updateQueue = null, sr(e, u)));
            break;
          case 22:
            u & 512 && (bt || a === null || aa(a, a.return)), r = e.memoizedState !== null;
            var S = a !== null && a.memoizedState !== null, U = an, B = bt;
            if (an = U || r, bt = B || S, It(t, e), bt = B, an = U, na(e), t = e.stateNode, t._current = e, t._visibility &= -3, t._visibility |= t._pendingVisibility & 2, u & 8192 && (t._visibility = r ? t._visibility & -2 : t._visibility | 1, r && (t = an || bt, a === null || S || t || Cl(e)), Qt && (e.memoizedProps === null || e.memoizedProps.mode !== "manual"))) {
              e: if (a = null, Qt)
                for (t = e; ; ) {
                  if (t.tag === 5 || pa && t.tag === 26 || Ft && t.tag === 27) {
                    if (a === null) {
                      S = a = t;
                      try {
                        h = S.stateNode, r ? eh(h) : ah(
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
                        var P = S.stateNode;
                        r ? th(P) : nh(P, S.memoizedProps);
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
            u & 4 && (u = e.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, sr(e, a))));
            break;
          case 19:
            It(t, e), na(e), u & 4 && (u = e.updateQueue, u !== null && (e.updateQueue = null, sr(e, u)));
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
                    var r = u.stateNode, h = or(e);
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
                  var U = or(e);
                  lu(e, U, S);
                  break;
                case 3:
                case 4:
                  var B = u.stateNode.containerInfo, P = or(e);
                  fr(
                    e,
                    P,
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
            mf(t), t.tag === 5 && t.flags & 1024 && jd(t.stateNode), e = e.sibling;
          }
      }
      function Pa(e, t) {
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
              hn(4, t, t.return), Cl(t);
              break;
            case 1:
              aa(t, t.return);
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
              aa(t, t.return), Cl(t);
              break;
            case 22:
              aa(t, t.return), t.memoizedState === null && Cl(t);
              break;
            default:
              Cl(t);
          }
          e = e.sibling;
        }
      }
      function vn(e, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
          var u = t.alternate, r = e, h = t, S = h.flags;
          switch (h.tag) {
            case 0:
            case 11:
            case 15:
              vn(
                r,
                h,
                a
              ), _i(4, h);
              break;
            case 1:
              if (vn(
                r,
                h,
                a
              ), u = h, r = u.stateNode, typeof r.componentDidMount == "function")
                try {
                  r.componentDidMount();
                } catch (P) {
                  it(u, u.return, P);
                }
              if (u = h, r = u.updateQueue, r !== null) {
                var U = u.stateNode;
                try {
                  var B = r.shared.hiddenCallbacks;
                  if (B !== null)
                    for (r.shared.hiddenCallbacks = null, r = 0; r < B.length; r++)
                      tt(B[r], U);
                } catch (P) {
                  it(u, u.return, P);
                }
              }
              a && S & 64 && uf(h), Jn(h, h.return);
              break;
            case 26:
            case 27:
            case 5:
              vn(
                r,
                h,
                a
              ), a && u === null && S & 4 && of(h), Jn(h, h.return);
              break;
            case 12:
              vn(
                r,
                h,
                a
              );
              break;
            case 13:
              vn(
                r,
                h,
                a
              ), a && S & 4 && vf(r, h);
              break;
            case 22:
              h.memoizedState === null && vn(
                r,
                h,
                a
              ), Jn(h, h.return);
              break;
            default:
              vn(
                r,
                h,
                a
              );
          }
          t = t.sibling;
        }
      }
      function dr(e, t) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && bi(a));
      }
      function hr(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && bi(e));
      }
      function pn(e, t, a, u) {
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
            pn(
              e,
              t,
              a,
              u
            ), r & 2048 && _i(9, t);
            break;
          case 3:
            pn(
              e,
              t,
              a,
              u
            ), r & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && bi(e)));
            break;
          case 12:
            if (r & 2048) {
              pn(
                e,
                t,
                a,
                u
              ), e = t.stateNode;
              try {
                var h = t.memoizedProps, S = h.id, U = h.onPostCommit;
                typeof U == "function" && U(
                  S,
                  t.alternate === null ? "mount" : "update",
                  e.passiveEffectDuration,
                  -0
                );
              } catch (B) {
                it(t, t.return, B);
              }
            } else
              pn(
                e,
                t,
                a,
                u
              );
            break;
          case 23:
            break;
          case 22:
            h = t.stateNode, t.memoizedState !== null ? h._visibility & 4 ? pn(
              e,
              t,
              a,
              u
            ) : Ui(
              e,
              t
            ) : h._visibility & 4 ? pn(
              e,
              t,
              a,
              u
            ) : (h._visibility |= 4, Ol(
              e,
              t,
              a,
              u,
              (t.subtreeFlags & 10256) !== 0
            )), r & 2048 && dr(
              t.alternate,
              t
            );
            break;
          case 24:
            pn(
              e,
              t,
              a,
              u
            ), r & 2048 && hr(t.alternate, t);
            break;
          default:
            pn(
              e,
              t,
              a,
              u
            );
        }
      }
      function Ol(e, t, a, u, r) {
        for (r = r && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
          var h = e, S = t, U = a, B = u, P = S.flags;
          switch (S.tag) {
            case 0:
            case 11:
            case 15:
              Ol(
                h,
                S,
                U,
                B,
                r
              ), _i(8, S);
              break;
            case 23:
              break;
            case 22:
              var re = S.stateNode;
              S.memoizedState !== null ? re._visibility & 4 ? Ol(
                h,
                S,
                U,
                B,
                r
              ) : Ui(
                h,
                S
              ) : (re._visibility |= 4, Ol(
                h,
                S,
                U,
                B,
                r
              )), r && P & 2048 && dr(
                S.alternate,
                S
              );
              break;
            case 24:
              Ol(
                h,
                S,
                U,
                B,
                r
              ), r && P & 2048 && hr(S.alternate, S);
              break;
            default:
              Ol(
                h,
                S,
                U,
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
                Ui(a, u), r & 2048 && dr(
                  u.alternate,
                  u
                );
                break;
              case 24:
                Ui(a, u), r & 2048 && hr(
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
      function wn(e) {
        if (e.subtreeFlags & Wl)
          for (e = e.child; e !== null; )
            gf(e), e = e.sibling;
      }
      function gf(e) {
        switch (e.tag) {
          case 26:
            wn(e), e.flags & Wl && (e.memoizedState !== null ? Rh(
              xa,
              e.memoizedState,
              e.memoizedProps
            ) : tc(e.type, e.memoizedProps));
            break;
          case 5:
            wn(e), e.flags & Wl && tc(e.type, e.memoizedProps);
            break;
          case 3:
          case 4:
            if (pa) {
              var t = xa;
              xa = Lr(
                e.stateNode.containerInfo
              ), wn(e), xa = t;
            } else wn(e);
            break;
          case 22:
            e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Wl, Wl = 16777216, wn(e), Wl = t) : wn(e));
            break;
          default:
            wn(e);
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
            Mi(e), e.flags & 2048 && hn(9, e, e.return);
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
              hn(8, t, t.return), iu(t);
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
              hn(8, a, t);
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
      function vr(e) {
        var t = $f(e);
        if (t != null) {
          if (typeof t.memoizedProps["data-testname"] != "string")
            throw Error(i(364));
          return t;
        }
        if (e = Ld(e), e === null) throw Error(i(362));
        return e.stateNode.current;
      }
      function pr(e, t) {
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
                  for (; S != null && pr(u, S); )
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
            if ((a === 5 || a === 26 || a === 27) && Xd(e.stateNode, t.value))
              return !0;
            break;
          case Cu:
            if ((a === 5 || a === 6 || a === 26 || a === 27) && (e = qd(e), e !== null && 0 <= e.indexOf(t.value)))
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
      function mr(e) {
        switch (e.$$typeof) {
          case Uu:
            return "<" + (s(e.value) || "Unknown") + ">";
          case Mu:
            return ":has(" + (mr(e) || "") + ")";
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
          var r = e[u++], h = r.tag, S = e[u++], U = t[S];
          if (h !== 5 && h !== 26 && h !== 27 || !Ci(r)) {
            for (; U != null && pr(r, U); )
              S++, U = t[S];
            if (S === t.length) a.push(r);
            else
              for (r = r.child; r !== null; )
                e.push(r, S), r = r.sibling;
          }
        }
        return a;
      }
      function yr(e, t) {
        if (!Ai) throw Error(i(363));
        e = vr(e), e = Tf(e, t), t = [], e = Array.from(e);
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
      function la() {
        if ((ot & 2) !== 0 && Je !== 0)
          return Je & -Je;
        if (je.T !== null) {
          var e = Xl;
          return e !== 0 ? e : Te();
        }
        return Rd();
      }
      function _f() {
        Ea === 0 && (Ea = (Je & 536870912) === 0 || Pe ? V() : 536870912);
        var e = Sa.current;
        return e !== null && (e.flags |= 32), Ea;
      }
      function Jt(e, t, a) {
        (e === st && dt === 2 || e.cancelPendingCommit !== null) && (Rl(e, 0), ka(
          e,
          Je,
          Ea,
          !1
        )), ne(e, a), ((ot & 2) === 0 || e !== st) && (e === st && ((ot & 2) === 0 && (ul |= a), Tt === 4 && ka(
          e,
          Je,
          Ea,
          !1
        )), ve(e));
      }
      function Uf(e, t, a) {
        if ((ot & 6) !== 0) throw Error(i(327));
        var u = !a && (t & 60) === 0 && (t & e.expiredLanes) === 0 || H(e, t), r = u ? ud(e, t) : br(e, t, !0), h = u;
        do {
          if (r === 0) {
            Pl && !u && ka(e, t, 0, !1);
            break;
          } else if (r === 6)
            ka(
              e,
              t,
              0,
              !nn
            );
          else {
            if (a = e.current.alternate, h && !ld(a)) {
              r = br(e, t, !1), h = !1;
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
                  var U = e;
                  r = ji;
                  var B = va && U.current.memoizedState.isDehydrated;
                  if (B && (Rl(U, S).flags |= 256), S = br(
                    U,
                    S,
                    !1
                  ), S !== 2) {
                    if (eo && !B) {
                      U.errorRecoveryDisabledLanes |= h, ul |= h, r = 4;
                      break e;
                    }
                    h = Ha, Ha = r, h !== null && gr(h);
                  }
                  r = S;
                }
                if (h = !1, r !== 2) continue;
              }
            }
            if (r === 1) {
              Rl(e, 0), ka(e, t, 0, !0);
              break;
            }
            e: {
              switch (u = e, r) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 4:
                  if ((t & 4194176) === t) {
                    ka(
                      u,
                      t,
                      Ea,
                      !nn
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
                  throw Error(i(329));
              }
              if (u.finishedWork = a, u.finishedLanes = t, (t & 62914560) === t && (h = no + 300 - Ra(), 10 < h)) {
                if (ka(
                  u,
                  t,
                  Ea,
                  !nn
                ), O(u, 0) !== 0) break e;
                u.timeoutHandle = Ad(
                  Mf.bind(
                    null,
                    u,
                    a,
                    Ha,
                    Ou,
                    ao,
                    t,
                    Ea,
                    ul,
                    kl,
                    nn,
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
                Ha,
                Ou,
                ao,
                t,
                Ea,
                ul,
                kl,
                nn,
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
      function Mf(e, t, a, u, r, h, S, U, B, P, re, ce, pe) {
        var Ye = t.subtreeFlags;
        if ((Ye & 8192 || (Ye & 16785408) === 16785408) && (Bd(), gf(t), t = Gd(), t !== null)) {
          e.cancelPendingCommit = t(
            Bf.bind(
              null,
              e,
              a,
              u,
              r,
              S,
              U,
              B,
              1,
              ce,
              pe
            )
          ), ka(e, h, S, !P);
          return;
        }
        Bf(
          e,
          a,
          u,
          r,
          S,
          U,
          B,
          re,
          ce,
          pe
        );
      }
      function ld(e) {
        for (var t = e; ; ) {
          var a = t.tag;
          if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
            for (var u = 0; u < a.length; u++) {
              var r = a[u], h = r.getSnapshot;
              r = r.value;
              try {
                if (!oa(h(), r)) return !1;
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
      function ka(e, t, a, u) {
        t &= ~to, t &= ~ul, e.suspendedLanes |= t, e.pingedLanes &= ~t, u && (e.warmLanes |= t), u = e.expirationTimes;
        for (var r = t; 0 < r; ) {
          var h = 31 - ua(r), S = 1 << h;
          u[h] = -1, r &= ~S;
        }
        a !== 0 && L(e, a, t);
      }
      function Df() {
        return (ot & 6) === 0 ? ($(0), !1) : !0;
      }
      function Sr() {
        if (Ke !== null) {
          if (dt === 0)
            var e = Ke.return;
          else
            e = Ke, tn = ll = null, ml(e), Kl = null, Ni = 0, e = Ke;
          for (; e !== null; )
            lf(e.alternate, e), e = e.return;
          Ke = null;
        }
      }
      function Rl(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var a = e.timeoutHandle;
        a !== jr && (e.timeoutHandle = jr, Cd(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Sr(), st = e, Ke = a = mn(e.current, null), Je = t, dt = 0, ca = null, nn = !1, Pl = H(e, t), eo = !1, kl = Ea = to = ul = Un = Tt = 0, Ha = ji = null, ao = !1, (t & 8) !== 0 && (t |= t & 32);
        var u = e.entangledLanes;
        if (u !== 0)
          for (e = e.entanglements, u &= t; 0 < u; ) {
            var r = 31 - ua(u), h = 1 << r;
            t |= e[r], u &= ~h;
          }
        return ln = t, Ce(), a;
      }
      function Af(e, t) {
        Qe = null, je.H = ja, t === xi ? (t = mt(), dt = 3) : t === Wr ? (t = mt(), dt = 4) : dt = t === Uc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ca = t, Ke === null && (Tt = 1, Na(
          e,
          J(t, e.current)
        ));
      }
      function Cf() {
        var e = Sa.current;
        return e === null ? !0 : (Je & 4194176) === Je ? Ga === null : (Je & 62914560) === Je || (Je & 536870912) !== 0 ? e === Ga : !1;
      }
      function Of() {
        var e = je.H;
        return je.H = ja, e === null ? ja : e;
      }
      function Rf() {
        var e = je.A;
        return je.A = Jh, e;
      }
      function Er() {
        Tt = 4, nn || (Je & 4194176) !== Je && Sa.current !== null || (Pl = !0), (Un & 134217727) === 0 && (ul & 134217727) === 0 || st === null || ka(
          st,
          Je,
          Ea,
          !1
        );
      }
      function br(e, t, a) {
        var u = ot;
        ot |= 2;
        var r = Of(), h = Rf();
        (st !== e || Je !== t) && (Ou = null, Rl(e, t)), t = !1;
        var S = Tt;
        e: do
          try {
            if (dt !== 0 && Ke !== null) {
              var U = Ke, B = ca;
              switch (dt) {
                case 8:
                  Sr(), S = 6;
                  break e;
                case 3:
                case 2:
                case 6:
                  Sa.current === null && (t = !0);
                  var P = dt;
                  if (dt = 0, ca = null, zl(e, U, B, P), a && Pl) {
                    S = 0;
                    break e;
                  }
                  break;
                default:
                  P = dt, dt = 0, ca = null, zl(e, U, B, P);
              }
            }
            id(), S = Tt;
            break;
          } catch (re) {
            Af(e, re);
          }
        while (!0);
        return t && e.shellSuspendCounter++, tn = ll = null, ot = u, je.H = r, je.A = h, Ke === null && (st = null, Je = 0, Ce()), S;
      }
      function id() {
        for (; Ke !== null; ) zf(Ke);
      }
      function ud(e, t) {
        var a = ot;
        ot |= 2;
        var u = Of(), r = Rf();
        st !== e || Je !== t ? (Ou = null, Hi = Ra() + 500, Rl(e, t)) : Pl = H(
          e,
          t
        );
        e: do
          try {
            if (dt !== 0 && Ke !== null) {
              t = Ke;
              var h = ca;
              t: switch (dt) {
                case 1:
                  dt = 0, ca = null, zl(e, t, h, 1);
                  break;
                case 2:
                  if (_a(h)) {
                    dt = 0, ca = null, xf(t);
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
                  _a(h) ? (dt = 0, ca = null, xf(t)) : (dt = 0, ca = null, zl(e, t, h, 7));
                  break;
                case 5:
                  var S = null;
                  switch (Ke.tag) {
                    case 26:
                      S = Ke.memoizedState;
                    case 5:
                    case 27:
                      var U = Ke, B = U.type, P = U.pendingProps;
                      if (S ? yc(S) : ec(B, P)) {
                        dt = 0, ca = null;
                        var re = U.sibling;
                        if (re !== null) Ke = re;
                        else {
                          var ce = U.return;
                          ce !== null ? (Ke = ce, uu(ce)) : Ke = null;
                        }
                        break t;
                      }
                  }
                  dt = 0, ca = null, zl(e, t, h, 5);
                  break;
                case 6:
                  dt = 0, ca = null, zl(e, t, h, 6);
                  break;
                case 8:
                  Sr(), Tt = 6;
                  break e;
                default:
                  throw Error(i(462));
              }
            }
            rd();
            break;
          } catch (pe) {
            Af(e, pe);
          }
        while (!0);
        return tn = ll = null, je.H = u, je.A = r, ot = a, Ke !== null ? 0 : (st = null, Je = 0, Ce(), Tt);
      }
      function rd() {
        for (; Ke !== null && !jh(); )
          zf(Ke);
      }
      function zf(e) {
        var t = ko(
          e.alternate,
          e,
          ln
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
              Je
            );
            break;
          case 11:
            t = Si(
              a,
              t,
              t.pendingProps,
              t.type.render,
              t.ref,
              Je
            );
            break;
          case 5:
            ml(t);
          default:
            lf(a, t), t = Ke = Vf(t, ln), t = ko(a, t, ln);
        }
        e.memoizedProps = e.pendingProps, t === null ? uu(e) : Ke = t;
      }
      function zl(e, t, a, u) {
        tn = ll = null, ml(t), Kl = null, Ni = 0;
        var r = t.return;
        try {
          if (Ju(
            e,
            r,
            t,
            a,
            Je
          )) {
            Tt = 1, Na(
              e,
              J(a, e.current)
            ), Ke = null;
            return;
          }
        } catch (h) {
          if (r !== null) throw Ke = r, h;
          Tt = 1, Na(
            e,
            J(a, e.current)
          ), Ke = null;
          return;
        }
        t.flags & 32768 ? (Pe || u === 1 ? e = !0 : Pl || (Je & 536870912) !== 0 ? e = !1 : (nn = e = !0, (u === 2 || u === 3 || u === 6) && (u = Sa.current, u !== null && u.tag === 13 && (u.flags |= 16384))), Nf(t, e)) : uu(t);
      }
      function uu(e) {
        var t = e;
        do {
          if ((t.flags & 32768) !== 0) {
            Nf(
              t,
              nn
            );
            return;
          }
          e = t.return;
          var a = ed(
            t.alternate,
            t,
            ln
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
          var a = td(e.alternate, e);
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
      function Bf(e, t, a, u, r, h, S, U, B, P) {
        var re = je.T, ce = kn();
        try {
          $t(2), je.T = null, od(
            e,
            t,
            a,
            u,
            ce,
            r,
            h,
            S,
            U,
            B,
            P
          );
        } finally {
          je.T = re, $t(ce);
        }
      }
      function od(e, t, a, u, r, h, S, U) {
        do
          Wn();
        while (rl !== null);
        if ((ot & 6) !== 0) throw Error(i(327));
        var B = e.finishedWork;
        if (u = e.finishedLanes, B === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, B === e.current) throw Error(i(177));
        e.callbackNode = null, e.callbackPriority = 0, e.cancelPendingCommit = null;
        var P = B.lanes | B.childLanes;
        if (P |= Fr, N(
          e,
          u,
          P,
          h,
          S,
          U
        ), e === st && (Ke = st = null, Je = 0), (B.subtreeFlags & 10256) === 0 && (B.flags & 10256) === 0 || Ru || (Ru = !0, lo = P, io = a, dd(Xr, function() {
          return Wn(), null;
        })), a = (B.flags & 15990) !== 0, (B.subtreeFlags & 15990) !== 0 || a ? (a = je.T, je.T = null, h = kn(), $t(2), S = ot, ot |= 4, ad(e, B), pf(B, e), Md(e.containerInfo), e.current = B, df(e, B.alternate, B), Hh(), ot = S, $t(h), je.T = a) : e.current = B, Ru ? (Ru = !1, rl = e, Vi = u) : Gf(e, P), P = e.pendingLanes, P === 0 && (Mn = null), j(B.stateNode), ve(e), t !== null)
          for (r = e.onRecoverableError, B = 0; B < t.length; B++)
            P = t[B], r(P.value, {
              componentStack: P.stack
            });
        return (Vi & 3) !== 0 && Wn(), P = e.pendingLanes, (u & 4194218) !== 0 && (P & 42) !== 0 ? e === uo ? Li++ : (Li = 0, uo = e) : Li = 0, $(0), null;
      }
      function Gf(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, bi(t)));
      }
      function Wn() {
        if (rl !== null) {
          var e = rl, t = lo;
          lo = 0;
          var a = ie(Vi), u = 32 > a ? 32 : a;
          a = je.T;
          var r = kn();
          try {
            if ($t(u), je.T = null, rl === null)
              var h = !1;
            else {
              u = io, io = null;
              var S = rl, U = Vi;
              if (rl = null, Vi = 0, (ot & 6) !== 0)
                throw Error(i(331));
              var B = ot;
              if (ot |= 4, Ef(S.current), yf(
                S,
                S.current,
                U,
                u
              ), ot = B, $(0, !1), ra && typeof ra.onPostCommitFiberRoot == "function")
                try {
                  ra.onPostCommitFiberRoot(Oi, S);
                } catch {
                }
              h = !0;
            }
            return h;
          } finally {
            $t(r), je.T = a, Gf(e, t);
          }
        }
        return !1;
      }
      function jf(e, t, a) {
        t = J(a, t), t = Ja(e.stateNode, t, 2), e = Ge(e, t, 2), e !== null && (ne(e, 2), ve(e));
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
              if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Mn === null || !Mn.has(u))) {
                e = J(a, e), a = Al(2), u = Ge(t, a, 2), u !== null && (qt(
                  a,
                  u,
                  t,
                  e
                ), ne(u, 2), ve(u));
                break;
              }
            }
            t = t.return;
          }
      }
      function Tr(e, t, a) {
        var u = e.pingCache;
        if (u === null) {
          u = e.pingCache = new wh();
          var r = /* @__PURE__ */ new Set();
          u.set(t, r);
        } else
          r = u.get(t), r === void 0 && (r = /* @__PURE__ */ new Set(), u.set(t, r));
        r.has(a) || (eo = !0, r.add(a), e = fd.bind(null, e, t, a), t.then(e, e));
      }
      function fd(e, t, a) {
        var u = e.pingCache;
        u !== null && u.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, st === e && (Je & a) === a && (Tt === 4 || Tt === 3 && (Je & 62914560) === Je && 300 > Ra() - no ? (ot & 2) === 0 && Rl(e, 0) : to |= a, kl === Je && (kl = 0)), ve(e);
      }
      function Hf(e, t) {
        t === 0 && (t = W()), e = be(e, t), e !== null && (ne(e, t), ve(e));
      }
      function cd(e) {
        var t = e.memoizedState, a = 0;
        t !== null && (a = t.retryLane), Hf(e, a);
      }
      function sd(e, t) {
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
      function dd(e, t) {
        return hu(e, t);
      }
      function hd(e, t, a, u) {
        this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function _r(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
      }
      function mn(e, t) {
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
        if (u = e, typeof e == "function") _r(e) && (S = 1);
        else if (typeof e == "string")
          S = pa && Ft ? sc(e, a, Vt.current) ? 26 : Sc(e) ? 27 : 5 : pa ? sc(
            e,
            a,
            Vt.current
          ) ? 26 : 5 : Ft && Sc(e) ? 27 : 5;
        else
          e: switch (e) {
            case Nl:
              return Pn(
                a.children,
                r,
                h,
                t
              );
            case Kf:
              S = 8, r |= 24;
              break;
            case Cr:
              return e = p(12, a, t, r | 2), e.elementType = Cr, e.lanes = h, e;
            case Rr:
              return e = p(13, a, t, r), e.elementType = Rr, e.lanes = h, e;
            case zr:
              return e = p(19, a, t, r), e.elementType = zr, e.lanes = h, e;
            case Jf:
              return Lf(a, r, h, t);
            default:
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case yd:
                  case yn:
                    S = 10;
                    break e;
                  case Zf:
                    S = 9;
                    break e;
                  case Or:
                    S = 11;
                    break e;
                  case xr:
                    S = 14;
                    break e;
                  case gn:
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
      function Pn(e, t, a, u) {
        return e = p(7, e, u, t), e.lanes = a, e;
      }
      function Lf(e, t, a, u) {
        e = p(22, e, u, t), e.elementType = Jf, e.lanes = a;
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
              S !== null && (r._pendingVisibility |= 2, Jt(S, h, 2));
            }
          },
          attach: function() {
            var h = r._current;
            if (h === null) throw Error(i(456));
            if ((r._pendingVisibility & 2) !== 0) {
              var S = be(h, 2);
              S !== null && (r._pendingVisibility &= -3, Jt(S, h, 2));
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
      function vd(e, t, a, u, r, h, S, U) {
        this.tag = 1, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = jr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Q(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Q(0), this.hiddenUpdates = Q(null), this.identifierPrefix = u, this.onUncaughtError = r, this.onCaughtError = h, this.onRecoverableError = S, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = U, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function Yf(e, t, a, u, r, h, S, U, B, P, re, ce) {
        return e = new vd(
          e,
          t,
          a,
          S,
          U,
          B,
          P,
          ce
        ), t = 1, h === !0 && (t |= 24), h = p(3, null, null, t), e.current = h, h.stateNode = e, t = nr(), t.refCount++, e.pooledCache = t, t.refCount++, h.memoizedState = {
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
        return e = E(t), e = e !== null ? T(e) : null, e === null ? null : Di(e.stateNode);
      }
      function Qf(e, t, a, u, r, h) {
        r = qf(r), u.context === null ? u.context = r : u.pendingContext = r, u = Be(t), u.payload = { element: a }, h = h === void 0 ? null : h, h !== null && (u.callback = h), a = Ge(e, u, t), a !== null && (Jt(a, e, t), Me(a, e, t));
      }
      function Ff(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
          var a = e.retryLane;
          e.retryLane = a !== 0 && a < t ? a : t;
        }
      }
      function Dr(e, t) {
        Ff(e, t), (e = e.alternate) && Ff(e, t);
      }
      var Fe = {}, pd = sl, ia = gs(), Ar = Object.assign, md = Symbol.for("react.element"), ou = Symbol.for("react.transitional.element"), xl = Symbol.for("react.portal"), Nl = Symbol.for("react.fragment"), Kf = Symbol.for("react.strict_mode"), Cr = Symbol.for("react.profiler"), yd = Symbol.for("react.provider"), Zf = Symbol.for("react.consumer"), yn = Symbol.for("react.context"), Or = Symbol.for("react.forward_ref"), Rr = Symbol.for("react.suspense"), zr = Symbol.for("react.suspense_list"), xr = Symbol.for("react.memo"), gn = Symbol.for("react.lazy"), Jf = Symbol.for("react.offscreen"), gd = Symbol.for("react.memo_cache_sentinel"), wf = Symbol.iterator, Sd = Symbol.for("react.client.reference"), je = pd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Nr, Wf, Br = !1, fu = Array.isArray, Ed = l.rendererVersion, bd = l.rendererPackageName, Pf = l.extraDevToolsConfig, Di = l.getPublicInstance, Td = l.getRootHostContext, _d = l.getChildHostContext, Ud = l.prepareForCommit, Md = l.resetAfterCommit, Dd = l.createInstance, Gr = l.appendInitialChild, kf = l.finalizeInitialChildren, cu = l.shouldSetTextContent, If = l.createTextInstance, Ad = l.scheduleTimeout, Cd = l.cancelTimeout, jr = l.noTimeout, Ia = l.isPrimaryRenderer;
      l.warnsIfNotActing;
      var Qt = l.supportsMutation, Sn = l.supportsPersistence, va = l.supportsHydration, $f = l.getInstanceFromNode;
      l.beforeActiveInstanceBlur, l.afterActiveInstanceBlur;
      var Od = l.preparePortalMount;
      l.prepareScopeUpdate, l.getInstanceFromScope;
      var $t = l.setCurrentUpdatePriority, kn = l.getCurrentUpdatePriority, Rd = l.resolveUpdatePriority;
      l.resolveEventType, l.resolveEventTimeStamp;
      var zd = l.shouldAttemptEagerTransition, xd = l.detachDeletedInstance;
      l.requestPostPaintCallback;
      var Nd = l.maySuspendCommit, ec = l.preloadInstance, Bd = l.startSuspendingCommit, tc = l.suspendInstance, Gd = l.waitForCommitToBeReady, Bl = l.NotPendingTransition, In = l.HostTransitionContext, jd = l.resetFormInstance;
      l.bindToConsole;
      var Hd = l.supportsMicrotasks, Vd = l.scheduleMicrotask, Ai = l.supportsTestSelectors, Ld = l.findFiberRoot, Yd = l.getBoundingRect, qd = l.getTextContent, Ci = l.isHiddenSubtree, Xd = l.matchAccessibilityRole, Qd = l.setFocusIfFocusable, Fd = l.setupIntersectionObserver, Kd = l.appendChild, Zd = l.appendChildToContainer, Jd = l.commitTextUpdate, wd = l.commitMount, Wd = l.commitUpdate, Pd = l.insertBefore, kd = l.insertInContainerBefore, Id = l.removeChild, $d = l.removeChildFromContainer, ac = l.resetTextContent, eh = l.hideInstance, th = l.hideTextInstance, ah = l.unhideInstance, nh = l.unhideTextInstance, lh = l.clearContainer, ih = l.cloneInstance, nc = l.createContainerChildSet, lc = l.appendChildToContainerChildSet, uh = l.finalizeContainerChildren, ic = l.replaceContainerChildren, uc = l.cloneHiddenInstance, rc = l.cloneHiddenTextInstance, Hr = l.isSuspenseInstancePending, Vr = l.isSuspenseInstanceFallback, rh = l.getSuspenseInstanceFallbackErrorDetails, oh = l.registerSuspenseInstanceRetry, fh = l.canHydrateFormStateMarker, ch = l.isFormStateMarkerMatching, oc = l.getNextHydratableSibling, fc = l.getFirstHydratableChild, sh = l.getFirstHydratableChildWithinContainer, dh = l.getFirstHydratableChildWithinSuspenseInstance, hh = l.canHydrateInstance, vh = l.canHydrateTextInstance, ph = l.canHydrateSuspenseInstance, mh = l.hydrateInstance, yh = l.hydrateTextInstance, gh = l.hydrateSuspenseInstance, Sh = l.getNextHydratableInstanceAfterSuspenseInstance, Eh = l.commitHydratedContainer, bh = l.commitHydratedSuspenseInstance, Th = l.clearSuspenseBoundary, _h = l.clearSuspenseBoundaryFromContainer, cc = l.shouldDeleteUnhydratedTailInstances;
      l.diffHydratedPropsForDevWarnings, l.diffHydratedTextForDevWarnings, l.describeHydratableInstanceForDevWarnings;
      var Uh = l.validateHydratableInstance, Mh = l.validateHydratableTextInstance, pa = l.supportsResources, sc = l.isHostHoistableType, Lr = l.getHoistableRoot, dc = l.getResource, hc = l.acquireResource, vc = l.releaseResource, Dh = l.hydrateHoistable, pc = l.mountHoistable, mc = l.unmountHoistable, Ah = l.createHoistableInstance, Ch = l.prepareToCommitHoistables, Oh = l.mayResourceSuspendCommit, yc = l.preloadResource, Rh = l.suspendResource, Ft = l.supportsSingletons, gc = l.resolveSingletonInstance, zh = l.clearSingleton, xh = l.acquireSingletonInstance, Nh = l.releaseSingletonInstance, Sc = l.isHostSingletonType, Yr = [], Gl = -1, jl = {}, ua = Math.clz32 ? Math.clz32 : x, Bh = Math.log, Gh = Math.LN2, su = 128, du = 4194304, hu = ia.unstable_scheduleCallback, qr = ia.unstable_cancelCallback, jh = ia.unstable_shouldYield, Hh = ia.unstable_requestPaint, Ra = ia.unstable_now, Ec = ia.unstable_ImmediatePriority, Vh = ia.unstable_UserBlockingPriority, Xr = ia.unstable_NormalPriority, Lh = ia.unstable_IdlePriority, Yh = ia.log, qh = ia.unstable_setDisableYieldValue, Oi = null, ra = null, oa = typeof Object.is == "function" ? Object.is : te, bc = /* @__PURE__ */ new WeakMap(), Hl = [], Vl = 0, vu = null, pu = 0, ma = [], ya = 0, $n = null, $a = 1, en = "", Vt = D(null), Ri = D(null), En = D(null), mu = D(null), wt = null, Kt = null, Pe = !1, za = null, Ba = !1, Qr = Error(i(519)), ga = [], Ll = 0, Fr = 0, yu = null, Yl = null, Kr = !1, gu = !1, Zr = !1, ql = 0, zi = null, Jr = 0, Xl = 0, Ql = null, bn = !1, wr = !1, Xh = Object.prototype.hasOwnProperty, xi = Error(i(460)), Wr = Error(i(474)), Su = { then: function() {
      } }, Fl = null, Kl = null, Ni = 0, el = Ct(!0), Tc = Ct(!1), Zl = D(null), Eu = D(0), Sa = D(null), Ga = null, zt = D(0), Tn = 0, Qe = null, rt = null, Dt = null, bu = !1, Jl = !1, tl = !1, Tu = 0, Bi = 0, wl = null, Qh = 0, Pr = function() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }, ja = {
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
      ja.useCacheRefresh = lt, ja.useMemoCache = lt, ja.useHostTransitionStatus = lt, ja.useFormState = lt, ja.useActionState = lt, ja.useOptimistic = lt;
      var al = {
        readContext: Xt,
        use: _e,
        useCallback: function(e, t) {
          return Rt().memoizedState = [
            e,
            t === void 0 ? null : t
          ], e;
        },
        useContext: Xt,
        useEffect: _l,
        useImperativeHandle: function(e, t, a) {
          a = a != null ? a.concat([e]) : null, Vn(
            4194308,
            4,
            Qa.bind(null, t, e),
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
          var u = e();
          if (tl) {
            I(!0);
            try {
              e();
            } finally {
              I(!1);
            }
          }
          return a.memoizedState = [u, t], u;
        },
        useReducer: function(e, t, a) {
          var u = Rt();
          if (a !== void 0) {
            var r = a(t);
            if (tl) {
              I(!0);
              try {
                a(t);
              } finally {
                I(!1);
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
          var t = Rt();
          return e = { current: e }, t.memoizedState = e;
        },
        useState: function(e) {
          e = Nn(e);
          var t = e.queue, a = pi.bind(
            null,
            Qe,
            t
          );
          return t.dispatch = a, [e.memoizedState, a];
        },
        useDebugValue: Ka,
        useDeferredValue: function(e, t) {
          var a = Rt();
          return qn(a, e, t);
        },
        useTransition: function() {
          var e = Nn(!1);
          return e = di.bind(
            null,
            Qe,
            e.queue,
            !0,
            !1
          ), Rt().memoizedState = e, [!1, e];
        },
        useSyncExternalStore: function(e, t, a) {
          var u = Qe, r = Rt();
          if (Pe) {
            if (a === void 0)
              throw Error(i(407));
            a = a();
          } else {
            if (a = t(), st === null)
              throw Error(i(349));
            (Je & 60) !== 0 || Rn(u, t, a);
          }
          r.memoizedState = a;
          var h = { value: a, getSnapshot: t };
          return r.queue = h, _l(ri.bind(null, u, h, e), [
            e
          ]), u.flags |= 2048, Aa(
            9,
            zn.bind(
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
          var e = Rt(), t = st.identifierPrefix;
          if (Pe) {
            var a = en, u = $a;
            a = (u & ~(1 << 32 - ua(u) - 1)).toString(32) + a, t = ":" + t + "R" + a, a = Tu++, 0 < a && (t += "H" + a.toString(32)), t += ":";
          } else
            a = Qh++, t = ":" + t + "r" + a.toString(32) + ":";
          return e.memoizedState = t;
        },
        useCacheRefresh: function() {
          return Rt().memoizedState = vi.bind(
            null,
            Qe
          );
        }
      };
      al.useMemoCache = Ya, al.useHostTransitionStatus = Qn, al.useFormState = Pi, al.useActionState = Pi, al.useOptimistic = function(e) {
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
        use: _e,
        useCallback: si,
        useContext: Xt,
        useEffect: Xa,
        useImperativeHandle: Fa,
        useInsertionEffect: ci,
        useLayoutEffect: Yn,
        useMemo: fn,
        useReducer: Da,
        useRef: Tl,
        useState: function() {
          return Da(Ma);
        },
        useDebugValue: Ka,
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
          var e = Da(Ma)[0], t = vt().memoizedState;
          return [
            typeof e == "boolean" ? e : La(e),
            t
          ];
        },
        useSyncExternalStore: gl,
        useId: hi
      };
      _n.useCacheRefresh = Pt, _n.useMemoCache = Ya, _n.useHostTransitionStatus = Qn, _n.useFormState = jn, _n.useActionState = jn, _n.useOptimistic = function(e, t) {
        var a = vt();
        return fi(a, rt, e, t);
      };
      var nl = {
        readContext: Xt,
        use: _e,
        useCallback: si,
        useContext: Xt,
        useEffect: Xa,
        useImperativeHandle: Fa,
        useInsertionEffect: ci,
        useLayoutEffect: Yn,
        useMemo: fn,
        useReducer: yl,
        useRef: Tl,
        useState: function() {
          return yl(Ma);
        },
        useDebugValue: Ka,
        useDeferredValue: function(e, t) {
          var a = vt();
          return rt === null ? qn(a, e, t) : Ul(
            a,
            rt.memoizedState,
            e,
            t
          );
        },
        useTransition: function() {
          var e = yl(Ma)[0], t = vt().memoizedState;
          return [
            typeof e == "boolean" ? e : La(e),
            t
          ];
        },
        useSyncExternalStore: gl,
        useId: hi
      };
      nl.useCacheRefresh = Pt, nl.useMemoCache = Ya, nl.useHostTransitionStatus = Qn, nl.useFormState = Hn, nl.useActionState = Hn, nl.useOptimistic = function(e, t) {
        var a = vt();
        return rt !== null ? fi(a, rt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
      };
      var kr = {
        isMounted: function(e) {
          return (e = e._reactInternals) ? y(e) === e : !1;
        },
        enqueueSetState: function(e, t, a) {
          e = e._reactInternals;
          var u = la(), r = Be(u);
          r.payload = t, a != null && (r.callback = a), t = Ge(e, r, u), t !== null && (Jt(t, e, u), Me(t, e, u));
        },
        enqueueReplaceState: function(e, t, a) {
          e = e._reactInternals;
          var u = la(), r = Be(u);
          r.tag = 1, r.payload = t, a != null && (r.callback = a), t = Ge(e, r, u), t !== null && (Jt(t, e, u), Me(t, e, u));
        },
        enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var a = la(), u = Be(a);
          u.tag = 2, t != null && (u.callback = t), t = Ge(e, u, a), t !== null && (Jt(t, e, a), Me(t, e, a));
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
      }, Uc = Error(i(461)), Bt = !1, Ir = { dehydrated: null, treeContext: null, retryLane: 0 }, _u = D(null), ll = null, tn = null, Fh = typeof AbortController < "u" ? AbortController : function() {
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
      }, Kh = ia.unstable_scheduleCallback, Zh = ia.unstable_NormalPriority, Et = {
        $$typeof: yn,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      }, Mc = je.S;
      je.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && De(e, t), Mc !== null && Mc(e, t);
      };
      var il = D(null), an = !1, bt = !1, $r = !1, Dc = typeof WeakSet == "function" ? WeakSet : Set, Gt = null, Ac = !1, At = null, fa = !1, xa = null, Wl = 8192, Jh = {
        getCacheForType: function(e) {
          var t = Xt(Et), a = t.data.get(e);
          return a === void 0 && (a = e(), t.data.set(e, a)), a;
        }
      }, Uu = 0, Mu = 1, Du = 2, Au = 3, Cu = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var Gi = Symbol.for;
        Uu = Gi("selector.component"), Mu = Gi("selector.has_pseudo_class"), Du = Gi("selector.role"), Au = Gi("selector.test_id"), Cu = Gi("selector.text");
      }
      var wh = typeof WeakMap == "function" ? WeakMap : Map, ot = 0, st = null, Ke = null, Je = 0, dt = 0, ca = null, nn = !1, Pl = !1, eo = !1, ln = 0, Tt = 0, Un = 0, ul = 0, to = 0, Ea = 0, kl = 0, ji = null, Ha = null, ao = !1, no = 0, Hi = 1 / 0, Ou = null, Mn = null, Ru = !1, rl = null, Vi = 0, lo = 0, io = null, Li = 0, uo = null;
      return Fe.attemptContinuousHydration = function(e) {
        if (e.tag === 13) {
          var t = be(e, 67108864);
          t !== null && Jt(t, e, 67108864), Dr(e, 67108864);
        }
      }, Fe.attemptHydrationAtCurrentPriority = function(e) {
        if (e.tag === 13) {
          var t = la(), a = be(e, t);
          a !== null && Jt(a, e, t), Dr(e, t);
        }
      }, Fe.attemptSynchronousHydration = function(e) {
        switch (e.tag) {
          case 3:
            if (e = e.stateNode, e.current.memoizedState.isDehydrated) {
              var t = C(e.pendingLanes);
              if (t !== 0) {
                for (e.pendingLanes |= 2, e.entangledLanes |= 2; t; ) {
                  var a = 1 << 31 - ua(t);
                  e.entanglements[1] |= a, t &= ~a;
                }
                ve(e), (ot & 6) === 0 && (Hi = Ra() + 500, $(0));
              }
            }
            break;
          case 13:
            t = be(e, 2), t !== null && Jt(t, e, 2), Df(), Dr(e, 2);
        }
      }, Fe.batchedUpdates = function(e, t) {
        return e(t);
      }, Fe.createComponentSelector = function(e) {
        return { $$typeof: Uu, value: e };
      }, Fe.createContainer = function(e, t, a, u, r, h, S, U, B, P) {
        return Yf(
          e,
          t,
          !1,
          null,
          a,
          u,
          h,
          S,
          U,
          B,
          P,
          null
        );
      }, Fe.createHasPseudoClassSelector = function(e) {
        return { $$typeof: Mu, value: e };
      }, Fe.createHydrationContainer = function(e, t, a, u, r, h, S, U, B, P, re, ce, pe) {
        return e = Yf(
          a,
          u,
          !0,
          e,
          r,
          h,
          U,
          B,
          P,
          re,
          ce,
          pe
        ), e.context = qf(null), a = e.current, u = la(), r = Be(u), r.callback = t ?? null, Ge(a, r, u), e.current.lanes = u, ne(e, u), ve(e), e;
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
        var t = je.T, a = kn();
        try {
          return $t(32), je.T = null, e();
        } finally {
          $t(a), je.T = t;
        }
      }, Fe.discreteUpdates = function(e, t, a, u, r) {
        var h = je.T, S = kn();
        try {
          return $t(2), je.T = null, e(t, a, u, r);
        } finally {
          $t(S), je.T = h, ot === 0 && (Hi = Ra() + 500);
        }
      }, Fe.findAllNodes = yr, Fe.findBoundingRects = function(e, t) {
        if (!Ai) throw Error(i(363));
        t = yr(e, t), e = [];
        for (var a = 0; a < t.length; a++)
          e.push(Yd(t[a]));
        for (t = e.length - 1; 0 < t; t--) {
          a = e[t];
          for (var u = a.x, r = u + a.width, h = a.y, S = h + a.height, U = t - 1; 0 <= U; U--)
            if (t !== U) {
              var B = e[U], P = B.x, re = P + B.width, ce = B.y, pe = ce + B.height;
              if (u >= P && h >= ce && r <= re && S <= pe) {
                e.splice(t, 1);
                break;
              } else if (u !== P || a.width !== B.width || pe < h || ce > S) {
                if (!(h !== ce || a.height !== B.height || re < u || P > r)) {
                  P > u && (B.width += P - u, B.x = u), re < r && (B.width = r - P), e.splice(t, 1);
                  break;
                }
              } else {
                ce > h && (B.height += ce - h, B.y = h), pe < S && (B.height = S - ce), e.splice(t, 1);
                break;
              }
            }
        }
        return e;
      }, Fe.findHostInstance = Xf, Fe.findHostInstanceWithNoPortals = function(e) {
        return e = E(e), e = e !== null ? M(e) : null, e === null ? null : Di(e.stateNode);
      }, Fe.findHostInstanceWithWarning = function(e) {
        return Xf(e);
      }, Fe.flushPassiveEffects = Wn, Fe.flushSyncFromReconciler = function(e) {
        var t = ot;
        ot |= 1;
        var a = je.T, u = kn();
        try {
          if ($t(2), je.T = null, e)
            return e();
        } finally {
          $t(u), je.T = a, ot = t, (ot & 6) === 0 && $(0);
        }
      }, Fe.flushSyncWork = Df, Fe.focusWithin = function(e, t) {
        if (!Ai) throw Error(i(363));
        for (e = vr(e), t = Tf(e, t), t = Array.from(t), e = 0; e < t.length; ) {
          var a = t[e++], u = a.tag;
          if (!Ci(a)) {
            if ((u === 5 || u === 26 || u === 27) && Qd(a.stateNode))
              return !0;
            for (a = a.child; a !== null; )
              t.push(a), a = a.sibling;
          }
        }
        return !1;
      }, Fe.getFindAllNodesFailureDescription = function(e, t) {
        if (!Ai) throw Error(i(363));
        var a = 0, u = [];
        e = [vr(e), 0];
        for (var r = 0; r < e.length; ) {
          var h = e[r++], S = h.tag, U = e[r++], B = t[U];
          if ((S !== 5 && S !== 26 && S !== 27 || !Ci(h)) && (pr(h, B) && (u.push(mr(B)), U++, U > a && (a = U)), U < t.length))
            for (h = h.child; h !== null; )
              e.push(h, U), h = h.sibling;
        }
        if (a < t.length) {
          for (e = []; a < t.length; a++)
            e.push(mr(t[a]));
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
          version: Ed,
          rendererPackageName: bd,
          currentDispatcherRef: je,
          findFiberByHostInstance: $f,
          reconcilerVersion: "19.0.0"
        };
        if (Pf !== null && (e.rendererConfig = Pf), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") e = !1;
        else {
          var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (t.isDisabled || !t.supportsFiber) e = !0;
          else {
            try {
              Oi = t.inject(e), ra = t;
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
        e = yr(e, t);
        var r = Fd(
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
        var r = Xn(e).queue;
        di(
          e,
          r,
          t,
          Bl,
          a === null ? m : function() {
            var h = Xn(e).next.queue;
            return Za(
              e,
              h,
              {},
              la()
            ), a(u);
          }
        );
      }, Fe.updateContainer = function(e, t, a, u) {
        var r = t.current, h = la();
        return Qf(
          r,
          h,
          e,
          t,
          a,
          u
        ), h;
      }, Fe.updateContainerSync = function(e, t, a, u) {
        return t.tag === 0 && Wn(), Qf(
          t.current,
          2,
          e,
          t,
          a,
          u
        ), 2;
      }, Fe;
    }, o.exports.default = o.exports, Object.defineProperty(o.exports, "__esModule", { value: !0 });
  })(vo)), vo.exports;
}
var qc;
function zv() {
  return qc || (qc = 1, ho.exports = Rv()), ho.exports;
}
var xv = zv();
const Nv = /* @__PURE__ */ vs(xv);
var Xc = gs();
function qo(o, l, p) {
  if (!o) return;
  if (p(o) === !0) return o;
  let m = l ? o.return : o.child;
  for (; m; ) {
    const i = qo(m, l, p);
    if (i) return i;
    m = l ? null : m.sibling;
  }
}
function Ss(o) {
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
const Xo = /* @__PURE__ */ Ss(/* @__PURE__ */ qe.createContext(null));
class Es extends qe.Component {
  render() {
    return /* @__PURE__ */ qe.createElement(Xo.Provider, { value: this._reactInternals }, this.props.children);
  }
}
function bs() {
  const o = qe.useContext(Xo);
  if (o === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const l = qe.useId();
  return qe.useMemo(() => {
    for (const p of [o, o?.alternate]) {
      if (!p) continue;
      const m = qo(p, !1, (i) => {
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
  const o = bs(), [l] = qe.useState(() => /* @__PURE__ */ new Map());
  l.clear();
  let p = o;
  for (; p; ) {
    const m = p.type;
    Gv(m) && m !== Xo && !l.has(m) && l.set(m, qe.use(Ss(m))), p = p.return;
  }
  return l;
}
function Hv() {
  const o = jv();
  return qe.useMemo(
    () => Array.from(o.keys()).reduce(
      (l, p) => (m) => /* @__PURE__ */ qe.createElement(l, null, /* @__PURE__ */ qe.createElement(p.Provider, { ...m, value: o.get(p) })),
      (l) => /* @__PURE__ */ qe.createElement(Es, { ...l })
    ),
    [o]
  );
}
function Ts(o) {
  let l = o.root;
  for (; l.getState().previousRoot; ) l = l.getState().previousRoot;
  return l;
}
const _s = (o) => o && o.isOrthographicCamera, Vv = (o) => o && o.hasOwnProperty("current"), Lv = (o) => o != null && (typeof o == "string" || typeof o == "number" || o.isColor), wi = /* @__PURE__ */ ((o, l) => typeof window < "u" && (((o = window.document) == null ? void 0 : o.createElement) || ((l = window.navigator) == null ? void 0 : l.product) === "ReactNative"))() ? qe.useLayoutEffect : qe.useEffect;
function Us(o) {
  const l = qe.useRef(o);
  return wi(() => void (l.current = o), [o]), l;
}
function Yv() {
  const o = bs(), l = Hv();
  return qe.useMemo(() => ({
    children: p
  }) => {
    const i = !!qo(o, !0, (n) => n.type === qe.StrictMode) ? qe.StrictMode : qe.Fragment;
    return /* @__PURE__ */ he(i, {
      children: /* @__PURE__ */ he(l, {
        children: p
      })
    });
  }, [o, l]);
}
function qv({
  set: o
}) {
  return wi(() => (o(new Promise(() => null)), () => o(!1)), [o]), null;
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
function Ms(o) {
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
const Ds = ["children", "key", "ref"];
function Kv(o) {
  const l = {};
  for (const p in o)
    Ds.includes(p) || (l[p] = o[p]);
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
function Ji(o, l) {
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
const Qc = /-\d+$/;
function qu(o, l) {
  if (pt.str(l.props.attach)) {
    if (Qc.test(l.props.attach)) {
      const i = l.props.attach.replace(Qc, ""), {
        root: n,
        key: s
      } = Ji(o.object, i);
      Array.isArray(n[s]) || (n[s] = []);
    }
    const {
      root: p,
      key: m
    } = Ji(o.object, l.props.attach);
    l.previousAttach = p[m], p[m] = l.object;
  } else pt.fun(l.props.attach) && (l.previousAttach = l.props.attach(o.object, l.object));
}
function Xu(o, l) {
  if (pt.str(l.props.attach)) {
    const {
      root: p,
      key: m
    } = Ji(o.object, l.props.attach), i = l.previousAttach;
    i === void 0 ? delete p[m] : p[m] = i;
  } else
    l.previousAttach == null || l.previousAttach(o.object, l.object);
  delete l.previousAttach;
}
const Ao = [
  ...Ds,
  // Instance props
  "args",
  "dispose",
  "attach",
  "object",
  "onUpdate",
  // Behavior flags
  "dispose"
], Fc = /* @__PURE__ */ new Map();
function Zv(o) {
  let l = Fc.get(o.constructor);
  try {
    l || (l = new o.constructor(), Fc.set(o.constructor, l));
  } catch {
  }
  return l;
}
function Jv(o, l) {
  const p = {};
  for (const m in l)
    if (!Ao.includes(m) && !pt.equ(l[m], o.props[m])) {
      p[m] = l[m];
      for (const i in l)
        i.startsWith(`${m}-`) && (p[i] = l[i]);
    }
  for (const m in o.props) {
    if (Ao.includes(m) || l.hasOwnProperty(m)) continue;
    const {
      root: i,
      key: n
    } = Ji(o.object, m);
    if (i.constructor && i.constructor.length === 0) {
      const s = Zv(i);
      pt.und(s) || (p[n] = s[n]);
    } else
      p[n] = 0;
  }
  return p;
}
const wv = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"], Wv = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function An(o, l) {
  var p;
  const m = o.__r3f, i = m && Ts(m).getState(), n = m?.eventCount;
  for (const c in l) {
    let f = l[c];
    if (Ao.includes(c)) continue;
    if (m && Wv.test(c)) {
      typeof f == "function" ? m.handlers[c] = f : delete m.handlers[c], m.eventCount = Object.keys(m.handlers).length;
      continue;
    }
    if (f === void 0) continue;
    let {
      root: d,
      key: v,
      target: y
    } = Ji(o, c);
    if (y instanceof Le.Layers && f instanceof Le.Layers)
      y.mask = f.mask;
    else if (y instanceof Le.Color && Lv(f))
      y.set(f);
    else if (y !== null && typeof y == "object" && typeof y.set == "function" && typeof y.copy == "function" && f != null && f.constructor && y.constructor === f.constructor)
      y.copy(f);
    else if (y !== null && typeof y == "object" && typeof y.set == "function" && Array.isArray(f))
      typeof y.fromArray == "function" ? y.fromArray(f) : y.set(...f);
    else if (y !== null && typeof y == "object" && typeof y.set == "function" && typeof f == "number")
      typeof y.setScalar == "function" ? y.setScalar(f) : y.set(f);
    else {
      var s;
      d[v] = f, i && !i.linear && wv.includes(v) && (s = d[v]) != null && s.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
      d[v].format === Le.RGBAFormat && d[v].type === Le.UnsignedByteType && (d[v].colorSpace = Le.SRGBColorSpace);
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
  o.manual || (_s(o) ? (o.left = l.width / -2, o.right = l.width / 2, o.top = l.height / 2, o.bottom = l.height / -2) : o.aspect = l.width / l.height, o.updateProjectionMatrix());
}
const Wt = (o) => o?.isObject3D;
function zu(o) {
  return (o.eventObject || o.object).uuid + "/" + o.index + o.instanceId;
}
function As(o, l, p, m) {
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
    As(p.capturedMap, l, m, i);
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
    for (let A = 0; A < E.length; A++) {
      const b = Il(E[A]);
      b && (b.raycaster.camera = void 0);
    }
    v.previousRoot || v.events.compute == null || v.events.compute(f, v);
    function T(A) {
      const b = Il(A);
      if (!b || !b.events.enabled || b.raycaster.camera === null) return [];
      if (b.raycaster.camera === void 0) {
        var x;
        b.events.compute == null || b.events.compute(f, b, (x = b.previousRoot) == null ? void 0 : x.getState()), b.raycaster.camera === void 0 && (b.raycaster.camera = null);
      }
      return b.raycaster.camera ? b.raycaster.intersectObject(A, !0) : [];
    }
    let M = E.flatMap(T).sort((A, b) => {
      const x = Il(A.object), C = Il(b.object);
      return !x || !C ? A.distance - b.distance : C.events.priority - x.events.priority || A.distance - b.distance;
    }).filter((A) => {
      const b = zu(A);
      return y.has(b) ? !1 : (y.add(b), !0);
    });
    v.events.filter && (M = v.events.filter(M, v));
    for (const A of M) {
      let b = A.object;
      for (; b; ) {
        var D;
        (D = b.__r3f) != null && D.eventCount && g.push({
          ...A,
          eventObject: b
        }), b = b.parent;
      }
    }
    if ("pointerId" in f && v.internal.capturedMap.has(f.pointerId))
      for (let A of v.internal.capturedMap.get(f.pointerId).values())
        y.has(zu(A.intersection)) || g.push(A.intersection);
    return g;
  }
  function i(f, d, v, y) {
    if (f.length) {
      const g = {
        stopped: !1
      };
      for (const E of f) {
        let T = Il(E.object);
        if (T || E.object.traverseAncestors((M) => {
          const D = Il(M);
          if (D)
            return T = D, !1;
        }), T) {
          const {
            raycaster: M,
            pointer: D,
            camera: A,
            internal: b
          } = T, x = new Le.Vector3(D.x, D.y, 0).unproject(A), C = (W) => {
            var Q, ne;
            return (Q = (ne = b.capturedMap.get(W)) == null ? void 0 : ne.has(E.eventObject)) != null ? Q : !1;
          }, O = (W) => {
            const Q = {
              intersection: E,
              target: d.target
            };
            b.capturedMap.has(W) ? b.capturedMap.get(W).set(E.eventObject, Q) : b.capturedMap.set(W, /* @__PURE__ */ new Map([[E.eventObject, Q]])), d.target.setPointerCapture(W);
          }, H = (W) => {
            const Q = b.capturedMap.get(W);
            Q && As(b.capturedMap, E.eventObject, Q, W);
          };
          let G = {};
          for (let W in d) {
            let Q = d[W];
            typeof Q != "function" && (G[W] = Q);
          }
          let V = {
            ...E,
            ...G,
            pointer: D,
            intersections: f,
            stopped: g.stopped,
            delta: v,
            unprojectedPoint: x,
            ray: M.ray,
            camera: A,
            // Hijack stopPropagation, which just sets a flag
            stopPropagation() {
              const W = "pointerId" in d && b.capturedMap.get(d.pointerId);
              if (
                // ...if this pointer hasn't been captured
                (!W || // ... or if the hit object is capturing the pointer
                W.has(E.eventObject)) && (V.stopped = g.stopped = !0, b.hovered.size && Array.from(b.hovered.values()).find((Q) => Q.eventObject === E.eventObject))
              ) {
                const Q = f.slice(0, f.indexOf(E));
                n([...Q, E]);
              }
            },
            // there should be a distinction between target and currentTarget
            target: {
              hasPointerCapture: C,
              setPointerCapture: O,
              releasePointerCapture: H
            },
            currentTarget: {
              hasPointerCapture: C,
              setPointerCapture: O,
              releasePointerCapture: H
            },
            nativeEvent: d
          };
          if (y(V), g.stopped === !0) break;
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
          const E = g.handlers, T = {
            ...v,
            intersections: f
          };
          E.onPointerOut == null || E.onPointerOut(T), E.onPointerLeave == null || E.onPointerLeave(T);
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
      const E = f === "onPointerMove", T = f === "onClick" || f === "onContextMenu" || f === "onDoubleClick", D = m(v, E ? p : void 0), A = T ? l(v) : 0;
      f === "onPointerDown" && (g.initialClick = [v.offsetX, v.offsetY], g.initialHits = D.map((x) => x.eventObject)), T && !D.length && A <= 2 && (s(v, g.interaction), y && y(v)), E && n(D);
      function b(x) {
        const C = x.eventObject, O = C.__r3f;
        if (!(O != null && O.eventCount)) return;
        const H = O.handlers;
        if (E) {
          if (H.onPointerOver || H.onPointerEnter || H.onPointerOut || H.onPointerLeave) {
            const G = zu(x), V = g.hovered.get(G);
            V ? V.stopped && x.stopPropagation() : (g.hovered.set(G, x), H.onPointerOver == null || H.onPointerOver(x), H.onPointerEnter == null || H.onPointerEnter(x));
          }
          H.onPointerMove == null || H.onPointerMove(x);
        } else {
          const G = H[f];
          G ? (!T || g.initialHits.includes(C)) && (s(v, g.interaction.filter((V) => !g.initialHits.includes(V))), G(x)) : T && g.initialHits.includes(C) && s(v, g.interaction.filter((V) => !g.initialHits.includes(V)));
        }
      }
      i(D, v, A, b);
    };
  }
  return {
    handlePointer: c
  };
}
const Kc = (o) => !!(o != null && o.render), Cs = /* @__PURE__ */ qe.createContext(null), $v = (o, l) => {
  const p = Mv((c, f) => {
    const d = new Le.Vector3(), v = new Le.Vector3(), y = new Le.Vector3();
    function g(A = f().camera, b = v, x = f().size) {
      const {
        width: C,
        height: O,
        top: H,
        left: G
      } = x, V = C / O;
      b.isVector3 ? y.copy(b) : y.set(...b);
      const W = A.getWorldPosition(d).distanceTo(y);
      if (_s(A))
        return {
          width: C / A.zoom,
          height: O / A.zoom,
          top: H,
          left: G,
          factor: 1,
          distance: W,
          aspect: V
        };
      {
        const Q = A.fov * Math.PI / 180, ne = 2 * Math.tan(Q / 2) * W, N = ne * (C / O);
        return {
          width: N,
          height: ne,
          top: H,
          left: G,
          factor: C / N,
          distance: W,
          aspect: V
        };
      }
    }
    let E;
    const T = (A) => c((b) => ({
      performance: {
        ...b.performance,
        current: A
      }
    })), M = new Le.Vector2();
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
      invalidate: (A = 1) => o(f(), A),
      advance: (A, b) => l(A, b, f()),
      legacy: !1,
      linear: !1,
      flat: !1,
      controls: null,
      clock: new Le.Clock(),
      pointer: M,
      mouse: M,
      frameloop: "always",
      onPointerMissed: void 0,
      performance: {
        current: 1,
        min: 0.5,
        max: 1,
        debounce: 200,
        regress: () => {
          const A = f();
          E && clearTimeout(E), A.performance.current !== A.performance.min && T(A.performance.min), E = setTimeout(() => T(f().performance.max), A.performance.debounce);
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
      setEvents: (A) => c((b) => ({
        ...b,
        events: {
          ...b.events,
          ...A
        }
      })),
      setSize: (A, b, x = 0, C = 0) => {
        const O = f().camera, H = {
          width: A,
          height: b,
          top: x,
          left: C
        };
        c((G) => ({
          size: H,
          viewport: {
            ...G.viewport,
            ...g(O, v, H)
          }
        }));
      },
      setDpr: (A) => c((b) => {
        const x = Ms(A);
        return {
          viewport: {
            ...b.viewport,
            dpr: x,
            initialDpr: b.viewport.initialDpr || x
          }
        };
      }),
      setFrameloop: (A = "always") => {
        const b = f().clock;
        b.stop(), b.elapsedTime = 0, A !== "never" && (b.start(), b.elapsedTime = 0), c(() => ({
          frameloop: A
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
        subscribe: (A, b, x) => {
          const C = f().internal;
          return C.priority = C.priority + (b > 0 ? 1 : 0), C.subscribers.push({
            ref: A,
            priority: b,
            store: x
          }), C.subscribers = C.subscribers.sort((O, H) => O.priority - H.priority), () => {
            const O = f().internal;
            O != null && O.subscribers && (O.priority = O.priority - (b > 0 ? 1 : 0), O.subscribers = O.subscribers.filter((H) => H.ref !== A));
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
function Os() {
  const o = qe.useContext(Cs);
  if (!o) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return o;
}
function Rs(o = (p) => p, l) {
  return Os()(o, l);
}
function zs(o, l = 0) {
  const p = Os(), m = p.getState().internal.subscribe, i = Us(o);
  return wi(() => m(i, l, p), [l, m, p]), null;
}
const Zc = /* @__PURE__ */ new WeakMap(), e1 = (o) => {
  var l;
  return typeof o == "function" && (o == null || (l = o.prototype) == null ? void 0 : l.constructor) === o;
};
function xs(o, l) {
  return function(p, ...m) {
    let i;
    return e1(p) ? (i = Zc.get(p), i || (i = new p(), Zc.set(p, i))) : i = p, o && o(i), Promise.all(m.map((n) => new Promise((s, c) => i.load(n, (f) => {
      Wt(f?.scene) && Object.assign(f, Qv(f.scene)), s(f);
    }, l, (f) => c(new Error(`Could not load ${n}: ${f?.message}`))))));
  };
}
function Qo(o, l, p, m) {
  const i = Array.isArray(l) ? l : [l], n = ys(xs(p, m), [o, ...i], {
    equal: pt.equ
  });
  return Array.isArray(l) ? n : n[0];
}
Qo.preload = function(o, l, p) {
  const m = Array.isArray(l) ? l : [l];
  return Av(xs(p), [o, ...m]);
};
Qo.clear = function(o, l) {
  const p = Array.isArray(l) ? l : [l];
  return Cv([o, ...p]);
};
function t1(o) {
  const l = Nv(o);
  return l.injectIntoDevTools({
    bundleType: 0,
    rendererPackageName: "@react-three/fiber",
    version: qe.version
  }), l;
}
const Ns = 0, ai = {}, a1 = /^three(?=[A-Z])/, Ku = (o) => `${o[0].toUpperCase()}${o.slice(1)}`;
let n1 = 0;
const l1 = (o) => typeof o == "function";
function i1(o) {
  if (l1(o)) {
    const l = `${n1++}`;
    return ai[l] = o, l;
  } else
    Object.assign(ai, o);
}
function Bs(o, l) {
  const p = Ku(o), m = ai[p];
  if (o !== "primitive" && !m) throw new Error(`R3F: ${p} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (o === "primitive" && !l.object) throw new Error("R3F: Primitives without 'object' are invalid!");
  if (l.args !== void 0 && !Array.isArray(l.args)) throw new Error("R3F: The args prop must be an array!");
}
function u1(o, l, p) {
  var m;
  return o = Ku(o) in ai ? o : o.replace(a1, ""), Bs(o, l), o === "primitive" && (m = l.object) != null && m.__r3f && delete l.object.__r3f, Yu(l.object, p, o, l);
}
function r1(o) {
  if (!o.isHidden) {
    var l;
    o.props.attach && (l = o.parent) != null && l.object ? Xu(o.parent, o) : Wt(o.object) && (o.object.visible = !1), o.isHidden = !0, ni(o);
  }
}
function Gs(o) {
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
      const s = ai[Ku(l.type)];
      l.object = (i = l.props.object) != null ? i : new s(...(n = l.props.args) != null ? n : []), l.object.__r3f = l;
    }
    if (An(l.object, l.props), l.props.attach)
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
function yo(o, l) {
  l && (l.parent = o, o.children.push(l), Fo(o, l));
}
function Jc(o, l, p) {
  if (!l || !p) return;
  l.parent = o;
  const m = o.children.indexOf(p);
  m !== -1 ? o.children.splice(m, 0, l) : o.children.push(l), Fo(o, l, p);
}
function js(o) {
  if (typeof o.dispose == "function") {
    const l = () => {
      try {
        o.dispose();
      } catch {
      }
    };
    typeof IS_REACT_ACT_ENVIRONMENT < "u" ? l() : Xc.unstable_scheduleCallback(Xc.unstable_IdlePriority, l);
  }
}
function Co(o, l, p) {
  if (!l) return;
  l.parent = null;
  const m = o.children.indexOf(l);
  m !== -1 && o.children.splice(m, 1), l.props.attach ? Xu(o, l) : Wt(l.object) && Wt(o.object) && (o.object.remove(l.object), kv(Ts(l), l.object));
  const i = l.props.dispose !== null && p !== !1;
  for (let n = l.children.length - 1; n >= 0; n--) {
    const s = l.children[n];
    Co(l, s, i);
  }
  l.children.length = 0, delete l.object.__r3f, i && l.type !== "primitive" && l.object.type !== "Scene" && js(l.object), p === void 0 && ni(l);
}
function o1(o, l) {
  for (const p of [o, o.alternate])
    if (p !== null)
      if (typeof p.ref == "function") {
        p.refCleanup == null || p.refCleanup();
        const m = p.ref(l);
        typeof m == "function" && (p.refCleanup = m);
      } else p.ref && (p.ref.current = l);
}
const ju = [];
function f1() {
  for (const [p] of ju) {
    const m = p.parent;
    if (m) {
      p.props.attach ? Xu(m, p) : Wt(p.object) && Wt(m.object) && m.object.remove(p.object);
      for (const i of p.children)
        i.props.attach ? Xu(p, i) : Wt(i.object) && Wt(p.object) && p.object.remove(i.object);
    }
    p.isHidden && Gs(p), p.object.__r3f && delete p.object.__r3f, p.type !== "primitive" && js(p.object);
  }
  for (const [p, m, i] of ju) {
    p.props = m;
    const n = p.parent;
    if (n) {
      var o, l;
      const s = ai[Ku(p.type)];
      p.object = (o = p.props.object) != null ? o : new s(...(l = p.props.args) != null ? l : []), p.object.__r3f = p, o1(i, p.object), An(p.object, p.props), p.props.attach ? qu(n, p) : Wt(p.object) && Wt(n.object) && n.object.add(p.object);
      for (const c of p.children)
        c.props.attach ? qu(p, c) : Wt(c.object) && Wt(p.object) && p.object.add(c.object);
      ni(p);
    }
  }
  ju.length = 0;
}
const go = () => {
}, wc = {};
let xu = Ns;
const c1 = 0, s1 = 4, Oo = /* @__PURE__ */ t1({
  isPrimaryRenderer: !1,
  warnsIfNotActing: !1,
  supportsMutation: !0,
  supportsPersistence: !1,
  supportsHydration: !1,
  createInstance: u1,
  removeChild: Co,
  appendChild: yo,
  appendInitialChild: yo,
  insertBefore: Jc,
  appendChildToContainer(o, l) {
    const p = o.getState().scene.__r3f;
    !l || !p || yo(p, l);
  },
  removeChildFromContainer(o, l) {
    const p = o.getState().scene.__r3f;
    !l || !p || Co(p, l);
  },
  insertInContainerBefore(o, l, p) {
    const m = o.getState().scene.__r3f;
    !l || !p || !m || Jc(m, l, p);
  },
  getRootHostContext: () => wc,
  getChildHostContext: () => wc,
  commitUpdate(o, l, p, m, i) {
    var n, s, c;
    Bs(l, m);
    let f = !1;
    if ((o.type === "primitive" && p.object !== m.object || ((n = m.args) == null ? void 0 : n.length) !== ((s = p.args) == null ? void 0 : s.length) || (c = m.args) != null && c.some((v, y) => {
      var g;
      return v !== ((g = p.args) == null ? void 0 : g[y]);
    })) && (f = !0), f)
      ju.push([o, {
        ...m
      }, i]);
    else {
      const v = Jv(o, m);
      Object.keys(v).length && (Object.assign(o.props, v), An(o.object, v));
    }
    (i.sibling === null || (i.flags & s1) === c1) && f1();
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
  hideInstance: r1,
  unhideInstance: Gs,
  createTextInstance: go,
  hideTextInstance: go,
  unhideTextInstance: go,
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
    if (xu !== Ns) return xu;
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
function d1(o, l) {
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
function h1(o) {
  const l = hl.get(o), p = l?.fiber, m = l?.store;
  l && console.warn("R3F.createRoot should only be called once!");
  const i = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  ), n = m || $v(xo, Pc), s = p || Oo.createContainer(
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
      v = new Promise((_) => g = _);
      let {
        gl: E,
        size: T,
        scene: M,
        events: D,
        onCreated: A,
        shadows: b = !1,
        linear: x = !1,
        flat: C = !1,
        legacy: O = !1,
        orthographic: H = !1,
        frameloop: G = "always",
        dpr: V = [1, 2],
        performance: W,
        raycaster: Q,
        camera: ne,
        onPointerMissed: N
      } = y, L = n.getState(), Y = L.gl;
      if (!L.gl) {
        const _ = {
          canvas: o,
          powerPreference: "high-performance",
          antialias: !0,
          alpha: !0
        }, R = typeof E == "function" ? await E(_) : E;
        Kc(R) ? Y = R : Y = new Le.WebGLRenderer({
          ..._,
          ...E
        }), L.set({
          gl: Y
        });
      }
      let ie = L.raycaster;
      ie || L.set({
        raycaster: ie = new Le.Raycaster()
      });
      const {
        params: j,
        ...I
      } = Q || {};
      if (pt.equ(I, ie, $l) || An(ie, {
        ...I
      }), pt.equ(j, ie.params, $l) || An(ie, {
        params: {
          ...ie.params,
          ...j
        }
      }), !L.camera || L.camera === f && !pt.equ(f, ne, $l)) {
        f = ne;
        const _ = ne?.isCamera, R = _ ? ne : H ? new Le.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new Le.PerspectiveCamera(75, 0, 0.1, 1e3);
        _ || (R.position.z = 5, ne && (An(R, ne), R.manual || ("aspect" in ne || "left" in ne || "right" in ne || "bottom" in ne || "top" in ne) && (R.manual = !0, R.updateProjectionMatrix())), !L.camera && !(ne != null && ne.rotation) && R.lookAt(0, 0, 0)), L.set({
          camera: R
        }), ie.camera = R;
      }
      if (!L.scene) {
        let _;
        M != null && M.isScene ? (_ = M, Yu(_, n, "", {})) : (_ = new Le.Scene(), Yu(_, n, "", {}), M && An(_, M)), L.set({
          scene: _
        });
      }
      D && !L.events.handlers && L.set({
        events: D(n)
      });
      const te = d1(o, T);
      if (pt.equ(te, L.size, $l) || L.setSize(te.width, te.height, te.top, te.left), V && L.viewport.dpr !== Ms(V) && L.setDpr(V), L.frameloop !== G && L.setFrameloop(G), L.onPointerMissed || L.set({
        onPointerMissed: N
      }), W && !pt.equ(W, L.performance, $l) && L.set((_) => ({
        performance: {
          ..._.performance,
          ...W
        }
      })), !L.xr) {
        var J;
        const _ = (q, F) => {
          const ae = n.getState();
          ae.frameloop !== "never" && Pc(q, !0, ae, F);
        }, R = () => {
          const q = n.getState();
          q.gl.xr.enabled = q.gl.xr.isPresenting, q.gl.xr.setAnimationLoop(q.gl.xr.isPresenting ? _ : null), q.gl.xr.isPresenting || xo(q);
        }, K = {
          connect() {
            const q = n.getState().gl;
            q.xr.addEventListener("sessionstart", R), q.xr.addEventListener("sessionend", R);
          },
          disconnect() {
            const q = n.getState().gl;
            q.xr.removeEventListener("sessionstart", R), q.xr.removeEventListener("sessionend", R);
          }
        };
        typeof ((J = Y.xr) == null ? void 0 : J.addEventListener) == "function" && K.connect(), L.set({
          xr: K
        });
      }
      if (Y.shadowMap) {
        const _ = Y.shadowMap.enabled, R = Y.shadowMap.type;
        if (Y.shadowMap.enabled = !!b, pt.boo(b))
          Y.shadowMap.type = Le.PCFSoftShadowMap;
        else if (pt.str(b)) {
          var w;
          const K = {
            basic: Le.BasicShadowMap,
            percentage: Le.PCFShadowMap,
            soft: Le.PCFSoftShadowMap,
            variance: Le.VSMShadowMap
          };
          Y.shadowMap.type = (w = K[b]) != null ? w : Le.PCFSoftShadowMap;
        } else pt.obj(b) && Object.assign(Y.shadowMap, b);
        (_ !== Y.shadowMap.enabled || R !== Y.shadowMap.type) && (Y.shadowMap.needsUpdate = !0);
      }
      return Le.ColorManagement.enabled = !O, d || (Y.outputColorSpace = x ? Le.LinearSRGBColorSpace : Le.SRGBColorSpace, Y.toneMapping = C ? Le.NoToneMapping : Le.ACESFilmicToneMapping), L.legacy !== O && L.set(() => ({
        legacy: O
      })), L.linear !== x && L.set(() => ({
        linear: x
      })), L.flat !== C && L.set(() => ({
        flat: C
      })), E && !pt.fun(E) && !Kc(E) && !pt.equ(E, Y, $l) && An(Y, E), c = A, d = !0, g(), this;
    },
    render(y) {
      return !d && !v && this.configure(), v.then(() => {
        Oo.updateContainer(/* @__PURE__ */ he(v1, {
          store: n,
          children: y,
          onCreated: c,
          rootElement: o
        }), s, null, () => {
        });
      }), n;
    },
    unmount() {
      Hs(o);
    }
  };
}
function v1({
  store: o,
  children: l,
  onCreated: p,
  rootElement: m
}) {
  return wi(() => {
    const i = o.getState();
    i.set((n) => ({
      internal: {
        ...n.internal,
        active: !0
      }
    })), p && p(i), o.getState().events.connected || i.events.connect == null || i.events.connect(m);
  }, []), /* @__PURE__ */ he(Cs.Provider, {
    value: o,
    children: l
  });
}
function Hs(o, l) {
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
const p1 = /* @__PURE__ */ new Set(), m1 = /* @__PURE__ */ new Set(), y1 = /* @__PURE__ */ new Set();
function So(o, l) {
  if (o.size)
    for (const {
      callback: p
    } of o.values())
      p(l);
}
function Fi(o, l) {
  switch (o) {
    case "before":
      return So(p1, l);
    case "after":
      return So(m1, l);
    case "tail":
      return So(y1, l);
  }
}
let Eo, bo;
function Ro(o, l, p) {
  let m = l.clock.getDelta();
  l.frameloop === "never" && typeof o == "number" && (m = o - l.clock.elapsedTime, l.clock.oldTime = l.clock.elapsedTime, l.clock.elapsedTime = o), Eo = l.internal.subscribers;
  for (let i = 0; i < Eo.length; i++)
    bo = Eo[i], bo.ref.current(bo.store.getState(), m, p);
  return !l.internal.priority && l.gl.render && l.gl.render(l.scene, l.camera), l.internal.frames = Math.max(0, l.internal.frames - 1), l.frameloop === "always" ? 1 : l.internal.frames;
}
let Qu = !1, zo = !1, To, Wc, ei;
function Vs(o) {
  Wc = requestAnimationFrame(Vs), Qu = !0, To = 0, Fi("before", o), zo = !0;
  for (const p of hl.values()) {
    var l;
    ei = p.store.getState(), ei.internal.active && (ei.frameloop === "always" || ei.internal.frames > 0) && !((l = ei.gl.xr) != null && l.isPresenting) && (To += Ro(o, ei));
  }
  if (zo = !1, Fi("after", o), To === 0)
    return Fi("tail", o), Qu = !1, cancelAnimationFrame(Wc);
}
function xo(o, l = 1) {
  var p;
  if (!o) return hl.forEach((m) => xo(m.store.getState(), l));
  (p = o.gl.xr) != null && p.isPresenting || !o.internal.active || o.frameloop === "never" || (l > 1 ? o.internal.frames = Math.min(60, o.internal.frames + l) : zo ? o.internal.frames = 2 : o.internal.frames = 1, Qu || (Qu = !0, requestAnimationFrame(Vs)));
}
function Pc(o, l = !0, p, m) {
  if (l && Fi("before", o), p) Ro(o, p, m);
  else for (const i of hl.values()) Ro(o, i.store.getState());
  l && Fi("after", o);
}
const _o = {
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
function g1(o) {
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
    handlers: Object.keys(_o).reduce((p, m) => ({
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
          const s = i.handlers[n], [c, f] = _o[n];
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
            const n = m.handlers[i], [s] = _o[i];
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
function kc(o, l) {
  let p;
  return (...m) => {
    window.clearTimeout(p), p = window.setTimeout(() => o(...m), l);
  };
}
function S1({ debounce: o, scroll: l, polyfill: p, offsetSize: m } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const i = p || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!i) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [n, s] = Va({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), c = Qi({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: n, orientationHandler: null }), f = o ? typeof o == "number" ? o : o.scroll : null, d = o ? typeof o == "number" ? o : o.resize : null, v = Qi(!1);
  Ta(() => (v.current = !0, () => void (v.current = !1)));
  const [y, g, E] = ds(() => {
    const A = () => {
      if (!c.current.element) return;
      const { left: b, top: x, width: C, height: O, bottom: H, right: G, x: V, y: W } = c.current.element.getBoundingClientRect(), Q = { left: b, top: x, width: C, height: O, bottom: H, right: G, x: V, y: W };
      c.current.element instanceof HTMLElement && m && (Q.height = c.current.element.offsetHeight, Q.width = c.current.element.offsetWidth), Object.freeze(Q), v.current && !_1(c.current.lastBounds, Q) && s(c.current.lastBounds = Q);
    };
    return [A, d ? kc(A, d) : A, f ? kc(A, f) : A];
  }, [s, m, f, d]);
  function T() {
    c.current.scrollContainers && (c.current.scrollContainers.forEach((A) => A.removeEventListener("scroll", E, !0)), c.current.scrollContainers = null), c.current.resizeObserver && (c.current.resizeObserver.disconnect(), c.current.resizeObserver = null), c.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", c.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", c.current.orientationHandler));
  }
  function M() {
    c.current.element && (c.current.resizeObserver = new i(E), c.current.resizeObserver.observe(c.current.element), l && c.current.scrollContainers && c.current.scrollContainers.forEach((A) => A.addEventListener("scroll", E, { capture: !0, passive: !0 })), c.current.orientationHandler = () => {
      E();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", c.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", c.current.orientationHandler));
  }
  const D = (A) => {
    !A || A === c.current.element || (T(), c.current.element = A, c.current.scrollContainers = Ls(A), M());
  };
  return b1(E, !!l), E1(g), Ta(() => {
    T(), M();
  }, [l, E, g]), Ta(() => T, []), [D, n, y];
}
function E1(o) {
  Ta(() => {
    const l = o;
    return window.addEventListener("resize", l), () => void window.removeEventListener("resize", l);
  }, [o]);
}
function b1(o, l) {
  Ta(() => {
    if (l) {
      const p = o;
      return window.addEventListener("scroll", p, { capture: !0, passive: !0 }), () => void window.removeEventListener("scroll", p, !0);
    }
  }, [o, l]);
}
function Ls(o) {
  const l = [];
  if (!o || o === document.body) return l;
  const { overflow: p, overflowX: m, overflowY: i } = window.getComputedStyle(o);
  return [p, m, i].some((n) => n === "auto" || n === "scroll") && l.push(o), [...l, ...Ls(o.parentElement)];
}
const T1 = ["x", "y", "top", "bottom", "left", "right", "width", "height"], _1 = (o, l) => T1.every((p) => o[p] === l[p]);
function U1({
  ref: o,
  children: l,
  fallback: p,
  resize: m,
  style: i,
  gl: n,
  events: s = g1,
  eventSource: c,
  eventPrefix: f,
  shadows: d,
  linear: v,
  flat: y,
  legacy: g,
  orthographic: E,
  frameloop: T,
  dpr: M,
  performance: D,
  raycaster: A,
  camera: b,
  scene: x,
  onPointerMissed: C,
  onCreated: O,
  ...H
}) {
  qe.useMemo(() => i1(Le), []);
  const G = Yv(), [V, W] = S1({
    scroll: !0,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...m
  }), Q = qe.useRef(null), ne = qe.useRef(null);
  qe.useImperativeHandle(o, () => Q.current);
  const N = Us(C), [L, Y] = qe.useState(!1), [ie, j] = qe.useState(!1);
  if (L) throw L;
  if (ie) throw ie;
  const I = qe.useRef(null);
  return wi(() => {
    const J = Q.current;
    if (W.width > 0 && W.height > 0 && J) {
      I.current || (I.current = h1(J));
      async function w() {
        await I.current.configure({
          gl: n,
          scene: x,
          events: s,
          shadows: d,
          linear: v,
          flat: y,
          legacy: g,
          orthographic: E,
          frameloop: T,
          dpr: M,
          performance: D,
          raycaster: A,
          camera: b,
          size: W,
          // Pass mutable reference to onPointerMissed so it's free to update
          onPointerMissed: (..._) => N.current == null ? void 0 : N.current(..._),
          onCreated: (_) => {
            _.events.connect == null || _.events.connect(c ? Vv(c) ? c.current : c : ne.current), f && _.setEvents({
              compute: (R, K) => {
                const q = R[f + "X"], F = R[f + "Y"];
                K.pointer.set(q / K.size.width * 2 - 1, -(F / K.size.height) * 2 + 1), K.raycaster.setFromCamera(K.pointer, K.camera);
              }
            }), O?.(_);
          }
        }), I.current.render(/* @__PURE__ */ he(G, {
          children: /* @__PURE__ */ he(Xv, {
            set: j,
            children: /* @__PURE__ */ he(qe.Suspense, {
              fallback: /* @__PURE__ */ he(qv, {
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
    const J = Q.current;
    if (J) return () => Hs(J);
  }, []), /* @__PURE__ */ he("div", {
    ref: ne,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: c ? "none" : "auto",
      ...i
    },
    ...H,
    children: /* @__PURE__ */ he("div", {
      ref: V,
      style: {
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ he("canvas", {
        ref: Q,
        style: {
          display: "block"
        },
        children: p
      })
    })
  });
}
function M1(o) {
  return /* @__PURE__ */ he(Es, {
    children: /* @__PURE__ */ he(U1, {
      ...o
    })
  });
}
function No() {
  return No = Object.assign ? Object.assign.bind() : function(o) {
    for (var l = 1; l < arguments.length; l++) {
      var p = arguments[l];
      for (var m in p) ({}).hasOwnProperty.call(p, m) && (o[m] = p[m]);
    }
    return o;
  }, No.apply(null, arguments);
}
function D1() {
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
function A1(o) {
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
var Ys = function() {
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
  return Ys = function() {
    return o;
  }, o;
}, C1 = 0, O1 = 0, Uo = !1, Ki = /* @__PURE__ */ Object.create(null), Zi = /* @__PURE__ */ Object.create(null), Bo = /* @__PURE__ */ Object.create(null);
function li(o) {
  if ((!o || typeof o.init != "function") && !Uo)
    throw new Error("requires `options.init` function");
  var l = o.dependencies, p = o.init, m = o.getTransferables, i = o.workerId, n = A1(o);
  i == null && (i = "#default");
  var s = "workerModule" + ++C1, c = o.name || s, f = null;
  l = l && l.map(function(v) {
    return typeof v == "function" && !v.workerModuleData && (Uo = !0, v = li({
      workerId: i,
      name: "<" + c + "> function dependency: " + v.name,
      init: `function(){return (
` + Hu(v) + `
)}`
    }), Uo = !1), v && v.workerModuleData && (v = v.workerModuleData), v;
  });
  function d() {
    for (var v = [], y = arguments.length; y--; ) v[y] = arguments[y];
    if (!Ys())
      return n.apply(void 0, v);
    if (!f) {
      f = Ic(i, "registerModule", d.workerModuleData);
      var g = function() {
        f = null, Zi[i].delete(g);
      };
      (Zi[i] || (Zi[i] = /* @__PURE__ */ new Set())).add(g);
    }
    return f.then(function(E) {
      var T = E.isCallable;
      if (T)
        return Ic(i, "callModule", { id: s, args: v });
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
function R1(o) {
  Zi[o] && Zi[o].forEach(function(l) {
    l();
  }), Ki[o] && (Ki[o].terminate(), delete Ki[o]);
}
function Hu(o) {
  var l = o.toString();
  return !/^function/.test(l) && /^\w+\s*\(/.test(l) && (l = "function " + l), l;
}
function z1(o) {
  var l = Ki[o];
  if (!l) {
    var p = Hu(D1);
    l = Ki[o] = new Worker(
      URL.createObjectURL(
        new Blob(
          ["/** Worker Module Bootstrap: " + o.replace(/\*/g, "") + ` **/

;(` + p + ")()"],
          { type: "application/javascript" }
        )
      )
    ), l.onmessage = function(m) {
      var i = m.data, n = i.messageId, s = Bo[n];
      if (!s)
        throw new Error("WorkerModule response with empty or unknown messageId");
      delete Bo[n], s(i);
    };
  }
  return l;
}
function Ic(o, l, p) {
  return new Promise(function(m, i) {
    var n = ++O1;
    Bo[n] = function(s) {
      s.success ? m(s.result) : i(new Error("Error in worker " + l + " call: " + s.error));
    }, z1(o).postMessage({
      messageId: n,
      action: l,
      data: p
    });
  });
}
function qs() {
  var o = (function(l) {
    function p(J, w, _, R, K, q, F, ae) {
      var k = 1 - F;
      ae.x = k * k * J + 2 * k * F * _ + F * F * K, ae.y = k * k * w + 2 * k * F * R + F * F * q;
    }
    function m(J, w, _, R, K, q, F, ae, k, ee) {
      var se = 1 - k;
      ee.x = se * se * se * J + 3 * se * se * k * _ + 3 * se * k * k * K + k * k * k * F, ee.y = se * se * se * w + 3 * se * se * k * R + 3 * se * k * k * q + k * k * k * ae;
    }
    function i(J, w) {
      for (var _ = /([MLQCZ])([^MLQCZ]*)/g, R, K, q, F, ae; R = _.exec(J); ) {
        var k = R[2].replace(/^\s*|\s*$/g, "").split(/[,\s]+/).map(function(ee) {
          return parseFloat(ee);
        });
        switch (R[1]) {
          case "M":
            F = K = k[0], ae = q = k[1];
            break;
          case "L":
            (k[0] !== F || k[1] !== ae) && w("L", F, ae, F = k[0], ae = k[1]);
            break;
          case "Q": {
            w("Q", F, ae, F = k[2], ae = k[3], k[0], k[1]);
            break;
          }
          case "C": {
            w("C", F, ae, F = k[4], ae = k[5], k[0], k[1], k[2], k[3]);
            break;
          }
          case "Z":
            (F !== K || ae !== q) && w("L", F, ae, K, q);
            break;
        }
      }
    }
    function n(J, w, _) {
      _ === void 0 && (_ = 16);
      var R = { x: 0, y: 0 };
      i(J, function(K, q, F, ae, k, ee, se, Se, oe) {
        switch (K) {
          case "L":
            w(q, F, ae, k);
            break;
          case "Q": {
            for (var le = q, Ne = F, Ce = 1; Ce < _; Ce++)
              p(
                q,
                F,
                ee,
                se,
                ae,
                k,
                Ce / (_ - 1),
                R
              ), w(le, Ne, R.x, R.y), le = R.x, Ne = R.y;
            break;
          }
          case "C": {
            for (var me = q, Ee = F, be = 1; be < _; be++)
              m(
                q,
                F,
                ee,
                se,
                Se,
                oe,
                ae,
                k,
                be / (_ - 1),
                R
              ), w(me, Ee, R.x, R.y), me = R.x, Ee = R.y;
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
    function v(J, w) {
      var _ = J.getContext ? J.getContext("webgl", d) : J, R = f.get(_);
      if (!R) {
        let se = function(me) {
          var Ee = q[me];
          if (!Ee && (Ee = q[me] = _.getExtension(me), !Ee))
            throw new Error(me + " not supported");
          return Ee;
        }, Se = function(me, Ee) {
          var be = _.createShader(Ee);
          return _.shaderSource(be, me), _.compileShader(be), be;
        }, oe = function(me, Ee, be, fe) {
          if (!F[me]) {
            var ge = {}, ve = {}, $ = _.createProgram();
            _.attachShader($, Se(Ee, _.VERTEX_SHADER)), _.attachShader($, Se(be, _.FRAGMENT_SHADER)), _.linkProgram($), F[me] = {
              program: $,
              transaction: function(ye) {
                _.useProgram($), ye({
                  setUniform: function(de, We) {
                    for (var Te = [], De = arguments.length - 2; De-- > 0; ) Te[De] = arguments[De + 2];
                    var Oe = ve[We] || (ve[We] = _.getUniformLocation($, We));
                    _["uniform" + de].apply(_, [Oe].concat(Te));
                  },
                  setAttribute: function(de, We, Te, De, Oe) {
                    var Ve = ge[de];
                    Ve || (Ve = ge[de] = {
                      buf: _.createBuffer(),
                      // TODO should we destroy our buffers?
                      loc: _.getAttribLocation($, de),
                      data: null
                    }), _.bindBuffer(_.ARRAY_BUFFER, Ve.buf), _.vertexAttribPointer(Ve.loc, We, _.FLOAT, !1, 0, 0), _.enableVertexAttribArray(Ve.loc), K ? _.vertexAttribDivisor(Ve.loc, De) : se("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ve.loc, De), Oe !== Ve.data && (_.bufferData(_.ARRAY_BUFFER, Oe, Te), Ve.data = Oe);
                  }
                });
              }
            };
          }
          F[me].transaction(fe);
        }, le = function(me, Ee) {
          k++;
          try {
            _.activeTexture(_.TEXTURE0 + k);
            var be = ae[me];
            be || (be = ae[me] = _.createTexture(), _.bindTexture(_.TEXTURE_2D, be), _.texParameteri(_.TEXTURE_2D, _.TEXTURE_MIN_FILTER, _.NEAREST), _.texParameteri(_.TEXTURE_2D, _.TEXTURE_MAG_FILTER, _.NEAREST)), _.bindTexture(_.TEXTURE_2D, be), Ee(be, k);
          } finally {
            k--;
          }
        }, Ne = function(me, Ee, be) {
          var fe = _.createFramebuffer();
          ee.push(fe), _.bindFramebuffer(_.FRAMEBUFFER, fe), _.activeTexture(_.TEXTURE0 + Ee), _.bindTexture(_.TEXTURE_2D, me), _.framebufferTexture2D(_.FRAMEBUFFER, _.COLOR_ATTACHMENT0, _.TEXTURE_2D, me, 0);
          try {
            be(fe);
          } finally {
            _.deleteFramebuffer(fe), _.bindFramebuffer(_.FRAMEBUFFER, ee[--ee.length - 1] || null);
          }
        }, Ce = function() {
          q = {}, F = {}, ae = {}, k = -1, ee.length = 0;
        };
        var K = typeof WebGL2RenderingContext < "u" && _ instanceof WebGL2RenderingContext, q = {}, F = {}, ae = {}, k = -1, ee = [];
        _.canvas.addEventListener("webglcontextlost", function(me) {
          Ce(), me.preventDefault();
        }, !1), f.set(_, R = {
          gl: _,
          isWebGL2: K,
          getExtension: se,
          withProgram: oe,
          withTexture: le,
          withTextureFramebuffer: Ne,
          handleContextLoss: Ce
        });
      }
      w(R);
    }
    function y(J, w, _, R, K, q, F, ae) {
      F === void 0 && (F = 15), ae === void 0 && (ae = null), v(J, function(k) {
        var ee = k.gl, se = k.withProgram, Se = k.withTexture;
        Se("copy", function(oe, le) {
          ee.texImage2D(ee.TEXTURE_2D, 0, ee.RGBA, K, q, 0, ee.RGBA, ee.UNSIGNED_BYTE, w), se("copy", s, c, function(Ne) {
            var Ce = Ne.setUniform, me = Ne.setAttribute;
            me("aUV", 2, ee.STATIC_DRAW, 0, new Float32Array([0, 0, 2, 0, 0, 2])), Ce("1i", "image", le), ee.bindFramebuffer(ee.FRAMEBUFFER, ae || null), ee.disable(ee.BLEND), ee.colorMask(F & 8, F & 4, F & 2, F & 1), ee.viewport(_, R, K, q), ee.scissor(_, R, K, q), ee.drawArrays(ee.TRIANGLES, 0, 3);
          });
        });
      });
    }
    function g(J, w, _) {
      var R = J.width, K = J.height;
      v(J, function(q) {
        var F = q.gl, ae = new Uint8Array(R * K * 4);
        F.readPixels(0, 0, R, K, F.RGBA, F.UNSIGNED_BYTE, ae), J.width = w, J.height = _, y(F, ae, 0, 0, R, K);
      });
    }
    var E = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      withWebGLContext: v,
      renderImageData: y,
      resizeWebGLCanvasWithoutClearing: g
    });
    function T(J, w, _, R, K, q) {
      q === void 0 && (q = 1);
      var F = new Uint8Array(J * w), ae = R[2] - R[0], k = R[3] - R[1], ee = [];
      n(_, function(me, Ee, be, fe) {
        ee.push({
          x1: me,
          y1: Ee,
          x2: be,
          y2: fe,
          minX: Math.min(me, be),
          minY: Math.min(Ee, fe),
          maxX: Math.max(me, be),
          maxY: Math.max(Ee, fe)
        });
      }), ee.sort(function(me, Ee) {
        return me.maxX - Ee.maxX;
      });
      for (var se = 0; se < J; se++)
        for (var Se = 0; Se < w; Se++) {
          var oe = Ne(
            R[0] + ae * (se + 0.5) / J,
            R[1] + k * (Se + 0.5) / w
          ), le = Math.pow(1 - Math.abs(oe) / K, q) / 2;
          oe < 0 && (le = 1 - le), le = Math.max(0, Math.min(255, Math.round(le * 255))), F[Se * J + se] = le;
        }
      return F;
      function Ne(me, Ee) {
        for (var be = 1 / 0, fe = 1 / 0, ge = ee.length; ge--; ) {
          var ve = ee[ge];
          if (ve.maxX + fe <= me)
            break;
          if (me + fe > ve.minX && Ee - fe < ve.maxY && Ee + fe > ve.minY) {
            var $ = A(me, Ee, ve.x1, ve.y1, ve.x2, ve.y2);
            $ < be && (be = $, fe = Math.sqrt(be));
          }
        }
        return Ce(me, Ee) && (fe = -fe), fe;
      }
      function Ce(me, Ee) {
        for (var be = 0, fe = ee.length; fe--; ) {
          var ge = ee[fe];
          if (ge.maxX <= me)
            break;
          var ve = ge.y1 > Ee != ge.y2 > Ee && me < (ge.x2 - ge.x1) * (Ee - ge.y1) / (ge.y2 - ge.y1) + ge.x1;
          ve && (be += ge.y1 < ge.y2 ? 1 : -1);
        }
        return be !== 0;
      }
    }
    function M(J, w, _, R, K, q, F, ae, k, ee) {
      q === void 0 && (q = 1), ae === void 0 && (ae = 0), k === void 0 && (k = 0), ee === void 0 && (ee = 0), D(J, w, _, R, K, q, F, null, ae, k, ee);
    }
    function D(J, w, _, R, K, q, F, ae, k, ee, se) {
      q === void 0 && (q = 1), k === void 0 && (k = 0), ee === void 0 && (ee = 0), se === void 0 && (se = 0);
      for (var Se = T(J, w, _, R, K, q), oe = new Uint8Array(Se.length * 4), le = 0; le < Se.length; le++)
        oe[le * 4 + se] = Se[le];
      y(F, oe, k, ee, J, w, 1 << 3 - se, ae);
    }
    function A(J, w, _, R, K, q) {
      var F = K - _, ae = q - R, k = F * F + ae * ae, ee = k ? Math.max(0, Math.min(1, ((J - _) * F + (w - R) * ae) / k)) : 0, se = J - (_ + ee * F), Se = w - (R + ee * ae);
      return se * se + Se * Se;
    }
    var b = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      generate: T,
      generateIntoCanvas: M,
      generateIntoFramebuffer: D
    }), x = "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", C = "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}", O = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}", H = new Float32Array([0, 0, 2, 0, 0, 2]), G = null, V = !1, W = {}, Q = /* @__PURE__ */ new WeakMap();
    function ne(J) {
      if (!V && !ie(J))
        throw new Error("WebGL generation not supported");
    }
    function N(J, w, _, R, K, q, F) {
      if (q === void 0 && (q = 1), F === void 0 && (F = null), !F && (F = G, !F)) {
        var ae = typeof OffscreenCanvas == "function" ? new OffscreenCanvas(1, 1) : typeof document < "u" ? document.createElement("canvas") : null;
        if (!ae)
          throw new Error("OffscreenCanvas or DOM canvas not supported");
        F = G = ae.getContext("webgl", { depth: !1 });
      }
      ne(F);
      var k = new Uint8Array(J * w * 4);
      v(F, function(oe) {
        var le = oe.gl, Ne = oe.withTexture, Ce = oe.withTextureFramebuffer;
        Ne("readable", function(me, Ee) {
          le.texImage2D(le.TEXTURE_2D, 0, le.RGBA, J, w, 0, le.RGBA, le.UNSIGNED_BYTE, null), Ce(me, Ee, function(be) {
            Y(
              J,
              w,
              _,
              R,
              K,
              q,
              le,
              be,
              0,
              0,
              0
              // red channel
            ), le.readPixels(0, 0, J, w, le.RGBA, le.UNSIGNED_BYTE, k);
          });
        });
      });
      for (var ee = new Uint8Array(J * w), se = 0, Se = 0; se < k.length; se += 4)
        ee[Se++] = k[se];
      return ee;
    }
    function L(J, w, _, R, K, q, F, ae, k, ee) {
      q === void 0 && (q = 1), ae === void 0 && (ae = 0), k === void 0 && (k = 0), ee === void 0 && (ee = 0), Y(J, w, _, R, K, q, F, null, ae, k, ee);
    }
    function Y(J, w, _, R, K, q, F, ae, k, ee, se) {
      q === void 0 && (q = 1), k === void 0 && (k = 0), ee === void 0 && (ee = 0), se === void 0 && (se = 0), ne(F);
      var Se = [];
      n(_, function(oe, le, Ne, Ce) {
        Se.push(oe, le, Ne, Ce);
      }), Se = new Float32Array(Se), v(F, function(oe) {
        var le = oe.gl, Ne = oe.isWebGL2, Ce = oe.getExtension, me = oe.withProgram, Ee = oe.withTexture, be = oe.withTextureFramebuffer, fe = oe.handleContextLoss;
        if (Ee("rawDistances", function(ge, ve) {
          (J !== ge._lastWidth || w !== ge._lastHeight) && le.texImage2D(
            le.TEXTURE_2D,
            0,
            le.RGBA,
            ge._lastWidth = J,
            ge._lastHeight = w,
            0,
            le.RGBA,
            le.UNSIGNED_BYTE,
            null
          ), me("main", x, C, function($) {
            var He = $.setAttribute, ye = $.setUniform, Ue = !Ne && Ce("ANGLE_instanced_arrays"), de = !Ne && Ce("EXT_blend_minmax");
            He("aUV", 2, le.STATIC_DRAW, 0, H), He("aLineSegment", 4, le.DYNAMIC_DRAW, 1, Se), ye.apply(void 0, ["4f", "uGlyphBounds"].concat(R)), ye("1f", "uMaxDistance", K), ye("1f", "uExponent", q), be(ge, ve, function(We) {
              le.enable(le.BLEND), le.colorMask(!0, !0, !0, !0), le.viewport(0, 0, J, w), le.scissor(0, 0, J, w), le.blendFunc(le.ONE, le.ONE), le.blendEquationSeparate(le.FUNC_ADD, Ne ? le.MAX : de.MAX_EXT), le.clear(le.COLOR_BUFFER_BIT), Ne ? le.drawArraysInstanced(le.TRIANGLES, 0, 3, Se.length / 4) : Ue.drawArraysInstancedANGLE(le.TRIANGLES, 0, 3, Se.length / 4);
            });
          }), me("post", s, O, function($) {
            $.setAttribute("aUV", 2, le.STATIC_DRAW, 0, H), $.setUniform("1i", "tex", ve), le.bindFramebuffer(le.FRAMEBUFFER, ae), le.disable(le.BLEND), le.colorMask(se === 0, se === 1, se === 2, se === 3), le.viewport(k, ee, J, w), le.scissor(k, ee, J, w), le.drawArrays(le.TRIANGLES, 0, 3);
          });
        }), le.isContextLost())
          throw fe(), new Error("webgl context lost");
      });
    }
    function ie(J) {
      var w = !J || J === G ? W : J.canvas || J, _ = Q.get(w);
      if (_ === void 0) {
        V = !0;
        var R = null;
        try {
          var K = [
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
          ], q = N(
            4,
            4,
            "M8,8L16,8L24,24L16,24Z",
            [0, 0, 32, 32],
            24,
            1,
            J
          );
          _ = q && K.length === q.length && q.every(function(F, ae) {
            return F === K[ae];
          }), _ || (R = "bad trial run results", console.info(K, q));
        } catch (F) {
          _ = !1, R = F.message;
        }
        R && console.warn("WebGL SDF generation not supported:", R), V = !1, Q.set(w, _);
      }
      return _;
    }
    var j = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      generate: N,
      generateIntoCanvas: L,
      generateIntoFramebuffer: Y,
      isSupported: ie
    });
    function I(J, w, _, R, K, q) {
      K === void 0 && (K = Math.max(R[2] - R[0], R[3] - R[1]) / 2), q === void 0 && (q = 1);
      try {
        return N.apply(j, arguments);
      } catch (F) {
        return console.info("WebGL SDF generation failed, falling back to JS", F), T.apply(b, arguments);
      }
    }
    function te(J, w, _, R, K, q, F, ae, k, ee) {
      K === void 0 && (K = Math.max(R[2] - R[0], R[3] - R[1]) / 2), q === void 0 && (q = 1), ae === void 0 && (ae = 0), k === void 0 && (k = 0), ee === void 0 && (ee = 0);
      try {
        return L.apply(j, arguments);
      } catch (se) {
        return console.info("WebGL SDF generation failed, falling back to JS", se), M.apply(b, arguments);
      }
    }
    return l.forEachPathCommand = i, l.generate = I, l.generateIntoCanvas = te, l.javascript = b, l.pathToLineSegments = n, l.webgl = j, l.webglUtils = E, Object.defineProperty(l, "__esModule", { value: !0 }), l;
  })({});
  return o;
}
function x1() {
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
            p[ve].split(",").forEach(function(He) {
              var ye = He.split("+"), Ue = ye[0], de = ye[1];
              Ue = parseInt(Ue, 36), de = de ? parseInt(de, 36) : 0, v.set($ += Ue, m[ve]);
              for (var We = 0; We < de; We++)
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
    var T = {
      pairs: "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
      canonical: "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"
    };
    function M(fe, ge) {
      var ve = 36, $ = 0, He = /* @__PURE__ */ new Map(), ye = ge && /* @__PURE__ */ new Map(), Ue;
      return fe.split(",").forEach(function de(We) {
        if (We.indexOf("+") !== -1)
          for (var Te = +We; Te--; )
            de(Ue);
        else {
          Ue = We;
          var De = We.split(">"), Oe = De[0], Ve = De[1];
          Oe = String.fromCodePoint($ += parseInt(Oe, ve)), Ve = String.fromCodePoint($ += parseInt(Ve, ve)), He.set(Oe, Ve), ge && ye.set(Ve, Oe);
        }
      }), { map: He, reverseMap: ye };
    }
    var D, A, b;
    function x() {
      if (!D) {
        var fe = M(T.pairs, !0), ge = fe.map, ve = fe.reverseMap;
        D = ge, A = ve, b = M(T.canonical, !1).map;
      }
    }
    function C(fe) {
      return x(), D.get(fe) || null;
    }
    function O(fe) {
      return x(), A.get(fe) || null;
    }
    function H(fe) {
      return x(), b.get(fe) || null;
    }
    var G = m.L, V = m.R, W = m.EN, Q = m.ES, ne = m.ET, N = m.AN, L = m.CS, Y = m.B, ie = m.S, j = m.ON, I = m.BN, te = m.NSM, J = m.AL, w = m.LRO, _ = m.RLO, R = m.LRE, K = m.RLE, q = m.PDF, F = m.LRI, ae = m.RLI, k = m.FSI, ee = m.PDI;
    function se(fe, ge) {
      for (var ve = 125, $ = new Uint32Array(fe.length), He = 0; He < fe.length; He++)
        $[He] = g(fe[He]);
      var ye = /* @__PURE__ */ new Map();
      function Ue(Ht, kt) {
        var Mt = $[Ht];
        $[Ht] = kt, ye.set(Mt, ye.get(Mt) - 1), Mt & c && ye.set(c, ye.get(c) - 1), ye.set(kt, (ye.get(kt) || 0) + 1), kt & c && ye.set(c, (ye.get(c) || 0) + 1);
      }
      for (var de = new Uint8Array(fe.length), We = /* @__PURE__ */ new Map(), Te = [], De = null, Oe = 0; Oe < fe.length; Oe++)
        De || Te.push(De = {
          start: Oe,
          end: fe.length - 1,
          // 3.3.1 P2-P3: Determine the paragraph level
          level: ge === "rtl" ? 1 : ge === "ltr" ? 0 : gi(Oe, !1)
        }), $[Oe] & Y && (De.end = Oe, De = null);
      for (var Ve = K | R | _ | w | n | ee | q | Y, $e = function(Ht) {
        return Ht + (Ht & 1 ? 1 : 2);
      }, ft = function(Ht) {
        return Ht + (Ht & 1 ? 2 : 1);
      }, Be = 0; Be < Te.length; Be++) {
        De = Te[Be];
        var Ge = [{
          _level: De.level,
          _override: 0,
          //0=neutral, 1=L, 2=R
          _isolate: 0
          //bool
        }], Me = void 0, ct = 0, et = 0, _t = 0;
        ye.clear();
        for (var tt = De.start; tt <= De.end; tt++) {
          var Re = $[tt];
          if (Me = Ge[Ge.length - 1], ye.set(Re, (ye.get(Re) || 0) + 1), Re & c && ye.set(c, (ye.get(c) || 0) + 1), Re & Ve)
            if (Re & (K | R)) {
              de[tt] = Me._level;
              var Ze = (Re === K ? ft : $e)(Me._level);
              Ze <= ve && !ct && !et ? Ge.push({
                _level: Ze,
                _override: 0,
                _isolate: 0
              }) : ct || et++;
            } else if (Re & (_ | w)) {
              de[tt] = Me._level;
              var _a = (Re === _ ? ft : $e)(Me._level);
              _a <= ve && !ct && !et ? Ge.push({
                _level: _a,
                _override: Re & _ ? V : G,
                _isolate: 0
              }) : ct || et++;
            } else if (Re & n) {
              Re & k && (Re = gi(tt + 1, !0) === 1 ? ae : F), de[tt] = Me._level, Me._override && Ue(tt, Me._override);
              var we = (Re === ae ? ft : $e)(Me._level);
              we <= ve && ct === 0 && et === 0 ? (_t++, Ge.push({
                _level: we,
                _override: 0,
                _isolate: 1,
                _isolInitIndex: tt
              })) : ct++;
            } else if (Re & ee) {
              if (ct > 0)
                ct--;
              else if (_t > 0) {
                for (et = 0; !Ge[Ge.length - 1]._isolate; )
                  Ge.pop();
                var Xe = Ge[Ge.length - 1]._isolInitIndex;
                Xe != null && (We.set(Xe, tt), We.set(tt, Xe)), Ge.pop(), _t--;
              }
              Me = Ge[Ge.length - 1], de[tt] = Me._level, Me._override && Ue(tt, Me._override);
            } else Re & q ? (ct === 0 && (et > 0 ? et-- : !Me._isolate && Ge.length > 1 && (Ge.pop(), Me = Ge[Ge.length - 1])), de[tt] = Me._level) : Re & Y && (de[tt] = De.level);
          else
            de[tt] = Me._level, Me._override && Re !== I && Ue(tt, Me._override);
        }
        for (var mt = [], at = null, ze = De.start; ze <= De.end; ze++) {
          var nt = $[ze];
          if (!(nt & f)) {
            var xt = de[ze], Ct = nt & n, gt = nt === ee;
            at && xt === at._level ? (at._end = ze, at._endsWithIsolInit = Ct) : mt.push(at = {
              _start: ze,
              _end: ze,
              _level: xt,
              _startsWithPDI: gt,
              _endsWithIsolInit: Ct
            });
          }
        }
        for (var Zt = [], sa = 0; sa < mt.length; sa++) {
          var Nt = mt[sa];
          if (!Nt._startsWithPDI || Nt._startsWithPDI && !We.has(Nt._start)) {
            for (var Ua = [at = Nt], Yt = void 0; at && at._endsWithIsolInit && (Yt = We.get(at._end)) != null; )
              for (var Ot = sa + 1; Ot < mt.length; Ot++)
                if (mt[Ot]._start === Yt) {
                  Ua.push(at = mt[Ot]);
                  break;
                }
            for (var Ut = [], lt = 0; lt < Ua.length; lt++)
              for (var vl = Ua[lt], Cn = vl._start; Cn <= vl._end; Cn++)
                Ut.push(Cn);
            for (var Wi = de[Ut[0]], ii = De.level, pl = Ut[0] - 1; pl >= 0; pl--)
              if (!($[pl] & f)) {
                ii = de[pl];
                break;
              }
            var On = Ut[Ut.length - 1], ui = de[On], ml = De.level;
            if (!($[On] & n)) {
              for (var Rt = On + 1; Rt <= De.end; Rt++)
                if (!($[Rt] & f)) {
                  ml = de[Rt];
                  break;
                }
            }
            Zt.push({
              _seqIndices: Ut,
              _sosType: Math.max(ii, Wi) % 2 ? V : G,
              _eosType: Math.max(ml, ui) % 2 ? V : G
            });
          }
        }
        for (var vt = 0; vt < Zt.length; vt++) {
          var La = Zt[vt], _e = La._seqIndices, Ya = La._sosType, Ma = La._eosType, Da = de[_e[0]] & 1 ? V : G;
          if (ye.get(te))
            for (var rn = 0; rn < _e.length; rn++) {
              var yl = _e[rn];
              if ($[yl] & te) {
                for (var gl = Ya, Rn = rn - 1; Rn >= 0; Rn--)
                  if (!($[_e[Rn]] & f)) {
                    gl = $[_e[Rn]];
                    break;
                  }
                Ue(yl, gl & (n | ee) ? j : gl);
              }
            }
          if (ye.get(W))
            for (var zn = 0; zn < _e.length; zn++) {
              var ri = _e[zn];
              if ($[ri] & W)
                for (var xn = zn - 1; xn >= -1; xn--) {
                  var oi = xn === -1 ? Ya : $[_e[xn]];
                  if (oi & s) {
                    oi === J && Ue(ri, N);
                    break;
                  }
                }
            }
          if (ye.get(J))
            for (var Nn = 0; Nn < _e.length; Nn++) {
              var fi = _e[Nn];
              $[fi] & J && Ue(fi, V);
            }
          if (ye.get(Q) || ye.get(L))
            for (var Bn = 1; Bn < _e.length - 1; Bn++) {
              var Sl = _e[Bn];
              if ($[Sl] & (Q | L)) {
                for (var qa = 0, El = 0, Gn = Bn - 1; Gn >= 0 && (qa = $[_e[Gn]], !!(qa & f)); Gn--)
                  ;
                for (var bl = Bn + 1; bl < _e.length && (El = $[_e[bl]], !!(El & f)); bl++)
                  ;
                qa === El && ($[Sl] === Q ? qa === W : qa & (W | N)) && Ue(Sl, qa);
              }
            }
          if (ye.get(W))
            for (var ea = 0; ea < _e.length; ea++) {
              var Pi = _e[ea];
              if ($[Pi] & W) {
                for (var jn = ea - 1; jn >= 0 && $[_e[jn]] & (ne | f); jn--)
                  Ue(_e[jn], W);
                for (ea++; ea < _e.length && $[_e[ea]] & (ne | f | W); ea++)
                  $[_e[ea]] !== W && Ue(_e[ea], W);
              }
            }
          if (ye.get(ne) || ye.get(Q) || ye.get(L))
            for (var on = 0; on < _e.length; on++) {
              var ki = _e[on];
              if ($[ki] & (ne | Q | L)) {
                Ue(ki, j);
                for (var Hn = on - 1; Hn >= 0 && $[_e[Hn]] & f; Hn--)
                  Ue(_e[Hn], j);
                for (var Aa = on + 1; Aa < _e.length && $[_e[Aa]] & f; Aa++)
                  Ue(_e[Aa], j);
              }
            }
          if (ye.get(W))
            for (var Tl = 0, Vn = Ya; Tl < _e.length; Tl++) {
              var Ln = _e[Tl], _l = $[Ln];
              _l & W ? Vn === G && Ue(Ln, G) : _l & s && (Vn = _l);
            }
          if (ye.get(c)) {
            var Xa = V | W | N, ci = Xa | G, Yn = [];
            {
              for (var Qa = [], Fa = 0; Fa < _e.length; Fa++)
                if ($[_e[Fa]] & c) {
                  var Ka = fe[_e[Fa]], si = void 0;
                  if (C(Ka) !== null)
                    if (Qa.length < 63)
                      Qa.push({ char: Ka, seqIndex: Fa });
                    else
                      break;
                  else if ((si = O(Ka)) !== null)
                    for (var fn = Qa.length - 1; fn >= 0; fn--) {
                      var qn = Qa[fn].char;
                      if (qn === si || qn === O(H(Ka)) || C(H(qn)) === Ka) {
                        Yn.push([Qa[fn].seqIndex, Fa]), Qa.length = fn;
                        break;
                      }
                    }
                }
              Yn.sort(function(Ht, kt) {
                return Ht[0] - kt[0];
              });
            }
            for (var Ul = 0; Ul < Yn.length; Ul++) {
              for (var di = Yn[Ul], Xn = di[0], Qn = di[1], hi = !1, Pt = 0, vi = Xn + 1; vi < Qn; vi++) {
                var Ii = _e[vi];
                if ($[Ii] & ci) {
                  hi = !0;
                  var pi = $[Ii] & Xa ? V : G;
                  if (pi === Da) {
                    Pt = pi;
                    break;
                  }
                }
              }
              if (hi && !Pt) {
                Pt = Ya;
                for (var Za = Xn - 1; Za >= 0; Za--) {
                  var Ml = _e[Za];
                  if ($[Ml] & ci) {
                    var Fn = $[Ml] & Xa ? V : G;
                    Fn !== Da ? Pt = Fn : Pt = Da;
                    break;
                  }
                }
              }
              if (Pt) {
                if ($[_e[Xn]] = $[_e[Qn]] = Pt, Pt !== Da) {
                  for (var cn = Xn + 1; cn < _e.length; cn++)
                    if (!($[_e[cn]] & f)) {
                      g(fe[_e[cn]]) & te && ($[_e[cn]] = Pt);
                      break;
                    }
                }
                if (Pt !== Da) {
                  for (var sn = Qn + 1; sn < _e.length; sn++)
                    if (!($[_e[sn]] & f)) {
                      g(fe[_e[sn]]) & te && ($[_e[sn]] = Pt);
                      break;
                    }
                }
              }
            }
            for (var da = 0; da < _e.length; da++)
              if ($[_e[da]] & c) {
                for (var mi = da, Dl = da, Ca = Ya, Na = da - 1; Na >= 0; Na--)
                  if ($[_e[Na]] & f)
                    mi = Na;
                  else {
                    Ca = $[_e[Na]] & Xa ? V : G;
                    break;
                  }
                for (var yi = Ma, Ja = da + 1; Ja < _e.length; Ja++)
                  if ($[_e[Ja]] & (c | f))
                    Dl = Ja;
                  else {
                    yi = $[_e[Ja]] & Xa ? V : G;
                    break;
                  }
                for (var Al = mi; Al <= Dl; Al++)
                  $[_e[Al]] = Ca === yi ? Ca : Da;
                da = Dl;
              }
          }
        }
        for (var qt = De.start; qt <= De.end; qt++) {
          var Ju = de[qt], St = $[qt];
          if (Ju & 1 ? St & (G | W | N) && de[qt]++ : St & V ? de[qt]++ : St & (N | W) && (de[qt] += 2), St & f && (de[qt] = qt === 0 ? De.level : de[qt - 1]), qt === De.end || g(fe[qt]) & (ie | Y))
            for (var Kn = qt; Kn >= 0 && g(fe[Kn]) & d; Kn--)
              de[Kn] = De.level;
        }
      }
      return {
        levels: de,
        paragraphs: Te
      };
      function gi(Ht, kt) {
        for (var Mt = Ht; Mt < fe.length; Mt++) {
          var ha = $[Mt];
          if (ha & (V | J))
            return 1;
          if (ha & (Y | G) || kt && ha === ee)
            return 0;
          if (ha & n) {
            var Si = $i(Mt);
            Mt = Si === -1 ? fe.length : Si;
          }
        }
        return 0;
      }
      function $i(Ht) {
        for (var kt = 1, Mt = Ht + 1; Mt < fe.length; Mt++) {
          var ha = $[Mt];
          if (ha & Y)
            break;
          if (ha & ee) {
            if (--kt === 0)
              return Mt;
          } else ha & n && kt++;
        }
        return -1;
      }
    }
    var Se = "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1", oe;
    function le() {
      if (!oe) {
        var fe = M(Se, !0), ge = fe.map, ve = fe.reverseMap;
        ve.forEach(function($, He) {
          ge.set(He, $);
        }), oe = ge;
      }
    }
    function Ne(fe) {
      return le(), oe.get(fe) || null;
    }
    function Ce(fe, ge, ve, $) {
      var He = fe.length;
      ve = Math.max(0, ve == null ? 0 : +ve), $ = Math.min(He - 1, $ == null ? He - 1 : +$);
      for (var ye = /* @__PURE__ */ new Map(), Ue = ve; Ue <= $; Ue++)
        if (ge[Ue] & 1) {
          var de = Ne(fe[Ue]);
          de !== null && ye.set(Ue, de);
        }
      return ye;
    }
    function me(fe, ge, ve, $) {
      var He = fe.length;
      ve = Math.max(0, ve == null ? 0 : +ve), $ = Math.min(He - 1, $ == null ? He - 1 : +$);
      var ye = [];
      return ge.paragraphs.forEach(function(Ue) {
        var de = Math.max(ve, Ue.start), We = Math.min($, Ue.end);
        if (de < We) {
          for (var Te = ge.levels.slice(de, We + 1), De = We; De >= de && g(fe[De]) & d; De--)
            Te[De] = Ue.level;
          for (var Oe = Ue.level, Ve = 1 / 0, $e = 0; $e < Te.length; $e++) {
            var ft = Te[$e];
            ft > Oe && (Oe = ft), ft < Ve && (Ve = ft | 1);
          }
          for (var Be = Oe; Be >= Ve; Be--)
            for (var Ge = 0; Ge < Te.length; Ge++)
              if (Te[Ge] >= Be) {
                for (var Me = Ge; Ge + 1 < Te.length && Te[Ge + 1] >= Be; )
                  Ge++;
                Ge > Me && ye.push([Me + de, Ge + de]);
              }
        }
      }), ye;
    }
    function Ee(fe, ge, ve, $) {
      var He = be(fe, ge, ve, $), ye = [].concat(fe);
      return He.forEach(function(Ue, de) {
        ye[de] = (ge.levels[Ue] & 1 ? Ne(fe[Ue]) : null) || fe[Ue];
      }), ye.join("");
    }
    function be(fe, ge, ve, $) {
      for (var He = me(fe, ge, ve, $), ye = [], Ue = 0; Ue < fe.length; Ue++)
        ye[Ue] = Ue;
      return He.forEach(function(de) {
        for (var We = de[0], Te = de[1], De = ye.slice(We, Te + 1), Oe = De.length; Oe--; )
          ye[Te - Oe] = De[Oe];
      }), ye;
    }
    return l.closingToOpeningBracket = O, l.getBidiCharType = g, l.getBidiCharTypeName = E, l.getCanonicalBracket = H, l.getEmbeddingLevels = se, l.getMirroredCharacter = Ne, l.getMirroredCharactersMap = Ce, l.getReorderSegments = me, l.getReorderedIndices = be, l.getReorderedString = Ee, l.openingToClosingBracket = C, Object.defineProperty(l, "__esModule", { value: !0 }), l;
  })({});
  return o;
}
const Xs = /\bvoid\s+main\s*\(\s*\)\s*{/g;
function Go(o) {
  const l = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function p(m, i) {
    let n = av[i];
    return n ? Go(n) : m;
  }
  return o.replace(l, p);
}
const Lt = [];
for (let o = 0; o < 256; o++)
  Lt[o] = (o < 16 ? "0" : "") + o.toString(16);
function N1() {
  const o = Math.random() * 4294967295 | 0, l = Math.random() * 4294967295 | 0, p = Math.random() * 4294967295 | 0, m = Math.random() * 4294967295 | 0;
  return (Lt[o & 255] + Lt[o >> 8 & 255] + Lt[o >> 16 & 255] + Lt[o >> 24 & 255] + "-" + Lt[l & 255] + Lt[l >> 8 & 255] + "-" + Lt[l >> 16 & 15 | 64] + Lt[l >> 24 & 255] + "-" + Lt[p & 63 | 128] + Lt[p >> 8 & 255] + "-" + Lt[p >> 16 & 255] + Lt[p >> 24 & 255] + Lt[m & 255] + Lt[m >> 8 & 255] + Lt[m >> 16 & 255] + Lt[m >> 24 & 255]).toUpperCase();
}
const fl = Object.assign || function() {
  let o = arguments[0];
  for (let l = 1, p = arguments.length; l < p; l++) {
    let m = arguments[l];
    if (m)
      for (let i in m)
        Object.prototype.hasOwnProperty.call(m, i) && (o[i] = m[i]);
  }
  return o;
}, B1 = Date.now(), $c = /* @__PURE__ */ new WeakMap(), es = /* @__PURE__ */ new Map();
let G1 = 1e10;
function jo(o, l) {
  const p = L1(l);
  let m = $c.get(o);
  if (m || $c.set(o, m = /* @__PURE__ */ Object.create(null)), m[p])
    return new m[p]();
  const i = `_onBeforeCompile${p}`, n = function(d, v) {
    o.onBeforeCompile.call(this, d, v);
    const y = this.customProgramCacheKey() + "|" + d.vertexShader + "|" + d.fragmentShader;
    let g = es[y];
    if (!g) {
      const E = j1(this, d, l, p);
      g = es[y] = E;
    }
    d.vertexShader = g.vertexShader, d.fragmentShader = g.fragmentShader, fl(d.uniforms, this.uniforms), l.timeUniform && (d.uniforms[l.timeUniform] = {
      get value() {
        return Date.now() - B1;
      }
    }), this[i] && this[i](d);
  }, s = function() {
    return c(l.chained ? o : o.clone());
  }, c = function(d) {
    const v = Object.create(d, f);
    return Object.defineProperty(v, "baseMaterial", { value: o }), Object.defineProperty(v, "id", { value: G1++ }), v.uuid = N1(), v.uniforms = fl({}, d.uniforms, l.uniforms), v.defines = fl({}, d.defines, l.defines), v.defines[`TROIKA_DERIVED_MATERIAL_${p}`] = "", v.extensions = fl({}, d.extensions, l.extensions), v._listeners = void 0, v;
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
        return o.copy.call(this, d), !o.isShaderMaterial && !o.isDerivedMaterial && (fl(this.extensions, d.extensions), fl(this.defines, d.defines), fl(this.uniforms, tv.clone(d.uniforms))), this;
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
        return d || (d = this._depthMaterial = jo(
          o.isDerivedMaterial ? o.getDepthMaterial() : new $h({ depthPacking: ev }),
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
        return d || (d = this._distanceMaterial = jo(
          o.isDerivedMaterial ? o.getDistanceMaterial() : new Ih(),
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
function j1(o, { vertexShader: l, fragmentShader: p }, m, i) {
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
    timeUniform: T
  } = m;
  if (n = n || "", s = s || "", c = c || "", d = d || "", v = v || "", y = y || "", (f || E) && (l = Go(l)), (g || E) && (p = p.replace(
    /^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,
    `
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`
  ), p = Go(p)), E) {
    let M = E({ vertexShader: l, fragmentShader: p });
    l = M.vertexShader, p = M.fragmentShader;
  }
  if (g) {
    let M = [];
    p = p.replace(
      /^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,
      // [^]+? = non-greedy match of any chars including newlines
      (D) => (M.push(D), "")
    ), y = `${g}
${M.join(`
`)}
${y}`;
  }
  if (T) {
    const M = `
uniform float ${T};
`;
    n = M + n, d = M + d;
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
`, l = l.replace(/\b(position|normal|uv)\b/g, (M, D, A, b) => /\battribute\s+vec[23]\s+$/.test(b.substr(0, A)) ? D : `troika_${D}_${i}`), o.map && o.map.channel > 0 || (l = l.replace(/\bMAP_UV\b/g, `troika_uv_${i}`))), l = ts(l, i, n, s, c), p = ts(p, i, d, v, y), {
    vertexShader: l,
    fragmentShader: p
  };
}
function ts(o, l, p, m, i) {
  return (m || i || p) && (o = o.replace(
    Xs,
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
function H1(o, l) {
  return o === "uniforms" ? void 0 : typeof l == "function" ? l.toString() : l;
}
let V1 = 0;
const as = /* @__PURE__ */ new Map();
function L1(o) {
  const l = JSON.stringify(o, H1);
  let p = as.get(l);
  return p == null && as.set(l, p = ++V1), p;
}
/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/
function Y1() {
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
        var T = s.readUint(i, n);
        n += 4;
        var M = s.readUint(i, n);
        n += 4, y[E] = { offset: T, length: M };
      }
      for (g = 0; g < d.length; g++) {
        var D = d[g];
        y[D] && (v[D.trim()] = l[D.trim()].parse(i, y[D].offset, y[D].length, v));
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
      var T = d.readUshort(i, n);
      return n += 2, v.scriptList = l._lctf.readScriptList(i, y + g), v.featureList = l._lctf.readFeatureList(i, y + E), v.lookupList = l._lctf.readLookupList(i, y + T, f), v;
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
        var T = s(i, y, f + E, d);
        d.tabs.push(T);
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
      var E = g[0], T = [];
      n = l.CFF.readIndex(i, n, T);
      var M = [];
      for (v = 0; v < T.length - 1; v++) M.push(c.readASCII(i, n + T[v], T[v + 1] - T[v]));
      if (n += T[T.length - 1], l.CFF.readSubrs(i, n, E), E.CharStrings) {
        n = E.CharStrings, T = [], n = l.CFF.readIndex(i, n, T);
        var D = [];
        for (v = 0; v < T.length - 1; v++) D.push(c.readBytes(i, n + T[v], T[v + 1] - T[v]));
        E.CharStrings = D;
      }
      if (E.ROS) {
        n = E.FDArray;
        var A = [];
        for (n = l.CFF.readIndex(i, n, A), E.FDArray = [], v = 0; v < A.length - 1; v++) {
          var b = l.CFF.readDict(i, n + A[v], n + A[v + 1]);
          l.CFF._readFDict(i, b, M), E.FDArray.push(b);
        }
        n += A[A.length - 1], n = E.FDSelect, E.FDSelect = [];
        var x = i[n];
        if (n++, x != 3) throw x;
        var C = c.readUshort(i, n);
        for (n += 2, v = 0; v < C + 1; v++) E.FDSelect.push(c.readUshort(i, n), i[n + 2]), n += 3;
      }
      return E.Encoding && (E.Encoding = l.CFF.readEncoding(i, E.Encoding, E.CharStrings.length)), E.charset && (E.charset = l.CFF.readCharset(i, E.charset, E.CharStrings.length)), l.CFF._readFDict(i, E, M), E;
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
        var g = 1, E = null, T = null;
        v <= 20 && (E = v, g = 1), v == 12 && (E = 100 * v + y, g = 2), v != 19 && v != 20 || (E = v, g = 2), 21 <= v && v <= 27 && (E = v, g = 1), v == 28 && (T = f.readShort(i, n + 1), g = 3), 29 <= v && v <= 31 && (E = v, g = 1), 32 <= v && v <= 246 && (T = v - 139, g = 1), 247 <= v && v <= 250 && (T = 256 * (v - 247) + y + 108, g = 2), 251 <= v && v <= 254 && (T = 256 * -(v - 251) - y - 108, g = 2), v == 255 && (T = f.readInt(i, n + 1) / 65535, g = 5), d.push(T ?? "o" + E), n += g;
      }
      return d;
    }, l.CFF.readDict = function(i, n, s) {
      for (var c = l._bin, f = {}, d = []; n < s; ) {
        var v = i[n], y = i[n + 1];
        i[n + 2], i[n + 3], i[n + 4];
        var g = 1, E = null, T = null;
        if (v == 28 && (T = c.readShort(i, n + 1), g = 3), v == 29 && (T = c.readInt(i, n + 1), g = 5), 32 <= v && v <= 246 && (T = v - 139, g = 1), 247 <= v && v <= 250 && (T = 256 * (v - 247) + y + 108, g = 2), 251 <= v && v <= 254 && (T = 256 * -(v - 251) - y - 108, g = 2), v == 255) throw T = c.readInt(i, n + 1) / 65535, g = 5, "unknown number";
        if (v == 30) {
          var M = [];
          for (g = 1; ; ) {
            var D = i[n + g];
            g++;
            var A = D >> 4, b = 15 & D;
            if (A != 15 && M.push(A), b != 15 && M.push(b), b == 15) break;
          }
          for (var x = "", C = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"], O = 0; O < M.length; O++) x += C[M[O]];
          T = parseFloat(x);
        }
        v <= 21 && (E = ["version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX"][v], g = 1, v == 12 && (E = ["Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName"][y], g = 2)), E != null ? (f[E] = d.length == 1 ? d[0] : d, d = []) : d.push(T), n += g;
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
        var T = c.readUint(i, n);
        n += 4;
        var M = "p" + g + "e" + E, D = v.indexOf(T);
        if (D == -1) {
          var A;
          D = f.tables.length, v.push(T);
          var b = c.readUshort(i, T);
          b == 0 ? A = l.cmap.parse0(i, T) : b == 4 ? A = l.cmap.parse4(i, T) : b == 6 ? A = l.cmap.parse6(i, T) : b == 12 ? A = l.cmap.parse12(i, T) : console.debug("unknown format: " + b, g, E, T), f.tables.push(A);
        }
        if (f[M] != null) throw "multiple tables for one platform+encoding";
        f[M] = D;
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
            var T = c[f];
            f++;
            for (var M = 0; M < T; M++) d.flags.push(E), v++;
          }
        }
        for (d.xs = [], v = 0; v < g; v++) {
          var D = (2 & d.flags[v]) != 0, A = (16 & d.flags[v]) != 0;
          D ? (d.xs.push(A ? c[f] : -c[f]), f++) : A ? d.xs.push(0) : (d.xs.push(s.readShort(c, f)), f += 2);
        }
        for (d.ys = [], v = 0; v < g; v++)
          D = (4 & d.flags[v]) != 0, A = (32 & d.flags[v]) != 0, D ? (d.ys.push(A ? c[f] : -c[f]), f++) : A ? d.ys.push(0) : (d.ys.push(s.readShort(c, f)), f += 2);
        var b = 0, x = 0;
        for (v = 0; v < g; v++) b += d.xs[v], x += d.ys[v], d.xs[v] = b, d.ys[v] = x;
      } else {
        var C;
        d.parts = [];
        do {
          C = s.readUshort(c, f), f += 2;
          var O = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
          if (d.parts.push(O), O.glyphIndex = s.readUshort(c, f), f += 2, 1 & C) {
            var H = s.readShort(c, f);
            f += 2;
            var G = s.readShort(c, f);
            f += 2;
          } else
            H = s.readInt8(c, f), f++, G = s.readInt8(c, f), f++;
          2 & C ? (O.m.tx = H, O.m.ty = G) : (O.p1 = H, O.p2 = G), 8 & C ? (O.m.a = O.m.d = s.readF2dot14(c, f), f += 2) : 64 & C ? (O.m.a = s.readF2dot14(c, f), f += 2, O.m.d = s.readF2dot14(c, f), f += 2) : 128 & C && (O.m.a = s.readF2dot14(c, f), f += 2, O.m.b = s.readF2dot14(c, f), f += 2, O.m.c = s.readF2dot14(c, f), f += 2, O.m.d = s.readF2dot14(c, f), f += 2);
        } while (32 & C);
        if (256 & C) {
          var V = s.readUshort(c, f);
          for (f += 2, d.instr = [], v = 0; v < V; v++) d.instr.push(c[f]), f++;
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
        var T = l._lctf.numOfOnes(g), M = l._lctf.numOfOnes(E);
        if (v.fmt == 1) {
          v.pairsets = [];
          var D = f.readUshort(i, s);
          s += 2;
          for (var A = 0; A < D; A++) {
            var b = d + f.readUshort(i, s);
            s += 2;
            var x = f.readUshort(i, b);
            b += 2;
            for (var C = [], O = 0; O < x; O++) {
              var H = f.readUshort(i, b);
              b += 2, g != 0 && (N = l.GPOS.readValueRecord(i, b, g), b += 2 * T), E != 0 && (L = l.GPOS.readValueRecord(i, b, E), b += 2 * M), C.push({ gid2: H, val1: N, val2: L });
            }
            v.pairsets.push(C);
          }
        }
        if (v.fmt == 2) {
          var G = f.readUshort(i, s);
          s += 2;
          var V = f.readUshort(i, s);
          s += 2;
          var W = f.readUshort(i, s);
          s += 2;
          var Q = f.readUshort(i, s);
          for (s += 2, v.classDef1 = l._lctf.readClassDef(i, d + G), v.classDef2 = l._lctf.readClassDef(i, d + V), v.matrix = [], A = 0; A < W; A++) {
            var ne = [];
            for (O = 0; O < Q; O++) {
              var N = null, L = null;
              g != 0 && (N = l.GPOS.readValueRecord(i, s, g), s += 2 * T), E != 0 && (L = l.GPOS.readValueRecord(i, s, E), s += 2 * M), ne.push({ val1: N, val2: L });
            }
            v.matrix.push(ne);
          }
        }
      } else if (n == 4 && v.fmt == 1) v.markCoverage = l._lctf.readCoverage(i, f.readUshort(i, s) + d), v.baseCoverage = l._lctf.readCoverage(i, f.readUshort(i, s + 2) + d), v.markClassCount = f.readUshort(i, s + 4), v.markArray = l.GPOS.readMarkArray(i, f.readUshort(i, s + 6) + d), v.baseArray = l.GPOS.readBaseArray(i, f.readUshort(i, s + 8) + d, v.markClassCount);
      else if (n == 6 && v.fmt == 1) v.mark1Coverage = l._lctf.readCoverage(i, f.readUshort(i, s) + d), v.mark2Coverage = l._lctf.readCoverage(i, f.readUshort(i, s + 2) + d), v.markClassCount = f.readUshort(i, s + 4), v.mark1Array = l.GPOS.readMarkArray(i, f.readUshort(i, s + 6) + d), v.mark2Array = l.GPOS.readBaseArray(i, f.readUshort(i, s + 8) + d, v.markClassCount);
      else {
        if (n == 9 && v.fmt == 1) {
          var Y = f.readUshort(i, s);
          s += 2;
          var ie = f.readUint(i, s);
          if (s += 4, c.ltype == 9) c.ltype = Y;
          else if (c.ltype != Y) throw "invalid extension substitution";
          return l.GPOS.subt(i, c.ltype, d + ie);
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
          var T = f.readUshort(i, s) + d;
          s += 2;
          var M = f.readUshort(i, T);
          v.seqs.push(f.readUshorts(i, T + 2, M));
        }
      } else if (n == 4)
        for (v.vals = [], g = f.readUshort(i, s), s += 2, E = 0; E < g; E++) {
          var D = f.readUshort(i, s);
          s += 2, v.vals.push(l.GSUB.readLigatureSet(i, d + D));
        }
      else if (n == 5 && v.fmt == 2) {
        if (v.fmt == 2) {
          var A = f.readUshort(i, s);
          s += 2, v.cDef = l._lctf.readClassDef(i, d + A), v.scset = [];
          var b = f.readUshort(i, s);
          for (s += 2, E = 0; E < b; E++) {
            var x = f.readUshort(i, s);
            s += 2, v.scset.push(x == 0 ? null : l.GSUB.readSubClassSet(i, d + x));
          }
        }
      } else if (n == 6 && v.fmt == 3) {
        if (v.fmt == 3) {
          for (E = 0; E < 3; E++) {
            g = f.readUshort(i, s), s += 2;
            for (var C = [], O = 0; O < g; O++) C.push(l._lctf.readCoverage(i, d + f.readUshort(i, s + 2 * O)));
            s += 2 * g, E == 0 && (v.backCvg = C), E == 1 && (v.inptCvg = C), E == 2 && (v.ahedCvg = C);
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
        var T = E >>> 8;
        if ((T &= 15) != 0) throw "unknown kern table format: " + T;
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
        var T = s.rval[s.rval.length - 1];
        T.glyph2.push(g), T.vals.push(E), f = y;
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
        var T = c.readUshort(i, n);
        n += 2;
        var M = c.readUshort(i, n);
        n += 2;
        var D = c.readUshort(i, n);
        n += 2;
        var A = c.readUshort(i, n);
        n += 2;
        var b = c.readUshort(i, n);
        n += 2;
        var x = c.readUshort(i, n);
        n += 2;
        var C, O = y[A], H = g + 12 * d + x;
        if (T == 0) C = c.readUnicode(i, H, b / 2);
        else if (T == 3 && M == 0) C = c.readUnicode(i, H, b / 2);
        else if (M == 0) C = c.readASCII(i, H, b);
        else if (M == 1) C = c.readUnicode(i, H, b / 2);
        else if (M == 3) C = c.readUnicode(i, H, b / 2);
        else {
          if (T != 1) throw "unknown encoding " + M + ", platformID: " + T;
          C = c.readASCII(i, H, b), console.debug("reading unknown MAC encoding " + M + " as ASCII");
        }
        var G = "p" + T + "," + D.toString(16);
        f[G] == null && (f[G] = {}), f[G][O !== void 0 ? O : A] = C, f[G]._lang = D;
      }
      for (var V in f) if (f[V].postScriptName != null && f[V]._lang == 1033) return f[V];
      for (var V in f) if (f[V].postScriptName != null && f[V]._lang == 0) return f[V];
      for (var V in f) if (f[V].postScriptName != null && f[V]._lang == 3084) return f[V];
      for (var V in f) if (f[V].postScriptName != null) return f[V];
      for (var V in f) {
        v = V;
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
          var v = d == c ? f : d - 1, y = d == f ? c : d + 1, g = 1 & i.flags[d], E = 1 & i.flags[v], T = 1 & i.flags[y], M = i.xs[d], D = i.ys[d];
          if (d == c) if (g) {
            if (!E) {
              l.U.P.moveTo(n, M, D);
              continue;
            }
            l.U.P.moveTo(n, i.xs[v], i.ys[v]);
          } else E ? l.U.P.moveTo(n, i.xs[v], i.ys[v]) : l.U.P.moveTo(n, (i.xs[v] + M) / 2, (i.ys[v] + D) / 2);
          g ? E && l.U.P.lineTo(n, M, D) : T ? l.U.P.qcurveTo(n, M, D, i.xs[y], i.ys[y]) : l.U.P.qcurveTo(n, M, D, (M + i.xs[y]) / 2, (D + i.ys[y]) / 2);
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
            var T = g[E], M = T.chain.length;
            if (!(M > f)) {
              for (var D = !0, A = 0, b = 0; b < M; b++) {
                for (; i[n + A + (1 + b)] == -1; ) A++;
                T.chain[b] != i[n + A + (1 + b)] && (D = !1);
              }
              if (D) {
                for (i[n] = T.nglyph, b = 0; b < M + A; b++) i[n + b + 1] = -1;
                break;
              }
            }
          }
          else if (s.ltype == 5 && y.fmt == 2) for (var x = l._lctf.getInterval(y.cDef, i[n]), C = y.cDef[x + 2], O = y.scset[C], H = 0; H < O.length; H++) {
            var G = O[H], V = G.input;
            if (!(V.length > f)) {
              for (D = !0, b = 0; b < V.length; b++) {
                var W = l._lctf.getInterval(y.cDef, i[n + 1 + b]);
                if (x == -1 && y.cDef[W + 2] != V[b]) {
                  D = !1;
                  break;
                }
              }
              if (D) {
                var Q = G.substLookupRecords;
                for (E = 0; E < Q.length; E += 2) Q[E], Q[E + 1];
              }
            }
          }
          else if (s.ltype == 6 && y.fmt == 3) {
            if (!l.U._glsCovered(i, y.backCvg, n - y.backCvg.length) || !l.U._glsCovered(i, y.inptCvg, n) || !l.U._glsCovered(i, y.ahedCvg, n + y.inptCvg.length)) continue;
            var ne = y.lookupRec;
            for (H = 0; H < ne.length; H += 2) {
              x = ne[H];
              var N = c[ne[H + 1]];
              l.U._applySubs(i, n + x, N, c);
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
      for (var d = n.stack, v = n.nStems, y = n.haveWidth, g = n.width, E = n.open, T = 0, M = n.x, D = n.y, A = 0, b = 0, x = 0, C = 0, O = 0, H = 0, G = 0, V = 0, W = 0, Q = 0, ne = { val: 0, size: 0 }; T < i.length; ) {
        l.CFF.getCharString(i, T, ne);
        var N = ne.val;
        if (T += ne.size, N == "o1" || N == "o18") d.length % 2 != 0 && !y && (g = d.shift() + c.nominalWidthX), v += d.length >> 1, d.length = 0, y = !0;
        else if (N == "o3" || N == "o23")
          d.length % 2 != 0 && !y && (g = d.shift() + c.nominalWidthX), v += d.length >> 1, d.length = 0, y = !0;
        else if (N == "o4") d.length > 1 && !y && (g = d.shift() + c.nominalWidthX, y = !0), E && l.U.P.closePath(f), D += d.pop(), l.U.P.moveTo(f, M, D), E = !0;
        else if (N == "o5") for (; d.length > 0; ) M += d.shift(), D += d.shift(), l.U.P.lineTo(f, M, D);
        else if (N == "o6" || N == "o7") for (var L = d.length, Y = N == "o6", ie = 0; ie < L; ie++) {
          var j = d.shift();
          Y ? M += j : D += j, Y = !Y, l.U.P.lineTo(f, M, D);
        }
        else if (N == "o8" || N == "o24") {
          L = d.length;
          for (var I = 0; I + 6 <= L; ) A = M + d.shift(), b = D + d.shift(), x = A + d.shift(), C = b + d.shift(), M = x + d.shift(), D = C + d.shift(), l.U.P.curveTo(f, A, b, x, C, M, D), I += 6;
          N == "o24" && (M += d.shift(), D += d.shift(), l.U.P.lineTo(f, M, D));
        } else {
          if (N == "o11") break;
          if (N == "o1234" || N == "o1235" || N == "o1236" || N == "o1237") N == "o1234" && (b = D, x = (A = M + d.shift()) + d.shift(), Q = C = b + d.shift(), H = C, V = D, M = (G = (O = (W = x + d.shift()) + d.shift()) + d.shift()) + d.shift(), l.U.P.curveTo(f, A, b, x, C, W, Q), l.U.P.curveTo(f, O, H, G, V, M, D)), N == "o1235" && (A = M + d.shift(), b = D + d.shift(), x = A + d.shift(), C = b + d.shift(), W = x + d.shift(), Q = C + d.shift(), O = W + d.shift(), H = Q + d.shift(), G = O + d.shift(), V = H + d.shift(), M = G + d.shift(), D = V + d.shift(), d.shift(), l.U.P.curveTo(f, A, b, x, C, W, Q), l.U.P.curveTo(f, O, H, G, V, M, D)), N == "o1236" && (A = M + d.shift(), b = D + d.shift(), x = A + d.shift(), Q = C = b + d.shift(), H = C, G = (O = (W = x + d.shift()) + d.shift()) + d.shift(), V = H + d.shift(), M = G + d.shift(), l.U.P.curveTo(f, A, b, x, C, W, Q), l.U.P.curveTo(f, O, H, G, V, M, D)), N == "o1237" && (A = M + d.shift(), b = D + d.shift(), x = A + d.shift(), C = b + d.shift(), W = x + d.shift(), Q = C + d.shift(), O = W + d.shift(), H = Q + d.shift(), G = O + d.shift(), V = H + d.shift(), Math.abs(G - M) > Math.abs(V - D) ? M = G + d.shift() : D = V + d.shift(), l.U.P.curveTo(f, A, b, x, C, W, Q), l.U.P.curveTo(f, O, H, G, V, M, D));
          else if (N == "o14") {
            if (d.length > 0 && !y && (g = d.shift() + s.nominalWidthX, y = !0), d.length == 4) {
              var te = d.shift(), J = d.shift(), w = d.shift(), _ = d.shift(), R = l.CFF.glyphBySE(s, w), K = l.CFF.glyphBySE(s, _);
              l.U._drawCFF(s.CharStrings[R], n, s, c, f), n.x = te, n.y = J, l.U._drawCFF(s.CharStrings[K], n, s, c, f);
            }
            E && (l.U.P.closePath(f), E = !1);
          } else if (N == "o19" || N == "o20")
            d.length % 2 != 0 && !y && (g = d.shift() + c.nominalWidthX), v += d.length >> 1, d.length = 0, y = !0, T += v + 7 >> 3;
          else if (N == "o21") d.length > 2 && !y && (g = d.shift() + c.nominalWidthX, y = !0), D += d.pop(), M += d.pop(), E && l.U.P.closePath(f), l.U.P.moveTo(f, M, D), E = !0;
          else if (N == "o22") d.length > 1 && !y && (g = d.shift() + c.nominalWidthX, y = !0), M += d.pop(), E && l.U.P.closePath(f), l.U.P.moveTo(f, M, D), E = !0;
          else if (N == "o25") {
            for (; d.length > 6; ) M += d.shift(), D += d.shift(), l.U.P.lineTo(f, M, D);
            A = M + d.shift(), b = D + d.shift(), x = A + d.shift(), C = b + d.shift(), M = x + d.shift(), D = C + d.shift(), l.U.P.curveTo(f, A, b, x, C, M, D);
          } else if (N == "o26") for (d.length % 2 && (M += d.shift()); d.length > 0; ) A = M, b = D + d.shift(), M = x = A + d.shift(), D = (C = b + d.shift()) + d.shift(), l.U.P.curveTo(f, A, b, x, C, M, D);
          else if (N == "o27") for (d.length % 2 && (D += d.shift()); d.length > 0; ) b = D, x = (A = M + d.shift()) + d.shift(), C = b + d.shift(), M = x + d.shift(), D = C, l.U.P.curveTo(f, A, b, x, C, M, D);
          else if (N == "o10" || N == "o29") {
            var q = N == "o10" ? c : s;
            if (d.length == 0) console.debug("error: empty stack");
            else {
              var F = d.pop(), ae = q.Subrs[F + q.Bias];
              n.x = M, n.y = D, n.nStems = v, n.haveWidth = y, n.width = g, n.open = E, l.U._drawCFF(ae, n, s, c, f), M = n.x, D = n.y, v = n.nStems, y = n.haveWidth, g = n.width, E = n.open;
            }
          } else if (N == "o30" || N == "o31") {
            var k = d.length, ee = (I = 0, N == "o31");
            for (I += k - (L = -3 & k); I < L; ) ee ? (b = D, x = (A = M + d.shift()) + d.shift(), D = (C = b + d.shift()) + d.shift(), L - I == 5 ? (M = x + d.shift(), I++) : M = x, ee = !1) : (A = M, b = D + d.shift(), x = A + d.shift(), C = b + d.shift(), M = x + d.shift(), L - I == 5 ? (D = C + d.shift(), I++) : D = C, ee = !0), l.U.P.curveTo(f, A, b, x, C, M, D), I += 4;
          } else {
            if ((N + "").charAt(0) == "o") throw console.debug("Unknown operation: " + N, i), N;
            d.push(N);
          }
        }
      }
      n.x = M, n.y = D, n.nStems = v, n.haveWidth = y, n.width = g, n.open = E;
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
function q1() {
  return (function(o) {
    var l = Uint8Array, p = Uint16Array, m = Uint32Array, i = new l([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), n = new l([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), s = new l([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), c = function(N, L) {
      for (var Y = new p(31), ie = 0; ie < 31; ++ie) Y[ie] = L += 1 << N[ie - 1];
      var j = new m(Y[30]);
      for (ie = 1; ie < 30; ++ie) for (var I = Y[ie]; I < Y[ie + 1]; ++I) j[I] = I - Y[ie] << 5 | ie;
      return [Y, j];
    }, f = c(i, 2), d = f[0], v = f[1];
    d[28] = 258, v[258] = 28;
    for (var y = c(n, 0)[0], g = new p(32768), E = 0; E < 32768; ++E) {
      var T = (43690 & E) >>> 1 | (21845 & E) << 1;
      T = (61680 & (T = (52428 & T) >>> 2 | (13107 & T) << 2)) >>> 4 | (3855 & T) << 4, g[E] = ((65280 & T) >>> 8 | (255 & T) << 8) >>> 1;
    }
    var M = function(N, L, Y) {
      for (var ie = N.length, j = 0, I = new p(L); j < ie; ++j) ++I[N[j] - 1];
      var te, J = new p(L);
      for (j = 0; j < L; ++j) J[j] = J[j - 1] + I[j - 1] << 1;
      {
        te = new p(1 << L);
        var w = 15 - L;
        for (j = 0; j < ie; ++j) if (N[j]) for (var _ = j << 4 | N[j], R = L - N[j], K = J[N[j] - 1]++ << R, q = K | (1 << R) - 1; K <= q; ++K) te[g[K] >>> w] = _;
      }
      return te;
    }, D = new l(288);
    for (E = 0; E < 144; ++E) D[E] = 8;
    for (E = 144; E < 256; ++E) D[E] = 9;
    for (E = 256; E < 280; ++E) D[E] = 7;
    for (E = 280; E < 288; ++E) D[E] = 8;
    var A = new l(32);
    for (E = 0; E < 32; ++E) A[E] = 5;
    var b = M(D, 9), x = M(A, 5), C = function(N) {
      for (var L = N[0], Y = 1; Y < N.length; ++Y) N[Y] > L && (L = N[Y]);
      return L;
    }, O = function(N, L, Y) {
      var ie = L / 8 | 0;
      return (N[ie] | N[ie + 1] << 8) >> (7 & L) & Y;
    }, H = function(N, L) {
      var Y = L / 8 | 0;
      return (N[Y] | N[Y + 1] << 8 | N[Y + 2] << 16) >> (7 & L);
    }, G = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], V = function(N, L, Y) {
      var ie = new Error(L || G[N]);
      if (ie.code = N, Error.captureStackTrace && Error.captureStackTrace(ie, V), !Y) throw ie;
      return ie;
    }, W = function(N, L, Y) {
      var ie = N.length;
      if (!ie || Y && !Y.l && ie < 5) return L || new l(0);
      var j = !L || Y, I = !Y || Y.i;
      Y || (Y = {}), L || (L = new l(3 * ie));
      var te, J = function(Me) {
        var ct = L.length;
        if (Me > ct) {
          var et = new l(Math.max(2 * ct, Me));
          et.set(L), L = et;
        }
      }, w = Y.f || 0, _ = Y.p || 0, R = Y.b || 0, K = Y.l, q = Y.d, F = Y.m, ae = Y.n, k = 8 * ie;
      do {
        if (!K) {
          Y.f = w = O(N, _, 1);
          var ee = O(N, _ + 1, 3);
          if (_ += 3, !ee) {
            var se = N[(ve = ((te = _) / 8 | 0) + (7 & te && 1) + 4) - 4] | N[ve - 3] << 8, Se = ve + se;
            if (Se > ie) {
              I && V(0);
              break;
            }
            j && J(R + se), L.set(N.subarray(ve, Se), R), Y.b = R += se, Y.p = _ = 8 * Se;
            continue;
          }
          if (ee == 1) K = b, q = x, F = 9, ae = 5;
          else if (ee == 2) {
            var oe = O(N, _, 31) + 257, le = O(N, _ + 10, 15) + 4, Ne = oe + O(N, _ + 5, 31) + 1;
            _ += 14;
            for (var Ce = new l(Ne), me = new l(19), Ee = 0; Ee < le; ++Ee) me[s[Ee]] = O(N, _ + 3 * Ee, 7);
            _ += 3 * le;
            var be = C(me), fe = (1 << be) - 1, ge = M(me, be);
            for (Ee = 0; Ee < Ne; ) {
              var ve, $ = ge[O(N, _, fe)];
              if (_ += 15 & $, (ve = $ >>> 4) < 16) Ce[Ee++] = ve;
              else {
                var He = 0, ye = 0;
                for (ve == 16 ? (ye = 3 + O(N, _, 3), _ += 2, He = Ce[Ee - 1]) : ve == 17 ? (ye = 3 + O(N, _, 7), _ += 3) : ve == 18 && (ye = 11 + O(N, _, 127), _ += 7); ye--; ) Ce[Ee++] = He;
              }
            }
            var Ue = Ce.subarray(0, oe), de = Ce.subarray(oe);
            F = C(Ue), ae = C(de), K = M(Ue, F), q = M(de, ae);
          } else V(1);
          if (_ > k) {
            I && V(0);
            break;
          }
        }
        j && J(R + 131072);
        for (var We = (1 << F) - 1, Te = (1 << ae) - 1, De = _; ; De = _) {
          var Oe = (He = K[H(N, _) & We]) >>> 4;
          if ((_ += 15 & He) > k) {
            I && V(0);
            break;
          }
          if (He || V(2), Oe < 256) L[R++] = Oe;
          else {
            if (Oe == 256) {
              De = _, K = null;
              break;
            }
            var Ve = Oe - 254;
            if (Oe > 264) {
              var $e = i[Ee = Oe - 257];
              Ve = O(N, _, (1 << $e) - 1) + d[Ee], _ += $e;
            }
            var ft = q[H(N, _) & Te], Be = ft >>> 4;
            if (ft || V(3), _ += 15 & ft, de = y[Be], Be > 3 && ($e = n[Be], de += H(N, _) & (1 << $e) - 1, _ += $e), _ > k) {
              I && V(0);
              break;
            }
            j && J(R + 131072);
            for (var Ge = R + Ve; R < Ge; R += 4) L[R] = L[R - de], L[R + 1] = L[R + 1 - de], L[R + 2] = L[R + 2 - de], L[R + 3] = L[R + 3 - de];
            R = Ge;
          }
        }
        Y.l = K, Y.p = De, Y.b = R, K && (w = 1, Y.m = F, Y.d = q, Y.n = ae);
      } while (!w);
      return R == L.length ? L : (function(Me, ct, et) {
        (et == null || et > Me.length) && (et = Me.length);
        var _t = new (Me instanceof p ? p : Me instanceof m ? m : l)(et - ct);
        return _t.set(Me.subarray(ct, et)), _t;
      })(L, 0, R);
    }, Q = new l(0), ne = typeof TextDecoder < "u" && new TextDecoder();
    try {
      ne.decode(Q, { stream: !0 });
    } catch {
    }
    return o.convert_streams = function(N) {
      var L = new DataView(N), Y = 0;
      function ie() {
        var oe = L.getUint16(Y);
        return Y += 2, oe;
      }
      function j() {
        var oe = L.getUint32(Y);
        return Y += 4, oe;
      }
      function I(oe) {
        se.setUint16(Se, oe), Se += 2;
      }
      function te(oe) {
        se.setUint32(Se, oe), Se += 4;
      }
      for (var J = { signature: j(), flavor: j(), length: j(), numTables: ie(), reserved: ie(), totalSfntSize: j(), majorVersion: ie(), minorVersion: ie(), metaOffset: j(), metaLength: j(), metaOrigLength: j(), privOffset: j(), privLength: j() }, w = 0; Math.pow(2, w) <= J.numTables; ) w++;
      w--;
      for (var _ = 16 * Math.pow(2, w), R = 16 * J.numTables - _, K = 12, q = [], F = 0; F < J.numTables; F++) q.push({ tag: j(), offset: j(), compLength: j(), origLength: j(), origChecksum: j() }), K += 16;
      var ae, k = new Uint8Array(12 + 16 * q.length + q.reduce((function(oe, le) {
        return oe + le.origLength + 4;
      }), 0)), ee = k.buffer, se = new DataView(ee), Se = 0;
      return te(J.flavor), I(J.numTables), I(_), I(w), I(R), q.forEach((function(oe) {
        te(oe.tag), te(oe.origChecksum), te(K), te(oe.origLength), oe.outOffset = K, (K += oe.origLength) % 4 != 0 && (K += 4 - K % 4);
      })), q.forEach((function(oe) {
        var le, Ne = N.slice(oe.offset, oe.offset + oe.compLength);
        if (oe.compLength != oe.origLength) {
          var Ce = new Uint8Array(oe.origLength);
          le = new Uint8Array(Ne, 2), W(le, Ce);
        } else Ce = new Uint8Array(Ne);
        k.set(Ce, oe.outOffset);
        var me = 0;
        (K = oe.outOffset + oe.origLength) % 4 != 0 && (me = 4 - K % 4), k.set(new Uint8Array(me).buffer, oe.outOffset + oe.origLength), ae = K + me;
      })), ee.slice(0, ae);
    }, Object.defineProperty(o, "__esModule", { value: !0 }), o;
  })({}).convert_streams;
}
function X1(o, l) {
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
      const V = {
        R: n,
        L: i,
        D: s,
        C: f,
        U: d,
        T: c
      };
      v = /* @__PURE__ */ new Map();
      for (let W in m) {
        let Q = 0;
        m[W].split(",").forEach((ne) => {
          let [N, L] = ne.split("+");
          N = parseInt(N, 36), L = L ? parseInt(L, 36) : 0, v.set(Q += N, V[W]);
          for (let Y = L; Y--; )
            v.set(++Q, V[W]);
        });
      }
    }
    return v.get(G) || d;
  }
  const g = 1, E = 2, T = 3, M = 4, D = [null, "isol", "init", "fina", "medi"];
  function A(G) {
    const V = new Uint8Array(G.length);
    let W = d, Q = g, ne = -1;
    for (let N = 0; N < G.length; N++) {
      const L = G.codePointAt(N);
      let Y = y(L) | 0, ie = g;
      Y & c || (W & (i | s | f) ? Y & (n | s | f) ? (ie = T, (Q === g || Q === T) && V[ne]++) : Y & (i | d) && (Q === E || Q === M) && V[ne]-- : W & (n | d) && (Q === E || Q === M) && V[ne]--, Q = V[N] = ie, W = Y, ne = N, L > 65535 && N++);
    }
    return V;
  }
  function b(G, V) {
    const W = [];
    for (let ne = 0; ne < V.length; ne++) {
      const N = V.codePointAt(ne);
      N > 65535 && ne++, W.push(o.U.codeToGlyph(G, N));
    }
    const Q = G.GSUB;
    if (Q) {
      const { lookupList: ne, featureList: N } = Q;
      let L;
      const Y = /^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/, ie = [];
      N.forEach((j) => {
        if (Y.test(j.tag))
          for (let I = 0; I < j.tab.length; I++) {
            if (ie[j.tab[I]]) continue;
            ie[j.tab[I]] = !0;
            const te = ne[j.tab[I]], J = /^(isol|init|fina|medi)$/.test(j.tag);
            J && !L && (L = A(V));
            for (let w = 0; w < W.length; w++)
              (!L || !J || D[L[w]] === j.tag) && o.U._applySubs(W, w, te, ne);
          }
      });
    }
    return W;
  }
  function x(G, V) {
    const W = new Int16Array(V.length * 3);
    let Q = 0;
    for (; Q < V.length; Q++) {
      const Y = V[Q];
      if (Y === -1) continue;
      W[Q * 3 + 2] = G.hmtx.aWidth[Y];
      const ie = G.GPOS;
      if (ie) {
        const j = ie.lookupList;
        for (let I = 0; I < j.length; I++) {
          const te = j[I];
          for (let J = 0; J < te.tabs.length; J++) {
            const w = te.tabs[J];
            if (te.ltype === 1) {
              if (o._lctf.coverageIndex(w.coverage, Y) !== -1 && w.pos) {
                L(w.pos, Q);
                break;
              }
            } else if (te.ltype === 2) {
              let _ = null, R = ne();
              if (R !== -1) {
                const K = o._lctf.coverageIndex(w.coverage, V[R]);
                if (K !== -1) {
                  if (w.fmt === 1) {
                    const q = w.pairsets[K];
                    for (let F = 0; F < q.length; F++)
                      q[F].gid2 === Y && (_ = q[F]);
                  } else if (w.fmt === 2) {
                    const q = o.U._getGlyphClass(V[R], w.classDef1), F = o.U._getGlyphClass(Y, w.classDef2);
                    _ = w.matrix[q][F];
                  }
                  if (_) {
                    _.val1 && L(_.val1, R), _.val2 && L(_.val2, Q);
                    break;
                  }
                }
              }
            } else if (te.ltype === 4) {
              const _ = o._lctf.coverageIndex(w.markCoverage, Y);
              if (_ !== -1) {
                const R = ne(N), K = R === -1 ? -1 : o._lctf.coverageIndex(w.baseCoverage, V[R]);
                if (K !== -1) {
                  const q = w.markArray[_], F = w.baseArray[K][q.markClass];
                  W[Q * 3] = F.x - q.x + W[R * 3] - W[R * 3 + 2], W[Q * 3 + 1] = F.y - q.y + W[R * 3 + 1];
                  break;
                }
              }
            } else if (te.ltype === 6) {
              const _ = o._lctf.coverageIndex(w.mark1Coverage, Y);
              if (_ !== -1) {
                const R = ne();
                if (R !== -1) {
                  const K = V[R];
                  if (C(G, K) === 3) {
                    const q = o._lctf.coverageIndex(w.mark2Coverage, K);
                    if (q !== -1) {
                      const F = w.mark1Array[_], ae = w.mark2Array[q][F.markClass];
                      W[Q * 3] = ae.x - F.x + W[R * 3] - W[R * 3 + 2], W[Q * 3 + 1] = ae.y - F.y + W[R * 3 + 1];
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      } else if (G.kern && !G.cff) {
        const j = ne();
        if (j !== -1) {
          const I = G.kern.glyph1.indexOf(V[j]);
          if (I !== -1) {
            const te = G.kern.rval[I].glyph2.indexOf(Y);
            te !== -1 && (W[j * 3 + 2] += G.kern.rval[I].vals[te]);
          }
        }
      }
    }
    return W;
    function ne(Y) {
      for (let ie = Q - 1; ie >= 0; ie--)
        if (V[ie] !== -1 && (!Y || Y(V[ie])))
          return ie;
      return -1;
    }
    function N(Y) {
      return C(G, Y) === 1;
    }
    function L(Y, ie) {
      for (let j = 0; j < 3; j++)
        W[ie * 3 + j] += Y[j] || 0;
    }
  }
  function C(G, V) {
    const W = G.GDEF && G.GDEF.glyphClassDef;
    return W ? o.U._getGlyphClass(V, W) : 0;
  }
  function O(...G) {
    for (let V = 0; V < G.length; V++)
      if (typeof G[V] == "number")
        return G[V];
  }
  function H(G) {
    const V = /* @__PURE__ */ Object.create(null), W = G["OS/2"], Q = G.hhea, ne = G.head.unitsPerEm, N = O(W && W.sTypoAscender, Q && Q.ascender, ne), L = {
      unitsPerEm: ne,
      ascender: N,
      descender: O(W && W.sTypoDescender, Q && Q.descender, 0),
      capHeight: O(W && W.sCapHeight, N),
      xHeight: O(W && W.sxHeight, N),
      lineGap: O(W && W.sTypoLineGap, Q && Q.lineGap),
      supportsCodePoint(Y) {
        return o.U.codeToGlyph(G, Y) > 0;
      },
      forEachGlyph(Y, ie, j, I) {
        let te = 0;
        const J = 1 / L.unitsPerEm * ie, w = b(G, Y);
        let _ = 0;
        const R = x(G, w);
        return w.forEach((K, q) => {
          if (K !== -1) {
            let F = V[K];
            if (!F) {
              const { cmds: ae, crds: k } = o.U.glyphToPath(G, K);
              let ee = "", se = 0;
              for (let Ce = 0, me = ae.length; Ce < me; Ce++) {
                const Ee = p[ae[Ce]];
                ee += ae[Ce];
                for (let be = 1; be <= Ee; be++)
                  ee += (be > 1 ? "," : "") + k[se++];
              }
              let Se, oe, le, Ne;
              if (k.length) {
                Se = oe = 1 / 0, le = Ne = -1 / 0;
                for (let Ce = 0, me = k.length; Ce < me; Ce += 2) {
                  let Ee = k[Ce], be = k[Ce + 1];
                  Ee < Se && (Se = Ee), be < oe && (oe = be), Ee > le && (le = Ee), be > Ne && (Ne = be);
                }
              } else
                Se = le = oe = Ne = 0;
              F = V[K] = {
                index: K,
                advanceWidth: G.hmtx.aWidth[K],
                xMin: Se,
                yMin: oe,
                xMax: le,
                yMax: Ne,
                path: ee
              };
            }
            I.call(
              null,
              F,
              te + R[q * 3] * J,
              R[q * 3 + 1] * J,
              _
            ), te += R[q * 3 + 2] * J, j && (te += j * ie);
          }
          _ += Y.codePointAt(_) > 65535 ? 2 : 1;
        }), te;
      }
    };
    return L;
  }
  return function(V) {
    const W = new Uint8Array(V, 0, 4), Q = o._bin.readASCII(W, 0, 4);
    if (Q === "wOFF")
      V = l(V);
    else if (Q === "wOF2")
      throw new Error("woff2 fonts not supported");
    return H(o.parse(V)[0]);
  };
}
const Q1 = /* @__PURE__ */ li({
  name: "Typr Font Parser",
  dependencies: [Y1, q1, X1],
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
function F1() {
  return (function(o) {
    var l = function() {
      this.buckets = /* @__PURE__ */ new Map();
    };
    l.prototype.add = function(x) {
      var C = x >> 5;
      this.buckets.set(C, (this.buckets.get(C) || 0) | 1 << (31 & x));
    }, l.prototype.has = function(x) {
      var C = this.buckets.get(x >> 5);
      return C !== void 0 && (C & 1 << (31 & x)) != 0;
    }, l.prototype.serialize = function() {
      var x = [];
      return this.buckets.forEach((function(C, O) {
        x.push((+O).toString(36) + ":" + C.toString(36));
      })), x.join(",");
    }, l.prototype.deserialize = function(x) {
      var C = this;
      this.buckets.clear(), x.split(",").forEach((function(O) {
        var H = O.split(":");
        C.buckets.set(parseInt(H[0], 36), parseInt(H[1], 36));
      }));
    };
    var p = Math.pow(2, 8), m = p - 1, i = ~m;
    function n(x) {
      var C = (function(H) {
        return H & i;
      })(x).toString(16), O = (function(H) {
        return (H & i) + p - 1;
      })(x).toString(16);
      return "codepoint-index/plane" + (x >> 16) + "/" + C + "-" + O + ".json";
    }
    function s(x, C) {
      var O = x & m, H = C.codePointAt(O / 6 | 0);
      return ((H = (H || 48) - 48) & 1 << O % 6) != 0;
    }
    function c(x, C) {
      var O;
      (O = x, O.replace(/U\+/gi, "").replace(/^,+|,+$/g, "").split(/,+/).map((function(H) {
        return H.split("-").map((function(G) {
          return parseInt(G.trim(), 16);
        }));
      }))).forEach((function(H) {
        var G = H[0], V = H[1];
        V === void 0 && (V = G), C(G, V);
      }));
    }
    function f(x, C) {
      c(x, (function(O, H) {
        for (var G = O; G <= H; G++) C(G);
      }));
    }
    var d = {}, v = {}, y = /* @__PURE__ */ new WeakMap(), g = "https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";
    function E(x) {
      var C = y.get(x);
      return C || (C = new l(), f(x.ranges, (function(O) {
        return C.add(O);
      })), y.set(x, C)), C;
    }
    var T, M = /* @__PURE__ */ new Map();
    function D(x, C, O) {
      return x[C] ? C : x[O] ? O : (function(H) {
        for (var G in H) return G;
      })(x);
    }
    function A(x, C) {
      var O = C;
      if (!x.includes(O)) {
        O = 1 / 0;
        for (var H = 0; H < x.length; H++) Math.abs(x[H] - C) < Math.abs(O - C) && (O = x[H]);
      }
      return O;
    }
    function b(x) {
      return T || (T = /* @__PURE__ */ new Set(), f("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000", (function(C) {
        T.add(C);
      }))), T.has(x);
    }
    return o.CodePointSet = l, o.clearCache = function() {
      d = {}, v = {};
    }, o.getFontsForString = function(x, C) {
      C === void 0 && (C = {});
      var O, H = C.lang;
      H === void 0 && (H = new RegExp("\\p{Script=Hangul}", "u").test(O = x) ? "ko" : new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}", "u").test(O) ? "ja" : "en");
      var G = C.category;
      G === void 0 && (G = "sans-serif");
      var V = C.style;
      V === void 0 && (V = "normal");
      var W = C.weight;
      W === void 0 && (W = 400);
      var Q = (C.dataUrl || g).replace(/\/$/g, ""), ne = /* @__PURE__ */ new Map(), N = new Uint8Array(x.length), L = {}, Y = {}, ie = new Array(x.length), j = /* @__PURE__ */ new Map(), I = !1;
      function te(_) {
        var R = M.get(_);
        return R || (R = fetch(Q + "/" + _).then((function(K) {
          if (!K.ok) throw new Error(K.statusText);
          return K.json().then((function(q) {
            if (!Array.isArray(q) || q[0] !== 1) throw new Error("Incorrect schema version; need 1, got " + q[0]);
            return q[1];
          }));
        })).catch((function(K) {
          if (Q !== g) return I || (console.error('unicode-font-resolver: Failed loading from dataUrl "' + Q + '", trying default CDN. ' + K.message), I = !0), Q = g, M.delete(_), te(_);
          throw K;
        })), M.set(_, R)), R;
      }
      for (var J = function(_) {
        var R = x.codePointAt(_), K = n(R);
        ie[_] = K, d[K] || j.has(K) || j.set(K, te(K).then((function(q) {
          d[K] = q;
        }))), R > 65535 && (_++, w = _);
      }, w = 0; w < x.length; w++) J(w);
      return Promise.all(j.values()).then((function() {
        j.clear();
        for (var _ = function(K) {
          var q = x.codePointAt(K), F = null, ae = d[ie[K]], k = void 0;
          for (var ee in ae) {
            var se = Y[ee];
            if (se === void 0 && (se = Y[ee] = new RegExp(ee).test(H || "en")), se) {
              for (var Se in k = ee, ae[ee]) if (s(q, ae[ee][Se])) {
                F = Se;
                break;
              }
              break;
            }
          }
          if (!F) {
            e: for (var oe in ae) if (oe !== k) {
              for (var le in ae[oe]) if (s(q, ae[oe][le])) {
                F = le;
                break e;
              }
            }
          }
          F || (console.debug("No font coverage for U+" + q.toString(16)), F = "latin"), ie[K] = F, v[F] || j.has(F) || j.set(F, te("font-meta/" + F + ".json").then((function(Ne) {
            v[F] = Ne;
          }))), q > 65535 && (K++, R = K);
        }, R = 0; R < x.length; R++) _(R);
        return Promise.all(j.values());
      })).then((function() {
        for (var _, R = null, K = 0; K < x.length; K++) {
          var q = x.codePointAt(K);
          if (R && (b(q) || E(R).has(q))) N[K] = N[K - 1];
          else {
            R = v[ie[K]];
            var F = L[R.id];
            if (!F) {
              var ae = R.typeforms, k = D(ae, G, "sans-serif"), ee = D(ae[k], V, "normal"), se = A((_ = ae[k]) === null || _ === void 0 ? void 0 : _[ee], W);
              F = L[R.id] = Q + "/font-files/" + R.id + "/" + k + "." + ee + "." + se + ".woff";
            }
            var Se = ne.get(F);
            Se == null && (Se = ne.size, ne.set(F, Se)), N[K] = Se;
          }
          q > 65535 && (K++, N[K] = N[K - 1]);
        }
        return { fontUrls: Array.from(ne.keys()), chars: N };
      }));
    }, Object.defineProperty(o, "__esModule", { value: !0 }), o;
  })({});
}
function K1(o, l) {
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
    const E = new Uint8Array(s.length), T = [];
    s.length || b();
    const M = /* @__PURE__ */ new Map(), D = [];
    if (v !== "italic" && (v = "normal"), typeof y != "number" && (y = y === "bold" ? 700 : 400), d && !Array.isArray(d) && (d = [d]), d = d.slice().filter((C) => !C.lang || C.lang.test(f)).reverse(), d.length) {
      let G = 0;
      (function V(W = 0) {
        for (let Q = W, ne = s.length; Q < ne; Q++) {
          const N = s.codePointAt(Q);
          if (G === 1 && T[E[Q - 1]].supportsCodePoint(N) || Q > 0 && /\s/.test(s[Q]))
            E[Q] = E[Q - 1], G === 2 && (D[D.length - 1][1] = Q);
          else
            for (let L = E[Q], Y = d.length; L <= Y; L++)
              if (L === Y) {
                const ie = G === 2 ? D[D.length - 1] : D[D.length] = [Q, Q];
                ie[1] = Q, G = 2;
              } else {
                E[Q] = L;
                const { src: ie, unicodeRange: j } = d[L];
                if (!j || x(N, j)) {
                  const I = p[ie];
                  if (!I) {
                    n(ie, () => {
                      V(Q);
                    });
                    return;
                  }
                  if (I.supportsCodePoint(N)) {
                    let te = M.get(I);
                    typeof te != "number" && (te = T.length, T.push(I), M.set(I, te)), E[Q] = te, G = 1;
                    break;
                  }
                }
              }
          N > 65535 && Q + 1 < ne && (E[Q + 1] = E[Q], Q++, G === 2 && (D[D.length - 1][1] = Q));
        }
        A();
      })();
    } else
      D.push([0, s.length - 1]), A();
    function A() {
      if (D.length) {
        const C = D.map((O) => s.substring(O[0], O[1] + 1)).join(`
`);
        l.getFontsForString(C, {
          lang: f || void 0,
          style: v,
          weight: y,
          dataUrl: g
        }).then(({ fontUrls: O, chars: H }) => {
          const G = T.length;
          let V = 0;
          D.forEach((Q) => {
            for (let ne = 0, N = Q[1] - Q[0]; ne <= N; ne++)
              E[Q[0] + ne] = H[V++] + G;
            V++;
          });
          let W = 0;
          O.forEach((Q, ne) => {
            n(Q, (N) => {
              T[ne + G] = N, ++W === O.length && b();
            });
          });
        });
      } else
        b();
    }
    function b() {
      c({
        chars: E,
        fonts: T
      });
    }
    function x(C, O) {
      for (let H = 0; H < O.length; H++) {
        const [G, V = G] = O[H];
        if (G <= C && C <= V)
          return !0;
      }
      return !1;
    }
  };
}
const Z1 = /* @__PURE__ */ li({
  name: "FontResolver",
  dependencies: [
    K1,
    Q1,
    F1
  ],
  init(o, l, p) {
    return o(l, p());
  }
});
function J1(o, l) {
  const m = /[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/, i = "[^\\S\\u00A0]", n = new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);
  function s({ text: T, lang: M, fonts: D, style: A, weight: b, preResolvedFonts: x, unicodeFontsURL: C }, O) {
    const H = ({ chars: G, fonts: V }) => {
      let W, Q;
      const ne = [];
      for (let N = 0; N < G.length; N++)
        G[N] !== Q ? (Q = G[N], ne.push(W = { start: N, end: N, fontObj: V[G[N]] })) : W.end = N;
      O(ne);
    };
    x ? H(x) : o(
      T,
      H,
      { lang: M, fonts: D, style: A, weight: b, unicodeFontsURL: C }
    );
  }
  function c({
    text: T = "",
    font: M,
    lang: D,
    sdfGlyphSize: A = 64,
    fontSize: b = 400,
    fontWeight: x = 1,
    fontStyle: C = "normal",
    letterSpacing: O = 0,
    lineHeight: H = "normal",
    maxWidth: G = 1 / 0,
    direction: V,
    textAlign: W = "left",
    textIndent: Q = 0,
    whiteSpace: ne = "normal",
    overflowWrap: N = "normal",
    anchorX: L = 0,
    anchorY: Y = 0,
    metricsOnly: ie = !1,
    unicodeFontsURL: j,
    preResolvedFonts: I = null,
    includeCaretPositions: te = !1,
    chunkedBoundsSize: J = 8192,
    colorRanges: w = null
  }, _) {
    const R = y(), K = { fontLoad: 0, typesetting: 0 };
    T.indexOf("\r") > -1 && (console.info("Typesetter: got text with \\r chars; normalizing to \\n"), T = T.replace(/\r\n/g, `
`).replace(/\r/g, `
`)), b = +b, O = +O, G = +G, H = H || "normal", Q = +Q, s({
      text: T,
      lang: D,
      style: C,
      weight: x,
      fonts: typeof M == "string" ? [{ src: M }] : M,
      unicodeFontsURL: j,
      preResolvedFonts: I
    }, (q) => {
      K.fontLoad = y() - R;
      const F = isFinite(G);
      let ae = null, k = null, ee = null, se = null, Se = null, oe = null, le = null, Ne = null, Ce = 0, me = 0, Ee = ne !== "nowrap";
      const be = /* @__PURE__ */ new Map(), fe = y();
      let ge = Q, ve = 0, $ = new g();
      const He = [$];
      q.forEach((Te) => {
        const { fontObj: De } = Te, { ascender: Oe, descender: Ve, unitsPerEm: $e, lineGap: ft, capHeight: Be, xHeight: Ge } = De;
        let Me = be.get(De);
        if (!Me) {
          const Re = b / $e, Ze = H === "normal" ? (Oe - Ve + ft) * Re : H * b, _a = (Ze - (Oe - Ve) * Re) / 2, we = Math.min(Ze, (Oe - Ve) * Re), Xe = (Oe + Ve) / 2 * Re + we / 2;
          Me = {
            index: be.size,
            src: De.src,
            fontObj: De,
            fontSizeMult: Re,
            unitsPerEm: $e,
            ascender: Oe * Re,
            descender: Ve * Re,
            capHeight: Be * Re,
            xHeight: Ge * Re,
            lineHeight: Ze,
            baseline: -_a - Oe * Re,
            // baseline offset from top of line height
            // cap: -halfLeading - capHeight * fontSizeMult, // cap from top of line height
            // ex: -halfLeading - xHeight * fontSizeMult, // ex from top of line height
            caretTop: Xe,
            caretBottom: Xe - we
          }, be.set(De, Me);
        }
        const { fontSizeMult: ct } = Me, et = T.slice(Te.start, Te.end + 1);
        let _t, tt;
        De.forEachGlyph(et, b, O, (Re, Ze, _a, we) => {
          Ze += ve, we += Te.start, _t = Ze, tt = Re;
          const Xe = T.charAt(we), mt = Re.advanceWidth * ct, at = $.count;
          let ze;
          if ("isEmpty" in Re || (Re.isWhitespace = !!Xe && new RegExp(i).test(Xe), Re.canBreakAfter = !!Xe && n.test(Xe), Re.isEmpty = Re.xMin === Re.xMax || Re.yMin === Re.yMax || m.test(Xe)), !Re.isWhitespace && !Re.isEmpty && me++, Ee && F && !Re.isWhitespace && Ze + mt + ge > G && at) {
            if ($.glyphAt(at - 1).glyphObj.canBreakAfter)
              ze = new g(), ge = -Ze;
            else
              for (let xt = at; xt--; )
                if (xt === 0 && N === "break-word") {
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
            ze && ($.isSoftWrapped = !0, $ = ze, He.push($), Ce = G);
          }
          let nt = $.glyphAt($.count);
          nt.glyphObj = Re, nt.x = Ze + ge, nt.y = _a, nt.width = mt, nt.charIndex = we, nt.fontData = Me, Xe === `
` && ($ = new g(), He.push($), ge = -(Ze + mt + O * b) + Q);
        }), ve = _t + tt.advanceWidth * ct + O * b;
      });
      let ye = 0;
      He.forEach((Te) => {
        let De = !0;
        for (let Oe = Te.count; Oe--; ) {
          const Ve = Te.glyphAt(Oe);
          De && !Ve.glyphObj.isWhitespace && (Te.width = Ve.x + Ve.width, Te.width > Ce && (Ce = Te.width), De = !1);
          let { lineHeight: $e, capHeight: ft, xHeight: Be, baseline: Ge } = Ve.fontData;
          $e > Te.lineHeight && (Te.lineHeight = $e);
          const Me = Ge - Te.baseline;
          Me < 0 && (Te.baseline += Me, Te.cap += Me, Te.ex += Me), Te.cap = Math.max(Te.cap, Te.baseline + ft), Te.ex = Math.max(Te.ex, Te.baseline + Be);
        }
        Te.baseline -= ye, Te.cap -= ye, Te.ex -= ye, ye += Te.lineHeight;
      });
      let Ue = 0, de = 0;
      if (L && (typeof L == "number" ? Ue = -L : typeof L == "string" && (Ue = -Ce * (L === "left" ? 0 : L === "center" ? 0.5 : L === "right" ? 1 : d(L)))), Y && (typeof Y == "number" ? de = -Y : typeof Y == "string" && (de = Y === "top" ? 0 : Y === "top-baseline" ? -He[0].baseline : Y === "top-cap" ? -He[0].cap : Y === "top-ex" ? -He[0].ex : Y === "middle" ? ye / 2 : Y === "bottom" ? ye : Y === "bottom-baseline" ? -He[He.length - 1].baseline : d(Y) * ye)), !ie) {
        const Te = l.getEmbeddingLevels(T, V);
        ae = new Uint16Array(me), k = new Uint8Array(me), ee = new Float32Array(me * 2), se = {}, le = [1 / 0, 1 / 0, -1 / 0, -1 / 0], Ne = [], te && (oe = new Float32Array(T.length * 4)), w && (Se = new Uint8Array(me * 3));
        let De = 0, Oe = -1, Ve = -1, $e, ft;
        if (He.forEach((Be, Ge) => {
          let { count: Me, width: ct } = Be;
          if (Me > 0) {
            let et = 0;
            for (let we = Me; we-- && Be.glyphAt(we).glyphObj.isWhitespace; )
              et++;
            let _t = 0, tt = 0;
            if (W === "center")
              _t = (Ce - ct) / 2;
            else if (W === "right")
              _t = Ce - ct;
            else if (W === "justify" && Be.isSoftWrapped) {
              let we = 0;
              for (let Xe = Me - et; Xe--; )
                Be.glyphAt(Xe).glyphObj.isWhitespace && we++;
              tt = (Ce - ct) / we;
            }
            if (tt || _t) {
              let we = 0;
              for (let Xe = 0; Xe < Me; Xe++) {
                let mt = Be.glyphAt(Xe);
                const at = mt.glyphObj;
                mt.x += _t + we, tt !== 0 && at.isWhitespace && Xe < Me - et && (we += tt, mt.width += tt);
              }
            }
            const Re = l.getReorderSegments(
              T,
              Te,
              Be.glyphAt(0).charIndex,
              Be.glyphAt(Be.count - 1).charIndex
            );
            for (let we = 0; we < Re.length; we++) {
              const [Xe, mt] = Re[we];
              let at = 1 / 0, ze = -1 / 0;
              for (let nt = 0; nt < Me; nt++)
                if (Be.glyphAt(nt).charIndex >= Xe) {
                  let xt = nt, Ct = nt;
                  for (; Ct < Me; Ct++) {
                    let gt = Be.glyphAt(Ct);
                    if (gt.charIndex > mt)
                      break;
                    Ct < Me - et && (at = Math.min(at, gt.x), ze = Math.max(ze, gt.x + gt.width));
                  }
                  for (let gt = xt; gt < Ct; gt++) {
                    const Zt = Be.glyphAt(gt);
                    Zt.x = ze - (Zt.x + Zt.width - at);
                  }
                  break;
                }
            }
            let Ze;
            const _a = (we) => Ze = we;
            for (let we = 0; we < Me; we++) {
              const Xe = Be.glyphAt(we);
              Ze = Xe.glyphObj;
              const mt = Ze.index, at = Te.levels[Xe.charIndex] & 1;
              if (at) {
                const ze = l.getMirroredCharacter(T[Xe.charIndex]);
                ze && Xe.fontData.fontObj.forEachGlyph(ze, 0, 0, _a);
              }
              if (te) {
                const { charIndex: ze, fontData: nt } = Xe, xt = Xe.x + Ue, Ct = Xe.x + Xe.width + Ue;
                oe[ze * 4] = at ? Ct : xt, oe[ze * 4 + 1] = at ? xt : Ct, oe[ze * 4 + 2] = Be.baseline + nt.caretBottom + de, oe[ze * 4 + 3] = Be.baseline + nt.caretTop + de;
                const gt = ze - Oe;
                gt > 1 && v(oe, Oe, gt), Oe = ze;
              }
              if (w) {
                const { charIndex: ze } = Xe;
                for (; ze > Ve; )
                  Ve++, w.hasOwnProperty(Ve) && (ft = w[Ve]);
              }
              if (!Ze.isWhitespace && !Ze.isEmpty) {
                const ze = De++, { fontSizeMult: nt, src: xt, index: Ct } = Xe.fontData, gt = se[xt] || (se[xt] = {});
                gt[mt] || (gt[mt] = {
                  path: Ze.path,
                  pathBounds: [Ze.xMin, Ze.yMin, Ze.xMax, Ze.yMax]
                });
                const Zt = Xe.x + Ue, sa = Xe.y + Be.baseline + de;
                ee[ze * 2] = Zt, ee[ze * 2 + 1] = sa;
                const Nt = Zt + Ze.xMin * nt, Ua = sa + Ze.yMin * nt, Yt = Zt + Ze.xMax * nt, Ot = sa + Ze.yMax * nt;
                Nt < le[0] && (le[0] = Nt), Ua < le[1] && (le[1] = Ua), Yt > le[2] && (le[2] = Yt), Ot > le[3] && (le[3] = Ot), ze % J === 0 && ($e = { start: ze, end: ze, rect: [1 / 0, 1 / 0, -1 / 0, -1 / 0] }, Ne.push($e)), $e.end++;
                const Ut = $e.rect;
                if (Nt < Ut[0] && (Ut[0] = Nt), Ua < Ut[1] && (Ut[1] = Ua), Yt > Ut[2] && (Ut[2] = Yt), Ot > Ut[3] && (Ut[3] = Ot), ae[ze] = mt, k[ze] = Ct, w) {
                  const lt = ze * 3;
                  Se[lt] = ft >> 16 & 255, Se[lt + 1] = ft >> 8 & 255, Se[lt + 2] = ft & 255;
                }
              }
            }
          }
        }), oe) {
          const Be = T.length - Oe;
          Be > 1 && v(oe, Oe, Be);
        }
      }
      const We = [];
      be.forEach(({ index: Te, src: De, unitsPerEm: Oe, ascender: Ve, descender: $e, lineHeight: ft, capHeight: Be, xHeight: Ge }) => {
        We[Te] = { src: De, unitsPerEm: Oe, ascender: Ve, descender: $e, lineHeight: ft, capHeight: Be, xHeight: Ge };
      }), K.typesetting = y() - fe, _({
        glyphIds: ae,
        //id for each glyph, specific to that glyph's font
        glyphFontIndices: k,
        //index into fontData for each glyph
        glyphPositions: ee,
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
        chunkedBounds: Ne,
        //total rects per (n=chunkedBoundsSize) consecutive glyphs
        fontSize: b,
        //calculated em height
        topBaseline: de + He[0].baseline,
        //y coordinate of the top line's baseline
        blockBounds: [
          //bounds for the whole block of text, including vertical padding for lineHeight
          Ue,
          de - ye,
          Ue + Ce,
          de
        ],
        visibleBounds: le,
        //total bounds of visible text paths, may be larger or smaller than blockBounds
        timings: K
      });
    });
  }
  function f(T, M) {
    c({ ...T, metricsOnly: !0 }, (D) => {
      const [A, b, x, C] = D.blockBounds;
      M({
        width: x - A,
        height: C - b
      });
    });
  }
  function d(T) {
    let M = T.match(/^([\d.]+)%$/), D = M ? parseFloat(M[1]) : NaN;
    return isNaN(D) ? 0 : D / 100;
  }
  function v(T, M, D) {
    const A = T[M * 4], b = T[M * 4 + 1], x = T[M * 4 + 2], C = T[M * 4 + 3], O = (b - A) / D;
    for (let H = 0; H < D; H++) {
      const G = (M + H) * 4;
      T[G] = A + O * H, T[G + 1] = A + O * (H + 1), T[G + 2] = x, T[G + 3] = C;
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
    glyphAt(T) {
      let M = g.flyweight;
      return M.data = this.data, M.index = T, M;
    },
    splitAt(T) {
      let M = new g();
      return M.data = this.data.splice(T * E.length), M;
    }
  }, g.flyweight = E.reduce((T, M, D, A) => (Object.defineProperty(T, M, {
    get() {
      return this.data[this.index * E.length + D];
    },
    set(b) {
      this.data[this.index * E.length + D] = b;
    }
  }), T), { data: null, index: 0 }), {
    typeset: c,
    measure: f
  };
}
const dl = () => (self.performance || Date).now(), Zu = /* @__PURE__ */ qs();
let ns;
function w1(o, l, p, m, i, n, s, c, f, d, v = !0) {
  return v ? P1(o, l, p, m, i, n, s, c, f, d).then(
    null,
    (y) => (ns || (console.warn("WebGL SDF generation failed, falling back to JS", y), ns = !0), is(o, l, p, m, i, n, s, c, f, d))
  ) : is(o, l, p, m, i, n, s, c, f, d);
}
const Vu = [], W1 = 5;
let Ho = 0;
function Qs() {
  const o = dl();
  for (; Vu.length && dl() - o < W1; )
    Vu.shift()();
  Ho = Vu.length ? setTimeout(Qs, 0) : 0;
}
const P1 = (...o) => new Promise((l, p) => {
  Vu.push(() => {
    const m = dl();
    try {
      Zu.webgl.generateIntoCanvas(...o), l({ timing: dl() - m });
    } catch (i) {
      p(i);
    }
  }), Ho || (Ho = setTimeout(Qs, 0));
}), k1 = 4, I1 = 2e3, ls = {};
let $1 = 0;
function is(o, l, p, m, i, n, s, c, f, d) {
  const v = "TroikaTextSDFGenerator_JS_" + $1++ % k1;
  let y = ls[v];
  return y || (y = ls[v] = {
    workerModule: li({
      name: v,
      workerId: v,
      dependencies: [
        qs,
        dl
      ],
      init(g, E) {
        const T = g().javascript.generate;
        return function(...M) {
          const D = E();
          return {
            textureData: T(...M),
            timing: E() - D
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
    const T = dl(), M = new Uint8Array(g.length * 4);
    for (let D = 0; D < g.length; D++)
      M[D * 4 + d] = g[D];
    return Zu.webglUtils.renderImageData(s, M, c, f, o, l, 1 << 3 - d), E += dl() - T, --y.requests === 0 && (y.idleTimer = setTimeout(() => {
      R1(v);
    }, I1)), { timing: E };
  });
}
function e0(o) {
  o._warm || (Zu.webgl.isSupported(o), o._warm = !0);
}
const t0 = Zu.webglUtils.resizeWebGLCanvasWithoutClearing, Xi = {
  unicodeFontsURL: null,
  sdfGlyphSize: 64,
  sdfMargin: 1 / 16,
  sdfExponent: 9,
  textureWidth: 2048
}, a0 = /* @__PURE__ */ new Fu();
function ti() {
  return (self.performance || Date).now();
}
const us = /* @__PURE__ */ Object.create(null);
function Fs(o, l) {
  o = i0({}, o);
  const p = ti(), m = [];
  if (o.font && m.push({ label: "user", src: u0(o.font) }), o.font = m, o.text = "" + o.text, o.sdfGlyphSize = o.sdfGlyphSize || Xi.sdfGlyphSize, o.unicodeFontsURL = o.unicodeFontsURL || Xi.unicodeFontsURL, o.colorRanges != null) {
    let g = {};
    for (let E in o.colorRanges)
      if (o.colorRanges.hasOwnProperty(E)) {
        let T = o.colorRanges[E];
        typeof T != "number" && (T = a0.set(T).getHex()), g[E] = T;
      }
    o.colorRanges = g;
  }
  Object.freeze(o);
  const { textureWidth: i, sdfExponent: n } = Xi, { sdfGlyphSize: s } = o, c = i / s * 4;
  let f = us[s];
  if (!f) {
    const g = document.createElement("canvas");
    g.width = i, g.height = s * 256 / c, f = us[s] = {
      glyphCount: 0,
      sdfGlyphSize: s,
      sdfCanvas: g,
      sdfTexture: new ov(
        g,
        void 0,
        void 0,
        void 0,
        Cc,
        Cc
      ),
      contextLost: !1,
      glyphsByFont: /* @__PURE__ */ new Map()
    }, f.sdfTexture.generateMipmaps = !1, n0(f);
  }
  const { sdfTexture: d, sdfCanvas: v } = f;
  Js(o).then((g) => {
    const { glyphIds: E, glyphFontIndices: T, fontData: M, glyphPositions: D, fontSize: A, timings: b } = g, x = [], C = new Float32Array(E.length * 4);
    let O = 0, H = 0;
    const G = ti(), V = M.map((L) => {
      let Y = f.glyphsByFont.get(L.src);
      return Y || f.glyphsByFont.set(L.src, Y = /* @__PURE__ */ new Map()), Y;
    });
    E.forEach((L, Y) => {
      const ie = T[Y], { src: j, unitsPerEm: I } = M[ie];
      let te = V[ie].get(L);
      if (!te) {
        const { path: K, pathBounds: q } = g.glyphData[j][L], F = Math.max(q[2] - q[0], q[3] - q[1]) / s * (Xi.sdfMargin * s + 0.5), ae = f.glyphCount++, k = [
          q[0] - F,
          q[1] - F,
          q[2] + F,
          q[3] + F
        ];
        V[ie].set(L, te = { path: K, atlasIndex: ae, sdfViewBox: k }), x.push(te);
      }
      const { sdfViewBox: J } = te, w = D[H++], _ = D[H++], R = A / I;
      C[O++] = w + J[0] * R, C[O++] = _ + J[1] * R, C[O++] = w + J[2] * R, C[O++] = _ + J[3] * R, E[Y] = te.atlasIndex;
    }), b.quads = (b.quads || 0) + (ti() - G);
    const W = ti();
    b.sdf = {};
    const Q = v.height, ne = Math.ceil(f.glyphCount / c), N = Math.pow(2, Math.ceil(Math.log2(ne * s)));
    N > Q && (console.info(`Increasing SDF texture size ${Q}->${N}`), t0(v, i, N), d.dispose()), Promise.all(x.map(
      (L) => Ks(L, f, o.gpuAccelerateSDF).then(({ timing: Y }) => {
        b.sdf[L.atlasIndex] = Y;
      })
    )).then(() => {
      x.length && !f.contextLost && (Zs(f), d.needsUpdate = !0), b.sdfTotal = ti() - W, b.total = ti() - p, l(Object.freeze({
        parameters: o,
        sdfTexture: d,
        sdfGlyphSize: s,
        sdfExponent: n,
        glyphBounds: C,
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
    f.contextLost || e0(v);
  });
}
function Ks({ path: o, atlasIndex: l, sdfViewBox: p }, { sdfGlyphSize: m, sdfCanvas: i, contextLost: n }, s) {
  if (n)
    return Promise.resolve({ timing: -1 });
  const { textureWidth: c, sdfExponent: f } = Xi, d = Math.max(p[2] - p[0], p[3] - p[1]), v = Math.floor(l / 4), y = v % (c / m) * m, g = Math.floor(v / (c / m)) * m, E = l % 4;
  return w1(m, m, o, p, d, f, i, y, g, E, s);
}
function n0(o) {
  const l = o.sdfCanvas;
  l.addEventListener("webglcontextlost", (p) => {
    console.log("Context Lost", p), p.preventDefault(), o.contextLost = !0;
  }), l.addEventListener("webglcontextrestored", (p) => {
    console.log("Context Restored", p), o.contextLost = !1;
    const m = [];
    o.glyphsByFont.forEach((i) => {
      i.forEach((n) => {
        m.push(Ks(n, o, !0));
      });
    }), Promise.all(m).then(() => {
      Zs(o), o.sdfTexture.needsUpdate = !0;
    });
  });
}
function l0({ font: o, characters: l, sdfGlyphSize: p }, m) {
  let i = Array.isArray(l) ? l.join(`
`) : "" + l;
  Fs({ font: o, sdfGlyphSize: p, text: i }, m);
}
function i0(o, l) {
  for (let p in l)
    l.hasOwnProperty(p) && (o[p] = l[p]);
  return o;
}
let Nu;
function u0(o) {
  return Nu || (Nu = typeof document > "u" ? {} : document.createElement("a")), Nu.href = o, Nu.href;
}
function Zs(o) {
  if (typeof createImageBitmap != "function") {
    console.info("Safari<15: applying SDF canvas workaround");
    const { sdfCanvas: l, sdfTexture: p } = o, { width: m, height: i } = l, n = o.sdfCanvas.getContext("webgl");
    let s = p.image.data;
    (!s || s.length !== m * i * 4) && (s = new Uint8Array(m * i * 4), p.image = { width: m, height: i, data: s }, p.flipY = !1, p.isDataTexture = !0), n.readPixels(0, 0, m, i, n.RGBA, n.UNSIGNED_BYTE, s);
  }
}
const r0 = /* @__PURE__ */ li({
  name: "Typesetter",
  dependencies: [
    J1,
    Z1,
    x1
  ],
  init(o, l, p) {
    return o(l, p());
  }
}), Js = /* @__PURE__ */ li({
  name: "Typesetter",
  dependencies: [
    r0
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
Js.onMainThread;
const rs = {};
function o0(o) {
  let l = rs[o];
  return l || (l = rs[o] = new Yo(1, 1, o, o).translate(0.5, 0.5, 0)), l;
}
const f0 = "aTroikaGlyphBounds", os = "aTroikaGlyphIndex", c0 = "aTroikaGlyphColor";
class s0 extends iv {
  constructor() {
    super(), this.detail = 1, this.curveRadius = 0, this.groups = [
      { start: 0, count: 1 / 0, materialIndex: 0 },
      { start: 0, count: 1 / 0, materialIndex: 1 }
    ], this.boundingSphere = new uv(), this.boundingBox = new hs();
  }
  computeBoundingSphere() {
  }
  computeBoundingBox() {
  }
  set detail(l) {
    if (l !== this._detail) {
      this._detail = l, (typeof l != "number" || l < 1) && (l = 1);
      let p = o0(l);
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
    this.updateAttributeData(f0, l, 4), this.updateAttributeData(os, p, 1), this.updateAttributeData(c0, n, 3), this._blockBounds = m, this._chunkedBounds = i, this.instanceCount = p.length, this._updateBounds();
  }
  _updateBounds() {
    const l = this._blockBounds;
    if (l) {
      const { curveRadius: p, boundingBox: m } = this;
      if (p) {
        const { PI: i, floor: n, min: s, max: c, sin: f, cos: d } = Math, v = i / 2, y = i * 2, g = Math.abs(p), E = l[0] / g, T = l[2] / g, M = n((E + v) / y) !== n((T + v) / y) ? -g : s(f(E) * g, f(T) * g), D = n((E - v) / y) !== n((T - v) / y) ? g : c(f(E) * g, f(T) * g), A = n((E + i) / y) !== n((T + i) / y) ? g * 2 : c(g - d(E) * g, g - d(T) * g);
        m.min.set(M, l[1], p < 0 ? -A : 0), m.max.set(D, l[3], p < 0 ? 0 : A);
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
    let p = this.getAttribute(os).count, m = this._chunkedBounds;
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
    p ? i && i.array.length === p.length ? (i.array.set(p), i.needsUpdate = !0) : (this.setAttribute(l, new rv(p, m)), delete this._maxInstanceCount, this.dispose()) : i && this.deleteAttribute(l);
  }
}
const d0 = `
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
`, h0 = `
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
`, v0 = `
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
`, p0 = `
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
function m0(o) {
  const l = jo(o, {
    chained: !0,
    extensions: {
      derivatives: !0
    },
    uniforms: {
      uTroikaSDFTexture: { value: null },
      uTroikaSDFTextureSize: { value: new Lu() },
      uTroikaSDFGlyphSize: { value: 0 },
      uTroikaSDFExponent: { value: 0 },
      uTroikaTotalBounds: { value: new Oc(0, 0, 0, 0) },
      uTroikaClipRect: { value: new Oc(0, 0, 0, 0) },
      uTroikaEdgeOffset: { value: 0 },
      uTroikaFillOpacity: { value: 1 },
      uTroikaPositionOffset: { value: new Lu() },
      uTroikaCurveRadius: { value: 0 },
      uTroikaBlurRadius: { value: 0 },
      uTroikaStrokeWidth: { value: 0 },
      uTroikaStrokeColor: { value: new Fu() },
      uTroikaStrokeOpacity: { value: 1 },
      uTroikaOrient: { value: new fv() },
      uTroikaUseGlyphColors: { value: !0 },
      uTroikaSDFDebug: { value: !1 }
    },
    vertexDefs: d0,
    vertexTransform: h0,
    fragmentDefs: v0,
    fragmentColorTransform: p0,
    customRewriter({ vertexShader: p, fragmentShader: m }) {
      let i = /\buniform\s+vec3\s+diffuse\b/;
      return i.test(m) && (m = m.replace(i, "varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g, "vTroikaGlyphColor"), i.test(p) || (p = p.replace(
        Xs,
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
const Ko = /* @__PURE__ */ new nv({
  color: 16777215,
  side: cv,
  transparent: !0
}), fs = 8421504, cs = /* @__PURE__ */ new lv(), Bu = /* @__PURE__ */ new Lo(), Mo = /* @__PURE__ */ new Lo(), qi = [], y0 = /* @__PURE__ */ new Lo(), Do = "+x+y";
function ss(o) {
  return Array.isArray(o) ? o[0] : o;
}
let ws = () => {
  const o = new Vo(
    new Yo(1, 1),
    Ko
  );
  return ws = () => o, o;
}, Ws = () => {
  const o = new Vo(
    new Yo(1, 1, 32, 1),
    Ko
  );
  return Ws = () => o, o;
};
const g0 = { type: "syncstart" }, S0 = { type: "synccomplete" }, Ps = [
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
], E0 = Ps.concat(
  "material",
  "color",
  "depthOffset",
  "clipRect",
  "curveRadius",
  "orientation",
  "glyphGeometryDetail"
);
let ks = class extends Vo {
  constructor() {
    const l = new s0();
    super(l, null), this.text = "", this.anchorX = 0, this.anchorY = 0, this.curveRadius = 0, this.direction = "auto", this.font = null, this.unicodeFontsURL = null, this.fontSize = 0.1, this.fontWeight = "normal", this.fontStyle = "normal", this.lang = null, this.letterSpacing = 0, this.lineHeight = "normal", this.maxWidth = 1 / 0, this.overflowWrap = "normal", this.textAlign = "left", this.textIndent = 0, this.whiteSpace = "normal", this.material = null, this.color = null, this.colorRanges = null, this.outlineWidth = 0, this.outlineColor = 0, this.outlineOpacity = 1, this.outlineBlur = 0, this.outlineOffsetX = 0, this.outlineOffsetY = 0, this.strokeWidth = 0, this.strokeColor = fs, this.strokeOpacity = 1, this.fillOpacity = 1, this.depthOffset = 0, this.clipRect = null, this.orientation = Do, this.glyphGeometryDetail = 1, this.sdfGlyphSize = null, this.gpuAccelerateSDF = !0, this.debugSDF = !1;
  }
  /**
   * Updates the text rendering according to the current text-related configuration properties.
   * This is an async process, so you can pass in a callback function to be executed when it
   * finishes.
   * @param {function} [callback]
   */
  sync(l) {
    this._needsSync && (this._needsSync = !1, this._isSyncing ? (this._queuedSyncs || (this._queuedSyncs = [])).push(l) : (this._isSyncing = !0, this.dispatchEvent(g0), Fs({
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
      })), this.dispatchEvent(S0), l && l();
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
    return m0(l);
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
    return ss(this.material).getDepthMaterial();
  }
  set customDepthMaterial(l) {
  }
  get customDistanceMaterial() {
    return ss(this.material).getDistanceMaterial();
  }
  set customDistanceMaterial(l) {
  }
  _prepareForRender(l) {
    const p = l.isTextOutlineMaterial, m = l.uniforms, i = this.textRenderInfo;
    if (i) {
      const { sdfTexture: c, blockBounds: f } = i;
      m.uTroikaSDFTexture.value = c, m.uTroikaSDFTextureSize.value.set(c.image.width, c.image.height), m.uTroikaSDFGlyphSize.value = i.sdfGlyphSize, m.uTroikaSDFExponent.value = i.sdfExponent, m.uTroikaTotalBounds.value.fromArray(f), m.uTroikaUseGlyphColors.value = !p && !!i.glyphColors;
      let d = 0, v = 0, y = 0, g, E, T, M = 0, D = 0;
      if (p) {
        let { outlineWidth: b, outlineOffsetX: x, outlineOffsetY: C, outlineBlur: O, outlineOpacity: H } = this;
        d = this._parsePercent(b) || 0, v = Math.max(0, this._parsePercent(O) || 0), g = H, M = this._parsePercent(x) || 0, D = this._parsePercent(C) || 0;
      } else
        y = Math.max(0, this._parsePercent(this.strokeWidth) || 0), y && (T = this.strokeColor, m.uTroikaStrokeColor.value.set(T ?? fs), E = this.strokeOpacity, E == null && (E = 1)), g = this.fillOpacity;
      m.uTroikaEdgeOffset.value = d, m.uTroikaPositionOffset.value.set(M, D), m.uTroikaBlurRadius.value = v, m.uTroikaStrokeWidth.value = y, m.uTroikaStrokeOpacity.value = E, m.uTroikaFillOpacity.value = g ?? 1, m.uTroikaCurveRadius.value = this.curveRadius || 0;
      let A = this.clipRect;
      if (A && Array.isArray(A) && A.length === 4)
        m.uTroikaClipRect.value.fromArray(A);
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
      const c = l.hasOwnProperty("color") ? l.color : l.color = new Fu();
      (n !== c._input || typeof n == "object") && c.set(c._input = n);
    }
    let s = this.orientation || Do;
    if (s !== l._orientation) {
      let c = m.uTroikaOrient.value;
      s = s.replace(/[^-+xyz]/g, "");
      let f = s !== Do && s.match(/^([-+])([xyz])([-+])([xyz])$/);
      if (f) {
        let [, d, v, y, g] = f;
        Bu.set(0, 0, 0)[v] = d === "-" ? 1 : -1, Mo.set(0, 0, 0)[g] = y === "-" ? -1 : 1, cs.lookAt(y0, Bu.cross(Mo), Mo), c.setFromMatrix4(cs);
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
      const n = m.blockBounds, s = i ? Ws() : ws(), c = s.geometry, { position: f, uv: d } = c.attributes;
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
    return super.copy(l), this.geometry = p, E0.forEach((m) => {
      this[m] = l[m];
    }), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
Ps.forEach((o) => {
  const l = "_private_" + o;
  Object.defineProperty(ks.prototype, o, {
    get() {
      return this[l];
    },
    set(p) {
      p !== this[l] && (this[l] = p, this._needsSync = !0);
    }
  });
});
new hs();
new Fu();
const Is = /* @__PURE__ */ qe.forwardRef(({
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
  const v = Rs(({
    invalidate: T
  }) => T), [y] = qe.useState(() => new ks()), [g, E] = qe.useMemo(() => {
    const T = [];
    let M = "";
    return qe.Children.forEach(n, (D) => {
      typeof D == "string" || typeof D == "number" ? M += D : T.push(D);
    }), [T, M];
  }, [n]);
  return ys(() => new Promise((T) => l0({
    font: m,
    characters: s
  }, T)), ["troika-text", m, s]), qe.useLayoutEffect(() => void y.sync(() => {
    v(), c && c(y);
  })), qe.useEffect(() => () => y.dispose(), [y]), /* @__PURE__ */ qe.createElement("primitive", No({
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
function b0() {
  const p = [];
  for (let i = 1; i <= 12; i++) {
    const n = (90 - i * 30) * (Math.PI / 180), s = Math.cos(n) * 0.133 * 0.85, c = Math.sin(n) * 0.133 * 0.85;
    p.push(
      /* @__PURE__ */ he(
        Is,
        {
          position: [s, c + 85e-4, 1e-3],
          fontSize: 0.013,
          color: "#333333",
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
    const n = (90 - i * 6) * (Math.PI / 180), s = i % 5 === 0, c = 0.133 * 0.985, f = s ? c - 0.133 * 0.06 : c - 0.133 * 0.03, d = (c + f) / 2, v = c - f, y = s ? 0.133 * 0.01 : 0.133 * 5e-3, g = Math.cos(n) * d, E = Math.sin(n) * d, T = n - Math.PI / 2;
    m.push(
      /* @__PURE__ */ ut("mesh", { position: [g, E, 0], rotation: [0, 0, T], children: [
        /* @__PURE__ */ he("boxGeometry", { args: [y, v, 1e-3] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "#333333" })
      ] }, `tick-${i}`)
    );
  }
  return /* @__PURE__ */ ut("group", { children: [
    /* @__PURE__ */ ut("mesh", { children: [
      /* @__PURE__ */ he("ringGeometry", { args: [0.133 * 0.985, 0.133, 64] }),
      /* @__PURE__ */ he("meshBasicMaterial", { color: "#333333" })
    ] }),
    p,
    m
  ] });
}
function T0() {
  return /* @__PURE__ */ ut("group", { children: [
    /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -6, -4], children: [
      /* @__PURE__ */ he("planeGeometry", { args: [200, 100] }),
      " ",
      /* @__PURE__ */ he("meshPhongMaterial", { color: "#489147" })
    ] }),
    /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -1.139, -5.76], children: [
      /* @__PURE__ */ he("circleGeometry", { args: [1, 64] }),
      /* @__PURE__ */ he("meshPhongMaterial", { color: "#DEB887" })
    ] }),
    /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, Math.PI], position: [0, -1.138, -5.6], children: [
      /* @__PURE__ */ he("shapeGeometry", { args: [
        (() => {
          const o = new Le.Shape();
          return o.moveTo(-0.2, 0.2), o.lineTo(0.2, 0.2), o.lineTo(0.2, -0.24), o.lineTo(0, -0.56), o.lineTo(-0.2, -0.24), o.lineTo(-0.2, 0.2), o;
        })()
      ] }),
      /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
    ] }),
    /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, -Math.PI / 4], position: [-3, -1.049, -2.3], children: [
      /* @__PURE__ */ he("planeGeometry", { args: [0.02, 7] }),
      /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
    ] }),
    /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, Math.PI / 4], position: [3, -1.049, -2.3], children: [
      /* @__PURE__ */ he("planeGeometry", { args: [0.02, 7] }),
      /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
    ] }),
    /* @__PURE__ */ ut("group", { position: [0.45, -1.137, -5.6], children: [
      /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0.4], children: [
        /* @__PURE__ */ he("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, -0.4], children: [
        /* @__PURE__ */ he("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [-0.15, 0, 0], children: [
        /* @__PURE__ */ he("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0.15, 0, 0], children: [
        /* @__PURE__ */ he("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
      ] })
    ] }),
    /* @__PURE__ */ ut("group", { position: [-0.45, -1.137, -5.6], children: [
      /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0.4], children: [
        /* @__PURE__ */ he("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, -0.4], children: [
        /* @__PURE__ */ he("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [-0.15, 0, 0], children: [
        /* @__PURE__ */ he("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ ut("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0.15, 0, 0], children: [
        /* @__PURE__ */ he("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
      ] })
    ] })
  ] });
}
function _0() {
  const o = Qi(), l = Qi(), p = Qi();
  return zs((m) => {
    const i = m.clock.elapsedTime;
    o.current && o.current.scale.setScalar(0.5 + Math.max(0, Math.sin(i * 3)) * 0.5), l.current && l.current.scale.setScalar(0.5 + Math.max(0, Math.sin(i * 3 - 0.5)) * 0.5), p.current && p.current.scale.setScalar(0.5 + Math.max(0, Math.sin(i * 3 - 1)) * 0.5);
  }), /* @__PURE__ */ ut("group", { children: [
    /* @__PURE__ */ he(
      Is,
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
      /* @__PURE__ */ he("sphereGeometry", { args: [2e-3, 8, 8] }),
      /* @__PURE__ */ he("meshBasicMaterial", { color: "#999999" })
    ] }),
    /* @__PURE__ */ ut("mesh", { ref: l, position: [0, -0.01, 0], children: [
      /* @__PURE__ */ he("sphereGeometry", { args: [2e-3, 8, 8] }),
      /* @__PURE__ */ he("meshBasicMaterial", { color: "#999999" })
    ] }),
    /* @__PURE__ */ ut("mesh", { ref: p, position: [8e-3, -0.01, 0], children: [
      /* @__PURE__ */ he("sphereGeometry", { args: [2e-3, 8, 8] }),
      /* @__PURE__ */ he("meshBasicMaterial", { color: "#999999" })
    ] })
  ] });
}
function U0() {
  return /* @__PURE__ */ ut("group", { children: [
    /* @__PURE__ */ ut("mesh", { rotation: [0, 0, Math.PI / 2], children: [
      /* @__PURE__ */ he("cylinderGeometry", { args: [3e-3, 3e-3, 0.3, 32] }),
      /* @__PURE__ */ he("meshStandardMaterial", { color: "red" })
    ] }),
    /* @__PURE__ */ ut("mesh", { position: [0.15, 0, 0], rotation: [0, 0, -Math.PI / 2], children: [
      /* @__PURE__ */ he("coneGeometry", { args: [9e-3, 0.03, 32] }),
      /* @__PURE__ */ he("meshStandardMaterial", { color: "red" })
    ] })
  ] });
}
function M0({ spinRate: o, playing: l, spinAxis: p, currentSeamLat: m, currentSeamLon: i, useSeamOrientation: n, resetSpin: s }) {
  const c = Qo(
    sv,
    "/models/baseball-v2.glb",
    (g) => {
      g.setMeshoptDecoder(dv);
    }
  ), f = sl.useRef(), d = sl.useRef(), v = sl.useRef(), { invalidate: y } = Rs();
  return Ta(() => {
    c.scene && c.scene.rotation.set(Math.PI / 2, 3 * Math.PI / 2, 0);
  }, [c]), Ta(() => {
    f.current && (f.current.quaternion.identity(), y());
  }, [s, y]), Ta(() => {
    if (d.current) {
      if (d.current.quaternion.identity(), n && m != null && i != null && !isNaN(m) && !isNaN(i)) {
        const g = Le.MathUtils.degToRad(m), E = Le.MathUtils.degToRad(i), T = Math.cos(g) * Math.sin(E), M = Math.sin(g), D = Math.cos(g) * Math.cos(E), A = new Le.Vector3(-T, M, D).normalize(), b = new Le.Vector3(1, 0, 0), x = new Le.Quaternion().setFromUnitVectors(
          b,
          A
        );
        d.current.quaternion.copy(x);
      }
      y();
    }
  }, [n, m, i, y]), Ta(() => {
    if (v.current && p) {
      const g = new Le.Vector3(1, 0, 0), E = new Le.Quaternion().setFromUnitVectors(
        g,
        p.clone().normalize()
      );
      v.current.quaternion.copy(E), y();
    }
  }, [p, y]), zs((g, E) => {
    if (l && f.current) {
      const M = o * 2 * Math.PI / 60 * E, D = new Le.Vector3(1, 0, 0), A = new Le.Quaternion();
      A.setFromAxisAngle(D, M), f.current.quaternion.multiplyQuaternions(A, f.current.quaternion);
    }
  }), /* @__PURE__ */ he("group", { children: /* @__PURE__ */ ut("group", { ref: v, children: [
    /* @__PURE__ */ he(U0, {}),
    /* @__PURE__ */ he("group", { ref: f, children: /* @__PURE__ */ he("group", { ref: d, children: /* @__PURE__ */ he("primitive", { object: c.scene, scale: 2.2 }) }) })
  ] }) });
}
function D0() {
  const [o, l] = Va(!0), [p, m] = Va(!0), [i, n] = Va([]), [s, c] = Va(null), [f, d] = Va(!1), [v, y] = Va(new Le.Vector3(1, 0, 0)), [g, E] = Va(0), [T, M] = Va(0), [D, A] = Va(!1);
  Ta(() => {
    fetch("/gilbert_augEighth.json").then((C) => C.json()).then((C) => {
      n(C || []), C && C.length > 0 && c(C[0].PitchUID);
    });
  }, []), Ta(() => {
    const C = (O) => {
      if (O.data?.type === "pitch_uid")
        console.log("Pitch UID changed:", O.data.value), c(O.data.value);
      else if (O.data?.type === "slider_update") {
        if ("spinVectorX" in O.data && "spinVectorY" in O.data && "spinVectorZ" in O.data) {
          const H = new Le.Vector3(
            O.data.spinVectorX,
            O.data.spinVectorY,
            O.data.spinVectorZ
          ).normalize();
          console.log("Received spin vector - Tilt:", O.data.spinTilt, "Gyro:", O.data.spinGyro, "Vector:", H), y(H);
        }
        "ballX" in O.data && M(O.data.ballX), "ballY" in O.data && E(O.data.ballY);
      } else O.data?.type === "play_toggle" ? d(!!O.data.value) : O.data?.type === "reset_spin_rotation" ? A((H) => !H) : O.data?.type === "clock_toggle" ? l(!!O.data.value) : O.data?.type === "field_toggle" && m(!!O.data.value);
    };
    return window.addEventListener("message", C), () => window.removeEventListener("message", C);
  }, []);
  const b = ds(() => !s || !i.length ? null : i.find((C) => C.PitchUID === s) || null, [s, i]);
  return Ta(() => {
    if (b) {
      const C = new Le.Vector3(
        b.spin_backspin,
        b.spin_sidespin,
        -b.spin_gyrospin
      ).normalize();
      y(C), E(b.seam_orientation_lat || 0), M(b.seam_orientation_lon || 0);
    }
  }, [b]), /* @__PURE__ */ he("div", { style: { width: "100vw", height: "100vh", position: "relative" }, children: /* @__PURE__ */ ut(M1, { camera: { position: [0, 0, 0.55], fov: 50 }, children: [
    /* @__PURE__ */ ut("mesh", { scale: [50, 50, 50], children: [
      /* @__PURE__ */ he("sphereGeometry", { args: [1, 32, 32] }),
      /* @__PURE__ */ he("meshBasicMaterial", { color: "#D1DBE6", side: Le.BackSide })
    ] }),
    /* @__PURE__ */ he("ambientLight", { intensity: 1 }),
    /* @__PURE__ */ he("directionalLight", { position: [0, 0, 0.3], intensity: 1 }),
    p ? /* @__PURE__ */ he(T0, {}) : null,
    o ? /* @__PURE__ */ he(b0, {}) : null,
    /* @__PURE__ */ he(Ph, { fallback: /* @__PURE__ */ he(_0, {}), children: /* @__PURE__ */ he(
      M0,
      {
        spinRate: 50,
        playing: f,
        spinAxis: v,
        currentSeamLat: g,
        currentSeamLon: T,
        useSeamOrientation: !0,
        resetSpin: D
      }
    ) })
  ] }) });
}
const A0 = document.getElementById("root"), C0 = kh(A0);
C0.render(/* @__PURE__ */ he(D0, {}));
