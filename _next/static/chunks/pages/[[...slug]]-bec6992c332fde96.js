(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [120],
  {
    69805: function (e, l, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[[...slug]]",
        function () {
          return t(57115);
        },
      ]);
    },
    57115: function (e, l, t) {
      "use strict";
      t.r(l),
        t.d(l, {
          __N_SSP: function () {
            return ne;
          },
          default: function () {
            return ae;
          },
        });
      var n = t(85893),
        a = (t(78546), t(60869)),
        r = t(67294);
      function s(e, l, t) {
        return (
          l in e
            ? Object.defineProperty(e, l, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[l] = t),
          e
        );
      }
      function c(e) {
        for (var l = 1; l < arguments.length; l++) {
          var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (l) {
              s(e, l, t[l]);
            });
        }
        return e;
      }
      function o(e) {
        var l = e.website,
          t = e.block,
          s = (0, r.useState)(null),
          o = s[0],
          i = s[1],
          u = (0, r.useState)(null),
          d = u[0],
          m = u[1],
          x = (0, r.useState)(null),
          f = x[0],
          v = x[1],
          h = (0, r.useState)(null),
          b = h[0],
          g = h[1],
          p = (0, r.useState)("#111827"),
          j = p[0],
          y = p[1];
        return (
          (0, r.useEffect)(
            function () {
              t && (i(t.content), m(t.by), v(t.align), g(t.background));
            },
            [t]
          ),
          (0, r.useEffect)(
            function () {
              b && y((0, a.$O)(b));
            },
            [b]
          ),
          (0, n.jsx)("section", {
            className: "flex-shrink-0",
            style: { backgroundColor: b },
            children: (0, n.jsx)("div", {
              className: (0, a.AK)(
                "container mx-auto py-12 lg:py-14 xl:py-20 px-6 "
              ),
              children: (0, n.jsxs)("div", {
                className: (0, a.AK)(
                  "max-w-5xl",
                  "text-".concat(f),
                  "".concat(
                    "left" === f
                      ? "ml-0 mr-auto"
                      : "right" === f
                      ? "ml-auto mr-0"
                      : "mx-auto"
                  )
                ),
                children: [
                  o &&
                    (0, n.jsx)("h3", {
                      className: (0, a.AK)(
                        "text-xl lg:text-2xl xl:text-h3 mb-4 font-medium"
                      ),
                      style: c({ color: j }, (0, a.j2)(l)),
                      children: o,
                    }),
                  d &&
                    (0, n.jsx)("p", {
                      className: (0, a.AK)("text-sm lg:text-body xl:text-2xl"),
                      style: { color: j },
                      children: d,
                    }),
                ],
              }),
            }),
          })
        );
      }
      var i = t(29260),
        u = t.n(i),
        d = t(14844),
        m = t(41984),
        x = t(3677),
        f = t(11355),
        v = t(60445),
        h = t(43751);
      function b(e) {
        var l,
          t = e.pictures,
          s = e.selected,
          c = e.aspectRatio,
          o = e.cornerRadius,
          i = e.open,
          b = e.setOpen,
          g = (0, a.ac)("(min-width: 1920px)"),
          p = (0, a.ac)("(min-width: 1440px)"),
          j = (0, a.ac)("(min-width: 1280px)"),
          y = (0, a.ac)("(min-width: 1024px)"),
          w = (0, a.ac)("(min-width: 768px)");
        return (0, n.jsx)(f.u, {
          appear: !0,
          show: i,
          as: r.Fragment,
          children: (0, n.jsxs)(v.V, {
            as: "div",
            className: "relative z-max",
            onClose: function () {
              return b(!1);
            },
            children: [
              (0, n.jsx)(f.u.Child, {
                as: r.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, n.jsx)("div", {
                  className:
                    "fixed inset-0 bg-white bg-opacity-10 backdrop-blur-xl",
                }),
              }),
              (0, n.jsx)("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: (0, n.jsx)("div", {
                  className:
                    "flex w-full h-screen items-center justify-center text-center",
                  children: (0, n.jsx)(f.u.Child, {
                    as: r.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: (0, n.jsxs)(v.V.Panel, {
                      className:
                        "w-full transform overflow-hidden transition-all",
                      children: [
                        (0, n.jsx)("div", {
                          className: "text-right p-6",
                          children: (0, n.jsx)("button", {
                            type: "button",
                            className:
                              "text-gray-900 focus:outline-none hover:text-gray-700 transition-all",
                            onClick: function () {
                              return b(!1);
                            },
                            children: (0, n.jsx)(h.Z, {
                              className: "h-6 w-6 lg:h-12 lg:w-12",
                              "aria-hidden": "true",
                            }),
                          }),
                        }),
                        (null === t || void 0 === t ? void 0 : t.length) > 0 &&
                          (0, n.jsx)(d.ZP, {
                            slideIndex: s,
                            cellSpacing: y ? 40 : w ? 32 : 12,
                            cellAlign: "center",
                            slidesToShow:
                              ((l = c),
                              "1:1" === l
                                ? g
                                  ? 3
                                  : y
                                  ? 2.5
                                  : 1.25
                                : "2:3" === l
                                ? g
                                  ? 3.5
                                  : p
                                  ? 3
                                  : j
                                  ? 2.5
                                  : 3
                                : j
                                ? 1.5
                                : y
                                ? 1.25
                                : 1.15),
                            wrapAround: !0,
                            transitionMode: "scroll",
                            defaultControlsConfig: {
                              nextButtonClassName: w ? "" : "hidden",
                              nextButtonStyle: { background: "transparent" },
                              nextButtonText: (0, n.jsx)(m.Z, {
                                className: "w-6 lg:w-12 h-6 lg:h-12",
                              }),
                              prevButtonClassName: w ? "" : "hidden",
                              prevButtonStyle: { background: "transparent" },
                              prevButtonText: (0, n.jsx)(x.Z, {
                                className: "w-6 lg:w-12 h-6 lg:h-12",
                              }),
                            },
                            renderBottomCenterControls: function (e) {
                              return (0, n.jsx)("ul", {
                                className:
                                  "flex gap-4 lg:gap-5 mt-4 md:mt-10 mb-6",
                                children: t.map(function (l, t) {
                                  return (0, n.jsx)(
                                    "li",
                                    {
                                      children: (0, n.jsx)("button", {
                                        className: (0, a.AK)(
                                          "w-2.5 h-2.5 rounded-full transition-all",
                                          e.currentSlide === t &&
                                            "bg-gray-900 ring-4 ring-gray-500",
                                          e.currentSlide > t && "bg-gray-900",
                                          e.currentSlide < t && "bg-gray-500"
                                        ),
                                        onClick: function () {
                                          return e.goToSlide(t);
                                        },
                                      }),
                                    },
                                    t
                                  );
                                }),
                              });
                            },
                            children: t.map(function (e) {
                              return (0,
                              n.jsx)("div", { className: (0, a.AK)("relative overflow-hidden", ((l = c), "1:1" === l ? "aspect-w-1 aspect-h-1" : "2:3" === l ? "aspect-w-2 aspect-h-3" : "3:2" === l ? "aspect-w-3 aspect-h-2" : "aspect-w-16 aspect-h-9"), o), children: (0, n.jsx)(u(), { src: e.url, layout: "fill", objectFit: "cover", alt: e.alt, className: (0, a.AK)("w-full h-full object-center object-cover") }) }, e._id);
                              var l;
                            }),
                          }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function g(e, l, t) {
        return (
          l in e
            ? Object.defineProperty(e, l, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[l] = t),
          e
        );
      }
      function p(e) {
        for (var l = 1; l < arguments.length; l++) {
          var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (l) {
              g(e, l, t[l]);
            });
        }
        return e;
      }
      function j(e) {
        var l,
          t = e.website,
          s = e.block,
          c = (0, r.useState)(!1),
          o = c[0],
          i = c[1],
          f = (0, r.useState)(null),
          v = f[0],
          h = f[1],
          g = (0, r.useState)(null),
          j = g[0],
          y = g[1],
          w = (0, r.useState)([]),
          N = w[0],
          k = w[1],
          S = (0, r.useState)(null),
          O = S[0],
          F = S[1],
          A = (0, r.useState)(null),
          C = A[0],
          K = A[1],
          P = (0, r.useState)("#FFFFFF"),
          E = P[0],
          _ = P[1],
          B = (0, r.useState)("#111827"),
          W = B[0],
          T = B[1],
          R = (0, a.ac)("(min-width: 1920px)"),
          Z = (0, a.ac)("(min-width: 1280px)"),
          $ = (0, a.ac)("(min-width: 1024px)"),
          z = (0, a.ac)("(min-width: 768px)"),
          D = function (e) {
            return "1:1" === e
              ? "aspect-w-1 aspect-h-1"
              : "2:3" === e
              ? "aspect-w-2 aspect-h-3"
              : "3:2" === e
              ? "aspect-w-3 aspect-h-2"
              : "aspect-w-16 aspect-h-9";
          },
          M = function (e) {
            return "small" === e
              ? "rounded-sm md:rounded-md lg:rounded-lg"
              : "medium" === e
              ? "rounded-lg md:rounded-xl lg:rounded-2xl"
              : "large" === e
              ? "rounded-2xl md:rounded-3xl lg:rounded-4xl"
              : "";
          },
          q = function (e) {
            (null === s || void 0 === s ? void 0 : s.allowFullscreen) &&
              $ &&
              (i(!0), h(e));
          },
          I = function () {
            return (null === s || void 0 === s ? void 0 : s.allowFullscreen) &&
              $
              ? "hover:opacity-70 cursor-pointer transition-opacity"
              : "";
          };
        return (
          (0, r.useEffect)(
            function () {
              s &&
                (y(s.headline),
                k(s.pictures || []),
                F(s.aspectRatio),
                K(s.cornerRadius),
                _(s.background));
            },
            [s]
          ),
          (0, r.useEffect)(
            function () {
              E && T((0, a.$O)(E));
            },
            [E]
          ),
          (0, n.jsxs)("section", {
            className: "flex-shrink-0",
            style: { backgroundColor: E },
            children: [
              (0, n.jsxs)("div", {
                className: "py-12 lg:py-14 xl:py-20",
                children: [
                  (0, n.jsx)("div", {
                    className: "container mx-auto px-6",
                    children:
                      j &&
                      (0, n.jsx)("h2", {
                        className:
                          "text-h3 lg:text-h1 font-medium mb-4 lg:mb-10",
                        style: p({ color: W }, (0, a.j2)(t)),
                        children: j,
                      }),
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "carousel" !==
                        (null === s || void 0 === s ? void 0 : s.style) &&
                      "container mx-auto px-6",
                    children:
                      "carousel" ===
                      (null === s || void 0 === s ? void 0 : s.style)
                        ? (0, n.jsx)(n.Fragment, {
                            children:
                              N.length > 0 &&
                              (0, n.jsx)(d.ZP, {
                                cellSpacing: $ ? 40 : z ? 32 : 12,
                                cellAlign: "center",
                                slidesToShow:
                                  ((l = O),
                                  "1:1" === l
                                    ? R
                                      ? 3
                                      : $
                                      ? 2.5
                                      : 1.25
                                    : "2:3" === l
                                    ? R
                                      ? 4
                                      : Z
                                      ? 3.5
                                      : $
                                      ? 3
                                      : z
                                      ? 2.5
                                      : 1.5
                                    : "3:2" === l && R
                                    ? 1.75
                                    : Z
                                    ? 1.5
                                    : $
                                    ? 1.25
                                    : 1.15),
                                wrapAround: !0,
                                transitionMode: "scroll",
                                defaultControlsConfig: {
                                  nextButtonClassName: z ? "" : "hidden",
                                  nextButtonStyle: {
                                    background: "transparent",
                                  },
                                  nextButtonText: (0, n.jsx)(m.Z, {
                                    className: "w-6 lg:w-12 h-6 lg:h-12",
                                  }),
                                  prevButtonClassName: z ? "" : "hidden",
                                  prevButtonStyle: {
                                    background: "transparent",
                                  },
                                  prevButtonText: (0, n.jsx)(x.Z, {
                                    className: "w-6 lg:w-12 h-6 lg:h-12",
                                  }),
                                },
                                renderBottomCenterControls: function (e) {
                                  return (0, n.jsx)("ul", {
                                    className:
                                      "flex gap-4 lg:gap-5 mt-4 md:mt-10",
                                    children: N.map(function (l, t) {
                                      return (0, n.jsx)(
                                        "li",
                                        {
                                          children: (0, n.jsx)("button", {
                                            className: (0, a.AK)(
                                              "w-2.5 h-2.5 rounded-full transition-all",
                                              e.currentSlide === t &&
                                                "bg-gray-900 ring-4 ring-gray-200",
                                              e.currentSlide > t &&
                                                ("#000000" === W
                                                  ? "bg-gray-600"
                                                  : "bg-gray-200"),
                                              e.currentSlide < t &&
                                                ("#000000" === W
                                                  ? "bg-gray-900"
                                                  : "bg-gray-50")
                                            ),
                                            onClick: function () {
                                              return e.goToSlide(t);
                                            },
                                          }),
                                        },
                                        t
                                      );
                                    }),
                                  });
                                },
                                children: N.map(function (e) {
                                  return (0,
                                  n.jsx)("div", { className: (0, a.AK)("relative overflow-hidden cursor-auto", D(O), M(C)), children: (0, n.jsx)(u(), { src: e.url, layout: "fill", objectFit: "cover", alt: e.alt, className: (0, a.AK)("w-full h-full object-center object-cover") }) }, e._id);
                                }),
                              }),
                          })
                        : (0, n.jsx)(n.Fragment, {
                            children:
                              (1 === N.length &&
                                (0, n.jsx)("div", {
                                  className: "grid grid-cols-1 max-w-3xl",
                                  children: (0, n.jsx)("div", {
                                    className: (0, a.AK)(
                                      "relative overflow-hidden",
                                      D(O),
                                      I()
                                    ),
                                    onClick: function () {
                                      return q(0);
                                    },
                                    children: (0, n.jsx)(u(), {
                                      src: N[0].url,
                                      layout: "fill",
                                      objectFit: "cover",
                                      alt: N[0].alt,
                                      className: (0, a.AK)(
                                        "w-full h-full object-center object-cover",
                                        M(C)
                                      ),
                                    }),
                                  }),
                                })) ||
                              (2 === N.length &&
                                (0, n.jsx)("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10",
                                  children: N.map(function (e, l) {
                                    return (0, n.jsx)(
                                      "div",
                                      {
                                        className: (0, a.AK)(
                                          "relative overflow-hidden",
                                          D(O),
                                          I()
                                        ),
                                        onClick: function () {
                                          return q(l);
                                        },
                                        children: (0, n.jsx)(u(), {
                                          src: e.url,
                                          layout: "fill",
                                          objectFit: "cover",
                                          alt: e.alt,
                                          className: (0, a.AK)(
                                            "w-full h-full object-center object-cover",
                                            M(C)
                                          ),
                                        }),
                                      },
                                      l
                                    );
                                  }),
                                })) ||
                              ((3 === N.length ||
                                6 === N.length ||
                                9 === N.length ||
                                12 === N.length) &&
                                (0, n.jsx)("div", {
                                  className:
                                    "grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10",
                                  children: N.map(function (e, l) {
                                    return (0, n.jsx)(
                                      "div",
                                      {
                                        className: (0, a.AK)(
                                          "relative overflow-hidden",
                                          D(O),
                                          I()
                                        ),
                                        onClick: function () {
                                          return q(l);
                                        },
                                        children: (0, n.jsx)(u(), {
                                          src: e.url,
                                          layout: "fill",
                                          objectFit: "cover",
                                          alt: e.alt,
                                          className: (0, a.AK)(
                                            "w-full h-full object-center object-cover",
                                            M(C)
                                          ),
                                        }),
                                      },
                                      l
                                    );
                                  }),
                                })) ||
                              (4 === N.length &&
                                (0, n.jsx)("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10",
                                  children: N.map(function (e, l) {
                                    return (0, n.jsx)(
                                      "div",
                                      {
                                        className: (0, a.AK)(
                                          "relative overflow-hidden",
                                          D(O),
                                          I()
                                        ),
                                        onClick: function () {
                                          return q(l);
                                        },
                                        children: (0, n.jsx)(u(), {
                                          src: e.url,
                                          layout: "fill",
                                          objectFit: "cover",
                                          alt: e.alt,
                                          className: (0, a.AK)(
                                            "w-full h-full object-center object-cover",
                                            M(C)
                                          ),
                                        }),
                                      },
                                      l
                                    );
                                  }),
                                })) ||
                              (5 === N.length &&
                                (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 mb-6 md:mb-10",
                                      children: N.slice(0, 3).map(function (
                                        e,
                                        l
                                      ) {
                                        return (0, n.jsx)(
                                          "div",
                                          {
                                            className: (0, a.AK)(
                                              "relative overflow-hidden",
                                              D(O),
                                              I()
                                            ),
                                            onClick: function () {
                                              return q(l);
                                            },
                                            children: (0, n.jsx)(u(), {
                                              src: e.url,
                                              layout: "fill",
                                              objectFit: "cover",
                                              alt: e.alt,
                                              className: (0, a.AK)(
                                                "w-full h-full object-center object-cover",
                                                M(C)
                                              ),
                                            }),
                                          },
                                          l
                                        );
                                      }),
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10",
                                      children: N.slice(3, 5).map(function (
                                        e,
                                        l
                                      ) {
                                        return (0, n.jsx)(
                                          "div",
                                          {
                                            className: (0, a.AK)(
                                              "relative overflow-hidden",
                                              D(O),
                                              I()
                                            ),
                                            onClick: function () {
                                              return q(l);
                                            },
                                            children: (0, n.jsx)(u(), {
                                              src: e.url,
                                              layout: "fill",
                                              objectFit: "cover",
                                              alt: e.alt,
                                              className: (0, a.AK)(
                                                "w-full h-full object-center object-cover",
                                                M(C)
                                              ),
                                            }),
                                          },
                                          l
                                        );
                                      }),
                                    }),
                                  ],
                                })) ||
                              (7 === N.length &&
                                (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 mb-6 md:mb-10",
                                      children: N.slice(0, 3).map(function (
                                        e,
                                        l
                                      ) {
                                        return (0, n.jsx)(
                                          "div",
                                          {
                                            className: (0, a.AK)(
                                              "relative overflow-hidden",
                                              D(O),
                                              I()
                                            ),
                                            onClick: function () {
                                              return q(l);
                                            },
                                            children: (0, n.jsx)(u(), {
                                              src: e.url,
                                              layout: "fill",
                                              objectFit: "cover",
                                              alt: e.alt,
                                              className: (0, a.AK)(
                                                "w-full h-full object-center object-cover",
                                                M(C)
                                              ),
                                            }),
                                          },
                                          l
                                        );
                                      }),
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10",
                                      children: N.slice(3, 7).map(function (
                                        e,
                                        l
                                      ) {
                                        return (0, n.jsx)(
                                          "div",
                                          {
                                            className: (0, a.AK)(
                                              "relative overflow-hidden",
                                              D(O),
                                              I()
                                            ),
                                            onClick: function () {
                                              return q(l);
                                            },
                                            children: (0, n.jsx)(u(), {
                                              src: e.url,
                                              layout: "fill",
                                              objectFit: "cover",
                                              alt: e.alt,
                                              className: (0, a.AK)(
                                                "w-full h-full object-center object-cover",
                                                M(C)
                                              ),
                                            }),
                                          },
                                          l
                                        );
                                      }),
                                    }),
                                  ],
                                })) ||
                              (8 === N.length &&
                                (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 mb-6 md:mb-10",
                                      children: N.slice(0, 6).map(function (
                                        e,
                                        l
                                      ) {
                                        return (0, n.jsx)(
                                          "div",
                                          {
                                            className: (0, a.AK)(
                                              "relative overflow-hidden",
                                              D(O),
                                              I()
                                            ),
                                            onClick: function () {
                                              return q(l);
                                            },
                                            children: (0, n.jsx)(u(), {
                                              src: e.url,
                                              layout: "fill",
                                              objectFit: "cover",
                                              alt: e.alt,
                                              className: (0, a.AK)(
                                                "w-full h-full object-center object-cover",
                                                M(C)
                                              ),
                                            }),
                                          },
                                          l
                                        );
                                      }),
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10",
                                      children: N.slice(6, 8).map(function (
                                        e,
                                        l
                                      ) {
                                        return (0, n.jsx)(
                                          "div",
                                          {
                                            className: (0, a.AK)(
                                              "relative overflow-hidden",
                                              D(O),
                                              I()
                                            ),
                                            onClick: function () {
                                              return q(l);
                                            },
                                            children: (0, n.jsx)(u(), {
                                              src: e.url,
                                              layout: "fill",
                                              objectFit: "cover",
                                              alt: e.alt,
                                              className: (0, a.AK)(
                                                "w-full h-full object-center object-cover",
                                                M(C)
                                              ),
                                            }),
                                          },
                                          l
                                        );
                                      }),
                                    }),
                                  ],
                                })) ||
                              (10 === N.length &&
                                (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 mb--6 md:mb-10",
                                      children: N.slice(0, 6).map(function (
                                        e,
                                        l
                                      ) {
                                        return (0, n.jsx)(
                                          "div",
                                          {
                                            className: (0, a.AK)(
                                              "relative overflow-hidden",
                                              D(O),
                                              I()
                                            ),
                                            onClick: function () {
                                              return q(l);
                                            },
                                            children: (0, n.jsx)(u(), {
                                              src: e.url,
                                              layout: "fill",
                                              objectFit: "cover",
                                              alt: e.alt,
                                              className: (0, a.AK)(
                                                "w-full h-full object-center object-cover",
                                                M(C)
                                              ),
                                            }),
                                          },
                                          l
                                        );
                                      }),
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10",
                                      children: N.slice(6, 10).map(function (
                                        e,
                                        l
                                      ) {
                                        return (0, n.jsx)(
                                          "div",
                                          {
                                            className: (0, a.AK)(
                                              "relative overflow-hidden",
                                              D(O),
                                              I()
                                            ),
                                            onClick: function () {
                                              return q(l);
                                            },
                                            children: (0, n.jsx)(u(), {
                                              src: e.url,
                                              layout: "fill",
                                              objectFit: "cover",
                                              alt: e.alt,
                                              className: (0, a.AK)(
                                                "w-full h-full object-center object-cover",
                                                M(C)
                                              ),
                                            }),
                                          },
                                          l
                                        );
                                      }),
                                    }),
                                  ],
                                })) ||
                              (11 === N.length &&
                                (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 mb-6 md:mb-10",
                                      children: N.slice(0, 9).map(function (
                                        e,
                                        l
                                      ) {
                                        return (0, n.jsx)(
                                          "div",
                                          {
                                            className: (0, a.AK)(
                                              "relative overflow-hidden",
                                              D(O),
                                              I()
                                            ),
                                            onClick: function () {
                                              return q(l);
                                            },
                                            children: (0, n.jsx)(u(), {
                                              src: e.url,
                                              layout: "fill",
                                              objectFit: "cover",
                                              alt: e.alt,
                                              className: (0, a.AK)(
                                                "w-full h-full object-center object-cover",
                                                M(C)
                                              ),
                                            }),
                                          },
                                          l
                                        );
                                      }),
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10",
                                      children: N.slice(9, 11).map(function (
                                        e,
                                        l
                                      ) {
                                        return (0, n.jsx)(
                                          "div",
                                          {
                                            className: (0, a.AK)(
                                              "relative overflow-hidden",
                                              D(O),
                                              I()
                                            ),
                                            onClick: function () {
                                              return q(l);
                                            },
                                            children: (0, n.jsx)(u(), {
                                              src: e.url,
                                              layout: "fill",
                                              objectFit: "cover",
                                              alt: e.alt,
                                              className: (0, a.AK)(
                                                "w-full h-full object-center object-cover",
                                                M(C)
                                              ),
                                            }),
                                          },
                                          l
                                        );
                                      }),
                                    }),
                                  ],
                                })),
                          }),
                  }),
                ],
              }),
              (null === s || void 0 === s ? void 0 : s.allowFullscreen) &&
                (0, n.jsx)(b, {
                  website: t,
                  pictures: N,
                  selected: v,
                  aspectRatio: O,
                  cornerRadius: M(C),
                  open: o,
                  setOpen: i,
                }),
            ],
          })
        );
      }
      var y = t(13576);
      function w(e, l, t) {
        return (
          l in e
            ? Object.defineProperty(e, l, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[l] = t),
          e
        );
      }
      function N(e) {
        for (var l = 1; l < arguments.length; l++) {
          var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (l) {
              w(e, l, t[l]);
            });
        }
        return e;
      }
      var k = "#F3F4F6";
      function S(e) {
        var l,
          t = e.block,
          s = e.website,
          c = (0, r.useState)(null),
          o = c[0],
          i = c[1],
          u = (0, r.useState)(null),
          d = u[0],
          m = u[1],
          x = (0, r.useState)(null),
          f = x[0],
          v = x[1],
          h = (0, r.useState)(null),
          b = h[0],
          g = h[1],
          p = (0, r.useState)(null),
          j = p[0],
          w = p[1],
          S = (0, r.useState)("#111827"),
          O = S[0],
          F = S[1],
          A = function (e, l) {
            var t;
            return (
              (l /= 100),
              /^#([A-Fa-f0-9]{3}){1,2}$/.test(e)
                ? (3 === (t = e.substring(1).split("")).length &&
                    (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
                  "rgba(" +
                    [
                      ((t = "0x" + t.join("")) >> 16) & 255,
                      (t >> 8) & 255,
                      255 & t,
                    ].join(",") +
                    "," +
                    l +
                    ")")
                : e
            );
          };
        return (
          (0, r.useEffect)(
            function () {
              if (t) {
                var e, l, n, a;
                if (
                  (i(t.headline),
                  m(t.content),
                  v(t.button),
                  g(t.align),
                  "image" ===
                    (null === (e = t.background) || void 0 === e
                      ? void 0
                      : e.type) &&
                    (null === (l = t.background) || void 0 === l
                      ? void 0
                      : l.overlay))
                )
                  t.background.overlay = {
                    color: A(
                      (null === (n = t.background.overlay) || void 0 === n
                        ? void 0
                        : n.color) || "#000000",
                      (null === (a = t.background.overlay) || void 0 === a
                        ? void 0
                        : a.amount) || 50
                    ),
                    amount: 50,
                  };
                w(t.background);
              }
            },
            [t]
          ),
          (0, r.useEffect)(
            function () {
              var e;
              "image" === (null === j || void 0 === j ? void 0 : j.type)
                ? F(
                    (0, a.$O)(
                      (function (e) {
                        var l = e
                            .replace(/\s/g, "")
                            .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
                          t = l
                            ? (256 | l[1]).toString(16).slice(1) +
                              (256 | l[2]).toString(16).slice(1) +
                              (256 | l[3]).toString(16).slice(1)
                            : e;
                        return "#".concat(t);
                      })(
                        (null === (e = j.overlay) || void 0 === e
                          ? void 0
                          : e.color) || A(k)
                      )
                    )
                  )
                : F(
                    (0, a.$O)(
                      (null === j || void 0 === j ? void 0 : j.color) || k
                    )
                  );
            },
            [j]
          ),
          (0, n.jsxs)("section", {
            className: "flex-shrink-0 relative flex items-center min-h-120",
            style:
              "image" === (null === j || void 0 === j ? void 0 : j.type)
                ? {
                    backgroundImage: "url(".concat(
                      (null === (l = j.image) || void 0 === l
                        ? void 0
                        : l.url) || j.image,
                      ")"
                    ),
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }
                : {
                    backgroundColor:
                      null === j || void 0 === j ? void 0 : j.color,
                  },
            children: [
              "image" === (null === j || void 0 === j ? void 0 : j.type) &&
                (null === j || void 0 === j ? void 0 : j.overlay) &&
                (0, n.jsx)("div", {
                  className: (0, a.AK)("absolute inset-0"),
                  style: { backgroundColor: j.overlay.color },
                }),
              (0, n.jsx)("div", {
                className:
                  "relative container mx-auto px-6 z-10 py-12 lg:py-32 xl:py-40 text-8xl",
                children: (0, n.jsxs)("div", {
                  className: (0, a.AK)(
                    "max-w-3xl",
                    "text-".concat(b),
                    "left" === b
                      ? "ml-0 mr-auto"
                      : "right" === b
                      ? "ml-auto mr-0"
                      : "mx-auto"
                  ),
                  children: [
                    o &&
                      (0, n.jsx)("h2", {
                        className: (0, a.AK)(
                          "text-h1 xl:text-7xl xl:leading-tight mb-4",
                          "text-".concat(b)
                        ),
                        style: N({ color: O }, (0, a.j2)(s)),
                        children: o,
                      }),
                    d &&
                      (0, n.jsx)("p", {
                        className: (0, a.AK)(
                          "text-body md:text-body-lg xl:text-2xl"
                        ),
                        style: N({ color: O }, (0, a.SV)(s)),
                        children: d,
                      }),
                    f &&
                      (0, n.jsx)(y.Z, {
                        button: f,
                        website: s,
                        className: "xl mt-6 lg:mt-8 w-full md:w-max",
                      }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      function O(e, l, t) {
        return (
          l in e
            ? Object.defineProperty(e, l, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[l] = t),
          e
        );
      }
      function F(e) {
        for (var l = 1; l < arguments.length; l++) {
          var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (l) {
              O(e, l, t[l]);
            });
        }
        return e;
      }
      function A(e) {
        var l,
          t,
          s,
          c = e.block,
          o = e.website,
          i = (0, r.useState)(null),
          d = i[0],
          m = i[1],
          x = (0, r.useState)(null),
          f = x[0],
          v = x[1],
          h = (0, r.useState)(null),
          b = h[0],
          g = h[1],
          p = (0, r.useState)(null),
          j = p[0],
          w = p[1],
          N = (0, r.useState)(null),
          k = N[0],
          S = N[1],
          O = (0, r.useState)("#FFFFFF"),
          A = O[0],
          C = O[1],
          K = (0, r.useState)("#111827"),
          P = K[0],
          E = K[1],
          _ = {
            borderRadius: isNaN(
              null === o ||
                void 0 === o ||
                null === (l = o.button) ||
                void 0 === l
                ? void 0
                : l.cornerRadius
            )
              ? 8
              : o.button.cornerRadius,
          };
        return (
          (0, r.useEffect)(
            function () {
              c &&
                (m(c.headline),
                v(c.content),
                g(c.align),
                w(c.image),
                S(c.button),
                C(c.background));
            },
            [c]
          ),
          (0, r.useEffect)(
            function () {
              A && E((0, a.$O)(A));
            },
            [A]
          ),
          (0, n.jsx)("section", {
            className: "flex-shrink-0",
            style: { backgroundColor: A },
            children: (0, n.jsx)("div", {
              className: (0, a.AK)(
                "container mx-auto py-12 lg:py-14 xl:py-20 px-6"
              ),
              children: (0, n.jsxs)("div", {
                className: (0, a.AK)(
                  "flex flex-col lg:flex-row w-full gap-10 lg:gap-20",
                  "top" === b
                    ? "items-start"
                    : "bottom" === b
                    ? "items-end"
                    : "items-center",
                  "left" === (null === j || void 0 === j ? void 0 : j.align) &&
                    "lg:!flex-row-reverse"
                ),
                children: [
                  (0, n.jsxs)("div", {
                    className: (0, a.AK)(
                      "flex-1 flex flex-col items-center lg:items-start"
                    ),
                    children: [
                      d &&
                        (0, n.jsx)("h3", {
                          className: (0, a.AK)(
                            "text-xl lg:text-2xl xl:text-h3 w-auto"
                          ),
                          style: F({ color: P }, (0, a.j2)(o)),
                          children: d,
                        }),
                      f &&
                        (0, n.jsx)("p", {
                          className: (0, a.AK)(
                            "mt-2 text-body lg:leading-6 w-auto"
                          ),
                          style: { color: P },
                          children: f,
                        }),
                      k &&
                        (0, n.jsx)(y.Z, {
                          button: k,
                          website: o,
                          className: "lg mt-6 lg:mt-8 w-full md:w-max",
                        }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "flex-1 w-full",
                    children:
                      (null === j || void 0 === j ? void 0 : j.media) &&
                      (0, n.jsx)("div", {
                        className: (0, a.AK)(
                          "flex-shrink-0 relative",
                          ((s = j.aspectRatio),
                          "1:1" === s
                            ? "aspect-w-1 aspect-h-1"
                            : "2:3" === s
                            ? "aspect-w-2 aspect-h-3"
                            : "3:2" === s
                            ? "aspect-w-3 aspect-h-2"
                            : "aspect-w-16 aspect-h-9")
                        ),
                        children: (0, n.jsx)(u(), {
                          src:
                            null === (t = j.media) || void 0 === t
                              ? void 0
                              : t.url,
                          objectFit: "cover",
                          layout: "fill",
                          alt: d,
                          style: _,
                        }),
                      }),
                  }),
                ],
              }),
            }),
          })
        );
      }
      function C(e, l, t) {
        return (
          l in e
            ? Object.defineProperty(e, l, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[l] = t),
          e
        );
      }
      function K(e) {
        for (var l = 1; l < arguments.length; l++) {
          var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (l) {
              C(e, l, t[l]);
            });
        }
        return e;
      }
      function P(e) {
        var l = e.website,
          t = e.block,
          s = (0, r.useState)(null),
          c = s[0],
          o = s[1],
          i = (0, r.useState)(null),
          u = i[0],
          d = i[1],
          m = (0, r.useState)(null),
          x = m[0],
          f = m[1],
          v = (0, r.useState)("#F3F4F6"),
          h = v[0],
          b = v[1],
          g = (0, r.useState)("#111827"),
          p = g[0],
          j = g[1];
        return (
          (0, r.useEffect)(
            function () {
              t && (o(t.headline), d(t.content), f(t.align), b(t.background));
            },
            [t]
          ),
          (0, r.useEffect)(
            function () {
              h && j((0, a.$O)(h));
            },
            [h]
          ),
          (0, n.jsx)("section", {
            className: "flex-shrink-0",
            style: { backgroundColor: h },
            children: (0, n.jsx)("div", {
              className: (0, a.AK)(
                "container mx-auto py-12 lg:py-14 xl:py-20 px-6"
              ),
              children: (0, n.jsxs)("div", {
                className: (0, a.AK)(
                  "max-w-5xl",
                  "text-".concat(x),
                  "left" === x
                    ? "ml-0 mr-auto"
                    : "right" === x
                    ? "ml-auto mr-0"
                    : "mx-auto"
                ),
                children: [
                  c &&
                    (0, n.jsx)("h3", {
                      className: (0, a.AK)(
                        "text-xl lg:text-2xl xl:text-h3",
                        "text-".concat(x)
                      ),
                      style: K({ color: p }, (0, a.j2)(l)),
                      children: c,
                    }),
                  u &&
                    (0, n.jsx)("pre", {
                      className: (0, a.AK)(
                        "w-full mt-3 text-body lg:leading-6"
                      ),
                      style: K({ color: p }, (0, a.SV)(l)),
                      children: u,
                    }),
                ],
              }),
            }),
          })
        );
      }
      function E(e, l, t) {
        return (
          l in e
            ? Object.defineProperty(e, l, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[l] = t),
          e
        );
      }
      function _(e) {
        for (var l = 1; l < arguments.length; l++) {
          var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (l) {
              E(e, l, t[l]);
            });
        }
        return e;
      }
      function B(e) {
        var l = e.block,
          t = e.website,
          s = (0, r.useState)(null),
          c = s[0],
          o = s[1],
          i = (0, r.useState)(!1),
          d = i[0],
          m = i[1],
          x = (0, r.useState)(!1),
          f = x[0],
          v = x[1],
          h = (0, r.useState)(!1),
          b = h[0],
          g = h[1],
          p = (0, r.useState)(!1),
          j = p[0],
          w = p[1],
          N = (0, r.useState)(!1),
          k = N[0],
          S = N[1],
          O = (0, r.useState)(null),
          F = O[0],
          A = O[1],
          C = (0, r.useState)(null),
          K = (C[0], C[1]),
          P = (0, r.useState)(null),
          E = P[0],
          B = P[1],
          W = (0, r.useState)("#FFFFFF"),
          T = W[0],
          R = W[1],
          Z = (0, r.useState)("#111827"),
          $ = Z[0],
          z = Z[1];
        return (
          (0, r.useEffect)(
            function () {
              l &&
                (o(l.headline),
                m(l.showImage),
                v(l.showIcon),
                g(l.showHeading),
                w(l.showContent),
                S(l.showButton),
                A(l.aspectRatio),
                K(l.justify),
                B(l.align),
                R(l.background));
            },
            [l]
          ),
          (0, r.useEffect)(
            function () {
              T && z((0, a.$O)(T));
            },
            [T]
          ),
          (0, n.jsx)("section", {
            className: "flex-shrink-0",
            style: { backgroundColor: T },
            children: (0, n.jsxs)("div", {
              className: (0, a.AK)(
                "container mx-auto py-12 lg:py-14 xl:py-20 px-6"
              ),
              children: [
                c &&
                  (0, n.jsx)("h2", {
                    className: (0, a.AK)(
                      "text-h3 lg:text-h1 font-medium mb-4 lg:mb-10",
                      "text-".concat(E)
                    ),
                    style: _({ color: $ }, (0, a.j2)(t)),
                    children: c,
                  }),
                (null === l || void 0 === l ? void 0 : l.items) &&
                  (0, n.jsxs)("div", {
                    className: (0, a.AK)(
                      "flex flex-col sm:flex-row flex-wrap gap-10",
                      "justify-".concat(
                        "left" === E
                          ? "start"
                          : "center" === E
                          ? "center"
                          : "end"
                      )
                    ),
                    children: [
                      (0, n.jsx)("span", {
                        className:
                          "hidden justify-center justify-end justify-start",
                      }),
                      l.items.map(function (e, r) {
                        var s, c, o, i, m;
                        return (0,
                        n.jsxs)("div", { className: "block-list-item w-full", children: [d && e.image && (0, n.jsx)("div", { className: (0, a.AK)("flex-shrink-0 relative mb-6", ((m = F), "1:1" === m ? "aspect-w-1 aspect-h-1" : "2:3" === m ? "aspect-w-2 aspect-h-3" : "3:2" === m ? "aspect-w-3 aspect-h-2" : "aspect-w-16 aspect-h-9")), children: (0, n.jsx)(u(), { src: e.image.url, objectFit: "cover", layout: "fill", alt: e.title }) }), f && (null === (s = e.icon) || void 0 === s ? void 0 : s.media) && (0, n.jsx)("div", { className: (0, a.AK)("flex-shrink-0 relative mb-6", (null === l || void 0 === l ? void 0 : l.iconSize) || "w-12 h-12", "left" === E ? "mr-auto" : "center" === E ? "mx-auto" : "ml-auto"), children: (0, n.jsx)("div", { className: "absolute w-full h-full", style: { backgroundColor: (null === (c = e.icon) || void 0 === c ? void 0 : c.color) || "#1F2937", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center", WebkitMaskSize: "contain", maskSize: "contain", maskMode: "luminance", WebkitMaskImage: 'url("'.concat(null === (o = e.icon) || void 0 === o ? void 0 : o.media.url, '")'), maskImage: 'url("'.concat(null === (i = e.icon) || void 0 === i ? void 0 : i.media.url, '")') } }) }), (0, n.jsxs)("div", { className: "text-".concat(E), children: [b && (0, n.jsx)("p", { className: "text-xl lg:text-2xl xl:text-h3 font-medium mb-2", style: _({ color: $ }, (0, a.j2)(t)), children: e.title }), j && (0, n.jsx)("p", { className: "lg:leading-6", style: { color: $ }, children: e.content }), k && (null === e || void 0 === e ? void 0 : e.button) && (0, n.jsx)(y.Z, { button: e.button, website: t, className: "lg mt-4" })] })] }, r);
                      }),
                    ],
                  }),
              ],
            }),
          })
        );
      }
      function W(e, l, t) {
        return (
          l in e
            ? Object.defineProperty(e, l, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[l] = t),
          e
        );
      }
      function T(e) {
        for (var l = 1; l < arguments.length; l++) {
          var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (l) {
              W(e, l, t[l]);
            });
        }
        return e;
      }
      function R(e) {
        var l = e.website,
          t = e.block,
          s = (0, r.useState)(null),
          c = s[0],
          o = s[1],
          i = (0, r.useState)(""),
          u = i[0],
          d = i[1],
          m = (0, r.useState)("#F3F4F6"),
          x = m[0],
          f = m[1],
          v = (0, r.useState)("#111827"),
          h = v[0],
          b = v[1];
        return (
          (0, r.useEffect)(
            function () {
              t && (o(t.headline), d(t.url), f(t.background || "#F3F4F6"));
            },
            [t]
          ),
          (0, r.useEffect)(
            function () {
              x && b((0, a.$O)(x));
            },
            [x]
          ),
          (0, n.jsx)("section", {
            className: "flex-shrink-0",
            style: { backgroundColor: x },
            children: (0, n.jsxs)("div", {
              className: "container mx-auto py-12 lg:py-14 xl:py-20 px-6",
              children: [
                c &&
                  (0, n.jsx)("h2", {
                    className: "text-h3 lg:text-h1 font-medium mb-4 lg:mb-10",
                    style: T({ color: h }, (0, a.j2)(l)),
                    children: c,
                  }),
                u &&
                  (0, n.jsx)("div", {
                    className: "relative aspect-w-16 aspect-h-9",
                    children: (0, n.jsx)("iframe", {
                      width: "100%",
                      src:
                        (function (e) {
                          var l = e.match(
                            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
                          );
                          return (
                            !(!l || 11 !== l[7].length) &&
                            "https://www.youtube.com/embed/" + l[7]
                          );
                        })(u) ||
                        (function (e) {
                          var l = /vimeo.*\/(\d+)/i.exec(e);
                          return (
                            !(!l || !l[1]) &&
                            "https://player.vimeo.com/video/" + l[1]
                          );
                        })(u),
                      className: "border-0",
                      allow: "autoplay; encrypted-media",
                      allowFullScreen: "",
                    }),
                  }),
              ],
            }),
          })
        );
      }
      function Z(e, l, t) {
        return (
          l in e
            ? Object.defineProperty(e, l, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[l] = t),
          e
        );
      }
      function $(e) {
        for (var l = 1; l < arguments.length; l++) {
          var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (l) {
              Z(e, l, t[l]);
            });
        }
        return e;
      }
      var z = "AIzaSyCY9M8snWTExTcdB8CWZmY6mO009Dfkdak";
      function D(e) {
        var l,
          t,
          s = e.website,
          c = e.office,
          o = e.block,
          i = (0, r.useState)(null),
          u = i[0],
          d = i[1],
          m = (0, r.useState)(null),
          x = m[0],
          f = m[1],
          v = (0, r.useState)("#FFFFFF"),
          h = v[0],
          b = v[1],
          g = (0, r.useState)("#111827"),
          p = g[0],
          j = g[1],
          y = (0, r.useState)(null),
          w = y[0],
          N = y[1],
          k = function (e) {
            return "small" === e
              ? "rounded-sm"
              : "medium" === e
              ? "rounded-md"
              : "large" === e
              ? "rounded-lg"
              : "";
          };
        return (
          (0, r.useEffect)(
            function () {
              o &&
                (d(
                  o.address ||
                    (function () {
                      var e = "";
                      return (
                        (null === c || void 0 === c ? void 0 : c.address) &&
                          ((e += c.address.line1 ? c.address.line1 + " " : ""),
                          (e += c.address.line2 ? c.address.line2 + " " : ""),
                          (e += c.address.city ? c.address.city + " " : ""),
                          (e += c.address.state ? c.address.state + " " : ""),
                          (e += c.address.country
                            ? c.address.country + " "
                            : ""),
                          (e += c.address.postalCode
                            ? c.address.postalCode
                            : "")),
                        e.trim()
                      );
                    })()
                ),
                f(o.align),
                b(o.background),
                N(o.cornerRadius),
                (null !== o.headline && void 0 !== o.headline) ||
                  (o.headline = "Location"));
            },
            [o]
          ),
          (0, r.useEffect)(
            function () {
              h && j((0, a.$O)(h));
            },
            [h]
          ),
          (0, n.jsx)("section", {
            className: (0, a.AK)(
              "flex-shrink-0",
              "background" ===
                (null === o || void 0 === o ? void 0 : o.style) &&
                "relative flex items-end md:items-center min-h-[80vh] md:min-h-[50vh]"
            ),
            style: { backgroundColor: h },
            children:
              "background" === (null === o || void 0 === o ? void 0 : o.style)
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("iframe", {
                        className: "absolute inset-0",
                        width: "100%",
                        height: "100%",
                        loading: "lazy",
                        src: "https://www.google.com/maps/embed/v1/place?key="
                          .concat(z, "&q=")
                          .concat(
                            null === u || void 0 === u
                              ? void 0
                              : u.replace(/\n/g, ",")
                          ),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "relative z-10 container mx-auto py-12 lg:py-14 xl:py-20 px-6",
                        children: (0, n.jsx)("div", {
                          className: (0, a.AK)(
                            "flex flex-row w-full",
                            "left" !== x && "md:flex-row-reverse"
                          ),
                          children: (0, n.jsxs)("div", {
                            className: (0, a.AK)(
                              "w-full md:w-1/2 xl:w-2/5 flex flex-col gap-6 w-full p-6 lg:p-10 shadow",
                              k(w)
                            ),
                            style: { backgroundColor: h },
                            children: [
                              (0, n.jsxs)("div", {
                                children: [
                                  (null === o || void 0 === o
                                    ? void 0
                                    : o.headline) &&
                                    (0, n.jsx)("p", {
                                      className:
                                        "text-body lg:text-2xl font-medium mb-2",
                                      style: $({ color: p }, (0, a.j2)(s)),
                                      children: o.headline,
                                    }),
                                  (0, n.jsx)("pre", {
                                    style: $({ color: p }, (0, a.SV)(s)),
                                    children: u,
                                  }),
                                ],
                              }),
                              null === o ||
                              void 0 === o ||
                              null === (l = o.additional) ||
                              void 0 === l
                                ? void 0
                                : l.map(function (e, l) {
                                    return (0,
                                    n.jsxs)("div", { children: [(0, n.jsx)("p", { className: "text-body lg:text-2xl font-medium mb-2", style: $({ color: p }, (0, a.j2)(s)), children: e.title }), (0, n.jsx)("p", { style: { color: p }, children: e.content })] }, l);
                                  }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  })
                : (0, n.jsx)("div", {
                    className: "container mx-auto py-12 lg:py-14 xl:py-20 px-6",
                    children: (0, n.jsxs)("div", {
                      className: (0, a.AK)(
                        "flex flex-col w-full gap-10 lg:gap-20",
                        "left" === x ? "lg:flex-row" : "lg:!flex-row-reverse"
                      ),
                      children: [
                        (0, n.jsx)("div", {
                          className: "w-full md:w-1/2",
                          children: (0, n.jsx)("iframe", {
                            className: (0, a.AK)(
                              "mt-4 h-40 md:h-72 lg:h-96",
                              k(w)
                            ),
                            width: "100%",
                            loading: "lazy",
                            src: "https://www.google.com/maps/embed/v1/place?key="
                              .concat(z, "&q=")
                              .concat(
                                null === u || void 0 === u
                                  ? void 0
                                  : u.replace(/\n/g, ",")
                              ),
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "w-full md:w-1/2 flex flex-col gap-6 w-full lg:mt-10",
                          children: [
                            (0, n.jsxs)("div", {
                              children: [
                                (null === o || void 0 === o
                                  ? void 0
                                  : o.headline) &&
                                  (0, n.jsx)("p", {
                                    className:
                                      "text-body lg:text-2xl font-medium mb-2",
                                    style: $({ color: p }, (0, a.j2)(s)),
                                    children: o.headline,
                                  }),
                                (0, n.jsx)("pre", {
                                  style: $({ color: p }, (0, a.SV)(s)),
                                  children: u,
                                }),
                              ],
                            }),
                            null === o ||
                            void 0 === o ||
                            null === (t = o.additional) ||
                            void 0 === t
                              ? void 0
                              : t.map(function (e, l) {
                                  return (0,
                                  n.jsxs)("div", { children: [(0, n.jsx)("p", { className: "text-body lg:text-2xl font-medium mb-2", style: $({ color: p }, (0, a.j2)(s)), children: e.title }), (0, n.jsx)("p", { style: { color: p }, children: e.content })] }, l);
                                }),
                          ],
                        }),
                      ],
                    }),
                  }),
          })
        );
      }
      var M = t(34051),
        q = t.n(M),
        I = t(34853),
        L = t(33740),
        V = t(41664),
        H = t.n(V);
      function G(e, l, t, n, a, r, s) {
        try {
          var c = e[r](s),
            o = c.value;
        } catch (i) {
          return void t(i);
        }
        c.done ? l(o) : Promise.resolve(o).then(n, a);
      }
      function U(e, l, t) {
        return (
          l in e
            ? Object.defineProperty(e, l, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[l] = t),
          e
        );
      }
      function Y(e) {
        for (var l = 1; l < arguments.length; l++) {
          var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (l) {
              U(e, l, t[l]);
            });
        }
        return e;
      }
      var X = { name: "", email: "", message: "", idBusiness: null, valid: !0 };
      function J(e) {
        var l,
          t,
          s = e.block,
          c = e.website,
          o = e.apiUrl,
          i = e.captchaKey,
          u = (0, r.useState)(!1),
          d = u[0],
          m = u[1],
          x = (0, r.useState)(null),
          f = x[0],
          v = x[1],
          h = (0, r.useState)(null),
          b = h[0],
          g = h[1],
          p = (0, r.useState)(X),
          j = p[0],
          w = p[1],
          N = (0, r.useState)(null),
          k = N[0],
          S = N[1],
          O = (0, r.useState)("#F3F4F6"),
          F = O[0],
          A = O[1],
          C = (0, r.useState)("#111827"),
          K = C[0],
          P = C[1],
          E = (0, r.useState)(!1),
          _ = E[0],
          B = E[1],
          W = (0, r.useState)(null),
          T = W[0],
          R = W[1],
          Z = r.createRef(),
          $ = new a.bl(o),
          z = {
            borderRadius: isNaN(
              null === c ||
                void 0 === c ||
                null === (l = c.button) ||
                void 0 === l
                ? void 0
                : l.cornerRadius
            )
              ? 8
              : c.button.cornerRadius,
          },
          D = (function () {
            var e,
              l =
                ((e = q().mark(function e(l) {
                  var t, n, r, c, o, i, u, d;
                  return q().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (l) {
                              e.next = 4;
                              break;
                            }
                            return m(!1), e.abrupt("return");
                          case 4:
                            if (
                              (Z.current.reset(),
                              j.name &&
                                j.email &&
                                (0, a.oH)(j.email) &&
                                j.message)
                            ) {
                              e.next = 9;
                              break;
                            }
                            return (
                              w(Y({}, j, { valid: !1 })),
                              m(!1),
                              e.abrupt("return")
                            );
                          case 9:
                            if (
                              !(
                                s &&
                                (null === s || void 0 === s
                                  ? void 0
                                  : s.fields) &&
                                (null === s ||
                                void 0 === s ||
                                null === (t = s.fields) ||
                                void 0 === t
                                  ? void 0
                                  : t.length)
                              )
                            ) {
                              e.next = 36;
                              break;
                            }
                            (n = !0),
                              (r = !1),
                              (c = void 0),
                              (e.prev = 11),
                              (o = s.fields[Symbol.iterator]());
                          case 13:
                            if ((n = (i = o.next()).done)) {
                              e.next = 22;
                              break;
                            }
                            if (
                              !(u = i.value).required ||
                              j[u.label.toLowerCase()]
                            ) {
                              e.next = 19;
                              break;
                            }
                            return (
                              w(Y({}, j, { valid: !1 })),
                              m(!1),
                              e.abrupt("return")
                            );
                          case 19:
                            (n = !0), (e.next = 13);
                            break;
                          case 22:
                            e.next = 28;
                            break;
                          case 24:
                            (e.prev = 24),
                              (e.t0 = e.catch(11)),
                              (r = !0),
                              (c = e.t0);
                          case 28:
                            (e.prev = 28),
                              (e.prev = 29),
                              n || null == o.return || o.return();
                          case 31:
                            if (((e.prev = 31), !r)) {
                              e.next = 34;
                              break;
                            }
                            throw c;
                          case 34:
                            return e.finish(31);
                          case 35:
                            return e.finish(28);
                          case 36:
                            return (
                              (j.captcha = l),
                              (e.next = 39),
                              $.post("/website/send-contact-form", j)
                            );
                          case 39:
                            (d = e.sent) && !0 === d.status
                              ? (w(X), B(!0))
                              : R(
                                  "Error while sending you message. Try again later."
                                ),
                              m(!1);
                          case 42:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [
                      [11, 24, 28, 36],
                      [29, , 31, 35],
                    ]
                  );
                })),
                function () {
                  var l = this,
                    t = arguments;
                  return new Promise(function (n, a) {
                    var r = e.apply(l, t);
                    function s(e) {
                      G(r, n, a, s, c, "next", e);
                    }
                    function c(e) {
                      G(r, n, a, s, c, "throw", e);
                    }
                    s(void 0);
                  });
                });
            return function (e) {
              return l.apply(this, arguments);
            };
          })();
        return (
          (0, r.useEffect)(
            function () {
              s && (v(s.headline), g(s.content), S(s.align), A(s.background));
            },
            [s]
          ),
          (0, r.useEffect)(
            function () {
              F && P((0, a.$O)(F));
            },
            [F]
          ),
          (0, r.useEffect)(
            function () {
              w(Y({}, j, { idBusiness: c.Business._id }));
            },
            [c]
          ),
          (0, n.jsx)("section", {
            className: "flex-shrink-0",
            style: { backgroundColor: F },
            children: (0, n.jsx)("div", {
              className: (0, a.AK)(
                "container mx-auto py-12 lg:py-14 xl:py-20 px-6"
              ),
              children: _
                ? (0, n.jsxs)("div", {
                    className: "w-full flex flex-col items-center py-20",
                    children: [
                      (0, n.jsx)("h3", {
                        className: "mb-5",
                        children: "Good job! \ud83d\ude4c",
                      }),
                      (0, n.jsx)("p", {
                        className: "text-gray-600",
                        children: "Your message has been sent!",
                      }),
                      (0, n.jsx)("p", {
                        className: "text-gray-600",
                        children:
                          "We will get in touch with you as soon as possible.",
                      }),
                    ],
                  })
                : (0, n.jsxs)("div", {
                    className: (0, a.AK)(
                      "flex flex-col w-full gap-10 lg:gap-20",
                      "left" === k ? "lg:!flex-row-reverse" : "lg:flex-row"
                    ),
                    children: [
                      (0, n.jsxs)("div", {
                        className: "w-full lg:w-1/2 lg:mt-10",
                        children: [
                          f &&
                            (0, n.jsx)("h2", {
                              className:
                                "text-body lg:text-2xl font-medium mb-2",
                              style: Y({ color: K }, (0, a.j2)(c)),
                              children: f,
                            }),
                          b &&
                            (0, n.jsx)("p", {
                              className: "lg:leading-6",
                              style: { color: K },
                              children: b,
                            }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "w-full lg:w-1/2",
                        children: [
                          T &&
                            (0, n.jsx)("div", {
                              className: "rounded-md bg-red-50 p-4 mb-4",
                              children: (0, n.jsxs)("div", {
                                className: "flex",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "flex-shrink-0",
                                    children: (0, n.jsx)(L.Z, {
                                      className: "h-5 w-5 text-red-400",
                                      "aria-hidden": "true",
                                    }),
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "ml-3",
                                    children: (0, n.jsx)("h3", {
                                      className:
                                        "text-sm font-medium text-red-800",
                                      children: T,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          (0, n.jsxs)("form", {
                            onSubmit: function (e) {
                              R(null),
                                e.preventDefault(),
                                m(!0),
                                Z.current.execute();
                            },
                            noValidate: !0,
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "flex flex-col lg:flex-row gap-4 mb-4",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: "flex-1",
                                    children: [
                                      (0, n.jsx)("label", {
                                        className: "mb-1 text-label",
                                        style: { color: K },
                                        children: "Name",
                                      }),
                                      (0, n.jsx)("input", {
                                        className: "input",
                                        type: "text",
                                        value: j.name,
                                        onChange: function (e) {
                                          return w(
                                            Y({}, j, { name: e.target.value })
                                          );
                                        },
                                        style: z,
                                      }),
                                      !j.valid &&
                                        !j.name &&
                                        (0, n.jsx)("div", {
                                          className:
                                            "text-sm mt-1 text-red-500",
                                          children: "Provide a name",
                                        }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "flex-1",
                                    children: [
                                      (0, n.jsx)("label", {
                                        className: "mb-1 text-label",
                                        style: { color: K },
                                        children: "E-mail",
                                      }),
                                      (0, n.jsx)("input", {
                                        className: "input",
                                        type: "text",
                                        value: j.email,
                                        onChange: function (e) {
                                          return w(
                                            Y({}, j, { email: e.target.value })
                                          );
                                        },
                                        style: z,
                                      }),
                                      !j.valid &&
                                        (!j.email || !(0, a.oH)(j.email)) &&
                                        (0, n.jsx)("div", {
                                          className:
                                            "text-sm mt-1 text-red-500",
                                          children: "Provide a valid email",
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              null === s ||
                              void 0 === s ||
                              null === (t = s.fields) ||
                              void 0 === t
                                ? void 0
                                : t.map(function (e, l) {
                                    return (0, n.jsxs)(
                                      "div",
                                      {
                                        className: "mb-4",
                                        children: [
                                          (0, n.jsx)("label", {
                                            className: "mb-1 text-label",
                                            style: { color: K },
                                            children: e.label,
                                          }),
                                          (0, n.jsx)("input", {
                                            className: "input",
                                            type: "text",
                                            required: e.required,
                                            value: j[e.label.toLowerCase()],
                                            onChange: function (l) {
                                              return (function (e, l) {
                                                var t = (0, a.p$)(j);
                                                (t[l.label.toLowerCase()] =
                                                  e.target.value),
                                                  w(t);
                                              })(l, e);
                                            },
                                            style: z,
                                          }),
                                          !j.valid &&
                                            !j[e.label.toLowerCase()] &&
                                            e.required &&
                                            (0, n.jsxs)("div", {
                                              className:
                                                "text-sm mt-1 text-red-500",
                                              children: [
                                                e.label,
                                                " is required",
                                              ],
                                            }),
                                        ],
                                      },
                                      "custom-field-".concat(l)
                                    );
                                  }),
                              (0, n.jsxs)("div", {
                                className: "mb-4",
                                children: [
                                  (0, n.jsx)("label", {
                                    className: "mb-1 text-label",
                                    style: { color: K },
                                    children: "Message",
                                  }),
                                  (0, n.jsx)("textarea", {
                                    className: "input",
                                    placeholder: "",
                                    rows: "5",
                                    value: j.message,
                                    onChange: function (e) {
                                      return w(
                                        Y({}, j, { message: e.target.value })
                                      );
                                    },
                                    style: z,
                                  }),
                                  !j.valid &&
                                    !j.message &&
                                    (0, n.jsx)("div", {
                                      className: "text-sm mt-1 text-red-500",
                                      children: "Provide a message",
                                    }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "flex flex-col md:flex-row justify-between items-start gap-4",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: "text-xs max-w-sm text-gray-500",
                                    style: { color: K },
                                    children: [
                                      "This site is protected by reCAPTCHA and the Google",
                                      (0, n.jsx)(H(), {
                                        href: "https://policies.google.com/privacy",
                                        children: (0, n.jsx)("a", {
                                          target: "_blank",
                                          className: "font-bold",
                                          style: { color: K },
                                          children: " Privacy Policy",
                                        }),
                                      }),
                                      " and",
                                      (0, n.jsx)(H(), {
                                        href: "https://policies.google.com/terms",
                                        children: (0, n.jsx)("a", {
                                          target: "_blank",
                                          className: "font-bold",
                                          style: { color: K },
                                          children: " Terms of Service",
                                        }),
                                      }),
                                      " apply.",
                                    ],
                                  }),
                                  (0, n.jsx)(y.Z, {
                                    type: "submit",
                                    button: { label: "Send" },
                                    website: c,
                                    loading: d,
                                    className: "lg w-36 mt-2 md:mt-0",
                                  }),
                                ],
                              }),
                              (0, n.jsx)(I.Z, {
                                ref: Z,
                                className: "invisible",
                                size: "invisible",
                                badge: "inline",
                                sitekey: i,
                                onChange: D,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
            }),
          })
        );
      }
      var Q = function (e) {
        var l = e.website,
          t = {
            primary: {
              backgroundColor: l.primaryColor,
              color: (0, a.$O)(l.primaryColor),
            },
            secondary: {
              backgroundColor: l.secondaryColor,
              color: (0, a.$O)(l.secondaryColor),
            },
            textAccent: { color: l.secondaryColor },
          };
        return (0, n.jsx)("div", {
          className:
            "flex items-center justify-center bg-gray-50 w-full h-full",
          children: (0, n.jsxs)("div", {
            className: "text-center lg:max-w-lg px-4",
            children: [
              (0, n.jsx)("div", {
                className: "mb-6",
                children: (0, n.jsx)("p", {
                  className:
                    "text-9xl lg:text-xxl font-bold text-black opacity-10",
                  children: "404",
                }),
              }),
              (0, n.jsxs)("h4", {
                className: "mb-2",
                children: ["This page isn", "'", "t avaliable"],
              }),
              (0, n.jsxs)("p", {
                className: "text-label text-gray-500 mb-6",
                children: [
                  "The link may be broken, or the page may have been removed. Check to see if the link you",
                  "'",
                  "re trying to open is correct.",
                ],
              }),
              (0, n.jsx)(H(), {
                href: "/",
                children: (0, n.jsx)("a", {
                  className: "button primary",
                  style: t.secondary,
                  children: "Back to home page",
                }),
              }),
            ],
          }),
        });
      };
      function ee(e) {
        e.website;
        var l = e.block,
          t = (0, r.useState)(null),
          s = (t[0], t[1]),
          c = (0, r.useState)(null),
          o = c[0],
          i = c[1],
          u = (0, r.useState)(null),
          d = u[0],
          m = u[1];
        return (
          (0, r.useEffect)(
            function () {
              l && (s(l.content), i(l.fullWidth), m(l.background));
            },
            [l]
          ),
          (0, n.jsx)("section", {
            style: { backgroundColor: d },
            className: "flex-shrink-0",
            id: "embed-".concat(Math.random()),
            children: (0, n.jsx)("div", {
              className: (0, a.AK)(o ? "w-full" : "container px-6", "mx-auto"),
              children: (0, n.jsx)("div", {
                className:
                  "flex items-center justify-center h-full w-full !font-sans text-lg embed-content",
                dangerouslySetInnerHTML: {
                  __html: null === l || void 0 === l ? void 0 : l.content,
                },
              }),
            }),
          })
        );
      }
      function le(e) {
        e.website;
        var l,
          t,
          r = e.block;
        return (0, n.jsx)("section", {
          style: {
            backgroundColor: null === r || void 0 === r ? void 0 : r.background,
          },
          className: "flex-shrink-0",
          children: (0, n.jsx)("div", {
            className: (0, a.AK)(
              (null === r || void 0 === r ? void 0 : r.fullWidth)
                ? "w-full"
                : "container px-6 py-20",
              "mx-auto"
            ),
            children: (0, n.jsx)("div", {
              className: (0, a.AK)(
                !(null === r || void 0 === r ? void 0 : r.fullWidth) &&
                  "max-h-250 max-w-250 mx-auto"
              ),
              children:
                (null === r ||
                void 0 === r ||
                null === (l = r.media) ||
                void 0 === l
                  ? void 0
                  : l.url) &&
                (0, n.jsx)("div", {
                  className: (0, a.AK)(
                    "relative overflow-hidden",
                    (null === r || void 0 === r ? void 0 : r.fullWidth)
                      ? "w-full h-60 md:h-80 lg:h-120 xl:h-150"
                      : ((t =
                          null === r || void 0 === r ? void 0 : r.aspectRatio),
                        "1:1" === t
                          ? "aspect-h-1 aspect-w-1 "
                          : "2:3" === t
                          ? "aspect-w-2 aspect-h-3"
                          : "3:2" === t
                          ? "aspect-w-3 aspect-h-2"
                          : "aspect-w-16 aspect-h-9"),
                    !(null === r || void 0 === r ? void 0 : r.fullWidth) &&
                      (function (e) {
                        return "small" === e
                          ? "rounded-sm"
                          : "medium" === e
                          ? "rounded-md"
                          : "large" === e
                          ? "rounded-lg"
                          : "";
                      })(null === r || void 0 === r ? void 0 : r.cornerRadius)
                  ),
                  children: (0, n.jsx)(u(), {
                    src: null === r || void 0 === r ? void 0 : r.media.url,
                    alt: null === r || void 0 === r ? void 0 : r.media.author,
                    layout: "fill",
                    objectFit: "cover",
                    className: (0, a.AK)(
                      "w-full h-full object-center object-cover"
                    ),
                  }),
                }),
            }),
          }),
        });
      }
      var te = function (e) {
        var l,
          t = e.page,
          a = e.website,
          r = e.office,
          s = e.apiUrl,
          c = e.captchaKey;
        return (0, n.jsx)("div", {
          className: "overflow-x-hidden",
          children: t
            ? null === (l = t.blocks) || void 0 === l
              ? void 0
              : l.map(function (e, l) {
                  return (function (e, l) {
                    var t;
                    switch (
                      null === e ||
                      void 0 === e ||
                      null === (t = e.WebsiteBlock) ||
                      void 0 === t
                        ? void 0
                        : t.type
                    ) {
                      case "banner":
                        var i;
                        return (0,
                        n.jsx)(S, { block: e, website: a }, "website-block-".concat(null === (i = e.WebsiteBlock) || void 0 === i ? void 0 : i._id, "-").concat(l));
                      case "contact":
                        var u;
                        return (0,
                        n.jsx)(J, { block: e, website: a, captchaKey: c, apiUrl: s }, "website-block-".concat(null === (u = e.WebsiteBlock) || void 0 === u ? void 0 : u._id, "-").concat(l));
                      case "gallery":
                        var d;
                        return (0,
                        n.jsx)(j, { block: e, website: a }, "website-block-".concat(null === (d = e.WebsiteBlock) || void 0 === d ? void 0 : d._id, "-").concat(l));
                      case "hero":
                        var m;
                        return (0,
                        n.jsx)(A, { block: e, website: a }, "website-block-".concat(null === (m = e.WebsiteBlock) || void 0 === m ? void 0 : m._id, "-").concat(l));
                      case "list":
                        var x;
                        return (0,
                        n.jsx)(B, { block: e, website: a }, "website-block-".concat(null === (x = e.WebsiteBlock) || void 0 === x ? void 0 : x._id, "-").concat(l));
                      case "location":
                        var f;
                        return (0,
                        n.jsx)(D, { block: e, website: a, office: r }, "website-block-".concat(null === (f = e.WebsiteBlock) || void 0 === f ? void 0 : f._id, "-").concat(l));
                      case "quote":
                        var v;
                        return (0,
                        n.jsx)(o, { block: e, website: a }, "website-block-".concat(null === (v = e.WebsiteBlock) || void 0 === v ? void 0 : v._id, "-").concat(l));
                      case "text":
                        var h;
                        return (0,
                        n.jsx)(P, { block: e, website: a }, "website-block-".concat(null === (h = e.WebsiteBlock) || void 0 === h ? void 0 : h._id, "-").concat(l));
                      case "video":
                        var b;
                        return (0,
                        n.jsx)(R, { block: e, website: a }, "website-block-".concat(null === (b = e.WebsiteBlock) || void 0 === b ? void 0 : b._id, "-").concat(l));
                      case "embed":
                        var g;
                        return (0,
                        n.jsx)(ee, { block: e, website: a }, "website-block-".concat(null === (g = e.WebsiteBlock) || void 0 === g ? void 0 : g._id, "-").concat(l));
                      case "image":
                        var p;
                        return (0,
                        n.jsx)(le, { block: e, website: a }, "website-block-".concat(null === (p = e.WebsiteBlock) || void 0 === p ? void 0 : p._id, "-").concat(l));
                    }
                  })(e, l);
                })
            : (0, n.jsx)(Q, { website: a }),
        });
      };
      te.getLayout = a.G0;
      var ne = !0,
        ae = te;
    },
  },
  function (e) {
    e.O(0, [728, 708, 186, 717, 749, 428, 514, 774, 888, 179], function () {
      return (l = 69805), e((e.s = l));
      var l;
    });
    var l = e.O();
    _N_E = l;
  },
]);
