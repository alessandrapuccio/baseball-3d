import { jsx as he, jsxs as it } from "https://esm.sh/react/jsx-runtime";
import * as qe from "https://esm.sh/react";
import sl, { useState as Na, useRef as Qu, useEffect as _a, useMemo as ds, Suspense as Ph } from "https://esm.sh/react";
import { createRoot as kh } from "https://esm.sh/react-dom/client";
import * as Le from "https://esm.sh/three";
import { MeshDistanceMaterial as Ih, MeshDepthMaterial as $h, RGBADepthPacking as ev, UniformsUtils as tv, ShaderChunk as av, Mesh as Vo, MeshBasicMaterial as nv, Color as Fi, Vector3 as Lo, Matrix4 as lv, Vector2 as Li, InstancedBufferGeometry as uv, Sphere as iv, Box3 as hs, InstancedBufferAttribute as rv, Texture as ov, LinearFilter as Cc, Matrix3 as fv, Vector4 as Oc, DoubleSide as cv, PlaneGeometry as Yo } from "https://esm.sh/three";
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
var Gi = vv(), oo = { exports: {} }, fo = {}, co = { exports: {} }, so = {};
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
  var p = typeof Object.is == "function" ? Object.is : l, m = o.useState, u = o.useEffect, n = o.useLayoutEffect, s = o.useDebugValue;
  function c(y, g) {
    var E = g(), _ = m({ inst: { value: E, getSnapshot: g } }), M = _[0].inst, D = _[1];
    return n(
      function() {
        M.value = E, M.getSnapshot = g, f(M) && D({ inst: M });
      },
      [y, E, g]
    ), u(
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
  var m = typeof Object.is == "function" ? Object.is : p, u = l.useSyncExternalStore, n = o.useRef, s = o.useEffect, c = o.useMemo, f = o.useDebugValue;
  return fo.useSyncExternalStoreWithSelector = function(d, v, y, g, E) {
    var _ = n(null);
    if (_.current === null) {
      var M = { hasValue: !1, value: null };
      _.current = M;
    } else M = _.current;
    _ = c(
      function() {
        function A(B) {
          if (!b) {
            if (b = !0, z = B, B = g(B), E !== void 0 && M.hasValue) {
              var O = M.value;
              if (E(O, B))
                return C = O;
            }
            return C = B;
          }
          if (O = C, m(z, B)) return O;
          var V = g(B);
          return E !== void 0 && E(O, V) ? (z = B, O) : (z = B, C = V);
        }
        var b = !1, z, C, N = y === void 0 ? null : y;
        return [
          function() {
            return A(v());
          },
          N === null ? void 0 : function() {
            return A(N());
          }
        ];
      },
      [v, y, g, E]
    );
    var D = u(d, _[0], _[1]);
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
  }, u = () => l, c = { setState: m, getState: u, getInitialState: () => f, subscribe: (d) => (p.add(d), () => p.delete(d)) }, f = l = o(m, u, c);
  return c;
}, bv = ((o) => o ? jc(o) : jc), { useSyncExternalStoreWithSelector: _v } = Ev, Tv = (o) => o;
function Uv(o, l = Tv, p) {
  const m = _v(
    o.subscribe,
    o.getState,
    o.getInitialState,
    l,
    p
  );
  return sl.useDebugValue(m), m;
}
const Hc = (o, l) => {
  const p = bv(o), m = (u, n = l) => Uv(p, u, n);
  return Object.assign(m, p), m;
}, Mv = ((o, l) => o ? Hc(o, l) : Hc), Dv = (o) => typeof o == "object" && typeof o.then == "function", cl = [];
function ps(o, l, p = (m, u) => m === u) {
  if (o === l) return !0;
  if (!o || !l) return !1;
  const m = o.length;
  if (l.length !== m) return !1;
  for (let u = 0; u < m; u++) if (!p(o[u], l[u])) return !1;
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
  const u = {
    keys: l,
    equal: m.equal,
    remove: () => {
      const n = cl.indexOf(u);
      n !== -1 && cl.splice(n, 1);
    },
    promise: (
      // Execute the promise
      (Dv(o) ? o : o(...l)).then((n) => {
        u.response = n, m.lifespan && m.lifespan > 0 && (u.timeout = setTimeout(u.remove, m.lifespan));
      }).catch((n) => u.error = n)
    )
  };
  if (cl.push(u), !p) throw u.promise;
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
    function l(H, I) {
      var te = H.length;
      H.push(I);
      e: for (; 0 < te; ) {
        var J = te - 1 >>> 1, w = H[J];
        if (0 < u(w, I))
          H[J] = I, H[te] = w, te = J;
        else break e;
      }
    }
    function p(H) {
      return H.length === 0 ? null : H[0];
    }
    function m(H) {
      if (H.length === 0) return null;
      var I = H[0], te = H.pop();
      if (te !== I) {
        H[0] = te;
        e: for (var J = 0, w = H.length, T = w >>> 1; J < T; ) {
          var R = 2 * (J + 1) - 1, K = H[R], q = R + 1, F = H[q];
          if (0 > u(K, te))
            q < w && 0 > u(F, K) ? (H[J] = F, H[q] = te, J = q) : (H[J] = K, H[R] = te, J = R);
          else if (q < w && 0 > u(F, te))
            H[J] = F, H[q] = te, J = q;
          else break e;
        }
      }
      return I;
    }
    function u(H, I) {
      var te = H.sortIndex - I.sortIndex;
      return te !== 0 ? te : H.id - I.id;
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
    var f = [], d = [], v = 1, y = null, g = 3, E = !1, _ = !1, M = !1, D = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    function z(H) {
      for (var I = p(d); I !== null; ) {
        if (I.callback === null) m(d);
        else if (I.startTime <= H)
          m(d), I.sortIndex = I.expirationTime, l(f, I);
        else break;
        I = p(d);
      }
    }
    function C(H) {
      if (M = !1, z(H), !_)
        if (p(f) !== null)
          _ = !0, Y();
        else {
          var I = p(d);
          I !== null && ue(C, I.startTime - H);
        }
    }
    var N = !1, B = -1, O = 5, V = -1;
    function W() {
      return !(o.unstable_now() - V < O);
    }
    function Q() {
      if (N) {
        var H = o.unstable_now();
        V = H;
        var I = !0;
        try {
          e: {
            _ = !1, M && (M = !1, A(B), B = -1), E = !0;
            var te = g;
            try {
              t: {
                for (z(H), y = p(f); y !== null && !(y.expirationTime > H && W()); ) {
                  var J = y.callback;
                  if (typeof J == "function") {
                    y.callback = null, g = y.priorityLevel;
                    var w = J(
                      y.expirationTime <= H
                    );
                    if (H = o.unstable_now(), typeof w == "function") {
                      y.callback = w, z(H), I = !0;
                      break t;
                    }
                    y === p(f) && m(f), z(H);
                  } else m(f);
                  y = p(f);
                }
                if (y !== null) I = !0;
                else {
                  var T = p(d);
                  T !== null && ue(
                    C,
                    T.startTime - H
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
          I ? ne() : N = !1;
        }
      }
    }
    var ne;
    if (typeof b == "function")
      ne = function() {
        b(Q);
      };
    else if (typeof MessageChannel < "u") {
      var G = new MessageChannel(), L = G.port2;
      G.port1.onmessage = Q, ne = function() {
        L.postMessage(null);
      };
    } else
      ne = function() {
        D(Q, 0);
      };
    function Y() {
      N || (N = !0, ne());
    }
    function ue(H, I) {
      B = D(function() {
        H(o.unstable_now());
      }, I);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, o.unstable_continueExecution = function() {
      _ || E || (_ = !0, Y());
    }, o.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : O = 0 < H ? Math.floor(1e3 / H) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, o.unstable_getFirstCallbackNode = function() {
      return p(f);
    }, o.unstable_next = function(H) {
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
        return H();
      } finally {
        g = te;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(H, I) {
      switch (H) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          H = 3;
      }
      var te = g;
      g = H;
      try {
        return I();
      } finally {
        g = te;
      }
    }, o.unstable_scheduleCallback = function(H, I, te) {
      var J = o.unstable_now();
      switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? J + te : J) : te = J, H) {
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
      return w = te + w, H = {
        id: v++,
        callback: I,
        priorityLevel: H,
        startTime: te,
        expirationTime: w,
        sortIndex: -1
      }, te > J ? (H.sortIndex = te, l(d, H), p(f) === null && H === p(d) && (M ? (A(B), B = -1) : M = !0, ue(C, te - J))) : (H.sortIndex = w, l(f, H), _ || E || (_ = !0, Y())), H;
    }, o.unstable_shouldYield = W, o.unstable_wrapCallback = function(H) {
      var I = g;
      return function() {
        var te = g;
        g = I;
        try {
          return H.apply(this, arguments);
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
      function p(e, t, a, i) {
        return new hd(e, t, a, i);
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
          var h = i.DetermineComponentFrameRoot(), S = h[0], U = h[1];
          if (S && U) {
            var j = S.split(`
`), P = U.split(`
`);
            for (r = i = 0; i < j.length && !j[i].includes("DetermineComponentFrameRoot"); )
              i++;
            for (; r < P.length && !P[r].includes(
              "DetermineComponentFrameRoot"
            ); )
              r++;
            if (i === j.length || r === P.length)
              for (i = j.length - 1, r = P.length - 1; 1 <= i && 0 <= r && j[i] !== P[r]; )
                r--;
            for (; 1 <= i && 0 <= r; i--, r--)
              if (j[i] !== P[r]) {
                if (i !== 1 || r !== 1)
                  do
                    if (i--, r--, 0 > r || j[i] !== P[r]) {
                      var re = `
` + j[i].replace(" at new ", " at ");
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
          var h = r.alternate;
          if (h === null) {
            if (i = r.return, i !== null) {
              a = i;
              continue;
            }
            break;
          }
          if (r.child === h.child) {
            for (h = r.child; h; ) {
              if (h === a) return g(r), e;
              if (h === i) return g(r), t;
              h = h.sibling;
            }
            throw Error(u(188));
          }
          if (a.return !== i.return) a = r, i = h;
          else {
            for (var S = !1, U = r.child; U; ) {
              if (U === a) {
                S = !0, a = r, i = h;
                break;
              }
              if (U === i) {
                S = !0, i = r, a = h;
                break;
              }
              U = U.sibling;
            }
            if (!S) {
              for (U = h.child; U; ) {
                if (U === a) {
                  S = !0, a = h, i = r;
                  break;
                }
                if (U === i) {
                  S = !0, i = h, a = r;
                  break;
                }
                U = U.sibling;
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
      function z(e) {
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
      function N(e, t) {
        var a = e.pendingLanes;
        if (a === 0) return 0;
        var i = 0, r = e.suspendedLanes, h = e.pingedLanes, S = e.warmLanes;
        e = e.finishedLanes !== 0;
        var U = a & 134217727;
        return U !== 0 ? (a = U & ~r, a !== 0 ? i = C(a) : (h &= U, h !== 0 ? i = C(h) : e || (S = U & ~S, S !== 0 && (i = C(S))))) : (U = a & ~r, U !== 0 ? i = C(U) : h !== 0 ? i = C(h) : e || (S = a & ~S, S !== 0 && (i = C(S)))), i === 0 ? 0 : t !== 0 && t !== i && (t & r) === 0 && (r = i & -i, S = t & -t, r >= S || r === 32 && (S & 4194176) !== 0) ? t : i;
      }
      function B(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
      }
      function O(e, t) {
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
        var e = si;
        return si <<= 1, (si & 4194176) === 0 && (si = 128), e;
      }
      function W() {
        var e = di;
        return di <<= 1, (di & 62914560) === 0 && (di = 4194304), e;
      }
      function Q(e) {
        for (var t = [], a = 0; 31 > a; a++) t.push(e);
        return t;
      }
      function ne(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
      }
      function G(e, t, a, i, r, h) {
        var S = e.pendingLanes;
        e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
        var U = e.entanglements, j = e.expirationTimes, P = e.hiddenUpdates;
        for (a = S & ~a; 0 < a; ) {
          var re = 31 - ia(a), ce = 1 << re;
          U[re] = 0, j[re] = -1;
          var pe = P[re];
          if (pe !== null)
            for (P[re] = null, re = 0; re < pe.length; re++) {
              var Ye = pe[re];
              Ye !== null && (Ye.lane &= -536870913);
            }
          a &= ~ce;
        }
        i !== 0 && L(e, i, 0), h !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= h & ~(S & ~t));
      }
      function L(e, t, a) {
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
      function ue(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function H(e) {
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
      function I(e) {
        if (typeof Yh == "function" && qh(e), ra && typeof ra.setStrictMode == "function")
          try {
            ra.setStrictMode(Ou, e);
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
        Hl[Vl++] = pi, Hl[Vl++] = vi, vi = e, pi = t;
      }
      function T(e, t, a) {
        ma[ya++] = $a, ma[ya++] = en, ma[ya++] = $n, $n = e;
        var i = $a;
        e = en;
        var r = 32 - ia(i) - 1;
        i &= ~(1 << r), a += 1;
        var h = 32 - ia(t) + r;
        if (30 < h) {
          var S = r - r % 5;
          h = (i & (1 << S) - 1).toString(32), i >>= S, r -= S, $a = 1 << 32 - ia(t) + r | a << r | i, en = h + e;
        } else
          $a = 1 << h | a << r | i, en = e;
      }
      function R(e) {
        e.return !== null && (w(e, 1), T(e, 1, 0));
      }
      function K(e) {
        for (; e === vi; )
          vi = Hl[--Vl], Hl[Vl] = null, pi = Hl[--Vl], Hl[Vl] = null;
        for (; e === $n; )
          $n = ma[--ya], ma[ya] = null, en = ma[--ya], ma[ya] = null, $a = ma[--ya], ma[ya] = null;
      }
      function q(e, t) {
        b(En, t), b(Ru, e), b(Vt, null), e = _d(t), A(Vt), b(Vt, e);
      }
      function F() {
        A(Vt), A(Ru), A(En);
      }
      function ae(e) {
        e.memoizedState !== null && b(mi, e);
        var t = Vt.current, a = Td(t, e.type);
        t !== a && (b(Ru, e), b(Vt, a));
      }
      function k(e) {
        Ru.current === e && (A(Vt), A(Ru)), mi.current === e && (A(mi), Ia ? In._currentValue = Bl : In._currentValue2 = Bl);
      }
      function ee(e) {
        var t = Error(u(418, ""));
        throw Ne(J(t, e)), Qr;
      }
      function se(e, t) {
        if (!va) throw Error(u(175));
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
              Ga = !0;
              return;
            case 5:
            case 13:
              Ga = !1;
              return;
            default:
              wt = wt.return;
          }
      }
      function oe(e) {
        if (!va || e !== wt) return !1;
        if (!Pe) return Se(e), Pe = !0, !1;
        var t = !1;
        if (Ft ? e.tag !== 3 && e.tag !== 27 && (e.tag !== 5 || cc(e.type) && !ci(e.type, e.memoizedProps)) && (t = !0) : e.tag !== 3 && (e.tag !== 5 || cc(e.type) && !ci(e.type, e.memoizedProps)) && (t = !0), t && Kt && ee(e), Se(e), e.tag === 13) {
          if (!va) throw Error(u(316));
          if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
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
          var i = ga[t];
          ga[t++] = null;
          var r = ga[t];
          ga[t++] = null;
          var h = ga[t];
          if (ga[t++] = null, i !== null && r !== null) {
            var S = i.pending;
            S === null ? r.next = r : (r.next = S.next, S.next = r), i.pending = r;
          }
          h !== 0 && fe(a, r, h);
        }
      }
      function me(e, t, a, i) {
        ga[Ll++] = e, ga[Ll++] = t, ga[Ll++] = a, ga[Ll++] = i, Fr |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
      }
      function Ee(e, t, a, i) {
        return me(e, t, a, i), ge(e);
      }
      function be(e, t) {
        return me(e, null, null, t), ge(e);
      }
      function fe(e, t, a) {
        e.lanes |= a;
        var i = e.alternate;
        i !== null && (i.lanes |= a);
        for (var r = !1, h = e.return; h !== null; )
          h.childLanes |= a, i = h.alternate, i !== null && (i.childLanes |= a), h.tag === 22 && (e = h.stateNode, e === null || e._visibility & 1 || (r = !0)), e = h, h = h.return;
        r && t !== null && e.tag === 3 && (h = e.stateNode, r = 31 - ia(a), h = h.hiddenUpdates, e = h[r], e === null ? h[r] = [t] : e.push(t), t.lane = a | 536870912);
      }
      function ge(e) {
        if (50 < Lu)
          throw Lu = 0, io = null, Error(u(185));
        for (var t = e.return; t !== null; )
          e = t, t = e.return;
        return e.tag === 3 ? e.stateNode : null;
      }
      function ve(e) {
        e !== Yl && e.next === null && (Yl === null ? yi = Yl = e : Yl = Yl.next = e), gi = !0, Kr || (Kr = !0, We(He));
      }
      function $(e, t) {
        if (!Zr && gi) {
          Zr = !0;
          do
            for (var a = !1, i = yi; i !== null; ) {
              if (e !== 0) {
                var r = i.pendingLanes;
                if (r === 0) var h = 0;
                else {
                  var S = i.suspendedLanes, U = i.pingedLanes;
                  h = (1 << 31 - ia(42 | e) + 1) - 1, h &= r & ~(S & ~U), h = h & 201326677 ? h & 201326677 | 1 : h ? h | 2 : 0;
                }
                h !== 0 && (a = !0, de(i, h));
              } else
                h = Je, h = N(
                  i,
                  i === st ? h : 0
                ), (h & 3) === 0 || B(i, h) || (a = !0, de(i, h));
              i = i.next;
            }
          while (a);
          Zr = !1;
        }
      }
      function He() {
        gi = Kr = !1;
        var e = 0;
        ql !== 0 && (zd() && (e = ql), ql = 0);
        for (var t = Ra(), a = null, i = yi; i !== null; ) {
          var r = i.next, h = ye(i, t);
          h === 0 ? (i.next = null, a === null ? yi = r : a.next = r, r === null && (Yl = a)) : (a = i, (e !== 0 || (h & 3) !== 0) && (gi = !0)), i = r;
        }
        $(e);
      }
      function ye(e, t) {
        for (var a = e.suspendedLanes, i = e.pingedLanes, r = e.expirationTimes, h = e.pendingLanes & -62914561; 0 < h; ) {
          var S = 31 - ia(h), U = 1 << S, j = r[S];
          j === -1 ? ((U & a) === 0 || (U & i) !== 0) && (r[S] = O(U, t)) : j <= t && (e.expiredLanes |= U), h &= ~U;
        }
        if (t = st, a = Je, a = N(
          e,
          e === t ? a : 0
        ), i = e.callbackNode, a === 0 || e === t && dt === 2 || e.cancelPendingCommit !== null)
          return i !== null && i !== null && qr(i), e.callbackNode = null, e.callbackPriority = 0;
        if ((a & 3) === 0 || B(e, a)) {
          if (t = a & -a, t === e.callbackPriority) return t;
          switch (i !== null && qr(i), ue(a)) {
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
          return i = Ue.bind(null, e), a = hi(a, i), e.callbackPriority = t, e.callbackNode = a, t;
        }
        return i !== null && i !== null && qr(i), e.callbackPriority = 2, e.callbackNode = null, 2;
      }
      function Ue(e, t) {
        var a = e.callbackNode;
        if (Wn() && e.callbackNode !== a)
          return null;
        var i = Je;
        return i = N(
          e,
          e === st ? i : 0
        ), i === 0 ? null : (Uf(e, i, t), ye(e, Ra()), e.callbackNode != null && e.callbackNode === a ? Ue.bind(null, e) : null);
      }
      function de(e, t) {
        if (Wn()) return null;
        Uf(e, t, !0);
      }
      function We(e) {
        Hd ? Vd(function() {
          (ot & 6) !== 0 ? hi(Ec, e) : e();
        }) : hi(Ec, e);
      }
      function _e() {
        return ql === 0 && (ql = V()), ql;
      }
      function De(e, t) {
        if (zu === null) {
          var a = zu = [];
          Jr = 0, Xl = _e(), Ql = {
            status: "pending",
            value: void 0,
            then: function(i) {
              a.push(i);
            }
          };
        }
        return Jr++, t.then(Oe, Oe), t;
      }
      function Oe() {
        if (--Jr === 0 && zu !== null) {
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
        var i = e.updateQueue;
        if (i === null) return null;
        if (i = i.shared, (ot & 2) !== 0) {
          var r = i.pending;
          return r === null ? t.next = t : (t.next = r.next, r.next = t), i.pending = t, t = ge(e), fe(e, null, a), t;
        }
        return me(e, i, t, a), ge(e);
      }
      function Me(e, t, a) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194176) !== 0)) {
          var i = t.lanes;
          i &= e.pendingLanes, a |= i, t.lanes = a, Y(e, a);
        }
      }
      function ct(e, t) {
        var a = e.updateQueue, i = e.alternate;
        if (i !== null && (i = i.updateQueue, a === i)) {
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
            baseState: i.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: h,
            shared: i.shared,
            callbacks: i.callbacks
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
      function Tt(e, t, a, i) {
        wr = !1;
        var r = e.updateQueue;
        bn = !1;
        var h = r.firstBaseUpdate, S = r.lastBaseUpdate, U = r.shared.pending;
        if (U !== null) {
          r.shared.pending = null;
          var j = U, P = j.next;
          j.next = null, S === null ? h = P : S.next = P, S = j;
          var re = e.alternate;
          re !== null && (re = re.updateQueue, U = re.lastBaseUpdate, U !== S && (U === null ? re.firstBaseUpdate = P : U.next = P, re.lastBaseUpdate = j));
        }
        if (h !== null) {
          var ce = r.baseState;
          S = 0, re = P = j = null, U = h;
          do {
            var pe = U.lane & -536870913, Ye = pe !== U.lane;
            if (Ye ? (Je & pe) === pe : (i & pe) === pe) {
              pe !== 0 && pe === Xl && (wr = !0), re !== null && (re = re.next = {
                lane: 0,
                tag: U.tag,
                payload: U.payload,
                callback: null,
                next: null
              });
              e: {
                var ba = e, Yu = U;
                pe = t;
                var ol = a;
                switch (Yu.tag) {
                  case 1:
                    if (ba = Yu.payload, typeof ba == "function") {
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
                    if (ba = Yu.payload, pe = typeof ba == "function" ? ba.call(ol, ce, pe) : ba, pe == null) break e;
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
              }, re === null ? (P = re = Ye, j = ce) : re = re.next = Ye, S |= pe;
            if (U = U.next, U === null) {
              if (U = r.shared.pending, U === null)
                break;
              Ye = U, U = Ye.next, Ye.next = null, r.lastBaseUpdate = Ye, r.shared.pending = null;
            }
          } while (!0);
          re === null && (j = ce), r.baseState = j, r.firstBaseUpdate = P, r.lastBaseUpdate = re, h === null && (r.shared.lanes = 0), Un |= S, e.lanes = S, e.memoizedState = ce;
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
          if (!Xh.call(t, r) || !oa(e[r], t[r]))
            return !1;
        }
        return !0;
      }
      function Ta(e) {
        return e = e.status, e === "fulfilled" || e === "rejected";
      }
      function we() {
      }
      function Xe(e, t, a) {
        switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(we, we), t = a), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, e === xu ? Error(u(483)) : e;
          default:
            if (typeof t.status == "string") t.then(we, we);
            else {
              if (e = st, e !== null && 100 < e.shellSuspendCounter)
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
                throw e = t.reason, e === xu ? Error(u(483)) : e;
            }
            throw Fl = t, xu;
        }
      }
      function mt() {
        if (Fl === null) throw Error(u(459));
        var e = Fl;
        return Fl = null, e;
      }
      function at(e) {
        var t = Nu;
        return Nu += 1, Kl === null && (Kl = []), Xe(Kl, e, t);
      }
      function ze(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null;
      }
      function nt(e, t) {
        throw t.$$typeof === md ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(
          u(
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
        function t(X, x) {
          if (e) {
            var Z = X.deletions;
            Z === null ? (X.deletions = [x], X.flags |= 16) : Z.push(x);
          }
        }
        function a(X, x) {
          if (!e) return null;
          for (; x !== null; )
            t(X, x), x = x.sibling;
          return null;
        }
        function i(X) {
          for (var x = /* @__PURE__ */ new Map(); X !== null; )
            X.key !== null ? x.set(X.key, X) : x.set(X.index, X), X = X.sibling;
          return x;
        }
        function r(X, x) {
          return X = mn(X, x), X.index = 0, X.sibling = null, X;
        }
        function h(X, x, Z) {
          return X.index = Z, e ? (Z = X.alternate, Z !== null ? (Z = Z.index, Z < x ? (X.flags |= 33554434, x) : Z) : (X.flags |= 33554434, x)) : (X.flags |= 1048576, x);
        }
        function S(X) {
          return e && X.alternate === null && (X.flags |= 33554434), X;
        }
        function U(X, x, Z, ie) {
          return x === null || x.tag !== 6 ? (x = Ur(Z, X.mode, ie), x.return = X, x) : (x = r(x, Z), x.return = X, x);
        }
        function j(X, x, Z, ie) {
          var Ae = Z.type;
          return Ae === Nl ? re(
            X,
            x,
            Z.props.children,
            ie,
            Z.key
          ) : x !== null && (x.elementType === Ae || typeof Ae == "object" && Ae !== null && Ae.$$typeof === gn && xt(Ae) === x.type) ? (x = r(x, Z.props), ze(x, Z), x.return = X, x) : (x = ri(
            Z.type,
            Z.key,
            Z.props,
            null,
            X.mode,
            ie
          ), ze(x, Z), x.return = X, x);
        }
        function P(X, x, Z, ie) {
          return x === null || x.tag !== 4 || x.stateNode.containerInfo !== Z.containerInfo || x.stateNode.implementation !== Z.implementation ? (x = Mr(Z, X.mode, ie), x.return = X, x) : (x = r(x, Z.children || []), x.return = X, x);
        }
        function re(X, x, Z, ie, Ae) {
          return x === null || x.tag !== 7 ? (x = Pn(
            Z,
            X.mode,
            ie,
            Ae
          ), x.return = X, x) : (x = r(x, Z), x.return = X, x);
        }
        function ce(X, x, Z) {
          if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
            return x = Ur(
              "" + x,
              X.mode,
              Z
            ), x.return = X, x;
          if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
              case oi:
                return Z = ri(
                  x.type,
                  x.key,
                  x.props,
                  null,
                  X.mode,
                  Z
                ), ze(Z, x), Z.return = X, Z;
              case xl:
                return x = Mr(
                  x,
                  X.mode,
                  Z
                ), x.return = X, x;
              case gn:
                var ie = x._init;
                return x = ie(x._payload), ce(X, x, Z);
            }
            if (fi(x) || n(x))
              return x = Pn(
                x,
                X.mode,
                Z,
                null
              ), x.return = X, x;
            if (typeof x.then == "function")
              return ce(X, at(x), Z);
            if (x.$$typeof === yn)
              return ce(
                X,
                ti(X, x),
                Z
              );
            nt(X, x);
          }
          return null;
        }
        function pe(X, x, Z, ie) {
          var Ae = x !== null ? x.key : null;
          if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
            return Ae !== null ? null : U(X, x, "" + Z, ie);
          if (typeof Z == "object" && Z !== null) {
            switch (Z.$$typeof) {
              case oi:
                return Z.key === Ae ? j(X, x, Z, ie) : null;
              case xl:
                return Z.key === Ae ? P(X, x, Z, ie) : null;
              case gn:
                return Ae = Z._init, Z = Ae(Z._payload), pe(X, x, Z, ie);
            }
            if (fi(Z) || n(Z))
              return Ae !== null ? null : re(X, x, Z, ie, null);
            if (typeof Z.then == "function")
              return pe(
                X,
                x,
                at(Z),
                ie
              );
            if (Z.$$typeof === yn)
              return pe(
                X,
                x,
                ti(X, Z),
                ie
              );
            nt(X, Z);
          }
          return null;
        }
        function Ye(X, x, Z, ie, Ae) {
          if (typeof ie == "string" && ie !== "" || typeof ie == "number" || typeof ie == "bigint")
            return X = X.get(Z) || null, U(x, X, "" + ie, Ae);
          if (typeof ie == "object" && ie !== null) {
            switch (ie.$$typeof) {
              case oi:
                return X = X.get(
                  ie.key === null ? Z : ie.key
                ) || null, j(x, X, ie, Ae);
              case xl:
                return X = X.get(
                  ie.key === null ? Z : ie.key
                ) || null, P(x, X, ie, Ae);
              case gn:
                var ht = ie._init;
                return ie = ht(ie._payload), Ye(
                  X,
                  x,
                  Z,
                  ie,
                  Ae
                );
            }
            if (fi(ie) || n(ie))
              return X = X.get(Z) || null, re(x, X, ie, Ae, null);
            if (typeof ie.then == "function")
              return Ye(
                X,
                x,
                Z,
                at(ie),
                Ae
              );
            if (ie.$$typeof === yn)
              return Ye(
                X,
                x,
                Z,
                ti(x, ie),
                Ae
              );
            nt(x, ie);
          }
          return null;
        }
        function ba(X, x, Z, ie) {
          for (var Ae = null, ht = null, xe = x, ke = x = 0, jt = null; xe !== null && ke < Z.length; ke++) {
            xe.index > ke ? (jt = xe, xe = null) : jt = xe.sibling;
            var Ie = pe(
              X,
              xe,
              Z[ke],
              ie
            );
            if (Ie === null) {
              xe === null && (xe = jt);
              break;
            }
            e && xe && Ie.alternate === null && t(X, xe), x = h(Ie, x, ke), ht === null ? Ae = Ie : ht.sibling = Ie, ht = Ie, xe = jt;
          }
          if (ke === Z.length)
            return a(X, xe), Pe && w(X, ke), Ae;
          if (xe === null) {
            for (; ke < Z.length; ke++)
              xe = ce(X, Z[ke], ie), xe !== null && (x = h(
                xe,
                x,
                ke
              ), ht === null ? Ae = xe : ht.sibling = xe, ht = xe);
            return Pe && w(X, ke), Ae;
          }
          for (xe = i(xe); ke < Z.length; ke++)
            jt = Ye(
              xe,
              X,
              ke,
              Z[ke],
              ie
            ), jt !== null && (e && jt.alternate !== null && xe.delete(
              jt.key === null ? ke : jt.key
            ), x = h(
              jt,
              x,
              ke
            ), ht === null ? Ae = jt : ht.sibling = jt, ht = jt);
          return e && xe.forEach(function(Dn) {
            return t(X, Dn);
          }), Pe && w(X, ke), Ae;
        }
        function Yu(X, x, Z, ie) {
          if (Z == null) throw Error(u(151));
          for (var Ae = null, ht = null, xe = x, ke = x = 0, jt = null, Ie = Z.next(); xe !== null && !Ie.done; ke++, Ie = Z.next()) {
            xe.index > ke ? (jt = xe, xe = null) : jt = xe.sibling;
            var Dn = pe(X, xe, Ie.value, ie);
            if (Dn === null) {
              xe === null && (xe = jt);
              break;
            }
            e && xe && Dn.alternate === null && t(X, xe), x = h(Dn, x, ke), ht === null ? Ae = Dn : ht.sibling = Dn, ht = Dn, xe = jt;
          }
          if (Ie.done)
            return a(X, xe), Pe && w(X, ke), Ae;
          if (xe === null) {
            for (; !Ie.done; ke++, Ie = Z.next())
              Ie = ce(X, Ie.value, ie), Ie !== null && (x = h(
                Ie,
                x,
                ke
              ), ht === null ? Ae = Ie : ht.sibling = Ie, ht = Ie);
            return Pe && w(X, ke), Ae;
          }
          for (xe = i(xe); !Ie.done; ke++, Ie = Z.next())
            Ie = Ye(
              xe,
              X,
              ke,
              Ie.value,
              ie
            ), Ie !== null && (e && Ie.alternate !== null && xe.delete(Ie.key === null ? ke : Ie.key), x = h(Ie, x, ke), ht === null ? Ae = Ie : ht.sibling = Ie, ht = Ie);
          return e && xe.forEach(function(Wh) {
            return t(X, Wh);
          }), Pe && w(X, ke), Ae;
        }
        function ol(X, x, Z, ie) {
          if (typeof Z == "object" && Z !== null && Z.type === Nl && Z.key === null && (Z = Z.props.children), typeof Z == "object" && Z !== null) {
            switch (Z.$$typeof) {
              case oi:
                e: {
                  for (var Ae = Z.key; x !== null; ) {
                    if (x.key === Ae) {
                      if (Ae = Z.type, Ae === Nl) {
                        if (x.tag === 7) {
                          a(
                            X,
                            x.sibling
                          ), ie = r(
                            x,
                            Z.props.children
                          ), ie.return = X, X = ie;
                          break e;
                        }
                      } else if (x.elementType === Ae || typeof Ae == "object" && Ae !== null && Ae.$$typeof === gn && xt(Ae) === x.type) {
                        a(
                          X,
                          x.sibling
                        ), ie = r(x, Z.props), ze(ie, Z), ie.return = X, X = ie;
                        break e;
                      }
                      a(X, x);
                      break;
                    } else t(X, x);
                    x = x.sibling;
                  }
                  Z.type === Nl ? (ie = Pn(
                    Z.props.children,
                    X.mode,
                    ie,
                    Z.key
                  ), ie.return = X, X = ie) : (ie = ri(
                    Z.type,
                    Z.key,
                    Z.props,
                    null,
                    X.mode,
                    ie
                  ), ze(ie, Z), ie.return = X, X = ie);
                }
                return S(X);
              case xl:
                e: {
                  for (Ae = Z.key; x !== null; ) {
                    if (x.key === Ae)
                      if (x.tag === 4 && x.stateNode.containerInfo === Z.containerInfo && x.stateNode.implementation === Z.implementation) {
                        a(
                          X,
                          x.sibling
                        ), ie = r(
                          x,
                          Z.children || []
                        ), ie.return = X, X = ie;
                        break e;
                      } else {
                        a(X, x);
                        break;
                      }
                    else t(X, x);
                    x = x.sibling;
                  }
                  ie = Mr(Z, X.mode, ie), ie.return = X, X = ie;
                }
                return S(X);
              case gn:
                return Ae = Z._init, Z = Ae(Z._payload), ol(
                  X,
                  x,
                  Z,
                  ie
                );
            }
            if (fi(Z))
              return ba(
                X,
                x,
                Z,
                ie
              );
            if (n(Z)) {
              if (Ae = n(Z), typeof Ae != "function")
                throw Error(u(150));
              return Z = Ae.call(Z), Yu(
                X,
                x,
                Z,
                ie
              );
            }
            if (typeof Z.then == "function")
              return ol(
                X,
                x,
                at(Z),
                ie
              );
            if (Z.$$typeof === yn)
              return ol(
                X,
                x,
                ti(X, Z),
                ie
              );
            nt(X, Z);
          }
          return typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint" ? (Z = "" + Z, x !== null && x.tag === 6 ? (a(X, x.sibling), ie = r(x, Z), ie.return = X, X = ie) : (a(X, x), ie = Ur(Z, X.mode, ie), ie.return = X, X = ie), S(X)) : a(X, x);
        }
        return function(X, x, Z, ie) {
          try {
            Nu = 0;
            var Ae = ol(
              X,
              x,
              Z,
              ie
            );
            return Kl = null, Ae;
          } catch (xe) {
            if (xe === xu) throw xe;
            var ht = p(29, xe, null, X.mode);
            return ht.lanes = ie, ht.return = X, ht;
          } finally {
          }
        };
      }
      function gt(e, t) {
        e = ln, b(Ei, e), b(Zl, t), ln = e | t.baseLanes;
      }
      function Zt() {
        b(Ei, ln), b(Zl, Zl.current);
      }
      function sa() {
        ln = Ei.current, A(Zl), A(Ei);
      }
      function Nt(e) {
        var t = e.alternate;
        b(zt, zt.current & 1), b(Sa, e), ja === null && (t === null || Zl.current !== null || t.memoizedState !== null) && (ja = e);
      }
      function Ua(e) {
        if (e.tag === 22) {
          if (b(zt, zt.current), b(Sa, e), ja === null) {
            var t = e.alternate;
            t !== null && t.memoizedState !== null && (ja = e);
          }
        } else Yt();
      }
      function Yt() {
        b(zt, zt.current), b(Sa, Sa.current);
      }
      function Ot(e) {
        A(Sa), ja === e && (ja = null), A(zt);
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
      function vl(e, t) {
        if (t === null) return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
          if (!oa(e[a], t[a])) return !1;
        return !0;
      }
      function Cn(e, t, a, i, r, h) {
        return _n = h, Qe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, je.H = e === null || e.memoizedState === null ? al : Tn, tl = !1, h = a(i, r), tl = !1, Jl && (h = uu(
          t,
          a,
          i,
          r
        )), Wu(e), h;
      }
      function Wu(e) {
        je.H = Ha;
        var t = rt !== null && rt.next !== null;
        if (_n = 0, Dt = rt = Qe = null, bi = !1, Bu = 0, wl = null, t) throw Error(u(300));
        e === null || Bt || (e = e.dependencies, e !== null && ei(e) && (Bt = !0));
      }
      function uu(e, t, a, i) {
        Qe = e;
        var r = 0;
        do {
          if (Jl && (wl = null), Bu = 0, Jl = !1, 25 <= r) throw Error(u(301));
          if (r += 1, Dt = rt = null, e.updateQueue != null) {
            var h = e.updateQueue;
            h.lastEffect = null, h.events = null, h.stores = null, h.memoCache != null && (h.memoCache.index = 0);
          }
          je.H = nl, h = t(a, i);
        } while (Jl);
        return h;
      }
      function pl() {
        var e = je.H, t = e.useState()[0];
        return t = typeof t.then == "function" ? La(t) : t, e = e.useState()[0], (rt !== null ? rt.memoizedState : null) !== e && (Qe.flags |= 1024), t;
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
        _n = 0, Dt = rt = Qe = null, Jl = !1, Bu = _i = 0, wl = null;
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
            throw Qe.alternate === null ? Error(u(467)) : Error(u(310));
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
        var t = Bu;
        return Bu += 1, wl === null && (wl = []), e = Xe(wl, e, t), t = Qe, (Dt === null ? t.memoizedState : Dt.next) === null && (t = t.alternate, je.H = t === null || t.memoizedState === null ? al : Tn), e;
      }
      function Te(e) {
        if (e !== null && typeof e == "object") {
          if (typeof e.then == "function") return La(e);
          if (e.$$typeof === yn) return Xt(e);
        }
        throw Error(u(438, String(e)));
      }
      function Ya(e) {
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
            a[i] = gd;
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
        var i = e.queue;
        if (i === null) throw Error(u(311));
        i.lastRenderedReducer = a;
        var r = e.baseQueue, h = i.pending;
        if (h !== null) {
          if (r !== null) {
            var S = r.next;
            r.next = h.next, h.next = S;
          }
          t.baseQueue = r = h, i.pending = null;
        }
        if (h = e.baseState, r === null) e.memoizedState = h;
        else {
          t = r.next;
          var U = S = null, j = null, P = t, re = !1;
          do {
            var ce = P.lane & -536870913;
            if (ce !== P.lane ? (Je & ce) === ce : (_n & ce) === ce) {
              var pe = P.revertLane;
              if (pe === 0)
                j !== null && (j = j.next = {
                  lane: 0,
                  revertLane: 0,
                  action: P.action,
                  hasEagerState: P.hasEagerState,
                  eagerState: P.eagerState,
                  next: null
                }), ce === Xl && (re = !0);
              else if ((_n & pe) === pe) {
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
                }, j === null ? (U = j = ce, S = h) : j = j.next = ce, Qe.lanes |= pe, Un |= pe;
              ce = P.action, tl && a(h, ce), h = P.hasEagerState ? P.eagerState : a(h, ce);
            } else
              pe = {
                lane: ce,
                revertLane: P.revertLane,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null
              }, j === null ? (U = j = pe, S = h) : j = j.next = pe, Qe.lanes |= ce, Un |= ce;
            P = P.next;
          } while (P !== null && P !== t);
          if (j === null ? S = h : j.next = U, !oa(h, e.memoizedState) && (Bt = !0, re && (a = Ql, a !== null)))
            throw a;
          e.memoizedState = h, e.baseState = S, e.baseQueue = j, i.lastRenderedState = h;
        }
        return r === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
      }
      function yl(e) {
        var t = vt(), a = t.queue;
        if (a === null) throw Error(u(311));
        a.lastRenderedReducer = e;
        var i = a.dispatch, r = a.pending, h = t.memoizedState;
        if (r !== null) {
          a.pending = null;
          var S = r = r.next;
          do
            h = e(h, S.action), S = S.next;
          while (S !== r);
          oa(h, t.memoizedState) || (Bt = !0), t.memoizedState = h, t.baseQueue === null && (t.baseState = h), a.lastRenderedState = h;
        }
        return [h, i];
      }
      function gl(e, t, a) {
        var i = Qe, r = vt(), h = Pe;
        if (h) {
          if (a === void 0)
            throw Error(u(407));
          a = a();
        } else a = t();
        var S = !oa(
          (rt || r).memoizedState,
          a
        );
        if (S && (r.memoizedState = a, Bt = !0), r = r.queue, Xa(ru.bind(null, i, r, e), [
          e
        ]), r.getSnapshot !== t || S || Dt !== null && Dt.memoizedState.tag & 1) {
          if (i.flags |= 2048, Aa(
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
          ), st === null) throw Error(u(349));
          h || (_n & 60) !== 0 || Rn(i, t, a);
        }
        return a;
      }
      function Rn(e, t, a) {
        e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Qe.updateQueue, t === null ? (t = Pr(), Qe.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
      }
      function zn(e, t, a, i) {
        t.value = a, t.getSnapshot = i, xn(t) && ou(e);
      }
      function ru(e, t, a) {
        return a(function() {
          xn(t) && ou(e);
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
      function ou(e) {
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
      function fu(e, t, a, i) {
        return e.baseState = a, rn(
          e,
          rt,
          typeof i == "function" ? i : Ma
        );
      }
      function Bn(e, t, a, i, r) {
        if (Fn(e)) throw Error(u(485));
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
          je.T !== null ? a(!0) : h.isTransition = !1, i(h), a = t.pending, a === null ? (h.next = t.pending = h, Sl(t, h)) : (h.next = a.next, t.pending = a.next = h);
        }
      }
      function Sl(e, t) {
        var a = t.action, i = t.payload, r = e.state;
        if (t.isTransition) {
          var h = je.T, S = {};
          je.T = S;
          try {
            var U = a(r, i), j = je.S;
            j !== null && j(S, U), qa(e, t, U);
          } catch (P) {
            Gn(e, t, P);
          } finally {
            je.T = h;
          }
        } else
          try {
            h = a(r, i), qa(e, t, h);
          } catch (P) {
            Gn(e, t, P);
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
          var a = st.formState;
          if (a !== null) {
            e: {
              var i = Qe;
              if (Pe) {
                if (Kt) {
                  var r = fh(
                    Kt,
                    Ga
                  );
                  if (r) {
                    Kt = oc(r), i = ch(r);
                    break e;
                  }
                }
                ee(i);
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
        ), i.dispatch = a, i = Nn(!1);
        var h = Ml.bind(
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
          h,
          a
        ), r.dispatch = a, i.memoizedState = e, [t, a, !1];
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
        var i = vt(), r = i.queue, h = r.dispatch;
        return a !== i.memoizedState && (Qe.flags |= 2048, Aa(
          9,
          ku.bind(null, r, a),
          { destroy: void 0 },
          null
        )), [t, h, e];
      }
      function ku(e, t) {
        e.action = t;
      }
      function Hn(e) {
        var t = vt(), a = rt;
        if (a !== null)
          return on(t, a, e);
        vt(), t = t.memoizedState, a = vt();
        var i = a.queue.dispatch;
        return a.memoizedState = e, [t, i, !1];
      }
      function Aa(e, t, a, i) {
        return e = { tag: e, create: t, inst: a, deps: i, next: null }, t = Qe.updateQueue, t === null && (t = Pr(), Qe.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
      }
      function _l() {
        return vt().memoizedState;
      }
      function Vn(e, t, a, i) {
        var r = Rt();
        Qe.flags |= e, r.memoizedState = Aa(
          1 | t,
          a,
          { destroy: void 0 },
          i === void 0 ? null : i
        );
      }
      function Ln(e, t, a, i) {
        var r = vt();
        i = i === void 0 ? null : i;
        var h = r.memoizedState.inst;
        rt !== null && i !== null && vl(i, rt.memoizedState.deps) ? r.memoizedState = Aa(t, a, h, i) : (Qe.flags |= e, r.memoizedState = Aa(1 | t, a, h, i));
      }
      function Tl(e, t) {
        Vn(8390656, 8, e, t);
      }
      function Xa(e, t) {
        Ln(2048, 8, e, t);
      }
      function cu(e, t) {
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
      function su(e, t) {
        var a = vt();
        t = t === void 0 ? null : t;
        var i = a.memoizedState;
        return t !== null && vl(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
      }
      function fn(e, t) {
        var a = vt();
        t = t === void 0 ? null : t;
        var i = a.memoizedState;
        if (t !== null && vl(t, i[1]))
          return i[0];
        if (i = e(), tl) {
          I(!0);
          try {
            e();
          } finally {
            I(!1);
          }
        }
        return a.memoizedState = [i, t], i;
      }
      function qn(e, t, a) {
        return a === void 0 || (_n & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Tf(), Qe.lanes |= e, Un |= e, a);
      }
      function Ul(e, t, a, i) {
        return oa(a, t) ? a : Zl.current !== null ? (e = qn(e, a, i), oa(e, t) || (Bt = !0), e) : (_n & 42) === 0 ? (Bt = !0, e.memoizedState = a) : (e = Tf(), Qe.lanes |= e, Un |= e, t);
      }
      function du(e, t, a, i, r) {
        var h = kn();
        $t(
          h !== 0 && 8 > h ? h : 8
        );
        var S = je.T, U = {};
        je.T = U, Ml(e, !1, t, a);
        try {
          var j = r(), P = je.S;
          if (P !== null && P(U, j), j !== null && typeof j == "object" && typeof j.then == "function") {
            var re = Ve(
              j,
              i
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
              i,
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
      function hu() {
        return vt().memoizedState;
      }
      function Pt() {
        return vt().memoizedState;
      }
      function vu(e) {
        for (var t = e.return; t !== null; ) {
          switch (t.tag) {
            case 24:
            case 3:
              var a = la();
              e = Be(a);
              var i = Ge(t, e, a);
              i !== null && (Jt(i, t, a), Me(i, t, a)), t = { cache: nr() }, e.payload = t;
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
        }, Fn(e) ? cn(t, a) : (a = Ee(e, t, a, i), a !== null && (Jt(a, e, i), sn(a, t, i)));
      }
      function pu(e, t, a) {
        var i = la();
        Za(e, t, a, i);
      }
      function Za(e, t, a, i) {
        var r = {
          lane: i,
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
          if (a = Ee(e, t, r, i), a !== null)
            return Jt(a, e, i), sn(a, t, i), !0;
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
          ), t !== null && Jt(t, e, 2);
      }
      function Fn(e) {
        var t = e.alternate;
        return e === Qe || t !== null && t === Qe;
      }
      function cn(e, t) {
        Jl = bi = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
      }
      function sn(e, t, a) {
        if ((a & 4194176) !== 0) {
          var i = t.lanes;
          i &= e.pendingLanes, a |= i, t.lanes = a, Y(e, a);
        }
      }
      function da(e, t, a, i) {
        t = e.memoizedState, a = a(i, t), a = a == null ? t : Ar({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
      }
      function mu(e, t, a, i, r, h, S) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, h, S) : t.prototype && t.prototype.isPureReactComponent ? !Ze(a, i) || !Ze(r, h) : !0;
      }
      function Dl(e, t, a, i) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== e && kr.enqueueReplaceState(t, t.state, null);
      }
      function Ca(e, t) {
        var a = t;
        if ("ref" in t) {
          a = {};
          for (var i in t)
            i !== "ref" && (a[i] = t[i]);
        }
        if (e = e.defaultProps) {
          a === t && (a = Ar({}, a));
          for (var r in e)
            a[r] === void 0 && (a[r] = e[r]);
        }
        return a;
      }
      function Ba(e, t) {
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
      function Ja(e, t, a) {
        return a = Be(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
          Ba(e, t);
        }, a;
      }
      function Al(e) {
        return e = Be(e), e.tag = 3, e;
      }
      function qt(e, t, a, i) {
        var r = a.type.getDerivedStateFromError;
        if (typeof r == "function") {
          var h = i.value;
          e.payload = function() {
            return r(h);
          }, e.callback = function() {
            yu(t, a, i);
          };
        }
        var S = a.stateNode;
        S !== null && typeof S.componentDidCatch == "function" && (e.callback = function() {
          yu(t, a, i), typeof r != "function" && (Mn === null ? Mn = /* @__PURE__ */ new Set([this]) : Mn.add(this));
          var U = i.stack;
          this.componentDidCatch(i.value, {
            componentStack: U !== null ? U : ""
          });
        });
      }
      function Ji(e, t, a, i, r) {
        if (a.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
          if (t = a.alternate, t !== null && Eu(
            t,
            a,
            r,
            !0
          ), a = Sa.current, a !== null) {
            switch (a.tag) {
              case 13:
                return ja === null ? Er() : a.alternate === null && _t === 0 && (_t = 3), a.flags &= -257, a.flags |= 65536, a.lanes = r, i === Si ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), _r(e, i, r)), !1;
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
          return t = Sa.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = r, i !== Qr && (e = Error(u(422), { cause: i }), Ne(
            J(e, a)
          ))) : (i !== Qr && (t = Error(u(423), {
            cause: i
          }), Ne(
            J(t, a)
          )), e = e.current.alternate, e.flags |= 65536, r &= -r, e.lanes |= r, i = J(i, a), r = Ja(
            e.stateNode,
            i,
            r
          ), ct(e, r), _t !== 4 && (_t = 2)), !1;
        var h = Error(u(520), { cause: i });
        if (h = J(h, a), ju === null ? ju = [h] : ju.push(h), _t !== 4 && (_t = 2), t === null) return !0;
        i = J(i, a), a = t;
        do {
          switch (a.tag) {
            case 3:
              return a.flags |= 65536, e = r & -r, a.lanes |= e, e = Ja(a.stateNode, i, e), ct(a, e), !1;
            case 1:
              if (t = a.type, h = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Mn === null || !Mn.has(
                h
              ))))
                return a.flags |= 65536, r &= -r, a.lanes |= r, r = Al(r), qt(
                  r,
                  e,
                  a,
                  i
                ), ct(a, r), !1;
          }
          a = a.return;
        } while (a !== null);
        return !1;
      }
      function St(e, t, a, i) {
        t.child = e === null ? _c(t, null, a, i) : el(
          t,
          e.child,
          a,
          i
        );
      }
      function Kn(e, t, a, i, r) {
        a = a.render;
        var h = t.ref;
        if ("ref" in i) {
          var S = {};
          for (var U in i)
            U !== "ref" && (S[U] = i[U]);
        } else S = i;
        return Zn(t), i = Cn(
          e,
          t,
          a,
          S,
          h,
          r
        ), U = On(), e !== null && !Bt ? (iu(e, t, r), wa(e, t, r)) : (Pe && U && R(t), t.flags |= 1, St(e, t, i, r), t.child);
      }
      function gu(e, t, a, i, r) {
        if (e === null) {
          var h = a.type;
          return typeof h == "function" && !Tr(h) && h.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = h, $u(
            e,
            t,
            h,
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
        if (h = e.child, !er(e, r)) {
          var S = h.memoizedProps;
          if (a = a.compare, a = a !== null ? a : Ze, a(S, i) && e.ref === t.ref)
            return wa(
              e,
              t,
              r
            );
        }
        return t.flags |= 1, e = mn(h, i), e.ref = t.ref, e.return = t, t.child = e;
      }
      function $u(e, t, a, i, r) {
        if (e !== null) {
          var h = e.memoizedProps;
          if (Ze(h, i) && e.ref === t.ref)
            if (Bt = !1, t.pendingProps = i = h, er(e, r))
              (e.flags & 131072) !== 0 && (Bt = !0);
            else
              return t.lanes = e.lanes, wa(e, t, r);
        }
        return ha(
          e,
          t,
          a,
          i,
          r
        );
      }
      function Ht(e, t, a) {
        var i = t.pendingProps, r = i.children, h = (t.stateNode._pendingVisibility & 2) !== 0, S = e !== null ? e.memoizedState : null;
        if (Mt(e, t), i.mode === "hidden" || h) {
          if ((t.flags & 128) !== 0) {
            if (i = S !== null ? S.baseLanes | a : a, e !== null) {
              for (r = t.child = e.child, h = 0; r !== null; )
                h = h | r.lanes | r.childLanes, r = r.sibling;
              t.childLanes = h & ~i;
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
          S !== null ? (ai(t, S.cachePool), gt(t, S), Yt(), t.memoizedState = null) : (e !== null && ai(t, null), Zt(), Yt());
        return St(e, t, r, a), t.child;
      }
      function kt(e, t, a, i) {
        var r = lr();
        return r = r === null ? null : {
          parent: Ia ? Et._currentValue : Et._currentValue2,
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
      function ha(e, t, a, i, r) {
        return Zn(t), a = Cn(
          e,
          t,
          a,
          i,
          void 0,
          r
        ), i = On(), e !== null && !Bt ? (iu(e, t, r), wa(e, t, r)) : (Pe && i && R(t), t.flags |= 1, St(e, t, a, r), t.child);
      }
      function Su(e, t, a, i, r, h) {
        return Zn(t), t.updateQueue = null, a = uu(
          t,
          i,
          a,
          r
        ), Wu(e), i = On(), e !== null && !Bt ? (iu(e, t, h), wa(e, t, h)) : (Pe && i && R(t), t.flags |= 1, St(e, t, a, h), t.child);
      }
      function Zo(e, t, a, i, r) {
        if (Zn(t), t.stateNode === null) {
          var h = jl, S = a.contextType;
          typeof S == "object" && S !== null && (h = Xt(S)), h = new a(i, h), t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, h.updater = kr, t.stateNode = h, h._reactInternals = t, h = t.stateNode, h.props = i, h.state = t.memoizedState, h.refs = {}, $e(t), S = a.contextType, h.context = typeof S == "object" && S !== null ? Xt(S) : jl, h.state = t.memoizedState, S = a.getDerivedStateFromProps, typeof S == "function" && (da(
            t,
            a,
            S,
            i
          ), h.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (S = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), S !== h.state && kr.enqueueReplaceState(
            h,
            h.state,
            null
          ), Tt(t, i, h, r), et(), h.state = t.memoizedState), typeof h.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
        } else if (e === null) {
          h = t.stateNode;
          var U = t.memoizedProps, j = Ca(a, U);
          h.props = j;
          var P = h.context, re = a.contextType;
          S = jl, typeof re == "object" && re !== null && (S = Xt(re));
          var ce = a.getDerivedStateFromProps;
          re = typeof ce == "function" || typeof h.getSnapshotBeforeUpdate == "function", U = t.pendingProps !== U, re || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (U || P !== S) && Dl(
            t,
            h,
            i,
            S
          ), bn = !1;
          var pe = t.memoizedState;
          h.state = pe, Tt(t, i, h, r), et(), P = t.memoizedState, U || pe !== P || bn ? (typeof ce == "function" && (da(
            t,
            a,
            ce,
            i
          ), P = t.memoizedState), (j = bn || mu(
            t,
            a,
            j,
            i,
            pe,
            P,
            S
          )) ? (re || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = P), h.props = i, h.state = P, h.context = S, i = j) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
        } else {
          h = t.stateNode, ft(e, t), S = t.memoizedProps, re = Ca(a, S), h.props = re, ce = t.pendingProps, pe = h.context, P = a.contextType, j = jl, typeof P == "object" && P !== null && (j = Xt(P)), U = a.getDerivedStateFromProps, (P = typeof U == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== ce || pe !== j) && Dl(
            t,
            h,
            i,
            j
          ), bn = !1, pe = t.memoizedState, h.state = pe, Tt(t, i, h, r), et();
          var Ye = t.memoizedState;
          S !== ce || pe !== Ye || bn || e !== null && e.dependencies !== null && ei(e.dependencies) ? (typeof U == "function" && (da(
            t,
            a,
            U,
            i
          ), Ye = t.memoizedState), (re = bn || mu(
            t,
            a,
            re,
            i,
            pe,
            Ye,
            j
          ) || e !== null && e.dependencies !== null && ei(e.dependencies)) ? (P || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(i, Ye, j), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(
            i,
            Ye,
            j
          )), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === e.memoizedProps && pe === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && pe === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = Ye), h.props = i, h.state = Ye, h.context = j, i = re) : (typeof h.componentDidUpdate != "function" || S === e.memoizedProps && pe === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && pe === e.memoizedState || (t.flags |= 1024), i = !1);
        }
        return h = i, Mt(e, t), i = (t.flags & 128) !== 0, h || i ? (h = t.stateNode, a = i && typeof a.getDerivedStateFromError != "function" ? null : h.render(), t.flags |= 1, e !== null && i ? (t.child = el(
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
      function Jo(e, t, a, i) {
        return le(), t.flags |= 256, St(e, t, a, i), t.child;
      }
      function wi(e) {
        return { baseLanes: e, cachePool: $o() };
      }
      function Wi(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Ea), e;
      }
      function wo(e, t, a) {
        var i = t.pendingProps, r = !1, h = (t.flags & 128) !== 0, S;
        if ((S = h) || (S = e !== null && e.memoizedState === null ? !1 : (zt.current & 2) !== 0), S && (r = !0, t.flags &= -129), S = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
          if (Pe) {
            if (r ? Nt(t) : Yt(), Pe) {
              var U = Kt, j;
              (j = U) && (U = ph(
                U,
                Ga
              ), U !== null ? (t.memoizedState = {
                dehydrated: U,
                treeContext: $n !== null ? { id: $a, overflow: en } : null,
                retryLane: 536870912
              }, j = p(18, null, null, 0), j.stateNode = U, j.return = t, t.child = j, wt = t, Kt = null, j = !0) : j = !1), j || ee(t);
            }
            if (U = t.memoizedState, U !== null && (U = U.dehydrated, U !== null))
              return Vr(U) ? t.lanes = 16 : t.lanes = 536870912, null;
            Ot(t);
          }
          return U = i.children, i = i.fallback, r ? (Yt(), r = t.mode, U = ki(
            { mode: "hidden", children: U },
            r
          ), i = Pn(
            i,
            r,
            a,
            null
          ), U.return = t, i.return = t, U.sibling = i, t.child = U, r = t.child, r.memoizedState = wi(a), r.childLanes = Wi(
            e,
            S,
            a
          ), t.memoizedState = Ir, i) : (Nt(t), Pi(t, U));
        }
        if (j = e.memoizedState, j !== null && (U = j.dehydrated, U !== null)) {
          if (h)
            t.flags & 256 ? (Nt(t), t.flags &= -257, t = Ii(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (Yt(), t.child = e.child, t.flags |= 128, t = null) : (Yt(), r = i.fallback, U = t.mode, i = ki(
              { mode: "visible", children: i.children },
              U
            ), r = Pn(
              r,
              U,
              a,
              null
            ), r.flags |= 2, i.return = t, r.return = t, i.sibling = r, t.child = i, el(
              t,
              e.child,
              null,
              a
            ), i = t.child, i.memoizedState = wi(a), i.childLanes = Wi(
              e,
              S,
              a
            ), t.memoizedState = Ir, t = r);
          else if (Nt(t), Vr(U))
            S = rh(U).digest, i = Error(u(419)), i.stack = "", i.digest = S, Ne({ value: i, source: null, stack: null }), t = Ii(
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
            if (S = st, S !== null) {
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
              if (i = (i & (S.suspendedLanes | a)) !== 0 ? 0 : i, i !== 0 && i !== j.retryLane)
                throw j.retryLane = i, be(e, i), Jt(S, e, i), Uc;
            }
            Hr(U) || Er(), t = Ii(
              e,
              t,
              a
            );
          } else
            Hr(U) ? (t.flags |= 128, t.child = e.child, t = cd.bind(
              null,
              e
            ), oh(U, t), t = null) : (e = j.treeContext, va && (Kt = dh(U), wt = t, Pe = !0, za = null, Ga = !1, e !== null && (ma[ya++] = $a, ma[ya++] = en, ma[ya++] = $n, $a = e.id, en = e.overflow, $n = t)), t = Pi(
              t,
              i.children
            ), t.flags |= 4096);
          return t;
        }
        return r ? (Yt(), r = i.fallback, U = t.mode, j = e.child, h = j.sibling, i = mn(j, {
          mode: "hidden",
          children: i.children
        }), i.subtreeFlags = j.subtreeFlags & 31457280, h !== null ? r = mn(h, r) : (r = Pn(
          r,
          U,
          a,
          null
        ), r.flags |= 2), r.return = t, i.return = t, i.sibling = r, t.child = i, i = r, r = t.child, U = e.child.memoizedState, U === null ? U = wi(a) : (j = U.cachePool, j !== null ? (h = Ia ? Et._currentValue : Et._currentValue2, j = j.parent !== h ? { parent: h, pool: h } : j) : j = $o(), U = {
          baseLanes: U.baseLanes | a,
          cachePool: j
        }), r.memoizedState = U, r.childLanes = Wi(
          e,
          S,
          a
        ), t.memoizedState = Ir, i) : (Nt(t), a = e.child, e = a.sibling, a = mn(a, {
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
        return Lf(e, t, 0, null);
      }
      function Ii(e, t, a) {
        return el(t, e.child, null, a), e = Pi(
          t,
          t.pendingProps.children
        ), e.flags |= 2, t.memoizedState = null, e;
      }
      function Wo(e, t, a) {
        e.lanes |= t;
        var i = e.alternate;
        i !== null && (i.lanes |= t), tr(e.return, t, a);
      }
      function $i(e, t, a, i, r) {
        var h = e.memoizedState;
        h === null ? e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: a,
          tailMode: r
        } : (h.isBackwards = t, h.rendering = null, h.renderingStartTime = 0, h.last = i, h.tail = a, h.tailMode = r);
      }
      function Po(e, t, a) {
        var i = t.pendingProps, r = i.revealOrder, h = i.tail;
        if (St(e, t, i.children, a), i = zt.current, (i & 2) !== 0)
          i = i & 1 | 2, t.flags |= 128;
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
            $i(
              t,
              !0,
              a,
              null,
              h
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
        if (e !== null && (t.dependencies = e.dependencies), Un |= t.lanes, (a & t.childLanes) === 0)
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
          for (e = t.child, a = mn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
            e = e.sibling, a = a.sibling = mn(e, e.pendingProps), a.return = t;
          a.sibling = null;
        }
        return t.child;
      }
      function er(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ei(e)));
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
            var i = t.memoizedState;
            if (i !== null)
              return i.dehydrated !== null ? (Nt(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? wo(
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
            if (i = (a & t.childLanes) !== 0, i || (Eu(
              e,
              t,
              a,
              !1
            ), i = (a & t.childLanes) !== 0), r) {
              if (i)
                return Po(
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
          Bt = !1, Pe && (t.flags & 1048576) !== 0 && T(t, pi, t.index);
        switch (t.lanes = 0, t.tag) {
          case 16:
            e: {
              e = t.pendingProps;
              var i = t.elementType, r = i._init;
              if (i = r(i._payload), t.type = i, typeof i == "function")
                Tr(i) ? (e = Ca(i, e), t.tag = 1, t = Zo(
                  null,
                  t,
                  i,
                  e,
                  a
                )) : (t.tag = 0, t = ha(
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
                  } else if (r === xr) {
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
            return ha(
              e,
              t,
              t.type,
              t.pendingProps,
              a
            );
          case 1:
            return i = t.type, r = Ca(
              i,
              t.pendingProps
            ), Zo(
              e,
              t,
              i,
              r,
              a
            );
          case 3:
            e: {
              if (q(
                t,
                t.stateNode.containerInfo
              ), e === null) throw Error(u(387));
              var h = t.pendingProps;
              r = t.memoizedState, i = r.element, ft(e, t), Tt(t, h, null, a);
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
                } else if (h !== i) {
                  i = J(
                    Error(u(424)),
                    t
                  ), Ne(i), t = Jo(
                    e,
                    t,
                    h,
                    a
                  );
                  break e;
                } else
                  for (va && (Kt = sh(
                    t.stateNode.containerInfo
                  ), wt = t, Pe = !0, za = null, Ga = !0), a = _c(
                    t,
                    null,
                    h,
                    a
                  ), t.child = a; a; )
                    a.flags = a.flags & -3 | 4096, a = a.sibling;
              else {
                if (le(), h === i) {
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
              return ae(t), e === null && Ft && Pe && (i = t.stateNode = gc(
                t.type,
                t.pendingProps,
                En.current,
                Vt.current,
                !1
              ), wt = t, Ga = !0, Kt = fc(i)), i = t.pendingProps.children, e !== null || Pe ? St(
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
            return e === null && Pe && (Uh(
              t.type,
              t.pendingProps,
              Vt.current
            ), (r = i = Kt) && (i = hh(
              i,
              t.type,
              t.pendingProps,
              Ga
            ), i !== null ? (t.stateNode = i, wt = t, Kt = fc(i), Ga = !1, r = !0) : r = !1), r || ee(t)), ae(t), r = t.type, h = t.pendingProps, S = e !== null ? e.memoizedProps : null, i = h.children, ci(r, h) ? i = null : S !== null && ci(r, S) && (t.flags |= 32), t.memoizedState !== null && (r = Cn(
              e,
              t,
              pl,
              null,
              null,
              a
            ), Ia ? In._currentValue = r : In._currentValue2 = r), Mt(e, t), St(e, t, i, a), t.child;
          case 6:
            return e === null && Pe && (Mh(
              t.pendingProps,
              Vt.current
            ), (e = a = Kt) && (a = vh(
              a,
              t.pendingProps,
              Ga
            ), a !== null ? (t.stateNode = a, wt = t, Kt = null, e = !0) : e = !1), e || ee(t)), null;
          case 13:
            return wo(e, t, a);
          case 4:
            return q(
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
            return i = t.pendingProps, dn(
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
            return Po(
              e,
              t,
              a
            );
          case 22:
            return Ht(e, t, a);
          case 24:
            return Zn(t), i = Xt(Et), e === null ? (r = lr(), r === null && (r = st, h = nr(), r.pooledCache = h, h.refCount++, h !== null && (r.pooledCacheLanes |= a), r = h), t.memoizedState = {
              parent: i,
              cache: r
            }, $e(t), dn(t, Et, r)) : ((e.lanes & a) !== 0 && (ft(e, t), Tt(t, null, null, a), et()), r = e.memoizedState, h = t.memoizedState, r.parent !== i ? (r = { parent: i, cache: i }, t.memoizedState = r, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = r), dn(t, Et, i)) : (i = h.cache, dn(t, Et, i), i !== r.cache && ar(
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
      function dn(e, t, a) {
        Ia ? (b(Ti, t._currentValue), t._currentValue = a) : (b(Ti, t._currentValue2), t._currentValue2 = a);
      }
      function Wa(e) {
        var t = Ti.current;
        Ia ? e._currentValue = t : e._currentValue2 = t, A(Ti);
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
          var h = r.dependencies;
          if (h !== null) {
            var S = r.child;
            h = h.firstContext;
            e: for (; h !== null; ) {
              var U = h;
              h = r;
              for (var j = 0; j < t.length; j++)
                if (U.context === t[j]) {
                  h.lanes |= a, U = h.alternate, U !== null && (U.lanes |= a), tr(
                    h.return,
                    a,
                    e
                  ), i || (S = null);
                  break e;
                }
              h = U.next;
            }
          } else if (r.tag === 18) {
            if (S = r.return, S === null) throw Error(u(341));
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
      function Eu(e, t, a, i) {
        e = null;
        for (var r = t, h = !1; r !== null; ) {
          if (!h) {
            if ((r.flags & 524288) !== 0) h = !0;
            else if ((r.flags & 262144) !== 0) break;
          }
          if (r.tag === 10) {
            var S = r.alternate;
            if (S === null) throw Error(u(387));
            if (S = S.memoizedProps, S !== null) {
              var U = r.type;
              oa(r.pendingProps.value, S.value) || (e !== null ? e.push(U) : e = [U]);
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
      function ti(e, t) {
        return ll === null && Zn(e), Io(e, t);
      }
      function Io(e, t) {
        var a = Ia ? t._currentValue : t._currentValue2;
        if (t = { context: t, memoizedValue: a, next: null }, tn === null) {
          if (e === null) throw Error(u(308));
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
      function bu(e) {
        e.refCount--, e.refCount === 0 && Kh(Zh, function() {
          e.controller.abort();
        });
      }
      function lr() {
        var e = ul.current;
        return e !== null ? e : st.pooledCache;
      }
      function ai(e, t) {
        t === null ? b(ul, ul.current) : b(ul, t.pool);
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
        else if (Sn)
          for (var r = t.child; r !== null; ) {
            if (r.tag === 5) {
              var h = r.stateNode;
              a && i && (h = ic(
                h,
                r.type,
                r.memoizedProps
              )), Gr(e, h);
            } else if (r.tag === 6)
              h = r.stateNode, a && i && (h = rc(
                h,
                r.memoizedProps
              )), Gr(e, h);
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
      function tf(e, t, a, i) {
        if (Sn)
          for (var r = t.child; r !== null; ) {
            if (r.tag === 5) {
              var h = r.stateNode;
              a && i && (h = ic(
                h,
                r.type,
                r.memoizedProps
              )), lc(e, h);
            } else if (r.tag === 6)
              h = r.stateNode, a && i && (h = rc(
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
          var a = e.containerInfo, i = nc();
          tf(i, t, !1, !1), e.pendingChildren = i, ta(t), ih(a, i);
        }
      }
      function ir(e, t, a, i) {
        if (Qt)
          e.memoizedProps !== i && ta(t);
        else if (Sn) {
          var r = e.stateNode, h = e.memoizedProps;
          if ((e = ef(e, t)) || h !== i) {
            var S = Vt.current;
            h = uh(
              r,
              a,
              h,
              i,
              !e,
              null
            ), h === r ? t.stateNode = r : (kf(
              h,
              a,
              i,
              S
            ) && ta(t), t.stateNode = h, e ? ur(h, t, !1, !1) : ta(t));
          } else t.stateNode = r;
        }
      }
      function rr(e, t, a) {
        if (Nd(t, a)) {
          if (e.flags |= 16777216, !ec(t, a))
            if (Cf()) e.flags |= 8192;
            else
              throw Fl = Si, Wr;
        } else e.flags &= -16777217;
      }
      function nf(e, t) {
        if (Oh(t)) {
          if (e.flags |= 16777216, !yc(t))
            if (Cf()) e.flags |= 8192;
            else
              throw Fl = Si, Wr;
        } else e.flags &= -16777217;
      }
      function ni(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? W() : 536870912, e.lanes |= t, kl |= t);
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
      function ed(e, t, a) {
        var i = t.pendingProps;
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
            return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Wa(Et), F(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (oe(t) ? ta(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, za !== null && (gr(za), za = null))), af(e, t), yt(t), null;
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
                i
              ))) : r ? r !== e.memoizedState ? (ta(t), yt(t), nf(
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
              if (k(t), a = En.current, r = t.type, e !== null && t.stateNode != null)
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
                e = Vt.current, oe(t) ? se(t, e) : (e = gc(
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
            if (k(t), a = t.type, e !== null && t.stateNode != null)
              ir(e, t, a, i);
            else {
              if (!i) {
                if (t.stateNode === null)
                  throw Error(u(166));
                return yt(t), null;
              }
              e = Vt.current, oe(t) ? se(t, e) : (r = Dd(
                a,
                i,
                En.current,
                e,
                t
              ), ur(r, t, !1, !1), t.stateNode = r, kf(
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
              a = e.memoizedProps, Qt ? a !== i && ta(t) : Sn && (a !== i ? (t.stateNode = If(
                i,
                En.current,
                Vt.current,
                t
              ), ta(t)) : t.stateNode = e.stateNode);
            else {
              if (typeof i != "string" && t.stateNode === null)
                throw Error(u(166));
              if (e = En.current, a = Vt.current, oe(t)) {
                if (!va) throw Error(u(176));
                if (e = t.stateNode, a = t.memoizedProps, i = null, r = wt, r !== null)
                  switch (r.tag) {
                    case 27:
                    case 5:
                      i = r.memoizedProps;
                  }
                yh(
                  e,
                  a,
                  t,
                  i
                ) || ee(t);
              } else
                t.stateNode = If(
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
                  if (!va) throw Error(u(344));
                  if (r = t.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(u(317));
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
            if (a = i !== null, e = e !== null && e.memoizedState !== null, a) {
              i = t.child, r = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (r = i.alternate.memoizedState.cachePool.pool);
              var h = null;
              i.memoizedState !== null && i.memoizedState.cachePool !== null && (h = i.memoizedState.cachePool.pool), h !== r && (i.flags |= 2048);
            }
            return a !== e && a && (t.child.flags |= 8192), ni(t, t.updateQueue), yt(t), null;
          case 4:
            return F(), af(e, t), e === null && Od(t.stateNode.containerInfo), yt(t), null;
          case 10:
            return Wa(t.type), yt(t), null;
          case 19:
            if (A(zt), r = t.memoizedState, r === null)
              return yt(t), null;
            if (i = (t.flags & 128) !== 0, h = r.rendering, h === null)
              if (i) _u(r, !1);
              else {
                if (_t !== 0 || e !== null && (e.flags & 128) !== 0)
                  for (e = t.child; e !== null; ) {
                    if (h = Ut(e), h !== null) {
                      for (t.flags |= 128, _u(r, !1), e = h.updateQueue, t.updateQueue = e, ni(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                        Vf(a, e), a = a.sibling;
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
                if (e = Ut(h), e !== null) {
                  if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, ni(t, e), _u(r, !0), r.tail === null && r.tailMode === "hidden" && !h.alternate && !Pe)
                    return yt(t), null;
                } else
                  2 * Ra() - r.renderingStartTime > Hu && a !== 536870912 && (t.flags |= 128, i = !0, _u(r, !1), t.lanes = 4194304);
              r.isBackwards ? (h.sibling = t.child, t.child = h) : (e = r.last, e !== null ? e.sibling = h : t.child = h, r.last = h);
            }
            return r.tail !== null ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.renderingStartTime = Ra(), t.sibling = null, e = zt.current, b(
              zt,
              i ? e & 1 | 2 : e & 1
            ), t) : (yt(t), null);
          case 22:
          case 23:
            return Ot(t), sa(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), a = t.updateQueue, a !== null && ni(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && A(ul), null;
          case 24:
            return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Wa(Et), yt(t), null;
          case 25:
            return null;
        }
        throw Error(u(156, t.tag));
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
                throw Error(u(340));
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
            return Ot(t), sa(), e !== null && A(ul), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
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
            Ot(t), sa(), e !== null && A(ul);
            break;
          case 24:
            Wa(Et);
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
                var h = a.create, S = a.inst;
                i = h(), S.destroy = i;
              }
              a = a.next;
            } while (a !== r);
          }
        } catch (U) {
          ut(t, t.return, U);
        }
      }
      function hn(e, t, a) {
        try {
          var i = t.updateQueue, r = i !== null ? i.lastEffect : null;
          if (r !== null) {
            var h = r.next;
            i = h;
            do {
              if ((i.tag & e) === e) {
                var S = i.inst, U = S.destroy;
                if (U !== void 0) {
                  S.destroy = void 0, r = t;
                  var j = a;
                  try {
                    U();
                  } catch (P) {
                    ut(
                      r,
                      j,
                      P
                    );
                  }
                }
              }
              i = i.next;
            } while (i !== h);
          }
        } catch (P) {
          ut(t, t.return, P);
        }
      }
      function uf(e) {
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
      function rf(e, t, a) {
        a.props = Ca(
          e.type,
          e.memoizedProps
        ), a.state = e.memoizedState;
        try {
          a.componentWillUnmount();
        } catch (i) {
          ut(e, t, i);
        }
      }
      function Jn(e, t) {
        try {
          var a = e.ref;
          if (a !== null) {
            var i = e.stateNode;
            switch (e.tag) {
              case 26:
              case 27:
              case 5:
                var r = Du(i);
                break;
              default:
                r = i;
            }
            typeof a == "function" ? e.refCleanup = a(r) : a.current = r;
          }
        } catch (h) {
          ut(e, t, h);
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
      function of(e) {
        var t = e.type, a = e.memoizedProps, i = e.stateNode;
        try {
          wd(i, t, a, e);
        } catch (r) {
          ut(e, e.return, r);
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
        } catch (i) {
          ut(e, e.return, i);
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
        var i = e.tag;
        if (i === 5 || i === 6)
          e = e.stateNode, t ? kd(a, e, t) : Zd(a, e);
        else if (!(i === 4 || Ft && i === 27) && (e = e.child, e !== null))
          for (fr(e, t, a), e = e.sibling; e !== null; )
            fr(e, t, a), e = e.sibling;
      }
      function li(e, t, a) {
        var i = e.tag;
        if (i === 5 || i === 6)
          e = e.stateNode, t ? Pd(a, e, t) : Kd(a, e);
        else if (!(i === 4 || Ft && i === 27) && (e = e.child, e !== null))
          for (li(e, t, a), e = e.sibling; e !== null; )
            li(e, t, a), e = e.sibling;
      }
      function sf(e, t, a) {
        e = e.containerInfo;
        try {
          uc(e, a);
        } catch (i) {
          ut(t, t.return, i);
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
                    var i = e, r = a.memoizedProps;
                    a = a.memoizedState;
                    var h = i.stateNode;
                    try {
                      var S = Ca(
                        i.type,
                        r,
                        i.elementType === i.type
                      );
                      t = h.getSnapshotBeforeUpdate(
                        S,
                        a
                      ), h.__reactInternalSnapshotBeforeUpdate = t;
                    } catch (U) {
                      ut(
                        i,
                        i.return,
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
                    throw Error(u(163));
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
        var i = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            Pa(e, a), i & 4 && Tu(5, a);
            break;
          case 1:
            if (Pa(e, a), i & 4)
              if (e = a.stateNode, t === null)
                try {
                  e.componentDidMount();
                } catch (U) {
                  ut(a, a.return, U);
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
                  ut(
                    a,
                    a.return,
                    U
                  );
                }
              }
            i & 64 && uf(a), i & 512 && Jn(a, a.return);
            break;
          case 3:
            if (Pa(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
              if (e = null, a.child !== null)
                switch (a.child.tag) {
                  case 27:
                  case 5:
                    e = Du(a.child.stateNode);
                    break;
                  case 1:
                    e = a.child.stateNode;
                }
              try {
                Re(i, e);
              } catch (U) {
                ut(a, a.return, U);
              }
            }
            break;
          case 26:
            if (pa) {
              Pa(e, a), i & 512 && Jn(a, a.return);
              break;
            }
          case 27:
          case 5:
            Pa(e, a), t === null && i & 4 && of(a), i & 512 && Jn(a, a.return);
            break;
          case 12:
            Pa(e, a);
            break;
          case 13:
            Pa(e, a), i & 4 && vf(e, a);
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
            i & 512 && (a.memoizedProps.mode === "manual" ? Jn(a, a.return) : aa(a, a.return));
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
              ), a.memoizedState ? vc(a.memoizedState) : a.stateNode && mc(a.stateNode);
              break;
            }
          case 27:
            if (Ft) {
              bt || aa(a, t);
              var i = At, r = fa;
              At = a.stateNode, Oa(
                e,
                t,
                a
              ), Nh(a.stateNode), At = i, fa = r;
              break;
            }
          case 5:
            bt || aa(a, t);
          case 6:
            if (Qt) {
              if (i = At, r = fa, At = null, Oa(
                e,
                t,
                a
              ), At = i, fa = r, At !== null)
                if (fa)
                  try {
                    $d(At, a.stateNode);
                  } catch (h) {
                    ut(
                      a,
                      t,
                      h
                    );
                  }
                else
                  try {
                    Id(At, a.stateNode);
                  } catch (h) {
                    ut(
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
            Qt && At !== null && (fa ? Th(
              At,
              a.stateNode
            ) : _h(At, a.stateNode));
            break;
          case 4:
            Qt ? (i = At, r = fa, At = a.stateNode.containerInfo, fa = !0, Oa(
              e,
              t,
              a
            ), At = i, fa = r) : (Sn && sf(
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
            bt || (aa(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && rf(
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
      function vf(e, t) {
        if (va && t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
          try {
            bh(e);
          } catch (a) {
            ut(t, t.return, a);
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
            throw Error(u(435, e.tag));
        }
      }
      function sr(e, t) {
        var a = nd(e);
        t.forEach(function(i) {
          var r = sd.bind(null, e, i);
          a.has(i) || (a.add(i), i.then(r, r));
        });
      }
      function It(e, t) {
        var a = t.deletions;
        if (a !== null)
          for (var i = 0; i < a.length; i++) {
            var r = a[i], h = e, S = t;
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
              if (At === null) throw Error(u(160));
              cr(h, S, r), At = null, fa = !1;
            } else cr(h, S, r);
            h = r.alternate, h !== null && (h.return = null), r.return = null;
          }
        if (t.subtreeFlags & 13878)
          for (t = t.child; t !== null; )
            pf(t, e), t = t.sibling;
      }
      function pf(e, t) {
        var a = e.alternate, i = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            It(t, e), na(e), i & 4 && (hn(3, e, e.return), Tu(3, e), hn(5, e, e.return));
            break;
          case 1:
            It(t, e), na(e), i & 512 && (bt || a === null || aa(a, a.return)), i & 64 && an && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
            break;
          case 26:
            if (pa) {
              var r = xa;
              It(t, e), na(e), i & 512 && (bt || a === null || aa(a, a.return)), i & 4 && (i = a !== null ? a.memoizedState : null, t = e.memoizedState, a === null ? t === null ? e.stateNode === null ? e.stateNode = Dh(
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
              ) : i !== t ? (i === null ? a.stateNode !== null && mc(a.stateNode) : vc(i), t === null ? pc(
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
            if (Ft && i & 4 && e.alternate === null) {
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
                ut(e, e.return, re);
              }
            }
          case 5:
            if (It(t, e), na(e), i & 512 && (bt || a === null || aa(a, a.return)), Qt) {
              if (e.flags & 32) {
                t = e.stateNode;
                try {
                  ac(t);
                } catch (re) {
                  ut(e, e.return, re);
                }
              }
              i & 4 && e.stateNode != null && (t = e.memoizedProps, ff(
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
                Jd(t, a, i);
              } catch (re) {
                ut(e, e.return, re);
              }
            }
            break;
          case 3:
            if (pa ? (Ch(), r = xa, xa = Lr(t.containerInfo), It(t, e), xa = r) : It(t, e), na(e), i & 4) {
              if (Qt && va && a !== null && a.memoizedState.isDehydrated)
                try {
                  Eh(t.containerInfo);
                } catch (re) {
                  ut(e, e.return, re);
                }
              if (Sn) {
                i = t.containerInfo, a = t.pendingChildren;
                try {
                  uc(i, a);
                } catch (re) {
                  ut(e, e.return, re);
                }
              }
            }
            $r && ($r = !1, mf(e));
            break;
          case 4:
            pa ? (a = xa, xa = Lr(
              e.stateNode.containerInfo
            ), It(t, e), na(e), xa = a) : (It(t, e), na(e)), i & 4 && Sn && sf(
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
            var S = a !== null && a.memoizedState !== null, U = an, j = bt;
            if (an = U || r, bt = j || S, It(t, e), bt = j, an = U, na(e), t = e.stateNode, t._current = e, t._visibility &= -3, t._visibility |= t._pendingVisibility & 2, i & 8192 && (t._visibility = r ? t._visibility & -2 : t._visibility | 1, r && (t = an || bt, a === null || S || t || Cl(e)), Qt && (e.memoizedProps === null || e.memoizedProps.mode !== "manual"))) {
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
                        ut(S, S.return, re);
                      }
                    }
                  } else if (t.tag === 6) {
                    if (a === null) {
                      S = t;
                      try {
                        var P = S.stateNode;
                        r ? th(P) : nh(P, S.memoizedProps);
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
                  if (cf(a)) {
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
                    var r = i.stateNode, h = or(e);
                    li(
                      e,
                      h,
                      r
                    );
                    break;
                  }
                case 5:
                  var S = i.stateNode;
                  i.flags & 32 && (ac(S), i.flags &= -33);
                  var U = or(e);
                  li(e, U, S);
                  break;
                case 3:
                case 4:
                  var j = i.stateNode.containerInfo, P = or(e);
                  fr(
                    e,
                    P,
                    j
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
          var i = t.alternate, r = e, h = t, S = h.flags;
          switch (h.tag) {
            case 0:
            case 11:
            case 15:
              vn(
                r,
                h,
                a
              ), Tu(4, h);
              break;
            case 1:
              if (vn(
                r,
                h,
                a
              ), i = h, r = i.stateNode, typeof r.componentDidMount == "function")
                try {
                  r.componentDidMount();
                } catch (P) {
                  ut(i, i.return, P);
                }
              if (i = h, r = i.updateQueue, r !== null) {
                var U = i.stateNode;
                try {
                  var j = r.shared.hiddenCallbacks;
                  if (j !== null)
                    for (r.shared.hiddenCallbacks = null, r = 0; r < j.length; r++)
                      tt(j[r], U);
                } catch (P) {
                  ut(i, i.return, P);
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
              ), a && i === null && S & 4 && of(h), Jn(h, h.return);
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
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && bu(a));
      }
      function hr(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && bu(e));
      }
      function pn(e, t, a, i) {
        if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null; )
            yf(
              e,
              t,
              a,
              i
            ), t = t.sibling;
      }
      function yf(e, t, a, i) {
        var r = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            pn(
              e,
              t,
              a,
              i
            ), r & 2048 && Tu(9, t);
            break;
          case 3:
            pn(
              e,
              t,
              a,
              i
            ), r & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && bu(e)));
            break;
          case 12:
            if (r & 2048) {
              pn(
                e,
                t,
                a,
                i
              ), e = t.stateNode;
              try {
                var h = t.memoizedProps, S = h.id, U = h.onPostCommit;
                typeof U == "function" && U(
                  S,
                  t.alternate === null ? "mount" : "update",
                  e.passiveEffectDuration,
                  -0
                );
              } catch (j) {
                ut(t, t.return, j);
              }
            } else
              pn(
                e,
                t,
                a,
                i
              );
            break;
          case 23:
            break;
          case 22:
            h = t.stateNode, t.memoizedState !== null ? h._visibility & 4 ? pn(
              e,
              t,
              a,
              i
            ) : Uu(
              e,
              t
            ) : h._visibility & 4 ? pn(
              e,
              t,
              a,
              i
            ) : (h._visibility |= 4, Ol(
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
            pn(
              e,
              t,
              a,
              i
            ), r & 2048 && hr(t.alternate, t);
            break;
          default:
            pn(
              e,
              t,
              a,
              i
            );
        }
      }
      function Ol(e, t, a, i, r) {
        for (r = r && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
          var h = e, S = t, U = a, j = i, P = S.flags;
          switch (S.tag) {
            case 0:
            case 11:
            case 15:
              Ol(
                h,
                S,
                U,
                j,
                r
              ), Tu(8, S);
              break;
            case 23:
              break;
            case 22:
              var re = S.stateNode;
              S.memoizedState !== null ? re._visibility & 4 ? Ol(
                h,
                S,
                U,
                j,
                r
              ) : Uu(
                h,
                S
              ) : (re._visibility |= 4, Ol(
                h,
                S,
                U,
                j,
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
                j,
                r
              ), r && P & 2048 && hr(S.alternate, S);
              break;
            default:
              Ol(
                h,
                S,
                U,
                j,
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
                Uu(a, i), r & 2048 && hr(
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
      function Mu(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
          if (t !== null)
            for (var a = 0; a < t.length; a++) {
              var i = t[a];
              Gt = i, bf(
                i,
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
            Mu(e), e.flags & 2048 && hn(9, e, e.return);
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
              Gt = i, bf(
                i,
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
              hn(8, t, t.return), ui(t);
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
              var r = i.sibling, h = i.return;
              if (hf(i), i === a) {
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
            throw Error(u(364));
          return t;
        }
        if (e = Ld(e), e === null) throw Error(u(362));
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
                var i = e[a++], r = i.tag, h = e[a++], S = t[h];
                if (r !== 5 && r !== 26 && r !== 27 || !Cu(i)) {
                  for (; S != null && pr(i, S); )
                    h++, S = t[h];
                  if (h === t.length) {
                    t = !0;
                    break e;
                  } else
                    for (i = i.child; i !== null; )
                      e.push(i, h), i = i.sibling;
                }
              }
              t = !1;
            }
            return t;
          case Di:
            if ((a === 5 || a === 26 || a === 27) && Xd(e.stateNode, t.value))
              return !0;
            break;
          case Ci:
            if ((a === 5 || a === 6 || a === 26 || a === 27) && (e = qd(e), e !== null && 0 <= e.indexOf(t.value)))
              return !0;
            break;
          case Ai:
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
          case Di:
            return '[role="' + e.value + '"]';
          case Ci:
            return '"' + e.value + '"';
          case Ai:
            return '[data-testname="' + e.value + '"]';
          default:
            throw Error(u(365));
        }
      }
      function _f(e, t) {
        var a = [];
        e = [e, 0];
        for (var i = 0; i < e.length; ) {
          var r = e[i++], h = r.tag, S = e[i++], U = t[S];
          if (h !== 5 && h !== 26 && h !== 27 || !Cu(r)) {
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
        if (!Au) throw Error(u(363));
        e = vr(e), e = _f(e, t), t = [], e = Array.from(e);
        for (var a = 0; a < e.length; ) {
          var i = e[a++], r = i.tag;
          if (r === 5 || r === 26 || r === 27)
            Cu(i) || t.push(i.stateNode);
          else
            for (i = i.child; i !== null; )
              e.push(i), i = i.sibling;
        }
        return t;
      }
      function la() {
        if ((ot & 2) !== 0 && Je !== 0)
          return Je & -Je;
        if (je.T !== null) {
          var e = Xl;
          return e !== 0 ? e : _e();
        }
        return Rd();
      }
      function Tf() {
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
        )), ne(e, a), ((ot & 2) === 0 || e !== st) && (e === st && ((ot & 2) === 0 && (il |= a), _t === 4 && ka(
          e,
          Je,
          Ea,
          !1
        )), ve(e));
      }
      function Uf(e, t, a) {
        if ((ot & 6) !== 0) throw Error(u(327));
        var i = !a && (t & 60) === 0 && (t & e.expiredLanes) === 0 || B(e, t), r = i ? id(e, t) : br(e, t, !0), h = i;
        do {
          if (r === 0) {
            Pl && !i && ka(e, t, 0, !1);
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
                  r = ju;
                  var j = va && U.current.memoizedState.isDehydrated;
                  if (j && (Rl(U, S).flags |= 256), S = br(
                    U,
                    S,
                    !1
                  ), S !== 2) {
                    if (eo && !j) {
                      U.errorRecoveryDisabledLanes |= h, il |= h, r = 4;
                      break e;
                    }
                    h = Va, Va = r, h !== null && gr(h);
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
              switch (i = e, r) {
                case 0:
                case 1:
                  throw Error(u(345));
                case 4:
                  if ((t & 4194176) === t) {
                    ka(
                      i,
                      t,
                      Ea,
                      !nn
                    );
                    break e;
                  }
                  break;
                case 2:
                  Va = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(u(329));
              }
              if (i.finishedWork = a, i.finishedLanes = t, (t & 62914560) === t && (h = no + 300 - Ra(), 10 < h)) {
                if (ka(
                  i,
                  t,
                  Ea,
                  !nn
                ), N(i, 0) !== 0) break e;
                i.timeoutHandle = Ad(
                  Mf.bind(
                    null,
                    i,
                    a,
                    Va,
                    Oi,
                    ao,
                    t,
                    Ea,
                    il,
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
                i,
                a,
                Va,
                Oi,
                ao,
                t,
                Ea,
                il,
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
        Va === null ? Va = e : Va.push.apply(
          Va,
          e
        );
      }
      function Mf(e, t, a, i, r, h, S, U, j, P, re, ce, pe) {
        var Ye = t.subtreeFlags;
        if ((Ye & 8192 || (Ye & 16785408) === 16785408) && (Bd(), gf(t), t = Gd(), t !== null)) {
          e.cancelPendingCommit = t(
            Bf.bind(
              null,
              e,
              a,
              i,
              r,
              S,
              U,
              j,
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
          i,
          r,
          S,
          U,
          j,
          re,
          ce,
          pe
        );
      }
      function ld(e) {
        for (var t = e; ; ) {
          var a = t.tag;
          if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
            for (var i = 0; i < a.length; i++) {
              var r = a[i], h = r.getSnapshot;
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
      function ka(e, t, a, i) {
        t &= ~to, t &= ~il, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
        for (var r = t; 0 < r; ) {
          var h = 31 - ia(r), S = 1 << h;
          i[h] = -1, r &= ~S;
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
            e = Ke, tn = ll = null, ml(e), Kl = null, Nu = 0, e = Ke;
          for (; e !== null; )
            lf(e.alternate, e), e = e.return;
          Ke = null;
        }
      }
      function Rl(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var a = e.timeoutHandle;
        a !== jr && (e.timeoutHandle = jr, Cd(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Sr(), st = e, Ke = a = mn(e.current, null), Je = t, dt = 0, ca = null, nn = !1, Pl = B(e, t), eo = !1, kl = Ea = to = il = Un = _t = 0, Va = ju = null, ao = !1, (t & 8) !== 0 && (t |= t & 32);
        var i = e.entangledLanes;
        if (i !== 0)
          for (e = e.entanglements, i &= t; 0 < i; ) {
            var r = 31 - ia(i), h = 1 << r;
            t |= e[r], i &= ~h;
          }
        return ln = t, Ce(), a;
      }
      function Af(e, t) {
        Qe = null, je.H = Ha, t === xu ? (t = mt(), dt = 3) : t === Wr ? (t = mt(), dt = 4) : dt = t === Uc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ca = t, Ke === null && (_t = 1, Ba(
          e,
          J(t, e.current)
        ));
      }
      function Cf() {
        var e = Sa.current;
        return e === null ? !0 : (Je & 4194176) === Je ? ja === null : (Je & 62914560) === Je || (Je & 536870912) !== 0 ? e === ja : !1;
      }
      function Of() {
        var e = je.H;
        return je.H = Ha, e === null ? Ha : e;
      }
      function Rf() {
        var e = je.A;
        return je.A = Jh, e;
      }
      function Er() {
        _t = 4, nn || (Je & 4194176) !== Je && Sa.current !== null || (Pl = !0), (Un & 134217727) === 0 && (il & 134217727) === 0 || st === null || ka(
          st,
          Je,
          Ea,
          !1
        );
      }
      function br(e, t, a) {
        var i = ot;
        ot |= 2;
        var r = Of(), h = Rf();
        (st !== e || Je !== t) && (Oi = null, Rl(e, t)), t = !1;
        var S = _t;
        e: do
          try {
            if (dt !== 0 && Ke !== null) {
              var U = Ke, j = ca;
              switch (dt) {
                case 8:
                  Sr(), S = 6;
                  break e;
                case 3:
                case 2:
                case 6:
                  Sa.current === null && (t = !0);
                  var P = dt;
                  if (dt = 0, ca = null, zl(e, U, j, P), a && Pl) {
                    S = 0;
                    break e;
                  }
                  break;
                default:
                  P = dt, dt = 0, ca = null, zl(e, U, j, P);
              }
            }
            ud(), S = _t;
            break;
          } catch (re) {
            Af(e, re);
          }
        while (!0);
        return t && e.shellSuspendCounter++, tn = ll = null, ot = i, je.H = r, je.A = h, Ke === null && (st = null, Je = 0, Ce()), S;
      }
      function ud() {
        for (; Ke !== null; ) zf(Ke);
      }
      function id(e, t) {
        var a = ot;
        ot |= 2;
        var i = Of(), r = Rf();
        st !== e || Je !== t ? (Oi = null, Hu = Ra() + 500, Rl(e, t)) : Pl = B(
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
                  if (Ta(h)) {
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
                  Ta(h) ? (dt = 0, ca = null, xf(t)) : (dt = 0, ca = null, zl(e, t, h, 7));
                  break;
                case 5:
                  var S = null;
                  switch (Ke.tag) {
                    case 26:
                      S = Ke.memoizedState;
                    case 5:
                    case 27:
                      var U = Ke, j = U.type, P = U.pendingProps;
                      if (S ? yc(S) : ec(j, P)) {
                        dt = 0, ca = null;
                        var re = U.sibling;
                        if (re !== null) Ke = re;
                        else {
                          var ce = U.return;
                          ce !== null ? (Ke = ce, ii(ce)) : Ke = null;
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
                  Sr(), _t = 6;
                  break e;
                default:
                  throw Error(u(462));
              }
            }
            rd();
            break;
          } catch (pe) {
            Af(e, pe);
          }
        while (!0);
        return tn = ll = null, je.H = i, je.A = r, ot = a, Ke !== null ? 0 : (st = null, Je = 0, Ce(), _t);
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
        e.memoizedProps = e.pendingProps, t === null ? ii(e) : Ke = t;
      }
      function xf(e) {
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
              Je
            );
            break;
          case 11:
            t = Su(
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
        e.memoizedProps = e.pendingProps, t === null ? ii(e) : Ke = t;
      }
      function zl(e, t, a, i) {
        tn = ll = null, ml(t), Kl = null, Nu = 0;
        var r = t.return;
        try {
          if (Ji(
            e,
            r,
            t,
            a,
            Je
          )) {
            _t = 1, Ba(
              e,
              J(a, e.current)
            ), Ke = null;
            return;
          }
        } catch (h) {
          if (r !== null) throw Ke = r, h;
          _t = 1, Ba(
            e,
            J(a, e.current)
          ), Ke = null;
          return;
        }
        t.flags & 32768 ? (Pe || i === 1 ? e = !0 : Pl || (Je & 536870912) !== 0 ? e = !1 : (nn = e = !0, (i === 2 || i === 3 || i === 6) && (i = Sa.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Nf(t, e)) : ii(t);
      }
      function ii(e) {
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
        _t === 0 && (_t = 5);
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
        _t = 6, Ke = null;
      }
      function Bf(e, t, a, i, r, h, S, U, j, P) {
        var re = je.T, ce = kn();
        try {
          $t(2), je.T = null, od(
            e,
            t,
            a,
            i,
            ce,
            r,
            h,
            S,
            U,
            j,
            P
          );
        } finally {
          je.T = re, $t(ce);
        }
      }
      function od(e, t, a, i, r, h, S, U) {
        do
          Wn();
        while (rl !== null);
        if ((ot & 6) !== 0) throw Error(u(327));
        var j = e.finishedWork;
        if (i = e.finishedLanes, j === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, j === e.current) throw Error(u(177));
        e.callbackNode = null, e.callbackPriority = 0, e.cancelPendingCommit = null;
        var P = j.lanes | j.childLanes;
        if (P |= Fr, G(
          e,
          i,
          P,
          h,
          S,
          U
        ), e === st && (Ke = st = null, Je = 0), (j.subtreeFlags & 10256) === 0 && (j.flags & 10256) === 0 || Ri || (Ri = !0, lo = P, uo = a, dd(Xr, function() {
          return Wn(), null;
        })), a = (j.flags & 15990) !== 0, (j.subtreeFlags & 15990) !== 0 || a ? (a = je.T, je.T = null, h = kn(), $t(2), S = ot, ot |= 4, ad(e, j), pf(j, e), Md(e.containerInfo), e.current = j, df(e, j.alternate, j), Hh(), ot = S, $t(h), je.T = a) : e.current = j, Ri ? (Ri = !1, rl = e, Vu = i) : Gf(e, P), P = e.pendingLanes, P === 0 && (Mn = null), H(j.stateNode), ve(e), t !== null)
          for (r = e.onRecoverableError, j = 0; j < t.length; j++)
            P = t[j], r(P.value, {
              componentStack: P.stack
            });
        return (Vu & 3) !== 0 && Wn(), P = e.pendingLanes, (i & 4194218) !== 0 && (P & 42) !== 0 ? e === io ? Lu++ : (Lu = 0, io = e) : Lu = 0, $(0), null;
      }
      function Gf(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, bu(t)));
      }
      function Wn() {
        if (rl !== null) {
          var e = rl, t = lo;
          lo = 0;
          var a = ue(Vu), i = 32 > a ? 32 : a;
          a = je.T;
          var r = kn();
          try {
            if ($t(i), je.T = null, rl === null)
              var h = !1;
            else {
              i = uo, uo = null;
              var S = rl, U = Vu;
              if (rl = null, Vu = 0, (ot & 6) !== 0)
                throw Error(u(331));
              var j = ot;
              if (ot |= 4, Ef(S.current), yf(
                S,
                S.current,
                U,
                i
              ), ot = j, $(0, !1), ra && typeof ra.onPostCommitFiberRoot == "function")
                try {
                  ra.onPostCommitFiberRoot(Ou, S);
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
      function ut(e, t, a) {
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
              var i = t.stateNode;
              if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Mn === null || !Mn.has(i))) {
                e = J(a, e), a = Al(2), i = Ge(t, a, 2), i !== null && (qt(
                  a,
                  i,
                  t,
                  e
                ), ne(i, 2), ve(i));
                break;
              }
            }
            t = t.return;
          }
      }
      function _r(e, t, a) {
        var i = e.pingCache;
        if (i === null) {
          i = e.pingCache = new wh();
          var r = /* @__PURE__ */ new Set();
          i.set(t, r);
        } else
          r = i.get(t), r === void 0 && (r = /* @__PURE__ */ new Set(), i.set(t, r));
        r.has(a) || (eo = !0, r.add(a), e = fd.bind(null, e, t, a), t.then(e, e));
      }
      function fd(e, t, a) {
        var i = e.pingCache;
        i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, st === e && (Je & a) === a && (_t === 4 || _t === 3 && (Je & 62914560) === Je && 300 > Ra() - no ? (ot & 2) === 0 && Rl(e, 0) : to |= a, kl === Je && (kl = 0)), ve(e);
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
        i !== null && i.delete(t), Hf(e, a);
      }
      function dd(e, t) {
        return hi(e, t);
      }
      function hd(e, t, a, i) {
        this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Tr(e) {
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
      function ri(e, t, a, i, r, h) {
        var S = 0;
        if (i = e, typeof e == "function") Tr(e) && (S = 1);
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
        return t = p(S, a, t, r), t.elementType = e, t.type = i, t.lanes = h, t;
      }
      function Pn(e, t, a, i) {
        return e = p(7, e, i, t), e.lanes = a, e;
      }
      function Lf(e, t, a, i) {
        e = p(22, e, i, t), e.elementType = Jf, e.lanes = a;
        var r = {
          _visibility: 1,
          _pendingVisibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
          _current: null,
          detach: function() {
            var h = r._current;
            if (h === null) throw Error(u(456));
            if ((r._pendingVisibility & 2) === 0) {
              var S = be(h, 2);
              S !== null && (r._pendingVisibility |= 2, Jt(S, h, 2));
            }
          },
          attach: function() {
            var h = r._current;
            if (h === null) throw Error(u(456));
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
      function vd(e, t, a, i, r, h, S, U) {
        this.tag = 1, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = jr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Q(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Q(0), this.hiddenUpdates = Q(null), this.identifierPrefix = i, this.onUncaughtError = r, this.onCaughtError = h, this.onRecoverableError = S, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = U, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function Yf(e, t, a, i, r, h, S, U, j, P, re, ce) {
        return e = new vd(
          e,
          t,
          a,
          S,
          U,
          j,
          P,
          ce
        ), t = 1, h === !0 && (t |= 24), h = p(3, null, null, t), e.current = h, h.stateNode = e, t = nr(), t.refCount++, e.pooledCache = t, t.refCount++, h.memoizedState = {
          element: i,
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
          throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
        return e = E(t), e = e !== null ? _(e) : null, e === null ? null : Du(e.stateNode);
      }
      function Qf(e, t, a, i, r, h) {
        r = qf(r), i.context === null ? i.context = r : i.pendingContext = r, i = Be(t), i.payload = { element: a }, h = h === void 0 ? null : h, h !== null && (i.callback = h), a = Ge(e, i, t), a !== null && (Jt(a, e, t), Me(a, e, t));
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
      var Fe = {}, pd = sl, ua = gs(), Ar = Object.assign, md = Symbol.for("react.element"), oi = Symbol.for("react.transitional.element"), xl = Symbol.for("react.portal"), Nl = Symbol.for("react.fragment"), Kf = Symbol.for("react.strict_mode"), Cr = Symbol.for("react.profiler"), yd = Symbol.for("react.provider"), Zf = Symbol.for("react.consumer"), yn = Symbol.for("react.context"), Or = Symbol.for("react.forward_ref"), Rr = Symbol.for("react.suspense"), zr = Symbol.for("react.suspense_list"), xr = Symbol.for("react.memo"), gn = Symbol.for("react.lazy"), Jf = Symbol.for("react.offscreen"), gd = Symbol.for("react.memo_cache_sentinel"), wf = Symbol.iterator, Sd = Symbol.for("react.client.reference"), je = pd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Nr, Wf, Br = !1, fi = Array.isArray, Ed = l.rendererVersion, bd = l.rendererPackageName, Pf = l.extraDevToolsConfig, Du = l.getPublicInstance, _d = l.getRootHostContext, Td = l.getChildHostContext, Ud = l.prepareForCommit, Md = l.resetAfterCommit, Dd = l.createInstance, Gr = l.appendInitialChild, kf = l.finalizeInitialChildren, ci = l.shouldSetTextContent, If = l.createTextInstance, Ad = l.scheduleTimeout, Cd = l.cancelTimeout, jr = l.noTimeout, Ia = l.isPrimaryRenderer;
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
      var Hd = l.supportsMicrotasks, Vd = l.scheduleMicrotask, Au = l.supportsTestSelectors, Ld = l.findFiberRoot, Yd = l.getBoundingRect, qd = l.getTextContent, Cu = l.isHiddenSubtree, Xd = l.matchAccessibilityRole, Qd = l.setFocusIfFocusable, Fd = l.setupIntersectionObserver, Kd = l.appendChild, Zd = l.appendChildToContainer, Jd = l.commitTextUpdate, wd = l.commitMount, Wd = l.commitUpdate, Pd = l.insertBefore, kd = l.insertInContainerBefore, Id = l.removeChild, $d = l.removeChildFromContainer, ac = l.resetTextContent, eh = l.hideInstance, th = l.hideTextInstance, ah = l.unhideInstance, nh = l.unhideTextInstance, lh = l.clearContainer, uh = l.cloneInstance, nc = l.createContainerChildSet, lc = l.appendChildToContainerChildSet, ih = l.finalizeContainerChildren, uc = l.replaceContainerChildren, ic = l.cloneHiddenInstance, rc = l.cloneHiddenTextInstance, Hr = l.isSuspenseInstancePending, Vr = l.isSuspenseInstanceFallback, rh = l.getSuspenseInstanceFallbackErrorDetails, oh = l.registerSuspenseInstanceRetry, fh = l.canHydrateFormStateMarker, ch = l.isFormStateMarkerMatching, oc = l.getNextHydratableSibling, fc = l.getFirstHydratableChild, sh = l.getFirstHydratableChildWithinContainer, dh = l.getFirstHydratableChildWithinSuspenseInstance, hh = l.canHydrateInstance, vh = l.canHydrateTextInstance, ph = l.canHydrateSuspenseInstance, mh = l.hydrateInstance, yh = l.hydrateTextInstance, gh = l.hydrateSuspenseInstance, Sh = l.getNextHydratableInstanceAfterSuspenseInstance, Eh = l.commitHydratedContainer, bh = l.commitHydratedSuspenseInstance, _h = l.clearSuspenseBoundary, Th = l.clearSuspenseBoundaryFromContainer, cc = l.shouldDeleteUnhydratedTailInstances;
      l.diffHydratedPropsForDevWarnings, l.diffHydratedTextForDevWarnings, l.describeHydratableInstanceForDevWarnings;
      var Uh = l.validateHydratableInstance, Mh = l.validateHydratableTextInstance, pa = l.supportsResources, sc = l.isHostHoistableType, Lr = l.getHoistableRoot, dc = l.getResource, hc = l.acquireResource, vc = l.releaseResource, Dh = l.hydrateHoistable, pc = l.mountHoistable, mc = l.unmountHoistable, Ah = l.createHoistableInstance, Ch = l.prepareToCommitHoistables, Oh = l.mayResourceSuspendCommit, yc = l.preloadResource, Rh = l.suspendResource, Ft = l.supportsSingletons, gc = l.resolveSingletonInstance, zh = l.clearSingleton, xh = l.acquireSingletonInstance, Nh = l.releaseSingletonInstance, Sc = l.isHostSingletonType, Yr = [], Gl = -1, jl = {}, ia = Math.clz32 ? Math.clz32 : z, Bh = Math.log, Gh = Math.LN2, si = 128, di = 4194304, hi = ua.unstable_scheduleCallback, qr = ua.unstable_cancelCallback, jh = ua.unstable_shouldYield, Hh = ua.unstable_requestPaint, Ra = ua.unstable_now, Ec = ua.unstable_ImmediatePriority, Vh = ua.unstable_UserBlockingPriority, Xr = ua.unstable_NormalPriority, Lh = ua.unstable_IdlePriority, Yh = ua.log, qh = ua.unstable_setDisableYieldValue, Ou = null, ra = null, oa = typeof Object.is == "function" ? Object.is : te, bc = /* @__PURE__ */ new WeakMap(), Hl = [], Vl = 0, vi = null, pi = 0, ma = [], ya = 0, $n = null, $a = 1, en = "", Vt = D(null), Ru = D(null), En = D(null), mi = D(null), wt = null, Kt = null, Pe = !1, za = null, Ga = !1, Qr = Error(u(519)), ga = [], Ll = 0, Fr = 0, yi = null, Yl = null, Kr = !1, gi = !1, Zr = !1, ql = 0, zu = null, Jr = 0, Xl = 0, Ql = null, bn = !1, wr = !1, Xh = Object.prototype.hasOwnProperty, xu = Error(u(460)), Wr = Error(u(474)), Si = { then: function() {
      } }, Fl = null, Kl = null, Nu = 0, el = Ct(!0), _c = Ct(!1), Zl = D(null), Ei = D(0), Sa = D(null), ja = null, zt = D(0), _n = 0, Qe = null, rt = null, Dt = null, bi = !1, Jl = !1, tl = !1, _i = 0, Bu = 0, wl = null, Qh = 0, Pr = function() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }, Ha = {
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
      Ha.useCacheRefresh = lt, Ha.useMemoCache = lt, Ha.useHostTransitionStatus = lt, Ha.useFormState = lt, Ha.useActionState = lt, Ha.useOptimistic = lt;
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
          var i = e();
          if (tl) {
            I(!0);
            try {
              e();
            } finally {
              I(!1);
            }
          }
          return a.memoizedState = [i, t], i;
        },
        useReducer: function(e, t, a) {
          var i = Rt();
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
          e = Nn(e);
          var t = e.queue, a = pu.bind(
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
            if (a = t(), st === null)
              throw Error(u(349));
            (Je & 60) !== 0 || Rn(i, t, a);
          }
          r.memoizedState = a;
          var h = { value: a, getSnapshot: t };
          return r.queue = h, Tl(ru.bind(null, i, h, e), [
            e
          ]), i.flags |= 2048, Aa(
            9,
            zn.bind(
              null,
              i,
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
            var a = en, i = $a;
            a = (i & ~(1 << 32 - ia(i) - 1)).toString(32) + a, t = ":" + t + "R" + a, a = _i++, 0 < a && (t += "H" + a.toString(32)), t += ":";
          } else
            a = Qh++, t = ":" + t + "r" + a.toString(32) + ":";
          return e.memoizedState = t;
        },
        useCacheRefresh: function() {
          return Rt().memoizedState = vu.bind(
            null,
            Qe
          );
        }
      };
      al.useMemoCache = Ya, al.useHostTransitionStatus = Qn, al.useFormState = Pu, al.useActionState = Pu, al.useOptimistic = function(e) {
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
      var Tn = {
        readContext: Xt,
        use: Te,
        useCallback: su,
        useContext: Xt,
        useEffect: Xa,
        useImperativeHandle: Fa,
        useInsertionEffect: cu,
        useLayoutEffect: Yn,
        useMemo: fn,
        useReducer: Da,
        useRef: _l,
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
        useId: hu
      };
      Tn.useCacheRefresh = Pt, Tn.useMemoCache = Ya, Tn.useHostTransitionStatus = Qn, Tn.useFormState = jn, Tn.useActionState = jn, Tn.useOptimistic = function(e, t) {
        var a = vt();
        return fu(a, rt, e, t);
      };
      var nl = {
        readContext: Xt,
        use: Te,
        useCallback: su,
        useContext: Xt,
        useEffect: Xa,
        useImperativeHandle: Fa,
        useInsertionEffect: cu,
        useLayoutEffect: Yn,
        useMemo: fn,
        useReducer: yl,
        useRef: _l,
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
        useId: hu
      };
      nl.useCacheRefresh = Pt, nl.useMemoCache = Ya, nl.useHostTransitionStatus = Qn, nl.useFormState = Hn, nl.useActionState = Hn, nl.useOptimistic = function(e, t) {
        var a = vt();
        return rt !== null ? fu(a, rt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
      };
      var kr = {
        isMounted: function(e) {
          return (e = e._reactInternals) ? y(e) === e : !1;
        },
        enqueueSetState: function(e, t, a) {
          e = e._reactInternals;
          var i = la(), r = Be(i);
          r.payload = t, a != null && (r.callback = a), t = Ge(e, r, i), t !== null && (Jt(t, e, i), Me(t, e, i));
        },
        enqueueReplaceState: function(e, t, a) {
          e = e._reactInternals;
          var i = la(), r = Be(i);
          r.tag = 1, r.payload = t, a != null && (r.callback = a), t = Ge(e, r, i), t !== null && (Jt(t, e, i), Me(t, e, i));
        },
        enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var a = la(), i = Be(a);
          i.tag = 2, t != null && (i.callback = t), t = Ge(e, i, a), t !== null && (Jt(t, e, a), Me(t, e, a));
        }
      }, Tc = typeof reportError == "function" ? reportError : function(e) {
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
      }, Uc = Error(u(461)), Bt = !1, Ir = { dehydrated: null, treeContext: null, retryLane: 0 }, Ti = D(null), ll = null, tn = null, Fh = typeof AbortController < "u" ? AbortController : function() {
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
      }, Kh = ua.unstable_scheduleCallback, Zh = ua.unstable_NormalPriority, Et = {
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
      var ul = D(null), an = !1, bt = !1, $r = !1, Dc = typeof WeakSet == "function" ? WeakSet : Set, Gt = null, Ac = !1, At = null, fa = !1, xa = null, Wl = 8192, Jh = {
        getCacheForType: function(e) {
          var t = Xt(Et), a = t.data.get(e);
          return a === void 0 && (a = e(), t.data.set(e, a)), a;
        }
      }, Ui = 0, Mi = 1, Di = 2, Ai = 3, Ci = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var Gu = Symbol.for;
        Ui = Gu("selector.component"), Mi = Gu("selector.has_pseudo_class"), Di = Gu("selector.role"), Ai = Gu("selector.test_id"), Ci = Gu("selector.text");
      }
      var wh = typeof WeakMap == "function" ? WeakMap : Map, ot = 0, st = null, Ke = null, Je = 0, dt = 0, ca = null, nn = !1, Pl = !1, eo = !1, ln = 0, _t = 0, Un = 0, il = 0, to = 0, Ea = 0, kl = 0, ju = null, Va = null, ao = !1, no = 0, Hu = 1 / 0, Oi = null, Mn = null, Ri = !1, rl = null, Vu = 0, lo = 0, uo = null, Lu = 0, io = null;
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
                  var a = 1 << 31 - ia(t);
                  e.entanglements[1] |= a, t &= ~a;
                }
                ve(e), (ot & 6) === 0 && (Hu = Ra() + 500, $(0));
              }
            }
            break;
          case 13:
            t = be(e, 2), t !== null && Jt(t, e, 2), Df(), Dr(e, 2);
        }
      }, Fe.batchedUpdates = function(e, t) {
        return e(t);
      }, Fe.createComponentSelector = function(e) {
        return { $$typeof: Ui, value: e };
      }, Fe.createContainer = function(e, t, a, i, r, h, S, U, j, P) {
        return Yf(
          e,
          t,
          !1,
          null,
          a,
          i,
          h,
          S,
          U,
          j,
          P,
          null
        );
      }, Fe.createHasPseudoClassSelector = function(e) {
        return { $$typeof: Mi, value: e };
      }, Fe.createHydrationContainer = function(e, t, a, i, r, h, S, U, j, P, re, ce, pe) {
        return e = Yf(
          a,
          i,
          !0,
          e,
          r,
          h,
          U,
          j,
          P,
          re,
          ce,
          pe
        ), e.context = qf(null), a = e.current, i = la(), r = Be(i), r.callback = t ?? null, Ge(a, r, i), e.current.lanes = i, ne(e, i), ve(e), e;
      }, Fe.createPortal = function(e, t, a) {
        var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: xl,
          key: i == null ? null : "" + i,
          children: e,
          containerInfo: t,
          implementation: a
        };
      }, Fe.createRoleSelector = function(e) {
        return { $$typeof: Di, value: e };
      }, Fe.createTestNameSelector = function(e) {
        return { $$typeof: Ai, value: e };
      }, Fe.createTextSelector = function(e) {
        return { $$typeof: Ci, value: e };
      }, Fe.defaultOnCaughtError = function(e) {
        console.error(e);
      }, Fe.defaultOnRecoverableError = function(e) {
        Tc(e);
      }, Fe.defaultOnUncaughtError = function(e) {
        Tc(e);
      }, Fe.deferredUpdates = function(e) {
        var t = je.T, a = kn();
        try {
          return $t(32), je.T = null, e();
        } finally {
          $t(a), je.T = t;
        }
      }, Fe.discreteUpdates = function(e, t, a, i, r) {
        var h = je.T, S = kn();
        try {
          return $t(2), je.T = null, e(t, a, i, r);
        } finally {
          $t(S), je.T = h, ot === 0 && (Hu = Ra() + 500);
        }
      }, Fe.findAllNodes = yr, Fe.findBoundingRects = function(e, t) {
        if (!Au) throw Error(u(363));
        t = yr(e, t), e = [];
        for (var a = 0; a < t.length; a++)
          e.push(Yd(t[a]));
        for (t = e.length - 1; 0 < t; t--) {
          a = e[t];
          for (var i = a.x, r = i + a.width, h = a.y, S = h + a.height, U = t - 1; 0 <= U; U--)
            if (t !== U) {
              var j = e[U], P = j.x, re = P + j.width, ce = j.y, pe = ce + j.height;
              if (i >= P && h >= ce && r <= re && S <= pe) {
                e.splice(t, 1);
                break;
              } else if (i !== P || a.width !== j.width || pe < h || ce > S) {
                if (!(h !== ce || a.height !== j.height || re < i || P > r)) {
                  P > i && (j.width += P - i, j.x = i), re < r && (j.width = r - P), e.splice(t, 1);
                  break;
                }
              } else {
                ce > h && (j.height += ce - h, j.y = h), pe < S && (j.height = S - ce), e.splice(t, 1);
                break;
              }
            }
        }
        return e;
      }, Fe.findHostInstance = Xf, Fe.findHostInstanceWithNoPortals = function(e) {
        return e = E(e), e = e !== null ? M(e) : null, e === null ? null : Du(e.stateNode);
      }, Fe.findHostInstanceWithWarning = function(e) {
        return Xf(e);
      }, Fe.flushPassiveEffects = Wn, Fe.flushSyncFromReconciler = function(e) {
        var t = ot;
        ot |= 1;
        var a = je.T, i = kn();
        try {
          if ($t(2), je.T = null, e)
            return e();
        } finally {
          $t(i), je.T = a, ot = t, (ot & 6) === 0 && $(0);
        }
      }, Fe.flushSyncWork = Df, Fe.focusWithin = function(e, t) {
        if (!Au) throw Error(u(363));
        for (e = vr(e), t = _f(e, t), t = Array.from(t), e = 0; e < t.length; ) {
          var a = t[e++], i = a.tag;
          if (!Cu(a)) {
            if ((i === 5 || i === 26 || i === 27) && Qd(a.stateNode))
              return !0;
            for (a = a.child; a !== null; )
              t.push(a), a = a.sibling;
          }
        }
        return !1;
      }, Fe.getFindAllNodesFailureDescription = function(e, t) {
        if (!Au) throw Error(u(363));
        var a = 0, i = [];
        e = [vr(e), 0];
        for (var r = 0; r < e.length; ) {
          var h = e[r++], S = h.tag, U = e[r++], j = t[U];
          if ((S !== 5 && S !== 26 && S !== 27 || !Cu(h)) && (pr(h, j) && (i.push(mr(j)), U++, U > a && (a = U)), U < t.length))
            for (h = h.child; h !== null; )
              e.push(h, U), h = h.sibling;
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
            return Du(e.child.stateNode);
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
        if (!Au) throw Error(u(363));
        e = yr(e, t);
        var r = Fd(
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
            var h = Xn(e).next.queue;
            return Za(
              e,
              h,
              {},
              la()
            ), a(i);
          }
        );
      }, Fe.updateContainer = function(e, t, a, i) {
        var r = t.current, h = la();
        return Qf(
          r,
          h,
          e,
          t,
          a,
          i
        ), h;
      }, Fe.updateContainerSync = function(e, t, a, i) {
        return t.tag === 0 && Wn(), Qf(
          t.current,
          2,
          e,
          t,
          a,
          i
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
    const u = qo(m, l, p);
    if (u) return u;
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
      const m = qo(p, !1, (u) => {
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
function _s(o) {
  let l = o.root;
  for (; l.getState().previousRoot; ) l = l.getState().previousRoot;
  return l;
}
const Ts = (o) => o && o.isOrthographicCamera, Vv = (o) => o && o.hasOwnProperty("current"), Lv = (o) => o != null && (typeof o == "string" || typeof o == "number" || o.isColor), wu = /* @__PURE__ */ ((o, l) => typeof window < "u" && (((o = window.document) == null ? void 0 : o.createElement) || ((l = window.navigator) == null ? void 0 : l.product) === "ReactNative"))() ? qe.useLayoutEffect : qe.useEffect;
function Us(o) {
  const l = qe.useRef(o);
  return wu(() => void (l.current = o), [o]), l;
}
function Yv() {
  const o = bs(), l = Hv();
  return qe.useMemo(() => ({
    children: p
  }) => {
    const u = !!qo(o, !0, (n) => n.type === qe.StrictMode) ? qe.StrictMode : qe.Fragment;
    return /* @__PURE__ */ he(u, {
      children: /* @__PURE__ */ he(l, {
        children: p
      })
    });
  }, [o, l]);
}
function qv({
  set: o
}) {
  return wu(() => (o(new Promise(() => null)), () => o(!1)), [o]), null;
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
function Yi(o, l, p, m) {
  const u = o;
  let n = u?.__r3f;
  return n || (n = {
    root: l,
    type: p,
    parent: null,
    children: [],
    props: Kv(m),
    object: u,
    eventCount: 0,
    handlers: {},
    isHidden: !1
  }, u && (u.__r3f = n)), n;
}
function Ju(o, l) {
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
const Qc = /-\d+$/;
function qi(o, l) {
  if (pt.str(l.props.attach)) {
    if (Qc.test(l.props.attach)) {
      const u = l.props.attach.replace(Qc, ""), {
        root: n,
        key: s
      } = Ju(o.object, u);
      Array.isArray(n[s]) || (n[s] = []);
    }
    const {
      root: p,
      key: m
    } = Ju(o.object, l.props.attach);
    l.previousAttach = p[m], p[m] = l.object;
  } else pt.fun(l.props.attach) && (l.previousAttach = l.props.attach(o.object, l.object));
}
function Xi(o, l) {
  if (pt.str(l.props.attach)) {
    const {
      root: p,
      key: m
    } = Ju(o.object, l.props.attach), u = l.previousAttach;
    u === void 0 ? delete p[m] : p[m] = u;
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
      for (const u in l)
        u.startsWith(`${m}-`) && (p[u] = l[u]);
    }
  for (const m in o.props) {
    if (Ao.includes(m) || l.hasOwnProperty(m)) continue;
    const {
      root: u,
      key: n
    } = Ju(o.object, m);
    if (u.constructor && u.constructor.length === 0) {
      const s = Zv(u);
      pt.und(s) || (p[n] = s[n]);
    } else
      p[n] = 0;
  }
  return p;
}
const wv = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"], Wv = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function An(o, l) {
  var p;
  const m = o.__r3f, u = m && _s(m).getState(), n = m?.eventCount;
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
    } = Ju(o, c);
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
      d[v] = f, u && !u.linear && wv.includes(v) && (s = d[v]) != null && s.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
      d[v].format === Le.RGBAFormat && d[v].type === Le.UnsignedByteType && (d[v].colorSpace = Le.SRGBColorSpace);
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
function Pv(o, l) {
  o.manual || (Ts(o) ? (o.left = l.width / -2, o.right = l.width / 2, o.top = l.height / 2, o.bottom = l.height / -2) : o.aspect = l.width / l.height, o.updateProjectionMatrix());
}
const Wt = (o) => o?.isObject3D;
function zi(o) {
  return (o.eventObject || o.object).uuid + "/" + o.index + o.instanceId;
}
function As(o, l, p, m) {
  const u = p.get(l);
  u && (p.delete(l), p.size === 0 && (o.delete(m), u.target.releasePointerCapture(m)));
}
function kv(o, l) {
  const {
    internal: p
  } = o.getState();
  p.interaction = p.interaction.filter((m) => m !== l), p.initialHits = p.initialHits.filter((m) => m !== l), p.hovered.forEach((m, u) => {
    (m.eventObject === l || m.object === l) && p.hovered.delete(u);
  }), p.capturedMap.forEach((m, u) => {
    As(p.capturedMap, l, m, u);
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
    function _(A) {
      const b = Il(A);
      if (!b || !b.events.enabled || b.raycaster.camera === null) return [];
      if (b.raycaster.camera === void 0) {
        var z;
        b.events.compute == null || b.events.compute(f, b, (z = b.previousRoot) == null ? void 0 : z.getState()), b.raycaster.camera === void 0 && (b.raycaster.camera = null);
      }
      return b.raycaster.camera ? b.raycaster.intersectObject(A, !0) : [];
    }
    let M = E.flatMap(_).sort((A, b) => {
      const z = Il(A.object), C = Il(b.object);
      return !z || !C ? A.distance - b.distance : C.events.priority - z.events.priority || A.distance - b.distance;
    }).filter((A) => {
      const b = zi(A);
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
        y.has(zi(A.intersection)) || g.push(A.intersection);
    return g;
  }
  function u(f, d, v, y) {
    if (f.length) {
      const g = {
        stopped: !1
      };
      for (const E of f) {
        let _ = Il(E.object);
        if (_ || E.object.traverseAncestors((M) => {
          const D = Il(M);
          if (D)
            return _ = D, !1;
        }), _) {
          const {
            raycaster: M,
            pointer: D,
            camera: A,
            internal: b
          } = _, z = new Le.Vector3(D.x, D.y, 0).unproject(A), C = (W) => {
            var Q, ne;
            return (Q = (ne = b.capturedMap.get(W)) == null ? void 0 : ne.has(E.eventObject)) != null ? Q : !1;
          }, N = (W) => {
            const Q = {
              intersection: E,
              target: d.target
            };
            b.capturedMap.has(W) ? b.capturedMap.get(W).set(E.eventObject, Q) : b.capturedMap.set(W, /* @__PURE__ */ new Map([[E.eventObject, Q]])), d.target.setPointerCapture(W);
          }, B = (W) => {
            const Q = b.capturedMap.get(W);
            Q && As(b.capturedMap, E.eventObject, Q, W);
          };
          let O = {};
          for (let W in d) {
            let Q = d[W];
            typeof Q != "function" && (O[W] = Q);
          }
          let V = {
            ...E,
            ...O,
            pointer: D,
            intersections: f,
            stopped: g.stopped,
            delta: v,
            unprojectedPoint: z,
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
              setPointerCapture: N,
              releasePointerCapture: B
            },
            currentTarget: {
              hasPointerCapture: C,
              setPointerCapture: N,
              releasePointerCapture: B
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
        if (d.hovered.delete(zi(v)), g != null && g.eventCount) {
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
      const E = f === "onPointerMove", _ = f === "onClick" || f === "onContextMenu" || f === "onDoubleClick", D = m(v, E ? p : void 0), A = _ ? l(v) : 0;
      f === "onPointerDown" && (g.initialClick = [v.offsetX, v.offsetY], g.initialHits = D.map((z) => z.eventObject)), _ && !D.length && A <= 2 && (s(v, g.interaction), y && y(v)), E && n(D);
      function b(z) {
        const C = z.eventObject, N = C.__r3f;
        if (!(N != null && N.eventCount)) return;
        const B = N.handlers;
        if (E) {
          if (B.onPointerOver || B.onPointerEnter || B.onPointerOut || B.onPointerLeave) {
            const O = zi(z), V = g.hovered.get(O);
            V ? V.stopped && z.stopPropagation() : (g.hovered.set(O, z), B.onPointerOver == null || B.onPointerOver(z), B.onPointerEnter == null || B.onPointerEnter(z));
          }
          B.onPointerMove == null || B.onPointerMove(z);
        } else {
          const O = B[f];
          O ? (!_ || g.initialHits.includes(C)) && (s(v, g.interaction.filter((V) => !g.initialHits.includes(V))), O(z)) : _ && g.initialHits.includes(C) && s(v, g.interaction.filter((V) => !g.initialHits.includes(V)));
        }
      }
      u(D, v, A, b);
    };
  }
  return {
    handlePointer: c
  };
}
const Kc = (o) => !!(o != null && o.render), Cs = /* @__PURE__ */ qe.createContext(null), $v = (o, l) => {
  const p = Mv((c, f) => {
    const d = new Le.Vector3(), v = new Le.Vector3(), y = new Le.Vector3();
    function g(A = f().camera, b = v, z = f().size) {
      const {
        width: C,
        height: N,
        top: B,
        left: O
      } = z, V = C / N;
      b.isVector3 ? y.copy(b) : y.set(...b);
      const W = A.getWorldPosition(d).distanceTo(y);
      if (Ts(A))
        return {
          width: C / A.zoom,
          height: N / A.zoom,
          top: B,
          left: O,
          factor: 1,
          distance: W,
          aspect: V
        };
      {
        const Q = A.fov * Math.PI / 180, ne = 2 * Math.tan(Q / 2) * W, G = ne * (C / N);
        return {
          width: G,
          height: ne,
          top: B,
          left: O,
          factor: C / G,
          distance: W,
          aspect: V
        };
      }
    }
    let E;
    const _ = (A) => c((b) => ({
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
          E && clearTimeout(E), A.performance.current !== A.performance.min && _(A.performance.min), E = setTimeout(() => _(f().performance.max), A.performance.debounce);
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
      setSize: (A, b, z = 0, C = 0) => {
        const N = f().camera, B = {
          width: A,
          height: b,
          top: z,
          left: C
        };
        c((O) => ({
          size: B,
          viewport: {
            ...O.viewport,
            ...g(N, v, B)
          }
        }));
      },
      setDpr: (A) => c((b) => {
        const z = Ms(A);
        return {
          viewport: {
            ...b.viewport,
            dpr: z,
            initialDpr: b.viewport.initialDpr || z
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
        subscribe: (A, b, z) => {
          const C = f().internal;
          return C.priority = C.priority + (b > 0 ? 1 : 0), C.subscribers.push({
            ref: A,
            priority: b,
            store: z
          }), C.subscribers = C.subscribers.sort((N, B) => N.priority - B.priority), () => {
            const N = f().internal;
            N != null && N.subscribers && (N.priority = N.priority - (b > 0 ? 1 : 0), N.subscribers = N.subscribers.filter((B) => B.ref !== A));
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
      gl: v,
      set: y
    } = p.getState();
    if (f.width !== u.width || f.height !== u.height || d.dpr !== n) {
      u = f, n = d.dpr, Pv(c, f), d.dpr > 0 && v.setPixelRatio(d.dpr);
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
  const p = Os(), m = p.getState().internal.subscribe, u = Us(o);
  return wu(() => m(u, l, p), [l, m, p]), null;
}
const Zc = /* @__PURE__ */ new WeakMap(), e1 = (o) => {
  var l;
  return typeof o == "function" && (o == null || (l = o.prototype) == null ? void 0 : l.constructor) === o;
};
function xs(o, l) {
  return function(p, ...m) {
    let u;
    return e1(p) ? (u = Zc.get(p), u || (u = new p(), Zc.set(p, u))) : u = p, o && o(u), Promise.all(m.map((n) => new Promise((s, c) => u.load(n, (f) => {
      Wt(f?.scene) && Object.assign(f, Qv(f.scene)), s(f);
    }, l, (f) => c(new Error(`Could not load ${n}: ${f?.message}`))))));
  };
}
function Qo(o, l, p, m) {
  const u = Array.isArray(l) ? l : [l], n = ys(xs(p, m), [o, ...u], {
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
const Ns = 0, au = {}, a1 = /^three(?=[A-Z])/, Ki = (o) => `${o[0].toUpperCase()}${o.slice(1)}`;
let n1 = 0;
const l1 = (o) => typeof o == "function";
function u1(o) {
  if (l1(o)) {
    const l = `${n1++}`;
    return au[l] = o, l;
  } else
    Object.assign(au, o);
}
function Bs(o, l) {
  const p = Ki(o), m = au[p];
  if (o !== "primitive" && !m) throw new Error(`R3F: ${p} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (o === "primitive" && !l.object) throw new Error("R3F: Primitives without 'object' are invalid!");
  if (l.args !== void 0 && !Array.isArray(l.args)) throw new Error("R3F: The args prop must be an array!");
}
function i1(o, l, p) {
  var m;
  return o = Ki(o) in au ? o : o.replace(a1, ""), Bs(o, l), o === "primitive" && (m = l.object) != null && m.__r3f && delete l.object.__r3f, Yi(l.object, p, o, l);
}
function r1(o) {
  if (!o.isHidden) {
    var l;
    o.props.attach && (l = o.parent) != null && l.object ? Xi(o.parent, o) : Wt(o.object) && (o.object.visible = !1), o.isHidden = !0, nu(o);
  }
}
function Gs(o) {
  if (o.isHidden) {
    var l;
    o.props.attach && (l = o.parent) != null && l.object ? qi(o.parent, o) : Wt(o.object) && o.props.visible !== !1 && (o.object.visible = !0), o.isHidden = !1, nu(o);
  }
}
function Fo(o, l, p) {
  const m = l.root.getState();
  if (!(!o.parent && o.object !== m.scene)) {
    if (!l.object) {
      var u, n;
      const s = au[Ki(l.type)];
      l.object = (u = l.props.object) != null ? u : new s(...(n = l.props.args) != null ? n : []), l.object.__r3f = l;
    }
    if (An(l.object, l.props), l.props.attach)
      qi(o, l);
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
    nu(l);
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
  m !== -1 && o.children.splice(m, 1), l.props.attach ? Xi(o, l) : Wt(l.object) && Wt(o.object) && (o.object.remove(l.object), kv(_s(l), l.object));
  const u = l.props.dispose !== null && p !== !1;
  for (let n = l.children.length - 1; n >= 0; n--) {
    const s = l.children[n];
    Co(l, s, u);
  }
  l.children.length = 0, delete l.object.__r3f, u && l.type !== "primitive" && l.object.type !== "Scene" && js(l.object), p === void 0 && nu(l);
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
const ji = [];
function f1() {
  for (const [p] of ji) {
    const m = p.parent;
    if (m) {
      p.props.attach ? Xi(m, p) : Wt(p.object) && Wt(m.object) && m.object.remove(p.object);
      for (const u of p.children)
        u.props.attach ? Xi(p, u) : Wt(u.object) && Wt(p.object) && p.object.remove(u.object);
    }
    p.isHidden && Gs(p), p.object.__r3f && delete p.object.__r3f, p.type !== "primitive" && js(p.object);
  }
  for (const [p, m, u] of ji) {
    p.props = m;
    const n = p.parent;
    if (n) {
      var o, l;
      const s = au[Ki(p.type)];
      p.object = (o = p.props.object) != null ? o : new s(...(l = p.props.args) != null ? l : []), p.object.__r3f = p, o1(u, p.object), An(p.object, p.props), p.props.attach ? qi(n, p) : Wt(p.object) && Wt(n.object) && n.object.add(p.object);
      for (const c of p.children)
        c.props.attach ? qi(p, c) : Wt(c.object) && Wt(p.object) && p.object.add(c.object);
      nu(p);
    }
  }
  ji.length = 0;
}
const go = () => {
}, wc = {};
let xi = Ns;
const c1 = 0, s1 = 4, Oo = /* @__PURE__ */ t1({
  isPrimaryRenderer: !1,
  warnsIfNotActing: !1,
  supportsMutation: !0,
  supportsPersistence: !1,
  supportsHydration: !1,
  createInstance: i1,
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
  commitUpdate(o, l, p, m, u) {
    var n, s, c;
    Bs(l, m);
    let f = !1;
    if ((o.type === "primitive" && p.object !== m.object || ((n = m.args) == null ? void 0 : n.length) !== ((s = p.args) == null ? void 0 : s.length) || (c = m.args) != null && c.some((v, y) => {
      var g;
      return v !== ((g = p.args) == null ? void 0 : g[y]);
    })) && (f = !0), f)
      ji.push([o, {
        ...m
      }, u]);
    else {
      const v = Jv(o, m);
      Object.keys(v).length && (Object.assign(o.props, v), An(o.object, v));
    }
    (u.sibling === null || (u.flags & s1) === c1) && f1();
  },
  finalizeInitialChildren: () => !1,
  commitMount() {
  },
  getPublicInstance: (o) => o?.object,
  prepareForCommit: () => null,
  preparePortalMount: (o) => Yi(o.getState().scene, o, "", {}),
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
    xi = o;
  },
  getCurrentUpdatePriority() {
    return xi;
  },
  resolveUpdatePriority() {
    var o;
    if (xi !== Ns) return xi;
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
}), hl = /* @__PURE__ */ new Map(), $l = {
  objects: "shallow",
  strict: !1
};
function d1(o, l) {
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
function h1(o) {
  const l = hl.get(o), p = l?.fiber, m = l?.store;
  l && console.warn("R3F.createRoot should only be called once!");
  const u = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  ), n = m || $v(xo, Pc), s = p || Oo.createContainer(
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
        scene: M,
        events: D,
        onCreated: A,
        shadows: b = !1,
        linear: z = !1,
        flat: C = !1,
        legacy: N = !1,
        orthographic: B = !1,
        frameloop: O = "always",
        dpr: V = [1, 2],
        performance: W,
        raycaster: Q,
        camera: ne,
        onPointerMissed: G
      } = y, L = n.getState(), Y = L.gl;
      if (!L.gl) {
        const T = {
          canvas: o,
          powerPreference: "high-performance",
          antialias: !0,
          alpha: !0
        }, R = typeof E == "function" ? await E(T) : E;
        Kc(R) ? Y = R : Y = new Le.WebGLRenderer({
          ...T,
          ...E
        }), L.set({
          gl: Y
        });
      }
      let ue = L.raycaster;
      ue || L.set({
        raycaster: ue = new Le.Raycaster()
      });
      const {
        params: H,
        ...I
      } = Q || {};
      if (pt.equ(I, ue, $l) || An(ue, {
        ...I
      }), pt.equ(H, ue.params, $l) || An(ue, {
        params: {
          ...ue.params,
          ...H
        }
      }), !L.camera || L.camera === f && !pt.equ(f, ne, $l)) {
        f = ne;
        const T = ne?.isCamera, R = T ? ne : B ? new Le.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new Le.PerspectiveCamera(75, 0, 0.1, 1e3);
        T || (R.position.z = 5, ne && (An(R, ne), R.manual || ("aspect" in ne || "left" in ne || "right" in ne || "bottom" in ne || "top" in ne) && (R.manual = !0, R.updateProjectionMatrix())), !L.camera && !(ne != null && ne.rotation) && R.lookAt(0, 0, 0)), L.set({
          camera: R
        }), ue.camera = R;
      }
      if (!L.scene) {
        let T;
        M != null && M.isScene ? (T = M, Yi(T, n, "", {})) : (T = new Le.Scene(), Yi(T, n, "", {}), M && An(T, M)), L.set({
          scene: T
        });
      }
      D && !L.events.handlers && L.set({
        events: D(n)
      });
      const te = d1(o, _);
      if (pt.equ(te, L.size, $l) || L.setSize(te.width, te.height, te.top, te.left), V && L.viewport.dpr !== Ms(V) && L.setDpr(V), L.frameloop !== O && L.setFrameloop(O), L.onPointerMissed || L.set({
        onPointerMissed: G
      }), W && !pt.equ(W, L.performance, $l) && L.set((T) => ({
        performance: {
          ...T.performance,
          ...W
        }
      })), !L.xr) {
        var J;
        const T = (q, F) => {
          const ae = n.getState();
          ae.frameloop !== "never" && Pc(q, !0, ae, F);
        }, R = () => {
          const q = n.getState();
          q.gl.xr.enabled = q.gl.xr.isPresenting, q.gl.xr.setAnimationLoop(q.gl.xr.isPresenting ? T : null), q.gl.xr.isPresenting || xo(q);
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
        const T = Y.shadowMap.enabled, R = Y.shadowMap.type;
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
        (T !== Y.shadowMap.enabled || R !== Y.shadowMap.type) && (Y.shadowMap.needsUpdate = !0);
      }
      return Le.ColorManagement.enabled = !N, d || (Y.outputColorSpace = z ? Le.LinearSRGBColorSpace : Le.SRGBColorSpace, Y.toneMapping = C ? Le.NoToneMapping : Le.ACESFilmicToneMapping), L.legacy !== N && L.set(() => ({
        legacy: N
      })), L.linear !== z && L.set(() => ({
        linear: z
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
  return wu(() => {
    const u = o.getState();
    u.set((n) => ({
      internal: {
        ...n.internal,
        active: !0
      }
    })), p && p(u), o.getState().events.connected || u.events.connect == null || u.events.connect(m);
  }, []), /* @__PURE__ */ he(Cs.Provider, {
    value: o,
    children: l
  });
}
function Hs(o, l) {
  const p = hl.get(o), m = p?.fiber;
  if (m) {
    const u = p?.store.getState();
    u && (u.internal.active = !1), Oo.updateContainer(null, m, null, () => {
      u && setTimeout(() => {
        try {
          var n, s, c, f;
          u.events.disconnect == null || u.events.disconnect(), (n = u.gl) == null || (s = n.renderLists) == null || s.dispose == null || s.dispose(), (c = u.gl) == null || c.forceContextLoss == null || c.forceContextLoss(), (f = u.gl) != null && f.xr && u.xr.disconnect(), Fv(u.scene), hl.delete(o);
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
function Fu(o, l) {
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
  for (let u = 0; u < Eo.length; u++)
    bo = Eo[u], bo.ref.current(bo.store.getState(), m, p);
  return !l.internal.priority && l.gl.render && l.gl.render(l.scene, l.camera), l.internal.frames = Math.max(0, l.internal.frames - 1), l.frameloop === "always" ? 1 : l.internal.frames;
}
let Qi = !1, zo = !1, _o, Wc, eu;
function Vs(o) {
  Wc = requestAnimationFrame(Vs), Qi = !0, _o = 0, Fu("before", o), zo = !0;
  for (const p of hl.values()) {
    var l;
    eu = p.store.getState(), eu.internal.active && (eu.frameloop === "always" || eu.internal.frames > 0) && !((l = eu.gl.xr) != null && l.isPresenting) && (_o += Ro(o, eu));
  }
  if (zo = !1, Fu("after", o), _o === 0)
    return Fu("tail", o), Qi = !1, cancelAnimationFrame(Wc);
}
function xo(o, l = 1) {
  var p;
  if (!o) return hl.forEach((m) => xo(m.store.getState(), l));
  (p = o.gl.xr) != null && p.isPresenting || !o.internal.active || o.frameloop === "never" || (l > 1 ? o.internal.frames = Math.min(60, o.internal.frames + l) : zo ? o.internal.frames = 2 : o.internal.frames = 1, Qi || (Qi = !0, requestAnimationFrame(Vs)));
}
function Pc(o, l = !0, p, m) {
  if (l && Fu("before", o), p) Ro(o, p, m);
  else for (const u of hl.values()) Ro(o, u.store.getState());
  l && Fu("after", o);
}
const To = {
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
    compute(p, m, u) {
      m.pointer.set(p.offsetX / m.size.width * 2 - 1, -(p.offsetY / m.size.height) * 2 + 1), m.raycaster.setFromCamera(m.pointer, m.camera);
    },
    connected: void 0,
    handlers: Object.keys(To).reduce((p, m) => ({
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
          const s = u.handlers[n], [c, f] = To[n];
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
            const n = m.handlers[u], [s] = To[u];
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
function kc(o, l) {
  let p;
  return (...m) => {
    window.clearTimeout(p), p = window.setTimeout(() => o(...m), l);
  };
}
function S1({ debounce: o, scroll: l, polyfill: p, offsetSize: m } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const u = p || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!u) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [n, s] = Na({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), c = Qu({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: n, orientationHandler: null }), f = o ? typeof o == "number" ? o : o.scroll : null, d = o ? typeof o == "number" ? o : o.resize : null, v = Qu(!1);
  _a(() => (v.current = !0, () => void (v.current = !1)));
  const [y, g, E] = ds(() => {
    const A = () => {
      if (!c.current.element) return;
      const { left: b, top: z, width: C, height: N, bottom: B, right: O, x: V, y: W } = c.current.element.getBoundingClientRect(), Q = { left: b, top: z, width: C, height: N, bottom: B, right: O, x: V, y: W };
      c.current.element instanceof HTMLElement && m && (Q.height = c.current.element.offsetHeight, Q.width = c.current.element.offsetWidth), Object.freeze(Q), v.current && !T1(c.current.lastBounds, Q) && s(c.current.lastBounds = Q);
    };
    return [A, d ? kc(A, d) : A, f ? kc(A, f) : A];
  }, [s, m, f, d]);
  function _() {
    c.current.scrollContainers && (c.current.scrollContainers.forEach((A) => A.removeEventListener("scroll", E, !0)), c.current.scrollContainers = null), c.current.resizeObserver && (c.current.resizeObserver.disconnect(), c.current.resizeObserver = null), c.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", c.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", c.current.orientationHandler));
  }
  function M() {
    c.current.element && (c.current.resizeObserver = new u(E), c.current.resizeObserver.observe(c.current.element), l && c.current.scrollContainers && c.current.scrollContainers.forEach((A) => A.addEventListener("scroll", E, { capture: !0, passive: !0 })), c.current.orientationHandler = () => {
      E();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", c.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", c.current.orientationHandler));
  }
  const D = (A) => {
    !A || A === c.current.element || (_(), c.current.element = A, c.current.scrollContainers = Ls(A), M());
  };
  return b1(E, !!l), E1(g), _a(() => {
    _(), M();
  }, [l, E, g]), _a(() => _, []), [D, n, y];
}
function E1(o) {
  _a(() => {
    const l = o;
    return window.addEventListener("resize", l), () => void window.removeEventListener("resize", l);
  }, [o]);
}
function b1(o, l) {
  _a(() => {
    if (l) {
      const p = o;
      return window.addEventListener("scroll", p, { capture: !0, passive: !0 }), () => void window.removeEventListener("scroll", p, !0);
    }
  }, [o, l]);
}
function Ls(o) {
  const l = [];
  if (!o || o === document.body) return l;
  const { overflow: p, overflowX: m, overflowY: u } = window.getComputedStyle(o);
  return [p, m, u].some((n) => n === "auto" || n === "scroll") && l.push(o), [...l, ...Ls(o.parentElement)];
}
const _1 = ["x", "y", "top", "bottom", "left", "right", "width", "height"], T1 = (o, l) => _1.every((p) => o[p] === l[p]);
function U1({
  ref: o,
  children: l,
  fallback: p,
  resize: m,
  style: u,
  gl: n,
  events: s = g1,
  eventSource: c,
  eventPrefix: f,
  shadows: d,
  linear: v,
  flat: y,
  legacy: g,
  orthographic: E,
  frameloop: _,
  dpr: M,
  performance: D,
  raycaster: A,
  camera: b,
  scene: z,
  onPointerMissed: C,
  onCreated: N,
  ...B
}) {
  qe.useMemo(() => u1(Le), []);
  const O = Yv(), [V, W] = S1({
    scroll: !0,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...m
  }), Q = qe.useRef(null), ne = qe.useRef(null);
  qe.useImperativeHandle(o, () => Q.current);
  const G = Us(C), [L, Y] = qe.useState(!1), [ue, H] = qe.useState(!1);
  if (L) throw L;
  if (ue) throw ue;
  const I = qe.useRef(null);
  return wu(() => {
    const J = Q.current;
    if (W.width > 0 && W.height > 0 && J) {
      I.current || (I.current = h1(J));
      async function w() {
        await I.current.configure({
          gl: n,
          scene: z,
          events: s,
          shadows: d,
          linear: v,
          flat: y,
          legacy: g,
          orthographic: E,
          frameloop: _,
          dpr: M,
          performance: D,
          raycaster: A,
          camera: b,
          size: W,
          // Pass mutable reference to onPointerMissed so it's free to update
          onPointerMissed: (...T) => G.current == null ? void 0 : G.current(...T),
          onCreated: (T) => {
            T.events.connect == null || T.events.connect(c ? Vv(c) ? c.current : c : ne.current), f && T.setEvents({
              compute: (R, K) => {
                const q = R[f + "X"], F = R[f + "Y"];
                K.pointer.set(q / K.size.width * 2 - 1, -(F / K.size.height) * 2 + 1), K.raycaster.setFromCamera(K.pointer, K.camera);
              }
            }), N?.(T);
          }
        }), I.current.render(/* @__PURE__ */ he(O, {
          children: /* @__PURE__ */ he(Xv, {
            set: H,
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
      ...u
    },
    ...B,
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
  function l(u, n) {
    var s = u.id, c = u.name, f = u.dependencies;
    f === void 0 && (f = []);
    var d = u.init;
    d === void 0 && (d = function() {
    });
    var v = u.getTransferables;
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
  function p(u, n) {
    var s, c = u.id, f = u.args;
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
}, C1 = 0, O1 = 0, Uo = !1, Ku = /* @__PURE__ */ Object.create(null), Zu = /* @__PURE__ */ Object.create(null), Bo = /* @__PURE__ */ Object.create(null);
function lu(o) {
  if ((!o || typeof o.init != "function") && !Uo)
    throw new Error("requires `options.init` function");
  var l = o.dependencies, p = o.init, m = o.getTransferables, u = o.workerId, n = A1(o);
  u == null && (u = "#default");
  var s = "workerModule" + ++C1, c = o.name || s, f = null;
  l = l && l.map(function(v) {
    return typeof v == "function" && !v.workerModuleData && (Uo = !0, v = lu({
      workerId: u,
      name: "<" + c + "> function dependency: " + v.name,
      init: `function(){return (
` + Hi(v) + `
)}`
    }), Uo = !1), v && v.workerModuleData && (v = v.workerModuleData), v;
  });
  function d() {
    for (var v = [], y = arguments.length; y--; ) v[y] = arguments[y];
    if (!Ys())
      return n.apply(void 0, v);
    if (!f) {
      f = Ic(u, "registerModule", d.workerModuleData);
      var g = function() {
        f = null, Zu[u].delete(g);
      };
      (Zu[u] || (Zu[u] = /* @__PURE__ */ new Set())).add(g);
    }
    return f.then(function(E) {
      var _ = E.isCallable;
      if (_)
        return Ic(u, "callModule", { id: s, args: v });
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
function R1(o) {
  Zu[o] && Zu[o].forEach(function(l) {
    l();
  }), Ku[o] && (Ku[o].terminate(), delete Ku[o]);
}
function Hi(o) {
  var l = o.toString();
  return !/^function/.test(l) && /^\w+\s*\(/.test(l) && (l = "function " + l), l;
}
function z1(o) {
  var l = Ku[o];
  if (!l) {
    var p = Hi(D1);
    l = Ku[o] = new Worker(
      URL.createObjectURL(
        new Blob(
          ["/** Worker Module Bootstrap: " + o.replace(/\*/g, "") + ` **/

;(` + p + ")()"],
          { type: "application/javascript" }
        )
      )
    ), l.onmessage = function(m) {
      var u = m.data, n = u.messageId, s = Bo[n];
      if (!s)
        throw new Error("WorkerModule response with empty or unknown messageId");
      delete Bo[n], s(u);
    };
  }
  return l;
}
function Ic(o, l, p) {
  return new Promise(function(m, u) {
    var n = ++O1;
    Bo[n] = function(s) {
      s.success ? m(s.result) : u(new Error("Error in worker " + l + " call: " + s.error));
    }, z1(o).postMessage({
      messageId: n,
      action: l,
      data: p
    });
  });
}
function qs() {
  var o = (function(l) {
    function p(J, w, T, R, K, q, F, ae) {
      var k = 1 - F;
      ae.x = k * k * J + 2 * k * F * T + F * F * K, ae.y = k * k * w + 2 * k * F * R + F * F * q;
    }
    function m(J, w, T, R, K, q, F, ae, k, ee) {
      var se = 1 - k;
      ee.x = se * se * se * J + 3 * se * se * k * T + 3 * se * k * k * K + k * k * k * F, ee.y = se * se * se * w + 3 * se * se * k * R + 3 * se * k * k * q + k * k * k * ae;
    }
    function u(J, w) {
      for (var T = /([MLQCZ])([^MLQCZ]*)/g, R, K, q, F, ae; R = T.exec(J); ) {
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
    function n(J, w, T) {
      T === void 0 && (T = 16);
      var R = { x: 0, y: 0 };
      u(J, function(K, q, F, ae, k, ee, se, Se, oe) {
        switch (K) {
          case "L":
            w(q, F, ae, k);
            break;
          case "Q": {
            for (var le = q, Ne = F, Ce = 1; Ce < T; Ce++)
              p(
                q,
                F,
                ee,
                se,
                ae,
                k,
                Ce / (T - 1),
                R
              ), w(le, Ne, R.x, R.y), le = R.x, Ne = R.y;
            break;
          }
          case "C": {
            for (var me = q, Ee = F, be = 1; be < T; be++)
              m(
                q,
                F,
                ee,
                se,
                Se,
                oe,
                ae,
                k,
                be / (T - 1),
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
      var T = J.getContext ? J.getContext("webgl", d) : J, R = f.get(T);
      if (!R) {
        let se = function(me) {
          var Ee = q[me];
          if (!Ee && (Ee = q[me] = T.getExtension(me), !Ee))
            throw new Error(me + " not supported");
          return Ee;
        }, Se = function(me, Ee) {
          var be = T.createShader(Ee);
          return T.shaderSource(be, me), T.compileShader(be), be;
        }, oe = function(me, Ee, be, fe) {
          if (!F[me]) {
            var ge = {}, ve = {}, $ = T.createProgram();
            T.attachShader($, Se(Ee, T.VERTEX_SHADER)), T.attachShader($, Se(be, T.FRAGMENT_SHADER)), T.linkProgram($), F[me] = {
              program: $,
              transaction: function(ye) {
                T.useProgram($), ye({
                  setUniform: function(de, We) {
                    for (var _e = [], De = arguments.length - 2; De-- > 0; ) _e[De] = arguments[De + 2];
                    var Oe = ve[We] || (ve[We] = T.getUniformLocation($, We));
                    T["uniform" + de].apply(T, [Oe].concat(_e));
                  },
                  setAttribute: function(de, We, _e, De, Oe) {
                    var Ve = ge[de];
                    Ve || (Ve = ge[de] = {
                      buf: T.createBuffer(),
                      // TODO should we destroy our buffers?
                      loc: T.getAttribLocation($, de),
                      data: null
                    }), T.bindBuffer(T.ARRAY_BUFFER, Ve.buf), T.vertexAttribPointer(Ve.loc, We, T.FLOAT, !1, 0, 0), T.enableVertexAttribArray(Ve.loc), K ? T.vertexAttribDivisor(Ve.loc, De) : se("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ve.loc, De), Oe !== Ve.data && (T.bufferData(T.ARRAY_BUFFER, Oe, _e), Ve.data = Oe);
                  }
                });
              }
            };
          }
          F[me].transaction(fe);
        }, le = function(me, Ee) {
          k++;
          try {
            T.activeTexture(T.TEXTURE0 + k);
            var be = ae[me];
            be || (be = ae[me] = T.createTexture(), T.bindTexture(T.TEXTURE_2D, be), T.texParameteri(T.TEXTURE_2D, T.TEXTURE_MIN_FILTER, T.NEAREST), T.texParameteri(T.TEXTURE_2D, T.TEXTURE_MAG_FILTER, T.NEAREST)), T.bindTexture(T.TEXTURE_2D, be), Ee(be, k);
          } finally {
            k--;
          }
        }, Ne = function(me, Ee, be) {
          var fe = T.createFramebuffer();
          ee.push(fe), T.bindFramebuffer(T.FRAMEBUFFER, fe), T.activeTexture(T.TEXTURE0 + Ee), T.bindTexture(T.TEXTURE_2D, me), T.framebufferTexture2D(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_2D, me, 0);
          try {
            be(fe);
          } finally {
            T.deleteFramebuffer(fe), T.bindFramebuffer(T.FRAMEBUFFER, ee[--ee.length - 1] || null);
          }
        }, Ce = function() {
          q = {}, F = {}, ae = {}, k = -1, ee.length = 0;
        };
        var K = typeof WebGL2RenderingContext < "u" && T instanceof WebGL2RenderingContext, q = {}, F = {}, ae = {}, k = -1, ee = [];
        T.canvas.addEventListener("webglcontextlost", function(me) {
          Ce(), me.preventDefault();
        }, !1), f.set(T, R = {
          gl: T,
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
    function y(J, w, T, R, K, q, F, ae) {
      F === void 0 && (F = 15), ae === void 0 && (ae = null), v(J, function(k) {
        var ee = k.gl, se = k.withProgram, Se = k.withTexture;
        Se("copy", function(oe, le) {
          ee.texImage2D(ee.TEXTURE_2D, 0, ee.RGBA, K, q, 0, ee.RGBA, ee.UNSIGNED_BYTE, w), se("copy", s, c, function(Ne) {
            var Ce = Ne.setUniform, me = Ne.setAttribute;
            me("aUV", 2, ee.STATIC_DRAW, 0, new Float32Array([0, 0, 2, 0, 0, 2])), Ce("1i", "image", le), ee.bindFramebuffer(ee.FRAMEBUFFER, ae || null), ee.disable(ee.BLEND), ee.colorMask(F & 8, F & 4, F & 2, F & 1), ee.viewport(T, R, K, q), ee.scissor(T, R, K, q), ee.drawArrays(ee.TRIANGLES, 0, 3);
          });
        });
      });
    }
    function g(J, w, T) {
      var R = J.width, K = J.height;
      v(J, function(q) {
        var F = q.gl, ae = new Uint8Array(R * K * 4);
        F.readPixels(0, 0, R, K, F.RGBA, F.UNSIGNED_BYTE, ae), J.width = w, J.height = T, y(F, ae, 0, 0, R, K);
      });
    }
    var E = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      withWebGLContext: v,
      renderImageData: y,
      resizeWebGLCanvasWithoutClearing: g
    });
    function _(J, w, T, R, K, q) {
      q === void 0 && (q = 1);
      var F = new Uint8Array(J * w), ae = R[2] - R[0], k = R[3] - R[1], ee = [];
      n(T, function(me, Ee, be, fe) {
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
    function M(J, w, T, R, K, q, F, ae, k, ee) {
      q === void 0 && (q = 1), ae === void 0 && (ae = 0), k === void 0 && (k = 0), ee === void 0 && (ee = 0), D(J, w, T, R, K, q, F, null, ae, k, ee);
    }
    function D(J, w, T, R, K, q, F, ae, k, ee, se) {
      q === void 0 && (q = 1), k === void 0 && (k = 0), ee === void 0 && (ee = 0), se === void 0 && (se = 0);
      for (var Se = _(J, w, T, R, K, q), oe = new Uint8Array(Se.length * 4), le = 0; le < Se.length; le++)
        oe[le * 4 + se] = Se[le];
      y(F, oe, k, ee, J, w, 1 << 3 - se, ae);
    }
    function A(J, w, T, R, K, q) {
      var F = K - T, ae = q - R, k = F * F + ae * ae, ee = k ? Math.max(0, Math.min(1, ((J - T) * F + (w - R) * ae) / k)) : 0, se = J - (T + ee * F), Se = w - (R + ee * ae);
      return se * se + Se * Se;
    }
    var b = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      generate: _,
      generateIntoCanvas: M,
      generateIntoFramebuffer: D
    }), z = "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", C = "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}", N = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}", B = new Float32Array([0, 0, 2, 0, 0, 2]), O = null, V = !1, W = {}, Q = /* @__PURE__ */ new WeakMap();
    function ne(J) {
      if (!V && !ue(J))
        throw new Error("WebGL generation not supported");
    }
    function G(J, w, T, R, K, q, F) {
      if (q === void 0 && (q = 1), F === void 0 && (F = null), !F && (F = O, !F)) {
        var ae = typeof OffscreenCanvas == "function" ? new OffscreenCanvas(1, 1) : typeof document < "u" ? document.createElement("canvas") : null;
        if (!ae)
          throw new Error("OffscreenCanvas or DOM canvas not supported");
        F = O = ae.getContext("webgl", { depth: !1 });
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
              T,
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
    function L(J, w, T, R, K, q, F, ae, k, ee) {
      q === void 0 && (q = 1), ae === void 0 && (ae = 0), k === void 0 && (k = 0), ee === void 0 && (ee = 0), Y(J, w, T, R, K, q, F, null, ae, k, ee);
    }
    function Y(J, w, T, R, K, q, F, ae, k, ee, se) {
      q === void 0 && (q = 1), k === void 0 && (k = 0), ee === void 0 && (ee = 0), se === void 0 && (se = 0), ne(F);
      var Se = [];
      n(T, function(oe, le, Ne, Ce) {
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
          ), me("main", z, C, function($) {
            var He = $.setAttribute, ye = $.setUniform, Ue = !Ne && Ce("ANGLE_instanced_arrays"), de = !Ne && Ce("EXT_blend_minmax");
            He("aUV", 2, le.STATIC_DRAW, 0, B), He("aLineSegment", 4, le.DYNAMIC_DRAW, 1, Se), ye.apply(void 0, ["4f", "uGlyphBounds"].concat(R)), ye("1f", "uMaxDistance", K), ye("1f", "uExponent", q), be(ge, ve, function(We) {
              le.enable(le.BLEND), le.colorMask(!0, !0, !0, !0), le.viewport(0, 0, J, w), le.scissor(0, 0, J, w), le.blendFunc(le.ONE, le.ONE), le.blendEquationSeparate(le.FUNC_ADD, Ne ? le.MAX : de.MAX_EXT), le.clear(le.COLOR_BUFFER_BIT), Ne ? le.drawArraysInstanced(le.TRIANGLES, 0, 3, Se.length / 4) : Ue.drawArraysInstancedANGLE(le.TRIANGLES, 0, 3, Se.length / 4);
            });
          }), me("post", s, N, function($) {
            $.setAttribute("aUV", 2, le.STATIC_DRAW, 0, B), $.setUniform("1i", "tex", ve), le.bindFramebuffer(le.FRAMEBUFFER, ae), le.disable(le.BLEND), le.colorMask(se === 0, se === 1, se === 2, se === 3), le.viewport(k, ee, J, w), le.scissor(k, ee, J, w), le.drawArrays(le.TRIANGLES, 0, 3);
          });
        }), le.isContextLost())
          throw fe(), new Error("webgl context lost");
      });
    }
    function ue(J) {
      var w = !J || J === O ? W : J.canvas || J, T = Q.get(w);
      if (T === void 0) {
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
          ], q = G(
            4,
            4,
            "M8,8L16,8L24,24L16,24Z",
            [0, 0, 32, 32],
            24,
            1,
            J
          );
          T = q && K.length === q.length && q.every(function(F, ae) {
            return F === K[ae];
          }), T || (R = "bad trial run results", console.info(K, q));
        } catch (F) {
          T = !1, R = F.message;
        }
        R && console.warn("WebGL SDF generation not supported:", R), V = !1, Q.set(w, T);
      }
      return T;
    }
    var H = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      generate: G,
      generateIntoCanvas: L,
      generateIntoFramebuffer: Y,
      isSupported: ue
    });
    function I(J, w, T, R, K, q) {
      K === void 0 && (K = Math.max(R[2] - R[0], R[3] - R[1]) / 2), q === void 0 && (q = 1);
      try {
        return G.apply(H, arguments);
      } catch (F) {
        return console.info("WebGL SDF generation failed, falling back to JS", F), _.apply(b, arguments);
      }
    }
    function te(J, w, T, R, K, q, F, ae, k, ee) {
      K === void 0 && (K = Math.max(R[2] - R[0], R[3] - R[1]) / 2), q === void 0 && (q = 1), ae === void 0 && (ae = 0), k === void 0 && (k = 0), ee === void 0 && (ee = 0);
      try {
        return L.apply(H, arguments);
      } catch (se) {
        return console.info("WebGL SDF generation failed, falling back to JS", se), M.apply(b, arguments);
      }
    }
    return l.forEachPathCommand = u, l.generate = I, l.generateIntoCanvas = te, l.javascript = b, l.pathToLineSegments = n, l.webgl = H, l.webglUtils = E, Object.defineProperty(l, "__esModule", { value: !0 }), l;
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
    }, m = {}, u = {};
    m.L = 1, u[1] = "L", Object.keys(p).forEach(function(fe, ge) {
      m[fe] = 1 << ge + 1, u[m[fe]] = fe;
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
      return u[g(fe)];
    }
    var _ = {
      pairs: "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
      canonical: "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"
    };
    function M(fe, ge) {
      var ve = 36, $ = 0, He = /* @__PURE__ */ new Map(), ye = ge && /* @__PURE__ */ new Map(), Ue;
      return fe.split(",").forEach(function de(We) {
        if (We.indexOf("+") !== -1)
          for (var _e = +We; _e--; )
            de(Ue);
        else {
          Ue = We;
          var De = We.split(">"), Oe = De[0], Ve = De[1];
          Oe = String.fromCodePoint($ += parseInt(Oe, ve)), Ve = String.fromCodePoint($ += parseInt(Ve, ve)), He.set(Oe, Ve), ge && ye.set(Ve, Oe);
        }
      }), { map: He, reverseMap: ye };
    }
    var D, A, b;
    function z() {
      if (!D) {
        var fe = M(_.pairs, !0), ge = fe.map, ve = fe.reverseMap;
        D = ge, A = ve, b = M(_.canonical, !1).map;
      }
    }
    function C(fe) {
      return z(), D.get(fe) || null;
    }
    function N(fe) {
      return z(), A.get(fe) || null;
    }
    function B(fe) {
      return z(), b.get(fe) || null;
    }
    var O = m.L, V = m.R, W = m.EN, Q = m.ES, ne = m.ET, G = m.AN, L = m.CS, Y = m.B, ue = m.S, H = m.ON, I = m.BN, te = m.NSM, J = m.AL, w = m.LRO, T = m.RLO, R = m.LRE, K = m.RLE, q = m.PDF, F = m.LRI, ae = m.RLI, k = m.FSI, ee = m.PDI;
    function se(fe, ge) {
      for (var ve = 125, $ = new Uint32Array(fe.length), He = 0; He < fe.length; He++)
        $[He] = g(fe[He]);
      var ye = /* @__PURE__ */ new Map();
      function Ue(Ht, kt) {
        var Mt = $[Ht];
        $[Ht] = kt, ye.set(Mt, ye.get(Mt) - 1), Mt & c && ye.set(c, ye.get(c) - 1), ye.set(kt, (ye.get(kt) || 0) + 1), kt & c && ye.set(c, (ye.get(c) || 0) + 1);
      }
      for (var de = new Uint8Array(fe.length), We = /* @__PURE__ */ new Map(), _e = [], De = null, Oe = 0; Oe < fe.length; Oe++)
        De || _e.push(De = {
          start: Oe,
          end: fe.length - 1,
          // 3.3.1 P2-P3: Determine the paragraph level
          level: ge === "rtl" ? 1 : ge === "ltr" ? 0 : gu(Oe, !1)
        }), $[Oe] & Y && (De.end = Oe, De = null);
      for (var Ve = K | R | T | w | n | ee | q | Y, $e = function(Ht) {
        return Ht + (Ht & 1 ? 1 : 2);
      }, ft = function(Ht) {
        return Ht + (Ht & 1 ? 2 : 1);
      }, Be = 0; Be < _e.length; Be++) {
        De = _e[Be];
        var Ge = [{
          _level: De.level,
          _override: 0,
          //0=neutral, 1=L, 2=R
          _isolate: 0
          //bool
        }], Me = void 0, ct = 0, et = 0, Tt = 0;
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
            } else if (Re & (T | w)) {
              de[tt] = Me._level;
              var Ta = (Re === T ? ft : $e)(Me._level);
              Ta <= ve && !ct && !et ? Ge.push({
                _level: Ta,
                _override: Re & T ? V : O,
                _isolate: 0
              }) : ct || et++;
            } else if (Re & n) {
              Re & k && (Re = gu(tt + 1, !0) === 1 ? ae : F), de[tt] = Me._level, Me._override && Ue(tt, Me._override);
              var we = (Re === ae ? ft : $e)(Me._level);
              we <= ve && ct === 0 && et === 0 ? (Tt++, Ge.push({
                _level: we,
                _override: 0,
                _isolate: 1,
                _isolInitIndex: tt
              })) : ct++;
            } else if (Re & ee) {
              if (ct > 0)
                ct--;
              else if (Tt > 0) {
                for (et = 0; !Ge[Ge.length - 1]._isolate; )
                  Ge.pop();
                var Xe = Ge[Ge.length - 1]._isolInitIndex;
                Xe != null && (We.set(Xe, tt), We.set(tt, Xe)), Ge.pop(), Tt--;
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
            for (var Wu = de[Ut[0]], uu = De.level, pl = Ut[0] - 1; pl >= 0; pl--)
              if (!($[pl] & f)) {
                uu = de[pl];
                break;
              }
            var On = Ut[Ut.length - 1], iu = de[On], ml = De.level;
            if (!($[On] & n)) {
              for (var Rt = On + 1; Rt <= De.end; Rt++)
                if (!($[Rt] & f)) {
                  ml = de[Rt];
                  break;
                }
            }
            Zt.push({
              _seqIndices: Ut,
              _sosType: Math.max(uu, Wu) % 2 ? V : O,
              _eosType: Math.max(ml, iu) % 2 ? V : O
            });
          }
        }
        for (var vt = 0; vt < Zt.length; vt++) {
          var La = Zt[vt], Te = La._seqIndices, Ya = La._sosType, Ma = La._eosType, Da = de[Te[0]] & 1 ? V : O;
          if (ye.get(te))
            for (var rn = 0; rn < Te.length; rn++) {
              var yl = Te[rn];
              if ($[yl] & te) {
                for (var gl = Ya, Rn = rn - 1; Rn >= 0; Rn--)
                  if (!($[Te[Rn]] & f)) {
                    gl = $[Te[Rn]];
                    break;
                  }
                Ue(yl, gl & (n | ee) ? H : gl);
              }
            }
          if (ye.get(W))
            for (var zn = 0; zn < Te.length; zn++) {
              var ru = Te[zn];
              if ($[ru] & W)
                for (var xn = zn - 1; xn >= -1; xn--) {
                  var ou = xn === -1 ? Ya : $[Te[xn]];
                  if (ou & s) {
                    ou === J && Ue(ru, G);
                    break;
                  }
                }
            }
          if (ye.get(J))
            for (var Nn = 0; Nn < Te.length; Nn++) {
              var fu = Te[Nn];
              $[fu] & J && Ue(fu, V);
            }
          if (ye.get(Q) || ye.get(L))
            for (var Bn = 1; Bn < Te.length - 1; Bn++) {
              var Sl = Te[Bn];
              if ($[Sl] & (Q | L)) {
                for (var qa = 0, El = 0, Gn = Bn - 1; Gn >= 0 && (qa = $[Te[Gn]], !!(qa & f)); Gn--)
                  ;
                for (var bl = Bn + 1; bl < Te.length && (El = $[Te[bl]], !!(El & f)); bl++)
                  ;
                qa === El && ($[Sl] === Q ? qa === W : qa & (W | G)) && Ue(Sl, qa);
              }
            }
          if (ye.get(W))
            for (var ea = 0; ea < Te.length; ea++) {
              var Pu = Te[ea];
              if ($[Pu] & W) {
                for (var jn = ea - 1; jn >= 0 && $[Te[jn]] & (ne | f); jn--)
                  Ue(Te[jn], W);
                for (ea++; ea < Te.length && $[Te[ea]] & (ne | f | W); ea++)
                  $[Te[ea]] !== W && Ue(Te[ea], W);
              }
            }
          if (ye.get(ne) || ye.get(Q) || ye.get(L))
            for (var on = 0; on < Te.length; on++) {
              var ku = Te[on];
              if ($[ku] & (ne | Q | L)) {
                Ue(ku, H);
                for (var Hn = on - 1; Hn >= 0 && $[Te[Hn]] & f; Hn--)
                  Ue(Te[Hn], H);
                for (var Aa = on + 1; Aa < Te.length && $[Te[Aa]] & f; Aa++)
                  Ue(Te[Aa], H);
              }
            }
          if (ye.get(W))
            for (var _l = 0, Vn = Ya; _l < Te.length; _l++) {
              var Ln = Te[_l], Tl = $[Ln];
              Tl & W ? Vn === O && Ue(Ln, O) : Tl & s && (Vn = Tl);
            }
          if (ye.get(c)) {
            var Xa = V | W | G, cu = Xa | O, Yn = [];
            {
              for (var Qa = [], Fa = 0; Fa < Te.length; Fa++)
                if ($[Te[Fa]] & c) {
                  var Ka = fe[Te[Fa]], su = void 0;
                  if (C(Ka) !== null)
                    if (Qa.length < 63)
                      Qa.push({ char: Ka, seqIndex: Fa });
                    else
                      break;
                  else if ((su = N(Ka)) !== null)
                    for (var fn = Qa.length - 1; fn >= 0; fn--) {
                      var qn = Qa[fn].char;
                      if (qn === su || qn === N(B(Ka)) || C(B(qn)) === Ka) {
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
              for (var du = Yn[Ul], Xn = du[0], Qn = du[1], hu = !1, Pt = 0, vu = Xn + 1; vu < Qn; vu++) {
                var Iu = Te[vu];
                if ($[Iu] & cu) {
                  hu = !0;
                  var pu = $[Iu] & Xa ? V : O;
                  if (pu === Da) {
                    Pt = pu;
                    break;
                  }
                }
              }
              if (hu && !Pt) {
                Pt = Ya;
                for (var Za = Xn - 1; Za >= 0; Za--) {
                  var Ml = Te[Za];
                  if ($[Ml] & cu) {
                    var Fn = $[Ml] & Xa ? V : O;
                    Fn !== Da ? Pt = Fn : Pt = Da;
                    break;
                  }
                }
              }
              if (Pt) {
                if ($[Te[Xn]] = $[Te[Qn]] = Pt, Pt !== Da) {
                  for (var cn = Xn + 1; cn < Te.length; cn++)
                    if (!($[Te[cn]] & f)) {
                      g(fe[Te[cn]]) & te && ($[Te[cn]] = Pt);
                      break;
                    }
                }
                if (Pt !== Da) {
                  for (var sn = Qn + 1; sn < Te.length; sn++)
                    if (!($[Te[sn]] & f)) {
                      g(fe[Te[sn]]) & te && ($[Te[sn]] = Pt);
                      break;
                    }
                }
              }
            }
            for (var da = 0; da < Te.length; da++)
              if ($[Te[da]] & c) {
                for (var mu = da, Dl = da, Ca = Ya, Ba = da - 1; Ba >= 0; Ba--)
                  if ($[Te[Ba]] & f)
                    mu = Ba;
                  else {
                    Ca = $[Te[Ba]] & Xa ? V : O;
                    break;
                  }
                for (var yu = Ma, Ja = da + 1; Ja < Te.length; Ja++)
                  if ($[Te[Ja]] & (c | f))
                    Dl = Ja;
                  else {
                    yu = $[Te[Ja]] & Xa ? V : O;
                    break;
                  }
                for (var Al = mu; Al <= Dl; Al++)
                  $[Te[Al]] = Ca === yu ? Ca : Da;
                da = Dl;
              }
          }
        }
        for (var qt = De.start; qt <= De.end; qt++) {
          var Ji = de[qt], St = $[qt];
          if (Ji & 1 ? St & (O | W | G) && de[qt]++ : St & V ? de[qt]++ : St & (G | W) && (de[qt] += 2), St & f && (de[qt] = qt === 0 ? De.level : de[qt - 1]), qt === De.end || g(fe[qt]) & (ue | Y))
            for (var Kn = qt; Kn >= 0 && g(fe[Kn]) & d; Kn--)
              de[Kn] = De.level;
        }
      }
      return {
        levels: de,
        paragraphs: _e
      };
      function gu(Ht, kt) {
        for (var Mt = Ht; Mt < fe.length; Mt++) {
          var ha = $[Mt];
          if (ha & (V | J))
            return 1;
          if (ha & (Y | O) || kt && ha === ee)
            return 0;
          if (ha & n) {
            var Su = $u(Mt);
            Mt = Su === -1 ? fe.length : Su;
          }
        }
        return 0;
      }
      function $u(Ht) {
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
          for (var _e = ge.levels.slice(de, We + 1), De = We; De >= de && g(fe[De]) & d; De--)
            _e[De] = Ue.level;
          for (var Oe = Ue.level, Ve = 1 / 0, $e = 0; $e < _e.length; $e++) {
            var ft = _e[$e];
            ft > Oe && (Oe = ft), ft < Ve && (Ve = ft | 1);
          }
          for (var Be = Oe; Be >= Ve; Be--)
            for (var Ge = 0; Ge < _e.length; Ge++)
              if (_e[Ge] >= Be) {
                for (var Me = Ge; Ge + 1 < _e.length && _e[Ge + 1] >= Be; )
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
        for (var We = de[0], _e = de[1], De = ye.slice(We, _e + 1), Oe = De.length; Oe--; )
          ye[_e - Oe] = De[Oe];
      }), ye;
    }
    return l.closingToOpeningBracket = N, l.getBidiCharType = g, l.getBidiCharTypeName = E, l.getCanonicalBracket = B, l.getEmbeddingLevels = se, l.getMirroredCharacter = Ne, l.getMirroredCharactersMap = Ce, l.getReorderSegments = me, l.getReorderedIndices = be, l.getReorderedString = Ee, l.openingToClosingBracket = C, Object.defineProperty(l, "__esModule", { value: !0 }), l;
  })({});
  return o;
}
const Xs = /\bvoid\s+main\s*\(\s*\)\s*{/g;
function Go(o) {
  const l = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function p(m, u) {
    let n = av[u];
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
      for (let u in m)
        Object.prototype.hasOwnProperty.call(m, u) && (o[u] = m[u]);
  }
  return o;
}, B1 = Date.now(), $c = /* @__PURE__ */ new WeakMap(), es = /* @__PURE__ */ new Map();
let G1 = 1e10;
function jo(o, l) {
  const p = L1(l);
  let m = $c.get(o);
  if (m || $c.set(o, m = /* @__PURE__ */ Object.create(null)), m[p])
    return new m[p]();
  const u = `_onBeforeCompile${p}`, n = function(d, v) {
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
    }), this[u] && this[u](d);
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
        this[u] = d;
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
function j1(o, { vertexShader: l, fragmentShader: p }, m, u) {
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
  if (_) {
    const M = `
uniform float ${_};
`;
    n = M + n, d = M + d;
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
`, l = l.replace(/\b(position|normal|uv)\b/g, (M, D, A, b) => /\battribute\s+vec[23]\s+$/.test(b.substr(0, A)) ? D : `troika_${D}_${u}`), o.map && o.map.channel > 0 || (l = l.replace(/\bMAP_UV\b/g, `troika_uv_${u}`))), l = ts(l, u, n, s, c), p = ts(p, u, d, v, y), {
    vertexShader: l,
    fragmentShader: p
  };
}
function ts(o, l, p, m, u) {
  return (m || u || p) && (o = o.replace(
    Xs,
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
    var l = { parse: function(u) {
      var n = l._bin, s = new Uint8Array(u);
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
    }, _readFont: function(u, n) {
      var s = l._bin, c = n;
      s.readFixed(u, n), n += 4;
      var f = s.readUshort(u, n);
      n += 2, s.readUshort(u, n), n += 2, s.readUshort(u, n), n += 2, s.readUshort(u, n), n += 2;
      for (var d = ["cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GDEF", "GPOS", "GSUB", "SVG "], v = { _data: u, _offset: c }, y = {}, g = 0; g < f; g++) {
        var E = s.readASCII(u, n, 4);
        n += 4, s.readUint(u, n), n += 4;
        var _ = s.readUint(u, n);
        n += 4;
        var M = s.readUint(u, n);
        n += 4, y[E] = { offset: _, length: M };
      }
      for (g = 0; g < d.length; g++) {
        var D = d[g];
        y[D] && (v[D.trim()] = l[D.trim()].parse(u, y[D].offset, y[D].length, v));
      }
      return v;
    }, _tabOffset: function(u, n, s) {
      for (var c = l._bin, f = c.readUshort(u, s + 4), d = s + 12, v = 0; v < f; v++) {
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
      var d = l._bin, v = {}, y = n;
      d.readFixed(u, n), n += 4;
      var g = d.readUshort(u, n);
      n += 2;
      var E = d.readUshort(u, n);
      n += 2;
      var _ = d.readUshort(u, n);
      return n += 2, v.scriptList = l._lctf.readScriptList(u, y + g), v.featureList = l._lctf.readFeatureList(u, y + E), v.lookupList = l._lctf.readLookupList(u, y + _, f), v;
    }, l._lctf.readLookupList = function(u, n, s) {
      var c = l._bin, f = n, d = [], v = c.readUshort(u, n);
      n += 2;
      for (var y = 0; y < v; y++) {
        var g = c.readUshort(u, n);
        n += 2;
        var E = l._lctf.readLookupTable(u, f + g, s);
        d.push(E);
      }
      return d;
    }, l._lctf.readLookupTable = function(u, n, s) {
      var c = l._bin, f = n, d = { tabs: [] };
      d.ltype = c.readUshort(u, n), n += 2, d.flag = c.readUshort(u, n), n += 2;
      var v = c.readUshort(u, n);
      n += 2;
      for (var y = d.ltype, g = 0; g < v; g++) {
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
        var v = s.readUshort(u, n);
        n += 2;
        for (var y = 0; y < v; y++) c.push(d + y), c.push(d + y), c.push(s.readUshort(u, n)), n += 2;
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
      for (var v = 0; v < d; v++) {
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
      var v = s.readUshort(u, n);
      n += 2, f.tab = [];
      for (var y = 0; y < v; y++) f.tab.push(s.readUshort(u, n + 2 * y));
      return f;
    }, l._lctf.readScriptList = function(u, n) {
      var s = l._bin, c = n, f = {}, d = s.readUshort(u, n);
      n += 2;
      for (var v = 0; v < d; v++) {
        var y = s.readASCII(u, n, 4);
        n += 4;
        var g = s.readUshort(u, n);
        n += 2, f[y.trim()] = l._lctf.readScriptTable(u, c + g);
      }
      return f;
    }, l._lctf.readScriptTable = function(u, n) {
      var s = l._bin, c = n, f = {}, d = s.readUshort(u, n);
      n += 2, d > 0 && (f.default = l._lctf.readLangSysTable(u, c + d));
      var v = s.readUshort(u, n);
      n += 2;
      for (var y = 0; y < v; y++) {
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
      for (var d = [], v = 0; v < f.length - 1; v++) d.push(c.readASCII(u, n + f[v], f[v + 1] - f[v]));
      n += f[f.length - 1];
      var y = [];
      n = l.CFF.readIndex(u, n, y);
      var g = [];
      for (v = 0; v < y.length - 1; v++) g.push(l.CFF.readDict(u, n + y[v], n + y[v + 1]));
      n += y[y.length - 1];
      var E = g[0], _ = [];
      n = l.CFF.readIndex(u, n, _);
      var M = [];
      for (v = 0; v < _.length - 1; v++) M.push(c.readASCII(u, n + _[v], _[v + 1] - _[v]));
      if (n += _[_.length - 1], l.CFF.readSubrs(u, n, E), E.CharStrings) {
        n = E.CharStrings, _ = [], n = l.CFF.readIndex(u, n, _);
        var D = [];
        for (v = 0; v < _.length - 1; v++) D.push(c.readBytes(u, n + _[v], _[v + 1] - _[v]));
        E.CharStrings = D;
      }
      if (E.ROS) {
        n = E.FDArray;
        var A = [];
        for (n = l.CFF.readIndex(u, n, A), E.FDArray = [], v = 0; v < A.length - 1; v++) {
          var b = l.CFF.readDict(u, n + A[v], n + A[v + 1]);
          l.CFF._readFDict(u, b, M), E.FDArray.push(b);
        }
        n += A[A.length - 1], n = E.FDSelect, E.FDSelect = [];
        var z = u[n];
        if (n++, z != 3) throw z;
        var C = c.readUshort(u, n);
        for (n += 2, v = 0; v < C + 1; v++) E.FDSelect.push(c.readUshort(u, n), u[n + 2]), n += 3;
      }
      return E.Encoding && (E.Encoding = l.CFF.readEncoding(u, E.Encoding, E.CharStrings.length)), E.charset && (E.charset = l.CFF.readCharset(u, E.charset, E.CharStrings.length)), l.CFF._readFDict(u, E, M), E;
    }, l.CFF._readFDict = function(u, n, s) {
      var c;
      for (var f in n.Private && (c = n.Private[1], n.Private = l.CFF.readDict(u, c, c + n.Private[0]), n.Private.Subrs && l.CFF.readSubrs(u, c + n.Private.Subrs, n.Private)), n) ["FamilyName", "FontName", "FullName", "Notice", "version", "Copyright"].indexOf(f) != -1 && (n[f] = s[n[f] - 426 + 35]);
    }, l.CFF.readSubrs = function(u, n, s) {
      var c = l._bin, f = [];
      n = l.CFF.readIndex(u, n, f);
      var d, v = f.length;
      d = v < 1240 ? 107 : v < 33900 ? 1131 : 32768, s.Bias = d, s.Subrs = [];
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
      for (var v = 0; v < d; v++) c.push(u[n + v]);
      return c;
    }, l.CFF.readCharset = function(u, n, s) {
      var c = l._bin, f = [".notdef"], d = u[n];
      if (n++, d == 0) for (var v = 0; v < s; v++) {
        var y = c.readUshort(u, n);
        n += 2, f.push(y);
      }
      else {
        if (d != 1 && d != 2) throw "error: format: " + d;
        for (; f.length < s; ) {
          y = c.readUshort(u, n), n += 2;
          var g = 0;
          for (d == 1 ? (g = u[n], n++) : (g = c.readUshort(u, n), n += 2), v = 0; v <= g; v++) f.push(y), y++;
        }
      }
      return f;
    }, l.CFF.readIndex = function(u, n, s) {
      var c = l._bin, f = c.readUshort(u, n) + 1, d = u[n += 2];
      if (n++, d == 1) for (var v = 0; v < f; v++) s.push(u[n + v]);
      else if (d == 2) for (v = 0; v < f; v++) s.push(c.readUshort(u, n + 2 * v));
      else if (d == 3) for (v = 0; v < f; v++) s.push(16777215 & c.readUint(u, n + 3 * v - 1));
      else if (f != 1) throw "unsupported offset size: " + d + ", count: " + f;
      return (n += f * d) - 1;
    }, l.CFF.getCharString = function(u, n, s) {
      var c = l._bin, f = u[n], d = u[n + 1];
      u[n + 2], u[n + 3], u[n + 4];
      var v = 1, y = null, g = null;
      f <= 20 && (y = f, v = 1), f == 12 && (y = 100 * f + d, v = 2), 21 <= f && f <= 27 && (y = f, v = 1), f == 28 && (g = c.readShort(u, n + 1), v = 3), 29 <= f && f <= 31 && (y = f, v = 1), 32 <= f && f <= 246 && (g = f - 139, v = 1), 247 <= f && f <= 250 && (g = 256 * (f - 247) + d + 108, v = 2), 251 <= f && f <= 254 && (g = 256 * -(f - 251) - d - 108, v = 2), f == 255 && (g = c.readInt(u, n + 1) / 65535, v = 5), s.val = g ?? "o" + y, s.size = v;
    }, l.CFF.readCharString = function(u, n, s) {
      for (var c = n + s, f = l._bin, d = []; n < c; ) {
        var v = u[n], y = u[n + 1];
        u[n + 2], u[n + 3], u[n + 4];
        var g = 1, E = null, _ = null;
        v <= 20 && (E = v, g = 1), v == 12 && (E = 100 * v + y, g = 2), v != 19 && v != 20 || (E = v, g = 2), 21 <= v && v <= 27 && (E = v, g = 1), v == 28 && (_ = f.readShort(u, n + 1), g = 3), 29 <= v && v <= 31 && (E = v, g = 1), 32 <= v && v <= 246 && (_ = v - 139, g = 1), 247 <= v && v <= 250 && (_ = 256 * (v - 247) + y + 108, g = 2), 251 <= v && v <= 254 && (_ = 256 * -(v - 251) - y - 108, g = 2), v == 255 && (_ = f.readInt(u, n + 1) / 65535, g = 5), d.push(_ ?? "o" + E), n += g;
      }
      return d;
    }, l.CFF.readDict = function(u, n, s) {
      for (var c = l._bin, f = {}, d = []; n < s; ) {
        var v = u[n], y = u[n + 1];
        u[n + 2], u[n + 3], u[n + 4];
        var g = 1, E = null, _ = null;
        if (v == 28 && (_ = c.readShort(u, n + 1), g = 3), v == 29 && (_ = c.readInt(u, n + 1), g = 5), 32 <= v && v <= 246 && (_ = v - 139, g = 1), 247 <= v && v <= 250 && (_ = 256 * (v - 247) + y + 108, g = 2), 251 <= v && v <= 254 && (_ = 256 * -(v - 251) - y - 108, g = 2), v == 255) throw _ = c.readInt(u, n + 1) / 65535, g = 5, "unknown number";
        if (v == 30) {
          var M = [];
          for (g = 1; ; ) {
            var D = u[n + g];
            g++;
            var A = D >> 4, b = 15 & D;
            if (A != 15 && M.push(A), b != 15 && M.push(b), b == 15) break;
          }
          for (var z = "", C = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"], N = 0; N < M.length; N++) z += C[M[N]];
          _ = parseFloat(z);
        }
        v <= 21 && (E = ["version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX"][v], g = 1, v == 12 && (E = ["Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName"][y], g = 2)), E != null ? (f[E] = d.length == 1 ? d[0] : d, d = []) : d.push(_), n += g;
      }
      return f;
    }, l.cmap = {}, l.cmap.parse = function(u, n, s) {
      u = new Uint8Array(u.buffer, n, s), n = 0;
      var c = l._bin, f = {};
      c.readUshort(u, n), n += 2;
      var d = c.readUshort(u, n);
      n += 2;
      var v = [];
      f.tables = [];
      for (var y = 0; y < d; y++) {
        var g = c.readUshort(u, n);
        n += 2;
        var E = c.readUshort(u, n);
        n += 2;
        var _ = c.readUint(u, n);
        n += 4;
        var M = "p" + g + "e" + E, D = v.indexOf(_);
        if (D == -1) {
          var A;
          D = f.tables.length, v.push(_);
          var b = c.readUshort(u, _);
          b == 0 ? A = l.cmap.parse0(u, _) : b == 4 ? A = l.cmap.parse4(u, _) : b == 6 ? A = l.cmap.parse6(u, _) : b == 12 ? A = l.cmap.parse12(u, _) : console.debug("unknown format: " + b, g, E, _), f.tables.push(A);
        }
        if (f[M] != null) throw "multiple tables for one platform+encoding";
        f[M] = D;
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
      var v = s.readUshort(u, n);
      n += 2;
      var y = v / 2;
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
        var v = n + 12 * d, y = s.readUint(u, v + 0), g = s.readUint(u, v + 4), E = s.readUint(u, v + 8);
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
            for (var M = 0; M < _; M++) d.flags.push(E), v++;
          }
        }
        for (d.xs = [], v = 0; v < g; v++) {
          var D = (2 & d.flags[v]) != 0, A = (16 & d.flags[v]) != 0;
          D ? (d.xs.push(A ? c[f] : -c[f]), f++) : A ? d.xs.push(0) : (d.xs.push(s.readShort(c, f)), f += 2);
        }
        for (d.ys = [], v = 0; v < g; v++)
          D = (4 & d.flags[v]) != 0, A = (32 & d.flags[v]) != 0, D ? (d.ys.push(A ? c[f] : -c[f]), f++) : A ? d.ys.push(0) : (d.ys.push(s.readShort(c, f)), f += 2);
        var b = 0, z = 0;
        for (v = 0; v < g; v++) b += d.xs[v], z += d.ys[v], d.xs[v] = b, d.ys[v] = z;
      } else {
        var C;
        d.parts = [];
        do {
          C = s.readUshort(c, f), f += 2;
          var N = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
          if (d.parts.push(N), N.glyphIndex = s.readUshort(c, f), f += 2, 1 & C) {
            var B = s.readShort(c, f);
            f += 2;
            var O = s.readShort(c, f);
            f += 2;
          } else
            B = s.readInt8(c, f), f++, O = s.readInt8(c, f), f++;
          2 & C ? (N.m.tx = B, N.m.ty = O) : (N.p1 = B, N.p2 = O), 8 & C ? (N.m.a = N.m.d = s.readF2dot14(c, f), f += 2) : 64 & C ? (N.m.a = s.readF2dot14(c, f), f += 2, N.m.d = s.readF2dot14(c, f), f += 2) : 128 & C && (N.m.a = s.readF2dot14(c, f), f += 2, N.m.b = s.readF2dot14(c, f), f += 2, N.m.c = s.readF2dot14(c, f), f += 2, N.m.d = s.readF2dot14(c, f), f += 2);
        } while (32 & C);
        if (256 & C) {
          var V = s.readUshort(c, f);
          for (f += 2, d.instr = [], v = 0; v < V; v++) d.instr.push(c[f]), f++;
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
      var f = l._bin, d = s, v = {};
      if (v.fmt = f.readUshort(u, s), s += 2, n == 1 || n == 2 || n == 3 || n == 7 || n == 8 && v.fmt <= 2) {
        var y = f.readUshort(u, s);
        s += 2, v.coverage = l._lctf.readCoverage(u, y + d);
      }
      if (n == 1 && v.fmt == 1) {
        var g = f.readUshort(u, s);
        s += 2, g != 0 && (v.pos = l.GPOS.readValueRecord(u, s, g));
      } else if (n == 2 && v.fmt >= 1 && v.fmt <= 2) {
        g = f.readUshort(u, s), s += 2;
        var E = f.readUshort(u, s);
        s += 2;
        var _ = l._lctf.numOfOnes(g), M = l._lctf.numOfOnes(E);
        if (v.fmt == 1) {
          v.pairsets = [];
          var D = f.readUshort(u, s);
          s += 2;
          for (var A = 0; A < D; A++) {
            var b = d + f.readUshort(u, s);
            s += 2;
            var z = f.readUshort(u, b);
            b += 2;
            for (var C = [], N = 0; N < z; N++) {
              var B = f.readUshort(u, b);
              b += 2, g != 0 && (G = l.GPOS.readValueRecord(u, b, g), b += 2 * _), E != 0 && (L = l.GPOS.readValueRecord(u, b, E), b += 2 * M), C.push({ gid2: B, val1: G, val2: L });
            }
            v.pairsets.push(C);
          }
        }
        if (v.fmt == 2) {
          var O = f.readUshort(u, s);
          s += 2;
          var V = f.readUshort(u, s);
          s += 2;
          var W = f.readUshort(u, s);
          s += 2;
          var Q = f.readUshort(u, s);
          for (s += 2, v.classDef1 = l._lctf.readClassDef(u, d + O), v.classDef2 = l._lctf.readClassDef(u, d + V), v.matrix = [], A = 0; A < W; A++) {
            var ne = [];
            for (N = 0; N < Q; N++) {
              var G = null, L = null;
              g != 0 && (G = l.GPOS.readValueRecord(u, s, g), s += 2 * _), E != 0 && (L = l.GPOS.readValueRecord(u, s, E), s += 2 * M), ne.push({ val1: G, val2: L });
            }
            v.matrix.push(ne);
          }
        }
      } else if (n == 4 && v.fmt == 1) v.markCoverage = l._lctf.readCoverage(u, f.readUshort(u, s) + d), v.baseCoverage = l._lctf.readCoverage(u, f.readUshort(u, s + 2) + d), v.markClassCount = f.readUshort(u, s + 4), v.markArray = l.GPOS.readMarkArray(u, f.readUshort(u, s + 6) + d), v.baseArray = l.GPOS.readBaseArray(u, f.readUshort(u, s + 8) + d, v.markClassCount);
      else if (n == 6 && v.fmt == 1) v.mark1Coverage = l._lctf.readCoverage(u, f.readUshort(u, s) + d), v.mark2Coverage = l._lctf.readCoverage(u, f.readUshort(u, s + 2) + d), v.markClassCount = f.readUshort(u, s + 4), v.mark1Array = l.GPOS.readMarkArray(u, f.readUshort(u, s + 6) + d), v.mark2Array = l.GPOS.readBaseArray(u, f.readUshort(u, s + 8) + d, v.markClassCount);
      else {
        if (n == 9 && v.fmt == 1) {
          var Y = f.readUshort(u, s);
          s += 2;
          var ue = f.readUint(u, s);
          if (s += 4, c.ltype == 9) c.ltype = Y;
          else if (c.ltype != Y) throw "invalid extension substitution";
          return l.GPOS.subt(u, c.ltype, d + ue);
        }
        console.debug("unsupported GPOS table LookupType", n, "format", v.fmt);
      }
      return v;
    }, l.GPOS.readValueRecord = function(u, n, s) {
      var c = l._bin, f = [];
      return f.push(1 & s ? c.readShort(u, n) : 0), n += 1 & s ? 2 : 0, f.push(2 & s ? c.readShort(u, n) : 0), n += 2 & s ? 2 : 0, f.push(4 & s ? c.readShort(u, n) : 0), n += 4 & s ? 2 : 0, f.push(8 & s ? c.readShort(u, n) : 0), n += 8 & s ? 2 : 0, f;
    }, l.GPOS.readBaseArray = function(u, n, s) {
      var c = l._bin, f = [], d = n, v = c.readUshort(u, n);
      n += 2;
      for (var y = 0; y < v; y++) {
        for (var g = [], E = 0; E < s; E++) g.push(l.GPOS.readAnchorRecord(u, d + c.readUshort(u, n))), n += 2;
        f.push(g);
      }
      return f;
    }, l.GPOS.readMarkArray = function(u, n) {
      var s = l._bin, c = [], f = n, d = s.readUshort(u, n);
      n += 2;
      for (var v = 0; v < d; v++) {
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
      var f = l._bin, d = s, v = {};
      if (v.fmt = f.readUshort(u, s), s += 2, n != 1 && n != 2 && n != 4 && n != 5 && n != 6) return null;
      if (n == 1 || n == 2 || n == 4 || n == 5 && v.fmt <= 2 || n == 6 && v.fmt <= 2) {
        var y = f.readUshort(u, s);
        s += 2, v.coverage = l._lctf.readCoverage(u, d + y);
      }
      if (n == 1 && v.fmt >= 1 && v.fmt <= 2) {
        if (v.fmt == 1) v.delta = f.readShort(u, s), s += 2;
        else if (v.fmt == 2) {
          var g = f.readUshort(u, s);
          s += 2, v.newg = f.readUshorts(u, s, g), s += 2 * v.newg.length;
        }
      } else if (n == 2 && v.fmt == 1) {
        g = f.readUshort(u, s), s += 2, v.seqs = [];
        for (var E = 0; E < g; E++) {
          var _ = f.readUshort(u, s) + d;
          s += 2;
          var M = f.readUshort(u, _);
          v.seqs.push(f.readUshorts(u, _ + 2, M));
        }
      } else if (n == 4)
        for (v.vals = [], g = f.readUshort(u, s), s += 2, E = 0; E < g; E++) {
          var D = f.readUshort(u, s);
          s += 2, v.vals.push(l.GSUB.readLigatureSet(u, d + D));
        }
      else if (n == 5 && v.fmt == 2) {
        if (v.fmt == 2) {
          var A = f.readUshort(u, s);
          s += 2, v.cDef = l._lctf.readClassDef(u, d + A), v.scset = [];
          var b = f.readUshort(u, s);
          for (s += 2, E = 0; E < b; E++) {
            var z = f.readUshort(u, s);
            s += 2, v.scset.push(z == 0 ? null : l.GSUB.readSubClassSet(u, d + z));
          }
        }
      } else if (n == 6 && v.fmt == 3) {
        if (v.fmt == 3) {
          for (E = 0; E < 3; E++) {
            g = f.readUshort(u, s), s += 2;
            for (var C = [], N = 0; N < g; N++) C.push(l._lctf.readCoverage(u, d + f.readUshort(u, s + 2 * N)));
            s += 2 * g, E == 0 && (v.backCvg = C), E == 1 && (v.inptCvg = C), E == 2 && (v.ahedCvg = C);
          }
          g = f.readUshort(u, s), s += 2, v.lookupRec = l.GSUB.readSubstLookupRecords(u, s, g);
        }
      } else {
        if (n == 7 && v.fmt == 1) {
          var B = f.readUshort(u, s);
          s += 2;
          var O = f.readUint(u, s);
          if (s += 4, c.ltype == 9) c.ltype = B;
          else if (c.ltype != B) throw "invalid extension substitution";
          return l.GSUB.subt(u, c.ltype, d + O);
        }
        console.debug("unsupported GSUB table LookupType", n, "format", v.fmt);
      }
      return v;
    }, l.GSUB.readSubClassSet = function(u, n) {
      var s = l._bin.readUshort, c = n, f = [], d = s(u, n);
      n += 2;
      for (var v = 0; v < d; v++) {
        var y = s(u, n);
        n += 2, f.push(l.GSUB.readSubClassRule(u, c + y));
      }
      return f;
    }, l.GSUB.readSubClassRule = function(u, n) {
      var s = l._bin.readUshort, c = {}, f = s(u, n), d = s(u, n += 2);
      n += 2, c.input = [];
      for (var v = 0; v < f - 1; v++) c.input.push(s(u, n)), n += 2;
      return c.substLookupRecords = l.GSUB.readSubstLookupRecords(u, n, d), c;
    }, l.GSUB.readSubstLookupRecords = function(u, n, s) {
      for (var c = l._bin.readUshort, f = [], d = 0; d < s; d++) f.push(c(u, n), c(u, n + 2)), n += 4;
      return f;
    }, l.GSUB.readChainSubClassSet = function(u, n) {
      var s = l._bin, c = n, f = [], d = s.readUshort(u, n);
      n += 2;
      for (var v = 0; v < d; v++) {
        var y = s.readUshort(u, n);
        n += 2, f.push(l.GSUB.readChainSubClassRule(u, c + y));
      }
      return f;
    }, l.GSUB.readChainSubClassRule = function(u, n) {
      for (var s = l._bin, c = {}, f = ["backtrack", "input", "lookahead"], d = 0; d < f.length; d++) {
        var v = s.readUshort(u, n);
        n += 2, d == 1 && v--, c[f[d]] = s.readUshorts(u, n, v), n += 2 * c[f[d]].length;
      }
      return v = s.readUshort(u, n), n += 2, c.subst = s.readUshorts(u, n, 2 * v), n += 2 * c.subst.length, c;
    }, l.GSUB.readLigatureSet = function(u, n) {
      var s = l._bin, c = n, f = [], d = s.readUshort(u, n);
      n += 2;
      for (var v = 0; v < d; v++) {
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
      for (var f = l._bin, d = { aWidth: [], lsBearing: [] }, v = 0, y = 0, g = 0; g < c.maxp.numGlyphs; g++) g < c.hhea.numberOfHMetrics && (v = f.readUshort(u, n), n += 2, y = f.readShort(u, n), n += 2), d.aWidth.push(v), d.lsBearing.push(y);
      return d;
    }, l.kern = {}, l.kern.parse = function(u, n, s, c) {
      var f = l._bin, d = f.readUshort(u, n);
      if (n += 2, d == 1) return l.kern.parseV1(u, n - 2, s, c);
      var v = f.readUshort(u, n);
      n += 2;
      for (var y = { glyph1: [], rval: [] }, g = 0; g < v; g++) {
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
      for (var v = { glyph1: [], rval: [] }, y = 0; y < d; y++) {
        f.readUint(u, n), n += 4;
        var g = f.readUshort(u, n);
        n += 2, f.readUshort(u, n), n += 2;
        var E = g >>> 8;
        if ((E &= 15) != 0) throw "unknown kern table format: " + E;
        n = l.kern.readFormat0(u, n, v);
      }
      return v;
    }, l.kern.readFormat0 = function(u, n, s) {
      var c = l._bin, f = -1, d = c.readUshort(u, n);
      n += 2, c.readUshort(u, n), n += 2, c.readUshort(u, n), n += 2, c.readUshort(u, n), n += 2;
      for (var v = 0; v < d; v++) {
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
      var f = l._bin, d = [], v = c.head.indexToLocFormat, y = c.maxp.numGlyphs + 1;
      if (v == 0) for (var g = 0; g < y; g++) d.push(f.readUshort(u, n + (g << 1)) << 1);
      if (v == 1) for (g = 0; g < y; g++) d.push(f.readUint(u, n + (g << 2)));
      return d;
    }, l.maxp = {}, l.maxp.parse = function(u, n, s) {
      var c = l._bin, f = {}, d = c.readUint(u, n);
      return n += 4, f.numGlyphs = c.readUshort(u, n), n += 2, d == 65536 && (f.maxPoints = c.readUshort(u, n), n += 2, f.maxContours = c.readUshort(u, n), n += 2, f.maxCompositePoints = c.readUshort(u, n), n += 2, f.maxCompositeContours = c.readUshort(u, n), n += 2, f.maxZones = c.readUshort(u, n), n += 2, f.maxTwilightPoints = c.readUshort(u, n), n += 2, f.maxStorage = c.readUshort(u, n), n += 2, f.maxFunctionDefs = c.readUshort(u, n), n += 2, f.maxInstructionDefs = c.readUshort(u, n), n += 2, f.maxStackElements = c.readUshort(u, n), n += 2, f.maxSizeOfInstructions = c.readUshort(u, n), n += 2, f.maxComponentElements = c.readUshort(u, n), n += 2, f.maxComponentDepth = c.readUshort(u, n), n += 2), f;
    }, l.name = {}, l.name.parse = function(u, n, s) {
      var c = l._bin, f = {};
      c.readUshort(u, n), n += 2;
      var d = c.readUshort(u, n);
      n += 2, c.readUshort(u, n);
      for (var v, y = ["copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette"], g = n += 2, E = 0; E < d; E++) {
        var _ = c.readUshort(u, n);
        n += 2;
        var M = c.readUshort(u, n);
        n += 2;
        var D = c.readUshort(u, n);
        n += 2;
        var A = c.readUshort(u, n);
        n += 2;
        var b = c.readUshort(u, n);
        n += 2;
        var z = c.readUshort(u, n);
        n += 2;
        var C, N = y[A], B = g + 12 * d + z;
        if (_ == 0) C = c.readUnicode(u, B, b / 2);
        else if (_ == 3 && M == 0) C = c.readUnicode(u, B, b / 2);
        else if (M == 0) C = c.readASCII(u, B, b);
        else if (M == 1) C = c.readUnicode(u, B, b / 2);
        else if (M == 3) C = c.readUnicode(u, B, b / 2);
        else {
          if (_ != 1) throw "unknown encoding " + M + ", platformID: " + _;
          C = c.readASCII(u, B, b), console.debug("reading unknown MAC encoding " + M + " as ASCII");
        }
        var O = "p" + _ + "," + D.toString(16);
        f[O] == null && (f[O] = {}), f[O][N !== void 0 ? N : A] = C, f[O]._lang = D;
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
    }, l.U.glyphToPath = function(u, n) {
      var s = { cmds: [], crds: [] };
      if (u.SVG && u.SVG.entries[n]) {
        var c = u.SVG.entries[n];
        return c == null ? s : (typeof c == "string" && (c = l.SVG.toPath(c), u.SVG.entries[n] = c), c);
      }
      if (u.CFF) {
        var f = { x: 0, y: 0, stack: [], nStems: 0, haveWidth: !1, width: u.CFF.Private ? u.CFF.Private.defaultWidthX : 0, open: !1 }, d = u.CFF, v = u.CFF.Private;
        if (d.ROS) {
          for (var y = 0; d.FDSelect[y + 2] <= n; ) y += 2;
          v = d.FDArray[d.FDSelect[y + 1]].Private;
        }
        l.U._drawCFF(u.CFF.CharStrings[n], f, d, v, s);
      } else u.glyf && l.U._drawGlyf(n, u, s);
      return s;
    }, l.U._drawGlyf = function(u, n, s) {
      var c = n.glyf[u];
      c == null && (c = n.glyf[u] = l.glyf._parseGlyf(n, u)), c != null && (c.noc > -1 ? l.U._simpleGlyph(c, s) : l.U._compoGlyph(c, n, s));
    }, l.U._simpleGlyph = function(u, n) {
      for (var s = 0; s < u.noc; s++) {
        for (var c = s == 0 ? 0 : u.endPts[s - 1] + 1, f = u.endPts[s], d = c; d <= f; d++) {
          var v = d == c ? f : d - 1, y = d == f ? c : d + 1, g = 1 & u.flags[d], E = 1 & u.flags[v], _ = 1 & u.flags[y], M = u.xs[d], D = u.ys[d];
          if (d == c) if (g) {
            if (!E) {
              l.U.P.moveTo(n, M, D);
              continue;
            }
            l.U.P.moveTo(n, u.xs[v], u.ys[v]);
          } else E ? l.U.P.moveTo(n, u.xs[v], u.ys[v]) : l.U.P.moveTo(n, (u.xs[v] + M) / 2, (u.ys[v] + D) / 2);
          g ? E && l.U.P.lineTo(n, M, D) : _ ? l.U.P.qcurveTo(n, M, D, u.xs[y], u.ys[y]) : l.U.P.qcurveTo(n, M, D, (M + u.xs[y]) / 2, (D + u.ys[y]) / 2);
        }
        l.U.P.closePath(n);
      }
    }, l.U._compoGlyph = function(u, n, s) {
      for (var c = 0; c < u.parts.length; c++) {
        var f = { cmds: [], crds: [] }, d = u.parts[c];
        l.U._drawGlyf(d.glyphIndex, n, f);
        for (var v = d.m, y = 0; y < f.crds.length; y += 2) {
          var g = f.crds[y], E = f.crds[y + 1];
          s.crds.push(g * v.a + E * v.b + v.tx), s.crds.push(g * v.c + E * v.d + v.ty);
        }
        for (y = 0; y < f.cmds.length; y++) s.cmds.push(f.cmds[y]);
      }
    }, l.U._getGlyphClass = function(u, n) {
      var s = l._lctf.getInterval(n, u);
      return s == -1 ? 0 : n[s + 2];
    }, l.U._applySubs = function(u, n, s, c) {
      for (var f = u.length - n - 1, d = 0; d < s.tabs.length; d++) if (s.tabs[d] != null) {
        var v, y = s.tabs[d];
        if (!y.coverage || (v = l._lctf.coverageIndex(y.coverage, u[n])) != -1) {
          if (s.ltype == 1) u[n], y.fmt == 1 ? u[n] = u[n] + y.delta : u[n] = y.newg[v];
          else if (s.ltype == 4) for (var g = y.vals[v], E = 0; E < g.length; E++) {
            var _ = g[E], M = _.chain.length;
            if (!(M > f)) {
              for (var D = !0, A = 0, b = 0; b < M; b++) {
                for (; u[n + A + (1 + b)] == -1; ) A++;
                _.chain[b] != u[n + A + (1 + b)] && (D = !1);
              }
              if (D) {
                for (u[n] = _.nglyph, b = 0; b < M + A; b++) u[n + b + 1] = -1;
                break;
              }
            }
          }
          else if (s.ltype == 5 && y.fmt == 2) for (var z = l._lctf.getInterval(y.cDef, u[n]), C = y.cDef[z + 2], N = y.scset[C], B = 0; B < N.length; B++) {
            var O = N[B], V = O.input;
            if (!(V.length > f)) {
              for (D = !0, b = 0; b < V.length; b++) {
                var W = l._lctf.getInterval(y.cDef, u[n + 1 + b]);
                if (z == -1 && y.cDef[W + 2] != V[b]) {
                  D = !1;
                  break;
                }
              }
              if (D) {
                var Q = O.substLookupRecords;
                for (E = 0; E < Q.length; E += 2) Q[E], Q[E + 1];
              }
            }
          }
          else if (s.ltype == 6 && y.fmt == 3) {
            if (!l.U._glsCovered(u, y.backCvg, n - y.backCvg.length) || !l.U._glsCovered(u, y.inptCvg, n) || !l.U._glsCovered(u, y.ahedCvg, n + y.inptCvg.length)) continue;
            var ne = y.lookupRec;
            for (B = 0; B < ne.length; B += 2) {
              z = ne[B];
              var G = c[ne[B + 1]];
              l.U._applySubs(u, n + z, G, c);
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
        var v = n[d];
        if (v != -1) {
          for (var y = d < n.length - 1 && n[d + 1] != -1 ? n[d + 1] : 0, g = l.U.glyphToPath(u, v), E = 0; E < g.crds.length; E += 2) c.crds.push(g.crds[E] + f), c.crds.push(g.crds[E + 1]);
          for (s && c.cmds.push(s), E = 0; E < g.cmds.length; E++) c.cmds.push(g.cmds[E]);
          s && c.cmds.push("X"), f += u.hmtx.aWidth[v], d < n.length - 1 && (f += l.U.getPairAdjustment(u, v, y));
        }
      }
      return c;
    }, l.U.P = {}, l.U.P.moveTo = function(u, n, s) {
      u.cmds.push("M"), u.crds.push(n, s);
    }, l.U.P.lineTo = function(u, n, s) {
      u.cmds.push("L"), u.crds.push(n, s);
    }, l.U.P.curveTo = function(u, n, s, c, f, d, v) {
      u.cmds.push("C"), u.crds.push(n, s, c, f, d, v);
    }, l.U.P.qcurveTo = function(u, n, s, c, f) {
      u.cmds.push("Q"), u.crds.push(n, s, c, f);
    }, l.U.P.closePath = function(u) {
      u.cmds.push("Z");
    }, l.U._drawCFF = function(u, n, s, c, f) {
      for (var d = n.stack, v = n.nStems, y = n.haveWidth, g = n.width, E = n.open, _ = 0, M = n.x, D = n.y, A = 0, b = 0, z = 0, C = 0, N = 0, B = 0, O = 0, V = 0, W = 0, Q = 0, ne = { val: 0, size: 0 }; _ < u.length; ) {
        l.CFF.getCharString(u, _, ne);
        var G = ne.val;
        if (_ += ne.size, G == "o1" || G == "o18") d.length % 2 != 0 && !y && (g = d.shift() + c.nominalWidthX), v += d.length >> 1, d.length = 0, y = !0;
        else if (G == "o3" || G == "o23")
          d.length % 2 != 0 && !y && (g = d.shift() + c.nominalWidthX), v += d.length >> 1, d.length = 0, y = !0;
        else if (G == "o4") d.length > 1 && !y && (g = d.shift() + c.nominalWidthX, y = !0), E && l.U.P.closePath(f), D += d.pop(), l.U.P.moveTo(f, M, D), E = !0;
        else if (G == "o5") for (; d.length > 0; ) M += d.shift(), D += d.shift(), l.U.P.lineTo(f, M, D);
        else if (G == "o6" || G == "o7") for (var L = d.length, Y = G == "o6", ue = 0; ue < L; ue++) {
          var H = d.shift();
          Y ? M += H : D += H, Y = !Y, l.U.P.lineTo(f, M, D);
        }
        else if (G == "o8" || G == "o24") {
          L = d.length;
          for (var I = 0; I + 6 <= L; ) A = M + d.shift(), b = D + d.shift(), z = A + d.shift(), C = b + d.shift(), M = z + d.shift(), D = C + d.shift(), l.U.P.curveTo(f, A, b, z, C, M, D), I += 6;
          G == "o24" && (M += d.shift(), D += d.shift(), l.U.P.lineTo(f, M, D));
        } else {
          if (G == "o11") break;
          if (G == "o1234" || G == "o1235" || G == "o1236" || G == "o1237") G == "o1234" && (b = D, z = (A = M + d.shift()) + d.shift(), Q = C = b + d.shift(), B = C, V = D, M = (O = (N = (W = z + d.shift()) + d.shift()) + d.shift()) + d.shift(), l.U.P.curveTo(f, A, b, z, C, W, Q), l.U.P.curveTo(f, N, B, O, V, M, D)), G == "o1235" && (A = M + d.shift(), b = D + d.shift(), z = A + d.shift(), C = b + d.shift(), W = z + d.shift(), Q = C + d.shift(), N = W + d.shift(), B = Q + d.shift(), O = N + d.shift(), V = B + d.shift(), M = O + d.shift(), D = V + d.shift(), d.shift(), l.U.P.curveTo(f, A, b, z, C, W, Q), l.U.P.curveTo(f, N, B, O, V, M, D)), G == "o1236" && (A = M + d.shift(), b = D + d.shift(), z = A + d.shift(), Q = C = b + d.shift(), B = C, O = (N = (W = z + d.shift()) + d.shift()) + d.shift(), V = B + d.shift(), M = O + d.shift(), l.U.P.curveTo(f, A, b, z, C, W, Q), l.U.P.curveTo(f, N, B, O, V, M, D)), G == "o1237" && (A = M + d.shift(), b = D + d.shift(), z = A + d.shift(), C = b + d.shift(), W = z + d.shift(), Q = C + d.shift(), N = W + d.shift(), B = Q + d.shift(), O = N + d.shift(), V = B + d.shift(), Math.abs(O - M) > Math.abs(V - D) ? M = O + d.shift() : D = V + d.shift(), l.U.P.curveTo(f, A, b, z, C, W, Q), l.U.P.curveTo(f, N, B, O, V, M, D));
          else if (G == "o14") {
            if (d.length > 0 && !y && (g = d.shift() + s.nominalWidthX, y = !0), d.length == 4) {
              var te = d.shift(), J = d.shift(), w = d.shift(), T = d.shift(), R = l.CFF.glyphBySE(s, w), K = l.CFF.glyphBySE(s, T);
              l.U._drawCFF(s.CharStrings[R], n, s, c, f), n.x = te, n.y = J, l.U._drawCFF(s.CharStrings[K], n, s, c, f);
            }
            E && (l.U.P.closePath(f), E = !1);
          } else if (G == "o19" || G == "o20")
            d.length % 2 != 0 && !y && (g = d.shift() + c.nominalWidthX), v += d.length >> 1, d.length = 0, y = !0, _ += v + 7 >> 3;
          else if (G == "o21") d.length > 2 && !y && (g = d.shift() + c.nominalWidthX, y = !0), D += d.pop(), M += d.pop(), E && l.U.P.closePath(f), l.U.P.moveTo(f, M, D), E = !0;
          else if (G == "o22") d.length > 1 && !y && (g = d.shift() + c.nominalWidthX, y = !0), M += d.pop(), E && l.U.P.closePath(f), l.U.P.moveTo(f, M, D), E = !0;
          else if (G == "o25") {
            for (; d.length > 6; ) M += d.shift(), D += d.shift(), l.U.P.lineTo(f, M, D);
            A = M + d.shift(), b = D + d.shift(), z = A + d.shift(), C = b + d.shift(), M = z + d.shift(), D = C + d.shift(), l.U.P.curveTo(f, A, b, z, C, M, D);
          } else if (G == "o26") for (d.length % 2 && (M += d.shift()); d.length > 0; ) A = M, b = D + d.shift(), M = z = A + d.shift(), D = (C = b + d.shift()) + d.shift(), l.U.P.curveTo(f, A, b, z, C, M, D);
          else if (G == "o27") for (d.length % 2 && (D += d.shift()); d.length > 0; ) b = D, z = (A = M + d.shift()) + d.shift(), C = b + d.shift(), M = z + d.shift(), D = C, l.U.P.curveTo(f, A, b, z, C, M, D);
          else if (G == "o10" || G == "o29") {
            var q = G == "o10" ? c : s;
            if (d.length == 0) console.debug("error: empty stack");
            else {
              var F = d.pop(), ae = q.Subrs[F + q.Bias];
              n.x = M, n.y = D, n.nStems = v, n.haveWidth = y, n.width = g, n.open = E, l.U._drawCFF(ae, n, s, c, f), M = n.x, D = n.y, v = n.nStems, y = n.haveWidth, g = n.width, E = n.open;
            }
          } else if (G == "o30" || G == "o31") {
            var k = d.length, ee = (I = 0, G == "o31");
            for (I += k - (L = -3 & k); I < L; ) ee ? (b = D, z = (A = M + d.shift()) + d.shift(), D = (C = b + d.shift()) + d.shift(), L - I == 5 ? (M = z + d.shift(), I++) : M = z, ee = !1) : (A = M, b = D + d.shift(), z = A + d.shift(), C = b + d.shift(), M = z + d.shift(), L - I == 5 ? (D = C + d.shift(), I++) : D = C, ee = !0), l.U.P.curveTo(f, A, b, z, C, M, D), I += 4;
          } else {
            if ((G + "").charAt(0) == "o") throw console.debug("Unknown operation: " + G, u), G;
            d.push(G);
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
    var l = Uint8Array, p = Uint16Array, m = Uint32Array, u = new l([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), n = new l([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), s = new l([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), c = function(G, L) {
      for (var Y = new p(31), ue = 0; ue < 31; ++ue) Y[ue] = L += 1 << G[ue - 1];
      var H = new m(Y[30]);
      for (ue = 1; ue < 30; ++ue) for (var I = Y[ue]; I < Y[ue + 1]; ++I) H[I] = I - Y[ue] << 5 | ue;
      return [Y, H];
    }, f = c(u, 2), d = f[0], v = f[1];
    d[28] = 258, v[258] = 28;
    for (var y = c(n, 0)[0], g = new p(32768), E = 0; E < 32768; ++E) {
      var _ = (43690 & E) >>> 1 | (21845 & E) << 1;
      _ = (61680 & (_ = (52428 & _) >>> 2 | (13107 & _) << 2)) >>> 4 | (3855 & _) << 4, g[E] = ((65280 & _) >>> 8 | (255 & _) << 8) >>> 1;
    }
    var M = function(G, L, Y) {
      for (var ue = G.length, H = 0, I = new p(L); H < ue; ++H) ++I[G[H] - 1];
      var te, J = new p(L);
      for (H = 0; H < L; ++H) J[H] = J[H - 1] + I[H - 1] << 1;
      {
        te = new p(1 << L);
        var w = 15 - L;
        for (H = 0; H < ue; ++H) if (G[H]) for (var T = H << 4 | G[H], R = L - G[H], K = J[G[H] - 1]++ << R, q = K | (1 << R) - 1; K <= q; ++K) te[g[K] >>> w] = T;
      }
      return te;
    }, D = new l(288);
    for (E = 0; E < 144; ++E) D[E] = 8;
    for (E = 144; E < 256; ++E) D[E] = 9;
    for (E = 256; E < 280; ++E) D[E] = 7;
    for (E = 280; E < 288; ++E) D[E] = 8;
    var A = new l(32);
    for (E = 0; E < 32; ++E) A[E] = 5;
    var b = M(D, 9), z = M(A, 5), C = function(G) {
      for (var L = G[0], Y = 1; Y < G.length; ++Y) G[Y] > L && (L = G[Y]);
      return L;
    }, N = function(G, L, Y) {
      var ue = L / 8 | 0;
      return (G[ue] | G[ue + 1] << 8) >> (7 & L) & Y;
    }, B = function(G, L) {
      var Y = L / 8 | 0;
      return (G[Y] | G[Y + 1] << 8 | G[Y + 2] << 16) >> (7 & L);
    }, O = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], V = function(G, L, Y) {
      var ue = new Error(L || O[G]);
      if (ue.code = G, Error.captureStackTrace && Error.captureStackTrace(ue, V), !Y) throw ue;
      return ue;
    }, W = function(G, L, Y) {
      var ue = G.length;
      if (!ue || Y && !Y.l && ue < 5) return L || new l(0);
      var H = !L || Y, I = !Y || Y.i;
      Y || (Y = {}), L || (L = new l(3 * ue));
      var te, J = function(Me) {
        var ct = L.length;
        if (Me > ct) {
          var et = new l(Math.max(2 * ct, Me));
          et.set(L), L = et;
        }
      }, w = Y.f || 0, T = Y.p || 0, R = Y.b || 0, K = Y.l, q = Y.d, F = Y.m, ae = Y.n, k = 8 * ue;
      do {
        if (!K) {
          Y.f = w = N(G, T, 1);
          var ee = N(G, T + 1, 3);
          if (T += 3, !ee) {
            var se = G[(ve = ((te = T) / 8 | 0) + (7 & te && 1) + 4) - 4] | G[ve - 3] << 8, Se = ve + se;
            if (Se > ue) {
              I && V(0);
              break;
            }
            H && J(R + se), L.set(G.subarray(ve, Se), R), Y.b = R += se, Y.p = T = 8 * Se;
            continue;
          }
          if (ee == 1) K = b, q = z, F = 9, ae = 5;
          else if (ee == 2) {
            var oe = N(G, T, 31) + 257, le = N(G, T + 10, 15) + 4, Ne = oe + N(G, T + 5, 31) + 1;
            T += 14;
            for (var Ce = new l(Ne), me = new l(19), Ee = 0; Ee < le; ++Ee) me[s[Ee]] = N(G, T + 3 * Ee, 7);
            T += 3 * le;
            var be = C(me), fe = (1 << be) - 1, ge = M(me, be);
            for (Ee = 0; Ee < Ne; ) {
              var ve, $ = ge[N(G, T, fe)];
              if (T += 15 & $, (ve = $ >>> 4) < 16) Ce[Ee++] = ve;
              else {
                var He = 0, ye = 0;
                for (ve == 16 ? (ye = 3 + N(G, T, 3), T += 2, He = Ce[Ee - 1]) : ve == 17 ? (ye = 3 + N(G, T, 7), T += 3) : ve == 18 && (ye = 11 + N(G, T, 127), T += 7); ye--; ) Ce[Ee++] = He;
              }
            }
            var Ue = Ce.subarray(0, oe), de = Ce.subarray(oe);
            F = C(Ue), ae = C(de), K = M(Ue, F), q = M(de, ae);
          } else V(1);
          if (T > k) {
            I && V(0);
            break;
          }
        }
        H && J(R + 131072);
        for (var We = (1 << F) - 1, _e = (1 << ae) - 1, De = T; ; De = T) {
          var Oe = (He = K[B(G, T) & We]) >>> 4;
          if ((T += 15 & He) > k) {
            I && V(0);
            break;
          }
          if (He || V(2), Oe < 256) L[R++] = Oe;
          else {
            if (Oe == 256) {
              De = T, K = null;
              break;
            }
            var Ve = Oe - 254;
            if (Oe > 264) {
              var $e = u[Ee = Oe - 257];
              Ve = N(G, T, (1 << $e) - 1) + d[Ee], T += $e;
            }
            var ft = q[B(G, T) & _e], Be = ft >>> 4;
            if (ft || V(3), T += 15 & ft, de = y[Be], Be > 3 && ($e = n[Be], de += B(G, T) & (1 << $e) - 1, T += $e), T > k) {
              I && V(0);
              break;
            }
            H && J(R + 131072);
            for (var Ge = R + Ve; R < Ge; R += 4) L[R] = L[R - de], L[R + 1] = L[R + 1 - de], L[R + 2] = L[R + 2 - de], L[R + 3] = L[R + 3 - de];
            R = Ge;
          }
        }
        Y.l = K, Y.p = De, Y.b = R, K && (w = 1, Y.m = F, Y.d = q, Y.n = ae);
      } while (!w);
      return R == L.length ? L : (function(Me, ct, et) {
        (et == null || et > Me.length) && (et = Me.length);
        var Tt = new (Me instanceof p ? p : Me instanceof m ? m : l)(et - ct);
        return Tt.set(Me.subarray(ct, et)), Tt;
      })(L, 0, R);
    }, Q = new l(0), ne = typeof TextDecoder < "u" && new TextDecoder();
    try {
      ne.decode(Q, { stream: !0 });
    } catch {
    }
    return o.convert_streams = function(G) {
      var L = new DataView(G), Y = 0;
      function ue() {
        var oe = L.getUint16(Y);
        return Y += 2, oe;
      }
      function H() {
        var oe = L.getUint32(Y);
        return Y += 4, oe;
      }
      function I(oe) {
        se.setUint16(Se, oe), Se += 2;
      }
      function te(oe) {
        se.setUint32(Se, oe), Se += 4;
      }
      for (var J = { signature: H(), flavor: H(), length: H(), numTables: ue(), reserved: ue(), totalSfntSize: H(), majorVersion: ue(), minorVersion: ue(), metaOffset: H(), metaLength: H(), metaOrigLength: H(), privOffset: H(), privLength: H() }, w = 0; Math.pow(2, w) <= J.numTables; ) w++;
      w--;
      for (var T = 16 * Math.pow(2, w), R = 16 * J.numTables - T, K = 12, q = [], F = 0; F < J.numTables; F++) q.push({ tag: H(), offset: H(), compLength: H(), origLength: H(), origChecksum: H() }), K += 16;
      var ae, k = new Uint8Array(12 + 16 * q.length + q.reduce((function(oe, le) {
        return oe + le.origLength + 4;
      }), 0)), ee = k.buffer, se = new DataView(ee), Se = 0;
      return te(J.flavor), I(J.numTables), I(T), I(w), I(R), q.forEach((function(oe) {
        te(oe.tag), te(oe.origChecksum), te(K), te(oe.origLength), oe.outOffset = K, (K += oe.origLength) % 4 != 0 && (K += 4 - K % 4);
      })), q.forEach((function(oe) {
        var le, Ne = G.slice(oe.offset, oe.offset + oe.compLength);
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
  }, m = { C: "18g,ca,368,1kz", D: "17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v", R: "17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6", L: "x9u,jff,a,fd,jv", T: "4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n" }, u = 1, n = 2, s = 4, c = 8, f = 16, d = 32;
  let v;
  function y(O) {
    if (!v) {
      const V = {
        R: n,
        L: u,
        D: s,
        C: f,
        U: d,
        T: c
      };
      v = /* @__PURE__ */ new Map();
      for (let W in m) {
        let Q = 0;
        m[W].split(",").forEach((ne) => {
          let [G, L] = ne.split("+");
          G = parseInt(G, 36), L = L ? parseInt(L, 36) : 0, v.set(Q += G, V[W]);
          for (let Y = L; Y--; )
            v.set(++Q, V[W]);
        });
      }
    }
    return v.get(O) || d;
  }
  const g = 1, E = 2, _ = 3, M = 4, D = [null, "isol", "init", "fina", "medi"];
  function A(O) {
    const V = new Uint8Array(O.length);
    let W = d, Q = g, ne = -1;
    for (let G = 0; G < O.length; G++) {
      const L = O.codePointAt(G);
      let Y = y(L) | 0, ue = g;
      Y & c || (W & (u | s | f) ? Y & (n | s | f) ? (ue = _, (Q === g || Q === _) && V[ne]++) : Y & (u | d) && (Q === E || Q === M) && V[ne]-- : W & (n | d) && (Q === E || Q === M) && V[ne]--, Q = V[G] = ue, W = Y, ne = G, L > 65535 && G++);
    }
    return V;
  }
  function b(O, V) {
    const W = [];
    for (let ne = 0; ne < V.length; ne++) {
      const G = V.codePointAt(ne);
      G > 65535 && ne++, W.push(o.U.codeToGlyph(O, G));
    }
    const Q = O.GSUB;
    if (Q) {
      const { lookupList: ne, featureList: G } = Q;
      let L;
      const Y = /^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/, ue = [];
      G.forEach((H) => {
        if (Y.test(H.tag))
          for (let I = 0; I < H.tab.length; I++) {
            if (ue[H.tab[I]]) continue;
            ue[H.tab[I]] = !0;
            const te = ne[H.tab[I]], J = /^(isol|init|fina|medi)$/.test(H.tag);
            J && !L && (L = A(V));
            for (let w = 0; w < W.length; w++)
              (!L || !J || D[L[w]] === H.tag) && o.U._applySubs(W, w, te, ne);
          }
      });
    }
    return W;
  }
  function z(O, V) {
    const W = new Int16Array(V.length * 3);
    let Q = 0;
    for (; Q < V.length; Q++) {
      const Y = V[Q];
      if (Y === -1) continue;
      W[Q * 3 + 2] = O.hmtx.aWidth[Y];
      const ue = O.GPOS;
      if (ue) {
        const H = ue.lookupList;
        for (let I = 0; I < H.length; I++) {
          const te = H[I];
          for (let J = 0; J < te.tabs.length; J++) {
            const w = te.tabs[J];
            if (te.ltype === 1) {
              if (o._lctf.coverageIndex(w.coverage, Y) !== -1 && w.pos) {
                L(w.pos, Q);
                break;
              }
            } else if (te.ltype === 2) {
              let T = null, R = ne();
              if (R !== -1) {
                const K = o._lctf.coverageIndex(w.coverage, V[R]);
                if (K !== -1) {
                  if (w.fmt === 1) {
                    const q = w.pairsets[K];
                    for (let F = 0; F < q.length; F++)
                      q[F].gid2 === Y && (T = q[F]);
                  } else if (w.fmt === 2) {
                    const q = o.U._getGlyphClass(V[R], w.classDef1), F = o.U._getGlyphClass(Y, w.classDef2);
                    T = w.matrix[q][F];
                  }
                  if (T) {
                    T.val1 && L(T.val1, R), T.val2 && L(T.val2, Q);
                    break;
                  }
                }
              }
            } else if (te.ltype === 4) {
              const T = o._lctf.coverageIndex(w.markCoverage, Y);
              if (T !== -1) {
                const R = ne(G), K = R === -1 ? -1 : o._lctf.coverageIndex(w.baseCoverage, V[R]);
                if (K !== -1) {
                  const q = w.markArray[T], F = w.baseArray[K][q.markClass];
                  W[Q * 3] = F.x - q.x + W[R * 3] - W[R * 3 + 2], W[Q * 3 + 1] = F.y - q.y + W[R * 3 + 1];
                  break;
                }
              }
            } else if (te.ltype === 6) {
              const T = o._lctf.coverageIndex(w.mark1Coverage, Y);
              if (T !== -1) {
                const R = ne();
                if (R !== -1) {
                  const K = V[R];
                  if (C(O, K) === 3) {
                    const q = o._lctf.coverageIndex(w.mark2Coverage, K);
                    if (q !== -1) {
                      const F = w.mark1Array[T], ae = w.mark2Array[q][F.markClass];
                      W[Q * 3] = ae.x - F.x + W[R * 3] - W[R * 3 + 2], W[Q * 3 + 1] = ae.y - F.y + W[R * 3 + 1];
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      } else if (O.kern && !O.cff) {
        const H = ne();
        if (H !== -1) {
          const I = O.kern.glyph1.indexOf(V[H]);
          if (I !== -1) {
            const te = O.kern.rval[I].glyph2.indexOf(Y);
            te !== -1 && (W[H * 3 + 2] += O.kern.rval[I].vals[te]);
          }
        }
      }
    }
    return W;
    function ne(Y) {
      for (let ue = Q - 1; ue >= 0; ue--)
        if (V[ue] !== -1 && (!Y || Y(V[ue])))
          return ue;
      return -1;
    }
    function G(Y) {
      return C(O, Y) === 1;
    }
    function L(Y, ue) {
      for (let H = 0; H < 3; H++)
        W[ue * 3 + H] += Y[H] || 0;
    }
  }
  function C(O, V) {
    const W = O.GDEF && O.GDEF.glyphClassDef;
    return W ? o.U._getGlyphClass(V, W) : 0;
  }
  function N(...O) {
    for (let V = 0; V < O.length; V++)
      if (typeof O[V] == "number")
        return O[V];
  }
  function B(O) {
    const V = /* @__PURE__ */ Object.create(null), W = O["OS/2"], Q = O.hhea, ne = O.head.unitsPerEm, G = N(W && W.sTypoAscender, Q && Q.ascender, ne), L = {
      unitsPerEm: ne,
      ascender: G,
      descender: N(W && W.sTypoDescender, Q && Q.descender, 0),
      capHeight: N(W && W.sCapHeight, G),
      xHeight: N(W && W.sxHeight, G),
      lineGap: N(W && W.sTypoLineGap, Q && Q.lineGap),
      supportsCodePoint(Y) {
        return o.U.codeToGlyph(O, Y) > 0;
      },
      forEachGlyph(Y, ue, H, I) {
        let te = 0;
        const J = 1 / L.unitsPerEm * ue, w = b(O, Y);
        let T = 0;
        const R = z(O, w);
        return w.forEach((K, q) => {
          if (K !== -1) {
            let F = V[K];
            if (!F) {
              const { cmds: ae, crds: k } = o.U.glyphToPath(O, K);
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
                advanceWidth: O.hmtx.aWidth[K],
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
              T
            ), te += R[q * 3 + 2] * J, H && (te += H * ue);
          }
          T += Y.codePointAt(T) > 65535 ? 2 : 1;
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
    return B(o.parse(V)[0]);
  };
}
const Q1 = /* @__PURE__ */ lu({
  name: "Typr Font Parser",
  dependencies: [Y1, q1, X1],
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
function F1() {
  return (function(o) {
    var l = function() {
      this.buckets = /* @__PURE__ */ new Map();
    };
    l.prototype.add = function(z) {
      var C = z >> 5;
      this.buckets.set(C, (this.buckets.get(C) || 0) | 1 << (31 & z));
    }, l.prototype.has = function(z) {
      var C = this.buckets.get(z >> 5);
      return C !== void 0 && (C & 1 << (31 & z)) != 0;
    }, l.prototype.serialize = function() {
      var z = [];
      return this.buckets.forEach((function(C, N) {
        z.push((+N).toString(36) + ":" + C.toString(36));
      })), z.join(",");
    }, l.prototype.deserialize = function(z) {
      var C = this;
      this.buckets.clear(), z.split(",").forEach((function(N) {
        var B = N.split(":");
        C.buckets.set(parseInt(B[0], 36), parseInt(B[1], 36));
      }));
    };
    var p = Math.pow(2, 8), m = p - 1, u = ~m;
    function n(z) {
      var C = (function(B) {
        return B & u;
      })(z).toString(16), N = (function(B) {
        return (B & u) + p - 1;
      })(z).toString(16);
      return "codepoint-index/plane" + (z >> 16) + "/" + C + "-" + N + ".json";
    }
    function s(z, C) {
      var N = z & m, B = C.codePointAt(N / 6 | 0);
      return ((B = (B || 48) - 48) & 1 << N % 6) != 0;
    }
    function c(z, C) {
      var N;
      (N = z, N.replace(/U\+/gi, "").replace(/^,+|,+$/g, "").split(/,+/).map((function(B) {
        return B.split("-").map((function(O) {
          return parseInt(O.trim(), 16);
        }));
      }))).forEach((function(B) {
        var O = B[0], V = B[1];
        V === void 0 && (V = O), C(O, V);
      }));
    }
    function f(z, C) {
      c(z, (function(N, B) {
        for (var O = N; O <= B; O++) C(O);
      }));
    }
    var d = {}, v = {}, y = /* @__PURE__ */ new WeakMap(), g = "https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";
    function E(z) {
      var C = y.get(z);
      return C || (C = new l(), f(z.ranges, (function(N) {
        return C.add(N);
      })), y.set(z, C)), C;
    }
    var _, M = /* @__PURE__ */ new Map();
    function D(z, C, N) {
      return z[C] ? C : z[N] ? N : (function(B) {
        for (var O in B) return O;
      })(z);
    }
    function A(z, C) {
      var N = C;
      if (!z.includes(N)) {
        N = 1 / 0;
        for (var B = 0; B < z.length; B++) Math.abs(z[B] - C) < Math.abs(N - C) && (N = z[B]);
      }
      return N;
    }
    function b(z) {
      return _ || (_ = /* @__PURE__ */ new Set(), f("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000", (function(C) {
        _.add(C);
      }))), _.has(z);
    }
    return o.CodePointSet = l, o.clearCache = function() {
      d = {}, v = {};
    }, o.getFontsForString = function(z, C) {
      C === void 0 && (C = {});
      var N, B = C.lang;
      B === void 0 && (B = new RegExp("\\p{Script=Hangul}", "u").test(N = z) ? "ko" : new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}", "u").test(N) ? "ja" : "en");
      var O = C.category;
      O === void 0 && (O = "sans-serif");
      var V = C.style;
      V === void 0 && (V = "normal");
      var W = C.weight;
      W === void 0 && (W = 400);
      var Q = (C.dataUrl || g).replace(/\/$/g, ""), ne = /* @__PURE__ */ new Map(), G = new Uint8Array(z.length), L = {}, Y = {}, ue = new Array(z.length), H = /* @__PURE__ */ new Map(), I = !1;
      function te(T) {
        var R = M.get(T);
        return R || (R = fetch(Q + "/" + T).then((function(K) {
          if (!K.ok) throw new Error(K.statusText);
          return K.json().then((function(q) {
            if (!Array.isArray(q) || q[0] !== 1) throw new Error("Incorrect schema version; need 1, got " + q[0]);
            return q[1];
          }));
        })).catch((function(K) {
          if (Q !== g) return I || (console.error('unicode-font-resolver: Failed loading from dataUrl "' + Q + '", trying default CDN. ' + K.message), I = !0), Q = g, M.delete(T), te(T);
          throw K;
        })), M.set(T, R)), R;
      }
      for (var J = function(T) {
        var R = z.codePointAt(T), K = n(R);
        ue[T] = K, d[K] || H.has(K) || H.set(K, te(K).then((function(q) {
          d[K] = q;
        }))), R > 65535 && (T++, w = T);
      }, w = 0; w < z.length; w++) J(w);
      return Promise.all(H.values()).then((function() {
        H.clear();
        for (var T = function(K) {
          var q = z.codePointAt(K), F = null, ae = d[ue[K]], k = void 0;
          for (var ee in ae) {
            var se = Y[ee];
            if (se === void 0 && (se = Y[ee] = new RegExp(ee).test(B || "en")), se) {
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
          F || (console.debug("No font coverage for U+" + q.toString(16)), F = "latin"), ue[K] = F, v[F] || H.has(F) || H.set(F, te("font-meta/" + F + ".json").then((function(Ne) {
            v[F] = Ne;
          }))), q > 65535 && (K++, R = K);
        }, R = 0; R < z.length; R++) T(R);
        return Promise.all(H.values());
      })).then((function() {
        for (var T, R = null, K = 0; K < z.length; K++) {
          var q = z.codePointAt(K);
          if (R && (b(q) || E(R).has(q))) G[K] = G[K - 1];
          else {
            R = v[ue[K]];
            var F = L[R.id];
            if (!F) {
              var ae = R.typeforms, k = D(ae, O, "sans-serif"), ee = D(ae[k], V, "normal"), se = A((T = ae[k]) === null || T === void 0 ? void 0 : T[ee], W);
              F = L[R.id] = Q + "/font-files/" + R.id + "/" + k + "." + ee + "." + se + ".woff";
            }
            var Se = ne.get(F);
            Se == null && (Se = ne.size, ne.set(F, Se)), G[K] = Se;
          }
          q > 65535 && (K++, G[K] = G[K - 1]);
        }
        return { fontUrls: Array.from(ne.keys()), chars: G };
      }));
    }, Object.defineProperty(o, "__esModule", { value: !0 }), o;
  })({});
}
function K1(o, l) {
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
    f ? c(f) : m[s] ? m[s].push(c) : (m[s] = [c], u(s, (d) => {
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
    const M = /* @__PURE__ */ new Map(), D = [];
    if (v !== "italic" && (v = "normal"), typeof y != "number" && (y = y === "bold" ? 700 : 400), d && !Array.isArray(d) && (d = [d]), d = d.slice().filter((C) => !C.lang || C.lang.test(f)).reverse(), d.length) {
      let O = 0;
      (function V(W = 0) {
        for (let Q = W, ne = s.length; Q < ne; Q++) {
          const G = s.codePointAt(Q);
          if (O === 1 && _[E[Q - 1]].supportsCodePoint(G) || Q > 0 && /\s/.test(s[Q]))
            E[Q] = E[Q - 1], O === 2 && (D[D.length - 1][1] = Q);
          else
            for (let L = E[Q], Y = d.length; L <= Y; L++)
              if (L === Y) {
                const ue = O === 2 ? D[D.length - 1] : D[D.length] = [Q, Q];
                ue[1] = Q, O = 2;
              } else {
                E[Q] = L;
                const { src: ue, unicodeRange: H } = d[L];
                if (!H || z(G, H)) {
                  const I = p[ue];
                  if (!I) {
                    n(ue, () => {
                      V(Q);
                    });
                    return;
                  }
                  if (I.supportsCodePoint(G)) {
                    let te = M.get(I);
                    typeof te != "number" && (te = _.length, _.push(I), M.set(I, te)), E[Q] = te, O = 1;
                    break;
                  }
                }
              }
          G > 65535 && Q + 1 < ne && (E[Q + 1] = E[Q], Q++, O === 2 && (D[D.length - 1][1] = Q));
        }
        A();
      })();
    } else
      D.push([0, s.length - 1]), A();
    function A() {
      if (D.length) {
        const C = D.map((N) => s.substring(N[0], N[1] + 1)).join(`
`);
        l.getFontsForString(C, {
          lang: f || void 0,
          style: v,
          weight: y,
          dataUrl: g
        }).then(({ fontUrls: N, chars: B }) => {
          const O = _.length;
          let V = 0;
          D.forEach((Q) => {
            for (let ne = 0, G = Q[1] - Q[0]; ne <= G; ne++)
              E[Q[0] + ne] = B[V++] + O;
            V++;
          });
          let W = 0;
          N.forEach((Q, ne) => {
            n(Q, (G) => {
              _[ne + O] = G, ++W === N.length && b();
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
    function z(C, N) {
      for (let B = 0; B < N.length; B++) {
        const [O, V = O] = N[B];
        if (O <= C && C <= V)
          return !0;
      }
      return !1;
    }
  };
}
const Z1 = /* @__PURE__ */ lu({
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
  const m = /[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/, u = "[^\\S\\u00A0]", n = new RegExp(`${u}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);
  function s({ text: _, lang: M, fonts: D, style: A, weight: b, preResolvedFonts: z, unicodeFontsURL: C }, N) {
    const B = ({ chars: O, fonts: V }) => {
      let W, Q;
      const ne = [];
      for (let G = 0; G < O.length; G++)
        O[G] !== Q ? (Q = O[G], ne.push(W = { start: G, end: G, fontObj: V[O[G]] })) : W.end = G;
      N(ne);
    };
    z ? B(z) : o(
      _,
      B,
      { lang: M, fonts: D, style: A, weight: b, unicodeFontsURL: C }
    );
  }
  function c({
    text: _ = "",
    font: M,
    lang: D,
    sdfGlyphSize: A = 64,
    fontSize: b = 400,
    fontWeight: z = 1,
    fontStyle: C = "normal",
    letterSpacing: N = 0,
    lineHeight: B = "normal",
    maxWidth: O = 1 / 0,
    direction: V,
    textAlign: W = "left",
    textIndent: Q = 0,
    whiteSpace: ne = "normal",
    overflowWrap: G = "normal",
    anchorX: L = 0,
    anchorY: Y = 0,
    metricsOnly: ue = !1,
    unicodeFontsURL: H,
    preResolvedFonts: I = null,
    includeCaretPositions: te = !1,
    chunkedBoundsSize: J = 8192,
    colorRanges: w = null
  }, T) {
    const R = y(), K = { fontLoad: 0, typesetting: 0 };
    _.indexOf("\r") > -1 && (console.info("Typesetter: got text with \\r chars; normalizing to \\n"), _ = _.replace(/\r\n/g, `
`).replace(/\r/g, `
`)), b = +b, N = +N, O = +O, B = B || "normal", Q = +Q, s({
      text: _,
      lang: D,
      style: C,
      weight: z,
      fonts: typeof M == "string" ? [{ src: M }] : M,
      unicodeFontsURL: H,
      preResolvedFonts: I
    }, (q) => {
      K.fontLoad = y() - R;
      const F = isFinite(O);
      let ae = null, k = null, ee = null, se = null, Se = null, oe = null, le = null, Ne = null, Ce = 0, me = 0, Ee = ne !== "nowrap";
      const be = /* @__PURE__ */ new Map(), fe = y();
      let ge = Q, ve = 0, $ = new g();
      const He = [$];
      q.forEach((_e) => {
        const { fontObj: De } = _e, { ascender: Oe, descender: Ve, unitsPerEm: $e, lineGap: ft, capHeight: Be, xHeight: Ge } = De;
        let Me = be.get(De);
        if (!Me) {
          const Re = b / $e, Ze = B === "normal" ? (Oe - Ve + ft) * Re : B * b, Ta = (Ze - (Oe - Ve) * Re) / 2, we = Math.min(Ze, (Oe - Ve) * Re), Xe = (Oe + Ve) / 2 * Re + we / 2;
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
            baseline: -Ta - Oe * Re,
            // baseline offset from top of line height
            // cap: -halfLeading - capHeight * fontSizeMult, // cap from top of line height
            // ex: -halfLeading - xHeight * fontSizeMult, // ex from top of line height
            caretTop: Xe,
            caretBottom: Xe - we
          }, be.set(De, Me);
        }
        const { fontSizeMult: ct } = Me, et = _.slice(_e.start, _e.end + 1);
        let Tt, tt;
        De.forEachGlyph(et, b, N, (Re, Ze, Ta, we) => {
          Ze += ve, we += _e.start, Tt = Ze, tt = Re;
          const Xe = _.charAt(we), mt = Re.advanceWidth * ct, at = $.count;
          let ze;
          if ("isEmpty" in Re || (Re.isWhitespace = !!Xe && new RegExp(u).test(Xe), Re.canBreakAfter = !!Xe && n.test(Xe), Re.isEmpty = Re.xMin === Re.xMax || Re.yMin === Re.yMax || m.test(Xe)), !Re.isWhitespace && !Re.isEmpty && me++, Ee && F && !Re.isWhitespace && Ze + mt + ge > O && at) {
            if ($.glyphAt(at - 1).glyphObj.canBreakAfter)
              ze = new g(), ge = -Ze;
            else
              for (let xt = at; xt--; )
                if (xt === 0 && G === "break-word") {
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
            ze && ($.isSoftWrapped = !0, $ = ze, He.push($), Ce = O);
          }
          let nt = $.glyphAt($.count);
          nt.glyphObj = Re, nt.x = Ze + ge, nt.y = Ta, nt.width = mt, nt.charIndex = we, nt.fontData = Me, Xe === `
` && ($ = new g(), He.push($), ge = -(Ze + mt + N * b) + Q);
        }), ve = Tt + tt.advanceWidth * ct + N * b;
      });
      let ye = 0;
      He.forEach((_e) => {
        let De = !0;
        for (let Oe = _e.count; Oe--; ) {
          const Ve = _e.glyphAt(Oe);
          De && !Ve.glyphObj.isWhitespace && (_e.width = Ve.x + Ve.width, _e.width > Ce && (Ce = _e.width), De = !1);
          let { lineHeight: $e, capHeight: ft, xHeight: Be, baseline: Ge } = Ve.fontData;
          $e > _e.lineHeight && (_e.lineHeight = $e);
          const Me = Ge - _e.baseline;
          Me < 0 && (_e.baseline += Me, _e.cap += Me, _e.ex += Me), _e.cap = Math.max(_e.cap, _e.baseline + ft), _e.ex = Math.max(_e.ex, _e.baseline + Be);
        }
        _e.baseline -= ye, _e.cap -= ye, _e.ex -= ye, ye += _e.lineHeight;
      });
      let Ue = 0, de = 0;
      if (L && (typeof L == "number" ? Ue = -L : typeof L == "string" && (Ue = -Ce * (L === "left" ? 0 : L === "center" ? 0.5 : L === "right" ? 1 : d(L)))), Y && (typeof Y == "number" ? de = -Y : typeof Y == "string" && (de = Y === "top" ? 0 : Y === "top-baseline" ? -He[0].baseline : Y === "top-cap" ? -He[0].cap : Y === "top-ex" ? -He[0].ex : Y === "middle" ? ye / 2 : Y === "bottom" ? ye : Y === "bottom-baseline" ? -He[He.length - 1].baseline : d(Y) * ye)), !ue) {
        const _e = l.getEmbeddingLevels(_, V);
        ae = new Uint16Array(me), k = new Uint8Array(me), ee = new Float32Array(me * 2), se = {}, le = [1 / 0, 1 / 0, -1 / 0, -1 / 0], Ne = [], te && (oe = new Float32Array(_.length * 4)), w && (Se = new Uint8Array(me * 3));
        let De = 0, Oe = -1, Ve = -1, $e, ft;
        if (He.forEach((Be, Ge) => {
          let { count: Me, width: ct } = Be;
          if (Me > 0) {
            let et = 0;
            for (let we = Me; we-- && Be.glyphAt(we).glyphObj.isWhitespace; )
              et++;
            let Tt = 0, tt = 0;
            if (W === "center")
              Tt = (Ce - ct) / 2;
            else if (W === "right")
              Tt = Ce - ct;
            else if (W === "justify" && Be.isSoftWrapped) {
              let we = 0;
              for (let Xe = Me - et; Xe--; )
                Be.glyphAt(Xe).glyphObj.isWhitespace && we++;
              tt = (Ce - ct) / we;
            }
            if (tt || Tt) {
              let we = 0;
              for (let Xe = 0; Xe < Me; Xe++) {
                let mt = Be.glyphAt(Xe);
                const at = mt.glyphObj;
                mt.x += Tt + we, tt !== 0 && at.isWhitespace && Xe < Me - et && (we += tt, mt.width += tt);
              }
            }
            const Re = l.getReorderSegments(
              _,
              _e,
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
            const Ta = (we) => Ze = we;
            for (let we = 0; we < Me; we++) {
              const Xe = Be.glyphAt(we);
              Ze = Xe.glyphObj;
              const mt = Ze.index, at = _e.levels[Xe.charIndex] & 1;
              if (at) {
                const ze = l.getMirroredCharacter(_[Xe.charIndex]);
                ze && Xe.fontData.fontObj.forEachGlyph(ze, 0, 0, Ta);
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
          const Be = _.length - Oe;
          Be > 1 && v(oe, Oe, Be);
        }
      }
      const We = [];
      be.forEach(({ index: _e, src: De, unitsPerEm: Oe, ascender: Ve, descender: $e, lineHeight: ft, capHeight: Be, xHeight: Ge }) => {
        We[_e] = { src: De, unitsPerEm: Oe, ascender: Ve, descender: $e, lineHeight: ft, capHeight: Be, xHeight: Ge };
      }), K.typesetting = y() - fe, T({
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
  function f(_, M) {
    c({ ..._, metricsOnly: !0 }, (D) => {
      const [A, b, z, C] = D.blockBounds;
      M({
        width: z - A,
        height: C - b
      });
    });
  }
  function d(_) {
    let M = _.match(/^([\d.]+)%$/), D = M ? parseFloat(M[1]) : NaN;
    return isNaN(D) ? 0 : D / 100;
  }
  function v(_, M, D) {
    const A = _[M * 4], b = _[M * 4 + 1], z = _[M * 4 + 2], C = _[M * 4 + 3], N = (b - A) / D;
    for (let B = 0; B < D; B++) {
      const O = (M + B) * 4;
      _[O] = A + N * B, _[O + 1] = A + N * (B + 1), _[O + 2] = z, _[O + 3] = C;
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
      let M = g.flyweight;
      return M.data = this.data, M.index = _, M;
    },
    splitAt(_) {
      let M = new g();
      return M.data = this.data.splice(_ * E.length), M;
    }
  }, g.flyweight = E.reduce((_, M, D, A) => (Object.defineProperty(_, M, {
    get() {
      return this.data[this.index * E.length + D];
    },
    set(b) {
      this.data[this.index * E.length + D] = b;
    }
  }), _), { data: null, index: 0 }), {
    typeset: c,
    measure: f
  };
}
const dl = () => (self.performance || Date).now(), Zi = /* @__PURE__ */ qs();
let ns;
function w1(o, l, p, m, u, n, s, c, f, d, v = !0) {
  return v ? P1(o, l, p, m, u, n, s, c, f, d).then(
    null,
    (y) => (ns || (console.warn("WebGL SDF generation failed, falling back to JS", y), ns = !0), us(o, l, p, m, u, n, s, c, f, d))
  ) : us(o, l, p, m, u, n, s, c, f, d);
}
const Vi = [], W1 = 5;
let Ho = 0;
function Qs() {
  const o = dl();
  for (; Vi.length && dl() - o < W1; )
    Vi.shift()();
  Ho = Vi.length ? setTimeout(Qs, 0) : 0;
}
const P1 = (...o) => new Promise((l, p) => {
  Vi.push(() => {
    const m = dl();
    try {
      Zi.webgl.generateIntoCanvas(...o), l({ timing: dl() - m });
    } catch (u) {
      p(u);
    }
  }), Ho || (Ho = setTimeout(Qs, 0));
}), k1 = 4, I1 = 2e3, ls = {};
let $1 = 0;
function us(o, l, p, m, u, n, s, c, f, d) {
  const v = "TroikaTextSDFGenerator_JS_" + $1++ % k1;
  let y = ls[v];
  return y || (y = ls[v] = {
    workerModule: lu({
      name: v,
      workerId: v,
      dependencies: [
        qs,
        dl
      ],
      init(g, E) {
        const _ = g().javascript.generate;
        return function(...M) {
          const D = E();
          return {
            textureData: _(...M),
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
  }), y.requests++, clearTimeout(y.idleTimer), y.workerModule(o, l, p, m, u, n).then(({ textureData: g, timing: E }) => {
    const _ = dl(), M = new Uint8Array(g.length * 4);
    for (let D = 0; D < g.length; D++)
      M[D * 4 + d] = g[D];
    return Zi.webglUtils.renderImageData(s, M, c, f, o, l, 1 << 3 - d), E += dl() - _, --y.requests === 0 && (y.idleTimer = setTimeout(() => {
      R1(v);
    }, I1)), { timing: E };
  });
}
function e0(o) {
  o._warm || (Zi.webgl.isSupported(o), o._warm = !0);
}
const t0 = Zi.webglUtils.resizeWebGLCanvasWithoutClearing, Xu = {
  unicodeFontsURL: null,
  sdfGlyphSize: 64,
  sdfMargin: 1 / 16,
  sdfExponent: 9,
  textureWidth: 2048
}, a0 = /* @__PURE__ */ new Fi();
function tu() {
  return (self.performance || Date).now();
}
const is = /* @__PURE__ */ Object.create(null);
function Fs(o, l) {
  o = u0({}, o);
  const p = tu(), m = [];
  if (o.font && m.push({ label: "user", src: i0(o.font) }), o.font = m, o.text = "" + o.text, o.sdfGlyphSize = o.sdfGlyphSize || Xu.sdfGlyphSize, o.unicodeFontsURL = o.unicodeFontsURL || Xu.unicodeFontsURL, o.colorRanges != null) {
    let g = {};
    for (let E in o.colorRanges)
      if (o.colorRanges.hasOwnProperty(E)) {
        let _ = o.colorRanges[E];
        typeof _ != "number" && (_ = a0.set(_).getHex()), g[E] = _;
      }
    o.colorRanges = g;
  }
  Object.freeze(o);
  const { textureWidth: u, sdfExponent: n } = Xu, { sdfGlyphSize: s } = o, c = u / s * 4;
  let f = is[s];
  if (!f) {
    const g = document.createElement("canvas");
    g.width = u, g.height = s * 256 / c, f = is[s] = {
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
    const { glyphIds: E, glyphFontIndices: _, fontData: M, glyphPositions: D, fontSize: A, timings: b } = g, z = [], C = new Float32Array(E.length * 4);
    let N = 0, B = 0;
    const O = tu(), V = M.map((L) => {
      let Y = f.glyphsByFont.get(L.src);
      return Y || f.glyphsByFont.set(L.src, Y = /* @__PURE__ */ new Map()), Y;
    });
    E.forEach((L, Y) => {
      const ue = _[Y], { src: H, unitsPerEm: I } = M[ue];
      let te = V[ue].get(L);
      if (!te) {
        const { path: K, pathBounds: q } = g.glyphData[H][L], F = Math.max(q[2] - q[0], q[3] - q[1]) / s * (Xu.sdfMargin * s + 0.5), ae = f.glyphCount++, k = [
          q[0] - F,
          q[1] - F,
          q[2] + F,
          q[3] + F
        ];
        V[ue].set(L, te = { path: K, atlasIndex: ae, sdfViewBox: k }), z.push(te);
      }
      const { sdfViewBox: J } = te, w = D[B++], T = D[B++], R = A / I;
      C[N++] = w + J[0] * R, C[N++] = T + J[1] * R, C[N++] = w + J[2] * R, C[N++] = T + J[3] * R, E[Y] = te.atlasIndex;
    }), b.quads = (b.quads || 0) + (tu() - O);
    const W = tu();
    b.sdf = {};
    const Q = v.height, ne = Math.ceil(f.glyphCount / c), G = Math.pow(2, Math.ceil(Math.log2(ne * s)));
    G > Q && (console.info(`Increasing SDF texture size ${Q}->${G}`), t0(v, u, G), d.dispose()), Promise.all(z.map(
      (L) => Ks(L, f, o.gpuAccelerateSDF).then(({ timing: Y }) => {
        b.sdf[L.atlasIndex] = Y;
      })
    )).then(() => {
      z.length && !f.contextLost && (Zs(f), d.needsUpdate = !0), b.sdfTotal = tu() - W, b.total = tu() - p, l(Object.freeze({
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
function Ks({ path: o, atlasIndex: l, sdfViewBox: p }, { sdfGlyphSize: m, sdfCanvas: u, contextLost: n }, s) {
  if (n)
    return Promise.resolve({ timing: -1 });
  const { textureWidth: c, sdfExponent: f } = Xu, d = Math.max(p[2] - p[0], p[3] - p[1]), v = Math.floor(l / 4), y = v % (c / m) * m, g = Math.floor(v / (c / m)) * m, E = l % 4;
  return w1(m, m, o, p, d, f, u, y, g, E, s);
}
function n0(o) {
  const l = o.sdfCanvas;
  l.addEventListener("webglcontextlost", (p) => {
    console.log("Context Lost", p), p.preventDefault(), o.contextLost = !0;
  }), l.addEventListener("webglcontextrestored", (p) => {
    console.log("Context Restored", p), o.contextLost = !1;
    const m = [];
    o.glyphsByFont.forEach((u) => {
      u.forEach((n) => {
        m.push(Ks(n, o, !0));
      });
    }), Promise.all(m).then(() => {
      Zs(o), o.sdfTexture.needsUpdate = !0;
    });
  });
}
function l0({ font: o, characters: l, sdfGlyphSize: p }, m) {
  let u = Array.isArray(l) ? l.join(`
`) : "" + l;
  Fs({ font: o, sdfGlyphSize: p, text: u }, m);
}
function u0(o, l) {
  for (let p in l)
    l.hasOwnProperty(p) && (o[p] = l[p]);
  return o;
}
let Ni;
function i0(o) {
  return Ni || (Ni = typeof document > "u" ? {} : document.createElement("a")), Ni.href = o, Ni.href;
}
function Zs(o) {
  if (typeof createImageBitmap != "function") {
    console.info("Safari<15: applying SDF canvas workaround");
    const { sdfCanvas: l, sdfTexture: p } = o, { width: m, height: u } = l, n = o.sdfCanvas.getContext("webgl");
    let s = p.image.data;
    (!s || s.length !== m * u * 4) && (s = new Uint8Array(m * u * 4), p.image = { width: m, height: u, data: s }, p.flipY = !1, p.isDataTexture = !0), n.readPixels(0, 0, m, u, n.RGBA, n.UNSIGNED_BYTE, s);
  }
}
const r0 = /* @__PURE__ */ lu({
  name: "Typesetter",
  dependencies: [
    J1,
    Z1,
    x1
  ],
  init(o, l, p) {
    return o(l, p());
  }
}), Js = /* @__PURE__ */ lu({
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
class s0 extends uv {
  constructor() {
    super(), this.detail = 1, this.curveRadius = 0, this.groups = [
      { start: 0, count: 1 / 0, materialIndex: 0 },
      { start: 0, count: 1 / 0, materialIndex: 1 }
    ], this.boundingSphere = new iv(), this.boundingBox = new hs();
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
  updateGlyphs(l, p, m, u, n) {
    this.updateAttributeData(f0, l, 4), this.updateAttributeData(os, p, 1), this.updateAttributeData(c0, n, 3), this._blockBounds = m, this._chunkedBounds = u, this.instanceCount = p.length, this._updateBounds();
  }
  _updateBounds() {
    const l = this._blockBounds;
    if (l) {
      const { curveRadius: p, boundingBox: m } = this;
      if (p) {
        const { PI: u, floor: n, min: s, max: c, sin: f, cos: d } = Math, v = u / 2, y = u * 2, g = Math.abs(p), E = l[0] / g, _ = l[2] / g, M = n((E + v) / y) !== n((_ + v) / y) ? -g : s(f(E) * g, f(_) * g), D = n((E - v) / y) !== n((_ - v) / y) ? g : c(f(E) * g, f(_) * g), A = n((E + u) / y) !== n((_ + u) / y) ? g * 2 : c(g - d(E) * g, g - d(_) * g);
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
    p ? u && u.array.length === p.length ? (u.array.set(p), u.needsUpdate = !0) : (this.setAttribute(l, new rv(p, m)), delete this._maxInstanceCount, this.dispose()) : u && this.deleteAttribute(l);
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
      uTroikaSDFTextureSize: { value: new Li() },
      uTroikaSDFGlyphSize: { value: 0 },
      uTroikaSDFExponent: { value: 0 },
      uTroikaTotalBounds: { value: new Oc(0, 0, 0, 0) },
      uTroikaClipRect: { value: new Oc(0, 0, 0, 0) },
      uTroikaEdgeOffset: { value: 0 },
      uTroikaFillOpacity: { value: 1 },
      uTroikaPositionOffset: { value: new Li() },
      uTroikaCurveRadius: { value: 0 },
      uTroikaBlurRadius: { value: 0 },
      uTroikaStrokeWidth: { value: 0 },
      uTroikaStrokeColor: { value: new Fi() },
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
      let u = /\buniform\s+vec3\s+diffuse\b/;
      return u.test(m) && (m = m.replace(u, "varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g, "vTroikaGlyphColor"), u.test(p) || (p = p.replace(
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
}), fs = 8421504, cs = /* @__PURE__ */ new lv(), Bi = /* @__PURE__ */ new Lo(), Mo = /* @__PURE__ */ new Lo(), qu = [], y0 = /* @__PURE__ */ new Lo(), Do = "+x+y";
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
        m.forEach((u) => u && u());
      })), this.dispatchEvent(S0), l && l();
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
    const p = l.isTextOutlineMaterial, m = l.uniforms, u = this.textRenderInfo;
    if (u) {
      const { sdfTexture: c, blockBounds: f } = u;
      m.uTroikaSDFTexture.value = c, m.uTroikaSDFTextureSize.value.set(c.image.width, c.image.height), m.uTroikaSDFGlyphSize.value = u.sdfGlyphSize, m.uTroikaSDFExponent.value = u.sdfExponent, m.uTroikaTotalBounds.value.fromArray(f), m.uTroikaUseGlyphColors.value = !p && !!u.glyphColors;
      let d = 0, v = 0, y = 0, g, E, _, M = 0, D = 0;
      if (p) {
        let { outlineWidth: b, outlineOffsetX: z, outlineOffsetY: C, outlineBlur: N, outlineOpacity: B } = this;
        d = this._parsePercent(b) || 0, v = Math.max(0, this._parsePercent(N) || 0), g = B, M = this._parsePercent(z) || 0, D = this._parsePercent(C) || 0;
      } else
        y = Math.max(0, this._parsePercent(this.strokeWidth) || 0), y && (_ = this.strokeColor, m.uTroikaStrokeColor.value.set(_ ?? fs), E = this.strokeOpacity, E == null && (E = 1)), g = this.fillOpacity;
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
      const c = l.hasOwnProperty("color") ? l.color : l.color = new Fi();
      (n !== c._input || typeof n == "object") && c.set(c._input = n);
    }
    let s = this.orientation || Do;
    if (s !== l._orientation) {
      let c = m.uTroikaOrient.value;
      s = s.replace(/[^-+xyz]/g, "");
      let f = s !== Do && s.match(/^([-+])([xyz])([-+])([xyz])$/);
      if (f) {
        let [, d, v, y, g] = f;
        Bi.set(0, 0, 0)[v] = d === "-" ? 1 : -1, Mo.set(0, 0, 0)[g] = y === "-" ? -1 : 1, cs.lookAt(y0, Bi.cross(Mo), Mo), c.setFromMatrix4(cs);
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
      const n = m.blockBounds, s = u ? Ws() : ws(), c = s.geometry, { position: f, uv: d } = c.attributes;
      for (let v = 0; v < d.count; v++) {
        let y = n[0] + d.getX(v) * (n[2] - n[0]);
        const g = n[1] + d.getY(v) * (n[3] - n[1]);
        let E = 0;
        u && (E = u - Math.cos(y / u) * u, y = Math.sin(y / u) * u), f.setXYZ(v, y, g, E);
      }
      c.boundingSphere = this.geometry.boundingSphere, c.boundingBox = this.geometry.boundingBox, s.matrixWorld = this.matrixWorld, s.material.side = this.material.side, qu.length = 0, s.raycast(l, qu);
      for (let v = 0; v < qu.length; v++)
        qu[v].object = this, p.push(qu[v]);
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
new Fi();
const Is = /* @__PURE__ */ qe.forwardRef(({
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
  const v = Rs(({
    invalidate: _
  }) => _), [y] = qe.useState(() => new ks()), [g, E] = qe.useMemo(() => {
    const _ = [];
    let M = "";
    return qe.Children.forEach(n, (D) => {
      typeof D == "string" || typeof D == "number" ? M += D : _.push(D);
    }), [_, M];
  }, [n]);
  return ys(() => new Promise((_) => l0({
    font: m,
    characters: s
  }, _)), ["troika-text", m, s]), qe.useLayoutEffect(() => void y.sync(() => {
    v(), c && c(y);
  })), qe.useEffect(() => () => y.dispose(), [y]), /* @__PURE__ */ qe.createElement("primitive", No({
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
function b0() {
  const p = [];
  for (let u = 1; u <= 12; u++) {
    const n = (90 - u * 30) * (Math.PI / 180), s = Math.cos(n) * 0.133 * 0.85, c = Math.sin(n) * 0.133 * 0.85;
    p.push(
      /* @__PURE__ */ he(
        Is,
        {
          position: [s, c + 85e-4, 1e-3],
          fontSize: 0.013,
          color: "#333333",
          anchorX: "center",
          anchorY: "center",
          children: u
        },
        `num-${u}`
      )
    );
  }
  const m = [];
  for (let u = 0; u < 60; u++) {
    const n = (90 - u * 6) * (Math.PI / 180), s = u % 5 === 0, c = 0.133 * 0.985, f = s ? c - 0.133 * 0.06 : c - 0.133 * 0.03, d = (c + f) / 2, v = c - f, y = s ? 0.133 * 0.01 : 0.133 * 5e-3, g = Math.cos(n) * d, E = Math.sin(n) * d, _ = n - Math.PI / 2;
    m.push(
      /* @__PURE__ */ it("mesh", { position: [g, E, 0], rotation: [0, 0, _], children: [
        /* @__PURE__ */ he("boxGeometry", { args: [y, v, 1e-3] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "#333333" })
      ] }, `tick-${u}`)
    );
  }
  return /* @__PURE__ */ it("group", { children: [
    /* @__PURE__ */ it("mesh", { children: [
      /* @__PURE__ */ he("ringGeometry", { args: [0.133 * 0.985, 0.133, 64] }),
      /* @__PURE__ */ he("meshBasicMaterial", { color: "#333333" })
    ] }),
    p,
    m
  ] });
}
function _0() {
  return /* @__PURE__ */ it("group", { children: [
    /* @__PURE__ */ it("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -6, -4], children: [
      /* @__PURE__ */ he("planeGeometry", { args: [200, 100] }),
      " ",
      /* @__PURE__ */ he("meshPhongMaterial", { color: "#489147" })
    ] }),
    /* @__PURE__ */ it("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -1.139, -5.76], children: [
      /* @__PURE__ */ he("circleGeometry", { args: [1, 64] }),
      /* @__PURE__ */ he("meshPhongMaterial", { color: "#DEB887" })
    ] }),
    /* @__PURE__ */ it("mesh", { rotation: [-Math.PI / 2, 0, Math.PI], position: [0, -1.138, -5.6], children: [
      /* @__PURE__ */ he("shapeGeometry", { args: [
        (() => {
          const o = new Le.Shape();
          return o.moveTo(-0.2, 0.2), o.lineTo(0.2, 0.2), o.lineTo(0.2, -0.24), o.lineTo(0, -0.56), o.lineTo(-0.2, -0.24), o.lineTo(-0.2, 0.2), o;
        })()
      ] }),
      /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
    ] }),
    /* @__PURE__ */ it("mesh", { rotation: [-Math.PI / 2, 0, -Math.PI / 4], position: [-3, -1.049, -2.3], children: [
      /* @__PURE__ */ he("planeGeometry", { args: [0.02, 7] }),
      /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
    ] }),
    /* @__PURE__ */ it("mesh", { rotation: [-Math.PI / 2, 0, Math.PI / 4], position: [3, -1.049, -2.3], children: [
      /* @__PURE__ */ he("planeGeometry", { args: [0.02, 7] }),
      /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
    ] }),
    /* @__PURE__ */ it("group", { position: [0.45, -1.137, -5.6], children: [
      /* @__PURE__ */ it("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0.4], children: [
        /* @__PURE__ */ he("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ it("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, -0.4], children: [
        /* @__PURE__ */ he("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ it("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [-0.15, 0, 0], children: [
        /* @__PURE__ */ he("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ it("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0.15, 0, 0], children: [
        /* @__PURE__ */ he("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
      ] })
    ] }),
    /* @__PURE__ */ it("group", { position: [-0.45, -1.137, -5.6], children: [
      /* @__PURE__ */ it("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0.4], children: [
        /* @__PURE__ */ he("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ it("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0, -0.4], children: [
        /* @__PURE__ */ he("planeGeometry", { args: [0.3, 0.02] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ it("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [-0.15, 0, 0], children: [
        /* @__PURE__ */ he("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
      ] }),
      /* @__PURE__ */ it("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0.15, 0, 0], children: [
        /* @__PURE__ */ he("planeGeometry", { args: [0.02, 0.8] }),
        /* @__PURE__ */ he("meshBasicMaterial", { color: "white" })
      ] })
    ] })
  ] });
}
function T0() {
  const o = Qu(), l = Qu(), p = Qu();
  return zs((m) => {
    const u = m.clock.elapsedTime;
    o.current && o.current.scale.setScalar(0.5 + Math.max(0, Math.sin(u * 3)) * 0.5), l.current && l.current.scale.setScalar(0.5 + Math.max(0, Math.sin(u * 3 - 0.5)) * 0.5), p.current && p.current.scale.setScalar(0.5 + Math.max(0, Math.sin(u * 3 - 1)) * 0.5);
  }), /* @__PURE__ */ it("group", { children: [
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
    /* @__PURE__ */ it("mesh", { ref: o, position: [-8e-3, -0.01, 0], children: [
      /* @__PURE__ */ he("sphereGeometry", { args: [2e-3, 8, 8] }),
      /* @__PURE__ */ he("meshBasicMaterial", { color: "#999999" })
    ] }),
    /* @__PURE__ */ it("mesh", { ref: l, position: [0, -0.01, 0], children: [
      /* @__PURE__ */ he("sphereGeometry", { args: [2e-3, 8, 8] }),
      /* @__PURE__ */ he("meshBasicMaterial", { color: "#999999" })
    ] }),
    /* @__PURE__ */ it("mesh", { ref: p, position: [8e-3, -0.01, 0], children: [
      /* @__PURE__ */ he("sphereGeometry", { args: [2e-3, 8, 8] }),
      /* @__PURE__ */ he("meshBasicMaterial", { color: "#999999" })
    ] })
  ] });
}
function U0() {
  return /* @__PURE__ */ it("group", { children: [
    /* @__PURE__ */ it("mesh", { rotation: [0, 0, Math.PI / 2], children: [
      /* @__PURE__ */ he("cylinderGeometry", { args: [3e-3, 3e-3, 0.3, 32] }),
      /* @__PURE__ */ he("meshStandardMaterial", { color: "red" })
    ] }),
    /* @__PURE__ */ it("mesh", { position: [0.15, 0, 0], rotation: [0, 0, -Math.PI / 2], children: [
      /* @__PURE__ */ he("coneGeometry", { args: [9e-3, 0.03, 32] }),
      /* @__PURE__ */ he("meshStandardMaterial", { color: "red" })
    ] })
  ] });
}
function M0({ spinRate: o, playing: l, spinAxis: p, currentSeamLat: m, currentSeamLon: u, useSeamOrientation: n, resetSpin: s, showRod: c }) {
  const f = Qo(
    sv,
    "/models/baseball-v2.glb",
    (E) => {
      E.setMeshoptDecoder(dv);
    }
  ), d = sl.useRef(), v = sl.useRef(), y = sl.useRef(), { invalidate: g } = Rs();
  return _a(() => {
    f.scene && f.scene.rotation.set(Math.PI / 2, 3 * Math.PI / 2, 0);
  }, [f]), _a(() => {
    d.current && (d.current.quaternion.identity(), g());
  }, [s, g]), _a(() => {
    if (v.current) {
      if (v.current.quaternion.identity(), n && m != null && u != null && !isNaN(m) && !isNaN(u)) {
        const E = Le.MathUtils.degToRad(m), _ = Le.MathUtils.degToRad(u), M = Math.cos(E) * Math.sin(_), D = Math.sin(E), A = Math.cos(E) * Math.cos(_), b = new Le.Vector3(-M, D, A).normalize(), z = new Le.Vector3(1, 0, 0), C = new Le.Quaternion().setFromUnitVectors(
          z,
          b
        );
        v.current.quaternion.copy(C);
      }
      g();
    }
  }, [n, m, u, g]), _a(() => {
    if (y.current && p) {
      const E = new Le.Vector3(1, 0, 0), _ = new Le.Quaternion().setFromUnitVectors(
        E,
        p.clone().normalize()
      );
      y.current.quaternion.copy(_), g();
    }
  }, [p, g]), zs((E, _) => {
    if (l && d.current) {
      const D = o * 2 * Math.PI / 60 * _, A = new Le.Vector3(1, 0, 0), b = new Le.Quaternion();
      b.setFromAxisAngle(A, D), d.current.quaternion.multiplyQuaternions(b, d.current.quaternion);
    }
  }), /* @__PURE__ */ he("group", { children: /* @__PURE__ */ it("group", { ref: y, children: [
    c ? /* @__PURE__ */ he(U0, {}) : null,
    /* @__PURE__ */ he("group", { ref: d, children: /* @__PURE__ */ he("group", { ref: v, children: /* @__PURE__ */ he("primitive", { object: f.scene, scale: 2.2 }) }) })
  ] }) });
}
function D0() {
  const [o, l] = Na(!0), [p, m] = Na(!0), [u, n] = Na(!0), [s, c] = Na([]), [f, d] = Na(null), [v, y] = Na(!1), [g, E] = Na(new Le.Vector3(1, 0, 0)), [_, M] = Na(0), [D, A] = Na(0), [b, z] = Na(!1);
  _a(() => {
    fetch("/averaging_pitch_data.json").then((B) => B.json()).then((B) => {
      c(B || []), B && B.length > 0 && d(B[0].PitchUID);
    });
  }, []), _a(() => {
    const B = (O) => {
      if (O.data?.type === "pitch_uid")
        console.log("Pitch UID changed:", O.data.value), d(O.data.value);
      else if (O.data?.type === "slider_update") {
        if ("spinVectorX" in O.data && "spinVectorY" in O.data && "spinVectorZ" in O.data) {
          const V = new Le.Vector3(
            O.data.spinVectorX,
            O.data.spinVectorY,
            O.data.spinVectorZ
          ).normalize();
          E(V);
        }
        "ballX" in O.data && A(O.data.ballX), "ballY" in O.data && M(O.data.ballY);
      } else O.data?.type === "play_toggle" ? y(!!O.data.value) : O.data?.type === "reset_spin_rotation" ? z((V) => !V) : O.data?.type === "clock_toggle" ? l(!!O.data.value) : O.data?.type === "field_toggle" ? m(!!O.data.value) : O.data?.type === "rod_toggle" && n(!!O.data.value);
    };
    return window.addEventListener("message", B), () => window.removeEventListener("message", B);
  }, []);
  const C = ds(() => !f || !s.length ? null : s.find((B) => B.PitchUID === f) || null, [f, s]);
  return _a(() => {
    if (C) {
      const B = new Le.Vector3(
        C.spin_backspin,
        C.spin_sidespin,
        -C.spin_gyrospin
      ).normalize();
      E(B), M(C.seam_orientation_lat || 0), A(C.seam_orientation_lon || 0);
    }
  }, [C]), /* @__PURE__ */ he("div", { style: { width: "100vw", height: "100vh", position: "relative" }, children: /* @__PURE__ */ it(M1, { camera: { position: [0, 0, 0.55], fov: 50 }, children: [
    /* @__PURE__ */ it("mesh", { scale: [50, 50, 50], children: [
      /* @__PURE__ */ he("sphereGeometry", { args: [1, 32, 32] }),
      /* @__PURE__ */ he("meshBasicMaterial", { color: "#D1DBE6", side: Le.BackSide })
    ] }),
    /* @__PURE__ */ he("ambientLight", { intensity: 1 }),
    /* @__PURE__ */ he("directionalLight", { position: [0, 0, 0.3], intensity: 1 }),
    p ? /* @__PURE__ */ he(_0, {}) : null,
    o ? /* @__PURE__ */ he(b0, {}) : null,
    /* @__PURE__ */ he(Ph, { fallback: /* @__PURE__ */ he(T0, {}), children: /* @__PURE__ */ he(
      M0,
      {
        spinRate: 50,
        playing: v,
        spinAxis: g,
        currentSeamLat: _,
        currentSeamLon: D,
        useSeamOrientation: !0,
        resetSpin: b,
        showRod: u
      }
    ) })
  ] }) });
}
const A0 = document.getElementById("root"), C0 = kh(A0);
C0.render(/* @__PURE__ */ he(D0, {}));
