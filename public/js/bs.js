/* @popperjs/core v2.11.2 - MIT License */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(
        ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).Popper =
          {})
      );
})(this, function (e) {
  "use strict";
  function t(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function n(e) {
    return e instanceof t(e).Element || e instanceof Element;
  }
  function r(e) {
    return e instanceof t(e).HTMLElement || e instanceof HTMLElement;
  }
  function o(e) {
    return (
      "undefined" != typeof ShadowRoot &&
      (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot)
    );
  }
  var i = Math.max,
    a = Math.min,
    s = Math.round;
  function f(e, t) {
    void 0 === t && (t = !1);
    var n = e.getBoundingClientRect(),
      o = 1,
      i = 1;
    if (r(e) && t) {
      var a = e.offsetHeight,
        f = e.offsetWidth;
      f > 0 && (o = s(n.width) / f || 1), a > 0 && (i = s(n.height) / a || 1);
    }
    return {
      width: n.width / o,
      height: n.height / i,
      top: n.top / i,
      right: n.right / o,
      bottom: n.bottom / i,
      left: n.left / o,
      x: n.left / o,
      y: n.top / i,
    };
  }
  function c(e) {
    var n = t(e);
    return { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset };
  }
  function p(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function u(e) {
    return (
      (n(e) ? e.ownerDocument : e.document) || window.document
    ).documentElement;
  }
  function l(e) {
    return f(u(e)).left + c(e).scrollLeft;
  }
  function d(e) {
    return t(e).getComputedStyle(e);
  }
  function h(e) {
    var t = d(e),
      n = t.overflow,
      r = t.overflowX,
      o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + r);
  }
  function m(e, n, o) {
    void 0 === o && (o = !1);
    var i,
      a,
      d = r(n),
      m =
        r(n) &&
        (function (e) {
          var t = e.getBoundingClientRect(),
            n = s(t.width) / e.offsetWidth || 1,
            r = s(t.height) / e.offsetHeight || 1;
          return 1 !== n || 1 !== r;
        })(n),
      v = u(n),
      g = f(e, m),
      y = { scrollLeft: 0, scrollTop: 0 },
      b = { x: 0, y: 0 };
    return (
      (d || (!d && !o)) &&
        (("body" !== p(n) || h(v)) &&
          (y =
            (i = n) !== t(i) && r(i)
              ? { scrollLeft: (a = i).scrollLeft, scrollTop: a.scrollTop }
              : c(i)),
        r(n)
          ? (((b = f(n, !0)).x += n.clientLeft), (b.y += n.clientTop))
          : v && (b.x = l(v))),
      {
        x: g.left + y.scrollLeft - b.x,
        y: g.top + y.scrollTop - b.y,
        width: g.width,
        height: g.height,
      }
    );
  }
  function v(e) {
    var t = f(e),
      n = e.offsetWidth,
      r = e.offsetHeight;
    return (
      Math.abs(t.width - n) <= 1 && (n = t.width),
      Math.abs(t.height - r) <= 1 && (r = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
    );
  }
  function g(e) {
    return "html" === p(e)
      ? e
      : e.assignedSlot || e.parentNode || (o(e) ? e.host : null) || u(e);
  }
  function y(e) {
    return ["html", "body", "#document"].indexOf(p(e)) >= 0
      ? e.ownerDocument.body
      : r(e) && h(e)
      ? e
      : y(g(e));
  }
  function b(e, n) {
    var r;
    void 0 === n && (n = []);
    var o = y(e),
      i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
      a = t(o),
      s = i ? [a].concat(a.visualViewport || [], h(o) ? o : []) : o,
      f = n.concat(s);
    return i ? f : f.concat(b(g(s)));
  }
  function x(e) {
    return ["table", "td", "th"].indexOf(p(e)) >= 0;
  }
  function w(e) {
    return r(e) && "fixed" !== d(e).position ? e.offsetParent : null;
  }
  function O(e) {
    for (var n = t(e), o = w(e); o && x(o) && "static" === d(o).position; )
      o = w(o);
    return o &&
      ("html" === p(o) || ("body" === p(o) && "static" === d(o).position))
      ? n
      : o ||
          (function (e) {
            var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              r(e) &&
              "fixed" === d(e).position
            )
              return null;
            for (var n = g(e); r(n) && ["html", "body"].indexOf(p(n)) < 0; ) {
              var o = d(n);
              if (
                "none" !== o.transform ||
                "none" !== o.perspective ||
                "paint" === o.contain ||
                -1 !== ["transform", "perspective"].indexOf(o.willChange) ||
                (t && "filter" === o.willChange) ||
                (t && o.filter && "none" !== o.filter)
              )
                return n;
              n = n.parentNode;
            }
            return null;
          })(e) ||
          n;
  }
  var j = "top",
    E = "bottom",
    D = "right",
    A = "left",
    L = "auto",
    P = [j, E, D, A],
    M = "start",
    k = "end",
    W = "viewport",
    B = "popper",
    H = P.reduce(function (e, t) {
      return e.concat([t + "-" + M, t + "-" + k]);
    }, []),
    T = [].concat(P, [L]).reduce(function (e, t) {
      return e.concat([t, t + "-" + M, t + "-" + k]);
    }, []),
    R = [
      "beforeRead",
      "read",
      "afterRead",
      "beforeMain",
      "main",
      "afterMain",
      "beforeWrite",
      "write",
      "afterWrite",
    ];
  function S(e) {
    var t = new Map(),
      n = new Set(),
      r = [];
    function o(e) {
      n.add(e.name),
        []
          .concat(e.requires || [], e.requiresIfExists || [])
          .forEach(function (e) {
            if (!n.has(e)) {
              var r = t.get(e);
              r && o(r);
            }
          }),
        r.push(e);
    }
    return (
      e.forEach(function (e) {
        t.set(e.name, e);
      }),
      e.forEach(function (e) {
        n.has(e.name) || o(e);
      }),
      r
    );
  }
  function C(e) {
    return e.split("-")[0];
  }
  function q(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && o(n)) {
      var r = t;
      do {
        if (r && e.isSameNode(r)) return !0;
        r = r.parentNode || r.host;
      } while (r);
    }
    return !1;
  }
  function V(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function N(e, r) {
    return r === W
      ? V(
          (function (e) {
            var n = t(e),
              r = u(e),
              o = n.visualViewport,
              i = r.clientWidth,
              a = r.clientHeight,
              s = 0,
              f = 0;
            return (
              o &&
                ((i = o.width),
                (a = o.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((s = o.offsetLeft), (f = o.offsetTop))),
              { width: i, height: a, x: s + l(e), y: f }
            );
          })(e)
        )
      : n(r)
      ? (function (e) {
          var t = f(e);
          return (
            (t.top = t.top + e.clientTop),
            (t.left = t.left + e.clientLeft),
            (t.bottom = t.top + e.clientHeight),
            (t.right = t.left + e.clientWidth),
            (t.width = e.clientWidth),
            (t.height = e.clientHeight),
            (t.x = t.left),
            (t.y = t.top),
            t
          );
        })(r)
      : V(
          (function (e) {
            var t,
              n = u(e),
              r = c(e),
              o = null == (t = e.ownerDocument) ? void 0 : t.body,
              a = i(
                n.scrollWidth,
                n.clientWidth,
                o ? o.scrollWidth : 0,
                o ? o.clientWidth : 0
              ),
              s = i(
                n.scrollHeight,
                n.clientHeight,
                o ? o.scrollHeight : 0,
                o ? o.clientHeight : 0
              ),
              f = -r.scrollLeft + l(e),
              p = -r.scrollTop;
            return (
              "rtl" === d(o || n).direction &&
                (f += i(n.clientWidth, o ? o.clientWidth : 0) - a),
              { width: a, height: s, x: f, y: p }
            );
          })(u(e))
        );
  }
  function I(e, t, o) {
    var s =
        "clippingParents" === t
          ? (function (e) {
              var t = b(g(e)),
                o =
                  ["absolute", "fixed"].indexOf(d(e).position) >= 0 && r(e)
                    ? O(e)
                    : e;
              return n(o)
                ? t.filter(function (e) {
                    return n(e) && q(e, o) && "body" !== p(e);
                  })
                : [];
            })(e)
          : [].concat(t),
      f = [].concat(s, [o]),
      c = f[0],
      u = f.reduce(function (t, n) {
        var r = N(e, n);
        return (
          (t.top = i(r.top, t.top)),
          (t.right = a(r.right, t.right)),
          (t.bottom = a(r.bottom, t.bottom)),
          (t.left = i(r.left, t.left)),
          t
        );
      }, N(e, c));
    return (
      (u.width = u.right - u.left),
      (u.height = u.bottom - u.top),
      (u.x = u.left),
      (u.y = u.top),
      u
    );
  }
  function _(e) {
    return e.split("-")[1];
  }
  function F(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function U(e) {
    var t,
      n = e.reference,
      r = e.element,
      o = e.placement,
      i = o ? C(o) : null,
      a = o ? _(o) : null,
      s = n.x + n.width / 2 - r.width / 2,
      f = n.y + n.height / 2 - r.height / 2;
    switch (i) {
      case j:
        t = { x: s, y: n.y - r.height };
        break;
      case E:
        t = { x: s, y: n.y + n.height };
        break;
      case D:
        t = { x: n.x + n.width, y: f };
        break;
      case A:
        t = { x: n.x - r.width, y: f };
        break;
      default:
        t = { x: n.x, y: n.y };
    }
    var c = i ? F(i) : null;
    if (null != c) {
      var p = "y" === c ? "height" : "width";
      switch (a) {
        case M:
          t[c] = t[c] - (n[p] / 2 - r[p] / 2);
          break;
        case k:
          t[c] = t[c] + (n[p] / 2 - r[p] / 2);
      }
    }
    return t;
  }
  function z(e) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
  }
  function X(e, t) {
    return t.reduce(function (t, n) {
      return (t[n] = e), t;
    }, {});
  }
  function Y(e, t) {
    void 0 === t && (t = {});
    var r = t,
      o = r.placement,
      i = void 0 === o ? e.placement : o,
      a = r.boundary,
      s = void 0 === a ? "clippingParents" : a,
      c = r.rootBoundary,
      p = void 0 === c ? W : c,
      l = r.elementContext,
      d = void 0 === l ? B : l,
      h = r.altBoundary,
      m = void 0 !== h && h,
      v = r.padding,
      g = void 0 === v ? 0 : v,
      y = z("number" != typeof g ? g : X(g, P)),
      b = d === B ? "reference" : B,
      x = e.rects.popper,
      w = e.elements[m ? b : d],
      O = I(n(w) ? w : w.contextElement || u(e.elements.popper), s, p),
      A = f(e.elements.reference),
      L = U({ reference: A, element: x, strategy: "absolute", placement: i }),
      M = V(Object.assign({}, x, L)),
      k = d === B ? M : A,
      H = {
        top: O.top - k.top + y.top,
        bottom: k.bottom - O.bottom + y.bottom,
        left: O.left - k.left + y.left,
        right: k.right - O.right + y.right,
      },
      T = e.modifiersData.offset;
    if (d === B && T) {
      var R = T[i];
      Object.keys(H).forEach(function (e) {
        var t = [D, E].indexOf(e) >= 0 ? 1 : -1,
          n = [j, E].indexOf(e) >= 0 ? "y" : "x";
        H[e] += R[n] * t;
      });
    }
    return H;
  }
  var G = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function J() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function K(e) {
    void 0 === e && (e = {});
    var t = e,
      r = t.defaultModifiers,
      o = void 0 === r ? [] : r,
      i = t.defaultOptions,
      a = void 0 === i ? G : i;
    return function (e, t, r) {
      void 0 === r && (r = a);
      var i,
        s,
        f = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, G, a),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        c = [],
        p = !1,
        u = {
          state: f,
          setOptions: function (r) {
            var i = "function" == typeof r ? r(f.options) : r;
            l(),
              (f.options = Object.assign({}, a, f.options, i)),
              (f.scrollParents = {
                reference: n(e)
                  ? b(e)
                  : e.contextElement
                  ? b(e.contextElement)
                  : [],
                popper: b(t),
              });
            var s,
              p,
              d = (function (e) {
                var t = S(e);
                return R.reduce(function (e, n) {
                  return e.concat(
                    t.filter(function (e) {
                      return e.phase === n;
                    })
                  );
                }, []);
              })(
                ((s = [].concat(o, f.options.modifiers)),
                (p = s.reduce(function (e, t) {
                  var n = e[t.name];
                  return (
                    (e[t.name] = n
                      ? Object.assign({}, n, t, {
                          options: Object.assign({}, n.options, t.options),
                          data: Object.assign({}, n.data, t.data),
                        })
                      : t),
                    e
                  );
                }, {})),
                Object.keys(p).map(function (e) {
                  return p[e];
                }))
              );
            return (
              (f.orderedModifiers = d.filter(function (e) {
                return e.enabled;
              })),
              f.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  n = e.options,
                  r = void 0 === n ? {} : n,
                  o = e.effect;
                if ("function" == typeof o) {
                  var i = o({ state: f, name: t, instance: u, options: r }),
                    a = function () {};
                  c.push(i || a);
                }
              }),
              u.update()
            );
          },
          forceUpdate: function () {
            if (!p) {
              var e = f.elements,
                t = e.reference,
                n = e.popper;
              if (J(t, n)) {
                (f.rects = {
                  reference: m(t, O(n), "fixed" === f.options.strategy),
                  popper: v(n),
                }),
                  (f.reset = !1),
                  (f.placement = f.options.placement),
                  f.orderedModifiers.forEach(function (e) {
                    return (f.modifiersData[e.name] = Object.assign(
                      {},
                      e.data
                    ));
                  });
                for (var r = 0; r < f.orderedModifiers.length; r++)
                  if (!0 !== f.reset) {
                    var o = f.orderedModifiers[r],
                      i = o.fn,
                      a = o.options,
                      s = void 0 === a ? {} : a,
                      c = o.name;
                    "function" == typeof i &&
                      (f =
                        i({ state: f, options: s, name: c, instance: u }) || f);
                  } else (f.reset = !1), (r = -1);
              }
            }
          },
          update:
            ((i = function () {
              return new Promise(function (e) {
                u.forceUpdate(), e(f);
              });
            }),
            function () {
              return (
                s ||
                  (s = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      (s = void 0), e(i());
                    });
                  })),
                s
              );
            }),
          destroy: function () {
            l(), (p = !0);
          },
        };
      if (!J(e, t)) return u;
      function l() {
        c.forEach(function (e) {
          return e();
        }),
          (c = []);
      }
      return (
        u.setOptions(r).then(function (e) {
          !p && r.onFirstUpdate && r.onFirstUpdate(e);
        }),
        u
      );
    };
  }
  var Q = { passive: !0 };
  var Z = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (e) {
      var n = e.state,
        r = e.instance,
        o = e.options,
        i = o.scroll,
        a = void 0 === i || i,
        s = o.resize,
        f = void 0 === s || s,
        c = t(n.elements.popper),
        p = [].concat(n.scrollParents.reference, n.scrollParents.popper);
      return (
        a &&
          p.forEach(function (e) {
            e.addEventListener("scroll", r.update, Q);
          }),
        f && c.addEventListener("resize", r.update, Q),
        function () {
          a &&
            p.forEach(function (e) {
              e.removeEventListener("scroll", r.update, Q);
            }),
            f && c.removeEventListener("resize", r.update, Q);
        }
      );
    },
    data: {},
  };
  var $ = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (e) {
        var t = e.state,
          n = e.name;
        t.modifiersData[n] = U({
          reference: t.rects.reference,
          element: t.rects.popper,
          strategy: "absolute",
          placement: t.placement,
        });
      },
      data: {},
    },
    ee = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function te(e) {
    var n,
      r = e.popper,
      o = e.popperRect,
      i = e.placement,
      a = e.variation,
      f = e.offsets,
      c = e.position,
      p = e.gpuAcceleration,
      l = e.adaptive,
      h = e.roundOffsets,
      m = e.isFixed,
      v = f.x,
      g = void 0 === v ? 0 : v,
      y = f.y,
      b = void 0 === y ? 0 : y,
      x = "function" == typeof h ? h({ x: g, y: b }) : { x: g, y: b };
    (g = x.x), (b = x.y);
    var w = f.hasOwnProperty("x"),
      L = f.hasOwnProperty("y"),
      P = A,
      M = j,
      W = window;
    if (l) {
      var B = O(r),
        H = "clientHeight",
        T = "clientWidth";
      if (
        (B === t(r) &&
          "static" !== d((B = u(r))).position &&
          "absolute" === c &&
          ((H = "scrollHeight"), (T = "scrollWidth")),
        (B = B),
        i === j || ((i === A || i === D) && a === k))
      )
        (M = E),
          (b -=
            (m && W.visualViewport ? W.visualViewport.height : B[H]) -
            o.height),
          (b *= p ? 1 : -1);
      if (i === A || ((i === j || i === E) && a === k))
        (P = D),
          (g -=
            (m && W.visualViewport ? W.visualViewport.width : B[T]) - o.width),
          (g *= p ? 1 : -1);
    }
    var R,
      S = Object.assign({ position: c }, l && ee),
      C =
        !0 === h
          ? (function (e) {
              var t = e.x,
                n = e.y,
                r = window.devicePixelRatio || 1;
              return { x: s(t * r) / r || 0, y: s(n * r) / r || 0 };
            })({ x: g, y: b })
          : { x: g, y: b };
    return (
      (g = C.x),
      (b = C.y),
      p
        ? Object.assign(
            {},
            S,
            (((R = {})[M] = L ? "0" : ""),
            (R[P] = w ? "0" : ""),
            (R.transform =
              (W.devicePixelRatio || 1) <= 1
                ? "translate(" + g + "px, " + b + "px)"
                : "translate3d(" + g + "px, " + b + "px, 0)"),
            R)
          )
        : Object.assign(
            {},
            S,
            (((n = {})[M] = L ? b + "px" : ""),
            (n[P] = w ? g + "px" : ""),
            (n.transform = ""),
            n)
          )
    );
  }
  var ne = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = n.gpuAcceleration,
        o = void 0 === r || r,
        i = n.adaptive,
        a = void 0 === i || i,
        s = n.roundOffsets,
        f = void 0 === s || s,
        c = {
          placement: C(t.placement),
          variation: _(t.placement),
          popper: t.elements.popper,
          popperRect: t.rects.popper,
          gpuAcceleration: o,
          isFixed: "fixed" === t.options.strategy,
        };
      null != t.modifiersData.popperOffsets &&
        (t.styles.popper = Object.assign(
          {},
          t.styles.popper,
          te(
            Object.assign({}, c, {
              offsets: t.modifiersData.popperOffsets,
              position: t.options.strategy,
              adaptive: a,
              roundOffsets: f,
            })
          )
        )),
        null != t.modifiersData.arrow &&
          (t.styles.arrow = Object.assign(
            {},
            t.styles.arrow,
            te(
              Object.assign({}, c, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: f,
              })
            )
          )),
        (t.attributes.popper = Object.assign({}, t.attributes.popper, {
          "data-popper-placement": t.placement,
        }));
    },
    data: {},
  };
  var re = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (e) {
      var t = e.state;
      Object.keys(t.elements).forEach(function (e) {
        var n = t.styles[e] || {},
          o = t.attributes[e] || {},
          i = t.elements[e];
        r(i) &&
          p(i) &&
          (Object.assign(i.style, n),
          Object.keys(o).forEach(function (e) {
            var t = o[e];
            !1 === t
              ? i.removeAttribute(e)
              : i.setAttribute(e, !0 === t ? "" : t);
          }));
      });
    },
    effect: function (e) {
      var t = e.state,
        n = {
          popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(t.elements.popper.style, n.popper),
        (t.styles = n),
        t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function () {
          Object.keys(t.elements).forEach(function (e) {
            var o = t.elements[e],
              i = t.attributes[e] || {},
              a = Object.keys(
                t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
              ).reduce(function (e, t) {
                return (e[t] = ""), e;
              }, {});
            r(o) &&
              p(o) &&
              (Object.assign(o.style, a),
              Object.keys(i).forEach(function (e) {
                o.removeAttribute(e);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  var oe = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          n = e.options,
          r = e.name,
          o = n.offset,
          i = void 0 === o ? [0, 0] : o,
          a = T.reduce(function (e, n) {
            return (
              (e[n] = (function (e, t, n) {
                var r = C(e),
                  o = [A, j].indexOf(r) >= 0 ? -1 : 1,
                  i =
                    "function" == typeof n
                      ? n(Object.assign({}, t, { placement: e }))
                      : n,
                  a = i[0],
                  s = i[1];
                return (
                  (a = a || 0),
                  (s = (s || 0) * o),
                  [A, D].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
                );
              })(n, t.rects, i)),
              e
            );
          }, {}),
          s = a[t.placement],
          f = s.x,
          c = s.y;
        null != t.modifiersData.popperOffsets &&
          ((t.modifiersData.popperOffsets.x += f),
          (t.modifiersData.popperOffsets.y += c)),
          (t.modifiersData[r] = a);
      },
    },
    ie = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function ae(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return ie[e];
    });
  }
  var se = { start: "end", end: "start" };
  function fe(e) {
    return e.replace(/start|end/g, function (e) {
      return se[e];
    });
  }
  function ce(e, t) {
    void 0 === t && (t = {});
    var n = t,
      r = n.placement,
      o = n.boundary,
      i = n.rootBoundary,
      a = n.padding,
      s = n.flipVariations,
      f = n.allowedAutoPlacements,
      c = void 0 === f ? T : f,
      p = _(r),
      u = p
        ? s
          ? H
          : H.filter(function (e) {
              return _(e) === p;
            })
        : P,
      l = u.filter(function (e) {
        return c.indexOf(e) >= 0;
      });
    0 === l.length && (l = u);
    var d = l.reduce(function (t, n) {
      return (
        (t[n] = Y(e, {
          placement: n,
          boundary: o,
          rootBoundary: i,
          padding: a,
        })[C(n)]),
        t
      );
    }, {});
    return Object.keys(d).sort(function (e, t) {
      return d[e] - d[t];
    });
  }
  var pe = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = e.name;
      if (!t.modifiersData[r]._skip) {
        for (
          var o = n.mainAxis,
            i = void 0 === o || o,
            a = n.altAxis,
            s = void 0 === a || a,
            f = n.fallbackPlacements,
            c = n.padding,
            p = n.boundary,
            u = n.rootBoundary,
            l = n.altBoundary,
            d = n.flipVariations,
            h = void 0 === d || d,
            m = n.allowedAutoPlacements,
            v = t.options.placement,
            g = C(v),
            y =
              f ||
              (g === v || !h
                ? [ae(v)]
                : (function (e) {
                    if (C(e) === L) return [];
                    var t = ae(e);
                    return [fe(e), t, fe(t)];
                  })(v)),
            b = [v].concat(y).reduce(function (e, n) {
              return e.concat(
                C(n) === L
                  ? ce(t, {
                      placement: n,
                      boundary: p,
                      rootBoundary: u,
                      padding: c,
                      flipVariations: h,
                      allowedAutoPlacements: m,
                    })
                  : n
              );
            }, []),
            x = t.rects.reference,
            w = t.rects.popper,
            O = new Map(),
            P = !0,
            k = b[0],
            W = 0;
          W < b.length;
          W++
        ) {
          var B = b[W],
            H = C(B),
            T = _(B) === M,
            R = [j, E].indexOf(H) >= 0,
            S = R ? "width" : "height",
            q = Y(t, {
              placement: B,
              boundary: p,
              rootBoundary: u,
              altBoundary: l,
              padding: c,
            }),
            V = R ? (T ? D : A) : T ? E : j;
          x[S] > w[S] && (V = ae(V));
          var N = ae(V),
            I = [];
          if (
            (i && I.push(q[H] <= 0),
            s && I.push(q[V] <= 0, q[N] <= 0),
            I.every(function (e) {
              return e;
            }))
          ) {
            (k = B), (P = !1);
            break;
          }
          O.set(B, I);
        }
        if (P)
          for (
            var F = function (e) {
                var t = b.find(function (t) {
                  var n = O.get(t);
                  if (n)
                    return n.slice(0, e).every(function (e) {
                      return e;
                    });
                });
                if (t) return (k = t), "break";
              },
              U = h ? 3 : 1;
            U > 0;
            U--
          ) {
            if ("break" === F(U)) break;
          }
        t.placement !== k &&
          ((t.modifiersData[r]._skip = !0), (t.placement = k), (t.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function ue(e, t, n) {
    return i(e, a(t, n));
  }
  var le = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = e.name,
        o = n.mainAxis,
        s = void 0 === o || o,
        f = n.altAxis,
        c = void 0 !== f && f,
        p = n.boundary,
        u = n.rootBoundary,
        l = n.altBoundary,
        d = n.padding,
        h = n.tether,
        m = void 0 === h || h,
        g = n.tetherOffset,
        y = void 0 === g ? 0 : g,
        b = Y(t, { boundary: p, rootBoundary: u, padding: d, altBoundary: l }),
        x = C(t.placement),
        w = _(t.placement),
        L = !w,
        P = F(x),
        k = "x" === P ? "y" : "x",
        W = t.modifiersData.popperOffsets,
        B = t.rects.reference,
        H = t.rects.popper,
        T =
          "function" == typeof y
            ? y(Object.assign({}, t.rects, { placement: t.placement }))
            : y,
        R =
          "number" == typeof T
            ? { mainAxis: T, altAxis: T }
            : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
        S = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        q = { x: 0, y: 0 };
      if (W) {
        if (s) {
          var V,
            N = "y" === P ? j : A,
            I = "y" === P ? E : D,
            U = "y" === P ? "height" : "width",
            z = W[P],
            X = z + b[N],
            G = z - b[I],
            J = m ? -H[U] / 2 : 0,
            K = w === M ? B[U] : H[U],
            Q = w === M ? -H[U] : -B[U],
            Z = t.elements.arrow,
            $ = m && Z ? v(Z) : { width: 0, height: 0 },
            ee = t.modifiersData["arrow#persistent"]
              ? t.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            te = ee[N],
            ne = ee[I],
            re = ue(0, B[U], $[U]),
            oe = L
              ? B[U] / 2 - J - re - te - R.mainAxis
              : K - re - te - R.mainAxis,
            ie = L
              ? -B[U] / 2 + J + re + ne + R.mainAxis
              : Q + re + ne + R.mainAxis,
            ae = t.elements.arrow && O(t.elements.arrow),
            se = ae ? ("y" === P ? ae.clientTop || 0 : ae.clientLeft || 0) : 0,
            fe = null != (V = null == S ? void 0 : S[P]) ? V : 0,
            ce = z + ie - fe,
            pe = ue(m ? a(X, z + oe - fe - se) : X, z, m ? i(G, ce) : G);
          (W[P] = pe), (q[P] = pe - z);
        }
        if (c) {
          var le,
            de = "x" === P ? j : A,
            he = "x" === P ? E : D,
            me = W[k],
            ve = "y" === k ? "height" : "width",
            ge = me + b[de],
            ye = me - b[he],
            be = -1 !== [j, A].indexOf(x),
            xe = null != (le = null == S ? void 0 : S[k]) ? le : 0,
            we = be ? ge : me - B[ve] - H[ve] - xe + R.altAxis,
            Oe = be ? me + B[ve] + H[ve] - xe - R.altAxis : ye,
            je =
              m && be
                ? (function (e, t, n) {
                    var r = ue(e, t, n);
                    return r > n ? n : r;
                  })(we, me, Oe)
                : ue(m ? we : ge, me, m ? Oe : ye);
          (W[k] = je), (q[k] = je - me);
        }
        t.modifiersData[r] = q;
      }
    },
    requiresIfExists: ["offset"],
  };
  var de = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t,
        n = e.state,
        r = e.name,
        o = e.options,
        i = n.elements.arrow,
        a = n.modifiersData.popperOffsets,
        s = C(n.placement),
        f = F(s),
        c = [A, D].indexOf(s) >= 0 ? "height" : "width";
      if (i && a) {
        var p = (function (e, t) {
            return z(
              "number" !=
                typeof (e =
                  "function" == typeof e
                    ? e(Object.assign({}, t.rects, { placement: t.placement }))
                    : e)
                ? e
                : X(e, P)
            );
          })(o.padding, n),
          u = v(i),
          l = "y" === f ? j : A,
          d = "y" === f ? E : D,
          h =
            n.rects.reference[c] +
            n.rects.reference[f] -
            a[f] -
            n.rects.popper[c],
          m = a[f] - n.rects.reference[f],
          g = O(i),
          y = g ? ("y" === f ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
          b = h / 2 - m / 2,
          x = p[l],
          w = y - u[c] - p[d],
          L = y / 2 - u[c] / 2 + b,
          M = ue(x, L, w),
          k = f;
        n.modifiersData[r] = (((t = {})[k] = M), (t.centerOffset = M - L), t);
      }
    },
    effect: function (e) {
      var t = e.state,
        n = e.options.element,
        r = void 0 === n ? "[data-popper-arrow]" : n;
      null != r &&
        ("string" != typeof r || (r = t.elements.popper.querySelector(r))) &&
        q(t.elements.popper, r) &&
        (t.elements.arrow = r);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function he(e, t, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    );
  }
  function me(e) {
    return [j, D, E, A].some(function (t) {
      return e[t] >= 0;
    });
  }
  var ve = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (e) {
        var t = e.state,
          n = e.name,
          r = t.rects.reference,
          o = t.rects.popper,
          i = t.modifiersData.preventOverflow,
          a = Y(t, { elementContext: "reference" }),
          s = Y(t, { altBoundary: !0 }),
          f = he(a, r),
          c = he(s, o, i),
          p = me(f),
          u = me(c);
        (t.modifiersData[n] = {
          referenceClippingOffsets: f,
          popperEscapeOffsets: c,
          isReferenceHidden: p,
          hasPopperEscaped: u,
        }),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-reference-hidden": p,
            "data-popper-escaped": u,
          }));
      },
    },
    ge = K({ defaultModifiers: [Z, $, ne, re] }),
    ye = [Z, $, ne, re, oe, pe, le, de, ve],
    be = K({ defaultModifiers: ye });
  (e.applyStyles = re),
    (e.arrow = de),
    (e.computeStyles = ne),
    (e.createPopper = be),
    (e.createPopperLite = ge),
    (e.defaultModifiers = ye),
    (e.detectOverflow = Y),
    (e.eventListeners = Z),
    (e.flip = pe),
    (e.hide = ve),
    (e.offset = oe),
    (e.popperGenerator = K),
    (e.popperOffsets = $),
    (e.preventOverflow = le),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=popper.min.js.map

/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * CUSTOMIZATION-- Removed: -- .trigger(this._element,Jt,{relatedTarget:t}) -- for the team section, focusing on trigger button after close event.
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e(require("@popperjs/core")))
    : "function" == typeof define && define.amd
    ? define(["@popperjs/core"], e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e(t.Popper));
})(this, function (t) {
  "use strict";
  function e(t) {
    if (t && t.__esModule) return t;
    const e = Object.create(null);
    if (t)
      for (const i in t)
        if ("default" !== i) {
          const s = Object.getOwnPropertyDescriptor(t, i);
          Object.defineProperty(
            e,
            i,
            s.get ? s : { enumerable: !0, get: () => t[i] }
          );
        }
    return (e.default = t), Object.freeze(e);
  }
  const i = e(t),
    s = "transitionend",
    n = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (e = i && "#" !== i ? i.trim() : null);
      }
      return e;
    },
    o = (t) => {
      const e = n(t);
      return e && document.querySelector(e) ? e : null;
    },
    r = (t) => {
      const e = n(t);
      return e ? document.querySelector(e) : null;
    },
    a = (t) => {
      t.dispatchEvent(new Event(s));
    },
    l = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    c = (t) =>
      l(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(t)
        : null,
    h = (t, e, i) => {
      Object.keys(i).forEach((s) => {
        const n = i[s],
          o = e[s],
          r =
            o && l(o)
              ? "element"
              : null == (a = o)
              ? `${a}`
              : {}.toString
                  .call(a)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        var a;
        if (!new RegExp(n).test(r))
          throw new TypeError(
            `${t.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`
          );
      });
    },
    d = (t) =>
      !(!l(t) || 0 === t.getClientRects().length) &&
      "visible" === getComputedStyle(t).getPropertyValue("visibility"),
    u = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    g = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? g(t.parentNode)
        : null;
    },
    _ = () => {},
    f = (t) => {
      t.offsetHeight;
    },
    p = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    },
    m = [],
    b = () => "rtl" === document.documentElement.dir,
    v = (t) => {
      var e;
      (e = () => {
        const e = p();
        if (e) {
          const i = t.NAME,
            s = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = s), t.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? (m.length ||
              document.addEventListener("DOMContentLoaded", () => {
                m.forEach((t) => t());
              }),
            m.push(e))
          : e();
    },
    y = (t) => {
      "function" == typeof t && t();
    },
    E = (t, e, i = !0) => {
      if (!i) return void y(t);
      const n =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const s = Number.parseFloat(e),
            n = Number.parseFloat(i);
          return s || n
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(e) + 5;
      let o = !1;
      const r = ({ target: i }) => {
        i === e && ((o = !0), e.removeEventListener(s, r), y(t));
      };
      e.addEventListener(s, r),
        setTimeout(() => {
          o || a(e);
        }, n);
    },
    w = (t, e, i, s) => {
      let n = t.indexOf(e);
      if (-1 === n) return t[!i && s ? t.length - 1 : 0];
      const o = t.length;
      return (
        (n += i ? 1 : -1),
        s && (n = (n + o) % o),
        t[Math.max(0, Math.min(n, o - 1))]
      );
    },
    A = /[^.]*(?=\..*)\.|.*/,
    T = /\..*/,
    C = /::\d+$/,
    k = {};
  let L = 1;
  const S = { mouseenter: "mouseover", mouseleave: "mouseout" },
    O = /^(mouseenter|mouseleave)/i,
    N = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function D(t, e) {
    return (e && `${e}::${L++}`) || t.uidEvent || L++;
  }
  function I(t) {
    const e = D(t);
    return (t.uidEvent = e), (k[e] = k[e] || {}), k[e];
  }
  function P(t, e, i = null) {
    const s = Object.keys(t);
    for (let n = 0, o = s.length; n < o; n++) {
      const o = t[s[n]];
      if (o.originalHandler === e && o.delegationSelector === i) return o;
    }
    return null;
  }
  function x(t, e, i) {
    const s = "string" == typeof e,
      n = s ? i : e;
    let o = H(t);
    return N.has(o) || (o = t), [s, n, o];
  }
  function M(t, e, i, s, n) {
    if ("string" != typeof e || !t) return;
    if ((i || ((i = s), (s = null)), O.test(e))) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      s ? (s = t(s)) : (i = t(i));
    }
    const [o, r, a] = x(e, i, s),
      l = I(t),
      c = l[a] || (l[a] = {}),
      h = P(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && n);
    const d = D(r, e.replace(A, "")),
      u = o
        ? (function (t, e, i) {
            return function s(n) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = n; r && r !== this; r = r.parentNode)
                for (let a = o.length; a--; )
                  if (o[a] === r)
                    return (
                      (n.delegateTarget = r),
                      s.oneOff && $.off(t, n.type, e, i),
                      i.apply(r, [n])
                    );
              return null;
            };
          })(t, i, s)
        : (function (t, e) {
            return function i(s) {
              return (
                (s.delegateTarget = t),
                i.oneOff && $.off(t, s.type, e),
                e.apply(t, [s])
              );
            };
          })(t, i);
    (u.delegationSelector = o ? i : null),
      (u.originalHandler = r),
      (u.oneOff = n),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function j(t, e, i, s, n) {
    const o = P(e[i], s, n);
    o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]);
  }
  function H(t) {
    return (t = t.replace(T, "")), S[t] || t;
  }
  const $ = {
      on(t, e, i, s) {
        M(t, e, i, s, !1);
      },
      one(t, e, i, s) {
        M(t, e, i, s, !0);
      },
      off(t, e, i, s) {
        if ("string" != typeof e || !t) return;
        const [n, o, r] = x(e, i, s),
          a = r !== e,
          l = I(t),
          c = e.startsWith(".");
        if (void 0 !== o) {
          if (!l || !l[r]) return;
          return void j(t, l, r, o, n ? i : null);
        }
        c &&
          Object.keys(l).forEach((i) => {
            !(function (t, e, i, s) {
              const n = e[i] || {};
              Object.keys(n).forEach((o) => {
                if (o.includes(s)) {
                  const s = n[o];
                  j(t, e, i, s.originalHandler, s.delegationSelector);
                }
              });
            })(t, l, i, e.slice(1));
          });
        const h = l[r] || {};
        Object.keys(h).forEach((i) => {
          const s = i.replace(C, "");
          if (!a || e.includes(s)) {
            const e = h[i];
            j(t, l, r, e.originalHandler, e.delegationSelector);
          }
        });
      },
      trigger(t, e, i) {
        if ("string" != typeof e || !t) return null;
        const s = p(),
          n = H(e),
          o = e !== n,
          r = N.has(n);
        let a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
        return (
          o &&
            s &&
            ((a = s.Event(e, i)),
            s(t).trigger(a),
            (l = !a.isPropagationStopped()),
            (c = !a.isImmediatePropagationStopped()),
            (h = a.isDefaultPrevented())),
          r
            ? ((d = document.createEvent("HTMLEvents")), d.initEvent(n, l, !0))
            : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
          void 0 !== i &&
            Object.keys(i).forEach((t) => {
              Object.defineProperty(d, t, { get: () => i[t] });
            }),
          h && d.preventDefault(),
          c && t.dispatchEvent(d),
          d.defaultPrevented && void 0 !== a && a.preventDefault(),
          d
        );
      },
    },
    B = new Map(),
    z = {
      set(t, e, i) {
        B.has(t) || B.set(t, new Map());
        const s = B.get(t);
        s.has(e) || 0 === s.size
          ? s.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(s.keys())[0]
              }.`
            );
      },
      get: (t, e) => (B.has(t) && B.get(t).get(e)) || null,
      remove(t, e) {
        if (!B.has(t)) return;
        const i = B.get(t);
        i.delete(e), 0 === i.size && B.delete(t);
      },
    };
  class R {
    constructor(t) {
      (t = c(t)) &&
        ((this._element = t),
        z.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      z.remove(this._element, this.constructor.DATA_KEY),
        $.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((t) => {
          this[t] = null;
        });
    }
    _queueCallback(t, e, i = !0) {
      E(t, e, i);
    }
    static getInstance(t) {
      return z.get(c(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.1.3";
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  const F = (t, e = "hide") => {
    const i = `click.dismiss${t.EVENT_KEY}`,
      s = t.NAME;
    $.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
      if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), u(this)))
        return;
      const n = r(this) || this.closest(`.${s}`);
      t.getOrCreateInstance(n)[e]();
    });
  };
  class q extends R {
    static get NAME() {
      return "alert";
    }
    close() {
      if ($.trigger(this._element, "close.bs.alert").defaultPrevented) return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(),
        $.trigger(this._element, "closed.bs.alert"),
        this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = q.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  F(q, "close"), v(q);
  const W = '[data-bs-toggle="button"]';
  class U extends R {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = U.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  function K(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : "" === t || "null" === t
          ? null
          : t))
    );
  }
  function V(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  $.on(document, "click.bs.button.data-api", W, (t) => {
    t.preventDefault();
    const e = t.target.closest(W);
    U.getOrCreateInstance(e).toggle();
  }),
    v(U);
  const X = {
      setDataAttribute(t, e, i) {
        t.setAttribute(`data-bs-${V(e)}`, i);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute(`data-bs-${V(e)}`);
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return (
          Object.keys(t.dataset)
            .filter((t) => t.startsWith("bs"))
            .forEach((i) => {
              let s = i.replace(/^bs/, "");
              (s = s.charAt(0).toLowerCase() + s.slice(1, s.length)),
                (e[s] = K(t.dataset[i]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => K(t.getAttribute(`data-bs-${V(e)}`)),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + window.pageYOffset,
          left: e.left + window.pageXOffset,
        };
      },
      position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
    },
    Y = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let s = t.parentNode;
        for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType; )
          s.matches(e) && i.push(s), (s = s.parentNode);
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(", ");
        return this.find(e, t).filter((t) => !u(t) && d(t));
      },
    },
    Q = "carousel",
    G = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    Z = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    J = "next",
    tt = "prev",
    et = "left",
    it = "right",
    st = { ArrowLeft: it, ArrowRight: et },
    nt = "slid.bs.carousel",
    ot = "active",
    rt = ".active.carousel-item";
  class at extends R {
    constructor(t, e) {
      super(t),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(e)),
        (this._indicatorsElement = Y.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return G;
    }
    static get NAME() {
      return Q;
    }
    next() {
      this._slide(J);
    }
    nextWhenVisible() {
      !document.hidden && d(this._element) && this.next();
    }
    prev() {
      this._slide(tt);
    }
    pause(t) {
      t || (this._isPaused = !0),
        Y.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (a(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(t) {
      t || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(t) {
      this._activeElement = Y.findOne(rt, this._element);
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding)
        return void $.one(this._element, nt, () => this.to(t));
      if (e === t) return this.pause(), void this.cycle();
      const i = t > e ? J : tt;
      this._slide(i, this._items[t]);
    }
    _getConfig(t) {
      return (
        (t = {
          ...G,
          ...X.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        h(Q, t, Z),
        t
      );
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0), e && this._slide(e > 0 ? it : et);
    }
    _addEventListeners() {
      this._config.keyboard &&
        $.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          ($.on(this._element, "mouseenter.bs.carousel", (t) => this.pause(t)),
          $.on(this._element, "mouseleave.bs.carousel", (t) => this.cycle(t))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const t = (t) =>
          this._pointerEvent &&
          ("pen" === t.pointerType || "touch" === t.pointerType),
        e = (e) => {
          t(e)
            ? (this.touchStartX = e.clientX)
            : this._pointerEvent || (this.touchStartX = e.touches[0].clientX);
        },
        i = (t) => {
          this.touchDeltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this.touchStartX;
        },
        s = (e) => {
          t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (t) => this.cycle(t),
                500 + this._config.interval
              )));
        };
      Y.find(".carousel-item img", this._element).forEach((t) => {
        $.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
      }),
        this._pointerEvent
          ? ($.on(this._element, "pointerdown.bs.carousel", (t) => e(t)),
            $.on(this._element, "pointerup.bs.carousel", (t) => s(t)),
            this._element.classList.add("pointer-event"))
          : ($.on(this._element, "touchstart.bs.carousel", (t) => e(t)),
            $.on(this._element, "touchmove.bs.carousel", (t) => i(t)),
            $.on(this._element, "touchend.bs.carousel", (t) => s(t)));
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = st[t.key];
      e && (t.preventDefault(), this._slide(e));
    }
    _getItemIndex(t) {
      return (
        (this._items =
          t && t.parentNode ? Y.find(".carousel-item", t.parentNode) : []),
        this._items.indexOf(t)
      );
    }
    _getItemByOrder(t, e) {
      const i = t === J;
      return w(this._items, e, i, this._config.wrap);
    }
    _triggerSlideEvent(t, e) {
      const i = this._getItemIndex(t),
        s = this._getItemIndex(Y.findOne(rt, this._element));
      return $.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: t,
        direction: e,
        from: s,
        to: i,
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = Y.findOne(".active", this._indicatorsElement);
        e.classList.remove(ot), e.removeAttribute("aria-current");
        const i = Y.find("[data-bs-target]", this._indicatorsElement);
        for (let e = 0; e < i.length; e++)
          if (
            Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(t)
          ) {
            i[e].classList.add(ot), i[e].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const t = this._activeElement || Y.findOne(rt, this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = e))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(t, e) {
      const i = this._directionToOrder(t),
        s = Y.findOne(rt, this._element),
        n = this._getItemIndex(s),
        o = e || this._getItemByOrder(i, s),
        r = this._getItemIndex(o),
        a = Boolean(this._interval),
        l = i === J,
        c = l ? "carousel-item-start" : "carousel-item-end",
        h = l ? "carousel-item-next" : "carousel-item-prev",
        d = this._orderToDirection(i);
      if (o && o.classList.contains(ot)) return void (this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(o, d).defaultPrevented) return;
      if (!s || !o) return;
      (this._isSliding = !0),
        a && this.pause(),
        this._setActiveIndicatorElement(o),
        (this._activeElement = o);
      const u = () => {
        $.trigger(this._element, nt, {
          relatedTarget: o,
          direction: d,
          from: n,
          to: r,
        });
      };
      if (this._element.classList.contains("slide")) {
        o.classList.add(h), f(o), s.classList.add(c), o.classList.add(c);
        const t = () => {
          o.classList.remove(c, h),
            o.classList.add(ot),
            s.classList.remove(ot, h, c),
            (this._isSliding = !1),
            setTimeout(u, 0);
        };
        this._queueCallback(t, s, !0);
      } else s.classList.remove(ot), o.classList.add(ot), (this._isSliding = !1), u();
      a && this.cycle();
    }
    _directionToOrder(t) {
      return [it, et].includes(t)
        ? b()
          ? t === et
            ? tt
            : J
          : t === et
          ? J
          : tt
        : t;
    }
    _orderToDirection(t) {
      return [J, tt].includes(t)
        ? b()
          ? t === tt
            ? et
            : it
          : t === tt
          ? it
          : et
        : t;
    }
    static carouselInterface(t, e) {
      const i = at.getOrCreateInstance(t, e);
      let { _config: s } = i;
      "object" == typeof e && (s = { ...s, ...e });
      const n = "string" == typeof e ? e : s.slide;
      if ("number" == typeof e) i.to(e);
      else if ("string" == typeof n) {
        if (void 0 === i[n]) throw new TypeError(`No method named "${n}"`);
        i[n]();
      } else s.interval && s.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function () {
        at.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = r(this);
      if (!e || !e.classList.contains("carousel")) return;
      const i = { ...X.getDataAttributes(e), ...X.getDataAttributes(this) },
        s = this.getAttribute("data-bs-slide-to");
      s && (i.interval = !1),
        at.carouselInterface(e, i),
        s && at.getInstance(e).to(s),
        t.preventDefault();
    }
  }
  $.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    at.dataApiClickHandler
  ),
    $.on(window, "load.bs.carousel.data-api", () => {
      const t = Y.find('[data-bs-ride="carousel"]');
      for (let e = 0, i = t.length; e < i; e++)
        at.carouselInterface(t[e], at.getInstance(t[e]));
    }),
    v(at);
  const lt = "collapse",
    ct = { toggle: !0, parent: null },
    ht = { toggle: "boolean", parent: "(null|element)" },
    dt = "show",
    ut = "collapse",
    gt = "collapsing",
    _t = "collapsed",
    ft = ":scope .collapse .collapse",
    pt = '[data-bs-toggle="collapse"]';
  class mt extends R {
    constructor(t, e) {
      super(t),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(e)),
        (this._triggerArray = []);
      const i = Y.find(pt);
      for (let t = 0, e = i.length; t < e; t++) {
        const e = i[t],
          s = o(e),
          n = Y.find(s).filter((t) => t === this._element);
        null !== s &&
          n.length &&
          ((this._selector = s), this._triggerArray.push(e));
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return ct;
    }
    static get NAME() {
      return lt;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t,
        e = [];
      if (this._config.parent) {
        const t = Y.find(ft, this._config.parent);
        e = Y.find(
          ".collapse.show, .collapse.collapsing",
          this._config.parent
        ).filter((e) => !t.includes(e));
      }
      const i = Y.findOne(this._selector);
      if (e.length) {
        const s = e.find((t) => i !== t);
        if (((t = s ? mt.getInstance(s) : null), t && t._isTransitioning))
          return;
      }
      if ($.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      e.forEach((e) => {
        i !== e && mt.getOrCreateInstance(e, { toggle: !1 }).hide(),
          t || z.set(e, "bs.collapse", null);
      });
      const s = this._getDimension();
      this._element.classList.remove(ut),
        this._element.classList.add(gt),
        (this._element.style[s] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const n = `scroll${s[0].toUpperCase() + s.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(gt),
            this._element.classList.add(ut, dt),
            (this._element.style[s] = ""),
            $.trigger(this._element, "shown.bs.collapse");
        },
        this._element,
        !0
      ),
        (this._element.style[s] = `${this._element[n]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        f(this._element),
        this._element.classList.add(gt),
        this._element.classList.remove(ut, dt);
      const e = this._triggerArray.length;
      for (let t = 0; t < e; t++) {
        const e = this._triggerArray[t],
          i = r(e);
        i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1);
      }
      (this._isTransitioning = !0),
        (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(gt),
              this._element.classList.add(ut),
              $.trigger(this._element, "hidden.bs.collapse");
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(dt);
    }
    _getConfig(t) {
      return (
        ((t = { ...ct, ...X.getDataAttributes(this._element), ...t }).toggle =
          Boolean(t.toggle)),
        (t.parent = c(t.parent)),
        h(lt, t, ht),
        t
      );
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = Y.find(ft, this._config.parent);
      Y.find(pt, this._config.parent)
        .filter((e) => !t.includes(e))
        .forEach((t) => {
          const e = r(t);
          e && this._addAriaAndCollapsedClass([t], this._isShown(e));
        });
    }
    _addAriaAndCollapsedClass(t, e) {
      t.length &&
        t.forEach((t) => {
          e ? t.classList.remove(_t) : t.classList.add(_t),
            t.setAttribute("aria-expanded", e);
        });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = {};
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
        const i = mt.getOrCreateInstance(this, e);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t]();
        }
      });
    }
  }
  $.on(document, "click.bs.collapse.data-api", pt, function (t) {
    ("A" === t.target.tagName ||
      (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
      t.preventDefault();
    const e = o(this);
    Y.find(e).forEach((t) => {
      mt.getOrCreateInstance(t, { toggle: !1 }).toggle();
    });
  }),
    v(mt);
  const bt = "dropdown",
    vt = "Escape",
    yt = "Space",
    Et = "ArrowUp",
    wt = "ArrowDown",
    At = new RegExp("ArrowUp|ArrowDown|Escape"),
    Tt = "click.bs.dropdown.data-api",
    Ct = "keydown.bs.dropdown.data-api",
    kt = "show",
    Lt = '[data-bs-toggle="dropdown"]',
    St = ".dropdown-menu",
    Ot = b() ? "top-end" : "top-start",
    Nt = b() ? "top-start" : "top-end",
    Dt = b() ? "bottom-end" : "bottom-start",
    It = b() ? "bottom-start" : "bottom-end",
    Pt = b() ? "left-start" : "right-start",
    xt = b() ? "right-start" : "left-start",
    Mt = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    jt = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class Ht extends R {
    constructor(t, e) {
      super(t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return Mt;
    }
    static get DefaultType() {
      return jt;
    }
    static get NAME() {
      return bt;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (u(this._element) || this._isShown(this._menu)) return;
      const t = { relatedTarget: this._element };
      if ($.trigger(this._element, "show.bs.dropdown", t).defaultPrevented)
        return;
      const e = Ht.getParentFromElement(this._element);
      this._inNavbar
        ? X.setDataAttribute(this._menu, "popper", "none")
        : this._createPopper(e),
        "ontouchstart" in document.documentElement &&
          !e.closest(".navbar-nav") &&
          []
            .concat(...document.body.children)
            .forEach((t) => $.on(t, "mouseover", _)),
        this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(kt),
        this._element.classList.add(kt),
        $.trigger(this._element, "shown.bs.dropdown", t);
    }
    hide() {
      if (u(this._element) || !this._isShown(this._menu)) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      $.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => $.off(t, "mouseover", _)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove(kt),
        this._element.classList.remove(kt),
        this._element.setAttribute("aria-expanded", "false"),
        X.removeDataAttribute(this._menu, "popper"),
        $.trigger(this._element, "hidden.bs.dropdown", t));
    }
    _getConfig(t) {
      if (
        ((t = {
          ...this.constructor.Default,
          ...X.getDataAttributes(this._element),
          ...t,
        }),
        h(bt, t, this.constructor.DefaultType),
        "object" == typeof t.reference &&
          !l(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
      )
        throw new TypeError(
          `${bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper(t) {
      if (void 0 === i)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let e = this._element;
      "parent" === this._config.reference
        ? (e = t)
        : l(this._config.reference)
        ? (e = c(this._config.reference))
        : "object" == typeof this._config.reference &&
          (e = this._config.reference);
      const s = this._getPopperConfig(),
        n = s.modifiers.find(
          (t) => "applyStyles" === t.name && !1 === t.enabled
        );
      (this._popper = i.createPopper(e, this._menu, s)),
        n && X.setDataAttribute(this._menu, "popper", "static");
    }
    _isShown(t = this._element) {
      return t.classList.contains(kt);
    }
    _getMenuElement() {
      return Y.next(this._element, St)[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return Pt;
      if (t.classList.contains("dropstart")) return xt;
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? Nt : Ot) : e ? It : Dt;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = Y.find(
        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        this._menu
      ).filter(d);
      i.length && w(i, e, t === wt, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ht.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (t && (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)))
        return;
      const e = Y.find(Lt);
      for (let i = 0, s = e.length; i < s; i++) {
        const s = Ht.getInstance(e[i]);
        if (!s || !1 === s._config.autoClose) continue;
        if (!s._isShown()) continue;
        const n = { relatedTarget: s._element };
        if (t) {
          const e = t.composedPath(),
            i = e.includes(s._menu);
          if (
            e.includes(s._element) ||
            ("inside" === s._config.autoClose && !i) ||
            ("outside" === s._config.autoClose && i)
          )
            continue;
          if (
            s._menu.contains(t.target) &&
            (("keyup" === t.type && "Tab" === t.key) ||
              /input|select|option|textarea|form/i.test(t.target.tagName))
          )
            continue;
          "click" === t.type && (n.clickEvent = t);
        }
        s._completeHide(n);
      }
    }
    static getParentFromElement(t) {
      return r(t) || t.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if (
        /input|textarea/i.test(t.target.tagName)
          ? t.key === yt ||
            (t.key !== vt &&
              ((t.key !== wt && t.key !== Et) || t.target.closest(St)))
          : !At.test(t.key)
      )
        return;
      const e = this.classList.contains(kt);
      if (!e && t.key === vt) return;
      if ((t.preventDefault(), t.stopPropagation(), u(this))) return;
      const i = this.matches(Lt) ? this : Y.prev(this, Lt)[0],
        s = Ht.getOrCreateInstance(i);
      if (t.key !== vt)
        return t.key === Et || t.key === wt
          ? (e || s.show(), void s._selectMenuItem(t))
          : void ((e && t.key !== yt) || Ht.clearMenus());
      s.hide();
    }
  }
  $.on(document, Ct, Lt, Ht.dataApiKeydownHandler),
    $.on(document, Ct, St, Ht.dataApiKeydownHandler),
    $.on(document, Tt, Ht.clearMenus),
    $.on(document, "keyup.bs.dropdown.data-api", Ht.clearMenus),
    $.on(document, Tt, Lt, function (t) {
      t.preventDefault(), Ht.getOrCreateInstance(this).toggle();
    }),
    v(Ht);
  const $t = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    Bt = ".sticky-top";
  class zt {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", (e) => e + t),
        this._setElementAttributes($t, "paddingRight", (e) => e + t),
        this._setElementAttributes(Bt, "marginRight", (e) => e - t);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const s = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + s)
          return;
        this._saveInitialAttribute(t, e);
        const n = window.getComputedStyle(t)[e];
        t.style[e] = `${i(Number.parseFloat(n))}px`;
      });
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes($t, "paddingRight"),
        this._resetElementAttributes(Bt, "marginRight");
    }
    _saveInitialAttribute(t, e) {
      const i = t.style[e];
      i && X.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = X.getDataAttribute(t, e);
        void 0 === i
          ? t.style.removeProperty(e)
          : (X.removeDataAttribute(t, e), (t.style[e] = i));
      });
    }
    _applyManipulationCallback(t, e) {
      l(t) ? e(t) : Y.find(t, this._element).forEach(e);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  const Rt = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    Ft = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    },
    qt = "show",
    Wt = "mousedown.bs.backdrop";
  class Ut {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(t) {
      this._config.isVisible
        ? (this._append(),
          this._config.isAnimated && f(this._getElement()),
          this._getElement().classList.add(qt),
          this._emulateAnimation(() => {
            y(t);
          }))
        : y(t);
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(qt),
          this._emulateAnimation(() => {
            this.dispose(), y(t);
          }))
        : y(t);
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _getConfig(t) {
      return (
        ((t = { ...Rt, ...("object" == typeof t ? t : {}) }).rootElement = c(
          t.rootElement
        )),
        h("backdrop", t, Ft),
        t
      );
    }
    _append() {
      this._isAppended ||
        (this._config.rootElement.append(this._getElement()),
        $.on(this._getElement(), Wt, () => {
          y(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        ($.off(this._element, Wt),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _emulateAnimation(t) {
      E(t, this._getElement(), this._config.isAnimated);
    }
  }
  const Kt = { trapElement: null, autofocus: !0 },
    Vt = { trapElement: "element", autofocus: "boolean" },
    Xt = ".bs.focustrap",
    Yt = "backward";
  class Qt {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    activate() {
      const { trapElement: t, autofocus: e } = this._config;
      this._isActive ||
        (e && t.focus(),
        $.off(document, Xt),
        $.on(document, "focusin.bs.focustrap", (t) => this._handleFocusin(t)),
        $.on(document, "keydown.tab.bs.focustrap", (t) =>
          this._handleKeydown(t)
        ),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), $.off(document, Xt));
    }
    _handleFocusin(t) {
      const { target: e } = t,
        { trapElement: i } = this._config;
      if (e === document || e === i || i.contains(e)) return;
      const s = Y.focusableChildren(i);
      0 === s.length
        ? i.focus()
        : this._lastTabNavDirection === Yt
        ? s[s.length - 1].focus()
        : s[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? Yt : "forward");
    }
    _getConfig(t) {
      return (
        (t = { ...Kt, ...("object" == typeof t ? t : {}) }),
        h("focustrap", t, Vt),
        t
      );
    }
  }
  const Gt = "modal",
    Zt = "Escape",
    Jt = { backdrop: !0, keyboard: !0, focus: !0 },
    te = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    },
    ee = "hidden.bs.modal",
    ie = "show.bs.modal",
    se = "resize.bs.modal",
    ne = "click.dismiss.bs.modal",
    oe = "keydown.dismiss.bs.modal",
    re = "mousedown.dismiss.bs.modal",
    ae = "modal-open",
    le = "show",
    ce = "modal-static";
  class he extends R {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._dialog = Y.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new zt());
    }
    static get Default() {
      return Jt;
    }
    static get NAME() {
      return Gt;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        $.defaultPrevented ||
        ((this._isShown = !0),
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(ae),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        $.on(this._dialog, re, () => {
          $.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
            t.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(t)));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      if ($.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = !1;
      const t = this._isAnimated();
      t && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        this._focustrap.deactivate(),
        this._element.classList.remove(le),
        $.off(this._element, ne),
        $.off(this._dialog, re),
        this._queueCallback(() => this._hideModal(), this._element, t);
    }
    dispose() {
      [window, this._dialog].forEach((t) => $.off(t, ".bs.modal")),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new Ut({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new Qt({ trapElement: this._element });
    }
    _getConfig(t) {
      return (
        (t = {
          ...Jt,
          ...X.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        h(Gt, t, te),
        t
      );
    }
    _showElement(t) {
      const e = this._isAnimated(),
        i = Y.findOne(".modal-body", this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        i && (i.scrollTop = 0),
        e && f(this._element),
        this._element.classList.add(le),
        this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(),
              (this._isTransitioning = !1),
              $.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
          },
          this._dialog,
          e
        );
    }
    _setEscapeEvent() {
      this._isShown
        ? $.on(this._element, oe, (t) => {
            this._config.keyboard && t.key === Zt
              ? (t.preventDefault(), this.hide())
              : this._config.keyboard ||
                t.key !== Zt ||
                this._triggerBackdropTransition();
          })
        : $.off(this._element, oe);
    }
    _setResizeEvent() {
      this._isShown
        ? $.on(window, se, () => this._adjustDialog())
        : $.off(window, se);
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(ae),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            $.trigger(this._element, ee);
        });
    }
    _showBackdrop(t) {
      $.on(this._element, ne, (t) => {
        this._ignoreBackdropClick
          ? (this._ignoreBackdropClick = !1)
          : t.target === t.currentTarget &&
            (!0 === this._config.backdrop
              ? this.hide()
              : "static" === this._config.backdrop &&
                this._triggerBackdropTransition());
      }),
        this._backdrop.show(t);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const { classList: t, scrollHeight: e, style: i } = this._element,
        s = e > document.documentElement.clientHeight;
      (!s && "hidden" === i.overflowY) ||
        t.contains(ce) ||
        (s || (i.overflowY = "hidden"),
        t.add(ce),
        this._queueCallback(() => {
          t.remove(ce),
            s ||
              this._queueCallback(() => {
                i.overflowY = "";
              }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      ((!i && t && !b()) || (i && !t && b())) &&
        (this._element.style.paddingLeft = `${e}px`),
        ((i && !t && !b()) || (!i && t && b())) &&
          (this._element.style.paddingRight = `${e}px`);
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = he.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  $.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = r(this);
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        $.one(e, ie, (t) => {
          t.defaultPrevented ||
            $.one(e, ee, () => {
              d(this) && this.focus();
            });
        });
      const i = Y.findOne(".modal.show");
      i && he.getInstance(i).hide(), he.getOrCreateInstance(e).toggle(this);
    }
  ),
    F(he),
    v(he);
  const de = "offcanvas",
    ue = { backdrop: !0, keyboard: !0, scroll: !1 },
    ge = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
    _e = "show",
    fe = ".offcanvas.show",
    pe = "hidden.bs.offcanvas";
  class me extends R {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get NAME() {
      return de;
    }
    static get Default() {
      return ue;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        $.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
          .defaultPrevented ||
        ((this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll || new zt().hide(),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(_e),
        this._queueCallback(
          () => {
            this._config.scroll || this._focustrap.activate(),
              $.trigger(this._element, "shown.bs.offcanvas", {
                relatedTarget: t,
              });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
          (this._focustrap.deactivate(),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.remove(_e),
          this._backdrop.hide(),
          this._queueCallback(
            () => {
              this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._element.style.visibility = "hidden"),
                this._config.scroll || new zt().reset(),
                $.trigger(this._element, pe);
            },
            this._element,
            !0
          )));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...ue,
          ...X.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        h(de, t, ge),
        t
      );
    }
    _initializeBackDrop() {
      return new Ut({
        className: "offcanvas-backdrop",
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _initializeFocusTrap() {
      return new Qt({ trapElement: this._element });
    }
    _addEventListeners() {
      $.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
        this._config.keyboard && "Escape" === t.key && this.hide();
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = me.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  $.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      const e = r(this);
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), u(this)))
        return;
      $.one(e, pe, () => {
        d(this) && this.focus();
      });
      const i = Y.findOne(fe);
      i && i !== e && me.getInstance(i).hide(),
        me.getOrCreateInstance(e).toggle(this);
    }
  ),
    $.on(window, "load.bs.offcanvas.data-api", () =>
      Y.find(fe).forEach((t) => me.getOrCreateInstance(t).show())
    ),
    F(me),
    v(me);
  const be = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    ve = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    ye =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Ee = (t, e) => {
      const i = t.nodeName.toLowerCase();
      if (e.includes(i))
        return (
          !be.has(i) || Boolean(ve.test(t.nodeValue) || ye.test(t.nodeValue))
        );
      const s = e.filter((t) => t instanceof RegExp);
      for (let t = 0, e = s.length; t < e; t++) if (s[t].test(i)) return !0;
      return !1;
    };
  function we(t, e, i) {
    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);
    const s = new window.DOMParser().parseFromString(t, "text/html"),
      n = [].concat(...s.body.querySelectorAll("*"));
    for (let t = 0, i = n.length; t < i; t++) {
      const i = n[t],
        s = i.nodeName.toLowerCase();
      if (!Object.keys(e).includes(s)) {
        i.remove();
        continue;
      }
      const o = [].concat(...i.attributes),
        r = [].concat(e["*"] || [], e[s] || []);
      o.forEach((t) => {
        Ee(t, r) || i.removeAttribute(t.nodeName);
      });
    }
    return s.body.innerHTML;
  }
  const Ae = "tooltip",
    Te = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Ce = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)",
    },
    ke = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: b() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: b() ? "right" : "left",
    },
    Le = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    Se = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    Oe = "fade",
    Ne = "show",
    De = "show",
    Ie = "out",
    Pe = ".tooltip-inner",
    xe = ".modal",
    Me = "hide.bs.modal",
    je = "hover",
    He = "focus";
  class $e extends R {
    constructor(t, e) {
      if (void 0 === i)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return Le;
    }
    static get NAME() {
      return Ae;
    }
    static get Event() {
      return Se;
    }
    static get DefaultType() {
      return Ce;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          (e._activeTrigger.click = !e._activeTrigger.click),
            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains(Ne))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        $.off(this._element.closest(xe), Me, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = $.trigger(this._element, this.constructor.Event.SHOW),
        e = g(this._element),
        s =
          null === e
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : e.contains(this._element);
      if (t.defaultPrevented || !s) return;
      "tooltip" === this.constructor.NAME &&
        this.tip &&
        this.getTitle() !== this.tip.querySelector(Pe).innerHTML &&
        (this._disposePopper(), this.tip.remove(), (this.tip = null));
      const n = this.getTipElement(),
        o = ((t) => {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));
          return t;
        })(this.constructor.NAME);
      n.setAttribute("id", o),
        this._element.setAttribute("aria-describedby", o),
        this._config.animation && n.classList.add(Oe);
      const r =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, n, this._element)
            : this._config.placement,
        a = this._getAttachment(r);
      this._addAttachmentClass(a);
      const { container: l } = this._config;
      z.set(n, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (l.append(n),
          $.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = i.createPopper(
              this._element,
              n,
              this._getPopperConfig(a)
            )),
        n.classList.add(Ne);
      const c = this._resolvePossibleFunction(this._config.customClass);
      c && n.classList.add(...c.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((t) => {
            $.on(t, "mouseover", _);
          });
      const h = this.tip.classList.contains(Oe);
      this._queueCallback(
        () => {
          const t = this._hoverState;
          (this._hoverState = null),
            $.trigger(this._element, this.constructor.Event.SHOWN),
            t === Ie && this._leave(null, this);
        },
        this.tip,
        h
      );
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if (
        $.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      )
        return;
      t.classList.remove(Ne),
        "ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => $.off(t, "mouseover", _)),
        (this._activeTrigger.click = !1),
        (this._activeTrigger.focus = !1),
        (this._activeTrigger.hover = !1);
      const e = this.tip.classList.contains(Oe);
      this._queueCallback(
        () => {
          this._isWithActiveTrigger() ||
            (this._hoverState !== De && t.remove(),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            $.trigger(this._element, this.constructor.Event.HIDDEN),
            this._disposePopper());
        },
        this.tip,
        e
      ),
        (this._hoverState = "");
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      t.innerHTML = this._config.template;
      const e = t.children[0];
      return (
        this.setContent(e), e.classList.remove(Oe, Ne), (this.tip = e), this.tip
      );
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), Pe);
    }
    _sanitizeAndSetContent(t, e, i) {
      const s = Y.findOne(i, t);
      e || !s ? this.setElementContent(s, e) : s.remove();
    }
    setElementContent(t, e) {
      if (null !== t)
        return l(e)
          ? ((e = c(e)),
            void (this._config.html
              ? e.parentNode !== t && ((t.innerHTML = ""), t.append(e))
              : (t.textContent = e.textContent)))
          : void (this._config.html
              ? (this._config.sanitize &&
                  (e = we(e, this._config.allowList, this._config.sanitizeFn)),
                (t.innerHTML = e))
              : (t.textContent = e));
    }
    getTitle() {
      const t =
        this._element.getAttribute("data-bs-original-title") ||
        this._config.title;
      return this._resolvePossibleFunction(t);
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      return (
        e ||
        this.constructor.getOrCreateInstance(
          t.delegateTarget,
          this._getDelegateConfig()
        )
      );
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: (t) => this._handlePopperPlacementChange(t),
          },
        ],
        onFirstUpdate: (t) => {
          t.options.placement !== t.placement &&
            this._handlePopperPlacementChange(t);
        },
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
      );
    }
    _getAttachment(t) {
      return ke[t.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((t) => {
        if ("click" === t)
          $.on(
            this._element,
            this.constructor.Event.CLICK,
            this._config.selector,
            (t) => this.toggle(t)
          );
        else if ("manual" !== t) {
          const e =
              t === je
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            i =
              t === je
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          $.on(this._element, e, this._config.selector, (t) => this._enter(t)),
            $.on(this._element, i, this._config.selector, (t) =>
              this._leave(t)
            );
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        $.on(this._element.closest(xe), Me, this._hideModalHandler),
        this._config.selector
          ? (this._config = {
              ...this._config,
              trigger: "manual",
              selector: "",
            })
          : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"),
        e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) &&
        (this._element.setAttribute("data-bs-original-title", t || ""),
        !t ||
          this._element.getAttribute("aria-label") ||
          this._element.textContent ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("title", ""));
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t && (e._activeTrigger["focusin" === t.type ? He : je] = !0),
        e.getTipElement().classList.contains(Ne) || e._hoverState === De
          ? (e._hoverState = De)
          : (clearTimeout(e._timeout),
            (e._hoverState = De),
            e._config.delay && e._config.delay.show
              ? (e._timeout = setTimeout(() => {
                  e._hoverState === De && e.show();
                }, e._config.delay.show))
              : e.show());
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t &&
          (e._activeTrigger["focusout" === t.type ? He : je] =
            e._element.contains(t.relatedTarget)),
        e._isWithActiveTrigger() ||
          (clearTimeout(e._timeout),
          (e._hoverState = Ie),
          e._config.delay && e._config.delay.hide
            ? (e._timeout = setTimeout(() => {
                e._hoverState === Ie && e.hide();
              }, e._config.delay.hide))
            : e.hide());
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = X.getDataAttributes(this._element);
      return (
        Object.keys(e).forEach((t) => {
          Te.has(t) && delete e[t];
        }),
        ((t = {
          ...this.constructor.Default,
          ...e,
          ...("object" == typeof t && t ? t : {}),
        }).container = !1 === t.container ? document.body : c(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        h(Ae, t, this.constructor.DefaultType),
        t.sanitize && (t.template = we(t.template, t.allowList, t.sanitizeFn)),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config)
        this.constructor.Default[e] !== this._config[e] &&
          (t[e] = this._config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
        i = t.getAttribute("class").match(e);
      null !== i &&
        i.length > 0 &&
        i.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    _getBasicClassPrefix() {
      return "bs-tooltip";
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      e &&
        ((this.tip = e.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = $e.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  v($e);
  const Be = {
      ...$e.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    ze = { ...$e.DefaultType, content: "(string|element|function)" },
    Re = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    };
  class Fe extends $e {
    static get Default() {
      return Be;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return Re;
    }
    static get DefaultType() {
      return ze;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
        this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    _getBasicClassPrefix() {
      return "bs-popover";
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Fe.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  v(Fe);
  const qe = "scrollspy",
    We = { offset: 10, method: "auto", target: "" },
    Ue = { offset: "number", method: "string", target: "(string|element)" },
    Ke = "active",
    Ve = ".nav-link, .list-group-item, .dropdown-item",
    Xe = "position";
  class Ye extends R {
    constructor(t, e) {
      super(t),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(e)),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        $.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return We;
    }
    static get NAME() {
      return qe;
    }
    refresh() {
      const t =
          this._scrollElement === this._scrollElement.window ? "offset" : Xe,
        e = "auto" === this._config.method ? t : this._config.method,
        i = e === Xe ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight()),
        Y.find(Ve, this._config.target)
          .map((t) => {
            const s = o(t),
              n = s ? Y.findOne(s) : null;
            if (n) {
              const t = n.getBoundingClientRect();
              if (t.width || t.height) return [X[e](n).top + i, s];
            }
            return null;
          })
          .filter((t) => t)
          .sort((t, e) => t[0] - e[0])
          .forEach((t) => {
            this._offsets.push(t[0]), this._targets.push(t[1]);
          });
    }
    dispose() {
      $.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
    }
    _getConfig(t) {
      return (
        ((t = {
          ...We,
          ...X.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }).target = c(t.target) || document.documentElement),
        h(qe, t, Ue),
        t
      );
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        i = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return (this._activeTarget = null), void this._clear();
        for (let e = this._offsets.length; e--; )
          this._activeTarget !== this._targets[e] &&
            t >= this._offsets[e] &&
            (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
            this._activate(this._targets[e]);
      }
    }
    _activate(t) {
      (this._activeTarget = t), this._clear();
      const e = Ve.split(",").map(
          (e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`
        ),
        i = Y.findOne(e.join(","), this._config.target);
      i.classList.add(Ke),
        i.classList.contains("dropdown-item")
          ? Y.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(
              Ke
            )
          : Y.parents(i, ".nav, .list-group").forEach((t) => {
              Y.prev(t, ".nav-link, .list-group-item").forEach((t) =>
                t.classList.add(Ke)
              ),
                Y.prev(t, ".nav-item").forEach((t) => {
                  Y.children(t, ".nav-link").forEach((t) =>
                    t.classList.add(Ke)
                  );
                });
            }),
        $.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t,
        });
    }
    _clear() {
      Y.find(Ve, this._config.target)
        .filter((t) => t.classList.contains(Ke))
        .forEach((t) => t.classList.remove(Ke));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ye.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  $.on(window, "load.bs.scrollspy.data-api", () => {
    Y.find('[data-bs-spy="scroll"]').forEach((t) => new Ye(t));
  }),
    v(Ye);
  const Qe = "active",
    Ge = "fade",
    Ze = "show",
    Je = ".active",
    ti = ":scope > li > .active";
  class ei extends R {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains(Qe)
      )
        return;
      let t;
      const e = r(this._element),
        i = this._element.closest(".nav, .list-group");
      if (i) {
        const e = "UL" === i.nodeName || "OL" === i.nodeName ? ti : Je;
        (t = Y.find(e, i)), (t = t[t.length - 1]);
      }
      const s = t
        ? $.trigger(t, "hide.bs.tab", { relatedTarget: this._element })
        : null;
      if (
        $.trigger(this._element, "show.bs.tab", { relatedTarget: t })
          .defaultPrevented ||
        (null !== s && s.defaultPrevented)
      )
        return;
      this._activate(this._element, i);
      const n = () => {
        $.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }),
          $.trigger(this._element, "shown.bs.tab", { relatedTarget: t });
      };
      e ? this._activate(e, e.parentNode, n) : n();
    }
    _activate(t, e, i) {
      const s = (
          !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
            ? Y.children(e, Je)
            : Y.find(ti, e)
        )[0],
        n = i && s && s.classList.contains(Ge),
        o = () => this._transitionComplete(t, s, i);
      s && n ? (s.classList.remove(Ze), this._queueCallback(o, t, !0)) : o();
    }
    _transitionComplete(t, e, i) {
      if (e) {
        e.classList.remove(Qe);
        const t = Y.findOne(":scope > .dropdown-menu .active", e.parentNode);
        t && t.classList.remove(Qe),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !1);
      }
      t.classList.add(Qe),
        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
        f(t),
        t.classList.contains(Ge) && t.classList.add(Ze);
      let s = t.parentNode;
      if (
        (s && "LI" === s.nodeName && (s = s.parentNode),
        s && s.classList.contains("dropdown-menu"))
      ) {
        const e = t.closest(".dropdown");
        e && Y.find(".dropdown-toggle", e).forEach((t) => t.classList.add(Qe)),
          t.setAttribute("aria-expanded", !0);
      }
      i && i();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ei.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  $.on(
    document,
    "click.bs.tab.data-api",
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (t) {
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        u(this) || ei.getOrCreateInstance(this).show();
    }
  ),
    v(ei);
  const ii = "toast",
    si = "hide",
    ni = "show",
    oi = "showing",
    ri = { animation: "boolean", autohide: "boolean", delay: "number" },
    ai = { animation: !0, autohide: !0, delay: 5e3 };
  class li extends R {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return ri;
    }
    static get Default() {
      return ai;
    }
    static get NAME() {
      return ii;
    }
    show() {
      $.trigger(this._element, "show.bs.toast").defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove(si),
        f(this._element),
        this._element.classList.add(ni),
        this._element.classList.add(oi),
        this._queueCallback(
          () => {
            this._element.classList.remove(oi),
              $.trigger(this._element, "shown.bs.toast"),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this._element.classList.contains(ni) &&
        ($.trigger(this._element, "hide.bs.toast").defaultPrevented ||
          (this._element.classList.add(oi),
          this._queueCallback(
            () => {
              this._element.classList.add(si),
                this._element.classList.remove(oi),
                this._element.classList.remove(ni),
                $.trigger(this._element, "hidden.bs.toast");
            },
            this._element,
            this._config.animation
          )));
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains(ni) &&
          this._element.classList.remove(ni),
        super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...ai,
          ...X.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }),
        h(ii, t, this.constructor.DefaultType),
        t
      );
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      $.on(this._element, "mouseover.bs.toast", (t) =>
        this._onInteraction(t, !0)
      ),
        $.on(this._element, "mouseout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        ),
        $.on(this._element, "focusin.bs.toast", (t) =>
          this._onInteraction(t, !0)
        ),
        $.on(this._element, "focusout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = li.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    F(li),
    v(li),
    {
      Alert: q,
      Button: U,
      Carousel: at,
      Collapse: mt,
      Dropdown: Ht,
      Modal: he,
      Offcanvas: me,
      Popover: Fe,
      ScrollSpy: Ye,
      Tab: ei,
      Toast: li,
      Tooltip: $e,
    }
  );
});
//# sourceMappingURL=bootstrap.min.js.map
