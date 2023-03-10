(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [428],
  {
    58875: function (t, e, n) {
      var r;
      !(function () {
        "use strict";
        var i = !(
            "undefined" === typeof window ||
            !window.document ||
            !window.document.createElement
          ),
          o = {
            canUseDOM: i,
            canUseWorkers: "undefined" !== typeof Worker,
            canUseEventListeners:
              i && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: i && !!window.screen,
          };
        void 0 ===
          (r = function () {
            return o;
          }.call(e, n, e, t)) || (t.exports = r);
      })();
    },
    88770: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          BaseNode: function () {
            return A;
          },
          interval: function () {
            return x;
          },
          now: function () {
            return p;
          },
          timeout: function () {
            return S;
          },
          timer: function () {
            return v;
          },
        });
      var r,
        i,
        o = 0,
        s = 0,
        a = 0,
        l = 0,
        u = 0,
        c = 0,
        d =
          "object" === typeof performance && performance.now
            ? performance
            : Date,
        h =
          "object" === typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (t) {
                setTimeout(t, 17);
              };
      function p() {
        return u || (h(f), (u = d.now() + c));
      }
      function f() {
        u = 0;
      }
      function g() {
        this._call = this._time = this._next = null;
      }
      function v(t, e, n) {
        var r = new g();
        return r.restart(t, e, n), r;
      }
      function y() {
        (u = (l = d.now()) + c), (o = s = 0);
        try {
          !(function () {
            p(), ++o;
            for (var t, e = r; e; )
              (t = u - e._time) >= 0 && e._call.call(null, t), (e = e._next);
            --o;
          })();
        } finally {
          (o = 0),
            (function () {
              var t,
                e,
                n = r,
                o = 1 / 0;
              for (; n; )
                n._call
                  ? (o > n._time && (o = n._time), (t = n), (n = n._next))
                  : ((e = n._next),
                    (n._next = null),
                    (n = t ? (t._next = e) : (r = e)));
              (i = t), m(o);
            })(),
            (u = 0);
        }
      }
      function b() {
        var t = d.now(),
          e = t - l;
        e > 1e3 && ((c -= e), (l = t));
      }
      function m(t) {
        o ||
          (s && (s = clearTimeout(s)),
          t - u > 24
            ? (t < 1 / 0 && (s = setTimeout(y, t - d.now() - c)),
              a && (a = clearInterval(a)))
            : (a || ((l = d.now()), (a = setInterval(b, 1e3))), (o = 1), h(y)));
      }
      function S(t, e, n) {
        var r = new g();
        return (
          (e = null == e ? 0 : +e),
          r.restart(
            function (n) {
              r.stop(), t(n + e);
            },
            e,
            n
          ),
          r
        );
      }
      function w(t) {
        return (
          (w =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          w(t)
        );
      }
      g.prototype = v.prototype = {
        constructor: g,
        restart: function (t, e, n) {
          if ("function" !== typeof t)
            throw new TypeError("callback is not a function");
          (n = (null == n ? p() : +n) + (null == e ? 0 : +e)),
            this._next ||
              i === this ||
              (i ? (i._next = this) : (r = this), (i = this)),
            (this._call = t),
            (this._time = n),
            m();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), m());
        },
      };
      var O = 0;
      function T(t, e) {
        for (var n in e) t[n] = e[n];
      }
      var C = {
        delay: 0,
        duration: 250,
        ease: function (t) {
          return +t;
        },
      };
      var M = function t(e) {
        var n = this;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.start = null),
          (this.interrupt = null),
          (this.end = null),
          e.events &&
            Object.keys(e.events).forEach(function (t) {
              if ("function" !== typeof e.events[t])
                throw new Error("Event handlers must be a function");
              n[t] = (function (t) {
                var e = !1;
                return function () {
                  e || ((e = !0), t.call(this));
                };
              })(e.events[t]);
            });
      };
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              E(t, e, n[e]);
            });
        }
        return t;
      }
      function E(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function _(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var A = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.state = e || {});
        }
        var e, n, r;
        return (
          (e = t),
          (n = [
            {
              key: "transition",
              value: function (t) {
                if (Array.isArray(t)) {
                  var e = !0,
                    n = !1,
                    r = void 0;
                  try {
                    for (
                      var i, o = t[Symbol.iterator]();
                      !(e = (i = o.next()).done);
                      e = !0
                    ) {
                      var s = i.value;
                      this.parse(s);
                    }
                  } catch (a) {
                    (n = !0), (r = a);
                  } finally {
                    try {
                      e || null == o.return || o.return();
                    } finally {
                      if (n) throw r;
                    }
                  }
                } else this.parse(t);
              },
            },
            {
              key: "isTransitioning",
              value: function () {
                return !!this.transitionData;
              },
            },
            {
              key: "stopTransitions",
              value: function () {
                var t = this.transitionData;
                t &&
                  Object.keys(t).forEach(function (e) {
                    t[e].timer.stop();
                  });
              },
            },
            {
              key: "setState",
              value: function (t) {
                T(this.state, "function" === typeof t ? t(this.state) : t);
              },
            },
            {
              key: "parse",
              value: function (t) {
                var e = this,
                  n = k({}, t),
                  r = new M(n);
                n.events && delete n.events;
                var i = k({}, C, n.timing || {}, { time: p() });
                n.timing && delete n.timing,
                  Object.keys(n).forEach(function (t) {
                    var o,
                      s,
                      a = [],
                      l = n[t];
                    if ("object" === w((s = l)) && !1 === Array.isArray(s))
                      Object.keys(l).forEach(function (n) {
                        var r = l[n];
                        Array.isArray(r)
                          ? 1 === r.length
                            ? a.push(e.getTween(n, r[0], t))
                            : (e.setState(function (e) {
                                var i, o;
                                return (
                                  ((o = {})[t] = k(
                                    {},
                                    e[t],
                                    (((i = {})[n] = r[0]), i)
                                  )),
                                  o
                                );
                              }),
                              a.push(e.getTween(n, r[1], t)))
                          : "function" === typeof r
                          ? a.push(function () {
                              return function (i) {
                                e.setState(function (e) {
                                  var o, s;
                                  return (
                                    ((s = {})[t] = k(
                                      {},
                                      e[t],
                                      (((o = {})[n] = r(i)), o)
                                    )),
                                    s
                                  );
                                });
                              };
                            })
                          : (e.setState(function (e) {
                              var i, o;
                              return (
                                ((o = {})[t] = k(
                                  {},
                                  e[t],
                                  (((i = {})[n] = r), i)
                                )),
                                o
                              );
                            }),
                            a.push(e.getTween(n, r, t)));
                      });
                    else if (Array.isArray(l))
                      1 === l.length
                        ? a.push(e.getTween(t, l[0], null))
                        : (e.setState((((o = {})[t] = l[0]), o)),
                          a.push(e.getTween(t, l[1], null)));
                    else if ("function" === typeof l)
                      a.push(function () {
                        return function (n) {
                          var r;
                          e.setState((((r = {})[t] = l(n)), r));
                        };
                      });
                    else {
                      var u;
                      e.setState((((u = {})[t] = l), u)),
                        a.push(e.getTween(t, l, null));
                    }
                    e.update({
                      stateKey: t,
                      timing: i,
                      tweens: a,
                      events: r,
                      status: 0,
                    });
                  });
              },
            },
            {
              key: "getTween",
              value: function (t, e, n) {
                var r = this;
                return function () {
                  var i = n ? r.state[n][t] : r.state[t];
                  if (i === e) return null;
                  var o = r.getInterpolator(i, e, t, n);
                  return null === n
                    ? function (e) {
                        var n;
                        r.setState((((n = {})[t] = o(e)), n));
                      }
                    : function (e) {
                        r.setState(function (r) {
                          var i, s;
                          return (
                            ((s = {})[n] = k(
                              {},
                              r[n],
                              (((i = {})[t] = o(e)), i)
                            )),
                            s
                          );
                        });
                      };
                };
              },
            },
            {
              key: "update",
              value: function (t) {
                this.transitionData || (this.transitionData = {}),
                  this.init(++O, t);
              },
            },
            {
              key: "init",
              value: function (t, e) {
                var n = this,
                  r = e.tweens.length,
                  i = new Array(r);
                (this.transitionData[t] = e),
                  (e.timer = v(
                    function (t) {
                      (e.status = 1),
                        e.timer.restart(o, e.timing.delay, e.timing.time),
                        e.timing.delay <= t && o(t - e.timing.delay);
                    },
                    0,
                    e.timing.time
                  ));
                var o = function o(l) {
                    if (1 !== e.status) return a();
                    for (var u in n.transitionData) {
                      var c = n.transitionData[u];
                      if (c.stateKey === e.stateKey) {
                        if (3 === c.status) return S(o);
                        4 === c.status
                          ? ((c.status = 6),
                            c.timer.stop(),
                            c.events.interrupt && c.events.interrupt.call(n),
                            delete n.transitionData[u])
                          : +u < t &&
                            ((c.status = 6),
                            c.timer.stop(),
                            delete n.transitionData[u]);
                      }
                    }
                    if (
                      (S(function () {
                        3 === e.status &&
                          ((e.status = 4),
                          e.timer.restart(s, e.timing.delay, e.timing.time),
                          s(l));
                      }),
                      (e.status = 2),
                      e.events.start && e.events.start.call(n),
                      2 === e.status)
                    ) {
                      e.status = 3;
                      for (var d = -1, h = 0; h < r; ++h) {
                        var p = e.tweens[h]();
                        p && (i[++d] = p);
                      }
                      i.length = d + 1;
                    }
                  },
                  s = function (t) {
                    var r = 1;
                    t < e.timing.duration
                      ? (r = e.timing.ease(t / e.timing.duration))
                      : (e.timer.restart(a), (e.status = 5));
                    for (var o = -1; ++o < i.length; ) i[o](r);
                    5 === e.status &&
                      (e.events.end && e.events.end.call(n), a());
                  },
                  a = function () {
                    for (var r in ((e.status = 6),
                    e.timer.stop(),
                    delete n.transitionData[t],
                    n.transitionData))
                      return;
                    delete n.transitionData;
                  };
              },
            },
          ]) && _(e.prototype, n),
          r && _(e, r),
          t
        );
      })();
      function x(t, e, n) {
        var r = new g(),
          i = e;
        return null == e
          ? (r.restart(t, e, n), r)
          : ((e = +e),
            (n = null == n ? p() : +n),
            r.restart(
              function o(s) {
                (s += i), r.restart(o, (i += e), n), t(s);
              },
              e,
              n
            ),
            r);
      }
    },
    14844: function (t, e, n) {
      "use strict";
      n.d(e, {
        ZP: function () {
          return re;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          easeBack: function () {
            return z;
          },
          easeBackIn: function () {
            return L;
          },
          easeBackInOut: function () {
            return z;
          },
          easeBackOut: function () {
            return H;
          },
          easeBounce: function () {
            return P;
          },
          easeBounceIn: function () {
            return D;
          },
          easeBounceInOut: function () {
            return I;
          },
          easeBounceOut: function () {
            return P;
          },
          easeCircle: function () {
            return j;
          },
          easeCircleIn: function () {
            return A;
          },
          easeCircleInOut: function () {
            return j;
          },
          easeCircleOut: function () {
            return x;
          },
          easeCubic: function () {
            return v;
          },
          easeCubicIn: function () {
            return f;
          },
          easeCubicInOut: function () {
            return v;
          },
          easeCubicOut: function () {
            return g;
          },
          easeElastic: function () {
            return Y;
          },
          easeElasticIn: function () {
            return X;
          },
          easeElasticInOut: function () {
            return F;
          },
          easeElasticOut: function () {
            return Y;
          },
          easeExp: function () {
            return _;
          },
          easeExpIn: function () {
            return k;
          },
          easeExpInOut: function () {
            return _;
          },
          easeExpOut: function () {
            return E;
          },
          easeLinear: function () {
            return c;
          },
          easePoly: function () {
            return m;
          },
          easePolyIn: function () {
            return y;
          },
          easePolyInOut: function () {
            return m;
          },
          easePolyOut: function () {
            return b;
          },
          easeQuad: function () {
            return p;
          },
          easeQuadIn: function () {
            return d;
          },
          easeQuadInOut: function () {
            return p;
          },
          easeQuadOut: function () {
            return h;
          },
          easeSin: function () {
            return C;
          },
          easeSinIn: function () {
            return O;
          },
          easeSinInOut: function () {
            return C;
          },
          easeSinOut: function () {
            return T;
          },
        });
      var i = n(67294),
        o = (n(41102), n(45697)),
        s = n.n(o),
        a = n(58875),
        l = n.n(a),
        u = n(16512);
      function c(t) {
        return +t;
      }
      function d(t) {
        return t * t;
      }
      function h(t) {
        return t * (2 - t);
      }
      function p(t) {
        return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
      }
      function f(t) {
        return t * t * t;
      }
      function g(t) {
        return --t * t * t + 1;
      }
      function v(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
      }
      var y = (function t(e) {
          function n(t) {
            return Math.pow(t, e);
          }
          return (e = +e), (n.exponent = t), n;
        })(3),
        b = (function t(e) {
          function n(t) {
            return 1 - Math.pow(1 - t, e);
          }
          return (e = +e), (n.exponent = t), n;
        })(3),
        m = (function t(e) {
          function n(t) {
            return (
              ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2
            );
          }
          return (e = +e), (n.exponent = t), n;
        })(3),
        S = Math.PI,
        w = S / 2;
      function O(t) {
        return 1 === +t ? 1 : 1 - Math.cos(t * w);
      }
      function T(t) {
        return Math.sin(t * w);
      }
      function C(t) {
        return (1 - Math.cos(S * t)) / 2;
      }
      function M(t) {
        return 1.0009775171065494 * (Math.pow(2, -10 * t) - 0.0009765625);
      }
      function k(t) {
        return M(1 - +t);
      }
      function E(t) {
        return 1 - M(t);
      }
      function _(t) {
        return ((t *= 2) <= 1 ? M(1 - t) : 2 - M(t - 1)) / 2;
      }
      function A(t) {
        return 1 - Math.sqrt(1 - t * t);
      }
      function x(t) {
        return Math.sqrt(1 - --t * t);
      }
      function j(t) {
        return (
          ((t *= 2) <= 1
            ? 1 - Math.sqrt(1 - t * t)
            : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
        );
      }
      var W = 4 / 11,
        N = 7.5625;
      function D(t) {
        return 1 - P(1 - t);
      }
      function P(t) {
        return (t = +t) < W
          ? N * t * t
          : t < 0.7272727272727273
          ? N * (t -= 0.5454545454545454) * t + 0.75
          : t < 0.9090909090909091
          ? N * (t -= 0.8181818181818182) * t + 0.9375
          : N * (t -= 0.9545454545454546) * t + 0.984375;
      }
      function I(t) {
        return ((t *= 2) <= 1 ? 1 - P(1 - t) : P(t - 1) + 1) / 2;
      }
      var R = 1.70158,
        L = (function t(e) {
          function n(t) {
            return (t = +t) * t * (e * (t - 1) + t);
          }
          return (e = +e), (n.overshoot = t), n;
        })(R),
        H = (function t(e) {
          function n(t) {
            return --t * t * ((t + 1) * e + t) + 1;
          }
          return (e = +e), (n.overshoot = t), n;
        })(R),
        z = (function t(e) {
          function n(t) {
            return (
              ((t *= 2) < 1
                ? t * t * ((e + 1) * t - e)
                : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2
            );
          }
          return (e = +e), (n.overshoot = t), n;
        })(R),
        B = 2 * Math.PI,
        X = (function t(e, n) {
          var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= B);
          function i(t) {
            return e * M(-(--t)) * Math.sin((r - t) / n);
          }
          return (
            (i.amplitude = function (e) {
              return t(e, n * B);
            }),
            (i.period = function (n) {
              return t(e, n);
            }),
            i
          );
        })(1, 0.3),
        Y = (function t(e, n) {
          var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= B);
          function i(t) {
            return 1 - e * M((t = +t)) * Math.sin((t + r) / n);
          }
          return (
            (i.amplitude = function (e) {
              return t(e, n * B);
            }),
            (i.period = function (n) {
              return t(e, n);
            }),
            i
          );
        })(1, 0.3),
        F = (function t(e, n) {
          var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= B);
          function i(t) {
            return (
              ((t = 2 * t - 1) < 0
                ? e * M(-t) * Math.sin((r - t) / n)
                : 2 - e * M(t) * Math.sin((r + t) / n)) / 2
            );
          }
          return (
            (i.amplitude = function (e) {
              return t(e, n * B);
            }),
            (i.period = function (n) {
              return t(e, n);
            }),
            i
          );
        })(1, 0.3),
        K = function (t) {
          var e = i.Children.count(t.children),
            n = t.slideWidth * e,
            r = t.cellSpacing * e,
            o = t.vertical ? n + r : t.slideHeight;
          return o > 0 && "current" !== t.heightMode ? o : "auto";
        },
        U = function (t, e) {
          var n = 0;
          switch (e.cellAlign) {
            case "left":
              (n = 0), (n -= e.cellSpacing * t);
              break;
            case "center":
              (n = (e.frameWidth - e.slideWidth) / 2), (n -= e.cellSpacing * t);
              break;
            case "right":
              (n = e.frameWidth - e.slideWidth), (n -= e.cellSpacing * t);
          }
          return n;
        },
        V = function (t) {
          switch (t) {
            case "TopLeft":
            default:
              return { position: "absolute", top: 0, left: 0 };
            case "TopCenter":
              return {
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                WebkitTransform: "translateX(-50%)",
                msTransform: "translateX(-50%)",
              };
            case "TopRight":
              return { position: "absolute", top: 0, right: 0 };
            case "CenterLeft":
              return {
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                WebkitTransform: "translateY(-50%)",
                msTransform: "translateY(-50%)",
              };
            case "CenterCenter":
              return {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                WebkitTransform: "translate(-50%, -50%)",
                msTransform: "translate(-50%, -50%)",
              };
            case "CenterRight":
              return {
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                WebkitTransform: "translateY(-50%)",
                msTransform: "translateY(-50%)",
              };
            case "BottomLeft":
              return { position: "absolute", bottom: 0, left: 0 };
            case "BottomCenter":
              return {
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                WebkitTransform: "translateX(-50%)",
                msTransform: "translateX(-50%)",
              };
            case "BottomRight":
              return { position: "absolute", bottom: 0, right: 0 };
          }
        };
      function q(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Z(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? q(Object(n), !0).forEach(function (e) {
                $(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : q(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function $(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var G = function (t) {
          return {
            border: 0,
            background: "rgba(0,0,0,0.4)",
            color: "white",
            padding: 10,
            textTransform: "uppercase",
            opacity: t && 0.3,
            cursor: t ? "not-allowed" : "pointer",
          };
        },
        Q = function (t) {
          var e = t.defaultControlsConfig,
            n = e.prevButtonClassName,
            r = e.prevButtonStyle,
            o = void 0 === r ? {} : r,
            s = e.prevButtonText,
            a = (0 === t.currentSlide && !t.wrapAround) || 0 === t.slideCount;
          return i.createElement(
            "button",
            {
              className: n,
              style: Z(Z({}, G(a)), o),
              disabled: a,
              onClick: function (e) {
                e.preventDefault(), t.previousSlide();
              },
              "aria-label": "previous",
              type: "button",
            },
            s || "Prev"
          );
        },
        J = function (t) {
          var e = t.cellAlign,
            n = t.cellSpacing,
            r = t.currentSlide,
            o = t.defaultControlsConfig,
            s = t.frameWidth,
            a = t.left,
            l = t.slideCount,
            u = t.slidesToShow,
            c = t.slideWidth,
            d = t.top,
            h = t.vertical,
            p = t.wrapAround,
            f = t.scrollMode,
            g = t.slidesToScroll,
            v = o.nextButtonClassName,
            y = o.nextButtonStyle,
            b = void 0 === y ? {} : y,
            m = o.nextButtonText,
            S = (function (t) {
              var e = t.cellAlign,
                n = t.cellSpacing,
                r = t.currentSlide,
                i = t.frameWidth,
                o = t.positionValue,
                s = t.slideCount,
                a = t.slidesToShow,
                l = t.slideWidth,
                u = t.wrapAround,
                c = t.scrollMode,
                d = t.slidesToScroll,
                h = !1;
              if (!u) {
                var p = U(r, {
                    cellAlign: e,
                    cellSpacing: n,
                    frameWidth: i,
                    slideWidth: l,
                  }),
                  f = o - p,
                  g = l + n,
                  v = -g * s + g * a - ("center" === e ? 2 * p : p);
                h = f < v || Math.abs(f - v) < 0.01;
              }
              return (
                !(
                  (!(r > 0 && r + d >= s) || u || "remainder" !== c) &&
                  0 !== s
                ) || h
              );
            })({
              cellAlign: e,
              cellSpacing: n,
              currentSlide: r,
              frameWidth: s,
              positionValue: h ? d : a,
              slideCount: l,
              slidesToShow: u,
              slideWidth: c,
              wrapAround: p,
              scrollMode: f,
              slidesToScroll: g,
            });
          return i.createElement(
            "button",
            {
              className: v,
              style: Z(Z({}, G(S)), b),
              disabled: S,
              onClick: function (e) {
                e.preventDefault(), t.nextSlide();
              },
              "aria-label": "next",
              type: "button",
            },
            m || "Next"
          );
        },
        tt = function (t) {
          var e = (function (t, e, n, r) {
              var i = [],
                o = t - n,
                s = n % 1 !== 0;
              switch (r) {
                case "center":
                case "right":
                  o += n - 1;
              }
              if (("left" === r && s && (o += n - 1), o < 0)) return [0];
              for (var a = 0 === e ? 1 : e, l = 0; l < o; l += a) i.push(l);
              return (
                "left" !== r || s || (o = t - (t % n || n)),
                i.includes(o) || i.push(o),
                i
              );
            })(t.slideCount, t.slidesToScroll, t.slidesToShow, t.cellAlign),
            n = t.defaultControlsConfig,
            r = n.pagingDotsContainerClassName,
            o = n.pagingDotsClassName,
            s = n.pagingDotsStyle,
            a = void 0 === s ? {} : s;
          return i.createElement(
            "ul",
            {
              className: r,
              style: {
                position: "relative",
                top: -10,
                display: "flex",
                margin: 0,
                padding: 0,
                listStyleType: "none",
              },
            },
            e.map(function (n, r) {
              var s,
                l = t.currentSlide === n;
              return (
                t.currentSlide < n && t.currentSlide > e[r - 1] && (l = !0),
                i.createElement(
                  "li",
                  {
                    key: n,
                    className: l ? "paging-item active" : "paging-item",
                  },
                  i.createElement(
                    "button",
                    {
                      className: o,
                      type: "button",
                      style: Z(
                        Z(
                          {},
                          ((s = l),
                          {
                            cursor: "pointer",
                            opacity: s ? 1 : 0.5,
                            background: "transparent",
                            border: "none",
                            fill: "black",
                          })
                        ),
                        a
                      ),
                      onClick: t.goToSlide.bind(null, n),
                      "aria-label": "slide ".concat(n + 1, " bullet"),
                      "aria-selected": l,
                    },
                    i.createElement(
                      "svg",
                      {
                        className: "paging-dot",
                        width: "6",
                        height: "6",
                        "aria-hidden": "true",
                        focusable: "false",
                      },
                      i.createElement("circle", { cx: "3", cy: "3", r: "3" })
                    )
                  )
                )
              );
            })
          );
        };
      function et(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function nt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? et(Object(n), !0).forEach(function (e) {
                rt(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : et(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function rt(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var it = function (t, e, n) {
          null !== t &&
            "undefined" !== typeof t &&
            (t.addEventListener
              ? t.addEventListener(e, n, !1)
              : t.attachEvent
              ? t.attachEvent("on".concat(e), n)
              : (t["on".concat(e)] = n));
        },
        ot = function (t, e, n) {
          null !== t &&
            "undefined" !== typeof t &&
            (t.removeEventListener
              ? t.removeEventListener(e, n, !1)
              : t.detachEvent
              ? t.detachEvent("on".concat(e), n)
              : (t["on".concat(e)] = null));
        },
        st = function (t, e, n) {
          var r = "";
          return (
            t >= e &&
              t < e + n &&
              ((r = " slide-visible"),
              t === e && (r = r.concat(" slide-current"))),
            r
          );
        },
        at = function (t, e) {
          var n = t.slidesToShow,
            r = t.transitionMode,
            i = {};
          return (
            "fade" === r
              ? e.forEach(function (e) {
                  switch (e) {
                    case "slidesToShow":
                    case "slidesToScroll":
                      i[e] = Math.max(parseInt(n), 1);
                      break;
                    case "cellAlign":
                      i[e] = "left";
                      break;
                    default:
                      i[e] = t[e];
                  }
                })
              : e.forEach(function (e) {
                  i[e] = t[e];
                }),
            i
          );
        },
        lt = function (t, e, n, r, i) {
          var o = t - e,
            s = n - r,
            a = Math.atan2(s, o),
            l = Math.round((180 * a) / Math.PI);
          return (
            l < 0 && (l = 360 - Math.abs(l)),
            (l <= 45 && l >= 0) || (l <= 360 && l >= 315)
              ? 1
              : l >= 135 && l <= 225
              ? -1
              : !0 === i
              ? l >= 35 && l <= 135
                ? 1
                : -1
              : 0
          );
        },
        ut = function (t) {
          var e = at(t, ["slidesToScroll", "slidesToShow", "cellAlign"]),
            n = e.slidesToScroll,
            r = e.slidesToShow,
            i = e.cellAlign,
            o = t.vertical
              ? t.initialSlideHeight || 0
              : t.initialSlideWidth || 0,
            s = t.vertical
              ? (t.initialSlideHeight || 0) * t.slidesToShow
              : t.initialSlideHeight || 0,
            a = s + t.cellSpacing * (r - 1);
          return {
            slideWidth: o,
            slideHeight: s,
            frameWidth: t.vertical ? a : null,
            slidesToScroll: n,
            slidesToShow: r,
            cellAlign: i,
          };
        },
        ct = function (t) {
          t && t.currentTarget && t.currentTarget.focus();
        };
      function dt(t) {
        return (
          (dt =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          dt(t)
        );
      }
      function ht() {
        return (
          (ht =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          ht.apply(this, arguments)
        );
      }
      function pt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function ft(t, e) {
        return (
          (ft =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          ft(t, e)
        );
      }
      function gt(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = bt(t);
          if (e) {
            var i = bt(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return vt(this, n);
        };
      }
      function vt(t, e) {
        return !e || ("object" !== dt(e) && "function" !== typeof e)
          ? yt(t)
          : e;
      }
      function yt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function bt(t) {
        return (
          (bt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          bt(t)
        );
      }
      var mt = (function (t) {
        !(function (t, e) {
          if ("function" !== typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && ft(t, e);
        })(s, t);
        var e,
          n,
          r,
          o = gt(s);
        function s(t) {
          var e;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, s),
            ((e = o.call(this, t)).getListStyles = e.getListStyles.bind(yt(e))),
            e
          );
        }
        return (
          (e = s),
          (n = [
            {
              key: "getSlideTargetPosition",
              value: function (t, e, n, r) {
                var i = 0,
                  o = !0;
                switch (this.props.cellAlign) {
                  case "left":
                    o = !(this.props.children.length <= 2 && 0 !== t);
                    break;
                  case "center":
                    o =
                      this.props.children.length > 2 ||
                      this.props.currentSlide !== t - 1;
                }
                "zoom" === this.props.animation &&
                o &&
                (this.props.currentSlide === t + 1 ||
                  (0 === this.props.currentSlide &&
                    t === this.props.children.length - 1))
                  ? (i = this.props.slideOffset)
                  : "zoom" === this.props.animation &&
                    (this.props.currentSlide === t - 1 ||
                      (this.props.currentSlide ===
                        this.props.children.length - 1 &&
                        0 === t)) &&
                    (i = -this.props.slideOffset);
                var s = (this.props.slideWidth + this.props.cellSpacing) * t,
                  a = U(t, this.props),
                  l = e - a,
                  u = Math.min(
                    Math.abs(Math.floor(l / this.props.slideWidth)),
                    this.props.slideCount - 1
                  );
                if (this.props.wrapAround && t !== u) {
                  var c = Math.max(
                      this.props.slideCount -
                        Math.ceil(
                          this.props.frameWidth / this.props.slideWidth
                        ),
                      0
                    ),
                    d = Math.floor(c / 2),
                    h = c - d;
                  if (
                    (function (t, e, n) {
                      var r = 0;
                      return t === e
                        ? r
                        : (r = n ? (t < e ? -1 : 1) : t < e ? 1 : -1);
                    })(
                      u,
                      this.props.currentSlide,
                      this.props.isWrappingAround
                    ) < 0
                  ) {
                    var p = d;
                    (d = h), (h = p);
                  }
                  var f = Math.ceil(a / this.props.slideWidth) + d,
                    g =
                      Math.ceil(
                        (this.props.frameWidth - a) / this.props.slideWidth
                      ) -
                      1 +
                      h,
                    v = Math.abs(u - t),
                    y = n === r ? v > g : v >= g;
                  t < u
                    ? v > f &&
                      (s =
                        (this.props.slideWidth + this.props.cellSpacing) *
                        (this.props.slideCount + t))
                    : y &&
                      (s =
                        (this.props.slideWidth + this.props.cellSpacing) *
                        (this.props.slideCount - t) *
                        -1);
                }
                return s + i || 0;
              },
            },
            {
              key: "formatChildren",
              value: function (t) {
                var e = this,
                  n = this.props,
                  r = n.top,
                  o = n.left,
                  s = n.currentSlide,
                  a = n.slidesToShow,
                  l = n.vertical ? r : o,
                  u = i.Children.count(t);
                return i.Children.map(t, function (n, r) {
                  var o = (function (t, e) {
                      var n = e.currentSlide,
                        r = e.cellSpacing,
                        i = e.slideCount,
                        o = e.slideWidth,
                        s = e.frameWidth,
                        a = e.wrapAround,
                        l = e.cellAlign,
                        u = o || 1,
                        c = U(n, e) + r * n,
                        d = s - c,
                        h = 0;
                      h =
                        "left" !== l
                          ? Math.max(Math.floor(c / u) + 1, 0)
                          : Math.max(Math.floor(c / u), 0);
                      var p = Math.max(Math.floor(d / u), 0);
                      if (p + h + n >= i && !a) {
                        var f = h + p;
                        (p = f), (h = f);
                      }
                      for (
                        var g = Math.ceil(n), v = [], y = g - h;
                        y < g + p + 1;
                        y++
                      )
                        y < 0
                          ? v.push(a ? i + y : -1)
                          : v.push(y > i - 1 ? y - i : y);
                      return v.includes(t);
                    })(r, e.props),
                    c = o ? {} : { inert: "true" };
                  return i.createElement(
                    "div",
                    ht(
                      {
                        className: "slider-slide".concat(st(r, s, a)),
                        "aria-label": "slide "
                          .concat(r + 1, " of ")
                          .concat(t.length),
                        role: "group",
                        style: e.getSlideStyles(r, l, u, a),
                        key: r,
                        onClick: ct,
                        tabIndex: -1,
                      },
                      c
                    ),
                    n
                  );
                });
              },
            },
            {
              key: "getSlideStyles",
              value: function (t, e, n, r) {
                var i = this.getSlideTargetPosition(t, e, n, r),
                  o =
                    "zoom" === this.props.animation &&
                    this.props.currentSlide !== t
                      ? Math.max(Math.min(this.props.zoomScale, 1), 0)
                      : 1;
                return {
                  boxSizing: "border-box",
                  display: this.props.vertical ? "block" : "inline-block",
                  height: K(this.props),
                  left: this.props.vertical ? 0 : i,
                  listStyleType: "none",
                  marginBottom: this.props.vertical
                    ? this.props.cellSpacing / 2
                    : "auto",
                  marginLeft: this.props.vertical
                    ? "auto"
                    : this.props.cellSpacing / 2,
                  marginRight: this.props.vertical
                    ? "auto"
                    : this.props.cellSpacing / 2,
                  marginTop: this.props.vertical
                    ? this.props.cellSpacing / 2
                    : "auto",
                  MozBoxSizing: "border-box",
                  position: "absolute",
                  top: this.props.vertical ? i : 0,
                  transform: "scale(".concat(o, ")"),
                  transition: "transform .4s linear",
                  verticalAlign: "top",
                  width: this.props.vertical ? "100%" : this.props.slideWidth,
                };
              },
            },
            {
              key: "getListStyles",
              value: function (t) {
                var e = t.deltaX,
                  n = t.deltaY,
                  r =
                    this.props.slideWidth *
                    i.Children.count(this.props.children),
                  o =
                    this.props.cellSpacing *
                    i.Children.count(this.props.children),
                  s = "translate3d(".concat(e, "px, ").concat(n, "px, 0)"),
                  a =
                    "current" === this.props.heightMode &&
                    this.props.hasInteraction
                      ? "height 0.2s ease-out"
                      : "0s";
                return {
                  boxSizing: "border-box",
                  cursor: !0 === this.props.dragging ? "pointer" : "inherit",
                  display: "block",
                  height: this.props.vertical ? r + o : this.props.slideHeight,
                  margin: this.props.vertical
                    ? "".concat((this.props.cellSpacing / 2) * -1, "px 0px")
                    : "0px ".concat((this.props.cellSpacing / 2) * -1, "px"),
                  padding: 0,
                  position: "relative",
                  MozBoxSizing: "border-box",
                  msTransform: "translate(".concat(e, "px, ").concat(n, "px)"),
                  touchAction: "pinch-zoom ".concat(
                    this.props.vertical ? "pan-x" : "pan-y"
                  ),
                  transform: s,
                  WebkitTransform: s,
                  width: "auto",
                  transition: a,
                };
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.formatChildren(this.props.children),
                  e = this.props.deltaX,
                  n = this.props.deltaY;
                return i.createElement(
                  "div",
                  {
                    className: "slider-list",
                    style: this.getListStyles({ deltaX: e, deltaY: n }),
                  },
                  t
                );
              },
            },
          ]) && pt(e.prototype, n),
          r && pt(e, r),
          s
        );
      })(i.Component);
      function St(t) {
        return (
          (St =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          St(t)
        );
      }
      function wt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Ot(t, e) {
        return (
          (Ot =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Ot(t, e)
        );
      }
      function Tt(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Mt(t);
          if (e) {
            var i = Mt(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return Ct(this, n);
        };
      }
      function Ct(t, e) {
        return !e || ("object" !== St(e) && "function" !== typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function Mt(t) {
        return (
          (Mt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Mt(t)
        );
      }
      (mt.propTypes = {
        animation: s().oneOf(["zoom"]),
        cellAlign: s().string,
        cellSpacing: s().number,
        currentSlide: s().number,
        deltaX: s().number,
        deltaY: s().number,
        dragging: s().bool,
        frameWidth: s().number,
        hasInteraction: s().bool,
        heightMode: s().oneOf(["first", "current", "max"]),
        isWrappingAround: s().bool,
        left: s().number,
        slideCount: s().number,
        slideHeight: s().number,
        slideOffset: s().number,
        slidesToScroll: s().oneOfType([s().string, s().number]),
        slideWidth: s().number,
        top: s().number,
        vertical: s().bool,
        wrapAround: s().bool,
        zoomScale: s().number,
      }),
        (mt.defaultProps = {
          cellAlign: "left",
          cellSpacing: 0,
          currentSlide: 0,
          deltaX: 0,
          deltaY: 0,
          dragging: !1,
          frameWidth: 0,
          heightMode: "max",
          isWrappingAround: !1,
          left: 0,
          slideCount: 0,
          slideHeight: 0,
          slidesToScroll: 1,
          slideWidth: 0,
          top: 0,
          vertical: !1,
          wrapAround: !1,
          zoomScale: 0.85,
        });
      var kt = (function (t) {
        !(function (t, e) {
          if ("function" !== typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Ot(t, e);
        })(s, t);
        var e,
          n,
          r,
          o = Tt(s);
        function s(t) {
          var e;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, s),
            ((e = o.call(this, t)).fadeFromSlide = t.currentSlide),
            e
          );
        }
        return (
          (e = s),
          (n = [
            {
              key: "formatChildren",
              value: function (t, e) {
                var n = this,
                  r = this.props,
                  o = r.currentSlide,
                  s = r.slidesToShow;
                return i.Children.map(t, function (r, a) {
                  return i.createElement(
                    "div",
                    {
                      className: "slider-slide".concat(st(a, o, s)),
                      style: n.getSlideStyles(a, e),
                      key: a,
                      "aria-label": "slide "
                        .concat(a + 1, " of ")
                        .concat(t.length),
                      role: "group",
                      onClick: ct,
                      tabIndex: -1,
                    },
                    r
                  );
                });
              },
            },
            {
              key: "getSlideOpacityAndLeftMap",
              value: function (t, e, n) {
                var r = e;
                t > n && 0 === t
                  ? (r = t - this.props.slidesToShow)
                  : t < n &&
                    t + this.props.slidesToShow > this.props.slideCount - 1 &&
                    (r = t + this.props.slidesToShow);
                var i = {};
                if (t === e) i[t] = 1;
                else {
                  var o = t - r;
                  (i[t] = (n - r) / o), (i[e] = (t - n) / o);
                }
                for (var s = {}, a = 0; a < this.props.slidesToShow; a++)
                  (s[t + a] = {
                    opacity: i[t],
                    left: this.props.slideWidth * a,
                  }),
                    (s[e + a] = {
                      opacity: i[e],
                      left: this.props.slideWidth * a,
                    });
                return s;
              },
            },
            {
              key: "getSlideStyles",
              value: function (t, e) {
                return {
                  boxSizing: "border-box",
                  display: "block",
                  height: K(this.props),
                  left: e[t] ? e[t].left : 0,
                  listStyleType: "none",
                  marginBottom: "auto",
                  marginLeft: this.props.cellSpacing / 2,
                  marginRight: this.props.cellSpacing / 2,
                  marginTop: "auto",
                  MozBoxSizing: "border-box",
                  opacity: e[t] ? e[t].opacity : 0,
                  position: "absolute",
                  top: 0,
                  verticalAlign: "top",
                  visibility: e[t] ? "inherit" : "hidden",
                  width: this.props.slideWidth,
                };
              },
            },
            {
              key: "getContainerStyles",
              value: function () {
                var t = this.props.slideWidth * this.props.slidesToShow;
                return {
                  boxSizing: "border-box",
                  cursor: !0 === this.props.dragging ? "pointer" : "inherit",
                  display: "block",
                  height: this.props.slideHeight,
                  margin: this.props.vertical
                    ? "".concat((this.props.cellSpacing / 2) * -1, "px 0px")
                    : "0px ".concat((this.props.cellSpacing / 2) * -1, "px"),
                  MozBoxSizing: "border-box",
                  padding: 0,
                  touchAction: "pinch-zoom ".concat(
                    this.props.vertical ? "pan-x" : "pan-y"
                  ),
                  width: t,
                };
              },
            },
            {
              key: "render",
              value: function () {
                var t =
                  (-(this.props.deltaX || this.props.deltaY) /
                    this.props.slideWidth) %
                  this.props.slideCount;
                parseInt(t) === t && (this.fadeFromSlide = t);
                var e = this.getSlideOpacityAndLeftMap(
                    this.fadeFromSlide,
                    this.props.currentSlide,
                    t
                  ),
                  n = this.formatChildren(this.props.children, e);
                return i.createElement(
                  "div",
                  {
                    className: "slider-list",
                    style: this.getContainerStyles(),
                  },
                  n
                );
              },
            },
          ]) && wt(e.prototype, n),
          r && wt(e, r),
          s
        );
      })(i.Component);
      function Et(t) {
        return (
          (Et =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Et(t)
        );
      }
      function _t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function At(t, e) {
        return (
          (At =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          At(t, e)
        );
      }
      function xt(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Nt(t);
          if (e) {
            var i = Nt(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return jt(this, n);
        };
      }
      function jt(t, e) {
        return !e || ("object" !== Et(e) && "function" !== typeof e)
          ? Wt(t)
          : e;
      }
      function Wt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Nt(t) {
        return (
          (Nt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Nt(t)
        );
      }
      (kt.propTypes = {
        cellSpacing: s().number,
        currentSlide: s().number,
        deltaX: s().number,
        deltaY: s().number,
        dragging: s().bool,
        heightMode: s().oneOf(["first", "current", "max"]),
        isWrappingAround: s().bool,
        left: s().number,
        slideCount: s().number,
        slideHeight: s().number,
        slidesToShow: s().number,
        slideWidth: s().number,
        top: s().number,
        vertical: s().bool,
        wrapAround: s().bool,
      }),
        (kt.defaultProps = {
          cellSpacing: 0,
          currentSlide: 0,
          deltaX: 0,
          deltaY: 0,
          dragging: !1,
          heightMode: "max",
          isWrappingAround: !1,
          left: 0,
          slideCount: 0,
          slideHeight: 0,
          slidesToShow: 1,
          slideWidth: 0,
          top: 0,
          vertical: !1,
          wrapAround: !1,
        });
      var Dt = (function (t) {
        !(function (t, e) {
          if ("function" !== typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && At(t, e);
        })(s, t);
        var e,
          n,
          r,
          o = xt(s);
        function s(t) {
          var e;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, s),
            ((e = o.call(this, t)).getListStyles = e.getListStyles.bind(Wt(e))),
            e
          );
        }
        return (
          (e = s),
          (n = [
            {
              key: "getSlideTargetPosition",
              value: function (t) {
                var e = 0,
                  n = 0;
                if (t !== this.props.currentSlide) {
                  var r = this.getRelativeDistanceToCurrentSlide(t);
                  (e =
                    (this.props.slideWidth + this.props.cellSpacing) * r -
                    this.getZoomOffsetFor(r)),
                    (n = 0),
                    "zoom" === this.props.animation &&
                    (this.props.currentSlide === t + 1 ||
                      (0 === this.props.currentSlide &&
                        t === this.props.children.length - 1))
                      ? (n = this.props.slideOffset)
                      : "zoom" === this.props.animation &&
                        (this.props.currentSlide === t - 1 ||
                          (this.props.currentSlide ===
                            this.props.children.length - 1 &&
                            0 === t)) &&
                        (n = -this.props.slideOffset);
                }
                return e + n;
              },
            },
            {
              key: "formatChildren",
              value: function (t) {
                var e = this,
                  n = this.props,
                  r = n.top,
                  o = n.left,
                  s = n.currentSlide,
                  a = n.slidesToShow,
                  l = n.vertical ? r : o;
                return i.Children.map(t, function (n, r) {
                  var o = e.getDistanceToCurrentSlide(r) <= a / 2,
                    u = s === r;
                  return i.createElement(
                    "div",
                    {
                      className: "slider-slide"
                        .concat(o ? " slide-visible" : "")
                        .concat(u ? " slide-current" : ""),
                      style: e.getSlideStyles(r, l),
                      key: r,
                      "aria-label": "slide "
                        .concat(r + 1, " of ")
                        .concat(t.length),
                      role: "group",
                      onClick: ct,
                      tabIndex: -1,
                    },
                    n
                  );
                });
              },
            },
            {
              key: "getZoomOffsetFor",
              value: function (t) {
                return 0 === t
                  ? 0
                  : (1 - Math.pow(this.props.zoomScale, Math.abs(t))) *
                      this.props.slideWidth *
                      (t < 0 ? -1 : 1) +
                      this.getZoomOffsetFor(t < 0 ? t + 1 : t - 1);
              },
            },
            {
              key: "getDistance",
              value: function (t, e) {
                return Math.abs(t - e);
              },
            },
            {
              key: "getDistanceToCurrentSlide",
              value: function (t) {
                var e = this.props,
                  n = e.wrapAround,
                  r = e.currentSlide,
                  i = e.slideCount;
                return n
                  ? Math.min(
                      Math.min(
                        this.getDistance(t, 0) + this.getDistance(r, i),
                        this.getDistance(t, i) + this.getDistance(r, 0)
                      ),
                      this.getDistance(t, r)
                    )
                  : this.getDistance(t, r);
              },
            },
            {
              key: "getRelativeDistanceToCurrentSlide",
              value: function (t) {
                var e = this.props,
                  n = e.wrapAround,
                  r = e.currentSlide,
                  i = e.slideCount;
                if (!n) return t - r;
                var o = this.getDistance(t, 0) + this.getDistance(r, i),
                  s = this.getDistance(t, i) + this.getDistance(r, 0),
                  a = this.getDistance(t, r);
                switch (Math.min(Math.min(o, s), a)) {
                  case a:
                    return t - r;
                  case o:
                    return o;
                  case s:
                    return -s;
                  default:
                    return 0;
                }
              },
            },
            {
              key: "getTransformScale",
              value: function (t) {
                return this.props.currentSlide !== t
                  ? Math.max(
                      Math.min(
                        Math.pow(
                          this.props.zoomScale,
                          this.getDistanceToCurrentSlide(t)
                        ),
                        1
                      ),
                      0
                    )
                  : 1;
              },
            },
            {
              key: "getOpacityScale",
              value: function (t) {
                return this.props.currentSlide !== t
                  ? Math.max(
                      Math.min(
                        Math.pow(
                          this.props.opacityScale,
                          this.getDistanceToCurrentSlide(t)
                        ),
                        1
                      ),
                      0
                    )
                  : 1;
              },
            },
            {
              key: "getSlideStyles",
              value: function (t, e) {
                var n = this.props,
                  r = n.vertical,
                  i = n.slideCount,
                  o = n.cellSpacing,
                  s = n.slideWidth,
                  a = this.getSlideTargetPosition(t, e),
                  l = this.getTransformScale(t);
                return {
                  boxSizing: "border-box",
                  display: r ? "block" : "inline-block",
                  height: K(this.props),
                  left: r ? 0 : a,
                  listStyleType: "none",
                  marginBottom: r ? o / 2 : "auto",
                  marginLeft: r ? "auto" : o / 2,
                  marginRight: r ? "auto" : o / 2,
                  marginTop: r ? o / 2 : "auto",
                  MozBoxSizing: "border-box",
                  opacity: this.getOpacityScale(t),
                  position: "absolute",
                  top: r ? a : 0,
                  transform: "scale(".concat(l, ")"),
                  transition:
                    "left 0.4s ease-out, transform 0.4s ease-out, opacity 0.4s ease-out",
                  verticalAlign: "top",
                  width: r ? "100%" : s,
                  zIndex: i - this.getDistanceToCurrentSlide(t),
                };
              },
            },
            {
              key: "getListStyles",
              value: function () {
                var t =
                    this.props.slideWidth *
                    i.Children.count(this.props.children),
                  e =
                    this.props.cellSpacing *
                    i.Children.count(this.props.children);
                return {
                  boxSizing: "border-box",
                  cursor: !0 === this.props.dragging ? "pointer" : "inherit",
                  height: this.props.vertical ? t + e : this.props.slideHeight,
                  left: "calc(50% - (".concat(
                    this.props.slideWidth,
                    "px / 2))"
                  ),
                  margin: this.props.vertical
                    ? "".concat((this.props.cellSpacing / 2) * -1, "px 0px")
                    : ""
                        .concat(this.props.slideListMargin, "px ")
                        .concat((this.props.cellSpacing / 2) * -1, "px"),
                  MozBoxSizing: "border-box",
                  padding: 0,
                  position: "relative",
                  touchAction: "pinch-zoom ".concat(
                    this.props.vertical ? "pan-x" : "pan-y"
                  ),
                  width: this.props.vertical ? "auto" : "100%",
                };
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.formatChildren(this.props.children);
                return i.createElement(
                  "div",
                  { className: "slider-list", style: this.getListStyles() },
                  t
                );
              },
            },
          ]) && _t(e.prototype, n),
          r && _t(e, r),
          s
        );
      })(i.Component);
      (Dt.propTypes = {
        cellSpacing: s().number,
        currentSlide: s().number,
        dragging: s().bool,
        heightMode: s().oneOf(["first", "current", "max"]),
        isWrappingAround: s().bool,
        left: s().number,
        opacityScale: s().number,
        slideCount: s().number,
        slideHeight: s().number,
        slideListMargin: s().number,
        slideOffset: s().number,
        slidesToShow: s().number,
        slideWidth: s().number,
        top: s().number,
        vertical: s().bool,
        wrapAround: s().bool,
        zoomScale: s().number,
      }),
        (Dt.defaultProps = {
          cellSpacing: 0,
          currentSlide: 0,
          dragging: !1,
          heightMode: "max",
          isWrappingAround: !1,
          left: 0,
          opacityScale: 0.65,
          slideCount: 0,
          slideHeight: 0,
          slideListMargin: 0,
          slidesToShow: 3,
          slideWidth: 0,
          top: 0,
          vertical: !1,
          wrapAround: !0,
          zoomScale: 0.75,
        });
      var Pt = { fade: kt, scroll: mt, scroll3d: Dt },
        It = function (t) {
          var e = t.message;
          return i.createElement(
            "div",
            {
              "aria-live": "polite",
              "aria-atomic": "true",
              style: {
                position: "absolute",
                width: "1px",
                height: "1px",
                overflow: "hidden",
                padding: 0,
                margin: "-1px",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                border: 0,
              },
              tabIndex: -1,
            },
            e
          );
        },
        Rt = function (t) {
          return i.Children.toArray(t);
        },
        Lt = function (t, e) {
          return t > e ? t : e;
        },
        Ht = function (t) {
          if (!t) return 0;
          if (t.children && t.children.length > 0) {
            for (var e = 0, n = 0; n < t.children.length; ++n)
              e += t.children[n].offsetHeight;
            return e;
          }
          return t.offsetHeight;
        },
        zt = function (t, e, n) {
          var r = 0;
          if (
            0 === t.length ||
            e < 0 ||
            n < 0 ||
            e > t.length - 1 ||
            n > t.length
          )
            return r;
          if (e < n) for (var i = e; i < n; i++) r = Lt(Ht(t[i]), r);
          else if (e > n) {
            for (var o = e; o < t.length; o++) r = Lt(Ht(t[o]), r);
            for (var s = 0; s < n; s++) r = Lt(Ht(t[s]), r);
          } else r = Ht(t[e]);
          return r;
        },
        Bt = function (t, e) {
          for (var n = t; n < 0; ) n += e;
          for (; n > e; ) n -= e;
          return n;
        },
        Xt = function (t, e, n, r, i) {
          if (e > 1) {
            var o = t,
              s = Math.min(Math.ceil(e) + t, i.length),
              a = "center" === n ? (e - 1) / 2 : e - 1;
            switch (n) {
              case "center":
                (o = Math.floor(t - a)), (s = Math.ceil(t + a) + 1);
                break;
              case "right":
                (o = Math.floor(t - a)), (s = t + 1);
                break;
              case "left":
                (o = t), (s = Math.ceil(t + a) + 1);
            }
            return (
              (o = r ? Bt(o, i.length) : Math.max(o, 0)),
              (s = r ? Bt(s, i.length) : Math.min(s, i.length)),
              zt(i, o, s)
            );
          }
          return Ht(i[t]);
        };
      function Yt(t) {
        return (
          (Yt =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Yt(t)
        );
      }
      function Ft(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if (
              "undefined" === typeof Symbol ||
              !(Symbol.iterator in Object(t))
            )
              return;
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var s, a = t[Symbol.iterator]();
                !(r = (s = a.next()).done) &&
                (n.push(s.value), !e || n.length !== e);
                r = !0
              );
            } catch (l) {
              (i = !0), (o = l);
            } finally {
              try {
                r || null == a.return || a.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" === typeof t) return Kt(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Kt(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Kt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Ut() {
        return (
          (Ut =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          Ut.apply(this, arguments)
        );
      }
      function Vt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function qt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Vt(Object(n), !0).forEach(function (e) {
                Zt(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Vt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function Zt(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function $t(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Gt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Qt(t, e) {
        return (
          (Qt =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Qt(t, e)
        );
      }
      function Jt(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = ne(t);
          if (e) {
            var i = ne(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return te(this, n);
        };
      }
      function te(t, e) {
        return !e || ("object" !== Yt(e) && "function" !== typeof e)
          ? ee(t)
          : e;
      }
      function ee(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function ne(t) {
        return (
          (ne = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          ne(t)
        );
      }
      var re = (function (t) {
        !(function (t, e) {
          if ("function" !== typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Qt(t, e);
        })(a, t);
        var e,
          n,
          o,
          s = Jt(a);
        function a() {
          var t;
          return (
            $t(this, a),
            ((t = s.apply(this, arguments)).displayName = "Carousel"),
            (t.clickDisabled = !1),
            (t.latestTransitioningIndex = null),
            (t.timers = []),
            (t.touchObject = {}),
            (t.controlsMap = [
              { funcName: "renderTopLeftControls", key: "TopLeft" },
              { funcName: "renderTopCenterControls", key: "TopCenter" },
              { funcName: "renderTopRightControls", key: "TopRight" },
              { funcName: "renderCenterLeftControls", key: "CenterLeft" },
              { funcName: "renderCenterCenterControls", key: "CenterCenter" },
              { funcName: "renderCenterRightControls", key: "CenterRight" },
              { funcName: "renderBottomLeftControls", key: "BottomLeft" },
              { funcName: "renderBottomCenterControls", key: "BottomCenter" },
              { funcName: "renderBottomRightControls", key: "BottomRight" },
            ]),
            (t.keyCodeConfig = {
              nextSlide: [39, 68, 38, 87],
              previousSlide: [37, 65, 40, 83],
              firstSlide: [81],
              lastSlide: [69],
              pause: [32],
            }),
            (t.childNodesMutationObs = null),
            (t.state = qt(
              {
                currentSlide: t.props.slideIndex,
                dragging: !1,
                easing: t.props.disableAnimation ? "" : x,
                hasInteraction: !1,
                isWrappingAround: !1,
                left: 0,
                resetWrapAroundPosition: !1,
                slideCount: Rt(t.props.children).length,
                top: 0,
                wrapToIndex: null,
                hasFocus: !1,
              },
              ut(t.props)
            )),
            (t.autoplayIterator = t.autoplayIterator.bind(ee(t))),
            (t.calcSlideHeightAndWidth = t.calcSlideHeightAndWidth.bind(ee(t))),
            (t.getChildNodes = t.getChildNodes.bind(ee(t))),
            (t.getMouseEvents = t.getMouseEvents.bind(ee(t))),
            (t.getOffsetDeltas = t.getOffsetDeltas.bind(ee(t))),
            (t.getTargetLeft = t.getTargetLeft.bind(ee(t))),
            (t.getTouchEvents = t.getTouchEvents.bind(ee(t))),
            (t.blockEvent = t.blockEvent.bind(ee(t))),
            (t.goToSlide = t.goToSlide.bind(ee(t))),
            (t.handleFocus = t.handleFocus.bind(ee(t))),
            (t.handleBlur = t.handleBlur.bind(ee(t))),
            (t.handleClick = t.handleClick.bind(ee(t))),
            (t.handleKeyPress = t.handleKeyPress.bind(ee(t))),
            (t.handleMouseOut = t.handleMouseOut.bind(ee(t))),
            (t.handleMouseOver = t.handleMouseOver.bind(ee(t))),
            (t.handleSwipe = t.handleSwipe.bind(ee(t))),
            (t.nextSlide = t.nextSlide.bind(ee(t))),
            (t.onResize = t.onResize.bind(ee(t))),
            (t.onVisibilityChange = t.onVisibilityChange.bind(ee(t))),
            (t.previousSlide = t.previousSlide.bind(ee(t))),
            (t.renderControls = t.renderControls.bind(ee(t))),
            (t.resetAutoplay = t.resetAutoplay.bind(ee(t))),
            (t.setDimensions = t.setDimensions.bind(ee(t))),
            (t.setLeft = t.setLeft.bind(ee(t))),
            (t.setSlideHeightAndWidth = t.setSlideHeightAndWidth.bind(ee(t))),
            (t.startAutoplay = t.startAutoplay.bind(ee(t))),
            (t.stopAutoplay = t.stopAutoplay.bind(ee(t))),
            (t.establishChildNodesMutationObserver =
              t.establishChildNodesMutationObserver.bind(ee(t))),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                (this.mounted = !0),
                  this.setLeft(),
                  this.setDimensions(),
                  this.bindEvents(),
                  this.establishChildNodesMutationObserver(),
                  this.props.autoplay && this.startAutoplay();
                var t = Ut({}, this.keyCodeConfig, this.props.keyCodeConfig);
                (this.keyCodeMap = this.getKeyCodeMap(t)),
                  this.getLockScrollEvents().lockTouchScroll(),
                  this.initializeCarouselHeight();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t, e) {
                var n = e.currentSlide !== this.state.currentSlide,
                  r = t.heightMode !== this.props.heightMode,
                  i = t.vertical !== this.props.vertical,
                  o = t.children !== this.props.children;
                if (i) this.onResize();
                else if (n || r) {
                  var s = this.getCurrentChildNodeImg();
                  s
                    ? (s.addEventListener("load", this.setSlideHeightAndWidth),
                      s.removeEventListener(
                        "load",
                        this.setSlideHeightAndWidth
                      ))
                    : this.setSlideHeightAndWidth();
                }
                this.state.isWrappingAround && (this.isWrapped = !0);
                var a = Rt(t.children).length,
                  l = Rt(this.props.children).length,
                  u = a !== l;
                u &&
                  this.setState({
                    slideCount: l,
                    currentSlide: this.props.slideIndex,
                  });
                var c =
                  this.calcSlideHeightAndWidth().slideHeight !== e.slideHeight;
                this.mounted && c
                  ? this.setDimensions()
                  : (u ||
                      (function (t, e, n) {
                        for (var r = !1, i = 0; i < n.length; i++)
                          if (t[n[i]] !== e[n[i]]) {
                            r = !0;
                            break;
                          }
                        return r;
                      })(t, this.props, [
                        "cellSpacing",
                        "vertical",
                        "slideWidth",
                        "slideHeight",
                        "heightMode",
                        "slidesToScroll",
                        "slidesToShow",
                        "transitionMode",
                        "cellAlign",
                      ])) &&
                    this.setDimensions(this.props),
                  o && this.initializeCarouselHeight(),
                  u && l <= this.state.currentSlide
                    ? this.goToSlide(Math.max(l - 1, 0), this.props)
                    : t.slideIndex === this.props.slideIndex ||
                      this.props.slideIndex === this.state.currentSlide ||
                      this.state.isWrappingAround ||
                      this.goToSlide(this.props.slideIndex, this.props),
                  t.autoplay !== this.props.autoplay &&
                    (this.props.autoplay
                      ? this.startAutoplay()
                      : this.stopAutoplay());
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.unbindEvents(),
                  this.disconnectChildNodesMutationObserver(),
                  this.stopAutoplay(),
                  (this.mounted = !1);
                for (var t = 0; t < this.timers.length; t++)
                  clearTimeout(this.timers[t]);
                this.getLockScrollEvents().unlockTouchScroll();
              },
            },
            {
              key: "initializeCarouselHeight",
              value: function () {
                var t = this,
                  e = 0;
                !(function n(r) {
                  t.timers.push(
                    setTimeout(function () {
                      var i = t.calcSlideHeightAndWidth().slideHeight;
                      (t.state.slideHeight > 0 && t.state.slideHeight === i) ||
                        (t.setDimensions(), ++e < 10 && n(1.5 * r));
                    }, r)
                  );
                })(200);
              },
            },
            {
              key: "establishChildNodesMutationObserver",
              value: function () {
                var t,
                  e = this,
                  n = this.getChildNodes();
                if (n.length && "MutationObserver" in window) {
                  this.childNodesMutationObs = new MutationObserver(
                    function () {
                      e.setSlideHeightAndWidth();
                    }
                  );
                  for (var r = 0, i = Array.from(n); r < i.length; r++) {
                    var o = i[r];
                    (t = o),
                      e.childNodesMutationObs.observe(t, {
                        attributeFilter: ["style"],
                        attributeOldValue: !1,
                        attributes: !0,
                        characterData: !1,
                        characterDataOldValue: !1,
                        childList: !1,
                        subtree: !1,
                      });
                  }
                }
              },
            },
            {
              key: "disconnectChildNodesMutationObserver",
              value: function () {
                this.childNodesMutationObs instanceof MutationObserver &&
                  this.childNodesMutationObs.disconnect();
              },
            },
            {
              key: "blockEvent",
              value: function (t) {
                this.state.dragging &&
                  0 !==
                    lt(
                      this.touchObject.startX,
                      t.touches[0].pageX,
                      this.touchObject.startY,
                      t.touches[0].pageY,
                      this.props.vertical
                    ) &&
                  t.preventDefault();
              },
            },
            {
              key: "getLockScrollEvents",
              value: function () {
                var t = this;
                return {
                  lockTouchScroll: function () {
                    document.addEventListener("touchmove", t.blockEvent, {
                      passive: !1,
                    });
                  },
                  unlockTouchScroll: function () {
                    document.removeEventListener("touchmove", t.blockEvent, {
                      passive: !1,
                    });
                  },
                };
              },
            },
            {
              key: "getTouchEvents",
              value: function () {
                var t = this;
                return !1 === this.props.swiping
                  ? {
                      onTouchStart: this.handleMouseOver,
                      onTouchEnd: this.handleMouseOut,
                    }
                  : {
                      onTouchStart: function (e) {
                        2 !== e.touches.length
                          ? ((t.touchObject = {
                              startX: e.touches[0].pageX,
                              startY: e.touches[0].pageY,
                            }),
                            t.handleMouseOver(),
                            t.setState({ dragging: !0 }))
                          : t.handleMouseOver();
                      },
                      onTouchMove: function (e) {
                        if (2 !== e.touches.length) {
                          var n = lt(
                              t.touchObject.startX,
                              e.touches[0].pageX,
                              t.touchObject.startY,
                              e.touches[0].pageY,
                              t.props.vertical
                            ),
                            r = t.props.vertical
                              ? Math.round(
                                  Math.sqrt(
                                    Math.pow(
                                      e.touches[0].pageY - t.touchObject.startY,
                                      2
                                    )
                                  )
                                )
                              : Math.round(
                                  Math.sqrt(
                                    Math.pow(
                                      e.touches[0].pageX - t.touchObject.startX,
                                      2
                                    )
                                  )
                                );
                          r >= 10 &&
                            (!1 === t.clickDisabled && t.props.onDragStart(e),
                            (t.clickDisabled = !0)),
                            (t.touchObject = {
                              startX: t.touchObject.startX,
                              startY: t.touchObject.startY,
                              endX: e.touches[0].pageX,
                              endY: e.touches[0].pageY,
                              length: r,
                              direction: n,
                            }),
                            t.setState({
                              left: t.props.vertical
                                ? 0
                                : t.getTargetLeft(
                                    t.touchObject.length *
                                      t.touchObject.direction
                                  ),
                              top: t.props.vertical
                                ? t.getTargetLeft(
                                    t.touchObject.length *
                                      t.touchObject.direction
                                  )
                                : 0,
                            });
                        }
                      },
                      onTouchEnd: function (e) {
                        2 !== e.touches.length
                          ? (t.handleSwipe(e), t.handleMouseOut())
                          : t.handleMouseOut();
                      },
                      onTouchCancel: function (e) {
                        t.handleSwipe(e);
                      },
                    };
              },
            },
            {
              key: "getMouseEvents",
              value: function () {
                var t = this;
                return !1 === this.props.dragging
                  ? {
                      onMouseOver: this.handleMouseOver,
                      onMouseOut: this.handleMouseOut,
                    }
                  : {
                      onMouseOver: this.handleMouseOver,
                      onMouseOut: this.handleMouseOut,
                      onMouseDown: function (e) {
                        e.preventDefault && e.preventDefault(),
                          (t.touchObject = {
                            startX: e.clientX,
                            startY: e.clientY,
                          }),
                          t.setState({ dragging: !0 });
                      },
                      onMouseMove: function (e) {
                        if (t.state.dragging) {
                          var n = lt(
                            t.touchObject.startX,
                            e.clientX,
                            t.touchObject.startY,
                            e.clientY,
                            t.props.vertical
                          );
                          0 !== n && e.preventDefault();
                          var r = t.props.vertical
                            ? Math.round(
                                Math.sqrt(
                                  Math.pow(e.clientY - t.touchObject.startY, 2)
                                )
                              )
                            : Math.round(
                                Math.sqrt(
                                  Math.pow(e.clientX - t.touchObject.startX, 2)
                                )
                              );
                          r >= 10 &&
                            (!1 === t.clickDisabled && t.props.onDragStart(e),
                            (t.clickDisabled = !0)),
                            (t.touchObject = {
                              startX: t.touchObject.startX,
                              startY: t.touchObject.startY,
                              endX: e.clientX,
                              endY: e.clientY,
                              length: r,
                              direction: n,
                            }),
                            t.setState({
                              left: t.props.vertical
                                ? 0
                                : t.getTargetLeft(
                                    t.touchObject.length *
                                      t.touchObject.direction
                                  ),
                              top: t.props.vertical
                                ? t.getTargetLeft(
                                    t.touchObject.length *
                                      t.touchObject.direction
                                  )
                                : 0,
                            });
                        }
                      },
                      onMouseUp: function (e) {
                        0 !== t.touchObject.length &&
                        void 0 !== t.touchObject.length
                          ? t.handleSwipe(e)
                          : t.setState({ dragging: !1 });
                      },
                      onMouseLeave: function (e) {
                        t.state.dragging && t.handleSwipe(e);
                      },
                    };
              },
            },
            {
              key: "pauseAutoplay",
              value: function () {
                this.props.autoplay &&
                  ((this.autoplayPaused = !0), this.stopAutoplay());
              },
            },
            {
              key: "unpauseAutoplay",
              value: function () {
                this.props.autoplay &&
                  this.autoplayPaused &&
                  (this.startAutoplay(), (this.autoplayPaused = null));
              },
            },
            {
              key: "handleMouseOver",
              value: function () {
                this.props.pauseOnHover && this.pauseAutoplay();
              },
            },
            {
              key: "handleMouseOut",
              value: function () {
                this.autoplayPaused && this.unpauseAutoplay();
              },
            },
            {
              key: "handleFocus",
              value: function () {
                this.setState({ hasFocus: !0 });
              },
            },
            {
              key: "handleBlur",
              value: function () {
                this.setState({ hasFocus: !1 });
              },
            },
            {
              key: "handleClick",
              value: function (t) {
                if (!0 === this.clickDisabled) {
                  if (t.metaKey || t.shiftKey || t.altKey || t.ctrlKey) return;
                  t.preventDefault(),
                    t.stopPropagation(),
                    t.nativeEvent && t.nativeEvent.stopPropagation();
                }
              },
            },
            {
              key: "handleSwipe",
              value: function () {
                var t = this,
                  e = this.state.slidesToShow;
                "auto" === this.props.slidesToScroll &&
                  (e = this.state.slidesToScroll);
                var n = this.touchObject.length || 0;
                n > this.state.slideWidth / e / 5
                  ? 1 === this.touchObject.direction
                    ? this.state.currentSlide + 1 >= this.state.slideCount &&
                      !this.props.wrapAround
                      ? this.setState({ easing: r[this.props.edgeEasing] })
                      : this.nextSlide()
                    : -1 === this.touchObject.direction &&
                      (this.state.currentSlide <= 0 && !this.props.wrapAround
                        ? this.setState({ easing: r[this.props.edgeEasing] })
                        : this.previousSlide())
                  : n > 0 && this.goToSlide(this.state.currentSlide),
                  this.timers.push(
                    setTimeout(function () {
                      t.clickDisabled = !1;
                    }, 0)
                  ),
                  (this.touchObject = {}),
                  this.setState({ dragging: !1 });
              },
            },
            {
              key: "handleKeyPress",
              value: function (t) {
                if (this.state.hasFocus && this.props.enableKeyboardControls)
                  switch (this.keyCodeMap[t.keyCode]) {
                    case "nextSlide":
                      this.nextSlide();
                      break;
                    case "previousSlide":
                      this.previousSlide();
                      break;
                    case "firstSlide":
                      this.goToSlide(0, this.props);
                      break;
                    case "lastSlide":
                      this.goToSlide(this.state.slideCount - 1, this.props);
                      break;
                    case "pause":
                      if (this.state.pauseOnHover && this.props.autoplay) {
                        this.setState({ pauseOnHover: !1 }),
                          this.pauseAutoplay();
                        break;
                      }
                      this.setState({ pauseOnHover: !0 }),
                        this.unpauseAutoplay();
                  }
              },
            },
            {
              key: "getKeyCodeMap",
              value: function (t) {
                var e = {};
                return (
                  Object.keys(t).forEach(function (n) {
                    t[n].forEach(function (t) {
                      return (e[t] = n);
                    });
                  }),
                  e
                );
              },
            },
            {
              key: "autoplayIterator",
              value: function () {
                this.props.wrapAround
                  ? this.props.autoplayReverse
                    ? this.previousSlide()
                    : this.nextSlide()
                  : this.props.autoplayReverse
                  ? 0 !== this.state.currentSlide
                    ? this.previousSlide()
                    : this.stopAutoplay()
                  : this.state.currentSlide !==
                    this.state.slideCount - this.state.slidesToShow
                  ? this.nextSlide()
                  : this.stopAutoplay();
              },
            },
            {
              key: "startAutoplay",
              value: function () {
                this.autoplayID = setInterval(
                  this.autoplayIterator,
                  this.props.autoplayInterval
                );
              },
            },
            {
              key: "resetAutoplay",
              value: function () {
                this.props.autoplay &&
                  !this.autoplayPaused &&
                  (this.stopAutoplay(), this.startAutoplay());
              },
            },
            {
              key: "stopAutoplay",
              value: function () {
                this.autoplayID && clearInterval(this.autoplayID);
              },
            },
            {
              key: "getTargetLeft",
              value: function (t, e) {
                var n = e || this.state.currentSlide,
                  r = U(n, qt(qt({}, this.props), this.state)),
                  i = this.state.slideWidth * n;
                return (
                  this.state.currentSlide > 0 &&
                    n + this.state.slidesToScroll >= this.state.slideCount &&
                    !this.props.wrapAround &&
                    "remainder" === this.props.scrollMode &&
                    ((i =
                      this.state.slideWidth * this.state.slideCount -
                      this.state.frameWidth),
                    (r = 0),
                    (r -=
                      this.props.cellSpacing * (this.state.slideCount - 1))),
                  isNaN(t) ? (r -= 0) : (r -= t),
                  -1 * (i - r)
                );
              },
            },
            {
              key: "getOffsetDeltas",
              value: function () {
                var t = 0;
                return (
                  (t = this.state.isWrappingAround
                    ? this.getTargetLeft(null, this.state.wrapToIndex)
                    : this.getTargetLeft(
                        this.touchObject.length * this.touchObject.direction
                      )),
                  {
                    tx: [this.props.vertical ? 0 : t],
                    ty: [this.props.vertical ? t : 0],
                  }
                );
              },
            },
            {
              key: "isEdgeSwiping",
              value: function () {
                var t = this.state,
                  e = t.currentSlide,
                  n = t.slideCount,
                  r = t.slideWidth,
                  i = t.slideHeight,
                  o = t.slidesToShow,
                  s = this.getOffsetDeltas(),
                  a = s.tx,
                  l = s.ty,
                  u = U(e, qt(qt({}, this.props), this.state));
                if (this.props.vertical) {
                  var c = (i / o) * (n - o),
                    d = l[0] - u;
                  return d > 0 || -d > c;
                }
                var h = a[0] - u;
                return h > 0 || -h > r * (n - 1);
              },
            },
            {
              key: "goToSlide",
              value: function (t, e) {
                var n = this;
                void 0 === e && (e = this.props),
                  (this.latestTransitioningIndex = t),
                  this.setState({ hasInteraction: !0, easing: r[e.easing] });
                var i = this.state.currentSlide;
                if (t >= this.state.slideCount || t < 0) {
                  if (!e.wrapAround) return;
                  if (t >= this.state.slideCount)
                    return (
                      e.beforeSlide(this.state.currentSlide, 0),
                      void this.setState(
                        function (t) {
                          return {
                            left: e.vertical
                              ? 0
                              : n.getTargetLeft(
                                  n.state.slideWidth,
                                  t.currentSlide
                                ),
                            top: e.vertical
                              ? n.getTargetLeft(
                                  n.state.slideWidth,
                                  t.currentSlide
                                )
                              : 0,
                            currentSlide: 0,
                            isWrappingAround: !0,
                            wrapToIndex: n.state.slideCount,
                          };
                        },
                        function () {
                          n.timers.push(
                            setTimeout(function () {
                              t === n.latestTransitioningIndex &&
                                (n.resetAutoplay(),
                                t !== i && n.props.afterSlide(0));
                            }, e.speed)
                          );
                        }
                      )
                    );
                  var o =
                    t < 0
                      ? this.state.slideCount + t
                      : this.state.slideCount - this.state.slidesToScroll;
                  return (
                    e.beforeSlide(this.state.currentSlide, o),
                    void this.setState(
                      function (r) {
                        return {
                          left: e.vertical
                            ? 0
                            : n.getTargetLeft(0, r.currentSlide),
                          top: e.vertical
                            ? n.getTargetLeft(0, r.currentSlide)
                            : 0,
                          currentSlide: o,
                          isWrappingAround: !0,
                          wrapToIndex: t,
                        };
                      },
                      function () {
                        n.timers.push(
                          setTimeout(function () {
                            t === n.latestTransitioningIndex &&
                              (n.resetAutoplay(),
                              t !== i &&
                                n.props.afterSlide(n.state.slideCount - 1));
                          }, e.speed)
                        );
                      }
                    )
                  );
                }
                this.props.beforeSlide(this.state.currentSlide, t),
                  this.setState({ currentSlide: t }, function () {
                    n.timers.push(
                      setTimeout(function () {
                        t === n.latestTransitioningIndex &&
                          (n.resetAutoplay(), t !== i && n.props.afterSlide(t));
                      }, e.speed)
                    );
                  });
              },
            },
            {
              key: "nextSlide",
              value: function () {
                var t = this.state,
                  e = t.slidesToScroll,
                  n = t.currentSlide,
                  r = t.slideWidth,
                  i = t.slideCount,
                  o = n + e,
                  s = this.state.slidesToShow;
                if ("auto" === this.props.slidesToScroll) {
                  var a = this.touchObject.length;
                  a > 0 ? (o = Math.round(a / r) + n) : (s = e);
                }
                if (
                  !(n >= i - s) ||
                  this.props.wrapAround ||
                  "left" !== this.props.cellAlign
                )
                  if (this.props.wrapAround) this.goToSlide(o);
                  else {
                    if (1 !== this.props.slideWidth)
                      return void this.goToSlide(o);
                    var l = o,
                      u =
                        "page" === this.props.scrollMode
                          ? l
                          : Math.min(l, i - Math.floor(s)),
                      c = "left" !== this.props.cellAlign ? l : u;
                    this.goToSlide(Math.min(c, i - 1));
                  }
              },
            },
            {
              key: "previousSlide",
              value: function () {
                var t = this.state,
                  e = t.slidesToScroll,
                  n = t.slideWidth,
                  r = t.currentSlide,
                  i = r - e,
                  o = this.touchObject.length;
                "auto" === this.props.slidesToScroll &&
                  o > 0 &&
                  (i = r - Math.round(o / n)),
                  (r <= 0 && !this.props.wrapAround) ||
                    (this.props.wrapAround
                      ? this.goToSlide(i)
                      : this.goToSlide(Math.max(0, i)));
              },
            },
            {
              key: "bindEvents",
              value: function () {
                l().canUseDOM &&
                  (it(window, "resize", this.onResize),
                  it(document, "visibilitychange", this.onVisibilityChange),
                  it(document, "keydown", this.handleKeyPress));
              },
            },
            {
              key: "onResize",
              value: function () {
                this.setDimensions(null, this.props.onResize);
              },
            },
            {
              key: "onVisibilityChange",
              value: function () {
                document.hidden ? this.pauseAutoplay() : this.unpauseAutoplay();
              },
            },
            {
              key: "unbindEvents",
              value: function () {
                l().canUseDOM &&
                  (ot(window, "resize", this.onResize),
                  ot(document, "visibilitychange", this.onVisibilityChange),
                  ot(document, "keydown", this.handleKeyPress));
              },
            },
            {
              key: "calcSlideHeightAndWidth",
              value: function (t) {
                t = t || this.props;
                var e,
                  n = this.getChildNodes(),
                  r = (function (t, e) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : [],
                      r = t.heightMode,
                      i = t.vertical,
                      o = t.initialSlideHeight,
                      s = t.wrapAround,
                      a = e.slidesToShow,
                      l = e.currentSlide,
                      u = e.cellAlign,
                      c = n[0];
                    return c && "first" === r
                      ? i
                        ? Ht(c) * a
                        : Ht(c)
                      : "max" === r
                      ? zt(n, 0, n.length)
                      : "current" === r
                      ? Xt(l, a, u, s, n)
                      : o || 100;
                  })(t, this.state, n),
                  i = at(t, ["slidesToShow"]).slidesToShow,
                  o = this.frame;
                return (
                  (e =
                    "zoom" === this.props.animation
                      ? o.offsetWidth - (15 * o.offsetWidth) / 100
                      : "number" !== typeof t.slideWidth
                      ? parseInt(t.slideWidth)
                      : t.vertical
                      ? (r / i) * t.slideWidth
                      : (o.offsetWidth / i) * t.slideWidth),
                  t.vertical || (e -= t.cellSpacing * ((100 - 100 / i) / 100)),
                  { slideHeight: r, slideWidth: e }
                );
              },
            },
            {
              key: "setSlideHeightAndWidth",
              value: function () {
                var t = this.calcSlideHeightAndWidth(),
                  e = t.slideHeight,
                  n = t.slideWidth;
                (e !== this.state.slideHeight ||
                  n !== this.state.slideWidth ||
                  this.isWrapped) &&
                  ((this.isWrapped = !1),
                  this.setState({ slideHeight: e, slideWidth: n }));
              },
            },
            {
              key: "setDimensions",
              value: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : function () {};
                t = t || this.props;
                var n = at(t, ["slidesToShow", "cellAlign", "scrollMode"]),
                  r = n.slidesToShow,
                  i = n.cellAlign,
                  o = n.scrollMode,
                  s = this.frame,
                  a = this.calcSlideHeightAndWidth(t),
                  l = a.slideHeight,
                  u = a.slideWidth,
                  c = l + t.cellSpacing * (r - 1),
                  d = t.vertical ? c : s.offsetWidth,
                  h = at(t, ["slidesToScroll"]),
                  p = h.slidesToScroll;
                ("auto" !== p && "page" !== o) ||
                  (p = Math.floor(d / (u + t.cellSpacing))),
                  (1 !== t.slideWidth || t.cellSpacing > 0) &&
                    "page" === o &&
                    "left" === i &&
                    (r = p),
                  this.setState(
                    {
                      frameWidth: d,
                      slideHeight: l,
                      slidesToScroll: p,
                      slidesToShow: r,
                      slideWidth: u,
                      cellAlign: i,
                    },
                    function () {
                      e();
                    }
                  );
              },
            },
            {
              key: "getChildNodes",
              value: function () {
                return this.frame.childNodes[0].childNodes;
              },
            },
            {
              key: "getCurrentChildNodeImg",
              value: function () {
                var t = this.getChildNodes()[this.props.slideIndex];
                return t ? t.getElementsByTagName("img")[0] : null;
              },
            },
            {
              key: "setLeft",
              value: function () {
                var t = this.props.vertical ? 0 : this.getTargetLeft(),
                  e = this.props.vertical ? this.getTargetLeft() : 0;
                (t === this.state.left && e === this.state.top) ||
                  this.setState({ left: t, top: e });
              },
            },
            {
              key: "renderControls",
              value: function () {
                var t = this;
                return this.props.withoutControls
                  ? this.controlsMap.map(function () {
                      return null;
                    })
                  : this.controlsMap.map(function (e) {
                      var n = e.funcName,
                        r = e.key,
                        o = t.props[n],
                        s =
                          o &&
                          "function" === typeof o &&
                          o({
                            cellAlign: t.props.cellAlign,
                            cellSpacing: t.props.cellSpacing,
                            currentSlide: t.state.currentSlide,
                            defaultControlsConfig:
                              t.props.defaultControlsConfig,
                            frameWidth: t.state.frameWidth,
                            goToSlide: function (e) {
                              return t.goToSlide(e);
                            },
                            left: t.state.left,
                            nextSlide: function () {
                              return t.nextSlide();
                            },
                            previousSlide: function () {
                              return t.previousSlide();
                            },
                            scrollMode: t.props.scrollMode,
                            slideCount: t.state.slideCount,
                            slidesToScroll: t.state.slidesToScroll,
                            slidesToShow: t.state.slidesToShow,
                            slideWidth: t.state.slideWidth,
                            top: t.state.top,
                            vertical: t.props.vertical,
                            wrapAround: t.props.wrapAround,
                          });
                      return (
                        s &&
                        i.createElement(
                          "div",
                          {
                            key: r,
                            className: [
                              "slider-control-".concat(r.toLowerCase()),
                              t.props.defaultControlsConfig
                                .containerClassName || "",
                            ]
                              .join(" ")
                              .trim(),
                            style: qt(
                              qt({}, V(r)),
                              t.props.getControlsContainerStyles(r)
                            ),
                          },
                          s
                        )
                      );
                    });
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e,
                  n,
                  r,
                  o = this,
                  s = this.state,
                  a = s.currentSlide,
                  l = s.slideCount,
                  c = s.frameWidth,
                  d = s.hasInteraction,
                  h = this.props,
                  p = h.disableAnimation,
                  f = h.frameOverflow,
                  g = h.framePadding,
                  v = h.renderAnnounceSlideMessage,
                  y = h.slidesToShow,
                  b = h.vertical,
                  m =
                    this.state.dragging ||
                    (!this.state.dragging &&
                      this.state.resetWrapAroundPosition &&
                      this.props.wrapAround) ||
                    p ||
                    !d
                      ? 0
                      : this.props.speed,
                  S =
                    ((e = c),
                    {
                      boxSizing: "border-box",
                      display: "block",
                      height: (t = b) ? e || "initial" : "100%",
                      margin: g,
                      MozBoxSizing: "border-box",
                      msTransform: "translate(0, 0)",
                      overflow: f,
                      padding: 0,
                      position: "relative",
                      touchAction: "pinch-zoom ".concat(t ? "pan-x" : "pan-y"),
                      transform: "translate3d(0, 0, 0)",
                      WebkitTransform: "translate3d(0, 0, 0)",
                    }),
                  w = this.getTouchEvents(),
                  O = this.getMouseEvents(),
                  T = Pt[this.props.transitionMode],
                  C = Rt(this.props.children),
                  M = this.getOffsetDeltas(),
                  k = Ft(M.tx, 1)[0],
                  E = Ft(M.ty, 1)[0];
                return i.createElement(
                  "section",
                  {
                    className: ["slider", this.props.className || ""]
                      .join(" ")
                      .trim(),
                    onFocus: this.handleFocus,
                    "aria-label": "carousel-slider",
                    role: "region",
                    onBlur: this.handleBlur,
                    ref: this.props.innerRef,
                    tabIndex: 0,
                    style: Ut(
                      {},
                      ((n = this.props.width),
                      (r = this.props.height),
                      {
                        boxSizing: "border-box",
                        display: "block",
                        height: r,
                        MozBoxSizing: "border-box",
                        position: "relative",
                        width: n,
                      }),
                      this.props.style
                    ),
                  },
                  !this.props.autoplay &&
                    i.createElement(It, {
                      message: v({ currentSlide: a, slideCount: l }),
                    }),
                  i.createElement(
                    "div",
                    Ut(
                      {
                        className: "slider-frame",
                        ref: function (t) {
                          return (o.frame = t);
                        },
                        style: S,
                      },
                      w,
                      O,
                      { onClickCapture: this.handleClick }
                    ),
                    i.createElement(
                      u.Z,
                      {
                        show: !0,
                        start: { tx: k, ty: E },
                        update: function () {
                          var t = o.getOffsetDeltas(),
                            e = t.tx,
                            n = t.ty;
                          return o.props.disableEdgeSwiping &&
                            !o.props.wrapAround &&
                            o.isEdgeSwiping()
                            ? {}
                            : {
                                tx: e,
                                ty: n,
                                timing: { duration: m, ease: o.state.easing },
                                events: {
                                  end: function () {
                                    var t = o.props.vertical
                                        ? 0
                                        : o.getTargetLeft(),
                                      e = o.props.vertical
                                        ? o.getTargetLeft()
                                        : 0;
                                    (t === o.state.left && e === o.state.top) ||
                                      o.setState(
                                        {
                                          left: t,
                                          top: e,
                                          isWrappingAround: !1,
                                          resetWrapAroundPosition: !0,
                                        },
                                        function () {
                                          o.setState({
                                            resetWrapAroundPosition: !1,
                                          });
                                        }
                                      );
                                  },
                                },
                              };
                        },
                      },
                      function (t) {
                        var e,
                          n,
                          r = t.tx,
                          s = t.ty;
                        return i.createElement(
                          T,
                          Ut(
                            {},
                            ((e = o.props),
                            (n = o.state),
                            {
                              animation: e.animation,
                              cellAlign: e.cellAlign,
                              cellSpacing: e.cellSpacing,
                              currentSlide: n.currentSlide,
                              dragging: e.dragging,
                              frameWidth: parseInt(n.frameWidth),
                              hasInteraction: n.hasInteraction,
                              heightMode: e.heightMode,
                              isWrappingAround: n.isWrappingAround,
                              left: n.left,
                              opacityScale: e.opacityScale,
                              slideCount: n.slideCount,
                              slideHeight: n.slideHeight,
                              slideListMargin: e.slideListMargin,
                              slideOffset: e.slideOffset,
                              slidesToScroll:
                                "page" === e.scrollMode
                                  ? n.slidesToShow
                                  : e.slidesToScroll,
                              slidesToShow: n.slidesToShow,
                              slideWidth: n.slideWidth,
                              top: n.top,
                              vertical: e.vertical,
                              wrapAround: e.wrapAround,
                              zoomScale: e.zoomScale,
                            }),
                            { deltaX: r, deltaY: s }
                          ),
                          (function (t, e, n) {
                            return e > 1
                              ? i.Children.map(t, function (t, r) {
                                  var o =
                                    r >= n && r < e + n
                                      ? { "aria-hidden": "false", tabIndex: 0 }
                                      : { "aria-hidden": "true" };
                                  return i.cloneElement(
                                    t,
                                    nt(nt({}, o), t.props)
                                  );
                                })
                              : i.Children.map(t, function (t, e) {
                                  var r =
                                    e !== n
                                      ? { "aria-hidden": "true" }
                                      : { "aria-hidden": "false", tabIndex: 0 };
                                  return i.cloneElement(
                                    t,
                                    nt(nt({}, r), t.props)
                                  );
                                });
                          })(C, y, a)
                        );
                      }
                    )
                  ),
                  this.renderControls(),
                  this.props.autoGenerateStyleTag &&
                    i.createElement("style", {
                      type: "text/css",
                      dangerouslySetInnerHTML: {
                        __html:
                          ".slider-slide > img { width: 100%; display: block; }\n          .slider-slide > img:focus { margin: auto; }",
                      },
                    })
                );
              },
            },
          ]),
          n && Gt(e.prototype, n),
          o && Gt(e, o),
          a
        );
      })(i.Component);
      (re.propTypes = {
        afterSlide: s().func,
        animation: s().oneOf(["zoom"]),
        autoGenerateStyleTag: s().bool,
        autoplay: s().bool,
        autoplayInterval: s().number,
        autoplayReverse: s().bool,
        beforeSlide: s().func,
        cellAlign: s().oneOf(["left", "center", "right"]),
        cellSpacing: s().number,
        getControlsContainerStyles: s().func,
        defaultControlsConfig: s().shape({
          containerClassName: s().string,
          nextButtonClassName: s().string,
          nextButtonStyle: s().object,
          nextButtonText: s().string,
          prevButtonClassName: s().string,
          prevButtonStyle: s().object,
          prevButtonText: s().string,
          pagingDotsContainerClassName: s().string,
          pagingDotsClassName: s().string,
          pagingDotsStyle: s().object,
        }),
        disableAnimation: s().bool,
        disableEdgeSwiping: s().bool,
        dragging: s().bool,
        easing: s().string,
        edgeEasing: s().string,
        enableKeyboardControls: s().bool,
        frameOverflow: s().string,
        framePadding: s().string,
        height: s().string,
        heightMode: s().oneOf(["first", "current", "max"]),
        innerRef: s().oneOfType([
          s().func,
          s().shape({ current: s().elementType }),
        ]),
        initialSlideHeight: s().number,
        initialSlideWidth: s().number,
        keyCodeConfig: s().exact({
          previousSlide: s().arrayOf(s().number),
          nextSlide: s().arrayOf(s().number),
          firstSlide: s().arrayOf(s().number),
          lastSlide: s().arrayOf(s().number),
          pause: s().arrayOf(s().number),
        }),
        onDragStart: s().func,
        onResize: s().func,
        opacityScale: s().number,
        pauseOnHover: s().bool,
        renderAnnounceSlideMessage: s().func,
        renderBottomCenterControls: s().func,
        renderBottomLeftControls: s().func,
        renderBottomRightControls: s().func,
        renderCenterCenterControls: s().func,
        renderCenterLeftControls: s().func,
        renderCenterRightControls: s().func,
        renderTopCenterControls: s().func,
        renderTopLeftControls: s().func,
        renderTopRightControls: s().func,
        scrollMode: s().oneOf(["page", "remainder"]),
        slideIndex: s().number,
        slideListMargin: s().number,
        slideOffset: s().number,
        slidesToScroll: s().oneOfType([s().number, s().oneOf(["auto"])]),
        slidesToShow: s().number,
        slideWidth: s().oneOfType([s().string, s().number]),
        speed: s().number,
        swiping: s().bool,
        transitionMode: s().oneOf(["scroll", "fade", "scroll3d"]),
        vertical: s().bool,
        width: s().string,
        withoutControls: s().bool,
        wrapAround: s().bool,
      }),
        (re.defaultProps = {
          afterSlide: function () {},
          autoGenerateStyleTag: !0,
          autoplay: !1,
          autoplayInterval: 3e3,
          autoplayReverse: !1,
          beforeSlide: function () {},
          cellAlign: "left",
          cellSpacing: 0,
          getControlsContainerStyles: function () {},
          defaultControlsConfig: {},
          disableAnimation: !1,
          disableEdgeSwiping: !1,
          dragging: !0,
          easing: "easeCircleOut",
          edgeEasing: "easeElasticOut",
          enableKeyboardControls: !1,
          frameOverflow: "hidden",
          framePadding: "0px",
          height: "inherit",
          heightMode: "max",
          keyCodeConfig: {},
          onDragStart: function () {},
          onResize: function () {},
          pauseOnHover: !0,
          renderAnnounceSlideMessage: function (t) {
            var e = t.currentSlide,
              n = t.slideCount;
            return "Slide ".concat(e + 1, " of ").concat(n);
          },
          renderBottomCenterControls: function (t) {
            return i.createElement(tt, t);
          },
          renderCenterLeftControls: function (t) {
            return i.createElement(Q, t);
          },
          renderCenterRightControls: function (t) {
            return i.createElement(J, t);
          },
          scrollMode: "remainder",
          slideIndex: 0,
          slideListMargin: 10,
          slideOffset: 25,
          slidesToScroll: 1,
          slidesToShow: 1,
          slideWidth: 1,
          speed: 500,
          style: {},
          swiping: !0,
          transitionMode: "scroll",
          vertical: !1,
          width: "100%",
          withoutControls: !1,
          wrapAround: !1,
        });
    },
    16512: function (t, e, n) {
      "use strict";
      function r(t) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          r(t)
        );
      }
      e.Z = void 0;
      var i = (function (t, e) {
          if (!e && t && t.__esModule) return t;
          if (null === t || ("object" !== r(t) && "function" !== typeof t))
            return { default: t };
          var n = l(e);
          if (n && n.has(t)) return n.get(t);
          var i = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var s in t)
            if ("default" !== s && Object.prototype.hasOwnProperty.call(t, s)) {
              var a = o ? Object.getOwnPropertyDescriptor(t, s) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(i, s, a)
                : (i[s] = t[s]);
            }
          (i.default = t), n && n.set(t, i);
          return i;
        })(n(67294)),
        o = (a(n(45697)), a(n(15588))),
        s = n(74800);
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function l(t) {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap(),
          n = new WeakMap();
        return (l = function (t) {
          return t ? n : e;
        })(t);
      }
      function u(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function d(t, e) {
        return (
          (d =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          d(t, e)
        );
      }
      function h(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = f(t);
          if (e) {
            var i = f(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return p(this, n);
        };
      }
      function p(t, e) {
        return !e || ("object" !== r(e) && "function" !== typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function f(t) {
        return (
          (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          f(t)
        );
      }
      var g = function () {
          return "$$key$$";
        },
        v = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && d(t, e);
          })(a, t);
          var e,
            n,
            r,
            s = h(a);
          function a() {
            return u(this, a), s.apply(this, arguments);
          }
          return (
            (e = a),
            (n = [
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.show,
                    n = t.start,
                    r = t.enter,
                    s = t.update,
                    a = t.leave,
                    l = t.interpolation,
                    u = t.children,
                    c = "function" === typeof n ? n() : n;
                  return i.default.createElement(
                    o.default,
                    {
                      data: e ? [c] : [],
                      start: function () {
                        return c;
                      },
                      keyAccessor: g,
                      interpolation: l,
                      enter:
                        "function" === typeof r
                          ? r
                          : function () {
                              return r;
                            },
                      update:
                        "function" === typeof s
                          ? s
                          : function () {
                              return s;
                            },
                      leave:
                        "function" === typeof a
                          ? a
                          : function () {
                              return a;
                            },
                    },
                    function (t) {
                      if (!t[0]) return null;
                      var e = u(t[0].state);
                      return e && i.default.Children.only(e);
                    }
                  );
                },
              },
            ]) && c(e.prototype, n),
            r && c(e, r),
            a
          );
        })(i.Component);
      (v.propTypes = {}),
        (v.defaultProps = { show: !0, interpolation: s.numeric });
      var y = v;
      e.Z = y;
    },
    15588: function (t, e, n) {
      "use strict";
      function r(t) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          r(t)
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = (function (t, e) {
          if (!e && t && t.__esModule) return t;
          if (null === t || ("object" !== r(t) && "function" !== typeof t))
            return { default: t };
          var n = c(e);
          if (n && n.has(t)) return n.get(t);
          var i = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var s in t)
            if ("default" !== s && Object.prototype.hasOwnProperty.call(t, s)) {
              var a = o ? Object.getOwnPropertyDescriptor(t, s) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(i, s, a)
                : (i[s] = t[s]);
            }
          (i.default = t), n && n.set(t, i);
          return i;
        })(n(67294)),
        o = (u(n(45697)), n(88770)),
        s = u(n(16014)),
        a = n(15594),
        l = n(74800);
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function c(t) {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap(),
          n = new WeakMap();
        return (c = function (t) {
          return t ? n : e;
        })(t);
      }
      function d(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function h(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function p(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && f(t, e);
      }
      function f(t, e) {
        return (
          (f =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          f(t, e)
        );
      }
      function g(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = b(t);
          if (e) {
            var i = b(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return v(this, n);
        };
      }
      function v(t, e) {
        return !e || ("object" !== r(e) && "function" !== typeof e) ? y(t) : e;
      }
      function y(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function b(t) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          b(t)
        );
      }
      function m(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var S = (function (t) {
        p(u, t);
        var e,
          n,
          r,
          l = g(u);
        function u(t) {
          var e;
          d(this, u),
            m(y((e = l.call(this, t))), "animate", function () {
              var t = e.state,
                n = t.nodeKeys,
                r = t.nodeHash;
              if (!e.unmounting) {
                for (var i = !1, o = [], s = n.length, l = 0; l < s; l++) {
                  var u = n[l],
                    c = r[u],
                    d = c.isTransitioning();
                  d && (i = !0),
                    c.type !== a.LEAVE || d ? o.push(u) : delete r[u];
                }
                i || e.interval.stop(),
                  e.setState(function () {
                    return {
                      nodeKeys: o,
                      nodes: o.map(function (t) {
                        return r[t];
                      }),
                    };
                  });
              }
            }),
            m(y(e), "interval", null),
            m(y(e), "unmounting", !1);
          var n = t.interpolation,
            r = (function (t) {
              p(r, t);
              var e = g(r);
              function r(t, i) {
                var o;
                return (
                  d(this, r),
                  m(y((o = e.call(this))), "getInterpolator", n),
                  (o.key = t),
                  (o.data = i),
                  (o.type = a.ENTER),
                  o
                );
              }
              return r;
            })(o.BaseNode);
          return (
            (e.state = {
              Node: r,
              nodeKeys: [],
              nodeHash: {},
              nodes: [],
              data: null,
            }),
            e
          );
        }
        return (
          (e = u),
          (r = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                if (t.data !== e.data) {
                  for (
                    var n = t.data,
                      r = t.keyAccessor,
                      i = t.start,
                      o = t.enter,
                      l = t.update,
                      u = t.leave,
                      c = e.Node,
                      d = e.nodeKeys,
                      h = e.nodeHash,
                      p = {},
                      f = 0;
                    f < d.length;
                    f++
                  )
                    p[d[f]] = f;
                  for (var g = {}, v = [], y = 0; y < n.length; y++) {
                    var b = n[y],
                      m = r(b, y);
                    if (((g[m] = y), v.push(m), void 0 === p[m])) {
                      var S = new c();
                      (S.key = m), (S.data = b), (S.type = a.ENTER), (h[m] = S);
                    }
                  }
                  for (var w = 0; w < d.length; w++) {
                    var O = d[w],
                      T = h[O];
                    void 0 !== g[O]
                      ? ((T.data = n[g[O]]), (T.type = a.UPDATE))
                      : (T.type = a.LEAVE);
                  }
                  for (
                    var C = (0, s.default)(d, p, v, g), M = 0;
                    M < C.length;
                    M++
                  ) {
                    var k = C[M],
                      E = h[k],
                      _ = E.data;
                    E.type === a.ENTER
                      ? (E.setState(i(_, g[k])), E.transition(o(_, g[k])))
                      : E.type === a.LEAVE
                      ? E.transition(u(_, p[k]))
                      : E.transition(l(_, g[k]));
                  }
                  return {
                    data: n,
                    nodes: C.map(function (t) {
                      return h[t];
                    }),
                    nodeHash: h,
                    nodeKeys: C,
                  };
                }
                return null;
              },
            },
          ]),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.startInterval();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t) {
                t.data === this.props.data ||
                  this.unmounting ||
                  this.startInterval();
              },
            },
            {
              key: "startInterval",
              value: function () {
                this.interval
                  ? this.interval.restart(this.animate)
                  : (this.interval = (0, o.interval)(this.animate));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                var t = this.state,
                  e = t.nodeKeys,
                  n = t.nodeHash;
                (this.unmounting = !0),
                  this.interval && this.interval.stop(),
                  e.forEach(function (t) {
                    n[t].stopTransitions();
                  });
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props.children(this.state.nodes);
                return t && i.default.Children.only(t);
              },
            },
          ]) && h(e.prototype, n),
          r && h(e, r),
          u
        );
      })(i.Component);
      (S.propTypes = {}),
        (S.defaultProps = {
          enter: function () {},
          update: function () {},
          leave: function () {},
          interpolation: l.numeric,
        });
      var w = S;
      e.default = w;
    },
    16014: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = function (t, e, n, r) {
        for (var i = [], o = 0; o < n.length; o++) i[o] = n[o];
        for (var s = 0; s < t.length; s++) void 0 === r[t[s]] && i.push(t[s]);
        return i.sort(function (t, i) {
          var o = r[t],
            s = r[i],
            a = e[t],
            l = e[i];
          if (null != o && null != s) return r[t] - r[i];
          if (null != a && null != l) return e[t] - e[i];
          if (null != o) {
            for (var u = 0; u < n.length; u++) {
              var c = n[u];
              if (e[c]) {
                if (o < r[c] && l > e[c]) return -1;
                if (o > r[c] && l < e[c]) return 1;
              }
            }
            return 1;
          }
          for (var d = 0; d < n.length; d++) {
            var h = n[d];
            if (e[h]) {
              if (s < r[h] && a > e[h]) return 1;
              if (s > r[h] && a < e[h]) return -1;
            }
          }
          return -1;
        });
      };
      e.default = n;
    },
    15594: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LEAVE = e.UPDATE = e.ENTER = void 0);
      e.ENTER = "ENTER";
      e.UPDATE = "UPDATE";
      e.LEAVE = "LEAVE";
    },
    74800: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.numeric = function (t, e) {
          var n = +t,
            r = +e - n;
          return function (t) {
            return n + r * t;
          };
        });
    },
    41102: function () {
      var t = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })();
      function e(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      !(function () {
        if ("undefined" !== typeof window) {
          var n = Array.prototype.slice,
            r =
              Element.prototype.matches || Element.prototype.msMatchesSelector,
            i = [
              "a[href]",
              "area[href]",
              "input:not([disabled])",
              "select:not([disabled])",
              "textarea:not([disabled])",
              "button:not([disabled])",
              "details",
              "summary",
              "iframe",
              "object",
              "embed",
              "[contenteditable]",
            ].join(","),
            o = (function () {
              function o(t, n) {
                e(this, o),
                  (this._inertManager = n),
                  (this._rootElement = t),
                  (this._managedNodes = new Set()),
                  this._rootElement.hasAttribute("aria-hidden")
                    ? (this._savedAriaHidden =
                        this._rootElement.getAttribute("aria-hidden"))
                    : (this._savedAriaHidden = null),
                  this._rootElement.setAttribute("aria-hidden", "true"),
                  this._makeSubtreeUnfocusable(this._rootElement),
                  (this._observer = new MutationObserver(
                    this._onMutation.bind(this)
                  )),
                  this._observer.observe(this._rootElement, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                  });
              }
              return (
                t(o, [
                  {
                    key: "destructor",
                    value: function () {
                      this._observer.disconnect(),
                        this._rootElement &&
                          (null !== this._savedAriaHidden
                            ? this._rootElement.setAttribute(
                                "aria-hidden",
                                this._savedAriaHidden
                              )
                            : this._rootElement.removeAttribute("aria-hidden")),
                        this._managedNodes.forEach(function (t) {
                          this._unmanageNode(t.node);
                        }, this),
                        (this._observer = null),
                        (this._rootElement = null),
                        (this._managedNodes = null),
                        (this._inertManager = null);
                    },
                  },
                  {
                    key: "_makeSubtreeUnfocusable",
                    value: function (t) {
                      var e = this;
                      u(t, function (t) {
                        return e._visitNode(t);
                      });
                      var n = document.activeElement;
                      if (!document.body.contains(t)) {
                        for (var r = t, i = void 0; r; ) {
                          if (r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                            i = r;
                            break;
                          }
                          r = r.parentNode;
                        }
                        i && (n = i.activeElement);
                      }
                      t.contains(n) &&
                        (n.blur(),
                        n === document.activeElement && document.body.focus());
                    },
                  },
                  {
                    key: "_visitNode",
                    value: function (t) {
                      if (t.nodeType === Node.ELEMENT_NODE) {
                        var e = t;
                        e !== this._rootElement &&
                          e.hasAttribute("inert") &&
                          this._adoptInertRoot(e),
                          (r.call(e, i) || e.hasAttribute("tabindex")) &&
                            this._manageNode(e);
                      }
                    },
                  },
                  {
                    key: "_manageNode",
                    value: function (t) {
                      var e = this._inertManager.register(t, this);
                      this._managedNodes.add(e);
                    },
                  },
                  {
                    key: "_unmanageNode",
                    value: function (t) {
                      var e = this._inertManager.deregister(t, this);
                      e && this._managedNodes.delete(e);
                    },
                  },
                  {
                    key: "_unmanageSubtree",
                    value: function (t) {
                      var e = this;
                      u(t, function (t) {
                        return e._unmanageNode(t);
                      });
                    },
                  },
                  {
                    key: "_adoptInertRoot",
                    value: function (t) {
                      var e = this._inertManager.getInertRoot(t);
                      e ||
                        (this._inertManager.setInert(t, !0),
                        (e = this._inertManager.getInertRoot(t))),
                        e.managedNodes.forEach(function (t) {
                          this._manageNode(t.node);
                        }, this);
                    },
                  },
                  {
                    key: "_onMutation",
                    value: function (t, e) {
                      t.forEach(function (t) {
                        var e = t.target;
                        if ("childList" === t.type)
                          n.call(t.addedNodes).forEach(function (t) {
                            this._makeSubtreeUnfocusable(t);
                          }, this),
                            n.call(t.removedNodes).forEach(function (t) {
                              this._unmanageSubtree(t);
                            }, this);
                        else if ("attributes" === t.type)
                          if ("tabindex" === t.attributeName)
                            this._manageNode(e);
                          else if (
                            e !== this._rootElement &&
                            "inert" === t.attributeName &&
                            e.hasAttribute("inert")
                          ) {
                            this._adoptInertRoot(e);
                            var r = this._inertManager.getInertRoot(e);
                            this._managedNodes.forEach(function (t) {
                              e.contains(t.node) && r._manageNode(t.node);
                            });
                          }
                      }, this);
                    },
                  },
                  {
                    key: "managedNodes",
                    get: function () {
                      return new Set(this._managedNodes);
                    },
                  },
                  {
                    key: "hasSavedAriaHidden",
                    get: function () {
                      return null !== this._savedAriaHidden;
                    },
                  },
                  {
                    key: "savedAriaHidden",
                    set: function (t) {
                      this._savedAriaHidden = t;
                    },
                    get: function () {
                      return this._savedAriaHidden;
                    },
                  },
                ]),
                o
              );
            })(),
            s = (function () {
              function n(t, r) {
                e(this, n),
                  (this._node = t),
                  (this._overrodeFocusMethod = !1),
                  (this._inertRoots = new Set([r])),
                  (this._savedTabIndex = null),
                  (this._destroyed = !1),
                  this.ensureUntabbable();
              }
              return (
                t(n, [
                  {
                    key: "destructor",
                    value: function () {
                      if (
                        (this._throwIfDestroyed(),
                        this._node && this._node.nodeType === Node.ELEMENT_NODE)
                      ) {
                        var t = this._node;
                        null !== this._savedTabIndex
                          ? t.setAttribute("tabindex", this._savedTabIndex)
                          : t.removeAttribute("tabindex"),
                          this._overrodeFocusMethod && delete t.focus;
                      }
                      (this._node = null),
                        (this._inertRoots = null),
                        (this._destroyed = !0);
                    },
                  },
                  {
                    key: "_throwIfDestroyed",
                    value: function () {
                      if (this.destroyed)
                        throw new Error("Trying to access destroyed InertNode");
                    },
                  },
                  {
                    key: "ensureUntabbable",
                    value: function () {
                      if (this.node.nodeType === Node.ELEMENT_NODE) {
                        var t = this.node;
                        if (r.call(t, i)) {
                          if (-1 === t.tabIndex && this.hasSavedTabIndex)
                            return;
                          t.hasAttribute("tabindex") &&
                            (this._savedTabIndex = t.tabIndex),
                            t.setAttribute("tabindex", "-1"),
                            t.nodeType === Node.ELEMENT_NODE &&
                              ((t.focus = function () {}),
                              (this._overrodeFocusMethod = !0));
                        } else
                          t.hasAttribute("tabindex") &&
                            ((this._savedTabIndex = t.tabIndex),
                            t.removeAttribute("tabindex"));
                      }
                    },
                  },
                  {
                    key: "addInertRoot",
                    value: function (t) {
                      this._throwIfDestroyed(), this._inertRoots.add(t);
                    },
                  },
                  {
                    key: "removeInertRoot",
                    value: function (t) {
                      this._throwIfDestroyed(),
                        this._inertRoots.delete(t),
                        0 === this._inertRoots.size && this.destructor();
                    },
                  },
                  {
                    key: "destroyed",
                    get: function () {
                      return this._destroyed;
                    },
                  },
                  {
                    key: "hasSavedTabIndex",
                    get: function () {
                      return null !== this._savedTabIndex;
                    },
                  },
                  {
                    key: "node",
                    get: function () {
                      return this._throwIfDestroyed(), this._node;
                    },
                  },
                  {
                    key: "savedTabIndex",
                    set: function (t) {
                      this._throwIfDestroyed(), (this._savedTabIndex = t);
                    },
                    get: function () {
                      return this._throwIfDestroyed(), this._savedTabIndex;
                    },
                  },
                ]),
                n
              );
            })(),
            a = (function () {
              function i(t) {
                if ((e(this, i), !t))
                  throw new Error(
                    "Missing required argument; InertManager needs to wrap a document."
                  );
                (this._document = t),
                  (this._managedNodes = new Map()),
                  (this._inertRoots = new Map()),
                  (this._observer = new MutationObserver(
                    this._watchForInert.bind(this)
                  )),
                  c(t.head || t.body || t.documentElement),
                  "loading" === t.readyState
                    ? t.addEventListener(
                        "DOMContentLoaded",
                        this._onDocumentLoaded.bind(this)
                      )
                    : this._onDocumentLoaded();
              }
              return (
                t(i, [
                  {
                    key: "setInert",
                    value: function (t, e) {
                      if (e) {
                        if (this._inertRoots.has(t)) return;
                        var n = new o(t, this);
                        if (
                          (t.setAttribute("inert", ""),
                          this._inertRoots.set(t, n),
                          !this._document.body.contains(t))
                        )
                          for (var r = t.parentNode; r; )
                            11 === r.nodeType && c(r), (r = r.parentNode);
                      } else {
                        if (!this._inertRoots.has(t)) return;
                        this._inertRoots.get(t).destructor(),
                          this._inertRoots.delete(t),
                          t.removeAttribute("inert");
                      }
                    },
                  },
                  {
                    key: "getInertRoot",
                    value: function (t) {
                      return this._inertRoots.get(t);
                    },
                  },
                  {
                    key: "register",
                    value: function (t, e) {
                      var n = this._managedNodes.get(t);
                      return (
                        void 0 !== n ? n.addInertRoot(e) : (n = new s(t, e)),
                        this._managedNodes.set(t, n),
                        n
                      );
                    },
                  },
                  {
                    key: "deregister",
                    value: function (t, e) {
                      var n = this._managedNodes.get(t);
                      return n
                        ? (n.removeInertRoot(e),
                          n.destroyed && this._managedNodes.delete(t),
                          n)
                        : null;
                    },
                  },
                  {
                    key: "_onDocumentLoaded",
                    value: function () {
                      n
                        .call(this._document.querySelectorAll("[inert]"))
                        .forEach(function (t) {
                          this.setInert(t, !0);
                        }, this),
                        this._observer.observe(
                          this._document.body || this._document.documentElement,
                          { attributes: !0, subtree: !0, childList: !0 }
                        );
                    },
                  },
                  {
                    key: "_watchForInert",
                    value: function (t, e) {
                      var i = this;
                      t.forEach(function (t) {
                        switch (t.type) {
                          case "childList":
                            n.call(t.addedNodes).forEach(function (t) {
                              if (t.nodeType === Node.ELEMENT_NODE) {
                                var e = n.call(t.querySelectorAll("[inert]"));
                                r.call(t, "[inert]") && e.unshift(t),
                                  e.forEach(function (t) {
                                    this.setInert(t, !0);
                                  }, i);
                              }
                            }, i);
                            break;
                          case "attributes":
                            if ("inert" !== t.attributeName) return;
                            var e = t.target,
                              o = e.hasAttribute("inert");
                            i.setInert(e, o);
                        }
                      }, this);
                    },
                  },
                ]),
                i
              );
            })();
          if (!HTMLElement.prototype.hasOwnProperty("inert")) {
            var l = new a(document);
            Object.defineProperty(HTMLElement.prototype, "inert", {
              enumerable: !0,
              get: function () {
                return this.hasAttribute("inert");
              },
              set: function (t) {
                l.setInert(this, t);
              },
            });
          }
        }
        function u(t, e, n) {
          if (t.nodeType == Node.ELEMENT_NODE) {
            var r = t;
            e && e(r);
            var i = r.shadowRoot;
            if (i) return void u(i, e, i);
            if ("content" == r.localName) {
              for (
                var o = r,
                  s = o.getDistributedNodes ? o.getDistributedNodes() : [],
                  a = 0;
                a < s.length;
                a++
              )
                u(s[a], e, n);
              return;
            }
            if ("slot" == r.localName) {
              for (
                var l = r,
                  c = l.assignedNodes ? l.assignedNodes({ flatten: !0 }) : [],
                  d = 0;
                d < c.length;
                d++
              )
                u(c[d], e, n);
              return;
            }
          }
          for (var h = t.firstChild; null != h; )
            u(h, e, n), (h = h.nextSibling);
        }
        function c(t) {
          if (!t.querySelector("style#inert-style, link#inert-style")) {
            var e = document.createElement("style");
            e.setAttribute("id", "inert-style"),
              (e.textContent =
                "\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n"),
              t.appendChild(e);
          }
        }
      })();
    },
    33740: function (t, e, n) {
      "use strict";
      var r = n(67294);
      const i = r.forwardRef(function (t, e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true",
              ref: e,
            },
            t
          ),
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
            clipRule: "evenodd",
          })
        );
      });
      e.Z = i;
    },
  },
]);
