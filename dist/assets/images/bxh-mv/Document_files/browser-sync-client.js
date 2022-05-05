window.___browserSync___ = {};
___browserSync___.socketConfig = {
  reconnectionAttempts: 50,
  path: "/browser-sync/socket.io",
};
___browserSync___.socketUrl = "" + location.host + "/browser-sync";
___browserSync___.options = {
  logLevel: "info",
  plugins: [],
  port: 3000,
  snippetOptions: {
    async: true,
    whitelist: [],
    blacklist: [],
    rule: { match: {} },
  },
  reloadDebounce: 500,
  mode: "server",
  scriptPaths: {
    path: "/browser-sync/browser-sync-client.js",
    versioned: "/browser-sync/browser-sync-client.js?v=2.27.9",
  },
  server: { baseDir: ["./dist"], serveStaticOptions: { index: "index.html" } },
  logFileChanges: true,
  reloadThrottle: 0,
  clientEvents: [
    "scroll",
    "scroll:element",
    "input:text",
    "input:toggles",
    "form:submit",
    "form:reset",
    "click",
  ],
  urls: { local: "http://localhost:3000", external: "http://192.168.1.6:3000" },
  hostnameSuffix: false,
  scrollElements: [],
  scheme: "http",
  startPath: null,
  single: false,
  host: null,
  codeSync: true,
  watchEvents: ["change"],
  browser: "default",
  notify: true,
  open: "local",
  reloadDelay: 0,
  minify: true,
  rewriteRules: [],
  injectFileTypes: ["css", "png", "jpg", "jpeg", "svg", "gif", "webp", "map"],
  cors: false,
  proxy: false,
  tagNames: {
    jpg: "img",
    css: "link",
    svg: "img",
    gif: "img",
    jpeg: "img",
    js: "script",
    png: "img",
    scss: "link",
    less: "link",
  },
  scrollRestoreTechnique: "window.name",
  watch: false,
  watchOptions: {
    ignoreInitial: true,
    cwd: "/Users/phan.anh.tuan/Documents/workspace/nct-pug-project",
  },
  cwd: "/Users/phan.anh.tuan/Documents/workspace/nct-pug-project",
  logConnections: false,
  ghostMode: {
    clicks: true,
    scroll: true,
    location: true,
    forms: { submit: true, inputs: true, toggles: true },
  },
  middleware: [
    { route: "", id: "Browsersync Server ServeStatic Middleware - 0" },
  ],
  ignore: [],
  injectChanges: true,
  excludedFileTypes: [
    "js",
    "css",
    "pdf",
    "map",
    "svg",
    "ico",
    "woff",
    "json",
    "eot",
    "ttf",
    "png",
    "jpg",
    "jpeg",
    "webp",
    "gif",
    "mp4",
    "mp3",
    "3gp",
    "ogg",
    "ogv",
    "webm",
    "m4a",
    "flv",
    "wmv",
    "avi",
    "swf",
    "scss",
  ],
  online: true,
  socket: {
    socketIoOptions: { log: false },
    socketIoClientConfig: { reconnectionAttempts: 50 },
    path: "/browser-sync/socket.io",
    clientPath: "/browser-sync",
    namespace: "/browser-sync",
    clients: { heartbeatTimeout: 5000 },
  },
  ui: { port: 3001 },
  logPrefix: "Browsersync",
  scrollThrottle: 0,
  reloadOnRestart: false,
  localOnly: false,
  files: { core: { globs: [], objs: [] } },
  version: "2.27.9",
  logSnippet: true,
  injectNotification: false,
  snippet:
    '<script id="__bs_script__">//<![CDATA[\n    document.write("<script async src=\'/browser-sync/browser-sync-client.js?v=2.27.9\'><\\/script>".replace("HOST", location.hostname));\n//]]></script>\n',
  timestamps: true,
  serveStatic: [],
  scrollElementMapping: [],
  scrollProportionally: true,
  xip: false,
};
if (
  location.protocol == "https:" &&
  /^http:/.test(___browserSync___.socketUrl)
) {
  ___browserSync___.socketUrl = ___browserSync___.socketUrl.replace(
    /^http:/,
    "https:"
  );
}
(() => {
  var t = {
      3426: (t, e, r) => {
        "use strict";
        r.r(e), r.d(e, { decode: () => c, encode: () => s });
        for (
          var n =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            o = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
            i = 0;
          i < n.length;
          i++
        )
          o[n.charCodeAt(i)] = i;
        var s = function (t) {
            var e,
              r = new Uint8Array(t),
              o = r.length,
              i = "";
            for (e = 0; e < o; e += 3)
              (i += n[r[e] >> 2]),
                (i += n[((3 & r[e]) << 4) | (r[e + 1] >> 4)]),
                (i += n[((15 & r[e + 1]) << 2) | (r[e + 2] >> 6)]),
                (i += n[63 & r[e + 2]]);
            return (
              o % 3 == 2
                ? (i = i.substring(0, i.length - 1) + "=")
                : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="),
              i
            );
          },
          c = function (t) {
            var e,
              r,
              n,
              i,
              s,
              c = 0.75 * t.length,
              a = t.length,
              u = 0;
            "=" === t[t.length - 1] && (c--, "=" === t[t.length - 2] && c--);
            var l = new ArrayBuffer(c),
              p = new Uint8Array(l);
            for (e = 0; e < a; e += 4)
              (r = o[t.charCodeAt(e)]),
                (n = o[t.charCodeAt(e + 1)]),
                (i = o[t.charCodeAt(e + 2)]),
                (s = o[t.charCodeAt(e + 3)]),
                (p[u++] = (r << 2) | (n >> 4)),
                (p[u++] = ((15 & n) << 4) | (i >> 2)),
                (p[u++] = ((3 & i) << 6) | (63 & s));
            return l;
          };
      },
      3063: (t, e) => {
        function r(t) {
          if (t)
            return (function (t) {
              for (var e in r.prototype) t[e] = r.prototype[e];
              return t;
            })(t);
        }
        (e.Emitter = r),
          (r.prototype.on = r.prototype.addEventListener =
            function (t, e) {
              return (
                (this._callbacks = this._callbacks || {}),
                (this._callbacks["$" + t] =
                  this._callbacks["$" + t] || []).push(e),
                this
              );
            }),
          (r.prototype.once = function (t, e) {
            function r() {
              this.off(t, r), e.apply(this, arguments);
            }
            return (r.fn = e), this.on(t, r), this;
          }),
          (r.prototype.off =
            r.prototype.removeListener =
            r.prototype.removeAllListeners =
            r.prototype.removeEventListener =
              function (t, e) {
                if (
                  ((this._callbacks = this._callbacks || {}),
                  0 == arguments.length)
                )
                  return (this._callbacks = {}), this;
                var r,
                  n = this._callbacks["$" + t];
                if (!n) return this;
                if (1 == arguments.length)
                  return delete this._callbacks["$" + t], this;
                for (var o = 0; o < n.length; o++)
                  if ((r = n[o]) === e || r.fn === e) {
                    n.splice(o, 1);
                    break;
                  }
                return 0 === n.length && delete this._callbacks["$" + t], this;
              }),
          (r.prototype.emit = function (t) {
            this._callbacks = this._callbacks || {};
            for (
              var e = new Array(arguments.length - 1),
                r = this._callbacks["$" + t],
                n = 1;
              n < arguments.length;
              n++
            )
              e[n - 1] = arguments[n];
            if (r) {
              n = 0;
              for (var o = (r = r.slice(0)).length; n < o; ++n)
                r[n].apply(this, e);
            }
            return this;
          }),
          (r.prototype.emitReserved = r.prototype.emit),
          (r.prototype.listeners = function (t) {
            return (
              (this._callbacks = this._callbacks || {}),
              this._callbacks["$" + t] || []
            );
          }),
          (r.prototype.hasListeners = function (t) {
            return !!this.listeners(t).length;
          });
      },
      3010: (t) => {
        function e(t) {
          (t = t || {}),
            (this.ms = t.min || 100),
            (this.max = t.max || 1e4),
            (this.factor = t.factor || 2),
            (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
            (this.attempts = 0);
        }
        (t.exports = e),
          (e.prototype.duration = function () {
            var t = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
              var e = Math.random(),
                r = Math.floor(e * this.jitter * t);
              t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r;
            }
            return 0 | Math.min(t, this.max);
          }),
          (e.prototype.reset = function () {
            this.attempts = 0;
          }),
          (e.prototype.setMin = function (t) {
            this.ms = t;
          }),
          (e.prototype.setMax = function (t) {
            this.max = t;
          }),
          (e.prototype.setJitter = function (t) {
            this.jitter = t;
          });
      },
      2204: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default =
            "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : Function("return this")());
      },
      3401: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.installTimerFunctions =
            e.transports =
            e.Transport =
            e.protocol =
            e.Socket =
              void 0);
        const n = r(7164);
        Object.defineProperty(e, "Socket", {
          enumerable: !0,
          get: function () {
            return n.Socket;
          },
        }),
          (e.protocol = n.Socket.protocol);
        var o = r(7651);
        Object.defineProperty(e, "Transport", {
          enumerable: !0,
          get: function () {
            return o.Transport;
          },
        });
        var i = r(9174);
        Object.defineProperty(e, "transports", {
          enumerable: !0,
          get: function () {
            return i.transports;
          },
        });
        var s = r(8367);
        Object.defineProperty(e, "installTimerFunctions", {
          enumerable: !0,
          get: function () {
            return s.installTimerFunctions;
          },
        });
      },
      7164: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Socket = void 0);
        const o = r(9174),
          i = r(8367),
          s = n(r(1830)),
          c = n(r(4187)),
          a = n(r(4802)),
          u = r(3063),
          l = r(585),
          p = (0, a.default)("engine.io-client:socket");
        class h extends u.Emitter {
          constructor(t, e = {}) {
            super(),
              t && "object" == typeof t && ((e = t), (t = null)),
              t
                ? ((t = (0, c.default)(t)),
                  (e.hostname = t.host),
                  (e.secure = "https" === t.protocol || "wss" === t.protocol),
                  (e.port = t.port),
                  t.query && (e.query = t.query))
                : e.host && (e.hostname = (0, c.default)(e.host).host),
              (0, i.installTimerFunctions)(this, e),
              (this.secure =
                null != e.secure
                  ? e.secure
                  : "undefined" != typeof location &&
                    "https:" === location.protocol),
              e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
              (this.hostname =
                e.hostname ||
                ("undefined" != typeof location
                  ? location.hostname
                  : "localhost")),
              (this.port =
                e.port ||
                ("undefined" != typeof location && location.port
                  ? location.port
                  : this.secure
                  ? "443"
                  : "80")),
              (this.transports = e.transports || ["polling", "websocket"]),
              (this.readyState = ""),
              (this.writeBuffer = []),
              (this.prevBufferLen = 0),
              (this.opts = Object.assign(
                {
                  path: "/engine.io",
                  agent: !1,
                  withCredentials: !1,
                  upload: !0,
                  timestampParam: "t",
                  rememberUpgrade: !1,
                  rejectUnauthorized: !0,
                  perMessageDeflate: { threshold: 1024 },
                  transportOptions: {},
                  closeOnBeforeunload: !0,
                },
                e
              )),
              (this.opts.path = this.opts.path.replace(/\/$/, "") + "/"),
              "string" == typeof this.opts.query &&
                (this.opts.query = s.default.decode(this.opts.query)),
              (this.id = null),
              (this.uploads = null),
              (this.pingInterval = null),
              (this.pingTimeout = null),
              (this.pingTimeoutTimer = null),
              "function" == typeof addEventListener &&
                (this.opts.closeOnBeforeunload &&
                  addEventListener(
                    "beforeunload",
                    () => {
                      this.transport &&
                        (this.transport.removeAllListeners(),
                        this.transport.close());
                    },
                    !1
                  ),
                "localhost" !== this.hostname &&
                  ((this.offlineEventListener = () => {
                    this.onClose("transport close");
                  }),
                  addEventListener("offline", this.offlineEventListener, !1))),
              this.open();
          }
          createTransport(t) {
            p('creating transport "%s"', t);
            const e = (function (t) {
              const e = {};
              for (let r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              return e;
            })(this.opts.query);
            (e.EIO = l.protocol),
              (e.transport = t),
              this.id && (e.sid = this.id);
            const r = Object.assign(
              {},
              this.opts.transportOptions[t],
              this.opts,
              {
                query: e,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port,
              }
            );
            return p("options: %j", r), new o.transports[t](r);
          }
          open() {
            let t;
            if (
              this.opts.rememberUpgrade &&
              h.priorWebsocketSuccess &&
              -1 !== this.transports.indexOf("websocket")
            )
              t = "websocket";
            else {
              if (0 === this.transports.length)
                return void this.setTimeoutFn(() => {
                  this.emitReserved("error", "No transports available");
                }, 0);
              t = this.transports[0];
            }
            this.readyState = "opening";
            try {
              t = this.createTransport(t);
            } catch (t) {
              return (
                p("error while creating transport: %s", t),
                this.transports.shift(),
                void this.open()
              );
            }
            t.open(), this.setTransport(t);
          }
          setTransport(t) {
            p("setting transport %s", t.name),
              this.transport &&
                (p("clearing existing transport %s", this.transport.name),
                this.transport.removeAllListeners()),
              (this.transport = t),
              t
                .on("drain", this.onDrain.bind(this))
                .on("packet", this.onPacket.bind(this))
                .on("error", this.onError.bind(this))
                .on("close", () => {
                  this.onClose("transport close");
                });
          }
          probe(t) {
            p('probing transport "%s"', t);
            let e = this.createTransport(t),
              r = !1;
            h.priorWebsocketSuccess = !1;
            const n = () => {
              r ||
                (p('probe transport "%s" opened', t),
                e.send([{ type: "ping", data: "probe" }]),
                e.once("packet", (n) => {
                  if (!r)
                    if ("pong" === n.type && "probe" === n.data) {
                      if (
                        (p('probe transport "%s" pong', t),
                        (this.upgrading = !0),
                        this.emitReserved("upgrading", e),
                        !e)
                      )
                        return;
                      (h.priorWebsocketSuccess = "websocket" === e.name),
                        p(
                          'pausing current transport "%s"',
                          this.transport.name
                        ),
                        this.transport.pause(() => {
                          r ||
                            ("closed" !== this.readyState &&
                              (p(
                                "changing transport and sending upload packet"
                              ),
                              u(),
                              this.setTransport(e),
                              e.send([{ type: "upload" }]),
                              this.emitReserved("upload", e),
                              (e = null),
                              (this.upgrading = !1),
                              this.flush()));
                        });
                    } else {
                      p('probe transport "%s" failed', t);
                      const r = new Error("probe error");
                      (r.transport = e.name),
                        this.emitReserved("uploadError", r);
                    }
                }));
            };
            function o() {
              r || ((r = !0), u(), e.close(), (e = null));
            }
            const i = (r) => {
              const n = new Error("probe error: " + r);
              (n.transport = e.name),
                o(),
                p('probe transport "%s" failed because of error: %s', t, r),
                this.emitReserved("uploadError", n);
            };
            function s() {
              i("transport closed");
            }
            function c() {
              i("socket closed");
            }
            function a(t) {
              e &&
                t.name !== e.name &&
                (p('"%s" works - aborting "%s"', t.name, e.name), o());
            }
            const u = () => {
              e.removeListener("open", n),
                e.removeListener("error", i),
                e.removeListener("close", s),
                this.off("close", c),
                this.off("upgrading", a);
            };
            e.once("open", n),
              e.once("error", i),
              e.once("close", s),
              this.once("close", c),
              this.once("upgrading", a),
              e.open();
          }
          onOpen() {
            if (
              (p("socket open"),
              (this.readyState = "open"),
              (h.priorWebsocketSuccess = "websocket" === this.transport.name),
              this.emitReserved("open"),
              this.flush(),
              "open" === this.readyState &&
                this.opts.upload &&
                this.transport.pause)
            ) {
              p("starting upload probes");
              let t = 0;
              const e = this.uploads.length;
              for (; t < e; t++) this.probe(this.uploads[t]);
            }
          }
          onPacket(t) {
            if (
              "opening" === this.readyState ||
              "open" === this.readyState ||
              "closing" === this.readyState
            )
              switch (
                (p('socket receive: type "%s", data "%s"', t.type, t.data),
                this.emitReserved("packet", t),
                this.emitReserved("heartbeat"),
                t.type)
              ) {
                case "open":
                  this.onHandshake(JSON.parse(t.data));
                  break;
                case "ping":
                  this.resetPingTimeout(),
                    this.sendPacket("pong"),
                    this.emitReserved("ping"),
                    this.emitReserved("pong");
                  break;
                case "error":
                  const e = new Error("server error");
                  (e.code = t.data), this.onError(e);
                  break;
                case "message":
                  this.emitReserved("data", t.data),
                    this.emitReserved("message", t.data);
              }
            else
              p('packet received with socket readyState "%s"', this.readyState);
          }
          onHandshake(t) {
            this.emitReserved("handshake", t),
              (this.id = t.sid),
              (this.transport.query.sid = t.sid),
              (this.uploads = this.filterUpgrades(t.uploads)),
              (this.pingInterval = t.pingInterval),
              (this.pingTimeout = t.pingTimeout),
              this.onOpen(),
              "closed" !== this.readyState && this.resetPingTimeout();
          }
          resetPingTimeout() {
            this.clearTimeoutFn(this.pingTimeoutTimer),
              (this.pingTimeoutTimer = this.setTimeoutFn(() => {
                this.onClose("ping timeout");
              }, this.pingInterval + this.pingTimeout)),
              this.opts.autoUnref && this.pingTimeoutTimer.unref();
          }
          onDrain() {
            this.writeBuffer.splice(0, this.prevBufferLen),
              (this.prevBufferLen = 0),
              0 === this.writeBuffer.length
                ? this.emitReserved("drain")
                : this.flush();
          }
          flush() {
            "closed" !== this.readyState &&
              this.transport.writable &&
              !this.upgrading &&
              this.writeBuffer.length &&
              (p("flushing %d packets in socket", this.writeBuffer.length),
              this.transport.send(this.writeBuffer),
              (this.prevBufferLen = this.writeBuffer.length),
              this.emitReserved("flush"));
          }
          write(t, e, r) {
            return this.sendPacket("message", t, e, r), this;
          }
          send(t, e, r) {
            return this.sendPacket("message", t, e, r), this;
          }
          sendPacket(t, e, r, n) {
            if (
              ("function" == typeof e && ((n = e), (e = void 0)),
              "function" == typeof r && ((n = r), (r = null)),
              "closing" === this.readyState || "closed" === this.readyState)
            )
              return;
            (r = r || {}).compress = !1 !== r.compress;
            const o = { type: t, data: e, options: r };
            this.emitReserved("packetCreate", o),
              this.writeBuffer.push(o),
              n && this.once("flush", n),
              this.flush();
          }
          close() {
            const t = () => {
                this.onClose("forced close"),
                  p("socket closing - telling transport to close"),
                  this.transport.close();
              },
              e = () => {
                this.off("upload", e), this.off("uploadError", e), t();
              },
              r = () => {
                this.once("upload", e), this.once("uploadError", e);
              };
            return (
              ("opening" !== this.readyState && "open" !== this.readyState) ||
                ((this.readyState = "closing"),
                this.writeBuffer.length
                  ? this.once("drain", () => {
                      this.upgrading ? r() : t();
                    })
                  : this.upgrading
                  ? r()
                  : t()),
              this
            );
          }
          onError(t) {
            p("socket error %j", t),
              (h.priorWebsocketSuccess = !1),
              this.emitReserved("error", t),
              this.onClose("transport error", t);
          }
          onClose(t, e) {
            ("opening" !== this.readyState &&
              "open" !== this.readyState &&
              "closing" !== this.readyState) ||
              (p('socket close with reason: "%s"', t),
              this.clearTimeoutFn(this.pingTimeoutTimer),
              this.transport.removeAllListeners("close"),
              this.transport.close(),
              this.transport.removeAllListeners(),
              "function" == typeof removeEventListener &&
                removeEventListener("offline", this.offlineEventListener, !1),
              (this.readyState = "closed"),
              (this.id = null),
              this.emitReserved("close", t, e),
              (this.writeBuffer = []),
              (this.prevBufferLen = 0));
          }
          filterUpgrades(t) {
            const e = [];
            let r = 0;
            const n = t.length;
            for (; r < n; r++) ~this.transports.indexOf(t[r]) && e.push(t[r]);
            return e;
          }
        }
        (e.Socket = h), (h.protocol = l.protocol);
      },
      7651: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Transport = void 0);
        const o = r(585),
          i = r(3063),
          s = r(8367),
          c = (0, n(r(4802)).default)("engine.io-client:transport");
        class a extends i.Emitter {
          constructor(t) {
            super(),
              (this.writable = !1),
              (0, s.installTimerFunctions)(this, t),
              (this.opts = t),
              (this.query = t.query),
              (this.readyState = ""),
              (this.socket = t.socket);
          }
          onError(t, e) {
            const r = new Error(t);
            return (
              (r.type = "TransportError"),
              (r.description = e),
              super.emit("error", r),
              this
            );
          }
          open() {
            return (
              ("closed" !== this.readyState && "" !== this.readyState) ||
                ((this.readyState = "opening"), this.doOpen()),
              this
            );
          }
          close() {
            return (
              ("opening" !== this.readyState && "open" !== this.readyState) ||
                (this.doClose(), this.onClose()),
              this
            );
          }
          send(t) {
            "open" === this.readyState
              ? this.write(t)
              : c("transport is not open, discarding packets");
          }
          onOpen() {
            (this.readyState = "open"),
              (this.writable = !0),
              super.emit("open");
          }
          onData(t) {
            const e = (0, o.decodePacket)(t, this.socket.binaryType);
            this.onPacket(e);
          }
          onPacket(t) {
            super.emit("packet", t);
          }
          onClose() {
            (this.readyState = "closed"), super.emit("close");
          }
        }
        e.Transport = a;
      },
      9174: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.transports = void 0);
        const n = r(5431),
          o = r(1173);
        e.transports = { websocket: o.WS, polling: n.XHR };
      },
      5431: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Request = e.XHR = void 0);
        const o = n(r(4850)),
          i = n(r(4802)),
          s = n(r(2204)),
          c = r(8367),
          a = r(3063),
          u = r(8898),
          l = (0, i.default)("engine.io-client:polling-xhr");
        function p() {}
        const h = null != new o.default({ xdomain: !1 }).responseType;
        class f extends u.Polling {
          constructor(t) {
            if ((super(t), "undefined" != typeof location)) {
              const e = "https:" === location.protocol;
              let r = location.port;
              r || (r = e ? "443" : "80"),
                (this.xd =
                  ("undefined" != typeof location &&
                    t.hostname !== location.hostname) ||
                  r !== t.port),
                (this.xs = t.secure !== e);
            }
            const e = t && t.forceBase64;
            this.supportsBinary = h && !e;
          }
          request(t = {}) {
            return (
              Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts),
              new d(this.uri(), t)
            );
          }
          doWrite(t, e) {
            const r = this.request({ method: "POST", data: t });
            r.on("success", e),
              r.on("error", (t) => {
                this.onError("xhr post error", t);
              });
          }
          doPoll() {
            l("xhr poll");
            const t = this.request();
            t.on("data", this.onData.bind(this)),
              t.on("error", (t) => {
                this.onError("xhr poll error", t);
              }),
              (this.pollXhr = t);
          }
        }
        e.XHR = f;
        class d extends a.Emitter {
          constructor(t, e) {
            super(),
              (0, c.installTimerFunctions)(this, e),
              (this.opts = e),
              (this.method = e.method || "GET"),
              (this.uri = t),
              (this.async = !1 !== e.async),
              (this.data = void 0 !== e.data ? e.data : null),
              this.create();
          }
          create() {
            const t = (0, c.pick)(
              this.opts,
              "agent",
              "pfx",
              "key",
              "passphrase",
              "cert",
              "ca",
              "ciphers",
              "rejectUnauthorized",
              "autoUnref"
            );
            (t.xdomain = !!this.opts.xd), (t.xscheme = !!this.opts.xs);
            const e = (this.xhr = new o.default(t));
            try {
              l("xhr open %s: %s", this.method, this.uri),
                e.open(this.method, this.uri, this.async);
              try {
                if (this.opts.extraHeaders) {
                  e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0);
                  for (let t in this.opts.extraHeaders)
                    this.opts.extraHeaders.hasOwnProperty(t) &&
                      e.setRequestHeader(t, this.opts.extraHeaders[t]);
                }
              } catch (t) {}
              if ("POST" === this.method)
                try {
                  e.setRequestHeader(
                    "Content-type",
                    "text/plain;charset=UTF-8"
                  );
                } catch (t) {}
              try {
                e.setRequestHeader("Accept", "*/*");
              } catch (t) {}
              "withCredentials" in e &&
                (e.withCredentials = this.opts.withCredentials),
                this.opts.requestTimeout &&
                  (e.timeout = this.opts.requestTimeout),
                (e.onreadystatechange = () => {
                  4 === e.readyState &&
                    (200 === e.status || 1223 === e.status
                      ? this.onLoad()
                      : this.setTimeoutFn(() => {
                          this.onError(
                            "number" == typeof e.status ? e.status : 0
                          );
                        }, 0));
                }),
                l("xhr data %s", this.data),
                e.send(this.data);
            } catch (t) {
              return void this.setTimeoutFn(() => {
                this.onError(t);
              }, 0);
            }
            "undefined" != typeof document &&
              ((this.index = d.requestsCount++),
              (d.requests[this.index] = this));
          }
          onSuccess() {
            this.emit("success"), this.cleanup();
          }
          onData(t) {
            this.emit("data", t), this.onSuccess();
          }
          onError(t) {
            this.emit("error", t), this.cleanup(!0);
          }
          cleanup(t) {
            if (void 0 !== this.xhr && null !== this.xhr) {
              if (((this.xhr.onreadystatechange = p), t))
                try {
                  this.xhr.abort();
                } catch (t) {}
              "undefined" != typeof document && delete d.requests[this.index],
                (this.xhr = null);
            }
          }
          onLoad() {
            const t = this.xhr.responseText;
            null !== t && this.onData(t);
          }
          abort() {
            this.cleanup();
          }
        }
        if (
          ((e.Request = d),
          (d.requestsCount = 0),
          (d.requests = {}),
          "undefined" != typeof document)
        )
          if ("function" == typeof attachEvent) attachEvent("onunload", y);
          else if ("function" == typeof addEventListener) {
            const t = "onpagehide" in s.default ? "pagehide" : "unload";
            addEventListener(t, y, !1);
          }
        function y() {
          for (let t in d.requests)
            d.requests.hasOwnProperty(t) && d.requests[t].abort();
        }
      },
      8898: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Polling = void 0);
        const o = r(7651),
          i = n(r(4802)),
          s = n(r(2281)),
          c = n(r(1830)),
          a = r(585),
          u = (0, i.default)("engine.io-client:polling");
        class l extends o.Transport {
          constructor() {
            super(...arguments), (this.polling = !1);
          }
          get name() {
            return "polling";
          }
          doOpen() {
            this.poll();
          }
          pause(t) {
            this.readyState = "pausing";
            const e = () => {
              u("paused"), (this.readyState = "paused"), t();
            };
            if (this.polling || !this.writable) {
              let t = 0;
              this.polling &&
                (u("we are currently polling - waiting to pause"),
                t++,
                this.once("pollComplete", function () {
                  u("pre-pause polling complete"), --t || e();
                })),
                this.writable ||
                  (u("we are currently writing - waiting to pause"),
                  t++,
                  this.once("drain", function () {
                    u("pre-pause writing complete"), --t || e();
                  }));
            } else e();
          }
          poll() {
            u("polling"), (this.polling = !0), this.doPoll(), this.emit("poll");
          }
          onData(t) {
            u("polling got data %s", t),
              (0, a.decodePayload)(t, this.socket.binaryType).forEach((t) => {
                if (
                  ("opening" === this.readyState &&
                    "open" === t.type &&
                    this.onOpen(),
                  "close" === t.type)
                )
                  return this.onClose(), !1;
                this.onPacket(t);
              }),
              "closed" !== this.readyState &&
                ((this.polling = !1),
                this.emit("pollComplete"),
                "open" === this.readyState
                  ? this.poll()
                  : u('ignoring poll - transport state "%s"', this.readyState));
          }
          doClose() {
            const t = () => {
              u("writing close packet"), this.write([{ type: "close" }]);
            };
            "open" === this.readyState
              ? (u("transport open - closing"), t())
              : (u("transport not open - deferring close"),
                this.once("open", t));
          }
          write(t) {
            (this.writable = !1),
              (0, a.encodePayload)(t, (t) => {
                this.doWrite(t, () => {
                  (this.writable = !0), this.emit("drain");
                });
              });
          }
          uri() {
            let t = this.query || {};
            const e = this.opts.secure ? "https" : "http";
            let r = "";
            !1 !== this.opts.timestampRequests &&
              (t[this.opts.timestampParam] = (0, s.default)()),
              this.supportsBinary || t.sid || (t.b64 = 1),
              this.opts.port &&
                (("https" === e && 443 !== Number(this.opts.port)) ||
                  ("http" === e && 80 !== Number(this.opts.port))) &&
                (r = ":" + this.opts.port);
            const n = c.default.encode(t);
            return (
              e +
              "://" +
              (-1 !== this.opts.hostname.indexOf(":")
                ? "[" + this.opts.hostname + "]"
                : this.opts.hostname) +
              r +
              this.opts.path +
              (n.length ? "?" + n : "")
            );
          }
        }
        e.Polling = l;
      },
      5943: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.defaultBinaryType =
            e.usingBrowserWebSocket =
            e.WebSocket =
            e.nextTick =
              void 0);
        const o = n(r(2204));
        (e.nextTick =
          "function" == typeof Promise && "function" == typeof Promise.resolve
            ? (t) => Promise.resolve().then(t)
            : (t, e) => e(t, 0)),
          (e.WebSocket = o.default.WebSocket || o.default.MozWebSocket),
          (e.usingBrowserWebSocket = !0),
          (e.defaultBinaryType = "arraybuffer");
      },
      1173: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.WS = void 0);
        const o = r(7651),
          i = n(r(1830)),
          s = n(r(2281)),
          c = r(8367),
          a = r(5943),
          u = n(r(4802)),
          l = r(585),
          p = (0, u.default)("engine.io-client:websocket"),
          h =
            "undefined" != typeof navigator &&
            "string" == typeof navigator.product &&
            "reactnative" === navigator.product.toLowerCase();
        class f extends o.Transport {
          constructor(t) {
            super(t), (this.supportsBinary = !t.forceBase64);
          }
          get name() {
            return "websocket";
          }
          doOpen() {
            if (!this.check()) return;
            const t = this.uri(),
              e = this.opts.protocols,
              r = h
                ? {}
                : (0, c.pick)(
                    this.opts,
                    "agent",
                    "perMessageDeflate",
                    "pfx",
                    "key",
                    "passphrase",
                    "cert",
                    "ca",
                    "ciphers",
                    "rejectUnauthorized",
                    "localAddress",
                    "protocolVersion",
                    "origin",
                    "maxPayload",
                    "family",
                    "checkServerIdentity"
                  );
            this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
            try {
              this.ws =
                a.usingBrowserWebSocket && !h
                  ? e
                    ? new a.WebSocket(t, e)
                    : new a.WebSocket(t)
                  : new a.WebSocket(t, e, r);
            } catch (t) {
              return this.emit("error", t);
            }
            (this.ws.binaryType =
              this.socket.binaryType || a.defaultBinaryType),
              this.addEventListeners();
          }
          addEventListeners() {
            (this.ws.onopen = () => {
              this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
            }),
              (this.ws.onclose = this.onClose.bind(this)),
              (this.ws.onmessage = (t) => this.onData(t.data)),
              (this.ws.onerror = (t) => this.onError("websocket error", t));
          }
          write(t) {
            this.writable = !1;
            for (let e = 0; e < t.length; e++) {
              const r = t[e],
                n = e === t.length - 1;
              (0, l.encodePacket)(r, this.supportsBinary, (t) => {
                const e = {};
                !a.usingBrowserWebSocket &&
                  (r.options && (e.compress = r.options.compress),
                  this.opts.perMessageDeflate) &&
                  ("string" == typeof t ? Buffer.byteLength(t) : t.length) <
                    this.opts.perMessageDeflate.threshold &&
                  (e.compress = !1);
                try {
                  a.usingBrowserWebSocket
                    ? this.ws.send(t)
                    : this.ws.send(t, e);
                } catch (t) {
                  p("websocket closed before onclose event");
                }
                n &&
                  (0, a.nextTick)(() => {
                    (this.writable = !0), this.emit("drain");
                  }, this.setTimeoutFn);
              });
            }
          }
          doClose() {
            void 0 !== this.ws && (this.ws.close(), (this.ws = null));
          }
          uri() {
            let t = this.query || {};
            const e = this.opts.secure ? "wss" : "ws";
            let r = "";
            this.opts.port &&
              (("wss" === e && 443 !== Number(this.opts.port)) ||
                ("ws" === e && 80 !== Number(this.opts.port))) &&
              (r = ":" + this.opts.port),
              this.opts.timestampRequests &&
                (t[this.opts.timestampParam] = (0, s.default)()),
              this.supportsBinary || (t.b64 = 1);
            const n = i.default.encode(t);
            return (
              e +
              "://" +
              (-1 !== this.opts.hostname.indexOf(":")
                ? "[" + this.opts.hostname + "]"
                : this.opts.hostname) +
              r +
              this.opts.path +
              (n.length ? "?" + n : "")
            );
          }
          check() {
            return !(
              !a.WebSocket ||
              ("__initialize" in a.WebSocket && this.name === f.prototype.name)
            );
          }
        }
        e.WS = f;
      },
      4850: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const o = n(r(8058)),
          i = n(r(2204));
        e.default = function (t) {
          const e = t.xdomain;
          try {
            if ("undefined" != typeof XMLHttpRequest && (!e || o.default))
              return new XMLHttpRequest();
          } catch (t) {}
          if (!e)
            try {
              return new i.default[["Active"].concat("Object").join("X")](
                "Microsoft.XMLHTTP"
              );
            } catch (t) {}
        };
      },
      8367: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.installTimerFunctions = e.pick = void 0);
        const o = n(r(2204));
        e.pick = function (t, ...e) {
          return e.reduce(
            (e, r) => (t.hasOwnProperty(r) && (e[r] = t[r]), e),
            {}
          );
        };
        const i = setTimeout,
          s = clearTimeout;
        e.installTimerFunctions = function (t, e) {
          e.useNativeTimers
            ? ((t.setTimeoutFn = i.bind(o.default)),
              (t.clearTimeoutFn = s.bind(o.default)))
            : ((t.setTimeoutFn = setTimeout.bind(o.default)),
              (t.clearTimeoutFn = clearTimeout.bind(o.default)));
        };
      },
      4802: (t, e, r) => {
        (e.formatArgs = function (e) {
          if (
            ((e[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              e[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              t.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const r = "color: " + this.color;
          e.splice(1, 0, r, "color: inherit");
          let n = 0,
            o = 0;
          e[0].replace(/%[a-zA-Z%]/g, (t) => {
            "%%" !== t && (n++, "%c" === t && (o = n));
          }),
            e.splice(o, 0, r);
        }),
          (e.save = function (t) {
            try {
              t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
            } catch (t) {}
          }),
          (e.load = function () {
            let t;
            try {
              t = e.storage.getItem("debug");
            } catch (t) {}
            return (
              !t &&
                "undefined" != typeof process &&
                "env" in process &&
                (t = process.env.DEBUG),
              t
            );
          }),
          (e.useColors = function () {
            return (
              !(
                "undefined" == typeof window ||
                !window.process ||
                ("renderer" !== window.process.type && !window.process.__nwjs)
              ) ||
              (("undefined" == typeof navigator ||
                !navigator.userAgent ||
                !navigator.userAgent
                  .toLowerCase()
                  .match(/(edge|trident)\/(\d+)/)) &&
                (("undefined" != typeof document &&
                  document.documentElement &&
                  document.documentElement.style &&
                  document.documentElement.style.WebkitAppearance) ||
                  ("undefined" != typeof window &&
                    window.console &&
                    (window.console.firebug ||
                      (window.console.exception && window.console.table))) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                    parseInt(RegExp.$1, 10) >= 31) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent
                      .toLowerCase()
                      .match(/applewebkit\/(\d+)/))))
            );
          }),
          (e.storage = (function () {
            try {
              return localStorage;
            } catch (t) {}
          })()),
          (e.destroy = (() => {
            let t = !1;
            return () => {
              t ||
                ((t = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                ));
            };
          })()),
          (e.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (e.log = console.debug || console.log || (() => {})),
          (t.exports = r(804)(e));
        const { formatters: n } = t.exports;
        n.j = function (t) {
          try {
            return JSON.stringify(t);
          } catch (t) {
            return "[UnexpectedJSONParseError]: " + t.message;
          }
        };
      },
      804: (t, e, r) => {
        t.exports = function (t) {
          function e(t) {
            let r,
              o,
              i,
              s = null;
            function c(...t) {
              if (!c.enabled) return;
              const n = c,
                o = Number(new Date()),
                i = o - (r || o);
              (n.diff = i),
                (n.prev = r),
                (n.curr = o),
                (r = o),
                (t[0] = e.coerce(t[0])),
                "string" != typeof t[0] && t.unshift("%O");
              let s = 0;
              (t[0] = t[0].replace(/%([a-zA-Z%])/g, (r, o) => {
                if ("%%" === r) return "%";
                s++;
                const i = e.formatters[o];
                if ("function" == typeof i) {
                  const e = t[s];
                  (r = i.call(n, e)), t.splice(s, 1), s--;
                }
                return r;
              })),
                e.formatArgs.call(n, t),
                (n.log || e.log).apply(n, t);
            }
            return (
              (c.namespace = t),
              (c.useColors = e.useColors()),
              (c.color = e.selectColor(t)),
              (c.extend = n),
              (c.destroy = e.destroy),
              Object.defineProperty(c, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () =>
                  null !== s
                    ? s
                    : (o !== e.namespaces &&
                        ((o = e.namespaces), (i = e.enabled(t))),
                      i),
                set: (t) => {
                  s = t;
                },
              }),
              "function" == typeof e.init && e.init(c),
              c
            );
          }
          function n(t, r) {
            const n = e(this.namespace + (void 0 === r ? ":" : r) + t);
            return (n.log = this.log), n;
          }
          function o(t) {
            return t
              .toString()
              .substring(2, t.toString().length - 2)
              .replace(/\.\*\?$/, "*");
          }
          return (
            (e.debug = e),
            (e.default = e),
            (e.coerce = function (t) {
              return t instanceof Error ? t.stack || t.message : t;
            }),
            (e.disable = function () {
              const t = [
                ...e.names.map(o),
                ...e.skips.map(o).map((t) => "-" + t),
              ].join(",");
              return e.enable(""), t;
            }),
            (e.enable = function (t) {
              let r;
              e.save(t), (e.namespaces = t), (e.names = []), (e.skips = []);
              const n = ("string" == typeof t ? t : "").split(/[\s,]+/),
                o = n.length;
              for (r = 0; r < o; r++)
                n[r] &&
                  ("-" === (t = n[r].replace(/\*/g, ".*?"))[0]
                    ? e.skips.push(new RegExp("^" + t.substr(1) + "$"))
                    : e.names.push(new RegExp("^" + t + "$")));
            }),
            (e.enabled = function (t) {
              if ("*" === t[t.length - 1]) return !0;
              let r, n;
              for (r = 0, n = e.skips.length; r < n; r++)
                if (e.skips[r].test(t)) return !1;
              for (r = 0, n = e.names.length; r < n; r++)
                if (e.names[r].test(t)) return !0;
              return !1;
            }),
            (e.humanize = r(810)),
            (e.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              );
            }),
            Object.keys(t).forEach((r) => {
              e[r] = t[r];
            }),
            (e.names = []),
            (e.skips = []),
            (e.formatters = {}),
            (e.selectColor = function (t) {
              let r = 0;
              for (let e = 0; e < t.length; e++)
                (r = (r << 5) - r + t.charCodeAt(e)), (r |= 0);
              return e.colors[Math.abs(r) % e.colors.length];
            }),
            e.enable(e.load()),
            e
          );
        };
      },
      810: (t) => {
        var e = 1e3,
          r = 60 * e,
          n = 60 * r,
          o = 24 * n;
        function i(t, e, r, n) {
          var o = e >= 1.5 * r;
          return Math.round(t / r) + " " + n + (o ? "s" : "");
        }
        t.exports = function (t, s) {
          s = s || {};
          var c,
            a,
            u = typeof t;
          if ("string" === u && t.length > 0)
            return (function (t) {
              if (!((t = String(t)).length > 100)) {
                var i =
                  /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                    t
                  );
                if (i) {
                  var s = parseFloat(i[1]);
                  switch ((i[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                      return 315576e5 * s;
                    case "weeks":
                    case "week":
                    case "w":
                      return 6048e5 * s;
                    case "days":
                    case "day":
                    case "d":
                      return s * o;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                      return s * n;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                      return s * r;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                      return s * e;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                      return s;
                    default:
                      return;
                  }
                }
              }
            })(t);
          if ("number" === u && isFinite(t))
            return s.long
              ? ((c = t),
                (a = Math.abs(c)) >= o
                  ? i(c, a, o, "day")
                  : a >= n
                  ? i(c, a, n, "hour")
                  : a >= r
                  ? i(c, a, r, "minute")
                  : a >= e
                  ? i(c, a, e, "second")
                  : c + " ms")
              : (function (t) {
                  var i = Math.abs(t);
                  return i >= o
                    ? Math.round(t / o) + "d"
                    : i >= n
                    ? Math.round(t / n) + "h"
                    : i >= r
                    ? Math.round(t / r) + "m"
                    : i >= e
                    ? Math.round(t / e) + "s"
                    : t + "ms";
                })(t);
          throw new Error(
            "val is not a non-empty string or a valid number. val=" +
              JSON.stringify(t)
          );
        };
      },
      6470: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ERROR_PACKET = e.PACKET_TYPES_REVERSE = e.PACKET_TYPES = void 0);
        const r = Object.create(null);
        (e.PACKET_TYPES = r),
          (r.open = "0"),
          (r.close = "1"),
          (r.ping = "2"),
          (r.pong = "3"),
          (r.message = "4"),
          (r.upload = "5"),
          (r.noop = "6");
        const n = Object.create(null);
        (e.PACKET_TYPES_REVERSE = n),
          Object.keys(r).forEach((t) => {
            n[r[t]] = t;
          }),
          (e.ERROR_PACKET = { type: "error", data: "parser error" });
      },
      8408: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(6470),
          o = r(3426),
          i = "function" == typeof ArrayBuffer,
          s = (t, e) => {
            if (i) {
              const r = (0, o.decode)(t);
              return c(r, e);
            }
            return { base64: !0, data: t };
          },
          c = (t, e) => {
            switch (e) {
              case "blob":
                return t instanceof ArrayBuffer ? new Blob([t]) : t;
              case "arraybuffer":
              default:
                return t;
            }
          };
        e.default = (t, e) => {
          if ("string" != typeof t) return { type: "message", data: c(t, e) };
          const r = t.charAt(0);
          return "b" === r
            ? { type: "message", data: s(t.substring(1), e) }
            : n.PACKET_TYPES_REVERSE[r]
            ? t.length > 1
              ? { type: n.PACKET_TYPES_REVERSE[r], data: t.substring(1) }
              : { type: n.PACKET_TYPES_REVERSE[r] }
            : n.ERROR_PACKET;
        };
      },
      9003: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = r(6470),
          o =
            "function" == typeof Blob ||
            ("undefined" != typeof Blob &&
              "[object BlobConstructor]" ===
                Object.prototype.toString.call(Blob)),
          i = "function" == typeof ArrayBuffer,
          s = (t, e) => {
            const r = new FileReader();
            return (
              (r.onload = function () {
                const t = r.result.split(",")[1];
                e("b" + t);
              }),
              r.readAsDataURL(t)
            );
          };
        e.default = ({ type: t, data: e }, r, c) => {
          return o && e instanceof Blob
            ? r
              ? c(e)
              : s(e, c)
            : i &&
              (e instanceof ArrayBuffer ||
                ((a = e),
                "function" == typeof ArrayBuffer.isView
                  ? ArrayBuffer.isView(a)
                  : a && a.buffer instanceof ArrayBuffer))
            ? r
              ? c(e)
              : s(new Blob([e]), c)
            : c(n.PACKET_TYPES[t] + (e || ""));
          var a;
        };
      },
      585: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.decodePayload =
            e.decodePacket =
            e.encodePayload =
            e.encodePacket =
            e.protocol =
              void 0);
        const n = r(9003);
        e.encodePacket = n.default;
        const o = r(8408);
        e.decodePacket = o.default;
        const i = String.fromCharCode(30);
        (e.encodePayload = (t, e) => {
          const r = t.length,
            o = new Array(r);
          let s = 0;
          t.forEach((t, c) => {
            (0, n.default)(t, !1, (t) => {
              (o[c] = t), ++s === r && e(o.join(i));
            });
          });
        }),
          (e.decodePayload = (t, e) => {
            const r = t.split(i),
              n = [];
            for (let t = 0; t < r.length; t++) {
              const i = (0, o.default)(r[t], e);
              if ((n.push(i), "error" === i.type)) break;
            }
            return n;
          }),
          (e.protocol = 4);
      },
      8058: (t) => {
        try {
          t.exports =
            "undefined" != typeof XMLHttpRequest &&
            "withCredentials" in new XMLHttpRequest();
        } catch (e) {
          t.exports = !1;
        }
      },
      1830: (t, e) => {
        (e.encode = function (t) {
          var e = "";
          for (var r in t)
            t.hasOwnProperty(r) &&
              (e.length && (e += "&"),
              (e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r])));
          return e;
        }),
          (e.decode = function (t) {
            for (
              var e = {}, r = t.split("&"), n = 0, o = r.length;
              n < o;
              n++
            ) {
              var i = r[n].split("=");
              e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
            }
            return e;
          });
      },
      4187: (t) => {
        var e =
            /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
          r = [
            "source",
            "protocol",
            "authority",
            "userInfo",
            "user",
            "password",
            "host",
            "port",
            "relative",
            "path",
            "directory",
            "file",
            "query",
            "anchor",
          ];
        t.exports = function (t) {
          var n,
            o,
            i = t,
            s = t.indexOf("["),
            c = t.indexOf("]");
          -1 != s &&
            -1 != c &&
            (t =
              t.substring(0, s) +
              t.substring(s, c).replace(/:/g, ";") +
              t.substring(c, t.length));
          for (var a, u, l = e.exec(t || ""), p = {}, h = 14; h--; )
            p[r[h]] = l[h] || "";
          return (
            -1 != s &&
              -1 != c &&
              ((p.source = i),
              (p.host = p.host
                .substring(1, p.host.length - 1)
                .replace(/;/g, ":")),
              (p.authority = p.authority
                .replace("[", "")
                .replace("]", "")
                .replace(/;/g, ":")),
              (p.ipv6uri = !0)),
            (p.pathNames =
              ((n = p.path),
              (o = n.replace(/\/{2,9}/g, "/").split("/")),
              ("/" != n.substr(0, 1) && 0 !== n.length) || o.splice(0, 1),
              "/" == n.substr(n.length - 1, 1) && o.splice(o.length - 1, 1),
              o)),
            (p.queryKey =
              ((a = p.query),
              (u = {}),
              a.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (t, e, r) {
                e && (u[e] = r);
              }),
              u)),
            p
          );
        };
      },
      9122: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(8314),
          i = r(7376),
          s = (function (t) {
            function e(e) {
              t.call(this), (this._value = e);
            }
            return (
              n(e, t),
              Object.defineProperty(e.prototype, "value", {
                get: function () {
                  return this.getValue();
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype._subscribe = function (e) {
                var r = t.prototype._subscribe.call(this, e);
                return r && !r.closed && e.next(this._value), r;
              }),
              (e.prototype.getValue = function () {
                if (this.hasError) throw this.thrownError;
                if (this.closed) throw new i.ObjectUnsubscribedError();
                return this._value;
              }),
              (e.prototype.next = function (e) {
                t.prototype.next.call(this, (this._value = e));
              }),
              e
            );
          })(o.Subject);
        e.BehaviorSubject = s;
      },
      7056: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = (function (t) {
            function e(e, r, n) {
              t.call(this),
                (this.parent = e),
                (this.outerValue = r),
                (this.outerIndex = n),
                (this.index = 0);
            }
            return (
              n(e, t),
              (e.prototype._next = function (t) {
                this.parent.notifyNext(
                  this.outerValue,
                  t,
                  this.outerIndex,
                  this.index++,
                  this
                );
              }),
              (e.prototype._error = function (t) {
                this.parent.notifyError(t, this), this.unsubscribe();
              }),
              (e.prototype._complete = function () {
                this.parent.notifyComplete(this), this.unsubscribe();
              }),
              e
            );
          })(r(5239).Subscriber);
        e.InnerSubscriber = o;
      },
      8270: (t, e, r) => {
        "use strict";
        var n = r(5100),
          o = (function () {
            function t(t, e, r) {
              (this.kind = t),
                (this.value = e),
                (this.error = r),
                (this.hasValue = "N" === t);
            }
            return (
              (t.prototype.observe = function (t) {
                switch (this.kind) {
                  case "N":
                    return t.next && t.next(this.value);
                  case "E":
                    return t.error && t.error(this.error);
                  case "C":
                    return t.complete && t.complete();
                }
              }),
              (t.prototype.do = function (t, e, r) {
                switch (this.kind) {
                  case "N":
                    return t && t(this.value);
                  case "E":
                    return e && e(this.error);
                  case "C":
                    return r && r();
                }
              }),
              (t.prototype.accept = function (t, e, r) {
                return t && "function" == typeof t.next
                  ? this.observe(t)
                  : this.do(t, e, r);
              }),
              (t.prototype.toObservable = function () {
                switch (this.kind) {
                  case "N":
                    return n.Observable.of(this.value);
                  case "E":
                    return n.Observable.throw(this.error);
                  case "C":
                    return n.Observable.empty();
                }
                throw new Error("unexpected notification kind value");
              }),
              (t.createNext = function (e) {
                return void 0 !== e
                  ? new t("N", e)
                  : t.undefinedValueNotification;
              }),
              (t.createError = function (e) {
                return new t("E", void 0, e);
              }),
              (t.createComplete = function () {
                return t.completeNotification;
              }),
              (t.completeNotification = new t("C")),
              (t.undefinedValueNotification = new t("N", void 0)),
              t
            );
          })();
        e.Notification = o;
      },
      5100: (t, e, r) => {
        "use strict";
        var n = r(7919),
          o = r(9510),
          i = r(683),
          s = r(6903),
          c = (function () {
            function t(t) {
              (this._isScalar = !1), t && (this._subscribe = t);
            }
            return (
              (t.prototype.lift = function (e) {
                var r = new t();
                return (r.source = this), (r.operator = e), r;
              }),
              (t.prototype.subscribe = function (t, e, r) {
                var n = this.operator,
                  i = o.toSubscriber(t, e, r);
                if (
                  (n
                    ? n.call(i, this.source)
                    : i.add(
                        this.source || !i.syncErrorThrowable
                          ? this._subscribe(i)
                          : this._trySubscribe(i)
                      ),
                  i.syncErrorThrowable &&
                    ((i.syncErrorThrowable = !1), i.syncErrorThrown))
                )
                  throw i.syncErrorValue;
                return i;
              }),
              (t.prototype._trySubscribe = function (t) {
                try {
                  return this._subscribe(t);
                } catch (e) {
                  (t.syncErrorThrown = !0), (t.syncErrorValue = e), t.error(e);
                }
              }),
              (t.prototype.forEach = function (t, e) {
                var r = this;
                if (
                  (e ||
                    (n.root.Rx && n.root.Rx.config && n.root.Rx.config.Promise
                      ? (e = n.root.Rx.config.Promise)
                      : n.root.Promise && (e = n.root.Promise)),
                  !e)
                )
                  throw new Error("no Promise impl found");
                return new e(function (e, n) {
                  var o;
                  o = r.subscribe(
                    function (e) {
                      if (o)
                        try {
                          t(e);
                        } catch (t) {
                          n(t), o.unsubscribe();
                        }
                      else t(e);
                    },
                    n,
                    e
                  );
                });
              }),
              (t.prototype._subscribe = function (t) {
                return this.source.subscribe(t);
              }),
              (t.prototype[i.observable] = function () {
                return this;
              }),
              (t.prototype.pipe = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e - 0] = arguments[e];
                return 0 === t.length ? this : s.pipeFromArray(t)(this);
              }),
              (t.prototype.toPromise = function (t) {
                var e = this;
                if (
                  (t ||
                    (n.root.Rx && n.root.Rx.config && n.root.Rx.config.Promise
                      ? (t = n.root.Rx.config.Promise)
                      : n.root.Promise && (t = n.root.Promise)),
                  !t)
                )
                  throw new Error("no Promise impl found");
                return new t(function (t, r) {
                  var n;
                  e.subscribe(
                    function (t) {
                      return (n = t);
                    },
                    function (t) {
                      return r(t);
                    },
                    function () {
                      return t(n);
                    }
                  );
                });
              }),
              (t.create = function (e) {
                return new t(e);
              }),
              t
            );
          })();
        e.Observable = c;
      },
      9275: (t, e) => {
        "use strict";
        e.empty = {
          closed: !0,
          next: function (t) {},
          error: function (t) {
            throw t;
          },
          complete: function () {},
        };
      },
      3147: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = (function (t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              n(e, t),
              (e.prototype.notifyNext = function (t, e, r, n, o) {
                this.destination.next(e);
              }),
              (e.prototype.notifyError = function (t, e) {
                this.destination.error(t);
              }),
              (e.prototype.notifyComplete = function (t) {
                this.destination.complete();
              }),
              e
            );
          })(r(5239).Subscriber);
        e.OuterSubscriber = o;
      },
      3422: (t, e) => {
        "use strict";
        var r = (function () {
          function t(e, r) {
            void 0 === r && (r = t.now),
              (this.SchedulerAction = e),
              (this.now = r);
          }
          return (
            (t.prototype.schedule = function (t, e, r) {
              return (
                void 0 === e && (e = 0),
                new this.SchedulerAction(this, t).schedule(r, e)
              );
            }),
            (t.now = Date.now
              ? Date.now
              : function () {
                  return +new Date();
                }),
            t
          );
        })();
        e.Scheduler = r;
      },
      8314: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5100),
          i = r(5239),
          s = r(4859),
          c = r(7376),
          a = r(3189),
          u = r(2992),
          l = (function (t) {
            function e(e) {
              t.call(this, e), (this.destination = e);
            }
            return n(e, t), e;
          })(i.Subscriber);
        e.SubjectSubscriber = l;
        var p = (function (t) {
          function e() {
            t.call(this),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          return (
            n(e, t),
            (e.prototype[u.rxSubscriber] = function () {
              return new l(this);
            }),
            (e.prototype.lift = function (t) {
              var e = new h(this, this);
              return (e.operator = t), e;
            }),
            (e.prototype.next = function (t) {
              if (this.closed) throw new c.ObjectUnsubscribedError();
              if (!this.isStopped)
                for (
                  var e = this.observers, r = e.length, n = e.slice(), o = 0;
                  o < r;
                  o++
                )
                  n[o].next(t);
            }),
            (e.prototype.error = function (t) {
              if (this.closed) throw new c.ObjectUnsubscribedError();
              (this.hasError = !0),
                (this.thrownError = t),
                (this.isStopped = !0);
              for (
                var e = this.observers, r = e.length, n = e.slice(), o = 0;
                o < r;
                o++
              )
                n[o].error(t);
              this.observers.length = 0;
            }),
            (e.prototype.complete = function () {
              if (this.closed) throw new c.ObjectUnsubscribedError();
              this.isStopped = !0;
              for (
                var t = this.observers, e = t.length, r = t.slice(), n = 0;
                n < e;
                n++
              )
                r[n].complete();
              this.observers.length = 0;
            }),
            (e.prototype.unsubscribe = function () {
              (this.isStopped = !0),
                (this.closed = !0),
                (this.observers = null);
            }),
            (e.prototype._trySubscribe = function (e) {
              if (this.closed) throw new c.ObjectUnsubscribedError();
              return t.prototype._trySubscribe.call(this, e);
            }),
            (e.prototype._subscribe = function (t) {
              if (this.closed) throw new c.ObjectUnsubscribedError();
              return this.hasError
                ? (t.error(this.thrownError), s.Subscription.EMPTY)
                : this.isStopped
                ? (t.complete(), s.Subscription.EMPTY)
                : (this.observers.push(t), new a.SubjectSubscription(this, t));
            }),
            (e.prototype.asObservable = function () {
              var t = new o.Observable();
              return (t.source = this), t;
            }),
            (e.create = function (t, e) {
              return new h(t, e);
            }),
            e
          );
        })(o.Observable);
        e.Subject = p;
        var h = (function (t) {
          function e(e, r) {
            t.call(this), (this.destination = e), (this.source = r);
          }
          return (
            n(e, t),
            (e.prototype.next = function (t) {
              var e = this.destination;
              e && e.next && e.next(t);
            }),
            (e.prototype.error = function (t) {
              var e = this.destination;
              e && e.error && this.destination.error(t);
            }),
            (e.prototype.complete = function () {
              var t = this.destination;
              t && t.complete && this.destination.complete();
            }),
            (e.prototype._subscribe = function (t) {
              return this.source
                ? this.source.subscribe(t)
                : s.Subscription.EMPTY;
            }),
            e
          );
        })(p);
        e.AnonymousSubject = h;
      },
      3189: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = (function (t) {
            function e(e, r) {
              t.call(this),
                (this.subject = e),
                (this.subscriber = r),
                (this.closed = !1);
            }
            return (
              n(e, t),
              (e.prototype.unsubscribe = function () {
                if (!this.closed) {
                  this.closed = !0;
                  var t = this.subject,
                    e = t.observers;
                  if (
                    ((this.subject = null),
                    e && 0 !== e.length && !t.isStopped && !t.closed)
                  ) {
                    var r = e.indexOf(this.subscriber);
                    -1 !== r && e.splice(r, 1);
                  }
                }
              }),
              e
            );
          })(r(4859).Subscription);
        e.SubjectSubscription = o;
      },
      5239: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(1404),
          i = r(4859),
          s = r(9275),
          c = r(2992),
          a = (function (t) {
            function e(e, r, n) {
              switch (
                (t.call(this),
                (this.syncErrorValue = null),
                (this.syncErrorThrown = !1),
                (this.syncErrorThrowable = !1),
                (this.isStopped = !1),
                arguments.length)
              ) {
                case 0:
                  this.destination = s.empty;
                  break;
                case 1:
                  if (!e) {
                    this.destination = s.empty;
                    break;
                  }
                  if ("object" == typeof e) {
                    if (l(e)) {
                      var o = e[c.rxSubscriber]();
                      (this.syncErrorThrowable = o.syncErrorThrowable),
                        (this.destination = o),
                        o.add(this);
                    } else
                      (this.syncErrorThrowable = !0),
                        (this.destination = new u(this, e));
                    break;
                  }
                default:
                  (this.syncErrorThrowable = !0),
                    (this.destination = new u(this, e, r, n));
              }
            }
            return (
              n(e, t),
              (e.prototype[c.rxSubscriber] = function () {
                return this;
              }),
              (e.create = function (t, r, n) {
                var o = new e(t, r, n);
                return (o.syncErrorThrowable = !1), o;
              }),
              (e.prototype.next = function (t) {
                this.isStopped || this._next(t);
              }),
              (e.prototype.error = function (t) {
                this.isStopped || ((this.isStopped = !0), this._error(t));
              }),
              (e.prototype.complete = function () {
                this.isStopped || ((this.isStopped = !0), this._complete());
              }),
              (e.prototype.unsubscribe = function () {
                this.closed ||
                  ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
              }),
              (e.prototype._next = function (t) {
                this.destination.next(t);
              }),
              (e.prototype._error = function (t) {
                this.destination.error(t), this.unsubscribe();
              }),
              (e.prototype._complete = function () {
                this.destination.complete(), this.unsubscribe();
              }),
              (e.prototype._unsubscribeAndRecycle = function () {
                var t = this._parent,
                  e = this._parents;
                return (
                  (this._parent = null),
                  (this._parents = null),
                  this.unsubscribe(),
                  (this.closed = !1),
                  (this.isStopped = !1),
                  (this._parent = t),
                  (this._parents = e),
                  this
                );
              }),
              e
            );
          })(i.Subscription);
        e.Subscriber = a;
        var u = (function (t) {
          function e(e, r, n, i) {
            var c;
            t.call(this), (this._parentSubscriber = e);
            var a = this;
            o.isFunction(r)
              ? (c = r)
              : r &&
                ((c = r.next),
                (n = r.error),
                (i = r.complete),
                r !== s.empty &&
                  ((a = Object.create(r)),
                  o.isFunction(a.unsubscribe) &&
                    this.add(a.unsubscribe.bind(a)),
                  (a.unsubscribe = this.unsubscribe.bind(this)))),
              (this._context = a),
              (this._next = c),
              (this._error = n),
              (this._complete = i);
          }
          return (
            n(e, t),
            (e.prototype.next = function (t) {
              if (!this.isStopped && this._next) {
                var e = this._parentSubscriber;
                e.syncErrorThrowable
                  ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, t);
              }
            }),
            (e.prototype.error = function (t) {
              if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._error)
                  e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, this._error, t),
                      this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                else {
                  if (!e.syncErrorThrowable) throw (this.unsubscribe(), t);
                  (e.syncErrorValue = t),
                    (e.syncErrorThrown = !0),
                    this.unsubscribe();
                }
              }
            }),
            (e.prototype.complete = function () {
              var t = this;
              if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._complete) {
                  var r = function () {
                    return t._complete.call(t._context);
                  };
                  e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, r), this.unsubscribe())
                    : (this.__tryOrUnsub(r), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (e.prototype.__tryOrUnsub = function (t, e) {
              try {
                t.call(this._context, e);
              } catch (t) {
                throw (this.unsubscribe(), t);
              }
            }),
            (e.prototype.__tryOrSetError = function (t, e, r) {
              try {
                e.call(this._context, r);
              } catch (e) {
                return (t.syncErrorValue = e), (t.syncErrorThrown = !0), !0;
              }
              return !1;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this._parentSubscriber;
              (this._context = null),
                (this._parentSubscriber = null),
                t.unsubscribe();
            }),
            e
          );
        })(a);
        function l(t) {
          return (
            t instanceof a || ("syncErrorThrowable" in t && t[c.rxSubscriber])
          );
        }
      },
      4859: (t, e, r) => {
        "use strict";
        var n = r(5936),
          o = r(4548),
          i = r(1404),
          s = r(6447),
          c = r(4456),
          a = r(6288),
          u = (function () {
            function t(t) {
              (this.closed = !1),
                (this._parent = null),
                (this._parents = null),
                (this._subscriptions = null),
                t && (this._unsubscribe = t);
            }
            var e;
            return (
              (t.prototype.unsubscribe = function () {
                var t,
                  e = !1;
                if (!this.closed) {
                  var r = this,
                    u = r._parent,
                    p = r._parents,
                    h = r._unsubscribe,
                    f = r._subscriptions;
                  (this.closed = !0),
                    (this._parent = null),
                    (this._parents = null),
                    (this._subscriptions = null);
                  for (var d = -1, y = p ? p.length : 0; u; )
                    u.remove(this), (u = (++d < y && p[d]) || null);
                  if (
                    (i.isFunction(h) &&
                      s.tryCatch(h).call(this) === c.errorObject &&
                      ((e = !0),
                      (t =
                        t ||
                        (c.errorObject.e instanceof a.UnsubscriptionError
                          ? l(c.errorObject.e.errors)
                          : [c.errorObject.e]))),
                    n.isArray(f))
                  )
                    for (d = -1, y = f.length; ++d < y; ) {
                      var b = f[d];
                      if (
                        o.isObject(b) &&
                        s.tryCatch(b.unsubscribe).call(b) === c.errorObject
                      ) {
                        (e = !0), (t = t || []);
                        var m = c.errorObject.e;
                        m instanceof a.UnsubscriptionError
                          ? (t = t.concat(l(m.errors)))
                          : t.push(m);
                      }
                    }
                  if (e) throw new a.UnsubscriptionError(t);
                }
              }),
              (t.prototype.add = function (e) {
                if (!e || e === t.EMPTY) return t.EMPTY;
                if (e === this) return this;
                var r = e;
                switch (typeof e) {
                  case "function":
                    r = new t(e);
                  case "object":
                    if (r.closed || "function" != typeof r.unsubscribe)
                      return r;
                    if (this.closed) return r.unsubscribe(), r;
                    if ("function" != typeof r._addParent) {
                      var n = r;
                      (r = new t())._subscriptions = [n];
                    }
                    break;
                  default:
                    throw new Error(
                      "unrecognized teardown " + e + " added to Subscription."
                    );
                }
                return (
                  (this._subscriptions || (this._subscriptions = [])).push(r),
                  r._addParent(this),
                  r
                );
              }),
              (t.prototype.remove = function (t) {
                var e = this._subscriptions;
                if (e) {
                  var r = e.indexOf(t);
                  -1 !== r && e.splice(r, 1);
                }
              }),
              (t.prototype._addParent = function (t) {
                var e = this._parent,
                  r = this._parents;
                e && e !== t
                  ? r
                    ? -1 === r.indexOf(t) && r.push(t)
                    : (this._parents = [t])
                  : (this._parent = t);
              }),
              (t.EMPTY = (((e = new t()).closed = !0), e)),
              t
            );
          })();
        function l(t) {
          return t.reduce(function (t, e) {
            return t.concat(e instanceof a.UnsubscriptionError ? e.errors : e);
          }, []);
        }
        e.Subscription = u;
      },
      1235: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5100),
          i = r(4819),
          s = r(9735),
          c = (function (t) {
            function e(e, r) {
              t.call(this),
                (this.arrayLike = e),
                (this.scheduler = r),
                r ||
                  1 !== e.length ||
                  ((this._isScalar = !0), (this.value = e[0]));
            }
            return (
              n(e, t),
              (e.create = function (t, r) {
                var n = t.length;
                return 0 === n
                  ? new s.EmptyObservable()
                  : 1 === n
                  ? new i.ScalarObservable(t[0], r)
                  : new e(t, r);
              }),
              (e.dispatch = function (t) {
                var e = t.arrayLike,
                  r = t.index,
                  n = t.length,
                  o = t.subscriber;
                o.closed ||
                  (r >= n
                    ? o.complete()
                    : (o.next(e[r]), (t.index = r + 1), this.schedule(t)));
              }),
              (e.prototype._subscribe = function (t) {
                var r = this.arrayLike,
                  n = this.scheduler,
                  o = r.length;
                if (n)
                  return n.schedule(e.dispatch, 0, {
                    arrayLike: r,
                    index: 0,
                    length: o,
                    subscriber: t,
                  });
                for (var i = 0; i < o && !t.closed; i++) t.next(r[i]);
                t.complete();
              }),
              e
            );
          })(o.Observable);
        e.ArrayLikeObservable = c;
      },
      3418: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5100),
          i = r(4819),
          s = r(9735),
          c = r(93),
          a = (function (t) {
            function e(e, r) {
              t.call(this),
                (this.array = e),
                (this.scheduler = r),
                r ||
                  1 !== e.length ||
                  ((this._isScalar = !0), (this.value = e[0]));
            }
            return (
              n(e, t),
              (e.create = function (t, r) {
                return new e(t, r);
              }),
              (e.of = function () {
                for (var t = [], r = 0; r < arguments.length; r++)
                  t[r - 0] = arguments[r];
                var n = t[t.length - 1];
                c.isScheduler(n) ? t.pop() : (n = null);
                var o = t.length;
                return o > 1
                  ? new e(t, n)
                  : 1 === o
                  ? new i.ScalarObservable(t[0], n)
                  : new s.EmptyObservable(n);
              }),
              (e.dispatch = function (t) {
                var e = t.array,
                  r = t.index,
                  n = t.count,
                  o = t.subscriber;
                r >= n
                  ? o.complete()
                  : (o.next(e[r]),
                    o.closed || ((t.index = r + 1), this.schedule(t)));
              }),
              (e.prototype._subscribe = function (t) {
                var r = this.array,
                  n = r.length,
                  o = this.scheduler;
                if (o)
                  return o.schedule(e.dispatch, 0, {
                    array: r,
                    index: 0,
                    count: n,
                    subscriber: t,
                  });
                for (var i = 0; i < n && !t.closed; i++) t.next(r[i]);
                t.complete();
              }),
              e
            );
          })(o.Observable);
        e.ArrayObservable = a;
      },
      8852: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(8314),
          i = r(5100),
          s = r(5239),
          c = r(4859),
          a = r(3061),
          u = (function (t) {
            function e(e, r) {
              t.call(this),
                (this.source = e),
                (this.subjectFactory = r),
                (this._refCount = 0),
                (this._isComplete = !1);
            }
            return (
              n(e, t),
              (e.prototype._subscribe = function (t) {
                return this.getSubject().subscribe(t);
              }),
              (e.prototype.getSubject = function () {
                var t = this._subject;
                return (
                  (t && !t.isStopped) ||
                    (this._subject = this.subjectFactory()),
                  this._subject
                );
              }),
              (e.prototype.connect = function () {
                var t = this._connection;
                return (
                  t ||
                    ((this._isComplete = !1),
                    (t = this._connection = new c.Subscription()).add(
                      this.source.subscribe(new p(this.getSubject(), this))
                    ),
                    t.closed
                      ? ((this._connection = null), (t = c.Subscription.EMPTY))
                      : (this._connection = t)),
                  t
                );
              }),
              (e.prototype.refCount = function () {
                return a.refCount()(this);
              }),
              e
            );
          })(i.Observable);
        e.ConnectableObservable = u;
        var l = u.prototype;
        e.connectableObservableDescriptor = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: l._subscribe },
          _isComplete: { value: l._isComplete, writable: !0 },
          getSubject: { value: l.getSubject },
          connect: { value: l.connect },
          refCount: { value: l.refCount },
        };
        var p = (function (t) {
          function e(e, r) {
            t.call(this, e), (this.connectable = r);
          }
          return (
            n(e, t),
            (e.prototype._error = function (e) {
              this._unsubscribe(), t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              (this.connectable._isComplete = !0),
                this._unsubscribe(),
                t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.connectable;
              if (t) {
                this.connectable = null;
                var e = t._connection;
                (t._refCount = 0),
                  (t._subject = null),
                  (t._connection = null),
                  e && e.unsubscribe();
              }
            }),
            e
          );
        })(o.SubjectSubscriber);
        !(function (t) {
          function e(e, r) {
            t.call(this, e), (this.connectable = r);
          }
          n(e, t),
            (e.prototype._unsubscribe = function () {
              var t = this.connectable;
              if (t) {
                this.connectable = null;
                var e = t._refCount;
                if (e <= 0) this.connection = null;
                else if (((t._refCount = e - 1), e > 1)) this.connection = null;
                else {
                  var r = this.connection,
                    n = t._connection;
                  (this.connection = null),
                    !n || (r && n !== r) || n.unsubscribe();
                }
              } else this.connection = null;
            });
        })(s.Subscriber);
      },
      9735: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = (function (t) {
            function e(e) {
              t.call(this), (this.scheduler = e);
            }
            return (
              n(e, t),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.dispatch = function (t) {
                t.subscriber.complete();
              }),
              (e.prototype._subscribe = function (t) {
                var r = this.scheduler;
                if (r) return r.schedule(e.dispatch, 0, { subscriber: t });
                t.complete();
              }),
              e
            );
          })(r(5100).Observable);
        e.EmptyObservable = o;
      },
      9483: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5100),
          i = r(6447),
          s = r(1404),
          c = r(4456),
          a = r(4859),
          u = Object.prototype.toString,
          l = (function (t) {
            function e(e, r, n, o) {
              t.call(this),
                (this.sourceObj = e),
                (this.eventName = r),
                (this.selector = n),
                (this.options = o);
            }
            return (
              n(e, t),
              (e.create = function (t, r, n, o) {
                return (
                  s.isFunction(n) && ((o = n), (n = void 0)), new e(t, r, o, n)
                );
              }),
              (e.setupSubscription = function (t, r, n, o, i) {
                var s;
                if (
                  (function (t) {
                    return !!t && "[object NodeList]" === u.call(t);
                  })(t) ||
                  (function (t) {
                    return !!t && "[object HTMLCollection]" === u.call(t);
                  })(t)
                )
                  for (var c = 0, l = t.length; c < l; c++)
                    e.setupSubscription(t[c], r, n, o, i);
                else if (
                  (function (t) {
                    return (
                      !!t &&
                      "function" == typeof t.addEventListener &&
                      "function" == typeof t.removeEventListener
                    );
                  })(t)
                ) {
                  var p = t;
                  t.addEventListener(r, n, i),
                    (s = function () {
                      return p.removeEventListener(r, n, i);
                    });
                } else if (
                  (function (t) {
                    return (
                      !!t &&
                      "function" == typeof t.on &&
                      "function" == typeof t.off
                    );
                  })(t)
                ) {
                  var h = t;
                  t.on(r, n),
                    (s = function () {
                      return h.off(r, n);
                    });
                } else {
                  if (
                    !(function (t) {
                      return (
                        !!t &&
                        "function" == typeof t.addListener &&
                        "function" == typeof t.removeListener
                      );
                    })(t)
                  )
                    throw new TypeError("Invalid event target");
                  var f = t;
                  t.addListener(r, n),
                    (s = function () {
                      return f.removeListener(r, n);
                    });
                }
                o.add(new a.Subscription(s));
              }),
              (e.prototype._subscribe = function (t) {
                var r = this.sourceObj,
                  n = this.eventName,
                  o = this.options,
                  s = this.selector,
                  a = s
                    ? function () {
                        for (var e = [], r = 0; r < arguments.length; r++)
                          e[r - 0] = arguments[r];
                        var n = i.tryCatch(s).apply(void 0, e);
                        n === c.errorObject
                          ? t.error(c.errorObject.e)
                          : t.next(n);
                      }
                    : function (e) {
                        return t.next(e);
                      };
                e.setupSubscription(r, n, a, t, o);
              }),
              e
            );
          })(o.Observable);
        e.FromEventObservable = l;
      },
      7305: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5936),
          i = r(2900),
          s = r(338),
          c = r(6694),
          a = r(8770),
          u = r(3418),
          l = r(1235),
          p = r(5810),
          h = r(5100),
          f = r(5633),
          d = r(683),
          y = (function (t) {
            function e(e, r) {
              t.call(this, null), (this.ish = e), (this.scheduler = r);
            }
            return (
              n(e, t),
              (e.create = function (t, r) {
                if (null != t) {
                  if ("function" == typeof t[d.observable])
                    return t instanceof h.Observable && !r ? t : new e(t, r);
                  if (o.isArray(t)) return new u.ArrayObservable(t, r);
                  if (s.isPromise(t)) return new c.PromiseObservable(t, r);
                  if (
                    "function" == typeof t[p.iterator] ||
                    "string" == typeof t
                  )
                    return new a.IteratorObservable(t, r);
                  if (i.isArrayLike(t)) return new l.ArrayLikeObservable(t, r);
                }
                throw new TypeError(
                  ((null !== t && typeof t) || t) + " is not observable"
                );
              }),
              (e.prototype._subscribe = function (t) {
                var e = this.ish,
                  r = this.scheduler;
                return null == r
                  ? e[d.observable]().subscribe(t)
                  : e[d.observable]().subscribe(
                      new f.ObserveOnSubscriber(t, r, 0)
                    );
              }),
              e
            );
          })(h.Observable);
        e.FromObservable = y;
      },
      8770: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(7919),
          i = r(5100),
          s = r(5810),
          c = (function (t) {
            function e(e, r) {
              if ((t.call(this), (this.scheduler = r), null == e))
                throw new Error("iterator cannot be null.");
              this.iterator = (function (t) {
                var e = t[s.iterator];
                if (!e && "string" == typeof t) return new a(t);
                if (!e && void 0 !== t.length) return new u(t);
                if (!e) throw new TypeError("object is not iterable");
                return t[s.iterator]();
              })(e);
            }
            return (
              n(e, t),
              (e.create = function (t, r) {
                return new e(t, r);
              }),
              (e.dispatch = function (t) {
                var e = t.index,
                  r = t.hasError,
                  n = t.iterator,
                  o = t.subscriber;
                if (r) o.error(t.error);
                else {
                  var i = n.next();
                  i.done
                    ? o.complete()
                    : (o.next(i.value),
                      (t.index = e + 1),
                      o.closed
                        ? "function" == typeof n.return && n.return()
                        : this.schedule(t));
                }
              }),
              (e.prototype._subscribe = function (t) {
                var r = this.iterator,
                  n = this.scheduler;
                if (n)
                  return n.schedule(e.dispatch, 0, {
                    index: 0,
                    iterator: r,
                    subscriber: t,
                  });
                for (;;) {
                  var o = r.next();
                  if (o.done) {
                    t.complete();
                    break;
                  }
                  if ((t.next(o.value), t.closed)) {
                    "function" == typeof r.return && r.return();
                    break;
                  }
                }
              }),
              e
            );
          })(i.Observable);
        e.IteratorObservable = c;
        var a = (function () {
            function t(t, e, r) {
              void 0 === e && (e = 0),
                void 0 === r && (r = t.length),
                (this.str = t),
                (this.idx = e),
                (this.len = r);
            }
            return (
              (t.prototype[s.iterator] = function () {
                return this;
              }),
              (t.prototype.next = function () {
                return this.idx < this.len
                  ? { done: !1, value: this.str.charAt(this.idx++) }
                  : { done: !0, value: void 0 };
              }),
              t
            );
          })(),
          u = (function () {
            function t(t, e, r) {
              void 0 === e && (e = 0),
                void 0 === r &&
                  (r = (function (t) {
                    var e,
                      r = +t.length;
                    return isNaN(r)
                      ? 0
                      : 0 !== r &&
                        "number" == typeof (e = r) &&
                        o.root.isFinite(e)
                      ? (r =
                          (function (t) {
                            var e = +t;
                            return 0 === e || isNaN(e) ? e : e < 0 ? -1 : 1;
                          })(r) * Math.floor(Math.abs(r))) <= 0
                        ? 0
                        : r > l
                        ? l
                        : r
                      : r;
                  })(t)),
                (this.arr = t),
                (this.idx = e),
                (this.len = r);
            }
            return (
              (t.prototype[s.iterator] = function () {
                return this;
              }),
              (t.prototype.next = function () {
                return this.idx < this.len
                  ? { done: !1, value: this.arr[this.idx++] }
                  : { done: !0, value: void 0 };
              }),
              t
            );
          })(),
          l = Math.pow(2, 53) - 1;
      },
      6694: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(7919),
          i = (function (t) {
            function e(e, r) {
              t.call(this), (this.promise = e), (this.scheduler = r);
            }
            return (
              n(e, t),
              (e.create = function (t, r) {
                return new e(t, r);
              }),
              (e.prototype._subscribe = function (t) {
                var e = this,
                  r = this.promise,
                  n = this.scheduler;
                if (null == n)
                  this._isScalar
                    ? t.closed || (t.next(this.value), t.complete())
                    : r
                        .then(
                          function (r) {
                            (e.value = r),
                              (e._isScalar = !0),
                              t.closed || (t.next(r), t.complete());
                          },
                          function (e) {
                            t.closed || t.error(e);
                          }
                        )
                        .then(null, function (t) {
                          o.root.setTimeout(function () {
                            throw t;
                          });
                        });
                else if (this._isScalar) {
                  if (!t.closed)
                    return n.schedule(s, 0, {
                      value: this.value,
                      subscriber: t,
                    });
                } else
                  r.then(
                    function (r) {
                      (e.value = r),
                        (e._isScalar = !0),
                        t.closed ||
                          t.add(n.schedule(s, 0, { value: r, subscriber: t }));
                    },
                    function (e) {
                      t.closed ||
                        t.add(n.schedule(c, 0, { err: e, subscriber: t }));
                    }
                  ).then(null, function (t) {
                    o.root.setTimeout(function () {
                      throw t;
                    });
                  });
              }),
              e
            );
          })(r(5100).Observable);
        function s(t) {
          var e = t.value,
            r = t.subscriber;
          r.closed || (r.next(e), r.complete());
        }
        function c(t) {
          var e = t.err,
            r = t.subscriber;
          r.closed || r.error(e);
        }
        e.PromiseObservable = i;
      },
      4819: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = (function (t) {
            function e(e, r) {
              t.call(this),
                (this.value = e),
                (this.scheduler = r),
                (this._isScalar = !0),
                r && (this._isScalar = !1);
            }
            return (
              n(e, t),
              (e.create = function (t, r) {
                return new e(t, r);
              }),
              (e.dispatch = function (t) {
                var e = t.done,
                  r = t.value,
                  n = t.subscriber;
                e
                  ? n.complete()
                  : (n.next(r), n.closed || ((t.done = !0), this.schedule(t)));
              }),
              (e.prototype._subscribe = function (t) {
                var r = this.value,
                  n = this.scheduler;
                if (n)
                  return n.schedule(e.dispatch, 0, {
                    done: !1,
                    value: r,
                    subscriber: t,
                  });
                t.next(r), t.closed || t.complete();
              }),
              e
            );
          })(r(5100).Observable);
        e.ScalarObservable = o;
      },
      9034: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5100),
          i = r(2664),
          s = r(3523),
          c = (function (t) {
            function e(e, r, n) {
              void 0 === r && (r = 0),
                void 0 === n && (n = i.asap),
                t.call(this),
                (this.source = e),
                (this.delayTime = r),
                (this.scheduler = n),
                (!s.isNumeric(r) || r < 0) && (this.delayTime = 0),
                (n && "function" == typeof n.schedule) ||
                  (this.scheduler = i.asap);
            }
            return (
              n(e, t),
              (e.create = function (t, r, n) {
                return (
                  void 0 === r && (r = 0),
                  void 0 === n && (n = i.asap),
                  new e(t, r, n)
                );
              }),
              (e.dispatch = function (t) {
                var e = t.source,
                  r = t.subscriber;
                return this.add(e.subscribe(r));
              }),
              (e.prototype._subscribe = function (t) {
                var r = this.delayTime,
                  n = this.source;
                return this.scheduler.schedule(e.dispatch, r, {
                  source: n,
                  subscriber: t,
                });
              }),
              e
            );
          })(o.Observable);
        e.SubscribeOnObservable = c;
      },
      2453: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(3523),
          i = r(5100),
          s = r(8404),
          c = r(93),
          a = r(1589),
          u = (function (t) {
            function e(e, r, n) {
              void 0 === e && (e = 0),
                t.call(this),
                (this.period = -1),
                (this.dueTime = 0),
                o.isNumeric(r)
                  ? (this.period = Number(r) < 1 ? 1 : Number(r))
                  : c.isScheduler(r) && (n = r),
                c.isScheduler(n) || (n = s.async),
                (this.scheduler = n),
                (this.dueTime = a.isDate(e) ? +e - this.scheduler.now() : e);
            }
            return (
              n(e, t),
              (e.create = function (t, r, n) {
                return void 0 === t && (t = 0), new e(t, r, n);
              }),
              (e.dispatch = function (t) {
                var e = t.index,
                  r = t.period,
                  n = t.subscriber;
                if ((n.next(e), !n.closed)) {
                  if (-1 === r) return n.complete();
                  (t.index = e + 1), this.schedule(t, r);
                }
              }),
              (e.prototype._subscribe = function (t) {
                var r = this,
                  n = r.period,
                  o = r.dueTime;
                return r.scheduler.schedule(e.dispatch, o, {
                  index: 0,
                  period: n,
                  subscriber: t,
                });
              }),
              e
            );
          })(i.Observable);
        e.TimerObservable = u;
      },
      5167: (t, e, r) => {
        "use strict";
        var n = r(93),
          o = r(9325),
          i = r(7038),
          s = r(3914);
        e.concat = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          return 1 === t.length || (2 === t.length && n.isScheduler(t[1]))
            ? i.from(t[0])
            : s.concatAll()(o.of.apply(void 0, t));
        };
      },
      6256: (t, e, r) => {
        "use strict";
        var n = r(9735);
        e.empty = n.EmptyObservable.create;
      },
      7038: (t, e, r) => {
        "use strict";
        var n = r(7305);
        e.from = n.FromObservable.create;
      },
      9126: (t, e, r) => {
        "use strict";
        var n = r(9483);
        e.fromEvent = n.FromEventObservable.create;
      },
      3943: (t, e, r) => {
        "use strict";
        var n = r(5100),
          o = r(3418),
          i = r(93),
          s = r(3430);
        e.merge = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          var r = Number.POSITIVE_INFINITY,
            c = null,
            a = t[t.length - 1];
          return (
            i.isScheduler(a)
              ? ((c = t.pop()),
                t.length > 1 &&
                  "number" == typeof t[t.length - 1] &&
                  (r = t.pop()))
              : "number" == typeof a && (r = t.pop()),
            null === c && 1 === t.length && t[0] instanceof n.Observable
              ? t[0]
              : s.mergeAll(r)(new o.ArrayObservable(t, c))
          );
        };
      },
      9325: (t, e, r) => {
        "use strict";
        var n = r(3418);
        e.of = n.ArrayObservable.of;
      },
      4903: (t, e, r) => {
        "use strict";
        var n = r(2453);
        e.timer = n.TimerObservable.create;
      },
      5545: (t, e, r) => {
        "use strict";
        var n = r(2434);
        e.zip = n.zipStatic;
      },
      3914: (t, e, r) => {
        "use strict";
        var n = r(3430);
        e.concatAll = function () {
          return n.mergeAll(1);
        };
      },
      8713: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5239),
          i = r(6447),
          s = r(4456);
        e.distinctUntilChanged = function (t, e) {
          return function (r) {
            return r.lift(new c(t, e));
          };
        };
        var c = (function () {
            function t(t, e) {
              (this.compare = t), (this.keySelector = e);
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new a(t, this.compare, this.keySelector));
              }),
              t
            );
          })(),
          a = (function (t) {
            function e(e, r, n) {
              t.call(this, e),
                (this.keySelector = n),
                (this.hasKey = !1),
                "function" == typeof r && (this.compare = r);
            }
            return (
              n(e, t),
              (e.prototype.compare = function (t, e) {
                return t === e;
              }),
              (e.prototype._next = function (t) {
                var e = t;
                if (
                  this.keySelector &&
                  (e = i.tryCatch(this.keySelector)(t)) === s.errorObject
                )
                  return this.destination.error(s.errorObject.e);
                var r = !1;
                if (this.hasKey) {
                  if (
                    (r = i.tryCatch(this.compare)(this.key, e)) ===
                    s.errorObject
                  )
                    return this.destination.error(s.errorObject.e);
                } else this.hasKey = !0;
                !1 === Boolean(r) && ((this.key = e), this.destination.next(t));
              }),
              e
            );
          })(o.Subscriber);
      },
      8111: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5239);
        e.filter = function (t, e) {
          return function (r) {
            return r.lift(new i(t, e));
          };
        };
        var i = (function () {
            function t(t, e) {
              (this.predicate = t), (this.thisArg = e);
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new s(t, this.predicate, this.thisArg));
              }),
              t
            );
          })(),
          s = (function (t) {
            function e(e, r, n) {
              t.call(this, e),
                (this.predicate = r),
                (this.thisArg = n),
                (this.count = 0);
            }
            return (
              n(e, t),
              (e.prototype._next = function (t) {
                var e;
                try {
                  e = this.predicate.call(this.thisArg, t, this.count++);
                } catch (t) {
                  return void this.destination.error(t);
                }
                e && this.destination.next(t);
              }),
              e
            );
          })(o.Subscriber);
      },
      7064: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5239),
          i = r(4859),
          s = r(5100),
          c = r(8314),
          a = r(5205),
          u = r(1741);
        e.groupBy = function (t, e, r, n) {
          return function (o) {
            return o.lift(new l(t, e, r, n));
          };
        };
        var l = (function () {
            function t(t, e, r, n) {
              (this.keySelector = t),
                (this.elementSelector = e),
                (this.durationSelector = r),
                (this.subjectSelector = n);
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new p(
                    t,
                    this.keySelector,
                    this.elementSelector,
                    this.durationSelector,
                    this.subjectSelector
                  )
                );
              }),
              t
            );
          })(),
          p = (function (t) {
            function e(e, r, n, o, i) {
              t.call(this, e),
                (this.keySelector = r),
                (this.elementSelector = n),
                (this.durationSelector = o),
                (this.subjectSelector = i),
                (this.groups = null),
                (this.attemptedToUnsubscribe = !1),
                (this.count = 0);
            }
            return (
              n(e, t),
              (e.prototype._next = function (t) {
                var e;
                try {
                  e = this.keySelector(t);
                } catch (t) {
                  return void this.error(t);
                }
                this._group(t, e);
              }),
              (e.prototype._group = function (t, e) {
                var r = this.groups;
                r ||
                  (r = this.groups =
                    "string" == typeof e ? new u.FastMap() : new a.Map());
                var n,
                  o = r.get(e);
                if (this.elementSelector)
                  try {
                    n = this.elementSelector(t);
                  } catch (t) {
                    this.error(t);
                  }
                else n = t;
                if (!o) {
                  (o = this.subjectSelector
                    ? this.subjectSelector()
                    : new c.Subject()),
                    r.set(e, o);
                  var i = new f(e, o, this);
                  if ((this.destination.next(i), this.durationSelector)) {
                    var s = void 0;
                    try {
                      s = this.durationSelector(new f(e, o));
                    } catch (t) {
                      return void this.error(t);
                    }
                    this.add(s.subscribe(new h(e, o, this)));
                  }
                }
                o.closed || o.next(n);
              }),
              (e.prototype._error = function (t) {
                var e = this.groups;
                e &&
                  (e.forEach(function (e, r) {
                    e.error(t);
                  }),
                  e.clear()),
                  this.destination.error(t);
              }),
              (e.prototype._complete = function () {
                var t = this.groups;
                t &&
                  (t.forEach(function (t, e) {
                    t.complete();
                  }),
                  t.clear()),
                  this.destination.complete();
              }),
              (e.prototype.removeGroup = function (t) {
                this.groups.delete(t);
              }),
              (e.prototype.unsubscribe = function () {
                this.closed ||
                  ((this.attemptedToUnsubscribe = !0),
                  0 === this.count && t.prototype.unsubscribe.call(this));
              }),
              e
            );
          })(o.Subscriber),
          h = (function (t) {
            function e(e, r, n) {
              t.call(this, r),
                (this.key = e),
                (this.group = r),
                (this.parent = n);
            }
            return (
              n(e, t),
              (e.prototype._next = function (t) {
                this.complete();
              }),
              (e.prototype._unsubscribe = function () {
                var t = this.parent,
                  e = this.key;
                (this.key = this.parent = null), t && t.removeGroup(e);
              }),
              e
            );
          })(o.Subscriber),
          f = (function (t) {
            function e(e, r, n) {
              t.call(this),
                (this.key = e),
                (this.groupSubject = r),
                (this.refCountSubscription = n);
            }
            return (
              n(e, t),
              (e.prototype._subscribe = function (t) {
                var e = new i.Subscription(),
                  r = this.refCountSubscription,
                  n = this.groupSubject;
                return (
                  r && !r.closed && e.add(new d(r)), e.add(n.subscribe(t)), e
                );
              }),
              e
            );
          })(s.Observable);
        e.GroupedObservable = f;
        var d = (function (t) {
          function e(e) {
            t.call(this), (this.parent = e), e.count++;
          }
          return (
            n(e, t),
            (e.prototype.unsubscribe = function () {
              var e = this.parent;
              e.closed ||
                this.closed ||
                (t.prototype.unsubscribe.call(this),
                (e.count -= 1),
                0 === e.count && e.attemptedToUnsubscribe && e.unsubscribe());
            }),
            e
          );
        })(i.Subscription);
      },
      1819: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5239),
          i = r(4985);
        e.ignoreElements = function () {
          return function (t) {
            return t.lift(new s());
          };
        };
        var s = (function () {
            function t() {}
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new c(t));
              }),
              t
            );
          })(),
          c = (function (t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              n(e, t),
              (e.prototype._next = function (t) {
                i.noop();
              }),
              e
            );
          })(o.Subscriber);
      },
      2068: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5239);
        e.map = function (t, e) {
          return function (r) {
            if ("function" != typeof t)
              throw new TypeError(
                "argument is not a function. Are you looking for `mapTo()`?"
              );
            return r.lift(new i(t, e));
          };
        };
        var i = (function () {
          function t(t, e) {
            (this.project = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new s(t, this.project, this.thisArg));
            }),
            t
          );
        })();
        e.MapOperator = i;
        var s = (function (t) {
          function e(e, r, n) {
            t.call(this, e),
              (this.project = r),
              (this.count = 0),
              (this.thisArg = n || this);
          }
          return (
            n(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.project.call(this.thisArg, t, this.count++);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.destination.next(e);
            }),
            e
          );
        })(o.Subscriber);
      },
      8621: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5239);
        e.mapTo = function (t) {
          return function (e) {
            return e.lift(new i(t));
          };
        };
        var i = (function () {
            function t(t) {
              this.value = t;
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new s(t, this.value));
              }),
              t
            );
          })(),
          s = (function (t) {
            function e(e, r) {
              t.call(this, e), (this.value = r);
            }
            return (
              n(e, t),
              (e.prototype._next = function (t) {
                this.destination.next(this.value);
              }),
              e
            );
          })(o.Subscriber);
      },
      3430: (t, e, r) => {
        "use strict";
        var n = r(904),
          o = r(5198);
        e.mergeAll = function (t) {
          return (
            void 0 === t && (t = Number.POSITIVE_INFINITY),
            n.mergeMap(o.identity, null, t)
          );
        };
      },
      904: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(8794),
          i = r(3147);
        e.mergeMap = function (t, e, r) {
          return (
            void 0 === r && (r = Number.POSITIVE_INFINITY),
            function (n) {
              return (
                "number" == typeof e && ((r = e), (e = null)),
                n.lift(new s(t, e, r))
              );
            }
          );
        };
        var s = (function () {
          function t(t, e, r) {
            void 0 === r && (r = Number.POSITIVE_INFINITY),
              (this.project = t),
              (this.resultSelector = e),
              (this.concurrent = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new c(t, this.project, this.resultSelector, this.concurrent)
              );
            }),
            t
          );
        })();
        e.MergeMapOperator = s;
        var c = (function (t) {
          function e(e, r, n, o) {
            void 0 === o && (o = Number.POSITIVE_INFINITY),
              t.call(this, e),
              (this.project = r),
              (this.resultSelector = n),
              (this.concurrent = o),
              (this.hasCompleted = !1),
              (this.buffer = []),
              (this.active = 0),
              (this.index = 0);
          }
          return (
            n(e, t),
            (e.prototype._next = function (t) {
              this.active < this.concurrent
                ? this._tryNext(t)
                : this.buffer.push(t);
            }),
            (e.prototype._tryNext = function (t) {
              var e,
                r = this.index++;
              try {
                e = this.project(t, r);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.active++, this._innerSub(e, t, r);
            }),
            (e.prototype._innerSub = function (t, e, r) {
              this.add(o.subscribeToResult(this, t, e, r));
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  this.destination.complete();
            }),
            (e.prototype.notifyNext = function (t, e, r, n, o) {
              this.resultSelector
                ? this._notifyResultSelector(t, e, r, n)
                : this.destination.next(e);
            }),
            (e.prototype._notifyResultSelector = function (t, e, r, n) {
              var o;
              try {
                o = this.resultSelector(t, e, r, n);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.destination.next(o);
            }),
            (e.prototype.notifyComplete = function (t) {
              var e = this.buffer;
              this.remove(t),
                this.active--,
                e.length > 0
                  ? this._next(e.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    this.destination.complete();
            }),
            e
          );
        })(i.OuterSubscriber);
        e.MergeMapSubscriber = c;
      },
      5462: (t, e, r) => {
        "use strict";
        var n = r(8852);
        e.multicast = function (t, e) {
          return function (r) {
            var i;
            if (
              ((i =
                "function" == typeof t
                  ? t
                  : function () {
                      return t;
                    }),
              "function" == typeof e)
            )
              return r.lift(new o(i, e));
            var s = Object.create(r, n.connectableObservableDescriptor);
            return (s.source = r), (s.subjectFactory = i), s;
          };
        };
        var o = (function () {
          function t(t, e) {
            (this.subjectFactory = t), (this.selector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              var r = this.selector,
                n = this.subjectFactory(),
                o = r(n).subscribe(t);
              return o.add(e.subscribe(n)), o;
            }),
            t
          );
        })();
        e.MulticastOperator = o;
      },
      5633: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5239),
          i = r(8270);
        e.observeOn = function (t, e) {
          return (
            void 0 === e && (e = 0),
            function (r) {
              return r.lift(new s(t, e));
            }
          );
        };
        var s = (function () {
          function t(t, e) {
            void 0 === e && (e = 0), (this.scheduler = t), (this.delay = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new c(t, this.scheduler, this.delay));
            }),
            t
          );
        })();
        e.ObserveOnOperator = s;
        var c = (function (t) {
          function e(e, r, n) {
            void 0 === n && (n = 0),
              t.call(this, e),
              (this.scheduler = r),
              (this.delay = n);
          }
          return (
            n(e, t),
            (e.dispatch = function (t) {
              var e = t.notification,
                r = t.destination;
              e.observe(r), this.unsubscribe();
            }),
            (e.prototype.scheduleMessage = function (t) {
              this.add(
                this.scheduler.schedule(
                  e.dispatch,
                  this.delay,
                  new a(t, this.destination)
                )
              );
            }),
            (e.prototype._next = function (t) {
              this.scheduleMessage(i.Notification.createNext(t));
            }),
            (e.prototype._error = function (t) {
              this.scheduleMessage(i.Notification.createError(t));
            }),
            (e.prototype._complete = function () {
              this.scheduleMessage(i.Notification.createComplete());
            }),
            e
          );
        })(o.Subscriber);
        e.ObserveOnSubscriber = c;
        var a = function (t, e) {
          (this.notification = t), (this.destination = e);
        };
        e.ObserveOnMessage = a;
      },
      1398: (t, e, r) => {
        "use strict";
        var n = r(1088),
          o = r(8111);
        e.partition = function (t, e) {
          return function (r) {
            return [o.filter(t, e)(r), o.filter(n.not(t, e))(r)];
          };
        };
      },
      6370: (t, e, r) => {
        "use strict";
        var n = r(2068);
        function o(t, e) {
          return function (r) {
            for (var n = r, o = 0; o < e; o++) {
              var i = n[t[o]];
              if (void 0 === i) return;
              n = i;
            }
            return n;
          };
        }
        e.pluck = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          var r = t.length;
          if (0 === r) throw new Error("list of properties cannot be empty.");
          return function (e) {
            return n.map(o(t, r))(e);
          };
        };
      },
      3061: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5239);
        e.refCount = function () {
          return function (t) {
            return t.lift(new i(t));
          };
        };
        var i = (function () {
            function t(t) {
              this.connectable = t;
            }
            return (
              (t.prototype.call = function (t, e) {
                var r = this.connectable;
                r._refCount++;
                var n = new s(t, r),
                  o = e.subscribe(n);
                return n.closed || (n.connection = r.connect()), o;
              }),
              t
            );
          })(),
          s = (function (t) {
            function e(e, r) {
              t.call(this, e), (this.connectable = r);
            }
            return (
              n(e, t),
              (e.prototype._unsubscribe = function () {
                var t = this.connectable;
                if (t) {
                  this.connectable = null;
                  var e = t._refCount;
                  if (e <= 0) this.connection = null;
                  else if (((t._refCount = e - 1), e > 1))
                    this.connection = null;
                  else {
                    var r = this.connection,
                      n = t._connection;
                    (this.connection = null),
                      !n || (r && n !== r) || n.unsubscribe();
                  }
                } else this.connection = null;
              }),
              e
            );
          })(o.Subscriber);
      },
      567: (t, e, r) => {
        "use strict";
        var n = r(5462),
          o = r(3061),
          i = r(8314);
        function s() {
          return new i.Subject();
        }
        e.share = function () {
          return function (t) {
            return o.refCount()(n.multicast(s)(t));
          };
        };
      },
      617: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5239);
        e.skip = function (t) {
          return function (e) {
            return e.lift(new i(t));
          };
        };
        var i = (function () {
            function t(t) {
              this.total = t;
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new s(t, this.total));
              }),
              t
            );
          })(),
          s = (function (t) {
            function e(e, r) {
              t.call(this, e), (this.total = r), (this.count = 0);
            }
            return (
              n(e, t),
              (e.prototype._next = function (t) {
                ++this.count > this.total && this.destination.next(t);
              }),
              e
            );
          })(o.Subscriber);
      },
      2946: (t, e, r) => {
        "use strict";
        var n = r(3418),
          o = r(4819),
          i = r(9735),
          s = r(5167),
          c = r(93);
        e.startWith = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          return function (e) {
            var r = t[t.length - 1];
            c.isScheduler(r) ? t.pop() : (r = null);
            var a = t.length;
            return 1 === a
              ? s.concat(new o.ScalarObservable(t[0], r), e)
              : a > 1
              ? s.concat(new n.ArrayObservable(t, r), e)
              : s.concat(new i.EmptyObservable(r), e);
          };
        };
      },
      8348: (t, e, r) => {
        "use strict";
        var n = r(9034);
        e.subscribeOn = function (t, e) {
          return (
            void 0 === e && (e = 0),
            function (r) {
              return r.lift(new o(t, e));
            }
          );
        };
        var o = (function () {
          function t(t, e) {
            (this.scheduler = t), (this.delay = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return new n.SubscribeOnObservable(
                e,
                this.delay,
                this.scheduler
              ).subscribe(t);
            }),
            t
          );
        })();
      },
      6739: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(3147),
          i = r(8794);
        e.switchMap = function (t, e) {
          return function (r) {
            return r.lift(new s(t, e));
          };
        };
        var s = (function () {
            function t(t, e) {
              (this.project = t), (this.resultSelector = e);
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new c(t, this.project, this.resultSelector));
              }),
              t
            );
          })(),
          c = (function (t) {
            function e(e, r, n) {
              t.call(this, e),
                (this.project = r),
                (this.resultSelector = n),
                (this.index = 0);
            }
            return (
              n(e, t),
              (e.prototype._next = function (t) {
                var e,
                  r = this.index++;
                try {
                  e = this.project(t, r);
                } catch (t) {
                  return void this.destination.error(t);
                }
                this._innerSub(e, t, r);
              }),
              (e.prototype._innerSub = function (t, e, r) {
                var n = this.innerSubscription;
                n && n.unsubscribe(),
                  this.add(
                    (this.innerSubscription = i.subscribeToResult(
                      this,
                      t,
                      e,
                      r
                    ))
                  );
              }),
              (e.prototype._complete = function () {
                var e = this.innerSubscription;
                (e && !e.closed) || t.prototype._complete.call(this);
              }),
              (e.prototype._unsubscribe = function () {
                this.innerSubscription = null;
              }),
              (e.prototype.notifyComplete = function (e) {
                this.remove(e),
                  (this.innerSubscription = null),
                  this.isStopped && t.prototype._complete.call(this);
              }),
              (e.prototype.notifyNext = function (t, e, r, n, o) {
                this.resultSelector
                  ? this._tryNotifyNext(t, e, r, n)
                  : this.destination.next(e);
              }),
              (e.prototype._tryNotifyNext = function (t, e, r, n) {
                var o;
                try {
                  o = this.resultSelector(t, e, r, n);
                } catch (t) {
                  return void this.destination.error(t);
                }
                this.destination.next(o);
              }),
              e
            );
          })(o.OuterSubscriber);
      },
      9890: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5239);
        e.tap = function (t, e, r) {
          return function (n) {
            return n.lift(new i(t, e, r));
          };
        };
        var i = (function () {
            function t(t, e, r) {
              (this.nextOrObserver = t), (this.error = e), (this.complete = r);
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new s(t, this.nextOrObserver, this.error, this.complete)
                );
              }),
              t
            );
          })(),
          s = (function (t) {
            function e(e, r, n, i) {
              t.call(this, e);
              var s = new o.Subscriber(r, n, i);
              (s.syncErrorThrowable = !0),
                this.add(s),
                (this.safeSubscriber = s);
            }
            return (
              n(e, t),
              (e.prototype._next = function (t) {
                var e = this.safeSubscriber;
                e.next(t),
                  e.syncErrorThrown
                    ? this.destination.error(e.syncErrorValue)
                    : this.destination.next(t);
              }),
              (e.prototype._error = function (t) {
                var e = this.safeSubscriber;
                e.error(t),
                  e.syncErrorThrown
                    ? this.destination.error(e.syncErrorValue)
                    : this.destination.error(t);
              }),
              (e.prototype._complete = function () {
                var t = this.safeSubscriber;
                t.complete(),
                  t.syncErrorThrown
                    ? this.destination.error(t.syncErrorValue)
                    : this.destination.complete();
              }),
              e
            );
          })(o.Subscriber);
      },
      5636: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(3147),
          i = r(8794);
        e.withLatestFrom = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          return function (e) {
            var r;
            "function" == typeof t[t.length - 1] && (r = t.pop());
            var n = t;
            return e.lift(new s(n, r));
          };
        };
        var s = (function () {
            function t(t, e) {
              (this.observables = t), (this.project = e);
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new c(t, this.observables, this.project));
              }),
              t
            );
          })(),
          c = (function (t) {
            function e(e, r, n) {
              t.call(this, e),
                (this.observables = r),
                (this.project = n),
                (this.toRespond = []);
              var o = r.length;
              this.values = new Array(o);
              for (var s = 0; s < o; s++) this.toRespond.push(s);
              for (s = 0; s < o; s++) {
                var c = r[s];
                this.add(i.subscribeToResult(this, c, c, s));
              }
            }
            return (
              n(e, t),
              (e.prototype.notifyNext = function (t, e, r, n, o) {
                this.values[r] = e;
                var i = this.toRespond;
                if (i.length > 0) {
                  var s = i.indexOf(r);
                  -1 !== s && i.splice(s, 1);
                }
              }),
              (e.prototype.notifyComplete = function () {}),
              (e.prototype._next = function (t) {
                if (0 === this.toRespond.length) {
                  var e = [t].concat(this.values);
                  this.project ? this._tryProject(e) : this.destination.next(e);
                }
              }),
              (e.prototype._tryProject = function (t) {
                var e;
                try {
                  e = this.project.apply(this, t);
                } catch (t) {
                  return void this.destination.error(t);
                }
                this.destination.next(e);
              }),
              e
            );
          })(o.OuterSubscriber);
      },
      2434: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(3418),
          i = r(5936),
          s = r(5239),
          c = r(3147),
          a = r(8794),
          u = r(5810);
        function l() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          var r = t[t.length - 1];
          return (
            "function" == typeof r && t.pop(),
            new o.ArrayObservable(t).lift(new p(r))
          );
        }
        (e.zip = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          return function (e) {
            return e.lift.call(l.apply(void 0, [e].concat(t)));
          };
        }),
          (e.zipStatic = l);
        var p = (function () {
          function t(t) {
            this.project = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new h(t, this.project));
            }),
            t
          );
        })();
        e.ZipOperator = p;
        var h = (function (t) {
          function e(e, r, n) {
            void 0 === n && (n = Object.create(null)),
              t.call(this, e),
              (this.iterators = []),
              (this.active = 0),
              (this.project = "function" == typeof r ? r : null),
              (this.values = n);
          }
          return (
            n(e, t),
            (e.prototype._next = function (t) {
              var e = this.iterators;
              i.isArray(t)
                ? e.push(new d(t))
                : "function" == typeof t[u.iterator]
                ? e.push(new f(t[u.iterator]()))
                : e.push(new y(this.destination, this, t));
            }),
            (e.prototype._complete = function () {
              var t = this.iterators,
                e = t.length;
              if (0 !== e) {
                this.active = e;
                for (var r = 0; r < e; r++) {
                  var n = t[r];
                  n.stillUnsubscribed
                    ? this.add(n.subscribe(n, r))
                    : this.active--;
                }
              } else this.destination.complete();
            }),
            (e.prototype.notifyInactive = function () {
              this.active--, 0 === this.active && this.destination.complete();
            }),
            (e.prototype.checkIterators = function () {
              for (
                var t = this.iterators,
                  e = t.length,
                  r = this.destination,
                  n = 0;
                n < e;
                n++
              )
                if ("function" == typeof (s = t[n]).hasValue && !s.hasValue())
                  return;
              var o = !1,
                i = [];
              for (n = 0; n < e; n++) {
                var s,
                  c = (s = t[n]).next();
                if ((s.hasCompleted() && (o = !0), c.done))
                  return void r.complete();
                i.push(c.value);
              }
              this.project ? this._tryProject(i) : r.next(i), o && r.complete();
            }),
            (e.prototype._tryProject = function (t) {
              var e;
              try {
                e = this.project.apply(this, t);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.destination.next(e);
            }),
            e
          );
        })(s.Subscriber);
        e.ZipSubscriber = h;
        var f = (function () {
            function t(t) {
              (this.iterator = t), (this.nextResult = t.next());
            }
            return (
              (t.prototype.hasValue = function () {
                return !0;
              }),
              (t.prototype.next = function () {
                var t = this.nextResult;
                return (this.nextResult = this.iterator.next()), t;
              }),
              (t.prototype.hasCompleted = function () {
                var t = this.nextResult;
                return t && t.done;
              }),
              t
            );
          })(),
          d = (function () {
            function t(t) {
              (this.array = t),
                (this.index = 0),
                (this.length = 0),
                (this.length = t.length);
            }
            return (
              (t.prototype[u.iterator] = function () {
                return this;
              }),
              (t.prototype.next = function (t) {
                var e = this.index++,
                  r = this.array;
                return e < this.length
                  ? { value: r[e], done: !1 }
                  : { value: null, done: !0 };
              }),
              (t.prototype.hasValue = function () {
                return this.array.length > this.index;
              }),
              (t.prototype.hasCompleted = function () {
                return this.array.length === this.index;
              }),
              t
            );
          })(),
          y = (function (t) {
            function e(e, r, n) {
              t.call(this, e),
                (this.parent = r),
                (this.observable = n),
                (this.stillUnsubscribed = !0),
                (this.buffer = []),
                (this.isComplete = !1);
            }
            return (
              n(e, t),
              (e.prototype[u.iterator] = function () {
                return this;
              }),
              (e.prototype.next = function () {
                var t = this.buffer;
                return 0 === t.length && this.isComplete
                  ? { value: null, done: !0 }
                  : { value: t.shift(), done: !1 };
              }),
              (e.prototype.hasValue = function () {
                return this.buffer.length > 0;
              }),
              (e.prototype.hasCompleted = function () {
                return 0 === this.buffer.length && this.isComplete;
              }),
              (e.prototype.notifyComplete = function () {
                this.buffer.length > 0
                  ? ((this.isComplete = !0), this.parent.notifyInactive())
                  : this.destination.complete();
              }),
              (e.prototype.notifyNext = function (t, e, r, n, o) {
                this.buffer.push(e), this.parent.checkIterators();
              }),
              (e.prototype.subscribe = function (t, e) {
                return a.subscribeToResult(this, this.observable, this, e);
              }),
              e
            );
          })(c.OuterSubscriber);
      },
      3896: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = (function (t) {
            function e(e, r) {
              t.call(this);
            }
            return (
              n(e, t),
              (e.prototype.schedule = function (t, e) {
                return void 0 === e && (e = 0), this;
              }),
              e
            );
          })(r(4859).Subscription);
        e.Action = o;
      },
      2808: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(5561),
          i = (function (t) {
            function e(e, r) {
              t.call(this, e, r), (this.scheduler = e), (this.work = r);
            }
            return (
              n(e, t),
              (e.prototype.requestAsyncId = function (e, r, n) {
                return (
                  void 0 === n && (n = 0),
                  null !== n && n > 0
                    ? t.prototype.requestAsyncId.call(this, e, r, n)
                    : (e.actions.push(this),
                      e.scheduled ||
                        (e.scheduled = o.Immediate.setImmediate(
                          e.flush.bind(e, null)
                        )))
                );
              }),
              (e.prototype.recycleAsyncId = function (e, r, n) {
                if (
                  (void 0 === n && (n = 0),
                  (null !== n && n > 0) || (null === n && this.delay > 0))
                )
                  return t.prototype.recycleAsyncId.call(this, e, r, n);
                0 === e.actions.length &&
                  (o.Immediate.clearImmediate(r), (e.scheduled = void 0));
              }),
              e
            );
          })(r(2932).AsyncAction);
        e.AsapAction = i;
      },
      9953: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = (function (t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              n(e, t),
              (e.prototype.flush = function (t) {
                (this.active = !0), (this.scheduled = void 0);
                var e,
                  r = this.actions,
                  n = -1,
                  o = r.length;
                t = t || r.shift();
                do {
                  if ((e = t.execute(t.state, t.delay))) break;
                } while (++n < o && (t = r.shift()));
                if (((this.active = !1), e)) {
                  for (; ++n < o && (t = r.shift()); ) t.unsubscribe();
                  throw e;
                }
              }),
              e
            );
          })(r(884).AsyncScheduler);
        e.AsapScheduler = o;
      },
      2932: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = r(7919),
          i = (function (t) {
            function e(e, r) {
              t.call(this, e, r),
                (this.scheduler = e),
                (this.pending = !1),
                (this.work = r);
            }
            return (
              n(e, t),
              (e.prototype.schedule = function (t, e) {
                if ((void 0 === e && (e = 0), this.closed)) return this;
                (this.state = t), (this.pending = !0);
                var r = this.id,
                  n = this.scheduler;
                return (
                  null != r && (this.id = this.recycleAsyncId(n, r, e)),
                  (this.delay = e),
                  (this.id = this.id || this.requestAsyncId(n, this.id, e)),
                  this
                );
              }),
              (e.prototype.requestAsyncId = function (t, e, r) {
                return (
                  void 0 === r && (r = 0),
                  o.root.setInterval(t.flush.bind(t, this), r)
                );
              }),
              (e.prototype.recycleAsyncId = function (t, e, r) {
                if (
                  (void 0 === r && (r = 0),
                  null !== r && this.delay === r && !1 === this.pending)
                )
                  return e;
                o.root.clearInterval(e);
              }),
              (e.prototype.execute = function (t, e) {
                if (this.closed)
                  return new Error("executing a cancelled action");
                this.pending = !1;
                var r = this._execute(t, e);
                if (r) return r;
                !1 === this.pending &&
                  null != this.id &&
                  (this.id = this.recycleAsyncId(
                    this.scheduler,
                    this.id,
                    null
                  ));
              }),
              (e.prototype._execute = function (t, e) {
                var r = !1,
                  n = void 0;
                try {
                  this.work(t);
                } catch (t) {
                  (r = !0), (n = (!!t && t) || new Error(t));
                }
                if (r) return this.unsubscribe(), n;
              }),
              (e.prototype._unsubscribe = function () {
                var t = this.id,
                  e = this.scheduler,
                  r = e.actions,
                  n = r.indexOf(this);
                (this.work = null),
                  (this.state = null),
                  (this.pending = !1),
                  (this.scheduler = null),
                  -1 !== n && r.splice(n, 1),
                  null != t && (this.id = this.recycleAsyncId(e, t, null)),
                  (this.delay = null);
              }),
              e
            );
          })(r(3896).Action);
        e.AsyncAction = i;
      },
      884: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          o = (function (t) {
            function e() {
              t.apply(this, arguments),
                (this.actions = []),
                (this.active = !1),
                (this.scheduled = void 0);
            }
            return (
              n(e, t),
              (e.prototype.flush = function (t) {
                var e = this.actions;
                if (this.active) e.push(t);
                else {
                  var r;
                  this.active = !0;
                  do {
                    if ((r = t.execute(t.state, t.delay))) break;
                  } while ((t = e.shift()));
                  if (((this.active = !1), r)) {
                    for (; (t = e.shift()); ) t.unsubscribe();
                    throw r;
                  }
                }
              }),
              e
            );
          })(r(3422).Scheduler);
        e.AsyncScheduler = o;
      },
      2664: (t, e, r) => {
        "use strict";
        var n = r(2808),
          o = r(9953);
        e.asap = new o.AsapScheduler(n.AsapAction);
      },
      8404: (t, e, r) => {
        "use strict";
        var n = r(2932),
          o = r(884);
        e.async = new o.AsyncScheduler(n.AsyncAction);
      },
      5810: (t, e, r) => {
        "use strict";
        var n = r(7919);
        function o(t) {
          var e = t.Symbol;
          if ("function" == typeof e)
            return (
              e.iterator || (e.iterator = e("iterator polyfill")), e.iterator
            );
          var r = t.Set;
          if (r && "function" == typeof new r()["@@iterator"])
            return "@@iterator";
          var n = t.Map;
          if (n)
            for (
              var o = Object.getOwnPropertyNames(n.prototype), i = 0;
              i < o.length;
              ++i
            ) {
              var s = o[i];
              if (
                "entries" !== s &&
                "size" !== s &&
                n.prototype[s] === n.prototype.entries
              )
                return s;
            }
          return "@@iterator";
        }
        (e.symbolIteratorPonyfill = o),
          (e.iterator = o(n.root)),
          (e.$$iterator = e.iterator);
      },
      683: (t, e, r) => {
        "use strict";
        var n = r(7919);
        function o(t) {
          var e,
            r = t.Symbol;
          return (
            "function" == typeof r
              ? r.observable
                ? (e = r.observable)
                : ((e = r("observable")), (r.observable = e))
              : (e = "@@observable"),
            e
          );
        }
        (e.getSymbolObservable = o),
          (e.observable = o(n.root)),
          (e.$$observable = e.observable);
      },
      2992: (t, e, r) => {
        "use strict";
        var n = r(7919).root.Symbol;
        (e.rxSubscriber =
          "function" == typeof n && "function" == typeof n.for
            ? n.for("rxSubscriber")
            : "@@rxSubscriber"),
          (e.$$rxSubscriber = e.rxSubscriber);
      },
      1741: (t, e) => {
        "use strict";
        var r = (function () {
          function t() {
            this.values = {};
          }
          return (
            (t.prototype.delete = function (t) {
              return (this.values[t] = null), !0;
            }),
            (t.prototype.set = function (t, e) {
              return (this.values[t] = e), this;
            }),
            (t.prototype.get = function (t) {
              return this.values[t];
            }),
            (t.prototype.forEach = function (t, e) {
              var r = this.values;
              for (var n in r)
                r.hasOwnProperty(n) && null !== r[n] && t.call(e, r[n], n);
            }),
            (t.prototype.clear = function () {
              this.values = {};
            }),
            t
          );
        })();
        e.FastMap = r;
      },
      5561: (t, e, r) => {
        "use strict";
        var n = r(7919),
          o = (function () {
            function t(t) {
              if (
                ((this.root = t),
                t.setImmediate && "function" == typeof t.setImmediate)
              )
                (this.setImmediate = t.setImmediate.bind(t)),
                  (this.clearImmediate = t.clearImmediate.bind(t));
              else {
                (this.nextHandle = 1),
                  (this.tasksByHandle = {}),
                  (this.currentlyRunningATask = !1),
                  this.canUseProcessNextTick()
                    ? (this.setImmediate =
                        this.createProcessNextTickSetImmediate())
                    : this.canUsePostMessage()
                    ? (this.setImmediate = this.createPostMessageSetImmediate())
                    : this.canUseMessageChannel()
                    ? (this.setImmediate =
                        this.createMessageChannelSetImmediate())
                    : this.canUseReadyStateChange()
                    ? (this.setImmediate =
                        this.createReadyStateChangeSetImmediate())
                    : (this.setImmediate = this.createSetTimeoutSetImmediate());
                var e = function t(e) {
                  delete t.instance.tasksByHandle[e];
                };
                (e.instance = this), (this.clearImmediate = e);
              }
            }
            return (
              (t.prototype.identify = function (t) {
                return this.root.Object.prototype.toString.call(t);
              }),
              (t.prototype.canUseProcessNextTick = function () {
                return "[object process]" === this.identify(this.root.process);
              }),
              (t.prototype.canUseMessageChannel = function () {
                return Boolean(this.root.MessageChannel);
              }),
              (t.prototype.canUseReadyStateChange = function () {
                var t = this.root.document;
                return Boolean(
                  t && "onreadystatechange" in t.createElement("script")
                );
              }),
              (t.prototype.canUsePostMessage = function () {
                var t = this.root;
                if (t.postMessage && !t.importScripts) {
                  var e = !0,
                    r = t.onmessage;
                  return (
                    (t.onmessage = function () {
                      e = !1;
                    }),
                    t.postMessage("", "*"),
                    (t.onmessage = r),
                    e
                  );
                }
                return !1;
              }),
              (t.prototype.partiallyApplied = function (t) {
                for (var e = [], r = 1; r < arguments.length; r++)
                  e[r - 1] = arguments[r];
                var n = function t() {
                  var e = t.handler,
                    r = t.args;
                  "function" == typeof e
                    ? e.apply(void 0, r)
                    : new Function("" + e)();
                };
                return (n.handler = t), (n.args = e), n;
              }),
              (t.prototype.addFromSetImmediateArguments = function (t) {
                return (
                  (this.tasksByHandle[this.nextHandle] =
                    this.partiallyApplied.apply(void 0, t)),
                  this.nextHandle++
                );
              }),
              (t.prototype.createProcessNextTickSetImmediate = function () {
                var t = function t() {
                  var e = t.instance,
                    r = e.addFromSetImmediateArguments(arguments);
                  return (
                    e.root.process.nextTick(
                      e.partiallyApplied(e.runIfPresent, r)
                    ),
                    r
                  );
                };
                return (t.instance = this), t;
              }),
              (t.prototype.createPostMessageSetImmediate = function () {
                var t = this.root,
                  e = "setImmediate$" + t.Math.random() + "$",
                  r = function r(n) {
                    var o = r.instance;
                    n.source === t &&
                      "string" == typeof n.data &&
                      0 === n.data.indexOf(e) &&
                      o.runIfPresent(+n.data.slice(e.length));
                  };
                (r.instance = this), t.addEventListener("message", r, !1);
                var n = function t() {
                  var e = t,
                    r = e.messagePrefix,
                    n = e.instance,
                    o = n.addFromSetImmediateArguments(arguments);
                  return n.root.postMessage(r + o, "*"), o;
                };
                return (n.instance = this), (n.messagePrefix = e), n;
              }),
              (t.prototype.runIfPresent = function (t) {
                if (this.currentlyRunningATask)
                  this.root.setTimeout(
                    this.partiallyApplied(this.runIfPresent, t),
                    0
                  );
                else {
                  var e = this.tasksByHandle[t];
                  if (e) {
                    this.currentlyRunningATask = !0;
                    try {
                      e();
                    } finally {
                      this.clearImmediate(t), (this.currentlyRunningATask = !1);
                    }
                  }
                }
              }),
              (t.prototype.createMessageChannelSetImmediate = function () {
                var t = this,
                  e = new this.root.MessageChannel();
                e.port1.onmessage = function (e) {
                  var r = e.data;
                  t.runIfPresent(r);
                };
                var r = function t() {
                  var e = t,
                    r = e.channel,
                    n = e.instance,
                    o = n.addFromSetImmediateArguments(arguments);
                  return r.port2.postMessage(o), o;
                };
                return (r.channel = e), (r.instance = this), r;
              }),
              (t.prototype.createReadyStateChangeSetImmediate = function () {
                var t = function t() {
                  var e = t.instance,
                    r = e.root,
                    n = r.document,
                    o = n.documentElement,
                    i = e.addFromSetImmediateArguments(arguments),
                    s = n.createElement("script");
                  return (
                    (s.onreadystatechange = function () {
                      e.runIfPresent(i),
                        (s.onreadystatechange = null),
                        o.removeChild(s),
                        (s = null);
                    }),
                    o.appendChild(s),
                    i
                  );
                };
                return (t.instance = this), t;
              }),
              (t.prototype.createSetTimeoutSetImmediate = function () {
                var t = function t() {
                  var e = t.instance,
                    r = e.addFromSetImmediateArguments(arguments);
                  return (
                    e.root.setTimeout(e.partiallyApplied(e.runIfPresent, r), 0),
                    r
                  );
                };
                return (t.instance = this), t;
              }),
              t
            );
          })();
        (e.ImmediateDefinition = o), (e.Immediate = new o(n.root));
      },
      5205: (t, e, r) => {
        "use strict";
        var n = r(7919),
          o = r(4846);
        e.Map = n.root.Map || o.MapPolyfill;
      },
      4846: (t, e) => {
        "use strict";
        var r = (function () {
          function t() {
            (this.size = 0), (this._values = []), (this._keys = []);
          }
          return (
            (t.prototype.get = function (t) {
              var e = this._keys.indexOf(t);
              return -1 === e ? void 0 : this._values[e];
            }),
            (t.prototype.set = function (t, e) {
              var r = this._keys.indexOf(t);
              return (
                -1 === r
                  ? (this._keys.push(t), this._values.push(e), this.size++)
                  : (this._values[r] = e),
                this
              );
            }),
            (t.prototype.delete = function (t) {
              var e = this._keys.indexOf(t);
              return (
                -1 !== e &&
                (this._values.splice(e, 1),
                this._keys.splice(e, 1),
                this.size--,
                !0)
              );
            }),
            (t.prototype.clear = function () {
              (this._keys.length = 0),
                (this._values.length = 0),
                (this.size = 0);
            }),
            (t.prototype.forEach = function (t, e) {
              for (var r = 0; r < this.size; r++)
                t.call(e, this._values[r], this._keys[r]);
            }),
            t
          );
        })();
        e.MapPolyfill = r;
      },
      7376: function (t, e) {
        "use strict";
        var r =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          n = (function (t) {
            function e() {
              var e = t.call(this, "object unsubscribed");
              (this.name = e.name = "ObjectUnsubscribedError"),
                (this.stack = e.stack),
                (this.message = e.message);
            }
            return r(e, t), e;
          })(Error);
        e.ObjectUnsubscribedError = n;
      },
      6288: function (t, e) {
        "use strict";
        var r =
            (this && this.__extends) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              function n() {
                this.constructor = t;
              }
              t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n());
            },
          n = (function (t) {
            function e(e) {
              t.call(this), (this.errors = e);
              var r = Error.call(
                this,
                e
                  ? e.length +
                      " errors occurred during unsubscription:\n  " +
                      e
                        .map(function (t, e) {
                          return e + 1 + ") " + t.toString();
                        })
                        .join("\n  ")
                  : ""
              );
              (this.name = r.name = "UnsubscriptionError"),
                (this.stack = r.stack),
                (this.message = r.message);
            }
            return r(e, t), e;
          })(Error);
        e.UnsubscriptionError = n;
      },
      4456: (t, e) => {
        "use strict";
        e.errorObject = { e: {} };
      },
      5198: (t, e) => {
        "use strict";
        e.identity = function (t) {
          return t;
        };
      },
      5936: (t, e) => {
        "use strict";
        e.isArray =
          Array.isArray ||
          function (t) {
            return t && "number" == typeof t.length;
          };
      },
      2900: (t, e) => {
        "use strict";
        e.isArrayLike = function (t) {
          return t && "number" == typeof t.length;
        };
      },
      1589: (t, e) => {
        "use strict";
        e.isDate = function (t) {
          return t instanceof Date && !isNaN(+t);
        };
      },
      1404: (t, e) => {
        "use strict";
        e.isFunction = function (t) {
          return "function" == typeof t;
        };
      },
      3523: (t, e, r) => {
        "use strict";
        var n = r(5936);
        e.isNumeric = function (t) {
          return !n.isArray(t) && t - parseFloat(t) + 1 >= 0;
        };
      },
      4548: (t, e) => {
        "use strict";
        e.isObject = function (t) {
          return null != t && "object" == typeof t;
        };
      },
      338: (t, e) => {
        "use strict";
        e.isPromise = function (t) {
          return (
            t && "function" != typeof t.subscribe && "function" == typeof t.then
          );
        };
      },
      93: (t, e) => {
        "use strict";
        e.isScheduler = function (t) {
          return t && "function" == typeof t.schedule;
        };
      },
      4985: (t, e) => {
        "use strict";
        e.noop = function () {};
      },
      1088: (t, e) => {
        "use strict";
        e.not = function (t, e) {
          function r() {
            return !r.pred.apply(r.thisArg, arguments);
          }
          return (r.pred = t), (r.thisArg = e), r;
        };
      },
      6903: (t, e, r) => {
        "use strict";
        var n = r(4985);
        function o(t) {
          return t
            ? 1 === t.length
              ? t[0]
              : function (e) {
                  return t.reduce(function (t, e) {
                    return e(t);
                  }, e);
                }
            : n.noop;
        }
        (e.pipe = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          return o(t);
        }),
          (e.pipeFromArray = o);
      },
      7919: (t, e, r) => {
        "use strict";
        var n = "undefined" != typeof window && window,
          o =
            "undefined" != typeof self &&
            "undefined" != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            self,
          i = void 0 !== r.g && r.g,
          s = n || i || o;
        (e.root = s),
          (function () {
            if (!s)
              throw new Error(
                "RxJS could not find any global context (window, self, global)"
              );
          })();
      },
      8794: (t, e, r) => {
        "use strict";
        var n = r(7919),
          o = r(2900),
          i = r(338),
          s = r(4548),
          c = r(5100),
          a = r(5810),
          u = r(7056),
          l = r(683);
        e.subscribeToResult = function (t, e, r, p) {
          var h = new u.InnerSubscriber(t, r, p);
          if (h.closed) return null;
          if (e instanceof c.Observable)
            return e._isScalar
              ? (h.next(e.value), h.complete(), null)
              : ((h.syncErrorThrowable = !0), e.subscribe(h));
          if (o.isArrayLike(e)) {
            for (var f = 0, d = e.length; f < d && !h.closed; f++) h.next(e[f]);
            h.closed || h.complete();
          } else {
            if (i.isPromise(e))
              return (
                e
                  .then(
                    function (t) {
                      h.closed || (h.next(t), h.complete());
                    },
                    function (t) {
                      return h.error(t);
                    }
                  )
                  .then(null, function (t) {
                    n.root.setTimeout(function () {
                      throw t;
                    });
                  }),
                h
              );
            if (e && "function" == typeof e[a.iterator])
              for (var y = e[a.iterator](); ; ) {
                var b = y.next();
                if (b.done) {
                  h.complete();
                  break;
                }
                if ((h.next(b.value), h.closed)) break;
              }
            else if (e && "function" == typeof e[l.observable]) {
              var m = e[l.observable]();
              if ("function" == typeof m.subscribe)
                return m.subscribe(new u.InnerSubscriber(t, r, p));
              h.error(
                new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                )
              );
            } else {
              var v =
                "You provided " +
                (s.isObject(e) ? "an invalid object" : "'" + e + "'") +
                " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
              h.error(new TypeError(v));
            }
          }
          return null;
        };
      },
      9510: (t, e, r) => {
        "use strict";
        var n = r(5239),
          o = r(2992),
          i = r(9275);
        e.toSubscriber = function (t, e, r) {
          if (t) {
            if (t instanceof n.Subscriber) return t;
            if (t[o.rxSubscriber]) return t[o.rxSubscriber]();
          }
          return t || e || r
            ? new n.Subscriber(t, e, r)
            : new n.Subscriber(i.empty);
        };
      },
      6447: (t, e, r) => {
        "use strict";
        var n,
          o = r(4456);
        function i() {
          try {
            return n.apply(this, arguments);
          } catch (t) {
            return (o.errorObject.e = t), o.errorObject;
          }
        }
        e.tryCatch = function (t) {
          return (n = t), i;
        };
      },
      3859: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default =
            e.connect =
            e.io =
            e.Socket =
            e.Manager =
            e.protocol =
              void 0);
        const o = r(8826),
          i = r(4335);
        Object.defineProperty(e, "Manager", {
          enumerable: !0,
          get: function () {
            return i.Manager;
          },
        });
        const s = r(6350);
        Object.defineProperty(e, "Socket", {
          enumerable: !0,
          get: function () {
            return s.Socket;
          },
        });
        const c = n(r(3669)).default("socket.io-client"),
          a = {};
        function u(t, e) {
          "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
          const r = o.url(t, e.path || "/socket.io"),
            n = r.source,
            s = r.id,
            u = r.path,
            l = a[s] && u in a[s].nsps;
          let p;
          return (
            e.forceNew || e["force new connection"] || !1 === e.multiplex || l
              ? (c("ignoring socket cache for %s", n),
                (p = new i.Manager(n, e)))
              : (a[s] ||
                  (c("new io instance for %s", n),
                  (a[s] = new i.Manager(n, e))),
                (p = a[s])),
            r.query && !e.query && (e.query = r.queryKey),
            p.socket(r.path, e)
          );
        }
        (e.io = u),
          (e.connect = u),
          (e.default = u),
          Object.assign(u, {
            Manager: i.Manager,
            Socket: s.Socket,
            io: u,
            connect: u,
          });
        var l = r(8679);
        Object.defineProperty(e, "protocol", {
          enumerable: !0,
          get: function () {
            return l.protocol;
          },
        }),
          (t.exports = u);
      },
      4335: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, r, n) {
                  void 0 === n && (n = r),
                    Object.defineProperty(t, n, {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    });
                }
              : function (t, e, r, n) {
                  void 0 === n && (n = r), (t[n] = e[r]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, e) {
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e,
                  });
                }
              : function (t, e) {
                  t.default = e;
                }),
          i =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var r in t)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(t, r) &&
                    n(e, t, r);
              return o(e, t), e;
            },
          s =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Manager = void 0);
        const c = r(3401),
          a = r(6350),
          u = i(r(8679)),
          l = r(5182),
          p = s(r(3010)),
          h = r(3063),
          f = s(r(3669)).default("socket.io-client:manager");
        class d extends h.Emitter {
          constructor(t, e) {
            var r;
            super(),
              (this.nsps = {}),
              (this.subs = []),
              t && "object" == typeof t && ((e = t), (t = void 0)),
              ((e = e || {}).path = e.path || "/socket.io"),
              (this.opts = e),
              c.installTimerFunctions(this, e),
              this.reconnection(!1 !== e.reconnection),
              this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
              this.reconnectionDelay(e.reconnectionDelay || 1e3),
              this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
              this.randomizationFactor(
                null !== (r = e.randomizationFactor) && void 0 !== r ? r : 0.5
              ),
              (this.backoff = new p.default({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor(),
              })),
              this.timeout(null == e.timeout ? 2e4 : e.timeout),
              (this._readyState = "closed"),
              (this.uri = t);
            const n = e.parser || u;
            (this.encoder = new n.Encoder()),
              (this.decoder = new n.Decoder()),
              (this._autoConnect = !1 !== e.autoConnect),
              this._autoConnect && this.open();
          }
          reconnection(t) {
            return arguments.length
              ? ((this._reconnection = !!t), this)
              : this._reconnection;
          }
          reconnectionAttempts(t) {
            return void 0 === t
              ? this._reconnectionAttempts
              : ((this._reconnectionAttempts = t), this);
          }
          reconnectionDelay(t) {
            var e;
            return void 0 === t
              ? this._reconnectionDelay
              : ((this._reconnectionDelay = t),
                null === (e = this.backoff) || void 0 === e || e.setMin(t),
                this);
          }
          randomizationFactor(t) {
            var e;
            return void 0 === t
              ? this._randomizationFactor
              : ((this._randomizationFactor = t),
                null === (e = this.backoff) || void 0 === e || e.setJitter(t),
                this);
          }
          reconnectionDelayMax(t) {
            var e;
            return void 0 === t
              ? this._reconnectionDelayMax
              : ((this._reconnectionDelayMax = t),
                null === (e = this.backoff) || void 0 === e || e.setMax(t),
                this);
          }
          timeout(t) {
            return arguments.length
              ? ((this._timeout = t), this)
              : this._timeout;
          }
          maybeReconnectOnOpen() {
            !this._reconnecting &&
              this._reconnection &&
              0 === this.backoff.attempts &&
              this.reconnect();
          }
          open(t) {
            if (
              (f("readyState %s", this._readyState),
              ~this._readyState.indexOf("open"))
            )
              return this;
            f("opening %s", this.uri),
              (this.engine = new c.Socket(this.uri, this.opts));
            const e = this.engine,
              r = this;
            (this._readyState = "opening"), (this.skipReconnect = !1);
            const n = l.on(e, "open", function () {
                r.onopen(), t && t();
              }),
              o = l.on(e, "error", (e) => {
                f("error"),
                  r.cleanup(),
                  (r._readyState = "closed"),
                  this.emitReserved("error", e),
                  t ? t(e) : r.maybeReconnectOnOpen();
              });
            if (!1 !== this._timeout) {
              const t = this._timeout;
              f("connect attempt will timeout after %d", t), 0 === t && n();
              const r = this.setTimeoutFn(() => {
                f("connect attempt timed out after %d", t),
                  n(),
                  e.close(),
                  e.emit("error", new Error("timeout"));
              }, t);
              this.opts.autoUnref && r.unref(),
                this.subs.push(function () {
                  clearTimeout(r);
                });
            }
            return this.subs.push(n), this.subs.push(o), this;
          }
          connect(t) {
            return this.open(t);
          }
          onopen() {
            f("open"),
              this.cleanup(),
              (this._readyState = "open"),
              this.emitReserved("open");
            const t = this.engine;
            this.subs.push(
              l.on(t, "ping", this.onping.bind(this)),
              l.on(t, "data", this.ondata.bind(this)),
              l.on(t, "error", this.onerror.bind(this)),
              l.on(t, "close", this.onclose.bind(this)),
              l.on(this.decoder, "decoded", this.ondecoded.bind(this))
            );
          }
          onping() {
            this.emitReserved("ping");
          }
          ondata(t) {
            this.decoder.add(t);
          }
          ondecoded(t) {
            this.emitReserved("packet", t);
          }
          onerror(t) {
            f("error", t), this.emitReserved("error", t);
          }
          socket(t, e) {
            let r = this.nsps[t];
            return r || ((r = new a.Socket(this, t, e)), (this.nsps[t] = r)), r;
          }
          _destroy(t) {
            const e = Object.keys(this.nsps);
            for (const t of e)
              if (this.nsps[t].active)
                return void f("socket %s is still active, skipping close", t);
            this._close();
          }
          _packet(t) {
            f("writing packet %j", t);
            const e = this.encoder.encode(t);
            for (let r = 0; r < e.length; r++)
              this.engine.write(e[r], t.options);
          }
          cleanup() {
            f("cleanup"),
              this.subs.forEach((t) => t()),
              (this.subs.length = 0),
              this.decoder.destroy();
          }
          _close() {
            f("disconnect"),
              (this.skipReconnect = !0),
              (this._reconnecting = !1),
              this.onclose("forced close"),
              this.engine && this.engine.close();
          }
          disconnect() {
            return this._close();
          }
          onclose(t) {
            f("closed due to %s", t),
              this.cleanup(),
              this.backoff.reset(),
              (this._readyState = "closed"),
              this.emitReserved("close", t),
              this._reconnection && !this.skipReconnect && this.reconnect();
          }
          reconnect() {
            if (this._reconnecting || this.skipReconnect) return this;
            const t = this;
            if (this.backoff.attempts >= this._reconnectionAttempts)
              f("reconnect failed"),
                this.backoff.reset(),
                this.emitReserved("reconnect_failed"),
                (this._reconnecting = !1);
            else {
              const e = this.backoff.duration();
              f("will wait %dms before reconnect attempt", e),
                (this._reconnecting = !0);
              const r = this.setTimeoutFn(() => {
                t.skipReconnect ||
                  (f("attempting reconnect"),
                  this.emitReserved("reconnect_attempt", t.backoff.attempts),
                  t.skipReconnect ||
                    t.open((e) => {
                      e
                        ? (f("reconnect attempt error"),
                          (t._reconnecting = !1),
                          t.reconnect(),
                          this.emitReserved("reconnect_error", e))
                        : (f("reconnect success"), t.onreconnect());
                    }));
              }, e);
              this.opts.autoUnref && r.unref(),
                this.subs.push(function () {
                  clearTimeout(r);
                });
            }
          }
          onreconnect() {
            const t = this.backoff.attempts;
            (this._reconnecting = !1),
              this.backoff.reset(),
              this.emitReserved("reconnect", t);
          }
        }
        e.Manager = d;
      },
      5182: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.on = void 0),
          (e.on = function (t, e, r) {
            return (
              t.on(e, r),
              function () {
                t.off(e, r);
              }
            );
          });
      },
      6350: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Socket = void 0);
        const o = r(8679),
          i = r(5182),
          s = r(3063),
          c = n(r(3669)).default("socket.io-client:socket"),
          a = Object.freeze({
            connect: 1,
            connect_error: 1,
            disconnect: 1,
            disconnecting: 1,
            newListener: 1,
            removeListener: 1,
          });
        class u extends s.Emitter {
          constructor(t, e, r) {
            super(),
              (this.connected = !1),
              (this.disconnected = !0),
              (this.receiveBuffer = []),
              (this.sendBuffer = []),
              (this.ids = 0),
              (this.acks = {}),
              (this.flags = {}),
              (this.io = t),
              (this.nsp = e),
              r && r.auth && (this.auth = r.auth),
              this.io._autoConnect && this.open();
          }
          subEvents() {
            if (this.subs) return;
            const t = this.io;
            this.subs = [
              i.on(t, "open", this.onopen.bind(this)),
              i.on(t, "packet", this.onpacket.bind(this)),
              i.on(t, "error", this.onerror.bind(this)),
              i.on(t, "close", this.onclose.bind(this)),
            ];
          }
          get active() {
            return !!this.subs;
          }
          connect() {
            return (
              this.connected ||
                (this.subEvents(),
                this.io._reconnecting || this.io.open(),
                "open" === this.io._readyState && this.onopen()),
              this
            );
          }
          open() {
            return this.connect();
          }
          send(...t) {
            return t.unshift("message"), this.emit.apply(this, t), this;
          }
          emit(t, ...e) {
            if (a.hasOwnProperty(t))
              throw new Error('"' + t + '" is a reserved event name');
            e.unshift(t);
            const r = { type: o.PacketType.EVENT, data: e, options: {} };
            if (
              ((r.options.compress = !1 !== this.flags.compress),
              "function" == typeof e[e.length - 1])
            ) {
              const t = this.ids++;
              c("emitting packet with ack id %d", t);
              const n = e.pop();
              this._registerAckCallback(t, n), (r.id = t);
            }
            const n =
              this.io.engine &&
              this.io.engine.transport &&
              this.io.engine.transport.writable;
            return (
              !this.flags.volatile || (n && this.connected)
                ? this.connected
                  ? this.packet(r)
                  : this.sendBuffer.push(r)
                : c(
                    "discard packet as the transport is not currently writable"
                  ),
              (this.flags = {}),
              this
            );
          }
          _registerAckCallback(t, e) {
            const r = this.flags.timeout;
            if (void 0 === r) return void (this.acks[t] = e);
            const n = this.io.setTimeoutFn(() => {
              delete this.acks[t];
              for (let e = 0; e < this.sendBuffer.length; e++)
                this.sendBuffer[e].id === t &&
                  (c("removing packet with ack id %d from the buffer", t),
                  this.sendBuffer.splice(e, 1));
              c("event with ack id %d has timed out after %d ms", t, r),
                e.call(this, new Error("operation has timed out"));
            }, r);
            this.acks[t] = (...t) => {
              this.io.clearTimeoutFn(n), e.apply(this, [null, ...t]);
            };
          }
          packet(t) {
            (t.nsp = this.nsp), this.io._packet(t);
          }
          onopen() {
            c("transport is open - connecting"),
              "function" == typeof this.auth
                ? this.auth((t) => {
                    this.packet({ type: o.PacketType.CONNECT, data: t });
                  })
                : this.packet({ type: o.PacketType.CONNECT, data: this.auth });
          }
          onerror(t) {
            this.connected || this.emitReserved("connect_error", t);
          }
          onclose(t) {
            c("close (%s)", t),
              (this.connected = !1),
              (this.disconnected = !0),
              delete this.id,
              this.emitReserved("disconnect", t);
          }
          onpacket(t) {
            if (t.nsp === this.nsp)
              switch (t.type) {
                case o.PacketType.CONNECT:
                  if (t.data && t.data.sid) {
                    const e = t.data.sid;
                    this.onconnect(e);
                  } else
                    this.emitReserved(
                      "connect_error",
                      new Error(
                        "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                      )
                    );
                  break;
                case o.PacketType.EVENT:
                case o.PacketType.BINARY_EVENT:
                  this.onevent(t);
                  break;
                case o.PacketType.ACK:
                case o.PacketType.BINARY_ACK:
                  this.onack(t);
                  break;
                case o.PacketType.DISCONNECT:
                  this.ondisconnect();
                  break;
                case o.PacketType.CONNECT_ERROR:
                  this.destroy();
                  const e = new Error(t.data.message);
                  (e.data = t.data.data), this.emitReserved("connect_error", e);
              }
          }
          onevent(t) {
            const e = t.data || [];
            c("emitting event %j", e),
              null != t.id &&
                (c("attaching ack callback to event"), e.push(this.ack(t.id))),
              this.connected
                ? this.emitEvent(e)
                : this.receiveBuffer.push(Object.freeze(e));
          }
          emitEvent(t) {
            if (this._anyListeners && this._anyListeners.length) {
              const e = this._anyListeners.slice();
              for (const r of e) r.apply(this, t);
            }
            super.emit.apply(this, t);
          }
          ack(t) {
            const e = this;
            let r = !1;
            return function (...n) {
              r ||
                ((r = !0),
                c("sending ack %j", n),
                e.packet({ type: o.PacketType.ACK, id: t, data: n }));
            };
          }
          onack(t) {
            const e = this.acks[t.id];
            "function" == typeof e
              ? (c("calling ack %s with %j", t.id, t.data),
                e.apply(this, t.data),
                delete this.acks[t.id])
              : c("bad ack %s", t.id);
          }
          onconnect(t) {
            c("socket connected with id %s", t),
              (this.id = t),
              (this.connected = !0),
              (this.disconnected = !1),
              this.emitBuffered(),
              this.emitReserved("connect");
          }
          emitBuffered() {
            this.receiveBuffer.forEach((t) => this.emitEvent(t)),
              (this.receiveBuffer = []),
              this.sendBuffer.forEach((t) => this.packet(t)),
              (this.sendBuffer = []);
          }
          ondisconnect() {
            c("server disconnect (%s)", this.nsp),
              this.destroy(),
              this.onclose("io server disconnect");
          }
          destroy() {
            this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
              this.io._destroy(this);
          }
          disconnect() {
            return (
              this.connected &&
                (c("performing disconnect (%s)", this.nsp),
                this.packet({ type: o.PacketType.DISCONNECT })),
              this.destroy(),
              this.connected && this.onclose("io client disconnect"),
              this
            );
          }
          close() {
            return this.disconnect();
          }
          compress(t) {
            return (this.flags.compress = t), this;
          }
          get volatile() {
            return (this.flags.volatile = !0), this;
          }
          timeout(t) {
            return (this.flags.timeout = t), this;
          }
          onAny(t) {
            return (
              (this._anyListeners = this._anyListeners || []),
              this._anyListeners.push(t),
              this
            );
          }
          prependAny(t) {
            return (
              (this._anyListeners = this._anyListeners || []),
              this._anyListeners.unshift(t),
              this
            );
          }
          offAny(t) {
            if (!this._anyListeners) return this;
            if (t) {
              const e = this._anyListeners;
              for (let r = 0; r < e.length; r++)
                if (t === e[r]) return e.splice(r, 1), this;
            } else this._anyListeners = [];
            return this;
          }
          listenersAny() {
            return this._anyListeners || [];
          }
        }
        e.Socket = u;
      },
      8826: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.url = void 0);
        const o = n(r(4187)),
          i = n(r(3669)).default("socket.io-client:url");
        e.url = function (t, e = "", r) {
          let n = t;
          (r = r || ("undefined" != typeof location && location)),
            null == t && (t = r.protocol + "//" + r.host),
            "string" == typeof t &&
              ("/" === t.charAt(0) &&
                (t = "/" === t.charAt(1) ? r.protocol + t : r.host + t),
              /^(https?|wss?):\/\//.test(t) ||
                (i("protocol-less url %s", t),
                (t = void 0 !== r ? r.protocol + "//" + t : "https://" + t)),
              i("parse %s", t),
              (n = o.default(t))),
            n.port ||
              (/^(http|ws)$/.test(n.protocol)
                ? (n.port = "80")
                : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")),
            (n.path = n.path || "/");
          const s = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
          return (
            (n.id = n.protocol + "://" + s + ":" + n.port + e),
            (n.href =
              n.protocol +
              "://" +
              s +
              (r && r.port === n.port ? "" : ":" + n.port)),
            n
          );
        };
      },
      3669: (t, e, r) => {
        (e.formatArgs = function (e) {
          if (
            ((e[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              e[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              t.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const r = "color: " + this.color;
          e.splice(1, 0, r, "color: inherit");
          let n = 0,
            o = 0;
          e[0].replace(/%[a-zA-Z%]/g, (t) => {
            "%%" !== t && (n++, "%c" === t && (o = n));
          }),
            e.splice(o, 0, r);
        }),
          (e.save = function (t) {
            try {
              t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
            } catch (t) {}
          }),
          (e.load = function () {
            let t;
            try {
              t = e.storage.getItem("debug");
            } catch (t) {}
            return (
              !t &&
                "undefined" != typeof process &&
                "env" in process &&
                (t = process.env.DEBUG),
              t
            );
          }),
          (e.useColors = function () {
            return (
              !(
                "undefined" == typeof window ||
                !window.process ||
                ("renderer" !== window.process.type && !window.process.__nwjs)
              ) ||
              (("undefined" == typeof navigator ||
                !navigator.userAgent ||
                !navigator.userAgent
                  .toLowerCase()
                  .match(/(edge|trident)\/(\d+)/)) &&
                (("undefined" != typeof document &&
                  document.documentElement &&
                  document.documentElement.style &&
                  document.documentElement.style.WebkitAppearance) ||
                  ("undefined" != typeof window &&
                    window.console &&
                    (window.console.firebug ||
                      (window.console.exception && window.console.table))) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                    parseInt(RegExp.$1, 10) >= 31) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent
                      .toLowerCase()
                      .match(/applewebkit\/(\d+)/))))
            );
          }),
          (e.storage = (function () {
            try {
              return localStorage;
            } catch (t) {}
          })()),
          (e.destroy = (() => {
            let t = !1;
            return () => {
              t ||
                ((t = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                ));
            };
          })()),
          (e.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (e.log = console.debug || console.log || (() => {})),
          (t.exports = r(9231)(e));
        const { formatters: n } = t.exports;
        n.j = function (t) {
          try {
            return JSON.stringify(t);
          } catch (t) {
            return "[UnexpectedJSONParseError]: " + t.message;
          }
        };
      },
      9231: (t, e, r) => {
        t.exports = function (t) {
          function e(t) {
            let r,
              o,
              i,
              s = null;
            function c(...t) {
              if (!c.enabled) return;
              const n = c,
                o = Number(new Date()),
                i = o - (r || o);
              (n.diff = i),
                (n.prev = r),
                (n.curr = o),
                (r = o),
                (t[0] = e.coerce(t[0])),
                "string" != typeof t[0] && t.unshift("%O");
              let s = 0;
              (t[0] = t[0].replace(/%([a-zA-Z%])/g, (r, o) => {
                if ("%%" === r) return "%";
                s++;
                const i = e.formatters[o];
                if ("function" == typeof i) {
                  const e = t[s];
                  (r = i.call(n, e)), t.splice(s, 1), s--;
                }
                return r;
              })),
                e.formatArgs.call(n, t),
                (n.log || e.log).apply(n, t);
            }
            return (
              (c.namespace = t),
              (c.useColors = e.useColors()),
              (c.color = e.selectColor(t)),
              (c.extend = n),
              (c.destroy = e.destroy),
              Object.defineProperty(c, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () =>
                  null !== s
                    ? s
                    : (o !== e.namespaces &&
                        ((o = e.namespaces), (i = e.enabled(t))),
                      i),
                set: (t) => {
                  s = t;
                },
              }),
              "function" == typeof e.init && e.init(c),
              c
            );
          }
          function n(t, r) {
            const n = e(this.namespace + (void 0 === r ? ":" : r) + t);
            return (n.log = this.log), n;
          }
          function o(t) {
            return t
              .toString()
              .substring(2, t.toString().length - 2)
              .replace(/\.\*\?$/, "*");
          }
          return (
            (e.debug = e),
            (e.default = e),
            (e.coerce = function (t) {
              return t instanceof Error ? t.stack || t.message : t;
            }),
            (e.disable = function () {
              const t = [
                ...e.names.map(o),
                ...e.skips.map(o).map((t) => "-" + t),
              ].join(",");
              return e.enable(""), t;
            }),
            (e.enable = function (t) {
              let r;
              e.save(t), (e.namespaces = t), (e.names = []), (e.skips = []);
              const n = ("string" == typeof t ? t : "").split(/[\s,]+/),
                o = n.length;
              for (r = 0; r < o; r++)
                n[r] &&
                  ("-" === (t = n[r].replace(/\*/g, ".*?"))[0]
                    ? e.skips.push(new RegExp("^" + t.substr(1) + "$"))
                    : e.names.push(new RegExp("^" + t + "$")));
            }),
            (e.enabled = function (t) {
              if ("*" === t[t.length - 1]) return !0;
              let r, n;
              for (r = 0, n = e.skips.length; r < n; r++)
                if (e.skips[r].test(t)) return !1;
              for (r = 0, n = e.names.length; r < n; r++)
                if (e.names[r].test(t)) return !0;
              return !1;
            }),
            (e.humanize = r(4241)),
            (e.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              );
            }),
            Object.keys(t).forEach((r) => {
              e[r] = t[r];
            }),
            (e.names = []),
            (e.skips = []),
            (e.formatters = {}),
            (e.selectColor = function (t) {
              let r = 0;
              for (let e = 0; e < t.length; e++)
                (r = (r << 5) - r + t.charCodeAt(e)), (r |= 0);
              return e.colors[Math.abs(r) % e.colors.length];
            }),
            e.enable(e.load()),
            e
          );
        };
      },
      4241: (t) => {
        var e = 1e3,
          r = 60 * e,
          n = 60 * r,
          o = 24 * n;
        function i(t, e, r, n) {
          var o = e >= 1.5 * r;
          return Math.round(t / r) + " " + n + (o ? "s" : "");
        }
        t.exports = function (t, s) {
          s = s || {};
          var c,
            a,
            u = typeof t;
          if ("string" === u && t.length > 0)
            return (function (t) {
              if (!((t = String(t)).length > 100)) {
                var i =
                  /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                    t
                  );
                if (i) {
                  var s = parseFloat(i[1]);
                  switch ((i[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                      return 315576e5 * s;
                    case "weeks":
                    case "week":
                    case "w":
                      return 6048e5 * s;
                    case "days":
                    case "day":
                    case "d":
                      return s * o;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                      return s * n;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                      return s * r;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                      return s * e;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                      return s;
                    default:
                      return;
                  }
                }
              }
            })(t);
          if ("number" === u && isFinite(t))
            return s.long
              ? ((c = t),
                (a = Math.abs(c)) >= o
                  ? i(c, a, o, "day")
                  : a >= n
                  ? i(c, a, n, "hour")
                  : a >= r
                  ? i(c, a, r, "minute")
                  : a >= e
                  ? i(c, a, e, "second")
                  : c + " ms")
              : (function (t) {
                  var i = Math.abs(t);
                  return i >= o
                    ? Math.round(t / o) + "d"
                    : i >= n
                    ? Math.round(t / n) + "h"
                    : i >= r
                    ? Math.round(t / r) + "m"
                    : i >= e
                    ? Math.round(t / e) + "s"
                    : t + "ms";
                })(t);
          throw new Error(
            "val is not a non-empty string or a valid number. val=" +
              JSON.stringify(t)
          );
        };
      },
      1339: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.reconstructPacket = e.deconstructPacket = void 0);
        const n = r(580);
        function o(t, e) {
          if (!t) return t;
          if (n.isBinary(t)) {
            const r = { _placeholder: !0, num: e.length };
            return e.push(t), r;
          }
          if (Array.isArray(t)) {
            const r = new Array(t.length);
            for (let n = 0; n < t.length; n++) r[n] = o(t[n], e);
            return r;
          }
          if ("object" == typeof t && !(t instanceof Date)) {
            const r = {};
            for (const n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (r[n] = o(t[n], e));
            return r;
          }
          return t;
        }
        function i(t, e) {
          if (!t) return t;
          if (t && t._placeholder) return e[t.num];
          if (Array.isArray(t))
            for (let r = 0; r < t.length; r++) t[r] = i(t[r], e);
          else if ("object" == typeof t)
            for (const r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (t[r] = i(t[r], e));
          return t;
        }
        (e.deconstructPacket = function (t) {
          const e = [],
            r = t.data,
            n = t;
          return (
            (n.data = o(r, e)),
            (n.attachments = e.length),
            { packet: n, buffers: e }
          );
        }),
          (e.reconstructPacket = function (t, e) {
            return (t.data = i(t.data, e)), (t.attachments = void 0), t;
          });
      },
      8679: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Decoder = e.Encoder = e.PacketType = e.protocol = void 0);
        const n = r(3063),
          o = r(1339),
          i = r(580),
          s = r(1618).default("socket.io-parser");
        var c;
        (e.protocol = 5),
          (function (t) {
            (t[(t.CONNECT = 0)] = "CONNECT"),
              (t[(t.DISCONNECT = 1)] = "DISCONNECT"),
              (t[(t.EVENT = 2)] = "EVENT"),
              (t[(t.ACK = 3)] = "ACK"),
              (t[(t.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
              (t[(t.BINARY_EVENT = 5)] = "BINARY_EVENT"),
              (t[(t.BINARY_ACK = 6)] = "BINARY_ACK");
          })((c = e.PacketType || (e.PacketType = {}))),
          (e.Encoder = class {
            encode(t) {
              return (
                s("encoding packet %j", t),
                (t.type !== c.EVENT && t.type !== c.ACK) || !i.hasBinary(t)
                  ? [this.encodeAsString(t)]
                  : ((t.type =
                      t.type === c.EVENT ? c.BINARY_EVENT : c.BINARY_ACK),
                    this.encodeAsBinary(t))
              );
            }
            encodeAsString(t) {
              let e = "" + t.type;
              return (
                (t.type !== c.BINARY_EVENT && t.type !== c.BINARY_ACK) ||
                  (e += t.attachments + "-"),
                t.nsp && "/" !== t.nsp && (e += t.nsp + ","),
                null != t.id && (e += t.id),
                null != t.data && (e += JSON.stringify(t.data)),
                s("encoded %j as %s", t, e),
                e
              );
            }
            encodeAsBinary(t) {
              const e = o.deconstructPacket(t),
                r = this.encodeAsString(e.packet),
                n = e.buffers;
              return n.unshift(r), n;
            }
          });
        class a extends n.Emitter {
          constructor() {
            super();
          }
          add(t) {
            let e;
            if ("string" == typeof t)
              (e = this.decodeString(t)),
                e.type === c.BINARY_EVENT || e.type === c.BINARY_ACK
                  ? ((this.reconstructor = new u(e)),
                    0 === e.attachments && super.emitReserved("decoded", e))
                  : super.emitReserved("decoded", e);
            else {
              if (!i.isBinary(t) && !t.base64)
                throw new Error("Unknown type: " + t);
              if (!this.reconstructor)
                throw new Error(
                  "got binary data when not reconstructing a packet"
                );
              (e = this.reconstructor.takeBinaryData(t)),
                e &&
                  ((this.reconstructor = null),
                  super.emitReserved("decoded", e));
            }
          }
          decodeString(t) {
            let e = 0;
            const r = { type: Number(t.charAt(0)) };
            if (void 0 === c[r.type])
              throw new Error("unknown packet type " + r.type);
            if (r.type === c.BINARY_EVENT || r.type === c.BINARY_ACK) {
              const n = e + 1;
              for (; "-" !== t.charAt(++e) && e != t.length; );
              const o = t.substring(n, e);
              if (o != Number(o) || "-" !== t.charAt(e))
                throw new Error("Illegal attachments");
              r.attachments = Number(o);
            }
            if ("/" === t.charAt(e + 1)) {
              const n = e + 1;
              for (; ++e && "," !== t.charAt(e) && e !== t.length; );
              r.nsp = t.substring(n, e);
            } else r.nsp = "/";
            const n = t.charAt(e + 1);
            if ("" !== n && Number(n) == n) {
              const n = e + 1;
              for (; ++e; ) {
                const r = t.charAt(e);
                if (null == r || Number(r) != r) {
                  --e;
                  break;
                }
                if (e === t.length) break;
              }
              r.id = Number(t.substring(n, e + 1));
            }
            if (t.charAt(++e)) {
              const n = (function (t) {
                try {
                  return JSON.parse(t);
                } catch (t) {
                  return !1;
                }
              })(t.substr(e));
              if (!a.isPayloadValid(r.type, n))
                throw new Error("invalid payload");
              r.data = n;
            }
            return s("decoded %s as %j", t, r), r;
          }
          static isPayloadValid(t, e) {
            switch (t) {
              case c.CONNECT:
                return "object" == typeof e;
              case c.DISCONNECT:
                return void 0 === e;
              case c.CONNECT_ERROR:
                return "string" == typeof e || "object" == typeof e;
              case c.EVENT:
              case c.BINARY_EVENT:
                return Array.isArray(e) && e.length > 0;
              case c.ACK:
              case c.BINARY_ACK:
                return Array.isArray(e);
            }
          }
          destroy() {
            this.reconstructor && this.reconstructor.finishedReconstruction();
          }
        }
        e.Decoder = a;
        class u {
          constructor(t) {
            (this.packet = t), (this.buffers = []), (this.reconPack = t);
          }
          takeBinaryData(t) {
            if (
              (this.buffers.push(t),
              this.buffers.length === this.reconPack.attachments)
            ) {
              const t = o.reconstructPacket(this.reconPack, this.buffers);
              return this.finishedReconstruction(), t;
            }
            return null;
          }
          finishedReconstruction() {
            (this.reconPack = null), (this.buffers = []);
          }
        }
      },
      580: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.hasBinary = e.isBinary = void 0);
        const r = "function" == typeof ArrayBuffer,
          n = Object.prototype.toString,
          o =
            "function" == typeof Blob ||
            ("undefined" != typeof Blob &&
              "[object BlobConstructor]" === n.call(Blob)),
          i =
            "function" == typeof File ||
            ("undefined" != typeof File &&
              "[object FileConstructor]" === n.call(File));
        function s(t) {
          return (
            (r &&
              (t instanceof ArrayBuffer ||
                ((t) =>
                  "function" == typeof ArrayBuffer.isView
                    ? ArrayBuffer.isView(t)
                    : t.buffer instanceof ArrayBuffer)(t))) ||
            (o && t instanceof Blob) ||
            (i && t instanceof File)
          );
        }
        (e.isBinary = s),
          (e.hasBinary = function t(e, r) {
            if (!e || "object" != typeof e) return !1;
            if (Array.isArray(e)) {
              for (let r = 0, n = e.length; r < n; r++) if (t(e[r])) return !0;
              return !1;
            }
            if (s(e)) return !0;
            if (
              e.toJSON &&
              "function" == typeof e.toJSON &&
              1 === arguments.length
            )
              return t(e.toJSON(), !0);
            for (const r in e)
              if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
                return !0;
            return !1;
          });
      },
      1618: (t, e, r) => {
        (e.formatArgs = function (e) {
          if (
            ((e[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              e[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              t.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const r = "color: " + this.color;
          e.splice(1, 0, r, "color: inherit");
          let n = 0,
            o = 0;
          e[0].replace(/%[a-zA-Z%]/g, (t) => {
            "%%" !== t && (n++, "%c" === t && (o = n));
          }),
            e.splice(o, 0, r);
        }),
          (e.save = function (t) {
            try {
              t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
            } catch (t) {}
          }),
          (e.load = function () {
            let t;
            try {
              t = e.storage.getItem("debug");
            } catch (t) {}
            return (
              !t &&
                "undefined" != typeof process &&
                "env" in process &&
                (t = process.env.DEBUG),
              t
            );
          }),
          (e.useColors = function () {
            return (
              !(
                "undefined" == typeof window ||
                !window.process ||
                ("renderer" !== window.process.type && !window.process.__nwjs)
              ) ||
              (("undefined" == typeof navigator ||
                !navigator.userAgent ||
                !navigator.userAgent
                  .toLowerCase()
                  .match(/(edge|trident)\/(\d+)/)) &&
                (("undefined" != typeof document &&
                  document.documentElement &&
                  document.documentElement.style &&
                  document.documentElement.style.WebkitAppearance) ||
                  ("undefined" != typeof window &&
                    window.console &&
                    (window.console.firebug ||
                      (window.console.exception && window.console.table))) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                    parseInt(RegExp.$1, 10) >= 31) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent
                      .toLowerCase()
                      .match(/applewebkit\/(\d+)/))))
            );
          }),
          (e.storage = (function () {
            try {
              return localStorage;
            } catch (t) {}
          })()),
          (e.destroy = (() => {
            let t = !1;
            return () => {
              t ||
                ((t = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                ));
            };
          })()),
          (e.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (e.log = console.debug || console.log || (() => {})),
          (t.exports = r(5224)(e));
        const { formatters: n } = t.exports;
        n.j = function (t) {
          try {
            return JSON.stringify(t);
          } catch (t) {
            return "[UnexpectedJSONParseError]: " + t.message;
          }
        };
      },
      5224: (t, e, r) => {
        t.exports = function (t) {
          function e(t) {
            let r,
              o,
              i,
              s = null;
            function c(...t) {
              if (!c.enabled) return;
              const n = c,
                o = Number(new Date()),
                i = o - (r || o);
              (n.diff = i),
                (n.prev = r),
                (n.curr = o),
                (r = o),
                (t[0] = e.coerce(t[0])),
                "string" != typeof t[0] && t.unshift("%O");
              let s = 0;
              (t[0] = t[0].replace(/%([a-zA-Z%])/g, (r, o) => {
                if ("%%" === r) return "%";
                s++;
                const i = e.formatters[o];
                if ("function" == typeof i) {
                  const e = t[s];
                  (r = i.call(n, e)), t.splice(s, 1), s--;
                }
                return r;
              })),
                e.formatArgs.call(n, t),
                (n.log || e.log).apply(n, t);
            }
            return (
              (c.namespace = t),
              (c.useColors = e.useColors()),
              (c.color = e.selectColor(t)),
              (c.extend = n),
              (c.destroy = e.destroy),
              Object.defineProperty(c, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () =>
                  null !== s
                    ? s
                    : (o !== e.namespaces &&
                        ((o = e.namespaces), (i = e.enabled(t))),
                      i),
                set: (t) => {
                  s = t;
                },
              }),
              "function" == typeof e.init && e.init(c),
              c
            );
          }
          function n(t, r) {
            const n = e(this.namespace + (void 0 === r ? ":" : r) + t);
            return (n.log = this.log), n;
          }
          function o(t) {
            return t
              .toString()
              .substring(2, t.toString().length - 2)
              .replace(/\.\*\?$/, "*");
          }
          return (
            (e.debug = e),
            (e.default = e),
            (e.coerce = function (t) {
              return t instanceof Error ? t.stack || t.message : t;
            }),
            (e.disable = function () {
              const t = [
                ...e.names.map(o),
                ...e.skips.map(o).map((t) => "-" + t),
              ].join(",");
              return e.enable(""), t;
            }),
            (e.enable = function (t) {
              let r;
              e.save(t), (e.namespaces = t), (e.names = []), (e.skips = []);
              const n = ("string" == typeof t ? t : "").split(/[\s,]+/),
                o = n.length;
              for (r = 0; r < o; r++)
                n[r] &&
                  ("-" === (t = n[r].replace(/\*/g, ".*?"))[0]
                    ? e.skips.push(new RegExp("^" + t.substr(1) + "$"))
                    : e.names.push(new RegExp("^" + t + "$")));
            }),
            (e.enabled = function (t) {
              if ("*" === t[t.length - 1]) return !0;
              let r, n;
              for (r = 0, n = e.skips.length; r < n; r++)
                if (e.skips[r].test(t)) return !1;
              for (r = 0, n = e.names.length; r < n; r++)
                if (e.names[r].test(t)) return !0;
              return !1;
            }),
            (e.humanize = r(8896)),
            (e.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              );
            }),
            Object.keys(t).forEach((r) => {
              e[r] = t[r];
            }),
            (e.names = []),
            (e.skips = []),
            (e.formatters = {}),
            (e.selectColor = function (t) {
              let r = 0;
              for (let e = 0; e < t.length; e++)
                (r = (r << 5) - r + t.charCodeAt(e)), (r |= 0);
              return e.colors[Math.abs(r) % e.colors.length];
            }),
            e.enable(e.load()),
            e
          );
        };
      },
      8896: (t) => {
        var e = 1e3,
          r = 60 * e,
          n = 60 * r,
          o = 24 * n;
        function i(t, e, r, n) {
          var o = e >= 1.5 * r;
          return Math.round(t / r) + " " + n + (o ? "s" : "");
        }
        t.exports = function (t, s) {
          s = s || {};
          var c,
            a,
            u = typeof t;
          if ("string" === u && t.length > 0)
            return (function (t) {
              if (!((t = String(t)).length > 100)) {
                var i =
                  /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                    t
                  );
                if (i) {
                  var s = parseFloat(i[1]);
                  switch ((i[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                      return 315576e5 * s;
                    case "weeks":
                    case "week":
                    case "w":
                      return 6048e5 * s;
                    case "days":
                    case "day":
                    case "d":
                      return s * o;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                      return s * n;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                      return s * r;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                      return s * e;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                      return s;
                    default:
                      return;
                  }
                }
              }
            })(t);
          if ("number" === u && isFinite(t))
            return s.long
              ? ((c = t),
                (a = Math.abs(c)) >= o
                  ? i(c, a, o, "day")
                  : a >= n
                  ? i(c, a, n, "hour")
                  : a >= r
                  ? i(c, a, r, "minute")
                  : a >= e
                  ? i(c, a, e, "second")
                  : c + " ms")
              : (function (t) {
                  var i = Math.abs(t);
                  return i >= o
                    ? Math.round(t / o) + "d"
                    : i >= n
                    ? Math.round(t / n) + "h"
                    : i >= r
                    ? Math.round(t / r) + "m"
                    : i >= e
                    ? Math.round(t / e) + "s"
                    : t + "ms";
                })(t);
          throw new Error(
            "val is not a non-empty string or a valid number. val=" +
              JSON.stringify(t)
          );
        };
      },
      3125: (t, e) => {
        "use strict";
        function r() {
          return window;
        }
        function n() {
          return document;
        }
        function o(t, e) {
          var r,
            n,
            o = e.documentElement,
            i = e.body;
          return (
            void 0 !== t.pageYOffset
              ? ((r = t.pageXOffset), (n = t.pageYOffset))
              : ((r = o.scrollLeft || i.scrollLeft || 0),
                (n = o.scrollTop || i.scrollTop || 0)),
            { x: r, y: n }
          );
        }
        function i(t) {
          var e = t.documentElement,
            r = t.body;
          return {
            x: r.scrollHeight - e.clientWidth,
            y: r.scrollHeight - e.clientHeight,
          };
        }
        function s(t, e) {
          var r = n().getElementsByTagName(t);
          return Array.prototype.indexOf.call(r, e);
        }
        function c(t, e) {
          return a(i(e), t).y;
        }
        function a(t, e) {
          return { x: e.x / t.x || 0, y: e.y / t.y };
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getScrollPercentage =
            e.getScrollTopPercentage =
            e.getScrollPositionForElement =
            e.getScrollPosition =
            e.getByPath =
            e.isUndefined =
            e.getLocation =
            e.isOldIe =
            e.forEach =
            e.reloadBrowser =
            e.setScroll =
            e.getBody =
            e.getSingleElement =
            e.getElementData =
            e.forceChange =
            e.getElementIndex =
            e.restoreScrollPosition =
            e.saveScrollPosition =
            e.getDocumentScrollSpace =
            e.getBrowserScrollPosition =
            e.getDocument =
            e.getWindow =
              void 0),
          (e.getWindow = r),
          (e.getDocument = n),
          (e.getBrowserScrollPosition = o),
          (e.getDocumentScrollSpace = i),
          (e.saveScrollPosition = function (t, e) {
            var r = o(t, e);
            e.cookie = "bs_scroll_pos=" + [r.x, r.y].join(",");
          }),
          (e.restoreScrollPosition = function () {
            var t = n()
              .cookie.replace(
                /(?:(?:^|.*;\s*)bs_scroll_pos\s*\=\s*([^;]*).*$)|^.*$/,
                "$1"
              )
              .split(",");
            r().scrollTo(Number(t[0]), Number(t[1]));
          }),
          (e.getElementIndex = s),
          (e.forceChange = function (t) {
            t.blur(), t.focus();
          }),
          (e.getElementData = function (t) {
            var e = t.tagName;
            return { tagName: e, index: s(e, t) };
          }),
          (e.getSingleElement = function (t, e) {
            return n().getElementsByTagName(t)[e];
          }),
          (e.getBody = function () {
            return n().getElementsByTagName("body")[0];
          }),
          (e.setScroll = function (t) {
            r().scrollTo(t.x, t.y);
          }),
          (e.reloadBrowser = function () {
            r().location.reload();
          }),
          (e.forEach = function (t, e) {
            for (var r = 0, n = t.length; r < n; r += 1) e(t[r], r, t);
          }),
          (e.isOldIe = function () {
            return void 0 !== r().attachEvent;
          }),
          (e.getLocation = function (t) {
            var e = n().createElement("a");
            return (e.href = t), "" === e.host && (e.href = e.href), e;
          }),
          (e.isUndefined = function (t) {
            return void 0 === t;
          }),
          (e.getByPath = function (t, e) {
            for (var r = 0, n = e.split("."), o = n.length; r < o; r++) {
              if (!t || "object" != typeof t) return !1;
              t = t[n[r]];
            }
            return void 0 !== t && t;
          }),
          (e.getScrollPosition = function (t, e) {
            var r = o(t, e);
            return { raw: r, proportional: c(r, e) };
          }),
          (e.getScrollPositionForElement = function (t) {
            var e = { x: t.scrollLeft, y: t.scrollTop };
            return {
              raw: e,
              proportional: a({ x: t.scrollWidth, y: t.scrollHeight }, e).y,
            };
          }),
          (e.getScrollTopPercentage = c),
          (e.getScrollPercentage = a);
      },
      5754: (t, e, r) => {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.domHandlers$ = e.Events = void 0);
        var o,
          i = r(9122),
          s = r(1931),
          c = r(4398),
          a = r(8736),
          u = r(1373),
          l = r(1125);
        !(function (t) {
          (t.PropSet = "@@BSDOM.Events.PropSet"),
            (t.StyleSet = "@@BSDOM.Events.StyleSet"),
            (t.LinkReplace = "@@BSDOM.Events.LinkReplace"),
            (t.SetScroll = "@@BSDOM.Events.SetScroll"),
            (t.SetWindowName = "@@BSDOM.Events.SetWindowName");
        })((o = e.Events || (e.Events = {}))),
          (e.domHandlers$ = new i.BehaviorSubject(
            (((n = {})[o.PropSet] = s.propSetDomEffect),
            (n[o.StyleSet] = c.styleSetDomEffect),
            (n[o.LinkReplace] = a.linkReplaceDomEffect),
            (n[o.SetScroll] = u.setScrollDomEffect),
            (n[o.SetWindowName] = l.setWindowNameDomEffect),
            n)
          ));
      },
      8736: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, r, n) {
                  void 0 === n && (n = r);
                  var o = Object.getOwnPropertyDescriptor(e, r);
                  (o &&
                    !("get" in o
                      ? !e.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    }),
                    Object.defineProperty(t, n, o);
                }
              : function (t, e, r, n) {
                  void 0 === n && (n = r), (t[n] = e[r]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, e) {
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e,
                  });
                }
              : function (t, e) {
                  t.default = e;
                }),
          i =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var r in t)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(t, r) &&
                    n(e, t, r);
              return o(e, t), e;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.linkReplace = e.linkReplaceDomEffect = void 0);
        var s = r(2068),
          c = r(8111),
          a = r(5636),
          u = i(r(3617)),
          l = r(6370),
          p = r(5754);
        (e.linkReplaceDomEffect = function (t, e) {
          return t.pipe(
            (0, a.withLatestFrom)(
              e.option$.pipe((0, l.pluck)("injectNotification"))
            ),
            (0, c.filter)(function (t) {
              return t[1];
            }),
            (0, s.map)(function (t) {
              var e = t[0],
                r = t[1],
                n = "[LinkReplace] ".concat(e.basename);
              return "overlay" === r ? u.overlayInfo(n) : u.consoleInfo(n);
            })
          );
        }),
          (e.linkReplace = function (t) {
            return [p.Events.LinkReplace, t];
          });
      },
      1931: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, r, n) {
                  void 0 === n && (n = r);
                  var o = Object.getOwnPropertyDescriptor(e, r);
                  (o &&
                    !("get" in o
                      ? !e.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    }),
                    Object.defineProperty(t, n, o);
                }
              : function (t, e, r, n) {
                  void 0 === n && (n = r), (t[n] = e[r]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, e) {
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e,
                  });
                }
              : function (t, e) {
                  t.default = e;
                }),
          i =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var r in t)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(t, r) &&
                    n(e, t, r);
              return o(e, t), e;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.propSet = e.propSetDomEffect = void 0);
        var s = r(2068),
          c = r(9890),
          a = r(5754),
          u = i(r(3617));
        (e.propSetDomEffect = function (t) {
          return t.pipe(
            (0, c.tap)(function (t) {
              var e = t.target,
                r = t.prop,
                n = t.value;
              e[r] = n;
            }),
            (0, s.map)(function (t) {
              return u.consoleInfo(
                "[PropSet]",
                t.target,
                "".concat(t.prop, " = ").concat(t.pathname)
              );
            })
          );
        }),
          (e.propSet = function (t) {
            return [a.Events.PropSet, t];
          });
      },
      1373: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.setScrollDomEffect = e.setScroll = void 0);
        var n = r(1819),
          o = r(5636),
          i = r(9890),
          s = r(5754);
        (e.setScroll = function (t, e) {
          return [s.Events.SetScroll, { x: t, y: e }];
        }),
          (e.setScrollDomEffect = function (t, e) {
            return t.pipe(
              (0, o.withLatestFrom)(e.window$),
              (0, i.tap)(function (t) {
                var e = t[0];
                return t[1].scrollTo(e.x, e.y);
              }),
              (0, n.ignoreElements)()
            );
          });
      },
      1125: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.setWindowName = e.setWindowNameDomEffect = void 0);
        var n = r(1819),
          o = r(5636),
          i = r(9890),
          s = r(5754);
        (e.setWindowNameDomEffect = function (t, e) {
          return t.pipe(
            (0, o.withLatestFrom)(e.window$),
            (0, i.tap)(function (t) {
              var e = t[0];
              return (t[1].name = e);
            }),
            (0, n.ignoreElements)()
          );
        }),
          (e.setWindowName = function (t) {
            return [s.Events.SetWindowName, t];
          });
      },
      4398: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, r, n) {
                  void 0 === n && (n = r);
                  var o = Object.getOwnPropertyDescriptor(e, r);
                  (o &&
                    !("get" in o
                      ? !e.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    }),
                    Object.defineProperty(t, n, o);
                }
              : function (t, e, r, n) {
                  void 0 === n && (n = r), (t[n] = e[r]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, e) {
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e,
                  });
                }
              : function (t, e) {
                  t.default = e;
                }),
          i =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var r in t)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(t, r) &&
                    n(e, t, r);
              return o(e, t), e;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.styleSet = e.styleSetDomEffect = void 0);
        var s = r(2068),
          c = r(5754),
          a = r(9890),
          u = i(r(3617));
        (e.styleSetDomEffect = function (t) {
          return t.pipe(
            (0, a.tap)(function (t) {
              var e = t.style,
                r = t.styleName,
                n = t.newValue;
              e[r] = n;
            }),
            (0, s.map)(function (t) {
              return u.consoleInfo(
                "[StyleSet] ".concat(t.styleName, " = ").concat(t.pathName)
              );
            })
          );
        }),
          (e.styleSet = function (t) {
            return [c.Events.StyleSet, t];
          });
      },
      5859: (t, e, r) => {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.effectOutputHandlers$ = e.EffectNames = void 0);
        var o,
          i = r(9122),
          s = r(7193),
          c = r(6454),
          a = r(5374),
          u = r(2248),
          l = r(7066),
          p = r(6335),
          h = r(6829),
          f = r(789);
        !(function (t) {
          (t.FileReload = "@@FileReload"),
            (t.PreBrowserReload = "@@PreBrowserReload"),
            (t.BrowserReload = "@@BrowserReload"),
            (t.BrowserSetLocation = "@@BrowserSetLocation"),
            (t.BrowserSetScroll = "@@BrowserSetScroll"),
            (t.SetOptions = "@@SetOptions"),
            (t.SimulateClick = "@@SimulateClick"),
            (t.SetElementValue = "@@SetElementValue"),
            (t.SetElementToggleValue = "@@SetElementToggleValue");
        })((o = e.EffectNames || (e.EffectNames = {}))),
          (e.effectOutputHandlers$ = new i.BehaviorSubject(
            (((n = {})[o.SetOptions] = s.setOptionsEffect),
            (n[o.FileReload] = c.fileReloadEffect),
            (n[o.BrowserReload] = f.browserReloadEffect),
            (n[o.BrowserSetLocation] = a.browserSetLocationEffect),
            (n[o.SimulateClick] = u.simulateClickEffect),
            (n[o.SetElementValue] = l.setElementValueEffect),
            (n[o.SetElementToggleValue] = p.setElementToggleValueEffect),
            (n[o.BrowserSetScroll] = h.setScrollEffect),
            n)
          ));
      },
      789: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.browserReloadEffect =
            e.preBrowserReload =
            e.browserReload =
              void 0);
        var n = r(5859),
          o = r(9890),
          i = r(5636);
        (e.browserReload = function () {
          return [n.EffectNames.BrowserReload];
        }),
          (e.preBrowserReload = function () {
            return [n.EffectNames.PreBrowserReload];
          }),
          (e.browserReloadEffect = function (t, e) {
            return t.pipe(
              (0, i.withLatestFrom)(e.window$),
              (0, o.tap)(function (t) {
                return t[1].location.reload();
              })
            );
          });
      },
      5374: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.browserSetLocation = e.browserSetLocationEffect = void 0);
        var n = r(1819),
          o = r(9890),
          i = r(5636),
          s = r(5859);
        (e.browserSetLocationEffect = function (t, e) {
          return t.pipe(
            (0, i.withLatestFrom)(e.window$),
            (0, o.tap)(function (t) {
              var e = t[0],
                r = t[1];
              return e.path
                ? (r.location =
                    r.location.protocol + "//" + r.location.host + e.path)
                : e.url
                ? (r.location = e.url)
                : void 0;
            }),
            (0, n.ignoreElements)()
          );
        }),
          (e.browserSetLocation = function (t) {
            return [s.EffectNames.BrowserSetLocation, t];
          });
      },
      6454: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.fileReloadEffect = e.fileReload = void 0);
        var n = r(5859),
          o = r(175),
          i = r(5636),
          s = r(904);
        (e.fileReload = function (t) {
          return [n.EffectNames.FileReload, t];
        }),
          (e.fileReloadEffect = function (t, e) {
            return t.pipe(
              (0, i.withLatestFrom)(e.option$, e.document$, e.navigator$),
              (0, s.mergeMap)(function (t) {
                var e = t[0],
                  r = t[1],
                  n = t[2],
                  i = t[3];
                return (0, o.reload)(n, i)(e, {
                  tagNames: r.tagNames,
                  liveCSS: !0,
                  liveImg: !0,
                });
              })
            );
          });
      },
      6335: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.setElementToggleValue = e.setElementToggleValueEffect = void 0);
        var n = r(9890),
          o = r(5636),
          i = r(5859);
        (e.setElementToggleValueEffect = function (t, e) {
          return t.pipe(
            (0, o.withLatestFrom)(e.document$),
            (0, n.tap)(function (t) {
              var e = t[0],
                r = t[1].getElementsByTagName(e.tagName)[e.index];
              r &&
                ("radio" === e.type && (r.checked = !0),
                "checkbox" === e.type && (r.checked = e.checked),
                "SELECT" === e.tagName && (r.value = e.value));
            })
          );
        }),
          (e.setElementToggleValue = function (t) {
            return [i.EffectNames.SetElementToggleValue, t];
          });
      },
      7066: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.setElementValue = e.setElementValueEffect = void 0);
        var n = r(9890),
          o = r(5636),
          i = r(5859);
        (e.setElementValueEffect = function (t, e) {
          return t.pipe(
            (0, o.withLatestFrom)(e.document$),
            (0, n.tap)(function (t) {
              var e = t[0],
                r = t[1].getElementsByTagName(e.tagName)[e.index];
              r && (r.value = e.value);
            })
          );
        }),
          (e.setElementValue = function (t) {
            return [i.EffectNames.SetElementValue, t];
          });
      },
      7193: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.setOptions = e.setOptionsEffect = void 0);
        var n = r(1819),
          o = r(9890),
          i = r(5859);
        (e.setOptionsEffect = function (t, e) {
          return t.pipe(
            (0, o.tap)(function (t) {
              return e.option$.next(t);
            }),
            (0, n.ignoreElements)()
          );
        }),
          (e.setOptions = function (t) {
            return [i.EffectNames.SetOptions, t];
          });
      },
      6829: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.setScrollEffect = void 0);
        var n = r(6370),
          o = r(1819),
          i = r(1398),
          s = r(3943),
          c = r(3125),
          a = r(9890),
          u = r(5636),
          l = r(2068);
        function p(t, e, r) {
          return e && t.scrollTo
            ? t.scrollTo(0, t.scrollHeight * r.position.proportional)
            : t.scrollTo(0, r.position.raw.y);
        }
        e.setScrollEffect = function (t, e) {
          var r = t.pipe(
              (0, u.withLatestFrom)(
                e.window$,
                e.document$,
                e.option$.pipe((0, n.pluck)("scrollProportionally"))
              )
            ),
            h = (0, i.partition)(function (t) {
              return "document" === t[0].tagName;
            })(r),
            f = h[0],
            d = h[1],
            y = (0, i.partition)(function (t) {
              return t[0].mappingIndex > -1;
            })(d),
            b = y[0],
            m = y[1];
          return (0, s.merge)(
            f.pipe(
              (0, a.tap)(function (t) {
                var e = t[0],
                  r = t[1],
                  n = t[2],
                  o = t[3],
                  i = (0, c.getDocumentScrollSpace)(n);
                return o
                  ? r.scrollTo(0, i.y * e.position.proportional)
                  : r.scrollTo(0, e.position.raw.y);
              })
            ),
            m.pipe(
              (0, a.tap)(function (t) {
                var e = t[0],
                  r = (t[1], t[2]),
                  n = t[3],
                  o = r.getElementsByTagName(e.tagName);
                if (o && o.length) {
                  var i = o[e.index];
                  if (i) return p(i, n, e);
                }
              })
            ),
            b.pipe(
              (0, u.withLatestFrom)(
                e.option$.pipe((0, n.pluck)("scrollElementMapping"))
              ),
              (0, l.map)(function (t) {
                var e = t[0],
                  r = t[1],
                  n = e[0];
                return [
                  e,
                  r.filter(function (t, e) {
                    return e !== n.mappingIndex;
                  }),
                ];
              }),
              (0, a.tap)(function (t) {
                var e = t[0],
                  r = t[1],
                  n = e[0],
                  o = (e[1], e[2]),
                  i = e[3];
                r.map(function (t) {
                  return o.querySelector(t);
                }).forEach(function (t) {
                  p(t, i, n);
                });
              })
            )
          ).pipe((0, o.ignoreElements)());
        };
      },
      2248: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.simulateClick = e.simulateClickEffect = void 0);
        var n = r(1819),
          o = r(9890),
          i = r(5636),
          s = r(5859);
        (e.simulateClickEffect = function (t, e) {
          return t.pipe(
            (0, i.withLatestFrom)(e.window$, e.document$),
            (0, o.tap)(function (t) {
              var e = t[0],
                r = t[1],
                n = t[2],
                o = n.getElementsByTagName(e.tagName)[e.index];
              o &&
                (n.createEvent
                  ? r.setTimeout(function () {
                      var t = n.createEvent("MouseEvents");
                      t.initEvent("click", !0, !0), o.dispatchEvent(t);
                    }, 0)
                  : r.setTimeout(function () {
                      if (n.createEventObject) {
                        var t = n.createEventObject();
                        (t.cancelBubble = !0), o.fireEvent("onclick", t);
                      }
                    }, 0));
            }),
            (0, n.ignoreElements)()
          );
        }),
          (e.simulateClick = function (t) {
            return [s.EffectNames.SimulateClick, t];
          });
      },
      9620: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__assign) ||
          function () {
            return (n =
              Object.assign ||
              function (t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = r(5545),
          i = r(2107),
          s = r(8442),
          c = r(5754),
          a = r(2345),
          u = r(3943),
          l = r(3617),
          p = r(5859),
          h = r(3450),
          f = r(9556),
          d = r(7064),
          y = r(5636),
          b = r(904),
          m = r(567),
          v = r(8111),
          g = r(6370),
          w = r(9325),
          _ = (0, i.initWindow)(),
          S = (0, i.initDocument)(),
          C = (0, h.initWindowName)(window),
          O = (0, i.initSocket)(),
          E = O.socket$,
          k = O.io$,
          x = (0, i.initOptions)(),
          j = (0, w.of)(navigator),
          P = (0, s.initNotify)(x.getValue()),
          F = (0, l.initLogger)(x.getValue()),
          T = (0, f.initListeners)(window, document, E, x),
          M = {
            window$: _,
            document$: S,
            socket$: E,
            option$: x,
            navigator$: j,
            notifyElement$: P,
            logInstance$: F,
            io$: k,
            outgoing$: T,
          };
        function N(t, e) {
          return function (t, r) {
            return r.pipe(
              (0, d.groupBy)(function (t) {
                return t[0];
              }),
              (0, y.withLatestFrom)(t),
              (0, v.filter)(function (t) {
                var e = t[0];
                return "function" == typeof t[1][e.key];
              }),
              (0, b.mergeMap)(function (t) {
                var r = t[0];
                return t[1][r.key](r.pipe((0, g.pluck)(String(1))), e);
              }),
              (0, m.share)()
            );
          };
        }
        var A = (0, o.zip)(
            p.effectOutputHandlers$,
            h.scrollRestoreHandlers$,
            function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return t.reduce(function (t, e) {
                return n(n({}, t), e);
              }, {});
            }
          ),
          R = N(0, M)(a.socketHandlers$, (0, u.merge)(M.socket$, T)),
          B = N(0, M)(A, R),
          I = N(0, M)(c.domHandlers$, (0, u.merge)(B, C)),
          L = (0, u.merge)(R, B, I);
        N(0, M)(l.logHandler$, L).subscribe();
      },
      9556: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.initListeners = void 0);
        var n = r(3943),
          o = r(7741),
          i = r(1513),
          s = r(2793),
          c = r(2590);
        e.initListeners = function (t, e, r, a) {
          return (0, n.merge)(
            (0, s.getScrollStream)(t, e, r, a),
            (0, i.getClickStream)(e, r, a),
            (0, o.getFormInputStream)(e, r, a),
            (0, c.getFormTogglesStream)(e, r, a)
          );
        };
      },
      1513: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, r, n) {
                  void 0 === n && (n = r);
                  var o = Object.getOwnPropertyDescriptor(e, r);
                  (o &&
                    !("get" in o
                      ? !e.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    }),
                    Object.defineProperty(t, n, o);
                }
              : function (t, e, r, n) {
                  void 0 === n && (n = r), (t[n] = e[r]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, e) {
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e,
                  });
                }
              : function (t, e) {
                  t.default = e;
                }),
          i =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var r in t)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(t, r) &&
                    n(e, t, r);
              return o(e, t), e;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getClickStream = void 0);
        var s = r(4737),
          c = r(2345),
          a = r(3125),
          u = i(r(2362)),
          l = r(5636),
          p = r(8111),
          h = r(2068),
          f = r(6370),
          d = r(617),
          y = r(8713),
          b = r(6739),
          m = r(9126),
          v = r(6256);
        e.getClickStream = function (t, e, r) {
          var n = (0, s.createTimedBooleanSwitch)(
            e.pipe(
              (0, p.filter)(function (t) {
                return t[0] === c.IncomingSocketNames.Click;
              })
            )
          );
          return r.pipe(
            (0, d.skip)(1),
            (0, f.pluck)("ghostMode", "clicks"),
            (0, y.distinctUntilChanged)(),
            (0, b.switchMap)(function (e) {
              return e
                ? (0, m.fromEvent)(t, "click", !0).pipe(
                    (0, h.map)(function (t) {
                      return t.target;
                    }),
                    (0, p.filter)(function (e) {
                      if ("LABEL" === e.tagName) {
                        var r = e.getAttribute("for");
                        if (r && t.getElementById(r)) return !1;
                      }
                      return !0;
                    }),
                    (0, l.withLatestFrom)(n),
                    (0, p.filter)(function (t) {
                      return t[1];
                    }),
                    (0, h.map)(function (t) {
                      var e = t[0];
                      return u.outgoing((0, a.getElementData)(e));
                    })
                  )
                : (0, v.empty)();
            })
          );
        };
      },
      7741: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, r, n) {
                  void 0 === n && (n = r);
                  var o = Object.getOwnPropertyDescriptor(e, r);
                  (o &&
                    !("get" in o
                      ? !e.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    }),
                    Object.defineProperty(t, n, o);
                }
              : function (t, e, r, n) {
                  void 0 === n && (n = r), (t[n] = e[r]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, e) {
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e,
                  });
                }
              : function (t, e) {
                  t.default = e;
                }),
          i =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var r in t)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(t, r) &&
                    n(e, t, r);
              return o(e, t), e;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getFormInputStream = void 0);
        var s = r(2345),
          c = r(3125),
          a = r(4737),
          u = i(r(1788)),
          l = r(8111),
          p = r(5636),
          h = r(2068),
          f = r(6370),
          d = r(617),
          y = r(8713),
          b = r(6739),
          m = r(6256),
          v = r(9126);
        e.getFormInputStream = function (t, e, r) {
          var n = (0, a.createTimedBooleanSwitch)(
            e.pipe(
              (0, l.filter)(function (t) {
                return t[0] === s.IncomingSocketNames.Keyup;
              })
            )
          );
          return r.pipe(
            (0, d.skip)(1),
            (0, f.pluck)("ghostMode", "forms", "inputs"),
            (0, y.distinctUntilChanged)(),
            (0, b.switchMap)(function (e) {
              return e
                ? (0, v.fromEvent)(t.body, "keyup", !0).pipe(
                    (0, h.map)(function (t) {
                      return t.target || t.srcElement;
                    }),
                    (0, l.filter)(function (t) {
                      return "INPUT" === t.tagName || "TEXTAREA" === t.tagName;
                    }),
                    (0, p.withLatestFrom)(n),
                    (0, l.filter)(function (t) {
                      return t[1];
                    }),
                    (0, h.map)(function (t) {
                      var e = t[0],
                        r = (0, c.getElementData)(e),
                        n = e.value;
                      return u.outgoing(r, n);
                    })
                  )
                : (0, m.empty)();
            })
          );
        };
      },
      2590: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, r, n) {
                  void 0 === n && (n = r);
                  var o = Object.getOwnPropertyDescriptor(e, r);
                  (o &&
                    !("get" in o
                      ? !e.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    }),
                    Object.defineProperty(t, n, o);
                }
              : function (t, e, r, n) {
                  void 0 === n && (n = r), (t[n] = e[r]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, e) {
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e,
                  });
                }
              : function (t, e) {
                  t.default = e;
                }),
          i =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var r in t)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(t, r) &&
                    n(e, t, r);
              return o(e, t), e;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getFormTogglesStream = void 0);
        var s = r(2345),
          c = r(3125),
          a = r(4737),
          u = i(r(9893)),
          l = r(8111),
          p = r(617),
          h = r(6370),
          f = r(8713),
          d = r(5636),
          y = r(2068),
          b = r(6739),
          m = r(6256),
          v = r(9126);
        e.getFormTogglesStream = function (t, e, r) {
          var n = (0, a.createTimedBooleanSwitch)(
            e.pipe(
              (0, l.filter)(function (t) {
                return t[0] === s.IncomingSocketNames.InputToggle;
              })
            )
          );
          return r.pipe(
            (0, p.skip)(1),
            (0, h.pluck)("ghostMode", "forms", "toggles"),
            (0, f.distinctUntilChanged)(),
            (0, b.switchMap)(function (e) {
              return e
                ? (0, v.fromEvent)(t, "change", !0).pipe(
                    (0, y.map)(function (t) {
                      return t.target || t.srcElement;
                    }),
                    (0, l.filter)(function (t) {
                      return "SELECT" === t.tagName;
                    }),
                    (0, d.withLatestFrom)(n),
                    (0, l.filter)(function (t) {
                      return t[1];
                    }),
                    (0, y.map)(function (t) {
                      var e = t[0],
                        r = (t[1], (0, c.getElementData)(e));
                      return u.outgoing(r, {
                        type: e.type,
                        checked: e.checked,
                        value: e.value,
                      });
                    })
                  )
                : (0, m.empty)();
            })
          );
        };
      },
      2793: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, r, n) {
                  void 0 === n && (n = r);
                  var o = Object.getOwnPropertyDescriptor(e, r);
                  (o &&
                    !("get" in o
                      ? !e.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    }),
                    Object.defineProperty(t, n, o);
                }
              : function (t, e, r, n) {
                  void 0 === n && (n = r), (t[n] = e[r]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, e) {
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e,
                  });
                }
              : function (t, e) {
                  t.default = e;
                }),
          i =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var r in t)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(t, r) &&
                    n(e, t, r);
              return o(e, t), e;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getScrollStream = void 0);
        var s = r(4737),
          c = r(2345),
          a = r(3125),
          u = i(r(2319)),
          l = r(8111),
          p = r(2068),
          h = r(5636),
          f = r(6370),
          d = r(8713),
          y = r(6739),
          b = r(6256),
          m = r(617),
          v = r(9126);
        e.getScrollStream = function (t, e, r, n) {
          var o = (0, s.createTimedBooleanSwitch)(
              r.pipe(
                (0, l.filter)(function (t) {
                  return t[0] === c.IncomingSocketNames.Scroll;
                })
              )
            ),
            i = n.pipe(
              (0, f.pluck)("scrollElementMapping"),
              (0, p.map)(function (t) {
                return t.map(function (t) {
                  return e.querySelector(t);
                });
              })
            );
          return n.pipe(
            (0, m.skip)(1),
            (0, f.pluck)("ghostMode", "scroll"),
            (0, d.distinctUntilChanged)(),
            (0, y.switchMap)(function (r) {
              return r
                ? (0, v.fromEvent)(e, "scroll", !0).pipe(
                    (0, p.map)(function (t) {
                      return t.target;
                    }),
                    (0, h.withLatestFrom)(o, i),
                    (0, l.filter)(function (t) {
                      var e = t[1];
                      return Boolean(e);
                    }),
                    (0, p.map)(function (r) {
                      var n = r[0],
                        o = (r[1], r[2]);
                      if (n === e)
                        return u.outgoing(
                          (0, a.getScrollPosition)(t, e),
                          "document",
                          0
                        );
                      var i = e.getElementsByTagName(n.tagName),
                        s = Array.prototype.indexOf.call(i || [], n);
                      return u.outgoing(
                        (0, a.getScrollPositionForElement)(n),
                        n.tagName,
                        s,
                        o.indexOf(n)
                      );
                    })
                  )
                : (0, b.empty)();
            })
          );
        };
      },
      3617: (t, e, r) => {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.logHandler$ =
            e.overlayInfo =
            e.consoleDebug =
            e.consoleInfo =
            e.Overlay =
            e.LogNames =
            e.initLogger =
              void 0);
        var o,
          i,
          s = r(9122),
          c = r(4903),
          a = r(9325),
          u = r(5216),
          l = r(8111),
          p = r(9890),
          h = r(5636),
          f = r(6739),
          d = r(6370);
        (e.initLogger = function (t) {
          var e = new u.Nanologger(t.logPrefix || "", {
            colors: { magenta: "#0F2634" },
          });
          return (0, a.of)(e);
        }),
          (function (t) {
            (t.Log = "@@Log"),
              (t.Info = "@@Log.info"),
              (t.Debug = "@@Log.debug");
          })((o = e.LogNames || (e.LogNames = {}))),
          (function (t) {
            t.Info = "@@Overlay.info";
          })((i = e.Overlay || (e.Overlay = {}))),
          (e.consoleInfo = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return [o.Log, [o.Info, t]];
          }),
          (e.consoleDebug = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return [o.Log, [o.Debug, t]];
          }),
          (e.overlayInfo = function (t, e) {
            return void 0 === e && (e = 2e3), [i.Info, [t, e]];
          }),
          (e.logHandler$ = new s.BehaviorSubject(
            (((n = {})[o.Log] = function (t, e) {
              return t.pipe(
                (0, h.withLatestFrom)(
                  e.logInstance$,
                  e.option$.pipe((0, d.pluck)("injectNotification"))
                ),
                (0, l.filter)(function (t) {
                  return "console" === t[2];
                }),
                (0, p.tap)(function (t) {
                  var e = t[0],
                    r = t[1];
                  switch (e[0]) {
                    case o.Info:
                      return r.info.apply(r, e[1]);
                    case o.Debug:
                      return r.debug.apply(r, e[1]);
                  }
                })
              );
            }),
            (n[i.Info] = function (t, e) {
              return t.pipe(
                (0, h.withLatestFrom)(e.option$, e.notifyElement$, e.document$),
                (0, l.filter)(function (t) {
                  var e = t[1];
                  return Boolean(e.notify);
                }),
                (0, p.tap)(function (t) {
                  var e = t[0],
                    r = (t[1], t[2]),
                    n = t[3];
                  (r.innerHTML = e[0]),
                    (r.style.display = "block"),
                    n.body.appendChild(r);
                }),
                (0, f.switchMap)(function (t) {
                  var e = t[0],
                    r = (t[1], t[2]),
                    n = t[3];
                  return (0, c.timer)(e[1] || 2e3).pipe(
                    (0, p.tap)(function () {
                      (r.style.display = "none"),
                        r.parentNode && n.body.removeChild(r);
                    })
                  );
                })
              );
            }),
            n)
          ));
      },
      8942: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.incomingBrowserLocation = void 0);
        var n = r(6370),
          o = r(8111),
          i = r(2068),
          s = r(5636),
          c = r(5374);
        e.incomingBrowserLocation = function (t, e) {
          return t.pipe(
            (0, s.withLatestFrom)(
              e.option$.pipe((0, n.pluck)("ghostMode", "location"))
            ),
            (0, o.filter)(function (t) {
              return !0 === t[1];
            }),
            (0, i.map)(function (t) {
              var e = t[0];
              return (0, c.browserSetLocation)(e);
            })
          );
        };
      },
      9259: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, r, n) {
                  void 0 === n && (n = r);
                  var o = Object.getOwnPropertyDescriptor(e, r);
                  (o &&
                    !("get" in o
                      ? !e.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    }),
                    Object.defineProperty(t, n, o);
                }
              : function (t, e, r, n) {
                  void 0 === n && (n = r), (t[n] = e[r]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, e) {
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e,
                  });
                }
              : function (t, e) {
                  t.default = e;
                }),
          i =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var r in t)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(t, r) &&
                    n(e, t, r);
              return o(e, t), e;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.incomingBrowserNotify = void 0);
        var s = r(2068),
          c = i(r(3617));
        e.incomingBrowserNotify = function (t) {
          return t.pipe(
            (0, s.map)(function (t) {
              return c.overlayInfo(t.message, t.timeout);
            })
          );
        };
      },
      8306: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.reloadBrowserSafe = e.incomingBrowserReload = void 0);
        var n = r(8111),
          o = r(5636),
          i = r(904),
          s = r(5167),
          c = r(9325),
          a = r(789),
          u = r(8348),
          l = r(8404);
        function p() {
          return (0, s.concat)(
            (0, c.of)((0, a.preBrowserReload)()),
            (0, c.of)((0, a.browserReload)()).pipe((0, u.subscribeOn)(l.async))
          );
        }
        (e.incomingBrowserReload = function (t, e) {
          return t.pipe(
            (0, o.withLatestFrom)(e.option$),
            (0, n.filter)(function (t) {
              return t[0], t[1].codeSync;
            }),
            (0, i.mergeMap)(p)
          );
        }),
          (e.reloadBrowserSafe = p);
      },
      2362: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.incomingHandler$ = e.outgoing = void 0);
        var n = r(2345),
          o = r(6370),
          i = r(8111),
          s = r(2068),
          c = r(5636),
          a = r(2248);
        (e.outgoing = function (t) {
          return [n.OutgoingSocketEvents.Click, t];
        }),
          (e.incomingHandler$ = function (t, e) {
            return t.pipe(
              (0, c.withLatestFrom)(
                e.option$.pipe((0, o.pluck)("ghostMode", "clicks")),
                e.window$.pipe((0, o.pluck)("location", "pathname"))
              ),
              (0, i.filter)(function (t) {
                var e = t[0],
                  r = t[1],
                  n = t[2];
                return r && e.pathname === n;
              }),
              (0, s.map)(function (t) {
                var e = t[0];
                return (0, a.simulateClick)(e);
              })
            );
          });
      },
      3429: function (t, e, r) {
        "use strict";
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, r, n) {
                  void 0 === n && (n = r);
                  var o = Object.getOwnPropertyDescriptor(e, r);
                  (o &&
                    !("get" in o
                      ? !e.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    }),
                    Object.defineProperty(t, n, o);
                }
              : function (t, e, r, n) {
                  void 0 === n && (n = r), (t[n] = e[r]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, e) {
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e,
                  });
                }
              : function (t, e) {
                  t.default = e;
                }),
          i =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var r in t)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(t, r) &&
                    n(e, t, r);
              return o(e, t), e;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.incomingConnection = void 0);
        var s = r(6370),
          c = r(9325),
          a = i(r(3617)),
          u = r(5636),
          l = r(904),
          p = r(7193);
        e.incomingConnection = function (t, e) {
          return t.pipe(
            (0, u.withLatestFrom)(e.option$.pipe((0, s.pluck)("logPrefix"))),
            (0, l.mergeMap)(function (t) {
              var e = t[0],
                r = t[1],
                n = r ? "".concat(r, ": ") : "";
              return (0,
              c.of)((0, p.setOptions)(e), a.overlayInfo("".concat(n, "connected")));
            })
          );
        };
      },
      9875: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.incomingDisconnect = void 0);
        var n = r(1819),
          o = r(9890);
        e.incomingDisconnect = function (t) {
          return t.pipe(
            (0, o.tap)(function (t) {
              return console.log(t);
            }),
            (0, n.ignoreElements)()
          );
        };
      },
      6530: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.incomingFileReload = void 0);
        var n = r(8111),
          o = r(6256),
          i = r(4737),
          s = r(9325),
          c = r(5636),
          a = r(904),
          u = r(6454),
          l = r(8306);
        e.incomingFileReload = function (t, e) {
          return t.pipe(
            (0, c.withLatestFrom)(e.option$),
            (0, n.filter)(function (t) {
              return t[0], t[1].codeSync;
            }),
            (0, a.mergeMap)(function (t) {
              var e = t[0],
                r = t[1];
              return e.url || !r.injectChanges
                ? (0, l.reloadBrowserSafe)()
                : e.basename && e.ext && (0, i.isBlacklisted)(e)
                ? (0, o.empty)()
                : (0, s.of)((0, u.fileReload)(e));
            })
          );
        };
      },
      9893: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__assign) ||
          function () {
            return (n =
              Object.assign ||
              function (t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.incomingInputsToggles = e.outgoing = void 0);
        var o = r(2345),
          i = r(6370),
          s = r(8111),
          c = r(2068),
          a = r(5636),
          u = r(6335);
        (e.outgoing = function (t, e) {
          return [o.OutgoingSocketEvents.InputToggle, n(n({}, t), e)];
        }),
          (e.incomingInputsToggles = function (t, e) {
            return t.pipe(
              (0, a.withLatestFrom)(
                e.option$.pipe((0, i.pluck)("ghostMode", "forms", "toggles")),
                e.window$.pipe((0, i.pluck)("location", "pathname"))
              ),
              (0, s.filter)(function (t) {
                return !0 === t[1];
              }),
              (0, c.map)(function (t) {
                var e = t[0];
                return (0, u.setElementToggleValue)(e);
              })
            );
          });
      },
      1788: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__assign) ||
          function () {
            return (n =
              Object.assign ||
              function (t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.incomingKeyupHandler = e.outgoing = void 0);
        var o = r(2345),
          i = r(6370),
          s = r(8111),
          c = r(2068),
          a = r(5636),
          u = r(7066);
        (e.outgoing = function (t, e) {
          return [o.OutgoingSocketEvents.Keyup, n(n({}, t), { value: e })];
        }),
          (e.incomingKeyupHandler = function (t, e) {
            return t.pipe(
              (0, a.withLatestFrom)(
                e.option$.pipe((0, i.pluck)("ghostMode", "forms", "inputs")),
                e.window$.pipe((0, i.pluck)("location", "pathname"))
              ),
              (0, s.filter)(function (t) {
                var e = t[0],
                  r = t[1],
                  n = t[2];
                return r && e.pathname === n;
              }),
              (0, c.map)(function (t) {
                var e = t[0];
                return (0, u.setElementValue)(e);
              })
            );
          });
      },
      9983: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.incomingOptionsSet = void 0);
        var n = r(2068),
          o = r(7193);
        e.incomingOptionsSet = function (t) {
          return t.pipe(
            (0, n.map)(function (t) {
              return (0, o.setOptions)(t.options);
            })
          );
        };
      },
      2319: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.incomingScrollHandler = e.outgoing = void 0);
        var n = r(2345),
          o = r(6370),
          i = r(8111),
          s = r(2068),
          c = r(5636),
          a = r(5859);
        (e.outgoing = function (t, e, r, o) {
          return (
            void 0 === o && (o = -1),
            [
              n.OutgoingSocketEvents.Scroll,
              { position: t, tagName: e, index: r, mappingIndex: o },
            ]
          );
        }),
          (e.incomingScrollHandler = function (t, e) {
            return t.pipe(
              (0, c.withLatestFrom)(
                e.option$.pipe((0, o.pluck)("ghostMode", "scroll")),
                e.window$.pipe((0, o.pluck)("location", "pathname"))
              ),
              (0, i.filter)(function (t) {
                var e = t[0],
                  r = t[1],
                  n = t[2];
                return r && e.pathname === n;
              }),
              (0, s.map)(function (t) {
                var e = t[0];
                return [a.EffectNames.BrowserSetScroll, e];
              })
            );
          });
      },
      8442: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.initNotify = void 0);
        var n = r(9122),
          o = {
            display: "none",
            padding: "15px",
            fontFamily: "sans-serif",
            position: "fixed",
            fontSize: "0.9em",
            zIndex: 9999,
            right: 0,
            top: 0,
            borderBottomLeftRadius: "5px",
            backgroundColor: "#1B2032",
            margin: 0,
            color: "white",
            textAlign: "center",
            pointerEvents: "none",
          };
        e.initNotify = function (t) {
          var e,
            r = o;
          if (t.notify.styles)
            if (
              "[object Array]" ===
              Object.prototype.toString.call(t.notify.styles)
            )
              r = t.notify.styles.join(";");
            else
              for (var i in t.notify.styles)
                t.notify.styles.hasOwnProperty(i) &&
                  (r[i] = t.notify.styles[i]);
          if (
            (((e = document.createElement("DIV")).id = "__bs_notify__"),
            "string" == typeof r)
          )
            e.style.cssText = r;
          else for (var s in r) e.style[s] = r[s];
          return new n.BehaviorSubject(e);
        };
      },
      3450: function (t, e, r) {
        "use strict";
        var n,
          o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, r, n) {
                  void 0 === n && (n = r);
                  var o = Object.getOwnPropertyDescriptor(e, r);
                  (o &&
                    !("get" in o
                      ? !e.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    }),
                    Object.defineProperty(t, n, o);
                }
              : function (t, e, r, n) {
                  void 0 === n && (n = r), (t[n] = e[r]);
                }),
          i =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, e) {
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e,
                  });
                }
              : function (t, e) {
                  t.default = e;
                }),
          s =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var r in t)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(t, r) &&
                    o(e, t, r);
              return i(e, t), e;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.scrollRestoreHandlers$ =
            e.initWindowName =
            e.regex =
            e.SUFFIX =
            e.PREFIX =
              void 0);
        var c = r(3125),
          a = r(5859),
          u = r(9122),
          l = r(6256),
          p = r(9325),
          h = s(r(3617)),
          f = r(5636),
          d = r(2068),
          y = r(1125),
          b = r(1373);
        (e.PREFIX = "<<BS_START>>"),
          (e.SUFFIX = "<<BS_START>>"),
          (e.regex = new RegExp(e.PREFIX + "(.+?)" + e.SUFFIX, "g")),
          (e.initWindowName = function (t) {
            var r = (function () {
              try {
                return (function (t) {
                  for (var r, n; (r = e.regex.exec(t)); ) n = r[1];
                  if (n) return JSON.parse(n);
                })(t.name);
              } catch (t) {
                return {};
              }
            })();
            if (
              ((t.name = t.name.replace(e.regex, "")),
              r && r.bs && r.bs.hardReload && r.bs.scroll)
            ) {
              var n = r.bs.scroll,
                o = n.x,
                i = n.y;
              return (0, p.of)(
                (0, b.setScroll)(o, i),
                h.consoleDebug(
                  "[ScrollRestore] x = ".concat(o, " y = ").concat(i)
                )
              );
            }
            return (0, l.empty)();
          }),
          (e.scrollRestoreHandlers$ = new u.BehaviorSubject(
            (((n = {})[a.EffectNames.PreBrowserReload] = function (t, r) {
              return t.pipe(
                (0, f.withLatestFrom)(r.window$, r.document$),
                (0, d.map)(function (t) {
                  var r = t[1],
                    n = t[2];
                  return [
                    r.name,
                    e.PREFIX,
                    JSON.stringify({
                      bs: {
                        hardReload: !0,
                        scroll: (0, c.getBrowserScrollPosition)(r, n),
                      },
                    }),
                    e.SUFFIX,
                  ].join("");
                }),
                (0, d.map)(function (t) {
                  return (0, y.setWindowName)(t);
                })
              );
            }),
            n)
          ));
      },
      2345: function (t, e, r) {
        "use strict";
        var n,
          o =
            (this && this.__assign) ||
            function () {
              return (o =
                Object.assign ||
                function (t) {
                  for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in (e = arguments[r]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.socketHandlers$ =
            e.OutgoingSocketEvents =
            e.IncomingSocketNames =
              void 0);
        var i,
          s,
          c = r(9122),
          a = r(5636),
          u = r(1819),
          l = r(9890),
          p = r(6370),
          h = r(2319),
          f = r(2362),
          d = r(1788),
          y = r(9259),
          b = r(8942),
          m = r(8306),
          v = r(6530),
          g = r(3429),
          w = r(9875),
          _ = r(9893),
          S = r(9983);
        function C(t) {
          return function (e, r) {
            return e.pipe(
              (0, a.withLatestFrom)(
                r.io$,
                r.window$.pipe((0, p.pluck)("location", "pathname"))
              ),
              (0, l.tap)(function (e) {
                var r = e[0],
                  n = e[1],
                  i = e[2];
                return n.emit(t, o(o({}, r), { pathname: i }));
              }),
              (0, u.ignoreElements)()
            );
          };
        }
        !(function (t) {
          (t.Connection = "connection"),
            (t.Disconnect = "disconnect"),
            (t.FileReload = "file:reload"),
            (t.BrowserReload = "browser:reload"),
            (t.BrowserLocation = "browser:location"),
            (t.BrowserNotify = "browser:notify"),
            (t.Scroll = "scroll"),
            (t.Click = "click"),
            (t.Keyup = "input:text"),
            (t.InputToggle = "input:toggles"),
            (t.OptionsSet = "options:set");
        })((i = e.IncomingSocketNames || (e.IncomingSocketNames = {}))),
          (function (t) {
            (t.Scroll = "@@outgoing/scroll"),
              (t.Click = "@@outgoing/click"),
              (t.Keyup = "@@outgoing/keyup"),
              (t.InputToggle = "@@outgoing/Toggle");
          })((s = e.OutgoingSocketEvents || (e.OutgoingSocketEvents = {}))),
          (e.socketHandlers$ = new c.BehaviorSubject(
            (((n = {})[i.Connection] = g.incomingConnection),
            (n[i.Disconnect] = w.incomingDisconnect),
            (n[i.FileReload] = v.incomingFileReload),
            (n[i.BrowserReload] = m.incomingBrowserReload),
            (n[i.BrowserLocation] = b.incomingBrowserLocation),
            (n[i.BrowserNotify] = y.incomingBrowserNotify),
            (n[i.Scroll] = h.incomingScrollHandler),
            (n[i.Click] = f.incomingHandler$),
            (n[i.Keyup] = d.incomingKeyupHandler),
            (n[i.InputToggle] = _.incomingInputsToggles),
            (n[i.OptionsSet] = S.incomingOptionsSet),
            (n[s.Scroll] = C(i.Scroll)),
            (n[s.Click] = C(i.Click)),
            (n[s.Keyup] = C(i.Keyup)),
            (n[s.InputToggle] = C(i.InputToggle)),
            n)
          ));
      },
      2107: function (t, e, r) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.initSocket =
            e.initOptions =
            e.initNavigator =
            e.initDocument =
            e.initWindow =
              void 0);
        var o = n(r(3859)),
          i = r(5100),
          s = r(9122),
          c = r(9325),
          a = r(567);
        (e.initWindow = function () {
          return (0, c.of)(window);
        }),
          (e.initDocument = function () {
            return (0, c.of)(document);
          }),
          (e.initNavigator = function () {
            return (0, c.of)(navigator);
          }),
          (e.initOptions = function () {
            return new s.BehaviorSubject(window.___browserSync___.options);
          }),
          (e.initSocket = function () {
            var t = window.___browserSync___.socketConfig,
              e = window.___browserSync___.socketUrl,
              r = (0, o.default)(e, t),
              n = i.Observable.create(function (t) {
                r.onAny(function () {
                  for (var e = [], r = 0; r < arguments.length; r++)
                    e[r] = arguments[r];
                  t.next(e);
                });
              }).pipe((0, a.share)()),
              c = new s.BehaviorSubject(r);
            return (
              (window.___browserSync___.socket = r), { socket$: n, io$: c }
            );
          });
      },
      4737: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.normalisePath =
            e.array =
            e.createTimedBooleanSwitch =
            e.isBlacklisted =
            e.updateSearch =
            e.getLocation =
            e.pathsMatch =
            e.numberOfMatchingSegments =
            e.pickBestMatch =
            e.pathFromUrl =
            e.splitUrl =
            e.each =
              void 0);
        var n = r(5167),
          o = r(4903),
          i = r(9325),
          s = r(6739),
          c = r(2946),
          a = r(8621);
        (e.each = function (t) {
          return [].slice.call(t || []);
        }),
          (e.splitUrl = function (t) {
            var e, r, n;
            return (
              (r = t.indexOf("#")) >= 0
                ? ((e = t.slice(r)), (t = t.slice(0, r)))
                : (e = ""),
              (r = t.indexOf("?")) >= 0
                ? ((n = t.slice(r)), (t = t.slice(0, r)))
                : (n = ""),
              { url: t, params: n, hash: e }
            );
          }),
          (e.pathFromUrl = function (t) {
            var r;
            return (
              (r =
                0 === (t = (0, e.splitUrl)(t).url).indexOf("file://")
                  ? t.replace(new RegExp("^file://(localhost)?"), "")
                  : t.replace(
                      new RegExp("^([^:]+:)?//([^:/]+)(:\\d*)?/"),
                      "/"
                    )),
              decodeURIComponent(r)
            );
          }),
          (e.pickBestMatch = function (t, r, n) {
            var o,
              i = { score: 0, object: null };
            return (
              r.forEach(function (r) {
                (o = (0, e.numberOfMatchingSegments)(t, n(r))) > i.score &&
                  (i = { object: r, score: o });
              }),
              i.score > 0 ? i : null
            );
          }),
          (e.numberOfMatchingSegments = function (t, e) {
            if ((t = l(t)) === (e = l(e))) return 1e4;
            for (
              var r = t.split("/").reverse(),
                n = e.split("/").reverse(),
                o = Math.min(r.length, n.length),
                i = 0;
              i < o && r[i] === n[i];

            )
              ++i;
            return i;
          }),
          (e.pathsMatch = function (t, r) {
            return (0, e.numberOfMatchingSegments)(t, r) > 0;
          }),
          (e.getLocation = function (t) {
            var e = document.createElement("a");
            return (e.href = t), "" === e.host && (e.href = e.href), e;
          }),
          (e.updateSearch = function (t, e, r) {
            return "" === t
              ? "?" + r
              : "?" +
                  t
                    .slice(1)
                    .split("&")
                    .map(function (t) {
                      return t.split("=");
                    })
                    .filter(function (t) {
                      return t[0] !== e;
                    })
                    .map(function (t) {
                      return [t[0], t[1]].join("=");
                    })
                    .concat(r)
                    .join("&");
          });
        var u = [
          function (t) {
            return "map" === t.ext;
          },
        ];
        function l(t) {
          return t.replace(/^\/+/, "").replace(/\\/g, "/").toLowerCase();
        }
        (e.isBlacklisted = function (t) {
          return u.some(function (e) {
            return e(t);
          });
        }),
          (e.createTimedBooleanSwitch = function (t, e) {
            return (
              void 0 === e && (e = 1e3),
              t.pipe(
                (0, s.switchMap)(function () {
                  return (0,
                  n.concat)((0, i.of)(!1), (0, o.timer)(e).pipe((0, a.mapTo)(!0)));
                }),
                (0, c.startWith)(!0)
              )
            );
          }),
          (e.array = function (t) {
            return [].slice.call(t);
          }),
          (e.normalisePath = l);
      },
      175: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.reload = void 0);
        var n,
          o = r(4737),
          i = r(6256),
          s = r(5100),
          c = r(3943),
          a = r(4903),
          u = r(7038),
          l = r(8111),
          p = r(2068),
          h = r(904),
          f = r(9890),
          d = r(8621),
          y = r(1931),
          b = r(4398),
          m = r(8736),
          v = r(3430),
          g = [
            { selector: "background", styleNames: ["backgroundImage"] },
            {
              selector: "border",
              styleNames: [
                "borderImage",
                "webkitBorderImage",
                "MozBorderImage",
              ],
            },
          ],
          w = { link: "href", img: "src", script: "src" };
        e.reload = function (t, e) {
          return function (n, o) {
            var s = n.path;
            if (o.liveCSS && s.match(/\.css$/i)) return O(s, t, e);
            if (o.liveImg && s.match(/\.(jpe?g|png|gif)$/i)) return r(s, t);
            for (
              var c = (function (t, e, r) {
                  var n = e.tagNames[t];
                  return {
                    attr: w[n],
                    tagName: n,
                    elems: r.getElementsByTagName(n),
                  };
                })(n.ext, o, t),
                a = (function (t, e, r) {
                  if ("*" === e[0]) return t;
                  for (
                    var n = [],
                      o = new RegExp("(^|/)" + e),
                      i = 0,
                      s = t.length;
                    i < s;
                    i += 1
                  )
                    o.test(t[i][r]) && n.push(t[i]);
                  return n;
                })(c.elems, n.basename, c.attr),
                u = 0,
                l = a.length;
              u < l;
              u += 1
            )
              _(a[u], c, o, t, e);
            return (0, i.empty)();
          };
          function r(t, e) {
            var r = x(Date.now());
            return (0, c.merge)(
              (0, u.from)([].slice.call(e.images)).pipe(
                (0, l.filter)(function (e) {
                  return (0, o.pathsMatch)(t, (0, o.pathFromUrl)(e.src));
                }),
                (0, p.map)(function (t) {
                  var e = {
                    target: t,
                    prop: "src",
                    value: C(t.src, r),
                    pathname: (0, o.getLocation)(t.src).pathname,
                  };
                  return (0, y.propSet)(e);
                })
              ),
              (0, u.from)(g).pipe(
                (0, h.mergeMap)(function (n) {
                  var i = n.selector,
                    s = n.styleNames;
                  return (0, u.from)(
                    e.querySelectorAll("[style*=".concat(i, "]"))
                  ).pipe(
                    (0, h.mergeMap)(function (e) {
                      return (function (t, e, r, n) {
                        return (0, u.from)(e).pipe(
                          (0, l.filter)(function (e) {
                            return "string" == typeof t[e];
                          }),
                          (0, p.map)(function (e) {
                            var i,
                              s = t[e],
                              c = s.replace(
                                new RegExp("\\burl\\s*\\(([^)]*)\\)"),
                                function (t, e) {
                                  var s = e;
                                  return (
                                    '"' === e[0] &&
                                      '"' === e[e.length - 1] &&
                                      (s = e.slice(1, -1)),
                                    (i = (0, o.getLocation)(s).pathname),
                                    (0, o.pathsMatch)(r, (0, o.pathFromUrl)(s))
                                      ? "url(".concat(C(s, n), ")")
                                      : t
                                  );
                                }
                              );
                            return [t, e, s, c, i];
                          }),
                          (0, l.filter)(function (t) {
                            t[0], t[1];
                            var e = t[2];
                            return t[3] !== e;
                          }),
                          (0, p.map)(function (t) {
                            var e = t[0],
                              r = t[1],
                              n = t[2],
                              o = t[3],
                              i = t[4];
                            return (0,
                            b.styleSet)({ style: e, styleName: r, value: n, newValue: o, pathName: i });
                          })
                        );
                      })(e.style, s, t, r);
                    })
                  );
                })
              )
            );
          }
          function _(t, e, i, s, c) {
            var a = e.attr,
              u = t[a],
              l = new Date().getTime(),
              p = "browsersync-legacy",
              h = p + "=" + l,
              f = (0, o.getLocation)(u),
              d = (0, o.updateSearch)(f.search, p, h);
            switch (e.tagName) {
              case "link":
                O(u, s, c);
                break;
              case "img":
                r(u, s);
                break;
              default:
                !1 === i.timestamps
                  ? (t[a] = f.href)
                  : (t[a] = f.href.split("?")[0] + d),
                  setTimeout(function () {
                    n
                      ? ((n.style.display = "none"),
                        (n.style.display = "block"))
                      : ((n = s.createElement("DIV")), s.body.appendChild(n));
                  }, 200);
            }
            return { elem: t, timeStamp: l };
          }
          function S(t, e, r) {
            var n;
            if (t.__LiveReload_pendingRemoval) return (0, i.empty)();
            (t.__LiveReload_pendingRemoval = !0),
              "STYLE" === t.tagName
                ? (((n = e.createElement("link")).rel = "stylesheet"),
                  (n.media = t.media),
                  (n.disabled = t.disabled))
                : (n = t.cloneNode(!1));
            var c = t.href,
              u = C(k(t));
            n.href = u;
            var l,
              p = (0, o.getLocation)(u).pathname,
              y = p.split("/").slice(-1)[0],
              b = t.parentNode;
            return (
              b.lastChild === t
                ? b.appendChild(n)
                : b.insertBefore(n, t.nextSibling),
              (l = /AppleWebKit/.test(r.userAgent) ? 5 : 200),
              s.Observable.create(function (t) {
                n.onload = function () {
                  t.next(!0), t.complete();
                };
              }).pipe(
                (0, h.mergeMap)(function () {
                  return (0, a.timer)(l).pipe(
                    (0, f.tap)(function () {
                      (t && !t.parentNode) ||
                        (t.parentNode.removeChild(t),
                        (n.onreadystatechange = null));
                    }),
                    (0, d.mapTo)(
                      (0, m.linkReplace)({
                        target: n,
                        nextHref: u,
                        prevHref: c,
                        pathname: p,
                        basename: y,
                      })
                    )
                  );
                })
              )
            );
          }
          function C(t, e) {
            var r, n, i;
            void 0 === e && (e = x(Date.now())),
              (t = (r = (0, o.splitUrl)(t)).url),
              (n = r.hash);
            var s = (i = r.params).replace(
              /(\?|&)browsersync=(\d+)/,
              function (t, r) {
                return "".concat(r).concat(e);
              }
            );
            return (
              s === i &&
                (s =
                  0 === i.length ? "?".concat(e) : "".concat(i, "&").concat(e)),
              t + s + n
            );
          }
          function O(t, e, r) {
            var n = (0, o.array)(e.getElementsByTagName("link")).filter(
                function (t) {
                  return (
                    t.rel.match(/^stylesheet$/i) &&
                    !t.__LiveReload_pendingRemoval
                  );
                }
              ),
              s = (0, o.array)(e.getElementsByTagName("style"))
                .filter(function (t) {
                  return Boolean(t.sheet);
                })
                .reduce(function (t, e) {
                  return t.concat(E(e, e.sheet));
                }, []),
              c = n.reduce(function (t, e) {
                return t.concat(E(e, e.sheet));
              }, []),
              l = n.concat(s, c),
              p = (0, o.pickBestMatch)(t, l, function (t) {
                return (0, o.pathFromUrl)(k(t));
              });
            if (p)
              return p.object && p.object.rule
                ? (function (t, e) {
                    var r = t.rule,
                      n = t.index,
                      o = t.link,
                      i = r.parentStyleSheet,
                      s = C(r.href),
                      c = r.media.length ? [].join.call(r.media, ", ") : "",
                      u = '@import url("'.concat(s, '") ').concat(c, ";");
                    r.__LiveReload_newHref = s;
                    var l = e.createElement("link");
                    return (
                      (l.rel = "stylesheet"),
                      (l.href = s),
                      (l.__LiveReload_pendingRemoval = !0),
                      o.parentNode && o.parentNode.insertBefore(l, o),
                      (0, a.timer)(200).pipe(
                        (0, f.tap)(function () {
                          l.parentNode && l.parentNode.removeChild(l),
                            r.__LiveReload_newHref === s &&
                              (i.insertRule(u, n),
                              i.deleteRule(n + 1),
                              ((r = i.cssRules[n]).__LiveReload_newHref = s));
                        }),
                        (0, h.mergeMap)(function () {
                          return (0, a.timer)(200).pipe(
                            (0, f.tap)(function () {
                              if (r.__LiveReload_newHref === s)
                                return i.insertRule(u, n), i.deleteRule(n + 1);
                            })
                          );
                        })
                      )
                    );
                  })(p.object, e)
                : S(p.object, e, r);
            if (n.length) {
              var d = t.split("."),
                y = d[0];
              if ((d.slice(1), "*" === y))
                return (0, u.from)(
                  n.map(function (t) {
                    return S(t, e, r);
                  })
                ).pipe((0, v.mergeAll)());
            }
            return (0, i.empty)();
          }
          function E(t, e) {
            var r = [];
            return (
              (function t(e, o) {
                if (o && o.length)
                  for (var i = 0; i < o.length; i++) {
                    var s = o[i];
                    switch (s.type) {
                      case CSSRule.CHARSET_RULE:
                        break;
                      case CSSRule.IMPORT_RULE:
                        r.push({ link: e, rule: s, index: i, href: s.href }),
                          t(e, n(s.styleSheet));
                    }
                  }
              })(t, n(e)),
              r
            );
            function n(t) {
              var e;
              try {
                e = null != t ? t.cssRules : void 0;
              } catch (t) {}
              return e;
            }
          }
          function k(t) {
            return t.href || t.getAttribute("data-href");
          }
          function x(t) {
            return "browsersync=".concat(t);
          }
        };
      },
      5216: function (t, e) {
        "use strict";
        var r =
          (this && this.__assign) ||
          function () {
            return (r =
              Object.assign ||
              function (t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Nanologger = void 0);
        var n = {
            trace: "🔍",
            debug: "🐛",
            info: "✨",
            warn: "⚠️",
            error: "🚨",
            fatal: "💀",
          },
          o = {
            trace: 10,
            debug: 20,
            info: 30,
            warn: 40,
            error: 50,
            fatal: 60,
          },
          i = {
            foreground: "#d3c0c8",
            background: "#2d2d2d",
            black: "#2d2d2d",
            red: "#f2777a",
            green: "#99cc99",
            yellow: "#ffcc66",
            blue: "#6699cc",
            magenta: "#cc99cc",
            cyan: "#66cccc",
            white: "#d3d0c8",
            brightBlack: "#747369",
          },
          s = (function () {
            function t(t, e) {
              (this.name = t),
                (this.opts = e),
                (this._name = t || ""),
                (this._colors = r(r({}, i), e.colors || {}));
              try {
                this.logLevel =
                  window.localStorage.getItem("logLevel") || "info";
              } catch (t) {
                this.logLevel = "info";
              }
              this._logLevel = o[this.logLevel];
            }
            return (
              (t.prototype.trace = function () {
                for (var t = ["trace"], e = 0, r = arguments.length; e < r; e++)
                  t.push(arguments[e]);
                this._print.apply(this, t);
              }),
              (t.prototype.debug = function () {
                for (var t = ["debug"], e = 0, r = arguments.length; e < r; e++)
                  t.push(arguments[e]);
                this._print.apply(this, t);
              }),
              (t.prototype.info = function () {
                for (var t = ["info"], e = 0, r = arguments.length; e < r; e++)
                  t.push(arguments[e]);
                this._print.apply(this, t);
              }),
              (t.prototype.warn = function () {
                for (var t = ["warn"], e = 0, r = arguments.length; e < r; e++)
                  t.push(arguments[e]);
                this._print.apply(this, t);
              }),
              (t.prototype.error = function () {
                for (var t = ["error"], e = 0, r = arguments.length; e < r; e++)
                  t.push(arguments[e]);
                this._print.apply(this, t);
              }),
              (t.prototype.fatal = function () {
                for (var t = ["fatal"], e = 0, r = arguments.length; e < r; e++)
                  t.push(arguments[e]);
                this._print.apply(this, t);
              }),
              (t.prototype._print = function (t) {
                if (!(o[t] < this._logLevel)) {
                  var e = n[t],
                    r = this._name || "unknown",
                    i =
                      "error" === t || t.fatal
                        ? this._colors.red
                        : "warn" === t
                        ? this._colors.yellow
                        : this._colors.green,
                    s = [],
                    a = [null],
                    u = e + " %c%s";
                  a.push(c(this._colors.magenta), r);
                  for (var l = 1, p = arguments.length; l < p; l++) {
                    var h = arguments[l];
                    "string" == typeof h
                      ? 1 === l
                        ? ((u += " %c%s"), a.push(c(i)), a.push(h))
                        : /ms$/.test(h)
                        ? ((u += " %c%s"),
                          a.push(c(this._colors.brightBlack)),
                          a.push(h))
                        : ((u += " %c%s"),
                          a.push(c(this._colors.white)),
                          a.push(h))
                      : "number" == typeof h
                      ? ((u += " %c%d"),
                        a.push(c(this._colors.magenta)),
                        a.push(h))
                      : s.push(h);
                  }
                  (a[0] = u),
                    s.forEach(function (t) {
                      a.push(t);
                    }),
                    Function.prototype.apply.apply(console.log, [console, a]);
                }
              }),
              t
            );
          })();
        function c(t) {
          return "color: " + t + ";";
        }
        e.Nanologger = s;
      },
      2281: (t) => {
        "use strict";
        var e,
          r =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
              ""
            ),
          n = {},
          o = 0,
          i = 0;
        function s(t) {
          var e = "";
          do {
            (e = r[t % 64] + e), (t = Math.floor(t / 64));
          } while (t > 0);
          return e;
        }
        function c() {
          var t = s(+new Date());
          return t !== e ? ((o = 0), (e = t)) : t + "." + s(o++);
        }
        for (; i < 64; i++) n[r[i]] = i;
        (c.encode = s),
          (c.decode = function (t) {
            var e = 0;
            for (i = 0; i < t.length; i++) e = 64 * e + n[t.charAt(i)];
            return e;
          }),
          (t.exports = c);
      },
    },
    e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { exports: {} });
    return t[n].call(o.exports, o, o.exports, r), o.exports;
  }
  (r.d = (t, e) => {
    for (var n in e)
      r.o(e, n) &&
        !r.o(t, n) &&
        Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
  }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (r.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    r(9620);
})();
("use strict");

(function (window, document, bs, undefined) {
  var socket = bs.socket;

  var uiOptions = {
    bs: {},
  };

  socket.on("ui:connection", function (options) {
    uiOptions = options;

    bs.socket.emit("ui:history:connected", {
      href: window.location.href,
    });
  });

  socket.on("ui:element:remove", function (data) {
    if (data.id) {
      var elem = document.getElementById(data.id);
      if (elem) {
        removeElement(elem);
      }
    }
  });

  socket.on("highlight", function () {
    var id = "__browser-sync-highlight__";
    var elem = document.getElementById(id);
    if (elem) {
      return removeElement(elem);
    }
    (function (e) {
      e.style.position = "fixed";
      e.style.zIndex = "1000";
      e.style.width = "100%";
      e.style.height = "100%";
      e.style.borderWidth = "5px";
      e.style.borderColor = "red";
      e.style.borderStyle = "solid";
      e.style.top = "0";
      e.style.left = "0";
      e.setAttribute("id", id);
      document.getElementsByTagName("body")[0].appendChild(e);
    })(document.createElement("div"));
  });

  socket.on("ui:element:add", function (data) {
    var elem = document.getElementById(data.id);

    if (!elem) {
      if (data.type === "css") {
        return addCss(data);
      }
      if (data.type === "js") {
        return addJs(data);
      }
      if (data.type === "dom") {
        return addDomNode(data);
      }
    }
  });

  bs.addDomNode = addDomNode;
  bs.addJs = addJs;
  bs.addCss = addJs;

  function addJs(data) {
    (function (e) {
      e.setAttribute("src", getAbsoluteUrl(data.src));
      e.setAttribute("id", data.id);
      document.getElementsByTagName("body")[0].appendChild(e);
    })(document.createElement("script"));
  }

  function addCss(data) {
    (function (e) {
      e.setAttribute("rel", "stylesheet");
      e.setAttribute("type", "text/css");
      e.setAttribute("id", data.id);
      e.setAttribute("media", "all");
      e.setAttribute("href", getAbsoluteUrl(data.src));
      document.getElementsByTagName("head")[0].appendChild(e);
    })(document.createElement("link"));
  }

  function addDomNode(data) {
    var elem = document.createElement(data.tagName);
    for (var attr in data.attrs) {
      elem.setAttribute(attr, data.attrs[attr]);
    }
    if (data.placement) {
      document.getElementsByTagName(data.placement)[0].appendChild(elem);
    } else {
      document.getElementsByTagName("body")[0].appendChild(elem);
    }
    return elem;
  }

  function removeElement(element) {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  function getAbsoluteUrl(path) {
    if (path.match(/^h/)) {
      return path;
    }
    return [window.location.protocol, "//", getHost(), path].join("");
  }

  function getHost() {
    return uiOptions.bs.mode === "snippet"
      ? window.location.hostname + ":" + uiOptions.bs.port
      : window.location.host;
  }
})(window, document, ___browserSync___);
