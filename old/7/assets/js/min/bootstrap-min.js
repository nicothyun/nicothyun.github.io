+ function($) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = $(this), o = i.data("bs.affix"), s = "object" == typeof t && t;
            o || i.data("bs.affix", o = new e(this, s)), "string" == typeof t && o[t]()
        })
    }
    var e = function(t, i) {
        this.options = $.extend({}, e.DEFAULTS, i), this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this)), this.$element = $(t), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    e.VERSION = "3.2.0", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
        offset: 0,
        target: window
    }, e.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$target.scrollTop(), i = this.$element.offset();
        return this.pinnedOffset = i.top - t
    }, e.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1)
    }, e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = $(document).height(), i = this.$target.scrollTop(), o = this.$element.offset(), s = this.options.offset, n = s.top, r = s.bottom;
            "object" != typeof s && (r = n = s), "function" == typeof n && (n = s.top(this.$element)), "function" == typeof r && (r = s.bottom(this.$element));
            var a = null != this.unpin && i + this.unpin <= o.top?!1 : null != r && o.top + this.$element.height() >= t - r ? "bottom" : null != n && n >= i ? "top" : !1;
            if (this.affixed !== a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), h = $.Event(l + ".bs.affix");
                this.$element.trigger(h), h.isDefaultPrevented() || (this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(l).trigger($.Event(l.replace("affix", "affixed"))), "bottom" == a && this.$element.offset({
                    top: t - this.$element.height() - r
                }))
            }
        }
    };
    var i = $.fn.affix;
    $.fn.affix = t, $.fn.affix.Constructor = e, $.fn.affix.noConflict = function() {
        return $.fn.affix = i, this
    }, $(window).on("load", function() {
        $('[data-spy="affix"]').each(function() {
            var e = $(this), i = e.data();
            i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), t.call(e, i)
        })
    })
}(jQuery), + function($) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var e = $(this), o = e.data("bs.alert");
            o || e.data("bs.alert", o = new i(this)), "string" == typeof t && o[t].call(e)
        })
    }
    var e = '[data-dismiss="alert"]', i = function(t) {
        $(t).on("click", e, this.close)
    };
    i.VERSION = "3.2.0", i.prototype.close = function(t) {
        function e() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var i = $(this), o = i.attr("data-target");
        o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = $(o);
        t && t.preventDefault(), s.length || (s = i.hasClass("alert") ? i : i.parent()), s.trigger(t = $.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), $.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e())
    };
    var o = $.fn.alert;
    $.fn.alert = t, $.fn.alert.Constructor = i, $.fn.alert.noConflict = function() {
        return $.fn.alert = o, this
    }, $(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery), + function($) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = $(this), o = i.data("bs.button"), s = "object" == typeof t && t;
            o || i.data("bs.button", o = new e(this, s)), "toggle" == t ? o.toggle() : t && o.setState(t)
        })
    }
    var e = function(t, i) {
        this.$element = $(t), this.options = $.extend({}, e.DEFAULTS, i), this.isLoading=!1
    };
    e.VERSION = "3.2.0", e.DEFAULTS = {
        loadingText: "loading..."
    }, e.prototype.setState = function(t) {
        var e = "disabled", i = this.$element, o = i.is("input") ? "val": "html", s = i.data();
        t += "Text", null == s.resetText && i.data("resetText", i[o]()), i[o](null == s[t] ? this.options[t] : s[t]), setTimeout($.proxy(function() {
            "loadingText" == t ? (this.isLoading=!0, i.addClass(e).attr(e, e)) : this.isLoading && (this.isLoading=!1, i.removeClass(e).removeAttr(e))
        }, this), 0)
    }, e.prototype.toggle = function() {
        var t=!0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t=!1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var i = $.fn.button;
    $.fn.button = t, $.fn.button.Constructor = e, $.fn.button.noConflict = function() {
        return $.fn.button = i, this
    }, $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var i = $(e.target);
        i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), e.preventDefault()
    })
}(jQuery), + function($) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = $(this), o = i.data("bs.carousel"), s = $.extend({}, e.DEFAULTS, i.data(), "object" == typeof t && t), n = "string" == typeof t ? t: s.slide;
            o || i.data("bs.carousel", o = new e(this, s)), "number" == typeof t ? o.to(t) : n ? o[n]() : s.interval && o.pause().cycle()
        })
    }
    var e = function(t, e) {
        this.$element = $(t).on("keydown.bs.carousel", $.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this))
    };
    e.VERSION = "3.2.0", e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, e.prototype.keydown = function(t) {
        switch (t.which) {
        case 37:
            this.prev();
            break;
        case 39:
            this.next();
            break;
        default:
            return 
        }
        t.preventDefault()
    }, e.prototype.cycle = function(t) {
        return t || (this.paused=!1), this.interval && clearInterval(this.interval), this.options.interval&&!this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval)), this
    }, e.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, e.prototype.to = function(t) {
        var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", $(this.$items[t]))
    }, e.prototype.pause = function(t) {
        return t || (this.paused=!0), this.$element.find(".next, .prev").length && $.support.transition && (this.$element.trigger($.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, e.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, e.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, e.prototype.slide = function(t, e) {
        var i = this.$element.find(".item.active"), o = e || i[t](), s = this.interval, n = "next" == t ? "left": "right", r = "next" == t ? "first": "last", a = this;
        if (!o.length) {
            if (!this.options.wrap)
                return;
            o = this.$element.find(".item")[r]()
        }
        if (o.hasClass("active"))
            return this.sliding=!1;
        var l = o[0], h = $.Event("slide.bs.carousel", {
            relatedTarget: l,
            direction: n
        });
        if (this.$element.trigger(h), !h.isDefaultPrevented()) {
            if (this.sliding=!0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = $(this.$indicators.children()[this.getItemIndex(o)]);
                p && p.addClass("active")
            }
            var c = $.Event("slid.bs.carousel", {
                relatedTarget: l,
                direction: n
            });
            return $.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, i.addClass(n), o.addClass(n), i.one("bsTransitionEnd", function() {
                o.removeClass([t, n].join(" ")).addClass("active"), i.removeClass(["active", n].join(" ")), a.sliding=!1, setTimeout(function() {
                    a.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, - 1))) : (i.removeClass("active"), o.addClass("active"), this.sliding=!1, this.$element.trigger(c)), s && this.cycle(), this
        }
    };
    var i = $.fn.carousel;
    $.fn.carousel = t, $.fn.carousel.Constructor = e, $.fn.carousel.noConflict = function() {
        return $.fn.carousel = i, this
    }, $(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
        var i, o = $(this), s = $(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var n = $.extend({}, s.data(), o.data()), r = o.attr("data-slide-to");
            r && (n.interval=!1), t.call(s, n), r && s.data("bs.carousel").to(r), e.preventDefault()
        }
    }), $(window).on("load", function() {
        $('[data-ride="carousel"]').each(function() {
            var e = $(this);
            t.call(e, e.data())
        })
    })
}(jQuery), + function($) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = $(this), o = i.data("bs.collapse"), s = $.extend({}, e.DEFAULTS, i.data(), "object" == typeof t && t);
            !o && s.toggle && "show" == t && (t=!t), o || i.data("bs.collapse", o = new e(this, s)), "string" == typeof t && o[t]()
        })
    }
    var e = function(t, i) {
        this.$element = $(t), this.options = $.extend({}, e.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = $(this.options.parent)), this.options.toggle && this.toggle()
    };
    e.VERSION = "3.2.0", e.DEFAULTS = {
        toggle: !0
    }, e.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, e.prototype.show = function() {
        if (!this.transitioning&&!this.$element.hasClass("in")) {
            var e = $.Event("show.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find("> .panel > .in");
                if (i && i.length) {
                    var o = i.data("bs.collapse");
                    if (o && o.transitioning)
                        return;
                    t.call(i, "hide"), o || i.data("bs.collapse", null)
                }
                var s = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[s](0), this.transitioning = 1;
                var n = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!$.support.transition)
                    return n.call(this);
                var r = $.camelCase(["scroll", s].join("-"));
                this.$element.one("bsTransitionEnd", $.proxy(n, this)).emulateTransitionEnd(350)[s](this.$element[0][r])
            }
        }
    }, e.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = $.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var e = this.dimension();
                this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return $.support.transition ? void this.$element[e](0).one("bsTransitionEnd", $.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, e.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide": "show"]()
    };
    var i = $.fn.collapse;
    $.fn.collapse = t, $.fn.collapse.Constructor = e, $.fn.collapse.noConflict = function() {
        return $.fn.collapse = i, this
    }, $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var i, o = $(this), s = o.attr("data-target") || e.preventDefault() || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""), n = $(s), r = n.data("bs.collapse"), a = r ? "toggle": o.data(), l = o.attr("data-parent"), h = l && $(l);
        r && r.transitioning || (h && h.find('[data-toggle="collapse"][data-parent="' + l + '"]').not(o).addClass("collapsed"), o[n.hasClass("in") ? "addClass": "removeClass"]("collapsed")), t.call(n, a)
    })
}(jQuery), + function($) {
    "use strict";
    function t(t) {
        t && 3 === t.which || ($(o).remove(), $(s).each(function() {
            var i = e($(this)), o = {
                relatedTarget: this
            };
            i.hasClass("open") && (i.trigger(t = $.Event("hide.bs.dropdown", o)), t.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", o))
        }))
    }
    function e(t) {
        var e = t.attr("data-target");
        e || (e = t.attr("href"), e = e && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
        var i = e && $(e);
        return i && i.length ? i : t.parent()
    }
    function i(t) {
        return this.each(function() {
            var e = $(this), i = e.data("bs.dropdown");
            i || e.data("bs.dropdown", i = new n(this)), "string" == typeof t && i[t].call(e)
        })
    }
    var o = ".dropdown-backdrop", s = '[data-toggle="dropdown"]', n = function(t) {
        $(t).on("click.bs.dropdown", this.toggle)
    };
    n.VERSION = "3.2.0", n.prototype.toggle = function(i) {
        var o = $(this);
        if (!o.is(".disabled, :disabled")) {
            var s = e(o), n = s.hasClass("open");
            if (t(), !n) {
                "ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length && $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click", t);
                var r = {
                    relatedTarget: this
                };
                if (s.trigger(i = $.Event("show.bs.dropdown", r)), i.isDefaultPrevented())
                    return;
                o.trigger("focus"), s.toggleClass("open").trigger("shown.bs.dropdown", r)
            }
            return !1
        }
    }, n.prototype.keydown = function(t) {
        if (/(38|40|27)/.test(t.keyCode)) {
            var i = $(this);
            if (t.preventDefault(), t.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = e(i), n = o.hasClass("open");
                if (!n || n && 27 == t.keyCode)
                    return 27 == t.which && o.find(s).trigger("focus"), i.trigger("click");
                var r = " li:not(.divider):visible a", a = o.find('[role="menu"]' + r + ', [role="listbox"]' + r);
                if (a.length) {
                    var l = a.index(a.filter(":focus"));
                    38 == t.keyCode && l > 0 && l--, 40 == t.keyCode && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                }
            }
        }
    };
    var r = $.fn.dropdown;
    $.fn.dropdown = i, $.fn.dropdown.Constructor = n, $.fn.dropdown.noConflict = function() {
        return $.fn.dropdown = r, this
    }, $(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, n.prototype.toggle).on("keydown.bs.dropdown.data-api", s + ', [role="menu"], [role="listbox"]', n.prototype.keydown)
}(jQuery), + function($) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = $(this), o = i.data("bs.tab");
            o || i.data("bs.tab", o = new e(this)), "string" == typeof t && o[t]()
        })
    }
    var e = function(t) {
        this.element = $(t)
    };
    e.VERSION = "3.2.0", e.prototype.show = function() {
        var t = this.element, e = t.closest("ul:not(.dropdown-menu)"), i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var o = e.find(".active:last a")[0], s = $.Event("show.bs.tab", {
                relatedTarget: o
            });
            if (t.trigger(s), !s.isDefaultPrevented()) {
                var n = $(i);
                this.activate(t.closest("li"), e), this.activate(n, n.parent(), function() {
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o
                    })
                })
            }
        }
    }, e.prototype.activate = function(t, e, i) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), n ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), i && i()
        }
        var s = e.find("> .active"), n = i && $.support.transition && s.hasClass("fade");
        n ? s.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o(), s.removeClass("in")
    };
    var i = $.fn.tab;
    $.fn.tab = t, $.fn.tab.Constructor = e, $.fn.tab.noConflict = function() {
        return $.fn.tab = i, this
    }, $(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
        e.preventDefault(), t.call($(this), "show")
    })
}(jQuery), + function($) {
    "use strict";
    function t() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var i in e)
            if (void 0 !== t.style[i])
                return {
                    end: e[i]
                };
        return !1
    }
    $.fn.emulateTransitionEnd = function(t) {
        var e=!1, i = this;
        $(this).one("bsTransitionEnd", function() {
            e=!0
        });
        var o = function() {
            e || $(i).trigger($.support.transition.end)
        };
        return setTimeout(o, t), this
    }, $(function() {
        $.support.transition = t(), $.support.transition && ($.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function(t) {
                return $(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function($) {
    "use strict";
    function t(e, i) {
        var o = $.proxy(this.process, this);
        this.$body = $("body"), this.$scrollElement = $($(e).is("body") ? window : e), this.options = $.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o), this.refresh(), this.process()
    }
    function e(e) {
        return this.each(function() {
            var i = $(this), o = i.data("bs.scrollspy"), s = "object" == typeof e && e;
            o || i.data("bs.scrollspy", o = new t(this, s)), "string" == typeof e && o[e]()
        })
    }
    t.VERSION = "3.2.0", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = "offset", e = 0;
        $.isWindow(this.$scrollElement[0]) || (t = "position", e = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var i = this;
        this.$body.find(this.selector).map(function() {
            var i = $(this), o = i.data("target") || i.attr("href"), s = /^#./.test(o) && $(o);
            return s && s.length && s.is(":visible") && [[s[t]().top + e, o]] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var t = this.$scrollElement.scrollTop() + this.options.offset, e = this.getScrollHeight(), i = this.options.offset + e - this.$scrollElement.height(), o = this.offsets, s = this.targets, n = this.activeTarget, r;
        if (this.scrollHeight != e && this.refresh(), t >= i)
            return n != (r = s[s.length - 1]) && this.activate(r);
        if (n && t <= o[0])
            return n != (r = s[0]) && this.activate(r);
        for (r = o.length; r--;)
            n != s[r] && t >= o[r] && (!o[r + 1] || t <= o[r + 1]) && this.activate(s[r])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', i = $(e).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    };
    var i = $.fn.scrollspy;
    $.fn.scrollspy = e, $.fn.scrollspy.Constructor = t, $.fn.scrollspy.noConflict = function() {
        return $.fn.scrollspy = i, this
    }, $(window).on("load.bs.scrollspy.data-api", function() {
        $('[data-spy="scroll"]').each(function() {
            var t = $(this);
            e.call(t, t.data())
        })
    })
}(jQuery), + function($) {
    "use strict";
    function t(t, i) {
        return this.each(function() {
            var o = $(this), s = o.data("bs.modal"), n = $.extend({}, e.DEFAULTS, o.data(), "object" == typeof t && t);
            s || o.data("bs.modal", s = new e(this, n)), "string" == typeof t ? s[t](i) : n.show && s.show(i)
        })
    }
    var e = function(t, e) {
        this.options = e, this.$body = $(document.body), this.$element = $(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    e.VERSION = "3.2.0", e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, e.prototype.show = function(t) {
        var e = this, i = $.Event("show.bs.modal", {
            relatedTarget: t
        });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown=!0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this)), this.backdrop(function() {
            var i = $.support.transition && e.$element.hasClass("fade");
            e.$element.parent().length || e.$element.appendTo(e.$body), e.$element.show().scrollTop(0), i && e.$element[0].offsetWidth, e.$element.addClass("in").attr("aria-hidden", !1), e.enforceFocus();
            var o = $.Event("shown.bs.modal", {
                relatedTarget: t
            });
            i ? e.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                e.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(300) : e.$element.trigger("focus").trigger(o)
        }))
    }, e.prototype.hide = function(t) {
        t && t.preventDefault(), t = $.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown&&!t.isDefaultPrevented() && (this.isShown=!1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), $(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, e.prototype.enforceFocus = function() {
        $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, e.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", $.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$element.trigger("hidden.bs.modal")
        })
    }, e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function(t) {
        var e = this, i = this.$element.hasClass("fade") ? "fade": "";
        if (this.isShown && this.options.backdrop) {
            var o = $.support.transition && i;
            if (this.$backdrop = $('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", $.proxy(function(t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t)
                return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                e.removeBackdrop(), t && t()
            };
            $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(150) : s()
        } else 
            t && t()
    }, e.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, e.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, e.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, e.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = $.fn.modal;
    $.fn.modal = t, $.fn.modal.Constructor = e, $.fn.modal.noConflict = function() {
        return $.fn.modal = i, this
    }, $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var i = $(this), o = i.attr("href"), s = $(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")), n = s.data("bs.modal") ? "toggle": $.extend({
            remote: !/#/.test(o) && o
        }, s.data(), i.data());
        i.is("a") && e.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(s, n, this)
    })
}(jQuery), + function($) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = $(this), o = i.data("bs.tooltip"), s = "object" == typeof t && t;
            (o || "destroy" != t) && (o || i.data("bs.tooltip", o = new e(this, s)), "string" == typeof t && o[t]())
        })
    }
    var e = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    e.VERSION = "3.2.0", e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function(t, e, i) {
        this.enabled=!0, this.type = t, this.$element = $(e), this.options = this.getOptions(i), this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport);
        for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
            var n = o[s];
            if ("click" == n)
                this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
            else if ("manual" != n) {
                var r = "hover" == n ? "mouseenter": "focusin", a = "hover" == n ? "mouseleave": "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, $.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, $.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = $.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(t) {
        return t = $.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, e.prototype.getDelegateOptions = function() {
        var t = {}, e = this.getDefaults();
        return this._options && $.each(this._options, function(i, o) {
            e[i] != o && (t[i] = o)
        }), t
    }, e.prototype.enter = function(t) {
        var e = t instanceof this.constructor ? t: $(t.currentTarget).data("bs." + this.type);
        return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e)), clearTimeout(e.timeout), e.hoverState = "in", e.options.delay && e.options.delay.show ? void(e.timeout = setTimeout(function() {
            "in" == e.hoverState && e.show()
        }, e.options.delay.show)) : e.show()
    }, e.prototype.leave = function(t) {
        var e = t instanceof this.constructor ? t: $(t.currentTarget).data("bs." + this.type);
        return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e)), clearTimeout(e.timeout), e.hoverState = "out", e.options.delay && e.options.delay.hide ? void(e.timeout = setTimeout(function() {
            "out" == e.hoverState && e.hide()
        }, e.options.delay.hide)) : e.hide()
    }, e.prototype.show = function() {
        var t = $.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var e = $.contains(document.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() ||!e)
                return;
            var i = this, o = this.tip(), s = this.getUID(this.type);
            this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
            var n = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]): this.options.placement, r = /\s?auto?\s?/i, a = r.test(n);
            a && (n = n.replace(r, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(n).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var l = this.getPosition(), h = o[0].offsetWidth, p = o[0].offsetHeight;
            if (a) {
                var c = n, d = this.$element.parent(), f = this.getPosition(d);
                n = "bottom" == n && l.top + l.height + p - f.scroll > f.height ? "top" : "top" == n && l.top - f.scroll - p < 0 ? "bottom" : "right" == n && l.right + h > f.width ? "left" : "left" == n && l.left - h < f.left ? "right" : n, o.removeClass(c).addClass(n)
            }
            var u = this.getCalculatedOffset(n, l, h, p);
            this.applyPlacement(u, n);
            var g = function() {
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null
            };
            $.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g()
        }
    }, e.prototype.applyPlacement = function(t, e) {
        var i = this.tip(), o = i[0].offsetWidth, s = i[0].offsetHeight, n = parseInt(i.css("margin-top"), 10), r = parseInt(i.css("margin-left"), 10);
        isNaN(n) && (n = 0), isNaN(r) && (r = 0), t.top = t.top + n, t.left = t.left + r, $.offset.setOffset(i[0], $.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, t), 0), i.addClass("in");
        var a = i[0].offsetWidth, l = i[0].offsetHeight;
        "top" == e && l != s && (t.top = t.top + s - l);
        var h = this.getViewportAdjustedDelta(e, t, a, l);
        h.left ? t.left += h.left : t.top += h.top;
        var p = h.left ? 2 * h.left - o + a: 2 * h.top - s + l, c = h.left ? "left": "top", d = h.left ? "offsetWidth": "offsetHeight";
        i.offset(t), this.replaceArrow(p, i[0][d], c)
    }, e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
    }, e.prototype.setContent = function() {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html": "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function() {
        function t() {
            "in" != e.hoverState && i.detach(), e.$element.trigger("hidden.bs." + e.type)
        }
        var e = this, i = this.tip(), o = $.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (i.removeClass("in"), $.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t(), this.hoverState = null, this)
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function(t) {
        t = t || this.$element;
        var e = t[0], i = "BODY" == e.tagName;
        return $.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : null, {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop: t.scrollTop(),
            width: i ? $(window).width(): t.outerWidth(),
            height: i ? $(window).height(): t.outerHeight()
        }, i ? {
            top: 0,
            left: 0
        } : t.offset())
    }, e.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var s = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return s;
        var n = this.options.viewport && this.options.viewport.padding || 0, r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - n - r.scroll, l = e.top + n - r.scroll + o;
            a < r.top ? s.top = r.top - a : l > r.top + r.height && (s.top = r.top + r.height - l)
        } else {
            var h = e.left - n, p = e.left + n + i;
            h < r.left ? s.left = r.left - h : p > r.width && (s.left = r.left + r.width - p)
        }
        return s
    }, e.prototype.getTitle = function() {
        var t, e = this.$element, i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, e.prototype.getUID = function(t) {
        do 
            t+=~~(1e6 * Math.random());
        while (document.getElementById(t));
        return t
    }, e.prototype.tip = function() {
        return this.$tip = this.$tip || $(this.options.template)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, e.prototype.enable = function() {
        this.enabled=!0
    }, e.prototype.disable = function() {
        this.enabled=!1
    }, e.prototype.toggleEnabled = function() {
        this.enabled=!this.enabled
    }, e.prototype.toggle = function(t) {
        var e = this;
        t && (e = $(t.currentTarget).data("bs." + this.type), e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e))), e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
    }, e.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = $.fn.tooltip;
    $.fn.tooltip = t, $.fn.tooltip.Constructor = e, $.fn.tooltip.noConflict = function() {
        return $.fn.tooltip = i, this
    }
}(jQuery), + function($) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = $(this), o = i.data("bs.popover"), s = "object" == typeof t && t;
            (o || "destroy" != t) && (o || i.data("bs.popover", o = new e(this, s)), "string" == typeof t && o[t]())
        })
    }
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!$.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.2.0", e.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(), e = this.getTitle(), i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html": "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof i ? "html": "append": "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, e.prototype.tip = function() {
        return this.$tip || (this.$tip = $(this.options.template)), this.$tip
    };
    var i = $.fn.popover;
    $.fn.popover = t, $.fn.popover.Constructor = e, $.fn.popover.noConflict = function() {
        return $.fn.popover = i, this
    }
}(jQuery);

