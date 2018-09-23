/**
 * @file Describe the file
 */
/* globals magic, importScript, passport, importScriptList */
(function () {
    var scripts = document.getElementsByTagName('script');
    var length = scripts.length;
    var src = scripts[length - 1].src;
    var pos = src.indexOf('/js/');
    var scriptPath = src.substr(0, pos) + '/js/';
    window.importScriptList = {};
    window.importScript = function (filename) {
        if (!filename) {
            return;
        }
        if (filename.indexOf('http://') === -1 && filename.indexOf('https://') === -1) {
            if (filename.substr(0, 1) === '/') {
                filename = filename.substr(1);
            }
            filename = scriptPath + filename;
        }
        if (filename in importScriptList) {
            return;
        }
        importScriptList[filename] = true;
        document.write('<script src="' + filename + '" type="text/javascript"><\/' + 'script>');
    };
})();

passport._define('login_tangram.js', function () {
    var T, baiduInstance, baidu = T = function (a, b) {
        return baidu.dom ? baidu.dom(a, b) : null
    };
    baidu.version = "2.0.0.1";
    baidu.guid = "$BAIDU$";
    baidu.key = "tangram_guid";
    window[baidu.guid] = window[baidu.guid] || {};
    baidu.check = baidu.check || function () {
    };
    baidu.lang = baidu.lang || {};
    baidu.forEach = function (a, e, d) {
        var c, f, b;
        if (typeof e == "function" && a) {
            if (typeof a.length == "number") {
                for (c = 0, f = a.length; c < f; c++) {
                    b = a[c] || (a.charAt && a.charAt(c));
                    e.call(d || null, b, c, a)
                }
            } else {
                if (typeof a == "number") {
                    for (c = 0; c < a; c++) {
                        e.call(d || null, c, c, c)
                    }
                } else {
                    if (typeof a == "object") {
                        for (c in a) {
                            if (a.hasOwnProperty(c)) {
                                e.call(d || null, a[c], c, a)
                            }
                        }
                    }
                }
            }
        }
        return a
    };
    baidu.type = (function () {
        var b = {}, a = [, "HTMLElement", "Attribute", "Text", , , , , "Comment", "Document", , "DocumentFragment",],
            d = "Array Boolean Date Error Function Number RegExp String", c = b.toString;
        baidu.forEach(d.split(" "), function (e) {
            b["[object " + e + "]"] = e.toLowerCase();
            baidu["is" + e] = function (f) {
                return baidu.type(f) == e.toLowerCase()
            }
        });
        return function (f) {
            var e = typeof f;
            return e != "object" ? e : f == null ? "null" : f._type_ || b[c.call(f)] || a[f.nodeType] || (f == f.window ? "Window" : "") || "object"
        }
    })();
    baidu.isDate = function (a) {
        return baidu.type(a) == "date" && a.toString() != "Invalid Date" && !isNaN(a)
    };
    baidu.isElement = function (a) {
        return baidu.type(a) == "HTMLElement"
    };
    baidu.isEnumerable = function (a) {
        return a != null && typeof a == "object" && (typeof a.length == "number" || typeof a[0] != "undefined")
    };
    baidu.isNumber = function (a) {
        return baidu.type(a) == "number" && isFinite(a)
    };
    baidu.isPlainObject = function (c) {
        var a, b = Object.prototype.hasOwnProperty;
        if (baidu.type(c) != "object") {
            return false
        }
        if (c.constructor && !b.call(c, "constructor") && !b.call(c.constructor.prototype, "isPrototypeOf")) {
            return false
        }
        for (a in c) {
        }
        return a === undefined || b.call(c, a)
    };
    baidu.isObject = function (a) {
        return typeof a === "function" || (typeof a === "object" && a != null)
    };
    baidu.extend = function (c, f) {
        var d, m, k, a, b, g = 1, e = arguments.length, l = c || {}, h, j;
        baidu.isBoolean(c) && (g = 2) && (l = f || {});
        !baidu.isObject(l) && (l = {});
        for (; g < e; g++) {
            m = arguments[g];
            if (baidu.isObject(m)) {
                for (k in m) {
                    a = l[k];
                    b = m[k];
                    if (a === b) {
                        continue
                    }
                    if (baidu.isBoolean(c) && c && b && (baidu.isPlainObject(b) || (h = baidu.isArray(b)))) {
                        if (h) {
                            h = false;
                            j = a && baidu.isArray(a) ? a : []
                        } else {
                            j = a && baidu.isPlainObject(a) ? a : {}
                        }
                        l[k] = baidu.extend(c, j, b)
                    } else {
                        if (b !== undefined) {
                            l[k] = b
                        }
                    }
                }
            }
        }
        return l
    };
    baidu.createChain = function (f, d, c) {
        var b = f == "dom" ? "$DOM" : "$" + f.charAt(0).toUpperCase() + f.substr(1);
        var e = Array.prototype.slice;
        var a = baidu[f] = baidu[f] || d || function (g) {
            return baidu.extend(g, baidu[f].fn)
        };
        a.extend = function (g) {
            var h;
            for (h in g) {
                a[h] = function () {
                    var k = arguments[0];
                    f == "dom" && baidu.type(k) == "string" && (k = "#" + k);
                    var j = a(k);
                    var i = j[h].apply(j, e.call(arguments, 1));
                    return baidu.type(i) == "$DOM" ? i.get(0) : i
                }
            }
            return baidu.extend(baidu[f].fn, g)
        };
        baidu[f][b] = baidu[f][b] || c || function () {
        };
        a.fn = baidu[f][b].prototype;
        return a
    };
    baidu.overwrite = function (a, d, c) {
        for (var b = d.length - 1; b > -1; b--) {
            a.prototype[d[b]] = c(d[b])
        }
        return a
    };
    baidu.object = baidu.object || {};
    baidu.object.isPlain = baidu.isPlainObject;
    baidu.createChain("string", function (a) {
        var b = baidu.type(a), d = new String(~"string|number".indexOf(b) ? a : b), c = String.prototype;
        baidu.forEach(baidu.string.$String.prototype, function (f, e) {
            c[e] || (d[e] = f)
        });
        return d
    });
    baidu.string.extend({
        trim: function () {
            var a = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)", "g");
            return function () {
                return this.replace(a, "")
            }
        }()
    });
    baidu.createChain("array", function (d) {
        var c = baidu.array.$Array.prototype, b = Array.prototype, a;
        baidu.type(d) != "array" && (d = []);
        for (a in c) {
            b[a] || (d[a] = c[a])
        }
        return d
    });
    baidu.overwrite(baidu.array.$Array, "concat slice".split(" "), function (a) {
        return function () {
            return baidu.array(Array.prototype[a].apply(this, arguments))
        }
    });
    baidu.array.extend({
        indexOf: function (b, c) {
            baidu.check(".+(,number)?", "baidu.array.indexOf");
            var a = this.length;
            (c = c | 0) < 0 && (c = Math.max(0, a + c));
            for (; c < a; c++) {
                if (c in this && this[c] === b) {
                    return c
                }
            }
            return -1
        }
    });
    baidu.createChain("Callbacks", function (m) {
        var l = {};

        function j(o) {
            var n = l[o] = {};
            baidu.forEach(o.split(/\s+/), function (p, q) {
                n[p] = true
            });
            return n
        }

        m = typeof m === "string" ? (l[m] || j(m)) : baidu.extend({}, m);
        var d, a, e, c, f, h, g = [], i = !m.once && [], b = function (n) {
            d = m.memory && n;
            a = true;
            h = c || 0;
            c = 0;
            f = g.length;
            e = true;
            for (; g && h < f; h++) {
                if (g[h].apply(n[0], n[1]) === false && m.stopOnFalse) {
                    d = false;
                    break
                }
            }
            e = false;
            if (g) {
                if (i) {
                    if (i.length) {
                        b(i.shift())
                    }
                } else {
                    if (d) {
                        g = []
                    } else {
                        k.disable()
                    }
                }
            }
        }, k = {
            add: function () {
                if (g) {
                    var o = g.length;
                    (function n(p) {
                        baidu.forEach(p, function (q, r) {
                            if ((typeof q === "function") && (!m.unique || !k.has(q))) {
                                g.push(q)
                            } else {
                                if (q && q.length) {
                                    n(q)
                                }
                            }
                        })
                    })(arguments);
                    if (e) {
                        f = g.length
                    } else {
                        if (d) {
                            c = o;
                            b(d)
                        }
                    }
                }
                return this
            }, remove: function () {
                if (g) {
                    baidu.forEach(arguments, function (n, p) {
                        var o;
                        while ((o = baidu.array(g).indexOf(n, o)) > -1) {
                            g.splice(o, 1);
                            if (e) {
                                if (o <= f) {
                                    f--
                                }
                                if (o <= h) {
                                    h--
                                }
                            }
                        }
                    })
                }
                return this
            }, has: function (n) {
                return baidu.array(g).indexOf(n) > -1
            }, empty: function () {
                g = [];
                return this
            }, disable: function () {
                g = i = d = undefined;
                return this
            }, disabled: function () {
                return !g
            }, lock: function () {
                i = undefined;
                if (!d) {
                    k.disable()
                }
                return this
            }, locked: function () {
                return !i
            }, fireWith: function (o, n) {
                n = n || [];
                n = [o, n.slice ? n.slice() : n];
                if (g && (!a || i)) {
                    if (e) {
                        i.push(n)
                    } else {
                        b(n)
                    }
                }
                return this
            }, fire: function () {
                k.fireWith(this, arguments);
                return this
            }, fired: function () {
                return !!a
            }
        };
        return k
    }, function () {
    });
    baidu.createChain("Deferred", function (c) {
        var f = Array.prototype.slice;
        var b = [["resolve", "done", baidu.Callbacks("once memory"), "resolved"], ["reject", "fail", baidu.Callbacks("once memory"), "rejected"], ["notify", "progress", baidu.Callbacks("memory")]],
            d = "pending", e = {
                state: function () {
                    return d
                }, always: function () {
                    a.done(arguments).fail(arguments);
                    return this
                }, then: function () {
                    var g = arguments;
                    return baidu.Deferred(function (h) {
                        baidu.forEach(b, function (j, k) {
                            var m = j[0], l = g[k];
                            a[j[1]]((typeof l === "function") ? function () {
                                var i = l.apply(this, arguments);
                                if (i && (typeof i.promise === "function")) {
                                    i.promise().done(h.resolve).fail(h.reject).progress(h.notify)
                                } else {
                                    h[m + "With"](this === a ? h : this, [i])
                                }
                            } : h[m])
                        });
                        g = null
                    }).promise()
                }, promise: function (g) {
                    return typeof g === "object" ? baidu.extend(g, e) : e
                }
            }, a = {};
        e.pipe = e.then;
        baidu.forEach(b, function (g, h) {
            var k = g[2], j = g[3];
            e[g[1]] = k.add;
            if (j) {
                k.add(function () {
                    d = j
                }, b[h ^ 1][2].disable, b[2][2].lock)
            }
            a[g[0]] = k.fire;
            a[g[0] + "With"] = k.fireWith
        });
        e.promise(a);
        if (c) {
            c.call(a, a)
        }
        baidu.extend(baidu, {
            when: function (l) {
                var j = 0, n = f.call(arguments), g = n.length,
                    h = g !== 1 || (l && (typeof l.promise === "function")) ? g : 0, q = h === 1 ? l : baidu.Deferred(),
                    k = function (s, t, r) {
                        return function (i) {
                            t[s] = this;
                            r[s] = arguments.length > 1 ? f.call(arguments) : i;
                            if (r === p) {
                                q.notifyWith(t, r)
                            } else {
                                if (!(--h)) {
                                    q.resolveWith(t, r)
                                }
                            }
                        }
                    }, p, m, o;
                if (g > 1) {
                    p = new Array(g);
                    m = new Array(g);
                    o = new Array(g);
                    for (; j < g; j++) {
                        if (n[j] && (typeof n[j].promise === "function")) {
                            n[j].promise().done(k(j, o, n)).fail(q.reject).progress(k(j, m, p))
                        } else {
                            --h
                        }
                    }
                }
                if (!h) {
                    q.resolveWith(o, n)
                }
                return q.promise()
            }
        });
        return a
    }, function () {
    });
    baidu._util_ = baidu._util_ || {};
    baidu.global = baidu.global || (function () {
        var a = baidu._util_.$global = window[baidu.guid];
        return function (c, d, b) {
            if (typeof d != "undefined") {
                d = b && typeof a[c] != "undefined" ? a[c] : d;
                a[c] = d
            } else {
                if (c && typeof a[c] == "undefined") {
                    a[c] = {}
                }
            }
            return a[c]
        }
    })();
    baidu.browser = baidu.browser || function () {
        var b = navigator.userAgent;
        var a = {
            isStrict: document.compatMode == "CSS1Compat",
            isGecko: /gecko/i.test(b) && !/like gecko/i.test(b),
            isWebkit: /webkit/i.test(b)
        };
        try {
            / (\d + \.\d + ) /.test(external.max_version) && (a.maxthon = +RegExp["\x241"])
        } catch (c) {
        }
        switch (true) {
            case /msie(\d+\.\d+)/i.test(b):
                a.ie = document.documentMode || +RegExp["\x241"];
                break;
            case /chrome\/(\d+\.\d+)/i.test(b):
                a.chrome = +RegExp["\x241"];
                break;
            case /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(b) && !/chrome/i.test(b):
                a.safari = +(RegExp["\x241"] || RegExp["\x242"]);
                break;
            case /firefox\/(\d+\.\d+)/i.test(b):
                a.firefox = +RegExp["\x241"];
                break;
            case /opera(\/|)(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(b):
                a.opera = +(RegExp["\x246"] || RegExp["\x242"]);
                break
        }
        baidu.extend(baidu, a);
        return a
    }();
    baidu.id = function () {
        var b = baidu.global("_maps_id"), a = baidu.key;
        baidu.global("_counter", 1, true);
        return function (d, h) {
            var g, f = baidu.isString(d), c = baidu.isObject(d), i = c ? d[a] : f ? d : "";
            if (baidu.isString(h)) {
                switch (h) {
                    case"get":
                        return c ? i : b[i];
                        break;
                    case"remove":
                    case"delete":
                        if (g = b[i]) {
                            if (baidu.browser.ie && baidu.isElement(g)) {
                                g.removeAttribute(a)
                            } else {
                                delete g[a]
                            }
                            delete b[i]
                        }
                        return i;
                        break;
                    case"decontrol":
                        !(g = b[i]) && c && (d[a] = i = baidu.id());
                        i && delete b[i];
                        return i;
                        break;
                    default:
                        if (f) {
                            (g = b[i]) && delete b[i];
                            g && (b[g[a] = h] = g)
                        } else {
                            if (c) {
                                i && delete b[i];
                                b[d[a] = h] = d
                            }
                        }
                        return h
                }
            }
            if (c) {
                !i && (b[d[a] = i = baidu.id()] = d);
                return i
            } else {
                if (f) {
                    return b[d]
                }
            }
            return "TANGRAM__PSP_" + baidu._util_.$global._counter++
        }
    }();
    baidu.id.key = "tangram_guid";
    baidu.merge = function (e, c) {
        var d = e.length, b = 0;
        if (typeof c.length === "number") {
            for (var a = c.length; b < a; b++) {
                e[d++] = c[b]
            }
        } else {
            while (c[b] !== undefined) {
                e[d++] = c[b++]
            }
        }
        e.length = d;
        return e
    };
    baidu.array.extend({
        unique: function (e) {
            var b = this.length, a = this.slice(0), d, c;
            if ("function" != typeof e) {
                e = function (g, f) {
                    return g === f
                }
            }
            while (--b > 0) {
                c = a[b];
                d = b;
                while (d--) {
                    if (e(c, a[d])) {
                        a.splice(b, 1);
                        break
                    }
                }
            }
            b = this.length = a.length;
            for (d = 0; d < b; d++) {
                this[d] = a[d]
            }
            return this
        }
    });
    baidu.query = baidu.query || (function () {
        var d = / ^ (\w * )# ([\w\ - \$] + ) $ /, a = /^#([\w\-\$]+)$/;
        rTag = /^\w+$/, rClass = /^(\w*)\.([\w\-\$]+)$/, rComboClass = /^(\.[\w\-\$]+)+$/;
        rDivider = /\s*,\s*/, rSpace = /\s+/g, slice = Array.prototype.slice;

        function c(h, f) {
            var o, n, e, i, g, m, j, l, k = [];
            if (d.test(h)) {
                e = RegExp.$2;
                g = RegExp.$1 || "*";
                baidu.forEach(f.getElementsByTagName(g), function (p) {
                    p.id == e && k.push(p)
                })
            } else {
                if (rTag.test(h) || h == "*") {
                    baidu.merge(k, f.getElementsByTagName(h))
                } else {
                    if (rClass.test(h)) {
                        j = [];
                        g = RegExp.$1;
                        m = RegExp.$2;
                        o = " " + m + " ";
                        if (f.getElementsByClassName) {
                            j = f.getElementsByClassName(m)
                        } else {
                            baidu.forEach(f.getElementsByTagName("*"), function (p) {
                                p.className && (" " + p.className + " ").indexOf(o) > -1 && (j.push(p))
                            })
                        }
                        if (g && (g = g.toUpperCase())) {
                            baidu.forEach(j, function (p) {
                                p.tagName.toUpperCase() === g && k.push(p)
                            })
                        } else {
                            baidu.merge(k, j)
                        }
                    } else {
                        if (rComboClass.test(h)) {
                            l = h.substr(1).split(".");
                            baidu.forEach(f.getElementsByTagName("*"), function (p) {
                                if (p.className) {
                                    o = " " + p.className + " ";
                                    n = true;
                                    baidu.forEach(l, function (q) {
                                        o.indexOf(" " + q + " ") == -1 && (n = false)
                                    });
                                    n && k.push(p)
                                }
                            })
                        }
                    }
                }
            }
            return k
        }

        function b(e, g) {
            var f, h = e, j = "__tangram__", i = [];
            if (!g && a.test(h) && (f = document.getElementById(h.substr(1)))) {
                return [f]
            }
            g = g || document;
            if (g.querySelectorAll) {
                if (g.nodeType == 1 && !g.id) {
                    g.id = j;
                    f = g.querySelectorAll("#" + j + " " + h);
                    g.id = ""
                } else {
                    f = g.querySelectorAll(h)
                }
                return f
            } else {
                if (h.indexOf(" ") == -1) {
                    return c(h, g)
                }
                baidu.forEach(c(h.substr(0, h.indexOf(" ")), g), function (k) {
                    baidu.merge(i, b(h.substr(h.indexOf(" ") + 1), k))
                })
            }
            return i
        }

        return function (f, h, g) {
            if (!f || typeof f != "string") {
                return g || []
            }
            var e = [];
            f = f.replace(rSpace, " ");
            g && baidu.merge(e, g) && (g.length = 0);
            baidu.forEach(f.indexOf(",") > 0 ? f.split(rDivider) : [f], function (i) {
                baidu.merge(e, b(i, h))
            });
            return baidu.merge(g || [], baidu.array(e).unique())
        }
    })();
    baidu.createChain("dom", function (a, b) {
        var d, c = new baidu.dom.$DOM(b);
        if (!a) {
            return c
        }
        if (a._type_ == "$DOM") {
            return a
        } else {
            if (a.nodeType || a == a.window) {
                c[0] = a;
                c.length = 1;
                return c
            } else {
                if (a.length && c.toString.call(a) != "[object String]") {
                    return baidu.merge(c, a)
                } else {
                    if (typeof a == "string") {
                        if (a.charAt(0) == "<" && a.charAt(a.length - 1) == ">" && a.length > 2) {
                            if (baidu.dom.createElements) {
                                baidu.merge(c, baidu.dom.createElements(a))
                            }
                        } else {
                            baidu.query(a, b, c)
                        }
                    } else {
                        if (typeof a == "function") {
                            return c.ready ? c.ready(a) : c
                        }
                    }
                }
            }
        }
        return c
    }, function (a) {
        this.length = 0;
        this._type_ = "$DOM";
        this.context = a || document
    }).extend({
        size: function () {
            return this.length
        }, splice: function () {
        }, get: function (a) {
            if (typeof a == "number") {
                return a < 0 ? this[this.length + a] : this[a]
            }
            return Array.prototype.slice.call(this, 0)
        }, toArray: function () {
            return this.get()
        }
    });
    baidu.dom.extend({
        ready: function () {
            var f = false, e = [], b;
            if (document.addEventListener) {
                b = function () {
                    document.removeEventListener("DOMContentLoaded", b, false);
                    c()
                }
            } else {
                if (document.attachEvent) {
                    b = function () {
                        if (document.readyState === "complete") {
                            document.detachEvent("onreadystatechange", b);
                            c()
                        }
                    }
                }
            }

            function c() {
                if (!c.isReady) {
                    c.isReady = true;
                    for (var h = 0, g = e.length; h < g; h++) {
                        e[h]()
                    }
                }
            }

            function a() {
                try {
                    document.documentElement.doScroll("left")
                } catch (g) {
                    setTimeout(a, 1);
                    return
                }
                c()
            }

            function d() {
                if (f) {
                    return
                }
                f = true;
                if (document.readyState === "complete") {
                    c.isReady = true
                } else {
                    if (document.addEventListener) {
                        document.addEventListener("DOMContentLoaded", b, false);
                        window.addEventListener("load", c, false)
                    } else {
                        if (document.attachEvent) {
                            document.attachEvent("onreadystatechange", b);
                            window.attachEvent("onload", c);
                            var g = false;
                            try {
                                g = window.frameElement == null
                            } catch (h) {
                            }
                            if (document.documentElement.doScroll && g) {
                                a()
                            }
                        }
                    }
                }
            }

            d();
            return function (g) {
                if (g) {
                    c.isReady ? g() : e.push(g)
                }
                return this
            }
        }()
    });
    baidu.dom.ready = baidu.dom.fn.ready;
    baidu.support = baidu.support || function () {
        var e = document.createElement("div"), d, b, c;
        e.innerHTML = '<a href="/a" style="top:1px; float: left; opacity: .55">Tangram</a><input type="checkbox">';
        b = e.getElementsByTagName("A")[0];
        c = e.getElementsByTagName("input")[0];
        c.checked = true;
        d = {
            opacity: b.style.opacity === "0.55",
            cssFloat: !!b.style.cssFloat,
            noCloneChecked: c.cloneNode(true).checked,
            noCloneEvent: true
        };
        if (!e.addEventListener && e.attachEvent && e.fireEvent) {
            e.attachEvent("onclick", function () {
                d.noCloneEvent = false
            });
            e.cloneNode(true).fireEvent("onclick")
        }
        baidu(function () {
            var h = document.getElementsByTagName("body")[0], f = document.createElement("div"),
                a = document.createElement("div"), n = "padding: 0; margin: 0; border: ",
                m = "left: 0; top: 0; width: 0px; height: 0px; ", j = m + n + "0; visibility: hidden;",
                o = m + n + "5px solid #000; position: absolute;", q, r, l, g, p;
            f.style.cssText = "position: static;" + j;
            h.insertBefore(f, h.firstChild);
            f.appendChild(a);
            a.style.cssText = "position: absolute;" + j;
            a.innerHTML = '<div style="' + o + 'display: bloack;"><div style="' + n + '0; display: block; overflow: hidden;"></div></div><table style="' + o + '" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
            q = a.firstChild;
            r = q.firstChild;
            p = q.nextSibling;
            d.hasBorderWidth = r.offsetTop >= 5;
            d.hasTableCellBorderWidth = p.rows[0].cells[0].offsetTop >= 5;
            r.style.position = "fixed";
            r.style.top = "20px";
            d.fixedPosition = r.offsetTop === 20 || r.offsetTop === 15;
            d.deleteExpando = true;
            try {
                delete a.test
            } catch (i) {
                d.deleteExpando = false
            }
            l = document.createElement("select");
            g = l.appendChild(document.createElement("option"));
            l.disabled = true;
            d.optDisabled = !g.disabled;
            d.optSelected = g.selected;
            a.setAttribute("className", "t");
            a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
            var k = a.getElementsByTagName("input")[0];
            d.checkOn = (k.value === "on");
            d.htmlSerialize = !!a.getElementsByTagName("link").length;
            d.leadingWhitespace = (a.firstChild.nodeType === 3);
            d.getSetAttribute = a.className !== "t";
            d.pixelMargin = true;
            a.innerHTML = "";
            a.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            if (window.getComputedStyle) {
                d.pixelMargin = (window.getComputedStyle(a, null) || {}).marginTop !== "1%"
            }
            var k = document.createElement("input");
            k.value = "t";
            k.setAttribute("type", "radio");
            d.radioValue = k.value === "t";
            d.hrefNormalized = (b.getAttribute("href") === "/a");
            d.style = /top/.test(b.getAttribute("style"));
            d.enctype = !!document.createElement("form").enctype;
            h.removeChild(f);
            f = a = q = r = p = null
        });
        return d
    }();
    baidu.createChain("event", function () {
        var a = {};
        return function (c, b) {
            switch (baidu.type(c)) {
                case"object":
                    return a.originalEvent === c ? a : (a = new baidu.event.$Event(c));
                case"$Event":
                    return c;
                case"string":
                    var d = new baidu.event.$Event(c);
                    typeof b == "object" && baidu.forEach(d, b);
                    return d
            }
        }
    }(), function (d) {
        var i, b, g;
        var c = this;
        this._type_ = "$Event";
        if (typeof d == "object" && d.type) {
            c.originalEvent = i = d;
            baidu.forEach("altKey bubbles button buttons cancelable clientX clientY ctrlKey commandKey currentTarget fromElement metaKey screenX screenY shiftKey toElement type view which triggerData".split(" "), function (e) {
                c[e] = i[e]
            });
            c.target = c.srcElement = i.srcElement || ((b = i.target) && (b.nodeType == 3 ? b.parentNode : b));
            c.relatedTarget = i.relatedTarget || ((b = i.fromElement) && (b === c.target ? i.toElement : b));
            c.keyCode = c.which = i.keyCode || i.which;
            if (!c.which && i.button !== undefined) {
                c.which = i.button & 1 ? 1 : (i.button & 2 ? 3 : (i.button & 4 ? 2 : 0))
            }
            var h = document.documentElement, a = document.body;
            c.pageX = i.pageX || (i.clientX + (h && h.scrollLeft || a && a.scrollLeft || 0) - (h && h.clientLeft || a && a.clientLeft || 0));
            c.pageY = i.pageY || (i.clientY + (h && h.scrollTop || a && a.scrollTop || 0) - (h && h.clientTop || a && a.clientTop || 0));
            c.data
        }
        typeof d == "string" && (this.type = d);
        this.timeStamp = new Date().getTime()
    }).extend({
        stopPropagation: function () {
            var a = this.originalEvent;
            a && (a.stopPropagation ? a.stopPropagation() : a.cancelBubble = true)
        }, preventDefault: function () {
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = false)
        }
    });
    baidu.dom.extend({
        each: function (c) {
            baidu.check("function", "baidu.dom.each");
            var b, a, d = this.length;
            for (b = 0; b < d; b++) {
                a = c.call(this[b], b, this[b], this);
                if (a === false || a == "break") {
                    break
                }
            }
            return this
        }
    });
    baidu.dom.match = function () {
        var b = /^[\w\#\-\$\.\*]+$/, c = document.createElement("DIV");
        c.id = "__tangram__";
        return function (k, e, i) {
            var f, h = baidu.array();
            switch (baidu.type(e)) {
                case"$DOM":
                    for (var d = k.length - 1; d > -1; d--) {
                        for (var j = e.length - 1; j > -1; j--) {
                            k[d] === e[j] && h.push(k[d])
                        }
                    }
                    break;
                case"function":
                    baidu.forEach(k, function (m, l) {
                        e.call(m, l) && h.push(m)
                    });
                    break;
                case"HTMLElement":
                    baidu.forEach(k, function (l) {
                        l == e && h.push(l)
                    });
                    break;
                case"string":
                    var g = baidu.query(e, i || document);
                    baidu.forEach(k, function (o) {
                        if (f = a(o)) {
                            var m = f.nodeType == 1 ? baidu.query(e, f) : g;
                            for (var l = 0, p = m.length; l < p; l++) {
                                if (m[l] === o) {
                                    h.push(o);
                                    break
                                }
                            }
                        }
                    });
                    h = h.unique();
                    break;
                default:
                    h = baidu.array(k).unique();
                    break
            }
            return h
        };

        function a(f) {
            var d = [], e;
            while (f = f.parentNode) {
                f.nodeType && d.push(f)
            }
            for (var e = d.length - 1; e > -1; e--) {
                if (d[e].nodeType == 1 || d[e].nodeType == 9) {
                    return d[e]
                }
            }
            return null
        }
    }();
    baidu.dom.extend({
        is: function (a) {
            return baidu.dom.match(this, a).length > 0
        }
    });
    baidu.dom.extend({
        triggerHandler: function (c, b) {
            var a = baidu._util_.eventBase;
            baidu.forEach(this, function (d) {
                a.fireHandler(d, c, b)
            });
            return this
        }
    });
    baidu.dom._g = function (a) {
        return baidu.type(a) === "string" ? document.getElementById(a) : a
    };
    baidu.dom.extend({
        contains: function (b) {
            b = baidu.dom(b);
            if (this.size() <= 0 || b.size() <= 0) {
                return false
            }
            var a = this[0];
            b = b[0];
            return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
        }
    });
    baidu.dom.contains = function (a, b) {
        var c = baidu.dom._g;
        a = c(a);
        b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    };
    baidu.dom.extend({
        closest: function (a, c) {
            var b = baidu.array();
            baidu.forEach(this, function (e) {
                var d = [e];
                while (e = e.parentNode) {
                    e.nodeType && d.push(e)
                }
                d = baidu.dom.match(d, a, c);
                d.length && b.push(d[0])
            });
            return baidu.dom(b.unique())
        }
    });
    baidu._util_.eventBase = function () {
        var a = {};
        var e = {};
        var j = window.addEventListener ? function (m, k, l) {
            m.addEventListener(k, l, false)
        } : window.attachEvent ? function (m, k, l) {
            m.attachEvent("on" + k, l)
        } : function () {
        };
        var i = function (n, k, m) {
            var p = baidu.id(n);
            var o = e[p] = e[p] || {};
            if (o[k]) {
                return
            }
            o[k] = 1;
            var l = function (t) {
                var r = Array.prototype.slice.call(arguments, 1);
                r.unshift(t = baidu.event(t));
                if (!t.currentTarget) {
                    t.currentTarget = n
                }
                for (var s = 0, q = m.length; s < q; s += 2) {
                    m[s].apply(this, r)
                }
            };
            j(n, k, l)
        };
        var c = function (p, l, r, n, o) {
            var s = function (v) {
                var u = baidu.dom(v.target);
                if (o && !v.data) {
                    v.data = o
                }
                if (v.triggerData) {
                    [].push.apply(arguments, v.triggerData)
                }
                if (!n) {
                    return v.result = r.apply(p, arguments)
                }
                if (u.is(n) || u.is(n + " *")) {
                    return v.result = r.apply(baidu.dom(v.target).closest(n)[0], arguments)
                }
            };
            var m = baidu.id(p);
            var q = a[m] || (a[m] = {});
            var k = q[l] || (q[l] = []);
            k.push(s, r);
            i(p, l, k);
            return s
        };
        var h = function (q, k, t, n) {
            var l;
            if (!(l = baidu.id(q, "get"))) {
                return
            }
            var s = a[l] || (a[l] = {});
            var r = {"mouseenter": "mouseover", "mouseleave": "mouseout", "focusin": "focus", "focusout": "blur"};
            var m = s[k] || (s[k] = []);
            if (r[k]) {
                s[r[k]] = []
            }
            for (var o = m.length - 1, p; o >= 0; o--) {
                if (p = m[o], p === t) {
                    m.splice(o - 1, 2)
                }
            }
        };
        var d = function (n, m) {
            var l;
            if (!(l = baidu.id(n, "get"))) {
                return
            }
            var o = a[l] || (a[l] = {});
            var k = function (q) {
                var p = o[q] || (o[q] = []);
                for (var r = p.length - 1, s; r >= 0; r -= 2) {
                    s = p[r], h(n, q, s)
                }
            };
            if (m) {
                k(m)
            } else {
                for (var m in o) {
                    k(m)
                }
            }
        };
        var b = function (s, n, m) {
            var o;
            if (!(o = baidu.id(s, "get"))) {
                return
            }
            var u = a[o] || (a[o] = {});
            var p = u[n] || (u[n] = []);
            var k = baidu.event({type: n});
            var t = [k];
            if (m) {
                k.triggerData = m, t.push.apply(t, m)
            }
            for (var r = 0, q = p.length; r < q; r += 2) {
                p[r].apply(this, t)
            }
        };
        var g = function (r) {
            var n;
            if (!(n = baidu.id(r, "get"))) {
                return
            }
            var s = a[n] || (a[n] = {});
            var o = {}, k;
            for (var q in s) {
                k = o[q] = [];
                ce = s[q];
                for (var p = 1, m = ce.length; p < m; p += 2) {
                    k.push(ce[p])
                }
            }
            return o
        };
        var f = function (m) {
            switch (m) {
                case"focusin":
                case"focusout":
                    if (!/firefox/i.test(navigator.userAgent)) {
                        return false
                    }
                    var l = {}, k = m == "focusin" ? "focus" : "blur";
                    l[m] = function (r, p) {
                        if (typeof r == "function") {
                            p = r, r = null
                        }
                        var q = this;
                        if (!p) {
                            return this.triggerHandler(m, r)
                        } else {
                            var o = function () {
                                q.triggerHandler(m)
                            };
                            baidu.forEach(this, function (s) {
                                baidu("textarea,select,input,button,a", s).on(k, o)
                            });
                            return this._on(m, r, p), this
                        }
                    };
                    return baidu.dom.extend(l), true;
                case"mouseenter":
                case"mouseleave":
                    if (/msie/i.test(navigator.userAgent)) {
                        return false
                    }
                    var l = {}, k = m == "mouseenter" ? "mouseover" : "mouseout";
                    var n = baidu.dom.contains;
                    l[m] = function (r, p) {
                        if (arguments.length == 0) {
                            return this.trigger(m)
                        }
                        if (typeof r == "function") {
                            p = r, r = null
                        }
                        var q = this;
                        var o = function (s) {
                            related = s.relatedTarget;
                            if (!related || (related !== this && !n(this, related))) {
                                q.triggerHandler(m)
                            }
                        };
                        baidu.forEach(this, function (s) {
                            this.on(k, o)
                        }, this);
                        return this._on(m, r, p), this
                    };
                    return baidu.dom.extend(l), true
            }
            return false
        };
        return {
            add: function (o, m, l, k, n) {
                return c(o, m, l, k, n)
            }, get: function (k) {
                return g(k)
            }, remove: function (n, m, l, k) {
                var o;
                if ((o = baidu.id(n, "get")) && l && l["_" + o + "_" + m]) {
                    l = l["_" + o + "_" + m], delete l["_" + o + "_" + m]
                }
                if (typeof l == "function") {
                    return h(n, m, l, k)
                } else {
                    return d(n, m, k)
                }
            }, removeAll: function (k) {
                return d(k)
            }, fireHandler: function (m, l, k) {
                return b(m, l, k)
            }, method: function (n) {
                if (arguments.length > 1) {
                    for (var o = 0, k = arguments.length; o < k; o++) {
                        this.method(arguments[o])
                    }
                    return this
                }
                if (!f(n)) {
                    var m = {};
                    m[n] = function (p, l) {
                        if (arguments.length == 0) {
                            return this.trigger(n)
                        } else {
                            if (typeof p == "function") {
                                l = p, p = null
                            }
                            return this._on(n, p, l)
                        }
                    };
                    baidu.dom.extend(m)
                }
            }, _getEventsLength: function (o, p) {
                var k = 0, n;
                if (o) {
                    n = a[baidu.id(o[0] || o, "get")];
                    if (p) {
                        n[p] && (k = n[p].length)
                    } else {
                        for (var m in n) {
                            k += n[m].length
                        }
                    }
                } else {
                    for (var m in a) {
                        n = a[m];
                        for (var l in n) {
                            k += n[l].length
                        }
                    }
                }
                return k / 2
            }
        }
    }();
    baidu._util_.eventBase.method("blur", "change", "click", "dblclick", "error", "focus", "focusin", "focusout", "keydown", "keypress", "keyup", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "resize", "scroll", "select", "submit", "load", "unload", "contextmenu");
    baidu.dom.g = function (a) {
        if (!a) {
            return null
        }
        if ("string" == typeof a || a instanceof String) {
            return document.getElementById(a)
        } else {
            if (a.nodeName && (a.nodeType == 1 || a.nodeType == 9)) {
                return a
            }
        }
        return null
    };
    baidu.dom.extend({
        on: function (d, a, f, e) {
            var c = baidu._util_.eventBase;
            var b = {mouseenter: 1, mouseleave: 1, focusin: 1, focusout: 1};
            if (typeof a == "object" && a) {
                e = f, f = a, a = null
            } else {
                if (typeof f == "function") {
                    e = f, f = null
                } else {
                    if (typeof a == "function") {
                        e = a, a = f = null
                    }
                }
            }
            if (typeof d == "string") {
                d = d.split(/[ ,]+/);
                this.each(function () {
                    baidu.forEach(d, function (g) {
                        if (b[g]) {
                            baidu(this)[g](f, e)
                        } else {
                            c.add(this, g, e, a, f)
                        }
                    }, this)
                })
            } else {
                if (typeof d == "object") {
                    if (e) {
                        e = null
                    }
                    baidu.forEach(d, function (h, g) {
                        this.on(g, a, f, h)
                    }, this)
                }
            }
            return this
        }, _on: function (a, d, c) {
            var b = baidu._util_.eventBase;
            this.each(function () {
                b.add(this, a, c, undefined, d)
            });
            return this
        }
    });
    baidu.event.on = baidu.on = function (a, c, b) {
        a = baidu.dom.g(a);
        baidu.dom(a).on(c.replace(/^\s*on/, ""), b);
        return a
    };
    void function () {
        var u = location ? location.href : document.location.href,
            G = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, H = /^\/\//,
            I = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, t = /#.*$/, r = /\[\]$/, p = /^(?:GET|HEAD)$/,
            A = /([?&])_=[^&]*/, v = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, F = /^[\],:{}\s]*$/, f = /(?:^|:|,)(?:\s*\[)+/g,
            a = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            g = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, e = ["*/"] + ["*"], d = {},
            s = {}, y = {}, j = {}, E = I.exec(u.toLowerCase()) || [];

        function z(N) {
            var L, M;
            if (!N || baidu.type(N) !== "string") {
                return null
            }
            try {
                if (window.DOMParser) {
                    M = new DOMParser();
                    L = M.parseFromString(N, "text/xml")
                } else {
                    L = new ActiveXObject("Microsoft.XMLDOM");
                    L.async = "false";
                    L.loadXML(N)
                }
            } catch (O) {
                L = undefined
            }
            if (!L || !L.documentElement || L.getElementsByTagName("parsererror").length) {
                throw new Error("Invalid XML: " + N)
            }
            return L
        }

        function q(L) {
            if (!L || baidu.type(L) !== "string") {
                return null
            }
            L = baidu.string(L).trim();
            if (window.JSON && window.JSON.parse) {
                return window.JSON.parse(L)
            }
            if (F.test(L.replace(a, "@").replace(g, "]").replace(f, ""))) {
                return (new Function("return " + L))()
            }
            throw new Error("Invalid JSON: " + L)
        }

        function w(L) {
            if (L && /\S/.test(L)) {
                (window.execScript || function (M) {
                    window["eval"].call(window, M)
                })(L)
            }
        }

        function B(L) {
            return function (R, P) {
                if (baidu.type(R) !== "string") {
                    P = R;
                    R = "*"
                }
                var N = R.toLowerCase().split(/\s+/), Q, S;
                if (baidu.type(P) === "function") {
                    for (var M = 0, O; O = N[M]; M++) {
                        Q = /^\+/.test(O);
                        Q && (O = O.substr(1) || "*");
                        S = L[O] = L[O] || [];
                        S[Q ? "unshift" : "push"](P)
                    }
                }
            }
        }

        function l(L, V, R) {
            var Q, S, P, M, N = L.contents, U = L.dataTypes, O = L.responseFields;
            for (S in O) {
                if (S in R) {
                    V[O[S]] = R[S]
                }
            }
            while (U[0] === "*") {
                U.shift();
                if (Q === undefined) {
                    Q = L.mimeType || V.getResponseHeader("content-type")
                }
            }
            if (Q) {
                for (S in N) {
                    if (N[S] && N[S].test(Q)) {
                        U.unshift(S);
                        break
                    }
                }
            }
            if (U[0] in R) {
                P = U[0]
            } else {
                for (S in R) {
                    if (!U[0] || L.converters[S + " " + U[0]]) {
                        P = S;
                        break
                    }
                    if (!M) {
                        M = S
                    }
                }
                P = P || M
            }
            if (P) {
                if (P !== U[0]) {
                    U.unshift(P)
                }
                return R[P]
            }
        }

        function D(L, N) {
            var R = L.dataTypes.slice(), M = R[0], V = {}, U, Q;
            L.dataFilter && (N = L.dataFilter(N, L.dataType));
            if (R[1]) {
                for (var O in L.converters) {
                    V[O.toLowerCase()] = L.converters[O]
                }
            }
            for (var O = 0, W; W = R[++O];) {
                if (W !== "*") {
                    if (M !== "*" && M !== W) {
                        U = V[M + " " + W] || V["* " + W];
                        if (!U) {
                            for (var S in V) {
                                Q = S.split(" ");
                                if (Q[1] === W) {
                                    U = V[M + " " + Q[0]] || V["* " + Q[0]];
                                    if (U) {
                                        if (U === true) {
                                            U = V[S]
                                        } else {
                                            if (V[S] !== true) {
                                                W = Q[0];
                                                R.splice(O--, 0, W)
                                            }
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (U !== true) {
                            if (U && L["throws"]) {
                                N = U(N)
                            } else {
                                try {
                                    N = U(N)
                                } catch (P) {
                                    return {state: "parsererror", error: U ? P : "No conversion from " + M + " to " + W}
                                }
                            }
                        }
                    }
                    M = W
                }
            }
            return {state: "success", data: N}
        }

        function i(M, W, Q, U, S, O) {
            S = S || W.dataTypes[0];
            O = O || {};
            O[S] = true;
            var V, R = M[S], L = R ? R.length : 0, P = (M === d);
            for (var N = 0; N < L && (P || !V); N++) {
                V = R[N](W, Q, U);
                if (typeof V === "string") {
                    if (!P || O[V]) {
                        V = undefined
                    } else {
                        W.dataTypes.unshift(V);
                        V = i(M, W, Q, U, V, O)
                    }
                }
            }
            if ((P || !V) && !O["*"]) {
                V = i(M, W, Q, U, "*", O)
            }
            return V
        }

        baidu.createChain("ajax", function (P, N) {
            if (baidu.object.isPlain(P)) {
                N = P;
                P = undefined
            }
            N = N || {};
            var V = baidu.ajax.setup({}, N), aj = V.context || V, M, U, Z, ai = baidu.Deferred(),
                ad = baidu.Callbacks("once memory"), R = V.statusCode || {}, Q = 0, ae = {}, Y = {}, S = "canceled", ag,
                O, ab, ah = baidu.extend(new baidu.ajax.$Ajax(P, V), {
                    readyState: 0, setRequestHeader: function (al, am) {
                        if (!Q) {
                            var ak = al.toLowerCase();
                            al = ae[ak] = ae[ak] || al;
                            Y[al] = am
                        }
                    }, getAllResponseHeaders: function () {
                        return Q === 2 ? ag : null
                    }, getResponseHeader: function (al) {
                        var ak;
                        if (Q === 2) {
                            if (!O) {
                                O = {};
                                while (ak = v.exec(ag)) {
                                    O[ak[1].toLowerCase()] = ak[2]
                                }
                            }
                            ak = O[al.toLowerCase()]
                        }
                        return ak === undefined ? null : ak
                    }, overrideMimeType: function (ak) {
                        !Q && (V.mimeType = ak);
                        return this
                    }, abort: function (ak) {
                        ak = ak || S;
                        ab && ab.abort(ak);
                        X(0, ak);
                        return this
                    }
                });
            var W;

            function X(ap, al, aq, am) {
                var an = al, ak, au, ar, ao, at;
                if (Q === 2) {
                    return
                }
                Q = 2;
                W && clearTimeout(W);
                ab = undefined;
                ag = am || "";
                ah.readyState = ap > 0 ? 4 : 0;
                aq && (ao = l(V, ah, aq));
                if (ap >= 200 && ap < 300 || ap === 304) {
                    if (V.ifModified) {
                        at = ah.getResponseHeader("Last-Modified");
                        at && (y[U] = at);
                        at = ah.getResponseHeader("Etag");
                        at && (j[U] = at)
                    }
                    if (ap === 304) {
                        an = "notmodified";
                        ak = true
                    } else {
                        ak = D(V, ao);
                        an = ak.state;
                        au = ak.data;
                        ar = ak.error;
                        ak = !ar
                    }
                } else {
                    ar = an;
                    if (!an || ap) {
                        an = "error";
                        ap < 0 && (ap = 0)
                    }
                }
                ah.status = ap;
                ah.statusText = "" + (al || an);
                if (ak) {
                    ai.resolveWith(aj, [au, an, ah])
                } else {
                    ai.rejectWith(aj, [ah, an, ar])
                }
                ah.statusCode(R);
                R = undefined;
                ad.fireWith(aj, [ah, an])
            }

            ai.promise(ah);
            ah.success = ah.done;
            ah.error = ah.fail;
            ah.complete = ad.add;
            ah.statusCode = function (al) {
                if (al) {
                    if (Q < 2) {
                        for (var ak in al) {
                            R[ak] = [R[ak], al[ak]]
                        }
                    } else {
                        ah.always(al[ah.status])
                    }
                }
                return this
            };
            V.url = ((P || V.url) + "").replace(t, "").replace(H, E[1] + "//");
            V.dataTypes = baidu.string(V.dataType || "*").trim().toLowerCase().split(/\s+/);
            if (V.crossDomain == null) {
                Z = I.exec(V.url.toLowerCase());
                V.crossDomain = !!(Z && (Z[1] != E[1] || Z[2] != E[2] || (Z[3] || (Z[1] === "http:" ? 80 : 443)) != (E[3] || (E[1] === "http:" ? 80 : 443))))
            }
            if (V.data && V.processData && baidu.type(V.data) !== "string") {
                V.data = baidu.ajax.param(V.data, V.traditional)
            }
            i(d, V, N, ah);
            if (Q === 2) {
                return ""
            }
            M = V.global;
            V.type = V.type.toUpperCase();
            V.hasContent = !p.test(V.type);
            if (!V.hasContent) {
                if (V.data) {
                    V.url += (~V.url.indexOf("?") ? "&" : "?") + V.data;
                    delete V.data
                }
                U = V.url;
                if (V.cache === false) {
                    var L = new Date().getTime(), af = V.url.replace(A, "$1_=" + L);
                    V.url = af + (af === V.url ? (~V.url.indexOf("?") ? "&" : "?") + "_=" + L : "")
                }
            }
            if (V.data && V.hasContent && V.contentType !== false || N.contentType) {
                ah.setRequestHeader("Content-Type", V.contentType)
            }
            if (V.ifModified) {
                U = U || V.url;
                y[U] && ah.setRequestHeader("If-Modified-Since", y[U]);
                j[U] && ah.setRequestHeader("If-None-Match", j[U])
            }
            ah.setRequestHeader("Accept", V.dataTypes[0] && V.accepts[V.dataTypes[0]] ? V.accepts[V.dataTypes[0]] + (V.dataTypes[0] !== "*" ? ", " + e + "; q=0.01" : "") : V.accepts["*"]);
            for (var aa in V.headers) {
                ah.setRequestHeader(aa, V.headers[aa])
            }
            if (V.beforeSend && (V.beforeSend.call(aj, ah, V) === false || Q === 2)) {
                return ah.abort()
            }
            S = "abort";
            for (var aa in {success: 1, error: 1, complete: 1}) {
                ah[aa](V[aa])
            }
            ab = i(s, V, N, ah);
            if (!ab) {
                X(-1, "No Transport")
            } else {
                ah.readyState = 1;
                if (V.async && V.timeout > 0) {
                    W = setTimeout(function () {
                        ah.abort("timeout")
                    }, V.timeout)
                }
                try {
                    Q = 1;
                    ab.send(Y, X)
                } catch (ac) {
                    if (Q < 2) {
                        X(-1, ac)
                    } else {
                        throw ac
                    }
                }
            }
            return ah
        }, function (M, L) {
            this.url = M;
            this.options = L
        });
        baidu.ajax.settings = {
            url: u,
            isLocal: G.test(E[1]),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: true,
            async: true,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": e
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": window.String, "text html": true, "text json": q, "text xml": z},
            flatOptions: {context: true, url: true}
        };

        function K(N, P) {
            var O = baidu.ajax.settings.flatOptions || {}, L;
            for (var M in P) {
                if (P[M] !== undefined) {
                    (O[M] ? N : (L || (L = {})))[M] = P[M]
                }
            }
            L && baidu.extend(true, N, L)
        }

        baidu.ajax.setup = function (M, L) {
            if (L) {
                K(M, baidu.ajax.settings)
            } else {
                L = M;
                M = baidu.ajax.settings
            }
            K(M, L);
            return M
        };

        function o(N, L, M) {
            M = baidu.type(M) === "function" ? M() : (M || "");
            N.push(encodeURIComponent(L) + "=" + encodeURIComponent(M))
        }

        function b(P, M, O, N) {
            if (baidu.type(O) === "array") {
                baidu.forEach(O, function (R, Q) {
                    if (N || r.test(M)) {
                        o(P, M, R)
                    } else {
                        b(P, M + "[" + (typeof R === "object" ? Q : "") + "]", R, N)
                    }
                })
            } else {
                if (!N && baidu.type(O) === "object") {
                    for (var L in O) {
                        b(P, M + "[" + L + "]", O[L], N)
                    }
                } else {
                    o(P, M, O)
                }
            }
        }

        baidu.ajax.param = function (O, N) {
            var L = [];
            if (baidu.type(O) === "array") {
                baidu.forEach(O, function (P) {
                    o(L, P.name, P.value)
                })
            } else {
                for (var M in O) {
                    b(L, M, O[M], N)
                }
            }
            return L.join("&").replace(/%20/g, "+")
        };
        baidu.ajax.prefilter = B(d);
        baidu.ajax.transport = B(s);
        var h = [], c = /(=)\?(?=&|$)|\?\?/, m = new Date().getTime();
        baidu.ajax.setup({
            jsonp: "callback", jsonpCallback: function () {
                var L = h.pop() || (baidu.id.key + "_" + (m++));
                this[L] = true;
                return L
            }
        });
        baidu.ajax.prefilter("json jsonp", function (L, R, W) {
            var V, M, U, P = L.data, N = L.url, O = L.jsonp !== false, S = O && c.test(N),
                Q = O && !S && baidu.type(P) === "string" && !(L.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(P);
            if (L.dataTypes[0] === "jsonp" || S || Q) {
                V = L.jsonpCallback = baidu.type(L.jsonpCallback) === "function" ? L.jsonpCallback() : L.jsonpCallback;
                M = window[V];
                if (S) {
                    L.url = N.replace(c, "$1" + V)
                } else {
                    if (Q) {
                        L.data = P.replace(c, "$1" + V)
                    } else {
                        if (O) {
                            L.url += (/\?/.test(N) ? "&" : "?") + L.jsonp + "=" + V
                        }
                    }
                }
                L.converters["script json"] = function () {
                    return U[0]
                };
                L.dataTypes[0] = "json";
                window[V] = function () {
                    U = arguments
                };
                W.always(function () {
                    window[V] = M;
                    if (L[V]) {
                        L.jsonpCallback = R.jsonpCallback;
                        h.push(V)
                    }
                    if (U && baidu.type(M) === "function") {
                        M(U[0])
                    }
                    U = M = undefined
                });
                return "script"
            }
        });
        baidu.ajax.setup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /javascript|ecmascript/},
            converters: {
                "text script": function (L) {
                    w(L);
                    return L
                }
            }
        });
        baidu.ajax.prefilter("script", function (L) {
            L.cache === undefined && (L.cache = false);
            if (L.crossDomain) {
                L.type = "GET";
                L.global = false
            }
        });
        baidu.ajax.transport("script", function (N) {
            if (N.crossDomain) {
                var L, M = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
                return {
                    send: function (O, P) {
                        L = document.createElement("script");
                        L.async = "async";
                        N.scriptCharset && (L.charset = N.scriptCharset);
                        L.src = N.url;
                        L.onload = L.onreadystatechange = function (Q, R) {
                            if (R || !L.readyState || /loaded|complete/.test(L.readyState)) {
                                L.onload = L.onreadystatechange = null;
                                M && L.parentNode && M.removeChild(L);
                                L = undefined;
                                !R && P(200, "success")
                            }
                        };
                        M.insertBefore(L, M.firstChild)
                    }, abort: function () {
                        L && L.onload(0, 1)
                    }
                }
            }
        });
        var k, C = 0, n = window.ActiveXObject ? function () {
            for (var L in k) {
                k[L](0, 1)
            }
        } : false;

        function x() {
            try {
                return new window.XMLHttpRequest()
            } catch (L) {
            }
        }

        function J() {
            try {
                return new window.ActiveXObject("Microsoft.XMLHTTP")
            } catch (L) {
            }
        }

        baidu.ajax.settings.xhr = window.ActiveXObject ? function () {
            return !this.isLocal && x() || J()
        } : x;
        void function (L) {
            baidu.extend(baidu.support, {ajax: !!L, cors: !!L && ("withCredentials" in L)})
        }(baidu.ajax.settings.xhr());
        if (baidu.support.ajax) {
            baidu.ajax.transport(function (L) {
                if (!L.crossDomain || baidu.support.cors) {
                    var M;
                    return {
                        send: function (S, N) {
                            var P, R = L.xhr();
                            if (L.username) {
                                R.open(L.type, L.url, L.async, L.username, L.password)
                            } else {
                                R.open(L.type, L.url, L.async)
                            }
                            if (L.xhrFields) {
                                for (var O in L.xhrFields) {
                                    R[O] = L.xhrFields[O]
                                }
                            }
                            if (L.mimeType && R.overrideMimeType) {
                                R.overrideMimeType(L.mimeType)
                            }
                            if (!L.crossDomain && !S["X-Requested-With"]) {
                                S["X-Requested-With"] = "XMLHttpRequest"
                            }
                            try {
                                for (var O in S) {
                                    R.setRequestHeader(O, S[O])
                                }
                            } catch (Q) {
                            }
                            R.send((L.hasContent && L.data) || null);
                            M = function (ac, W) {
                                var X, V, U, aa, Z;
                                try {
                                    if (M && (W || R.readyState === 4)) {
                                        M = undefined;
                                        if (P) {
                                            R.onreadystatechange = function () {
                                            };
                                            n && (delete k[P])
                                        }
                                        if (W) {
                                            R.readyState !== 4 && R.abort()
                                        } else {
                                            X = R.status;
                                            U = R.getAllResponseHeaders();
                                            aa = {};
                                            Z = R.responseXML;
                                            Z && Z.documentElement && (aa.xml = Z);
                                            try {
                                                aa.text = R.responseText
                                            } catch (ab) {
                                            }
                                            try {
                                                V = R.statusText
                                            } catch (ab) {
                                                V = ""
                                            }
                                            if (!X && L.isLocal && !L.crossDomain) {
                                                X = aa.text ? 200 : 404
                                            } else {
                                                if (X === 1223) {
                                                    X = 204
                                                }
                                            }
                                        }
                                    }
                                } catch (Y) {
                                    !W && N(-1, Y)
                                }
                                aa && N(X, V, aa, U)
                            };
                            if (!L.async) {
                                M()
                            } else {
                                if (R.readyState === 4) {
                                    setTimeout(M, 0)
                                } else {
                                    P = ++C;
                                    if (n) {
                                        if (!k) {
                                            k = {};
                                            baidu.dom(window).on("unload", n)
                                        }
                                        k[P] = M
                                    }
                                    R.onreadystatechange = M
                                }
                            }
                        }, abort: function () {
                            M && M(0, 1)
                        }
                    }
                }
            })
        }
    }();
    baidu.createChain("fn", function (a) {
        return new baidu.fn.$Fn(~"function|string".indexOf(baidu.type(a)) ? a : function () {
        })
    }, function (a) {
        this.fn = a
    });
    baidu.fn.blank = function () {
    };
    baidu.ajax.request = function (f, j) {
        var d = j || {}, q = d.data || "", g = !(d.async === false), e = d.username || "", a = d.password || "",
            c = (d.method || "GET").toUpperCase(), b = d.headers || {}, i = d.timeout || 0, k = {}, n, r, h;

        function m() {
            if (h.readyState == 4) {
                try {
                    var t = h.status
                } catch (s) {
                    p("failure");
                    return
                }
                p(t);
                if ((t >= 200 && t < 300) || t == 304 || t == 1223) {
                    p("success")
                } else {
                    p("failure")
                }
                window.setTimeout(function () {
                    h.onreadystatechange = baidu.fn.blank;
                    if (g) {
                        h = null
                    }
                }, 0)
            }
        }

        function l() {
            if (window.ActiveXObject) {
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                } catch (s) {
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (s) {
                    }
                }
            }
            if (window.XMLHttpRequest) {
                return new XMLHttpRequest()
            }
        }

        function p(u) {
            u = "on" + u;
            var t = k[u], v = baidu.ajax[u];
            if (t) {
                if (n) {
                    clearTimeout(n)
                }
                if (u != "onsuccess") {
                    t(h)
                } else {
                    try {
                        h.responseText
                    } catch (s) {
                        return t(h)
                    }
                    t(h, h.responseText)
                }
            } else {
                if (v) {
                    if (u == "onsuccess") {
                        return
                    }
                    v(h)
                }
            }
        }

        for (r in d) {
            k[r] = d[r]
        }
        b["X-Requested-With"] = "XMLHttpRequest";
        try {
            h = l();
            if (c == "GET") {
                if (q) {
                    f += (f.indexOf("?") >= 0 ? "&" : "?") + q;
                    q = null
                }
                if (d["noCache"]) {
                    f += (f.indexOf("?") >= 0 ? "&" : "?") + "b" + (+new Date) + "=1"
                }
            }
            if (e) {
                h.open(c, f, g, e, a)
            } else {
                h.open(c, f, g)
            }
            if (g) {
                h.onreadystatechange = m
            }
            if (c == "POST") {
                h.setRequestHeader("Content-Type", (b["Content-Type"] || "application/x-www-form-urlencoded"))
            }
            for (r in b) {
                if (b.hasOwnProperty(r)) {
                    h.setRequestHeader(r, b[r])
                }
            }
            p("beforerequest");
            if (i) {
                n = setTimeout(function () {
                    h.onreadystatechange = baidu.fn.blank;
                    h.abort();
                    p("timeout")
                }, i)
            }
            h.send(q);
            if (!g) {
                m()
            }
        } catch (o) {
            p("failure")
        }
        return h
    };
    baidu.url = baidu.url || {};
    baidu.url.escapeSymbol = function (a) {
        return String(a).replace(/[#%&+=\/\\\ \　\f\r\n\t]/g, function (b) {
            return "%" + (256 + b.charCodeAt()).toString(16).substring(1).toUpperCase()
        })
    };
    baidu.ajax.form = function (a, c) {
        c = c || {};
        var f = a.elements, n = f.length, b = a.getAttribute("method"), e = a.getAttribute("action"),
            t = c.replacer || function (u, i) {
                return u
            }, q = {}, s = [], l, p, r, m, d, g, h, k, j;

        function o(i, u) {
            s.push(i + "=" + u)
        }

        for (l in c) {
            if (c.hasOwnProperty(l)) {
                q[l] = c[l]
            }
        }
        for (l = 0; l < n; l++) {
            p = f[l];
            m = p.name;
            if (!p.disabled && m) {
                r = p.type;
                d = baidu.url.escapeSymbol(p.value);
                switch (r) {
                    case"radio":
                    case"checkbox":
                        if (!p.checked) {
                            break
                        }
                    case"textarea":
                    case"text":
                    case"password":
                    case"hidden":
                    case"select-one":
                        o(m, t(d, m));
                        break;
                    case"select-multiple":
                        g = p.options;
                        k = g.length;
                        for (h = 0; h < k; h++) {
                            j = g[h];
                            if (j.selected) {
                                o(m, t(j.value, m))
                            }
                        }
                        break
                }
            }
        }
        q.data = s.join("&");
        q.method = a.getAttribute("method") || "GET";
        return baidu.ajax.request(e, q)
    };
    baidu.ajax.get = function (b, a) {
        return baidu.ajax.request(b, {"onsuccess": a})
    };
    baidu.ajax.post = function (b, c, a) {
        return baidu.ajax.request(b, {"onsuccess": a, "method": "POST", "data": c})
    };
    baidu.array.extend({
        contains: function (a) {
            return this.indexOf(a) > -1
        }
    });
    baidu.each = function (b, f, e) {
        var d, g, c, a;
        if (typeof f == "function" && b) {
            if (typeof b.length == "number") {
                for (d = 0, g = b.length; d < g; d++) {
                    c = b[d] || (b.charAt && b.charAt(d));
                    a = f.call(e || c, d, c, b);
                    if (a === false || a == "break") {
                        break
                    }
                }
            } else {
                if (typeof b == "number") {
                    for (d = 0; d < b; d++) {
                        a = f.call(e || d, d, d, d);
                        if (a === false || a == "break") {
                            break
                        }
                    }
                } else {
                    if (typeof b == "object") {
                        for (d in b) {
                            if (b.hasOwnProperty(d)) {
                                a = f.call(e || b[d], d, b[d], b);
                                if (a === false || a == "break") {
                                    break
                                }
                            }
                        }
                    }
                }
            }
        }
        return b
    };
    baidu.array.extend({
        empty: function () {
            this.length = 0;
            return this
        }
    });
    Array.prototype.every = function (c, b) {
        baidu.check("function(,.+)?", "baidu.array.every");
        var a, d;
        for (a = 0, d = this.length; a < d; a++) {
            if (!c.call(b || this, this[a], a, this)) {
                return false
            }
        }
        return true
    };
    baidu.array.every = function (c, b, a) {
        return baidu.isArray(c) ? c.every(b, a) : c
    };
    Array.prototype.filter = function (func, thisArg) {
        try {
            if (!((typeof func === "Function" || typeof func === "function") && this)) {
                throw new TypeError()
            }
            var len = this.length >>> 0, res = new Array(len), t = this, c = 0, i = -1;
            if (thisArg === undefined) {
                while (++i !== len) {
                    if (i in this) {
                        if (func(t[i], i, t)) {
                            res[c++] = t[i]
                        }
                    }
                }
            } else {
                while (++i !== len) {
                    if (i in this) {
                        if (func.call(thisArg, t[i], i, t)) {
                            res[c++] = t[i]
                        }
                    }
                }
            }
            res.length = c;
            return res
        } catch (e) {
        }
    };
    baidu.array.filter = function (c, b, a) {
        return baidu.isArray(c) ? c.filter(b, a) : []
    };
    baidu.array.extend({
        find: function (b) {
            var a, c, d = this.length;
            if (baidu.type(b) == "function") {
                for (a = 0; a < d; a++) {
                    c = this[a];
                    if (b.call(this, c, a, this) === true) {
                        return c
                    }
                }
            }
            return null
        }
    });
    baidu.array.extend({
        hash: function (b) {
            var a = {}, d = b && b.length, c, e;
            for (c = 0, e = this.length; c < e; c++) {
                a[this[c]] = (d && d > c) ? b[c] : true
            }
            return a
        }
    });
    baidu.array.extend({
        lastIndexOf: function (b, c) {
            baidu.check(".+(,number)?", "baidu.array.lastIndexOf");
            var a = this.length;
            (!(c = c | 0) || c >= a) && (c = a - 1);
            c < 0 && (c += a);
            for (; c >= 0; c--) {
                if (c in this && this[c] === b) {
                    return c
                }
            }
            return -1
        }
    });
    Array.prototype.map = function (callback) {
        var T, A, k;
        if (this == null) {
            throw new TypeError("this is null or not defined")
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function")
        }
        if (arguments.length > 1) {
            T = arguments[1]
        }
        A = new Array(len);
        k = 0;
        while (k < len) {
            var kValue, mappedValue;
            if (k in O) {
                kValue = O[k];
                mappedValue = callback.call(T, kValue, k, O);
                A[k] = mappedValue
            }
            k++
        }
        return A
    };
    ;baidu.array.map = function (c, b, a) {
        return baidu.isArray(c) ? c.map(b, a) : c
    };
    Array.prototype.reduce = function (b, c) {
        baidu.check("function(,.+)?", "baidu.array.reduce");
        var a = 0, e = this.length, d = false;
        if (typeof c == "undefined") {
            c = this[a++];
            if (typeof c == "undefined") {
                return
            }
        }
        for (; a < e; a++) {
            c = b(c, this[a], a, this)
        }
        return c
    };
    baidu.array.reduce = function (c, a, b) {
        return baidu.isArray(c) ? c.reduce(a, b) : c
    };
    baidu.array.extend({
        remove: function (a) {
            var b = this.length;
            while (b--) {
                if (this[b] === a) {
                    this.splice(b, 1)
                }
            }
            return this
        }
    });
    baidu.array.extend({
        removeAt: function (a) {
            baidu.check("number", "baidu.array.removeAt");
            return this.splice(a, 1)[0]
        }
    });
    Array.prototype.some = function (c, b) {
        baidu.check("function(,.+)?", "baidu.array.some");
        var a, d;
        for (a = 0, d = this.length; a < d; a++) {
            if (c.call(b || this, this[a], a, this)) {
                return true
            }
        }
        return false
    };
    baidu.array.some = function (c, b, a) {
        return c.some(b, a)
    };
    baidu.createChain("async", function (a) {
        return typeof a === "string" ? new baidu.async.$Async(a) : new baidu.async.$Async()
    }, function (a) {
        this.url = a
    });
    baidu.object.extend = baidu.extend;
    baidu.lang.isFunction = baidu.isFunction;
    baidu.async._isDeferred = function (b) {
        var a = baidu.lang.isFunction;
        return b && a(b.success) && a(b.then) && a(b.fail) && a(b.cancel)
    };
    baidu.async.extend({
        Deferred: function () {
            baidu.async.Deferred.apply(this, arguments);
            return this
        }
    });
    baidu.async.Deferred = function () {
        var b = this;
        baidu.extend(b, {
            _fired: 0,
            _firing: 0,
            _cancelled: 0,
            _resolveChain: [],
            _rejectChain: [],
            _result: [],
            _isError: 0
        });

        function a() {
            if (b._cancelled || b._firing) {
                return
            }
            if (b._nextDeferred) {
                b._nextDeferred.then(b._resolveChain[0], b._rejectChain[0]);
                return
            }
            b._firing = 1;
            var f = b._isError ? b._rejectChain : b._resolveChain, c = b._result[b._isError ? 1 : 0];
            while (f[0] && (!b._cancelled)) {
                try {
                    var d = f.shift().call(b, c);
                    if (baidu.async._isDeferred(d)) {
                        b._nextDeferred = d;
                        [].push.apply(d._resolveChain, b._resolveChain);
                        [].push.apply(d._rejectChain, b._rejectChain);
                        f = b._resolveChain = [];
                        b._rejectChain = []
                    }
                } catch (e) {
                    throw e
                } finally {
                    b._fired = 1;
                    b._firing = 0
                }
            }
        }

        b.resolve = b.fireSuccess = function (c) {
            b._result[0] = c;
            a();
            return b
        };
        b.reject = b.fireFail = function (c) {
            b._result[1] = c;
            b._isError = 1;
            a();
            return b
        };
        b.then = function (c, d) {
            b._resolveChain.push(c);
            b._rejectChain.push(d);
            if (b._fired) {
                a()
            }
            return b
        };
        b.success = function (c) {
            return b.then(c, baidu.fn.blank)
        };
        b.fail = function (c) {
            return b.then(baidu.fn.blank, c)
        };
        b.cancel = function () {
            b._cancelled = 1
        }
    };
    baidu.async.extend({
        get: function () {
            var b = this.url;
            var a = new baidu.async.Deferred();
            baidu.ajax.request(b, {
                onsuccess: function (d, c) {
                    a.resolve({xhr: d, responseText: c})
                }, onfailure: function (c) {
                    a.reject({xhr: c})
                }
            });
            return a
        }
    });
    baidu.async.extend({
        post: function (c) {
            var b = this.url;
            var a = new baidu.async.Deferred();
            baidu.ajax.request(b, {
                method: "POST", data: c, onsuccess: function (e, d) {
                    a.resolve({xhr: e, responseText: d})
                }, onfailure: function (d) {
                    a.reject({xhr: d})
                }
            });
            return a
        }
    });
    baidu.async.when = function (c, b, d) {
        if (baidu.async._isDeferred(c)) {
            c.then(b, d);
            return c
        }
        var a = new baidu.async.Deferred();
        a.then(b, d).resolve(c);
        return a
    };
    baidu.base = baidu.base || {};
    baidu.cookie = baidu.cookie || {};
    baidu.cookie._isValidKey = function (a) {
        return (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24')).test(a)
    };
    baidu.cookie.getRaw = function (b) {
        if (baidu.cookie._isValidKey(b)) {
            var c = new RegExp("(^| )" + b + "=([^;]*)(;|\x24)"), a = c.exec(document.cookie);
            if (a) {
                return a[2] || null
            }
        }
        return null
    };
    baidu.cookie.get = function (a) {
        var b = baidu.cookie.getRaw(a);
        if ("string" == typeof b) {
            b = decodeURIComponent(b);
            return b
        }
        return null
    };
    baidu.cookie.setRaw = function (c, d, b) {
        if (!baidu.cookie._isValidKey(c)) {
            return
        }
        b = b || {};
        var a = b.expires;
        if ("number" == typeof b.expires) {
            a = new Date();
            a.setTime(a.getTime() + b.expires)
        }
        document.cookie = c + "=" + d + (b.path ? "; path=" + b.path : "") + (a ? "; expires=" + a.toGMTString() : "") + (b.domain ? "; domain=" + b.domain : "") + (b.secure ? "; secure" : "")
    };
    baidu.cookie.remove = function (b, a) {
        a = a || {};
        a.expires = new Date(0);
        baidu.cookie.setRaw(b, "", a)
    };
    baidu.cookie.set = function (b, c, a) {
        baidu.cookie.setRaw(b, encodeURIComponent(c), a)
    };
    baidu.object.isEmpty = function (c) {
        var a = true;
        if ("[object Array]" === Object.prototype.toString.call(c)) {
            a = !c.length
        } else {
            c = new Object(c);
            for (var b in c) {
                return false
            }
        }
        return a
    };
    baidu._util_.cleanData = function (d) {
        var a;
        for (var b = 0, c; c = d[b]; b++) {
            a = baidu.id(c, "get");
            if (!a) {
                continue
            }
            baidu._util_.eventBase.removeAll(c);
            baidu.id(c, "remove")
        }
    };
    baidu.json = baidu.json || {};
    baidu.json.parse = function (a) {
        return (new Function("return (" + a + ")"))()
    };
    (function () {
        var f = /^(?:\{.*\}|\[.*\])$/, a = /([A-Z])/g, c = /^-ms-/, e = /-([\da-z])/gi, b = function (h, i) {
            return (i + "").toUpperCase()
        };
        baidu.extend(baidu._util_, {
            camelCase: function (h) {
                return h.replace(c, "ms-").replace(e, b)
            }
        });
        baidu.extend(baidu._util_, {
            cache: {},
            deletedIds: [],
            uuid: 0,
            expando: "baidu" + ("2.0.0" + Math.random()).replace(/\D/g, ""),
            noData: {"embed": true, "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", "applet": true},
            hasData: function (h) {
                h = h.nodeType ? baidu._util_.cache[h[baidu._util_.expando]] : h[baidu._util_.expando];
                return !!h && !d(h)
            },
            data: function (k, i, m, l) {
                if (!baidu._util_.acceptData(k)) {
                    return
                }
                var n, p, q = baidu._util_.expando, o = typeof i === "string", r = k.nodeType,
                    h = r ? baidu._util_.cache : k, j = r ? k[q] : k[q] && q;
                if ((!j || !h[j] || (!l && !h[j].data)) && o && m === undefined) {
                    return
                }
                if (!j) {
                    if (r) {
                        k[q] = j = baidu._util_.deletedIds.pop() || ++baidu._util_.uuid
                    } else {
                        j = q
                    }
                }
                if (!h[j]) {
                    h[j] = {};
                    if (!r) {
                        h[j].toJSON = function () {
                        }
                    }
                }
                if (typeof i === "object" || typeof i === "function") {
                    if (l) {
                        h[j] = baidu.extend(h[j], i)
                    } else {
                        h[j].data = baidu.extend(h[j].data, i)
                    }
                }
                n = h[j];
                if (!l) {
                    if (!n.data) {
                        n.data = {}
                    }
                    n = n.data
                }
                if (m !== undefined) {
                    n[baidu._util_.camelCase(i)] = m
                }
                if (o) {
                    p = n[i];
                    if (p == null) {
                        p = n[baidu._util_.camelCase(i)]
                    }
                } else {
                    p = n
                }
                return p
            },
            removeData: function (m, j, n) {
                if (!baidu._util_.acceptData(m)) {
                    return
                }
                var q, p, o, r = m.nodeType, h = r ? baidu._util_.cache : m,
                    k = r ? m[baidu._util_.expando] : baidu._util_.expando;
                if (!h[k]) {
                    return
                }
                if (j) {
                    q = n ? h[k] : h[k].data;
                    if (q) {
                        if (!baidu.isArray(j)) {
                            if (j in q) {
                                j = [j]
                            } else {
                                j = baidu._util_.camelCase(j);
                                if (j in q) {
                                    j = [j]
                                } else {
                                    j = j.split(" ")
                                }
                            }
                        }
                        for (p = 0, o = j.length; p < o; p++) {
                            delete q[j[p]]
                        }
                        if (!(n ? d : baidu.object.isEmpty)(q)) {
                            return
                        }
                    }
                }
                if (!n) {
                    delete h[k].data;
                    if (!d(h[k])) {
                        return
                    }
                }
                if (r) {
                    baidu._util_.cleanData([m], true)
                } else {
                    if (baidu.support.deleteExpando || h != h.window) {
                        delete h[k]
                    } else {
                        h[k] = null
                    }
                }
            },
            _data: function (i, h, j) {
                return baidu._util_.data(i, h, j, true)
            },
            acceptData: function (i) {
                var h = i.nodeName && baidu._util_.noData[i.nodeName.toLowerCase()];
                return !h || h !== true && i.getAttribute("classid") === h
            }
        });

        function g(j, i, k) {
            if (k === undefined && j.nodeType === 1) {
                var h = "data-" + i.replace(a, "-$1").toLowerCase();
                k = j.getAttribute(h);
                if (typeof k === "string") {
                    try {
                        k = k === "true" ? true : k === "false" ? false : k === "null" ? null : baidu.isNumber(k) ? +k : f.test(k) ? baidu.json.parse(k) : k
                    } catch (l) {
                    }
                    baidu._util_.data(j, i, k)
                } else {
                    k = undefined
                }
            }
            return k
        }

        function d(i) {
            var h;
            for (h in i) {
                if (h === "data" && baidu.object.isEmpty(i[h])) {
                    continue
                }
                if (h !== "toJSON") {
                    return false
                }
            }
            return true
        }
    })();
    baidu.date = baidu.date || {};
    baidu.createChain("number", function (b) {
        var a = parseFloat(b), c = isNaN(a) ? a : b;
        clazz = typeof c === "number" ? Number : String, pro = clazz.prototype;
        c = new clazz(c);
        baidu.forEach(baidu.number.$Number.prototype, function (e, d) {
            pro[d] || (c[d] = e)
        });
        return c
    });
    baidu.number.extend({
        pad: function (c) {
            var d = this;
            var e = "", b = (d < 0), a = String(Math.abs(d));
            if (a.length < c) {
                e = (new Array(c - a.length + 1)).join("0")
            }
            return (b ? "-" : "") + e + a
        }
    });
    baidu.date.format = function (a, f) {
        if ("string" != typeof f) {
            return a.toString()
        }

        function d(l, k) {
            f = f.replace(l, k)
        }

        var b = baidu.number.pad, g = a.getFullYear(), e = a.getMonth() + 1, j = a.getDate(), h = a.getHours(),
            c = a.getMinutes(), i = a.getSeconds();
        d(/yyyy/g, b(g, 4));
        d(/yy/g, b(parseInt(g.toString().slice(2), 10), 2));
        d(/MM/g, b(e, 2));
        d(/M/g, e);
        d(/dd/g, b(j, 2));
        d(/d/g, j);
        d(/HH/g, b(h, 2));
        d(/H/g, h);
        d(/hh/g, b(h % 12, 2));
        d(/h/g, h % 12);
        d(/mm/g, b(c, 2));
        d(/m/g, c);
        d(/ss/g, b(i, 2));
        d(/s/g, i);
        return f
    };
    baidu.date.parse = function (c) {
        var a = new RegExp("^\\d+(\\-|\\/)\\d+(\\-|\\/)\\d+\x24");
        if ("string" == typeof c) {
            if (a.test(c) || isNaN(Date.parse(c))) {
                var f = c.split(/ |T/), b = f.length > 1 ? f[1].split(/[^\d]/) : [0, 0, 0], e = f[0].split(/[^\d]/);
                return new Date(e[0] - 0, e[1] - 1, e[2] - 0, b[0] - 0, b[1] - 0, b[2] - 0)
            } else {
                return new Date(c)
            }
        }
        return new Date()
    };
    baidu.dom.createElements = function () {
        var c = /<(\w+)/i, b = /<|&#?\w+;/, d = {
            area: [1, "<map>", "</map>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            option: [1, "<select multiple='multiple'>", "</select>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            _default: [0, "", ""]
        };
        d.optgroup = d.option;
        d.tbody = d.tfoot = d.colgroup = d.caption = d.thead;
        d.th = d.td;

        function a(h, k) {
            var j = h.getElementsByTagName("SCRIPT"), f, e, g;
            for (f = j.length - 1; f >= 0; f--) {
                g = j[f];
                e = k.createElement("SCRIPT");
                g.id && (e.id = g.id);
                g.src && (e.src = g.src);
                g.type && (e.type = g.type);
                e[g.text ? "text" : "textContent"] = g.text || g.textContent;
                g.parentNode.replaceChild(e, g)
            }
        }

        return function (i, l) {
            baidu.isNumber(i) && (i = i.toString());
            l = l || document;
            var f, h, j, m = i, g = m.length, e = l.createElement("div"), k = l.createDocumentFragment(), o = [];
            if (baidu.isString(m)) {
                if (!b.test(m)) {
                    o.push(l.createTextNode(m))
                } else {
                    f = d[m.match(c)[1].toLowerCase()] || d._default;
                    e.innerHTML = "<i>mz</i>" + f[1] + m + f[2];
                    e.removeChild(e.firstChild);
                    a(e, l);
                    h = f[0];
                    j = e;
                    while (h--) {
                        j = j.firstChild
                    }
                    baidu.merge(o, j.childNodes);
                    baidu.forEach(o, function (n) {
                        k.appendChild(n)
                    });
                    e = j = null
                }
            }
            e = null;
            return o
        }
    }();
    baidu.dom.extend({
        add: function (c, d) {
            var b = baidu.array(this.get());
            switch (baidu.type(c)) {
                case"HTMLElement":
                    b.push(c);
                    break;
                case"$DOM":
                case"array":
                    baidu.merge(b, c);
                    break;
                case"string":
                    baidu.merge(b, baidu.dom(c, d));
                    break;
                default:
                    if (typeof c == "object" && c.length) {
                        baidu.merge(b, c)
                    }
            }
            return baidu.dom(b.unique())
        }
    });
    baidu.dom.extend({
        addClass: function (b) {
            if (arguments.length <= 0) {
                return this
            }
            switch (typeof b) {
                case"string":
                    b = b.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " ");
                    var a = b.split(" ");
                    baidu.forEach(this, function (e, c) {
                        var f = "";
                        if (e.className) {
                            f = e.className
                        }
                        for (var d = 0; d < a.length; d++) {
                            if ((" " + f + " ").indexOf(" " + a[d] + " ") == -1) {
                                f += (" " + a[d])
                            }
                        }
                        e.className = f.replace(/^\s+/g, "")
                    });
                    break;
                case"function":
                    baidu.forEach(this, function (d, c) {
                        baidu.dom(d).addClass(b.call(d, c, d.className))
                    });
                    break
            }
            return this
        }
    });
    baidu.dom.extend({
        getDocument: function () {
            if (this.size() <= 0) {
                return undefined
            }
            var a = this[0];
            return a.nodeType == 9 ? a : a.ownerDocument || a.document
        }
    });
    baidu.dom.extend({
        empty: function () {
            for (var a = 0, b; b = this[a]; a++) {
                b.nodeType === 1 && baidu._util_.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) {
                    b.removeChild(b.firstChild)
                }
            }
            return this
        }
    });
    baidu.dom.extend({
        append: function () {
            baidu.check("^(?:string|function|HTMLElement|\\$DOM)(?:,(?:string|array|HTMLElement|\\$DOM))*$", "baidu.dom.append");
            baidu._util_.smartInsert(this, arguments, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            });
            return this
        }
    });
    baidu.dom.extend({
        html: function (j) {
            var d = baidu.dom, k = baidu._util_, g = this, h = false, m;
            if (this.size() <= 0) {
                switch (typeof j) {
                    case"undefined":
                        return undefined;
                        break;
                    default:
                        return g;
                        break
                }
            }
            var c = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                i = /<(?:script|style|link)/i, b = new RegExp("<(?:" + c + ")[\\s/>]", "i"), f = /^\s+/,
                a = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, e = /<([\w:]+)/, l = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    area: [1, "<map>", "</map>"],
                    _default: [0, "", ""]
                };
            l.optgroup = l.option;
            l.tbody = l.tfoot = l.colgroup = l.caption = l.thead;
            l.th = l.td;
            if (!baidu.support.htmlSerialize) {
                l._default = [1, "X<div>", "</div>"]
            }
            baidu.forEach(g, function (o, n) {
                if (m) {
                    return
                }
                var q = d(o);
                switch (typeof j) {
                    case"undefined":
                        m = (o.nodeType === 1 ? o.innerHTML : undefined);
                        return m;
                        break;
                    case"number":
                        j = String(j);
                    case"string":
                        h = true;
                        if (!i.test(j) && (baidu.support.htmlSerialize || !b.test(j)) && (baidu.support.leadingWhitespace || !f.test(j)) && !l[(e.exec(j) || ["", ""])[1].toLowerCase()]) {
                            j = j.replace(a, "<$1></$2>");
                            try {
                                if (o.nodeType === 1) {
                                    q.empty();
                                    o.innerHTML = j
                                }
                                o = 0
                            } catch (p) {
                            }
                        }
                        if (o) {
                            g.empty().append(j)
                        }
                        break;
                    case"function":
                        h = true;
                        q.html(j.call(o, n, q.html()));
                        break
                }
            });
            return h ? g : m
        }
    });
    baidu._util_.smartInsert = function (a, e, k) {
        if (e.length <= 0 || a.size() <= 0) {
            return
        }
        if (baidu.type(e[0]) === "function") {
            var g = e[0], j;
            return baidu.forEach(a, function (m, i) {
                j = baidu.dom(m);
                e[0] = g.call(m, i, j.html());
                baidu._util_.smartInsert(j, e, k)
            })
        }
        var h = a.getDocument() || document, d = h.createDocumentFragment(), c = a.length - 1, f;
        for (var b = 0, l; l = e[b]; b++) {
            if (l.nodeType) {
                d.appendChild(l)
            } else {
                baidu.forEach(~"string|number".indexOf(baidu.type(l)) ? baidu.dom.createElements(l, h) : l, function (i) {
                    d.appendChild(i)
                })
            }
        }
        if (!(f = d.firstChild)) {
            return
        }
        baidu.forEach(a, function (m, i) {
            k.call(m.nodeName.toLowerCase() === "table" && f.nodeName.toLowerCase() === "tr" ? m.tBodies[0] || m.appendChild(m.ownerDocument.createElement("tbody")) : m, i < c ? d.cloneNode(true) : d)
        })
    };
    baidu.dom.extend({
        after: function () {
            baidu.check("^(?:string|function|HTMLElement|\\$DOM)(?:,(?:string|array|HTMLElement|\\$DOM))*$", "baidu.dom.after");
            var a = this[0] && this[0].parentNode, b = !a && [];
            baidu._util_.smartInsert(this, arguments, function (c) {
                a ? a.insertBefore(c, this.nextSibling) : baidu.merge(b, c.childNodes)
            });
            b && baidu.merge(this, b);
            return this
        }
    });
    baidu.dom.extend({
        map: function (a) {
            baidu.check("function", "baidu.dom.map");
            var b = this, c = baidu.dom();
            baidu.forEach(this, function (e, d) {
                c[c.length++] = a.call(e, d, e, e)
            });
            return c
        }
    });
    baidu._util_.isXML = function (b) {
        var a = (b ? b.ownerDocument || b : 0).documentElement;
        return a ? a.nodeName !== "HTML" : false
    };
    baidu.dom.extend({
        clone: function () {
            var d = baidu._util_.eventBase;

            function b(f) {
                return f.getElementsByTagName ? f.getElementsByTagName("*") : (f.querySelectorAll ? f.querySelectorAll("*") : [])
            }

            function c(g, f) {
                f.clearAttributes && f.clearAttributes();
                f.mergeAttributes && f.mergeAttributes(g);
                switch (f.nodeName.toLowerCase()) {
                    case"object":
                        f.outerHTML = g.outerHTML;
                        break;
                    case"textarea":
                    case"input":
                        if (~"checked|radio".indexOf(g.type)) {
                            g.checked && (f.defaultChecked = f.checked = g.checked);
                            f.value !== g.value && (f.value = g.value)
                        }
                        f.defaultValue = g.defaultValue;
                        break;
                    case"options":
                        f.selected = g.defaultSelected;
                        break;
                    case"script":
                        f.text !== g.text && (f.text = g.text);
                        break
                }
                f[baidu.key] && f.removeAttribute(baidu.key)
            }

            function a(m, h) {
                if (h.nodeType !== 1 || !baidu.id(m, "get")) {
                    return
                }
                var f = d.get(m);
                for (var k in f) {
                    for (var g = 0, l; l = f[k][g]; g++) {
                        d.add(h, k, l)
                    }
                }
            }

            function e(m, n, k) {
                var j = m.cloneNode(true), g, h, f;
                if ((!baidu.support.noCloneEvent || !baidu.support.noCloneChecked) && (m.nodeType === 1 || m.nodeType === 11) && !baidu._util_.isXML(m)) {
                    c(m, j);
                    g = b(m);
                    h = b(j);
                    f = g.length;
                    for (var l = 0; l < f; l++) {
                        h[l] && c(g[l], h[l])
                    }
                }
                if (n) {
                    a(m, j);
                    if (k) {
                        g = b(m);
                        h = b(j);
                        f = g.length;
                        for (var l = 0; l < f; l++) {
                            a(g[l], h[l])
                        }
                    }
                }
                return j
            }

            return function (g, f) {
                g = !!g;
                f = !!f;
                return this.map(function () {
                    return e(this, g, f)
                })
            }
        }()
    });
    baidu._util_.smartInsertTo = function (a, d, f, h) {
        var g = baidu.dom(d), c = g[0], e;
        if (h && c && (!c.parentNode || c.parentNode.nodeType === 11)) {
            h = h === "before";
            e = baidu.merge(h ? a : g, !h ? a : g);
            if (a !== e) {
                a.length = 0;
                baidu.merge(a, e)
            }
        } else {
            for (var b = 0, j; j = g[b]; b++) {
                baidu._util_.smartInsert(baidu.dom(j), b > 0 ? a.clone(true) : a, f)
            }
        }
    };
    baidu.dom.extend({
        appendTo: function (a) {
            baidu.check("^(?:string|HTMLElement|\\$DOM)$", "baidu.dom.appendTo");
            baidu._util_.smartInsertTo(this, a, function (b) {
                this.appendChild(b)
            });
            return this
        }
    });
    baidu.extend(baidu._util_, {
        rfocusable: /^(?:button|input|object|select|textarea)$/i,
        rclickable: /^a(?:rea)?$/i,
        rboolean: /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        propHooks: {
            tabIndex: {
                get: function (c) {
                    var a = baidu._util_;
                    var b = c.getAttributeNode("tabindex");
                    return b && b.specified ? parseInt(b.value, 10) : a.rfocusable.test(c.nodeName) || a.rclickable.test(c.nodeName) && c.href ? 0 : undefined
                }
            }
        }
    });
    if (!baidu.support.enctype) {
        var bu = baidu._util_;
        bu.propFix.enctype = "encoding"
    }
    if (!baidu.support.optSelected) {
        var bu = baidu._util_;
        bu.propHooks.selected = baidu.extend(bu.propHooks.selected, {
            get: function (b) {
                var a = b.parentNode;
                if (a) {
                    a.selectedIndex;
                    if (a.parentNode) {
                        a.parentNode.selectedIndex
                    }
                }
                return null
            }
        })
    }
    baidu.extend(baidu, {
        _error: function (a) {
            throw new Error(a)
        }, _nodeName: function (b, a) {
            return b.nodeName && b.nodeName.toUpperCase() === a.toUpperCase()
        }
    });
    baidu.extend(baidu._util_, {
        rfocusable: /^(?:button|input|object|select|textarea)$/i,
        rtype: /^(?:button|input)$/i,
        rclickable: /^a(?:rea)?$/i,
        nodeHook: {},
        attrHooks: {
            type: {
                set: function (b, c) {
                    var a = baidu._util_;
                    if (a.rtype.test(b.nodeName) && b.parentNode) {
                        baidu._error("type property can't be changed")
                    } else {
                        if (!baidu.support.radioValue && c === "radio" && baidu._nodeName(b, "input")) {
                            var d = b.value;
                            b.setAttribute("type", c);
                            if (d) {
                                b.value = d
                            }
                            return c
                        }
                    }
                }
            }, value: {
                get: function (c, b) {
                    var a = baidu._util_;
                    if (a.nodeHook && baidu._nodeName(c, "button")) {
                        return a.nodeHook.get(c, b)
                    }
                    return b in c ? c.value : null
                }, set: function (b, c, a) {
                    if (bu.nodeHook && baidu._nodeName(b, "button")) {
                        return bu.nodeHook.set(b, c, a)
                    }
                    b.value = c
                }
            }
        },
        boolHook: {
            get: function (b, a) {
                var d, c = baidu(b).prop(a);
                return c === true || typeof c !== "boolean" && (d = b.getAttributeNode(a)) && d.nodeValue !== false ? a.toLowerCase() : undefined
            }, set: function (b, d, a) {
                var c;
                if (d === false) {
                    baidu(b).removeAttr(a)
                } else {
                    c = baidu._util_.propFix[a] || a;
                    if (c in b) {
                        b[c] = true
                    }
                    b.setAttribute(a, a.toLowerCase())
                }
                return a
            }
        }
    });
    baidu._util_.attrHooks.tabindex = baidu._util_.propHooks.tabIndex;
    if (!baidu.support.getSetAttribute) {
        var bu = baidu._util_, fixSpecified = {name: true, id: true, coords: true};
        bu.nodeHook = {
            get: function (c, b) {
                var a;
                a = c.getAttributeNode(b);
                return a && (fixSpecified[b] ? a.nodeValue !== "" : a.specified) ? a.nodeValue : undefined
            }, set: function (c, d, b) {
                var a = c.getAttributeNode(b);
                if (!a) {
                    a = document.createAttribute(b);
                    c.setAttributeNode(a)
                }
                return (a.nodeValue = d + "")
            }
        };
        bu.attrHooks.tabindex.set = bu.nodeHook.set;
        baidu.forEach(["width", "height"], function (a) {
            bu.attrHooks[a] = baidu.extend(bu.attrHooks[a], {
                set: function (b, c) {
                    if (c === "") {
                        b.setAttribute(a, "auto");
                        return c
                    }
                }
            })
        });
        bu.attrHooks.contenteditable = {
            get: bu.nodeHook.get, set: function (b, c, a) {
                if (c === "") {
                    c = "false"
                }
                bu.nodeHook.set(b, c, a)
            }
        }
    }
    if (!baidu.support.hrefNormalized) {
        var bu = baidu._util_;
        baidu.forEach(["href", "src", "width", "height"], function (a) {
            bu.attrHooks[a] = baidu.extend(bu.attrHooks[a], {
                get: function (c) {
                    var b = c.getAttribute(a, 2);
                    return b === null ? undefined : b
                }
            })
        })
    }
    if (!baidu.support.style) {
        var bu = baidu._util_;
        bu.attrHooks.style = {
            get: function (a) {
                return a.style.cssText.toLowerCase() || undefined
            }, set: function (a, b) {
                return (a.style.cssText = "" + b)
            }
        }
    }
    baidu.dom.extend({
        prop: function (b, e) {
            if (arguments.length <= 0 || typeof b === "function") {
                return this
            }
            var a, d = this, c = false;
            if (this.size() <= 0) {
                if (b && e) {
                    return d
                } else {
                    if (b && !e) {
                        return undefined
                    } else {
                        return d
                    }
                }
            }
            baidu.forEach(this, function (m, i) {
                if (a) {
                    return
                }
                var j, l, f, h = baidu.dom, k = baidu._util_, g = m.nodeType;
                if (!m || g === 3 || g === 8 || g === 2) {
                    return
                }
                f = g !== 1 || !baidu._util_.isXML(m);
                if (f) {
                    b = k.propFix[b] || b;
                    l = k.propHooks[b]
                }
                switch (typeof b) {
                    case"string":
                        if (typeof e === "undefined") {
                            if (l && "get" in l && (j = l.get(m, b)) !== null) {
                                a = j
                            } else {
                                a = m[b]
                            }
                        } else {
                            if (typeof e === "function") {
                                c = true;
                                var n = h(m);
                                n.prop(b, e.call(m, i, n.prop(b)))
                            } else {
                                c = true;
                                if (l && "set" in l && (j = l.set(m, e, b)) !== undefined) {
                                    return j
                                } else {
                                    m[b] = e
                                }
                            }
                        }
                        break;
                    case"object":
                        c = true;
                        var n = h(m);
                        for (key in b) {
                            n.prop(key, b[key])
                        }
                        break;
                    default:
                        a = d;
                        break
                }
            });
            return c ? this : a
        }
    });
    baidu.makeArray = function (c, b) {
        var a = b || [];
        if (!c) {
            return a
        }
        c.length == null || ~"string|function|regexp".indexOf(baidu.type(c)) ? Array.prototype.push.call(a, c) : baidu.merge(a, c);
        return a
    };
    baidu.extend(baidu._util_, {
        nodeName: function (b, a) {
            return b.nodeName && b.nodeName.toUpperCase() === a.toUpperCase()
        }, valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            }, select: {
                get: function (a) {
                    var g, b, f, d, e = a.selectedIndex, h = [], j = a.options, c = a.type === "select-one";
                    if (e < 0) {
                        return null
                    }
                    b = c ? e : 0;
                    f = c ? e + 1 : j.length;
                    for (; b < f; b++) {
                        d = j[b];
                        if (d.selected && (baidu.support.optDisabled ? !d.disabled : d.getAttribute("disabled") === null) && (!d.parentNode.disabled || !baidu._util_.nodeName(d.parentNode, "optgroup"))) {
                            g = baidu.dom(d).val();
                            if (c) {
                                return g
                            }
                            h.push(g)
                        }
                    }
                    if (c && !h.length && j.length) {
                        return baidu(j[e]).val()
                    }
                    return h
                }, set: function (b, c) {
                    var a = baidu.makeArray(c);
                    baidu(b).find("option").each(function () {
                        this.selected = baidu.array(a).indexOf(baidu(this).val()) >= 0
                    });
                    if (!a.length) {
                        b.selectedIndex = -1
                    }
                    return a
                }
            }
        }
    });
    if (!baidu.support.getSetAttribute) {
        var fixSpecified = {name: true, id: true, coords: true};
        baidu._util_.valHooks.button = {
            get: function (c, b) {
                var a;
                a = c.getAttributeNode(b);
                return a && (fixSpecified[b] ? a.value !== "" : a.specified) ? a.value : undefined
            }, set: function (c, d, b) {
                var a = c.getAttributeNode(b);
                if (!a) {
                    a = document.createAttribute(b);
                    c.setAttributeNode(a)
                }
                return (a.value = d + "")
            }
        }
    }
    if (!baidu.support.checkOn) {
        baidu.forEach(["radio", "checkbox"], function () {
            baidu._util_.valHooks[this] = {
                get: function (a) {
                    return a.getAttribute("value") === null ? "on" : a.value
                }
            }
        })
    }
    baidu.forEach(["radio", "checkbox"], function (a) {
        baidu._util_.valHooks[a] = baidu.extend(baidu._util_.valHooks[a], {
            set: function (b, c) {
                if (baidu.isArray(c)) {
                    return (b.checked = baidu.array(c).indexOf(baidu(b).val()) >= 0)
                }
            }
        })
    });
    baidu.dom.extend({
        val: function (f) {
            var e = baidu.dom, b = baidu._util_, d = this, c = false, a;
            if (this.size() <= 0) {
                switch (typeof f) {
                    case"undefined":
                        return undefined;
                        break;
                    default:
                        return d;
                        break
                }
            }
            baidu.forEach(d, function (i, h) {
                var g, j = /\r/g;
                if (a) {
                    return
                }
                switch (typeof f) {
                    case"undefined":
                        if (i) {
                            g = b.valHooks[i.type] || b.valHooks[i.nodeName.toLowerCase()];
                            if (g && "get" in g && (a = g.get(i, "value")) !== undefined) {
                                return a
                            }
                            a = i.value;
                            return typeof a === "string" ? a.replace(j, "") : a == null ? "" : a
                        }
                        return a;
                        break;
                    case"function":
                        c = true;
                        var k = e(i);
                        k.val(f.call(i, h, k.val()));
                        break;
                    default:
                        c = true;
                        if (i.nodeType !== 1) {
                            return
                        }
                        if (f == null) {
                            f = ""
                        } else {
                            if (typeof f === "number") {
                                f += ""
                            } else {
                                if (baidu.isArray(f)) {
                                    f = baidu.forEach(f, function (m, l) {
                                        return m == null ? "" : m + ""
                                    })
                                }
                            }
                        }
                        g = b.valHooks[i.type] || b.valHooks[i.nodeName.toLowerCase()];
                        if (!g || !("set" in g) || g.set(i, f, "value") === undefined) {
                            i.value = f
                        }
                        break
                }
            });
            return c ? d : a
        }
    });
    baidu._util_.access = function (b, d, e) {
        if (this.size() <= 0) {
            return this
        }
        switch (baidu.type(b)) {
            case"string":
                if (d === undefined) {
                    return e.call(this, this[0], b)
                } else {
                    for (var a = 0, c; c = this[a]; a++) {
                        e.call(this, c, b, baidu.type(d) === "function" ? d.call(c, a, e.call(this, c, b)) : d)
                    }
                }
                break;
            case"object":
                for (var a in b) {
                    baidu._util_.access.call(this, a, b[a], e)
                }
                break
        }
        return this
    };
    baidu.dom.extend({
        getComputedStyle: function (b) {
            var c = this[0].ownerDocument.defaultView, a = c && c.getComputedStyle && c.getComputedStyle(this[0], null),
                d = a ? (a.getPropertyValue(b) || a[b]) : "";
            return d || this[0].style[b]
        }
    });
    baidu.dom.extend({
        getCurrentStyle: function () {
            var a = document.documentElement.currentStyle ? function (b) {
                return this[0].currentStyle ? this[0].currentStyle[b] : this[0].style[b]
            } : function (b) {
                return this.getComputedStyle(b)
            };
            return function (b) {
                return a.call(this, b)
            }
        }()
    });
    baidu._util_.getWidthOrHeight = function () {
        var a = {}, c = {position: "absolute", visibility: "hidden", display: "block"};

        function b(f, d) {
            var g = {};
            for (var e in d) {
                g[e] = f.style[e];
                f.style[e] = d[e]
            }
            return g
        }

        baidu.forEach(["Width", "Height"], function (d) {
            var e = {Width: ["Right", "Left"], Height: ["Top", "Bottom"]}[d];
            a["get" + d] = function (k, f) {
                var j = baidu.dom(k), i = k["offset" + d], g = i === 0 && b(k, c), h = "padding|border";
                g && (i = k["offset" + d]);
                f && baidu.forEach(f.split("|"), function (l) {
                    if (!~h.indexOf(l)) {
                        i += parseFloat(j.getCurrentStyle(l + e[0])) || 0;
                        i += parseFloat(j.getCurrentStyle(l + e[1])) || 0
                    } else {
                        h = h.replace(new RegExp("\\|?" + l + "\\|?"), "")
                    }
                });
                h && baidu.forEach(h.split("|"), function (l) {
                    i -= parseFloat(j.getCurrentStyle(l + e[0] + (l === "border" ? "Width" : ""))) || 0;
                    i -= parseFloat(j.getCurrentStyle(l + e[1] + (l === "border" ? "Width" : ""))) || 0
                });
                g && b(k, g);
                return i
            }
        });
        return function (f, e, d) {
            return a[e === "width" ? "getWidth" : "getHeight"](f, d)
        }
    }();
    baidu.string.extend({
        toCamelCase: function () {
            var a = this.valueOf();
            if (a.indexOf("-") < 0 && a.indexOf("_") < 0) {
                return a
            }
            return a.replace(/[-_][^-_]/g, function (b) {
                return b.charAt(1).toUpperCase()
            })
        }
    });
    baidu.dom.styleFixer = function () {
        var e = /alpha\s*\(\s*opacity\s*=\s*(\d{1,3})/i, a = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
            f = "fillOpacity,fontWeight,opacity,orphans,widows,zIndex,zoom",
            g = {"float": baidu.support.cssFloat ? "cssFloat" : "styleFloat"},
            b = {fontWeight: {normal: 400, bold: 700, bolder: 700, lighter: 100}}, d = {
                opacity: {}, width: {}, height: {}, fontWeight: {
                    get: function (j, i) {
                        var h = c.get(j, i);
                        return b.fontWeight[h] || h
                    }
                }
            }, c = {
                set: function (i, h, j) {
                    i.style[h] = j
                }
            };
        baidu.extend(d.opacity, baidu.support.opacity ? {
            get: function (j, i) {
                var h = baidu.dom(j).getCurrentStyle(i);
                return h === "" ? "1" : h
            }
        } : {
            get: function (h) {
                return e.test((h.currentStyle || h.style).filter || "") ? parseFloat(RegExp.$1) / 100 : "1"
            }, set: function (l, i, k) {
                var j = (l.currentStyle || l.style).filter || "", h = k * 100;
                l.style.zoom = 1;
                l.style.filter = e.test(j) ? j.replace(e, "Alpha(opacity=" + h) : j + " progid:dximagetransform.microsoft.Alpha(opacity=" + h + ")"
            }
        });
        baidu.forEach(["width", "height"], function (h) {
            d[h] = {
                get: function (i) {
                    return baidu._util_.getWidthOrHeight(i, h) + "px"
                }, set: function (j, i, k) {
                    baidu.type(k) === "number" && k < 0 && (k = 0);
                    c.set(j, i, k)
                }
            }
        });
        baidu.extend(c, document.documentElement.currentStyle ? {
            get: function (j, i) {
                var k = baidu.dom(j).getCurrentStyle(i), h;
                if (a.test(k)) {
                    h = j.style.left;
                    j.style.left = i === "fontSize" ? "1em" : k;
                    k = j.style.pixelLeft + "px";
                    j.style.left = h
                }
                return k
            }
        } : {
            get: function (i, h) {
                return baidu.dom(i).getCurrentStyle(h)
            }
        });
        return function (l, j, m) {
            var k = baidu.string(j).toCamelCase(), n = m === undefined ? "get" : "set", i, h;
            k = g[k] || k;
            i = baidu.type(m) === "number" && !~f.indexOf(k) ? m + "px" : m;
            h = d.hasOwnProperty(k) && d[k][n] || c[n];
            return h(l, k, i)
        }
    }();
    baidu.dom.extend({
        css: function (a, b) {
            baidu.check("^(?:(?:string(?:,(?:number|string|function))?)|object)$", "baidu.dom.css");
            return baidu._util_.access.call(this, a, b, function (d, c, f) {
                var e = baidu.dom.styleFixer;
                return e ? e(d, c, f) : (f === undefined ? this.getCurrentStyle(c) : d.style[c] = f)
            })
        }
    });
    baidu.dom.extend({
        text: function (f) {
            var e = baidu.dom, d = this, c = false, a;
            if (this.size() <= 0) {
                switch (typeof f) {
                    case"undefined":
                        return undefined;
                        break;
                    default:
                        return d;
                        break
                }
            }
            var b = function (l) {
                var k, h = "", j = 0, g = l.nodeType;
                if (g) {
                    if (g === 1 || g === 9 || g === 11) {
                        if (typeof l.textContent === "string") {
                            return l.textContent
                        } else {
                            for (l = l.firstChild; l; l = l.nextSibling) {
                                h += b(l)
                            }
                        }
                    } else {
                        if (g === 3 || g === 4) {
                            return l.nodeValue
                        }
                    }
                } else {
                    for (; (k = l[j]); j++) {
                        h += b(k)
                    }
                }
                return h
            };
            baidu.forEach(d, function (h, g) {
                var i = e(h);
                if (a) {
                    return
                }
                switch (typeof f) {
                    case"undefined":
                        a = b(h);
                        return a;
                        break;
                    case"number":
                        f = String(f);
                    case"string":
                        c = true;
                        i.empty().append((h && h.ownerDocument || document).createTextNode(f));
                        break;
                    case"function":
                        c = true;
                        i.text(f.call(h, g, i.text()));
                        break
                }
            });
            return c ? d : a
        }
    });
    baidu._util_.getWindowOrDocumentWidthOrHeight = baidu._util_.getWindowOrDocumentWidthOrHeight || function () {
        var a = {"window": {}, "document": {}};
        baidu.forEach(["Width", "Height"], function (d) {
            var c = "client" + d, e = "offset" + d, b = "scroll" + d;
            a["window"]["get" + d] = function (f) {
                var h = f.document, g = h.documentElement[c];
                return baidu.browser.isStrict && g || h.body && h.body[c] || g
            };
            a["document"]["get" + d] = function (f) {
                var g = f.documentElement;
                return g[c] >= g[b] ? g[c] : Math.max(f.body[b], g[b], f.body[e], g[e])
            }
        });
        return function (d, c, b) {
            return a[c][b === "width" ? "getWidth" : "getHeight"](d)
        }
    }();
    baidu.dom.extend({
        width: function (a) {
            return baidu._util_.access.call(this, "width", a, function (f, d, g) {
                var c = g !== undefined, b = c && parseFloat(g),
                    e = f != null && f == f.window ? "window" : (f.nodeType === 9 ? "document" : false);
                if (c && b < 0 || isNaN(b)) {
                    return
                }
                c && /^(?:\d*\.)?\d+$/.test(g += "") && (g += "px");
                return e ? baidu._util_.getWindowOrDocumentWidthOrHeight(f, e, d) : (c ? f.style.width = g : baidu._util_.getWidthOrHeight(f, d))
            })
        }
    });
    baidu.dom.extend({
        height: function (a) {
            return baidu._util_.access.call(this, "height", a, function (f, d, g) {
                var c = g !== undefined, b = c && parseFloat(g),
                    e = f != null && f == f.window ? "window" : (f.nodeType === 9 ? "document" : false);
                if (c && b < 0 || isNaN(b)) {
                    return
                }
                c && /^(?:\d*\.)?\d+$/.test(g += "") && (g += "px");
                return e ? baidu._util_.getWindowOrDocumentWidthOrHeight(f, e, d) : (c ? f.style.height = g : baidu._util_.getWidthOrHeight(f, d))
            })
        }
    });
    baidu.dom.extend({
        getWindow: function () {
            var a = this.getDocument();
            return (this.size() <= 0) ? undefined : (a.parentWindow || a.defaultView)
        }
    });
    baidu.dom.extend({
        offset: function () {
            var a = {
                getDefaultOffset: function (k, i) {
                    var c = i.documentElement, e = i.body, f = i.defaultView,
                        g = f ? f.getComputedStyle(k, null) : k.currentStyle, h = /^t(?:able|h|d)/i, b = k.offsetParent,
                        d = k.offsetLeft, j = k.offsetTop;
                    while ((k = k.parentNode) && k !== e && k !== c) {
                        if (baidu.support.fixedPosition && g.position === "fixed") {
                            break
                        }
                        g = f ? f.getComputedStyle(k, null) : k.currentStyle;
                        d -= k.scrollLeft;
                        j -= k.scrollTop;
                        if (k === b) {
                            d += k.offsetLeft;
                            j += k.offsetTop;
                            if (!baidu.support.hasBorderWidth && !(baidu.support.hasTableCellBorderWidth && h.test(k.nodeName))) {
                                d += parseFloat(g.borderLeftWidth) || 0;
                                j += parseFloat(g.borderTopWidth) || 0
                            }
                            b = k.offsetParent
                        }
                    }
                    if (~"static,relative".indexOf(g.position)) {
                        d += e.offsetLeft;
                        j += e.offsetTop
                    }
                    if (baidu.support.fixedPosition && g.position === "fixed") {
                        d += Math.max(c.scrollLeft, e.scrollLeft);
                        j += Math.max(c.scrollTop, e.scrollTop)
                    }
                    return {left: d, top: j}
                }, setOffset: function (i, e, d) {
                    var h = baidu.dom(i), g = baidu.type(e), c = h.offset(), b = h.getCurrentStyle("left"),
                        f = h.getCurrentStyle("top");
                    g === "function" && (e = e.call(i, d, c));
                    if (!e || e.left === undefined && e.top === undefined) {
                        return
                    }
                    b = parseFloat(b) || 0;
                    f = parseFloat(f) || 0;
                    e.left != undefined && (i.style.left = e.left - c.left + b + "px");
                    e.top != undefined && (i.style.top = e.top - c.top + f + "px");
                    h.getCurrentStyle("position") === "static" && (i.style.position = "relative")
                }, bodyOffset: function (b) {
                    var c = baidu.dom(b);
                    return {
                        left: b.offsetLeft + parseFloat(c.getCurrentStyle("marginLeft")) || 0,
                        top: b.offsetTop + parseFloat(c.getCurrentStyle("marginTop")) || 0
                    }
                }
            };
            a.getOffset = "getBoundingClientRect" in document.documentElement ? function (e, g) {
                if (!e.getBoundingClientRect) {
                    return a.getDefaultOffset(e, g)
                }
                var d = e.getBoundingClientRect(), f = baidu.dom(g).getWindow(), c = g.documentElement, b = g.body;
                return {
                    left: d.left + (f.pageXOffset || Math.max(c.scrollLeft, b.scrollLeft)) - (c.clientLeft || b.clientLeft),
                    top: d.top + (f.pageYOffset || Math.max(c.scrollTop, b.scrollTop)) - (c.clientTop || b.clientTop)
                }
            } : a.getDefaultOffset;
            return function (b) {
                if (!b) {
                    var e = this[0], f = baidu.dom(e).getDocument();
                    return a[e === f.body ? "bodyOffset" : "getOffset"](e, f)
                } else {
                    baidu.check("^(?:object|function)$", "baidu.dom.offset");
                    for (var c = 0, d; d = this[c]; c++) {
                        a.setOffset(d, b, c)
                    }
                    return this
                }
            }
        }()
    });
    baidu.dom.extend({
        removeAttr: function (a) {
            if (arguments.length <= 0 || !a || typeof a !== "string") {
                return this
            }
            baidu.forEach(this, function (k) {
                var f, d, b, c, j, e = 0;
                if (k.nodeType === 1) {
                    var g = baidu.dom, h = baidu._util_;
                    d = a.toLowerCase().split(/\s+/);
                    c = d.length;
                    for (; e < c; e++) {
                        b = d[e];
                        if (b) {
                            f = h.propFix[b] || b;
                            j = h.rboolean.test(b);
                            if (!j) {
                                g(k).attr(b, "")
                            }
                            k.removeAttribute(baidu.support.getSetAttribute ? b : f);
                            if (j && f in k) {
                                k[f] = false
                            }
                        }
                    }
                }
            });
            return this
        }
    });
    baidu.dom.extend({
        attr: function (b, e) {
            if (arguments.length <= 0 || typeof b === "function") {
                return this
            }
            var a, d = this, c = false;
            if (this.size() <= 0) {
                if (b && e) {
                    return d
                } else {
                    if (b && !e) {
                        return undefined
                    } else {
                        return d
                    }
                }
            }
            baidu.forEach(this, function (n, j) {
                if (a) {
                    return
                }
                var k, m, g, i = baidu.dom, l = baidu._util_, h = n.nodeType;
                if (!n || h === 3 || h === 8 || h === 2) {
                    return
                }
                if (typeof n.getAttribute === "undefined") {
                    var o = i(n);
                    a = o.prop(b, e)
                }
                switch (typeof b) {
                    case"string":
                        g = h !== 1 || !baidu._util_.isXML(n);
                        if (g) {
                            b = b.toLowerCase();
                            m = l.attrHooks[b] || (l.rboolean.test(b) ? l.boolHook : l.nodeHook)
                        }
                        if (typeof e === "undefined") {
                            if (m && "get" in m && g && (k = m.get(n, b)) !== null) {
                                a = k
                            } else {
                                k = n.getAttribute(b);
                                a = k === null ? undefined : k
                            }
                        } else {
                            if (typeof e === "function") {
                                c = true;
                                var o = i(n);
                                o.attr(b, e.call(n, j, o.attr(b)))
                            } else {
                                c = true;
                                var f = {
                                    val: true,
                                    css: true,
                                    html: true,
                                    text: true,
                                    width: true,
                                    height: true,
                                    offset: true
                                };
                                if (b in f) {
                                    a = i(n)[b](e);
                                    return
                                }
                                if (e === null) {
                                    i(n).removeAttr(b);
                                    return
                                } else {
                                    if (m && "set" in m && g && (k = m.set(n, e, b)) !== undefined) {
                                        return k
                                    } else {
                                        n.setAttribute(b, "" + e);
                                        return e
                                    }
                                }
                            }
                        }
                        break;
                    case"object":
                        c = true;
                        var o = i(n);
                        for (key in b) {
                            o.attr(key, b[key])
                        }
                        break;
                    default:
                        a = d;
                        break
                }
            });
            return c ? this : a
        }
    });
    baidu.dom.extend({
        before: function () {
            baidu.check("^(?:string|function|HTMLElement|\\$DOM)(?:,(?:string|array|HTMLElement|\\$DOM))*$", "baidu.dom.before");
            var a = this[0] && this[0].parentNode, c = !a && [], b;
            baidu._util_.smartInsert(this, arguments, function (d) {
                a ? a.insertBefore(d, this) : baidu.merge(c, d.childNodes)
            });
            if (c) {
                c = baidu.merge(c, this);
                this.length = 0;
                baidu.merge(this, c)
            }
            return this
        }
    });
    baidu.dom.extend({
        bind: function (b, c, a) {
            return this.on(b, undefined, c, a)
        }
    });
    baidu.dom.extend({
        children: function (c) {
            var b, d = [];
            this.each(function (a) {
                baidu.forEach(this.children || this.childNodes, function (e) {
                    e.nodeType == 1 && d.push(e)
                })
            });
            return baidu.dom(baidu.dom.match(d, c))
        }
    });
    baidu.dom.children = function (a) {
        baidu.check("string|HTMLElement", "baidu.dom.children");
        return baidu.dom(baidu.isString(a) ? "#" + a : a).children().toArray()
    };
    baidu.dom.extend({
        contents: function () {
            var e = Array.prototype.slice.call(this), a = [], d;
            for (var b = 0, c; c = e[b]; b++) {
                d = c.nodeName;
                a.push.apply(a, baidu.makeArray(d && d.toLowerCase() === "iframe" ? c.contentDocument || c.contentWindow.document : c.childNodes))
            }
            this.length = 0;
            return baidu.merge(this, a)
        }
    });
    baidu.dom._NAME_ATTRS = (function () {
        var a = {
            "cellpadding": "cellPadding",
            "cellspacing": "cellSpacing",
            "colspan": "colSpan",
            "rowspan": "rowSpan",
            "valign": "vAlign",
            "usemap": "useMap",
            "frameborder": "frameBorder"
        };
        if (baidu.browser.ie < 8) {
            a["for"] = "htmlFor";
            a["class"] = "className"
        } else {
            a["htmlFor"] = "for";
            a["className"] = "class"
        }
        return a
    })();
    baidu.dom.extend({
        setAttr: function (b, c) {
            var a = this[0];
            if ("style" == b) {
                a.style.cssText = c
            } else {
                b = baidu.dom._NAME_ATTRS[b] || b;
                a.setAttribute(b, c)
            }
            return a
        }
    });
    baidu.dom.create = function (d, a) {
        var e = document.createElement(d), b = a || {};
        for (var c in b) {
            baidu.dom.setAttr(e, c, b[c])
        }
        return e
    };
    baidu.dom.extend({
        data: function () {
            var a = baidu.key, b = baidu.global("_maps_HTMLElementData");
            return function (c, e) {
                baidu.forEach(this, function (f) {
                    !f[a] && (f[a] = baidu.id())
                });
                if (baidu.isString(c)) {
                    if (typeof e == "undefined") {
                        var d;
                        return this[0] && (d = b[this[0][a]]) && d[c]
                    }
                    baidu.forEach(this, function (g) {
                        var f = b[g[a]] = b[g[a]] || {};
                        f[c] = e
                    })
                } else {
                    if (baidu.type(c) == "object") {
                        baidu.forEach(this, function (g) {
                            var f = b[g[a]] = b[g[a]] || {};
                            baidu.forEach(c, function (h) {
                                f[h] = c[h]
                            })
                        })
                    }
                }
                return this
            }
        }()
    });
    baidu.lang.Class = function () {
        this.guid = baidu.id(this)
    };
    baidu.lang.Class.prototype.dispose = function () {
        baidu.id(this.guid, "delete");
        for (var a in this) {
            typeof this[a] != "function" && delete this[a]
        }
        this.disposed = true
    };
    baidu.lang.Class.prototype.toString = function () {
        return "[object " + (this._type_ || this.__type || this._className || "Object") + "]"
    };
    baiduInstance = function (a) {
        return baidu.id(a)
    };
    baidu.lang.Class.prototype.un = baidu.lang.Class.prototype.removeEventListener = function (d, c) {
        var b, a = this.__listeners;
        if (!a) {
            return
        }
        if (typeof d == "undefined") {
            for (b in a) {
                delete a[b]
            }
            return
        }
        d.indexOf("on") && (d = "on" + d);
        if (typeof c == "undefined") {
            delete a[d]
        } else {
            if (a[d]) {
                typeof c == "string" && (c = a[d][c]) && delete a[d][c];
                for (b = a[d].length - 1; b >= 0; b--) {
                    if (a[d][b] === c) {
                        a[d].splice(b, 1)
                    }
                }
            }
        }
    };
    baidu.lang.guid = function () {
        return baidu.id()
    };
    baidu.lang.isString = baidu.isString;
    baidu.lang.Event = function (a, b) {
        this.type = a;
        this.returnValue = true;
        this.target = b || null;
        this.currentTarget = null
    };
    baidu.lang.Class.prototype.fire = baidu.lang.Class.prototype.dispatchEvent = function (e, a) {
        baidu.lang.isString(e) && (e = new baidu.lang.Event(e));
        !this.__listeners && (this.__listeners = {});
        a = a || {};
        for (var c in a) {
            e[c] = a[c]
        }
        var c, g, d = this, b = d.__listeners, f = e.type;
        e.target = e.target || (e.currentTarget = d);
        f.indexOf("on") && (f = "on" + f);
        typeof d[f] == "function" && d[f].apply(d, arguments);
        if (typeof b[f] == "object") {
            for (c = 0, g = b[f].length; c < g; c++) {
                b[f][c] && b[f][c].apply(d, arguments)
            }
        }
        return e.returnValue
    };
    baidu.lang.Class.prototype.on = baidu.lang.Class.prototype.addEventListener = function (e, d, c) {
        if (typeof d != "function") {
            return
        }
        !this.__listeners && (this.__listeners = {});
        var b, a = this.__listeners;
        e.indexOf("on") && (e = "on" + e);
        typeof a[e] != "object" && (a[e] = []);
        for (b = a[e].length - 1; b >= 0; b--) {
            if (a[e][b] === d) {
                return d
            }
        }
        a[e].push(d);
        c && typeof c == "string" && (a[e][c] = d);
        return d
    };
    baidu.lang.createSingle = function (b) {
        var d = new baidu.lang.Class();
        for (var a in b) {
            d[a] = b[a]
        }
        return d
    };
    baidu.dom.ddManager = baidu.lang.createSingle({_targetsDroppingOver: {}});
    baidu.dom.extend({
        delegate: function (a, c, d, b) {
            if (typeof d == "function") {
                b = d, d = null
            }
            return this.on(c, a, d, b)
        }
    });
    baidu.dom.extend({
        filter: function (a) {
            return baidu.dom(baidu.dom.match(this, a))
        }
    });
    baidu.dom.extend({
        remove: function (a, d) {
            arguments.length > 0 && baidu.check("^string(?:,boolean)?$", "baidu.dom.remove");
            var e = a ? this.filter(a) : this;
            for (var b = 0, c; c = e[b]; b++) {
                if (!d && c.nodeType === 1) {
                    baidu._util_.cleanData(c.getElementsByTagName("*"));
                    baidu._util_.cleanData([c])
                }
                c.parentNode && c.parentNode.removeChild(c)
            }
            return this
        }
    });
    baidu.dom.extend({
        detach: function (a) {
            a && baidu.check("^string$", "baidu.dom.detach");
            return this.remove(a, true)
        }
    });
    baidu.dom._styleFixer = baidu.dom._styleFixer || {};
    baidu.dom._styleFilter = baidu.dom._styleFilter || [];
    baidu.dom._styleFilter.filter = function (b, e, f) {
        for (var a = 0, d = baidu.dom._styleFilter, c; c = d[a]; a++) {
            if (c = c[f]) {
                e = c(b, e)
            }
        }
        return e
    };
    baidu.dom.getStyle = function (c, b) {
        var e = baidu.dom;
        c = e.g(c);
        b = baidu.string.toCamelCase(b);
        var d = c.style[b] || (c.currentStyle ? c.currentStyle[b] : "") || e.getComputedStyle(c, b);
        if (!d || d == "auto") {
            var a = e._styleFixer[b];
            if (a) {
                d = a.get ? a.get(c, b, d) : baidu.dom.getStyle(c, a)
            }
        }
        if (a = e._styleFilter) {
            d = a.filter(b, d, "get")
        }
        return d
    };
    baidu.page = baidu.page || {};
    baidu.page.getScrollTop = function () {
        var a = document;
        return window.pageYOffset || a.documentElement.scrollTop || a.body.scrollTop
    };
    baidu.page.getScrollLeft = function () {
        var a = document;
        return window.pageXOffset || a.documentElement.scrollLeft || a.body.scrollLeft
    };
    (function () {
        baidu.page.getMousePosition = function () {
            return {x: baidu.page.getScrollLeft() + a.x, y: baidu.page.getScrollTop() + a.y}
        };
        var a = {x: 0, y: 0};
        baidu.event.on(document, "onmousemove", function (b) {
            b = window.event || b;
            a.x = b.clientX;
            a.y = b.clientY
        })
    })();
    baidu.dom.extend({
        off: function (c, a, d) {
            var b = baidu._util_.eventBase, e = this;
            if (!c) {
                baidu.forEach(this, function (f) {
                    b.removeAll(f)
                })
            } else {
                if (typeof c == "string") {
                    if (typeof a == "function") {
                        d = a, a = null
                    }
                    c = c.split(/[ ,]/);
                    baidu.forEach(this, function (f) {
                        baidu.forEach(c, function (g) {
                            b.remove(f, g, d, a)
                        })
                    })
                } else {
                    if (typeof c == "object") {
                        baidu.forEach(c, function (f, g) {
                            e.off(g, a, f)
                        })
                    }
                }
            }
            return this
        }
    });
    baidu.event.un = baidu.un = function (a, c, b) {
        a = baidu.dom.g(a);
        baidu.dom(a).off(c.replace(/^\s*on/, ""), b);
        return a
    };
    baidu.event.preventDefault = function (a) {
        a.originalEvent && (a = a.originalEvent);
        if (a.preventDefault) {
            a.preventDefault()
        } else {
            a.returnValue = false
        }
    };
    (function () {
        var m = false, i, h, e, d, c, f, l, a, k, n;
        baidu.dom.drag = function (p, o) {
            if (!(i = baidu.dom.g(p))) {
                return false
            }
            h = baidu.object.extend({autoStop: true, capture: true, interval: 16}, o);
            a = f = parseInt(baidu.dom.getStyle(i, "left")) || 0;
            k = l = parseInt(baidu.dom.getStyle(i, "top")) || 0;
            m = true;
            setTimeout(function () {
                var r = baidu.page.getMousePosition();
                e = h.mouseEvent ? (baidu.page.getScrollLeft() + h.mouseEvent.clientX) : r.x;
                d = h.mouseEvent ? (baidu.page.getScrollTop() + h.mouseEvent.clientY) : r.y;
                clearInterval(c);
                c = setInterval(b, h.interval)
            }, 1);
            var q = baidu.dom(document);
            h.autoStop && q.on("mouseup", j);
            q.on("selectstart", g);
            if (h.capture && i.setCapture) {
                i.setCapture()
            } else {
                if (h.capture && window.captureEvents) {
                    window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP)
                }
            }
            n = document.body.style.MozUserSelect;
            document.body.style.MozUserSelect = "none";
            baidu.isFunction(h.ondragstart) && h.ondragstart(i, h);
            return {
                stop: j, dispose: j, update: function (r) {
                    baidu.object.extend(h, r)
                }
            }
        };

        function j() {
            m = false;
            clearInterval(c);
            if (h.capture && i.releaseCapture) {
                i.releaseCapture()
            } else {
                if (h.capture && window.captureEvents) {
                    window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP)
                }
            }
            document.body.style.MozUserSelect = n;
            var o = baidu.dom(document);
            o.off("selectstart", g);
            h.autoStop && o.off("mouseup", j);
            baidu.isFunction(h.ondragend) && h.ondragend(i, h, {left: a, top: k})
        }

        function b(s) {
            if (!m) {
                clearInterval(c);
                return
            }
            var p = h.range || [], o = baidu.page.getMousePosition(), q = f + o.x - e, r = l + o.y - d;
            if (baidu.isObject(p) && p.length == 4) {
                q = Math.max(p[3], q);
                q = Math.min(p[1] - i.offsetWidth, q);
                r = Math.max(p[0], r);
                r = Math.min(p[2] - i.offsetHeight, r)
            }
            i.style.left = q + "px";
            i.style.top = r + "px";
            a = q;
            k = r;
            baidu.isFunction(h.ondrag) && h.ondrag(i, h, {left: a, top: k})
        }

        function g(o) {
            return baidu.event.preventDefault(o, false)
        }
    })();
    baidu.dom.extend({
        setStyle: function (b, c) {
            var d = baidu.dom, a;
            element = this[0];
            b = baidu.string.toCamelCase(b);
            if (a = d._styleFilter) {
                c = a.filter(b, c, "set")
            }
            a = d._styleFixer[b];
            (a && a.set) ? a.set(element, c, b) : (element.style[a || b] = c);
            return element
        }
    });
    baidu.dom.draggable = function (b, k) {
        k = baidu.object.extend({
            toggle: function () {
                return true
            }
        }, k);
        k.autoStop = true;
        b = baidu.dom.g(b);
        k.handler = k.handler || b;
        var a, h = ["ondragstart", "ondrag", "ondragend"], c = h.length - 1, d, j, f = {
            dispose: function () {
                j && j.stop();
                baidu.event.un(k.handler, "onmousedown", g);
                baidu.lang.Class.prototype.dispose.call(f)
            }
        }, e = this;
        if (a = baidu.dom.ddManager) {
            for (; c >= 0; c--) {
                d = h[c];
                k[d] = (function (i) {
                    var l = k[i];
                    return function () {
                        baidu.lang.isFunction(l) && l.apply(e, arguments);
                        a.dispatchEvent(i, {DOM: b})
                    }
                })(d)
            }
        }
        if (b) {
            function g(l) {
                var i = k.mouseEvent = window.event || l;
                k.mouseEvent = {clientX: i.clientX, clientY: i.clientY};
                if (i.button > 1 || (baidu.lang.isFunction(k.toggle) && !k.toggle())) {
                    return
                }
                if (baidu.lang.isFunction(k.onbeforedragstart)) {
                    k.onbeforedragstart(b)
                }
                j = baidu.dom.drag(b, k);
                f.stop = j.stop;
                f.update = j.update;
                baidu.event.preventDefault(i)
            }

            baidu.event.on(k.handler, "onmousedown", g)
        }
        return {
            cancel: function () {
                f.dispose()
            }
        }
    };
    baidu.dom.getPosition = function (a) {
        a = baidu.dom.g(a);
        var j = baidu.dom.getDocument(a), d = baidu.browser, g = baidu.dom.getStyle,
            c = d.isGecko > 0 && j.getBoxObjectFor && g(a, "position") == "absolute" && (a.style.top === "" || a.style.left === ""),
            h = {"left": 0, "top": 0}, f = (d.ie && !d.isStrict) ? j.body : j.documentElement, k, b;
        if (a == f) {
            return h
        }
        if (a.getBoundingClientRect) {
            b = a.getBoundingClientRect();
            h.left = Math.floor(b.left) + Math.max(j.documentElement.scrollLeft, j.body.scrollLeft);
            h.top = Math.floor(b.top) + Math.max(j.documentElement.scrollTop, j.body.scrollTop);
            h.left -= j.documentElement.clientLeft;
            h.top -= j.documentElement.clientTop;
            var i = j.body, l = parseInt(g(i, "borderLeftWidth")), e = parseInt(g(i, "borderTopWidth"));
            if (d.ie && !d.isStrict) {
                h.left -= isNaN(l) ? 2 : l;
                h.top -= isNaN(e) ? 2 : e
            }
        } else {
            k = a;
            do {
                h.left += k.offsetLeft;
                h.top += k.offsetTop;
                if (d.isWebkit > 0 && g(k, "position") == "fixed") {
                    h.left += j.body.scrollLeft;
                    h.top += j.body.scrollTop;
                    break
                }
                k = k.offsetParent
            } while (k && k != a);
            if (d.opera > 0 || (d.isWebkit > 0 && g(a, "position") == "absolute")) {
                h.top -= j.body.offsetTop
            }
            k = a.offsetParent;
            while (k && k != j.body) {
                h.left -= k.scrollLeft;
                if (!d.opera || k.tagName != "TR") {
                    h.top -= k.scrollTop
                }
                k = k.offsetParent
            }
        }
        return h
    };
    baidu.dom.intersect = function (i, h) {
        var f = baidu.dom.g, e = baidu.dom.getPosition, a = Math.max, c = Math.min;
        i = f(i);
        h = f(h);
        var d = e(i), b = e(h);
        return a(d.left, b.left) <= c(d.left + i.offsetWidth, b.left + h.offsetWidth) && a(d.top, b.top) <= c(d.top + i.offsetHeight, b.top + h.offsetHeight)
    };
    baidu.dom.droppable = function (e, c) {
        c = c || {};
        var d = baidu.dom.ddManager, g = baidu.dom.g(e), b = baidu.lang.guid(), f = function (j) {
            var i = d._targetsDroppingOver, h = {trigger: j.DOM, reciever: g};
            if (baidu.dom.intersect(g, j.DOM)) {
                if (!i[b]) {
                    (typeof c.ondropover == "function") && c.ondropover.call(g, h);
                    d.dispatchEvent("ondropover", h);
                    i[b] = true
                }
            } else {
                if (i[b]) {
                    (typeof c.ondropout == "function") && c.ondropout.call(g, h);
                    d.dispatchEvent("ondropout", h)
                }
                delete i[b]
            }
        }, a = function (i) {
            var h = {trigger: i.DOM, reciever: g};
            if (baidu.dom.intersect(g, i.DOM)) {
                typeof c.ondrop == "function" && c.ondrop.call(g, h);
                d.dispatchEvent("ondrop", h)
            }
            delete d._targetsDroppingOver[b]
        };
        d.addEventListener("ondrag", f);
        d.addEventListener("ondragend", a);
        return {
            cancel: function () {
                d.removeEventListener("ondrag", f);
                d.removeEventListener("ondragend", a)
            }
        }
    };
    baidu.dom.extend({
        eq: function (a) {
            baidu.check("number", "baidu.dom.eq");
            return baidu.dom(this.get(a))
        }
    });
    baidu.dom.extend({
        find: function (b) {
            var c = [], d, f = "__tangram__find__", e = baidu.dom();
            switch (baidu.type(b)) {
                case"string":
                    this.each(function () {
                        baidu.merge(e, baidu.query(b, this))
                    });
                    break;
                case"HTMLElement":
                    d = b.tagName + "#" + (b.id ? b.id : (b.id = f));
                    this.each(function () {
                        if (baidu.query(d, this).length > 0) {
                            c.push(b)
                        }
                    });
                    b.id == f && (b.id = "");
                    if (c.length > 0) {
                        baidu.merge(e, c)
                    }
                    break;
                case"$DOM":
                    c = b.get();
                    this.each(function () {
                        baidu.forEach(baidu.query("*", this), function (g) {
                            for (var a = 0, h = c.length; a < h; a++) {
                                g === c[a] && (e[e.length++] = c[a])
                            }
                        })
                    });
                    break
            }
            return e
        }
    });
    baidu.dom.extend({
        first: function () {
            return baidu.dom(this[0])
        }
    });
    baidu.dom.first = function (a) {
        baidu.isString(a) && (a = "#" + a);
        return baidu.dom(a).children()[0]
    };
    baidu.dom.getAncestorBy = function (a, b) {
        a = baidu.dom.g(a);
        while ((a = a.parentNode) && a.nodeType == 1) {
            if (b(a)) {
                return a
            }
        }
        return null
    };
    baidu.dom.getAncestorByClass = function (a, b) {
        a = baidu.dom.g(a);
        b = new RegExp("(^|\\s)" + baidu.string.trim(b) + "(\\s|\x24)");
        while ((a = a.parentNode) && a.nodeType == 1) {
            if (b.test(a.className)) {
                return a
            }
        }
        return null
    };
    baidu.dom.getAncestorByTag = function (b, a) {
        b = baidu.dom.g(b);
        a = a.toUpperCase();
        while ((b = b.parentNode) && b.nodeType == 1) {
            if (b.tagName == a) {
                return b
            }
        }
        return null
    };
    baidu.dom.extend({
        getAttr: function (a) {
            element = this[0];
            if ("style" == a) {
                return element.style.cssText
            }
            a = baidu.dom._NAME_ATTRS[a] || a;
            return element.getAttribute(a)
        }
    });
    baidu.dom.getParent = function (a) {
        a = baidu.dom._g(a);
        return a.parentElement || a.parentNode || null
    };
    baidu.dom.extend({
        getText: function () {
            var b = "", d, c = 0, a;
            element = this[0];
            if (element.nodeType === 3 || element.nodeType === 4) {
                b += element.nodeValue
            } else {
                if (element.nodeType !== 8) {
                    d = element.childNodes;
                    for (a = d.length; c < a; c++) {
                        b += baidu.dom.getText(d[c])
                    }
                }
            }
            return b
        }
    });
    baidu.dom.extend({
        has: function (b) {
            var c = [], d = baidu.dom(document.body);
            baidu.forEach(this, function (a) {
                d[0] = a;
                d.find(b).length && c.push(a)
            });
            return baidu.dom(c)
        }
    });
    baidu.dom.extend({
        hasAttr: function (b) {
            element = this[0];
            var a = element.attributes.getNamedItem(b);
            return !!(a && a.specified)
        }
    });
    baidu.dom.extend({
        hasClass: function (c) {
            if (arguments.length <= 0 || typeof c === "function") {
                return this
            }
            if (this.size() <= 0) {
                return false
            }
            c = c.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " ");
            var b = c.split(" ");
            var a;
            baidu.forEach(this, function (e) {
                var f = e.className;
                for (var d = 0; d < b.length; d++) {
                    if ((" " + f + " ").indexOf(" " + b[d] + " ") == -1) {
                        a = false;
                        return
                    }
                }
                if (a !== false) {
                    a = true;
                    return
                }
            });
            return a
        }
    });
    (function () {
        var f, c, a, h = /^margin/, e = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, g = /^(top|right|bottom|left)$/, b = {};
        baidu.extend(baidu._util_, {
            showHide: function (n, i) {
                var m, o, j = [], k = 0, l = n.length;
                for (; k < l; k++) {
                    m = n[k];
                    if (!m.style) {
                        continue
                    }
                    j[k] = baidu._util_._data(m, "olddisplay");
                    if (i) {
                        if (!j[k] && m.style.display === "none") {
                            m.style.display = ""
                        }
                        if ((m.style.display === "" && a(m, "display") === "none") || !baidu.dom.contains(m.ownerDocument.documentElement, m)) {
                            j[k] = baidu._util_._data(m, "olddisplay", d(m.nodeName))
                        }
                    } else {
                        o = a(m, "display");
                        if (!j[k] && o !== "none") {
                            baidu._util_._data(m, "olddisplay", o)
                        }
                    }
                }
                for (k = 0; k < l; k++) {
                    m = n[k];
                    if (!m.style) {
                        continue
                    }
                    if (!i || m.style.display === "none" || m.style.display === "") {
                        m.style.display = i ? j[k] || "" : "none"
                    }
                }
                return n
            }
        });
        if (window.getComputedStyle) {
            a = function (n, j) {
                var i, l, m = getComputedStyle(n, null), k = n.style;
                if (m) {
                    i = m[j];
                    if (i === "" && !baidu.dom.contains(n.ownerDocument.documentElement, n)) {
                        i = baidu.dom(n).css(j)
                    }
                    if (!baidu.support.pixelMargin && h.test(j) && e.test(i)) {
                        l = k.width;
                        k.width = i;
                        i = m.width;
                        k.width = l
                    }
                }
                return i
            }
        } else {
            if (document.documentElement.currentStyle) {
                a = function (m, k) {
                    var n, i, j = m.currentStyle && m.currentStyle[k], l = m.style;
                    if (j == null && l && l[k]) {
                        j = l[k]
                    }
                    if (e.test(j) && !g.test(k)) {
                        n = l.left;
                        i = m.runtimeStyle && m.runtimeStyle.left;
                        if (i) {
                            m.runtimeStyle.left = m.currentStyle.left
                        }
                        l.left = k === "fontSize" ? "1em" : j;
                        j = l.pixelLeft + "px";
                        l.left = n;
                        if (i) {
                            m.runtimeStyle.left = i
                        }
                    }
                    return j === "" ? "auto" : j
                }
            }
        }

        function d(k) {
            if (b[k]) {
                return b[k]
            }
            var i = baidu.dom("<" + k + ">").appendTo(document.body), j = i.css("display");
            i.remove();
            if (j === "none" || j === "") {
                c = document.body.appendChild(c || baidu.extend(document.createElement("iframe"), {
                    frameBorder: 0,
                    width: 0,
                    height: 0
                }));
                if (!f || !c.createElement) {
                    f = (c.contentWindow || c.contentDocument).document;
                    f.write("<!doctype html><html><body>");
                    f.close()
                }
                i = f.body.appendChild(f.createElement(k));
                j = a(i, "display");
                document.body.removeChild(c)
            }
            b[k] = j;
            return j
        }
    })();
    baidu.dom.extend({
        hide: function () {
            baidu._util_.showHide(this);
            return this
        }
    });
    baidu.dom.extend({
        innerHeight: function () {
            if (this.size() <= 0) {
                return 0
            }
            var b = this[0], a = b != null && b === b.window ? "window" : (b.nodeType === 9 ? "document" : false);
            return a ? baidu._util_.getWindowOrDocumentWidthOrHeight(b, a, "height") : baidu._util_.getWidthOrHeight(b, "height", "padding")
        }
    });
    baidu.dom.extend({
        innerWidth: function () {
            if (this.size() <= 0) {
                return 0
            }
            var b = this[0], a = b != null && b === b.window ? "window" : (b.nodeType === 9 ? "document" : false);
            return a ? baidu._util_.getWindowOrDocumentWidthOrHeight(b, a, "width") : baidu._util_.getWidthOrHeight(b, "width", "padding")
        }
    });
    baidu.dom.extend({
        insertAfter: function (a) {
            baidu.check("^(?:string|HTMLElement|\\$DOM)$", "baidu.dom.insertAfter");
            baidu._util_.smartInsertTo(this, a, function (b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            }, "after");
            return this
        }
    });
    baidu.dom.insertAfter = function (c, b) {
        var a = baidu.dom._g;
        return baidu.dom(a(c)).insertAfter(a(b))[0]
    };
    baidu.dom.extend({
        insertBefore: function (a) {
            baidu.check("^(?:string|HTMLElement|\\$DOM)$", "baidu.dom.insertBefore");
            baidu._util_.smartInsertTo(this, a, function (b) {
                this.parentNode.insertBefore(b, this)
            }, "before");
            return this
        }
    });
    baidu.dom.insertBefore = function (c, b) {
        var a = baidu.dom._g;
        return baidu.dom(a(c)).insertBefore(a(b))[0]
    };
    baidu.dom.extend({
        insertHTML: function (a, c) {
            element = this[0];
            var b, d;
            if (element.insertAdjacentHTML && !baidu.browser.opera) {
                element.insertAdjacentHTML(a, c)
            } else {
                b = element.ownerDocument.createRange();
                a = a.toUpperCase();
                if (a == "AFTERBEGIN" || a == "BEFOREEND") {
                    b.selectNodeContents(element);
                    b.collapse(a == "AFTERBEGIN")
                } else {
                    d = a == "BEFOREBEGIN";
                    b[d ? "setStartBefore" : "setEndAfter"](element);
                    b.collapse(d)
                }
                b.insertNode(b.createContextualFragment(c))
            }
            return element
        }
    });
    baidu.dom.extend({
        last: function () {
            return baidu.dom(this.get(-1))
        }
    });
    baidu.dom.last = function (a) {
        a = baidu.dom.g(a);
        for (var b = a.lastChild; b; b = b.previousSibling) {
            if (b.nodeType == 1) {
                return b
            }
        }
        return null
    };
    baidu.dom.extend({
        next: function (a) {
            var b = baidu.dom();
            baidu.forEach(this, function (c) {
                while ((c = c.nextSibling) && c && c.nodeType != 1) {
                }
                c && (b[b.length++] = c)
            });
            return a ? b.filter(a) : b
        }
    });
    baidu.dom.extend({
        nextAll: function (a) {
            var b = [];
            baidu.forEach(this, function (c) {
                while (c = c.nextSibling) {
                    c && (c.nodeType == 1) && b.push(c)
                }
            });
            return baidu.dom(baidu.dom.match(b, a))
        }
    });
    baidu.dom.extend({
        nextUntil: function (a, b) {
            var c = baidu.array();
            baidu.forEach(this, function (f) {
                var e = baidu.array();
                while (f = f.nextSibling) {
                    f && (f.nodeType == 1) && e.push(f)
                }
                if (a && e.length) {
                    var d = baidu.dom.match(e, a);
                    if (d.length) {
                        e = e.slice(0, e.indexOf(d[0]))
                    }
                }
                baidu.merge(c, e)
            });
            return baidu.dom(baidu.dom.match(c, b))
        }
    });
    baidu.dom.extend({
        not: function (b) {
            var e, d, g, f = this.get(), c = baidu.isArray(b) ? b : baidu.dom.match(this, b);
            for (e = f.length - 1; e > -1; e--) {
                for (d = 0, g = c.length; d < g; d++) {
                    c[d] === f[e] && f.splice(e, 1)
                }
            }
            return baidu.dom(f)
        }
    });
    baidu.dom.extend({
        offsetParent: function () {
            return this.map(function () {
                var b = this.offsetParent || document.body, a = /^(?:body|html)$/i;
                while (b && baidu.dom(b).getCurrentStyle("position") === "static" && !a.test(b.nodeName)) {
                    b = b.offsetParent
                }
                return b
            })
        }
    });
    baidu.dom.extend({
        one: function (b, e, a) {
            var c = this;
            if (typeof e == "function") {
                a = e, e = undefined
            }
            if (typeof b == "object" && b) {
                baidu.forEach(b, function (g, f) {
                    this.one(f, e, g)
                }, this);
                return this
            }
            var d = function () {
                baidu.dom(this).off(b, d);
                return a.apply(c, arguments)
            };
            this.each(function () {
                var f = baidu.id(this);
                a["_" + f + "_" + b] = d
            });
            return this.on(b, e, d)
        }
    });
    baidu.dom.opacity = function (b, a) {
        b = baidu.dom.g(b);
        if (!baidu.browser.ie) {
            b.style.opacity = a;
            b.style.KHTMLOpacity = a
        } else {
            b.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity:" + Math.floor(a * 100) + ")"
        }
    };
    baidu.dom.extend({
        outerHeight: function (c) {
            if (this.size() <= 0) {
                return 0
            }
            var b = this[0], a = b != null && b === b.window ? "window" : (b.nodeType === 9 ? "document" : false);
            return a ? baidu._util_.getWindowOrDocumentWidthOrHeight(b, a, "height") : baidu._util_.getWidthOrHeight(b, "height", "padding|border" + (c ? "|margin" : ""))
        }
    });
    baidu.dom.extend({
        outerWidth: function (c) {
            if (this.size() <= 0) {
                return 0
            }
            var b = this[0], a = b != null && b === b.window ? "window" : (b.nodeType === 9 ? "document" : false);
            return a ? baidu._util_.getWindowOrDocumentWidthOrHeight(b, a, "width") : baidu._util_.getWidthOrHeight(b, "width", "padding|border" + (c ? "|margin" : ""))
        }
    });
    baidu.dom.extend({
        parent: function (a) {
            var b = [];
            baidu.forEach(this, function (c) {
                (c = c.parentNode) && c.nodeType == 1 && b.push(c)
            });
            return baidu.dom(baidu.dom.match(b, a))
        }
    });
    baidu.dom.extend({
        parents: function (a) {
            var b = [];
            baidu.forEach(this, function (d) {
                var c = [];
                while ((d = d.parentNode) && d.nodeType == 1) {
                    c.push(d)
                }
                baidu.merge(b, c)
            });
            return baidu.dom(baidu.dom.match(b, a))
        }
    });
    baidu.dom.extend({
        parentsUntil: function (a, b) {
            baidu.check("(string|HTMLElement)(,.+)?", "baidu.dom.parentsUntil");
            var c = [];
            baidu.forEach(this, function (f) {
                var e = baidu.array();
                while ((f = f.parentNode) && f.nodeType == 1) {
                    e.push(f)
                }
                if (a && e.length) {
                    var d = baidu.dom.match(e, a);
                    if (d.length) {
                        e = e.slice(0, e.indexOf(d[0]))
                    }
                }
                baidu.merge(c, e)
            });
            return baidu.dom(baidu.dom.match(c, b))
        }
    });
    baidu.dom.extend({
        position: function () {
            if (this.size() <= 0) {
                return 0
            }
            var a = /^(?:body|html)$/i, d = this.offset(), b = this.offsetParent(),
                c = a.test(b[0].nodeName) ? {left: 0, top: 0} : b.offset();
            d.left -= parseFloat(this.getCurrentStyle("marginLeft")) || 0;
            d.top -= parseFloat(this.getCurrentStyle("marginTop")) || 0;
            c.left += parseFloat(b.getCurrentStyle("borderLeftWidth")) || 0;
            c.top += parseFloat(b.getCurrentStyle("borderTopWidth")) || 0;
            return {left: d.left - c.left, top: d.top - c.top}
        }
    });
    baidu.dom.extend({
        prepend: function () {
            baidu.check("^(?:string|function|HTMLElement|\\$DOM)(?:,(?:string|array|HTMLElement|\\$DOM))*$", "baidu.dom.prepend");
            baidu._util_.smartInsert(this, arguments, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            });
            return this
        }
    });
    baidu.dom.extend({
        prependTo: function (a) {
            baidu.check("^(?:string|HTMLElement|\\$DOM)$", "baidu.dom.prependTo");
            baidu._util_.smartInsertTo(this, a, function (b) {
                this.insertBefore(b, this.firstChild)
            });
            return this
        }
    });
    baidu.dom.extend({
        prev: function (a) {
            var b = [];
            baidu.forEach(this, function (c) {
                while (c = c.previousSibling) {
                    if (c.nodeType == 1) {
                        b.push(c);
                        break
                    }
                }
            });
            return baidu.dom(baidu.dom.match(b, a))
        }
    });
    baidu.dom.extend({
        prevAll: function (a) {
            var b = baidu.array();
            baidu.forEach(this, function (d) {
                var c = [];
                while (d = d.previousSibling) {
                    d.nodeType == 1 && c.push(d)
                }
                baidu.merge(b, c.reverse())
            });
            return baidu.dom(typeof a == "string" ? baidu.dom.match(b, a) : b.unique())
        }
    });
    baidu.dom.extend({
        prevUntil: function (a, b) {
            baidu.check("(string|HTMLElement)(,.+)?", "baidu.dom.prevUntil");
            var c = [];
            baidu.forEach(this, function (f) {
                var e = baidu.array();
                while (f = f.previousSibling) {
                    f && (f.nodeType == 1) && e.push(f)
                }
                if (a && e.length) {
                    var d = baidu.dom.match(e, a);
                    if (d.length) {
                        e = e.slice(0, e.indexOf(d[0]))
                    }
                }
                baidu.merge(c, e)
            });
            return baidu.dom(baidu.dom.match(c, b))
        }
    });
    baidu.string.extend({
        escapeReg: function () {
            return this.replace(new RegExp("([.*+?^=!:\x24{}()|[\\]/\\\\])", "g"), "\\\x241")
        }
    });
    baidu.dom.q = function (h, e, b) {
        var j = [], d = baidu.string.trim, g, f, a, c;
        if (!(h = d(h))) {
            return j
        }
        if ("undefined" == typeof e) {
            e = document
        } else {
            e = baidu.dom.g(e);
            if (!e) {
                return j
            }
        }
        b && (b = d(b).toUpperCase());
        if (e.getElementsByClassName) {
            a = e.getElementsByClassName(h);
            g = a.length;
            for (f = 0; f < g; f++) {
                c = a[f];
                if (b && c.tagName != b) {
                    continue
                }
                j[j.length] = c
            }
        } else {
            h = new RegExp("(^|\\s)" + baidu.string.escapeReg(h) + "(\\s|\x24)");
            a = b ? e.getElementsByTagName(b) : (e.all || e.getElementsByTagName("*"));
            g = a.length;
            for (f = 0; f < g; f++) {
                c = a[f];
                h.test(c.className) && (j[j.length] = c)
            }
        }
        return j
    };
    (function () {
        var n = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            i = "sizcache" + (Math.random() + "").replace(".", ""), o = 0, r = Object.prototype.toString, h = false,
            g = true, q = /\\/g, u = /\r\n/g, w = /\W/;
        [0, 0].sort(function () {
            g = false;
            return 0
        });
        var d = function (B, e, E, F) {
            E = E || [];
            e = e || document;
            var H = e;
            if (e.nodeType !== 1 && e.nodeType !== 9) {
                return []
            }
            if (!B || typeof B !== "string") {
                return E
            }
            var y, J, M, x, I, L, K, D, A = true, z = d.isXML(e), C = [], G = B;
            do {
                n.exec("");
                y = n.exec(G);
                if (y) {
                    G = y[3];
                    C.push(y[1]);
                    if (y[2]) {
                        x = y[3];
                        break
                    }
                }
            } while (y);
            if (C.length > 1 && j.exec(B)) {
                if (C.length === 2 && k.relative[C[0]]) {
                    J = s(C[0] + C[1], e, F)
                } else {
                    J = k.relative[C[0]] ? [e] : d(C.shift(), e);
                    while (C.length) {
                        B = C.shift();
                        if (k.relative[B]) {
                            B += C.shift()
                        }
                        J = s(B, J, F)
                    }
                }
            } else {
                if (!F && C.length > 1 && e.nodeType === 9 && !z && k.match.ID.test(C[0]) && !k.match.ID.test(C[C.length - 1])) {
                    I = d.find(C.shift(), e, z);
                    e = I.expr ? d.filter(I.expr, I.set)[0] : I.set[0]
                }
                if (e) {
                    I = F ? {
                        expr: C.pop(),
                        set: l(F)
                    } : d.find(C.pop(), C.length === 1 && (C[0] === "~" || C[0] === "+") && e.parentNode ? e.parentNode : e, z);
                    J = I.expr ? d.filter(I.expr, I.set) : I.set;
                    if (C.length > 0) {
                        M = l(J)
                    } else {
                        A = false
                    }
                    while (C.length) {
                        L = C.pop();
                        K = L;
                        if (!k.relative[L]) {
                            L = ""
                        } else {
                            K = C.pop()
                        }
                        if (K == null) {
                            K = e
                        }
                        k.relative[L](M, K, z)
                    }
                } else {
                    M = C = []
                }
            }
            if (!M) {
                M = J
            }
            if (!M) {
                d.error(L || B)
            }
            if (r.call(M) === "[object Array]") {
                if (!A) {
                    E.push.apply(E, M)
                } else {
                    if (e && e.nodeType === 1) {
                        for (D = 0; M[D] != null; D++) {
                            if (M[D] && (M[D] === true || M[D].nodeType === 1 && d.contains(e, M[D]))) {
                                E.push(J[D])
                            }
                        }
                    } else {
                        for (D = 0; M[D] != null; D++) {
                            if (M[D] && M[D].nodeType === 1) {
                                E.push(J[D])
                            }
                        }
                    }
                }
            } else {
                l(M, E)
            }
            if (x) {
                d(x, H, E, F);
                d.uniqueSort(E)
            }
            return E
        };
        d.uniqueSort = function (x) {
            if (p) {
                h = g;
                x.sort(p);
                if (h) {
                    for (var e = 1; e < x.length; e++) {
                        if (x[e] === x[e - 1]) {
                            x.splice(e--, 1)
                        }
                    }
                }
            }
            return x
        };
        d.matches = function (e, x) {
            return d(e, null, null, x)
        };
        d.matchesSelector = function (e, x) {
            return d(x, null, null, [e]).length > 0
        };
        d.find = function (D, e, E) {
            var C, y, A, z, B, x;
            if (!D) {
                return []
            }
            for (y = 0, A = k.order.length; y < A; y++) {
                B = k.order[y];
                if ((z = k.leftMatch[B].exec(D))) {
                    x = z[1];
                    z.splice(1, 1);
                    if (x.substr(x.length - 1) !== "\\") {
                        z[1] = (z[1] || "").replace(q, "");
                        C = k.find[B](z, e, E);
                        if (C != null) {
                            D = D.replace(k.match[B], "");
                            break
                        }
                    }
                }
            }
            if (!C) {
                C = typeof e.getElementsByTagName !== "undefined" ? e.getElementsByTagName("*") : []
            }
            return {set: C, expr: D}
        };
        d.filter = function (H, G, K, A) {
            var C, e, F, M, J, x, z, B, I, y = H, L = [], E = G, D = G && G[0] && d.isXML(G[0]);
            while (H && G.length) {
                for (F in k.filter) {
                    if ((C = k.leftMatch[F].exec(H)) != null && C[2]) {
                        x = k.filter[F];
                        z = C[1];
                        e = false;
                        C.splice(1, 1);
                        if (z.substr(z.length - 1) === "\\") {
                            continue
                        }
                        if (E === L) {
                            L = []
                        }
                        if (k.preFilter[F]) {
                            C = k.preFilter[F](C, E, K, L, A, D);
                            if (!C) {
                                e = M = true
                            } else {
                                if (C === true) {
                                    continue
                                }
                            }
                        }
                        if (C) {
                            for (B = 0; (J = E[B]) != null; B++) {
                                if (J) {
                                    M = x(J, C, B, E);
                                    I = A ^ M;
                                    if (K && M != null) {
                                        if (I) {
                                            e = true
                                        } else {
                                            E[B] = false
                                        }
                                    } else {
                                        if (I) {
                                            L.push(J);
                                            e = true
                                        }
                                    }
                                }
                            }
                        }
                        if (M !== undefined) {
                            if (!K) {
                                E = L
                            }
                            H = H.replace(k.match[F], "");
                            if (!e) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (H === y) {
                    if (e == null) {
                        d.error(H)
                    } else {
                        break
                    }
                }
                y = H
            }
            return E
        };
        d.error = function (e) {
            throw"Syntax error, unrecognized expression: " + e
        };
        var b = d.getText = function (A) {
            var y, z, e = A.nodeType, x = "";
            if (e) {
                if (e === 1) {
                    if (typeof A.textContent === "string") {
                        return A.textContent
                    } else {
                        if (typeof A.innerText === "string") {
                            return A.innerText.replace(u, "")
                        } else {
                            for (A = A.firstChild; A; A = A.nextSibling) {
                                x += b(A)
                            }
                        }
                    }
                } else {
                    if (e === 3 || e === 4) {
                        return A.nodeValue
                    }
                }
            } else {
                for (y = 0; (z = A[y]); y++) {
                    if (z.nodeType !== 8) {
                        x += b(z)
                    }
                }
            }
            return x
        };
        var k = d.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: function (e) {
                    return e.getAttribute("href")
                }, type: function (e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function (C, x) {
                    var z = typeof x === "string", B = z && !w.test(x), D = z && !B;
                    if (B) {
                        x = x.toLowerCase()
                    }
                    for (var y = 0, e = C.length, A; y < e; y++) {
                        if ((A = C[y])) {
                            while ((A = A.previousSibling) && A.nodeType !== 1) {
                            }
                            C[y] = D || A && A.nodeName.toLowerCase() === x ? A || false : A === x
                        }
                    }
                    if (D) {
                        d.filter(x, C, true)
                    }
                }, ">": function (C, x) {
                    var B, A = typeof x === "string", y = 0, e = C.length;
                    if (A && !w.test(x)) {
                        x = x.toLowerCase();
                        for (; y < e; y++) {
                            B = C[y];
                            if (B) {
                                var z = B.parentNode;
                                C[y] = z.nodeName.toLowerCase() === x ? z : false
                            }
                        }
                    } else {
                        for (; y < e; y++) {
                            B = C[y];
                            if (B) {
                                C[y] = A ? B.parentNode : B.parentNode === x
                            }
                        }
                        if (A) {
                            d.filter(x, C, true)
                        }
                    }
                }, "": function (z, x, B) {
                    var A, y = o++, e = t;
                    if (typeof x === "string" && !w.test(x)) {
                        x = x.toLowerCase();
                        A = x;
                        e = a
                    }
                    e("parentNode", x, y, z, A, B)
                }, "~": function (z, x, B) {
                    var A, y = o++, e = t;
                    if (typeof x === "string" && !w.test(x)) {
                        x = x.toLowerCase();
                        A = x;
                        e = a
                    }
                    e("previousSibling", x, y, z, A, B)
                }
            },
            find: {
                ID: function (x, y, z) {
                    if (typeof y.getElementById !== "undefined" && !z) {
                        var e = y.getElementById(x[1]);
                        return e && e.parentNode ? [e] : []
                    }
                }, NAME: function (y, B) {
                    if (typeof B.getElementsByName !== "undefined") {
                        var x = [], A = B.getElementsByName(y[1]);
                        for (var z = 0, e = A.length; z < e; z++) {
                            if (A[z].getAttribute("name") === y[1]) {
                                x.push(A[z])
                            }
                        }
                        return x.length === 0 ? null : x
                    }
                }, TAG: function (e, x) {
                    if (typeof x.getElementsByTagName !== "undefined") {
                        return x.getElementsByTagName(e[1])
                    }
                }
            },
            preFilter: {
                CLASS: function (z, x, y, e, C, D) {
                    z = " " + z[1].replace(q, "") + " ";
                    if (D) {
                        return z
                    }
                    for (var A = 0, B; (B = x[A]) != null; A++) {
                        if (B) {
                            if (C ^ (B.className && (" " + B.className + " ").replace(/[\t\n\r]/g, " ").indexOf(z) >= 0)) {
                                if (!y) {
                                    e.push(B)
                                }
                            } else {
                                if (y) {
                                    x[A] = false
                                }
                            }
                        }
                    }
                    return false
                }, ID: function (e) {
                    return e[1].replace(q, "")
                }, TAG: function (x, e) {
                    return x[1].replace(q, "").toLowerCase()
                }, CHILD: function (e) {
                    if (e[1] === "nth") {
                        if (!e[2]) {
                            d.error(e[0])
                        }
                        e[2] = e[2].replace(/^\+|\s*/g, "");
                        var x = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = (x[1] + (x[2] || 1)) - 0;
                        e[3] = x[3] - 0
                    } else {
                        if (e[2]) {
                            d.error(e[0])
                        }
                    }
                    e[0] = o++;
                    return e
                }, ATTR: function (A, x, y, e, B, C) {
                    var z = A[1] = A[1].replace(q, "");
                    if (!C && k.attrMap[z]) {
                        A[1] = k.attrMap[z]
                    }
                    A[4] = (A[4] || A[5] || "").replace(q, "");
                    if (A[2] === "~=") {
                        A[4] = " " + A[4] + " "
                    }
                    return A
                }, PSEUDO: function (A, x, y, e, B) {
                    if (A[1] === "not") {
                        if ((n.exec(A[3]) || "").length > 1 || /^\w/.test(A[3])) {
                            A[3] = d(A[3], null, null, x)
                        } else {
                            var z = d.filter(A[3], x, y, true ^ B);
                            if (!y) {
                                e.push.apply(e, z)
                            }
                            return false
                        }
                    } else {
                        if (k.match.POS.test(A[0]) || k.match.CHILD.test(A[0])) {
                            return true
                        }
                    }
                    return A
                }, POS: function (e) {
                    e.unshift(true);
                    return e
                }
            },
            filters: {
                enabled: function (e) {
                    return e.disabled === false && e.type !== "hidden"
                }, disabled: function (e) {
                    return e.disabled === true
                }, checked: function (e) {
                    return e.checked === true
                }, selected: function (e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                }, parent: function (e) {
                    return !!e.firstChild
                }, empty: function (e) {
                    return !e.firstChild
                }, has: function (y, x, e) {
                    return !!d(e[3], y).length
                }, header: function (e) {
                    return (/h\d/i).test(e.nodeName)
                }, text: function (y) {
                    var e = y.getAttribute("type"), x = y.type;
                    return y.nodeName.toLowerCase() === "input" && "text" === x && (e === x || e === null)
                }, radio: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "radio" === e.type
                }, checkbox: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
                }, file: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "file" === e.type
                }, password: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "password" === e.type
                }, submit: function (x) {
                    var e = x.nodeName.toLowerCase();
                    return (e === "input" || e === "button") && "submit" === x.type
                }, image: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "image" === e.type
                }, reset: function (x) {
                    var e = x.nodeName.toLowerCase();
                    return (e === "input" || e === "button") && "reset" === x.type
                }, button: function (x) {
                    var e = x.nodeName.toLowerCase();
                    return e === "input" && "button" === x.type || e === "button"
                }, input: function (e) {
                    return (/input|select|textarea|button/i).test(e.nodeName)
                }, focus: function (e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (x, e) {
                    return e === 0
                }, last: function (y, x, e, z) {
                    return x === z.length - 1
                }, even: function (x, e) {
                    return e % 2 === 0
                }, odd: function (x, e) {
                    return e % 2 === 1
                }, lt: function (y, x, e) {
                    return x < e[3] - 0
                }, gt: function (y, x, e) {
                    return x > e[3] - 0
                }, nth: function (y, x, e) {
                    return e[3] - 0 === x
                }, eq: function (y, x, e) {
                    return e[3] - 0 === x
                }
            },
            filter: {
                PSEUDO: function (y, D, C, E) {
                    var e = D[1], x = k.filters[e];
                    if (x) {
                        return x(y, C, D, E)
                    } else {
                        if (e === "contains") {
                            return (y.textContent || y.innerText || b([y]) || "").indexOf(D[3]) >= 0
                        } else {
                            if (e === "not") {
                                var z = D[3];
                                for (var B = 0, A = z.length; B < A; B++) {
                                    if (z[B] === y) {
                                        return false
                                    }
                                }
                                return true
                            } else {
                                d.error(e)
                            }
                        }
                    }
                }, CHILD: function (y, A) {
                    var z, G, C, F, e, B, E, D = A[1], x = y;
                    switch (D) {
                        case"only":
                        case"first":
                            while ((x = x.previousSibling)) {
                                if (x.nodeType === 1) {
                                    return false
                                }
                            }
                            if (D === "first") {
                                return true
                            }
                            x = y;
                        case"last":
                            while ((x = x.nextSibling)) {
                                if (x.nodeType === 1) {
                                    return false
                                }
                            }
                            return true;
                        case"nth":
                            z = A[2];
                            G = A[3];
                            if (z === 1 && G === 0) {
                                return true
                            }
                            C = A[0];
                            F = y.parentNode;
                            if (F && (F[i] !== C || !y.nodeIndex)) {
                                B = 0;
                                for (x = F.firstChild; x; x = x.nextSibling) {
                                    if (x.nodeType === 1) {
                                        x.nodeIndex = ++B
                                    }
                                }
                                F[i] = C
                            }
                            E = y.nodeIndex - G;
                            if (z === 0) {
                                return E === 0
                            } else {
                                return (E % z === 0 && E / z >= 0)
                            }
                    }
                }, ID: function (x, e) {
                    return x.nodeType === 1 && x.getAttribute("id") === e
                }, TAG: function (x, e) {
                    return (e === "*" && x.nodeType === 1) || !!x.nodeName && x.nodeName.toLowerCase() === e
                }, CLASS: function (x, e) {
                    return (" " + (x.className || x.getAttribute("class")) + " ").indexOf(e) > -1
                }, ATTR: function (B, z) {
                    var y = z[1],
                        e = d.attr ? d.attr(B, y) : k.attrHandle[y] ? k.attrHandle[y](B) : B[y] != null ? B[y] : B.getAttribute(y),
                        C = e + "", A = z[2], x = z[4];
                    return e == null ? A === "!=" : !A && d.attr ? e != null : A === "=" ? C === x : A === "*=" ? C.indexOf(x) >= 0 : A === "~=" ? (" " + C + " ").indexOf(x) >= 0 : !x ? C && e !== false : A === "!=" ? C !== x : A === "^=" ? C.indexOf(x) === 0 : A === "$=" ? C.substr(C.length - x.length) === x : A === "|=" ? C === x || C.substr(0, x.length + 1) === x + "-" : false
                }, POS: function (A, x, y, B) {
                    var e = x[2], z = k.setFilters[e];
                    if (z) {
                        return z(A, y, x, B)
                    }
                }
            }
        };
        var j = k.match.POS, c = function (x, e) {
            return "\\" + (e - 0 + 1)
        };
        for (var f in k.match) {
            k.match[f] = new RegExp(k.match[f].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
            k.leftMatch[f] = new RegExp(/(^(?:.|\r|\n)*?)/.source + k.match[f].source.replace(/\\(\d+)/g, c))
        }
        var l = function (x, e) {
            x = Array.prototype.slice.call(x, 0);
            if (e) {
                e.push.apply(e, x);
                return e
            }
            return x
        };
        try {
            Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType
        } catch (v) {
            l = function (A, z) {
                var y = 0, x = z || [];
                if (r.call(A) === "[object Array]") {
                    Array.prototype.push.apply(x, A)
                } else {
                    if (typeof A.length === "number") {
                        for (var e = A.length; y < e; y++) {
                            x.push(A[y])
                        }
                    } else {
                        for (; A[y]; y++) {
                            x.push(A[y])
                        }
                    }
                }
                return x
            }
        }
        var p, m;
        if (document.documentElement.compareDocumentPosition) {
            p = function (x, e) {
                if (x === e) {
                    h = true;
                    return 0
                }
                if (!x.compareDocumentPosition || !e.compareDocumentPosition) {
                    return x.compareDocumentPosition ? -1 : 1
                }
                return x.compareDocumentPosition(e) & 4 ? -1 : 1
            }
        } else {
            p = function (E, D) {
                if (E === D) {
                    h = true;
                    return 0
                } else {
                    if (E.sourceIndex && D.sourceIndex) {
                        return E.sourceIndex - D.sourceIndex
                    }
                }
                var B, x, y = [], e = [], A = E.parentNode, C = D.parentNode, F = A;
                if (A === C) {
                    return m(E, D)
                } else {
                    if (!A) {
                        return -1
                    } else {
                        if (!C) {
                            return 1
                        }
                    }
                }
                while (F) {
                    y.unshift(F);
                    F = F.parentNode
                }
                F = C;
                while (F) {
                    e.unshift(F);
                    F = F.parentNode
                }
                B = y.length;
                x = e.length;
                for (var z = 0; z < B && z < x; z++) {
                    if (y[z] !== e[z]) {
                        return m(y[z], e[z])
                    }
                }
                return z === B ? m(E, e[z], -1) : m(y[z], D, 1)
            };
            m = function (x, e, y) {
                if (x === e) {
                    return y
                }
                var z = x.nextSibling;
                while (z) {
                    if (z === e) {
                        return -1
                    }
                    z = z.nextSibling
                }
                return 1
            }
        }
        (function () {
            var x = document.createElement("div"), y = "script" + (new Date()).getTime(), e = document.documentElement;
            x.innerHTML = "<a name='" + y + "'/>";
            e.insertBefore(x, e.firstChild);
            if (document.getElementById(y)) {
                k.find.ID = function (A, B, C) {
                    if (typeof B.getElementById !== "undefined" && !C) {
                        var z = B.getElementById(A[1]);
                        return z ? z.id === A[1] || typeof z.getAttributeNode !== "undefined" && z.getAttributeNode("id").nodeValue === A[1] ? [z] : undefined : []
                    }
                };
                k.filter.ID = function (B, z) {
                    var A = typeof B.getAttributeNode !== "undefined" && B.getAttributeNode("id");
                    return B.nodeType === 1 && A && A.nodeValue === z
                }
            }
            e.removeChild(x);
            e = x = null
        })();
        (function () {
            var e = document.createElement("div");
            e.appendChild(document.createComment(""));
            if (e.getElementsByTagName("*").length > 0) {
                k.find.TAG = function (x, B) {
                    var A = B.getElementsByTagName(x[1]);
                    if (x[1] === "*") {
                        var z = [];
                        for (var y = 0; A[y]; y++) {
                            if (A[y].nodeType === 1) {
                                z.push(A[y])
                            }
                        }
                        A = z
                    }
                    return A
                }
            }
            e.innerHTML = "<a href='#'></a>";
            if (e.firstChild && typeof e.firstChild.getAttribute !== "undefined" && e.firstChild.getAttribute("href") !== "#") {
                k.attrHandle.href = function (x) {
                    return x.getAttribute("href", 2)
                }
            }
            e = null
        })();
        if (document.querySelectorAll) {
            (function () {
                var e = d, z = document.createElement("div"), y = "__sizzle__";
                z.innerHTML = "<p class='TEST'></p>";
                if (z.querySelectorAll && z.querySelectorAll(".TEST").length === 0) {
                    return
                }
                d = function (K, B, F, J) {
                    B = B || document;
                    if (!J && !d.isXML(B)) {
                        var I = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(K);
                        if (I && (B.nodeType === 1 || B.nodeType === 9)) {
                            if (I[1]) {
                                return l(B.getElementsByTagName(K), F)
                            } else {
                                if (I[2] && k.find.CLASS && B.getElementsByClassName) {
                                    return l(B.getElementsByClassName(I[2]), F)
                                }
                            }
                        }
                        if (B.nodeType === 9) {
                            if (K === "body" && B.body) {
                                return l([B.body], F)
                            } else {
                                if (I && I[3]) {
                                    var E = B.getElementById(I[3]);
                                    if (E && E.parentNode) {
                                        if (E.id === I[3]) {
                                            return l([E], F)
                                        }
                                    } else {
                                        return l([], F)
                                    }
                                }
                            }
                            try {
                                return l(B.querySelectorAll(K), F)
                            } catch (G) {
                            }
                        } else {
                            if (B.nodeType === 1 && B.nodeName.toLowerCase() !== "object") {
                                var C = B, D = B.getAttribute("id"), A = D || y, M = B.parentNode,
                                    L = /^\s*[+~]/.test(K);
                                if (!D) {
                                    B.setAttribute("id", A)
                                } else {
                                    A = A.replace(/'/g, "\\$&")
                                }
                                if (L && M) {
                                    B = B.parentNode
                                }
                                try {
                                    if (!L || M) {
                                        return l(B.querySelectorAll("[id='" + A + "'] " + K), F)
                                    }
                                } catch (H) {
                                } finally {
                                    if (!D) {
                                        C.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                    return e(K, B, F, J)
                };
                for (var x in e) {
                    d[x] = e[x]
                }
                z = null
            })()
        }
        (function () {
            var e = document.documentElement,
                y = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (y) {
                var A = !y.call(document.createElement("div"), "div"), x = false;
                try {
                    y.call(document.documentElement, "[test!='']:sizzle")
                } catch (z) {
                    x = true
                }
                d.matchesSelector = function (C, E) {
                    E = E.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!d.isXML(C)) {
                        try {
                            if (x || !k.match.PSEUDO.test(E) && !/!=/.test(E)) {
                                var B = y.call(C, E);
                                if (B || !A || C.document && C.document.nodeType !== 11) {
                                    return B
                                }
                            }
                        } catch (D) {
                        }
                    }
                    return d(E, null, null, [C]).length > 0
                }
            }
        })();
        (function () {
            var e = document.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) {
                return
            }
            e.lastChild.className = "e";
            if (e.getElementsByClassName("e").length === 1) {
                return
            }
            k.order.splice(1, 0, "CLASS");
            k.find.CLASS = function (x, y, z) {
                if (typeof y.getElementsByClassName !== "undefined" && !z) {
                    return y.getElementsByClassName(x[1])
                }
            };
            e = null
        })();

        function a(x, C, B, F, D, E) {
            for (var z = 0, y = F.length; z < y; z++) {
                var e = F[z];
                if (e) {
                    var A = false;
                    e = e[x];
                    while (e) {
                        if (e[i] === B) {
                            A = F[e.sizset];
                            break
                        }
                        if (e.nodeType === 1 && !E) {
                            e[i] = B;
                            e.sizset = z
                        }
                        if (e.nodeName.toLowerCase() === C) {
                            A = e;
                            break
                        }
                        e = e[x]
                    }
                    F[z] = A
                }
            }
        }

        function t(x, C, B, F, D, E) {
            for (var z = 0, y = F.length; z < y; z++) {
                var e = F[z];
                if (e) {
                    var A = false;
                    e = e[x];
                    while (e) {
                        if (e[i] === B) {
                            A = F[e.sizset];
                            break
                        }
                        if (e.nodeType === 1) {
                            if (!E) {
                                e[i] = B;
                                e.sizset = z
                            }
                            if (typeof C !== "string") {
                                if (e === C) {
                                    A = true;
                                    break
                                }
                            } else {
                                if (d.filter(C, [e]).length > 0) {
                                    A = e;
                                    break
                                }
                            }
                        }
                        e = e[x]
                    }
                    F[z] = A
                }
            }
        }

        if (document.documentElement.contains) {
            d.contains = function (x, e) {
                return x !== e && (x.contains ? x.contains(e) : true)
            }
        } else {
            if (document.documentElement.compareDocumentPosition) {
                d.contains = function (x, e) {
                    return !!(x.compareDocumentPosition(e) & 16)
                }
            } else {
                d.contains = function () {
                    return false
                }
            }
        }
        d.isXML = function (e) {
            var x = (e ? e.ownerDocument || e : 0).documentElement;
            return x ? x.nodeName !== "HTML" : false
        };
        var s = function (y, e, C) {
            var B, D = [], A = "", E = e.nodeType ? [e] : e;
            while ((B = k.match.PSEUDO.exec(y))) {
                A += B[0];
                y = y.replace(k.match.PSEUDO, "")
            }
            y = k.relative[y] ? y + "*" : y;
            for (var z = 0, x = E.length; z < x; z++) {
                d(y, E[z], D, C)
            }
            return d.filter(A, D)
        };
        baidu.dom.query = d
    })();
    baidu.dom.extend({
        removeClass: function (b) {
            if (arguments.length <= 0) {
                baidu.forEach(this, function (c) {
                    c.className = ""
                })
            }
            switch (typeof b) {
                case"string":
                    b = String(b).replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " ");
                    var a = b.split(" ");
                    baidu.forEach(this, function (d) {
                        var e = d.className;
                        for (var c = 0; c < a.length; c++) {
                            while ((" " + e + " ").indexOf(" " + a[c] + " ") >= 0) {
                                e = (" " + e + " ").replace(" " + a[c] + " ", " ")
                            }
                        }
                        d.className = e.replace(/^\s+/g, "").replace(/\s+$/g, "")
                    });
                    break;
                case"function":
                    baidu.forEach(this, function (e, c, d) {
                        baidu.dom(e).removeClass(b.call(e, c, e.className))
                    });
                    break
            }
            return this
        }
    });
    baidu.dom.extend({
        removeData: function () {
            var a = baidu.key, b = baidu.global("_maps_HTMLElementData");
            return function (c) {
                baidu.forEach(this, function (d) {
                    !d[a] && (d[a] = baidu.id())
                });
                baidu.forEach(this, function (e) {
                    var d = b[e[a]];
                    if (typeof c == "string") {
                        d && delete d[c]
                    } else {
                        if (baidu.type(c) == "array") {
                            baidu.forEach(c, function (f) {
                                d && delete d[f]
                            })
                        }
                    }
                });
                return this
            }
        }()
    });
    baidu.dom.extend({
        removeProp: function (c) {
            if (arguments.length <= 0 || !c || typeof c !== "string") {
                return this
            }
            var b = baidu.dom, a = baidu._util_;
            c = a.propFix[c] || c;
            baidu.forEach(this, function (d) {
                try {
                    d[c] = undefined;
                    delete d[c]
                } catch (f) {
                }
            });
            return this
        }
    });
    baidu.dom.removeStyle = function () {
        var b = document.createElement("DIV"), a, c = baidu.dom._g;
        if (b.style.removeProperty) {
            a = function (e, d) {
                e = c(e);
                e.style.removeProperty(d);
                return e
            }
        } else {
            if (b.style.removeAttribute) {
                a = function (e, d) {
                    e = c(e);
                    e.style.removeAttribute(baidu.string.toCamelCase(d));
                    return e
                }
            }
        }
        b = null;
        return a
    }();
    baidu.object.each = function (e, c) {
        var b, a, d;
        if ("function" == typeof c) {
            for (a in e) {
                if (e.hasOwnProperty(a)) {
                    d = e[a];
                    b = c.call(e, d, a);
                    if (b === false) {
                        break
                    }
                }
            }
        }
        return e
    };
    baidu.dom.extend({
        setStyles: function (b) {
            element = this[0];
            for (var a in b) {
                baidu.dom.setStyle(element, a, b[a])
            }
            return element
        }
    });
    baidu.dom._styleFilter[baidu.dom._styleFilter.length] = {
        set: function (a, b) {
            if (b.constructor == Number && !/zIndex|fontWeight|opacity|zoom|lineHeight/i.test(a)) {
                b = b + "px"
            }
            return b
        }
    };
    baidu.event.getTarget = function (a) {
        a.originalEvent && (a = a.originalEvent);
        return a.target || a.srcElement
    };
    baidu.dom.setBorderBoxSize = function (c, b) {
        var a = {};
        b.width && (a.width = parseFloat(b.width));
        b.height && (a.height = parseFloat(b.height));

        function d(f, e) {
            return parseFloat(baidu.dom.getStyle(f, e)) || 0
        }

        if (baidu.browser.isStrict) {
            if (b.width) {
                a.width = parseFloat(b.width) - d(c, "paddingLeft") - d(c, "paddingRight") - d(c, "borderLeftWidth") - d(c, "borderRightWidth");
                a.width < 0 && (a.width = 0)
            }
            if (b.height) {
                a.height = parseFloat(b.height) - d(c, "paddingTop") - d(c, "paddingBottom") - d(c, "borderTopWidth") - d(c, "borderBottomWidth");
                a.height < 0 && (a.height = 0)
            }
        }
        return baidu.dom.setStyles(c, a)
    };
    baidu.dom.setOuterHeight = baidu.dom.setBorderBoxHeight = function (b, a) {
        return baidu.dom.setBorderBoxSize(b, {height: a})
    };
    baidu.dom.setOuterWidth = baidu.dom.setBorderBoxWidth = function (a, b) {
        return baidu.dom.setBorderBoxSize(a, {width: b})
    };
    baidu.dom.resizable = function (d, g) {
        var z, m, i = {}, c, a = {}, r, x, u, b, e, k, o, s = false, j = false, v = {
            direction: ["e", "s", "se"],
            minWidth: 16,
            minHeight: 16,
            classPrefix: "tangram",
            directionHandlePosition: {}
        };
        if (!(z = baidu.dom.g(d)) && baidu.dom.getStyle(z, "position") == "static") {
            return false
        }
        b = z.offsetParent;
        var n = baidu.dom.getStyle(z, "position");
        m = baidu.extend(v, g);
        baidu.forEach(["minHeight", "minWidth", "maxHeight", "maxWidth"], function (A) {
            m[A] && (m[A] = parseFloat(m[A]))
        });
        r = [m.minWidth || 0, m.maxWidth || Number.MAX_VALUE, m.minHeight || 0, m.maxHeight || Number.MAX_VALUE];
        y();

        function y() {
            k = baidu.extend({
                "e": {"right": "-5px", "top": "0px", "width": "7px", "height": z.offsetHeight},
                "s": {"left": "0px", "bottom": "-5px", "height": "7px", "width": z.offsetWidth},
                "n": {"left": "0px", "top": "-5px", "height": "7px", "width": z.offsetWidth},
                "w": {"left": "-5px", "top": "0px", "height": z.offsetHeight, "width": "7px"},
                "se": {"right": "1px", "bottom": "1px", "height": "16px", "width": "16px"},
                "sw": {"left": "1px", "bottom": "1px", "height": "16px", "width": "16px"},
                "ne": {"right": "1px", "top": "1px", "height": "16px", "width": "16px"},
                "nw": {"left": "1px", "top": "1px", "height": "16px", "width": "16px"}
            }, m.directionHandlePosition);
            baidu.forEach(m.direction, function (A) {
                var B = m.classPrefix.split(" ");
                B[0] = B[0] + "-resizable-" + A;
                var D = baidu.dom.create("div", {className: B.join(" ")}), C = k[A];
                C["cursor"] = A + "-resize";
                C["position"] = "absolute";
                baidu.dom.setStyles(D, C);
                D.key = A;
                D.style.MozUserSelect = "none";
                z.appendChild(D);
                i[A] = D;
                baidu.dom(D).on("mousedown", h)
            });
            s = false
        }

        function f() {
            e && t();
            baidu.object.each(i, function (A) {
                baidu.dom(A).off("mousedown", h);
                baidu.dom.remove(A)
            });
            s = true
        }

        function l(A) {
            if (!s) {
                m = baidu.extend(m, A || {});
                f();
                y()
            }
        }

        function h(C) {
            j && t();
            var B = baidu.event.getTarget(C), A = B.key;
            e = B;
            j = true;
            if (B.setCapture) {
                B.setCapture()
            } else {
                if (window.captureEvents) {
                    window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP)
                }
            }
            u = baidu.dom.getStyle(document.body, "cursor");
            baidu.dom.setStyle(document.body, "cursor", A + "-resize");
            var E = baidu.dom(document.body);
            E.on("mouseup", t);
            E.on("selectstart", p);
            x = document.body.style.MozUserSelect;
            document.body.style.MozUserSelect = "none";
            var D = baidu.page.getMousePosition();
            a = q();
            o = setInterval(function () {
                w(A, D)
            }, 20);
            baidu.isFunction(m.onresizestart) && m.onresizestart();
            baidu.event.preventDefault(C)
        }

        function t() {
            if (e && e.releaseCapture) {
                e.releaseCapture()
            } else {
                if (window.releaseEvents) {
                    window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP)
                }
            }
            baidu.dom(document.body).off("mouseup", t);
            baidu.dom(document).off("selectstart", p);
            document.body.style.MozUserSelect = x;
            baidu.dom(document.body).off("selectstart", p);
            clearInterval(o);
            baidu.dom.setStyle(document.body, "cursor", u);
            e = null;
            j = false;
            baidu.isFunction(m.onresizeend) && m.onresizeend()
        }

        function w(B, H) {
            var G = baidu.page.getMousePosition(), C = a["width"], A = a["height"], F = a["top"], E = a["left"], D;
            if (B.indexOf("e") >= 0) {
                C = Math.max(G.x - H.x + a["width"], r[0]);
                C = Math.min(C, r[1])
            } else {
                if (B.indexOf("w") >= 0) {
                    C = Math.max(H.x - G.x + a["width"], r[0]);
                    C = Math.min(C, r[1]);
                    E -= C - a["width"]
                }
            }
            if (B.indexOf("s") >= 0) {
                A = Math.max(G.y - H.y + a["height"], r[2]);
                A = Math.min(A, r[3])
            } else {
                if (B.indexOf("n") >= 0) {
                    A = Math.max(H.y - G.y + a["height"], r[2]);
                    A = Math.min(A, r[3]);
                    F -= A - a["height"]
                }
            }
            D = {"width": C, "height": A, "top": F, "left": E};
            baidu.dom.setOuterHeight(z, A);
            baidu.dom.setOuterWidth(z, C);
            baidu.dom.setStyles(z, {"top": F, "left": E});
            i["n"] && baidu.dom.setStyle(i["n"], "width", C);
            i["s"] && baidu.dom.setStyle(i["s"], "width", C);
            i["e"] && baidu.dom.setStyle(i["e"], "height", A);
            i["w"] && baidu.dom.setStyle(i["w"], "height", A);
            baidu.isFunction(m.onresize) && m.onresize({current: D, original: a})
        }

        function p(A) {
            return baidu.event.preventDefault(A, false)
        }

        function q() {
            var A = baidu.dom.getPosition(z.offsetParent), B = baidu.dom.getPosition(z), D, C;
            if (n == "absolute") {
                D = B.top - (z.offsetParent == document.body ? 0 : A.top);
                C = B.left - (z.offsetParent == document.body ? 0 : A.left)
            } else {
                D = parseFloat(baidu.dom.getStyle(z, "top")) || -parseFloat(baidu.dom.getStyle(z, "bottom")) || 0;
                C = parseFloat(baidu.dom.getStyle(z, "left")) || -parseFloat(baidu.dom.getStyle(z, "right")) || 0
            }
            baidu.dom.setStyles(z, {top: D, left: C});
            return {width: z.offsetWidth, height: z.offsetHeight, top: D, left: C}
        }

        return {cancel: f, update: l, enable: y}
    };
    baidu._util_.smartScroll = function (d) {
        var a = {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}[d], e = d === "scrollLeft", b = {};

        function f(g) {
            return g && g.nodeType === 9
        }

        function c(g) {
            return baidu.type(g) == "Window" ? g : f(g) ? g.defaultView || g.parentWindow : false
        }

        return {
            get: function (g) {
                var h = c(g);
                return h ? (a in h) ? h[a] : baidu.browser.isStrict && h.document.documentElement[d] || h.document.body[d] : g[d]
            }, set: function (g, i) {
                if (!g) {
                    return
                }
                var h = c(g);
                h ? h.scrollTo(e ? i : this.get(g), !e ? i : this.get(g)) : g[d] = i
            }
        }
    };
    baidu.dom.extend({
        scrollLeft: function () {
            var a = baidu._util_.smartScroll("scrollLeft");
            return function (b) {
                b && baidu.check("^(?:number|string)$", "baidu.dom.scrollLeft");
                if (this.size() <= 0) {
                    return b === undefined ? 0 : this
                }
                return b === undefined ? a.get(this[0]) : a.set(this[0], b) || this
            }
        }()
    });
    baidu.dom.extend({
        scrollTop: function () {
            var a = baidu._util_.smartScroll("scrollTop");
            return function (b) {
                b && baidu.check("^(?:number|string)$", "baidu.dom.scrollTop");
                if (this.size() <= 0) {
                    return b === undefined ? 0 : this
                }
                return b === undefined ? a.get(this[0]) : a.set(this[0], b) || this
            }
        }()
    });
    baidu.dom.extend({
        setAttrs: function (a) {
            element = this[0];
            for (var b in a) {
                baidu.dom.setAttr(element, b, a[b])
            }
            return element
        }
    });
    baidu.dom.setPixel = function (b, a, c) {
        typeof c != "undefined" && (baidu.dom.g(b).style[a] = c + (!isNaN(c) ? "px" : ""))
    };
    baidu.dom.setPosition = function (d, a) {
        var c = {
            left: a.left - (parseFloat(baidu.dom.getStyle(d, "margin-left")) || 0),
            top: a.top - (parseFloat(baidu.dom.getStyle(d, "margin-top")) || 0)
        };
        d = baidu.dom.g(d);
        for (var b in c) {
            baidu.dom.setStyle(d, b, c[b])
        }
        return d
    };
    baidu.dom.extend({
        show: function () {
            baidu._util_.showHide(this, true);
            return this
        }
    });
    baidu.dom.extend({
        siblings: function (a) {
            var b = [];
            baidu.forEach(this, function (e) {
                var d = [], f = [], c = e;
                while (c = c.previousSibling) {
                    c.nodeType == 1 && d.push(c)
                }
                while (e = e.nextSibling) {
                    e.nodeType == 1 && f.push(e)
                }
                baidu.merge(b, d.reverse().concat(f))
            });
            return baidu.dom(baidu.dom.match(b, a))
        }
    });
    baidu.dom.extend({
        slice: function () {
            var a = Array.prototype.slice;
            return function (c, b) {
                baidu.check("number(,number)?", "baidu.dom.slice");
                return baidu.dom(a.apply(this, arguments))
            }
        }()
    });
    baidu.dom.toggle = function (a) {
        a = baidu.dom.g(a);
        a.style.display = a.style.display == "none" ? "" : "none";
        return a
    };
    baidu.dom.extend({
        toggleClass: function (d, b) {
            var c = typeof d;
            var b = (typeof b === "undefined") ? b : Boolean(b);
            if (arguments.length <= 0) {
                baidu.forEach(this, function (e) {
                    e.className = ""
                })
            }
            switch (typeof d) {
                case"string":
                    d = d.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " ");
                    var a = d.split(" ");
                    baidu.forEach(this, function (f) {
                        var g = f.className;
                        for (var e = 0; e < a.length; e++) {
                            if (((" " + g + " ").indexOf(" " + a[e] + " ") > -1) && (typeof b === "undefined")) {
                                g = (" " + g + " ").replace(" " + a[e] + " ", " ")
                            } else {
                                if (((" " + g + " ").indexOf(" " + a[e] + " ") === -1) && (typeof b === "undefined")) {
                                    g += " " + a[e]
                                } else {
                                    if (((" " + g + " ").indexOf(" " + a[e] + " ") === -1) && (b === true)) {
                                        g += " " + a[e]
                                    } else {
                                        if (((" " + g + " ").indexOf(" " + a[e] + " ") > -1) && (b === false)) {
                                            g = g.replace(a[e], "")
                                        }
                                    }
                                }
                            }
                        }
                        f.className = g.replace(/^\s+/g, "").replace(/\s+$/g, "")
                    });
                    break;
                case"function":
                    baidu.forEach(this, function (f, e) {
                        baidu.dom(f).toggleClass(d.call(f, e, f.className), b)
                    });
                    break
            }
            return this
        }
    });
    baidu.dom.toggleClass = function (a, b) {
        if (baidu.dom.hasClass(a, b)) {
            baidu.dom.removeClass(a, b)
        } else {
            baidu.dom.addClass(a, b)
        }
    };
    baidu.dom.extend({
        trigger: function () {
            var i = baidu._util_.eventBase;
            var a = /msie/i.test(navigator.userAgent);
            var p = {keydown: 1, keyup: 1, keypress: 1};
            var b = {
                click: 1,
                dblclick: 1,
                mousedown: 1,
                mousemove: 1,
                mouseup: 1,
                mouseover: 1,
                mouseout: 1,
                mouseenter: 1,
                mouseleave: 1,
                contextmenu: 1
            };
            var l = {
                abort: 1,
                blur: 1,
                change: 1,
                error: 1,
                focus: 1,
                focusin: 1,
                focusout: 1,
                load: 1,
                unload: 1,
                reset: 1,
                resize: 1,
                scroll: 1,
                select: 1,
                submit: 1
            };
            var j = {scroll: 1, resize: 1, reset: 1, submit: 1, change: 1, select: 1, error: 1, abort: 1};
            var f = {submit: 1};
            var o = {
                "KeyEvents": ["bubbles", "cancelable", "view", "ctrlKey", "altKey", "shiftKey", "metaKey", "keyCode", "charCode"],
                "MouseEvents": ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget"],
                "HTMLEvents": ["bubbles", "cancelable"],
                "UIEvents": ["bubbles", "cancelable", "view", "detail"],
                "Events": ["bubbles", "cancelable"]
            };
            baidu.extend(j, p);
            baidu.extend(j, b);
            var h = function (r) {
                return r.replace(/^\w/, function (t) {
                    return t.toUpperCase()
                })
            };
            var m = function (u) {
                var r = [], t = 0, s;
                for (s in u) {
                    if (u.hasOwnProperty(s)) {
                        r[t++] = u[s]
                    }
                }
                return r
            };
            var e = function (v, t) {
                var s = 0, r = v.length, u = {};
                for (; s < r; s++) {
                    u[v[s]] = t[v[s]];
                    delete t[v[s]]
                }
                return u
            };
            var g = function (t, s, r) {
                r = baidu.extend({}, r);
                var u = m(e(o[s], r)), v = document.createEvent(s);
                u.unshift(t);
                switch (s) {
                    case"KeyEvents":
                        v.initKeyEvent.apply(v, u);
                        break;
                    case"MouseEvents":
                        v.initMouseEvent.apply(v, u);
                        break;
                    case"UIEvents":
                        v.initUIEvent.apply(v, u);
                        break;
                    default:
                        v.initEvent.apply(v, u);
                        break
                }
                if (r.triggerData) {
                    v.triggerData = r.triggerData
                }
                baidu.extend(v, r);
                return v
            };
            var d = function (r) {
                var s;
                if (document.createEventObject) {
                    s = document.createEventObject();
                    baidu.extend(s, r)
                }
                return s
            };
            var k = function (s, r) {
                r = e(o["KeyEvents"], r);
                var u;
                if (document.createEvent) {
                    try {
                        u = g(s, "KeyEvents", r)
                    } catch (t) {
                        try {
                            u = g(s, "Events", r)
                        } catch (t) {
                            u = g(s, "UIEvents", r)
                        }
                    }
                } else {
                    r.keyCode = r.charCode > 0 ? r.charCode : r.keyCode;
                    u = d(r)
                }
                return u
            };
            var q = function (s, r) {
                r = e(o["MouseEvents"], r);
                var t;
                if (document.createEvent) {
                    t = g(s, "MouseEvents", r);
                    if (r.relatedTarget && !t.relatedTarget) {
                        if ("mouseout" == s.toLowerCase()) {
                            t.toElement = r.relatedTarget
                        } else {
                            if ("mouseover" == s.toLowerCase()) {
                                t.fromElement = r.relatedTarget
                            }
                        }
                    }
                } else {
                    r.button = r.button == 0 ? 1 : r.button == 1 ? 4 : baidu.lang.isNumber(r.button) ? r.button : 0;
                    t = d(r)
                }
                return t
            };
            var n = function (s, r) {
                r.bubbles = j.hasOwnProperty(s);
                r = e(o["HTMLEvents"], r);
                var u;
                if (document.createEvent) {
                    try {
                        u = g(s, "HTMLEvents", r)
                    } catch (t) {
                        try {
                            u = g(s, "UIEvents", r)
                        } catch (t) {
                            u = g(s, "Events", r)
                        }
                    }
                } else {
                    u = d(r)
                }
                return u
            };
            var c = function (s, u, t) {
                var w;
                var w = {
                    bubbles: true,
                    cancelable: true,
                    view: window,
                    detail: 1,
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    ctrlKey: false,
                    altKey: false,
                    shiftKey: false,
                    metaKey: false,
                    keyCode: 0,
                    charCode: 0,
                    button: 0,
                    relatedTarget: null
                };
                if (p[u]) {
                    w = k(u, w)
                } else {
                    if (b[u]) {
                        w = q(u, w)
                    } else {
                        if (l[u]) {
                            w = n(u, w)
                        } else {
                            return baidu(s).triggerHandler(u, t)
                        }
                    }
                }
                if (w) {
                    if (t) {
                        w.triggerData = t
                    }
                    var r;
                    if (s.dispatchEvent) {
                        r = s.dispatchEvent(w)
                    } else {
                        if (s.fireEvent) {
                            r = s.fireEvent("on" + u, w)
                        }
                    }
                    if (r !== false && f[u]) {
                        try {
                            if (s[u]) {
                                s[u]()
                            } else {
                                if (u = h(u), s[u]) {
                                    s[u]()
                                }
                            }
                        } catch (v) {
                        }
                    }
                }
            };
            return function (s, r) {
                this.each(function () {
                    c(this, s, r)
                });
                return this
            }
        }()
    });
    baidu.dom.extend({
        unbind: function (b, a) {
            return this.off(b, a)
        }
    });
    baidu.dom.extend({
        undelegate: function (a, c, b) {
            return this.off(c, a, b)
        }
    });
    baidu.dom.extend({
        unique: function (a) {
            return baidu.dom(baidu.array(this.toArray()).unique(a))
        }
    });
    baidu.dom._matchNode = function (a, c, d) {
        a = baidu.dom.g(a);
        for (var b = a[d]; b; b = b[c]) {
            if (b.nodeType == 1) {
                return b
            }
        }
        return null
    };
    baidu.dom._styleFilter[baidu.dom._styleFilter.length] = {
        get: function (c, d) {
            if (/color/i.test(c) && d.indexOf("rgb(") != -1) {
                var e = d.split(",");
                d = "#";
                for (var b = 0, a; a = e[b]; b++) {
                    a = parseInt(a.replace(/[^\d]/gi, ""), 10).toString(16);
                    d += a.length == 1 ? "0" + a : a
                }
                d = d.toUpperCase()
            }
            return d
        }
    };
    baidu.dom._styleFixer.display = baidu.browser.ie && baidu.browser.ie < 8 ? {
        set: function (a, b) {
            a = a.style;
            if (b == "inline-block") {
                a.display = "inline";
                a.zoom = 1
            } else {
                a.display = b
            }
        }
    } : baidu.browser.firefox && baidu.browser.firefox < 3 ? {
        set: function (a, b) {
            a.style.display = b == "inline-block" ? "-moz-inline-box" : b
        }
    } : null;
    baidu.dom._styleFixer["float"] = baidu.browser.ie ? "styleFloat" : "cssFloat";
    baidu.dom._styleFixer.opacity = baidu.browser.ie ? {
        get: function (a) {
            var b = a.style.filter;
            return b && b.indexOf("opacity=") >= 0 ? (parseFloat(b.match(/opacity=([^)]*)/)[1]) / 100) + "" : "1"
        }, set: function (a, c) {
            var b = a.style;
            b.filter = (b.filter || "").replace(/alpha\([^\)]*\)/gi, "") + (c == 1 ? "" : "alpha(opacity=" + c * 100 + ")");
            b.zoom = 1
        }
    } : null;
    baidu.dom._styleFixer.width = baidu.dom._styleFixer.height = {
        get: function (b, a, c) {
            var a = a.replace(/^[a-z]/, function (e) {
                return e.toUpperCase()
            }), d = b["client" + a] || b["offset" + a];
            return d > 0 ? d + "px" : !c || c == "auto" ? 0 + "px" : d
        }, set: function (b, c, a) {
            b.style[a] = c
        }
    };
    baidu.dom._styleFixer.textOverflow = (function () {
        var b = {};

        function a(e) {
            var f = e.length;
            if (f > 0) {
                f = e[f - 1];
                e.length--
            } else {
                f = null
            }
            return f
        }

        function c(e, f) {
            e[baidu.browser.firefox ? "textContent" : "innerText"] = f
        }

        function d(m, h, s) {
            var k = baidu.browser.ie ? m.currentStyle || m.style : getComputedStyle(m, null), r = k.fontWeight,
                q = "font-family:" + k.fontFamily + ";font-size:" + k.fontSize + ";word-spacing:" + k.wordSpacing + ";font-weight:" + ((parseInt(r) || 0) == 401 ? 700 : r) + ";font-style:" + k.fontStyle + ";font-variant:" + k.fontVariant,
                e = b[q];
            if (!e) {
                k = m.appendChild(document.createElement("div"));
                k.style.cssText = "float:left;" + q;
                e = b[q] = [];
                for (var n = 0; n < 256; n++) {
                    n == 32 ? (k.innerHTML = "&nbsp;") : c(k, String.fromCharCode(n));
                    e[n] = k.offsetWidth
                }
                c(k, "\u4e00");
                e[256] = k.offsetWidth;
                c(k, "\u4e00\u4e00");
                e[257] = k.offsetWidth - e[256] * 2;
                e[258] = e[".".charCodeAt(0)] * 3 + e[257] * 3;
                m.removeChild(k)
            }
            for (var l = m.firstChild, p = e[256], g = e[257], f = e[258], u = [], s = s ? f : 0; l; l = l.nextSibling) {
                if (h < s) {
                    m.removeChild(l)
                } else {
                    if (l.nodeType == 3) {
                        for (var n = 0, t = l.nodeValue, j = t.length; n < j; n++) {
                            k = t.charCodeAt(n);
                            u[u.length] = [h, l, n];
                            h -= (n ? g : 0) + (k < 256 ? e[k] : p);
                            if (h < s) {
                                break
                            }
                        }
                    } else {
                        k = l.tagName;
                        if (k == "IMG" || k == "TABLE") {
                            k = l;
                            l = l.previousSibling;
                            m.removeChild(k)
                        } else {
                            u[u.length] = [h, l];
                            h -= l.offsetWidth
                        }
                    }
                }
            }
            if (h < s) {
                while (k = a(u)) {
                    h = k[0];
                    l = k[1];
                    k = k[2];
                    if (l.nodeType == 3) {
                        if (h >= f) {
                            l.nodeValue = l.nodeValue.substring(0, k) + "...";
                            return true
                        } else {
                            if (!k) {
                                m.removeChild(l)
                            }
                        }
                    } else {
                        if (d(l, h, true)) {
                            return true
                        } else {
                            m.removeChild(l)
                        }
                    }
                }
                m.innerHTML = ""
            }
        }

        return {
            get: function (g) {
                var f = baidu.browser, e = dom.getStyle;
                return (f.opera ? e("OTextOverflow") : f.firefox ? g._baiduOverflow : e("textOverflow")) || "clip"
            }, set: function (f, h) {
                var e = baidu.browser;
                if (f.tagName == "TD" || f.tagName == "TH" || e.firefox) {
                    f._baiduHTML && (f.innerHTML = f._baiduHTML);
                    if (h == "ellipsis") {
                        f._baiduHTML = f.innerHTML;
                        var i = document.createElement("div"), g = f.appendChild(i).offsetWidth;
                        f.removeChild(i);
                        d(f, g)
                    } else {
                        f._baiduHTML = ""
                    }
                }
                i = f.style;
                e.opera ? (i.OTextOverflow = h) : e.firefox ? (f._baiduOverflow = h) : (i.textOverflow = h)
            }
        }
    })();
    baidu.lang.isArray = baidu.isArray;
    baidu.lang.toArray = function (b) {
        if (b === null || b === undefined) {
            return []
        }
        if (baidu.lang.isArray(b)) {
            return b
        }
        if (typeof b.length !== "number" || typeof b === "string" || baidu.lang.isFunction(b)) {
            return [b]
        }
        if (b.item) {
            var a = b.length, c = new Array(a);
            while (a--) {
                c[a] = b[a]
            }
            return c
        }
        return [].slice.call(b)
    };
    baidu.fn.extend({
        methodize: function (a) {
            var b = this.fn;
            return function () {
                return b.apply(this, [(a ? this[a] : this)].concat([].slice.call(arguments)))
            }
        }
    });
    baidu.fn.extend({
        wrapReturnValue: function (c, b) {
            var a = this.fn;
            b = b | 0;
            return function () {
                var d = a.apply(this, arguments);
                if (!b) {
                    return new c(d)
                }
                if (b > 0) {
                    return new c(arguments[b - 1])
                }
                return d
            }
        }
    });
    baidu.fn.wrapReturnValue = function (a, c, b) {
        return baidu.fn(a).wrapReturnValue(c, b)
    };
    baidu.fn.extend({
        multize: function (b, a) {
            var d = this.fn;

            function c() {
                var l = arguments[0], h = b ? c : d, f = [], k = Array.prototype.slice.call(arguments, 0), e;
                if (l instanceof Array) {
                    for (var g = 0, j; j = l[g]; g++) {
                        k[0] = j;
                        e = h.apply(this, k);
                        if (a) {
                            e && (f = f.concat(e))
                        } else {
                            f.push(e)
                        }
                    }
                    return f
                } else {
                    return d.apply(this, arguments)
                }
            }

            return c
        }
    });
    baidu.fn.multize = function (c, b, a) {
        return baidu.fn(c).multize(b, a)
    };
    baidu.element = function (b) {
        var a = baidu.dom._g(b);
        if (!a && baidu.dom.query) {
            a = baidu.dom.query(b)
        }
        return new baidu.element.Element(a)
    };
    baidu.element.Element = function (a) {
        if (!baidu.element._init) {
            baidu.element._makeChain();
            baidu.element._init = true
        }
        this._dom = (a.tagName || "").toLowerCase() == "select" ? [a] : baidu.lang.toArray(a)
    };
    baidu.element._toChainFunction = function (c, b, a) {
        return baidu.fn.methodize(baidu.fn.wrapReturnValue(baidu.fn.multize(c, 0, 1), baidu.element.Element, b), "_dom")
    };
    baidu.element._makeChain = function () {
        var b = baidu.element.Element.prototype, c = baidu.element._toChainFunction;
        baidu.forEach(("draggable droppable resizable fixable").split(" "), function (d) {
            b[d] = c(baidu.dom[d], 1)
        });
        baidu.forEach(("remove getText contains getAttr getPosition getStyle hasClass intersect hasAttr getComputedStyle").split(" "), function (d) {
            b[d] = b[d.replace(/^get[A-Z]/g, a)] = c(baidu.dom[d], -1)
        });
        baidu.forEach(("addClass empty hide show insertAfter insertBefore insertHTML removeClass " + "setAttr setAttrs setStyle setStyles show toggleClass toggle next first " + "getAncestorByClass getAncestorBy getAncestorByTag getDocument getParent getWindow " + "last next prev g removeStyle setBorderBoxSize setOuterWidth setOuterHeight " + "setBorderBoxWidth setBorderBoxHeight setPosition children query").split(" "), function (d) {
            b[d] = b[d.replace(/^get[A-Z]/g, a)] = c(baidu.dom[d], 0)
        });
        b["q"] = b["Q"] = c(function (e, d) {
            return baidu.dom.q.apply(this, [d, e].concat([].slice.call(arguments, 2)))
        }, 0);
        baidu.forEach(("on un").split(" "), function (d) {
            b[d] = c(baidu.event[d], 0)
        });
        baidu.forEach(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error").split(" "), function (d) {
            b[d] = function (e) {
                return this.on(d, e)
            }
        });

        function a(d) {
            return d.charAt(3).toLowerCase()
        }
    };
    baidu.element.extend = function (a) {
        var b = baidu.element;
        baidu.object.each(a, function (d, c) {
            b.Element.prototype[c] = baidu.element._toChainFunction(d, -1)
        })
    };
    baidu.event.EventArg = function (c, e) {
        e = e || window;
        c = c || e.event;
        var d = e.document;
        this.target = (c.target) || c.srcElement;
        this.keyCode = c.which || c.keyCode;
        for (var a in c) {
            var b = c[a];
            if ("function" != typeof b) {
                this[a] = b
            }
        }
        if (!this.pageX && this.pageX !== 0) {
            this.pageX = (c.clientX || 0) + (d.documentElement.scrollLeft || d.body.scrollLeft);
            this.pageY = (c.clientY || 0) + (d.documentElement.scrollTop || d.body.scrollTop)
        }
        this._event = c
    };
    baidu.event.EventArg.prototype.preventDefault = function () {
        if (this._event.preventDefault) {
            this._event.preventDefault()
        } else {
            this._event.returnValue = false
        }
        return this
    };
    baidu.event.EventArg.prototype.stopPropagation = function () {
        if (this._event.stopPropagation) {
            this._event.stopPropagation()
        } else {
            this._event.cancelBubble = true
        }
        return this
    };
    baidu.event.EventArg.prototype.stop = function () {
        return this.stopPropagation().preventDefault()
    };
    baidu.object.values = function (d) {
        var a = [], c = 0, b;
        for (b in d) {
            if (d.hasOwnProperty(b)) {
                a[c++] = d[b]
            }
        }
        return a
    };
    baidu.lang.isNumber = baidu.isNumber;
    baidu.event.fire = function () {
        var d = baidu.browser, k = {keydown: 1, keyup: 1, keypress: 1},
            a = {click: 1, dblclick: 1, mousedown: 1, mousemove: 1, mouseup: 1, mouseover: 1, mouseout: 1}, h = {
                abort: 1,
                blur: 1,
                change: 1,
                error: 1,
                focus: 1,
                load: d.ie ? 0 : 1,
                reset: 1,
                resize: 1,
                scroll: 1,
                select: 1,
                submit: 1,
                unload: d.ie ? 0 : 1
            }, f = {scroll: 1, resize: 1, reset: 1, submit: 1, change: 1, select: 1, error: 1, abort: 1}, j = {
                "KeyEvents": ["bubbles", "cancelable", "view", "ctrlKey", "altKey", "shiftKey", "metaKey", "keyCode", "charCode"],
                "MouseEvents": ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget"],
                "HTMLEvents": ["bubbles", "cancelable"],
                "UIEvents": ["bubbles", "cancelable", "view", "detail"],
                "Events": ["bubbles", "cancelable"]
            };
        baidu.object.extend(f, k);
        baidu.object.extend(f, a);

        function c(q, o) {
            var n = 0, m = q.length, p = {};
            for (; n < m; n++) {
                p[q[n]] = o[q[n]];
                delete o[q[n]]
            }
            return p
        }

        function e(o, n, m) {
            m = baidu.object.extend({}, m);
            var p = baidu.object.values(c(j[n], m)), q = document.createEvent(n);
            p.unshift(o);
            if ("KeyEvents" == n) {
                q.initKeyEvent.apply(q, p)
            } else {
                if ("MouseEvents" == n) {
                    q.initMouseEvent.apply(q, p)
                } else {
                    if ("UIEvents" == n) {
                        q.initUIEvent.apply(q, p)
                    } else {
                        q.initEvent.apply(q, p)
                    }
                }
            }
            baidu.object.extend(q, m);
            return q
        }

        function b(m) {
            var n;
            if (document.createEventObject) {
                n = document.createEventObject();
                baidu.object.extend(n, m)
            }
            return n
        }

        function g(p, m) {
            m = c(j["KeyEvents"], m);
            var q;
            if (document.createEvent) {
                try {
                    q = e(p, "KeyEvents", m)
                } catch (o) {
                    try {
                        q = e(p, "Events", m)
                    } catch (n) {
                        q = e(p, "UIEvents", m)
                    }
                }
            } else {
                m.keyCode = m.charCode > 0 ? m.charCode : m.keyCode;
                q = b(m)
            }
            return q
        }

        function l(n, m) {
            m = c(j["MouseEvents"], m);
            var o;
            if (document.createEvent) {
                o = e(n, "MouseEvents", m);
                if (m.relatedTarget && !o.relatedTarget) {
                    if ("mouseout" == n.toLowerCase()) {
                        o.toElement = m.relatedTarget
                    } else {
                        if ("mouseover" == n.toLowerCase()) {
                            o.fromElement = m.relatedTarget
                        }
                    }
                }
            } else {
                m.button = m.button == 0 ? 1 : m.button == 1 ? 4 : baidu.lang.isNumber(m.button) ? m.button : 0;
                o = b(m)
            }
            return o
        }

        function i(o, m) {
            m.bubbles = f.hasOwnProperty(o);
            m = c(j["HTMLEvents"], m);
            var q;
            if (document.createEvent) {
                try {
                    q = e(o, "HTMLEvents", m)
                } catch (p) {
                    try {
                        q = e(o, "UIEvents", m)
                    } catch (n) {
                        q = e(o, "Events", m)
                    }
                }
            } else {
                q = b(m)
            }
            return q
        }

        return function (n, o, m) {
            var p;
            o = o.replace(/^on/i, "");
            n = baidu.dom._g(n);
            m = baidu.object.extend({
                bubbles: true,
                cancelable: true,
                view: window,
                detail: 1,
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                ctrlKey: false,
                altKey: false,
                shiftKey: false,
                metaKey: false,
                keyCode: 0,
                charCode: 0,
                button: 0,
                relatedTarget: null
            }, m);
            if (k[o]) {
                p = g(o, m)
            } else {
                if (a[o]) {
                    p = l(o, m)
                } else {
                    if (h[o]) {
                        p = i(o, m)
                    } else {
                        throw (new Error(o + " is not support!"))
                    }
                }
            }
            if (p) {
                if (n.dispatchEvent) {
                    n.dispatchEvent(p)
                } else {
                    if (n.fireEvent) {
                        n.fireEvent("on" + o, p)
                    }
                }
            }
        }
    }();
    baidu.event.get = function (a, b) {
        return new baidu.event.EventArg(a, b)
    };
    baidu.event.getEvent = function (b) {
        if (window.event) {
            return window.event
        } else {
            var c = arguments.callee, a;
            do {
                a = c.arguments[0];
                if (a && (/Event/.test(a) || a.originalEvent)) {
                    return a.originalEvent || a
                }
            } while (c = c.caller);
            return null
        }
    };
    baidu.event.getKeyCode = function (a) {
        a.originalEvent && (a = a.originalEvent);
        return a.which || a.keyCode
    };
    baidu.event.getPageX = function (b) {
        b.originalEvent && (b = b.originalEvent);
        var a = b.pageX, c = document;
        if (!a && a !== 0) {
            a = (b.clientX || 0) + (c.documentElement.scrollLeft || c.body.scrollLeft)
        }
        return a
    };
    baidu.event.getPageY = function (b) {
        b.originalEvent && (b = b.originalEvent);
        var a = b.pageY, c = document;
        if (!a && a !== 0) {
            a = (b.clientY || 0) + (c.documentElement.scrollTop || c.body.scrollTop)
        }
        return a
    };
    baidu.event.once = function (a, b, c) {
        return baidu.dom(baidu.dom._g(a)).one(b, c)[0]
    };
    baidu.event.stopPropagation = function (a) {
        a.originalEvent && (a = a.originalEvent);
        if (a.stopPropagation) {
            a.stopPropagation()
        } else {
            a.cancelBubble = true
        }
    };
    baidu.event.stop = function (a) {
        a.originalEvent && (a = a.originalEvent);
        baidu.event.stopPropagation(a);
        baidu.event.preventDefault(a)
    };
    baidu.fn.abstractMethod = function () {
        throw Error("unimplemented abstract method")
    };
    baidu.fn.extend({
        bind: function (a) {
            var b = this.fn, c = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : null;
            return function () {
                var e = baidu.type(b) === "string" ? a[b] : b,
                    d = c ? c.concat(Array.prototype.slice.call(arguments, 0)) : arguments;
                return e.apply(a || e, d)
            }
        }
    });
    baidu.fn.bind = function (c, b) {
        var a = baidu.fn(c);
        return a.bind.apply(a, Array.prototype.slice.call(arguments, 1))
    };
    baidu.lang.register = function (b, d, a) {
        var c = b["\x06r"] || (b["\x06r"] = []);
        c[c.length] = d;
        for (var e in a) {
            b.prototype[e] = a[e]
        }
    };
    baidu.createChain("form", function (a) {
        return typeof a === "undefined" ? new baidu.form.$Form() : new baidu.form.$Form(a)
    }, function (a) {
        this.form = a
    });
    baidu.form.extend({
        json: function (e) {
            var c = this.form;
            var b = c.elements, e = e || function (q, i) {
                return q
            }, h = {}, o, k, p, d, a, n, m, l;

            function f(i, q) {
                var r = h[i];
                if (r) {
                    r.push || (h[i] = [r]);
                    h[i].push(q)
                } else {
                    h[i] = q
                }
            }

            for (var g = 0, j = b.length; g < j; g++) {
                o = b[g];
                p = o.name;
                if (!o.disabled && p) {
                    k = o.type;
                    d = baidu.url.escapeSymbol(o.value);
                    switch (k) {
                        case"radio":
                        case"checkbox":
                            if (!o.checked) {
                                break
                            }
                        case"textarea":
                        case"text":
                        case"password":
                        case"hidden":
                        case"file":
                        case"select-one":
                            f(p, e(d, p));
                            break;
                        case"select-multiple":
                            a = o.options;
                            m = a.length;
                            for (n = 0; n < m; n++) {
                                l = a[n];
                                if (l.selected) {
                                    f(p, e(l.value, p))
                                }
                            }
                            break
                    }
                }
            }
            return h
        }
    });
    baidu.form.extend({
        serialize: function (e) {
            var c = this.form;
            var b = c.elements, e = e || function (q, i) {
                return q
            }, h = [], o, k, p, d, a, n, m, l;

            function f(i, q) {
                h.push(i + "=" + q)
            }

            for (var g = 0, j = b.length; g < j; g++) {
                o = b[g];
                p = o.name;
                if (!o.disabled && p) {
                    k = o.type;
                    d = baidu.url.escapeSymbol(o.value);
                    switch (k) {
                        case"radio":
                        case"checkbox":
                            if (!o.checked) {
                                break
                            }
                        case"textarea":
                        case"text":
                        case"password":
                        case"hidden":
                        case"file":
                        case"select-one":
                            f(p, e(d, p));
                            break;
                        case"select-multiple":
                            a = o.options;
                            m = a.length;
                            for (n = 0; n < m; n++) {
                                l = a[n];
                                if (l.selected) {
                                    f(p, e(l.value, p))
                                }
                            }
                            break
                    }
                }
            }
            return h
        }
    });
    baidu.fx = baidu.fx || {};
    baidu.lang.inherits = function (g, e, d) {
        var c, f, a = g.prototype, b = new Function();
        b.prototype = e.prototype;
        f = g.prototype = new b();
        for (c in a) {
            f[c] = a[c]
        }
        g.prototype.constructor = g;
        g.superClass = e.prototype;
        typeof d == "string" && (f.__type = d);
        g.extend = function (j) {
            for (var h in j) {
                f[h] = j[h]
            }
            return g
        };
        return g
    };
    baidu.fx.Timeline = function (a) {
        baidu.lang.Class.call(this);
        this.interval = 16;
        this.duration = 500;
        this.dynamic = true;
        baidu.object.extend(this, a)
    };
    baidu.lang.inherits(baidu.fx.Timeline, baidu.lang.Class, "baidu.fx.Timeline").extend({
        launch: function () {
            var a = this;
            a.dispatchEvent("onbeforestart");
            typeof a.initialize == "function" && a.initialize();
            a["\x06btime"] = new Date().getTime();
            a["\x06etime"] = a["\x06btime"] + (a.dynamic ? a.duration : 0);
            a["\x06pulsed"]();
            return a
        }, "\x06pulsed": function () {
            var b = this;
            var a = new Date().getTime();
            b.percent = (a - b["\x06btime"]) / b.duration;
            b.dispatchEvent("onbeforeupdate");
            if (a >= b["\x06etime"]) {
                typeof b.render == "function" && b.render(b.transition(b.percent = 1));
                typeof b.finish == "function" && b.finish();
                b.dispatchEvent("onafterfinish");
                b.dispose();
                return
            }
            typeof b.render == "function" && b.render(b.transition(b.percent));
            b.dispatchEvent("onafterupdate");
            b["\x06timer"] = setTimeout(function () {
                b["\x06pulsed"]()
            }, b.interval)
        }, transition: function (a) {
            return a
        }, cancel: function () {
            this["\x06timer"] && clearTimeout(this["\x06timer"]);
            this["\x06etime"] = this["\x06btime"];
            typeof this.restore == "function" && this.restore();
            this.dispatchEvent("oncancel");
            this.dispose()
        }, end: function () {
            this["\x06timer"] && clearTimeout(this["\x06timer"]);
            this["\x06etime"] = this["\x06btime"];
            this["\x06pulsed"]()
        }
    });
    baidu.fx.create = function (d, b, c) {
        var e = new baidu.fx.Timeline(b);
        e.element = d;
        e.__type = c || e.__type;
        e["\x06original"] = {};
        var a = "baidu_current_effect";
        e.addEventListener("onbeforestart", function () {
            var g = this, f;
            g.attribName = "att_" + g.__type.replace(/\W/g, "_");
            f = g.element.getAttribute(a);
            g.element.setAttribute(a, (f || "") + "|" + g.guid + "|", 0);
            if (!g.overlapping) {
                (f = g.element.getAttribute(g.attribName)) && window[baidu.guid]._instances[f].cancel();
                g.element.setAttribute(g.attribName, g.guid, 0)
            }
        });
        e["\x06clean"] = function (h) {
            var g = this, f;
            if (h = g.element) {
                h.removeAttribute(g.attribName);
                f = h.getAttribute(a);
                f = f.replace("|" + g.guid + "|", "");
                if (!f) {
                    h.removeAttribute(a)
                } else {
                    h.setAttribute(a, f, 0)
                }
            }
        };
        e.addEventListener("oncancel", function () {
            this["\x06clean"]();
            this["\x06restore"]()
        });
        e.addEventListener("onafterfinish", function () {
            this["\x06clean"]();
            this.restoreAfterFinish && this["\x06restore"]()
        });
        e.protect = function (f) {
            this["\x06original"][f] = this.element.style[f]
        };
        e["\x06restore"] = function () {
            var j = this["\x06original"], h = this.element.style, f;
            for (var g in j) {
                f = j[g];
                if (typeof f == "undefined") {
                    continue
                }
                h[g] = f;
                if (!f && h.removeAttribute) {
                    h.removeAttribute(g)
                } else {
                    if (!f && h.removeProperty) {
                        h.removeProperty(g)
                    }
                }
            }
        };
        return e
    };
    baidu.fx.collapse = function (c, b) {
        if (!(c = baidu.dom.g(c))) {
            return null
        }
        var h = c, f, a, g = {
            "vertical": {
                value: "height",
                offset: "offsetHeight",
                stylesValue: ["paddingBottom", "paddingTop", "borderTopWidth", "borderBottomWidth"]
            },
            "horizontal": {
                value: "width",
                offset: "offsetWidth",
                stylesValue: ["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"]
            }
        };
        var d = baidu.fx.create(h, baidu.object.extend({
            orientation: "vertical", initialize: function () {
                a = g[this.orientation];
                this.protect(a.value);
                this.protect("overflow");
                this.restoreAfterFinish = true;
                f = h[a.offset];
                h.style.overflow = "hidden"
            }, transition: function (e) {
                return Math.pow(1 - e, 2)
            }, render: function (e) {
                h.style[a.value] = Math.floor(e * f) + "px"
            }, finish: function () {
                baidu.dom.hide(h)
            }
        }, b || {}), "baidu.fx.expand_collapse");
        return d.launch()
    };
    baidu.lang.instance = function () {
        var a = baidu.global("_maps_id");
        return function (b) {
            return a[b] || null
        }
    }();
    baidu.fx.current = function (d) {
        if (!(d = baidu.dom.g(d))) {
            return null
        }
        var b, f, e = /\|([^\|]+)\|/g;
        do {
            if (f = d.getAttribute("baidu_current_effect")) {
                break
            }
        } while ((d = d.parentNode) && d.nodeType == 1);
        if (!f) {
            return null
        }
        if ((b = f.match(e))) {
            e = /\|([^\|]+)\|/;
            for (var c = 0; c < b.length; c++) {
                e.test(b[c]);
                b[c] = baidu.lang.instance(RegExp["\x241"])
            }
        }
        return b
    };
    baidu.fx.expand = function (c, b) {
        if (!(c = baidu.dom.g(c))) {
            return null
        }
        var h = c, f, a, g = {
            "vertical": {
                value: "height",
                offset: "offsetHeight",
                stylesValue: ["paddingBottom", "paddingTop", "borderTopWidth", "borderBottomWidth"]
            },
            "horizontal": {
                value: "width",
                offset: "offsetWidth",
                stylesValue: ["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"]
            }
        };
        var d = baidu.fx.create(h, baidu.object.extend({
            orientation: "vertical", initialize: function () {
                a = g[this.orientation];
                baidu.dom.show(h);
                this.protect(a.value);
                this.protect("overflow");
                this.restoreAfterFinish = true;
                f = h[a.offset];

                function e(k, j) {
                    var i = parseInt(baidu.dom.getStyle(k, j));
                    i = isNaN(i) ? 0 : i;
                    i = baidu.lang.isNumber(i) ? i : 0;
                    return i
                }

                baidu.forEach(a.stylesValue, function (i) {
                    f -= e(h, i)
                });
                h.style.overflow = "hidden";
                h.style[a.value] = "1px"
            }, transition: function (e) {
                return Math.sqrt(e)
            }, render: function (e) {
                h.style[a.value] = Math.floor(e * f) + "px"
            }
        }, b || {}), "baidu.fx.expand_collapse");
        return d.launch()
    };
    baidu.fx.opacity = function (b, a) {
        if (!(b = baidu.dom.g(b))) {
            return null
        }
        a = baidu.object.extend({from: 0, to: 1}, a || {});
        var d = b;
        var c = baidu.fx.create(d, baidu.object.extend({
            initialize: function () {
                baidu.dom.show(b);
                if (baidu.browser.ie) {
                    this.protect("filter")
                } else {
                    this.protect("opacity");
                    this.protect("KHTMLOpacity")
                }
                this.distance = this.to - this.from
            }, render: function (e) {
                var f = this.distance * e + this.from;
                if (!baidu.browser.ie) {
                    d.style.opacity = f;
                    d.style.KHTMLOpacity = f
                } else {
                    d.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity:" + Math.floor(f * 100) + ")"
                }
            }
        }, a), "baidu.fx.opacity");
        return c.launch()
    };
    baidu.fx.fadeIn = function (b, a) {
        if (!(b = baidu.dom.g(b))) {
            return null
        }
        var c = baidu.fx.opacity(b, baidu.object.extend({from: 0, to: 1, restoreAfterFinish: true}, a || {}));
        c.__type = "baidu.fx.fadeIn";
        return c
    };
    baidu.fx.fadeOut = function (b, a) {
        if (!(b = baidu.dom.g(b))) {
            return null
        }
        var c = baidu.fx.opacity(b, baidu.object.extend({from: 1, to: 0, restoreAfterFinish: true}, a || {}));
        c.addEventListener("onafterfinish", function () {
            baidu.dom.hide(this.element)
        });
        c.__type = "baidu.fx.fadeOut";
        return c
    };
    baidu.fx.getTransition = function (c) {
        var b = baidu.fx.transitions;
        if (!c || typeof b[c] != "string") {
            c = "linear"
        }
        return new Function("percent", b[c])
    };
    baidu.fx.transitions = {
        none: "return 0",
        full: "return 1",
        linear: "return percent",
        reverse: "return 1 - percent",
        parabola: "return Math.pow(percent, 2)",
        antiparabola: "return 1 - Math.pow(1 - percent, 2)",
        sinoidal: "return (-Math.cos(percent * Math.PI)/2) + 0.5",
        wobble: "return (-Math.cos(percent * Math.PI * (9 * percent))/2) + 0.5",
        spring: "return 1 - (Math.cos(percent * 4.5 * Math.PI) * Math.exp(-percent * 6))"
    };
    baidu.string.extend({
        formatColor: function () {
            var c = /^\#[\da-f]{6}$/i, b = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i, a = {
                black: "#000000",
                silver: "#c0c0c0",
                gray: "#808080",
                white: "#ffffff",
                maroon: "#800000",
                red: "#ff0000",
                purple: "#800080",
                fuchsia: "#ff00ff",
                green: "#008000",
                lime: "#00ff00",
                olive: "#808000",
                yellow: "#ffff0",
                navy: "#000080",
                blue: "#0000ff",
                teal: "#008080",
                aqua: "#00ffff"
            };
            return function () {
                var e = this.valueOf();
                if (c.test(e)) {
                    return e
                } else {
                    if (b.test(e)) {
                        for (var j, h = 1, e = "#"; h < 4; h++) {
                            j = parseInt(RegExp["\x24" + h]).toString(16);
                            e += ("00" + j).substr(j.length)
                        }
                        return e
                    } else {
                        if (/^\#[\da-f]{3}$/.test(e)) {
                            var g = e.charAt(1), f = e.charAt(2), d = e.charAt(3);
                            return "#" + g + g + f + f + d + d
                        } else {
                            if (a[e]) {
                                return a[e]
                            }
                        }
                    }
                }
                return ""
            }
        }()
    });
    baidu.fx.highlight = function (b, a) {
        if (!(b = baidu.dom.g(b))) {
            return null
        }
        var d = b;
        var c = baidu.fx.create(d, baidu.object.extend({
            initialize: function () {
                var k = this, j = baidu.dom.getStyle, h = baidu.string.formatColor, f = h(j(d, "color")) || "#000000",
                    e = h(j(d, "backgroundColor"));
                k.beginColor = k.beginColor || e || "#FFFF00";
                k.endColor = k.endColor || e || "#FFFFFF";
                k.finalColor = k.finalColor || k.endColor || k.element.style.backgroundColor;
                k.textColor == f && (k.textColor = "");
                this.protect("color");
                this.protect("backgroundColor");
                k.c_b = [];
                k.c_d = [];
                k.t_b = [];
                k.t_d = [];
                for (var l, g = 0; g < 3; g++) {
                    l = 2 * g + 1;
                    k.c_b[g] = parseInt(k.beginColor.substr(l, 2), 16);
                    k.c_d[g] = parseInt(k.endColor.substr(l, 2), 16) - k.c_b[g];
                    if (k.textColor) {
                        k.t_b[g] = parseInt(f.substr(l, 2), 16);
                        k.t_d[g] = parseInt(k.textColor.substr(l, 2), 16) - k.t_b[g]
                    }
                }
            }, render: function (j) {
                for (var h = this, f = "#", e = "#", k, g = 0; g < 3; g++) {
                    k = Math.round(h.c_b[g] + h.c_d[g] * j).toString(16);
                    f += ("00" + k).substr(k.length);
                    if (h.textColor) {
                        k = Math.round(h.t_b[g] + h.t_d[g] * j).toString(16);
                        e += ("00" + k).substr(k.length)
                    }
                }
                d.style.backgroundColor = f;
                h.textColor && (d.style.color = e)
            }, finish: function () {
                this.textColor && (d.style.color = this.textColor);
                d.style.backgroundColor = this.finalColor
            }
        }, a || {}), "baidu.fx.highlight");
        return c.launch()
    };
    baidu.fx.mask = function (c, a) {
        if (!(c = baidu.dom.g(c)) || baidu.dom.getStyle(c, "position") != "absolute") {
            return null
        }
        var g = c, b = {};
        a = a || {};
        var f = /^(\d+px|\d?\d(\.\d+)?%|100%|left|center|right)(\s+(\d+px|\d?\d(\.\d+)?%|100%|top|center|bottom))?/i;
        !f.test(a.startOrigin) && (a.startOrigin = "0px 0px");
        var a = baidu.object.extend({restoreAfterFinish: true, from: 0, to: 1}, a || {});
        var d = baidu.fx.create(g, baidu.object.extend({
            initialize: function () {
                g.style.display = "";
                this.protect("clip");
                b.width = g.offsetWidth;
                b.height = g.offsetHeight;
                f.test(this.startOrigin);
                var k = RegExp["\x241"].toLowerCase(), j = RegExp["\x244"].toLowerCase(), i = this.element.offsetWidth,
                    l = this.element.offsetHeight, h, e;
                if (/\d+%/.test(k)) {
                    h = parseInt(k, 10) / 100 * i
                } else {
                    if (/\d+px/.test(k)) {
                        h = parseInt(k)
                    } else {
                        if (k == "left") {
                            h = 0
                        } else {
                            if (k == "center") {
                                h = i / 2
                            } else {
                                if (k == "right") {
                                    h = i
                                }
                            }
                        }
                    }
                }
                if (!j) {
                    e = l / 2
                } else {
                    if (/\d+%/.test(j)) {
                        e = parseInt(j, 10) / 100 * l
                    } else {
                        if (/\d+px/.test(j)) {
                            e = parseInt(j)
                        } else {
                            if (j == "top") {
                                e = 0
                            } else {
                                if (j == "center") {
                                    e = l / 2
                                } else {
                                    if (j == "bottom") {
                                        e = l
                                    }
                                }
                            }
                        }
                    }
                }
                b.x = h;
                b.y = e
            }, render: function (k) {
                var l = this.to * k + this.from * (1 - k), j = b.y * (1 - l) + "px ", i = b.x * (1 - l) + "px ",
                    h = b.x * (1 - l) + b.width * l + "px ", e = b.y * (1 - l) + b.height * l + "px ";
                g.style.clip = "rect(" + j + h + e + i + ")"
            }, finish: function () {
                if (this.to < this.from) {
                    g.style.display = "none"
                }
            }
        }, a), "baidu.fx.mask");
        return d.launch()
    };
    baidu.fx.move = function (b, a) {
        if (!(b = baidu.dom.g(b)) || baidu.dom.getStyle(b, "position") == "static") {
            return null
        }
        a = baidu.object.extend({x: 0, y: 0}, a || {});
        if (a.x == 0 && a.y == 0) {
            return null
        }
        var c = baidu.fx.create(b, baidu.object.extend({
            initialize: function () {
                this.protect("top");
                this.protect("left");
                this.originX = parseInt(baidu.dom.getStyle(b, "left")) || 0;
                this.originY = parseInt(baidu.dom.getStyle(b, "top")) || 0
            }, transition: function (d) {
                return 1 - Math.pow(1 - d, 2)
            }, render: function (d) {
                b.style.top = (this.y * d + this.originY) + "px";
                b.style.left = (this.x * d + this.originX) + "px"
            }
        }, a), "baidu.fx.move");
        return c.launch()
    };
    baidu.fx.moveBy = function (b, f, a) {
        if (!(b = baidu.dom.g(b)) || baidu.dom.getStyle(b, "position") == "static" || typeof f != "object") {
            return null
        }
        var e = {};
        e.x = f[0] || f.x || 0;
        e.y = f[1] || f.y || 0;
        var c = baidu.fx.move(b, baidu.object.extend(e, a || {}));
        return c
    };
    baidu.fx.moveTo = function (d, b, c) {
        if (!(d = baidu.dom.g(d)) || baidu.dom.getStyle(d, "position") == "static" || typeof b != "object") {
            return null
        }
        var f = [b[0] || b.x || 0, b[1] || b.y || 0];
        var a = parseInt(baidu.dom.getStyle(d, "left")) || 0;
        var g = parseInt(baidu.dom.getStyle(d, "top")) || 0;
        var e = baidu.fx.move(d, baidu.object.extend({x: f[0] - a, y: f[1] - g}, c || {}));
        return e
    };
    baidu.fx.scale = function (c, a) {
        if (!(c = baidu.dom.g(c))) {
            return null
        }
        a = baidu.object.extend({from: 0.1, to: 1}, a || {});
        var e = /^(-?\d+px|\d?\d(\.\d+)?%|100%|left|center|right)(\s+(-?\d+px|\d?\d(\.\d+)?%|100%|top|center|bottom))?/i;
        !e.test(a.transformOrigin) && (a.transformOrigin = "0px 0px");
        var b = {}, d = baidu.fx.create(c, baidu.object.extend({
            fade: true, initialize: function () {
                baidu.dom.show(c);
                var k = this, f = b, p = c.style, j = function (o) {
                    k.protect(o)
                };
                if (baidu.browser.ie) {
                    j("top");
                    j("left");
                    j("position");
                    j("zoom");
                    j("filter");
                    this.offsetX = parseInt(baidu.dom.getStyle(c, "left")) || 0;
                    this.offsetY = parseInt(baidu.dom.getStyle(c, "top")) || 0;
                    if (baidu.dom.getStyle(c, "position") == "static") {
                        p.position = "relative"
                    }
                    e.test(this.transformOrigin);
                    var i = RegExp["\x241"].toLowerCase(), h = RegExp["\x244"].toLowerCase(),
                        l = this.element.offsetWidth, g = this.element.offsetHeight, n, m;
                    if (/\d+%/.test(i)) {
                        n = parseInt(i, 10) / 100 * l
                    } else {
                        if (/\d+px/.test(i)) {
                            n = parseInt(i)
                        } else {
                            if (i == "left") {
                                n = 0
                            } else {
                                if (i == "center") {
                                    n = l / 2
                                } else {
                                    if (i == "right") {
                                        n = l
                                    }
                                }
                            }
                        }
                    }
                    if (!h) {
                        m = g / 2
                    } else {
                        if (/\d+%/.test(h)) {
                            m = parseInt(h, 10) / 100 * g
                        } else {
                            if (/\d+px/.test(h)) {
                                m = parseInt(h)
                            } else {
                                if (h == "top") {
                                    m = 0
                                } else {
                                    if (h == "center") {
                                        m = g / 2
                                    } else {
                                        if (h == "bottom") {
                                            m = g
                                        }
                                    }
                                }
                            }
                        }
                    }
                    p.zoom = this.from;
                    f.cx = n;
                    f.cy = m
                } else {
                    j("WebkitTransform");
                    j("WebkitTransformOrigin");
                    j("MozTransform");
                    j("MozTransformOrigin");
                    j("OTransform");
                    j("OTransformOrigin");
                    j("transform");
                    j("transformOrigin");
                    j("opacity");
                    j("KHTMLOpacity");
                    p.WebkitTransform = p.MozTransform = p.OTransform = p.transform = "scale(" + this.from + ")";
                    p.WebkitTransformOrigin = p.MozTransformOrigin = p.OTransformOrigin = p.transformOrigin = this.transformOrigin
                }
            }, render: function (i) {
                var g = c.style, f = this.to == 1, f = typeof this.opacityTrend == "boolean" ? this.opacityTrend : f,
                    h = f ? this.percent : 1 - this.percent, j = this.to * i + this.from * (1 - i);
                if (baidu.browser.ie) {
                    g.zoom = j;
                    if (this.fade) {
                        g.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity:" + Math.floor(h * 100) + ")"
                    }
                    g.top = this.offsetY + b.cy * (1 - j);
                    g.left = this.offsetX + b.cx * (1 - j)
                } else {
                    g.WebkitTransform = g.MozTransform = g.OTransform = g.transform = "scale(" + j + ")";
                    if (this.fade) {
                        g.KHTMLOpacity = g.opacity = h
                    }
                }
            }
        }, a), "baidu.fx.scale");
        return d.launch()
    };
    baidu.fx.zoomOut = function (b, a) {
        if (!(b = baidu.dom.g(b))) {
            return null
        }
        a = baidu.object.extend({
            to: 0.1,
            from: 1,
            opacityTrend: false,
            restoreAfterFinish: true,
            transition: function (d) {
                return 1 - Math.pow(1 - d, 2)
            }
        }, a || {});
        var c = baidu.fx.scale(b, a);
        c.addEventListener("onafterfinish", function () {
            baidu.dom.hide(this.element)
        });
        return c
    };
    baidu.fx.puff = function (b, a) {
        return baidu.fx.zoomOut(b, baidu.object.extend({to: 1.8, duration: 800, transformOrigin: "50% 50%"}, a || {}))
    };
    baidu.fx.pulsate = function (c, a, b) {
        if (!(c = baidu.dom.g(c))) {
            return null
        }
        if (isNaN(a) || a == 0) {
            return null
        }
        var f = c;
        var d = baidu.fx.create(f, baidu.object.extend({
            initialize: function () {
                this.protect("visibility")
            }, transition: function (e) {
                return Math.cos(2 * Math.PI * e)
            }, render: function (e) {
                f.style.visibility = e > 0 ? "visible" : "hidden"
            }, finish: function () {
                setTimeout(function () {
                    baidu.fx.pulsate(c, --a, b)
                }, 10)
            }
        }, b), "baidu.fx.pulsate");
        return d.launch()
    };
    baidu.fx.remove = function (b, a) {
        var c = a.onafterfinish ? a.onafterfinish : new Function();
        return baidu.fx.fadeOut(b, baidu.object.extend(a || {}, {
            onafterfinish: function () {
                baidu.dom.remove(this.element);
                c.call(this)
            }
        }))
    };
    baidu.fx.scrollBy = function (b, g, a) {
        if (!(b = baidu.dom.g(b)) || typeof g != "object") {
            return null
        }
        var f = {}, e = {};
        f.x = g[0] || g.x || 0;
        f.y = g[1] || g.y || 0;
        var c = baidu.fx.create(b, baidu.object.extend({
            initialize: function () {
                var h = e.sTop = b.scrollTop;
                var d = e.sLeft = b.scrollLeft;
                e.sx = Math.min(b.scrollWidth - b.clientWidth - d, f.x);
                e.sy = Math.min(b.scrollHeight - b.clientHeight - h, f.y)
            }, transition: function (d) {
                return 1 - Math.pow(1 - d, 2)
            }, render: function (d) {
                b.scrollTop = (e.sy * d + e.sTop);
                b.scrollLeft = (e.sx * d + e.sLeft)
            }, restore: function () {
                b.scrollTop = e.sTop;
                b.scrollLeft = e.sLeft
            }
        }, a), "baidu.fx.scroll");
        return c.launch()
    };
    baidu.fx.scrollTo = function (c, a, b) {
        if (!(c = baidu.dom.g(c)) || typeof a != "object") {
            return null
        }
        var e = {};
        e.x = (a[0] || a.x || 0) - c.scrollLeft;
        e.y = (a[1] || a.y || 0) - c.scrollTop;
        return baidu.fx.scrollBy(c, e, b)
    };
    baidu.fx.shake = function (b, g, a) {
        if (!(b = baidu.dom.g(b))) {
            return null
        }
        var f = b;
        g = g || [];

        function c() {
            for (var e = 0; e < arguments.length; e++) {
                if (!isNaN(arguments[e])) {
                    return arguments[e]
                }
            }
        }

        var d = baidu.fx.create(f, baidu.object.extend({
            initialize: function () {
                this.protect("top");
                this.protect("left");
                this.protect("position");
                this.restoreAfterFinish = true;
                if (baidu.dom.getStyle(f, "position") == "static") {
                    f.style.position = "relative"
                }
                var e = this["\x06original"];
                this.originX = parseInt(e.left || 0);
                this.originY = parseInt(e.top || 0);
                this.offsetX = c(g[0], g.x, 16);
                this.offsetY = c(g[1], g.y, 5)
            }, transition: function (h) {
                var e = 1 - h;
                return Math.floor(e * 16) % 2 == 1 ? e : h - 1
            }, render: function (e) {
                f.style.top = (this.offsetY * e + this.originY) + "px";
                f.style.left = (this.offsetX * e + this.originX) + "px"
            }
        }, a || {}), "baidu.fx.shake");
        return d.launch()
    };
    baidu.fx.zoomIn = function (b, a) {
        if (!(b = baidu.dom.g(b))) {
            return null
        }
        a = baidu.object.extend({
            to: 1, from: 0.1, restoreAfterFinish: true, transition: function (c) {
                return Math.pow(c, 2)
            }
        }, a || {});
        return baidu.fx.scale(b, a)
    };
    baidu._util_.smartAjax = baidu._util_.smartAjax || function (a) {
        return function (b, d, e, c) {
            if (baidu.type(d) === "function") {
                c = c || e;
                e = d;
                d = undefined
            }
            baidu.ajax({type: a, url: b, data: d, success: e, dataType: c})
        }
    };
    baidu.get = baidu.get || baidu._util_.smartAjax("get");
    baidu.global.get = function (a) {
        return baidu.global(a)
    };
    baidu.global.set = function (b, c, a) {
        return baidu.global(b, c, a)
    };
    baidu.global.getZIndex = function (a, c) {
        var b = baidu.global.get("zIndex");
        if (a) {
            b[a] = b[a] + (c || 1)
        }
        return b[a]
    };
    baidu.global.set("zIndex", {popup: 50000, dialog: 1000}, true);
    baidu.i18n = baidu.i18n || {};
    baidu.i18n.cultures = baidu.i18n.cultures || {};
    baidu.i18n.cultures["en-US"] = baidu.object.extend(baidu.i18n.cultures["en-US"] || {}, {
        calendar: {
            dateFormat: "yyyy-MM-dd",
            titleNames: "#{MM}&nbsp;#{yyyy}",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: {mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun"}
        },
        timeZone: -5,
        whitespace: new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)", "g"),
        number: {
            group: ",", groupLength: 3, decimal: ".", positive: "", negative: "-", _format: function (b, a) {
                return baidu.i18n.number._format(b, {
                    group: this.group,
                    groupLength: this.groupLength,
                    decimal: this.decimal,
                    symbol: a ? this.negative : this.positive
                })
            }
        },
        currency: {symbol: "$"},
        language: {ok: "ok", cancel: "cancel", signin: "signin", signup: "signup"}
    });
    baidu.i18n.currentLocale = "en-US";
    baidu.i18n.cultures["zh-CN"] = baidu.object.extend(baidu.i18n.cultures["zh-CN"] || {}, {
        calendar: {
            dateFormat: "yyyy-MM-dd",
            titleNames: "#{yyyy}年&nbsp;#{MM}月",
            monthNames: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            monthNamesShort: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            dayNames: {mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六", sun: "日"}
        },
        timeZone: 8,
        whitespace: new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)", "g"),
        number: {
            group: ",", groupLength: 3, decimal: ".", positive: "", negative: "-", _format: function (b, a) {
                return baidu.i18n.number._format(b, {
                    group: this.group,
                    groupLength: this.groupLength,
                    decimal: this.decimal,
                    symbol: a ? this.negative : this.positive
                })
            }
        },
        currency: {symbol: "￥"},
        language: {ok: "确定", cancel: "取消", signin: "注册", signup: "登录"}
    });
    baidu.i18n.currentLocale = "zh-CN";
    baidu.i18n.number = baidu.i18n.number || {
        format: function (e, c, g) {
            var d = this, f = c && baidu.i18n.cultures[c].number,
                b = baidu.i18n.cultures[g || baidu.i18n.currentLocale].number, a = false;
            if (typeof e === "string") {
                if (e.indexOf(f.negative) > -1) {
                    a = true;
                    e = e.replace(f.negative, "")
                } else {
                    if (e.indexOf(f.positive) > -1) {
                        e = e.replace(f.positive, "")
                    }
                }
                e = e.replace(new RegExp(f.group, "g"), "")
            } else {
                if (e < 0) {
                    a = true;
                    e *= -1
                }
            }
            e = parseFloat(e);
            if (isNaN(e)) {
                return "NAN"
            }
            return b._format ? b._format(e, a) : d._format(e, {
                group: b.group || ",",
                decimal: b.decimal || ".",
                groupLength: b.groupLength,
                symbol: a ? b.negative : b.positive
            })
        }, _format: function (c, h) {
            var a = String(c).split(h.decimal), f = a[0].split("").reverse(), b = a[1] || "", e = 0, g = 0, j = "";
            e = parseInt(f.length / h.groupLength);
            g = f.length % h.groupLength;
            e = g == 0 ? e - 1 : e;
            for (var d = 1; d <= e; d++) {
                f.splice(h.groupLength * d + (d - 1), 0, h.group)
            }
            f = f.reverse();
            j = h.symbol + f.join("") + (b.length > 0 ? h.decimal + b : "");
            return j
        }
    };
    baidu.i18n.currency = baidu.i18n.currency || {
        format: function (e, c, g) {
            var d = this, f = c && baidu.i18n.cultures[c].currency,
                b = baidu.i18n.cultures[g || baidu.i18n.currentLocale].currency, a;
            if (typeof e === "string") {
                e = e.replace(f.symbol)
            }
            return b.symbol + this._format(e, c, g)
        }, _format: function (b, a, c) {
            return baidu.i18n.number.format(b, a, c || baidu.i18n.currentLocale)
        }
    };
    baidu.i18n.date = baidu.i18n.date || {
        getDaysInMonth: function (a, b) {
            var c = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (b == 1 && baidu.i18n.date.isLeapYear(a)) {
                return 29
            }
            return c[b]
        }, isLeapYear: function (a) {
            return !(a % 400) || (!(a % 4) && !!(a % 100))
        }, toLocaleDate: function (b, a, c) {
            return this._basicDate(b, a, c || baidu.i18n.currentLocale)
        }, _basicDate: function (f, c, h) {
            var a = baidu.i18n.cultures[h || baidu.i18n.currentLocale].timeZone, g = a * 60, b, d, e = f.getTime();
            if (c) {
                b = baidu.i18n.cultures[c].timeZone;
                d = b * 60
            } else {
                d = -1 * f.getTimezoneOffset();
                b = d / 60
            }
            return new Date(b != a ? (e + (g - d) * 60000) : e)
        }, format: function (a, b) {
            var d = baidu.i18n.cultrues[b || baidu.i18n.currentLocale];
            return baidu.date.format(baidu.i18n.date.toLocaleDate(a, "", b), d.calendar.dateFormat)
        }
    };
    baidu.i18n.string = baidu.i18n.string || {
        trim: function (c, a) {
            var b = baidu.i18n.cultures[a || baidu.i18n.currentLocale].whitespace;
            return String(c).replace(b, "")
        }, translation: function (c, a) {
            var b = baidu.i18n.cultures[a || baidu.i18n.currentLocale].language;
            return b[c] || ""
        }
    };
    baidu.json.decode = baidu.json.parse;
    baidu.json.stringify = (function () {
        var b = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};

        function a(f) {
            if (/["\\\x00-\x1f]/.test(f)) {
                f = f.replace(/["\\\x00-\x1f]/g, function (g) {
                    var h = b[g];
                    if (h) {
                        return h
                    }
                    h = g.charCodeAt();
                    return "\\u00" + Math.floor(h / 16).toString(16) + (h % 16).toString(16)
                })
            }
            return '"' + f + '"'
        }

        function d(m) {
            var g = ["["], h = m.length, f, j, k;
            for (j = 0; j < h; j++) {
                k = m[j];
                switch (typeof k) {
                    case"undefined":
                    case"function":
                    case"unknown":
                        break;
                    default:
                        if (f) {
                            g.push(",")
                        }
                        g.push(baidu.json.stringify(k));
                        f = 1
                }
            }
            g.push("]");
            return g.join("")
        }

        function c(f) {
            return f < 10 ? "0" + f : f
        }

        function e(f) {
            return '"' + f.getFullYear() + "-" + c(f.getMonth() + 1) + "-" + c(f.getDate()) + "T" + c(f.getHours()) + ":" + c(f.getMinutes()) + ":" + c(f.getSeconds()) + '"'
        }

        return function (k) {
            switch (typeof k) {
                case"undefined":
                    return "undefined";
                case"number":
                    return isFinite(k) ? String(k) : "null";
                case"string":
                    return a(k);
                case"boolean":
                    return String(k);
                default:
                    if (k === null) {
                        return "null"
                    } else {
                        if (baidu.type(k) === "array") {
                            return d(k)
                        } else {
                            if (baidu.type(k) === "date") {
                                return e(k)
                            } else {
                                var g = ["{"], j = baidu.json.stringify, f, i;
                                for (var h in k) {
                                    if (Object.prototype.hasOwnProperty.call(k, h)) {
                                        i = k[h];
                                        switch (typeof i) {
                                            case"undefined":
                                            case"unknown":
                                            case"function":
                                                break;
                                            default:
                                                if (f) {
                                                    g.push(",")
                                                }
                                                f = 1;
                                                g.push(j(h) + ":" + j(i))
                                        }
                                    }
                                }
                                g.push("}");
                                return g.join("")
                            }
                        }
                    }
            }
        }
    })();
    baidu.json.encode = baidu.json.stringify;
    baidu.lang.Class.prototype.addEventListeners = function (c, d) {
        if (typeof d == "undefined") {
            for (var b in c) {
                this.addEventListener(b, c[b])
            }
        } else {
            c = c.split(",");
            var b = 0, a = c.length, e;
            for (; b < a; b++) {
                this.addEventListener(baidu.trim(c[b]), d)
            }
        }
    };
    baidu.lang.createClass = function (b, j) {
        j = j || {};
        var g = j.superClass || baidu.lang.Class;
        var h = function () {
            var m = this;
            j.decontrolled && (m.__decontrolled = true);
            g.apply(m, arguments);
            for (k in h.options) {
                m[k] = h.options[k]
            }
            b.apply(m, arguments);
            for (var k = 0, l = h["\x06r"]; l && k < l.length; k++) {
                l[k].apply(m, arguments)
            }
        };
        h.options = j.options || {};
        var a = function () {
        }, f = b.prototype;
        a.prototype = g.prototype;
        var d = h.prototype = new a();
        for (var c in f) {
            d[c] = f[c]
        }
        var e = j.className || j.type;
        typeof e == "string" && (d.__type = e);
        d.constructor = f.constructor;
        h.extend = function (l) {
            for (var k in l) {
                h.prototype[k] = l[k]
            }
            return h
        };
        return h
    };
    baidu.lang.decontrol = function () {
        var a = baidu.global("_maps_id");
        return function (b) {
            delete a[b]
        }
    }();
    baidu.lang.eventCenter = baidu.lang.eventCenter || baidu.lang.createSingle();
    baidu.lang.getModule = function (b, c) {
        var d = b.split("."), e = c || window, a;
        for (; a = d.shift();) {
            if (e[a] != null) {
                e = e[a]
            } else {
                return null
            }
        }
        return e
    };
    baidu.lang.isBoolean = baidu.isBoolean;
    baidu.lang.isDate = baidu.isDate;
    baidu.lang.isElement = baidu.isElement;
    baidu.lang.isObject = baidu.isObject;
    baidu.lang.isWindow = function (a) {
        return baidu.type(a) == "Window"
    };
    baidu.lang.module = function (d, g, b) {
        var h = d.split("."), a = h.length - 1, c, f = 0;
        if (!b) {
            try {
                if (!(new RegExp("^[a-zA-Z_\x24][a-zA-Z0-9_\x24]*\x24")).test(h[0])) {
                    throw""
                }
                b = window["eval"](h[0]);
                f = 1
            } catch (j) {
                b = window
            }
        }
        for (; f < a; f++) {
            c = h[f];
            if (!b[c]) {
                b[c] = {}
            }
            b = b[c]
        }
        if (!b[h[a]]) {
            b[h[a]] = g
        }
    };
    baidu.lang.register = function (b, d, a) {
        var c = b["\x06r"] || (b["\x06r"] = []);
        c[c.length] = d;
        for (var e in a) {
            b.prototype[e] = a[e]
        }
    };
    baidu.global("_maps_id");
    baidu.number.extend({
        comma: function (a) {
            var b = this;
            if (!a || a < 1) {
                a = 3
            }
            b = String(b).split(".");
            b[0] = b[0].replace(new RegExp("(\\d)(?=(\\d{" + a + "})+$)", "ig"), "$1,");
            return b.join(".")
        }
    });
    baidu.number.randomInt = function (b, a) {
        return Math.floor(Math.random() * (a - b + 1) + b)
    };
    baidu.object.clone = function (e) {
        var b = e, c, a;
        if (!e || e instanceof Number || e instanceof String || e instanceof Boolean) {
            return b
        } else {
            if (baidu.lang.isArray(e)) {
                b = [];
                var d = 0;
                for (c = 0, a = e.length; c < a; c++) {
                    b[d++] = baidu.object.clone(e[c])
                }
            } else {
                if (baidu.object.isPlain(e)) {
                    b = {};
                    for (c in e) {
                        if (e.hasOwnProperty(c)) {
                            b[c] = baidu.object.clone(e[c])
                        }
                    }
                }
            }
        }
        return b
    };
    baidu.object.keys = function (d) {
        var a = [], c = 0, b;
        for (b in d) {
            if (d.hasOwnProperty(b)) {
                a[c++] = b
            }
        }
        return a
    };
    baidu.object.map = function (d, c) {
        var b = {};
        for (var a in d) {
            if (d.hasOwnProperty(a)) {
                b[a] = c(d[a], a)
            }
        }
        return b
    };
    (function () {
        var b = function (c) {
            return baidu.lang.isObject(c) && !baidu.lang.isFunction(c)
        };

        function a(g, f, e, d, c) {
            if (f.hasOwnProperty(e)) {
                if (c && b(g[e])) {
                    baidu.object.merge(g[e], f[e], {"overwrite": d, "recursive": c})
                } else {
                    if (d || !(e in g)) {
                        g[e] = f[e]
                    }
                }
            }
        }

        baidu.object.merge = function (h, c, k) {
            var e = 0, l = k || {}, g = l["overwrite"], j = l["whiteList"], d = l["recursive"], f;
            if (j && j.length) {
                f = j.length;
                for (; e < f; ++e) {
                    a(h, c, j[e], g, d)
                }
            } else {
                for (e in c) {
                    a(h, c, e, g, d)
                }
            }
            return h
        }
    })();
    baidu.page.createStyleSheet = function (a) {
        var f = a || {}, d = f.document || document, c;
        if (baidu.browser.ie) {
            if (!f.url) {
                f.url = ""
            }
            return d.createStyleSheet(f.url, f.index)
        } else {
            c = "<style type='text/css'></style>";
            f.url && (c = "<link type='text/css' rel='stylesheet' href='" + f.url + "'/>");
            baidu.dom.insertHTML(d.getElementsByTagName("HEAD")[0], "beforeEnd", c);
            if (f.url) {
                return null
            }
            var b = d.styleSheets[d.styleSheets.length - 1], e = b.rules || b.cssRules;
            return {
                self: b, rules: b.rules || b.cssRules, addRule: function (g, j, h) {
                    if (b.addRule) {
                        return b.addRule(g, j, h)
                    } else {
                        if (b.insertRule) {
                            isNaN(h) && (h = e.length);
                            return b.insertRule(g + "{" + j + "}", h)
                        }
                    }
                }, removeRule: function (g) {
                    if (b.removeRule) {
                        b.removeRule(g)
                    } else {
                        if (b.deleteRule) {
                            isNaN(g) && (g = 0);
                            b.deleteRule(g)
                        }
                    }
                }
            }
        }
    };
    baidu.page.getHeight = function () {
        var d = document, a = d.body, c = d.documentElement, b = d.compatMode == "BackCompat" ? a : d.documentElement;
        return Math.max(c.scrollHeight, a.scrollHeight, b.clientHeight)
    };
    baidu.page.getViewHeight = function () {
        var b = document, a = b.compatMode == "BackCompat" ? b.body : b.documentElement;
        return a.clientHeight
    };
    baidu.page.getViewWidth = function () {
        var b = document, a = b.compatMode == "BackCompat" ? b.body : b.documentElement;
        return a.clientWidth
    };
    baidu.page.getWidth = function () {
        var d = document, a = d.body, c = d.documentElement, b = d.compatMode == "BackCompat" ? a : d.documentElement;
        return Math.max(c.scrollWidth, a.scrollWidth, b.clientWidth)
    };
    baidu.page.lazyLoadImage = function (a) {
        a = a || {};
        a.preloadHeight = a.preloadHeight || 0;
        baidu.dom.ready(function () {
            var e = document.getElementsByTagName("IMG"), f = e, g = e.length, d = 0, k = c(),
                j = "data-tangram-ori-src", h;
            if (a.className) {
                f = [];
                for (; d < g; ++d) {
                    if (baidu.dom.hasClass(e[d], a.className)) {
                        f.push(e[d])
                    }
                }
            }

            function c() {
                return baidu.page.getScrollTop() + baidu.page.getViewHeight() + a.preloadHeight
            }

            for (d = 0, g = f.length; d < g; ++d) {
                h = f[d];
                if (baidu.dom.getPosition(h).top > k) {
                    h.setAttribute(j, h.src);
                    a.placeHolder ? h.src = a.placeHolder : h.removeAttribute("src")
                }
            }
            var b = function () {
                var m = c(), o, p = true, n = 0, l = f.length;
                for (; n < l; ++n) {
                    h = f[n];
                    o = h.getAttribute(j);
                    o && (p = false);
                    if (baidu.dom.getPosition(h).top < m && o) {
                        h.src = o;
                        h.removeAttribute(j);
                        baidu.lang.isFunction(a.onlazyload) && a.onlazyload(h)
                    }
                }
                p && baidu.dom(window).off("scroll", b)
            };
            baidu.dom(window).on("scroll", b)
        })
    };
    baidu.page.load = function (c, j, e) {
        j = j || {};
        var h = baidu.page.load, a = h._cache = h._cache || {}, g = h._loadingCache = h._loadingCache || {},
            f = j.parallel;

        function d() {
            for (var l = 0, k = c.length; l < k; ++l) {
                if (!a[c[l].url]) {
                    setTimeout(arguments.callee, 10);
                    return
                }
            }
            j.onload()
        }

        function b(m, p) {
            var o, l, k;
            switch (m.type.toLowerCase()) {
                case"css":
                    o = document.createElement("link");
                    o.setAttribute("rel", "stylesheet");
                    o.setAttribute("type", "text/css");
                    break;
                case"js":
                    o = document.createElement("script");
                    o.setAttribute("type", "text/javascript");
                    o.setAttribute("charset", m.charset || h.charset);
                    break;
                case"html":
                    o = document.createElement("iframe");
                    o.frameBorder = "none";
                    break;
                default:
                    return
            }
            var n = baidu.dom(o);
            k = function () {
                if (!l && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                    l = true;
                    n.off("load", k);
                    n.off("readystatechange", k);
                    p.call(window, o)
                }
            };
            n.on("load", k);
            n.on("readystatechange", k);
            if (m.type == "css") {
                (function () {
                    if (l) {
                        return
                    }
                    try {
                        o.sheet.cssRule
                    } catch (q) {
                        setTimeout(arguments.callee, 20);
                        return
                    }
                    l = true;
                    p.call(window, o)
                })()
            }
            o.href = o.src = m.url;
            document.getElementsByTagName("head")[0].appendChild(o)
        }

        baidu.lang.isString(c) && (c = [{url: c}]);
        if (!(c && c.length)) {
            return
        }

        function i(m) {
            var l = m.url, n = !!f, k, o = function (p) {
                a[m.url] = p;
                delete g[m.url];
                if (baidu.lang.isFunction(m.onload)) {
                    if (false === m.onload.call(window, p)) {
                        return
                    }
                }
                !f && h(c.slice(1), j, true);
                if ((!e) && baidu.lang.isFunction(j.onload)) {
                    d()
                }
            };
            m.type = m.type || l.replace(/^[^\?#]+\.(css|js|html)(\?|#| |$)[^\?#]*/i, "$1");
            m.requestType = m.requestType || (m.type == "html" ? "ajax" : "dom");
            if (k = a[m.url]) {
                o(k);
                return n
            }
            if (!j.refresh && g[m.url]) {
                setTimeout(function () {
                    i(m)
                }, 10);
                return n
            }
            g[m.url] = true;
            if (m.requestType.toLowerCase() == "dom") {
                b(m, o)
            } else {
                baidu.ajax.get(m.url, function (q, p) {
                    o(p)
                })
            }
            return n
        }

        baidu.forEach(c, i)
    };
    baidu.page.load.charset = "UTF8";
    baidu.page.loadCssFile = function (b) {
        var a = document.createElement("link");
        a.setAttribute("rel", "stylesheet");
        a.setAttribute("type", "text/css");
        a.setAttribute("href", b);
        document.getElementsByTagName("head")[0].appendChild(a)
    };
    baidu.page.loadJsFile = function (b) {
        var a = document.createElement("script");
        a.setAttribute("type", "text/javascript");
        a.setAttribute("src", b);
        a.setAttribute("defer", "defer");
        document.getElementsByTagName("head")[0].appendChild(a)
    };
    baidu.param = function (a) {
        a = a || arguments.callee.caller.arguments;
        var c = "", d = a.length;
        for (var b = 0; b < d; b++) {
            c += "," + baidu.type(a[b])
        }
        return c ? c.substr(1) : ""
    };
    baidu.platform = baidu.platform || function () {
        var b = navigator.userAgent, a = function () {
        };
        baidu.forEach("Android iPad iPhone Linux Macintosh Windows X11".split(" "), function (d) {
            var c = d.charAt(0).toUpperCase() + d.toLowerCase().substr(1);
            baidu["is" + c] = a["is" + c] = b.indexOf(d) > -1
        });
        return a
    }();
    baidu.post = baidu.post || baidu._util_.smartAjax("post");
    baidu.regexp = baidu.regexp || {};
    baidu.regexp.compile = function (a) {
        return function (b, e) {
            var d, c = b + "$$" + e;
            !(d = a[c]) && (d = a[c] = new RegExp(b, e));
            d.lastIndex > 0 && (d.lastIndex = 0);
            return d
        }
    }(baidu.global("_maps_RegExp"));
    baidu.createChain("sio", function (a) {
        switch (typeof a) {
            case"string":
                return new baidu.sio.$Sio(a);
                break
        }
    }, function (a) {
        this.url = a
    });
    baidu.sio._createScriptTag = function (b, a, c) {
        b.setAttribute("type", "text/javascript");
        c && b.setAttribute("charset", c);
        b.setAttribute("src", a);
        document.getElementsByTagName("head")[0].appendChild(b)
    };
    baidu.sio._removeScriptTag = function (b) {
        if (b.clearAttributes) {
            b.clearAttributes()
        } else {
            for (var a in b) {
                if (b.hasOwnProperty(a)) {
                    delete b[a]
                }
            }
        }
        if (b && b.parentNode) {
            b.parentNode.removeChild(b)
        }
        b = null
    };
    baidu.sio.extend({
        callByBrowser: function (g, i) {
            var a = this.url;
            var d = document.createElement("SCRIPT"), e = 0, j = i || {}, c = j["charset"], h = g || function () {
            }, f = j["timeOut"] || 0, b;
            d.onload = d.onreadystatechange = function () {
                if (e) {
                    return
                }
                var k = d.readyState;
                if ("undefined" == typeof k || k == "loaded" || k == "complete") {
                    e = 1;
                    try {
                        h();
                        clearTimeout(b)
                    } finally {
                        d.onload = d.onreadystatechange = null;
                        baidu.sio._removeScriptTag(d)
                    }
                }
            };
            if (f) {
                b = setTimeout(function () {
                    d.onload = d.onreadystatechange = null;
                    baidu.sio._removeScriptTag(d);
                    j.onfailure && j.onfailure()
                }, f)
            }
            baidu.sio._createScriptTag(d, a, c)
        }
    });
    baidu.sio.extend({
        callByServer: function (m, n) {
            var a = this.url;
            var i = document.createElement("SCRIPT"), h = "bd__cbs__", k, e, o = n || {}, d = o["charset"],
                f = o["queryField"] || "callback", l = o["timeOut"] || 0, b, c = new RegExp("(\\?|&)" + f + "=([^&]*)"),
                g;
            if (baidu.lang.isFunction(m)) {
                k = h + Math.floor(Math.random() * 2147483648).toString(36);
                window[k] = j(0)
            } else {
                if (baidu.lang.isString(m)) {
                    k = m
                } else {
                    if (g = c.exec(a)) {
                        k = g[2]
                    }
                }
            }
            if (l) {
                b = setTimeout(j(1), l)
            }
            a = a.replace(c, "\x241" + f + "=" + k);
            if (a.search(c) < 0) {
                a += (a.indexOf("?") < 0 ? "?" : "&") + f + "=" + k
            }
            baidu.sio._createScriptTag(i, a, d);

            function j(p) {
                return function () {
                    try {
                        if (p) {
                            o.onfailure && o.onfailure()
                        } else {
                            m.apply(window, arguments);
                            clearTimeout(b)
                        }
                        window[k] = null;
                        delete window[k]
                    } catch (q) {
                    } finally {
                        baidu.sio._removeScriptTag(i)
                    }
                }
            }
        }
    });
    baidu.sio.extend({
        log: function () {
            url = this.url;
            var a = new Image(), b = "tangram_sio_log_" + Math.floor(Math.random() * 2147483648).toString(36);
            window[b] = a;
            a.onload = a.onerror = a.onabort = function () {
                a.onload = a.onerror = a.onabort = null;
                window[b] = null;
                a = null
            };
            a.src = url
        }
    });
    (function (M, q) {
        baidu.query = function (Q, S, R) {
            return baidu.merge(R || [], baidu.sizzle(Q, S))
        };
        var e = M.document, j = e.documentElement, O = "sizcache" + (Math.random() + "").replace(".", ""), o = 0,
            d = Object.prototype.toString, A = "undefined", l = false, h = true,
            H = /^#([\w\-]+$)|^(\w+$)|^\.([\w\-]+$)/,
            z = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            y = /\\/g, P = /\W/, g = /^\w/, s = /\D/, f = /(-?)(\d*)(?:n([+\-]?\d*))?/, w = /^\+|\s*/g, v = /h\d/i,
            I = /input|select|textarea|button/i, m = /[\t\n\f\r]/g, r = "(?:[-\\w]|[^\\x00-\\xa0]|\\\\.)", E = {
                ID: new RegExp("#(" + r + "+)"),
                CLASS: new RegExp("\\.(" + r + "+)"),
                NAME: new RegExp("\\[name=['\"]*(" + r + "+)['\"]*\\]"),
                TAG: new RegExp("^(" + r.replace("[-", "[-\\*") + "+)"),
                ATTR: new RegExp("\\[\\s*(" + r + "+)\\s*(?:(\\S?=)\\s*(?:(['\"])(.*?)\\3|(#?" + r + "*)|)|)\\s*\\]"),
                PSEUDO: new RegExp(":(" + r + "+)(?:\\((['\"]?)((?:\\([^\\)]+\\)|[^\\(\\)]*)+)\\2\\))?"),
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/
            }, J = E.POS, K = (function () {
                var R, S = function (V, U) {
                    return "\\" + (U - 0 + 1)
                }, Q = {};
                for (R in E) {
                    E[R] = new RegExp(E[R].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
                    Q[R] = new RegExp(/(^(?:.|\r|\n)*?)/.source + E[R].source.replace(/\\(\d+)/g, S))
                }
                E.globalPOS = J;
                return Q
            })(), G = function (Q) {
                var R = false, U = e.createElement("div");
                try {
                    R = Q(U)
                } catch (S) {
                }
                U = null;
                return R
            }, i = G(function (S) {
                var Q = true, R = "script" + (new Date()).getTime();
                S.innerHTML = "<a name ='" + R + "'/>";
                j.insertBefore(S, j.firstChild);
                if (e.getElementById(R)) {
                    Q = false
                }
                j.removeChild(S);
                return Q
            }), c = G(function (Q) {
                Q.appendChild(e.createComment(""));
                return Q.getElementsByTagName("*").length === 0
            }), D = G(function (Q) {
                Q.innerHTML = "<a href='#'></a>";
                return Q.firstChild && typeof Q.firstChild.getAttribute !== A && Q.firstChild.getAttribute("href") === "#"
            }), C = G(function (Q) {
                Q.innerHTML = "<div class='test e'></div><div class='test'></div>";
                if (!Q.getElementsByClassName || Q.getElementsByClassName("e").length === 0) {
                    return false
                }
                Q.lastChild.className = "e";
                return Q.getElementsByClassName("e").length !== 1
            });
        [0, 0].sort(function () {
            h = false;
            return 0
        });
        var L = function (Q, W, V) {
            V = V || [];
            W = W || e;
            var S, X, U, R = W.nodeType;
            if (R !== 1 && R !== 9) {
                return []
            }
            if (!Q || typeof Q !== "string") {
                return V
            }
            U = u(W);
            if (!U) {
                if ((S = H.exec(Q))) {
                    if (S[1]) {
                        if (R === 9) {
                            X = W.getElementById(S[1]);
                            if (X && X.parentNode) {
                                if (X.id === S[1]) {
                                    return t([X], V)
                                }
                            } else {
                                return t([], V)
                            }
                        } else {
                            if (W.ownerDocument && (X = W.ownerDocument.getElementById(S[1])) && B(W, X) && X.id === S[1]) {
                                return t([X], V)
                            }
                        }
                    } else {
                        if (S[2]) {
                            if (Q === "body" && W.body) {
                                return t([W.body], V)
                            }
                            return t(W.getElementsByTagName(Q), V)
                        } else {
                            if (C && S[3] && W.getElementsByClassName) {
                                return t(W.getElementsByClassName(S[3]), V)
                            }
                        }
                    }
                }
            }
            return N(Q, W, V, q, U)
        };
        var N = function (W, Q, Z, aa, V) {
            var S, ae, ah, R, ad, ag, af, Y, ac = Q, U = true, X = [], ab = W;
            do {
                z.exec("");
                S = z.exec(ab);
                if (S) {
                    ab = S[3];
                    X.push(S[1]);
                    if (S[2]) {
                        R = S[3];
                        break
                    }
                }
            } while (S);
            if (X.length > 1 && J.exec(W)) {
                if (X.length === 2 && F.relative[X[0]]) {
                    ae = x(X[0] + X[1], Q, aa, V)
                } else {
                    ae = F.relative[X[0]] ? [Q] : L(X.shift(), Q);
                    while (X.length) {
                        W = X.shift();
                        if (F.relative[W]) {
                            W += X.shift()
                        }
                        ae = x(W, ae, aa, V)
                    }
                }
            } else {
                if (!aa && X.length > 1 && Q.nodeType === 9 && !V && E.ID.test(X[0]) && !E.ID.test(X[X.length - 1])) {
                    ad = L.find(X.shift(), Q, V);
                    Q = ad.expr ? L.filter(ad.expr, ad.set)[0] : ad.set[0]
                }
                if (Q) {
                    ad = aa ? {
                        expr: X.pop(),
                        set: t(aa)
                    } : L.find(X.pop(), (X.length >= 1 && (X[0] === "~" || X[0] === "+") && Q.parentNode) || Q, V);
                    ae = ad.expr ? L.filter(ad.expr, ad.set) : ad.set;
                    if (X.length > 0) {
                        ah = t(ae)
                    } else {
                        U = false
                    }
                    while (X.length) {
                        ag = X.pop();
                        af = ag;
                        if (!F.relative[ag]) {
                            ag = ""
                        } else {
                            af = X.pop()
                        }
                        if (af == null) {
                            af = Q
                        }
                        F.relative[ag](ah, af, V)
                    }
                } else {
                    ah = X = []
                }
            }
            if (!ah) {
                ah = ae
            }
            if (!ah) {
                L.error(ag || W)
            }
            if (d.call(ah) === "[object Array]") {
                if (!U) {
                    Z.push.apply(Z, ah)
                } else {
                    if (Q && Q.nodeType === 1) {
                        for (Y = 0; ah[Y] != null; Y++) {
                            if (ah[Y] && (ah[Y] === true || ah[Y].nodeType === 1 && B(Q, ah[Y]))) {
                                Z.push(ae[Y])
                            }
                        }
                    } else {
                        for (Y = 0; ah[Y] != null; Y++) {
                            if (ah[Y] && ah[Y].nodeType === 1) {
                                Z.push(ae[Y])
                            }
                        }
                    }
                }
            } else {
                t(ah, Z)
            }
            if (R) {
                N(R, ac, Z, aa, V);
                n(Z)
            }
            return Z
        };
        var u = L.isXML = function (Q) {
            var R = (Q ? Q.ownerDocument || Q : 0).documentElement;
            return R ? R.nodeName !== "HTML" : false
        };
        var t = function (U, S) {
            S = S || [];
            var R = 0, Q = U.length;
            if (typeof Q === "number") {
                for (; R < Q; R++) {
                    S.push(U[R])
                }
            } else {
                for (; U[R]; R++) {
                    S.push(U[R])
                }
            }
            return S
        };
        var n = L.uniqueSort = function (R) {
            if (p) {
                l = h;
                R.sort(p);
                if (l) {
                    for (var Q = 1; Q < R.length; Q++) {
                        if (R[Q] === R[Q - 1]) {
                            R.splice(Q--, 1)
                        }
                    }
                }
            }
            return R
        };
        var B = L.contains = j.compareDocumentPosition ? function (R, Q) {
            return !!(R.compareDocumentPosition(Q) & 16)
        } : j.contains ? function (R, Q) {
            return R !== Q && (R.contains ? R.contains(Q) : false)
        } : function (R, Q) {
            while ((Q = Q.parentNode)) {
                if (Q === R) {
                    return true
                }
            }
            return false
        };
        L.matches = function (Q, R) {
            return N(Q, e, [], R, u(e))
        };
        L.matchesSelector = function (Q, R) {
            return N(R, e, [], [Q], u(e)).length > 0
        };
        L.find = function (Z, Q, S) {
            var Y, U, W, V, X, R;
            if (!Z) {
                return []
            }
            for (U = 0, W = F.order.length; U < W; U++) {
                X = F.order[U];
                if ((V = K[X].exec(Z))) {
                    R = V[1];
                    V.splice(1, 1);
                    if (R.substr(R.length - 1) !== "\\") {
                        V[1] = (V[1] || "").replace(y, "");
                        Y = F.find[X](V, Q, S);
                        if (Y != null) {
                            Z = Z.replace(E[X], "");
                            break
                        }
                    }
                }
            }
            if (!Y) {
                Y = typeof Q.getElementsByTagName !== A ? Q.getElementsByTagName("*") : []
            }
            return {set: Y, expr: Z}
        };
        L.filter = function (ac, ab, af, V) {
            var X, Q, aa, ah, ae, R, U, W, ad, S = ac, ag = [], Z = ab, Y = ab && ab[0] && u(ab[0]);
            while (ac && ab.length) {
                for (aa in F.filter) {
                    if ((X = K[aa].exec(ac)) != null && X[2]) {
                        R = F.filter[aa];
                        U = X[1];
                        Q = false;
                        X.splice(1, 1);
                        if (U.substr(U.length - 1) === "\\") {
                            continue
                        }
                        if (Z === ag) {
                            ag = []
                        }
                        if (F.preFilter[aa]) {
                            X = F.preFilter[aa](X, Z, af, ag, V, Y);
                            if (!X) {
                                Q = ah = true
                            } else {
                                if (X === true) {
                                    continue
                                }
                            }
                        }
                        if (X) {
                            for (W = 0; (ae = Z[W]) != null; W++) {
                                if (ae) {
                                    ah = R(ae, X, W, Z);
                                    ad = V ^ ah;
                                    if (af && ah != null) {
                                        if (ad) {
                                            Q = true
                                        } else {
                                            Z[W] = false
                                        }
                                    } else {
                                        if (ad) {
                                            ag.push(ae);
                                            Q = true
                                        }
                                    }
                                }
                            }
                        }
                        if (ah !== q) {
                            if (!af) {
                                Z = ag
                            }
                            ac = ac.replace(E[aa], "");
                            if (!Q) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (ac === S) {
                    if (Q == null) {
                        L.error(ac)
                    } else {
                        break
                    }
                }
                S = ac
            }
            return Z
        };
        L.error = function (Q) {
            throw new Error("Syntax error, unrecognized expression: " + Q)
        };
        var a = L.getText = function (V) {
            var S, U, Q = V.nodeType, R = "";
            if (Q) {
                if (Q === 1 || Q === 9 || Q === 11) {
                    if (typeof V.textContent === "string") {
                        return V.textContent
                    } else {
                        for (V = V.firstChild; V; V = V.nextSibling) {
                            R += a(V)
                        }
                    }
                } else {
                    if (Q === 3 || Q === 4) {
                        return V.nodeValue
                    }
                }
            } else {
                for (S = 0; (U = V[S]); S++) {
                    if (U.nodeType !== 8) {
                        R += a(U)
                    }
                }
            }
            return R
        };
        var F = L.selectors = {
            match: E,
            leftMatch: K,
            order: ["ID", "NAME", "TAG"],
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: D ? function (Q) {
                    return Q.getAttribute("href")
                } : function (Q) {
                    return Q.getAttribute("href", 2)
                }, type: function (Q) {
                    return Q.getAttribute("type")
                }
            },
            relative: {
                "+": function (X, R) {
                    var U = typeof R === "string", W = U && !P.test(R), Y = U && !W;
                    if (W) {
                        R = R.toLowerCase()
                    }
                    for (var S = 0, Q = X.length, V; S < Q; S++) {
                        if ((V = X[S])) {
                            while ((V = V.previousSibling) && V.nodeType !== 1) {
                            }
                            X[S] = Y || V && V.nodeName.toLowerCase() === R ? V || false : V === R
                        }
                    }
                    if (Y) {
                        L.filter(R, X, true)
                    }
                }, ">": function (X, R) {
                    var W, V = typeof R === "string", S = 0, Q = X.length;
                    if (V && !P.test(R)) {
                        R = R.toLowerCase();
                        for (; S < Q; S++) {
                            W = X[S];
                            if (W) {
                                var U = W.parentNode;
                                X[S] = U.nodeName.toLowerCase() === R ? U : false
                            }
                        }
                    } else {
                        for (; S < Q; S++) {
                            W = X[S];
                            if (W) {
                                X[S] = V ? W.parentNode : W.parentNode === R
                            }
                        }
                        if (V) {
                            L.filter(R, X, true)
                        }
                    }
                }, "": function (S, R, Q) {
                    k("parentNode", S, R, Q)
                }, "~": function (S, R, Q) {
                    k("previousSibling", S, R, Q)
                }
            },
            find: {
                ID: i ? function (S, U, R) {
                    if (typeof U.getElementById !== A && !R) {
                        var Q = U.getElementById(S[1]);
                        return Q && Q.parentNode ? [Q] : []
                    }
                } : function (S, U, R) {
                    if (typeof U.getElementById !== A && !R) {
                        var Q = U.getElementById(S[1]);
                        return Q ? Q.id === S[1] || typeof Q.getAttributeNode !== A && Q.getAttributeNode("id").nodeValue === S[1] ? [Q] : q : []
                    }
                }, NAME: function (S, W) {
                    if (typeof W.getElementsByName !== A) {
                        var R = [], V = W.getElementsByName(S[1]), U = 0, Q = V.length;
                        for (; U < Q; U++) {
                            if (V[U].getAttribute("name") === S[1]) {
                                R.push(V[U])
                            }
                        }
                        return R.length === 0 ? null : R
                    }
                }, TAG: c ? function (Q, R) {
                    if (typeof R.getElementsByTagName !== A) {
                        return R.getElementsByTagName(Q[1])
                    }
                } : function (Q, V) {
                    var U = V.getElementsByTagName(Q[1]);
                    if (Q[1] === "*") {
                        var S = [], R = 0;
                        for (; U[R]; R++) {
                            if (U[R].nodeType === 1) {
                                S.push(U[R])
                            }
                        }
                        U = S
                    }
                    return U
                }
            },
            preFilter: {
                CLASS: function (V, R, S, Q, Y, U) {
                    V = " " + V[1].replace(y, "") + " ";
                    if (U) {
                        return V
                    }
                    for (var W = 0, X; (X = R[W]) != null; W++) {
                        if (X) {
                            if (Y ^ (X.className && (" " + X.className + " ").replace(m, " ").indexOf(V) >= 0)) {
                                if (!S) {
                                    Q.push(X)
                                }
                            } else {
                                if (S) {
                                    R[W] = false
                                }
                            }
                        }
                    }
                    return false
                }, ID: function (Q) {
                    return Q[1].replace(y, "")
                }, TAG: function (R, Q) {
                    return R[1].replace(y, "").toLowerCase()
                }, CHILD: function (Q) {
                    if (Q[1] === "nth") {
                        if (!Q[2]) {
                            L.error(Q[0])
                        }
                        Q[2] = Q[2].replace(w, "");
                        var R = f.exec(Q[2] === "even" && "2n" || Q[2] === "odd" && "2n+1" || !s.test(Q[2]) && "0n+" + Q[2] || Q[2]);
                        Q[2] = (R[1] + (R[2] || 1)) - 0;
                        Q[3] = R[3] - 0
                    } else {
                        if (Q[2]) {
                            L.error(Q[0])
                        }
                    }
                    Q[0] = o++;
                    return Q
                }, ATTR: function (W, R, S, Q, X, V) {
                    var U = W[1] = W[1].replace(y, "");
                    if (!V && F.attrMap[U]) {
                        W[1] = F.attrMap[U]
                    }
                    W[4] = (W[4] || W[5] || "").replace(y, "");
                    if (W[2] === "~=") {
                        W[4] = " " + W[4] + " "
                    }
                    return W
                }, PSEUDO: function (W, R, S, Q, X, V) {
                    if (W[1] === "not") {
                        if ((z.exec(W[3]) || "").length > 1 || g.test(W[3])) {
                            W[3] = N(W[3], e, [], R, V)
                        } else {
                            var U = L.filter(W[3], R, S, !X);
                            if (!S) {
                                Q.push.apply(Q, U)
                            }
                            return false
                        }
                    } else {
                        if (E.POS.test(W[0]) || E.CHILD.test(W[0])) {
                            return true
                        }
                    }
                    return W
                }, POS: function (Q) {
                    Q.unshift(true);
                    return Q
                }
            },
            filters: {
                enabled: function (Q) {
                    return Q.disabled === false
                }, disabled: function (Q) {
                    return Q.disabled === true
                }, checked: function (Q) {
                    var R = Q.nodeName.toLowerCase();
                    return (R === "input" && !!Q.checked) || (R === "option" && !!Q.selected)
                }, selected: function (Q) {
                    if (Q.parentNode) {
                        Q.parentNode.selectedIndex
                    }
                    return Q.selected === true
                }, parent: function (Q) {
                    return !!Q.firstChild
                }, empty: function (Q) {
                    return !Q.firstChild
                }, has: function (S, R, Q) {
                    return !!L(Q[3], S).length
                }, header: function (Q) {
                    return v.test(Q.nodeName)
                }, text: function (S) {
                    var Q = S.getAttribute("type"), R = S.type;
                    return S.nodeName.toLowerCase() === "input" && "text" === R && (Q === null || Q.toLowerCase() === R)
                }, radio: function (Q) {
                    return Q.nodeName.toLowerCase() === "input" && "radio" === Q.type
                }, checkbox: function (Q) {
                    return Q.nodeName.toLowerCase() === "input" && "checkbox" === Q.type
                }, file: function (Q) {
                    return Q.nodeName.toLowerCase() === "input" && "file" === Q.type
                }, password: function (Q) {
                    return Q.nodeName.toLowerCase() === "input" && "password" === Q.type
                }, submit: function (R) {
                    var Q = R.nodeName.toLowerCase();
                    return (Q === "input" || Q === "button") && "submit" === R.type
                }, image: function (Q) {
                    return Q.nodeName.toLowerCase() === "input" && "image" === Q.type
                }, reset: function (R) {
                    var Q = R.nodeName.toLowerCase();
                    return (Q === "input" || Q === "button") && "reset" === R.type
                }, button: function (R) {
                    var Q = R.nodeName.toLowerCase();
                    return Q === "input" && "button" === R.type || Q === "button"
                }, input: function (Q) {
                    return I.test(Q.nodeName)
                }, focus: function (Q) {
                    var R = Q.ownerDocument;
                    return Q === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(Q.type || Q.href)
                }, active: function (Q) {
                    return Q === Q.ownerDocument.activeElement
                }, contains: function (S, R, Q) {
                    return (S.textContent || S.innerText || a(S)).indexOf(Q[3]) >= 0
                }
            },
            setFilters: {
                first: function (R, Q) {
                    return Q === 0
                }, last: function (S, R, Q, U) {
                    return R === U.length - 1
                }, even: function (R, Q) {
                    return Q % 2 === 0
                }, odd: function (R, Q) {
                    return Q % 2 === 1
                }, lt: function (S, R, Q) {
                    return R < Q[3] - 0
                }, gt: function (S, R, Q) {
                    return R > Q[3] - 0
                }, nth: function (S, R, Q) {
                    return Q[3] - 0 === R
                }, eq: function (S, R, Q) {
                    return Q[3] - 0 === R
                }
            },
            filter: {
                PSEUDO: function (S, X, W, Z) {
                    var Q = X[1], R = F.filters[Q];
                    if (R) {
                        return R(S, W, X, Z)
                    } else {
                        if (Q === "not") {
                            var U = X[3], V = 0, Y = U.length;
                            for (; V < Y; V++) {
                                if (U[V] === S) {
                                    return false
                                }
                            }
                            return true
                        } else {
                            L.error(Q)
                        }
                    }
                }, CHILD: function (S, V) {
                    var U, ab, X, aa, Q, W, Z, Y = V[1], R = S;
                    switch (Y) {
                        case"only":
                        case"first":
                            while ((R = R.previousSibling)) {
                                if (R.nodeType === 1) {
                                    return false
                                }
                            }
                            if (Y === "first") {
                                return true
                            }
                            R = S;
                        case"last":
                            while ((R = R.nextSibling)) {
                                if (R.nodeType === 1) {
                                    return false
                                }
                            }
                            return true;
                        case"nth":
                            U = V[2];
                            ab = V[3];
                            if (U === 1 && ab === 0) {
                                return true
                            }
                            X = V[0];
                            aa = S.parentNode;
                            if (aa && (aa[O] !== X || !S.nodeIndex)) {
                                W = 0;
                                for (R = aa.firstChild; R; R = R.nextSibling) {
                                    if (R.nodeType === 1) {
                                        R.nodeIndex = ++W
                                    }
                                }
                                aa[O] = X
                            }
                            Z = S.nodeIndex - ab;
                            if (U === 0) {
                                return Z === 0
                            } else {
                                return (Z % U === 0 && Z / U >= 0)
                            }
                    }
                }, ID: i ? function (R, Q) {
                    return R.nodeType === 1 && R.getAttribute("id") === Q
                } : function (S, Q) {
                    var R = typeof S.getAttributeNode !== A && S.getAttributeNode("id");
                    return S.nodeType === 1 && R && R.nodeValue === Q
                }, TAG: function (R, Q) {
                    return (Q === "*" && R.nodeType === 1) || !!R.nodeName && R.nodeName.toLowerCase() === Q
                }, CLASS: function (R, Q) {
                    return (" " + (R.className || R.getAttribute("class")) + " ").indexOf(Q) > -1
                }, ATTR: function (W, U) {
                    var S = U[1],
                        Q = L.attr ? L.attr(W, S) : F.attrHandle[S] ? F.attrHandle[S](W) : W[S] != null ? W[S] : W.getAttribute(S),
                        X = Q + "", V = U[2], R = U[4];
                    return Q == null ? V === "!=" : !V && L.attr ? Q != null : V === "=" ? X === R : V === "*=" ? X.indexOf(R) >= 0 : V === "~=" ? (" " + X + " ").indexOf(R) >= 0 : !R ? X && Q !== false : V === "!=" ? X !== R : V === "^=" ? X.indexOf(R) === 0 : V === "$=" ? X.substr(X.length - R.length) === R : V === "|=" ? X === R || X.substr(0, R.length + 1) === R + "-" : false
                }, POS: function (V, R, S, W) {
                    var Q = R[2], U = F.setFilters[Q];
                    if (U) {
                        return U(V, S, R, W)
                    }
                }
            }
        };
        if (C) {
            F.order.splice(1, 0, "CLASS");
            F.find.CLASS = function (R, S, Q) {
                if (typeof S.getElementsByClassName !== A && !Q) {
                    return S.getElementsByClassName(R[1])
                }
            }
        }
        var p, b;
        if (j.compareDocumentPosition) {
            p = function (R, Q) {
                if (R === Q) {
                    l = true;
                    return 0
                }
                if (!R.compareDocumentPosition || !Q.compareDocumentPosition) {
                    return R.compareDocumentPosition ? -1 : 1
                }
                return R.compareDocumentPosition(Q) & 4 ? -1 : 1
            }
        } else {
            p = function (Z, Y) {
                if (Z === Y) {
                    l = true;
                    return 0
                } else {
                    if (Z.sourceIndex && Y.sourceIndex) {
                        return Z.sourceIndex - Y.sourceIndex
                    }
                }
                var W, R, S = [], Q = [], V = Z.parentNode, X = Y.parentNode, aa = V;
                if (V === X) {
                    return b(Z, Y)
                } else {
                    if (!V) {
                        return -1
                    } else {
                        if (!X) {
                            return 1
                        }
                    }
                }
                while (aa) {
                    S.unshift(aa);
                    aa = aa.parentNode
                }
                aa = X;
                while (aa) {
                    Q.unshift(aa);
                    aa = aa.parentNode
                }
                W = S.length;
                R = Q.length;
                for (var U = 0; U < W && U < R; U++) {
                    if (S[U] !== Q[U]) {
                        return b(S[U], Q[U])
                    }
                }
                return U === W ? b(Z, Q[U], -1) : b(S[U], Y, 1)
            };
            b = function (R, Q, S) {
                if (R === Q) {
                    return S
                }
                var U = R.nextSibling;
                while (U) {
                    if (U === Q) {
                        return -1
                    }
                    U = U.nextSibling
                }
                return 1
            }
        }
        if (e.querySelectorAll) {
            (function () {
                var V = N, U = "__sizzle__", S = /^\s*[+~]/, R = /'/g, Q = [];
                G(function (W) {
                    W.innerHTML = "<select><option selected></option></select>";
                    if (!W.querySelectorAll("[selected]").length) {
                        Q.push("\\[[\\x20\\t\\n\\r\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
                    }
                    if (!W.querySelectorAll(":checked").length) {
                        Q.push(":checked")
                    }
                });
                G(function (W) {
                    W.innerHTML = "<p class=''></p>";
                    if (W.querySelectorAll("[class^='']").length) {
                        Q.push("[*^$]=[\\x20\\t\\n\\r\\f]*(?:\"\"|'')")
                    }
                    W.innerHTML = "<input type='hidden'>";
                    if (!W.querySelectorAll(":enabled").length) {
                        Q.push(":enabled", ":disabled")
                    }
                });
                Q = Q.length && new RegExp(Q.join("|"));
                N = function (ac, X, ad, ae, ab) {
                    if (!ae && !ab && (!Q || !Q.test(ac))) {
                        if (X.nodeType === 9) {
                            try {
                                return t(X.querySelectorAll(ac), ad)
                            } catch (aa) {
                            }
                        } else {
                            if (X.nodeType === 1 && X.nodeName.toLowerCase() !== "object") {
                                var Y = X, Z = X.getAttribute("id"), W = Z || U, ag = X.parentNode, af = S.test(ac);
                                if (!Z) {
                                    X.setAttribute("id", W)
                                } else {
                                    W = W.replace(R, "\\$&")
                                }
                                if (af && ag) {
                                    X = ag
                                }
                                try {
                                    if (!af || ag) {
                                        return t(X.querySelectorAll("[id='" + W + "'] " + ac), ad)
                                    }
                                } catch (aa) {
                                } finally {
                                    if (!Z) {
                                        Y.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                    return V(ac, X, ad, ae, ab)
                }
            })()
        }

        function k(S, ab, Q, V) {
            var R, W, Z, aa, Y = o++, U = 0, X = ab.length;
            if (typeof Q === "string" && !P.test(Q)) {
                Q = Q.toLowerCase();
                aa = Q
            }
            for (; U < X; U++) {
                R = ab[U];
                if (R) {
                    W = false;
                    R = R[S];
                    while (R) {
                        if (R[O] === Y) {
                            W = ab[R.sizset];
                            break
                        }
                        Z = R.nodeType === 1;
                        if (Z && !V) {
                            R[O] = Y;
                            R.sizset = U
                        }
                        if (aa) {
                            if (R.nodeName.toLowerCase() === Q) {
                                W = R;
                                break
                            }
                        } else {
                            if (Z) {
                                if (typeof Q !== "string") {
                                    if (R === Q) {
                                        W = true;
                                        break
                                    }
                                } else {
                                    if (L.filter(Q, [R]).length > 0) {
                                        W = R;
                                        break
                                    }
                                }
                            }
                        }
                        R = R[S]
                    }
                    ab[U] = W
                }
            }
        }

        var x = function (S, Q, X, R) {
            var W, Z = [], V = "", aa = Q.nodeType ? [Q] : Q, U = 0, Y = aa.length;
            while ((W = E.PSEUDO.exec(S))) {
                V += W[0];
                S = S.replace(E.PSEUDO, "")
            }
            if (F.relative[S]) {
                S += "*"
            }
            for (; U < Y; U++) {
                N(S, aa[U], Z, X, R)
            }
            return L.filter(V, Z)
        };
        M.Sizzle = baidu.sizzle = L
    })(window);
    baidu.string.extend({
        decodeHTML: function () {
            var a = this.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
            return a.replace(/&#([\d]+);/g, function (c, b) {
                return String.fromCharCode(parseInt(b, 10))
            })
        }
    });
    baidu.string.extend({
        encodeHTML: function () {
            return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        }
    });
    baidu.string.filterFormat = function (c, a) {
        var b = Array.prototype.slice.call(arguments, 1), d = Object.prototype.toString;
        if (b.length) {
            b = b.length == 1 ? (a !== null && (/\[object Array\]|\[object Object\]/.test(d.call(a))) ? a : b) : b;
            return c.replace(/#\{(.+?)\}/g, function (f, j) {
                var l, h, g, e, k;
                if (!b) {
                    return ""
                }
                l = j.split("|");
                h = b[l[0]];
                if ("[object Function]" == d.call(h)) {
                    h = h(l[0])
                }
                for (g = 1, e = l.length; g < e; ++g) {
                    k = baidu.string.filterFormat[l[g]];
                    if ("[object Function]" == d.call(k)) {
                        h = k(h)
                    }
                }
                return (("undefined" == typeof h || h === null) ? "" : h)
            })
        }
        return c
    };
    baidu.string.filterFormat.escapeJs = function (e) {
        if (!e || "string" != typeof e) {
            return e
        }
        var d, a, b, c = [];
        for (d = 0, a = e.length; d < a; ++d) {
            b = e.charCodeAt(d);
            if (b > 255) {
                c.push(e.charAt(d))
            } else {
                c.push("\\x" + b.toString(16))
            }
        }
        return c.join("")
    };
    baidu.string.filterFormat.js = baidu.string.filterFormat.escapeJs;
    baidu.string.filterFormat.escapeString = function (a) {
        if (!a || "string" != typeof a) {
            return a
        }
        return a.replace(/["'<>\\\/`]/g, function (b) {
            return "&#" + b.charCodeAt(0) + ";"
        })
    };
    baidu.string.filterFormat.e = baidu.string.filterFormat.escapeString;
    baidu.string.filterFormat.toInt = function (a) {
        return parseInt(a, 10) || 0
    };
    baidu.string.filterFormat.i = baidu.string.filterFormat.toInt;
    baidu.string.extend({
        format: function (a) {
            var c = this.valueOf(), b = Array.prototype.slice.call(arguments, 0), d = Object.prototype.toString;
            if (b.length) {
                b = b.length == 1 ? (a !== null && (/\[object Array\]|\[object Object\]/.test(d.call(a))) ? a : b) : b;
                return c.replace(/#\{(.+?)\}/g, function (e, g) {
                    var f = b[g];
                    if ("[object Function]" == d.call(f)) {
                        f = f(g)
                    }
                    return ("undefined" == typeof f ? "" : f)
                })
            }
            return c
        }
    });
    baidu.string.extend({
        getByteLength: function () {
            return this.replace(/[^\x00-\xff]/g, "ci").length
        }
    });
    baidu.string.extend({
        stripTags: function () {
            return (this || "").replace(/<[^>]+>/g, "")
        }
    });
    baidu.string.extend({
        subByte: function (a, b) {
            baidu.check("^(?:number(?:,(?:string|number))?)$", "baidu.string.subByte");
            var c = this.valueOf();
            b = b || "";
            if (a < 0 || baidu.string(c).getByteLength() <= a) {
                return c + b
            }
            c = c.substr(0, a).replace(/([^\x00-\xff])/g, "\x241 ").substr(0, a).replace(/[^\x00-\xff]$/, "").replace(/([^\x00-\xff]) /g, "\x241");
            return c + b
        }
    });
    baidu.string.extend({
        toHalfWidth: function () {
            return this.replace(/[\uFF01-\uFF5E]/g, function (a) {
                return String.fromCharCode(a.charCodeAt(0) - 65248)
            }).replace(/\u3000/g, " ")
        }
    });
    baidu.string.extend({
        wbr: function () {
            return this.replace(/(?:<[^>]+>)|(?:&#?[0-9a-z]{2,6};)|(.{1})/gi, "$&<wbr>").replace(/><wbr>/g, ">")
        }
    });
    baidu.swf = baidu.swf || {};
    baidu.swf.version = (function () {
        var h = navigator;
        if (h.plugins && h.mimeTypes.length) {
            var d = h.plugins["Shockwave Flash"];
            if (d && d.description) {
                return d.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0"
            }
        } else {
            if (window.ActiveXObject && !window.opera) {
                for (var b = 12; b >= 2; b--) {
                    try {
                        var g = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + b);
                        if (g) {
                            var a = g.GetVariable("$version");
                            return a.replace(/WIN/g, "").replace(/,/g, ".")
                        }
                    } catch (f) {
                    }
                }
            }
        }
    })();
    baidu.swf.createHTML = function (s) {
        s = s || {};
        var j = baidu.swf.version, g = s["ver"] || "6.0.0", f, d, e, c, h, r, a = {}, o = baidu.string.encodeHTML;
        for (c in s) {
            a[c] = s[c]
        }
        s = a;
        if (j) {
            j = j.split(".");
            g = g.split(".");
            for (e = 0; e < 3; e++) {
                f = parseInt(j[e], 10);
                d = parseInt(g[e], 10);
                if (d < f) {
                    break
                } else {
                    if (d > f) {
                        return ""
                    }
                }
            }
        } else {
            return ""
        }
        var m = s["vars"], l = ["classid", "codebase", "id", "width", "height", "align"];
        s["align"] = s["align"] || "middle";
        s["classid"] = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";
        s["codebase"] = "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0";
        s["movie"] = s["url"] || "";
        delete s["vars"];
        delete s["url"];
        if ("string" == typeof m) {
            s["flashvars"] = m
        } else {
            var p = [];
            for (c in m) {
                r = m[c];
                p.push(c + "=" + encodeURIComponent(r))
            }
            s["flashvars"] = p.join("&")
        }
        var n = ["<object "];
        for (e = 0, h = l.length; e < h; e++) {
            r = l[e];
            n.push(" ", r, '="', o(s[r]), '"')
        }
        n.push(">");
        var b = {
            "wmode": 1,
            "scale": 1,
            "quality": 1,
            "play": 1,
            "loop": 1,
            "menu": 1,
            "salign": 1,
            "bgcolor": 1,
            "base": 1,
            "allowscriptaccess": 1,
            "allownetworking": 1,
            "allowfullscreen": 1,
            "seamlesstabbing": 1,
            "devicefont": 1,
            "swliveconnect": 1,
            "flashvars": 1,
            "movie": 1
        };
        for (c in s) {
            r = s[c];
            c = c.toLowerCase();
            if (b[c] && (r || r === false || r === 0)) {
                n.push('<param name="' + c + '" value="' + o(r) + '" />')
            }
        }
        s["src"] = s["movie"];
        s["name"] = s["id"];
        delete s["id"];
        delete s["movie"];
        delete s["classid"];
        delete s["codebase"];
        s["type"] = "application/x-shockwave-flash";
        s["pluginspage"] = "http://www.macromedia.com/go/getflashplayer";
        n.push("<embed");
        var q;
        for (c in s) {
            r = s[c];
            if (r || r === false || r === 0) {
                if ((new RegExp("^salign\x24", "i")).test(c)) {
                    q = r;
                    continue
                }
                n.push(" ", c, '="', o(r), '"')
            }
        }
        if (q) {
            n.push(' salign="', o(q), '"')
        }
        n.push("></embed></object>");
        return n.join("")
    };
    baidu.swf.create = function (a, c) {
        a = a || {};
        var b = baidu.swf.createHTML(a) || a["errorMessage"] || "";
        if (c && "string" == typeof c) {
            c = document.getElementById(c)
        }
        baidu.dom.insertHTML(c || document.body, "beforeEnd", b)
    };
    baidu.swf.getMovie = function (c) {
        var a = document[c], b;
        return baidu.browser.ie == 9 ? a && a.length ? (b = baidu.array.remove(baidu.lang.toArray(a), function (d) {
            return d.tagName.toLowerCase() != "embed"
        })).length == 1 ? b[0] : b : a : a || window[c]
    };
    baidu.swf.Proxy = function (f, c, d) {
        var b = this, a = this._flash = baidu.swf.getMovie(f), e;
        if (!c) {
            return this
        }
        e = setInterval(function () {
            try {
                if (a[c]) {
                    b._initialized = true;
                    clearInterval(e);
                    if (d) {
                        d()
                    }
                }
            } catch (g) {
            }
        }, 100)
    };
    baidu.swf.Proxy.prototype.getFlash = function () {
        return this._flash
    };
    baidu.swf.Proxy.prototype.isReady = function () {
        return !!this._initialized
    };
    baidu.swf.Proxy.prototype.call = function (a, f) {
        try {
            var c = this.getFlash(), b = Array.prototype.slice.call(arguments);
            b.shift();
            if (c[a]) {
                c[a].apply(c, b)
            }
        } catch (d) {
        }
    };
    baidu.url.getQueryValue = function (b, c) {
        var d = new RegExp("(^|&|\\?|#)" + baidu.string.escapeReg(c) + "=([^&#]*)(&|\x24|#)", "");
        var a = b.match(d);
        if (a) {
            return a[2]
        }
        return null
    };
    baidu.url.jsonToQuery = function (c, e) {
        var a = [], d, b = e || function (f) {
            return baidu.url.escapeSymbol(f)
        };
        baidu.object.each(c, function (g, f) {
            if (baidu.lang.isArray(g)) {
                d = g.length;
                while (d--) {
                    a.push(f + "=" + b(g[d], f))
                }
            } else {
                a.push(f + "=" + b(g, f))
            }
        });
        return a.join("&")
    };
    baidu.url.queryToJson = function (c) {
        var h = c.substr(c.lastIndexOf("?") + 1).split("&"), a = h.length, b = null, f, e, g;
        for (var d = 0; d < a; d++) {
            f = h[d].split("=");
            if (f.length < 2) {
                continue
            }
            !b && (b = {});
            e = f[0];
            g = f[1];
            f = b[e];
            if (!f) {
                b[e] = g
            } else {
                if (baidu.lang.isArray(f)) {
                    f.push(g)
                } else {
                    b[e] = [f, g]
                }
            }
        }
        return b
    };
    (function () {
        var f = /^(?:\{.*\}|\[.*\])$/, a = /([A-Z])/g, c = /^-ms-/, e = /-([\da-z])/gi, b = function (h, i) {
            return (i + "").toUpperCase()
        };
        baidu.extend(baidu._util_, {
            camelCase: function (h) {
                return h.replace(c, "ms-").replace(e, b)
            }
        });
        baidu.extend(baidu._util_, {
            cache: {},
            deletedIds: [],
            uuid: 0,
            expando: "baidu" + ("2.0.0" + Math.random()).replace(/\D/g, ""),
            noData: {"embed": true, "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", "applet": true},
            hasData: function (h) {
                h = h.nodeType ? baidu._util_.cache[h[baidu._util_.expando]] : h[baidu._util_.expando];
                return !!h && !d(h)
            },
            data: function (k, i, m, l) {
                if (!baidu._util_.acceptData(k)) {
                    return
                }
                var n, p, q = baidu._util_.expando, o = typeof i === "string", r = k.nodeType,
                    h = r ? baidu._util_.cache : k, j = r ? k[q] : k[q] && q;
                if ((!j || !h[j] || (!l && !h[j].data)) && o && m === undefined) {
                    return
                }
                if (!j) {
                    if (r) {
                        k[q] = j = baidu._util_.deletedIds.pop() || ++baidu._util_.uuid
                    } else {
                        j = q
                    }
                }
                if (!h[j]) {
                    h[j] = {};
                    if (!r) {
                        h[j].toJSON = function () {
                        }
                    }
                }
                if (typeof i === "object" || typeof i === "function") {
                    if (l) {
                        h[j] = baidu.extend(h[j], i)
                    } else {
                        h[j].data = baidu.extend(h[j].data, i)
                    }
                }
                n = h[j];
                if (!l) {
                    if (!n.data) {
                        n.data = {}
                    }
                    n = n.data
                }
                if (m !== undefined) {
                    n[baidu._util_.camelCase(i)] = m
                }
                if (o) {
                    p = n[i];
                    if (p == null) {
                        p = n[baidu._util_.camelCase(i)]
                    }
                } else {
                    p = n
                }
                return p
            },
            removeData: function (m, j, n) {
                if (!baidu._util_.acceptData(m)) {
                    return
                }
                var q, p, o, r = m.nodeType, h = r ? baidu._util_.cache : m,
                    k = r ? m[baidu._util_.expando] : baidu._util_.expando;
                if (!h[k]) {
                    return
                }
                if (j) {
                    q = n ? h[k] : h[k].data;
                    if (q) {
                        if (!baidu.isArray(j)) {
                            if (j in q) {
                                j = [j]
                            } else {
                                j = baidu._util_.camelCase(j);
                                if (j in q) {
                                    j = [j]
                                } else {
                                    j = j.split(" ")
                                }
                            }
                        }
                        for (p = 0, o = j.length; p < o; p++) {
                            delete q[j[p]]
                        }
                        if (!(n ? d : baidu.object.isEmpty)(q)) {
                            return
                        }
                    }
                }
                if (!n) {
                    delete h[k].data;
                    if (!d(h[k])) {
                        return
                    }
                }
                if (r) {
                    baidu._util_.cleanData([m], true)
                } else {
                    if (baidu.support.deleteExpando || h != h.window) {
                        delete h[k]
                    } else {
                        h[k] = null
                    }
                }
            },
            _data: function (i, h, j) {
                return baidu._util_.data(i, h, j, true)
            },
            acceptData: function (i) {
                var h = i.nodeName && baidu._util_.noData[i.nodeName.toLowerCase()];
                return !h || h !== true && i.getAttribute("classid") === h
            }
        });

        function g(j, i, k) {
            if (k === undefined && j.nodeType === 1) {
                var h = "data-" + i.replace(a, "-$1").toLowerCase();
                k = j.getAttribute(h);
                if (typeof k === "string") {
                    try {
                        k = k === "true" ? true : k === "false" ? false : k === "null" ? null : baidu.isNumber(k) ? +k : f.test(k) ? baidu.json.parse(k) : k
                    } catch (l) {
                    }
                    baidu._util_.data(j, i, k)
                } else {
                    k = undefined
                }
            }
            return k
        }

        function d(i) {
            var h;
            for (h in i) {
                if (h === "data" && baidu.object.isEmpty(i[h])) {
                    continue
                }
                if (h !== "toJSON") {
                    return false
                }
            }
            return true
        }
    })();
    baidu.array = baidu.array || {};
    baidu.dom = baidu.dom || {};
    baidu.addClass = baidu.dom.addClass || {};
    baidu.g = baidu.G = baidu.dom.g || {};
    baidu.getAttr = baidu.dom.getAttr || {};
    baidu.getStyle = baidu.dom.getStyle || {};
    baidu.hide = baidu.dom.hide || {};
    baidu.insertHTML = baidu.dom.insertHTML || {};
    baidu.q = baidu.Q = baidu.dom.q || {};
    baidu.removeClass = baidu.dom.removeClass || {};
    baidu.setAttr = baidu.dom.setAttr || {};
    baidu.setAttrs = baidu.dom.setAttrs || {};
    baidu.dom.setOuterHeight = baidu.dom.setBorderBoxHeight || {};
    baidu.dom.setOuterWidth = baidu.dom.setBorderBoxWidth || {};
    baidu.setStyle = baidu.dom.setStyle || {};
    baidu.setStyles = baidu.dom.setStyles || {};
    baidu.show = baidu.dom.show || {};
    baidu.e = baidu.element = baidu.element || {};
    baidu.event = baidu.event || {};
    baidu.on = baidu.event.on || {};
    baidu.un = baidu.event.un || {};
    baidu.lang = baidu.lang || {};
    baidu.inherits = baidu.lang.inherits || {};
    baidu.object = baidu.object || {};
    baidu.string = baidu.string || {};
    baidu.decodeHTML = baidu.string.decodeHTML || {};
    baidu.encodeHTML = baidu.string.encodeHTML || {};
    baidu.format = baidu.string.format || {};
    baidu.trim = baidu.string.trim || {};
    ;
    var passport = passport || window.passport || {}, baidu = passport.tangramInst || baidu || window.baidu;
    !function (o) {
        o.apiDomain = {staticDomain: window.location ? "http:" == window.location.protocol.toLowerCase() ? "http://passport.bdimg.com" : "https://passport.baidu.com" : "http:" == document.location.protocol.toLowerCase() ? "http://passport.bdimg.com" : "https://passport.baidu.com"}
    }(passport);
    ;
    var magic = null;
    if ("function" != typeof magic) var magic = function () {
    };
    magic._baiduInstName = magic._baiduInstName || "bdInst_" + (new Date).getTime();
    var baiduInstance = baiduInstance || baidu.baiduInstance || window.baiduInstance;
    window[magic._baiduInstName] = window[magic._baiduInstName] || baiduInstance, magic.resourcePath = "", magic.skinName = "default", magic.version = "1.0.0.0", /msie 6/i.test(navigator.userAgent) && document.execCommand("BackgroundImageCache", !1, !0), baidu.form = baidu.form || {}, baidu.url = baidu.url || {}, baidu.url.escapeSymbol = baidu.url.escapeSymbol || function (e) {
        return String(e).replace(/[#%&+=\/\\\ \　\f\r\n\t]/g, function (e) {
            return "%" + (256 + e.charCodeAt()).toString(16).substring(1).toUpperCase()
        })
    }, baidu.form.json = baidu.form.json || function (e, i) {
        function t(e, i) {
            var t = g[e];
            t ? (t.push || (g[e] = [t]), g[e].push(i)) : g[e] = i
        }

        for (var a, n, s, r, u, c, o, d, l = e.elements, i = i || function (e) {
            return e
        }, g = {}, m = 0, b = l.length; b > m; m++) if (a = l[m], s = a.name, !a.disabled && s) switch (n = a.type, r = baidu.url.escapeSymbol(a.value), n) {
            case"radio":
            case"checkbox":
                if (!a.checked) break;
            case"textarea":
            case"text":
            case"password":
            case"hidden":
            case"file":
            case"select-one":
                t(s, i(r, s));
                break;
            case"select-multiple":
                for (u = a.options, o = u.length, c = 0; o > c; c++) d = u[c], d.selected && t(s, i(d.value, s))
        }
        return g
    }, magic.Base = function () {
        baidu.lang.Class.call(this), this._ids = {}, this._eid = this.guid + "__"
    }, baidu.lang.inherits(magic.Base, baidu.lang.Class, "magic.Base").extend({
        getElement: function (e) {
            return document.getElementById(this.$getId(e))
        }, getElements: function () {
            var e = {}, i = this._ids;
            for (var t in i) e[t] = this.getElement(t);
            return e
        }, $getId: function (e) {
            return e = baidu.lang.isString(e) ? e : "", this._ids[e] || (this._ids[e] = this._eid + e)
        }, $mappingDom: function (e, i) {
            return baidu.lang.isString(i) ? this._ids[e] = i : i && i.nodeType && (i.id ? this._ids[e] = i.id : i.id = this.$getId(e)), this
        }, $hide: function (e) {
            return ("string" == (typeof e).toLowerCase() || "" === e) && (e = this.getElement(e)), e && e.style && (e.style.display = "none", e.style.visibility = "hidden"), this
        }, $show: function (e) {
            return ("string" == (typeof e).toLowerCase() || "" === e) && (e = this.getElement(e)), e && e.style && (e.style.display = "block", e.style.visibility = "visible", e.style.opacity = "1"), this
        }, $dispose: function () {
            this.fire("ondispose") && baidu.lang.Class.prototype.dispose.call(this)
        }
    }), magic.control = magic.control || {}, function () {
        function e(e, i) {
            var a, n = e.getAttribute(i), s = !1;
            if (n && (a = n.match(t[0]))) {
                s = {};
                for (var r, u = 0; u < a.length; u++) r = a[u].match(t[1]), !isNaN(r[2]) && (r[2] = +r[2]), t[2].test(r[2]) && (r[2] = r[2].replace(t[3], "$2")), t[4].test(r[2]) && (r[2] = t[5].test(r[2])), s[r[1]] = r[2]
            }
            return s
        }

        function i(i, t) {
            var a = e(i, "tang-event");
            if (a) for (var n in a) {
                var s = a[n].substr(1);
                s.indexOf("(") < 0 && (s += "()"), baidu.dom(i).on(n, new Function(magic._baiduInstName + "('" + t + "') && " + magic._baiduInstName + "('" + t + "')" + s))
            }
        }

        magic.setup = magic.setup || function (t, a, n) {
            var s = e(t, "tang-param") || {};
            for (var r in n) s[r] = n[r];
            var u = new a(s);
            u.$mappingDom("", t), i(t, u.guid);
            for (var c = t.getElementsByTagName("*"), r = c.length - 1; r >= 0; r--) i(c[r], u.guid);
            return u
        };
        var t = [/\b[\w\$\-]+\s*:\s*[^;]+/g, /([\w\$\-]+)\s*:\s*([^;]+)\s*/, /\'|\"/, /^\s*(\'|\")([^\1]*)\1\s*/, /^(true|false)\s*$/i, /\btrue\b/i]
    }();
    ;
    passport = passport || {}, passport.lib = passport.lib || {}, passport.lib.RSAExport = {}, function (t) {
        function e(t, e, i) {
            null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
        }

        function i() {
            return new e(null)
        }

        function r(t, e, i, r, s, n) {
            for (; --n >= 0;) {
                var o = e * this[t++] + i[r] + s;
                s = Math.floor(o / 67108864), i[r++] = 67108863 & o
            }
            return s
        }

        function s(t, e, i, r, s, n) {
            for (var o = 32767 & e, h = e >> 15; --n >= 0;) {
                var a = 32767 & this[t], u = this[t++] >> 15, c = h * a + u * o;
                a = o * a + ((32767 & c) << 15) + i[r] + (1073741823 & s), s = (a >>> 30) + (c >>> 15) + h * u + (s >>> 30), i[r++] = 1073741823 & a
            }
            return s
        }

        function n(t, e, i, r, s, n) {
            for (var o = 16383 & e, h = e >> 14; --n >= 0;) {
                var a = 16383 & this[t], u = this[t++] >> 14, c = h * a + u * o;
                a = o * a + ((16383 & c) << 14) + i[r] + s, s = (a >> 28) + (c >> 14) + h * u, i[r++] = 268435455 & a
            }
            return s
        }

        function o(t) {
            return Ki.charAt(t)
        }

        function h(t, e) {
            var i = Ui[t.charCodeAt(e)];
            return null == i ? -1 : i
        }

        function a(t) {
            for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
            t.t = this.t, t.s = this.s
        }

        function u(t) {
            this.t = 1, this.s = 0 > t ? -1 : 0, t > 0 ? this[0] = t : -1 > t ? this[0] = t + DV : this.t = 0
        }

        function c(t) {
            var e = i();
            return e.fromInt(t), e
        }

        function f(t, i) {
            var r;
            if (16 == i) r = 4; else if (8 == i) r = 3; else if (256 == i) r = 8; else if (2 == i) r = 1; else if (32 == i) r = 5; else {
                if (4 != i) return void this.fromRadix(t, i);
                r = 2
            }
            this.t = 0, this.s = 0;
            for (var s = t.length, n = !1, o = 0; --s >= 0;) {
                var a = 8 == r ? 255 & t[s] : h(t, s);
                0 > a ? "-" == t.charAt(s) && (n = !0) : (n = !1, 0 == o ? this[this.t++] = a : o + r > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - o) - 1) << o, this[this.t++] = a >> this.DB - o) : this[this.t - 1] |= a << o, o += r, o >= this.DB && (o -= this.DB))
            }
            8 == r && 0 != (128 & t[0]) && (this.s = -1, o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)), this.clamp(), n && e.ZERO.subTo(this, this)
        }

        function p() {
            for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
        }

        function l(t) {
            if (this.s < 0) return "-" + this.negate().toString(t);
            var e;
            if (16 == t) e = 4; else if (8 == t) e = 3; else if (2 == t) e = 1; else if (32 == t) e = 5; else {
                if (4 != t) return this.toRadix(t);
                e = 2
            }
            var i, r = (1 << e) - 1, s = !1, n = "", h = this.t, a = this.DB - h * this.DB % e;
            if (h-- > 0) for (a < this.DB && (i = this[h] >> a) > 0 && (s = !0, n = o(i)); h >= 0;) e > a ? (i = (this[h] & (1 << a) - 1) << e - a, i |= this[--h] >> (a += this.DB - e)) : (i = this[h] >> (a -= e) & r, 0 >= a && (a += this.DB, --h)), i > 0 && (s = !0), s && (n += o(i));
            return s ? n : "0"
        }

        function d() {
            var t = i();
            return e.ZERO.subTo(this, t), t
        }

        function g() {
            return this.s < 0 ? this.negate() : this
        }

        function m(t) {
            var e = this.s - t.s;
            if (0 != e) return e;
            var i = this.t;
            if (e = i - t.t, 0 != e) return this.s < 0 ? -e : e;
            for (; --i >= 0;) if (0 != (e = this[i] - t[i])) return e;
            return 0
        }

        function y(t) {
            var e, i = 1;
            return 0 != (e = t >>> 16) && (t = e, i += 16), 0 != (e = t >> 8) && (t = e, i += 8), 0 != (e = t >> 4) && (t = e, i += 4), 0 != (e = t >> 2) && (t = e, i += 2), 0 != (e = t >> 1) && (t = e, i += 1), i
        }

        function b() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + y(this[this.t - 1] ^ this.s & this.DM)
        }

        function T(t, e) {
            var i;
            for (i = this.t - 1; i >= 0; --i) e[i + t] = this[i];
            for (i = t - 1; i >= 0; --i) e[i] = 0;
            e.t = this.t + t, e.s = this.s
        }

        function S(t, e) {
            for (var i = t; i < this.t; ++i) e[i - t] = this[i];
            e.t = Math.max(this.t - t, 0), e.s = this.s
        }

        function R(t, e) {
            var i, r = t % this.DB, s = this.DB - r, n = (1 << s) - 1, o = Math.floor(t / this.DB),
                h = this.s << r & this.DM;
            for (i = this.t - 1; i >= 0; --i) e[i + o + 1] = this[i] >> s | h, h = (this[i] & n) << r;
            for (i = o - 1; i >= 0; --i) e[i] = 0;
            e[o] = h, e.t = this.t + o + 1, e.s = this.s, e.clamp()
        }

        function E(t, e) {
            e.s = this.s;
            var i = Math.floor(t / this.DB);
            if (i >= this.t) return void(e.t = 0);
            var r = t % this.DB, s = this.DB - r, n = (1 << r) - 1;
            e[0] = this[i] >> r;
            for (var o = i + 1; o < this.t; ++o) e[o - i - 1] |= (this[o] & n) << s, e[o - i] = this[o] >> r;
            r > 0 && (e[this.t - i - 1] |= (this.s & n) << s), e.t = this.t - i, e.clamp()
        }

        function D(t, e) {
            for (var i = 0, r = 0, s = Math.min(t.t, this.t); s > i;) r += this[i] - t[i], e[i++] = r & this.DM, r >>= this.DB;
            if (t.t < this.t) {
                for (r -= t.s; i < this.t;) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                r += this.s
            } else {
                for (r += this.s; i < t.t;) r -= t[i], e[i++] = r & this.DM, r >>= this.DB;
                r -= t.s
            }
            e.s = 0 > r ? -1 : 0, -1 > r ? e[i++] = this.DV + r : r > 0 && (e[i++] = r), e.t = i, e.clamp()
        }

        function x(t, i) {
            var r = this.abs(), s = t.abs(), n = r.t;
            for (i.t = n + s.t; --n >= 0;) i[n] = 0;
            for (n = 0; n < s.t; ++n) i[n + r.t] = r.am(0, s[n], i, n, 0, r.t);
            i.s = 0, i.clamp(), this.s != t.s && e.ZERO.subTo(i, i)
        }

        function w(t) {
            for (var e = this.abs(), i = t.t = 2 * e.t; --i >= 0;) t[i] = 0;
            for (i = 0; i < e.t - 1; ++i) {
                var r = e.am(i, e[i], t, 2 * i, 0, 1);
                (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, r, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, t[i + e.t + 1] = 1)
            }
            t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)), t.s = 0, t.clamp()
        }

        function A(t, r, s) {
            var n = t.abs();
            if (!(n.t <= 0)) {
                var o = this.abs();
                if (o.t < n.t) return null != r && r.fromInt(0), void(null != s && this.copyTo(s));
                null == s && (s = i());
                var h = i(), a = this.s, u = t.s, c = this.DB - y(n[n.t - 1]);
                c > 0 ? (n.lShiftTo(c, h), o.lShiftTo(c, s)) : (n.copyTo(h), o.copyTo(s));
                var f = h.t, p = h[f - 1];
                if (0 != p) {
                    var l = p * (1 << this.F1) + (f > 1 ? h[f - 2] >> this.F2 : 0), d = this.FV / l,
                        g = (1 << this.F1) / l, m = 1 << this.F2, v = s.t, b = v - f, T = null == r ? i() : r;
                    for (h.dlShiftTo(b, T), s.compareTo(T) >= 0 && (s[s.t++] = 1, s.subTo(T, s)), e.ONE.dlShiftTo(f, T), T.subTo(h, h); h.t < f;) h[h.t++] = 0;
                    for (; --b >= 0;) {
                        var S = s[--v] == p ? this.DM : Math.floor(s[v] * d + (s[v - 1] + m) * g);
                        if ((s[v] += h.am(0, S, s, b, 0, f)) < S) for (h.dlShiftTo(b, T), s.subTo(T, s); s[v] < --S;) s.subTo(T, s)
                    }
                    null != r && (s.drShiftTo(f, r), a != u && e.ZERO.subTo(r, r)), s.t = f, s.clamp(), c > 0 && s.rShiftTo(c, s), 0 > a && e.ZERO.subTo(s, s)
                }
            }
        }

        function B(t) {
            var r = i();
            return this.abs().divRemTo(t, null, r), this.s < 0 && r.compareTo(e.ZERO) > 0 && t.subTo(r, r), r
        }

        function K(t) {
            this.m = t
        }

        function U(t) {
            return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
        }

        function O(t) {
            return t
        }

        function V(t) {
            t.divRemTo(this.m, null, t)
        }

        function N(t, e, i) {
            t.multiplyTo(e, i), this.reduce(i)
        }

        function J(t, e) {
            t.squareTo(e), this.reduce(e)
        }

        function I() {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var e = 3 & t;
            return e = e * (2 - (15 & t) * e) & 15, e = e * (2 - (255 & t) * e) & 255, e = e * (2 - ((65535 & t) * e & 65535)) & 65535, e = e * (2 - t * e % this.DV) % this.DV, e > 0 ? this.DV - e : -e
        }

        function P(t) {
            this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
        }

        function M(t) {
            var r = i();
            return t.abs().dlShiftTo(this.m.t, r), r.divRemTo(this.m, null, r), t.s < 0 && r.compareTo(e.ZERO) > 0 && this.m.subTo(r, r), r
        }

        function L(t) {
            var e = i();
            return t.copyTo(e), this.reduce(e), e
        }

        function q(t) {
            for (; t.t <= this.mt2;) t[t.t++] = 0;
            for (var e = 0; e < this.m.t; ++e) {
                var i = 32767 & t[e],
                    r = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                for (i = e + this.m.t, t[i] += this.m.am(0, r, t, e, 0, this.m.t); t[i] >= t.DV;) t[i] -= t.DV, t[++i]++
            }
            t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
        }

        function H(t, e) {
            t.squareTo(e), this.reduce(e)
        }

        function C(t, e, i) {
            t.multiplyTo(e, i), this.reduce(i)
        }

        function j() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }

        function k(t, r) {
            if (t > 4294967295 || 1 > t) return e.ONE;
            var s = i(), n = i(), o = r.convert(this), h = y(t) - 1;
            for (o.copyTo(s); --h >= 0;) if (r.sqrTo(s, n), (t & 1 << h) > 0) r.mulTo(n, o, s); else {
                var a = s;
                s = n, n = a
            }
            return r.revert(s)
        }

        function F(t, e) {
            var i;
            return i = 256 > t || e.isEven() ? new K(e) : new P(e), this.exp(t, i)
        }

        function _() {
            var t = i();
            return this.copyTo(t), t
        }

        function z() {
            if (this.s < 0) {
                if (1 == this.t) return this[0] - this.DV;
                if (0 == this.t) return -1
            } else {
                if (1 == this.t) return this[0];
                if (0 == this.t) return 0
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
        }

        function Z() {
            return 0 == this.t ? this.s : this[0] << 24 >> 24
        }

        function G() {
            return 0 == this.t ? this.s : this[0] << 16 >> 16
        }

        function $(t) {
            return Math.floor(Math.LN2 * this.DB / Math.log(t))
        }

        function Y() {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
        }

        function W(t) {
            if (null == t && (t = 10), 0 == this.signum() || 2 > t || t > 36) return "0";
            var e = this.chunkSize(t), r = Math.pow(t, e), s = c(r), n = i(), o = i(), h = "";
            for (this.divRemTo(s, n, o); n.signum() > 0;) h = (r + o.intValue()).toString(t).substr(1) + h, n.divRemTo(s, n, o);
            return o.intValue().toString(t) + h
        }

        function Q(t, i) {
            this.fromInt(0), null == i && (i = 10);
            for (var r = this.chunkSize(i), s = Math.pow(i, r), n = !1, o = 0, a = 0, u = 0; u < t.length; ++u) {
                var c = h(t, u);
                0 > c ? "-" == t.charAt(u) && 0 == this.signum() && (n = !0) : (a = i * a + c, ++o >= r && (this.dMultiply(s), this.dAddOffset(a, 0), o = 0, a = 0))
            }
            o > 0 && (this.dMultiply(Math.pow(i, o)), this.dAddOffset(a, 0)), n && e.ZERO.subTo(this, this)
        }

        function X(t, i, r) {
            if ("number" == typeof i) if (2 > t) this.fromInt(1); else for (this.fromNumber(t, r), this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), he, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(i);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(e.ONE.shiftLeft(t - 1), this); else {
                var s = new Array, n = 7 & t;
                s.length = (t >> 3) + 1, i.nextBytes(s), n > 0 ? s[0] &= (1 << n) - 1 : s[0] = 0, this.fromString(s, 256)
            }
        }

        function te() {
            var t = this.t, e = new Array;
            e[0] = this.s;
            var i, r = this.DB - t * this.DB % 8, s = 0;
            if (t-- > 0) for (r < this.DB && (i = this[t] >> r) != (this.s & this.DM) >> r && (e[s++] = i | this.s << this.DB - r); t >= 0;) 8 > r ? (i = (this[t] & (1 << r) - 1) << 8 - r, i |= this[--t] >> (r += this.DB - 8)) : (i = this[t] >> (r -= 8) & 255, 0 >= r && (r += this.DB, --t)), 0 != (128 & i) && (i |= -256), 0 == s && (128 & this.s) != (128 & i) && ++s, (s > 0 || i != this.s) && (e[s++] = i);
            return e
        }

        function ee(t) {
            return 0 == this.compareTo(t)
        }

        function ie(t) {
            return this.compareTo(t) < 0 ? this : t
        }

        function re(t) {
            return this.compareTo(t) > 0 ? this : t
        }

        function se(t, e, i) {
            var r, s, n = Math.min(t.t, this.t);
            for (r = 0; n > r; ++r) i[r] = e(this[r], t[r]);
            if (t.t < this.t) {
                for (s = t.s & this.DM, r = n; r < this.t; ++r) i[r] = e(this[r], s);
                i.t = this.t
            } else {
                for (s = this.s & this.DM, r = n; r < t.t; ++r) i[r] = e(s, t[r]);
                i.t = t.t
            }
            i.s = e(this.s, t.s), i.clamp()
        }

        function ne(t, e) {
            return t & e
        }

        function oe(t) {
            var e = i();
            return this.bitwiseTo(t, ne, e), e
        }

        function he(t, e) {
            return t | e
        }

        function ae(t) {
            var e = i();
            return this.bitwiseTo(t, he, e), e
        }

        function ue(t, e) {
            return t ^ e
        }

        function ce(t) {
            var e = i();
            return this.bitwiseTo(t, ue, e), e
        }

        function fe(t, e) {
            return t & ~e
        }

        function pe(t) {
            var e = i();
            return this.bitwiseTo(t, fe, e), e
        }

        function le() {
            for (var t = i(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
            return t.t = this.t, t.s = ~this.s, t
        }

        function de(t) {
            var e = i();
            return 0 > t ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
        }

        function ge(t) {
            var e = i();
            return 0 > t ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
        }

        function me(t) {
            if (0 == t) return -1;
            var e = 0;
            return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e
        }

        function ye() {
            for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + me(this[t]);
            return this.s < 0 ? this.t * this.DB : -1
        }

        function ve(t) {
            for (var e = 0; 0 != t;) t &= t - 1, ++e;
            return e
        }

        function be() {
            for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i) t += ve(this[i] ^ e);
            return t
        }

        function Te(t) {
            var e = Math.floor(t / this.DB);
            return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
        }

        function Se(t, i) {
            var r = e.ONE.shiftLeft(t);
            return this.bitwiseTo(r, i, r), r
        }

        function Re(t) {
            return this.changeBit(t, he)
        }

        function Ee(t) {
            return this.changeBit(t, fe)
        }

        function De(t) {
            return this.changeBit(t, ue)
        }

        function xe(t, e) {
            for (var i = 0, r = 0, s = Math.min(t.t, this.t); s > i;) r += this[i] + t[i], e[i++] = r & this.DM, r >>= this.DB;
            if (t.t < this.t) {
                for (r += t.s; i < this.t;) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                r += this.s
            } else {
                for (r += this.s; i < t.t;) r += t[i], e[i++] = r & this.DM, r >>= this.DB;
                r += t.s
            }
            e.s = 0 > r ? -1 : 0, r > 0 ? e[i++] = r : -1 > r && (e[i++] = this.DV + r), e.t = i, e.clamp()
        }

        function we(t) {
            var e = i();
            return this.addTo(t, e), e
        }

        function Ae(t) {
            var e = i();
            return this.subTo(t, e), e
        }

        function Be(t) {
            var e = i();
            return this.multiplyTo(t, e), e
        }

        function Ke() {
            var t = i();
            return this.squareTo(t), t
        }

        function Ue(t) {
            var e = i();
            return this.divRemTo(t, e, null), e
        }

        function Oe(t) {
            var e = i();
            return this.divRemTo(t, null, e), e
        }

        function Ve(t) {
            var e = i(), r = i();
            return this.divRemTo(t, e, r), new Array(e, r)
        }

        function Ne(t) {
            this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
        }

        function Je(t, e) {
            if (0 != t) {
                for (; this.t <= e;) this[this.t++] = 0;
                for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
            }
        }

        function Ie() {
        }

        function Pe(t) {
            return t
        }

        function Me(t, e, i) {
            t.multiplyTo(e, i)
        }

        function Le(t, e) {
            t.squareTo(e)
        }

        function qe(t) {
            return this.exp(t, new Ie)
        }

        function He(t, e, i) {
            var r = Math.min(this.t + t.t, e);
            for (i.s = 0, i.t = r; r > 0;) i[--r] = 0;
            var s;
            for (s = i.t - this.t; s > r; ++r) i[r + this.t] = this.am(0, t[r], i, r, 0, this.t);
            for (s = Math.min(t.t, e); s > r; ++r) this.am(0, t[r], i, r, 0, e - r);
            i.clamp()
        }

        function Ce(t, e, i) {
            --e;
            var r = i.t = this.t + t.t - e;
            for (i.s = 0; --r >= 0;) i[r] = 0;
            for (r = Math.max(e - this.t, 0); r < t.t; ++r) i[this.t + r - e] = this.am(e - r, t[r], i, 0, 0, this.t + r - e);
            i.clamp(), i.drShiftTo(1, i)
        }

        function je(t) {
            this.r2 = i(), this.q3 = i(), e.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), this.m = t
        }

        function ke(t) {
            if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
            if (t.compareTo(this.m) < 0) return t;
            var e = i();
            return t.copyTo(e), this.reduce(e), e
        }

        function Fe(t) {
            return t
        }

        function _e(t) {
            for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
            for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
        }

        function ze(t, e) {
            t.squareTo(e), this.reduce(e)
        }

        function Ze(t, e, i) {
            t.multiplyTo(e, i), this.reduce(i)
        }

        function Ge(t, e) {
            var r, s, n = t.bitLength(), o = c(1);
            if (0 >= n) return o;
            r = 18 > n ? 1 : 48 > n ? 3 : 144 > n ? 4 : 768 > n ? 5 : 6, s = 8 > n ? new K(e) : e.isEven() ? new je(e) : new P(e);
            var h = new Array, a = 3, u = r - 1, f = (1 << r) - 1;
            if (h[1] = s.convert(this), r > 1) {
                var p = i();
                for (s.sqrTo(h[1], p); f >= a;) h[a] = i(), s.mulTo(p, h[a - 2], h[a]), a += 2
            }
            var l, d, g = t.t - 1, m = !0, v = i();
            for (n = y(t[g]) - 1; g >= 0;) {
                for (n >= u ? l = t[g] >> n - u & f : (l = (t[g] & (1 << n + 1) - 1) << u - n, g > 0 && (l |= t[g - 1] >> this.DB + n - u)), a = r; 0 == (1 & l);) l >>= 1, --a;
                if ((n -= a) < 0 && (n += this.DB, --g), m) h[l].copyTo(o), m = !1; else {
                    for (; a > 1;) s.sqrTo(o, v), s.sqrTo(v, o), a -= 2;
                    a > 0 ? s.sqrTo(o, v) : (d = o, o = v, v = d), s.mulTo(v, h[l], o)
                }
                for (; g >= 0 && 0 == (t[g] & 1 << n);) s.sqrTo(o, v), d = o, o = v, v = d, --n < 0 && (n = this.DB - 1, --g)
            }
            return s.revert(o)
        }

        function $e(t) {
            var e = this.s < 0 ? this.negate() : this.clone(), i = t.s < 0 ? t.negate() : t.clone();
            if (e.compareTo(i) < 0) {
                var r = e;
                e = i, i = r
            }
            var s = e.getLowestSetBit(), n = i.getLowestSetBit();
            if (0 > n) return e;
            for (n > s && (n = s), n > 0 && (e.rShiftTo(n, e), i.rShiftTo(n, i)); e.signum() > 0;) (s = e.getLowestSetBit()) > 0 && e.rShiftTo(s, e), (s = i.getLowestSetBit()) > 0 && i.rShiftTo(s, i), e.compareTo(i) >= 0 ? (e.subTo(i, e), e.rShiftTo(1, e)) : (i.subTo(e, i), i.rShiftTo(1, i));
            return n > 0 && i.lShiftTo(n, i), i
        }

        function Ye(t) {
            if (0 >= t) return 0;
            var e = this.DV % t, i = this.s < 0 ? t - 1 : 0;
            if (this.t > 0) if (0 == e) i = this[0] % t; else for (var r = this.t - 1; r >= 0; --r) i = (e * i + this[r]) % t;
            return i
        }

        function We(t) {
            var i = t.isEven();
            if (this.isEven() && i || 0 == t.signum()) return e.ZERO;
            for (var r = t.clone(), s = this.clone(), n = c(1), o = c(0), h = c(0), a = c(1); 0 != r.signum();) {
                for (; r.isEven();) r.rShiftTo(1, r), i ? (n.isEven() && o.isEven() || (n.addTo(this, n), o.subTo(t, o)), n.rShiftTo(1, n)) : o.isEven() || o.subTo(t, o), o.rShiftTo(1, o);
                for (; s.isEven();) s.rShiftTo(1, s), i ? (h.isEven() && a.isEven() || (h.addTo(this, h), a.subTo(t, a)), h.rShiftTo(1, h)) : a.isEven() || a.subTo(t, a), a.rShiftTo(1, a);
                r.compareTo(s) >= 0 ? (r.subTo(s, r), i && n.subTo(h, n), o.subTo(a, o)) : (s.subTo(r, s), i && h.subTo(n, h), a.subTo(o, a))
            }
            return 0 != s.compareTo(e.ONE) ? e.ZERO : a.compareTo(t) >= 0 ? a.subtract(t) : a.signum() < 0 ? (a.addTo(t, a), a.signum() < 0 ? a.add(t) : a) : a
        }

        function Qe(t) {
            var e, i = this.abs();
            if (1 == i.t && i[0] <= Oi[Oi.length - 1]) {
                for (e = 0; e < Oi.length; ++e) if (i[0] == Oi[e]) return !0;
                return !1
            }
            if (i.isEven()) return !1;
            for (e = 1; e < Oi.length;) {
                for (var r = Oi[e], s = e + 1; s < Oi.length && Vi > r;) r *= Oi[s++];
                for (r = i.modInt(r); s > e;) if (r % Oi[e++] == 0) return !1
            }
            return i.millerRabin(t)
        }

        function Xe(t) {
            var r = this.subtract(e.ONE), s = r.getLowestSetBit();
            if (0 >= s) return !1;
            var n = r.shiftRight(s);
            t = t + 1 >> 1, t > Oi.length && (t = Oi.length);
            for (var o = i(), h = 0; t > h; ++h) {
                o.fromInt(Oi[Math.floor(Math.random() * Oi.length)]);
                var a = o.modPow(n, this);
                if (0 != a.compareTo(e.ONE) && 0 != a.compareTo(r)) {
                    for (var u = 1; u++ < s && 0 != a.compareTo(r);) if (a = a.modPowInt(2, this), 0 == a.compareTo(e.ONE)) return !1;
                    if (0 != a.compareTo(r)) return !1
                }
            }
            return !0
        }

        function ti() {
            this.i = 0, this.j = 0, this.S = new Array
        }

        function ei(t) {
            var e, i, r;
            for (e = 0; 256 > e; ++e) this.S[e] = e;
            for (i = 0, e = 0; 256 > e; ++e) i = i + this.S[e] + t[e % t.length] & 255, r = this.S[e], this.S[e] = this.S[i], this.S[i] = r;
            this.i = 0, this.j = 0
        }

        function ii() {
            var t;
            return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
        }

        function ri() {
            return new ti
        }

        function si(t) {
            Ji[Ii++] ^= 255 & t, Ji[Ii++] ^= t >> 8 & 255, Ji[Ii++] ^= t >> 16 & 255, Ji[Ii++] ^= t >> 24 & 255, Ii >= Pi && (Ii -= Pi)
        }

        function ni() {
            si((new Date).getTime())
        }

        function oi() {
            if (null == Ni) {
                for (ni(), Ni = ri(), Ni.init(Ji), Ii = 0; Ii < Ji.length; ++Ii) Ji[Ii] = 0;
                Ii = 0
            }
            return Ni.next()
        }

        function hi(t) {
            var e;
            for (e = 0; e < t.length; ++e) t[e] = oi()
        }

        function ai() {
        }

        function ui(t, i) {
            return new e(t, i)
        }

        function ci(t, i) {
            if (i < t.length + 11) return console.error("Message too long for RSA"), null;
            for (var r = new Array, s = t.length - 1; s >= 0 && i > 0;) {
                var n = t.charCodeAt(s--);
                128 > n ? r[--i] = n : n > 127 && 2048 > n ? (r[--i] = 63 & n | 128, r[--i] = n >> 6 | 192) : (r[--i] = 63 & n | 128, r[--i] = n >> 6 & 63 | 128, r[--i] = n >> 12 | 224)
            }
            r[--i] = 0;
            for (var o = new ai, h = new Array; i > 2;) {
                for (h[0] = 0; 0 == h[0];) o.nextBytes(h);
                r[--i] = h[0]
            }
            return r[--i] = 2, r[--i] = 0, new e(r)
        }

        function fi() {
            this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
        }

        function pi(t, e) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ui(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
        }

        function li(t) {
            return t.modPowInt(this.e, this.n)
        }

        function di(t) {
            var e = ci(t, this.n.bitLength() + 7 >> 3);
            if (null == e) return null;
            var i = this.doPublic(e);
            if (null == i) return null;
            var r = i.toString(16);
            return 0 == (1 & r.length) ? r : "0" + r
        }

        function gi(t, e) {
            for (var i = t.toByteArray(), r = 0; r < i.length && 0 == i[r];) ++r;
            if (i.length - r != e - 1 || 2 != i[r]) return null;
            for (++r; 0 != i[r];) if (++r >= i.length) return null;
            for (var s = ""; ++r < i.length;) {
                var n = 255 & i[r];
                128 > n ? s += String.fromCharCode(n) : n > 191 && 224 > n ? (s += String.fromCharCode((31 & n) << 6 | 63 & i[r + 1]), ++r) : (s += String.fromCharCode((15 & n) << 12 | (63 & i[r + 1]) << 6 | 63 & i[r + 2]), r += 2)
            }
            return s
        }

        function mi(t, e, i) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ui(t, 16), this.e = parseInt(e, 16), this.d = ui(i, 16)) : console.error("Invalid RSA private key")
        }

        function yi(t, e, i, r, s, n, o, h) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = ui(t, 16), this.e = parseInt(e, 16), this.d = ui(i, 16), this.p = ui(r, 16), this.q = ui(s, 16), this.dmp1 = ui(n, 16), this.dmq1 = ui(o, 16), this.coeff = ui(h, 16)) : console.error("Invalid RSA private key")
        }

        function vi(t, i) {
            var r = new ai, s = t >> 1;
            this.e = parseInt(i, 16);
            for (var n = new e(i, 16); ;) {
                for (; this.p = new e(t - s, 1, r), 0 != this.p.subtract(e.ONE).gcd(n).compareTo(e.ONE) || !this.p.isProbablePrime(10);) ;
                for (; this.q = new e(s, 1, r), 0 != this.q.subtract(e.ONE).gcd(n).compareTo(e.ONE) || !this.q.isProbablePrime(10);) ;
                if (this.p.compareTo(this.q) <= 0) {
                    var o = this.p;
                    this.p = this.q, this.q = o
                }
                var h = this.p.subtract(e.ONE), a = this.q.subtract(e.ONE), u = h.multiply(a);
                if (0 == u.gcd(n).compareTo(e.ONE)) {
                    this.n = this.p.multiply(this.q), this.d = n.modInverse(u), this.dmp1 = this.d.mod(h), this.dmq1 = this.d.mod(a), this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        }

        function bi(t) {
            if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
            for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0;) e = e.add(this.p);
            return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)
        }

        function Ti(t) {
            var e = ui(t, 16), i = this.doPrivate(e);
            return null == i ? null : gi(i, this.n.bitLength() + 7 >> 3)
        }

        function Si(t) {
            var e, i, r = "";
            for (e = 0; e + 3 <= t.length; e += 3) i = parseInt(t.substring(e, e + 3), 16), r += qi.charAt(i >> 6) + qi.charAt(63 & i);
            for (e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16), r += qi.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16), r += qi.charAt(i >> 2) + qi.charAt((3 & i) << 4)); (3 & r.length) > 0;) r += Hi;
            return r
        }

        function Ri(t) {
            var e, i, r = "", s = 0;
            for (e = 0; e < t.length && t.charAt(e) != Hi; ++e) v = qi.indexOf(t.charAt(e)), 0 > v || (0 == s ? (r += o(v >> 2), i = 3 & v, s = 1) : 1 == s ? (r += o(i << 2 | v >> 4), i = 15 & v, s = 2) : 2 == s ? (r += o(i), r += o(v >> 2), i = 3 & v, s = 3) : (r += o(i << 2 | v >> 4), r += o(15 & v), s = 0));
            return 1 == s && (r += o(i << 2)), r
        }

        var Ei, Di = 0xdeadbeefcafe, xi = 15715070 == (16777215 & Di);
        xi && "Microsoft Internet Explorer" == navigator.appName ? (e.prototype.am = s, Ei = 30) : xi && "Netscape" != navigator.appName ? (e.prototype.am = r, Ei = 26) : (e.prototype.am = n, Ei = 28), e.prototype.DB = Ei, e.prototype.DM = (1 << Ei) - 1, e.prototype.DV = 1 << Ei;
        var wi = 52;
        e.prototype.FV = Math.pow(2, wi), e.prototype.F1 = wi - Ei, e.prototype.F2 = 2 * Ei - wi;
        var Ai, Bi, Ki = "0123456789abcdefghijklmnopqrstuvwxyz", Ui = new Array;
        for (Ai = "0".charCodeAt(0), Bi = 0; 9 >= Bi; ++Bi) Ui[Ai++] = Bi;
        for (Ai = "a".charCodeAt(0), Bi = 10; 36 > Bi; ++Bi) Ui[Ai++] = Bi;
        for (Ai = "A".charCodeAt(0), Bi = 10; 36 > Bi; ++Bi) Ui[Ai++] = Bi;
        K.prototype.convert = U, K.prototype.revert = O, K.prototype.reduce = V, K.prototype.mulTo = N, K.prototype.sqrTo = J, P.prototype.convert = M, P.prototype.revert = L, P.prototype.reduce = q, P.prototype.mulTo = C, P.prototype.sqrTo = H, e.prototype.copyTo = a, e.prototype.fromInt = u, e.prototype.fromString = f, e.prototype.clamp = p, e.prototype.dlShiftTo = T, e.prototype.drShiftTo = S, e.prototype.lShiftTo = R, e.prototype.rShiftTo = E, e.prototype.subTo = D, e.prototype.multiplyTo = x, e.prototype.squareTo = w, e.prototype.divRemTo = A, e.prototype.invDigit = I, e.prototype.isEven = j, e.prototype.exp = k, e.prototype.toString = l, e.prototype.negate = d, e.prototype.abs = g, e.prototype.compareTo = m, e.prototype.bitLength = b, e.prototype.mod = B, e.prototype.modPowInt = F, e.ZERO = c(0), e.ONE = c(1), Ie.prototype.convert = Pe, Ie.prototype.revert = Pe, Ie.prototype.mulTo = Me, Ie.prototype.sqrTo = Le, je.prototype.convert = ke, je.prototype.revert = Fe, je.prototype.reduce = _e, je.prototype.mulTo = Ze, je.prototype.sqrTo = ze;
        var Oi = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
            Vi = (1 << 26) / Oi[Oi.length - 1];
        e.prototype.chunkSize = $, e.prototype.toRadix = W, e.prototype.fromRadix = Q, e.prototype.fromNumber = X, e.prototype.bitwiseTo = se, e.prototype.changeBit = Se, e.prototype.addTo = xe, e.prototype.dMultiply = Ne, e.prototype.dAddOffset = Je, e.prototype.multiplyLowerTo = He, e.prototype.multiplyUpperTo = Ce, e.prototype.modInt = Ye, e.prototype.millerRabin = Xe, e.prototype.clone = _, e.prototype.intValue = z, e.prototype.byteValue = Z, e.prototype.shortValue = G, e.prototype.signum = Y, e.prototype.toByteArray = te, e.prototype.equals = ee, e.prototype.min = ie, e.prototype.max = re, e.prototype.and = oe, e.prototype.or = ae, e.prototype.xor = ce, e.prototype.andNot = pe, e.prototype.not = le, e.prototype.shiftLeft = de, e.prototype.shiftRight = ge, e.prototype.getLowestSetBit = ye, e.prototype.bitCount = be, e.prototype.testBit = Te, e.prototype.setBit = Re, e.prototype.clearBit = Ee, e.prototype.flipBit = De, e.prototype.add = we, e.prototype.subtract = Ae, e.prototype.multiply = Be, e.prototype.divide = Ue, e.prototype.remainder = Oe, e.prototype.divideAndRemainder = Ve, e.prototype.modPow = Ge, e.prototype.modInverse = We, e.prototype.pow = qe, e.prototype.gcd = $e, e.prototype.isProbablePrime = Qe, e.prototype.square = Ke, ti.prototype.init = ei, ti.prototype.next = ii;
        var Ni, Ji, Ii, Pi = 256;
        if (null == Ji) {
            Ji = new Array, Ii = 0;
            var Mi;
            if ("Netscape" == navigator.appName && navigator.appVersion < "5" && window.crypto) {
                var Li = window.crypto.random(32);
                for (Mi = 0; Mi < Li.length; ++Mi) Ji[Ii++] = 255 & Li.charCodeAt(Mi)
            }
            for (; Pi > Ii;) Mi = Math.floor(65536 * Math.random()), Ji[Ii++] = Mi >>> 8, Ji[Ii++] = 255 & Mi;
            Ii = 0, ni()
        }
        ai.prototype.nextBytes = hi, fi.prototype.doPublic = li, fi.prototype.setPublic = pi, fi.prototype.encrypt = di, fi.prototype.doPrivate = bi, fi.prototype.setPrivate = mi, fi.prototype.setPrivateEx = yi, fi.prototype.generate = vi, fi.prototype.decrypt = Ti, function () {
            var t = function (t, r, s) {
                var n = new ai, o = t >> 1;
                this.e = parseInt(r, 16);
                var h = new e(r, 16), a = this, u = function () {
                    var r = function () {
                        if (a.p.compareTo(a.q) <= 0) {
                            var t = a.p;
                            a.p = a.q, a.q = t
                        }
                        var i = a.p.subtract(e.ONE), r = a.q.subtract(e.ONE), n = i.multiply(r);
                        0 == n.gcd(h).compareTo(e.ONE) ? (a.n = a.p.multiply(a.q), a.d = h.modInverse(n), a.dmp1 = a.d.mod(i), a.dmq1 = a.d.mod(r), a.coeff = a.q.modInverse(a.p), setTimeout(function () {
                            s()
                        }, 0)) : setTimeout(u, 0)
                    }, c = function () {
                        a.q = i(), a.q.fromNumberAsync(o, 1, n, function () {
                            a.q.subtract(e.ONE).gcda(h, function (t) {
                                0 == t.compareTo(e.ONE) && a.q.isProbablePrime(10) ? setTimeout(r, 0) : setTimeout(c, 0)
                            })
                        })
                    }, f = function () {
                        a.p = i(), a.p.fromNumberAsync(t - o, 1, n, function () {
                            a.p.subtract(e.ONE).gcda(h, function (t) {
                                0 == t.compareTo(e.ONE) && a.p.isProbablePrime(10) ? setTimeout(c, 0) : setTimeout(f, 0)
                            })
                        })
                    };
                    setTimeout(f, 0)
                };
                setTimeout(u, 0)
            };
            fi.prototype.generateAsync = t;
            var r = function (t, e) {
                var i = this.s < 0 ? this.negate() : this.clone(), r = t.s < 0 ? t.negate() : t.clone();
                if (i.compareTo(r) < 0) {
                    var s = i;
                    i = r, r = s
                }
                var n = i.getLowestSetBit(), o = r.getLowestSetBit();
                if (0 > o) return void e(i);
                o > n && (o = n), o > 0 && (i.rShiftTo(o, i), r.rShiftTo(o, r));
                var h = function () {
                    (n = i.getLowestSetBit()) > 0 && i.rShiftTo(n, i), (n = r.getLowestSetBit()) > 0 && r.rShiftTo(n, r), i.compareTo(r) >= 0 ? (i.subTo(r, i), i.rShiftTo(1, i)) : (r.subTo(i, r), r.rShiftTo(1, r)), i.signum() > 0 ? setTimeout(h, 0) : (o > 0 && r.lShiftTo(o, r), setTimeout(function () {
                        e(r)
                    }, 0))
                };
                setTimeout(h, 10)
            };
            e.prototype.gcda = r;
            var s = function (t, i, r, s) {
                if ("number" == typeof i) if (2 > t) this.fromInt(1); else {
                    this.fromNumber(t, r), this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), he, this), this.isEven() && this.dAddOffset(1, 0);
                    var n = this, o = function () {
                        n.dAddOffset(2, 0), n.bitLength() > t && n.subTo(e.ONE.shiftLeft(t - 1), n), n.isProbablePrime(i) ? setTimeout(function () {
                            s()
                        }, 0) : setTimeout(o, 0)
                    };
                    setTimeout(o, 0)
                } else {
                    var h = new Array, a = 7 & t;
                    h.length = (t >> 3) + 1, i.nextBytes(h), a > 0 ? h[0] &= (1 << a) - 1 : h[0] = 0, this.fromString(h, 256)
                }
            };
            e.prototype.fromNumberAsync = s
        }();
        var qi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Hi = "=", Ci = Ci || {};
        Ci.env = Ci.env || {};
        var ji = Ci, ki = Object.prototype, Fi = "[object Function]", _i = ["toString", "valueOf"];
        Ci.env.parseUA = function (t) {
            var e, i = function (t) {
                var e = 0;
                return parseFloat(t.replace(/\./g, function () {
                    return 1 == e++ ? "" : "."
                }))
            }, r = navigator, s = {
                ie: 0,
                opera: 0,
                gecko: 0,
                webkit: 0,
                chrome: 0,
                mobile: null,
                air: 0,
                ipad: 0,
                iphone: 0,
                ipod: 0,
                ios: null,
                android: 0,
                webos: 0,
                caja: r && r.cajaVersion,
                secure: !1,
                os: null
            }, n = t || navigator && navigator.userAgent, o = window && window.location, h = o && o.href;
            return s.secure = h && 0 === h.toLowerCase().indexOf("https"), n && (/windows|win32/i.test(n) ? s.os = "windows" : /macintosh/i.test(n) ? s.os = "macintosh" : /rhino/i.test(n) && (s.os = "rhino"), /KHTML/.test(n) && (s.webkit = 1), e = n.match(/AppleWebKit\/([^\s]*)/), e && e[1] && (s.webkit = i(e[1]), / Mobile\//.test(n) ? (s.mobile = "Apple", e = n.match(/OS ([^\s]*)/), e && e[1] && (e = i(e[1].replace("_", "."))), s.ios = e, s.ipad = s.ipod = s.iphone = 0, e = n.match(/iPad|iPod|iPhone/), e && e[0] && (s[e[0].toLowerCase()] = s.ios)) : (e = n.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/), e && (s.mobile = e[0]), /webOS/.test(n) && (s.mobile = "WebOS", e = n.match(/webOS\/([^\s]*);/), e && e[1] && (s.webos = i(e[1]))), / Android/.test(n) && (s.mobile = "Android", e = n.match(/Android ([^\s]*);/), e && e[1] && (s.android = i(e[1])))), e = n.match(/Chrome\/([^\s]*)/), e && e[1] ? s.chrome = i(e[1]) : (e = n.match(/AdobeAIR\/([^\s]*)/), e && (s.air = e[0]))), s.webkit || (e = n.match(/Opera[\s\/]([^\s]*)/), e && e[1] ? (s.opera = i(e[1]), e = n.match(/Version\/([^\s]*)/), e && e[1] && (s.opera = i(e[1])), e = n.match(/Opera Mini[^;]*/), e && (s.mobile = e[0])) : (e = n.match(/MSIE\s([^;]*)/), e && e[1] ? s.ie = i(e[1]) : (e = n.match(/Gecko\/([^\s]*)/), e && (s.gecko = 1, e = n.match(/rv:([^\s\)]*)/), e && e[1] && (s.gecko = i(e[1]))))))), s
        }, Ci.env.ua = Ci.env.parseUA(), Ci.isFunction = function (t) {
            return "function" == typeof t || ki.toString.apply(t) === Fi
        }, Ci._IEEnumFix = Ci.env.ua.ie ? function (t, e) {
            var i, r, s;
            for (i = 0; i < _i.length; i += 1) r = _i[i], s = e[r], ji.isFunction(s) && s != ki[r] && (t[r] = s)
        } : function () {
        }, Ci.extend = function (t, e, i) {
            if (!e || !t) throw new Error("extend failed, please check that all dependencies are included.");
            var r, s = function () {
            };
            if (s.prototype = e.prototype, t.prototype = new s, t.prototype.constructor = t, t.superclass = e.prototype, e.prototype.constructor == ki.constructor && (e.prototype.constructor = e), i) {
                for (r in i) ji.hasOwnProperty(i, r) && (t.prototype[r] = i[r]);
                ji._IEEnumFix(t.prototype, i)
            }
        }, "undefined" != typeof KJUR && KJUR || (KJUR = {}), "undefined" != typeof KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}), KJUR.asn1.ASN1Util = new function () {
            this.integerToByteHex = function (t) {
                var e = t.toString(16);
                return e.length % 2 == 1 && (e = "0" + e), e
            }, this.bigIntToMinTwosComplementsHex = function (t) {
                var i = t.toString(16);
                if ("-" != i.substr(0, 1)) i.length % 2 == 1 ? i = "0" + i : i.match(/^[0-7]/) || (i = "00" + i); else {
                    var r = i.substr(1), s = r.length;
                    s % 2 == 1 ? s += 1 : i.match(/^[0-7]/) || (s += 2);
                    for (var n = "", o = 0; s > o; o++) n += "f";
                    var h = new e(n, 16), a = h.xor(t).add(e.ONE);
                    i = a.toString(16).replace(/^-/, "")
                }
                return i
            }, this.getPEMStringFromHex = function (t, e) {
                var i = CryptoJS.enc.Hex.parse(t), r = CryptoJS.enc.Base64.stringify(i),
                    s = r.replace(/(.{64})/g, "$1\r\n");
                return s = s.replace(/\r\n$/, ""), "-----BEGIN " + e + "-----\r\n" + s + "\r\n-----END " + e + "-----\r\n"
            }
        }, KJUR.asn1.ASN1Object = function () {
            var t = "";
            this.getLengthHexFromValue = function () {
                if ("undefined" == typeof this.hV || null == this.hV) throw"this.hV is null or undefined.";
                if (this.hV.length % 2 == 1) throw"value hex must be even length: n=" + t.length + ",v=" + this.hV;
                var e = this.hV.length / 2, i = e.toString(16);
                if (i.length % 2 == 1 && (i = "0" + i), 128 > e) return i;
                var r = i.length / 2;
                if (r > 15) throw"ASN.1 length too long to represent by 8x: n = " + e.toString(16);
                var s = 128 + r;
                return s.toString(16) + i
            }, this.getEncodedHex = function () {
                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV
            }, this.getValueHex = function () {
                return this.getEncodedHex(), this.hV
            }, this.getFreshValueHex = function () {
                return ""
            }
        }, KJUR.asn1.DERAbstractString = function (t) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
            this.getString = function () {
                return this.s
            }, this.setString = function (t) {
                this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s)
            }, this.setStringHex = function (t) {
                this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
            }, this.getFreshValueHex = function () {
                return this.hV
            }, "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex && this.setStringHex(t.hex))
        }, Ci.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object), KJUR.asn1.DERAbstractTime = function () {
            KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
            this.localDateToUTC = function (t) {
                utc = t.getTime() + 6e4 * t.getTimezoneOffset();
                var e = new Date(utc);
                return e
            }, this.formatDate = function (t, e) {
                var i = this.zeroPadding, r = this.localDateToUTC(t), s = String(r.getFullYear());
                "utc" == e && (s = s.substr(2, 2));
                var n = i(String(r.getMonth() + 1), 2), o = i(String(r.getDate()), 2), h = i(String(r.getHours()), 2),
                    a = i(String(r.getMinutes()), 2), u = i(String(r.getSeconds()), 2);
                return s + n + o + h + a + u + "Z"
            }, this.zeroPadding = function (t, e) {
                return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
            }, this.getString = function () {
                return this.s
            }, this.setString = function (t) {
                this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s)
            }, this.setByDateValue = function (t, e, i, r, s, n) {
                var o = new Date(Date.UTC(t, e - 1, i, r, s, n, 0));
                this.setByDate(o)
            }, this.getFreshValueHex = function () {
                return this.hV
            }
        }, Ci.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object), KJUR.asn1.DERAbstractStructured = function (t) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
            this.setByASN1ObjectArray = function (t) {
                this.hTLV = null, this.isModified = !0, this.asn1Array = t
            }, this.appendASN1Object = function (t) {
                this.hTLV = null, this.isModified = !0, this.asn1Array.push(t)
            }, this.asn1Array = new Array, "undefined" != typeof t && "undefined" != typeof t.array && (this.asn1Array = t.array)
        }, Ci.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object), KJUR.asn1.DERBoolean = function () {
            KJUR.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff"
        }, Ci.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object), KJUR.asn1.DERInteger = function (t) {
            KJUR.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function (t) {
                this.hTLV = null, this.isModified = !0, this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
            }, this.setByInteger = function (t) {
                var i = new e(String(t), 10);
                this.setByBigInteger(i)
            }, this.setValueHex = function (t) {
                this.hV = t
            }, this.getFreshValueHex = function () {
                return this.hV
            }, "undefined" != typeof t && ("undefined" != typeof t.bigint ? this.setByBigInteger(t.bigint) : "undefined" != typeof t["int"] ? this.setByInteger(t["int"]) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
        }, Ci.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object), KJUR.asn1.DERBitString = function (t) {
            KJUR.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function (t) {
                this.hTLV = null, this.isModified = !0, this.hV = t
            }, this.setUnusedBitsAndHexValue = function (t, e) {
                if (0 > t || t > 7) throw"unused bits shall be from 0 to 7: u = " + t;
                var i = "0" + t;
                this.hTLV = null, this.isModified = !0, this.hV = i + e
            }, this.setByBinaryString = function (t) {
                t = t.replace(/0+$/, "");
                var e = 8 - t.length % 8;
                8 == e && (e = 0);
                for (var i = 0; e >= i; i++) t += "0";
                for (var r = "", i = 0; i < t.length - 1; i += 8) {
                    var s = t.substr(i, 8), n = parseInt(s, 2).toString(16);
                    1 == n.length && (n = "0" + n), r += n
                }
                this.hTLV = null, this.isModified = !0, this.hV = "0" + e + r
            }, this.setByBooleanArray = function (t) {
                for (var e = "", i = 0; i < t.length; i++) e += 1 == t[i] ? "1" : "0";
                this.setByBinaryString(e)
            }, this.newFalseArray = function (t) {
                for (var e = new Array(t), i = 0; t > i; i++) e[i] = !1;
                return e
            }, this.getFreshValueHex = function () {
                return this.hV
            }, "undefined" != typeof t && ("undefined" != typeof t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : "undefined" != typeof t.bin ? this.setByBinaryString(t.bin) : "undefined" != typeof t.array && this.setByBooleanArray(t.array))
        }, Ci.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object), KJUR.asn1.DEROctetString = function (t) {
            KJUR.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04"
        }, Ci.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERNull = function () {
            KJUR.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500"
        }, Ci.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object), KJUR.asn1.DERObjectIdentifier = function (t) {
            var i = function (t) {
                var e = t.toString(16);
                return 1 == e.length && (e = "0" + e), e
            }, r = function (t) {
                var r = "", s = new e(t, 10), n = s.toString(2), o = 7 - n.length % 7;
                7 == o && (o = 0);
                for (var h = "", a = 0; o > a; a++) h += "0";
                n = h + n;
                for (var a = 0; a < n.length - 1; a += 7) {
                    var u = n.substr(a, 7);
                    a != n.length - 7 && (u = "1" + u), r += i(parseInt(u, 2))
                }
                return r
            };
            KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function (t) {
                this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
            }, this.setValueOidString = function (t) {
                if (!t.match(/^[0-9.]+$/)) throw"malformed oid string: " + t;
                var e = "", s = t.split("."), n = 40 * parseInt(s[0]) + parseInt(s[1]);
                e += i(n), s.splice(0, 2);
                for (var o = 0; o < s.length; o++) e += r(s[o]);
                this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e
            }, this.setValueName = function (t) {
                if ("undefined" == typeof KJUR.asn1.x509.OID.name2oidList[t]) throw"DERObjectIdentifier oidName undefined: " + t;
                var e = KJUR.asn1.x509.OID.name2oidList[t];
                this.setValueOidString(e)
            }, this.getFreshValueHex = function () {
                return this.hV
            }, "undefined" != typeof t && ("undefined" != typeof t.oid ? this.setValueOidString(t.oid) : "undefined" != typeof t.hex ? this.setValueHex(t.hex) : "undefined" != typeof t.name && this.setValueName(t.name))
        }, Ci.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object), KJUR.asn1.DERUTF8String = function (t) {
            KJUR.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c"
        }, Ci.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString), KJUR.asn1.DERNumericString = function (t) {
            KJUR.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12"
        }, Ci.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERPrintableString = function (t) {
            KJUR.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13"
        }, Ci.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERTeletexString = function (t) {
            KJUR.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14"
        }, Ci.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERIA5String = function (t) {
            KJUR.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16"
        }, Ci.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString), KJUR.asn1.DERUTCTime = function (t) {
            KJUR.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function (t) {
                this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)
            }, "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex ? this.setStringHex(t.hex) : "undefined" != typeof t.date && this.setByDate(t.date))
        }, Ci.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime), KJUR.asn1.DERGeneralizedTime = function (t) {
            KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", this.setByDate = function (t) {
                this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen"), this.hV = stohex(this.s)
            }, "undefined" != typeof t && ("undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex ? this.setStringHex(t.hex) : "undefined" != typeof t.date && this.setByDate(t.date))
        }, Ci.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime), KJUR.asn1.DERSequence = function (t) {
            KJUR.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function () {
                for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                    var i = this.asn1Array[e];
                    t += i.getEncodedHex()
                }
                return this.hV = t, this.hV
            }
        }, Ci.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured), KJUR.asn1.DERSet = function (t) {
            KJUR.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.getFreshValueHex = function () {
                for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                    var i = this.asn1Array[e];
                    t.push(i.getEncodedHex())
                }
                return t.sort(), this.hV = t.join(""), this.hV
            }
        }, Ci.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured), KJUR.asn1.DERTaggedObject = function (t) {
            KJUR.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function (t, e, i) {
                this.hT = e, this.isExplicit = t, this.asn1Object = i, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = i.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1)
            }, this.getFreshValueHex = function () {
                return this.hV
            }, "undefined" != typeof t && ("undefined" != typeof t.tag && (this.hT = t.tag), "undefined" != typeof t.explicit && (this.isExplicit = t.explicit), "undefined" != typeof t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
        }, Ci.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object), function (t) {
            "use strict";
            var e, i = {};
            i.decode = function (i) {
                var r;
                if (e === t) {
                    var s = "0123456789ABCDEF", n = " \f\n\r	 \u2028\u2029";
                    for (e = [], r = 0; 16 > r; ++r) e[s.charAt(r)] = r;
                    for (s = s.toLowerCase(), r = 10; 16 > r; ++r) e[s.charAt(r)] = r;
                    for (r = 0; r < n.length; ++r) e[n.charAt(r)] = -1
                }
                var o = [], h = 0, a = 0;
                for (r = 0; r < i.length; ++r) {
                    var u = i.charAt(r);
                    if ("=" == u) break;
                    if (u = e[u], -1 != u) {
                        if (u === t) throw"Illegal character at offset " + r;
                        h |= u, ++a >= 2 ? (o[o.length] = h, h = 0, a = 0) : h <<= 4
                    }
                }
                if (a) throw"Hex encoding incomplete: 4 bits missing";
                return o
            }, window.Hex = i
        }(), function (t) {
            "use strict";
            var e, i = {};
            i.decode = function (i) {
                var r;
                if (e === t) {
                    var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        n = "= \f\n\r	 \u2028\u2029";
                    for (e = [], r = 0; 64 > r; ++r) e[s.charAt(r)] = r;
                    for (r = 0; r < n.length; ++r) e[n.charAt(r)] = -1
                }
                var o = [], h = 0, a = 0;
                for (r = 0; r < i.length; ++r) {
                    var u = i.charAt(r);
                    if ("=" == u) break;
                    if (u = e[u], -1 != u) {
                        if (u === t) throw"Illegal character at offset " + r;
                        h |= u, ++a >= 4 ? (o[o.length] = h >> 16, o[o.length] = h >> 8 & 255, o[o.length] = 255 & h, h = 0, a = 0) : h <<= 6
                    }
                }
                switch (a) {
                    case 1:
                        throw"Base64 encoding incomplete: at least 2 bits missing";
                    case 2:
                        o[o.length] = h >> 10;
                        break;
                    case 3:
                        o[o.length] = h >> 16, o[o.length] = h >> 8 & 255
                }
                return o
            }, i.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/, i.unarmor = function (t) {
                var e = i.re.exec(t);
                if (e) if (e[1]) t = e[1]; else {
                    if (!e[2]) throw"RegExp out of sync";
                    t = e[2]
                }
                return i.decode(t)
            }, window.Base64 = i
        }(), function (t) {
            "use strict";

            function e(t, i) {
                t instanceof e ? (this.enc = t.enc, this.pos = t.pos) : (this.enc = t, this.pos = i)
            }

            function i(t, e, i, r, s) {
                this.stream = t, this.header = e, this.length = i, this.tag = r, this.sub = s
            }

            var r = 100, s = "…", n = {
                tag: function (t, e) {
                    var i = document.createElement(t);
                    return i.className = e, i
                }, text: function (t) {
                    return document.createTextNode(t)
                }
            };
            e.prototype.get = function (e) {
                if (e === t && (e = this.pos++), e >= this.enc.length) throw"Requesting byte offset " + e + " on a stream of length " + this.enc.length;
                return this.enc[e]
            }, e.prototype.hexDigits = "0123456789ABCDEF", e.prototype.hexByte = function (t) {
                return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
            }, e.prototype.hexDump = function (t, e, i) {
                for (var r = "", s = t; e > s; ++s) if (r += this.hexByte(this.get(s)), i !== !0) switch (15 & s) {
                    case 7:
                        r += "  ";
                        break;
                    case 15:
                        r += "\n";
                        break;
                    default:
                        r += " "
                }
                return r
            }, e.prototype.parseStringISO = function (t, e) {
                for (var i = "", r = t; e > r; ++r) i += String.fromCharCode(this.get(r));
                return i
            }, e.prototype.parseStringUTF = function (t, e) {
                for (var i = "", r = t; e > r;) {
                    var s = this.get(r++);
                    i += String.fromCharCode(128 > s ? s : s > 191 && 224 > s ? (31 & s) << 6 | 63 & this.get(r++) : (15 & s) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++))
                }
                return i
            }, e.prototype.parseStringBMP = function (t, e) {
                for (var i = "", r = t; e > r; r += 2) {
                    var s = this.get(r), n = this.get(r + 1);
                    i += String.fromCharCode((s << 8) + n)
                }
                return i
            }, e.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, e.prototype.parseTime = function (t, e) {
                var i = this.parseStringISO(t, e), r = this.reTime.exec(i);
                return r ? (i = r[1] + "-" + r[2] + "-" + r[3] + " " + r[4], r[5] && (i += ":" + r[5], r[6] && (i += ":" + r[6], r[7] && (i += "." + r[7]))), r[8] && (i += " UTC", "Z" != r[8] && (i += r[8], r[9] && (i += ":" + r[9]))), i) : "Unrecognized time: " + i
            }, e.prototype.parseInteger = function (t, e) {
                var i = e - t;
                if (i > 4) {
                    i <<= 3;
                    var r = this.get(t);
                    if (0 === r) i -= 8; else for (; 128 > r;) r <<= 1, --i;
                    return "(" + i + " bit)"
                }
                for (var s = 0, n = t; e > n; ++n) s = s << 8 | this.get(n);
                return s
            }, e.prototype.parseBitString = function (t, e) {
                var i = this.get(t), r = (e - t - 1 << 3) - i, s = "(" + r + " bit)";
                if (20 >= r) {
                    var n = i;
                    s += " ";
                    for (var o = e - 1; o > t; --o) {
                        for (var h = this.get(o), a = n; 8 > a; ++a) s += h >> a & 1 ? "1" : "0";
                        n = 0
                    }
                }
                return s
            }, e.prototype.parseOctetString = function (t, e) {
                var i = e - t, n = "(" + i + " byte) ";
                i > r && (e = t + r);
                for (var o = t; e > o; ++o) n += this.hexByte(this.get(o));
                return i > r && (n += s), n
            }, e.prototype.parseOID = function (t, e) {
                for (var i = "", r = 0, s = 0, n = t; e > n; ++n) {
                    var o = this.get(n);
                    if (r = r << 7 | 127 & o, s += 7, !(128 & o)) {
                        if ("" === i) {
                            var h = 80 > r ? 40 > r ? 0 : 1 : 2;
                            i = h + "." + (r - 40 * h)
                        } else i += "." + (s >= 31 ? "bigint" : r);
                        r = s = 0
                    }
                }
                return i
            }, i.prototype.typeName = function () {
                if (this.tag === t) return "unknown";
                var e = this.tag >> 6, i = (this.tag >> 5 & 1, 31 & this.tag);
                switch (e) {
                    case 0:
                        switch (i) {
                            case 0:
                                return "EOC";
                            case 1:
                                return "BOOLEAN";
                            case 2:
                                return "INTEGER";
                            case 3:
                                return "BIT_STRING";
                            case 4:
                                return "OCTET_STRING";
                            case 5:
                                return "NULL";
                            case 6:
                                return "OBJECT_IDENTIFIER";
                            case 7:
                                return "ObjectDescriptor";
                            case 8:
                                return "EXTERNAL";
                            case 9:
                                return "REAL";
                            case 10:
                                return "ENUMERATED";
                            case 11:
                                return "EMBEDDED_PDV";
                            case 12:
                                return "UTF8String";
                            case 16:
                                return "SEQUENCE";
                            case 17:
                                return "SET";
                            case 18:
                                return "NumericString";
                            case 19:
                                return "PrintableString";
                            case 20:
                                return "TeletexString";
                            case 21:
                                return "VideotexString";
                            case 22:
                                return "IA5String";
                            case 23:
                                return "UTCTime";
                            case 24:
                                return "GeneralizedTime";
                            case 25:
                                return "GraphicString";
                            case 26:
                                return "VisibleString";
                            case 27:
                                return "GeneralString";
                            case 28:
                                return "UniversalString";
                            case 30:
                                return "BMPString";
                            default:
                                return "Universal_" + i.toString(16)
                        }
                    case 1:
                        return "Application_" + i.toString(16);
                    case 2:
                        return "[" + i + "]";
                    case 3:
                        return "Private_" + i.toString(16)
                }
            }, i.prototype.reSeemsASCII = /^[ -~]+$/, i.prototype.content = function () {
                if (this.tag === t) return null;
                var e = this.tag >> 6, i = 31 & this.tag, n = this.posContent(), o = Math.abs(this.length);
                if (0 !== e) {
                    if (null !== this.sub) return "(" + this.sub.length + " elem)";
                    var h = this.stream.parseStringISO(n, n + Math.min(o, r));
                    return this.reSeemsASCII.test(h) ? h.substring(0, 2 * r) + (h.length > 2 * r ? s : "") : this.stream.parseOctetString(n, n + o)
                }
                switch (i) {
                    case 1:
                        return 0 === this.stream.get(n) ? "false" : "true";
                    case 2:
                        return this.stream.parseInteger(n, n + o);
                    case 3:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(n, n + o);
                    case 4:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(n, n + o);
                    case 6:
                        return this.stream.parseOID(n, n + o);
                    case 16:
                    case 17:
                        return "(" + this.sub.length + " elem)";
                    case 12:
                        return this.stream.parseStringUTF(n, n + o);
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 26:
                        return this.stream.parseStringISO(n, n + o);
                    case 30:
                        return this.stream.parseStringBMP(n, n + o);
                    case 23:
                    case 24:
                        return this.stream.parseTime(n, n + o)
                }
                return null
            }, i.prototype.toString = function () {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
            }, i.prototype.print = function (e) {
                if (e === t && (e = ""), document.writeln(e + this), null !== this.sub) {
                    e += "  ";
                    for (var i = 0, r = this.sub.length; r > i; ++i) this.sub[i].print(e)
                }
            }, i.prototype.toPrettyString = function (e) {
                e === t && (e = "");
                var i = e + this.typeName() + " @" + this.stream.pos;
                if (this.length >= 0 && (i += "+"), i += this.length, 32 & this.tag ? i += " (constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (i += " (encapsulates)"), i += "\n", null !== this.sub) {
                    e += "  ";
                    for (var r = 0, s = this.sub.length; s > r; ++r) i += this.sub[r].toPrettyString(e)
                }
                return i
            }, i.prototype.toDOM = function () {
                var t = n.tag("div", "node");
                t.asn1 = this;
                var e = n.tag("div", "head"), i = this.typeName().replace(/_/g, " ");
                e.innerHTML = i;
                var r = this.content();
                if (null !== r) {
                    r = String(r).replace(/</g, "&lt;");
                    var s = n.tag("span", "preview");
                    s.appendChild(n.text(r)), e.appendChild(s)
                }
                t.appendChild(e), this.node = t, this.head = e;
                var o = n.tag("div", "value");
                if (i = "Offset: " + this.stream.pos + "<br/>", i += "Length: " + this.header + "+", i += this.length >= 0 ? this.length : -this.length + " (undefined)", 32 & this.tag ? i += "<br/>(constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (i += "<br/>(encapsulates)"), null !== r && (i += "<br/>Value:<br/><b>" + r + "</b>", "object" == typeof oids && 6 == this.tag)) {
                    var h = oids[r];
                    h && (h.d && (i += "<br/>" + h.d), h.c && (i += "<br/>" + h.c), h.w && (i += "<br/>(warning!)"))
                }
                o.innerHTML = i, t.appendChild(o);
                var a = n.tag("div", "sub");
                if (null !== this.sub) for (var u = 0, c = this.sub.length; c > u; ++u) a.appendChild(this.sub[u].toDOM());
                return t.appendChild(a), e.onclick = function () {
                    t.className = "node collapsed" == t.className ? "node" : "node collapsed"
                }, t
            }, i.prototype.posStart = function () {
                return this.stream.pos
            }, i.prototype.posContent = function () {
                return this.stream.pos + this.header
            }, i.prototype.posEnd = function () {
                return this.stream.pos + this.header + Math.abs(this.length)
            }, i.prototype.fakeHover = function (t) {
                this.node.className += " hover", t && (this.head.className += " hover")
            }, i.prototype.fakeOut = function (t) {
                var e = / ?hover/;
                this.node.className = this.node.className.replace(e, ""), t && (this.head.className = this.head.className.replace(e, ""))
            }, i.prototype.toHexDOM_sub = function (t, e, i, r, s) {
                if (!(r >= s)) {
                    var o = n.tag("span", e);
                    o.appendChild(n.text(i.hexDump(r, s))), t.appendChild(o)
                }
            }, i.prototype.toHexDOM = function (e) {
                var i = n.tag("span", "hex");
                if (e === t && (e = i), this.head.hexNode = i, this.head.onmouseover = function () {
                        this.hexNode.className = "hexCurrent"
                    }, this.head.onmouseout = function () {
                        this.hexNode.className = "hex"
                    }, i.asn1 = this, i.onmouseover = function () {
                        var t = !e.selected;
                        t && (e.selected = this.asn1, this.className = "hexCurrent"), this.asn1.fakeHover(t)
                    }, i.onmouseout = function () {
                        var t = e.selected == this.asn1;
                        this.asn1.fakeOut(t), t && (e.selected = null, this.className = "hex")
                    }, this.toHexDOM_sub(i, "tag", this.stream, this.posStart(), this.posStart() + 1), this.toHexDOM_sub(i, this.length >= 0 ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent()), null === this.sub) i.appendChild(n.text(this.stream.hexDump(this.posContent(), this.posEnd()))); else if (this.sub.length > 0) {
                    var r = this.sub[0], s = this.sub[this.sub.length - 1];
                    this.toHexDOM_sub(i, "intro", this.stream, this.posContent(), r.posStart());
                    for (var o = 0, h = this.sub.length; h > o; ++o) i.appendChild(this.sub[o].toHexDOM(e));
                    this.toHexDOM_sub(i, "outro", this.stream, s.posEnd(), this.posEnd())
                }
                return i
            }, i.prototype.toHexString = function () {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
            }, i.decodeLength = function (t) {
                var e = t.get(), i = 127 & e;
                if (i == e) return i;
                if (i > 3) throw"Length over 24 bits not supported at position " + (t.pos - 1);
                if (0 === i) return -1;
                e = 0;
                for (var r = 0; i > r; ++r) e = e << 8 | t.get();
                return e
            }, i.hasContent = function (t, r, s) {
                if (32 & t) return !0;
                if (3 > t || t > 4) return !1;
                var n = new e(s);
                3 == t && n.get();
                var o = n.get();
                if (o >> 6 & 1) return !1;
                try {
                    var h = i.decodeLength(n);
                    return n.pos - s.pos + h == r
                } catch (a) {
                    return !1
                }
            }, i.decode = function (t) {
                t instanceof e || (t = new e(t, 0));
                var r = new e(t), s = t.get(), n = i.decodeLength(t), o = t.pos - r.pos, h = null;
                if (i.hasContent(s, n, t)) {
                    var a = t.pos;
                    if (3 == s && t.get(), h = [], n >= 0) {
                        for (var u = a + n; t.pos < u;) h[h.length] = i.decode(t);
                        if (t.pos != u) throw"Content size is not correct for container starting at offset " + a
                    } else try {
                        for (; ;) {
                            var c = i.decode(t);
                            if (0 === c.tag) break;
                            h[h.length] = c
                        }
                        n = a - t.pos
                    } catch (f) {
                        throw"Exception while decoding undefined length content: " + f
                    }
                } else t.pos += n;
                return new i(r, o, n, s, h)
            }, i.test = function () {
                for (var t = [{value: [39], expected: 39}, {
                    value: [129, 201],
                    expected: 201
                }, {value: [131, 254, 220, 186], expected: 16702650}], r = 0, s = t.length; s > r; ++r) {
                    var n = new e(t[r].value, 0), o = i.decodeLength(n);
                    o != t[r].expected && document.write("In test[" + r + "] expected " + t[r].expected + " got " + o + "\n")
                }
            }, window.ASN1 = i
        }(), ASN1.prototype.getHexStringValue = function () {
            var t = this.toHexString(), e = 2 * this.header, i = 2 * this.length;
            return t.substr(e, i)
        }, fi.prototype.parseKey = function (t) {
            try {
                var e = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/, i = e.test(t) ? Hex.decode(t) : Base64.unarmor(t),
                    r = ASN1.decode(i);
                if (9 === r.sub.length) {
                    var s = r.sub[1].getHexStringValue();
                    this.n = ui(s, 16);
                    var n = r.sub[2].getHexStringValue();
                    this.e = parseInt(n, 16);
                    var o = r.sub[3].getHexStringValue();
                    this.d = ui(o, 16);
                    var h = r.sub[4].getHexStringValue();
                    this.p = ui(h, 16);
                    var a = r.sub[5].getHexStringValue();
                    this.q = ui(a, 16);
                    var u = r.sub[6].getHexStringValue();
                    this.dmp1 = ui(u, 16);
                    var c = r.sub[7].getHexStringValue();
                    this.dmq1 = ui(c, 16);
                    var f = r.sub[8].getHexStringValue();
                    this.coeff = ui(f, 16)
                } else {
                    if (2 !== r.sub.length) return !1;
                    var p = r.sub[1], l = p.sub[0], s = l.sub[0].getHexStringValue();
                    this.n = ui(s, 16);
                    var n = l.sub[1].getHexStringValue();
                    this.e = parseInt(n, 16)
                }
                return !0
            } catch (d) {
                return !1
            }
        }, fi.prototype.getPrivateBaseKey = function () {
            var t = {array: [new KJUR.asn1.DERInteger({"int": 0}), new KJUR.asn1.DERInteger({bigint: this.n}), new KJUR.asn1.DERInteger({"int": this.e}), new KJUR.asn1.DERInteger({bigint: this.d}), new KJUR.asn1.DERInteger({bigint: this.p}), new KJUR.asn1.DERInteger({bigint: this.q}), new KJUR.asn1.DERInteger({bigint: this.dmp1}), new KJUR.asn1.DERInteger({bigint: this.dmq1}), new KJUR.asn1.DERInteger({bigint: this.coeff})]},
                e = new KJUR.asn1.DERSequence(t);
            return e.getEncodedHex()
        }, fi.prototype.getPrivateBaseKeyB64 = function () {
            return Si(this.getPrivateBaseKey())
        }, fi.prototype.getPublicBaseKey = function () {
            var t = {array: [new KJUR.asn1.DERObjectIdentifier({oid: "1.2.840.113549.1.1.1"}), new KJUR.asn1.DERNull]},
                e = new KJUR.asn1.DERSequence(t);
            t = {array: [new KJUR.asn1.DERInteger({bigint: this.n}), new KJUR.asn1.DERInteger({"int": this.e})]};
            var i = new KJUR.asn1.DERSequence(t);
            t = {hex: "00" + i.getEncodedHex()};
            var r = new KJUR.asn1.DERBitString(t);
            t = {array: [e, r]};
            var s = new KJUR.asn1.DERSequence(t);
            return s.getEncodedHex()
        }, fi.prototype.getPublicBaseKeyB64 = function () {
            return Si(this.getPublicBaseKey())
        }, fi.prototype.wordwrap = function (t, e) {
            if (e = e || 64, !t) return t;
            var i = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
            return t.match(RegExp(i, "g")).join("\n")
        }, fi.prototype.getPrivateKey = function () {
            var t = "-----BEGIN RSA PRIVATE KEY-----\n";
            return t += this.wordwrap(this.getPrivateBaseKeyB64()) + "\n", t += "-----END RSA PRIVATE KEY-----"
        }, fi.prototype.getPublicKey = function () {
            var t = "-----BEGIN PUBLIC KEY-----\n";
            return t += this.wordwrap(this.getPublicBaseKeyB64()) + "\n", t += "-----END PUBLIC KEY-----"
        }, fi.prototype.hasPublicKeyProperty = function (t) {
            return t = t || {}, t.hasOwnProperty("n") && t.hasOwnProperty("e")
        }, fi.prototype.hasPrivateKeyProperty = function (t) {
            return t = t || {}, t.hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
        }, fi.prototype.parsePropertiesFrom = function (t) {
            this.n = t.n, this.e = t.e, t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff)
        };
        var zi = function (t) {
            fi.call(this), t && ("string" == typeof t ? this.parseKey(t) : (this.hasPrivateKeyProperty(t) || this.hasPublicKeyProperty(t)) && this.parsePropertiesFrom(t))
        };
        zi.prototype = new fi, zi.prototype.constructor = zi;
        var Zi = function (t) {
            t = t || {}, this.default_key_size = parseInt(t.default_key_size) || 1024, this.default_public_exponent = t.default_public_exponent || "010001", this.log = t.log || !1, this.key = null
        };
        Zi.prototype.setKey = function (t) {
            this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new zi(t)
        }, Zi.prototype.setPrivateKey = function (t) {
            this.setKey(t)
        }, Zi.prototype.setPublicKey = function (t) {
            this.setKey(t)
        }, Zi.prototype.decrypt = function (t) {
            try {
                return this.getKey().decrypt(Ri(t))
            } catch (e) {
                return !1
            }
        }, Zi.prototype.encrypt = function (t) {
            try {
                return Si(this.getKey().encrypt(t))
            } catch (e) {
                return !1
            }
        }, Zi.prototype.getKey = function (t) {
            if (!this.key) {
                if (this.key = new zi, t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                this.key.generate(this.default_key_size, this.default_public_exponent)
            }
            return this.key
        }, Zi.prototype.getPrivateKey = function () {
            return this.getKey().getPrivateKey()
        }, Zi.prototype.getPrivateKeyB64 = function () {
            return this.getKey().getPrivateBaseKeyB64()
        }, Zi.prototype.getPublicKey = function () {
            return this.getKey().getPublicKey()
        }, Zi.prototype.getPublicKeyB64 = function () {
            return this.getKey().getPublicBaseKeyB64()
        }, t.JSEncrypt = Zi
    }(passport.lib.RSAExport), passport.lib.RSA = passport.lib.RSAExport.JSEncrypt;
    ;

    function _(e) {
        alert("undefined:" + e)
    }

    var passport = passport || window.passport || {};
    passport.err = passport.err || {}, function (e) {
        var a = null;
        a = "function" === (typeof e.getCurrent).toLowerCase() ? e.getCurrent() : {
            errMsg: {},
            labelText: {}
        }, a.errMsg.login = {
            "-1": {
                msg: '系统错误,请您稍后再试,<a href="http://passport.baidu.com/v2/?ucenterfeedback#{urldata}#login"  target="_blank">帮助中心</a>',
                field: ""
            },
            1: {msg: "您输入的帐号格式不正确", field: "userName"},
            2: {
                msg: '用户名或密码有误，请重新输入或<a href="http://passport.baidu.com/?getpassindex#{urldata}"  target="_blank" >找回密码</a>',
                field: "userName"
            },
            3: {msg: "验证码不存在或已过期,请重新输入", field: ""},
            4: {
                msg: "帐号或密码错误，请重新输入或者<a href='http://passport.baidu.com/?getpassindex#{urldata}'  target='_blank' >找回密码</a>",
                field: "password"
            },
            5: {msg: "", field: ""},
            6: {msg: "您输入的验证码有误", field: "verifyCode"},
            7: {
                msg: "用户名或密码有误，请重新输入或<a href='http://passport.baidu.com/?getpassindex#{urldata}'  target='_blank' >找回密码</a>",
                field: "password"
            },
            16: {
                msg: '您的帐号因安全问题已被限制登录,<a href="http://passport.baidu.com/v2/?ucenterfeedback#{urldata}#login"  target="_blank" >帮助中心</a>',
                field: ""
            },
            257: {msg: "请输入验证码", field: "verifyCode"},
            100027: {msg: "百度正在进行系统升级，暂时不能提供服务，敬请谅解", field: ""},
            120016: {msg: "", field: ""},
            18: {msg: "", field: ""},
            19: {msg: "", field: ""},
            20: {msg: "", field: ""},
            21: {msg: "没有登录权限", field: ""},
            22: {msg: "", field: ""},
            23: {msg: "", field: ""},
            24: {msg: "百度正在进行系统升级，暂时不能提供服务，敬请谅解", field: ""},
            400031: {msg: "请在弹出的窗口操作,或重新登录", field: ""},
            400032: {msg: "", field: ""},
            400034: {msg: "", field: ""},
            401007: {msg: "您的手机号关联了其他帐号，请选择登录", field: ""},
            120021: {msg: "登录失败,请在弹出的窗口操作,或重新登录", field: ""},
            500010: {msg: "登录过于频繁,请24小时后再试", field: ""},
            200010: {msg: "验证码不存在或已过期", field: ""},
            100005: {msg: "系统错误,请您稍后再试", field: ""},
            120019: {msg: "请在弹出的窗口操作,或重新登录", field: "userName"},
            110024: {msg: "此帐号暂未激活,<a href='#{gotourl}' >重发验证邮件</a>", field: ""},
            100023: {
                msg: "开启Cookie之后才能登录,<a href='http://passport.baidu.com/v2/?ucenterfeedback#{urldata}#login'  target='_blank' >如何开启</a>?",
                field: ""
            },
            17: {
                msg: '您的帐号已锁定,请<a href="http://passport.baidu.com/v2/?ucenterfeedback#login_10" target="_blank">解锁</a>后登录',
                field: "userName"
            },
            400401: {msg: "", field: ""},
            400037: {msg: "", field: ""},
            50023: {msg: "1个手机号30日内最多换绑3个账号", field: ""},
            50024: {msg: "注册过于频繁，请稍候再试", field: ""},
            50025: {msg: "注册过于频繁，请稍候再试；也可以通过上行短信的方式进行注册", field: ""},
            50028: {
                msg: '帐号或密码多次输错，请3个小时之后再试或<a href="http://passport.baidu.com/?getpassindex&getpassType=financePwdError#{urldata}"  target="_blank">找回密码</a>',
                field: ""
            },
            50029: {
                msg: '帐号或密码多次输错，请3个小时之后再试或<a href="http://passport.baidu.com/?getpassindex&getpassType=pwdError#{urldata}"  target="_blank">找回密码</a>',
                field: ""
            },
            50030: {msg: "抱歉，该手机号的申请次数已达当日上限，请更换手机号", field: ""},
            50031: {msg: "抱歉，该手机号的申请次数已达当月上限，请更换手机号", field: ""},
            50032: {msg: "抱歉，该手机号的申请次数已达本季度上限，请更换手机号", field: ""},
            400413: {msg: "", field: ""},
            400414: {msg: "", field: ""},
            400415: {msg: "帐号存在风险，为了您的帐号安全，请到百度钱包/理财/地图任一APP登录并完成验证，谢谢", field: ""},
            400500: {msg: "您登录的帐号已注销，请登录其他帐号或重新注册", field: ""},
            72200: {msg: "您的帐号因冻结暂时无法登录，请前往冻结时的手机APP，在登录页点击遇到问题进行解冻", field: ""},
            96001: {msg: "您的帐号因违反百度用户协议被限制登录", field: ""}
        }, a.errMsg.checkVerifycode = {
            500002: {msg: "您输入的验证码有误", field: "verifyCode"},
            500018: {msg: "验证码已失效，请重试", field: "verifyCode"}
        }, a.labelText.login = {
            agree: "阅读并接受",
            baiduUserProtocal: "《百度用户协议》",
            verifyCode: "验证码",
            verifyCodeStaErr: "您输入的验证码有误",
            verifyCodeLenErr: "您输入的验证码有误",
            captcha: "验证码",
            captchaErr: "您输入的动态密码有误,请重试",
            captchaAlt: "验证码图片",
            captchaChange: "换一张",
            memberPassLabel: "下次自动登录",
            login: "登录",
            fgtPwd: "忘记密码？",
            feedback: "帮助中心",
            register: "立即注册",
            phoneNum: "手机号",
            account: "邮箱",
            userName: "手机/邮箱/用户名",
            password: "密码",
            passwordResetWarnNo: '用户名或密码有误，请重新输入或<a href="http://passport.baidu.com/?getpassindex#{urldata}"  target="_blank" >找回密码</a>',
            passwordResetSms: "<a href='javascript:void(0)' onclick='var smDom=document.getElementsByClassName(\"pass-sms-btn\");if(smDom.length>0){smDom[0].click();}' >短信登录\r\n</a>,或者",
            passwordResetWarn: '用户名或密码有误，请重新输入或<a href="http://passport.baidu.com/?getpassindex#{urldata}"  target="_blank" >找回密码</a>',
            passwordResetIn: "个月以内",
            passwordResetOut: "个月以前",
            unameMailLengthError: "邮箱过长,请重新输入",
            unameInputError: "邮箱格式错误,若未绑定邮箱,请使用用户名登录",
            smsPhone: "手机号",
            smsPhoneMsg: "请输入手机号",
            smsVerifyPlaceholder: "验证码",
            smsVerifyCode: "验证码",
            toSmsBtn: "短信快捷登录",
            logining: "登录中...",
            loginsuccess: "登录成功",
            submitTimeup: "登录超时,请稍后再试",
            backToLogin: "用户名密码登录",
            footerBackToLogin: "用户名登录",
            qrcodeTitle: "请使用",
            qrcodeHref: '<a class="pass-link" href="https://mo.baidu.com/wuxian/?from=1019447z" target="new">百度App</a>扫码登录',
            qrcodeMsg: "百度技术加密，保障您的隐私安全",
            qrcodeListaq: "安全",
            qrcodeListgx: "高效",
            qrcodeListbj: "便捷",
            appName: "百度App",
            appHref: "http://xbox.m.baidu.com/mo/",
            sysError: "系统错误，休息一会儿，请稍后再试",
            sysUpdate: "服务正在升级中,请您稍后再试",
            cookieDisable: "开启Cookie之后才能登录,<a href='http://passport.baidu.com/v2/?ucenterfeedback#login'  target='_blank' >如何开启</a>?",
            captchaErr: "动态密码错误",
            confirmVerCodeEmpty: "验证码为空",
            foreignToLogin: "帐号密码登录",
            foreignMobileError: "手机号码格式不正确",
            foreignMobileMsg: "<span>请选择您的国家地区</span>",
            foreignMobileLink: "海外手机号",
            phoenixBtn: "第三方登录",
            qrcodeBtn: "扫码登录",
            QrcodeSuccessTip: "扫描成功",
            QrcodeSuccessMsg: "请在手机端确认登录",
            QrcodeErrorTip: "网络连接失败",
            QrcodeErrorMsg: "请稍候再试",
            QrcodeRefreshTip: "二维码已失效",
            QrcodeRefreshBtn: "点击刷新",
            QrcodeLoadTip: "二维码加载失败",
            nopassLead: '该帐号尚未设置密码，请先<a href="http://passport.baidu.com/?getpassindex" target="_blank" >设置密码</a>后在登录'
        }, e.getCurrent = function () {
            return a
        }
    }(passport.err);
    ;
    var passport = passport || window.passport || {};
    passport.data = passport.data || {}, function (e) {
        function t(e) {
            this._requests = [], this._value = null, this._exception = null, this._isComplete = !1;
            var t = this;
            e(function (e) {
                t._fulfillPromise(e)
            }, function (e) {
                t._breakPromise(e)
            })
        }

        function n(e, t, n) {
            return t ? n ? function (n) {
                return n = n || {}, u.submit(l + t, r(n, e, d[e], g[e], !0), {
                    charset: "utf-8",
                    processData: function (t) {
                        if (t) for (var n in t) if (t.hasOwnProperty(n)) {
                            var r = t[n];
                            r && (t[n] = decodeURIComponent(r))
                        }
                        return i(e, t)
                    }
                })
            } : function (n) {
                return u.jsonp(l + t, r(n, e, d[e], g[e], !1), {
                    charset: "utf-8", processData: function (t) {
                        return i(e, t)
                    }
                })
            } : c
        }

        function r(e, t, n, r, i) {
            var a = i ? {
                staticpage: y.staticPage,
                charset: y.charset || document.characterSet || document.charset || ""
            } : {}, o = h[t];
            if (o) for (var c in o) {
                if (o.hasOwnProperty(c)) {
                    var u = o[c];
                    a[c] = "function" == typeof u ? u(e) : u
                }
                "verifypass" == c && (a[c] = decodeURIComponent(a[c]))
            }
            if (a.token = y.token, a.tpl = y.product || "", a.subpro = y.subpro, a.apiver = "v3", a.tt = (new Date).getTime(), e) {
                n = n || {}, r = r || {};
                for (var c in e) if (e.hasOwnProperty(c)) {
                    var l = r[c], f = l ? l(e[c], e) : e[c];
                    "string" == typeof f && (i && (f = decodeURIComponent(f)), m[c] || (f = s.trim(f))), a[n[c] || c.toLowerCase()] = f
                }
            }
            return a
        }

        function i(t, n) {
            if (e && e.traceID && e.traceID.getTraceID && e.traceID.getTraceID(n), n) {
                var r = v[t];
                r && r(n);
                var i = n.errInfo, o = n, c = o;
                return i ? o.errInfo = a(t, i, o) : (i = {
                    no: n.err_no,
                    msg: n.err_msg || ""
                }, delete o.err_no, delete o.err_msg, c = {data: o, errInfo: a(t, i, o)}), c
            }
            return n
        }

        function a(e, t) {
            var n = I[w[e] || e];
            if (n && t && 0 != t.no) {
                var r = n[t.no] || n[-1];
                if (r) {
                    var i = r.msg;
                    t.msg = i, t.field = r.field
                }
            }
            return t
        }

        function o(t) {
            if (e && e.traceID && e.traceID.getTraceID && e.traceID.getTraceID(t), t) {
                var n = t.errInfo, r = t;
                if (!n) for (var i in t) if (t.hasOwnProperty(i)) {
                    var a = t[i];
                    a && (t[i] = decodeURIComponent(a))
                }
                n || (n = {no: t.err_no, msg: t.err_msg || ""}, delete r.err_no, delete r.err_msg, t = {
                    data: r,
                    errInfo: n
                })
            }
            return t
        }

        var c = function () {
        };
        t.prototype = {
            get_isComplete: function () {
                return this._isComplete
            }, get_value: function () {
                if (!this._isComplete) return void 0;
                if (this._exception) throw this._exception;
                return this._value
            }, call: function (e) {
                for (var t = [], n = 0, r = arguments.length - 1; r > n; n++) t[n] = arguments[n + 1];
                return this.when(function (n) {
                    return n[e].apply(n, t)
                })
            }, getValue: function (e) {
                return this.when(function (t) {
                    return t[e]
                })
            }, setValue: function (e, t) {
                this.whenOnly(function (n) {
                    n[e] = t
                })
            }, when: function (e, n, r) {
                return t.when(this, e, n, r)
            }, whenOnly: function (e, n, r) {
                t.whenOnly(this, e, n, r)
            }, success: function (e, t) {
                return this.when(e, c, t)
            }, fail: function (e, t) {
                return this.when(c, e, t)
            }, _enqueueOne: function (e) {
                this._isComplete ? this._notify(e) : this._requests.push(e)
            }, _notify: function (e) {
                this._exception ? e.breakPromise && e.breakPromise(this._exception) : e.fulfillPromise && e.fulfillPromise(this._value)
            }, _notifyAll: function () {
                for (var e = 0, t = this._requests.length; t > e; e++) this._notify(this._requests[e])
            }, _fulfillPromise: function (e) {
                this._value = e, this._exception = null, this._isComplete = !0, this._notifyAll()
            }, _breakPromise: function (e) {
                this._value = null, this._exception = e || new Error("An error occured"), this._isComplete = !0, this._notifyAll()
            }
        }, t.when = function (e, n, r, i) {
            return new t(function (a, o) {
                t.make(e)._enqueueOne({
                    fulfillPromise: function (e) {
                        a(n ? n.call(i, e) : e)
                    }, breakPromise: function (e) {
                        if (r) try {
                            a(r.call(i, e))
                        } catch (t) {
                            o(t)
                        } else o(e)
                    }
                })
            })
        }, t.whenOnly = function (e, n, r, i) {
            t.make(e)._enqueueOne({
                fulfillPromise: function (e) {
                    n && n.call(i, e)
                }, breakPromise: function (e) {
                    r && r.call(i, e)
                }
            })
        }, t.make = function (e) {
            return e instanceof t ? e : t.immediate(e)
        }, t.immediate = function (e) {
            return new t(function (t) {
                t(e)
            })
        };
        var s = {};
        !function (e) {
            var t = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
            e.trim = function (e) {
                return String(e).replace(t, "")
            }, e.getUniqueId = function (e) {
                return e + Math.floor(2147483648 * Math.random()).toString(36)
            }, e.g = function (e) {
                return e ? "string" == typeof e || e instanceof String ? document.getElementById(e) : !e.nodeName || 1 != e.nodeType && 9 != e.nodeType ? null : e : null
            }, e.getParent = function (t) {
                return t = e.g(t), t.parentElement || t.parentNode || null
            }, e.encodeHTML = function (e) {
                return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
            }, e.array = e.array || {}, e.array.indexOf = function (e, t, n) {
                var r = e.length;
                for (n = 0 | n, 0 > n && (n = Math.max(0, r + n)); r > n; n++) if (n in e && e[n] === t) return n;
                return -1
            }, e.browser = e.browser || {}, e.browser.opera = /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ? +(RegExp.$6 || RegExp.$2) : void 0, e.insertHTML = function (t, n, r) {
                t = e.g(t);
                var i, a;
                return t.insertAdjacentHTML && !e.browser.opera ? t.insertAdjacentHTML(n, r) : (i = t.ownerDocument.createRange(), n = n.toUpperCase(), "AFTERBEGIN" == n || "BEFOREEND" == n ? (i.selectNodeContents(t), i.collapse("AFTERBEGIN" == n)) : (a = "BEFOREBEGIN" == n, i[a ? "setStartBefore" : "setEndAfter"](t), i.collapse(a)), i.insertNode(i.createContextualFragment(r))), t
            }
        }(s), e.base = s;
        var u = {};
        !function (n) {
            var r = "__bdpp_pstc__" + (new Date).getTime(), i = r + "_form", a = r + "_ifr", o = function (e) {
                if ("object" == typeof e) {
                    var t = [];
                    for (var n in e) {
                        var r = e[n];
                        if (void 0 !== r && null !== r) {
                            t.length && t.push("&");
                            var i = encodeURIComponent("boolean" == typeof r ? r ? "1" : "0" : r.toString());
                            t.push(encodeURIComponent(n), "=", i)
                        }
                    }
                    return t.join("")
                }
                return "string" == typeof e ? e : null
            }, c = function (e, t) {
                if (t = o(t), "string" == typeof t) {
                    var n = /\?/g.test(e);
                    e += (n ? "&" : "?") + o(t)
                }
                return e
            }, u = function (e, t, n) {
                e.setAttribute("type", "text/javascript"), n && e.setAttribute("charset", n), e.setAttribute("src", t), document.getElementsByTagName("head")[0].appendChild(e)
            }, l = function (e) {
                if (e.clearAttributes) e.clearAttributes(); else for (var t in e) e.hasOwnProperty(t) && delete e[t];
                e && e.parentNode && e.parentNode.removeChild(e), e = null
            }, f = function (e, t, n) {
                function r(e) {
                    return function () {
                        try {
                            e ? f.onfailure && f.onfailure() : (t.apply(window, arguments), clearTimeout(a)), window[i] = null, delete window[i]
                        } catch (n) {
                        } finally {
                            l(o)
                        }
                    }
                }

                var i, a, o = document.createElement("SCRIPT"), c = "bd__cbs__", f = n || {}, p = f.charset,
                    d = f.queryField || "callback", g = f.timeOut || 0, h = new RegExp("(\\?|&)" + d + "=([^&]*)");
                i = s.getUniqueId(c), window[i] = r(0), g && (a = setTimeout(r(1), g)), e = e.replace(h, "$1" + d + "=" + i), e.search(h) < 0 && (e += (e.indexOf("?") < 0 ? "?" : "&") + d + "=" + i), u(o, e, p)
            }, p = function (e, t) {
                var n = [];
                n.push("<form id='", i, "' target='", a, "' "), n.push("action='", s.encodeHTML(e), "' method='post'>");
                for (var r in t) if (t.hasOwnProperty(r)) {
                    var o = t[r];
                    if (void 0 !== o && null !== o) {
                        var c = s.encodeHTML("boolean" == typeof o ? o ? "1" : "0" : o);
                        n.push("<input type='hidden' name='", s.encodeHTML(r), "' value='", c, "' />")
                    }
                }
                return n.push("</form>"), n.join("")
            }, d = function (e, t, n, o) {
                function c(e) {
                    return function () {
                        try {
                            e ? o.onfailure && o.onfailure() : (n.apply(window, arguments), l && clearTimeout(l)), window[f] = null, delete window[f]
                        } catch (t) {
                        }
                    }
                }

                o = o || {};
                var u = o.timeOut || 0, l = !1, f = s.getUniqueId("bd__pcbs__");
                t[o.queryField || "callback"] = "parent." + f;
                var d = p(e, t);
                if (s.g(i)) s.getParent(i).innerHTML = d; else {
                    var g = [];
                    g.push("<div id='", r, "' style='display:none;'>"), g.push("<div>", d, "</div>"), g.push("<iframe name='", a, "' src='" + ("https:" == (window.location ? window.location.protocol.toLowerCase() : document.location.protocol.toLowerCase()) ? "https://passport.baidu.com/passApi/html/_blank.html" : "about:blank") + "' style='display:none;'></iframe>"), g.push("</div>"), s.insertHTML(document.body, "beforeEnd", g.join(""))
                }
                window[f] = c(), u && (l = setTimeout(c(1), u)), s.g(i).submit()
            };
            n.jsonp = function (n, r, i) {
                i = i || {};
                return e && e.traceID && e.traceID.createTraceID && (r.traceid = e.traceID.createTraceID()), new t(function (e, t) {
                    n = c(n, r), f(n, function (t) {
                        i.processData && (t = i.processData(t)), e && e(t)
                    }, {
                        charset: i.charset, queryField: i.queryField, timeOut: i.timeOut, onfailure: function () {
                            t && t()
                        }
                    })
                })
            }, n.submit = function (n, r, i) {
                return e && e.traceID && e.traceID.createTraceID && (r.traceid = e.traceID.createTraceID()), n && r ? new t(function (e) {
                    d(n, r, function (t) {
                        i.processData && (t = i.processData(t)), e && e(t)
                    }, i)
                }) : void 0
            };
            var g = [];
            n.load = function (e) {
                return new t(function (t) {
                    var n = g.push(new Image) - 1, r = !1, i = setTimeout(function () {
                        r = !0, t && t()
                    }, 1e3);
                    g[n].onload = function () {
                        clearTimeout(i), r || t && t(), r = !0, g[n] = g[n].onload = null
                    }, g[n].src = e
                })
            }
        }(u);
        var l = "https://passport.baidu.com", f = {
            getApiInfo: "/v2/api/?getapi",
            getLoginHistory: "/v2/api/?loginhistory",
            loginCheck: "/v2/api/?logincheck",
            getVerifyCodeStr: "/v2/?reggetcodestr",
            getRegSmsVerifyCodeStr: "/v2/?regsmscodestr",
            checkUserName: "/v2/?regnamesugg",
            checkPassword: "/v2/?regpwdcheck",
            checkMail: "/v2/?regmailcheck",
            isUserNoName: "/v2/api/?ucenteradduname",
            checkPhone: "/v2/?regphonecheck",
            getphonestatus: "/v2/?getphonestatus",
            sendPhoneCode: "/v2/?regphonesend",
            multiBind: "/v2/?multiaccountassociate",
            multiUnbind: "/v2/?multiaccountdisassociate",
            multiCheckUserName: "/v2/?multiaccountusername",
            multiGetaccounts: "/v2/?multiaccountget",
            multiSwitchuser: "/v2/?loginswitch",
            checkVerifycode: "/v2/?checkvcode",
            getRsaKey: "/v2/getpublickey",
            authwidGetverify: "/v2/sapi/authwidgetverify",
            checkIDcard: "/v3/finance/main/idnumcert",
            checkIDcardSecondStep: "/v3/finance/main/upcert",
            checkIDcardAllStep: "/v3/finance/main/idnumcert",
            checkIDcardState: "/v3/finance/main/checkupcert"
        }, p = {
            login: "/v2/api/?login",
            reg: "/v2/api/?reg",
            fillUserName: "/v2/api/?ucenteradduname",
            regPhone: "/v2/api/?regphone",
            checkIDcard: "/v3/finance/main/idnumcert",
            checkIDcardSecondStep: "/v3/finance/main/upcert",
            checkIDcardAllStep: "/v3/finance/main/idnumcert"
        }, d = {
            getApiInfo: {apiType: "class"},
            login: {
                memberPass: "mem_pass",
                safeFlag: "safeflg",
                isPhone: "isPhone",
                timeSpan: "ppui_logintime",
                logLoginType: "logLoginType"
            },
            fillUserName: {
                selectedSuggestName: "pass_fillinusername_suggestuserradio",
                timeSpan: "ppui_fillusernametime"
            },
            reg: {
                password: "loginpass",
                timeSpan: "ppui_regtime",
                suggestIndex: "suggestIndex",
                suggestType: "suggestType",
                selectedSuggestName: "pass_reg_suggestuserradio_0",
                logRegType: "logRegType"
            },
            regPhone: {
                password: "loginpass",
                timeSpan: "ppui_regtime",
                suggestIndex: "suggestIndex",
                suggestType: "suggestType",
                selectedSuggestName: "pass_reg_suggestuserradio_0",
                logRegType: "logRegType"
            }
        }, g = {
            loginCheck: {
                isPhone: function (e) {
                    return e ? "true" : "false"
                }
            }, login: {
                memberPass: function (e) {
                    return e ? "on" : ""
                }
            }
        }, h = {
            checkPassword: {fromreg: 1}, reg: {
                registerType: 1, verifypass: function (e) {
                    return e.password
                }
            }
        }, m = {password: !0}, v = {
            login: function () {
            }
        }, w = {
            checkUserName: "reg",
            checkMail: "reg",
            checkPhone: "regPhone",
            sendPhoneCode: "regPhone",
            multiCheckUserName: "multiBind",
            multiSwitchuser: "changeUser",
            checkVerifycode: "checkVerifycode"
        }, I = passport.err.getCurrent().errMsg || passport.err.getCurrent(), y = {};
        e.setContext = function (e) {
            y.product = e.product || y.product, y.charset = e.charset || y.charset, y.staticPage = e.staticPage || y.staticPage, y.token = e.token || y.token, y.subpro = e.subpro || y.subpro
        }, e.traceID = {
            headID: e.traceID && e.traceID.headID || "",
            flowID: e.traceID && e.traceID.flowID || "",
            cases: e.traceID && e.traceID.cases || "",
            initTraceID: function (e) {
                var t = this;
                e && e.length > 0 ? (t.headID = e.slice(0, 6), t.flowID = e.slice(6, 8)) : t.destory()
            },
            createTraceID: function () {
                var e = this;
                return e.headID + e.flowID + e.cases
            },
            startFlow: function (e) {
                var t = this, n = t.getFlowID(e);
                0 === t.flowID.length || t.flowID === n ? (t.createHeadID(), t.flowID = n) : t.finishFlow(n)
            },
            finishFlow: function () {
                var e = this;
                e.destory()
            },
            getRandom: function () {
                return parseInt(90 * Math.random() + 10, 10)
            },
            createHeadID: function () {
                var e = this, t = (new Date).getTime() + e.getRandom().toString(), n = Number(t).toString(16),
                    r = n.length, i = n.slice(r - 6, r).toUpperCase();
                e.headID = i
            },
            getTraceID: function (e) {
                var t = this, n = e && e.traceid || "";
                t.initTraceID(n)
            },
            getFlowID: function (e) {
                var t = {login: "01", reg: "02"};
                return t[e]
            },
            setData: function (e) {
                var t = this;
                return e.data ? e.data.traceid = t.createTraceID() : e.url = e.url + (e.url.indexOf("?") > -1 ? "&" : "?") + "traceid=" + t.createTraceID(), e
            },
            destory: function () {
                var e = this;
                e.headID = "", e.flowID = ""
            }
        };
        for (var _ in f) f.hasOwnProperty(_) && (e[_] = n(_, f[_]));
        for (var _ in p) p.hasOwnProperty(_) && (e[_] = n(_, p[_], !0));
        e.jsonp = function (e, t) {
            return 0 != e.indexOf("http") && (e = l + e), t = t || {}, t.flag_code && 1 == t.flag_code || (t.apiver = "v3"), t.tt = (new Date).getTime(), u.jsonp(e, t, {
                charset: "utf-8",
                processData: function (e) {
                    return o(e)
                }
            })
        }, e.post = function (e, t) {
            return t = t || {}, e = "wap" == t.apitype ? e : l + e, t.staticpage = t.staticpage || y.staticPage, t.charset = t.charset || y.charset || document.characterSet || document.charset || "", t.token = t.token || y.token, t.tpl = t.tpl || y.product, u.submit(e, t, {
                charset: "utf-8",
                processData: function (e) {
                    return o(e)
                }
            })
        }, e.request = u
    }(passport.data);
    ;
    var passport = passport || window.passport || {};
    passport.analysis = passport.analysis || {}, function (e) {
        var o = function (e, o) {
            var i = e.config.diaPassLogin ? "dialogLogin" : "basicLogin", n = e.config.loginMerge ? 1 : 0,
                t = e.config.product || "isnull",
                r = window.location ? window.location.protocol.toLowerCase() : document.location.protocol.toLowerCase(),
                s = "", a = "&tt=" + (new Date).getTime(), l = e.guideRandom ? e.guideRandom : "";
            for (var g in o) s = s + "&" + g + "=" + o[g];
            if ("http:" == r) var c = "http://nsclick.baidu.com/v.gif?pid=111&url=&logintype=" + i + "&gid=" + l + "&merge=" + n + "&tpl=" + t + s + a; else if ("https:" == r) var c = "https://passport.baidu.com/img/v.gif?logintype=" + i + "&gid=" + l + "&merge=" + n + "&tpl=" + t + s + a;
            if (c) {
                var p = new Image;
                p.onload = p.onerror = function () {
                    p.onload = p.onerror = null, p = null
                }, p.src = c
            }
        };
        e.login = {
            render: function (e) {
                o(e, {
                    type: "firstrender",
                    loginurl: encodeURIComponent(document.location.href)
                }), baidu(e.getPhoenixElement("pass_phoenix_list_login")).on("click", function (i) {
                    var n, t = baidu(i.target);
                    if (t && t.attr("title")) {
                        switch (t.attr("title")) {
                            case"普通登录":
                                n = "normal";
                                break;
                            case"二维码登录":
                                n = "qrcode";
                                break;
                            case"短信登录":
                                n = "sms";
                                break;
                            case"QQ帐号":
                                n = "qq";
                                break;
                            case"新浪微博":
                                n = "weibo";
                                break;
                            case"人人网":
                                n = "renren";
                                break;
                            case"腾讯微博":
                                n = "tqq";
                                break;
                            case"飞信":
                                n = "fetion";
                                break;
                            case"微信":
                                n = "weixin";
                                break;
                            case"天翼":
                                n = "tianyi"
                        }
                        o(e, {phoenix: n})
                    }
                });
                var i = (e.getElement(), e.getElement("form"));
                baidu(i).on("submit", function () {
                    e.loginfirstsubmit || (e.loginfirstsubmit = !0, o(e, {type: "loginfirstsubmit"}))
                })
            }, changeLoginType: function (e, i) {
                o(e, {type: "changelogintype", logintype: i && i.loginType || ""})
            }, fieldFocus: function (e, i) {
                i.ele.get(0).id != e.$getId("smsPhone") && i.ele.get(0).id != e.$getId("smsVerifyCode") || e.smsloginfirstlog ? e.loginfirstlog || (e.loginfirstlog = !0, o(e, {type: "loginfirst"})) : (e.smsloginfirstlog = !0, o(e, {type: "smsloginfirst"}))
            }, loginSuccess: function (e) {
                o(e, {type: "loginsuccess"})
            }, loginError: function () {
            }, validateError: function (e, i) {
                return i.validate && o(e, {
                    errno: encodeURIComponent(i.validate.msg),
                    type: "loginerrno"
                }), {preventEvent: !1, preventDefault: !1}
            }, fieldKeyup: function (e) {
                e.KEYUPFLAG || (o(e, {type: "typein"}), e.KEYUPFLAG = !0)
            }
        }
    }(passport.analysis);
    ;
    var passport = passport || window.passport || {};
    passport.hook = passport.hook || {}, function (e) {
        function n(e) {
            var n, o, t = this, a = {
                    120016: {isLogin: !1, msg: "您的帐号存在安全风险，我们已经为您采取保护策略，建议您先绑定手机。"},
                    400032: {isLogin: !0, msg: "快来绑定密保工具吧，提升帐号安全性的同时可以快速找回密码。"},
                    400034: {
                        isLogin: !1,
                        msg: {
                            phone: "请绑定您的手机号码作为您的密保手机，提升帐号安全性的同时还可以快速找回密码。",
                            email: "请绑定一个您的常用邮箱作为您的密保邮箱，提升帐号安全性的同时还可以快速找回密码。"
                        }
                    }
                }[e.errno], r = e.args, i = e.title, s = a.msg, c = (e.auth_title, e.auth_msg, a.isLogin), l = e.cfg,
                p = function (e, n, o) {
                    var t = n.args, a = {
                        action: n.type || "init",
                        u: e.config.u,
                        tpl: e.config.product,
                        ltoken: t.rsp.data.ltoken,
                        lstr: t.rsp.data.lstr
                    };
                    e.REQUESTBINDTOKENURL = "/v2/?loginspmbindsecureinfo", passport.data.jsonp("https://passport.baidu.com" + e.REQUESTBINDTOKENURL, a).success(function (n) {
                        0 == n.errInfo.no ? o && o({
                            bindEmailToken: n.data.bindEmailToken,
                            bindMobileToken: n.data.bindMobileToken,
                            authsid: n.data.authsid,
                            loginproxy: n.data.loginproxy,
                            otherValue: a
                        }) : (e._ownerDialog && e._ownerDialog.show(), e.getElement("error").innerHTML = e.lang.sysError)
                    })
                }, d = function (e) {
                    var n = "string" == (typeof s).toLowerCase() ? s : s.email;
                    return n += c ? "您可以<a class='bindLink bindJumpEmail'>跳过此步骤</a>或<a class='bindLink bindPhoneBtn'>绑定手机</a>。" : "您也可以<a class='bindLink bindPhoneBtn'>绑定手机</a>。", passport.pop.ArmorWidget("bindemail", {
                        token: e.bindEmailToken,
                        authsid: e.authsid,
                        title: i || "绑定密保邮箱",
                        otherValue: e.otherValue,
                        msg: n,
                        subpro: t.config.subpro,
                        traceid: e.traceid,
                        onSubmitSuccess: function (e) {
                            var e = e;
                            p(t, {args: r, type: "check"}, function (n) {
                                e && e.hide && e.hide(), r.isCompleted = !0, n.loginproxy ? passport.data.jsonp(n.loginproxy).success(function (e) {
                                    l.onCompleted && l.onCompleted(e, function () {
                                        l.onCancel && l.onCancel(r)
                                    })
                                }) : l.onCancel && l.onCancel(r)
                            })
                        },
                        onRender: function () {
                            var e = this;
                            baidu(".bindPhoneBtn").on("click", function () {
                                e.close(), o.show()
                            }), baidu(".bindJumpEmail").on("click", function (n) {
                                n.preventDefault(), e.close(), r.isCompleted = !0, l.onCancel && l.onCancel(r)
                            }), baidu("#" + e.getId("header_a")).on("click", function () {
                                c && (r.isCompleted = !0, l.onCancel && l.onCancel(r))
                            })
                        }
                    })
                }, u = function (e) {
                    var o = "string" == (typeof s).toLowerCase() ? s : s.phone;
                    return c && e.bindEmailToken ? o += "您可以<a class='bindLink bindJumpPhone'>跳过此步骤</a>或<a class='bindLink bindEmailBtn'>绑定密保邮箱</a>。" : e.bindEmailToken && (o += "您也可以<a class='bindLink bindEmailBtn'>绑定密保邮箱</a>。"), passport.pop.ArmorWidget("bindmobile", {
                        token: e.bindMobileToken,
                        authsid: e.authsid,
                        title: i || "绑定手机",
                        otherValue: e.otherValue,
                        msg: o,
                        bindToLogin: 1,
                        apiMargicInstance: t,
                        subpro: t.config.subpro,
                        traceid: e.traceid,
                        onSubmitSuccess: function (e) {
                            var e = e;
                            p(t, {args: r, type: "check"}, function (n) {
                                e && e.hide && e.hide(), r.isCompleted = !0, n.loginproxy ? passport.data.jsonp(n.loginproxy).success(function (e) {
                                    l.onCompleted && l.onCompleted(e, function () {
                                        l.onCancel && l.onCancel(r)
                                    })
                                }) : l.onCancel && l.onCancel(r)
                            })
                        },
                        onRender: function (o) {
                            var o = this;
                            baidu(".bindEmailBtn").on("click", function (t) {
                                t.preventDefault(), o.close(), n = n || d(e), n.show()
                            }), baidu(".bindJumpPhone").on("click", function (e) {
                                e.preventDefault(), o.close(), r.isCompleted = !0, l.onCancel && l.onCancel(r)
                            }), baidu("#" + o.getId("header_a")).on("click", function () {
                                c && (r.isCompleted = !0, l.onCancel && l.onCancel(r))
                            })
                        },
                        onBindToLoginFn: function (e, n) {
                            n && n.mobile && (t.config.sms ? (t.getElement("smsPhone_placeholder") && t.$hide("smsPhone_placeholder"), t.getElement("smsPhone") && (t.getElement("smsPhone").value = n.mobile), t.getElement("smsVerifyCode") && (t.getElement("smsVerifyCode").value = "", t.getElement("smsVerifyCode").focus())) : (t.getElement("userName_placeholder") && t.$hide("userName_placeholder"), t.getElement("userName") && (t.getElement("userName").value = n.mobile), t.getElement("password") && (t.getElement("password").value = "", t.getElement("password").focus())))
                        }
                    })
                };
            p(t, {args: r, type: "init"}, function (e) {
                passport._use(_, w[_], function () {
                    e.bindMobileToken ? (o = u(e), o.show()) : e.bindEmailToken ? (n = d(e), n.show()) : (t._ownerDialog && t._ownerDialog.show(), t.getElement("error").innerHTML = t.lang.sysError)
                })
            })
        }

        function o(e) {
            var n, o, t = this, a = e.rspData, r = e.cfg, i = e.args, s = function (e) {
                var e = e || "系统检测到您的帐号疑似被盗，存在安全风险。请尽快修改密码。";
                return '<div class="passport-forceverify-risk"><p class="passport-forceverify-risk-msg">' + e + '</p><div  class="passport-forceverify-risk-con clearfix"><a class="passport-forceverify-risk-next" id="passport_forceverify_risk_next" href="###">下次提醒</a><a class="passport-forceverify-risk-btn" href="http://passport.baidu.com/v2/account/password" target="_blank" >立即修改</a></div></div>'
            };
            if (a && a.secstate) switch (a.secstate) {
                case"PA001":
                    o = "您的帐号密码输入错误次数达到上限，为保障帐号安全，登录前需验证身份。";
                    break;
                case"PA002":
                    o = "您的网络环境存在安全风险，为保障帐号安全，登录前需验证身份。";
                    break;
                case"PA003":
                    o = "您的帐号长时间未登录，为保障帐号安全，登录前需验证身份。";
                    break;
                case"risk":
                    n = s(), o = "您的帐号可能存在安全隐患，为保障您的帐号安全，登录前需验证身份。";
                    break;
                case"cheat":
                    o = "您的帐号因批量或者使用非法软件注册被冻结，登录前需验证身份。";
                    break;
                case"PC001":
                    o = "您操作频度过于频繁，为保障帐号安全，登录前需验证身份。";
                    break;
                case"PX008":
                    o = "您本次的登录地存在异常，为保障本次操作安全，登录前需验证身份。";
                    break;
                default:
                    o = "您的帐号存在安全风险，为保障帐号安全，登录前需验证身份。"
            }
            var c = {
                400031: {title: "登录保护", msg: "您已开启登录保护功能，为保障帐号安全，登录前需验证身份。"},
                5: {
                    title: "登录安全验证", msg: "您的网络环境存在安全风险，为保障帐号安全，登录前需验证身份。", onSuccess: function (e, n) {
                        var o = a.gotourl + "&authsid=" + n.authsid;
                        passport.data.jsonp(o).success(function (n) {
                            t._ownerDialog && t._ownerDialog.show(), e.hide(), t.getElement("error").innerHTML = 0 == n.errInfo.no || 0 == n.data.errno ? '请重新登录，或<a href="https://passport.baidu.com/?getpass_index" target="_blank">找回密码</a>' : t.lang.sysError
                        })
                    }, onGetapiError: function () {
                        t.getElement("error").innerHTML = "您所处的网络存在安全风险，请切换网络重试"
                    }
                },
                400023: {
                    title: "登录安全验证", msg: "您的网络环境存在安全风险，为保障帐号安全，登录前需验证身份。", onSuccess: function (e, n) {
                        var o = "https://passport.baidu.com/v3/login/main/qrbdusslogin?tt=" + (new Date).getTime(),
                            s = {
                                authsid: n.authsid,
                                bduss: a.bdusssign,
                                u: encodeURIComponent(a.u),
                                loginVersion: "v4",
                                tpl: t.config.product
                            };
                        passport.data.jsonp(o, s).success(function (n) {
                            e.hide(), 0 == n.errInfo.no || 0 == n.data.errno ? (i.isCompleted = !0, r.onCompleted && r.onCompleted(n, function () {
                                r.onCancel && r.onCancel(i)
                            })) : t.getElement("error").innerHTML = t.lang.sysError
                        })
                    }, onGetapiError: function () {
                        t.getElement("error").innerHTML = "您所处的网络存在安全风险，请切换网络重试"
                    }
                },
                120019: {
                    title: "登录解冻验证", msg: "您的帐号因密码输入错误次数过多，为保障帐号安全，登陆前需验证身份。", onSuccess: function (e, n) {
                        var o = a.gotourl + "&authsid=" + n.authsid;
                        passport.data.jsonp(o).success(function (n) {
                            t._ownerDialog && t._ownerDialog.show(), e.hide(), t.getElement("error").innerHTML = 0 == n.errInfo.no || 0 == n.data.errno ? '请重新登录，或<a href="https://passport.baidu.com/?getpass_index" target="_blank">找回密码</a>' : t.lang.sysError
                        })
                    }, onGetapiError: function () {
                        t.getElement("error").innerHTML = '登录密码错误已达上限，您可以<a href="https://passport.baidu.com/?getpass_index" target="_blank">找回密码</a>或3小时后再试'
                    }
                },
                120021: {
                    title: "安全验证", msg: o, defaultHTML: n, onSuccess: function (e) {
                        return passport.data.jsonp(a.loginproxy).success(function (o) {
                            e.show(), 0 == o.errInfo.no ? (i.isCompleted = !0, n ? (e.getElement("article").innerHTML = n, baidu(e.getElement("header_a")).on("click", function () {
                                e.hide(), r.onCompleted && r.onCompleted(o, function () {
                                    r.onCancel && r.onCancel(i)
                                })
                            }), baidu(document.getElementById("passport_forceverify_risk_next")).on("click", function () {
                                e.hide(), r.onCompleted && r.onCompleted(o, function () {
                                    r.onCancel && r.onCancel(i)
                                })
                            })) : (e.hide(), r.onCompleted && r.onCompleted(o, function () {
                                r.onCancel && r.onCancel(i)
                            }))) : e.getElement("forceverify_error").html(t.lang.sysError)
                        }), !1
                    }, onRender: function (e) {
                        document.getElementById("passport_forceverify_risk_appeal") && (document.getElementById("passport_forceverify_risk_appeal").href = e.url_forgot)
                    }
                },
                riskCheat: {
                    token: "risk", title: "安全验证", msg: o, defaultHTML: n, onRender: function (e) {
                        baidu(document.getElementById("passport_forceverify_risk_next")).on("click", function () {
                            e.hide(), r.onCancel && r.onCancel()
                        }), document.getElementById("passport_forceverify_risk_appeal") && (document.getElementById("passport_forceverify_risk_appeal").href = e.url_forgot)
                    }
                }
            }[e.errno];
            passport._use(y, w[y], function () {
                forceverifyLoginverify = passport.pop.Forceverify({
                    token: a.authtoken,
                    title: c.title,
                    msg: c.msg,
                    subpro: t.config.subpro,
                    u: a.u || "",
                    lstr: a.lstr || "",
                    ltoken: a.ltoken || "",
                    tpl: a.tpl || "",
                    traceid: a.traceid,
                    onRender: function (e) {
                        c.onRender && c.onRender(e)
                    },
                    onSubmitSuccess: function (e, n) {
                        if ("1" === a.realnameverifyemail) return a.realnameauthsid = n.authsid, void p.apply(t, [{
                            args: i,
                            rspData: a,
                            cfg: r
                        }]);
                        if (c.onSuccess) return void c.onSuccess(e, n);
                        var o = a.loginproxy;
                        passport.data.jsonp(o).success(function (n) {
                            0 == n.errInfo.no || 0 == n.data.errno ? (e.hide(), i.isCompleted = !0, r.onCompleted && r.onCompleted(n, function () {
                                r.onCancel && r.onCancel(i)
                            })) : (e.hide(), t._ownerDialog && t._ownerDialog.show(), t.getElement("error").innerHTML = t.lang.sysError)
                        })
                    },
                    onGetapiError: function (e) {
                        return t._ownerDialog && t._ownerDialog.show(), c.onGetapiError ? void c.onGetapiError(e) : void(t.getElement("error").innerHTML = t.lang.sysError)
                    },
                    onHide: function () {
                        r.onCancel && r.onCancel(), t.config.loginMerge && t.getElement("isPhone") && (t.getElement("isPhone").value = "")
                    }
                }, !0)
            })
        }

        function t(e) {
            for (var n = this, o = e.rspData, t = [], a = o.accounts.split(";"), r = 0; r < a.length; r++) {
                var i = a[r].split(",");
                t.push({username: i[0], portrait: i[1]})
            }
            passport._load(v + w[C], !0, function () {
                var e = passport.pop.init({
                    type: "loginMultichoice",
                    tangram: !0,
                    apiOpt: {phone: o.userName, userList: t},
                    onChoicedUser: function (o, t) {
                        e.hide(), n._ownerDialog && n._ownerDialog.show(), n.getElement("userName").value = t.username, n.getElement("isPhone").value = "false", n.config.loginMerge && n.getElement("loginMerge") && (n.getElement("loginMerge").value = ""), "sms" == n.currentLoginType ? (n.getElement("smsHiddenFields_switchuname").value = t.username, n._submitSmsForm()) : (n.config.loginMerge || (n._collectData(), n.switchTo("normal"), n._restoreData("phone")), n.submit())
                    },
                    onHide: function () {
                        n.getElement("userName").value = o.userName, n.getElement("isPhone").value = ""
                    }
                });
                e.show()
            })
        }

        function a(e) {
            var n = this, o = n.$getId("pass_b2c_swf"), t = e.args.rsp.data, a = T(), r = 0;
            t && t.bckv && (r = parseInt(t.bckv, 10) > 0);
            var i = null;
            if (passport.CONSTANT = passport.CONSTANT || {}, passport.CONSTANT.b2c_getlogin = function () {
                }, passport.CONSTANT.b2c_setlogin = function () {
                    var e = {kv: t.bckv, sync: t.bcsync, checksum: t.bcchecksum, time: t.bctime};
                    try {
                        if (i) {
                            var n = i.get_movie(o, "b2c_setlogin").b2c_setlogin(e);
                            try {
                                var a = document.createElement("script");
                                a.type = "text/javascript", a.src = [v, "/v2/b2c-stable?", "from=setlogin.done", "&checksum=", e.checksum, "&time=", e.time, "&status=", encodeURIComponent(n)].join(""), document.getElementsByTagName("head")[0].appendChild(a)
                            } catch (r) {
                            }
                        }
                    } catch (r) {
                        try {
                            var a = document.createElement("script");
                            a.type = "text/javascript", a.src = [v, "/v2/b2c-stable?", "from=setlogin.fail", "&msg=", encodeURI(r.message)].join(""), document.getElementsByTagName("head")[0].appendChild(a)
                        } catch (r) {
                        }
                    }
                }, n.getElement("pass_b2c") && a.isexists && r) {
                var s = function (e) {
                    var n = function (e) {
                        e = e || {};
                        var n, o, t, a, r = {}, i = function (e) {
                            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
                        };
                        for (o in e) r[o] = e[o];
                        e = r;
                        var s = e.vars, c = ["classid", "codebase", "id", "width", "height", "align"];
                        if (e.align = e.align || "middle", e.classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", e.codebase = "https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0", e.movie = e.url || "", delete e.vars, delete e.url, "string" == typeof s) e.flashvars = s; else {
                            var l = [];
                            for (o in s) a = s[o], l.push(o + "=" + encodeURIComponent(a));
                            e.flashvars = l.join("&")
                        }
                        var p = ["<object "];
                        for (n = 0, t = c.length; t > n; n++) a = c[n], p.push(" ", a, '="', i(e[a]), '"');
                        p.push(">");
                        var d = {
                            wmode: 1,
                            scale: 1,
                            quality: 1,
                            play: 1,
                            loop: 1,
                            menu: 1,
                            salign: 1,
                            bgcolor: 1,
                            base: 1,
                            allowscriptaccess: 1,
                            allownetworking: 1,
                            allowfullscreen: 1,
                            seamlesstabbing: 1,
                            devicefont: 1,
                            swliveconnect: 1,
                            flashvars: 1,
                            movie: 1
                        };
                        for (o in e) a = e[o], o = o.toLowerCase(), d[o] && (a || a === !1 || 0 === a) && p.push('<param name="' + o + '" value="' + i(a) + '" />');
                        e.src = e.movie, e.name = e.id, delete e.id, delete e.movie, delete e.classid, delete e.codebase, e.type = "application/x-shockwave-flash", e.pluginspage = "https://www.macromedia.com/go/getflashplayer", p.push("<embed");
                        var u;
                        for (o in e) if (a = e[o], a || a === !1 || 0 === a) {
                            if (new RegExp("^salign$", "i").test(o)) {
                                u = a;
                                continue
                            }
                            p.push(" ", o, '="', i(a), '"')
                        }
                        return u && p.push(' salign="', i(u), '"'), p.push("></embed></object>"), p.join("")
                    }, o = function (e) {
                        e = e || {};
                        var o = document.createElement("div");
                        o.innerHTML = n(e), o.style.display = "none", document.getElementsByTagName("body")[0].appendChild(o)
                    }, t = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : void 0;
                    return (t > 7 || !t) && o(e), {
                        get_movie: function (e, n) {
                            var o = document[e];
                            if (9 === document.documentMode && o && o.length) for (var t = o.length, a = 0; t > a; a++) {
                                var r = o[a];
                                if ("embed" === r.tagName.toLowerCase()) {
                                    o = r;
                                    break
                                }
                            }
                            return n && "function" != typeof o[n] && (o = document.getElementById(e)), o
                        }
                    }
                };
                try {
                    var c = window.location.protocol.toLowerCase();
                    i = s({
                        id: o,
                        width: "1",
                        height: "1",
                        url: c + "//passport.baidu.com/passApi/swf/b2c.swf?_t=" + Math.random(),
                        allowscriptaccess: "always"
                    })
                } catch (l) {
                }
            }
            passport.data.request.load(v + "/v2/b2c-flash?isexists=" + encodeURIComponent(a.isexists) + "&ver=" + encodeURIComponent(a.ver) + "&filename=" + encodeURIComponent(a.filename))
        }

        function r(e) {
            var n = this, o = e.rspData, t = e.args.rsp.data;
            return n.rebindGuideWidget ? void n.rebindGuideWidget.show() : void passport.use("uni_rebindGuide", {tangram: !0}, function () {
                n.rebindGuideWidget = new passport.pop.rebindGuideWidget({
                    color: n.config.color || "blue",
                    apiOpt: t,
                    rebindType: "rebindPhone",
                    onrebindGuideCompleted: function () {
                        D(n, o)
                    }
                }), n.rebindGuideWidget.show()
            })
        }

        function i(e) {
            var n = this, o = e.cfg, t = e.args, a = e.rspData.rsp.data || {};
            passport._load(v + w[C], !0, function () {
                m ? (m.setMakeOption && m.setMakeOption(a.authsid, a.bdstoken), m.show()) : (m = passport.pop.init({
                    type: "accSetPwd",
                    tangram: !0,
                    color: n.config.color || "blue",
                    apiOpt: {
                        u: n.config.u,
                        product: n.config.product,
                        authsid: a.authsid || "",
                        bdstoken: a.bdstoken || "",
                        staticPage: n.config.staticPage
                    },
                    onHide: function () {
                        "1" != a.setpwdswitch && (t.isCompleted = !0, o.onCancel && o.onCancel(t))
                    },
                    onSubmitSuccess: function () {
                        t.isCompleted = !0, t && t.rsp && t.rsp.errInfo && (t.rsp.errInfo.no = "0"), a.hao123Param && L(a.hao123Param, n), m.hide(), o.onCancel && o.onCancel(t)
                    }
                }), m.show())
            })
        }

        function s(e) {
            var n = this, o = e.cfg, t = e.args, a = e.rspData.rsp.data || {};
            passport._load(v + w[C], !0, function () {
                f ? (f.setMakeOption && f.setMakeOption(a.authsid, a.bdstoken), f.show()) : (f = passport.pop.init({
                    type: "accSetPwd",
                    tangram: !0,
                    color: n.config.color || "blue",
                    jumpset: "1" == a.jumpset ? 1 : 0,
                    apiOpt: {
                        u: n.config.u,
                        product: n.config.product,
                        authsid: a.authsid || "",
                        bdstoken: a.bdstoken || "",
                        username: 1,
                        staticPage: n.config.staticPage
                    },
                    onHide: function () {
                        "1" == a.jumpset && (t.isCompleted = !0, o.onCancel && o.onCancel(t))
                    },
                    onSubmitSuccess: function () {
                        t.isCompleted = !0, t && t.rsp && t.rsp.errInfo && (t.rsp.errInfo.no = "0"), a.hao123Param && L(a.hao123Param, n), f.hide(), o.onCancel && o.onCancel(t)
                    }
                }), f.show())
            })
        }

        function c(e) {
            var n = this, o = e.cfg, t = e.args, a = e.rspData.rsp.data || {},
                r = "400413" === t.rsp.errInfo.no && "sms" === e.rspData.rsp.loginType ? "1" : "0";
            passport._load(v + w[C], !0, function () {
                b ? (b.reRender && b.reRender({
                    lstr: a.lstr || "",
                    ltoken: a.ltoken || "",
                    token: a.authtoken || "",
                    loginproxy: a.loginproxy || "",
                    select: r,
                    loginType: e.rspData.rsp.loginType
                }), b.show()) : (b = passport.pop.init({
                    type: "secondCardVerify",
                    tangram: !0,
                    color: n.config.color || "blue",
                    apiOpt: {
                        u: n.config.u,
                        product: n.config.product,
                        lstr: a.lstr || "",
                        ltoken: a.ltoken || "",
                        token: a.authtoken || "",
                        staticPage: n.config.staticPage,
                        select: r,
                        loginType: e.rspData.rsp.loginType,
                        loginproxy: a.loginproxy || ""
                    },
                    onloginSuccess: function () {
                        t.isCompleted = !0, t && t.rsp && t.rsp.errInfo && (t.rsp.errInfo.no = "0"), a.hao123Param && L(a.hao123Param, n), b.hide(), o.onCancel && o.onCancel(t)
                    },
                    onSubmitSuccess: function (e, o) {
                        o.rsp.data.loginproxy && passport.data.jsonp(o.rsp.data.loginproxy).success(function (t) {
                            "0" === t.errInfo.no ? document.location.href = "https://passport.baidu.com/v3/security/main/secondcardmodifyaccinfo?tpl=" + n.config.product + "&bdstoken=" + o.rsp.data.bdstoken + "&authsid=" + o.rsp.data.mod_authsid + "&u=" + encodeURIComponent(t.data.u) + "&loginType=" + o.rsp.data.loginType + "&hasUsername=" + o.rsp.data.hasUsername : e.target.getElement("secondCardError").innerHTML = n.lang.sysError
                        })
                    }
                }), b.show())
            })
        }

        function l(e) {
            var n = this;
            e.rspData = e.rspData || {}, passport._load(v + w[E], !0, function () {
                h ? h.setToken(e.rspData.token, function () {
                    h.show()
                }) : (h = passport.pop.init({
                    type: "accConnect",
                    tangram: !0,
                    color: n.config.color || "",
                    apiOpt: {
                        u: n.config.u,
                        adtext: e.rspData.adtext,
                        product: n.config.product,
                        token: e.rspData.token,
                        staticPage: n.config.staticPage
                    },
                    onConnectSuccess: function (e) {
                        var o = e.rsp;
                        o.connect = h, D(n, {rsp: o}), e.returnValue = !1
                    }
                }), h.show())
            })
        }

        function p(e) {
            var n = this, o = e.cfg, t = e.args;
            e.rspData = e.rspData || {}, passport._load(v + w[C], !0, function () {
                g ? g.show() : (g = passport.pop.init({
                    type: "accRealName",
                    tangram: !0,
                    color: n.config.color || "",
                    apiOpt: {
                        u: n.config.u,
                        product: n.config.product,
                        staticPage: n.config.staticPage,
                        action: "login",
                        realnameswitch: e.rspData.realnameswitch,
                        authsid: e.rspData.realnameauthsid,
                        ltoken: e.rspData.ltoken,
                        lstr: e.rspData.lstr,
                        cu: e.rspData.u,
                        overseas: n.config.overseas
                    },
                    onHide: function () {
                        n.fire("RealHide", t);
                        "1" != e.rspData.realnameswitch && (t.isCompleted = !0, o.onCancel && o.onCancel(t))
                    },
                    onverifyHide: function (a) {
                        n.realLoginHide || (e.rspData.loginproxy && a ? passport.data.jsonp(e.rspData.loginproxy + "&authsid=" + a).success(function (e) {
                            0 == e.errInfo.no ? (t.isCompleted = !0, o.onCompleted && o.onCompleted(e, function () {
                                o.onCancel && o.onCancel(t)
                            })) : (n._ownerDialog && n._ownerDialog.show(), n.getElement("error").innerHTML = n.lang.sysError)
                        }) : (t.isCompleted = !0, e.rspData.hao123Param && "1" == e.rspData.realnameswitch && L(e.rspData.hao123Param, n), o.onCancel && o.onCancel(t)))
                    },
                    onSubmitSuccess: function (a, r) {
                        e.rspData.loginproxy && r.rsp.data.authsid ? passport.data.jsonp(e.rspData.loginproxy + "&authsid=" + r.rsp.data.authsid).success(function (e) {
                            0 == e.errInfo.no ? (t.isCompleted = !0, n.realLoginHide = !0, g.hide(), o.onCompleted && o.onCompleted(e, function () {
                                o.onCancel && o.onCancel(t)
                            })) : (g.hide(), n._ownerDialog && n._ownerDialog.show(), n.getElement("error").innerHTML = n.lang.sysError)
                        }) : (t.isCompleted = !0, t && t.rsp && t.rsp.errInfo && (t.rsp.errInfo.no = "0"), e.rspData.hao123Param && "1" == e.rspData.realnameswitch && L(e.rspData.hao123Param, n), n.realLoginHide = !0, g.hide(), o.onCancel && o.onCancel(t))
                    }
                }), g.show())
            })
        }

        function d(e, a, d) {
            function g(n) {
                var o = new Image;
                o.onload = o.onerror = function () {
                    o.onload = o.onerror = null, o = null
                }, o.src = v + "/img/v.gif?type=" + n + "&tt=" + (new Date).getTime(), a.isCompleted = !0, f.hao123Param && L(f.hao123Param, e), w.confirmWidgetMobileSure.hide(), d.onCancel && d.onCancel(a)
            }

            var m = a.rsp.errInfo.no, f = a.rsp.data, d = d || {},
                h = f && ("risk" == f.secstate || "cheat" == f.secstate);
            if (f && f.connectType && e.config.connect) {
                var b = e.fire("beforeWarning", {args: a});
                if (!b) return;
                return e.getElement("error").innerHTML = "", e._ownerDialog && e._ownerDialog.hide("unHide"), u(v + "/passApi/css/uni_accConnect_ab6dda9.css"), l.apply(e, [{
                    args: a,
                    rspData: f,
                    cfg: d,
                    errno: m
                }]), !1
            }
            if (18 == m) return e.getElement("error").innerHTML = "", e._ownerDialog && e._ownerDialog.hide("unHide"), p.apply(e, [{
                args: a,
                rspData: f,
                cfg: d,
                errno: m
            }]), f.hao123Param && "1" != f.realnameswitch && L(f.hao123Param, e), !1;
            if (20 === +m) {
                var b = e.fire("beforeWarning", a);
                if (!b) return;
                return e.getElement("error") && (e.getElement("error").innerHTML = ""), e.getElement("smsError") && (e.getElement("smsError").innerHTML = ""), e._ownerDialog && e._ownerDialog.hide("unHide"), i.apply(e, [{
                    args: a,
                    rspData: a,
                    cfg: d
                }]), f.hao123Param && "1" != f.setpwdswitch && L(f.hao123Param, e), !1
            }
            if (22 === +m) {
                var b = e.fire("beforeWarning", a);
                if (!b) return;
                return e.getElement("error") && (e.getElement("error").innerHTML = ""), e.getElement("smsError") && (e.getElement("smsError").innerHTML = ""), e._ownerDialog && e._ownerDialog.hide("unHide"), s.apply(e, [{
                    args: a,
                    rspData: a,
                    cfg: d
                }]), f.hao123Param && L(f.hao123Param, e), !1
            }
            if ("400413" === m || "400414" === m) {
                var b = e.fire("beforeWarning", a);
                if (!b) return;
                return e.getElement("error") && (e.getElement("error").innerHTML = ""), e.getElement("smsError") && (e.getElement("smsError").innerHTML = ""), e._ownerDialog && e._ownerDialog.hide("unHide"), c.apply(e, [{
                    args: a,
                    rspData: a,
                    cfg: d
                }]), f.hao123Param && L(f.hao123Param, e), !1
            }
            if (19 == m) {
                var w = this, f = a.rsp.data, b = e.fire("beforeWarning", a);
                if (!b) return;
                return e.getElement("error").innerHTML = "", e._ownerDialog && e._ownerDialog.hide("unHide"), null == w.confirmWidgetLabel ? passport._load(v + "/passApi/js/uni_wrapper.js", !0, function () {
                    w.confirmWidgetLabel = passport.pop.init({
                        type: "confirmWidget",
                        tangram: !0,
                        width: 430,
                        height: 150,
                        apiOpt: {contentHTML: "                                        <div class='pass-confirmContent-wrapper-Label'>                                            <div class='pass-confirmContent-msg-Label'><span class='img-class' ></span></div>                                            <ul  class='pass-confirmContent-descmsg-Label' style='margin-left:20px;'>                                                <p>近日，某邮箱帐户存在被破解的可能性，建议您使用其他</p>                                                <p>邮箱绑定百度帐号，或及时修改您的百度帐号登陆密码并</p>                                                <p>绑定手机，以确保帐户安全。</p>                                            </ul>                                        </div>"},
                        onConfirmClose: function () {
                            w.confirmWidgetLabel.hide(), D(e, a)
                        },
                        onRender: function () {
                            w.confirmWidgetLabel.getElement("confirm_cancel").style.display = "none", w.confirmWidgetLabel.getElement("confirm_continue").style.display = "none", w.confirmWidgetLabel.getElement("confirmWidget_footer").style.display = "none"
                        }
                    }), w.confirmWidgetLabel.show()
                }) : w.confirmWidgetLabel.show(), f.hao123Param && L(f.hao123Param, e), !1
            }
            if (23 == m) {
                var w = this, f = a.rsp.data, b = e.fire("beforeWarning", a);
                if (!b) return;
                return e.getElement("error").innerHTML = "", e._ownerDialog && e._ownerDialog.hide("unHide"), null == w.confirmWidgetMobileSure ? passport._load(v + "/passApi/js/uni_wrapper.js", !0, function () {
                    w.confirmWidgetMobileSure = passport.pop.init({
                        type: "confirmWidget",
                        tangram: !0,
                        titleText: "非常重要",
                        width: 430,
                        apiOpt: {
                            Cancel: "不需要解绑",
                            Continue: "申诉去解绑",
                            contentHTML: '<div class="pass-confirmContent-wrapper-sureConfirm"><div class="pass-confirmContent-wrapper-msg"><p><span class="pass-confirmContent-redcolor" id="pass-mobile-sure-num">' + f.phoneNumber + '</span>是您绑定的手机号,请确认该手机号是否还在使用,为了帐号安全请及时解绑不使用的手机。</p></div><div class="pass-confirmwidget-bottom"><span id="pass-mobile-sure-btn" class="pass-button pass-button-grey cancel">不需要解绑</span><a href="' + f.appealurl + '" id="pass-appeal-btn" class="pass-button pass-button-grey continue" target="new">申诉去解绑</a></div></div>'
                        },
                        onRender: function () {
                            w.confirmWidgetMobileSure.getElement("confirm_cancel").style.display = "none", w.confirmWidgetMobileSure.getElement("confirm_continue").style.display = "none", w.confirmWidgetMobileSure.getElement("confirmWidget_footer").style.display = "none", baidu(document.getElementById("pass-mobile-sure-btn")).on("click", function () {
                                g("mobileSurePC")
                            }), baidu(document.getElementById("pass-appeal-btn")).on("click", function () {
                                g("appealMobilePC")
                            })
                        },
                        onConfirmClose: function () {
                            g("mobileSureClosePC")
                        },
                        onConfirmContinue: function () {
                        },
                        onConfirmCancel: function () {
                        }
                    }), w.confirmWidgetMobileSure.show()
                }) : (document.getElementById("pass-mobile-sure-num") && (document.getElementById("pass-mobile-sure-num").html = f.phoneNumber || ""), w.confirmWidgetMobileSure.show()), f.hao123Param && L(f.hao123Param, e), !1
            }
            if (401007 == m) {
                var b = e.fire("beforeWarning", a);
                if (!b) return;
                return e.getElement("error").innerHTML = "", e._ownerDialog && e._ownerDialog.hide("unHide"), t.apply(e, [{rspData: f}]), !1
            }
            if (120016 == m || 400032 == m || 400034 == m) {
                var b = e.fire("beforeWarning", a);
                if (!b) return;
                return e.getElement("error").innerHTML = "", e._ownerDialog && e._ownerDialog.hide("unHide"), n.apply(e, [{
                    errno: m,
                    args: a,
                    cfg: d
                }]), f.hao123Param && L(f.hao123Param, e), !1
            }
            if (5 == m || 400031 == m || 120019 == m || 120021 == m || 400023 == m || h) {
                var b = e.fire("beforeWarning", {args: a});
                if (!b) return;
                return e.getElement("error") && (e.getElement("error").innerHTML = ""), e._ownerDialog && e._ownerDialog.hide("unHide"), u(v + "/passApi/css/uni_forceverify_1fc77c5.css"), o.apply(e, [{
                    args: a,
                    rspData: f,
                    cfg: d,
                    errno: h && 120021 != m ? "riskCheat" : m
                }]), !1
            }
            if (400037 == m) {
                var b = e.fire("beforeWarning", a);
                if (!b) return;
                return e.getElement("error").innerHTML = "", e._ownerDialog && e._ownerDialog.hide("unHide"), r.apply(e, [{
                    args: a,
                    rspData: a,
                    cfg: d
                }]), f.hao123Param && L(f.hao123Param, e), !1
            }
            return !0
        }

        function u(e) {
            if (!k[e]) {
                k[e] = !0;
                var n = document.createElement("link");
                n.rel = "stylesheet", n.type = "text/css", n.href = e, document.getElementsByTagName("head")[0].appendChild(n)
            }
            return !0
        }

        var g, m, f, h, b,
            v = window.location ? "http:" === window.location.protocol.toLowerCase() ? "http://passport.baidu.com" : "https://passport.baidu.com" : "http:" === document.location.protocol.toLowerCase() ? "http://passport.baidu.com" : "https://passport.baidu.com",
            w = {
                uni_armorwidget: "/passApi/js/uni_armorwidget_c4bb9f2.js",
                uni_forceverify: "/passApi/js/uni_forceverify_4b317af.js",
                uni_accConnect: "/passApi/js/uni_accConnect_wrapper.js",
                uni_wrapper: "/passApi/js/uni_wrapper.js"
            }, C = "uni_wrapper", y = "uni_forceverify", _ = "uni_armorwidget", E = "uni_accConnect", k = {},
            D = function (e, n) {
                var o = {tpl: e.config.product || ""}, t = {eventType: "pc_login_success"};
                e._logPass(o, t);
                var a = e.fire("loginSuccess", n);
                a && (window.location ? window.location.href = n.rsp.data.u : document.location.href = n.rsp.data.u)
            }, T = function () {
                var e = 0, n = 0, o = null, t = /msie (\d+\.\d+)/i.test(navigator.userAgent);
                if (t || console.log(navigator.plugins["Shockwave Flash"]), t) {
                    var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    a && (e = 1, n = a.GetVariable("$version"))
                } else if (navigator && navigator.plugins && navigator.plugins.length > 0 && navigator.plugins["Shockwave Flash"]) {
                    var a = navigator.plugins["Shockwave Flash"];
                    a && (o = a.filename, e = 1, n = a.version ? a.version : a.description)
                }
                return {isexists: e, ver: n, filename: o}
            }, L = function (e, n) {
                if (!(n && n.config && n.config.noSynBdu && 1 === n.config.noSynBdu)) {
                    var o = document.location.protocol.toLowerCase();
                    return "https:" != o && passport.data.request.load(o + "//v.tieba.com/platform/agency/setbdu?bdu=" + encodeURIComponent(e) + "&t=" + (new Date).getTime()), passport.data.request.load(o + "//user.nuomi.com/pclogin/main/crossdomain?bdu=" + encodeURIComponent(e) + "&t=" + (new Date).getTime()), passport.data.request.load(o + "//passport.zongheng.com/bdpass/crossdomain.do?bdu=" + encodeURIComponent(e) + "&t=" + (new Date).getTime()), passport.data.request.load("https://www.baifubao.com/api/0/sync_bduss/0?bdu=" + encodeURIComponent(e) + "&t=" + (new Date).getTime()), passport.data.request.load("https://passport.qianqian.com/bdpass?bdu=" + encodeURIComponent(e) + "&t=" + (new Date).getTime()), passport.data.request.load(o + "//passport.chuanke.com/api/sync?bdu=" + encodeURIComponent(e) + "&t=" + (new Date).getTime()), passport.data.request.load(o + "//user.hao123.com/static/crossdomain.php?bdu=" + encodeURIComponent(e) + "&t=" + (new Date).getTime())
                }
            };
        e.login = {
            loginSuccess: function (e, n) {
                var o = /msie (\d+\.\d+)/i.test(navigator.userAgent);
                if (e.config.setWebToClient && !o && a.apply(e, [{args: n}]), e.config.noSynBdu && 1 === e.config.noSynBdu) {
                    var t = d(e, n, {
                        onCancel: function () {
                            D(e, n)
                        }
                    });
                    t && D(e, n)
                } else L(n.rsp.data.hao123Param, e).success(function () {
                    var o = d(e, n, {
                        onCancel: function () {
                            D(e, n)
                        }
                    });
                    o && D(e, n)
                });
                return {preventEvent: !0, preventDefault: !0}
            }, loginError: function (e, n) {
                return d(e, n, {
                    onCompleted: function (n, o) {
                        e.config.noSynBdu && 1 === e.config.noSynBdu ? o() : L(n.data.hao123Param, e).success(o)
                    }, onCancel: function (n) {
                        n && n.isCompleted && D(e, {rsp: n.rsp})
                    }
                }), {preventEvent: !1, preventDefault: !1}
            }, connectNeedBind: function (e, n) {
                return d(e, n, {
                    onCompleted: function () {
                    }, onCancel: function () {
                    }
                }), {preventEvent: !1, preventDefault: !1}
            }, validateAllError: function (e, n) {
                var o = n.validates ? e.getElement(n.validates[n.validates.length - 1].field) : "";
                return o && o.focus && o.focus(), {preventEvent: !1, preventDefault: !1}
            }
        }
    }(passport.hook);
    ;
    magic.passport = baidu.lang.createClass(function () {
        this._validateInfo = {}
    }, {type: "magic.passport", superClass: magic.Base}).extend({
        _getRegularField: function (e) {
            var t = e.pwd ? "password" : "text", a = this, i = 'autocomplete="off"',
                n = e.maxLength ? 'maxlength="' + e.maxLength + '"' : "", r = e.tip ? e.tip : "",
                s = e.value ? e.value : "", l = e.field + "" == "verifycode" ? "none" : "", o = "";
            o = "text" === t ? '<input type="text" style="display:none;">' : '<input type="password" style="display: none;">';
            var d = '<p id="' + a.$getId(e.field + "Wrapper") + '" class="pass-form-item pass-form-item-' + e.field + '" style="display:' + l + '">' + (e.label ? '<label for="' + a.$getId(e.field) + '" id="' + a.$getId(e.field + "Label") + '" class="pass-label pass-label-' + e.field + '">' + e.label + "</label>" : "") + o + '<input id="' + a.$getId(e.field) + '" type="' + t + '" name="' + e.field + '" class="pass-text-input pass-text-input-' + e.field + '" ' + n + (e.placeholder ? 'placeholder="' + e.placeholder + '" ' : "") + i + (e.disabled ? '" disabled' : "") + ' value="' + s + '"/>' + (e.noError ? "" : '<span id="' + a.$getId(e.field + "Error") + '" class="pass-item-error pass-item-error-' + e.field + '"></span>') + (e.hasSucc ? '<span id="' + a.$getId(e.field + "Succ") + '" class="pass-item-succ pass-item-succ-' + e.field + '" style="display:none;"></span>' : "") + '<span id="' + a.$getId(e.field + "Tip") + '" class="pass-item-tip pass-item-tip-' + e.field + '" style="display:none"><span id="' + a.$getId(e.field + "TipText") + '" class="pass-item-tiptext pass-item-tiptext-' + e.field + '">' + r + "</span></span></p>";
            return d
        },
        _getHiddenField: function (e, t) {
            var a, i = this, n = '<p id="' + i.$getId(t || "hiddenFields") + '" style="display:none">';
            for (var r in e) e.hasOwnProperty(r) && (a = "string" == typeof e[r] ? e[r].replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\x22/g, "&quot;").replace(/\x27/g, "&#39;") : e[r], n += '<input type="hidden" id="' + i.$getId((t ? t + "_" : "") + r) + '" name="' + r + '" value="' + a + '" />');
            return n += "</p>"
        },
        _setEvent: function () {
            var e = this, t = this.getElement(), a = function (t) {
                e._eventHandler.entrance.apply(e, [t])
            };
            baidu(e.getElement()).on("resize", function () {
                var e = (navigator.userAgent, !navigator.userAgent.match(/OS [1-8]_\d[_\d]* like Mac OS X/i)),
                    t = !!navigator.userAgent.toString().match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                    a = navigator.userAgent.toString().indexOf("iPad");
                if (e && t && null != a) {
                    var i = document.getElementsByClassName("popBox");
                    null != i && i.length > 0 && (i[0].style.height = window.screen.height > document.body.clientHeight ? window.screen.height * (window.screen.height / document.body.clientHeight) + 120 + "px" : window.screen.height * (window.screen.height / document.body.clientHeight))
                }
            }), baidu(e.getElement("form")).on("submit", a), baidu(e.getElement("license")).on("click", a), baidu(e.getElement("verifyCodeChange")).on("click", a), baidu(e.getElement("verifyCodeSend")).on("click", a), baidu(e.getElement("smsVcodeSend")).on("click", a), baidu(t).delegate(".pass-suggest-item label", "click", a), baidu(".pass-text-input", e.getElement()).on({
                focus: a,
                blur: a,
                change: a,
                keyup: a,
                mouseover: a,
                mouseout: a
            })
        },
        _validator: {
            confStorage: {},
            builtInMsg: {required: "请您输入%s", phone: "手机号码格式不正确", email: "邮箱格式不正确", idcard: "身份证格式不正确"},
            builtInRules: {
                required: /\S+/,
                phone: /^1[3456789]\d{9}$/,
                email: /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                idcard: /(^\d{15}$)|(^\d{17}(\d|X|x)$)/
            },
            init: function (e, t) {
                this.confStorage[e.$getId()] = t
            },
            validate: function (e, t, a, i) {
                var n = e.getElement(t), r = {field: t}, s = /^\s*(.+?)\s*$/;
                if (!n || 0 === +n.offsetHeight) return !1;
                for (var l = n.value.replace(s, "$1"), o = this.confStorage[e.$getId()][t], d = o.rules, c = 0, u = d.length; u > c; c++) {
                    var p, f = d[c], g = this.builtInRules[f];
                    if (p = "[object function]" === Object.prototype.toString.call(g).toLowerCase() ? g.call(e, n, i) : new RegExp(g).test(l), !p) return r.error = !0, e._validateInfo[t] = 0, r.msg = this.builtInMsg[f].replace(/\%s/, o.desc), e._validateError(r), void a.error(r)
                }
                o.asyncRule ? o.asyncRule.call(e, {
                    success: function (i) {
                        r.error = !1, r.data = i.data, e._validateInfo[t] = 1, e._validateSuccess(r), a.success(r)
                    }, error: function (i) {
                        r.error = !0, e._validateInfo[t] = 0, r.msg = i.msg, e._validateError(r), a.error(r)
                    }
                }, i) : (r.error = !1, e._validateInfo[t] = 1, e._validateSuccess(r), a.success(r))
            },
            validateAll: function (e, t, a) {
                function i() {
                    l = !0, s ? t && t.error(o) : t && t.success(o)
                }

                var n = this.confStorage[e.$getId()], r = 0, s = !1, l = !1, o = [], d = this._getActiveValidate(e, !0);
                for (var c in n) {
                    if (l) break;
                    this.validate(e, c, {
                        success: function (e) {
                            r++, o.push(e), r === d && i()
                        }, error: function (e) {
                            return s = !0, r++, o.push(e), a ? void i() : void(r === d && i())
                        }
                    }, "all")
                }
            },
            _getActiveValidate: function (e, t) {
                var a = this.confStorage[e.$getId()], i = [];
                for (var n in a) {
                    var r = e.getElement(n);
                    r && 0 !== r.offsetHeight && i.push(r)
                }
                return t ? i.length : i
            },
            addRule: function (e, t) {
                var a = {};
                a[e] = t, baidu.extend(this.builtInRules, a)
            },
            addMsg: function (e, t) {
                var a = {};
                a[e] = t, baidu.extend(this.builtInMsg, a)
            }
        },
        validate: function (e, t) {
            var a = this, i = a.fireEvent("beforeValidate", {validate: {field: e, ele: baidu(a.getElement(e))}});
            i && a._validator.validate(a, e, {
                success: function (e) {
                    var i = a.fireEvent("validateSuccess", {validate: e});
                    i && t && t.success && t.success(e)
                }, error: function (e) {
                    var i = a.fireEvent("validateError", {validate: e});
                    i && t && t.error && t.error(e)
                }
            })
        },
        validateAll: function (e, t) {
            var a = this;
            t = "boolean" == typeof e ? e : t ? t : !1;
            var i = a.fireEvent("beforeValidateAll");
            i && a._validator.validateAll(a, {
                success: function (t) {
                    var i = a.fireEvent("validateAllSuccess", {validates: t});
                    i && e && e.success && e.success(t)
                }, error: function (t) {
                    var i = a.fireEvent("validateAllError", {validates: t});
                    i && e && e.error && e.error(t)
                }
            }, t)
        },
        getValidateStatus: function (e) {
            return this._validateInfo.hasOwnProperty(e) ? this._validateInfo[e] : -1
        },
        setValidateSuccess: function (e) {
            var t = this;
            t._validateInfo[e] = 1, t._validateSuccess({field: e})
        },
        setValidateError: function (e, t, a) {
            var i = this;
            i._validateInfo[e] = 0, i._validateError({field: e, msg: t}, a)
        },
        setGeneralError: function (e) {
            this.getElement("error").innerHTML = e
        },
        clearGeneralError: function () {
            this.getElement("error").innerHTML = ""
        },
        _isSupportPlaceholder: function () {
            return "placeholder" in document.createElement("input")
        },
        _getPlaceholder: function (e) {
            for (var t = this, a = {}, i = "", n = {}, r = 0; r < e.length; r++) i = t.lang[e[r].placeholder], 0 !== +e[r].clearbtn && (n[r] = baidu('<span id="' + t.$getId(e[r].label + "_clearbtn") + '" class="pass-clearbtn pass-clearbtn-' + e[r].label + '" style="display:none;"></span>'), baidu(t.getElement(e[r].label)).after(n[r])), t._isSupportPlaceholder() && !baidu.browser.ie ? baidu(t.getElement(e[r].label)).attr({placeholder: i}) : (a[r] = baidu('<span id="' + t.$getId(e[r].label + "_placeholder") + '" class="pass-placeholder pass-placeholder-' + e[r].label + '">' + i + "</span>"), baidu(t.getElement(e[r].label)).after(a[r])), t._rendEventPlaceholder(t.getElement(e[r].label), a[r], n[r])
        },
        _getCookie: function (e) {
            var t, a = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            return (t = document.cookie.match(a)) ? unescape(t[2]) : null
        },
        _logPass: function (e, t) {
            function a(e) {
                var t, a, i, n, r, s, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                for (i = e.length, a = 0, t = ""; i > a;) {
                    if (n = 255 & e.charCodeAt(a++), a === i) {
                        t += l.charAt(n >> 2), t += l.charAt((3 & n) << 4), t += "==";
                        break
                    }
                    if (r = e.charCodeAt(a++), a === i) {
                        t += l.charAt(n >> 2), t += l.charAt((3 & n) << 4 | (240 & r) >> 4), t += l.charAt((15 & r) << 2), t += "=";
                        break
                    }
                    s = e.charCodeAt(a++), t += l.charAt(n >> 2), t += l.charAt((3 & n) << 4 | (240 & r) >> 4), t += l.charAt((15 & r) << 2 | (192 & s) >> 6), t += l.charAt(63 & s)
                }
                return t
            }

            var i = document.location.protocol + "//nsclick.baidu.com/v.gif?pid=111&v=" + (new Date).getTime(), n = "";
            for (var r in t) n = n + r + ":" + t[r] + ",";
            n = a("{" + n.substring(0, n.length - 1) + "}");
            for (var s in e) e.hasOwnProperty(s) && (i += "&" + s + "=" + e[s]);
            if (i += "&source=pc", i += "&auto_statistic=" + n + "&auto_en=" + t.eventType) {
                var l = new Image;
                l.onload = l.onerror = function () {
                    l.onload = l.onerror = null, l = null
                }, l.src = i
            }
        },
        _rendEventPlaceholder: function (e, t, a) {
            if (e || a) {
                var i, n, r = this, s = function (e) {
                    1 === +e ? (t && t[0] && r.$hide(t[0]), a && a[0] && r.$show(a[0])) : (t && t[0] && r.$show(t[0]), a && a[0] && r.$hide(a[0]))
                };
                setTimeout(function () {
                    void 0 !== e && e.value && s(1)
                }, 200), baidu(t).on("mousedown", function () {
                    n = !0, clearTimeout(i), i = setTimeout(function () {
                        r.suggestionDom && "none" !== r.suggestionDom.style.display || e.focus()
                    }, 0)
                }), baidu(a).on("click", function () {
                    e.value = "", s(0), e.focus(), r.suggestionDom && (r.suggestionDom.data_delete = !0, setTimeout(function () {
                        r.suggestionDom.data_delete = !1
                    }, 200))
                }), baidu(e).on("keyup", function () {
                    s(e.value ? 1 : 0)
                }), baidu(e).on("focus", function () {
                    window.inputCheckTimer = setInterval(function () {
                        e.value.length ? (s(1), clearInterval(window.inputCheckTimer)) : s(0)
                    }, 30)
                })
            }
        },
        SBCtoDBC: function (e) {
            var t = "";
            if (e) {
                for (var a = e.length, i = 0; a > i; i++) {
                    var n = e.charCodeAt(i);
                    n = n >= 65281 && 65374 >= n ? n - 65248 : n, n = 12288 == n ? 32 : n, t += String.fromCharCode(n)
                }
                return t
            }
        },
        hide: function () {
            this.getElement().style.display = "none"
        },
        show: function () {
            this.getElement().style.display = "block"
        },
        _analysis: function (e, t) {
            return window.passport.analysis && window.passport.analysis[this.module] && window.passport.analysis[this.module][e] ? (window.passport.analysis[this.module][e](this, t), {
                preventDefault: !1,
                preventEvent: !1
            }) : void 0
        },
        _hook: function (e, t) {
            return window.passport.hook && window.passport.hook[this.module] && window.passport.hook[this.module][e] ? window.passport.hook[this.module][e](this, t) : {
                preventDefault: !1,
                preventEvent: !1
            }
        },
        fireEvent: function (e, t) {
            var a = this._hook(e, t), i = !0;
            return a.preventEvent || (i = this.fire(e, t)), !a.preventDefault && i
        }
    });
    ;
    if (document.location.host === 'passport.baidu.com') {
        (function () {
            var t = null, e = null, r = void 0;
            !function (e, n) {
                "object" == typeof r ? module.exports = r = n() : "function" == typeof t && t.amd ? t([], n) : e.CryptoJS = n()
            }(this, function () {
                var t = t || function (t, e) {
                    var r = Object.create || function () {
                        function t() {
                        }

                        return function (e) {
                            var r;
                            return t.prototype = e, r = new t, t.prototype = null, r
                        }
                    }(), n = {}, i = n.lib = {}, o = i.Base = function () {
                        return {
                            extend: function (t) {
                                var e = r(this);
                                return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function () {
                                    e.$super.init.apply(this, arguments)
                                }), e.init.prototype = e, e.$super = this, e
                            }, create: function () {
                                var t = this.extend();
                                return t.init.apply(t, arguments), t
                            }, init: function () {
                            }, mixIn: function (t) {
                                for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                                t.hasOwnProperty("toString") && (this.toString = t.toString)
                            }, clone: function () {
                                return this.init.prototype.extend(this)
                            }
                        }
                    }(), s = i.WordArray = o.extend({
                        init: function (t, r) {
                            t = this.words = t || [], this.sigBytes = r != e ? r : 4 * t.length
                        }, toString: function (t) {
                            return (t || a).stringify(this)
                        }, concat: function (t) {
                            var e = this.words, r = t.words, n = this.sigBytes, i = t.sigBytes;
                            if (this.clamp(), n % 4) for (var o = 0; i > o; o++) {
                                var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                e[n + o >>> 2] |= s << 24 - (n + o) % 4 * 8
                            } else for (var o = 0; i > o; o += 4) e[n + o >>> 2] = r[o >>> 2];
                            return this.sigBytes += i, this
                        }, clamp: function () {
                            var e = this.words, r = this.sigBytes;
                            e[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, e.length = t.ceil(r / 4)
                        }, clone: function () {
                            var t = o.clone.call(this);
                            return t.words = this.words.slice(0), t
                        }, random: function (e) {
                            for (var r, n = [], i = function (e) {
                                var e = e, r = 987654321, n = 4294967295;
                                return function () {
                                    r = 36969 * (65535 & r) + (r >> 16) & n, e = 18e3 * (65535 & e) + (e >> 16) & n;
                                    var i = (r << 16) + e & n;
                                    return i /= 4294967296, i += .5, i * (t.random() > .5 ? 1 : -1)
                                }
                            }, o = 0; e > o; o += 4) {
                                var c = i(4294967296 * (r || t.random()));
                                r = 987654071 * c(), n.push(4294967296 * c() | 0)
                            }
                            return new s.init(n, e)
                        }
                    }), c = n.enc = {}, a = c.Hex = {
                        stringify: function (t) {
                            for (var e = t.words, r = t.sigBytes, n = [], i = 0; r > i; i++) {
                                var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16))
                            }
                            return n.join("")
                        }, parse: function (t) {
                            for (var e = t.length, r = [], n = 0; e > n; n += 2) r[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
                            return new s.init(r, e / 2)
                        }
                    }, f = c.Latin1 = {
                        stringify: function (t) {
                            for (var e = t.words, r = t.sigBytes, n = [], i = 0; r > i; i++) {
                                var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                n.push(String.fromCharCode(o))
                            }
                            return n.join("")
                        }, parse: function (t) {
                            for (var e = t.length, r = [], n = 0; e > n; n++) r[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
                            return new s.init(r, e)
                        }
                    }, p = c.Utf8 = {
                        stringify: function (t) {
                            try {
                                return decodeURIComponent(escape(f.stringify(t)))
                            } catch (t) {
                                throw new Error("Malformed UTF-8 data")
                            }
                        }, parse: function (t) {
                            return f.parse(unescape(encodeURIComponent(t)))
                        }
                    }, u = i.BufferedBlockAlgorithm = o.extend({
                        reset: function () {
                            this._data = new s.init, this._nDataBytes = 0
                        }, _append: function (t) {
                            "string" == typeof t && (t = p.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                        }, _process: function (e) {
                            var r = this._data, n = r.words, i = r.sigBytes, o = this.blockSize, c = 4 * o, a = i / c;
                            a = e ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0);
                            var f = a * o, p = t.min(4 * f, i);
                            if (f) {
                                for (var u = 0; f > u; u += o) this._doProcessBlock(n, u);
                                var h = n.splice(0, f);
                                r.sigBytes -= p
                            }
                            return new s.init(h, p)
                        }, clone: function () {
                            var t = o.clone.call(this);
                            return t._data = this._data.clone(), t
                        }, _minBufferSize: 0
                    }), h = (i.Hasher = u.extend({
                        cfg: o.extend(), init: function (t) {
                            this.cfg = this.cfg.extend(t), this.reset()
                        }, reset: function () {
                            u.reset.call(this), this._doReset()
                        }, update: function (t) {
                            return this._append(t), this._process(), this
                        }, finalize: function (t) {
                            t && this._append(t);
                            var e = this._doFinalize();
                            return e
                        }, blockSize: 16, _createHelper: function (t) {
                            return function (e, r) {
                                return new t.init(r).finalize(e)
                            }
                        }, _createHmacHelper: function (t) {
                            return function (e, r) {
                                return new h.HMAC.init(t, r).finalize(e)
                            }
                        }
                    }), n.algo = {});
                    return n
                }(Math);
                return t
            }), !function (n, i) {
                "object" == typeof r ? module.exports = r = i(e("./core.min"), e("./sha1.min"), e("./hmac.min")) : "function" == typeof t && t.amd ? t(["./core.min", "./sha1.min", "./hmac.min"], i) : i(n.CryptoJS)
            }(this, function (t) {
                return function () {
                    var e = t, r = e.lib, n = r.Base, i = r.WordArray, o = e.algo, s = o.MD5, c = o.EvpKDF = n.extend({
                        cfg: n.extend({keySize: 4, hasher: s, iterations: 1}),
                        init: function (t) {
                            this.cfg = this.cfg.extend(t)
                        },
                        compute: function (t, e) {
                            for (var r = this.cfg, n = r.hasher.create(), o = i.create(), s = o.words, c = r.keySize, a = r.iterations; s.length < c;) {
                                f && n.update(f);
                                var f = n.update(t).finalize(e);
                                n.reset();
                                for (var p = 1; a > p; p++) f = n.finalize(f), n.reset();
                                o.concat(f)
                            }
                            return o.sigBytes = 4 * c, o
                        }
                    });
                    e.EvpKDF = function (t, e, r) {
                        return c.create(r).compute(t, e)
                    }
                }(), t.EvpKDF
            }), !function (n, i) {
                "object" == typeof r ? module.exports = r = i(e("./core.min")) : "function" == typeof t && t.amd ? t(["./core.min"], i) : i(n.CryptoJS)
            }(this, function (t) {
                return function () {
                    function e(t, e, r) {
                        for (var n = [], o = 0, s = 0; e > s; s++) if (s % 4) {
                            var c = r[t.charCodeAt(s - 1)] << s % 4 * 2, a = r[t.charCodeAt(s)] >>> 6 - s % 4 * 2;
                            n[o >>> 2] |= (c | a) << 24 - o % 4 * 8, o++
                        }
                        return i.create(n, o)
                    }

                    var r = t, n = r.lib, i = n.WordArray, o = r.enc;
                    o.Base64 = {
                        stringify: function (t) {
                            var e = t.words, r = t.sigBytes, n = this._map;
                            t.clamp();
                            for (var i = [], o = 0; r > o; o += 3) for (var s = e[o >>> 2] >>> 24 - o % 4 * 8 & 255, c = e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, a = e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, f = s << 16 | c << 8 | a, p = 0; 4 > p && r > o + .75 * p; p++) i.push(n.charAt(f >>> 6 * (3 - p) & 63));
                            var u = n.charAt(64);
                            if (u) for (; i.length % 4;) i.push(u);
                            return i.join("")
                        }, parse: function (t) {
                            var r = t.length, n = this._map, i = this._reverseMap;
                            if (!i) {
                                i = this._reverseMap = [];
                                for (var o = 0; o < n.length; o++) i[n.charCodeAt(o)] = o
                            }
                            var s = n.charAt(64);
                            if (s) {
                                var c = t.indexOf(s);
                                -1 !== c && (r = c)
                            }
                            return e(t, r, i)
                        }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                    }
                }(), t.enc.Base64
            }), !function (n, i) {
                "object" == typeof r ? module.exports = r = i(e("./core.min"), e("./evpkdf.min")) : "function" == typeof t && t.amd ? t(["./core.min", "./evpkdf.min"], i) : i(n.CryptoJS)
            }(this, function (t) {
                t.lib.Cipher || function (e) {
                    var r = t, n = r.lib, i = n.Base, o = n.WordArray, s = n.BufferedBlockAlgorithm, c = r.enc,
                        a = (c.Utf8, c.Base64), f = r.algo, p = f.EvpKDF, u = n.Cipher = s.extend({
                            cfg: i.extend(), createEncryptor: function (t, e) {
                                return this.create(this._ENC_XFORM_MODE, t, e)
                            }, createDecryptor: function (t, e) {
                                return this.create(this._DEC_XFORM_MODE, t, e)
                            }, init: function (t, e, r) {
                                this.cfg = this.cfg.extend(r), this._xformMode = t, this._key = e, this.reset()
                            }, reset: function () {
                                s.reset.call(this), this._doReset()
                            }, process: function (t) {
                                return this._append(t), this._process()
                            }, finalize: function (t) {
                                t && this._append(t);
                                var e = this._doFinalize();
                                return e
                            }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function () {
                                function t(t) {
                                    return "string" == typeof t ? x : k
                                }

                                return function (e) {
                                    return {
                                        encrypt: function (r, n, i) {
                                            return t(n).encrypt(e, r, n, i)
                                        }, decrypt: function (r, n, i) {
                                            return t(n).decrypt(e, r, n, i)
                                        }
                                    }
                                }
                            }()
                        }), h = (n.StreamCipher = u.extend({
                            _doFinalize: function () {
                                var t = this._process(!0);
                                return t
                            }, blockSize: 1
                        }), r.mode = {}), d = n.BlockCipherMode = i.extend({
                            createEncryptor: function (t, e) {
                                return this.Encryptor.create(t, e)
                            }, createDecryptor: function (t, e) {
                                return this.Decryptor.create(t, e)
                            }, init: function (t, e) {
                                this._cipher = t, this._iv = e
                            }
                        }), l = h.CBC = function () {
                            function t(t, r, n) {
                                var i = this._iv;
                                if (i) {
                                    var o = i;
                                    this._iv = e
                                } else var o = this._prevBlock;
                                for (var s = 0; n > s; s++) t[r + s] ^= o[s]
                            }

                            var r = d.extend();
                            return r.Encryptor = r.extend({
                                processBlock: function (e, r) {
                                    var n = this._cipher, i = n.blockSize;
                                    t.call(this, e, r, i), n.encryptBlock(e, r), this._prevBlock = e.slice(r, r + i)
                                }
                            }), r.Decryptor = r.extend({
                                processBlock: function (e, r) {
                                    var n = this._cipher, i = n.blockSize, o = e.slice(r, r + i);
                                    n.decryptBlock(e, r), t.call(this, e, r, i), this._prevBlock = o
                                }
                            }), r
                        }(), y = r.pad = {}, v = y.Pkcs7 = {
                            pad: function (t, e) {
                                for (var r = 4 * e, n = r - t.sigBytes % r, i = n << 24 | n << 16 | n << 8 | n, s = [], c = 0; n > c; c += 4) s.push(i);
                                var a = o.create(s, n);
                                t.concat(a)
                            }, unpad: function (t) {
                                var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                                t.sigBytes -= e
                            }
                        }, m = (n.BlockCipher = u.extend({
                            cfg: u.cfg.extend({mode: l, padding: v}), reset: function () {
                                u.reset.call(this);
                                var t = this.cfg, e = t.iv, r = t.mode;
                                if (this._xformMode == this._ENC_XFORM_MODE) var n = r.createEncryptor; else {
                                    var n = r.createDecryptor;
                                    this._minBufferSize = 1
                                }
                                this._mode && this._mode.__creator == n ? this._mode.init(this, e && e.words) : (this._mode = n.call(r, this, e && e.words), this._mode.__creator = n)
                            }, _doProcessBlock: function (t, e) {
                                this._mode.processBlock(t, e)
                            }, _doFinalize: function () {
                                var t = this.cfg.padding;
                                if (this._xformMode == this._ENC_XFORM_MODE) {
                                    t.pad(this._data, this.blockSize);
                                    var e = this._process(!0)
                                } else {
                                    var e = this._process(!0);
                                    t.unpad(e)
                                }
                                return e
                            }, blockSize: 4
                        }), n.CipherParams = i.extend({
                            init: function (t) {
                                this.mixIn(t)
                            }, toString: function (t) {
                                return (t || this.formatter).stringify(this)
                            }
                        })), g = r.format = {}, _ = g.OpenSSL = {
                            stringify: function (t) {
                                var e = t.ciphertext, r = t.salt;
                                if (r) var n = o.create([1398893684, 1701076831]).concat(r).concat(e); else var n = e;
                                return n.toString(a)
                            }, parse: function (t) {
                                var e = a.parse(t), r = e.words;
                                if (1398893684 == r[0] && 1701076831 == r[1]) {
                                    var n = o.create(r.slice(2, 4));
                                    r.splice(0, 4), e.sigBytes -= 16
                                }
                                return m.create({ciphertext: e, salt: n})
                            }
                        }, k = n.SerializableCipher = i.extend({
                            cfg: i.extend({format: _}), encrypt: function (t, e, r, n) {
                                n = this.cfg.extend(n);
                                var i = t.createEncryptor(r, n), o = i.finalize(e), s = i.cfg;
                                return m.create({
                                    ciphertext: o,
                                    key: r,
                                    iv: s.iv,
                                    algorithm: t,
                                    mode: s.mode,
                                    padding: s.padding,
                                    blockSize: t.blockSize,
                                    formatter: n.format
                                })
                            }, decrypt: function (t, e, r, n) {
                                n = this.cfg.extend(n), e = this._parse(e, n.format);
                                var i = t.createDecryptor(r, n).finalize(e.ciphertext);
                                return i
                            }, _parse: function (t, e) {
                                return "string" == typeof t ? e.parse(t, this) : t
                            }
                        }), S = r.kdf = {}, B = S.OpenSSL = {
                            execute: function (t, e, r, n) {
                                n || (n = o.random(8));
                                var i = p.create({keySize: e + r}).compute(t, n), s = o.create(i.words.slice(e), 4 * r);
                                return i.sigBytes = 4 * e, m.create({key: i, iv: s, salt: n})
                            }
                        }, x = n.PasswordBasedCipher = k.extend({
                            cfg: k.cfg.extend({kdf: B}),
                            encrypt: function (t, e, r, n) {
                                n = this.cfg.extend(n);
                                var i = n.kdf.execute(r, t.keySize, t.ivSize);
                                n.iv = i.iv;
                                var o = k.encrypt.call(this, t, e, i.key, n);
                                return o.mixIn(i), o
                            },
                            decrypt: function (t, e, r, n) {
                                n = this.cfg.extend(n), e = this._parse(e, n.format);
                                var i = n.kdf.execute(r, t.keySize, t.ivSize, e.salt);
                                n.iv = i.iv;
                                var o = k.decrypt.call(this, t, e, i.key, n);
                                return o
                            }
                        })
                }()
            }), !function (n, i) {
                "object" == typeof r ? module.exports = r = i(e("./core.min")) : "function" == typeof t && t.amd ? t(["./core.min"], i) : i(n.CryptoJS)
            }(this, function (t) {
                !function () {
                    var e = t, r = e.lib, n = r.Base, i = e.enc, o = i.Utf8, s = e.algo;
                    s.HMAC = n.extend({
                        init: function (t, e) {
                            t = this._hasher = new t.init, "string" == typeof e && (e = o.parse(e));
                            var r = t.blockSize, n = 4 * r;
                            e.sigBytes > n && (e = t.finalize(e)), e.clamp();
                            for (var i = this._oKey = e.clone(), s = this._iKey = e.clone(), c = i.words, a = s.words, f = 0; r > f; f++) c[f] ^= 1549556828, a[f] ^= 909522486;
                            i.sigBytes = s.sigBytes = n, this.reset()
                        }, reset: function () {
                            var t = this._hasher;
                            t.reset(), t.update(this._iKey)
                        }, update: function (t) {
                            return this._hasher.update(t), this
                        }, finalize: function (t) {
                            var e = this._hasher, r = e.finalize(t);
                            e.reset();
                            var n = e.finalize(this._oKey.clone().concat(r));
                            return n
                        }
                    })
                }()
            }), !function (n, i) {
                "object" == typeof r ? module.exports = r = i(e("./core.min"), e("./cipher-core.min")) : "function" == typeof t && t.amd ? t(["./core.min", "./cipher-core.min"], i) : i(n.CryptoJS)
            }(this, function (t) {
                return t.mode.ECB = function () {
                    var e = t.lib.BlockCipherMode.extend();
                    return e.Encryptor = e.extend({
                        processBlock: function (t, e) {
                            this._cipher.encryptBlock(t, e)
                        }
                    }), e.Decryptor = e.extend({
                        processBlock: function (t, e) {
                            this._cipher.decryptBlock(t, e)
                        }
                    }), e
                }(), t.mode.ECB
            }), !function (n, i) {
                "object" == typeof r ? module.exports = r = i(e("./core.min"), e("./cipher-core.min")) : "function" == typeof t && t.amd ? t(["./core.min", "./cipher-core.min"], i) : i(n.CryptoJS)
            }(this, function (t) {
                return t.pad.Pkcs7
            }), !function (n, i) {
                "object" == typeof r ? module.exports = r = i(e("./core.min"), e("./enc-base64.min"), e("./md5.min"), e("./evpkdf.min"), e("./cipher-core.min")) : "function" == typeof t && t.amd ? t(["./core.min", "./enc-base64.min", "./md5.min", "./evpkdf.min", "./cipher-core.min"], i) : i(n.CryptoJS)
            }(this, function (t) {
                return function () {
                    var e = t, r = e.lib, n = r.BlockCipher, i = e.algo, o = [], s = [], c = [], a = [], f = [], p = [],
                        u = [], h = [], d = [], l = [];
                    !function () {
                        for (var t = [], e = 0; 256 > e; e++) t[e] = 128 > e ? e << 1 : e << 1 ^ 283;
                        for (var r = 0, n = 0, e = 0; 256 > e; e++) {
                            var i = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                            i = i >>> 8 ^ 255 & i ^ 99, o[r] = i, s[i] = r;
                            var y = t[r], v = t[y], m = t[v], g = 257 * t[i] ^ 16843008 * i;
                            c[r] = g << 24 | g >>> 8, a[r] = g << 16 | g >>> 16, f[r] = g << 8 | g >>> 24, p[r] = g;
                            var g = 16843009 * m ^ 65537 * v ^ 257 * y ^ 16843008 * r;
                            u[i] = g << 24 | g >>> 8, h[i] = g << 16 | g >>> 16, d[i] = g << 8 | g >>> 24, l[i] = g, r ? (r = y ^ t[t[t[m ^ y]]], n ^= t[t[n]]) : r = n = 1
                        }
                    }();
                    var y = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], v = i.AES = n.extend({
                        _doReset: function () {
                            if (!this._nRounds || this._keyPriorReset !== this._key) {
                                for (var t = this._keyPriorReset = this._key, e = t.words, r = t.sigBytes / 4, n = this._nRounds = r + 6, i = 4 * (n + 1), s = this._keySchedule = [], c = 0; i > c; c++) if (r > c) s[c] = e[c]; else {
                                    var a = s[c - 1];
                                    c % r ? r > 6 && c % r == 4 && (a = o[a >>> 24] << 24 | o[a >>> 16 & 255] << 16 | o[a >>> 8 & 255] << 8 | o[255 & a]) : (a = a << 8 | a >>> 24, a = o[a >>> 24] << 24 | o[a >>> 16 & 255] << 16 | o[a >>> 8 & 255] << 8 | o[255 & a], a ^= y[c / r | 0] << 24), s[c] = s[c - r] ^ a
                                }
                                for (var f = this._invKeySchedule = [], p = 0; i > p; p++) {
                                    var c = i - p;
                                    if (p % 4) var a = s[c]; else var a = s[c - 4];
                                    f[p] = 4 > p || 4 >= c ? a : u[o[a >>> 24]] ^ h[o[a >>> 16 & 255]] ^ d[o[a >>> 8 & 255]] ^ l[o[255 & a]]
                                }
                            }
                        }, encryptBlock: function (t, e) {
                            this._doCryptBlock(t, e, this._keySchedule, c, a, f, p, o)
                        }, decryptBlock: function (t, e) {
                            var r = t[e + 1];
                            t[e + 1] = t[e + 3], t[e + 3] = r, this._doCryptBlock(t, e, this._invKeySchedule, u, h, d, l, s);
                            var r = t[e + 1];
                            t[e + 1] = t[e + 3], t[e + 3] = r
                        }, _doCryptBlock: function (t, e, r, n, i, o, s, c) {
                            for (var a = this._nRounds, f = t[e] ^ r[0], p = t[e + 1] ^ r[1], u = t[e + 2] ^ r[2], h = t[e + 3] ^ r[3], d = 4, l = 1; a > l; l++) {
                                var y = n[f >>> 24] ^ i[p >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & h] ^ r[d++],
                                    v = n[p >>> 24] ^ i[u >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & f] ^ r[d++],
                                    m = n[u >>> 24] ^ i[h >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & p] ^ r[d++],
                                    g = n[h >>> 24] ^ i[f >>> 16 & 255] ^ o[p >>> 8 & 255] ^ s[255 & u] ^ r[d++];
                                f = y, p = v, u = m, h = g
                            }
                            var y = (c[f >>> 24] << 24 | c[p >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & h]) ^ r[d++],
                                v = (c[p >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[h >>> 8 & 255] << 8 | c[255 & f]) ^ r[d++],
                                m = (c[u >>> 24] << 24 | c[h >>> 16 & 255] << 16 | c[f >>> 8 & 255] << 8 | c[255 & p]) ^ r[d++],
                                g = (c[h >>> 24] << 24 | c[f >>> 16 & 255] << 16 | c[p >>> 8 & 255] << 8 | c[255 & u]) ^ r[d++];
                            t[e] = y, t[e + 1] = v, t[e + 2] = m, t[e + 3] = g
                        }, keySize: 8
                    });
                    e.AES = n._createHelper(v)
                }(), t.AES
            }), !function (n, i) {
                "object" == typeof r ? module.exports = r = i(e("./core.min")) : "function" == typeof t && t.amd ? t(["./core.min"], i) : i(n.CryptoJS)
            }(this, function (t) {
                return t.enc.Utf8
            });
            try {
                !function (t, e, r) {
                    passport.mkd = function (t) {
                        return "Microsoft Internet Explorer" !== navigator.appName || "MSIE6.0" !== navigator.appVersion.split(";")[1].replace(/[ ]/g, "") && "MSIE7.0" !== navigator.appVersion.split(";")[1].replace(/[ ]/g, "") ? void this.init(t) : (this.ie = 67, !1)
                    }, passport.mkd.prototype = {
                        store: {
                            storeVer: "1.0.1",
                            count: 0,
                            aesKeyLeft: "6bffae1c",
                            aesKeyRight: "appsapi0",
                            sendUrl: passport.apiDomain.staticDomain + "/viewlog"
                        }, getTimeStr: function () {
                            var t = new Date, e = t.getTime();
                            return e
                        }, encrypt: function (t) {
                            var e = this.store.aesKeyLeft + this.store.aesKeyRight,
                                r = passport.CryptoJS.enc.Utf8.parse(e), n = passport.CryptoJS.enc.Utf8.parse(t),
                                i = passport.CryptoJS.AES.encrypt(n, r, {
                                    mode: passport.CryptoJS.mode.ECB,
                                    padding: passport.CryptoJS.pad.Pkcs7
                                });
                            return i.toString()
                        }, init: function (t) {
                            this.store.ak = t.ak || "", this.initMock(t), this.initApi(), this.initEvent()
                        }, initMock: function () {
                            this.rzData = {
                                cl: [],
                                mv: [],
                                sc: [],
                                kb: [],
                                cr: this.getScreenInfo(),
                                ac_c: 0
                            }, this.dsData = {}
                        }, initApi: function () {
                            var e = this, r = {};
                            r.ak = e.store.ak, t.ajax({
                                type: "get",
                                dataType: "jsonp",
                                url: e.store.sendUrl,
                                data: r,
                                xhrFields: {withCredentials: !0},
                                success: function (t) {
                                    e.dsData = t.data || {}, e.store.aesKeyLeft = t.data.as || "6bffae1c"
                                },
                                error: function () {
                                    console.log("initApi error"), e.errorData()
                                }
                            })
                        }, initEvent: function () {
                            var n = this;
                            t(r).on("click", function (t) {
                                var t = t || e.event, r = {};
                                r.x = parseInt(t.clientX, 10), r.y = parseInt(t.clientY, 10), r.t = n.getTimeStr(), n.rzData.cl.push(r), n.reportedOpportunity()
                            }), t(r).on("mousemove", n.throttle(function (t) {
                                var r = t || e.event || arguments.callee.caller.arguments[0], i = {};
                                i.fx = parseInt(r.clientX, 10), i.fy = parseInt(r.clientY, 10), i.t = n.getTimeStr(), n.rzData.mv.push(i), n.reportedOpportunity()
                            }, 100)), t(r).on("keyup", function () {
                                var t = {};
                                t.key = "a", t.t = n.getTimeStr(), n.rzData.kb.push(t), n.reportedOpportunity()
                            }), t(e).on("scroll", n.throttle(function (r) {
                                var r = r || e.event, i = {};
                                i.tx = t(window).scrollLeft(), i.ty = t(window).scrollTop(), n.rzData.sc.push(i), n.reportedOpportunity()
                            }, 300))
                        }, throttle: function (t, e) {
                            var r;
                            return function () {
                                return r ? void 0 : (r = setTimeout(function () {
                                    r = null
                                }, e), t.apply(this))
                            }
                        }, getScreenInfo: function () {
                            try {
                                var t = e.mozInnerScreenY || e.screenTop, n = e.mozInnerScreenX || e.screenLeft;
                                "undefined" == typeof t && (t = 0), "undefined" == typeof n && (n = 0);
                                var i = r.body.clientWidth, o = r.body.clientHeight, s = e.screen.width,
                                    c = e.screen.height, a = e.screen.availWidth,
                                    f = (e.screen.availHeight, e.outerWidth), p = e.outerHeight, u = r.body.scrollWidth,
                                    h = r.body.scrollHeight;
                                return {
                                    screenTop: t,
                                    screenLeft: n,
                                    clientWidth: i,
                                    clientHeight: o,
                                    screenWidth: s,
                                    screenHeight: c,
                                    availWidth: a,
                                    outerWidth: f,
                                    outerHeight: p,
                                    scrollWidth: u,
                                    scrollHeight: h
                                }
                            } catch (d) {
                            }
                        }, reportedOpportunity: function () {
                            var t = this;
                            ++t.store.count, t.store.count > 20 && t.postData()
                        }, postData: function (e) {
                            var r = this, n = JSON.stringify(r.rzData), i = r.encrypt(n), o = {};
                            return o.ak = r.store.ak, o.fs = i, r.store.count = 0, r.initMock(), t.ajax({
                                type: "get",
                                url: r.store.sendUrl,
                                dataType: "jsonp",
                                data: o,
                                xhrFields: {withCredentials: !0},
                                success: function (t) {
                                    0 === t.code ? (r.dsData = t.data || {}, r.store.aesKeyLeft = t.data.as || "6bffae1c") : r.errorData(), e && e(t)
                                },
                                error: function () {
                                    r.errorData(), e && e()
                                }
                            })
                        }, getDs: function () {
                            return 67 === this.ie ? "" : this.dsData.ds
                        }, getTk: function () {
                            return 67 === this.ie ? "" : this.dsData.tk
                        }, getDataAsync: function (t) {
                            return 67 === this.ie ? "" : this.store.count > 1 ? this.postData().then(function (e) {
                                t && t(e.data)
                            }) : void(t && t(this.dsData))
                        }, setData: function (t, e) {
                            this.rzData[t] = e
                        }, errorData: function () {
                            this.dsData.ds = "iggkFNY5Z8odmaVWu0oRjsneNUhc65bBgY7IeyRqe6S++zbDz3JlV99QbnGMERCkRH57fRY77K4T0r5PTAk/Xoi21K1UoYgRM089xf8wdrl+FzMEwt13AaO5Dq4G0u5I49RTUPfwr4/MuB6b6hOcPwItorZarOJw+1yy7pp4LUUwmk1kqy5LXHQ2vXVRRIzBmEYkAd4LEMWB3TNN/Ehb/v2mIBHtw+V8prcJi637saZP2NZL2qVarc81Js3Ls1ICNon1ghv5Vly2IjvClAg1oFtLIYqQN5/lojRrg11ajOBnVkwrC/MbVsQ+paftGrOl9PHjBbRFq8+5LwAmVysU+83iZLMBC3M7NhKKlIiTJpvDAR+KrUAG1HP8GTH8L8mrVjuno9MIfX6oloTXcpZHfXZln2FwwTosFnTHZ0iaqdnCklq7W+xuSUyIYydL72/hi34W2QIyEh6PilSgac2Mgjh80ygOrj9hrR7+0rlc5c+cpeILmTUI3FNlzY0degKH81V3dYUSNO27zcZ2KG3Zxb4I5SCnxYbEigiJJQkemNNAT+GiX2Je2XR9Xivcn0pFkdxEReHb2uHStsvaCaI+AxmHXc8PBV6X6CdAtRtSLnA+NBYrRrVGBmZIQd112r6eSjJeO7R9ItEXpKnAb2jhyZ+dyBeQNYee3JeyNZpofxAsXyHLFkrKOqaceZBzhvxL9SZwADneJcVSYvLS9Fbf9RAo0FHHrAFjphDmLe3wPcIgyiAKnpvgw58Z13bY1LYKEM3QYt+U974GYlahfJpett38TeJSbfcn3f1sk1+Q00jb46ivKadXTztpkD0z++pKJtMCgc5pLJg40QLb6wbTpqa4wVULYnCouw6/9H5+COUDC0RKfLDhYzdcCCygSGlA", this.dsData.tk = "3338yojP4YX/CPjsNQpSEls3CchneKTLKfp9KvCfkBgWNCk="
                        }
                    }
                }(baidu, window, document)
            } catch (n) {
            }
        }).call(passport);
        ;
    }
    magic.passport.login = baidu.lang.createClass(function (e) {
        var t = this;
        if (passport && "https" === passport._protocol) var n = "https:"; else var n = window.location ? window.location.protocol.toLowerCase() : document.location.protocol.toLowerCase();
        t._domain = {
            https: "https://passport.baidu.com",
            http: "http://passport.baidu.com",
            staticFile: "https:" === n ? "https://ss0.bdstatic.com/5LMZfyabBhJ3otebn9fN2DJv" : "http://passport.bdimg.com",
            auto: "https:" === n ? "https://passport.baidu.com" : "http://passport.baidu.com"
        }, t.config = {
            memberPass: !0,
            isQuickUser: 0,
            safeFlag: 0,
            product: "",
            idc: "",
            charset: "",
            loginMerge: !0,
            staticPage: "",
            hasRegUrl: !1,
            u: "",
            lang: "zh-CN",
            autosuggest: !1,
            hasPlaceholder: !1,
            registerLink: "",
            authsiteLogin: "",
            authsiteCfgLogin: "",
            qrcode: !0,
            sms: 0,
            uniqueId: !1,
            autoFocus: !0,
            subpro: "",
            setWebToClient: !1,
            is_voice_sms: 0,
            voice_sms_flag: 0,
            userPwdLogin: 0,
            qrcode_animation: 1,
            qrcode_style: !0,
            vcodefrom: "",
            client: ""
        }, baidu.extend(t.config, e), t.config.product = t.config.product || "isnull", t.config.qrcode = 3, this.module = "login", this.guideRandom = function () {
            return "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                var t = 16 * Math.random() | 0, n = "x" === e ? t : 3 & t | 8;
                return n.toString(16)
            }).toUpperCase()
        }(), t.constant = {
            CHECKVERIFYCODE: !0,
            CONTAINER_CLASS: "tang-pass-login",
            LABEL_FOCUS_CLASS: "pass-text-label-focus",
            FOCUS_CLASS: "pass-text-input-focus",
            HOVER_CLASS: "pass-text-input-hover",
            ERROR_CLASS: "pass-text-input-error",
            VERIFYCODE_URL_PREFIX: t._domain.https + "/cgi-bin/genimage?",
            BLANK_IMG_URL: passport.apiDomain.staticDomain + "/passApi/img/small_blank.gif",
            MODIFY_PWD_URL_PREFIX: t._domain.https + "/forcsdnpasschange",
            GET_PASSWORD_URL: t._domain.https + "/?getpassindex&tt=" + (new Date).getTime() + "&gid=" + t.guideRandom + "&tpl=" + encodeURIComponent(t.config.product) + "&u=" + encodeURIComponent(t.config.u),
            REG_URL: t.config.registerLink || t._domain.https + "/v2/?reg&tt=" + (new Date).getTime() + "&overseas=" + t.config.overseas + "&gid=" + t.guideRandom + "&tpl=" + encodeURIComponent(t.config.product) + "&u=" + encodeURIComponent(t.config.u),
            PROTOCAL_URL: t._domain.http + "/static/passpc-account/html/protocal.html",
            NOCAPTCHA_URL: t._domain.auto + "/static/passpc-base/js/ld.min.js?cdnversion=" + (new Date).getTime(),
            SUBMITFLAG: !1
        }, t.lang = passport.err.getCurrent().labelText.login, passport.data.setContext(baidu.extend({}, t.config)), this.initialized = !1, this.validatorInited = !1, this.bdPsWtoken = "", this.innerData = {
            normal: {},
            phone: {}
        }, this.dataFiels = ["userName", "password"], this.initTime = (new Date).getTime(), confirmSmsVerifyWidget = null, checkPhoneWidget = null, checkPhoneExist = !1;
        var s = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : void 0;
        6 >= s && (t.config.qrcode_animation = !1), t.passLowerIE = s, t.config.overseas && 1 == t.config.overseas && (this.foreignMobile = !0), this.internation = !1, t._insertNoCaptchaScript(), t.config.defaultCss && t._loadCssFileW("/passApi/css/loginv4_e3d7fd1.css", function () {
        }), (t.config.memberPass || t.config.getapi) && t._initApi(), this.smsConfig = t.config.sms + "" == "5" ? !0 : !1
    }, {type: "magic.passport.login", superClass: magic.passport}).extend({
        _getIrregularField: function (e) {
            var t = this, n = {
                makeText: '<p id="' + t.$getId("MakeTextWrapper") + '" class="pass-make-text" style="display:none;"></p>',
                logoText: '<p class="pass-form-logo">' + t.lang.backToLogin + "</p>",
                verifyCode: '<p id="' + t.$getId("verifyCodeImgWrapper") + '" class="pass-form-item pass-form-item-verifyCode" style="display:none"><input id="' + t.$getId("verifyCode") + '" type="text" name="verifyCode" class="pass-text-input pass-text-input-verifyCode" maxlength="6" /><span  id="' + t.$getId("verifyCodeImgParent") + '" class="pass-verifyCodeImgParent" ><img id="' + t.$getId("verifyCodeImg") + '" class="pass-verifyCode" src="' + t.constant.BLANK_IMG_URL + '" /></span><a id="' + t.$getId("verifyCodeChange") + '" href="#" class="pass-change-verifyCode">' + t.lang.captchaChange + '</a><span id="' + t.$getId("verifyCodeError") + '" class="pass-error pass-error-verifyCode"></span><span id="' + t.$getId("verifyCodeTip") + '" class="pass-tip pass-tip-verifyCode"></span><span id="' + t.$getId("verifyCodeSuccess") + '" class="pass-success pass-success-verifyCode"></span></p>',
                generalError: '<p id="' + t.$getId("errorWrapper") + '" class="pass-generalErrorWrapper"><span id="' + t.$getId("error") + '" class="pass-generalError pass-generalError-error"></span></p>',
                rem: '<p id="' + t.$getId("memberPassWrapper") + '" class="pass-form-item pass-form-item-memberPass"><input id="' + t.$getId("memberPass") + '" type="checkbox" name="memberPass" class="pass-checkbox-input pass-checkbox-memberPass"' + (t.config.memberPass ? ' checked="checked"' : "") + ' /><label for="' + t.$getId("memberPass") + '" id="' + t.$getId("memberPassLabel") + '" class="">' + t.lang.memberPassLabel + "</label></p>",
                submit: '<p id="' + t.$getId("submitWrapper") + '" class="pass-form-item pass-form-item-submit"><input id="' + t.$getId("submit") + '" type="submit" value="' + t.lang.login + '" class="pass-button pass-button-submit" /><a class="pass-fgtpwd pass-link" href="' + t.constant.GET_PASSWORD_URL + '" target="_blank">' + t.lang.fgtPwd + "</a>" + (t.smsConfig ? '<a class="pass-sms-btn pass-link" title="' + t.lang.toSmsBtn + '" data-type="sms" id="' + t.$getId("smsSwitchWrapper") + '">' + t.lang.toSmsBtn + "</a>" : "") + "</p>",
                foreignMobileMsg: '<p class="pass-foreignMobile-msg" id="' + t.$getId("foreignMobileMsg") + '">' + t.lang.foreignMobileMsg + "</p>",
                foreignMobileWrapper: '<div class="pass-form-item pass-form-item-PhoneCountry pass-foreignMobile-wrapper" id="' + t.$getId("foreignMobileWrapper") + '" style="display:none"><label for="' + t.$getId("foreignMobile") + '" id="' + t.$getId("foreignMobileLabel") + '" class="pass-label" data-countryCode="">+86</label><input id="' + t.$getId("foreignMobile") + '" type="text" name="foreignusername" class="pass-text-input"/><ul id="' + t.$getId("foreignCountryList") + '" class="pass-country-list"></ul></div>',
                foreignMobileLink: '<p class="pass-foreignMobile-link-wrapper" id="' + t.$getId("foreignMobileLinkWrapper") + '"><a id="' + t.$getId("foreignMobileLink") + '" class="pass-foreignMobile-link">' + t.lang.foreignMobileLink + "</a></p>",
                foreignMobileBack: '<p class="pass-foreignMobile-back-wrapper" id="' + t.$getId("foreignMobileBackWrapper") + '"><a id="' + t.$getId("foreignMobileBack") + '" class="pass-foreignMobile-link">' + t.lang.foreignToLogin + "</a></p>",
                choiceuser: '<div id="' + t.$getId("choiceuser_article") + '" class="tang-pass-login-choice choiceuser-article"><div class="choiceuser-msg"><p class="choiceuser-msg-title">亲爱的用户，</p><p class="choiceuser-msg-text">为了确保您的帐号安全，请先确认您输入的帐号是用户名还是手机号：</p></div><div class="choiceuser-buttons"><div class="choiceuser-btn"><input class="pass-button pass-button-choiceuser-username" type="button" value="用户名" id="' + t.$getId("choiceuser_btn_username") + '"/><input class="pass-button pass-button-choiceuser-phone" type="button" value="手机号" id="' + t.$getId("choiceuser_btn_mobile") + '"/></div><div class="choiceuser-back"><a href="#" id="' + t.$getId("choiceuser_btn_back") + '">' + t.lang.backToLogin + "</a></div></div></div>",
                webtoclint: '<div id="' + t.$getId("pass_b2c") + '" style="display:none;"></div>',
                is_voice_sms: '<div class="pass-smsSwitchWrapper"><a class="pass-is_voice_sms-btn" title="语音验证码" data-type="is_voice_sms" >语音验证码</a></div>'
            };
            return n[e]
        }, _getTemplate: function () {
            var e = this,
                t = '<form id="' + e.$getId("form") + '" class="pass-form pass-form-normal" method="POST" autocomplete="off">',
                n = {
                    codeString: "",
                    safeFlag: e.config.safeFlag,
                    u: e.config.u,
                    isPhone: !1,
                    detect: "1",
                    gid: e.guideRandom || "",
                    staticPage: e.config.staticPage,
                    quick_user: e.config.isQuickUser,
                    logintype: e.config.diaPassLogin ? "dialogLogin" : "basicLogin",
                    logLoginType: e.config.diaPassLogin ? "pc_loginDialog" : "pc_loginBasic",
                    subpro: e.config.subpro,
                    idc: e.config.idc,
                    loginMerge: !0
                }, s = [{field: "userName", noError: !0}, {field: "password", pwd: !0, noError: !0}];
            t += e._getIrregularField("logoText"), t += e._getIrregularField("generalError"), t += e._getIrregularField("makeText"), t += e._getHiddenField(n), e.foreignMobile && (t += e._getIrregularField("foreignMobileMsg"), t += e._getIrregularField("foreignMobileWrapper"));
            for (var o = 0; o < s.length; o++) t += e._getRegularField(s[o]);
            return t += e._getIrregularField("verifyCode"), t += e._getIrregularField("rem"), e.foreignMobile && (t += e._getIrregularField("foreignMobileLink"), t += e._getIrregularField("foreignMobileBack")), t += e._getIrregularField("submit"), t += "</form>"
        }, _collectData: function () {
            for (var e = this, t = e.innerData.normal, n = e.dataFiels, s = 0, o = n.length; o > s; s++) t[n[s]] = e.getElement(n[s]).value;
            return t
        }, _restoreData: function (e) {
            for (var t = this, n = t.innerData[e ? e : "normal"], s = t.dataFiels, o = 0, a = s.length; a > o; o++) t.getElement(s[o]).value = n[s[o]] || "";
            return n
        }, _loadCssFileW: function (e, t) {
            var n = this;
            if (window._loadedFilesW = window._loadedFilesW || {}, !window._loadedFilesW[e]) {
                window._loadedFilesW[e] = !0;
                var s = document.createElement("link");
                s.rel = "stylesheet", s.type = "text/css", s.href = n._domain.staticFile + e, document.getElementsByTagName("head")[0].appendChild(s), s.readyState ? s.onreadystatechange = function () {
                    ("loaded" == s.readyState || "complete" == s.readyState) && (s.onreadystatechange = null, t && t())
                } : s.onload = function () {
                    t && t()
                }
            }
        }, _insertScriptW: function (e, t) {
            if (window._loadedFilesW = window._loadedFilesW || {}, !window._loadedFilesW[e]) {
                window._loadedFilesW[e] = !0;
                var n = document, s = n.createElement("SCRIPT");
                s.type = "text/javascript", s.charset = "UTF-8", s.readyState ? s.onreadystatechange = function () {
                    ("loaded" == s.readyState || "complete" == s.readyState) && (s.onreadystatechange = null, t && t())
                } : s.onload = function () {
                    t && t()
                }, s.src = e, n.getElementsByTagName("head")[0].appendChild(s)
            }
        }, _authSiteW: function () {
            var e = this, t = e.config, n = e.getPhoenixId("pass_phoenix_btn");
            t.authsitecssLoad && e._loadCssFileW("/passApi/css/authsite_c01e2ff.css"), e._insertScriptW(e._domain.auto + "/phoenix/account/jsapi", function () {
                window.baidu.phoenix && window.baidu.phoenix.require(t.authsiteLogin, baidu.extend(t.authsiteCfgLogin || {}, {
                    tpl: t.product ? t.product : "",
                    idc: t.idc ? t.idc : "",
                    u: t.u,
                    subpro: t && t.subpro || "",
                    target: n,
                    html: {
                        qzone: '<a class="phoenix-btn-item" href="#" data-title="qzone">QQ帐号</a>',
                        tsina: '<a class="phoenix-btn-item" href="#" data-title="tsina">新浪微博</a>',
                        tqq: '<a class="phoenix-btn-item" href="#" data-title="tqq">腾讯微博</a>',
                        qunar: '<a class="phoenix-btn-item" href="#" data-title="qunar">去哪儿</a>',
                        weixin: '<a class="phoenix-btn-item" href="#" data-title="weixin">微信</a>',
                        tianyi: '<a class="phoenix-btn-item" href="#" data-title="tianyi">天翼</a>',
                        feifan: '<a class="phoenix-btn-item" href="#" data-title="feifan">飞凡</a>'
                    },
                    onAfterRender: function () {
                        for (var t = baidu("#" + n + " li"), s = function (t) {
                            t.on("click", function (n) {
                                var s = {page: "loginv4", tpl: e.config.product || ""},
                                    o = {eventType: t.attr("data-title") + "Click"};
                                e._logPass(s, o), n.preventDefault()
                            })
                        }, o = 0; o < t.length; o++) {
                            var a = baidu(".phoenix-btn-item", t[o]);
                            a.attr({title: a[0] && a[0].innerHTML || ""}), s(a)
                        }
                    }
                }))
            })
        }, getVerifyCode: function (e) {
            var t = this, n = {fr: "login", loginVersion: "v4", vcodetype: t.vcodetype || ""};
            if (t.getElement("verifyCode").value = "", t.$hide("verifyCodeSuccess"), t.getElement("verifyCode_clearbtn") && t.$hide("verifyCode_clearbtn"), t.getElement("verifyCodeImg").src = "", e && e.length) {
                t.$show("verifyCodeImgWrapper"), t.getElement("verifyCodeImg").src = t.constant.VERIFYCODE_URL_PREFIX + e, t.getElement("codeString").value = e;
                var s = t.fireEvent("renderVerifycode", {
                    verifyStr: e,
                    verifyCodeImg: t.constant.VERIFYCODE_URL_PREFIX + e
                });
                if (!s) return
            } else passport.data.getVerifyCodeStr(n).success(function (e) {
                if (0 == e.errInfo.no) {
                    t.$show("verifyCodeImgWrapper"), t.getElement("verifyCodeImg").src = t.constant.VERIFYCODE_URL_PREFIX + e.data.verifyStr, t.getElement("codeString").value = e.data.verifyStr;
                    var n = t.fireEvent("renderVerifycode", {
                        verifyStr: e.data.verifyStr,
                        verifyCodeImg: t.constant.VERIFYCODE_URL_PREFIX + e.data.verifyStr
                    });
                    if (!n) return
                }
            });
            t.getElement("verifyCode_placeholder") && setTimeout(function () {
                t.$show("verifyCode_placeholder")
            }, 200)
        }, _getWDom: {
            parent: function (e) {
                return e.parentNode || e.parentElement
            }, next: function (e) {
                do e = e.nextSibling; while (e && 1 !== e.nodeType);
                return e
            }, prev: function (e) {
                do e = e.previousSibling; while (e && 1 !== e.nodeType);
                return e
            }
        }, clearVerifyCode: function () {
            var e = this;
            e.$hide("verifyCodeImgWrapper"), e.getElement("codeString").value = ""
        }, getPhoenixId: function (e) {
            if (this.config.uniqueId) return this.$getId(e);
            var t = {
                pass_phoenix_login: "pass-phoenix-login",
                pass_phoenix_list_login: "pass-phoenix-list-login",
                pass_phoenix_btn: "pass_phoenix_btn"
            };
            return t[e]
        }, getPhoenixElement: function (e) {
            return this.getElement(e) ? this.getElement(e) : document.getElementById(this.getPhoenixId(e))
        }, _getTemplateOther: function () {
            var e = [], t = this, n = 0;
            return t.config.authsiteLogin && (n = t.config.authsiteLogin.length), e.push('<div id="' + t.getPhoenixId("pass_phoenix_login") + '" class="tang-pass-login-phoenix"><div id="' + t.getPhoenixId("pass_phoenix_list_login") + '" class="pass-phoenix-list clearfix">' + (t.config.authsiteLogin ? '<div class="pass-phoenix-btn clearfix" id="' + t.getPhoenixId("pass_phoenix_btn") + '"></div>' : "") + '</div><div class="clear"></div></div>'), e.join("")
        }, getTemplateFooterBar: function () {
            var e = this, t = [];
            return t.push('<div class="tang-pass-footerBar">' + (3 === e.config.qrcode ? '<p class="tang-pass-footerBarQrcode pass-link" title="' + e.lang.qrcodeBtn + '" data-type="qrcode" id="' + e.$getId("footerQrcodeBtn") + '"' + (1 !== +e.config.userPwdLogin ? ' style="display:none;"' : "") + ">" + e.lang.qrcodeBtn + "</p>" : "") + '<p class="tang-pass-footerBarULogin pass-link" title="' + e.lang.footerBackToLogin + '" data-type="normal" id="' + e.$getId("footerULoginBtn") + '"' + (1 === +e.config.userPwdLogin ? ' style="display:none;"' : "") + ">" + e.lang.footerBackToLogin + "</p>" + (e.config.authsiteLogin.length > 0 ? '<div class="tang-pass-footerBarPhoenix"><span class="tang-pass-footerBarPhoenixSplit"></span><div class="tang-pass-footerBarPhoenixItem" id="' + e.$getId("PhoenixItem") + '"></div></div>' : "") + '<a class="pass-reglink pass-link" href="' + e.constant.REG_URL + '" target="_blank" ' + (e.config.hasRegUrl ? "" : 'style="display:none"') + ">" + e.lang.register + "</a></div>"), t.join("")
        }, setEventFooterBar: function () {
            var e = this, t = e.$getId("footerQrcodeBtn"), n = e.$getId("footerULoginBtn");
            baidu("#" + t).on("click", function (s) {
                s && s.preventDefault && s.preventDefault(), e._changeLoginType("qrcode"), baidu("#" + t).hide(), baidu("#" + n).show()
            }), baidu("#" + n).on("click", function (s) {
                s && s.preventDefault && s.preventDefault();
                var o = {page: "loginv4", tpl: e.config.product || ""}, a = {eventType: "userPwdLoginClick"};
                e._logPass(o, a), e._changeLoginType("normal"), baidu("#" + n).hide(), baidu("#" + t).show()
            })
        }, _getTemplateQrcode: function () {
            var e = this, t = [], n = e.config.qrcodeCfg && e.config.qrcodeCfg.appHref || "",
                s = e.config.qrcodeCfg && e.config.qrcodeCfg.appName || "";
            return t.push('<div id="' + e.$getId("qrcode") + '" class="clearfix tang-pass-qrcode tang-pass-login" style="display:none;">'), t.push('<p class="pass-form-logo">' + e.lang.qrcodeBtn + "</p>"), t.push('<div class="tang-pass-qrcode-content" id="' + e.$getId("qrcodeContent") + '">'), t.push('<div class="tang-pass-qrcode-init">'), t.push('<div class="Qrcode-status-con tang-pass-qrcode-imgWrapper" id="' + e.$getId("QrcodeMain") + '"><img class="tang-pass-qrcode-img" src="' + e._domain.staticFile + '/passApi/img/loading.gif"/>' + (e.config.qrcode_animation ? '<p class="Qrcode-status-animation' + (8 === +e.passLowerIE ? " Qrcode-status-animation-hackIE8" : "") + '" id="' + e.$getId("QrcodeAnimation") + '"></p>' : "") + "</div>"), t.push('<div class="Qrcode-status-con Qrcode-status-success" id="' + e.$getId("QrcodeSuccess") + '"><p class="Qrcode-status-icon"></p><p>' + e.lang.QrcodeSuccessTip + '</p><p class="Qrcode-status-msg">' + e.lang.QrcodeSuccessMsg + "</p></div>"), t.push('<div class="Qrcode-status-con Qrcode-status-error" id="' + e.$getId("QrcodeError") + '"><p class="Qrcode-status-icon"></p><p>' + e.lang.QrcodeErrorTip + '</p><p class="Qrcode-refresh-btn" id="' + e.$getId("QrcodeErrorfreshBtn") + '">' + e.lang.QrcodeRefreshBtn + "</p></div>"), t.push('<div class="Qrcode-status-con Qrcode-status-refresh" id="' + e.$getId("QrcodeRefresh") + '"><p class="Qrcode-status-icon"></p><p class="refresh-title refresh-timeout">' + e.lang.QrcodeRefreshTip + '</p><p class="refresh-title refresh-loadout">' + e.lang.QrcodeLoadTip + '</p><p class="Qrcode-refresh-btn" id="' + e.$getId("QrcodeRefreshBtn") + '">' + e.lang.QrcodeRefreshBtn + "</p></div>"), t.push("</div>"), t.push("</div>"), t.push('<p class="tang-pass-qrcode-title">' + e.lang.qrcodeTitle + (e.config.qrcodeCfg ? '<a class="pass-link" href="' + n + '">' + s + "</a>或" : "") + e.lang.qrcodeHref + "</p>"), t.push('<ul class="tang-pass-qrcode-ullist"><li class="tang-pass-qrcode-list"><span class="tang-pass-qrcode-list-aq"></span><span>' + e.lang.qrcodeListaq + '</span></li><li class="tang-pass-qrcode-list"><span class="tang-pass-qrcode-list-gx"></span><span>' + e.lang.qrcodeListgx + '</span></li><li class="tang-pass-qrcode-list"><span class="tang-pass-qrcode-list-bj"></span><span>' + e.lang.qrcodeListbj + "</span></li></ul>"), t.push("</div>"), t.join("")
        }, _setEventQrcode: function () {
            var e = this;
            1 != e.config.userPwdLogin && (/msie 6/i.test(navigator.userAgent) ? setTimeout(function () {
                e._changeLoginType("qrcode")
            }, 0) : e._changeLoginType("qrcode"))
        }, _setChannel: function () {
            var e = this, t = {apiver: "v3", tt: (new Date).getTime(), tpl: e.config.product || ""},
                n = e.getElement("qrcodeContent");
            passport[e.$getId("spareWData")] = passport[e.$getId("spareWData")] || {}, baidu(".Qrcode-status-con", n).hide(), e.$show(e.getElement("QrcodeMain")), passport[e.$getId("spareWData")].loadQrcode = setTimeout(function () {
                e.config.qrcode_style && (baidu(".Qrcode-status-con", n).hide(), baidu(".refresh-title", n).hide(), baidu(".refresh-loadout", n).show(), e.$show(e.getElement("QrcodeRefresh")))
            }, 5e3), baidu.ajax({
                url: e._domain.https + "/v2/api/getqrcode?lp=pc&gid=" + (e.guideRandom || ""),
                dataType: "jsonp",
                data: t,
                success: function (t) {
                    clearTimeout(passport[e.$getId("spareWData")].loadQrcode), clearTimeout(passport[e.$getId("spareWData")].unicast), passport[e.$getId("spareWData")].channelimg = (window.location ? window.location.protocol : document.location.protocol) + "//" + t.imgurl, passport[e.$getId("spareWData")].sign = t.sign, e._createChannel(passport[e.$getId("spareWData")].sign);
                    for (var s = baidu(".tang-pass-qrcode-img", n), o = 0, a = s.length; a > o; o++) s.get(o).src = passport[e.$getId("spareWData")].channelimg
                },
                error: function () {
                    clearTimeout(passport[e.$getId("spareWData")].loadQrcode), clearTimeout(passport[e.$getId("spareWData")].unicast), e.config.qrcode_style && (baidu(".Qrcode-status-con", n).hide(), e.$show(e.getElement("QrcodeError")))
                }
            })
        }, _stopChannel: function () {
            var e = this;
            passport[e.$getId("spareWData")] = passport[e.$getId("spareWData")] || {}, passport[e.$getId("spareWData")].sign = "", clearInterval(passport[e.$getId("spareWData")].timer)
        }, _createChannel: function (sign) {
            var me = this, qrcodeSign = sign, container = me.getElement("qrcodeContent"),
                qrcodeInit = baidu(".tang-pass-qrcode-init", container).get(0),
                qrcodeImg = baidu(".tang-pass-qrcode-img", qrcodeInit).get(0),
                data = {apiver: "v3", tt: (new Date).getTime()};
            passport[me.$getId("spareWData")] = passport[me.$getId("spareWData")] || {}, passport[me.$getId("spareWData")].unicast = setTimeout(function () {
                baidu(".Qrcode-status-con", container).hide(), me.$show(me.getElement("QrcodeError"))
            }, 35e3), baidu.ajax({
                url: me._domain.https + "/channel/unicast?channel_id=" + passport[me.$getId("spareWData")].sign + "&tpl=" + me.config.product + "&gid=" + (me.guideRandom || ""),
                dataType: "jsonp",
                data: data,
                success: function (d) {
                    if (clearTimeout(passport[me.$getId("spareWData")].unicast), d.channel_v) try {
                        d.channel_v = eval("(" + d.channel_v + ")")
                    } catch (e) {
                        d.channel_v = {}
                    } else d.channel_v = {};
                    if (d.channel_v.u && (d.channel_v.u = decodeURIComponent(d.channel_v.u)), 0 == d.errno && 0 == d.channel_v.status) {
                        clearInterval(passport[me.$getId("spareWData")].timer);
                        var data = {
                            bduss: d.channel_v.v,
                            u: encodeURIComponent(d.channel_v.u || me.config.u),
                            loginVersion: "v4",
                            qrcode: 1,
                            tpl: me.config.product ? me.config.product : ""
                        };
                        passport.data.jsonp("/v3/login/main/qrbdusslogin?v=" + (new Date).getTime(), data).success(function (e) {
                            if (0 == e.errInfo.no) {
                                var t = me.fireEvent("loginSuccess", {rsp: e}),
                                    n = {page: "loginv4", tpl: me.config.product || ""},
                                    s = {eventType: "qrcodeLoginSuccess_" + (me.config.product || "")};
                                if (me._logPass(n, s), !t) return;
                                window.location.href = e.data.u
                            } else {
                                var t = me.fireEvent("loginError", {rsp: e}),
                                    n = {page: "loginv4", tpl: me.config.product || ""},
                                    s = {eventType: "qrcodeLoginError_" + (me.config.product || "")};
                                if (me._logPass(n, s), !t) return
                            }
                        })
                    } else {
                        if (0 == d.errno && "1" == d.channel_v.status) {
                            me.config.qrcode_style && (baidu(".Qrcode-status-con", container).hide(), me.$show(me.getElement("QrcodeSuccess")));
                            var urlData = {page: "loginv4", tpl: me.config.product || ""},
                                autoStatisticObj = {eventType: "qrcodeScanSuccess_" + (me.config.product || "")};
                            me._logPass(urlData, autoStatisticObj)
                        } else 0 == d.errno && "2" == d.channel_v.status && (clearInterval(passport[me.$getId("spareWData")].timer), me.config.qrcode_style ? (baidu(".Qrcode-status-con", container).hide(), baidu(".refresh-title", container).hide(), baidu(".refresh-timeout", container).show(), me.$show(me.getElement("QrcodeRefresh"))) : (qrcodeImg && (qrcodeImg.src = me._domain.staticFile + "/passApi/img/loading.gif"), me._setChannel(), passport[me.$getId("spareWData")].timer = setInterval(function () {
                            me._setChannel()
                        }, 6e5)));
                        qrcodeSign == passport[me.$getId("spareWData")].sign && me._createChannel(qrcodeSign)
                    }
                },
                error: function () {
                    clearTimeout(passport[me.$getId("spareWData")].unicast), me.config.qrcode_style && (baidu(".Qrcode-status-con", container).hide(), me.$show(me.getElement("QrcodeError")))
                }
            })
        }, refreshQrcode: function () {
            var e = this;
            clearTimeout(passport[e.$getId("spareWData")].unicast);
            var t = e.getElement("qrcodeContent"), n = baidu(".tang-pass-qrcode-init", t).get(0),
                s = baidu(".tang-pass-qrcode-img", n).get(0);
            s && (s.src = e._domain.staticFile + "/passApi/img/loading.gif"), e._setChannel(), passport[e.$getId("spareWData")].timer = setInterval(function () {
                e._setChannel()
            }, 6e5)
        }, _actionQrcode: function () {
            {
                var e = this, t = e.qrcodeDialogDom ? e.qrcodeDialogDom : this.getElement(), n = e._getWDom.parent(t);
                e._getWDom.parent(n)
            }
            passport[e.$getId("spareWData")] = passport[e.$getId("spareWData")] || {}, passport[e.$getId("spareWData")].channelimg || (e._setChannel(), passport[e.$getId("spareWData")].timer = setInterval(function () {
                e._setChannel()
            }, 6e5))
        }, _showQrcode: function () {
            var e = this, t = this.getElement(), n = e._getWDom.parent(t), s = e._getWDom.parent(n),
                o = baidu(".pass-qrcode-btn", s).get(0);
            e._getWDom.prev(t) && e.$hide(e._getWDom.prev(t)), e.$hide("choiceuser_article").$hide(t).$show(baidu(".tang-pass-qrcode", n).get(0)), e.$hide(e._getWDom.next(o) ? o : e._getWDom.parent(e._getWDom.parent(o)))
        }, qrcodeAnimationShow: function () {
            var e = this;
            e.supportCss3Anim() ? baidu(e.getElement("QrcodeMain")).removeClass("Qrcode-animationRight").addClass("Qrcode-animation") : baidu(e.getElement("QrcodeMain")).css("margin-left", "39px"), baidu(e.getElement("QrcodeAnimation")).addClass("Qrcode-status-guideAnim")
        }, qrcodeAnimationHide: function () {
            var e = this;
            baidu(e.getElement("QrcodeAnimation")).removeClass("Qrcode-status-guideAnim"), e.supportCss3Anim() ? baidu(e.getElement("QrcodeMain")).removeClass("Qrcode-animation").addClass("Qrcode-animationRight") : baidu(e.getElement("QrcodeMain")).css("margin-left", "99px")
        }, supportCss3Anim: function () {
            var e = document.getElementsByTagName("body")[0].style;
            return "undefined" != typeof e.animation || "undefined" != typeof e.WebkitAnimation ? !0 : !1
        }, setqrcodeEvent: function () {
            var e = this;
            e.config.qrcode_animation && (baidu(e.getElement("QrcodeMain")).on("mouseenter", function (t) {
                t && t.preventDefault && t.preventDefault(), e.qrcodeAnimationShow()
            }), baidu(e.getElement("QrcodeMain")).on("mouseleave", function (t) {
                t && t.preventDefault && t.preventDefault(), e.qrcodeAnimationHide()
            })), baidu(e.getElement("QrcodeErrorfreshBtn")).on("click", function () {
                e.refreshQrcode()
            }), baidu(e.getElement("QrcodeRefreshBtn")).on("click", function () {
                e.refreshQrcode()
            })
        }, _getTemplateSms: function () {
            var e = this, t = "none",
                n = '<div id="' + e.$getId("sms") + '" class="tang-pass-login tang-pass-sms" style="display:' + t + '">',
                s = {
                    u: e.config.u,
                    staticPage: e.config.staticPage,
                    tpl: e.config.product ? e.config.product : "",
                    idc: e.config.idc ? e.config.idc : "",
                    isdpass: "1",
                    gid: e.guideRandom || "",
                    switchuname: "",
                    smsCodeString: "",
                    smsVcodesign: "",
                    smsVcodestr: "",
                    subpro: e.config.subpro,
                    is_voice_sms: e.config.is_voice_sms,
                    voice_sms_flag: 0
                };
            return n += '<p class="pass-form-logo">' + e.lang.toSmsBtn + "</p>", n += '<p class="tang-pass-sms-tip">' + (e.config.smsText || "验证即登录，未注册将自动创建百度帐号") + "</p>", n += '<form id="' + e.$getId("smsForm") + '" method="POST">', n += e._getHiddenField(s, "smsHiddenFields"), n += '<p id="' + e.$getId("smsErrorWrapper") + '" class="pass-generalErrorWrapper"><span id="' + e.$getId("smsError") + '" class="pass-generalError"></span></p>', n += '<div id="' + e.$getId("smsPhoneWrapper") + '" class="pass-form-item pass-form-item-smsPhone' + (e.foreignMobile ? " pass-form-item-PhoneCountry" : "") + '">' + (e.foreignMobile ? '<label for="' + e.$getId("smsPhone") + '" id="' + e.$getId("smsPhoneCountryLabel") + '" class="pass-label pass-label-smsPhone" data-countryCode="">+86</label>' : "") + '<input id="' + e.$getId("smsPhone") + '" type="text" name="username" class="pass-text-input pass-text-input-smsPhone" /><span id="' + e.$getId("smsPhoneTip") + '" class="pass-item-tip pass-item-tip-smsPhone" style="display:none"><span id="' + e.$getId("smsPhoneTipText") + '"></span></span>' + (e.foreignMobile ? '<ul id="' + e.$getId("smsCountryList") + '" class="pass-country-list"></ul>' : "") + "</div>", n += '<p id="' + e.$getId("smsVerifyCodeWrapper") + '" class="pass-form-item pass-form-item-smsVerifyCode"><input id="' + e.$getId("smsVerifyCode") + '" type="text" name="password" class="pass-text-input pass-text-input-smsVerifyCode" /><button id="' + e.$getId("smsTimer") + '" class="pass-item-timer">发送' + e.lang.smsVerifyCode + '</button><span id="' + e.$getId("smsVerifyCodeTip") + '" class="pass-item-tip pass-item-tip-smsVerifyCode" style="display:none"><span id="' + e.$getId("smsVerifyCodeTipText") + '"></span></span></p>', n += 1 != e.config.is_voice_sms ? '<p id="' + e.$getId("smsSubmitWrapper") + '" class="pass-form-item pass-form-item-submit"><input id="' + e.$getId("smsSubmit") + '" type="submit" value="登录" class="pass-button pass-button-submit" /><span class="tang-pass-sms-agreement pass-link">' + e.lang.agree + '<a target="_blank" href="' + e.constant.PROTOCAL_URL + '">' + e.lang.baiduUserProtocal + "</a></span>" + ('<a id="' + e.$getId("sms_btn_back") + '" class="pass-sms-link pass-sms-link-back pass-link">' + e.lang.backToLogin + "</a>") + "</p>" : '<p id="' + e.$getId("smsSubmitWrapper") + '" class="pass-form-item pass-form-item-submit"><input id="' + e.$getId("smsSubmit") + '" type="submit" value="登录" class="pass-button pass-button-submit" /><input  type="button" style="border:none;background:none;margin-top:12px;cursor:pointer;color:#2e7fdb;font-size:12px" class="pass-is_voice"  id="getVoiceSms" value="获取语音验证码" />' + ('<a id="' + e.$getId("sms_btn_back") + '" class="pass-sms-link pass-sms-link-back pass-link">' + e.lang.backToLogin + "</a>") + '</br><span class="tang-pass-sms-agreement pass-link">' + e.lang.agree + '<a target="_blank" href="' + e.constant.PROTOCAL_URL + '">' + e.lang.baiduUserProtocal + "</a></span></p>", n += "</form>", n += "</div>"
        }, _setEventSms: function () {
            var e = this, t = this.getElement(), n = e._getWDom.parent(t), s = e._getWDom.parent(n),
                o = baidu("#" + e.$getId("sms"), s).get(0), a = baidu(".pass-text-input", o);
            e.foreignMobile && baidu(e.getElement("smsPhoneCountryLabel")).on("click", function (t) {
                var n = e.getElement("smsCountryList");
                n && "block" != n.style.display ? (e.$show(n), baidu(e.getElement("smsPhoneCountryLabel")).addClass("pass-label-code-up")) : n && (e.$hide(n), baidu(e.getElement("smsPhoneCountryLabel")).removeClass("pass-label-code-up")), e._selectCountryList(e.getElement("smsPhoneWrapper")), t.preventDefault()
            }), a.on("mouseover", function () {
                var t = e.fireEvent("fieldMouseover", {ele: baidu(this)});
                t && baidu(this).addClass(e.constant.HOVER_CLASS)
            }), a.on("mouseout", function () {
                var t = e.fireEvent("fieldMouseout", {ele: baidu(this)});
                t && baidu(this).removeClass(e.constant.HOVER_CLASS)
            }), a.on("keydown", function (t) {
                13 == t.keyCode && (t && t.preventDefault && t.preventDefault(), e._submitSmsForm(t))
            });
            var i = baidu(e.getElement("smsPhone"));
            i.on("focus", function () {
                e.initialized || e._initApi();
                var t = e.fireEvent("fieldFocus", {ele: baidu(this)});
                if (t) {
                    baidu(this).addClass(e.constant.FOCUS_CLASS), baidu(this).removeClass(e.constant.ERROR_CLASS);
                    var n = document.getElementById(e.$getId("smsRegPromptWrapper"));
                    n && e.$hide(n)
                }
            }), i.on("keydown", function () {
                if (!e.isSendSmsInput) {
                    e.isSendSmsInput = !0;
                    var t = {page: "loginv4", tpl: e.config.product || ""}, n = {eventType: "pc-smslogin-input"};
                    e._logPass(t, n)
                }
            });
            var r = baidu(e.getElement("smsVerifyCode"));
            r.on("focus", function () {
                e.initialized || e._initApi();
                var t = e.fireEvent("fieldFocus", {ele: baidu(this)});
                t && (baidu(this).addClass(e.constant.FOCUS_CLASS), baidu(this).removeClass(e.constant.ERROR_CLASS))
            }), r.on("keydown", function () {
                if (!e.isSendSmsCodeInput) {
                    e.isSendSmsCodeInput = !0;
                    var t = {page: "loginv4", tpl: e.config.product || ""}, n = {eventType: "pc-smslogin-code-input"};
                    e._logPass(t, n)
                }
            }), a.on("blur", function () {
                if (this.value) {
                    var t = e.fireEvent("fieldBlur", {ele: baidu(this)});
                    if (!t) return;
                    "username" === this.name ? e._validatorPhoneFn(this) : e._validatorSmsFn(this)
                }
                baidu(this).removeClass(e.constant.FOCUS_CLASS)
            }), baidu("#" + e.$getId("smsTimer"), o).on("click", function (t) {
                var n = {page: "loginv4", tpl: e.config.product || ""}, s = {eventType: "pc-smslogin-send-click"};
                e._logPass(n, s), e.config.voice_sms_flag = 0, t.preventDefault(), e._checkRegPhone()
            }), baidu("#" + e.$getId("smsSubmit"), o).on("click", function (t) {
                var n = {page: "loginv4", tpl: e.config.product || ""}, s = {eventType: "pc-smslogin-submit-click"};
                e._logPass(n, s), t && t.preventDefault && t.preventDefault(), e._submitSmsForm(t)
            }), baidu(e.getElement("smsSwitchWrapper")).on("click", function () {
                /msie 6/i.test(navigator.userAgent) || /msie 7/i.test(navigator.userAgent) ? setTimeout(function () {
                    e._changeLoginType("sms")
                }, 0) : e._changeLoginType("sms")
            }), baidu(e.getElement("sms_btn_back")).on("click", function () {
                e._changeLoginType("normal"), e.getElement("password") && e._doFocus("password")
            }), baidu(document.getElementById("getVoiceSms")).on("click", function (t) {
                e.config.voice_sms_flag = 1, t.preventDefault(), e._checkRegPhone()
            })
        }, _setSmsGeneralError: function (e) {
            this.getElement("smsError").innerHTML = e
        }, _sendVcode: function (e) {
            var t, n = e || this, s = (n.config.voice_sms_flag, document.getElementById(n.$getId("smsPhone"))),
                o = n.getElement("smsPhoneCountryLabel") ? baidu(n.getElement("smsPhoneCountryLabel")).attr("data-countrycode") || "" : "",
                a = 60, i = baidu("#" + n.$getId("sms")).get(0);
            if (n._validatorPhoneFn(s)) {
                baidu("#" + n.$getId("smsRegPromptBtn"), i).off("click"), baidu("#" + n.$getId("smsRegPromptBtn"), i).on("click", function (e) {
                    e.preventDefault()
                }), baidu("#" + n.$getId("smsTimer"), i).off("click"), baidu("#" + n.$getId("smsTimer"), i).on("click", function (e) {
                    e.preventDefault()
                }), baidu("#" + n.$getId("smsTimer"), i).removeClass("pass-item-timer"), baidu("#" + n.$getId("smsTimer"), i).addClass("pass-item-time-timing");
                var r = {
                    gid: n.guideRandom || "",
                    username: n._SBCtoDBC(s.value),
                    countrycode: o,
                    bdstoken: n.bdPsWtoken,
                    tpl: n.config.product ? n.config.product : "",
                    loginVersion: "v4",
                    flag_code: n.config.voice_sms_flag,
                    client: n.config.client
                };
                r.dv = document.getElementById("dv_Input") ? document.getElementById("dv_Input").value : window.LG_DV_ARG && window.LG_DV_ARG.dvjsInput || "";
                var d = "";
                d = 1 === +n.config.voice_sms_flag ? window.location.protocol.toLowerCase() + "//wappass.baidu.com/wp/api/login/sms?is_voice_sms=" + n.config.voice_sms_flag : n._domain.auto + "/v2/api/senddpass", passport.data.jsonp(d, r).success(function (e) {
                    if (0 === +n.config.voice_sms_flag && 0 !== +e.data.errno || 1 === +n.config.voice_sms_flag && 0 !== +e.errInfo.no) {
                        if (18 === +e.data.errno || 19 === +e.data.errno || 50020 === +e.errInfo.no || 50021 === +e.errInfo.no) {
                            var r = n.constant.VERIFYCODE_URL_PREFIX + e.data.vcodestr;
                            n.getElement("smsHiddenFields_smsVcodesign").value = e.data.vcodesign, n.getElement("smsHiddenFields_smsVcodestr").value = e.data.vcodestr, confirmSmsVerifyWidget ? (n.getElement("confirmVerifyCodeImg").src = r, n.getElement("confirmVerifyCode").value = "", n._ownerDialog && n._ownerDialog.hide("unHide"), confirmSmsVerifyWidget.show()) : passport._load(n._domain.auto + "/passApi/js/uni_wrapper.js", !0, function () {
                                confirmSmsVerifyWidget = passport.pop.init({
                                    type: "confirmWidget",
                                    tangram: !0,
                                    titleText: "安全验证",
                                    width: 490,
                                    apiOpt: {
                                        Continue: "确定",
                                        contentHTML: '<p class="pass-confirm-verifyWidget-msg">请填写图中的验证码</p><p class="pass-confirm-verifyWidget-imgWrapper"><input type="text" class="pass-text-input pass-confirm-verifyWidget-verifyCode" id="' + n.$getId("confirmVerifyCode") + '" name="confirmVerifyCode" value="" /><img src="' + r + '" title="" class="pass-confirm-verifyWidget-verifyCode-img" id="' + n.$getId("confirmVerifyCodeImg") + '" /><a href="#" class="pass-confirm-verifyWidget-imgChange" id="' + n.$getId("confirmVerifyCodeChange") + '">换一张</a><span class="pass-confirm-verifyWidget-error" id="' + n.$getId("confirmVerifyCodeError") + '"></span></p>'
                                    },
                                    onRender: function () {
                                        baidu(confirmSmsVerifyWidget.getElement("confirmWidget_footer")).addClass("pass-confirm-verifyWidget-bottom"), n.config.hasPlaceholder && n._getPlaceholder([{
                                            label: "confirmVerifyCode",
                                            placeholder: "verifyCode"
                                        }]), baidu(n.getElement("confirmVerifyCodeChange")).on("click", function () {
                                            baidu(n.getElement("confirmVerifyCodeImg")).attr("src", n.constant.VERIFYCODE_URL_PREFIX + n.getElement("smsHiddenFields_smsVcodestr").value + "&v=" + (new Date).getTime())
                                        }), baidu(n.getElement("confirmVerifyCode")).on("keyup", function () {
                                            baidu(n.getElement("confirmVerifyCode")).removeClass("pass-text-input-error"), baidu(n.getElement("confirmVerifyCodeError")).hide(), baidu(n.getElement("confirmVerifyCodeError")).get(0).innerHTML = ""
                                        }), baidu(n.getElement("confirmVerifyCode")).on("change", function () {
                                            n.getElement("confirmVerifyCode").value = n.getElement("confirmVerifyCode").value.replace(/\s/g, "")
                                        })
                                    },
                                    onConfirmClose: function () {
                                        baidu(n.getElement("confirmVerifyCodeError")).hide(), baidu(n.getElement("confirmVerifyCodeError")).get(0).innerHTML = "", confirmSmsVerifyWidget.hide(), n._ownerDialog && n._ownerDialog.show()
                                    },
                                    onConfirmCancel: function () {
                                    },
                                    onConfirmContinue: function () {
                                        if ("" == n.getElement("confirmVerifyCode").value) return baidu(n.getElement("confirmVerifyCode")).addClass("pass-text-input-error"), baidu(n.getElement("confirmVerifyCodeError")).show(), void(baidu(n.getElement("confirmVerifyCodeError")).get(0).innerHTML = n.lang.confirmVerCodeEmpty);
                                        var r = document.getElementById("dv_Input"), d = {
                                            gid: n.guideRandom || "",
                                            username: n._SBCtoDBC(s.value),
                                            countrycode: o,
                                            bdstoken: n.bdPsWtoken,
                                            tpl: n.config.product ? n.config.product : "",
                                            vcodestr: n.getElement("smsHiddenFields_smsVcodestr").value,
                                            vcodesign: n.getElement("smsHiddenFields_smsVcodesign").value,
                                            verifycode: n._SBCtoDBC(n.getElement("confirmVerifyCode").value),
                                            flag_code: n.config.voice_sms_flag,
                                            loginVersion: "v4",
                                            dv: r ? r.value : window.LG_DV_ARG && window.LG_DV_ARG.dvjsInput || ""
                                        }, l = "";
                                        l = 1 == n.config.voice_sms_flag ? window.location.protocol.toLowerCase() + "//wappass.baidu.com/wp/api/login/sms?is_voice_sms=" + n.config.voice_sms_flag : n._domain.auto + "/v2/api/senddpass", passport.data.jsonp(l, d).success(function (s) {
                                            var o = baidu(n.getElement("confirmVerifyCodeError"));
                                            if (0 == n.config.voice_sms_flag && 0 == s.data.errno || 1 == n.config.voice_sms_flag && 0 == s.errInfo.no) {
                                                if (1 == n.config.voice_sms_flag) {
                                                    var r = 15;
                                                    document.getElementById("getVoiceSms").disabled = !0, t = setInterval(function () {
                                                        var e = document.getElementById("getVoiceSms");
                                                        if (0 == --r) {
                                                            clearInterval(t);
                                                            var s = n.$getId("smsTimer"), o = baidu("#" + s, i);
                                                            o.removeClass("pass-item-time-timing"), o.addClass("pass-item-timer"), e.disabled = !1, e.value = "重新发送语音验证码", document.getElementById(s).innerHTML = "重新发送", r = 60
                                                        } else e.value = "已发送" + r + "s"
                                                    }, 1e3)
                                                } else t = setInterval(function () {
                                                    var e = n.$getId("smsTimer"), s = document.getElementById(e);
                                                    if (0 == --a) {
                                                        clearInterval(t);
                                                        var o = baidu("#" + e, i);
                                                        o.removeClass("pass-item-time-timing"), o.addClass("pass-item-timer"), s.innerHTML = "重新发送", a = 60
                                                    } else s.innerHTML = "重新发送(" + a + ")"
                                                }, 1e3);
                                                o.hide(), o.get(0).innerHTML = "", confirmSmsVerifyWidget.hide(), n._ownerDialog && n._ownerDialog.show()
                                            } else 20 == s.data.errno || 21 == s.data.errno ? (baidu(n.getElement("confirmVerifyCode")).addClass("pass-text-input-error"), o.show(), o.get(0).innerHTML = s.data.msg, n.getElement("confirmVerifyCodeImg").src = n.constant.VERIFYCODE_URL_PREFIX + s.data.vcodestr, n.getElement("confirmVerifyCode").value = "", n.getElement("smsHiddenFields_smsVcodesign").value = s.data.vcodesign, n.getElement("smsHiddenFields_smsVcodestr").value = s.data.vcodestr) : 27 == e.data.errno ? document.location.href = "https://passport.baidu.com/v2/?reg&overseas=" + n.config.overseas + "&tpl=" + n.config.product + "&u=" + encodeURIComponent(n.config.u) : (o.hide(), confirmSmsVerifyWidget.hide(), n._ownerDialog && n._ownerDialog.show(), n._setSmsGeneralError(1 == n.config.voice_sms_flag ? s.errInfo.msg : s.data.msg))
                                        })
                                    }
                                }), n._ownerDialog && n._ownerDialog.hide("unHide"), confirmSmsVerifyWidget.show()
                            })
                        } else 27 == e.data.errno ? document.location.href = "https://passport.baidu.com/v2/?reg&overseas=" + n.config.overseas + "&tpl=" + n.config.product + "&u=" + encodeURIComponent(n.config.u) : n._setSmsGeneralError(1 !== +n.config.voice_sms_flag ? e.data.msg : e.errInfo.msg);
                        baidu("#" + n.$getId("smsTimer"), i).addClass("pass-item-timer"), baidu("#" + n.$getId("smsTimer"), i).removeClass("pass-item-time-timing"), document.getElementById(n.$getId("smsTimer")).innerHTML = "重新发送"
                    } else if (1 == n.config.voice_sms_flag) {
                        var d = 15;
                        document.getElementById("getVoiceSms").disabled = !0, t = setInterval(function () {
                            if (0 == --d) {
                                clearInterval(t);
                                var e = baidu("#" + n.$getId("smsTimer"), i);
                                e.removeClass("pass-item-time-timing"), e.addClass("pass-item-timer"), document.getElementById("getVoiceSms").disabled = !1, document.getElementById("getVoiceSms").value = "重新发送语音验证码", document.getElementById(n.$getId("smsTimer")).innerHTML = "重新发送", d = 15
                            } else document.getElementById("getVoiceSms").value = "已发送" + d + "s"
                        }, 1e3)
                    } else t = setInterval(function () {
                        var e = document.getElementById(n.$getId("smsTimer"));
                        if (0 == --a) {
                            clearInterval(t);
                            var s = baidu("#" + n.$getId("smsTimer"), i);
                            s.removeClass("pass-item-time-timing"), s.addClass("pass-item-timer"), e.innerHTML = "重新发送", a = 60
                        } else e.innerHTML = "重新发送(" + a + ")"
                    }, 1e3);
                    baidu("#" + n.$getId("smsTimer"), i).on("click", function (e) {
                        n.config.voice_sms_flag = 0, e.preventDefault(), n._checkRegPhone()
                    })
                })
            }
        }, _validatorPhoneFn: function (e) {
            var t = this;
            if ("" == e.value) return t._setSmsGeneralError("请填写手机号"), baidu(e).addClass(t.constant.ERROR_CLASS), !1;
            if (t.getElement("smsPhoneCountryLabel") && "" != baidu(t.getElement("smsPhoneCountryLabel")).attr("data-countrycode")) {
                if (!new RegExp(/^(\d)*$/).test(t._SBCtoDBC(e.value))) return t._setSmsGeneralError("手机号码格式不正确"), baidu(e).addClass(t.constant.ERROR_CLASS), !1
            } else if (!new RegExp(/^1[3456789]\d{9}$/).test(t._SBCtoDBC(e.value))) return t._setSmsGeneralError("手机号码格式不正确"), baidu(e).addClass(t.constant.ERROR_CLASS), !1;
            return t._setSmsGeneralError(""), baidu(e).removeClass(t.constant.ERROR_CLASS), !0
        }, _validatorSmsFn: function (e) {
            var t = this;
            return "" == e.value ? (t._setSmsGeneralError("请填写验证码"), baidu(e).addClass(t.constant.ERROR_CLASS), !1) : (t._setSmsGeneralError(""), !0)
        }, _postSmsData: function (e) {
            var t = this;
            e.countrycode = t.getElement("smsPhoneCountryLabel") ? baidu(t.getElement("smsPhoneCountryLabel")).attr("data-countrycode") || "" : "", e.token = t.bdPsWtoken, e.loginVersion = "v4", passport.data.traceID && passport.data.traceID.startFlow && passport.data.traceID.startFlow("login"), e.dv = document.getElementById("dv_Input") ? document.getElementById("dv_Input").value : window.LG_DV_ARG && window.LG_DV_ARG.dvjsInput || "", passport.data.login(e).success(function (e) {
                if (e.loginType = "sms", 0 == e.errInfo.no) {
                    var n = t.fireEvent("loginSuccess", {rsp: e});
                    if (!n) return;
                    window.location.href = e.data.u
                } else {
                    t.getElement("smsSubmit").style.color = "#fff";
                    var n = t.fireEvent("loginError", {rsp: e});
                    if (!n) return;
                    t._setSmsGeneralError(4 == e.errInfo.no ? t.lang.captchaErr : e.errInfo.msg), (3 == e.errInfo.no || 4 == e.errInfo.no) && t._clearInput("smsVerifyCode")
                }
            })
        }, smsLoginSubmit: function (e) {
            var t = this, e = e || {}, n = baidu.form.json(t.getElement("smsForm"));
            e.errInfo && 3 == e.errInfo.no ? passport.data.post("/v2/unite-bind", {
                username: e.data.username || "",
                password: n.password,
                countrycode: t.getElement("smsPhoneCountryLabel") ? baidu(t.getElement("smsPhoneCountryLabel")).attr("data-countrycode") || "" : "",
                sms: 1,
                apiver: "v3",
                loginVersion: "v4",
                token: e.data.token || ""
            }).success(function () {
                t._postSmsData(n)
            }) : t._postSmsData(n)
        }, _submitSmsForm: function () {
            function e() {
                t._postSmsData(a)
            }

            var t = this, n = document.getElementById(t.$getId("smsPhone")),
                s = document.getElementById(t.$getId("smsVerifyCode"));
            if (!t._validatorPhoneFn(n)) return void n.focus();
            if (t._validatorSmsFn(s)) {
                var o = t.fireEvent("beforeSubmit");
                if (o) {
                    t.getElement("smsSubmit").style.color = "#9ebef4";
                    var a = baidu.form.json(t.getElement("smsForm"));
                    a.password = t._SBCtoDBC(a.password), a.username = t._SBCtoDBC(a.username), a.FP_UID = t._getCookie("FP_UID") || "", a.FP_INFO = window.PP_FP_INFO || "", a.client = t.config.client, t.loginConnect({
                        username: a.username,
                        password: a.password,
                        countrycode: t.getElement("smsPhoneCountryLabel") ? baidu(t.getElement("smsPhoneCountryLabel")).attr("data-countrycode") || "" : "",
                        smsVcode: a.password,
                        isdpass: 1,
                        sms: 1
                    }, {
                        fail: function (e) {
                            t._setSmsGeneralError(e)
                        }
                    }, e)
                }
            }
        }, _setEventChoiceUser: function () {
            var e = this, t = function () {
                baidu(e.getElement()).removeClass("tang-pass-login-hide"), e.$show(e.getElement()).$hide("choiceuser_article")
            }, n = function () {
                baidu(e.getElement()).removeClass("tang-pass-login-hide"), e.$show(e.getElement()).$hide("choiceuser_article"), e.submit()
            };
            baidu(e.getElement("choiceuser_btn_username")).on("click", function (t) {
                e.getElement("loginMerge").value = "false", n(t)
            }), baidu(e.getElement("choiceuser_btn_mobile")).on("click", function (t) {
                e.getElement("isPhone").value = "true", e.getElement("loginMerge").value = "false", n(t)
            }), baidu(e.getElement("choiceuser_btn_back")).on("click", function (e) {
                e.preventDefault(), t()
            })
        }, _getToken: function (e) {
            var t = this;
            passport[t.$getId("spareWData")] = passport[t.$getId("spareWData")] || {}, passport.data.getApiInfo({
                apiType: "login",
                loginVersion: "v4",
                gid: t.guideRandom || ""
            }).success(function (n) {
                t.bdPsWtoken = n.data.token, e && e(t)
            })
        }, _getRSA: function (e) {
            var t = this;
            passport.data.getRsaKey({gid: t.guideRandom || "", loginVersion: "v4"}).success(function (t) {
                t.errInfo.no || 0 == t.errInfo.no || (t = t.data);
                var n = new passport.lib.RSA;
                n.setKey(t.pubkey), e && e({RSA: n, rsakey: t.key})
            })
        }, _changeLoginType: function (e) {
            var t = this, n = this.getElement(), s = t._getWDom.parent(n), o = t._getWDom.parent(s),
                a = (t.getElement("qrcode"), t.getElement("sms"), baidu(".tang-pass-login-phoenix", o).get(0), {
                    normal: {
                        $btn: baidu(".pass-normal-btn", t.getPhoenixElement("pass_phoenix_list_login")),
                        $ele: baidu(t.getElement("form")).parent()
                    },
                    sms: {
                        $btn: baidu(".pass-sms-btn", t.getPhoenixElement("pass_phoenix_list_login")),
                        $ele: baidu(t.getElement("sms"))
                    },
                    qrcode: {
                        $btn: baidu(".pass-qrcode-btn", t.getPhoenixElement("pass_phoenix_list_login")),
                        $ele: baidu(t.getElement("qrcode"))
                    }
                }), i = t.getElement("choiceuser_article");
            if (e = e || "normal", "sms" === e) {
                var r = {page: "loginv4", tpl: t.config.product || ""}, d = {eventType: "pc-smslogin-show"};
                t._logPass(r, d)
            }
            i && t.$hide("choiceuser_article");
            var l = t.fireEvent("changeLoginType", {loginType: e, currentLoginType: t.currentLoginType || ""});
            if (l) {
                for (var c in a) a[c].$ele && a[c].$ele.length > 0 && (c == e ? t.$show(a[c].$ele[0]) : t.$hide(a[c].$ele[0]));
                "qrcode" === e && t._actionQrcode(), t.currentLoginType = e
            }
        }, _doFocus: function (e) {
            var t = this;
            t.config.autoFocus && ("string" == (typeof e).toLowerCase() && t.getElement(e) ? t.getElement(e).focus() : e.focus())
        }, _clearInput: function (e) {
            var t = this, n = t.getElement(e), s = t.getElement(e + "_placeholder"), o = t.getElement(e + "_clearbtn");
            n && (s && t.$show(s), o && t.$hide(s), n.value = "", t._doFocus(n))
        }, _insertAfterW: function (e, t) {
            var n = this, s = n._getWDom.parent(t);
            s.lastChild == t ? s.appendChild(e) : s.insertBefore(e, n._getWDom.next(t))
        }, _insertNoCaptchaScript: function () {
            var e = this;
            e._insertScriptW(e.constant.NOCAPTCHA_URL, function () {
            })
        }, _checkCapsLock: function () {
            var e = this, t = baidu(e.getElement("password"));
            t.on("keypress", function (t) {
                var n = t || window.event, s = n.keyCode || n.which, o = n.shiftKey || 16 == s || !1,
                    a = document.getElementById(e.$getId("caps"));
                if (s >= 65 && 90 >= s && !o || s >= 97 && 122 >= s && o) if (a) e.$show(a); else {
                    var i = document.createElement("span");
                    i.id = e.$getId("caps"), i.innerHTML = "大小写锁定已打开";
                    var r = document.getElementById(e.$getId("passwordWrapper"));
                    "static" == r.style.position && (r.style.position = "relative"), r.style.zIndex = r.style.zIndex ? r.style.zIndex + 1 : 20, i.style.cssText = 'position:absolute;left:60px;clear:both;top:25px;width:103px;height:37px;font-size:12px;line-height:45px;z-index:20;text-align:center;background:url("' + e._domain.staticFile + '/passApi/img/caps.gif") no-repeat 0 0;', r.appendChild(i)
                } else a && e.$hide(a)
            }), t.on("blur", function () {
                var t = document.getElementById(e.$getId("caps"));
                t && e.$hide(t)
            })
        }, _checkRegPhone: function () {
            var e = this,
                t = e.getElement("smsPhoneCountryLabel") ? baidu(e.getElement("smsPhoneCountryLabel")).attr("data-countrycode") || "" : "",
                n = document.getElementById(e.$getId("smsPhone"));
            e._validatorPhoneFn(n) && passport.data.getphonestatus({
                gid: e.guideRandom || "",
                phone: e._SBCtoDBC(n.value),
                loginVersion: "v4",
                countrycode: t
            }).success(function (s) {
                var o = e.fireEvent("_checkRegPhone", {rsp: s});
                if (o) if (0 == s.errInfo.no) e.config.sendVcodeBefore && "function" == typeof e.config.sendVcodeBefore ? e.config.sendVcodeBefore(e, e._sendVcode, function () {
                    n.value = "", n.focus()
                }) : e.bdPsWtoken ? e._sendVcode() : e._getToken(e._sendVcode); else if (3 == s.errInfo.no) {
                    var a = e.config.voice_sms_flag, i = document.getElementById(e.$getId("smsRegPromptWrapper")),
                        r = document.getElementById(e.$getId("smsPhoneWrapper"));
                    if (i) e.$show(i), e.getElement("smsRegPromptBtn").focus(); else {
                        var d = document.createElement("div");
                        d.id = e.$getId("smsRegPromptWrapper"), d.setAttribute("class", "pass-form-sms-checkphone"), d.style.cssText = 'position:absolute;clear:both;color:#826f33;z-index:999;font-size:12px;width:211px;height:75px;padding:16px 16px 11px 13px;background:url("' + e._domain.staticFile + '/passApi/img/smsRegphone.png") 0px 0px no-repeat;right:0px;', d.innerHTML = '<p style="margin:0px;padding:0px;line-height:2em;">您的手机号码尚未注册，点击注册，帮您注册新的百度帐号</p><button id="' + e.$getId("smsRegPromptBtn") + '" style="background:#2e82ff;border:none;color:#fff;cursor:pointer;height:25px;line-height:25px;width:60px;text-align:center;position:absolute;right:16px;top:66px;" hidefocus=true>注册</button>', r.appendChild(d), e.getElement("smsRegPromptBtn").focus()
                    }
                    baidu(e.getElement("smsRegPromptBtn")).on("click", function (s) {
                        e.config.voice_sms_flag = a, e.getElement("smsRegPromptWrapper") && baidu(e.getElement("smsRegPromptWrapper")).hide(), s.preventDefault(), "" != t ? window.location.href = e.constant.REG_URL : e.config.sendVcodeBefore && "function" == typeof e.config.sendVcodeBefore ? e.config.sendVcodeBefore(e, e._sendVcode, function () {
                            n.value = "", n.focus()
                        }) : e.bdPsWtoken ? e._sendVcode() : e._getToken(e._sendVcode)
                    }), e.config.voice_sms_flag = 0
                } else e.config.voice_sms_flag = 0, e._setSmsGeneralError(s.errInfo.msg)
            })
        }, changeSuggestView: function (e) {
            var t = this;
            t.suggestionDom && e.list && ("hide" == e.list ? t.$hide(t.suggestionDom) : "show" == e.list && t.$show(t.suggestionDom)), t.selectBtn && e.btn && ("close" == e.btn ? (baidu(t.selectBtn).removeClass("open"), baidu(t.getElement("userName")).addClass("open"), t.$show(t.selectBtn)) : "open" == e.btn ? (baidu(t.selectBtn).addClass("open"), baidu(t.getElement("userName")).addClass("open"), t.$show(t.selectBtn)) : "hide" == e.btn ? (t.$hide(t.selectBtn), baidu(t.getElement("userName")).removeClass("open")) : e.btn + "" == "show" && (t.$show(t.selectBtn), baidu(t.getElement("userName")).addClass("open")), t.$hide(t.selectBtn))
        }, _suggestion: function (e) {
            {
                var t = this, n = [], s = baidu("#" + t.$getId("userName"), t.getElement()),
                    o = ["qq.com", "163.com", "126.com", "sohu.com", "sina.com", "gmail.com", "21cn.com", "hotmail.com", "vip.qq.com", "yeah.net", "139.com"],
                    a = /^([a-zA-Z0-9_.\-+]+)([@]?[a-zA-Z0-9_\-*]*[.]?[a-zA-Z*]*[.]?[a-zA-Z*]*)$/, i = function (e, t) {
                        var n = e;
                        return e.substr(0, e.indexOf("@") - 1).length > t.maxlength && (n = e.substr(0, t.maxlength - 4) + "…" + e.substr(e.indexOf("@"))), baidu('<li class="pass-item-suggsetion" data-select="' + e + '" data-type="' + (t.ifdelete ? "history" : "normal") + '">' + n + (t.ifdelete ? '<a data-delete="' + e + '" title="删除该记录"></a>' : "") + "</li>").get(0)
                    }, r = function (e, s) {
                        t.suggestionDom || (t.suggestionDom = document.createElement("ul"), t.suggestionDom.id = t.$getId("suggestionWrapper"), baidu(t.getElement("userNameWrapper")).append(t.suggestionDom), baidu(t.suggestionDom).addClass("pass-suggestion-list"), baidu(t.suggestionDom).on("click", function (e) {
                            var o = baidu(e.target), a = o.attr("data-delete"), i = o.attr("data-select");
                            if (a) e.preventDefault(), passport.data.getLoginHistory({
                                token: t.bdPsWtoken,
                                loginVersion: "v4",
                                item: a
                            }), t.suggestionDom.data_delete = !0, baidu(o.parent()).hide(), baidu.array(n).remove(a), n.length < 1 && t.changeSuggestView({
                                list: " hide",
                                btn: "hide"
                            }), t._doFocus("userName"), setTimeout(function () {
                                t.suggestionDom.data_delete = !1
                            }, 200); else {
                                "history" == o.attr("data-type") ? s.value = i : (t.suggestionDom.data_delete = !1, s.value = i || s.value), t.getElement("userName_placeholder") && t.$hide("userName_placeholder"), t.changeSuggestView({
                                    list: "hide",
                                    btn: "close"
                                }), t._doFocus(s), setTimeout(function () {
                                    t.setGeneralError(""), baidu(s).removeClass("pass-text-input-error"), t._doFocus("password")
                                }, 100);
                                var r = t.getElement("userName").value;
                                t._loginCheck(r)
                            }
                        })), t.suggestionDom.innerHTML = "", t.$show(t.suggestionDom), t.suggestionDom.appendChild(e), baidu(".pass-item-suggsetion", t.suggestionDom).on("mouseover", function () {
                            baidu(".pass-item-suggsetion_hover", t.suggestionDom).removeClass("pass-item-suggsetion_hover"), baidu(this).addClass("pass-item-suggsetion_hover")
                        }), baidu(".pass-item-suggsetion", t.suggestionDom).on("mouseout", function () {
                            baidu(this).removeClass("pass-item-suggsetion_hover")
                        })
                    };
                !function () {
                    if (n = t.loginrecord.displayname || [], n.length > 0) {
                        for (var s = document.createDocumentFragment(), o = 0, a = n.length; a > o; o++) s.appendChild(i(n[o], {
                            maxlength: e,
                            ifdelete: !0
                        }));
                        r(s, t.getElement("userName")), t.selectBtn = baidu('<span class="pass-item-selectbtn pass-item-selectbtn-userName" ></span>').get(0), t.getElement("userNameWrapper").appendChild(t.selectBtn), baidu(t.selectBtn).on("click", function () {
                            setTimeout(function () {
                                t.changeSuggestView("none" != t.suggestionDom.style.display ? {
                                    list: "hide",
                                    btn: "close"
                                } : {list: "show", btn: "open"})
                            }, 200)
                        }), t.changeSuggestView({list: "hide", btn: "show"})
                    }
                }()
            }
            s.on("keyup", function (s) {
                if (1 == t.disUnameLogin) ; else {
                    var d, l = document.createDocumentFragment(), c = this, g = 0;
                    if (n.length > 0) for (var u = 0, p = n.length; p > u; u++) 0 == n[u].indexOf(this.value) && (l.appendChild(i(n[u], {
                        maxlength: e,
                        ifdelete: !0
                    })), ++g);
                    if ((n.length < 1 || 1 > g) && (d = a.exec(this.value), d && d[2])) for (var u = 0, p = o.length; p > u; u++) if (0 === ("@" + o[u]).indexOf(d[2])) {
                        var m = d[1];
                        l.appendChild(i(m + "@" + o[u], {maxlength: e})), ++g
                    }
                    if (t.suggestionDom && 38 !== s.keyCode && 40 !== s.keyCode && t.$hide(t.suggestionDom), n.length > 1 && g > 0 && (38 !== s.keyCode && 40 !== s.keyCode && r(l, c), (38 == s.keyCode || 40 == s.keyCode) && "none" != t.suggestionDom.style.display)) {
                        for (var f = t.suggestionDom.childNodes, h = f.length, v = -1, b = 0; h > b; b++) f[b].className.indexOf("pass-item-suggsetion_hover") > -1 && (v = b);
                        if (38 == s.keyCode) var _ = -1 === v ? h - 1 : 0 === v ? h - 1 : v - 1;
                        if (40 == s.keyCode) var _ = -1 === v ? 0 : v === h - 1 ? 0 : v + 1;
                        baidu(".pass-item-suggsetion_hover", t.suggestionDom).removeClass("pass-item-suggsetion_hover"), baidu(f[_], t.suggestionDom).addClass("pass-item-suggsetion_hover");
                        var y = baidu(f[_]).attr("data-select");
                        c.value = "history" == baidu(f[_]).attr("data-type") ? y : c.value.substr(0, c.value.indexOf("@")) + y.substr(y.indexOf("@")), t.getElement("userName_placeholder") && t.$hide("userName_placeholder")
                    }
                }
            }), s.on("keydown", function (e) {
                13 != e.keyCode && 9 != e.keyCode || !t.suggestionDom || "none" == t.suggestionDom.style.display || (t.changeSuggestView({
                    list: "hide",
                    btn: "close"
                }), t._doFocus("password"), e.preventDefault(), e.stopPropagation())
            }), s.on("blur", function () {
                setTimeout(function () {
                    t.suggestionDom && !t.suggestionDom.data_delete && t.changeSuggestView({list: "hide", btn: "close"})
                }, 150)
            }), s.on("focus", function () {
                t.changeSuggestView({list: "show", btn: "open"})
            })
        }, _initCountryCode: function (e) {
            var t = this,
                n = '<li class="pass-item-country"><span class="pass-country-code" data-countryCode="">+86</span>中国</li>',
                s = t.countryCodeList || {}, o = s.length;
            if (!(0 >= o)) {
                for (var a = 0; o > a; a++) n += '<li class="pass-item-country"><span class="pass-country-code" data-countryCode=' + s[a].code + ">+" + s[a].code.substring(2) + "</span>" + s[a].name + "</li>";
                baidu(e).html(n)
            }
        }, _getCountryCode: function (e) {
            var t = this, n = {apiver: "v3", loginVersion: "v4", subpro: t.config.subpro};
            passport.data.jsonp("https://passport.baidu.com/v2/?securitygetcountrycode", n).success(function (n) {
                n.data.country.length > 0 && (t.countryCodeList = n.data.country, t.getElement("foreignCountryList") && t._initCountryCode(t.getElement("foreignCountryList")), t.getElement("smsCountryList") && t._initCountryCode(t.getElement("smsCountryList")), e && e())
            })
        }, _selectCountryList: function (e) {
            var t = this, n = baidu(e), s = n.find(".pass-country-list").eq(0), o = n.find(".pass-label");
            0 != o.length && (s.on("click", function (n) {
                var a = n.target;
                "li" === a.tagName.toLowerCase() ? (o.eq(0).html(baidu(a).find("span.pass-country-code").eq(0).html()), o.eq(0).attr("data-countryCode", baidu(a).find("span.pass-country-code").eq(0).attr("data-countryCode"))) : "span" === a.tagName.toLowerCase() && (o.eq(0).html(baidu(a).html()), o.eq(0).attr("data-countryCode", baidu(a).attr("data-countryCode"))), t.$hide(s[0]), o.eq(0).removeClass("pass-label-code-up"), e === t.getElement("foreignMobileWrapper") && t.getElement("foreignMobile") && t.getElement("foreignMobile").value ? t._validatorforeignmobileFn(t.getElement("foreignMobile")) : e === t.getElement("smsPhoneWrapper") && t.getElement("smsPhone") && t.getElement("smsPhone").value && t._validatorPhoneFn(t.getElement("smsPhone")), n.preventDefault()
            }), s.on("mouseover", function (e) {
                var t = e.target;
                "li" === t.tagName.toLowerCase() ? (n.find(".pass-item-country-hover").removeClass("pass-item-country-hover"), baidu(t).addClass("pass-item-country-hover")) : "span" === t.tagName.toLowerCase() && (n.find(".pass-item-country-hover").removeClass("pass-item-country-hover"), baidu(t).parent("li.pass-item-country").addClass("pass-item-country-hover"))
            }), s.on("mouseout", function (e) {
                var t = e.target;
                "li" === t.tagName.toLowerCase() ? baidu(t).removeClass("pass-item-country-hover") : "span" === t.tagName.toLowerCase() && baidu(t).parent("li.pass-item-country").removeClass("pass-item-country-hover")
            }), baidu("html").on("click", function (e) {
                var n = e.target;
                return o ? void(baidu(n).attr("id") != baidu(t.getElement("foreignMobileLabel")).attr("id") && baidu(n).attr("id") != baidu(t.getElement("smsPhoneCountryLabel")).attr("id") && setTimeout(function () {
                    t.$hide(s[0]), o.eq(0).removeClass("pass-label-code-up")
                }, 200)) : !1
            }))
        }, _setForeignMobileEvent: function () {
            var e = this;
            e.getElement("foreignMobileLabel") && baidu(e.getElement("foreignMobileLabel")).on("click", function (t) {
                var n = e.getElement("foreignCountryList");
                n && "block" !== n.style.display ? (e.$show(n), baidu(e.getElement("foreignMobileLabel")).addClass("pass-label-code-up")) : n && (e.$hide(n), baidu(e.getElement("foreignMobileLabel")).removeClass("pass-label-code-up")), e._selectCountryList(e.getElement("foreignMobileWrapper")), t.preventDefault()
            }), e.getElement("foreignMobile") && (baidu(e.getElement("foreignMobile")).on("blur", function () {
                if (this.value) {
                    var t = e.fireEvent("fieldBlur", {ele: baidu(this)});
                    if (!t) return;
                    e._validatorforeignmobileFn(this)
                }
                baidu(this).removeClass(e.constant.FOCUS_CLASS)
            }), baidu(e.getElement("foreignMobile")).on("focus", function () {
                e.initialized || e._initApi();
                var t = e.fireEvent("fieldFocus", {ele: baidu(this)});
                t && (baidu(this).addClass(e.constant.FOCUS_CLASS), baidu(this).removeClass(e.constant.ERROR_CLASS))
            })), e.getElement("foreignMobileLink") && baidu(e.getElement("foreignMobileLink")).on("click", function (t) {
                e.$hide(e.getElement("userNameWrapper")), e.$hide(e.getElement("smsSwitchWrapper")), e.$hide(e.getElement("foreignMobileLink")), baidu(e.getElement("userName")).removeClass(e.constant.ERROR_CLASS), e.setGeneralError(""), e.getElement("password").value = "", e.$show(e.getElement("foreignMobileWrapper")), e.$show(e.getElement("foreignMobileMsg")), e.$show(e.getElement("foreignMobileBackWrapper")), e.internation = !0, t.preventDefault();
                var n = {page: "loginv4", tpl: e.config.product || ""}, s = {eventType: "foreignMobileLinkClick"};
                e._logPass(n, s)
            }), e.getElement("foreignMobileBackWrapper") && baidu(e.getElement("foreignMobileBackWrapper")).on("click", function (t) {
                e.$hide(e.getElement("foreignMobileWrapper")), e.$hide(e.getElement("foreignMobileMsg")), e.$hide(e.getElement("foreignMobileBackWrapper")), baidu(e.getElement("foreignMobile")).removeClass(e.constant.ERROR_CLASS), e.setGeneralError(""), e.getElement("password").value = "", e.$show(e.getElement("userNameWrapper")), e.$show(e.getElement("smsSwitchWrapper")), e.$show(e.getElement("foreignMobileLink")), e.internation = !1, t.preventDefault()
            })
        }, _validatorforeignmobileFn: function (e) {
            var t = this;
            if ("" == e.value) return t.setGeneralError("请填写手机号"), baidu(e).addClass(t.constant.ERROR_CLASS), !1;
            if (t.getElement("foreignMobileLabel") && "" != baidu(t.getElement("foreignMobileLabel")).attr("data-countrycode")) {
                if (!new RegExp(/^(\d)*$/).test(t._SBCtoDBC(e.value))) return t.setGeneralError("手机号码格式不正确"), baidu(e).addClass(t.constant.ERROR_CLASS), !1
            } else if (!new RegExp(/^1[3456789]\d{9}$/).test(t._SBCtoDBC(e.value))) return t.setGeneralError("手机号码格式不正确"), baidu(e).addClass(t.constant.ERROR_CLASS), !1;
            return t.setGeneralError(""), baidu(e).removeClass(t.constant.ERROR_CLASS), !0
        }, _rendPhoenixbtn: function () {
            var e = this, t = baidu(e.getPhoenixElement("pass_phoenix_list_login"));
            t.on("click", function (t) {
                var n = baidu(t.target), s = n.attr("data-type");
                s && e._changeLoginType(s)
            })
        }, setMakeText: function (e) {
            var t = this, n = t.getElement("MakeTextWrapper"),
                e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\x22/g, "&quot;").replace(/\x27/g, "&#39;");
            n && (e ? (n.style.display = "", n.innerHTML = e) : (n.style.display = "none", n.innerHTML = ""))
        }, render: function (e) {
            var t = this;
            t.getElement() || t.$mappingDom("", e || document.body);
            var n = baidu(t.getElement());
            n.addClass(t.constant.CONTAINER_CLASS);
            var s = t._getTemplate();
            if (n.get(0).appendChild(baidu(s).get(0)), t.config.makeText && t.setMakeText(t.config.makeText), t.config.setWebToClient) {
                var o = t._getIrregularField("webtoclint");
                t._insertAfterW(baidu(o).get(0), t.getElement())
            }
            var a = t.getTemplateFooterBar();
            if (t._insertAfterW(baidu(a).get(0), n.get(0)), t.setEventFooterBar(), t.config.authsiteLogin && t.config.authsiteLogin.length > 0) {
                var i = t._getTemplateOther();
                t.getElement("PhoenixItem").innerHTML = i, t._rendPhoenixbtn(), t._authSiteW()
            }
            if (3 === t.config.qrcode) {
                var r = t._getTemplateQrcode();
                "[object function]" == Object.prototype.toString.call(t.config.qrcodeDom).toLowerCase() && t.config.diaPassLogin && 3 == t.config.qrcode ? (t.qrcodeDialogDom = t.config.qrcodeDom(), t.qrcodeDialogDom.appendChild(baidu(r).get(0)), setTimeout(function () {
                    t._actionQrcode()
                }, 500), t.getElement("qrcode").style.display = "") : (t._insertAfterW(baidu(r).get(0), n.get(0)), t._setEventQrcode()), t.setqrcodeEvent()
            }
            if (t.smsConfig) {
                var r = t._getTemplateSms();
                t._insertAfterW(baidu(r).get(0), n.get(0)), t._setEventSms()
            }
            if (setTimeout(function () {
                    t.getElement("loginMerge").value = "true"
                }, 200), t.config.hasPlaceholder) {
                var d = [{label: "userName", placeholder: "userName"}, {
                    label: "password",
                    placeholder: "password"
                }, {label: "verifyCode", placeholder: "verifyCode"}];
                t.smsConfig && (d.push({
                    label: "smsPhone",
                    placeholder: t.config && t.config.diaPassLogin ? "smsPhoneMsg" : "smsPhone"
                }), d.push({
                    label: "smsVerifyCode",
                    placeholder: "smsVerifyPlaceholder"
                })), t.foreignMobile && d.push({
                    label: "foreignMobile",
                    placeholder: t.config && t.config.diaPassLogin ? "smsPhoneMsg" : "smsPhone"
                }), t._getPlaceholder(d)
            }
            t.foreignMobile && (t._getCountryCode(), t._setForeignMobileEvent());
            var l = {page: "loginv4", tpl: t.config.product || ""}, c = {eventType: "loginShow"};
            t._logPass(l, c);
            var g = t.fireEvent("render");
            if (g) {
                var u = !0;
                if ("Microsoft Internet Explorer" !== navigator.appName || "MSIE6.0" !== navigator.appVersion.split(";")[1].replace(/[ ]/g, "") && "MSIE7.0" !== navigator.appVersion.split(";")[1].replace(/[ ]/g, "") || (u = !1), passport.mkd && u && "pp" === l.tpl) {
                    var p = passport.mkd;
                    new p({ak: "1e3f2dd1c81f2075171a547893391274"})
                }
                t._setValidator(), t._setEvent(), t._checkCapsLock()
            }
        }, _initApi: function (e) {
            var t = this;
            t.initialized = !0, t.initTime = (new Date).getTime(), passport.data.getApiInfo({
                apiType: "login",
                gid: t.guideRandom || "",
                loginVersion: "v4",
                loginType: t.config && t.config.diaPassLogin ? "dialogLogin" : "basicLogin"
            }).success(function (n) {
                var s = t.fireEvent("getApiInfo", {rsp: n});
                if (s && (1 == n.data.disable && t.setGeneralError(t.lang.sysUpdate), 0 == n.errInfo.no)) {
                    var o = n.data.token;
                    t.bdPsWtoken = n.data.token, t.loginrecord = {}, t.config.autosuggest ? passport.data.getLoginHistory({
                        token: t.bdPsWtoken,
                        tt: (new Date).getTime(),
                        loginVersion: "v4",
                        gid: t.guideRandom
                    }).success(function (e) {
                        t.loginrecord = e.data, t._suggestion(t.config.diaPassLogin ? 20 : 12), t.config.memberPass && t.loginrecord.displayname.length > 0 && (t._doFocus("password"), t.getElement("userName_placeholder") && t.$hide("userName_placeholder"), t.getElement("userName").value && "" != t.getElement("userName").value || (t.getElement("userName").value = t.loginrecord.displayname[0], t._loginCheck(t.loginrecord.displayname[0])), t.$show("userName_clearbtn").$hide("userName_placeholder"))
                    }) : t.config.memberPass && !t.constant.SUBMITFLAG && (t.getElement("userName").value = n.data.rememberedUserName);
                    var a = (navigator.userAgent, !navigator.userAgent.match(/OS [1-8]_\d[_\d]* like Mac OS X/i)),
                        i = !!navigator.userAgent.toString().match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                        r = navigator.userAgent.toString().indexOf("iPad");
                    if (a && i && null != r) {
                        var d = document.getElementsByClassName("popBox");
                        null != d && d.length > 0 && (d[0].style.height = window.screen.height > document.body.clientHeight ? window.screen.height * (window.screen.height / document.body.clientHeight) + 120 + "px" : window.screen.height * (window.screen.height / document.body.clientHeight))
                    }
                    t.disUnameLogin = 0, t.ifShowWarning = n.data.ifShowWarning, n.data.spLogin && t.config.diaPassLogin && (t.spLogin = n.data.spLogin), passport.data.setContext({token: o}), navigator.cookieEnabled || t.setGeneralError(t.lang.cookieDisable), t.constant.SUBMITFLAG ? t.getElement("submit").click() : e && e.success(n)
                }
            })
        }, submitForm: function () {
            var e = this;
            e.constant.SUBMITFLAG = !0
        }, setSubpro: function (e) {
            var t = this;
            t.getElement("subpro") && e && (t.getElement("subpro").value = e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\x22/g, "&quot;").replace(/\x27/g, "&#39;"))
        }, _setValidator: function () {
            var e = this;
            e.validatorInited || (e._validator.addRule("unameMailLength", function (e) {
                var t = String(e.value);
                return /^[0-9a-zA-Z\.\_-]+@([0-9a-zA-Z-]+\.)+[a-z]{2,4}$/.test(t) ? t.length <= 60 : !0
            }), e._validator.addMsg("unameMailLength", e.lang.unameMailLengthError), e._validator.addRule("unameInputLogin", function (t) {
                var n = String(t.value);
                return 0 == e.disUnameLogin && e.config.diaPassLogin && !/^[0-9a-zA-Z\.\_-]+@([0-9a-zA-Z-]+\.)+[a-z]{2,4}$/.test(n) ? !1 : !0
            }), e._validator.addMsg("unameInputLogin", e.lang.unameInputError), e._validator.addRule("checkVcodeLength", function (t) {
                t.value;
                return e.constant.CHECKVERIFYCODE ? !0 : (e.$hide("verifyCodeSuccess"), !1)
            }), e._validator.addMsg("checkVcodeLength", e.lang.verifyCodeLenErr), e._validator.addRule("checkVcodeStatus", function (t, n) {
                return "all" != n || e.constant.CHECKVERIFYCODE ? !0 : !1
            }), e._validator.addMsg("checkVcodeStatus", e.lang.verifyCodeStaErr)), e.validatorInited = !0, e.validateRules = {
                userName: {
                    rules: ["required"],
                    desc: e.lang.userName
                },
                password: {rules: ["required"], desc: e.lang.password},
                verifyCode: {rules: ["required", "checkVcodeLength", "checkVcodeStatus"], desc: e.lang.captcha}
            }, e._validator.init(e, e.validateRules)
        }, _validateError: function (e, t) {
            var n = this, s = baidu(n.getElement(e.field));
            if (s.addClass(n.constant.ERROR_CLASS), n.setGeneralError(e.msg), 0 == n.disUnameLogin && "userName" == e.field && e.msg == n.lang.unameInputError) {
                var o = new Image;
                o.onload = o.onerror = function () {
                    o.onload = o.onerror = null, o = null
                }, o.src = n._domain.https + "/img/v.gif?type=login&loginType=userName"
            }
            t && t.callback && callback()
        }, _enableUnameLoginCallback: function (e, t) {
            var n = this, s = baidu('<input type="hidden" name="userNameLogin" value="1">'),
                o = n.getElement("pass-pop-login-placeholder-normal"), a = n.getElement().parentNode,
                i = (baidu(".tab li", a), baidu(".tab a", a).get(0)), r = baidu(e);
            if (e || t || (t = 1 == n.isLoginWeak ? "normal" : "other", r = n.eleLoginWeak), 0 == n.disUnameLogin) {
                n.disUnameLogin = 1, n._validator.confStorage[n.$getId()].userName.desc = "用户名", s.get(0).value = "1", o && (o.innerHTML = "用户名"), i && (i.innerHTML = "用户名登录"), n.normalLogin && (n.normalLogin.innerHTML = "用户名登录", baidu(n.normalLogin).addClass("pass-normal-btn-s2"), "none" !== n.normalLogin.style.display && n._changeLoginType("normal")), n.getElement("userNameLabel").innerHTML = "用户名";
                {
                    n.getElement("error")
                }
                baidu(n.getElement("userName")).removeClass("pass-text-input-error"), baidu(".tang-pass-pop-login-placeholder").hide(), n.getElement("userName").value || n.$show("pass-pop-login-placeholder-normal"), n.changeSuggestView({
                    list: "hide",
                    btn: "hide"
                }), "normal" == t ? (r.removeClass("pass-unamelogin-btn"), r.addClass("pass-emaillogin-btn"), r.get(0).innerHTML = "邮箱登录") : "other" == t && (r.get(0).innerHTML = '忘记用户名?使用<a href="###" id="pass-user-login" tabIndex="-1" data-click="other">邮箱登录</a>');
                var d = new Image;
                d.onload = d.onerror = function () {
                    d.onload = d.onerror = null, d = null
                }, d.src = n._domain.https + "/img/v.gif?type=login&loginType=normalName"
            } else {
                n.disUnameLogin = 0, n._validator.confStorage[n.$getId()].userName.desc = "邮箱", s.get(0).value = "0", o && (o.innerHTML = "邮箱"), i && (i.innerHTML = "邮箱登录"), n.normalLogin && (n.normalLogin.innerHTML = "邮箱登录", baidu(n.normalLogin).removeClass("pass-normal-btn-s2"), "none" != n.normalLogin.style.display && n._changeLoginType("normal")), n.getElement("userNameLabel").innerHTML = "邮箱";
                {
                    n.getElement("error")
                }
                baidu(n.getElement("userName")).removeClass("pass-text-input-error"), baidu(".tang-pass-pop-login-placeholder").hide(), n.getElement("userName").value || baidu(n.getElement("pass-pop-login-placeholder-normal")).show(), n.changeSuggestView({list: "hide"}), n.selectBtn && n.loginrecord && n.loginrecord.email && n.loginrecord.email.length > 1 ? n.changeSuggestView({btn: "show"}) : n.selectBtn && n.changeSuggestView({btn: "hide"}), "normal" == t ? (r.addClass("pass-unamelogin-btn"), r.removeClass("pass-emaillogin-btn"), r.get(0).innerHTML = "用户名登录") : "other" == t && (r.get(0).innerHTML = '忘记邮箱?使用<a href="###" id="pass-user-login" tabIndex="-1" data-click="other">用户名登录</a>')
            }
        }, _validateSuccess: function (e, t) {
            var n = this, s = baidu(n.getElement(e.field));
            n.clearGeneralError(), s.removeClass(n.constant.ERROR_CLASS), t && t.callback && callback()
        }, _defaultLoginErr: function (e) {
            var t = this;
            if (t.vcodetype = e.data.vcodetype, e.data.codeString ? (t.getVerifyCode(e.data.codeString), t._clearInput("verifyCode"), t.vcodefrom = "login") : t.clearVerifyCode(), 400401 == e.errInfo.no) {
                if (t.getElement("choiceuser_article")) t.$show("choiceuser_article"); else {
                    var n = t._getIrregularField("choiceuser");
                    t._insertAfterW(baidu(n).get(0), t.getElement()), t._setEventChoiceUser()
                }
                baidu(t.getElement()).hide()
            }
            if (257 == e.errInfo.no && (baidu(t.getElement()).removeClass("tang-pass-login-hide"), t.$show(t.getElement()).$hide("choiceuser_article")), (6 == e.errInfo.no || 257 == e.errInfo.no) && t._clearInput("verifyCode"), 4 == e.errInfo.no && (t._clearInput("password"), e.data.resetpwd)) {
                var s = "";
                switch (e.data.resetpwd) {
                    case"1":
                        s = "1" + t.lang.passwordResetIn;
                        break;
                    case"2":
                        s = "2" + t.lang.passwordResetIn;
                        break;
                    case"3":
                        s = "3" + t.lang.passwordResetIn;
                        break;
                    case"4":
                        s = "3" + t.lang.passwordResetOut
                }
                s.length > 0 && (e.errInfo.msg = t._format(t.lang.passwordResetWarn, {resetpwd: s}))
            }
            if (7 == e.errInfo.no) {
                var s = "";
                s.length > 0 && (e.errInfo.msg = t._format(t.lang.passwordResetWarnNo, {resetpwd: s}))
            }
            if (e.errInfo.msg && e.errInfo.msg.indexOf("#{") >= 0) if (110024 == e.errInfo.no) {
                var o = t._domain.https + "/v2/?regnotify&action=resend&tpl=" + t.config.product + "&email=" + encodeURIComponent(e.data.mail) + "&u=" + encodeURIComponent(e.data.u);
                e.errInfo.msg = t._format(e.errInfo.msg, {gotourl: o})
            } else {
                var a = t.getElement("userName").value;
                e.errInfo.msg = t._format(e.errInfo.msg, {urldata: "&account=" + a + "&tpl=" + t.config.product + "&u=" + t.config.u})
            }
            e.errInfo.field ? t.setValidateError(e.errInfo.field, e.errInfo.msg, e) : t.setGeneralError(e.errInfo.msg, e)
        }, _asyncValidate: {
            checkVerifycode: function (e) {
                var t = this, n = t.getElement("verifyCode"), s = t.getElement("codeString");
                passport.data.checkVerifycode({
                    verifycode: t._SBCtoDBC(n.value),
                    loginVersion: "v4",
                    codestring: s.value
                }).success(function (n) {
                    var s = t.fireEvent("checkVerifycode", {rsp: n});
                    s && (0 === +n.errInfo.no ? (e && e.success(n), t.$hide("verifyCode_clearbtn"), t.constant.CHECKVERIFYCODE = !0) : 500002 == n.errInfo.no || 500018 == n.errInfo.no ? (n.msg = n.errInfo.msg, e && e.error(n), t.$hide("verifyCodeSuccess"), t.constant.CHECKVERIFYCODE = !1) : (e && e.success(n), t.$hide("verifyCodeSuccess"), t.constant.CHECKVERIFYCODE = !0))
                })
            }
        }, _format: function (e, t) {
            e = String(e);
            var n = Array.prototype.slice.call(arguments, 1), s = Object.prototype.toString;
            return n.length ? (n = 1 === n.length && null !== t && /\[object Array\]|\[object Object\]/.test(s.call(t)) ? t : n, e.replace(/#\{(.+?)\}/g, function (e, t) {
                var o = n[t];
                return "[object Function]" === s.call(o) && (o = o(t)), "undefined" == typeof o ? "" : o
            })) : e
        }, loginConnect: function (e, t, n) {
            ({username: e.username, smsVcode: e.smsVcode || "", sms: e.sms || ""});
            n()
        }, checkPhone: function (e, t) {
            var n = this;
            checkPhoneWidget ? (checkPhoneWidget.setMakePhone && checkPhoneWidget.setMakePhone(t, e), n._ownerDialog && n._ownerDialog.hide("unHide"), checkPhoneWidget.show()) : checkPhoneExist || passport._load(n._domain.auto + "/passApi/js/uni_wrapper.js", !0, function () {
                checkPhoneWidget = passport.pop.init({
                    type: "checkPhone",
                    apiOpt: {
                        u: n.config.u,
                        product: n.config.product ? n.config.product : "",
                        phone: t,
                        apiMargicInstance: n,
                        token: n.bdPsWtoken,
                        username: e,
                        isuserid: 1,
                        noSynBdu: n.config.noSynBdu || "",
                        staticPage: n.config.staticPage
                    },
                    tangram: !0,
                    onHide: function () {
                        n._ownerDialog && n._ownerDialog.show()
                    }
                }), n._ownerDialog && n._ownerDialog.hide("unHide"), checkPhoneWidget.show()
            })
        }, _loginCheck: function (e) {
            var t = this,
                n = document.getElementById("dv_Input") ? document.getElementById("dv_Input").value : window.LG_DV_ARG && window.LG_DV_ARG.dvjsInput || "";
            n = n.length > 1500 ? "" : n, e.length && t.validate("userName", {
                success: function () {
                    passport.data.loginCheck({
                        sub_source: "leadsetpwd",
                        userName: e,
                        loginVersion: "v4",
                        dv: n
                    }).success(function (e) {
                        0 === +e.errInfo.no && e.data.userid ? (t.checkPhone(e.data.userid, e.data.mobile), checkPhoneExist = !0, t._ownerDialog && t._ownerDialog.hide("unHide")) : "0" === e.errInfo.no && e.data.isconnect ? t.setGeneralError(t.lang.nopassLead) : e.data.codeString.length ? (t.vcodetype = e.data.vcodetype, t.getVerifyCode(e.data.codeString), t.vcodefrom = "checkuname") : t.clearVerifyCode()
                    })
                }
            })
        }, _SBCtoDBC: function (e) {
            var t = "";
            if (e) {
                for (var n = e.length, s = 0; n > s; s++) {
                    var o = e.charCodeAt(s);
                    o = o >= 65281 && 65374 >= o ? o - 65248 : o, o = 12288 == o ? 32 : o, t += String.fromCharCode(o)
                }
                return t
            }
        }, submit: function () {
            var e = this;
            (!e.internation || e._validatorforeignmobileFn(e.getElement("foreignMobile"))) && e.validateAll({
                success: function () {
                    function t() {
                        o.timeSpan = (new Date).getTime() - e.initTime, passport.data.traceID && passport.data.traceID.startFlow && passport.data.traceID.startFlow("login"), e.internation ? (o.username = e._SBCtoDBC(e.getElement("foreignMobile").value), o.isPhone = !0, o.countrycode = baidu(e.getElement("foreignMobileLabel")).attr("data-countrycode") || "") : o.countrycode = "", o.FP_UID = e._getCookie("FP_UID") || "", o.FP_INFO = window.PP_FP_INFO || "", o.loginVersion = "v4", o.dv = document.getElementById("dv_Input") ? document.getElementById("dv_Input").value : window.LG_DV_ARG && window.LG_DV_ARG.dvjsInput || "", e.vcodefrom && (o.vcodefrom = e.vcodefrom), passport.data.login(o).success(function (t) {
                            if (e.submitStatus = 2, t.loginType = "password", 0 === +t.errInfo.no) {
                                var n = e.fireEvent("loginSuccess", {rsp: t});
                                if (!n) return;
                                window.location ? window.location.href = t.data.u : document.location.href = t.data.u
                            } else {
                                d.value = e.lang.login, e.getElement("submit").style.color = "#fff";
                                var n = e.fireEvent("loginError", {rsp: t});
                                if (!n) return;
                                e._defaultLoginErr(t)
                            }
                        })
                    }

                    e._doFocus("submit"), e.submitStatus = 1;
                    var n = e.fireEvent("beforeSubmit");
                    if (e.getElement("submit").style.color = "#9ebef4", n) {
                        if (e.spLogin) {
                            var s = baidu('<input type="hidden" name="splogin" value="' + e.spLogin + '">');
                            e.getElement("hiddenFields").appendChild(s.get(0)), e.spLogin = null
                        }
                        var o = baidu.form.json(e.getElement("form"));
                        o.token = e.bdPsWtoken, passport.data.setContext(baidu.extend({}, e.config)), o.foreignusername && (o.foreignusername = e._SBCtoDBC(o.foreignusername)), o.userName = e._SBCtoDBC(o.userName), o.verifyCode = e._SBCtoDBC(o.verifyCode);
                        var a = e._SBCtoDBC(e.getElement("password").value);
                        if (e.RSA && e.rsakey) {
                            var i = a;
                            i.length < 128 && !e.config.safeFlag && (o.password = baidu.url.escapeSymbol(e.RSA.encrypt(i)), o.rsakey = e.rsakey, o.crypttype = 12)
                        }
                        var r, d = e.getElement("submit"), l = 15e3;
                        e.getElement("submit").style.color = "#9ebef4", d.value = e.lang.logining, r = setTimeout(function () {
                            1 != e.submitStatus || e.config.connect || e.setGeneralError(e.lang.submitTimeup), d.value = e.lang.login
                        }, l), e.loginConnect({username: o.userName, password: o.password}, {
                            success: function () {
                                clearTimeout(r), d.value = e.lang.login
                            }, fail: function (t) {
                                clearTimeout(r), d.value = e.lang.login, e.setGeneralError(t)
                            }
                        }, t)
                    }
                }
            }, !0)
        }, _eventHandler: function () {
            var e, t = {
                focus: function () {
                    var t = e.fireEvent("fieldFocus", {ele: this});
                    t && (this.addClass(e.constant.FOCUS_CLASS), this.removeClass(e.constant.ERROR_CLASS))
                }, blur: function (t) {
                    e.getElement(t).value = e.getElement(t).value.replace(/\s/g, "");
                    var n = e.fireEvent("fieldBlur", {ele: this});
                    n && this.removeClass(e.constant.FOCUS_CLASS)
                }, mouseover: function () {
                    var t = e.fireEvent("fieldMouseover", {ele: this});
                    t && this.addClass(e.constant.HOVER_CLASS)
                }, mouseout: function () {
                    var t = e.fireEvent("fieldMouseout", {ele: this});
                    t && this.removeClass(e.constant.HOVER_CLASS)
                }, keyup: function () {
                    var t = e.fireEvent("fieldKeyup", {ele: this})
                }
            }, n = {
                focus: {
                    userName: function () {
                        e.getElement("loginMerge") && (e.getElement("loginMerge").value = "true", e.getElement("isPhone").value = "")
                    }, password: function () {
                        e._getRSA(function (t) {
                            e.RSA = t.RSA, e.rsakey = t.rsakey
                        })
                    }, verifyCode: function () {
                        e.$hide("verifyCodeSuccess")
                    }
                }, blur: {
                    userName: function () {
                    }, password: function (t) {
                        var n = this.get(0).value;
                        n.length && e.validate(t)
                    }, verifyCode: function (t) {
                        var n = this.get(0).value;
                        n.length && e.validate(t);
                        var s = e.getElement("verifyCode"), o = baidu(s);
                        s.value ? e._asyncValidate.checkVerifycode.call(e, {
                            error: function (t) {
                                o.addClass(e.constant.ERROR_CLASS), e.setGeneralError(t.msg)
                            }, success: function () {
                                o.removeClass(e.constant.ERROR_CLASS), e.clearGeneralError()
                            }
                        }) : e.$hide("verifyCodeSuccess")
                    }
                }, change: {
                    userName: function () {
                        var t = this.get(0).value;
                        e._loginCheck(t)
                    }, verifyCode: function () {
                    }
                }, click: {
                    verifyCodeChange: function (t, n) {
                        e.getElement("verifyCode").value = "", e._doFocus("verifyCode"), e.getVerifyCode(), n.preventDefault()
                    }
                }, keyup: {}, submit: function (t) {
                    e.submit(), t.preventDefault()
                }
            };
            return {
                entrance: function (s) {
                    e = this;
                    var o = (baidu(s.target), s.target.name);
                    if (!o && s.target.id) {
                        var a = s.target.id.match(/\d+__(.*)$/);
                        a && (o = a[1])
                    }
                    o && (t.hasOwnProperty(s.type) && t[s.type].apply(baidu(s.target), [o, s]), n.hasOwnProperty(s.type) && ("function" == typeof n[s.type] && n[s.type].apply(baidu(s.target), [s]), n[s.type].hasOwnProperty(o) && n[s.type][o].apply(baidu(s.target), [o, s])), e.initialized || "focus" != s.type || e._initApi())
                }
            }
        }(), $dispose: function () {
            var e = this;
            e.disposed || (baidu.dom(e.getElement()).removeClass(e.constant.CONTAINER_CLASS), e.getElement().removeChild(e.getElement("form")), magic.Base.prototype.$dispose.call(e))
        }
    });
    ;
    return magic;
});