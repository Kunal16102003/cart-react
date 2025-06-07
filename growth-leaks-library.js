var gc = Object.defineProperty, hc = Object.defineProperties;
var yc = Object.getOwnPropertyDescriptors;
var lr = Object.getOwnPropertySymbols;
var Hl = Object.prototype.hasOwnProperty, $l = Object.prototype.propertyIsEnumerable;
var Ti = (e, t, n) => t in e ? gc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, qe = (e, t) => {
  for (var n in t || (t = {}))
    Hl.call(t, n) && Ti(e, n, t[n]);
  if (lr)
    for (var n of lr(t))
      $l.call(t, n) && Ti(e, n, t[n]);
  return e;
}, St = (e, t) => hc(e, yc(t));
var Wl = (e, t) => {
  var n = {};
  for (var r in e)
    Hl.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && lr)
    for (var r of lr(e))
      t.indexOf(r) < 0 && $l.call(e, r) && (n[r] = e[r]);
  return n;
};
var Mi = (e, t, n) => Ti(e, typeof t != "symbol" ? t + "" : t, n);
if (typeof vc == "undefined")
  var vc = globalThis;
if (typeof xc == "undefined")
  var xc = { env: { NODE_ENV: "production" } };
function wc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ts = { exports: {} }, ai = {}, ns = { exports: {} }, O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn = Symbol.for("react.element"), Sc = Symbol.for("react.portal"), kc = Symbol.for("react.fragment"), Ec = Symbol.for("react.strict_mode"), Nc = Symbol.for("react.profiler"), Cc = Symbol.for("react.provider"), Tc = Symbol.for("react.context"), Mc = Symbol.for("react.forward_ref"), Rc = Symbol.for("react.suspense"), Ic = Symbol.for("react.memo"), jc = Symbol.for("react.lazy"), Vl = Symbol.iterator;
function Ac(e) {
  return e === null || typeof e != "object" ? null : (e = Vl && e[Vl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var rs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, is = Object.assign, os = {};
function cn(e, t, n) {
  this.props = e, this.context = t, this.refs = os, this.updater = n || rs;
}
cn.prototype.isReactComponent = {};
cn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
cn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ls() {
}
ls.prototype = cn.prototype;
function Qo(e, t, n) {
  this.props = e, this.context = t, this.refs = os, this.updater = n || rs;
}
var Ko = Qo.prototype = new ls();
Ko.constructor = Qo;
is(Ko, cn.prototype);
Ko.isPureReactComponent = !0;
var Bl = Array.isArray, as = Object.prototype.hasOwnProperty, Xo = { current: null }, ss = { key: !0, ref: !0, __self: !0, __source: !0 };
function us(e, t, n) {
  var r, i = {}, o = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) as.call(t, r) && !ss.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var s = Array(a), c = 0; c < a; c++) s[c] = arguments[c + 2];
    i.children = s;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: Jn, type: e, key: o, ref: l, props: i, _owner: Xo.current };
}
function _c(e, t) {
  return { $$typeof: Jn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Yo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jn;
}
function Oc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ql = /\/+/g;
function Ri(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Oc("" + e.key) : t.toString(36);
}
function Cr(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (o) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Jn:
        case Sc:
          l = !0;
      }
  }
  if (l) return l = e, i = i(l), e = r === "" ? "." + Ri(l, 0) : r, Bl(i) ? (n = "", e != null && (n = e.replace(Ql, "$&/") + "/"), Cr(i, t, n, "", function(c) {
    return c;
  })) : i != null && (Yo(i) && (i = _c(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Ql, "$&/") + "/") + e)), t.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Bl(e)) for (var a = 0; a < e.length; a++) {
    o = e[a];
    var s = r + Ri(o, a);
    l += Cr(o, t, n, s, i);
  }
  else if (s = Ac(e), typeof s == "function") for (e = s.call(e), a = 0; !(o = e.next()).done; ) o = o.value, s = r + Ri(o, a++), l += Cr(o, t, n, s, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function ar(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Cr(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function Pc(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null }, Tr = { transition: null }, zc = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: Tr, ReactCurrentOwner: Xo };
function cs() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = { map: ar, forEach: function(e, t, n) {
  ar(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ar(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ar(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Yo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
O.Component = cn;
O.Fragment = kc;
O.Profiler = Nc;
O.PureComponent = Qo;
O.StrictMode = Ec;
O.Suspense = Rc;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zc;
O.act = cs;
O.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = is({}, e.props), i = e.key, o = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, l = Xo.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (s in t) as.call(t, s) && !ss.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var c = 0; c < s; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Jn, type: e.type, key: i, ref: o, props: r, _owner: l };
};
O.createContext = function(e) {
  return e = { $$typeof: Tc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Cc, _context: e }, e.Consumer = e;
};
O.createElement = us;
O.createFactory = function(e) {
  var t = us.bind(null, e);
  return t.type = e, t;
};
O.createRef = function() {
  return { current: null };
};
O.forwardRef = function(e) {
  return { $$typeof: Mc, render: e };
};
O.isValidElement = Yo;
O.lazy = function(e) {
  return { $$typeof: jc, _payload: { _status: -1, _result: e }, _init: Pc };
};
O.memo = function(e, t) {
  return { $$typeof: Ic, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function(e) {
  var t = Tr.transition;
  Tr.transition = {};
  try {
    e();
  } finally {
    Tr.transition = t;
  }
};
O.unstable_act = cs;
O.useCallback = function(e, t) {
  return ce.current.useCallback(e, t);
};
O.useContext = function(e) {
  return ce.current.useContext(e);
};
O.useDebugValue = function() {
};
O.useDeferredValue = function(e) {
  return ce.current.useDeferredValue(e);
};
O.useEffect = function(e, t) {
  return ce.current.useEffect(e, t);
};
O.useId = function() {
  return ce.current.useId();
};
O.useImperativeHandle = function(e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function(e, t) {
  return ce.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function(e, t) {
  return ce.current.useLayoutEffect(e, t);
};
O.useMemo = function(e, t) {
  return ce.current.useMemo(e, t);
};
O.useReducer = function(e, t, n) {
  return ce.current.useReducer(e, t, n);
};
O.useRef = function(e) {
  return ce.current.useRef(e);
};
O.useState = function(e) {
  return ce.current.useState(e);
};
O.useSyncExternalStore = function(e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function() {
  return ce.current.useTransition();
};
O.version = "18.3.1";
ns.exports = O;
var X = ns.exports;
const Lc = /* @__PURE__ */ wc(X);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uc = X, Dc = Symbol.for("react.element"), bc = Symbol.for("react.fragment"), Fc = Object.prototype.hasOwnProperty, Gc = Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Hc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ds(e, t, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Fc.call(t, r) && !Hc.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Dc, type: e, key: o, ref: l, props: i, _owner: Gc.current };
}
ai.Fragment = bc;
ai.jsx = ds;
ai.jsxs = ds;
ts.exports = ai;
var p = ts.exports, fs = { exports: {} }, Se = {}, ps = { exports: {} }, ms = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(R, j) {
    var A = R.length;
    R.push(j);
    e: for (; 0 < A; ) {
      var B = A - 1 >>> 1, q = R[B];
      if (0 < i(q, j)) R[B] = j, R[A] = q, A = B;
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var j = R[0], A = R.pop();
    if (A !== j) {
      R[0] = A;
      e: for (var B = 0, q = R.length, ir = q >>> 1; B < ir; ) {
        var xt = 2 * (B + 1) - 1, Ci = R[xt], wt = xt + 1, or = R[wt];
        if (0 > i(Ci, A)) wt < q && 0 > i(or, Ci) ? (R[B] = or, R[wt] = A, B = wt) : (R[B] = Ci, R[xt] = A, B = xt);
        else if (wt < q && 0 > i(or, A)) R[B] = or, R[wt] = A, B = wt;
        else break e;
      }
    }
    return j;
  }
  function i(R, j) {
    var A = R.sortIndex - j.sortIndex;
    return A !== 0 ? A : R.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var l = Date, a = l.now();
    e.unstable_now = function() {
      return l.now() - a;
    };
  }
  var s = [], c = [], v = 1, h = null, m = 3, k = !1, E = !1, C = !1, L = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate != "undefined" ? setImmediate : null;
  typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(R) {
    for (var j = n(c); j !== null; ) {
      if (j.callback === null) r(c);
      else if (j.startTime <= R) r(c), j.sortIndex = j.expirationTime, t(s, j);
      else break;
      j = n(c);
    }
  }
  function g(R) {
    if (C = !1, f(R), !E) if (n(s) !== null) E = !0, Ei(N);
    else {
      var j = n(c);
      j !== null && Ni(g, j.startTime - R);
    }
  }
  function N(R, j) {
    E = !1, C && (C = !1, d(I), I = -1), k = !0;
    var A = m;
    try {
      for (f(j), h = n(s); h !== null && (!(h.expirationTime > j) || R && !Ie()); ) {
        var B = h.callback;
        if (typeof B == "function") {
          h.callback = null, m = h.priorityLevel;
          var q = B(h.expirationTime <= j);
          j = e.unstable_now(), typeof q == "function" ? h.callback = q : h === n(s) && r(s), f(j);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var ir = !0;
      else {
        var xt = n(c);
        xt !== null && Ni(g, xt.startTime - j), ir = !1;
      }
      return ir;
    } finally {
      h = null, m = A, k = !1;
    }
  }
  var w = !1, T = null, I = -1, D = 5, _ = -1;
  function Ie() {
    return !(e.unstable_now() - _ < D);
  }
  function pn() {
    if (T !== null) {
      var R = e.unstable_now();
      _ = R;
      var j = !0;
      try {
        j = T(!0, R);
      } finally {
        j ? mn() : (w = !1, T = null);
      }
    } else w = !1;
  }
  var mn;
  if (typeof u == "function") mn = function() {
    u(pn);
  };
  else if (typeof MessageChannel != "undefined") {
    var Gl = new MessageChannel(), mc = Gl.port2;
    Gl.port1.onmessage = pn, mn = function() {
      mc.postMessage(null);
    };
  } else mn = function() {
    L(pn, 0);
  };
  function Ei(R) {
    T = R, w || (w = !0, mn());
  }
  function Ni(R, j) {
    I = L(function() {
      R(e.unstable_now());
    }, j);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    E || k || (E = !0, Ei(N));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(R) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var j = 3;
        break;
      default:
        j = m;
    }
    var A = m;
    m = j;
    try {
      return R();
    } finally {
      m = A;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, j) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var A = m;
    m = R;
    try {
      return j();
    } finally {
      m = A;
    }
  }, e.unstable_scheduleCallback = function(R, j, A) {
    var B = e.unstable_now();
    switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? B + A : B) : A = B, R) {
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
    return q = A + q, R = { id: v++, callback: j, priorityLevel: R, startTime: A, expirationTime: q, sortIndex: -1 }, A > B ? (R.sortIndex = A, t(c, R), n(s) === null && R === n(c) && (C ? (d(I), I = -1) : C = !0, Ni(g, A - B))) : (R.sortIndex = q, t(s, R), E || k || (E = !0, Ei(N))), R;
  }, e.unstable_shouldYield = Ie, e.unstable_wrapCallback = function(R) {
    var j = m;
    return function() {
      var A = m;
      m = j;
      try {
        return R.apply(this, arguments);
      } finally {
        m = A;
      }
    };
  };
})(ms);
ps.exports = ms;
var $c = ps.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wc = X, we = $c;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var gs = /* @__PURE__ */ new Set(), Ln = {};
function Pt(e, t) {
  nn(e, t), nn(e + "Capture", t);
}
function nn(e, t) {
  for (Ln[e] = t, e = 0; e < t.length; e++) gs.add(t[e]);
}
var Qe = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), eo = Object.prototype.hasOwnProperty, Vc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Kl = {}, Xl = {};
function Bc(e) {
  return eo.call(Xl, e) ? !0 : eo.call(Kl, e) ? !1 : Vc.test(e) ? Xl[e] = !0 : (Kl[e] = !0, !1);
}
function Qc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Kc(e, t, n, r) {
  if (t === null || typeof t == "undefined" || Qc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function de(e, t, n, r, i, o, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  re[e] = new de(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  re[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  re[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  re[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  re[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  re[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  re[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  re[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  re[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zo = /[\-:]([a-z])/g;
function qo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Zo,
    qo
  );
  re[t] = new de(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Zo, qo);
  re[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Zo, qo);
  re[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Jo(e, t, n, r) {
  var i = re.hasOwnProperty(t) ? re[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Kc(t, n, i, r) && (n = null), r || i === null ? Bc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sr = Symbol.for("react.element"), Dt = Symbol.for("react.portal"), bt = Symbol.for("react.fragment"), el = Symbol.for("react.strict_mode"), to = Symbol.for("react.profiler"), hs = Symbol.for("react.provider"), ys = Symbol.for("react.context"), tl = Symbol.for("react.forward_ref"), no = Symbol.for("react.suspense"), ro = Symbol.for("react.suspense_list"), nl = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), vs = Symbol.for("react.offscreen"), Yl = Symbol.iterator;
function gn(e) {
  return e === null || typeof e != "object" ? null : (e = Yl && e[Yl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var W = Object.assign, Ii;
function En(e) {
  if (Ii === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ii = t && t[1] || "";
  }
  return `
` + Ii + e;
}
var ji = !1;
function Ai(e, t) {
  if (!e || ji) return "";
  ji = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var i = c.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, a = o.length - 1; 1 <= l && 0 <= a && i[l] !== o[a]; ) a--;
      for (; 1 <= l && 0 <= a; l--, a--) if (i[l] !== o[a]) {
        if (l !== 1 || a !== 1)
          do
            if (l--, a--, 0 > a || i[l] !== o[a]) {
              var s = `
` + i[l].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= l && 0 <= a);
        break;
      }
    }
  } finally {
    ji = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? En(e) : "";
}
function Xc(e) {
  switch (e.tag) {
    case 5:
      return En(e.type);
    case 16:
      return En("Lazy");
    case 13:
      return En("Suspense");
    case 19:
      return En("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ai(e.type, !1), e;
    case 11:
      return e = Ai(e.type.render, !1), e;
    case 1:
      return e = Ai(e.type, !0), e;
    default:
      return "";
  }
}
function io(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case bt:
      return "Fragment";
    case Dt:
      return "Portal";
    case to:
      return "Profiler";
    case el:
      return "StrictMode";
    case no:
      return "Suspense";
    case ro:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ys:
      return (e.displayName || "Context") + ".Consumer";
    case hs:
      return (e._context.displayName || "Context") + ".Provider";
    case tl:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case nl:
      return t = e.displayName || null, t !== null ? t : io(e.type) || "Memo";
    case et:
      t = e._payload, e = e._init;
      try {
        return io(e(t));
      } catch (n) {
      }
  }
  return null;
}
function Yc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return io(t);
    case 8:
      return t === el ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function mt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function xs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Zc(e) {
  var t = xs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n != "undefined" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(l) {
      r = "" + l, o.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ur(e) {
  e._valueTracker || (e._valueTracker = Zc(e));
}
function ws(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = xs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ur(e) {
  if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined") return null;
  try {
    return e.activeElement || e.body;
  } catch (t) {
    return e.body;
  }
}
function oo(e, t) {
  var n = t.checked;
  return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked });
}
function Zl(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = mt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ss(e, t) {
  t = t.checked, t != null && Jo(e, "checked", t, !1);
}
function lo(e, t) {
  Ss(e, t);
  var n = mt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ao(e, t.type, n) : t.hasOwnProperty("defaultValue") && ao(e, t.type, mt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ql(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ao(e, t, n) {
  (t !== "number" || Ur(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nn = Array.isArray;
function Yt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function so(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Jl(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (Nn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: mt(n) };
}
function ks(e, t) {
  var n = mt(t.value), r = mt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ea(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Es(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function uo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Es(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var cr, Ns = function(e) {
  return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (cr = cr || document.createElement("div"), cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = cr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Un(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mn = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, qc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mn).forEach(function(e) {
  qc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Mn[t] = Mn[e];
  });
});
function Cs(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Mn.hasOwnProperty(e) && Mn[e] ? ("" + t).trim() : t + "px";
}
function Ts(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Cs(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var Jc = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function co(e, t) {
  if (t) {
    if (Jc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function fo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var po = null;
function rl(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var mo = null, Zt = null, qt = null;
function ta(e) {
  if (e = nr(e)) {
    if (typeof mo != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = fi(t), mo(e.stateNode, e.type, t));
  }
}
function Ms(e) {
  Zt ? qt ? qt.push(e) : qt = [e] : Zt = e;
}
function Rs() {
  if (Zt) {
    var e = Zt, t = qt;
    if (qt = Zt = null, ta(e), t) for (e = 0; e < t.length; e++) ta(t[e]);
  }
}
function Is(e, t) {
  return e(t);
}
function js() {
}
var _i = !1;
function As(e, t, n) {
  if (_i) return e(t, n);
  _i = !0;
  try {
    return Is(e, t, n);
  } finally {
    _i = !1, (Zt !== null || qt !== null) && (js(), Rs());
  }
}
function Dn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = fi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var go = !1;
if (Qe) try {
  var hn = {};
  Object.defineProperty(hn, "passive", { get: function() {
    go = !0;
  } }), window.addEventListener("test", hn, hn), window.removeEventListener("test", hn, hn);
} catch (e) {
  go = !1;
}
function ed(e, t, n, r, i, o, l, a, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (v) {
    this.onError(v);
  }
}
var Rn = !1, Dr = null, br = !1, ho = null, td = { onError: function(e) {
  Rn = !0, Dr = e;
} };
function nd(e, t, n, r, i, o, l, a, s) {
  Rn = !1, Dr = null, ed.apply(td, arguments);
}
function rd(e, t, n, r, i, o, l, a, s) {
  if (nd.apply(this, arguments), Rn) {
    if (Rn) {
      var c = Dr;
      Rn = !1, Dr = null;
    } else throw Error(S(198));
    br || (br = !0, ho = c);
  }
}
function zt(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _s(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function na(e) {
  if (zt(e) !== e) throw Error(S(188));
}
function id(e) {
  var t = e.alternate;
  if (!t) {
    if (t = zt(e), t === null) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return na(i), e;
        if (o === r) return na(i), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) n = i, r = o;
    else {
      for (var l = !1, a = i.child; a; ) {
        if (a === n) {
          l = !0, n = i, r = o;
          break;
        }
        if (a === r) {
          l = !0, r = i, n = o;
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = o.child; a; ) {
          if (a === n) {
            l = !0, n = o, r = i;
            break;
          }
          if (a === r) {
            l = !0, r = o, n = i;
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Os(e) {
  return e = id(e), e !== null ? Ps(e) : null;
}
function Ps(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ps(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zs = we.unstable_scheduleCallback, ra = we.unstable_cancelCallback, od = we.unstable_shouldYield, ld = we.unstable_requestPaint, Q = we.unstable_now, ad = we.unstable_getCurrentPriorityLevel, il = we.unstable_ImmediatePriority, Ls = we.unstable_UserBlockingPriority, Fr = we.unstable_NormalPriority, sd = we.unstable_LowPriority, Us = we.unstable_IdlePriority, si = null, Fe = null;
function ud(e) {
  if (Fe && typeof Fe.onCommitFiberRoot == "function") try {
    Fe.onCommitFiberRoot(si, e, void 0, (e.current.flags & 128) === 128);
  } catch (t) {
  }
}
var Pe = Math.clz32 ? Math.clz32 : fd, cd = Math.log, dd = Math.LN2;
function fd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (cd(e) / dd | 0) | 0;
}
var dr = 64, fr = 4194304;
function Cn(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Gr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? r = Cn(a) : (o &= l, o !== 0 && (r = Cn(o)));
  } else l = n & ~i, l !== 0 ? r = Cn(l) : o !== 0 && (r = Cn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Pe(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function pd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function md(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var l = 31 - Pe(o), a = 1 << l, s = i[l];
    s === -1 ? (!(a & n) || a & r) && (i[l] = pd(a, t)) : s <= t && (e.expiredLanes |= a), o &= ~a;
  }
}
function yo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ds() {
  var e = dr;
  return dr <<= 1, !(dr & 4194240) && (dr = 64), e;
}
function Oi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function er(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Pe(t), e[t] = n;
}
function gd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Pe(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function ol(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Pe(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var z = 0;
function bs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Fs, ll, Gs, Hs, $s, vo = !1, pr = [], lt = null, at = null, st = null, bn = /* @__PURE__ */ new Map(), Fn = /* @__PURE__ */ new Map(), nt = [], hd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ia(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lt = null;
      break;
    case "dragenter":
    case "dragleave":
      at = null;
      break;
    case "mouseover":
    case "mouseout":
      st = null;
      break;
    case "pointerover":
    case "pointerout":
      bn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fn.delete(t.pointerId);
  }
}
function yn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = nr(t), t !== null && ll(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function yd(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return lt = yn(lt, e, t, n, r, i), !0;
    case "dragenter":
      return at = yn(at, e, t, n, r, i), !0;
    case "mouseover":
      return st = yn(st, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return bn.set(o, yn(bn.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Fn.set(o, yn(Fn.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Ws(e) {
  var t = Nt(e.target);
  if (t !== null) {
    var n = zt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = _s(n), t !== null) {
          e.blockedOn = t, $s(e.priority, function() {
            Gs(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Mr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      po = r, n.target.dispatchEvent(r), po = null;
    } else return t = nr(n), t !== null && ll(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function oa(e, t, n) {
  Mr(e) && n.delete(t);
}
function vd() {
  vo = !1, lt !== null && Mr(lt) && (lt = null), at !== null && Mr(at) && (at = null), st !== null && Mr(st) && (st = null), bn.forEach(oa), Fn.forEach(oa);
}
function vn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, vo || (vo = !0, we.unstable_scheduleCallback(we.unstable_NormalPriority, vd)));
}
function Gn(e) {
  function t(i) {
    return vn(i, e);
  }
  if (0 < pr.length) {
    vn(pr[0], e);
    for (var n = 1; n < pr.length; n++) {
      var r = pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (lt !== null && vn(lt, e), at !== null && vn(at, e), st !== null && vn(st, e), bn.forEach(t), Fn.forEach(t), n = 0; n < nt.length; n++) r = nt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nt.length && (n = nt[0], n.blockedOn === null); ) Ws(n), n.blockedOn === null && nt.shift();
}
var Jt = Ze.ReactCurrentBatchConfig, Hr = !0;
function xd(e, t, n, r) {
  var i = z, o = Jt.transition;
  Jt.transition = null;
  try {
    z = 1, al(e, t, n, r);
  } finally {
    z = i, Jt.transition = o;
  }
}
function wd(e, t, n, r) {
  var i = z, o = Jt.transition;
  Jt.transition = null;
  try {
    z = 4, al(e, t, n, r);
  } finally {
    z = i, Jt.transition = o;
  }
}
function al(e, t, n, r) {
  if (Hr) {
    var i = xo(e, t, n, r);
    if (i === null) $i(e, t, r, $r, n), ia(e, r);
    else if (yd(i, e, t, n, r)) r.stopPropagation();
    else if (ia(e, r), t & 4 && -1 < hd.indexOf(e)) {
      for (; i !== null; ) {
        var o = nr(i);
        if (o !== null && Fs(o), o = xo(e, t, n, r), o === null && $i(e, t, r, $r, n), o === i) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else $i(e, t, r, null, n);
  }
}
var $r = null;
function xo(e, t, n, r) {
  if ($r = null, e = rl(r), e = Nt(e), e !== null) if (t = zt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = _s(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return $r = e, null;
}
function Vs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ad()) {
        case il:
          return 1;
        case Ls:
          return 4;
        case Fr:
        case sd:
          return 16;
        case Us:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var it = null, sl = null, Rr = null;
function Bs() {
  if (Rr) return Rr;
  var e, t = sl, n = t.length, r, i = "value" in it ? it.value : it.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++) ;
  return Rr = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Ir(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function mr() {
  return !0;
}
function la() {
  return !1;
}
function ke(e) {
  function t(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? mr : la, this.isPropagationStopped = la, this;
  }
  return W(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = mr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = mr);
  }, persist: function() {
  }, isPersistent: mr }), t;
}
var dn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ul = ke(dn), tr = W({}, dn, { view: 0, detail: 0 }), Sd = ke(tr), Pi, zi, xn, ui = W({}, tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: cl, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== xn && (xn && e.type === "mousemove" ? (Pi = e.screenX - xn.screenX, zi = e.screenY - xn.screenY) : zi = Pi = 0, xn = e), Pi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : zi;
} }), aa = ke(ui), kd = W({}, ui, { dataTransfer: 0 }), Ed = ke(kd), Nd = W({}, tr, { relatedTarget: 0 }), Li = ke(Nd), Cd = W({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Td = ke(Cd), Md = W({}, dn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Rd = ke(Md), Id = W({}, dn, { data: 0 }), sa = ke(Id), jd = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Ad = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, _d = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Od(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _d[e]) ? !!t[e] : !1;
}
function cl() {
  return Od;
}
var Pd = W({}, tr, { key: function(e) {
  if (e.key) {
    var t = jd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ir(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ad[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: cl, charCode: function(e) {
  return e.type === "keypress" ? Ir(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ir(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), zd = ke(Pd), Ld = W({}, ui, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ua = ke(Ld), Ud = W({}, tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: cl }), Dd = ke(Ud), bd = W({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Fd = ke(bd), Gd = W({}, ui, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Hd = ke(Gd), $d = [9, 13, 27, 32], dl = Qe && "CompositionEvent" in window, In = null;
Qe && "documentMode" in document && (In = document.documentMode);
var Wd = Qe && "TextEvent" in window && !In, Qs = Qe && (!dl || In && 8 < In && 11 >= In), ca = " ", da = !1;
function Ks(e, t) {
  switch (e) {
    case "keyup":
      return $d.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xs(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ft = !1;
function Vd(e, t) {
  switch (e) {
    case "compositionend":
      return Xs(t);
    case "keypress":
      return t.which !== 32 ? null : (da = !0, ca);
    case "textInput":
      return e = t.data, e === ca && da ? null : e;
    default:
      return null;
  }
}
function Bd(e, t) {
  if (Ft) return e === "compositionend" || !dl && Ks(e, t) ? (e = Bs(), Rr = sl = it = null, Ft = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Qs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function fa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qd[e.type] : t === "textarea";
}
function Ys(e, t, n, r) {
  Ms(r), t = Wr(t, "onChange"), 0 < t.length && (n = new ul("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var jn = null, Hn = null;
function Kd(e) {
  au(e, 0);
}
function ci(e) {
  var t = $t(e);
  if (ws(t)) return e;
}
function Xd(e, t) {
  if (e === "change") return t;
}
var Zs = !1;
if (Qe) {
  var Ui;
  if (Qe) {
    var Di = "oninput" in document;
    if (!Di) {
      var pa = document.createElement("div");
      pa.setAttribute("oninput", "return;"), Di = typeof pa.oninput == "function";
    }
    Ui = Di;
  } else Ui = !1;
  Zs = Ui && (!document.documentMode || 9 < document.documentMode);
}
function ma() {
  jn && (jn.detachEvent("onpropertychange", qs), Hn = jn = null);
}
function qs(e) {
  if (e.propertyName === "value" && ci(Hn)) {
    var t = [];
    Ys(t, Hn, e, rl(e)), As(Kd, t);
  }
}
function Yd(e, t, n) {
  e === "focusin" ? (ma(), jn = t, Hn = n, jn.attachEvent("onpropertychange", qs)) : e === "focusout" && ma();
}
function Zd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ci(Hn);
}
function qd(e, t) {
  if (e === "click") return ci(t);
}
function Jd(e, t) {
  if (e === "input" || e === "change") return ci(t);
}
function ef(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Le = typeof Object.is == "function" ? Object.is : ef;
function $n(e, t) {
  if (Le(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!eo.call(t, i) || !Le(e[i], t[i])) return !1;
  }
  return !0;
}
function ga(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ha(e, t) {
  var n = ga(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ga(n);
  }
}
function Js(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Js(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function eu() {
  for (var e = window, t = Ur(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch (r) {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ur(e.document);
  }
  return t;
}
function fl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function tf(e) {
  var t = eu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Js(n.ownerDocument.documentElement, n)) {
    if (r !== null && fl(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = ha(n, o);
        var l = ha(
          n,
          r
        );
        i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var nf = Qe && "documentMode" in document && 11 >= document.documentMode, Gt = null, wo = null, An = null, So = !1;
function ya(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  So || Gt == null || Gt !== Ur(r) || (r = Gt, "selectionStart" in r && fl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), An && $n(An, r) || (An = r, r = Wr(wo, "onSelect"), 0 < r.length && (t = new ul("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Gt)));
}
function gr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Ht = { animationend: gr("Animation", "AnimationEnd"), animationiteration: gr("Animation", "AnimationIteration"), animationstart: gr("Animation", "AnimationStart"), transitionend: gr("Transition", "TransitionEnd") }, bi = {}, tu = {};
Qe && (tu = document.createElement("div").style, "AnimationEvent" in window || (delete Ht.animationend.animation, delete Ht.animationiteration.animation, delete Ht.animationstart.animation), "TransitionEvent" in window || delete Ht.transitionend.transition);
function di(e) {
  if (bi[e]) return bi[e];
  if (!Ht[e]) return e;
  var t = Ht[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in tu) return bi[e] = t[n];
  return e;
}
var nu = di("animationend"), ru = di("animationiteration"), iu = di("animationstart"), ou = di("transitionend"), lu = /* @__PURE__ */ new Map(), va = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ht(e, t) {
  lu.set(e, t), Pt(t, [e]);
}
for (var Fi = 0; Fi < va.length; Fi++) {
  var Gi = va[Fi], rf = Gi.toLowerCase(), of = Gi[0].toUpperCase() + Gi.slice(1);
  ht(rf, "on" + of);
}
ht(nu, "onAnimationEnd");
ht(ru, "onAnimationIteration");
ht(iu, "onAnimationStart");
ht("dblclick", "onDoubleClick");
ht("focusin", "onFocus");
ht("focusout", "onBlur");
ht(ou, "onTransitionEnd");
nn("onMouseEnter", ["mouseout", "mouseover"]);
nn("onMouseLeave", ["mouseout", "mouseover"]);
nn("onPointerEnter", ["pointerout", "pointerover"]);
nn("onPointerLeave", ["pointerout", "pointerover"]);
Pt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Pt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Pt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Pt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Pt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Tn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));
function xa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, rd(r, t, void 0, e), e.currentTarget = null;
}
function au(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var a = r[l], s = a.instance, c = a.currentTarget;
        if (a = a.listener, s !== o && i.isPropagationStopped()) break e;
        xa(i, a, c), o = s;
      }
      else for (l = 0; l < r.length; l++) {
        if (a = r[l], s = a.instance, c = a.currentTarget, a = a.listener, s !== o && i.isPropagationStopped()) break e;
        xa(i, a, c), o = s;
      }
    }
  }
  if (br) throw e = ho, br = !1, ho = null, e;
}
function b(e, t) {
  var n = t[To];
  n === void 0 && (n = t[To] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (su(t, e, 2, !1), n.add(r));
}
function Hi(e, t, n) {
  var r = 0;
  t && (r |= 4), su(n, e, r, t);
}
var hr = "_reactListening" + Math.random().toString(36).slice(2);
function Wn(e) {
  if (!e[hr]) {
    e[hr] = !0, gs.forEach(function(n) {
      n !== "selectionchange" && (lf.has(n) || Hi(n, !1, e), Hi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hr] || (t[hr] = !0, Hi("selectionchange", !1, t));
  }
}
function su(e, t, n, r) {
  switch (Vs(t)) {
    case 1:
      var i = xd;
      break;
    case 4:
      i = wd;
      break;
    default:
      i = al;
  }
  n = i.bind(null, t, n, e), i = void 0, !go || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function $i(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var a = r.stateNode.containerInfo;
      if (a === i || a.nodeType === 8 && a.parentNode === i) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var s = l.tag;
        if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo, s === i || s.nodeType === 8 && s.parentNode === i)) return;
        l = l.return;
      }
      for (; a !== null; ) {
        if (l = Nt(a), l === null) return;
        if (s = l.tag, s === 5 || s === 6) {
          r = o = l;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  As(function() {
    var c = o, v = rl(n), h = [];
    e: {
      var m = lu.get(e);
      if (m !== void 0) {
        var k = ul, E = e;
        switch (e) {
          case "keypress":
            if (Ir(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = zd;
            break;
          case "focusin":
            E = "focus", k = Li;
            break;
          case "focusout":
            E = "blur", k = Li;
            break;
          case "beforeblur":
          case "afterblur":
            k = Li;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = aa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Ed;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Dd;
            break;
          case nu:
          case ru:
          case iu:
            k = Td;
            break;
          case ou:
            k = Fd;
            break;
          case "scroll":
            k = Sd;
            break;
          case "wheel":
            k = Hd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Rd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = ua;
        }
        var C = (t & 4) !== 0, L = !C && e === "scroll", d = C ? m !== null ? m + "Capture" : null : m;
        C = [];
        for (var u = c, f; u !== null; ) {
          f = u;
          var g = f.stateNode;
          if (f.tag === 5 && g !== null && (f = g, d !== null && (g = Dn(u, d), g != null && C.push(Vn(u, g, f)))), L) break;
          u = u.return;
        }
        0 < C.length && (m = new k(m, E, null, n, v), h.push({ event: m, listeners: C }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", m && n !== po && (E = n.relatedTarget || n.fromElement) && (Nt(E) || E[Ke])) break e;
        if ((k || m) && (m = v.window === v ? v : (m = v.ownerDocument) ? m.defaultView || m.parentWindow : window, k ? (E = n.relatedTarget || n.toElement, k = c, E = E ? Nt(E) : null, E !== null && (L = zt(E), E !== L || E.tag !== 5 && E.tag !== 6) && (E = null)) : (k = null, E = c), k !== E)) {
          if (C = aa, g = "onMouseLeave", d = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (C = ua, g = "onPointerLeave", d = "onPointerEnter", u = "pointer"), L = k == null ? m : $t(k), f = E == null ? m : $t(E), m = new C(g, u + "leave", k, n, v), m.target = L, m.relatedTarget = f, g = null, Nt(v) === c && (C = new C(d, u + "enter", E, n, v), C.target = f, C.relatedTarget = L, g = C), L = g, k && E) t: {
            for (C = k, d = E, u = 0, f = C; f; f = Ut(f)) u++;
            for (f = 0, g = d; g; g = Ut(g)) f++;
            for (; 0 < u - f; ) C = Ut(C), u--;
            for (; 0 < f - u; ) d = Ut(d), f--;
            for (; u--; ) {
              if (C === d || d !== null && C === d.alternate) break t;
              C = Ut(C), d = Ut(d);
            }
            C = null;
          }
          else C = null;
          k !== null && wa(h, m, k, C, !1), E !== null && L !== null && wa(h, L, E, C, !0);
        }
      }
      e: {
        if (m = c ? $t(c) : window, k = m.nodeName && m.nodeName.toLowerCase(), k === "select" || k === "input" && m.type === "file") var N = Xd;
        else if (fa(m)) if (Zs) N = Jd;
        else {
          N = Zd;
          var w = Yd;
        }
        else (k = m.nodeName) && k.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = qd);
        if (N && (N = N(e, c))) {
          Ys(h, N, n, v);
          break e;
        }
        w && w(e, m, c), e === "focusout" && (w = m._wrapperState) && w.controlled && m.type === "number" && ao(m, "number", m.value);
      }
      switch (w = c ? $t(c) : window, e) {
        case "focusin":
          (fa(w) || w.contentEditable === "true") && (Gt = w, wo = c, An = null);
          break;
        case "focusout":
          An = wo = Gt = null;
          break;
        case "mousedown":
          So = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          So = !1, ya(h, n, v);
          break;
        case "selectionchange":
          if (nf) break;
        case "keydown":
        case "keyup":
          ya(h, n, v);
      }
      var T;
      if (dl) e: {
        switch (e) {
          case "compositionstart":
            var I = "onCompositionStart";
            break e;
          case "compositionend":
            I = "onCompositionEnd";
            break e;
          case "compositionupdate":
            I = "onCompositionUpdate";
            break e;
        }
        I = void 0;
      }
      else Ft ? Ks(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I && (Qs && n.locale !== "ko" && (Ft || I !== "onCompositionStart" ? I === "onCompositionEnd" && Ft && (T = Bs()) : (it = v, sl = "value" in it ? it.value : it.textContent, Ft = !0)), w = Wr(c, I), 0 < w.length && (I = new sa(I, e, null, n, v), h.push({ event: I, listeners: w }), T ? I.data = T : (T = Xs(n), T !== null && (I.data = T)))), (T = Wd ? Vd(e, n) : Bd(e, n)) && (c = Wr(c, "onBeforeInput"), 0 < c.length && (v = new sa("onBeforeInput", "beforeinput", null, n, v), h.push({ event: v, listeners: c }), v.data = T));
    }
    au(h, t);
  });
}
function Vn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Dn(e, n), o != null && r.unshift(Vn(e, o, i)), o = Dn(e, t), o != null && r.push(Vn(e, o, i))), e = e.return;
  }
  return r;
}
function Ut(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wa(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n, s = a.alternate, c = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 && c !== null && (a = c, i ? (s = Dn(n, o), s != null && l.unshift(Vn(n, s, a))) : i || (s = Dn(n, o), s != null && l.push(Vn(n, s, a)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var af = /\r\n?/g, sf = /\u0000|\uFFFD/g;
function Sa(e) {
  return (typeof e == "string" ? e : "" + e).replace(af, `
`).replace(sf, "");
}
function yr(e, t, n) {
  if (t = Sa(t), Sa(e) !== t && n) throw Error(S(425));
}
function Vr() {
}
var ko = null, Eo = null;
function No(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Co = typeof setTimeout == "function" ? setTimeout : void 0, uf = typeof clearTimeout == "function" ? clearTimeout : void 0, ka = typeof Promise == "function" ? Promise : void 0, cf = typeof queueMicrotask == "function" ? queueMicrotask : typeof ka != "undefined" ? function(e) {
  return ka.resolve(null).then(e).catch(df);
} : Co;
function df(e) {
  setTimeout(function() {
    throw e;
  });
}
function Wi(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Gn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Gn(t);
}
function ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ea(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fn = Math.random().toString(36).slice(2), be = "__reactFiber$" + fn, Bn = "__reactProps$" + fn, Ke = "__reactContainer$" + fn, To = "__reactEvents$" + fn, ff = "__reactListeners$" + fn, pf = "__reactHandles$" + fn;
function Nt(e) {
  var t = e[be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ke] || n[be]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ea(e); e !== null; ) {
        if (n = e[be]) return n;
        e = Ea(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function nr(e) {
  return e = e[be] || e[Ke], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function $t(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function fi(e) {
  return e[Bn] || null;
}
var Mo = [], Wt = -1;
function yt(e) {
  return { current: e };
}
function F(e) {
  0 > Wt || (e.current = Mo[Wt], Mo[Wt] = null, Wt--);
}
function U(e, t) {
  Wt++, Mo[Wt] = e.current, e.current = t;
}
var gt = {}, ae = yt(gt), me = yt(!1), It = gt;
function rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n) i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function ge(e) {
  return e = e.childContextTypes, e != null;
}
function Br() {
  F(me), F(ae);
}
function Na(e, t, n) {
  if (ae.current !== gt) throw Error(S(168));
  U(ae, t), U(me, n);
}
function uu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(S(108, Yc(e) || "Unknown", i));
  return W({}, n, r);
}
function Qr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || gt, It = ae.current, U(ae, e), U(me, me.current), !0;
}
function Ca(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = uu(e, t, It), r.__reactInternalMemoizedMergedChildContext = e, F(me), F(ae), U(ae, e)) : F(me), U(me, n);
}
var $e = null, pi = !1, Vi = !1;
function cu(e) {
  $e === null ? $e = [e] : $e.push(e);
}
function mf(e) {
  pi = !0, cu(e);
}
function vt() {
  if (!Vi && $e !== null) {
    Vi = !0;
    var e = 0, t = z;
    try {
      var n = $e;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      $e = null, pi = !1;
    } catch (i) {
      throw $e !== null && ($e = $e.slice(e + 1)), zs(il, vt), i;
    } finally {
      z = t, Vi = !1;
    }
  }
  return null;
}
var Vt = [], Bt = 0, Kr = null, Xr = 0, Ee = [], Ne = 0, jt = null, We = 1, Ve = "";
function kt(e, t) {
  Vt[Bt++] = Xr, Vt[Bt++] = Kr, Kr = e, Xr = t;
}
function du(e, t, n) {
  Ee[Ne++] = We, Ee[Ne++] = Ve, Ee[Ne++] = jt, jt = e;
  var r = We;
  e = Ve;
  var i = 32 - Pe(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - Pe(t) + i;
  if (30 < o) {
    var l = i - i % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, We = 1 << 32 - Pe(t) + i | n << i | r, Ve = o + e;
  } else We = 1 << o | n << i | r, Ve = e;
}
function pl(e) {
  e.return !== null && (kt(e, 1), du(e, 1, 0));
}
function ml(e) {
  for (; e === Kr; ) Kr = Vt[--Bt], Vt[Bt] = null, Xr = Vt[--Bt], Vt[Bt] = null;
  for (; e === jt; ) jt = Ee[--Ne], Ee[Ne] = null, Ve = Ee[--Ne], Ee[Ne] = null, We = Ee[--Ne], Ee[Ne] = null;
}
var xe = null, ve = null, G = !1, Oe = null;
function fu(e, t) {
  var n = Ce(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ta(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, xe = e, ve = ut(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, xe = e, ve = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = jt !== null ? { id: We, overflow: Ve } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ce(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, xe = e, ve = null, !0) : !1;
    default:
      return !1;
  }
}
function Ro(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Io(e) {
  if (G) {
    var t = ve;
    if (t) {
      var n = t;
      if (!Ta(e, t)) {
        if (Ro(e)) throw Error(S(418));
        t = ut(n.nextSibling);
        var r = xe;
        t && Ta(e, t) ? fu(r, n) : (e.flags = e.flags & -4097 | 2, G = !1, xe = e);
      }
    } else {
      if (Ro(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, G = !1, xe = e;
    }
  }
}
function Ma(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  xe = e;
}
function vr(e) {
  if (e !== xe) return !1;
  if (!G) return Ma(e), G = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !No(e.type, e.memoizedProps)), t && (t = ve)) {
    if (Ro(e)) throw pu(), Error(S(418));
    for (; t; ) fu(e, t), t = ut(t.nextSibling);
  }
  if (Ma(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = ut(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = xe ? ut(e.stateNode.nextSibling) : null;
  return !0;
}
function pu() {
  for (var e = ve; e; ) e = ut(e.nextSibling);
}
function on() {
  ve = xe = null, G = !1;
}
function gl(e) {
  Oe === null ? Oe = [e] : Oe.push(e);
}
var gf = Ze.ReactCurrentBatchConfig;
function wn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
        var a = i.refs;
        l === null ? delete a[o] : a[o] = l;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function xr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ra(e) {
  var t = e._init;
  return t(e._payload);
}
function mu(e) {
  function t(d, u) {
    if (e) {
      var f = d.deletions;
      f === null ? (d.deletions = [u], d.flags |= 16) : f.push(u);
    }
  }
  function n(d, u) {
    if (!e) return null;
    for (; u !== null; ) t(d, u), u = u.sibling;
    return null;
  }
  function r(d, u) {
    for (d = /* @__PURE__ */ new Map(); u !== null; ) u.key !== null ? d.set(u.key, u) : d.set(u.index, u), u = u.sibling;
    return d;
  }
  function i(d, u) {
    return d = pt(d, u), d.index = 0, d.sibling = null, d;
  }
  function o(d, u, f) {
    return d.index = f, e ? (f = d.alternate, f !== null ? (f = f.index, f < u ? (d.flags |= 2, u) : f) : (d.flags |= 2, u)) : (d.flags |= 1048576, u);
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, u, f, g) {
    return u === null || u.tag !== 6 ? (u = qi(f, d.mode, g), u.return = d, u) : (u = i(u, f), u.return = d, u);
  }
  function s(d, u, f, g) {
    var N = f.type;
    return N === bt ? v(d, u, f.props.children, g, f.key) : u !== null && (u.elementType === N || typeof N == "object" && N !== null && N.$$typeof === et && Ra(N) === u.type) ? (g = i(u, f.props), g.ref = wn(d, u, f), g.return = d, g) : (g = Lr(f.type, f.key, f.props, null, d.mode, g), g.ref = wn(d, u, f), g.return = d, g);
  }
  function c(d, u, f, g) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== f.containerInfo || u.stateNode.implementation !== f.implementation ? (u = Ji(f, d.mode, g), u.return = d, u) : (u = i(u, f.children || []), u.return = d, u);
  }
  function v(d, u, f, g, N) {
    return u === null || u.tag !== 7 ? (u = Rt(f, d.mode, g, N), u.return = d, u) : (u = i(u, f), u.return = d, u);
  }
  function h(d, u, f) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = qi("" + u, d.mode, f), u.return = d, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case sr:
          return f = Lr(u.type, u.key, u.props, null, d.mode, f), f.ref = wn(d, null, u), f.return = d, f;
        case Dt:
          return u = Ji(u, d.mode, f), u.return = d, u;
        case et:
          var g = u._init;
          return h(d, g(u._payload), f);
      }
      if (Nn(u) || gn(u)) return u = Rt(u, d.mode, f, null), u.return = d, u;
      xr(d, u);
    }
    return null;
  }
  function m(d, u, f, g) {
    var N = u !== null ? u.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return N !== null ? null : a(d, u, "" + f, g);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case sr:
          return f.key === N ? s(d, u, f, g) : null;
        case Dt:
          return f.key === N ? c(d, u, f, g) : null;
        case et:
          return N = f._init, m(
            d,
            u,
            N(f._payload),
            g
          );
      }
      if (Nn(f) || gn(f)) return N !== null ? null : v(d, u, f, g, null);
      xr(d, f);
    }
    return null;
  }
  function k(d, u, f, g, N) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return d = d.get(f) || null, a(u, d, "" + g, N);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case sr:
          return d = d.get(g.key === null ? f : g.key) || null, s(u, d, g, N);
        case Dt:
          return d = d.get(g.key === null ? f : g.key) || null, c(u, d, g, N);
        case et:
          var w = g._init;
          return k(d, u, f, w(g._payload), N);
      }
      if (Nn(g) || gn(g)) return d = d.get(f) || null, v(u, d, g, N, null);
      xr(u, g);
    }
    return null;
  }
  function E(d, u, f, g) {
    for (var N = null, w = null, T = u, I = u = 0, D = null; T !== null && I < f.length; I++) {
      T.index > I ? (D = T, T = null) : D = T.sibling;
      var _ = m(d, T, f[I], g);
      if (_ === null) {
        T === null && (T = D);
        break;
      }
      e && T && _.alternate === null && t(d, T), u = o(_, u, I), w === null ? N = _ : w.sibling = _, w = _, T = D;
    }
    if (I === f.length) return n(d, T), G && kt(d, I), N;
    if (T === null) {
      for (; I < f.length; I++) T = h(d, f[I], g), T !== null && (u = o(T, u, I), w === null ? N = T : w.sibling = T, w = T);
      return G && kt(d, I), N;
    }
    for (T = r(d, T); I < f.length; I++) D = k(T, d, I, f[I], g), D !== null && (e && D.alternate !== null && T.delete(D.key === null ? I : D.key), u = o(D, u, I), w === null ? N = D : w.sibling = D, w = D);
    return e && T.forEach(function(Ie) {
      return t(d, Ie);
    }), G && kt(d, I), N;
  }
  function C(d, u, f, g) {
    var N = gn(f);
    if (typeof N != "function") throw Error(S(150));
    if (f = N.call(f), f == null) throw Error(S(151));
    for (var w = N = null, T = u, I = u = 0, D = null, _ = f.next(); T !== null && !_.done; I++, _ = f.next()) {
      T.index > I ? (D = T, T = null) : D = T.sibling;
      var Ie = m(d, T, _.value, g);
      if (Ie === null) {
        T === null && (T = D);
        break;
      }
      e && T && Ie.alternate === null && t(d, T), u = o(Ie, u, I), w === null ? N = Ie : w.sibling = Ie, w = Ie, T = D;
    }
    if (_.done) return n(
      d,
      T
    ), G && kt(d, I), N;
    if (T === null) {
      for (; !_.done; I++, _ = f.next()) _ = h(d, _.value, g), _ !== null && (u = o(_, u, I), w === null ? N = _ : w.sibling = _, w = _);
      return G && kt(d, I), N;
    }
    for (T = r(d, T); !_.done; I++, _ = f.next()) _ = k(T, d, I, _.value, g), _ !== null && (e && _.alternate !== null && T.delete(_.key === null ? I : _.key), u = o(_, u, I), w === null ? N = _ : w.sibling = _, w = _);
    return e && T.forEach(function(pn) {
      return t(d, pn);
    }), G && kt(d, I), N;
  }
  function L(d, u, f, g) {
    if (typeof f == "object" && f !== null && f.type === bt && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case sr:
          e: {
            for (var N = f.key, w = u; w !== null; ) {
              if (w.key === N) {
                if (N = f.type, N === bt) {
                  if (w.tag === 7) {
                    n(d, w.sibling), u = i(w, f.props.children), u.return = d, d = u;
                    break e;
                  }
                } else if (w.elementType === N || typeof N == "object" && N !== null && N.$$typeof === et && Ra(N) === w.type) {
                  n(d, w.sibling), u = i(w, f.props), u.ref = wn(d, w, f), u.return = d, d = u;
                  break e;
                }
                n(d, w);
                break;
              } else t(d, w);
              w = w.sibling;
            }
            f.type === bt ? (u = Rt(f.props.children, d.mode, g, f.key), u.return = d, d = u) : (g = Lr(f.type, f.key, f.props, null, d.mode, g), g.ref = wn(d, u, f), g.return = d, d = g);
          }
          return l(d);
        case Dt:
          e: {
            for (w = f.key; u !== null; ) {
              if (u.key === w) if (u.tag === 4 && u.stateNode.containerInfo === f.containerInfo && u.stateNode.implementation === f.implementation) {
                n(d, u.sibling), u = i(u, f.children || []), u.return = d, d = u;
                break e;
              } else {
                n(d, u);
                break;
              }
              else t(d, u);
              u = u.sibling;
            }
            u = Ji(f, d.mode, g), u.return = d, d = u;
          }
          return l(d);
        case et:
          return w = f._init, L(d, u, w(f._payload), g);
      }
      if (Nn(f)) return E(d, u, f, g);
      if (gn(f)) return C(d, u, f, g);
      xr(d, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, u !== null && u.tag === 6 ? (n(d, u.sibling), u = i(u, f), u.return = d, d = u) : (n(d, u), u = qi(f, d.mode, g), u.return = d, d = u), l(d)) : n(d, u);
  }
  return L;
}
var ln = mu(!0), gu = mu(!1), Yr = yt(null), Zr = null, Qt = null, hl = null;
function yl() {
  hl = Qt = Zr = null;
}
function vl(e) {
  var t = Yr.current;
  F(Yr), e._currentValue = t;
}
function jo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function en(e, t) {
  Zr = e, hl = Qt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (pe = !0), e.firstContext = null);
}
function Me(e) {
  var t = e._currentValue;
  if (hl !== e) if (e = { context: e, memoizedValue: t, next: null }, Qt === null) {
    if (Zr === null) throw Error(S(308));
    Qt = e, Zr.dependencies = { lanes: 0, firstContext: e };
  } else Qt = Qt.next = e;
  return t;
}
var Ct = null;
function xl(e) {
  Ct === null ? Ct = [e] : Ct.push(e);
}
function hu(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, xl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Xe(e, r);
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var tt = !1;
function wl(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function yu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Be(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, P & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Xe(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, xl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Xe(e, n);
}
function jr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ol(e, n);
  }
}
function Ia(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = l : o = o.next = l, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function qr(e, t, n, r) {
  var i = e.updateQueue;
  tt = !1;
  var o = i.firstBaseUpdate, l = i.lastBaseUpdate, a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var s = a, c = s.next;
    s.next = null, l === null ? o = c : l.next = c, l = s;
    var v = e.alternate;
    v !== null && (v = v.updateQueue, a = v.lastBaseUpdate, a !== l && (a === null ? v.firstBaseUpdate = c : a.next = c, v.lastBaseUpdate = s));
  }
  if (o !== null) {
    var h = i.baseState;
    l = 0, v = c = s = null, a = o;
    do {
      var m = a.lane, k = a.eventTime;
      if ((r & m) === m) {
        v !== null && (v = v.next = {
          eventTime: k,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var E = e, C = a;
          switch (m = t, k = n, C.tag) {
            case 1:
              if (E = C.payload, typeof E == "function") {
                h = E.call(k, h, m);
                break e;
              }
              h = E;
              break e;
            case 3:
              E.flags = E.flags & -65537 | 128;
            case 0:
              if (E = C.payload, m = typeof E == "function" ? E.call(k, h, m) : E, m == null) break e;
              h = W({}, h, m);
              break e;
            case 2:
              tt = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, m = i.effects, m === null ? i.effects = [a] : m.push(a));
      } else k = { eventTime: k, lane: m, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, v === null ? (c = v = k, s = h) : v = v.next = k, l |= m;
      if (a = a.next, a === null) {
        if (a = i.shared.pending, a === null) break;
        m = a, a = m.next, m.next = null, i.lastBaseUpdate = m, i.shared.pending = null;
      }
    } while (!0);
    if (v === null && (s = h), i.baseState = s, i.firstBaseUpdate = c, i.lastBaseUpdate = v, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        l |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    _t |= l, e.lanes = l, e.memoizedState = h;
  }
}
function ja(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(S(191, i));
      i.call(r);
    }
  }
}
var rr = {}, Ge = yt(rr), Qn = yt(rr), Kn = yt(rr);
function Tt(e) {
  if (e === rr) throw Error(S(174));
  return e;
}
function Sl(e, t) {
  switch (U(Kn, t), U(Qn, e), U(Ge, rr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : uo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = uo(t, e);
  }
  F(Ge), U(Ge, t);
}
function an() {
  F(Ge), F(Qn), F(Kn);
}
function vu(e) {
  Tt(Kn.current);
  var t = Tt(Ge.current), n = uo(t, e.type);
  t !== n && (U(Qn, e), U(Ge, n));
}
function kl(e) {
  Qn.current === e && (F(Ge), F(Qn));
}
var H = yt(0);
function Jr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
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
var Bi = [];
function El() {
  for (var e = 0; e < Bi.length; e++) Bi[e]._workInProgressVersionPrimary = null;
  Bi.length = 0;
}
var Ar = Ze.ReactCurrentDispatcher, Qi = Ze.ReactCurrentBatchConfig, At = 0, $ = null, Y = null, J = null, ei = !1, _n = !1, Xn = 0, hf = 0;
function ie() {
  throw Error(S(321));
}
function Nl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Le(e[n], t[n])) return !1;
  return !0;
}
function Cl(e, t, n, r, i, o) {
  if (At = o, $ = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ar.current = e === null || e.memoizedState === null ? wf : Sf, e = n(r, i), _n) {
    o = 0;
    do {
      if (_n = !1, Xn = 0, 25 <= o) throw Error(S(301));
      o += 1, J = Y = null, t.updateQueue = null, Ar.current = kf, e = n(r, i);
    } while (_n);
  }
  if (Ar.current = ti, t = Y !== null && Y.next !== null, At = 0, J = Y = $ = null, ei = !1, t) throw Error(S(300));
  return e;
}
function Tl() {
  var e = Xn !== 0;
  return Xn = 0, e;
}
function De() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return J === null ? $.memoizedState = J = e : J = J.next = e, J;
}
function Re() {
  if (Y === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = J === null ? $.memoizedState : J.next;
  if (t !== null) J = t, Y = e;
  else {
    if (e === null) throw Error(S(310));
    Y = e, e = { memoizedState: Y.memoizedState, baseState: Y.baseState, baseQueue: Y.baseQueue, queue: Y.queue, next: null }, J === null ? $.memoizedState = J = e : J = J.next = e;
  }
  return J;
}
function Yn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ki(e) {
  var t = Re(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = Y, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      i.next = o.next, o.next = l;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var a = l = null, s = null, c = o;
    do {
      var v = c.lane;
      if ((At & v) === v) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: v,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (a = s = h, l = r) : s = s.next = h, $.lanes |= v, _t |= v;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? l = r : s.next = a, Le(r, t.memoizedState) || (pe = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, $.lanes |= o, _t |= o, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xi(e) {
  var t = Re(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = i = i.next;
    do
      o = e(o, l.action), l = l.next;
    while (l !== i);
    Le(o, t.memoizedState) || (pe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function xu() {
}
function wu(e, t) {
  var n = $, r = Re(), i = t(), o = !Le(r.memoizedState, i);
  if (o && (r.memoizedState = i, pe = !0), r = r.queue, Ml(Eu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || J !== null && J.memoizedState.tag & 1) {
    if (n.flags |= 2048, Zn(9, ku.bind(null, n, r, i, t), void 0, null), ee === null) throw Error(S(349));
    At & 30 || Su(n, t, i);
  }
  return i;
}
function Su(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ku(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Nu(t) && Cu(e);
}
function Eu(e, t, n) {
  return n(function() {
    Nu(t) && Cu(e);
  });
}
function Nu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Le(e, n);
  } catch (r) {
    return !0;
  }
}
function Cu(e) {
  var t = Xe(e, 1);
  t !== null && ze(t, e, 1, -1);
}
function Aa(e) {
  var t = De();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yn, lastRenderedState: e }, t.queue = e, e = e.dispatch = xf.bind(null, $, e), [t.memoizedState, e];
}
function Zn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Tu() {
  return Re().memoizedState;
}
function _r(e, t, n, r) {
  var i = De();
  $.flags |= e, i.memoizedState = Zn(1 | t, n, void 0, r === void 0 ? null : r);
}
function mi(e, t, n, r) {
  var i = Re();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var l = Y.memoizedState;
    if (o = l.destroy, r !== null && Nl(r, l.deps)) {
      i.memoizedState = Zn(t, n, o, r);
      return;
    }
  }
  $.flags |= e, i.memoizedState = Zn(1 | t, n, o, r);
}
function _a(e, t) {
  return _r(8390656, 8, e, t);
}
function Ml(e, t) {
  return mi(2048, 8, e, t);
}
function Mu(e, t) {
  return mi(4, 2, e, t);
}
function Ru(e, t) {
  return mi(4, 4, e, t);
}
function Iu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function ju(e, t, n) {
  return n = n != null ? n.concat([e]) : null, mi(4, 4, Iu.bind(null, t, e), n);
}
function Rl() {
}
function Au(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Nl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function _u(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Nl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ou(e, t, n) {
  return At & 21 ? (Le(n, t) || (n = Ds(), $.lanes |= n, _t |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, pe = !0), e.memoizedState = n);
}
function yf(e, t) {
  var n = z;
  z = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Qi.transition;
  Qi.transition = {};
  try {
    e(!1), t();
  } finally {
    z = n, Qi.transition = r;
  }
}
function Pu() {
  return Re().memoizedState;
}
function vf(e, t, n) {
  var r = ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, zu(e)) Lu(t, n);
  else if (n = hu(e, t, n, r), n !== null) {
    var i = ue();
    ze(n, e, r, i), Uu(n, t, r);
  }
}
function xf(e, t, n) {
  var r = ft(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zu(e)) Lu(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var l = t.lastRenderedState, a = o(l, n);
      if (i.hasEagerState = !0, i.eagerState = a, Le(a, l)) {
        var s = t.interleaved;
        s === null ? (i.next = i, xl(t)) : (i.next = s.next, s.next = i), t.interleaved = i;
        return;
      }
    } catch (c) {
    } finally {
    }
    n = hu(e, t, i, r), n !== null && (i = ue(), ze(n, e, r, i), Uu(n, t, r));
  }
}
function zu(e) {
  var t = e.alternate;
  return e === $ || t !== null && t === $;
}
function Lu(e, t) {
  _n = ei = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Uu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ol(e, n);
  }
}
var ti = { readContext: Me, useCallback: ie, useContext: ie, useEffect: ie, useImperativeHandle: ie, useInsertionEffect: ie, useLayoutEffect: ie, useMemo: ie, useReducer: ie, useRef: ie, useState: ie, useDebugValue: ie, useDeferredValue: ie, useTransition: ie, useMutableSource: ie, useSyncExternalStore: ie, useId: ie, unstable_isNewReconciler: !1 }, wf = { readContext: Me, useCallback: function(e, t) {
  return De().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Me, useEffect: _a, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, _r(
    4194308,
    4,
    Iu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return _r(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return _r(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = De();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = De();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = vf.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = De();
  return e = { current: e }, t.memoizedState = e;
}, useState: Aa, useDebugValue: Rl, useDeferredValue: function(e) {
  return De().memoizedState = e;
}, useTransition: function() {
  var e = Aa(!1), t = e[0];
  return e = yf.bind(null, e[1]), De().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = $, i = De();
  if (G) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), ee === null) throw Error(S(349));
    At & 30 || Su(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, _a(Eu.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Zn(9, ku.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = De(), t = ee.identifierPrefix;
  if (G) {
    var n = Ve, r = We;
    n = (r & ~(1 << 32 - Pe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Xn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = hf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Sf = {
  readContext: Me,
  useCallback: Au,
  useContext: Me,
  useEffect: Ml,
  useImperativeHandle: ju,
  useInsertionEffect: Mu,
  useLayoutEffect: Ru,
  useMemo: _u,
  useReducer: Ki,
  useRef: Tu,
  useState: function() {
    return Ki(Yn);
  },
  useDebugValue: Rl,
  useDeferredValue: function(e) {
    var t = Re();
    return Ou(t, Y.memoizedState, e);
  },
  useTransition: function() {
    var e = Ki(Yn)[0], t = Re().memoizedState;
    return [e, t];
  },
  useMutableSource: xu,
  useSyncExternalStore: wu,
  useId: Pu,
  unstable_isNewReconciler: !1
}, kf = { readContext: Me, useCallback: Au, useContext: Me, useEffect: Ml, useImperativeHandle: ju, useInsertionEffect: Mu, useLayoutEffect: Ru, useMemo: _u, useReducer: Xi, useRef: Tu, useState: function() {
  return Xi(Yn);
}, useDebugValue: Rl, useDeferredValue: function(e) {
  var t = Re();
  return Y === null ? t.memoizedState = e : Ou(t, Y.memoizedState, e);
}, useTransition: function() {
  var e = Xi(Yn)[0], t = Re().memoizedState;
  return [e, t];
}, useMutableSource: xu, useSyncExternalStore: wu, useId: Pu, unstable_isNewReconciler: !1 };
function Ae(e, t) {
  if (e && e.defaultProps) {
    t = W({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ao(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var gi = { isMounted: function(e) {
  return (e = e._reactInternals) ? zt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), i = ft(e), o = Be(r, i);
  o.payload = t, n != null && (o.callback = n), t = ct(e, o, i), t !== null && (ze(t, e, i, r), jr(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), i = ft(e), o = Be(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ct(e, o, i), t !== null && (ze(t, e, i, r), jr(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ue(), r = ft(e), i = Be(n, r);
  i.tag = 2, t != null && (i.callback = t), t = ct(e, i, r), t !== null && (ze(t, e, r, n), jr(t, e, r));
} };
function Oa(e, t, n, r, i, o, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !$n(n, r) || !$n(i, o) : !0;
}
function Du(e, t, n) {
  var r = !1, i = gt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Me(o) : (i = ge(t) ? It : ae.current, r = t.contextTypes, o = (r = r != null) ? rn(e, i) : gt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = gi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Pa(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && gi.enqueueReplaceState(t, t.state, null);
}
function _o(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, wl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Me(o) : (o = ge(t) ? It : ae.current, i.context = rn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ao(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && gi.enqueueReplaceState(i, i.state, null), qr(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function sn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Xc(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Yi(e, t, n) {
  return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null };
}
function Oo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Ef = typeof WeakMap == "function" ? WeakMap : Map;
function bu(e, t, n) {
  n = Be(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ri || (ri = !0, $o = r), Oo(e, t);
  }, n;
}
function Fu(e, t, n) {
  n = Be(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Oo(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Oo(e, t), typeof r != "function" && (dt === null ? dt = /* @__PURE__ */ new Set([this]) : dt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function za(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ef();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = Uf.bind(null, e, t, n), t.then(e, e));
}
function La(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ua(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Be(-1, 1), t.tag = 2, ct(n, t, 1))), n.lanes |= 1), e);
}
var Nf = Ze.ReactCurrentOwner, pe = !1;
function se(e, t, n, r) {
  t.child = e === null ? gu(t, null, n, r) : ln(t, e.child, n, r);
}
function Da(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return en(t, i), r = Cl(e, t, n, r, o, i), n = Tl(), e !== null && !pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ye(e, t, i)) : (G && n && pl(t), t.flags |= 1, se(e, t, r, i), t.child);
}
function ba(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Ll(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Gu(e, t, o, r, i)) : (e = Lr(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : $n, n(l, r) && e.ref === t.ref) return Ye(e, t, i);
  }
  return t.flags |= 1, e = pt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Gu(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if ($n(o, r) && e.ref === t.ref) if (pe = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (pe = !0);
    else return t.lanes = e.lanes, Ye(e, t, i);
  }
  return Po(e, t, n, r, i);
}
function Hu(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(Xt, ye), ye |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(Xt, ye), ye |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, U(Xt, ye), ye |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, U(Xt, ye), ye |= r;
  return se(e, t, i, n), t.child;
}
function $u(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Po(e, t, n, r, i) {
  var o = ge(n) ? It : ae.current;
  return o = rn(t, o), en(t, i), n = Cl(e, t, n, r, o, i), r = Tl(), e !== null && !pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ye(e, t, i)) : (G && r && pl(t), t.flags |= 1, se(e, t, n, i), t.child);
}
function Fa(e, t, n, r, i) {
  if (ge(n)) {
    var o = !0;
    Qr(t);
  } else o = !1;
  if (en(t, i), t.stateNode === null) Or(e, t), Du(t, n, r), _o(t, n, r, i), r = !0;
  else if (e === null) {
    var l = t.stateNode, a = t.memoizedProps;
    l.props = a;
    var s = l.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Me(c) : (c = ge(n) ? It : ae.current, c = rn(t, c));
    var v = n.getDerivedStateFromProps, h = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    h || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== r || s !== c) && Pa(t, l, r, c), tt = !1;
    var m = t.memoizedState;
    l.state = m, qr(t, r, l, i), s = t.memoizedState, a !== r || m !== s || me.current || tt ? (typeof v == "function" && (Ao(t, n, v, r), s = t.memoizedState), (a = tt || Oa(t, n, a, r, m, s, c)) ? (h || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = c, r = a) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, yu(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : Ae(t.type, a), l.props = c, h = t.pendingProps, m = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = Me(s) : (s = ge(n) ? It : ae.current, s = rn(t, s));
    var k = n.getDerivedStateFromProps;
    (v = typeof k == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== h || m !== s) && Pa(t, l, r, s), tt = !1, m = t.memoizedState, l.state = m, qr(t, r, l, i);
    var E = t.memoizedState;
    a !== h || m !== E || me.current || tt ? (typeof k == "function" && (Ao(t, n, k, r), E = t.memoizedState), (c = tt || Oa(t, n, c, r, m, E, s) || !1) ? (v || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, E, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, E, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = E), l.props = r, l.state = E, l.context = s, r = c) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return zo(e, t, n, r, o, i);
}
function zo(e, t, n, r, i, o) {
  $u(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && Ca(t, n, !1), Ye(e, t, o);
  r = t.stateNode, Nf.current = t;
  var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = ln(t, e.child, null, o), t.child = ln(t, null, a, o)) : se(e, t, a, o), t.memoizedState = r.state, i && Ca(t, n, !0), t.child;
}
function Wu(e) {
  var t = e.stateNode;
  t.pendingContext ? Na(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Na(e, t.context, !1), Sl(e, t.containerInfo);
}
function Ga(e, t, n, r, i) {
  return on(), gl(i), t.flags |= 256, se(e, t, n, r), t.child;
}
var Lo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Uo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vu(e, t, n) {
  var r = t.pendingProps, i = H.current, o = !1, l = (t.flags & 128) !== 0, a;
  if ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), U(H, i & 1), e === null)
    return Io(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = vi(l, r, 0, null), e = Rt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Uo(n), t.memoizedState = Lo, e) : Il(t, l));
  if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return Cf(e, t, l, r, a, i, n);
  if (o) {
    o = r.fallback, l = t.mode, i = e.child, a = i.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = pt(i, s), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = pt(a, o) : (o = Rt(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? Uo(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = Lo, r;
  }
  return o = e.child, e = o.sibling, r = pt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Il(e, t) {
  return t = vi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function wr(e, t, n, r) {
  return r !== null && gl(r), ln(t, e.child, null, n), e = Il(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Cf(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Yi(Error(S(422))), wr(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = vi({ mode: "visible", children: r.children }, i, 0, null), o = Rt(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && ln(t, e.child, null, l), t.child.memoizedState = Uo(l), t.memoizedState = Lo, o);
  if (!(t.mode & 1)) return wr(e, t, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
    return r = a, o = Error(S(419)), r = Yi(o, r, void 0), wr(e, t, l, r);
  }
  if (a = (l & e.childLanes) !== 0, pe || a) {
    if (r = ee, r !== null) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Xe(e, i), ze(r, e, i, -1));
    }
    return zl(), r = Yi(Error(S(421))), wr(e, t, l, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Df.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, ve = ut(i.nextSibling), xe = t, G = !0, Oe = null, e !== null && (Ee[Ne++] = We, Ee[Ne++] = Ve, Ee[Ne++] = jt, We = e.id, Ve = e.overflow, jt = t), t = Il(t, r.children), t.flags |= 4096, t);
}
function Ha(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), jo(e.return, t, n);
}
function Zi(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function Bu(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (se(e, t, r.children, n), r = H.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ha(e, n, t);
      else if (e.tag === 19) Ha(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (U(H, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Jr(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Zi(t, !1, i, n, o);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && Jr(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Zi(t, !0, n, null, o);
      break;
    case "together":
      Zi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Or(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ye(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), _t |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = pt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Tf(e, t, n) {
  switch (t.tag) {
    case 3:
      Wu(t), on();
      break;
    case 5:
      vu(t);
      break;
    case 1:
      ge(t.type) && Qr(t);
      break;
    case 4:
      Sl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      U(Yr, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(H, H.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Vu(e, t, n) : (U(H, H.current & 1), e = Ye(e, t, n), e !== null ? e.sibling : null);
      U(H, H.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Bu(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), U(H, H.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Hu(e, t, n);
  }
  return Ye(e, t, n);
}
var Qu, Do, Ku, Xu;
Qu = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Do = function() {
};
Ku = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Tt(Ge.current);
    var o = null;
    switch (n) {
      case "input":
        i = oo(e, i), r = oo(e, r), o = [];
        break;
      case "select":
        i = W({}, i, { value: void 0 }), r = W({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = so(e, i), r = so(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Vr);
    }
    co(n, r);
    var l;
    n = null;
    for (c in i) if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null) if (c === "style") {
      var a = i[c];
      for (l in a) a.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Ln.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (a = i != null ? i[c] : void 0, r.hasOwnProperty(c) && s !== a && (s != null || a != null)) if (c === "style") if (a) {
        for (l in a) !a.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in s) s.hasOwnProperty(l) && a[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
      } else n || (o || (o = []), o.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, a = a ? a.__html : void 0, s != null && a !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Ln.hasOwnProperty(c) ? (s != null && c === "onScroll" && b("scroll", e), o || a === s || (o = [])) : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Xu = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sn(e, t) {
  if (!G) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Mf(e, t, n) {
  var r = t.pendingProps;
  switch (ml(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return ge(t.type) && Br(), oe(t), null;
    case 3:
      return r = t.stateNode, an(), F(me), F(ae), El(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Oe !== null && (Bo(Oe), Oe = null))), Do(e, t), oe(t), null;
    case 5:
      kl(t);
      var i = Tt(Kn.current);
      if (n = t.type, e !== null && t.stateNode != null) Ku(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return oe(t), null;
        }
        if (e = Tt(Ge.current), vr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[be] = t, r[Bn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              b("cancel", r), b("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              b("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Tn.length; i++) b(Tn[i], r);
              break;
            case "source":
              b("error", r);
              break;
            case "img":
            case "image":
            case "link":
              b(
                "error",
                r
              ), b("load", r);
              break;
            case "details":
              b("toggle", r);
              break;
            case "input":
              Zl(r, o), b("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, b("invalid", r);
              break;
            case "textarea":
              Jl(r, o), b("invalid", r);
          }
          co(n, o), i = null;
          for (var l in o) if (o.hasOwnProperty(l)) {
            var a = o[l];
            l === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && yr(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && yr(
              r.textContent,
              a,
              e
            ), i = ["children", "" + a]) : Ln.hasOwnProperty(l) && a != null && l === "onScroll" && b("scroll", r);
          }
          switch (n) {
            case "input":
              ur(r), ql(r, o, !0);
              break;
            case "textarea":
              ur(r), ea(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Vr);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Es(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[be] = t, e[Bn] = r, Qu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = fo(n, r), n) {
              case "dialog":
                b("cancel", e), b("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                b("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Tn.length; i++) b(Tn[i], e);
                i = r;
                break;
              case "source":
                b("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                b(
                  "error",
                  e
                ), b("load", e), i = r;
                break;
              case "details":
                b("toggle", e), i = r;
                break;
              case "input":
                Zl(e, r), i = oo(e, r), b("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = W({}, r, { value: void 0 }), b("invalid", e);
                break;
              case "textarea":
                Jl(e, r), i = so(e, r), b("invalid", e);
                break;
              default:
                i = r;
            }
            co(n, i), a = i;
            for (o in a) if (a.hasOwnProperty(o)) {
              var s = a[o];
              o === "style" ? Ts(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ns(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Un(e, s) : typeof s == "number" && Un(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ln.hasOwnProperty(o) ? s != null && o === "onScroll" && b("scroll", e) : s != null && Jo(e, o, s, l));
            }
            switch (n) {
              case "input":
                ur(e), ql(e, r, !1);
                break;
              case "textarea":
                ur(e), ea(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Yt(e, !!r.multiple, o, !1) : r.defaultValue != null && Yt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Vr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) Xu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = Tt(Kn.current), Tt(Ge.current), vr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[be] = t, (o = r.nodeValue !== n) && (e = xe, e !== null)) switch (e.tag) {
            case 3:
              yr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && yr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[be] = t, t.stateNode = r;
      }
      return oe(t), null;
    case 13:
      if (F(H), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (G && ve !== null && t.mode & 1 && !(t.flags & 128)) pu(), on(), t.flags |= 98560, o = !1;
        else if (o = vr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
            o[be] = t;
          } else on(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          oe(t), o = !1;
        } else Oe !== null && (Bo(Oe), Oe = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || H.current & 1 ? Z === 0 && (Z = 3) : zl())), t.updateQueue !== null && (t.flags |= 4), oe(t), null);
    case 4:
      return an(), Do(e, t), e === null && Wn(t.stateNode.containerInfo), oe(t), null;
    case 10:
      return vl(t.type._context), oe(t), null;
    case 17:
      return ge(t.type) && Br(), oe(t), null;
    case 19:
      if (F(H), o = t.memoizedState, o === null) return oe(t), null;
      if (r = (t.flags & 128) !== 0, l = o.rendering, l === null) if (r) Sn(o, !1);
      else {
        if (Z !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Jr(e), l !== null) {
            for (t.flags |= 128, Sn(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return U(H, H.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && Q() > un && (t.flags |= 128, r = !0, Sn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Jr(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Sn(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !G) return oe(t), null;
        } else 2 * Q() - o.renderingStartTime > un && n !== 1073741824 && (t.flags |= 128, r = !0, Sn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Q(), t.sibling = null, n = H.current, U(H, r ? n & 1 | 2 : n & 1), t) : (oe(t), null);
    case 22:
    case 23:
      return Pl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ye & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : oe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Rf(e, t) {
  switch (ml(t), t.tag) {
    case 1:
      return ge(t.type) && Br(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return an(), F(me), F(ae), El(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return kl(t), null;
    case 13:
      if (F(H), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        on();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return F(H), null;
    case 4:
      return an(), null;
    case 10:
      return vl(t.type._context), null;
    case 22:
    case 23:
      return Pl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Sr = !1, le = !1, If = typeof WeakSet == "function" ? WeakSet : Set, M = null;
function Kt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    V(e, t, r);
  }
  else n.current = null;
}
function bo(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var $a = !1;
function jf(e, t) {
  if (ko = Hr, e = eu(), fl(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch (g) {
          n = null;
          break e;
        }
        var l = 0, a = -1, s = -1, c = 0, v = 0, h = e, m = null;
        t: for (; ; ) {
          for (var k; h !== n || i !== 0 && h.nodeType !== 3 || (a = l + i), h !== o || r !== 0 && h.nodeType !== 3 || (s = l + r), h.nodeType === 3 && (l += h.nodeValue.length), (k = h.firstChild) !== null; )
            m = h, h = k;
          for (; ; ) {
            if (h === e) break t;
            if (m === n && ++c === i && (a = l), m === o && ++v === r && (s = l), (k = h.nextSibling) !== null) break;
            h = m, m = h.parentNode;
          }
          h = k;
        }
        n = a === -1 || s === -1 ? null : { start: a, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Eo = { focusedElem: e, selectionRange: n }, Hr = !1, M = t; M !== null; ) if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
  else for (; M !== null; ) {
    t = M;
    try {
      var E = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (E !== null) {
            var C = E.memoizedProps, L = E.memoizedState, d = t.stateNode, u = d.getSnapshotBeforeUpdate(t.elementType === t.type ? C : Ae(t.type, C), L);
            d.__reactInternalSnapshotBeforeUpdate = u;
          }
          break;
        case 3:
          var f = t.stateNode.containerInfo;
          f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(S(163));
      }
    } catch (g) {
      V(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, M = e;
      break;
    }
    M = t.return;
  }
  return E = $a, $a = !1, E;
}
function On(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && bo(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function hi(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Fo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Yu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Yu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[be], delete t[Bn], delete t[To], delete t[ff], delete t[pf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Zu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wa(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Zu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Go(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Vr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Go(e, t, n), e = e.sibling; e !== null; ) Go(e, t, n), e = e.sibling;
}
function Ho(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ho(e, t, n), e = e.sibling; e !== null; ) Ho(e, t, n), e = e.sibling;
}
var te = null, _e = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) qu(e, t, n), n = n.sibling;
}
function qu(e, t, n) {
  if (Fe && typeof Fe.onCommitFiberUnmount == "function") try {
    Fe.onCommitFiberUnmount(si, n);
  } catch (a) {
  }
  switch (n.tag) {
    case 5:
      le || Kt(n, t);
    case 6:
      var r = te, i = _e;
      te = null, Je(e, t, n), te = r, _e = i, te !== null && (_e ? (e = te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null && (_e ? (e = te, n = n.stateNode, e.nodeType === 8 ? Wi(e.parentNode, n) : e.nodeType === 1 && Wi(e, n), Gn(e)) : Wi(te, n.stateNode));
      break;
    case 4:
      r = te, i = _e, te = n.stateNode.containerInfo, _e = !0, Je(e, t, n), te = r, _e = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && bo(n, t, l), i = i.next;
        } while (i !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (!le && (Kt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        V(n, t, a);
      }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (le = (r = le) || n.memoizedState !== null, Je(e, t, n), le = r) : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function Va(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new If()), t.forEach(function(r) {
      var i = bf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function je(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var o = e, l = t, a = l;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            te = a.stateNode, _e = !1;
            break e;
          case 3:
            te = a.stateNode.containerInfo, _e = !0;
            break e;
          case 4:
            te = a.stateNode.containerInfo, _e = !0;
            break e;
        }
        a = a.return;
      }
      if (te === null) throw Error(S(160));
      qu(o, l, i), te = null, _e = !1;
      var s = i.alternate;
      s !== null && (s.return = null), i.return = null;
    } catch (c) {
      V(i, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ju(t, e), t = t.sibling;
}
function Ju(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (je(t, e), Ue(e), r & 4) {
        try {
          On(3, e, e.return), hi(3, e);
        } catch (C) {
          V(e, e.return, C);
        }
        try {
          On(5, e, e.return);
        } catch (C) {
          V(e, e.return, C);
        }
      }
      break;
    case 1:
      je(t, e), Ue(e), r & 512 && n !== null && Kt(n, n.return);
      break;
    case 5:
      if (je(t, e), Ue(e), r & 512 && n !== null && Kt(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Un(i, "");
        } catch (C) {
          V(e, e.return, C);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, a = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          a === "input" && o.type === "radio" && o.name != null && Ss(i, o), fo(a, l);
          var c = fo(a, o);
          for (l = 0; l < s.length; l += 2) {
            var v = s[l], h = s[l + 1];
            v === "style" ? Ts(i, h) : v === "dangerouslySetInnerHTML" ? Ns(i, h) : v === "children" ? Un(i, h) : Jo(i, v, h, c);
          }
          switch (a) {
            case "input":
              lo(i, o);
              break;
            case "textarea":
              ks(i, o);
              break;
            case "select":
              var m = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var k = o.value;
              k != null ? Yt(i, !!o.multiple, k, !1) : m !== !!o.multiple && (o.defaultValue != null ? Yt(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Yt(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[Bn] = o;
        } catch (C) {
          V(e, e.return, C);
        }
      }
      break;
    case 6:
      if (je(t, e), Ue(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (C) {
          V(e, e.return, C);
        }
      }
      break;
    case 3:
      if (je(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Gn(t.containerInfo);
      } catch (C) {
        V(e, e.return, C);
      }
      break;
    case 4:
      je(t, e), Ue(e);
      break;
    case 13:
      je(t, e), Ue(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (_l = Q())), r & 4 && Va(e);
      break;
    case 22:
      if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (c = le) || v, je(t, e), le = c) : je(t, e), Ue(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !v && e.mode & 1) for (M = e, v = e.child; v !== null; ) {
          for (h = M = v; M !== null; ) {
            switch (m = M, k = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                On(4, m, m.return);
                break;
              case 1:
                Kt(m, m.return);
                var E = m.stateNode;
                if (typeof E.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, E.props = t.memoizedProps, E.state = t.memoizedState, E.componentWillUnmount();
                  } catch (C) {
                    V(r, n, C);
                  }
                }
                break;
              case 5:
                Kt(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Qa(h);
                  continue;
                }
            }
            k !== null ? (k.return = m, M = k) : Qa(h);
          }
          v = v.sibling;
        }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                i = h.stateNode, c ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = h.stateNode, s = h.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, a.style.display = Cs("display", l));
              } catch (C) {
                V(e, e.return, C);
              }
            }
          } else if (h.tag === 6) {
            if (v === null) try {
              h.stateNode.nodeValue = c ? "" : h.memoizedProps;
            } catch (C) {
              V(e, e.return, C);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), h = h.return;
          }
          v === h && (v = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      je(t, e), Ue(e), r & 4 && Va(e);
      break;
    case 21:
      break;
    default:
      je(
        t,
        e
      ), Ue(e);
  }
}
function Ue(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Zu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Un(i, ""), r.flags &= -33);
          var o = Wa(e);
          Ho(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, a = Wa(e);
          Go(e, a, l);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Af(e, t, n) {
  M = e, ec(e);
}
function ec(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M, o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Sr;
      if (!l) {
        var a = i.alternate, s = a !== null && a.memoizedState !== null || le;
        a = Sr;
        var c = le;
        if (Sr = l, (le = s) && !c) for (M = i; M !== null; ) l = M, s = l.child, l.tag === 22 && l.memoizedState !== null ? Ka(i) : s !== null ? (s.return = l, M = s) : Ka(i);
        for (; o !== null; ) M = o, ec(o), o = o.sibling;
        M = i, Sr = a, le = c;
      }
      Ba(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, M = o) : Ba(e);
  }
}
function Ba(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            le || hi(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !le) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : Ae(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && ja(t, o, r);
            break;
          case 3:
            var l = t.updateQueue;
            if (l !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              ja(t, l, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var c = t.alternate;
              if (c !== null) {
                var v = c.memoizedState;
                if (v !== null) {
                  var h = v.dehydrated;
                  h !== null && Gn(h);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(S(163));
        }
        le || t.flags & 512 && Fo(t);
      } catch (m) {
        V(t, t.return, m);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function Qa(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function Ka(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hi(4, t);
          } catch (s) {
            V(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(t, i, s);
            }
          }
          var o = t.return;
          try {
            Fo(t);
          } catch (s) {
            V(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Fo(t);
          } catch (s) {
            V(t, l, s);
          }
      }
    } catch (s) {
      V(t, t.return, s);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, M = a;
      break;
    }
    M = t.return;
  }
}
var _f = Math.ceil, ni = Ze.ReactCurrentDispatcher, jl = Ze.ReactCurrentOwner, Te = Ze.ReactCurrentBatchConfig, P = 0, ee = null, K = null, ne = 0, ye = 0, Xt = yt(0), Z = 0, qn = null, _t = 0, yi = 0, Al = 0, Pn = null, fe = null, _l = 0, un = 1 / 0, He = null, ri = !1, $o = null, dt = null, kr = !1, ot = null, ii = 0, zn = 0, Wo = null, Pr = -1, zr = 0;
function ue() {
  return P & 6 ? Q() : Pr !== -1 ? Pr : Pr = Q();
}
function ft(e) {
  return e.mode & 1 ? P & 2 && ne !== 0 ? ne & -ne : gf.transition !== null ? (zr === 0 && (zr = Ds()), zr) : (e = z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vs(e.type)), e) : 1;
}
function ze(e, t, n, r) {
  if (50 < zn) throw zn = 0, Wo = null, Error(S(185));
  er(e, n, r), (!(P & 2) || e !== ee) && (e === ee && (!(P & 2) && (yi |= n), Z === 4 && rt(e, ne)), he(e, r), n === 1 && P === 0 && !(t.mode & 1) && (un = Q() + 500, pi && vt()));
}
function he(e, t) {
  var n = e.callbackNode;
  md(e, t);
  var r = Gr(e, e === ee ? ne : 0);
  if (r === 0) n !== null && ra(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ra(n), t === 1) e.tag === 0 ? mf(Xa.bind(null, e)) : cu(Xa.bind(null, e)), cf(function() {
      !(P & 6) && vt();
    }), n = null;
    else {
      switch (bs(r)) {
        case 1:
          n = il;
          break;
        case 4:
          n = Ls;
          break;
        case 16:
          n = Fr;
          break;
        case 536870912:
          n = Us;
          break;
        default:
          n = Fr;
      }
      n = sc(n, tc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function tc(e, t) {
  if (Pr = -1, zr = 0, P & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (tn() && e.callbackNode !== n) return null;
  var r = Gr(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = oi(e, r);
  else {
    t = r;
    var i = P;
    P |= 2;
    var o = rc();
    (ee !== e || ne !== t) && (He = null, un = Q() + 500, Mt(e, t));
    do
      try {
        zf();
        break;
      } catch (a) {
        nc(e, a);
      }
    while (!0);
    yl(), ni.current = o, P = i, K !== null ? t = 0 : (ee = null, ne = 0, t = Z);
  }
  if (t !== 0) {
    if (t === 2 && (i = yo(e), i !== 0 && (r = i, t = Vo(e, i))), t === 1) throw n = qn, Mt(e, 0), rt(e, r), he(e, Q()), n;
    if (t === 6) rt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !Of(i) && (t = oi(e, r), t === 2 && (o = yo(e), o !== 0 && (r = o, t = Vo(e, o))), t === 1)) throw n = qn, Mt(e, 0), rt(e, r), he(e, Q()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Et(e, fe, He);
          break;
        case 3:
          if (rt(e, r), (r & 130023424) === r && (t = _l + 500 - Q(), 10 < t)) {
            if (Gr(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              ue(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Co(Et.bind(null, e, fe, He), t);
            break;
          }
          Et(e, fe, He);
          break;
        case 4:
          if (rt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Pe(r);
            o = 1 << l, l = t[l], l > i && (i = l), r &= ~o;
          }
          if (r = i, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _f(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Co(Et.bind(null, e, fe, He), r);
            break;
          }
          Et(e, fe, He);
          break;
        case 5:
          Et(e, fe, He);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return he(e, Q()), e.callbackNode === n ? tc.bind(null, e) : null;
}
function Vo(e, t) {
  var n = Pn;
  return e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256), e = oi(e, t), e !== 2 && (t = fe, fe = n, t !== null && Bo(t)), e;
}
function Bo(e) {
  fe === null ? fe = e : fe.push.apply(fe, e);
}
function Of(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], o = i.getSnapshot;
        i = i.value;
        try {
          if (!Le(o(), i)) return !1;
        } catch (l) {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
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
function rt(e, t) {
  for (t &= ~Al, t &= ~yi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Pe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Xa(e) {
  if (P & 6) throw Error(S(327));
  tn();
  var t = Gr(e, 0);
  if (!(t & 1)) return he(e, Q()), null;
  var n = oi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = yo(e);
    r !== 0 && (t = r, n = Vo(e, r));
  }
  if (n === 1) throw n = qn, Mt(e, 0), rt(e, t), he(e, Q()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Et(e, fe, He), he(e, Q()), null;
}
function Ol(e, t) {
  var n = P;
  P |= 1;
  try {
    return e(t);
  } finally {
    P = n, P === 0 && (un = Q() + 500, pi && vt());
  }
}
function Ot(e) {
  ot !== null && ot.tag === 0 && !(P & 6) && tn();
  var t = P;
  P |= 1;
  var n = Te.transition, r = z;
  try {
    if (Te.transition = null, z = 1, e) return e();
  } finally {
    z = r, Te.transition = n, P = t, !(P & 6) && vt();
  }
}
function Pl() {
  ye = Xt.current, F(Xt);
}
function Mt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, uf(n)), K !== null) for (n = K.return; n !== null; ) {
    var r = n;
    switch (ml(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Br();
        break;
      case 3:
        an(), F(me), F(ae), El();
        break;
      case 5:
        kl(r);
        break;
      case 4:
        an();
        break;
      case 13:
        F(H);
        break;
      case 19:
        F(H);
        break;
      case 10:
        vl(r.type._context);
        break;
      case 22:
      case 23:
        Pl();
    }
    n = n.return;
  }
  if (ee = e, K = e = pt(e.current, null), ne = ye = t, Z = 0, qn = null, Al = yi = _t = 0, fe = Pn = null, Ct !== null) {
    for (t = 0; t < Ct.length; t++) if (n = Ct[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, o = n.pending;
      if (o !== null) {
        var l = o.next;
        o.next = i, r.next = l;
      }
      n.pending = r;
    }
    Ct = null;
  }
  return e;
}
function nc(e, t) {
  do {
    var n = K;
    try {
      if (yl(), Ar.current = ti, ei) {
        for (var r = $.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        ei = !1;
      }
      if (At = 0, J = Y = $ = null, _n = !1, Xn = 0, jl.current = null, n === null || n.return === null) {
        Z = 1, qn = t, K = null;
        break;
      }
      e: {
        var o = e, l = n.return, a = n, s = t;
        if (t = ne, a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, v = a, h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m ? (v.updateQueue = m.updateQueue, v.memoizedState = m.memoizedState, v.lanes = m.lanes) : (v.updateQueue = null, v.memoizedState = null);
          }
          var k = La(l);
          if (k !== null) {
            k.flags &= -257, Ua(k, l, a, o, t), k.mode & 1 && za(o, c, t), t = k, s = c;
            var E = t.updateQueue;
            if (E === null) {
              var C = /* @__PURE__ */ new Set();
              C.add(s), t.updateQueue = C;
            } else E.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              za(o, c, t), zl();
              break e;
            }
            s = Error(S(426));
          }
        } else if (G && a.mode & 1) {
          var L = La(l);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256), Ua(L, l, a, o, t), gl(sn(s, a));
            break e;
          }
        }
        o = s = sn(s, a), Z !== 4 && (Z = 2), Pn === null ? Pn = [o] : Pn.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var d = bu(o, s, t);
              Ia(o, d);
              break e;
            case 1:
              a = s;
              var u = o.type, f = o.stateNode;
              if (!(o.flags & 128) && (typeof u.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (dt === null || !dt.has(f)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var g = Fu(o, a, t);
                Ia(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      oc(n);
    } catch (N) {
      t = N, K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function rc() {
  var e = ni.current;
  return ni.current = ti, e === null ? ti : e;
}
function zl() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4), ee === null || !(_t & 268435455) && !(yi & 268435455) || rt(ee, ne);
}
function oi(e, t) {
  var n = P;
  P |= 2;
  var r = rc();
  (ee !== e || ne !== t) && (He = null, Mt(e, t));
  do
    try {
      Pf();
      break;
    } catch (i) {
      nc(e, i);
    }
  while (!0);
  if (yl(), P = n, ni.current = r, K !== null) throw Error(S(261));
  return ee = null, ne = 0, Z;
}
function Pf() {
  for (; K !== null; ) ic(K);
}
function zf() {
  for (; K !== null && !od(); ) ic(K);
}
function ic(e) {
  var t = ac(e.alternate, e, ye);
  e.memoizedProps = e.pendingProps, t === null ? oc(e) : K = t, jl.current = null;
}
function oc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Rf(n, t), n !== null) {
        n.flags &= 32767, K = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Z = 6, K = null;
        return;
      }
    } else if (n = Mf(n, t, ye), n !== null) {
      K = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Et(e, t, n) {
  var r = z, i = Te.transition;
  try {
    Te.transition = null, z = 1, Lf(e, t, n, r);
  } finally {
    Te.transition = i, z = r;
  }
  return null;
}
function Lf(e, t, n, r) {
  do
    tn();
  while (ot !== null);
  if (P & 6) throw Error(S(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (gd(e, o), e === ee && (K = ee = null, ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kr || (kr = !0, sc(Fr, function() {
    return tn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Te.transition, Te.transition = null;
    var l = z;
    z = 1;
    var a = P;
    P |= 4, jl.current = null, jf(e, n), Ju(n, e), tf(Eo), Hr = !!ko, Eo = ko = null, e.current = n, Af(n), ld(), P = a, z = l, Te.transition = o;
  } else e.current = n;
  if (kr && (kr = !1, ot = e, ii = i), o = e.pendingLanes, o === 0 && (dt = null), ud(n.stateNode), he(e, Q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ri) throw ri = !1, e = $o, $o = null, e;
  return ii & 1 && e.tag !== 0 && tn(), o = e.pendingLanes, o & 1 ? e === Wo ? zn++ : (zn = 0, Wo = e) : zn = 0, vt(), null;
}
function tn() {
  if (ot !== null) {
    var e = bs(ii), t = Te.transition, n = z;
    try {
      if (Te.transition = null, z = 16 > e ? 16 : e, ot === null) var r = !1;
      else {
        if (e = ot, ot = null, ii = 0, P & 6) throw Error(S(331));
        var i = P;
        for (P |= 4, M = e.current; M !== null; ) {
          var o = M, l = o.child;
          if (M.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var c = a[s];
                for (M = c; M !== null; ) {
                  var v = M;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      On(8, v, o);
                  }
                  var h = v.child;
                  if (h !== null) h.return = v, M = h;
                  else for (; M !== null; ) {
                    v = M;
                    var m = v.sibling, k = v.return;
                    if (Yu(v), v === c) {
                      M = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = k, M = m;
                      break;
                    }
                    M = k;
                  }
                }
              }
              var E = o.alternate;
              if (E !== null) {
                var C = E.child;
                if (C !== null) {
                  E.child = null;
                  do {
                    var L = C.sibling;
                    C.sibling = null, C = L;
                  } while (C !== null);
                }
              }
              M = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) l.return = o, M = l;
          else e: for (; M !== null; ) {
            if (o = M, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                On(9, o, o.return);
            }
            var d = o.sibling;
            if (d !== null) {
              d.return = o.return, M = d;
              break e;
            }
            M = o.return;
          }
        }
        var u = e.current;
        for (M = u; M !== null; ) {
          l = M;
          var f = l.child;
          if (l.subtreeFlags & 2064 && f !== null) f.return = l, M = f;
          else e: for (l = u; M !== null; ) {
            if (a = M, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  hi(9, a);
              }
            } catch (N) {
              V(a, a.return, N);
            }
            if (a === l) {
              M = null;
              break e;
            }
            var g = a.sibling;
            if (g !== null) {
              g.return = a.return, M = g;
              break e;
            }
            M = a.return;
          }
        }
        if (P = i, vt(), Fe && typeof Fe.onPostCommitFiberRoot == "function") try {
          Fe.onPostCommitFiberRoot(si, e);
        } catch (N) {
        }
        r = !0;
      }
      return r;
    } finally {
      z = n, Te.transition = t;
    }
  }
  return !1;
}
function Ya(e, t, n) {
  t = sn(n, t), t = bu(e, t, 1), e = ct(e, t, 1), t = ue(), e !== null && (er(e, 1, t), he(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) Ya(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ya(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dt === null || !dt.has(r))) {
        e = sn(n, e), e = Fu(t, e, 1), t = ct(t, e, 1), e = ue(), t !== null && (er(t, 1, e), he(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Uf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ue(), e.pingedLanes |= e.suspendedLanes & n, ee === e && (ne & n) === n && (Z === 4 || Z === 3 && (ne & 130023424) === ne && 500 > Q() - _l ? Mt(e, 0) : Al |= n), he(e, t);
}
function lc(e, t) {
  t === 0 && (e.mode & 1 ? (t = fr, fr <<= 1, !(fr & 130023424) && (fr = 4194304)) : t = 1);
  var n = ue();
  e = Xe(e, t), e !== null && (er(e, t, n), he(e, n));
}
function Df(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), lc(e, n);
}
function bf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), lc(e, n);
}
var ac;
ac = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || me.current) pe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return pe = !1, Tf(e, t, n);
    pe = !!(e.flags & 131072);
  }
  else pe = !1, G && t.flags & 1048576 && du(t, Xr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Or(e, t), e = t.pendingProps;
      var i = rn(t, ae.current);
      en(t, n), i = Cl(null, t, r, e, i, n);
      var o = Tl();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ge(r) ? (o = !0, Qr(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, wl(t), i.updater = gi, t.stateNode = i, i._reactInternals = t, _o(t, r, e, n), t = zo(null, t, r, !0, o, n)) : (t.tag = 0, G && o && pl(t), se(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Or(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Gf(r), e = Ae(r, e), i) {
          case 0:
            t = Po(null, t, r, e, n);
            break e;
          case 1:
            t = Fa(null, t, r, e, n);
            break e;
          case 11:
            t = Da(null, t, r, e, n);
            break e;
          case 14:
            t = ba(null, t, r, Ae(r.type, e), n);
            break e;
        }
        throw Error(S(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ae(r, i), Po(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ae(r, i), Fa(e, t, r, i, n);
    case 3:
      e: {
        if (Wu(t), e === null) throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, yu(e, t), qr(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = sn(Error(S(423)), t), t = Ga(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = sn(Error(S(424)), t), t = Ga(e, t, r, n, i);
          break e;
        } else for (ve = ut(t.stateNode.containerInfo.firstChild), xe = t, G = !0, Oe = null, n = gu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (on(), r === i) {
            t = Ye(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return vu(t), e === null && Io(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, No(r, i) ? l = null : o !== null && No(r, o) && (t.flags |= 32), $u(e, t), se(e, t, l, n), t.child;
    case 6:
      return e === null && Io(t), null;
    case 13:
      return Vu(e, t, n);
    case 4:
      return Sl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ln(t, null, r, n) : se(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ae(r, i), Da(e, t, r, i, n);
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, U(Yr, r._currentValue), r._currentValue = l, o !== null) if (Le(o.value, l)) {
          if (o.children === i.children && !me.current) {
            t = Ye(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var a = o.dependencies;
          if (a !== null) {
            l = o.child;
            for (var s = a.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = Be(-1, n & -n), s.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var v = c.pending;
                    v === null ? s.next = s : (s.next = v.next, v.next = s), c.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), jo(
                  o.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (l = o.return, l === null) throw Error(S(341));
            l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), jo(l, n, t), l = o.sibling;
          } else l = o.child;
          if (l !== null) l.return = o;
          else for (l = o; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (o = l.sibling, o !== null) {
              o.return = l.return, l = o;
              break;
            }
            l = l.return;
          }
          o = l;
        }
        se(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, en(t, n), i = Me(i), r = r(i), t.flags |= 1, se(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Ae(r, t.pendingProps), i = Ae(r.type, i), ba(e, t, r, i, n);
    case 15:
      return Gu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ae(r, i), Or(e, t), t.tag = 1, ge(r) ? (e = !0, Qr(t)) : e = !1, en(t, n), Du(t, r, i), _o(t, r, i, n), zo(null, t, r, !0, e, n);
    case 19:
      return Bu(e, t, n);
    case 22:
      return Hu(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function sc(e, t) {
  return zs(e, t);
}
function Ff(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ce(e, t, n, r) {
  return new Ff(e, t, n, r);
}
function Ll(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Gf(e) {
  if (typeof e == "function") return Ll(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === tl) return 11;
    if (e === nl) return 14;
  }
  return 2;
}
function pt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ce(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Lr(e, t, n, r, i, o) {
  var l = 2;
  if (r = e, typeof e == "function") Ll(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case bt:
      return Rt(n.children, i, o, t);
    case el:
      l = 8, i |= 8;
      break;
    case to:
      return e = Ce(12, n, t, i | 2), e.elementType = to, e.lanes = o, e;
    case no:
      return e = Ce(13, n, t, i), e.elementType = no, e.lanes = o, e;
    case ro:
      return e = Ce(19, n, t, i), e.elementType = ro, e.lanes = o, e;
    case vs:
      return vi(n, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case hs:
          l = 10;
          break e;
        case ys:
          l = 9;
          break e;
        case tl:
          l = 11;
          break e;
        case nl:
          l = 14;
          break e;
        case et:
          l = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = Ce(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Rt(e, t, n, r) {
  return e = Ce(7, e, r, t), e.lanes = n, e;
}
function vi(e, t, n, r) {
  return e = Ce(22, e, r, t), e.elementType = vs, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function qi(e, t, n) {
  return e = Ce(6, e, null, t), e.lanes = n, e;
}
function Ji(e, t, n) {
  return t = Ce(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Hf(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Oi(0), this.expirationTimes = Oi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Oi(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Ul(e, t, n, r, i, o, l, a, s) {
  return e = new Hf(e, t, n, a, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ce(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wl(o), e;
}
function $f(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Dt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function uc(e) {
  if (!e) return gt;
  e = e._reactInternals;
  e: {
    if (zt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return uu(e, n, t);
  }
  return t;
}
function cc(e, t, n, r, i, o, l, a, s) {
  return e = Ul(n, r, !0, e, i, o, l, a, s), e.context = uc(null), n = e.current, r = ue(), i = ft(n), o = Be(r, i), o.callback = t != null ? t : null, ct(n, o, i), e.current.lanes = i, er(e, i, r), he(e, r), e;
}
function xi(e, t, n, r) {
  var i = t.current, o = ue(), l = ft(i);
  return n = uc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Be(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ct(i, t, l), e !== null && (ze(e, i, l, o), jr(e, i, l)), l;
}
function li(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Za(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Dl(e, t) {
  Za(e, t), (e = e.alternate) && Za(e, t);
}
function Wf() {
  return null;
}
var dc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function bl(e) {
  this._internalRoot = e;
}
wi.prototype.render = bl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  xi(e, t, null, null);
};
wi.prototype.unmount = bl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ot(function() {
      xi(null, e, null, null);
    }), t[Ke] = null;
  }
};
function wi(e) {
  this._internalRoot = e;
}
wi.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Hs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++) ;
    nt.splice(n, 0, e), n === 0 && Ws(e);
  }
};
function Fl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Si(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function qa() {
}
function Vf(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = li(l);
        o.call(c);
      };
    }
    var l = cc(t, r, e, 0, null, !1, !1, "", qa);
    return e._reactRootContainer = l, e[Ke] = l.current, Wn(e.nodeType === 8 ? e.parentNode : e), Ot(), l;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var c = li(s);
      a.call(c);
    };
  }
  var s = Ul(e, 0, !1, null, null, !1, !1, "", qa);
  return e._reactRootContainer = s, e[Ke] = s.current, Wn(e.nodeType === 8 ? e.parentNode : e), Ot(function() {
    xi(t, s, n, r);
  }), s;
}
function ki(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var a = i;
      i = function() {
        var s = li(l);
        a.call(s);
      };
    }
    xi(t, l, e, i);
  } else l = Vf(n, t, e, i, r);
  return li(l);
}
Fs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cn(t.pendingLanes);
        n !== 0 && (ol(t, n | 1), he(t, Q()), !(P & 6) && (un = Q() + 500, vt()));
      }
      break;
    case 13:
      Ot(function() {
        var r = Xe(e, 1);
        if (r !== null) {
          var i = ue();
          ze(r, e, 1, i);
        }
      }), Dl(e, 1);
  }
};
ll = function(e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = ue();
      ze(t, e, 134217728, n);
    }
    Dl(e, 134217728);
  }
};
Gs = function(e) {
  if (e.tag === 13) {
    var t = ft(e), n = Xe(e, t);
    if (n !== null) {
      var r = ue();
      ze(n, e, t, r);
    }
    Dl(e, t);
  }
};
Hs = function() {
  return z;
};
$s = function(e, t) {
  var n = z;
  try {
    return z = e, t();
  } finally {
    z = n;
  }
};
mo = function(e, t, n) {
  switch (t) {
    case "input":
      if (lo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = fi(r);
            if (!i) throw Error(S(90));
            ws(r), lo(r, i);
          }
        }
      }
      break;
    case "textarea":
      ks(e, n);
      break;
    case "select":
      t = n.value, t != null && Yt(e, !!n.multiple, t, !1);
  }
};
Is = Ol;
js = Ot;
var Bf = { usingClientEntryPoint: !1, Events: [nr, $t, fi, Ms, Rs, Ol] }, kn = { findFiberByHostInstance: Nt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Qf = { bundleType: kn.bundleType, version: kn.version, rendererPackageName: kn.rendererPackageName, rendererConfig: kn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ze.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Os(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: kn.findFiberByHostInstance || Wf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var Er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Er.isDisabled && Er.supportsFiber) try {
    si = Er.inject(Qf), Fe = Er;
  } catch (e) {
  }
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bf;
Se.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fl(t)) throw Error(S(200));
  return $f(e, t, null, n);
};
Se.createRoot = function(e, t) {
  if (!Fl(e)) throw Error(S(299));
  var n = !1, r = "", i = dc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ul(e, 1, !1, null, null, n, !1, r, i), e[Ke] = t.current, Wn(e.nodeType === 8 ? e.parentNode : e), new bl(t);
};
Se.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Os(t), e = e === null ? null : e.stateNode, e;
};
Se.flushSync = function(e) {
  return Ot(e);
};
Se.hydrate = function(e, t, n) {
  if (!Si(t)) throw Error(S(200));
  return ki(null, e, t, !0, n);
};
Se.hydrateRoot = function(e, t, n) {
  if (!Fl(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", l = dc;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = cc(t, null, e, 1, n != null ? n : null, i, !1, o, l), e[Ke] = t.current, Wn(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new wi(t);
};
Se.render = function(e, t, n) {
  if (!Si(t)) throw Error(S(200));
  return ki(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function(e) {
  if (!Si(e)) throw Error(S(40));
  return e._reactRootContainer ? (Ot(function() {
    ki(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ke] = null;
    });
  }), !0) : !1;
};
Se.unstable_batchedUpdates = Ol;
Se.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Si(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return ki(e, t, n, !1, r);
};
Se.version = "18.3.1-next-f1338f8080-20240426";
function fc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fc);
    } catch (e) {
      console.error(e);
    }
}
fc(), fs.exports = Se;
var Kf = fs.exports, pc, Ja = Kf;
pc = Ja.createRoot, Ja.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Xf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yf = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Lt = (e, t) => {
  const n = X.forwardRef(
    (h, v) => {
      var m = h, {
        color: r = "currentColor",
        size: i = 24,
        strokeWidth: o = 2,
        absoluteStrokeWidth: l,
        className: a = "",
        children: s
      } = m, c = Wl(m, [
        "color",
        "size",
        "strokeWidth",
        "absoluteStrokeWidth",
        "className",
        "children"
      ]);
      return X.createElement(
        "svg",
        qe(St(qe({
          ref: v
        }, Xf), {
          width: i,
          height: i,
          stroke: r,
          strokeWidth: l ? Number(o) * 24 / Number(i) : o,
          className: ["lucide", `lucide-${Yf(e)}`, a].join(" ")
        }), c),
        [
          ...t.map(([k, E]) => X.createElement(k, E)),
          ...Array.isArray(s) ? s : [s]
        ]
      );
    }
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zf = Lt("BarChart2", [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qf = Lt("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jf = Lt("Megaphone", [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = Lt("Package", [
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = Lt("Rocket", [
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz"
    }
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const np = Lt("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rp = Lt("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
var x = /* @__PURE__ */ ((e) => (e.ANALYTICS = "Analytics", e.BILLING_MANAGER = "Billing Manager", e.COMMUNITY_MANAGER = "Community Manager", e.CONTENT = "Content", e.CRO = "CRO", e.CUSTOMER_SUCCESS = "Customer Success", e.CUSTOMER_SUPPORT = "Customer Support", e.DEMAND_GEN = "Demand Gen", e.FOUNDER = "Founder", e.GROWTH = "Growth", e.GROWTH_ANALYST = "Growth Analyst", e.GROWTH_MARKETER = "Growth Marketer", e.HEAD_OF_GROWTH = "Head of Growth", e.HEAD_OF_MARKETING = "Head of Marketing", e.HEAD_OF_SALES = "Head of Sales", e.HEAD_OF_SUPPORT = "Head of Support", e.MARKETING = "Marketing", e.PAID_MEDIA = "Paid Media", e.PARTNERSHIPS = "Partnerships", e.PRODUCT_ANALYST = "Product Analyst", e.PRODUCT_GROWTH = "Product Growth", e.PRODUCT_MANAGER = "Product Manager", e.PRODUCT_MARKETING = "Product Marketing", e.SALES_ENABLEMENT = "Sales Enablement", e.SEO = "SEO", e.SOCIAL_MEDIA = "Social Media", e.UX_LEAD = "UX Lead", e))(x || {}), y = /* @__PURE__ */ ((e) => (e.AWARENESS = "Awareness", e.ACQUISITION = "Acquisition", e.ACTIVATION = "Activation", e.MONETIZATION = "Monetization", e.ENGAGEMENT = "Engagement", e.RETENTION = "Retention", e.EXPANSION = "Expansion", e))(y || {});
const es = {
  Awareness: {
    name: "Awareness",
    icon: /* @__PURE__ */ p.jsx(Jf, { size: 32, strokeWidth: 1.5 }),
    description: "Top of funnel visibility and brand recognition"
  },
  Acquisition: {
    name: "Acquisition",
    icon: /* @__PURE__ */ p.jsx(ep, { size: 32, strokeWidth: 1.5 }),
    description: "Converting visitors into leads and signups"
  },
  Activation: {
    name: "Activation",
    icon: /* @__PURE__ */ p.jsx(tp, { size: 32, strokeWidth: 1.5 }),
    description: "Getting users to experience core value"
  },
  Monetization: {
    name: "Monetization",
    icon: /* @__PURE__ */ p.jsx(qf, { size: 32, strokeWidth: 1.5 }),
    description: "Converting free users to paying customers"
  },
  Engagement: {
    name: "Engagement",
    icon: /* @__PURE__ */ p.jsx(Zf, { size: 32, strokeWidth: 1.5 }),
    description: "Driving regular product usage and adoption"
  },
  Retention: {
    name: "Retention",
    icon: /* @__PURE__ */ p.jsx(rp, { size: 32, strokeWidth: 1.5 }),
    description: "Keeping customers active and satisfied"
  },
  Expansion: {
    name: "Expansion",
    icon: /* @__PURE__ */ p.jsx(np, { size: 32, strokeWidth: 1.5 }),
    description: "Growing revenue from existing customers"
  }
}, Nr = [
  // Awareness Leaks (15 total)
  {
    id: "traffic-quality-leak",
    name: "Traffic Quality Leak",
    impactMetric: "52% unqualified traffic",
    impactScore: 9,
    responsibleRole: x.HEAD_OF_MARKETING,
    difficulty: "Medium",
    timeframe: "4-6 weeks",
    description: "High volume of non-converting traffic affecting overall conversion rates and ROI.",
    pillar: y.AWARENESS,
    emoji: "🌐",
    solution: "Audit top traffic sources using intent metrics (time on site, pages/session); prioritize ICP-focused targeting for paid + organic."
  },
  {
    id: "brand-awareness-gap",
    name: "Brand Awareness Gap",
    impactMetric: "60% overestimate brand visibility",
    impactScore: 10,
    responsibleRole: x.FOUNDER,
    difficulty: "Hard",
    timeframe: "3-4 months",
    description: "SaaS founders overestimate brand visibility—missing growth at the top of funnel.",
    pillar: y.AWARENESS,
    emoji: "👀",
    solution: "Run brand lift surveys quarterly + benchmark direct traffic trends; invest in guest posts, PR, and partnerships for reach."
  },
  {
    id: "content-distribution-leak",
    name: "Content Distribution Leak",
    impactMetric: "45% content never shared",
    impactScore: 8,
    responsibleRole: x.CONTENT,
    difficulty: "Medium",
    timeframe: "2-3 weeks",
    description: "High-quality content not reaching target audience due to poor distribution strategy.",
    pillar: y.AWARENESS,
    emoji: "📢",
    solution: "Implement 80/20 rule: spend 20% creating, 80% distributing. Create distribution checklist for each content piece."
  },
  {
    id: "seo-keyword-gap",
    name: "SEO Keyword Gap",
    impactMetric: "55% missing high-intent keywords",
    impactScore: 9,
    responsibleRole: x.SEO,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Missing out on high-intent organic traffic due to incomplete keyword coverage.",
    pillar: y.AWARENESS,
    emoji: "🔍",
    solution: "Conduct competitor gap analysis; prioritize high-intent keywords with reasonable difficulty scores."
  },
  {
    id: "social-proof-deficit",
    name: "Social Proof Deficit",
    impactMetric: "40% lower trust signals",
    impactScore: 7,
    responsibleRole: x.MARKETING,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Lack of visible social proof reducing brand credibility and trust.",
    pillar: y.AWARENESS,
    emoji: "🤝",
    solution: "Systematically collect and showcase customer testimonials, case studies, and industry recognition."
  },
  {
    id: "channel-mix-imbalance",
    name: "Channel Mix Imbalance",
    impactMetric: "70% traffic from single source",
    impactScore: 10,
    responsibleRole: x.HEAD_OF_GROWTH,
    difficulty: "Hard",
    timeframe: "3-4 months",
    description: "Over-reliance on a single traffic source creating growth vulnerability.",
    pillar: y.AWARENESS,
    emoji: "📊",
    solution: "Diversify traffic sources; develop multi-channel attribution model to optimize channel mix."
  },
  {
    id: "competitor-visibility-gap",
    name: "Competitor Visibility Gap",
    impactMetric: "35% lower share of voice",
    impactScore: 6,
    responsibleRole: x.MARKETING,
    difficulty: "Medium",
    timeframe: "2-3 months",
    description: "Competitors dominating key channels and conversations in the market.",
    pillar: y.AWARENESS,
    emoji: "📈",
    solution: "Track share of voice metrics; develop content and PR strategy to increase market presence."
  },
  {
    id: "message-market-misalignment",
    name: "Message-Market Misalignment",
    impactMetric: "48% message confusion",
    impactScore: 8,
    responsibleRole: x.PRODUCT_MARKETING,
    difficulty: "Medium",
    timeframe: "4-6 weeks",
    description: "Core message not resonating with target market segments.",
    pillar: y.AWARENESS,
    emoji: "🎯",
    solution: "Conduct customer research; align messaging with specific pain points and use cases."
  },
  {
    id: "content-quality-leak",
    name: "Content Quality Leak",
    impactMetric: "65% bounce rate on blog",
    impactScore: 10,
    responsibleRole: x.CONTENT,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "High bounce rates indicating content not meeting user expectations.",
    pillar: y.AWARENESS,
    emoji: "📝",
    solution: "Implement content quality checklist; focus on depth, actionability, and unique insights."
  },
  {
    id: "mobile-experience-gap",
    name: "Mobile Experience Gap",
    impactMetric: "45% mobile bounce rate",
    impactScore: 8,
    responsibleRole: x.UX_LEAD,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Poor mobile experience causing significant traffic loss.",
    pillar: y.AWARENESS,
    emoji: "📱",
    solution: "Conduct mobile-first audit; optimize for mobile speed and usability."
  },
  {
    id: "community-engagement-leak",
    name: "Community Engagement Leak",
    impactMetric: "30% community participation",
    impactScore: 5,
    responsibleRole: x.COMMUNITY_MANAGER,
    difficulty: "Medium",
    timeframe: "2-3 months",
    description: "Low community engagement limiting organic growth and word-of-mouth.",
    pillar: y.AWARENESS,
    emoji: "👥",
    solution: "Develop community engagement program; create value-adding activities and discussions."
  },
  {
    id: "pr-opportunity-loss",
    name: "PR Opportunity Loss",
    impactMetric: "25% PR coverage rate",
    impactScore: 4,
    responsibleRole: x.MARKETING,
    difficulty: "Hard",
    timeframe: "3-4 months",
    description: "Missing opportunities for earned media and industry recognition.",
    pillar: y.AWARENESS,
    emoji: "📰",
    solution: "Build media relationships; create newsworthy content and company milestones."
  },
  {
    id: "event-roi-leak",
    name: "Event ROI Leak",
    impactMetric: "40% event ROI gap",
    impactScore: 7,
    responsibleRole: x.MARKETING,
    difficulty: "Medium",
    timeframe: "2-3 months",
    description: "Poor event selection and execution reducing awareness ROI.",
    pillar: y.AWARENESS,
    emoji: "🎪",
    solution: "Develop event scoring system; focus on targeted, high-impact industry events."
  },
  {
    id: "influencer-strategy-gap",
    name: "Influencer Strategy Gap",
    impactMetric: "20% influencer engagement",
    impactScore: 4,
    responsibleRole: x.MARKETING,
    difficulty: "Medium",
    timeframe: "2-3 months",
    description: "Untapped potential in industry influencer relationships.",
    pillar: y.AWARENESS,
    emoji: "🌟",
    solution: "Identify and engage key industry influencers; create mutual value propositions."
  },
  {
    id: "brand-voice-inconsistency",
    name: "Brand Voice Inconsistency",
    impactMetric: "35% brand inconsistency",
    impactScore: 6,
    responsibleRole: x.MARKETING,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Inconsistent brand voice across channels weakening brand recognition.",
    pillar: y.AWARENESS,
    emoji: "🎭",
    solution: "Create comprehensive brand guidelines; implement regular brand audit process."
  },
  // Acquisition Leaks (15 total)
  {
    id: "landing-page-conversion-leak",
    name: "Landing Page Conversion Leak",
    impactMetric: "65% landing page drop-off",
    impactScore: 10,
    responsibleRole: x.CRO,
    difficulty: "Medium",
    timeframe: "4-6 weeks",
    description: "High bounce rates on key landing pages reducing conversion potential.",
    pillar: y.ACQUISITION,
    emoji: "🎯",
    solution: "Implement A/B testing program; optimize page elements based on user behavior data."
  },
  {
    id: "form-abandonment",
    name: "Form Abandonment",
    impactMetric: "55% form abandonment",
    impactScore: 9,
    responsibleRole: x.UX_LEAD,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "High form abandonment rates due to poor form design and friction.",
    pillar: y.ACQUISITION,
    emoji: "📝",
    solution: "Simplify forms; implement progressive profiling and smart defaults."
  },
  {
    id: "ad-spend-efficiency",
    name: "Ad Spend Efficiency",
    impactMetric: "40% wasted ad spend",
    impactScore: 7,
    responsibleRole: x.PAID_MEDIA,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Inefficient ad spend reducing acquisition ROI.",
    pillar: y.ACQUISITION,
    emoji: "💰",
    solution: "Audit ad performance; optimize targeting and bid strategies."
  },
  {
    id: "lead-quality-gap",
    name: "Lead Quality Gap",
    impactMetric: "50% poor quality leads",
    impactScore: 9,
    responsibleRole: x.DEMAND_GEN,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "High volume of unqualified leads straining sales resources.",
    pillar: y.ACQUISITION,
    emoji: "⭐",
    solution: "Implement lead scoring; align content and campaigns with ICP."
  },
  {
    id: "trial-signup-friction",
    name: "Trial Signup Friction",
    impactMetric: "45% trial abandonment",
    impactScore: 8,
    responsibleRole: x.PRODUCT_GROWTH,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Complex trial signup process deterring potential customers.",
    pillar: y.ACQUISITION,
    emoji: "🚪",
    solution: "Streamline trial signup; remove unnecessary friction points."
  },
  {
    id: "content-product-fit",
    name: "Content-Product Fit",
    impactMetric: "35% content conversion",
    impactScore: 6,
    responsibleRole: x.CONTENT,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Content not effectively converting readers into leads.",
    pillar: y.ACQUISITION,
    emoji: "📚",
    solution: "Map content to buyer journey; create conversion-focused content strategy."
  },
  {
    id: "social-proof-gap",
    name: "Social Proof Gap",
    impactMetric: "30% trust deficit",
    impactScore: 5,
    responsibleRole: x.MARKETING,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Lack of social proof on key conversion pages.",
    pillar: y.ACQUISITION,
    emoji: "👍",
    solution: "Add testimonials and case studies to high-impact pages."
  },
  {
    id: "mobile-conversion-gap",
    name: "Mobile Conversion Gap",
    impactMetric: "60% mobile conversion gap",
    impactScore: 10,
    responsibleRole: x.UX_LEAD,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Poor mobile conversion rates compared to desktop.",
    pillar: y.ACQUISITION,
    emoji: "📱",
    solution: "Optimize mobile experience; implement mobile-first design principles."
  },
  {
    id: "seo-cro-misalignment",
    name: "SEO-CRO Misalignment",
    impactMetric: "40% organic conversion gap",
    impactScore: 7,
    responsibleRole: x.SEO,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "SEO traffic not converting due to misaligned content.",
    pillar: y.ACQUISITION,
    emoji: "🔍",
    solution: "Align SEO and CRO strategies; optimize for both rankings and conversions."
  },
  {
    id: "value-proposition-clarity",
    name: "Value Proposition Clarity",
    impactMetric: "45% value confusion",
    impactScore: 8,
    responsibleRole: x.PRODUCT_MARKETING,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Unclear value proposition reducing conversion rates.",
    pillar: y.ACQUISITION,
    emoji: "💡",
    solution: "Clarify and test value propositions; use clear benefit statements."
  },
  {
    id: "pricing-page-optimization",
    name: "Pricing Page Optimization",
    impactMetric: "55% pricing page exits",
    impactScore: 9,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "High exit rates on pricing page reducing conversions.",
    pillar: y.ACQUISITION,
    emoji: "💲",
    solution: "Optimize pricing page layout and messaging; add comparison features."
  },
  {
    id: "demo-request-process",
    name: "Demo Request Process",
    impactMetric: "40% demo no-shows",
    impactScore: 7,
    responsibleRole: x.SALES_ENABLEMENT,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "High demo request abandonment and no-show rates.",
    pillar: y.ACQUISITION,
    emoji: "🎥",
    solution: "Streamline demo scheduling; implement reminder system."
  },
  {
    id: "channel-attribution",
    name: "Channel Attribution",
    impactMetric: "50% attribution gaps",
    impactScore: 9,
    responsibleRole: x.ANALYTICS,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Poor channel attribution leading to suboptimal budget allocation.",
    pillar: y.ACQUISITION,
    emoji: "📊",
    solution: "Implement multi-touch attribution model; track full customer journey."
  },
  {
    id: "competitive-positioning",
    name: "Competitive Positioning",
    impactMetric: "35% competitive losses",
    impactScore: 6,
    responsibleRole: x.PRODUCT_MARKETING,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Weak competitive differentiation in key decision points.",
    pillar: y.ACQUISITION,
    emoji: "🏆",
    solution: "Develop clear competitive positioning; create comparison content."
  },
  {
    id: "sales-marketing-alignment",
    name: "Sales-Marketing Alignment",
    impactMetric: "45% lead handling delay",
    impactScore: 8,
    responsibleRole: x.HEAD_OF_SALES,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Poor alignment between sales and marketing teams.",
    pillar: y.ACQUISITION,
    emoji: "🤝",
    solution: "Implement SLA between sales and marketing; align on lead definitions."
  },
  // Activation Leaks (15 total)
  {
    id: "onboarding-drop-off",
    name: "Onboarding Drop-off",
    impactMetric: "60% onboarding abandonment",
    impactScore: 10,
    responsibleRole: x.PRODUCT_GROWTH,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "High drop-off during initial product onboarding.",
    pillar: y.ACTIVATION,
    emoji: "🚀",
    solution: "Optimize onboarding flow; implement progress tracking and celebrations."
  },
  {
    id: "time-to-value-gap",
    name: "Time-to-Value Gap",
    impactMetric: "45% slow activation",
    impactScore: 8,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Users taking too long to reach core value moment.",
    pillar: y.ACTIVATION,
    emoji: "⏱️",
    solution: "Identify and optimize path to core value; remove unnecessary steps."
  },
  {
    id: "feature-discovery",
    name: "Feature Discovery",
    impactMetric: "55% feature blindness",
    impactScore: 9,
    responsibleRole: x.UX_LEAD,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Users missing key features during initial usage.",
    pillar: y.ACTIVATION,
    emoji: "🔍",
    solution: "Implement progressive feature discovery; use contextual tooltips."
  },
  {
    id: "data-import-friction",
    name: "Data Import Friction",
    impactMetric: "40% import failures",
    impactScore: 7,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Data import process creating activation barrier.",
    pillar: y.ACTIVATION,
    emoji: "📥",
    solution: "Streamline data import process; add import assistance and validation."
  },
  {
    id: "setup-complexity",
    name: "Setup Complexity",
    impactMetric: "50% setup abandonment",
    impactScore: 9,
    responsibleRole: x.PRODUCT_GROWTH,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Complex initial setup requirements deterring activation.",
    pillar: y.ACTIVATION,
    emoji: "⚙️",
    solution: "Simplify initial setup; provide templates and quick-start options."
  },
  {
    id: "team-collaboration",
    name: "Team Collaboration",
    impactMetric: "35% solo usage",
    impactScore: 6,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Low team member invitation and collaboration.",
    pillar: y.ACTIVATION,
    emoji: "👥",
    solution: "Improve team invitation flow; add collaboration incentives."
  },
  {
    id: "integration-friction",
    name: "Integration Friction",
    impactMetric: "45% integration fails",
    impactScore: 8,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Integration setup creating activation barrier.",
    pillar: y.ACTIVATION,
    emoji: "🔌",
    solution: "Simplify integration process; provide better error handling and guidance."
  },
  {
    id: "welcome-experience",
    name: "Welcome Experience",
    impactMetric: "30% welcome engagement",
    impactScore: 5,
    responsibleRole: x.PRODUCT_MARKETING,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Poor initial welcome and orientation experience.",
    pillar: y.ACTIVATION,
    emoji: "👋",
    solution: "Enhance welcome flow; personalize based on user segment."
  },
  {
    id: "help-resource-access",
    name: "Help Resource Access",
    impactMetric: "40% help seeking fails",
    impactScore: 7,
    responsibleRole: x.CUSTOMER_SUPPORT,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Users struggling to find help during activation.",
    pillar: y.ACTIVATION,
    emoji: "❓",
    solution: "Improve help accessibility; add contextual support options."
  },
  {
    id: "account-setup-flow",
    name: "Account Setup Flow",
    impactMetric: "55% incomplete setup",
    impactScore: 9,
    responsibleRole: x.PRODUCT_GROWTH,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Users not completing crucial account setup steps.",
    pillar: y.ACTIVATION,
    emoji: "🔧",
    solution: "Optimize account setup flow; add setup completion incentives."
  },
  {
    id: "first-run-experience",
    name: "First Run Experience",
    impactMetric: "45% first-run confusion",
    impactScore: 8,
    responsibleRole: x.UX_LEAD,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Poor first-run experience leading to early abandonment.",
    pillar: y.ACTIVATION,
    emoji: "🎮",
    solution: "Improve first-run UX; add interactive tutorials and guides."
  },
  {
    id: "mobile-activation",
    name: "Mobile Activation",
    impactMetric: "50% mobile activation gap",
    impactScore: 9,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Lower activation rates on mobile devices.",
    pillar: y.ACTIVATION,
    emoji: "📱",
    solution: "Optimize mobile activation flow; ensure cross-device consistency."
  },
  {
    id: "value-recognition",
    name: "Value Recognition",
    impactMetric: "35% value confusion",
    impactScore: 6,
    responsibleRole: x.PRODUCT_MARKETING,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Users not recognizing product value during activation.",
    pillar: y.ACTIVATION,
    emoji: "💡",
    solution: "Improve value communication; highlight quick wins and benefits."
  },
  {
    id: "configuration-options",
    name: "Configuration Options",
    impactMetric: "40% config overwhelm",
    impactScore: 7,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Too many configuration options causing confusion.",
    pillar: y.ACTIVATION,
    emoji: "⚙️",
    solution: "Simplify configuration; use smart defaults and progressive options."
  },
  {
    id: "activation-metrics",
    name: "Activation Metrics",
    impactMetric: "60% metric blindness",
    impactScore: 10,
    responsibleRole: x.ANALYTICS,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Poor visibility into activation success metrics.",
    pillar: y.ACTIVATION,
    emoji: "📊",
    solution: "Implement comprehensive activation tracking and reporting."
  },
  // Monetization Leaks (15 total)
  {
    id: "pricing-strategy-gap",
    name: "Pricing Strategy Gap",
    impactMetric: "45% pricing objections",
    impactScore: 8,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Suboptimal pricing structure reducing conversion rates.",
    pillar: y.MONETIZATION,
    emoji: "💰",
    solution: "Conduct pricing research; implement value-based pricing strategy."
  },
  {
    id: "trial-conversion-rate",
    name: "Trial Conversion Rate",
    impactMetric: "70% trial expiration",
    impactScore: 10,
    responsibleRole: x.PRODUCT_GROWTH,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Low trial-to-paid conversion rate.",
    pillar: y.MONETIZATION,
    emoji: "🎯",
    solution: "Optimize trial experience; implement conversion triggers and reminders."
  },
  {
    id: "payment-friction",
    name: "Payment Friction",
    impactMetric: "35% payment abandonment",
    impactScore: 6,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Payment process friction causing lost sales.",
    pillar: y.MONETIZATION,
    emoji: "💳",
    solution: "Streamline payment process; add multiple payment options."
  },
  {
    id: "feature-value-alignment",
    name: "Feature Value Alignment",
    impactMetric: "50% feature underutilization",
    impactScore: 9,
    responsibleRole: x.PRODUCT_MARKETING,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Premium features not driving perceived value.",
    pillar: y.MONETIZATION,
    emoji: "⭐",
    solution: "Align features with value perception; improve feature marketing."
  },
  {
    id: "upgrade-path-clarity",
    name: "Upgrade Path Clarity",
    impactMetric: "40% upgrade confusion",
    impactScore: 7,
    responsibleRole: x.PRODUCT_GROWTH,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Unclear upgrade paths reducing expansion revenue.",
    pillar: y.MONETIZATION,
    emoji: "⬆️",
    solution: "Clarify upgrade benefits; implement in-product upgrade prompts."
  },
  {
    id: "billing-experience",
    name: "Billing Experience",
    impactMetric: "25% billing support load",
    impactScore: 4,
    responsibleRole: x.BILLING_MANAGER,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Poor billing experience increasing support costs.",
    pillar: y.MONETIZATION,
    emoji: "📄",
    solution: "Improve billing transparency; enhance self-service options."
  },
  {
    id: "value-demonstration",
    name: "Value Demonstration",
    impactMetric: "55% value uncertainty",
    impactScore: 9,
    responsibleRole: x.PRODUCT_MARKETING,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Failure to demonstrate clear ROI to prospects.",
    pillar: y.MONETIZATION,
    emoji: "📈",
    solution: "Create ROI calculator; showcase customer success metrics."
  },
  {
    id: "discount-strategy",
    name: "Discount Strategy",
    impactMetric: "30% excessive discounting",
    impactScore: 5,
    responsibleRole: x.SALES_ENABLEMENT,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Inconsistent discounting reducing average deal value.",
    pillar: y.MONETIZATION,
    emoji: "🏷️",
    solution: "Implement structured discount guidelines; train sales team."
  },
  {
    id: "enterprise-sales-process",
    name: "Enterprise Sales Process",
    impactMetric: "45% enterprise close rate",
    impactScore: 8,
    responsibleRole: x.HEAD_OF_SALES,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Ineffective enterprise sales process limiting growth.",
    pillar: y.MONETIZATION,
    emoji: "🏢",
    solution: "Optimize enterprise sales playbook; improve deal qualification."
  },
  {
    id: "pricing-page-performance",
    name: "Pricing Page Performance",
    impactMetric: "60% pricing page exits",
    impactScore: 10,
    responsibleRole: x.CRO,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "High exit rates on pricing page.",
    pillar: y.MONETIZATION,
    emoji: "💲",
    solution: "Optimize pricing page layout and messaging; add social proof."
  },
  {
    id: "contract-process",
    name: "Contract Process",
    impactMetric: "35% contract delays",
    impactScore: 6,
    responsibleRole: x.SALES_ENABLEMENT,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Slow contract process extending sales cycle.",
    pillar: y.MONETIZATION,
    emoji: "📝",
    solution: "Streamline contract process; implement e-signature solution."
  },
  {
    id: "payment-recovery",
    name: "Payment Recovery",
    impactMetric: "20% failed payments",
    impactScore: 4,
    responsibleRole: x.BILLING_MANAGER,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Revenue loss from failed payment recovery.",
    pillar: y.MONETIZATION,
    emoji: "🔄",
    solution: "Implement dunning management; improve payment retry logic."
  },
  {
    id: "expansion-revenue",
    name: "Expansion Revenue",
    impactMetric: "40% expansion opportunity",
    impactScore: 7,
    responsibleRole: x.CUSTOMER_SUCCESS,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Missed opportunities for account expansion.",
    pillar: y.MONETIZATION,
    emoji: "📊",
    solution: "Implement expansion playbook; identify growth signals."
  },
  {
    id: "annual-plan-conversion",
    name: "Annual Plan Conversion",
    impactMetric: "25% annual conversion",
    impactScore: 4,
    responsibleRole: x.PRODUCT_GROWTH,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Low monthly to annual plan conversion rate.",
    pillar: y.MONETIZATION,
    emoji: "📅",
    solution: "Improve annual plan benefits; implement conversion campaign."
  },
  {
    id: "usage-based-pricing",
    name: "Usage-Based Pricing",
    impactMetric: "35% pricing alignment",
    impactScore: 6,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Poor alignment between usage and pricing.",
    pillar: y.MONETIZATION,
    emoji: "📊",
    solution: "Implement usage-based pricing model; improve usage analytics."
  },
  // Engagement Leaks (15 total)
  {
    id: "feature-adoption",
    name: "Feature Adoption",
    impactMetric: "55% feature neglect",
    impactScore: 9,
    responsibleRole: x.PRODUCT_GROWTH,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Low adoption of key product features.",
    pillar: y.ENGAGEMENT,
    emoji: "🎯",
    solution: "Implement feature adoption program; use in-app guidance."
  },
  {
    id: "user-activity",
    name: "User Activity",
    impactMetric: "40% inactive users",
    impactScore: 7,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "High percentage of inactive users post-activation.",
    pillar: y.ENGAGEMENT,
    emoji: "📊",
    solution: "Create re-engagement campaigns; improve activity tracking."
  },
  {
    id: "session-duration",
    name: "Session Duration",
    impactMetric: "30% short sessions",
    impactScore: 5,
    responsibleRole: x.UX_LEAD,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Short average session duration indicating low engagement.",
    pillar: y.ENGAGEMENT,
    emoji: "⏱️",
    solution: "Optimize user flows; add engagement hooks and prompts."
  },
  {
    id: "team-collaboration-engagement",
    name: "Team Collaboration",
    impactMetric: "45% solo usage",
    impactScore: 8,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Limited team collaboration reducing stickiness.",
    pillar: y.ENGAGEMENT,
    emoji: "👥",
    solution: "Improve collaboration features; add team activity feeds."
  },
  {
    id: "mobile-usage",
    name: "Mobile Usage",
    impactMetric: "50% mobile gap",
    impactScore: 9,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Low mobile app engagement compared to desktop.",
    pillar: y.ENGAGEMENT,
    emoji: "📱",
    solution: "Enhance mobile experience; add mobile-specific features."
  },
  {
    id: "notification-engagement",
    name: "Notification Engagement",
    impactMetric: "25% notification CTR",
    impactScore: 4,
    responsibleRole: x.PRODUCT_GROWTH,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Poor engagement with product notifications.",
    pillar: y.ENGAGEMENT,
    emoji: "🔔",
    solution: "Optimize notification strategy; personalize content."
  },
  {
    id: "dashboard-usage",
    name: "Dashboard Usage",
    impactMetric: "35% dashboard engagement",
    impactScore: 6,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Low engagement with product dashboards.",
    pillar: y.ENGAGEMENT,
    emoji: "📊",
    solution: "Improve dashboard relevance; add customization options."
  },
  {
    id: "feature-discovery-engagement",
    name: "Feature Discovery",
    impactMetric: "60% feature blindness",
    impactScore: 10,
    responsibleRole: x.UX_LEAD,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Users missing key features and capabilities.",
    pillar: y.ENGAGEMENT,
    emoji: "🔍",
    solution: "Implement feature discovery program; use contextual hints."
  },
  {
    id: "workflow-integration",
    name: "Workflow Integration",
    impactMetric: "40% workflow gaps",
    impactScore: 7,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Poor integration with user workflows.",
    pillar: y.ENGAGEMENT,
    emoji: "🔄",
    solution: "Improve workflow integration; add automation options."
  },
  {
    id: "content-engagement",
    name: "Content Engagement",
    impactMetric: "30% content interaction",
    impactScore: 5,
    responsibleRole: x.CONTENT,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Low engagement with product content.",
    pillar: y.ENGAGEMENT,
    emoji: "📚",
    solution: "Optimize content strategy; improve content discovery."
  },
  {
    id: "user-feedback",
    name: "User Feedback",
    impactMetric: "20% feedback rate",
    impactScore: 4,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Low user feedback and survey participation.",
    pillar: y.ENGAGEMENT,
    emoji: "💭",
    solution: "Implement feedback program; add incentives for participation."
  },
  {
    id: "community-participation",
    name: "Community Participation",
    impactMetric: "25% community activity",
    impactScore: 4,
    responsibleRole: x.COMMUNITY_MANAGER,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Low participation in product community.",
    pillar: y.ENGAGEMENT,
    emoji: "🤝",
    solution: "Enhance community features; create engagement programs."
  },
  {
    id: "data-visualization",
    name: "Data Visualization",
    impactMetric: "45% viz confusion",
    impactScore: 8,
    responsibleRole: x.UX_LEAD,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Poor engagement with data visualizations.",
    pillar: y.ENGAGEMENT,
    emoji: "📈",
    solution: "Improve data visualization; add interactive features."
  },
  {
    id: "search-usage",
    name: "Search Usage",
    impactMetric: "35% search abandonment",
    impactScore: 6,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Low usage of search functionality.",
    pillar: y.ENGAGEMENT,
    emoji: "🔍",
    solution: "Enhance search experience; improve result relevance."
  },
  {
    id: "feature-stickiness",
    name: "Feature Stickiness",
    impactMetric: "50% feature churn",
    impactScore: 9,
    responsibleRole: x.PRODUCT_GROWTH,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Low repeated usage of key features.",
    pillar: y.ENGAGEMENT,
    emoji: "🔄",
    solution: "Implement feature stickiness program; add usage incentives."
  },
  // Retention Leaks (15 total)
  {
    id: "churn-rate",
    name: "Churn Rate",
    impactMetric: "15% monthly churn",
    impactScore: 10,
    responsibleRole: x.HEAD_OF_GROWTH,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "High customer churn rate affecting growth.",
    pillar: y.RETENTION,
    emoji: "📉",
    solution: "Implement comprehensive churn prevention program."
  },
  {
    id: "usage-drop-off",
    name: "Usage Drop-off",
    impactMetric: "40% usage decline",
    impactScore: 7,
    responsibleRole: x.PRODUCT_GROWTH,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Declining product usage over time.",
    pillar: y.RETENTION,
    emoji: "📊",
    solution: "Create re-engagement campaigns; improve usage tracking."
  },
  {
    id: "customer-success",
    name: "Customer Success",
    impactMetric: "30% success gap",
    impactScore: 5,
    responsibleRole: x.CUSTOMER_SUCCESS,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Inadequate customer success coverage.",
    pillar: y.RETENTION,
    emoji: "🎯",
    solution: "Enhance customer success program; implement health scoring."
  },
  {
    id: "feature-adoption-retention",
    name: "Feature Adoption",
    impactMetric: "50% adoption gap",
    impactScore: 9,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Low adoption of retention-driving features.",
    pillar: y.RETENTION,
    emoji: "⭐",
    solution: "Create feature adoption program; track usage metrics."
  },
  {
    id: "support-experience",
    name: "Support Experience",
    impactMetric: "45% support satisfaction",
    impactScore: 8,
    responsibleRole: x.HEAD_OF_SUPPORT,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Poor support experience affecting retention.",
    pillar: y.RETENTION,
    emoji: "🎮",
    solution: "Improve support processes; enhance self-service options."
  },
  {
    id: "product-education",
    name: "Product Education",
    impactMetric: "35% training completion",
    impactScore: 6,
    responsibleRole: x.CUSTOMER_SUCCESS,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Insufficient product education and training.",
    pillar: y.RETENTION,
    emoji: "📚",
    solution: "Enhance training program; create educational content."
  },
  {
    id: "account-health",
    name: "Account Health",
    impactMetric: "25% at-risk accounts",
    impactScore: 4,
    responsibleRole: x.CUSTOMER_SUCCESS,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Poor visibility into account health.",
    pillar: y.RETENTION,
    emoji: "❤️",
    solution: "Implement health scoring; create intervention program."
  },
  {
    id: "renewal-process",
    name: "Renewal Process",
    impactMetric: "20% renewal friction",
    impactScore: 4,
    responsibleRole: x.BILLING_MANAGER,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Friction in renewal and billing process.",
    pillar: y.RETENTION,
    emoji: "🔄",
    solution: "Streamline renewal process; improve communication."
  },
  {
    id: "value-realization",
    name: "Value Realization",
    impactMetric: "55% value gap",
    impactScore: 9,
    responsibleRole: x.PRODUCT_MARKETING,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Customers not realizing full product value.",
    pillar: y.RETENTION,
    emoji: "💡",
    solution: "Create value realization program; track ROI metrics."
  },
  {
    id: "feature-updates",
    name: "Feature Updates",
    impactMetric: "40% update awareness",
    impactScore: 7,
    responsibleRole: x.PRODUCT_MARKETING,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Poor communication of new features.",
    pillar: y.RETENTION,
    emoji: "📢",
    solution: "Improve feature communication; create update program."
  },
  {
    id: "user-engagement-retention",
    name: "User Engagement",
    impactMetric: "45% engagement drop",
    impactScore: 8,
    responsibleRole: x.PRODUCT_GROWTH,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Declining user engagement over time.",
    pillar: y.RETENTION,
    emoji: "📱",
    solution: "Create engagement program; implement activity tracking."
  },
  {
    id: "technical-issues",
    name: "Technical Issues",
    impactMetric: "30% technical friction",
    impactScore: 5,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Technical issues affecting user experience.",
    pillar: y.RETENTION,
    emoji: "🔧",
    solution: "Implement technical monitoring; improve issue resolution."
  },
  {
    id: "customer-feedback",
    name: "Customer Feedback",
    impactMetric: "25% feedback rate",
    impactScore: 4,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Low customer feedback participation.",
    pillar: y.RETENTION,
    emoji: "💭",
    solution: "Enhance feedback program; act on customer input."
  },
  {
    id: "account-reviews",
    name: "Account Reviews",
    impactMetric: "35% review completion",
    impactScore: 6,
    responsibleRole: x.CUSTOMER_SUCCESS,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Inconsistent account review process.",
    pillar: y.RETENTION,
    emoji: "📋",
    solution: "Standardize review process; track outcomes."
  },
  {
    id: "community-engagement-retention",
    name: "Community Engagement",
    impactMetric: "20% community participation",
    impactScore: 4,
    responsibleRole: x.COMMUNITY_MANAGER,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Low engagement in customer community.",
    pillar: y.RETENTION,
    emoji: "🤝",
    solution: "Improve community program; create engagement initiatives."
  },
  // Expansion Leaks (18 total)
  {
    id: "upgrade-path",
    name: "Upgrade Path",
    impactMetric: "45% upgrade friction",
    impactScore: 8,
    responsibleRole: x.PRODUCT_GROWTH,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Unclear or friction-filled upgrade paths.",
    pillar: y.EXPANSION,
    emoji: "⬆️",
    solution: "Optimize upgrade flows; implement upgrade triggers."
  },
  {
    id: "feature-usage",
    name: "Feature Usage",
    impactMetric: "55% feature limit",
    impactScore: 9,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Users hitting feature usage limits.",
    pillar: y.EXPANSION,
    emoji: "📊",
    solution: "Track usage patterns; create upgrade incentives."
  },
  {
    id: "cross-sell",
    name: "Cross-sell",
    impactMetric: "30% cross-sell rate",
    impactScore: 5,
    responsibleRole: x.SALES_ENABLEMENT,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Low cross-sell of additional products.",
    pillar: y.EXPANSION,
    emoji: "🔄",
    solution: "Implement cross-sell program; identify opportunities."
  },
  {
    id: "user-seats",
    name: "User Seats",
    impactMetric: "40% seat utilization",
    impactScore: 7,
    responsibleRole: x.CUSTOMER_SUCCESS,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Underutilization of available user seats.",
    pillar: y.EXPANSION,
    emoji: "👥",
    solution: "Track seat usage; create expansion program."
  },
  {
    id: "storage-usage",
    name: "Storage Usage",
    impactMetric: "65% storage capacity",
    impactScore: 10,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Users approaching storage limits.",
    pillar: y.EXPANSION,
    emoji: "💾",
    solution: "Monitor storage usage; implement upgrade prompts."
  },
  {
    id: "api-usage",
    name: "API Usage",
    impactMetric: "50% API limit",
    impactScore: 9,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "API usage approaching limits.",
    pillar: y.EXPANSION,
    emoji: "🔌",
    solution: "Track API usage; create tier upgrade program."
  },
  {
    id: "team-growth",
    name: "Team Growth",
    impactMetric: "35% team expansion",
    impactScore: 6,
    responsibleRole: x.CUSTOMER_SUCCESS,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Limited team expansion within accounts.",
    pillar: y.EXPANSION,
    emoji: "📈",
    solution: "Monitor team growth; facilitate expansion."
  },
  {
    id: "feature-requests",
    name: "Feature Requests",
    impactMetric: "25% premium interest",
    impactScore: 4,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Unmet demand for premium features.",
    pillar: y.EXPANSION,
    emoji: "✨",
    solution: "Track feature requests; align with premium tiers."
  },
  {
    id: "usage-patterns",
    name: "Usage Patterns",
    impactMetric: "45% power users",
    impactScore: 8,
    responsibleRole: x.PRODUCT_GROWTH,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Untapped power user potential.",
    pillar: y.EXPANSION,
    emoji: "📱",
    solution: "Identify power users; create upgrade paths."
  },
  {
    id: "department-expansion",
    name: "Department Expansion",
    impactMetric: "30% dept coverage",
    impactScore: 5,
    responsibleRole: x.CUSTOMER_SUCCESS,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Limited expansion across departments.",
    pillar: y.EXPANSION,
    emoji: "🏢",
    solution: "Track department usage; facilitate expansion."
  },
  {
    id: "integration-usage",
    name: "Integration Usage",
    impactMetric: "40% integration limit",
    impactScore: 7,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Integration usage hitting limits.",
    pillar: y.EXPANSION,
    emoji: "🔗",
    solution: "Monitor integration usage; create upgrade paths."
  },
  {
    id: "feature-adoption-expansion",
    name: "Feature Adoption",
    impactMetric: "55% premium features",
    impactScore: 9,
    responsibleRole: x.PRODUCT_GROWTH,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Low adoption of premium features.",
    pillar: y.EXPANSION,
    emoji: "🎯",
    solution: "Track feature adoption; create upgrade program."
  },
  {
    id: "usage-analytics",
    name: "Usage Analytics",
    impactMetric: "35% usage insights",
    impactScore: 6,
    responsibleRole: x.ANALYTICS,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Limited visibility into usage patterns.",
    pillar: y.EXPANSION,
    emoji: "📊",
    solution: "Implement usage analytics; identify opportunities."
  },
  {
    id: "account-expansion",
    name: "Account Expansion",
    impactMetric: "25% expansion rate",
    impactScore: 4,
    responsibleRole: x.CUSTOMER_SUCCESS,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Low account expansion rate.",
    pillar: y.EXPANSION,
    emoji: "💼",
    solution: "Create expansion playbook; track opportunities."
  },
  {
    id: "value-metrics",
    name: "Value Metrics",
    impactMetric: "40% value tracking",
    impactScore: 7,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Poor tracking of value metrics.",
    pillar: y.EXPANSION,
    emoji: "📈",
    solution: "Implement value metric tracking; align with pricing."
  },
  {
    id: "enterprise-features",
    name: "Enterprise Features",
    impactMetric: "30% enterprise adoption",
    impactScore: 5,
    responsibleRole: x.PRODUCT_MANAGER,
    difficulty: "Hard",
    timeframe: "2-3 months",
    description: "Low adoption of enterprise features.",
    pillar: y.EXPANSION,
    emoji: "🏢",
    solution: "Create enterprise feature program; track adoption."
  },
  {
    id: "usage-limits",
    name: "Usage Limits",
    impactMetric: "60% limit approach",
    impactScore: 10,
    responsibleRole: x.PRODUCT_GROWTH,
    difficulty: "Medium",
    timeframe: "1-2 months",
    description: "Users approaching usage limits.",
    pillar: y.EXPANSION,
    emoji: "⚡",
    solution: "Monitor usage limits; implement upgrade triggers."
  },
  {
    id: "add-on-adoption",
    name: "Add-on Adoption",
    impactMetric: "35% add-on attach",
    impactScore: 6,
    responsibleRole: x.PRODUCT_MARKETING,
    difficulty: "Easy",
    timeframe: "2-3 weeks",
    description: "Low adoption of product add-ons.",
    pillar: y.EXPANSION,
    emoji: "➕",
    solution: "Create add-on promotion program; track adoption."
  }
], ip = ({
  roles: e,
  selectedRole: t,
  setSelectedRole: n,
  selectedDifficulty: r,
  setSelectedDifficulty: i,
  selectedSeverity: o,
  setSelectedSeverity: l,
  isExpanded: a,
  setIsExpanded: s
}) => {
  const [c, v] = X.useState(!1), h = ["Easy", "Medium", "Hard"], m = ["All", "Critical", "Moderate", "Low"], k = () => r ? h.indexOf(r) : -1, E = () => o ? m.indexOf(o) : 0, C = (g) => {
    const N = parseInt(g.target.value);
    i(N === -1 ? null : h[N]);
  }, L = (g) => {
    const N = parseInt(g.target.value);
    l(N === 0 ? null : m[N]);
  }, d = (g) => {
    t.includes(g) ? n(t.filter((N) => N !== g)) : n([...t, g]);
  }, u = (g) => {
    n(t.filter((N) => N !== g));
  }, f = t.length > 0 || r !== null || o !== null;
  return /* @__PURE__ */ p.jsxs("div", { className: `bg-gray-800 rounded-lg shadow transition-all duration-300 ${a ? "w-80" : "w-16"} sticky top-4`, children: [
    /* @__PURE__ */ p.jsx(
      "button",
      {
        onClick: () => s(!a),
        className: "w-full p-4 flex items-center justify-center text-gray-100 hover:bg-gray-700 transition-colors duration-200",
        children: a ? /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ p.jsx("span", { children: "🔍" }),
          /* @__PURE__ */ p.jsx("span", { children: "Filters" }),
          /* @__PURE__ */ p.jsx("span", { children: "◀" }),
          f && /* @__PURE__ */ p.jsx("span", { className: "px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-full", children: "Active" })
        ] }) : /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ p.jsx("span", { children: "🔍" }),
          /* @__PURE__ */ p.jsx("span", { children: "▶" }),
          f && /* @__PURE__ */ p.jsx("div", { className: "w-3 h-3 bg-blue-600 rounded-full" })
        ] })
      }
    ),
    a && /* @__PURE__ */ p.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ p.jsxs("label", { className: "block text-sm font-medium text-gray-300 mb-2 flex items-center", children: [
          /* @__PURE__ */ p.jsx("span", { children: "👥" }),
          /* @__PURE__ */ p.jsx("span", { className: "ml-1", children: "Responsible Roles" })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-2 mb-2", children: t.map((g) => /* @__PURE__ */ p.jsxs(
          "span",
          {
            className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-100",
            children: [
              g,
              /* @__PURE__ */ p.jsx(
                "button",
                {
                  onClick: () => u(g),
                  className: "ml-1 hover:text-blue-200",
                  children: "×"
                }
              )
            ]
          },
          g
        )) }),
        /* @__PURE__ */ p.jsx(
          "button",
          {
            onClick: () => v(!c),
            className: "w-full px-4 py-2 text-left text-sm border border-gray-700 rounded-md text-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700",
            children: t.length === 0 ? "Select roles..." : `${t.length} roles selected`
          }
        ),
        c && /* @__PURE__ */ p.jsx("div", { className: "absolute z-10 mt-1 w-full bg-gray-800 rounded-md shadow-lg border border-gray-700 max-h-96 overflow-auto", children: e.map((g) => /* @__PURE__ */ p.jsxs(
          "label",
          {
            className: "flex items-center px-3 py-2 hover:bg-gray-700 rounded cursor-pointer",
            children: [
              /* @__PURE__ */ p.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: t.includes(g),
                  onChange: () => d(g),
                  className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                }
              ),
              /* @__PURE__ */ p.jsx("span", { className: "ml-2 text-sm text-gray-300", children: g })
            ]
          },
          g
        )) })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsxs("label", { className: "block text-sm font-medium text-gray-300 mb-2 flex items-center", children: [
            /* @__PURE__ */ p.jsx("span", { children: "⚡" }),
            /* @__PURE__ */ p.jsxs("span", { className: "ml-1", children: [
              "Impact Level: ",
              o || "All"
            ] })
          ] }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "range",
              min: "0",
              max: "3",
              value: E(),
              onChange: L,
              className: "w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: "flex justify-between text-xs text-gray-400 mt-1 px-1", children: m.map((g) => /* @__PURE__ */ p.jsx("span", { children: g }, g)) })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsxs("label", { className: "block text-sm font-medium text-gray-300 mb-2 flex items-center", children: [
            /* @__PURE__ */ p.jsx("span", { children: "🎯" }),
            /* @__PURE__ */ p.jsxs("span", { className: "ml-1", children: [
              "Implementation Difficulty: ",
              r || "All"
            ] })
          ] }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "range",
              min: "-1",
              max: "2",
              value: k(),
              onChange: C,
              className: "w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            }
          ),
          /* @__PURE__ */ p.jsxs("div", { className: "flex justify-between text-xs text-gray-400 mt-1 px-1", children: [
            /* @__PURE__ */ p.jsx("span", { children: "All" }),
            h.map((g) => /* @__PURE__ */ p.jsx("span", { children: g }, g))
          ] })
        ] })
      ] })
    ] })
  ] });
}, op = ({ data: e }) => {
  const [t, n] = X.useState({
    role: !0,
    difficulty: !1,
    timeframe: !1,
    impactScore: !0,
    impactMetric: !1
  });
  return /* @__PURE__ */ p.jsxs("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
    /* @__PURE__ */ p.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-end gap-4", children: [
      /* @__PURE__ */ p.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Show/Hide Columns:" }),
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => n((r) => St(qe({}, r), { impactScore: !r.impactScore })),
          className: `px-3 py-1 rounded text-sm ${t.impactScore ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-600"}`,
          children: "Impact Score"
        }
      ),
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => n((r) => St(qe({}, r), { impactMetric: !r.impactMetric })),
          className: `px-3 py-1 rounded text-sm ${t.impactMetric ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-600"}`,
          children: "Impact Metric"
        }
      ),
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => n((r) => St(qe({}, r), { role: !r.role })),
          className: `px-3 py-1 rounded text-sm ${t.role ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-600"}`,
          children: "Role"
        }
      ),
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => n((r) => St(qe({}, r), { difficulty: !r.difficulty })),
          className: `px-3 py-1 rounded text-sm ${t.difficulty ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-600"}`,
          children: "Difficulty"
        }
      ),
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => n((r) => St(qe({}, r), { timeframe: !r.timeframe })),
          className: `px-3 py-1 rounded text-sm ${t.timeframe ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-600"}`,
          children: "Timeframe"
        }
      )
    ] }) }),
    /* @__PURE__ */ p.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ p.jsxs("table", { className: "w-full", children: [
      /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsxs("tr", { className: "bg-gray-50 border-b border-gray-200", children: [
        /* @__PURE__ */ p.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Leak Name" }),
        t.impactScore && /* @__PURE__ */ p.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Impact" }),
        t.impactMetric && /* @__PURE__ */ p.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Metric" }),
        t.role && /* @__PURE__ */ p.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Role" }),
        t.difficulty && /* @__PURE__ */ p.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Difficulty" }),
        t.timeframe && /* @__PURE__ */ p.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Timeframe" }),
        /* @__PURE__ */ p.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ p.jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: e.map((r) => /* @__PURE__ */ p.jsxs("tr", { className: "hover:bg-gray-50", children: [
        /* @__PURE__ */ p.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ p.jsx("span", { className: "text-xl mr-2", children: r.emoji }),
          /* @__PURE__ */ p.jsxs("div", { children: [
            /* @__PURE__ */ p.jsx("div", { className: "text-sm font-medium text-gray-900", children: r.name }),
            /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500", children: r.description })
          ] })
        ] }) }),
        t.impactScore && /* @__PURE__ */ p.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ p.jsx("div", { className: `w-3 h-3 rounded-full mr-2 ${r.impactScore >= 8 ? "bg-red-500" : r.impactScore >= 5 ? "bg-amber-500" : "bg-green-500"}` }),
          /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ p.jsx("span", { className: "text-xs font-medium text-gray-500", children: "Impact" }),
            /* @__PURE__ */ p.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ p.jsxs("span", { className: "text-sm font-bold mr-2", children: [
                r.impactScore,
                "/10"
              ] }),
              /* @__PURE__ */ p.jsx("span", { className: `text-xs px-2 py-0.5 rounded-full ${r.impactScore >= 8 ? "bg-red-100 text-red-800" : r.impactScore >= 5 ? "bg-amber-100 text-amber-800" : "bg-green-100 text-green-800"}`, children: r.impactScore >= 8 ? "Critical" : r.impactScore >= 5 ? "Moderate" : "Low" })
            ] })
          ] })
        ] }) }),
        t.impactMetric && /* @__PURE__ */ p.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ p.jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ p.jsx("span", { className: "font-semibold text-amber-500", children: r.impactMetric.split(" ")[0] }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900", children: " " + r.impactMetric.split(" ").slice(1).join(" ") })
        ] }) }),
        t.role && /* @__PURE__ */ p.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ p.jsxs("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800", children: [
          "👤 ",
          r.responsibleRole
        ] }) }),
        t.difficulty && /* @__PURE__ */ p.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ p.jsxs("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${r.difficulty === "Easy" ? "bg-green-100 text-green-800" : r.difficulty === "Medium" ? "bg-amber-100 text-amber-800" : "bg-red-100 text-red-800"}`, children: [
          "⚡ ",
          r.difficulty
        ] }) }),
        t.timeframe && /* @__PURE__ */ p.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ p.jsxs("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: [
          "⏱️ ",
          r.timeframe
        ] }) }),
        /* @__PURE__ */ p.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ p.jsx("button", { className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", children: "Get Fix Strategy" }) })
      ] }, r.id)) })
    ] }) })
  ] });
}, lp = ({
  customerStage: e,
  showLeaks: t = !0
}) => {
  const [n, r] = X.useState([]), [i, o] = X.useState(null), [l, a] = X.useState(null), [s, c] = X.useState(e || null), [v, h] = X.useState(null), [m, k] = X.useState(!0), [E, C] = X.useState(!0), L = X.useMemo(() => {
    const w = new Set(Nr.map((T) => T.responsibleRole));
    return Array.from(w);
  }, []), d = X.useMemo(() => Object.values(y).reduce((T, I) => (T[I] = Nr.filter((D) => D.pillar === I).length, T), {}), []), u = X.useMemo(() => Nr.length, []), f = {
    [y.AWARENESS]: [
      "40-60% increase in brand visibility",
      "50% improvement in lead quality"
    ],
    [y.ACQUISITION]: [
      "25-45% boost in conversion rates",
      "35% reduction in customer acquisition cost"
    ],
    [y.ACTIVATION]: [
      "60% reduction in time-to-value",
      "40% increase in feature adoption"
    ],
    [y.MONETIZATION]: [
      "40-55% increase in average revenue per account",
      "25% reduction in revenue churn"
    ],
    [y.ENGAGEMENT]: [
      "45% boost in account engagement",
      "35% increase in product stickiness"
    ],
    [y.RETENTION]: [
      "40-60% reduction in churn",
      "55% increase in customer lifetime value"
    ],
    [y.EXPANSION]: [
      "35% increase in expansion revenue",
      "40% improvement in net revenue retention"
    ]
  }, g = X.useMemo(() => Nr.filter((w) => !s || w.pillar === s).filter((w) => n.length === 0 || n.includes(w.responsibleRole)).filter((w) => !i || w.difficulty === i).filter((w) => {
    if (!l) return !0;
    switch (l) {
      case "Critical":
        return w.impactScore >= 8;
      case "Moderate":
        return w.impactScore >= 5 && w.impactScore < 8;
      case "Low":
        return w.impactScore < 5;
      default:
        return !0;
    }
  }), [n, i, l, s]), N = (w) => {
    const T = w.match(/^(\d+(?:-\d+)?%)(.*)/);
    if (!T) return w;
    const [I, D, _] = T;
    return /* @__PURE__ */ p.jsxs("div", { className: "flex items-baseline gap-2", children: [
      /* @__PURE__ */ p.jsx("span", { className: "text-2xl font-bold text-blue-400 whitespace-nowrap", children: D }),
      /* @__PURE__ */ p.jsx("span", { className: "text-gray-300", children: _ })
    ] });
  };
  return t ? /* @__PURE__ */ p.jsx("div", { className: "growth-leaks-library", children: /* @__PURE__ */ p.jsxs("div", { className: "w-full mx-auto py-12", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [
        /* @__PURE__ */ p.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900", children: "Growth Leaks Library" }),
        /* @__PURE__ */ p.jsxs("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800", children: [
          u,
          " total leaks"
        ] })
      ] }),
      /* @__PURE__ */ p.jsx("p", { className: "text-xl text-gray-600", children: "Prioritized leaks to maximize your growth potential" })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "bg-white rounded-xl shadow-sm p-8", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "text-center mb-6", children: [
          /* @__PURE__ */ p.jsx("h3", { className: "text-xl font-semibold text-gray-700", children: "Customer Journey Stage" }),
          /* @__PURE__ */ p.jsx("p", { className: "text-sm text-gray-500", children: "Select a stage to view relevant growth leaks" })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-1 md:grid-cols-7 gap-3", children: Object.values(y).map((w) => /* @__PURE__ */ p.jsxs(
          "button",
          {
            onClick: () => c(w === s ? null : w),
            onMouseEnter: () => h(w),
            onMouseLeave: () => h(null),
            className: `relative p-4 rounded-lg transition-all ${s === w ? "bg-blue-500 text-white shadow-lg transform scale-102 ring-4 ring-blue-200" : "bg-gray-50 text-gray-700 hover:bg-gray-200"}`,
            children: [
              /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ p.jsx("div", { className: `mb-2 flex items-center justify-center w-12 h-12 rounded-full ${s === w ? "bg-white bg-opacity-20" : "bg-gray-100"}`, children: /* @__PURE__ */ p.jsx("div", { className: `text-3xl ${s === w ? "text-white" : "text-blue-500"}`, children: es[w].icon }) }),
                /* @__PURE__ */ p.jsx("div", { className: "font-medium text-sm", children: w }),
                /* @__PURE__ */ p.jsxs("div", { className: `text-xs mt-1 ${s === w ? "text-blue-100" : "text-gray-500"}`, children: [
                  d[w],
                  " Leaks"
                ] })
              ] }),
              (v === w || s === w) && /* @__PURE__ */ p.jsxs("div", { className: "absolute z-10 w-80 p-4 bg-gray-900 text-white text-sm rounded-lg shadow-xl -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full border border-gray-700", children: [
                /* @__PURE__ */ p.jsx("div", { className: "font-semibold mb-3 text-gray-200", children: "Business Impact:" }),
                /* @__PURE__ */ p.jsx("div", { className: "space-y-3", children: f[w].map((T, I) => /* @__PURE__ */ p.jsx("div", { className: "text-left", children: N(T) }, I)) }),
                /* @__PURE__ */ p.jsx("div", { className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-gray-900 rotate-45 border-r border-b border-gray-700" })
              ] })
            ]
          },
          w
        )) })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ p.jsxs(
          "button",
          {
            onClick: () => k(!m),
            className: "w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",
            children: [
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ p.jsx("span", { children: "📊" }),
                /* @__PURE__ */ p.jsx("span", { className: "font-medium text-gray-900", children: "Growth Leaks Analysis" }),
                g.length > 0 && /* @__PURE__ */ p.jsxs("span", { className: "px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: [
                  g.length,
                  " leaks"
                ] })
              ] }),
              m ? /* @__PURE__ */ p.jsx("span", { children: "🔼" }) : /* @__PURE__ */ p.jsx("span", { children: "🔽" })
            ]
          }
        ),
        m && /* @__PURE__ */ p.jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ p.jsx(
            ip,
            {
              roles: L,
              selectedRole: n,
              setSelectedRole: r,
              selectedDifficulty: i,
              setSelectedDifficulty: o,
              selectedSeverity: l,
              setSelectedSeverity: a,
              isExpanded: E,
              setIsExpanded: C
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: "flex-grow", children: g.length > 0 ? /* @__PURE__ */ p.jsx(op, { data: g }) : /* @__PURE__ */ p.jsxs("div", { className: "bg-gray-800 rounded-lg shadow-md p-8 text-center", children: [
            /* @__PURE__ */ p.jsx("span", { className: "text-4xl mb-4 block", children: "📊" }),
            /* @__PURE__ */ p.jsx("h3", { className: "text-xl font-medium text-gray-100 mb-2", children: "No growth leaks match your filters" }),
            /* @__PURE__ */ p.jsx("p", { className: "text-gray-400", children: "Try adjusting your filter criteria to see more results." })
          ] }) })
        ] })
      ] })
    ] })
  ] }) }) : /* @__PURE__ */ p.jsx("div", { className: "growth-leaks-overview", children: /* @__PURE__ */ p.jsxs("div", { className: "w-full mx-auto py-12", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [
        /* @__PURE__ */ p.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900", children: "Growth Leaks Library" }),
        /* @__PURE__ */ p.jsxs("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800", children: [
          u,
          " total leaks"
        ] })
      ] }),
      /* @__PURE__ */ p.jsx("p", { className: "text-xl text-gray-600", children: "Prioritized leaks to maximize your growth potential" })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "bg-white rounded-xl shadow-sm p-8", children: /* @__PURE__ */ p.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ p.jsx("h3", { className: "text-xl font-semibold text-gray-700", children: "Customer Journey Stage" }),
        /* @__PURE__ */ p.jsx("p", { className: "text-sm text-gray-500", children: "Select a stage to view relevant growth leaks" })
      ] }),
      /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-1 md:grid-cols-7 gap-3", children: Object.values(y).map((w) => /* @__PURE__ */ p.jsxs(
        "button",
        {
          onClick: () => c(w === s ? null : w),
          onMouseEnter: () => h(w),
          onMouseLeave: () => h(null),
          className: `relative p-4 rounded-lg transition-all ${s === w ? "bg-blue-500 text-white shadow-lg transform scale-102 ring-4 ring-blue-200" : "bg-gray-50 text-gray-700 hover:bg-gray-200"}`,
          children: [
            /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ p.jsx("div", { className: `mb-2 flex items-center justify-center w-12 h-12 rounded-full ${s === w ? "bg-white bg-opacity-20" : "bg-gray-100"}`, children: /* @__PURE__ */ p.jsx("div", { className: `text-3xl ${s === w ? "text-white" : "text-blue-500"}`, children: es[w].icon }) }),
              /* @__PURE__ */ p.jsx("div", { className: "font-medium text-sm", children: w }),
              /* @__PURE__ */ p.jsxs("div", { className: `text-xs mt-1 ${s === w ? "text-blue-100" : "text-gray-500"}`, children: [
                d[w],
                " Leaks"
              ] })
            ] }),
            (v === w || s === w) && /* @__PURE__ */ p.jsxs("div", { className: "absolute z-10 w-80 p-4 bg-gray-900 text-white text-sm rounded-lg shadow-xl -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full border border-gray-700", children: [
              /* @__PURE__ */ p.jsx("div", { className: "font-semibold mb-3 text-gray-200", children: "Business Impact:" }),
              /* @__PURE__ */ p.jsx("div", { className: "space-y-3", children: f[w].map((T, I) => /* @__PURE__ */ p.jsx("div", { className: "text-left", children: N(T) }, I)) }),
              /* @__PURE__ */ p.jsx("div", { className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-gray-900 rotate-45 border-r border-b border-gray-700" })
            ] })
          ]
        },
        w
      )) })
    ] }) })
  ] }) });
};
class ap extends HTMLElement {
  constructor() {
    super(...arguments);
    Mi(this, "root", null);
    Mi(this, "mountPoint", null);
  }
  static get observedAttributes() {
    return ["customer-stage", "show-leaks"];
  }
  connectedCallback() {
    this.injectStyles(), this.render();
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
  attributeChangedCallback() {
    this.isConnected && this.render();
  }
  injectStyles() {
    if (document.getElementById("growth-leaks-styles"))
      return;
    const n = document.createElement("style");
    n.id = "growth-leaks-styles", n.textContent = `
      /* Tailwind CSS Reset and Base Styles */
      .growth-leaks-library *, .growth-leaks-overview * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      .growth-leaks-library, .growth-leaks-overview {
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        -moz-tab-size: 4;
        tab-size: 4;
        -webkit-font-feature-settings: normal;
        font-feature-settings: normal;
        font-variation-settings: normal;
      }

      /* Container and Layout */
      .container { max-width: 1200px; margin: 0 auto; }
      .mx-auto { margin-left: auto; margin-right: auto; }
      .w-full { width: 100%; }
      .w-16 { width: 4rem; }
      .w-80 { width: 20rem; }
      .w-3 { width: 0.75rem; }
      .w-4 { width: 1rem; }
      .w-5 { width: 1.25rem; }
      .w-12 { width: 3rem; }
      .h-2 { height: 0.5rem; }
      .h-3 { height: 0.75rem; }
      .h-4 { height: 1rem; }
      .h-5 { height: 1.25rem; }
      .h-12 { width: 3rem; }
      .max-w-4xl { max-width: 56rem; }
      .flex { display: flex; }
      .flex-grow { flex-grow: 1; }
      .flex-col { flex-direction: column; }
      .flex-wrap { flex-wrap: wrap; }
      .items-center { align-items: center; }
      .items-start { align-items: flex-start; }
      .items-baseline { align-items: baseline; }
      .justify-center { justify-content: center; }
      .justify-between { justify-content: space-between; }
      .justify-end { justify-content: flex-end; }
      .gap-2 { gap: 0.5rem; }
      .gap-3 { gap: 0.75rem; }
      .gap-4 { gap: 1rem; }
      .gap-6 { gap: 1.5rem; }
      .space-y-3 > * + * { margin-top: 0.75rem; }
      .space-y-4 > * + * { margin-top: 1rem; }
      .space-y-6 > * + * { margin-top: 1.5rem; }

      /* Grid */
      .grid { display: grid; }
      .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }

      /* Padding and Margin */
      .p-4 { padding: 1rem; }
      .p-6 { padding: 1.5rem; }
      .p-8 { padding: 2rem; }
      .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
      .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
      .px-4 { padding-left: 1rem; padding-right: 1rem; }
      .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
      .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
      .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
      .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
      .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
      .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
      .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
      .px-2.5 { padding-left: 0.625rem; padding-right: 0.625rem; }
      .py-0.5 { padding-top: 0.125rem; padding-bottom: 0.125rem; }
      .mb-2 { margin-bottom: 0.5rem; }
      .mb-3 { margin-bottom: 0.75rem; }
      .mb-4 { margin-bottom: 1rem; }
      .mb-6 { margin-bottom: 1.5rem; }
      .mb-8 { margin-bottom: 2rem; }
      .mb-12 { margin-bottom: 3rem; }
      .mr-1 { margin-right: 0.25rem; }
      .mr-2 { margin-right: 0.5rem; }
      .mr-4 { margin-right: 1rem; }
      .ml-1 { margin-left: 0.25rem; }
      .ml-2 { margin-left: 0.5rem; }
      .mt-1 { margin-top: 0.25rem; }
      .mt-6 { margin-top: 1.5rem; }

      /* Typography */
      .text-xs { font-size: 0.75rem; line-height: 1rem; }
      .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
      .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
      .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
      .text-2xl { font-size: 1.5rem; line-height: 2rem; }
      .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
      .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
      .font-medium { font-weight: 500; }
      .font-semibold { font-weight: 600; }
      .font-bold { font-weight: 700; }
      .text-left { text-align: left; }
      .text-center { text-align: center; }
      .uppercase { text-transform: uppercase; }
      .tracking-wider { letter-spacing: 0.05em; }
      .leading-relaxed { line-height: 1.625; }
      .whitespace-nowrap { white-space: nowrap; }

      /* Colors */
      .text-gray-100 { color: rgb(243 244 246); }
      .text-gray-200 { color: rgb(229 231 235); }
      .text-gray-300 { color: rgb(209 213 219); }
      .text-gray-400 { color: rgb(156 163 175); }
      .text-gray-500 { color: rgb(107 114 128); }
      .text-gray-600 { color: rgb(75 85 99); }
      .text-gray-700 { color: rgb(55 65 81); }
      .text-gray-800 { color: rgb(31 41 55); }
      .text-gray-900 { color: rgb(17 24 39); }
      .text-blue-100 { color: rgb(219 234 254); }
      .text-blue-200 { color: rgb(191 219 254); }
      .text-blue-400 { color: rgb(96 165 250); }
      .text-blue-500 { color: rgb(59 130 246); }
      .text-blue-600 { color: rgb(37 99 235); }
      .text-blue-800 { color: rgb(30 64 175); }
      .text-red-800 { color: rgb(153 27 27); }
      .text-amber-500 { color: rgb(245 158 11); }
      .text-amber-600 { color: rgb(217 119 6); }
      .text-amber-800 { color: rgb(146 64 14); }
      .text-green-800 { color: rgb(22 101 52); }
      .text-purple-800 { color: rgb(107 33 168); }
      .text-white { color: rgb(255 255 255); }

      /* Background Colors */
      .bg-white { background-color: rgb(255 255 255); }
      .bg-gray-50 { background-color: rgb(249 250 251); }
      .bg-gray-100 { background-color: rgb(243 244 246); }
      .bg-gray-700 { background-color: rgb(55 65 81); }
      .bg-gray-800 { background-color: rgb(31 41 55); }
      .bg-gray-900 { background-color: rgb(17 24 39); }
      .bg-blue-100 { background-color: rgb(219 234 254); }
      .bg-blue-200 { background-color: rgb(191 219 254); }
      .bg-blue-500 { background-color: rgb(59 130 246); }
      .bg-blue-600 { background-color: rgb(37 99 235); }
      .bg-blue-900 { background-color: rgb(30 58 138); }
      .bg-red-100 { background-color: rgb(254 226 226); }
      .bg-red-500 { background-color: rgb(239 68 68); }
      .bg-amber-100 { background-color: rgb(254 243 199); }
      .bg-amber-500 { background-color: rgb(245 158 11); }
      .bg-green-100 { background-color: rgb(220 252 231); }
      .bg-green-500 { background-color: rgb(34 197 94); }
      .bg-purple-100 { background-color: rgb(243 232 255); }

      /* Background Opacity */
      .bg-opacity-20 { --tw-bg-opacity: 0.2; }

      /* Borders */
      .border { border-width: 1px; }
      .border-b { border-bottom-width: 1px; }
      .border-r { border-right-width: 1px; }
      .border-gray-100 { border-color: rgb(243 244 246); }
      .border-gray-200 { border-color: rgb(229 231 235); }
      .border-gray-700 { border-color: rgb(55 65 81); }
      .border-blue-500 { border-color: rgb(59 130 246); }
      .border-transparent { border-color: transparent; }
      .divide-y > * + * { border-top-width: 1px; }
      .divide-gray-200 > * + * { border-color: rgb(229 231 235); }

      /* Border Radius */
      .rounded { border-radius: 0.25rem; }
      .rounded-md { border-radius: 0.375rem; }
      .rounded-lg { border-radius: 0.5rem; }
      .rounded-xl { border-radius: 0.75rem; }
      .rounded-full { border-radius: 9999px; }

      /* Shadows */
      .shadow { box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); }
      .shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
      .shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
      .shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }
      .shadow-xl { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); }

      /* Ring */
      .ring-4 { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }
      .ring-blue-200 { --tw-ring-color: rgb(191 219 254); }

      /* Position */
      .relative { position: relative; }
      .absolute { position: absolute; }
      .sticky { position: sticky; }
      .top-4 { top: 1rem; }
      .bottom-0 { bottom: 0px; }
      .left-1/2 { left: 50%; }
      .-top-2 { top: -0.5rem; }
      .z-10 { z-index: 10; }

      /* Transform */
      .transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
      .-translate-x-1/2 { --tw-translate-x: -50%; }
      .-translate-y-full { --tw-translate-y: -100%; }
      .translate-y-1/2 { --tw-translate-y: 50%; }
      .scale-102 { --tw-scale-x: 1.02; --tw-scale-y: 1.02; }
      .rotate-45 { --tw-rotate: 45deg; }

      /* Display */
      .block { display: block; }
      .inline-flex { display: inline-flex; }
      .table { display: table; }
      .hidden { display: none; }

      /* Overflow */
      .overflow-hidden { overflow: hidden; }
      .overflow-x-auto { overflow-x: auto; }
      .overflow-auto { overflow: auto; }

      /* Cursor */
      .cursor-pointer { cursor: pointer; }

      /* Transitions */
      .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
      .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
      .duration-200 { transition-duration: 200ms; }
      .duration-300 { transition-duration: 300ms; }

      /* Hover Effects */
      .hover\\:bg-gray-50:hover { background-color: rgb(249 250 251); }
      .hover\\:bg-gray-100:hover { background-color: rgb(243 244 246); }
      .hover\\:bg-gray-200:hover { background-color: rgb(229 231 235); }
      .hover\\:bg-gray-700:hover { background-color: rgb(55 65 81); }
      .hover\\:bg-blue-700:hover { background-color: rgb(29 78 216); }
      .hover\\:border-blue-500:hover { border-color: rgb(59 130 246); }
      .hover\\:text-blue-200:hover { color: rgb(191 219 254); }
      .hover\\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); }

      /* Focus */
      .focus\\:outline-none:focus { outline: 2px solid transparent; outline-offset: 2px; }
      .focus\\:ring-2:focus { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }
      .focus\\:ring-blue-500:focus { --tw-ring-color: rgb(59 130 246); }
      .focus\\:ring-offset-2:focus { --tw-ring-offset-width: 2px; }

      /* Form Elements */
      input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        cursor: pointer;
      }

      input[type="range"]::-webkit-slider-track {
        background: rgb(55 65 81);
        height: 0.5rem;
        border-radius: 0.5rem;
      }

      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        height: 1.25rem;
        width: 1.25rem;
        border-radius: 50%;
        background: rgb(37 99 235);
        cursor: pointer;
      }

      input[type="range"]::-moz-range-track {
        background: rgb(55 65 81);
        height: 0.5rem;
        border-radius: 0.5rem;
        border: none;
      }

      input[type="range"]::-moz-range-thumb {
        height: 1.25rem;
        width: 1.25rem;
        border-radius: 50%;
        background: rgb(37 99 235);
        cursor: pointer;
        border: none;
      }

      input[type="checkbox"] {
        accent-color: rgb(37 99 235);
      }

      /* Responsive */
      @media (min-width: 768px) {
        .md\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .md\\:grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr)); }
      }

      /* Custom Scrollbar */
      .growth-leaks-library ::-webkit-scrollbar,
      .growth-leaks-overview ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      .growth-leaks-library ::-webkit-scrollbar-track,
      .growth-leaks-overview ::-webkit-scrollbar-track {
        background: rgb(243 244 246);
        border-radius: 4px;
      }

      .growth-leaks-library ::-webkit-scrollbar-thumb,
      .growth-leaks-overview ::-webkit-scrollbar-thumb {
        background: rgb(203 213 225);
        border-radius: 4px;
      }

      .growth-leaks-library ::-webkit-scrollbar-thumb:hover,
      .growth-leaks-overview ::-webkit-scrollbar-thumb:hover {
        background: rgb(148 163 184);
      }

      /* Table Specific Styles */
      .growth-leaks-library table {
        border-collapse: collapse;
        width: 100%;
      }

      .growth-leaks-library th,
      .growth-leaks-library td {
        border: none;
      }

      /* Button Styles */
      .growth-leaks-library button {
        border: none;
        background: none;
        cursor: pointer;
        font-family: inherit;
      }

      /* Max Height for Dropdowns */
      .max-h-96 { max-height: 24rem; }
    `, document.head.appendChild(n);
  }
  render() {
    this.root && this.root.unmount(), this.mountPoint || (this.mountPoint = document.createElement("div"), this.appendChild(this.mountPoint));
    const n = this.getAttribute("customer-stage"), r = this.getAttribute("show-leaks") !== "false";
    this.root = pc(this.mountPoint), this.root.render(
      Lc.createElement(lp, {
        customerStage: n,
        showLeaks: r
      })
    );
  }
}
customElements.get("growth-leaks-library") || customElements.define("growth-leaks-library", ap);
export {
  ap as GrowthLeaksLibrary
};
