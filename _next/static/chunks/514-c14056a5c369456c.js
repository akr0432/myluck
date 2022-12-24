(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [514],
  {
    13576: function (e, n, l) {
      "use strict";
      l.d(n, {
        Z: function () {
          return a;
        },
      });
      var o = l(85893),
        t = l(41664),
        i = l.n(t),
        s = l(99270),
        r = l(60869);
      function a(e) {
        var n,
          l,
          t,
          a,
          c,
          d,
          u,
          v,
          f,
          h,
          m = e.button,
          x = e.type,
          g = e.website,
          p = e.action,
          y = e.loading,
          b = e.className,
          j = {
            background:
              "outline" ===
              (null === g ||
              void 0 === g ||
              null === (n = g.button) ||
              void 0 === n
                ? void 0
                : n.style)
                ? "transparent"
                : (null === g ||
                  void 0 === g ||
                  null === (l = g.button) ||
                  void 0 === l
                    ? void 0
                    : l.background) ||
                  (null === g || void 0 === g ? void 0 : g.secondaryColor),
            borderRadius: isNaN(
              null === g ||
                void 0 === g ||
                null === (t = g.button) ||
                void 0 === t
                ? void 0
                : t.cornerRadius
            )
              ? 8
              : g.button.cornerRadius,
            color:
              "outline" ===
              (null === g ||
              void 0 === g ||
              null === (a = g.button) ||
              void 0 === a
                ? void 0
                : a.style)
                ? null === g ||
                  void 0 === g ||
                  null === (c = g.button) ||
                  void 0 === c
                  ? void 0
                  : c.background
                : (0, r.$O)(
                    (null === g ||
                    void 0 === g ||
                    null === (d = g.button) ||
                    void 0 === d
                      ? void 0
                      : d.background) ||
                      (null === g || void 0 === g ? void 0 : g.secondaryColor)
                  ),
            border: "2px solid ".concat(
              (null === g ||
              void 0 === g ||
              null === (u = g.button) ||
              void 0 === u
                ? void 0
                : u.background) ||
                (null === g ||
                void 0 === g ||
                null === (v = g.button) ||
                void 0 === v
                  ? void 0
                  : v.background) ||
                (null === g || void 0 === g ? void 0 : g.secondaryColor)
            ),
          };
        return (p && "function" === typeof p) || "submit" === x
          ? (0, o.jsx)("button", {
              type: "submit" === x ? "submit" : "button",
              onClick: p,
              className: (0, r.AK)("button primary", b),
              style: j,
              disabled: y,
              children: y ? (0, o.jsx)(s.Z, {}) : m.label,
            })
          : (0, o.jsx)(i(), {
              href: (function (e) {
                if (e) {
                  if ("email" === e.type) return "mailto:" + e.link;
                  if ("phone" === e.type) return "tel:" + e.link;
                  if ("page" === e.type) {
                    var n,
                      l =
                        null === g ||
                        void 0 === g ||
                        null === (n = g.pages) ||
                        void 0 === n
                          ? void 0
                          : n.find(function (n) {
                              return n._id === e.page;
                            });
                    return (
                      (null === l || void 0 === l ? void 0 : l.slug) || "/"
                    );
                  }
                  var o,
                    t =
                      null === (o = e.link) || void 0 === o
                        ? void 0
                        : o.replace(/https?:\/\//gi, "");
                  return t && "#" !== t ? "https://" + t : "#";
                }
                return "/";
              })(m),
              children: (0, o.jsx)("a", {
                className: (0, r.AK)("button primary", b),
                target:
                  !0 === m.newPage
                    ? "_blank"
                    : (
                        null === g ||
                        void 0 === g ||
                        null === (f = g.button) ||
                        void 0 === f
                          ? void 0
                          : f.target
                      )
                    ? null === g ||
                      void 0 === g ||
                      null === (h = g.button) ||
                      void 0 === h
                      ? void 0
                      : h.target
                    : "_self",
                style: j,
                children: m.label,
              }),
            });
      }
    },
    78546: function (e, n, l) {
      "use strict";
      l.d(n, {
        Z: function () {
          return W;
        },
      });
      var o = l(34051),
        t = l.n(o),
        i = l(85893),
        s = l(60869),
        r = l(67294),
        a = l(13576),
        c = l(80880),
        d = l(41664),
        u = l.n(d),
        v = l(60445),
        f = l(71029),
        h = l(85296),
        m = l(44171),
        x = l(43180),
        g = l(10151),
        p = l(36234),
        y = l(66909),
        b = l(49791),
        j = l(28239),
        w = l(48192),
        N = l(94206),
        k = l(13487),
        A = l(65710),
        Z = l(43751);
      function O(e, n, l) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = l),
          e
        );
      }
      function S(e) {
        for (var n = 1; n < arguments.length; n++) {
          var l = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(l);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(l).filter(function (e) {
                return Object.getOwnPropertyDescriptor(l, e).enumerable;
              })
            )),
            o.forEach(function (n) {
              O(e, n, l[n]);
            });
        }
        return e;
      }
      function C(e) {
        var n,
          l,
          o = e.website,
          t = (e.office, (0, s.ac)("(max-width: 1023px)")),
          d = (0, r.useState)(!1),
          O = d[0],
          C = d[1],
          F = (0, r.useState)("#FFFFFF"),
          P = F[0],
          E = F[1],
          K = (0, r.useState)("#000000"),
          _ = K[0],
          B = K[1],
          I = (0, c.useRouter)(),
          L = null === o || void 0 === o ? void 0 : o.header,
          D =
            null ===
              (l =
                null === (n = o.pages) || void 0 === n
                  ? void 0
                  : n.filter(function (e) {
                      return (
                        (!0 === e.showOnHeader || void 0 === e.showOnHeader) &&
                        null !== e.slug
                      );
                    })) || void 0 === l
              ? void 0
              : l.map(function (e) {
                  return {
                    href: "/".concat(e.slug || ""),
                    name: e.label,
                    current: I.asPath === "/".concat(e.slug || ""),
                  };
                }),
          R = function (e) {
            var n = "w-8 h-8";
            return "angi" === e
              ? (0, i.jsx)(f.Z, { className: n, style: { color: _ } })
              : "behance" === e
              ? (0, i.jsx)(h.Z, { className: n, style: { color: _ } })
              : "dribbble" === e
              ? (0, i.jsx)(m.Z, { className: n, style: { color: _ } })
              : "facebook" === e
              ? (0, i.jsx)(x.Z, { className: n, style: { color: _ } })
              : "homeadvisor" === e
              ? (0, i.jsx)(g.Z, { className: n, style: { color: _ } })
              : "instagram" === e
              ? (0, i.jsx)(p.Z, { className: n, style: { color: _ } })
              : "linkedin" === e
              ? (0, i.jsx)(y.Z, { className: n, style: { color: _ } })
              : "pinterest" === e
              ? (0, i.jsx)(b.Z, { className: n, style: { color: _ } })
              : "tiktok" === e
              ? (0, i.jsx)(j.Z, { className: n, style: { color: _ } })
              : "thumbtack" === e
              ? (0, i.jsx)(w.Z, { className: n, style: { color: _ } })
              : "twitter" === e
              ? (0, i.jsx)(N.Z, { className: n, style: { color: _ } })
              : "youtube" === e
              ? (0, i.jsx)(k.Z, { className: n, style: { color: _ } })
              : void 0;
          },
          T = function (e) {
            return (0, i.jsx)("div", {
              className: (0, s.AK)(
                "hidden lg:flex items-center flex-shrink-0",
                e && "invisible"
              ),
              children: (0, i.jsx)(a.Z, {
                className: "xl !text-2xl !py-1.5",
                button: null === L || void 0 === L ? void 0 : L.button,
                website: o,
              }),
            });
          },
          z = function (e) {
            return (0, i.jsx)("ul", {
              className: (0, s.AK)(
                "hidden lg:flex items-center gap-4",
                e && "invisible"
              ),
              children:
                Array.isArray(o.social) &&
                o.social.map(function (e, n) {
                  var l;
                  return (0,
                  i.jsx)("li", { children: (0, i.jsx)(u(), { href: "https://".concat(null === (l = e.link) || void 0 === l ? void 0 : l.replace(/https?:\/\//gi, "")), children: (0, i.jsx)("a", { target: "_blank", children: R(e.type) }) }) }, "social-icon-header-".concat(n));
                }),
            });
          },
          M = function () {
            var e, n, l, t, r, a, c, d;
            return (null === L || void 0 === L ? void 0 : L.showLogo) &&
              "branding" === (null === L || void 0 === L ? void 0 : L.source) &&
              (null === o || void 0 === o ? void 0 : o.logo)
              ? (0, i.jsx)(u(), {
                  href: "/",
                  children: (0, i.jsxs)("a", {
                    children: [
                      (0, i.jsx)("img", {
                        className:
                          "hidden lg:block transition-all object-contain",
                        src:
                          null === o ||
                          void 0 === o ||
                          null === (e = o.logo) ||
                          void 0 === e
                            ? void 0
                            : e.url,
                        alt: null === L || void 0 === L ? void 0 : L.siteName,
                        style: {
                          height:
                            (null === L ||
                            void 0 === L ||
                            null === (n = L.logoDesktop) ||
                            void 0 === n
                              ? void 0
                              : n.height) + "px",
                        },
                      }),
                      (0, i.jsx)("img", {
                        className: "lg:hidden transition-all object-contain",
                        src:
                          null === o ||
                          void 0 === o ||
                          null === (l = o.logo) ||
                          void 0 === l
                            ? void 0
                            : l.url,
                        alt: null === L || void 0 === L ? void 0 : L.siteName,
                        style: {
                          height:
                            (null === L ||
                            void 0 === L ||
                            null === (t = L.logoMobile) ||
                            void 0 === t
                              ? void 0
                              : t.height) + "px",
                        },
                      }),
                    ],
                  }),
                })
              : (null === L || void 0 === L ? void 0 : L.showLogo) &&
                "upload" === (null === L || void 0 === L ? void 0 : L.source) &&
                (null === L || void 0 === L ? void 0 : L.customLogo)
              ? (0, i.jsx)(u(), {
                  href: "/",
                  children: (0, i.jsxs)("a", {
                    children: [
                      (0, i.jsx)("img", {
                        className:
                          "hidden lg:block transition-all object-contain",
                        src:
                          null === L ||
                          void 0 === L ||
                          null === (r = L.customLogo) ||
                          void 0 === r
                            ? void 0
                            : r.url,
                        alt: null === L || void 0 === L ? void 0 : L.siteName,
                        style: {
                          height:
                            (null === L ||
                            void 0 === L ||
                            null === (a = L.logoDesktop) ||
                            void 0 === a
                              ? void 0
                              : a.height) + "px",
                        },
                      }),
                      (0, i.jsx)("img", {
                        className: "lg:hidden transition-all object-contain",
                        src:
                          null === L ||
                          void 0 === L ||
                          null === (c = L.customLogo) ||
                          void 0 === c
                            ? void 0
                            : c.url,
                        alt: null === L || void 0 === L ? void 0 : L.siteName,
                        style: {
                          height:
                            (null === L ||
                            void 0 === L ||
                            null === (d = L.logoMobile) ||
                            void 0 === d
                              ? void 0
                              : d.height) + "px",
                        },
                      }),
                    ],
                  }),
                })
              : (0, i.jsx)(u(), {
                  href: "/",
                  children: (0, i.jsx)("a", {
                    children: (0, i.jsx)("h1", {
                      className:
                        "text-h6 lg:text-h4 xl:text-h3 font-medium max-w-60 md:max-w-100 lg:max-w-none truncate",
                      style: S({ color: _ }, (0, s.j2)(o)),
                      children:
                        null === L || void 0 === L ? void 0 : L.siteName,
                    }),
                  }),
                });
          },
          V = function () {
            return 0 === D.length
              ? (0, i.jsx)(i.Fragment, {})
              : (0, i.jsx)("ul", {
                  className: "hidden lg:flex items-center gap-6",
                  style: { color: _ },
                  children:
                    null === D || void 0 === D
                      ? void 0
                      : D.map(function (e) {
                          return (0,
                          i.jsx)("li", { className: "border-b-2", style: { borderColor: e.current ? "".concat(_) : "transparent" }, children: (0, i.jsx)(u(), { href: e.href, children: (0, i.jsx)("a", { className: "block py-1.5 text-xl font-light whitespace-nowrap", children: e.name }) }) }, "page-link-".concat(e.href));
                        }),
                });
          };
        return (
          (0, r.useEffect)(
            function () {
              if (L) {
                var e, n, l;
                if (
                  (E(L.background),
                  null === L.siteName || void 0 === L.siteName)
                )
                  L.siteName =
                    null === o ||
                    void 0 === o ||
                    null === (l = o.Business) ||
                    void 0 === l
                      ? void 0
                      : l.name;
                L.style || (L.style = "left"),
                  (null === (e = L.logoDesktop) || void 0 === e
                    ? void 0
                    : e.height) || (L.logoDesktop = { height: 80 }),
                  (null === (n = L.logoMobile) || void 0 === n
                    ? void 0
                    : n.height) || (L.logoMobile = { height: 40 });
              }
            },
            [L]
          ),
          (0, r.useEffect)(
            function () {
              P && B((0, s.$O)(P));
            },
            [P]
          ),
          (0, r.useEffect)(
            function () {
              C(!1);
            },
            [I, t]
          ),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("header", {
                className: (0, s.AK)(
                  (null === L || void 0 === L ? void 0 : L.sticky)
                    ? "sticky top-0 shadow-sm"
                    : "",
                  (null === L || void 0 === L ? void 0 : L.sticky) && !O
                    ? "!z-max"
                    : ""
                ),
                style: { backgroundColor: P, color: _ },
                children: (0, i.jsx)("div", {
                  className: (0, s.AK)(
                    "grid grid-cols-fit-3 items-center lg:gap-6 xl:gap-10 mx-auto py-6",
                    (null === L || void 0 === L ? void 0 : L.fullWidth)
                      ? "px-6 lg:px-12"
                      : "container px-6"
                  ),
                  children:
                    "center" === (null === L || void 0 === L ? void 0 : L.style)
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("div", { children: V() }),
                            (0, i.jsx)("div", {
                              className: "flex justify-center",
                              children: M(),
                            }),
                            (0, i.jsxs)("div", {
                              className: "flex justify-end",
                              children: [
                                (0, i.jsxs)("div", {
                                  className:
                                    "hidden lg:flex item-center gap-10",
                                  children: [
                                    (null === L || void 0 === L
                                      ? void 0
                                      : L.showSocial) && z(),
                                    (null === L || void 0 === L
                                      ? void 0
                                      : L.button) && T(),
                                  ],
                                }),
                                ((null === L || void 0 === L
                                  ? void 0
                                  : L.button) ||
                                  (null === D || void 0 === D
                                    ? void 0
                                    : D.length) > 0 ||
                                  ((null === L || void 0 === L
                                    ? void 0
                                    : L.showSocial) &&
                                    Array.isArray(
                                      null === o || void 0 === o
                                        ? void 0
                                        : o.social
                                    ) &&
                                    (null === o || void 0 === o
                                      ? void 0
                                      : o.social.length) > 0)) &&
                                  (0, i.jsx)("div", {
                                    className: "ml-auto lg:hidden",
                                    children: (0, i.jsx)("button", {
                                      className:
                                        "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                      style: { color: _ },
                                      onClick: function () {
                                        return C(!0);
                                      },
                                      children: (0, i.jsx)(A.Z, {
                                        className: "block h-5 w-5",
                                        "aria-hidden": "true",
                                      }),
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        })
                      : "full-center" ===
                        (null === L || void 0 === L ? void 0 : L.style)
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("div", {
                              children:
                                (null === L || void 0 === L
                                  ? void 0
                                  : L.showSocial) && z(),
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "flex-1 flex flex-col items-center gap-4",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "flex justify-center w-full",
                                  children: M(),
                                }),
                                V(),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "flex justify-end",
                              children: [
                                (null === L || void 0 === L
                                  ? void 0
                                  : L.button) && T(),
                                ((null === L || void 0 === L
                                  ? void 0
                                  : L.button) ||
                                  (null === D || void 0 === D
                                    ? void 0
                                    : D.length) > 0 ||
                                  ((null === L || void 0 === L
                                    ? void 0
                                    : L.showSocial) &&
                                    Array.isArray(
                                      null === o || void 0 === o
                                        ? void 0
                                        : o.social
                                    ) &&
                                    (null === o || void 0 === o
                                      ? void 0
                                      : o.social.length) > 0)) &&
                                  (0, i.jsx)("div", {
                                    className: "ml-auto lg:hidden",
                                    children: (0, i.jsx)("button", {
                                      className:
                                        "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                      style: { color: _ },
                                      onClick: function () {
                                        return C(!0);
                                      },
                                      children: (0, i.jsx)(A.Z, {
                                        className: "block h-5 w-5",
                                        "aria-hidden": "true",
                                      }),
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        })
                      : (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("div", {
                              className: "col-span-2 lg:col-span-1",
                              children: M(),
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "hidden lg:flex item-center justify-end gap-10 lg:col-span-2",
                              children: [
                                V(),
                                (null === L || void 0 === L
                                  ? void 0
                                  : L.showSocial) && z(),
                                (null === L || void 0 === L
                                  ? void 0
                                  : L.button) && T(),
                              ],
                            }),
                            ((null === L || void 0 === L ? void 0 : L.button) ||
                              (null === D || void 0 === D ? void 0 : D.length) >
                                0 ||
                              ((null === L || void 0 === L
                                ? void 0
                                : L.showSocial) &&
                                Array.isArray(
                                  null === o || void 0 === o ? void 0 : o.social
                                ) &&
                                (null === o || void 0 === o
                                  ? void 0
                                  : o.social.length) > 0)) &&
                              (0, i.jsx)("div", {
                                className: "ml-auto lg:hidden",
                                children: (0, i.jsx)("button", {
                                  className:
                                    "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                  style: { color: _ },
                                  onClick: function () {
                                    return C(!0);
                                  },
                                  children: (0, i.jsx)(A.Z, {
                                    className: "block h-5 w-5",
                                    "aria-hidden": "true",
                                  }),
                                }),
                              }),
                          ],
                        }),
                }),
              }),
              (0, i.jsx)(v.V, {
                open: O,
                onClose: function () {
                  return C(!1);
                },
                className: "relative z-50 h-full",
                children: (0, i.jsx)(v.V.Panel, {
                  className: "fixed inset-0 flex flex-col h-full",
                  style: { backgroundColor: P, color: _ },
                  children: (0, i.jsxs)("div", {
                    className:
                      "flex-1 flex flex-col h-full container mx-auto px-6",
                    children: [
                      (0, i.jsxs)("div", {
                        className: (0, s.AK)(
                          "items-center gap-3 py-6",
                          "center" ===
                            (null === L || void 0 === L ? void 0 : L.style) ||
                            "full-center" ===
                              (null === L || void 0 === L ? void 0 : L.style)
                            ? "grid grid-cols-fit-3"
                            : "flex justify-between"
                        ),
                        children: [
                          ("center" ===
                            (null === L || void 0 === L ? void 0 : L.style) ||
                            "full-center" ===
                              (null === L || void 0 === L
                                ? void 0
                                : L.style)) &&
                            (0, i.jsx)("div", {}),
                          M(),
                          (0, i.jsx)("div", {
                            className: "ml-auto lg:hidden",
                            children: (0, i.jsx)("button", {
                              className:
                                "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                              style: { color: _ },
                              onClick: function () {
                                return C(!1);
                              },
                              children: (0, i.jsx)(Z.Z, {
                                className: "block h-5 w-5",
                                "aria-hidden": "true",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "flex-1 py-6",
                        children: (0, i.jsx)("ul", {
                          className:
                            "flex flex-col gap-4 w-full max-h-[55vh] overflow-auto",
                          style: { color: _ },
                          children:
                            null === D || void 0 === D
                              ? void 0
                              : D.map(function (e) {
                                  return (0,
                                  i.jsx)("li", { className: (0, s.AK)("font-light text-2xl py-2 border-b-2"), style: { borderColor: e.current ? "".concat(o.secondaryColor) : "transparent" }, children: (0, i.jsx)(u(), { href: e.href, children: (0, i.jsx)("a", { className: "block w-full", children: e.name }) }) }, "page-link-".concat(e.href));
                                }),
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        children: [
                          (null === L || void 0 === L
                            ? void 0
                            : L.showSocial) &&
                            (0, i.jsx)("ul", {
                              className: "flex items-center gap-5 py-6",
                              children:
                                Array.isArray(o.social) &&
                                o.social.map(function (e, n) {
                                  var l;
                                  return (0,
                                  i.jsx)("li", { children: (0, i.jsx)(u(), { href: "https://".concat(null === (l = e.link) || void 0 === l ? void 0 : l.replace(/https?:\/\//gi, "")), children: (0, i.jsx)("a", { target: "_blank", children: R(e.type) }) }) }, "social-icon-header-".concat(n));
                                }),
                            }),
                          (null === L || void 0 === L ? void 0 : L.button) &&
                            (0, i.jsx)("div", {
                              className: "py-6",
                              children: (0, i.jsx)(a.Z, {
                                className: "xl !font-normal !py-1.5",
                                button: L.button,
                                website: o,
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      var F = l(9008),
        P = l.n(F);
      l(29260);
      function E(e, n, l) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = l),
          e
        );
      }
      function K(e) {
        for (var n = 1; n < arguments.length; n++) {
          var l = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(l);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(l).filter(function (e) {
                return Object.getOwnPropertyDescriptor(l, e).enumerable;
              })
            )),
            o.forEach(function (n) {
              E(e, n, l[n]);
            });
        }
        return e;
      }
      function _(e) {
        var n,
          l,
          o = e.website,
          t = e.office,
          d = (0, r.useState)("#FFFFFF"),
          v = d[0],
          A = d[1],
          Z = (0, r.useState)("#111827"),
          O = Z[0],
          S = Z[1],
          C = (0, c.useRouter)(),
          F = null === o || void 0 === o ? void 0 : o.footer,
          P =
            null ===
              (l =
                null === (n = o.pages) || void 0 === n
                  ? void 0
                  : n.filter(function (e) {
                      return !0 === e.showOnFooter || void 0 === e.showOnFooter;
                    })) || void 0 === l
              ? void 0
              : l.map(function (e) {
                  return {
                    href: "/".concat(e.slug || ""),
                    name: e.label,
                    current: C.asPath === "/".concat(e.slug || ""),
                  };
                }),
          E = function (e) {
            var n = "w-8 h-8";
            return "angi" === e
              ? (0, i.jsx)(f.Z, { className: n, style: { color: O } })
              : "behance" === e
              ? (0, i.jsx)(h.Z, { className: n, style: { color: O } })
              : "dribbble" === e
              ? (0, i.jsx)(m.Z, { className: n, style: { color: O } })
              : "facebook" === e
              ? (0, i.jsx)(x.Z, { className: n, style: { color: O } })
              : "homeadvisor" === e
              ? (0, i.jsx)(g.Z, { className: n, style: { color: O } })
              : "instagram" === e
              ? (0, i.jsx)(p.Z, { className: n, style: { color: O } })
              : "linkedin" === e
              ? (0, i.jsx)(y.Z, { className: n, style: { color: O } })
              : "pinterest" === e
              ? (0, i.jsx)(b.Z, { className: n, style: { color: O } })
              : "tiktok" === e
              ? (0, i.jsx)(j.Z, { className: n, style: { color: O } })
              : "thumbtack" === e
              ? (0, i.jsx)(w.Z, { className: n, style: { color: O } })
              : "twitter" === e
              ? (0, i.jsx)(N.Z, { className: n, style: { color: O } })
              : "youtube" === e
              ? (0, i.jsx)(k.Z, { className: n, style: { color: O } })
              : void 0;
          };
        return (
          (0, r.useEffect)(
            function () {
              if (F) {
                var e;
                if (
                  (A(F.background || "#FFFFFF"),
                  F.showName &&
                    (null === F.businessName || void 0 === F.businessName))
                )
                  F.businessName =
                    null === o ||
                    void 0 === o ||
                    null === (e = o.Business) ||
                    void 0 === e
                      ? void 0
                      : e.name;
                !F.showAddress ||
                  (null !== F.businessAddress &&
                    void 0 !== F.businessAddress) ||
                  (F.businessAddress = (function () {
                    var e = "";
                    return (
                      (null === t || void 0 === t ? void 0 : t.address) &&
                        ((e += t.address.line1 ? t.address.line1 + " " : ""),
                        (e += t.address.line2 ? t.address.line2 + " " : ""),
                        (e += t.address.city ? t.address.city + " " : ""),
                        (e += t.address.state ? t.address.state + " " : ""),
                        (e += t.address.country ? t.address.country + " " : ""),
                        (e += t.address.postalCode
                          ? t.address.postalCode
                          : "")),
                      e.trim()
                    );
                  })());
              }
            },
            [F]
          ),
          (0, r.useEffect)(
            function () {
              v && S((0, s.$O)(v));
            },
            [v]
          ),
          (0, i.jsx)("footer", {
            className: "flex-1",
            style: { backgroundColor: v, color: O },
            children: (0, i.jsxs)("div", {
              className:
                "flex flex-col lg:flex-row items-center gap-12 lg:gap-3 container mx-auto py-12 lg:py-14 xl:py-20 px-6",
              children: [
                (0, i.jsxs)("div", {
                  className: "flex-1 w-full lg:w-auto",
                  children: [
                    (null === F || void 0 === F ? void 0 : F.showName) &&
                      (0, i.jsx)("h3", {
                        className: "text-xl lg:text-2xl xl:text-h3 mb-6",
                        style: K({ color: O }, (0, s.j2)(o)),
                        children:
                          null === F || void 0 === F ? void 0 : F.businessName,
                      }),
                    (0, i.jsx)("div", {
                      className: "flex flex-col lg:flex-row gap-6 lg:gap-16",
                      children:
                        (null === F || void 0 === F ? void 0 : F.showAddress) &&
                        (0, i.jsx)("div", {
                          style: { color: O },
                          children:
                            null === F || void 0 === F
                              ? void 0
                              : F.businessAddress,
                        }),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className:
                    "flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-14 w-full lg:w-auto",
                  children: [
                    P &&
                      (0, i.jsx)("ul", {
                        className:
                          "flex flex-col lg:flex-row lg:items-center gap-6",
                        style: { color: O },
                        children:
                          null === P || void 0 === P
                            ? void 0
                            : P.map(function (e) {
                                return (0,
                                i.jsx)("li", { className: (0, s.AK)("border-b-2"), style: { borderColor: e.current ? "".concat(O) : "transparent" }, children: (0, i.jsx)(u(), { href: e.href, children: (0, i.jsx)("a", { className: "block py-1.5 text-2xl font-light", children: e.name }) }) }, "page-link-".concat(e.href));
                              }),
                      }),
                    (null === F || void 0 === F ? void 0 : F.showSocial) &&
                      (0, i.jsx)("ul", {
                        className: "flex items-center gap-5",
                        children: o.social.map(function (e, n) {
                          var l;
                          return (0,
                          i.jsx)("li", { children: (0, i.jsx)(u(), { href: "https://".concat(null === (l = e.link) || void 0 === l ? void 0 : l.replace(/https?:\/\//gi, "")), children: (0, i.jsx)("a", { target: "_blank", children: E(e.type) }) }) }, "social-icon-header-".concat(n));
                        }),
                      }),
                    (null === F || void 0 === F ? void 0 : F.button) &&
                      (0, i.jsx)(a.Z, {
                        className: "lg !py-2",
                        button: F.button,
                        website: o,
                      }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var B = l(25935),
        I = l(99490),
        L = l(76216),
        D = l(85518),
        R = l(74865),
        T = l.n(R),
        z = l(11163),
        M = l.n(z);
      function V(e, n, l, o, t, i, s) {
        try {
          var r = e[i](s),
            a = r.value;
        } catch (c) {
          return void l(c);
        }
        r.done ? n(a) : Promise.resolve(a).then(o, t);
      }
      function $(e) {
        return function () {
          var n = this,
            l = arguments;
          return new Promise(function (o, t) {
            var i = e.apply(n, l);
            function s(e) {
              V(i, o, t, s, r, "next", e);
            }
            function r(e) {
              V(i, o, t, s, r, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function q(e, n, l) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = l),
          e
        );
      }
      function H(e) {
        for (var n = 1; n < arguments.length; n++) {
          var l = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(l);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(l).filter(function (e) {
                return Object.getOwnPropertyDescriptor(l, e).enumerable;
              })
            )),
            o.forEach(function (n) {
              q(e, n, l[n]);
            });
        }
        return e;
      }
      var U = [];
      T().configure({ showSpinner: !1 }),
        M().events.on("routeChangeStart", function (e) {
          T().start();
        }),
        M().events.on("routeChangeComplete", function () {
          return T().done();
        }),
        M().events.on("routeChangeError", function () {
          return T().done();
        });
      var W = function (e) {
        var n,
          l,
          o,
          a,
          d,
          u,
          v,
          f,
          h,
          m,
          x,
          g,
          p,
          y,
          b,
          j,
          w,
          N,
          k,
          A,
          Z,
          O,
          S,
          F,
          E,
          K,
          R,
          T = e.children,
          z = e.website,
          M = e.office,
          V = e.page,
          q = e.apiUrl,
          W = (0, c.useRouter)(),
          J = (0, r.useState)(0),
          G = J[0],
          Y = J[1],
          Q = (0, r.useState)(!1),
          X = Q[0],
          ee = Q[1],
          ne = (0, r.useState)(null),
          le = ne[0],
          oe = ne[1],
          te = (0, r.useState)(0),
          ie = te[0],
          se = te[1],
          re = new s.bl(q),
          ae = H({}, z.seo, null === V || void 0 === V ? void 0 : V.seo),
          ce = (function () {
            var e = $(
              t().mark(function e(n) {
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((0 !== n.target.scrollTop && 0 !== G) ||
                            Y(n.target.scrollTop),
                          X)
                        ) {
                          e.next = 5;
                          break;
                        }
                        return (e.next = 4), ue("scroll");
                      case 4:
                        ee(!0);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          de = r.Children.map(T, function (e) {
            return r.isValidElement(e) ? r.cloneElement(e, H({}, e.props)) : e;
          }),
          ue = (function () {
            var e = $(
              t().mark(function e(n) {
                var l, o, i, s, r, a;
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (i = JSON.parse(
                            localStorage.getItem("user") || "{}"
                          )) &&
                          i.ip &&
                          !(
                            I.ou.now().diff(I.ou.fromISO(i.date), "hours")
                              .hours > 24
                          ) &&
                          i.hash
                        ) {
                          e.next = 11;
                          break;
                        }
                        return (e.next = 6), (0, L.zk)();
                      case 6:
                        (s = e.sent),
                          (r = I.ou.now().toMillis()),
                          localStorage.setItem(
                            "user",
                            JSON.stringify({
                              ip: s,
                              date: I.ou.now().startOf("day").toISO(),
                              hash: r,
                            })
                          ),
                          (i.ip = s),
                          (i.hash = r);
                      case 11:
                        (a = {
                          idWebsite: z._id,
                          url: document.location.pathname,
                          event: n,
                          platform: window.platform
                            ? null === (l = window.platform) || void 0 === l
                              ? void 0
                              : l.toString()
                            : navigator.userAgentData
                            ? null === (o = navigator.userAgentData) ||
                              void 0 === o
                              ? void 0
                              : o.platform
                            : "bot",
                          title: document.title.split(" - ")[0] || "Home",
                          device:
                            /bot|googlebot|crawler|spider|robot|crawling/i.test(
                              navigator.userAgent
                            )
                              ? "bot"
                              : D.tq
                              ? "mobile"
                              : "desktop",
                          ip: i.ip,
                          hash: i.hash,
                        }),
                          U.push(a);
                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
        return (
          (0, r.useEffect)(
            function () {
              var e;
              return (
                ie < 12 &&
                  (e = setInterval(
                    $(
                      t().mark(function e() {
                        return t().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                ue("ping"), se(ie + 1);
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    ),
                    15e3
                  )),
                le !== W.asPath && (ue("open"), oe(W.asPath), se(0)),
                function () {
                  se(0), clearInterval(e);
                }
              );
            },
            [W, ie]
          ),
          (0, r.useEffect)(function () {
            var e,
              n = (function () {
                var l = $(
                  t().mark(function l() {
                    var o;
                    return t().wrap(function (l) {
                      for (;;)
                        switch ((l.prev = l.next)) {
                          case 0:
                            if (!(o = U.shift())) {
                              l.next = 4;
                              break;
                            }
                            return (
                              (l.next = 4),
                              re.post("/website/register-user-action", o)
                            );
                          case 4:
                            e = setTimeout(
                              function () {
                                n();
                              },
                              U.length > 0 ? 50 : 1e3
                            );
                          case 5:
                          case "end":
                            return l.stop();
                        }
                    }, l);
                  })
                );
                return function () {
                  return l.apply(this, arguments);
                };
              })();
            return (
              n(),
              function () {
                clearTimeout(e);
              }
            );
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(P(), {
                children: [
                  (0, i.jsx)("meta", {
                    name: "theme-color",
                    content: (function () {
                      var e;
                      return (
                        (null === z ||
                        void 0 === z ||
                        null === (e = z.header) ||
                        void 0 === e
                          ? void 0
                          : e.background) ||
                        (null === z || void 0 === z ? void 0 : z.primaryColor)
                      );
                    })(),
                  }),
                  (0, i.jsx)("link", {
                    rel: "icon",
                    href:
                      (null === (n = z.favicon) || void 0 === n
                        ? void 0
                        : n.url) || "/favicon.ico",
                  }),
                  (0, i.jsx)("title", {
                    children: (null === ae || void 0 === ae ? void 0 : ae.title)
                      ? ae.title
                      : (null === (l = z.Business) || void 0 === l
                          ? void 0
                          : l.name) +
                        " | " +
                        (null === (o = z.Business) ||
                        void 0 === o ||
                        null === (a = o.type) ||
                        void 0 === a
                          ? void 0
                          : a.name),
                  }),
                  (0, i.jsx)("meta", {
                    name: "description",
                    content: (
                      null === ae || void 0 === ae ? void 0 : ae.description
                    )
                      ? ae.description
                      : "",
                  }),
                  (0, i.jsx)("meta", {
                    name: "keywords",
                    content: (
                      null === ae || void 0 === ae ? void 0 : ae.keywords
                    )
                      ? ae.keywords
                      : (null === z ||
                        void 0 === z ||
                        null === (d = z.Business) ||
                        void 0 === d ||
                        null === (u = d.name) ||
                        void 0 === u
                          ? void 0
                          : u.split(" ").join(",")) +
                        "," +
                        (null === z ||
                        void 0 === z ||
                        null === (v = z.Business) ||
                        void 0 === v ||
                        null === (f = v.type) ||
                        void 0 === f ||
                        null === (h = f.name) ||
                        void 0 === h
                          ? void 0
                          : h.split(" ").join(",")),
                  }),
                  (0, i.jsx)("meta", {
                    property: "og:title",
                    content: (null === ae || void 0 === ae ? void 0 : ae.title)
                      ? ae.title
                      : (null === (m = z.Business) || void 0 === m
                          ? void 0
                          : m.name) +
                        " | " +
                        (null === (x = z.Business) ||
                        void 0 === x ||
                        null === (g = x.type) ||
                        void 0 === g
                          ? void 0
                          : g.name),
                  }),
                  (0, i.jsx)("meta", {
                    property: "og:type",
                    content: "website",
                  }),
                  (0, i.jsx)("meta", {
                    property: "og:description",
                    content: (
                      null === ae || void 0 === ae ? void 0 : ae.description
                    )
                      ? ae.description
                      : "",
                  }),
                  (null === ae ||
                  void 0 === ae ||
                  null === (p = ae.Image) ||
                  void 0 === p
                    ? void 0
                    : p.url) &&
                    (0, i.jsx)("meta", {
                      property: "og:image",
                      content: ae.Image.url,
                    }),
                  (null === ae || void 0 === ae ? void 0 : ae.headCode) &&
                    (0, B.ZP)(ae.headCode),
                  (null === z ||
                  void 0 === z ||
                  null === (y = z.fonts) ||
                  void 0 === y ||
                  null === (b = y.head) ||
                  void 0 === b
                    ? void 0
                    : b.name) &&
                    (null === z ||
                    void 0 === z ||
                    null === (j = z.fonts) ||
                    void 0 === j ||
                    null === (w = j.body) ||
                    void 0 === w
                      ? void 0
                      : w.name) &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("link", {
                          rel: "preconnect",
                          href: "https://fonts.googleapis.com",
                        }),
                        (0, i.jsx)("link", {
                          rel: "preconnect",
                          href: "https://fonts.gstatic.com",
                          crossOrigin: !0,
                        }),
                        (0, i.jsx)("link", {
                          href: "https://fonts.googleapis.com/css2?family="
                            .concat(
                              null === z ||
                                void 0 === z ||
                                null === (N = z.fonts) ||
                                void 0 === N ||
                                null === (k = N.head) ||
                                void 0 === k ||
                                null === (A = k.name) ||
                                void 0 === A
                                ? void 0
                                : A.replace(/ /gi, "+"),
                              ":wght@"
                            )
                            .concat(
                              null === z ||
                                void 0 === z ||
                                null === (Z = z.fonts) ||
                                void 0 === Z ||
                                null === (O = Z.head) ||
                                void 0 === O
                                ? void 0
                                : O.weight,
                              "&family="
                            )
                            .concat(
                              null === z ||
                                void 0 === z ||
                                null === (S = z.fonts) ||
                                void 0 === S ||
                                null === (F = S.body) ||
                                void 0 === F ||
                                null === (E = F.name) ||
                                void 0 === E
                                ? void 0
                                : E.replace(/ /gi, "+"),
                              ":wght@"
                            )
                            .concat(
                              null === z ||
                                void 0 === z ||
                                null === (K = z.fonts) ||
                                void 0 === K ||
                                null === (R = K.body) ||
                                void 0 === R
                                ? void 0
                                : R.weight,
                              "&display=swap"
                            ),
                          rel: "stylesheet",
                        }),
                      ],
                    }),
                  (null === z || void 0 === z ? void 0 : z.searchIndexing)
                    ? (0, i.jsx)("meta", { name: "robots", content: "all" })
                    : (0, i.jsx)("meta", {
                        name: "robots",
                        content: "noindex,nofollow",
                      }),
                ],
              }),
              (0, i.jsxs)("div", {
                onScroll: function (e) {
                  return ce(e);
                },
                className:
                  "min-h-full w-full flex flex-col smooth-scroll break-word",
                style: (0, s.SV)(z),
                children: [
                  (0, i.jsx)(C, { scrollY: G, website: z, office: M }),
                  de,
                  (0, i.jsx)(_, { website: z, office: M }),
                ],
              }),
              (null === ae || void 0 === ae ? void 0 : ae.footerCode) &&
                (0, B.ZP)(ae.footerCode),
            ],
          })
        );
      };
    },
    99270: function (e, n, l) {
      "use strict";
      l.d(n, {
        Z: function () {
          return i;
        },
      });
      var o = l(85893),
        t = l(60869);
      function i(e) {
        var n = e.text,
          l = e.className;
        switch (e.variant) {
          case "form":
            return (0, o.jsx)("div", {
              className: "w-full max-w-screen-sm my-8",
              children: (0, o.jsxs)("div", {
                className: "animate-pulse flex space-y-8 flex-col",
                children: [
                  (0, o.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, o.jsx)("div", {
                        className: "h-4 bg-gray-100 rounded w-1/2",
                      }),
                      (0, o.jsx)("div", {
                        className: "h-9 bg-gray-100 rounded",
                      }),
                      (0, o.jsx)("div", {
                        className: "h-2 bg-gray-100 rounded w-5/6",
                      }),
                    ],
                  }),
                  (0, o.jsx)("hr", {}),
                  (0, o.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, o.jsx)("div", {
                        className: "h-4 bg-gray-100 rounded w-1/4",
                      }),
                      (0, o.jsx)("div", {
                        className: "h-9 bg-gray-100 rounded",
                      }),
                      (0, o.jsx)("div", {
                        className: "h-2 bg-gray-100 rounded w-1/2",
                      }),
                    ],
                  }),
                  (0, o.jsx)("hr", {}),
                  (0, o.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, o.jsx)("div", {
                        className: "h-4 bg-gray-100 rounded w-1/4",
                      }),
                      (0, o.jsx)("div", {
                        className: "h-9 bg-gray-100 rounded",
                      }),
                      (0, o.jsx)("div", {
                        className: "h-2 bg-gray-100 rounded w-1/2",
                      }),
                    ],
                  }),
                  (0, o.jsx)("hr", {}),
                  (0, o.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, o.jsx)("div", {
                        className: "h-4 bg-gray-100 rounded w-1/6",
                      }),
                      (0, o.jsx)("div", {
                        className: "h-9 bg-gray-100 rounded",
                      }),
                      (0, o.jsx)("div", {
                        className: "h-2 bg-gray-100 rounded w-3/4",
                      }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    className: "h-10 bg-gray-200 rounded w-1/4 ml-auto mt-4",
                  }),
                ],
              }),
            });
          case "table":
            return (0, o.jsx)("div", {
              className: "w-full my-8",
              children: (0, o.jsxs)("div", {
                className: "animate-pulse flex space-y-2 flex-col",
                children: [
                  (0, o.jsxs)("div", {
                    className: "space-x-2 flex",
                    children: [
                      (0, o.jsx)("div", {
                        className: "h-9 bg-gray-200 rounded w-full",
                      }),
                      (0, o.jsx)("div", {
                        className: "h-9 bg-gray-200 rounded w-full",
                      }),
                      (0, o.jsx)("div", {
                        className: "h-9 bg-gray-200 rounded w-full",
                      }),
                      (0, o.jsx)("div", {
                        className: "h-9 bg-gray-200 rounded w-full",
                      }),
                      (0, o.jsx)("div", {
                        className: "h-9 bg-gray-200 rounded w-full",
                      }),
                      (0, o.jsx)("div", {
                        className: "h-9 bg-gray-200 rounded w-full",
                      }),
                    ],
                  }),
                  [1, 2, 3, 4, 5, 6].map(function (e) {
                    return (0,
                    o.jsxs)("div", { className: "space-x-2 flex", children: [(0, o.jsx)("div", { className: "h-9 bg-gray-100 rounded w-full" }), (0, o.jsx)("div", { className: "h-9 bg-gray-100 rounded w-full" }), (0, o.jsx)("div", { className: "h-9 bg-gray-100 rounded w-full" }), (0, o.jsx)("div", { className: "h-9 bg-gray-100 rounded w-full" }), (0, o.jsx)("div", { className: "h-9 bg-gray-100 rounded w-full" }), (0, o.jsx)("div", { className: "h-9 bg-gray-100 rounded w-full" })] }, e);
                  }),
                ],
              }),
            });
          default:
            return (0, o.jsxs)("div", {
              className: (0, t.AK)("inline-flex items-center", l),
              children: [
                (0, o.jsxs)("svg", {
                  className: (0, t.AK)(
                    "animate-spin ml-1 mr-3 h-4 w-4",
                    l && "text-indigo-600"
                  ),
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    (0, o.jsx)("circle", {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4",
                    }),
                    (0, o.jsx)("path", {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                    }),
                  ],
                }),
                n || "" === n ? n : "Loading...",
              ],
            });
        }
      }
    },
    60869: function (e, n, l) {
      "use strict";
      l.d(n, {
        bl: function () {
          return f;
        },
        $O: function () {
          return j;
        },
        Z9: function () {
          return x;
        },
        SV: function () {
          return A;
        },
        AK: function () {
          return y;
        },
        p$: function () {
          return N;
        },
        G0: function () {
          return Z;
        },
        j2: function () {
          return k;
        },
        ac: function () {
          return w;
        },
        oH: function () {
          return b;
        },
      });
      var o = l(85893),
        t = l(34051),
        i = l.n(t),
        s = l(9669),
        r = l.n(s),
        a = l(40782),
        c = l(83454);
      function d(e, n, l, o, t, i, s) {
        try {
          var r = e[i](s),
            a = r.value;
        } catch (c) {
          return void l(c);
        }
        r.done ? n(a) : Promise.resolve(a).then(o, t);
      }
      function u(e) {
        return function () {
          var n = this,
            l = arguments;
          return new Promise(function (o, t) {
            var i = e.apply(n, l);
            function s(e) {
              d(i, o, t, s, r, "next", e);
            }
            function r(e) {
              d(i, o, t, s, r, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function v(e, n, l) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = l),
          e
        );
      }
      var f = function e(n) {
          !(function (e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            v(
              this,
              "get",
              (function () {
                var e = u(
                  i().mark(function e(n, l) {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              "return",
                              new Promise(function (e, o) {
                                r()
                                  .get(n, {
                                    params: l || {},
                                    headers: {
                                      "Content-Type": "application/json",
                                      Accept: "*/*",
                                    },
                                  })
                                  .then(
                                    (function () {
                                      var n = u(
                                        i().mark(function n(l) {
                                          return i().wrap(function (n) {
                                            for (;;)
                                              switch ((n.prev = n.next)) {
                                                case 0:
                                                  e(l.data);
                                                case 1:
                                                case "end":
                                                  return n.stop();
                                              }
                                          }, n);
                                        })
                                      );
                                      return function (e) {
                                        return n.apply(this, arguments);
                                      };
                                    })()
                                  )
                                  .catch(function (n) {
                                    n.response
                                      ? e({
                                          status: !1,
                                          message: n.response.data.message,
                                        })
                                      : n.request
                                      ? e({
                                          status: !1,
                                          message: n.request.message,
                                        })
                                      : e({ status: !1, message: n.message }),
                                      e({ status: !1, message: n.config });
                                  });
                              })
                            );
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (n, l) {
                  return e.apply(this, arguments);
                };
              })()
            ),
            v(
              this,
              "post",
              (function () {
                var e = u(
                  i().mark(function e(n, l, o) {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              "return",
                              new Promise(function (e, t) {
                                r()
                                  .post(n, l || {}, {
                                    headers: {
                                      "Content-Type": o
                                        ? "multipart/form-data"
                                        : "application/json",
                                      Accept: "*/*",
                                    },
                                  })
                                  .then(function (n) {
                                    e(n.data);
                                  })
                                  .catch(function (n) {
                                    n.response
                                      ? e(n.response.data)
                                      : n.request
                                      ? e({ status: !1, message: n.request })
                                      : e({ status: !1, message: n.message }),
                                      e({ status: !1, message: n.config });
                                  });
                              })
                            );
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (n, l, o) {
                  return e.apply(this, arguments);
                };
              })()
            ),
            (r().defaults.withCredentials = !0),
            (r().defaults.baseURL =
              n || c.env.API_URL || "https://api.durable.co");
        },
        h = l(5506),
        m = function (e) {
          var n = e.closeToast;
          return (0, o.jsx)(h.Z, {
            className: "h-5 w-5 text-gray-600",
            onClick: n,
          });
        },
        x = {
          default: function (e) {
            (0, a.Am)(e);
          },
          info: function (e) {
            a.Am.info(e);
          },
          success: function (e) {
            a.Am.success(e);
          },
          warn: function (e) {
            a.Am.warn(e);
          },
          error: function (e) {
            a.Am.error(e, { autoClose: !1, closeButton: (0, o.jsx)(m, {}) });
          },
        },
        g = l(78546),
        p = l(67294);
      l(7025);
      function y() {
        for (var e = arguments.length, n = new Array(e), l = 0; l < e; l++)
          n[l] = arguments[l];
        return n.filter(Boolean).join(" ");
      }
      function b(e) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          e
        );
      }
      function j(e) {
        var n = !1;
        if (!e || !e[0]) return e;
        "#" === e[0] && ((e = e.slice(1)), (n = !0));
        var l = parseInt(
            6 === e.length
              ? e
              : ""
                  .concat(e[0])
                  .concat(e[0])
                  .concat(e[1])
                  .concat(e[1])
                  .concat(e[2])
                  .concat(e[2]),
            16
          ),
          o = ((l >> 16) + (255 & l) + ((l >> 8) & 255)) / 3;
        return (n ? "#" : "") + (o = o > 128 ? "000000" : "FFFFFF");
      }
      function w(e) {
        var n = (0, p.useState)(!0),
          l = n[0],
          o = n[1];
        return (
          (0, p.useEffect)(
            function () {
              var n = window.matchMedia(e);
              n.matches !== l && o(n.matches);
              var t = function () {
                o(n.matches);
              };
              return (
                n.addListener(t),
                function () {
                  return n.removeListener(t);
                }
              );
            },
            [l, e]
          ),
          l
        );
      }
      function N(e) {
        return JSON.parse(JSON.stringify(e));
      }
      var k = function (e) {
          var n, l, o, t;
          return {
            fontFamily:
              (null === e ||
              void 0 === e ||
              null === (n = e.fonts) ||
              void 0 === n ||
              null === (l = n.head) ||
              void 0 === l
                ? void 0
                : l.family) || '"Space Grotesk", sans-serif',
            fontWeight:
              (null === e ||
              void 0 === e ||
              null === (o = e.fonts) ||
              void 0 === o ||
              null === (t = o.head) ||
              void 0 === t
                ? void 0
                : t.weight) || 500,
          };
        },
        A = function (e) {
          var n, l, o, t;
          return {
            fontFamily:
              (null === e ||
              void 0 === e ||
              null === (n = e.fonts) ||
              void 0 === n ||
              null === (l = n.body) ||
              void 0 === l
                ? void 0
                : l.family) || '"Space Grotesk", sans-serif',
            fontWeight:
              (null === e ||
              void 0 === e ||
              null === (o = e.fonts) ||
              void 0 === o ||
              null === (t = o.body) ||
              void 0 === t
                ? void 0
                : t.weight) || 500,
          };
        };
      function Z(e) {
        var n = e.props.children[0].props.website,
          l = e.props.children[0].props.page,
          t = e.props.children[0].props.office,
          i = e.props.children[0].props.apiUrl;
        return (0, o.jsx)(g.Z, {
          page: l,
          website: n,
          apiUrl: i,
          office: t,
          children: e,
        });
      }
    },
    5696: function () {},
    42480: function () {},
    25832: function () {},
  },
]);
