/*! jQuery Easing v1.3
 * http://gsgd.co.uk/sandbox/jquery/easing/
 */
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(n, e, t, u, a) {
        return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
    },
    easeInQuad: function(n, e, t, u, a) {
        return u * (e /= a) * e + t
    },
    easeOutQuad: function(n, e, t, u, a) {
        return -u * (e /= a) * (e - 2) + t
    },
    easeInOutQuad: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
    },
    easeInCubic: function(n, e, t, u, a) {
        return u * (e /= a) * e * e + t
    },
    easeOutCubic: function(n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e + 1) + t
    },
    easeInOutCubic: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
    },
    easeInQuart: function(n, e, t, u, a) {
        return u * (e /= a) * e * e * e + t
    },
    easeOutQuart: function(n, e, t, u, a) {
        return -u * ((e = e / a - 1) * e * e * e - 1) + t
    },
    easeInOutQuart: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
    },
    easeInQuint: function(n, e, t, u, a) {
        return u * (e /= a) * e * e * e * e + t
    },
    easeOutQuint: function(n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e * e * e + 1) + t
    },
    easeInOutQuint: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
    },
    easeInSine: function(n, e, t, u, a) {
        return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
    },
    easeOutSine: function(n, e, t, u, a) {
        return u * Math.sin(e / a * (Math.PI / 2)) + t
    },
    easeInOutSine: function(n, e, t, u, a) {
        return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
    },
    easeInExpo: function(n, e, t, u, a) {
        return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
    },
    easeOutExpo: function(n, e, t, u, a) {
        return e == a ? t + u : u * (-Math.pow(2, -10 * e / a) + 1) + t
    },
    easeInOutExpo: function(n, e, t, u, a) {
        return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t
    },
    easeInCirc: function(n, e, t, u, a) {
        return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
    },
    easeOutCirc: function(n, e, t, u, a) {
        return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
    },
    easeInOutCirc: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
    },
    easeInElastic: function(n, e, t, u, a) {
        var r = 1.70158
          , i = 0
          , s = u;
        if (0 == e)
            return t;
        if (1 == (e /= a))
            return t + u;
        if (i || (i = .3 * a),
        s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else
            var r = i / (2 * Math.PI) * Math.asin(u / s);
        return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t
    },
    easeOutElastic: function(n, e, t, u, a) {
        var r = 1.70158
          , i = 0
          , s = u;
        if (0 == e)
            return t;
        if (1 == (e /= a))
            return t + u;
        if (i || (i = .3 * a),
        s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else
            var r = i / (2 * Math.PI) * Math.asin(u / s);
        return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + u + t
    },
    easeInOutElastic: function(n, e, t, u, a) {
        var r = 1.70158
          , i = 0
          , s = u;
        if (0 == e)
            return t;
        if (2 == (e /= a / 2))
            return t + u;
        if (i || (i = a * (.3 * 1.5)),
        s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else
            var r = i / (2 * Math.PI) * Math.asin(u / s);
        return 1 > e ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + u + t
    },
    easeInBack: function(n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158),
        u * (e /= a) * e * ((r + 1) * e - r) + t
    },
    easeOutBack: function(n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158),
        u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
    },
    easeInOutBack: function(n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158),
        (e /= a / 2) < 1 ? u / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + t : u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
    },
    easeInBounce: function(n, e, t, u, a) {
        return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
    },
    easeOutBounce: function(n, e, t, u, a) {
        return (e /= a) < 1 / 2.75 ? u * (7.5625 * e * e) + t : 2 / 2.75 > e ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
    },
    easeInOutBounce: function(n, e, t, u, a) {
        return a / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
    }
});

/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(e, t) {
    function n(e, t) {
        var n = e.createElement("p")
          , r = e.getElementsByTagName("head")[0] || e.documentElement;
        return n.innerHTML = "x<style>" + t + "</style>",
        r.insertBefore(n.lastChild, r.firstChild)
    }
    function r() {
        var e = E.elements;
        return "string" == typeof e ? e.split(" ") : e
    }
    function a(e, t) {
        var n = E.elements;
        "string" != typeof n && (n = n.join(" ")),
        "string" != typeof e && (e = e.join(" ")),
        E.elements = n + " " + e,
        m(t)
    }
    function o(e) {
        var t = y[e[g]];
        return t || (t = {},
        v++,
        e[g] = v,
        y[v] = t),
        t
    }
    function c(e, n, r) {
        if (n || (n = t),
        s)
            return n.createElement(e);
        r || (r = o(n));
        var a;
        return a = r.cache[e] ? r.cache[e].cloneNode() : p.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e),
        !a.canHaveChildren || h.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
    }
    function i(e, n) {
        if (e || (e = t),
        s)
            return e.createDocumentFragment();
        n = n || o(e);
        for (var a = n.frag.cloneNode(), c = 0, i = r(), l = i.length; l > c; c++)
            a.createElement(i[c]);
        return a
    }
    function l(e, t) {
        t.cache || (t.cache = {},
        t.createElem = e.createElement,
        t.createFrag = e.createDocumentFragment,
        t.frag = t.createFrag()),
        e.createElement = function(n) {
            return E.shivMethods ? c(n, e, t) : t.createElem(n)
        }
        ,
        e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
            return t.createElem(e),
            t.frag.createElement(e),
            'c("' + e + '")'
        }) + ");return n}")(E, t.frag)
    }
    function m(e) {
        e || (e = t);
        var r = o(e);
        return !E.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
        s || l(e, r),
        e
    }
    var u, s, d = "3.7.3", f = e.html5 || {}, h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g = "_html5shiv", v = 0, y = {};
    !function() {
        try {
            var e = t.createElement("a");
            e.innerHTML = "<xyz></xyz>",
            u = "hidden"in e,
            s = 1 == e.childNodes.length || function() {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
            }()
        } catch (n) {
            u = !0,
            s = !0
        }
    }();
    var E = {
        elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: d,
        shivCSS: f.shivCSS !== !1,
        supportsUnknownElements: s,
        shivMethods: f.shivMethods !== !1,
        type: "default",
        shivDocument: m,
        createElement: c,
        createDocumentFragment: i,
        addElements: a
    };
    e.html5 = E,
    m(t),
    "object" == typeof module && module.exports && (module.exports = E)
}("undefined" != typeof window ? window : this, document);

/*! Respond.js v1.3.0
 * (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs
 */
(function(a) {
    "use strict";
    function x() {
        u(!0)
    }
    var b = {};
    if (a.respond = b,
    b.update = function() {}
    ,
    b.mediaQueriesSupported = a.matchMedia && a.matchMedia("only all").matches,
    !b.mediaQueriesSupported) {
        var q, r, t, c = a.document, d = c.documentElement, e = [], f = [], g = [], h = {}, i = 30, j = c.getElementsByTagName("head")[0] || d, k = c.getElementsByTagName("base")[0], l = j.getElementsByTagName("link"), m = [], n = function() {
            for (var b = 0; l.length > b; b++) {
                var c = l[b]
                  , d = c.href
                  , e = c.media
                  , f = c.rel && "stylesheet" === c.rel.toLowerCase();
                d && f && !h[d] && (c.styleSheet && c.styleSheet.rawCssText ? (p(c.styleSheet.rawCssText, d, e),
                h[d] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(d) && !k || d.replace(RegExp.$1, "").split("https://wpriverthemes.com/")[0] === a.location.host) && m.push({
                    href: d,
                    media: e
                }))
            }
            o()
        }, o = function() {
            if (m.length) {
                var b = m.shift();
                v(b.href, function(c) {
                    p(c, b.href, b.media),
                    h[b.href] = !0,
                    a.setTimeout(function() {
                        o()
                    }, 0)
                })
            }
        }, p = function(a, b, c) {
            var d = a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi)
              , g = d && d.length || 0;
            b = b.substring(0, b.lastIndexOf("https://wpriverthemes.com/"));
            var h = function(a) {
                return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + b + "$2$3")
            }
              , i = !g && c;
            b.length && (b += "/"),
            i && (g = 1);
            for (var j = 0; g > j; j++) {
                var k, l, m, n;
                i ? (k = c,
                f.push(h(a))) : (k = d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/) && RegExp.$1,
                f.push(RegExp.$2 && h(RegExp.$2))),
                m = k.split(","),
                n = m.length;
                for (var o = 0; n > o; o++)
                    l = m[o],
                    e.push({
                        media: l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/) && RegExp.$2 || "all",
                        rules: f.length - 1,
                        hasquery: l.indexOf("(") > -1,
                        minw: l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                        maxw: l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                    })
            }
            u()
        }, s = function() {
            var a, b = c.createElement("div"), e = c.body, f = !1;
            return b.style.cssText = "position:absolute;font-size:1em;width:1em",
            e || (e = f = c.createElement("body"),
            e.style.background = "none"),
            e.appendChild(b),
            d.insertBefore(e, d.firstChild),
            a = b.offsetWidth,
            f ? d.removeChild(e) : e.removeChild(b),
            a = t = parseFloat(a)
        }, u = function(b) {
            var h = "clientWidth"
              , k = d[h]
              , m = "CSS1Compat" === c.compatMode && k || c.body[h] || k
              , n = {}
              , o = l[l.length - 1]
              , p = (new Date).getTime();
            if (b && q && i > p - q)
                return a.clearTimeout(r),
                r = a.setTimeout(u, i),
                void 0;
            q = p;
            for (var v in e)
                if (e.hasOwnProperty(v)) {
                    var w = e[v]
                      , x = w.minw
                      , y = w.maxw
                      , z = null === x
                      , A = null === y
                      , B = "em";
                    x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? t || s() : 1)),
                    y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? t || s() : 1)),
                    w.hasquery && (z && A || !(z || m >= x) || !(A || y >= m)) || (n[w.media] || (n[w.media] = []),
                    n[w.media].push(f[w.rules]))
                }
            for (var C in g)
                g.hasOwnProperty(C) && g[C] && g[C].parentNode === j && j.removeChild(g[C]);
            for (var D in n)
                if (n.hasOwnProperty(D)) {
                    var E = c.createElement("style")
                      , F = n[D].join("\n");
                    E.type = "text/css",
                    E.media = D,
                    j.insertBefore(E, o.nextSibling),
                    E.styleSheet ? E.styleSheet.cssText = F : E.appendChild(c.createTextNode(F)),
                    g.push(E)
                }
        }, v = function(a, b) {
            var c = w();
            c && (c.open("GET", a, !0),
            c.onreadystatechange = function() {
                4 !== c.readyState || 200 !== c.status && 304 !== c.status || b(c.responseText)
            }
            ,
            4 !== c.readyState && c.send(null))
        }, w = function() {
            var b = !1;
            try {
                b = new a.XMLHttpRequest
            } catch (c) {
                b = new a.ActiveXObject("Microsoft.XMLHTTP")
            }
            return function() {
                return b
            }
        }();
        n(),
        b.update = n,
        a.addEventListener ? a.addEventListener("resize", x, !1) : a.attachEvent && a.attachEvent("onresize", x)
    }
}
)(this);

/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function(jQuery) {
    var jQuerywindow = jQuery(window);
    var windowHeight = jQuerywindow.height();

    jQuerywindow.resize(function() {
        windowHeight = jQuerywindow.height();
    });

    jQuery.fn.parallax = function(xpos, speedFactor, outerHeight) {
        var jQuerythis = jQuery(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;

        //get the starting position of each element to have parallax applied to it		
        jQuerythis.each(function() {
            firstTop = jQuerythis.offset().top;
        });

        if (outerHeight) {
            getHeight = function(jqo) {
                return jqo.outerHeight(true);
            }
            ;
        } else {
            getHeight = function(jqo) {
                return jqo.height();
            }
            ;
        }

        // setup defaults if arguments aren't specified
        if (arguments.length < 1 || xpos === null)
            xpos = "50%";
        if (arguments.length < 2 || speedFactor === null)
            speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null)
            outerHeight = true;

        // function to be called whenever the window is scrolled or resized
        function update() {
            var pos = jQuerywindow.scrollTop();

            jQuerythis.each(function() {
                var jQueryelement = jQuery(this);
                var top = jQueryelement.offset().top;
                var height = getHeight(jQueryelement);

                // Check if totally above or totally below viewport
                if (top + height < pos || top > pos + windowHeight) {
                    return;
                }

                jQuerythis.css('backgroundPosition', xpos + " " + Math.round((top - pos) * speedFactor) + "px");

            });
        }

        jQuerywindow.bind('scroll', update).resize(update);
        update();
    }
    ;
}
)(jQuery);
/*! FitVids 1.1
 * Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */
(function(e) {
    "use strict";
    e.fn.fitVids = function(t) {
        var n = {
            customSelector: null
        };
        var r = document.createElement("div")
          , i = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
        r.className = "fit-vids-style";
        r.innerHTML = "Â­<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";
        i.parentNode.insertBefore(r, i);
        if (t) {
            e.extend(n, t)
        }
        return this.each(function() {
            var t = ["iframe[src*='player.vimeo.com']", "iframe[src*='www.youtube.com']", "iframe[src*='www.youtube-nocookie.com']", "iframe[src*='www.kickstarter.com']", "object", "embed"];
            if (n.customSelector) {
                t.push(n.customSelector)
            }
            var r = e(this).find(t.join(","));
            r.each(function() {
                var t = e(this);
                if (this.tagName.toLowerCase() === "embed" && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length) {
                    return
                }
                var n = this.tagName.toLowerCase() === "object" || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height()
                  , r = !isNaN(parseInt(t.attr("width"), 10)) ? parseInt(t.attr("width"), 10) : t.width()
                  , i = n / r;
                if (!t.attr("id")) {
                    var s = "fitvid" + Math.floor(Math.random() * 999999);
                    t.attr("id", s)
                }
                t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", i * 100 + "%");
                t.removeAttr("height").removeAttr("width")
            })
        })
    }
}
)(jQuery);

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
window.matchMedia || (window.matchMedia = function() {
    "use strict";
    var a = window.styleMedia || window.media;
    if (!a) {
        var b = document.createElement("style")
          , c = document.getElementsByTagName("script")[0]
          , d = null;
        b.type = "text/css",
        b.id = "matchmediajs-test",
        c.parentNode.insertBefore(b, c),
        d = "getComputedStyle"in window && window.getComputedStyle(b, null) || b.currentStyle,
        a = {
            matchMedium: function(a) {
                var c = "@media " + a + "{ #matchmediajs-test { width: 1px; } }";
                return b.styleSheet ? b.styleSheet.cssText = c : b.textContent = c,
                "1px" === d.width
            }
        }
    }
    return function(b) {
        return {
            matches: a.matchMedium(b || "all"),
            media: b || "all"
        }
    }
}());

/* jQuery Appear */
!function(e) {
    e.fn.appear = function(a, r) {
        var n = e.extend({
            data: void 0,
            one: !0,
            accX: 0,
            accY: 0
        }, r);
        return this.each(function() {
            var r = e(this);
            if (r.appeared = !1,
            !a)
                return void r.trigger("appear", n.data);
            var p = e(window)
              , t = function() {
                if (!r.is(":visible"))
                    return void (r.appeared = !1);
                var e = p.scrollLeft()
                  , a = p.scrollTop()
                  , t = r.offset()
                  , c = t.left
                  , i = t.top
                  , o = n.accX
                  , f = n.accY
                  , s = r.height()
                  , u = p.height()
                  , d = r.width()
                  , l = p.width();
                i + s + f >= a && a + u + f >= i && c + d + o >= e && e + l + o >= c ? r.appeared || r.trigger("appear", n.data) : r.appeared = !1
            }
              , c = function() {
                if (r.appeared = !0,
                n.one) {
                    p.unbind("scroll", t);
                    var c = e.inArray(t, e.fn.appear.checks);
                    c >= 0 && e.fn.appear.checks.splice(c, 1)
                }
                a.apply(this, arguments)
            };
            n.one ? r.one("appear", n.data, c) : r.bind("appear", n.data, c),
            p.scroll(t),
            e.fn.appear.checks.push(t),
            t()
        })
    }
    ,
    e.extend(e.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var a = e.fn.appear.checks.length;
            if (a > 0)
                for (; a--; )
                    e.fn.appear.checks[a]()
        },
        run: function() {
            e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout),
            e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
        }
    }),
    e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(a, r) {
        var n = e.fn[r];
        n && (e.fn[r] = function() {
            var a = n.apply(this, arguments);
            return e.fn.appear.run(),
            a
        }
        )
    })
}(jQuery);

/* Easy-pie-chart */
!function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    var b = function(a, b) {
        var c, d = document.createElement("canvas");
        a.appendChild(d),
        "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
        var e = d.getContext("2d");
        d.width = d.height = b.size;
        var f = 1;
        window.devicePixelRatio > 1 && (f = window.devicePixelRatio,
        d.style.width = d.style.height = [b.size, "px"].join(""),
        d.width = d.height = b.size * f,
        e.scale(f, f)),
        e.translate(b.size / 2, b.size / 2),
        e.rotate((-0.5 + b.rotate / 180) * Math.PI);
        var g = (b.size - b.lineWidth) / 2;
        b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2),
        Date.now = Date.now || function() {
            return +new Date
        }
        ;
        var h = function(a, b, c) {
            c = Math.min(Math.max(-1, c || 0), 1);
            var d = 0 >= c ? !0 : !1;
            e.beginPath(),
            e.arc(0, 0, g, 0, 2 * Math.PI * c, d),
            e.strokeStyle = a,
            e.lineWidth = b,
            e.stroke()
        }
          , i = function() {
            var a, c;
            e.lineWidth = 1,
            e.fillStyle = b.scaleColor,
            e.save();
            for (var d = 24; d > 0; --d)
                d % 6 === 0 ? (c = b.scaleLength,
                a = 0) : (c = .6 * b.scaleLength,
                a = b.scaleLength - c),
                e.fillRect(-b.size / 2 + a, 0, c, 1),
                e.rotate(Math.PI / 12);
            e.restore()
        }
          , j = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
                window.setTimeout(a, 1e3 / 60)
            }
        }()
          , k = function() {
            b.scaleColor && i(),
            b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1)
        };
        this.getCanvas = function() {
            return d
        }
        ,
        this.getCtx = function() {
            return e
        }
        ,
        this.clear = function() {
            e.clearRect(b.size / -2, b.size / -2, b.size, b.size)
        }
        ,
        this.draw = function(a) {
            b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(),
            c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(),
            k()) : this.clear(),
            e.lineCap = b.lineCap;
            var d;
            d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor,
            h(d, b.lineWidth, a / 100)
        }
        .bind(this),
        this.animate = function(a, c) {
            var d = Date.now();
            b.onStart(a, c);
            var e = function() {
                var f = Math.min(Date.now() - d, b.animate.duration)
                  , g = b.easing(this, f, a, c - a, b.animate.duration);
                this.draw(g),
                b.onStep(a, c, g),
                f >= b.animate.duration ? b.onStop(a, c) : j(e)
            }
            .bind(this);
            j(e)
        }
        .bind(this)
    }
      , c = function(a, c) {
        var d = {
            barColor: "#ef1e25",
            trackColor: "#f9f9f9",
            scaleColor: "#dfe0e0",
            scaleLength: 5,
            lineCap: "round",
            lineWidth: 3,
            trackWidth: void 0,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1e3,
                enabled: !0
            },
            easing: function(a, b, c, d, e) {
                return b /= e / 2,
                1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
            },
            onStart: function(a, b) {},
            onStep: function(a, b, c) {},
            onStop: function(a, b) {}
        };
        if ("undefined" != typeof b)
            d.renderer = b;
        else {
            if ("undefined" == typeof SVGRenderer)
                throw new Error("Please load either the SVG- or the CanvasRenderer");
            d.renderer = SVGRenderer
        }
        var e = {}
          , f = 0
          , g = function() {
            this.el = a,
            this.options = e;
            for (var b in d)
                d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b],
                "function" == typeof e[b] && (e[b] = e[b].bind(this)));
            "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? e.easing = jQuery.easing[e.easing] : e.easing = d.easing,
            "number" == typeof e.animate && (e.animate = {
                duration: e.animate,
                enabled: !0
            }),
            "boolean" != typeof e.animate || e.animate || (e.animate = {
                duration: 1e3,
                enabled: e.animate
            }),
            this.renderer = new e.renderer(a,e),
            this.renderer.draw(f),
            a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")))
        }
        .bind(this);
        this.update = function(a) {
            return a = parseFloat(a),
            e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a),
            f = a,
            this
        }
        .bind(this),
        this.disableAnimation = function() {
            return e.animate.enabled = !1,
            this
        }
        ,
        this.enableAnimation = function() {
            return e.animate.enabled = !0,
            this
        }
        ,
        g()
    };
    a.fn.easyPieChart = function(b) {
        return this.each(function() {
            var d;
            a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()),
            a.data(this, "easyPieChart", new c(this,d)))
        })
    }
});

/*
jQuery Waypoints - v2.0.4
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/

/*!
 * imagesLoaded PACKAGED v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {}
              , n = i[e] = i[e] || [];
            return -1 == n.indexOf(t) && n.push(t),
            this
        }
    }
    ,
    t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {}
              , n = i[e] = i[e] || {};
            return n[t] = !0,
            this
        }
    }
    ,
    t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return -1 != n && i.splice(n, 1),
            this
        }
    }
    ,
    t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = 0
              , o = i[n];
            t = t || [];
            for (var r = this._onceEvents && this._onceEvents[e]; o; ) {
                var s = r && r[o];
                s && (this.off(e, o),
                delete r[o]),
                o.apply(this, t),
                n += s ? 0 : 1,
                o = i[n]
            }
            return this
        }
    }
    ,
    t.allOff = t.removeAllListeners = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t)
            e[i] = t[i];
        return e
    }
    function n(e) {
        var t = [];
        if (Array.isArray(e))
            t = e;
        else if ("number" == typeof e.length)
            for (var i = 0; i < e.length; i++)
                t.push(e[i]);
        else
            t.push(e);
        return t
    }
    function o(e, t, r) {
        return this instanceof o ? ("string" == typeof e && (e = document.querySelectorAll(e)),
        this.elements = n(e),
        this.options = i({}, this.options),
        "function" == typeof t ? r = t : i(this.options, t),
        r && this.on("always", r),
        this.getImages(),
        h && (this.jqDeferred = new h.Deferred),
        void setTimeout(function() {
            this.check()
        }
        .bind(this))) : new o(e,t,r)
    }
    function r(e) {
        this.img = e
    }
    function s(e, t) {
        this.url = e,
        this.element = t,
        this.img = new Image
    }
    var h = e.jQuery
      , a = e.console;
    o.prototype = Object.create(t.prototype),
    o.prototype.options = {},
    o.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e),
        this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && d[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    }
    ;
    var d = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n; ) {
                var o = n && n[2];
                o && this.addBackground(o, e),
                n = i.exec(t.backgroundImage)
            }
    }
    ,
    o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }
    ,
    o.prototype.addBackground = function(e, t) {
        var i = new s(e,t);
        this.images.push(i)
    }
    ,
    o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e),
            t.check()
        }) : void this.complete()
    }
    ,
    o.prototype.progress = function(e, t, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded,
        this.emitEvent("progress", [this, e, t]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && a && a.log("progress: " + i, e, t)
    }
    ,
    o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(e, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }
    ,
    r.prototype = Object.create(t.prototype),
    r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    r.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }
    ,
    r.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.img, t])
    }
    ,
    r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }
    ,
    r.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    r.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype = Object.create(r.prototype),
    s.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.element, t])
    }
    ,
    o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery,
        t && (h = t,
        h.fn.imagesLoaded = function(e, t) {
            var i = new o(this,e,t);
            return i.jqDeferred.promise(h(this))
        }
        )
    }
    ,
    o.makeJQueryPlugin(),
    o
});

!function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = function(t, e) {
        return void 0 === e && (e = "undefined" != typeof window ? require("jquery") : require("jquery")(t)),
        n(e),
        e
    }
    : n(jQuery)
}(function(i) {
    "use strict";
    var t, r = "drawsvg", n = {
        duration: 1e3,
        stagger: 200,
        easing: "swing",
        reverse: !1,
        callback: i.noop
    }, a = ((t = function(t, e) {
        var a = this
          , o = i.extend(n, e);
        a.$elm = i(t),
        a.$elm.is("svg") && (a.options = o,
        a.$paths = a.$elm.find("path"),
        a.totalDuration = o.duration + o.stagger * a.$paths.length,
        a.duration = o.duration / a.totalDuration,
        a.$paths.each(function(t, e) {
            var n = e.getTotalLength();
            e.pathLen = n,
            e.delay = o.stagger * t / a.totalDuration,
            e.style.strokeDasharray = [n, n].join(" "),
            e.style.strokeDashoffset = n
        }),
        a.$elm.attr("class", function(t, e) {
            return [e, r + "-initialized"].join(" ")
        }))
    }
    ).prototype.getVal = function(t, e) {
        return 1 - i.easing[e](t, t, 0, 1, 1)
    }
    ,
    t.prototype.progress = function(o) {
        var i = this
          , r = i.options
          , s = i.duration;
        i.$paths.each(function(t, e) {
            var n = e.style;
            if (1 === o)
                n.strokeDashoffset = 0;
            else if (0 === o)
                n.strokeDashoffset = e.pathLen + "px";
            else if (o >= e.delay && o <= s + e.delay) {
                var a = (o - e.delay) / s;
                n.strokeDashoffset = i.getVal(a, r.easing) * e.pathLen * (r.reverse ? -1 : 1) + "px"
            }
        })
    }
    ,
    t.prototype.animate = function() {
        var n = this;
        n.$elm.attr("class", function(t, e) {
            return [e, r + "-animating"].join(" ")
        }),
        i({
            len: 0
        }).animate({
            len: 1
        }, {
            easing: "linear",
            duration: n.totalDuration,
            step: function(t, e) {
                n.progress.call(n, t / e.end)
            },
            complete: function() {
                n.options.callback.call(this),
                n.$elm.attr("class", function(t, e) {
                    return e.replace(r + "-animating", "")
                })
            }
        })
    }
    ,
    t);
    i.fn[r] = function(e, n) {
        return this.each(function() {
            var t = i.data(this, r);
            t && "" + e === e && t[e] ? t[e](n) : i.data(this, r, new a(this,e))
        })
    }
});

/*!
* simpleParallax.min - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images, 
* @date: 01-02-2020 23:1:26, 
* @version: 5.3.0,
* @link: https://simpleparallax.com/
*/
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("simpleParallax", [], e) : "object" == typeof exports ? exports.simpleParallax = e() : t.simpleParallax = e()
}(window, (function() {
    return function(t) {
        var e = {};
        function n(i) {
            if (e[i])
                return e[i].exports;
            var s = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(s.exports, s, s.exports, n),
            s.l = !0,
            s.exports
        }
        return n.m = t,
        n.c = e,
        n.d = function(t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }
        ,
        n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(t, e) {
            if (1 & e && (t = n(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var i = Object.create(null);
            if (n.r(i),
            Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var s in t)
                    n.d(i, s, function(e) {
                        return t[e]
                    }
                    .bind(null, s));
            return i
        }
        ,
        n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return n.d(e, "a", e),
            e
        }
        ,
        n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        n.p = "",
        n(n.s = 0)
    }([function(t, e, n) {
        "use strict";
        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        n.r(e);
        var s = new (function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.positions = {
                    top: 0,
                    bottom: 0,
                    height: 0
                }
            }
            var e, n, s;
            return e = t,
            (n = [{
                key: "setViewportTop",
                value: function(t) {
                    return this.positions.top = t ? t.scrollTop : window.pageYOffset,
                    this.positions
                }
            }, {
                key: "setViewportBottom",
                value: function() {
                    return this.positions.bottom = this.positions.top + this.positions.height,
                    this.positions
                }
            }, {
                key: "setViewportAll",
                value: function(t) {
                    return this.positions.top = t ? t.scrollTop : window.pageYOffset,
                    this.positions.height = t ? t.clientHeight : document.documentElement.clientHeight,
                    this.positions.bottom = this.positions.top + this.positions.height,
                    this.positions
                }
            }]) && i(e.prototype, n),
            s && i(e, s),
            t
        }())
          , o = function(t) {
            return NodeList.prototype.isPrototypeOf(t) || HTMLCollection.prototype.isPrototypeOf(t) ? Array.from(t) : "string" == typeof t || t instanceof String ? document.querySelectorAll(t) : [t]
        }
          , r = function() {
            for (var t, e = "transform webkitTransform mozTransform oTransform msTransform".split(" "), n = 0; void 0 === t; )
                t = void 0 !== document.createElement("div").style[e[n]] ? e[n] : void 0,
                n += 1;
            return t
        }()
          , a = function(t) {
            return !!t && (!!t.complete && (void 0 === t.naturalWidth || 0 !== t.naturalWidth))
        };
        function l(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++)
                        n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                    return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        function u(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        var h = function() {
            function t(e, n) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.element = e,
                this.elementContainer = e,
                this.settings = n,
                this.isVisible = !0,
                this.isInit = !1,
                this.oldTranslateValue = -1,
                this.init = this.init.bind(this),
                a(e) ? this.init() : this.element.addEventListener("load", this.init)
            }
            var e, n, i;
            return e = t,
            (n = [{
                key: "init",
                value: function() {
                    var t = this;
                    this.isInit || this.element.closest(".simpleParallax") || (!1 === this.settings.overflow && this.wrapElement(this.element),
                    this.setTransformCSS(),
                    this.getElementOffset(),
                    this.intersectionObserver(),
                    this.getTranslateValue(),
                    this.animate(),
                    this.settings.delay > 0 && setTimeout((function() {
                        t.setTransitionCSS()
                    }
                    ), 10),
                    this.isInit = !0)
                }
            }, {
                key: "wrapElement",
                value: function() {
                    var t = this.element.closest("picture") || this.element
                      , e = document.createElement("div");
                    e.classList.add("simpleParallax"),
                    e.style.overflow = "hidden",
                    t.parentNode.insertBefore(e, t),
                    e.appendChild(t),
                    this.elementContainer = e
                }
            }, {
                key: "unWrapElement",
                value: function() {
                    var t = this.elementContainer;
                    t.replaceWith.apply(t, l(t.childNodes))
                }
            }, {
                key: "setTransformCSS",
                value: function() {
                    !1 === this.settings.overflow && (this.element.style[r] = "scale(".concat(this.settings.scale, ")")),
                    this.element.style.willChange = "transform"
                }
            }, {
                key: "setTransitionCSS",
                value: function() {
                    this.element.style.transition = "transform ".concat(this.settings.delay, "s ").concat(this.settings.transition)
                }
            }, {
                key: "unSetStyle",
                value: function() {
                    this.element.style.willChange = "",
                    this.element.style[r] = "",
                    this.element.style.transition = ""
                }
            }, {
                key: "getElementOffset",
                value: function() {
                    var t = this.elementContainer.getBoundingClientRect();
                    if (this.elementHeight = t.height,
                    this.elementTop = t.top + s.positions.top,
                    this.settings.customContainer) {
                        var e = this.settings.customContainer.getBoundingClientRect();
                        this.elementTop = t.top - e.top + s.positions.top
                    }
                    this.elementBottom = this.elementHeight + this.elementTop
                }
            }, {
                key: "buildThresholdList",
                value: function() {
                    for (var t = [], e = 1; e <= this.elementHeight; e++) {
                        var n = e / this.elementHeight;
                        t.push(n)
                    }
                    return t
                }
            }, {
                key: "intersectionObserver",
                value: function() {
                    var t = {
                        root: null,
                        threshold: this.buildThresholdList()
                    };
                    this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this),t),
                    this.observer.observe(this.element)
                }
            }, {
                key: "intersectionObserverCallback",
                value: function(t) {
                    for (var e = t.length - 1; e >= 0; e--)
                        t[e].isIntersecting ? this.isVisible = !0 : this.isVisible = !1
                }
            }, {
                key: "checkIfVisible",
                value: function() {
                    return this.elementBottom > s.positions.top && this.elementTop < s.positions.bottom
                }
            }, {
                key: "getRangeMax",
                value: function() {
                    var t = this.element.clientHeight;
                    this.rangeMax = t * this.settings.scale - t
                }
            }, {
                key: "getTranslateValue",
                value: function() {
                    var t = ((s.positions.bottom - this.elementTop) / ((s.positions.height + this.elementHeight) / 100)).toFixed(1);
                    return t = Math.min(100, Math.max(0, t)),
                    0 !== this.settings.maxTransition && t > this.settings.maxTransition && (t = this.settings.maxTransition),
                    this.oldPercentage !== t && (this.rangeMax || this.getRangeMax(),
                    this.translateValue = (t / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0),
                    this.oldTranslateValue !== this.translateValue && (this.oldPercentage = t,
                    this.oldTranslateValue = this.translateValue,
                    !0))
                }
            }, {
                key: "animate",
                value: function() {
                    var t, e = 0, n = 0;
                    (this.settings.orientation.includes("left") || this.settings.orientation.includes("right")) && (n = "".concat(this.settings.orientation.includes("left") ? -1 * this.translateValue : this.translateValue, "px")),
                    (this.settings.orientation.includes("up") || this.settings.orientation.includes("down")) && (e = "".concat(this.settings.orientation.includes("up") ? -1 * this.translateValue : this.translateValue, "px")),
                    t = !1 === this.settings.overflow ? "translate3d(".concat(n, ", ").concat(e, ", 0) scale(").concat(this.settings.scale, ")") : "translate3d(".concat(n, ", ").concat(e, ", 0)"),
                    this.element.style[r] = t
                }
            }]) && u(e.prototype, n),
            i && u(e, i),
            t
        }();
        function c(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++)
                        n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                    return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        function f(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        n.d(e, "default", (function() {
            return b
        }
        ));
        var m, p, d, g = !0, v = !1, y = [], b = function() {
            function t(e, n) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                e && (this.elements = o(e),
                this.defaults = {
                    delay: .4,
                    orientation: "up",
                    scale: 1.3,
                    overflow: !1,
                    transition: "cubic-bezier(0,0,0,1)",
                    customContainer: !1,
                    maxTransition: 0
                },
                this.settings = Object.assign(this.defaults, n),
                "IntersectionObserver"in window || (g = !1),
                this.settings.customContainer && (console.log(o(this.settings.customContainer)[0]),
                this.customContainer = o(this.settings.customContainer)[0]),
                this.lastPosition = -1,
                this.resizeIsDone = this.resizeIsDone.bind(this),
                this.handleResize = this.handleResize.bind(this),
                this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this),
                this.init())
            }
            var e, n, i;
            return e = t,
            (n = [{
                key: "init",
                value: function() {
                    var t = this;
                    s.setViewportAll(this.customContainer),
                    y = [].concat(c(this.elements.map((function(e) {
                        return new h(e,t.settings)
                    }
                    ))), c(y)),
                    m = y.length,
                    v || (this.proceedRequestAnimationFrame(),
                    window.addEventListener("resize", this.resizeIsDone),
                    v = !0)
                }
            }, {
                key: "resizeIsDone",
                value: function() {
                    clearTimeout(d),
                    d = setTimeout(this.handleResize, 500)
                }
            }, {
                key: "handleResize",
                value: function() {
                    s.setViewportAll(this.customContainer);
                    for (var t = m - 1; t >= 0; t--)
                        y[t].getElementOffset(),
                        y[t].getRangeMax();
                    this.lastPosition = -1
                }
            }, {
                key: "proceedRequestAnimationFrame",
                value: function() {
                    if (s.setViewportTop(this.customContainer),
                    this.lastPosition !== s.positions.top) {
                        s.setViewportBottom();
                        for (var t = m - 1; t >= 0; t--)
                            this.proceedElement(y[t]);
                        p = window.requestAnimationFrame(this.proceedRequestAnimationFrame),
                        this.lastPosition = s.positions.top
                    } else
                        p = window.requestAnimationFrame(this.proceedRequestAnimationFrame)
                }
            }, {
                key: "proceedElement",
                value: function(t) {
                    (!g || this.customContainer ? t.checkIfVisible() : t.isVisible) && t.getTranslateValue() && t.animate()
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this
                      , e = [];
                    y = y.filter((function(n) {
                        return t.elements.includes(n.element) ? (e.push(n),
                        !1) : n
                    }
                    ));
                    for (var n = e.length - 1; n >= 0; n--)
                        e[n].unSetStyle(),
                        !1 === this.settings.overflow && e[n].unWrapElement();
                    (m = y.length) || (window.cancelAnimationFrame(p),
                    window.removeEventListener("resize", this.handleResize))
                }
            }]) && f(e.prototype, n),
            i && f(e, i),
            t
        }()
    }
    ]).default
}
));

!function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Splitting = t()
}(this, function() {
    "use strict"
    var u = document
      , l = u.createTextNode.bind(u)
    function d(n, t, e) {
        n.style.setProperty(t, e)
    }
    function f(n, t) {
        return n.appendChild(t)
    }
    function p(n, t, e, r) {
        var i = u.createElement("span")
        return t && (i.className = t),
        e && (!r && i.setAttribute("data-" + t, e),
        i.textContent = e),
        n && f(n, i) || i
    }
    function h(n, t) {
        return n.getAttribute("data-" + t)
    }
    function m(n, t) {
        return n && 0 != n.length ? n.nodeName ? [n] : [].slice.call(n[0].nodeName ? n : (t || u).querySelectorAll(n)) : []
    }
    function o(n) {
        for (var t = []; n--; )
            t[n] = []
        return t
    }
    function g(n, t) {
        n && n.some(t)
    }
    function c(t) {
        return function(n) {
            return t[n]
        }
    }
    var a = {}
    function n(n, t, e, r) {
        return {
            by: n,
            depends: t,
            key: e,
            split: r
        }
    }
    function e(n) {
        return function t(e, n, r) {
            var i = r.indexOf(e)
            if (-1 == i)
                r.unshift(e),
                g(a[e].depends, function(n) {
                    t(n, e, r)
                })
            else {
                var u = r.indexOf(n)
                r.splice(i, 1),
                r.splice(u, 0, e)
            }
            return r
        }(n, 0, []).map(c(a))
    }
    function t(n) {
        a[n.by] = n
    }
    function v(n, r, i, u, o) {
        n.normalize()
        var c = []
          , a = document.createDocumentFragment()
        u && c.push(n.previousSibling)
        var s = []
        return m(n.childNodes).some(function(n) {
            if (!n.tagName || n.hasChildNodes()) {
                if (n.childNodes && n.childNodes.length)
                    return s.push(n),
                    void c.push.apply(c, v(n, r, i, u, o))
                var t = n.wholeText || ""
                  , e = t.trim()
                e.length && (" " === t[0] && s.push(l(" ")),
                g(e.split(i), function(n, t) {
                    t && o && s.push(p(a, "whitespace", " ", o))
                    var e = p(a, r, n)
                    c.push(e),
                    s.push(e)
                }),
                " " === t[t.length - 1] && s.push(l(" ")))
            } else
                s.push(n)
        }),
        g(s, function(n) {
            f(a, n)
        }),
        n.innerHTML = "",
        f(n, a),
        c
    }
    var s = 0
    var i = "words"
      , r = n(i, s, "word", function(n) {
        return v(n, "word", /\s+/, 0, 1)
    })
      , y = "chars"
      , w = n(y, [i], "char", function(n, e, t) {
        var r = []
        return g(t[i], function(n, t) {
            r.push.apply(r, v(n, "char", "", e.whitespace && t))
        }),
        r
    })
    function b(t) {
        var f = (t = t || {}).key
        return m(t.target || "[data-splitting]").map(function(a) {
            var s = a["Ă°Å¸ÂÅ’"]
            if (!t.force && s)
                return s
            s = a["Ă°Å¸ÂÅ’"] = {
                el: a
            }
            var n = e(t.by || h(a, "splitting") || y)
              , l = function(n, t) {
                for (var e in t)
                    n[e] = t[e]
                return n
            }({}, t)
            return g(n, function(n) {
                if (n.split) {
                    var t = n.by
                      , e = (f ? "-" + f : "") + n.key
                      , r = n.split(a, l, s)
                    e && (i = a,
                    c = (o = "--" + e) + "-index",
                    g(u = r, function(n, t) {
                        Array.isArray(n) ? g(n, function(n) {
                            d(n, c, t)
                        }) : d(n, c, t)
                    }),
                    d(i, o + "-total", u.length)),
                    s[t] = r,
                    a.classList.add(t)
                }
                var i, u, o, c
            }),
            a.classList.add("splitting"),
            s
        })
    }
    function N(n, t, e) {
        var r = m(t.matching || n.children, n)
          , i = {}
        return g(r, function(n) {
            var t = Math.round(n[e]);
            (i[t] || (i[t] = [])).push(n)
        }),
        Object.keys(i).map(Number).sort(x).map(c(i))
    }
    function x(n, t) {
        return n - t
    }
    b.html = function(n) {
        var t = (n = n || {}).target = p()
        return t.innerHTML = n.content,
        b(n),
        t.outerHTML
    }
    ,
    b.add = t
    var T = n("lines", [i], "line", function(n, t, e) {
        return N(n, {
            matching: e[i]
        }, "offsetTop")
    })
      , L = n("items", s, "item", function(n, t) {
        return m(t.matching || n.children, n)
    })
      , k = n("rows", s, "row", function(n, t) {
        return N(n, t, "offsetTop")
    })
      , A = n("cols", s, "col", function(n, t) {
        return N(n, t, "offsetLeft")
    })
      , C = n("grid", ["rows", "cols"])
      , M = "layout"
      , S = n(M, s, s, function(n, t) {
        var e = t.rows = +(t.rows || h(n, "rows") || 1)
          , r = t.columns = +(t.columns || h(n, "columns") || 1)
        if (t.image = t.image || h(n, "image") || n.currentSrc || n.src,
        t.image) {
            var i = m("img", n)[0]
            t.image = i && (i.currentSrc || i.src)
        }
        t.image && d(n, "background-image", "url(" + t.image + ")")
        for (var u = e * r, o = [], c = p(s, "cell-grid"); u--; ) {
            var a = p(c, "cell")
            p(a, "cell-inner"),
            o.push(a)
        }
        return f(n, c),
        o
    })
      , H = n("cellRows", [M], "row", function(n, t, e) {
        var r = t.rows
          , i = o(r)
        return g(e[M], function(n, t, e) {
            i[Math.floor(t / (e.length / r))].push(n)
        }),
        i
    })
      , O = n("cellColumns", [M], "col", function(n, t, e) {
        var r = t.columns
          , i = o(r)
        return g(e[M], function(n, t) {
            i[t % r].push(n)
        }),
        i
    })
      , j = n("cells", ["cellRows", "cellColumns"], "cell", function(n, t, e) {
        return e[M]
    })
    return t(r),
    t(w),
    t(T),
    t(L),
    t(k),
    t(A),
    t(C),
    t(S),
    t(H),
    t(O),
    t(j),
    b
})

!function(t) {
    "use strict";
    function e(e) {
        return e.is('[type="checkbox"]') ? e.prop("checked") : e.is('[type="radio"]') ? !!t('[name="' + e.attr("name") + '"]:checked').length : e.val()
    }
    var r = function(a, i) {
        this.options = i,
        this.validators = t.extend({}, r.VALIDATORS, i.custom),
        this.$element = t(a),
        this.$btn = t('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')),
        this.update(),
        this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", t.proxy(this.onInput, this)),
        this.$element.on("submit.bs.validator", t.proxy(this.onSubmit, this)),
        this.$element.on("reset.bs.validator", t.proxy(this.reset, this)),
        this.$element.find("[data-match]").each(function() {
            var r = t(this)
              , a = r.data("match");
            t(a).on("input.bs.validator", function(t) {
                e(r) && r.trigger("input.bs.validator")
            })
        }),
        this.$inputs.filter(function() {
            return e(t(this))
        }).trigger("focusout"),
        this.$element.attr("novalidate", !0),
        this.toggleSubmit()
    };
    function a(e) {
        return this.each(function() {
            var a = t(this)
              , i = t.extend({}, r.DEFAULTS, a.data(), "object" == typeof e && e)
              , o = a.data("bs.validator");
            (o || "destroy" != e) && (o || a.data("bs.validator", o = new r(this,i)),
            "string" == typeof e && o[e]())
        })
    }
    r.VERSION = "0.11.5",
    r.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)',
    r.FOCUS_OFFSET = 20,
    r.DEFAULTS = {
        delay: 500,
        html: !1,
        disable: !0,
        focus: !0,
        custom: {},
        errors: {
            match: "Does not match",
            minlength: "Not long enough"
        },
        feedback: {
            success: "glyphicon-ok",
            error: "glyphicon-remove"
        }
    },
    r.VALIDATORS = {
        native: function(t) {
            var e = t[0];
            if (e.checkValidity)
                return !e.checkValidity() && !e.validity.valid && (e.validationMessage || "error!")
        },
        match: function(e) {
            var a = e.data("match");
            return e.val() !== t(a).val() && r.DEFAULTS.errors.match
        },
        minlength: function(t) {
            var e = t.data("minlength");
            return t.val().length < e && r.DEFAULTS.errors.minlength
        }
    },
    r.prototype.update = function() {
        return this.$inputs = this.$element.find(r.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]')),
        this
    }
    ,
    r.prototype.onInput = function(e) {
        var r = this
          , a = t(e.target)
          , i = "focusout" !== e.type;
        this.$inputs.is(a) && this.validateInput(a, i).done(function() {
            r.toggleSubmit()
        })
    }
    ,
    r.prototype.validateInput = function(r, a) {
        e(r);
        var i = r.data("bs.validator.errors");
        r.is('[type="radio"]') && (r = this.$element.find('input[name="' + r.attr("name") + '"]'));
        var o = t.Event("validate.bs.validator", {
            relatedTarget: r[0]
        });
        if (this.$element.trigger(o),
        !o.isDefaultPrevented()) {
            var s = this;
            return this.runValidators(r).done(function(e) {
                r.data("bs.validator.errors", e),
                e.length ? a ? s.defer(r, s.showErrors) : s.showErrors(r) : s.clearErrors(r),
                i && e.toString() === i.toString() || (o = e.length ? t.Event("invalid.bs.validator", {
                    relatedTarget: r[0],
                    detail: e
                }) : t.Event("valid.bs.validator", {
                    relatedTarget: r[0],
                    detail: i
                }),
                s.$element.trigger(o)),
                s.toggleSubmit(),
                s.$element.trigger(t.Event("validated.bs.validator", {
                    relatedTarget: r[0]
                }))
            })
        }
    }
    ,
    r.prototype.runValidators = function(r) {
        var a = []
          , i = t.Deferred();
        function o(t) {
            return function(t) {
                return r.data(t + "-error")
            }(t) || ((e = r[0].validity).typeMismatch ? r.data("type-error") : e.patternMismatch ? r.data("pattern-error") : e.stepMismatch ? r.data("step-error") : e.rangeOverflow ? r.data("max-error") : e.rangeUnderflow ? r.data("min-error") : e.valueMissing ? r.data("required-error") : null) || r.data("error");
            var e
        }
        return r.data("bs.validator.deferred") && r.data("bs.validator.deferred").reject(),
        r.data("bs.validator.deferred", i),
        t.each(this.validators, t.proxy(function(t, i) {
            var s = null;
            (e(r) || r.attr("required")) && (r.data(t) || "native" == t) && (s = i.call(this, r)) && (s = o(t) || s,
            !~a.indexOf(s) && a.push(s))
        }, this)),
        !a.length && e(r) && r.data("remote") ? this.defer(r, function() {
            var s = {};
            s[r.attr("name")] = e(r),
            t.get(r.data("remote"), s).fail(function(t, e, r) {
                a.push(o("remote") || r)
            }).always(function() {
                i.resolve(a)
            })
        }) : i.resolve(a),
        i.promise()
    }
    ,
    r.prototype.validate = function() {
        var e = this;
        return t.when(this.$inputs.map(function(r) {
            return e.validateInput(t(this), !1)
        })).then(function() {
            e.toggleSubmit(),
            e.focusError()
        }),
        this
    }
    ,
    r.prototype.focusError = function() {
        if (this.options.focus) {
            var e = this.$element.find(".has-error:first :input");
            0 !== e.length && (t("html, body").animate({
                scrollTop: e.offset().top - r.FOCUS_OFFSET
            }, 250),
            e.focus())
        }
    }
    ,
    r.prototype.showErrors = function(e) {
        var r = this.options.html ? "html" : "text"
          , a = e.data("bs.validator.errors")
          , i = e.closest(".form-group")
          , o = i.find(".help-block.with-errors")
          , s = i.find(".form-control-feedback");
        a.length && (a = t("<ul/>").addClass("list-unstyled").append(t.map(a, function(e) {
            return t("<li/>")[r](e)
        })),
        void 0 === o.data("bs.validator.originalContent") && o.data("bs.validator.originalContent", o.html()),
        o.empty().append(a),
        i.addClass("has-error has-danger"),
        i.hasClass("has-feedback") && s.removeClass(this.options.feedback.success) && s.addClass(this.options.feedback.error) && i.removeClass("has-success"))
    }
    ,
    r.prototype.clearErrors = function(t) {
        var r = t.closest(".form-group")
          , a = r.find(".help-block.with-errors")
          , i = r.find(".form-control-feedback");
        a.html(a.data("bs.validator.originalContent")),
        r.removeClass("has-error has-danger has-success"),
        r.hasClass("has-feedback") && i.removeClass(this.options.feedback.error) && i.removeClass(this.options.feedback.success) && e(t) && i.addClass(this.options.feedback.success) && r.addClass("has-success")
    }
    ,
    r.prototype.hasErrors = function() {
        return !!this.$inputs.filter(function() {
            return !!(t(this).data("bs.validator.errors") || []).length
        }).length
    }
    ,
    r.prototype.isIncomplete = function() {
        return !!this.$inputs.filter("[required]").filter(function() {
            var r = e(t(this));
            return !("string" == typeof r ? t.trim(r) : r)
        }).length
    }
    ,
    r.prototype.onSubmit = function(t) {
        this.validate(),
        (this.isIncomplete() || this.hasErrors()) && t.preventDefault()
    }
    ,
    r.prototype.toggleSubmit = function() {
        this.options.disable && this.$btn.toggleClass("disabled", this.isIncomplete() || this.hasErrors())
    }
    ,
    r.prototype.defer = function(e, r) {
        if (r = t.proxy(r, this, e),
        !this.options.delay)
            return r();
        window.clearTimeout(e.data("bs.validator.timeout")),
        e.data("bs.validator.timeout", window.setTimeout(r, this.options.delay))
    }
    ,
    r.prototype.reset = function() {
        return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success),
        this.$inputs.removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function() {
            var e = t(this)
              , r = e.data("bs.validator.timeout");
            window.clearTimeout(r) && e.removeData("bs.validator.timeout")
        }),
        this.$element.find(".help-block.with-errors").each(function() {
            var e = t(this)
              , r = e.data("bs.validator.originalContent");
            e.removeData("bs.validator.originalContent").html(r)
        }),
        this.$btn.removeClass("disabled"),
        this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"),
        this
    }
    ,
    r.prototype.destroy = function() {
        return this.reset(),
        this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"),
        this.$inputs.off(".bs.validator"),
        this.options = null,
        this.validators = null,
        this.$element = null,
        this.$btn = null,
        this
    }
    ;
    var i = t.fn.validator;
    t.fn.validator = a,
    t.fn.validator.Constructor = r,
    t.fn.validator.noConflict = function() {
        return t.fn.validator = i,
        this
    }
    ,
    t(window).on("load", function() {
        t('form[data-toggle="validator"]').each(function() {
            var e = t(this);
            a.call(e, e.data())
        })
    })
}(jQuery);

/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */
!function(a, b) {
    if ("function" == typeof define && define.amd)
        define(["module", "exports"], b);
    else if ("undefined" != typeof exports)
        b(module, exports);
    else {
        var c = {
            exports: {}
        };
        b(c, c.exports),
        a.WOW = c.exports
    }
}(this, function(a, b) {
    "use strict";
    function c(a, b) {
        if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function")
    }
    function d(a, b) {
        return b.indexOf(a) >= 0
    }
    function e(a, b) {
        for (var c in b)
            if (null == a[c]) {
                var d = b[c];
                a[c] = d
            }
        return a
    }
    function f(a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
    }
    function g(a) {
        var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1]
          , c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2]
          , d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3]
          , e = void 0;
        return null != document.createEvent ? (e = document.createEvent("CustomEvent"),
        e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
        e.eventType = a) : e.eventName = a,
        e
    }
    function h(a, b) {
        null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]()
    }
    function i(a, b, c) {
        null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
    }
    function j(a, b, c) {
        null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
    }
    function k() {
        return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
    }
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var l, m, n = function() {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1,
                d.configurable = !0,
                "value"in d && (d.writable = !0),
                Object.defineProperty(a, d.key, d)
            }
        }
        return function(b, c, d) {
            return c && a(b.prototype, c),
            d && a(b, d),
            b
        }
    }(), o = window.WeakMap || window.MozWeakMap || function() {
        function a() {
            c(this, a),
            this.keys = [],
            this.values = []
        }
        return n(a, [{
            key: "get",
            value: function(a) {
                for (var b = 0; b < this.keys.length; b++) {
                    var c = this.keys[b];
                    if (c === a)
                        return this.values[b]
                }
            }
        }, {
            key: "set",
            value: function(a, b) {
                for (var c = 0; c < this.keys.length; c++) {
                    var d = this.keys[c];
                    if (d === a)
                        return this.values[c] = b,
                        this
                }
                return this.keys.push(a),
                this.values.push(b),
                this
            }
        }]),
        a
    }(), p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function() {
        function a() {
            c(this, a),
            "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."),
            console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
        }
        return n(a, [{
            key: "observe",
            value: function() {}
        }]),
        a
    }(),
    l.notSupported = !0,
    m), q = window.getComputedStyle || function(a) {
        var b = /(\-([a-z]){1})/g;
        return {
            getPropertyValue: function(c) {
                "float" === c && (c = "styleFloat"),
                b.test(c) && c.replace(b, function(a, b) {
                    return b.toUpperCase()
                });
                var d = a.currentStyle;
                return (null != d ? d[c] : void 0) || null
            }
        }
    }
    , r = function() {
        function a() {
            var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            c(this, a),
            this.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null,
                resetAnimation: !0
            },
            this.animate = function() {
                return "requestAnimationFrame"in window ? function(a) {
                    return window.requestAnimationFrame(a)
                }
                : function(a) {
                    return a()
                }
            }(),
            this.vendors = ["moz", "webkit"],
            this.start = this.start.bind(this),
            this.resetAnimation = this.resetAnimation.bind(this),
            this.scrollHandler = this.scrollHandler.bind(this),
            this.scrollCallback = this.scrollCallback.bind(this),
            this.scrolled = !0,
            this.config = e(b, this.defaults),
            null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)),
            this.animationNameCache = new o,
            this.wowEvent = g(this.config.boxClass)
        }
        return n(a, [{
            key: "init",
            value: function() {
                this.element = window.document.documentElement,
                d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start),
                this.finished = []
            }
        }, {
            key: "start",
            value: function() {
                var a = this;
                if (this.stopped = !1,
                this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)),
                this.all = this.boxes.slice(0),
                this.boxes.length)
                    if (this.disabled())
                        this.resetStyle();
                    else
                        for (var b = 0; b < this.boxes.length; b++) {
                            var c = this.boxes[b];
                            this.applyStyle(c, !0)
                        }
                if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                i(window, "resize", this.scrollHandler),
                this.interval = setInterval(this.scrollCallback, 50)),
                this.config.live) {
                    var d = new p(function(b) {
                        for (var c = 0; c < b.length; c++)
                            for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                                var f = d.addedNodes[e];
                                a.doSync(f)
                            }
                    }
                    );
                    d.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                }
            }
        }, {
            key: "stop",
            value: function() {
                this.stopped = !0,
                j(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                j(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval)
            }
        }, {
            key: "sync",
            value: function() {
                p.notSupported && this.doSync(this.element)
            }
        }, {
            key: "doSync",
            value: function(a) {
                if ("undefined" != typeof a && null !== a || (a = this.element),
                1 === a.nodeType) {
                    a = a.parentNode || a;
                    for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
                        var e = b[c];
                        d(e, this.all) || (this.boxes.push(e),
                        this.all.push(e),
                        this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0),
                        this.scrolled = !0)
                    }
                }
            }
        }, {
            key: "show",
            value: function(a) {
                return this.applyStyle(a),
                a.className = a.className + " " + this.config.animateClass,
                null != this.config.callback && this.config.callback(a),
                h(a, this.wowEvent),
                this.config.resetAnimation && (i(a, "animationend", this.resetAnimation),
                i(a, "oanimationend", this.resetAnimation),
                i(a, "webkitAnimationEnd", this.resetAnimation),
                i(a, "MSAnimationEnd", this.resetAnimation)),
                a
            }
        }, {
            key: "applyStyle",
            value: function(a, b) {
                var c = this
                  , d = a.getAttribute("data-wow-duration")
                  , e = a.getAttribute("data-wow-delay")
                  , f = a.getAttribute("data-wow-iteration");
                return this.animate(function() {
                    return c.customStyle(a, b, d, e, f)
                })
            }
        }, {
            key: "resetStyle",
            value: function() {
                for (var a = 0; a < this.boxes.length; a++) {
                    var b = this.boxes[a];
                    b.style.visibility = "visible"
                }
            }
        }, {
            key: "resetAnimation",
            value: function(a) {
                if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                    var b = a.target || a.srcElement;
                    b.className = b.className.replace(this.config.animateClass, "").trim()
                }
            }
        }, {
            key: "customStyle",
            value: function(a, b, c, d, e) {
                return b && this.cacheAnimationName(a),
                a.style.visibility = b ? "hidden" : "visible",
                c && this.vendorSet(a.style, {
                    animationDuration: c
                }),
                d && this.vendorSet(a.style, {
                    animationDelay: d
                }),
                e && this.vendorSet(a.style, {
                    animationIterationCount: e
                }),
                this.vendorSet(a.style, {
                    animationName: b ? "none" : this.cachedAnimationName(a)
                }),
                a
            }
        }, {
            key: "vendorSet",
            value: function(a, b) {
                for (var c in b)
                    if (b.hasOwnProperty(c)) {
                        var d = b[c];
                        a["" + c] = d;
                        for (var e = 0; e < this.vendors.length; e++) {
                            var f = this.vendors[e];
                            a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d
                        }
                    }
            }
        }, {
            key: "vendorCSS",
            value: function(a, b) {
                for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
                    var f = this.vendors[e];
                    d = d || c.getPropertyCSSValue("-" + f + "-" + b)
                }
                return d
            }
        }, {
            key: "animationName",
            value: function(a) {
                var b = void 0;
                try {
                    b = this.vendorCSS(a, "animation-name").cssText
                } catch (c) {
                    b = q(a).getPropertyValue("animation-name")
                }
                return "none" === b ? "" : b
            }
        }, {
            key: "cacheAnimationName",
            value: function(a) {
                return this.animationNameCache.set(a, this.animationName(a))
            }
        }, {
            key: "cachedAnimationName",
            value: function(a) {
                return this.animationNameCache.get(a)
            }
        }, {
            key: "scrollHandler",
            value: function() {
                this.scrolled = !0
            }
        }, {
            key: "scrollCallback",
            value: function() {
                if (this.scrolled) {
                    this.scrolled = !1;
                    for (var a = [], b = 0; b < this.boxes.length; b++) {
                        var c = this.boxes[b];
                        if (c) {
                            if (this.isVisible(c)) {
                                this.show(c);
                                continue
                            }
                            a.push(c)
                        }
                    }
                    this.boxes = a,
                    this.boxes.length || this.config.live || this.stop()
                }
            }
        }, {
            key: "offsetTop",
            value: function(a) {
                for (; void 0 === a.offsetTop; )
                    a = a.parentNode;
                for (var b = a.offsetTop; a.offsetParent; )
                    a = a.offsetParent,
                    b += a.offsetTop;
                return b
            }
        }, {
            key: "isVisible",
            value: function(a) {
                var b = a.getAttribute("data-wow-offset") || this.config.offset
                  , c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset
                  , d = c + Math.min(this.element.clientHeight, k()) - b
                  , e = this.offsetTop(a)
                  , f = e + a.clientHeight;
                return d >= e && f >= c
            }
        }, {
            key: "disabled",
            value: function() {
                return !this.config.mobile && f(navigator.userAgent)
            }
        }]),
        a
    }();
    b["default"] = r,
    a.exports = b["default"]
});

!function(o) {
    o.fn.YouTubePopUp = function(e) {
        var u = o.extend({
            autoplay: 1
        }, e);
        o(this).on("click", function(e) {
            var a = o(this).attr("href");
            if (a.match(/(youtube.com)/))
                var p = "v="
                  , t = 1;
            if (a.match(/(youtu.be)/) || a.match(/(vimeo.com\/)+[0-9]/))
                p = "http://innovationplans.com/",
                t = 3;
            if (a.match(/(vimeo.com\/)+[a-zA-Z]/))
                p = "http://innovationplans.com/",
                t = 5;
            var i = a.split(p)[t].replace(/(&)+(.*)/, "");
            if (a.match(/(youtu.be)/) || a.match(/(youtube.com)/))
                var c = "https://www.youtube.com/embed/" + i + "?autoplay=" + u.autoplay;
            if (a.match(/(vimeo.com\/)+[0-9]/) || a.match(/(vimeo.com\/)+[a-zA-Z]/))
                c = "https://player.vimeo.com/video/" + i + "?autoplay=" + u.autoplay;
            o("body").append('<div class="YouTubePopUp-Wrap YouTubePopUp-animation"><div class="YouTubePopUp-Content"><span class="YouTubePopUp-Close"></span><iframe src="' + c + '" allowfullscreen></iframe></div></div>'),
            o(".YouTubePopUp-Wrap").hasClass("YouTubePopUp-animation") && setTimeout(function() {
                o(".YouTubePopUp-Wrap").removeClass("YouTubePopUp-animation")
            }, 600),
            o(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click(function() {
                o(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue(function() {
                    o(this).remove()
                })
            }),
            e.preventDefault()
        }),
        o(document).keyup(function(e) {
            27 == e.keyCode && o(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click()
        })
    }
}(jQuery);
