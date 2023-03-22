/* PrismJS 1.28.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+bash+git+jsx+tsx+typescript&plugins=line-highlight+line-numbers+show-language+toolbar+copy-to-clipboard */
var _self =
		"undefined" != typeof window
			? window
			: "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
			? self
			: {},
	Prism = (function (e) {
		var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
			t = 0,
			r = {},
			a = {
				manual: e.Prism && e.Prism.manual,
				disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
				util: {
					encode: function e(n) {
						return n instanceof i
							? new i(n.type, e(n.content), n.alias)
							: Array.isArray(n)
							? n.map(e)
							: n
									.replace(/&/g, "&amp;")
									.replace(/</g, "&lt;")
									.replace(/\u00a0/g, " ")
					},
					type: function (e) {
						return Object.prototype.toString.call(e).slice(8, -1)
					},
					objId: function (e) {
						return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id
					},
					clone: function e(n, t) {
						var r, i
						switch (((t = t || {}), a.util.type(n))) {
							case "Object":
								if (((i = a.util.objId(n)), t[i])) return t[i]
								for (var l in ((r = {}), (t[i] = r), n)) n.hasOwnProperty(l) && (r[l] = e(n[l], t))
								return r
							case "Array":
								return (
									(i = a.util.objId(n)),
									t[i]
										? t[i]
										: ((r = []),
										  (t[i] = r),
										  n.forEach(function (n, a) {
												r[a] = e(n, t)
										  }),
										  r)
								)
							default:
								return n
						}
					},
					getLanguage: function (e) {
						for (; e; ) {
							var t = n.exec(e.className)
							if (t) return t[1].toLowerCase()
							e = e.parentElement
						}
						return "none"
					},
					setLanguage: function (e, t) {
						;(e.className = e.className.replace(RegExp(n, "gi"), "")),
							e.classList.add("language-" + t)
					},
					currentScript: function () {
						if ("undefined" == typeof document) return null
						if ("currentScript" in document) return document.currentScript
						try {
							throw new Error()
						} catch (r) {
							var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1]
							if (e) {
								var n = document.getElementsByTagName("script")
								for (var t in n) if (n[t].src == e) return n[t]
							}
							return null
						}
					},
					isActive: function (e, n, t) {
						for (var r = "no-" + n; e; ) {
							var a = e.classList
							if (a.contains(n)) return !0
							if (a.contains(r)) return !1
							e = e.parentElement
						}
						return !!t
					},
				},
				languages: {
					plain: r,
					plaintext: r,
					text: r,
					txt: r,
					extend: function (e, n) {
						var t = a.util.clone(a.languages[e])
						for (var r in n) t[r] = n[r]
						return t
					},
					insertBefore: function (e, n, t, r) {
						var i = (r = r || a.languages)[e],
							l = {}
						for (var o in i)
							if (i.hasOwnProperty(o)) {
								if (o == n) for (var s in t) t.hasOwnProperty(s) && (l[s] = t[s])
								t.hasOwnProperty(o) || (l[o] = i[o])
							}
						var u = r[e]
						return (
							(r[e] = l),
							a.languages.DFS(a.languages, function (n, t) {
								t === u && n != e && (this[n] = l)
							}),
							l
						)
					},
					DFS: function e(n, t, r, i) {
						i = i || {}
						var l = a.util.objId
						for (var o in n)
							if (n.hasOwnProperty(o)) {
								t.call(n, o, n[o], r || o)
								var s = n[o],
									u = a.util.type(s)
								"Object" !== u || i[l(s)]
									? "Array" !== u || i[l(s)] || ((i[l(s)] = !0), e(s, t, o, i))
									: ((i[l(s)] = !0), e(s, t, null, i))
							}
					},
				},
				plugins: {},
				highlightAll: function (e, n) {
					a.highlightAllUnder(document, e, n)
				},
				highlightAllUnder: function (e, n, t) {
					var r = {
						callback: t,
						container: e,
						selector:
							'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
					}
					a.hooks.run("before-highlightall", r),
						(r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector))),
						a.hooks.run("before-all-elements-highlight", r)
					for (var i, l = 0; (i = r.elements[l++]); ) a.highlightElement(i, !0 === n, r.callback)
				},
				highlightElement: function (n, t, r) {
					var i = a.util.getLanguage(n),
						l = a.languages[i]
					a.util.setLanguage(n, i)
					var o = n.parentElement
					o && "pre" === o.nodeName.toLowerCase() && a.util.setLanguage(o, i)
					var s = { element: n, language: i, grammar: l, code: n.textContent }
					function u(e) {
						;(s.highlightedCode = e),
							a.hooks.run("before-insert", s),
							(s.element.innerHTML = s.highlightedCode),
							a.hooks.run("after-highlight", s),
							a.hooks.run("complete", s),
							r && r.call(s.element)
					}
					if (
						(a.hooks.run("before-sanity-check", s),
						(o = s.element.parentElement) &&
							"pre" === o.nodeName.toLowerCase() &&
							!o.hasAttribute("tabindex") &&
							o.setAttribute("tabindex", "0"),
						!s.code)
					)
						return a.hooks.run("complete", s), void (r && r.call(s.element))
					if ((a.hooks.run("before-highlight", s), s.grammar))
						if (t && e.Worker) {
							var c = new Worker(a.filename)
							;(c.onmessage = function (e) {
								u(e.data)
							}),
								c.postMessage(
									JSON.stringify({ language: s.language, code: s.code, immediateClose: !0 })
								)
						} else u(a.highlight(s.code, s.grammar, s.language))
					else u(a.util.encode(s.code))
				},
				highlight: function (e, n, t) {
					var r = { code: e, grammar: n, language: t }
					if ((a.hooks.run("before-tokenize", r), !r.grammar))
						throw new Error('The language "' + r.language + '" has no grammar.')
					return (
						(r.tokens = a.tokenize(r.code, r.grammar)),
						a.hooks.run("after-tokenize", r),
						i.stringify(a.util.encode(r.tokens), r.language)
					)
				},
				tokenize: function (e, n) {
					var t = n.rest
					if (t) {
						for (var r in t) n[r] = t[r]
						delete n.rest
					}
					var a = new s()
					return (
						u(a, a.head, e),
						o(e, a, n, a.head, 0),
						(function (e) {
							for (var n = [], t = e.head.next; t !== e.tail; ) n.push(t.value), (t = t.next)
							return n
						})(a)
					)
				},
				hooks: {
					all: {},
					add: function (e, n) {
						var t = a.hooks.all
						;(t[e] = t[e] || []), t[e].push(n)
					},
					run: function (e, n) {
						var t = a.hooks.all[e]
						if (t && t.length) for (var r, i = 0; (r = t[i++]); ) r(n)
					},
				},
				Token: i,
			}
		function i(e, n, t, r) {
			;(this.type = e), (this.content = n), (this.alias = t), (this.length = 0 | (r || "").length)
		}
		function l(e, n, t, r) {
			e.lastIndex = n
			var a = e.exec(t)
			if (a && r && a[1]) {
				var i = a[1].length
				;(a.index += i), (a[0] = a[0].slice(i))
			}
			return a
		}
		function o(e, n, t, r, s, g) {
			for (var f in t)
				if (t.hasOwnProperty(f) && t[f]) {
					var h = t[f]
					h = Array.isArray(h) ? h : [h]
					for (var d = 0; d < h.length; ++d) {
						if (g && g.cause == f + "," + d) return
						var v = h[d],
							p = v.inside,
							m = !!v.lookbehind,
							y = !!v.greedy,
							k = v.alias
						if (y && !v.pattern.global) {
							var x = v.pattern.toString().match(/[imsuy]*$/)[0]
							v.pattern = RegExp(v.pattern.source, x + "g")
						}
						for (
							var b = v.pattern || v, w = r.next, A = s;
							w !== n.tail && !(g && A >= g.reach);
							A += w.value.length, w = w.next
						) {
							var E = w.value
							if (n.length > e.length) return
							if (!(E instanceof i)) {
								var P,
									L = 1
								if (y) {
									if (!(P = l(b, A, e, m)) || P.index >= e.length) break
									var S = P.index,
										O = P.index + P[0].length,
										j = A
									for (j += w.value.length; S >= j; ) j += (w = w.next).value.length
									if (((A = j -= w.value.length), w.value instanceof i)) continue
									for (var C = w; C !== n.tail && (j < O || "string" == typeof C.value); C = C.next)
										L++, (j += C.value.length)
									L--, (E = e.slice(A, j)), (P.index -= A)
								} else if (!(P = l(b, 0, E, m))) continue
								S = P.index
								var N = P[0],
									_ = E.slice(0, S),
									M = E.slice(S + N.length),
									W = A + E.length
								g && W > g.reach && (g.reach = W)
								var z = w.prev
								if (
									(_ && ((z = u(n, z, _)), (A += _.length)),
									c(n, z, L),
									(w = u(n, z, new i(f, p ? a.tokenize(N, p) : N, k, N))),
									M && u(n, w, M),
									L > 1)
								) {
									var I = { cause: f + "," + d, reach: W }
									o(e, n, t, w.prev, A, I), g && I.reach > g.reach && (g.reach = I.reach)
								}
							}
						}
					}
				}
		}
		function s() {
			var e = { value: null, prev: null, next: null },
				n = { value: null, prev: e, next: null }
			;(e.next = n), (this.head = e), (this.tail = n), (this.length = 0)
		}
		function u(e, n, t) {
			var r = n.next,
				a = { value: t, prev: n, next: r }
			return (n.next = a), (r.prev = a), e.length++, a
		}
		function c(e, n, t) {
			for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next
			;(n.next = r), (r.prev = n), (e.length -= a)
		}
		if (
			((e.Prism = a),
			(i.stringify = function e(n, t) {
				if ("string" == typeof n) return n
				if (Array.isArray(n)) {
					var r = ""
					return (
						n.forEach(function (n) {
							r += e(n, t)
						}),
						r
					)
				}
				var i = {
						type: n.type,
						content: e(n.content, t),
						tag: "span",
						classes: ["token", n.type],
						attributes: {},
						language: t,
					},
					l = n.alias
				l && (Array.isArray(l) ? Array.prototype.push.apply(i.classes, l) : i.classes.push(l)),
					a.hooks.run("wrap", i)
				var o = ""
				for (var s in i.attributes)
					o += " " + s + '="' + (i.attributes[s] || "").replace(/"/g, "&quot;") + '"'
				return (
					"<" +
					i.tag +
					' class="' +
					i.classes.join(" ") +
					'"' +
					o +
					">" +
					i.content +
					"</" +
					i.tag +
					">"
				)
			}),
			!e.document)
		)
			return e.addEventListener
				? (a.disableWorkerMessageHandler ||
						e.addEventListener(
							"message",
							function (n) {
								var t = JSON.parse(n.data),
									r = t.language,
									i = t.code,
									l = t.immediateClose
								e.postMessage(a.highlight(i, a.languages[r], r)), l && e.close()
							},
							!1
						),
				  a)
				: a
		var g = a.util.currentScript()
		function f() {
			a.manual || a.highlightAll()
		}
		if (
			(g && ((a.filename = g.src), g.hasAttribute("data-manual") && (a.manual = !0)), !a.manual)
		) {
			var h = document.readyState
			"loading" === h || ("interactive" === h && g && g.defer)
				? document.addEventListener("DOMContentLoaded", f)
				: window.requestAnimationFrame
				? window.requestAnimationFrame(f)
				: window.setTimeout(f, 16)
		}
		return a
	})(_self)
"undefined" != typeof module && module.exports && (module.exports = Prism),
	"undefined" != typeof global && (global.Prism = Prism)
;(Prism.languages.markup = {
	comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
	prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
	doctype: {
		pattern:
			/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: !0,
		inside: {
			"internal-subset": {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: !0,
				greedy: !0,
				inside: null,
			},
			string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
			punctuation: /^<!|>$|[[\]]/,
			"doctype-tag": /^DOCTYPE/i,
			name: /[^\s<>'"]+/,
		},
	},
	cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
	tag: {
		pattern:
			/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: !0,
		inside: {
			tag: {
				pattern: /^<\/?[^\s>\/]+/,
				inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
			},
			"special-attr": [],
			"attr-value": {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					punctuation: [
						{ pattern: /^=/, alias: "attr-equals" },
						{ pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
					],
				},
			},
			punctuation: /\/?>/,
			"attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
		},
	},
	entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i],
}),
	(Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity),
	(Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup),
	Prism.hooks.add("wrap", function (a) {
		"entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
	}),
	Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
		value: function (a, e) {
			var s = {}
			;(s["language-" + e] = {
				pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
				lookbehind: !0,
				inside: Prism.languages[e],
			}),
				(s.cdata = /^<!\[CDATA\[|\]\]>$/i)
			var t = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } }
			t["language-" + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] }
			var n = {}
			;(n[a] = {
				pattern: RegExp(
					"(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(
						/__/g,
						function () {
							return a
						}
					),
					"i"
				),
				lookbehind: !0,
				greedy: !0,
				inside: t,
			}),
				Prism.languages.insertBefore("markup", "cdata", n)
		},
	}),
	Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
		value: function (a, e) {
			Prism.languages.markup.tag.inside["special-attr"].push({
				pattern: RegExp(
					"(^|[\"'\\s])(?:" + a + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))",
					"i"
				),
				lookbehind: !0,
				inside: {
					"attr-name": /^[^\s=]+/,
					"attr-value": {
						pattern: /=[\s\S]+/,
						inside: {
							value: {
								pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
								lookbehind: !0,
								alias: [e, "language-" + e],
								inside: Prism.languages[e],
							},
							punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
						},
					},
				},
			})
		},
	}),
	(Prism.languages.html = Prism.languages.markup),
	(Prism.languages.mathml = Prism.languages.markup),
	(Prism.languages.svg = Prism.languages.markup),
	(Prism.languages.xml = Prism.languages.extend("markup", {})),
	(Prism.languages.ssml = Prism.languages.xml),
	(Prism.languages.atom = Prism.languages.xml),
	(Prism.languages.rss = Prism.languages.xml)
!(function (s) {
	var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/
	;(s.languages.css = {
		comment: /\/\*[\s\S]*?\*\//,
		atrule: {
			pattern: RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" + e.source + ")*?(?:;|(?=\\s*\\{))"),
			inside: {
				rule: /^@[\w-]+/,
				"selector-function-argument": {
					pattern:
						/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: !0,
					alias: "selector",
				},
				keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 },
			},
		},
		url: {
			pattern: RegExp("\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
			greedy: !0,
			inside: {
				function: /^url/i,
				punctuation: /^\(|\)$/,
				string: { pattern: RegExp("^" + e.source + "$"), alias: "url" },
			},
		},
		selector: {
			pattern: RegExp(
				"(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"
			),
			lookbehind: !0,
		},
		string: { pattern: e, greedy: !0 },
		property: {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: !0,
		},
		important: /!important\b/i,
		function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
		punctuation: /[(){};:,]/,
	}),
		(s.languages.css.atrule.inside.rest = s.languages.css)
	var t = s.languages.markup
	t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"))
})(Prism)
Prism.languages.clike = {
	comment: [
		{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
		{ pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
	],
	string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
	"class-name": {
		pattern:
			/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: !0,
		inside: { punctuation: /[.\\]/ },
	},
	keyword:
		/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
	boolean: /\b(?:false|true)\b/,
	function: /\b\w+(?=\()/,
	number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	punctuation: /[{}[\];(),.:]/,
}
;(Prism.languages.javascript = Prism.languages.extend("clike", {
	"class-name": [
		Prism.languages.clike["class-name"],
		{
			pattern:
				/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: !0,
		},
	],
	keyword: [
		{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
		{
			pattern:
				/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: !0,
		},
	],
	function:
		/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	number: {
		pattern: RegExp(
			"(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"
		),
		lookbehind: !0,
	},
	operator:
		/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
})),
	(Prism.languages.javascript["class-name"][0].pattern =
		/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
	Prism.languages.insertBefore("javascript", "keyword", {
		regex: {
			pattern: RegExp(
				"((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"
			),
			lookbehind: !0,
			greedy: !0,
			inside: {
				"regex-source": {
					pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
					lookbehind: !0,
					alias: "language-regex",
					inside: Prism.languages.regex,
				},
				"regex-delimiter": /^\/|\/$/,
				"regex-flags": /^[a-z]+$/,
			},
		},
		"function-variable": {
			pattern:
				/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
			alias: "function",
		},
		parameter: [
			{
				pattern:
					/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
			{
				pattern:
					/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
			{
				pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
			{
				pattern:
					/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
		],
		constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
	}),
	Prism.languages.insertBefore("javascript", "string", {
		hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
		"template-string": {
			pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
			greedy: !0,
			inside: {
				"template-punctuation": { pattern: /^`|`$/, alias: "string" },
				interpolation: {
					pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
					lookbehind: !0,
					inside: {
						"interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" },
						rest: Prism.languages.javascript,
					},
				},
				string: /[\s\S]+/,
			},
		},
		"string-property": {
			pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
			lookbehind: !0,
			greedy: !0,
			alias: "property",
		},
	}),
	Prism.languages.insertBefore("javascript", "operator", {
		"literal-property": {
			pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
			lookbehind: !0,
			alias: "property",
		},
	}),
	Prism.languages.markup &&
		(Prism.languages.markup.tag.addInlined("script", "javascript"),
		Prism.languages.markup.tag.addAttribute(
			"on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)",
			"javascript"
		)),
	(Prism.languages.js = Prism.languages.javascript)
!(function (e) {
	var t =
			"\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
		n = {
			pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
			lookbehind: !0,
			alias: "punctuation",
			inside: null,
		},
		a = {
			bash: n,
			environment: { pattern: RegExp("\\$" + t), alias: "constant" },
			variable: [
				{
					pattern: /\$?\(\([\s\S]+?\)\)/,
					greedy: !0,
					inside: {
						variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/],
						number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
						operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
						punctuation: /\(\(?|\)\)?|,|;/,
					},
				},
				{
					pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
					greedy: !0,
					inside: { variable: /^\$\(|^`|\)$|`$/ },
				},
				{
					pattern: /\$\{[^}]+\}/,
					greedy: !0,
					inside: {
						operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
						punctuation: /[\[\]]/,
						environment: { pattern: RegExp("(\\{)" + t), lookbehind: !0, alias: "constant" },
					},
				},
				/\$(?:\w+|[#?*!@$])/,
			],
			entity:
				/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
		}
	;(e.languages.bash = {
		shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
		comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
		"function-name": [
			{
				pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
				lookbehind: !0,
				alias: "function",
			},
			{ pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
		],
		"for-or-select": {
			pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
			alias: "variable",
			lookbehind: !0,
		},
		"assign-left": {
			pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
			inside: {
				environment: {
					pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
					lookbehind: !0,
					alias: "constant",
				},
			},
			alias: "variable",
			lookbehind: !0,
		},
		string: [
			{
				pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
				lookbehind: !0,
				greedy: !0,
				inside: a,
			},
			{
				pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
				lookbehind: !0,
				greedy: !0,
				inside: { bash: n },
			},
			{
				pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
				lookbehind: !0,
				greedy: !0,
				inside: a,
			},
			{ pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
			{ pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, inside: { entity: a.entity } },
		],
		environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
		variable: a.variable,
		function: {
			pattern:
				/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
			lookbehind: !0,
		},
		keyword: {
			pattern:
				/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
			lookbehind: !0,
		},
		builtin: {
			pattern:
				/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
			lookbehind: !0,
			alias: "class-name",
		},
		boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: !0 },
		"file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
		operator: {
			pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
			inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } },
		},
		punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
		number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
	}),
		(n.inside = e.languages.bash)
	for (
		var o = [
				"comment",
				"function-name",
				"for-or-select",
				"assign-left",
				"string",
				"environment",
				"function",
				"keyword",
				"builtin",
				"boolean",
				"file-descriptor",
				"operator",
				"punctuation",
				"number",
			],
			s = a.variable[1].inside,
			i = 0;
		i < o.length;
		i++
	)
		s[o[i]] = e.languages.bash[o[i]]
	e.languages.shell = e.languages.bash
})(Prism)
Prism.languages.git = {
	comment: /^#.*/m,
	deleted: /^[-–].*/m,
	inserted: /^\+.*/m,
	string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
	command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/ } },
	coord: /^@@.*@@$/m,
	"commit-sha1": /^commit \w{40}$/m,
}
!(function (t) {
	var n = t.util.clone(t.languages.javascript),
		e = "(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})"
	function a(t, n) {
		return (
			(t = t
				.replace(/<S>/g, function () {
					return "(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"
				})
				.replace(/<BRACES>/g, function () {
					return "(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"
				})
				.replace(/<SPREAD>/g, function () {
					return e
				})),
			RegExp(t, n)
		)
	}
	;(e = a(e).source),
		(t.languages.jsx = t.languages.extend("markup", n)),
		(t.languages.jsx.tag.pattern = a(
			"</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"
		)),
		(t.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
		(t.languages.jsx.tag.inside["attr-value"].pattern =
			/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
		(t.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
		(t.languages.jsx.tag.inside.comment = n.comment),
		t.languages.insertBefore(
			"inside",
			"attr-name",
			{ spread: { pattern: a("<SPREAD>"), inside: t.languages.jsx } },
			t.languages.jsx.tag
		),
		t.languages.insertBefore(
			"inside",
			"special-attr",
			{
				script: {
					pattern: a("=<BRACES>"),
					alias: "language-javascript",
					inside: {
						"script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" },
						rest: t.languages.jsx,
					},
				},
			},
			t.languages.jsx.tag
		)
	var s = function (t) {
			return t
				? "string" == typeof t
					? t
					: "string" == typeof t.content
					? t.content
					: t.content.map(s).join("")
				: ""
		},
		g = function (n) {
			for (var e = [], a = 0; a < n.length; a++) {
				var o = n[a],
					i = !1
				if (
					("string" != typeof o &&
						("tag" === o.type && o.content[0] && "tag" === o.content[0].type
							? "</" === o.content[0].content[0].content
								? e.length > 0 && e[e.length - 1].tagName === s(o.content[0].content[1]) && e.pop()
								: "/>" === o.content[o.content.length - 1].content ||
								  e.push({ tagName: s(o.content[0].content[1]), openedBraces: 0 })
							: e.length > 0 && "punctuation" === o.type && "{" === o.content
							? e[e.length - 1].openedBraces++
							: e.length > 0 &&
							  e[e.length - 1].openedBraces > 0 &&
							  "punctuation" === o.type &&
							  "}" === o.content
							? e[e.length - 1].openedBraces--
							: (i = !0)),
					(i || "string" == typeof o) && e.length > 0 && 0 === e[e.length - 1].openedBraces)
				) {
					var r = s(o)
					a < n.length - 1 &&
						("string" == typeof n[a + 1] || "plain-text" === n[a + 1].type) &&
						((r += s(n[a + 1])), n.splice(a + 1, 1)),
						a > 0 &&
							("string" == typeof n[a - 1] || "plain-text" === n[a - 1].type) &&
							((r = s(n[a - 1]) + r), n.splice(a - 1, 1), a--),
						(n[a] = new t.Token("plain-text", r, null, r))
				}
				o.content && "string" != typeof o.content && g(o.content)
			}
		}
	t.hooks.add("after-tokenize", function (t) {
		;("jsx" !== t.language && "tsx" !== t.language) || g(t.tokens)
	})
})(Prism)
!(function (e) {
	;(e.languages.typescript = e.languages.extend("javascript", {
		"class-name": {
			pattern:
				/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
			lookbehind: !0,
			greedy: !0,
			inside: null,
		},
		builtin:
			/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
	})),
		e.languages.typescript.keyword.push(
			/\b(?:abstract|declare|is|keyof|readonly|require)\b/,
			/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
			/\btype\b(?=\s*(?:[\{*]|$))/
		),
		delete e.languages.typescript.parameter,
		delete e.languages.typescript["literal-property"]
	var s = e.languages.extend("typescript", {})
	delete s["class-name"],
		(e.languages.typescript["class-name"].inside = s),
		e.languages.insertBefore("typescript", "function", {
			decorator: {
				pattern: /@[$\w\xA0-\uFFFF]+/,
				inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ },
			},
			"generic-function": {
				pattern:
					/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
				greedy: !0,
				inside: {
					function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
					generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: s },
				},
			},
		}),
		(e.languages.ts = e.languages.typescript)
})(Prism)
!(function (e) {
	var a = e.util.clone(e.languages.typescript)
	;(e.languages.tsx = e.languages.extend("jsx", a)),
		delete e.languages.tsx.parameter,
		delete e.languages.tsx["literal-property"]
	var t = e.languages.tsx.tag
	;(t.pattern = RegExp("(^|[^\\w$]|(?=</))(?:" + t.pattern.source + ")", t.pattern.flags)),
		(t.lookbehind = !0)
})(Prism)
!(function () {
	if ("undefined" != typeof Prism && "undefined" != typeof document && document.querySelector) {
		var e,
			t = "line-numbers",
			i = "linkable-line-numbers",
			n = /\n(?!$)/g,
			r = !0
		Prism.plugins.lineHighlight = {
			highlightLines: function (o, u, c) {
				var h = (u = "string" == typeof u ? u : o.getAttribute("data-line") || "")
						.replace(/\s+/g, "")
						.split(",")
						.filter(Boolean),
					d = +o.getAttribute("data-line-offset") || 0,
					f = (
						(function () {
							if (void 0 === e) {
								var t = document.createElement("div")
								;(t.style.fontSize = "13px"),
									(t.style.lineHeight = "1.5"),
									(t.style.padding = "0"),
									(t.style.border = "0"),
									(t.innerHTML = "&nbsp;<br />&nbsp;"),
									document.body.appendChild(t),
									(e = 38 === t.offsetHeight),
									document.body.removeChild(t)
							}
							return e
						})()
							? parseInt
							: parseFloat
					)(getComputedStyle(o).lineHeight),
					p = Prism.util.isActive(o, t),
					g = o.querySelector("code"),
					m = p ? o : g || o,
					v = [],
					y = g.textContent.match(n),
					b = y ? y.length + 1 : 1,
					A =
						g && m != g
							? (function (e, t) {
									var i = getComputedStyle(e),
										n = getComputedStyle(t)
									function r(e) {
										return +e.substr(0, e.length - 2)
									}
									return t.offsetTop + r(n.borderTopWidth) + r(n.paddingTop) - r(i.paddingTop)
							  })(o, g)
							: 0
				h.forEach(function (e) {
					var t = e.split("-"),
						i = +t[0],
						n = +t[1] || i
					if (!((n = Math.min(b, n)) < i)) {
						var r =
							o.querySelector('.line-highlight[data-range="' + e + '"]') ||
							document.createElement("div")
						if (
							(v.push(function () {
								r.setAttribute("aria-hidden", "true"),
									r.setAttribute("data-range", e),
									(r.className = (c || "") + " line-highlight")
							}),
							p && Prism.plugins.lineNumbers)
						) {
							var s = Prism.plugins.lineNumbers.getLine(o, i),
								l = Prism.plugins.lineNumbers.getLine(o, n)
							if (s) {
								var a = s.offsetTop + A + "px"
								v.push(function () {
									r.style.top = a
								})
							}
							if (l) {
								var u = l.offsetTop - s.offsetTop + l.offsetHeight + "px"
								v.push(function () {
									r.style.height = u
								})
							}
						} else
							v.push(function () {
								r.setAttribute("data-start", String(i)),
									n > i && r.setAttribute("data-end", String(n)),
									(r.style.top = (i - d - 1) * f + A + "px"),
									(r.textContent = new Array(n - i + 2).join(" \n"))
							})
						v.push(function () {
							r.style.width = o.scrollWidth + "px"
						}),
							v.push(function () {
								m.appendChild(r)
							})
					}
				})
				var P = o.id
				if (p && Prism.util.isActive(o, i) && P) {
					l(o, i) ||
						v.push(function () {
							o.classList.add(i)
						})
					var E = parseInt(o.getAttribute("data-start") || "1")
					s(".line-numbers-rows > span", o).forEach(function (e, t) {
						var i = t + E
						e.onclick = function () {
							var e = P + "." + i
							;(r = !1),
								(location.hash = e),
								setTimeout(function () {
									r = !0
								}, 1)
						}
					})
				}
				return function () {
					v.forEach(a)
				}
			},
		}
		var o = 0
		Prism.hooks.add("before-sanity-check", function (e) {
			var t = e.element.parentElement
			if (u(t)) {
				var i = 0
				s(".line-highlight", t).forEach(function (e) {
					;(i += e.textContent.length), e.parentNode.removeChild(e)
				}),
					i && /^(?: \n)+$/.test(e.code.slice(-i)) && (e.code = e.code.slice(0, -i))
			}
		}),
			Prism.hooks.add("complete", function e(i) {
				var n = i.element.parentElement
				if (u(n)) {
					clearTimeout(o)
					var r = Prism.plugins.lineNumbers,
						s = i.plugins && i.plugins.lineNumbers
					l(n, t) && r && !s
						? Prism.hooks.add("line-numbers", e)
						: (Prism.plugins.lineHighlight.highlightLines(n)(), (o = setTimeout(c, 1)))
				}
			}),
			window.addEventListener("hashchange", c),
			window.addEventListener("resize", function () {
				s("pre")
					.filter(u)
					.map(function (e) {
						return Prism.plugins.lineHighlight.highlightLines(e)
					})
					.forEach(a)
			})
	}
	function s(e, t) {
		return Array.prototype.slice.call((t || document).querySelectorAll(e))
	}
	function l(e, t) {
		return e.classList.contains(t)
	}
	function a(e) {
		e()
	}
	function u(e) {
		return !!(
			e &&
			/pre/i.test(e.nodeName) &&
			(e.hasAttribute("data-line") || (e.id && Prism.util.isActive(e, i)))
		)
	}
	function c() {
		var e = location.hash.slice(1)
		s(".temporary.line-highlight").forEach(function (e) {
			e.parentNode.removeChild(e)
		})
		var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1]
		if (t && !document.getElementById(e)) {
			var i = e.slice(0, e.lastIndexOf(".")),
				n = document.getElementById(i)
			n &&
				(n.hasAttribute("data-line") || n.setAttribute("data-line", ""),
				Prism.plugins.lineHighlight.highlightLines(n, t, "temporary ")(),
				r && document.querySelector(".temporary.line-highlight").scrollIntoView())
		}
	}
})()
!(function () {
	if ("undefined" != typeof Prism && "undefined" != typeof document) {
		var e = "line-numbers",
			n = /\n(?!$)/g,
			t = (Prism.plugins.lineNumbers = {
				getLine: function (n, t) {
					if ("PRE" === n.tagName && n.classList.contains(e)) {
						var i = n.querySelector(".line-numbers-rows")
						if (i) {
							var r = parseInt(n.getAttribute("data-start"), 10) || 1,
								s = r + (i.children.length - 1)
							t < r && (t = r), t > s && (t = s)
							var l = t - r
							return i.children[l]
						}
					}
				},
				resize: function (e) {
					r([e])
				},
				assumeViewportIndependence: !0,
			}),
			i = void 0
		window.addEventListener("resize", function () {
			;(t.assumeViewportIndependence && i === window.innerWidth) ||
				((i = window.innerWidth),
				r(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))))
		}),
			Prism.hooks.add("complete", function (t) {
				if (t.code) {
					var i = t.element,
						s = i.parentNode
					if (
						s &&
						/pre/i.test(s.nodeName) &&
						!i.querySelector(".line-numbers-rows") &&
						Prism.util.isActive(i, e)
					) {
						i.classList.remove(e), s.classList.add(e)
						var l,
							o = t.code.match(n),
							a = o ? o.length + 1 : 1,
							u = new Array(a + 1).join("<span></span>")
						;(l = document.createElement("span")).setAttribute("aria-hidden", "true"),
							(l.className = "line-numbers-rows"),
							(l.innerHTML = u),
							s.hasAttribute("data-start") &&
								(s.style.counterReset =
									"linenumber " + (parseInt(s.getAttribute("data-start"), 10) - 1)),
							t.element.appendChild(l),
							r([s]),
							Prism.hooks.run("line-numbers", t)
					}
				}
			}),
			Prism.hooks.add("line-numbers", function (e) {
				;(e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0)
			})
	}
	function r(e) {
		if (
			0 !=
			(e = e.filter(function (e) {
				var n,
					t = ((n = e),
					n ? (window.getComputedStyle ? getComputedStyle(n) : n.currentStyle || null) : null)[
						"white-space"
					]
				return "pre-wrap" === t || "pre-line" === t
			})).length
		) {
			var t = e
				.map(function (e) {
					var t = e.querySelector("code"),
						i = e.querySelector(".line-numbers-rows")
					if (t && i) {
						var r = e.querySelector(".line-numbers-sizer"),
							s = t.textContent.split(n)
						r ||
							(((r = document.createElement("span")).className = "line-numbers-sizer"),
							t.appendChild(r)),
							(r.innerHTML = "0"),
							(r.style.display = "block")
						var l = r.getBoundingClientRect().height
						return (
							(r.innerHTML = ""),
							{ element: e, lines: s, lineHeights: [], oneLinerHeight: l, sizer: r }
						)
					}
				})
				.filter(Boolean)
			t.forEach(function (e) {
				var n = e.sizer,
					t = e.lines,
					i = e.lineHeights,
					r = e.oneLinerHeight
				;(i[t.length - 1] = void 0),
					t.forEach(function (e, t) {
						if (e && e.length > 1) {
							var s = n.appendChild(document.createElement("span"))
							;(s.style.display = "block"), (s.textContent = e)
						} else i[t] = r
					})
			}),
				t.forEach(function (e) {
					for (var n = e.sizer, t = e.lineHeights, i = 0, r = 0; r < t.length; r++)
						void 0 === t[r] && (t[r] = n.children[i++].getBoundingClientRect().height)
				}),
				t.forEach(function (e) {
					var n = e.sizer,
						t = e.element.querySelector(".line-numbers-rows")
					;(n.style.display = "none"),
						(n.innerHTML = ""),
						e.lineHeights.forEach(function (e, n) {
							t.children[n].style.height = e + "px"
						})
				})
		}
	}
})()
!(function () {
	if ("undefined" != typeof Prism && "undefined" != typeof document) {
		var e = [],
			t = {},
			n = function () {}
		Prism.plugins.toolbar = {}
		var a = (Prism.plugins.toolbar.registerButton = function (n, a) {
				var r
				;(r =
					"function" == typeof a
						? a
						: function (e) {
								var t
								return (
									"function" == typeof a.onClick
										? (((t = document.createElement("button")).type = "button"),
										  t.addEventListener("click", function () {
												a.onClick.call(this, e)
										  }))
										: "string" == typeof a.url
										? ((t = document.createElement("a")).href = a.url)
										: (t = document.createElement("span")),
									a.className && t.classList.add(a.className),
									(t.textContent = a.text),
									t
								)
						  }),
					n in t
						? console.warn('There is a button with the key "' + n + '" registered already.')
						: e.push((t[n] = r))
			}),
			r = (Prism.plugins.toolbar.hook = function (a) {
				var r = a.element.parentNode
				if (r && /pre/i.test(r.nodeName) && !r.parentNode.classList.contains("code-toolbar")) {
					var o = document.createElement("div")
					o.classList.add("code-toolbar"), r.parentNode.insertBefore(o, r), o.appendChild(r)
					var i = document.createElement("div")
					i.classList.add("toolbar")
					var l = e,
						d = (function (e) {
							for (; e; ) {
								var t = e.getAttribute("data-toolbar-order")
								if (null != t) return (t = t.trim()).length ? t.split(/\s*,\s*/g) : []
								e = e.parentElement
							}
						})(a.element)
					d &&
						(l = d.map(function (e) {
							return t[e] || n
						})),
						l.forEach(function (e) {
							var t = e(a)
							if (t) {
								var n = document.createElement("div")
								n.classList.add("toolbar-item"), n.appendChild(t), i.appendChild(n)
							}
						}),
						o.appendChild(i)
				}
			})
		a("label", function (e) {
			var t = e.element.parentNode
			if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
				var n,
					a,
					r = t.getAttribute("data-label")
				try {
					a = document.querySelector("template#" + r)
				} catch (e) {}
				return (
					a
						? (n = a.content)
						: (t.hasAttribute("data-url")
								? ((n = document.createElement("a")).href = t.getAttribute("data-url"))
								: (n = document.createElement("span")),
						  (n.textContent = r)),
					n
				)
			}
		}),
			Prism.hooks.add("complete", r)
	}
})()
!(function () {
	if ("undefined" != typeof Prism && "undefined" != typeof document)
		if (Prism.plugins.toolbar) {
			var e = {
				none: "Plain text",
				plain: "Plain text",
				plaintext: "Plain text",
				text: "Plain text",
				txt: "Plain text",
				html: "HTML",
				xml: "XML",
				svg: "SVG",
				mathml: "MathML",
				ssml: "SSML",
				rss: "RSS",
				css: "CSS",
				clike: "C-like",
				js: "JavaScript",
				abap: "ABAP",
				abnf: "ABNF",
				al: "AL",
				antlr4: "ANTLR4",
				g4: "ANTLR4",
				apacheconf: "Apache Configuration",
				apl: "APL",
				aql: "AQL",
				ino: "Arduino",
				arff: "ARFF",
				armasm: "ARM Assembly",
				"arm-asm": "ARM Assembly",
				art: "Arturo",
				asciidoc: "AsciiDoc",
				adoc: "AsciiDoc",
				aspnet: "ASP.NET (C#)",
				asm6502: "6502 Assembly",
				asmatmel: "Atmel AVR Assembly",
				autohotkey: "AutoHotkey",
				autoit: "AutoIt",
				avisynth: "AviSynth",
				avs: "AviSynth",
				"avro-idl": "Avro IDL",
				avdl: "Avro IDL",
				awk: "AWK",
				gawk: "GAWK",
				basic: "BASIC",
				bbcode: "BBcode",
				bnf: "BNF",
				rbnf: "RBNF",
				bsl: "BSL (1C:Enterprise)",
				oscript: "OneScript",
				csharp: "C#",
				cs: "C#",
				dotnet: "C#",
				cpp: "C++",
				cfscript: "CFScript",
				cfc: "CFScript",
				cil: "CIL",
				cmake: "CMake",
				cobol: "COBOL",
				coffee: "CoffeeScript",
				conc: "Concurnas",
				csp: "Content-Security-Policy",
				"css-extras": "CSS Extras",
				csv: "CSV",
				cue: "CUE",
				dataweave: "DataWeave",
				dax: "DAX",
				django: "Django/Jinja2",
				jinja2: "Django/Jinja2",
				"dns-zone-file": "DNS zone file",
				"dns-zone": "DNS zone file",
				dockerfile: "Docker",
				dot: "DOT (Graphviz)",
				gv: "DOT (Graphviz)",
				ebnf: "EBNF",
				editorconfig: "EditorConfig",
				ejs: "EJS",
				etlua: "Embedded Lua templating",
				erb: "ERB",
				"excel-formula": "Excel Formula",
				xlsx: "Excel Formula",
				xls: "Excel Formula",
				fsharp: "F#",
				"firestore-security-rules": "Firestore security rules",
				ftl: "FreeMarker Template Language",
				gml: "GameMaker Language",
				gamemakerlanguage: "GameMaker Language",
				gap: "GAP (CAS)",
				gcode: "G-code",
				gdscript: "GDScript",
				gedcom: "GEDCOM",
				gettext: "gettext",
				po: "gettext",
				glsl: "GLSL",
				gn: "GN",
				gni: "GN",
				"linker-script": "GNU Linker Script",
				ld: "GNU Linker Script",
				"go-module": "Go module",
				"go-mod": "Go module",
				graphql: "GraphQL",
				hbs: "Handlebars",
				hs: "Haskell",
				hcl: "HCL",
				hlsl: "HLSL",
				http: "HTTP",
				hpkp: "HTTP Public-Key-Pins",
				hsts: "HTTP Strict-Transport-Security",
				ichigojam: "IchigoJam",
				"icu-message-format": "ICU Message Format",
				idr: "Idris",
				ignore: ".ignore",
				gitignore: ".gitignore",
				hgignore: ".hgignore",
				npmignore: ".npmignore",
				inform7: "Inform 7",
				javadoc: "JavaDoc",
				javadoclike: "JavaDoc-like",
				javastacktrace: "Java stack trace",
				jq: "JQ",
				jsdoc: "JSDoc",
				"js-extras": "JS Extras",
				json: "JSON",
				webmanifest: "Web App Manifest",
				json5: "JSON5",
				jsonp: "JSONP",
				jsstacktrace: "JS stack trace",
				"js-templates": "JS Templates",
				keepalived: "Keepalived Configure",
				kts: "Kotlin Script",
				kt: "Kotlin",
				kumir: "KuMir (КуМир)",
				kum: "KuMir (КуМир)",
				latex: "LaTeX",
				tex: "TeX",
				context: "ConTeXt",
				lilypond: "LilyPond",
				ly: "LilyPond",
				emacs: "Lisp",
				elisp: "Lisp",
				"emacs-lisp": "Lisp",
				llvm: "LLVM IR",
				log: "Log file",
				lolcode: "LOLCODE",
				magma: "Magma (CAS)",
				md: "Markdown",
				"markup-templating": "Markup templating",
				matlab: "MATLAB",
				maxscript: "MAXScript",
				mel: "MEL",
				metafont: "METAFONT",
				mongodb: "MongoDB",
				moon: "MoonScript",
				n1ql: "N1QL",
				n4js: "N4JS",
				n4jsd: "N4JS",
				"nand2tetris-hdl": "Nand To Tetris HDL",
				naniscript: "Naninovel Script",
				nani: "Naninovel Script",
				nasm: "NASM",
				neon: "NEON",
				nginx: "nginx",
				nsis: "NSIS",
				objectivec: "Objective-C",
				objc: "Objective-C",
				ocaml: "OCaml",
				opencl: "OpenCL",
				openqasm: "OpenQasm",
				qasm: "OpenQasm",
				parigp: "PARI/GP",
				objectpascal: "Object Pascal",
				psl: "PATROL Scripting Language",
				pcaxis: "PC-Axis",
				px: "PC-Axis",
				peoplecode: "PeopleCode",
				pcode: "PeopleCode",
				php: "PHP",
				phpdoc: "PHPDoc",
				"php-extras": "PHP Extras",
				"plant-uml": "PlantUML",
				plantuml: "PlantUML",
				plsql: "PL/SQL",
				powerquery: "PowerQuery",
				pq: "PowerQuery",
				mscript: "PowerQuery",
				powershell: "PowerShell",
				promql: "PromQL",
				properties: ".properties",
				protobuf: "Protocol Buffers",
				purebasic: "PureBasic",
				pbfasm: "PureBasic",
				purs: "PureScript",
				py: "Python",
				qsharp: "Q#",
				qs: "Q#",
				q: "Q (kdb+ database)",
				qml: "QML",
				rkt: "Racket",
				cshtml: "Razor C#",
				razor: "Razor C#",
				jsx: "React JSX",
				tsx: "React TSX",
				renpy: "Ren'py",
				rpy: "Ren'py",
				res: "ReScript",
				rest: "reST (reStructuredText)",
				robotframework: "Robot Framework",
				robot: "Robot Framework",
				rb: "Ruby",
				sas: "SAS",
				sass: "Sass (Sass)",
				scss: "Sass (Scss)",
				"shell-session": "Shell session",
				"sh-session": "Shell session",
				shellsession: "Shell session",
				sml: "SML",
				smlnj: "SML/NJ",
				solidity: "Solidity (Ethereum)",
				sol: "Solidity (Ethereum)",
				"solution-file": "Solution file",
				sln: "Solution file",
				soy: "Soy (Closure Template)",
				sparql: "SPARQL",
				rq: "SPARQL",
				"splunk-spl": "Splunk SPL",
				sqf: "SQF: Status Quo Function (Arma 3)",
				sql: "SQL",
				stata: "Stata Ado",
				iecst: "Structured Text (IEC 61131-3)",
				supercollider: "SuperCollider",
				sclang: "SuperCollider",
				systemd: "Systemd configuration file",
				"t4-templating": "T4 templating",
				"t4-cs": "T4 Text Templates (C#)",
				t4: "T4 Text Templates (C#)",
				"t4-vb": "T4 Text Templates (VB)",
				tap: "TAP",
				tt2: "Template Toolkit 2",
				toml: "TOML",
				trickle: "trickle",
				troy: "troy",
				trig: "TriG",
				ts: "TypeScript",
				tsconfig: "TSConfig",
				uscript: "UnrealScript",
				uc: "UnrealScript",
				uorazor: "UO Razor Script",
				uri: "URI",
				url: "URL",
				vbnet: "VB.Net",
				vhdl: "VHDL",
				vim: "vim",
				"visual-basic": "Visual Basic",
				vba: "VBA",
				vb: "Visual Basic",
				wasm: "WebAssembly",
				"web-idl": "Web IDL",
				webidl: "Web IDL",
				wgsl: "WGSL",
				wiki: "Wiki markup",
				wolfram: "Wolfram language",
				nb: "Mathematica Notebook",
				wl: "Wolfram language",
				xeoracube: "XeoraCube",
				"xml-doc": "XML doc (.net)",
				xojo: "Xojo (REALbasic)",
				xquery: "XQuery",
				yaml: "YAML",
				yml: "YAML",
				yang: "YANG",
			}
			Prism.plugins.toolbar.registerButton("show-language", function (a) {
				var t = a.element.parentNode
				if (t && /pre/i.test(t.nodeName)) {
					var o,
						s =
							t.getAttribute("data-language") ||
							e[a.language] ||
							((o = a.language)
								? (o.substring(0, 1).toUpperCase() + o.substring(1)).replace(/s(?=cript)/, "S")
								: o)
					if (s) {
						var r = document.createElement("span")
						return (r.textContent = s), r
					}
				}
			})
		} else console.warn("Show Languages plugin loaded before Toolbar plugin.")
})()
!(function () {
	function t(t) {
		var e = document.createElement("textarea")
		;(e.value = t.getText()),
			(e.style.top = "0"),
			(e.style.left = "0"),
			(e.style.position = "fixed"),
			document.body.appendChild(e),
			e.focus(),
			e.select()
		try {
			var o = document.execCommand("copy")
			setTimeout(function () {
				o ? t.success() : t.error()
			}, 1)
		} catch (e) {
			setTimeout(function () {
				t.error(e)
			}, 1)
		}
		document.body.removeChild(e)
	}
	"undefined" != typeof Prism &&
		"undefined" != typeof document &&
		(Prism.plugins.toolbar
			? Prism.plugins.toolbar.registerButton("copy-to-clipboard", function (e) {
					var o = e.element,
						n = (function (t) {
							var e = {
								copy: "Copy",
								"copy-error": "Press Ctrl+C to copy",
								"copy-success": "Copied!",
								"copy-timeout": 5e3,
							}
							for (var o in e) {
								for (var n = "data-prismjs-" + o, c = t; c && !c.hasAttribute(n); )
									c = c.parentElement
								c && (e[o] = c.getAttribute(n))
							}
							return e
						})(o),
						c = document.createElement("button")
					;(c.className = "copy-to-clipboard-button"), c.setAttribute("type", "button")
					var r = document.createElement("span")
					return (
						c.appendChild(r),
						u("copy"),
						(function (e, o) {
							e.addEventListener("click", function () {
								!(function (e) {
									navigator.clipboard
										? navigator.clipboard.writeText(e.getText()).then(e.success, function () {
												t(e)
										  })
										: t(e)
								})(o)
							})
						})(c, {
							getText: function () {
								return o.textContent
							},
							success: function () {
								u("copy-success"), i()
							},
							error: function () {
								u("copy-error"),
									setTimeout(function () {
										!(function (t) {
											window.getSelection().selectAllChildren(t)
										})(o)
									}, 1),
									i()
							},
						}),
						c
					)
					function i() {
						setTimeout(function () {
							u("copy")
						}, n["copy-timeout"])
					}
					function u(t) {
						;(r.textContent = n[t]), c.setAttribute("data-copy-state", t)
					}
			  })
			: console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))
})()
