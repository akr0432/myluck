"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [186],
  {
    6054: function (e, a, t) {
      t.d(a, {
        MR: function () {
          return ne;
        },
        ZP: function () {
          return _e;
        },
      });
      var r,
        c,
        i,
        n,
        o,
        s,
        u = t(75068),
        m = t(79681),
        l = t.n(m),
        d = t(97326),
        h = t(47715),
        g = t.n(h),
        f = t(67855),
        A = t(16855),
        v = t(51852),
        p = t(87462),
        y = t(68214),
        b = t.n(y),
        x = t(48764).Buffer,
        O = (function (e) {
          function a(a, t, r) {
            var c;
            return (
              ((c = e.call(this, { decodeStrings: !1 }) || this).finalize =
                c.finalize.bind((0, d.Z)(c))),
              (c.document = a),
              (c.id = t),
              null == r && (r = {}),
              (c.data = r),
              (c.gen = 0),
              (c.deflate = null),
              (c.compress = c.document.compress && !c.data.Filter),
              (c.uncompressedLength = 0),
              (c.chunks = []),
              c
            );
          }
          (0, u.Z)(a, e);
          var t = a.prototype;
          return (
            (t.initDeflate = function () {
              var e = this;
              return (
                (this.data.Filter = "FlateDecode"),
                (this.deflate = g().createDeflate()),
                this.deflate.on("data", function (a) {
                  return e.chunks.push(a), (e.data.Length += a.length);
                }),
                this.deflate.on("end", this.finalize)
              );
            }),
            (t._write = function (e, a, t) {
              return (
                x.isBuffer(e) || (e = x.from(e + "\n", "binary")),
                (this.uncompressedLength += e.length),
                null == this.data.Length && (this.data.Length = 0),
                this.compress
                  ? (this.deflate || this.initDeflate(), this.deflate.write(e))
                  : (this.chunks.push(e), (this.data.Length += e.length)),
                t()
              );
            }),
            (t.end = function () {
              return (
                e.prototype.end.apply(this, arguments),
                this.deflate ? this.deflate.end() : this.finalize()
              );
            }),
            (t.finalize = function () {
              if (
                ((this.offset = this.document._offset),
                this.document._write(this.id + " " + this.gen + " obj"),
                this.document._write(Y.convert(this.data)),
                this.chunks.length)
              ) {
                this.document._write("stream");
                for (
                  var e = 0, a = Array.from(this.chunks);
                  e < a.length;
                  e++
                ) {
                  var t = a[e];
                  this.document._write(t);
                }
                (this.chunks.length = 0), this.document._write("\nendstream");
              }
              return (
                this.document._write("endobj"), this.document._refEnd(this)
              );
            }),
            (t.toString = function () {
              return this.id + " " + this.gen + " R";
            }),
            a
          );
        })(l().Writable),
        T = (function () {
          function e() {
            this._items = {};
          }
          var a = e.prototype;
          return (
            (a.add = function (e, a) {
              return (this._items[e] = a);
            }),
            (a.get = function (e) {
              return this._items[e];
            }),
            (a.toString = function () {
              var e = Object.keys(this._items).sort(function (e, a) {
                  return e.localeCompare(a);
                }),
                a = ["<<"];
              if (e.length > 1) {
                var t = e[0],
                  r = e[e.length - 1];
                a.push(
                  "  /Limits " + Y.convert([new String(t), new String(r)])
                );
              }
              a.push("  /Names [");
              for (var c, i = (0, f.Z)(e); !(c = i()).done; ) {
                var n = c.value;
                a.push(
                  "    " +
                    Y.convert(new String(n)) +
                    " " +
                    Y.convert(this._items[n])
                );
              }
              return a.push("]"), a.push(">>"), a.join("\n");
            }),
            e
          );
        })(),
        k = /[\n\r\t\b\f\(\)\\]/g,
        C = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t",
          "\b": "\\b",
          "\f": "\\f",
          "\\": "\\\\",
          "(": "\\(",
          ")": "\\)",
        },
        U = function (e, a) {
          return (Array(a + 1).join("0") + e).slice(-a);
        },
        Y = (function () {
          function e() {}
          return (
            (e.convert = function (a) {
              if ("string" === typeof a) return "/" + a;
              if (a instanceof String) {
                for (var t = a, r = !1, c = 0, i = t.length; c < i; c++)
                  if (t.charCodeAt(c) > 127) {
                    r = !0;
                    break;
                  }
                return (
                  r &&
                    (t = (function (e) {
                      var a = e.length;
                      if (1 & a) throw new Error("Buffer length must be even");
                      for (var t = 0, r = a - 1; t < r; t += 2) {
                        var c = e[t];
                        (e[t] = e[t + 1]), (e[t + 1] = c);
                      }
                      return e;
                    })(x.from("\ufeff" + t, "utf16le")).toString("binary")),
                  "(" +
                    (t = t.replace(k, function (e) {
                      return C[e];
                    })) +
                    ")"
                );
              }
              if (x.isBuffer(a)) return "<" + a.toString("hex") + ">";
              if (a instanceof O || a instanceof T) return a.toString();
              if (a instanceof Date)
                return (
                  "(D:" +
                  U(a.getUTCFullYear(), 4) +
                  U(a.getUTCMonth() + 1, 2) +
                  U(a.getUTCDate(), 2) +
                  U(a.getUTCHours(), 2) +
                  U(a.getUTCMinutes(), 2) +
                  U(a.getUTCSeconds(), 2) +
                  "Z)"
                );
              if (Array.isArray(a))
                return (
                  "[" +
                  Array.from(a)
                    .map(function (a) {
                      return e.convert(a);
                    })
                    .join(" ") +
                  "]"
                );
              if ("[object Object]" === {}.toString.call(a)) {
                var n = ["<<"];
                for (var o in a) {
                  var s = a[o];
                  n.push("/" + o + " " + e.convert(s));
                }
                return n.push(">>"), n.join("\n");
              }
              return "number" === typeof a ? e.number(a) : "" + a;
            }),
            (e.number = function (e) {
              if (e > -1e21 && e < 1e21) return Math.round(1e6 * e) / 1e6;
              throw new Error("unsupported number: " + e);
            }),
            e
          );
        })(),
        S = { top: 0, left: 0, bottom: 0, right: 0 },
        w = {
          "4A0": [4767.87, 6740.79],
          "2A0": [3370.39, 4767.87],
          A0: [2383.94, 3370.39],
          A1: [1683.78, 2383.94],
          A2: [1190.55, 1683.78],
          A3: [841.89, 1190.55],
          A4: [595.28, 841.89],
          A5: [419.53, 595.28],
          A6: [297.64, 419.53],
          A7: [209.76, 297.64],
          A8: [147.4, 209.76],
          A9: [104.88, 147.4],
          A10: [73.7, 104.88],
          B0: [2834.65, 4008.19],
          B1: [2004.09, 2834.65],
          B2: [1417.32, 2004.09],
          B3: [1000.63, 1417.32],
          B4: [708.66, 1000.63],
          B5: [498.9, 708.66],
          B6: [354.33, 498.9],
          B7: [249.45, 354.33],
          B8: [175.75, 249.45],
          B9: [124.72, 175.75],
          B10: [87.87, 124.72],
          C0: [2599.37, 3676.54],
          C1: [1836.85, 2599.37],
          C2: [1298.27, 1836.85],
          C3: [918.43, 1298.27],
          C4: [649.13, 918.43],
          C5: [459.21, 649.13],
          C6: [323.15, 459.21],
          C7: [229.61, 323.15],
          C8: [161.57, 229.61],
          C9: [113.39, 161.57],
          C10: [79.37, 113.39],
          RA0: [2437.8, 3458.27],
          RA1: [1729.13, 2437.8],
          RA2: [1218.9, 1729.13],
          RA3: [864.57, 1218.9],
          RA4: [609.45, 864.57],
          SRA0: [2551.18, 3628.35],
          SRA1: [1814.17, 2551.18],
          SRA2: [1275.59, 1814.17],
          SRA3: [907.09, 1275.59],
          SRA4: [637.8, 907.09],
          EXECUTIVE: [521.86, 756],
          FOLIO: [612, 936],
          LEGAL: [612, 1008],
          LETTER: [612, 792],
          TABLOID: [792, 1224],
        },
        _ = (function () {
          function e(e, a) {
            var t = this;
            (this.document = e),
              null == a && (a = {}),
              (this.size = a.size || "letter"),
              (this.layout = a.layout || "portrait"),
              (this.userUnit = a.userUnit || 1),
              (this.margins = S);
            var r = Array.isArray(this.size)
              ? this.size
              : w[this.size.toUpperCase()];
            (this.width = r["portrait" === this.layout ? 0 : 1]),
              (this.height = r["portrait" === this.layout ? 1 : 0]),
              (this.content = this.document.ref()),
              (this.resources = this.document.ref({
                ProcSet: ["PDF", "Text", "ImageB", "ImageC", "ImageI"],
              })),
              Object.defineProperties(this, {
                fonts: {
                  get: function () {
                    return null != t.resources.data.Font
                      ? t.resources.data.Font
                      : (t.resources.data.Font = {});
                  },
                },
                xobjects: {
                  get: function () {
                    return null != t.resources.data.XObject
                      ? t.resources.data.XObject
                      : (t.resources.data.XObject = {});
                  },
                },
                ext_gstates: {
                  get: function () {
                    return null != t.resources.data.ExtGState
                      ? t.resources.data.ExtGState
                      : (t.resources.data.ExtGState = {});
                  },
                },
                patterns: {
                  get: function () {
                    return null != t.resources.data.Pattern
                      ? t.resources.data.Pattern
                      : (t.resources.data.Pattern = {});
                  },
                },
                annotations: {
                  get: function () {
                    return null != t.dictionary.data.Annots
                      ? t.dictionary.data.Annots
                      : (t.dictionary.data.Annots = []);
                  },
                },
              }),
              (this.dictionary = this.document.ref({
                Type: "Page",
                Parent: this.document._root.data.Pages,
                MediaBox: [0, 0, this.width, this.height],
                Contents: this.content,
                Resources: this.resources,
                UserUnit: this.userUnit,
              }));
          }
          var a = e.prototype;
          return (
            (a.maxY = function () {
              return this.height;
            }),
            (a.write = function (e) {
              return this.content.write(e);
            }),
            (a.end = function () {
              return (
                this.dictionary.end(), this.resources.end(), this.content.end()
              );
            }),
            e
          );
        })(),
        F = Y.number,
        R = (function () {
          function e(e) {
            (this.doc = e),
              (this.stops = []),
              (this.embedded = !1),
              (this.transform = [1, 0, 0, 1, 0, 0]);
          }
          var a = e.prototype;
          return (
            (a.stop = function (e, a, t) {
              if (
                (null == t && (t = 1),
                (a = this.doc._normalizeColor(a)),
                0 === this.stops.length)
              )
                if (3 === a.length) this._colorSpace = "DeviceRGB";
                else if (4 === a.length) this._colorSpace = "DeviceCMYK";
                else {
                  if (1 !== a.length) throw new Error("Unknown color space");
                  this._colorSpace = "DeviceGray";
                }
              else if (
                ("DeviceRGB" === this._colorSpace && 3 !== a.length) ||
                ("DeviceCMYK" === this._colorSpace && 4 !== a.length) ||
                ("DeviceGray" === this._colorSpace && 1 !== a.length)
              )
                throw new Error(
                  "All gradient stops must use the same color space"
                );
              return (
                (t = Math.max(0, Math.min(1, t))),
                this.stops.push([e, a, t]),
                this
              );
            }),
            (a.setTransform = function (e, a, t, r, c, i) {
              return (this.transform = [e, a, t, r, c, i]), this;
            }),
            (a.embed = function (e) {
              var a,
                t = this.stops.length;
              if (0 !== t) {
                (this.embedded = !0), (this.matrix = e);
                var r = this.stops[t - 1];
                r[0] < 1 && this.stops.push([1, r[1], r[2]]);
                for (var c = [], i = [], n = [], o = 0; o < t - 1; o++)
                  i.push(0, 1),
                    o + 2 !== t && c.push(this.stops[o + 1][0]),
                    (a = this.doc.ref({
                      FunctionType: 2,
                      Domain: [0, 1],
                      C0: this.stops[o + 0][1],
                      C1: this.stops[o + 1][1],
                      N: 1,
                    })),
                    n.push(a),
                    a.end();
                1 === t
                  ? (a = n[0])
                  : (a = this.doc.ref({
                      FunctionType: 3,
                      Domain: [0, 1],
                      Functions: n,
                      Bounds: c,
                      Encode: i,
                    })).end(),
                  (this.id = "Sh" + ++this.doc._gradCount);
                var s = this.shader(a);
                s.end();
                var u = this.doc.ref({
                  Type: "Pattern",
                  PatternType: 2,
                  Shading: s,
                  Matrix: this.matrix.map(F),
                });
                if (
                  (u.end(),
                  this.stops.some(function (e) {
                    return e[2] < 1;
                  }))
                ) {
                  var m = this.opacityGradient();
                  m._colorSpace = "DeviceGray";
                  for (var l, d = (0, f.Z)(this.stops); !(l = d()).done; ) {
                    var h = l.value;
                    m.stop(h[0], [h[2]]);
                  }
                  m = m.embed(this.matrix);
                  var g = [0, 0, this.doc.page.width, this.doc.page.height],
                    A = this.doc.ref({
                      Type: "XObject",
                      Subtype: "Form",
                      FormType: 1,
                      BBox: g,
                      Group: {
                        Type: "Group",
                        S: "Transparency",
                        CS: "DeviceGray",
                      },
                      Resources: {
                        ProcSet: ["PDF", "Text", "ImageB", "ImageC", "ImageI"],
                        Pattern: { Sh1: m },
                      },
                    });
                  A.write("/Pattern cs /Sh1 scn"), A.end(g.join(" ") + " re f");
                  var v = this.doc.ref({
                    Type: "ExtGState",
                    SMask: { Type: "Mask", S: "Luminosity", G: A },
                  });
                  v.end();
                  var p = this.doc.ref({
                    Type: "Pattern",
                    PatternType: 1,
                    PaintType: 1,
                    TilingType: 2,
                    BBox: g,
                    XStep: g[2],
                    YStep: g[3],
                    Resources: {
                      ProcSet: ["PDF", "Text", "ImageB", "ImageC", "ImageI"],
                      Pattern: { Sh1: u },
                      ExtGState: { Gs1: v },
                    },
                  });
                  p.write("/Gs1 gs /Pattern cs /Sh1 scn"),
                    p.end(g.join(" ") + " re f"),
                    (this.doc.page.patterns[this.id] = p);
                } else this.doc.page.patterns[this.id] = u;
                return u;
              }
            }),
            (a.apply = function (e) {
              var a = this.doc._ctm,
                t = a[0],
                r = a[1],
                c = a[2],
                i = a[3],
                n = a[4],
                o = a[5],
                s = this.transform,
                u = s[0],
                m = s[1],
                l = s[2],
                d = s[3],
                h = s[4],
                g = s[5],
                f = [
                  t * u + c * m,
                  r * u + i * m,
                  t * l + c * d,
                  r * l + i * d,
                  t * h + c * g + n,
                  r * h + i * g + o,
                ];
              return (
                (this.embedded && f.join(" ") === this.matrix.join(" ")) ||
                  this.embed(f),
                this.doc.addContent("/" + this.id + " " + e)
              );
            }),
            e
          );
        })(),
        D = (function (e) {
          function a(a, t, r, c, i) {
            var n;
            return (
              ((n = e.call(this, a) || this).x1 = t),
              (n.y1 = r),
              (n.x2 = c),
              (n.y2 = i),
              n
            );
          }
          (0, u.Z)(a, e);
          var t = a.prototype;
          return (
            (t.shader = function (e) {
              return this.doc.ref({
                ShadingType: 2,
                ColorSpace: this._colorSpace,
                Coords: [this.x1, this.y1, this.x2, this.y2],
                Function: e,
                Extend: [!0, !0],
              });
            }),
            (t.opacityGradient = function () {
              return new a(this.doc, this.x1, this.y1, this.x2, this.y2);
            }),
            a
          );
        })(R),
        P = (function (e) {
          function a(a, t, r, c, i, n, o) {
            var s;
            return (
              ((s = e.call(this, a) || this).doc = a),
              (s.x1 = t),
              (s.y1 = r),
              (s.r1 = c),
              (s.x2 = i),
              (s.y2 = n),
              (s.r2 = o),
              s
            );
          }
          (0, u.Z)(a, e);
          var t = a.prototype;
          return (
            (t.shader = function (e) {
              return this.doc.ref({
                ShadingType: 3,
                ColorSpace: this._colorSpace,
                Coords: [this.x1, this.y1, this.r1, this.x2, this.y2, this.r2],
                Function: e,
                Extend: [!0, !0],
              });
            }),
            (t.opacityGradient = function () {
              return new a(
                this.doc,
                this.x1,
                this.y1,
                this.r1,
                this.x2,
                this.y2,
                this.r2
              );
            }),
            a
          );
        })(R),
        W = { PDFGradient: R, PDFLinearGradient: D, PDFRadialGradient: P },
        V = W.PDFGradient,
        B = W.PDFLinearGradient,
        q = W.PDFRadialGradient,
        z = {
          initColor: function () {
            return (
              (this._opacityRegistry = {}),
              (this._opacityCount = 0),
              (this._gradCount = 0)
            );
          },
          _normalizeColor: function (e) {
            if (e instanceof V) return e;
            var a;
            if ("string" === typeof e)
              if ("#" === e.charAt(0)) {
                4 === e.length &&
                  (e = e.replace(
                    /#([0-9A-F])([0-9A-F])([0-9A-F])/i,
                    "#$1$1$2$2$3$3"
                  ));
                var t = parseInt(e.slice(1), 16);
                e = [t >> 16, (t >> 8) & 255, 255 & t];
              } else N[e] && (e = N[e]);
            return Array.isArray(e)
              ? (3 === e.length
                  ? (e = (function () {
                      for (
                        var t = [], r = 0, c = Array.from(e);
                        r < c.length;
                        r++
                      )
                        (a = c[r]), t.push(a / 255);
                      return t;
                    })())
                  : 4 === e.length &&
                    (e = (function () {
                      for (
                        var t = [], r = 0, c = Array.from(e);
                        r < c.length;
                        r++
                      )
                        (a = c[r]), t.push(a / 100);
                      return t;
                    })()),
                e)
              : null;
          },
          _setColor: function (e, a) {
            if (!(e = this._normalizeColor(e))) return !1;
            var t = a ? "SCN" : "scn";
            if (e instanceof V) this._setColorSpace("Pattern", a), e.apply(t);
            else {
              var r = 4 === e.length ? "DeviceCMYK" : "DeviceRGB";
              this._setColorSpace(r, a),
                (e = e.join(" ")),
                this.addContent(e + " " + t);
            }
            return !0;
          },
          _setColorSpace: function (e, a) {
            var t = a ? "CS" : "cs";
            return this.addContent("/" + e + " " + t);
          },
          fillColor: function (e, a) {
            return (
              this._setColor(e, !1) && this.fillOpacity(a),
              (this._fillColor = [e, a]),
              this
            );
          },
          strokeColor: function (e, a) {
            return this._setColor(e, !0) && this.strokeOpacity(a), this;
          },
          opacity: function (e) {
            return this._doOpacity(e, e), this;
          },
          fillOpacity: function (e) {
            return this._doOpacity(e, null), this;
          },
          strokeOpacity: function (e) {
            return this._doOpacity(null, e), this;
          },
          _doOpacity: function (e, a) {
            var t, r;
            if (null != e || null != a) {
              null != e && (e = Math.max(0, Math.min(1, e))),
                null != a && (a = Math.max(0, Math.min(1, a)));
              var c = e + "_" + a;
              if (this._opacityRegistry[c]) {
                var i = Array.from(this._opacityRegistry[c]);
                (t = i[0]), (r = i[1]);
              } else {
                (t = { Type: "ExtGState" }),
                  null != e && (t.ca = e),
                  null != a && (t.CA = a),
                  (t = this.ref(t)).end(),
                  (r = "Gs" + ++this._opacityCount),
                  (this._opacityRegistry[c] = [t, r]);
              }
              return (
                (this.page.ext_gstates[r] = t), this.addContent("/" + r + " gs")
              );
            }
          },
          linearGradient: function (e, a, t, r) {
            return new B(this, e, a, t, r);
          },
          radialGradient: function (e, a, t, r, c, i) {
            return new q(this, e, a, t, r, c, i);
          },
        },
        N = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          grey: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50],
        };
      r = c = i = n = o = s = 0;
      var I = {
          M: 2,
          m: 2,
          Z: 0,
          z: 0,
          L: 2,
          l: 2,
          H: 1,
          h: 1,
          V: 1,
          v: 1,
          C: 6,
          c: 6,
          S: 4,
          s: 4,
          Q: 4,
          q: 4,
          T: 2,
          t: 2,
          A: 7,
          a: 7,
        },
        M = function (e) {
          return e in I;
        },
        E = function (e) {
          var a = e.codePointAt(0);
          return 32 === a || 9 === a || 13 === a || 10 === a;
        },
        K = function (e) {
          var a = e.codePointAt(0);
          return null != a && 48 <= a && a <= 57;
        },
        L = function (e, a) {
          for (var t = a, r = "", c = "none"; t < e.length; t += 1) {
            var i = e[t];
            if ("+" === i || "-" === i) {
              if ("none" === c) {
                (c = "sign"), (r += i);
                continue;
              }
              if ("e" === c) {
                (c = "exponent_sign"), (r += i);
                continue;
              }
            }
            if (K(i)) {
              if ("none" === c || "sign" === c || "whole" === c) {
                (c = "whole"), (r += i);
                continue;
              }
              if ("decimal_point" === c || "decimal" === c) {
                (c = "decimal"), (r += i);
                continue;
              }
              if ("e" === c || "exponent_sign" === c || "exponent" === c) {
                (c = "exponent"), (r += i);
                continue;
              }
            }
            if ("." !== i || ("none" !== c && "sign" !== c && "whole" !== c)) {
              if (
                ("E" !== i && "e" !== i) ||
                ("whole" !== c && "decimal_point" !== c && "decimal" !== c)
              )
                break;
              (c = "e"), (r += i);
            } else (c = "decimal_point"), (r += i);
          }
          var n = Number.parseFloat(r);
          return Number.isNaN(n) ? [a, null] : [t - 1, n];
        },
        G = {
          M: function (e, a) {
            return (
              (r = a[0]),
              (c = a[1]),
              (i = n = null),
              (o = r),
              (s = c),
              e.moveTo(r, c)
            );
          },
          m: function (e, a) {
            return (
              (r += a[0]),
              (c += a[1]),
              (i = n = null),
              (o = r),
              (s = c),
              e.moveTo(r, c)
            );
          },
          C: function (e, a) {
            return (
              (r = a[4]),
              (c = a[5]),
              (i = a[2]),
              (n = a[3]),
              e.bezierCurveTo.apply(e, a)
            );
          },
          c: function (e, a) {
            return (
              e.bezierCurveTo(
                a[0] + r,
                a[1] + c,
                a[2] + r,
                a[3] + c,
                a[4] + r,
                a[5] + c
              ),
              (i = r + a[2]),
              (n = c + a[3]),
              (r += a[4]),
              (c += a[5])
            );
          },
          S: function (e, a) {
            return (
              null === i && ((i = r), (n = c)),
              e.bezierCurveTo(r - (i - r), c - (n - c), a[0], a[1], a[2], a[3]),
              (i = a[0]),
              (n = a[1]),
              (r = a[2]),
              (c = a[3])
            );
          },
          s: function (e, a) {
            return (
              null === i && ((i = r), (n = c)),
              e.bezierCurveTo(
                r - (i - r),
                c - (n - c),
                r + a[0],
                c + a[1],
                r + a[2],
                c + a[3]
              ),
              (i = r + a[0]),
              (n = c + a[1]),
              (r += a[2]),
              (c += a[3])
            );
          },
          Q: function (e, a) {
            return (
              (i = a[0]),
              (n = a[1]),
              (r = a[2]),
              (c = a[3]),
              e.quadraticCurveTo(a[0], a[1], r, c)
            );
          },
          q: function (e, a) {
            return (
              e.quadraticCurveTo(a[0] + r, a[1] + c, a[2] + r, a[3] + c),
              (i = r + a[0]),
              (n = c + a[1]),
              (r += a[2]),
              (c += a[3])
            );
          },
          T: function (e, a) {
            return (
              null === i
                ? ((i = r), (n = c))
                : ((i = r - (i - r)), (n = c - (n - c))),
              e.quadraticCurveTo(i, n, a[0], a[1]),
              (i = r - (i - r)),
              (n = c - (n - c)),
              (r = a[0]),
              (c = a[1])
            );
          },
          t: function (e, a) {
            return (
              null === i
                ? ((i = r), (n = c))
                : ((i = r - (i - r)), (n = c - (n - c))),
              e.quadraticCurveTo(i, n, r + a[0], c + a[1]),
              (r += a[0]),
              (c += a[1])
            );
          },
          A: function (e, a) {
            return H(e, r, c, a), (r = a[5]), (c = a[6]);
          },
          a: function (e, a) {
            return (
              (a[5] += r), (a[6] += c), H(e, r, c, a), (r = a[5]), (c = a[6])
            );
          },
          L: function (e, a) {
            return (r = a[0]), (c = a[1]), (i = n = null), e.lineTo(r, c);
          },
          l: function (e, a) {
            return (r += a[0]), (c += a[1]), (i = n = null), e.lineTo(r, c);
          },
          H: function (e, a) {
            return (r = a[0]), (i = n = null), e.lineTo(r, c);
          },
          h: function (e, a) {
            return (r += a[0]), (i = n = null), e.lineTo(r, c);
          },
          V: function (e, a) {
            return (c = a[0]), (i = n = null), e.lineTo(r, c);
          },
          v: function (e, a) {
            return (c += a[0]), (i = n = null), e.lineTo(r, c);
          },
          Z: function (e) {
            return e.closePath(), (r = o), (c = s);
          },
          z: function (e) {
            return e.closePath(), (r = o), (c = s);
          },
        },
        H = function (e, a, t, r) {
          for (
            var c,
              i = r[0],
              n = r[1],
              o = r[2],
              s = r[3],
              u = r[4],
              m = r[5],
              l = r[6],
              d = j(m, l, i, n, s, u, o, a, t),
              h = (0, f.Z)(d);
            !(c = h()).done;

          ) {
            var g = c.value,
              A = J.apply(void 0, g);
            e.bezierCurveTo.apply(e, A);
          }
        },
        j = function (e, a, t, r, c, o, s, u, m) {
          var l = s * (Math.PI / 180),
            d = Math.sin(l),
            h = Math.cos(l);
          (t = Math.abs(t)), (r = Math.abs(r));
          var g =
            ((i = h * (u - e) * 0.5 + d * (m - a) * 0.5) * i) / (t * t) +
            ((n = h * (m - a) * 0.5 - d * (u - e) * 0.5) * n) / (r * r);
          g > 1 && ((t *= g = Math.sqrt(g)), (r *= g));
          var f = h / t,
            A = d / t,
            v = -d / r,
            p = h / r,
            y = f * u + A * m,
            b = v * u + p * m,
            x = f * e + A * a,
            O = v * e + p * a,
            T = 1 / ((x - y) * (x - y) + (O - b) * (O - b)) - 0.25;
          T < 0 && (T = 0);
          var k = Math.sqrt(T);
          o === c && (k = -k);
          var C = 0.5 * (y + x) - k * (O - b),
            U = 0.5 * (b + O) + k * (x - y),
            Y = Math.atan2(b - U, y - C),
            S = Math.atan2(O - U, x - C) - Y;
          S < 0 && 1 === o
            ? (S += 2 * Math.PI)
            : S > 0 && 0 === o && (S -= 2 * Math.PI);
          for (
            var w = Math.ceil(Math.abs(S / (0.5 * Math.PI + 0.001))),
              _ = [],
              F = 0;
            F < w;
            F++
          ) {
            var R = Y + (F * S) / w,
              D = Y + ((F + 1) * S) / w;
            _[F] = [C, U, R, D, t, r, d, h];
          }
          return _;
        },
        J = function (e, a, t, r, c, i, n, o) {
          var s = o * c,
            u = -n * i,
            m = n * c,
            l = o * i,
            d = 0.5 * (r - t),
            h = ((8 / 3) * Math.sin(0.5 * d) * Math.sin(0.5 * d)) / Math.sin(d),
            g = e + Math.cos(t) - h * Math.sin(t),
            f = a + Math.sin(t) + h * Math.cos(t),
            A = e + Math.cos(r),
            v = a + Math.sin(r),
            p = A + h * Math.sin(r),
            y = v - h * Math.cos(r);
          return [
            s * g + u * f,
            m * g + l * f,
            s * p + u * y,
            m * p + l * y,
            s * A + u * v,
            m * A + l * v,
          ];
        },
        X = (function () {
          function e() {}
          return (
            (e.apply = function (e, a) {
              var t = (function (e) {
                for (
                  var a = [], t = null, r = [], c = 0, i = !1, n = !1, o = 0;
                  o < e.length;
                  o += 1
                ) {
                  var s = e.charAt(o);
                  if (!E(s))
                    if (i && "," === s) {
                      if (n) break;
                      n = !0;
                    } else if (M(s)) {
                      if (n) return a;
                      if (null == t) {
                        if ("M" !== s && "m" !== s) return a;
                      } else if (0 !== r.length) return a;
                      (r = []),
                        (i = !1),
                        0 === (c = I[(t = s)]) &&
                          a.push({ command: t, args: r });
                    } else {
                      if (null == t) return a;
                      var u = o,
                        m = null;
                      if ("A" === t || "a" === t) {
                        var l = r.length;
                        if ((0 === l || 1 === l) && "+" !== s && "-" !== s) {
                          var d = L(e, o);
                          (u = d[0]), (m = d[1]);
                        }
                        if (2 === l || 5 === l || 6 === l) {
                          var h = L(e, o);
                          (u = h[0]), (m = h[1]);
                        }
                        (3 !== l && 4 !== l) ||
                          ("0" === s && (m = 0), "1" === s && (m = 1));
                      } else {
                        var g = L(e, o);
                        (u = g[0]), (m = g[1]);
                      }
                      if (null == m) return a;
                      r.push(m),
                        (i = !0),
                        (n = !1),
                        (o = u),
                        r.length === c &&
                          (a.push({ command: t, args: r }),
                          "M" === t && (t = "L"),
                          "m" === t && (t = "l"),
                          (r = []));
                    }
                }
                return a;
              })(a);
              !(function (e, a) {
                r = c = i = n = o = s = 0;
                for (var t = 0; t < e.length; t++) {
                  var u = e[t],
                    m = u.command,
                    l = u.args;
                  "function" === typeof G[m] && G[m](a, l);
                }
              })(t, e);
            }),
            e
          );
        })(),
        Q = Y.number,
        Z = ((Math.sqrt(2) - 1) / 3) * 4,
        $ = {
          initVector: function () {
            return (this._ctm = [1, 0, 0, 1, 0, 0]), (this._ctmStack = []);
          },
          save: function () {
            return this._ctmStack.push(this._ctm.slice()), this.addContent("q");
          },
          restore: function () {
            return (
              (this._ctm = this._ctmStack.pop() || [1, 0, 0, 1, 0, 0]),
              this.addContent("Q")
            );
          },
          closePath: function () {
            return this.addContent("h");
          },
          lineWidth: function (e) {
            return this.addContent(Q(e) + " w");
          },
          _CAP_STYLES: { BUTT: 0, ROUND: 1, SQUARE: 2 },
          lineCap: function (e) {
            return (
              "string" === typeof e && (e = this._CAP_STYLES[e.toUpperCase()]),
              this.addContent(e + " J")
            );
          },
          _JOIN_STYLES: { MITER: 0, ROUND: 1, BEVEL: 2 },
          lineJoin: function (e) {
            return (
              "string" === typeof e && (e = this._JOIN_STYLES[e.toUpperCase()]),
              this.addContent(e + " j")
            );
          },
          miterLimit: function (e) {
            return this.addContent(Q(e) + " M");
          },
          dash: function (e, a) {
            var t;
            if ((null == a && (a = {}), null == e)) return this;
            if (Array.isArray(e))
              return (
                (e = Array.from(e)
                  .map(function (e) {
                    return Y.number(e);
                  })
                  .join(" ")),
                (t = a.phase || 0),
                this.addContent("[" + e + "] " + Y.number(t) + " d")
              );
            var r = null != a.space ? a.space : e;
            return (
              (t = a.phase || 0),
              this.addContent(
                "[" +
                  Y.number(e) +
                  " " +
                  Y.number(r) +
                  "] " +
                  Y.number(t) +
                  " d"
              )
            );
          },
          undash: function () {
            return this.addContent("[] 0 d");
          },
          moveTo: function (e, a) {
            return this.addContent(Q(e) + " " + Q(a) + " m");
          },
          lineTo: function (e, a) {
            return this.addContent(Q(e) + " " + Q(a) + " l");
          },
          bezierCurveTo: function (e, a, t, r, c, i) {
            return this.addContent(
              Q(e) +
                " " +
                Q(a) +
                " " +
                Q(t) +
                " " +
                Q(r) +
                " " +
                Q(c) +
                " " +
                Q(i) +
                " c"
            );
          },
          quadraticCurveTo: function (e, a, t, r) {
            return this.addContent(
              Q(e) + " " + Q(a) + " " + Q(t) + " " + Q(r) + " v"
            );
          },
          rect: function (e, a, t, r) {
            return this.addContent(
              Q(e) + " " + Q(a) + " " + Q(t) + " " + Q(r) + " re"
            );
          },
          roundedRect: function (e, a, t, r, c) {
            null == c && (c = 0);
            var i = (c = Math.min(c, 0.5 * t, 0.5 * r)) * (1 - Z);
            return (
              this.moveTo(e + c, a),
              this.lineTo(e + t - c, a),
              this.bezierCurveTo(e + t - i, a, e + t, a + i, e + t, a + c),
              this.lineTo(e + t, a + r - c),
              this.bezierCurveTo(
                e + t,
                a + r - i,
                e + t - i,
                a + r,
                e + t - c,
                a + r
              ),
              this.lineTo(e + c, a + r),
              this.bezierCurveTo(e + i, a + r, e, a + r - i, e, a + r - c),
              this.lineTo(e, a + c),
              this.bezierCurveTo(e, a + i, e + i, a, e + c, a),
              this.closePath()
            );
          },
          ellipse: function (e, a, t, r) {
            null == r && (r = t);
            var c = t * Z,
              i = r * Z,
              n = (e -= t) + 2 * t,
              o = (a -= r) + 2 * r,
              s = e + t,
              u = a + r;
            return (
              this.moveTo(e, u),
              this.bezierCurveTo(e, u - i, s - c, a, s, a),
              this.bezierCurveTo(s + c, a, n, u - i, n, u),
              this.bezierCurveTo(n, u + i, s + c, o, s, o),
              this.bezierCurveTo(s - c, o, e, u + i, e, u),
              this.closePath()
            );
          },
          circle: function (e, a, t) {
            return this.ellipse(e, a, t);
          },
          arc: function (e, a, t, r, c, i) {
            null == i && (i = !1);
            var n = 2 * Math.PI,
              o = 0.5 * Math.PI,
              s = c - r;
            if (Math.abs(s) > n) s = n;
            else if (0 !== s && i !== s < 0) {
              s = (i ? -1 : 1) * n + s;
            }
            var u = Math.ceil(Math.abs(s) / o),
              m = s / u,
              l = (m / o) * Z * t,
              d = r,
              h = -Math.sin(d) * l,
              g = Math.cos(d) * l,
              f = e + Math.cos(d) * t,
              A = a + Math.sin(d) * t;
            this.moveTo(f, A);
            for (
              var v = 0, p = u, y = 0 <= p;
              y ? v < p : v > p;
              y ? v++ : v--
            ) {
              var b = f + h,
                x = A + g;
              (d += m), (f = e + Math.cos(d) * t), (A = a + Math.sin(d) * t);
              var O = f - (h = -Math.sin(d) * l),
                T = A - (g = Math.cos(d) * l);
              this.bezierCurveTo(b, x, O, T, f, A);
            }
            return this;
          },
          polygon: function () {
            for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++)
              a[t] = arguments[t];
            this.moveTo.apply(this, Array.from(a.shift() || []));
            for (var r = 0, c = Array.from(a); r < c.length; r++) {
              var i = c[r];
              this.lineTo.apply(this, Array.from(i || []));
            }
            return this.closePath();
          },
          path: function (e) {
            return X.apply(this, e), this;
          },
          _windingRule: function (e) {
            return /even-?odd/.test(e) ? "*" : "";
          },
          fill: function (e, a) {
            return (
              /(even-?odd)|(non-?zero)/.test(e) && ((a = e), (e = null)),
              e && this.fillColor(e),
              this.addContent("f" + this._windingRule(a))
            );
          },
          stroke: function (e) {
            return e && this.strokeColor(e), this.addContent("S");
          },
          fillAndStroke: function (e, a, t) {
            null == a && (a = e);
            var r = /(even-?odd)|(non-?zero)/;
            return (
              r.test(e) && ((t = e), (e = null)),
              r.test(a) && ((t = a), (a = e)),
              e && (this.fillColor(e), this.strokeColor(a)),
              this.addContent("B" + this._windingRule(t))
            );
          },
          clip: function (e) {
            return this.addContent("W" + this._windingRule(e) + " n");
          },
          transform: function (e, a, t, r, c, i) {
            var n = this._ctm,
              o = Array.from(n),
              s = o[0],
              u = o[1],
              m = o[2],
              l = o[3],
              d = o[4],
              h = o[5];
            (n[0] = s * e + m * a),
              (n[1] = u * e + l * a),
              (n[2] = s * t + m * r),
              (n[3] = u * t + l * r),
              (n[4] = s * c + m * i + d),
              (n[5] = u * c + l * i + h);
            var g = [e, a, t, r, c, i]
              .map(function (e) {
                return Y.number(e);
              })
              .join(" ");
            return this.addContent(g + " cm");
          },
          translate: function (e, a) {
            return this.transform(1, 0, 0, 1, e, a);
          },
          rotate: function (e, a) {
            var t;
            void 0 === a && (a = {});
            var r = (e * Math.PI) / 180,
              c = Math.cos(r),
              i = Math.sin(r),
              n = (t = 0);
            if (null != a.origin) {
              var o = Array.from(a.origin),
                s = (n = o[0]) * i + (t = o[1]) * c;
              (n -= n * c - t * i), (t -= s);
            }
            return this.transform(c, i, -i, c, n, t);
          },
          scale: function (e, a, t) {
            var r;
            void 0 === t && (t = {}),
              null == a && (a = e),
              "object" === typeof a && ((t = a), (a = e));
            var c = (r = 0);
            if (null != t.origin) {
              var i = Array.from(t.origin);
              (c = i[0]), (r = i[1]), (c -= e * c), (r -= a * r);
            }
            return this.transform(e, 0, 0, a, c, r);
          },
        },
        ee = {
          402: 131,
          8211: 150,
          8212: 151,
          8216: 145,
          8217: 146,
          8218: 130,
          8220: 147,
          8221: 148,
          8222: 132,
          8224: 134,
          8225: 135,
          8226: 149,
          8230: 133,
          8364: 128,
          8240: 137,
          8249: 139,
          8250: 155,
          710: 136,
          8482: 153,
          338: 140,
          339: 156,
          732: 152,
          352: 138,
          353: 154,
          376: 159,
          381: 142,
          382: 158,
        },
        ae =
          ".notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n\nspace         exclam         quotedbl       numbersign\ndollar        percent        ampersand      quotesingle\nparenleft     parenright     asterisk       plus\ncomma         hyphen         period         slash\nzero          one            two            three\nfour          five           six            seven\neight         nine           colon          semicolon\nless          equal          greater        question\n\nat            A              B              C\nD             E              F              G\nH             I              J              K\nL             M              N              O\nP             Q              R              S\nT             U              V              W\nX             Y              Z              bracketleft\nbackslash     bracketright   asciicircum    underscore\n\ngrave         a              b              c\nd             e              f              g\nh             i              j              k\nl             m              n              o\np             q              r              s\nt             u              v              w\nx             y              z              braceleft\nbar           braceright     asciitilde     .notdef\n\nEuro          .notdef        quotesinglbase florin\nquotedblbase  ellipsis       dagger         daggerdbl\ncircumflex    perthousand    Scaron         guilsinglleft\nOE            .notdef        Zcaron         .notdef\n.notdef       quoteleft      quoteright     quotedblleft\nquotedblright bullet         endash         emdash\ntilde         trademark      scaron         guilsinglright\noe            .notdef        zcaron         ydieresis\n\nspace         exclamdown     cent           sterling\ncurrency      yen            brokenbar      section\ndieresis      copyright      ordfeminine    guillemotleft\nlogicalnot    hyphen         registered     macron\ndegree        plusminus      twosuperior    threesuperior\nacute         mu             paragraph      periodcentered\ncedilla       onesuperior    ordmasculine   guillemotright\nonequarter    onehalf        threequarters  questiondown\n\nAgrave        Aacute         Acircumflex    Atilde\nAdieresis     Aring          AE             Ccedilla\nEgrave        Eacute         Ecircumflex    Edieresis\nIgrave        Iacute         Icircumflex    Idieresis\nEth           Ntilde         Ograve         Oacute\nOcircumflex   Otilde         Odieresis      multiply\nOslash        Ugrave         Uacute         Ucircumflex\nUdieresis     Yacute         Thorn          germandbls\n\nagrave        aacute         acircumflex    atilde\nadieresis     aring          ae             ccedilla\negrave        eacute         ecircumflex    edieresis\nigrave        iacute         icircumflex    idieresis\neth           ntilde         ograve         oacute\nocircumflex   otilde         odieresis      divide\noslash        ugrave         uacute         ucircumflex\nudieresis     yacute         thorn          ydieresis".split(
            /\s+/
          );
      var te = (function () {
          function e(e) {
            var a = this;
            "string" === typeof e
              ? ((this.contents = e), this.parse())
              : ((this.attributes = e.attributes),
                (this.glyphWidths = e.glyphWidths),
                (this.kernPairs = e.kernPairs)),
              (this.charWidths = (function (e, a, t) {
                for (
                  var r = [], c = e < a, i = t ? (c ? a + 1 : a - 1) : a, n = e;
                  c ? n < i : n > i;
                  c ? n++ : n--
                )
                  r.push(n);
                return r;
              })(0, 255, !0).map(function (e) {
                return a.glyphWidths[ae[e]];
              })),
              (this.bbox = Array.from(
                this.attributes.FontBBox.split(/\s+/)
              ).map(function (e) {
                return +e;
              })),
              (this.ascender = +(this.attributes.Ascender || 0)),
              (this.descender = +(this.attributes.Descender || 0)),
              (this.xHeight = +(this.attributes.XHeight || 0)),
              (this.capHeight = +(this.attributes.CapHeight || 0)),
              (this.lineGap =
                this.bbox[3] - this.bbox[1] - (this.ascender - this.descender));
          }
          (e.open = function (e) {
            throw new Error("AFMFont.open not available on browser build");
          }),
            (e.fromJson = function (a) {
              return new e(a);
            });
          var a = e.prototype;
          return (
            (a.parse = function () {
              var e = (function (e) {
                for (
                  var a,
                    t = { attributes: {}, glyphWidths: {}, kernPairs: {} },
                    r = "",
                    c = (0, f.Z)(e.split("\n"));
                  !(a = c()).done;

                ) {
                  var i,
                    n,
                    o = a.value;
                  if ((i = o.match(/^Start(\w+)/))) r = i[1];
                  else if ((i = o.match(/^End(\w+)/))) r = "";
                  else
                    switch (r) {
                      case "FontMetrics":
                        var s = (i = o.match(/(^\w+)\s+(.*)/))[1],
                          u = i[2];
                        (n = t.attributes[s])
                          ? (Array.isArray(n) || (n = t.attributes[s] = [n]),
                            n.push(u))
                          : (t.attributes[s] = u);
                        break;
                      case "CharMetrics":
                        if (!/^CH?\s/.test(o)) continue;
                        var m = o.match(/\bN\s+(\.?\w+)\s*;/)[1];
                        t.glyphWidths[m] = +o.match(/\bWX\s+(\d+)\s*;/)[1];
                        break;
                      case "KernPairs":
                        (i = o.match(/^KPX\s+(\.?\w+)\s+(\.?\w+)\s+(-?\d+)/)) &&
                          (t.kernPairs[i[1] + i[2]] = parseInt(i[3]));
                    }
                }
                return t;
              })(this.contents);
              (this.attributes = e.attributes),
                (this.glyphWidths = e.glyphWidths),
                (this.kernPairs = e.kernPairs);
            }),
            (a.encodeText = function (e) {
              for (
                var a = [], t = 0, r = e.length, c = 0 <= r;
                c ? t < r : t > r;
                c ? t++ : t--
              ) {
                var i = e.charCodeAt(t);
                (i = ee[i] || i), a.push(i.toString(16));
              }
              return a;
            }),
            (a.glyphsForString = function (e) {
              for (
                var a = [], t = 0, r = e.length, c = 0 <= r;
                c ? t < r : t > r;
                c ? t++ : t--
              ) {
                var i = e.charCodeAt(t);
                a.push(this.characterToGlyph(i));
              }
              return a;
            }),
            (a.characterToGlyph = function (e) {
              return ae[ee[e] || e] || ".notdef";
            }),
            (a.widthOfGlyph = function (e) {
              return this.glyphWidths[e] || 0;
            }),
            (a.getKernPair = function (e, a) {
              return this.kernPairs[e + a] || 0;
            }),
            (a.advancesForGlyphs = function (e) {
              for (var a = [], t = 0; t < e.length; t++) {
                var r = e[t],
                  c = e[t + 1];
                a.push(this.widthOfGlyph(r) + this.getKernPair(r, c));
              }
              return a;
            }),
            e
          );
        })(),
        re = function (e) {
          return [
            e.FontName,
            { attributes: e, glyphWidths: {}, kernPairs: {} },
          ];
        },
        ce = (function (e) {
          var a = e.attributes,
            t = e.glyphWidths,
            r = e.kernPairs,
            c = a.map(re);
          return (
            Object.keys(t).forEach(function (e) {
              t[e].forEach(function (a, t) {
                a && (c[t][1].glyphWidths[e] = a);
              });
            }),
            Object.keys(r).forEach(function (e) {
              r[e].forEach(function (a, t) {
                a && (c[t][1].kernPairs[e] = a);
              });
            }),
            Object.fromEntries(c)
          );
        })({
          attributes: [
            {
              Comment: [
                "Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
                "Creation Date: Thu May  1 12:43:52 1997",
                "UniqueID 43052",
                "VMusage 37169 48194",
              ],
              FontName: "Helvetica-Bold",
              FullName: "Helvetica Bold",
              FamilyName: "Helvetica",
              Weight: "Bold",
              ItalicAngle: "0",
              IsFixedPitch: "false",
              CharacterSet: "ExtendedRoman",
              FontBBox: "-170 -228 1003 962 ",
              UnderlinePosition: "-100",
              UnderlineThickness: "50",
              Version: "002.000",
              Notice:
                "Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.Helvetica is a trademark of Linotype-Hell AG and/or its subsidiaries.",
              EncodingScheme: "AdobeStandardEncoding",
              CapHeight: "718",
              XHeight: "532",
              Ascender: "718",
              Descender: "-207",
              StdHW: "118",
              StdVW: "140",
            },
            {
              Comment: [
                "Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
                "Creation Date: Thu May  1 12:45:12 1997",
                "UniqueID 43053",
                "VMusage 14482 68586",
              ],
              FontName: "Helvetica-BoldOblique",
              FullName: "Helvetica Bold Oblique",
              FamilyName: "Helvetica",
              Weight: "Bold",
              ItalicAngle: "-12",
              IsFixedPitch: "false",
              CharacterSet: "ExtendedRoman",
              FontBBox: "-174 -228 1114 962",
              UnderlinePosition: "-100",
              UnderlineThickness: "50",
              Version: "002.000",
              Notice:
                "Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.Helvetica is a trademark of Linotype-Hell AG and/or its subsidiaries.",
              EncodingScheme: "AdobeStandardEncoding",
              CapHeight: "718",
              XHeight: "532",
              Ascender: "718",
              Descender: "-207",
              StdHW: "118",
              StdVW: "140",
            },
            {
              Comment: [
                "Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
                "Creation Date: Thu May  1 12:44:31 1997",
                "UniqueID 43055",
                "VMusage 14960 69346",
              ],
              FontName: "Helvetica-Oblique",
              FullName: "Helvetica Oblique",
              FamilyName: "Helvetica",
              Weight: "Medium",
              ItalicAngle: "-12",
              IsFixedPitch: "false",
              CharacterSet: "ExtendedRoman",
              FontBBox: "-170 -225 1116 931 ",
              UnderlinePosition: "-100",
              UnderlineThickness: "50",
              Version: "002.000",
              Notice:
                "Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.Helvetica is a trademark of Linotype-Hell AG and/or its subsidiaries.",
              EncodingScheme: "AdobeStandardEncoding",
              CapHeight: "718",
              XHeight: "523",
              Ascender: "718",
              Descender: "-207",
              StdHW: "76",
              StdVW: "88",
            },
            {
              Comment: [
                "Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
                "Creation Date: Thu May  1 12:38:23 1997",
                "UniqueID 43054",
                "VMusage 37069 48094",
              ],
              FontName: "Helvetica",
              FullName: "Helvetica",
              FamilyName: "Helvetica",
              Weight: "Medium",
              ItalicAngle: "0",
              IsFixedPitch: "false",
              CharacterSet: "ExtendedRoman",
              FontBBox: "-166 -225 1000 931 ",
              UnderlinePosition: "-100",
              UnderlineThickness: "50",
              Version: "002.000",
              Notice:
                "Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.Helvetica is a trademark of Linotype-Hell AG and/or its subsidiaries.",
              EncodingScheme: "AdobeStandardEncoding",
              CapHeight: "718",
              XHeight: "523",
              Ascender: "718",
              Descender: "-207",
              StdHW: "76",
              StdVW: "88",
            },
            {
              Comment: [
                "Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
                "Creation Date: Thu May  1 12:52:56 1997",
                "UniqueID 43065",
                "VMusage 41636 52661",
              ],
              FontName: "Times-Bold",
              FullName: "Times Bold",
              FamilyName: "Times",
              Weight: "Bold",
              ItalicAngle: "0",
              IsFixedPitch: "false",
              CharacterSet: "ExtendedRoman",
              FontBBox: "-168 -218 1000 935 ",
              UnderlinePosition: "-100",
              UnderlineThickness: "50",
              Version: "002.000",
              Notice:
                "Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.Times is a trademark of Linotype-Hell AG and/or its subsidiaries.",
              EncodingScheme: "AdobeStandardEncoding",
              CapHeight: "676",
              XHeight: "461",
              Ascender: "683",
              Descender: "-217",
              StdHW: "44",
              StdVW: "139",
            },
            {
              Comment: [
                "Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
                "Creation Date: Thu May  1 13:04:06 1997",
                "UniqueID 43066",
                "VMusage 45874 56899",
              ],
              FontName: "Times-BoldItalic",
              FullName: "Times Bold Italic",
              FamilyName: "Times",
              Weight: "Bold",
              ItalicAngle: "-15",
              IsFixedPitch: "false",
              CharacterSet: "ExtendedRoman",
              FontBBox: "-200 -218 996 921",
              UnderlinePosition: "-100",
              UnderlineThickness: "50",
              Version: "002.000",
              Notice:
                "Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.Times is a trademark of Linotype-Hell AG and/or its subsidiaries.",
              EncodingScheme: "AdobeStandardEncoding",
              CapHeight: "669",
              XHeight: "462",
              Ascender: "683",
              Descender: "-217",
              StdHW: "42",
              StdVW: "121",
            },
            {
              Comment: [
                "Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
                "Creation Date: Thu May  1 12:56:55 1997",
                "UniqueID 43067",
                "VMusage 47727 58752",
              ],
              FontName: "Times-Italic",
              FullName: "Times Italic",
              FamilyName: "Times",
              Weight: "Medium",
              ItalicAngle: "-15.5",
              IsFixedPitch: "false",
              CharacterSet: "ExtendedRoman",
              FontBBox: "-169 -217 1010 883 ",
              UnderlinePosition: "-100",
              UnderlineThickness: "50",
              Version: "002.000",
              Notice:
                "Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.Times is a trademark of Linotype-Hell AG and/or its subsidiaries.",
              EncodingScheme: "AdobeStandardEncoding",
              CapHeight: "653",
              XHeight: "441",
              Ascender: "683",
              Descender: "-217",
              StdHW: "32",
              StdVW: "76",
            },
            {
              Comment: [
                "Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
                "Creation Date: Thu May  1 12:49:17 1997",
                "UniqueID 43068",
                "VMusage 43909 54934",
              ],
              FontName: "Times-Roman",
              FullName: "Times Roman",
              FamilyName: "Times",
              Weight: "Roman",
              ItalicAngle: "0",
              IsFixedPitch: "false",
              CharacterSet: "ExtendedRoman",
              FontBBox: "-168 -218 1000 898 ",
              UnderlinePosition: "-100",
              UnderlineThickness: "50",
              Version: "002.000",
              Notice:
                "Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.Times is a trademark of Linotype-Hell AG and/or its subsidiaries.",
              EncodingScheme: "AdobeStandardEncoding",
              CapHeight: "662",
              XHeight: "450",
              Ascender: "683",
              Descender: "-217",
              StdHW: "28",
              StdVW: "84",
            },
            {
              Comment: [
                "Copyright (c) 1989, 1990, 1991, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
                "Creation Date: Mon Jun 23 16:28:00 1997",
                "UniqueID 43048",
                "VMusage 41139 52164",
              ],
              FontName: "Courier-Bold",
              FullName: "Courier Bold",
              FamilyName: "Courier",
              Weight: "Bold",
              ItalicAngle: "0",
              IsFixedPitch: "true",
              CharacterSet: "ExtendedRoman",
              FontBBox: "-113 -250 749 801 ",
              UnderlinePosition: "-100",
              UnderlineThickness: "50",
              Version: "003.000",
              Notice:
                "Copyright (c) 1989, 1990, 1991, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
              EncodingScheme: "AdobeStandardEncoding",
              CapHeight: "562",
              XHeight: "439",
              Ascender: "629",
              Descender: "-157",
              StdHW: "84",
              StdVW: "106",
            },
            {
              Comment: [
                "Copyright (c) 1989, 1990, 1991, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
                "Creation Date: Mon Jun 23 16:28:46 1997",
                "UniqueID 43049",
                "VMusage 17529 79244",
              ],
              FontName: "Courier-BoldOblique",
              FullName: "Courier Bold Oblique",
              FamilyName: "Courier",
              Weight: "Bold",
              ItalicAngle: "-12",
              IsFixedPitch: "true",
              CharacterSet: "ExtendedRoman",
              FontBBox: "-57 -250 869 801",
              UnderlinePosition: "-100",
              UnderlineThickness: "50",
              Version: "003.000",
              Notice:
                "Copyright (c) 1989, 1990, 1991, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
              EncodingScheme: "AdobeStandardEncoding",
              CapHeight: "562",
              XHeight: "439",
              Ascender: "629",
              Descender: "-157",
              StdHW: "84",
              StdVW: "106",
            },
            {
              Comment: [
                "Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
                "Creation Date: Thu May  1 17:37:52 1997",
                "UniqueID 43051",
                "VMusage 16248 75829",
              ],
              FontName: "Courier-Oblique",
              FullName: "Courier Oblique",
              FamilyName: "Courier",
              Weight: "Medium",
              ItalicAngle: "-12",
              IsFixedPitch: "true",
              CharacterSet: "ExtendedRoman",
              FontBBox: "-27 -250 849 805 ",
              UnderlinePosition: "-100",
              UnderlineThickness: "50",
              Version: "003.000",
              Notice:
                "Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
              EncodingScheme: "AdobeStandardEncoding",
              CapHeight: "562",
              XHeight: "426",
              Ascender: "629",
              Descender: "-157",
              StdHW: "51",
              StdVW: "51",
            },
            {
              Comment: [
                "Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
                "Creation Date: Thu May  1 17:27:09 1997",
                "UniqueID 43050",
                "VMusage 39754 50779",
              ],
              FontName: "Courier",
              FullName: "Courier",
              FamilyName: "Courier",
              Weight: "Medium",
              ItalicAngle: "0",
              IsFixedPitch: "true",
              CharacterSet: "ExtendedRoman",
              FontBBox: "-23 -250 715 805 ",
              UnderlinePosition: "-100",
              UnderlineThickness: "50",
              Version: "003.000",
              Notice:
                "Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
              EncodingScheme: "AdobeStandardEncoding",
              CapHeight: "562",
              XHeight: "426",
              Ascender: "629",
              Descender: "-157",
              StdHW: "51",
              StdVW: "51",
            },
          ],
          glyphWidths: {
            space: [278, 278, 278, 278, 250, 250, 250, 250, 600, 600, 600, 600],
            exclam: [
              333, 333, 278, 278, 333, 389, 333, 333, 600, 600, 600, 600,
            ],
            quotedbl: [
              474, 474, 355, 355, 555, 555, 420, 408, 600, 600, 600, 600,
            ],
            numbersign: [
              556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            dollar: [
              556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            percent: [
              889, 889, 889, 889, 1e3, 833, 833, 833, 600, 600, 600, 600,
            ],
            ampersand: [
              722, 722, 667, 667, 833, 778, 778, 778, 600, 600, 600, 600,
            ],
            quoteright: [
              278, 278, 222, 222, 333, 333, 333, 333, 600, 600, 600, 600,
            ],
            parenleft: [
              333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600,
            ],
            parenright: [
              333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600,
            ],
            asterisk: [
              389, 389, 389, 389, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            plus: [584, 584, 584, 584, 570, 570, 675, 564, 600, 600, 600, 600],
            comma: [278, 278, 278, 278, 250, 250, 250, 250, 600, 600, 600, 600],
            hyphen: [
              333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600,
            ],
            period: [
              278, 278, 278, 278, 250, 250, 250, 250, 600, 600, 600, 600,
            ],
            slash: [278, 278, 278, 278, 278, 278, 278, 278, 600, 600, 600, 600],
            zero: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
            one: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
            two: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
            three: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
            four: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
            five: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
            six: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
            seven: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
            eight: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
            nine: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
            colon: [333, 333, 278, 278, 333, 333, 333, 278, 600, 600, 600, 600],
            semicolon: [
              333, 333, 278, 278, 333, 333, 333, 278, 600, 600, 600, 600,
            ],
            less: [584, 584, 584, 584, 570, 570, 675, 564, 600, 600, 600, 600],
            equal: [584, 584, 584, 584, 570, 570, 675, 564, 600, 600, 600, 600],
            greater: [
              584, 584, 584, 584, 570, 570, 675, 564, 600, 600, 600, 600,
            ],
            question: [
              611, 611, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600,
            ],
            at: [975, 975, 1015, 1015, 930, 832, 920, 921, 600, 600, 600, 600],
            A: [722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600],
            B: [722, 722, 667, 667, 667, 667, 611, 667, 600, 600, 600, 600],
            C: [722, 722, 722, 722, 722, 667, 667, 667, 600, 600, 600, 600],
            D: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
            E: [667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600],
            F: [611, 611, 611, 611, 611, 667, 611, 556, 600, 600, 600, 600],
            G: [778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600],
            H: [722, 722, 722, 722, 778, 778, 722, 722, 600, 600, 600, 600],
            I: [278, 278, 278, 278, 389, 389, 333, 333, 600, 600, 600, 600],
            J: [556, 556, 500, 500, 500, 500, 444, 389, 600, 600, 600, 600],
            K: [722, 722, 667, 667, 778, 667, 667, 722, 600, 600, 600, 600],
            L: [611, 611, 556, 556, 667, 611, 556, 611, 600, 600, 600, 600],
            M: [833, 833, 833, 833, 944, 889, 833, 889, 600, 600, 600, 600],
            N: [722, 722, 722, 722, 722, 722, 667, 722, 600, 600, 600, 600],
            O: [778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600],
            P: [667, 667, 667, 667, 611, 611, 611, 556, 600, 600, 600, 600],
            Q: [778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600],
            R: [722, 722, 722, 722, 722, 667, 611, 667, 600, 600, 600, 600],
            S: [667, 667, 667, 667, 556, 556, 500, 556, 600, 600, 600, 600],
            T: [611, 611, 611, 611, 667, 611, 556, 611, 600, 600, 600, 600],
            U: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
            V: [667, 667, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600],
            W: [944, 944, 944, 944, 1e3, 889, 833, 944, 600, 600, 600, 600],
            X: [667, 667, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600],
            Y: [667, 667, 667, 667, 722, 611, 556, 722, 600, 600, 600, 600],
            Z: [611, 611, 611, 611, 667, 611, 556, 611, 600, 600, 600, 600],
            bracketleft: [
              333, 333, 278, 278, 333, 333, 389, 333, 600, 600, 600, 600,
            ],
            backslash: [
              278, 278, 278, 278, 278, 278, 278, 278, 600, 600, 600, 600,
            ],
            bracketright: [
              333, 333, 278, 278, 333, 333, 389, 333, 600, 600, 600, 600,
            ],
            asciicircum: [
              584, 584, 469, 469, 581, 570, 422, 469, 600, 600, 600, 600,
            ],
            underscore: [
              556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            quoteleft: [
              278, 278, 222, 222, 333, 333, 333, 333, 600, 600, 600, 600,
            ],
            a: [556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600],
            b: [611, 611, 556, 556, 556, 500, 500, 500, 600, 600, 600, 600],
            c: [556, 556, 500, 500, 444, 444, 444, 444, 600, 600, 600, 600],
            d: [611, 611, 556, 556, 556, 500, 500, 500, 600, 600, 600, 600],
            e: [556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600],
            f: [333, 333, 278, 278, 333, 333, 278, 333, 600, 600, 600, 600],
            g: [611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
            h: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
            i: [278, 278, 222, 222, 278, 278, 278, 278, 600, 600, 600, 600],
            j: [278, 278, 222, 222, 333, 278, 278, 278, 600, 600, 600, 600],
            k: [556, 556, 500, 500, 556, 500, 444, 500, 600, 600, 600, 600],
            l: [278, 278, 222, 222, 278, 278, 278, 278, 600, 600, 600, 600],
            m: [889, 889, 833, 833, 833, 778, 722, 778, 600, 600, 600, 600],
            n: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
            o: [611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
            p: [611, 611, 556, 556, 556, 500, 500, 500, 600, 600, 600, 600],
            q: [611, 611, 556, 556, 556, 500, 500, 500, 600, 600, 600, 600],
            r: [389, 389, 333, 333, 444, 389, 389, 333, 600, 600, 600, 600],
            s: [556, 556, 500, 500, 389, 389, 389, 389, 600, 600, 600, 600],
            t: [333, 333, 278, 278, 333, 278, 278, 278, 600, 600, 600, 600],
            u: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
            v: [556, 556, 500, 500, 500, 444, 444, 500, 600, 600, 600, 600],
            w: [778, 778, 722, 722, 722, 667, 667, 722, 600, 600, 600, 600],
            x: [556, 556, 500, 500, 500, 500, 444, 500, 600, 600, 600, 600],
            y: [556, 556, 500, 500, 500, 444, 444, 500, 600, 600, 600, 600],
            z: [500, 500, 500, 500, 444, 389, 389, 444, 600, 600, 600, 600],
            braceleft: [
              389, 389, 334, 334, 394, 348, 400, 480, 600, 600, 600, 600,
            ],
            bar: [280, 280, 260, 260, 220, 220, 275, 200, 600, 600, 600, 600],
            braceright: [
              389, 389, 334, 334, 394, 348, 400, 480, 600, 600, 600, 600,
            ],
            asciitilde: [
              584, 584, 584, 584, 520, 570, 541, 541, 600, 600, 600, 600,
            ],
            exclamdown: [
              333, 333, 333, 333, 333, 389, 389, 333, 600, 600, 600, 600,
            ],
            cent: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
            sterling: [
              556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            fraction: [
              167, 167, 167, 167, 167, 167, 167, 167, 600, 600, 600, 600,
            ],
            yen: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
            florin: [
              556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            section: [
              556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            currency: [
              556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            quotesingle: [
              238, 238, 191, 191, 278, 278, 214, 180, 600, 600, 600, 600,
            ],
            quotedblleft: [
              500, 500, 333, 333, 500, 500, 556, 444, 600, 600, 600, 600,
            ],
            guillemotleft: [
              556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            guilsinglleft: [
              333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600,
            ],
            guilsinglright: [
              333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600,
            ],
            fi: [611, 611, 500, 500, 556, 556, 500, 556, 600, 600, 600, 600],
            fl: [611, 611, 500, 500, 556, 556, 500, 556, 600, 600, 600, 600],
            endash: [
              556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            dagger: [
              556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            daggerdbl: [
              556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            periodcentered: [
              278, 278, 278, 278, 250, 250, 250, 250, 600, 600, 600, 600,
            ],
            paragraph: [
              556, 556, 537, 537, 540, 500, 523, 453, 600, 600, 600, 600,
            ],
            bullet: [
              350, 350, 350, 350, 350, 350, 350, 350, 600, 600, 600, 600,
            ],
            quotesinglbase: [
              278, 278, 222, 222, 333, 333, 333, 333, 600, 600, 600, 600,
            ],
            quotedblbase: [
              500, 500, 333, 333, 500, 500, 556, 444, 600, 600, 600, 600,
            ],
            quotedblright: [
              500, 500, 333, 333, 500, 500, 556, 444, 600, 600, 600, 600,
            ],
            guillemotright: [
              556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            ellipsis: [
              1e3, 1e3, 1e3, 1e3, 1e3, 1e3, 889, 1e3, 600, 600, 600, 600,
            ],
            perthousand: [
              1e3, 1e3, 1e3, 1e3, 1e3, 1e3, 1e3, 1e3, 600, 600, 600, 600,
            ],
            questiondown: [
              611, 611, 611, 611, 500, 500, 500, 444, 600, 600, 600, 600,
            ],
            grave: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
            acute: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
            circumflex: [
              333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600,
            ],
            tilde: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
            macron: [
              333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600,
            ],
            breve: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
            dotaccent: [
              333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600,
            ],
            dieresis: [
              333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600,
            ],
            ring: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
            cedilla: [
              333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600,
            ],
            hungarumlaut: [
              333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600,
            ],
            ogonek: [
              333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600,
            ],
            caron: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
            emdash: [
              1e3, 1e3, 1e3, 1e3, 1e3, 1e3, 889, 1e3, 600, 600, 600, 600,
            ],
            AE: [1e3, 1e3, 1e3, 1e3, 1e3, 944, 889, 889, 600, 600, 600, 600],
            ordfeminine: [
              370, 370, 370, 370, 300, 266, 276, 276, 600, 600, 600, 600,
            ],
            Lslash: [
              611, 611, 556, 556, 667, 611, 556, 611, 600, 600, 600, 600,
            ],
            Oslash: [
              778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600,
            ],
            OE: [1e3, 1e3, 1e3, 1e3, 1e3, 944, 944, 889, 600, 600, 600, 600],
            ordmasculine: [
              365, 365, 365, 365, 330, 300, 310, 310, 600, 600, 600, 600,
            ],
            ae: [889, 889, 889, 889, 722, 722, 667, 667, 600, 600, 600, 600],
            dotlessi: [
              278, 278, 278, 278, 278, 278, 278, 278, 600, 600, 600, 600,
            ],
            lslash: [
              278, 278, 222, 222, 278, 278, 278, 278, 600, 600, 600, 600,
            ],
            oslash: [
              611, 611, 611, 611, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            oe: [944, 944, 944, 944, 722, 722, 667, 722, 600, 600, 600, 600],
            germandbls: [
              611, 611, 611, 611, 556, 500, 500, 500, 600, 600, 600, 600,
            ],
            Idieresis: [
              278, 278, 278, 278, 389, 389, 333, 333, 600, 600, 600, 600,
            ],
            eacute: [
              556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600,
            ],
            abreve: [
              556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600,
            ],
            uhungarumlaut: [
              611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600,
            ],
            ecaron: [
              556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600,
            ],
            Ydieresis: [
              667, 667, 667, 667, 722, 611, 556, 722, 600, 600, 600, 600,
            ],
            divide: [
              584, 584, 584, 584, 570, 570, 675, 564, 600, 600, 600, 600,
            ],
            Yacute: [
              667, 667, 667, 667, 722, 611, 556, 722, 600, 600, 600, 600,
            ],
            Acircumflex: [
              722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600,
            ],
            aacute: [
              556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600,
            ],
            Ucircumflex: [
              722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600,
            ],
            yacute: [
              556, 556, 500, 500, 500, 444, 444, 500, 600, 600, 600, 600,
            ],
            scommaaccent: [
              556, 556, 500, 500, 389, 389, 389, 389, 600, 600, 600, 600,
            ],
            ecircumflex: [
              556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600,
            ],
            Uring: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
            Udieresis: [
              722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600,
            ],
            aogonek: [
              556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600,
            ],
            Uacute: [
              722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600,
            ],
            uogonek: [
              611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600,
            ],
            Edieresis: [
              667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600,
            ],
            Dcroat: [
              722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600,
            ],
            commaaccent: [
              250, 250, 250, 250, 250, 250, 250, 250, 600, 600, 600, 600,
            ],
            copyright: [
              737, 737, 737, 737, 747, 747, 760, 760, 600, 600, 600, 600,
            ],
            Emacron: [
              667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600,
            ],
            ccaron: [
              556, 556, 500, 500, 444, 444, 444, 444, 600, 600, 600, 600,
            ],
            aring: [556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600],
            Ncommaaccent: [
              722, 722, 722, 722, 722, 722, 667, 722, 600, 600, 600, 600,
            ],
            lacute: [
              278, 278, 222, 222, 278, 278, 278, 278, 600, 600, 600, 600,
            ],
            agrave: [
              556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600,
            ],
            Tcommaaccent: [
              611, 611, 611, 611, 667, 611, 556, 611, 600, 600, 600, 600,
            ],
            Cacute: [
              722, 722, 722, 722, 722, 667, 667, 667, 600, 600, 600, 600,
            ],
            atilde: [
              556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600,
            ],
            Edotaccent: [
              667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600,
            ],
            scaron: [
              556, 556, 500, 500, 389, 389, 389, 389, 600, 600, 600, 600,
            ],
            scedilla: [
              556, 556, 500, 500, 389, 389, 389, 389, 600, 600, 600, 600,
            ],
            iacute: [
              278, 278, 278, 278, 278, 278, 278, 278, 600, 600, 600, 600,
            ],
            lozenge: [
              494, 494, 471, 471, 494, 494, 471, 471, 600, 600, 600, 600,
            ],
            Rcaron: [
              722, 722, 722, 722, 722, 667, 611, 667, 600, 600, 600, 600,
            ],
            Gcommaaccent: [
              778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600,
            ],
            ucircumflex: [
              611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600,
            ],
            acircumflex: [
              556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600,
            ],
            Amacron: [
              722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600,
            ],
            rcaron: [
              389, 389, 333, 333, 444, 389, 389, 333, 600, 600, 600, 600,
            ],
            ccedilla: [
              556, 556, 500, 500, 444, 444, 444, 444, 600, 600, 600, 600,
            ],
            Zdotaccent: [
              611, 611, 611, 611, 667, 611, 556, 611, 600, 600, 600, 600,
            ],
            Thorn: [667, 667, 667, 667, 611, 611, 611, 556, 600, 600, 600, 600],
            Omacron: [
              778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600,
            ],
            Racute: [
              722, 722, 722, 722, 722, 667, 611, 667, 600, 600, 600, 600,
            ],
            Sacute: [
              667, 667, 667, 667, 556, 556, 500, 556, 600, 600, 600, 600,
            ],
            dcaron: [
              743, 743, 643, 643, 672, 608, 544, 588, 600, 600, 600, 600,
            ],
            Umacron: [
              722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600,
            ],
            uring: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
            threesuperior: [
              333, 333, 333, 333, 300, 300, 300, 300, 600, 600, 600, 600,
            ],
            Ograve: [
              778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600,
            ],
            Agrave: [
              722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600,
            ],
            Abreve: [
              722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600,
            ],
            multiply: [
              584, 584, 584, 584, 570, 570, 675, 564, 600, 600, 600, 600,
            ],
            uacute: [
              611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600,
            ],
            Tcaron: [
              611, 611, 611, 611, 667, 611, 556, 611, 600, 600, 600, 600,
            ],
            partialdiff: [
              494, 494, 476, 476, 494, 494, 476, 476, 600, 600, 600, 600,
            ],
            ydieresis: [
              556, 556, 500, 500, 500, 444, 444, 500, 600, 600, 600, 600,
            ],
            Nacute: [
              722, 722, 722, 722, 722, 722, 667, 722, 600, 600, 600, 600,
            ],
            icircumflex: [
              278, 278, 278, 278, 278, 278, 278, 278, 600, 600, 600, 600,
            ],
            Ecircumflex: [
              667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600,
            ],
            adieresis: [
              556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600,
            ],
            edieresis: [
              556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600,
            ],
            cacute: [
              556, 556, 500, 500, 444, 444, 444, 444, 600, 600, 600, 600,
            ],
            nacute: [
              611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600,
            ],
            umacron: [
              611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600,
            ],
            Ncaron: [
              722, 722, 722, 722, 722, 722, 667, 722, 600, 600, 600, 600,
            ],
            Iacute: [
              278, 278, 278, 278, 389, 389, 333, 333, 600, 600, 600, 600,
            ],
            plusminus: [
              584, 584, 584, 584, 570, 570, 675, 564, 600, 600, 600, 600,
            ],
            brokenbar: [
              280, 280, 260, 260, 220, 220, 275, 200, 600, 600, 600, 600,
            ],
            registered: [
              737, 737, 737, 737, 747, 747, 760, 760, 600, 600, 600, 600,
            ],
            Gbreve: [
              778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600,
            ],
            Idotaccent: [
              278, 278, 278, 278, 389, 389, 333, 333, 600, 600, 600, 600,
            ],
            summation: [
              600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
            ],
            Egrave: [
              667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600,
            ],
            racute: [
              389, 389, 333, 333, 444, 389, 389, 333, 600, 600, 600, 600,
            ],
            omacron: [
              611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            Zacute: [
              611, 611, 611, 611, 667, 611, 556, 611, 600, 600, 600, 600,
            ],
            Zcaron: [
              611, 611, 611, 611, 667, 611, 556, 611, 600, 600, 600, 600,
            ],
            greaterequal: [
              549, 549, 549, 549, 549, 549, 549, 549, 600, 600, 600, 600,
            ],
            Eth: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
            Ccedilla: [
              722, 722, 722, 722, 722, 667, 667, 667, 600, 600, 600, 600,
            ],
            lcommaaccent: [
              278, 278, 222, 222, 278, 278, 278, 278, 600, 600, 600, 600,
            ],
            tcaron: [
              389, 389, 317, 317, 416, 366, 300, 326, 600, 600, 600, 600,
            ],
            eogonek: [
              556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600,
            ],
            Uogonek: [
              722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600,
            ],
            Aacute: [
              722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600,
            ],
            Adieresis: [
              722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600,
            ],
            egrave: [
              556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600,
            ],
            zacute: [
              500, 500, 500, 500, 444, 389, 389, 444, 600, 600, 600, 600,
            ],
            iogonek: [
              278, 278, 222, 222, 278, 278, 278, 278, 600, 600, 600, 600,
            ],
            Oacute: [
              778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600,
            ],
            oacute: [
              611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            amacron: [
              556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600,
            ],
            sacute: [
              556, 556, 500, 500, 389, 389, 389, 389, 600, 600, 600, 600,
            ],
            idieresis: [
              278, 278, 278, 278, 278, 278, 278, 278, 600, 600, 600, 600,
            ],
            Ocircumflex: [
              778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600,
            ],
            Ugrave: [
              722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600,
            ],
            Delta: [612, 612, 612, 612, 612, 612, 612, 612, 600, 600, 600, 600],
            thorn: [611, 611, 556, 556, 556, 500, 500, 500, 600, 600, 600, 600],
            twosuperior: [
              333, 333, 333, 333, 300, 300, 300, 300, 600, 600, 600, 600,
            ],
            Odieresis: [
              778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600,
            ],
            mu: [611, 611, 556, 556, 556, 576, 500, 500, 600, 600, 600, 600],
            igrave: [
              278, 278, 278, 278, 278, 278, 278, 278, 600, 600, 600, 600,
            ],
            ohungarumlaut: [
              611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            Eogonek: [
              667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600,
            ],
            dcroat: [
              611, 611, 556, 556, 556, 500, 500, 500, 600, 600, 600, 600,
            ],
            threequarters: [
              834, 834, 834, 834, 750, 750, 750, 750, 600, 600, 600, 600,
            ],
            Scedilla: [
              667, 667, 667, 667, 556, 556, 500, 556, 600, 600, 600, 600,
            ],
            lcaron: [
              400, 400, 299, 299, 394, 382, 300, 344, 600, 600, 600, 600,
            ],
            Kcommaaccent: [
              722, 722, 667, 667, 778, 667, 667, 722, 600, 600, 600, 600,
            ],
            Lacute: [
              611, 611, 556, 556, 667, 611, 556, 611, 600, 600, 600, 600,
            ],
            trademark: [
              1e3, 1e3, 1e3, 1e3, 1e3, 1e3, 980, 980, 600, 600, 600, 600,
            ],
            edotaccent: [
              556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600,
            ],
            Igrave: [
              278, 278, 278, 278, 389, 389, 333, 333, 600, 600, 600, 600,
            ],
            Imacron: [
              278, 278, 278, 278, 389, 389, 333, 333, 600, 600, 600, 600,
            ],
            Lcaron: [
              611, 611, 556, 556, 667, 611, 611, 611, 600, 600, 600, 600,
            ],
            onehalf: [
              834, 834, 834, 834, 750, 750, 750, 750, 600, 600, 600, 600,
            ],
            lessequal: [
              549, 549, 549, 549, 549, 549, 549, 549, 600, 600, 600, 600,
            ],
            ocircumflex: [
              611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            ntilde: [
              611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600,
            ],
            Uhungarumlaut: [
              722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600,
            ],
            Eacute: [
              667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600,
            ],
            emacron: [
              556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600,
            ],
            gbreve: [
              611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            onequarter: [
              834, 834, 834, 834, 750, 750, 750, 750, 600, 600, 600, 600,
            ],
            Scaron: [
              667, 667, 667, 667, 556, 556, 500, 556, 600, 600, 600, 600,
            ],
            Scommaaccent: [
              667, 667, 667, 667, 556, 556, 500, 556, 600, 600, 600, 600,
            ],
            Ohungarumlaut: [
              778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600,
            ],
            degree: [
              400, 400, 400, 400, 400, 400, 400, 400, 600, 600, 600, 600,
            ],
            ograve: [
              611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            Ccaron: [
              722, 722, 722, 722, 722, 667, 667, 667, 600, 600, 600, 600,
            ],
            ugrave: [
              611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600,
            ],
            radical: [
              549, 549, 453, 453, 549, 549, 453, 453, 600, 600, 600, 600,
            ],
            Dcaron: [
              722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600,
            ],
            rcommaaccent: [
              389, 389, 333, 333, 444, 389, 389, 333, 600, 600, 600, 600,
            ],
            Ntilde: [
              722, 722, 722, 722, 722, 722, 667, 722, 600, 600, 600, 600,
            ],
            otilde: [
              611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            Rcommaaccent: [
              722, 722, 722, 722, 722, 667, 611, 667, 600, 600, 600, 600,
            ],
            Lcommaaccent: [
              611, 611, 556, 556, 667, 611, 556, 611, 600, 600, 600, 600,
            ],
            Atilde: [
              722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600,
            ],
            Aogonek: [
              722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600,
            ],
            Aring: [722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600],
            Otilde: [
              778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600,
            ],
            zdotaccent: [
              500, 500, 500, 500, 444, 389, 389, 444, 600, 600, 600, 600,
            ],
            Ecaron: [
              667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600,
            ],
            Iogonek: [
              278, 278, 278, 278, 389, 389, 333, 333, 600, 600, 600, 600,
            ],
            kcommaaccent: [
              556, 556, 500, 500, 556, 500, 444, 500, 600, 600, 600, 600,
            ],
            minus: [584, 584, 584, 584, 570, 606, 675, 564, 600, 600, 600, 600],
            Icircumflex: [
              278, 278, 278, 278, 389, 389, 333, 333, 600, 600, 600, 600,
            ],
            ncaron: [
              611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600,
            ],
            tcommaaccent: [
              333, 333, 278, 278, 333, 278, 278, 278, 600, 600, 600, 600,
            ],
            logicalnot: [
              584, 584, 584, 584, 570, 606, 675, 564, 600, 600, 600, 600,
            ],
            odieresis: [
              611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            udieresis: [
              611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600,
            ],
            notequal: [
              549, 549, 549, 549, 549, 549, 549, 549, 600, 600, 600, 600,
            ],
            gcommaaccent: [
              611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600,
            ],
            eth: [611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
            zcaron: [
              500, 500, 500, 500, 444, 389, 389, 444, 600, 600, 600, 600,
            ],
            ncommaaccent: [
              611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600,
            ],
            onesuperior: [
              333, 333, 333, 333, 300, 300, 300, 300, 600, 600, 600, 600,
            ],
            imacron: [
              278, 278, 278, 278, 278, 278, 278, 278, 600, 600, 600, 600,
            ],
            Euro: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
          },
          kernPairs: {
            AC: [-40, -40, -30, -30, -55, -65, -30, -40],
            ACacute: [-40, -40, -30, -30, -55, -65, -30, -40],
            ACcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
            ACcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
            AG: [-50, -50, -30, -30, -55, -60, -35, -40],
            AGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
            AGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
            AO: [-40, -40, -30, -30, -45, -50, -40, -55],
            AOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
            AOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
            AOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
            AOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
            AOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
            AOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
            AOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
            AOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
            AQ: [-40, -40, -30, -30, -45, -55, -40, -55],
            AT: [-90, -90, -120, -120, -95, -55, -37, -111],
            ATcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
            ATcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
            AU: [-50, -50, -50, -50, -50, -50, -50, -55],
            AUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
            AUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
            AUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
            AUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
            AUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
            AUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
            AUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
            AUring: [-50, -50, -50, -50, -50, -50, -50, -55],
            AV: [-80, -80, -70, -70, -145, -95, -105, -135],
            AW: [-60, -60, -50, -50, -130, -100, -95, -90],
            AY: [-110, -110, -100, -100, -100, -70, -55, -105],
            AYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
            AYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
            Au: [-30, -30, -30, -30, -50, -30, -20],
            Auacute: [-30, -30, -30, -30, -50, -30, -20],
            Aucircumflex: [-30, -30, -30, -30, -50, -30, -20],
            Audieresis: [-30, -30, -30, -30, -50, -30, -20],
            Augrave: [-30, -30, -30, -30, -50, -30, -20],
            Auhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
            Aumacron: [-30, -30, -30, -30, -50, -30, -20],
            Auogonek: [-30, -30, -30, -30, -50, -30, -20],
            Auring: [-30, -30, -30, -30, -50, -30, -20],
            Av: [-40, -40, -40, -40, -100, -74, -55, -74],
            Aw: [-30, -30, -40, -40, -90, -74, -55, -92],
            Ay: [-30, -30, -40, -40, -74, -74, -55, -92],
            Ayacute: [-30, -30, -40, -40, -74, -74, -55, -92],
            Aydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
            AacuteC: [-40, -40, -30, -30, -55, -65, -30, -40],
            AacuteCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
            AacuteCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
            AacuteCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
            AacuteG: [-50, -50, -30, -30, -55, -60, -35, -40],
            AacuteGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
            AacuteGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
            AacuteO: [-40, -40, -30, -30, -45, -50, -40, -55],
            AacuteOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
            AacuteOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
            AacuteOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
            AacuteOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
            AacuteOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
            AacuteOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
            AacuteOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
            AacuteOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
            AacuteQ: [-40, -40, -30, -30, -45, -55, -40, -55],
            AacuteT: [-90, -90, -120, -120, -95, -55, -37, -111],
            AacuteTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
            AacuteTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
            AacuteU: [-50, -50, -50, -50, -50, -50, -50, -55],
            AacuteUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
            AacuteUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
            AacuteUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
            AacuteUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
            AacuteUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
            AacuteUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
            AacuteUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
            AacuteUring: [-50, -50, -50, -50, -50, -50, -50, -55],
            AacuteV: [-80, -80, -70, -70, -145, -95, -105, -135],
            AacuteW: [-60, -60, -50, -50, -130, -100, -95, -90],
            AacuteY: [-110, -110, -100, -100, -100, -70, -55, -105],
            AacuteYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
            AacuteYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
            Aacuteu: [-30, -30, -30, -30, -50, -30, -20],
            Aacuteuacute: [-30, -30, -30, -30, -50, -30, -20],
            Aacuteucircumflex: [-30, -30, -30, -30, -50, -30, -20],
            Aacuteudieresis: [-30, -30, -30, -30, -50, -30, -20],
            Aacuteugrave: [-30, -30, -30, -30, -50, -30, -20],
            Aacuteuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
            Aacuteumacron: [-30, -30, -30, -30, -50, -30, -20],
            Aacuteuogonek: [-30, -30, -30, -30, -50, -30, -20],
            Aacuteuring: [-30, -30, -30, -30, -50, -30, -20],
            Aacutev: [-40, -40, -40, -40, -100, -74, -55, -74],
            Aacutew: [-30, -30, -40, -40, -90, -74, -55, -92],
            Aacutey: [-30, -30, -40, -40, -74, -74, -55, -92],
            Aacuteyacute: [-30, -30, -40, -40, -74, -74, -55, -92],
            Aacuteydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
            AbreveC: [-40, -40, -30, -30, -55, -65, -30, -40],
            AbreveCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
            AbreveCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
            AbreveCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
            AbreveG: [-50, -50, -30, -30, -55, -60, -35, -40],
            AbreveGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
            AbreveGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
            AbreveO: [-40, -40, -30, -30, -45, -50, -40, -55],
            AbreveOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
            AbreveOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
            AbreveOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
            AbreveOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
            AbreveOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
            AbreveOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
            AbreveOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
            AbreveOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
            AbreveQ: [-40, -40, -30, -30, -45, -55, -40, -55],
            AbreveT: [-90, -90, -120, -120, -95, -55, -37, -111],
            AbreveTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
            AbreveTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
            AbreveU: [-50, -50, -50, -50, -50, -50, -50, -55],
            AbreveUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
            AbreveUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
            AbreveUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
            AbreveUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
            AbreveUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
            AbreveUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
            AbreveUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
            AbreveUring: [-50, -50, -50, -50, -50, -50, -50, -55],
            AbreveV: [-80, -80, -70, -70, -145, -95, -105, -135],
            AbreveW: [-60, -60, -50, -50, -130, -100, -95, -90],
            AbreveY: [-110, -110, -100, -100, -100, -70, -55, -105],
            AbreveYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
            AbreveYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
            Abreveu: [-30, -30, -30, -30, -50, -30, -20],
            Abreveuacute: [-30, -30, -30, -30, -50, -30, -20],
            Abreveucircumflex: [-30, -30, -30, -30, -50, -30, -20],
            Abreveudieresis: [-30, -30, -30, -30, -50, -30, -20],
            Abreveugrave: [-30, -30, -30, -30, -50, -30, -20],
            Abreveuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
            Abreveumacron: [-30, -30, -30, -30, -50, -30, -20],
            Abreveuogonek: [-30, -30, -30, -30, -50, -30, -20],
            Abreveuring: [-30, -30, -30, -30, -50, -30, -20],
            Abrevev: [-40, -40, -40, -40, -100, -74, -55, -74],
            Abrevew: [-30, -30, -40, -40, -90, -74, -55, -92],
            Abrevey: [-30, -30, -40, -40, -74, -74, -55, -92],
            Abreveyacute: [-30, -30, -40, -40, -74, -74, -55, -92],
            Abreveydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
            AcircumflexC: [-40, -40, -30, -30, -55, -65, -30, -40],
            AcircumflexCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
            AcircumflexCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
            AcircumflexCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
            AcircumflexG: [-50, -50, -30, -30, -55, -60, -35, -40],
            AcircumflexGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
            AcircumflexGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
            AcircumflexO: [-40, -40, -30, -30, -45, -50, -40, -55],
            AcircumflexOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
            AcircumflexOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
            AcircumflexOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
            AcircumflexOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
            AcircumflexOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
            AcircumflexOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
            AcircumflexOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
            AcircumflexOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
            AcircumflexQ: [-40, -40, -30, -30, -45, -55, -40, -55],
            AcircumflexT: [-90, -90, -120, -120, -95, -55, -37, -111],
            AcircumflexTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
            AcircumflexTcommaaccent: [
              -90, -90, -120, -120, -95, -55, -37, -111,
            ],
            AcircumflexU: [-50, -50, -50, -50, -50, -50, -50, -55],
            AcircumflexUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
            AcircumflexUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
            AcircumflexUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
            AcircumflexUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
            AcircumflexUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
            AcircumflexUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
            AcircumflexUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
            AcircumflexUring: [-50, -50, -50, -50, -50, -50, -50, -55],
            AcircumflexV: [-80, -80, -70, -70, -145, -95, -105, -135],
            AcircumflexW: [-60, -60, -50, -50, -130, -100, -95, -90],
            AcircumflexY: [-110, -110, -100, -100, -100, -70, -55, -105],
            AcircumflexYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
            AcircumflexYdieresis: [
              -110, -110, -100, -100, -100, -70, -55, -105,
            ],
            Acircumflexu: [-30, -30, -30, -30, -50, -30, -20],
            Acircumflexuacute: [-30, -30, -30, -30, -50, -30, -20],
            Acircumflexucircumflex: [-30, -30, -30, -30, -50, -30, -20],
            Acircumflexudieresis: [-30, -30, -30, -30, -50, -30, -20],
            Acircumflexugrave: [-30, -30, -30, -30, -50, -30, -20],
            Acircumflexuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
            Acircumflexumacron: [-30, -30, -30, -30, -50, -30, -20],
            Acircumflexuogonek: [-30, -30, -30, -30, -50, -30, -20],
            Acircumflexuring: [-30, -30, -30, -30, -50, -30, -20],
            Acircumflexv: [-40, -40, -40, -40, -100, -74, -55, -74],
            Acircumflexw: [-30, -30, -40, -40, -90, -74, -55, -92],
            Acircumflexy: [-30, -30, -40, -40, -74, -74, -55, -92],
            Acircumflexyacute: [-30, -30, -40, -40, -74, -74, -55, -92],
            Acircumflexydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
            AdieresisC: [-40, -40, -30, -30, -55, -65, -30, -40],
            AdieresisCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
            AdieresisCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
            AdieresisCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
            AdieresisG: [-50, -50, -30, -30, -55, -60, -35, -40],
            AdieresisGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
            AdieresisGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
            AdieresisO: [-40, -40, -30, -30, -45, -50, -40, -55],
            AdieresisOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
            AdieresisOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
            AdieresisOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
            AdieresisOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
            AdieresisOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
            AdieresisOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
            AdieresisOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
            AdieresisOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
            AdieresisQ: [-40, -40, -30, -30, -45, -55, -40, -55],
            AdieresisT: [-90, -90, -120, -120, -95, -55, -37, -111],
            AdieresisTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
            AdieresisTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
            AdieresisU: [-50, -50, -50, -50, -50, -50, -50, -55],
            AdieresisUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
            AdieresisUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
            AdieresisUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
            AdieresisUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
            AdieresisUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
            AdieresisUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
            AdieresisUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
            AdieresisUring: [-50, -50, -50, -50, -50, -50, -50, -55],
            AdieresisV: [-80, -80, -70, -70, -145, -95, -105, -135],
            AdieresisW: [-60, -60, -50, -50, -130, -100, -95, -90],
            AdieresisY: [-110, -110, -100, -100, -100, -70, -55, -105],
            AdieresisYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
            AdieresisYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
            Adieresisu: [-30, -30, -30, -30, -50, -30, -20],
            Adieresisuacute: [-30, -30, -30, -30, -50, -30, -20],
            Adieresisucircumflex: [-30, -30, -30, -30, -50, -30, -20],
            Adieresisudieresis: [-30, -30, -30, -30, -50, -30, -20],
            Adieresisugrave: [-30, -30, -30, -30, -50, -30, -20],
            Adieresisuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
            Adieresisumacron: [-30, -30, -30, -30, -50, -30, -20],
            Adieresisuogonek: [-30, -30, -30, -30, -50, -30, -20],
            Adieresisuring: [-30, -30, -30, -30, -50, -30, -20],
            Adieresisv: [-40, -40, -40, -40, -100, -74, -55, -74],
            Adieresisw: [-30, -30, -40, -40, -90, -74, -55, -92],
            Adieresisy: [-30, -30, -40, -40, -74, -74, -55, -92],
            Adieresisyacute: [-30, -30, -40, -40, -74, -74, -55, -92],
            Adieresisydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
            AgraveC: [-40, -40, -30, -30, -55, -65, -30, -40],
            AgraveCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
            AgraveCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
            AgraveCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
            AgraveG: [-50, -50, -30, -30, -55, -60, -35, -40],
            AgraveGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
            AgraveGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
            AgraveO: [-40, -40, -30, -30, -45, -50, -40, -55],
            AgraveOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
            AgraveOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
            AgraveOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
            AgraveOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
            AgraveOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
            AgraveOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
            AgraveOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
            AgraveOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
            AgraveQ: [-40, -40, -30, -30, -45, -55, -40, -55],
            AgraveT: [-90, -90, -120, -120, -95, -55, -37, -111],
            AgraveTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
            AgraveTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
            AgraveU: [-50, -50, -50, -50, -50, -50, -50, -55],
            AgraveUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
            AgraveUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
            AgraveUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
            AgraveUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
            AgraveUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
            AgraveUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
            AgraveUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
            AgraveUring: [-50, -50, -50, -50, -50, -50, -50, -55],
            AgraveV: [-80, -80, -70, -70, -145, -95, -105, -135],
            AgraveW: [-60, -60, -50, -50, -130, -100, -95, -90],
            AgraveY: [-110, -110, -100, -100, -100, -70, -55, -105],
            AgraveYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
            AgraveYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
            Agraveu: [-30, -30, -30, -30, -50, -30, -20],
            Agraveuacute: [-30, -30, -30, -30, -50, -30, -20],
            Agraveucircumflex: [-30, -30, -30, -30, -50, -30, -20],
            Agraveudieresis: [-30, -30, -30, -30, -50, -30, -20],
            Agraveugrave: [-30, -30, -30, -30, -50, -30, -20],
            Agraveuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
            Agraveumacron: [-30, -30, -30, -30, -50, -30, -20],
            Agraveuogonek: [-30, -30, -30, -30, -50, -30, -20],
            Agraveuring: [-30, -30, -30, -30, -50, -30, -20],
            Agravev: [-40, -40, -40, -40, -100, -74, -55, -74],
            Agravew: [-30, -30, -40, -40, -90, -74, -55, -92],
            Agravey: [-30, -30, -40, -40, -74, -74, -55, -92],
            Agraveyacute: [-30, -30, -40, -40, -74, -74, -55, -92],
            Agraveydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
            AmacronC: [-40, -40, -30, -30, -55, -65, -30, -40],
            AmacronCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
            AmacronCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
            AmacronCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
            AmacronG: [-50, -50, -30, -30, -55, -60, -35, -40],
            AmacronGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
            AmacronGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
            AmacronO: [-40, -40, -30, -30, -45, -50, -40, -55],
            AmacronOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
            AmacronOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
            AmacronOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
            AmacronOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
            AmacronOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
            AmacronOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
            AmacronOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
            AmacronOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
            AmacronQ: [-40, -40, -30, -30, -45, -55, -40, -55],
            AmacronT: [-90, -90, -120, -120, -95, -55, -37, -111],
            AmacronTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
            AmacronTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
            AmacronU: [-50, -50, -50, -50, -50, -50, -50, -55],
            AmacronUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
            AmacronUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
            AmacronUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
            AmacronUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
            AmacronUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
            AmacronUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
            AmacronUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
            AmacronUring: [-50, -50, -50, -50, -50, -50, -50, -55],
            AmacronV: [-80, -80, -70, -70, -145, -95, -105, -135],
            AmacronW: [-60, -60, -50, -50, -130, -100, -95, -90],
            AmacronY: [-110, -110, -100, -100, -100, -70, -55, -105],
            AmacronYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
            AmacronYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
            Amacronu: [-30, -30, -30, -30, -50, -30, -20],
            Amacronuacute: [-30, -30, -30, -30, -50, -30, -20],
            Amacronucircumflex: [-30, -30, -30, -30, -50, -30, -20],
            Amacronudieresis: [-30, -30, -30, -30, -50, -30, -20],
            Amacronugrave: [-30, -30, -30, -30, -50, -30, -20],
            Amacronuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
            Amacronumacron: [-30, -30, -30, -30, -50, -30, -20],
            Amacronuogonek: [-30, -30, -30, -30, -50, -30, -20],
            Amacronuring: [-30, -30, -30, -30, -50, -30, -20],
            Amacronv: [-40, -40, -40, -40, -100, -74, -55, -74],
            Amacronw: [-30, -30, -40, -40, -90, -74, -55, -92],
            Amacrony: [-30, -30, -40, -40, -74, -74, -55, -92],
            Amacronyacute: [-30, -30, -40, -40, -74, -74, -55, -92],
            Amacronydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
            AogonekC: [-40, -40, -30, -30, -55, -65, -30, -40],
            AogonekCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
            AogonekCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
            AogonekCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
            AogonekG: [-50, -50, -30, -30, -55, -60, -35, -40],
            AogonekGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
            AogonekGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
            AogonekO: [-40, -40, -30, -30, -45, -50, -40, -55],
            AogonekOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
            AogonekOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
            AogonekOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
            AogonekOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
            AogonekOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
            AogonekOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
            AogonekOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
            AogonekOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
            AogonekQ: [-40, -40, -30, -30, -45, -55, -40, -55],
            AogonekT: [-90, -90, -120, -120, -95, -55, -37, -111],
            AogonekTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
            AogonekTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
            AogonekU: [-50, -50, -50, -50, -50, -50, -50, -55],
            AogonekUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
            AogonekUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
            AogonekUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
            AogonekUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
            AogonekUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
            AogonekUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
            AogonekUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
            AogonekUring: [-50, -50, -50, -50, -50, -50, -50, -55],
            AogonekV: [-80, -80, -70, -70, -145, -95, -105, -135],
            AogonekW: [-60, -60, -50, -50, -130, -100, -95, -90],
            AogonekY: [-110, -110, -100, -100, -100, -70, -55, -105],
            AogonekYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
            AogonekYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
            Aogoneku: [-30, -30, -30, -30, -50, -30, -20],
            Aogonekuacute: [-30, -30, -30, -30, -50, -30, -20],
            Aogonekucircumflex: [-30, -30, -30, -30, -50, -30, -20],
            Aogonekudieresis: [-30, -30, -30, -30, -50, -30, -20],
            Aogonekugrave: [-30, -30, -30, -30, -50, -30, -20],
            Aogonekuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
            Aogonekumacron: [-30, -30, -30, -30, -50, -30, -20],
            Aogonekuogonek: [-30, -30, -30, -30, -50, -30, -20],
            Aogonekuring: [-30, -30, -30, -30, -50, -30, -20],
            Aogonekv: [-40, -40, -40, -40, -100, -74, -55, -74],
            Aogonekw: [-30, -30, -40, -40, -90, -74, -55, -52],
            Aogoneky: [-30, -30, -40, -40, -34, -34, -55, -52],
            Aogonekyacute: [-30, -30, -40, -40, -34, -34, -55, -52],
            Aogonekydieresis: [-30, -30, -40, -40, -34, -34, -55, -52],
            AringC: [-40, -40, -30, -30, -55, -65, -30, -40],
            AringCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
            AringCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
            AringCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
            AringG: [-50, -50, -30, -30, -55, -60, -35, -40],
            AringGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
            AringGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
            AringO: [-40, -40, -30, -30, -45, -50, -40, -55],
            AringOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
            AringOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
            AringOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
            AringOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
            AringOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
            AringOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
            AringOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
            AringOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
            AringQ: [-40, -40, -30, -30, -45, -55, -40, -55],
            AringT: [-90, -90, -120, -120, -95, -55, -37, -111],
            AringTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
            AringTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
            AringU: [-50, -50, -50, -50, -50, -50, -50, -55],
            AringUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
            AringUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
            AringUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
            AringUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
            AringUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
            AringUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
            AringUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
            AringUring: [-50, -50, -50, -50, -50, -50, -50, -55],
            AringV: [-80, -80, -70, -70, -145, -95, -105, -135],
            AringW: [-60, -60, -50, -50, -130, -100, -95, -90],
            AringY: [-110, -110, -100, -100, -100, -70, -55, -105],
            AringYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
            AringYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
            Aringu: [-30, -30, -30, -30, -50, -30, -20],
            Aringuacute: [-30, -30, -30, -30, -50, -30, -20],
            Aringucircumflex: [-30, -30, -30, -30, -50, -30, -20],
            Aringudieresis: [-30, -30, -30, -30, -50, -30, -20],
            Aringugrave: [-30, -30, -30, -30, -50, -30, -20],
            Aringuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
            Aringumacron: [-30, -30, -30, -30, -50, -30, -20],
            Aringuogonek: [-30, -30, -30, -30, -50, -30, -20],
            Aringuring: [-30, -30, -30, -30, -50, -30, -20],
            Aringv: [-40, -40, -40, -40, -100, -74, -55, -74],
            Aringw: [-30, -30, -40, -40, -90, -74, -55, -92],
            Aringy: [-30, -30, -40, -40, -74, -74, -55, -92],
            Aringyacute: [-30, -30, -40, -40, -74, -74, -55, -92],
            Aringydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
            AtildeC: [-40, -40, -30, -30, -55, -65, -30, -40],
            AtildeCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
            AtildeCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
            AtildeCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
            AtildeG: [-50, -50, -30, -30, -55, -60, -35, -40],
            AtildeGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
            AtildeGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
            AtildeO: [-40, -40, -30, -30, -45, -50, -40, -55],
            AtildeOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
            AtildeOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
            AtildeOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
            AtildeOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
            AtildeOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
            AtildeOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
            AtildeOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
            AtildeOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
            AtildeQ: [-40, -40, -30, -30, -45, -55, -40, -55],
            AtildeT: [-90, -90, -120, -120, -95, -55, -37, -111],
            AtildeTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
            AtildeTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
            AtildeU: [-50, -50, -50, -50, -50, -50, -50, -55],
            AtildeUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
            AtildeUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
            AtildeUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
            AtildeUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
            AtildeUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
            AtildeUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
            AtildeUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
            AtildeUring: [-50, -50, -50, -50, -50, -50, -50, -55],
            AtildeV: [-80, -80, -70, -70, -145, -95, -105, -135],
            AtildeW: [-60, -60, -50, -50, -130, -100, -95, -90],
            AtildeY: [-110, -110, -100, -100, -100, -70, -55, -105],
            AtildeYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
            AtildeYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
            Atildeu: [-30, -30, -30, -30, -50, -30, -20],
            Atildeuacute: [-30, -30, -30, -30, -50, -30, -20],
            Atildeucircumflex: [-30, -30, -30, -30, -50, -30, -20],
            Atildeudieresis: [-30, -30, -30, -30, -50, -30, -20],
            Atildeugrave: [-30, -30, -30, -30, -50, -30, -20],
            Atildeuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
            Atildeumacron: [-30, -30, -30, -30, -50, -30, -20],
            Atildeuogonek: [-30, -30, -30, -30, -50, -30, -20],
            Atildeuring: [-30, -30, -30, -30, -50, -30, -20],
            Atildev: [-40, -40, -40, -40, -100, -74, -55, -74],
            Atildew: [-30, -30, -40, -40, -90, -74, -55, -92],
            Atildey: [-30, -30, -40, -40, -74, -74, -55, -92],
            Atildeyacute: [-30, -30, -40, -40, -74, -74, -55, -92],
            Atildeydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
            BA: [-30, -30, 0, 0, -30, -25, -25, -35],
            BAacute: [-30, -30, 0, 0, -30, -25, -25, -35],
            BAbreve: [-30, -30, 0, 0, -30, -25, -25, -35],
            BAcircumflex: [-30, -30, 0, 0, -30, -25, -25, -35],
            BAdieresis: [-30, -30, 0, 0, -30, -25, -25, -35],
            BAgrave: [-30, -30, 0, 0, -30, -25, -25, -35],
            BAmacron: [-30, -30, 0, 0, -30, -25, -25, -35],
            BAogonek: [-30, -30, 0, 0, -30, -25, -25, -35],
            BAring: [-30, -30, 0, 0, -30, -25, -25, -35],
            BAtilde: [-30, -30, 0, 0, -30, -25, -25, -35],
            BU: [-10, -10, -10, -10, -10, -10, -10, -10],
            BUacute: [-10, -10, -10, -10, -10, -10, -10, -10],
            BUcircumflex: [-10, -10, -10, -10, -10, -10, -10, -10],
            BUdieresis: [-10, -10, -10, -10, -10, -10, -10, -10],
            BUgrave: [-10, -10, -10, -10, -10, -10, -10, -10],
            BUhungarumlaut: [-10, -10, -10, -10, -10, -10, -10, -10],
            BUmacron: [-10, -10, -10, -10, -10, -10, -10, -10],
            BUogonek: [-10, -10, -10, -10, -10, -10, -10, -10],
            BUring: [-10, -10, -10, -10, -10, -10, -10, -10],
            DA: [-40, -40, -40, -40, -35, -25, -35, -40],
            DAacute: [-40, -40, -40, -40, -35, -25, -35, -40],
            DAbreve: [-40, -40, -40, -40, -35, -25, -35, -40],
            DAcircumflex: [-40, -40, -40, -40, -35, -25, -35, -40],
            DAdieresis: [-40, -40, -40, -40, -35, -25, -35, -40],
            DAgrave: [-40, -40, -40, -40, -35, -25, -35, -40],
            DAmacron: [-40, -40, -40, -40, -35, -25, -35, -40],
            DAogonek: [-40, -40, -40, -40, -35, -25, -35, -40],
            DAring: [-40, -40, -40, -40, -35, -25, -35, -40],
            DAtilde: [-40, -40, -40, -40, -35, -25, -35, -40],
            DV: [-40, -40, -70, -70, -40, -50, -40, -40],
            DW: [-40, -40, -40, -40, -40, -40, -40, -30],
            DY: [-70, -70, -90, -90, -40, -50, -40, -55],
            DYacute: [-70, -70, -90, -90, -40, -50, -40, -55],
            DYdieresis: [-70, -70, -90, -90, -40, -50, -40, -55],
            Dcomma: [-30, -30, -70, -70],
            Dperiod: [-30, -30, -70, -70, -20],
            DcaronA: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcaronAacute: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcaronAbreve: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcaronAcircumflex: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcaronAdieresis: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcaronAgrave: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcaronAmacron: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcaronAogonek: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcaronAring: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcaronAtilde: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcaronV: [-40, -40, -70, -70, -40, -50, -40, -40],
            DcaronW: [-40, -40, -40, -40, -40, -40, -40, -30],
            DcaronY: [-70, -70, -90, -90, -40, -50, -40, -55],
            DcaronYacute: [-70, -70, -90, -90, -40, -50, -40, -55],
            DcaronYdieresis: [-70, -70, -90, -90, -40, -50, -40, -55],
            Dcaroncomma: [-30, -30, -70, -70],
            Dcaronperiod: [-30, -30, -70, -70, -20],
            DcroatA: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcroatAacute: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcroatAbreve: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcroatAcircumflex: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcroatAdieresis: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcroatAgrave: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcroatAmacron: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcroatAogonek: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcroatAring: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcroatAtilde: [-40, -40, -40, -40, -35, -25, -35, -40],
            DcroatV: [-40, -40, -70, -70, -40, -50, -40, -40],
            DcroatW: [-40, -40, -40, -40, -40, -40, -40, -30],
            DcroatY: [-70, -70, -90, -90, -40, -50, -40, -55],
            DcroatYacute: [-70, -70, -90, -90, -40, -50, -40, -55],
            DcroatYdieresis: [-70, -70, -90, -90, -40, -50, -40, -55],
            Dcroatcomma: [-30, -30, -70, -70],
            Dcroatperiod: [-30, -30, -70, -70, -20],
            FA: [-80, -80, -80, -80, -90, -100, -115, -74],
            FAacute: [-80, -80, -80, -80, -90, -100, -115, -74],
            FAbreve: [-80, -80, -80, -80, -90, -100, -115, -74],
            FAcircumflex: [-80, -80, -80, -80, -90, -100, -115, -74],
            FAdieresis: [-80, -80, -80, -80, -90, -100, -115, -74],
            FAgrave: [-80, -80, -80, -80, -90, -100, -115, -74],
            FAmacron: [-80, -80, -80, -80, -90, -100, -115, -74],
            FAogonek: [-80, -80, -80, -80, -90, -100, -115, -74],
            FAring: [-80, -80, -80, -80, -90, -100, -115, -74],
            FAtilde: [-80, -80, -80, -80, -90, -100, -115, -74],
            Fa: [-20, -20, -50, -50, -25, -95, -75, -15],
            Faacute: [-20, -20, -50, -50, -25, -95, -75, -15],
            Fabreve: [-20, -20, -50, -50, -25, -95, -75, -15],
            Facircumflex: [-20, -20, -50, -50, -25, -95, -75, -15],
            Fadieresis: [-20, -20, -50, -50, -25, -95, -75, -15],
            Fagrave: [-20, -20, -50, -50, -25, -95, -75, -15],
            Famacron: [-20, -20, -50, -50, -25, -95, -75, -15],
            Faogonek: [-20, -20, -50, -50, -25, -95, -75, -15],
            Faring: [-20, -20, -50, -50, -25, -95, -75, -15],
            Fatilde: [-20, -20, -50, -50, -25, -95, -75, -15],
            Fcomma: [-100, -100, -150, -150, -92, -129, -135, -80],
            Fperiod: [-100, -100, -150, -150, -110, -129, -135, -80],
            JA: [-20, -20, -20, -20, -30, -25, -40, -60],
            JAacute: [-20, -20, -20, -20, -30, -25, -40, -60],
            JAbreve: [-20, -20, -20, -20, -30, -25, -40, -60],
            JAcircumflex: [-20, -20, -20, -20, -30, -25, -40, -60],
            JAdieresis: [-20, -20, -20, -20, -30, -25, -40, -60],
            JAgrave: [-20, -20, -20, -20, -30, -25, -40, -60],
            JAmacron: [-20, -20, -20, -20, -30, -25, -40, -60],
            JAogonek: [-20, -20, -20, -20, -30, -25, -40, -60],
            JAring: [-20, -20, -20, -20, -30, -25, -40, -60],
            JAtilde: [-20, -20, -20, -20, -30, -25, -40, -60],
            Jcomma: [-20, -20, -30, -30, 0, -10, -25],
            Jperiod: [-20, -20, -30, -30, -20, -10, -25],
            Ju: [-20, -20, -20, -20, -15, -40, -35],
            Juacute: [-20, -20, -20, -20, -15, -40, -35],
            Jucircumflex: [-20, -20, -20, -20, -15, -40, -35],
            Judieresis: [-20, -20, -20, -20, -15, -40, -35],
            Jugrave: [-20, -20, -20, -20, -15, -40, -35],
            Juhungarumlaut: [-20, -20, -20, -20, -15, -40, -35],
            Jumacron: [-20, -20, -20, -20, -15, -40, -35],
            Juogonek: [-20, -20, -20, -20, -15, -40, -35],
            Juring: [-20, -20, -20, -20, -15, -40, -35],
            KO: [-30, -30, -50, -50, -30, -30, -50, -30],
            KOacute: [-30, -30, -50, -50, -30, -30, -50, -30],
            KOcircumflex: [-30, -30, -50, -50, -30, -30, -50, -30],
            KOdieresis: [-30, -30, -50, -50, -30, -30, -50, -30],
            KOgrave: [-30, -30, -50, -50, -30, -30, -50, -30],
            KOhungarumlaut: [-30, -30, -50, -50, -30, -30, -50, -30],
            KOmacron: [-30, -30, -50, -50, -30, -30, -50, -30],
            KOslash: [-30, -30, -50, -50, -30, -30, -50, -30],
            KOtilde: [-30, -30, -50, -50, -30, -30, -50, -30],
            Ke: [-15, -15, -40, -40, -25, -25, -35, -25],
            Keacute: [-15, -15, -40, -40, -25, -25, -35, -25],
            Kecaron: [-15, -15, -40, -40, -25, -25, -35, -25],
            Kecircumflex: [-15, -15, -40, -40, -25, -25, -35, -25],
            Kedieresis: [-15, -15, -40, -40, -25, -25, -35, -25],
            Kedotaccent: [-15, -15, -40, -40, -25, -25, -35, -25],
            Kegrave: [-15, -15, -40, -40, -25, -25, -35, -25],
            Kemacron: [-15, -15, -40, -40, -25, -25, -35, -25],
            Keogonek: [-15, -15, -40, -40, -25, -25, -35, -25],
            Ko: [-35, -35, -40, -40, -25, -25, -40, -35],
            Koacute: [-35, -35, -40, -40, -25, -25, -40, -35],
            Kocircumflex: [-35, -35, -40, -40, -25, -25, -40, -35],
            Kodieresis: [-35, -35, -40, -40, -25, -25, -40, -35],
            Kograve: [-35, -35, -40, -40, -25, -25, -40, -35],
            Kohungarumlaut: [-35, -35, -40, -40, -25, -25, -40, -35],
            Komacron: [-35, -35, -40, -40, -25, -25, -40, -35],
            Koslash: [-35, -35, -40, -40, -25, -25, -40, -35],
            Kotilde: [-35, -35, -40, -40, -25, -25, -40, -35],
            Ku: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kuacute: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kucircumflex: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kudieresis: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kugrave: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kuhungarumlaut: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kumacron: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kuogonek: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kuring: [-30, -30, -30, -30, -15, -20, -40, -15],
            Ky: [-40, -40, -50, -50, -45, -20, -40, -25],
            Kyacute: [-40, -40, -50, -50, -45, -20, -40, -25],
            Kydieresis: [-40, -40, -50, -50, -45, -20, -40, -25],
            KcommaaccentO: [-30, -30, -50, -50, -30, -30, -50, -30],
            KcommaaccentOacute: [-30, -30, -50, -50, -30, -30, -50, -30],
            KcommaaccentOcircumflex: [-30, -30, -50, -50, -30, -30, -50, -30],
            KcommaaccentOdieresis: [-30, -30, -50, -50, -30, -30, -50, -30],
            KcommaaccentOgrave: [-30, -30, -50, -50, -30, -30, -50, -30],
            KcommaaccentOhungarumlaut: [-30, -30, -50, -50, -30, -30, -50, -30],
            KcommaaccentOmacron: [-30, -30, -50, -50, -30, -30, -50, -30],
            KcommaaccentOslash: [-30, -30, -50, -50, -30, -30, -50, -30],
            KcommaaccentOtilde: [-30, -30, -50, -50, -30, -30, -50, -30],
            Kcommaaccente: [-15, -15, -40, -40, -25, -25, -35, -25],
            Kcommaaccenteacute: [-15, -15, -40, -40, -25, -25, -35, -25],
            Kcommaaccentecaron: [-15, -15, -40, -40, -25, -25, -35, -25],
            Kcommaaccentecircumflex: [-15, -15, -40, -40, -25, -25, -35, -25],
            Kcommaaccentedieresis: [-15, -15, -40, -40, -25, -25, -35, -25],
            Kcommaaccentedotaccent: [-15, -15, -40, -40, -25, -25, -35, -25],
            Kcommaaccentegrave: [-15, -15, -40, -40, -25, -25, -35, -25],
            Kcommaaccentemacron: [-15, -15, -40, -40, -25, -25, -35, -25],
            Kcommaaccenteogonek: [-15, -15, -40, -40, -25, -25, -35, -25],
            Kcommaaccento: [-35, -35, -40, -40, -25, -25, -40, -35],
            Kcommaaccentoacute: [-35, -35, -40, -40, -25, -25, -40, -35],
            Kcommaaccentocircumflex: [-35, -35, -40, -40, -25, -25, -40, -35],
            Kcommaaccentodieresis: [-35, -35, -40, -40, -25, -25, -40, -35],
            Kcommaaccentograve: [-35, -35, -40, -40, -25, -25, -40, -35],
            Kcommaaccentohungarumlaut: [-35, -35, -40, -40, -25, -25, -40, -35],
            Kcommaaccentomacron: [-35, -35, -40, -40, -25, -25, -40, -35],
            Kcommaaccentoslash: [-35, -35, -40, -40, -25, -25, -40, -35],
            Kcommaaccentotilde: [-35, -35, -40, -40, -25, -25, -40, -35],
            Kcommaaccentu: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kcommaaccentuacute: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kcommaaccentucircumflex: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kcommaaccentudieresis: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kcommaaccentugrave: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kcommaaccentuhungarumlaut: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kcommaaccentumacron: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kcommaaccentuogonek: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kcommaaccenturing: [-30, -30, -30, -30, -15, -20, -40, -15],
            Kcommaaccenty: [-40, -40, -50, -50, -45, -20, -40, -25],
            Kcommaaccentyacute: [-40, -40, -50, -50, -45, -20, -40, -25],
            Kcommaaccentydieresis: [-40, -40, -50, -50, -45, -20, -40, -25],
            LT: [-90, -90, -110, -110, -92, -18, -20, -92],
            LTcaron: [-90, -90, -110, -110, -92, -18, -20, -92],
            LTcommaaccent: [-90, -90, -110, -110, -92, -18, -20, -92],
            LV: [-110, -110, -110, -110, -92, -37, -55, -100],
            LW: [-80, -80, -70, -70, -92, -37, -55, -74],
            LY: [-120, -120, -140, -140, -92, -37, -20, -100],
            LYacute: [-120, -120, -140, -140, -92, -37, -20, -100],
            LYdieresis: [-120, -120, -140, -140, -92, -37, -20, -100],
            Lquotedblright: [-140, -140, -140, -140, -20],
            Lquoteright: [-140, -140, -160, -160, -110, -55, -37, -92],
            Ly: [-30, -30, -30, -30, -55, -37, -30, -55],
            Lyacute: [-30, -30, -30, -30, -55, -37, -30, -55],
            Lydieresis: [-30, -30, -30, -30, -55, -37, -30, -55],
            LacuteT: [-90, -90, -110, -110, -92, -18, -20, -92],
            LacuteTcaron: [-90, -90, -110, -110, -92, -18, -20, -92],
            LacuteTcommaaccent: [-90, -90, -110, -110, -92, -18, -20, -92],
            LacuteV: [-110, -110, -110, -110, -92, -37, -55, -100],
            LacuteW: [-80, -80, -70, -70, -92, -37, -55, -74],
            LacuteY: [-120, -120, -140, -140, -92, -37, -20, -100],
            LacuteYacute: [-120, -120, -140, -140, -92, -37, -20, -100],
            LacuteYdieresis: [-120, -120, -140, -140, -92, -37, -20, -100],
            Lacutequotedblright: [-140, -140, -140, -140, -20],
            Lacutequoteright: [-140, -140, -160, -160, -110, -55, -37, -92],
            Lacutey: [-30, -30, -30, -30, -55, -37, -30, -55],
            Lacuteyacute: [-30, -30, -30, -30, -55, -37, -30, -55],
            Lacuteydieresis: [-30, -30, -30, -30, -55, -37, -30, -55],
            LcommaaccentT: [-90, -90, -110, -110, -92, -18, -20, -92],
            LcommaaccentTcaron: [-90, -90, -110, -110, -92, -18, -20, -92],
            LcommaaccentTcommaaccent: [
              -90, -90, -110, -110, -92, -18, -20, -92,
            ],
            LcommaaccentV: [-110, -110, -110, -110, -92, -37, -55, -100],
            LcommaaccentW: [-80, -80, -70, -70, -92, -37, -55, -74],
            LcommaaccentY: [-120, -120, -140, -140, -92, -37, -20, -100],
            LcommaaccentYacute: [-120, -120, -140, -140, -92, -37, -20, -100],
            LcommaaccentYdieresis: [
              -120, -120, -140, -140, -92, -37, -20, -100,
            ],
            Lcommaaccentquotedblright: [-140, -140, -140, -140, -20],
            Lcommaaccentquoteright: [
              -140, -140, -160, -160, -110, -55, -37, -92,
            ],
            Lcommaaccenty: [-30, -30, -30, -30, -55, -37, -30, -55],
            Lcommaaccentyacute: [-30, -30, -30, -30, -55, -37, -30, -55],
            Lcommaaccentydieresis: [-30, -30, -30, -30, -55, -37, -30, -55],
            LslashT: [-90, -90, -110, -110, -92, -18, -20, -92],
            LslashTcaron: [-90, -90, -110, -110, -92, -18, -20, -92],
            LslashTcommaaccent: [-90, -90, -110, -110, -92, -18, -20, -92],
            LslashV: [-110, -110, -110, -110, -92, -37, -55, -100],
            LslashW: [-80, -80, -70, -70, -92, -37, -55, -74],
            LslashY: [-120, -120, -140, -140, -92, -37, -20, -100],
            LslashYacute: [-120, -120, -140, -140, -92, -37, -20, -100],
            LslashYdieresis: [-120, -120, -140, -140, -92, -37, -20, -100],
            Lslashquotedblright: [-140, -140, -140, -140, -20],
            Lslashquoteright: [-140, -140, -160, -160, -110, -55, -37, -92],
            Lslashy: [-30, -30, -30, -30, -55, -37, -30, -55],
            Lslashyacute: [-30, -30, -30, -30, -55, -37, -30, -55],
            Lslashydieresis: [-30, -30, -30, -30, -55, -37, -30, -55],
            OA: [-50, -50, -20, -20, -40, -40, -55, -35],
            OAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
            OAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
            OAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
            OAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
            OAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
            OAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
            OAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
            OAring: [-50, -50, -20, -20, -40, -40, -55, -35],
            OAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
            OT: [-40, -40, -40, -40, -40, -40, -40, -40],
            OTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
            OTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
            OV: [-50, -50, -50, -50, -50, -50, -50, -50],
            OW: [-50, -50, -30, -30, -50, -50, -50, -35],
            OX: [-50, -50, -60, -60, -40, -40, -40, -40],
            OY: [-70, -70, -70, -70, -50, -50, -50, -50],
            OYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
            OYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
            Ocomma: [-40, -40, -40, -40],
            Operiod: [-40, -40, -40, -40],
            OacuteA: [-50, -50, -20, -20, -40, -40, -55, -35],
            OacuteAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
            OacuteAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
            OacuteAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
            OacuteAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
            OacuteAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
            OacuteAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
            OacuteAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
            OacuteAring: [-50, -50, -20, -20, -40, -40, -55, -35],
            OacuteAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
            OacuteT: [-40, -40, -40, -40, -40, -40, -40, -40],
            OacuteTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
            OacuteTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
            OacuteV: [-50, -50, -50, -50, -50, -50, -50, -50],
            OacuteW: [-50, -50, -30, -30, -50, -50, -50, -35],
            OacuteX: [-50, -50, -60, -60, -40, -40, -40, -40],
            OacuteY: [-70, -70, -70, -70, -50, -50, -50, -50],
            OacuteYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
            OacuteYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
            Oacutecomma: [-40, -40, -40, -40],
            Oacuteperiod: [-40, -40, -40, -40],
            OcircumflexA: [-50, -50, -20, -20, -40, -40, -55, -35],
            OcircumflexAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
            OcircumflexAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
            OcircumflexAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
            OcircumflexAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
            OcircumflexAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
            OcircumflexAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
            OcircumflexAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
            OcircumflexAring: [-50, -50, -20, -20, -40, -40, -55, -35],
            OcircumflexAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
            OcircumflexT: [-40, -40, -40, -40, -40, -40, -40, -40],
            OcircumflexTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
            OcircumflexTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
            OcircumflexV: [-50, -50, -50, -50, -50, -50, -50, -50],
            OcircumflexW: [-50, -50, -30, -30, -50, -50, -50, -35],
            OcircumflexX: [-50, -50, -60, -60, -40, -40, -40, -40],
            OcircumflexY: [-70, -70, -70, -70, -50, -50, -50, -50],
            OcircumflexYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
            OcircumflexYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
            Ocircumflexcomma: [-40, -40, -40, -40],
            Ocircumflexperiod: [-40, -40, -40, -40],
            OdieresisA: [-50, -50, -20, -20, -40, -40, -55, -35],
            OdieresisAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
            OdieresisAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
            OdieresisAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
            OdieresisAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
            OdieresisAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
            OdieresisAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
            OdieresisAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
            OdieresisAring: [-50, -50, -20, -20, -40, -40, -55, -35],
            OdieresisAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
            OdieresisT: [-40, -40, -40, -40, -40, -40, -40, -40],
            OdieresisTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
            OdieresisTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
            OdieresisV: [-50, -50, -50, -50, -50, -50, -50, -50],
            OdieresisW: [-50, -50, -30, -30, -50, -50, -50, -35],
            OdieresisX: [-50, -50, -60, -60, -40, -40, -40, -40],
            OdieresisY: [-70, -70, -70, -70, -50, -50, -50, -50],
            OdieresisYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
            OdieresisYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
            Odieresiscomma: [-40, -40, -40, -40],
            Odieresisperiod: [-40, -40, -40, -40],
            OgraveA: [-50, -50, -20, -20, -40, -40, -55, -35],
            OgraveAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
            OgraveAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
            OgraveAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
            OgraveAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
            OgraveAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
            OgraveAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
            OgraveAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
            OgraveAring: [-50, -50, -20, -20, -40, -40, -55, -35],
            OgraveAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
            OgraveT: [-40, -40, -40, -40, -40, -40, -40, -40],
            OgraveTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
            OgraveTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
            OgraveV: [-50, -50, -50, -50, -50, -50, -50, -50],
            OgraveW: [-50, -50, -30, -30, -50, -50, -50, -35],
            OgraveX: [-50, -50, -60, -60, -40, -40, -40, -40],
            OgraveY: [-70, -70, -70, -70, -50, -50, -50, -50],
            OgraveYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
            OgraveYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
            Ogravecomma: [-40, -40, -40, -40],
            Ograveperiod: [-40, -40, -40, -40],
            OhungarumlautA: [-50, -50, -20, -20, -40, -40, -55, -35],
            OhungarumlautAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
            OhungarumlautAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
            OhungarumlautAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
            OhungarumlautAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
            OhungarumlautAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
            OhungarumlautAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
            OhungarumlautAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
            OhungarumlautAring: [-50, -50, -20, -20, -40, -40, -55, -35],
            OhungarumlautAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
            OhungarumlautT: [-40, -40, -40, -40, -40, -40, -40, -40],
            OhungarumlautTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
            OhungarumlautTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
            OhungarumlautV: [-50, -50, -50, -50, -50, -50, -50, -50],
            OhungarumlautW: [-50, -50, -30, -30, -50, -50, -50, -35],
            OhungarumlautX: [-50, -50, -60, -60, -40, -40, -40, -40],
            OhungarumlautY: [-70, -70, -70, -70, -50, -50, -50, -50],
            OhungarumlautYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
            OhungarumlautYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
            Ohungarumlautcomma: [-40, -40, -40, -40],
            Ohungarumlautperiod: [-40, -40, -40, -40],
            OmacronA: [-50, -50, -20, -20, -40, -40, -55, -35],
            OmacronAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
            OmacronAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
            OmacronAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
            OmacronAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
            OmacronAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
            OmacronAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
            OmacronAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
            OmacronAring: [-50, -50, -20, -20, -40, -40, -55, -35],
            OmacronAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
            OmacronT: [-40, -40, -40, -40, -40, -40, -40, -40],
            OmacronTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
            OmacronTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
            OmacronV: [-50, -50, -50, -50, -50, -50, -50, -50],
            OmacronW: [-50, -50, -30, -30, -50, -50, -50, -35],
            OmacronX: [-50, -50, -60, -60, -40, -40, -40, -40],
            OmacronY: [-70, -70, -70, -70, -50, -50, -50, -50],
            OmacronYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
            OmacronYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
            Omacroncomma: [-40, -40, -40, -40],
            Omacronperiod: [-40, -40, -40, -40],
            OslashA: [-50, -50, -20, -20, -40, -40, -55, -35],
            OslashAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
            OslashAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
            OslashAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
            OslashAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
            OslashAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
            OslashAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
            OslashAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
            OslashAring: [-50, -50, -20, -20, -40, -40, -55, -35],
            OslashAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
            OslashT: [-40, -40, -40, -40, -40, -40, -40, -40],
            OslashTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
            OslashTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
            OslashV: [-50, -50, -50, -50, -50, -50, -50, -50],
            OslashW: [-50, -50, -30, -30, -50, -50, -50, -35],
            OslashX: [-50, -50, -60, -60, -40, -40, -40, -40],
            OslashY: [-70, -70, -70, -70, -50, -50, -50, -50],
            OslashYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
            OslashYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
            Oslashcomma: [-40, -40, -40, -40],
            Oslashperiod: [-40, -40, -40, -40],
            OtildeA: [-50, -50, -20, -20, -40, -40, -55, -35],
            OtildeAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
            OtildeAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
            OtildeAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
            OtildeAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
            OtildeAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
            OtildeAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
            OtildeAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
            OtildeAring: [-50, -50, -20, -20, -40, -40, -55, -35],
            OtildeAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
            OtildeT: [-40, -40, -40, -40, -40, -40, -40, -40],
            OtildeTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
            OtildeTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
            OtildeV: [-50, -50, -50, -50, -50, -50, -50, -50],
            OtildeW: [-50, -50, -30, -30, -50, -50, -50, -35],
            OtildeX: [-50, -50, -60, -60, -40, -40, -40, -40],
            OtildeY: [-70, -70, -70, -70, -50, -50, -50, -50],
            OtildeYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
            OtildeYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
            Otildecomma: [-40, -40, -40, -40],
            Otildeperiod: [-40, -40, -40, -40],
            PA: [-100, -100, -120, -120, -74, -85, -90, -92],
            PAacute: [-100, -100, -120, -120, -74, -85, -90, -92],
            PAbreve: [-100, -100, -120, -120, -74, -85, -90, -92],
            PAcircumflex: [-100, -100, -120, -120, -74, -85, -90, -92],
            PAdieresis: [-100, -100, -120, -120, -74, -85, -90, -92],
            PAgrave: [-100, -100, -120, -120, -74, -85, -90, -92],
            PAmacron: [-100, -100, -120, -120, -74, -85, -90, -92],
            PAogonek: [-100, -100, -120, -120, -74, -85, -90, -92],
            PAring: [-100, -100, -120, -120, -74, -85, -90, -92],
            PAtilde: [-100, -100, -120, -120, -74, -85, -90, -92],
            Pa: [-30, -30, -40, -40, -10, -40, -80, -15],
            Paacute: [-30, -30, -40, -40, -10, -40, -80, -15],
            Pabreve: [-30, -30, -40, -40, -10, -40, -80, -15],
            Pacircumflex: [-30, -30, -40, -40, -10, -40, -80, -15],
            Padieresis: [-30, -30, -40, -40, -10, -40, -80, -15],
            Pagrave: [-30, -30, -40, -40, -10, -40, -80, -15],
            Pamacron: [-30, -30, -40, -40, -10, -40, -80, -15],
            Paogonek: [-30, -30, -40, -40, -10, -40, -80, -15],
            Paring: [-30, -30, -40, -40, -10, -40, -80, -15],
            Patilde: [-30, -30, -40, -40, -10, -40, -80, -15],
            Pcomma: [-120, -120, -180, -180, -92, -129, -135, -111],
            Pe: [-30, -30, -50, -50, -20, -50, -80],
            Peacute: [-30, -30, -50, -50, -20, -50, -80],
            Pecaron: [-30, -30, -50, -50, -20, -50, -80],
            Pecircumflex: [-30, -30, -50, -50, -20, -50, -80],
            Pedieresis: [-30, -30, -50, -50, -20, -50, -80],
            Pedotaccent: [-30, -30, -50, -50, -20, -50, -80],
            Pegrave: [-30, -30, -50, -50, -20, -50, -80],
            Pemacron: [-30, -30, -50, -50, -20, -50, -80],
            Peogonek: [-30, -30, -50, -50, -20, -50, -80],
            Po: [-40, -40, -50, -50, -20, -55, -80],
            Poacute: [-40, -40, -50, -50, -20, -55, -80],
            Pocircumflex: [-40, -40, -50, -50, -20, -55, -80],
            Podieresis: [-40, -40, -50, -50, -20, -55, -80],
            Pograve: [-40, -40, -50, -50, -20, -55, -80],
            Pohungarumlaut: [-40, -40, -50, -50, -20, -55, -80],
            Pomacron: [-40, -40, -50, -50, -20, -55, -80],
            Poslash: [-40, -40, -50, -50, -20, -55, -80],
            Potilde: [-40, -40, -50, -50, -20, -55, -80],
            Pperiod: [-120, -120, -180, -180, -110, -129, -135, -111],
            QU: [-10, -10, -10, -10, -10, -10, -10, -10],
            QUacute: [-10, -10, -10, -10, -10, -10, -10, -10],
            QUcircumflex: [-10, -10, -10, -10, -10, -10, -10, -10],
            QUdieresis: [-10, -10, -10, -10, -10, -10, -10, -10],
            QUgrave: [-10, -10, -10, -10, -10, -10, -10, -10],
            QUhungarumlaut: [-10, -10, -10, -10, -10, -10, -10, -10],
            QUmacron: [-10, -10, -10, -10, -10, -10, -10, -10],
            QUogonek: [-10, -10, -10, -10, -10, -10, -10, -10],
            QUring: [-10, -10, -10, -10, -10, -10, -10, -10],
            Qcomma: [20, 20],
            Qperiod: [20, 20, 0, 0, -20],
            RO: [-20, -20, -20, -20, -30, -40, -40, -40],
            ROacute: [-20, -20, -20, -20, -30, -40, -40, -40],
            ROcircumflex: [-20, -20, -20, -20, -30, -40, -40, -40],
            ROdieresis: [-20, -20, -20, -20, -30, -40, -40, -40],
            ROgrave: [-20, -20, -20, -20, -30, -40, -40, -40],
            ROhungarumlaut: [-20, -20, -20, -20, -30, -40, -40, -40],
            ROmacron: [-20, -20, -20, -20, -30, -40, -40, -40],
            ROslash: [-20, -20, -20, -20, -30, -40, -40, -40],
            ROtilde: [-20, -20, -20, -20, -30, -40, -40, -40],
            RT: [-20, -20, -30, -30, -40, -30, 0, -60],
            RTcaron: [-20, -20, -30, -30, -40, -30, 0, -60],
            RTcommaaccent: [-20, -20, -30, -30, -40, -30, 0, -60],
            RU: [-20, -20, -40, -40, -30, -40, -40, -40],
            RUacute: [-20, -20, -40, -40, -30, -40, -40, -40],
            RUcircumflex: [-20, -20, -40, -40, -30, -40, -40, -40],
            RUdieresis: [-20, -20, -40, -40, -30, -40, -40, -40],
            RUgrave: [-20, -20, -40, -40, -30, -40, -40, -40],
            RUhungarumlaut: [-20, -20, -40, -40, -30, -40, -40, -40],
            RUmacron: [-20, -20, -40, -40, -30, -40, -40, -40],
            RUogonek: [-20, -20, -40, -40, -30, -40, -40, -40],
            RUring: [-20, -20, -40, -40, -30, -40, -40, -40],
            RV: [-50, -50, -50, -50, -55, -18, -18, -80],
            RW: [-40, -40, -30, -30, -35, -18, -18, -55],
            RY: [-50, -50, -50, -50, -35, -18, -18, -65],
            RYacute: [-50, -50, -50, -50, -35, -18, -18, -65],
            RYdieresis: [-50, -50, -50, -50, -35, -18, -18, -65],
            RacuteO: [-20, -20, -20, -20, -30, -40, -40, -40],
            RacuteOacute: [-20, -20, -20, -20, -30, -40, -40, -40],
            RacuteOcircumflex: [-20, -20, -20, -20, -30, -40, -40, -40],
            RacuteOdieresis: [-20, -20, -20, -20, -30, -40, -40, -40],
            RacuteOgrave: [-20, -20, -20, -20, -30, -40, -40, -40],
            RacuteOhungarumlaut: [-20, -20, -20, -20, -30, -40, -40, -40],
            RacuteOmacron: [-20, -20, -20, -20, -30, -40, -40, -40],
            RacuteOslash: [-20, -20, -20, -20, -30, -40, -40, -40],
            RacuteOtilde: [-20, -20, -20, -20, -30, -40, -40, -40],
            RacuteT: [-20, -20, -30, -30, -40, -30, 0, -60],
            RacuteTcaron: [-20, -20, -30, -30, -40, -30, 0, -60],
            RacuteTcommaaccent: [-20, -20, -30, -30, -40, -30, 0, -60],
            RacuteU: [-20, -20, -40, -40, -30, -40, -40, -40],
            RacuteUacute: [-20, -20, -40, -40, -30, -40, -40, -40],
            RacuteUcircumflex: [-20, -20, -40, -40, -30, -40, -40, -40],
            RacuteUdieresis: [-20, -20, -40, -40, -30, -40, -40, -40],
            RacuteUgrave: [-20, -20, -40, -40, -30, -40, -40, -40],
            RacuteUhungarumlaut: [-20, -20, -40, -40, -30, -40, -40, -40],
            RacuteUmacron: [-20, -20, -40, -40, -30, -40, -40, -40],
            RacuteUogonek: [-20, -20, -40, -40, -30, -40, -40, -40],
            RacuteUring: [-20, -20, -40, -40, -30, -40, -40, -40],
            RacuteV: [-50, -50, -50, -50, -55, -18, -18, -80],
            RacuteW: [-40, -40, -30, -30, -35, -18, -18, -55],
            RacuteY: [-50, -50, -50, -50, -35, -18, -18, -65],
            RacuteYacute: [-50, -50, -50, -50, -35, -18, -18, -65],
            RacuteYdieresis: [-50, -50, -50, -50, -35, -18, -18, -65],
            RcaronO: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcaronOacute: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcaronOcircumflex: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcaronOdieresis: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcaronOgrave: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcaronOhungarumlaut: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcaronOmacron: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcaronOslash: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcaronOtilde: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcaronT: [-20, -20, -30, -30, -40, -30, 0, -60],
            RcaronTcaron: [-20, -20, -30, -30, -40, -30, 0, -60],
            RcaronTcommaaccent: [-20, -20, -30, -30, -40, -30, 0, -60],
            RcaronU: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcaronUacute: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcaronUcircumflex: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcaronUdieresis: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcaronUgrave: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcaronUhungarumlaut: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcaronUmacron: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcaronUogonek: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcaronUring: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcaronV: [-50, -50, -50, -50, -55, -18, -18, -80],
            RcaronW: [-40, -40, -30, -30, -35, -18, -18, -55],
            RcaronY: [-50, -50, -50, -50, -35, -18, -18, -65],
            RcaronYacute: [-50, -50, -50, -50, -35, -18, -18, -65],
            RcaronYdieresis: [-50, -50, -50, -50, -35, -18, -18, -65],
            RcommaaccentO: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcommaaccentOacute: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcommaaccentOcircumflex: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcommaaccentOdieresis: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcommaaccentOgrave: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcommaaccentOhungarumlaut: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcommaaccentOmacron: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcommaaccentOslash: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcommaaccentOtilde: [-20, -20, -20, -20, -30, -40, -40, -40],
            RcommaaccentT: [-20, -20, -30, -30, -40, -30, 0, -60],
            RcommaaccentTcaron: [-20, -20, -30, -30, -40, -30, 0, -60],
            RcommaaccentTcommaaccent: [-20, -20, -30, -30, -40, -30, 0, -60],
            RcommaaccentU: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcommaaccentUacute: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcommaaccentUcircumflex: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcommaaccentUdieresis: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcommaaccentUgrave: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcommaaccentUhungarumlaut: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcommaaccentUmacron: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcommaaccentUogonek: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcommaaccentUring: [-20, -20, -40, -40, -30, -40, -40, -40],
            RcommaaccentV: [-50, -50, -50, -50, -55, -18, -18, -80],
            RcommaaccentW: [-40, -40, -30, -30, -35, -18, -18, -55],
            RcommaaccentY: [-50, -50, -50, -50, -35, -18, -18, -65],
            RcommaaccentYacute: [-50, -50, -50, -50, -35, -18, -18, -65],
            RcommaaccentYdieresis: [-50, -50, -50, -50, -35, -18, -18, -65],
            TA: [-90, -90, -120, -120, -90, -55, -50, -93],
            TAacute: [-90, -90, -120, -120, -90, -55, -50, -93],
            TAbreve: [-90, -90, -120, -120, -90, -55, -50, -93],
            TAcircumflex: [-90, -90, -120, -120, -90, -55, -50, -93],
            TAdieresis: [-90, -90, -120, -120, -90, -55, -50, -93],
            TAgrave: [-90, -90, -120, -120, -90, -55, -50, -93],
            TAmacron: [-90, -90, -120, -120, -90, -55, -50, -93],
            TAogonek: [-90, -90, -120, -120, -90, -55, -50, -93],
            TAring: [-90, -90, -120, -120, -90, -55, -50, -93],
            TAtilde: [-90, -90, -120, -120, -90, -55, -50, -93],
            TO: [-40, -40, -40, -40, -18, -18, -18, -18],
            TOacute: [-40, -40, -40, -40, -18, -18, -18, -18],
            TOcircumflex: [-40, -40, -40, -40, -18, -18, -18, -18],
            TOdieresis: [-40, -40, -40, -40, -18, -18, -18, -18],
            TOgrave: [-40, -40, -40, -40, -18, -18, -18, -18],
            TOhungarumlaut: [-40, -40, -40, -40, -18, -18, -18, -18],
            TOmacron: [-40, -40, -40, -40, -18, -18, -18, -18],
            TOslash: [-40, -40, -40, -40, -18, -18, -18, -18],
            TOtilde: [-40, -40, -40, -40, -18, -18, -18, -18],
            Ta: [-80, -80, -120, -120, -92, -92, -92, -80],
            Taacute: [-80, -80, -120, -120, -92, -92, -92, -80],
            Tabreve: [-80, -80, -60, -60, -52, -92, -92, -80],
            Tacircumflex: [-80, -80, -120, -120, -52, -92, -92, -80],
            Tadieresis: [-80, -80, -120, -120, -52, -92, -92, -40],
            Tagrave: [-80, -80, -120, -120, -52, -92, -92, -40],
            Tamacron: [-80, -80, -60, -60, -52, -92, -92, -40],
            Taogonek: [-80, -80, -120, -120, -92, -92, -92, -80],
            Taring: [-80, -80, -120, -120, -92, -92, -92, -80],
            Tatilde: [-80, -80, -60, -60, -52, -92, -92, -40],
            Tcolon: [-40, -40, -20, -20, -74, -74, -55, -50],
            Tcomma: [-80, -80, -120, -120, -74, -92, -74, -74],
            Te: [-60, -60, -120, -120, -92, -92, -92, -70],
            Teacute: [-60, -60, -120, -120, -92, -92, -92, -70],
            Tecaron: [-60, -60, -120, -120, -92, -92, -92, -70],
            Tecircumflex: [-60, -60, -120, -120, -92, -92, -52, -70],
            Tedieresis: [-60, -60, -120, -120, -52, -52, -52, -30],
            Tedotaccent: [-60, -60, -120, -120, -92, -92, -92, -70],
            Tegrave: [-60, -60, -60, -60, -52, -52, -52, -70],
            Temacron: [-60, -60, -60, -60, -52, -52, -52, -30],
            Teogonek: [-60, -60, -120, -120, -92, -92, -92, -70],
            Thyphen: [-120, -120, -140, -140, -92, -92, -74, -92],
            To: [-80, -80, -120, -120, -92, -95, -92, -80],
            Toacute: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tocircumflex: [-80, -80, -120, -120, -92, -95, -92, -80],
            Todieresis: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tograve: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tohungarumlaut: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tomacron: [-80, -80, -60, -60, -92, -95, -92, -80],
            Toslash: [-80, -80, -120, -120, -92, -95, -92, -80],
            Totilde: [-80, -80, -60, -60, -92, -95, -92, -80],
            Tperiod: [-80, -80, -120, -120, -90, -92, -74, -74],
            Tr: [-80, -80, -120, -120, -74, -37, -55, -35],
            Tracute: [-80, -80, -120, -120, -74, -37, -55, -35],
            Trcommaaccent: [-80, -80, -120, -120, -74, -37, -55, -35],
            Tsemicolon: [-40, -40, -20, -20, -74, -74, -65, -55],
            Tu: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tuacute: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tucircumflex: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tudieresis: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tugrave: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tuhungarumlaut: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tumacron: [-90, -90, -60, -60, -92, -37, -55, -45],
            Tuogonek: [-90, -90, -120, -120, -92, -37, -55, -45],
            Turing: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tw: [-60, -60, -120, -120, -74, -37, -74, -80],
            Ty: [-60, -60, -120, -120, -34, -37, -74, -80],
            Tyacute: [-60, -60, -120, -120, -34, -37, -74, -80],
            Tydieresis: [-60, -60, -60, -60, -34, -37, -34, -80],
            TcaronA: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcaronAacute: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcaronAbreve: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcaronAcircumflex: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcaronAdieresis: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcaronAgrave: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcaronAmacron: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcaronAogonek: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcaronAring: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcaronAtilde: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcaronO: [-40, -40, -40, -40, -18, -18, -18, -18],
            TcaronOacute: [-40, -40, -40, -40, -18, -18, -18, -18],
            TcaronOcircumflex: [-40, -40, -40, -40, -18, -18, -18, -18],
            TcaronOdieresis: [-40, -40, -40, -40, -18, -18, -18, -18],
            TcaronOgrave: [-40, -40, -40, -40, -18, -18, -18, -18],
            TcaronOhungarumlaut: [-40, -40, -40, -40, -18, -18, -18, -18],
            TcaronOmacron: [-40, -40, -40, -40, -18, -18, -18, -18],
            TcaronOslash: [-40, -40, -40, -40, -18, -18, -18, -18],
            TcaronOtilde: [-40, -40, -40, -40, -18, -18, -18, -18],
            Tcarona: [-80, -80, -120, -120, -92, -92, -92, -80],
            Tcaronaacute: [-80, -80, -120, -120, -92, -92, -92, -80],
            Tcaronabreve: [-80, -80, -60, -60, -52, -92, -92, -80],
            Tcaronacircumflex: [-80, -80, -120, -120, -52, -92, -92, -80],
            Tcaronadieresis: [-80, -80, -120, -120, -52, -92, -92, -40],
            Tcaronagrave: [-80, -80, -120, -120, -52, -92, -92, -40],
            Tcaronamacron: [-80, -80, -60, -60, -52, -92, -92, -40],
            Tcaronaogonek: [-80, -80, -120, -120, -92, -92, -92, -80],
            Tcaronaring: [-80, -80, -120, -120, -92, -92, -92, -80],
            Tcaronatilde: [-80, -80, -60, -60, -52, -92, -92, -40],
            Tcaroncolon: [-40, -40, -20, -20, -74, -74, -55, -50],
            Tcaroncomma: [-80, -80, -120, -120, -74, -92, -74, -74],
            Tcarone: [-60, -60, -120, -120, -92, -92, -92, -70],
            Tcaroneacute: [-60, -60, -120, -120, -92, -92, -92, -70],
            Tcaronecaron: [-60, -60, -120, -120, -92, -92, -92, -70],
            Tcaronecircumflex: [-60, -60, -120, -120, -92, -92, -52, -30],
            Tcaronedieresis: [-60, -60, -120, -120, -52, -52, -52, -30],
            Tcaronedotaccent: [-60, -60, -120, -120, -92, -92, -92, -70],
            Tcaronegrave: [-60, -60, -60, -60, -52, -52, -52, -70],
            Tcaronemacron: [-60, -60, -60, -60, -52, -52, -52, -30],
            Tcaroneogonek: [-60, -60, -120, -120, -92, -92, -92, -70],
            Tcaronhyphen: [-120, -120, -140, -140, -92, -92, -74, -92],
            Tcarono: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tcaronoacute: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tcaronocircumflex: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tcaronodieresis: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tcaronograve: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tcaronohungarumlaut: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tcaronomacron: [-80, -80, -60, -60, -92, -95, -92, -80],
            Tcaronoslash: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tcaronotilde: [-80, -80, -60, -60, -92, -95, -92, -80],
            Tcaronperiod: [-80, -80, -120, -120, -90, -92, -74, -74],
            Tcaronr: [-80, -80, -120, -120, -74, -37, -55, -35],
            Tcaronracute: [-80, -80, -120, -120, -74, -37, -55, -35],
            Tcaronrcommaaccent: [-80, -80, -120, -120, -74, -37, -55, -35],
            Tcaronsemicolon: [-40, -40, -20, -20, -74, -74, -65, -55],
            Tcaronu: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tcaronuacute: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tcaronucircumflex: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tcaronudieresis: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tcaronugrave: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tcaronuhungarumlaut: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tcaronumacron: [-90, -90, -60, -60, -92, -37, -55, -45],
            Tcaronuogonek: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tcaronuring: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tcaronw: [-60, -60, -120, -120, -74, -37, -74, -80],
            Tcarony: [-60, -60, -120, -120, -34, -37, -74, -80],
            Tcaronyacute: [-60, -60, -120, -120, -34, -37, -74, -80],
            Tcaronydieresis: [-60, -60, -60, -60, -34, -37, -34, -80],
            TcommaaccentA: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcommaaccentAacute: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcommaaccentAbreve: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcommaaccentAcircumflex: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcommaaccentAdieresis: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcommaaccentAgrave: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcommaaccentAmacron: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcommaaccentAogonek: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcommaaccentAring: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcommaaccentAtilde: [-90, -90, -120, -120, -90, -55, -50, -93],
            TcommaaccentO: [-40, -40, -40, -40, -18, -18, -18, -18],
            TcommaaccentOacute: [-40, -40, -40, -40, -18, -18, -18, -18],
            TcommaaccentOcircumflex: [-40, -40, -40, -40, -18, -18, -18, -18],
            TcommaaccentOdieresis: [-40, -40, -40, -40, -18, -18, -18, -18],
            TcommaaccentOgrave: [-40, -40, -40, -40, -18, -18, -18, -18],
            TcommaaccentOhungarumlaut: [-40, -40, -40, -40, -18, -18, -18, -18],
            TcommaaccentOmacron: [-40, -40, -40, -40, -18, -18, -18, -18],
            TcommaaccentOslash: [-40, -40, -40, -40, -18, -18, -18, -18],
            TcommaaccentOtilde: [-40, -40, -40, -40, -18, -18, -18, -18],
            Tcommaaccenta: [-80, -80, -120, -120, -92, -92, -92, -80],
            Tcommaaccentaacute: [-80, -80, -120, -120, -92, -92, -92, -80],
            Tcommaaccentabreve: [-80, -80, -60, -60, -52, -92, -92, -80],
            Tcommaaccentacircumflex: [-80, -80, -120, -120, -52, -92, -92, -80],
            Tcommaaccentadieresis: [-80, -80, -120, -120, -52, -92, -92, -40],
            Tcommaaccentagrave: [-80, -80, -120, -120, -52, -92, -92, -40],
            Tcommaaccentamacron: [-80, -80, -60, -60, -52, -92, -92, -40],
            Tcommaaccentaogonek: [-80, -80, -120, -120, -92, -92, -92, -80],
            Tcommaaccentaring: [-80, -80, -120, -120, -92, -92, -92, -80],
            Tcommaaccentatilde: [-80, -80, -60, -60, -52, -92, -92, -40],
            Tcommaaccentcolon: [-40, -40, -20, -20, -74, -74, -55, -50],
            Tcommaaccentcomma: [-80, -80, -120, -120, -74, -92, -74, -74],
            Tcommaaccente: [-60, -60, -120, -120, -92, -92, -92, -70],
            Tcommaaccenteacute: [-60, -60, -120, -120, -92, -92, -92, -70],
            Tcommaaccentecaron: [-60, -60, -120, -120, -92, -92, -92, -70],
            Tcommaaccentecircumflex: [-60, -60, -120, -120, -92, -92, -52, -30],
            Tcommaaccentedieresis: [-60, -60, -120, -120, -52, -52, -52, -30],
            Tcommaaccentedotaccent: [-60, -60, -120, -120, -92, -92, -92, -70],
            Tcommaaccentegrave: [-60, -60, -60, -60, -52, -52, -52, -30],
            Tcommaaccentemacron: [-60, -60, -60, -60, -52, -52, -52, -70],
            Tcommaaccenteogonek: [-60, -60, -120, -120, -92, -92, -92, -70],
            Tcommaaccenthyphen: [-120, -120, -140, -140, -92, -92, -74, -92],
            Tcommaaccento: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tcommaaccentoacute: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tcommaaccentocircumflex: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tcommaaccentodieresis: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tcommaaccentograve: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tcommaaccentohungarumlaut: [
              -80, -80, -120, -120, -92, -95, -92, -80,
            ],
            Tcommaaccentomacron: [-80, -80, -60, -60, -92, -95, -92, -80],
            Tcommaaccentoslash: [-80, -80, -120, -120, -92, -95, -92, -80],
            Tcommaaccentotilde: [-80, -80, -60, -60, -92, -95, -92, -80],
            Tcommaaccentperiod: [-80, -80, -120, -120, -90, -92, -74, -74],
            Tcommaaccentr: [-80, -80, -120, -120, -74, -37, -55, -35],
            Tcommaaccentracute: [-80, -80, -120, -120, -74, -37, -55, -35],
            Tcommaaccentrcommaaccent: [
              -80, -80, -120, -120, -74, -37, -55, -35,
            ],
            Tcommaaccentsemicolon: [-40, -40, -20, -20, -74, -74, -65, -55],
            Tcommaaccentu: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tcommaaccentuacute: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tcommaaccentucircumflex: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tcommaaccentudieresis: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tcommaaccentugrave: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tcommaaccentuhungarumlaut: [
              -90, -90, -120, -120, -92, -37, -55, -45,
            ],
            Tcommaaccentumacron: [-90, -90, -60, -60, -92, -37, -55, -45],
            Tcommaaccentuogonek: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tcommaaccenturing: [-90, -90, -120, -120, -92, -37, -55, -45],
            Tcommaaccentw: [-60, -60, -120, -120, -74, -37, -74, -80],
            Tcommaaccenty: [-60, -60, -120, -120, -34, -37, -74, -80],
            Tcommaaccentyacute: [-60, -60, -120, -120, -34, -37, -74, -80],
            Tcommaaccentydieresis: [-60, -60, -60, -60, -34, -37, -34, -80],
            UA: [-50, -50, -40, -40, -60, -45, -40, -40],
            UAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
            UAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
            UAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
            UAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
            UAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
            UAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
            UAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
            UAring: [-50, -50, -40, -40, -60, -45, -40, -40],
            UAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
            Ucomma: [-30, -30, -40, -40, -50, 0, -25],
            Uperiod: [-30, -30, -40, -40, -50, 0, -25],
            UacuteA: [-50, -50, -40, -40, -60, -45, -40, -40],
            UacuteAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
            UacuteAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
            UacuteAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
            UacuteAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
            UacuteAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
            UacuteAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
            UacuteAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
            UacuteAring: [-50, -50, -40, -40, -60, -45, -40, -40],
            UacuteAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
            Uacutecomma: [-30, -30, -40, -40, -50, 0, -25],
            Uacuteperiod: [-30, -30, -40, -40, -50, 0, -25],
            UcircumflexA: [-50, -50, -40, -40, -60, -45, -40, -40],
            UcircumflexAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
            UcircumflexAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
            UcircumflexAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
            UcircumflexAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
            UcircumflexAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
            UcircumflexAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
            UcircumflexAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
            UcircumflexAring: [-50, -50, -40, -40, -60, -45, -40, -40],
            UcircumflexAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
            Ucircumflexcomma: [-30, -30, -40, -40, -50, 0, -25],
            Ucircumflexperiod: [-30, -30, -40, -40, -50, 0, -25],
            UdieresisA: [-50, -50, -40, -40, -60, -45, -40, -40],
            UdieresisAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
            UdieresisAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
            UdieresisAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
            UdieresisAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
            UdieresisAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
            UdieresisAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
            UdieresisAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
            UdieresisAring: [-50, -50, -40, -40, -60, -45, -40, -40],
            UdieresisAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
            Udieresiscomma: [-30, -30, -40, -40, -50, 0, -25],
            Udieresisperiod: [-30, -30, -40, -40, -50, 0, -25],
            UgraveA: [-50, -50, -40, -40, -60, -45, -40, -40],
            UgraveAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
            UgraveAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
            UgraveAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
            UgraveAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
            UgraveAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
            UgraveAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
            UgraveAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
            UgraveAring: [-50, -50, -40, -40, -60, -45, -40, -40],
            UgraveAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
            Ugravecomma: [-30, -30, -40, -40, -50, 0, -25],
            Ugraveperiod: [-30, -30, -40, -40, -50, 0, -25],
            UhungarumlautA: [-50, -50, -40, -40, -60, -45, -40, -40],
            UhungarumlautAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
            UhungarumlautAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
            UhungarumlautAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
            UhungarumlautAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
            UhungarumlautAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
            UhungarumlautAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
            UhungarumlautAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
            UhungarumlautAring: [-50, -50, -40, -40, -60, -45, -40, -40],
            UhungarumlautAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
            Uhungarumlautcomma: [-30, -30, -40, -40, -50, 0, -25],
            Uhungarumlautperiod: [-30, -30, -40, -40, -50, 0, -25],
            UmacronA: [-50, -50, -40, -40, -60, -45, -40, -40],
            UmacronAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
            UmacronAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
            UmacronAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
            UmacronAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
            UmacronAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
            UmacronAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
            UmacronAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
            UmacronAring: [-50, -50, -40, -40, -60, -45, -40, -40],
            UmacronAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
            Umacroncomma: [-30, -30, -40, -40, -50, 0, -25],
            Umacronperiod: [-30, -30, -40, -40, -50, 0, -25],
            UogonekA: [-50, -50, -40, -40, -60, -45, -40, -40],
            UogonekAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
            UogonekAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
            UogonekAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
            UogonekAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
            UogonekAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
            UogonekAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
            UogonekAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
            UogonekAring: [-50, -50, -40, -40, -60, -45, -40, -40],
            UogonekAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
            Uogonekcomma: [-30, -30, -40, -40, -50, 0, -25],
            Uogonekperiod: [-30, -30, -40, -40, -50, 0, -25],
            UringA: [-50, -50, -40, -40, -60, -45, -40, -40],
            UringAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
            UringAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
            UringAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
            UringAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
            UringAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
            UringAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
            UringAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
            UringAring: [-50, -50, -40, -40, -60, -45, -40, -40],
            UringAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
            Uringcomma: [-30, -30, -40, -40, -50, 0, -25],
            Uringperiod: [-30, -30, -40, -40, -50, 0, -25],
            VA: [-80, -80, -80, -80, -135, -85, -60, -135],
            VAacute: [-80, -80, -80, -80, -135, -85, -60, -135],
            VAbreve: [-80, -80, -80, -80, -135, -85, -60, -135],
            VAcircumflex: [-80, -80, -80, -80, -135, -85, -60, -135],
            VAdieresis: [-80, -80, -80, -80, -135, -85, -60, -135],
            VAgrave: [-80, -80, -80, -80, -135, -85, -60, -135],
            VAmacron: [-80, -80, -80, -80, -135, -85, -60, -135],
            VAogonek: [-80, -80, -80, -80, -135, -85, -60, -135],
            VAring: [-80, -80, -80, -80, -135, -85, -60, -135],
            VAtilde: [-80, -80, -80, -80, -135, -85, -60, -135],
            VG: [-50, -50, -40, -40, -30, -10, 0, -15],
            VGbreve: [-50, -50, -40, -40, -30, -10, 0, -15],
            VGcommaaccent: [-50, -50, -40, -40, -30, -10, 0, -15],
            VO: [-50, -50, -40, -40, -45, -30, -30, -40],
            VOacute: [-50, -50, -40, -40, -45, -30, -30, -40],
            VOcircumflex: [-50, -50, -40, -40, -45, -30, -30, -40],
            VOdieresis: [-50, -50, -40, -40, -45, -30, -30, -40],
            VOgrave: [-50, -50, -40, -40, -45, -30, -30, -40],
            VOhungarumlaut: [-50, -50, -40, -40, -45, -30, -30, -40],
            VOmacron: [-50, -50, -40, -40, -45, -30, -30, -40],
            VOslash: [-50, -50, -40, -40, -45, -30, -30, -40],
            VOtilde: [-50, -50, -40, -40, -45, -30, -30, -40],
            Va: [-60, -60, -70, -70, -92, -111, -111, -111],
            Vaacute: [-60, -60, -70, -70, -92, -111, -111, -111],
            Vabreve: [-60, -60, -70, -70, -92, -111, -111, -111],
            Vacircumflex: [-60, -60, -70, -70, -92, -111, -111, -71],
            Vadieresis: [-60, -60, -70, -70, -92, -111, -111, -71],
            Vagrave: [-60, -60, -70, -70, -92, -111, -111, -71],
            Vamacron: [-60, -60, -70, -70, -92, -111, -111, -71],
            Vaogonek: [-60, -60, -70, -70, -92, -111, -111, -111],
            Varing: [-60, -60, -70, -70, -92, -111, -111, -111],
            Vatilde: [-60, -60, -70, -70, -92, -111, -111, -71],
            Vcolon: [-40, -40, -40, -40, -92, -74, -65, -74],
            Vcomma: [-120, -120, -125, -125, -129, -129, -129, -129],
            Ve: [-50, -50, -80, -80, -100, -111, -111, -111],
            Veacute: [-50, -50, -80, -80, -100, -111, -111, -111],
            Vecaron: [-50, -50, -80, -80, -100, -111, -111, -71],
            Vecircumflex: [-50, -50, -80, -80, -100, -111, -111, -71],
            Vedieresis: [-50, -50, -80, -80, -100, -71, -71, -71],
            Vedotaccent: [-50, -50, -80, -80, -100, -111, -111, -111],
            Vegrave: [-50, -50, -80, -80, -100, -71, -71, -71],
            Vemacron: [-50, -50, -80, -80, -100, -71, -71, -71],
            Veogonek: [-50, -50, -80, -80, -100, -111, -111, -111],
            Vhyphen: [-80, -80, -80, -80, -74, -70, -55, -100],
            Vo: [-90, -90, -80, -80, -100, -111, -111, -129],
            Voacute: [-90, -90, -80, -80, -100, -111, -111, -129],
            Vocircumflex: [-90, -90, -80, -80, -100, -111, -111, -129],
            Vodieresis: [-90, -90, -80, -80, -100, -111, -111, -89],
            Vograve: [-90, -90, -80, -80, -100, -111, -111, -89],
            Vohungarumlaut: [-90, -90, -80, -80, -100, -111, -111, -129],
            Vomacron: [-90, -90, -80, -80, -100, -111, -111, -89],
            Voslash: [-90, -90, -80, -80, -100, -111, -111, -129],
            Votilde: [-90, -90, -80, -80, -100, -111, -111, -89],
            Vperiod: [-120, -120, -125, -125, -145, -129, -129, -129],
            Vsemicolon: [-40, -40, -40, -40, -92, -74, -74, -74],
            Vu: [-60, -60, -70, -70, -92, -55, -74, -75],
            Vuacute: [-60, -60, -70, -70, -92, -55, -74, -75],
            Vucircumflex: [-60, -60, -70, -70, -92, -55, -74, -75],
            Vudieresis: [-60, -60, -70, -70, -92, -55, -74, -75],
            Vugrave: [-60, -60, -70, -70, -92, -55, -74, -75],
            Vuhungarumlaut: [-60, -60, -70, -70, -92, -55, -74, -75],
            Vumacron: [-60, -60, -70, -70, -92, -55, -74, -75],
            Vuogonek: [-60, -60, -70, -70, -92, -55, -74, -75],
            Vuring: [-60, -60, -70, -70, -92, -55, -74, -75],
            WA: [-60, -60, -50, -50, -120, -74, -60, -120],
            WAacute: [-60, -60, -50, -50, -120, -74, -60, -120],
            WAbreve: [-60, -60, -50, -50, -120, -74, -60, -120],
            WAcircumflex: [-60, -60, -50, -50, -120, -74, -60, -120],
            WAdieresis: [-60, -60, -50, -50, -120, -74, -60, -120],
            WAgrave: [-60, -60, -50, -50, -120, -74, -60, -120],
            WAmacron: [-60, -60, -50, -50, -120, -74, -60, -120],
            WAogonek: [-60, -60, -50, -50, -120, -74, -60, -120],
            WAring: [-60, -60, -50, -50, -120, -74, -60, -120],
            WAtilde: [-60, -60, -50, -50, -120, -74, -60, -120],
            WO: [-20, -20, -20, -20, -10, -15, -25, -10],
            WOacute: [-20, -20, -20, -20, -10, -15, -25, -10],
            WOcircumflex: [-20, -20, -20, -20, -10, -15, -25, -10],
            WOdieresis: [-20, -20, -20, -20, -10, -15, -25, -10],
            WOgrave: [-20, -20, -20, -20, -10, -15, -25, -10],
            WOhungarumlaut: [-20, -20, -20, -20, -10, -15, -25, -10],
            WOmacron: [-20, -20, -20, -20, -10, -15, -25, -10],
            WOslash: [-20, -20, -20, -20, -10, -15, -25, -10],
            WOtilde: [-20, -20, -20, -20, -10, -15, -25, -10],
            Wa: [-40, -40, -40, -40, -65, -85, -92, -80],
            Waacute: [-40, -40, -40, -40, -65, -85, -92, -80],
            Wabreve: [-40, -40, -40, -40, -65, -85, -92, -80],
            Wacircumflex: [-40, -40, -40, -40, -65, -85, -92, -80],
            Wadieresis: [-40, -40, -40, -40, -65, -85, -92, -80],
            Wagrave: [-40, -40, -40, -40, -65, -85, -92, -80],
            Wamacron: [-40, -40, -40, -40, -65, -85, -92, -80],
            Waogonek: [-40, -40, -40, -40, -65, -85, -92, -80],
            Waring: [-40, -40, -40, -40, -65, -85, -92, -80],
            Watilde: [-40, -40, -40, -40, -65, -85, -92, -80],
            Wcolon: [-10, -10, 0, 0, -55, -55, -65, -37],
            Wcomma: [-80, -80, -80, -80, -92, -74, -92, -92],
            We: [-35, -35, -30, -30, -65, -90, -92, -80],
            Weacute: [-35, -35, -30, -30, -65, -90, -92, -80],
            Wecaron: [-35, -35, -30, -30, -65, -90, -92, -80],
            Wecircumflex: [-35, -35, -30, -30, -65, -90, -92, -80],
            Wedieresis: [-35, -35, -30, -30, -65, -50, -52, -40],
            Wedotaccent: [-35, -35, -30, -30, -65, -90, -92, -80],
            Wegrave: [-35, -35, -30, -30, -65, -50, -52, -40],
            Wemacron: [-35, -35, -30, -30, -65, -50, -52, -40],
            Weogonek: [-35, -35, -30, -30, -65, -90, -92, -80],
            Whyphen: [-40, -40, -40, -40, -37, -50, -37, -65],
            Wo: [-60, -60, -30, -30, -75, -80, -92, -80],
            Woacute: [-60, -60, -30, -30, -75, -80, -92, -80],
            Wocircumflex: [-60, -60, -30, -30, -75, -80, -92, -80],
            Wodieresis: [-60, -60, -30, -30, -75, -80, -92, -80],
            Wograve: [-60, -60, -30, -30, -75, -80, -92, -80],
            Wohungarumlaut: [-60, -60, -30, -30, -75, -80, -92, -80],
            Womacron: [-60, -60, -30, -30, -75, -80, -92, -80],
            Woslash: [-60, -60, -30, -30, -75, -80, -92, -80],
            Wotilde: [-60, -60, -30, -30, -75, -80, -92, -80],
            Wperiod: [-80, -80, -80, -80, -92, -74, -92, -92],
            Wsemicolon: [-10, -10, 0, 0, -55, -55, -65, -37],
            Wu: [-45, -45, -30, -30, -50, -55, -55, -50],
            Wuacute: [-45, -45, -30, -30, -50, -55, -55, -50],
            Wucircumflex: [-45, -45, -30, -30, -50, -55, -55, -50],
            Wudieresis: [-45, -45, -30, -30, -50, -55, -55, -50],
            Wugrave: [-45, -45, -30, -30, -50, -55, -55, -50],
            Wuhungarumlaut: [-45, -45, -30, -30, -50, -55, -55, -50],
            Wumacron: [-45, -45, -30, -30, -50, -55, -55, -50],
            Wuogonek: [-45, -45, -30, -30, -50, -55, -55, -50],
            Wuring: [-45, -45, -30, -30, -50, -55, -55, -50],
            Wy: [-20, -20, -20, -20, -60, -55, -70, -73],
            Wyacute: [-20, -20, -20, -20, -60, -55, -70, -73],
            Wydieresis: [-20, -20, -20, -20, -60, -55, -70, -73],
            YA: [-110, -110, -110, -110, -110, -74, -50, -120],
            YAacute: [-110, -110, -110, -110, -110, -74, -50, -120],
            YAbreve: [-110, -110, -110, -110, -110, -74, -50, -120],
            YAcircumflex: [-110, -110, -110, -110, -110, -74, -50, -120],
            YAdieresis: [-110, -110, -110, -110, -110, -74, -50, -120],
            YAgrave: [-110, -110, -110, -110, -110, -74, -50, -120],
            YAmacron: [-110, -110, -110, -110, -110, -74, -50, -120],
            YAogonek: [-110, -110, -110, -110, -110, -74, -50, -120],
            YAring: [-110, -110, -110, -110, -110, -74, -50, -120],
            YAtilde: [-110, -110, -110, -110, -110, -74, -50, -120],
            YO: [-70, -70, -85, -85, -35, -25, -15, -30],
            YOacute: [-70, -70, -85, -85, -35, -25, -15, -30],
            YOcircumflex: [-70, -70, -85, -85, -35, -25, -15, -30],
            YOdieresis: [-70, -70, -85, -85, -35, -25, -15, -30],
            YOgrave: [-70, -70, -85, -85, -35, -25, -15, -30],
            YOhungarumlaut: [-70, -70, -85, -85, -35, -25, -15, -30],
            YOmacron: [-70, -70, -85, -85, -35, -25, -15, -30],
            YOslash: [-70, -70, -85, -85, -35, -25, -15, -30],
            YOtilde: [-70, -70, -85, -85, -35, -25, -15, -30],
            Ya: [-90, -90, -140, -140, -85, -92, -92, -100],
            Yaacute: [-90, -90, -140, -140, -85, -92, -92, -100],
            Yabreve: [-90, -90, -70, -70, -85, -92, -92, -100],
            Yacircumflex: [-90, -90, -140, -140, -85, -92, -92, -100],
            Yadieresis: [-90, -90, -140, -140, -85, -92, -92, -60],
            Yagrave: [-90, -90, -140, -140, -85, -92, -92, -60],
            Yamacron: [-90, -90, -70, -70, -85, -92, -92, -60],
            Yaogonek: [-90, -90, -140, -140, -85, -92, -92, -100],
            Yaring: [-90, -90, -140, -140, -85, -92, -92, -100],
            Yatilde: [-90, -90, -140, -140, -85, -92, -92, -60],
            Ycolon: [-50, -50, -60, -60, -92, -92, -65, -92],
            Ycomma: [-100, -100, -140, -140, -92, -92, -92, -129],
            Ye: [-80, -80, -140, -140, -111, -111, -92, -100],
            Yeacute: [-80, -80, -140, -140, -111, -111, -92, -100],
            Yecaron: [-80, -80, -140, -140, -111, -111, -92, -100],
            Yecircumflex: [-80, -80, -140, -140, -111, -71, -92, -100],
            Yedieresis: [-80, -80, -140, -140, -71, -71, -52, -60],
            Yedotaccent: [-80, -80, -140, -140, -111, -111, -92, -100],
            Yegrave: [-80, -80, -140, -140, -71, -71, -52, -60],
            Yemacron: [-80, -80, -70, -70, -71, -71, -52, -60],
            Yeogonek: [-80, -80, -140, -140, -111, -111, -92, -100],
            Yo: [-100, -100, -140, -140, -111, -111, -92, -110],
            Yoacute: [-100, -100, -140, -140, -111, -111, -92, -110],
            Yocircumflex: [-100, -100, -140, -140, -111, -111, -92, -110],
            Yodieresis: [-100, -100, -140, -140, -111, -111, -92, -70],
            Yograve: [-100, -100, -140, -140, -111, -111, -92, -70],
            Yohungarumlaut: [-100, -100, -140, -140, -111, -111, -92, -110],
            Yomacron: [-100, -100, -140, -140, -111, -111, -92, -70],
            Yoslash: [-100, -100, -140, -140, -111, -111, -92, -110],
            Yotilde: [-100, -100, -140, -140, -111, -111, -92, -70],
            Yperiod: [-100, -100, -140, -140, -92, -74, -92, -129],
            Ysemicolon: [-50, -50, -60, -60, -92, -92, -65, -92],
            Yu: [-100, -100, -110, -110, -92, -92, -92, -111],
            Yuacute: [-100, -100, -110, -110, -92, -92, -92, -111],
            Yucircumflex: [-100, -100, -110, -110, -92, -92, -92, -111],
            Yudieresis: [-100, -100, -110, -110, -92, -92, -92, -71],
            Yugrave: [-100, -100, -110, -110, -92, -92, -92, -71],
            Yuhungarumlaut: [-100, -100, -110, -110, -92, -92, -92, -111],
            Yumacron: [-100, -100, -110, -110, -92, -92, -92, -71],
            Yuogonek: [-100, -100, -110, -110, -92, -92, -92, -111],
            Yuring: [-100, -100, -110, -110, -92, -92, -92, -111],
            YacuteA: [-110, -110, -110, -110, -110, -74, -50, -120],
            YacuteAacute: [-110, -110, -110, -110, -110, -74, -50, -120],
            YacuteAbreve: [-110, -110, -110, -110, -110, -74, -50, -120],
            YacuteAcircumflex: [-110, -110, -110, -110, -110, -74, -50, -120],
            YacuteAdieresis: [-110, -110, -110, -110, -110, -74, -50, -120],
            YacuteAgrave: [-110, -110, -110, -110, -110, -74, -50, -120],
            YacuteAmacron: [-110, -110, -110, -110, -110, -74, -50, -120],
            YacuteAogonek: [-110, -110, -110, -110, -110, -74, -50, -120],
            YacuteAring: [-110, -110, -110, -110, -110, -74, -50, -120],
            YacuteAtilde: [-110, -110, -110, -110, -110, -74, -50, -120],
            YacuteO: [-70, -70, -85, -85, -35, -25, -15, -30],
            YacuteOacute: [-70, -70, -85, -85, -35, -25, -15, -30],
            YacuteOcircumflex: [-70, -70, -85, -85, -35, -25, -15, -30],
            YacuteOdieresis: [-70, -70, -85, -85, -35, -25, -15, -30],
            YacuteOgrave: [-70, -70, -85, -85, -35, -25, -15, -30],
            YacuteOhungarumlaut: [-70, -70, -85, -85, -35, -25, -15, -30],
            YacuteOmacron: [-70, -70, -85, -85, -35, -25, -15, -30],
            YacuteOslash: [-70, -70, -85, -85, -35, -25, -15, -30],
            YacuteOtilde: [-70, -70, -85, -85, -35, -25, -15, -30],
            Yacutea: [-90, -90, -140, -140, -85, -92, -92, -100],
            Yacuteaacute: [-90, -90, -140, -140, -85, -92, -92, -100],
            Yacuteabreve: [-90, -90, -70, -70, -85, -92, -92, -100],
            Yacuteacircumflex: [-90, -90, -140, -140, -85, -92, -92, -100],
            Yacuteadieresis: [-90, -90, -140, -140, -85, -92, -92, -60],
            Yacuteagrave: [-90, -90, -140, -140, -85, -92, -92, -60],
            Yacuteamacron: [-90, -90, -70, -70, -85, -92, -92, -60],
            Yacuteaogonek: [-90, -90, -140, -140, -85, -92, -92, -100],
            Yacutearing: [-90, -90, -140, -140, -85, -92, -92, -100],
            Yacuteatilde: [-90, -90, -70, -70, -85, -92, -92, -60],
            Yacutecolon: [-50, -50, -60, -60, -92, -92, -65, -92],
            Yacutecomma: [-100, -100, -140, -140, -92, -92, -92, -129],
            Yacutee: [-80, -80, -140, -140, -111, -111, -92, -100],
            Yacuteeacute: [-80, -80, -140, -140, -111, -111, -92, -100],
            Yacuteecaron: [-80, -80, -140, -140, -111, -111, -92, -100],
            Yacuteecircumflex: [-80, -80, -140, -140, -111, -71, -92, -100],
            Yacuteedieresis: [-80, -80, -140, -140, -71, -71, -52, -60],
            Yacuteedotaccent: [-80, -80, -140, -140, -111, -111, -92, -100],
            Yacuteegrave: [-80, -80, -140, -140, -71, -71, -52, -60],
            Yacuteemacron: [-80, -80, -70, -70, -71, -71, -52, -60],
            Yacuteeogonek: [-80, -80, -140, -140, -111, -111, -92, -100],
            Yacuteo: [-100, -100, -140, -140, -111, -111, -92, -110],
            Yacuteoacute: [-100, -100, -140, -140, -111, -111, -92, -110],
            Yacuteocircumflex: [-100, -100, -140, -140, -111, -111, -92, -110],
            Yacuteodieresis: [-100, -100, -140, -140, -111, -111, -92, -70],
            Yacuteograve: [-100, -100, -140, -140, -111, -111, -92, -70],
            Yacuteohungarumlaut: [
              -100, -100, -140, -140, -111, -111, -92, -110,
            ],
            Yacuteomacron: [-100, -100, -70, -70, -111, -111, -92, -70],
            Yacuteoslash: [-100, -100, -140, -140, -111, -111, -92, -110],
            Yacuteotilde: [-100, -100, -140, -140, -111, -111, -92, -70],
            Yacuteperiod: [-100, -100, -140, -140, -92, -74, -92, -129],
            Yacutesemicolon: [-50, -50, -60, -60, -92, -92, -65, -92],
            Yacuteu: [-100, -100, -110, -110, -92, -92, -92, -111],
            Yacuteuacute: [-100, -100, -110, -110, -92, -92, -92, -111],
            Yacuteucircumflex: [-100, -100, -110, -110, -92, -92, -92, -111],
            Yacuteudieresis: [-100, -100, -110, -110, -92, -92, -92, -71],
            Yacuteugrave: [-100, -100, -110, -110, -92, -92, -92, -71],
            Yacuteuhungarumlaut: [-100, -100, -110, -110, -92, -92, -92, -111],
            Yacuteumacron: [-100, -100, -110, -110, -92, -92, -92, -71],
            Yacuteuogonek: [-100, -100, -110, -110, -92, -92, -92, -111],
            Yacuteuring: [-100, -100, -110, -110, -92, -92, -92, -111],
            YdieresisA: [-110, -110, -110, -110, -110, -74, -50, -120],
            YdieresisAacute: [-110, -110, -110, -110, -110, -74, -50, -120],
            YdieresisAbreve: [-110, -110, -110, -110, -110, -74, -50, -120],
            YdieresisAcircumflex: [
              -110, -110, -110, -110, -110, -74, -50, -120,
            ],
            YdieresisAdieresis: [-110, -110, -110, -110, -110, -74, -50, -120],
            YdieresisAgrave: [-110, -110, -110, -110, -110, -74, -50, -120],
            YdieresisAmacron: [-110, -110, -110, -110, -110, -74, -50, -120],
            YdieresisAogonek: [-110, -110, -110, -110, -110, -74, -50, -120],
            YdieresisAring: [-110, -110, -110, -110, -110, -74, -50, -120],
            YdieresisAtilde: [-110, -110, -110, -110, -110, -74, -50, -120],
            YdieresisO: [-70, -70, -85, -85, -35, -25, -15, -30],
            YdieresisOacute: [-70, -70, -85, -85, -35, -25, -15, -30],
            YdieresisOcircumflex: [-70, -70, -85, -85, -35, -25, -15, -30],
            YdieresisOdieresis: [-70, -70, -85, -85, -35, -25, -15, -30],
            YdieresisOgrave: [-70, -70, -85, -85, -35, -25, -15, -30],
            YdieresisOhungarumlaut: [-70, -70, -85, -85, -35, -25, -15, -30],
            YdieresisOmacron: [-70, -70, -85, -85, -35, -25, -15, -30],
            YdieresisOslash: [-70, -70, -85, -85, -35, -25, -15, -30],
            YdieresisOtilde: [-70, -70, -85, -85, -35, -25, -15, -30],
            Ydieresisa: [-90, -90, -140, -140, -85, -92, -92, -100],
            Ydieresisaacute: [-90, -90, -140, -140, -85, -92, -92, -100],
            Ydieresisabreve: [-90, -90, -70, -70, -85, -92, -92, -100],
            Ydieresisacircumflex: [-90, -90, -140, -140, -85, -92, -92, -100],
            Ydieresisadieresis: [-90, -90, -140, -140, -85, -92, -92, -60],
            Ydieresisagrave: [-90, -90, -140, -140, -85, -92, -92, -60],
            Ydieresisamacron: [-90, -90, -70, -70, -85, -92, -92, -60],
            Ydieresisaogonek: [-90, -90, -140, -140, -85, -92, -92, -100],
            Ydieresisaring: [-90, -90, -140, -140, -85, -92, -92, -100],
            Ydieresisatilde: [-90, -90, -70, -70, -85, -92, -92, -100],
            Ydieresiscolon: [-50, -50, -60, -60, -92, -92, -65, -92],
            Ydieresiscomma: [-100, -100, -140, -140, -92, -92, -92, -129],
            Ydieresise: [-80, -80, -140, -140, -111, -111, -92, -100],
            Ydieresiseacute: [-80, -80, -140, -140, -111, -111, -92, -100],
            Ydieresisecaron: [-80, -80, -140, -140, -111, -111, -92, -100],
            Ydieresisecircumflex: [-80, -80, -140, -140, -111, -71, -92, -100],
            Ydieresisedieresis: [-80, -80, -140, -140, -71, -71, -52, -60],
            Ydieresisedotaccent: [-80, -80, -140, -140, -111, -111, -92, -100],
            Ydieresisegrave: [-80, -80, -140, -140, -71, -71, -52, -60],
            Ydieresisemacron: [-80, -80, -70, -70, -71, -71, -52, -60],
            Ydieresiseogonek: [-80, -80, -140, -140, -111, -111, -92, -100],
            Ydieresiso: [-100, -100, -140, -140, -111, -111, -92, -110],
            Ydieresisoacute: [-100, -100, -140, -140, -111, -111, -92, -110],
            Ydieresisocircumflex: [
              -100, -100, -140, -140, -111, -111, -92, -110,
            ],
            Ydieresisodieresis: [-100, -100, -140, -140, -111, -111, -92, -70],
            Ydieresisograve: [-100, -100, -140, -140, -111, -111, -92, -70],
            Ydieresisohungarumlaut: [
              -100, -100, -140, -140, -111, -111, -92, -110,
            ],
            Ydieresisomacron: [-100, -100, -140, -140, -111, -111, -92, -70],
            Ydieresisoslash: [-100, -100, -140, -140, -111, -111, -92, -110],
            Ydieresisotilde: [-100, -100, -140, -140, -111, -111, -92, -70],
            Ydieresisperiod: [-100, -100, -140, -140, -92, -74, -92, -129],
            Ydieresissemicolon: [-50, -50, -60, -60, -92, -92, -65, -92],
            Ydieresisu: [-100, -100, -110, -110, -92, -92, -92, -111],
            Ydieresisuacute: [-100, -100, -110, -110, -92, -92, -92, -111],
            Ydieresisucircumflex: [-100, -100, -110, -110, -92, -92, -92, -111],
            Ydieresisudieresis: [-100, -100, -110, -110, -92, -92, -92, -71],
            Ydieresisugrave: [-100, -100, -110, -110, -92, -92, -92, -71],
            Ydieresisuhungarumlaut: [
              -100, -100, -110, -110, -92, -92, -92, -111,
            ],
            Ydieresisumacron: [-100, -100, -110, -110, -92, -92, -92, -71],
            Ydieresisuogonek: [-100, -100, -110, -110, -92, -92, -92, -111],
            Ydieresisuring: [-100, -100, -110, -110, -92, -92, -92, -111],
            ag: [-10, -10, 0, 0, 0, 0, -10],
            agbreve: [-10, -10, 0, 0, 0, 0, -10],
            agcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
            av: [-15, -15, -20, -20, -25, 0, 0, -20],
            aw: [-15, -15, -20, -20, 0, 0, 0, -15],
            ay: [-20, -20, -30, -30],
            ayacute: [-20, -20, -30, -30],
            aydieresis: [-20, -20, -30, -30],
            aacuteg: [-10, -10, 0, 0, 0, 0, -10],
            aacutegbreve: [-10, -10, 0, 0, 0, 0, -10],
            aacutegcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
            aacutev: [-15, -15, -20, -20, -25, 0, 0, -20],
            aacutew: [-15, -15, -20, -20, 0, 0, 0, -15],
            aacutey: [-20, -20, -30, -30],
            aacuteyacute: [-20, -20, -30, -30],
            aacuteydieresis: [-20, -20, -30, -30],
            abreveg: [-10, -10, 0, 0, 0, 0, -10],
            abrevegbreve: [-10, -10, 0, 0, 0, 0, -10],
            abrevegcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
            abrevev: [-15, -15, -20, -20, -25, 0, 0, -20],
            abrevew: [-15, -15, -20, -20, 0, 0, 0, -15],
            abrevey: [-20, -20, -30, -30],
            abreveyacute: [-20, -20, -30, -30],
            abreveydieresis: [-20, -20, -30, -30],
            acircumflexg: [-10, -10, 0, 0, 0, 0, -10],
            acircumflexgbreve: [-10, -10, 0, 0, 0, 0, -10],
            acircumflexgcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
            acircumflexv: [-15, -15, -20, -20, -25, 0, 0, -20],
            acircumflexw: [-15, -15, -20, -20, 0, 0, 0, -15],
            acircumflexy: [-20, -20, -30, -30],
            acircumflexyacute: [-20, -20, -30, -30],
            acircumflexydieresis: [-20, -20, -30, -30],
            adieresisg: [-10, -10, 0, 0, 0, 0, -10],
            adieresisgbreve: [-10, -10, 0, 0, 0, 0, -10],
            adieresisgcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
            adieresisv: [-15, -15, -20, -20, -25, 0, 0, -20],
            adieresisw: [-15, -15, -20, -20, 0, 0, 0, -15],
            adieresisy: [-20, -20, -30, -30],
            adieresisyacute: [-20, -20, -30, -30],
            adieresisydieresis: [-20, -20, -30, -30],
            agraveg: [-10, -10, 0, 0, 0, 0, -10],
            agravegbreve: [-10, -10, 0, 0, 0, 0, -10],
            agravegcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
            agravev: [-15, -15, -20, -20, -25, 0, 0, -20],
            agravew: [-15, -15, -20, -20, 0, 0, 0, -15],
            agravey: [-20, -20, -30, -30],
            agraveyacute: [-20, -20, -30, -30],
            agraveydieresis: [-20, -20, -30, -30],
            amacrong: [-10, -10, 0, 0, 0, 0, -10],
            amacrongbreve: [-10, -10, 0, 0, 0, 0, -10],
            amacrongcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
            amacronv: [-15, -15, -20, -20, -25, 0, 0, -20],
            amacronw: [-15, -15, -20, -20, 0, 0, 0, -15],
            amacrony: [-20, -20, -30, -30],
            amacronyacute: [-20, -20, -30, -30],
            amacronydieresis: [-20, -20, -30, -30],
            aogonekg: [-10, -10, 0, 0, 0, 0, -10],
            aogonekgbreve: [-10, -10, 0, 0, 0, 0, -10],
            aogonekgcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
            aogonekv: [-15, -15, -20, -20, -25, 0, 0, -20],
            aogonekw: [-15, -15, -20, -20, 0, 0, 0, -15],
            aogoneky: [-20, -20, -30, -30],
            aogonekyacute: [-20, -20, -30, -30],
            aogonekydieresis: [-20, -20, -30, -30],
            aringg: [-10, -10, 0, 0, 0, 0, -10],
            aringgbreve: [-10, -10, 0, 0, 0, 0, -10],
            aringgcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
            aringv: [-15, -15, -20, -20, -25, 0, 0, -20],
            aringw: [-15, -15, -20, -20, 0, 0, 0, -15],
            aringy: [-20, -20, -30, -30],
            aringyacute: [-20, -20, -30, -30],
            aringydieresis: [-20, -20, -30, -30],
            atildeg: [-10, -10, 0, 0, 0, 0, -10],
            atildegbreve: [-10, -10, 0, 0, 0, 0, -10],
            atildegcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
            atildev: [-15, -15, -20, -20, -25, 0, 0, -20],
            atildew: [-15, -15, -20, -20, 0, 0, 0, -15],
            atildey: [-20, -20, -30, -30],
            atildeyacute: [-20, -20, -30, -30],
            atildeydieresis: [-20, -20, -30, -30],
            bl: [-10, -10, -20, -20],
            blacute: [-10, -10, -20, -20],
            blcommaaccent: [-10, -10, -20, -20],
            blslash: [-10, -10, -20, -20],
            bu: [-20, -20, -20, -20, -20, -20, -20, -20],
            buacute: [-20, -20, -20, -20, -20, -20, -20, -20],
            bucircumflex: [-20, -20, -20, -20, -20, -20, -20, -20],
            budieresis: [-20, -20, -20, -20, -20, -20, -20, -20],
            bugrave: [-20, -20, -20, -20, -20, -20, -20, -20],
            buhungarumlaut: [-20, -20, -20, -20, -20, -20, -20, -20],
            bumacron: [-20, -20, -20, -20, -20, -20, -20, -20],
            buogonek: [-20, -20, -20, -20, -20, -20, -20, -20],
            buring: [-20, -20, -20, -20, -20, -20, -20, -20],
            bv: [-20, -20, -20, -20, -15, 0, 0, -15],
            by: [-20, -20, -20, -20],
            byacute: [-20, -20, -20, -20],
            bydieresis: [-20, -20, -20, -20],
            ch: [-10, -10, 0, 0, 0, -10, -15],
            ck: [-20, -20, -20, -20, 0, -10, -20],
            ckcommaaccent: [-20, -20, -20, -20, 0, -10, -20],
            cl: [-20, -20],
            clacute: [-20, -20],
            clcommaaccent: [-20, -20],
            clslash: [-20, -20],
            cy: [-10, -10, 0, 0, 0, 0, 0, -15],
            cyacute: [-10, -10, 0, 0, 0, 0, 0, -15],
            cydieresis: [-10, -10, 0, 0, 0, 0, 0, -15],
            cacuteh: [-10, -10, 0, 0, 0, -10, -15],
            cacutek: [-20, -20, -20, -20, 0, -10, -20],
            cacutekcommaaccent: [-20, -20, -20, -20, 0, -10, -20],
            cacutel: [-20, -20],
            cacutelacute: [-20, -20],
            cacutelcommaaccent: [-20, -20],
            cacutelslash: [-20, -20],
            cacutey: [-10, -10, 0, 0, 0, 0, 0, -15],
            cacuteyacute: [-10, -10, 0, 0, 0, 0, 0, -15],
            cacuteydieresis: [-10, -10, 0, 0, 0, 0, 0, -15],
            ccaronh: [-10, -10, 0, 0, 0, -10, -15],
            ccaronk: [-20, -20, -20, -20, 0, -10, -20],
            ccaronkcommaaccent: [-20, -20, -20, -20, 0, -10, -20],
            ccaronl: [-20, -20],
            ccaronlacute: [-20, -20],
            ccaronlcommaaccent: [-20, -20],
            ccaronlslash: [-20, -20],
            ccarony: [-10, -10, 0, 0, 0, 0, 0, -15],
            ccaronyacute: [-10, -10, 0, 0, 0, 0, 0, -15],
            ccaronydieresis: [-10, -10, 0, 0, 0, 0, 0, -15],
            ccedillah: [-10, -10, 0, 0, 0, -10, -15],
            ccedillak: [-20, -20, -20, -20, 0, -10, -20],
            ccedillakcommaaccent: [-20, -20, -20, -20, 0, -10, -20],
            ccedillal: [-20, -20],
            ccedillalacute: [-20, -20],
            ccedillalcommaaccent: [-20, -20],
            ccedillalslash: [-20, -20],
            ccedillay: [-10, -10, 0, 0, 0, 0, 0, -15],
            ccedillayacute: [-10, -10, 0, 0, 0, 0, 0, -15],
            ccedillaydieresis: [-10, -10, 0, 0, 0, 0, 0, -15],
            colonspace: [-40, -40, -50, -50],
            commaquotedblright: [-120, -120, -100, -100, -45, -95, -140, -70],
            commaquoteright: [-120, -120, -100, -100, -55, -95, -140, -70],
            commaspace: [-40, -40],
            dd: [-10, -10],
            ddcroat: [-10, -10],
            dv: [-15, -15],
            dw: [-15, -15, 0, 0, -15],
            dy: [-15, -15],
            dyacute: [-15, -15],
            dydieresis: [-15, -15],
            dcroatd: [-10, -10],
            dcroatdcroat: [-10, -10],
            dcroatv: [-15, -15],
            dcroatw: [-15, -15, 0, 0, -15],
            dcroaty: [-15, -15],
            dcroatyacute: [-15, -15],
            dcroatydieresis: [-15, -15],
            ecomma: [10, 10, -15, -15, 0, 0, -10],
            eperiod: [20, 20, -15, -15, 0, 0, -15],
            ev: [-15, -15, -30, -30, -15, 0, -15, -25],
            ew: [-15, -15, -20, -20, 0, 0, -15, -25],
            ex: [-15, -15, -30, -30, 0, 0, -20, -15],
            ey: [-15, -15, -20, -20, 0, 0, -30, -15],
            eyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
            eydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
            eacutecomma: [10, 10, -15, -15, 0, 0, -10],
            eacuteperiod: [20, 20, -15, -15, 0, 0, -15],
            eacutev: [-15, -15, -30, -30, -15, 0, -15, -25],
            eacutew: [-15, -15, -20, -20, 0, 0, -15, -25],
            eacutex: [-15, -15, -30, -30, 0, 0, -20, -15],
            eacutey: [-15, -15, -20, -20, 0, 0, -30, -15],
            eacuteyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
            eacuteydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
            ecaroncomma: [10, 10, -15, -15, 0, 0, -10],
            ecaronperiod: [20, 20, -15, -15, 0, 0, -15],
            ecaronv: [-15, -15, -30, -30, -15, 0, -15, -25],
            ecaronw: [-15, -15, -20, -20, 0, 0, -15, -25],
            ecaronx: [-15, -15, -30, -30, 0, 0, -20, -15],
            ecarony: [-15, -15, -20, -20, 0, 0, -30, -15],
            ecaronyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
            ecaronydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
            ecircumflexcomma: [10, 10, -15, -15, 0, 0, -10],
            ecircumflexperiod: [20, 20, -15, -15, 0, 0, -15],
            ecircumflexv: [-15, -15, -30, -30, -15, 0, -15, -25],
            ecircumflexw: [-15, -15, -20, -20, 0, 0, -15, -25],
            ecircumflexx: [-15, -15, -30, -30, 0, 0, -20, -15],
            ecircumflexy: [-15, -15, -20, -20, 0, 0, -30, -15],
            ecircumflexyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
            ecircumflexydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
            edieresiscomma: [10, 10, -15, -15, 0, 0, -10],
            edieresisperiod: [20, 20, -15, -15, 0, 0, -15],
            edieresisv: [-15, -15, -30, -30, -15, 0, -15, -25],
            edieresisw: [-15, -15, -20, -20, 0, 0, -15, -25],
            edieresisx: [-15, -15, -30, -30, 0, 0, -20, -15],
            edieresisy: [-15, -15, -20, -20, 0, 0, -30, -15],
            edieresisyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
            edieresisydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
            edotaccentcomma: [10, 10, -15, -15, 0, 0, -10],
            edotaccentperiod: [20, 20, -15, -15, 0, 0, -15],
            edotaccentv: [-15, -15, -30, -30, -15, 0, -15, -25],
            edotaccentw: [-15, -15, -20, -20, 0, 0, -15, -25],
            edotaccentx: [-15, -15, -30, -30, 0, 0, -20, -15],
            edotaccenty: [-15, -15, -20, -20, 0, 0, -30, -15],
            edotaccentyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
            edotaccentydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
            egravecomma: [10, 10, -15, -15, 0, 0, -10],
            egraveperiod: [20, 20, -15, -15, 0, 0, -15],
            egravev: [-15, -15, -30, -30, -15, 0, -15, -25],
            egravew: [-15, -15, -20, -20, 0, 0, -15, -25],
            egravex: [-15, -15, -30, -30, 0, 0, -20, -15],
            egravey: [-15, -15, -20, -20, 0, 0, -30, -15],
            egraveyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
            egraveydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
            emacroncomma: [10, 10, -15, -15, 0, 0, -10],
            emacronperiod: [20, 20, -15, -15, 0, 0, -15],
            emacronv: [-15, -15, -30, -30, -15, 0, -15, -25],
            emacronw: [-15, -15, -20, -20, 0, 0, -15, -25],
            emacronx: [-15, -15, -30, -30, 0, 0, -20, -15],
            emacrony: [-15, -15, -20, -20, 0, 0, -30, -15],
            emacronyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
            emacronydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
            eogonekcomma: [10, 10, -15, -15, 0, 0, -10],
            eogonekperiod: [20, 20, -15, -15, 0, 0, -15],
            eogonekv: [-15, -15, -30, -30, -15, 0, -15, -25],
            eogonekw: [-15, -15, -20, -20, 0, 0, -15, -25],
            eogonekx: [-15, -15, -30, -30, 0, 0, -20, -15],
            eogoneky: [-15, -15, -20, -20, 0, 0, -30, -15],
            eogonekyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
            eogonekydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
            fcomma: [-10, -10, -30, -30, -15, -10, -10],
            fe: [-10, -10, -30, -30, 0, -10],
            feacute: [-10, -10, -30, -30, 0, -10],
            fecaron: [-10, -10, -30, -30],
            fecircumflex: [-10, -10, -30, -30],
            fedieresis: [-10, -10, -30, -30],
            fedotaccent: [-10, -10, -30, -30, 0, -10],
            fegrave: [-10, -10, -30, -30],
            femacron: [-10, -10, -30, -30],
            feogonek: [-10, -10, -30, -30, 0, -10],
            fo: [-20, -20, -30, -30, -25, -10],
            foacute: [-20, -20, -30, -30, -25, -10],
            focircumflex: [-20, -20, -30, -30, -25, -10],
            fodieresis: [-20, -20, -30, -30, -25],
            fograve: [-20, -20, -30, -30, -25, -10],
            fohungarumlaut: [-20, -20, -30, -30, -25, -10],
            fomacron: [-20, -20, -30, -30, -25],
            foslash: [-20, -20, -30, -30, -25, -10],
            fotilde: [-20, -20, -30, -30, -25, -10],
            fperiod: [-10, -10, -30, -30, -15, -10, -15],
            fquotedblright: [30, 30, 60, 60, 50],
            fquoteright: [30, 30, 50, 50, 55, 55, 92, 55],
            ge: [10, 10, 0, 0, 0, 0, -10],
            geacute: [10, 10, 0, 0, 0, 0, -10],
            gecaron: [10, 10, 0, 0, 0, 0, -10],
            gecircumflex: [10, 10, 0, 0, 0, 0, -10],
            gedieresis: [10, 10, 0, 0, 0, 0, -10],
            gedotaccent: [10, 10, 0, 0, 0, 0, -10],
            gegrave: [10, 10, 0, 0, 0, 0, -10],
            gemacron: [10, 10, 0, 0, 0, 0, -10],
            geogonek: [10, 10, 0, 0, 0, 0, -10],
            gg: [-10, -10, 0, 0, 0, 0, -10],
            ggbreve: [-10, -10, 0, 0, 0, 0, -10],
            ggcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
            gbrevee: [10, 10, 0, 0, 0, 0, -10],
            gbreveeacute: [10, 10, 0, 0, 0, 0, -10],
            gbreveecaron: [10, 10, 0, 0, 0, 0, -10],
            gbreveecircumflex: [10, 10, 0, 0, 0, 0, -10],
            gbreveedieresis: [10, 10, 0, 0, 0, 0, -10],
            gbreveedotaccent: [10, 10, 0, 0, 0, 0, -10],
            gbreveegrave: [10, 10, 0, 0, 0, 0, -10],
            gbreveemacron: [10, 10, 0, 0, 0, 0, -10],
            gbreveeogonek: [10, 10, 0, 0, 0, 0, -10],
            gbreveg: [-10, -10, 0, 0, 0, 0, -10],
            gbrevegbreve: [-10, -10, 0, 0, 0, 0, -10],
            gbrevegcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
            gcommaaccente: [10, 10, 0, 0, 0, 0, -10],
            gcommaaccenteacute: [10, 10, 0, 0, 0, 0, -10],
            gcommaaccentecaron: [10, 10, 0, 0, 0, 0, -10],
            gcommaaccentecircumflex: [10, 10, 0, 0, 0, 0, -10],
            gcommaaccentedieresis: [10, 10, 0, 0, 0, 0, -10],
            gcommaaccentedotaccent: [10, 10, 0, 0, 0, 0, -10],
            gcommaaccentegrave: [10, 10, 0, 0, 0, 0, -10],
            gcommaaccentemacron: [10, 10, 0, 0, 0, 0, -10],
            gcommaaccenteogonek: [10, 10, 0, 0, 0, 0, -10],
            gcommaaccentg: [-10, -10, 0, 0, 0, 0, -10],
            gcommaaccentgbreve: [-10, -10, 0, 0, 0, 0, -10],
            gcommaaccentgcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
            hy: [-20, -20, -30, -30, -15, 0, 0, -5],
            hyacute: [-20, -20, -30, -30, -15, 0, 0, -5],
            hydieresis: [-20, -20, -30, -30, -15, 0, 0, -5],
            ko: [-15, -15, -20, -20, -15, -10, -10, -10],
            koacute: [-15, -15, -20, -20, -15, -10, -10, -10],
            kocircumflex: [-15, -15, -20, -20, -15, -10, -10, -10],
            kodieresis: [-15, -15, -20, -20, -15, -10, -10, -10],
            kograve: [-15, -15, -20, -20, -15, -10, -10, -10],
            kohungarumlaut: [-15, -15, -20, -20, -15, -10, -10, -10],
            komacron: [-15, -15, -20, -20, -15, -10, -10, -10],
            koslash: [-15, -15, -20, -20, -15, -10, -10, -10],
            kotilde: [-15, -15, -20, -20, -15, -10, -10, -10],
            kcommaaccento: [-15, -15, -20, -20, -15, -10, -10, -10],
            kcommaaccentoacute: [-15, -15, -20, -20, -15, -10, -10, -10],
            kcommaaccentocircumflex: [-15, -15, -20, -20, -15, -10, -10, -10],
            kcommaaccentodieresis: [-15, -15, -20, -20, -15, -10, -10, -10],
            kcommaaccentograve: [-15, -15, -20, -20, -15, -10, -10, -10],
            kcommaaccentohungarumlaut: [-15, -15, -20, -20, -15, -10, -10, -10],
            kcommaaccentomacron: [-15, -15, -20, -20, -15, -10, -10, -10],
            kcommaaccentoslash: [-15, -15, -20, -20, -15, -10, -10, -10],
            kcommaaccentotilde: [-15, -15, -20, -20, -15, -10, -10, -10],
            lw: [-15, -15, 0, 0, 0, 0, 0, -10],
            ly: [-15, -15],
            lyacute: [-15, -15],
            lydieresis: [-15, -15],
            lacutew: [-15, -15, 0, 0, 0, 0, 0, -10],
            lacutey: [-15, -15],
            lacuteyacute: [-15, -15],
            lacuteydieresis: [-15, -15],
            lcommaaccentw: [-15, -15, 0, 0, 0, 0, 0, -10],
            lcommaaccenty: [-15, -15],
            lcommaaccentyacute: [-15, -15],
            lcommaaccentydieresis: [-15, -15],
            lslashw: [-15, -15, 0, 0, 0, 0, 0, -10],
            lslashy: [-15, -15],
            lslashyacute: [-15, -15],
            lslashydieresis: [-15, -15],
            mu: [-20, -20, -10, -10],
            muacute: [-20, -20, -10, -10],
            mucircumflex: [-20, -20, -10, -10],
            mudieresis: [-20, -20, -10, -10],
            mugrave: [-20, -20, -10, -10],
            muhungarumlaut: [-20, -20, -10, -10],
            mumacron: [-20, -20, -10, -10],
            muogonek: [-20, -20, -10, -10],
            muring: [-20, -20, -10, -10],
            my: [-30, -30, -15, -15],
            myacute: [-30, -30, -15, -15],
            mydieresis: [-30, -30, -15, -15],
            nu: [-10, -10, -10, -10],
            nuacute: [-10, -10, -10, -10],
            nucircumflex: [-10, -10, -10, -10],
            nudieresis: [-10, -10, -10, -10],
            nugrave: [-10, -10, -10, -10],
            nuhungarumlaut: [-10, -10, -10, -10],
            numacron: [-10, -10, -10, -10],
            nuogonek: [-10, -10, -10, -10],
            nuring: [-10, -10, -10, -10],
            nv: [-40, -40, -20, -20, -40, -40, -40, -40],
            ny: [-20, -20, -15, -15, 0, 0, 0, -15],
            nyacute: [-20, -20, -15, -15, 0, 0, 0, -15],
            nydieresis: [-20, -20, -15, -15, 0, 0, 0, -15],
            nacuteu: [-10, -10, -10, -10],
            nacuteuacute: [-10, -10, -10, -10],
            nacuteucircumflex: [-10, -10, -10, -10],
            nacuteudieresis: [-10, -10, -10, -10],
            nacuteugrave: [-10, -10, -10, -10],
            nacuteuhungarumlaut: [-10, -10, -10, -10],
            nacuteumacron: [-10, -10, -10, -10],
            nacuteuogonek: [-10, -10, -10, -10],
            nacuteuring: [-10, -10, -10, -10],
            nacutev: [-40, -40, -20, -20, -40, -40, -40, -40],
            nacutey: [-20, -20, -15, -15, 0, 0, 0, -15],
            nacuteyacute: [-20, -20, -15, -15, 0, 0, 0, -15],
            nacuteydieresis: [-20, -20, -15, -15, 0, 0, 0, -15],
            ncaronu: [-10, -10, -10, -10],
            ncaronuacute: [-10, -10, -10, -10],
            ncaronucircumflex: [-10, -10, -10, -10],
            ncaronudieresis: [-10, -10, -10, -10],
            ncaronugrave: [-10, -10, -10, -10],
            ncaronuhungarumlaut: [-10, -10, -10, -10],
            ncaronumacron: [-10, -10, -10, -10],
            ncaronuogonek: [-10, -10, -10, -10],
            ncaronuring: [-10, -10, -10, -10],
            ncaronv: [-40, -40, -20, -20, -40, -40, -40, -40],
            ncarony: [-20, -20, -15, -15, 0, 0, 0, -15],
            ncaronyacute: [-20, -20, -15, -15, 0, 0, 0, -15],
            ncaronydieresis: [-20, -20, -15, -15, 0, 0, 0, -15],
            ncommaaccentu: [-10, -10, -10, -10],
            ncommaaccentuacute: [-10, -10, -10, -10],
            ncommaaccentucircumflex: [-10, -10, -10, -10],
            ncommaaccentudieresis: [-10, -10, -10, -10],
            ncommaaccentugrave: [-10, -10, -10, -10],
            ncommaaccentuhungarumlaut: [-10, -10, -10, -10],
            ncommaaccentumacron: [-10, -10, -10, -10],
            ncommaaccentuogonek: [-10, -10, -10, -10],
            ncommaaccenturing: [-10, -10, -10, -10],
            ncommaaccentv: [-40, -40, -20, -20, -40, -40, -40, -40],
            ncommaaccenty: [-20, -20, -15, -15, 0, 0, 0, -15],
            ncommaaccentyacute: [-20, -20, -15, -15, 0, 0, 0, -15],
            ncommaaccentydieresis: [-20, -20, -15, -15, 0, 0, 0, -15],
            ntildeu: [-10, -10, -10, -10],
            ntildeuacute: [-10, -10, -10, -10],
            ntildeucircumflex: [-10, -10, -10, -10],
            ntildeudieresis: [-10, -10, -10, -10],
            ntildeugrave: [-10, -10, -10, -10],
            ntildeuhungarumlaut: [-10, -10, -10, -10],
            ntildeumacron: [-10, -10, -10, -10],
            ntildeuogonek: [-10, -10, -10, -10],
            ntildeuring: [-10, -10, -10, -10],
            ntildev: [-40, -40, -20, -20, -40, -40, -40, -40],
            ntildey: [-20, -20, -15, -15, 0, 0, 0, -15],
            ntildeyacute: [-20, -20, -15, -15, 0, 0, 0, -15],
            ntildeydieresis: [-20, -20, -15, -15, 0, 0, 0, -15],
            ov: [-20, -20, -15, -15, -10, -15, -10, -15],
            ow: [-15, -15, -15, -15, -10, -25, 0, -25],
            ox: [-30, -30, -30, -30, 0, -10],
            oy: [-20, -20, -30, -30, 0, -10, 0, -10],
            oyacute: [-20, -20, -30, -30, 0, -10, 0, -10],
            oydieresis: [-20, -20, -30, -30, 0, -10, 0, -10],
            oacutev: [-20, -20, -15, -15, -10, -15, -10, -15],
            oacutew: [-15, -15, -15, -15, -10, -25, 0, -25],
            oacutex: [-30, -30, -30, -30, 0, -10],
            oacutey: [-20, -20, -30, -30, 0, -10, 0, -10],
            oacuteyacute: [-20, -20, -30, -30, 0, -10, 0, -10],
            oacuteydieresis: [-20, -20, -30, -30, 0, -10, 0, -10],
            ocircumflexv: [-20, -20, -15, -15, -10, -15, -10, -15],
            ocircumflexw: [-15, -15, -15, -15, -10, -25, 0, -25],
            ocircumflexx: [-30, -30, -30, -30, 0, -10],
            ocircumflexy: [-20, -20, -30, -30, 0, -10, 0, -10],
            ocircumflexyacute: [-20, -20, -30, -30, 0, -10, 0, -10],
            ocircumflexydieresis: [-20, -20, -30, -30, 0, -10, 0, -10],
            odieresisv: [-20, -20, -15, -15, -10, -15, -10, -15],
            odieresisw: [-15, -15, -15, -15, -10, -25, 0, -25],
            odieresisx: [-30, -30, -30, -30, 0, -10],
            odieresisy: [-20, -20, -30, -30, 0, -10, 0, -10],
            odieresisyacute: [-20, -20, -30, -30, 0, -10, 0, -10],
            odieresisydieresis: [-20, -20, -30, -30, 0, -10, 0, -10],
            ogravev: [-20, -20, -15, -15, -10, -15, -10, -15],
            ogravew: [-15, -15, -15, -15, -10, -25, 0, -25],
            ogravex: [-30, -30, -30, -30, 0, -10],
            ogravey: [-20, -20, -30, -30, 0, -10, 0, -10],
            ograveyacute: [-20, -20, -30, -30, 0, -10, 0, -10],
            ograveydieresis: [-20, -20, -30, -30, 0, -10, 0, -10],
            ohungarumlautv: [-20, -20, -15, -15, -10, -15, -10, -15],
            ohungarumlautw: [-15, -15, -15, -15, -10, -25, 0, -25],
            ohungarumlautx: [-30, -30, -30, -30, 0, -10],
            ohungarumlauty: [-20, -20, -30, -30, 0, -10, 0, -10],
            ohungarumlautyacute: [-20, -20, -30, -30, 0, -10, 0, -10],
            ohungarumlautydieresis: [-20, -20, -30, -30, 0, -10, 0, -10],
            omacronv: [-20, -20, -15, -15, -10, -15, -10, -15],
            omacronw: [-15, -15, -15, -15, -10, -25, 0, -25],
            omacronx: [-30, -30, -30, -30, 0, -10],
            omacrony: [-20, -20, -30, -30, 0, -10, 0, -10],
            omacronyacute: [-20, -20, -30, -30, 0, -10, 0, -10],
            omacronydieresis: [-20, -20, -30, -30, 0, -10, 0, -10],
            oslashv: [-20, -20, -70, -70, -10, -15, -10, -15],
            oslashw: [-15, -15, -70, -70, -10, -25, 0, -25],
            oslashx: [-30, -30, -85, -85, 0, -10],
            oslashy: [-20, -20, -70, -70, 0, -10, 0, -10],
            oslashyacute: [-20, -20, -70, -70, 0, -10, 0, -10],
            oslashydieresis: [-20, -20, -70, -70, 0, -10, 0, -10],
            otildev: [-20, -20, -15, -15, -10, -15, -10, -15],
            otildew: [-15, -15, -15, -15, -10, -25, 0, -25],
            otildex: [-30, -30, -30, -30, 0, -10],
            otildey: [-20, -20, -30, -30, 0, -10, 0, -10],
            otildeyacute: [-20, -20, -30, -30, 0, -10, 0, -10],
            otildeydieresis: [-20, -20, -30, -30, 0, -10, 0, -10],
            py: [-15, -15, -30, -30, 0, 0, 0, -10],
            pyacute: [-15, -15, -30, -30, 0, 0, 0, -10],
            pydieresis: [-15, -15, -30, -30, 0, 0, 0, -10],
            periodquotedblright: [-120, -120, -100, -100, -55, -95, -140, -70],
            periodquoteright: [-120, -120, -100, -100, -55, -95, -140, -70],
            periodspace: [-40, -40, -60, -60],
            quotedblrightspace: [-80, -80, -40, -40],
            quoteleftquoteleft: [-46, -46, -57, -57, -63, -74, -111, -74],
            quoterightd: [-80, -80, -50, -50, -20, -15, -25, -50],
            quoterightdcroat: [-80, -80, -50, -50, -20, -15, -25, -50],
            quoterightl: [-20, -20, 0, 0, 0, 0, 0, -10],
            quoterightlacute: [-20, -20, 0, 0, 0, 0, 0, -10],
            quoterightlcommaaccent: [-20, -20, 0, 0, 0, 0, 0, -10],
            quoterightlslash: [-20, -20, 0, 0, 0, 0, 0, -10],
            quoterightquoteright: [-46, -46, -57, -57, -63, -74, -111, -74],
            quoterightr: [-40, -40, -50, -50, -20, -15, -25, -50],
            quoterightracute: [-40, -40, -50, -50, -20, -15, -25, -50],
            quoterightrcaron: [-40, -40, -50, -50, -20, -15, -25, -50],
            quoterightrcommaaccent: [-40, -40, -50, -50, -20, -15, -25, -50],
            quoterights: [-60, -60, -50, -50, -37, -74, -40, -55],
            quoterightsacute: [-60, -60, -50, -50, -37, -74, -40, -55],
            quoterightscaron: [-60, -60, -50, -50, -37, -74, -40, -55],
            quoterightscedilla: [-60, -60, -50, -50, -37, -74, -40, -55],
            quoterightscommaaccent: [-60, -60, -50, -50, -37, -74, -40, -55],
            quoterightspace: [-80, -80, -70, -70, -74, -74, -111, -74],
            quoterightv: [-20, -20, 0, 0, -20, -15, -10, -50],
            rc: [-20, -20, 0, 0, -18, 0, -37],
            rcacute: [-20, -20, 0, 0, -18, 0, -37],
            rccaron: [-20, -20, 0, 0, -18, 0, -37],
            rccedilla: [-20, -20, 0, 0, -18, 0, -37],
            rcomma: [-60, -60, -50, -50, -92, -65, -111, -40],
            rd: [-20, -20, 0, 0, 0, 0, -37],
            rdcroat: [-20, -20, 0, 0, 0, 0, -37],
            rg: [-15, -15, 0, 0, -10, 0, -37, -18],
            rgbreve: [-15, -15, 0, 0, -10, 0, -37, -18],
            rgcommaaccent: [-15, -15, 0, 0, -10, 0, -37, -18],
            rhyphen: [-20, -20, 0, 0, -37, 0, -20, -20],
            ro: [-20, -20, 0, 0, -18, 0, -45],
            roacute: [-20, -20, 0, 0, -18, 0, -45],
            rocircumflex: [-20, -20, 0, 0, -18, 0, -45],
            rodieresis: [-20, -20, 0, 0, -18, 0, -45],
            rograve: [-20, -20, 0, 0, -18, 0, -45],
            rohungarumlaut: [-20, -20, 0, 0, -18, 0, -45],
            romacron: [-20, -20, 0, 0, -18, 0, -45],
            roslash: [-20, -20, 0, 0, -18, 0, -45],
            rotilde: [-20, -20, 0, 0, -18, 0, -45],
            rperiod: [-60, -60, -50, -50, -100, -65, -111, -55],
            rq: [-20, -20, 0, 0, -18, 0, -37],
            rs: [-15, -15, 0, 0, 0, 0, -10],
            rsacute: [-15, -15, 0, 0, 0, 0, -10],
            rscaron: [-15, -15, 0, 0, 0, 0, -10],
            rscedilla: [-15, -15, 0, 0, 0, 0, -10],
            rscommaaccent: [-15, -15, 0, 0, 0, 0, -10],
            rt: [20, 20, 40, 40],
            rtcommaaccent: [20, 20, 40, 40],
            rv: [10, 10, 30, 30, -10],
            ry: [10, 10, 30, 30],
            ryacute: [10, 10, 30, 30],
            rydieresis: [10, 10, 30, 30],
            racutec: [-20, -20, 0, 0, -18, 0, -37],
            racutecacute: [-20, -20, 0, 0, -18, 0, -37],
            racuteccaron: [-20, -20, 0, 0, -18, 0, -37],
            racuteccedilla: [-20, -20, 0, 0, -18, 0, -37],
            racutecomma: [-60, -60, -50, -50, -92, -65, -111, -40],
            racuted: [-20, -20, 0, 0, 0, 0, -37],
            racutedcroat: [-20, -20, 0, 0, 0, 0, -37],
            racuteg: [-15, -15, 0, 0, -10, 0, -37, -18],
            racutegbreve: [-15, -15, 0, 0, -10, 0, -37, -18],
            racutegcommaaccent: [-15, -15, 0, 0, -10, 0, -37, -18],
            racutehyphen: [-20, -20, 0, 0, -37, 0, -20, -20],
            racuteo: [-20, -20, 0, 0, -18, 0, -45],
            racuteoacute: [-20, -20, 0, 0, -18, 0, -45],
            racuteocircumflex: [-20, -20, 0, 0, -18, 0, -45],
            racuteodieresis: [-20, -20, 0, 0, -18, 0, -45],
            racuteograve: [-20, -20, 0, 0, -18, 0, -45],
            racuteohungarumlaut: [-20, -20, 0, 0, -18, 0, -45],
            racuteomacron: [-20, -20, 0, 0, -18, 0, -45],
            racuteoslash: [-20, -20, 0, 0, -18, 0, -45],
            racuteotilde: [-20, -20, 0, 0, -18, 0, -45],
            racuteperiod: [-60, -60, -50, -50, -100, -65, -111, -55],
            racuteq: [-20, -20, 0, 0, -18, 0, -37],
            racutes: [-15, -15, 0, 0, 0, 0, -10],
            racutesacute: [-15, -15, 0, 0, 0, 0, -10],
            racutescaron: [-15, -15, 0, 0, 0, 0, -10],
            racutescedilla: [-15, -15, 0, 0, 0, 0, -10],
            racutescommaaccent: [-15, -15, 0, 0, 0, 0, -10],
            racutet: [20, 20, 40, 40],
            racutetcommaaccent: [20, 20, 40, 40],
            racutev: [10, 10, 30, 30, -10],
            racutey: [10, 10, 30, 30],
            racuteyacute: [10, 10, 30, 30],
            racuteydieresis: [10, 10, 30, 30],
            rcaronc: [-20, -20, 0, 0, -18, 0, -37],
            rcaroncacute: [-20, -20, 0, 0, -18, 0, -37],
            rcaronccaron: [-20, -20, 0, 0, -18, 0, -37],
            rcaronccedilla: [-20, -20, 0, 0, -18, 0, -37],
            rcaroncomma: [-60, -60, -50, -50, -92, -65, -111, -40],
            rcarond: [-20, -20, 0, 0, 0, 0, -37],
            rcarondcroat: [-20, -20, 0, 0, 0, 0, -37],
            rcarong: [-15, -15, 0, 0, -10, 0, -37, -18],
            rcarongbreve: [-15, -15, 0, 0, -10, 0, -37, -18],
            rcarongcommaaccent: [-15, -15, 0, 0, -10, 0, -37, -18],
            rcaronhyphen: [-20, -20, 0, 0, -37, 0, -20, -20],
            rcarono: [-20, -20, 0, 0, -18, 0, -45],
            rcaronoacute: [-20, -20, 0, 0, -18, 0, -45],
            rcaronocircumflex: [-20, -20, 0, 0, -18, 0, -45],
            rcaronodieresis: [-20, -20, 0, 0, -18, 0, -45],
            rcaronograve: [-20, -20, 0, 0, -18, 0, -45],
            rcaronohungarumlaut: [-20, -20, 0, 0, -18, 0, -45],
            rcaronomacron: [-20, -20, 0, 0, -18, 0, -45],
            rcaronoslash: [-20, -20, 0, 0, -18, 0, -45],
            rcaronotilde: [-20, -20, 0, 0, -18, 0, -45],
            rcaronperiod: [-60, -60, -50, -50, -100, -65, -111, -55],
            rcaronq: [-20, -20, 0, 0, -18, 0, -37],
            rcarons: [-15, -15, 0, 0, 0, 0, -10],
            rcaronsacute: [-15, -15, 0, 0, 0, 0, -10],
            rcaronscaron: [-15, -15, 0, 0, 0, 0, -10],
            rcaronscedilla: [-15, -15, 0, 0, 0, 0, -10],
            rcaronscommaaccent: [-15, -15, 0, 0, 0, 0, -10],
            rcaront: [20, 20, 40, 40],
            rcarontcommaaccent: [20, 20, 40, 40],
            rcaronv: [10, 10, 30, 30, -10],
            rcarony: [10, 10, 30, 30],
            rcaronyacute: [10, 10, 30, 30],
            rcaronydieresis: [10, 10, 30, 30],
            rcommaaccentc: [-20, -20, 0, 0, -18, 0, -37],
            rcommaaccentcacute: [-20, -20, 0, 0, -18, 0, -37],
            rcommaaccentccaron: [-20, -20, 0, 0, -18, 0, -37],
            rcommaaccentccedilla: [-20, -20, 0, 0, -18, 0, -37],
            rcommaaccentcomma: [-60, -60, -50, -50, -92, -65, -111, -40],
            rcommaaccentd: [-20, -20, 0, 0, 0, 0, -37],
            rcommaaccentdcroat: [-20, -20, 0, 0, 0, 0, -37],
            rcommaaccentg: [-15, -15, 0, 0, -10, 0, -37, -18],
            rcommaaccentgbreve: [-15, -15, 0, 0, -10, 0, -37, -18],
            rcommaaccentgcommaaccent: [-15, -15, 0, 0, -10, 0, -37, -18],
            rcommaaccenthyphen: [-20, -20, 0, 0, -37, 0, -20, -20],
            rcommaaccento: [-20, -20, 0, 0, -18, 0, -45],
            rcommaaccentoacute: [-20, -20, 0, 0, -18, 0, -45],
            rcommaaccentocircumflex: [-20, -20, 0, 0, -18, 0, -45],
            rcommaaccentodieresis: [-20, -20, 0, 0, -18, 0, -45],
            rcommaaccentograve: [-20, -20, 0, 0, -18, 0, -45],
            rcommaaccentohungarumlaut: [-20, -20, 0, 0, -18, 0, -45],
            rcommaaccentomacron: [-20, -20, 0, 0, -18, 0, -45],
            rcommaaccentoslash: [-20, -20, 0, 0, -18, 0, -45],
            rcommaaccentotilde: [-20, -20, 0, 0, -18, 0, -45],
            rcommaaccentperiod: [-60, -60, -50, -50, -100, -65, -111, -55],
            rcommaaccentq: [-20, -20, 0, 0, -18, 0, -37],
            rcommaaccents: [-15, -15, 0, 0, 0, 0, -10],
            rcommaaccentsacute: [-15, -15, 0, 0, 0, 0, -10],
            rcommaaccentscaron: [-15, -15, 0, 0, 0, 0, -10],
            rcommaaccentscedilla: [-15, -15, 0, 0, 0, 0, -10],
            rcommaaccentscommaaccent: [-15, -15, 0, 0, 0, 0, -10],
            rcommaaccentt: [20, 20, 40, 40],
            rcommaaccenttcommaaccent: [20, 20, 40, 40],
            rcommaaccentv: [10, 10, 30, 30, -10],
            rcommaaccenty: [10, 10, 30, 30],
            rcommaaccentyacute: [10, 10, 30, 30],
            rcommaaccentydieresis: [10, 10, 30, 30],
            sw: [-15, -15, -30, -30],
            sacutew: [-15, -15, -30, -30],
            scaronw: [-15, -15, -30, -30],
            scedillaw: [-15, -15, -30, -30],
            scommaaccentw: [-15, -15, -30, -30],
            semicolonspace: [-40, -40, -50, -50],
            spaceT: [-100, -100, -50, -50, -30, 0, -18, -18],
            spaceTcaron: [-100, -100, -50, -50, -30, 0, -18, -18],
            spaceTcommaaccent: [-100, -100, -50, -50, -30, 0, -18, -18],
            spaceV: [-80, -80, -50, -50, -45, -70, -35, -50],
            spaceW: [-80, -80, -40, -40, -30, -70, -40, -30],
            spaceY: [-120, -120, -90, -90, -55, -70, -75, -90],
            spaceYacute: [-120, -120, -90, -90, -55, -70, -75, -90],
            spaceYdieresis: [-120, -120, -90, -90, -55, -70, -75, -90],
            spacequotedblleft: [-80, -80, -30, -30],
            spacequoteleft: [-60, -60, -60, -60],
            va: [-20, -20, -25, -25, -10, 0, 0, -25],
            vaacute: [-20, -20, -25, -25, -10, 0, 0, -25],
            vabreve: [-20, -20, -25, -25, -10, 0, 0, -25],
            vacircumflex: [-20, -20, -25, -25, -10, 0, 0, -25],
            vadieresis: [-20, -20, -25, -25, -10, 0, 0, -25],
            vagrave: [-20, -20, -25, -25, -10, 0, 0, -25],
            vamacron: [-20, -20, -25, -25, -10, 0, 0, -25],
            vaogonek: [-20, -20, -25, -25, -10, 0, 0, -25],
            varing: [-20, -20, -25, -25, -10, 0, 0, -25],
            vatilde: [-20, -20, -25, -25, -10, 0, 0, -25],
            vcomma: [-80, -80, -80, -80, -55, -37, -74, -65],
            vo: [-30, -30, -25, -25, -10, -15, 0, -20],
            voacute: [-30, -30, -25, -25, -10, -15, 0, -20],
            vocircumflex: [-30, -30, -25, -25, -10, -15, 0, -20],
            vodieresis: [-30, -30, -25, -25, -10, -15, 0, -20],
            vograve: [-30, -30, -25, -25, -10, -15, 0, -20],
            vohungarumlaut: [-30, -30, -25, -25, -10, -15, 0, -20],
            vomacron: [-30, -30, -25, -25, -10, -15, 0, -20],
            voslash: [-30, -30, -25, -25, -10, -15, 0, -20],
            votilde: [-30, -30, -25, -25, -10, -15, 0, -20],
            vperiod: [-80, -80, -80, -80, -70, -37, -74, -65],
            wcomma: [-40, -40, -60, -60, -55, -37, -74, -65],
            wo: [-20, -20, -10, -10, -10, -15, 0, -10],
            woacute: [-20, -20, -10, -10, -10, -15, 0, -10],
            wocircumflex: [-20, -20, -10, -10, -10, -15, 0, -10],
            wodieresis: [-20, -20, -10, -10, -10, -15, 0, -10],
            wograve: [-20, -20, -10, -10, -10, -15, 0, -10],
            wohungarumlaut: [-20, -20, -10, -10, -10, -15, 0, -10],
            womacron: [-20, -20, -10, -10, -10, -15, 0, -10],
            woslash: [-20, -20, -10, -10, -10, -15, 0, -10],
            wotilde: [-20, -20, -10, -10, -10, -15, 0, -10],
            wperiod: [-40, -40, -60, -60, -70, -37, -74, -65],
            xe: [-10, -10, -30, -30, 0, -10, 0, -15],
            xeacute: [-10, -10, -30, -30, 0, -10, 0, -15],
            xecaron: [-10, -10, -30, -30, 0, -10, 0, -15],
            xecircumflex: [-10, -10, -30, -30, 0, -10, 0, -15],
            xedieresis: [-10, -10, -30, -30, 0, -10, 0, -15],
            xedotaccent: [-10, -10, -30, -30, 0, -10, 0, -15],
            xegrave: [-10, -10, -30, -30, 0, -10, 0, -15],
            xemacron: [-10, -10, -30, -30, 0, -10, 0, -15],
            xeogonek: [-10, -10, -30, -30, 0, -10, 0, -15],
            ya: [-30, -30, -20, -20],
            yaacute: [-30, -30, -20, -20],
            yabreve: [-30, -30, -20, -20],
            yacircumflex: [-30, -30, -20, -20],
            yadieresis: [-30, -30, -20, -20],
            yagrave: [-30, -30, -20, -20],
            yamacron: [-30, -30, -20, -20],
            yaogonek: [-30, -30, -20, -20],
            yaring: [-30, -30, -20, -20],
            yatilde: [-30, -30, -20, -20],
            ycomma: [-80, -80, -100, -100, -55, -37, -55, -65],
            ye: [-10, -10, -20, -20, -10],
            yeacute: [-10, -10, -20, -20, -10],
            yecaron: [-10, -10, -20, -20, -10],
            yecircumflex: [-10, -10, -20, -20, -10],
            yedieresis: [-10, -10, -20, -20, -10],
            yedotaccent: [-10, -10, -20, -20, -10],
            yegrave: [-10, -10, -20, -20, -10],
            yemacron: [-10, -10, -20, -20, -10],
            yeogonek: [-10, -10, -20, -20, -10],
            yo: [-25, -25, -20, -20, -25],
            yoacute: [-25, -25, -20, -20, -25],
            yocircumflex: [-25, -25, -20, -20, -25],
            yodieresis: [-25, -25, -20, -20, -25],
            yograve: [-25, -25, -20, -20, -25],
            yohungarumlaut: [-25, -25, -20, -20, -25],
            yomacron: [-25, -25, -20, -20, -25],
            yoslash: [-25, -25, -20, -20, -25],
            yotilde: [-25, -25, -20, -20, -25],
            yperiod: [-80, -80, -100, -100, -70, -37, -55, -65],
            yacutea: [-30, -30, -20, -20],
            yacuteaacute: [-30, -30, -20, -20],
            yacuteabreve: [-30, -30, -20, -20],
            yacuteacircumflex: [-30, -30, -20, -20],
            yacuteadieresis: [-30, -30, -20, -20],
            yacuteagrave: [-30, -30, -20, -20],
            yacuteamacron: [-30, -30, -20, -20],
            yacuteaogonek: [-30, -30, -20, -20],
            yacutearing: [-30, -30, -20, -20],
            yacuteatilde: [-30, -30, -20, -20],
            yacutecomma: [-80, -80, -100, -100, -55, -37, -55, -65],
            yacutee: [-10, -10, -20, -20, -10],
            yacuteeacute: [-10, -10, -20, -20, -10],
            yacuteecaron: [-10, -10, -20, -20, -10],
            yacuteecircumflex: [-10, -10, -20, -20, -10],
            yacuteedieresis: [-10, -10, -20, -20, -10],
            yacuteedotaccent: [-10, -10, -20, -20, -10],
            yacuteegrave: [-10, -10, -20, -20, -10],
            yacuteemacron: [-10, -10, -20, -20, -10],
            yacuteeogonek: [-10, -10, -20, -20, -10],
            yacuteo: [-25, -25, -20, -20, -25],
            yacuteoacute: [-25, -25, -20, -20, -25],
            yacuteocircumflex: [-25, -25, -20, -20, -25],
            yacuteodieresis: [-25, -25, -20, -20, -25],
            yacuteograve: [-25, -25, -20, -20, -25],
            yacuteohungarumlaut: [-25, -25, -20, -20, -25],
            yacuteomacron: [-25, -25, -20, -20, -25],
            yacuteoslash: [-25, -25, -20, -20, -25],
            yacuteotilde: [-25, -25, -20, -20, -25],
            yacuteperiod: [-80, -80, -100, -100, -70, -37, -55, -65],
            ydieresisa: [-30, -30, -20, -20],
            ydieresisaacute: [-30, -30, -20, -20],
            ydieresisabreve: [-30, -30, -20, -20],
            ydieresisacircumflex: [-30, -30, -20, -20],
            ydieresisadieresis: [-30, -30, -20, -20],
            ydieresisagrave: [-30, -30, -20, -20],
            ydieresisamacron: [-30, -30, -20, -20],
            ydieresisaogonek: [-30, -30, -20, -20],
            ydieresisaring: [-30, -30, -20, -20],
            ydieresisatilde: [-30, -30, -20, -20],
            ydieresiscomma: [-80, -80, -100, -100, -55, -37, -55, -65],
            ydieresise: [-10, -10, -20, -20, -10],
            ydieresiseacute: [-10, -10, -20, -20, -10],
            ydieresisecaron: [-10, -10, -20, -20, -10],
            ydieresisecircumflex: [-10, -10, -20, -20, -10],
            ydieresisedieresis: [-10, -10, -20, -20, -10],
            ydieresisedotaccent: [-10, -10, -20, -20, -10],
            ydieresisegrave: [-10, -10, -20, -20, -10],
            ydieresisemacron: [-10, -10, -20, -20, -10],
            ydieresiseogonek: [-10, -10, -20, -20, -10],
            ydieresiso: [-25, -25, -20, -20, -25],
            ydieresisoacute: [-25, -25, -20, -20, -25],
            ydieresisocircumflex: [-25, -25, -20, -20, -25],
            ydieresisodieresis: [-25, -25, -20, -20, -25],
            ydieresisograve: [-25, -25, -20, -20, -25],
            ydieresisohungarumlaut: [-25, -25, -20, -20, -25],
            ydieresisomacron: [-25, -25, -20, -20, -25],
            ydieresisoslash: [-25, -25, -20, -20, -25],
            ydieresisotilde: [-25, -25, -20, -20, -25],
            ydieresisperiod: [-80, -80, -100, -100, -70, -37, -55, -65],
            ze: [10, 10, -15, -15],
            zeacute: [10, 10, -15, -15],
            zecaron: [10, 10, -15, -15],
            zecircumflex: [10, 10, -15, -15],
            zedieresis: [10, 10, -15, -15],
            zedotaccent: [10, 10, -15, -15],
            zegrave: [10, 10, -15, -15],
            zemacron: [10, 10, -15, -15],
            zeogonek: [10, 10, -15, -15],
            zacutee: [10, 10, -15, -15],
            zacuteeacute: [10, 10, -15, -15],
            zacuteecaron: [10, 10, -15, -15],
            zacuteecircumflex: [10, 10, -15, -15],
            zacuteedieresis: [10, 10, -15, -15],
            zacuteedotaccent: [10, 10, -15, -15],
            zacuteegrave: [10, 10, -15, -15],
            zacuteemacron: [10, 10, -15, -15],
            zacuteeogonek: [10, 10, -15, -15],
            zcarone: [10, 10, -15, -15],
            zcaroneacute: [10, 10, -15, -15],
            zcaronecaron: [10, 10, -15, -15],
            zcaronecircumflex: [10, 10, -15, -15],
            zcaronedieresis: [10, 10, -15, -15],
            zcaronedotaccent: [10, 10, -15, -15],
            zcaronegrave: [10, 10, -15, -15],
            zcaronemacron: [10, 10, -15, -15],
            zcaroneogonek: [10, 10, -15, -15],
            zdotaccente: [10, 10, -15, -15],
            zdotaccenteacute: [10, 10, -15, -15],
            zdotaccentecaron: [10, 10, -15, -15],
            zdotaccentecircumflex: [10, 10, -15, -15],
            zdotaccentedieresis: [10, 10, -15, -15],
            zdotaccentedotaccent: [10, 10, -15, -15],
            zdotaccentegrave: [10, 10, -15, -15],
            zdotaccentemacron: [10, 10, -15, -15],
            zdotaccenteogonek: [10, 10, -15, -15],
            Bcomma: [0, 0, -20, -20],
            Bperiod: [0, 0, -20, -20],
            Ccomma: [0, 0, -30, -30],
            Cperiod: [0, 0, -30, -30],
            Cacutecomma: [0, 0, -30, -30],
            Cacuteperiod: [0, 0, -30, -30],
            Ccaroncomma: [0, 0, -30, -30],
            Ccaronperiod: [0, 0, -30, -30],
            Ccedillacomma: [0, 0, -30, -30],
            Ccedillaperiod: [0, 0, -30, -30],
            Fe: [0, 0, -30, -30, -25, -100, -75],
            Feacute: [0, 0, -30, -30, -25, -100, -75],
            Fecaron: [0, 0, -30, -30, -25, -100, -75],
            Fecircumflex: [0, 0, -30, -30, -25, -100, -75],
            Fedieresis: [0, 0, -30, -30, -25, -100, -75],
            Fedotaccent: [0, 0, -30, -30, -25, -100, -75],
            Fegrave: [0, 0, -30, -30, -25, -100, -75],
            Femacron: [0, 0, -30, -30, -25, -100, -75],
            Feogonek: [0, 0, -30, -30, -25, -100, -75],
            Fo: [0, 0, -30, -30, -25, -70, -105, -15],
            Foacute: [0, 0, -30, -30, -25, -70, -105, -15],
            Focircumflex: [0, 0, -30, -30, -25, -70, -105, -15],
            Fodieresis: [0, 0, -30, -30, -25, -70, -105, -15],
            Fograve: [0, 0, -30, -30, -25, -70, -105, -15],
            Fohungarumlaut: [0, 0, -30, -30, -25, -70, -105, -15],
            Fomacron: [0, 0, -30, -30, -25, -70, -105, -15],
            Foslash: [0, 0, -30, -30, -25, -70, -105, -15],
            Fotilde: [0, 0, -30, -30, -25, -70, -105, -15],
            Fr: [0, 0, -45, -45, 0, -50, -55],
            Fracute: [0, 0, -45, -45, 0, -50, -55],
            Frcaron: [0, 0, -45, -45, 0, -50, -55],
            Frcommaaccent: [0, 0, -45, -45, 0, -50, -55],
            Ja: [0, 0, -20, -20, -15, -40, -35],
            Jaacute: [0, 0, -20, -20, -15, -40, -35],
            Jabreve: [0, 0, -20, -20, -15, -40, -35],
            Jacircumflex: [0, 0, -20, -20, -15, -40, -35],
            Jadieresis: [0, 0, -20, -20, -15, -40, -35],
            Jagrave: [0, 0, -20, -20, -15, -40, -35],
            Jamacron: [0, 0, -20, -20, -15, -40, -35],
            Jaogonek: [0, 0, -20, -20, -15, -40, -35],
            Jaring: [0, 0, -20, -20, -15, -40, -35],
            Jatilde: [0, 0, -20, -20, -15, -40, -35],
            LcaronT: [0, 0, -110, -110],
            LcaronTcaron: [0, 0, -110, -110],
            LcaronTcommaaccent: [0, 0, -110, -110],
            LcaronV: [0, 0, -110, -110],
            LcaronW: [0, 0, -70, -70],
            LcaronY: [0, 0, -140, -140],
            LcaronYacute: [0, 0, -140, -140],
            LcaronYdieresis: [0, 0, -140, -140],
            Lcaronquotedblright: [0, 0, -140, -140],
            Lcaronquoteright: [0, 0, -160, -160, 0, 0, 0, -92],
            Lcarony: [0, 0, -30, -30, 0, 0, 0, -55],
            Lcaronyacute: [0, 0, -30, -30, 0, 0, 0, -55],
            Lcaronydieresis: [0, 0, -30, -30, 0, 0, 0, -55],
            Scomma: [0, 0, -20, -20],
            Speriod: [0, 0, -20, -20],
            Sacutecomma: [0, 0, -20, -20],
            Sacuteperiod: [0, 0, -20, -20],
            Scaroncomma: [0, 0, -20, -20],
            Scaronperiod: [0, 0, -20, -20],
            Scedillacomma: [0, 0, -20, -20],
            Scedillaperiod: [0, 0, -20, -20],
            Scommaaccentcomma: [0, 0, -20, -20],
            Scommaaccentperiod: [0, 0, -20, -20],
            Trcaron: [0, 0, -120, -120, -74, -37, -55, -35],
            Tcaronrcaron: [0, 0, -120, -120, -74, -37, -55, -35],
            Tcommaaccentrcaron: [0, 0, -120, -120, -74, -37, -55, -35],
            Yhyphen: [0, 0, -140, -140, -92, -92, -74, -111],
            Yi: [0, 0, -20, -20, -37, -55, -74, -55],
            Yiacute: [0, 0, -20, -20, -37, -55, -74, -55],
            Yiogonek: [0, 0, -20, -20, -37, -55, -74, -55],
            Yacutehyphen: [0, 0, -140, -140, -92, -92, -74, -111],
            Yacutei: [0, 0, -20, -20, -37, -55, -74, -55],
            Yacuteiacute: [0, 0, -20, -20, -37, -55, -74, -55],
            Yacuteiogonek: [0, 0, -20, -20, -37, -55, -74, -55],
            Ydieresishyphen: [0, 0, -140, -140, -92, -92, -74, -111],
            Ydieresisi: [0, 0, -20, -20, -37, -55, -74, -55],
            Ydieresisiacute: [0, 0, -20, -20, -37, -55, -74, -55],
            Ydieresisiogonek: [0, 0, -20, -20, -37, -55, -74, -55],
            bb: [0, 0, -10, -10, -10, -10],
            bcomma: [0, 0, -40, -40],
            bperiod: [0, 0, -40, -40, -40, -40, -40, -40],
            ccomma: [0, 0, -15, -15],
            cacutecomma: [0, 0, -15, -15],
            ccaroncomma: [0, 0, -15, -15],
            ccedillacomma: [0, 0, -15, -15],
            fa: [0, 0, -30, -30, 0, 0, 0, -10],
            faacute: [0, 0, -30, -30, 0, 0, 0, -10],
            fabreve: [0, 0, -30, -30, 0, 0, 0, -10],
            facircumflex: [0, 0, -30, -30, 0, 0, 0, -10],
            fadieresis: [0, 0, -30, -30, 0, 0, 0, -10],
            fagrave: [0, 0, -30, -30, 0, 0, 0, -10],
            famacron: [0, 0, -30, -30, 0, 0, 0, -10],
            faogonek: [0, 0, -30, -30, 0, 0, 0, -10],
            faring: [0, 0, -30, -30, 0, 0, 0, -10],
            fatilde: [0, 0, -30, -30, 0, 0, 0, -10],
            fdotlessi: [0, 0, -28, -28, -35, -30, -60, -50],
            gr: [0, 0, -10, -10],
            gracute: [0, 0, -10, -10],
            grcaron: [0, 0, -10, -10],
            grcommaaccent: [0, 0, -10, -10],
            gbrever: [0, 0, -10, -10],
            gbreveracute: [0, 0, -10, -10],
            gbrevercaron: [0, 0, -10, -10],
            gbrevercommaaccent: [0, 0, -10, -10],
            gcommaaccentr: [0, 0, -10, -10],
            gcommaaccentracute: [0, 0, -10, -10],
            gcommaaccentrcaron: [0, 0, -10, -10],
            gcommaaccentrcommaaccent: [0, 0, -10, -10],
            ke: [0, 0, -20, -20, -10, -30, -10, -10],
            keacute: [0, 0, -20, -20, -10, -30, -10, -10],
            kecaron: [0, 0, -20, -20, -10, -30, -10, -10],
            kecircumflex: [0, 0, -20, -20, -10, -30, -10, -10],
            kedieresis: [0, 0, -20, -20, -10, -30, -10, -10],
            kedotaccent: [0, 0, -20, -20, -10, -30, -10, -10],
            kegrave: [0, 0, -20, -20, -10, -30, -10, -10],
            kemacron: [0, 0, -20, -20, -10, -30, -10, -10],
            keogonek: [0, 0, -20, -20, -10, -30, -10, -10],
            kcommaaccente: [0, 0, -20, -20, -10, -30, -10, -10],
            kcommaaccenteacute: [0, 0, -20, -20, -10, -30, -10, -10],
            kcommaaccentecaron: [0, 0, -20, -20, -10, -30, -10, -10],
            kcommaaccentecircumflex: [0, 0, -20, -20, -10, -30, -10, -10],
            kcommaaccentedieresis: [0, 0, -20, -20, -10, -30, -10, -10],
            kcommaaccentedotaccent: [0, 0, -20, -20, -10, -30, -10, -10],
            kcommaaccentegrave: [0, 0, -20, -20, -10, -30, -10, -10],
            kcommaaccentemacron: [0, 0, -20, -20, -10, -30, -10, -10],
            kcommaaccenteogonek: [0, 0, -20, -20, -10, -30, -10, -10],
            ocomma: [0, 0, -40, -40],
            operiod: [0, 0, -40, -40],
            oacutecomma: [0, 0, -40, -40],
            oacuteperiod: [0, 0, -40, -40],
            ocircumflexcomma: [0, 0, -40, -40],
            ocircumflexperiod: [0, 0, -40, -40],
            odieresiscomma: [0, 0, -40, -40],
            odieresisperiod: [0, 0, -40, -40],
            ogravecomma: [0, 0, -40, -40],
            ograveperiod: [0, 0, -40, -40],
            ohungarumlautcomma: [0, 0, -40, -40],
            ohungarumlautperiod: [0, 0, -40, -40],
            omacroncomma: [0, 0, -40, -40],
            omacronperiod: [0, 0, -40, -40],
            oslasha: [0, 0, -55, -55],
            oslashaacute: [0, 0, -55, -55],
            oslashabreve: [0, 0, -55, -55],
            oslashacircumflex: [0, 0, -55, -55],
            oslashadieresis: [0, 0, -55, -55],
            oslashagrave: [0, 0, -55, -55],
            oslashamacron: [0, 0, -55, -55],
            oslashaogonek: [0, 0, -55, -55],
            oslasharing: [0, 0, -55, -55],
            oslashatilde: [0, 0, -55, -55],
            oslashb: [0, 0, -55, -55],
            oslashc: [0, 0, -55, -55],
            oslashcacute: [0, 0, -55, -55],
            oslashccaron: [0, 0, -55, -55],
            oslashccedilla: [0, 0, -55, -55],
            oslashcomma: [0, 0, -95, -95],
            oslashd: [0, 0, -55, -55],
            oslashdcroat: [0, 0, -55, -55],
            oslashe: [0, 0, -55, -55],
            oslasheacute: [0, 0, -55, -55],
            oslashecaron: [0, 0, -55, -55],
            oslashecircumflex: [0, 0, -55, -55],
            oslashedieresis: [0, 0, -55, -55],
            oslashedotaccent: [0, 0, -55, -55],
            oslashegrave: [0, 0, -55, -55],
            oslashemacron: [0, 0, -55, -55],
            oslasheogonek: [0, 0, -55, -55],
            oslashf: [0, 0, -55, -55],
            oslashg: [0, 0, -55, -55, 0, 0, -10],
            oslashgbreve: [0, 0, -55, -55, 0, 0, -10],
            oslashgcommaaccent: [0, 0, -55, -55, 0, 0, -10],
            oslashh: [0, 0, -55, -55],
            oslashi: [0, 0, -55, -55],
            oslashiacute: [0, 0, -55, -55],
            oslashicircumflex: [0, 0, -55, -55],
            oslashidieresis: [0, 0, -55, -55],
            oslashigrave: [0, 0, -55, -55],
            oslashimacron: [0, 0, -55, -55],
            oslashiogonek: [0, 0, -55, -55],
            oslashj: [0, 0, -55, -55],
            oslashk: [0, 0, -55, -55],
            oslashkcommaaccent: [0, 0, -55, -55],
            oslashl: [0, 0, -55, -55],
            oslashlacute: [0, 0, -55, -55],
            oslashlcommaaccent: [0, 0, -55, -55],
            oslashlslash: [0, 0, -55, -55],
            oslashm: [0, 0, -55, -55],
            oslashn: [0, 0, -55, -55],
            oslashnacute: [0, 0, -55, -55],
            oslashncaron: [0, 0, -55, -55],
            oslashncommaaccent: [0, 0, -55, -55],
            oslashntilde: [0, 0, -55, -55],
            oslasho: [0, 0, -55, -55],
            oslashoacute: [0, 0, -55, -55],
            oslashocircumflex: [0, 0, -55, -55],
            oslashodieresis: [0, 0, -55, -55],
            oslashograve: [0, 0, -55, -55],
            oslashohungarumlaut: [0, 0, -55, -55],
            oslashomacron: [0, 0, -55, -55],
            oslashoslash: [0, 0, -55, -55],
            oslashotilde: [0, 0, -55, -55],
            oslashp: [0, 0, -55, -55],
            oslashperiod: [0, 0, -95, -95],
            oslashq: [0, 0, -55, -55],
            oslashr: [0, 0, -55, -55],
            oslashracute: [0, 0, -55, -55],
            oslashrcaron: [0, 0, -55, -55],
            oslashrcommaaccent: [0, 0, -55, -55],
            oslashs: [0, 0, -55, -55],
            oslashsacute: [0, 0, -55, -55],
            oslashscaron: [0, 0, -55, -55],
            oslashscedilla: [0, 0, -55, -55],
            oslashscommaaccent: [0, 0, -55, -55],
            oslasht: [0, 0, -55, -55],
            oslashtcommaaccent: [0, 0, -55, -55],
            oslashu: [0, 0, -55, -55],
            oslashuacute: [0, 0, -55, -55],
            oslashucircumflex: [0, 0, -55, -55],
            oslashudieresis: [0, 0, -55, -55],
            oslashugrave: [0, 0, -55, -55],
            oslashuhungarumlaut: [0, 0, -55, -55],
            oslashumacron: [0, 0, -55, -55],
            oslashuogonek: [0, 0, -55, -55],
            oslashuring: [0, 0, -55, -55],
            oslashz: [0, 0, -55, -55],
            oslashzacute: [0, 0, -55, -55],
            oslashzcaron: [0, 0, -55, -55],
            oslashzdotaccent: [0, 0, -55, -55],
            otildecomma: [0, 0, -40, -40],
            otildeperiod: [0, 0, -40, -40],
            pcomma: [0, 0, -35, -35],
            pperiod: [0, 0, -35, -35],
            ra: [0, 0, -10, -10, 0, 0, -15],
            raacute: [0, 0, -10, -10, 0, 0, -15],
            rabreve: [0, 0, -10, -10, 0, 0, -15],
            racircumflex: [0, 0, -10, -10, 0, 0, -15],
            radieresis: [0, 0, -10, -10, 0, 0, -15],
            ragrave: [0, 0, -10, -10, 0, 0, -15],
            ramacron: [0, 0, -10, -10, 0, 0, -15],
            raogonek: [0, 0, -10, -10, 0, 0, -15],
            raring: [0, 0, -10, -10, 0, 0, -15],
            ratilde: [0, 0, -10, -10, 0, 0, -15],
            rcolon: [0, 0, 30, 30],
            ri: [0, 0, 15, 15],
            riacute: [0, 0, 15, 15],
            ricircumflex: [0, 0, 15, 15],
            ridieresis: [0, 0, 15, 15],
            rigrave: [0, 0, 15, 15],
            rimacron: [0, 0, 15, 15],
            riogonek: [0, 0, 15, 15],
            rk: [0, 0, 15, 15],
            rkcommaaccent: [0, 0, 15, 15],
            rl: [0, 0, 15, 15],
            rlacute: [0, 0, 15, 15],
            rlcommaaccent: [0, 0, 15, 15],
            rlslash: [0, 0, 15, 15],
            rm: [0, 0, 25, 25],
            rn: [0, 0, 25, 25, -15],
            rnacute: [0, 0, 25, 25, -15],
            rncaron: [0, 0, 25, 25, -15],
            rncommaaccent: [0, 0, 25, 25, -15],
            rntilde: [0, 0, 25, 25, -15],
            rp: [0, 0, 30, 30, -10],
            rsemicolon: [0, 0, 30, 30],
            ru: [0, 0, 15, 15],
            ruacute: [0, 0, 15, 15],
            rucircumflex: [0, 0, 15, 15],
            rudieresis: [0, 0, 15, 15],
            rugrave: [0, 0, 15, 15],
            ruhungarumlaut: [0, 0, 15, 15],
            rumacron: [0, 0, 15, 15],
            ruogonek: [0, 0, 15, 15],
            ruring: [0, 0, 15, 15],
            racutea: [0, 0, -10, -10, 0, 0, -15],
            racuteaacute: [0, 0, -10, -10, 0, 0, -15],
            racuteabreve: [0, 0, -10, -10, 0, 0, -15],
            racuteacircumflex: [0, 0, -10, -10, 0, 0, -15],
            racuteadieresis: [0, 0, -10, -10, 0, 0, -15],
            racuteagrave: [0, 0, -10, -10, 0, 0, -15],
            racuteamacron: [0, 0, -10, -10, 0, 0, -15],
            racuteaogonek: [0, 0, -10, -10, 0, 0, -15],
            racutearing: [0, 0, -10, -10, 0, 0, -15],
            racuteatilde: [0, 0, -10, -10, 0, 0, -15],
            racutecolon: [0, 0, 30, 30],
            racutei: [0, 0, 15, 15],
            racuteiacute: [0, 0, 15, 15],
            racuteicircumflex: [0, 0, 15, 15],
            racuteidieresis: [0, 0, 15, 15],
            racuteigrave: [0, 0, 15, 15],
            racuteimacron: [0, 0, 15, 15],
            racuteiogonek: [0, 0, 15, 15],
            racutek: [0, 0, 15, 15],
            racutekcommaaccent: [0, 0, 15, 15],
            racutel: [0, 0, 15, 15],
            racutelacute: [0, 0, 15, 15],
            racutelcommaaccent: [0, 0, 15, 15],
            racutelslash: [0, 0, 15, 15],
            racutem: [0, 0, 25, 25],
            racuten: [0, 0, 25, 25, -15],
            racutenacute: [0, 0, 25, 25, -15],
            racutencaron: [0, 0, 25, 25, -15],
            racutencommaaccent: [0, 0, 25, 25, -15],
            racutentilde: [0, 0, 25, 25, -15],
            racutep: [0, 0, 30, 30, -10],
            racutesemicolon: [0, 0, 30, 30],
            racuteu: [0, 0, 15, 15],
            racuteuacute: [0, 0, 15, 15],
            racuteucircumflex: [0, 0, 15, 15],
            racuteudieresis: [0, 0, 15, 15],
            racuteugrave: [0, 0, 15, 15],
            racuteuhungarumlaut: [0, 0, 15, 15],
            racuteumacron: [0, 0, 15, 15],
            racuteuogonek: [0, 0, 15, 15],
            racuteuring: [0, 0, 15, 15],
            rcarona: [0, 0, -10, -10, 0, 0, -15],
            rcaronaacute: [0, 0, -10, -10, 0, 0, -15],
            rcaronabreve: [0, 0, -10, -10, 0, 0, -15],
            rcaronacircumflex: [0, 0, -10, -10, 0, 0, -15],
            rcaronadieresis: [0, 0, -10, -10, 0, 0, -15],
            rcaronagrave: [0, 0, -10, -10, 0, 0, -15],
            rcaronamacron: [0, 0, -10, -10, 0, 0, -15],
            rcaronaogonek: [0, 0, -10, -10, 0, 0, -15],
            rcaronaring: [0, 0, -10, -10, 0, 0, -15],
            rcaronatilde: [0, 0, -10, -10, 0, 0, -15],
            rcaroncolon: [0, 0, 30, 30],
            rcaroni: [0, 0, 15, 15],
            rcaroniacute: [0, 0, 15, 15],
            rcaronicircumflex: [0, 0, 15, 15],
            rcaronidieresis: [0, 0, 15, 15],
            rcaronigrave: [0, 0, 15, 15],
            rcaronimacron: [0, 0, 15, 15],
            rcaroniogonek: [0, 0, 15, 15],
            rcaronk: [0, 0, 15, 15],
            rcaronkcommaaccent: [0, 0, 15, 15],
            rcaronl: [0, 0, 15, 15],
            rcaronlacute: [0, 0, 15, 15],
            rcaronlcommaaccent: [0, 0, 15, 15],
            rcaronlslash: [0, 0, 15, 15],
            rcaronm: [0, 0, 25, 25],
            rcaronn: [0, 0, 25, 25, -15],
            rcaronnacute: [0, 0, 25, 25, -15],
            rcaronncaron: [0, 0, 25, 25, -15],
            rcaronncommaaccent: [0, 0, 25, 25, -15],
            rcaronntilde: [0, 0, 25, 25, -15],
            rcaronp: [0, 0, 30, 30, -10],
            rcaronsemicolon: [0, 0, 30, 30],
            rcaronu: [0, 0, 15, 15],
            rcaronuacute: [0, 0, 15, 15],
            rcaronucircumflex: [0, 0, 15, 15],
            rcaronudieresis: [0, 0, 15, 15],
            rcaronugrave: [0, 0, 15, 15],
            rcaronuhungarumlaut: [0, 0, 15, 15],
            rcaronumacron: [0, 0, 15, 15],
            rcaronuogonek: [0, 0, 15, 15],
            rcaronuring: [0, 0, 15, 15],
            rcommaaccenta: [0, 0, -10, -10, 0, 0, -15],
            rcommaaccentaacute: [0, 0, -10, -10, 0, 0, -15],
            rcommaaccentabreve: [0, 0, -10, -10, 0, 0, -15],
            rcommaaccentacircumflex: [0, 0, -10, -10, 0, 0, -15],
            rcommaaccentadieresis: [0, 0, -10, -10, 0, 0, -15],
            rcommaaccentagrave: [0, 0, -10, -10, 0, 0, -15],
            rcommaaccentamacron: [0, 0, -10, -10, 0, 0, -15],
            rcommaaccentaogonek: [0, 0, -10, -10, 0, 0, -15],
            rcommaaccentaring: [0, 0, -10, -10, 0, 0, -15],
            rcommaaccentatilde: [0, 0, -10, -10, 0, 0, -15],
            rcommaaccentcolon: [0, 0, 30, 30],
            rcommaaccenti: [0, 0, 15, 15],
            rcommaaccentiacute: [0, 0, 15, 15],
            rcommaaccenticircumflex: [0, 0, 15, 15],
            rcommaaccentidieresis: [0, 0, 15, 15],
            rcommaaccentigrave: [0, 0, 15, 15],
            rcommaaccentimacron: [0, 0, 15, 15],
            rcommaaccentiogonek: [0, 0, 15, 15],
            rcommaaccentk: [0, 0, 15, 15],
            rcommaaccentkcommaaccent: [0, 0, 15, 15],
            rcommaaccentl: [0, 0, 15, 15],
            rcommaaccentlacute: [0, 0, 15, 15],
            rcommaaccentlcommaaccent: [0, 0, 15, 15],
            rcommaaccentlslash: [0, 0, 15, 15],
            rcommaaccentm: [0, 0, 25, 25],
            rcommaaccentn: [0, 0, 25, 25, -15],
            rcommaaccentnacute: [0, 0, 25, 25, -15],
            rcommaaccentncaron: [0, 0, 25, 25, -15],
            rcommaaccentncommaaccent: [0, 0, 25, 25, -15],
            rcommaaccentntilde: [0, 0, 25, 25, -15],
            rcommaaccentp: [0, 0, 30, 30, -10],
            rcommaaccentsemicolon: [0, 0, 30, 30],
            rcommaaccentu: [0, 0, 15, 15],
            rcommaaccentuacute: [0, 0, 15, 15],
            rcommaaccentucircumflex: [0, 0, 15, 15],
            rcommaaccentudieresis: [0, 0, 15, 15],
            rcommaaccentugrave: [0, 0, 15, 15],
            rcommaaccentuhungarumlaut: [0, 0, 15, 15],
            rcommaaccentumacron: [0, 0, 15, 15],
            rcommaaccentuogonek: [0, 0, 15, 15],
            rcommaaccenturing: [0, 0, 15, 15],
            scomma: [0, 0, -15, -15],
            speriod: [0, 0, -15, -15],
            sacutecomma: [0, 0, -15, -15],
            sacuteperiod: [0, 0, -15, -15],
            scaroncomma: [0, 0, -15, -15],
            scaronperiod: [0, 0, -15, -15],
            scedillacomma: [0, 0, -15, -15],
            scedillaperiod: [0, 0, -15, -15],
            scommaaccentcomma: [0, 0, -15, -15],
            scommaaccentperiod: [0, 0, -15, -15],
            ve: [0, 0, -25, -25, -10, -15, 0, -15],
            veacute: [0, 0, -25, -25, -10, -15, 0, -15],
            vecaron: [0, 0, -25, -25, -10, -15, 0, -15],
            vecircumflex: [0, 0, -25, -25, -10, -15, 0, -15],
            vedieresis: [0, 0, -25, -25, -10, -15, 0, -15],
            vedotaccent: [0, 0, -25, -25, -10, -15, 0, -15],
            vegrave: [0, 0, -25, -25, -10, -15, 0, -15],
            vemacron: [0, 0, -25, -25, -10, -15, 0, -15],
            veogonek: [0, 0, -25, -25, -10, -15, 0, -15],
            wa: [0, 0, -15, -15, 0, -10, 0, -10],
            waacute: [0, 0, -15, -15, 0, -10, 0, -10],
            wabreve: [0, 0, -15, -15, 0, -10, 0, -10],
            wacircumflex: [0, 0, -15, -15, 0, -10, 0, -10],
            wadieresis: [0, 0, -15, -15, 0, -10, 0, -10],
            wagrave: [0, 0, -15, -15, 0, -10, 0, -10],
            wamacron: [0, 0, -15, -15, 0, -10, 0, -10],
            waogonek: [0, 0, -15, -15, 0, -10, 0, -10],
            waring: [0, 0, -15, -15, 0, -10, 0, -10],
            watilde: [0, 0, -15, -15, 0, -10, 0, -10],
            we: [0, 0, -10, -10, 0, -10],
            weacute: [0, 0, -10, -10, 0, -10],
            wecaron: [0, 0, -10, -10, 0, -10],
            wecircumflex: [0, 0, -10, -10, 0, -10],
            wedieresis: [0, 0, -10, -10, 0, -10],
            wedotaccent: [0, 0, -10, -10, 0, -10],
            wegrave: [0, 0, -10, -10, 0, -10],
            wemacron: [0, 0, -10, -10, 0, -10],
            weogonek: [0, 0, -10, -10, 0, -10],
            zo: [0, 0, -15, -15],
            zoacute: [0, 0, -15, -15],
            zocircumflex: [0, 0, -15, -15],
            zodieresis: [0, 0, -15, -15],
            zograve: [0, 0, -15, -15],
            zohungarumlaut: [0, 0, -15, -15],
            zomacron: [0, 0, -15, -15],
            zoslash: [0, 0, -15, -15],
            zotilde: [0, 0, -15, -15],
            zacuteo: [0, 0, -15, -15],
            zacuteoacute: [0, 0, -15, -15],
            zacuteocircumflex: [0, 0, -15, -15],
            zacuteodieresis: [0, 0, -15, -15],
            zacuteograve: [0, 0, -15, -15],
            zacuteohungarumlaut: [0, 0, -15, -15],
            zacuteomacron: [0, 0, -15, -15],
            zacuteoslash: [0, 0, -15, -15],
            zacuteotilde: [0, 0, -15, -15],
            zcarono: [0, 0, -15, -15],
            zcaronoacute: [0, 0, -15, -15],
            zcaronocircumflex: [0, 0, -15, -15],
            zcaronodieresis: [0, 0, -15, -15],
            zcaronograve: [0, 0, -15, -15],
            zcaronohungarumlaut: [0, 0, -15, -15],
            zcaronomacron: [0, 0, -15, -15],
            zcaronoslash: [0, 0, -15, -15],
            zcaronotilde: [0, 0, -15, -15],
            zdotaccento: [0, 0, -15, -15],
            zdotaccentoacute: [0, 0, -15, -15],
            zdotaccentocircumflex: [0, 0, -15, -15],
            zdotaccentodieresis: [0, 0, -15, -15],
            zdotaccentograve: [0, 0, -15, -15],
            zdotaccentohungarumlaut: [0, 0, -15, -15],
            zdotaccentomacron: [0, 0, -15, -15],
            zdotaccentoslash: [0, 0, -15, -15],
            zdotaccentotilde: [0, 0, -15, -15],
            Ap: [0, 0, 0, 0, -25],
            Aquoteright: [0, 0, 0, 0, -74, -74, -37, -111],
            Aacutep: [0, 0, 0, 0, -25],
            Aacutequoteright: [0, 0, 0, 0, -74, -74, -37, -111],
            Abrevep: [0, 0, 0, 0, -25],
            Abrevequoteright: [0, 0, 0, 0, -74, -74, -37, -111],
            Acircumflexp: [0, 0, 0, 0, -25],
            Acircumflexquoteright: [0, 0, 0, 0, -74, -74, -37, -111],
            Adieresisp: [0, 0, 0, 0, -25],
            Adieresisquoteright: [0, 0, 0, 0, -74, -74, -37, -111],
            Agravep: [0, 0, 0, 0, -25],
            Agravequoteright: [0, 0, 0, 0, -74, -74, -37, -111],
            Amacronp: [0, 0, 0, 0, -25],
            Amacronquoteright: [0, 0, 0, 0, -74, -74, -37, -111],
            Aogonekp: [0, 0, 0, 0, -25],
            Aogonekquoteright: [0, 0, 0, 0, -74, -74, -37, -111],
            Aringp: [0, 0, 0, 0, -25],
            Aringquoteright: [0, 0, 0, 0, -74, -74, -37, -111],
            Atildep: [0, 0, 0, 0, -25],
            Atildequoteright: [0, 0, 0, 0, -74, -74, -37, -111],
            Je: [0, 0, 0, 0, -15, -40, -25],
            Jeacute: [0, 0, 0, 0, -15, -40, -25],
            Jecaron: [0, 0, 0, 0, -15, -40, -25],
            Jecircumflex: [0, 0, 0, 0, -15, -40, -25],
            Jedieresis: [0, 0, 0, 0, -15, -40, -25],
            Jedotaccent: [0, 0, 0, 0, -15, -40, -25],
            Jegrave: [0, 0, 0, 0, -15, -40, -25],
            Jemacron: [0, 0, 0, 0, -15, -40, -25],
            Jeogonek: [0, 0, 0, 0, -15, -40, -25],
            Jo: [0, 0, 0, 0, -15, -40, -25],
            Joacute: [0, 0, 0, 0, -15, -40, -25],
            Jocircumflex: [0, 0, 0, 0, -15, -40, -25],
            Jodieresis: [0, 0, 0, 0, -15, -40, -25],
            Jograve: [0, 0, 0, 0, -15, -40, -25],
            Johungarumlaut: [0, 0, 0, 0, -15, -40, -25],
            Jomacron: [0, 0, 0, 0, -15, -40, -25],
            Joslash: [0, 0, 0, 0, -15, -40, -25],
            Jotilde: [0, 0, 0, 0, -15, -40, -25],
            NA: [0, 0, 0, 0, -20, -30, -27, -35],
            NAacute: [0, 0, 0, 0, -20, -30, -27, -35],
            NAbreve: [0, 0, 0, 0, -20, -30, -27, -35],
            NAcircumflex: [0, 0, 0, 0, -20, -30, -27, -35],
            NAdieresis: [0, 0, 0, 0, -20, -30, -27, -35],
            NAgrave: [0, 0, 0, 0, -20, -30, -27, -35],
            NAmacron: [0, 0, 0, 0, -20, -30, -27, -35],
            NAogonek: [0, 0, 0, 0, -20, -30, -27, -35],
            NAring: [0, 0, 0, 0, -20, -30, -27, -35],
            NAtilde: [0, 0, 0, 0, -20, -30, -27, -35],
            NacuteA: [0, 0, 0, 0, -20, -30, -27, -35],
            NacuteAacute: [0, 0, 0, 0, -20, -30, -27, -35],
            NacuteAbreve: [0, 0, 0, 0, -20, -30, -27, -35],
            NacuteAcircumflex: [0, 0, 0, 0, -20, -30, -27, -35],
            NacuteAdieresis: [0, 0, 0, 0, -20, -30, -27, -35],
            NacuteAgrave: [0, 0, 0, 0, -20, -30, -27, -35],
            NacuteAmacron: [0, 0, 0, 0, -20, -30, -27, -35],
            NacuteAogonek: [0, 0, 0, 0, -20, -30, -27, -35],
            NacuteAring: [0, 0, 0, 0, -20, -30, -27, -35],
            NacuteAtilde: [0, 0, 0, 0, -20, -30, -27, -35],
            NcaronA: [0, 0, 0, 0, -20, -30, -27, -35],
            NcaronAacute: [0, 0, 0, 0, -20, -30, -27, -35],
            NcaronAbreve: [0, 0, 0, 0, -20, -30, -27, -35],
            NcaronAcircumflex: [0, 0, 0, 0, -20, -30, -27, -35],
            NcaronAdieresis: [0, 0, 0, 0, -20, -30, -27, -35],
            NcaronAgrave: [0, 0, 0, 0, -20, -30, -27, -35],
            NcaronAmacron: [0, 0, 0, 0, -20, -30, -27, -35],
            NcaronAogonek: [0, 0, 0, 0, -20, -30, -27, -35],
            NcaronAring: [0, 0, 0, 0, -20, -30, -27, -35],
            NcaronAtilde: [0, 0, 0, 0, -20, -30, -27, -35],
            NcommaaccentA: [0, 0, 0, 0, -20, -30, -27, -35],
            NcommaaccentAacute: [0, 0, 0, 0, -20, -30, -27, -35],
            NcommaaccentAbreve: [0, 0, 0, 0, -20, -30, -27, -35],
            NcommaaccentAcircumflex: [0, 0, 0, 0, -20, -30, -27, -35],
            NcommaaccentAdieresis: [0, 0, 0, 0, -20, -30, -27, -35],
            NcommaaccentAgrave: [0, 0, 0, 0, -20, -30, -27, -35],
            NcommaaccentAmacron: [0, 0, 0, 0, -20, -30, -27, -35],
            NcommaaccentAogonek: [0, 0, 0, 0, -20, -30, -27, -35],
            NcommaaccentAring: [0, 0, 0, 0, -20, -30, -27, -35],
            NcommaaccentAtilde: [0, 0, 0, 0, -20, -30, -27, -35],
            NtildeA: [0, 0, 0, 0, -20, -30, -27, -35],
            NtildeAacute: [0, 0, 0, 0, -20, -30, -27, -35],
            NtildeAbreve: [0, 0, 0, 0, -20, -30, -27, -35],
            NtildeAcircumflex: [0, 0, 0, 0, -20, -30, -27, -35],
            NtildeAdieresis: [0, 0, 0, 0, -20, -30, -27, -35],
            NtildeAgrave: [0, 0, 0, 0, -20, -30, -27, -35],
            NtildeAmacron: [0, 0, 0, 0, -20, -30, -27, -35],
            NtildeAogonek: [0, 0, 0, 0, -20, -30, -27, -35],
            NtildeAring: [0, 0, 0, 0, -20, -30, -27, -35],
            NtildeAtilde: [0, 0, 0, 0, -20, -30, -27, -35],
            Ti: [0, 0, 0, 0, -18, -37, -55, -35],
            Tiacute: [0, 0, 0, 0, -18, -37, -55, -35],
            Tiogonek: [0, 0, 0, 0, -18, -37, -55, -35],
            Tcaroni: [0, 0, 0, 0, -18, -37, -55, -35],
            Tcaroniacute: [0, 0, 0, 0, -18, -37, -55, -35],
            Tcaroniogonek: [0, 0, 0, 0, -18, -37, -55, -35],
            Tcommaaccenti: [0, 0, 0, 0, -18, -37, -55, -35],
            Tcommaaccentiacute: [0, 0, 0, 0, -18, -37, -55, -35],
            Tcommaaccentiogonek: [0, 0, 0, 0, -18, -37, -55, -35],
            Vi: [0, 0, 0, 0, -37, -55, -74, -60],
            Viacute: [0, 0, 0, 0, -37, -55, -74, -60],
            Vicircumflex: [0, 0, 0, 0, -37, 0, -34, -20],
            Vidieresis: [0, 0, 0, 0, -37, 0, -34, -20],
            Vigrave: [0, 0, 0, 0, -37, 0, -34, -20],
            Vimacron: [0, 0, 0, 0, -37, 0, -34, -20],
            Viogonek: [0, 0, 0, 0, -37, -55, -74, -60],
            Wi: [0, 0, 0, 0, -18, -37, -55, -40],
            Wiacute: [0, 0, 0, 0, -18, -37, -55, -40],
            Wiogonek: [0, 0, 0, 0, -18, -37, -55, -40],
            fi: [0, 0, 0, 0, -25, 0, -20, -20],
            gperiod: [0, 0, 0, 0, -15, 0, -15],
            gbreveperiod: [0, 0, 0, 0, -15, 0, -15],
            gcommaaccentperiod: [0, 0, 0, 0, -15, 0, -15],
            iv: [0, 0, 0, 0, -10, 0, 0, -25],
            iacutev: [0, 0, 0, 0, -10, 0, 0, -25],
            icircumflexv: [0, 0, 0, 0, -10, 0, 0, -25],
            idieresisv: [0, 0, 0, 0, -10, 0, 0, -25],
            igravev: [0, 0, 0, 0, -10, 0, 0, -25],
            imacronv: [0, 0, 0, 0, -10, 0, 0, -25],
            iogonekv: [0, 0, 0, 0, -10, 0, 0, -25],
            ky: [0, 0, 0, 0, -15, 0, -10, -15],
            kyacute: [0, 0, 0, 0, -15, 0, -10, -15],
            kydieresis: [0, 0, 0, 0, -15, 0, -10, -15],
            kcommaaccenty: [0, 0, 0, 0, -15, 0, -10, -15],
            kcommaaccentyacute: [0, 0, 0, 0, -15, 0, -10, -15],
            kcommaaccentydieresis: [0, 0, 0, 0, -15, 0, -10, -15],
            quotedblleftA: [0, 0, 0, 0, -10, 0, 0, -80],
            quotedblleftAacute: [0, 0, 0, 0, -10, 0, 0, -80],
            quotedblleftAbreve: [0, 0, 0, 0, -10, 0, 0, -80],
            quotedblleftAcircumflex: [0, 0, 0, 0, -10, 0, 0, -80],
            quotedblleftAdieresis: [0, 0, 0, 0, -10, 0, 0, -80],
            quotedblleftAgrave: [0, 0, 0, 0, -10, 0, 0, -80],
            quotedblleftAmacron: [0, 0, 0, 0, -10, 0, 0, -80],
            quotedblleftAogonek: [0, 0, 0, 0, -10, 0, 0, -80],
            quotedblleftAring: [0, 0, 0, 0, -10, 0, 0, -80],
            quotedblleftAtilde: [0, 0, 0, 0, -10, 0, 0, -80],
            quoteleftA: [0, 0, 0, 0, -10, 0, 0, -80],
            quoteleftAacute: [0, 0, 0, 0, -10, 0, 0, -80],
            quoteleftAbreve: [0, 0, 0, 0, -10, 0, 0, -80],
            quoteleftAcircumflex: [0, 0, 0, 0, -10, 0, 0, -80],
            quoteleftAdieresis: [0, 0, 0, 0, -10, 0, 0, -80],
            quoteleftAgrave: [0, 0, 0, 0, -10, 0, 0, -80],
            quoteleftAmacron: [0, 0, 0, 0, -10, 0, 0, -80],
            quoteleftAogonek: [0, 0, 0, 0, -10, 0, 0, -80],
            quoteleftAring: [0, 0, 0, 0, -10, 0, 0, -80],
            quoteleftAtilde: [0, 0, 0, 0, -10, 0, 0, -80],
            re: [0, 0, 0, 0, -18, 0, -37],
            reacute: [0, 0, 0, 0, -18, 0, -37],
            recaron: [0, 0, 0, 0, -18, 0, -37],
            recircumflex: [0, 0, 0, 0, -18, 0, -37],
            redieresis: [0, 0, 0, 0, -18, 0, -37],
            redotaccent: [0, 0, 0, 0, -18, 0, -37],
            regrave: [0, 0, 0, 0, -18, 0, -37],
            remacron: [0, 0, 0, 0, -18, 0, -37],
            reogonek: [0, 0, 0, 0, -18, 0, -37],
            racutee: [0, 0, 0, 0, -18, 0, -37],
            racuteeacute: [0, 0, 0, 0, -18, 0, -37],
            racuteecaron: [0, 0, 0, 0, -18, 0, -37],
            racuteecircumflex: [0, 0, 0, 0, -18, 0, -37],
            racuteedieresis: [0, 0, 0, 0, -18, 0, -37],
            racuteedotaccent: [0, 0, 0, 0, -18, 0, -37],
            racuteegrave: [0, 0, 0, 0, -18, 0, -37],
            racuteemacron: [0, 0, 0, 0, -18, 0, -37],
            racuteeogonek: [0, 0, 0, 0, -18, 0, -37],
            rcarone: [0, 0, 0, 0, -18, 0, -37],
            rcaroneacute: [0, 0, 0, 0, -18, 0, -37],
            rcaronecaron: [0, 0, 0, 0, -18, 0, -37],
            rcaronecircumflex: [0, 0, 0, 0, -18, 0, -37],
            rcaronedieresis: [0, 0, 0, 0, -18, 0, -37],
            rcaronedotaccent: [0, 0, 0, 0, -18, 0, -37],
            rcaronegrave: [0, 0, 0, 0, -18, 0, -37],
            rcaronemacron: [0, 0, 0, 0, -18, 0, -37],
            rcaroneogonek: [0, 0, 0, 0, -18, 0, -37],
            rcommaaccente: [0, 0, 0, 0, -18, 0, -37],
            rcommaaccenteacute: [0, 0, 0, 0, -18, 0, -37],
            rcommaaccentecaron: [0, 0, 0, 0, -18, 0, -37],
            rcommaaccentecircumflex: [0, 0, 0, 0, -18, 0, -37],
            rcommaaccentedieresis: [0, 0, 0, 0, -18, 0, -37],
            rcommaaccentedotaccent: [0, 0, 0, 0, -18, 0, -37],
            rcommaaccentegrave: [0, 0, 0, 0, -18, 0, -37],
            rcommaaccentemacron: [0, 0, 0, 0, -18, 0, -37],
            rcommaaccenteogonek: [0, 0, 0, 0, -18, 0, -37],
            spaceA: [0, 0, 0, 0, -55, -37, -18, -55],
            spaceAacute: [0, 0, 0, 0, -55, -37, -18, -55],
            spaceAbreve: [0, 0, 0, 0, -55, -37, -18, -55],
            spaceAcircumflex: [0, 0, 0, 0, -55, -37, -18, -55],
            spaceAdieresis: [0, 0, 0, 0, -55, -37, -18, -55],
            spaceAgrave: [0, 0, 0, 0, -55, -37, -18, -55],
            spaceAmacron: [0, 0, 0, 0, -55, -37, -18, -55],
            spaceAogonek: [0, 0, 0, 0, -55, -37, -18, -55],
            spaceAring: [0, 0, 0, 0, -55, -37, -18, -55],
            spaceAtilde: [0, 0, 0, 0, -55, -37, -18, -55],
            Fi: [0, 0, 0, 0, 0, -40, -45],
            Fiacute: [0, 0, 0, 0, 0, -40, -45],
            Ficircumflex: [0, 0, 0, 0, 0, -40, -45],
            Fidieresis: [0, 0, 0, 0, 0, -40, -45],
            Figrave: [0, 0, 0, 0, 0, -40, -45],
            Fimacron: [0, 0, 0, 0, 0, -40, -45],
            Fiogonek: [0, 0, 0, 0, 0, -40, -45],
            eb: [0, 0, 0, 0, 0, -10],
            eacuteb: [0, 0, 0, 0, 0, -10],
            ecaronb: [0, 0, 0, 0, 0, -10],
            ecircumflexb: [0, 0, 0, 0, 0, -10],
            edieresisb: [0, 0, 0, 0, 0, -10],
            edotaccentb: [0, 0, 0, 0, 0, -10],
            egraveb: [0, 0, 0, 0, 0, -10],
            emacronb: [0, 0, 0, 0, 0, -10],
            eogonekb: [0, 0, 0, 0, 0, -10],
            ff: [0, 0, 0, 0, 0, -18, -18, -25],
            quoterightt: [0, 0, 0, 0, 0, -37, -30, -18],
            quoterighttcommaaccent: [0, 0, 0, 0, 0, -37, -30, -18],
            Yicircumflex: [0, 0, 0, 0, 0, 0, -34],
            Yidieresis: [0, 0, 0, 0, 0, 0, -34],
            Yigrave: [0, 0, 0, 0, 0, 0, -34],
            Yimacron: [0, 0, 0, 0, 0, 0, -34],
            Yacuteicircumflex: [0, 0, 0, 0, 0, 0, -34],
            Yacuteidieresis: [0, 0, 0, 0, 0, 0, -34],
            Yacuteigrave: [0, 0, 0, 0, 0, 0, -34],
            Yacuteimacron: [0, 0, 0, 0, 0, 0, -34],
            Ydieresisicircumflex: [0, 0, 0, 0, 0, 0, -34],
            Ydieresisidieresis: [0, 0, 0, 0, 0, 0, -34],
            Ydieresisigrave: [0, 0, 0, 0, 0, 0, -34],
            Ydieresisimacron: [0, 0, 0, 0, 0, 0, -34],
            eg: [0, 0, 0, 0, 0, 0, -40, -15],
            egbreve: [0, 0, 0, 0, 0, 0, -40, -15],
            egcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
            eacuteg: [0, 0, 0, 0, 0, 0, -40, -15],
            eacutegbreve: [0, 0, 0, 0, 0, 0, -40, -15],
            eacutegcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
            ecarong: [0, 0, 0, 0, 0, 0, -40, -15],
            ecarongbreve: [0, 0, 0, 0, 0, 0, -40, -15],
            ecarongcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
            ecircumflexg: [0, 0, 0, 0, 0, 0, -40, -15],
            ecircumflexgbreve: [0, 0, 0, 0, 0, 0, -40, -15],
            ecircumflexgcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
            edieresisg: [0, 0, 0, 0, 0, 0, -40, -15],
            edieresisgbreve: [0, 0, 0, 0, 0, 0, -40, -15],
            edieresisgcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
            edotaccentg: [0, 0, 0, 0, 0, 0, -40, -15],
            edotaccentgbreve: [0, 0, 0, 0, 0, 0, -40, -15],
            edotaccentgcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
            egraveg: [0, 0, 0, 0, 0, 0, -40, -15],
            egravegbreve: [0, 0, 0, 0, 0, 0, -40, -15],
            egravegcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
            emacrong: [0, 0, 0, 0, 0, 0, -40, -15],
            emacrongbreve: [0, 0, 0, 0, 0, 0, -40, -15],
            emacrongcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
            eogonekg: [0, 0, 0, 0, 0, 0, -40, -15],
            eogonekgbreve: [0, 0, 0, 0, 0, 0, -40, -15],
            eogonekgcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
            fiogonek: [0, 0, 0, 0, 0, 0, -20],
            gcomma: [0, 0, 0, 0, 0, 0, -10],
            gbrevecomma: [0, 0, 0, 0, 0, 0, -10],
            gcommaaccentcomma: [0, 0, 0, 0, 0, 0, -10],
            og: [0, 0, 0, 0, 0, 0, -10],
            ogbreve: [0, 0, 0, 0, 0, 0, -10],
            ogcommaaccent: [0, 0, 0, 0, 0, 0, -10],
            oacuteg: [0, 0, 0, 0, 0, 0, -10],
            oacutegbreve: [0, 0, 0, 0, 0, 0, -10],
            oacutegcommaaccent: [0, 0, 0, 0, 0, 0, -10],
            ocircumflexg: [0, 0, 0, 0, 0, 0, -10],
            ocircumflexgbreve: [0, 0, 0, 0, 0, 0, -10],
            ocircumflexgcommaaccent: [0, 0, 0, 0, 0, 0, -10],
            odieresisg: [0, 0, 0, 0, 0, 0, -10],
            odieresisgbreve: [0, 0, 0, 0, 0, 0, -10],
            odieresisgcommaaccent: [0, 0, 0, 0, 0, 0, -10],
            ograveg: [0, 0, 0, 0, 0, 0, -10],
            ogravegbreve: [0, 0, 0, 0, 0, 0, -10],
            ogravegcommaaccent: [0, 0, 0, 0, 0, 0, -10],
            ohungarumlautg: [0, 0, 0, 0, 0, 0, -10],
            ohungarumlautgbreve: [0, 0, 0, 0, 0, 0, -10],
            ohungarumlautgcommaaccent: [0, 0, 0, 0, 0, 0, -10],
            omacrong: [0, 0, 0, 0, 0, 0, -10],
            omacrongbreve: [0, 0, 0, 0, 0, 0, -10],
            omacrongcommaaccent: [0, 0, 0, 0, 0, 0, -10],
            otildeg: [0, 0, 0, 0, 0, 0, -10],
            otildegbreve: [0, 0, 0, 0, 0, 0, -10],
            otildegcommaaccent: [0, 0, 0, 0, 0, 0, -10],
            fiacute: [0, 0, 0, 0, 0, 0, 0, -20],
            ga: [0, 0, 0, 0, 0, 0, 0, -5],
            gaacute: [0, 0, 0, 0, 0, 0, 0, -5],
            gabreve: [0, 0, 0, 0, 0, 0, 0, -5],
            gacircumflex: [0, 0, 0, 0, 0, 0, 0, -5],
            gadieresis: [0, 0, 0, 0, 0, 0, 0, -5],
            gagrave: [0, 0, 0, 0, 0, 0, 0, -5],
            gamacron: [0, 0, 0, 0, 0, 0, 0, -5],
            gaogonek: [0, 0, 0, 0, 0, 0, 0, -5],
            garing: [0, 0, 0, 0, 0, 0, 0, -5],
            gatilde: [0, 0, 0, 0, 0, 0, 0, -5],
            gbrevea: [0, 0, 0, 0, 0, 0, 0, -5],
            gbreveaacute: [0, 0, 0, 0, 0, 0, 0, -5],
            gbreveabreve: [0, 0, 0, 0, 0, 0, 0, -5],
            gbreveacircumflex: [0, 0, 0, 0, 0, 0, 0, -5],
            gbreveadieresis: [0, 0, 0, 0, 0, 0, 0, -5],
            gbreveagrave: [0, 0, 0, 0, 0, 0, 0, -5],
            gbreveamacron: [0, 0, 0, 0, 0, 0, 0, -5],
            gbreveaogonek: [0, 0, 0, 0, 0, 0, 0, -5],
            gbrevearing: [0, 0, 0, 0, 0, 0, 0, -5],
            gbreveatilde: [0, 0, 0, 0, 0, 0, 0, -5],
            gcommaaccenta: [0, 0, 0, 0, 0, 0, 0, -5],
            gcommaaccentaacute: [0, 0, 0, 0, 0, 0, 0, -5],
            gcommaaccentabreve: [0, 0, 0, 0, 0, 0, 0, -5],
            gcommaaccentacircumflex: [0, 0, 0, 0, 0, 0, 0, -5],
            gcommaaccentadieresis: [0, 0, 0, 0, 0, 0, 0, -5],
            gcommaaccentagrave: [0, 0, 0, 0, 0, 0, 0, -5],
            gcommaaccentamacron: [0, 0, 0, 0, 0, 0, 0, -5],
            gcommaaccentaogonek: [0, 0, 0, 0, 0, 0, 0, -5],
            gcommaaccentaring: [0, 0, 0, 0, 0, 0, 0, -5],
            gcommaaccentatilde: [0, 0, 0, 0, 0, 0, 0, -5],
          },
        }),
        ie = function () {
          for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++)
            a[t] = arguments[t];
          var r = Array.from(a).map(function (e) {
            return ("0000" + e.toString(16)).slice(-4);
          });
          return r.join("");
        },
        ne = (function () {
          function e() {}
          e.open = function (e, a, t, r) {
            var c;
            if ("string" === typeof a) {
              if (oe.isStandardFont(a)) return new oe(e, a, r);
              c = A.default.openSync(a, t);
            } else
              x.isBuffer(a)
                ? (c = A.default.create(a, t))
                : a instanceof Uint8Array
                ? (c = A.default.create(x.from(a), t))
                : a instanceof ArrayBuffer
                ? (c = A.default.create(x.from(new Uint8Array(a)), t))
                : "object" === typeof a && (c = a);
            if (null == c)
              throw new Error(
                "Not a supported font format or standard PDF font."
              );
            return new se(e, c, r);
          };
          var a = e.prototype;
          return (
            (a.encode = function (e) {
              throw new Error("Must be implemented by subclasses");
            }),
            (a.widthOfString = function (e) {
              throw new Error("Must be implemented by subclasses");
            }),
            (a.ref = function () {
              return null != this.dictionary
                ? this.dictionary
                : (this.dictionary = this.document.ref());
            }),
            (a.finalize = function () {
              if (!this.embedded && null != this.dictionary)
                return this.embed(), (this.embedded = !0);
            }),
            (a.embed = function () {
              throw new Error("Must be implemented by subclasses");
            }),
            (a.lineHeight = function (e, a) {
              null == a && (a = !1);
              var t = a ? this.lineGap : 0;
              return ((this.ascender + t - this.descender) / 1e3) * e;
            }),
            e
          );
        })(),
        oe = (function (e) {
          return (function (e) {
            function a(a, t, r) {
              var c;
              return (
                ((c = e.call(this) || this).document = a),
                (c.name = t),
                (c.id = r),
                (c.font = te.fromJson(ce[c.name])),
                (c.ascender = c.font.ascender),
                (c.descender = c.font.descender),
                (c.bbox = c.font.bbox),
                (c.lineGap = c.font.lineGap),
                c
              );
            }
            (0, u.Z)(a, e);
            var t = a.prototype;
            return (
              (t.embed = function () {
                return (
                  (this.dictionary.data = {
                    Type: "Font",
                    BaseFont: this.name,
                    Subtype: "Type1",
                    Encoding: "WinAnsiEncoding",
                  }),
                  this.dictionary.end()
                );
              }),
              (t.encode = function (e) {
                for (
                  var a = this.font.encodeText(e),
                    t = this.font.glyphsForString("" + e),
                    r = this.font.advancesForGlyphs(t),
                    c = [],
                    i = 0;
                  i < t.length;
                  i++
                ) {
                  var n = t[i];
                  c.push({
                    xAdvance: r[i],
                    yAdvance: 0,
                    xOffset: 0,
                    yOffset: 0,
                    advanceWidth: this.font.widthOfGlyph(n),
                  });
                }
                return [a, c];
              }),
              (t.encodeGlyphs = function (e) {
                for (var a = [], t = 0, r = Array.from(e); t < r.length; t++) {
                  var c = r[t];
                  a.push(("00" + c.id.toString(16)).slice(-2));
                }
                return a;
              }),
              (t.widthOfString = function (e, a) {
                for (
                  var t = this.font.glyphsForString("" + e),
                    r = this.font.advancesForGlyphs(t),
                    c = 0,
                    i = 0,
                    n = Array.from(r);
                  i < n.length;
                  i++
                ) {
                  c += n[i];
                }
                return c * (a / 1e3);
              }),
              (a.isStandardFont = function (e) {
                return e in ce;
              }),
              a
            );
          })(e);
        })(ne),
        se = (function (e) {
          return (function (e) {
            function a(a, t, r) {
              var c;
              return (
                ((c = e.call(this) || this).document = a),
                (c.font = t),
                (c.id = r),
                (c.subset = c.font.createSubset()),
                (c.unicode = [[0]]),
                (c.widths = [c.font.getGlyph(0).advanceWidth]),
                (c.name = c.font.postscriptName),
                (c.scale = 1e3 / c.font.unitsPerEm),
                (c.ascender = c.font.ascent * c.scale),
                (c.descender = c.font.descent * c.scale),
                (c.xHeight = c.font.xHeight * c.scale),
                (c.capHeight = c.font.capHeight * c.scale),
                (c.lineGap = c.font.lineGap * c.scale),
                (c.bbox = c.font.bbox),
                (c.layoutCache = Object.create(null)),
                c
              );
            }
            (0, u.Z)(a, e);
            var t = a.prototype;
            return (
              (t.layoutRun = function (e, a) {
                for (
                  var t = this.font.layout(e, a), r = 0;
                  r < t.positions.length;
                  r++
                ) {
                  var c = t.positions[r];
                  for (var i in c) c[i] *= this.scale;
                  c.advanceWidth = t.glyphs[r].advanceWidth * this.scale;
                }
                return t;
              }),
              (t.layoutCached = function (e) {
                var a;
                if ((a = this.layoutCache[e])) return a;
                var t = this.layoutRun(e);
                return (this.layoutCache[e] = t), t;
              }),
              (t.layout = function (e, a, t) {
                if ((null == t && (t = !1), a)) return this.layoutRun(e, a);
                for (
                  var r = t ? null : [], c = t ? null : [], i = 0, n = 0, o = 0;
                  o <= e.length;

                ) {
                  var s;
                  if (
                    (o === e.length && n < o) ||
                    ((s = e.charAt(o)), [" ", "\t"].includes(s))
                  ) {
                    var u = this.layoutCached(e.slice(n, ++o));
                    t ||
                      (r.push.apply(r, Array.from(u.glyphs || [])),
                      c.push.apply(c, Array.from(u.positions || []))),
                      (i += u.advanceWidth),
                      (n = o);
                  } else o++;
                }
                return { glyphs: r, positions: c, advanceWidth: i };
              }),
              (t.encode = function (e, a) {
                for (
                  var t = this.layout(e, a),
                    r = t.glyphs,
                    c = t.positions,
                    i = [],
                    n = 0;
                  n < r.length;
                  n++
                ) {
                  var o = r[n],
                    s = this.subset.includeGlyph(o.id);
                  i.push(("0000" + s.toString(16)).slice(-4)),
                    null == this.widths[s] &&
                      (this.widths[s] = o.advanceWidth * this.scale),
                    null == this.unicode[s] &&
                      (this.unicode[s] =
                        this.font._cmapProcessor.codePointsForGlyph(o.id));
                }
                return [i, c];
              }),
              (t.encodeGlyphs = function (e) {
                for (var a = [], t = 0; t < e.length; t++) {
                  var r = e[t],
                    c = this.subset.includeGlyph(r.id);
                  a.push(("0000" + c.toString(16)).slice(-4)),
                    null == this.widths[c] &&
                      (this.widths[c] = r.advanceWidth * this.scale),
                    null == this.unicode[c] &&
                      (this.unicode[c] =
                        this.font._cmapProcessor.codePointsForGlyph(r.id));
                }
                return a;
              }),
              (t.widthOfString = function (e, a, t) {
                return this.layout(e, t, !0).advanceWidth * (a / 1e3);
              }),
              (t.embed = function () {
                var e = null != this.subset.cff,
                  a = this.document.ref();
                e && (a.data.Subtype = "CIDFontType0C"),
                  this.subset.encodeStream().pipe(a);
                var t =
                    ((null != this.font["OS/2"]
                      ? this.font["OS/2"].sFamilyClass
                      : void 0) || 0) >> 8,
                  r = 0;
                this.font.post.isFixedPitch && (r |= 1),
                  1 <= t && t <= 7 && (r |= 2),
                  (r |= 4),
                  10 === t && (r |= 8),
                  this.font.head.macStyle.italic && (r |= 64);
                var c =
                    [0, 1, 2, 3, 4, 5]
                      .map(function (e) {
                        return String.fromCharCode(26 * Math.random() + 65);
                      })
                      .join("") +
                    "+" +
                    this.font.postscriptName,
                  i = this.font.bbox,
                  n = this.document.ref({
                    Type: "FontDescriptor",
                    FontName: c,
                    Flags: r,
                    FontBBox: [
                      i.minX * this.scale,
                      i.minY * this.scale,
                      i.maxX * this.scale,
                      i.maxY * this.scale,
                    ],
                    ItalicAngle: this.font.italicAngle,
                    Ascent: this.ascender,
                    Descent: this.descender,
                    CapHeight:
                      (this.font.capHeight || this.font.ascent) * this.scale,
                    XHeight: (this.font.xHeight || 0) * this.scale,
                    StemV: 0,
                  });
                e ? (n.data.FontFile3 = a) : (n.data.FontFile2 = a), n.end();
                var o = this.document.ref({
                  Type: "Font",
                  Subtype: e ? "CIDFontType0" : "CIDFontType2",
                  BaseFont: c,
                  CIDSystemInfo: {
                    Registry: new String("Adobe"),
                    Ordering: new String("Identity"),
                    Supplement: 0,
                  },
                  FontDescriptor: n,
                  W: [0, this.widths],
                });
                return (
                  o.end(),
                  (this.dictionary.data = {
                    Type: "Font",
                    Subtype: "Type0",
                    BaseFont: c,
                    Encoding: "Identity-H",
                    DescendantFonts: [o],
                    ToUnicode: this.toUnicodeCmap(),
                  }),
                  this.dictionary.end()
                );
              }),
              (t.toUnicodeCmap = function () {
                for (
                  var e = this.document.ref(),
                    a = [],
                    t = 0,
                    r = Array.from(this.unicode);
                  t < r.length;
                  t++
                )
                  for (
                    var c = r[t], i = [], n = 0, o = Array.from(c);
                    n < o.length;
                    n++
                  ) {
                    var s = o[n];
                    s > 65535 &&
                      ((s -= 65536),
                      i.push(ie(((s >>> 10) & 1023) | 55296)),
                      (s = 56320 | (1023 & s))),
                      i.push(ie(s)),
                      a.push("<" + i.join(" ") + ">");
                  }
                return (
                  e.end(
                    "  /CIDInit /ProcSet findresource begin\n  12 dict begin\n  begincmap\n  /CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n  >> def\n  /CMapName /Adobe-Identity-UCS def\n  /CMapType 2 def\n  1 begincodespacerange\n  <0000><ffff>\n  endcodespacerange\n  1 beginbfrange\n  <0000> <" +
                      ie(a.length - 1) +
                      "> [" +
                      a.join(" ") +
                      "]\n  endbfrange\n  endcmap\n  CMapName currentdict /CMap defineresource pop\n  end\n  end  "
                  ),
                  e
                );
              }),
              a
            );
          })(e);
        })(ne),
        ue = {
          initFonts: function () {
            return (
              (this._fontFamilies = {}),
              (this._fontCount = 0),
              (this._fontSize = 12),
              (this._font = null),
              (this._registeredFonts = {}),
              this.font("Helvetica")
            );
          },
          font: function (e, a, t) {
            var r, c;
            if (
              ("number" === typeof a && ((t = a), (a = null)),
              "string" === typeof e && this._registeredFonts[e])
            ) {
              r = e;
              var i = this._registeredFonts[e];
              (e = i.src), (a = i.family);
            } else "string" !== typeof (r = a || e) && (r = null);
            if ((null != t && this.fontSize(t), (c = this._fontFamilies[r])))
              return (this._font = c), this;
            var n = "F" + ++this._fontCount;
            return (
              (this._font = ne.open(this, e, a, n)),
              (c = this._fontFamilies[this._font.name])
                ? ((this._font = c), this)
                : (r && (this._fontFamilies[r] = this._font),
                  this._font.name &&
                    (this._fontFamilies[this._font.name] = this._font),
                  this)
            );
          },
          fontSize: function (e) {
            return (this._fontSize = e), this;
          },
          currentLineHeight: function (e) {
            return (
              null == e && (e = !1), this._font.lineHeight(this._fontSize, e)
            );
          },
          registerFont: function (e, a, t) {
            return (this._registeredFonts[e] = { src: a, family: t }), this;
          },
        },
        me = Y.number,
        le = {
          initText: function () {
            return (
              (this._line = this._line.bind(this)),
              (this.x = 0),
              (this.y = 0),
              (this._lineGap = 0)
            );
          },
          _text: function (e, a, t, r, c) {
            var i = this;
            (e = null == e ? "" : "" + e),
              (r = this._initOptions(a, t, r)).wordSpacing &&
                (e = e.replace(/\s{2,}/g, " "));
            for (var n, o = (0, f.Z)(e.split("\n")); !(n = o()).done; ) {
              var s = n.value;
              r.structParent &&
                r.structParent.add(
                  i.struct(r.structType || "P", [
                    i.markStructureContent(r.structType || "P"),
                  ])
                ),
                c(s, r);
            }
            return this;
          },
          text: function (e, a, t, r) {
            return this._text(e, a, t, r, this._line);
          },
          widthOfString: function (e, a) {
            return (
              void 0 === a && (a = {}),
              this._font.widthOfString(e, this._fontSize, a.features) +
                (a.characterSpacing || 0) * (e.length - 1)
            );
          },
          _initOptions: function (e, a, t) {
            void 0 === e && (e = {}),
              void 0 === t && (t = {}),
              "object" === typeof e && ((t = e), (e = null));
            var r = Object.assign({}, t);
            if (this._textOptions)
              for (var c in this._textOptions) {
                var i = this._textOptions[c];
                "continued" !== c && void 0 === r[c] && (r[c] = i);
              }
            return (
              null != e && (this.x = e),
              null != a && (this.y = a),
              !1 !== r.lineBreak &&
                (null == r.width &&
                  (r.width =
                    this.page.width - this.x - this.page.margins.right),
                (r.width = Math.max(r.width, 0))),
              r.columns || (r.columns = 0),
              null == r.columnGap && (r.columnGap = 18),
              r
            );
          },
          _line: function (e, a) {
            return (
              void 0 === a && (a = {}),
              this._fragment(e, this.x, this.y, a),
              (this.x += this.widthOfString(e))
            );
          },
          _fragment: function (e, a, t, r) {
            if (0 !== (e = ("" + e).replace(/\n/g, "")).length) {
              var c = this._font.encode(e, r.features),
                i = c[0],
                n = c[1],
                o = (this._font.ascender / 1e3) * this._fontSize;
              this._glyphs(i, n, a, t + o, r);
            }
          },
          _glyphs: function (e, a, t, r, c) {
            var i,
              n = this,
              o = [],
              s = this._fontSize / 1e3,
              u = 0,
              m = !1;
            this.save(),
              this.transform(1, 0, 0, -1, 0, this.page.height),
              (r = this.page.height - r),
              null == this.page.fonts[this._font.id] &&
                (this.page.fonts[this._font.id] = this._font.ref()),
              this.addContent("BT"),
              this.addContent("1 0 0 1 " + me(t) + " " + me(r) + " Tm"),
              this.addContent(
                "/" + this._font.id + " " + me(this._fontSize) + " Tf"
              );
            var l = c.fill && c.stroke ? 2 : c.stroke ? 1 : 0;
            l && this.addContent(l + " Tr");
            var d = function (t) {
                if (u < t) {
                  var r = e.slice(u, t).join(""),
                    c = a[t - 1].xAdvance - a[t - 1].advanceWidth;
                  o.push("<" + r + "> " + me(-c));
                }
                return (u = t);
              },
              h = function (e) {
                if ((d(e), o.length > 0))
                  return (
                    n.addContent("[" + o.join(" ") + "] TJ"), (o.length = 0)
                  );
              };
            for (i = 0; i < a.length; i++) {
              var g = a[i];
              g.xOffset || g.yOffset
                ? (h(i),
                  this.addContent(
                    "1 0 0 1 " +
                      me(t + g.xOffset * s) +
                      " " +
                      me(r + g.yOffset * s) +
                      " Tm"
                  ),
                  h(i + 1),
                  (m = !0))
                : (m &&
                    (this.addContent("1 0 0 1 " + me(t) + " " + me(r) + " Tm"),
                    (m = !1)),
                  g.xAdvance - g.advanceWidth !== 0 && d(i + 1)),
                (t += g.xAdvance * s);
            }
            return h(i), this.addContent("ET"), this.restore();
          },
        },
        de = [
          65472, 65473, 65474, 65475, 65477, 65478, 65479, 65480, 65481, 65482,
          65483, 65484, 65485, 65486, 65487,
        ],
        he = (function () {
          function e(e, a) {
            var t;
            if (
              ((this.data = e),
              (this.label = a),
              65496 !== this.data.readUInt16BE(0))
            )
              throw "SOI not found in JPEG";
            for (
              var r = 2;
              r < this.data.length &&
              ((t = this.data.readUInt16BE(r)),
              (r += 2),
              !Array.from(de).includes(t));

            )
              r += this.data.readUInt16BE(r);
            if (!Array.from(de).includes(t)) throw "Invalid JPEG.";
            (r += 2),
              (this.bits = this.data[r++]),
              (this.height = this.data.readUInt16BE(r)),
              (r += 2),
              (this.width = this.data.readUInt16BE(r)),
              (r += 2);
            var c = this.data[r++];
            (this.colorSpace = (function () {
              switch (c) {
                case 1:
                  return "DeviceGray";
                case 3:
                  return "DeviceRGB";
                case 4:
                  return "DeviceCMYK";
              }
            })()),
              (this.obj = null);
          }
          return (
            (e.prototype.embed = function (e) {
              this.obj ||
                ((this.obj = e.ref({
                  Type: "XObject",
                  Subtype: "Image",
                  BitsPerComponent: this.bits,
                  Width: this.width,
                  Height: this.height,
                  ColorSpace: this.colorSpace,
                  Filter: "DCTDecode",
                })),
                "DeviceCMYK" === this.colorSpace &&
                  (this.obj.data.Decode = [1, 0, 1, 0, 1, 0, 1, 0]),
                this.obj.end(this.data),
                (this.data = null));
            }),
            e
          );
        })(),
        ge = (function () {
          function e(e, a) {
            (this.label = a),
              (this.image = new v.default(e)),
              (this.width = this.image.width),
              (this.height = this.image.height),
              (this.imgData = this.image.imgData),
              (this.obj = null);
          }
          var a = e.prototype;
          return (
            (a.embed = function (e) {
              var a = !1;
              if (((this.document = e), !this.obj)) {
                var t = this.image.hasAlphaChannel,
                  r = 1 === this.image.interlaceMethod;
                if (
                  ((this.obj = this.document.ref({
                    Type: "XObject",
                    Subtype: "Image",
                    BitsPerComponent: t ? 8 : this.image.bits,
                    Width: this.width,
                    Height: this.height,
                    Filter: "FlateDecode",
                  })),
                  !t)
                ) {
                  var c = this.document.ref({
                    Predictor: r ? 1 : 15,
                    Colors: this.image.colors,
                    BitsPerComponent: this.image.bits,
                    Columns: this.width,
                  });
                  (this.obj.data.DecodeParms = c), c.end();
                }
                if (0 === this.image.palette.length)
                  this.obj.data.ColorSpace = this.image.colorSpace;
                else {
                  var i = this.document.ref();
                  i.end(x.from(this.image.palette)),
                    (this.obj.data.ColorSpace = [
                      "Indexed",
                      "DeviceRGB",
                      this.image.palette.length / 3 - 1,
                      i,
                    ]);
                }
                if (null != this.image.transparency.grayscale) {
                  var n = this.image.transparency.grayscale;
                  this.obj.data.Mask = [n, n];
                } else if (this.image.transparency.rgb) {
                  for (
                    var o,
                      s = this.image.transparency.rgb,
                      u = [],
                      m = (0, f.Z)(s);
                    !(o = m()).done;

                  ) {
                    var l = o.value;
                    u.push(l, l);
                  }
                  this.obj.data.Mask = u;
                } else {
                  if (this.image.transparency.indexed)
                    return (a = !0), this.loadIndexedAlphaChannel();
                  if (t) return (a = !0), this.splitAlphaChannel();
                }
                if (r && !a) return this.decodeData();
                this.finalize();
              }
            }),
            (a.finalize = function () {
              if (this.alphaChannel) {
                var e = this.document.ref({
                  Type: "XObject",
                  Subtype: "Image",
                  Height: this.height,
                  Width: this.width,
                  BitsPerComponent: 8,
                  Filter: "FlateDecode",
                  ColorSpace: "DeviceGray",
                  Decode: [0, 1],
                });
                e.end(this.alphaChannel), (this.obj.data.SMask = e);
              }
              this.obj.end(this.imgData),
                (this.image = null),
                (this.imgData = null);
            }),
            (a.splitAlphaChannel = function () {
              var e = this;
              return this.image.decodePixels(function (a) {
                for (
                  var t,
                    r,
                    c = e.image.colors,
                    i = e.width * e.height,
                    n = x.alloc(i * c),
                    o = x.alloc(i),
                    s = (r = t = 0),
                    u = a.length,
                    m = 16 === e.image.bits ? 1 : 0;
                  s < u;

                ) {
                  for (var l = 0; l < c; l++) (n[r++] = a[s++]), (s += m);
                  (o[t++] = a[s++]), (s += m);
                }
                return (
                  (e.imgData = g().deflateSync(n)),
                  (e.alphaChannel = g().deflateSync(o)),
                  e.finalize()
                );
              });
            }),
            (a.loadIndexedAlphaChannel = function () {
              var e = this,
                a = this.image.transparency.indexed;
              return this.image.decodePixels(function (t) {
                for (
                  var r = x.alloc(e.width * e.height),
                    c = 0,
                    i = 0,
                    n = t.length;
                  i < n;
                  i++
                )
                  r[c++] = a[t[i]];
                return (e.alphaChannel = g().deflateSync(r)), e.finalize();
              });
            }),
            (a.decodeData = function () {
              var e = this;
              this.image.decodePixels(function (a) {
                (e.imgData = g().deflateSync(a)), e.finalize();
              });
            }),
            e
          );
        })(),
        fe = (function () {
          function e() {}
          return (
            (e.open = function (e, a) {
              var t;
              if (x.isBuffer(e)) t = e;
              else if (e instanceof ArrayBuffer) t = x.from(new Uint8Array(e));
              else {
                var r = /^data:.+;base64,(.*)$/.exec(e);
                r && (t = x.from(r[1], "base64"));
              }
              if (255 === t[0] && 216 === t[1]) return new he(t, a);
              if (137 === t[0] && "PNG" === t.toString("ascii", 1, 4))
                return new ge(t, a);
              throw new Error("Unknown image format.");
            }),
            e
          );
        })(),
        Ae = {
          initImages: function () {
            (this._imageRegistry = {}), (this._imageCount = 0);
          },
          embedImage: function (e) {
            var a;
            return (
              "string" === typeof e && (a = this._imageRegistry[e]),
              a || (a = e.width && e.height ? e : this.openImage(e)),
              a.obj || a.embed(this),
              a
            );
          },
          image: function (e, a, t, r) {
            var c, i, n, o, s, u;
            void 0 === r && (r = {}),
              "object" === typeof a && ((r = a), (a = null));
            var m = e instanceof fe ? e : this.embedImage(e);
            (a = null != (s = null != a ? a : r.x) ? s : this.x),
              (t = null != (u = null != t ? t : r.y) ? u : this.y),
              null == this.page.xobjects[m.label] &&
                (this.page.xobjects[m.label] = m.obj);
            var l = r.width || m.width,
              d = r.height || m.height;
            if (r.width && !r.height) {
              var h = l / m.width;
              (l = m.width * h), (d = m.height * h);
            } else if (r.height && !r.width) {
              var g = d / m.height;
              (l = m.width * g), (d = m.height * g);
            } else if (r.scale)
              (l = m.width * r.scale), (d = m.height * r.scale);
            else if (r.fit) {
              var f = Array.from(r.fit);
              (i = (n = f[0]) / (c = f[1])),
                (o = m.width / m.height) > i
                  ? ((l = n), (d = n / o))
                  : ((d = c), (l = c * o));
            }
            return (
              this.y === t && (this.y += d),
              this.save(),
              this.transform(l, 0, 0, -d, a, t + d),
              this.addContent("/" + m.label + " Do"),
              this.restore(),
              this
            );
          },
          openImage: function (e) {
            var a;
            return (
              "string" === typeof e && (a = this._imageRegistry[e]),
              a ||
                ((a = fe.open(e, "I" + ++this._imageCount)),
                "string" === typeof e && (this._imageRegistry[e] = a)),
              a
            );
          },
        },
        ve = {
          annotate: function (e, a, t, r, c) {
            for (var i in ((c.Type = "Annot"),
            (c.Rect = this._convertRect(e, a, t, r)),
            (c.Border = [0, 0, 0]),
            "Link" === c.Subtype && "undefined" === typeof c.F && (c.F = 4),
            "Link" !== c.Subtype &&
              null == c.C &&
              (c.C = this._normalizeColor(c.color || [0, 0, 0])),
            delete c.color,
            "string" === typeof c.Dest && (c.Dest = new String(c.Dest)),
            c)) {
              var n = c[i];
              c[i[0].toUpperCase() + i.slice(1)] = n;
            }
            var o = this.ref(c);
            return this.page.annotations.push(o), o.end(), this;
          },
          note: function (e, a, t, r, c, i) {
            return (
              void 0 === i && (i = {}),
              (i.Subtype = "Text"),
              (i.Contents = new String(c)),
              (i.Name = "Comment"),
              null == i.color && (i.color = [243, 223, 92]),
              (i.Border = [0, 0, i.borderWidth || 0]),
              delete i.borderWidth,
              this.annotate(e, a, t, r, i)
            );
          },
          goTo: function (e, a, t, r, c, i) {
            return (
              void 0 === i && (i = {}),
              (i.Subtype = "Link"),
              (i.A = this.ref({ S: "GoTo", D: new String(c) })),
              i.A.end(),
              this.annotate(e, a, t, r, i)
            );
          },
          link: function (e, a, t, r, c, i) {
            if (
              (void 0 === i && (i = {}),
              (i.Subtype = "Link"),
              "number" === typeof c)
            ) {
              var n = this._root.data.Pages.data;
              if (!(c >= 0 && c < n.Kids.length))
                throw new Error("The document has no page " + c);
              (i.A = this.ref({
                S: "GoTo",
                D: [n.Kids[c], "XYZ", null, null, null],
              })),
                i.A.end();
            } else
              (i.A = this.ref({ S: "URI", URI: new String(c) })), i.A.end();
            return this.annotate(e, a, t, r, i);
          },
          _markup: function (e, a, t, r, c) {
            void 0 === c && (c = {});
            var i = this._convertRect(e, a, t, r),
              n = i[0],
              o = i[1],
              s = i[2],
              u = i[3];
            return (
              (c.QuadPoints = [n, u, s, u, n, o, s, o]),
              (c.Contents = new String()),
              this.annotate(e, a, t, r, c)
            );
          },
          highlight: function (e, a, t, r, c) {
            return (
              void 0 === c && (c = {}),
              (c.Subtype = "Highlight"),
              null == c.color && (c.color = [241, 238, 148]),
              this._markup(e, a, t, r, c)
            );
          },
          fileAnnotation: function (e, a, t, r, c, i) {
            void 0 === c && (c = {}), void 0 === i && (i = {});
            var n = this.file(c.src, Object.assign({ hidden: !0 }, c));
            return (
              (i.Subtype = "FileAttachment"),
              (i.FS = n),
              i.Contents
                ? (i.Contents = new String(i.Contents))
                : n.data.Desc && (i.Contents = n.data.Desc),
              this.annotate(e, a, t, r, i)
            );
          },
          _convertRect: function (e, a, t, r) {
            var c = a;
            a += r;
            var i = e + t,
              n = this._ctm,
              o = n[0],
              s = n[1],
              u = n[2],
              m = n[3],
              l = n[4],
              d = n[5];
            return [
              (e = o * e + u * a + l),
              (a = s * e + m * a + d),
              (i = o * i + u * c + l),
              (c = s * i + m * c + d),
            ];
          },
        },
        pe = {
          top: 0,
          left: 0,
          zoom: 0,
          fit: !1,
          pageNumber: null,
          expanded: !1,
        },
        ye = (function () {
          function e(e, a, t, r, c) {
            if (
              (void 0 === c && (c = pe),
              (this.document = e),
              (this.options = c),
              (this.outlineData = {}),
              null !== r)
            ) {
              var i = r.data.MediaBox[2],
                n = r.data.MediaBox[3] - (c.top || 0),
                o = i - (c.left || 0),
                s = c.zoom || 0;
              this.outlineData.Dest = c.fit ? [r, "Fit"] : [r, "XYZ", o, n, s];
            }
            null !== a && (this.outlineData.Parent = a),
              null !== t && (this.outlineData.Title = new String(t)),
              (this.dictionary = this.document.ref(this.outlineData)),
              (this.children = []);
          }
          var a = e.prototype;
          return (
            (a.addItem = function (a, t) {
              void 0 === t && (t = pe);
              var r = this.document._root.data.Pages.data.Kids,
                c =
                  null !== t.pageNumber
                    ? r[t.pageNumber]
                    : this.document.page.dictionary,
                i = new e(this.document, this.dictionary, a, c, t);
              return this.children.push(i), i;
            }),
            (a.endOutline = function () {
              if (this.children.length > 0) {
                this.options.expanded &&
                  (this.outlineData.Count = this.children.length);
                var e = this.children[0],
                  a = this.children[this.children.length - 1];
                (this.outlineData.First = e.dictionary),
                  (this.outlineData.Last = a.dictionary);
                for (var t = 0, r = this.children.length; t < r; t++) {
                  var c = this.children[t];
                  t > 0 &&
                    (c.outlineData.Prev = this.children[t - 1].dictionary),
                    t < this.children.length - 1 &&
                      (c.outlineData.Next = this.children[t + 1].dictionary),
                    c.endOutline();
                }
              }
              return this.dictionary.end();
            }),
            e
          );
        })(),
        be = {
          initOutline: function () {
            this.outline = new ye(this, null, null, null);
          },
          endOutline: function () {
            this.outline.endOutline(),
              this.outline.children.length > 0 &&
                ((this._root.data.Outlines = this.outline.dictionary),
                (this._root.data.PageMode =
                  this._root.data.PageMode || "UseOutlines"));
          },
        },
        xe = {
          readOnly: 1,
          required: 2,
          noExport: 4,
          multiline: 4096,
          password: 8192,
          toggleToOffButton: 16384,
          radioButton: 32768,
          pushButton: 65536,
          combo: 131072,
          edit: 262144,
          sort: 524288,
          multiSelect: 2097152,
          noSpell: 4194304,
        },
        Oe = { left: 0, center: 1, right: 2 },
        Te = { value: "V", defaultValue: "DV" },
        ke = { zip: "0", zipPlus4: "1", zip4: "1", phone: "2", ssn: "3" },
        Ce = {
          nDec: 0,
          sepComma: !1,
          negStyle: "MinusBlack",
          currency: "",
          currencyPrepend: !0,
        },
        Ue = { nDec: 0, sepComma: !1 },
        Ye = {
          initForm: function () {
            if (!this._font)
              throw new Error("Must set a font before calling initForm method");
            (this._acroform = { fonts: {}, defaultFont: this._font.name }),
              (this._acroform.fonts[this._font.id] = this._font.ref());
            var e = {
              Fields: [],
              NeedAppearances: !0,
              DA: new String("/" + this._font.id + " 0 Tf 0 g"),
              DR: { Font: {} },
            };
            e.DR.Font[this._font.id] = this._font.ref();
            var a = this.ref(e);
            return (this._root.data.AcroForm = a), this;
          },
          endAcroForm: function () {
            var e = this;
            if (this._root.data.AcroForm) {
              if (
                !Object.keys(this._acroform.fonts).length &&
                !this._acroform.defaultFont
              )
                throw new Error("No fonts specified for PDF form");
              var a = this._root.data.AcroForm.data.DR.Font;
              Object.keys(this._acroform.fonts).forEach(function (t) {
                a[t] = e._acroform.fonts[t];
              }),
                this._root.data.AcroForm.data.Fields.forEach(function (a) {
                  e._endChild(a);
                }),
                this._root.data.AcroForm.end();
            }
            return this;
          },
          _endChild: function (e) {
            var a = this;
            return (
              Array.isArray(e.data.Kids) &&
                (e.data.Kids.forEach(function (e) {
                  a._endChild(e);
                }),
                e.end()),
              this
            );
          },
          formField: function (e, a) {
            void 0 === a && (a = {});
            var t = this._fieldDict(e, null, a),
              r = this.ref(t);
            return this._addToParent(r), r;
          },
          formAnnotation: function (e, a, t, r, c, i, n) {
            void 0 === n && (n = {});
            var o = this._fieldDict(e, a, n);
            (o.Subtype = "Widget"),
              void 0 === o.F && (o.F = 4),
              this.annotate(t, r, c, i, o);
            var s = this.page.annotations[this.page.annotations.length - 1];
            return this._addToParent(s);
          },
          formText: function (e, a, t, r, c, i) {
            return (
              void 0 === i && (i = {}),
              this.formAnnotation(e, "text", a, t, r, c, i)
            );
          },
          formPushButton: function (e, a, t, r, c, i) {
            return (
              void 0 === i && (i = {}),
              this.formAnnotation(e, "pushButton", a, t, r, c, i)
            );
          },
          formCombo: function (e, a, t, r, c, i) {
            return (
              void 0 === i && (i = {}),
              this.formAnnotation(e, "combo", a, t, r, c, i)
            );
          },
          formList: function (e, a, t, r, c, i) {
            return (
              void 0 === i && (i = {}),
              this.formAnnotation(e, "list", a, t, r, c, i)
            );
          },
          formRadioButton: function (e, a, t, r, c, i) {
            return (
              void 0 === i && (i = {}),
              this.formAnnotation(e, "radioButton", a, t, r, c, i)
            );
          },
          formCheckbox: function (e, a, t, r, c, i) {
            return (
              void 0 === i && (i = {}),
              this.formAnnotation(e, "checkbox", a, t, r, c, i)
            );
          },
          _addToParent: function (e) {
            var a = e.data.Parent;
            return (
              a
                ? (a.data.Kids || (a.data.Kids = []), a.data.Kids.push(e))
                : this._root.data.AcroForm.data.Fields.push(e),
              this
            );
          },
          _fieldDict: function (e, a, t) {
            if ((void 0 === t && (t = {}), !this._acroform))
              throw new Error(
                "Call document.initForms() method before adding form elements to document"
              );
            var r = Object.assign({}, t);
            return (
              null !== a && (r = this._resolveType(a, t)),
              (r = this._resolveFlags(r)),
              (r = this._resolveJustify(r)),
              (r = this._resolveFont(r)),
              (r = this._resolveStrings(r)),
              (r = this._resolveColors(r)),
              ((r = this._resolveFormat(r)).T = new String(e)),
              r.parent && ((r.Parent = r.parent), delete r.parent),
              r
            );
          },
          _resolveType: function (e, a) {
            if ("text" === e) a.FT = "Tx";
            else if ("pushButton" === e) (a.FT = "Btn"), (a.pushButton = !0);
            else if ("radioButton" === e) (a.FT = "Btn"), (a.radioButton = !0);
            else if ("checkbox" === e) a.FT = "Btn";
            else if ("combo" === e) (a.FT = "Ch"), (a.combo = !0);
            else {
              if ("list" !== e)
                throw new Error("Invalid form annotation type '" + e + "'");
              a.FT = "Ch";
            }
            return a;
          },
          _resolveFormat: function (e) {
            var a = e.format;
            if (a && a.type) {
              var t,
                r,
                c = "";
              if (void 0 !== ke[a.type])
                (t = "AFSpecial_Keystroke"),
                  (r = "AFSpecial_Format"),
                  (c = ke[a.type]);
              else {
                var i = a.type.charAt(0).toUpperCase() + a.type.slice(1);
                if (
                  ((t = "AF" + i + "_Keystroke"),
                  (r = "AF" + i + "_Format"),
                  "date" === a.type)
                )
                  (t += "Ex"), (c = String(a.param));
                else if ("time" === a.type) c = String(a.param);
                else if ("number" === a.type) {
                  var n = Object.assign({}, Ce, a);
                  c = String(
                    [
                      String(n.nDec),
                      n.sepComma ? "0" : "1",
                      '"' + n.negStyle + '"',
                      "null",
                      '"' + n.currency + '"',
                      String(n.currencyPrepend),
                    ].join(",")
                  );
                } else if ("percent" === a.type) {
                  var o = Object.assign({}, Ue, a);
                  c = String(
                    [String(o.nDec), o.sepComma ? "0" : "1"].join(",")
                  );
                }
              }
              (e.AA = e.AA ? e.AA : {}),
                (e.AA.K = {
                  S: "JavaScript",
                  JS: new String(t + "(" + c + ");"),
                }),
                (e.AA.F = {
                  S: "JavaScript",
                  JS: new String(r + "(" + c + ");"),
                });
            }
            return delete e.format, e;
          },
          _resolveColors: function (e) {
            var a = this._normalizeColor(e.backgroundColor);
            return (
              a && (e.MK || (e.MK = {}), (e.MK.BG = a)),
              (a = this._normalizeColor(e.borderColor)) &&
                (e.MK || (e.MK = {}), (e.MK.BC = a)),
              delete e.backgroundColor,
              delete e.borderColor,
              e
            );
          },
          _resolveFlags: function (e) {
            var a = 0;
            return (
              Object.keys(e).forEach(function (t) {
                xe[t] && ((a |= xe[t]), delete e[t]);
              }),
              0 !== a && ((e.Ff = e.Ff ? e.Ff : 0), (e.Ff |= a)),
              e
            );
          },
          _resolveJustify: function (e) {
            var a = 0;
            return (
              void 0 !== e.align &&
                ("number" === typeof Oe[e.align] && (a = Oe[e.align]),
                delete e.align),
              0 !== a && (e.Q = a),
              e
            );
          },
          _resolveFont: function (e) {
            return (
              null === this._acroform.fonts[this._font.id] &&
                (this._acroform.fonts[this._font.id] = this._font.ref()),
              this._acroform.defaultFont !== this._font.name &&
                ((e.DR = { Font: {} }),
                (e.DR.Font[this._font.id] = this._font.ref()),
                (e.DA = new String("/" + this._font.id + " 0 Tf 0 g"))),
              e
            );
          },
          _resolveStrings: function (e) {
            var a = [];
            function t(e) {
              if (Array.isArray(e))
                for (var t = 0; t < e.length; t++)
                  "string" === typeof e[t]
                    ? a.push(new String(e[t]))
                    : a.push(e[t]);
            }
            return (
              t(e.Opt),
              e.select && (t(e.select), delete e.select),
              a.length && (e.Opt = a),
              Object.keys(Te).forEach(function (a) {
                void 0 !== e[a] && ((e[Te[a]] = e[a]), delete e[a]);
              }),
              ["V", "DV"].forEach(function (a) {
                "string" === typeof e[a] && (e[a] = new String(e[a]));
              }),
              e.MK && e.MK.CA && (e.MK.CA = new String(e.MK.CA)),
              e.label &&
                ((e.MK = e.MK ? e.MK : {}),
                (e.MK.CA = new String(e.label)),
                delete e.label),
              e
            );
          },
        },
        Se = {
          file: function (e, a) {
            void 0 === a && (a = {}), (a.name = a.name || e);
            var t,
              r = { Type: "EmbeddedFile", Params: {} };
            if (!e) throw new Error("No src specified");
            if (x.isBuffer(e)) t = e;
            else if (e instanceof ArrayBuffer) t = x.from(new Uint8Array(e));
            else {
              var c;
              if (!(c = /^data:(.*);base64,(.*)$/.exec(e)))
                throw new Error("Could not find file " + e);
              c[1] && (r.Subtype = c[1].replace("/", "#2F")),
                (t = x.from(c[2], "base64"));
            }
            a.creationDate instanceof Date &&
              (r.Params.CreationDate = a.creationDate),
              a.modifiedDate instanceof Date &&
                (r.Params.ModDate = a.modifiedDate),
              a.type && (r.Subtype = a.type.replace("/", "#2F"));
            var i,
              n = b().MD5(b().lib.WordArray.create(new Uint8Array(t)));
            (r.Params.CheckSum = new String(n)),
              (r.Params.Size = t.byteLength),
              this._fileRegistry || (this._fileRegistry = {});
            var o = this._fileRegistry[a.name];
            o &&
            (function (e, a) {
              if (
                e.Subtype !== a.Subtype ||
                e.Params.CheckSum.toString() !== a.Params.CheckSum.toString() ||
                e.Params.Size !== a.Params.Size ||
                e.Params.CreationDate !== a.Params.CreationDate ||
                e.Params.ModDate !== a.Params.ModDate
              )
                return !1;
              return !0;
            })(r, o)
              ? (i = o.ref)
              : ((i = this.ref(r)).end(t),
                (this._fileRegistry[a.name] = (0, p.Z)({}, r, { ref: i })));
            var s = {
              Type: "Filespec",
              F: new String(a.name),
              EF: { F: i },
              UF: new String(a.name),
            };
            a.description && (s.Desc = new String(a.description));
            var u = this.ref(s);
            return u.end(), a.hidden || this.addNamedEmbeddedFile(a.name, u), u;
          },
        };
      var we = function (e) {
          return e[0].toUpperCase() + e.slice(1);
        },
        _e = (function (e) {
          function a(a) {
            var t;
            switch (
              (void 0 === a && (a = {}),
              ((t = e.call(this) || this).options = a),
              a.pdfVersion)
            ) {
              case "1.4":
                t.version = 1.4;
                break;
              case "1.5":
                t.version = 1.5;
                break;
              case "1.6":
                t.version = 1.6;
                break;
              case "1.7":
              case "1.7ext3":
                t.version = 1.7;
                break;
              default:
                t.version = 1.3;
            }
            (t.compress = null == t.options.compress || t.options.compress),
              (t._pageBuffer = []),
              (t._pageBufferStart = 0),
              (t._offsets = []),
              (t._waiting = 0),
              (t._ended = !1),
              (t._offset = 0);
            var r = t.ref({ Type: "Pages", Count: 0, Kids: [] }),
              c = t.ref({ Dests: new T() });
            if (
              ((t._root = t.ref({ Type: "Catalog", Pages: r, Names: c })),
              t.options.lang &&
                (t._root.data.Lang = new String(t.options.lang)),
              t.options.pageLayout &&
                (t._root.data.PageLayout = we(t.options.pageLayout)),
              t.options.pageMode &&
                (t._root.data.PageMode = we(t.options.pageMode)),
              (t.page = null),
              t.initColor(),
              t.initVector(),
              t.initFonts(),
              t.initText(),
              t.initImages(),
              t.initOutline(),
              (t.info = {
                Producer: "PDFKit",
                Creator: "PDFKit",
                CreationDate: new Date(),
              }),
              t.options.info)
            )
              for (var i in t.options.info) {
                var n = t.options.info[i];
                t.info[i] = n;
              }
            return (
              t.options.displayTitle &&
                (t._root.data.ViewerPreferences = t.ref({
                  DisplayDocTitle: !0,
                })),
              t._write("%PDF-" + t.version),
              t._write("%\xff\xff\xff\xff"),
              !1 !== t.options.autoFirstPage && t.addPage(),
              t
            );
          }
          (0, u.Z)(a, e);
          var t = a.prototype;
          return (
            (t.addPage = function (e) {
              null == e && (e = this.options),
                this.options.bufferPages || this.flushPages(),
                (this.page = new _(this, e)),
                this._pageBuffer.push(this.page);
              var a = this._root.data.Pages.data;
              return (
                a.Kids.push(this.page.dictionary),
                a.Count++,
                (this._ctm = [1, 0, 0, 1, 0, 0]),
                this.transform(1, 0, 0, -1, 0, this.page.height),
                this
              );
            }),
            (t.flushPages = function () {
              var e = this._pageBuffer;
              (this._pageBuffer = []), (this._pageBufferStart += e.length);
              for (var a = 0, t = Array.from(e); a < t.length; a++) {
                t[a].end();
              }
            }),
            (t.addNamedDestination = function (e) {
              for (
                var a = arguments.length,
                  t = new Array(a > 1 ? a - 1 : 0),
                  r = 1;
                r < a;
                r++
              )
                t[r - 1] = arguments[r];
              0 === t.length && (t = ["XYZ", null, null, null]),
                "XYZ" === t[0] &&
                  null !== t[2] &&
                  (t[2] = this.page.height - t[2]),
                t.unshift(this.page.dictionary),
                this._root.data.Names.data.Dests.add(e, t);
            }),
            (t.addNamedEmbeddedFile = function (e, a) {
              this._root.data.Names.data.EmbeddedFiles ||
                (this._root.data.Names.data.EmbeddedFiles = new T({
                  limits: !1,
                })),
                this._root.data.Names.data.EmbeddedFiles.add(e, a);
            }),
            (t.addNamedJavaScript = function (e, a) {
              this._root.data.Names.data.JavaScript ||
                (this._root.data.Names.data.JavaScript = new T());
              var t = { JS: new String(a), S: "JavaScript" };
              this._root.data.Names.data.JavaScript.add(e, t);
            }),
            (t.ref = function (e) {
              var a = new O(this, this._offsets.length + 1, e);
              return this._offsets.push(null), this._waiting++, a;
            }),
            (t._read = function () {}),
            (t._write = function (e) {
              return (
                x.isBuffer(e) || (e = x.from(e + "\n", "binary")),
                this.push(e),
                (this._offset += e.length)
              );
            }),
            (t.addContent = function (e) {
              return this.page.write(e), this;
            }),
            (t._refEnd = function (e) {
              if (
                ((this._offsets[e.id - 1] = e.offset),
                0 === --this._waiting && this._ended)
              )
                return this._finalize(), (this._ended = !1);
            }),
            (t.end = function () {
              for (var e in (this.flushPages(),
              (this._info = this.ref()),
              this.info)) {
                var a = this.info[e];
                "string" === typeof a && (a = new String(a));
                var t = this.ref(a);
                t.end(), (this._info.data[e] = t);
              }
              for (var r in (this._info.end(), this._fontFamilies)) {
                this._fontFamilies[r].finalize();
              }
              if (
                (this.endOutline(),
                this._root.end(),
                this._root.data.Pages.end(),
                this._root.data.Names.end(),
                this.endAcroForm(),
                this._root.data.ViewerPreferences &&
                  this._root.data.ViewerPreferences.end(),
                0 === this._waiting)
              )
                return this._finalize();
              this._ended = !0;
            }),
            (t._finalize = function (e) {
              var a = this._offset;
              this._write("xref"),
                this._write("0 " + (this._offsets.length + 1)),
                this._write("0000000000 65535 f ");
              for (
                var t = 0, r = Array.from(this._offsets);
                t < r.length;
                t++
              ) {
                var c = r[t];
                (c = ("0000000000" + c).slice(-10)),
                  this._write(c + " 00000 n ");
              }
              return (
                this._write("trailer"),
                this._write(
                  Y.convert({
                    Size: this._offsets.length + 1,
                    Root: this._root,
                    Info: this._info,
                  })
                ),
                this._write("startxref"),
                this._write("" + a),
                this._write("%%EOF"),
                this.push(null)
              );
            }),
            (t.toString = function () {
              return "[object PDFDocument]";
            }),
            a
          );
        })(l().Readable),
        Fe = function (e) {
          return (function () {
            var a = [];
            for (var t in e) {
              var r = e[t];
              a.push((_e.prototype[t] = r));
            }
            return a;
          })();
        };
      Fe(z), Fe($), Fe(ue), Fe(le), Fe(Ae), Fe(ve), Fe(be), Fe(Ye), Fe(Se);
    },
  },
]);
