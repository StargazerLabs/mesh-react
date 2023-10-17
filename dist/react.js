import v, { useRef as At, useDebugValue as Ke, useContext as ne, createElement as xt, createContext as kt, useState as F, useCallback as Le, useEffect as pe } from "react";
import { BrowserWallet as pt, Transaction as _t } from "@meshsdk/core";
var xe = { exports: {} }, M = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function Rt() {
  if (Qe)
    return M;
  Qe = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, D = e ? Symbol.for("react.suspense_list") : 60120, L = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function k(l) {
    if (typeof l == "object" && l !== null) {
      var H = l.$$typeof;
      switch (H) {
        case r:
          switch (l = l.type, l) {
            case f:
            case h:
            case n:
            case s:
            case o:
            case b:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case u:
                case y:
                case C:
                case L:
                case i:
                  return l;
                default:
                  return H;
              }
          }
        case t:
          return H;
      }
    }
  }
  function S(l) {
    return k(l) === h;
  }
  return M.AsyncMode = f, M.ConcurrentMode = h, M.ContextConsumer = u, M.ContextProvider = i, M.Element = r, M.ForwardRef = y, M.Fragment = n, M.Lazy = C, M.Memo = L, M.Portal = t, M.Profiler = s, M.StrictMode = o, M.Suspense = b, M.isAsyncMode = function(l) {
    return S(l) || k(l) === f;
  }, M.isConcurrentMode = S, M.isContextConsumer = function(l) {
    return k(l) === u;
  }, M.isContextProvider = function(l) {
    return k(l) === i;
  }, M.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === r;
  }, M.isForwardRef = function(l) {
    return k(l) === y;
  }, M.isFragment = function(l) {
    return k(l) === n;
  }, M.isLazy = function(l) {
    return k(l) === C;
  }, M.isMemo = function(l) {
    return k(l) === L;
  }, M.isPortal = function(l) {
    return k(l) === t;
  }, M.isProfiler = function(l) {
    return k(l) === s;
  }, M.isStrictMode = function(l) {
    return k(l) === o;
  }, M.isSuspense = function(l) {
    return k(l) === b;
  }, M.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === h || l === s || l === o || l === b || l === D || typeof l == "object" && l !== null && (l.$$typeof === C || l.$$typeof === L || l.$$typeof === i || l.$$typeof === u || l.$$typeof === y || l.$$typeof === E || l.$$typeof === I || l.$$typeof === w || l.$$typeof === _);
  }, M.typeOf = k, M;
}
var W = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Tt() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, D = e ? Symbol.for("react.suspense_list") : 60120, L = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function k(c) {
      return typeof c == "string" || typeof c == "function" || c === n || c === h || c === s || c === o || c === b || c === D || typeof c == "object" && c !== null && (c.$$typeof === C || c.$$typeof === L || c.$$typeof === i || c.$$typeof === u || c.$$typeof === y || c.$$typeof === E || c.$$typeof === I || c.$$typeof === w || c.$$typeof === _);
    }
    function S(c) {
      if (typeof c == "object" && c !== null) {
        var z = c.$$typeof;
        switch (z) {
          case r:
            var B = c.type;
            switch (B) {
              case f:
              case h:
              case n:
              case s:
              case o:
              case b:
                return B;
              default:
                var R = B && B.$$typeof;
                switch (R) {
                  case u:
                  case y:
                  case C:
                  case L:
                  case i:
                    return R;
                  default:
                    return z;
                }
            }
          case t:
            return z;
        }
      }
    }
    var l = f, H = h, oe = u, Z = i, ee = r, ae = y, le = n, X = C, K = L, te = t, G = s, fe = o, J = b, q = !1;
    function he(c) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), se(c) || S(c) === f;
    }
    function se(c) {
      return S(c) === h;
    }
    function me(c) {
      return S(c) === u;
    }
    function g(c) {
      return S(c) === i;
    }
    function p(c) {
      return typeof c == "object" && c !== null && c.$$typeof === r;
    }
    function m(c) {
      return S(c) === y;
    }
    function x(c) {
      return S(c) === n;
    }
    function a(c) {
      return S(c) === C;
    }
    function P(c) {
      return S(c) === L;
    }
    function d(c) {
      return S(c) === t;
    }
    function $(c) {
      return S(c) === s;
    }
    function N(c) {
      return S(c) === o;
    }
    function T(c) {
      return S(c) === b;
    }
    W.AsyncMode = l, W.ConcurrentMode = H, W.ContextConsumer = oe, W.ContextProvider = Z, W.Element = ee, W.ForwardRef = ae, W.Fragment = le, W.Lazy = X, W.Memo = K, W.Portal = te, W.Profiler = G, W.StrictMode = fe, W.Suspense = J, W.isAsyncMode = he, W.isConcurrentMode = se, W.isContextConsumer = me, W.isContextProvider = g, W.isElement = p, W.isForwardRef = m, W.isFragment = x, W.isLazy = a, W.isMemo = P, W.isPortal = d, W.isProfiler = $, W.isStrictMode = N, W.isSuspense = T, W.isValidElementType = k, W.typeOf = S;
  }()), W;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Rt() : e.exports = Tt();
})(xe);
function Pt(e) {
  function r(g, p, m, x, a) {
    for (var P = 0, d = 0, $ = 0, N = 0, T, c, z = 0, B = 0, R, U = R = T = 0, O = 0, Y = 0, Se = 0, V = 0, ke = m.length, Ce = ke - 1, re, A = "", j = "", Oe = "", Me = "", ue; O < ke; ) {
      if (c = m.charCodeAt(O), O === Ce && d + N + $ + P !== 0 && (d !== 0 && (c = d === 47 ? 10 : 47), N = $ = P = 0, ke++, Ce++), d + N + $ + P === 0) {
        if (O === Ce && (0 < Y && (A = A.replace(D, "")), 0 < A.trim().length)) {
          switch (c) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              A += m.charAt(O);
          }
          c = 59;
        }
        switch (c) {
          case 123:
            for (A = A.trim(), T = A.charCodeAt(0), R = 1, V = ++O; O < ke; ) {
              switch (c = m.charCodeAt(O)) {
                case 123:
                  R++;
                  break;
                case 125:
                  R--;
                  break;
                case 47:
                  switch (c = m.charCodeAt(O + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (U = O + 1; U < Ce; ++U)
                          switch (m.charCodeAt(U)) {
                            case 47:
                              if (c === 42 && m.charCodeAt(U - 1) === 42 && O + 2 !== U) {
                                O = U + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (c === 47) {
                                O = U + 1;
                                break e;
                              }
                          }
                        O = U;
                      }
                  }
                  break;
                case 91:
                  c++;
                case 40:
                  c++;
                case 34:
                case 39:
                  for (; O++ < Ce && m.charCodeAt(O) !== c; )
                    ;
              }
              if (R === 0)
                break;
              O++;
            }
            switch (R = m.substring(V, O), T === 0 && (T = (A = A.replace(b, "").trim()).charCodeAt(0)), T) {
              case 64:
                switch (0 < Y && (A = A.replace(D, "")), c = A.charCodeAt(1), c) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Y = p;
                    break;
                  default:
                    Y = fe;
                }
                if (R = r(p, Y, R, c, a + 1), V = R.length, 0 < q && (Y = t(fe, A, Se), ue = u(3, R, Y, p, K, X, V, c, a, x), A = Y.join(""), ue !== void 0 && (V = (R = ue.trim()).length) === 0 && (c = 0, R = "")), 0 < V)
                  switch (c) {
                    case 115:
                      A = A.replace(H, i);
                    case 100:
                    case 109:
                    case 45:
                      R = A + "{" + R + "}";
                      break;
                    case 107:
                      A = A.replace(w, "$1 $2"), R = A + "{" + R + "}", R = G === 1 || G === 2 && s("@" + R, 3) ? "@-webkit-" + R + "@" + R : "@" + R;
                      break;
                    default:
                      R = A + R, x === 112 && (R = (j += R, ""));
                  }
                else
                  R = "";
                break;
              default:
                R = r(p, t(p, A, Se), R, x, a + 1);
            }
            Oe += R, R = Se = Y = U = T = 0, A = "", c = m.charCodeAt(++O);
            break;
          case 125:
          case 59:
            if (A = (0 < Y ? A.replace(D, "") : A).trim(), 1 < (V = A.length))
              switch (U === 0 && (T = A.charCodeAt(0), T === 45 || 96 < T && 123 > T) && (V = (A = A.replace(" ", ":")).length), 0 < q && (ue = u(1, A, p, g, K, X, j.length, x, a, x)) !== void 0 && (V = (A = ue.trim()).length) === 0 && (A = "\0\0"), T = A.charCodeAt(0), c = A.charCodeAt(1), T) {
                case 0:
                  break;
                case 64:
                  if (c === 105 || c === 99) {
                    Me += A + m.charAt(O);
                    break;
                  }
                default:
                  A.charCodeAt(V - 1) !== 58 && (j += o(A, T, c, A.charCodeAt(2)));
              }
            Se = Y = U = T = 0, A = "", c = m.charCodeAt(++O);
        }
      }
      switch (c) {
        case 13:
        case 10:
          d === 47 ? d = 0 : 1 + T === 0 && x !== 107 && 0 < A.length && (Y = 1, A += "\0"), 0 < q * se && u(0, A, p, g, K, X, j.length, x, a, x), X = 1, K++;
          break;
        case 59:
        case 125:
          if (d + N + $ + P === 0) {
            X++;
            break;
          }
        default:
          switch (X++, re = m.charAt(O), c) {
            case 9:
            case 32:
              if (N + P + d === 0)
                switch (z) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    re = "";
                    break;
                  default:
                    c !== 32 && (re = " ");
                }
              break;
            case 0:
              re = "\\0";
              break;
            case 12:
              re = "\\f";
              break;
            case 11:
              re = "\\v";
              break;
            case 38:
              N + d + P === 0 && (Y = Se = 1, re = "\f" + re);
              break;
            case 108:
              if (N + d + P + te === 0 && 0 < U)
                switch (O - U) {
                  case 2:
                    z === 112 && m.charCodeAt(O - 3) === 58 && (te = z);
                  case 8:
                    B === 111 && (te = B);
                }
              break;
            case 58:
              N + d + P === 0 && (U = O);
              break;
            case 44:
              d + $ + N + P === 0 && (Y = 1, re += "\r");
              break;
            case 34:
            case 39:
              d === 0 && (N = N === c ? 0 : N === 0 ? c : N);
              break;
            case 91:
              N + d + $ === 0 && P++;
              break;
            case 93:
              N + d + $ === 0 && P--;
              break;
            case 41:
              N + d + P === 0 && $--;
              break;
            case 40:
              if (N + d + P === 0) {
                if (T === 0)
                  switch (2 * z + 3 * B) {
                    case 533:
                      break;
                    default:
                      T = 1;
                  }
                $++;
              }
              break;
            case 64:
              d + $ + N + P + U + R === 0 && (R = 1);
              break;
            case 42:
            case 47:
              if (!(0 < N + P + $))
                switch (d) {
                  case 0:
                    switch (2 * c + 3 * m.charCodeAt(O + 1)) {
                      case 235:
                        d = 47;
                        break;
                      case 220:
                        V = O, d = 42;
                    }
                    break;
                  case 42:
                    c === 47 && z === 42 && V + 2 !== O && (m.charCodeAt(V + 2) === 33 && (j += m.substring(V, O + 1)), re = "", d = 0);
                }
          }
          d === 0 && (A += re);
      }
      B = z, z = c, O++;
    }
    if (V = j.length, 0 < V) {
      if (Y = p, 0 < q && (ue = u(2, j, Y, g, K, X, V, x, a, x), ue !== void 0 && (j = ue).length === 0))
        return Me + j + Oe;
      if (j = Y.join(",") + "{" + j + "}", G * te !== 0) {
        switch (G !== 2 || s(j, 2) || (te = 0), te) {
          case 111:
            j = j.replace(S, ":-moz-$1") + j;
            break;
          case 112:
            j = j.replace(k, "::-webkit-input-$1") + j.replace(k, "::-moz-$1") + j.replace(k, ":-ms-input-$1") + j;
        }
        te = 0;
      }
    }
    return Me + j + Oe;
  }
  function t(g, p, m) {
    var x = p.trim().split(E);
    p = x;
    var a = x.length, P = g.length;
    switch (P) {
      case 0:
      case 1:
        var d = 0;
        for (g = P === 0 ? "" : g[0] + " "; d < a; ++d)
          p[d] = n(g, p[d], m).trim();
        break;
      default:
        var $ = d = 0;
        for (p = []; d < a; ++d)
          for (var N = 0; N < P; ++N)
            p[$++] = n(g[N] + " ", x[d], m).trim();
    }
    return p;
  }
  function n(g, p, m) {
    var x = p.charCodeAt(0);
    switch (33 > x && (x = (p = p.trim()).charCodeAt(0)), x) {
      case 38:
        return p.replace(I, "$1" + g.trim());
      case 58:
        return g.trim() + p.replace(I, "$1" + g.trim());
      default:
        if (0 < 1 * m && 0 < p.indexOf("\f"))
          return p.replace(I, (g.charCodeAt(0) === 58 ? "" : "$1") + g.trim());
    }
    return g + p;
  }
  function o(g, p, m, x) {
    var a = g + ";", P = 2 * p + 3 * m + 4 * x;
    if (P === 944) {
      g = a.indexOf(":", 9) + 1;
      var d = a.substring(g, a.length - 1).trim();
      return d = a.substring(0, g).trim() + d + ";", G === 1 || G === 2 && s(d, 1) ? "-webkit-" + d + d : d;
    }
    if (G === 0 || G === 2 && !s(a, 1))
      return a;
    switch (P) {
      case 1015:
        return a.charCodeAt(10) === 97 ? "-webkit-" + a + a : a;
      case 951:
        return a.charCodeAt(3) === 116 ? "-webkit-" + a + a : a;
      case 963:
        return a.charCodeAt(5) === 110 ? "-webkit-" + a + a : a;
      case 1009:
        if (a.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + a + a;
      case 978:
        return "-webkit-" + a + "-moz-" + a + a;
      case 1019:
      case 983:
        return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
      case 883:
        if (a.charCodeAt(8) === 45)
          return "-webkit-" + a + a;
        if (0 < a.indexOf("image-set(", 11))
          return a.replace(le, "$1-webkit-$2") + a;
        break;
      case 932:
        if (a.charCodeAt(4) === 45)
          switch (a.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
            case 115:
              return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
            case 98:
              return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
          }
        return "-webkit-" + a + "-ms-" + a + a;
      case 964:
        return "-webkit-" + a + "-ms-flex-" + a + a;
      case 1023:
        if (a.charCodeAt(8) !== 99)
          break;
        return d = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + d + "-webkit-" + a + "-ms-flex-pack" + d + a;
      case 1005:
        return C.test(a) ? a.replace(L, ":-webkit-") + a.replace(L, ":-moz-") + a : a;
      case 1e3:
        switch (d = a.substring(13).trim(), p = d.indexOf("-") + 1, d.charCodeAt(0) + d.charCodeAt(p)) {
          case 226:
            d = a.replace(l, "tb");
            break;
          case 232:
            d = a.replace(l, "tb-rl");
            break;
          case 220:
            d = a.replace(l, "lr");
            break;
          default:
            return a;
        }
        return "-webkit-" + a + "-ms-" + d + a;
      case 1017:
        if (a.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (p = (a = g).length - 10, d = (a.charCodeAt(p) === 33 ? a.substring(0, p) : a).substring(g.indexOf(":", 7) + 1).trim(), P = d.charCodeAt(0) + (d.charCodeAt(7) | 0)) {
          case 203:
            if (111 > d.charCodeAt(8))
              break;
          case 115:
            a = a.replace(d, "-webkit-" + d) + ";" + a;
            break;
          case 207:
          case 102:
            a = a.replace(d, "-webkit-" + (102 < P ? "inline-" : "") + "box") + ";" + a.replace(d, "-webkit-" + d) + ";" + a.replace(d, "-ms-" + d + "box") + ";" + a;
        }
        return a + ";";
      case 938:
        if (a.charCodeAt(5) === 45)
          switch (a.charCodeAt(6)) {
            case 105:
              return d = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + d + "-ms-flex-" + d + a;
            case 115:
              return "-webkit-" + a + "-ms-flex-item-" + a.replace(Z, "") + a;
            default:
              return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(Z, "") + a;
          }
        break;
      case 973:
      case 989:
        if (a.charCodeAt(3) !== 45 || a.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (ae.test(g) === !0)
          return (d = g.substring(g.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(g.replace("stretch", "fill-available"), p, m, x).replace(":fill-available", ":stretch") : a.replace(d, "-webkit-" + d) + a.replace(d, "-moz-" + d.replace("fill-", "")) + a;
        break;
      case 962:
        if (a = "-webkit-" + a + (a.charCodeAt(5) === 102 ? "-ms-" + a : "") + a, m + x === 211 && a.charCodeAt(13) === 105 && 0 < a.indexOf("transform", 10))
          return a.substring(0, a.indexOf(";", 27) + 1).replace(_, "$1-webkit-$2") + a;
    }
    return a;
  }
  function s(g, p) {
    var m = g.indexOf(p === 1 ? ":" : "{"), x = g.substring(0, p !== 3 ? m : 10);
    return m = g.substring(m + 1, g.length - 1), he(p !== 2 ? x : x.replace(ee, "$1"), m, p);
  }
  function i(g, p) {
    var m = o(p, p.charCodeAt(0), p.charCodeAt(1), p.charCodeAt(2));
    return m !== p + ";" ? m.replace(oe, " or ($1)").substring(4) : "(" + p + ")";
  }
  function u(g, p, m, x, a, P, d, $, N, T) {
    for (var c = 0, z = p, B; c < q; ++c)
      switch (B = J[c].call(y, g, z, m, x, a, P, d, $, N, T)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          z = B;
      }
    if (z !== p)
      return z;
  }
  function f(g) {
    switch (g) {
      case void 0:
      case null:
        q = J.length = 0;
        break;
      default:
        if (typeof g == "function")
          J[q++] = g;
        else if (typeof g == "object")
          for (var p = 0, m = g.length; p < m; ++p)
            f(g[p]);
        else
          se = !!g | 0;
    }
    return f;
  }
  function h(g) {
    return g = g.prefix, g !== void 0 && (he = null, g ? typeof g != "function" ? G = 1 : (G = 2, he = g) : G = 0), h;
  }
  function y(g, p) {
    var m = g;
    if (33 > m.charCodeAt(0) && (m = m.trim()), me = m, m = [me], 0 < q) {
      var x = u(-1, p, m, m, K, X, 0, 0, 0, 0);
      x !== void 0 && typeof x == "string" && (p = x);
    }
    var a = r(fe, m, p, 0, 0);
    return 0 < q && (x = u(-2, a, m, m, K, X, a.length, 0, 0, 0), x !== void 0 && (a = x)), me = "", te = 0, X = K = 1, a;
  }
  var b = /^\0+/g, D = /[\0\r\f]/g, L = /: */g, C = /zoo|gra/, _ = /([,: ])(transform)/g, E = /,\r+?/g, I = /([\t\r\n ])*\f?&/g, w = /@(k\w+)\s*(\S*)\s*/, k = /::(place)/g, S = /:(read-only)/g, l = /[svh]\w+-[tblr]{2}/, H = /\(\s*(.*)\s*\)/g, oe = /([\s\S]*?);/g, Z = /-self|flex-/g, ee = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ae = /stretch|:\s*\w+\-(?:conte|avail)/, le = /([^-])(image-set\()/, X = 1, K = 1, te = 0, G = 1, fe = [], J = [], q = 0, he = null, se = 0, me = "";
  return y.use = f, y.set = h, e !== void 0 && h(e), y;
}
var Nt = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function It(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Ot = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, et = /* @__PURE__ */ It(
  function(e) {
    return Ot.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
), He = xe.exports, Mt = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, Wt = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Dt = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ft = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ge = {};
Ge[He.ForwardRef] = Dt;
Ge[He.Memo] = ft;
function tt(e) {
  return He.isMemo(e) ? ft : Ge[e.$$typeof] || Mt;
}
var Lt = Object.defineProperty, $t = Object.getOwnPropertyNames, rt = Object.getOwnPropertySymbols, zt = Object.getOwnPropertyDescriptor, jt = Object.getPrototypeOf, nt = Object.prototype;
function ht(e, r, t) {
  if (typeof r != "string") {
    if (nt) {
      var n = jt(r);
      n && n !== nt && ht(e, n, t);
    }
    var o = $t(r);
    rt && (o = o.concat(rt(r)));
    for (var s = tt(e), i = tt(r), u = 0; u < o.length; ++u) {
      var f = o[u];
      if (!Wt[f] && !(t && t[f]) && !(i && i[f]) && !(s && s[f])) {
        var h = zt(r, f);
        try {
          Lt(e, f, h);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ft = ht;
function ie() {
  return (ie = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var ot = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, $e = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !xe.exports.typeOf(e);
}, Ne = Object.freeze([]), de = Object.freeze({});
function Ae(e) {
  return typeof e == "function";
}
function ze(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ue(e) {
  return e && typeof e.styledComponentId == "string";
}
var ve = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Xe = typeof window < "u" && "HTMLElement" in window, Bt = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Yt = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Vt() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function be(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Vt.apply(void 0, [Yt[e]].concat(t)).trim());
}
var Ht = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++)
      n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, i = s; t >= i; )
        (i <<= 1) < 0 && be(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var u = s; u < i; u++)
        this.groupSizes[u] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), h = 0, y = n.length; h < y; h++)
      this.tag.insertRule(f, n[h]) && (this.groupSizes[t]++, f++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), s = o + n;
      this.groupSizes[t] = 0;
      for (var i = o; i < s; i++)
        this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var o = this.groupSizes[t], s = this.indexOfGroup(t), i = s + o, u = s; u < i; u++)
      n += this.tag.getRule(u) + `/*!sc*/
`;
    return n;
  }, e;
}(), Pe = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Ee = 1, _e = function(e) {
  if (Pe.has(e))
    return Pe.get(e);
  for (; Ie.has(Ee); )
    Ee++;
  var r = Ee++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && be(16, "" + r), Pe.set(e, r), Ie.set(r, e), r;
}, Gt = function(e) {
  return Ie.get(e);
}, Ut = function(e, r) {
  r >= Ee && (Ee = r + 1), Pe.set(e, r), Ie.set(r, e);
}, Xt = "style[" + ve + '][data-styled-version="5.3.6"]', qt = new RegExp("^" + ve + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Zt = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, Kt = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var u = i.match(qt);
      if (u) {
        var f = 0 | parseInt(u[1], 10), h = u[2];
        f !== 0 && (Ut(h, f), Zt(e, h, u[3]), e.getTag().insertRules(f, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, Qt = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, mt = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(u) {
    for (var f = u.childNodes, h = f.length; h >= 0; h--) {
      var y = f[h];
      if (y && y.nodeType === 1 && y.hasAttribute(ve))
        return y;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(ve, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var i = Qt();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, Jt = function() {
  function e(t) {
    var n = this.element = mt(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, u = s.length; i < u; i++) {
        var f = s[i];
        if (f.ownerNode === o)
          return f;
      }
      be(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), er = function() {
  function e(t) {
    var n = this.element = mt(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), s = this.nodes[t];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), tr = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), at = Xe, rr = { isServer: !Xe, useCSSOMInjection: !Bt }, gt = function() {
  function e(t, n, o) {
    t === void 0 && (t = de), n === void 0 && (n = {}), this.options = ie({}, rr, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Xe && at && (at = !1, function(s) {
      for (var i = document.querySelectorAll(Xt), u = 0, f = i.length; u < f; u++) {
        var h = i[u];
        h && h.getAttribute(ve) !== "active" && (Kt(s, h), h.parentNode && h.parentNode.removeChild(h));
      }
    }(this));
  }
  e.registerId = function(t) {
    return _e(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(ie({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new tr(i) : s ? new Jt(i) : new er(i), new Ht(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (_e(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(_e(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(_e(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var u = Gt(i);
        if (u !== void 0) {
          var f = t.names.get(u), h = n.getGroup(i);
          if (f && h && f.size) {
            var y = ve + ".g" + i + '[id="' + u + '"]', b = "";
            f !== void 0 && f.forEach(function(D) {
              D.length > 0 && (b += D + ",");
            }), s += "" + h + y + '{content:"' + b + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), nr = /(a)(d)/gi, st = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function je(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = st(r % 52) + t;
  return (st(r % 52) + t).replace(nr, "$1-$2");
}
var ge = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, yt = function(e) {
  return ge(5381, e);
};
function or(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Ae(t) && !Ue(t))
      return !1;
  }
  return !0;
}
var ar = yt("5.3.6"), sr = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && or(r), this.componentId = t, this.baseHash = ge(ar, t), this.baseStyle = n, gt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = we(this.rules, r, t, n).join(""), u = je(ge(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, u)) {
          var f = n(i, "." + u, void 0, o);
          t.insertRules(o, u, f);
        }
        s.push(u), this.staticRulesId = u;
      }
    else {
      for (var h = this.rules.length, y = ge(this.baseHash, n.hash), b = "", D = 0; D < h; D++) {
        var L = this.rules[D];
        if (typeof L == "string")
          b += L, process.env.NODE_ENV !== "production" && (y = ge(y, L + D));
        else if (L) {
          var C = we(L, r, t, n), _ = Array.isArray(C) ? C.join("") : C;
          y = ge(y, _ + D), b += _;
        }
      }
      if (b) {
        var E = je(y >>> 0);
        if (!t.hasNameForId(o, E)) {
          var I = n(b, "." + E, void 0, o);
          t.insertRules(o, E, I);
        }
        s.push(E);
      }
    }
    return s.join(" ");
  }, e;
}(), ir = /^\s*\/\/.*$/gm, cr = [":", "[", ".", "#"];
function lr(e) {
  var r, t, n, o, s = e === void 0 ? de : e, i = s.options, u = i === void 0 ? de : i, f = s.plugins, h = f === void 0 ? Ne : f, y = new Pt(u), b = [], D = function(_) {
    function E(I) {
      if (I)
        try {
          _(I + "}");
        } catch {
        }
    }
    return function(I, w, k, S, l, H, oe, Z, ee, ae) {
      switch (I) {
        case 1:
          if (ee === 0 && w.charCodeAt(0) === 64)
            return _(w + ";"), "";
          break;
        case 2:
          if (Z === 0)
            return w + "/*|*/";
          break;
        case 3:
          switch (Z) {
            case 102:
            case 112:
              return _(k[0] + w), "";
            default:
              return w + (ae === 0 ? "/*|*/" : "");
          }
        case -2:
          w.split("/*|*/}").forEach(E);
      }
    };
  }(function(_) {
    b.push(_);
  }), L = function(_, E, I) {
    return E === 0 && cr.indexOf(I[t.length]) !== -1 || I.match(o) ? _ : "." + r;
  };
  function C(_, E, I, w) {
    w === void 0 && (w = "&");
    var k = _.replace(ir, ""), S = E && I ? I + " " + E + " { " + k + " }" : k;
    return r = w, t = E, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), y(I || !E ? "" : E, S);
  }
  return y.use([].concat(h, [function(_, E, I) {
    _ === 2 && I.length && I[0].lastIndexOf(t) > 0 && (I[0] = I[0].replace(n, L));
  }, D, function(_) {
    if (_ === -2) {
      var E = b;
      return b = [], E;
    }
  }])), C.hash = h.length ? h.reduce(function(_, E) {
    return E.name || be(15), ge(_, E.name);
  }, 5381).toString() : "", C;
}
var vt = v.createContext();
vt.Consumer;
var wt = v.createContext(), ur = (wt.Consumer, new gt()), Fe = lr();
function dr() {
  return ne(vt) || ur;
}
function pr() {
  return ne(wt) || Fe;
}
var fr = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Fe);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return be(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Fe), this.name + r.hash;
  }, e;
}(), hr = /([A-Z])/, mr = /([A-Z])/g, gr = /^ms-/, yr = function(e) {
  return "-" + e.toLowerCase();
};
function it(e) {
  return hr.test(e) ? e.replace(mr, yr).replace(gr, "-ms-") : e;
}
var ct = function(e) {
  return e == null || e === !1 || e === "";
};
function we(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, u = e.length; i < u; i += 1)
      (o = we(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (ct(e))
    return "";
  if (Ue(e))
    return "." + e.styledComponentId;
  if (Ae(e)) {
    if (typeof (h = e) != "function" || h.prototype && h.prototype.isReactComponent || !r)
      return e;
    var f = e(r);
    return process.env.NODE_ENV !== "production" && xe.exports.isElement(f) && console.warn(ze(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), we(f, r, t, n);
  }
  var h;
  return e instanceof fr ? t ? (e.inject(t, n), e.getName(n)) : e : $e(e) ? function y(b, D) {
    var L, C, _ = [];
    for (var E in b)
      b.hasOwnProperty(E) && !ct(b[E]) && (Array.isArray(b[E]) && b[E].isCss || Ae(b[E]) ? _.push(it(E) + ":", b[E], ";") : $e(b[E]) ? _.push.apply(_, y(b[E], E)) : _.push(it(E) + ": " + (L = E, (C = b[E]) == null || typeof C == "boolean" || C === "" ? "" : typeof C != "number" || C === 0 || L in Nt ? String(C).trim() : C + "px") + ";"));
    return D ? [D + " {"].concat(_, ["}"]) : _;
  }(e) : e.toString();
}
var lt = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function vr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return Ae(e) || $e(e) ? lt(we(ot(Ne, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : lt(we(ot(e, t)));
}
var ut = /invalid hook call/i, Re = /* @__PURE__ */ new Set(), wr = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (ut.test(s))
          o = !1, Re.delete(t);
        else {
          for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), f = 1; f < i; f++)
            u[f - 1] = arguments[f];
          n.apply(void 0, [s].concat(u));
        }
      }, At(), o && !Re.has(t) && (console.warn(t), Re.add(t));
    } catch (s) {
      ut.test(s.message) && Re.delete(t);
    } finally {
      console.error = n;
    }
  }
}, br = function(e, r, t) {
  return t === void 0 && (t = de), e.theme !== t.theme && e.theme || r || t.theme;
}, Sr = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Cr = /(^-|-$)/g;
function We(e) {
  return e.replace(Sr, "-").replace(Cr, "");
}
var Er = function(e) {
  return je(yt(e) >>> 0);
};
function Te(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Be = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Ar = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function xr(e, r, t) {
  var n = e[t];
  Be(r) && Be(n) ? bt(n, r) : e[t] = r;
}
function bt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (Be(i))
      for (var u in i)
        Ar(u) && xr(e, i[u], u);
  }
  return e;
}
var St = v.createContext();
St.Consumer;
var De = {};
function Ct(e, r, t) {
  var n = Ue(e), o = !Te(e), s = r.attrs, i = s === void 0 ? Ne : s, u = r.componentId, f = u === void 0 ? function(w, k) {
    var S = typeof w != "string" ? "sc" : We(w);
    De[S] = (De[S] || 0) + 1;
    var l = S + "-" + Er("5.3.6" + S + De[S]);
    return k ? k + "-" + l : l;
  }(r.displayName, r.parentComponentId) : u, h = r.displayName, y = h === void 0 ? function(w) {
    return Te(w) ? "styled." + w : "Styled(" + ze(w) + ")";
  }(e) : h, b = r.displayName && r.componentId ? We(r.displayName) + "-" + r.componentId : r.componentId || f, D = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, L = r.shouldForwardProp;
  n && e.shouldForwardProp && (L = r.shouldForwardProp ? function(w, k, S) {
    return e.shouldForwardProp(w, k, S) && r.shouldForwardProp(w, k, S);
  } : e.shouldForwardProp);
  var C, _ = new sr(t, b, n ? e.componentStyle : void 0), E = _.isStatic && i.length === 0, I = function(w, k) {
    return function(S, l, H, oe) {
      var Z = S.attrs, ee = S.componentStyle, ae = S.defaultProps, le = S.foldedComponentIds, X = S.shouldForwardProp, K = S.styledComponentId, te = S.target;
      process.env.NODE_ENV !== "production" && Ke(K);
      var G = function(x, a, P) {
        x === void 0 && (x = de);
        var d = ie({}, a, { theme: x }), $ = {};
        return P.forEach(function(N) {
          var T, c, z, B = N;
          for (T in Ae(B) && (B = B(d)), B)
            d[T] = $[T] = T === "className" ? (c = $[T], z = B[T], c && z ? c + " " + z : c || z) : B[T];
        }), [d, $];
      }(br(l, ne(St), ae) || de, l, Z), fe = G[0], J = G[1], q = function(x, a, P, d) {
        var $ = dr(), N = pr(), T = a ? x.generateAndInjectStyles(de, $, N) : x.generateAndInjectStyles(P, $, N);
        return process.env.NODE_ENV !== "production" && Ke(T), process.env.NODE_ENV !== "production" && !a && d && d(T), T;
      }(ee, oe, fe, process.env.NODE_ENV !== "production" ? S.warnTooManyClasses : void 0), he = H, se = J.$as || l.$as || J.as || l.as || te, me = Te(se), g = J !== l ? ie({}, l, {}, J) : l, p = {};
      for (var m in g)
        m[0] !== "$" && m !== "as" && (m === "forwardedAs" ? p.as = g[m] : (X ? X(m, et, se) : !me || et(m)) && (p[m] = g[m]));
      return l.style && J.style !== l.style && (p.style = ie({}, l.style, {}, J.style)), p.className = Array.prototype.concat(le, K, q !== K ? q : null, l.className, J.className).filter(Boolean).join(" "), p.ref = he, xt(se, p);
    }(C, w, k, E);
  };
  return I.displayName = y, (C = v.forwardRef(I)).attrs = D, C.componentStyle = _, C.displayName = y, C.shouldForwardProp = L, C.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ne, C.styledComponentId = b, C.target = n ? e.target : e, C.withComponent = function(w) {
    var k = r.componentId, S = function(H, oe) {
      if (H == null)
        return {};
      var Z, ee, ae = {}, le = Object.keys(H);
      for (ee = 0; ee < le.length; ee++)
        Z = le[ee], oe.indexOf(Z) >= 0 || (ae[Z] = H[Z]);
      return ae;
    }(r, ["componentId"]), l = k && k + "-" + (Te(w) ? w : We(ze(w)));
    return Ct(w, ie({}, S, { attrs: D, componentId: l }), t);
  }, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(w) {
    this._foldedDefaultProps = n ? bt({}, e.defaultProps, w) : w;
  } }), process.env.NODE_ENV !== "production" && (wr(y, b), C.warnTooManyClasses = function(w, k) {
    var S = {}, l = !1;
    return function(H) {
      if (!l && (S[H] = !0, Object.keys(S).length >= 200)) {
        var oe = k ? ' with the id of "' + k + '"' : "";
        console.warn("Over 200 classes were generated for component " + w + oe + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), l = !0, S = {};
      }
    };
  }(y, b)), C.toString = function() {
    return "." + C.styledComponentId;
  }, o && Ft(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), C;
}
var Ye = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = de), !xe.exports.isValidElementType(n))
      return be(1, String(n));
    var s = function() {
      return t(n, o, vr.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, ie({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, ie({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(Ct, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Ye[e] = Ye(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Q = Ye, ye = {
  walletName: "",
  walletInstance: {}
}, kr = () => {
  const [e, r] = F(void 0), [t, n] = F(!1), [o, s] = F(ye.walletInstance), [i, u] = F(ye.walletName), f = Le(async (y) => {
    n(!0);
    try {
      const b = await pt.enable(y);
      s(b), u(y), r(void 0);
    } catch (b) {
      r(b), console.error(b);
    }
    n(!1);
  }, []), h = Le(() => {
    u(ye.walletName), s(ye.walletInstance);
  }, []);
  return {
    hasConnectedWallet: ye.walletName !== i,
    connectedWalletInstance: o,
    connectedWalletName: i,
    connectingWallet: t,
    connectWallet: f,
    disconnect: h,
    error: e
  };
}, ce = kt({
  hasConnectedWallet: !1,
  connectedWalletInstance: ye.walletInstance,
  connectedWalletName: ye.walletName,
  connectingWallet: !1
}), qr = ({
  children: e
}) => {
  const r = kr();
  return /* @__PURE__ */ v.createElement(ce.Provider, {
    value: r
  }, e);
}, Zr = (e = 0) => {
  const [r, t] = F(), {
    hasConnectedWallet: n,
    connectedWalletName: o,
    connectedWalletInstance: s
  } = ne(ce);
  return pe(() => {
    n && s.getUsedAddresses().then((i) => {
      i[e] && t(i[e]);
    });
  }, [e, o]), r;
}, Kr = () => {
  const [e, r] = F(), {
    hasConnectedWallet: t,
    connectedWalletName: n,
    connectedWalletInstance: o
  } = ne(ce);
  return pe(() => {
    t && o.getAssets().then(r);
  }, [n]), e;
}, qe = () => {
  const [e, r] = F([]);
  return pe(() => {
    r(pt.getInstalledWallets());
  }, []), e;
}, _r = () => {
  const [e, r] = F(), {
    hasConnectedWallet: t,
    connectedWalletName: n,
    connectedWalletInstance: o
  } = ne(ce);
  return pe(() => {
    t && o.getLovelace().then(r);
  }, [n]), e;
}, Qr = () => {
  const [e, r] = F(), {
    hasConnectedWallet: t,
    connectedWalletName: n,
    connectedWalletInstance: o
  } = ne(ce);
  return pe(() => {
    t && o.getNetworkId().then(r);
  }, [n]), e;
}, Rr = (e = 0) => {
  const [r, t] = F(), {
    hasConnectedWallet: n,
    connectedWalletName: o,
    connectedWalletInstance: s
  } = ne(ce);
  return pe(() => {
    n && s.getRewardAddresses().then((i) => {
      i[e] && t(i[e]);
    });
  }, [e, o]), r;
}, Ze = () => {
  const {
    hasConnectedWallet: e,
    connectedWalletName: r,
    connectedWalletInstance: t,
    connectingWallet: n,
    connectWallet: o,
    disconnect: s,
    error: i
  } = ne(ce);
  if (o === void 0 || s === void 0)
    throw new Error("Can't call useWallet outside of the WalletProvider context");
  return {
    name: r,
    connecting: n,
    connected: e,
    wallet: t,
    connect: o,
    disconnect: s,
    error: i
  };
}, Jr = () => {
  const [e, r] = F(), [t, n] = F(), [o, s] = F(!1), {
    hasConnectedWallet: i,
    connectedWalletInstance: u
  } = ne(ce), f = Le(async (h) => {
    s(!0);
    try {
      if (i) {
        const y = await u.submitTx(h);
        r(void 0), n(y);
      }
      throw new Error("Please make sure to connect a wallet before calling useWalletSubmit");
    } catch (y) {
      r(y), console.error(y);
    }
    s(!1);
  }, []);
  return {
    error: e,
    result: t,
    submitting: o,
    submitTx: f
  };
}, Tr = (e = {}) => {
  const {
    era: r,
    parameters: t
  } = e, {
    hasConnectedWallet: n,
    connectedWalletInstance: o
  } = ne(ce), [s] = F(() => {
    if (n)
      return new _t({
        initiator: o,
        parameters: t,
        era: r
      });
    throw new Error("Please make sure to connect a wallet before calling useWalletTx");
  });
  return s;
}, Pr = Q.svg.withConfig({
  displayName: "CheckMark__StyledCheckMark",
  componentId: "sc-bdkad9-0"
})({
  margin: "0.5rem",
  height: "1.5rem"
}), Nr = () => /* @__PURE__ */ v.createElement(Pr, {
  fill: "currentColor",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ v.createElement("path", {
  d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
})), Ir = Q.div.withConfig({
  displayName: "MenuItem__StyledItem",
  componentId: "sc-obisy3-0"
})({
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  opacity: "0.8",
  ":hover": {
    opacity: "1"
  }
}), Or = Q.img.withConfig({
  displayName: "MenuItem__StyledIcon",
  componentId: "sc-obisy3-1"
})({
  margin: "0.25rem",
  height: "2rem",
  paddingRight: "0.5rem"
}), Mr = Q.span.withConfig({
  displayName: "MenuItem__StyledName",
  componentId: "sc-obisy3-2"
})({
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  fontWeight: "400"
}), Wr = Q.span.withConfig({
  displayName: "MenuItem__StyledActive",
  componentId: "sc-obisy3-3"
})({
  marginLeft: "auto"
}), Ve = ({
  icon: e,
  label: r,
  action: t,
  active: n
}) => /* @__PURE__ */ v.createElement(Ir, {
  onClick: t
}, e && /* @__PURE__ */ v.createElement(Or, {
  src: e
}), /* @__PURE__ */ v.createElement(Mr, {
  className: "mr-menu-item"
}, r.split(" ").map((o) => o.charAt(0).toUpperCase() + o.slice(1).toLowerCase()).join(" ")), n && /* @__PURE__ */ v.createElement(Wr, null, /* @__PURE__ */ v.createElement(Nr, null))), Dr = Q.svg.withConfig({
  displayName: "ChevronDown__StyledChevronDown",
  componentId: "sc-17n3mfh-0"
})({
  margin: "0.5rem",
  height: "1.5rem"
}), Et = () => /* @__PURE__ */ v.createElement(Dr, {
  fill: "none",
  "aria-hidden": "true",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ v.createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2",
  d: "M19 9l-7 7-7-7"
})), dt = Q.img.withConfig({
  displayName: "WalletBalance__StyledIcon",
  componentId: "sc-8if913-0"
})({
  margin: "0.5rem",
  height: "1.5rem"
}), Lr = Q.span.withConfig({
  displayName: "WalletBalance__StyledSmall",
  componentId: "sc-8if913-1"
})({
  fontSize: "0.75rem",
  lineHeight: "1rem"
}), $r = ({
  connected: e,
  name: r,
  connecting: t,
  label: n
}) => {
  const o = qe().find((i) => i.name === r), s = _r();
  return e && s && o?.icon ? /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(dt, {
    src: o.icon
  }), "\u20B3", " ", parseInt((parseInt(s, 10) / 1e6).toString(), 10), ".", /* @__PURE__ */ v.createElement(Lr, null, s.substr(s.length - 6))) : e && o?.icon ? /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(dt, {
    src: o.icon
  })) : t ? /* @__PURE__ */ v.createElement(v.Fragment, null, "Connecting...") : /* @__PURE__ */ v.createElement(v.Fragment, null, n, " ", /* @__PURE__ */ v.createElement(Et, null));
}, zr = Q.button.withConfig({
  displayName: "CardanoWallet__StyledMenuButton",
  componentId: "sc-13vl5pq-0"
})({
  display: "flex",
  width: "15rem",
  alignItems: "center",
  justifyContent: "center",
  borderTopLeftRadius: "0.375rem",
  borderTopRightRadius: "0.375rem",
  borderWidth: "1px",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  fontSize: "1.125rem",
  lineHeight: "1.75rem",
  fontWeight: "400",
  "--tw-shadow": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  "--tw-shadow-colored": "0 1px 2px 0 var(--tw-shadow-color)",
  boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
}), jr = Q.div.withConfig({
  displayName: "CardanoWallet__StyledMenuList",
  componentId: "sc-13vl5pq-1"
})(({
  hidden: e
}) => [{
  position: "absolute",
  width: "15rem",
  borderBottomRightRadius: "0.375rem",
  borderBottomLeftRadius: "0.375rem",
  borderWidth: "1px",
  textAlign: "center",
  "--tw-shadow": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  "--tw-shadow-colored": "0 1px 2px 0 var(--tw-shadow-color)",
  boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "--tw-backdrop-blur": "blur(8px)",
  backdropFilter: "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"
}, e && {
  display: "none"
}]), en = ({
  label: e = "Connect Wallet",
  onConnected: r = void 0
}) => {
  const t = qe(), [n, o] = F(!0), {
    connect: s,
    connecting: i,
    connected: u,
    disconnect: f,
    name: h
  } = Ze();
  return pe(() => {
    u && r && r();
  }, [u]), /* @__PURE__ */ v.createElement("div", {
    style: {
      width: "fit-content"
    },
    onMouseEnter: () => o(!1),
    onMouseLeave: () => o(!0)
  }, /* @__PURE__ */ v.createElement(zr, {
    type: "button",
    className: "mr-wallet-button",
    onClick: () => o(!n)
  }, /* @__PURE__ */ v.createElement($r, {
    name: h,
    connected: u,
    connecting: i,
    label: e
  })), /* @__PURE__ */ v.createElement(jr, {
    hidden: n,
    className: "mr-menu-list"
  }, !u && t.length > 0 ? t.map((y, b) => /* @__PURE__ */ v.createElement(Ve, {
    key: b,
    icon: y.icon,
    label: y.name,
    action: () => {
      s(y.name), o(!n);
    },
    active: h === y.name
  })) : t.length === 0 ? /* @__PURE__ */ v.createElement("span", null, "No Wallet Found") : /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(Ve, {
    active: !1,
    label: "disconnect",
    action: f,
    icon: void 0
  }))));
}, Fr = Q.svg.withConfig({
  displayName: "MeshLogo__StyledLogo",
  componentId: "sc-1nwgent-0"
})({
  height: "4rem",
  padding: "0.5rem"
}), Br = () => /* @__PURE__ */ v.createElement(Fr, {
  fill: "currentColor",
  viewBox: "0 0 300 200",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ v.createElement("path", {
  d: "m289 127-45-60-45-60c-.9-1.3-2.4-2-4-2s-3.1.7-4 2l-37 49.3c-2 2.7-6 2.7-8 0l-37-49.3c-.9-1.3-2.4-2-4-2s-3.1.7-4 2l-45 60-45 60c-1.3 1.8-1.3 4.2 0 6l45 60c.9 1.3 2.4 2 4 2s3.1-.7 4-2l37-49.3c2-2.7 6-2.7 8 0l37 49.3c.9 1.3 2.4 2 4 2s3.1-.7 4-2l37-49.3c2-2.7 6-2.7 8 0l37 49.3c.9 1.3 2.4 2 4 2s3.1-.7 4-2l45-60c1.3-1.8 1.3-4.2 0-6zm-90-103.3 32.5 43.3c1.3 1.8 1.3 4.2 0 6l-32.5 43.3c-2 2.7-6 2.7-8 0l-32.5-43.3c-1.3-1.8-1.3-4.2 0-6l32.5-43.3c2-2.7 6-2.7 8 0zm-90 0 32.5 43.3c1.3 1.8 1.3 4.2 0 6l-32.5 43.3c-2 2.7-6 2.7-8 0l-32.5-43.3c-1.3-1.8-1.3-4.2 0-6l32.5-43.3c2-2.7 6-2.7 8 0zm-53 152.6-32.5-43.3c-1.3-1.8-1.3-4.2 0-6l32.5-43.3c2-2.7 6-2.7 8 0l32.5 43.3c1.3 1.8 1.3 4.2 0 6l-32.5 43.3c-2 2.7-6 2.7-8 0zm90 0-32.5-43.3c-1.3-1.8-1.3-4.2 0-6l32.5-43.3c2-2.7 6-2.7 8 0l32.5 43.3c1.3 1.8 1.3 4.2 0 6l-32.5 43.3c-2 2.7-6 2.7-8 0zm90 0-32.5-43.3c-1.3-1.8-1.3-4.2 0-6l32.5-43.3c2-2.7 6-2.7 8 0l32.5 43.3c1.3 1.8 1.3 4.2 0 6l-32.5 43.3c-2 2.7-6 2.7-8 0z"
})), Yr = Q.a.withConfig({
  displayName: "MeshBadge__StyledLink",
  componentId: "sc-fcpuc3-0"
})({
  display: "flex",
  maxWidth: "fit-content",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "0.375rem",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "currentColor",
  padding: "0.25rem",
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  fontWeight: "600",
  "--tw-text-opacity": "1",
  color: "rgb(68 64 60 / var(--tw-text-opacity))",
  textDecorationLine: "none"
}), tn = ({
  dark: e = !1
}) => /* @__PURE__ */ v.createElement(Yr, {
  style: {
    color: e ? "#EEEEEE" : "#111111",
    backgroundColor: e ? "#111111" : "#EEEEEE"
  },
  href: "https://meshjs.dev/",
  rel: "noopener noreferrer",
  target: "_blank"
}, /* @__PURE__ */ v.createElement(Br, null), "Mesh"), Vr = Q.button.withConfig({
  displayName: "StakeButton__StyledMenuButton",
  componentId: "sc-2hlzah-0"
})({
  display: "flex",
  width: "15rem",
  alignItems: "center",
  justifyContent: "center",
  borderTopLeftRadius: "0.375rem",
  borderTopRightRadius: "0.375rem",
  borderWidth: "1px",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  fontSize: "1.125rem",
  lineHeight: "1.75rem",
  fontWeight: "400",
  "--tw-shadow": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  "--tw-shadow-colored": "0 1px 2px 0 var(--tw-shadow-color)",
  boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
}), Hr = Q.div.withConfig({
  displayName: "StakeButton__StyledMenuList",
  componentId: "sc-2hlzah-1"
})(({
  hidden: e
}) => [{
  position: "absolute",
  width: "15rem",
  borderBottomRightRadius: "0.375rem",
  borderBottomLeftRadius: "0.375rem",
  borderWidth: "1px",
  textAlign: "center",
  "--tw-shadow": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  "--tw-shadow-colored": "0 1px 2px 0 var(--tw-shadow-color)",
  boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "--tw-backdrop-blur": "blur(8px)",
  backdropFilter: "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"
}, e && {
  display: "none"
}]), rn = ({
  poolId: e,
  onCheck: r
}) => {
  const t = qe(), [n, o] = F(!0), {
    connect: s,
    connecting: i,
    connected: u,
    name: f
  } = Ze();
  return /* @__PURE__ */ v.createElement("div", {
    style: {
      width: "fit-content"
    },
    onMouseEnter: () => o(!1),
    onMouseLeave: () => o(!0)
  }, /* @__PURE__ */ v.createElement(Vr, {
    type: "button",
    onClick: () => o(!n)
  }, u ? /* @__PURE__ */ v.createElement(Gr, {
    poolId: e,
    onCheck: r
  }) : i ? /* @__PURE__ */ v.createElement(v.Fragment, null, "Connecting...") : /* @__PURE__ */ v.createElement(v.Fragment, null, "Connect Wallet ", /* @__PURE__ */ v.createElement(Et, null))), /* @__PURE__ */ v.createElement(Hr, {
    hidden: n || u
  }, t.length > 0 ? t.map((h, y) => /* @__PURE__ */ v.createElement(Ve, {
    key: y,
    icon: h.icon,
    label: h.name,
    action: () => {
      s(h.name), o(!n);
    },
    active: f === h.name
  })) : /* @__PURE__ */ v.createElement("span", null, "No Wallet Found")));
}, Gr = ({
  poolId: e,
  onCheck: r
}) => {
  const t = Tr(), {
    wallet: n
  } = Ze(), o = Rr(), [s, i] = F(), [u, f] = F(!1), [h, y] = F(), [b, D] = F(!1), [L, C] = F(!1), _ = async () => {
    try {
      if (f(!0), o) {
        const w = await r(o);
        y(w);
      }
      f(!1);
    } catch (w) {
      i(w);
    }
  }, E = async () => {
    D(!0), C(!1);
    try {
      if (o) {
        const w = await t.registerStake(o).delegateStake(o, e).build(), k = await n.signTx(w), S = await n.submitTx(k);
        console.log("txHash", S), C(!0);
      }
    } catch (w) {
      console.error("error", w), i(w);
    }
    D(!1);
  }, I = async () => {
    D(!0), C(!1);
    try {
      if (o) {
        const w = await t.delegateStake(o, e).build(), k = await n.signTx(w), S = await n.submitTx(k);
        C(!0);
      }
    } catch (w) {
      console.error("error", w), i(w);
    }
    D(!1);
  };
  return pe(() => {
    _();
  }, [o]), u ? /* @__PURE__ */ v.createElement("span", null, "Checking...") : b ? /* @__PURE__ */ v.createElement("span", null, "Loading...") : L ? /* @__PURE__ */ v.createElement("span", null, "Stake Delegated") : h?.active ? h.poolId === e ? /* @__PURE__ */ v.createElement("span", null, "Stake Delegated") : /* @__PURE__ */ v.createElement("span", {
    onClick: I
  }, "Delegate Stake") : /* @__PURE__ */ v.createElement("span", {
    onClick: E
  }, "Register Address");
}, nn = (e, r = "https://infura-ipfs.io/ipfs/") => (Array.isArray(e) && (e = e.join("")), e.startsWith("data:image") ? e : e.startsWith("ipfs://") ? r + e.split("ipfs://")[1].split("ipfs/").slice(-1)[0] : e.startsWith("Qm") && e.length === 46 || e.startsWith("baf") && e.length === 59 ? r + e : e);
export {
  en as CardanoWallet,
  tn as MeshBadge,
  qr as MeshProvider,
  rn as StakeButton,
  ce as WalletContext,
  nn as resolveMedia,
  Zr as useAddress,
  Kr as useAssets,
  _r as useLovelace,
  Qr as useNetwork,
  Rr as useRewardAddress,
  Ze as useWallet,
  qe as useWalletList,
  Jr as useWalletSubmit,
  Tr as useWalletTx
};
