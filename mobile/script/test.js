/**
* Created by sunjian on 2015/6/10.
*/
var Sun = { name: 'H5播放器',author:"sunjian",number:"1.0" };
/*! jQuery v2.0.0 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],f="2.0.0",p=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=f.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return p.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,f,p,h,d,g,m,y="sizzle"+-new Date,v=e.document,b={},w=0,T=0,C=ot(),k=ot(),N=ot(),E=!1,S=function(){return 0},j=typeof undefined,D=1<<31,A=[],L=A.pop,q=A.push,H=A.push,O=A.slice,F=A.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=M.replace("w","w#"),$="\\["+R+"*("+M+")"+R+"*(?:([*^$|!~]?=)"+R+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+R+"*\\]",B=":("+M+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",I=RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),z=RegExp("^"+R+"*,"+R+"*"),_=RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),X=RegExp(R+"*[+~]"),U=RegExp("="+R+"*([^\\]'\"]*)"+R+"*\\]","g"),Y=RegExp(B),V=RegExp("^"+W+"$"),G={ID:RegExp("^#("+M+")"),CLASS:RegExp("^\\.("+M+")"),TAG:RegExp("^("+M.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+B),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),"boolean":RegExp("^(?:"+P+")$","i"),needsContext:RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},J=/^[^{]+\{\s*\[native \w/,Q=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,et=/'|\\/g,tt=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,nt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{H.apply(A=O.call(v.childNodes),v.childNodes),A[v.childNodes.length].nodeType}catch(rt){H={apply:A.length?function(e,t){q.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function it(e){return J.test(e+"")}function ot(){var e,t=[];return e=function(n,i){return t.push(n+=" ")>r.cacheLength&&delete e[t.shift()],e[n]=i}}function st(e){return e[y]=!0,e}function at(e){var t=c.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ut(e,t,n,r){var i,o,s,a,u,f,d,g,x,w;if((t?t.ownerDocument||t:v)!==c&&l(t),t=t||c,n=n||[],!e||"string"!=typeof e)return n;if(1!==(a=t.nodeType)&&9!==a)return[];if(p&&!r){if(i=Q.exec(e))if(s=i[1]){if(9===a){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&m(t,o)&&o.id===s)return n.push(o),n}else{if(i[2])return H.apply(n,t.getElementsByTagName(e)),n;if((s=i[3])&&b.getElementsByClassName&&t.getElementsByClassName)return H.apply(n,t.getElementsByClassName(s)),n}if(b.qsa&&(!h||!h.test(e))){if(g=d=y,x=t,w=9===a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(d=t.getAttribute("id"))?g=d.replace(et,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=f.length;while(u--)f[u]=g+mt(f[u]);x=X.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return H.apply(n,x.querySelectorAll(w)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(I,"$1"),t,n,r)}o=ut.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},l=ut.setDocument=function(e){var t=e?e.ownerDocument||e:v;return t!==c&&9===t.nodeType&&t.documentElement?(c=t,f=t.documentElement,p=!o(t),b.getElementsByTagName=at(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),b.attributes=at(function(e){return e.className="i",!e.getAttribute("className")}),b.getElementsByClassName=at(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),b.sortDetached=at(function(e){return 1&e.compareDocumentPosition(c.createElement("div"))}),b.getById=at(function(e){return f.appendChild(e).id=y,!t.getElementsByName||!t.getElementsByName(y).length}),b.getById?(r.find.ID=function(e,t){if(typeof t.getElementById!==j&&p){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},r.filter.ID=function(e){var t=e.replace(tt,nt);return function(e){return e.getAttribute("id")===t}}):(r.find.ID=function(e,t){if(typeof t.getElementById!==j&&p){var n=t.getElementById(e);return n?n.id===e||typeof n.getAttributeNode!==j&&n.getAttributeNode("id").value===e?[n]:undefined:[]}},r.filter.ID=function(e){var t=e.replace(tt,nt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),r.find.TAG=b.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=b.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&p?t.getElementsByClassName(e):undefined},d=[],h=[],(b.qsa=it(t.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+R+"*(?:value|"+P+")"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){var t=c.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&h.push("[*^$]="+R+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(b.matchesSelector=it(g=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){b.disconnectedMatch=g.call(e,"div"),g.call(e,"[s!='']:x"),d.push("!=",B)}),h=h.length&&RegExp(h.join("|")),d=d.length&&RegExp(d.join("|")),m=it(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,n){if(e===n)return E=!0,0;var r=n.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(n);return r?1&r||!b.sortDetached&&n.compareDocumentPosition(e)===r?e===t||m(v,e)?-1:n===t||m(v,n)?1:u?F.call(u,e)-F.call(u,n):0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],l=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:u?F.call(u,e)-F.call(u,n):0;if(o===s)return lt(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)l.unshift(r);while(a[i]===l[i])i++;return i?lt(a[i],l[i]):a[i]===v?-1:l[i]===v?1:0},c):c},ut.matches=function(e,t){return ut(e,null,null,t)},ut.matchesSelector=function(e,t){if((e.ownerDocument||e)!==c&&l(e),t=t.replace(U,"='$1']"),!(!b.matchesSelector||!p||d&&d.test(t)||h&&h.test(t)))try{var n=g.call(e,t);if(n||b.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return ut(t,c,null,[e]).length>0},ut.contains=function(e,t){return(e.ownerDocument||e)!==c&&l(e),m(e,t)},ut.attr=function(e,t){(e.ownerDocument||e)!==c&&l(e);var n=r.attrHandle[t.toLowerCase()],i=n&&n(e,t,!p);return i===undefined?b.attributes||!p?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null:i},ut.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ut.uniqueSort=function(e){var t,n=[],r=0,i=0;if(E=!b.detectDuplicates,u=!b.sortStable&&e.slice(0),e.sort(S),E){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return e};function lt(e,t){var n=t&&e,r=n&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ct(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}function ft(e,t,n){var r;return n?undefined:r=e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ht(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function dt(e){return st(function(t){return t=+t,st(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}i=ut.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r];r++)n+=i(t);return n},r=ut.selectors={cacheLength:50,createPseudo:st,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(tt,nt),e[3]=(e[4]||e[5]||"").replace(tt,nt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ut.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ut.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return G.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&Y.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(tt,nt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+R+")"+e+"("+R+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ut.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){f=t;while(f=f[g])if(a?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[y]||(m[y]={}),l=c[e]||[],h=l[0]===w&&l[1],p=l[0]===w&&l[2],f=h&&m.childNodes[h];while(f=++h&&f&&f[g]||(p=h=0)||d.pop())if(1===f.nodeType&&++p&&f===t){c[e]=[w,h,p];break}}else if(x&&(l=(t[y]||(t[y]={}))[e])&&l[0]===w)p=l[1];else while(f=++h&&f&&f[g]||(p=h=0)||d.pop())if((a?f.nodeName.toLowerCase()===v:1===f.nodeType)&&++p&&(x&&((f[y]||(f[y]={}))[e]=[w,p]),f===t))break;return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ut.error("unsupported pseudo: "+e);return i[y]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?st(function(e,n){var r,o=i(e,t),s=o.length;while(s--)r=F.call(e,o[s]),e[r]=!(n[r]=o[s])}):function(e){return i(e,0,n)}):i}},pseudos:{not:st(function(e){var t=[],n=[],r=s(e.replace(I,"$1"));return r[y]?st(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:st(function(e){return function(t){return ut(e,t).length>0}}),contains:st(function(e){return function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:st(function(e){return V.test(e||"")||ut.error("unsupported lang: "+e),e=e.replace(tt,nt).toLowerCase(),function(t){var n;do if(n=p?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===c.activeElement&&(!c.hasFocus||c.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Z.test(e.nodeName)},input:function(e){return K.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:dt(function(){return[0]}),last:dt(function(e,t){return[t-1]}),eq:dt(function(e,t,n){return[0>n?n+t:n]}),even:dt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:dt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:dt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:dt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=ht(t);function gt(e,t){var n,i,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=r.preFilter;while(a){(!n||(i=z.exec(a)))&&(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),n=!1,(i=_.exec(a))&&(n=i.shift(),o.push({value:n,type:i[0].replace(I," ")}),a=a.slice(n.length));for(s in r.filter)!(i=G[s].exec(a))||l[s]&&!(i=l[s](i))||(n=i.shift(),o.push({value:n,type:s,matches:i}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ut.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,r){var i=t.dir,o=r&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,r,a){var u,l,c,f=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,r,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[y]||(t[y]={}),(l=c[i])&&l[0]===f){if((u=l[1])===!0||u===n)return u===!0}else if(l=c[i]=[f],l[1]=e(t,r,a)||n,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[y]&&(r=bt(r)),i&&!i[y]&&(i=bt(i,o)),st(function(o,s,a,u){var l,c,f,p=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,p,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(f=l[c])&&(y[h[c]]=!(m[h[c]]=f))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(f=y[c])&&l.push(m[c]=f);i(null,y=[],l,u)}c=y.length;while(c--)(f=y[c])&&(l=i?F.call(o,f):p[c])>-1&&(o[l]=!(s[l]=f))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):H.apply(s,y)})}function wt(e){var t,n,i,o=e.length,s=r.relative[e[0].type],u=s||r.relative[" "],l=s?1:0,c=yt(function(e){return e===t},u,!0),f=yt(function(e){return F.call(t,e)>-1},u,!0),p=[function(e,n,r){return!s&&(r||n!==a)||((t=n).nodeType?c(e,n,r):f(e,n,r))}];for(;o>l;l++)if(n=r.relative[e[l].type])p=[yt(vt(p),n)];else{if(n=r.filter[e[l].type].apply(null,e[l].matches),n[y]){for(i=++l;o>i;i++)if(r.relative[e[i].type])break;return bt(l>1&&vt(p),l>1&&mt(e.slice(0,l-1)).replace(I,"$1"),n,i>l&&wt(e.slice(l,i)),o>i&&wt(e=e.slice(i)),o>i&&mt(e))}p.push(n)}return vt(p)}function Tt(e,t){var i=0,o=t.length>0,s=e.length>0,u=function(u,l,f,p,h){var d,g,m,y=[],v=0,x="0",b=u&&[],T=null!=h,C=a,k=u||s&&r.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(a=l!==c&&l,n=i);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,f)){p.push(d);break}T&&(w=N,n=++i)}o&&((d=!m&&d)&&v--,u&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,f);if(u){if(v>0)while(x--)b[x]||y[x]||(y[x]=L.call(p));y=xt(y)}H.apply(p,y),T&&!u&&y.length>0&&v+t.length>1&&ut.uniqueSort(p)}return T&&(w=N,a=C),b};return o?st(u):u}s=ut.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[y]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ut(e,t[r],n);return n}function kt(e,t,n,i){var o,a,u,l,c,f=gt(e);if(!i&&1===f.length){if(a=f[0]=f[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&p&&r.relative[a[1].type]){if(t=(r.find.ID(u.matches[0].replace(tt,nt),t)||[])[0],!t)return n;e=e.slice(a.shift().value.length)}o=G.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],r.relative[l=u.type])break;if((c=r.find[l])&&(i=c(u.matches[0].replace(tt,nt),X.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=i.length&&mt(a),!e)return H.apply(n,i),n;break}}}return s(e,f)(i,t,!p,n,X.test(e)),n}r.pseudos.nth=r.pseudos.eq;function Nt(){}Nt.prototype=r.filters=r.pseudos,r.setFilters=new Nt,b.sortStable=y.split("").sort(S).join("")===y,l(),[0,0].sort(S),b.detectDuplicates=E,at(function(e){if(e.innerHTML="<a href='#'></a>","#"!==e.firstChild.getAttribute("href")){var t="type|href|height|width".split("|"),n=t.length;while(n--)r.attrHandle[t[n]]=ft}}),at(function(e){if(null!=e.getAttribute("disabled")){var t=P.split("|"),n=t.length;while(n--)r.attrHandle[t[n]]=ct}}),x.find=ut,x.expr=ut.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ut.uniqueSort,x.text=ut.getText,x.isXMLDoc=ut.isXML,x.contains=ut.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(f){for(t=e.memory&&f,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(f[0],f[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!a||n&&!u||(r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))this.cache[i]=t;else for(r in t)o[r]=t[r]},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){return t===undefined||t&&"string"==typeof t&&n===undefined?this.get(e,t):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i=this.key(e),o=this.cache[i];if(t===undefined)this.cache[i]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):t in o?r=[t]:(r=x.camelCase(t),r=r in o?[r]:r.match(w)||[]),n=r.length;while(n--)delete o[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){delete this.cache[this.key(e)]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.substring(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);
x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,i="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,s=0,a=x(this),u=t,l=e.match(w)||[];while(o=l[s++])u=i?u:!a.hasClass(o),a[u?"addClass":"removeClass"](o)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i,o=x(this);1===this.nodeType&&(i=r?e.call(this,n,o.val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.boolean.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.boolean.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.boolean.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,f,p,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(p=x.event.special[d]||{},d=(o?p.delegateType:p.bindType)||d,p=x.event.special[d]||{},f=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,p.setup&&p.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,f):h.push(f),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){f=x.event.special[h]||{},h=(r?f.delegateType:f.bindType)||h,p=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&f.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,f,p,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),p=x.event.special[d]||{},i||!p.trigger||p.trigger.apply(r,n)!==!1)){if(!i&&!p.noBubble&&!x.isWindow(r)){for(l=p.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:p.bindType||d,f=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),f&&f.apply(a,n),f=c&&a[c],f&&x.acceptData(a)&&f.apply&&f.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||p._default&&p._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return 3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=x.expr.match.needsContext,Q={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return t=this,this.pushStack(x(e).filter(function(){for(r=0;i>r;r++)if(x.contains(t[r],this))return!0}));for(n=[],r=0;i>r;r++)x.find(e,this[r],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(Z(this,e||[],!0))},filter:function(e){return this.pushStack(Z(this,e||[],!1))},is:function(e){return!!e&&("string"==typeof e?J.test(e)?x(e,this.context).index(this[0])>=0:x.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],s=J.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function K(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return K(e,"nextSibling")},prev:function(e){return K(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(Q[e]||x.unique(i),"p"===e[0]&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function Z(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var et=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,tt=/<([\w:]+)/,nt=/<|&#?\w+;/,rt=/<(?:script|style|link)/i,it=/^(?:checkbox|radio)$/i,ot=/checked\s*(?:[^=]|=\s*.checked.)/i,st=/^$|\/(?:java|ecma)script/i,at=/^true\/(.*)/,ut=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,lt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};lt.optgroup=lt.option,lt.tbody=lt.tfoot=lt.colgroup=lt.caption=lt.col=lt.thead,lt.th=lt.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ct(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ct(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(gt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&ht(gt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(gt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!rt.test(e)&&!lt[(tt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(et,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(gt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=p.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,f=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&ot.test(d))return this.each(function(r){var i=f.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(gt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,gt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,pt),l=0;s>l;l++)a=o[l],st.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(ut,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=gt(a),o=gt(e),r=0,i=o.length;i>r;r++)mt(o[r],s[r]);if(t)if(n)for(o=o||gt(e),s=s||gt(a),r=0,i=o.length;i>r;r++)dt(o[r],s[r]);else dt(e,a);return s=gt(a,"script"),s.length>0&&ht(s,!u&&gt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,f=e.length,p=t.createDocumentFragment(),h=[];for(;f>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(nt.test(i)){o=o||p.appendChild(t.createElement("div")),s=(tt.exec(i)||["",""])[1].toLowerCase(),a=lt[s]||lt._default,o.innerHTML=a[1]+i.replace(et,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.firstChild;x.merge(h,o.childNodes),o=p.firstChild,o.textContent=""}else h.push(t.createTextNode(i));p.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=gt(p.appendChild(i),"script"),u&&ht(o),n)){l=0;while(i=o[l++])st.test(i.type||"")&&n.push(i)}return p},cleanData:function(e){var t,n,r,i=e.length,o=0,s=x.event.special;for(;i>o;o++){if(n=e[o],x.acceptData(n)&&(t=q.access(n)))for(r in t.events)s[r]?x.event.remove(n,r):x.removeEvent(n,r,t.handle);L.discard(n),q.discard(n)}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"text",async:!1,global:!1,success:x.globalEval})}});function ct(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function pt(e){var t=at.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function ht(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function dt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=x.extend({},o),l=o.events,q.set(t,s),l)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function gt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function mt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&it.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var yt,vt,xt=/^(none|table(?!-c[ea]).+)/,bt=/^margin/,wt=RegExp("^("+b+")(.*)$","i"),Tt=RegExp("^("+b+")(?!px)[a-z%]+$","i"),Ct=RegExp("^([+-])=("+b+")","i"),kt={BODY:"block"},Nt={position:"absolute",visibility:"hidden",display:"block"},Et={letterSpacing:0,fontWeight:400},St=["Top","Right","Bottom","Left"],jt=["Webkit","O","Moz","ms"];function Dt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=jt.length;while(i--)if(t=jt[i]+n,t in e)return t;return r}function At(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function Lt(t){return e.getComputedStyle(t,null)}function qt(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&At(r)&&(o[s]=q.access(r,"olddisplay",Pt(r.nodeName)))):o[s]||(i=At(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=Lt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return qt(this,!0)},hide:function(){return qt(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:At(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=yt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=Dt(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=Ct.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=Dt(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=yt(e,t,r)),"normal"===i&&t in Et&&(i=Et[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),yt=function(e,t,n){var r,i,o,s=n||Lt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Tt.test(a)&&bt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ht(e,t,n){var r=wt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ot(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+St[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+St[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+St[o]+"Width",!0,i))):(s+=x.css(e,"padding"+St[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+St[o]+"Width",!0,i)));return s}function Ft(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Lt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=yt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Tt.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ot(e,t,n||(s?"border":"content"),r,o)+"px"}function Pt(e){var t=o,n=kt[e];return n||(n=Rt(e,t),"none"!==n&&n||(vt=(vt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(vt[0].contentWindow||vt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Rt(e,t),vt.detach()),kt[e]=n),n}function Rt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&xt.test(x.css(e,"display"))?x.swap(e,Nt,function(){return Ft(e,t,r)}):Ft(e,t,r):undefined},set:function(e,n,r){var i=r&&Lt(e);return Ht(e,n,r?Ot(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},yt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=yt(e,t),Tt.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+St[r]+t]=o[r]||o[r-2]||o[0];return i}},bt.test(e)||(x.cssHooks[e+t].set=Ht)});var Mt=/%20/g,Wt=/\[\]$/,$t=/\r?\n/g,Bt=/^(?:submit|button|image|reset|file)$/i,It=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&It.test(this.nodeName)&&!Bt.test(e)&&(this.checked||!it.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace($t,"\r\n")}}):{name:t.name,value:n.replace($t,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)zt(n,e[n],t,i);return r.join("&").replace(Mt,"+")};function zt(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||Wt.test(e)?r(e,i):zt(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)zt(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var _t,Xt,Ut=x.now(),Yt=/\?/,Vt=/#.*$/,Gt=/([?&])_=[^&]*/,Jt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Qt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kt=/^(?:GET|HEAD)$/,Zt=/^\/\//,en=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,tn=x.fn.load,nn={},rn={},on="*/".concat("*");try{Xt=i.href}catch(sn){Xt=o.createElement("a"),Xt.href="",Xt=Xt.href}_t=en.exec(Xt.toLowerCase())||[];function an(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];
if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function un(e,t,n,r){var i={},o=e===rn;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function ln(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&tn)return tn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Xt,type:"GET",isLocal:Qt.test(_t[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":on,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?ln(ln(e,x.ajaxSettings),t):ln(x.ajaxSettings,e)},ajaxPrefilter:an(nn),ajaxTransport:an(rn),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),f=c.context||c,p=c.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Jt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Xt)+"").replace(Vt,"").replace(Zt,_t[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=en.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===_t[1]&&a[2]===_t[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(_t[3]||("http:"===_t[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),un(nn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Kt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Yt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Gt.test(r)?r.replace(Gt,"$1_="+Ut++):r+(Yt.test(r)?"&":"?")+"_="+Ut++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+on+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(f,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=un(rn,c,t,T)){T.readyState=1,u&&p.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=cn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(f,[m,C,T]):h.rejectWith(f,[T,C,y]),T.statusCode(g),g=undefined,u&&p.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(f,[T,C]),u&&(p.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function cn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var pn=[],hn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=pn.pop()||x.expando+"_"+Ut++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(hn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&hn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(hn,"$1"+i):t.jsonp!==!1&&(t.url+=(Yt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,pn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var dn=x.ajaxSettings.xhr(),gn={0:200,1223:204},mn=0,yn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in yn)yn[e]();yn=undefined}),x.support.cors=!!dn&&"withCredentials"in dn,x.support.ajax=dn=!!dn,x.ajaxTransport(function(e){var t;return x.support.cors||dn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete yn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(gn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=yn[o=mn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var vn,xn,bn=/^(?:toggle|show|hide)$/,wn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Tn=/queueHooks$/,Cn=[Dn],kn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=wn.exec(t),s=i.cur(),a=+s||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(x.cssNumber[e]?"":"px"),"px"!==r&&a){a=x.css(i.elem,e,!0)||n||1;do u=u||".5",a/=u,x.style(i.elem,e,a+r);while(u!==(u=i.cur()/s)&&1!==u&&--l)}i.unit=r,i.start=a,i.end=o[1]?a+(o[1]+1)*n:n}return i}]};function Nn(){return setTimeout(function(){vn=undefined}),vn=x.now()}function En(e,t){x.each(t,function(t,n){var r=(kn[t]||[]).concat(kn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function Sn(e,t,n){var r,i,o=0,s=Cn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=vn||Nn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:vn||Nn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(jn(c,l.opts.specialEasing);s>o;o++)if(r=Cn[o].call(l,e,c,l.opts))return r;return En(l,c),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function jn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(Sn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],kn[n]=kn[n]||[],kn[n].unshift(t)},prefilter:function(e,t){t?Cn.unshift(e):Cn.push(e)}});function Dn(e,t,n){var r,i,o,s,a,u,l,c,f,p=this,h=e.style,d={},g=[],m=e.nodeType&&At(e);n.queue||(c=x._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,f=c.empty.fire,c.empty.fire=function(){c.unqueued||f()}),c.unqueued++,p.always(function(){p.always(function(){c.unqueued--,x.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),a=q.get(e,"fxshow");for(r in t)if(o=t[r],bn.exec(o)){if(delete t[r],u=u||"toggle"===o,o===(m?"hide":"show")){if("show"!==o||a===undefined||a[r]===undefined)continue;m=!0}g.push(r)}if(s=g.length){a=q.get(e,"fxshow")||q.access(e,"fxshow",{}),"hidden"in a&&(m=a.hidden),u&&(a.hidden=!m),m?x(e).show():p.done(function(){x(e).hide()}),p.done(function(){var t;q.remove(e,"fxshow");for(t in d)x.style(e,t,d[t])});for(r=0;s>r;r++)i=g[r],l=p.createTween(i,m?a[i]:0),d[i]=a[i]||x.style(e,i),i in a||(a[i]=l.start,m&&(l.end=l.start,l.start="width"===i||"height"===i?1:0))}}function An(e,t,n,r,i){return new An.prototype.init(e,t,n,r,i)}x.Tween=An,An.prototype={constructor:An,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=An.propHooks[this.prop];return e&&e.get?e.get(this):An.propHooks._default.get(this)},run:function(e){var t,n=An.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):An.propHooks._default.set(this),this}},An.prototype.init.prototype=An.prototype,An.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},An.propHooks.scrollTop=An.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Ln(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(At).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=Sn(this,x.extend({},e),o);s.finish=function(){t.stop(!0)},(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Tn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function Ln(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=St[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:Ln("show"),slideUp:Ln("hide"),slideToggle:Ln("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=An.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(vn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),vn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){xn||(xn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(xn),xn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=qn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),f=x(e),p={};"static"===c&&(e.style.position="relative"),a=f.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+i),"using"in t?t.using.call(e,p):f.css(p)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=qn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function qn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
/* **********************************************
Begin tweenmax.min.js
********************************************** */

(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(e,t,n){var r=function(e,t,r){n.call(this,e,t,r),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0},i=function(e){return e.jquery||"function"==typeof e.each&&e[0]&&e[0].nodeType&&
e[0].style},s=function(e){var t=[];return e.each(function(){t.push(this)}),t},o=r.prototype=n.to({},.1,{}),u=[];r.version="1.9.5",o.constructor=r,o.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=n.killTweensOf,r.getTweensOf=n.getTweensOf,r.ticker=n.ticker,o.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),n.prototype.invalidate.call(this)},o.updateTo=function(e,t){var r,i=this.ratio;t&&this.timeline&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(r in e)this.vars[r]=e[r];if(this._initted)if(t)this._initted=!1;else if(this._notifyPluginsOfEnabled&&this._firstPT&&n._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var s=this._time;this.render(0,!0,!1),this._initted=!1,this.render(s,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var o,u=1/(1-i),a=this._firstPT;a;)o=a.s+a.c,a.c*=u,a.s=o-a.c,a=a._next}return this},o.render=function(e,t,n){var r,i,s,o,a,f,l,c=this._dirty?this.totalDuration():this._totalDuration,h=this._time,p=this._totalTime,d=this._cycle;if(e>=c?(this._totalTime=c,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(r=!0,i="onComplete"),0===this._duration&&((0===e||0>this._rawPrevTime)&&this._rawPrevTime!==e&&(n=!0,this._rawPrevTime>0&&(i="onReverseComplete")),this._rawPrevTime=e)):1e-7>e?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==p||0===this._duration&&this._rawPrevTime>0)&&(i="onReverseComplete",r=this._reversed),0>e?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(n=!0),this._rawPrevTime=e)):this._initted||(n=!0)):(this._totalTime=this._time=e,0!==this._repeat&&(o=this._duration+this._repeatDelay,this._cycle=this._totalTime/o>>0,0!==this._cycle&&this._cycle===this._totalTime/o&&this._cycle--,this._time=this._totalTime-this._cycle*o,this._yoyo&&0!==(1&this._cycle)&&(this._time=this._duration-this._time),this._time>this._duration?this._time=this._duration:0>this._time&&(this._time=0)),this._easeType?(a=this._time/this._duration,f=this._easeType,l=this._easePower,(1===f||3===f&&a>=.5)&&(a=1-a),3===f&&(a*=2),1===l?a*=a:2===l?a*=a*a:3===l?a*=a*a*a:4===l&&(a*=a*a*a*a),this.ratio=1===f?1-a:2===f?a:.5>this._time/this._duration?a/2:1-a/2):this.ratio=this._ease.getRatio(this._time/this._duration)),h===this._time&&!n)return p!==this._totalTime&&this._onUpdate&&(t||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||u)),void 0;if(!this._initted){if(this._init(),!this._initted)return;this._time&&!r?this.ratio=this._ease.getRatio(this._time/this._duration):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||this._paused||(this._active=!0),0===p&&(this._startAt&&(e>=0?this._startAt.render(e,t,n):i||(i="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===this._duration)&&(t||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||u))),s=this._firstPT;s;)s.f?s.t[s.p](s.c*this.ratio+s.s):s.t[s.p]=s.c*this.ratio+s.s,s=s._next;this._onUpdate&&(0>e&&this._startAt&&this._startAt.render(e,t,n),t||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||u)),this._cycle!==d&&(t||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||u)),i&&(this._gc||(0>e&&this._startAt&&!this._onUpdate&&this._startAt.render(e,t,n),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[i]&&this.vars[i].apply(this.vars[i+"Scope"]||this,this.vars[i+"Params"]||u)))},r.to=function(e,t,n){return new r(e,t,n)},r.from=function(e,t,n){return n.runBackwards=!0,n.immediateRender=0!=n.immediateRender,new r(e,t,n)},r.fromTo=function(e,t,n,i){return i.startAt=n,i.immediateRender=0!=i.immediateRender&&0!=n.immediateRender,new r(e,t,i)},r.staggerTo=r.allTo=function(e,t,o,a,f,l,c){a=a||0;var h,p,d,v,m=o.delay||0,g=[],y=function(){o.onComplete&&o.onComplete.apply(o.onCompleteScope||this,o.onCompleteParams||u),f.apply(c||this,l||u)};for(e instanceof Array||("string"==typeof e&&(e=n.selector(e)||e),i(e)&&(e=s(e))),h=e.length,d=0;h>d;d++){p={};for(v in o)p[v]=o[v];p.delay=m,d===h-1&&f&&(p.onComplete=y),g[d]=new r(e[d],t,p),m+=a}return g},r.staggerFrom=r.allFrom=function(e,t,n,i,s,o,u){return n.runBackwards=!0,n.immediateRender=0!=n.immediateRender,r.staggerTo(e,t,n,i,s,o,u)},r.staggerFromTo=r.allFromTo=function(e,t,n,i,s,o,u,a){return i.startAt=n,i.immediateRender=0!=i.immediateRender&&0!=n.immediateRender,r.staggerTo(e,t,i,s,o,u,a)},r.delayedCall=function(e,t,n,i,s){return new r(t,0,{delay:e,onComplete:t,onCompleteParams:n,onCompleteScope:i,onReverseComplete:t,onReverseCompleteParams:n,onReverseCompleteScope:i,immediateRender:!1,useFrames:s,overwrite:0})},r.set=function(e,t){return new r(e,0,t)},r.isTweening=function(e){for(var t,r=n.getTweensOf(e),i=r.length;--i>-1;)if(t=r[i],t._active||t._startTime===t._timeline._time&&t._timeline._active)return!0;return!1};var a=function(e,t){for(var r=[],i=0,s=e._first;s;)s instanceof n?r[i++]=s:(t&&(r[i++]=s),r=r.concat(a(s,t)),i=r.length),s=s._next;return r},f=r.getAllTweens=function(t){return a(e._rootTimeline,t).concat(a(e._rootFramesTimeline,t))};r.killAll=function(e,n,r,i){null==n&&(n=!0),null==r&&(r=!0);var s,o,u,a=f(0!=i),l=a.length,c=n&&r&&i;for(u=0;l>u;u++)o=a[u],(c||o instanceof t||(s=o.target===o.vars.onComplete)&&r||n&&!s)&&(e?o.totalTime(o.totalDuration()):o._enabled(!1,!1))},r.killChildTweensOf=function(e,t){if(null!=e){var o,u,a,f,l,c=n._tweenLookup;if("string"==typeof e&&(e=n.selector(e)||e),i(e)&&(e=s(e)),e instanceof Array)for(f=e.length;--f>-1;)r.killChildTweensOf(e[f],t);else{o=[];for(a in c)for(u=c[a].target.parentNode;u;)u===e&&(o=o.concat(c[a].tweens)),u=u.parentNode;for(l=o.length,f=0;l>f;f++)t&&o[f].totalTime(o[f].totalDuration()),o[f]._enabled(!1,!1)}}};var l=function(e,n,r,i){void 0===n&&(n=!0),void 0===r&&(r=!0);for(var s,o,u=f(i),a=n&&r&&i,l=u.length;--l>-1;)o=u[l],(a||o instanceof t||(s=o.target===o.vars.onComplete)&&r||n&&!s)&&o.paused(e)};return r.pauseAll=function(e,t,n){l(!0,e,t,n)},r.resumeAll=function(e,t,n){l(!1,e,t,n)},o.progress=function(e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-e:e)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},o.totalProgress=function(e){return arguments.length?this.totalTime(this.totalDuration()*e,!1):this._totalTime/this.totalDuration()},o.time=function(e,t){return arguments.length?(this._dirty&&this.totalDuration(),e>this._duration&&(e=this._duration),this._yoyo&&0!==(1&this._cycle)?e=this._duration-e+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(e+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(e,t)):this._time},o.duration=function(t){return arguments.length?e.prototype.duration.call(this,t):this._duration},o.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},o.repeat=function(e){return arguments.length?(this._repeat=e,this._uncache(!0)):this._repeat},o.repeatDelay=function(e){return arguments.length?(this._repeatDelay=e,this._uncache(!0)):this._repeatDelay},o.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},r},!0),window._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(e,t,n){var r=function(e){t.call(this,e),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;for(var n,r,s=this.vars,o=i.length;--o>-1;)if(r=s[i[o]])for(n=r.length;--n>-1;)"{self}"===r[n]&&(r=s[i[o]]=r.concat(),r[n]=this);s.tweens instanceof Array&&this.add(s.tweens,0,s.align,s.stagger)},i=["onStartParams","onUpdateParams","onCompleteParams","onReverseCompleteParams","onRepeatParams"],s=[],o=function(e){var t,n={};for(t in e)n[t]=e[t];return n},u=r.prototype=new t;return r.version="1.9.5",u.constructor=r,u.kill()._gc=!1,u.to=function(e,t,r,i){return this.add(new n(e,t,r),i)},u.from=function(e,t,r,i){return this.add(n.from(e,t,r),i)},u.fromTo=function(e,t,r,i,s){return this.add(n.fromTo(e,t,r,i),s)},u.staggerTo=function(e,t,i,s,u,f,l,c){var h,p,d=new r({onComplete:f,onCompleteParams:l,onCompleteScope:c});for("string"==typeof e&&(e=n.selector(e)||e),!(e instanceof Array)&&"function"==typeof e.each&&e[0]&&e[0].nodeType&&e[0].style&&(p=[],e.each(function(){p.push(this)}),e=p),s=s||0,h=0;e.length>h;h++)i.startAt&&(i.startAt=o(i.startAt)),d.add(new n(e[h],t,o(i)),h*s);return this.add(d,u)},u.staggerFrom=function(e,t,n,r,i,s,o,u){return n.immediateRender=0!=n.immediateRender,n.runBackwards=!0,this.staggerTo(e,t,n,r,i,s,o,u)},u.staggerFromTo=function(e,t,n,r,i,s,o,u,a){return r.startAt=n,r.immediateRender=0!=r.immediateRender&&0!=n.immediateRender,this.staggerTo(e,t,r,i,s,o,u,a)},u.call=function(e,t,r,i){return this.add(n.delayedCall(0,e,t,r),i)},u.set=function(e,t,r){return r=this._parseTimeOrLabel(r,0,!0),null==t.immediateRender&&(t.immediateRender=r===this._time&&!this._paused),this.add(new n(e,0,t),r)},r.exportRoot=function(e,t){e=e||{},null==e.smoothChildTiming&&(e.smoothChildTiming=!0);var i,s,o=new r(e),u=o._timeline;for(null==t&&(t=!0),u._remove(o,!0),o._startTime=0,o._rawPrevTime=o._time=o._totalTime=u._time,i=u._first;i;)s=i._next,t&&i instanceof n&&i.target===i.vars.onComplete||o.add(i,i._startTime-i._delay),i=s;return u.add(o,0),o},u.add=function(i,s,o,u){var a,f,l,c,h;if("number"!=typeof s&&(s=this._parseTimeOrLabel(s,0,!0,i)),!(i instanceof e)){if(i instanceof Array){for(o=o||"normal",u=u||0,a=s,f=i.length,l=0;f>l;l++)(c=i[l])instanceof Array&&(c=new r({tweens:c})),this.add(c,a),"string"!=typeof c&&"function"!=typeof c&&("sequence"===o?a=c._startTime+c.totalDuration()/c._timeScale:"start"===o&&(c._startTime-=c.delay())),a+=u;return this._uncache(!0)}if("string"==typeof i)return this.addLabel(i,s);if("function"!=typeof i)throw"Cannot add "+i+" into the timeline: it is neither a tween, timeline, function, nor a string.";i=n.delayedCall(0,i)}if(t.prototype.add.call(this,i,s),this._gc&&!this._paused&&this._time===this._duration&&this._time<this.duration())for(h=this;h._gc&&h._timeline;)h._timeline.smoothChildTiming?h.totalTime(h._totalTime,!0):h._enabled(!0,!1),h=h._timeline;return this},u.remove=function(t){if(t instanceof e)return this._remove(t,!1);if(t instanceof Array){for(var n=t.length;--n>-1;)this.remove(t[n]);return this}return"string"==typeof t?this.removeLabel(t):this.kill(null,t)},u.append=function(e,t){return this.add(e,this._parseTimeOrLabel(null,t,!0,e))},u.insert=u.insertMultiple=function(e,t,n,r){return this.add(e,t||0,n,r)},u.appendMultiple=function(e,t,n,r){return this.add(e,this._parseTimeOrLabel(null,t,!0,e),n,r)},u.addLabel=function(e,t){return this._labels[e]=this._parseTimeOrLabel(t),this},u.removeLabel=function(e){return delete this._labels[e],this},u.getLabelTime=function(e){return null!=this._labels[e]?this._labels[e]:-1},u._parseTimeOrLabel=function(t,n,r,i){var s;if(i instanceof e&&i.timeline===this)this.remove(i);else if(i instanceof Array)for(s=i.length;--s>-1;)i[s]instanceof e&&i[s].timeline===this&&this.remove(i[s]);if("string"==typeof n)return this._parseTimeOrLabel(n,r&&"number"==typeof t&&null==this._labels[n]?t-this.duration():0,r);if(n=n||0,"string"!=typeof t||!isNaN(t)&&null==this._labels[t])null==t&&(t=this.duration());else{if(s=t.indexOf("="),-1===s)return null==this._labels[t]?r?this._labels[t]=this.duration()+n:n:this._labels[t]+n;n=parseInt(t.charAt(s-1)+"1",10)*Number(t.substr(s+1)),t=s>1?this._parseTimeOrLabel(t.substr(0,s-1),0,r):this.duration()}return Number(t)+n},u.seek=function(e,t){return this.totalTime("number"==typeof e?e:this._parseTimeOrLabel(e),t!==!1)},u.stop=function(){return this.paused(!0)},u.gotoAndPlay=function(e,t){return this.play(e,t)},u.gotoAndStop=function(e,t){return this.pause(e,t)},u.render=function(e,t,n){this._gc&&this._enabled(!0,!1),this._active=!this._paused;var r,i,o,u,a,f=this._dirty?this.totalDuration():this._totalDuration,l=this._time,c=this._startTime,h=this._timeScale,p=this._paused;if(e>=f?(this._totalTime=this._time=f,this._reversed||this._hasPausedChild()||(i=!0,u="onComplete",0===this._duration&&(0===e||0>this._rawPrevTime)&&this._rawPrevTime!==e&&this._first&&(a=!0,this._rawPrevTime>0&&(u="onReverseComplete"))),this._rawPrevTime=e,e=f+1e-6):1e-7>e?(this._totalTime=this._time=0,(0!==l||0===this._duration&&this._rawPrevTime>0)&&(u="onReverseComplete",i=this._reversed),0>e?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&this._first&&(a=!0)):this._initted||(a=!0),this._rawPrevTime=e,e=0):this._totalTime=this._time=this._rawPrevTime=e,this._time!==l&&this._first||n||a){if(this._initted||(this._initted=!0),0===l&&this.vars.onStart&&0!==this._time&&(t||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||s)),this._time>=l)for(r=this._first;r&&(o=r._next,!this._paused||p);)(r._active||r._startTime<=this._time&&!r._paused&&!r._gc)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(e-r._startTime)*r._timeScale,t,n):r.render((e-r._startTime)*r._timeScale,t,n)),r=o;else for(r=this._last;r&&(o=r._prev,!this._paused||p);)(r._active||l>=r._startTime&&!r._paused&&!r._gc)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(e-r._startTime)*r._timeScale,t,n):r.render((e-r._startTime)*r._timeScale,t,n)),r=o;this._onUpdate&&(t||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||s)),u&&(this._gc||(c===this._startTime||h!==this._timeScale)&&(0===this._time||f>=this.totalDuration())&&(i&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[u]&&this.vars[u].apply(this.vars[u+"Scope"]||this,this.vars[u+"Params"]||s)))}},u._hasPausedChild=function(){for(var e=this._first;e;){if(e._paused||e instanceof r&&e._hasPausedChild())return!0;e=e._next}return!1},u.getChildren=function(e,t,r,i){i=i||-9999999999;for(var s=[],o=this._first,u=0;o;)i>o._startTime||(o instanceof n?t!==!1&&(s[u++]=o):(r!==!1&&(s[u++]=o),e!==!1&&(s=s.concat(o.getChildren(!0,t,r)),u=s.length))),o=o._next;return s},u.getTweensOf=function(e,t){for(var r=n.getTweensOf(e),i=r.length,s=[],o=0;--i>-1;)(r[i].timeline===this||t&&this._contains(r[i]))&&(s[o++]=r[i]);return s},u._contains=function(e){for(var t=e.timeline;t;){if(t===this)return!0;t=t.timeline}return!1},u.shiftChildren=function(e,t,n){n=n||0;for(var r,i=this._first,s=this._labels;i;)i._startTime>=n&&(i._startTime+=e),i=i._next;if(t)for(r in s)s[r]>=n&&(s[r]+=e);return this._uncache(!0)},u._kill=function(e,t){if(!e&&!t)return this._enabled(!1,!1);for(var n=t?this.getTweensOf(t):this.getChildren(!0,!0,!1),r=n.length,i=!1;--r>-1;)n[r]._kill(e,t)&&(i=!0);return i},u.clear=function(e){var t=this.getChildren(!1,!0,!0),n=t.length;for(this._time=this._totalTime=0;--n>-1;)t[n]._enabled(!1,!1);return e!==!1&&(this._labels={}),this._uncache(!0)},u.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return this},u._enabled=function(e,n){if(e===this._gc)for(var r=this._first;r;)r._enabled(e,!0),r=r._next;return t.prototype._enabled.call(this,e,n)},u.progress=function(e){return arguments.length?this.totalTime(this.duration()*e,!1):this._time/this.duration()},u.duration=function(e){return arguments.length?(0!==this.duration()&&0!==e&&this.timeScale(this._duration/e),this):(this._dirty&&this.totalDuration(),this._duration)},u.totalDuration=function(e){if(!arguments.length){if(this._dirty){for(var t,n,r=0,i=this._last,s=999999999999;i;)t=i._prev,i._dirty&&i.totalDuration(),i._startTime>s&&this._sortChildren&&!i._paused?this.add(i,i._startTime-i._delay):s=i._startTime,0>i._startTime&&!i._paused&&(r-=i._startTime,this._timeline.smoothChildTiming&&(this._startTime+=i._startTime/this._timeScale),this.shiftChildren(-i._startTime,!1,-9999999999),s=0),n=i._startTime+i._totalDuration/i._timeScale,n>r&&(r=n),i=t;this._duration=this._totalDuration=r,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==e&&this.timeScale(this._totalDuration/e),this},u.usesFrames=function(){for(var t=this._timeline;t._timeline;)t=t._timeline;return t===e._rootFramesTimeline},u.rawTime=function(){return this._paused||0!==this._totalTime&&this._totalTime!==this._totalDuration?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},r},!0),window._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(e,t,n){var r=function(t){e.call(this,t),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},i=[],s=new n(null,null,1,0),o=function(e){for(;e;){if(e._paused)return!0;e=e._timeline}return!1},u=r.prototype=new e;return u.constructor=r,u.kill()._gc=!1,r.version="1.9.5",u.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),e.prototype.invalidate.call(this)},u.addCallback=function(e,n,r,i){return this.add(t.delayedCall(0,e,r,i),n)},u.removeCallback=function(e,t){if(null==t)this._kill(null,e);else for(var n=this.getTweensOf(e,!1),r=n.length,i=this._parseTimeOrLabel(t);--r>-1;)n[r]._startTime===i&&n[r]._enabled(!1,!1);return this},u.tweenTo=function(e,n){n=n||{};var r,o,u={ease:s,overwrite:2,useFrames:this.usesFrames(),immediateRender:!1};for(r in n)u[r]=n[r];return u.time=this._parseTimeOrLabel(e),o=new t(this,Math.abs(Number(u.time)-this._time)/this._timeScale||.001,u),u.onStart=function(){o.target.paused(!0),o.vars.time!==o.target.time()&&o.duration(Math.abs(o.vars.time-o.target.time())/o.target._timeScale),n.onStart&&n.onStart.apply(n.onStartScope||o,n.onStartParams||i)},o},u.tweenFromTo=function(e,t,n){n=n||{},e=this._parseTimeOrLabel(e),n.startAt={onComplete:this.seek,onCompleteParams:[e],onCompleteScope:this},n.immediateRender=n.immediateRender!==!1;var r=this.tweenTo(t,n);return r.duration(Math.abs(r.vars.time-e)/this._timeScale||.001)},u.render=function(e,t,n){this._gc&&this._enabled(!0,!1),this._active=!this._paused;var r,s,o,u,a,f,l=this._dirty?this.totalDuration():this._totalDuration,c=this._duration,h=this._time,p=this._totalTime,d=this._startTime,v=this._timeScale,m=this._rawPrevTime,g=this._paused,y=this._cycle;if(e>=l?(this._locked||(this._totalTime=l,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(s=!0,u="onComplete",0===c&&(0===e||0>this._rawPrevTime)&&this._rawPrevTime!==e&&this._first&&(a=!0,this._rawPrevTime>0&&(u="onReverseComplete"))),this._rawPrevTime=e,this._yoyo&&0!==(1&this._cycle)?this._time=e=0:(this._time=c,e=c+1e-6)):1e-7>e?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==h||0===c&&this._rawPrevTime>0&&!this._locked)&&(u="onReverseComplete",s=this._reversed),0>e?(this._active=!1,0===c&&this._rawPrevTime>=0&&this._first&&(a=!0)):this._initted||(a=!0),this._rawPrevTime=e,e=0):(this._time=this._rawPrevTime=e,this._locked||(this._totalTime=e,0!==this._repeat&&(f=c+this._repeatDelay,this._cycle=this._totalTime/f>>0,0!==this._cycle&&this._cycle===this._totalTime/f&&this._cycle--,this._time=this._totalTime-this._cycle*f,this._yoyo&&0!==(1&this._cycle)&&(this._time=c-this._time),this._time>c?(this._time=c,e=c+1e-6):0>this._time?this._time=e=0:e=this._time))),this._cycle!==y&&!this._locked){var b=this._yoyo&&0!==(1&y),w=b===(this._yoyo&&0!==(1&this._cycle)),E=this._totalTime,S=this._cycle,x=this._rawPrevTime,T=this._time;this._totalTime=y*c,y>this._cycle?b=!b:this._totalTime+=c,this._time=h,this._rawPrevTime=0===c?m-1e-5:m,this._cycle=y,this._locked=!0,h=b?0:c,this.render(h,t,0===c),t||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||i),w&&(h=b?c+1e-6:-0.000001,this.render(h,!0,!1)),this._time=T,this._totalTime=E,this._cycle=S,this._rawPrevTime=x,this._locked=!1}if(!(this._time!==h&&this._first||n||a))return p!==this._totalTime&&this._onUpdate&&(t||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||i)),void 0;if(this._initted||(this._initted=!0),0===p&&this.vars.onStart&&0!==this._totalTime&&(t||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||i)),this._time>=h)for(r=this._first;r&&(o=r._next,!this._paused||g);)(r._active||r._startTime<=this._time&&!r._paused&&!r._gc)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(e-r._startTime)*r._timeScale,t,n):r.render((e-r._startTime)*r._timeScale,t,n)),r=o;else for(r=this._last;r&&(o=r._prev,!this._paused||g);)(r._active||h>=r._startTime&&!r._paused&&!r._gc)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(e-r._startTime)*r._timeScale,t,n):r.render((e-r._startTime)*r._timeScale,t,n)),r=o;this._onUpdate&&(t||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||i)),u&&(this._locked||this._gc||(d===this._startTime||v!==this._timeScale)&&(0===this._time||l>=this.totalDuration())&&(s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[u]&&this.vars[u].apply(this.vars[u+"Scope"]||this,this.vars[u+"Params"]||i)))},u.getActive=function(e,t,n){null==e&&(e=!0),null==t&&(t=!0),null==n&&(n=!1);var r,i,s=[],u=this.getChildren(e,t,n),f=0,l=u.length;for(r=0;l>r;r++)i=u[r],i._paused||i._timeline._time>=i._startTime&&i._timeline._time<i._startTime+i._totalDuration/i._timeScale&&(o(i._timeline)||(s[f++]=i));return s},u.getLabelAfter=function(e){e||0!==e&&(e=this._time);var t,n=this.getLabelsArray(),r=n.length;for(t=0;r>t;t++)if(n[t].time>e)return n[t].name;return null},u.getLabelBefore=function(e){null==e&&(e=this._time);for(var t=this.getLabelsArray(),n=t.length;--n>-1;)if(e>t[n].time)return t[n].name;return null},u.getLabelsArray=function(){var e,t=[],n=0;for(e in this._labels)t[n++]={time:this._labels[e],name:e};return t.sort(function(e,t){return e.time-t.time}),t},u.progress=function(e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-e:e)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},u.totalProgress=function(e){return arguments.length?this.totalTime(this.totalDuration()*e,!1):this._totalTime/this.totalDuration()},u.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(e.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},u.time=function(e,t){return arguments.length?(this._dirty&&this.totalDuration(),e>this._duration&&(e=this._duration),this._yoyo&&0!==(1&this._cycle)?e=this._duration-e+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(e+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(e,t)):this._time},u.repeat=function(e){return arguments.length?(this._repeat=e,this._uncache(!0)):this._repeat},u.repeatDelay=function(e){return arguments.length?(this._repeatDelay=e,this._uncache(!0)):this._repeatDelay},u.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},u.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.getLabelBefore(this._time+1e-8)},r},!0),function(){var e=180/Math.PI,t=Math.PI/180,n=[],r=[],i=[],s={},o=function(e,t,n,r){this.a=e,this.b=t,this.c=n,this.d=r,this.da=r-e,this.ca=n-e,this.ba=t-e},u=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",a=function(e,t,n,r){var i={a:e},s={},o={},u={c:r},a=(e+t)/2,f=(t+n)/2,l=(n+r)/2,c=(a+f)/2,h=(f+l)/2,p=(h-c)/8;return i.b=a+(e-a)/4,s.b=c+p,i.c=s.a=(i.b+s.b)/2,s.c=o.a=(c+h)/2,o.b=h-p,u.b=l+(r-l)/4,o.c=u.a=(o.b+u.b)/2,[i,s,o,u]},f=function(e,t,s,o,u){var f,l,c,h,p,d,v,m,g,y,b,w,E,S=e.length-1,x=0,T=e[0].a;for(f=0;S>f;f++)p=e[x],l=p.a,c=p.d,h=e[x+1].d,u?(b=n[f],w=r[f],E=.25*(w+b)*t/(o?.5:i[f]||.5),d=c-(c-l)*(o?.5*t:0!==b?E/b:0),v=c+(h-c)*(o?.5*t:0!==w?E/w:0),m=c-(d+((v-d)*(3*b/(b+w)+.5)/4||0))):(d=c-.5*(c-l)*t,v=c+.5*(h-c)*t,m=c-(d+v)/2),d+=m,v+=m,p.c=g=d,p.b=0!==f?T:T=p.a+.6*(p.c-p.a),p.da=c-l,p.ca=g-l,p.ba=T-l,s?(y=a(l,T,g,c),e.splice(x,1,y[0],y[1],y[2],y[3]),x+=4):x++,T=v;p=e[x],p.b=T,p.c=T+.4*(p.d-T),p.da=p.d-p.a,p.ca=p.c-p.a,p.ba=T-p.a,s&&(y=a(p.a,T,p.c,p.d),e.splice(x,1,y[0],y[1],y[2],y[3]))},l=function(e,t,i,s){var u,a,f,l,c,h,p=[];if(s)for(e=[s].concat(e),a=e.length;--a>-1;)"string"==typeof (h=e[a][t])&&"="===h.charAt(1)&&(e[a][t]=s[t]+Number(h.charAt(0)+h.substr(2)));if(u=e.length-2,0>u)return p[0]=new o(e[0][t],0,0,e[-1>u?0:1][t]),p;for(a=0;u>a;a++)f=e[a][t],l=e[a+1][t],p[a]=new o(f,0,0,l),i&&(c=e[a+2][t],n[a]=(n[a]||0)+(l-f)*(l-f),r[a]=(r[a]||0)+(c-l)*(c-l));return p[a]=new o(e[a][t],0,0,e[a+1][t]),p},c=function(e,t,o,a,c,h){var p,d,v,m,g,y,b,w,E={},S=[],x=h||e[0];c="string"==typeof c?","+c+",":u,null==t&&(t=1);for(d in e[0])S.push(d);if(e.length>1){for(w=e[e.length-1],b=!0,p=S.length;--p>-1;)if(d=S[p],Math.abs(x[d]-w[d])>.05){b=!1;break}b&&(e=e.concat(),h&&e.unshift(h),e.push(e[1]),h=e[e.length-3])}for(n.length=r.length=i.length=0,p=S.length;--p>-1;)d=S[p],s[d]=-1!==c.indexOf(","+d+","),E[d]=l(e,d,s[d],h);for(p=n.length;--p>-1;)n[p]=Math.sqrt(n[p]),r[p]=Math.sqrt(r[p]);if(!a){for(p=S.length;--p>-1;)if(s[d])for(v=E[S[p]],y=v.length-1,m=0;y>m;m++)g=v[m+1].da/r[m]+v[m].da/n[m],i[m]=(i[m]||0)+g*g;for(p=i.length;--p>-1;)i[p]=Math.sqrt(i[p])}for(p=S.length,m=o?4:1;--p>-1;)d=S[p],v=E[d],f(v,t,o,a,s[d]),b&&(v.splice(0,m),v.splice(v.length-m,m));return E},h=function(e,t,n){t=t||"soft";var r,i,s,u,a,f,l,c,h,p,d,v={},m="cubic"===t?3:2,g="soft"===t,y=[];if(g&&n&&(e=[n].concat(e)),null==e||m+1>e.length)throw"invalid Bezier data";for(h in e[0])y.push(h);for(f=y.length;--f>-1;){for(h=y[f],v[h]=a=[],p=0,c=e.length,l=0;c>l;l++)r=null==n?e[l][h]:"string"==typeof (d=e[l][h])&&"="===d.charAt(1)?n[h]+Number(d.charAt(0)+d.substr(2)):Number(d),g&&l>1&&c-1>l&&(a[p++]=(r+a[p-2])/2),a[p++]=r;for(c=p-m+1,p=0,l=0;c>l;l+=m)r=a[l],i=a[l+1],s=a[l+2],u=2===m?0:a[l+3],a[p++]=d=3===m?new o(r,i,s,u):new o(r,(2*i+r)/3,(2*i+s)/3,s);a.length=p}return v},p=function(e,t,n){for(var r,i,s,o,u,a,f,l,c,h,p,d=1/n,v=e.length;--v>-1;)for(h=e[v],s=h.a,o=h.d-s,u=h.c-s,a=h.b-s,r=i=0,l=1;n>=l;l++)f=d*l,c=1-f,r=i-(i=(f*f*o+3*c*(f*u+c*a))*f),p=v*n+l-1,t[p]=(t[p]||0)+r*r},d=function(e,t){t=t>>0||6;var n,r,i,s,o=[],u=[],a=0,f=0,l=t-1,c=[],h=[];for(n in e)p(e[n],o,t);for(i=o.length,r=0;i>r;r++)a+=Math.sqrt(o[r]),s=r%t,h[s]=a,s===l&&(f+=a,s=r/t>>0,c[s]=h,u[s]=f,a=0,h=[]);return{length:f,lengths:u,segments:c}},v=window._gsDefine.plugin({propName:"bezier",priority:-1,API:2,global:!0,init:function(e,t,n){this._target=e,t instanceof Array&&(t={values:t}),this._func={},this._round={},this._props=[],this._timeRes=null==t.timeResolution?6:parseInt(t.timeResolution,10);var r,i,s,o,u,a=t.values||[],f={},l=a[0],p=t.autoRotate||n.vars.orientToBezier;this._autoRotate=p?p instanceof Array?p:[["x","y","rotation",p===!0?0:Number(p)||0]]:null;for(r in l)this._props.push(r);for(s=this._props.length;--s>-1;)r=this._props[s],this._overwriteProps.push(r),i=this._func[r]="function"==typeof e[r],f[r]=i?e[r.indexOf("set")||"function"!=typeof e["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(e[r]),u||f[r]!==a[0][r]&&(u=f);if(this._beziers="cubic"!==t.type&&"quadratic"!==t.type&&"soft"!==t.type?c(a,isNaN(t.curviness)?1:t.curviness,!1,"thruBasic"===t.type,t.correlate,u):h(a,t.type,f),this._segCount=this._beziers[r].length,this._timeRes){var v=d(this._beziers,this._timeRes);this._length=v.length,this._lengths=v.lengths,this._segments=v.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(p=this._autoRotate)for(p[0]instanceof Array||(this._autoRotate=p=[p]),s=p.length;--s>-1;)for(o=0;3>o;o++)r=p[s][o],this._func[r]="function"==typeof e[r]?e[r.indexOf("set")||"function"!=typeof e["get"+r.substr(3)]?r:"get"+r.substr(3)]:!1;return!0},set:function(t){var n,r,i,s,o,u,a,f,l,c,h=this._segCount,p=this._func,d=this._target;if(this._timeRes){if(l=this._lengths,c=this._curSeg,t*=this._length,i=this._li,t>this._l2&&h-1>i){for(f=h-1;f>i&&t>=(this._l2=l[++i]););this._l1=l[i-1],this._li=i,this._curSeg=c=this._segments[i],this._s2=c[this._s1=this._si=0]}else if(this._l1>t&&i>0){for(;i>0&&(this._l1=l[--i])>=t;);0===i&&this._l1>t?this._l1=0:i++,this._l2=l[i],this._li=i,this._curSeg=c=this._segments[i],this._s1=c[(this._si=c.length-1)-1]||0,this._s2=c[this._si]}if(n=i,t-=this._l1,i=this._si,t>this._s2&&c.length-1>i){for(f=c.length-1;f>i&&t>=(this._s2=c[++i]););this._s1=c[i-1],this._si=i}else if(this._s1>t&&i>0){for(;i>0&&(this._s1=c[--i])>=t;);0===i&&this._s1>t?this._s1=0:i++,this._s2=c[i],this._si=i}u=(i+(t-this._s1)/(this._s2-this._s1))*this._prec}else n=0>t?0:t>=1?h-1:h*t>>0,u=(t-n*(1/h))*h;for(r=1-u,i=this._props.length;--i>-1;)s=this._props[i],o=this._beziers[s][n],a=(u*u*o.da+3*r*(u*o.ca+r*o.ba))*u+o.a,this._round[s]&&(a=a+(a>0?.5:-0.5)>>0),p[s]?d[s](a):d[s]=a;if(this._autoRotate){var v,m,g,y,b,w,E,S=this._autoRotate;for(i=S.length;--i>-1;)s=S[i][2],w=S[i][3]||0,E=S[i][4]===!0?1:e,o=this._beziers[S[i][0]],v=this._beziers[S[i][1]],o&&v&&(o=o[n],v=v[n],m=o.a+(o.b-o.a)*u,y=o.b+(o.c-o.b)*u,m+=(y-m)*u,y+=(o.c+(o.d-o.c)*u-y)*u,g=v.a+(v.b-v.a)*u,b=v.b+(v.c-v.b)*u,g+=(b-g)*u,b+=(v.c+(v.d-v.c)*u-b)*u,a=Math.atan2(b-g,y-m)*E+w,p[s]?d[s](a):d[s]=a)}}}),m=v.prototype;v.bezierThrough=c,v.cubicToQuadratic=a,v._autoCSS=!0,v.quadraticToCubic=function(e,t,n){return new o(e,(2*t+e)/3,(2*t+n)/3,n)},v._cssRegister=function(){var e=window._gsDefine.globals.CSSPlugin;if(e){var n=e._internals,r=n._parseToProxy,i=n._setPluginRatio,s=n.CSSPropTween;n._registerComplexSpecialProp("bezier",{parser:function(e,n,o,u,a,f){n instanceof Array&&(n={values:n}),f=new v;var l,c,h,p=n.values,d=p.length-1,m=[],g={};if(0>d)return a;for(l=0;d>=l;l++)h=r(e,p[l],u,a,f,d!==l),m[l]=h.end;for(c in n)g[c]=n[c];return g.values=m,a=new s(e,"bezier",0,0,h.pt,2),a.data=h,a.plugin=f,a.setRatio=i,0===g.autoRotate&&(g.autoRotate=!0),!g.autoRotate||g.autoRotate instanceof Array||(l=g.autoRotate===!0?0:Number(g.autoRotate)*t,g.autoRotate=null!=h.end.left?[["left","top","rotation",l,!0]]:null!=h.end.x?[["x","y","rotation",l,!0]]:!1),g.autoRotate&&(u._transform||u._enableTransforms(!1),h.autoRotate=u._target._gsTransform),f._onInitTween(h.proxy,g,u._tween),a}})}},m._roundProps=function(e,t){for(var n=this._overwriteProps,r=n.length;--r>-1;)(e[n[r]]||e.bezier||e.bezierThrough)&&(this._round[n[r]]=t)},m._kill=function(e){var t,n,r=this._props;for(t in this._beziers)if(t in e)for(delete this._beziers[t],delete this._func[t],n=r.length;--n>-1;)r[n]===t&&r.splice(n,1);return this._super._kill.call(this,e)}}(),window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(e,t){var n,r,i,s,o=function(){e.call(this,"css"),this._overwriteProps.length=0},u={},a=o.prototype=new e("css");a.constructor=o,o.version="1.9.5",o.API=2,o.defaultTransformPerspective=0,a="px",o.suffixMap={top:a,right:a,bottom:a,left:a,width:a,height:a,fontSize:a,padding:a,margin:a,perspective:a};var f,l,c,h,p,d,v=/(?:\d|\-\d|\.\d|\-\.\d)+/g,m=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/[^\d\-\.]/g,b=/(?:\d|\-|\+|=|#|\.)*/g,w=/opacity *= *([^)]*)/,E=/opacity:([^;]*)/,S=/alpha\(opacity *=.+?\)/i,x=/^(rgb|hsl)/,T=/([A-Z])/g,N=/-([a-z])/gi,C=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,k=function(e,t){return t.toUpperCase()},L=/(?:Left|Right|Width)/i,A=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,M=/,(?=[^\)]*(?:\(|$))/gi,_=Math.PI/180,D=180/Math.PI,P={},H=document,B=H.createElement("div"),j=H.createElement("img"),F=o._internals={_specialProps:u},I=navigator.userAgent,q=function(){var e,t=I.indexOf("Android"),n=H.createElement("div");return c=-1!==I.indexOf("Safari")&&-1===I.indexOf("Chrome")&&(-1===t||Number(I.substr(t+8,1))>3),p=c&&6>Number(I.substr(I.indexOf("Version/")+8,1)),h=-1!==I.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(I
),d=parseFloat(RegExp.$1),n.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",e=n.getElementsByTagName("a")[0],e?/^0.55/.test(e.style.opacity):!1}(),R=function(e){return w.test("string"==typeof e?e:(e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?parseFloat(RegExp.$1)/100:1},U=function(e){window.console&&console.log(e)},z="",W="",X=function(e,t){t=t||B;var n,r,i=t.style;if(void 0!==i[e])return e;for(e=e.charAt(0).toUpperCase()+e.substr(1),n=["O","Moz","ms","Ms","Webkit"],r=5;--r>-1&&void 0===i[n[r]+e];);return r>=0?(W=3===r?"ms":n[r],z="-"+W.toLowerCase()+"-",W+e):null},V=H.defaultView?H.defaultView.getComputedStyle:function(){},$=o.getStyle=function(e,t,n,r,i){var s;return q||"opacity"!==t?(!r&&e.style[t]?s=e.style[t]:(n=n||V(e,null))?(e=n.getPropertyValue(t.replace(T,"-$1").toLowerCase()),s=e||n.length?e:n[t]):e.currentStyle&&(n=e.currentStyle,s=n[t]),null==i||s&&"none"!==s&&"auto"!==s&&"auto auto"!==s?s:i):R(e)},J=function(e,t,n,r,i){if("px"===r||!r)return n;if("auto"===r||!n)return 0;var s,o=L.test(t),u=e,a=B.style,f=0>n;return f&&(n=-n),"%"===r&&-1!==t.indexOf("border")?s=n/100*(o?e.clientWidth:e.clientHeight):(a.cssText="border-style:solid; border-width:0; position:absolute; line-height:0;","%"!==r&&u.appendChild?a[o?"borderLeftWidth":"borderTopWidth"]=n+r:(u=e.parentNode||H.body,a[o?"width":"height"]=n+r),u.appendChild(B),s=parseFloat(B[o?"offsetWidth":"offsetHeight"]),u.removeChild(B),0!==s||i||(s=J(e,t,n,r,!0))),f?-s:s},K=function(e,t,n){if("absolute"!==$(e,"position",n))return 0;var r="left"===t?"Left":"Top",i=$(e,"margin"+r,n);return e["offset"+r]-(J(e,t,parseFloat(i),i.replace(b,""))||0)},Q=function(e,t){var n,r,i={};if(t=t||V(e,null))if(n=t.length)for(;--n>-1;)i[t[n].replace(N,k)]=t.getPropertyValue(t[n]);else for(n in t)i[n]=t[n];else if(t=e.currentStyle||e.style)for(n in t)i[n.replace(N,k)]=t[n];return q||(i.opacity=R(e)),r=xt(e,t,!1),i.rotation=r.rotation*D,i.skewX=r.skewX*D,i.scaleX=r.scaleX,i.scaleY=r.scaleY,i.x=r.x,i.y=r.y,St&&(i.z=r.z,i.rotationX=r.rotationX*D,i.rotationY=r.rotationY*D,i.scaleZ=r.scaleZ),i.filters&&delete i.filters,i},G=function(e,t,n,r,i){var s,o,u,a={},f=e.style;for(o in n)"cssText"!==o&&"length"!==o&&isNaN(o)&&(t[o]!==(s=n[o])||i&&i[o])&&-1===o.indexOf("Origin")&&("number"==typeof s||"string"==typeof s)&&(a[o]="auto"!==s||"left"!==o&&"top"!==o?""!==s&&"auto"!==s&&"none"!==s||"string"!=typeof t[o]||""===t[o].replace(y,"")?s:0:K(e,o),void 0!==f[o]&&(u=new ct(f,o,f[o],u)));if(r)for(o in r)"className"!==o&&(a[o]=r[o]);return{difs:a,firstMPT:u}},Y={width:["Left","Right"],height:["Top","Bottom"]},Z=["marginLeft","marginRight","marginTop","marginBottom"],et=function(e,t,n){var r=parseFloat("width"===t?e.offsetWidth:e.offsetHeight),i=Y[t],s=i.length;for(n=n||V(e,null);--s>-1;)r-=parseFloat($(e,"padding"+i[s],n,!0))||0,r-=parseFloat($(e,"border"+i[s]+"Width",n,!0))||0;return r},tt=function(e,t){(null==e||""===e||"auto"===e||"auto auto"===e)&&(e="0 0");var n=e.split(" "),r=-1!==e.indexOf("left")?"0%":-1!==e.indexOf("right")?"100%":n[0],i=-1!==e.indexOf("top")?"0%":-1!==e.indexOf("bottom")?"100%":n[1];return null==i?i="0":"center"===i&&(i="50%"),("center"===r||isNaN(parseFloat(r)))&&(r="50%"),t&&(t.oxp=-1!==r.indexOf("%"),t.oyp=-1!==i.indexOf("%"),t.oxr="="===r.charAt(1),t.oyr="="===i.charAt(1),t.ox=parseFloat(r.replace(y,"")),t.oy=parseFloat(i.replace(y,""))),r+" "+i+(n.length>2?" "+n[2]:"")},nt=function(e,t){return"string"==typeof e&&"="===e.charAt(1)?parseInt(e.charAt(0)+"1",10)*parseFloat(e.substr(2)):parseFloat(e)-parseFloat(t)},rt=function(e,t){return null==e?t:"string"==typeof e&&"="===e.charAt(1)?parseInt(e.charAt(0)+"1",10)*Number(e.substr(2))+t:parseFloat(e)},it=function(e,t,n,r){var i,s,o,u,a,f=1e-6;return null==e?a=t:"number"==typeof e?a=e*_:(i=2*Math.PI,s=e.split("_"),o=Number(s[0].replace(y,""))*(-1===e.indexOf("rad")?_:1)-("="===e.charAt(1)?0:t),u=s[1],u&&r&&(r[n]=t+o),"short"===u?(o%=i,o!==o%(i/2)&&(o=0>o?o+i:o-i)):"cw"===u&&0>o?o=(o+9999999999*i)%i-(0|o/i)*i:"ccw"===u&&o>0&&(o=(o-9999999999*i)%i-(0|o/i)*i),a=t+o),f>a&&a>-f&&(a=0),a},st={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ot=function(e,t,n){return e=0>e?e+1:e>1?e-1:e,0|255*(1>6*e?t+6*(n-t)*e:.5>e?n:2>3*e?t+6*(n-t)*(2/3-e):t)+.5},ut=function(e){var t,n,r,i,s,o;return e&&""!==e?"number"==typeof e?[e>>16,255&e>>8,255&e]:(","===e.charAt(e.length-1)&&(e=e.substr(0,e.length-1)),st[e]?st[e]:"#"===e.charAt(0)?(4===e.length&&(t=e.charAt(1),n=e.charAt(2),r=e.charAt(3),e="#"+t+t+n+n+r+r),e=parseInt(e.substr(1),16),[e>>16,255&e>>8,255&e]):"hsl"===e.substr(0,3)?(e=e.match(v),i=Number(e[0])%360/360,s=Number(e[1])/100,o=Number(e[2])/100,n=.5>=o?o*(s+1):o+s-o*s,t=2*o-n,e.length>3&&(e[3]=Number(e[3])),e[0]=ot(i+1/3,t,n),e[1]=ot(i,t,n),e[2]=ot(i-1/3,t,n),e):(e=e.match(v)||st.transparent,e[0]=Number(e[0]),e[1]=Number(e[1]),e[2]=Number(e[2]),e.length>3&&(e[3]=Number(e[3])),e)):st.black},at="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(a in st)at+="|"+a+"\\b";at=RegExp(at+")","gi");var ft=function(e,t,n,r){if(null==e)return function(e){return e};var i,s=t?(e.match(at)||[""])[0]:"",o=e.split(s).join("").match(g)||[],u=e.substr(0,e.indexOf(o[0])),a=")"===e.charAt(e.length-1)?")":"",f=-1!==e.indexOf(" ")?" ":",",l=o.length,c=l>0?o[0].replace(v,""):"";return l?i=t?function(e){var t,h,p,d;if("number"==typeof e)e+=c;else if(r&&M.test(e)){for(d=e.replace(M,"|").split("|"),p=0;d.length>p;p++)d[p]=i(d[p]);return d.join(",")}if(t=(e.match(at)||[s])[0],h=e.split(t).join("").match(g)||[],p=h.length,l>p--)for(;l>++p;)h[p]=n?h[0|(p-1)/2]:o[p];return u+h.join(f)+f+t+a+(-1!==e.indexOf("inset")?" inset":"")}:function(e){var t,s,h;if("number"==typeof e)e+=c;else if(r&&M.test(e)){for(s=e.replace(M,"|").split("|"),h=0;s.length>h;h++)s[h]=i(s[h]);return s.join(",")}if(t=e.match(g)||[],h=t.length,l>h--)for(;l>++h;)t[h]=n?t[0|(h-1)/2]:o[h];return u+t.join(f)+a}:function(e){return e}},lt=function(e){return e=e.split(","),function(t,n,r,i,s,o,u){var a,f=(n+"").split(" ");for(u={},a=0;4>a;a++)u[e[a]]=f[a]=f[a]||f[(a-1)/2>>0];return i.parse(t,u,s,o)}},ct=(F._setPluginRatio=function(e){this.plugin.setRatio(e);for(var t,n,r,i,s=this.data,o=s.proxy,u=s.firstMPT,a=1e-6;u;)t=o[u.v],u.r?t=t>0?0|t+.5:0|t-.5:a>t&&t>-a&&(t=0),u.t[u.p]=t,u=u._next;if(s.autoRotate&&(s.autoRotate.rotation=o.rotation),1===e)for(u=s.firstMPT;u;){if(n=u.t,n.type){if(1===n.type){for(i=n.xs0+n.s+n.xs1,r=1;n.l>r;r++)i+=n["xn"+r]+n["xs"+(r+1)];n.e=i}}else n.e=n.s+n.xs0;u=u._next}},function(e,t,n,r,i){this.t=e,this.p=t,this.v=n,this.r=i,r&&(r._prev=this,this._next=r)}),ht=(F._parseToProxy=function(e,t,n,r,i,s){var o,u,a,f,l,c=r,h={},p={},d=n._transform,v=P;for(n._transform=null,P=t,r=l=n.parse(e,t,r,i),P=v,s&&(n._transform=d,c&&(c._prev=null,c._prev&&(c._prev._next=null)));r&&r!==c;){if(1>=r.type&&(u=r.p,p[u]=r.s+r.c,h[u]=r.s,s||(f=new ct(r,"s",u,f,r.r),r.c=0),1===r.type))for(o=r.l;--o>0;)a="xn"+o,u=r.p+"_"+a,p[u]=r.data[a],h[u]=r[a],s||(f=new ct(r,a,u,f,r.rxp[a]));r=r._next}return{proxy:h,end:p,firstMPT:f,pt:l}},F.CSSPropTween=function(e,t,r,i,o,u,a,f,l,c,h){this.t=e,this.p=t,this.s=r,this.c=i,this.n=a||"css_"+t,e instanceof ht||s.push(this.n),this.r=f,this.type=u||0,l&&(this.pr=l,n=!0),this.b=void 0===c?r:c,this.e=void 0===h?r+i:h,o&&(this._next=o,o._prev=this)}),pt=o.parseComplex=function(e,t,n,r,i,s,o,u,a,l){o=new ht(e,t,0,0,o,l?2:1,null,!1,u,n,r),r+="";var c,h,p,d,g,y,b,w,E,S,T,N,C=n.split(", ").join(",").split(" "),k=r.split(", ").join(",").split(" "),L=C.length,A=f!==!1;for((-1!==r.indexOf(",")||-1!==n.indexOf(","))&&(C=C.join(" ").replace(M,", ").split(" "),k=k.join(" ").replace(M,", ").split(" "),L=C.length),L!==k.length&&(C=(s||"").split(" "),L=C.length),o.plugin=a,o.setRatio=l,c=0;L>c;c++)if(d=C[c],g=k[c],w=parseFloat(d),w||0===w)o.appendXtra("",w,nt(g,w),g.replace(m,""),A&&-1!==g.indexOf("px"),!0);else if(i&&("#"===d.charAt(0)||st[d]||x.test(d)))N=","===g.charAt(g.length-1)?"),":")",d=ut(d),g=ut(g),E=d.length+g.length>6,E&&!q&&0===g[3]?(o["xs"+o.l]+=o.l?" transparent":"transparent",o.e=o.e.split(k[c]).join("transparent")):(q||(E=!1),o.appendXtra(E?"rgba(":"rgb(",d[0],g[0]-d[0],",",!0,!0).appendXtra("",d[1],g[1]-d[1],",",!0).appendXtra("",d[2],g[2]-d[2],E?",":N,!0),E&&(d=4>d.length?1:d[3],o.appendXtra("",d,(4>g.length?1:g[3])-d,N,!1)));else if(y=d.match(v)){if(b=g.match(m),!b||b.length!==y.length)return o;for(p=0,h=0;y.length>h;h++)T=y[h],S=d.indexOf(T,p),o.appendXtra(d.substr(p,S-p),Number(T),nt(b[h],T),"",A&&"px"===d.substr(S+T.length,2),0===h),p=S+T.length;o["xs"+o.l]+=d.substr(p)}else o["xs"+o.l]+=o.l?" "+d:d;if(-1!==r.indexOf("=")&&o.data){for(N=o.xs0+o.data.s,c=1;o.l>c;c++)N+=o["xs"+c]+o.data["xn"+c];o.e=N+o["xs"+c]}return o.l||(o.type=-1,o.xs0=o.e),o.xfirst||o},dt=9;for(a=ht.prototype,a.l=a.pr=0;--dt>0;)a["xn"+dt]=0,a["xs"+dt]="";a.xs0="",a._next=a._prev=a.xfirst=a.data=a.plugin=a.setRatio=a.rxp=null,a.appendXtra=function(e,t,n,r,i,s){var o=this,u=o.l;return o["xs"+u]+=s&&u?" "+e:e||"",n||0===u||o.plugin?(o.l++,o.type=o.setRatio?2:1,o["xs"+o.l]=r||"",u>0?(o.data["xn"+u]=t+n,o.rxp["xn"+u]=i,o["xn"+u]=t,o.plugin||(o.xfirst=new ht(o,"xn"+u,t,n,o.xfirst||o,0,o.n,i,o.pr),o.xfirst.xs0=0),o):(o.data={s:t+n},o.rxp={},o.s=t,o.c=n,o.r=i,o)):(o["xs"+u]+=t+(r||""),o)};var vt=function(e,t){t=t||{},this.p=t.prefix?X(e)||e:e,u[e]=u[this.p]=this,this.format=t.formatter||ft(t.defaultValue,t.color,t.collapsible,t.multi),t.parser&&(this.parse=t.parser),this.clrs=t.color,this.multi=t.multi,this.keyword=t.keyword,this.dflt=t.defaultValue,this.pr=t.priority||0},mt=F._registerComplexSpecialProp=function(e,t,n){"object"!=typeof t&&(t={parser:n});var r,i,s=e.split(","),o=t.defaultValue;for(n=n||[o],r=0;s.length>r;r++)t.prefix=0===r&&t.prefix,t.defaultValue=n[r]||o,i=new vt(s[r],t)},gt=function(e){if(!u[e]){var t=e.charAt(0).toUpperCase()+e.substr(1)+"Plugin";mt(e,{parser:function(e,n,r,i,s,o,a){var f=(window.GreenSockGlobals||window).com.greensock.plugins[t];return f?(f._cssRegister(),u[r].parse(e,n,r,i,s,o,a)):(U("Error: "+t+" js file not loaded."),s)}})}};a=vt.prototype,a.parseComplex=function(e,t,n,r,i,s){var o,u,a,f,l,c,h=this.keyword;if(this.multi&&(M.test(n)||M.test(t)?(u=t.replace(M,"|").split("|"),a=n.replace(M,"|").split("|")):h&&(u=[t],a=[n])),a){for(f=a.length>u.length?a.length:u.length,o=0;f>o;o++)t=u[o]=u[o]||this.dflt,n=a[o]=a[o]||this.dflt,h&&(l=t.indexOf(h),c=n.indexOf(h),l!==c&&(n=-1===c?a:u,n[o]+=" "+h));t=u.join(", "),n=a.join(", ")}return pt(e,this.p,t,n,this.clrs,this.dflt,r,this.pr,i,s)},a.parse=function(e,t,n,r,s,o){return this.parseComplex(e.style,this.format($(e,this.p,i,!1,this.dflt)),this.format(t),s,o)},o.registerSpecialProp=function(e,t,n){mt(e,{parser:function(e,r,i,s,o,u){var a=new ht(e,i,0,0,o,2,i,!1,n);return a.plugin=u,a.setRatio=t(e,r,s._tween,i),a},priority:n})};var yt="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),bt=X("transform"),wt=z+"transform",Et=X("transformOrigin"),St=null!==X("perspective"),xt=function(e,t,n){var r,i,s,u,a,f,l,c,h,p,d,v,m,g=n?e._gsTransform||{skewY:0}:{skewY:0},y=0>g.scaleX,b=2e-5,w=1e5,E=-Math.PI+1e-4,S=Math.PI-1e-4,x=St?parseFloat($(e,Et,t,!1,"0 0 0").split(" ")[2])||g.zOrigin||0:0;for(bt?r=$(e,wt,t,!0):e.currentStyle&&(r=e.currentStyle.filter.match(A),r=r&&4===r.length?r[0].substr(4)+","+Number(r[2].substr(4))+","+Number(r[1].substr(4))+","+r[3].substr(4)+","+(g?g.x:0)+","+(g?g.y:0):null),i=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],s=i.length;--s>-1;)u=Number(i[s]),i[s]=(a=u-(u|=0))?(0|a*w+(0>a?-0.5:.5))/w+u:u;if(16===i.length){var T=i[8],N=i[9],C=i[10],k=i[12],L=i[13],O=i[14];if(g.zOrigin&&(O=-g.zOrigin,k=T*O-i[12],L=N*O-i[13],O=C*O+g.zOrigin-i[14]),!n||k!==g.x||L!==g.y||O!==g.z){var M,_,D,P,H,B,j,F,I=i[0],q=i[1],R=i[2],U=i[3],z=i[4],W=i[5],X=i[6],V=i[7],J=i[11],K=g.rotationX=Math.atan2(X,C),Q=E>K||K>S;K&&(H=Math.cos(-K),B=Math.sin(-K),M=z*H+T*B,_=W*H+N*B,D=X*H+C*B,P=V*H+J*B,T=z*-B+T*H,N=W*-B+N*H,C=X*-B+C*H,J=V*-B+J*H,z=M,W=_,X=D),K=g.rotationY=Math.atan2(T,I),K&&(j=E>K||K>S,H=Math.cos(-K),B=Math.sin(-K),M=I*H-T*B,_=q*H-N*B,D=R*H-C*B,N=q*B+N*H,C=R*B+C*H,J=U*B+J*H,I=M,q=_,R=D),K=g.rotation=Math.atan2(q,W),K&&(F=E>K||K>S,H=Math.cos(-K),B=Math.sin(-K),I=I*H+z*B,_=q*H+W*B,W=q*-B+W*H,X=R*-B+X*H,q=_),F&&Q?g.rotation=g.rotationX=0:F&&j?g.rotation=g.rotationY=0:j&&Q&&(g.rotationY=g.rotationX=0),g.scaleX=(0|Math.sqrt(I*I+q*q)*w+.5)/w,g.scaleY=(0|Math.sqrt(W*W+N*N)*w+.5)/w,g.scaleZ=(0|Math.sqrt(X*X+C*C)*w+.5)/w,g.skewX=0,g.perspective=J?1/(0>J?-J:J):0,g.x=k,g.y=L,g.z=O}}else if(!(St&&0!==i.length&&g.x===i[4]&&g.y===i[5]&&(g.rotationX||g.rotationY)||void 0!==g.x&&"none"===$(e,"display",t))){var G=i.length>=6,Y=G?i[0]:1,Z=i[1]||0,et=i[2]||0,tt=G?i[3]:1;g.x=i[4]||0,g.y=i[5]||0,f=Math.sqrt(Y*Y+Z*Z),l=Math.sqrt(tt*tt+et*et),c=Y||Z?Math.atan2(Z,Y):g.rotation||0,h=et||tt?Math.atan2(et,tt)+c:g.skewX||0,p=f-Math.abs(g.scaleX||0),d=l-Math.abs(g.scaleY||0),Math.abs(h)>Math.PI/2&&Math.abs(h)<1.5*Math.PI&&(y?(f*=-1,h+=0>=c?Math.PI:-Math.PI,c+=0>=c?Math.PI:-Math.PI):(l*=-1,h+=0>=h?Math.PI:-Math.PI)),v=(c-g.rotation)%Math.PI,m=(h-g.skewX)%Math.PI,(void 0===g.skewX||p>b||-b>p||d>b||-b>d||v>E&&S>v&&!1|v*w||m>E&&S>m&&!1|m*w)&&(g.scaleX=f,g.scaleY=l,g.rotation=c,g.skewX=h),St&&(g.rotationX=g.rotationY=g.z=0,g.perspective=parseFloat(o.defaultTransformPerspective)||0,g.scaleZ=1)}g.zOrigin=x;for(s in g)b>g[s]&&g[s]>-b&&(g[s]=0);return n&&(e._gsTransform=g),g},Tt=function(e){var t,n,r=this.data,i=-r.rotation,s=i+r.skewX,o=1e5,u=(0|Math.cos(i)*r.scaleX*o)/o,a=(0|Math.sin(i)*r.scaleX*o)/o,f=(0|Math.sin(s)*-r.scaleY*o)/o,l=(0|Math.cos(s)*r.scaleY*o)/o,c=this.t.style,h=this.t.currentStyle;if(h){n=a,a=-f,f=-n,t=h.filter,c.filter="";var p,v,m=this.t.offsetWidth,g=this.t.offsetHeight,y="absolute"!==h.position,E="progid:DXImageTransform.Microsoft.Matrix(M11="+u+", M12="+a+", M21="+f+", M22="+l,S=r.x,x=r.y;if(null!=r.ox&&(p=(r.oxp?.01*m*r.ox:r.ox)-m/2,v=(r.oyp?.01*g*r.oy:r.oy)-g/2,S+=p-(p*u+v*a),x+=v-(p*f+v*l)),y)p=m/2,v=g/2,E+=", Dx="+(p-(p*u+v*a)+S)+", Dy="+(v-(p*f+v*l)+x)+")";else{var T,N,C,k=8>d?1:-1;for(p=r.ieOffsetX||0,v=r.ieOffsetY||0,r.ieOffsetX=Math.round((m-((0>u?-u:u)*m+(0>a?-a:a)*g))/2+S),r.ieOffsetY=Math.round((g-((0>l?-l:l)*g+(0>f?-f:f)*m))/2+x),dt=0;4>dt;dt++)N=Z[dt],T=h[N],n=-1!==T.indexOf("px")?parseFloat(T):J(this.t,N,parseFloat(T),T.replace(b,""))||0,C=n!==r[N]?2>dt?-r.ieOffsetX:-r.ieOffsetY:2>dt?p-r.ieOffsetX:v-r.ieOffsetY,c[N]=(r[N]=Math.round(n-C*(0===dt||2===dt?1:k)))+"px";E+=", sizingMethod='auto expand')"}c.filter=-1!==t.indexOf("DXImageTransform.Microsoft.Matrix(")?t.replace(O,E):E+" "+t,(0===e||1===e)&&1===u&&0===a&&0===f&&1===l&&(y&&-1===E.indexOf("Dx=0, Dy=0")||w.test(t)&&100!==parseFloat(RegExp.$1)||-1===t.indexOf("gradient(")&&c.removeAttribute("filter"))}},Nt=function(){var e,t,n,r,i,s,o,u,a,f=this.data,l=this.t.style,c=f.perspective,p=f.scaleX,d=0,v=0,m=0,g=0,y=f.scaleY,b=0,w=0,E=0,S=0,x=f.scaleZ,T=0,N=0,C=0,k=c?-1/c:0,L=f.rotation,A=f.zOrigin,O=1e5;h&&(o=l.top?"top":l.bottom?"bottom":parseFloat($(this.t,"top",null,!1))?"bottom":"top",n=$(this.t,o,null,!1),u=parseFloat(n)||0,a=n.substr((u+"").length)||"px",f._ffFix=!f._ffFix,l[o]=(f._ffFix?u+.05:u-.05)+a),(L||f.skewX)&&(n=p*Math.cos(L),r=y*Math.sin(L),L-=f.skewX,d=p*-Math.sin(L),y*=Math.cos(L),p=n,g=r),L=f.rotationY,L&&(e=Math.cos(L),t=Math.sin(L),n=p*e,r=g*e,i=x*-t,s=k*-t,v=p*t,b=g*t,x*=e,k*=e,p=n,g=r,E=i,N=s),L=f.rotationX,L&&(e=Math.cos(L),t=Math.sin(L),n=d*e+v*t,r=y*e+b*t,i=S*e+x*t,s=C*e+k*t,v=d*-t+v*e,b=y*-t+b*e,x=S*-t+x*e,k=C*-t+k*e,d=n,y=r,S=i,C=s),A&&(T-=A,m=v*T,w=b*T,T=x*T+A),m=(n=(m+=f.x)-(m|=0))?(0|n*O+(0>n?-0.5:.5))/O+m:m,w=(n=(w+=f.y)-(w|=0))?(0|n*O+(0>n?-0.5:.5))/O+w:w,T=(n=(T+=f.z)-(T|=0))?(0|n*O+(0>n?-0.5:.5))/O+T:T,l[bt]="matrix3d("+[(0|p*O)/O,(0|g*O)/O,(0|E*O)/O,(0|N*O)/O,(0|d*O)/O,(0|y*O)/O,(0|S*O)/O,(0|C*O)/O,(0|v*O)/O,(0|b*O)/O,(0|x*O)/O,(0|k*O)/O,m,w,T,c?1+ -T/c:1].join(",")+")"},Ct=function(){var e,t,n,r,i,s,o,u,a,f=this.data,l=this.t,c=l.style;h&&(e=c.top?"top":c.bottom?"bottom":parseFloat($(l,"top",null,!1))?"bottom":"top",t=$(l,e,null,!1),n=parseFloat(t)||0,r=t.substr((n+"").length)||"px",f._ffFix=!f._ffFix,c[e]=(f._ffFix?n+.05:n-.05)+r),f.rotation||f.skewX?(i=f.rotation,s=i-f.skewX,o=1e5,u=f.scaleX*o,a=f.scaleY*o,c[bt]="matrix("+(0|Math.cos(i)*u)/o+","+(0|Math.sin(i)*u)/o+","+(0|Math.sin(s)*-a)/o+","+(0|Math.cos(s)*a)/o+","+f.x+","+f.y+")"):c[bt]="matrix("+f.scaleX+",0,0,"+f.scaleY+","+f.x+","+f.y+")"};mt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation",{parser:function(e,t,n,r,s,o,u){if(r._transform)return s;var a,f,l,c,h,p,d,v=r._transform=xt(e,i,!0),m=e.style,g=1e-6,y=yt.length,b=u,w={};if("string"==typeof b.transform&&bt)l=m.cssText,m[bt]=b.transform,m.display="block",a=xt(e,null,!1),m.cssText=l;else if("object"==typeof b){if(a={scaleX:rt(null!=b.scaleX?b.scaleX:b.scale,v.scaleX),scaleY:rt(null!=b.scaleY?b.scaleY:b.scale,v.scaleY),scaleZ:rt(null!=b.scaleZ?b.scaleZ:b.scale,v.scaleZ),x:rt(b.x,v.x),y:rt(b.y,v.y),z:rt(b.z,v.z),perspective:rt(b.transformPerspective,v.perspective)},d=b.directionalRotation,null!=d)if("object"==typeof d)for(l in d)b[l]=d[l];else b.rotation=d;a.rotation=it("rotation"in b?b.rotation:"shortRotation"in b?b.shortRotation+"_short":"rotationZ"in b?b.rotationZ:v.rotation*D,v.rotation,"rotation",w),St&&(a.rotationX=it("rotationX"in b?b.rotationX:"shortRotationX"in b?b.shortRotationX+"_short":v.rotationX*D||0,v.rotationX,"rotationX",w),a.rotationY=it("rotationY"in b?b.rotationY:"shortRotationY"in b?b.shortRotationY+"_short":v.rotationY*D||0,v.rotationY,"rotationY",w)),a.skewX=null==b.skewX?v.skewX:it(b.skewX,v.skewX),a.skewY=null==b.skewY?v.skewY:it(b.skewY,v.skewY),(f=a.skewY-v.skewY)&&(a.skewX+=f,a.rotation+=f)}for(h=v.z||v.rotationX||v.rotationY||a.z||a.rotationX||a.rotationY||a.perspective,h||null==b.scale||(a.scaleZ=1);--y>-1;)n=yt[y],c=a[n]-v[n],(c>g||-g>c||null!=P[n])&&(p=!0,s=new ht(v,n,v[n],c,s),n in w&&(s.e=w[n]),s.xs0=0,s.plugin=o,r._overwriteProps.push(s.n));return c=b.transformOrigin,(c||St&&h&&v.zOrigin)&&(bt?(p=!0,c=(c||$(e,n,i,!1,"50% 50%"))+"",n=Et,s=new ht(m,n,0,0,s,-1,"css_transformOrigin"),s.b=m[n],s.plugin=o,St?(l=v.zOrigin,c=c.split(" "),v.zOrigin=(c.length>2?parseFloat(c[2]):l)||0,s.xs0=s.e=m[n]=c[0]+" "+(c[1]||"50%")+" 0px",s=new ht(v,"zOrigin",0,0,s,-1,s.n),s.b=l,s.xs0=s.e=v.zOrigin):s.xs0=s.e=m[n]=c):tt(c+"",v)),p&&(r._transformType=h||3===this._transformType?3:2),s},prefix:!0}),mt("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),mt("borderRadius",{defaultValue:"0px",parser:function(e,t,n,s,o){t=this.format(t);var u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],T=e.style;for(v=parseFloat(e.offsetWidth),m=parseFloat(e.offsetHeight),u=t.split(" "),a=0;x.length>a;a++)this.p.indexOf("border")&&(x[a]=X(x[a])),c=l=$(e,x[a],i,!1,"0px"),-1!==c.indexOf(" ")&&(l=c.split(" "),c=l[0],l=l[1]),h=f=u[a],p=parseFloat(c),y=c.substr((p+"").length),b="="===h.charAt(1),b?(d=parseInt(h.charAt(0)+"1",10),h=h.substr(2),d*=parseFloat(h),g=h.substr((d+"").length-(0>d?1:0))||""):(d=parseFloat(h),g=h.substr((d+"").length)),""===g&&(g=r[n]||y),g!==y&&(w=J(e,"borderLeft",p,y),E=J(e,"borderTop",p,y),"%"===g?(c=100*(w/v)+"%",l=100*(E/m)+"%"):"em"===g?(S=J(e,"borderLeft",1,"em"),c=w/S+"em",l=E/S+"em"):(c=w+"px",l=E+"px"),b&&(h=parseFloat(c)+d+g,f=parseFloat(l)+d+g)),o=pt(T,x[a],c+" "+l,h+" "+f,!1,"0px",o);return o},prefix:!0,formatter:ft("0px 0px 0px 0px",!1,!0)}),mt("backgroundPosition",{defaultValue:"0 0",parser:function(e,t,n,r,s,o){var u,a,f,l,c,h,p="background-position",v=i||V(e,null),m=this.format((v?d?v.getPropertyValue(p+"-x")+" "+v.getPropertyValue(p+"-y"):v.getPropertyValue(p):e.currentStyle.backgroundPositionX+" "+e.currentStyle.backgroundPositionY)||"0 0"),g=this.format(t);if(-1!==m.indexOf("%")!=(-1!==g.indexOf("%"))&&(h=$(e,"backgroundImage").replace(C,""),h&&"none"!==h)){for(u=m.split(" "),a=g.split(" "),j.setAttribute("src",h),f=2;--f>-1;)m=u[f],l=-1!==m.indexOf("%"),l!==(-1!==a[f].indexOf("%"))&&(c=0===f?e.offsetWidth-j.width:e.offsetHeight-j.height,u[f]=l?parseFloat(m)/100*c+"px":100*(parseFloat(m)/c)+"%");m=u.join(" ")}return this.parseComplex(e.style,m,g,s,o)},formatter:tt}),mt("backgroundSize",{defaultValue:"0 0",formatter:tt}),mt("perspective",{defaultValue:"0px",prefix:!0}),mt("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),mt("transformStyle",{prefix:!0}),mt("backfaceVisibility",{prefix:!0}),mt("margin",{parser:lt("marginTop,marginRight,marginBottom,marginLeft")}),mt("padding",{parser:lt("paddingTop,paddingRight,paddingBottom,paddingLeft")}),mt("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(e,t,n,r,s,o){var u,a,f;return 9>d?(a=e.currentStyle,f=8>d?" ":",",u="rect("+a.clipTop+f+a.clipRight+f+a.clipBottom+f+a.clipLeft+")",t=this.format(t).split(",").join(f)):(u=this.format($(e,this.p,i,!1,this.dflt)),t=this.format(t)),this.parseComplex(e.style,u,t,s,o)}}),mt("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),mt("autoRound,strictUnits",{parser:function(e,t,n,r,i){return i}}),mt("border",{defaultValue:"0px solid #000",parser:function(e,t,n,r,s,o){return this.parseComplex(e.style,this.format($(e,"borderTopWidth",i,!1,"0px")+" "+$(e,"borderTopStyle",i,!1,"solid")+" "+$(e,"borderTopColor",i,!1,"#000")),this.format(t),s,o)},color:!0,formatter:function(e){var t=e.split(" ");return t[0]+" "+(t[1]||"solid")+" "+(e.match(at)||["#000"])[0]}}),mt("float,cssFloat,styleFloat",{parser:function(e,t,n,r,i){var s=e.style,o="cssFloat"in s?"cssFloat":"styleFloat";return new ht(s,o,0,0,i,-1,n,!1,0,s[o],t)}});var kt=function(e){var t,n=this.t,r=n.filter,i=0|this.s+this.c*e;100===i&&(-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")?(n.removeAttribute("filter"),t=!$(this.data,"filter")):(n.filter=r.replace(S,""),t=!0)),t||(this.xn1&&(n.filter=r=r||"alpha(opacity=100)"),-1===r.indexOf("opacity")?n.filter+=" alpha(opacity="+i+")":n.filter=r.replace(w,"opacity="+i))};mt("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(e,t,n,r,s,o){var u,a=parseFloat($(e,"opacity",i,!1,"1")),f=e.style;return t=parseFloat(t),"autoAlpha"===n&&(u=$(e,"visibility",i),1===a&&"hidden"===u&&0!==t&&(a=0),s=new ht(f,"visibility",0,0,s,-1,null,!1,0,0!==a?"visible":"hidden",0===t?"hidden":"visible"),s.xs0="visible",r._overwriteProps.push(s.n)),q?s=new ht(f,"opacity",a,t-a,s):(s=new ht(f,"opacity",100*a,100*(t-a),s),s.xn1="autoAlpha"===n?1:0,f.zoom=1,s.type=2,s.b="alpha(opacity="+s.s+")",s.e="alpha(opacity="+(s.s+s.c)+")",s.data=e,s.plugin=o,s.setRatio=kt),s}});var Lt=function(e,t){t&&(e.removeProperty?e.removeProperty(t.replace(T,"-$1").toLowerCase()):e.removeAttribute(t))},At=function(e){if(this.t._gsClassPT=this,1===e||0===e){this.t.className=0===e?this.b:this.e;for(var t=this.data,n=this.t.style;t;)t.v?n[t.p]=t.v:Lt(n,t.p),t=t._next;1===e&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};mt("className",{parser:function(e,t,r,s,o,u,a){var f,l,c,h,p,d=e.className,v=e.style.cssText;if(o=s._classNamePT=new ht(e,r,0,0,o,2),o.setRatio=At,o.pr=-11,n=!0,o.b=d,l=Q(e,i),c=e._gsClassPT){for(h={},p=c.data;p;)h[p.p]=1,p=p._next;c.setRatio(1)}return e._gsClassPT=o,o.e="="!==t.charAt(1)?t:d.replace(RegExp("\\s*\\b"+t.substr(2)+"\\b"),"")+("+"===t.charAt(0)?" "+t.substr(2):""),s._tween._duration&&(e.className=o.e,f=G(e,l,Q(e),a,h),e.className=d,o.data=f.firstMPT,e.style.cssText=v,o=o.xfirst=s.parse(e,f.difs,o,u)),o}});var Ot=function(e){if((1===e||0===e)&&this.data._totalTime===this.data._totalDuration)for(var t,n="all"===this.e,r=this.t.style,i=n?r.cssText.split(";"):this.e.split(","),s=i.length,o=u.transform.parse;--s>-1;)t=i[s],n&&(t=t.substr(0,t.indexOf(":")).split(" ").join("")),u[t]&&(t=u[t].parse===o?bt:u[t].p),Lt(r,t)};for(mt("clearProps",{parser:function(e,t,r,i,s){return s=new ht(e,r,0,0,s,2),s.setRatio=Ot,s.e=t,s.pr=-10,s.data=i._tween,n=!0,s}}),a="bezier,throwProps,physicsProps,physics2D".split(","),dt=a.length;dt--;)gt(a[dt]);a=o.prototype,a._firstPT=null,a._onInitTween=function(e,t,u){if(!e.nodeType)return!1;this._target=e,this._tween=u,this._vars=t,f=t.autoRound,n=!1,r=t.suffixMap||o.suffixMap,i=V(e,""),s=this._overwriteProps;var a,h,d,v,m,g,y,b,w,S=e.style;if(l&&""===S.zIndex&&(a=$(e,"zIndex",i),("auto"===a||""===a)&&(S.zIndex=0)),"string"==typeof t&&(v=S.cssText,a=Q(e,i),S.cssText=v+";"+t,a=G(e,a,Q(e)).difs,!q&&E.test(t)&&(a.opacity=parseFloat(RegExp.$1)),t=a,S.cssText=v),this._firstPT=h=this.parse(e,t,null),this._transformType){for(w=3===this._transformType,bt?c&&(l=!0,""===S.zIndex&&(y=$(e,"zIndex",i),("auto"===y||""===y)&&(S.zIndex=0)),p&&(S.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(w?"visible":"hidden"))):S.zoom=1,d=h;d&&d._next;)d=d._next;b=new ht(e,"transform",0,0,null,2),this._linkCSSP(b,null,d),b.setRatio=w&&St?Nt:bt?Ct:Tt,b.data=this._transform||xt(e,i,!0),s.pop()}if(n){for(;h;){for(g=h._next,d=v;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:m)?h._prev._next=h:v=h,(h._next=d)?d._prev=h:m=h,h=g}this._firstPT=v}return!0},a.parse=function(e,t,n,s){var o,a,l,c,h,p,d,v,m,g,y=e.style;for(o in t)p=t[o],a=u[o],a?n=a.parse(e,p,o,this,n,s,t):(h=$(e,o,i)+"",m="string"==typeof p,"color"===o||"fill"===o||"stroke"===o||-1!==o.indexOf("Color")||m&&x.test(p)?(m||(p=ut(p),p=(p.length>3?"rgba(":"rgb(")+p.join(",")+")"),n=pt(y,o,h,p,!0,"transparent",n,0,s)):!m||-1===p.indexOf(" ")&&-1===p.indexOf(",")?(l=parseFloat(h),d=l||0===l?h.substr((l+"").length):"",(""===h||"auto"===h)&&("width"===o||"height"===o?(l=et(e,o,i),d="px"):"left"===o||"top"===o?(l=K(e,o,i),d="px"):(l="opacity"!==o?0:1,d="")),g=m&&"="===p.charAt(1),g?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),v=p.replace(b,"")):(c=parseFloat(p),v=m?p.substr((c+"").length)||"":""),""===v&&(v=r[o]||d),p=c||0===c?(g?c+l:c)+v:t[o],d!==v&&""!==v&&(c||0===c)&&(l||0===l)&&(l=J(e,o,l,d),"%"===v?(l/=J(e,o,100,"%")/100,l>100&&(l=100),t.strictUnits!==!0&&(h=l+"%")):"em"===v?l/=J(e,o,1,"em"):(c=J(e,o,c,v),v="px"),g&&(c||0===c)&&(p=c+l+v)),g&&(c+=l),!l&&0!==l||!c&&0!==c?p||"NaN"!=p+""&&null!=p?(n=new ht(y,o,c||l||0,0,n,-1,"css_"+o,!1,0,h,p),n.xs0="none"!==p||"display"!==o&&-1===o.indexOf("Style")?p:h):U("invalid "+o+" tween value: "+t[o]):(n=new ht(y,o,l,c-l,n,0,"css_"+o,f!==!1&&("px"===v||"zIndex"===o),0,h,p),n.xs0=v)):n=pt(y,o,h,p,!0,null,n,0,s)),s&&n&&!n.plugin&&(n.plugin=s);return n},a.setRatio=function(e){var t,n,r,i=this._firstPT,s=1e-6;if(1!==e||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(e||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-0.000001)for(;i;){if(t=i.c*e+i.s,i.r?t=t>0?0|t+.5:0|t-.5:s>t&&t>-s&&(t=0),i.type)if(1===i.type)if(r=i.l,2===r)i.t[i.p]=i.xs0+t+i.xs1+i.xn1+i.xs2;else if(3===r)i.t[i.p]=i.xs0+t+i.xs1+i.xn1+i.xs2+i.xn2+i.xs3;else if(4===r)i.t[i.p]=i.xs0+t+i.xs1+i.xn1+i.xs2+i.xn2+i.xs3+i.xn3+i.xs4;else if(5===r)i.t[i.p]=i.xs0+t+i.xs1+i.xn1+i.xs2+i.xn2+i.xs3+i.xn3+i.xs4+i.xn4+i.xs5;else{for(n=i.xs0+t+i.xs1,r=1;i.l>r;r++)n+=i["xn"+r]+i["xs"+(r+1)];i.t[i.p]=n}else-1===i.type?i.t[i.p]=i.xs0:i.setRatio&&i.setRatio(e);else i.t[i.p]=t+i.xs0;i=i._next}else for(;i;)2!==i.type?i.t[i.p]=i.b:i.setRatio(e),i=i._next;else for(;i;)2!==i.type?i.t[i.p]=i.e:i.setRatio(e),i=i._next},a._enableTransforms=function(e){this._transformType=e||3===this._transformType?3:2},a._linkCSSP=function(e,t,n,r){return e&&(t&&(t._prev=e),e._next&&(e._next._prev=e._prev),n?n._next=e:r||null!==this._firstPT||(this._firstPT=e),e._prev?e._prev._next=e._next:this._firstPT===e&&(this._firstPT=e._next),e._next=t,e._prev=n),e},a._kill=function(t){var n,r,i,s=t;if(t.css_autoAlpha||t.css_alpha){s={};for(r in t)s[r]=t[r];s.css_opacity=1,s.css_autoAlpha&&(s.css_visibility=1)}return t.css_className&&(n=this._classNamePT)&&(i=n.xfirst,i&&i._prev?this._linkCSSP(i._prev,n._next,i._prev._prev):i===this._firstPT&&(this._firstPT=n._next),n._next&&this._linkCSSP(n._next,n._next._next,i._prev),this._classNamePT=null),e.prototype._kill.call(this,s)};var Mt=function(e,t,n){var r,i,s,o;if(e.slice)for(i=e.length;--i>-1;)Mt(e[i],t,n);else for(r=e.childNodes,i=r.length;--i>-1;)s=r[i],o=s.type,s.style&&(t.push(Q(s)),n&&n.push(s)),1!==o&&9!==o&&11!==o||!s.childNodes.length||Mt(s,t,n)};return o.cascadeTo=function(e,n,r){var i,s,o,u=t.to(e,n,r),a=[u],f=[],l=[],c=[],h=t._internals.reservedProps;for(e=u._targets||u.target,Mt(e,f,c),u.render(n,!0),Mt(e,l),u.render(0,!0),u._enabled(!0),i=c.length;--i>-1;)if(s=G(c[i],f[i],l[i]),s.firstMPT){s=s.difs;for(o in r)h[o]&&(s[o]=r[o]);a.push(t.to(c[i],n,s))}return a},e.activate([o]),o},!0),function(){var e=window._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(e,t,n){return this._tween=n,!0}}),t=e.prototype;t._onInitAllProps=function(){for(var e,t,n,r=this._tween,i=r.vars.roundProps instanceof Array?r.vars.roundProps:r.vars.roundProps.split(","),s=i.length,o={},u=r._propLookup.roundProps;--s>-1;)o[i[s]]=1;for(s=i.length;--s>-1;)for(e=i[s],t=r._firstPT;t;)n=t._next,t.pg?t.t._roundProps(o,!0):t.n===e&&(this._add(t.t,e,t.s,t.c),n&&(n._prev=t._prev),t._prev?t._prev._next=n:r._firstPT===t&&(r._firstPT=n),t._next=t._prev=null,r._propLookup[e]=u),t=n;return!1},t._add=function(e,t,n,r){this._addTween(e,t,n,n+r,t,!0),this._overwriteProps.push(t)}}(),window._gsDefine.plugin({propName:"attr",API:2,init:function(e,t){var n;if("function"!=typeof e.setAttribute)return!1;this._target=e,this._proxy={};for(n in t)this._addTween(this._proxy,n,parseFloat(e.getAttribute(n)),t[n],n),this._overwriteProps.push(n);return!0},set:function(e){this._super.setRatio.call(this,e);for(var t,n=this._overwriteProps,r=n.length;--r>-1;)t=n[r],this._target.setAttribute(t,this._proxy[t]+"")}}),window._gsDefine.plugin({propName:"directionalRotation",API:2,init:function(e,t){"object"!=typeof t&&(t={rotation:t}),this.finals={};var n,r,i,s,o,u,a,f=t.useRadians===!0?2*Math.PI:360;for(n in t)"useRadians"!==n&&(u=(t[n]+"").split("_"),r=u[0],a=u[1],i=parseFloat("function"!=typeof e[n]?e[n]:e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]()),s=this.finals[n]="string"==typeof r&&"="===r.charAt(1)?i+parseInt(r.charAt(0)+"1",10)*Number(r.substr(2)):Number(r)||0,o=s-i,"short"===a?(o%=f,o!==o%(f/2)&&(o=0>o?o+f:o-f)):"cw"===a&&0>o?o=(o+9999999999*f)%f-(0|o/f)*f:"ccw"===a&&o>0&&(o=(o-9999999999*f)%f-(0|o/f)*f),this._addTween(e,n,i,i+o,n),this._overwriteProps.push(n));return!0},set:function(e){var t;if(1!==e)this._super.setRatio.call(this,e);else for(t=this._firstPT;t;)t.f?t.t[t.p](this.finals[t.p]):t.t[t.p]=this.finals[t.p],t=t._next}})._autoCSS=!0,window._gsDefine("easing.Back",["easing.Ease"],function(e){var t,n,r,i=window.GreenSockGlobals||window,s=i.com.greensock,o=2*Math.PI,u=Math.PI/2,a=s._class,f=function(t,n){var r=a("easing."+t,function(){},!0),i=r.prototype=new e;return i.constructor=r,i.getRatio=n,r},l=e.register||function(){},c=function(e,t,n,r){var i=a("easing."+e,{easeOut:new t,easeIn:new n,easeInOut:new r},!0);return l(i,e),i},h=function(e,t,n){this.t=e,this.v=t,n&&(this.next=n,n.prev=this,this.c=n.v-t,this.gap=n.t-e)},p=function(t,n){var r=a("easing."+t,function(e){this._p1=e||0===e?e:1.70158,this._p2=1.525*this._p1},!0),i=r.prototype=new e;return i.constructor=r,i.getRatio=n,i.config=function(e){return new r(e)},r},d=c("Back",p("BackOut",function(e){return(e-=1)*e*((this._p1+1)*e+this._p1)+1}),p("BackIn",function(e){return e*e*((this._p1+1)*e-this._p1)}),p("BackInOut",function(e){return 1>(e*=2)?.5*e*e*((this._p2+1)*e-this._p2):.5*((e-=2)*e*((this._p2+1)*e+this._p2)+2)})),v=a("easing.SlowMo",function(e,t,n){t=t||0===t?t:.7,null==e?e=.7:e>1&&(e=1),this._p=1!==e?t:0,this._p1=(1-e)/2,this._p2=e,this._p3=this._p1+this._p2,this._calcEnd=n===!0},!0),m=v.prototype=new e;return m.constructor=v,m.getRatio=function(e){var t=e+(.5-e)*this._p;return this._p1>e?this._calcEnd?1-(e=1-e/this._p1)*e:t-(e=1-e/this._p1)*e*e*e*t:e>this._p3?this._calcEnd?1-(e=(e-this._p3)/this._p1)*e:t+(e-t)*(e=(e-this._p3)/this._p1)*e*e*e:this._calcEnd?1:t},v.ease=new v(.7,.7),m.config=v.config=function(e,t,n){return new v(e,t,n)},t=a("easing.SteppedEase",function(e){e=e||1,this._p1=1/e,this._p2=e+1},!0),m=t.prototype=new e,m.constructor=t,m.getRatio=function(e){return 0>e?e=0:e>=1&&(e=.999999999),(this._p2*e>>0)*this._p1},m.config=t.config=function(e){return new t(e)},n=a("easing.RoughEase",function(t){t=t||{};for(var n,r
,i,s,o,u,a=t.taper||"none",f=[],l=0,c=0|(t.points||20),p=c,d=t.randomize!==!1,v=t.clamp===!0,m=t.template instanceof e?t.template:null,g="number"==typeof t.strength?.4*t.strength:.4;--p>-1;)n=d?Math.random():1/c*p,r=m?m.getRatio(n):n,"none"===a?i=g:"out"===a?(s=1-n,i=s*s*g):"in"===a?i=n*n*g:.5>n?(s=2*n,i=.5*s*s*g):(s=2*(1-n),i=.5*s*s*g),d?r+=Math.random()*i-.5*i:p%2?r+=.5*i:r-=.5*i,v&&(r>1?r=1:0>r&&(r=0)),f[l++]={x:n,y:r};for(f.sort(function(e,t){return e.x-t.x}),u=new h(1,1,null),p=c;--p>-1;)o=f[p],u=new h(o.x,o.y,u);this._prev=new h(0,0,0!==u.t?u:u.next)},!0),m=n.prototype=new e,m.constructor=n,m.getRatio=function(e){var t=this._prev;if(e>t.t){for(;t.next&&e>=t.t;)t=t.next;t=t.prev}else for(;t.prev&&t.t>=e;)t=t.prev;return this._prev=t,t.v+(e-t.t)/t.gap*t.c},m.config=function(e){return new n(e)},n.ease=new n,c("Bounce",f("BounceOut",function(e){return 1/2.75>e?7.5625*e*e:2/2.75>e?7.5625*(e-=1.5/2.75)*e+.75:2.5/2.75>e?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}),f("BounceIn",function(e){return 1/2.75>(e=1-e)?1-7.5625*e*e:2/2.75>e?1-(7.5625*(e-=1.5/2.75)*e+.75):2.5/2.75>e?1-(7.5625*(e-=2.25/2.75)*e+.9375):1-(7.5625*(e-=2.625/2.75)*e+.984375)}),f("BounceInOut",function(e){var t=.5>e;return e=t?1-2*e:2*e-1,e=1/2.75>e?7.5625*e*e:2/2.75>e?7.5625*(e-=1.5/2.75)*e+.75:2.5/2.75>e?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,t?.5*(1-e):.5*e+.5})),c("Circ",f("CircOut",function(e){return Math.sqrt(1-(e-=1)*e)}),f("CircIn",function(e){return-(Math.sqrt(1-e*e)-1)}),f("CircInOut",function(e){return 1>(e*=2)?-0.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)})),r=function(t,n,r){var i=a("easing."+t,function(e,t){this._p1=e||1,this._p2=t||r,this._p3=this._p2/o*(Math.asin(1/this._p1)||0)},!0),s=i.prototype=new e;return s.constructor=i,s.getRatio=n,s.config=function(e,t){return new i(e,t)},i},c("Elastic",r("ElasticOut",function(e){return this._p1*Math.pow(2,-10*e)*Math.sin((e-this._p3)*o/this._p2)+1},.3),r("ElasticIn",function(e){return-(this._p1*Math.pow(2,10*(e-=1))*Math.sin((e-this._p3)*o/this._p2))},.3),r("ElasticInOut",function(e){return 1>(e*=2)?-0.5*this._p1*Math.pow(2,10*(e-=1))*Math.sin((e-this._p3)*o/this._p2):.5*this._p1*Math.pow(2,-10*(e-=1))*Math.sin((e-this._p3)*o/this._p2)+1},.45)),c("Expo",f("ExpoOut",function(e){return 1-Math.pow(2,-10*e)}),f("ExpoIn",function(e){return Math.pow(2,10*(e-1))-.001}),f("ExpoInOut",function(e){return 1>(e*=2)?.5*Math.pow(2,10*(e-1)):.5*(2-Math.pow(2,-10*(e-1)))})),c("Sine",f("SineOut",function(e){return Math.sin(e*u)}),f("SineIn",function(e){return-Math.cos(e*u)+1}),f("SineInOut",function(e){return-0.5*(Math.cos(Math.PI*e)-1)})),a("easing.EaseLookup",{find:function(t){return e.map[t]}},!0),l(i.SlowMo,"SlowMo","ease,"),l(n,"RoughEase","ease,"),l(t,"SteppedEase","ease,"),d},!0)}),function(e){"use strict";var t,n,r,i,s,o=e.GreenSockGlobals||e,u=function(e){var t,n=e.split("."),r=o;for(t=0;n.length>t;t++)r[n[t]]=r=r[n[t]]||{};return r},a=u("com.greensock"),f=function(){},l={},c=function(t,n,r,i){this.sc=l[t]?l[t].sc:[],l[t]=this,this.gsClass=null,this.func=r;var s=[];this.check=function(a){for(var f,h,p,d,v=n.length,m=v;--v>-1;)(f=l[n[v]]||new c(n[v],[])).gsClass?(s[v]=f.gsClass,m--):a&&f.sc.push(this);if(0===m&&r)for(h=("com.greensock."+t).split("."),p=h.pop(),d=u(h.join("."))[p]=this.gsClass=r.apply(r,s),i&&(o[p]=d,"function"==typeof define&&define.amd?define((e.GreenSockAMDPath?e.GreenSockAMDPath+"/":"")+t.split(".").join("/"),[],function(){return d}):"undefined"!=typeof module&&module.exports&&(module.exports=d)),v=0;this.sc.length>v;v++)this.sc[v].check()},this.check(!0)},h=e._gsDefine=function(e,t,n,r){return new c(e,t,n,r)},p=a._class=function(e,t,n){return t=t||function(){},h(e,[],function(){return t},n),t};h.globals=o;var d=[0,0,1,1],v=[],m=p("easing.Ease",function(e,t,n,r){this._func=e,this._type=n||0,this._power=r||0,this._params=t?d.concat(t):d},!0),g=m.map={},y=m.register=function(e,t,n,r){for(var i,s,o,u,f=t.split(","),l=f.length,c=(n||"easeIn,easeOut,easeInOut").split(",");--l>-1;)for(s=f[l],i=r?p("easing."+s,null,!0):a.easing[s]||{},o=c.length;--o>-1;)u=c[o],g[s+"."+u]=g[u+s]=i[u]=e.getRatio?e:e[u]||new e};for(r=m.prototype,r._calcEnd=!1,r.getRatio=function(e){if(this._func)return this._params[0]=e,this._func.apply(null,this._params);var t=this._type,n=this._power,r=1===t?1-e:2===t?e:.5>e?2*e:2*(1-e);return 1===n?r*=r:2===n?r*=r*r:3===n?r*=r*r*r:4===n&&(r*=r*r*r*r),1===t?1-r:2===t?r:.5>e?r/2:1-r/2},t=["Linear","Quad","Cubic","Quart","Quint,Strong"],n=t.length;--n>-1;)r=t[n]+",Power"+n,y(new m(null,null,1,n),r,"easeOut",!0),y(new m(null,null,2,n),r,"easeIn"+(0===n?",easeNone":"")),y(new m(null,null,3,n),r,"easeInOut");g.linear=a.easing.Linear.easeIn,g.swing=a.easing.Quad.easeInOut;var b=p("events.EventDispatcher",function(e){this._listeners={},this._eventTarget=e||this});r=b.prototype,r.addEventListener=function(e,t,n,r,o){o=o||0;var u,a,f=this._listeners[e],l=0;for(null==f&&(this._listeners[e]=f=[]),a=f.length;--a>-1;)u=f[a],u.c===t&&u.s===n?f.splice(a,1):0===l&&o>u.pr&&(l=a+1);f.splice(l,0,{c:t,s:n,up:r,pr:o}),this!==i||s||i.wake()},r.removeEventListener=function(e,t){var n,r=this._listeners[e];if(r)for(n=r.length;--n>-1;)if(r[n].c===t)return r.splice(n,1),void 0},r.dispatchEvent=function(e){var t,n,r,i=this._listeners[e];if(i)for(t=i.length,n=this._eventTarget;--t>-1;)r=i[t],r.up?r.c.call(r.s||n,{type:e,target:n}):r.c.call(r.s||n)};var w=e.requestAnimationFrame,E=e.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()};for(t=["ms","moz","webkit","o"],n=t.length;--n>-1&&!w;)w=e[t[n]+"RequestAnimationFrame"],E=e[t[n]+"CancelAnimationFrame"]||e[t[n]+"CancelRequestAnimationFrame"];p("Ticker",function(e,t){var n,r,o,u,a,l=this,c=S(),h=t!==!1&&w,p=function(e){l.time=(S()-c)/1e3;var t=o,i=l.time-a;(!n||i>0||e===!0)&&(l.frame++,a+=i+(i>=u?.004:u-i),l.dispatchEvent("tick")),e!==!0&&t===o&&(o=r(p))};b.call(l),this.time=this.frame=0,this.tick=function(){p(!0)},this.sleep=function(){null!=o&&(h&&E?E(o):clearTimeout(o),r=f,o=null,l===i&&(s=!1))},this.wake=function(){o&&l.sleep(),r=0===n?f:h&&w?w:function(e){return setTimeout(e,0|1e3*(a-l.time)+1)},l===i&&(s=!0),p()},this.fps=function(e){return arguments.length?(n=e,u=1/(n||60),a=this.time+u,l.wake(),void 0):n},this.useRAF=function(e){return arguments.length?(l.sleep(),h=e,l.fps(n),void 0):h},l.fps(e),setTimeout(function(){h&&(!o||5>l.frame)&&l.useRAF(!1)},1e3)}),r=a.Ticker.prototype=new a.events.EventDispatcher,r.constructor=a.Ticker;var x=p("core.Animation",function(e,t){if(this.vars=t||{},this._duration=this._totalDuration=e||0,this._delay=Number(this.vars.delay)||0,this._timeScale=1,this._active=this.vars.immediateRender===!0,this.data=this.vars.data,this._reversed=this.vars.reversed===!0,B){s||i.wake();var n=this.vars.useFrames?H:B;n.add(this,n._time),this.vars.paused&&this.paused(!0)}});i=x.ticker=new a.Ticker,r=x.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1,r.play=function(e,t){return arguments.length&&this.seek(e,t),this.reversed(!1).paused(!1)},r.pause=function(e,t){return arguments.length&&this.seek(e,t),this.paused(!0)},r.resume=function(e,t){return arguments.length&&this.seek(e,t),this.paused(!1)},r.seek=function(e,t){return this.totalTime(Number(e),t!==!1)},r.restart=function(e,t){return this.reversed(!1).paused(!1).totalTime(e?-this._delay:0,t!==!1,!0)},r.reverse=function(e,t){return arguments.length&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this},r._enabled=function(e,t){return s||i.wake(),this._gc=!e,this._active=e&&!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration,t!==!0&&(e&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!e&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(e,t){return this._kill(e,t),this},r._uncache=function(e){for(var t=e?this:this.timeline;t;)t._dirty=!0,t=t.timeline;return this},r.eventCallback=function(e,t,n,r){if(null==e)return null;if("on"===e.substr(0,2)){var i,s=this.vars;if(1===arguments.length)return s[e];if(null==t)delete s[e];else if(s[e]=t,s[e+"Params"]=n,s[e+"Scope"]=r,n)for(i=n.length;--i>-1;)"{self}"===n[i]&&(n=s[e+"Params"]=n.concat(),n[i]=this);"onUpdate"===e&&(this._onUpdate=t)}return this},r.delay=function(e){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+e-this._delay),this._delay=e,this):this._delay},r.duration=function(e){return arguments.length?(this._duration=this._totalDuration=e,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==e&&this.totalTime(this._totalTime*(e/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(e){return this._dirty=!1,arguments.length?this.duration(e):this._totalDuration},r.time=function(e,t){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(e>this._duration?this._duration:e,t)):this._time},r.totalTime=function(e,t,n){if(s||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>e&&!n&&(e+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var r=this._totalDuration,o=this._timeline;if(e>r&&!n&&(e=r),this._startTime=(this._paused?this._pauseTime:o._time)-(this._reversed?r-e:e)/this._timeScale,o._dirty||this._uncache(!1),!o._active)for(;o._timeline;)o.totalTime(o._totalTime,!0),o=o._timeline}this._gc&&this._enabled(!0,!1),this._totalTime!==e&&this.render(e,t,!1)}return this},r.startTime=function(e){return arguments.length?(e!==this._startTime&&(this._startTime=e,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,e-this._delay)),this):this._startTime},r.timeScale=function(e){if(!arguments.length)return this._timeScale;if(e=e||1e-6,this._timeline&&this._timeline.smoothChildTiming){var t=this._pauseTime,n=t||0===t?t:this._timeline.totalTime();this._startTime=n-(n-this._startTime)*this._timeScale/e}return this._timeScale=e,this._uncache(!1)},r.reversed=function(e){return arguments.length?(e!=this._reversed&&(this._reversed=e,this.totalTime(this._totalTime,!0)),this):this._reversed},r.paused=function(e){if(!arguments.length)return this._paused;if(e!=this._paused&&this._timeline){s||e||i.wake();var t=this._timeline.rawTime(),n=t-this._pauseTime;!e&&this._timeline.smoothChildTiming&&(this._startTime+=n,this._uncache(!1)),this._pauseTime=e?t:null,this._paused=e,this._active=!e&&this._totalTime>0&&this._totalTime<this._totalDuration,e||0===n||0===this._duration||this.render(this._totalTime,!0,!0)}return this._gc&&!e&&this._enabled(!0,!1),this};var T=p("core.SimpleTimeline",function(e){x.call(this,0,e),this.autoRemoveChildren=this.smoothChildTiming=!0});r=T.prototype=new x,r.constructor=T,r.kill()._gc=!1,r._first=r._last=null,r._sortChildren=!1,r.add=r.insert=function(e,t){var n,r;if(e._startTime=Number(t||0)+e._delay,e._paused&&this!==e._timeline&&(e._pauseTime=e._startTime+(this.rawTime()-e._startTime)/e._timeScale),e.timeline&&e.timeline._remove(e,!0),e.timeline=e._timeline=this,e._gc&&e._enabled(!0,!0),n=this._last,this._sortChildren)for(r=e._startTime;n&&n._startTime>r;)n=n._prev;return n?(e._next=n._next,n._next=e):(e._next=this._first,this._first=e),e._next?e._next._prev=e:this._last=e,e._prev=n,this._timeline&&this._uncache(!0),this},r._remove=function(e,t){return e.timeline===this&&(t||e._enabled(!1,!0),e.timeline=null,e._prev?e._prev._next=e._next:this._first===e&&(this._first=e._next),e._next?e._next._prev=e._prev:this._last===e&&(this._last=e._prev),this._timeline&&this._uncache(!0)),this},r.render=function(e,t,n){var r,i=this._first;for(this._totalTime=this._time=this._rawPrevTime=e;i;)r=i._next,(i._active||e>=i._startTime&&!i._paused)&&(i._reversed?i.render((i._dirty?i.totalDuration():i._totalDuration)-(e-i._startTime)*i._timeScale,t,n):i.render((e-i._startTime)*i._timeScale,t,n)),i=r},r.rawTime=function(){return s||i.wake(),this._totalTime};var N=p("TweenLite",function(e,t,n){if(x.call(this,t,n),null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:N.selector(e)||e;var r,i,s,o=e.jquery||"function"==typeof e.each&&e[0]&&e[0].nodeType&&e[0].style,u=this.vars.overwrite;if(this._overwrite=u=null==u?P[N.defaultOverwrite]:"number"==typeof u?u>>0:P[u],(o||e instanceof Array)&&"number"!=typeof e[0])for(this._targets=s=o&&!e.slice?k(e):e.slice(0),this._propLookup=[],this._siblings=[],r=0;s.length>r;r++)i=s[r],i?"string"!=typeof i?"function"==typeof i.each&&i[0]&&i[0].nodeType&&i[0].style?(s.splice(r--,1),this._targets=s=s.concat(k(i))):(this._siblings[r]=j(i,this,!1),1===u&&this._siblings[r].length>1&&F(i,this,null,1,this._siblings[r])):(i=s[r--]=N.selector(i),"string"==typeof i&&s.splice(r+1,1)):s.splice(r--,1);else this._propLookup={},this._siblings=j(e,this,!1),1===u&&this._siblings.length>1&&F(e,this,null,1,this._siblings);(this.vars.immediateRender||0===t&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),C=function(e){return"function"==typeof e.each&&e[0]&&e[0].nodeType&&e[0].style},k=function(e){var t=[];return e.each(function(){t.push(this)}),t},L=function(e,t){var n,r={};for(n in e)D[n]||n in t&&"x"!==n&&"y"!==n&&"width"!==n&&"height"!==n&&"className"!==n||!(!O[n]||O[n]&&O[n]._autoCSS)||(r[n]=e[n],delete e[n]);e.css=r};r=N.prototype=new x,r.constructor=N,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=!1,N.version="1.9.5",N.defaultEase=r._ease=new m(null,null,1,1),N.defaultOverwrite="auto",N.ticker=i,N.autoSleep=!0,N.selector=e.$||e.jQuery||function(t){return e.$?(N.selector=e.$,e.$(t)):e.document?e.document.getElementById("#"===t.charAt(0)?t.substr(1):t):t};var A=N._internals={},O=N._plugins={},M=N._tweenLookup={},_=0,D=A.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},P={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},H=x._rootFramesTimeline=new T,B=x._rootTimeline=new T;B._startTime=i.time,H._startTime=i.frame,B._active=H._active=!0,x._updateRoot=function(){if(B.render((i.time-B._startTime)*B._timeScale,!1,!1),H.render((i.frame-H._startTime)*H._timeScale,!1,!1),!(i.frame%120)){var e,t,n;for(n in M){for(t=M[n].tweens,e=t.length;--e>-1;)t[e]._gc&&t.splice(e,1);0===t.length&&delete M[n]}if(n=B._first,(!n||n._paused)&&N.autoSleep&&!H._first&&1===i._listeners.tick.length){for(;n&&n._paused;)n=n._next;n||i.sleep()}}},i.addEventListener("tick",x._updateRoot);var j=function(e,t,n){var r,i,s=e._gsTweenID;if(M[s||(e._gsTweenID=s="t"+_++)]||(M[s]={target:e,tweens:[]}),t&&(r=M[s].tweens,r[i=r.length]=t,n))for(;--i>-1;)r[i]===t&&r.splice(i,1);return M[s].tweens},F=function(e,t,n,r,i){var s,o,u,a;if(1===r||r>=4){for(a=i.length,s=0;a>s;s++)if((u=i[s])!==t)u._gc||u._enabled(!1,!1)&&(o=!0);else if(5===r)break;return o}var f,l=t._startTime+1e-10,c=[],h=0,p=0===t._duration;for(s=i.length;--s>-1;)(u=i[s])===t||u._gc||u._paused||(u._timeline!==t._timeline?(f=f||I(t,0,p),0===I(u,f,p)&&(c[h++]=u)):l>=u._startTime&&u._startTime+u.totalDuration()/u._timeScale+1e-10>l&&((p||!u._initted)&&2e-10>=l-u._startTime||(c[h++]=u)));for(s=h;--s>-1;)u=c[s],2===r&&u._kill(n,e)&&(o=!0),(2!==r||!u._firstPT&&u._initted)&&u._enabled(!1,!1)&&(o=!0);return o},I=function(e,t,n){for(var r=e._timeline,i=r._timeScale,s=e._startTime;r._timeline;){if(s+=r._startTime,i*=r._timeScale,r._paused)return-100;r=r._timeline}return s/=i,s>t?s-t:n&&s===t||!e._initted&&2e-10>s-t?1e-10:(s+=e.totalDuration()/e._timeScale/i)>t?0:s-t-1e-10};r._init=function(){var e,t,n,r,i=this.vars,s=this._overwrittenProps,o=this._duration,u=i.ease;if(i.startAt){if(i.startAt.overwrite=0,i.startAt.immediateRender=!0,this._startAt=N.to(this.target,0,i.startAt),i.immediateRender&&(this._startAt=null,0===this._time&&0!==o))return}else if(i.runBackwards&&i.immediateRender&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else if(0===this._time){n={};for(r in i)D[r]&&"autoCSS"!==r||(n[r]=i[r]);return n.overwrite=0,this._startAt=N.to(this.target,0,n),void 0}if(this._ease=u?u instanceof m?i.easeParams instanceof Array?u.config.apply(u,i.easeParams):u:"function"==typeof u?new m(u,i.easeParams):g[u]||N.defaultEase:N.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(e=this._targets.length;--e>-1;)this._initProps(this._targets[e],this._propLookup[e]={},this._siblings[e],s?s[e]:null)&&(t=!0);else t=this._initProps(this.target,this._propLookup,this._siblings,s);if(t&&N._onPluginEvent("_onInitAllProps",this),s&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),i.runBackwards)for(n=this._firstPT;n;)n.s+=n.c,n.c=-n.c,n=n._next;this._onUpdate=i.onUpdate,this._initted=!0},r._initProps=function(e,t,n,r){var i,s,o,u,a,f,l;if(null==e)return!1;this.vars.css||e.style&&e.nodeType&&O.css&&this.vars.autoCSS!==!1&&L(this.vars,e);for(i in this.vars){if(D[i]){if(("onStartParams"===i||"onUpdateParams"===i||"onCompleteParams"===i||"onReverseCompleteParams"===i||"onRepeatParams"===i)&&(a=this.vars[i]))for(s=a.length;--s>-1;)"{self}"===a[s]&&(a=this.vars[i]=a.concat(),a[s]=this)}else if(O[i]&&(u=new O[i])._onInitTween(e,this.vars[i],this)){for(this._firstPT=f={_next:this._firstPT,t:u,p:"setRatio",s:0,c:1,f:!0,n:i,pg:!0,pr:u._priority},s=u._overwriteProps.length;--s>-1;)t[u._overwriteProps[s]]=this._firstPT;(u._priority||u._onInitAllProps)&&(o=!0),(u._onDisable||u._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=t[i]=f={_next:this._firstPT,t:e,p:i,f:"function"==typeof e[i],n:i,pg:!1,pr:0},f.s=f.f?e[i.indexOf("set")||"function"!=typeof e["get"+i.substr(3)]?i:"get"+i.substr(3)]():parseFloat(e[i]),l=this.vars[i],f.c="string"==typeof l&&"="===l.charAt(1)?parseInt(l.charAt(0)+"1",10)*Number(l.substr(2)):Number(l)-f.s||0;f&&f._next&&(f._next._prev=f)}return r&&this._kill(r,e)?this._initProps(e,t,n,r):this._overwrite>1&&this._firstPT&&n.length>1&&F(e,this,t,this._overwrite,n)?(this._kill(t,e),this._initProps(e,t,n,r)):o},r.render=function(e,t,n){var r,i,s,o=this._time;if(e>=this._duration)this._totalTime=this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(r=!0,i="onComplete"),0===this._duration&&((0===e||0>this._rawPrevTime)&&this._rawPrevTime!==e&&(n=!0,this._rawPrevTime>0&&(i="onReverseComplete")),this._rawPrevTime=e);else if(1e-7>e)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===this._duration&&this._rawPrevTime>0)&&(i="onReverseComplete",r=this._reversed),0>e?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(n=!0),this._rawPrevTime=e)):this._initted||(n=!0);else if(this._totalTime=this._time=e,this._easeType){var u=e/this._duration,a=this._easeType,f=this._easePower;(1===a||3===a&&u>=.5)&&(u=1-u),3===a&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),this.ratio=1===a?1-u:2===a?u:.5>e/this._duration?u/2:1-u/2}else this.ratio=this._ease.getRatio(e/this._duration);if(this._time!==o||n){if(!this._initted){if(this._init(),!this._initted)return;this._time&&!r?this.ratio=this._ease.getRatio(this._time/this._duration):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||this._paused||(this._active=!0),0===o&&(this._startAt&&(e>=0?this._startAt.render(e,t,n):i||(i="_dummyGS")),this.vars.onStart&&(0!==this._time||0===this._duration)&&(t||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||v))),s=this._firstPT;s;)s.f?s.t[s.p](s.c*this.ratio+s.s):s.t[s.p]=s.c*this.ratio+s.s,s=s._next;this._onUpdate&&(0>e&&this._startAt&&this._startAt.render(e,t,n),t||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||v)),i&&(this._gc||(0>e&&this._startAt&&!this._onUpdate&&this._startAt.render(e,t,n),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[i]&&this.vars[i].apply(this.vars[i+"Scope"]||this,this.vars[i+"Params"]||v)))}},r._kill=function(e,t){if("all"===e&&(e=null),null!=e||null!=t&&t!==this.target){t="string"!=typeof t?t||this._targets||this.target:N.selector(t)||t;var n,r,i,s,o,u,a,f;if((t instanceof Array||C(t))&&"number"!=typeof t[0])for(n=t.length;--n>-1;)this._kill(e,t[n])&&(u=!0);else{if(this._targets){for(n=this._targets.length;--n>-1;)if(t===this._targets[n]){o=this._propLookup[n]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[n]=e?this._overwrittenProps[n]||{}:"all";break}}else{if(t!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=e?this._overwrittenProps||{}:"all"}if(o){a=e||o,f=e!==r&&"all"!==r&&e!==o&&(null==e||e._tempKill!==!0);for(i in a)(s=o[i])&&(s.pg&&s.t._kill(a)&&(u=!0),s.pg&&0!==s.t._overwriteProps.length||(s._prev?s._prev._next=s._next:s===this._firstPT&&(this._firstPT=s._next),s._next&&(s._next._prev=s._prev),s._next=s._prev=null),delete o[i]),f&&(r[i]=1);this._firstPT||this._enabled(!1,!1)}}return u}return this._enabled(!1,!1)},r.invalidate=function(){return this._notifyPluginsOfEnabled&&N._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},r._enabled=function(e,t){if(s||i.wake(),e&&this._gc){var n,r=this._targets;if(r)for(n=r.length;--n>-1;)this._siblings[n]=j(r[n],this,!0);else this._siblings=j(this.target,this,!0)}return x.prototype._enabled.call(this,e,t),this._notifyPluginsOfEnabled&&this._firstPT?N._onPluginEvent(e?"_onEnable":"_onDisable",this):!1},N.to=function(e,t,n){return new N(e,t,n)},N.from=function(e,t,n){return n.runBackwards=!0,n.immediateRender=0!=n.immediateRender,new N(e,t,n)},N.fromTo=function(e,t,n,r){return r.startAt=n,r.immediateRender=0!=r.immediateRender&&0!=n.immediateRender,new N(e,t,r)},N.delayedCall=function(e,t,n,r,i){return new N(t,0,{delay:e,onComplete:t,onCompleteParams:n,onCompleteScope:r,onReverseComplete:t,onReverseCompleteParams:n,onReverseCompleteScope:r,immediateRender:!1,useFrames:i,overwrite:0})},N.set=function(e,t){return new N(e,0,t)},N.killTweensOf=N.killDelayedCallsTo=function(e,t){for(var n=N.getTweensOf(e),r=n.length;--r>-1;)n[r]._kill(t,e)},N.getTweensOf=function(e){if(null==e)return[];e="string"!=typeof e?e:N.selector(e)||e;var t,n,r,i;if((e instanceof Array||C(e))&&"number"!=typeof e[0]){for(t=e.length,n=[];--t>-1;)n=n.concat(N.getTweensOf(e[t]));for(t=n.length;--t>-1;)for(i=n[t],r=t;--r>-1;)i===n[r]&&n.splice(t,1)}else for(n=j(e).concat(),t=n.length;--t>-1;)n[t]._gc&&n.splice(t,1);return n};var q=p("plugins.TweenPlugin",function(e,t){this._overwriteProps=(e||"").split(","),this._propName=this._overwriteProps[0],this._priority=t||0,this._super=q.prototype},!0);if(r=q.prototype,q.version="1.9.1",q.API=2,r._firstPT=null,r._addTween=function(e,t,n,r,i,s){var o,u;null!=r&&(o="number"==typeof r||"="!==r.charAt(1)?Number(r)-n:parseInt(r.charAt(0)+"1",10)*Number(r.substr(2)))&&(this._firstPT=u={_next:this._firstPT,t:e,p:t,s:n,c:o,f:"function"==typeof e[t],n:i||t,r:s},u._next&&(u._next._prev=u))},r.setRatio=function(e){for(var t,n=this._firstPT,r=1e-6;n;)t=n.c*e+n.s,n.r?t=t+(t>0?.5:-0.5)>>0:r>t&&t>-r&&(t=0),n.f?n.t[n.p](t):n.t[n.p]=t,n=n._next},r._kill=function(e){var t,n=this._overwriteProps,r=this._firstPT;if(null!=e[this._propName])this._overwriteProps=[];else for(t=n.length;--t>-1;)null!=e[n[t]]&&n.splice(t,1);for(;r;)null!=e[r.n]&&(r._next&&(r._next._prev=r._prev),r._prev?(r._prev._next=r._next,r._prev=null):this._firstPT===r&&(this._firstPT=r._next)),r=r._next;return!1},r._roundProps=function(e,t){for(var n=this._firstPT;n;)(e[this._propName]||null!=n.n&&e[n.n.split(this._propName+"_").join("")])&&(n.r=t),n=n._next},N._onPluginEvent=function(e,t){var n,r,i,s,o,u=t._firstPT;if("_onInitAllProps"===e){for(;u;){for(o=u._next,r=i;r&&r.pr>u.pr;)r=r._next;(u._prev=r?r._prev:s)?u._prev._next=u:i=u,(u._next=r)?r._prev=u:s=u,u=o}u=t._firstPT=i}for(;u;)u.pg&&"function"==typeof u.t[e]&&u.t[e]()&&(n=!0),u=u._next;return n},q.activate=function(e){for(var t=e.length;--t>-1;)e[t].API===q.API&&(O[(new e[t])._propName]=e[t]);return!0},h.plugin=function(e){if(!(e&&e.propName&&e.init&&e.API))throw"illegal plugin definition.";var t,n=e.propName,r=e.priority||0,i=e.overwriteProps,s={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},o=p("plugins."+n.charAt(0).toUpperCase()+n.substr(1)+"Plugin",function(){q.call(this,n,r),this._overwriteProps=i||[]},e.global===!0),u=o.prototype=new q(n);u.constructor=o,o.API=e.API;for(t in s)"function"==typeof e[t]&&(u[s[t]]=e[t]);return o.version=e.version,q.activate([o]),o},t=e._gsQueue){for(n=0;t.length>n;n++)t[n]();for(r in l)l[r].func||e.console.log("GSAP encountered missing dependency: com.greensock."+r)}s=!1}(window);
/*! touchjs.min v0.2.14  2014-08-05 */
"use strict";!function(a,b){"function"==typeof define&&(define.amd||define.cmd)?define(b):a.touch=b()}(this,function(){function a(){var a="mouseup mousedown mousemove mouseout",c="touchstart touchmove touchend touchcancel",d=b.hasTouch?c:a;d.split(" ").forEach(function(a){document.addEventListener(a,A,!1)})}var b={};b.PCevts={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",touchcancel:"mouseout"},b.hasTouch="ontouchstart"in window,b.getType=function(a){return Object.prototype.toString.call(a).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},b.getSelector=function(a){if(a.id)return"#"+a.id;if(a.className){var b=a.className.split(/\s+/);return"."+b.join(".")}return a===document?"body":a.tagName.toLowerCase()},b.matchSelector=function(a,b){return a.webkitMatchesSelector(b)},b.getEventListeners=function(a){return a.listeners},b.getPCevts=function(a){return this.PCevts[a]||a},b.forceReflow=function(){var a="reflowDivBlock",b=document.getElementById(a);b||(b=document.createElement("div"),b.id=a,document.body.appendChild(b));var c=b.parentNode,d=b.nextSibling;c.removeChild(b),c.insertBefore(b,d)},b.simpleClone=function(a){return Object.create(a)},b.getPosOfEvent=function(a){if(this.hasTouch){for(var b=[],c=null,d=0,e=a.touches.length;e>d;d++)c=a.touches[d],b.push({x:c.pageX,y:c.pageY});return b}return[{x:a.pageX,y:a.pageY}]},b.getDistance=function(a,b){var c=b.x-a.x,d=b.y-a.y;return Math.sqrt(c*c+d*d)},b.getFingers=function(a){return a.touches?a.touches.length:1},b.calScale=function(a,b){if(a.length>=2&&b.length>=2){var c=this.getDistance(a[1],a[0]),d=this.getDistance(b[1],b[0]);return d/c}return 1},b.getAngle=function(a,b){return 180*Math.atan2(b.y-a.y,b.x-a.x)/Math.PI},b.getAngle180=function(a,b){var c=Math.atan(-1*(b.y-a.y)/(b.x-a.x))*(180/Math.PI);return 0>c?c+180:c},b.getDirectionFromAngle=function(a){var b={up:-45>a&&a>-135,down:a>=45&&135>a,left:a>=135||-135>=a,right:a>=-45&&45>=a};for(var c in b)if(b[c])return c;return null},b.getXYByElement=function(a){for(var b=0,c=0;a.offsetParent;)b+=a.offsetLeft,c+=a.offsetTop,a=a.offsetParent;return{left:b,top:c}},b.reset=function(){h=i=j=null,q=o=k=l=!1,m=!1,f={},t=!1},b.isTouchMove=function(a){return"touchmove"===a.type||"mousemove"===a.type},b.isTouchEnd=function(a){return"touchend"===a.type||"mouseup"===a.type||"touchcancel"===a.type},b.env=function(){var a={},b=navigator.userAgent,c=b.match(/(Android)[\s\/]+([\d\.]+)/),d=b.match(/(iPad|iPhone|iPod)\s+OS\s([\d_\.]+)/),e=b.match(/(Windows\s+Phone)\s([\d\.]+)/),f=/WebKit\/[\d.]+/i.test(b),g=d?navigator.standalone?f:/Safari/i.test(b)&&!/CriOS/i.test(b)&&!/MQQBrowser/i.test(b):!1;return c&&(a.android=!0,a.version=c[2]),d&&(a.ios=!0,a.version=d[2].replace(/_/g,"."),a.ios7=/^7/.test(a.version),"iPad"===d[1]?a.ipad=!0:"iPhone"===d[1]?(a.iphone=!0,a.iphone5=568==screen.height):"iPod"===d[1]&&(a.ipod=!0)),e&&(a.wp=!0,a.version=e[2],a.wp8=/^8/.test(a.version)),f&&(a.webkit=!0),g&&(a.safari=!0),a}();var c={proxyid:0,proxies:[],trigger:function(a,b,c){c=c||{};var d,e={bubbles:!0,cancelable:!0,detail:c};try{"undefined"!=typeof CustomEvent?(d=new CustomEvent(b,e),a&&a.dispatchEvent(d)):(d=document.createEvent("CustomEvent"),d.initCustomEvent(b,!0,!0,c),a&&a.dispatchEvent(d))}catch(f){console.warn("Touch.js is not supported by environment.")}},bind:function(a,c,d){a.listeners=a.listeners||{},a.listeners[c]?a.listeners[c].push(d):a.listeners[c]=[d];var e=function(a){b.env.ios7&&b.forceReflow(),a.originEvent=a;for(var c in a.detail)"type"!==c&&(a[c]=a.detail[c]);a.startRotate=function(){t=!0};var e=d.call(a.target,a);"undefined"==typeof e||e||(a.stopPropagation(),a.preventDefault())};d.proxy=d.proxy||{},d.proxy[c]?d.proxy[c].push(this.proxyid++):d.proxy[c]=[this.proxyid++],this.proxies.push(e),a.addEventListener&&a.addEventListener(c,e,!1)},unbind:function(a,b,c){if(c){var d=c.proxy[b];d&&d.length&&d.forEach(function(){a.removeEventListener&&a.removeEventListener(b,this.proxies[this.proxyid],!1)})}else{var e=a.listeners[b];e&&e.length&&e.forEach(function(c){a.removeEventListener(b,c,!1)})}},delegate:function(a,c,d,e){var f=function(c){var f,g;c.originEvent=c;for(var h in c.detail)"type"!==h&&(c[h]=c.detail[h]);c.startRotate=function(){t=!0};var i=b.getSelector(a)+" "+d,j=b.matchSelector(c.target,i),k=b.matchSelector(c.target,i+" "+c.target.nodeName);if(!j&&k){for(b.env.ios7&&b.forceReflow(),f=c.target;!b.matchSelector(f,i);)f=f.parentNode;g=e.call(c.target,c),"undefined"==typeof g||g||(c.stopPropagation(),c.preventDefault())}else b.env.ios7&&b.forceReflow(),(j||k)&&(g=e.call(c.target,c),"undefined"==typeof g||g||(c.stopPropagation(),c.preventDefault()))};e.proxy=e.proxy||{},e.proxy[c]?e.proxy[c].push(this.proxyid++):e.proxy[c]=[this.proxyid++],this.proxies.push(f),a.listeners=a.listeners||{},a.listeners[c]?a.listeners[c].push(f):a.listeners[c]=[f],a.addEventListener&&a.addEventListener(c,f,!1)},undelegate:function(a,b,c,d){if(d){var e=d.proxy[b];e.length&&e.forEach(function(){a.removeEventListener&&a.removeEventListener(b,this.proxies[this.proxyid],!1)})}else{var f=a.listeners[b];f.forEach(function(c){a.removeEventListener(b,c,!1)})}}},d={tap:!0,doubleTap:!0,tapMaxDistance:10,hold:!0,tapTime:200,holdTime:650,maxDoubleTapInterval:300,swipe:!0,swipeTime:300,swipeMinDistance:18,swipeFactor:5,drag:!0,pinch:!0,minScaleRate:0,minRotationAngle:0},e={TOUCH_START:"touchstart",TOUCH_MOVE:"touchmove",TOUCH_END:"touchend",TOUCH_CANCEL:"touchcancel",MOUSE_DOWN:"mousedown",MOUSE_MOVE:"mousemove",MOUSE_UP:"mouseup",CLICK:"click",PINCH_START:"pinchstart",PINCH_END:"pinchend",PINCH:"pinch",PINCH_IN:"pinchin",PINCH_OUT:"pinchout",ROTATION_LEFT:"rotateleft",ROTATION_RIGHT:"rotateright",ROTATION:"rotate",SWIPE_START:"swipestart",SWIPING:"swiping",SWIPE_END:"swipeend",SWIPE_LEFT:"swipeleft",SWIPE_RIGHT:"swiperight",SWIPE_UP:"swipeup",SWIPE_DOWN:"swipedown",SWIPE:"swipe",DRAG:"drag",DRAGSTART:"dragstart",DRAGEND:"dragend",HOLD:"hold",TAP:"tap",DOUBLE_TAP:"doubletap"},f={start:null,move:null,end:null},g=0,h=null,i=null,j=null,k=!1,l=!1,m=!1,n={},o=!1,p=null,q=!1,r=null,s=1,t=!1,u=[],v=0,w=0,x=0,y=null,z={getAngleDiff:function(a){for(var c=parseInt(v-b.getAngle180(a[0],a[1]),10),d=0;Math.abs(c-w)>90&&d++<50;)0>w?c-=180:c+=180;return w=parseInt(c,10)},pinch:function(a){var g=a.target;if(d.pinch){if(!o)return;if(b.getFingers(a)<2&&!b.isTouchEnd(a))return;var h=b.calScale(f.start,f.move),i=this.getAngleDiff(f.move),j={type:"",originEvent:a,scale:h,rotation:i,direction:i>0?"right":"left",fingersCount:b.getFingers(a)};if(l?b.isTouchMove(a)?(j.fingerStatus="move",c.trigger(g,e.PINCH,j)):b.isTouchEnd(a)&&(j.fingerStatus="end",c.trigger(g,e.PINCH_END,j),b.reset()):(l=!0,j.fingerStatus="start",c.trigger(g,e.PINCH_START,j)),Math.abs(1-h)>d.minScaleRate){var k=b.simpleClone(j),m=1e-11;h>s?(s=h-m,c.trigger(g,e.PINCH_OUT,k,!1)):s>h&&(s=h+m,c.trigger(g,e.PINCH_IN,k,!1)),b.isTouchEnd(a)&&(s=1)}if(Math.abs(i)>d.minRotationAngle){var n,p=b.simpleClone(j);n=i>0?e.ROTATION_RIGHT:e.ROTATION_LEFT,c.trigger(g,n,p,!1),c.trigger(g,e.ROTATION,j)}}},rotateSingleFinger:function(a){var d=a.target;if(t&&b.getFingers(a)<2){if(!f.move)return;if(u.length<2){var g=b.getXYByElement(d);u=[{x:g.left+d.offsetWidth/2,y:g.top+d.offsetHeight/2},f.move[0]],v=parseInt(b.getAngle180(u[0],u[1]),10)}var h=[u[0],f.move[0]],i=this.getAngleDiff(h),j={type:"",originEvent:a,rotation:i,direction:i>0?"right":"left",fingersCount:b.getFingers(a)};b.isTouchMove(a)?j.fingerStatus="move":(b.isTouchEnd(a)||"mouseout"===a.type)&&(j.fingerStatus="end",c.trigger(d,e.PINCH_END,j),b.reset());var k=i>0?e.ROTATION_RIGHT:e.ROTATION_LEFT;c.trigger(d,k,j),c.trigger(d,e.ROTATION,j)}},swipe:function(a){var h=a.target;if(o&&f.move&&!(b.getFingers(a)>1)){var i=Date.now(),j=i-g,l=b.getDistance(f.start[0],f.move[0]),p={x:f.move[0].x-n.left,y:f.move[0].y-n.top},q=b.getAngle(f.start[0],f.move[0]),r=b.getDirectionFromAngle(q),s=j/1e3,t=10*(10-d.swipeFactor)*s*s,u={type:e.SWIPE,originEvent:a,position:p,direction:r,distance:l,distanceX:f.move[0].x-f.start[0].x,distanceY:f.move[0].y-f.start[0].y,x:f.move[0].x-f.start[0].x,y:f.move[0].y-f.start[0].y,angle:q,duration:j,fingersCount:b.getFingers(a),factor:t};if(d.swipe){var v=function(){var a=e;switch(r){case"up":c.trigger(h,a.SWIPE_UP,u);break;case"down":c.trigger(h,a.SWIPE_DOWN,u);break;case"left":c.trigger(h,a.SWIPE_LEFT,u);break;case"right":c.trigger(h,a.SWIPE_RIGHT,u)}};k?b.isTouchMove(a)?(u.fingerStatus=u.swipe="move",c.trigger(h,e.SWIPING,u),j>d.swipeTime&&j<d.swipeTime+50&&l>d.swipeMinDistance&&(v(),c.trigger(h,e.SWIPE,u,!1))):(b.isTouchEnd(a)||"mouseout"===a.type)&&(u.fingerStatus=u.swipe="end",c.trigger(h,e.SWIPE_END,u),d.swipeTime>j&&l>d.swipeMinDistance&&(v(),c.trigger(h,e.SWIPE,u,!1))):(u.fingerStatus=u.swipe="start",k=!0,c.trigger(h,e.SWIPE_START,u))}d.drag&&(m?b.isTouchMove(a)?(u.fingerStatus=u.swipe="move",c.trigger(h,e.DRAG,u)):b.isTouchEnd(a)&&(u.fingerStatus=u.swipe="end",c.trigger(h,e.DRAGEND,u)):(u.fingerStatus=u.swipe="start",m=!0,c.trigger(h,e.DRAGSTART,u)))}},tap:function(a){var h=a.target;if(d.tap){var i=Date.now(),j=i-g,k=b.getDistance(f.start[0],f.move?f.move[0]:f.start[0]);clearTimeout(p);var l=function(){if(y&&d.doubleTap&&g-x<d.maxDoubleTapInterval){var a=b.getDistance(y,f.start[0]);if(16>a)return!0}return!1}();if(l)return clearTimeout(r),void c.trigger(h,e.DOUBLE_TAP,{type:e.DOUBLE_TAP,originEvent:a,position:f.start[0]});if(d.tapMaxDistance<k)return;d.holdTime>j&&b.getFingers(a)<=1&&(q=!0,x=i,y=f.start[0],r=setTimeout(function(){c.trigger(h,e.TAP,{type:e.TAP,originEvent:a,fingersCount:b.getFingers(a),position:y})},d.tapTime))}},hold:function(a){var e=a.target;d.hold&&(clearTimeout(p),p=setTimeout(function(){if(f.start){var g=b.getDistance(f.start[0],f.move?f.move[0]:f.start[0]);d.tapMaxDistance<g||q||c.trigger(e,"hold",{type:"hold",originEvent:a,fingersCount:b.getFingers(a),position:f.start[0]})}},d.holdTime))}},A=function(a){var c=a.target;switch(a.type){case"touchstart":case"mousedown":u=[],o=!0,(!f.start||f.start.length<2)&&(f.start=b.getPosOfEvent(a)),b.getFingers(a)>=2&&(v=parseInt(b.getAngle180(f.start[0],f.start[1]),10)),g=Date.now(),h=a,n={};var d=c.getBoundingClientRect(),e=document.documentElement;n={top:d.top+(window.pageYOffset||e.scrollTop)-(e.clientTop||0),left:d.left+(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)},z.hold(a);break;case"touchmove":case"mousemove":if(!o||!f.start)return;f.move=b.getPosOfEvent(a),b.getFingers(a)>=2?z.pinch(a):t?z.rotateSingleFinger(a):z.swipe(a);break;case"touchend":case"touchcancel":case"mouseup":case"mouseout":if(!o)return;j=a,l?z.pinch(a):t?z.rotateSingleFinger(a):k?z.swipe(a):z.tap(a),b.reset(),v=0,w=0,a.touches&&1===a.touches.length&&(o=!0,t=!0)}},B=function(){function a(a){b.hasTouch||(a=b.getPCevts(a)),j.forEach(function(b){c.delegate(b,a,h,g[a])})}function d(a){b.hasTouch||(a=b.getPCevts(a)),j.forEach(function(b){c.bind(b,a,g[a])})}var e,f,g,h,i=arguments;if(i.length<2||i>4)return console.error("unexpected arguments!");var j="string"===b.getType(i[0])?document.querySelectorAll(i[0]):i[0];if(j=j.length?Array.prototype.slice.call(j):[j],3===i.length&&"string"===b.getType(i[1]))return e=i[1].split(" "),f=i[2],void e.forEach(function(a){b.hasTouch||(a=b.getPCevts(a)),j.forEach(function(b){c.bind(b,a,f)})});if(3!==i.length||"object"!==b.getType(i[1]))if(2!==i.length||"object"!==b.getType(i[1])){if(4===i.length&&"object"===b.getType(i[2]))return e=i[1].split(" "),f=i[3],void e.forEach(function(a){b.hasTouch||(a=b.getPCevts(a)),j.forEach(function(b){c.bind(b,a,f)})});if(4===i.length){var k=j[0];return e=i[1].split(" "),h=i[2],f=i[3],void e.forEach(function(a){b.hasTouch||(a=b.getPCevts(a)),c.delegate(k,a,h,f)})}}else{g=i[1];for(var l in g)d(l)}else{g=i[1],h=i[2];for(var m in g)a(m)}},C=function(){var a,d,e=arguments;if(e.length<1||e.length>4)return console.error("unexpected arguments!");var f="string"===b.getType(e[0])?document.querySelectorAll(e[0]):e[0];if(f=f.length?Array.prototype.slice.call(f):[f],1===e.length||2===e.length)return void f.forEach(function(d){a=e[1]?e[1].split(" "):Object.keys(d.listeners),a.length&&a.forEach(function(a){b.hasTouch||(a=b.getPCevts(a)),c.unbind(d,a),c.undelegate(d,a)})});if(3===e.length&&"function"===b.getType(e[2]))return d=e[2],void f.forEach(function(f){a=e[1].split(" "),a.forEach(function(a){b.hasTouch||(a=b.getPCevts(a)),c.unbind(f,a,d)})});if(3===e.length&&"string"===b.getType(e[2])){var g=e[2];return void f.forEach(function(d){a=e[1].split(" "),a.forEach(function(a){b.hasTouch||(a=b.getPCevts(a)),c.undelegate(d,a,g)})})}return 4===e.length?(d=e[3],void f.forEach(function(f){a=e[1].split(" "),a.forEach(function(a){b.hasTouch||(a=b.getPCevts(a)),c.undelegate(f,a,g,d)})})):void 0},D=function(a,d,e){var f=arguments;b.hasTouch||(d=b.getPCevts(d));var g="string"===b.getType(f[0])?document.querySelectorAll(f[0]):f[0];g=g.length?Array.prototype.call(g):[g],g.forEach(function(a){c.trigger(a,d,e)})};a();var E={};return E.on=E.bind=E.live=B,E.off=E.unbind=E.die=C,E.config=d,E.trigger=D,E});
// threejs.org/license
'use strict';var THREE={REVISION:"71"};"object"===typeof module&&(module.exports=THREE);void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});THREE.log=function(){console.log.apply(console,arguments)};THREE.warn=function(){console.warn.apply(console,arguments)};THREE.error=function(){console.error.apply(console,arguments)};THREE.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};THREE.CullFaceNone=0;THREE.CullFaceBack=1;THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;THREE.FrontFaceDirectionCW=0;
THREE.FrontFaceDirectionCCW=1;THREE.BasicShadowMap=0;THREE.PCFShadowMap=1;THREE.PCFSoftShadowMap=2;THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;
THREE.MinEquation=103;THREE.MaxEquation=104;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;THREE.SrcAlphaSaturateFactor=210;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=300;THREE.CubeReflectionMapping=301;THREE.CubeRefractionMapping=302;
THREE.EquirectangularReflectionMapping=303;THREE.EquirectangularRefractionMapping=304;THREE.SphericalReflectionMapping=305;THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;
THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.HalfFloatType=1025;THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;THREE.RGBEFormat=THREE.RGBAFormat;THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;
THREE.RGBA_S3TC_DXT5_Format=2004;THREE.RGB_PVRTC_4BPPV1_Format=2100;THREE.RGB_PVRTC_2BPPV1_Format=2101;THREE.RGBA_PVRTC_4BPPV1_Format=2102;THREE.RGBA_PVRTC_2BPPV1_Format=2103;
THREE.Projector=function(){THREE.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");this.projectVector=function(a,b){THREE.warn("THREE.Projector: .projectVector() is now vector.project().");a.project(b)};this.unprojectVector=function(a,b){THREE.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");a.unproject(b)};this.pickingRay=function(a,b){THREE.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}};
THREE.CanvasRenderer=function(){THREE.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");this.domElement=document.createElement("canvas");this.clear=function(){};this.render=function(){};this.setClearColor=function(){};this.setSize=function(){}};THREE.Color=function(a){return 3===arguments.length?this.setRGB(arguments[0],arguments[1],arguments[2]):this.set(a)};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(a){a instanceof THREE.Color?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(a,b,c){if(0===b)this.r=this.g=this.b=c;else{var d=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*
c:.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a};b=.5>=c?c*(1+b):c+b-c*b;c=2*c-b;this.r=d(c,b,a+1/3);this.g=d(c,b,a);this.b=d(c,b,a-1/3)}return this},setStyle:function(a){if(/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(a))return a=/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(a),this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,this;if(/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(a))return a=/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(a),this.r=
Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,this;if(/^\#([0-9a-f]{6})$/i.test(a))return a=/^\#([0-9a-f]{6})$/i.exec(a),this.setHex(parseInt(a[1],16)),this;if(/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a))return a=/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a),this.setHex(parseInt(a[1]+a[1]+a[2]+a[2]+a[3]+a[3],16)),this;if(/^(\w+)$/i.test(a))return this.setHex(THREE.ColorKeywords[a]),this},copy:function(a){this.r=a.r;this.g=
a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);var c=0<b?1/b:1;this.r=Math.pow(a.r,c);this.g=Math.pow(a.g,c);this.b=Math.pow(a.b,c);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=
Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var k=e-f,f=.5>=h?k/(e+f):k/(2-e-f);switch(e){case b:g=(c-d)/k+(c<d?6:0);break;case c:g=(d-b)/k+2;break;case d:g=(b-c)/k+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+
(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;
return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a){this.r=a[0];this.g=a[1];this.b=a[2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};
THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,
tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Quaternion=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,_x:0,_y:0,_z:0,_w:0,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get w(){return this._w},set w(a){this._w=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;
this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!1===a instanceof THREE.Euler)throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2);"XYZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=
c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===a.order&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e+f*g*h);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,
b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],k=b[6],b=b[10],l=c+f+b;0<l?(c=.5/Math.sqrt(l+1),this._w=.25/c,this._x=(k-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(k-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=
.25*c,this._z=(g+k)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+k)/c,this._z=.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3);b=c.dot(d)+1;1E-6>b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;this.normalize();return this}}(),inverse:function(){this.conjugate().normalize();return this},conjugate:function(){this._x*=
-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},
multiply:function(a,b){return void 0!==b?(THREE.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,k=b._z,l=b._w;this._x=c*l+f*g+d*k-e*h;this._y=d*l+f*h+e*g-c*k;this._z=e*l+f*k+c*h-d*g;this._w=f*l-c*g-d*h-e*k;this.onChangeCallback();return this},multiplyVector3:function(a){THREE.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
return a.applyQuaternion(this)},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.acos(g),k=Math.sqrt(1-g*g);if(.001>Math.abs(k))return this._w=.5*(f+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;g=Math.sin((1-b)*h)/k;h=
Math.sin(b*h)/k;this._w=f*g+this._w*h;this._x=c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},onChange:function(a){this.onChangeCallback=
a;return this},onChangeCallback:function(){},clone:function(){return new THREE.Quaternion(this._x,this._y,this._z,this._w)}};THREE.Quaternion.slerp=function(a,b,c,d){return c.copy(a).slerp(b,d)};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,
b){if(void 0!==b)return THREE.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},sub:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},
subScalar:function(a){this.x-=a;this.y-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a):this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);return this},max:function(a){this.x<a.x&&(this.x=a.x);
this.y<a.y&&(this.y=a.y);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector2,b=new THREE.Vector2);a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=
Math.round(this.x);this.y=Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},
distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===
a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];return this},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+
a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},sub:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=
a;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a;return function(b){!1===b instanceof THREE.Euler&&THREE.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.");void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromEuler(b));return this}}(),applyAxisAngle:function(){var a;return function(b,c){void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromAxisAngle(b,
c));return this}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},applyProjection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*
c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,k=a*c+g*b-e*d,l=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+k*-g-l*-f;this.y=k*a+b*-f+l*-e-h*-g;this.z=l*a+b*-g+h*-f-k*-e;return this},project:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.multiplyMatrices(b.projectionMatrix,a.getInverse(b.matrixWorld));return this.applyProjection(a)}}(),
unproject:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix));return this.applyProjection(a)}}(),transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;this.normalize();return this},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=
a):this.z=this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3,
b=new THREE.Vector3);a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):
Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},
setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,b,c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},cross:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=
e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=e*f-c*h;this.z=c*g-d*f;return this},projectOnVector:function(){var a,b;return function(c){void 0===a&&(a=new THREE.Vector3);a.copy(c).normalize();b=this.dot(a);return this.copy(a).multiplyScalar(b)}}(),projectOnPlane:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a;return function(b){void 0===
a&&(a=new THREE.Vector3);return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/(this.length()*a.length());return Math.acos(THREE.Math.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},setEulerFromRotationMatrix:function(a,b){THREE.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},
setEulerFromQuaternion:function(a,b){THREE.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(a){THREE.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){THREE.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,
b){THREE.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(a,b)},setFromMatrixPosition:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},setFromMatrixScale:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length();a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=a;
return this},setFromMatrixColumn:function(a,b){var c=4*a,d=b.elements;this.x=d[c];this.y=d[c+1];this.z=d[c+2];return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=
a.array[b+2];return this},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,
b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},sub:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=
a;this.y*=a;this.z*=a;this.w*=a;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a):(this.z=this.y=this.x=0,this.w=1);return this},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>
b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],k=a[9];c=a[2];b=a[6];var l=a[10];if(.01>Math.abs(d-g)&&.01>Math.abs(f-c)&&.01>Math.abs(k-b)){if(.1>Math.abs(d+g)&&.1>Math.abs(f+c)&&.1>Math.abs(k+b)&&.1>Math.abs(e+h+l-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;l=(l+1)/2;d=(d+g)/4;f=(f+c)/4;k=(k+b)/4;e>h&&e>l?.01>e?(b=0,d=c=.707106781):(b=
Math.sqrt(e),c=d/b,d=f/b):h>l?.01>h?(b=.707106781,c=0,d=.707106781):(c=Math.sqrt(h),b=d/c,d=k/c):.01>l?(c=b=.707106781,d=0):(d=Math.sqrt(l),b=f/d,c=k/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-k)*(b-k)+(f-c)*(f-c)+(g-d)*(g-d));.001>Math.abs(a)&&(a=1);this.x=(b-k)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+l-1)/2);return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);this.w>a.w&&(this.w=a.w);return this},max:function(a){this.x<a.x&&
(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);this.w<a.w&&(this.w=a.w);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);this.w<a.w?this.w=a.w:this.w>b.w&&(this.w=b.w);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector4,b=new THREE.Vector4);a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=
Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);
this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+
Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,b,c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},
fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=a.array[b+2];this.w=a.array[b+3];return this},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)}};
THREE.Euler=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||THREE.Euler.DefaultOrder};THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");THREE.Euler.DefaultOrder="XYZ";
THREE.Euler.prototype={constructor:THREE.Euler,_x:0,_y:0,_z:0,_order:THREE.Euler.DefaultOrder,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get order(){return this._order},set order(a){this._order=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},copy:function(a){this._x=
a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=THREE.Math.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],k=e[5],l=e[9],p=e[2],q=e[6],e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.99999>Math.abs(g)?(this._x=Math.atan2(-l,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(q,k),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(l,-1,1)),.99999>Math.abs(l)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,
k)):(this._y=Math.atan2(-p,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(q,-1,1)),.99999>Math.abs(q)?(this._y=Math.atan2(-p,e),this._z=Math.atan2(-f,k)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(p,-1,1)),.99999>Math.abs(p)?(this._x=Math.atan2(q,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,k))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?(this._x=Math.atan2(-l,k),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=
Math.asin(-d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(q,k),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-l,e),this._y=0)):THREE.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this},setFromQuaternion:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);a.makeRotationFromQuaternion(b);this.setFromRotationMatrix(a,c,d);return this}}(),setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,
b||this._order)},reorder:function(){var a=new THREE.Quaternion;return function(b){a.setFromEuler(this);this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._order;return a},toVector3:function(a){return a?
a.set(this._x,this._y,this._z):new THREE.Vector3(this._x,this._y,this._z)},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){},clone:function(){return new THREE.Euler(this._x,this._y,this._z,this._order)}};THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3;this.end=void 0!==b?b:new THREE.Vector3};
THREE.Line3.prototype={constructor:THREE.Line3,set:function(a,b){this.start.copy(a);this.end.copy(b);return this},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},center:function(a){return(a||new THREE.Vector3).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return(a||new THREE.Vector3).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,
b){var c=b||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=THREE.Math.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);
this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)},clone:function(){return(new THREE.Line3).copy(this)}};THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector2(-Infinity,-Infinity)};
THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector2;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=
this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(a){return(a||new THREE.Vector2).addVectors(this.min,this.max).multiplyScalar(.5)},size:function(a){return(a||new THREE.Vector2).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);
this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector2).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>
this.max.y?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector2).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector2;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&
a.max.equals(this.max)},clone:function(){return(new THREE.Box2).copy(this)}};THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector3(-Infinity,-Infinity,-Infinity)};
THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector3;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new THREE.Vector3;return function(b){var c=this;b.updateMatrixWorld(!0);
this.makeEmpty();b.traverse(function(b){var e=b.geometry;if(void 0!==e)if(e instanceof THREE.Geometry)for(var f=e.vertices,e=0,g=f.length;e<g;e++)a.copy(f[e]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a);else if(e instanceof THREE.BufferGeometry&&void 0!==e.attributes.position)for(f=e.attributes.position.array,e=0,g=f.length;e<g;e+=3)a.set(f[e],f[e+1],f[e+2]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},
makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},center:function(a){return(a||new THREE.Vector3).addVectors(this.min,this.max).multiplyScalar(.5)},size:function(a){return(a||new THREE.Vector3).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);
this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector3).set((a.x-this.min.x)/(this.max.x-
this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector3).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=
new THREE.Vector3;return function(b){b=b||new THREE.Sphere;b.center=this.center();b.radius=.5*this.size(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(b){a[0].set(this.min.x,this.min.y,
this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.makeEmpty();this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);
this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box3).copy(this)}};THREE.Matrix3=function(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]);0<arguments.length&&THREE.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(a,b,c,d,e,f,g,h,k){var l=this.elements;l[0]=a;l[3]=b;l[6]=c;l[1]=d;l[4]=e;l[7]=f;l[2]=g;l[5]=h;l[8]=k;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},multiplyVector3:function(a){THREE.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},
multiplyVector3Array:function(a){THREE.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},applyToVector3Array:function(){var a=new THREE.Vector3;return function(b,c,d){void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix3(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=
a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],k=a[7],a=a[8];return b*f*a-b*g*k-c*e*a+c*g*h+d*e*k-d*f*h},getInverse:function(a,b){var c=a.elements,d=this.elements;d[0]=c[10]*c[5]-c[6]*c[9];d[1]=-c[10]*c[1]+c[2]*c[9];d[2]=c[6]*c[1]-c[2]*c[5];d[3]=-c[10]*c[4]+c[6]*c[8];d[4]=c[10]*c[0]-c[2]*c[8];d[5]=-c[6]*c[0]+c[2]*c[4];d[6]=c[9]*c[4]-c[5]*c[8];d[7]=-c[9]*c[0]+c[1]*c[8];d[8]=c[5]*c[0]-c[1]*c[4];
c=c[0]*d[0]+c[1]*d[3]+c[2]*d[6];if(0===c){if(b)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");THREE.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/c);return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];
a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a},getNormalMatrix:function(a){this.getInverse(a).transpose();return this},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]]},clone:function(){return(new THREE.Matrix3).fromArray(this.elements)}};
THREE.Matrix4=function(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);0<arguments.length&&THREE.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,g,h,k,l,p,q,n,t,r,s){var u=this.elements;u[0]=a;u[4]=b;u[8]=c;u[12]=d;u[1]=e;u[5]=f;u[9]=g;u[13]=h;u[2]=k;u[6]=l;u[10]=p;u[14]=q;u[3]=n;u[7]=t;u[11]=r;u[15]=s;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){this.elements.set(a.elements);return this},extractPosition:function(a){THREE.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a)},
copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,b,c){var d=this.elements;a.set(d[0],d[1],d[2]);b.set(d[4],d[5],d[6]);c.set(d[8],d[9],d[10]);return this},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(){var a=new THREE.Vector3;return function(b){var c=this.elements;b=b.elements;var d=1/a.set(b[0],b[1],b[2]).length(),e=1/a.set(b[4],b[5],b[6]).length(),
f=1/a.set(b[8],b[9],b[10]).length();c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;c[4]=b[4]*e;c[5]=b[5]*e;c[6]=b[6]*e;c[8]=b[8]*f;c[9]=b[9]*f;c[10]=b[10]*f;return this}}(),makeRotationFromEuler:function(a){!1===a instanceof THREE.Euler&&THREE.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){a=f*h;var k=f*e,
l=c*h,p=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=k+l*d;b[5]=a-p*d;b[9]=-c*g;b[2]=p-a*d;b[6]=l+k*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,k=g*e,l=d*h,p=d*e,b[0]=a+p*c,b[4]=l*c-k,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=k*c-l,b[6]=p+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,k=g*e,l=d*h,p=d*e,b[0]=a-p*c,b[4]=-f*e,b[8]=l+k*c,b[1]=k+l*c,b[5]=f*h,b[9]=p-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,k=f*e,l=c*h,p=c*e,b[0]=g*h,b[4]=l*d-k,b[8]=a*d+p,b[1]=g*e,b[5]=p*d+a,b[9]=k*d-l,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===
a.order?(a=f*g,k=f*d,l=c*g,p=c*d,b[0]=g*h,b[4]=p-a*e,b[8]=l*e+k,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*e+l,b[10]=a-p*e):"XZY"===a.order&&(a=f*g,k=f*d,l=c*g,p=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+p,b[5]=f*h,b[9]=k*e-l,b[2]=l*e-k,b[6]=c*h,b[10]=p*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},setRotationFromQuaternion:function(a){THREE.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a)},
makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,k=e+e;a=c*g;var l=c*h,c=c*k,p=d*h,d=d*k,e=e*k,g=f*g,h=f*h,f=f*k;b[0]=1-(p+e);b[4]=l-f;b[8]=c+h;b[1]=l+f;b[5]=1-(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+p);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f){var g=this.elements;c.subVectors(d,e).normalize();0===c.length()&&(c.z=1);a.crossVectors(f,
c).normalize();0===a.length()&&(c.x+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(THREE.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],
k=c[12],l=c[1],p=c[5],q=c[9],n=c[13],t=c[2],r=c[6],s=c[10],u=c[14],v=c[3],x=c[7],D=c[11],c=c[15],w=d[0],y=d[4],A=d[8],E=d[12],G=d[1],F=d[5],z=d[9],I=d[13],U=d[2],M=d[6],H=d[10],L=d[14],P=d[3],N=d[7],R=d[11],d=d[15];e[0]=f*w+g*G+h*U+k*P;e[4]=f*y+g*F+h*M+k*N;e[8]=f*A+g*z+h*H+k*R;e[12]=f*E+g*I+h*L+k*d;e[1]=l*w+p*G+q*U+n*P;e[5]=l*y+p*F+q*M+n*N;e[9]=l*A+p*z+q*H+n*R;e[13]=l*E+p*I+q*L+n*d;e[2]=t*w+r*G+s*U+u*P;e[6]=t*y+r*F+s*M+u*N;e[10]=t*A+r*z+s*H+u*R;e[14]=t*E+r*I+s*L+u*d;e[3]=v*w+x*G+D*U+c*P;e[7]=v*y+
x*F+D*M+c*N;e[11]=v*A+x*z+D*H+c*R;e[15]=v*E+x*I+D*L+c*d;return this},multiplyToArray:function(a,b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=
a;b[15]*=a;return this},multiplyVector3:function(a){THREE.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");return a.applyProjection(this)},multiplyVector4:function(a){THREE.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(a){THREE.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
return this.applyToVector3Array(a)},applyToVector3Array:function(){var a=new THREE.Vector3;return function(b,c,d){void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix4(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),rotateAxis:function(a){THREE.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){THREE.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
return a.applyMatrix4(this)},determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],k=a[13],l=a[2],p=a[6],q=a[10],n=a[14];return a[3]*(+e*h*p-d*k*p-e*g*q+c*k*q+d*g*n-c*h*n)+a[7]*(+b*h*n-b*k*q+e*f*q-d*f*n+d*k*l-e*h*l)+a[11]*(+b*k*p-b*g*n-e*f*p+c*f*n+e*g*l-c*k*l)+a[15]*(-d*g*l-b*h*p+b*g*q+d*f*p-c*f*q+c*h*l)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];
a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a=new THREE.Vector3;return function(){THREE.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");var b=
this.elements;return a.set(b[12],b[13],b[14])}}(),setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[4],g=d[8],h=d[12],k=d[1],l=d[5],p=d[9],q=d[13],n=d[2],t=d[6],r=d[10],s=d[14],u=d[3],v=d[7],x=d[11],d=d[15];c[0]=p*s*v-q*r*v+q*t*x-l*s*x-p*t*d+l*r*d;c[4]=h*r*v-g*s*v-h*t*x+f*s*x+g*t*d-f*r*d;c[8]=g*q*v-h*p*v+h*l*x-f*q*x-g*l*d+f*p*d;c[12]=h*p*t-g*q*t-h*l*r+f*q*r+g*l*s-f*p*s;c[1]=q*r*u-p*s*u-q*n*x+
k*s*x+p*n*d-k*r*d;c[5]=g*s*u-h*r*u+h*n*x-e*s*x-g*n*d+e*r*d;c[9]=h*p*u-g*q*u-h*k*x+e*q*x+g*k*d-e*p*d;c[13]=g*q*n-h*p*n+h*k*r-e*q*r-g*k*s+e*p*s;c[2]=l*s*u-q*t*u+q*n*v-k*s*v-l*n*d+k*t*d;c[6]=h*t*u-f*s*u-h*n*v+e*s*v+f*n*d-e*t*d;c[10]=f*q*u-h*l*u+h*k*v-e*q*v-f*k*d+e*l*d;c[14]=h*l*n-f*q*n-h*k*t+e*q*t+f*k*s-e*l*s;c[3]=p*t*u-l*r*u-p*n*v+k*r*v+l*n*x-k*t*x;c[7]=f*r*u-g*t*u+g*n*v-e*r*v-f*n*x+e*t*x;c[11]=g*l*u-f*p*u-g*k*v+e*p*v+f*k*x-e*l*x;c[15]=f*p*n-g*l*n+g*k*t-e*p*t-f*k*r+e*l*r;c=e*c[0]+k*c[4]+n*c[8]+u*c[12];
if(0==c){if(b)throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");THREE.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/c);return this},translate:function(a){THREE.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(a){THREE.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(a){THREE.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(a){THREE.error("THREE.Matrix4: .rotateZ() has been removed.")},
rotateByAxis:function(a,b){THREE.error("THREE.Matrix4: .rotateByAxis() has been removed.")},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,
c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,k=e*f,l=e*g;this.set(k*f+c,k*g-d*h,k*h+d*g,0,k*g+
d*h,l*g+c,l*h-d*f,0,k*h-d*g,l*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a=new THREE.Vector3,b=new THREE.Matrix4;return function(c,d,e){var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),k=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];
c.y=f[13];c.z=f[14];b.elements.set(this.elements);c=1/g;var f=1/h,l=1/k;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=l;b.elements[9]*=l;b.elements[10]*=l;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=k;return this}}(),makeFrustum:function(a,b,c,d,e,f){var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;
g[11]=-1;g[15]=0;return this},makePerspective:function(a,b,c,d){a=c*Math.tan(THREE.Math.degToRad(.5*a));var e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=b-a,k=c-d,l=f-e;g[0]=2/h;g[4]=0;g[8]=0;g[12]=-((b+a)/h);g[1]=0;g[5]=2/k;g[9]=0;g[13]=-((c+d)/k);g[2]=0;g[6]=0;g[10]=-2/l;g[14]=-((f+e)/l);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],
a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]},clone:function(){return(new THREE.Matrix4).fromArray(this.elements)}};THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3;this.direction=void 0!==b?b:new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)},recast:function(){var a=new THREE.Vector3;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new THREE.Vector3;c.subVectors(a,this.origin);
var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceTo(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceTo(b)}}(),distanceSqToSegment:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g){a.copy(d).add(e).multiplyScalar(.5);
b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);var h=.5*d.distanceTo(e),k=-this.direction.dot(b),l=c.dot(this.direction),p=-c.dot(b),q=c.lengthSq(),n=Math.abs(1-k*k),t;0<n?(d=k*p-l,e=k*l-p,t=h*n,0<=d?e>=-t?e<=t?(h=1/n,d*=h,e*=h,k=d*(d+k*e+2*l)+e*(k*d+e+2*p)+q):(e=h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*p)+q):(e=-h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*p)+q):e<=-t?(d=Math.max(0,-(-k*h+l)),e=0<d?-h:Math.min(Math.max(-h,-p),h),k=-d*d+e*(e+2*p)+q):e<=t?(d=0,e=Math.min(Math.max(-h,-p),h),k=e*(e+
2*p)+q):(d=Math.max(0,-(k*h+l)),e=0<d?h:Math.min(Math.max(-h,-p),h),k=-d*d+e*(e+2*p)+q)):(e=0<k?-h:h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*p)+q);f&&f.copy(this.direction).multiplyScalar(d).add(this.origin);g&&g.copy(b).multiplyScalar(e).add(a);return k}}(),isIntersectionSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},intersectSphere:function(){var a=new THREE.Vector3;return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;
if(e>f)return null;f=Math.sqrt(f-e);e=d-f;d+=f;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),isIntersectionPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0==b)return 0==a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},
isIntersectionBox:function(){var a=new THREE.Vector3;return function(b){return null!==this.intersectBox(b,a)}}(),intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*
g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectTriangle:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Vector3;return function(e,f,g,h,k){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>f)h=-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));
if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,k)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)},clone:function(){return(new THREE.Ray).copy(this)}};THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3;this.radius=void 0!==b?b:0};
THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new THREE.Box3;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).center(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=
this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new THREE.Vector3;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=a||new THREE.Box3;a.set(this.center,this.center);a.expandByScalar(this.radius);
return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius},clone:function(){return(new THREE.Sphere).copy(this)}};
THREE.Frustum=function(a,b,c,d,e,f){this.planes=[void 0!==a?a:new THREE.Plane,void 0!==b?b:new THREE.Plane,void 0!==c?c:new THREE.Plane,void 0!==d?d:new THREE.Plane,void 0!==e?e:new THREE.Plane,void 0!==f?f:new THREE.Plane]};
THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],k=c[6],l=c[7],p=c[8],q=c[9],n=c[10],t=c[11],r=c[12],s=c[13],u=c[14],c=c[15];b[0].setComponents(f-a,l-g,t-p,c-r).normalize();b[1].setComponents(f+
a,l+g,t+p,c+r).normalize();b[2].setComponents(f+d,l+h,t+q,c+s).normalize();b[3].setComponents(f-d,l-h,t-q,c-s).normalize();b[4].setComponents(f-e,l-k,t-n,c-u).normalize();b[5].setComponents(f+e,l+k,t+n,c+u).normalize();return this},intersectsObject:function(){var a=new THREE.Sphere;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere);a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSphere:function(a){var b=this.planes,
c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>g&&0>f)return!1}return!0}}(),
containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0},clone:function(){return(new THREE.Frustum).copy(this)}};THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0);this.constant=void 0!==b?b:0};
THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,
c);return this}}(),copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,
b){var c=this.distanceToPoint(a);return(b||new THREE.Vector3).copy(this.normal).multiplyScalar(c)},isIntersectionLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectLine:function(){var a=new THREE.Vector3;return function(b,c){var d=c||new THREE.Vector3,e=b.delta(a),f=this.normal.dot(e);if(0==f){if(0==this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),
coplanarPoint:function(a){return(a||new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(d,e){var f=e||c.getNormalMatrix(d),f=a.copy(this.normal).applyMatrix3(f),g=this.coplanarPoint(b);g.applyMatrix4(d);this.setFromNormalAndCoplanarPoint(f,g);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&
a.constant==this.constant},clone:function(){return(new THREE.Plane).copy(this)}};
THREE.Math={generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8==e||13==e||18==e||23==e?b[e]="-":14==e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19==e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},smoothstep:function(a,b,c){if(a<=
b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return Math.floor(this.randFloat(a,b))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(){var a=Math.PI/180;return function(b){return b*a}}(),radToDeg:function(){var a=
180/Math.PI;return function(b){return b*a}}(),isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},nextPowerOfTwo:function(a){a--;a|=a>>1;a|=a>>2;a|=a>>4;a|=a>>8;a|=a>>16;a++;return a}};
THREE.Spline=function(a){function b(a,b,c,d,e,f,g){a=.5*(c-a);d=.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,k,l,p,q,n;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:f+
2;l=this.points[c[0]];p=this.points[c[1]];q=this.points[c[2]];n=this.points[c[3]];h=g*g;k=g*h;d.x=b(l.x,p.x,q.x,n.x,g,h,k);d.y=b(l.y,p.y,q.y,n.y,g,h,k);d.z=b(l.z,p.z,q.z,n.z,g,h,k);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3,g=new THREE.Vector3,h=[],k=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),g.copy(d),k+=g.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!=e&&(h[b]=k,e=b);h[h.length]=k;return{chunks:h,total:k}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],k=new THREE.Vector3,n=this.getLength();h.push(k.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=n.chunks[b]-n.chunks[b-1];g=Math.ceil(a*c/n.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++)d=e+1/g*c*(f-e),d=this.getPoint(d),h.push(k.copy(d).clone());
h.push(k.copy(this.points[b]).clone())}this.points=h}};THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3;this.b=void 0!==b?b:new THREE.Vector3;this.c=void 0!==c?c:new THREE.Vector3};THREE.Triangle.normal=function(){var a=new THREE.Vector3;return function(b,c,d,e){e=e||new THREE.Vector3;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();
THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var k=b.dot(b);g=b.dot(c);var l=d*k-e*e;h=h||new THREE.Vector3;if(0==l)return h.set(-2,-1,-1);l=1/l;k=(k*f-e*g)*l;d=(d*g-e*f)*l;return h.set(1-k-d,d,k)}}();
THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3;return function(b,c,d,e){b=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();
THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return.5*a.cross(b).length()}}(),midpoint:function(a){return(a||
new THREE.Vector3).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return THREE.Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new THREE.Plane).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c)},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)},
clone:function(){return(new THREE.Triangle).copy(this)}};THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.oldTime=this.startTime=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now();this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now(),
a=.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a}};THREE.EventDispatcher=function(){};
THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(a){a.addEventListener=THREE.EventDispatcher.prototype.addEventListener;a.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener;a.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener;a.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&
c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;for(var c=[],d=b.length,e=0;e<d;e++)c[e]=b[e];for(e=0;e<d;e++)c[e].call(this,a)}}}};
(function(a){a.Raycaster=function(b,c,f,g){this.ray=new a.Ray(b,c);this.near=f||0;this.far=g||Infinity;this.params={Sprite:{},Mesh:{},PointCloud:{threshold:1},LOD:{},Line:{}}};var b=function(a,b){return a.distance-b.distance},c=function(a,b,f,g){a.raycast(b,f);if(!0===g){a=a.children;g=0;for(var h=a.length;g<h;g++)c(a[g],b,f,!0)}};a.Raycaster.prototype={constructor:a.Raycaster,precision:1E-4,linePrecision:1,set:function(a,b){this.ray.set(a,b)},setFromCamera:function(b,c){c instanceof a.PerspectiveCamera?
(this.ray.origin.copy(c.position),this.ray.direction.set(b.x,b.y,.5).unproject(c).sub(c.position).normalize()):c instanceof a.OrthographicCamera?(this.ray.origin.set(b.x,b.y,-1).unproject(c),this.ray.direction.set(0,0,-1).transformDirection(c.matrixWorld)):a.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(a,e){var f=[];c(a,this,f,e);f.sort(b);return f},intersectObjects:function(d,e){var f=[];if(!1===d instanceof Array)return a.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
f;for(var g=0,h=d.length;g<h;g++)c(d[g],this,f,e);f.sort(b);return f}}})(THREE);
THREE.Object3D=function(){Object.defineProperty(this,"id",{value:THREE.Object3DIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Object3D";this.parent=void 0;this.children=[];this.up=THREE.Object3D.DefaultUp.clone();var a=new THREE.Vector3,b=new THREE.Euler,c=new THREE.Quaternion,d=new THREE.Vector3(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{enumerable:!0,value:a},rotation:{enumerable:!0,
value:b},quaternion:{enumerable:!0,value:c},scale:{enumerable:!0,value:d}});this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixAutoUpdate=!0;this.matrixWorldNeedsUpdate=!1;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={}};THREE.Object3D.DefaultUp=new THREE.Vector3(0,1,0);
THREE.Object3D.prototype={constructor:THREE.Object3D,get eulerOrder(){THREE.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");return this.rotation.order},set eulerOrder(a){THREE.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");this.rotation.order=a},get useQuaternion(){THREE.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set useQuaternion(a){THREE.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},
applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new THREE.Quaternion;return function(b,c){a.setFromAxisAngle(b,
c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new THREE.Vector3;return function(b,c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));
return this}}(),translate:function(a,b){THREE.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)},translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,
b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new THREE.Matrix4;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new THREE.Matrix4;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return THREE.error("THREE.Object3D.add: object can't be added as a child of itself.",
a),this;a instanceof THREE.Object3D?(void 0!==a.parent&&a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),this.children.push(a)):THREE.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this},remove:function(a){if(1<arguments.length)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);b=this.children.indexOf(a);-1!==b&&(a.parent=void 0,a.dispatchEvent({type:"removed"}),this.children.splice(b,1))},getChildByName:function(a){THREE.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
return this.getObjectByName(a)},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e}},getWorldPosition:function(a){a=a||new THREE.Vector3;this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=
new THREE.Vector3,b=new THREE.Vector3;return function(c){c=c||new THREE.Quaternion;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c}}(),getWorldRotation:function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Euler;this.getWorldQuaternion(a);return b.setFromQuaternion(a,this.rotation.order,!1)}}(),getWorldScale:function(){var a=new THREE.Vector3,b=new THREE.Quaternion;return function(c){c=c||new THREE.Vector3;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,
b,c);return c}}(),getWorldDirection:function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Vector3;this.getWorldQuaternion(a);return b.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverseVisible(a)}},traverseAncestors:function(a){this.parent&&(a(this.parent),
this.parent.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)void 0===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},
toJSON:function(){var a={metadata:{version:4.3,type:"Object",generator:"ObjectExporter"}},b={},c={},d=function(b){void 0===a.materials&&(a.materials=[]);if(void 0===c[b.uuid]){var d=b.toJSON();delete d.metadata;c[b.uuid]=d;a.materials.push(d)}return b.uuid},e=function(c){var g={};g.uuid=c.uuid;g.type=c.type;""!==c.name&&(g.name=c.name);"{}"!==JSON.stringify(c.userData)&&(g.userData=c.userData);!0!==c.visible&&(g.visible=c.visible);if(c instanceof THREE.PerspectiveCamera)g.fov=c.fov,g.aspect=c.aspect,
g.near=c.near,g.far=c.far;else if(c instanceof THREE.OrthographicCamera)g.left=c.left,g.right=c.right,g.top=c.top,g.bottom=c.bottom,g.near=c.near,g.far=c.far;else if(c instanceof THREE.AmbientLight)g.color=c.color.getHex();else if(c instanceof THREE.DirectionalLight)g.color=c.color.getHex(),g.intensity=c.intensity;else if(c instanceof THREE.PointLight)g.color=c.color.getHex(),g.intensity=c.intensity,g.distance=c.distance,g.decay=c.decay;else if(c instanceof THREE.SpotLight)g.color=c.color.getHex(),
g.intensity=c.intensity,g.distance=c.distance,g.angle=c.angle,g.exponent=c.exponent,g.decay=c.decay;else if(c instanceof THREE.HemisphereLight)g.color=c.color.getHex(),g.groundColor=c.groundColor.getHex();else if(c instanceof THREE.Mesh||c instanceof THREE.Line||c instanceof THREE.PointCloud){var h=c.geometry;void 0===a.geometries&&(a.geometries=[]);if(void 0===b[h.uuid]){var k=h.toJSON();delete k.metadata;b[h.uuid]=k;a.geometries.push(k)}g.geometry=h.uuid;g.material=d(c.material);c instanceof THREE.Line&&
(g.mode=c.mode)}else c instanceof THREE.Sprite&&(g.material=d(c.material));g.matrix=c.matrix.toArray();if(0<c.children.length)for(g.children=[],h=0;h<c.children.length;h++)g.children.push(e(c.children[h]));return g};a.object=e(this);return a},clone:function(a,b){void 0===a&&(a=new THREE.Object3D);void 0===b&&(b=!0);a.name=this.name;a.up.copy(this.up);a.position.copy(this.position);a.quaternion.copy(this.quaternion);a.scale.copy(this.scale);a.rotationAutoUpdate=this.rotationAutoUpdate;a.matrix.copy(this.matrix);
a.matrixWorld.copy(this.matrixWorld);a.matrixAutoUpdate=this.matrixAutoUpdate;a.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;a.visible=this.visible;a.castShadow=this.castShadow;a.receiveShadow=this.receiveShadow;a.frustumCulled=this.frustumCulled;a.userData=JSON.parse(JSON.stringify(this.userData));if(!0===b)for(var c=0;c<this.children.length;c++)a.add(this.children[c].clone());return a}};THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);THREE.Object3DIdCount=0;
THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=void 0!==f?f:0};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var a=new THREE.Face3(this.a,this.b,this.c);a.normal.copy(this.normal);a.color.copy(this.color);a.materialIndex=this.materialIndex;for(var b=0,c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();return a}};
THREE.Face4=function(a,b,c,d,e,f,g){THREE.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new THREE.Face3(a,b,c,e,f,g)};THREE.BufferAttribute=function(a,b){this.array=a;this.itemSize=b;this.needsUpdate=!1};
THREE.BufferAttribute.prototype={constructor:THREE.BufferAttribute,get length(){return this.array.length},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},setX:function(a,b){this.array[a*this.itemSize]=b;return this},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},setXY:function(a,
b,c){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},clone:function(){return new THREE.BufferAttribute(new this.array.constructor(this.array),this.itemSize)}};
THREE.Int8Attribute=function(a,b){THREE.warn("THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Uint8Attribute=function(a,b){THREE.warn("THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Uint8ClampedAttribute=function(a,b){THREE.warn("THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Int16Attribute=function(a,b){THREE.warn("THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Uint16Attribute=function(a,b){THREE.warn("THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Int32Attribute=function(a,b){THREE.warn("THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Uint32Attribute=function(a,b){THREE.warn("THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Float32Attribute=function(a,b){THREE.warn("THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Float64Attribute=function(a,b){THREE.warn("THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.DynamicBufferAttribute=function(a,b){THREE.BufferAttribute.call(this,a,b);this.updateRange={offset:0,count:-1}};THREE.DynamicBufferAttribute.prototype=Object.create(THREE.BufferAttribute.prototype);THREE.DynamicBufferAttribute.prototype.constructor=THREE.DynamicBufferAttribute;
THREE.DynamicBufferAttribute.prototype.clone=function(){return new THREE.DynamicBufferAttribute(new this.array.constructor(this.array),this.itemSize)};THREE.BufferGeometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="BufferGeometry";this.attributes={};this.attributesKeys=[];this.offsets=this.drawcalls=[];this.boundingSphere=this.boundingBox=null};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,addAttribute:function(a,b,c){!1===b instanceof THREE.BufferAttribute?(THREE.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.attributes[a]={array:b,itemSize:c}):(this.attributes[a]=b,this.attributesKeys=Object.keys(this.attributes))},getAttribute:function(a){return this.attributes[a]},addDrawCall:function(a,b,c){this.drawcalls.push({start:a,count:b,index:void 0!==c?c:0})},applyMatrix:function(a){var b=
this.attributes.position;void 0!==b&&(a.applyToVector3Array(b.array),b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&((new THREE.Matrix3).getNormalMatrix(a).applyToVector3Array(b.array),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere()},center:function(){this.computeBoundingBox();var a=this.boundingBox.center().negate();this.applyMatrix((new THREE.Matrix4).setPosition(a));return a},fromGeometry:function(a,b){b=b||{vertexColors:THREE.NoColors};
var c=a.vertices,d=a.faces,e=a.faceVertexUvs,f=b.vertexColors,g=0<e[0].length,h=3==d[0].vertexNormals.length,k=new Float32Array(9*d.length);this.addAttribute("position",new THREE.BufferAttribute(k,3));var l=new Float32Array(9*d.length);this.addAttribute("normal",new THREE.BufferAttribute(l,3));if(f!==THREE.NoColors){var p=new Float32Array(9*d.length);this.addAttribute("color",new THREE.BufferAttribute(p,3))}if(!0===g){var q=new Float32Array(6*d.length);this.addAttribute("uv",new THREE.BufferAttribute(q,
2))}for(var n=0,t=0,r=0;n<d.length;n++,t+=6,r+=9){var s=d[n],u=c[s.a],v=c[s.b],x=c[s.c];k[r]=u.x;k[r+1]=u.y;k[r+2]=u.z;k[r+3]=v.x;k[r+4]=v.y;k[r+5]=v.z;k[r+6]=x.x;k[r+7]=x.y;k[r+8]=x.z;!0===h?(u=s.vertexNormals[0],v=s.vertexNormals[1],x=s.vertexNormals[2],l[r]=u.x,l[r+1]=u.y,l[r+2]=u.z,l[r+3]=v.x,l[r+4]=v.y,l[r+5]=v.z,l[r+6]=x.x,l[r+7]=x.y,l[r+8]=x.z):(u=s.normal,l[r]=u.x,l[r+1]=u.y,l[r+2]=u.z,l[r+3]=u.x,l[r+4]=u.y,l[r+5]=u.z,l[r+6]=u.x,l[r+7]=u.y,l[r+8]=u.z);f===THREE.FaceColors?(s=s.color,p[r]=
s.r,p[r+1]=s.g,p[r+2]=s.b,p[r+3]=s.r,p[r+4]=s.g,p[r+5]=s.b,p[r+6]=s.r,p[r+7]=s.g,p[r+8]=s.b):f===THREE.VertexColors&&(u=s.vertexColors[0],v=s.vertexColors[1],s=s.vertexColors[2],p[r]=u.r,p[r+1]=u.g,p[r+2]=u.b,p[r+3]=v.r,p[r+4]=v.g,p[r+5]=v.b,p[r+6]=s.r,p[r+7]=s.g,p[r+8]=s.b);!0===g&&(s=e[0][n][0],u=e[0][n][1],v=e[0][n][2],q[t]=s.x,q[t+1]=s.y,q[t+2]=u.x,q[t+3]=u.y,q[t+4]=v.x,q[t+5]=v.y)}this.computeBoundingSphere();return this},computeBoundingBox:function(){var a=new THREE.Vector3;return function(){null===
this.boundingBox&&(this.boundingBox=new THREE.Box3);var b=this.attributes.position.array;if(b){var c=this.boundingBox;c.makeEmpty();for(var d=0,e=b.length;d<e;d+=3)a.set(b[d],b[d+1],b[d+2]),c.expandByPoint(a)}if(void 0===b||0===b.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0);(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&THREE.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.')}}(),
computeBoundingSphere:function(){var a=new THREE.Box3,b=new THREE.Vector3;return function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);var c=this.attributes.position.array;if(c){a.makeEmpty();for(var d=this.boundingSphere.center,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),a.expandByPoint(b);a.center(d);for(var g=0,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),g=Math.max(g,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(g);isNaN(this.boundingSphere.radius)&&
THREE.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.attributes;if(a.position){var b=a.position.array;if(void 0===a.normal)this.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(b.length),3));else for(var c=a.normal.array,d=0,e=c.length;d<e;d++)c[d]=0;var c=a.normal.array,f,g,h,k=new THREE.Vector3,l=new THREE.Vector3,
p=new THREE.Vector3,q=new THREE.Vector3,n=new THREE.Vector3;if(a.index)for(var t=a.index.array,r=0<this.offsets.length?this.offsets:[{start:0,count:t.length,index:0}],s=0,u=r.length;s<u;++s){e=r[s].start;f=r[s].count;for(var v=r[s].index,d=e,e=e+f;d<e;d+=3)f=3*(v+t[d]),g=3*(v+t[d+1]),h=3*(v+t[d+2]),k.fromArray(b,f),l.fromArray(b,g),p.fromArray(b,h),q.subVectors(p,l),n.subVectors(k,l),q.cross(n),c[f]+=q.x,c[f+1]+=q.y,c[f+2]+=q.z,c[g]+=q.x,c[g+1]+=q.y,c[g+2]+=q.z,c[h]+=q.x,c[h+1]+=q.y,c[h+2]+=q.z}else for(d=
0,e=b.length;d<e;d+=9)k.fromArray(b,d),l.fromArray(b,d+3),p.fromArray(b,d+6),q.subVectors(p,l),n.subVectors(k,l),q.cross(n),c[d]=q.x,c[d+1]=q.y,c[d+2]=q.z,c[d+3]=q.x,c[d+4]=q.y,c[d+5]=q.z,c[d+6]=q.x,c[d+7]=q.y,c[d+8]=q.z;this.normalizeNormals();a.normal.needsUpdate=!0}},computeTangents:function(){function a(a,b,c){q.fromArray(d,3*a);n.fromArray(d,3*b);t.fromArray(d,3*c);r.fromArray(f,2*a);s.fromArray(f,2*b);u.fromArray(f,2*c);v=n.x-q.x;x=t.x-q.x;D=n.y-q.y;w=t.y-q.y;y=n.z-q.z;A=t.z-q.z;E=s.x-r.x;G=
u.x-r.x;F=s.y-r.y;z=u.y-r.y;I=1/(E*z-G*F);U.set((z*v-F*x)*I,(z*D-F*w)*I,(z*y-F*A)*I);M.set((E*x-G*v)*I,(E*w-G*D)*I,(E*A-G*y)*I);k[a].add(U);k[b].add(U);k[c].add(U);l[a].add(M);l[b].add(M);l[c].add(M)}function b(a){ha.fromArray(e,3*a);O.copy(ha);ba=k[a];oa.copy(ba);oa.sub(ha.multiplyScalar(ha.dot(ba))).normalize();ja.crossVectors(O,ba);qa=ja.dot(l[a]);ca=0>qa?-1:1;h[4*a]=oa.x;h[4*a+1]=oa.y;h[4*a+2]=oa.z;h[4*a+3]=ca}if(void 0===this.attributes.index||void 0===this.attributes.position||void 0===this.attributes.normal||
void 0===this.attributes.uv)THREE.warn("THREE.BufferGeometry: Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else{var c=this.attributes.index.array,d=this.attributes.position.array,e=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/3;void 0===this.attributes.tangent&&this.addAttribute("tangent",new THREE.BufferAttribute(new Float32Array(4*g),4));for(var h=this.attributes.tangent.array,k=[],l=[],p=0;p<g;p++)k[p]=new THREE.Vector3,
l[p]=new THREE.Vector3;var q=new THREE.Vector3,n=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Vector2,s=new THREE.Vector2,u=new THREE.Vector2,v,x,D,w,y,A,E,G,F,z,I,U=new THREE.Vector3,M=new THREE.Vector3,H,L,P,N,R;0===this.drawcalls.length&&this.addDrawCall(0,c.length,0);var V=this.drawcalls,p=0;for(L=V.length;p<L;++p){H=V[p].start;P=V[p].count;var J=V[p].index,g=H;for(H+=P;g<H;g+=3)P=J+c[g],N=J+c[g+1],R=J+c[g+2],a(P,N,R)}var oa=new THREE.Vector3,ja=new THREE.Vector3,ha=new THREE.Vector3,O=new THREE.Vector3,
ca,ba,qa,p=0;for(L=V.length;p<L;++p)for(H=V[p].start,P=V[p].count,J=V[p].index,g=H,H+=P;g<H;g+=3)P=J+c[g],N=J+c[g+1],R=J+c[g+2],b(P),b(N),b(R)}},computeOffsets:function(a){void 0===a&&(a=65535);for(var b=this.attributes.index.array,c=this.attributes.position.array,d=b.length/3,e=new Uint16Array(b.length),f=0,g=0,h=[{start:0,count:0,index:0}],k=h[0],l=0,p=0,q=new Int32Array(6),n=new Int32Array(c.length),t=new Int32Array(c.length),r=0;r<c.length;r++)n[r]=-1,t[r]=-1;for(c=0;c<d;c++){for(var s=p=0;3>
s;s++)r=b[3*c+s],-1==n[r]?(q[2*s]=r,q[2*s+1]=-1,p++):n[r]<k.index?(q[2*s]=r,q[2*s+1]=-1,l++):(q[2*s]=r,q[2*s+1]=n[r]);if(g+p>k.index+a)for(k={start:f,count:0,index:g},h.push(k),p=0;6>p;p+=2)s=q[p+1],-1<s&&s<k.index&&(q[p+1]=-1);for(p=0;6>p;p+=2)r=q[p],s=q[p+1],-1===s&&(s=g++),n[r]=s,t[s]=r,e[f++]=s-k.index,k.count++}this.reorderBuffers(e,t,g);return this.drawcalls=this.offsets=h},merge:function(a,b){if(!1===a instanceof THREE.BufferGeometry)THREE.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
a);else{void 0===b&&(b=0);var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d])for(var e=c[d].array,f=a.attributes[d],g=f.array,h=0,f=f.itemSize*b;h<g.length;h++,f++)e[f]=g[h];return this}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},reorderBuffers:function(a,b,c){var d={},e;for(e in this.attributes)"index"!=e&&(d[e]=new this.attributes[e].array.constructor(this.attributes[e].itemSize*
c));for(var f=0;f<c;f++){var g=b[f];for(e in this.attributes)if("index"!=e)for(var h=this.attributes[e].array,k=this.attributes[e].itemSize,l=d[e],p=0;p<k;p++)l[f*k+p]=h[g*k+p]}this.attributes.index.array=a;for(e in this.attributes)"index"!=e&&(this.attributes[e].array=d[e],this.attributes[e].numItems=this.attributes[e].itemSize*c)},toJSON:function(){var a={metadata:{version:4,type:"BufferGeometry",generator:"BufferGeometryExporter"},uuid:this.uuid,type:this.type,data:{attributes:{}}},b=this.attributes,
c=this.offsets,d=this.boundingSphere,e;for(e in b){var f=b[e],g=Array.prototype.slice.call(f.array);a.data.attributes[e]={itemSize:f.itemSize,type:f.array.constructor.name,array:g}}0<c.length&&(a.data.offsets=JSON.parse(JSON.stringify(c)));null!==d&&(a.data.boundingSphere={center:d.center.toArray(),radius:d.radius});return a},clone:function(){var a=new THREE.BufferGeometry,b;for(b in this.attributes)a.addAttribute(b,this.attributes[b].clone());b=0;for(var c=this.offsets.length;b<c;b++){var d=this.offsets[b];
a.offsets.push({start:d.start,index:d.index,count:d.count})}return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);
THREE.Geometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.dynamic=!0;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=
this.tangentsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.elementsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){for(var b=(new THREE.Matrix3).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=
this.verticesNeedUpdate=!0},fromBufferGeometry:function(a){for(var b=this,c=a.attributes,d=c.position.array,e=void 0!==c.index?c.index.array:void 0,f=void 0!==c.normal?c.normal.array:void 0,g=void 0!==c.color?c.color.array:void 0,h=void 0!==c.uv?c.uv.array:void 0,k=[],l=[],p=c=0;c<d.length;c+=3,p+=2)b.vertices.push(new THREE.Vector3(d[c],d[c+1],d[c+2])),void 0!==f&&k.push(new THREE.Vector3(f[c],f[c+1],f[c+2])),void 0!==g&&b.colors.push(new THREE.Color(g[c],g[c+1],g[c+2])),void 0!==h&&l.push(new THREE.Vector2(h[p],
h[p+1]));var q=function(a,c,d){var e=void 0!==f?[k[a].clone(),k[c].clone(),k[d].clone()]:[],n=void 0!==g?[b.colors[a].clone(),b.colors[c].clone(),b.colors[d].clone()]:[];b.faces.push(new THREE.Face3(a,c,d,e,n));void 0!==h&&b.faceVertexUvs[0].push([l[a].clone(),l[c].clone(),l[d].clone()])};if(void 0!==e)if(d=a.drawcalls,0<d.length)for(c=0;c<d.length;c++)for(var p=d[c],n=p.start,t=p.count,r=p.index,p=n,n=n+t;p<n;p+=3)q(r+e[p],r+e[p+1],r+e[p+2]);else for(c=0;c<e.length;c+=3)q(e[c],e[c+1],e[c+2]);else for(c=
0;c<d.length/3;c+=3)q(c,c+1,c+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();var a=this.boundingBox.center().negate();this.applyMatrix((new THREE.Matrix4).setPosition(a));return a},computeFaceNormals:function(){for(var a=new THREE.Vector3,b=new THREE.Vector3,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],
g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new THREE.Vector3;if(a){var e,f,g,h=new THREE.Vector3,k=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),k.subVectors(e,f),h.cross(k),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(a=
0,b=this.faces.length;a<b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c.vertexNormals[0]=d[c.a].clone(),c.vertexNormals[1]=d[c.b].clone(),c.vertexNormals[2]=d[c.c].clone()},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=
e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone();var f=new THREE.Geometry;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var g=
this.morphNormals[a].vertexNormals,h,k;c=0;for(d=this.faces.length;c<d;c++)h=new THREE.Vector3,k={a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3},e.push(h),g.push(k)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=g.faceNormals[c],k=g.vertexNormals[c],h.copy(e.normal),k.a.copy(e.vertexNormals[0]),k.b.copy(e.vertexNormals[1]),k.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<
d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){var a,b,c,d,e,f,g,h,k,l,p,q,n,t,r,s,u,v=[],x=[];c=new THREE.Vector3;var D=new THREE.Vector3,w=new THREE.Vector3,y=new THREE.Vector3,A=new THREE.Vector3;a=0;for(b=this.vertices.length;a<b;a++)v[a]=new THREE.Vector3,x[a]=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)e=this.faces[a],f=this.faceVertexUvs[0][a],d=e.a,u=e.b,e=e.c,g=this.vertices[d],h=this.vertices[u],k=this.vertices[e],
l=f[0],p=f[1],q=f[2],f=h.x-g.x,n=k.x-g.x,t=h.y-g.y,r=k.y-g.y,h=h.z-g.z,g=k.z-g.z,k=p.x-l.x,s=q.x-l.x,p=p.y-l.y,l=q.y-l.y,q=1/(k*l-s*p),c.set((l*f-p*n)*q,(l*t-p*r)*q,(l*h-p*g)*q),D.set((k*n-s*f)*q,(k*r-s*t)*q,(k*g-s*h)*q),v[d].add(c),v[u].add(c),v[e].add(c),x[d].add(D),x[u].add(D),x[e].add(D);D=["a","b","c","d"];a=0;for(b=this.faces.length;a<b;a++)for(e=this.faces[a],c=0;c<Math.min(e.vertexNormals.length,3);c++)A.copy(e.vertexNormals[c]),d=e[D[c]],u=v[d],w.copy(u),w.sub(A.multiplyScalar(A.dot(u))).normalize(),
y.crossVectors(e.vertexNormals[c],u),d=y.dot(x[d]),d=0>d?-1:1,e.vertexTangents[c]=new THREE.Vector4(w.x,w.y,w.z,d);this.hasTangents=!0},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);
this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(!1===a instanceof THREE.Geometry)THREE.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);else{var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,k=a.faces,l=this.faceVertexUvs[0];a=a.faceVertexUvs[0];void 0===c&&(c=0);void 0!==b&&(d=(new THREE.Matrix3).getNormalMatrix(b));for(var p=0,q=g.length;p<q;p++){var n=g[p].clone();void 0!==b&&n.applyMatrix4(b);f.push(n)}p=0;for(q=k.length;p<
q;p++){var g=k[p],t,r=g.vertexNormals,s=g.vertexColors,n=new THREE.Face3(g.a+e,g.b+e,g.c+e);n.normal.copy(g.normal);void 0!==d&&n.normal.applyMatrix3(d).normalize();b=0;for(f=r.length;b<f;b++)t=r[b].clone(),void 0!==d&&t.applyMatrix3(d).normalize(),n.vertexNormals.push(t);n.color.copy(g.color);b=0;for(f=s.length;b<f;b++)t=s[b],n.vertexColors.push(t.clone());n.materialIndex=g.materialIndex+c;h.push(n)}p=0;for(q=a.length;p<q;p++)if(c=a[p],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(c[b].clone());
l.push(d)}}},mergeMesh:function(a){!1===a instanceof THREE.Mesh?THREE.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a):(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix))},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<
g;f++)for(e=this.faces[f],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]==e[(d+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(e=a[f],this.faces.splice(e,1),c=0,g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,1);f=this.vertices.length-b.length;this.vertices=b;return f},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==l[b])return l[b];l[b]=k.length/3;k.push(a.x,a.y,
a.z);return l[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==q[b])return q[b];q[b]=p.length;p.push(a.getHex());return q[b]}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==t[b])return t[b];t[b]=n.length/2;n.push(a.x,a.y);return t[b]}var e={metadata:{version:4,type:"BufferGeometry",generator:"BufferGeometryExporter"},uuid:this.uuid,type:this.type};""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f)void 0!==
f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z)}var h=[],k=[],l={},p=[],q={},n=[],t={};for(g=0;g<this.faces.length;g++){var r=this.faces[g],s=void 0!==this.faceVertexUvs[0][g],u=0<r.normal.length(),v=0<r.vertexNormals.length,x=1!==r.color.r||1!==r.color.g||1!==r.color.b,D=0<r.vertexColors.length,w=0,w=a(w,0,0),w=a(w,1,!1),w=a(w,2,!1),w=a(w,3,s),w=a(w,4,u),w=a(w,5,v),w=a(w,6,x),w=a(w,7,D);h.push(w);h.push(r.a,r.b,r.c);s&&(s=this.faceVertexUvs[0][g],
h.push(d(s[0]),d(s[1]),d(s[2])));u&&h.push(b(r.normal));v&&(u=r.vertexNormals,h.push(b(u[0]),b(u[1]),b(u[2])));x&&h.push(c(r.color));D&&(r=r.vertexColors,h.push(c(r[0]),c(r[1]),c(r[2])))}e.data={};e.data.vertices=f;e.data.normals=k;0<p.length&&(e.data.colors=p);0<n.length&&(e.data.uvs=[n]);e.data.faces=h;return e},clone:function(){for(var a=new THREE.Geometry,b=this.vertices,c=0,d=b.length;c<d;c++)a.vertices.push(b[c].clone());b=this.faces;c=0;for(d=b.length;c<d;c++)a.faces.push(b[c].clone());c=0;
for(d=this.faceVertexUvs.length;c<d;c++){b=this.faceVertexUvs[c];void 0===a.faceVertexUvs[c]&&(a.faceVertexUvs[c]=[]);for(var e=0,f=b.length;e<f;e++){for(var g=b[e],h=[],k=0,l=g.length;k<l;k++)h.push(g[k].clone());a.faceVertexUvs[c].push(h)}}return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);THREE.GeometryIdCount=0;
THREE.Camera=function(){THREE.Object3D.call(this);this.type="Camera";this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4};THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.constructor=THREE.Camera;THREE.Camera.prototype.getWorldDirection=function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Vector3;this.getWorldQuaternion(a);return b.set(0,0,-1).applyQuaternion(a)}}();
THREE.Camera.prototype.lookAt=function(){var a=new THREE.Matrix4;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();THREE.Camera.prototype.clone=function(a){void 0===a&&(a=new THREE.Camera);THREE.Object3D.prototype.clone.call(this,a);a.matrixWorldInverse.copy(this.matrixWorldInverse);a.projectionMatrix.copy(this.projectionMatrix);return a};
THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);this.type="CubeCamera";var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new THREE.Vector3(0,-1,0));
this.add(g);var h=new THREE.PerspectiveCamera(90,1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var k=new THREE.PerspectiveCamera(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new THREE.Vector3(0,0,-1));this.add(k);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){var c=this.renderTarget,n=c.generateMipmaps;c.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=
1;a.render(b,e,c);c.activeCubeFace=2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.generateMipmaps=n;c.activeCubeFace=5;a.render(b,k,c)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.CubeCamera.prototype.constructor=THREE.CubeCamera;
THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.type="OrthographicCamera";this.zoom=1;this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);THREE.OrthographicCamera.prototype.constructor=THREE.OrthographicCamera;
THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2;this.projectionMatrix.makeOrthographic(c-a,c+a,d+b,d-b,this.near,this.far)};
THREE.OrthographicCamera.prototype.clone=function(){var a=new THREE.OrthographicCamera;THREE.Camera.prototype.clone.call(this,a);a.zoom=this.zoom;a.left=this.left;a.right=this.right;a.top=this.top;a.bottom=this.bottom;a.near=this.near;a.far=this.far;a.projectionMatrix.copy(this.projectionMatrix);return a};
THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.type="PerspectiveCamera";this.zoom=1;this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.constructor=THREE.PerspectiveCamera;
THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=f;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){var a=THREE.Math.radToDeg(2*Math.atan(Math.tan(.5*THREE.Math.degToRad(this.fov))/this.zoom));if(this.fullWidth){var b=this.fullWidth/this.fullHeight,a=Math.tan(THREE.Math.degToRad(.5*a))*this.near,c=-a,d=b*c,b=Math.abs(b*a-d),c=Math.abs(a-c);this.projectionMatrix.makeFrustum(d+this.x*b/this.fullWidth,d+(this.x+this.width)*b/this.fullWidth,a-(this.y+this.height)*c/this.fullHeight,a-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(a,
this.aspect,this.near,this.far)};THREE.PerspectiveCamera.prototype.clone=function(){var a=new THREE.PerspectiveCamera;THREE.Camera.prototype.clone.call(this,a);a.zoom=this.zoom;a.fov=this.fov;a.aspect=this.aspect;a.near=this.near;a.far=this.far;a.projectionMatrix.copy(this.projectionMatrix);return a};THREE.Light=function(a){THREE.Object3D.call(this);this.type="Light";this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.Light.prototype.constructor=THREE.Light;
THREE.Light.prototype.clone=function(a){void 0===a&&(a=new THREE.Light);THREE.Object3D.prototype.clone.call(this,a);a.color.copy(this.color);return a};THREE.AmbientLight=function(a){THREE.Light.call(this,a);this.type="AmbientLight"};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);THREE.AmbientLight.prototype.constructor=THREE.AmbientLight;THREE.AmbientLight.prototype.clone=function(){var a=new THREE.AmbientLight;THREE.Light.prototype.clone.call(this,a);return a};
THREE.AreaLight=function(a,b){THREE.Light.call(this,a);this.type="AreaLight";this.normal=new THREE.Vector3(0,-1,0);this.right=new THREE.Vector3(1,0,0);this.intensity=void 0!==b?b:1;this.height=this.width=1;this.constantAttenuation=1.5;this.linearAttenuation=.5;this.quadraticAttenuation=.1};THREE.AreaLight.prototype=Object.create(THREE.Light.prototype);THREE.AreaLight.prototype.constructor=THREE.AreaLight;
THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a);this.type="DirectionalLight";this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowCascade=!1;
this.shadowCascadeOffset=new THREE.Vector3(0,0,-1E3);this.shadowCascadeCount=2;this.shadowCascadeBias=[0,0,0];this.shadowCascadeWidth=[512,512,512];this.shadowCascadeHeight=[512,512,512];this.shadowCascadeNearZ=[-1,.99,.998];this.shadowCascadeFarZ=[.99,.998,1];this.shadowCascadeArray=[];this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);THREE.DirectionalLight.prototype.constructor=THREE.DirectionalLight;
THREE.DirectionalLight.prototype.clone=function(){var a=new THREE.DirectionalLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;a.shadowCameraNear=this.shadowCameraNear;a.shadowCameraFar=this.shadowCameraFar;a.shadowCameraLeft=this.shadowCameraLeft;a.shadowCameraRight=this.shadowCameraRight;a.shadowCameraTop=this.shadowCameraTop;a.shadowCameraBottom=this.shadowCameraBottom;a.shadowCameraVisible=
this.shadowCameraVisible;a.shadowBias=this.shadowBias;a.shadowDarkness=this.shadowDarkness;a.shadowMapWidth=this.shadowMapWidth;a.shadowMapHeight=this.shadowMapHeight;a.shadowCascade=this.shadowCascade;a.shadowCascadeOffset.copy(this.shadowCascadeOffset);a.shadowCascadeCount=this.shadowCascadeCount;a.shadowCascadeBias=this.shadowCascadeBias.slice(0);a.shadowCascadeWidth=this.shadowCascadeWidth.slice(0);a.shadowCascadeHeight=this.shadowCascadeHeight.slice(0);a.shadowCascadeNearZ=this.shadowCascadeNearZ.slice(0);
a.shadowCascadeFarZ=this.shadowCascadeFarZ.slice(0);return a};THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.type="HemisphereLight";this.position.set(0,100,0);this.groundColor=new THREE.Color(b);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight.prototype.constructor=THREE.HemisphereLight;
THREE.HemisphereLight.prototype.clone=function(){var a=new THREE.HemisphereLight;THREE.Light.prototype.clone.call(this,a);a.groundColor.copy(this.groundColor);a.intensity=this.intensity;return a};THREE.PointLight=function(a,b,c,d){THREE.Light.call(this,a);this.type="PointLight";this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight.prototype.constructor=THREE.PointLight;
THREE.PointLight.prototype.clone=function(){var a=new THREE.PointLight;THREE.Light.prototype.clone.call(this,a);a.intensity=this.intensity;a.distance=this.distance;a.decay=this.decay;return a};
THREE.SpotLight=function(a,b,c,d,e,f){THREE.Light.call(this,a);this.type="SpotLight";this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.exponent=void 0!==e?e:10;this.decay=void 0!==f?f:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=.5;this.shadowMapHeight=this.shadowMapWidth=
512;this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);THREE.SpotLight.prototype.constructor=THREE.SpotLight;
THREE.SpotLight.prototype.clone=function(){var a=new THREE.SpotLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.distance=this.distance;a.angle=this.angle;a.exponent=this.exponent;a.decay=this.decay;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;a.shadowCameraNear=this.shadowCameraNear;a.shadowCameraFar=this.shadowCameraFar;a.shadowCameraFov=this.shadowCameraFov;a.shadowCameraVisible=this.shadowCameraVisible;a.shadowBias=this.shadowBias;
a.shadowDarkness=this.shadowDarkness;a.shadowMapWidth=this.shadowMapWidth;a.shadowMapHeight=this.shadowMapHeight;return a};THREE.Cache={files:{},add:function(a,b){this.files[a]=b},get:function(a){return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};
THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.imageLoader=new THREE.ImageLoader;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:void 0,addStatusElement:function(){var a=document.createElement("div");a.style.position="absolute";a.style.right="0px";a.style.top="0px";a.style.fontSize="0.8em";a.style.textAlign="left";a.style.background="rgba(0,0,0,0.25)";a.style.color="#fff";a.style.width="120px";a.style.padding="0.5em 0.5em 0.5em 0.5em";a.style.zIndex=1E3;a.innerHTML="Loading ...";return a},updateProgress:function(a){var b="Loaded ",b=a.total?b+((100*a.loaded/a.total).toFixed(0)+
"%"):b+((a.loaded/1024).toFixed(2)+" KB");this.statusDomElement.innerHTML=b},extractUrlBase:function(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b){for(var c=[],d=0;d<a.length;++d)c[d]=this.createMaterial(a[d],b);return c},needsTangents:function(a){for(var b=0,c=a.length;b<c;b++)if(a[b]instanceof THREE.ShaderMaterial)return!0;return!1},createMaterial:function(a,b){function c(a){a=Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function d(a,
d,e,g,h,k,s){var u=b+e,v,x=THREE.Loader.Handlers.get(u);null!==x?v=x.load(u):(v=new THREE.Texture,x=f.imageLoader,x.crossOrigin=f.crossOrigin,x.load(u,function(a){if(!1===THREE.Math.isPowerOfTwo(a.width)||!1===THREE.Math.isPowerOfTwo(a.height)){var b=c(a.width),d=c(a.height),e=document.createElement("canvas");e.width=b;e.height=d;e.getContext("2d").drawImage(a,0,0,b,d);v.image=e}else v.image=a;v.needsUpdate=!0}));v.sourceFile=e;g&&(v.repeat.set(g[0],g[1]),1!==g[0]&&(v.wrapS=THREE.RepeatWrapping),
1!==g[1]&&(v.wrapT=THREE.RepeatWrapping));h&&v.offset.set(h[0],h[1]);k&&(e={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==e[k[0]]&&(v.wrapS=e[k[0]]),void 0!==e[k[1]]&&(v.wrapT=e[k[1]]));s&&(v.anisotropy=s);a[d]=v}function e(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}var f=this,g="MeshLambertMaterial",h={color:15658734,opacity:1,map:null,lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(a.shading){var k=a.shading.toLowerCase();"phong"===k?g="MeshPhongMaterial":
"basic"===k&&(g="MeshBasicMaterial")}void 0!==a.blending&&void 0!==THREE[a.blending]&&(h.blending=THREE[a.blending]);void 0!==a.transparent&&(h.transparent=a.transparent);void 0!==a.opacity&&1>a.opacity&&(h.transparent=!0);void 0!==a.depthTest&&(h.depthTest=a.depthTest);void 0!==a.depthWrite&&(h.depthWrite=a.depthWrite);void 0!==a.visible&&(h.visible=a.visible);void 0!==a.flipSided&&(h.side=THREE.BackSide);void 0!==a.doubleSided&&(h.side=THREE.DoubleSide);void 0!==a.wireframe&&(h.wireframe=a.wireframe);
void 0!==a.vertexColors&&("face"===a.vertexColors?h.vertexColors=THREE.FaceColors:a.vertexColors&&(h.vertexColors=THREE.VertexColors));a.colorDiffuse?h.color=e(a.colorDiffuse):a.DbgColor&&(h.color=a.DbgColor);a.colorSpecular&&(h.specular=e(a.colorSpecular));a.colorEmissive&&(h.emissive=e(a.colorEmissive));void 0!==a.transparency&&(console.warn("THREE.Loader: transparency has been renamed to opacity"),a.opacity=a.transparency);void 0!==a.opacity&&(h.opacity=a.opacity);a.specularCoef&&(h.shininess=
a.specularCoef);a.mapDiffuse&&b&&d(h,"map",a.mapDiffuse,a.mapDiffuseRepeat,a.mapDiffuseOffset,a.mapDiffuseWrap,a.mapDiffuseAnisotropy);a.mapLight&&b&&d(h,"lightMap",a.mapLight,a.mapLightRepeat,a.mapLightOffset,a.mapLightWrap,a.mapLightAnisotropy);a.mapBump&&b&&d(h,"bumpMap",a.mapBump,a.mapBumpRepeat,a.mapBumpOffset,a.mapBumpWrap,a.mapBumpAnisotropy);a.mapNormal&&b&&d(h,"normalMap",a.mapNormal,a.mapNormalRepeat,a.mapNormalOffset,a.mapNormalWrap,a.mapNormalAnisotropy);a.mapSpecular&&b&&d(h,"specularMap",
a.mapSpecular,a.mapSpecularRepeat,a.mapSpecularOffset,a.mapSpecularWrap,a.mapSpecularAnisotropy);a.mapAlpha&&b&&d(h,"alphaMap",a.mapAlpha,a.mapAlphaRepeat,a.mapAlphaOffset,a.mapAlphaWrap,a.mapAlphaAnisotropy);a.mapBumpScale&&(h.bumpScale=a.mapBumpScale);a.mapNormalFactor&&(h.normalScale=new THREE.Vector2(a.mapNormalFactor,a.mapNormalFactor));g=new THREE[g](h);void 0!==a.DbgName&&(g.name=a.DbgName);return g}};
THREE.Loader.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=0,c=this.handlers.length;b<c;b+=2){var d=this.handlers[b+1];if(this.handlers[b].test(a))return d}return null}};THREE.XHRLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(a,b,c,d){var e=this,f=THREE.Cache.get(a);void 0!==f?b&&b(f):(f=new XMLHttpRequest,f.open("GET",a,!0),f.addEventListener("load",function(c){THREE.Cache.add(a,this.response);b&&b(this.response);e.manager.itemEnd(a)},!1),void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1),void 0!==d&&f.addEventListener("error",function(a){d(a)},!1),void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin),void 0!==this.responseType&&(f.responseType=
this.responseType),f.send(null),e.manager.itemStart(a))},setResponseType:function(a){this.responseType=a},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.ImageLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b,c,d){var e=this,f=THREE.Cache.get(a);if(void 0!==f)b(f);else return f=document.createElement("img"),f.addEventListener("load",function(c){THREE.Cache.add(a,this);b&&b(this);e.manager.itemEnd(a)},!1),void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1),void 0!==d&&f.addEventListener("error",function(a){d(a)},!1),void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin),f.src=a,e.manager.itemStart(a),f},setCrossOrigin:function(a){this.crossOrigin=
a}};THREE.JSONLoader=function(a){THREE.Loader.call(this,a);this.withCredentials=!1};THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype);THREE.JSONLoader.prototype.constructor=THREE.JSONLoader;THREE.JSONLoader.prototype.load=function(a,b,c){c=c&&"string"===typeof c?c:this.extractUrlBase(a);this.onLoadStart();this.loadAjaxJSON(this,a,b,c)};
THREE.JSONLoader.prototype.loadAjaxJSON=function(a,b,c,d,e){var f=new XMLHttpRequest,g=0;f.onreadystatechange=function(){if(f.readyState===f.DONE)if(200===f.status||0===f.status){if(f.responseText){var h=JSON.parse(f.responseText),k=h.metadata;if(void 0!==k){if("object"===k.type){THREE.error("THREE.JSONLoader: "+b+" should be loaded with THREE.ObjectLoader instead.");return}if("scene"===k.type){THREE.error("THREE.JSONLoader: "+b+" seems to be a Scene. Use THREE.SceneLoader instead.");return}}h=a.parse(h,
d);c(h.geometry,h.materials)}else THREE.error("THREE.JSONLoader: "+b+" seems to be unreachable or the file is empty.");a.onLoadComplete()}else THREE.error("THREE.JSONLoader: Couldn't load "+b+" ("+f.status+")");else f.readyState===f.LOADING?e&&(0===g&&(g=f.getResponseHeader("Content-Length")),e({total:g,loaded:f.responseText.length})):f.readyState===f.HEADERS_RECEIVED&&void 0!==e&&(g=f.getResponseHeader("Content-Length"))};f.open("GET",b,!0);f.withCredentials=this.withCredentials;f.send(null)};
THREE.JSONLoader.prototype.parse=function(a,b){var c=new THREE.Geometry,d=void 0!==a.scale?1/a.scale:1;(function(b){var d,g,h,k,l,p,q,n,t,r,s,u,v,x=a.faces;p=a.vertices;var D=a.normals,w=a.colors,y=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&y++;for(d=0;d<y;d++)c.faceVertexUvs[d]=[]}k=0;for(l=p.length;k<l;)d=new THREE.Vector3,d.x=p[k++]*b,d.y=p[k++]*b,d.z=p[k++]*b,c.vertices.push(d);k=0;for(l=x.length;k<l;)if(b=x[k++],t=b&1,h=b&2,d=b&8,q=b&16,r=b&32,p=b&64,b&=128,t){t=new THREE.Face3;
t.a=x[k];t.b=x[k+1];t.c=x[k+3];s=new THREE.Face3;s.a=x[k+1];s.b=x[k+2];s.c=x[k+3];k+=4;h&&(h=x[k++],t.materialIndex=h,s.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<y;d++)for(u=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],g=0;4>g;g++)n=x[k++],v=u[2*n],n=u[2*n+1],v=new THREE.Vector2(v,n),2!==g&&c.faceVertexUvs[d][h].push(v),0!==g&&c.faceVertexUvs[d][h+1].push(v);q&&(q=3*x[k++],t.normal.set(D[q++],D[q++],D[q]),s.normal.copy(t.normal));if(r)for(d=0;4>d;d++)q=3*x[k++],r=new THREE.Vector3(D[q++],
D[q++],D[q]),2!==d&&t.vertexNormals.push(r),0!==d&&s.vertexNormals.push(r);p&&(p=x[k++],p=w[p],t.color.setHex(p),s.color.setHex(p));if(b)for(d=0;4>d;d++)p=x[k++],p=w[p],2!==d&&t.vertexColors.push(new THREE.Color(p)),0!==d&&s.vertexColors.push(new THREE.Color(p));c.faces.push(t);c.faces.push(s)}else{t=new THREE.Face3;t.a=x[k++];t.b=x[k++];t.c=x[k++];h&&(h=x[k++],t.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<y;d++)for(u=a.uvs[d],c.faceVertexUvs[d][h]=[],g=0;3>g;g++)n=x[k++],v=u[2*n],n=u[2*n+1],
v=new THREE.Vector2(v,n),c.faceVertexUvs[d][h].push(v);q&&(q=3*x[k++],t.normal.set(D[q++],D[q++],D[q]));if(r)for(d=0;3>d;d++)q=3*x[k++],r=new THREE.Vector3(D[q++],D[q++],D[q]),t.vertexNormals.push(r);p&&(p=x[k++],t.color.setHex(w[p]));if(b)for(d=0;3>d;d++)p=x[k++],t.vertexColors.push(new THREE.Color(w[p]));c.faces.push(t)}})(d);(function(){var b=void 0!==a.influencesPerVertex?a.influencesPerVertex:2;if(a.skinWeights)for(var d=0,g=a.skinWeights.length;d<g;d+=b)c.skinWeights.push(new THREE.Vector4(a.skinWeights[d],
1<b?a.skinWeights[d+1]:0,2<b?a.skinWeights[d+2]:0,3<b?a.skinWeights[d+3]:0));if(a.skinIndices)for(d=0,g=a.skinIndices.length;d<g;d+=b)c.skinIndices.push(new THREE.Vector4(a.skinIndices[d],1<b?a.skinIndices[d+1]:0,2<b?a.skinIndices[d+2]:0,3<b?a.skinIndices[d+3]:0));c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&THREE.warn("THREE.JSONLoader: When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+
c.skinIndices.length+"), and skinWeights ("+c.skinWeights.length+") should match.");c.animation=a.animation;c.animations=a.animations})();(function(b){if(void 0!==a.morphTargets){var d,g,h,k,l,p;d=0;for(g=a.morphTargets.length;d<g;d++)for(c.morphTargets[d]={},c.morphTargets[d].name=a.morphTargets[d].name,c.morphTargets[d].vertices=[],l=c.morphTargets[d].vertices,p=a.morphTargets[d].vertices,h=0,k=p.length;h<k;h+=3){var q=new THREE.Vector3;q.x=p[h]*b;q.y=p[h+1]*b;q.z=p[h+2]*b;l.push(q)}}if(void 0!==
a.morphColors)for(d=0,g=a.morphColors.length;d<g;d++)for(c.morphColors[d]={},c.morphColors[d].name=a.morphColors[d].name,c.morphColors[d].colors=[],k=c.morphColors[d].colors,l=a.morphColors[d].colors,b=0,h=l.length;b<h;b+=3)p=new THREE.Color(16755200),p.setRGB(l[b],l[b+1],l[b+2]),k.push(p)})(d);c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials||0===a.materials.length)return{geometry:c};d=this.initMaterials(a.materials,b);this.needsTangents(d)&&c.computeTangents();return{geometry:c,
materials:d}};THREE.LoadingManager=function(a,b,c){var d=this,e=0,f=0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){f++};this.itemEnd=function(a){e++;if(void 0!==d.onProgress)d.onProgress(a,e,f);if(e===f&&void 0!==d.onLoad)d.onLoad()}};THREE.DefaultLoadingManager=new THREE.LoadingManager;THREE.BufferGeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader(e.manager);f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE.BufferGeometry,c=a.data.attributes,d;for(d in c){var e=c[d],f=new self[e.type](e.array);b.addAttribute(d,new THREE.BufferAttribute(f,e.itemSize))}c=a.data.offsets;void 0!==c&&(b.offsets=JSON.parse(JSON.stringify(c)));
a=a.data.boundingSphere;void 0!==a&&(c=new THREE.Vector3,void 0!==a.center&&c.fromArray(a.center),b.boundingSphere=new THREE.Sphere(c,a.radius));return b}};THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader(e.manager);f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE[a.type];void 0!==a.color&&b.color.setHex(a.color);void 0!==a.emissive&&b.emissive.setHex(a.emissive);void 0!==a.specular&&b.specular.setHex(a.specular);void 0!==a.shininess&&(b.shininess=a.shininess);
void 0!==a.uniforms&&(b.uniforms=a.uniforms);void 0!==a.vertexShader&&(b.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(b.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors);void 0!==a.shading&&(b.shading=a.shading);void 0!==a.blending&&(b.blending=a.blending);void 0!==a.side&&(b.side=a.side);void 0!==a.opacity&&(b.opacity=a.opacity);void 0!==a.transparent&&(b.transparent=a.transparent);void 0!==a.wireframe&&(b.wireframe=a.wireframe);void 0!==a.size&&
(b.size=a.size);void 0!==a.sizeAttenuation&&(b.sizeAttenuation=a.sizeAttenuation);if(void 0!==a.materials)for(var c=0,d=a.materials.length;c<d;c++)b.materials.push(this.parse(a.materials[c]));return b}};THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this.texturePath=""};
THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(a,b,c,d){""===this.texturePath&&(this.texturePath=a.substring(0,a.lastIndexOf("/")+1));var e=this,f=new THREE.XHRLoader(e.manager);f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){e.parse(JSON.parse(a),b)},c,d)},setTexturePath:function(a){this.texturePath=a},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a,b){var c=this.parseGeometries(a.geometries),d=this.parseImages(a.images,function(){void 0!==b&&b(e)}),
d=this.parseTextures(a.textures,d),d=this.parseMaterials(a.materials,d),e=this.parseObject(a.object,c,d);void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader,d=new THREE.BufferGeometryLoader,e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case "PlaneGeometry":case "PlaneBufferGeometry":g=new THREE[h.type](h.width,h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "CubeGeometry":g=
new THREE.BoxGeometry(h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CircleGeometry":g=new THREE.CircleGeometry(h.radius,h.segments);break;case "CylinderGeometry":g=new THREE.CylinderGeometry(h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded);break;case "SphereGeometry":g=new THREE.SphereGeometry(h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "IcosahedronGeometry":g=new THREE.IcosahedronGeometry(h.radius,
h.detail);break;case "TorusGeometry":g=new THREE.TorusGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":g=new THREE.TorusKnotGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.p,h.q,h.heightScale);break;case "BufferGeometry":g=d.parse(h);break;case "Geometry":g=c.parse(h.data).geometry}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);b[h.uuid]=g}return b},parseMaterials:function(a,b){var c={};if(void 0!==a)for(var d=function(a){void 0===b[a]&&
THREE.warn("THREE.ObjectLoader: Undefined texture",a);return b[a]},e=new THREE.MaterialLoader,f=0,g=a.length;f<g;f++){var h=a[f],k=e.parse(h);k.uuid=h.uuid;void 0!==h.name&&(k.name=h.name);void 0!==h.map&&(k.map=d(h.map));void 0!==h.bumpMap&&(k.bumpMap=d(h.bumpMap),h.bumpScale&&(k.bumpScale=new THREE.Vector2(h.bumpScale,h.bumpScale)));void 0!==h.alphaMap&&(k.alphaMap=d(h.alphaMap));void 0!==h.envMap&&(k.envMap=d(h.envMap));void 0!==h.normalMap&&(k.normalMap=d(h.normalMap),h.normalScale&&(k.normalScale=
new THREE.Vector2(h.normalScale,h.normalScale)));void 0!==h.lightMap&&(k.lightMap=d(h.lightMap));void 0!==h.specularMap&&(k.specularMap=d(h.specularMap));c[h.uuid]=k}return c},parseImages:function(a,b){var c=this,d={};if(void 0!==a&&0<a.length){var e=new THREE.LoadingManager(b),f=new THREE.ImageLoader(e);f.setCrossOrigin(this.crossOrigin);for(var e=function(a){c.manager.itemStart(a);return f.load(a,function(){c.manager.itemEnd(a)})},g=0,h=a.length;g<h;g++){var k=a[g],l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url)?
k.url:c.texturePath+k.url;d[k.uuid]=e(l)}}return d},parseTextures:function(a,b){var c={};if(void 0!==a)for(var d=0,e=a.length;d<e;d++){var f=a[d];void 0===f.image&&THREE.warn('THREE.ObjectLoader: No "image" speficied for',f.uuid);void 0===b[f.image]&&THREE.warn("THREE.ObjectLoader: Undefined image",f.image);var g=new THREE.Texture(b[f.image]);g.needsUpdate=!0;g.uuid=f.uuid;void 0!==f.name&&(g.name=f.name);void 0!==f.repeat&&(g.repeat=new THREE.Vector2(f.repeat[0],f.repeat[1]));void 0!==f.minFilter&&
(g.minFilter=THREE[f.minFilter]);void 0!==f.magFilter&&(g.magFilter=THREE[f.magFilter]);void 0!==f.anisotropy&&(g.anisotropy=f.anisotropy);f.wrap instanceof Array&&(g.wrapS=THREE[f.wrap[0]],g.wrapT=THREE[f.wrap[1]]);c[f.uuid]=g}return c},parseObject:function(){var a=new THREE.Matrix4;return function(b,c,d){var e;e=function(a){void 0===c[a]&&THREE.warn("THREE.ObjectLoader: Undefined geometry",a);return c[a]};var f=function(a){void 0===d[a]&&THREE.warn("THREE.ObjectLoader: Undefined material",a);return d[a]};
switch(b.type){case "Scene":e=new THREE.Scene;break;case "PerspectiveCamera":e=new THREE.PerspectiveCamera(b.fov,b.aspect,b.near,b.far);break;case "OrthographicCamera":e=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":e=new THREE.AmbientLight(b.color);break;case "DirectionalLight":e=new THREE.DirectionalLight(b.color,b.intensity);break;case "PointLight":e=new THREE.PointLight(b.color,b.intensity,b.distance,b.decay);break;case "SpotLight":e=new THREE.SpotLight(b.color,
b.intensity,b.distance,b.angle,b.exponent,b.decay);break;case "HemisphereLight":e=new THREE.HemisphereLight(b.color,b.groundColor,b.intensity);break;case "Mesh":e=new THREE.Mesh(e(b.geometry),f(b.material));break;case "Line":e=new THREE.Line(e(b.geometry),f(b.material),b.mode);break;case "PointCloud":e=new THREE.PointCloud(e(b.geometry),f(b.material));break;case "Sprite":e=new THREE.Sprite(f(b.material));break;case "Group":e=new THREE.Group;break;default:e=new THREE.Object3D}e.uuid=b.uuid;void 0!==
b.name&&(e.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(e.position,e.quaternion,e.scale)):(void 0!==b.position&&e.position.fromArray(b.position),void 0!==b.rotation&&e.rotation.fromArray(b.rotation),void 0!==b.scale&&e.scale.fromArray(b.scale));void 0!==b.visible&&(e.visible=b.visible);void 0!==b.userData&&(e.userData=b.userData);if(void 0!==b.children)for(var g in b.children)e.add(this.parseObject(b.children[g],c,d));return e}}()};
THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a,b,c,d){var e=new THREE.ImageLoader(this.manager);e.setCrossOrigin(this.crossOrigin);e.load(a,function(a){a=new THREE.Texture(a);a.needsUpdate=!0;void 0!==b&&b(a)},c,d)},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.DataTextureLoader=THREE.BinaryTextureLoader=function(){this._parser=null};
THREE.BinaryTextureLoader.prototype={constructor:THREE.BinaryTextureLoader,load:function(a,b,c,d){var e=this,f=new THREE.DataTexture,g=new THREE.XHRLoader;g.setResponseType("arraybuffer");g.load(a,function(a){if(a=e._parser(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:THREE.ClampToEdgeWrapping,f.wrapT=void 0!==a.wrapT?a.wrapT:THREE.ClampToEdgeWrapping,f.magFilter=void 0!==a.magFilter?a.magFilter:
THREE.LinearFilter,f.minFilter=void 0!==a.minFilter?a.minFilter:THREE.LinearMipMapLinearFilter,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===a.mipmapCount&&(f.minFilter=THREE.LinearFilter),f.needsUpdate=!0,b&&b(f,a)},c,d);return f}};THREE.CompressedTextureLoader=function(){this._parser=null};
THREE.CompressedTextureLoader.prototype={constructor:THREE.CompressedTextureLoader,load:function(a,b,c){var d=this,e=[],f=new THREE.CompressedTexture;f.image=e;var g=new THREE.XHRLoader;g.setResponseType("arraybuffer");if(a instanceof Array){var h=0;c=function(c){g.load(a[c],function(a){a=d._parser(a,!0);e[c]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};h+=1;6===h&&(1==a.mipmapCount&&(f.minFilter=THREE.LinearFilter),f.format=a.format,f.needsUpdate=!0,b&&b(f))})};for(var k=0,l=
a.length;k<l;++k)c(k)}else g.load(a,function(a){a=d._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,g=0;g<c;g++){e[g]={mipmaps:[]};for(var h=0;h<a.mipmapCount;h++)e[g].mipmaps.push(a.mipmaps[g*a.mipmapCount+h]),e[g].format=a.format,e[g].width=a.width,e[g].height=a.height}else f.image.width=a.width,f.image.height=a.height,f.mipmaps=a.mipmaps;1===a.mipmapCount&&(f.minFilter=THREE.LinearFilter);f.format=a.format;f.needsUpdate=!0;b&&b(f)});return f}};
THREE.Material=function(){Object.defineProperty(this,"id",{value:THREE.MaterialIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Material";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.colorWrite=this.depthWrite=this.depthTest=!0;this.polygonOffset=
!1;this.overdraw=this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this._needsUpdate=this.visible=!0};
THREE.Material.prototype={constructor:THREE.Material,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)THREE.warn("THREE.Material: '"+b+"' parameter is undefined.");else if(b in this){var d=this[b];d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):this[b]="overdraw"==b?Number(c):c}}},toJSON:function(){var a={metadata:{version:4.2,
type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type};""!==this.name&&(a.name=this.name);this instanceof THREE.MeshBasicMaterial?(a.color=this.color.getHex(),this.vertexColors!==THREE.NoColors&&(a.vertexColors=this.vertexColors),this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.MeshLambertMaterial?(a.color=this.color.getHex(),a.emissive=this.emissive.getHex(),this.vertexColors!==THREE.NoColors&&
(a.vertexColors=this.vertexColors),this.shading!==THREE.SmoothShading&&(a.shading=this.shading),this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.MeshPhongMaterial?(a.color=this.color.getHex(),a.emissive=this.emissive.getHex(),a.specular=this.specular.getHex(),a.shininess=this.shininess,this.vertexColors!==THREE.NoColors&&(a.vertexColors=this.vertexColors),this.shading!==THREE.SmoothShading&&(a.shading=this.shading),
this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.MeshNormalMaterial?(this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.MeshDepthMaterial?(this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.PointCloudMaterial?(a.size=this.size,a.sizeAttenuation=
this.sizeAttenuation,a.color=this.color.getHex(),this.vertexColors!==THREE.NoColors&&(a.vertexColors=this.vertexColors),this.blending!==THREE.NormalBlending&&(a.blending=this.blending)):this instanceof THREE.ShaderMaterial?(a.uniforms=this.uniforms,a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader):this instanceof THREE.SpriteMaterial&&(a.color=this.color.getHex());1>this.opacity&&(a.opacity=this.opacity);!1!==this.transparent&&(a.transparent=this.transparent);!1!==this.wireframe&&
(a.wireframe=this.wireframe);return a},clone:function(a){void 0===a&&(a=new THREE.Material);a.name=this.name;a.side=this.side;a.opacity=this.opacity;a.transparent=this.transparent;a.blending=this.blending;a.blendSrc=this.blendSrc;a.blendDst=this.blendDst;a.blendEquation=this.blendEquation;a.blendSrcAlpha=this.blendSrcAlpha;a.blendDstAlpha=this.blendDstAlpha;a.blendEquationAlpha=this.blendEquationAlpha;a.depthTest=this.depthTest;a.depthWrite=this.depthWrite;a.polygonOffset=this.polygonOffset;a.polygonOffsetFactor=
this.polygonOffsetFactor;a.polygonOffsetUnits=this.polygonOffsetUnits;a.alphaTest=this.alphaTest;a.overdraw=this.overdraw;a.visible=this.visible;return a},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);THREE.MaterialIdCount=0;
THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.type="LineBasicMaterial";this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineBasicMaterial.prototype.constructor=THREE.LineBasicMaterial;
THREE.LineBasicMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.linecap=this.linecap;a.linejoin=this.linejoin;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};
THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.type="LineDashedMaterial";this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineDashedMaterial.prototype.constructor=THREE.LineDashedMaterial;
THREE.LineDashedMaterial.prototype.clone=function(){var a=new THREE.LineDashedMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.scale=this.scale;a.dashSize=this.dashSize;a.gapSize=this.gapSize;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};
THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.type="MeshBasicMaterial";this.color=new THREE.Color(16777215);this.envMap=this.alphaMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshBasicMaterial.prototype.constructor=THREE.MeshBasicMaterial;
THREE.MeshBasicMaterial.prototype.clone=function(){var a=new THREE.MeshBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;
a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;return a};
THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.type="MeshLambertMaterial";this.color=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.envMap=this.alphaMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap=
"round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshLambertMaterial.prototype.constructor=THREE.MeshLambertMaterial;
THREE.MeshLambertMaterial.prototype.clone=function(){var a=new THREE.MeshLambertMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.emissive.copy(this.emissive);a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=
this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.type="MeshPhongMaterial";this.color=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.wrapAround=this.metal=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.bumpMap=this.lightMap=this.map=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.envMap=this.alphaMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=
1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshPhongMaterial.prototype.constructor=THREE.MeshPhongMaterial;
THREE.MeshPhongMaterial.prototype.clone=function(){var a=new THREE.MeshPhongMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.emissive.copy(this.emissive);a.specular.copy(this.specular);a.shininess=this.shininess;a.metal=this.metal;a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.bumpMap=this.bumpMap;a.bumpScale=this.bumpScale;a.normalMap=this.normalMap;a.normalScale.copy(this.normalScale);a.specularMap=this.specularMap;
a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.type="MeshDepthMaterial";this.wireframe=this.morphTargets=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.constructor=THREE.MeshDepthMaterial;
THREE.MeshDepthMaterial.prototype.clone=function(){var a=new THREE.MeshDepthMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.type="MeshNormalMaterial";this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=!1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshNormalMaterial.prototype.constructor=THREE.MeshNormalMaterial;THREE.MeshNormalMaterial.prototype.clone=function(){var a=new THREE.MeshNormalMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshFaceMaterial=function(a){this.uuid=THREE.Math.generateUUID();this.type="MeshFaceMaterial";this.materials=a instanceof Array?a:[]};
THREE.MeshFaceMaterial.prototype={constructor:THREE.MeshFaceMaterial,toJSON:function(){for(var a={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type,materials:[]},b=0,c=this.materials.length;b<c;b++)a.materials.push(this.materials[b].toJSON());return a},clone:function(){for(var a=new THREE.MeshFaceMaterial,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());return a}};
THREE.PointCloudMaterial=function(a){THREE.Material.call(this);this.type="PointCloudMaterial";this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.PointCloudMaterial.prototype=Object.create(THREE.Material.prototype);THREE.PointCloudMaterial.prototype.constructor=THREE.PointCloudMaterial;
THREE.PointCloudMaterial.prototype.clone=function(){var a=new THREE.PointCloudMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.size=this.size;a.sizeAttenuation=this.sizeAttenuation;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.ParticleBasicMaterial=function(a){THREE.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial.");return new THREE.PointCloudMaterial(a)};
THREE.ParticleSystemMaterial=function(a){THREE.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial.");return new THREE.PointCloudMaterial(a)};
THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.attributes=null;this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.shading=THREE.SmoothShading;this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.morphNormals=
this.morphTargets=this.skinning=!1;this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;this.setValues(a)};THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);THREE.ShaderMaterial.prototype.constructor=THREE.ShaderMaterial;
THREE.ShaderMaterial.prototype.clone=function(){var a=new THREE.ShaderMaterial;THREE.Material.prototype.clone.call(this,a);a.fragmentShader=this.fragmentShader;a.vertexShader=this.vertexShader;a.uniforms=THREE.UniformsUtils.clone(this.uniforms);a.attributes=this.attributes;a.defines=this.defines;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.fog=this.fog;a.lights=this.lights;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=
this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.RawShaderMaterial=function(a){THREE.ShaderMaterial.call(this,a);this.type="RawShaderMaterial"};THREE.RawShaderMaterial.prototype=Object.create(THREE.ShaderMaterial.prototype);THREE.RawShaderMaterial.prototype.constructor=THREE.RawShaderMaterial;THREE.RawShaderMaterial.prototype.clone=function(){var a=new THREE.RawShaderMaterial;THREE.ShaderMaterial.prototype.clone.call(this,a);return a};
THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.type="SpriteMaterial";this.color=new THREE.Color(16777215);this.map=null;this.rotation=0;this.fog=!1;this.setValues(a)};THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteMaterial.prototype.constructor=THREE.SpriteMaterial;
THREE.SpriteMaterial.prototype.clone=function(){var a=new THREE.SpriteMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.rotation=this.rotation;a.fog=this.fog;return a};
THREE.Texture=function(a,b,c,d,e,f,g,h,k){Object.defineProperty(this,"id",{value:THREE.TextureIdCount++});this.uuid=THREE.Math.generateUUID();this.sourceFile=this.name="";this.image=void 0!==a?a:THREE.Texture.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:THREE.Texture.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;
this.anisotropy=void 0!==k?k:1;this.format=void 0!==g?g:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this._needsUpdate=!1;this.onUpdate=null};THREE.Texture.DEFAULT_IMAGE=void 0;THREE.Texture.DEFAULT_MAPPING=THREE.UVMapping;
THREE.Texture.prototype={constructor:THREE.Texture,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},clone:function(a){void 0===a&&(a=new THREE.Texture);a.image=this.image;a.mipmaps=this.mipmaps.slice(0);a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.format=this.format;a.type=this.type;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.generateMipmaps=
this.generateMipmaps;a.premultiplyAlpha=this.premultiplyAlpha;a.flipY=this.flipY;a.unpackAlignment=this.unpackAlignment;return a},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);THREE.TextureIdCount=0;THREE.CubeTexture=function(a,b,c,d,e,f,g,h,k){b=void 0!==b?b:THREE.CubeReflectionMapping;THREE.Texture.call(this,a,b,c,d,e,f,g,h,k);this.images=a};
THREE.CubeTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CubeTexture.prototype.constructor=THREE.CubeTexture;THREE.CubeTexture.clone=function(a){void 0===a&&(a=new THREE.CubeTexture);THREE.Texture.prototype.clone.call(this,a);a.images=this.images;return a};THREE.CompressedTexture=function(a,b,c,d,e,f,g,h,k,l,p){THREE.Texture.call(this,null,f,g,h,k,l,d,e,p);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.constructor=THREE.CompressedTexture;THREE.CompressedTexture.prototype.clone=function(){var a=new THREE.CompressedTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.DataTexture=function(a,b,c,d,e,f,g,h,k,l,p){THREE.Texture.call(this,null,f,g,h,k,l,d,e,p);this.image={data:a,width:b,height:c}};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.constructor=THREE.DataTexture;
THREE.DataTexture.prototype.clone=function(){var a=new THREE.DataTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.VideoTexture=function(a,b,c,d,e,f,g,h,k){THREE.Texture.call(this,a,b,c,d,e,f,g,h,k);this.generateMipmaps=!1;var l=this,p=function(){requestAnimationFrame(p);a.readyState===a.HAVE_ENOUGH_DATA&&(l.needsUpdate=!0)};p()};THREE.VideoTexture.prototype=Object.create(THREE.Texture.prototype);THREE.VideoTexture.prototype.constructor=THREE.VideoTexture;
THREE.Group=function(){THREE.Object3D.call(this);this.type="Group"};THREE.Group.prototype=Object.create(THREE.Object3D.prototype);THREE.Group.prototype.constructor=THREE.Group;THREE.PointCloud=function(a,b){THREE.Object3D.call(this);this.type="PointCloud";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.PointCloudMaterial({color:16777215*Math.random()})};THREE.PointCloud.prototype=Object.create(THREE.Object3D.prototype);THREE.PointCloud.prototype.constructor=THREE.PointCloud;
THREE.PointCloud.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray;return function(c,d){var e=this,f=e.geometry,g=c.params.PointCloud.threshold;a.getInverse(this.matrixWorld);b.copy(c.ray).applyMatrix4(a);if(null===f.boundingBox||!1!==b.isIntersectionBox(f.boundingBox)){var h=g/((this.scale.x+this.scale.y+this.scale.z)/3),k=new THREE.Vector3,g=function(a,f){var g=b.distanceToPoint(a);if(g<h){var k=b.closestPointToPoint(a);k.applyMatrix4(e.matrixWorld);var n=c.ray.origin.distanceTo(k);
d.push({distance:n,distanceToRay:g,point:k.clone(),index:f,face:null,object:e})}};if(f instanceof THREE.BufferGeometry){var l=f.attributes,p=l.position.array;if(void 0!==l.index){var l=l.index.array,q=f.offsets;0===q.length&&(q=[{start:0,count:l.length,index:0}]);for(var n=0,t=q.length;n<t;++n)for(var r=q[n].start,s=q[n].index,f=r,r=r+q[n].count;f<r;f++){var u=s+l[f];k.fromArray(p,3*u);g(k,u)}}else for(l=p.length/3,f=0;f<l;f++)k.set(p[3*f],p[3*f+1],p[3*f+2]),g(k,f)}else for(k=this.geometry.vertices,
f=0;f<k.length;f++)g(k[f],f)}}}();THREE.PointCloud.prototype.clone=function(a){void 0===a&&(a=new THREE.PointCloud(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.ParticleSystem=function(a,b){THREE.warn("THREE.ParticleSystem has been renamed to THREE.PointCloud.");return new THREE.PointCloud(a,b)};
THREE.Line=function(a,b,c){THREE.Object3D.call(this);this.type="Line";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()});this.mode=void 0!==c?c:THREE.LineStrip};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=Object.create(THREE.Object3D.prototype);THREE.Line.prototype.constructor=THREE.Line;
THREE.Line.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere;return function(d,e){var f=d.linePrecision,f=f*f,g=this.geometry;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(this.matrixWorld);if(!1!==d.ray.isIntersectionSphere(c)){a.getInverse(this.matrixWorld);b.copy(d.ray).applyMatrix4(a);var h=new THREE.Vector3,k=new THREE.Vector3,l=new THREE.Vector3,p=new THREE.Vector3,q=this.mode===THREE.LineStrip?1:2;if(g instanceof
THREE.BufferGeometry){var n=g.attributes;if(void 0!==n.index){var t=n.index.array,n=n.position.array,r=g.offsets;0===r.length&&(r=[{start:0,count:t.length,index:0}]);for(var s=0;s<r.length;s++)for(var u=r[s].start,v=r[s].count,x=r[s].index,g=u;g<u+v-1;g+=q){var D=x+t[g+1];h.fromArray(n,3*(x+t[g]));k.fromArray(n,3*D);D=b.distanceSqToSegment(h,k,p,l);D>f||(D=b.origin.distanceTo(p),D<d.near||D>d.far||e.push({distance:D,point:l.clone().applyMatrix4(this.matrixWorld),index:g,offsetIndex:s,face:null,faceIndex:null,
object:this}))}}else for(n=n.position.array,g=0;g<n.length/3-1;g+=q)h.fromArray(n,3*g),k.fromArray(n,3*g+3),D=b.distanceSqToSegment(h,k,p,l),D>f||(D=b.origin.distanceTo(p),D<d.near||D>d.far||e.push({distance:D,point:l.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else if(g instanceof THREE.Geometry)for(h=g.vertices,k=h.length,g=0;g<k-1;g+=q)D=b.distanceSqToSegment(h[g],h[g+1],p,l),D>f||(D=b.origin.distanceTo(p),D<d.near||D>d.far||e.push({distance:D,point:l.clone().applyMatrix4(this.matrixWorld),
index:g,face:null,faceIndex:null,object:this}))}}}();THREE.Line.prototype.clone=function(a){void 0===a&&(a=new THREE.Line(this.geometry,this.material,this.mode));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()});this.updateMorphTargets()};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.constructor=THREE.Mesh;THREE.Mesh.prototype.updateMorphTargets=function(){if(void 0!==this.geometry.morphTargets&&0<this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a}};
THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];THREE.warn("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};
THREE.Mesh.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere,d=new THREE.Vector3,e=new THREE.Vector3,f=new THREE.Vector3;return function(g,h){var k=this.geometry;null===k.boundingSphere&&k.computeBoundingSphere();c.copy(k.boundingSphere);c.applyMatrix4(this.matrixWorld);if(!1!==g.ray.isIntersectionSphere(c)&&(a.getInverse(this.matrixWorld),b.copy(g.ray).applyMatrix4(a),null===k.boundingBox||!1!==b.isIntersectionBox(k.boundingBox)))if(k instanceof THREE.BufferGeometry){var l=
this.material;if(void 0!==l){var p=k.attributes,q,n,t=g.precision;if(void 0!==p.index){var r=p.index.array,s=p.position.array,u=k.offsets;0===u.length&&(u=[{start:0,count:r.length,index:0}]);for(var v=0,x=u.length;v<x;++v)for(var p=u[v].start,D=u[v].index,k=p,w=p+u[v].count;k<w;k+=3){p=D+r[k];q=D+r[k+1];n=D+r[k+2];d.fromArray(s,3*p);e.fromArray(s,3*q);f.fromArray(s,3*n);var y=l.side===THREE.BackSide?b.intersectTriangle(f,e,d,!0):b.intersectTriangle(d,e,f,l.side!==THREE.DoubleSide);if(null!==y){y.applyMatrix4(this.matrixWorld);
var A=g.ray.origin.distanceTo(y);A<t||A<g.near||A>g.far||h.push({distance:A,point:y,face:new THREE.Face3(p,q,n,THREE.Triangle.normal(d,e,f)),faceIndex:null,object:this})}}}else for(s=p.position.array,r=k=0,w=s.length;k<w;k+=3,r+=9)p=k,q=k+1,n=k+2,d.fromArray(s,r),e.fromArray(s,r+3),f.fromArray(s,r+6),y=l.side===THREE.BackSide?b.intersectTriangle(f,e,d,!0):b.intersectTriangle(d,e,f,l.side!==THREE.DoubleSide),null!==y&&(y.applyMatrix4(this.matrixWorld),A=g.ray.origin.distanceTo(y),A<t||A<g.near||A>
g.far||h.push({distance:A,point:y,face:new THREE.Face3(p,q,n,THREE.Triangle.normal(d,e,f)),faceIndex:null,object:this}))}}else if(k instanceof THREE.Geometry)for(r=this.material instanceof THREE.MeshFaceMaterial,s=!0===r?this.material.materials:null,t=g.precision,u=k.vertices,v=0,x=k.faces.length;v<x;v++)if(D=k.faces[v],l=!0===r?s[D.materialIndex]:this.material,void 0!==l){p=u[D.a];q=u[D.b];n=u[D.c];if(!0===l.morphTargets){y=k.morphTargets;A=this.morphTargetInfluences;d.set(0,0,0);e.set(0,0,0);f.set(0,
0,0);for(var w=0,E=y.length;w<E;w++){var G=A[w];if(0!==G){var F=y[w].vertices;d.x+=(F[D.a].x-p.x)*G;d.y+=(F[D.a].y-p.y)*G;d.z+=(F[D.a].z-p.z)*G;e.x+=(F[D.b].x-q.x)*G;e.y+=(F[D.b].y-q.y)*G;e.z+=(F[D.b].z-q.z)*G;f.x+=(F[D.c].x-n.x)*G;f.y+=(F[D.c].y-n.y)*G;f.z+=(F[D.c].z-n.z)*G}}d.add(p);e.add(q);f.add(n);p=d;q=e;n=f}y=l.side===THREE.BackSide?b.intersectTriangle(n,q,p,!0):b.intersectTriangle(p,q,n,l.side!==THREE.DoubleSide);null!==y&&(y.applyMatrix4(this.matrixWorld),A=g.ray.origin.distanceTo(y),A<t||
A<g.near||A>g.far||h.push({distance:A,point:y,face:D,faceIndex:v,object:this}))}}}();THREE.Mesh.prototype.clone=function(a,b){void 0===a&&(a=new THREE.Mesh(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a,b);return a};THREE.Bone=function(a){THREE.Object3D.call(this);this.type="Bone";this.skin=a};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);THREE.Bone.prototype.constructor=THREE.Bone;
THREE.Skeleton=function(a,b,c){this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;a=a||[];this.bones=a.slice(0);this.useVertexTexture?(this.boneTextureHeight=this.boneTextureWidth=a=256<this.bones.length?64:64<this.bones.length?32:16<this.bones.length?16:8,this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType),
this.boneTexture.minFilter=THREE.NearestFilter,this.boneTexture.magFilter=THREE.NearestFilter,this.boneTexture.generateMipmaps=!1,this.boneTexture.flipY=!1):this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(THREE.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[],b=0,a=this.bones.length;b<a;b++)this.boneInverses.push(new THREE.Matrix4)};
THREE.Skeleton.prototype.calculateInverses=function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new THREE.Matrix4;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}};
THREE.Skeleton.prototype.pose=function(){for(var a,b=0,c=this.bones.length;b<c;b++)(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);b=0;for(c=this.bones.length;b<c;b++)if(a=this.bones[b])a.parent?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)};
THREE.Skeleton.prototype.update=function(){var a=new THREE.Matrix4;return function(){for(var b=0,c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b]?this.bones[b].matrixWorld:this.identityMatrix,this.boneInverses[b]),a.flattenToArrayOffset(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}();
THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new THREE.Matrix4;this.bindMatrixInverse=new THREE.Matrix4;a=[];if(this.geometry&&void 0!==this.geometry.bones){for(var d,e,f,g,h=0,k=this.geometry.bones.length;h<k;++h)d=this.geometry.bones[h],e=d.pos,f=d.rotq,g=d.scl,b=new THREE.Bone(this),a.push(b),b.name=d.name,b.position.set(e[0],e[1],e[2]),b.quaternion.set(f[0],f[1],f[2],f[3]),void 0!==g?b.scale.set(g[0],g[1],g[2]):b.scale.set(1,
1,1);h=0;for(k=this.geometry.bones.length;h<k;++h)d=this.geometry.bones[h],-1!==d.parent?a[d.parent].add(a[h]):this.add(a[h])}this.normalizeSkinWeights();this.updateMatrixWorld(!0);this.bind(new THREE.Skeleton(a,void 0,c))};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.constructor=THREE.SkinnedMesh;THREE.SkinnedMesh.prototype.bind=function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)};
THREE.SkinnedMesh.prototype.pose=function(){this.skeleton.pose()};THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(a){THREE.Mesh.prototype.updateMatrixWorld.call(this,!0);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):THREE.warn("THREE.SkinnedMesh unreckognized bindMode: "+this.bindMode)};
THREE.SkinnedMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture));THREE.Mesh.prototype.clone.call(this,a);return a};THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.type="MorphAnimMesh";this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,this.geometry.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.constructor=THREE.MorphAnimMesh;THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)_?(\d+)/,e=0,f=a.morphTargets.length;e<f;e++){var g=a.morphTargets[e].name.match(d);if(g&&1<g.length){g=g[1];c[g]||(c[g]={start:Infinity,end:-Infinity});var h=c[g];e<h.start&&(h.start=e);e>h.end&&(h.end=e);b||(b=g)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=(c.end-c.start)/b*1E3,this.time=0):THREE.warn("THREE.MorphAnimMesh: animation["+a+"] undefined in .playAnimation()")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time&&(this.time=0,this.directionBackwards=!1)}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);a=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a!==this.currentKeyframe&&
(this.morphTargetInfluences[this.lastKeyframe]=0,this.morphTargetInfluences[this.currentKeyframe]=1,this.morphTargetInfluences[a]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=a);b=this.time%b/b;this.directionBackwards&&(b=1-b);this.morphTargetInfluences[this.currentKeyframe]=b;this.morphTargetInfluences[this.lastKeyframe]=1-b};
THREE.MorphAnimMesh.prototype.interpolateTargets=function(a,b,c){for(var d=this.morphTargetInfluences,e=0,f=d.length;e<f;e++)d[e]=0;-1<a&&(d[a]=1-c);-1<b&&(d[b]=c)};
THREE.MorphAnimMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.MorphAnimMesh(this.geometry,this.material));a.duration=this.duration;a.mirroredLoop=this.mirroredLoop;a.time=this.time;a.lastKeyframe=this.lastKeyframe;a.currentKeyframe=this.currentKeyframe;a.direction=this.direction;a.directionBackwards=this.directionBackwards;THREE.Mesh.prototype.clone.call(this,a);return a};THREE.LOD=function(){THREE.Object3D.call(this);this.objects=[]};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.constructor=THREE.LOD;THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=0;c<this.objects.length&&!(b<this.objects[c].distance);c++);this.objects.splice(c,0,{distance:b,object:a});this.add(a)};THREE.LOD.prototype.getObjectForDistance=function(a){for(var b=1,c=this.objects.length;b<c&&!(a<this.objects[b].distance);b++);return this.objects[b-1].object};
THREE.LOD.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}();
THREE.LOD.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){if(1<this.objects.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);this.objects[0].object.visible=!0;for(var d=1,e=this.objects.length;d<e;d++)if(c>=this.objects[d].distance)this.objects[d-1].object.visible=!1,this.objects[d].object.visible=!0;else break;for(;d<e;d++)this.objects[d].object.visible=!1}}}();
THREE.LOD.prototype.clone=function(a){void 0===a&&(a=new THREE.LOD);THREE.Object3D.prototype.clone.call(this,a);for(var b=0,c=this.objects.length;b<c;b++){var d=this.objects[b].object.clone();d.visible=0===b;a.addLevel(d,this.objects[b].distance)}return a};
THREE.Sprite=function(){var a=new Uint16Array([0,1,2,0,2,3]),b=new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),c=new Float32Array([0,0,1,0,1,1,0,1]),d=new THREE.BufferGeometry;d.addAttribute("index",new THREE.BufferAttribute(a,1));d.addAttribute("position",new THREE.BufferAttribute(b,3));d.addAttribute("uv",new THREE.BufferAttribute(c,2));return function(a){THREE.Object3D.call(this);this.type="Sprite";this.geometry=d;this.material=void 0!==a?a:new THREE.SpriteMaterial}}();
THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);THREE.Sprite.prototype.constructor=THREE.Sprite;THREE.Sprite.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceToPoint(a);d>this.scale.x||c.push({distance:d,point:this.position,face:null,object:this})}}();THREE.Sprite.prototype.clone=function(a){void 0===a&&(a=new THREE.Sprite(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};
THREE.Particle=THREE.Sprite;THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare.prototype.constructor=THREE.LensFlare;
THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:1,opacity:f,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*.25,c.rotation+=.25*(c.wantedRotation-c.rotation)};THREE.Scene=function(){THREE.Object3D.call(this);this.type="Scene";this.overrideMaterial=this.fog=null;this.autoUpdate=!0};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.constructor=THREE.Scene;THREE.Scene.prototype.clone=function(a){void 0===a&&(a=new THREE.Scene);THREE.Object3D.prototype.clone.call(this,a);null!==this.fog&&(a.fog=this.fog.clone());null!==this.overrideMaterial&&(a.overrideMaterial=this.overrideMaterial.clone());a.autoUpdate=this.autoUpdate;a.matrixAutoUpdate=this.matrixAutoUpdate;return a};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};
THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};THREE.ShaderChunk={};THREE.ShaderChunk.common="#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\nfloat square( in float a ) { return a*a; }\nvec2  square( in vec2 a )  { return vec2( a.x*a.x, a.y*a.y ); }\nvec3  square( in vec3 a )  { return vec3( a.x*a.x, a.y*a.y, a.z*a.z ); }\nvec4  square( in vec4 a )  { return vec4( a.x*a.x, a.y*a.y, a.z*a.z, a.w*a.w ); }\nfloat saturate( in float a ) { return clamp( a, 0.0, 1.0 ); }\nvec2  saturate( in vec2 a )  { return clamp( a, 0.0, 1.0 ); }\nvec3  saturate( in vec3 a )  { return clamp( a, 0.0, 1.0 ); }\nvec4  saturate( in vec4 a )  { return clamp( a, 0.0, 1.0 ); }\nfloat average( in float a ) { return a; }\nfloat average( in vec2 a )  { return ( a.x + a.y) * 0.5; }\nfloat average( in vec3 a )  { return ( a.x + a.y + a.z) / 3.0; }\nfloat average( in vec4 a )  { return ( a.x + a.y + a.z + a.w) * 0.25; }\nfloat whiteCompliment( in float a ) { return saturate( 1.0 - a ); }\nvec2  whiteCompliment( in vec2 a )  { return saturate( vec2(1.0) - a ); }\nvec3  whiteCompliment( in vec3 a )  { return saturate( vec3(1.0) - a ); }\nvec4  whiteCompliment( in vec4 a )  { return saturate( vec4(1.0) - a ); }\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n}\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal) {\n\tfloat distance = dot( planeNormal, point-pointOnPlane );\n\treturn point - distance * planeNormal;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn pointOnLine + lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) );\n}\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n\tif ( decayExponent > 0.0 ) {\n\t  return pow( saturate( 1.0 - lightDistance / cutoffDistance ), decayExponent );\n\t}\n\treturn 1.0;\n}\n\nvec3 inputToLinear( in vec3 a ) {\n#ifdef GAMMA_INPUT\n\treturn pow( a, vec3( float( GAMMA_FACTOR ) ) );\n#else\n\treturn a;\n#endif\n}\nvec3 linearToOutput( in vec3 a ) {\n#ifdef GAMMA_OUTPUT\n\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n#else\n\treturn a;\n#endif\n}\n";
THREE.ShaderChunk.alphatest_fragment="#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n";THREE.ShaderChunk.lights_lambert_vertex="vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\tvec3 dirVector = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n\tfloat dotProduct = dot( transformedNormal, dirVector );\n\tvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t#endif\n\n\t#endif\n\n\t#ifdef WRAP_AROUND\n\n\t\tvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\tdirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tdirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n\t\t#endif\n\n\t#endif\n\n\tvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n\t#endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\tpointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tpointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\tvLightFront += pointLightColor[ i ] * pointLightWeighting * attenuation;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += pointLightColor[ i ] * pointLightWeightingBack * attenuation;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\t\t\tvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\t\tvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\t\tspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n\t\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\t\tspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\tvLightFront += spotLightColor[ i ] * spotLightWeighting * attenuation * spotEffect;\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += spotLightColor[ i ] * spotLightWeightingBack * attenuation * spotEffect;\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lVector = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\tfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n\nvLightFront += ambientLightColor;\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack += ambientLightColor;\n\n#endif\n";
THREE.ShaderChunk.map_particle_pars_fragment="#ifdef USE_MAP\n\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n\n#endif\n";THREE.ShaderChunk.default_vertex="#ifdef USE_SKINNING\n\n\tvec4 mvPosition = modelViewMatrix * skinned;\n\n#elif defined( USE_MORPHTARGETS )\n\n\tvec4 mvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#else\n\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n";
THREE.ShaderChunk.map_pars_fragment="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";THREE.ShaderChunk.skinnormal_vertex="#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\t#ifdef USE_MORPHNORMALS\n\n\tvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n\t#else\n\n\tvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_vertex="#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif";THREE.ShaderChunk.lightmap_pars_vertex="#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\n#endif";THREE.ShaderChunk.lights_phong_fragment="#ifndef FLAT_SHADED\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n\t#endif\n\n#else\n\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\ttotalDiffuseLight += pointLightColor[ i ] * pointDiffuseWeight * attenuation;\n\n\t\t\t\t// specular\n\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\tfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * attenuation * specularNormalization;\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\t// diffuse\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n\t\t\t#else\n\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t\t#endif\n\n\t\t\ttotalDiffuseLight += spotLightColor[ i ] * spotDiffuseWeight * attenuation * spotEffect;\n\n\t\t\t// specular\n\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\tfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\ttotalSpecularLight += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * attenuation * specularNormalization * spotEffect;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec3 dirVector = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, dirVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\ttotalDiffuseLight += directionalLightColor[ i ] * dirDiffuseWeight;\n\n\t\t// specular\n\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\tfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n\t\t/*\n\t\t// fresnel term from skin shader\n\t\tconst float F0 = 0.128;\n\n\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\n\t\tfloat exponential = pow( base, 5.0 );\n\n\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\n\t\t*/\n\n\t\t/*\n\t\t// fresnel term from fresnel shader\n\t\tconst float mFresnelBias = 0.08;\n\t\tconst float mFresnelScale = 0.3;\n\t\tconst float mFresnelPower = 5.0;\n\n\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n\t\t*/\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t// \t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lVector = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\ttotalDiffuseLight += hemiColor;\n\n\t\t// specular (sky light)\n\n\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\tfloat hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n\t\t// specular (ground light)\n\n\t\tvec3 lVectorGround = -lVector;\n\n\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\tfloat hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n\t}\n\n#endif\n\n#ifdef METAL\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + ambientLightColor ) * specular + totalSpecularLight + emissive;\n\n#else\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + ambientLightColor ) + totalSpecularLight + emissive;\n\n#endif\n";
THREE.ShaderChunk.fog_pars_fragment="#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif";THREE.ShaderChunk.morphnormal_vertex="#ifdef USE_MORPHNORMALS\n\n\tvec3 morphedNormal = vec3( 0.0 );\n\n\tmorphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tmorphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tmorphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tmorphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n\tmorphedNormal += normal;\n\n#endif";
THREE.ShaderChunk.envmap_pars_fragment="#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif\n";THREE.ShaderChunk.logdepthbuf_fragment="#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif";
THREE.ShaderChunk.normalmap_pars_fragment="#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t// Per-Pixel Tangent Space Normal Mapping\n\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n";THREE.ShaderChunk.lightmap_pars_fragment="#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\tuniform sampler2D lightMap;\n\n#endif";THREE.ShaderChunk.shadowmap_vertex="#ifdef USE_SHADOWMAP\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif";
THREE.ShaderChunk.lights_phong_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif";THREE.ShaderChunk.map_fragment="#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor.xyz = inputToLinear( texelColor.xyz );\n\n\tdiffuseColor *= texelColor;\n\n#endif";THREE.ShaderChunk.lightmap_vertex="#ifdef USE_LIGHTMAP\n\n\tvUv2 = uv2;\n\n#endif";THREE.ShaderChunk.map_particle_fragment="#ifdef USE_MAP\n\n\tdiffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n";
THREE.ShaderChunk.color_pars_fragment="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n";THREE.ShaderChunk.color_vertex="#ifdef USE_COLOR\n\n\tvColor.xyz = inputToLinear( color.xyz );\n\n#endif";THREE.ShaderChunk.skinning_vertex="#ifdef USE_SKINNING\n\n\t#ifdef USE_MORPHTARGETS\n\n\tvec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n";
THREE.ShaderChunk.envmap_pars_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\n#endif\n";THREE.ShaderChunk.linear_to_gamma_fragment="\n\toutgoingLight = linearToOutput( outgoingLight );\n";THREE.ShaderChunk.color_pars_vertex="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif";THREE.ShaderChunk.lights_lambert_pars_vertex="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n";
THREE.ShaderChunk.map_pars_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n";THREE.ShaderChunk.envmap_fragment="#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\n\tenvColor.xyz = inputToLinear( envColor.xyz );\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.specularmap_pars_fragment="#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif";THREE.ShaderChunk.logdepthbuf_vertex="#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.morphtarget_pars_vertex="#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.specularmap_fragment="float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif";THREE.ShaderChunk.fog_fragment="#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = exp2( - square( fogDensity ) * square( depth ) * LOG2 );\n\t\tfogFactor = whiteCompliment( fogFactor );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\toutgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif";
THREE.ShaderChunk.bumpmap_pars_fragment="#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.defaultnormal_vertex="#ifdef USE_SKINNING\n\n\tvec3 objectNormal = skinnedNormal.xyz;\n\n#elif defined( USE_MORPHNORMALS )\n\n\tvec3 objectNormal = morphedNormal;\n\n#else\n\n\tvec3 objectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n";THREE.ShaderChunk.lights_phong_pars_fragment="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n";
THREE.ShaderChunk.skinbase_vertex="#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif";THREE.ShaderChunk.map_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif";
THREE.ShaderChunk.lightmap_fragment="#ifdef USE_LIGHTMAP\n\n\toutgoingLight *= diffuseColor.xyz * texture2D( lightMap, vUv2 ).xyz;\n\n#endif";THREE.ShaderChunk.shadowmap_pars_vertex="#ifdef USE_SHADOWMAP\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif";THREE.ShaderChunk.color_fragment="#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif";THREE.ShaderChunk.morphtarget_vertex="#ifdef USE_MORPHTARGETS\n\n\tvec3 morphed = vec3( 0.0 );\n\tmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\tmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\tmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\tmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\tmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\tmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\tmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\tmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n\tmorphed += position;\n\n#endif";
THREE.ShaderChunk.envmap_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvec3 worldNormal = transformDirection( objectNormal, modelMatrix );\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t#else\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.shadowmap_fragment="#ifdef USE_SHADOWMAP\n\n\t#ifdef SHADOWMAP_DEBUG\n\n\t\tvec3 frustumColors[3];\n\t\tfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n\t\tfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n\t\tfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n\t#endif\n\n\t#ifdef SHADOWMAP_CASCADE\n\n\t\tint inFrustumCount = 0;\n\n\t#endif\n\n\tfloat fDepth;\n\tvec3 shadowColor = vec3( 1.0 );\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\t\t\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\t\t\t// don't shadow pixels outside of light frustum\n\t\t\t\t// use just first frustum (for cascades)\n\t\t\t\t// don't shadow pixels behind far plane of light frustum\n\n\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\tinFrustumCount += int( inFrustum );\n\t\t\tbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n\t\t#else\n\n\t\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\t#endif\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t/*\n\t\t\t\t\t\t// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n\t\t\t\t\t\t// must enroll loop manually\n\n\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n\t\t\t\t\t\t\t\t// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n\t\t\t\t\t\t\t\t//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\tshadow += 1.0;\n\n\t\t\t\t}\n\n\t\t\t\tshadow /= 9.0;\n\n\t\t*/\n\n\t\t\t\tconst float shadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n\t\t\t\tshadowKernel[0] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n\t\t\t\tshadowKernel[1] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n\t\t\t\tshadowKernel[2] *= vec3(0.25);\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n\t\t\t\tshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n\t\t\t\tshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) );\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#else\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\n\t\t// spot with multiple shadows is darker\n\n\t\t\t\t\tshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n\t\t// spot with multiple shadows has the same color as single shadow spot\n\n\t\t// \t\t\t\t\tshadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n\t\t\t#endif\n\n\t\t}\n\n\n\t\t#ifdef SHADOWMAP_DEBUG\n\n\t\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\t\tif ( inFrustum && inFrustumCount == 1 ) outgoingLight *= frustumColors[ i ];\n\n\t\t\t#else\n\n\t\t\t\tif ( inFrustum ) outgoingLight *= frustumColors[ i ];\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t}\n\n\t// NOTE: I am unsure if this is correct in linear space.  -bhouston, Dec 29, 2014\n\tshadowColor = inputToLinear( shadowColor );\n\n\toutgoingLight = outgoingLight * shadowColor;\n\n#endif\n";
THREE.ShaderChunk.worldpos_vertex="#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#elif defined( USE_MORPHTARGETS )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n#endif\n";THREE.ShaderChunk.shadowmap_pars_fragment="#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n#endif";
THREE.ShaderChunk.skinning_pars_vertex="#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_fragment="#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\t#extension GL_EXT_frag_depth : enable\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.alphamap_fragment="#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n";THREE.ShaderChunk.alphamap_pars_fragment="#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n";
THREE.UniformsUtils={merge:function(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]),e;for(e in d)b[e]=d[e]}return b},clone:function(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];b[c][d]=e instanceof THREE.Color||e instanceof THREE.Vector2||e instanceof THREE.Vector3||e instanceof THREE.Vector4||e instanceof THREE.Matrix4||e instanceof THREE.Texture?e.clone():e instanceof Array?e.slice():e}}return b}};
THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},alphaMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:.98},morphTargetInfluences:{type:"f",value:0}},bump:{bumpMap:{type:"t",value:null},bumpScale:{type:"f",
value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},hemisphereLightSkyColor:{type:"fv",value:[]},hemisphereLightGroundColor:{type:"fv",
value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},pointLightDecay:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]},spotLightDecay:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",
value:1},size:{type:"f",value:1},scale:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};
THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",
THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.skinbase_vertex,"\t#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"\t#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,
"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",
THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"\toutgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},
lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,
THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,
THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,
THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,
THREE.ShaderChunk.specularmap_fragment,"\t#ifdef DOUBLE_SIDED\n\t\tif ( gl_FrontFacing )\n\t\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;\n\t\telse\n\t\t\toutgoingLight += diffuseColor.rgb * vLightBack + emissive;\n\t#else\n\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;\n\t#endif",THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},
phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",value:new THREE.Color(0)},specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif",THREE.ShaderChunk.common,
THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,
THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"\tvViewPosition = -mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;",
THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,
"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,
THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\tgl_Position = projectionMatrix * mvPosition;",
THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( psColor, opacity );",
THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphatest_fragment,"\toutgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),
vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",
THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.color_fragment,"\toutgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},
depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",value:1}},vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float mNear;\nuniform float mFar;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,
"void main() {",THREE.ShaderChunk.logdepthbuf_fragment,"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}"].join("\n")},normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,
"void main() {\n\tvNormal = normalize( normalMatrix * normal );",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vNormal;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},cube:{uniforms:{tCube:{type:"t",value:null},
tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,
"void main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},equirect:{uniforms:{tEquirect:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\nvec3 direction = normalize( vWorldPosition );\nvec2 sampleUV;\nsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\nsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\ngl_FragColor = texture2D( tEquirect, sampleUV );",THREE.ShaderChunk.logdepthbuf_fragment,
"}"].join("\n")},depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"vec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {",
THREE.ShaderChunk.logdepthbuf_fragment,"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}"].join("\n")}};
THREE.WebGLRenderer=function(a){function b(a){var b=a.geometry;a=a.material;var c=b.vertices.length;if(a.attributes){void 0===b.__webglCustomAttributesList&&(b.__webglCustomAttributesList=[]);for(var d in a.attributes){var e=a.attributes[d];if(!e.__webglInitialized||e.createUniqueBuffers){e.__webglInitialized=!0;var f=1;"v2"===e.type?f=2:"v3"===e.type?f=3:"v4"===e.type?f=4:"c"===e.type&&(f=3);e.size=f;e.array=new Float32Array(c*f);e.buffer=m.createBuffer();e.buffer.belongsToAttribute=d;e.needsUpdate=
!0}b.__webglCustomAttributesList.push(e)}}}function c(a,b){return a.material instanceof THREE.MeshFaceMaterial?a.material.materials[b.materialIndex]:a.material}function d(a,b,c,d){c=c.attributes;var e=b.attributes;b=b.attributesKeys;for(var f=0,g=b.length;f<g;f++){var h=b[f],k=e[h];if(0<=k){var n=c[h];void 0!==n?(h=n.itemSize,m.bindBuffer(m.ARRAY_BUFFER,n.buffer),W.enableAttribute(k),m.vertexAttribPointer(k,h,m.FLOAT,!1,0,d*h*4)):void 0!==a.defaultAttributeValues&&(2===a.defaultAttributeValues[h].length?
m.vertexAttrib2fv(k,a.defaultAttributeValues[h]):3===a.defaultAttributeValues[h].length&&m.vertexAttrib3fv(k,a.defaultAttributeValues[h]))}}W.disableUnusedAttributes()}function e(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function f(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function g(a,
b){return b[0]-a[0]}function h(a){if(!1!==a.visible){if(!(a instanceof THREE.Scene||a instanceof THREE.Group)){void 0===a.__webglInit&&(a.__webglInit=!0,a._modelViewMatrix=new THREE.Matrix4,a._normalMatrix=new THREE.Matrix3,a.addEventListener("removed",wb));var c=a.geometry;if(void 0!==c&&void 0===c.__webglInit)if(c.__webglInit=!0,c.addEventListener("dispose",jb),c instanceof THREE.BufferGeometry)B.info.memory.geometries++;else if(a instanceof THREE.Mesh)q(a,c);else if(a instanceof THREE.Line){if(void 0===
c.__webglVertexBuffer){c.__webglVertexBuffer=m.createBuffer();c.__webglColorBuffer=m.createBuffer();c.__webglLineDistanceBuffer=m.createBuffer();B.info.memory.geometries++;var d=c.vertices.length;c.__vertexArray=new Float32Array(3*d);c.__colorArray=new Float32Array(3*d);c.__lineDistanceArray=new Float32Array(1*d);c.__webglLineCount=d;b(a);c.verticesNeedUpdate=!0;c.colorsNeedUpdate=!0;c.lineDistancesNeedUpdate=!0}}else a instanceof THREE.PointCloud&&void 0===c.__webglVertexBuffer&&(c.__webglVertexBuffer=
m.createBuffer(),c.__webglColorBuffer=m.createBuffer(),B.info.memory.geometries++,d=c.vertices.length,c.__vertexArray=new Float32Array(3*d),c.__colorArray=new Float32Array(3*d),c.__webglParticleCount=d,b(a),c.verticesNeedUpdate=!0,c.colorsNeedUpdate=!0);if(void 0===a.__webglActive)if(a.__webglActive=!0,a instanceof THREE.Mesh)if(c instanceof THREE.BufferGeometry)n(ba,c,a);else{if(c instanceof THREE.Geometry)for(var c=Ua[c.id],d=0,e=c.length;d<e;d++)n(ba,c[d],a)}else a instanceof THREE.Line||a instanceof
THREE.PointCloud?n(ba,c,a):(a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback)&&qa.push({id:null,object:a,opaque:null,transparent:null,z:0});if(a instanceof THREE.Light)ca.push(a);else if(a instanceof THREE.Sprite)Xa.push(a);else if(a instanceof THREE.LensFlare)Ya.push(a);else if((c=ba[a.id])&&(!1===a.frustumCulled||!0===cb.intersectsObject(a)))for(d=0,e=c.length;d<e;d++){var f=c[d],g=f,k=g.object,l=g.buffer,p=k.geometry,k=k.material;k instanceof THREE.MeshFaceMaterial?(k=k.materials[p instanceof
THREE.BufferGeometry?0:l.materialIndex],g.material=k,k.transparent?Qa.push(g):Ka.push(g)):k&&(g.material=k,k.transparent?Qa.push(g):Ka.push(g));f.render=!0;!0===B.sortObjects&&(wa.setFromMatrixPosition(a.matrixWorld),wa.applyProjection(db),f.z=wa.z)}}d=0;for(e=a.children.length;d<e;d++)h(a.children[d])}}function k(a,b,c,d,e){for(var f,g=0,h=a.length;g<h;g++){f=a[g];var k=f.object,m=f.buffer;w(k,b);if(e)f=e;else{f=f.material;if(!f)continue;u(f)}B.setMaterialFaces(f);m instanceof THREE.BufferGeometry?
B.renderBufferDirect(b,c,d,f,m,k):B.renderBuffer(b,c,d,f,m,k)}}function l(a,b,c,d,e,f){for(var g,h=0,k=a.length;h<k;h++){g=a[h];var m=g.object;if(m.visible){if(f)g=f;else{g=g[b];if(!g)continue;u(g)}B.renderImmediateObject(c,d,e,g,m)}}}function p(a){var b=a.object.material;b.transparent?(a.transparent=b,a.opaque=null):(a.opaque=b,a.transparent=null)}function q(a,b){var d=a.material,e=!1;if(void 0===Ua[b.id]||!0===b.groupsNeedUpdate){delete ba[a.id];for(var f=Ua,g=b.id,d=d instanceof THREE.MeshFaceMaterial,
h=da.get("OES_element_index_uint")?4294967296:65535,k,e={},l=b.morphTargets.length,p=b.morphNormals.length,q,s={},t=[],r=0,w=b.faces.length;r<w;r++){k=b.faces[r];var u=d?k.materialIndex:0;u in e||(e[u]={hash:u,counter:0});k=e[u].hash+"_"+e[u].counter;k in s||(q={id:Qb++,faces3:[],materialIndex:u,vertices:0,numMorphTargets:l,numMorphNormals:p},s[k]=q,t.push(q));s[k].vertices+3>h&&(e[u].counter+=1,k=e[u].hash+"_"+e[u].counter,k in s||(q={id:Qb++,faces3:[],materialIndex:u,vertices:0,numMorphTargets:l,
numMorphNormals:p},s[k]=q,t.push(q)));s[k].faces3.push(r);s[k].vertices+=3}f[g]=t;b.groupsNeedUpdate=!1}f=Ua[b.id];g=0;for(d=f.length;g<d;g++){h=f[g];if(void 0===h.__webglVertexBuffer){e=h;e.__webglVertexBuffer=m.createBuffer();e.__webglNormalBuffer=m.createBuffer();e.__webglTangentBuffer=m.createBuffer();e.__webglColorBuffer=m.createBuffer();e.__webglUVBuffer=m.createBuffer();e.__webglUV2Buffer=m.createBuffer();e.__webglSkinIndicesBuffer=m.createBuffer();e.__webglSkinWeightsBuffer=m.createBuffer();
e.__webglFaceBuffer=m.createBuffer();e.__webglLineBuffer=m.createBuffer();if(p=e.numMorphTargets)for(e.__webglMorphTargetsBuffers=[],l=0;l<p;l++)e.__webglMorphTargetsBuffers.push(m.createBuffer());if(p=e.numMorphNormals)for(e.__webglMorphNormalsBuffers=[],l=0;l<p;l++)e.__webglMorphNormalsBuffers.push(m.createBuffer());B.info.memory.geometries++;e=h;r=a;w=r.geometry;p=e.faces3;l=3*p.length;s=1*p.length;t=3*p.length;p=c(r,e);e.__vertexArray=new Float32Array(3*l);e.__normalArray=new Float32Array(3*l);
e.__colorArray=new Float32Array(3*l);e.__uvArray=new Float32Array(2*l);1<w.faceVertexUvs.length&&(e.__uv2Array=new Float32Array(2*l));w.hasTangents&&(e.__tangentArray=new Float32Array(4*l));r.geometry.skinWeights.length&&r.geometry.skinIndices.length&&(e.__skinIndexArray=new Float32Array(4*l),e.__skinWeightArray=new Float32Array(4*l));r=null!==da.get("OES_element_index_uint")&&21845<s?Uint32Array:Uint16Array;e.__typeArray=r;e.__faceArray=new r(3*s);e.__lineArray=new r(2*t);if(w=e.numMorphTargets)for(e.__morphTargetsArrays=
[],r=0;r<w;r++)e.__morphTargetsArrays.push(new Float32Array(3*l));if(w=e.numMorphNormals)for(e.__morphNormalsArrays=[],r=0;r<w;r++)e.__morphNormalsArrays.push(new Float32Array(3*l));e.__webglFaceCount=3*s;e.__webglLineCount=2*t;if(p.attributes)for(s in void 0===e.__webglCustomAttributesList&&(e.__webglCustomAttributesList=[]),s=void 0,p.attributes){var t=p.attributes[s],r={},v;for(v in t)r[v]=t[v];if(!r.__webglInitialized||r.createUniqueBuffers)r.__webglInitialized=!0,w=1,"v2"===r.type?w=2:"v3"===
r.type?w=3:"v4"===r.type?w=4:"c"===r.type&&(w=3),r.size=w,r.array=new Float32Array(l*w),r.buffer=m.createBuffer(),r.buffer.belongsToAttribute=s,t.needsUpdate=!0,r.__original=t;e.__webglCustomAttributesList.push(r)}e.__inittedArrays=!0;b.verticesNeedUpdate=!0;b.morphTargetsNeedUpdate=!0;b.elementsNeedUpdate=!0;b.uvsNeedUpdate=!0;b.normalsNeedUpdate=!0;b.tangentsNeedUpdate=!0;e=b.colorsNeedUpdate=!0}else e=!1;(e||void 0===a.__webglActive)&&n(ba,h,a)}a.__webglActive=!0}function n(a,b,c){var d=c.id;a[d]=
a[d]||[];a[d].push({id:d,buffer:b,object:c,material:null,z:0})}function t(a){var b=a.geometry;if(b instanceof THREE.BufferGeometry)for(var d=b.attributes,e=b.attributesKeys,f=0,g=e.length;f<g;f++){var h=e[f],k=d[h],n="index"===h?m.ELEMENT_ARRAY_BUFFER:m.ARRAY_BUFFER;void 0===k.buffer?(k.buffer=m.createBuffer(),m.bindBuffer(n,k.buffer),m.bufferData(n,k.array,k instanceof THREE.DynamicBufferAttribute?m.DYNAMIC_DRAW:m.STATIC_DRAW),k.needsUpdate=!1):!0===k.needsUpdate&&(m.bindBuffer(n,k.buffer),void 0===
k.updateRange||-1===k.updateRange.count?m.bufferSubData(n,0,k.array):0===k.updateRange.count?console.error("THREE.WebGLRenderer.updateObject: using updateRange for THREE.DynamicBufferAttribute and marked as needsUpdate but count is 0, ensure you are using set methods or updating manually."):(m.bufferSubData(n,k.updateRange.offset*k.array.BYTES_PER_ELEMENT,k.array.subarray(k.updateRange.offset,k.updateRange.offset+k.updateRange.count)),k.updateRange.count=0),k.needsUpdate=!1)}else if(a instanceof THREE.Mesh){!0===
b.groupsNeedUpdate&&q(a,b);for(var l=Ua[b.id],f=0,p=l.length;f<p;f++){var t=l[f],w=c(a,t),u=w.attributes&&r(w);if(b.verticesNeedUpdate||b.morphTargetsNeedUpdate||b.elementsNeedUpdate||b.uvsNeedUpdate||b.normalsNeedUpdate||b.colorsNeedUpdate||b.tangentsNeedUpdate||u){var v=t,x=a,D=m.DYNAMIC_DRAW,A=!b.dynamic,E=w;if(v.__inittedArrays){var G=!1===E instanceof THREE.MeshPhongMaterial&&E.shading===THREE.FlatShading,y=void 0,z=void 0,F=void 0,B=void 0,I=void 0,H=void 0,M=void 0,R=void 0,P=void 0,U=void 0,
O=void 0,J=void 0,L=void 0,N=void 0,Ka=void 0,V=void 0,W=void 0,Qa=void 0,Ya=void 0,Xa=void 0,da=void 0,ba=void 0,ja=void 0,Pa=void 0,ka=void 0,Q=void 0,ha=void 0,ia=void 0,ob=void 0,Y=void 0,ub=void 0,pa=void 0,ab=void 0,oa=void 0,ca=void 0,qa=void 0,Ca=void 0,ta=void 0,na=void 0,wa=void 0,La=0,Ma=0,kb=0,yb=0,zb=0,Ra=0,Aa=0,eb=0,Ha=0,la=0,ra=0,K=0,za=void 0,Sa=v.__vertexArray,Ab=v.__uvArray,lb=v.__uv2Array,Na=v.__normalArray,sa=v.__tangentArray,Da=v.__colorArray,Ea=v.__skinIndexArray,Fa=v.__skinWeightArray,
Gb=v.__morphTargetsArrays,Bb=v.__morphNormalsArrays,mb=v.__webglCustomAttributesList,C=void 0,Va=v.__faceArray,Ta=v.__lineArray,ea=x.geometry,fb=ea.elementsNeedUpdate,vb=ea.uvsNeedUpdate,Mb=ea.normalsNeedUpdate,Ob=ea.tangentsNeedUpdate,ib=ea.colorsNeedUpdate,sb=ea.morphTargetsNeedUpdate,Cb=ea.vertices,$=v.faces3,xa=ea.faces,Hb=ea.faceVertexUvs[0],Oa=ea.faceVertexUvs[1],$a=ea.skinIndices,Ga=ea.skinWeights,nb=ea.morphTargets,bb=ea.morphNormals;if(ea.verticesNeedUpdate){y=0;for(z=$.length;y<z;y++)B=
xa[$[y]],J=Cb[B.a],L=Cb[B.b],N=Cb[B.c],Sa[Ma]=J.x,Sa[Ma+1]=J.y,Sa[Ma+2]=J.z,Sa[Ma+3]=L.x,Sa[Ma+4]=L.y,Sa[Ma+5]=L.z,Sa[Ma+6]=N.x,Sa[Ma+7]=N.y,Sa[Ma+8]=N.z,Ma+=9;m.bindBuffer(m.ARRAY_BUFFER,v.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,Sa,D)}if(sb)for(ca=0,qa=nb.length;ca<qa;ca++){y=ra=0;for(z=$.length;y<z;y++)na=$[y],B=xa[na],J=nb[ca].vertices[B.a],L=nb[ca].vertices[B.b],N=nb[ca].vertices[B.c],Ca=Gb[ca],Ca[ra]=J.x,Ca[ra+1]=J.y,Ca[ra+2]=J.z,Ca[ra+3]=L.x,Ca[ra+4]=L.y,Ca[ra+5]=L.z,Ca[ra+6]=N.x,Ca[ra+
7]=N.y,Ca[ra+8]=N.z,E.morphNormals&&(G?Xa=Ya=Qa=bb[ca].faceNormals[na]:(wa=bb[ca].vertexNormals[na],Qa=wa.a,Ya=wa.b,Xa=wa.c),ta=Bb[ca],ta[ra]=Qa.x,ta[ra+1]=Qa.y,ta[ra+2]=Qa.z,ta[ra+3]=Ya.x,ta[ra+4]=Ya.y,ta[ra+5]=Ya.z,ta[ra+6]=Xa.x,ta[ra+7]=Xa.y,ta[ra+8]=Xa.z),ra+=9;m.bindBuffer(m.ARRAY_BUFFER,v.__webglMorphTargetsBuffers[ca]);m.bufferData(m.ARRAY_BUFFER,Gb[ca],D);E.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,v.__webglMorphNormalsBuffers[ca]),m.bufferData(m.ARRAY_BUFFER,Bb[ca],D))}if(Ga.length){y=0;
for(z=$.length;y<z;y++)B=xa[$[y]],Pa=Ga[B.a],ka=Ga[B.b],Q=Ga[B.c],Fa[la]=Pa.x,Fa[la+1]=Pa.y,Fa[la+2]=Pa.z,Fa[la+3]=Pa.w,Fa[la+4]=ka.x,Fa[la+5]=ka.y,Fa[la+6]=ka.z,Fa[la+7]=ka.w,Fa[la+8]=Q.x,Fa[la+9]=Q.y,Fa[la+10]=Q.z,Fa[la+11]=Q.w,ha=$a[B.a],ia=$a[B.b],ob=$a[B.c],Ea[la]=ha.x,Ea[la+1]=ha.y,Ea[la+2]=ha.z,Ea[la+3]=ha.w,Ea[la+4]=ia.x,Ea[la+5]=ia.y,Ea[la+6]=ia.z,Ea[la+7]=ia.w,Ea[la+8]=ob.x,Ea[la+9]=ob.y,Ea[la+10]=ob.z,Ea[la+11]=ob.w,la+=12;0<la&&(m.bindBuffer(m.ARRAY_BUFFER,v.__webglSkinIndicesBuffer),
m.bufferData(m.ARRAY_BUFFER,Ea,D),m.bindBuffer(m.ARRAY_BUFFER,v.__webglSkinWeightsBuffer),m.bufferData(m.ARRAY_BUFFER,Fa,D))}if(ib){y=0;for(z=$.length;y<z;y++)B=xa[$[y]],M=B.vertexColors,R=B.color,3===M.length&&E.vertexColors===THREE.VertexColors?(da=M[0],ba=M[1],ja=M[2]):ja=ba=da=R,Da[Ha]=da.r,Da[Ha+1]=da.g,Da[Ha+2]=da.b,Da[Ha+3]=ba.r,Da[Ha+4]=ba.g,Da[Ha+5]=ba.b,Da[Ha+6]=ja.r,Da[Ha+7]=ja.g,Da[Ha+8]=ja.b,Ha+=9;0<Ha&&(m.bindBuffer(m.ARRAY_BUFFER,v.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,Da,
D))}if(Ob&&ea.hasTangents){y=0;for(z=$.length;y<z;y++)B=xa[$[y]],P=B.vertexTangents,Ka=P[0],V=P[1],W=P[2],sa[Aa]=Ka.x,sa[Aa+1]=Ka.y,sa[Aa+2]=Ka.z,sa[Aa+3]=Ka.w,sa[Aa+4]=V.x,sa[Aa+5]=V.y,sa[Aa+6]=V.z,sa[Aa+7]=V.w,sa[Aa+8]=W.x,sa[Aa+9]=W.y,sa[Aa+10]=W.z,sa[Aa+11]=W.w,Aa+=12;m.bindBuffer(m.ARRAY_BUFFER,v.__webglTangentBuffer);m.bufferData(m.ARRAY_BUFFER,sa,D)}if(Mb){y=0;for(z=$.length;y<z;y++)if(B=xa[$[y]],I=B.vertexNormals,H=B.normal,3===I.length&&!1===G)for(Y=0;3>Y;Y++)pa=I[Y],Na[Ra]=pa.x,Na[Ra+1]=
pa.y,Na[Ra+2]=pa.z,Ra+=3;else for(Y=0;3>Y;Y++)Na[Ra]=H.x,Na[Ra+1]=H.y,Na[Ra+2]=H.z,Ra+=3;m.bindBuffer(m.ARRAY_BUFFER,v.__webglNormalBuffer);m.bufferData(m.ARRAY_BUFFER,Na,D)}if(vb&&Hb){y=0;for(z=$.length;y<z;y++)if(F=$[y],U=Hb[F],void 0!==U)for(Y=0;3>Y;Y++)ab=U[Y],Ab[kb]=ab.x,Ab[kb+1]=ab.y,kb+=2;0<kb&&(m.bindBuffer(m.ARRAY_BUFFER,v.__webglUVBuffer),m.bufferData(m.ARRAY_BUFFER,Ab,D))}if(vb&&Oa){y=0;for(z=$.length;y<z;y++)if(F=$[y],O=Oa[F],void 0!==O)for(Y=0;3>Y;Y++)oa=O[Y],lb[yb]=oa.x,lb[yb+1]=oa.y,
yb+=2;0<yb&&(m.bindBuffer(m.ARRAY_BUFFER,v.__webglUV2Buffer),m.bufferData(m.ARRAY_BUFFER,lb,D))}if(fb){y=0;for(z=$.length;y<z;y++)Va[zb]=La,Va[zb+1]=La+1,Va[zb+2]=La+2,zb+=3,Ta[eb]=La,Ta[eb+1]=La+1,Ta[eb+2]=La,Ta[eb+3]=La+2,Ta[eb+4]=La+1,Ta[eb+5]=La+2,eb+=6,La+=3;m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,v.__webglFaceBuffer);m.bufferData(m.ELEMENT_ARRAY_BUFFER,Va,D);m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,v.__webglLineBuffer);m.bufferData(m.ELEMENT_ARRAY_BUFFER,Ta,D)}if(mb)for(Y=0,ub=mb.length;Y<ub;Y++)if(C=
mb[Y],C.__original.needsUpdate){K=0;if(1===C.size)if(void 0===C.boundTo||"vertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)B=xa[$[y]],C.array[K]=C.value[B.a],C.array[K+1]=C.value[B.b],C.array[K+2]=C.value[B.c],K+=3;else{if("faces"===C.boundTo)for(y=0,z=$.length;y<z;y++)za=C.value[$[y]],C.array[K]=za,C.array[K+1]=za,C.array[K+2]=za,K+=3}else if(2===C.size)if(void 0===C.boundTo||"vertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)B=xa[$[y]],J=C.value[B.a],L=C.value[B.b],N=C.value[B.c],C.array[K]=J.x,
C.array[K+1]=J.y,C.array[K+2]=L.x,C.array[K+3]=L.y,C.array[K+4]=N.x,C.array[K+5]=N.y,K+=6;else{if("faces"===C.boundTo)for(y=0,z=$.length;y<z;y++)N=L=J=za=C.value[$[y]],C.array[K]=J.x,C.array[K+1]=J.y,C.array[K+2]=L.x,C.array[K+3]=L.y,C.array[K+4]=N.x,C.array[K+5]=N.y,K+=6}else if(3===C.size){var T;T="c"===C.type?["r","g","b"]:["x","y","z"];if(void 0===C.boundTo||"vertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)B=xa[$[y]],J=C.value[B.a],L=C.value[B.b],N=C.value[B.c],C.array[K]=J[T[0]],C.array[K+1]=
J[T[1]],C.array[K+2]=J[T[2]],C.array[K+3]=L[T[0]],C.array[K+4]=L[T[1]],C.array[K+5]=L[T[2]],C.array[K+6]=N[T[0]],C.array[K+7]=N[T[1]],C.array[K+8]=N[T[2]],K+=9;else if("faces"===C.boundTo)for(y=0,z=$.length;y<z;y++)N=L=J=za=C.value[$[y]],C.array[K]=J[T[0]],C.array[K+1]=J[T[1]],C.array[K+2]=J[T[2]],C.array[K+3]=L[T[0]],C.array[K+4]=L[T[1]],C.array[K+5]=L[T[2]],C.array[K+6]=N[T[0]],C.array[K+7]=N[T[1]],C.array[K+8]=N[T[2]],K+=9;else if("faceVertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)za=C.value[$[y]],
J=za[0],L=za[1],N=za[2],C.array[K]=J[T[0]],C.array[K+1]=J[T[1]],C.array[K+2]=J[T[2]],C.array[K+3]=L[T[0]],C.array[K+4]=L[T[1]],C.array[K+5]=L[T[2]],C.array[K+6]=N[T[0]],C.array[K+7]=N[T[1]],C.array[K+8]=N[T[2]],K+=9}else if(4===C.size)if(void 0===C.boundTo||"vertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)B=xa[$[y]],J=C.value[B.a],L=C.value[B.b],N=C.value[B.c],C.array[K]=J.x,C.array[K+1]=J.y,C.array[K+2]=J.z,C.array[K+3]=J.w,C.array[K+4]=L.x,C.array[K+5]=L.y,C.array[K+6]=L.z,C.array[K+7]=L.w,C.array[K+
8]=N.x,C.array[K+9]=N.y,C.array[K+10]=N.z,C.array[K+11]=N.w,K+=12;else if("faces"===C.boundTo)for(y=0,z=$.length;y<z;y++)N=L=J=za=C.value[$[y]],C.array[K]=J.x,C.array[K+1]=J.y,C.array[K+2]=J.z,C.array[K+3]=J.w,C.array[K+4]=L.x,C.array[K+5]=L.y,C.array[K+6]=L.z,C.array[K+7]=L.w,C.array[K+8]=N.x,C.array[K+9]=N.y,C.array[K+10]=N.z,C.array[K+11]=N.w,K+=12;else if("faceVertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)za=C.value[$[y]],J=za[0],L=za[1],N=za[2],C.array[K]=J.x,C.array[K+1]=J.y,C.array[K+2]=
J.z,C.array[K+3]=J.w,C.array[K+4]=L.x,C.array[K+5]=L.y,C.array[K+6]=L.z,C.array[K+7]=L.w,C.array[K+8]=N.x,C.array[K+9]=N.y,C.array[K+10]=N.z,C.array[K+11]=N.w,K+=12;m.bindBuffer(m.ARRAY_BUFFER,C.buffer);m.bufferData(m.ARRAY_BUFFER,C.array,D)}A&&(delete v.__inittedArrays,delete v.__colorArray,delete v.__normalArray,delete v.__tangentArray,delete v.__uvArray,delete v.__uv2Array,delete v.__faceArray,delete v.__vertexArray,delete v.__lineArray,delete v.__skinIndexArray,delete v.__skinWeightArray)}}}b.verticesNeedUpdate=
!1;b.morphTargetsNeedUpdate=!1;b.elementsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.tangentsNeedUpdate=!1;w.attributes&&s(w)}else if(a instanceof THREE.Line){w=c(a,b);u=w.attributes&&r(w);if(b.verticesNeedUpdate||b.colorsNeedUpdate||b.lineDistancesNeedUpdate||u){var Db=m.DYNAMIC_DRAW,S,aa,Z,Ba,X,Eb,Rb=b.vertices,Ib=b.colors,gb=b.lineDistances,ya=Rb.length,pb=Ib.length,qb=gb.length,Wa=b.__vertexArray,tb=b.__colorArray,hb=b.__lineDistanceArray,$b=b.colorsNeedUpdate,
Fb=b.lineDistancesNeedUpdate,Sb=b.__webglCustomAttributesList,Jb,cb,ua,Kb,Ia,fa;if(b.verticesNeedUpdate){for(S=0;S<ya;S++)Ba=Rb[S],X=3*S,Wa[X]=Ba.x,Wa[X+1]=Ba.y,Wa[X+2]=Ba.z;m.bindBuffer(m.ARRAY_BUFFER,b.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,Wa,Db)}if($b){for(aa=0;aa<pb;aa++)Eb=Ib[aa],X=3*aa,tb[X]=Eb.r,tb[X+1]=Eb.g,tb[X+2]=Eb.b;m.bindBuffer(m.ARRAY_BUFFER,b.__webglColorBuffer);m.bufferData(m.ARRAY_BUFFER,tb,Db)}if(Fb){for(Z=0;Z<qb;Z++)hb[Z]=gb[Z];m.bindBuffer(m.ARRAY_BUFFER,b.__webglLineDistanceBuffer);
m.bufferData(m.ARRAY_BUFFER,hb,Db)}if(Sb)for(Jb=0,cb=Sb.length;Jb<cb;Jb++)if(fa=Sb[Jb],fa.needsUpdate&&(void 0===fa.boundTo||"vertices"===fa.boundTo)){X=0;Kb=fa.value.length;if(1===fa.size)for(ua=0;ua<Kb;ua++)fa.array[ua]=fa.value[ua];else if(2===fa.size)for(ua=0;ua<Kb;ua++)Ia=fa.value[ua],fa.array[X]=Ia.x,fa.array[X+1]=Ia.y,X+=2;else if(3===fa.size)if("c"===fa.type)for(ua=0;ua<Kb;ua++)Ia=fa.value[ua],fa.array[X]=Ia.r,fa.array[X+1]=Ia.g,fa.array[X+2]=Ia.b,X+=3;else for(ua=0;ua<Kb;ua++)Ia=fa.value[ua],
fa.array[X]=Ia.x,fa.array[X+1]=Ia.y,fa.array[X+2]=Ia.z,X+=3;else if(4===fa.size)for(ua=0;ua<Kb;ua++)Ia=fa.value[ua],fa.array[X]=Ia.x,fa.array[X+1]=Ia.y,fa.array[X+2]=Ia.z,fa.array[X+3]=Ia.w,X+=4;m.bindBuffer(m.ARRAY_BUFFER,fa.buffer);m.bufferData(m.ARRAY_BUFFER,fa.array,Db);fa.needsUpdate=!1}}b.verticesNeedUpdate=!1;b.colorsNeedUpdate=!1;b.lineDistancesNeedUpdate=!1;w.attributes&&s(w)}else if(a instanceof THREE.PointCloud){w=c(a,b);u=w.attributes&&r(w);if(b.verticesNeedUpdate||b.colorsNeedUpdate||
u){var db=m.DYNAMIC_DRAW,Tb,Ub,ac,ma,bc,Nb=b.vertices,Vb=Nb.length,Pb=b.colors,rb=Pb.length,cc=b.__vertexArray,dc=b.__colorArray,wb=b.colorsNeedUpdate,gc=b.__webglCustomAttributesList,ec,jb,va,Lb,Ja,ga;if(b.verticesNeedUpdate){for(Tb=0;Tb<Vb;Tb++)ac=Nb[Tb],ma=3*Tb,cc[ma]=ac.x,cc[ma+1]=ac.y,cc[ma+2]=ac.z;m.bindBuffer(m.ARRAY_BUFFER,b.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,cc,db)}if(wb){for(Ub=0;Ub<rb;Ub++)bc=Pb[Ub],ma=3*Ub,dc[ma]=bc.r,dc[ma+1]=bc.g,dc[ma+2]=bc.b;m.bindBuffer(m.ARRAY_BUFFER,
b.__webglColorBuffer);m.bufferData(m.ARRAY_BUFFER,dc,db)}if(gc)for(ec=0,jb=gc.length;ec<jb;ec++){ga=gc[ec];if(ga.needsUpdate&&(void 0===ga.boundTo||"vertices"===ga.boundTo))if(Lb=ga.value.length,ma=0,1===ga.size)for(va=0;va<Lb;va++)ga.array[va]=ga.value[va];else if(2===ga.size)for(va=0;va<Lb;va++)Ja=ga.value[va],ga.array[ma]=Ja.x,ga.array[ma+1]=Ja.y,ma+=2;else if(3===ga.size)if("c"===ga.type)for(va=0;va<Lb;va++)Ja=ga.value[va],ga.array[ma]=Ja.r,ga.array[ma+1]=Ja.g,ga.array[ma+2]=Ja.b,ma+=3;else for(va=
0;va<Lb;va++)Ja=ga.value[va],ga.array[ma]=Ja.x,ga.array[ma+1]=Ja.y,ga.array[ma+2]=Ja.z,ma+=3;else if(4===ga.size)for(va=0;va<Lb;va++)Ja=ga.value[va],ga.array[ma]=Ja.x,ga.array[ma+1]=Ja.y,ga.array[ma+2]=Ja.z,ga.array[ma+3]=Ja.w,ma+=4;m.bindBuffer(m.ARRAY_BUFFER,ga.buffer);m.bufferData(m.ARRAY_BUFFER,ga.array,db);ga.needsUpdate=!1}}b.verticesNeedUpdate=!1;b.colorsNeedUpdate=!1;w.attributes&&s(w)}}function r(a){for(var b in a.attributes)if(a.attributes[b].needsUpdate)return!0;return!1}function s(a){for(var b in a.attributes)a.attributes[b].needsUpdate=
!1}function u(a){!0===a.transparent?W.setBlending(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha):W.setBlending(THREE.NoBlending);W.setDepthTest(a.depthTest);W.setDepthWrite(a.depthWrite);W.setColorWrite(a.colorWrite);W.setPolygonOffset(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits)}function v(a,b,c,d,e){var f,g,h,k;Mb=0;if(d.needsUpdate){d.program&&hc(d);d.addEventListener("dispose",ic);var n=pc[d.type];if(n){var l=THREE.ShaderLib[n];
d.__webglShader={uniforms:THREE.UniformsUtils.clone(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}}else d.__webglShader={uniforms:d.uniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader};for(var p=0,q=0,r=0,s=0,t=0,w=b.length;t<w;t++){var v=b[t];v.onlyShadow||!1===v.visible||(v instanceof THREE.DirectionalLight&&p++,v instanceof THREE.PointLight&&q++,v instanceof THREE.SpotLight&&r++,v instanceof THREE.HemisphereLight&&s++)}f=p;g=q;h=r;k=s;for(var u,z=0,G=
0,F=b.length;G<F;G++){var J=b[G];J.castShadow&&(J instanceof THREE.SpotLight&&z++,J instanceof THREE.DirectionalLight&&!J.shadowCascade&&z++)}u=z;var H;if(Nb&&e&&e.skeleton&&e.skeleton.useVertexTexture)H=1024;else{var N=m.getParameter(m.MAX_VERTEX_UNIFORM_VECTORS),M=Math.floor((N-20)/4);void 0!==e&&e instanceof THREE.SkinnedMesh&&(M=Math.min(e.skeleton.bones.length,M),M<e.skeleton.bones.length&&THREE.warn("WebGLRenderer: too many bones - "+e.skeleton.bones.length+", this GPU supports just "+M+" (try OpenGL instead of ANGLE)"));
H=M}var P={precision:L,supportsVertexTextures:Vb,map:!!d.map,envMap:!!d.envMap,envMapMode:d.envMap&&d.envMap.mapping,lightMap:!!d.lightMap,bumpMap:!!d.bumpMap,normalMap:!!d.normalMap,specularMap:!!d.specularMap,alphaMap:!!d.alphaMap,combine:d.combine,vertexColors:d.vertexColors,fog:c,useFog:d.fog,fogExp:c instanceof THREE.FogExp2,flatShading:d.shading===THREE.FlatShading,sizeAttenuation:d.sizeAttenuation,logarithmicDepthBuffer:ja,skinning:d.skinning,maxBones:H,useVertexTexture:Nb&&e&&e.skeleton&&
e.skeleton.useVertexTexture,morphTargets:d.morphTargets,morphNormals:d.morphNormals,maxMorphTargets:B.maxMorphTargets,maxMorphNormals:B.maxMorphNormals,maxDirLights:f,maxPointLights:g,maxSpotLights:h,maxHemiLights:k,maxShadows:u,shadowMapEnabled:B.shadowMapEnabled&&e.receiveShadow&&0<u,shadowMapType:B.shadowMapType,shadowMapDebug:B.shadowMapDebug,shadowMapCascade:B.shadowMapCascade,alphaTest:d.alphaTest,metal:d.metal,wrapAround:d.wrapAround,doubleSided:d.side===THREE.DoubleSide,flipSided:d.side===
THREE.BackSide},R=[];n?R.push(n):(R.push(d.fragmentShader),R.push(d.vertexShader));if(void 0!==d.defines)for(var O in d.defines)R.push(O),R.push(d.defines[O]);for(O in P)R.push(O),R.push(P[O]);for(var Ka=R.join(),V,W=0,Qa=Pa.length;W<Qa;W++){var Ya=Pa[W];if(Ya.code===Ka){V=Ya;V.usedTimes++;break}}void 0===V&&(V=new THREE.WebGLProgram(B,Ka,d,P),Pa.push(V),B.info.memory.programs=Pa.length);d.program=V;var Xa=V.attributes;if(d.morphTargets){d.numSupportedMorphTargets=0;for(var ca,da="morphTarget",ba=
0;ba<B.maxMorphTargets;ba++)ca=da+ba,0<=Xa[ca]&&d.numSupportedMorphTargets++}if(d.morphNormals)for(d.numSupportedMorphNormals=0,da="morphNormal",ba=0;ba<B.maxMorphNormals;ba++)ca=da+ba,0<=Xa[ca]&&d.numSupportedMorphNormals++;d.uniformsList=[];for(var ha in d.__webglShader.uniforms){var ta=d.program.uniforms[ha];ta&&d.uniformsList.push([d.__webglShader.uniforms[ha],ta])}d.needsUpdate=!1}d.morphTargets&&!e.__webglMorphTargetInfluences&&(e.__webglMorphTargetInfluences=new Float32Array(B.maxMorphTargets));
var ab=!1,oa=!1,qa=!1,Ua=d.program,ka=Ua.uniforms,Q=d.__webglShader.uniforms;Ua.id!==ob&&(m.useProgram(Ua.program),ob=Ua.id,qa=oa=ab=!0);d.id!==ub&&(-1===ub&&(qa=!0),ub=d.id,oa=!0);if(ab||a!==vb)m.uniformMatrix4fv(ka.projectionMatrix,!1,a.projectionMatrix.elements),ja&&m.uniform1f(ka.logDepthBufFC,2/(Math.log(a.far+1)/Math.LN2)),a!==vb&&(vb=a),(d instanceof THREE.ShaderMaterial||d instanceof THREE.MeshPhongMaterial||d.envMap)&&null!==ka.cameraPosition&&(wa.setFromMatrixPosition(a.matrixWorld),m.uniform3f(ka.cameraPosition,
wa.x,wa.y,wa.z)),(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshBasicMaterial||d instanceof THREE.ShaderMaterial||d.skinning)&&null!==ka.viewMatrix&&m.uniformMatrix4fv(ka.viewMatrix,!1,a.matrixWorldInverse.elements);if(d.skinning)if(e.bindMatrix&&null!==ka.bindMatrix&&m.uniformMatrix4fv(ka.bindMatrix,!1,e.bindMatrix.elements),e.bindMatrixInverse&&null!==ka.bindMatrixInverse&&m.uniformMatrix4fv(ka.bindMatrixInverse,!1,e.bindMatrixInverse.elements),
Nb&&e.skeleton&&e.skeleton.useVertexTexture){if(null!==ka.boneTexture){var db=D();m.uniform1i(ka.boneTexture,db);B.setTexture(e.skeleton.boneTexture,db)}null!==ka.boneTextureWidth&&m.uniform1i(ka.boneTextureWidth,e.skeleton.boneTextureWidth);null!==ka.boneTextureHeight&&m.uniform1i(ka.boneTextureHeight,e.skeleton.boneTextureHeight)}else e.skeleton&&e.skeleton.boneMatrices&&null!==ka.boneGlobalMatrices&&m.uniformMatrix4fv(ka.boneGlobalMatrices,!1,e.skeleton.boneMatrices);if(oa){c&&d.fog&&(Q.fogColor.value=
c.color,c instanceof THREE.Fog?(Q.fogNear.value=c.near,Q.fogFar.value=c.far):c instanceof THREE.FogExp2&&(Q.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d.lights){if(Ob){var qa=!0,ia,Za,Y,bb=0,cb=0,ib=0,xb,pb,qb,Ca,jb,na=jc,rb=na.directional.colors,La=na.directional.positions,Ma=na.point.colors,kb=na.point.positions,yb=na.point.distances,zb=na.point.decays,Ra=na.spot.colors,Aa=na.spot.positions,eb=na.spot.distances,Ha=na.spot.directions,
la=na.spot.anglesCos,ra=na.spot.exponents,K=na.spot.decays,za=na.hemi.skyColors,Sa=na.hemi.groundColors,Ab=na.hemi.positions,lb=0,Na=0,sa=0,Da=0,Ea=0,Fa=0,Gb=0,Bb=0,mb=0,C=0,Va=0,Ta=0;ia=0;for(Za=b.length;ia<Za;ia++)Y=b[ia],Y.onlyShadow||(xb=Y.color,Ca=Y.intensity,jb=Y.distance,Y instanceof THREE.AmbientLight?Y.visible&&(bb+=xb.r,cb+=xb.g,ib+=xb.b):Y instanceof THREE.DirectionalLight?(Ea+=1,Y.visible&&(pa.setFromMatrixPosition(Y.matrixWorld),wa.setFromMatrixPosition(Y.target.matrixWorld),pa.sub(wa),
pa.normalize(),mb=3*lb,La[mb]=pa.x,La[mb+1]=pa.y,La[mb+2]=pa.z,y(rb,mb,xb,Ca),lb+=1)):Y instanceof THREE.PointLight?(Fa+=1,Y.visible&&(C=3*Na,y(Ma,C,xb,Ca),wa.setFromMatrixPosition(Y.matrixWorld),kb[C]=wa.x,kb[C+1]=wa.y,kb[C+2]=wa.z,yb[Na]=jb,zb[Na]=0===Y.distance?0:Y.decay,Na+=1)):Y instanceof THREE.SpotLight?(Gb+=1,Y.visible&&(Va=3*sa,y(Ra,Va,xb,Ca),pa.setFromMatrixPosition(Y.matrixWorld),Aa[Va]=pa.x,Aa[Va+1]=pa.y,Aa[Va+2]=pa.z,eb[sa]=jb,wa.setFromMatrixPosition(Y.target.matrixWorld),pa.sub(wa),
pa.normalize(),Ha[Va]=pa.x,Ha[Va+1]=pa.y,Ha[Va+2]=pa.z,la[sa]=Math.cos(Y.angle),ra[sa]=Y.exponent,K[sa]=0===Y.distance?0:Y.decay,sa+=1)):Y instanceof THREE.HemisphereLight&&(Bb+=1,Y.visible&&(pa.setFromMatrixPosition(Y.matrixWorld),pa.normalize(),Ta=3*Da,Ab[Ta]=pa.x,Ab[Ta+1]=pa.y,Ab[Ta+2]=pa.z,pb=Y.color,qb=Y.groundColor,y(za,Ta,pb,Ca),y(Sa,Ta,qb,Ca),Da+=1)));ia=3*lb;for(Za=Math.max(rb.length,3*Ea);ia<Za;ia++)rb[ia]=0;ia=3*Na;for(Za=Math.max(Ma.length,3*Fa);ia<Za;ia++)Ma[ia]=0;ia=3*sa;for(Za=Math.max(Ra.length,
3*Gb);ia<Za;ia++)Ra[ia]=0;ia=3*Da;for(Za=Math.max(za.length,3*Bb);ia<Za;ia++)za[ia]=0;ia=3*Da;for(Za=Math.max(Sa.length,3*Bb);ia<Za;ia++)Sa[ia]=0;na.directional.length=lb;na.point.length=Na;na.spot.length=sa;na.hemi.length=Da;na.ambient[0]=bb;na.ambient[1]=cb;na.ambient[2]=ib;Ob=!1}if(qa){var ea=jc;Q.ambientLightColor.value=ea.ambient;Q.directionalLightColor.value=ea.directional.colors;Q.directionalLightDirection.value=ea.directional.positions;Q.pointLightColor.value=ea.point.colors;Q.pointLightPosition.value=
ea.point.positions;Q.pointLightDistance.value=ea.point.distances;Q.pointLightDecay.value=ea.point.decays;Q.spotLightColor.value=ea.spot.colors;Q.spotLightPosition.value=ea.spot.positions;Q.spotLightDistance.value=ea.spot.distances;Q.spotLightDirection.value=ea.spot.directions;Q.spotLightAngleCos.value=ea.spot.anglesCos;Q.spotLightExponent.value=ea.spot.exponents;Q.spotLightDecay.value=ea.spot.decays;Q.hemisphereLightSkyColor.value=ea.hemi.skyColors;Q.hemisphereLightGroundColor.value=ea.hemi.groundColors;
Q.hemisphereLightDirection.value=ea.hemi.positions;x(Q,!0)}else x(Q,!1)}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){Q.opacity.value=d.opacity;Q.diffuse.value=d.color;Q.map.value=d.map;Q.lightMap.value=d.lightMap;Q.specularMap.value=d.specularMap;Q.alphaMap.value=d.alphaMap;d.bumpMap&&(Q.bumpMap.value=d.bumpMap,Q.bumpScale.value=d.bumpScale);d.normalMap&&(Q.normalMap.value=d.normalMap,Q.normalScale.value.copy(d.normalScale));
var fb;d.map?fb=d.map:d.specularMap?fb=d.specularMap:d.normalMap?fb=d.normalMap:d.bumpMap?fb=d.bumpMap:d.alphaMap&&(fb=d.alphaMap);if(void 0!==fb){var wb=fb.offset,Qb=fb.repeat;Q.offsetRepeat.value.set(wb.x,wb.y,Qb.x,Qb.y)}Q.envMap.value=d.envMap;Q.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?1:-1;Q.reflectivity.value=d.reflectivity;Q.refractionRatio.value=d.refractionRatio}if(d instanceof THREE.LineBasicMaterial)Q.diffuse.value=d.color,Q.opacity.value=d.opacity;else if(d instanceof
THREE.LineDashedMaterial)Q.diffuse.value=d.color,Q.opacity.value=d.opacity,Q.dashSize.value=d.dashSize,Q.totalSize.value=d.dashSize+d.gapSize,Q.scale.value=d.scale;else if(d instanceof THREE.PointCloudMaterial){if(Q.psColor.value=d.color,Q.opacity.value=d.opacity,Q.size.value=d.size,Q.scale.value=U.height/2,Q.map.value=d.map,null!==d.map){var Wb=d.map.offset,Xb=d.map.repeat;Q.offsetRepeat.value.set(Wb.x,Wb.y,Xb.x,Xb.y)}}else d instanceof THREE.MeshPhongMaterial?(Q.shininess.value=d.shininess,Q.emissive.value=
d.emissive,Q.specular.value=d.specular,d.wrapAround&&Q.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshLambertMaterial?(Q.emissive.value=d.emissive,d.wrapAround&&Q.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshDepthMaterial?(Q.mNear.value=a.near,Q.mFar.value=a.far,Q.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(Q.opacity.value=d.opacity);if(e.receiveShadow&&!d._shadowPass&&Q.shadowMatrix)for(var sb=0,Cb=0,$=b.length;Cb<$;Cb++){var xa=b[Cb];xa.castShadow&&(xa instanceof
THREE.SpotLight||xa instanceof THREE.DirectionalLight&&!xa.shadowCascade)&&(Q.shadowMap.value[sb]=xa.shadowMap,Q.shadowMapSize.value[sb]=xa.shadowMapSize,Q.shadowMatrix.value[sb]=xa.shadowMatrix,Q.shadowDarkness.value[sb]=xa.shadowDarkness,Q.shadowBias.value[sb]=xa.shadowBias,sb++)}for(var Hb=d.uniformsList,Oa,$a,Ga,nb=0,fc=Hb.length;nb<fc;nb++){var T=Hb[nb][0];if(!1!==T.needsUpdate){var Db=T.type,S=T.value,aa=Hb[nb][1];switch(Db){case "1i":m.uniform1i(aa,S);break;case "1f":m.uniform1f(aa,S);break;
case "2f":m.uniform2f(aa,S[0],S[1]);break;case "3f":m.uniform3f(aa,S[0],S[1],S[2]);break;case "4f":m.uniform4f(aa,S[0],S[1],S[2],S[3]);break;case "1iv":m.uniform1iv(aa,S);break;case "3iv":m.uniform3iv(aa,S);break;case "1fv":m.uniform1fv(aa,S);break;case "2fv":m.uniform2fv(aa,S);break;case "3fv":m.uniform3fv(aa,S);break;case "4fv":m.uniform4fv(aa,S);break;case "Matrix3fv":m.uniformMatrix3fv(aa,!1,S);break;case "Matrix4fv":m.uniformMatrix4fv(aa,!1,S);break;case "i":m.uniform1i(aa,S);break;case "f":m.uniform1f(aa,
S);break;case "v2":m.uniform2f(aa,S.x,S.y);break;case "v3":m.uniform3f(aa,S.x,S.y,S.z);break;case "v4":m.uniform4f(aa,S.x,S.y,S.z,S.w);break;case "c":m.uniform3f(aa,S.r,S.g,S.b);break;case "iv1":m.uniform1iv(aa,S);break;case "iv":m.uniform3iv(aa,S);break;case "fv1":m.uniform1fv(aa,S);break;case "fv":m.uniform3fv(aa,S);break;case "v2v":void 0===T._array&&(T._array=new Float32Array(2*S.length));for(var Z=0,Ba=S.length;Z<Ba;Z++)Ga=2*Z,T._array[Ga]=S[Z].x,T._array[Ga+1]=S[Z].y;m.uniform2fv(aa,T._array);
break;case "v3v":void 0===T._array&&(T._array=new Float32Array(3*S.length));Z=0;for(Ba=S.length;Z<Ba;Z++)Ga=3*Z,T._array[Ga]=S[Z].x,T._array[Ga+1]=S[Z].y,T._array[Ga+2]=S[Z].z;m.uniform3fv(aa,T._array);break;case "v4v":void 0===T._array&&(T._array=new Float32Array(4*S.length));Z=0;for(Ba=S.length;Z<Ba;Z++)Ga=4*Z,T._array[Ga]=S[Z].x,T._array[Ga+1]=S[Z].y,T._array[Ga+2]=S[Z].z,T._array[Ga+3]=S[Z].w;m.uniform4fv(aa,T._array);break;case "m3":m.uniformMatrix3fv(aa,!1,S.elements);break;case "m3v":void 0===
T._array&&(T._array=new Float32Array(9*S.length));Z=0;for(Ba=S.length;Z<Ba;Z++)S[Z].flattenToArrayOffset(T._array,9*Z);m.uniformMatrix3fv(aa,!1,T._array);break;case "m4":m.uniformMatrix4fv(aa,!1,S.elements);break;case "m4v":void 0===T._array&&(T._array=new Float32Array(16*S.length));Z=0;for(Ba=S.length;Z<Ba;Z++)S[Z].flattenToArrayOffset(T._array,16*Z);m.uniformMatrix4fv(aa,!1,T._array);break;case "t":Oa=S;$a=D();m.uniform1i(aa,$a);if(!Oa)continue;if(Oa instanceof THREE.CubeTexture||Oa.image instanceof
Array&&6===Oa.image.length){var X=Oa,Eb=$a;if(6===X.image.length)if(X.needsUpdate){X.image.__webglTextureCube||(X.addEventListener("dispose",Pb),X.image.__webglTextureCube=m.createTexture(),B.info.memory.textures++);m.activeTexture(m.TEXTURE0+Eb);m.bindTexture(m.TEXTURE_CUBE_MAP,X.image.__webglTextureCube);m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,X.flipY);for(var Rb=X instanceof THREE.CompressedTexture,Ib=X.image[0]instanceof THREE.DataTexture,gb=[],ya=0;6>ya;ya++)gb[ya]=!B.autoScaleCubemaps||Rb||Ib?Ib?
X.image[ya].image:X.image[ya]:E(X.image[ya],qc);var Yb=gb[0],Zb=THREE.Math.isPowerOfTwo(Yb.width)&&THREE.Math.isPowerOfTwo(Yb.height),Wa=I(X.format),tb=I(X.type);A(m.TEXTURE_CUBE_MAP,X,Zb);for(ya=0;6>ya;ya++)if(Rb)for(var hb,$b=gb[ya].mipmaps,Fb=0,Sb=$b.length;Fb<Sb;Fb++)hb=$b[Fb],X.format!==THREE.RGBAFormat&&X.format!==THREE.RGBFormat?-1<kc().indexOf(Wa)?m.compressedTexImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+ya,Fb,Wa,hb.width,hb.height,0,hb.data):THREE.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()"):
m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+ya,Fb,Wa,hb.width,hb.height,0,Wa,tb,hb.data);else Ib?m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+ya,0,Wa,gb[ya].width,gb[ya].height,0,Wa,tb,gb[ya].data):m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+ya,0,Wa,Wa,tb,gb[ya]);X.generateMipmaps&&Zb&&m.generateMipmap(m.TEXTURE_CUBE_MAP);X.needsUpdate=!1;if(X.onUpdate)X.onUpdate()}else m.activeTexture(m.TEXTURE0+Eb),m.bindTexture(m.TEXTURE_CUBE_MAP,X.image.__webglTextureCube)}else if(Oa instanceof THREE.WebGLRenderTargetCube){var Jb=
Oa;m.activeTexture(m.TEXTURE0+$a);m.bindTexture(m.TEXTURE_CUBE_MAP,Jb.__webglTexture)}else B.setTexture(Oa,$a);break;case "tv":void 0===T._array&&(T._array=[]);Z=0;for(Ba=T.value.length;Z<Ba;Z++)T._array[Z]=D();m.uniform1iv(aa,T._array);Z=0;for(Ba=T.value.length;Z<Ba;Z++)Oa=T.value[Z],$a=T._array[Z],Oa&&B.setTexture(Oa,$a);break;default:THREE.warn("THREE.WebGLRenderer: Unknown uniform type: "+Db)}}}}m.uniformMatrix4fv(ka.modelViewMatrix,!1,e._modelViewMatrix.elements);ka.normalMatrix&&m.uniformMatrix3fv(ka.normalMatrix,
!1,e._normalMatrix.elements);null!==ka.modelMatrix&&m.uniformMatrix4fv(ka.modelMatrix,!1,e.matrixWorld.elements);return Ua}function x(a,b){a.ambientLightColor.needsUpdate=b;a.directionalLightColor.needsUpdate=b;a.directionalLightDirection.needsUpdate=b;a.pointLightColor.needsUpdate=b;a.pointLightPosition.needsUpdate=b;a.pointLightDistance.needsUpdate=b;a.pointLightDecay.needsUpdate=b;a.spotLightColor.needsUpdate=b;a.spotLightPosition.needsUpdate=b;a.spotLightDistance.needsUpdate=b;a.spotLightDirection.needsUpdate=
b;a.spotLightAngleCos.needsUpdate=b;a.spotLightExponent.needsUpdate=b;a.spotLightDecay.needsUpdate=b;a.hemisphereLightSkyColor.needsUpdate=b;a.hemisphereLightGroundColor.needsUpdate=b;a.hemisphereLightDirection.needsUpdate=b}function D(){var a=Mb;a>=Wb&&THREE.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+Wb);Mb+=1;return a}function w(a,b){a._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,a.matrixWorld);a._normalMatrix.getNormalMatrix(a._modelViewMatrix)}
function y(a,b,c,d){a[b]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function A(a,b,c){c?(m.texParameteri(a,m.TEXTURE_WRAP_S,I(b.wrapS)),m.texParameteri(a,m.TEXTURE_WRAP_T,I(b.wrapT)),m.texParameteri(a,m.TEXTURE_MAG_FILTER,I(b.magFilter)),m.texParameteri(a,m.TEXTURE_MIN_FILTER,I(b.minFilter))):(m.texParameteri(a,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE),m.texParameteri(a,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE),b.wrapS===THREE.ClampToEdgeWrapping&&b.wrapT===THREE.ClampToEdgeWrapping||THREE.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( "+
b.sourceFile+" )"),m.texParameteri(a,m.TEXTURE_MAG_FILTER,z(b.magFilter)),m.texParameteri(a,m.TEXTURE_MIN_FILTER,z(b.minFilter)),b.minFilter!==THREE.NearestFilter&&b.minFilter!==THREE.LinearFilter&&THREE.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( "+b.sourceFile+" )"));(c=da.get("EXT_texture_filter_anisotropic"))&&b.type!==THREE.FloatType&&b.type!==THREE.HalfFloatType&&(1<b.anisotropy||b.__currentAnisotropy)&&
(m.texParameterf(a,c.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,B.getMaxAnisotropy())),b.__currentAnisotropy=b.anisotropy)}function E(a,b){if(a.width>b||a.height>b){var c=b/Math.max(a.width,a.height),d=document.createElement("canvas");d.width=Math.floor(a.width*c);d.height=Math.floor(a.height*c);d.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,d.width,d.height);THREE.warn("THREE.WebGLRenderer: image is too big ("+a.width+"x"+a.height+"). Resized to "+d.width+"x"+d.height,a);return d}return a}
function G(a,b){m.bindRenderbuffer(m.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?(m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_COMPONENT16,b.width,b.height),m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_STENCIL,b.width,b.height),m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_STENCIL_ATTACHMENT,m.RENDERBUFFER,a)):m.renderbufferStorage(m.RENDERBUFFER,m.RGBA4,b.width,b.height)}function F(a){a instanceof
THREE.WebGLRenderTargetCube?(m.bindTexture(m.TEXTURE_CUBE_MAP,a.__webglTexture),m.generateMipmap(m.TEXTURE_CUBE_MAP),m.bindTexture(m.TEXTURE_CUBE_MAP,null)):(m.bindTexture(m.TEXTURE_2D,a.__webglTexture),m.generateMipmap(m.TEXTURE_2D),m.bindTexture(m.TEXTURE_2D,null))}function z(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?m.NEAREST:m.LINEAR}function I(a){var b;if(a===THREE.RepeatWrapping)return m.REPEAT;if(a===THREE.ClampToEdgeWrapping)return m.CLAMP_TO_EDGE;
if(a===THREE.MirroredRepeatWrapping)return m.MIRRORED_REPEAT;if(a===THREE.NearestFilter)return m.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return m.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return m.NEAREST_MIPMAP_LINEAR;if(a===THREE.LinearFilter)return m.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return m.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return m.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return m.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return m.UNSIGNED_SHORT_4_4_4_4;
if(a===THREE.UnsignedShort5551Type)return m.UNSIGNED_SHORT_5_5_5_1;if(a===THREE.UnsignedShort565Type)return m.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return m.BYTE;if(a===THREE.ShortType)return m.SHORT;if(a===THREE.UnsignedShortType)return m.UNSIGNED_SHORT;if(a===THREE.IntType)return m.INT;if(a===THREE.UnsignedIntType)return m.UNSIGNED_INT;if(a===THREE.FloatType)return m.FLOAT;b=da.get("OES_texture_half_float");if(null!==b&&a===THREE.HalfFloatType)return b.HALF_FLOAT_OES;if(a===THREE.AlphaFormat)return m.ALPHA;
if(a===THREE.RGBFormat)return m.RGB;if(a===THREE.RGBAFormat)return m.RGBA;if(a===THREE.LuminanceFormat)return m.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return m.LUMINANCE_ALPHA;if(a===THREE.AddEquation)return m.FUNC_ADD;if(a===THREE.SubtractEquation)return m.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return m.FUNC_REVERSE_SUBTRACT;if(a===THREE.ZeroFactor)return m.ZERO;if(a===THREE.OneFactor)return m.ONE;if(a===THREE.SrcColorFactor)return m.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return m.ONE_MINUS_SRC_COLOR;
if(a===THREE.SrcAlphaFactor)return m.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return m.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return m.DST_ALPHA;if(a===THREE.OneMinusDstAlphaFactor)return m.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return m.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return m.ONE_MINUS_DST_COLOR;if(a===THREE.SrcAlphaSaturateFactor)return m.SRC_ALPHA_SATURATE;b=da.get("WEBGL_compressed_texture_s3tc");if(null!==b){if(a===THREE.RGB_S3TC_DXT1_Format)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;
if(a===THREE.RGBA_S3TC_DXT1_Format)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT}b=da.get("WEBGL_compressed_texture_pvrtc");if(null!==b){if(a===THREE.RGB_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===THREE.RGB_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===THREE.RGBA_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
if(a===THREE.RGBA_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}b=da.get("EXT_blend_minmax");if(null!==b){if(a===THREE.MinEquation)return b.MIN_EXT;if(a===THREE.MaxEquation)return b.MAX_EXT}return 0}console.log("THREE.WebGLRenderer",THREE.REVISION);a=a||{};var U=void 0!==a.canvas?a.canvas:document.createElement("canvas"),M=void 0!==a.context?a.context:null,H=1,L=void 0!==a.precision?a.precision:"highp",P=void 0!==a.alpha?a.alpha:!1,N=void 0!==a.depth?a.depth:!0,R=void 0!==a.stencil?
a.stencil:!0,V=void 0!==a.antialias?a.antialias:!1,J=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,oa=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,ja=void 0!==a.logarithmicDepthBuffer?a.logarithmicDepthBuffer:!1,ha=new THREE.Color(0),O=0,ca=[],ba={},qa=[],Ka=[],Qa=[],Xa=[],Ya=[];this.domElement=U;this.context=null;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.gammaFactor=2;this.shadowMapEnabled=this.gammaOutput=this.gammaInput=
!1;this.shadowMapType=THREE.PCFShadowMap;this.shadowMapCullFace=THREE.CullFaceFront;this.shadowMapCascade=this.shadowMapDebug=!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var B=this,Pa=[],ob=null,ab=null,ub=-1,ta="",vb=null,Mb=0,ib=0,bb=0,pb=U.width,qb=U.height,Xb=0,fc=0,cb=new THREE.Frustum,db=new THREE.Matrix4,wa=new THREE.Vector3,pa=new THREE.Vector3,Ob=!0,jc={ambient:[0,
0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[],decays:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[],decays:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},m;try{var Yb={alpha:P,depth:N,stencil:R,antialias:V,premultipliedAlpha:J,preserveDrawingBuffer:oa};m=M||U.getContext("webgl",Yb)||U.getContext("experimental-webgl",Yb);if(null===m){if(null!==U.getContext("webgl"))throw"Error creating WebGL context with your selected attributes.";
throw"Error creating WebGL context.";}U.addEventListener("webglcontextlost",function(a){a.preventDefault();Zb();lc();ba={}},!1)}catch(rc){THREE.error("THREE.WebGLRenderer: "+rc)}var W=new THREE.WebGLState(m,I);void 0===m.getShaderPrecisionFormat&&(m.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}});var da=new THREE.WebGLExtensions(m);da.get("OES_texture_float");da.get("OES_texture_float_linear");da.get("OES_texture_half_float");da.get("OES_texture_half_float_linear");
da.get("OES_standard_derivatives");ja&&da.get("EXT_frag_depth");var rb=function(a,b,c,d){!0===J&&(a*=d,b*=d,c*=d);m.clearColor(a,b,c,d)},lc=function(){m.clearColor(0,0,0,1);m.clearDepth(1);m.clearStencil(0);m.enable(m.DEPTH_TEST);m.depthFunc(m.LEQUAL);m.frontFace(m.CCW);m.cullFace(m.BACK);m.enable(m.CULL_FACE);m.enable(m.BLEND);m.blendEquation(m.FUNC_ADD);m.blendFunc(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA);m.viewport(ib,bb,pb,qb);rb(ha.r,ha.g,ha.b,O)},Zb=function(){vb=ob=null;ta="";ub=-1;Ob=!0;W.reset()};
lc();this.context=m;this.state=W;var Wb=m.getParameter(m.MAX_TEXTURE_IMAGE_UNITS),sc=m.getParameter(m.MAX_VERTEX_TEXTURE_IMAGE_UNITS),tc=m.getParameter(m.MAX_TEXTURE_SIZE),qc=m.getParameter(m.MAX_CUBE_MAP_TEXTURE_SIZE),Vb=0<sc,Nb=Vb&&da.get("OES_texture_float"),uc=m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.HIGH_FLOAT),vc=m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.MEDIUM_FLOAT),wc=m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.HIGH_FLOAT),xc=m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.MEDIUM_FLOAT),
kc=function(){var a;return function(){if(void 0!==a)return a;a=[];if(da.get("WEBGL_compressed_texture_pvrtc")||da.get("WEBGL_compressed_texture_s3tc"))for(var b=m.getParameter(m.COMPRESSED_TEXTURE_FORMATS),c=0;c<b.length;c++)a.push(b[c]);return a}}(),yc=0<uc.precision&&0<wc.precision,mc=0<vc.precision&&0<xc.precision;"highp"!==L||yc||(mc?(L="mediump",THREE.warn("THREE.WebGLRenderer: highp not supported, using mediump.")):(L="lowp",THREE.warn("THREE.WebGLRenderer: highp and mediump not supported, using lowp.")));
"mediump"!==L||mc||(L="lowp",THREE.warn("THREE.WebGLRenderer: mediump not supported, using lowp."));var zc=new THREE.ShadowMapPlugin(this,ca,ba,qa),Ac=new THREE.SpritePlugin(this,Xa),Bc=new THREE.LensFlarePlugin(this,Ya);this.getContext=function(){return m};this.forceContextLoss=function(){da.get("WEBGL_lose_context").loseContext()};this.supportsVertexTextures=function(){return Vb};this.supportsFloatTextures=function(){return da.get("OES_texture_float")};this.supportsHalfFloatTextures=function(){return da.get("OES_texture_half_float")};
this.supportsStandardDerivatives=function(){return da.get("OES_standard_derivatives")};this.supportsCompressedTextureS3TC=function(){return da.get("WEBGL_compressed_texture_s3tc")};this.supportsCompressedTexturePVRTC=function(){return da.get("WEBGL_compressed_texture_pvrtc")};this.supportsBlendMinMax=function(){return da.get("EXT_blend_minmax")};this.getMaxAnisotropy=function(){var a;return function(){if(void 0!==a)return a;var b=da.get("EXT_texture_filter_anisotropic");return a=null!==b?m.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT):
0}}();this.getPrecision=function(){return L};this.getPixelRatio=function(){return H};this.setPixelRatio=function(a){H=a};this.setSize=function(a,b,c){U.width=a*H;U.height=b*H;!1!==c&&(U.style.width=a+"px",U.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){ib=a*H;bb=b*H;pb=c*H;qb=d*H;m.viewport(ib,bb,pb,qb)};this.setScissor=function(a,b,c,d){m.scissor(a*H,b*H,c*H,d*H)};this.enableScissorTest=function(a){a?m.enable(m.SCISSOR_TEST):m.disable(m.SCISSOR_TEST)};this.getClearColor=
function(){return ha};this.setClearColor=function(a,b){ha.set(a);O=void 0!==b?b:1;rb(ha.r,ha.g,ha.b,O)};this.getClearAlpha=function(){return O};this.setClearAlpha=function(a){O=a;rb(ha.r,ha.g,ha.b,O)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=m.COLOR_BUFFER_BIT;if(void 0===b||b)d|=m.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=m.STENCIL_BUFFER_BIT;m.clear(d)};this.clearColor=function(){m.clear(m.COLOR_BUFFER_BIT)};this.clearDepth=function(){m.clear(m.DEPTH_BUFFER_BIT)};this.clearStencil=function(){m.clear(m.STENCIL_BUFFER_BIT)};
this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.resetGLState=Zb;var wb=function(a){a.target.traverse(function(a){a.removeEventListener("remove",wb);if(a instanceof THREE.Mesh||a instanceof THREE.PointCloud||a instanceof THREE.Line)delete ba[a.id];else if(a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback)for(var b=qa,c=b.length-1;0<=c;c--)b[c].object===a&&b.splice(c,1);delete a.__webglInit;delete a._modelViewMatrix;delete a._normalMatrix;delete a.__webglActive})},
jb=function(a){a=a.target;a.removeEventListener("dispose",jb);delete a.__webglInit;if(a instanceof THREE.BufferGeometry){for(var b in a.attributes){var c=a.attributes[b];void 0!==c.buffer&&(m.deleteBuffer(c.buffer),delete c.buffer)}B.info.memory.geometries--}else if(b=Ua[a.id],void 0!==b){for(var c=0,d=b.length;c<d;c++){var e=b[c];if(void 0!==e.numMorphTargets){for(var f=0,g=e.numMorphTargets;f<g;f++)m.deleteBuffer(e.__webglMorphTargetsBuffers[f]);delete e.__webglMorphTargetsBuffers}if(void 0!==e.numMorphNormals){f=
0;for(g=e.numMorphNormals;f<g;f++)m.deleteBuffer(e.__webglMorphNormalsBuffers[f]);delete e.__webglMorphNormalsBuffers}nc(e)}delete Ua[a.id]}else nc(a);ta=""},Pb=function(a){a=a.target;a.removeEventListener("dispose",Pb);a.image&&a.image.__webglTextureCube?(m.deleteTexture(a.image.__webglTextureCube),delete a.image.__webglTextureCube):void 0!==a.__webglInit&&(m.deleteTexture(a.__webglTexture),delete a.__webglTexture,delete a.__webglInit);B.info.memory.textures--},oc=function(a){a=a.target;a.removeEventListener("dispose",
oc);if(a&&void 0!==a.__webglTexture){m.deleteTexture(a.__webglTexture);delete a.__webglTexture;if(a instanceof THREE.WebGLRenderTargetCube)for(var b=0;6>b;b++)m.deleteFramebuffer(a.__webglFramebuffer[b]),m.deleteRenderbuffer(a.__webglRenderbuffer[b]);else m.deleteFramebuffer(a.__webglFramebuffer),m.deleteRenderbuffer(a.__webglRenderbuffer);delete a.__webglFramebuffer;delete a.__webglRenderbuffer}B.info.memory.textures--},ic=function(a){a=a.target;a.removeEventListener("dispose",ic);hc(a)},nc=function(a){for(var b=
"__webglVertexBuffer __webglNormalBuffer __webglTangentBuffer __webglColorBuffer __webglUVBuffer __webglUV2Buffer __webglSkinIndicesBuffer __webglSkinWeightsBuffer __webglFaceBuffer __webglLineBuffer __webglLineDistanceBuffer".split(" "),c=0,d=b.length;c<d;c++){var e=b[c];void 0!==a[e]&&(m.deleteBuffer(a[e]),delete a[e])}if(void 0!==a.__webglCustomAttributesList){for(e in a.__webglCustomAttributesList)m.deleteBuffer(a.__webglCustomAttributesList[e].buffer);delete a.__webglCustomAttributesList}B.info.memory.geometries--},
hc=function(a){var b=a.program.program;if(void 0!==b){a.program=void 0;var c,d,e=!1;a=0;for(c=Pa.length;a<c;a++)if(d=Pa[a],d.program===b){d.usedTimes--;0===d.usedTimes&&(e=!0);break}if(!0===e){e=[];a=0;for(c=Pa.length;a<c;a++)d=Pa[a],d.program!==b&&e.push(d);Pa=e;m.deleteProgram(b);B.info.memory.programs--}}};this.renderBufferImmediate=function(a,b,c){W.initAttributes();a.hasPositions&&!a.__webglVertexBuffer&&(a.__webglVertexBuffer=m.createBuffer());a.hasNormals&&!a.__webglNormalBuffer&&(a.__webglNormalBuffer=
m.createBuffer());a.hasUvs&&!a.__webglUvBuffer&&(a.__webglUvBuffer=m.createBuffer());a.hasColors&&!a.__webglColorBuffer&&(a.__webglColorBuffer=m.createBuffer());a.hasPositions&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglVertexBuffer),m.bufferData(m.ARRAY_BUFFER,a.positionArray,m.DYNAMIC_DRAW),W.enableAttribute(b.attributes.position),m.vertexAttribPointer(b.attributes.position,3,m.FLOAT,!1,0,0));if(a.hasNormals){m.bindBuffer(m.ARRAY_BUFFER,a.__webglNormalBuffer);if(!1===c instanceof THREE.MeshPhongMaterial&&
c.shading===THREE.FlatShading){var d,e,f,g,h,k,n,l,p,q,r,s=3*a.count;for(r=0;r<s;r+=9)q=a.normalArray,d=q[r],e=q[r+1],f=q[r+2],g=q[r+3],k=q[r+4],l=q[r+5],h=q[r+6],n=q[r+7],p=q[r+8],d=(d+g+h)/3,e=(e+k+n)/3,f=(f+l+p)/3,q[r]=d,q[r+1]=e,q[r+2]=f,q[r+3]=d,q[r+4]=e,q[r+5]=f,q[r+6]=d,q[r+7]=e,q[r+8]=f}m.bufferData(m.ARRAY_BUFFER,a.normalArray,m.DYNAMIC_DRAW);W.enableAttribute(b.attributes.normal);m.vertexAttribPointer(b.attributes.normal,3,m.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglUvBuffer),
m.bufferData(m.ARRAY_BUFFER,a.uvArray,m.DYNAMIC_DRAW),W.enableAttribute(b.attributes.uv),m.vertexAttribPointer(b.attributes.uv,2,m.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,a.colorArray,m.DYNAMIC_DRAW),W.enableAttribute(b.attributes.color),m.vertexAttribPointer(b.attributes.color,3,m.FLOAT,!1,0,0));W.disableUnusedAttributes();m.drawArrays(m.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,
b,c,e,f,g){if(!1!==e.visible)if(t(g),a=v(a,b,c,e,g),b=!1,c="direct_"+f.id+"_"+a.id+"_"+(e.wireframe?1:0),c!==ta&&(ta=c,b=!0),b&&W.initAttributes(),g instanceof THREE.Mesh){g=!0===e.wireframe?m.LINES:m.TRIANGLES;var h=f.attributes.index;if(h){var k,n;h.array instanceof Uint32Array&&da.get("OES_element_index_uint")?(k=m.UNSIGNED_INT,n=4):(k=m.UNSIGNED_SHORT,n=2);c=f.offsets;if(0===c.length)b&&(d(e,a,f,0),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,h.buffer)),m.drawElements(g,h.array.length,k,0),B.info.render.calls++,
B.info.render.vertices+=h.array.length,B.info.render.faces+=h.array.length/3;else{b=!0;for(var l=0,p=c.length;l<p;l++){var q=c[l].index;b&&(d(e,a,f,q),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,h.buffer));m.drawElements(g,c[l].count,k,c[l].start*n);B.info.render.calls++;B.info.render.vertices+=c[l].count;B.info.render.faces+=c[l].count/3}}}else b&&d(e,a,f,0),e=f.attributes.position,m.drawArrays(g,0,e.array.length/e.itemSize),B.info.render.calls++,B.info.render.vertices+=e.array.length/e.itemSize,B.info.render.faces+=
e.array.length/(3*e.itemSize)}else if(g instanceof THREE.PointCloud)if(g=m.POINTS,h=f.attributes.index)if(h.array instanceof Uint32Array&&da.get("OES_element_index_uint")?(k=m.UNSIGNED_INT,n=4):(k=m.UNSIGNED_SHORT,n=2),c=f.offsets,0===c.length)b&&(d(e,a,f,0),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,h.buffer)),m.drawElements(g,h.array.length,k,0),B.info.render.calls++,B.info.render.points+=h.array.length;else for(1<c.length&&(b=!0),l=0,p=c.length;l<p;l++)q=c[l].index,b&&(d(e,a,f,q),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,
h.buffer)),m.drawElements(g,c[l].count,k,c[l].start*n),B.info.render.calls++,B.info.render.points+=c[l].count;else if(b&&d(e,a,f,0),e=f.attributes.position,c=f.offsets,0===c.length)m.drawArrays(g,0,e.array.length/3),B.info.render.calls++,B.info.render.points+=e.array.length/3;else for(l=0,p=c.length;l<p;l++)m.drawArrays(g,c[l].index,c[l].count),B.info.render.calls++,B.info.render.points+=c[l].count;else if(g instanceof THREE.Line)if(g=g.mode===THREE.LineStrip?m.LINE_STRIP:m.LINES,W.setLineWidth(e.linewidth*
H),h=f.attributes.index)if(h.array instanceof Uint32Array?(k=m.UNSIGNED_INT,n=4):(k=m.UNSIGNED_SHORT,n=2),c=f.offsets,0===c.length)b&&(d(e,a,f,0),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,h.buffer)),m.drawElements(g,h.array.length,k,0),B.info.render.calls++,B.info.render.vertices+=h.array.length;else for(1<c.length&&(b=!0),l=0,p=c.length;l<p;l++)q=c[l].index,b&&(d(e,a,f,q),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,h.buffer)),m.drawElements(g,c[l].count,k,c[l].start*n),B.info.render.calls++,B.info.render.vertices+=
c[l].count;else if(b&&d(e,a,f,0),e=f.attributes.position,c=f.offsets,0===c.length)m.drawArrays(g,0,e.array.length/3),B.info.render.calls++,B.info.render.vertices+=e.array.length/3;else for(l=0,p=c.length;l<p;l++)m.drawArrays(g,c[l].index,c[l].count),B.info.render.calls++,B.info.render.vertices+=c[l].count};this.renderBuffer=function(a,b,c,d,e,f){if(!1!==d.visible){t(f);c=v(a,b,c,d,f);b=c.attributes;a=!1;c=e.id+"_"+c.id+"_"+(d.wireframe?1:0);c!==ta&&(ta=c,a=!0);a&&W.initAttributes();if(!d.morphTargets&&
0<=b.position)a&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglVertexBuffer),W.enableAttribute(b.position),m.vertexAttribPointer(b.position,3,m.FLOAT,!1,0,0));else if(f.morphTargetBase){c=d.program.attributes;-1!==f.morphTargetBase&&0<=c.position?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[f.morphTargetBase]),W.enableAttribute(c.position),m.vertexAttribPointer(c.position,3,m.FLOAT,!1,0,0)):0<=c.position&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglVertexBuffer),W.enableAttribute(c.position),m.vertexAttribPointer(c.position,
3,m.FLOAT,!1,0,0));if(f.morphTargetForcedOrder.length)for(var h=0,k=f.morphTargetForcedOrder,n=f.morphTargetInfluences,l;h<d.numSupportedMorphTargets&&h<k.length;)l=c["morphTarget"+h],0<=l&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[k[h]]),W.enableAttribute(l),m.vertexAttribPointer(l,3,m.FLOAT,!1,0,0)),l=c["morphNormal"+h],0<=l&&d.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[k[h]]),W.enableAttribute(l),m.vertexAttribPointer(l,3,m.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[h]=
n[k[h]],h++;else{k=[];n=f.morphTargetInfluences;h=f.geometry.morphTargets;n.length>h.length&&(console.warn("THREE.WebGLRenderer: Influences array is bigger than morphTargets array."),n.length=h.length);h=0;for(l=n.length;h<l;h++)k.push([n[h],h]);k.length>d.numSupportedMorphTargets?(k.sort(g),k.length=d.numSupportedMorphTargets):k.length>d.numSupportedMorphNormals?k.sort(g):0===k.length&&k.push([0,0]);for(var h=0,p=d.numSupportedMorphTargets;h<p;h++)if(k[h]){var q=k[h][1];l=c["morphTarget"+h];0<=l&&
(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[q]),W.enableAttribute(l),m.vertexAttribPointer(l,3,m.FLOAT,!1,0,0));l=c["morphNormal"+h];0<=l&&d.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[q]),W.enableAttribute(l),m.vertexAttribPointer(l,3,m.FLOAT,!1,0,0));f.__webglMorphTargetInfluences[h]=n[q]}else f.__webglMorphTargetInfluences[h]=0}null!==d.program.uniforms.morphTargetInfluences&&m.uniform1fv(d.program.uniforms.morphTargetInfluences,f.__webglMorphTargetInfluences)}if(a){if(e.__webglCustomAttributesList)for(c=
0,n=e.__webglCustomAttributesList.length;c<n;c++)k=e.__webglCustomAttributesList[c],0<=b[k.buffer.belongsToAttribute]&&(m.bindBuffer(m.ARRAY_BUFFER,k.buffer),W.enableAttribute(b[k.buffer.belongsToAttribute]),m.vertexAttribPointer(b[k.buffer.belongsToAttribute],k.size,m.FLOAT,!1,0,0));0<=b.color&&(0<f.geometry.colors.length||0<f.geometry.faces.length?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglColorBuffer),W.enableAttribute(b.color),m.vertexAttribPointer(b.color,3,m.FLOAT,!1,0,0)):void 0!==d.defaultAttributeValues&&
m.vertexAttrib3fv(b.color,d.defaultAttributeValues.color));0<=b.normal&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglNormalBuffer),W.enableAttribute(b.normal),m.vertexAttribPointer(b.normal,3,m.FLOAT,!1,0,0));0<=b.tangent&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglTangentBuffer),W.enableAttribute(b.tangent),m.vertexAttribPointer(b.tangent,4,m.FLOAT,!1,0,0));0<=b.uv&&(f.geometry.faceVertexUvs[0]?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglUVBuffer),W.enableAttribute(b.uv),m.vertexAttribPointer(b.uv,2,m.FLOAT,!1,0,
0)):void 0!==d.defaultAttributeValues&&m.vertexAttrib2fv(b.uv,d.defaultAttributeValues.uv));0<=b.uv2&&(f.geometry.faceVertexUvs[1]?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglUV2Buffer),W.enableAttribute(b.uv2),m.vertexAttribPointer(b.uv2,2,m.FLOAT,!1,0,0)):void 0!==d.defaultAttributeValues&&m.vertexAttrib2fv(b.uv2,d.defaultAttributeValues.uv2));d.skinning&&0<=b.skinIndex&&0<=b.skinWeight&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglSkinIndicesBuffer),W.enableAttribute(b.skinIndex),m.vertexAttribPointer(b.skinIndex,
4,m.FLOAT,!1,0,0),m.bindBuffer(m.ARRAY_BUFFER,e.__webglSkinWeightsBuffer),W.enableAttribute(b.skinWeight),m.vertexAttribPointer(b.skinWeight,4,m.FLOAT,!1,0,0));0<=b.lineDistance&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglLineDistanceBuffer),W.enableAttribute(b.lineDistance),m.vertexAttribPointer(b.lineDistance,1,m.FLOAT,!1,0,0))}W.disableUnusedAttributes();f instanceof THREE.Mesh?(f=e.__typeArray===Uint32Array?m.UNSIGNED_INT:m.UNSIGNED_SHORT,d.wireframe?(W.setLineWidth(d.wireframeLinewidth*H),a&&m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,
e.__webglLineBuffer),m.drawElements(m.LINES,e.__webglLineCount,f,0)):(a&&m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,e.__webglFaceBuffer),m.drawElements(m.TRIANGLES,e.__webglFaceCount,f,0)),B.info.render.calls++,B.info.render.vertices+=e.__webglFaceCount,B.info.render.faces+=e.__webglFaceCount/3):f instanceof THREE.Line?(f=f.mode===THREE.LineStrip?m.LINE_STRIP:m.LINES,W.setLineWidth(d.linewidth*H),m.drawArrays(f,0,e.__webglLineCount),B.info.render.calls++):f instanceof THREE.PointCloud&&(m.drawArrays(m.POINTS,
0,e.__webglParticleCount),B.info.render.calls++,B.info.render.points+=e.__webglParticleCount)}};this.render=function(a,b,c,d){if(!1===b instanceof THREE.Camera)THREE.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var g=a.fog;ta="";ub=-1;vb=null;Ob=!0;!0===a.autoUpdate&&a.updateMatrixWorld();void 0===b.parent&&b.updateMatrixWorld();a.traverse(function(a){a instanceof THREE.SkinnedMesh&&a.skeleton.update()});b.matrixWorldInverse.getInverse(b.matrixWorld);db.multiplyMatrices(b.projectionMatrix,
b.matrixWorldInverse);cb.setFromMatrix(db);ca.length=0;Ka.length=0;Qa.length=0;Xa.length=0;Ya.length=0;h(a);!0===B.sortObjects&&(Ka.sort(e),Qa.sort(f));zc.render(a,b);B.info.render.calls=0;B.info.render.vertices=0;B.info.render.faces=0;B.info.render.points=0;this.setRenderTarget(c);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);d=0;for(var n=qa.length;d<n;d++){var m=qa[d],q=m.object;q.visible&&(w(q,b),p(m))}a.overrideMaterial?(d=a.overrideMaterial,u(d),
k(Ka,b,ca,g,d),k(Qa,b,ca,g,d),l(qa,"",b,ca,g,d)):(W.setBlending(THREE.NoBlending),k(Ka,b,ca,g,null),l(qa,"opaque",b,ca,g,null),k(Qa,b,ca,g,null),l(qa,"transparent",b,ca,g,null));Ac.render(a,b);Bc.render(a,b,Xb,fc);c&&c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter&&F(c);W.setDepthTest(!0);W.setDepthWrite(!0);W.setColorWrite(!0)}};this.renderImmediateObject=function(a,b,c,d,e){var f=v(a,b,c,d,e);ta="";B.setMaterialFaces(d);e.immediateRenderCallback?e.immediateRenderCallback(f,
m,cb):e.render(function(a){B.renderBufferImmediate(a,f,d)})};var Ua={},Qb=0,pc={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointCloudMaterial:"particle_basic"};this.setFaceCulling=function(a,b){a===THREE.CullFaceNone?m.disable(m.CULL_FACE):(b===THREE.FrontFaceDirectionCW?m.frontFace(m.CW):m.frontFace(m.CCW),a===THREE.CullFaceBack?m.cullFace(m.BACK):a===
THREE.CullFaceFront?m.cullFace(m.FRONT):m.cullFace(m.FRONT_AND_BACK),m.enable(m.CULL_FACE))};this.setMaterialFaces=function(a){W.setDoubleSided(a.side===THREE.DoubleSide);W.setFlipSided(a.side===THREE.BackSide)};this.uploadTexture=function(a){void 0===a.__webglInit&&(a.__webglInit=!0,a.addEventListener("dispose",Pb),a.__webglTexture=m.createTexture(),B.info.memory.textures++);m.bindTexture(m.TEXTURE_2D,a.__webglTexture);m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,a.flipY);m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
a.premultiplyAlpha);m.pixelStorei(m.UNPACK_ALIGNMENT,a.unpackAlignment);a.image=E(a.image,tc);var b=a.image,c=THREE.Math.isPowerOfTwo(b.width)&&THREE.Math.isPowerOfTwo(b.height),d=I(a.format),e=I(a.type);A(m.TEXTURE_2D,a,c);var f=a.mipmaps;if(a instanceof THREE.DataTexture)if(0<f.length&&c){for(var g=0,h=f.length;g<h;g++)b=f[g],m.texImage2D(m.TEXTURE_2D,g,d,b.width,b.height,0,d,e,b.data);a.generateMipmaps=!1}else m.texImage2D(m.TEXTURE_2D,0,d,b.width,b.height,0,d,e,b.data);else if(a instanceof THREE.CompressedTexture)for(g=
0,h=f.length;g<h;g++)b=f[g],a.format!==THREE.RGBAFormat&&a.format!==THREE.RGBFormat?-1<kc().indexOf(d)?m.compressedTexImage2D(m.TEXTURE_2D,g,d,b.width,b.height,0,b.data):THREE.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):m.texImage2D(m.TEXTURE_2D,g,d,b.width,b.height,0,d,e,b.data);else if(0<f.length&&c){g=0;for(h=f.length;g<h;g++)b=f[g],m.texImage2D(m.TEXTURE_2D,g,d,d,e,b);a.generateMipmaps=!1}else m.texImage2D(m.TEXTURE_2D,0,d,d,e,a.image);
a.generateMipmaps&&c&&m.generateMipmap(m.TEXTURE_2D);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()};this.setTexture=function(a,b){m.activeTexture(m.TEXTURE0+b);a.needsUpdate?B.uploadTexture(a):m.bindTexture(m.TEXTURE_2D,a.__webglTexture)};this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&void 0===a.__webglFramebuffer){void 0===a.depthBuffer&&(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=!0);a.addEventListener("dispose",oc);a.__webglTexture=m.createTexture();
B.info.memory.textures++;var c=THREE.Math.isPowerOfTwo(a.width)&&THREE.Math.isPowerOfTwo(a.height),d=I(a.format),e=I(a.type);if(b){a.__webglFramebuffer=[];a.__webglRenderbuffer=[];m.bindTexture(m.TEXTURE_CUBE_MAP,a.__webglTexture);A(m.TEXTURE_CUBE_MAP,a,c);for(var f=0;6>f;f++){a.__webglFramebuffer[f]=m.createFramebuffer();a.__webglRenderbuffer[f]=m.createRenderbuffer();m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,d,a.width,a.height,0,d,e,null);var g=a,h=m.TEXTURE_CUBE_MAP_POSITIVE_X+f;m.bindFramebuffer(m.FRAMEBUFFER,
a.__webglFramebuffer[f]);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,h,g.__webglTexture,0);G(a.__webglRenderbuffer[f],a)}c&&m.generateMipmap(m.TEXTURE_CUBE_MAP)}else a.__webglFramebuffer=m.createFramebuffer(),a.__webglRenderbuffer=a.shareDepthFrom?a.shareDepthFrom.__webglRenderbuffer:m.createRenderbuffer(),m.bindTexture(m.TEXTURE_2D,a.__webglTexture),A(m.TEXTURE_2D,a,c),m.texImage2D(m.TEXTURE_2D,0,d,a.width,a.height,0,d,e,null),d=m.TEXTURE_2D,m.bindFramebuffer(m.FRAMEBUFFER,a.__webglFramebuffer),
m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,d,a.__webglTexture,0),a.shareDepthFrom?a.depthBuffer&&!a.stencilBuffer?m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,a.__webglRenderbuffer):a.depthBuffer&&a.stencilBuffer&&m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_STENCIL_ATTACHMENT,m.RENDERBUFFER,a.__webglRenderbuffer):G(a.__webglRenderbuffer,a),c&&m.generateMipmap(m.TEXTURE_2D);b?m.bindTexture(m.TEXTURE_CUBE_MAP,null):m.bindTexture(m.TEXTURE_2D,null);m.bindRenderbuffer(m.RENDERBUFFER,
null);m.bindFramebuffer(m.FRAMEBUFFER,null)}a?(b=b?a.__webglFramebuffer[a.activeCubeFace]:a.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=pb,a=qb,d=ib,e=bb);b!==ab&&(m.bindFramebuffer(m.FRAMEBUFFER,b),m.viewport(d,e,c,a),ab=b);Xb=c;fc=a};this.readRenderTargetPixels=function(a,b,c,d,e,f){if(!(a instanceof THREE.WebGLRenderTarget))console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");else if(a.__webglFramebuffer)if(a.format!==THREE.RGBAFormat)console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA format. readPixels can read only RGBA format.");
else{var g=!1;a.__webglFramebuffer!==ab&&(m.bindFramebuffer(m.FRAMEBUFFER,a.__webglFramebuffer),g=!0);m.checkFramebufferStatus(m.FRAMEBUFFER)===m.FRAMEBUFFER_COMPLETE?m.readPixels(b,c,d,e,m.RGBA,m.UNSIGNED_BYTE,f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");g&&m.bindFramebuffer(m.FRAMEBUFFER,ab)}};this.initMaterial=function(){THREE.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};this.addPrePlugin=function(){THREE.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};
this.addPostPlugin=function(){THREE.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};this.updateShadowMap=function(){THREE.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")}};
THREE.WebGLRenderTarget=function(a,b,c){this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.format=void 0!==c.format?c.format:
THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0;this.shareDepthFrom=void 0!==c.shareDepthFrom?c.shareDepthFrom:null};
THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,setSize:function(a,b){this.width=a;this.height=b},clone:function(){var a=new THREE.WebGLRenderTarget(this.width,this.height);a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.format=this.format;a.type=this.type;a.depthBuffer=this.depthBuffer;a.stencilBuffer=this.stencilBuffer;a.generateMipmaps=this.generateMipmaps;
a.shareDepthFrom=this.shareDepthFrom;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube.prototype.constructor=THREE.WebGLRenderTargetCube;
THREE.WebGLExtensions=function(a){var b={};this.get=function(c){if(void 0!==b[c])return b[c];var d;switch(c){case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:d=a.getExtension(c)}null===d&&THREE.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d}};
THREE.WebGLProgram=function(){var a=0;return function(b,c,d,e){var f=b.context,g=d.defines,h=d.__webglShader.uniforms,k=d.attributes,l=d.__webglShader.vertexShader,p=d.__webglShader.fragmentShader,q=d.index0AttributeName;void 0===q&&!0===e.morphTargets&&(q="position");var n="SHADOWMAP_TYPE_BASIC";e.shadowMapType===THREE.PCFShadowMap?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===THREE.PCFSoftShadowMap&&(n="SHADOWMAP_TYPE_PCF_SOFT");var t="ENVMAP_TYPE_CUBE",r="ENVMAP_MODE_REFLECTION",s="ENVMAP_BLENDING_MULTIPLY";
if(e.envMap){switch(d.envMap.mapping){case THREE.CubeReflectionMapping:case THREE.CubeRefractionMapping:t="ENVMAP_TYPE_CUBE";break;case THREE.EquirectangularReflectionMapping:case THREE.EquirectangularRefractionMapping:t="ENVMAP_TYPE_EQUIREC";break;case THREE.SphericalReflectionMapping:t="ENVMAP_TYPE_SPHERE"}switch(d.envMap.mapping){case THREE.CubeRefractionMapping:case THREE.EquirectangularRefractionMapping:r="ENVMAP_MODE_REFRACTION"}switch(d.combine){case THREE.MultiplyOperation:s="ENVMAP_BLENDING_MULTIPLY";
break;case THREE.MixOperation:s="ENVMAP_BLENDING_MIX";break;case THREE.AddOperation:s="ENVMAP_BLENDING_ADD"}}var u=0<b.gammaFactor?b.gammaFactor:1,v,x;v=[];for(var D in g)x=g[D],!1!==x&&(x="#define "+D+" "+x,v.push(x));v=v.join("\n");g=f.createProgram();d instanceof THREE.RawShaderMaterial?b=d="":(d=["precision "+e.precision+" float;","precision "+e.precision+" int;",v,e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",b.gammaInput?"#define GAMMA_INPUT":"",b.gammaOutput?"#define GAMMA_OUTPUT":
"","#define GAMMA_FACTOR "+u,"#define MAX_DIR_LIGHTS "+e.maxDirLights,"#define MAX_POINT_LIGHTS "+e.maxPointLights,"#define MAX_SPOT_LIGHTS "+e.maxSpotLights,"#define MAX_HEMI_LIGHTS "+e.maxHemiLights,"#define MAX_SHADOWS "+e.maxShadows,"#define MAX_BONES "+e.maxBones,e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+r:"",e.lightMap?"#define USE_LIGHTMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":
"",e.alphaMap?"#define USE_ALPHAMAP":"",e.vertexColors?"#define USE_COLOR":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals?"#define USE_MORPHNORMALS":"",e.wrapAround?"#define WRAP_AROUND":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+n:"",e.shadowMapDebug?
"#define SHADOWMAP_DEBUG":"",e.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\n\tattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\n\tattribute vec3 morphTarget0;\n\tattribute vec3 morphTarget1;\n\tattribute vec3 morphTarget2;\n\tattribute vec3 morphTarget3;\n\t#ifdef USE_MORPHNORMALS\n\t\tattribute vec3 morphNormal0;\n\t\tattribute vec3 morphNormal1;\n\t\tattribute vec3 morphNormal2;\n\t\tattribute vec3 morphNormal3;\n\t#else\n\t\tattribute vec3 morphTarget4;\n\t\tattribute vec3 morphTarget5;\n\t\tattribute vec3 morphTarget6;\n\t\tattribute vec3 morphTarget7;\n\t#endif\n#endif\n#ifdef USE_SKINNING\n\tattribute vec4 skinIndex;\n\tattribute vec4 skinWeight;\n#endif\n"].join("\n"),
b=["precision "+e.precision+" float;","precision "+e.precision+" int;",e.bumpMap||e.normalMap||e.flatShading?"#extension GL_OES_standard_derivatives : enable":"",v,"#define MAX_DIR_LIGHTS "+e.maxDirLights,"#define MAX_POINT_LIGHTS "+e.maxPointLights,"#define MAX_SPOT_LIGHTS "+e.maxSpotLights,"#define MAX_HEMI_LIGHTS "+e.maxHemiLights,"#define MAX_SHADOWS "+e.maxShadows,e.alphaTest?"#define ALPHATEST "+e.alphaTest:"",b.gammaInput?"#define GAMMA_INPUT":"",b.gammaOutput?"#define GAMMA_OUTPUT":"","#define GAMMA_FACTOR "+
u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+t:"",e.envMap?"#define "+r:"",e.envMap?"#define "+s:"",e.lightMap?"#define USE_LIGHTMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.vertexColors?"#define USE_COLOR":"",e.flatShading?"#define FLAT_SHADED":"",e.metal?"#define METAL":
"",e.wrapAround?"#define WRAP_AROUND":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+n:"",e.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",e.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n"));l=new THREE.WebGLShader(f,f.VERTEX_SHADER,d+l);p=new THREE.WebGLShader(f,f.FRAGMENT_SHADER,
b+p);f.attachShader(g,l);f.attachShader(g,p);void 0!==q&&f.bindAttribLocation(g,0,q);f.linkProgram(g);q=f.getProgramInfoLog(g);!1===f.getProgramParameter(g,f.LINK_STATUS)&&THREE.error("THREE.WebGLProgram: shader error: "+f.getError(),"gl.VALIDATE_STATUS",f.getProgramParameter(g,f.VALIDATE_STATUS),"gl.getPRogramInfoLog",q);""!==q&&THREE.warn("THREE.WebGLProgram: gl.getProgramInfoLog()"+q);f.deleteShader(l);f.deleteShader(p);q="viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences bindMatrix bindMatrixInverse".split(" ");
e.useVertexTexture?(q.push("boneTexture"),q.push("boneTextureWidth"),q.push("boneTextureHeight")):q.push("boneGlobalMatrices");e.logarithmicDepthBuffer&&q.push("logDepthBufFC");for(var w in h)q.push(w);h=q;w={};q=0;for(b=h.length;q<b;q++)n=h[q],w[n]=f.getUniformLocation(g,n);this.uniforms=w;q="position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");for(h=0;h<e.maxMorphTargets;h++)q.push("morphTarget"+h);for(h=0;h<e.maxMorphNormals;h++)q.push("morphNormal"+h);for(var y in k)q.push(y);
e=q;k={};y=0;for(h=e.length;y<h;y++)w=e[y],k[w]=f.getAttribLocation(g,w);this.attributes=k;this.attributesKeys=Object.keys(this.attributes);this.id=a++;this.code=c;this.usedTimes=1;this.program=g;this.vertexShader=l;this.fragmentShader=p;return this}}();
THREE.WebGLShader=function(){var a=function(a){a=a.split("\n");for(var c=0;c<a.length;c++)a[c]=c+1+": "+a[c];return a.join("\n")};return function(b,c,d){c=b.createShader(c);b.shaderSource(c,d);b.compileShader(c);!1===b.getShaderParameter(c,b.COMPILE_STATUS)&&THREE.error("THREE.WebGLShader: Shader couldn't compile.");""!==b.getShaderInfoLog(c)&&THREE.warn("THREE.WebGLShader: gl.getShaderInfoLog()",b.getShaderInfoLog(c),a(d));return c}}();
THREE.WebGLState=function(a,b){var c=new Uint8Array(16),d=new Uint8Array(16),e=null,f=null,g=null,h=null,k=null,l=null,p=null,q=null,n=null,t=null,r=null,s=null,u=null,v=null,x=null,D=null;this.initAttributes=function(){for(var a=0,b=c.length;a<b;a++)c[a]=0};this.enableAttribute=function(b){c[b]=1;0===d[b]&&(a.enableVertexAttribArray(b),d[b]=1)};this.disableUnusedAttributes=function(){for(var b=0,e=d.length;b<e;b++)d[b]!==c[b]&&(a.disableVertexAttribArray(b),d[b]=0)};this.setBlending=function(c,d,
n,q,r,s,t){c!==e&&(c===THREE.NoBlending?a.disable(a.BLEND):c===THREE.AdditiveBlending?(a.enable(a.BLEND),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE)):c===THREE.SubtractiveBlending?(a.enable(a.BLEND),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR)):c===THREE.MultiplyBlending?(a.enable(a.BLEND),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR)):c===THREE.CustomBlending?a.enable(a.BLEND):(a.enable(a.BLEND),a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),
a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)),e=c);if(c===THREE.CustomBlending){r=r||d;s=s||n;t=t||q;if(d!==f||r!==k)a.blendEquationSeparate(b(d),b(r)),f=d,k=r;if(n!==g||q!==h||s!==l||t!==p)a.blendFuncSeparate(b(n),b(q),b(s),b(t)),g=n,h=q,l=s,p=t}else p=l=k=h=g=f=null};this.setDepthTest=function(b){q!==b&&(b?a.enable(a.DEPTH_TEST):a.disable(a.DEPTH_TEST),q=b)};this.setDepthWrite=function(b){n!==b&&(a.depthMask(b),n=b)};this.setColorWrite=function(b){t!==b&&(a.colorMask(b,
b,b,b),t=b)};this.setDoubleSided=function(b){r!==b&&(b?a.disable(a.CULL_FACE):a.enable(a.CULL_FACE),r=b)};this.setFlipSided=function(b){s!==b&&(b?a.frontFace(a.CW):a.frontFace(a.CCW),s=b)};this.setLineWidth=function(b){b!==u&&(a.lineWidth(b),u=b)};this.setPolygonOffset=function(b,c,d){v!==b&&(b?a.enable(a.POLYGON_OFFSET_FILL):a.disable(a.POLYGON_OFFSET_FILL),v=b);!b||x===c&&D===d||(a.polygonOffset(c,d),x=c,D=d)};this.reset=function(){for(var a=0;a<d.length;a++)d[a]=0;s=r=t=n=q=e=null}};
THREE.LensFlarePlugin=function(a,b){var c,d,e,f,g,h,k,l,p,q,n=a.context,t,r,s,u,v,x;this.render=function(D,w,y,A){if(0!==b.length){D=new THREE.Vector3;var E=A/y,G=.5*y,F=.5*A,z=16/A,I=new THREE.Vector2(z*E,z),U=new THREE.Vector3(1,1,0),M=new THREE.Vector2(1,1);if(void 0===s){var z=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),H=new Uint16Array([0,1,2,0,2,3]);t=n.createBuffer();r=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,t);n.bufferData(n.ARRAY_BUFFER,z,n.STATIC_DRAW);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,
r);n.bufferData(n.ELEMENT_ARRAY_BUFFER,H,n.STATIC_DRAW);v=n.createTexture();x=n.createTexture();n.bindTexture(n.TEXTURE_2D,v);n.texImage2D(n.TEXTURE_2D,0,n.RGB,16,16,0,n.RGB,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);n.bindTexture(n.TEXTURE_2D,x);n.texImage2D(n.TEXTURE_2D,0,
n.RGBA,16,16,0,n.RGBA,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);var z=(u=0<n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS))?{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},
H=n.createProgram(),L=n.createShader(n.FRAGMENT_SHADER),P=n.createShader(n.VERTEX_SHADER),N="precision "+a.getPrecision()+" float;\n";n.shaderSource(L,N+z.fragmentShader);n.shaderSource(P,N+z.vertexShader);n.compileShader(L);n.compileShader(P);n.attachShader(H,L);n.attachShader(H,P);n.linkProgram(H);s=H;p=n.getAttribLocation(s,"position");q=n.getAttribLocation(s,"uv");c=n.getUniformLocation(s,"renderType");d=n.getUniformLocation(s,"map");e=n.getUniformLocation(s,"occlusionMap");f=n.getUniformLocation(s,
"opacity");g=n.getUniformLocation(s,"color");h=n.getUniformLocation(s,"scale");k=n.getUniformLocation(s,"rotation");l=n.getUniformLocation(s,"screenPosition")}n.useProgram(s);n.enableVertexAttribArray(p);n.enableVertexAttribArray(q);n.uniform1i(e,0);n.uniform1i(d,1);n.bindBuffer(n.ARRAY_BUFFER,t);n.vertexAttribPointer(p,2,n.FLOAT,!1,16,0);n.vertexAttribPointer(q,2,n.FLOAT,!1,16,8);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r);n.disable(n.CULL_FACE);n.depthMask(!1);H=0;for(L=b.length;H<L;H++)if(z=16/A,I.set(z*
E,z),P=b[H],D.set(P.matrixWorld.elements[12],P.matrixWorld.elements[13],P.matrixWorld.elements[14]),D.applyMatrix4(w.matrixWorldInverse),D.applyProjection(w.projectionMatrix),U.copy(D),M.x=U.x*G+G,M.y=U.y*F+F,u||0<M.x&&M.x<y&&0<M.y&&M.y<A){n.activeTexture(n.TEXTURE1);n.bindTexture(n.TEXTURE_2D,v);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGB,M.x-8,M.y-8,16,16,0);n.uniform1i(c,0);n.uniform2f(h,I.x,I.y);n.uniform3f(l,U.x,U.y,U.z);n.disable(n.BLEND);n.enable(n.DEPTH_TEST);n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,
0);n.activeTexture(n.TEXTURE0);n.bindTexture(n.TEXTURE_2D,x);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGBA,M.x-8,M.y-8,16,16,0);n.uniform1i(c,1);n.disable(n.DEPTH_TEST);n.activeTexture(n.TEXTURE1);n.bindTexture(n.TEXTURE_2D,v);n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0);P.positionScreen.copy(U);P.customUpdateCallback?P.customUpdateCallback(P):P.updateLensFlares();n.uniform1i(c,2);n.enable(n.BLEND);for(var N=0,R=P.lensFlares.length;N<R;N++){var V=P.lensFlares[N];.001<V.opacity&&.001<V.scale&&(U.x=V.x,
U.y=V.y,U.z=V.z,z=V.size*V.scale/A,I.x=z*E,I.y=z,n.uniform3f(l,U.x,U.y,U.z),n.uniform2f(h,I.x,I.y),n.uniform1f(k,V.rotation),n.uniform1f(f,V.opacity),n.uniform3f(g,V.color.r,V.color.g,V.color.b),a.state.setBlending(V.blending,V.blendEquation,V.blendSrc,V.blendDst),a.setTexture(V.texture,1),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0))}}n.enable(n.CULL_FACE);n.enable(n.DEPTH_TEST);n.depthMask(!0);a.resetGLState()}}};
THREE.ShadowMapPlugin=function(a,b,c,d){function e(a,b,d){if(b.visible){var f=c[b.id];if(f&&b.castShadow&&(!1===b.frustumCulled||!0===p.intersectsObject(b)))for(var g=0,h=f.length;g<h;g++){var k=f[g];b._modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,b.matrixWorld);s.push(k)}g=0;for(h=b.children.length;g<h;g++)e(a,b.children[g],d)}}var f=a.context,g,h,k,l,p=new THREE.Frustum,q=new THREE.Matrix4,n=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Vector3,s=[],u=THREE.ShaderLib.depthRGBA,v=THREE.UniformsUtils.clone(u.uniforms);
g=new THREE.ShaderMaterial({uniforms:v,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader});h=new THREE.ShaderMaterial({uniforms:v,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,morphTargets:!0});k=new THREE.ShaderMaterial({uniforms:v,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,skinning:!0});l=new THREE.ShaderMaterial({uniforms:v,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,morphTargets:!0,skinning:!0});g._shadowPass=!0;h._shadowPass=!0;k._shadowPass=
!0;l._shadowPass=!0;this.render=function(c,v){if(!1!==a.shadowMapEnabled){var u,y,A,E,G,F,z,I,U=[];E=0;f.clearColor(1,1,1,1);f.disable(f.BLEND);f.enable(f.CULL_FACE);f.frontFace(f.CCW);a.shadowMapCullFace===THREE.CullFaceFront?f.cullFace(f.FRONT):f.cullFace(f.BACK);a.state.setDepthTest(!0);u=0;for(y=b.length;u<y;u++)if(A=b[u],A.castShadow)if(A instanceof THREE.DirectionalLight&&A.shadowCascade)for(G=0;G<A.shadowCascadeCount;G++){var M;if(A.shadowCascadeArray[G])M=A.shadowCascadeArray[G];else{z=A;
var H=G;M=new THREE.DirectionalLight;M.isVirtual=!0;M.onlyShadow=!0;M.castShadow=!0;M.shadowCameraNear=z.shadowCameraNear;M.shadowCameraFar=z.shadowCameraFar;M.shadowCameraLeft=z.shadowCameraLeft;M.shadowCameraRight=z.shadowCameraRight;M.shadowCameraBottom=z.shadowCameraBottom;M.shadowCameraTop=z.shadowCameraTop;M.shadowCameraVisible=z.shadowCameraVisible;M.shadowDarkness=z.shadowDarkness;M.shadowBias=z.shadowCascadeBias[H];M.shadowMapWidth=z.shadowCascadeWidth[H];M.shadowMapHeight=z.shadowCascadeHeight[H];
M.pointsWorld=[];M.pointsFrustum=[];I=M.pointsWorld;F=M.pointsFrustum;for(var L=0;8>L;L++)I[L]=new THREE.Vector3,F[L]=new THREE.Vector3;I=z.shadowCascadeNearZ[H];z=z.shadowCascadeFarZ[H];F[0].set(-1,-1,I);F[1].set(1,-1,I);F[2].set(-1,1,I);F[3].set(1,1,I);F[4].set(-1,-1,z);F[5].set(1,-1,z);F[6].set(-1,1,z);F[7].set(1,1,z);M.originalCamera=v;F=new THREE.Gyroscope;F.position.copy(A.shadowCascadeOffset);F.add(M);F.add(M.target);v.add(F);A.shadowCascadeArray[G]=M}H=A;I=G;z=H.shadowCascadeArray[I];z.position.copy(H.position);
z.target.position.copy(H.target.position);z.lookAt(z.target);z.shadowCameraVisible=H.shadowCameraVisible;z.shadowDarkness=H.shadowDarkness;z.shadowBias=H.shadowCascadeBias[I];F=H.shadowCascadeNearZ[I];H=H.shadowCascadeFarZ[I];z=z.pointsFrustum;z[0].z=F;z[1].z=F;z[2].z=F;z[3].z=F;z[4].z=H;z[5].z=H;z[6].z=H;z[7].z=H;U[E]=M;E++}else U[E]=A,E++;u=0;for(y=U.length;u<y;u++){A=U[u];A.shadowMap||(G=THREE.LinearFilter,a.shadowMapType===THREE.PCFSoftShadowMap&&(G=THREE.NearestFilter),A.shadowMap=new THREE.WebGLRenderTarget(A.shadowMapWidth,
A.shadowMapHeight,{minFilter:G,magFilter:G,format:THREE.RGBAFormat}),A.shadowMapSize=new THREE.Vector2(A.shadowMapWidth,A.shadowMapHeight),A.shadowMatrix=new THREE.Matrix4);if(!A.shadowCamera){if(A instanceof THREE.SpotLight)A.shadowCamera=new THREE.PerspectiveCamera(A.shadowCameraFov,A.shadowMapWidth/A.shadowMapHeight,A.shadowCameraNear,A.shadowCameraFar);else if(A instanceof THREE.DirectionalLight)A.shadowCamera=new THREE.OrthographicCamera(A.shadowCameraLeft,A.shadowCameraRight,A.shadowCameraTop,
A.shadowCameraBottom,A.shadowCameraNear,A.shadowCameraFar);else{THREE.error("THREE.ShadowMapPlugin: Unsupported light type for shadow",A);continue}c.add(A.shadowCamera);!0===c.autoUpdate&&c.updateMatrixWorld()}A.shadowCameraVisible&&!A.cameraHelper&&(A.cameraHelper=new THREE.CameraHelper(A.shadowCamera),c.add(A.cameraHelper));if(A.isVirtual&&M.originalCamera==v){G=v;E=A.shadowCamera;F=A.pointsFrustum;z=A.pointsWorld;n.set(Infinity,Infinity,Infinity);t.set(-Infinity,-Infinity,-Infinity);for(H=0;8>
H;H++)I=z[H],I.copy(F[H]),I.unproject(G),I.applyMatrix4(E.matrixWorldInverse),I.x<n.x&&(n.x=I.x),I.x>t.x&&(t.x=I.x),I.y<n.y&&(n.y=I.y),I.y>t.y&&(t.y=I.y),I.z<n.z&&(n.z=I.z),I.z>t.z&&(t.z=I.z);E.left=n.x;E.right=t.x;E.top=t.y;E.bottom=n.y;E.updateProjectionMatrix()}E=A.shadowMap;F=A.shadowMatrix;G=A.shadowCamera;G.position.setFromMatrixPosition(A.matrixWorld);r.setFromMatrixPosition(A.target.matrixWorld);G.lookAt(r);G.updateMatrixWorld();G.matrixWorldInverse.getInverse(G.matrixWorld);A.cameraHelper&&
(A.cameraHelper.visible=A.shadowCameraVisible);A.shadowCameraVisible&&A.cameraHelper.update();F.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);F.multiply(G.projectionMatrix);F.multiply(G.matrixWorldInverse);q.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse);p.setFromMatrix(q);a.setRenderTarget(E);a.clear();s.length=0;e(c,c,G);A=0;for(E=s.length;A<E;A++)z=s[A],F=z.object,z=z.buffer,H=F.material instanceof THREE.MeshFaceMaterial?F.material.materials[0]:F.material,I=void 0!==F.geometry.morphTargets&&
0<F.geometry.morphTargets.length&&H.morphTargets,L=F instanceof THREE.SkinnedMesh&&H.skinning,I=F.customDepthMaterial?F.customDepthMaterial:L?I?l:k:I?h:g,a.setMaterialFaces(H),z instanceof THREE.BufferGeometry?a.renderBufferDirect(G,b,null,I,z,F):a.renderBuffer(G,b,null,I,z,F);A=0;for(E=d.length;A<E;A++)z=d[A],F=z.object,F.visible&&F.castShadow&&(F._modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,F.matrixWorld),a.renderImmediateObject(G,b,null,g,F))}u=a.getClearColor();y=a.getClearAlpha();f.clearColor(u.r,
u.g,u.b,y);f.enable(f.BLEND);a.shadowMapCullFace===THREE.CullFaceFront&&f.cullFace(f.BACK);a.resetGLState()}}};
THREE.SpritePlugin=function(a,b){var c,d,e,f,g,h,k,l,p,q,n,t,r,s,u,v,x;function D(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var w=a.context,y,A,E,G,F=new THREE.Vector3,z=new THREE.Quaternion,I=new THREE.Vector3;this.render=function(U,M){if(0!==b.length){if(void 0===E){var H=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),L=new Uint16Array([0,1,2,0,2,3]);y=w.createBuffer();A=w.createBuffer();w.bindBuffer(w.ARRAY_BUFFER,y);w.bufferData(w.ARRAY_BUFFER,H,w.STATIC_DRAW);w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,
A);w.bufferData(w.ELEMENT_ARRAY_BUFFER,L,w.STATIC_DRAW);var H=w.createProgram(),L=w.createShader(w.VERTEX_SHADER),P=w.createShader(w.FRAGMENT_SHADER);w.shaderSource(L,["precision "+a.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
w.shaderSource(P,["precision "+a.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
w.compileShader(L);w.compileShader(P);w.attachShader(H,L);w.attachShader(H,P);w.linkProgram(H);E=H;v=w.getAttribLocation(E,"position");x=w.getAttribLocation(E,"uv");c=w.getUniformLocation(E,"uvOffset");d=w.getUniformLocation(E,"uvScale");e=w.getUniformLocation(E,"rotation");f=w.getUniformLocation(E,"scale");g=w.getUniformLocation(E,"color");h=w.getUniformLocation(E,"map");k=w.getUniformLocation(E,"opacity");l=w.getUniformLocation(E,"modelViewMatrix");p=w.getUniformLocation(E,"projectionMatrix");q=
w.getUniformLocation(E,"fogType");n=w.getUniformLocation(E,"fogDensity");t=w.getUniformLocation(E,"fogNear");r=w.getUniformLocation(E,"fogFar");s=w.getUniformLocation(E,"fogColor");u=w.getUniformLocation(E,"alphaTest");H=document.createElement("canvas");H.width=8;H.height=8;L=H.getContext("2d");L.fillStyle="white";L.fillRect(0,0,8,8);G=new THREE.Texture(H);G.needsUpdate=!0}w.useProgram(E);w.enableVertexAttribArray(v);w.enableVertexAttribArray(x);w.disable(w.CULL_FACE);w.enable(w.BLEND);w.bindBuffer(w.ARRAY_BUFFER,
y);w.vertexAttribPointer(v,2,w.FLOAT,!1,16,0);w.vertexAttribPointer(x,2,w.FLOAT,!1,16,8);w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,A);w.uniformMatrix4fv(p,!1,M.projectionMatrix.elements);w.activeTexture(w.TEXTURE0);w.uniform1i(h,0);L=H=0;(P=U.fog)?(w.uniform3f(s,P.color.r,P.color.g,P.color.b),P instanceof THREE.Fog?(w.uniform1f(t,P.near),w.uniform1f(r,P.far),w.uniform1i(q,1),L=H=1):P instanceof THREE.FogExp2&&(w.uniform1f(n,P.density),w.uniform1i(q,2),L=H=2)):(w.uniform1i(q,0),L=H=0);for(var P=0,N=b.length;P<
N;P++){var R=b[P];R._modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,R.matrixWorld);R.z=-R._modelViewMatrix.elements[14]}b.sort(D);for(var V=[],P=0,N=b.length;P<N;P++){var R=b[P],J=R.material;w.uniform1f(u,J.alphaTest);w.uniformMatrix4fv(l,!1,R._modelViewMatrix.elements);R.matrixWorld.decompose(F,z,I);V[0]=I.x;V[1]=I.y;R=0;U.fog&&J.fog&&(R=L);H!==R&&(w.uniform1i(q,R),H=R);null!==J.map?(w.uniform2f(c,J.map.offset.x,J.map.offset.y),w.uniform2f(d,J.map.repeat.x,J.map.repeat.y)):(w.uniform2f(c,
0,0),w.uniform2f(d,1,1));w.uniform1f(k,J.opacity);w.uniform3f(g,J.color.r,J.color.g,J.color.b);w.uniform1f(e,J.rotation);w.uniform2fv(f,V);a.state.setBlending(J.blending,J.blendEquation,J.blendSrc,J.blendDst);a.state.setDepthTest(J.depthTest);a.state.setDepthWrite(J.depthWrite);J.map&&J.map.image&&J.map.image.width?a.setTexture(J.map,0):a.setTexture(G,0);w.drawElements(w.TRIANGLES,6,w.UNSIGNED_SHORT,0)}w.enable(w.CULL_FACE);a.resetGLState()}}};
THREE.GeometryUtils={merge:function(a,b,c){THREE.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var d;b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c)},center:function(a){THREE.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};
THREE.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var f=new THREE.Texture(void 0,b);e.load(a,function(a){f.image=a;f.needsUpdate=!0;c&&c(f)},void 0,function(a){d&&d(a)});f.sourceFile=a;return f},loadTextureCube:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var f=new THREE.CubeTexture([],b);f.flipY=!1;var g=0;b=function(b){e.load(a[b],function(a){f.images[b]=a;g+=1;6===g&&(f.needsUpdate=!0,c&&
c(f))},void 0,d)};for(var h=0,k=a.length;h<k;++h)b(h);return f},loadCompressedTexture:function(){THREE.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){THREE.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]};b|=1;var d=a.width,e=a.height,f=document.createElement("canvas");
f.width=d;f.height=e;var g=f.getContext("2d");g.drawImage(a,0,0);for(var h=g.getImageData(0,0,d,e).data,k=g.createImageData(d,e),l=k.data,p=0;p<d;p++)for(var q=0;q<e;q++){var n=0>q-1?0:q-1,t=q+1>e-1?e-1:q+1,r=0>p-1?0:p-1,s=p+1>d-1?d-1:p+1,u=[],v=[0,0,h[4*(q*d+p)]/255*b];u.push([-1,0,h[4*(q*d+r)]/255*b]);u.push([-1,-1,h[4*(n*d+r)]/255*b]);u.push([0,-1,h[4*(n*d+p)]/255*b]);u.push([1,-1,h[4*(n*d+s)]/255*b]);u.push([1,0,h[4*(q*d+s)]/255*b]);u.push([1,1,h[4*(t*d+s)]/255*b]);u.push([0,1,h[4*(t*d+p)]/255*
b]);u.push([-1,1,h[4*(t*d+r)]/255*b]);n=[];r=u.length;for(t=0;t<r;t++){var s=u[t],x=u[(t+1)%r],s=[s[0]-v[0],s[1]-v[1],s[2]-v[2]],x=[x[0]-v[0],x[1]-v[1],x[2]-v[2]];n.push(c([s[1]*x[2]-s[2]*x[1],s[2]*x[0]-s[0]*x[2],s[0]*x[1]-s[1]*x[0]]))}u=[0,0,0];for(t=0;t<n.length;t++)u[0]+=n[t][0],u[1]+=n[t][1],u[2]+=n[t][2];u[0]/=n.length;u[1]/=n.length;u[2]/=n.length;v=4*(q*d+p);l[v]=(u[0]+1)/2*255|0;l[v+1]=(u[1]+1)/2*255|0;l[v+2]=255*u[2]|0;l[v+3]=255}g.putImageData(k,0,0);return f},generateDataTexture:function(a,
b,c){var d=a*b,e=new Uint8Array(3*d),f=Math.floor(255*c.r),g=Math.floor(255*c.g);c=Math.floor(255*c.b);for(var h=0;h<d;h++)e[3*h]=f,e[3*h+1]=g,e[3*h+2]=c;a=new THREE.DataTexture(e,a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};
THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Object3D,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};
THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){try{return this.faces[this.face][this.weight][this.style]}catch(a){throw"The font "+this.face+" with "+this.weight+" weight and "+this.style+" style is missing.";}},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=
a},drawText:function(a){var b=this.getFace(),c=this.size/b.resolution,d=0,e=String(a).split(""),f=e.length,g=[];for(a=0;a<f;a++){var h=new THREE.Path,h=this.extractGlyphPoints(e[a],b,c,d,h),d=d+h.offset;g.push(h.path)}return{paths:g,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var f=[],g,h,k,l,p,q,n,t,r,s,u,v=b.glyphs[a]||b.glyphs["?"];if(v){if(v.o)for(b=v._cachedOutline||(v._cachedOutline=v.o.split(" ")),l=b.length,a=0;a<l;)switch(k=b[a++],k){case "m":k=b[a++]*c+d;p=b[a++]*c;e.moveTo(k,p);
break;case "l":k=b[a++]*c+d;p=b[a++]*c;e.lineTo(k,p);break;case "q":k=b[a++]*c+d;p=b[a++]*c;t=b[a++]*c+d;r=b[a++]*c;e.quadraticCurveTo(t,r,k,p);if(g=f[f.length-1])for(q=g.x,n=g.y,g=1,h=this.divisions;g<=h;g++){var x=g/h;THREE.Shape.Utils.b2(x,q,t,k);THREE.Shape.Utils.b2(x,n,r,p)}break;case "b":if(k=b[a++]*c+d,p=b[a++]*c,t=b[a++]*c+d,r=b[a++]*c,s=b[a++]*c+d,u=b[a++]*c,e.bezierCurveTo(t,r,s,u,k,p),g=f[f.length-1])for(q=g.x,n=g.y,g=1,h=this.divisions;g<=h;g++)x=g/h,THREE.Shape.Utils.b3(x,q,t,s,k),THREE.Shape.Utils.b3(x,
n,r,u,p)}return{offset:v.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){b=b||{};var c=void 0!==b.curveSegments?b.curveSegments:4,d=void 0!==b.font?b.font:"helvetiker",e=void 0!==b.weight?b.weight:"normal",f=void 0!==b.style?b.style:"normal";THREE.FontUtils.size=void 0!==b.size?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=f;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(f=c.length;e<f;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,f=b-1,g=0;g<b;f=g++)e+=a[f].x*a[g].y-a[g].x*a[f].y;return.5*e};a.Triangulate=function(a,d){var e=a.length;if(3>e)return null;var f=[],g=[],h=[],k,l,p;if(0<b(a))for(l=0;l<e;l++)g[l]=l;else for(l=0;l<e;l++)g[l]=e-1-l;var q=2*e;for(l=e-1;2<e;){if(0>=q--){THREE.warn("THREE.FontUtils: Warning, unable to triangulate polygon! in Triangulate.process()");break}k=l;e<=k&&(k=0);l=k+1;e<=l&&(l=0);p=l+1;e<=p&&(p=0);var n;a:{var t=n=void 0,r=void 0,s=void 0,
u=void 0,v=void 0,x=void 0,D=void 0,w=void 0,t=a[g[k]].x,r=a[g[k]].y,s=a[g[l]].x,u=a[g[l]].y,v=a[g[p]].x,x=a[g[p]].y;if(1E-10>(s-t)*(x-r)-(u-r)*(v-t))n=!1;else{var y=void 0,A=void 0,E=void 0,G=void 0,F=void 0,z=void 0,I=void 0,U=void 0,M=void 0,H=void 0,M=U=I=w=D=void 0,y=v-s,A=x-u,E=t-v,G=r-x,F=s-t,z=u-r;for(n=0;n<e;n++)if(D=a[g[n]].x,w=a[g[n]].y,!(D===t&&w===r||D===s&&w===u||D===v&&w===x)&&(I=D-t,U=w-r,M=D-s,H=w-u,D-=v,w-=x,M=y*H-A*M,I=F*U-z*I,U=E*w-G*D,-1E-10<=M&&-1E-10<=U&&-1E-10<=I)){n=!1;break a}n=
!0}}if(n){f.push([a[g[k]],a[g[l]],a[g[p]]]);h.push([g[k],g[l],g[p]]);k=l;for(p=l+1;p<e;k++,p++)g[k]=g[p];e--;q=2*e}}return d?h:f};a.Triangulate.area=b;return a})(THREE.FontUtils);self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};THREE.typeface_js=self._typeface_js;
THREE.Audio=function(a){THREE.Object3D.call(this);this.type="Audio";this.context=a.context;this.source=this.context.createBufferSource();this.source.onended=this.onEnded.bind(this);this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.panner=this.context.createPanner();this.panner.connect(this.gain);this.autoplay=!1;this.startTime=0;this.isPlaying=!1};THREE.Audio.prototype=Object.create(THREE.Object3D.prototype);THREE.Audio.prototype.constructor=THREE.Audio;
THREE.Audio.prototype.load=function(a){var b=this,c=new XMLHttpRequest;c.open("GET",a,!0);c.responseType="arraybuffer";c.onload=function(a){b.context.decodeAudioData(this.response,function(a){b.source.buffer=a;b.autoplay&&b.play()})};c.send();return this};
THREE.Audio.prototype.play=function(){if(!0===this.isPlaying)THREE.warn("THREE.Audio: Audio is already playing.");else{var a=this.context.createBufferSource();a.buffer=this.source.buffer;a.loop=this.source.loop;a.onended=this.source.onended;a.connect(this.panner);a.start(0,this.startTime);this.isPlaying=!0;this.source=a}};THREE.Audio.prototype.pause=function(){this.source.stop();this.startTime=this.context.currentTime};THREE.Audio.prototype.stop=function(){this.source.stop();this.startTime=0};
THREE.Audio.prototype.onEnded=function(){this.isPlaying=!1};THREE.Audio.prototype.setLoop=function(a){this.source.loop=a};THREE.Audio.prototype.setRefDistance=function(a){this.panner.refDistance=a};THREE.Audio.prototype.setRolloffFactor=function(a){this.panner.rolloffFactor=a};THREE.Audio.prototype.setVolume=function(a){this.gain.gain.value=a};
THREE.Audio.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3;return function(b){THREE.Object3D.prototype.updateMatrixWorld.call(this,b);a.setFromMatrixPosition(this.matrixWorld);this.panner.setPosition(a.x,a.y,a.z)}}();THREE.AudioListener=function(){THREE.Object3D.call(this);this.type="AudioListener";this.context=new (window.AudioContext||window.webkitAudioContext)};THREE.AudioListener.prototype=Object.create(THREE.Object3D.prototype);THREE.AudioListener.prototype.constructor=THREE.AudioListener;
THREE.AudioListener.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3,b=new THREE.Quaternion,c=new THREE.Vector3,d=new THREE.Vector3,e=new THREE.Vector3,f=new THREE.Vector3;return function(g){THREE.Object3D.prototype.updateMatrixWorld.call(this,g);g=this.context.listener;var h=this.up;this.matrixWorld.decompose(a,b,c);d.set(0,0,-1).applyQuaternion(b);e.subVectors(a,f);g.setPosition(a.x,a.y,a.z);g.setOrientation(d.x,d.y,d.z,h.x,h.y,h.z);g.setVelocity(e.x,e.y,e.z);f.copy(a)}}();
THREE.Curve=function(){};THREE.Curve.prototype.getPoint=function(a){THREE.warn("THREE.Curve: Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};
THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length==a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b};
THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0;this.getLengths()};THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,k;g<=h;)if(d=Math.floor(g+(h-g)/2),k=c[d]-f,0>k)g=d+1;else if(0<k)h=d-1;else{h=d;break}d=h;if(c[d]==f)return d/(e-1);g=c[d];return c=(d+(f-g)/(c[d+1]-g))/(e-1)};THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()};
THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a,b,c,d,e){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){a=.5*(c-a);d=.5*(d-b);var f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.constructor=THREE.CurvePath;THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};
THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};THREE.CurvePath.prototype.getPoint=function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],b=1-b/a.getLength(),a.getPointAt(b);a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,f,g;b=c=Number.NEGATIVE_INFINITY;e=f=Number.POSITIVE_INFINITY;var h,k,l,p,q=a[0]instanceof THREE.Vector3;p=q?new THREE.Vector3:new THREE.Vector2;k=0;for(l=a.length;k<l;k++)h=a[k],h.x>b?b=h.x:h.x<e&&(e=h.x),h.y>c?c=h.y:h.y<f&&(f=h.y),q&&(h.z>d?d=h.z:h.z<g&&(g=h.z)),p.add(h);a={minX:e,minY:f,maxX:b,maxY:c};q&&(a.maxZ=d,a.minZ=g);return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,f,g,h,k;d=0;for(e=a.length;d<e;d++)f=a[d],g=f.x,h=f.y,k=g/c.maxX,k=b.getUtoTmapping(k,g),g=b.getPoint(k),k=b.getTangent(k),k.set(-k.y,k.x).multiplyScalar(h),f.x=g.x+k.x,f.y=g.y+k.y;return a};THREE.Gyroscope=function(){THREE.Object3D.call(this)};THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype);THREE.Gyroscope.prototype.constructor=THREE.Gyroscope;
THREE.Gyroscope.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3,b=new THREE.Quaternion,c=new THREE.Vector3,d=new THREE.Vector3,e=new THREE.Quaternion,f=new THREE.Vector3;return function(g){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||g)this.parent?(this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorld.decompose(d,e,f),this.matrix.decompose(a,b,c),this.matrixWorld.compose(d,b,f)):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=
!1,g=!0;for(var h=0,k=this.children.length;h<k;h++)this.children[h].updateMatrixWorld(g)}}();THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.Path.prototype.constructor=THREE.Path;THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};
THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};
THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),f=this.actions[this.actions.length-1].args,f=new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length-2],f[f.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(f);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var g=Array.prototype.slice.call(arguments),h=this.actions[this.actions.length-1].args,h=new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length-2],h[h.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(h);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:g})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args;this.absarc(a+g[g.length-2],b+g[g.length-1],c,d,e,f)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,g){var h=this.actions[this.actions.length-1].args;this.absellipse(a+h[h.length-2],b+h[h.length-1],c,d,e,f,g)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,g){var h=Array.prototype.slice.call(arguments),k=new THREE.EllipseCurve(a,b,c,d,e,f,g);this.curves.push(k);k=k.getPoint(1);h.push(k.x);h.push(k.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:h})};
THREE.Path.prototype.getSpacedPoints=function(a,b){a||(a=40);for(var c=[],d=0;d<a;d++)c.push(this.getPoint(d/a));return c};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints)return console.log("tata"),this.getSpacedPoints(a,b);a=a||12;var c=[],d,e,f,g,h,k,l,p,q,n,t,r,s;d=0;for(e=this.actions.length;d<e;d++)switch(f=this.actions[d],g=f.action,f=f.args,g){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:h=f[2];k=f[3];q=f[0];n=f[1];0<c.length?(g=c[c.length-1],t=g.x,
r=g.y):(g=this.actions[d-1].args,t=g[g.length-2],r=g[g.length-1]);for(f=1;f<=a;f++)s=f/a,g=THREE.Shape.Utils.b2(s,t,q,h),s=THREE.Shape.Utils.b2(s,r,n,k),c.push(new THREE.Vector2(g,s));break;case THREE.PathActions.BEZIER_CURVE_TO:h=f[4];k=f[5];q=f[0];n=f[1];l=f[2];p=f[3];0<c.length?(g=c[c.length-1],t=g.x,r=g.y):(g=this.actions[d-1].args,t=g[g.length-2],r=g[g.length-1]);for(f=1;f<=a;f++)s=f/a,g=THREE.Shape.Utils.b3(s,t,q,l,h),s=THREE.Shape.Utils.b3(s,r,n,p,k),c.push(new THREE.Vector2(g,s));break;case THREE.PathActions.CSPLINE_THRU:g=
this.actions[d-1].args;s=[new THREE.Vector2(g[g.length-2],g[g.length-1])];g=a*f[0].length;s=s.concat(f[0]);s=new THREE.SplineCurve(s);for(f=1;f<=g;f++)c.push(s.getPointAt(f/g));break;case THREE.PathActions.ARC:h=f[0];k=f[1];n=f[2];l=f[3];g=f[4];q=!!f[5];t=g-l;r=2*a;for(f=1;f<=r;f++)s=f/r,q||(s=1-s),s=l+s*t,g=h+n*Math.cos(s),s=k+n*Math.sin(s),c.push(new THREE.Vector2(g,s));break;case THREE.PathActions.ELLIPSE:for(h=f[0],k=f[1],n=f[2],p=f[3],l=f[4],g=f[5],q=!!f[6],t=g-l,r=2*a,f=1;f<=r;f++)s=f/r,q||
(s=1-s),s=l+s*t,g=h+n*Math.cos(s),s=k+p*Math.sin(s),c.push(new THREE.Vector2(g,s))}d=c[c.length-1];1E-10>Math.abs(d.x-c[0].x)&&1E-10>Math.abs(d.y-c[0].y)&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new THREE.Shape;f.actions=e.actions;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,n=h.y-g.y;if(1E-10<Math.abs(n)){if(0>n&&(g=b[f],k=-k,h=b[e],n=-n),!(a.y<g.y||a.y>h.y))if(a.y==g.y){if(a.x==g.x)return!0}else{e=n*(a.x-g.x)-k*(a.y-g.y);if(0==e)return!0;0>e||(d=!d)}}else if(a.y==g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=
h.x))return!0}return d}var e=function(a){var b,c,d,e,f=[],g=new THREE.Path;b=0;for(c=a.length;b<c;b++)d=a[b],e=d.args,d=d.action,d==THREE.PathActions.MOVE_TO&&0!=g.actions.length&&(f.push(g),g=new THREE.Path),g[d].apply(g,e);0!=g.actions.length&&f.push(g);return f}(this.actions);if(0==e.length)return[];if(!0===b)return c(e);var f,g,h,k=[];if(1==e.length)return g=e[0],h=new THREE.Shape,h.actions=g.actions,h.curves=g.curves,k.push(h),k;var l=!THREE.Shape.Utils.isClockWise(e[0].getPoints()),l=a?!l:l;
h=[];var p=[],q=[],n=0,t;p[n]=void 0;q[n]=[];var r,s;r=0;for(s=e.length;r<s;r++)g=e[r],t=g.getPoints(),f=THREE.Shape.Utils.isClockWise(t),(f=a?!f:f)?(!l&&p[n]&&n++,p[n]={s:new THREE.Shape,p:t},p[n].s.actions=g.actions,p[n].s.curves=g.curves,l&&n++,q[n]=[]):q[n].push({h:g,p:t[0]});if(!p[0])return c(e);if(1<p.length){r=!1;s=[];g=0;for(e=p.length;g<e;g++)h[g]=[];g=0;for(e=p.length;g<e;g++)for(f=q[g],l=0;l<f.length;l++){n=f[l];t=!0;for(var u=0;u<p.length;u++)d(n.p,p[u].p)&&(g!=u&&s.push({froms:g,tos:u,
hole:l}),t?(t=!1,h[u].push(n)):r=!0);t&&h[g].push(n)}0<s.length&&(r||(q=h))}r=0;for(s=p.length;r<s;r++)for(h=p[r].s,k.push(h),g=q[r],e=0,f=g.length;e<f;e++)h.holes.push(g[e].h);return k};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.constructor=THREE.Shape;THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};
THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};
THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={triangulateShape:function(a,b){function c(a,b,c){return a.x!=b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function d(a,b,d,e,f){var g=b.x-a.x,h=b.y-a.y,k=e.x-d.x,l=e.y-d.y,p=a.x-d.x,q=a.y-d.y,E=h*k-g*l,G=h*p-g*q;if(1E-10<Math.abs(E)){if(0<E){if(0>G||G>E)return[];k=l*p-k*q;if(0>k||k>E)return[]}else{if(0<G||G<E)return[];k=l*p-k*q;if(0<k||k<E)return[]}if(0==k)return!f||0!=G&&G!=E?[a]:[];if(k==E)return!f||0!=G&&G!=E?[b]:[];if(0==G)return[d];
if(G==E)return[e];f=k/E;return[{x:a.x+f*g,y:a.y+f*h}]}if(0!=G||l*p!=k*q)return[];h=0==g&&0==h;k=0==k&&0==l;if(h&&k)return a.x!=d.x||a.y!=d.y?[]:[a];if(h)return c(d,e,a)?[a]:[];if(k)return c(a,b,d)?[d]:[];0!=g?(a.x<b.x?(g=a,k=a.x,h=b,a=b.x):(g=b,k=b.x,h=a,a=a.x),d.x<e.x?(b=d,E=d.x,l=e,d=e.x):(b=e,E=e.x,l=d,d=d.x)):(a.y<b.y?(g=a,k=a.y,h=b,a=b.y):(g=b,k=b.y,h=a,a=a.y),d.y<e.y?(b=d,E=d.y,l=e,d=e.y):(b=e,E=e.y,l=d,d=d.y));return k<=E?a<E?[]:a==E?f?[]:[b]:a<=d?[b,h]:[b,l]:k>d?[]:k==d?f?[]:[g]:a<=d?[g,h]:
[g,l]}function e(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return 1E-10<Math.abs(a)?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}var f,g,h,k,l,p={};h=a.concat();f=0;for(g=b.length;f<g;f++)Array.prototype.push.apply(h,b[f]);f=0;for(g=h.length;f<g;f++)l=h[f].x+":"+h[f].y,void 0!==p[l]&&THREE.warn("THREE.Shape: Duplicate point",l),p[l]=f;f=function(a,b){function c(a,b){var d=h.length-1,f=a-1;0>f&&(f=d);var g=a+1;g>d&&(g=0);d=e(h[a],h[f],h[g],k[b]);
if(!d)return!1;d=k.length-1;f=b-1;0>f&&(f=d);g=b+1;g>d&&(g=0);return(d=e(k[b],k[f],k[g],h[a]))?!0:!1}function f(a,b){var c,e;for(c=0;c<h.length;c++)if(e=c+1,e%=h.length,e=d(a,b,h[c],h[e],!0),0<e.length)return!0;return!1}function g(a,c){var e,f,h,k;for(e=0;e<l.length;e++)for(f=b[l[e]],h=0;h<f.length;h++)if(k=h+1,k%=f.length,k=d(a,c,f[h],f[k],!0),0<k.length)return!0;return!1}var h=a.concat(),k,l=[],p,q,A,E,G,F=[],z,I,U,M=0;for(p=b.length;M<p;M++)l.push(M);z=0;for(var H=2*l.length;0<l.length;){H--;if(0>
H){console.log("Infinite Loop! Holes left:"+l.length+", Probably Hole outside Shape!");break}for(q=z;q<h.length;q++){A=h[q];p=-1;for(M=0;M<l.length;M++)if(E=l[M],G=A.x+":"+A.y+":"+E,void 0===F[G]){k=b[E];for(I=0;I<k.length;I++)if(E=k[I],c(q,I)&&!f(A,E)&&!g(A,E)){p=I;l.splice(M,1);z=h.slice(0,q+1);E=h.slice(q);I=k.slice(p);U=k.slice(0,p+1);h=z.concat(I).concat(U).concat(E);z=q;break}if(0<=p)break;F[G]=!0}if(0<=p)break}}return h}(a,b);var q=THREE.FontUtils.Triangulate(f,!1);f=0;for(g=q.length;f<g;f++)for(k=
q[f],h=0;3>h;h++)l=k[h].x+":"+k[h].y,l=p[l],void 0!==l&&(k[h]=l);return q.concat()},isClockWise:function(a){return 0>THREE.FontUtils.Triangulate.area(a)},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-a)*a*a*b},b3p3:function(a,b){return a*
a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,b)+this.b3p1(a,c)+this.b3p2(a,d)+this.b3p3(a,e)}};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.constructor=THREE.LineCurve;THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};
THREE.LineCurve.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize()};THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.constructor=THREE.QuadraticBezierCurve;
THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b=new THREE.Vector2;b.x=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return b};THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b=new THREE.Vector2;b.x=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);return b.normalize()};
THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.CubicBezierCurve.prototype.constructor=THREE.CubicBezierCurve;THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};
THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.constructor=THREE.SplineCurve;
THREE.SplineCurve.prototype.getPoint=function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0==c?c:c-1],e=b[c],f=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=new THREE.Vector2;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,f.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,f.y,b.y,a);return c};THREE.EllipseCurve=function(a,b,c,d,e,f,g){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g};
THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);THREE.EllipseCurve.prototype.constructor=THREE.EllipseCurve;THREE.EllipseCurve.prototype.getPoint=function(a){var b=this.aEndAngle-this.aStartAngle;0>b&&(b+=2*Math.PI);b>2*Math.PI&&(b-=2*Math.PI);a=!0===this.aClockwise?this.aEndAngle+(1-a)*(2*Math.PI-b):this.aStartAngle+a*b;b=new THREE.Vector2;b.x=this.aX+this.xRadius*Math.cos(a);b.y=this.aY+this.yRadius*Math.sin(a);return b};
THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);THREE.ArcCurve.prototype.constructor=THREE.ArcCurve;THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});
THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b=new THREE.Vector3;b.x=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);b.z=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return b});
THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b=new THREE.Vector3;b.x=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);b.y=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b.z=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return b});
THREE.SplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0==c?c:c-1],e=b[c],f=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=new THREE.Vector3;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,f.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,f.y,b.y,a);c.z=THREE.Curve.Utils.interpolate(d.z,e.z,f.z,b.z,a);return c});
THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=this.points;a*=b.length-0;var c=Math.floor(a);a-=c;var c=c+(0<c?0:(Math.floor(Math.abs(c)/b.length)+1)*b.length),d=b[(c-1)%b.length],e=b[c%b.length],f=b[(c+1)%b.length],b=b[(c+2)%b.length],c=new THREE.Vector3;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,f.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,f.y,b.y,a);c.z=THREE.Curve.Utils.interpolate(d.z,e.z,f.z,b.z,a);return c});
THREE.AnimationHandler={LINEAR:0,CATMULLROM:1,CATMULLROM_FORWARD:2,add:function(){THREE.warn("THREE.AnimationHandler.add() has been deprecated.")},get:function(){THREE.warn("THREE.AnimationHandler.get() has been deprecated.")},remove:function(){THREE.warn("THREE.AnimationHandler.remove() has been deprecated.")},animations:[],init:function(a){if(!0===a.initialized)return a;for(var b=0;b<a.hierarchy.length;b++){for(var c=0;c<a.hierarchy[b].keys.length;c++)if(0>a.hierarchy[b].keys[c].time&&(a.hierarchy[b].keys[c].time=
0),void 0!==a.hierarchy[b].keys[c].rot&&!(a.hierarchy[b].keys[c].rot instanceof THREE.Quaternion)){var d=a.hierarchy[b].keys[c].rot;a.hierarchy[b].keys[c].rot=(new THREE.Quaternion).fromArray(d)}if(a.hierarchy[b].keys.length&&void 0!==a.hierarchy[b].keys[0].morphTargets){d={};for(c=0;c<a.hierarchy[b].keys.length;c++)for(var e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++){var f=a.hierarchy[b].keys[c].morphTargets[e];d[f]=-1}a.hierarchy[b].usedMorphTargets=d;for(c=0;c<a.hierarchy[b].keys.length;c++){var g=
{};for(f in d){for(e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++)if(a.hierarchy[b].keys[c].morphTargets[e]===f){g[f]=a.hierarchy[b].keys[c].morphTargetsInfluences[e];break}e===a.hierarchy[b].keys[c].morphTargets.length&&(g[f]=0)}a.hierarchy[b].keys[c].morphTargetsInfluences=g}}for(c=1;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].time===a.hierarchy[b].keys[c-1].time&&(a.hierarchy[b].keys.splice(c,1),c--);for(c=0;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].index=c}a.initialized=
!0;return a},parse:function(a){var b=function(a,c){c.push(a);for(var d=0;d<a.children.length;d++)b(a.children[d],c)},c=[];if(a instanceof THREE.SkinnedMesh)for(var d=0;d<a.skeleton.bones.length;d++)c.push(a.skeleton.bones[d]);else b(a,c);return c},play:function(a){-1===this.animations.indexOf(a)&&this.animations.push(a)},stop:function(a){a=this.animations.indexOf(a);-1!==a&&this.animations.splice(a,1)},update:function(a){for(var b=0;b<this.animations.length;b++)this.animations[b].resetBlendWeights();
for(b=0;b<this.animations.length;b++)this.animations[b].update(a)}};THREE.Animation=function(a,b){this.root=a;this.data=THREE.AnimationHandler.init(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.loop=!0;this.weight=0;this.interpolationType=THREE.AnimationHandler.LINEAR};
THREE.Animation.prototype={constructor:THREE.Animation,keyTypes:["pos","rot","scl"],play:function(a,b){this.currentTime=void 0!==a?a:0;this.weight=void 0!==b?b:1;this.isPlaying=!0;this.reset();THREE.AnimationHandler.play(this)},stop:function(){this.isPlaying=!1;THREE.AnimationHandler.stop(this)},reset:function(){for(var a=0,b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a];void 0===c.animationCache&&(c.animationCache={animations:{},blending:{positionWeight:0,quaternionWeight:0,scaleWeight:0}});
var d=this.data.name,e=c.animationCache.animations,f=e[d];void 0===f&&(f={prevKey:{pos:0,rot:0,scl:0},nextKey:{pos:0,rot:0,scl:0},originalMatrix:c.matrix},e[d]=f);for(c=0;3>c;c++){for(var d=this.keyTypes[c],e=this.data.hierarchy[a].keys[0],g=this.getNextKeyWith(d,a,1);g.time<this.currentTime&&g.index>e.index;)e=g,g=this.getNextKeyWith(d,a,g.index+1);f.prevKey[d]=e;f.nextKey[d]=g}}},resetBlendWeights:function(){for(var a=0,b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a].animationCache;void 0!==
c&&(c=c.blending,c.positionWeight=0,c.quaternionWeight=0,c.scaleWeight=0)}},update:function(){var a=[],b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Quaternion,e=function(a,b){var c=[],d=[],e,q,n,t,r,s;e=(a.length-1)*b;q=Math.floor(e);e-=q;c[0]=0===q?q:q-1;c[1]=q;c[2]=q>a.length-2?q:q+1;c[3]=q>a.length-3?q:q+2;q=a[c[0]];t=a[c[1]];r=a[c[2]];s=a[c[3]];c=e*e;n=e*c;d[0]=f(q[0],t[0],r[0],s[0],e,c,n);d[1]=f(q[1],t[1],r[1],s[1],e,c,n);d[2]=f(q[2],t[2],r[2],s[2],e,c,n);return d},f=function(a,b,c,d,
e,f,n){a=.5*(c-a);d=.5*(d-b);return(2*(b-c)+a+d)*n+(-3*(b-c)-2*a-d)*f+a*e+b};return function(f){if(!1!==this.isPlaying&&(this.currentTime+=f*this.timeScale,0!==this.weight)){f=this.data.length;if(this.currentTime>f||0>this.currentTime)this.loop?(this.currentTime%=f,0>this.currentTime&&(this.currentTime+=f),this.reset()):this.stop();f=0;for(var h=this.hierarchy.length;f<h;f++)for(var k=this.hierarchy[f],l=k.animationCache.animations[this.data.name],p=k.animationCache.blending,q=0;3>q;q++){var n=this.keyTypes[q],
t=l.prevKey[n],r=l.nextKey[n];if(0<this.timeScale&&r.time<=this.currentTime||0>this.timeScale&&t.time>=this.currentTime){t=this.data.hierarchy[f].keys[0];for(r=this.getNextKeyWith(n,f,1);r.time<this.currentTime&&r.index>t.index;)t=r,r=this.getNextKeyWith(n,f,r.index+1);l.prevKey[n]=t;l.nextKey[n]=r}var s=(this.currentTime-t.time)/(r.time-t.time),u=t[n],v=r[n];0>s&&(s=0);1<s&&(s=1);if("pos"===n)if(this.interpolationType===THREE.AnimationHandler.LINEAR)c.x=u[0]+(v[0]-u[0])*s,c.y=u[1]+(v[1]-u[1])*s,
c.z=u[2]+(v[2]-u[2])*s,t=this.weight/(this.weight+p.positionWeight),k.position.lerp(c,t),p.positionWeight+=this.weight;else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)a[0]=this.getPrevKeyWith("pos",f,t.index-1).pos,a[1]=u,a[2]=v,a[3]=this.getNextKeyWith("pos",f,r.index+1).pos,s=.33*s+.33,r=e(a,s),t=this.weight/(this.weight+p.positionWeight),p.positionWeight+=this.weight,n=k.position,n.x+=(r[0]-n.x)*t,n.y+=(r[1]-
n.y)*t,n.z+=(r[2]-n.z)*t,this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&(s=e(a,1.01*s),b.set(s[0],s[1],s[2]),b.sub(n),b.y=0,b.normalize(),s=Math.atan2(b.x,b.z),k.rotation.set(0,s,0))}else"rot"===n?(THREE.Quaternion.slerp(u,v,d,s),0===p.quaternionWeight?(k.quaternion.copy(d),p.quaternionWeight=this.weight):(t=this.weight/(this.weight+p.quaternionWeight),THREE.Quaternion.slerp(k.quaternion,d,k.quaternion,t),p.quaternionWeight+=this.weight)):"scl"===n&&(c.x=u[0]+(v[0]-u[0])*s,c.y=
u[1]+(v[1]-u[1])*s,c.z=u[2]+(v[2]-u[2])*s,t=this.weight/(this.weight+p.scaleWeight),k.scale.lerp(c,t),p.scaleWeight+=this.weight)}return!0}}}(),getNextKeyWith:function(a,b,c){var d=this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[0]},getPrevKeyWith:function(a,b,c){var d=
this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?0<c?c:0:0<=c?c:c+d.length;0<=c;c--)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[d.length-1]}};
THREE.KeyFrameAnimation=function(a){this.root=a.node;this.data=THREE.AnimationHandler.init(a);this.hierarchy=THREE.AnimationHandler.parse(this.root);this.currentTime=0;this.timeScale=.001;this.isPlaying=!1;this.loop=this.isPaused=!0;a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.data.hierarchy[a].sids,d=this.hierarchy[a];if(this.data.hierarchy[a].keys.length&&c){for(var e=0;e<c.length;e++){var f=c[e],g=this.getNextKeyWith(f,a,0);g&&g.apply(f)}d.matrixAutoUpdate=!1;this.data.hierarchy[a].node.updateMatrix();
d.matrixWorldNeedsUpdate=!0}}};
THREE.KeyFrameAnimation.prototype={constructor:THREE.KeyFrameAnimation,play:function(a){this.currentTime=void 0!==a?a:0;if(!1===this.isPlaying){this.isPlaying=!0;var b=this.hierarchy.length,c,d;for(a=0;a<b;a++)c=this.hierarchy[a],d=this.data.hierarchy[a],void 0===d.animationCache&&(d.animationCache={},d.animationCache.prevKey=null,d.animationCache.nextKey=null,d.animationCache.originalMatrix=c.matrix),c=this.data.hierarchy[a].keys,c.length&&(d.animationCache.prevKey=c[0],d.animationCache.nextKey=
c[1],this.startTime=Math.min(c[0].time,this.startTime),this.endTime=Math.max(c[c.length-1].time,this.endTime));this.update(0)}this.isPaused=!1;THREE.AnimationHandler.play(this)},stop:function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.stop(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(void 0!==c.animationCache){var d=c.animationCache.originalMatrix;d.copy(b.matrix);b.matrix=d;delete c.animationCache}}},update:function(a){if(!1!==
this.isPlaying){this.currentTime+=a*this.timeScale;a=this.data.length;!0===this.loop&&this.currentTime>a&&(this.currentTime%=a);this.currentTime=Math.min(this.currentTime,a);a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a],d=this.data.hierarchy[a],e=d.keys,d=d.animationCache;if(e.length){var f=d.prevKey,g=d.nextKey;if(g.time<=this.currentTime){for(;g.time<this.currentTime&&g.index>f.index;)f=g,g=e[f.index+1];d.prevKey=f;d.nextKey=g}g.time>=this.currentTime?f.interpolate(g,this.currentTime):
f.interpolate(g,g.time);this.data.hierarchy[a].node.updateMatrix();c.matrixWorldNeedsUpdate=!0}}}},getNextKeyWith:function(a,b,c){b=this.data.hierarchy[b].keys;for(c%=b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]},getPrevKeyWith:function(a,b,c){b=this.data.hierarchy[b].keys;for(c=0<=c?c:c+b.length;0<=c;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]}};
THREE.MorphAnimation=function(a){this.mesh=a;this.frames=a.morphTargetInfluences.length;this.currentTime=0;this.duration=1E3;this.loop=!0;this.currentFrame=this.lastFrame=0;this.isPlaying=!1};
THREE.MorphAnimation.prototype={constructor:THREE.MorphAnimation,play:function(){this.isPlaying=!0},pause:function(){this.isPlaying=!1},update:function(a){if(!1!==this.isPlaying){this.currentTime+=a;!0===this.loop&&this.currentTime>this.duration&&(this.currentTime%=this.duration);this.currentTime=Math.min(this.currentTime,this.duration);a=this.duration/this.frames;var b=Math.floor(this.currentTime/a),c=this.mesh.morphTargetInfluences;b!=this.currentFrame&&(c[this.lastFrame]=0,c[this.currentFrame]=
1,c[b]=0,this.lastFrame=this.currentFrame,this.currentFrame=b);c[b]=this.currentTime%a/a;c[this.lastFrame]=1-c[b]}}};
THREE.BoxGeometry=function(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,s){var u,v=h.widthSegments,x=h.heightSegments,D=e/2,w=f/2,y=h.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)u="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)u="y",x=h.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)u="x",v=h.depthSegments;var A=v+1,E=x+1,G=e/v,F=f/x,z=new THREE.Vector3;z[u]=0<g?1:-1;for(e=0;e<E;e++)for(f=0;f<A;f++){var I=new THREE.Vector3;I[a]=(f*G-D)*c;I[b]=(e*F-w)*d;I[u]=g;h.vertices.push(I)}for(e=
0;e<x;e++)for(f=0;f<v;f++)w=f+A*e,a=f+A*(e+1),b=f+1+A*(e+1),c=f+1+A*e,d=new THREE.Vector2(f/v,1-e/x),g=new THREE.Vector2(f/v,1-(e+1)/x),u=new THREE.Vector2((f+1)/v,1-(e+1)/x),D=new THREE.Vector2((f+1)/v,1-e/x),w=new THREE.Face3(w+y,a+y,c+y),w.normal.copy(z),w.vertexNormals.push(z.clone(),z.clone(),z.clone()),w.materialIndex=s,h.faces.push(w),h.faceVertexUvs[0].push([d,g,D]),w=new THREE.Face3(a+y,b+y,c+y),w.normal.copy(z),w.vertexNormals.push(z.clone(),z.clone(),z.clone()),w.materialIndex=s,h.faces.push(w),
h.faceVertexUvs[0].push([g.clone(),u,D.clone()])}THREE.Geometry.call(this);this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=f||1;var h=this;d=a/2;e=b/2;f=c/2;g("z","y",-1,-1,c,b,d,0);g("z","y",1,-1,c,b,-d,1);g("x","z",1,1,a,c,e,2);g("x","z",1,-1,a,c,-e,3);g("x","y",1,-1,a,b,f,4);g("x","y",-1,-1,a,b,-f,5);this.mergeVertices()};THREE.BoxGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.BoxGeometry.prototype.constructor=THREE.BoxGeometry;
THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e,f=[];e=new THREE.Vector3;var g=new THREE.Vector2(.5,.5);this.vertices.push(e);f.push(g);for(e=0;e<=b;e++){var h=new THREE.Vector3,k=c+e/b*d;h.x=a*Math.cos(k);h.y=a*Math.sin(k);this.vertices.push(h);f.push(new THREE.Vector2((h.x/a+1)/2,(h.y/a+1)/2))}c=new THREE.Vector3(0,
0,1);for(e=1;e<=b;e++)this.faces.push(new THREE.Face3(e,e+1,0,[c.clone(),c.clone(),c.clone()])),this.faceVertexUvs[0].push([f[e].clone(),f[e+1].clone(),g.clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CircleGeometry.prototype.constructor=THREE.CircleGeometry;
THREE.CubeGeometry=function(a,b,c,d,e,f){THREE.warn("THREE.CubeGeometry has been renamed to THREE.BoxGeometry.");return new THREE.BoxGeometry(a,b,c,d,e,f)};
THREE.CylinderGeometry=function(a,b,c,d,e,f,g,h){THREE.Geometry.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=d||8;e=e||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var k=c/2,l,p,q=[],n=[];for(p=0;p<=e;p++){var t=[],r=[],s=p/e,u=s*(b-a)+a;for(l=0;l<=d;l++){var v=l/d,x=new THREE.Vector3;x.x=u*Math.sin(v*h+
g);x.y=-s*c+k;x.z=u*Math.cos(v*h+g);this.vertices.push(x);t.push(this.vertices.length-1);r.push(new THREE.Vector2(v,1-s))}q.push(t);n.push(r)}c=(b-a)/c;for(l=0;l<d;l++)for(0!==a?(g=this.vertices[q[0][l]].clone(),h=this.vertices[q[0][l+1]].clone()):(g=this.vertices[q[1][l]].clone(),h=this.vertices[q[1][l+1]].clone()),g.setY(Math.sqrt(g.x*g.x+g.z*g.z)*c).normalize(),h.setY(Math.sqrt(h.x*h.x+h.z*h.z)*c).normalize(),p=0;p<e;p++){var t=q[p][l],r=q[p+1][l],s=q[p+1][l+1],u=q[p][l+1],v=g.clone(),x=g.clone(),
D=h.clone(),w=h.clone(),y=n[p][l].clone(),A=n[p+1][l].clone(),E=n[p+1][l+1].clone(),G=n[p][l+1].clone();this.faces.push(new THREE.Face3(t,r,u,[v,x,w]));this.faceVertexUvs[0].push([y,A,G]);this.faces.push(new THREE.Face3(r,s,u,[x.clone(),D,w.clone()]));this.faceVertexUvs[0].push([A.clone(),E,G.clone()])}if(!1===f&&0<a)for(this.vertices.push(new THREE.Vector3(0,k,0)),l=0;l<d;l++)t=q[0][l],r=q[0][l+1],s=this.vertices.length-1,v=new THREE.Vector3(0,1,0),x=new THREE.Vector3(0,1,0),D=new THREE.Vector3(0,
1,0),y=n[0][l].clone(),A=n[0][l+1].clone(),E=new THREE.Vector2(A.x,0),this.faces.push(new THREE.Face3(t,r,s,[v,x,D])),this.faceVertexUvs[0].push([y,A,E]);if(!1===f&&0<b)for(this.vertices.push(new THREE.Vector3(0,-k,0)),l=0;l<d;l++)t=q[e][l+1],r=q[e][l],s=this.vertices.length-1,v=new THREE.Vector3(0,-1,0),x=new THREE.Vector3(0,-1,0),D=new THREE.Vector3(0,-1,0),y=n[e][l+1].clone(),A=n[e][l].clone(),E=new THREE.Vector2(A.x,1),this.faces.push(new THREE.Face3(t,r,s,[v,x,D])),this.faceVertexUvs[0].push([y,
A,E]);this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CylinderGeometry.prototype.constructor=THREE.CylinderGeometry;THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),this.type="ExtrudeGeometry",a=a instanceof Array?a:[a],this.addShapeList(a,b),this.computeFaceNormals())};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.constructor=THREE.ExtrudeGeometry;
THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||THREE.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=1,d=a.x-b.x,e=a.y-b.y,f=c.x-a.x,g=c.y-a.y,h=d*d+e*e;if(1E-10<Math.abs(d*g-e*f)){var k=Math.sqrt(h),l=Math.sqrt(f*f+g*g),h=b.x-e/k;b=b.y+d/k;f=((c.x-g/l-h)*g-(c.y+f/l-b)*f)/(d*g-e*f);c=h+d*f-a.x;a=b+e*f-a.y;d=c*c+a*a;if(2>=d)return new THREE.Vector2(c,a);d=Math.sqrt(d/2)}else a=!1,1E-10<d?1E-10<f&&(a=!0):
-1E-10>d?-1E-10>f&&(a=!0):Math.sign(e)==Math.sign(g)&&(a=!0),a?(c=-e,a=d,d=Math.sqrt(h)):(c=d,a=e,d=Math.sqrt(h/2));return new THREE.Vector2(c/d,a/d)}function e(a,b){var c,d;for(O=a.length;0<=--O;){c=O;d=O-1;0>d&&(d=a.length-1);for(var e=0,f=t+2*p,e=0;e<f;e++){var g=oa*e,h=oa*(e+1),k=b+c+g,g=b+d+g,l=b+d+h,h=b+c+h,k=k+U,g=g+U,l=l+U,h=h+U;I.faces.push(new THREE.Face3(k,g,h,null,null,x));I.faces.push(new THREE.Face3(g,l,h,null,null,x));k=D.generateSideWallUV(I,k,g,l,h);I.faceVertexUvs[0].push([k[0],
k[1],k[3]]);I.faceVertexUvs[0].push([k[1],k[2],k[3]])}}}function f(a,b,c){I.vertices.push(new THREE.Vector3(a,b,c))}function g(a,b,c){a+=U;b+=U;c+=U;I.faces.push(new THREE.Face3(a,b,c,null,null,v));a=D.generateTopUV(I,a,b,c);I.faceVertexUvs[0].push(a)}var h=void 0!==b.amount?b.amount:100,k=void 0!==b.bevelThickness?b.bevelThickness:6,l=void 0!==b.bevelSize?b.bevelSize:k-2,p=void 0!==b.bevelSegments?b.bevelSegments:3,q=void 0!==b.bevelEnabled?b.bevelEnabled:!0,n=void 0!==b.curveSegments?b.curveSegments:
12,t=void 0!==b.steps?b.steps:1,r=b.extrudePath,s,u=!1,v=b.material,x=b.extrudeMaterial,D=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,w,y,A,E;r&&(s=r.getSpacedPoints(t),u=!0,q=!1,w=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(r,t,!1),y=new THREE.Vector3,A=new THREE.Vector3,E=new THREE.Vector3);q||(l=k=p=0);var G,F,z,I=this,U=this.vertices.length,r=a.extractPoints(n),n=r.shape,M=r.holes;if(r=!THREE.Shape.Utils.isClockWise(n)){n=n.reverse();F=0;for(z=
M.length;F<z;F++)G=M[F],THREE.Shape.Utils.isClockWise(G)&&(M[F]=G.reverse());r=!1}var H=THREE.Shape.Utils.triangulateShape(n,M),L=n;F=0;for(z=M.length;F<z;F++)G=M[F],n=n.concat(G);var P,N,R,V,J,oa=n.length,ja,ha=H.length,r=[],O=0;R=L.length;P=R-1;for(N=O+1;O<R;O++,P++,N++)P===R&&(P=0),N===R&&(N=0),r[O]=d(L[O],L[P],L[N]);var ca=[],ba,qa=r.concat();F=0;for(z=M.length;F<z;F++){G=M[F];ba=[];O=0;R=G.length;P=R-1;for(N=O+1;O<R;O++,P++,N++)P===R&&(P=0),N===R&&(N=0),ba[O]=d(G[O],G[P],G[N]);ca.push(ba);qa=
qa.concat(ba)}for(P=0;P<p;P++){R=P/p;V=k*(1-R);N=l*Math.sin(R*Math.PI/2);O=0;for(R=L.length;O<R;O++)J=c(L[O],r[O],N),f(J.x,J.y,-V);F=0;for(z=M.length;F<z;F++)for(G=M[F],ba=ca[F],O=0,R=G.length;O<R;O++)J=c(G[O],ba[O],N),f(J.x,J.y,-V)}N=l;for(O=0;O<oa;O++)J=q?c(n[O],qa[O],N):n[O],u?(A.copy(w.normals[0]).multiplyScalar(J.x),y.copy(w.binormals[0]).multiplyScalar(J.y),E.copy(s[0]).add(A).add(y),f(E.x,E.y,E.z)):f(J.x,J.y,0);for(R=1;R<=t;R++)for(O=0;O<oa;O++)J=q?c(n[O],qa[O],N):n[O],u?(A.copy(w.normals[R]).multiplyScalar(J.x),
y.copy(w.binormals[R]).multiplyScalar(J.y),E.copy(s[R]).add(A).add(y),f(E.x,E.y,E.z)):f(J.x,J.y,h/t*R);for(P=p-1;0<=P;P--){R=P/p;V=k*(1-R);N=l*Math.sin(R*Math.PI/2);O=0;for(R=L.length;O<R;O++)J=c(L[O],r[O],N),f(J.x,J.y,h+V);F=0;for(z=M.length;F<z;F++)for(G=M[F],ba=ca[F],O=0,R=G.length;O<R;O++)J=c(G[O],ba[O],N),u?f(J.x,J.y+s[t-1].y,s[t-1].x+V):f(J.x,J.y,h+V)}(function(){if(q){var a;a=0*oa;for(O=0;O<ha;O++)ja=H[O],g(ja[2]+a,ja[1]+a,ja[0]+a);a=t+2*p;a*=oa;for(O=0;O<ha;O++)ja=H[O],g(ja[0]+a,ja[1]+a,ja[2]+
a)}else{for(O=0;O<ha;O++)ja=H[O],g(ja[2],ja[1],ja[0]);for(O=0;O<ha;O++)ja=H[O],g(ja[0]+oa*t,ja[1]+oa*t,ja[2]+oa*t)}})();(function(){var a=0;e(L,a);a+=L.length;F=0;for(z=M.length;F<z;F++)G=M[F],e(G,a),a+=G.length})()};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d){a=a.vertices;b=a[b];c=a[c];d=a[d];return[new THREE.Vector2(b.x,b.y),new THREE.Vector2(c.x,c.y),new THREE.Vector2(d.x,d.y)]},generateSideWallUV:function(a,b,c,d,e){a=a.vertices;b=a[b];c=a[c];d=a[d];e=a[e];return.01>Math.abs(b.y-c.y)?[new THREE.Vector2(b.x,1-b.z),new THREE.Vector2(c.x,1-c.z),new THREE.Vector2(d.x,1-d.z),new THREE.Vector2(e.x,1-e.z)]:[new THREE.Vector2(b.y,1-b.z),new THREE.Vector2(c.y,1-c.z),new THREE.Vector2(d.y,
1-d.z),new THREE.Vector2(e.y,1-e.z)]}};THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);this.type="ShapeGeometry";!1===a instanceof Array&&(a=[a]);this.addShapeList(a,b);this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.constructor=THREE.ShapeGeometry;THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,g,h=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var k=e.shape,l=e.holes;if(!THREE.Shape.Utils.isClockWise(k))for(k=k.reverse(),e=0,f=l.length;e<f;e++)g=l[e],THREE.Shape.Utils.isClockWise(g)&&(l[e]=g.reverse());var p=THREE.Shape.Utils.triangulateShape(k,l);e=0;for(f=l.length;e<f;e++)g=l[e],
k=k.concat(g);l=k.length;f=p.length;for(e=0;e<l;e++)g=k[e],this.vertices.push(new THREE.Vector3(g.x,g.y,0));for(e=0;e<f;e++)l=p[e],k=l[0]+h,g=l[1]+h,l=l[2]+h,this.faces.push(new THREE.Face3(k,g,l,null,null,c)),this.faceVertexUvs[0].push(d.generateTopUV(this,k,g,l))};
THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=b||12;c=c||0;d=d||2*Math.PI;for(var e=1/(a.length-1),f=1/b,g=0,h=b;g<=h;g++)for(var k=c+g*f*d,l=Math.cos(k),p=Math.sin(k),k=0,q=a.length;k<q;k++){var n=a[k],t=new THREE.Vector3;t.x=l*n.x-p*n.y;t.y=p*n.x+l*n.y;t.z=n.z;this.vertices.push(t)}c=a.length;g=0;for(h=b;g<h;g++)for(k=0,q=a.length-1;k<q;k++){b=p=k+c*g;d=p+c;var l=p+1+c,p=p+1,n=g*f,t=k*e,r=
n+f,s=t+e;this.faces.push(new THREE.Face3(b,d,p));this.faceVertexUvs[0].push([new THREE.Vector2(n,t),new THREE.Vector2(r,t),new THREE.Vector2(n,s)]);this.faces.push(new THREE.Face3(d,l,p));this.faceVertexUvs[0].push([new THREE.Vector2(r,t),new THREE.Vector2(r,s),new THREE.Vector2(n,s)])}this.mergeVertices();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.LatheGeometry.prototype.constructor=THREE.LatheGeometry;
THREE.PlaneGeometry=function(a,b,c,d){console.info("THREE.PlaneGeometry: Consider using THREE.PlaneBufferGeometry for lower memory footprint.");THREE.Geometry.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new THREE.PlaneBufferGeometry(a,b,c,d))};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PlaneGeometry.prototype.constructor=THREE.PlaneGeometry;
THREE.PlaneBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,f=b/2;c=c||1;d=d||1;var g=c+1,h=d+1,k=a/c,l=b/d;b=new Float32Array(g*h*3);a=new Float32Array(g*h*3);for(var p=new Float32Array(g*h*2),q=0,n=0,t=0;t<h;t++)for(var r=t*l-f,s=0;s<g;s++)b[q]=s*k-e,b[q+1]=-r,a[q+2]=1,p[n]=s/c,p[n+1]=1-t/d,q+=3,n+=2;q=0;e=new (65535<b.length/3?Uint32Array:Uint16Array)(c*d*6);for(t=0;t<d;t++)for(s=
0;s<c;s++)f=s+g*(t+1),h=s+1+g*(t+1),k=s+1+g*t,e[q]=s+g*t,e[q+1]=f,e[q+2]=k,e[q+3]=f,e[q+4]=h,e[q+5]=k,q+=6;this.addAttribute("index",new THREE.BufferAttribute(e,1));this.addAttribute("position",new THREE.BufferAttribute(b,3));this.addAttribute("normal",new THREE.BufferAttribute(a,3));this.addAttribute("uv",new THREE.BufferAttribute(p,2))};THREE.PlaneBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.PlaneBufferGeometry.prototype.constructor=THREE.PlaneBufferGeometry;
THREE.RingGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||0;b=b||50;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):8;var g,h=[],k=a,l=(b-a)/d;for(a=0;a<d+1;a++){for(g=0;g<c+1;g++){var p=new THREE.Vector3,q=e+g/c*f;p.x=k*Math.cos(q);p.y=k*Math.sin(q);this.vertices.push(p);h.push(new THREE.Vector2((p.x/b+1)/2,
(p.y/b+1)/2))}k+=l}b=new THREE.Vector3(0,0,1);for(a=0;a<d;a++)for(e=a*(c+1),g=0;g<c;g++)f=q=g+e,l=q+c+1,p=q+c+2,this.faces.push(new THREE.Face3(f,l,p,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[l].clone(),h[p].clone()]),f=q,l=q+c+2,p=q+1,this.faces.push(new THREE.Face3(f,l,p,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[l].clone(),h[p].clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,k)};
THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.RingGeometry.prototype.constructor=THREE.RingGeometry;
THREE.SphereGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h,k,l=[],p=[];for(k=0;k<=c;k++){var q=[],n=[];for(h=0;h<=b;h++){var t=h/b,r=k/c,s=new THREE.Vector3;s.x=-a*Math.cos(d+t*e)*Math.sin(f+r*g);
s.y=a*Math.cos(f+r*g);s.z=a*Math.sin(d+t*e)*Math.sin(f+r*g);this.vertices.push(s);q.push(this.vertices.length-1);n.push(new THREE.Vector2(t,1-r))}l.push(q);p.push(n)}for(k=0;k<c;k++)for(h=0;h<b;h++){d=l[k][h+1];e=l[k][h];f=l[k+1][h];g=l[k+1][h+1];var q=this.vertices[d].clone().normalize(),n=this.vertices[e].clone().normalize(),t=this.vertices[f].clone().normalize(),r=this.vertices[g].clone().normalize(),s=p[k][h+1].clone(),u=p[k][h].clone(),v=p[k+1][h].clone(),x=p[k+1][h+1].clone();Math.abs(this.vertices[d].y)===
a?(s.x=(s.x+u.x)/2,this.faces.push(new THREE.Face3(d,f,g,[q,t,r])),this.faceVertexUvs[0].push([s,v,x])):Math.abs(this.vertices[f].y)===a?(v.x=(v.x+x.x)/2,this.faces.push(new THREE.Face3(d,e,f,[q,n,t])),this.faceVertexUvs[0].push([s,u,v])):(this.faces.push(new THREE.Face3(d,e,g,[q,n,r])),this.faceVertexUvs[0].push([s,u,x]),this.faces.push(new THREE.Face3(e,f,g,[n.clone(),t,r.clone()])),this.faceVertexUvs[0].push([u.clone(),v,x.clone()]))}this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,
a)};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.SphereGeometry.prototype.constructor=THREE.SphereGeometry;THREE.TextGeometry=function(a,b){b=b||{};var c=THREE.FontUtils.generateShapes(a,b);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b);this.type="TextGeometry"};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TextGeometry.prototype.constructor=THREE.TextGeometry;
THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=b||40;c=c||8;d=d||6;e=e||2*Math.PI;for(var f=new THREE.Vector3,g=[],h=[],k=0;k<=c;k++)for(var l=0;l<=d;l++){var p=l/d*e,q=k/c*Math.PI*2;f.x=a*Math.cos(p);f.y=a*Math.sin(p);var n=new THREE.Vector3;n.x=(a+b*Math.cos(q))*Math.cos(p);n.y=(a+b*Math.cos(q))*Math.sin(p);n.z=b*Math.sin(q);this.vertices.push(n);g.push(new THREE.Vector2(l/
d,k/c));h.push(n.clone().sub(f).normalize())}for(k=1;k<=c;k++)for(l=1;l<=d;l++)a=(d+1)*k+l-1,b=(d+1)*(k-1)+l-1,e=(d+1)*(k-1)+l,f=(d+1)*k+l,p=new THREE.Face3(a,b,f,[h[a].clone(),h[b].clone(),h[f].clone()]),this.faces.push(p),this.faceVertexUvs[0].push([g[a].clone(),g[b].clone(),g[f].clone()]),p=new THREE.Face3(b,e,f,[h[b].clone(),h[e].clone(),h[f].clone()]),this.faces.push(p),this.faceVertexUvs[0].push([g[b].clone(),g[e].clone(),g[f].clone()]);this.computeFaceNormals()};
THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusGeometry.prototype.constructor=THREE.TorusGeometry;
THREE.TorusKnotGeometry=function(a,b,c,d,e,f,g){function h(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a);a*=b/c;b=Math.cos(a);f*=d*(2+b)*.5;g=d*(2+b)*g*.5;d=e*d*Math.sin(a)*.5;return new THREE.Vector3(f,g,d)}THREE.Geometry.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,p:e,q:f,heightScale:g};a=a||100;b=b||40;c=c||64;d=d||8;e=e||2;f=f||3;g=g||1;for(var k=Array(c),l=new THREE.Vector3,p=new THREE.Vector3,q=new THREE.Vector3,n=0;n<c;++n){k[n]=
Array(d);var t=n/c*2*e*Math.PI,r=h(t,f,e,a,g),t=h(t+.01,f,e,a,g);l.subVectors(t,r);p.addVectors(t,r);q.crossVectors(l,p);p.crossVectors(q,l);q.normalize();p.normalize();for(t=0;t<d;++t){var s=t/d*2*Math.PI,u=-b*Math.cos(s),s=b*Math.sin(s),v=new THREE.Vector3;v.x=r.x+u*p.x+s*q.x;v.y=r.y+u*p.y+s*q.y;v.z=r.z+u*p.z+s*q.z;k[n][t]=this.vertices.push(v)-1}}for(n=0;n<c;++n)for(t=0;t<d;++t)e=(n+1)%c,f=(t+1)%d,a=k[n][t],b=k[e][t],e=k[e][f],f=k[n][f],g=new THREE.Vector2(n/c,t/d),l=new THREE.Vector2((n+1)/c,
t/d),p=new THREE.Vector2((n+1)/c,(t+1)/d),q=new THREE.Vector2(n/c,(t+1)/d),this.faces.push(new THREE.Face3(a,b,f)),this.faceVertexUvs[0].push([g,l,q]),this.faces.push(new THREE.Face3(b,e,f)),this.faceVertexUvs[0].push([l.clone(),p,q.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusKnotGeometry.prototype.constructor=THREE.TorusKnotGeometry;
THREE.TubeGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.type="TubeGeometry";this.parameters={path:a,segments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;f=f||THREE.TubeGeometry.NoTaper;var g=[],h,k,l=b+1,p,q,n,t,r,s=new THREE.Vector3,u,v,x;u=new THREE.TubeGeometry.FrenetFrames(a,b,e);v=u.normals;x=u.binormals;this.tangents=u.tangents;this.normals=v;this.binormals=x;for(u=0;u<l;u++)for(g[u]=[],p=u/(l-1),r=a.getPointAt(p),h=v[u],k=x[u],n=c*f(p),p=0;p<d;p++)q=
p/d*2*Math.PI,t=-n*Math.cos(q),q=n*Math.sin(q),s.copy(r),s.x+=t*h.x+q*k.x,s.y+=t*h.y+q*k.y,s.z+=t*h.z+q*k.z,g[u][p]=this.vertices.push(new THREE.Vector3(s.x,s.y,s.z))-1;for(u=0;u<b;u++)for(p=0;p<d;p++)f=e?(u+1)%b:u+1,l=(p+1)%d,a=g[u][p],c=g[f][p],f=g[f][l],l=g[u][l],s=new THREE.Vector2(u/b,p/d),v=new THREE.Vector2((u+1)/b,p/d),x=new THREE.Vector2((u+1)/b,(p+1)/d),h=new THREE.Vector2(u/b,(p+1)/d),this.faces.push(new THREE.Face3(a,c,l)),this.faceVertexUvs[0].push([s,v,h]),this.faces.push(new THREE.Face3(c,
f,l)),this.faceVertexUvs[0].push([v.clone(),x,h.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TubeGeometry.prototype.constructor=THREE.TubeGeometry;THREE.TubeGeometry.NoTaper=function(a){return 1};THREE.TubeGeometry.SinusoidalTaper=function(a){return Math.sin(Math.PI*a)};
THREE.TubeGeometry.FrenetFrames=function(a,b,c){var d=new THREE.Vector3,e=[],f=[],g=[],h=new THREE.Vector3,k=new THREE.Matrix4;b+=1;var l,p,q;this.tangents=e;this.normals=f;this.binormals=g;for(l=0;l<b;l++)p=l/(b-1),e[l]=a.getTangentAt(p),e[l].normalize();f[0]=new THREE.Vector3;g[0]=new THREE.Vector3;a=Number.MAX_VALUE;l=Math.abs(e[0].x);p=Math.abs(e[0].y);q=Math.abs(e[0].z);l<=a&&(a=l,d.set(1,0,0));p<=a&&(a=p,d.set(0,1,0));q<=a&&d.set(0,0,1);h.crossVectors(e[0],d).normalize();f[0].crossVectors(e[0],
h);g[0].crossVectors(e[0],f[0]);for(l=1;l<b;l++)f[l]=f[l-1].clone(),g[l]=g[l-1].clone(),h.crossVectors(e[l-1],e[l]),1E-4<h.length()&&(h.normalize(),d=Math.acos(THREE.Math.clamp(e[l-1].dot(e[l]),-1,1)),f[l].applyMatrix4(k.makeRotationAxis(h,d))),g[l].crossVectors(e[l],f[l]);if(c)for(d=Math.acos(THREE.Math.clamp(f[0].dot(f[b-1]),-1,1)),d/=b-1,0<e[0].dot(h.crossVectors(f[0],f[b-1]))&&(d=-d),l=1;l<b;l++)f[l].applyMatrix4(k.makeRotationAxis(e[l],d*l)),g[l].crossVectors(e[l],f[l])};
THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=k.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+.5;a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5;b.uv=new THREE.Vector2(c,1-a);return b}function f(a,b,c){var d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()]);k.faces.push(d);u.copy(a).add(b).add(c).divideScalar(3);d=Math.atan2(u.z,-u.x);k.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),h(c.uv,c,d)])}function g(a,
b){for(var c=Math.pow(2,b),d=e(k.vertices[a.a]),g=e(k.vertices[a.b]),h=e(k.vertices[a.c]),l=[],n=0;n<=c;n++){l[n]=[];for(var p=e(d.clone().lerp(h,n/c)),q=e(g.clone().lerp(h,n/c)),s=c-n,r=0;r<=s;r++)l[n][r]=0==r&&n==c?p:e(p.clone().lerp(q,r/s))}for(n=0;n<c;n++)for(r=0;r<2*(c-n)-1;r++)d=Math.floor(r/2),0==r%2?f(l[n][d+1],l[n+1][d],l[n][d]):f(l[n][d+1],l[n+1][d+1],l[n+1][d])}function h(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/2/Math.PI+.5,a.y));return a.clone()}
THREE.Geometry.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;for(var k=this,l=0,p=a.length;l<p;l+=3)e(new THREE.Vector3(a[l],a[l+1],a[l+2]));a=this.vertices;for(var q=[],n=l=0,p=b.length;l<p;l+=3,n++){var t=a[b[l]],r=a[b[l+1]],s=a[b[l+2]];q[n]=new THREE.Face3(t.index,r.index,s.index,[t.clone(),r.clone(),s.clone()])}for(var u=new THREE.Vector3,l=0,p=q.length;l<p;l++)g(q[l],d);l=0;for(p=this.faceVertexUvs[0].length;l<p;l++)b=this.faceVertexUvs[0][l],
d=b[0].x,a=b[1].x,q=b[2].x,n=Math.max(d,Math.max(a,q)),t=Math.min(d,Math.min(a,q)),.9<n&&.1>t&&(.2>d&&(b[0].x+=1),.2>a&&(b[1].x+=1),.2>q&&(b[2].x+=1));l=0;for(p=this.vertices.length;l<p;l++)this.vertices[l].multiplyScalar(c);this.mergeVertices();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PolyhedronGeometry.prototype.constructor=THREE.PolyhedronGeometry;
THREE.DodecahedronGeometry=function(a,b){this.parameters={radius:a,detail:b};var c=(1+Math.sqrt(5))/2,d=1/c;THREE.PolyhedronGeometry.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,
11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b)};THREE.DodecahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.DodecahedronGeometry.prototype.constructor=THREE.DodecahedronGeometry;
THREE.IcosahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b}};THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry.prototype.constructor=THREE.IcosahedronGeometry;THREE.OctahedronGeometry=function(a,b){this.parameters={radius:a,detail:b};THREE.PolyhedronGeometry.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b}};THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.OctahedronGeometry.prototype.constructor=THREE.OctahedronGeometry;
THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b}};THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TetrahedronGeometry.prototype.constructor=THREE.TetrahedronGeometry;
THREE.ParametricGeometry=function(a,b,c){THREE.Geometry.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};var d=this.vertices,e=this.faces,f=this.faceVertexUvs[0],g,h,k,l,p=b+1;for(g=0;g<=c;g++)for(l=g/c,h=0;h<=b;h++)k=h/b,k=a(k,l),d.push(k);var q,n,t,r;for(g=0;g<c;g++)for(h=0;h<b;h++)a=g*p+h,d=g*p+h+1,l=(g+1)*p+h+1,k=(g+1)*p+h,q=new THREE.Vector2(h/b,g/c),n=new THREE.Vector2((h+1)/b,g/c),t=new THREE.Vector2((h+1)/b,(g+1)/c),r=new THREE.Vector2(h/b,(g+1)/c),e.push(new THREE.Face3(a,
d,k)),f.push([q,n,r]),e.push(new THREE.Face3(d,l,k)),f.push([n.clone(),t,r.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ParametricGeometry.prototype.constructor=THREE.ParametricGeometry;
THREE.AxisHelper=function(a){a=a||1;var b=new Float32Array([0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a]),c=new Float32Array([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1]);a=new THREE.BufferGeometry;a.addAttribute("position",new THREE.BufferAttribute(b,3));a.addAttribute("color",new THREE.BufferAttribute(c,3));b=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.Line.call(this,a,b,THREE.LinePieces)};THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype);
THREE.AxisHelper.prototype.constructor=THREE.AxisHelper;
THREE.ArrowHelper=function(){var a=new THREE.Geometry;a.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,1,0));var b=new THREE.CylinderGeometry(0,.5,1,5,1);b.applyMatrix((new THREE.Matrix4).makeTranslation(0,-.5,0));return function(c,d,e,f,g,h){THREE.Object3D.call(this);void 0===f&&(f=16776960);void 0===e&&(e=1);void 0===g&&(g=.2*e);void 0===h&&(h=.2*g);this.position.copy(d);this.line=new THREE.Line(a,new THREE.LineBasicMaterial({color:f}));this.line.matrixAutoUpdate=!1;this.add(this.line);
this.cone=new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:f}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(c);this.setLength(e,g,h)}}();THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.constructor=THREE.ArrowHelper;
THREE.ArrowHelper.prototype.setDirection=function(){var a=new THREE.Vector3,b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();THREE.ArrowHelper.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,a-b,1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};
THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.set(a);this.cone.material.color.set(a)};THREE.BoxHelper=function(a){var b=new THREE.BufferGeometry;b.addAttribute("position",new THREE.BufferAttribute(new Float32Array(72),3));THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:16776960}),THREE.LinePieces);void 0!==a&&this.update(a)};THREE.BoxHelper.prototype=Object.create(THREE.Line.prototype);THREE.BoxHelper.prototype.constructor=THREE.BoxHelper;
THREE.BoxHelper.prototype.update=function(a){var b=a.geometry;null===b.boundingBox&&b.computeBoundingBox();var c=b.boundingBox.min,b=b.boundingBox.max,d=this.geometry.attributes.position.array;d[0]=b.x;d[1]=b.y;d[2]=b.z;d[3]=c.x;d[4]=b.y;d[5]=b.z;d[6]=c.x;d[7]=b.y;d[8]=b.z;d[9]=c.x;d[10]=c.y;d[11]=b.z;d[12]=c.x;d[13]=c.y;d[14]=b.z;d[15]=b.x;d[16]=c.y;d[17]=b.z;d[18]=b.x;d[19]=c.y;d[20]=b.z;d[21]=b.x;d[22]=b.y;d[23]=b.z;d[24]=b.x;d[25]=b.y;d[26]=c.z;d[27]=c.x;d[28]=b.y;d[29]=c.z;d[30]=c.x;d[31]=b.y;
d[32]=c.z;d[33]=c.x;d[34]=c.y;d[35]=c.z;d[36]=c.x;d[37]=c.y;d[38]=c.z;d[39]=b.x;d[40]=c.y;d[41]=c.z;d[42]=b.x;d[43]=c.y;d[44]=c.z;d[45]=b.x;d[46]=b.y;d[47]=c.z;d[48]=b.x;d[49]=b.y;d[50]=b.z;d[51]=b.x;d[52]=b.y;d[53]=c.z;d[54]=c.x;d[55]=b.y;d[56]=b.z;d[57]=c.x;d[58]=b.y;d[59]=c.z;d[60]=c.x;d[61]=c.y;d[62]=b.z;d[63]=c.x;d[64]=c.y;d[65]=c.z;d[66]=b.x;d[67]=c.y;d[68]=b.z;d[69]=b.x;d[70]=c.y;d[71]=c.z;this.geometry.attributes.position.needsUpdate=!0;this.geometry.computeBoundingSphere();this.matrix=a.matrixWorld;
this.matrixAutoUpdate=!1};THREE.BoundingBoxHelper=function(a,b){var c=void 0!==b?b:8947848;this.object=a;this.box=new THREE.Box3;THREE.Mesh.call(this,new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}))};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.constructor=THREE.BoundingBoxHelper;THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);this.box.size(this.scale);this.box.center(this.position)};
THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.vertices.push(new THREE.Vector3);d.colors.push(new THREE.Color(b));void 0===f[a]&&(f[a]=[]);f[a].push(d.vertices.length-1)}var d=new THREE.Geometry,e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),f={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);
b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);THREE.Line.call(this,d,e,THREE.LinePieces);this.camera=a;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=f;this.update()};
THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype);THREE.CameraHelper.prototype.constructor=THREE.CameraHelper;
THREE.CameraHelper.prototype.update=function(){var a,b,c=new THREE.Vector3,d=new THREE.Camera,e=function(e,g,h,k){c.set(g,h,k).unproject(d);e=b[e];if(void 0!==e)for(g=0,h=e.length;g<h;g++)a.vertices[e[g]].copy(c)};return function(){a=this.geometry;b=this.pointMap;d.projectionMatrix.copy(this.camera.projectionMatrix);e("c",0,0,-1);e("t",0,0,1);e("n1",-1,-1,-1);e("n2",1,-1,-1);e("n3",-1,1,-1);e("n4",1,1,-1);e("f1",-1,-1,1);e("f2",1,-1,1);e("f3",-1,1,1);e("f4",1,1,1);e("u1",.7,1.1,-1);e("u2",-.7,1.1,
-1);e("u3",0,2,-1);e("cf1",-1,0,1);e("cf2",1,0,1);e("cf3",0,-1,1);e("cf4",0,1,1);e("cn1",-1,0,-1);e("cn2",1,0,-1);e("cn3",0,-1,-1);e("cn4",0,1,-1);a.verticesNeedUpdate=!0}}();
THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;b=b||1;var c=new THREE.Geometry;c.vertices.push(new THREE.Vector3(-b,b,0),new THREE.Vector3(b,b,0),new THREE.Vector3(b,-b,0),new THREE.Vector3(-b,-b,0),new THREE.Vector3(-b,b,0));var d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.lightPlane=new THREE.Line(c,d);this.add(this.lightPlane);
c=new THREE.Geometry;c.vertices.push(new THREE.Vector3,new THREE.Vector3);d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine=new THREE.Line(c,d);this.add(this.targetLine);this.update()};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.DirectionalLightHelper.prototype.constructor=THREE.DirectionalLightHelper;
THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};
THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);this.lightPlane.lookAt(c);this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine.geometry.vertices[1].copy(c);this.targetLine.geometry.verticesNeedUpdate=!0;this.targetLine.material.color.copy(this.lightPlane.material.color)}}();
THREE.EdgesHelper=function(a,b,c){b=void 0!==b?b:16777215;c=Math.cos(THREE.Math.degToRad(void 0!==c?c:1));var d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry,k;a.geometry instanceof THREE.BufferGeometry?(k=new THREE.Geometry,k.fromBufferGeometry(a.geometry)):k=a.geometry.clone();k.mergeVertices();k.computeFaceNormals();var l=k.vertices;k=k.faces;for(var p=0,q=0,n=k.length;q<n;q++)for(var t=k[q],r=0;3>r;r++){d[0]=t[g[r]];d[1]=t[g[(r+1)%3]];d.sort(f);var s=d.toString();
void 0===e[s]?(e[s]={vert1:d[0],vert2:d[1],face1:q,face2:void 0},p++):e[s].face2=q}d=new Float32Array(6*p);f=0;for(s in e)if(g=e[s],void 0===g.face2||k[g.face1].normal.dot(k[g.face2].normal)<=c)p=l[g.vert1],d[f++]=p.x,d[f++]=p.y,d[f++]=p.z,p=l[g.vert2],d[f++]=p.x,d[f++]=p.y,d[f++]=p.z;h.addAttribute("position",new THREE.BufferAttribute(d,3));THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:b}),THREE.LinePieces);this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1};
THREE.EdgesHelper.prototype=Object.create(THREE.Line.prototype);THREE.EdgesHelper.prototype.constructor=THREE.EdgesHelper;
THREE.FaceNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=new THREE.Geometry;c=0;for(var e=this.object.geometry.faces.length;c<e;c++)b.vertices.push(new THREE.Vector3,new THREE.Vector3);THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:a,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.FaceNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper.prototype.constructor=THREE.FaceNormalsHelper;
THREE.FaceNormalsHelper.prototype.update=function(){var a=this.geometry.vertices,b=this.object,c=b.geometry.vertices,d=b.geometry.faces,e=b.matrixWorld;b.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(e);for(var f=b=0,g=d.length;b<g;b++,f+=2){var h=d[b];a[f].copy(c[h.a]).add(c[h.b]).add(c[h.c]).divideScalar(3).applyMatrix4(e);a[f+1].copy(h.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size).add(a[f])}this.geometry.verticesNeedUpdate=!0;return this};
THREE.GridHelper=function(a,b){var c=new THREE.Geometry,d=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924);this.color2=new THREE.Color(8947848);for(var e=-a;e<=a;e+=b){c.vertices.push(new THREE.Vector3(-a,0,e),new THREE.Vector3(a,0,e),new THREE.Vector3(e,0,-a),new THREE.Vector3(e,0,a));var f=0===e?this.color1:this.color2;c.colors.push(f,f,f,f)}THREE.Line.call(this,c,d,THREE.LinePieces)};THREE.GridHelper.prototype=Object.create(THREE.Line.prototype);
THREE.GridHelper.prototype.constructor=THREE.GridHelper;THREE.GridHelper.prototype.setColors=function(a,b){this.color1.set(a);this.color2.set(b);this.geometry.colorsNeedUpdate=!0};
THREE.HemisphereLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new THREE.Color,new THREE.Color];var c=new THREE.SphereGeometry(b,4,2);c.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));for(var d=0;8>d;d++)c.faces[d].color=this.colors[4>d?0:1];d=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(c,d);this.add(this.lightSphere);
this.update()};THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.constructor=THREE.HemisphereLightHelper;THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose();this.lightSphere.material.dispose()};
THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0}}();
THREE.PointLightHelper=function(a,b){this.light=a;this.light.updateMatrixWorld();var c=new THREE.SphereGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,c,d);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.PointLightHelper.prototype.constructor=THREE.PointLightHelper;
THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};
THREE.SkeletonHelper=function(a){this.bones=this.getBoneList(a);for(var b=new THREE.Geometry,c=0;c<this.bones.length;c++)this.bones[c].parent instanceof THREE.Bone&&(b.vertices.push(new THREE.Vector3),b.vertices.push(new THREE.Vector3),b.colors.push(new THREE.Color(0,0,1)),b.colors.push(new THREE.Color(0,1,0)));c=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors,depthTest:!1,depthWrite:!1,transparent:!0});THREE.Line.call(this,b,c,THREE.LinePieces);this.root=a;this.matrix=a.matrixWorld;
this.matrixAutoUpdate=!1;this.update()};THREE.SkeletonHelper.prototype=Object.create(THREE.Line.prototype);THREE.SkeletonHelper.prototype.constructor=THREE.SkeletonHelper;THREE.SkeletonHelper.prototype.getBoneList=function(a){var b=[];a instanceof THREE.Bone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,this.getBoneList(a.children[c]));return b};
THREE.SkeletonHelper.prototype.update=function(){for(var a=this.geometry,b=(new THREE.Matrix4).getInverse(this.root.matrixWorld),c=new THREE.Matrix4,d=0,e=0;e<this.bones.length;e++){var f=this.bones[e];f.parent instanceof THREE.Bone&&(c.multiplyMatrices(b,f.matrixWorld),a.vertices[d].setFromMatrixPosition(c),c.multiplyMatrices(b,f.parent.matrixWorld),a.vertices[d+1].setFromMatrixPosition(c),d+=2)}a.verticesNeedUpdate=!0;a.computeBoundingSphere()};
THREE.SpotLightHelper=function(a){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;a=new THREE.CylinderGeometry(0,1,1,8,1,!0);a.applyMatrix((new THREE.Matrix4).makeTranslation(0,-.5,0));a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));var b=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});this.cone=new THREE.Mesh(a,b);this.add(this.cone);this.update()};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.constructor=THREE.SpotLightHelper;THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};
THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){var c=this.light.distance?this.light.distance:1E4,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();
THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;b=void 0!==c?c:16711680;d=void 0!==d?d:1;c=new THREE.Geometry;a=a.geometry.faces;for(var e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexNormals.length;g<h;g++)c.vertices.push(new THREE.Vector3,new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.VertexNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexNormalsHelper.prototype.constructor=THREE.VertexNormalsHelper;
THREE.VertexNormalsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){a=["a","b","c","d"];this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var d=this.geometry.vertices,e=this.object.geometry.vertices,f=this.object.geometry.faces,g=this.object.matrixWorld,h=0,k=0,l=f.length;k<l;k++)for(var p=f[k],q=0,n=p.vertexNormals.length;q<n;q++){var t=p.vertexNormals[q];d[h].copy(e[p[a[q]]]).applyMatrix4(g);b.copy(t).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
b.add(d[h]);h+=1;d[h].copy(b);h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();
THREE.VertexTangentsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;b=void 0!==c?c:255;d=void 0!==d?d:1;c=new THREE.Geometry;a=a.geometry.faces;for(var e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexTangents.length;g<h;g++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.update()};THREE.VertexTangentsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.constructor=THREE.VertexTangentsHelper;
THREE.VertexTangentsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){a=["a","b","c","d"];this.object.updateMatrixWorld(!0);for(var d=this.geometry.vertices,e=this.object.geometry.vertices,f=this.object.geometry.faces,g=this.object.matrixWorld,h=0,k=0,l=f.length;k<l;k++)for(var p=f[k],q=0,n=p.vertexTangents.length;q<n;q++){var t=p.vertexTangents[q];d[h].copy(e[p[a[q]]]).applyMatrix4(g);b.copy(t).transformDirection(g).multiplyScalar(this.size);b.add(d[h]);h+=1;d[h].copy(b);
h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();
THREE.WireframeHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry;if(a.geometry instanceof THREE.Geometry){for(var k=a.geometry.vertices,l=a.geometry.faces,p=0,q=new Uint32Array(6*l.length),n=0,t=l.length;n<t;n++)for(var r=l[n],s=0;3>s;s++){d[0]=r[g[s]];d[1]=r[g[(s+1)%3]];d.sort(f);var u=d.toString();void 0===e[u]&&(q[2*p]=d[0],q[2*p+1]=d[1],e[u]=!0,p++)}d=new Float32Array(6*p);n=0;for(t=p;n<t;n++)for(s=0;2>s;s++)p=
k[q[2*n+s]],g=6*n+3*s,d[g+0]=p.x,d[g+1]=p.y,d[g+2]=p.z;h.addAttribute("position",new THREE.BufferAttribute(d,3))}else if(a.geometry instanceof THREE.BufferGeometry){if(void 0!==a.geometry.attributes.index){k=a.geometry.attributes.position.array;t=a.geometry.attributes.index.array;l=a.geometry.drawcalls;p=0;0===l.length&&(l=[{count:t.length,index:0,start:0}]);for(var q=new Uint32Array(2*t.length),r=0,v=l.length;r<v;++r)for(var s=l[r].start,u=l[r].count,g=l[r].index,n=s,x=s+u;n<x;n+=3)for(s=0;3>s;s++)d[0]=
g+t[n+s],d[1]=g+t[n+(s+1)%3],d.sort(f),u=d.toString(),void 0===e[u]&&(q[2*p]=d[0],q[2*p+1]=d[1],e[u]=!0,p++);d=new Float32Array(6*p);n=0;for(t=p;n<t;n++)for(s=0;2>s;s++)g=6*n+3*s,p=3*q[2*n+s],d[g+0]=k[p],d[g+1]=k[p+1],d[g+2]=k[p+2]}else for(k=a.geometry.attributes.position.array,p=k.length/3,q=p/3,d=new Float32Array(6*p),n=0,t=q;n<t;n++)for(s=0;3>s;s++)g=18*n+6*s,q=9*n+3*s,d[g+0]=k[q],d[g+1]=k[q+1],d[g+2]=k[q+2],p=9*n+(s+1)%3*3,d[g+3]=k[p],d[g+4]=k[p+1],d[g+5]=k[p+2];h.addAttribute("position",new THREE.BufferAttribute(d,
3))}THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),THREE.LinePieces);this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1};THREE.WireframeHelper.prototype=Object.create(THREE.Line.prototype);THREE.WireframeHelper.prototype.constructor=THREE.WireframeHelper;THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(a){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);THREE.ImmediateRenderObject.prototype.constructor=THREE.ImmediateRenderObject;
THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphBlendMesh.prototype.constructor=THREE.MorphBlendMesh;
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={startFrame:b,endFrame:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var k=h[1];d[k]||(d[k]={start:Infinity,end:-Infinity});h=d[k];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=k)}}for(k in d)h=d[k],this.createAnimation(k,h.start,h.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):THREE.warn("THREE.MorphBlendMesh: animation["+a+"] undefined in .playAnimation()")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.startFrame+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;
f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);this.morphTargetInfluences[d.currentFrame]=e*g;this.morphTargetInfluences[d.lastFrame]=(1-e)*g}}};
/*
* A bunch of parametric curves
* @author zz85
*
* Formulas collected from various sources
*	http://mathworld.wolfram.com/HeartCurve.html
*	http://mathdl.maa.org/images/upload_library/23/stemkoski/knots/page6.html
*	http://en.wikipedia.org/wiki/Viviani%27s_curve
*	http://mathdl.maa.org/images/upload_library/23/stemkoski/knots/page4.html
*	http://www.mi.sanu.ac.rs/vismath/taylorapril2011/Taylor.pdf
*	http://prideout.net/blog/?p=44
*/
// Lets define some curves
THREE.Curves = {};
THREE.Curves.GrannyKnot = THREE.Curve.create( function() {},
function(t) {
t = 2 * Math.PI * t;
var x = -0.22 * Math.cos(t) - 1.28 * Math.sin(t) - 0.44 * Math.cos(3 * t) - 0.78 * Math.sin(3 * t);
var y = -0.1 * Math.cos(2 * t) - 0.27 * Math.sin(2 * t) + 0.38 * Math.cos(4 * t) + 0.46 * Math.sin(4 * t);
var z = 0.7 * Math.cos(3 * t) - 0.4 * Math.sin(3 * t);
return new THREE.Vector3(x, y, z).multiplyScalar(20);
}
);
THREE.Curves.HeartCurve = THREE.Curve.create(
function(s) {
this.scale = (s === undefined) ? 5 : s;
},
function(t) {
t *= 2 * Math.PI;
var tx = 16 * Math.pow(Math.sin(t), 3);
var ty = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t), tz = 0;
return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
}
);
// Viviani's Curve
THREE.Curves.VivianiCurve = THREE.Curve.create(
function(radius) {
this.radius = radius;
},
function(t) {
t = t * 4 * Math.PI; // Normalized to 0..1
var a = this.radius / 2;
var tx = a * (1 + Math.cos(t)),
ty = a * Math.sin(t),
tz = 2 * a * Math.sin(t / 2);
return new THREE.Vector3(tx, ty, tz);
}
);
THREE.Curves.KnotCurve = THREE.Curve.create(
function() {
},
function(t) {
t *= 2 * Math.PI;
var R = 10;
var s = 50;
var tx = s * Math.sin(t),
ty = Math.cos(t) * (R + s * Math.cos(t)),
tz = Math.sin(t) * (R + s * Math.cos(t));
return new THREE.Vector3(tx, ty, tz);
}
);
THREE.Curves.HelixCurve = THREE.Curve.create(
function() {
},
function(t) {
var a = 30; // radius
var b = 150; //height
var t2 = 2 * Math.PI * t * b / 30;
var tx = Math.cos(t2) * a,
ty = Math.sin(t2) * a,
tz = b * t;
return new THREE.Vector3(tx, ty, tz);
}
);
THREE.Curves.TrefoilKnot = THREE.Curve.create(
function(s) {
this.scale = (s === undefined) ? 10 : s;
},
function(t) {
t *= Math.PI * 2;
var tx = (2 + Math.cos(3 * t)) * Math.cos(2 * t),
ty = (2 + Math.cos(3 * t)) * Math.sin(2 * t),
tz = Math.sin(3 * t);
return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
}
);
THREE.Curves.TorusKnot = THREE.Curve.create(
function(s) {
this.scale = (s === undefined) ? 10 : s;
},
function(t) {
var p = 3,
q = 4;
t *= Math.PI * 2;
var tx = (2 + Math.cos(q * t)) * Math.cos(p * t),
ty = (2 + Math.cos(q * t)) * Math.sin(p * t),
tz = Math.sin(q * t);
return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
}
);
THREE.Curves.CinquefoilKnot = THREE.Curve.create(
function(s) {
this.scale = (s === undefined) ? 10 : s;
},
function(t) {
var p = 2,
q = 5;
t *= Math.PI * 2;
var tx = (2 + Math.cos(q * t)) * Math.cos(p * t),
ty = (2 + Math.cos(q * t)) * Math.sin(p * t),
tz = Math.sin(q * t);
return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
}
);
THREE.Curves.TrefoilPolynomialKnot = THREE.Curve.create(
function(s) {
this.scale = (s === undefined) ? 10 : s;
},
function(t) {
t = t * 4 - 2;
var tx = Math.pow(t, 3) - 3 * t,
ty = Math.pow(t, 4) - 4 * t * t,
tz = 1 / 5 * Math.pow(t, 5) - 2 * t;
return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
}
);
// var scaleTo = function(x, y) {
//   var r = y - x;
//   return function(t) {
//     t * r + x;
//   };
// }
var scaleTo = function(x, y, t) {
var r = y - x;
return t * r + x;
}
THREE.Curves.FigureEightPolynomialKnot = THREE.Curve.create(
function(s) {
this.scale = (s === undefined) ? 1 : s;
},
function(t) {
t = scaleTo(-4, 4, t);
var tx = 2 / 5 * t * (t * t - 7) * (t * t - 10),
ty = Math.pow(t, 4) - 13 * t * t,
tz = 1 / 10 * t * (t * t - 4) * (t * t - 9) * (t * t - 12);
return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
}
);
THREE.Curves.DecoratedTorusKnot4a = THREE.Curve.create(
function(s) {
this.scale = (s === undefined) ? 40 : s;
},
function(t) {
t *= Math.PI * 2;
var
x = Math.cos(2 * t) * (1 + 0.6 * (Math.cos(5 * t) + 0.75 * Math.cos(10 * t))),
y = Math.sin(2 * t) * (1 + 0.6 * (Math.cos(5 * t) + 0.75 * Math.cos(10 * t))),
z = 0.35 * Math.sin(5 * t);
return new THREE.Vector3(x, y, z).multiplyScalar(this.scale);
}
);
THREE.Curves.DecoratedTorusKnot4b = THREE.Curve.create(
function(s) {
this.scale = (s === undefined) ? 40 : s;
},
function(t) {
var fi = t * Math.PI * 2;
var x = Math.cos(2 * fi) * (1 + 0.45 * Math.cos(3 * fi) + 0.4 * Math.cos(9 * fi)),
y = Math.sin(2 * fi) * (1 + 0.45 * Math.cos(3 * fi) + 0.4 * Math.cos(9 * fi)),
z = 0.2 * Math.sin(9 * fi);
return new THREE.Vector3(x, y, z).multiplyScalar(this.scale);
}
);
THREE.Curves.DecoratedTorusKnot5a = THREE.Curve.create(
function(s) {
this.scale = (s === undefined) ? 40 : s;
},
function(t) {
var fi = t * Math.PI * 2;
var x = Math.cos(3 * fi) * (1 + 0.3 * Math.cos(5 * fi) + 0.5 * Math.cos(10 * fi)),
y = Math.sin(3 * fi) * (1 + 0.3 * Math.cos(5 * fi) + 0.5 * Math.cos(10 * fi)),
z = 0.2 * Math.sin(20 * fi);
return new THREE.Vector3(x, y, z).multiplyScalar(this.scale);
}
);
THREE.Curves.DecoratedTorusKnot5c = THREE.Curve.create(
function(s) {
this.scale = (s === undefined) ? 40 : s;
},
function(t) {
var fi = t * Math.PI * 2;
var x = Math.cos(4 * fi) * (1 + 0.5 * (Math.cos(5 * fi) + 0.4 * Math.cos(20 * fi))),
y = Math.sin(4 * fi) * (1 + 0.5 * (Math.cos(5 * fi) + 0.4 * Math.cos(20 * fi))),
z = 0.35 * Math.sin(15 * fi);
return new THREE.Vector3(x, y, z).multiplyScalar(this.scale);
}
);
/**
* @author renej
* NURBS surface object
*
* Implementation is based on (x, y [, z=0 [, w=1]]) control points with w=weight.
*
**/
/**************************************************************
*	NURBS surface
**************************************************************/
THREE.NURBSSurface = function ( degree1, degree2, knots1, knots2 /* arrays of reals */, controlPoints /* array^2 of Vector(2|3|4) */) {
this.degree1 = degree1;
this.degree2 = degree2;
this.knots1 = knots1;
this.knots2 = knots2;
this.controlPoints = [];
var len1 = knots1.length - degree1 - 1;
var len2 = knots2.length - degree2 - 1;
// ensure Vector4 for control points
for (var i = 0; i < len1; ++ i) {
this.controlPoints[i] = []
for (var j = 0; j < len2; ++ j) {
var point = controlPoints[i][j];
this.controlPoints[i][j] = new THREE.Vector4(point.x, point.y, point.z, point.w);
}
}
};
THREE.NURBSSurface.prototype = {
constructor: THREE.NURBSSurface,
getPoint: function ( t1, t2 ) {
var u = this.knots1[0] + t1 * (this.knots1[this.knots1.length - 1] - this.knots1[0]); // linear mapping t1->u
var v = this.knots2[0] + t2 * (this.knots2[this.knots2.length - 1] - this.knots2[0]); // linear mapping t2->u
return THREE.NURBSUtils.calcSurfacePoint(this.degree1, this.degree2, this.knots1, this.knots2, this.controlPoints, u, v);
}
};
/**
* lufylegend
* @version 1.9.10
* @Explain lufylegend是一个HTML5开源引擎，利用它可以快速方便的进行HTML5的开发
* @author lufy(lufy_legend)
* @blog http://blog.csdn.net/lufy_Legend
* @email lufy.legend@gmail.com
* @homepage http://lufylegend.com/lufylegend
* @github https://github.com/lufylegend/lufylegend.js
*/
function LEvent(a){this.eventType=a,this._ll_preventDefault=!1}function LStageAlign(){throw"LStageAlign cannot be instantiated"}function LStageScaleMode(){throw"LStageScaleMode cannot be instantiated"}function trace(){if(LGlobal.traceDebug){var b,a=document.getElementById("traceObject");for(trace.arguments.length>0&&null==a&&(a=document.createElement("TEXTAREA"),a.id="traceObject",a.style.position="absolute",a.style.top=LGlobal.height+20+"px",a.style.width=LGlobal.width+"px",a.style.height="200px",document.body.appendChild(a)),b=0;b<trace.arguments.length;b++)a.value=a.value+trace.arguments[b]+"\r\n",a.scrollTop=a.scrollHeight}}function addChild(a){LGlobal.stage.addChild(a)}function removeChild(a){LGlobal.stage.removeChild(a)}function init(a,b,c,d,e,f){var g,h;LGlobal.speed=a,g=function(){LGlobal.canTouch&&LGlobal.aspectRatio==LANDSCAPE&&window.innerWidth<window.innerHeight?LGlobal.horizontalError():LGlobal.canTouch&&LGlobal.aspectRatio==PORTRAIT&&window.innerWidth>window.innerHeight?LGlobal.verticalError():setTimeout(e,100),LGlobal.startTimer=(new Date).getTime()},"function"==typeof a?(LGlobal.setCanvas(b,c,d),g(),h=function(){a(h),LGlobal.onShow()}):h=function(){LGlobal.frameRate=setInterval(function(){LGlobal.onShow()},a),LGlobal.setCanvas(b,c,d),g()},null!=f&&f==LEvent.INIT?h():LEvent.addEventListener(window,"load",function(){h()})}function base(a,b,c){var d=null,e=a.constructor.prototype,f={};"Object"==a.constructor.name&&console.warn("When you use the extends. You must make a method like 'XX.prototype.xxx=function(){}'. but not 'XX.prototype={xxx:function(){}}'."),typeof a.__ll__parent__==UNDEFINED&&(a.__ll__parent__=[],a.__ll__parent__=[]),a.__ll__parent__.push(b.prototype);for(d in e)f[d]=1;for(d in b.prototype)f[d]||(e[d]=b.prototype[d]);e.toString==Object.prototype.toString&&(e.toString=LObject.prototype.toString),b.apply(a,c)}function getTimer(){return(new Date).getTime()-LGlobal.startTimer}function getExtension(a){var b,c=/([^#?]+\.)([^.#?]+)/;return b=a.match(c),b.length>=3?b[2].toLowerCase():null}function LBlendMode(){throw"LBlendMode cannot be instantiated"}function LoadingSample2(a,b,c){base(this,LSprite,[]);var g,d=this,e=LGlobal.canvas,f="Loading...";d.backgroundColor=null==b?"#000000":b,d.graphics.drawRect(1,d.backgroundColor,[0,0,LGlobal.width,LGlobal.height],!0,d.backgroundColor),null==c&&(c=LGlobal._create_loading_color()),d.color=c,d.progress=0,d.size=null==a?.2*LGlobal.height:a,g=new LTextField,g.text=f,g.size=d.size,g.color="#ffffff",g.x=(LGlobal.width-g.getWidth())/2,g.y=(LGlobal.height-d.size)/2,d.addChild(g),d.backLabel=g,g=new LTextField,g.text="***%",g.size=.3*d.size,g.color=c,g.x=(LGlobal.width-g.getWidth())/2,g.y=(LGlobal.height-d.size)/2-.4*d.size,d.addChild(g),d.progressLabel=g,g=new LTextField,g.text=f,g.size=d.size,g.color=d.color,g.x=(LGlobal.width-g.getWidth())/2,g.y=(LGlobal.height-d.size)/2,g.mask=new LGraphics,d.screenX=g.x,d.screenY=g.y,d.screenWidth=g.getWidth(),d.addChild(g),d.showLabel=g,e.shadowOffsetX=2,e.shadowOffsetY=2,e.shadowColor="blue",d.setProgress(d.progress)}function LoadingSample3(a,b,c){base(this,LSprite,[]);var d=this;LGlobal.canvas,d.backgroundColor=null==b?"#000000":b,d.graphics.drawRect(1,d.backgroundColor,[0,0,LGlobal.width,LGlobal.height],!0,d.backgroundColor),null==c&&(c=LGlobal._create_loading_color()),d.color=c,d.progress=0,d.screenWidth=.75*LGlobal.width,d.screenHeight=null==a?.1*LGlobal.height:a,d.screenHeight>5&&(d.screenHeight=5),d.screenX=(LGlobal.width-d.screenWidth)/2,d.screenY=(LGlobal.height-d.screenHeight)/2,d.back=new LSprite,d.addChild(d.back),d.label=new LTextField,d.label.color="#ffffff",d.label.weight="bolder",d.label.size=2*d.screenHeight,d.label.x=d.screenX+.5*(d.screenWidth-d.label.getWidth()),d.label.y=d.screenY-4*d.screenHeight,d.addChild(d.label),d.star=new Array,d.addEventListener(LEvent.ENTER_FRAME,d.onframe),d.setProgress(d.progress)}function LoadingSample4(a,b,c){var d,f,g;for(base(this,LSprite,[]),d=this,LGlobal.canvas,d.backgroundColor=null==b?"#000000":b,d.graphics.drawRect(1,d.backgroundColor,[0,0,LGlobal.width,LGlobal.height],!0,d.backgroundColor),null==c&&(c="#FFFFFF"),d.arc=new LSprite,d.arc.x=.5*LGlobal.width,d.arc.y=.5*LGlobal.height,d.addChild(d.arc),f=0;360>f;f++)d.arc.graphics.drawArc(1+f/36,c,[0,0,50,2*Math.PI/360*f,2*Math.PI/360*(f+2)]);d.progress=0,d.label=new LTextField,d.label.color=c,d.label.weight="bolder",d.label.size=18,d.label.x=.5*LGlobal.width,d.label.y=.5*LGlobal.height-.5*d.label.getHeight(),d.addChild(d.label),g=new LDropShadowFilter(0,0,"#FFFFFF",30),d.arc.filters=[g],d.addEventListener(LEvent.ENTER_FRAME,d.onframe),d.setProgress(d.progress)}function LoadingSample5(a,b,c){var d,f,g,h,i;for(base(this,LSprite,[]),d=this,LGlobal.canvas,d.backgroundColor=null==b?"#000000":b,d.graphics.drawRect(1,d.backgroundColor,[0,0,LGlobal.width,LGlobal.height],!0,d.backgroundColor),null==c&&(c="#FFFFFF"),d.arc=new LSprite,d.arc.x=.5*LGlobal.width,d.arc.y=.5*LGlobal.height,d.addChild(d.arc),f=50,g=0;360>g;g+=30)h=new LSprite,h.graphics.drawArc(0,c,[f,0,7,0,2*Math.PI],!0,c),h.rotate=g,h.alpha=.1+g/360,d.arc.addChild(h);d.index=0,d.max=3,d.progress=0,d.label=new LTextField,d.label.color="#FFFFFF",d.label.weight="bolder",d.label.size=18,d.label.x=.5*LGlobal.width,d.label.y=.5*LGlobal.height-.5*d.label.getHeight(),d.addChild(d.label),i=new LDropShadowFilter(0,0,"#FFFFFF",30),d.arc.filters=[i],d.addEventListener(LEvent.ENTER_FRAME,d.onframe),d.setProgress(d.progress)}function LoadingSample6(a,b,c){var d=this;base(d,LSprite,[]),d.progress=0,d.step=0,d.holeR=a||10,d.holeAmount=5,d.holesx=20,d.loadingBarWidth=2*d.holeR*d.holeAmount+d.holesx*(d.holeAmount-1),d.loadingBarHeight=2*d.holeR,d.progressColor=b||"#2187e7",d.filterColor=c||"#00c6ff",d.backLayer=new LSprite,d.backLayer.graphics.drawRect(0,"",[0,0,LGlobal.width,LGlobal.height],!0,"#161616"),d.addChild(d.backLayer),d.holeLayer=new LSprite,d.holeLayer.x=.5*(LGlobal.width-d.loadingBarWidth),d.holeLayer.y=.5*(LGlobal.height-d.loadingBarHeight),d.addChild(d.holeLayer),d.progressLayer=new LSprite,d.progressLayer.x=.5*(LGlobal.width-d.loadingBarWidth),d.progressLayer.y=.5*(LGlobal.height-d.loadingBarHeight),d.addChild(d.progressLayer),d._addHole()}function LoadingSample7(a,b,c){var d=this;base(d,LSprite,[]),d.progress=0,d.step=0,d.holeW=a||10,d.holeH=b||30,d.holeAmount=10,d.holesx=8,d.loadingBarWidth=d.holeW*d.holeAmount+d.holesx*(d.holeAmount-1),d.loadingBarHeight=d.holeH,d.progressColor=c||"#2187e7",d.backLayer=new LSprite,d.backLayer.graphics.drawRect(0,"",[0,0,LGlobal.width,LGlobal.height],!0,"#161616"),d.addChild(d.backLayer),d.holeLayer=new LSprite,d.holeLayer.x=.5*(LGlobal.width-d.loadingBarWidth),d.holeLayer.y=.5*(LGlobal.height-d.loadingBarHeight),d.addChild(d.holeLayer),d.progressLayer=new LSprite,d.progressLayer.x=.5*(LGlobal.width-d.loadingBarWidth),d.progressLayer.y=.5*(LGlobal.height-d.loadingBarHeight),d.addChild(d.progressLayer),d._addHole()}var mouseX,mouseY,LMouseEvent,LMultitouchInputMode,LMultitouch,LTextEvent,LFocusEvent,LMouseEventContainer,LKeyboardEvent,LAccelerometerEvent,LGlobal,LSystem,LStage,LInit,LExtends,LObject,LColorTransform,LTransform,LMatrix,LVec2,LEventDispatcher,LDisplayObject,LInteractiveObject,LDisplayObjectContainer,LLoader,LURLLoader,LWebAudio,LMedia,LSound,LVideo,LPoint,LRectangle,LGraphics,LShape,LSprite,LButton,LTextFieldType,LTextField,LBitmap,LBitmapData,LDropShadowFilter,LAnimation,LAnimationTimeline,LLoadManage,LEasing,Quad,Cubic,Quart,Quint,Sine,Strong,Expo,Circ,Elastic,Back,Bounce,LTweenLiteTimeline,LTweenLite,LAjax,LStageWebView,FPS,LQuadTree,LoadingSample1,LBox2d,LTransition,LIris,LTransitionManager,LFlash,LString,OS_PC="pc",OS_IPHONE="iPhone",OS_IPOD="iPod",OS_IPAD="iPad",OS_ANDROID="Android",OS_WINDOWS_PHONE="Windows Phone",OS_BLACK_BERRY="BlackBerry",NONE="none",UNDEFINED="undefined",LANDSCAPE="landscape",PORTRAIT="portrait";LEvent.prototype.preventDefault=function(){this._ll_preventDefault=!0},LEvent.INIT="init",LEvent.COMPLETE="complete",LEvent.ENTER_FRAME="enter_frame",LEvent.WINDOW_RESIZE="resize",LEvent.SOUND_COMPLETE="sound_complete",LEvent.END_CONTACT="endContact",LEvent.PRE_SOLVE="preSolve",LEvent.POST_SOLVE="postSolve",LEvent.BEGIN_CONTACT="beginContact",LEvent.addEventListener=function(a,b,c,d){null==d&&(d=!1),a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&(a["e"+b+c]=c,a[b+c]=function(){a["e"+b+c]()},a.attachEvent("on"+b,a[b+c]))},LEvent.removeEventListener=function(a,b,c,d){null==d&&(d=!1),a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&(a["e"+b+c]=c,a[b+c]=function(){a["e"+b+c]()},a.detachEvent("on"+b,a[b+c]))},LMouseEvent=function(){throw"LMouseEvent cannot be instantiated"},LMouseEvent.MOUSE_DOWN="mousedown",LMouseEvent.MOUSE_UP="mouseup",LMouseEvent.TOUCH_START="touchstart",LMouseEvent.TOUCH_MOVE="touchmove",LMouseEvent.TOUCH_END="touchend",LMouseEvent.MOUSE_MOVE="mousemove",LMouseEvent.MOUSE_OVER="mouseover",LMouseEvent.MOUSE_OUT="mouseout",LMouseEvent.DOUBLE_CLICK="dblclick",LMultitouchInputMode=function(){throw"LMultitouchInputMode cannot be instantiated"},LMultitouchInputMode.NONE="none",LMultitouchInputMode.GESTURE="gesture",LMultitouchInputMode.TOUCH_POINT="touchPoint",LMultitouch=function(){throw"LMultitouch cannot be instantiated"},LMultitouch.inputMode="none",LMultitouch.touchs=[],LTextEvent=function(){throw"LTextEvent cannot be instantiated"},LTextEvent.TEXT_INPUT="textInput",LTextEvent.WIND_COMPLETE="windComplete",LFocusEvent=function(){throw"LFocusEvent cannot be instantiated"},LFocusEvent.FOCUS_IN="focusIn",LFocusEvent.FOCUS_OUT="focusOut",LMouseEventContainer=function(){function a(){var a=this;a.container={},a.dispatchAllEvent=!1,a.mouseDownContainer=[],a.mouseUpContainer=[],a.mouseMoveContainer=[],a.mouseOverContainer=[],a.mouseOutContainer=[],a.mouseDblContainer=[],a.textFieldInputContainer=[],a.buttonContainer=[]}return a.prototype={pushInputBox:function(a){var d,e,b=this,c=b.textFieldInputContainer;for(d=0,e=c.length;e>d;d++)if(a.objectIndex==c[d].objectIndex)return;b.textFieldInputContainer.push(a)},removeInputBox:function(a){var d,e,b=this,c=b.textFieldInputContainer;for(d=0,e=c.length;e>d;d++)if(a.objectIndex==c[d].objectIndex){b.textFieldInputContainer.splice(d,1);break}},pushButton:function(a){var d,e,b=this,c=b.buttonContainer;for(d=0,e=c.length;e>d;d++)if(a.objectIndex==c[d].objectIndex)return;b.buttonContainer.push(a)},removeButton:function(a){var d,e,b=this,c=b.buttonContainer;for(d=0,e=c.length;e>d;d++)if(a.objectIndex==c[d].objectIndex){b.buttonContainer.splice(d,1);break}},dispatchEventButton:function(a){var d,e,b=this,c=b.buttonContainer;for(d=0,e=c.length;e>d;d++)"function"==typeof b.buttonContainer[d].ll_button_mode&&b.buttonContainer[d].ll_button_mode(a)},addEvent:function(a,b,c){b.push({container:a,listener:c})},removeEvent:function(a,b,c){var e,f;for(e=0,f=b.length;f>e;e++)if(b[e].container.objectIndex===a.objectIndex&&(!c||b[e].listener==c)){b.splice(e,1);break}},addMouseDownEvent:function(a,b){var c=this;c.addEvent(a,c.mouseDownContainer,b)},addMouseUpEvent:function(a,b){var c=this;c.addEvent(a,c.mouseUpContainer,b)},addMouseMoveEvent:function(a,b){var c=this;c.addEvent(a,c.mouseMoveContainer,b)},addMouseOverEvent:function(a,b){var c=this;c.addEvent(a,c.mouseOverContainer,b)},addMouseOutEvent:function(a,b){var c=this;c.addEvent(a,c.mouseOutContainer,b)},addMouseDblEvent:function(a,b){var c=this;c.addEvent(a,c.mouseDblContainer,b)},addMouseEvent:function(a,b,c){var d=this;b==LMouseEvent.MOUSE_DOWN?d.addMouseDownEvent(a,c):b==LMouseEvent.MOUSE_UP?d.addMouseUpEvent(a,c):b==LMouseEvent.MOUSE_OVER?d.addMouseOverEvent(a,c):b==LMouseEvent.MOUSE_OUT?d.addMouseOutEvent(a,c):b==LMouseEvent.MOUSE_MOVE?d.addMouseMoveEvent(a,c):d.addMouseDblEvent(a,c)},hasEventListener:function(a,b,c){var e,f,g,d=this;for(e=b==LMouseEvent.MOUSE_DOWN?d.mouseDownContainer:b==LMouseEvent.MOUSE_UP?d.mouseUpContainer:b==LMouseEvent.MOUSE_OVER?d.mouseOverContainer:b==LMouseEvent.MOUSE_OUT?d.mouseOutContainer:b==LMouseEvent.MOUSE_MOVE?d.mouseMoveContainer:d.mouseDblContainer,f=0,g=e.length;g>f;f++)if(e[f].container.objectIndex===a.objectIndex&&(!c||e[f].listener==c))return!0;return!1},removeMouseDownEvent:function(a,b){var c=this;c.removeEvent(a,c.mouseDownContainer,b)},removeMouseUpEvent:function(a,b){var c=this;c.removeEvent(a,c.mouseUpContainer,b)},removeMouseMoveEvent:function(a,b){var c=this;c.removeEvent(a,c.mouseMoveContainer,b)},removeMouseOverEvent:function(a,b){var c=this;c.removeEvent(a,c.mouseOverContainer,b)},removeMouseOutEvent:function(a,b){var c=this;c.removeEvent(a,c.mouseOutContainer,b)},removeMouseDblEvent:function(a,b){var c=this;c.removeEvent(a,c.mouseDblContainer,b)},removeMouseEvent:function(a,b,c){var d=this;b==LMouseEvent.MOUSE_DOWN?d.removeMouseDownEvent(a,c):b==LMouseEvent.MOUSE_UP?d.removeMouseUpEvent(a,c):b==LMouseEvent.MOUSE_OVER?d.removeMouseOverEvent(a,c):b==LMouseEvent.MOUSE_OUT?d.removeMouseOutEvent(a,c):b==LMouseEvent.MOUSE_MOVE?d.removeMouseMoveEvent(a,c):d.removeMouseDblEvent(a,c)},dispatchMouseEvent:function(a,b){var c=this;b==LMouseEvent.MOUSE_DOWN?(c.dispatchEvent(a,c.mouseDownContainer,LMouseEvent.MOUSE_DOWN),c.dispatchEvent(a,c.textFieldInputContainer)):b==LMouseEvent.MOUSE_UP?c.dispatchEvent(a,c.mouseUpContainer,LMouseEvent.MOUSE_UP):b==LMouseEvent.DOUBLE_CLICK?c.dispatchEvent(a,c.mouseDblContainer,LMouseEvent.DOUBLE_CLICK):(c.dispatchEventButton(a),c.dispatchEvent(a,c.mouseOutContainer,LMouseEvent.MOUSE_OUT),c.dispatchEvent(a,c.mouseOverContainer,LMouseEvent.MOUSE_OVER),c.dispatchEvent(a,c.mouseMoveContainer,LMouseEvent.MOUSE_MOVE))},getRootParams:function(a){for(var b=a.parent,c={x:0,y:0,scaleX:1,scaleY:1};b&&"root"!=b;)c.x*=b.scaleX,c.y*=b.scaleY,c.x+=b.x,c.y+=b.y,c.scaleX*=b.scaleX,c.scaleY*=b.scaleY,b=b.parent;return c},_mouseEnabled:function(a){if(!a||!a.parent)return!1;if(!a.visible||typeof a.mouseEnabled!=UNDEFINED&&!a.mouseEnabled)return!1;for(var c=a.parent;c&&"root"!=c;){if(!c.mouseEnabled||!c.mouseChildren||!c.visible)return!1;if(c=c.parent,!c)return!1}return!0},_dispatchEvent:function(a,b,c,d,e,f){var h,j=c.length;for(h=e;f>=h&&j>h;h++)o=c[h],o.sp.objectIndex==d&&(a.currentTarget=a.clickTarget=o.sp,a.target||(a.target=o.sp),a.event_type=b,a.selfX=(a.offsetX-o.co.x-o.sp.x)/(o.co.scaleX*o.sp.scaleX),a.selfY=(a.offsetY-o.co.y-o.sp.y)/(o.co.scaleY*o.sp.scaleY),o.listener(a,o.sp))},dispatchEvent:function(a,b,c){var e,f,h,i,j,k,d=this,g=[];for(i=0,j=b.length;j>i;i++)if(e=b[i].container||b[i],d._mouseEnabled(e))if(f=d.getRootParams(e),c||!e.mouseEvent)if(e.ismouseon(a,f)){if(c==LMouseEvent.MOUSE_OUT)continue;if(c==LMouseEvent.MOUSE_OVER&&e.ll_mousein)continue;c!=LMouseEvent.MOUSE_UP&&(e.ll_mousein=!0),g.push({sp:e,co:f,listener:b[i].listener})}else{if(c!=LMouseEvent.MOUSE_OUT&&c!=LMouseEvent.MOUSE_OVER)continue;if(!e.ll_mousein)continue;e.ll_mousein=!1,g.push({sp:e,co:f,listener:b[i].listener})}else e.mouseEvent(a,LMouseEvent.MOUSE_DOWN,f);if(0!=g.length)for(g.length>1&&(g=g.sort(d._sort.bind(d))),j=g.length,i=0;j>i;i++)if(h=g[i],d._dispatchEvent(a,c,g,h.sp.objectIndex,i,d.dispatchAllEvent?j-1:i),i<g.length-1&&h.sp.objectIndex==g[i+1].sp.objectIndex)g.splice(i,1),i--;else{for(;;){if(k||(k=h.sp.parent,a.target=h.sp),!k||"root"==k)break;if(d._dispatchEvent(a,c,g,k.objectIndex,i+1,j),a.target=k,k=k.parent,!k||"root"==k)break}if(!d.dispatchAllEvent)break}},set:function(a,b){this.container[a]=b},_sort:function(a,b){var d,e,h,i,j,c=this,f=c._getSort(a.sp),g=c._getSort(b.sp);for(h=0,i=f.length,j=g.length;i>h&&j>h;h++)if(d=f[h],e=g[h],d.objectIndex!=e.objectIndex)return e.parent.getChildIndex(e)-d.parent.getChildIndex(d);return g.length-f.length},_getSort:function(a){for(var b=a.parent,c=[a];b&&"root"!=b;)c.unshift(b),b=b.parent;return c}},new a}(),LKeyboardEvent=function(){throw"LKeyboardEvent cannot be instantiated"},LKeyboardEvent.KEY_DOWN="keydown",LKeyboardEvent.KEY_UP="keyup",LKeyboardEvent.KEY_PRESS="keypress",LAccelerometerEvent=function(){throw"LAccelerometerEvent cannot be instantiated"},LAccelerometerEvent.DEVICEMOTION="devicemotion",LStageAlign.TOP="T",LStageAlign.BOTTOM="B",LStageAlign.LEFT="L",LStageAlign.RIGHT="Re",LStageAlign.TOP_LEFT="TL",LStageAlign.TOP_RIGHT="TR",LStageAlign.TOP_MIDDLE="TM",LStageAlign.BOTTOM_LEFT="BL",LStageAlign.BOTTOM_RIGHT="BR",LStageAlign.BOTTOM_MIDDLE="BM",LStageAlign.MIDDLE="M",LStageScaleMode.EXACT_FIT="exactFit",LStageScaleMode.SHOW_ALL="showAll",LStageScaleMode.NO_BORDER="noBorder",LStageScaleMode.NO_SCALE="noScale",LGlobal=function(){function a(){throw"LGlobal cannot be instantiated"}return a.FULL_SCREEN="full_screen",a.traceDebug=!1,a.displayState=NONE,a.aspectRatio=NONE,a.canvasObj=null,a.canvas=null,a.webAudio=!0,a.objectIndex=1,a.stage=null,a.width=0,a.height=0,a.box2d=null,a.speed=50,a.IS_MOUSE_DOWN=!1,a.stopPropagation=!1,a.preventDefault=!0,a.childList=new Array,a.dragList=new Array,a.excludingContainer=new Array,a.fpsStatus=null,a.stageScale="noScale",a.align="M",a.mobile=!1,a.canTouch=!1,a.os=OS_PC,a.ios=!1,a.android=!1,a.android_new=!1,a.backgroundColor=null,a.destroy=!0,a.forceRefresh=!1,a.devicePixelRatio=window.devicePixelRatio||1,a.startTimer=0,a.keepClear=!0,a.top=0,a.left=0,a.window=window,function(b){if(a.isOldFirefox=function(a){var c,b=a.toLowerCase().indexOf("firefox");return 0>b?!1:(c=a.substring(b+8,a.length),parseFloat(c)<39)}(b),b.indexOf(OS_IPHONE)>0)a.os=OS_IPHONE,a.canTouch=!0,a.ios=!0;else if(b.indexOf(OS_IPOD)>0)a.os=OS_IPOD,a.canTouch=!0,a.ios=!0;else if(b.indexOf(OS_IPAD)>0)a.os=OS_IPAD,a.ios=!0,a.canTouch=!0;else if(b.indexOf(OS_ANDROID)>0){a.os=OS_ANDROID,a.canTouch=!0,a.android=!0;var c=b.indexOf(OS_ANDROID);parseInt(b.substr(c+8,1))>3&&(a.android_new=!0)}else b.indexOf(OS_WINDOWS_PHONE)>0?(a.os=OS_WINDOWS_PHONE,a.canTouch=!0):b.indexOf(OS_BLACK_BERRY)>0&&(a.os=OS_BLACK_BERRY,a.canTouch=!0);a.mobile=a.canTouch}(navigator.userAgent),a.setDebug=function(b){a.traceDebug=b},a.setCanvas=function(b,c,d){a.ll_createCanvas(b,c,d),a.ll_createStage(),a.displayState==LStage.FULL_SCREEN?a.resize():"number"==typeof a.displayState&&a.resize(a.width*a.displayState,a.height*a.displayState),a.canTouch?(a.ll_clicks=0,a.ll_prev_clickTime=0,LEvent.addEventListener(a.canvasObj,LMouseEvent.TOUCH_START,a.ll_touchStart),LEvent.addEventListener(document,LMouseEvent.TOUCH_END,a.ll_touchEnd),LEvent.addEventListener(a.canvasObj,LMouseEvent.TOUCH_MOVE,a.ll_touchMove)):(LEvent.addEventListener(a.canvasObj,LMouseEvent.DOUBLE_CLICK,a.ll_mouseDbclick),LEvent.addEventListener(a.canvasObj,LMouseEvent.MOUSE_DOWN,a.ll_mouseDown),LEvent.addEventListener(a.canvasObj,LMouseEvent.MOUSE_MOVE,a.ll_mouseMove),LEvent.addEventListener(a.canvasObj,LMouseEvent.MOUSE_UP,a.ll_mouseUp),LEvent.addEventListener(a.canvasObj,LMouseEvent.MOUSE_OUT,a.ll_mouseOut))},a.ll_createCanvas=function(b,c,d){a.id=b,a.object=document.getElementById(b),a.object.innerHTML='<div style="position:absolute;margin:0;padding:0;overflow:visible;-webkit-transform:translateZ(0);z-index:0;"><canvas id="'+a.id+'_canvas" style="margin:0;padding:0;width:'+c+"px;height:"+d+'px;">'+'<div id="noCanvas">'+"<p>Hey there,it looks like you're using Microsoft's Internet Explorer. Microsoft hates the Web and doesn't support HTML5:(</p>"+"</div>"+"</canvas></div>"+'<div id="'+a.id+'_InputText" style="position:absolute;margin:0;padding:0;z-index:10;display:none;">'+'<textarea rows="1" id="'+a.id+'_InputTextareaBox" style="resize:none;background:transparent;border:0px;"></textarea>'+'<input type="text" id="'+a.id+'_InputTextBox"  style="background:transparent;border:0px;"/>'+'<input type="password" id="'+a.id+'_passwordBox"  style="background:transparent;border:0px;"/></div>',a.canvasObj=document.getElementById(a.id+"_canvas"),a._canvas=document.createElement("canvas"),a._context=a._canvas.getContext("2d"),a._context&&(a.canvasObj.innerHTML=""),a.inputBox=document.getElementById(a.id+"_InputText"),a.inputTextareaBoxObj=document.getElementById(a.id+"_InputTextareaBox"),a.inputTextBoxObj=document.getElementById(a.id+"_InputTextBox"),a.passwordBoxObj=document.getElementById(a.id+"_passwordBox"),a.inputTextField=null,c&&(a.canvasObj.width=c),d&&(a.canvasObj.height=d),a.width=a.canvasObj.width,a.height=a.canvasObj.height,a.canvasStyleWidth=a.width,a.canvasStyleHeight=a.height,a.canvas=a.canvasObj.getContext("2d"),a.offsetX=mouseX=0,a.offsetY=mouseY=0},a.ll_createStage=function(){a.stage=new LSprite,a.stage.parent="root",a.childList.push(a.stage),a.stage.baseAddEvent=a.stage.addEventListener,a.stage.baseRemoveEvent=a.stage.removeEventListener,a.stage.addEventListener=function(b,c){b==LEvent.WINDOW_RESIZE?(a.stage.onresizeListener=c,a.stage.onresize=function(b){a.stage.onresizeEvent=b},LEvent.addEventListener(a.window,b,a.stage.onresize)):b==LKeyboardEvent.KEY_DOWN||b==LKeyboardEvent.KEY_UP||b==LKeyboardEvent.KEY_PRESS?LEvent.addEventListener(a.window,b,c):a.stage.baseAddEvent(b,c)},a.stage.removeEventListener=function(b,c){b==LEvent.WINDOW_RESIZE?(LEvent.removeEventListener(a.window,LEvent.WINDOW_RESIZE,a.stage.onresize),delete a.stage.onresize,delete a.stage.onresizeListener):b==LKeyboardEvent.KEY_DOWN||b==LKeyboardEvent.KEY_UP||b==LKeyboardEvent.KEY_PRESS?LEvent.removeEventListener(a.window,b,c):a.stage.baseRemoveEvent(b,c)},a.innerWidth=window.innerWidth,a.innerHeight=window.innerHeight,LEvent.addEventListener(a.window,"blur",function(){a.stage.dispatchEvent(new LEvent(LFocusEvent.FOCUS_OUT))})},a.ll_touchStart=function(b){var c,d,e,g,h,i,j;if(a._outStageCheckCount=1,a.IS_MOUSE_DOWN=!0,a.stage.dispatchEvent(new LEvent(LFocusEvent.FOCUS_IN)),a.inputBox.style.display!=NONE&&a.inputTextField._ll_getValue(),c=parseInt(0+a.object.style.left)+parseInt(a.canvasObj.style.marginLeft),d=parseInt(0+a.object.style.top)+parseInt(a.canvasObj.style.marginTop),LMultitouch.inputMode==LMultitouchInputMode.NONE)e=a.ll_touchStartEvent(b,0,c,d);else if(LMultitouch.inputMode==LMultitouchInputMode.TOUCH_POINT)for(g=0,h=b.touches.length;h>g;g++)LMultitouch.touchs["touch"+b.touches[g].identifier]||(e=a.ll_touchStartEvent(b,g,c,d));i=new Date,j=i.getTime(),a.ll_clicks=j<=a.ll_prev_clickTime+500?a.ll_clicks+1:1,a.ll_prev_clickTime=j,2===a.ll_clicks&&(a.mouseEvent(e,LMouseEvent.DOUBLE_CLICK),a.ll_clicks=0),a.mouseJoint_start&&a.mouseJoint_start(e),a.touchHandler(b)},a.ll_touchStartEvent=function(b,c,d,e){var f={offsetX:b.touches[c].pageX-d,offsetY:b.touches[c].pageY-e,touchPointID:b.touches[c].identifier};return f.offsetX=a.ll_scaleX(f.offsetX),f.offsetY=a.ll_scaleY(f.offsetY),mouseX=a.offsetX=f.offsetX,mouseY=a.offsetY=f.offsetY,LMultitouch.touchs["touch"+f.touchPointID]=f,a.mouseEvent(f,LMouseEvent.MOUSE_DOWN),a.buttonStatusEvent=f,f},a.ll_touchEnd=function(b){var c,d,e,f,g,h;if(a.IS_MOUSE_DOWN=!1,LMultitouch.inputMode==LMultitouchInputMode.TOUCH_POINT)for(e in LMultitouch.touchs){for(c=LMultitouch.touchs[e],h=!1,f=0,g=b.touches.length;g>f;f++)if(b.touches[f].identifier==c.touchPointID){h=!0;break}h||(d=c,delete LMultitouch.touchs[e],a.mouseEvent(d,LMouseEvent.MOUSE_UP))}d||(d={offsetX:a.offsetX,offsetY:a.offsetY}),a.mouseEvent(d,LMouseEvent.MOUSE_UP),a.touchHandler(b),a.buttonStatusEvent=null,a.mouseJoint_end&&a.mouseJoint_end(),a.stage.dispatchEvent(new LEvent(LFocusEvent.FOCUS_OUT))},a.ll_touchMove=function(b){var c,d,e,f,g=b.touches.length;for(c=parseInt(0+a.object.style.left)+parseInt(a.canvasObj.style.marginLeft),d=parseInt(0+a.object.style.top)+parseInt(a.canvasObj.style.marginTop),LMultitouch.inputMode==LMultitouchInputMode.NONE&&(g=1),i=0,f=b.touches.length;f>i&&g>i;i++)e={offsetX:b.touches[i].pageX-c,offsetY:b.touches[i].pageY-d,touchPointID:b.touches[i].identifier},e.offsetX=a.ll_scaleX(e.offsetX),e.offsetY=a.ll_scaleY(e.offsetY),mouseX=a.offsetX=e.offsetX,mouseY=a.offsetY=e.offsetY,LMultitouch.touchs["touch"+e.touchPointID]&&LMultitouch.touchs["touch"+e.touchPointID].offsetX==e.offsetX&&LMultitouch.touchs["touch"+e.touchPointID].offsetY==e.offsetY||(a.buttonStatusEvent=e,LMultitouch.touchs["touch"+e.touchPointID]=e,a._outStageCheckCount=e.offsetX<=0||e.offsetX>=a.innerWidth||e.offsetX>=a.width||e.offsetY<=0||e.offsetY>=a.innerHeight||e.offsetY>=a.height?0:1,a.mouseEvent(e,LMouseEvent.MOUSE_MOVE));a.touchHandler(b),a.mouseJoint_move&&a.mouseJoint_move(e)},a.ll_mouseDbclick=function(b){null==b.offsetX&&null!=b.layerX&&(b.offsetX=b.layerX,b.offsetY=b.layerY);var c={button:b.button};c.offsetX=a.ll_scaleX(b.offsetX),c.offsetY=a.ll_scaleY(b.offsetY),a.mouseEvent(c,LMouseEvent.DOUBLE_CLICK)},a.ll_mouseDown=function(b){null==b.offsetX&&null!=b.layerX&&(b.offsetX=b.layerX,b.offsetY=b.layerY),a.inputBox.style.display!=NONE&&a.inputTextField._ll_getValue();var c={button:b.button};c.offsetX=a.ll_scaleX(b.offsetX),c.offsetY=a.ll_scaleY(b.offsetY),a.mouseEvent(c,LMouseEvent.MOUSE_DOWN),a.IS_MOUSE_DOWN=!0,a.mouseJoint_start&&a.mouseJoint_start(c)},a.ll_mouseMove=function(b){null==b.offsetX&&null!=b.layerX&&(b.offsetX=b.layerX,b.offsetY=b.layerY);var c={};c.offsetX=a.ll_scaleX(b.offsetX),c.offsetY=a.ll_scaleY(b.offsetY),a.buttonStatusEvent=c,mouseX=a.offsetX=c.offsetX,mouseY=a.offsetY=c.offsetY,a.cursor="default",0>=mouseX||mouseX>=a.innerWidth||mouseX>=a.width||0>=mouseY||mouseY>=a.innerHeight||mouseY>=a.height?a._outStageCheckCount&&(a._outStageCheckCount=0,a.stage.dispatchEvent(new LEvent(LFocusEvent.FOCUS_OUT))):a._outStageCheckCount||(a._outStageCheckCount=1,a.stage.dispatchEvent(new LEvent(LFocusEvent.FOCUS_IN))),a.mouseEvent(c,LMouseEvent.MOUSE_MOVE),document.body.style.cursor=a.cursor,a.mouseJoint_move&&a.mouseJoint_move(c)},a.ll_mouseUp=function(b){null==b.offsetX&&null!=b.layerX&&(b.offsetX=b.layerX,b.offsetY=b.layerY);var c={button:b.button};c.offsetX=a.ll_scaleX(b.offsetX),c.offsetY=a.ll_scaleY(b.offsetY),a.mouseEvent(c,LMouseEvent.MOUSE_UP),a.IS_MOUSE_DOWN=!1,a.mouseJoint_end&&a.mouseJoint_end()},a.ll_mouseOut=function(b){null==b.offsetX&&null!=b.layerX&&(b.offsetX=b.layerX,b.offsetY=b.layerY);var c={};c.offsetX=a.ll_scaleX(b.offsetX),c.offsetY=a.ll_scaleY(b.offsetY),a.mouseEvent(c,LMouseEvent.MOUSE_OUT),a.IS_MOUSE_DOWN=!1},a.touchHandler=function(b){return a.stopPropagation&&(b.stopPropagation(),b.stopImmediatePropagation&&b.stopImmediatePropagation()),a.preventDefault&&b.preventDefault(),b},a.mouseEvent=function(b,c){if(c==LMouseEvent.MOUSE_MOVE&&a.dragHandler(b),LMouseEventContainer.container[c])return LMouseEventContainer.dispatchMouseEvent(b,c),void 0;for(var d=a.childList.length-1;d>=0&&(!a.childList[d].mouseEvent||!a.childList[d].mouseEvent(b,c));d--);},a.dragHandler=function(b){var c,d,e,f=a.dragList;for(c=f.length-1;c>=0;c--)if(d=f[c],!a.canTouch||d.ll_touchPointID==b.touchPointID){e=d.getAbsoluteScale(),d.x=d.ll_dragStartX+(b.offsetX-d.ll_dragMX)*d.scaleX/e.scaleX,d.y=d.ll_dragStartY+(b.offsetY-d.ll_dragMY)*d.scaleY/e.scaleY,d.dragRange&&(d.x<d.dragRange.left?d.x=d.dragRange.left:d.x>d.dragRange.right&&(d.x=d.dragRange.right),d.y<d.dragRange.top?d.y=d.dragRange.top:d.y>d.dragRange.bottom&&(d.y=d.dragRange.bottom));break}},a._ll_mobile=function(){var n,o,p,q,r,b=.3*a.width,c=1.5*b,d=.05*a.width,e=.05*b,f=.15*b,g=.3*b,h=.2*c,i="#cccccc",j="#000000",k="#ffffff",l="#ff0000",m=new LSprite;return addChild(m),b=.3*a.width,c=1.5*b,m.graphics.drawRoundRect(1,j,[d,d,b,c,d],!0,i),m.graphics.drawRoundRect(1,j,[d+e,d+e,b-2*e,c-2*e,d],!0,j),m.graphics.drawRect(1,k,[d+f,d+h,b-2*f,c-2*h],!0,k),m.graphics.drawArc(1,k,[d+.5*b,d+c-3.5*e,1.5*e,0,2*Math.PI]),m.graphics.drawRoundRect(1,k,[d+g,d+f,b-2*g,e,.5*e]),n=new LSprite,n.x=.5*-(b-2*f),n.y=.5*-e,n.graphics.drawRect(1,l,[0,0,b-2*f,e],!0,l),o=new LSprite,o.y=.5*-(b-2*f),o.x=.5*-e,o.graphics.drawRect(1,l,[0,0,e,b-2*f],!0,l),p=new LSprite,p.x=d+g+.5*(b-2*g),p.y=d+h+.5*(c-2*h),p.rotate=45,p.addChild(n),p.addChild(o),m.addChild(p),q=new LSprite,q.graphics.drawVertices(2,j,[[0,0],[f,f],[0,2*f]],!0,i),q.x=1.5*d+c,q.y=1.5*d+.5*c,addChild(q),m.arrow=q,r=function(){setTimeout(function(){location.href=location.href},100)},window.onorientationchange=r,m},a.verticalError=function(){var b=.3*a.width,c=.05*a.width,d=a._ll_mobile(),e=d.clone();e.getChildAt(0).visible=!1,e.x=.5*a.width+c,addChild(e),d.rotate=90,d.x=.5*a.width+c,d.y=.5*b},a.horizontalError=function(){var b=.3*a.width,c=.05*a.width,d=a._ll_mobile(),e=d.clone();e.getChildAt(0).visible=!1,e.rotate=90,e.x=a.width-c,e.y=.5*b,addChild(e),d.arrow.x=1.5*c+b},a.onShow=function(){null!=a.canvas&&(a._outStageCheckCount<=0&&(a._outStageCheckCount--,a._outStageCheckCount<-2&&(a.stage.dispatchEvent(new LEvent(LFocusEvent.FOCUS_OUT)),a._outStageCheckCount=1)),a.fpsStatus&&a.fpsStatus.reset(),a.stage.onresizeEvent&&(a.stage.onresizeListener(a.stage.onresizeEvent),delete a.stage.onresizeEvent),a.forceRefresh&&(a.canvasObj.width=a.canvasObj.width,a.forceRefresh=!1),a.canvas.beginPath(),null!=a.box2d?(a.box2d.ll_show(),!a.traceDebug&&a.keepClear&&a.canvas.clearRect(0,0,a.width+1,a.height+1)):(a.keepClear&&a.canvas.clearRect(0,0,a.width+1,a.height+1),null!==a.backgroundColor&&(a.canvas.fillStyle=a.backgroundColor,a.canvas.fillRect(0,0,a.width,a.height))),a.show(a.childList))},a.show=function(a){for(var d,b=0,c=a.length;c>b;b++)d=a[b],d&&d.ll_show&&(d.ll_show(),d._ll_removeFromSelf&&(b--,c--))},a.divideCoordinate=function(a,b,c,d){var e,f,j,g=a/d,h=b/c,i=[];for(e=0;c>e;e++){for(j=[],f=0;d>f;f++)j.push({x:g*f,y:h*e,width:g,height:h});i.push(j)}return i},a._create_loading_color=function(){var b=a.canvas.createRadialGradient(a.width/2,a.height,0,a.width/2,0,a.height);return b.addColorStop(0,"red"),b.addColorStop(.3,"orange"),b.addColorStop(.4,"yellow"),b.addColorStop(.5,"green"),b.addColorStop(.8,"blue"),b.addColorStop(1,"violet"),b},a.hitPolygon=function(a,b,c){var h,i,j,k,l,d=0,e=a[0],f=b<=e[0],g=c<=e[1];for(h=1,i=a.length;i+1>h;h++)j=a[h%i],k=b<=j[0],l=c<=j[1],g!=l&&(f==k?f&&(d+=g?-1:1):b<=e[0]+(j[0]-e[0])*(c-e[1])/(j[1]-e[1])&&(d+=g?-1:1)),e=j,f=k,g=l;return 0!=d},a.hitTestPolygon=function(a,b){var c,d,e,f,g,j,k,i=[[a,[],[]],[b,[],[]]];for(d=0;d<i.length;d++){for(f=i[d][0],g=i[d][1],c=0,e=f.length;e>c;c++)i[d][2].push(new LVec2(f[c][0],f[c][1])),e-1>c&&g.push(new LVec2(f[c+1][0]-f[c][0],f[c+1][1]-f[c][1]).normL());g.push(new LVec2(f[0][0]-f[e-1][0],f[0][1]-f[e-1][1]).normL())}for(d=0;d<i.length;d++)for(g=i[d][1],c=0,e=g.length;e>c;c++)if(j=LVec2.getMinMax(i[0][2],g[c]),k=LVec2.getMinMax(i[1][2],g[c]),j.max_o<k.min_o||j.min_o>k.max_o)return!1;return!0},a.hitTestPolygonArc=function(b,c){if(a.hitPolygon(b,c[0],c[1]))return!0;var d,e,f,g,h,i,j,k,l,m;for(d=0,f=b.length;f>d;d++)if(e=f-1>d?d+1:0,g=b[d],h=b[e],i=new LVec2(c[0]-g[0],c[1]-g[1]),j=new LVec2(h[0]-g[0],h[1]-g[1]),m=j.normalize(),l=LVec2.dot(i,m),0>=l){if(i.x*i.x+i.y*i.y<c[3])return!0}else if(l*l<j.x*j.x+j.y*j.y&&(k=LVec2.cross(i,m),k*k<c[3]))return!0;return!1},a.hitTestArc=function(a,b,c,d){var k,l,e=.5*a.getWidth(),f=.5*b.getWidth(),g=a._startX?a._startX():a.startX(),h=b._startX?b._startX():b.startX(),i=a._startY?a._startY():a.startY(),j=b._startY?b._startY():b.startY();return typeof c!=UNDEFINED&&(g+=e-c,i+=e-c,e=c),typeof d!=UNDEFINED&&(h+=f-d,j+=f-d,f=d),k=g+e-h-f,l=i+e-j-f,(e+f)*(e+f)>k*k+l*l},a.hitTestRect=function(a,b,c,d){var m,n,o,p,e=a.getWidth(),f=b.getWidth(),g=a.getHeight(),h=b.getHeight(),i=a._startX?a._startX():a.startX(),j=b._startX?b._startX():b.startX(),k=a._startY?a._startY():a.startY(),l=b._startY?b._startY():b.startY();return typeof c!=UNDEFINED&&(i+=.5*(e-c[0]),k+=.5*(g-c[1]),e=c[0],g=c[1]),typeof d!=UNDEFINED&&(j+=.5*(f-d[0]),l+=.5*(h-d[1]),f=d[0],h=d[1]),m=i>j?i:j,n=k>l?k:l,o=i+e>j+f?j+f:i+e,p=k+g>l+h?l+h:k+g,o>=m&&p>=n},a.hitTest=a.hitTestRect,a.setFrameRate=function(b){a.frameRate&&clearInterval(a.frameRate),a.speed=b,a.frameRate=setInterval(function(){a.onShow()},b)},a.ll_scaleX=function(b){return(b-a.left)*a.width/a.canvasStyleWidth},a.ll_scaleY=function(b){return(b-a.top)*a.height/a.canvasStyleHeight},a.ll_setStageSize=function(b,c){b=Math.ceil(b),c=Math.ceil(c),a.canvasObj.style.width=b+"px",a.canvasObj.style.height=c+"px",a.canvasStyleWidth=b,a.canvasStyleHeight=c},a.resize=function(b,c){var d,e,f=0,g=0,h=window.innerWidth,i=window.innerHeight;switch(a.innerWidth=h,a.innerHeight=i,b&&(d=b),c&&(e=c),"noScale"==a.stageScale&&(d=b||a.width,e=c||a.height),a.stageScale){case"exactFit":d=b||h,e=c||i;
break;case"noBorder":switch(d=b||h,e=c||a.height*h/a.width,a.align){case LStageAlign.BOTTOM:case LStageAlign.BOTTOM_LEFT:case LStageAlign.BOTTOM_RIGHT:case LStageAlign.BOTTOM_MIDDLE:f=i-e}break;case"showAll":h/i>a.width/a.height?(e=c||i,d=b||a.width*i/a.height):(d=b||h,e=c||a.height*h/a.width);case"noScale":default:switch(a.align){case LStageAlign.BOTTOM:case LStageAlign.BOTTOM_LEFT:f=i-e;break;case LStageAlign.RIGHT:case LStageAlign.TOP_RIGHT:g=h-d;break;case LStageAlign.TOP_MIDDLE:g=.5*(h-d);break;case LStageAlign.BOTTOM_RIGHT:f=i-e,g=h-d;break;case LStageAlign.BOTTOM_MIDDLE:f=i-e,g=.5*(h-d);break;case LStageAlign.MIDDLE:f=.5*(i-e),g=.5*(h-d);break;case LStageAlign.TOP:case LStageAlign.LEFT:case LStageAlign.TOP_LEFT:}}a.canvasObj.style.marginTop=f+"px",a.canvasObj.style.marginLeft=g+"px",a.isOldFirefox&&(a.left=parseInt(a.canvasObj.style.marginLeft),a.top=parseInt(a.canvasObj.style.marginTop)),a.ll_setStageSize(d,e)},a.sleep=function(a){for(var b=new Date;(new Date).getTime()-b.getTime()<a;);},a.screen=function(b){a.displayState=b,a.stage&&("number"==typeof a.displayState?a.resize(a.width*a.displayState,a.height*a.displayState):a.resize())},a}(),LSystem=LGlobal,LStage=LGlobal,Array.prototype.indexOf||(Array.prototype.indexOf=function(a){var b=this.length>>>0,c=Number(arguments[1])||0;for(c=0>c?Math.ceil(c):Math.floor(c),0>c&&(c+=b);b>c;c++)if(c in this&&this[c]===a)return c;return-1}),Array.isArray||(Array.isArray=function(a){return"[object Array]"==Object.prototype.toString.apply(a)}),Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind-what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d&&a?this:a,b.concat(Array.prototype.slice.call(arguments)))};return d.prototype=this.prototype,e.prototype=new d,e}),Array.prototype.find||(Array.prototype.find=function(a){var b,c,d,e,f;if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof a)throw new TypeError("predicate must be a function");for(b=Object(this),c=b.length>>>0,d=arguments[1],f=0;c>f;f++)if(e=b[f],a.call(d,e,f,b))return e;return void 0}),Array.prototype.findIndex||(Array.prototype.findIndex=function(a){var b,c,d,e,f;if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof a)throw new TypeError("predicate must be a function");for(b=Object(this),c=b.length>>>0,d=arguments[1],f=0;c>f;f++)if(e=b[f],a.call(d,e,f,b))return f;return-1}),Array.prototype.forEach||(Array.prototype.forEach=function(a,b){var c,d,e,f,g;if(null==this)throw new TypeError(" this is null or not defined");if(e=Object(this),f=e.length>>>0,"function"!=typeof a)throw new TypeError(a+" is not a function");for(arguments.length>1&&(c=b),d=0;f>d;)d in e&&(g=e[d],a.call(c,g,d,e)),d++}),Array.prototype.every||(Array.prototype.every=function(a,b){"use strict";var c,d,e,f,g,h;if(null==this)throw new TypeError("this is null or not defined");if(e=Object(this),f=e.length>>>0,"function"!=typeof a)throw new TypeError;for(arguments.length>1&&(c=b),d=0;f>d;){if(d in e&&(g=e[d],h=a.call(c,g,d,e),!h))return!1;d++}return!0}),Array.prototype.some||(Array.prototype.some=function(a){"use strict";var b,c,d,e;if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof a)throw new TypeError;for(b=Object(this),c=b.length>>>0,d=arguments.length>=2?arguments[1]:void 0,e=0;c>e;e++)if(e in b&&a.call(d,b[e],e,b))return!0;return!1}),String.format||(String.format=function(a){var b=Array.prototype.slice.call(arguments,1);return a.replace(/{(\d+)}/g,function(a,c){return"undefined"!=typeof b[c]?b[c]:a})}),void 0===Function.prototype.name&&void 0!==Object.defineProperty&&Object.defineProperty(Function.prototype,"name",{get:function(){var a=/function\s([^(]{1,})\(/,b=a.exec(this.toString());return b&&b.length>1?b[1].trim():""},set:function(){}}),window.console||(window.console={log:trace,warn:trace}),LInit=init,LExtends=base,LObject=function(){function a(){this.type="LObject",this.objectIndex=++LGlobal.objectIndex,this.objectindex=this.objectIndex}return a.prototype={callParent:function(a,b){if(a&&b){var e,c=this,d=!1,f="__ll__parent_call"+a;return"undefined"==typeof c[f]?(d=!0,c[f]=0):c[f]++,c[f]>=c.__ll__parent__.length?!1:(e=c.__ll__parent__[c[f]][a]?c.__ll__parent__[c[f]][a].apply(c,b):c.callParent(a,b),d&&delete c[f],e)}},copyProperty:function(a){var c,b=this;for(c in a)if("number"==typeof a[c]||"string"==typeof a[c]||"boolean"==typeof a[c]){if("objectindex"==c||"objectIndex"==c)continue;b[c]=a[c]}else Array.isArray(a[c])&&(b[c]=a[c].slice());a.mask&&(b.mask=a.mask.clone())},toString:function(){return"[object "+this.constructor.name+"]"}},a}(),LColorTransform=function(){function a(a,b,c,d,e,f,g,h){var i=this;LExtends(i,LObject,[]),i.redMultiplier=a,i.greenMultiplier=b,i.blueMultiplier=c,i.alphaMultiplier=d,i.redOffset=e,i.greenOffset=f,i.blueOffset=g,i.alphaOffset=h}return a}(),LTransform=function(){function a(){var a=this;LExtends(a,LObject,[]),a.matrix=null}return a}(),LMatrix=function(){function a(a,b,c,d,e,f,g,h,i){var j=this;LExtends(j,LObject,[]),j.a=1,j.b=0,j.u=0,j.c=0,j.d=1,j.v=0,j.tx=0,j.ty=0,j.w=1,typeof a!=UNDEFINED&&(j.a=a),typeof b!=UNDEFINED&&(j.b=b),typeof c!=UNDEFINED&&(j.c=c),typeof d!=UNDEFINED&&(j.d=d),typeof e!=UNDEFINED&&(j.tx=e),typeof f!=UNDEFINED&&(j.ty=f),typeof g!=UNDEFINED&&(j.u=g),typeof h!=UNDEFINED&&(j.v=h),typeof i!=UNDEFINED&&(j.w=i)}var c,b={setTo:function(a,b,c,d,e,f,g,h,i){var j=this;return typeof a!=UNDEFINED&&(j.a=a),typeof b!=UNDEFINED&&(j.b=b),typeof c!=UNDEFINED&&(j.c=c),typeof d!=UNDEFINED&&(j.d=d),typeof e!=UNDEFINED&&(j.tx=e),typeof f!=UNDEFINED&&(j.ty=f),typeof g!=UNDEFINED&&(j.u=g),typeof h!=UNDEFINED&&(j.v=h),typeof i!=UNDEFINED&&(j.w=i),j},isIdentity:function(){var a=this;return 1==a.a&&0==a.b&&0==a.c&&1==a.d&&0==a.tx&&0==a.ty&&0==u&&0==v&&1==w},transform:function(a){var b=this;return a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty),b},identity:function(){this.setTo(1,0,0,1,0,0,0,0,1)},rotate:function(b){var c=this,d=b*Math.PI/180,e=Math.cos(d),f=Math.sin(d),g=new a(e,f,-f,e,0,0,0,0,1);return c.add(g),c},scale:function(b,c){var d=this,e=new a(b,0,0,c,0,0,0,0,1);return d.add(e),d},translate:function(b,c){var d=this,e=new a(1,0,0,1,b,c,0,0,1);return d.add(e),d},skew:function(b,c){var d=this,e=new a(1,c,b,1,0,0,0,0,1);return d.add(e),d},add:function(a){var c,d,e,f,g,h,i,j,k,b=this;c=b.a*a.a+b.b*a.c+b.u*a.tx,d=b.a*a.b+b.b*a.d+b.u*a.ty,i=b.a*a.u+b.b*a.v+b.u*a.w,e=b.c*a.a+b.d*a.c+b.v*a.tx,f=b.c*a.b+b.d*a.d+b.v*a.ty,j=b.c*a.u+b.d*a.v+b.v*a.w,g=b.tx*a.a+b.ty*a.c+b.w*a.tx,h=b.tx*a.b+b.ty*a.d+b.w*a.ty,k=b.tx*a.u+b.ty*a.v+b.w*a.w,b.setTo(c,d,e,f,g,h,i,j,k)},toArray:function(a){var c,d,e,f,g,h,i,j,k,l,m,n,b=this;return Array.isArray(a)&&3==a.length?(c=a[0]*b.a+a[1]*b.c+a[2]*b.tx,d=a[0]*b.b+a[1]*b.d+a[2]*b.ty,e=a[0]*b.u+a[1]*b.v+a[2]*b.w,[c,d,e]):(f=b.a*a.a+b.b*a.c+b.u*a.tx,g=b.a*a.b+b.b*a.d+b.u*a.ty,h=b.a*a.u+b.b*a.v+b.u*a.w,i=b.c*a.a+b.d*a.c+b.v*a.tx,j=b.c*a.b+b.d*a.d+b.v*a.ty,k=b.c*a.u+b.d*a.v+b.v*a.w,l=b.tx*a.a+b.ty*a.c+b.w*a.tx,m=b.tx*a.b+b.ty*a.d+b.w*a.ty,n=b.tx*a.u+b.ty*a.v+b.w*a.w,[f,g,i,j,l,m,h,k,n])},clone:function(){var b=this;return new a(b.a,b.b,b.c,b.d,b.tx,b.ty,b.u,b.v,b.w)}};for(c in b)a.prototype[c]=b[c];return a}(),LVec2=function(){function a(a,b){this.x=a||0,this.y=b||0}return a.dot=function(a,b){return a.x*b.x+a.y*b.y},a.cross=function(a,b){return a.x*b.y-a.y*b.x},a.distance=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)},a.getMinMax=function(b,c){var h,i,j,d=a.dot(b[0],c),e=a.dot(b[0],c),f=0,g=0;for(h=1;h<b.length;h++)i=a.dot(b[h],c),d>i&&(d=i,f=h),i>e&&(e=i,g=h);return j={min_o:d,min_i:f,max_o:e,max_i:g}},a.prototype={length:function(){var a=this;return Math.sqrt(a.x*a.x+a.y*a.y)},normalize:function(){var b=this,c=b.length();return new a(b.x/c,b.y/c)},normR:function(){return new a(-this.y,this.x)},normL:function(){return new a(this.y,-this.x)}},a}(),LEventDispatcher=function(){function a(){var a=this;LExtends(a,LObject,[]),a._eventList=new Array}var c,b={addEventListener:function(a,b){this._eventList.push({listener:b,type:a})},removeEventListener:function(a,b){var d,e,c=this;for(e=c._eventList.length,d=0;e>d;d++)if(c._eventList[d]&&a==c._eventList[d].type&&(!b||c._eventList[d].listener==b))return c._eventList.splice(d,1),void 0},removeAllEventListener:function(){this._eventList=[]},dispatchEvent:function(a){var c,b=this,d=b._eventList.length,e="string"==typeof a?a:a.eventType;for(c=0;d>c;c++)if(b._eventList[c]&&e==b._eventList[c].type){if("string"==typeof a)b.currentTarget=b.target=b,b.eventType=b.event_type=e,b._eventList[c].listener(b),delete b.currentTarget,delete b.target,delete b.eventType;else if(a.target||(a.target=b),a.currentTarget||(a.currentTarget=a.target),a._ll_preventDefault=!1,b._eventList[c].listener(a),a._ll_preventDefault)return!1;return!0}return!1},hasEventListener:function(a,b){var d,c=this,e=c._eventList.length;for(d=0;e>d;d++)if(c._eventList[d]&&a==c._eventList[d].type&&(typeof b==UNDEFINED||b==c._eventList[d].listener))return!0;return!1}};for(c in b)a.prototype[c]=b[c];return a}(),LDisplayObject=function(){function a(){var a=this;LExtends(a,LEventDispatcher,[]),a.name="instance"+a.objectIndex,a.x=0,a.y=0,a.width=0,a.height=0,a.scaleX=1,a.scaleY=1,a.alpha=1,a.visible=!0,a.rotate=0,a.mask=null,a.blendMode=null,a.filters=null,a.transform=new LTransform,a.parent=null}var c,b={_createCanvas:function(){var a=this;a._canvas||(a._canvas=document.createElement("canvas"),a._context=a._canvas.getContext("2d"))},ll_show:function(){var a=this,b=LGlobal.canvas;a._canShow()&&(a._ll_trans=!1,LGlobal.box2d||"function"!=typeof a._ll_loopframe||a._ll_loopframe(),b.save(),a._showReady(b),a.blendMode&&(b.globalCompositeOperation=a.blendMode),a.filters&&a._ll_setShadow(),a._rotateReady(),null!=a.mask&&a.mask.ll_show&&(a.mask.ll_show(),b.clip()),a._transformRotate(),a._transformScale(),a._coordinate(b),a.transform.matrix&&a.transform.matrix.transform(b),a.alpha<1&&(a._ll_trans=!0,b.globalAlpha=a.alpha),LGlobal.fpsStatus&&(LGlobal.fpsStatus.display++,a._ll_trans&&LGlobal.fpsStatus.transform++),a._ll_show(b),b.restore(),null!=LGlobal.box2d&&"function"==typeof a._ll_loopframe&&a._ll_loopframe())},_canShow:function(){return this.visible},_coordinate:function(a){var b=this;(0!=b.x||0!=b.y)&&(b._ll_trans=!0,a.transform(1,0,0,1,b.x,b.y))},_rotateReady:function(){},_showReady:function(){},_ll_show:function(){},_ll_setShadow:function(){var c,d,a=this,b=a.filters;if(b)for(c=0,d=b.length;d>c;c++)b[c].ll_show()},_transformRotate:function(){var b,a=this;0!=a.rotate&&(a._ll_trans=!0,b=LGlobal.canvas,rotateFlag=Math.PI/180,rotateObj=new LMatrix,typeof a.rotatex==UNDEFINED&&(a.rotatex=0,a.rotatey=0),a.box2dBody&&(rotateFlag=1),rotateObj.a=Math.cos(a.rotate*rotateFlag),rotateObj.b=Math.sin(a.rotate*rotateFlag),rotateObj.c=-rotateObj.b,rotateObj.d=rotateObj.a,rotateObj.tx=a.x+a.rotatex,rotateObj.ty=a.y+a.rotatey,rotateObj.transform(b).setTo(1,0,0,1,-rotateObj.tx,-rotateObj.ty).transform(b))},_transformScale:function(){var c,a=this,b=LGlobal.canvas;(1!=a.scaleX||1!=a.scaleY)&&(a._ll_trans=!0,c=new LMatrix,1!=a.scaleX&&(c.tx=a.x),1!=a.scaleY&&(c.ty=a.y),c.a=a.scaleX,c.d=a.scaleY,c.transform(b).setTo(1,0,0,1,-c.tx,-c.ty).transform(b))},getAbsoluteScale:function(){var b,c,d,a=this;for(b=a.scaleX,c=a.scaleY,d=a.parent;d&&"root"!=d;)b*=d.scaleX,c*=d.scaleY,d=d.parent;return{scaleX:b,scaleY:c}},getRootCoordinate:function(){var b,c,d,a=this;for(b=a.x,c=a.y,d=a.parent;d&&"root"!=d;)b*=d.scaleX,c*=d.scaleY,b+=d.x,c+=d.y,d=d.parent;return new LPoint(b,c)},getBounds:function(a){if(typeof a==UNDEFINED)return new LRectangle(0,0,0,0);var g,h,b=this,c=0,d=0,e=0,f=0;return b.objectIndex!=a.objectIndex&&(g=b.getRootCoordinate(),h=a.getRootCoordinate(),c=g.x-h.x,d=g.y-h.y),a.getWidth&&(e=a.getWidth()),a.getHeight&&(f=a.getHeight()),new LRectangle(c,d,e,f)},getDataCanvas:function(){var b,c,d,e,f,g,a=this;return a._createCanvas(),c=LGlobal.canvasObj,e=LGlobal.canvas,b=a._canvas,d=a._context,a.width=a.getWidth(),a.height=a.getHeight(),b.width=a.width,b.height=a.height,d.clearRect(0,0,a.width,a.height),LGlobal.canvasObj=a._canvas,LGlobal.canvas=a._context,f=a.x,g=a.y,a.x=a.y=0,a.ll_show(),a.x=f,a.y=g,a._canvas=b,a._context=d,LGlobal.canvasObj=c,LGlobal.canvas=e,a._canvas},getDataURL:function(){var a=this,b=a.getDataCanvas();return b.toDataURL.apply(b,arguments)},ismouseonShapes:function(a,b,c){var f,g,h,i,j,d=this;for(typeof a==UNDEFINED&&(a=d.shapes),f=d.getRootMatrix(),h=a.length-1;h>=0;h--)if(g=a[h],j=g.arg,i=d._changeShape(g.type,j,f),g.type==LShape.VERTICES){if(LGlobal.hitPolygon(i,b,c))return!0}else if(g.type==LShape.RECT){if(LGlobal.hitPolygon(i,b,c))return!0}else if(g.type==LShape.ARC&&(i[0]-b)*(i[0]-b)+(i[1]-c)*(i[1]-c)<i[3])return!0;return!1},_changeShape:function(a,b,c){var d,e,f,g,h,i,b=b;if(a==LShape.VERTICES)for(d=[],f=0,g=b.length;g>f;f++)d[f]=c.toArray([b[f][0],b[f][1],1]);else if(a==LShape.RECT)for(d=[[b[0],b[1]],[b[0]+b[2],b[1]],[b[0]+b[2],b[1]+b[3]],[b[0],b[1]+b[3]]],f=0,g=d.length;g>f;f++)d[f]=c.toArray([d[f][0],d[f][1],1]);else a==LShape.ARC&&(h=c.toArray([b[0],b[1],1]),i=c.toArray([b[0]+b[2],b[1],1]),e=(h[0]-i[0])*(h[0]-i[0])+(h[1]-i[1])*(h[1]-i[1]),d=[h[0],h[1],Math.sqrt(e),e]);return d},getRootMatrix:function(){for(var a=this,b=new LMatrix;a&&"root"!=a;)(1!=a.scaleX||1!=a.scaleY)&&b.scale(a.scaleX,a.scaleY),0!=a.rotate&&b.rotate(a.rotate),(0!=a.x||0!=a.y)&&b.translate(a.x,a.y),a=a.parent;return b},remove:function(){var a=this,b=a.parent;b&&"root"!=b&&(b.removeChild(a),a._ll_removeFromSelf=!0)}};for(c in b)a.prototype[c]=b[c];return a}(),LInteractiveObject=function(){function a(){var a=this;LExtends(a,LDisplayObject,[]),a.type="LInteractiveObject",a.mouseEnabled=!0,a.mouseList=new Array}var c,b={addEventListener:function(a,b){var c=this;if(a.indexOf("mouse")>=0||a.indexOf("touch")>=0||a==LMouseEvent.DOUBLE_CLICK){if(LMouseEventContainer.container[a]||(a==LMouseEvent.MOUSE_OVER||a==LMouseEvent.MOUSE_OUT)&&LMouseEventContainer.container[LMouseEvent.MOUSE_MOVE])return LMouseEventContainer.addMouseEvent(c,a,b),void 0;c.mouseList.push({listener:b,type:a})}else c._eventList.push({listener:b,type:a})},removeEventListener:function(a,b){var d,e,c=this;if(!(a.indexOf("mouse")>=0||a.indexOf("touch")>=0||a==LMouseEvent.DOUBLE_CLICK))return c.callParent("removeEventListener",arguments);if(LMouseEventContainer.container[a]||(a==LMouseEvent.MOUSE_OVER||a==LMouseEvent.MOUSE_OUT)&&LMouseEventContainer.container[LMouseEvent.MOUSE_MOVE])return LMouseEventContainer.removeMouseEvent(c,a,b),void 0;for(e=c.mouseList.length,d=0;e>d;d++)if(c.mouseList[d]&&a==c.mouseList[d].type&&c.mouseList[d].listener==b)return c.mouseList.splice(d,1),void 0},removeAllEventListener:function(){var a=this;a.mouseList.length=0,a._eventList.length=0,LMouseEventContainer.container[LMouseEvent.MOUSE_DOWN]&&LMouseEventContainer.removeMouseEvent(a,LMouseEvent.MOUSE_DOWN),LMouseEventContainer.container[LMouseEvent.MOUSE_UP]&&LMouseEventContainer.removeMouseEvent(a,LMouseEvent.MOUSE_UP),LMouseEventContainer.container[LMouseEvent.MOUSE_MOVE]&&(LMouseEventContainer.removeMouseEvent(a,LMouseEvent.MOUSE_MOVE),LMouseEventContainer.removeMouseEvent(a,LMouseEvent.MOUSE_OVER),LMouseEventContainer.removeMouseEvent(a,LMouseEvent.MOUSE_OUT))},hasEventListener:function(a,b){var d,e,c=this;if(LMouseEventContainer.container[a])return LMouseEventContainer.hasEventListener(c,a,b);if(!(a.indexOf("mouse")>=0||a.indexOf("touch")>=0||a==LMouseEvent.DOUBLE_CLICK))return c.callParent("hasEventListener",arguments);for(e=c.mouseList.length,d=0;e>d;d++)if(c.mouseList[d]&&a==c.mouseList[d].type&&(!b||c.mouseList[d].listener==b))return!0;return!1}};for(c in b)a.prototype[c]=b[c];return a}(),LDisplayObjectContainer=function(){function a(){var a=this;LExtends(a,LInteractiveObject,[]),a.childList=new Array,a.numChildren=0,a.mouseChildren=!0}var c,b={addChild:function(a){var c,b=this;return a.parent&&(c=LGlobal.destroy,LGlobal.destroy=!1,a.parent.removeChild(a),LGlobal.destroy=c),a.parent=b,b.childList.push(a),b.numChildren=b.childList.length,b._ll_removeFromSelf=!1,a},addChildAt:function(a,b){var d,c=this;if(!(0>b||b>c.childList.length))return"function"==typeof a.remove&&(d=LGlobal.destroy,LGlobal.destroy=!1,a.remove(),LGlobal.destroy=d),a.parent=c,c.childList.splice(b,0,a),c.numChildren=c.childList.length,c._ll_removeFromSelf=!1,a},removeChild:function(a){var d,e,b=this,c=b.childList;for(d=0,e=c.length;e>d;d++)if(a.objectIndex==c[d].objectIndex){LGlobal.destroy&&a.die&&a.die(),b.childList.splice(d,1);break}b.numChildren=b.childList.length,delete a.parent},getChildAt:function(a){var b=this,c=b.childList;return 0==c.length||c.length<=a?null:c[a]},getChildByName:function(a){var d,e,b=this,c=b.childList;for(d=0,e=c.length;e>d;d++)if(c[d]&&c[d].name==a)return c[d];return null},removeChildAt:function(a){var d,b=this,c=b.childList;if(!(c.length<=a))return LGlobal.destroy&&c[a].die&&c[a].die(),d=b.childList.splice(a,1),b.numChildren=b.childList.length,d},getChildIndex:function(a){if(!a)return-1;var d,b=this,c=b.childList,e=c.length;for(d=0;e>d;d++)if(c[d].objectIndex==a.objectIndex)return d;return-1},setChildIndex:function(a,b){var e,c=this,d=c.childList,f=d.length;if("root"==a.parent||a.parent.objectIndex!=c.objectIndex||0>b||b>=f)return-1;for(e=0;f>e&&d[e].objectIndex!=a.objectIndex;e++);return c.childList.splice(e,1),c.childList.splice(b,0,a),b},resize:function(){var a=this;a.width=a.getWidth(),a.height=a.getHeight()},removeAllChild:function(){var c,d,a=this,b=a.childList;for(c=0,d=b.length;d>c;c++)LGlobal.destroy&&b[c].die&&b[c].die();a.childList.length=0,a.width=0,a.height=0,a.numChildren=0}};for(c in b)a.prototype[c]=b[c];return a}(),LLoader=function(){function a(){var a=this;LExtends(a,LEventDispatcher,[]),a.type="LLoader"}return a.TYPE_BITMAPDATE="bitmapData",a.prototype.load=function(b,c){var d=this;c||(c=a.TYPE_BITMAPDATE),d.loadtype=c,c==a.TYPE_BITMAPDATE&&(d.content=new Image,d.content.onload=function(){d.content.onload=null;var a=new LEvent(LEvent.COMPLETE);a.currentTarget=d,a.target=d.content,d.dispatchEvent(a),delete d.content},d.content.src=b)},a}(),LURLLoader=function(){function a(){var a=this;LExtends(a,LEventDispatcher,[]),a.type="LURLLoader",a.loadtype="",a.content=null,a.event={}}return a.TYPE_TEXT="text",a.TYPE_JS="js",a.prototype.load=function(b,c){var e,f,g,d=this;c||(f=getExtension(b),"txt"==f?c=a.TYPE_TEXT:"js"==f&&(c=a.TYPE_JS)),d.loadtype=c,c==a.TYPE_TEXT?LAjax.get(b,{},function(a){e=new LEvent(LEvent.COMPLETE),d.data=a,e.currentTarget=d,e.target=a,d.dispatchEvent(e),delete d.content,delete d.data}):c==a.TYPE_JS&&(g=document.createElement("script"),g.onload=function(){e=new LEvent(LEvent.COMPLETE),e.currentTarget=d,e.target=d,d.dispatchEvent(e),delete d.content},g.src=b,g.type="text/javascript",document.querySelector("head").appendChild(g))},a}(),LWebAudio=function(){function a(){var a=this;LExtends(a,LEventDispatcher,[]),a.currentTime=0,a.currentStart=0,a.currentSave=0,a.length=0,a.loopStart=0,a.loopEnd=0,a.loopIndex=0,a.loopLength=1,a.playing=!1,a.volume=1,LSound.Container.add(a)}var c,d;a.container=[],a.containerCount=0;try{a.audioTag=new Audio}catch(b){console.warn("ReferenceError:Can't find variable:Audio"),a.audioTag={canPlayType:function(){return!1}}}a._context=null,c={getWebAudio:function(){var b;if(a.containerCount>0)b=a.container.shift();else if(typeof AudioContext!==UNDEFINED)try{b=new AudioContext}catch(c){a.containerCount=a.container.length,b=a.container.shift()}else{if(typeof webkitAudioContext===UNDEFINED)throw"AudioContext not supported.:(";try{b=new webkitAudioContext}catch(c){a.containerCount=a.container.length,b=a.container.shift()}}return b.createGainNode||(b.createGainNode=b.createGain),a.container.push(b),b},onload:function(a){var c,b=this;return"[object AudioBuffer]"!==Object.prototype.toString.apply(a)?(b.load(a),void 0):(b.data||(b.data=b.getWebAudio()),b.buffer=a,b.length=b.buffer.duration,c=new LEvent(LEvent.COMPLETE),c.currentTarget=b,c.target=b.buffer,b.dispatchEvent(c),void 0)},_onended:function(){var a=this;a.dispatchEvent(LEvent.SOUND_COMPLETE),a.close(),++a.loopIndex<a.loopLength&&a.play(a.currentStart,void 0,a.currentTimeTo)},load:function(b){var d,e,f,g,h,i,j,c=this;if("string"!=typeof b)return"[object AudioBuffer]"==Object.prototype.toString.apply(b)?c.onload(b):"[object ArrayBuffer]"==Object.prototype.toString.apply(b)&&(c.data||(c.data=c.getWebAudio()),c.data.decodeAudioData(b,c.onload.bind(c),function(a){throw"AudioContext decodeAudioData error:"+a.toString()})),void 0;for(i={mov:["quicktime"],"3gp":["3gpp"],midi:["midi"],mid:["midi"],ogv:["ogg"],m4a:["acc"],mp3:["mpeg"],wav:["wav","x-wav","wave"],wave:["wav","x-wav","wave"],aac:["mp4","aac"]},d=b.split(","),g=0;g<d.length;g++){if(e=d[g].split("."),h=e[e.length-1],h=i[h]?i[h]:[h],f=h.some(function(b){return a.audioTag.canPlayType(c._type+"/"+b)}))return LAjax.responseType=LAjax.ARRAY_BUFFER,LAjax.get(d[g],{},c.onload.bind(c)),void 0;console.warn("Not support "+e[e.length-1]+":"+d[g]),j=new LEvent(LEvent.COMPLETE),j.currentTarget=j.target=c,c.dispatchEvent(j)}},getCurrentTime:function(){var a=this;return a.playing?a.data.currentTime-a.currentSave+a.currentTime:a.currentSave},setVolume:function(a){var b=this;b.volume=a,b.playing&&(b.volumeNode.gain.value=a)},getVolume:function(){return this.volume},play:function(a,b,c){var d=this;0!=d.length&&(typeof b!==UNDEFINED&&(d.loopIndex=0,d.loopLength=b),typeof a!==UNDEFINED&&(d.currentTime=a,d.currentStart=a),d.currentTimeTo=typeof c!==UNDEFINED?c>d.length?d.length:c:d.length,d.data.loop=!1,d.playing=!0,d.timeout&&(clearTimeout(d.timeout),delete d.timeout),d.timeout=setTimeout(d._onended.bind(d),1e3*(d.currentTimeTo-d.currentTime)),d.bufferSource=d.data.createBufferSource(),d.bufferSource.buffer=d.buffer,d.volumeNode=d.data.createGainNode(),d.volumeNode.gain.value=d.volume,d.volumeNode.connect(d.data.destination),d.bufferSource.connect(d.volumeNode),d.currentSave=d.data.currentTime,d.bufferSource.start?d.bufferSource.start(0,d.currentTime,d.length-d.currentTime):d.bufferSource.noteGrainOn(0,d.currentTime,d.length-d.currentTime))},playSegment:function(a,b,c){this.playTo(a,a+b,c)},playTo:function(a,b,c){this.play(a,c,b)},stop:function(){var a=this;a.playing&&(a.timeout&&(clearTimeout(a.timeout),delete a.timeout),a.bufferSource.stop?a.bufferSource.stop(0):a.bufferSource.noteOff(0),a.currentSave=a.getCurrentTime(),a.currentTime=a.currentSave,a.playing=!1)},close:function(){var a=this;a.playing&&(a.timeout&&(clearTimeout(a.timeout),delete a.timeout),a.bufferSource.stop?a.bufferSource.stop(0):a.bufferSource.noteOff(0),a.playing=!1,a.currentTime=0,a.currentSave=0)},ll_check:function(){var a=this;a.playing&&a.currentTimeTo<a.data.currentTime-a.currentSave+.001*LSound.Container.time&&a._onended()},die:function(){LSound.Container.remove(this)}};for(d in c)a.prototype[d]=c[d];return a}(),LMedia=function(){function a(){var a=this;LExtends(a,LDisplayObject,[]),a.length=0,a.loopIndex=0,a.loopLength=1,a.playing=!1,a.oncomplete=null,a.onsoundcomplete=null,a.currentStart=0,LSound.Container.add(this)}var c,b={onload:function(){var b,a=this;return a.data.readyState?(a.length=a.data.duration-(LGlobal.android?.1:0),b=new LEvent(LEvent.COMPLETE),b.currentTarget=a,b.target=a.data,a.dispatchEvent(b),void 0):(a.data.addEventListener("canplaythrough",function(){a.onload()},!1),void 0)},_onended:function(){var b,c,a=this;a.dispatchEvent(LEvent.SOUND_COMPLETE),++a.loopIndex<a.loopLength?(b=a.loopIndex,c=a.loopLength,a.close(),a.play(a.currentStart,a.loopLength,a.currentTimeTo),a.loopIndex=b):a.close()},load:function(a){var c,d,e,f,g,h,i,b=this;if("[object HTMLAudioElement]"==Object.prototype.toString.apply(a))return b.data=a,b.onload(),void 0;for(h={mov:["quicktime"],"3gp":["3gpp"],midi:["midi"],mid:["midi"],ogv:["ogg"],m4a:["acc"],mp3:["mpeg"],wav:["wav","x-wav","wave"],wave:["wav","x-wav","wave"],aac:["mp4","aac"]},c=a.split(","),f=0;f<c.length;f++){if(d=c[f].split("."),g=d[d.length-1],g=h[g]?h[g]:[g],e=g.some(function(a){return b.data.canPlayType(b._type+"/"+a)}))return b.data.src=c[f],b.onload(),b.data.load(),void 0;console.warn("Not support "+d[d.length-1]+":"+c[f]),i=new LEvent(LEvent.COMPLETE),i.currentTarget=i.target=b,b.dispatchEvent(i)}b.oncomplete&&b.oncomplete({})},getCurrentTime:function(){return this.data.currentTime},setVolume:function(a){this.data.volume=a},getVolume:function(){return this.data.volume},play:function(a,b,c){var d=this;0!=d.length&&(LGlobal.android&&LSound.Container.stopOther(this),typeof a!=UNDEFINED&&(d.data.currentTime=a,d.currentStart=a),typeof b!=UNDEFINED&&(d.loopLength=b),d.currentTimeTo=typeof c!==UNDEFINED?c>d.length?d.length:c:d.length,d.timeout&&(clearTimeout(d.timeout),delete d.timeout),d.timeout=setTimeout(function(){d._onended()},1e3*(d.currentTimeTo-d.data.currentTime)),d.data.loop=!1,d.loopIndex=0,d.playing=!0,d.data.play())},playSegment:function(a,b,c){this.playTo(a,a+b,c)},playTo:function(a,b,c){this.play(a,c,b)},stop:function(){var a=this;a.playing&&(a.timeout&&(clearTimeout(a.timeout),delete a.timeout),a.playing=!1,a.data.pause())},close:function(){var a=this;a.playing&&(a.timeout&&(clearTimeout(a.timeout),delete a.timeout),a.playing=!1,a.data.pause(),a.data.currentTime=0,a.currentSave=0)},ll_check:function(){var a=this;a.playing&&(a.data.duration!=a._ll_duration&&(a._ll_duration=a.data.duration,a.length=a.data.duration-(LGlobal.android?.1:0)),a.currentTimeTo<a.data.currentTime+.005*LSound.Container.time&&a._onended())},die:function(){LSound.Container.remove(this)}};for(c in b)a.prototype[c]=b[c];return a}(),LSound=function(){function a(b){var c=this;if(c.type="LSound",c._type="audio",a.webAudioEnabled&&LGlobal.webAudio)LExtends(c,LWebAudio,[]);else{LExtends(c,LMedia,[]);try{c.data=new Audio}catch(d){console.warn("ReferenceError:Can't find variable:Audio"),c.data={}}c.data.loop=!1,c.data.autoplay=!1}b&&c.load(b)}a.TYPE_SOUND="sound",a.webAudioEnabled=!1;var b=location.protocol;if("http:"==b||"https:"==b){if(typeof AudioContext!==UNDEFINED)try{LWebAudio._context=new AudioContext}catch(c){}else if(typeof webkitAudioContext!==UNDEFINED)try{LWebAudio._context=new webkitAudioContext}catch(c){}LWebAudio._context&&(LWebAudio.container.push(LWebAudio._context),a.webAudioEnabled=!0)}return a.Container={ll_save:0,time:0,list:[],ll_show:function(){var d,e,b=a.Container,c=(new Date).getTime();for(b.time=c-(b.ll_save?b.ll_save:c),b.ll_save=c,d=b.list,e=d.length-1;e>=0;e--)d[e]&&d[e].ll_check()},add:function(b){a.Container.list.indexOf(b)>=0||a.Container.list.push(b)},remove:function(b){var d,c=a.Container.list;for(d=c.length-1;d>=0;d--)if(c[d].objectIndex==b.objectIndex){c.splice(d,1);break}},stopOther:function(b){var d,c=a.Container.list;for(d=c.length-1;d>=0;d--)c[d].objectIndex!=b.objectIndex&&c[d].stop()}},LGlobal.childList.push(a.Container),a}(),LVideo=function(){function a(a){var b=this;LExtends(b,LMedia,[]),b.type="LVideo",b._type="video",b.rotatex=0,b.rotatey=0,b.data=document.createElement("video"),b.data.style.display="none",document.body.appendChild(b.data),b.data.id="video_"+b.objectIndex,b.data.loop=!1,b.data.autoplay=!1,a&&b.load(a)}var c,b={_ll_show:function(a){var b=this;a.drawImage(b.data,b.x,b.y)},die:function(){var a=this;document.body.removeChild(a.data),delete a.data},getWidth:function(){return this.data.width},getHeight:function(){return this.data.height}};for(c in b)a.prototype[c]=b[c];return a}(),LPoint=function(){function a(a,b){var c=this;c.x=a,c.y=b}return a.distance=function(b,c){return a.distance2(b.x,b.y,c.x,c.y)},a.distance2=function(a,b,c,d){var e=a-c,f=b-d;return Math.sqrt(e*e+f*f)},a.interpolate=function(b,c,d){return new a(b.x+(c.x-b.x)*(1-d),b.y+(c.y-b.y)*(1-d))},a.polar=function(b,c){return new a(b*Math.cos(c),b*Math.sin(c))},a.prototype={toString:function(){return"[object LPoint("+this.x+","+this.y+")]"},length:function(){return a.distance2(this.x,this.y,0,0)},add:function(b){return new a(this.x+b.x,this.y+b.y)},clone:function(){return new a(this.x,this.y)},setTo:function(a,b){this.x=a,this.y=b},copyFrom:function(a){this.setTo(a.x,a.y)},equals:function(a){return this.x==a.x&&this.y==a.y},normalize:function(a){var b=this,c=a/b.length();b.x*=c,b.y*=c},offset:function(a,b){this.x+=a,this.y+=b},subtract:function(b){return new a(this.x-b.x,this.y-b.y)}},a}(),LRectangle=function(){function a(a,b,c,d){var e=this;e.x=a,e.y=b,e.width=c,e.height=d,e.setRectangle()}return a.prototype={setRectangle:function(){var a=this;a.bottom=a.y+a.height,a.right=a.x+a.width,a.left=a.x,a.top=a.y},clone:function(){var b=this;return new a(b.x,b.y,b.width,b.height)},contains:function(a,b){var c=this;return a>=c.x&&a<=c.right&&b>=c.y&&b<=c.bottom},containsRect:function(a){var b=this;return a.x>=b.x&&a.right<=b.right&&a.y>=b.y&&a.bottom<=b.bottom},equals:function(a){var b=this;return a.x==b.x&&a.width==b.width&&a.y==b.y&&a.height==b.height},inflate:function(a,b){var c=this;c.width+=a,c.height+=b,c.setRectangle()},intersection:function(b){var c=this,d=c.x>b.x?c.x:b.x,e=c.y>b.y?c.y:b.y,f=c.right>b.right?b.right:c.right,g=c.bottom>b.bottom?b.bottom:c.bottom;return f>=d&&g>=e?new a(d,e,f,g):new a(0,0,0,0)},intersects:function(a){var b=this,c=b.x>a.x?b.x:a.x,d=b.y>a.y?b.y:a.y,e=b.right>a.right?a.right:b.right,f=b.bottom>a.bottom?a.bottom:b.bottom;return e>=c&&f>=d},isEmpty:function(){var a=this;return 0==a.x&&0==a.y&&0==a.width&&0==a.height},offset:function(a,b){var c=this;c.x+=a,c.y+=b,c.setRectangle()},setEmpty:function(){var a=this;a.x=0,a.y=0,a.width=0,a.height=0,a.setRectangle()},setTo:function(a,b,c,d){var e=this;e.x=a,e.y=b,e.width=c,e.height=d,e.setRectangle()},toString:function(){var a=this;return"[object LRectangle("+a.x+","+a.y+","+a.width+","+a.height+")]"},union:function(b){var c=this;return new a(c.x>b.x?b.x:c.x,c.y>b.y?b.y:c.y,c.right>b.right?c.right:b.right,c.bottom>b.bottom?c.bottom:b.bottom)}},a}(),LGraphics=function(){function a(){var a=this;LExtends(a,LObject,[]),a.type="LGraphics",a.color="#000000",a.alpha=1,a.bitmap=null,a.setList=new Array,a.showList=new Array}var c,b={ll_show:function(){var b,a=this,c=a.setList.length;if(0!=c)for(b=0;c>b;b++)a.setList[b](),LGlobal.fpsStatus&&LGlobal.fpsStatus.graphics++},clone:function(){var d,e,f,b=this,c=new a;for(c.color=b.color,c.alpha=b.alpha,c.bitmap=b.bitmap,d=0,e=b.setList.length;e>d;d++)f=b.setList[d],c.setList.push(f);for(d=0,e=b.showList.length;e>d;d++)f=b.showList[d],c.showList.push(f);return c},lineCap:function(a){var b=this;b.setList.push(function(){LGlobal.canvas.lineCap=a})},lineJoin:function(a){var b=this;b.setList.push(function(){LGlobal.canvas.lineJoin=a})},lineWidth:function(a){var b=this;b.setList.push(function(){LGlobal.canvas.lineWidth=a})},strokeStyle:function(a){var b=this;b.setList.push(function(){LGlobal.canvas.strokeStyle=a})},stroke:function(){var a=this;a.setList.push(function(){LGlobal.canvas.stroke()})},beginPath:function(){var a=this;a.setList.push(function(){LGlobal.canvas.beginPath()})},closePath:function(){var a=this;a.setList.push(function(){LGlobal.canvas.closePath()})},moveTo:function(a,b){var c=this;c.setList.push(function(){LGlobal.canvas.moveTo(a,b)}),c.showList.push({type:LShape.POINT,arg:[a,b]})},lineTo:function(a,b){var c=this;c.setList.push(function(){LGlobal.canvas.lineTo(a,b)}),c.showList.push({type:LShape.POINT,arg:[a,b]})},rect:function(a,b,c,d){var e=this;e.setList.push(function(){LGlobal.canvas.rect(a,b,c,d)}),e.showList.push({type:LShape.RECT,arg:[a,b,c,d]})},fillStyle:function(a){var b=this;b.setList.push(function(){LGlobal.canvas.fillStyle=a})},fill:function(){var a=this;a.setList.push(function(){LGlobal.canvas.fill()})},arc:function(a,b,c,d,e,f){var g=this;g.setList.push(function(){LGlobal.canvas.arc(a,b,c,d,e,f)}),g.showList.push({type:LShape.ARC,arg:d})},lineStyle:function(a,b){var d,c=this;null==b&&(b=c.color),c.color=b,c.setList.push(function(){d=LGlobal.canvas,d.lineWidth=a,d.strokeStyle=b
})},clear:function(){var a=this;a.bitmap=null,a.setList.length=0,a.showList.length=0},beginBitmapFill:function(a){var b=this;b.setList.push(function(){b.bitmap=a})},drawEllipse:function(a,b,c,d,e){var f=this;f.setList.push(function(){var g,h,i,j,k,l,m,n,o,p,q,r;return g=LGlobal.canvas,g.beginPath(),l=.5522848,h=c[0],i=c[1],j=c[2],k=c[3],m=j/2*l,n=k/2*l,o=h+j,p=i+k,q=h+j/2,r=i+k/2,g.moveTo(h,r),g.bezierCurveTo(h,r-n,q-m,i,q,i),g.bezierCurveTo(q+m,i,o,r-n,o,r),g.bezierCurveTo(o,r+n,q+m,p,q,p),g.bezierCurveTo(q-m,p,h,r+n,h,r),f.bitmap?(g.save(),g.clip(),g.drawImage(f.bitmap.image,f.bitmap.x,f.bitmap.y,f.bitmap.width,f.bitmap.height,0,0,f.bitmap.width,f.bitmap.height),g.restore(),f.bitmap=null,void 0):(d&&(g.fillStyle=e,g.fill()),a>0&&(g.lineWidth=a,g.strokeStyle=b,g.stroke()),void 0)}),f.showList.push({type:LShape.RECT,arg:c})},drawArc:function(a,b,c,d,e){var f=this;f.setList.push(function(){var g=LGlobal.canvas;return g.beginPath(),c.length>6&&c[6]&&g.moveTo(c[0],c[1]),g.arc(c[0],c[1],c[2],c[3],c[4],c[5]),c.length>6&&c[6]&&g.lineTo(c[0],c[1]),f.bitmap?(g.save(),g.clip(),g.drawImage(f.bitmap.image,f.bitmap.x,f.bitmap.y,f.bitmap.width,f.bitmap.height,0,0,f.bitmap.width,f.bitmap.height),g.restore(),f.bitmap=null,void 0):(d&&(g.fillStyle=e,g.fill()),a>0&&(g.lineWidth=a,g.strokeStyle=b,g.stroke()),void 0)}),f.showList.push({type:LShape.ARC,arg:c})},drawRect:function(a,b,c,d,e){var f=this;f.setList.push(function(){var g=LGlobal.canvas;return g.beginPath(),g.rect(c[0],c[1],c[2],c[3]),g.closePath(),f.bitmap?(g.save(),g.clip(),g.drawImage(f.bitmap.image,f.bitmap.x,f.bitmap.y,f.bitmap.width,f.bitmap.height,0,0,f.bitmap.width,f.bitmap.height),g.restore(),f.bitmap=null,void 0):(d&&(g.fillStyle=e,g.fill()),a>0&&(g.lineWidth=a,g.strokeStyle=b,g.stroke()),void 0)}),f.showList.push({type:LShape.RECT,arg:c})},drawRoundRect:function(a,b,c,d,e){var f=this;f.setList.push(function(){var g=LGlobal.canvas;return g.beginPath(),g.moveTo(c[0]+c[4],c[1]),g.lineTo(c[0]+c[2]-c[4],c[1]),g.arcTo(c[0]+c[2],c[1],c[0]+c[2],c[1]+c[4],c[4]),g.lineTo(c[0]+c[2],c[1]+c[3]-c[4]),g.arcTo(c[0]+c[2],c[1]+c[3],c[0]+c[2]-c[4],c[1]+c[3],c[4]),g.lineTo(c[0]+c[4],c[1]+c[3]),g.arcTo(c[0],c[1]+c[3],c[0],c[1]+c[3]-c[4],c[4]),g.lineTo(c[0],c[1]+c[4]),g.arcTo(c[0],c[1],c[0]+c[4],c[1],c[4]),g.closePath(),f.bitmap?(g.save(),g.clip(),g.drawImage(f.bitmap.image,0,0,f.bitmap.width,f.bitmap.height,0,0,f.bitmap.width,f.bitmap.height),g.restore(),f.bitmap=null,void 0):(d&&(g.fillStyle=e,g.fill()),a>0&&(g.lineWidth=a,g.strokeStyle=b,g.stroke()),void 0)}),f.showList.push({type:LShape.RECT,arg:c})},drawVertices:function(a,b,c,d,e){var f=this;c.length<3||(f.setList.push(function(){var h,j,i,g=LGlobal.canvas;for(g.beginPath(),g.moveTo(c[0][0],c[0][1]),i=c.length,h=1;i>h;h++)j=c[h],g.lineTo(j[0],j[1]);return g.lineTo(c[0][0],c[0][1]),g.closePath(),f.bitmap?(g.save(),g.clip(),g.drawImage(f.bitmap.image,f.bitmap.x,f.bitmap.y,f.bitmap.width,f.bitmap.height,0,0,f.bitmap.width,f.bitmap.height),g.restore(),f.bitmap=null,void 0):(d&&(g.fillStyle=e,g.fill()),a>0&&(g.lineWidth=a,g.strokeStyle=b,g.closePath(),g.stroke()),void 0)}),f.showList.push({type:LShape.VERTICES,arg:c}))},drawTriangles:function(a,b,c,d,e){var g,h,j,f=this,i=b.length;f.setList.push(function(){var l,m,n,k,o,p,q,r,s,t;for(j=LGlobal.canvas,k=a,g=0,h=0;i>g;g+=3){if(l=0,j.save(),j.beginPath(),j.moveTo(k[2*b[g]],k[2*b[g]+1]),j.lineTo(k[2*b[g+1]],k[2*b[g+1]+1]),j.lineTo(k[2*b[g+2]],k[2*b[g+2]+1]),j.lineTo(k[2*b[g]],k[2*b[g]+1]),j.closePath(),d&&(j.lineWidth=d,j.strokeStyle=e,j.stroke()),j.clip(),0==g%6){if(n=-1,o=(c[2*b[g+1+h]]-c[2*b[g+h]])*f.bitmap.width,p=(c[2*b[g+2]+1]-c[2*b[g]+1])*f.bitmap.height,0==h&&0>o){for(m=g+9;i>m;m+=3)if(c[2*b[g+2]+1]==c[2*b[m+2]+1]){h=m-g;break}0==h&&(h=i-g),o=(c[2*b[g+1+h]]-c[2*b[g+h]])*f.bitmap.width}g+h>=i?(o=(c[2*b[g+h-i]]-c[2*b[g+1]])*f.bitmap.width,n=1==c[2*b[g]]?0:f.bitmap.width*c[2*b[g]]+o,n>f.bitmap.width&&(n-=f.bitmap.width)):n=f.bitmap.width*c[2*b[g+h]],sh=f.bitmap.height*c[2*b[g]+1],0>p&&(p=(c[2*b[g+2-(g>0?6:-6)]+1]-c[2*b[g-(g>0?6:-6)]+1])*f.bitmap.height,sh=0),q=(k[2*b[g+1]]-k[2*b[g]])/o,r=(k[2*b[g+1]+1]-k[2*b[g]+1])/o,s=(k[2*b[g+2]]-k[2*b[g]])/p,t=(k[2*b[g+2]+1]-k[2*b[g]+1])/p,j.transform(q,r,s,t,k[2*b[g]],k[2*b[g]+1]),j.drawImage(f.bitmap.image,f.bitmap.x+n,f.bitmap.y+sh,o,p,0,0,o,p)}else{if(o=(c[2*b[g+2+h]]-c[2*b[g+1+h]])*f.bitmap.width,p=(c[2*b[g+2]+1]-c[2*b[g]+1])*f.bitmap.height,0==h&&0>o){for(m=g+9;i>m;m+=3)if(c[2*b[g+2]+1]==c[2*b[m+2]+1]){h=m-g;break}0==h&&(h=i-g),o=(c[2*b[g+2+h]]-c[2*b[g+1+h]])*f.bitmap.width}g+1+h>=i?(o=(c[2*b[g+1+h-i]]-c[2*b[g+2]])*f.bitmap.width,n=1==c[2*b[g+1]]?0:f.bitmap.width*c[2*b[g+1]]+o,n>f.bitmap.width&&(n-=f.bitmap.width)):n=f.bitmap.width*c[2*b[g+1+h]],sh=f.bitmap.height*c[2*b[g]+1],0>p&&(p=(c[2*b[g+2-(g>0?6:-6)]+1]-c[2*b[g-(g>0?6:-6)]+1])*f.bitmap.height,sh=0),q=(k[2*b[g+2]]-k[2*b[g+1]])/o,r=(k[2*b[g+2]+1]-k[2*b[g+1]+1])/o,s=(k[2*b[g+2]]-k[2*b[g]])/p,t=(k[2*b[g+2]+1]-k[2*b[g]+1])/p,j.transform(q,r,s,t,k[2*b[g+1]],k[2*b[g+1]+1]),j.drawImage(f.bitmap.image,f.bitmap.x+n,f.bitmap.y+sh,o,p,0,-p,o,p)}j.restore()}})},drawLine:function(a,b,c){var d=this;d.setList.push(function(){var d=LGlobal.canvas;d.beginPath(),d.moveTo(c[0],c[1]),d.lineTo(c[2],c[3]),d.lineWidth=a,d.strokeStyle=b,d.closePath(),d.stroke()}),d.showList.push({type:LShape.LINE,arg:c})},add:function(a){this.setList.push(a)},ismouseon:function(a){var c=this;return null!=a&&a!=UNDEFINED&&0!=c.showList.length&&c.parent?c.parent.ismouseonShapes(c.showList,a.offsetX,a.offsetY):!1},getWidth:function(){var b,c,d,e,f,g,h,a=this;for(b=0,g=a.showList.length;g>b;b++)if(a.showList[b].type==LShape.RECT)(d>a.showList[b].arg[0]||typeof d==UNDEFINED)&&(d=a.showList[b].arg[0]),(e<a.showList[b].arg[0]+a.showList[b].arg[2]||typeof e==UNDEFINED)&&(e=a.showList[b].arg[0]+a.showList[b].arg[2]);else if(a.showList[b].type==LShape.ARC)(d>a.showList[b].arg[0]-a.showList[b].arg[2]||typeof d==UNDEFINED)&&(d=a.showList[b].arg[0]-a.showList[b].arg[2]),(e<a.showList[b].arg[0]+a.showList[b].arg[2]||typeof e==UNDEFINED)&&(e=a.showList[b].arg[0]+a.showList[b].arg[2]);else if(a.showList[b].type==LShape.VERTICES)for(c=0,h=a.showList[b].arg.length;h>c;c++)f=a.showList[b].arg[c],(d>f[0]||typeof d==UNDEFINED)&&(d=f[0]),(e<f[0]||typeof e==UNDEFINED)&&(e=f[0]);else a.showList[b].type==LShape.LINE?((d>a.showList[b].arg[0]||typeof d==UNDEFINED)&&(d=a.showList[b].arg[0]),(d>a.showList[b].arg[2]||typeof d==UNDEFINED)&&(d=a.showList[b].arg[2]),(e<a.showList[b].arg[0]||typeof e==UNDEFINED)&&(e=a.showList[b].arg[0]),(e<a.showList[b].arg[2]||typeof e==UNDEFINED)&&(e=a.showList[b].arg[2])):a.showList[b].type==LShape.POINT&&((d>a.showList[b].arg[0]||typeof d==UNDEFINED)&&(d=a.showList[b].arg[0]),(e<a.showList[b].arg[0]||typeof e==UNDEFINED)&&(e=a.showList[b].arg[0]));return typeof d==UNDEFINED&&(d=e=0),a.left=d,g>0&&e==d&&(e=d+1),e-d},getHeight:function(){var d,e,f,g,h,a=this,b=null,c=null;for(b=0,d=a.showList.length;d>b;b++)if(a.showList[b].type==LShape.RECT)(f>a.showList[b].arg[1]||typeof f==UNDEFINED)&&(f=a.showList[b].arg[1]),(g<a.showList[b].arg[1]+a.showList[b].arg[3]||typeof g==UNDEFINED)&&(g=a.showList[b].arg[1]+a.showList[b].arg[3]);else if(a.showList[b].type==LShape.ARC)(f>a.showList[b].arg[1]-a.showList[b].arg[2]||typeof f==UNDEFINED)&&(f=a.showList[b].arg[1]-a.showList[b].arg[2]),(g<a.showList[b].arg[1]+a.showList[b].arg[2]||typeof g==UNDEFINED)&&(g=a.showList[b].arg[1]+a.showList[b].arg[2]);else if(a.showList[b].type==LShape.VERTICES)for(c=0,e=a.showList[b].arg.length;e>c;c++)h=a.showList[b].arg[c],(f>h[1]||typeof f==UNDEFINED)&&(f=h[1]),(g<h[1]||typeof g==UNDEFINED)&&(g=h[1]);else a.showList[b].type==LShape.LINE?((f>a.showList[b].arg[1]||typeof f==UNDEFINED)&&(f=a.showList[b].arg[1]),(f>a.showList[b].arg[3]||typeof f==UNDEFINED)&&(f=a.showList[b].arg[3]),(g<a.showList[b].arg[1]||typeof g==UNDEFINED)&&(g=a.showList[b].arg[1]),(g<a.showList[b].arg[3]||typeof g==UNDEFINED)&&(g=a.showList[b].arg[3])):a.showList[b].type==LShape.POINT&&((f>a.showList[b].arg[1]||typeof f==UNDEFINED)&&(f=a.showList[b].arg[1]),(g<a.showList[b].arg[1]||typeof g==UNDEFINED)&&(g=a.showList[b].arg[1]));return typeof f==UNDEFINED&&(f=g=0),a.top=f,d>0&&g==f&&(g=f+1),g-f},startX:function(){var a=this;return a.getWidth(),a.left},startY:function(){var a=this;return a.getHeight(),a.top}};for(c in b)a.prototype[c]=b[c];return a}(),LShape=function(){function a(){var a=this;LExtends(a,LInteractiveObject,[]),a.type="LShape",a.graphics=new LGraphics,a.graphics.parent=a}var b,c;a.POINT="point",a.LINE="line",a.ARC="arc",a.RECT="rect",a.VERTICES="vertices",b={_ll_show:function(){var b=this;b.graphics.ll_show()},getWidth:function(a){var c,d,b=this,e=b.graphics.startX(),f=e+b.graphics.getWidth();return a&&b.mask&&(c=b.mask._startX?b.mask._startX():b.mask.startX(),d=b.mask.getWidth(),c>e&&(e=c),f>c+d&&(f=c+d)),b.ll_left=b.x+e,b.ll_right=b.x+f,(f-e)*b.scaleX},getHeight:function(a){var c,d,b=this,e=b.graphics.startY(),f=e+b.graphics.getHeight();return a&&b.mask&&(c=b.mask._startY?b.mask._startY():b.mask.startY(),d=b.mask.getHeight(),c>e&&(e=c),f>c+d&&(f=c+d)),b.ll_top=b.y+e,b.ll_bottom=b.y+f,(f-e)*b.scaleY},_startX:function(){var a=this;return a.getWidth(),a.ll_left},startX:function(){var a=this;return a._startX()*a.scaleX},_startY:function(){var a=this;return a.getHeight(),a.ll_top},startY:function(){var a=this;return a._startY()*a.scaleY},clone:function(){var b=this,c=new a;return c.copyProperty(b),c.graphics=b.graphics.clone(),c.graphics.parent=c,c},ismouseon:function(a,b){var e,c=this,d=!1;return c.visible&&null!=a?c.mask&&(c.mask.parent||(c.mask.parent=c.parent),!c.mask.ismouseon(a,b))?!1:(e={x:c.x*b.scaleX+b.x,y:c.y*b.scaleY+b.y,scaleX:b.scaleX*c.scaleX,scaleY:b.scaleY*c.scaleY},c.graphics&&(d=c.graphics.ismouseon(a,e)),d):!1},die:function(){var a=this;a.graphics.clear()}};for(c in b)a.prototype[c]=b[c];return a}(),LSprite=function(){function a(){var a=this;LExtends(a,LDisplayObjectContainer,[]),a.type="LSprite",a.rotatex,a.rotatey,a.graphics=new LGraphics,a.graphics.parent=a,a.box2dBody=null,a.shapes=new Array,a.dragRange=null,a.useCursor=null}var c,b={setRotate:function(a){var b=this;b.box2dBody?b.box2dBody.SetAngle(a):b.rotate=a},_rotateReady:function(){var a=this;a.box2dBody&&(typeof a.rotatex==UNDEFINED&&a.getRotateXY(),a.x=a.box2dBody.GetPosition().x*LGlobal.box2d.drawScale-a.parent.x-a.rotatex,a.y=a.box2dBody.GetPosition().y*LGlobal.box2d.drawScale-a.parent.y-a.rotatey,a.rotate=a.box2dBody.GetAngle())},_ll_show:function(){var b=this;b.graphics.ll_show(),LGlobal.show(b.childList),b._ll_debugShape()},startDrag:function(a){var b=this;b.ll_dragStart||(b.ll_touchPointID=a,b.ll_dragStartX=b.x,b.ll_dragStartY=b.y,b.ll_dragMX=mouseX,b.ll_dragMY=mouseY,b.ll_dragStart=!0,LGlobal.dragList.push(b))},stopDrag:function(){var b,c,a=this;for(b=0,c=LGlobal.dragList.length;c>b;b++)if(a.objectIndex==LGlobal.dragList[b].objectIndex){a.ll_dragStart=!1,LGlobal.dragList.splice(b,1);break}},getRotateXY:function(a,b){var c=this;a&&b||(a=c.getWidth(),b=c.getHeight()),c.rotatex=a/2,c.rotatey=b/2},getWidth:function(a){var c,d,e,f,g,h,i,b=this,j=b.graphics.startX(),k=j+b.graphics.getWidth();for(c=0,d=b.childList.length;d>c;c++)e=b.childList[c],typeof e.visible!=UNDEFINED&&e.visible&&(f=e.x,"function"==typeof e._startX&&(f=e._startX()),g=f+e.getWidth(a),j>f&&(j=f),g>k&&(k=g));return a&&b.mask&&(h=b.mask._startX?b.mask._startX():b.mask.startX(),i=b.mask.getWidth(),h>j&&(j=h),k>h+i&&(k=h+i)),b.ll_left=b.x+j,b.ll_right=b.x+k,(k-j)*b.scaleX},getHeight:function(a){var c,d,e,f,g,h,i,b=this,j=b.graphics.startY(),k=j+b.graphics.getHeight();for(c=0,d=b.childList.length;d>c;c++)e=b.childList[c],typeof e.visible!=UNDEFINED&&e.visible&&(f=e.y,"function"==typeof e._startY&&(f=e._startY()),g=f+e.getHeight(a),j>f&&(j=f),g>k&&(k=g));return a&&b.mask&&(h=b.mask._startY?b.mask._startY():b.mask.startY(),i=b.mask.getHeight(),h>j&&(j=h),k>h+i&&(k=h+i)),b.ll_top=b.y+j,b.ll_bottom=b.y+k,(k-j)*b.scaleY},_startX:function(){var a=this;return a.getWidth(),a.ll_left},startX:function(){var a=this;return a._startX()*a.scaleX},_startY:function(){var a=this;return a.getHeight(),a.ll_top},startY:function(){var a=this;return a._startY()*a.scaleY},_ll_loopframe:function(){this.dispatchEvent(LEvent.ENTER_FRAME)},clone:function(){var d,e,f,g,b=this,c=new a;for(c.copyProperty(b),c.graphics=b.graphics.clone(),c.graphics.parent=c,c.childList.length=0,f=0,g=b.childList.length;g>f;f++)d=b.childList[f],d.clone&&(e=d.clone(),e.parent=c,c.childList.push(e));return c},_mevent:function(a){var c,d,b=this;for(c=0;c<b.mouseList.length;c++)if(d=b.mouseList[c],d.type==a)return!0;return!1},ll_dispatchMouseEvent:function(a,b,d,e,f){var h,g=this;if(g.mouseEnabled)for(c=0;c<g.mouseList.length;c++)h=g.mouseList[c],h.type==a&&(b.selfX=(e-(g.x*d.scaleX+d.x))/(d.scaleX*g.scaleX),b.selfY=(f-(g.y*d.scaleY+d.y))/(d.scaleY*g.scaleY),b.currentTarget=b.clickTarget=g,b.target||(b.target=g),h.listener(b,g))},ll_mouseout:function(a,b,c,d,e){var g,f=this;if(b==LMouseEvent.MOUSE_MOVE&&f.ll_mousein&&(f.ll_mousein=!1,f._mevent(LMouseEvent.MOUSE_OUT)&&f.ll_dispatchMouseEvent(LMouseEvent.MOUSE_OUT,a,c,d,e),f.mouseChildren))for(g=f.childList.length-1;g>=0;g--)f.childList[g].mouseEvent&&f.childList[g].ll_mouseout&&f.childList[g].ll_mouseout(a,b,c,d,e)},mouseEvent:function(a,b,c){if(!a)return!1;var e,f,i,j,d=this,g=a.offsetX,h=a.offsetY;if(!d.visible)return!1;if(null==c&&(c={x:0,y:0,scaleX:1,scaleY:1}),i=d.ismouseon(a,c)){if(LGlobal.os==OS_PC&&d.useCursor&&b==LMouseEvent.MOUSE_MOVE&&(LGlobal.cursor=d.useCursor),b!=LMouseEvent.MOUSE_MOVE||d.ll_mousein||(d.ll_mousein=!0,d._mevent(LMouseEvent.MOUSE_OVER)&&d.ll_dispatchMouseEvent(LMouseEvent.MOUSE_OVER,a,c,g,h)),d.mouseChildren){for(j={x:d.x*c.scaleX+c.x,y:d.y*c.scaleY+c.y,scaleX:c.scaleX*d.scaleX,scaleY:c.scaleY*d.scaleY},f=d.childList.length-1;f>=0&&(!d.childList[f].mouseEvent||(e=d.childList[f].mouseEvent(a,b,j),!e||(a.target=d.childList[f],b==LMouseEvent.MOUSE_MOVE)));f--);d._mevent(b)&&d.ll_dispatchMouseEvent(b,a,c,g,h)}return!0}return d.ll_mouseout(a,b,c,g,h),!1},hitTestPoint:function(a,b){var c=this,d=c.shapes;return d&&0!=d.length||(c.getWidth(),c.getHeight(),d=[{type:LShape.RECT,arg:[c.ll_left-c.x,c.ll_top-c.y,c.ll_right-c.ll_left,c.ll_bottom-c.ll_top]}]),c.ismouseonShapes(d,a,b)},hitTestObject:function(a){var e,f,g,h,i,j,k,l,b=this,c=b.shapes,d=a.shapes;for(c&&0!=c.length||(b.getWidth(),b.getHeight(),c=[{type:LShape.RECT,arg:[b.ll_left-b.x,b.ll_top-b.y,b.ll_right-b.ll_left,b.ll_bottom-b.ll_top]}]),d&&0!=d.length||(a.getWidth(),a.getHeight(),d=[{type:LShape.RECT,arg:[a.ll_left-a.x,a.ll_top-a.y,a.ll_right-a.ll_left,a.ll_bottom-a.ll_top]}]),e=b.getRootMatrix(),f=a.getRootMatrix(),g=c.length-1;g>=0;g--)for(h=c[g],l=b._changeShape(h.type,h.arg,e),i=d.length-1;i>=0;i--)if(j=d[i],k=a._changeShape(j.type,j.arg,f),h.type==LShape.VERTICES||h.type==LShape.RECT){if(j.type==LShape.VERTICES||j.type==LShape.RECT){if(LGlobal.hitTestPolygon(l,k))return!0}else if(j.type==LShape.ARC&&LGlobal.hitTestPolygonArc(l,k))return!0}else if(j.type==LShape.VERTICES||j.type==LShape.RECT){if(LGlobal.hitTestPolygonArc(k,l))return!0}else if(j.type==LShape.ARC&&Math.sqrt((l[0]-k[0])*(l[0]-k[0])+(l[1]-k[1])*(l[1]-k[1]))<l[2]+k[2])return!0;return!1},addShape:function(a,b){var c=this;if(!(a==LShape.VERTICES&&b.length<3))return c.shapes.push({type:a,arg:b}),c.shapes},addShapes:function(a){var b=this;b.shapes=0==b.shapes.length?a:b.shapes.concat(a)},clearShape:function(){this.shapes=[]},_ll_debugShape:function(){var b,c,d,e,f,g,h,a=this;if(LGlobal.traceDebug&&0!=a.shapes.length)for(b=0,c=a.shapes.length;c>b;b++){if(d=a.shapes[b],e=LGlobal.canvas,f=d.arg,e.beginPath(),d.type==LShape.RECT)e.rect(f[0],f[1],f[2],f[3]);else if(d.type==LShape.ARC)e.arc(f[0],f[1],f[2],0,2*Math.PI);else if(d.type==LShape.VERTICES){for(e.moveTo(f[0][0],f[0][1]),g=1,h=f.length;h>g;g++)e.lineTo(f[g][0],f[g][1]);e.lineTo(f[0][0],f[0][1])}e.closePath(),e.strokeStyle="#00FF00",e.stroke()}},ismouseon:function(a,b){var d,e,f,g,c=this;if(!c.visible||null==a)return!1;if(c.mask&&(c.mask.parent||(c.mask.parent=c.parent),!c.mask.ismouseon(a,b)))return!1;if(c.shapes&&c.shapes.length>0)return c.ismouseonShapes(c.shapes,a.offsetX,a.offsetY);for(e=!1,f=c.childList,g={x:c.x*b.scaleX+b.x,y:c.y*b.scaleY+b.y,scaleX:b.scaleX*c.scaleX,scaleY:b.scaleY*c.scaleY},d=f.length-1;d>=0;d--)if(f[d].ismouseon&&(e=f[d].ismouseon(a,g)),e){a.target=c.childList[d];break}return e||(e=c.graphics.ismouseon(a,g)),e},die:function(){var b,c,d,a=this;for(a.graphics.clear(),a.removeAllEventListener(),a.stopDrag(),a.box2dBody&&a.clearBody(),b=0,c=a.childList,d=c.length;d>b;b++)c[b].die&&c[b].die()}};for(c in b)a.prototype[c]=b[c];return a}(),LButton=function(){function a(b,c,d,e){var f=this;LExtends(f,LSprite,[]),f.type="LButton",f.addChild(b),c?f.addChild(c):c=b,d?f.addChild(d):d=c,e?f.addChild(e):e=b,f.upState=f.bitmap_up=b,f.overState=f.bitmap_over=c,f.downState=d,f.disableState=e,f._ll_down_sx=f.downState.scaleX,f._ll_down_sy=f.downState.scaleY,f.overState.visible=!1,f.downState.visible=!1,f.upState.visible=!0,f.buttonMode=!0,f.staticMode=!1,f.setState(a.STATE_ENABLE),LMouseEventContainer.container[LMouseEvent.MOUSE_MOVE]&&LMouseEventContainer.pushButton(f),f.addEventListener(LMouseEvent.MOUSE_DOWN,f.ll_modeDown),f.setCursorEnabled(!0)}var b,c;a.STATE_DISABLE="disable",a.STATE_ENABLE="enable",b={setState:function(b){var c=this;if(b==a.STATE_DISABLE)c.upState.visible=!1,c.overState.visible=!1,c.downState.visible=!1,c.disableState.visible=!0,c.mouseEnabled=!1;else{if(b!=a.STATE_ENABLE)return;c.overState.visible=!1,c.downState.visible=!1,c.disableState.visible=!1,c.upState.visible=!0,c.mouseEnabled=!0}c.state=b},ll_mouseout:function(a){var f=this;f.ll_mousein&&(a.clickTarget=f,f.ll_modeOut(a),f.ll_mousein=!1)},mouseEvent:function(a,b){if(!a)return!1;var d=this;return b==LMouseEvent.MOUSE_MOVE&&d.ll_button_mode&&d.ll_button_mode(a),this.callParent("mouseEvent",arguments)},ll_button_mode:function(a){var b=this;b.visible&&(a.clickTarget=b,b.hitTestPoint(a.offsetX,a.offsetY)?b.ll_modeOver(a):b.ll_modeOut(a))},ll_modeDown:function(b){var d,e,f,g,h,i,j,k,l,c=b.clickTarget;if(c.buttonMode&&!c.tween){if(c.state==a.STATE_DISABLE)return c.upState.visible=!1,c.overState.visible=!1,c.downState.visible=!1,c.disableState.visible=!0,void 0;c.upState.visible=!1,c.overState.visible=!1,c.downState.visible=!0,c._tweenOver=c.ll_modeOver,l=function(a){var b=a.parent;delete b.tween,b._tweenOver({clickTarget:b}),delete b._tweenOver},c.staticMode?c.tween=LTweenLiteTimeline.to(c.downState,.3,{}).to(c.downState,.1,{onComplete:l}):(d=c.downState.getWidth(),e=c.downState.getHeight(),f=1.1*d,g=1.1*e,h=c.downState.x,i=c.downState.y,j=h+.5*(d-f),k=i+.5*(e-g),c.tween=LTweenLiteTimeline.to(c.downState,.3,{x:j,y:k,scaleX:1.1*c._ll_down_sx,scaleY:1.1*c._ll_down_sy,ease:Quart.easeOut}).to(c.downState,.1,{x:h,y:i,scaleX:c._ll_down_sx,scaleY:c._ll_down_sy,ease:Quart.easeOut,onComplete:l}))}},ll_modeOver:function(b){var c=b.clickTarget;if(c.buttonMode){if(c.tween)return c._tweenOver=c.ll_modeOver,void 0;if(c.state==a.STATE_DISABLE)return c.upState.visible=!1,c.overState.visible=!1,c.downState.visible=!1,c.disableState.visible=!0,void 0;c.upState.visible=!1,c.downState.visible=!1,c.overState.visible=!0}},ll_modeOut:function(b){var c=b.clickTarget;if(c.buttonMode){if(c.tween)return c._tweenOver=c.ll_modeOut,void 0;if(c.state==a.STATE_DISABLE)return c.upState.visible=!1,c.overState.visible=!1,c.downState.visible=!1,c.disableState.visible=!0,void 0;c.overState.visible=!1,c.downState.visible=!1,c.upState.visible=!0}},setCursorEnabled:function(a){this.useCursor=a?"pointer":null},clone:function(){var b=this;return new a(b.upState.clone(),b.overState.clone(),b.downState.clone(),b.disableState.clone())},die:function(){var a=this;LMouseEventContainer.container[LMouseEvent.MOUSE_MOVE]&&LMouseEventContainer.removeButton(a),a.callParent("die",arguments)}};for(c in b)a.prototype[c]=b[c];return a}(),LBlendMode.SOURCE_OVER="source-over",LBlendMode.SOURCE_ATOP="source-atop",LBlendMode.SOURCE_IN="source-in",LBlendMode.SOURCE_OUT="source-out",LBlendMode.DESTINATION_OVER="destination-over",LBlendMode.DESTINATION_ATOP="destination-atop",LBlendMode.DESTINATION_IN="destination-in",LBlendMode.DESTINATION_OUT="destination-out",LBlendMode.LIGHTER="lighter",LBlendMode.COPY="copy",LBlendMode.XOR="xor",LBlendMode.NONE=null,LBlendMode.NORMAL=null,LTextFieldType=function(){throw"LTextFieldType cannot be instantiated"},LTextFieldType.INPUT="input",LTextFieldType.DYNAMIC=null,LStyleSheet=function(){function a(){var a=this;LExtends(a,LObject,[]),a.styleIndex=0,a.styleNames={}}return a.prototype.clone=function(){var a=this,b=new a.constructor;return b.copyProperty(a),b},a.prototype.setStyle=function(a,b){var d,e,c;if(this.styleIndex++,null===b)return this.styleNames[a]&&delete this.styleNames[a],void 0;for(c=b.replace(/(^\{)|(\}$)/g,"").split(";"),b={},d=0;d<c.length;d++)c[d]&&(e=c[d].split(":"),e[0]&&(b[e[0]]=e[1]));this.styleNames[a]=b},a.prototype.getStyle=function(a){return this.styleNames[a]},a}(),LTextFormat=function(){function a(a,b,c,d,e,f){var g=this;LExtends(g,LObject,[]),g.font=a?a:"Arial",g.size=b?b:15,g.color=c?c:"#000000",g.bold=d?d:!1,g.italic=e?e:!1,g.underline=f?f:!1}return a.prototype.clone=function(){var a=this,b=new a.constructor;return b.copyProperty(a),b},a.prototype.getFontText=function(){var a=this;return(a.italic?"italic ":"")+(a.bold?"bold ":"")+a.size+"px "+a.font},a.prototype.setCss=function(a){var c,b=this;for(c in a)switch(c){case"color":b.color=a[c];break;case"font-family":b.font=a[c];break;case"font-size":b.size=a[c];break;case"font-style":b.italic="italic"==a[c];break;case"font-weight":b.bold="bold"==a[c];break;case"text-decoration":b.color="underline"==a[c]}},a}(),LTextField=function(){function a(){var b=this;LExtends(b,LInteractiveObject,[]),b.type="LTextField",b.texttype=null,b.text="",b.htmlText="",b.styleSheet="",b.font="Arial",b.size=15,b.color="#000000",b.weight="normal",b.textAlign="left",b.textBaseline="top",b.heightMode=a.HEIGHT_MODE_BOTTOM,b.stroke=!1,b.lineWidth=1,b.lineColor="#000000",b.width=150,b.height=b.size,b.displayAsPassword=!1,b.wordWrap=!1,b.multiline=!1,b.numLines=1,b.speed=0,b._speedIndex=100}var b,c;a.HEIGHT_MODE_BOTTOM="bottom",a.HEIGHT_MODE_BASELINE="baseline",b={_showReady:function(a){var b=this;a.font=b.weight+" "+b.size+"px "+b.font,a.textAlign=b.textAlign,a.textBaseline=b.textBaseline},ll_getStyleSheet:function(a,b,c,d){var f,h,i,j,e=this,g=a.clone();if("font"==b)for(h=0;c&&!(h++>4)&&(f=/(([^\s]*?)(\s*)=(\s*)("|')(.*?)\5)*/g,i=f.exec(c),i&&i[0]);){switch(i[2]){case"face":g.font=i[6];break;case"color":g.color=i[6];break;case"size":g.size=i[6]}c=c.replace(i[0],"").replace(/(^\s*)|(\s*$)|(\n)/g,"")}else if("b"==b)g.bold=!0;else if("u"==b)g.underline=!0;else if("i"==b)g.italic=!0;else if("p"==b&&e.wordWrap)d="\n"+d+"\n";else if(e.styleSheet){if("span"==b){if(f=/(([^\s]*?)(\s*)=(\s*)("|')(.*?)\5)*/g,i=f.exec(c),i&&i[0])switch(i[2]){case"class":j=e.styleSheet.getStyle("."+i[6])}}else e.styleSheet.getStyle(b)&&(j=e.styleSheet.getStyle(b));j&&g.setCss(j)}e.ll_getHtmlText(g,d)},ll_getHtmlText:function(a,b){if(b){var d,e,f,g,c=this,h=/<(.*?)(\s*)(.*?)>(.*?)<\/\1>/g,i=h.exec(b);if(!i||!i[0])return c.ll_htmlTexts.push({textFormat:a.clone(),text:b}),void 0;i.index>0&&c.ll_htmlTexts.push({textFormat:a.clone(),text:b.substring(0,i.index)}),d=i[1],f=i.index,g=f;do g=b.indexOf("</"+d,g+1),f=b.indexOf("<"+d,f+1);while(f>0&&g>f);e=b.substring(b.indexOf(">",i.index)+1,g),c.ll_getStyleSheet(a,d,i[3],e),c.ll_getHtmlText(a,b.substring(g+d.length+3))}},_ll_show:function(b){var e,f,g,h,i,j,k,l,m,n,o,p,c=this;if(c.texttype!=LTextFieldType.INPUT||(c.inputBackLayer.ll_show(),g=c.getRootCoordinate(),LGlobal.inputBox.name=="input"+c.objectIndex&&(LGlobal.inputBox.style.marginTop=parseInt(LGlobal.canvasObj.style.marginTop)+((g.y+c.inputBackLayer.startY())*parseInt(LGlobal.canvasObj.style.height)/LGlobal.canvasObj.height>>>0)+"px",LGlobal.inputBox.style.marginLeft=parseInt(LGlobal.canvasObj.style.marginLeft)+((g.x+c.inputBackLayer.startX())*parseInt(LGlobal.canvasObj.style.width)/LGlobal.canvasObj.width>>>0)+"px"),!LGlobal.inputTextField||LGlobal.inputTextField.objectIndex!=c.objectIndex)){if(LGlobal.fpsStatus&&LGlobal.fpsStatus.text++,b.fillStyle=c.color,c.stroke&&(b.strokeStyle=c.lineColor,b.lineWidth=c.lineWidth+1),c.htmlText)return(c.ll_htmlText!=c.htmlText||c.styleSheet&&(c.ll_style_objectIndex!=c.styleSheet.objectIndex||c.ll_styleIndex==c.styleSheet.styleIndex))&&(o=new LTextFormat,c.ll_htmlTexts=[],c.ll_htmlText=c.htmlText,c.styleSheet&&(c.ll_style_objectIndex=c.styleSheet.objectIndex,c.ll_styleIndex=c.styleSheet.styleIndex),c.ll_getHtmlText(o,c.htmlText)),h=0,j=0,k=0,l=0,c._wordHeight=c.wordHeight||30,a.underlineY||(a.underlineY={alphabetic:0,top:1,bottom:-.2,middle:.4,hanging:.8}),c.ll_htmlTexts.forEach(function(d){var e=d.textFormat,g=d.text;for(b.font=e.getFontText(),b.fillStyle=e.color,f=0,i=g.length;i>f;f++)n=/(?:\r\n|\r|\n|ﾂ･n)/.exec(g.substr(f,1)),n?(h=0,j=f+1,k++):(m=1.2*b.measureText("O").width,c.stroke&&b.strokeText(g.substr(f,1),h,k*c._wordHeight),b.fillText(g.substr(f,1),h,k*c._wordHeight),e.underline&&(b.beginPath(),p=k*c._wordHeight+m*a.underlineY[c.textBaseline],b.moveTo(h,p),b.lineTo(h+b.measureText(g.substr(f,1)).width,p),b.stroke())),h+=b.measureText(g.substr(f,1)).width,c.wordWrap&&h+b.measureText(g.substr(f+1,1)).width>c.width&&(h=0,j=f+1,k++);c.height=(k+1)*c._wordHeight}),void 0;if(e=c.text,c.displayAsPassword)for(e="",f=0,i=c.text.length;i>f;f++)e+="*";if(c.wordWrap||c.multiline){for(h=0,j=0,k=0,l=0,f=0,i=c.text.length;i>f;f++)n=/(?:\r\n|\r|\n|ﾂ･n)/.exec(e.substr(f,1)),n?(h=0,j=f+1,k++):(c.stroke&&b.strokeText(e.substr(f,1),h,k*c.wordHeight),b.fillText(e.substr(f,1),h,k*c.wordHeight)),c.numLines=k,h=b.measureText(c.text.substr(j,f+1-j)).width,c.wordWrap&&h+b.measureText(e.substr(f,1)).width>c.width&&(h=0,j=f+1,k++);c.height=(k+1)*c.wordHeight}else c.numLines=1,c.stroke&&b.strokeText(e,0,0,b.measureText(e).width),b.fillText(e,0,0,b.measureText(e).width);c.windRunning&&c._ll_windRun()}},_wordHeight:function(a){var b=this;a>0?b.wordHeight=a:(b.wordWrap=!1,b.wordHeight=b.getHeight()),b.height=0},setMultiline:function(a,b){var c=this;a&&c._wordHeight(b),c.multiline=a},setWordWrap:function(a,b){var c=this;a&&c._wordHeight(b),c.wordWrap=a},setType:function(a,b){var c=this;c.texttype!=a&&a==LTextFieldType.INPUT?(null==b||"LSprite"!=b.type?(c.inputBackLayer=new LSprite,c.inputBackLayer.graphics.drawRect(1,"#000000",[0,.4*-c.getHeight(),c.width,1.5*c.getHeight()])):c.inputBackLayer=b,c.inputBackLayer.parent=c,LMouseEventContainer.container[LMouseEvent.MOUSE_DOWN]&&LMouseEventContainer.pushInputBox(c)):(c.inputBackLayer=null,LMouseEventContainer.removeInputBox(c)),c.texttype=a},ismouseon:function(a,b){var c=this;return a?c.visible?(b||(b={x:0,y:0,scaleX:1,scaleY:1}),c.mask&&(c.mask.parent||(c.mask.parent=c.parent),!c.mask.ismouseon(a,b))?!1:c.inputBackLayer?c.inputBackLayer.ismouseon(a,{x:c.x*b.scaleX+b.x,y:c.y*b.scaleY+b.y,scaleX:b.scaleX*c.scaleX,scaleY:b.scaleY*c.scaleY}):c.ismouseonShapes([{type:LShape.RECT,arg:[0,0,c._getWidth(),c._getHeight()]}],a.offsetX,a.offsetY)):!1:!1},clone:function(){var a=this,b=new a.constructor;return b.copyProperty(a),b.texttype=null,a.texttype==LTextFieldType.INPUT&&b.setType(LTextFieldType.INPUT),b},mouseEvent:function(a,b,c){var e,d=this;null!=d.inputBackLayer&&b==LMouseEvent.MOUSE_DOWN&&(e=d.ismouseon(a,c),e&&d.focus())},_ll_getValue:function(){LGlobal.inputBox.style.display!=NONE&&(LGlobal.inputTextField.text=LGlobal.inputTextBox.value,LEvent.removeEventListener(LGlobal.inputTextBox,LKeyboardEvent.KEY_DOWN,LGlobal.inputTextField._ll_input),LGlobal.inputBox.style.display=NONE,LGlobal.inputTextField.dispatchEvent(LFocusEvent.FOCUS_OUT),LGlobal.inputTextField=null)},updateInput:function(){var a=this;a.texttype==LTextFieldType.INPUT&&LGlobal.inputTextField.objectIndex==a.objectIndex&&(LGlobal.inputTextBox.value=LGlobal.inputTextField.text)},_ll_input:function(a){var b=new LEvent(LTextEvent.TEXT_INPUT);b.keyCode=a.keyCode,LGlobal.inputTextField.text=LGlobal.inputTextBox.value,a.returnValue=LGlobal.inputTextField.hasEventListener(LTextEvent.TEXT_INPUT)?LGlobal.inputTextField.dispatchEvent(b):!0},focus:function(){var b,c,a=this;a.parent&&a.texttype==LTextFieldType.INPUT&&(LGlobal.inputTextField&&LGlobal.inputTextField.objectIndex!=a.objectIndex&&a._ll_getValue(),a.dispatchEvent(LFocusEvent.FOCUS_IN),b=a.getAbsoluteScale(),LGlobal.inputBox.style.display="",LGlobal.inputBox.name="input"+a.objectIndex,LGlobal.inputTextField=a,LGlobal.inputTextareaBoxObj.style.display=NONE,LGlobal.inputTextBoxObj.style.display=NONE,LGlobal.passwordBoxObj.style.display=NONE,LGlobal.inputTextBox=a.displayAsPassword?LGlobal.passwordBoxObj:a.multiline?LGlobal.inputTextareaBoxObj:LGlobal.inputTextBoxObj,c=parseInt(LGlobal.canvasObj.style.width)/LGlobal.canvasObj.width,sy=parseInt(LGlobal.canvasObj.style.height)/LGlobal.canvasObj.height,LGlobal.inputTextBox.style.display="",LGlobal.inputTextBox.value=a.text,LGlobal.inputTextBox.style.height=a.inputBackLayer.getHeight()*b.scaleY*a.scaleY*sy+"px",LGlobal.inputTextBox.style.width=a.inputBackLayer.getWidth()*b.scaleX*a.scaleX*c+"px",LGlobal.inputTextBox.style.color=a.color,LGlobal.inputTextBox.style.fontSize=(a.size*parseFloat(LGlobal.canvasObj.style.height)/LGlobal.canvasObj.height>>0)+"px",LGlobal.inputTextBox.style.fontFamily=a.font,LEvent.addEventListener(LGlobal.inputTextBox,LKeyboardEvent.KEY_DOWN,LGlobal.inputTextField._ll_input),a.texttype==LTextFieldType.INPUT&&(rc=a.getRootCoordinate(),LGlobal.inputBox.name=="input"+a.objectIndex&&(LGlobal.inputBox.style.marginTop=parseInt(LGlobal.canvasObj.style.marginTop)+((rc.y+a.inputBackLayer.startY())*parseInt(LGlobal.canvasObj.style.height)/LGlobal.canvasObj.height>>>0)+"px",LGlobal.inputBox.style.marginLeft=parseInt(LGlobal.canvasObj.style.marginLeft)+((rc.x+a.inputBackLayer.startX())*parseInt(LGlobal.canvasObj.style.width)/LGlobal.canvasObj.width>>>0)+"px")),setTimeout(function(){LGlobal.inputTextBox.focus()},0))},_getWidth:function(){var a=this;return a.wordWrap?a.width:(LGlobal.canvas.font=a.size+"px "+a.font,LGlobal.canvas.measureText(a.text).width)},getWidth:function(a){var c,d,e,b=this;return c=b._getWidth()*b.scaleX,a&&b.mask?(d=b.mask._startX?b.mask._startX():b.mask.startX(),d>c?0:(e=b.mask.getWidth(),d+e>c?c-d:e)):c},_getHeight:function(){var d,e,f,g,h,i,b=this,c=LGlobal.canvas;if(b.wordWrap){if(c.font=b.weight+" "+b.size+"px "+b.font,0==b.height){for(f=0,g=0,h=0,d=0,e=b.text.length;e>d;d++)f=c.measureText(b.text.substr(g,d-g)).width,i=/(?:\r\n|\r|\n|ﾂ･n)/.exec(b.text.substr(d,1)),(b.wordWrap&&f>b.width||i)&&(f=0,g=d,h++,i&&g++);b.height=(h+1)*b.wordHeight}return b.height}return c.font=b.weight+" "+b.size+"px "+b.font,e=1.2*c.measureText("O").width,b.heightMode==a.HEIGHT_MODE_BASELINE&&(e=1.2*e),e},getHeight:function(a){var c,d,e,b=this;return c=b._getHeight()*b.scaleY,a&&b.mask?(d=b.mask._startY?b.mask._startY():b.mask.startY(),d>c?0:(e=b.mask.getHeight(),d+e>c?c-d:e)):c},wind:function(a){var b=this;b.wind_over_function=a,b.windRunning=!0,b._ll_wind_text=b.text,b.text="",b._ll_wind_length=0},_ll_windRun:function(){var a=this;if(!(a._speedIndex++<a.speed)){if(a._speedIndex=0,a._ll_wind_length>a._ll_wind_text.length)return a.windRunning=!1,a.wind_over_function&&a.wind_over_function(),a.dispatchEvent(new LEvent(LTextEvent.WIND_COMPLETE)),void 0;a.text=a._ll_wind_text.substring(0,a._ll_wind_length),a._ll_wind_length++}},die:function(){LMouseEventContainer.removeInputBox(this)}};for(c in b)a.prototype[c]=b[c];return a}(),LBitmap=function(){function a(a){var b=this;LExtends(b,LDisplayObject,[]),b.type="LBitmap",b.rotateCenter=!0,b.bitmapData=a,b.bitmapData&&(b.width=b.bitmapData.width,b.height=b.bitmapData.height)}var c,b={_canShow:function(){return this.visible&&this.bitmapData},_rotateReady:function(){var a=this;0!=a.rotate&&a.rotateCenter?(a.rotatex=.5*a.getWidth(),a.rotatey=.5*a.getHeight()):a.rotatex=a.rotatey=0
},_coordinate:function(){},_ll_show:function(){this.ll_draw()},ll_draw:function(){var a=this;LGlobal.fpsStatus&&LGlobal.fpsStatus.bitmapData++,LGlobal.canvas.drawImage(a.bitmapData.image,a.bitmapData.x,a.bitmapData.y,a.bitmapData.width,a.bitmapData.height,a.x,a.y,a.bitmapData.width,a.bitmapData.height)},clone:function(){var b=this,c=new a(b.bitmapData.clone());return c.copyProperty(b),c.rotateCenter=b.rotateCenter,c},ismouseon:function(a,b){var c=this;return a?c.visible&&c.bitmapData?c.mask&&(c.mask.parent||(c.mask.parent=c.parent),!c.mask.ismouseon(a,b))?!1:c.ismouseonShapes([{type:LShape.RECT,arg:[0,0,c.bitmapData.width,c.bitmapData.height]}],a.offsetX,a.offsetY):!1:!1},getWidth:function(a){var c,d,e,b=this;return c=null!=b.bitmapData?b.bitmapData.width*(b.scaleX>0?b.scaleX:-b.scaleX):0,a&&b.mask?(d=b.mask._startX?b.mask._startX():b.mask.startX(),d>c?0:(e=b.mask.getWidth(),d+e>c?c-d:e)):c},getHeight:function(a){var c,d,e,b=this;return c=null!=b.bitmapData?b.bitmapData.height*(b.scaleY>0?b.scaleY:-b.scaleY):0,a&&b.mask?(d=b.mask._startY?b.mask._startY():b.mask.startY(),d>c?0:(e=b.mask.getHeight(),d+e>c?c-d:e)):c},startX:function(){return this.x},startY:function(){return this.y},die:function(){}};for(c in b)a.prototype[c]=b[c];return a}(),LBitmapData=function(){function a(b,c,d,e,f,g){var i,j,h=this;if(LExtends(h,LObject,[]),h.type="LBitmapData",typeof g==UNDEFINED&&(g=a.DATA_IMAGE),h.oncomplete=null,h._locked=!1,h._setPixel=!1,h.x=null==c?0:c,h.y=null==d?0:d,h.width=0,h.height=0,h.dataType=null,b&&"object"==typeof b)h.image=b,h.dataType=a.DATA_IMAGE,h.width=null==e?h.image.width:e,h.height=null==f?h.image.height:f,h._setDataType(g);else{if(h._createCanvas(),h.dataType=a.DATA_CANVAS,h._canvas.width=h.width=null==e?1:e,h._canvas.height=h.height=null==f?1:f,"string"==typeof b&&(b=parseInt(b.replace("#","0x"))),"number"==typeof b){for(i=h._context.createImageData(h.width,h.height),j=0;j<i.data.length;j+=4)i.data[j+0]=255&b>>16,i.data[j+1]=255&b>>8,i.data[j+2]=255&b,i.data[j+3]=255;h._context.putImageData(i,0,0)}h.image=h._canvas,g==a.DATA_IMAGE&&h._setDataType(g)}h.resize()}var b,c;a.DATA_IMAGE="data_image",a.DATA_CANVAS="data_canvas",b={_setDataType:function(b){var c=this;c.dataType!=b&&(b==a.DATA_CANVAS?(c._createCanvas(),c._canvas.width=c.image.width,c._canvas.height=c.image.height,c._context.clearRect(0,0,c._canvas.width,c._canvas.height),c._context.drawImage(c.image,0,0),c.image=c._canvas):b==a.DATA_IMAGE&&(c.image=new Image,c.image.width=c._canvas.width,c.image.height=c._canvas.height,c.image.src=c._canvas.toDataURL()),c.dataType=b)},_createCanvas:function(){var a=this;a._canvas||(a._canvas=document.createElement("canvas"),a._context=a._canvas.getContext("2d"))},clear:function(){var b=this;b._createCanvas(),b._canvas.width=b.image.width,b.dataType==a.DATA_IMAGE&&(b.image.src=b._canvas.toDataURL())},setProperties:function(a,b,c,d){var e=this;e.x=a,e.y=b,e.width=c,e.height=d,e.resize()},setCoordinate:function(a,b){var c=this;c.x=a,c.y=b,c.resize()},clone:function(){var b=this;return new a(b.image,b.x,b.y,b.width,b.height,b.dataType)},_ready:function(){var b=this;b._dataType=b.dataType,b._setDataType(a.DATA_CANVAS),b._data=b._context.getImageData(b.x,b.y,b.width,b.height)},_update:function(){var a=this;a._context.putImageData(a._data,a.x,a.y,0,0,a.width,a.height),a._setDataType(a._dataType),a._data=null},getPixel:function(a,b,c){var e,f,d=this;return a>>=0,b>>=0,d._locked||d._ready(),e=4*d.width*b+4*a,f=d._data.data,d._locked||d._update(),"number"==c?f[e]<<16|f[e+1]<<8|f[e+2]:[f[e],f[e+1],f[e+2],f[e+3]]},setPixel:function(a,b,c){var e,f,d=this;a>>=0,b>>=0,d._locked||d._ready(),e=d._data,f=4*d.width*b+4*a,"object"==typeof c?(e.data[f+0]=c[0],e.data[f+1]=c[1],e.data[f+2]=c[2],e.data[f+3]=c[3]):("string"==typeof c&&(c=parseInt(c.replace("#","0x"))),e.data[f+0]=255&c>>16,e.data[f+1]=255&c>>8,e.data[f+2]=255&c,e.data[f+3]=255),d._locked||d._update()},getPixels:function(a){var c,b=this;return b._locked||b._ready(),c=b._context.getImageData(b.x+a.x,b.y+a.y,a.width,a.height),b._locked||b._update(),c},setPixels:function(a,b){var d,e,f,g,i,j,c=this;if(c._locked||c._ready(),f=c._data,"object"==typeof b)for(g=c._canvas.width,i=a.x;i<a.right;i++)for(j=a.y;j<a.bottom;j++)d=4*g*(c.y+j)+4*(c.x+i),e=4*b.width*(j-a.y)+4*(i-a.x),f.data[d+0]=b.data[e+0],f.data[d+1]=b.data[e+1],f.data[d+2]=b.data[e+2],f.data[d+3]=b.data[e+3];else for("string"==typeof b&&(b=parseInt(b.replace("#","0x"))),b=[255&b>>16,255&b>>8,255&b],g=c._canvas.width,i=a.x;i<a.right;i++)for(j=a.y;j<a.bottom;j++)d=4*g*(c.y+j)+4*(c.x+i),f.data[d+0]=b[0],f.data[d+1]=b[1],f.data[d+2]=b[2],f.data[d+3]=255;c._locked||c._update()},putPixels:function(b,c){var d=this;d.dataType==a.DATA_CANVAS&&"object"==typeof c&&d._context.putImageData(c,d.x+b.x,d.y+b.y,0,0,b.width,b.height)},lock:function(){var a=this;a._locked=!0,a._ready()},unlock:function(){var a=this;a._locked=!1,a._update()},draw:function(b,c,d,e,f){var h,j,k,l,m,g=this,i=b,n=!1,o=g.dataType;return g._setDataType(a.DATA_CANVAS),(c||d||e||f)&&(g._context.save(),n=!0),f&&(i instanceof a?(j=i.x,k=i.y):j=k=0,i=new a(i.getDataCanvas(),j+f.x,k+f.y,f.width,f.height,a.DATA_CANVAS)),l=i.getWidth()>>>0,m=i.getHeight()>>>0,0==l||0==m?(g._setDataType(o),void 0):(h=i.getDataCanvas(),d&&(i.colorTransform(new LRectangle(0,0,l,m),d),h=i.image),c&&g._context.setTransform(c.a,c.b,c.c,c.d,c.tx,c.ty),e&&(g._context.globalCompositeOperation=e),g._context.drawImage(h,i.x,i.y,l,m,0,0,l,m),n&&g._context.restore(),g._setDataType(o),g.resize(),void 0)},getDataCanvas:function(){var b=this,c=b.dataType;return b._setDataType(a.DATA_CANVAS),b._setDataType(c),b._canvas},getWidth:function(){return this.width},getHeight:function(){return this.height},resize:function(){var a=this,b=a.image.width-a.x,c=a.image.height-a.y;a.width=a.width<b?a.width:b,a.height=a.height<c?a.height:c},colorTransform:function(b,c){var i,j,k,l,m,n,o,p,d=this;if(d.dataType==a.DATA_CANVAS){for(b.x>>0,b.y>>0,b.width>>0,b.height>>0,i=d._context.getImageData(d.x+b.x,d.y+b.y,b.width,b.height),j=i.data,k=0,l=j.length;l>k;k+=4)m=k,n=k+1,o=k+2,p=k+3,j[m]=j[m]*c.redMultiplier+c.redOffset,j[n]=j[n]*c.greenMultiplier+c.greenOffset,j[o]=j[o]*c.blueMultiplier+c.blueOffset,j[p]=j[p]*c.alphaMultiplier+c.alphaOffset;d._context.putImageData(i,d.x+b.x,d.y+b.y,0,0,b.width,b.height)}},copyPixels:function(b,c,d){var f,g,h,i,e=this,j=b;e.dataType==a.DATA_CANVAS&&(f=j.x,g=j.y,h=j.width,i=j.height,j.setProperties(c.x+j.x,c.y+j.y,c.width,c.height),e._context.drawImage(j.image,j.x,j.y,j.width,j.height,d.x,d.y,j.width,j.height),j.x=f,j.y=g,j.width=h,j.height=i)}};for(c in b)a.prototype[c]=b[c];return a}(),LDropShadowFilter=function(){function a(a,b,c,d){var e=this;LExtends(e,LObject,[]),e.type="LDropShadowFilter",e.distance=a?a:0,e.angle=b?b:0,e.shadowColor=c?c:"#000000",e.shadowBlur=d?d:20,e.setShadowOffset()}var c,b={setShadowOffset:function(){var a=this,b=a.angle*Math.PI/180;a.shadowOffsetX=a.distance*Math.cos(b),a.shadowOffsetY=a.distance*Math.sin(b)},ll_show:function(){var a=this,b=LGlobal.canvas;b.shadowColor=a.shadowColor,b.shadowBlur=a.shadowBlur,b.shadowOffsetX=a.shadowOffsetX,b.shadowOffsetY=a.shadowOffsetY},setDistance:function(a){this.distance=a,this.setShadowOffset()},setAngle:function(a){this.angle=a,this.setShadowOffset()},setColor:function(a){this.shadowColor=a},setBlur:function(a){this.shadowBlur=a}};for(c in b)a.prototype[c]=b[c];return a}(),LAnimation=function(){function a(a,b,c){var d=this;LExtends(d,LSprite,[]),d.type="LAnimation",d.rowIndex=0,d.colIndex=0,d._ll_stepIndex=0,d._ll_stepArray=[],d.mode=1,d.isMirror=!1,d.bitmapList=Array.isArray(b)?b:[b],d.bitmap=new LBitmap(d.bitmapList[0]),d.imageArray=c,d.addChild(d.bitmap),null!=a&&a.addChild(d),d.onframe(),d.colIndex=0}var c,b={setAction:function(a,b,c,d){var e=this,f=!1;null!=a&&a>=0&&a<e.imageArray.length&&(e.rowIndex=a,f=!0),null!=b&&b>=0&&b<e.imageArray[a].length&&(e.colIndex=b,f=!0),null!=c&&(e.mode=c,f=!0),null!=d&&(e.isMirror=d,e.isMirror?(e.bitmap.x=e.bitmap.getWidth(),e.bitmap.scaleX=-1*Math.abs(e.bitmap.scaleX)):(e.bitmap.x=0,e.bitmap.scaleX=Math.abs(e.bitmap.scaleX)),f=!0),f&&(e._ll_stepIndex=0,e._send_complete=!1)},getAction:function(){var a=this;return[a.rowIndex,a.colIndex,a.mode,a.isMirror]},onframe:function(){var b,a=this,c=0,d=null;if(a.colIndex>=a.imageArray[a.rowIndex].length&&(a.colIndex=0),b=a.imageArray[a.rowIndex][a.colIndex],d=a._ll_stepArray[a.rowIndex]&&a._ll_stepArray[a.rowIndex][a.colIndex]?a._ll_stepArray[a.rowIndex][a.colIndex]:0,0==a._ll_stepIndex){if("number"==typeof b.dataIndex&&Array.isArray(a.bitmapList)&&b.dataIndex<a.bitmapList.length&&(a.bitmap.bitmapData=a.bitmapList[b.dataIndex]),b.script)for(i=0;i<b.script.length;i++)obj=b.script[i],l=a.ll_labelList[obj.name],l&&l.rowIndex==a.rowIndex&&l.colIndex==a.colIndex&&l.mode==a.mode&&l.isMirror==(-1==a.bitmap.scaleX)&&obj.func(a,obj.params);typeof b.width!=UNDEFINED&&typeof b.height!=UNDEFINED?a.bitmap.bitmapData.setProperties(b.x,b.y,b.width,b.height):a.bitmap.bitmapData.setCoordinate(b.x,b.y),typeof b.sx!=UNDEFINED&&(c=b.sx),typeof b.sy!=UNDEFINED&&(a.bitmap.y=b.sy),typeof b.mirror!=UNDEFINED&&(a.bitmap.rotateCenter=!1,a.bitmap.scaleX=b.mirror?-1:1),a.bitmap.x=c+(1==a.bitmap.scaleX?0:a.bitmap.getWidth())}a._ll_stepIndex++<d||(a._ll_stepIndex=0,a.colIndex+=a.mode,(a.colIndex>=a.imageArray[a.rowIndex].length||a.colIndex<0)&&(a.colIndex=a.mode>0?0:a.imageArray[a.rowIndex].length-1,"LAnimationTimeline"==a.constructor.name?a._send_complete=!0:a.dispatchEvent(LEvent.COMPLETE)))},clone:function(){var a=this,b=new a.constructor(null,a.bitmapList,a.imageArray.slice(0));return b.copyProperty(a),b.childList.length=0,b.bitmap=a.bitmap.clone(),b.addChild(b.bitmap),b}};for(c in b)a.prototype[c]=b[c];return a}(),LAnimationTimeline=function(){function a(a,b){var e,f,g,d,c=this;for(LExtends(c,LAnimation,[null,a,b]),c.type="LAnimationTimeline",c.speed=0,c._speedIndex=0,c.ll_labelList={},d=0;d<b.length;d++)for(e=b[d],f=0;f<e.length;f++)g=e[f],g.label&&c.setLabel(g.label,d,f,1,g.isMirror?!0:!1);c.addEventListener(LEvent.ENTER_FRAME,c._ll_onframe)}var c,b={clone:function(){var b,c,a=this,d=new a.constructor(a.bitmapList,a.imageArray.slice(0));d.copyProperty(a),d.childList.length=0,d.bitmap=a.bitmap.clone(),d.addChild(d.bitmap);for(b in a.ll_labelList)c=a.ll_labelList[b],d.ll_labelList[b]={rowIndex:c.rowIndex,colIndex:c.colIndex,mode:c.mode,isMirror:c.isMirror};return d},setFrameSpeedAt:function(a,b,c){var d=this;d._ll_stepArray[a]||(d._ll_stepArray[a]=[]),d._ll_stepArray[a][b]=c},_ll_onframe:function(a){var b=a.target;b._ll_stop||b._speedIndex++<b.speed||b._send_complete&&(b.dispatchEvent(LEvent.COMPLETE),b._send_complete=!1,b._ll_stop)||(b._speedIndex=0,b.onframe())},setLabel:function(a,b,c,d,e){this.ll_labelList[a]={rowIndex:b,colIndex:c,mode:typeof d==UNDEFINED?1:d,isMirror:typeof e==UNDEFINED?!1:e}},play:function(){this._ll_stop=!1},stop:function(){this._ll_stop=!0},gotoAndPlay:function(a){var b=this,c=b.ll_labelList[a];b.setAction(c.rowIndex,c.colIndex,c.mode,c.isMirror),b.onframe(),b.play()},gotoAndStop:function(a){var b=this,c=b.ll_labelList[a];b.setAction(c.rowIndex,c.colIndex,c.mode,c.isMirror),b.onframe(),b.stop()},addFrameScript:function(a,b,c){var d=this.ll_labelList[a],e=this.imageArray[d.rowIndex][d.colIndex];e.script||(e.script=[]),e.script.push({func:b,params:c,name:a})},removeFrameScript:function(a){var c,d,e,b=this.ll_labelList[a];if(d=this.imageArray[b.rowIndex][b.colIndex].script)for(e=0;e<d.length;e++)if(c=d[e],c.name==a){d.splice(e,1);break}}};for(c in b)a.prototype[c]=b[c];return a}(),LLoadManage=function(){function a(){this.llname="ll.file.",this.llload="ll.load."}return a.prototype={load:function(a,b,c){var d=this;return a&&0!=a.length?(d.list=a,d.onupdate=b,d.oncomplete=c,d.loader=d,d.index=0,d.loadIndex=0,d.result=[],d.lresult=[],d.loadInit(),void 0):(c([]),void 0)},loadInit:function(){var a=this;a.index>=a.list.length||(a.loadIndex=0,a.loadStart(),a.reloadtime=setTimeout(a.loadInit.bind(a),1e4))},loadStart:function(){var b,e,a=this;a.loadIndex>=a.list.length||(b=a.list[a.loadIndex],b.name||(b.name=a.llname+a.loadIndex),a.lresult[a.llload+b.name]||(b["type"]||(e=getExtension(b.path),"txt"==e?b["type"]=LURLLoader.TYPE_TEXT:"js"==e?b["type"]=LURLLoader.TYPE_JS:new Array("mp3","ogg","wav","m4a").indexOf(e)>=0&&(b["type"]=LSound.TYPE_SOUND)),b["type"]==LURLLoader.TYPE_TEXT||b["type"]==LURLLoader.TYPE_JS?(a.loader=new LURLLoader,a.loader.name=b.name,a.loader.addEventListener(LEvent.COMPLETE,a.loadComplete.bind(a)),a.loader.load(a.url(b.path),b["type"])):b["type"]==LSound.TYPE_SOUND?(a.loader=new LSound,a.loader.name=b.name,a.loader.addEventListener(LEvent.COMPLETE,a.loadComplete.bind(a)),a.loader.load(b.path)):(a.loader=new LLoader,a.loader.name=b.name,a.loader.addEventListener(LEvent.COMPLETE,a.loadComplete.bind(a)),a.loader.load(a.url(b.path),LLoader.TYPE_BITMAPDATE))),a.loadIndex++,a.loadStart())},loadComplete:function(a){var c,b=this;if(a&&a.currentTarget&&a.currentTarget.name){if(a.currentTarget.removeEventListener(LEvent.COMPLETE,b.loadComplete),a.currentTarget.name.indexOf(b.llname)>=0&&(a.target=1),b.lresult[b.llload+a.currentTarget.name])return;b.result[a.currentTarget.name]=a.target,b.lresult[b.llload+a.currentTarget.name]=1}b.index++,b.onupdate&&b.onupdate(Math.floor(100*b.index/b.list.length)),b.index>=b.list.length&&(b.reloadtime&&clearTimeout(b.reloadtime),b.loader=null,c=b.result,LGlobal.forceRefresh=!0,b.oncomplete(c))},url:function(a){return LGlobal.traceDebug?a+(a.indexOf("?")>=0?"&":"?")+"t="+(new Date).getTime():a}},a.load=function(b,c,d){var e=new a;e.load(b,c,d)},a}(),LEasing={None:{easeIn:function(a,b,c,d){return b+a*c/d},easeOut:function(a,b,c,d){return b+a*c/d},easeInOut:function(a,b,c,d){return b+a*c/d}},Quad:{easeIn:function(a,b,c,d){return c*(a/=d)*a+b},easeOut:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},easeInOut:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b}},Cubic:{easeIn:function(a,b,c,d){return c*(a/=d)*a*a+b},easeOut:function(a,b,c,d){return c*((a=a/d-1)*a*a+1)+b},easeInOut:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a+b:c/2*((a-=2)*a*a+2)+b}},Quart:{easeIn:function(a,b,c,d){return c*(a/=d)*a*a*a+b},easeOut:function(a,b,c,d){return-c*((a=a/d-1)*a*a*a-1)+b},easeInOut:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a+b:-c/2*((a-=2)*a*a*a-2)+b}},Quint:{easeIn:function(a,b,c,d){return c*(a/=d)*a*a*a*a+b},easeOut:function(a,b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b},easeInOut:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b}},Sine:{easeIn:function(a,b,c,d){return-c*Math.cos(a/d*(Math.PI/2))+c+b},easeOut:function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b},easeInOut:function(a,b,c,d){return-c/2*(Math.cos(Math.PI*a/d)-1)+b}},Strong:{easeIn:function(a,b,c,d){return c*(a/=d)*a*a*a*a+b},easeOut:function(a,b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b},easeInOut:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b}},Expo:{easeIn:function(a,b,c,d){return 0==a?b:c*Math.pow(2,10*(a/d-1))+b},easeOut:function(a,b,c,d){return a==d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},easeInOut:function(a,b,c,d){return 0==a?b:a==d?b+c:(a/=d/2)<1?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b}},Circ:{easeIn:function(a,b,c,d){return-c*(Math.sqrt(1-(a/=d)*a)-1)+b},easeOut:function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b},easeInOut:function(a,b,c,d){return(a/=d/2)<1?-c/2*(Math.sqrt(1-a*a)-1)+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b}},Elastic:{easeIn:function(a,b,c,d,e,f){var g;return 0==a?b:1==(a/=d)?b+c:(f||(f=.3*d),!e||e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),-(e*Math.pow(2,10*(a-=1))*Math.sin((a*d-g)*2*Math.PI/f))+b)},easeOut:function(a,b,c,d,e,f){var g;return 0==a?b:1==(a/=d)?b+c:(f||(f=.3*d),!e||e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),e*Math.pow(2,-10*a)*Math.sin((a*d-g)*2*Math.PI/f)+c+b)},easeInOut:function(a,b,c,d,e,f){var g;return 0==a?b:2==(a/=d/2)?b+c:(f||(f=d*.3*1.5),!e||e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),1>a?-.5*e*Math.pow(2,10*(a-=1))*Math.sin((a*d-g)*2*Math.PI/f)+b:.5*e*Math.pow(2,-10*(a-=1))*Math.sin((a*d-g)*2*Math.PI/f)+c+b)}},Back:{easeIn:function(a,b,c,d,e){return typeof e==UNDEFINED&&(e=1.70158),c*(a/=d)*a*((e+1)*a-e)+b},easeOut:function(a,b,c,d,e){return typeof e==UNDEFINED&&(e=1.70158),c*((a=a/d-1)*a*((e+1)*a+e)+1)+b},easeInOut:function(a,b,c,d,e){return typeof e==UNDEFINED&&(e=1.70158),(a/=d/2)<1?c/2*a*a*(((e*=1.525)+1)*a-e)+b:c/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b}},Bounce:{easeIn:function(a,b,c,d){return c-LEasing.Bounce.easeOut(d-a,0,c,d)+b},easeOut:function(a,b,c,d){return(a/=d)<1/2.75?c*7.5625*a*a+b:2/2.75>a?c*(7.5625*(a-=1.5/2.75)*a+.75)+b:2.5/2.75>a?c*(7.5625*(a-=2.25/2.75)*a+.9375)+b:c*(7.5625*(a-=2.625/2.75)*a+.984375)+b},easeInOut:function(a,b,c,d){return d/2>a?.5*LEasing.Bounce.easeIn(2*a,0,c,d)+b:.5*LEasing.Bounce.easeOut(2*a-d,0,c,d)+.5*c+b}}},Quad=LEasing.Quad,Cubic=LEasing.Cubic,Quart=LEasing.Quart,Quint=LEasing.Quint,Sine=LEasing.Sine,Strong=LEasing.Strong,Expo=LEasing.Expo,Circ=LEasing.Circ,Elastic=LEasing.Elastic,Back=LEasing.Back,Bounce=LEasing.Bounce,LTweenLite=function(){function a(a,b,c){var d=this;LExtends(d,LObject,[]),d.type="LTweenLiteChild",d.toNew=[],d.init(a,b,c)}function d(){var a=this;LExtends(a,LObject,[]),a.type="LTweenLite",a.tweens=[]}var c,e,b={init:function(a,b,c){var g,h,i,j,k,e=this,f=null;typeof c["tweenTimeline"]==UNDEFINED&&(c["tweenTimeline"]=d.TYPE_FRAME),e.target=a,e.duration=b||.001,e.vars=c,e.delay=e.vars.delay||0,e.vars["tweenTimeline"]==d.TYPE_TIMER?(e.currentTime=(new Date).getTime()/1e3,e.initTime=e.currentTime,e.startTime=e.initTime+e.delay):(e.currentTime=0,e.duration*=1e3,e.currentTime-=1e3*e.delay),e.combinedTimeScale=e.vars.timeScale||1,e.active=0==e.duration&&0==e.delay,e.varsto={},e.varsfrom={},e.varsDiff={},e.varsListIndex={},e.varsListCurr={},e.varsListTo={},e.varsListLength={},e.stop=!1,"function"!=typeof e.vars.ease&&(e.vars.ease=LEasing.None.easeIn),e.ease=e.vars.ease,delete e.vars.ease,e.vars.onComplete&&(e.onComplete=e.vars.onComplete,delete e.vars.onComplete),e.vars.onUpdate&&(e.onUpdate=e.vars.onUpdate,delete e.vars.onUpdate),e.vars.onStart&&(e.onStart=e.vars.onStart,delete e.vars.onStart);for(f in e.vars)if("coordinate"==f&&Array.isArray(e.vars[f])){for(g=0,h={x:e.target.x,y:e.target.y},i=0,j=e.vars[f].length;j>i;i++)k=e.vars[f][i],g+=LPoint.distance(k,h),h=k;e.varsListIndex[f]=0,e.varsListCurr[f]=0,e.varsListTo[f]=g,e.varsto[f]=e.vars[f],e.varsfrom[f]={x:e.target.x,y:e.target.y}}else"number"==typeof e.vars[f]&&(e.varsto[f]=e.vars[f],e.varsfrom[f]=e.target[f],e.varsDiff[f]=e.vars[f]-e.target[f])},pause:function(){this.stop=!0},resume:function(){this.stop=!1},tween:function(){var b,f,g,h,i,j,k,l,m,a=this,e=a.vars["tweenTimeline"]==d.TYPE_TIMER;if(e){if(f=(new Date).getTime()/1e3,g=f-a.startTime,0>g)return}else{if(a.stop)return;if(a.currentTime+=LGlobal.speed,a.currentTime<0)return}for(c in a.varsto)if(typeof a.varsListTo[c]==UNDEFINED)a.target[c]=a.ease(e?g:a.currentTime,a.varsfrom[c],a.varsDiff[c],a.duration);else{for(h=a.ease(e?g:a.currentTime,0,a.varsListTo[c],a.duration),h>a.varsListTo[c]&&(h=a.varsListTo[c]),i=a.varsListIndex[c]>0?a.vars[c][a.varsListIndex[c]-1]:a.varsfrom[c],j=a.vars[c][a.varsListIndex[c]],k=LPoint.distance(i,j);a.varsListCurr[c]+k<h;)a.varsListCurr[c]+=k,i=j,a.varsListIndex[c]++,j=a.vars[c][a.varsListIndex[c]],k=LPoint.distance(i,j);a.target.x=i.x,a.target.y=i.y,0!=k&&0!=j.x-i.x&&(a.target.x+=(j.x-i.x)*(h-a.varsListCurr[c])/k),0!=k&&0!=j.y-i.y&&(a.target.y+=(j.y-i.y)*(h-a.varsListCurr[c])/k)}if(a.onStart&&(a._dispatchEvent(a.onStart),delete a.onStart),l=e?g>=a.duration:a.currentTime>=a.duration){for(b in a.varsto)typeof a.varsListTo[b]==UNDEFINED?a.target[b]=a.varsto[b]:(m=a.varsto[b][a.vars[b].length-1],a.target.x=m.x,a.target.y=m.y);return a.onComplete&&a._dispatchEvent(a.onComplete),!0}return a.onUpdate&&a._dispatchEvent(a.onUpdate),!1},_dispatchEvent:function(a){var b=this;b.target.target=b.target,b.target.currentTarget=b,a(b.target),delete b.target.currentTarget,delete b.target.target},to:function(a,b,c){var d=this;return d.toNew.push({target:a,duration:b,vars:c}),d},keep:function(){var b,c,d,a=this;if(a.toNew.length>0){if(b=a.toNew.shift(),b.vars.loop&&(a.loop=!0),a.loop){c={};for(d in b.vars)c[d]=b.vars[d];a.to(b.target,b.duration,c)}return a.init(b.target,b.duration,b.vars),!0}return!1}};for(c in b)a.prototype[c]=b[c];d.TYPE_FRAME="type_frame",d.TYPE_TIMER="type_timer",b={count:function(){return this.tweens.length},ll_show:function(){var b,d,a=this,c=a.tweens.length;for(b=0;c>b;b++)d=a.tweens[b],d&&d.tween&&d.tween()&&(a.tweens.splice(b,1),b--,c=a.tweens.length,d.keep()&&a.add(d))},to:function(b,c,d){var e,f;if(b)return e=this,f=new a({},0,{}),e.tweens.push(f),f.to(b,c,d),f},add:function(a){this.tweens.push(a)},remove:function(a){var c,d,b=this;if(typeof a!=UNDEFINED)for(c=0,d=b.tweens.length;d>c;c++)if(a.objectIndex==b.tweens[c].objectIndex){b.tweens.splice(c,1);break}},removeAll:function(){this.tweens.splice(0,this.tweens.length)},pauseAll:function(){for(var a=0,b=this.tweens.length;b>a;a++)this.tweens[a].pause()},resumeAll:function(){for(var a=0,b=this.tweens.length;b>a;a++)this.tweens[a].resume()}};for(c in b)d.prototype[c]=b[c];return LTweenLiteTimeline=new d,LGlobal.childList.push(LTweenLiteTimeline),e=new d,e.TYPE_FRAME=d.TYPE_FRAME,e.TYPE_TIMER=d.TYPE_TIMER,LGlobal.childList.push(e),e}(),LAjax=function(){function a(){this.responseType=null}return a.prototype={TEXT:"text",JSON:"json",ARRAY_BUFFER:"arraybuffer",BLOB:"blob",get:function(a,b,c,d){this.getRequest("GET",a,b,c,d)},post:function(a,b,c,d){this.getRequest("POST",a,b,c,d)},getRequest:function(a,b,c,d,e){var g,j,f=this,h="",i="";if(f.err=e,j=f.getHttp()){if(c)for(g in c)h+=i+g+"="+c[g],i="&";if("get"==a.toLowerCase()&&h.length>0&&(b+=(b.indexOf("?")>=0?"&":"?")+h,h=null),j.open(a,b,!0),f.responseType){if(f.responseType==f.JSON)try{j.responseType=f.responseType}catch(k){j.responseType=f.TEXT,j._responseType="json"}else j.responseType=f.responseType;f.responseType=f.TEXT}j.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),j.onreadystatechange=function(){4==j.readyState&&(j.status>=200&&j.status<300||304===j.status?d&&(j._responseType==f.JSON?(j._responseType=f.TEXT,d(JSON.parse(j.responseText))):j.responseType==f.ARRAY_BUFFER||j.responseType==f.BLOB||j.responseType==f.JSON?d(j.response):j.responseText.length>0?d(j.responseText):d(null)):e&&e(j))},j.send(h)}},getHttp:function(){if(typeof XMLHttpRequest!=UNDEFINED)return new XMLHttpRequest;try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(a){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){this.err||this.err(a)}}return!1}},new a}(),LStageWebView=function(){function a(){var a=this;LExtends(a,LEventDispatcher,[]),a.display=document.createElement("div"),a.iframe=document.createElement("iframe"),a.display.style.position="absolute",a.display.style.marginTop="0px",a.display.style.marginLeft="0px",a.display.style.zIndex=11,LGlobal.ios&&(a.display.style.overflow="auto",a.display.style.webkitOverflowScrolling="touch"),a.display.appendChild(a.iframe),a.idAdded=!1}var c,b={loadURL:function(a){var b=this;b.iframe.src=a,b.iframe.onload=function(){b.dispatchEvent(LEvent.COMPLETE)}},show:function(){var a=this;a.idAdded||(LGlobal.object.appendChild(a.display),a.idAdded=!0),"none"==a.display.style.display&&(a.display.style.display="")},die:function(){LGlobal.object.removeChild(this.display),this.idAdded=!1},hide:function(){this.display.style.display="none"},setViewPort:function(a){var b=this,c=parseInt(LGlobal.canvasObj.style.width)/LGlobal.canvasObj.width,d=parseInt(LGlobal.canvasObj.style.height)/LGlobal.canvasObj.height;b.display.style.marginTop=parseInt(LGlobal.canvasObj.style.marginTop)+(a.y*d>>>0)+"px",b.display.style.marginLeft=parseInt(LGlobal.canvasObj.style.marginLeft)+(a.x*c>>>0)+"px",b.iframe.style.width=b.display.style.width=(a.width*c>>>0)+"px",b.iframe.style.height=b.display.style.height=(a.height*d>>>0)+"px"}};for(c in b)a.prototype[c]=b[c];return a}(),FPS=function(){function a(){var b,c,a=this;for(LExtends(a,LSprite,[]),LGlobal.fpsStatus||(LGlobal.fpsStatus={a:0,b:0,c:0,d:0,e:0,bitmapData:0,display:0,transform:0,graphics:0,text:0,reset:function(){this.a=this.bitmapData,this.b=this.display-1,this.c=this.transform-1,this.d=this.graphics-1,this.e=this.text-5,this.bitmapData=0,this.display=0,this.transform=0,this.graphics=0,this.text=0}}),a.fps=[],a.back=new LShape,a.back.alpha=.5,a.addChild(a.back),b=0;5>b;b++)c=new LTextField,c.color="#ffffff",c.y=20*b,a.addChild(c),a.fps.push(c);a.fpsCount=0,a.fpsTime=(new Date).getTime(),a.addEventListener(LEvent.ENTER_FRAME,a.showFPS)}return a.prototype.showFPS=function(a){var c,d,b=a.currentTarget;b.fpsCount++,c=(new Date).getTime(),c-b.fpsTime<1e3||(b.fps[0].text="FPS:"+Math.round(1e4*b.fpsCount/(c-b.fpsTime))/10,d=LGlobal.fpsStatus,b.fps[1].text="DisplayObject:"+d.c+"/"+d.b,b.fps[2].text="Draw image:"+d.a,b.fps[3].text="Draw graphics:"+d.d,b.fps[4].text="Draw text:"+d.e,b.fpsTime=c,b.fpsCount=0,b.back.graphics.clear(),b.back.graphics.drawRect(0,"#000000",[0,0,b.fps[1].getWidth(),100],!0,"#000000"))},a.prototype.die=function(){var a=this;LGlobal.fpsStatus=null,a.callParent("die",arguments)},a}(),LQuadTree=function(){function a(a){var b=this;LExtends(b,LObject,[]),b.q1=null,b.q2=null,b.q3=null,b.q4=null,b.parent=null,b.data=[],b.rect=a,b.root=b}var c,b={createChildren:function(b){var c,d,e;0!=b&&(c=this,d=c.rect.width/2,e=c.rect.height/2,c.q1=new a(new LRectangle(c.rect.x+d,c.rect.y,d,e)),c.q2=new a(new LRectangle(c.rect.x+d,c.rect.y+e,d,e)),c.q3=new a(new LRectangle(c.rect.x,c.rect.y+e,d,e)),c.q4=new a(new LRectangle(c.rect.x,c.rect.y,d,e)),c.q1.parent=c.q2.parent=c.q3.parent=c.q4.parent=c,c.q1.root=c.q2.root=c.q3.root=c.q4.root=c.root,c.q1.createChildren(b-1),c.q2.createChildren(b-1),c.q3.createChildren(b-1),c.q4.createChildren(b-1))},hasChildren:function(){var a=this;return a.q1&&a.q2&&a.q3&&a.q4},clear:function(){var a=this;return a.hasChildren()?a.q1.clear()||a.q2.clear()||a.q3.clear()||a.q4.clear():(a.q1=null,a.q2=null,a.q3=null,a.q4=null,a.parent=null,a.data=[],a)},add:function(a,b,c){var d=this;return d.isIn(b,c)?d.hasChildren()?d.q1.add(a,b,c)||d.q2.add(a,b,c)||d.q3.add(a,b,c)||d.q4.add(a,b,c):(d.data.push(a),d):null},remove:function(a,b,c){var e,d=this;return d.isIn(b,c)?d.hasChildren()?d.q1.remove(a,b,c)||d.q2.remove(a,b,c)||d.q3.remove(a,b,c)||d.q4.remove(a,b,c):(e=d.data.indexOf(a),-1!=e?(d.data.splice(e,1),d):null):null},isIn:function(a,b){var c=this;return(typeof a==UNDEFINED||a>=c.rect.x&&a<c.rect.right)&&(typeof b==UNDEFINED||b>=c.rect.y&&b<c.rect.bottom)},getDataInRect:function(a){var c,b=this;return b.rect.intersects(a)?(c=b.data.concat(),b.hasChildren()&&(c.push.apply(c,b.q1.getDataInRect(a)),c.push.apply(c,b.q2.getDataInRect(a)),c.push.apply(c,b.q3.getDataInRect(a)),c.push.apply(c,b.q4.getDataInRect(a))),c):[]}};for(c in b)a.prototype[c]=b[c];return a}(),LoadingSample1=function(){function a(a,b,c){base(this,LSprite,[]);var d=this;d.numberList=new Array([1,1,1,1,0,1,1,0,1,1,0,1,1,1,1],[0,1,0,1,1,0,0,1,0,0,1,0,0,1,0],[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1],[1,1,1,0,0,1,1,1,1,0,0,1,1,1,1],[1,0,1,1,0,1,1,1,1,0,0,1,0,0,1],[1,1,1,1,0,0,1,1,1,0,0,1,1,1,1],[1,1,1,1,0,0,1,1,1,1,0,1,1,1,1],[1,1,1,0,0,1,0,0,1,0,0,1,0,0,1],[1,1,1,1,0,1,1,1,1,1,0,1,1,1,1],[1,1,1,1,0,1,1,1,1,0,0,1,1,1,1]),d.backgroundColor=null==b?"#000000":b,d.color=null==c?"#ffffff":c,d.progress=0,d.step=null==a?.5*LGlobal.width/15:a,d.back=new LSprite,d.addChild(d.back),d.num=new LSprite,d.addChild(d.num),d.num.mask=new LSprite,d.screenX=(LGlobal.width-15*d.step)/2,d.screenY=(LGlobal.height-5*d.step)/2,d.num.x=d.screenX,d.num.y=d.screenY,d.setProgress(d.progress)}return a.prototype.setProgress=function(a){var e,f,g,b=this,c=LGlobal.canvas,d="",h=b.step;a>=100?(d=b.getNumber(1),e=b.getNumber(0),f=b.getNumber(0),h=3*b.step):a>=10?(e=b.getNumber(Math.floor(a/10)),f=b.getNumber(a%10)):(e=b.getNumber(0),f=b.getNumber(a)),b.back.graphics.clear(),b.back.graphics.add(function(){if(c.beginPath(),c.fillStyle=b.backgroundColor,c.fillRect(0,0,LGlobal.width,LGlobal.height),c.closePath(),c.fillStyle=b.color,a>=100)for(g=0;g<d.length;g++)0!=d[g]&&c.fillRect(b.screenX+Math.floor(g%3)*b.step,b.screenY+Math.floor(g/3)*b.step,b.step,b.step);for(g=0;g<e.length;g++)0!=e[g]&&c.fillRect(b.screenX+h+Math.floor(g%3)*b.step,b.screenY+Math.floor(g/3)*b.step,b.step,b.step);for(g=0;g<f.length;g++)0!=f[g]&&c.fillRect(b.screenX+h+Math.floor(g%3)*b.step+4*b.step,b.screenY+Math.floor(g/3)*b.step,b.step,b.step);c.moveTo(b.screenX+h+9.7*b.step,b.screenY),c.lineTo(b.screenX+h+10.5*b.step,b.screenY),c.lineTo(b.screenX+h+9.3*b.step,b.screenY+5*b.step),c.lineTo(b.screenX+h+8.5*b.step,b.screenY+5*b.step),c.lineTo(b.screenX+h+9.7*b.step,b.screenY),c.fill(),c.moveTo(b.screenX+h+8.5*b.step,b.screenY+b.step),c.arc(b.screenX+h+8.5*b.step,b.screenY+b.step,.6*b.step,0,360+Math.PI/180),c.moveTo(b.screenX+h+10.5*b.step,b.screenY+4*b.step),c.arc(b.screenX+h+10.5*b.step,b.screenY+4*b.step,.6*b.step,0,360+Math.PI/180),c.fill()}),b.num.mask.graphics.clear(),b.num.mask.graphics.add(function(){var g;if(a>=100)for(g=0;g<d.length;g++)0!=d[g]&&c.rect(b.screenX+Math.floor(g%3)*b.step,b.screenY+Math.floor(g/3)*b.step,b.step,b.step);for(g=0;g<e.length;g++)0!=e[g]&&c.rect(b.screenX+h+Math.floor(g%3)*b.step,b.screenY+Math.floor(g/3)*b.step,b.step,b.step);for(g=0;g<f.length;g++)0!=f[g]&&c.rect(b.screenX+h+Math.floor(g%3)*b.step+4*b.step,b.screenY+Math.floor(g/3)*b.step,b.step,b.step)}),c.fillStyle=LGlobal._create_loading_color(),b.num.graphics.clear(),b.num.graphics.drawRect(1,c.fillStyle,[0,.01*5*b.step*(100-a),LGlobal.width,LGlobal.height],!0,c.fillStyle)},a.prototype.getNumber=function(a){return this.numberList[a]},a}(),LoadingSample2.prototype.setProgress=function(a){var b=this,c=LGlobal.canvas;b.progressLabel.text=a+"%",b.showLabel.mask.clear(),b.showLabel.mask.drawRect(0,"#000000",[b.screenX,0,.01*b.screenWidth*a,LGlobal.height]),a>=100&&(c.shadowOffsetX=0,c.shadowOffsetY=0)},LoadingSample3.prototype.onframe=function(a){var b,c,d;if(a.progress>=100){if(a.star.length>0){for(b=0,d=a.star.length;d>b;b++)a.removeChild(a.star[b]);a.star.length=0}}else{for(b=0,d=a.star.length;d>b;b++)c=a.star[b],c.alpha-=.1,c.x+=c.speedx,c.y+=c.speedy,c.alpha<=0&&(a.star.splice(b,1),a.removeChild(c),b--,d--);a.star.length<10&&a.addStar()}},LoadingSample3.prototype.addStar=function(){var a=this,b=LGlobal.canvas,c=new LSprite,d=1+Math.floor(4*Math.random());c.graphics.add(function(){b.beginPath(),b.fillStyle="#ffffff",b.lineTo(2*d,d),b.lineTo(4*d,0),b.lineTo(3*d,2*d),b.lineTo(4*d,4*d),b.lineTo(2*d,3*d),b.lineTo(0,4*d),b.lineTo(d,2*d),b.lineTo(0,0),b.fill()}),c.x=a.screenX+.01*a.screenWidth*a.progress,c.y=a.screenY,c.speedx=4-8*Math.random(),c.speedy=4-8*Math.random(),a.star.push(c),a.addChild(c)},LoadingSample3.prototype.setProgress=function(a){var b=this,c=LGlobal.canvas;a>100&&(a=100),b.progress=a,b.back.graphics.clear(),b.back.graphics.add(function(){c.beginPath(),c.fillStyle="#00FFFF",c.rect(b.screenX-3,b.screenY-3,b.screenWidth+6,b.screenHeight+6),c.fill(),c.beginPath(),c.fillStyle="#990033",c.rect(b.screenX,b.screenY,b.screenWidth,b.screenHeight),c.fill(),c.beginPath(),c.fillStyle=b.color,c.rect(b.screenX,b.screenY,.01*b.screenWidth*a,b.screenHeight),c.fill()}),b.label.text=a+"%"},LoadingSample4.prototype.onframe=function(a){a.target.arc.rotate+=20},LoadingSample4.prototype.setProgress=function(a){var b=this;a>100&&(a=100),b.progress=a,b.label.text=a+"%",b.label.x=.5*LGlobal.width-.5*b.label.getWidth()},LoadingSample5.prototype.onframe=function(a){var b=a.target;b.index++<b.max||(b.index=0,b.arc.rotate+=30)},LoadingSample5.prototype.setProgress=function(a){var b=this;a>100&&(a=100),b.progress=a,b.label.text=a+"%",b.label.x=.5*LGlobal.width-.5*b.label.getWidth()},LoadingSample6.prototype._addHole=function(){var e,f,a=this,b=a.holeAmount,c=2*a.holeR+a.holesx,d=a.holeR;for(e=0;b>e;e++)f=new LSprite,f.x=e*c,f.graphics.drawArc(1,"#111",[0,0,d,0,2*Math.PI],!0,"#000"),f.graphics.drawArc(1,"#333",[0,0,d,1.7*Math.PI,.7*Math.PI],!1),a.holeLayer.addChild(f)
},LoadingSample6.prototype.setProgress=function(a){var e,f,g,h,i,j,k,l,b=this,c=2*b.holeR+b.holesx,d=b.holeR;for(b.progress=a/100,e=new Array;Math.floor(b.progress/.2)>b.step;)f=2*d,g=f,h=LGlobal.canvas.createLinearGradient(0,2*-g,0,g),h.addColorStop(0,"white"),h.addColorStop(1,b.progressColor),i=new LSprite,i.x=b.step*c,i.scaleX=0,i.scaleY=0,i.graphics.drawArc(0,"",[0,0,d,0,2*Math.PI],!0,h),b.progressLayer.addChild(i),e.push(i),b.step++;for(j=function(a){var e,c=new LSprite;c.alpha=.9,c.x=a.x,c.graphics.drawArc(1,b.filterColor,[0,0,d,0,2*Math.PI],!1),b.progressLayer.addChild(c),e=new LDropShadowFilter(0,5,b.filterColor,10),c.filters=[e],LTweenLite.to(c,.5,{scaleX:1.7,scaleY:1.7,alpha:0,onComplete:function(a){a.parent.removeChild(a)}})},k=0;k<e.length;k++)l=e[k],LTweenLite.to(l,1,{scaleX:1,scaleY:1,onComplete:j})},LoadingSample7.prototype._addHole=function(){var f,g,h,i,a=this,b=a.holeAmount,c=a.holeW+a.holesx,e=(a.holeW,a.holeH);for(f=0;b>f;f++)g=new LSprite,g.x=f*c,g.graphics.drawRect(1,"#333",[1,1,a.holeW,a.holeH],!1),g.graphics.drawRect(1,"#111",[0,0,a.holeW,a.holeH],!0,"#000"),a.holeLayer.addChild(g),h=LGlobal.canvas.createLinearGradient(0,-e,0,e),h.addColorStop(0,"white"),h.addColorStop(1,a.progressColor),i=new LSprite,i.alpha=0,i.x=f*c,i.graphics.drawRect(0,"",[0,0,a.holeW,a.holeH],!0,h),a.progressLayer.addChild(i)},LoadingSample7.prototype.setProgress=function(a){var c,d,e,f,b=this;if(b.progress=a/100,Math.floor(b.progress/.1)>b.step){for(c=Math.ceil(b.progress/.1),c>10&&(c=10),d=0;c>d;d++)e=b.progressLayer.childList,e[d].alpha>0||(f=b.progressLayer.childList[d],LTweenLite.to(f,1,{alpha:1}));b.step++}},LBox2d=function(){function a(b,c,d){var f,g,i,h,j,e=this;Box2D.Dynamics.b2World.prototype.LAddController=Box2D.Dynamics.b2World.prototype.AddController,Box2D.Dynamics.b2World.prototype.AddController=function(b){var d,c={};for(d in b)c[d]=b[d];return a&&(a.m_controllerList=c),this.LAddController(b)},h=Box2D,j=[h.Collision,h.Common,h.Common.Math,h.Dynamics,h.Dynamics.Contacts,h.Dynamics.Controllers,h.Dynamics.Joints,h.Collision.Shapes];for(f in j)for(g in j[f])e[g]=j[f][g];typeof d==UNDEFINED&&(d=30),e.stop=!1,e.drawScale=30,e.selectedBody=null,e.mouseJoint=null,e.mousePVec=null,e.contactListener=null,b=typeof b==UNDEFINED?new e.b2Vec2(0,9.8):new e.b2Vec2(b[0],b[1]),typeof c==UNDEFINED&&(c=!0),e.world=new e.b2World(b,c),e.removeList=new Array,LGlobal.traceDebug&&(i=new e.b2DebugDraw,i.SetSprite(LGlobal.canvas),i.SetLineThickness(1),i.SetFillAlpha(.5),i.SetAlpha(1),i.SetDrawScale(e.drawScale),i.SetFlags(e.b2DebugDraw.e_shapeBit|e.b2DebugDraw.e_jointBit),e.world.SetDebugDraw(i)),LGlobal.destroy=!0}return a.prototype={setEvent:function(a,b){var c=this;if(a==LEvent.ENTER_FRAME)return c.ll_enterFrame=b,void 0;switch(c.contactListener||(c.contactListener=new c.b2ContactListener,c.world.SetContactListener(c.contactListener)),a){case LEvent.END_CONTACT:c.contactListener.EndContact=b;break;case LEvent.PRE_SOLVE:c.contactListener.PreSolve=b;break;case LEvent.POST_SOLVE:c.contactListener.PostSolve=b;break;case LEvent.BEGIN_CONTACT:default:c.contactListener.BeginContact=b}},setWeldJoint:function(a,b){var c=this,d=new c.b2WeldJointDef;return d.Initialize(b,a,b.GetWorldCenter()),c.world.CreateJoint(d)},setLineJoint:function(a,b,c,d,e){var f=this,g=new f.b2Vec2(c[0],c[1]),h=new f.b2LineJointDef;return h.Initialize(a,b,b.GetWorldCenter(),g),null==d?h.enableLimit=!1:(h.lowerTranslation=d[0],h.upperTranslation=d[1],h.enableLimit=!0),null==e?h.enableMotor=!1:(h.maxMotorForce=e[0],h.motorSpeed=e[1],h.enableMotor=!0),f.world.CreateJoint(h)},setGearJoint:function(a,b,c,d,e){var f=this,g=new f.b2GearJointDef;return g.joint1=d,g.joint2=e,g.bodyA=a,g.bodyB=b,g.ratio=c*f.b2Settings.b2_pi/(300/f.drawScale),f.world.CreateJoint(g)},setPrismaticJoint:function(a,b,c,d,e){var f=this,g=new f.b2Vec2(c[0],c[1]),h=new f.b2PrismaticJointDef;return h.Initialize(b,a,b.GetWorldCenter(),g),null==d?h.enableLimit=!1:(h.lowerTranslation=d[0],h.upperTranslation=d[1],h.enableLimit=!0),null==e?h.enableMotor=!1:(h.maxMotorForce=e[0],h.motorSpeed=e[1],h.enableMotor=!0),f.world.CreateJoint(h)},setRevoluteJoint:function(a,b,c,d){var e=this,f=new e.b2RevoluteJointDef;return f.Initialize(a,b,b.GetWorldCenter()),null==c?f.enableLimit=!1:(f.lowerAngle=c[0]*e.b2Settings.b2_pi/180,f.upperAngle=c[1]*e.b2Settings.b2_pi/180,f.enableLimit=!0),null==d?f.enableMotor=!1:(f.maxMotorTorque=d[0],f.motorSpeed=d[1],f.enableMotor=!0),e.world.CreateJoint(f)},setDistanceJoint:function(a,b){var c=this,d=new c.b2DistanceJointDef;return d.Initialize(a,b,a.GetWorldCenter(),b.GetWorldCenter()),c.world.CreateJoint(d)},setPulleyJoint:function(a,b,c,d,e){var f=this,g=a.GetWorldCenter(),h=b.GetWorldCenter(),i=new f.b2Vec2(g.x+c[0]/f.drawScale,g.y+c[1]/f.drawScale),j=new f.b2Vec2(h.x+d[0]/f.drawScale,h.y+d[1]/f.drawScale),k=new f.b2PulleyJointDef;return k.Initialize(a,b,i,j,g,h,e),k.maxLengthA=c[2]/f.drawScale,k.maxLengthB=d[2]/f.drawScale,f.world.CreateJoint(k)},addCircle:function(a,b,c,d,e,f,g){var i,h=this;return h.bodyDef=new h.b2BodyDef,h.bodyDef.type=d,h.fixDef=new h.b2FixtureDef,h.fixDef.density=e,h.fixDef.friction=f,h.fixDef.restitution=g,h.fixDef.shape=new h.b2CircleShape(a),h.bodyDef.position.x=b,h.bodyDef.position.y=c,i=h.world.CreateBody(h.bodyDef),i.CreateFixture(h.fixDef),i},addPolygon:function(a,b,c,d,e,f,g,h){var j,i=this;return i.bodyDef=new i.b2BodyDef,i.bodyDef.type=e,i.fixDef=new i.b2FixtureDef,i.fixDef.density=f,i.fixDef.friction=g,i.fixDef.restitution=h,i.fixDef.shape=new i.b2PolygonShape,i.fixDef.shape.SetAsBox(a,b),i.bodyDef.position.x=c,i.bodyDef.position.y=d,j=i.world.CreateBody(i.bodyDef),j.CreateFixture(i.fixDef),j},addVertices:function(a,b,c,d,e){var g,h,i,f=this;for(f.bodyDef=new f.b2BodyDef,f.bodyDef.type=b,i=f.world.CreateBody(f.bodyDef),g=0,h=a.length;h>g;g++)f.createShapeAsArray(i,a[g],b,c,d,e);return i},createShapeAsArray:function(a,b,c,d,e,f){var j,g=this,h=new g.b2PolygonShape,i=g.createVerticesArray(b);h.SetAsArray(i,0),j=new g.b2FixtureDef,j.shape=h,j.density=d,j.friction=e,j.restitution=f,a.CreateFixture(j)},createVerticesArray:function(a){var c,d,b=this,e=new Array;if(a.length<3)return e;for(c=0,d=a.length;d>c;c++)e.push(new b.b2Vec2(a[c][0]/b.drawScale,a[c][1]/b.drawScale));return e},getBodyAtMouse:function(a,b){var d,c=this;return c.mousePVec=new c.b2Vec2(a,b),d=new c.b2AABB,d.lowerBound.Set(a-.001,b-.001),d.upperBound.Set(a+.001,b+.001),c.selectedBody=null,c.world.QueryAABB(c.getBodyCallBack,d),c.selectedBody},getBodyCallBack:function(a){var b=LGlobal.box2d;return a.GetBody().GetType()!=b.b2Body.b2_staticBody&&a.GetShape().TestPoint(a.GetBody().GetTransform(),b.mousePVec)?(b.selectedBody=a.GetBody(),!1):!0},ll_show:function(){var a=this,b=null;for(b in a.removeList)a.world.DestroyBody(a.removeList[b]);a.removeList.splice(0,a.removeList.length),a.stop||(a.ll_enterFrame&&a.ll_enterFrame({target:a}),a.world.Step(1/30,10,10),a.world.ClearForces(),LGlobal.traceDebug&&a.world.DrawDebugData())},synchronous:function(){var d,h,i,b=this,c=null,e=null,f=0,g=0;for(h=b.world.GetBodyList();h;h=h.GetNext())d=h.GetUserData(),d&&(null==e&&(c=d.parent,f=h.GetPosition().x,g=h.GetPosition().y),h.SetPosition(new b.b2Vec2((d.x+d.rotatex+c.x)/b.drawScale,(d.y+d.rotatey+c.y)/b.drawScale)),null==e&&(e={x:h.GetPosition().x-f,y:h.GetPosition().y-g}));for(i=b.world.GetJointList();i;i=i.GetNext())i.m_groundAnchor1&&(i.m_groundAnchor1.x+=e.x,i.m_groundAnchor1.y+=e.y),i.m_groundAnchor2&&(i.m_groundAnchor2.x+=e.x,i.m_groundAnchor2.y+=e.y);a.m_controllerList&&b.world.m_controllerList&&c&&(LGlobal.box2d.world.m_controllerList.offset=a.m_controllerList.offset-c.y/LGlobal.box2d.drawScale)}},a}(),LSprite.prototype.setBodyMouseJoint=function(a){var b=this;b.box2dBody&&(b.box2dBody.mouseJoint=a)},LSprite.prototype.clearBody=function(){var b=this;b.box2dBody&&(LGlobal.box2d.removeList.push(b.box2dBody),b.box2dBody=null)},LSprite.prototype.addBodyCircle=function(a,b,c,d,e,f,g){var h=this;h.rotatex=a,h.rotatey=a,h.box2dBody=LGlobal.box2d.addCircle(a/LGlobal.box2d.drawScale,(h.x+b)/LGlobal.box2d.drawScale,(h.y+c)/LGlobal.box2d.drawScale,1==d?LGlobal.box2d.b2Body.b2_dynamicBody:LGlobal.box2d.b2Body.b2_staticBody,null==e?.5:e,null==f?.4:f,null==g?.8:g),h.box2dBody.SetUserData(h)},LSprite.prototype.addBodyPolygon=function(a,b,c,d,e,f){var g=this;g.rotatex=a/2,g.rotatey=b/2,g.box2dBody=LGlobal.box2d.addPolygon(.5*a/LGlobal.box2d.drawScale,.5*b/LGlobal.box2d.drawScale,g.x/LGlobal.box2d.drawScale,g.y/LGlobal.box2d.drawScale,1==c?LGlobal.box2d.b2Body.b2_dynamicBody:LGlobal.box2d.b2Body.b2_staticBody,null==d?.5:d,null==e?.4:e,null==f?.8:f),g.box2dBody.SetUserData(g)},LSprite.prototype.addBodyVertices=function(a,b,c,d,e,f,g){var h=this;h.rotatex=0,h.rotatey=0,h.box2dBody=LGlobal.box2d.addVertices(a,1==d?LGlobal.box2d.b2Body.b2_dynamicBody:LGlobal.box2d.b2Body.b2_staticBody,e,f,g),h.box2dBody.SetUserData(h),h.box2dBody.SetPosition(new LGlobal.box2d.b2Vec2((h.x+b)/LGlobal.box2d.drawScale,(h.y+c)/LGlobal.box2d.drawScale))},LGlobal.mouseJoint_start=function(a){var b,c,d,e;LGlobal.IS_MOUSE_DOWN&&LGlobal.box2d&&!LGlobal.box2d.mouseJoint&&!LGlobal.box2d.stop&&(b=a.offsetX/LGlobal.box2d.drawScale,c=a.offsetY/LGlobal.box2d.drawScale,d=LGlobal.box2d.getBodyAtMouse(b,c),d&&d.mouseJoint&&(e=new LGlobal.box2d.b2MouseJointDef,e.bodyA=LGlobal.box2d.world.GetGroundBody(),e.bodyB=d,e.target.Set(b,c),e.collideConnected=!0,e.maxForce=3e5*d.GetMass(),LGlobal.box2d.mouseJoint=LGlobal.box2d.world.CreateJoint(e),d.SetAwake(!0)))},LGlobal.mouseJoint_move=function(a){LGlobal.IS_MOUSE_DOWN&&LGlobal.box2d&&LGlobal.box2d.mouseJoint&&(mX=a.offsetX/LGlobal.box2d.drawScale,mY=a.offsetY/LGlobal.box2d.drawScale,LGlobal.box2d.mouseJoint.SetTarget(new LGlobal.box2d.b2Vec2(mX,mY)))},LGlobal.mouseJoint_end=function(){null!=LGlobal.box2d&&LGlobal.box2d.mouseJoint&&(LGlobal.box2d.world.DestroyJoint(LGlobal.box2d.mouseJoint),LGlobal.box2d.mouseJoint=null)},LTransition=function(){function a(a,b){this.child=a,this.trans=b}return a.prototype={startTransition:function(){var b=this;switch(b.trans.type){case a.Blinds:b.blinds();break;case a.Fade:b.fade();break;case a.Fly:b.fly();break;case a.Iris:b.iris();break;case a.Squeeze:b.squeeze();break;case a.Wipe:b.wipe();break;case a.Zoom:b.zoom();break;case a.PixelDissolve:b.pixelDissolve();break;case a.Curtain:b.curtain();break;default:throw"the type is not exists."}},blindsComplete:function(b){b.trans.direction==a.OUT?b.child.mask.clear():b.blindsUpdateRun(),b.child.mask=null,b.trans.onComplete&&b.trans.onComplete(b.child)},blindsUpdateRun:function(){var a=this,b=a.child.mask,c=LGlobal.canvas;b.clear(),a.trans.dimension?b.add(function(){c.save();for(var b=0;b<a.trans.numStrips;b++)c.rect(b*a.maxSize,0,a.blindsSize,a.child.getHeight());c.restore()}):b.add(function(){c.save();for(var b=0;b<a.trans.numStrips;b++)c.rect(0,0+b*a.maxSize,a.child.getWidth(),a.blindsSize);c.restore()})},blindsUpdate:function(a){a.blindsUpdateRun(),a.trans.onUpdate&&a.trans.onUpdate(a.child)},blinds:function(){var c,d,b=this;b.trans.numStrips||(b.trans.numStrips=1),b.blindsSize=0,b.maxSize=b.trans.dimension?b.child.getWidth()/b.trans.numStrips>>0:b.child.getHeight()/b.trans.numStrips>>0,c=new LGraphics,b.child.mask=c,d=b.maxSize,b.trans.direction==a.OUT&&(b.blindsSize=b.maxSize,d=0),LTweenLite.to(b,b.trans.duration,{blindsSize:d,onComplete:b.blindsComplete,onUpdate:b.blindsUpdate,ease:b.trans.easing})},fadeComplete:function(a){a.child.alpha=a.alpha,a.trans.onComplete&&a.trans.onComplete(a.child)},fadeUpdate:function(a){a.child.alpha=a.alpha,a.trans.onUpdate&&a.trans.onUpdate(a.child)},fade:function(){var b=this,c=1;b.alpha=0,b.trans.direction==a.OUT&&(b.alpha=1,c=0),b.child.alpha=b.alpha,LTweenLite.to(b,b.trans.duration,{alpha:c,onComplete:b.fadeComplete,onUpdate:b.fadeUpdate,ease:b.trans.easing})},flyComplete:function(a){a.child.x=a.x,a.child.y=a.y,a.trans.onComplete&&a.trans.onComplete(a.child)},flyUpdate:function(a){a.child.x=a.x,a.child.y=a.y,a.trans.onUpdate&&a.trans.onUpdate(a.child)},fly:function(){var b=this,c=b.child.x,d=b.child.y;switch(b.trans.startPoint){case 1:b.x=-b.child.getWidth(),b.y=-b.child.getHeight();break;case 2:b.x=.5*(LGlobal.width-b.child.getWidth()),b.y=-b.child.getHeight();break;case 3:b.x=LGlobal.width,b.y=-b.child.getHeight();break;case 4:b.x=-b.child.getWidth(),b.y=.5*(LGlobal.height-b.child.getHeight());break;case 6:b.x=LGlobal.width,b.y=.5*(LGlobal.height-b.child.getHeight());break;case 7:b.x=-b.child.getWidth(),b.y=LGlobal.height;break;case 8:b.x=.5*(LGlobal.width-b.child.getWidth()),b.y=LGlobal.height;break;case 9:b.x=LGlobal.width,b.y=LGlobal.height;break;case 5:default:b.x=.5*(LGlobal.width-b.child.getWidth()),b.y=.5*(LGlobal.height-b.child.getHeight())}b.trans.direction==a.OUT?(c=b.x,d=b.y,b.x=b.child.x,b.y=b.child.y):(b.child.x=b.x,b.child.y=b.y),LTweenLite.to(b,b.trans.duration,{x:c,y:d,onComplete:b.flyComplete,onUpdate:b.flyUpdate,ease:b.trans.easing})},irisComplete:function(b){b.trans.direction==a.OUT?b.child.mask.clear():b.irisUpdateRun(),b.child.mask=null,b.trans.onComplete&&b.trans.onComplete(b.child)},irisUpdateRun:function(){var a=this,b=a.child.mask;LGlobal.canvas,b.clear(),a.trans.shape==LIris.CIRCLE?b.drawArc(0,"#000000",[a.x,a.y,a.r,0,2*Math.PI]):b.drawRect(0,"#000000",[a.x+a.sLeft,a.y+a.sTop,a.width,a.height])},irisUpdate:function(a){a.irisUpdateRun(),a.trans.onUpdate&&a.trans.onUpdate(a.child)},iris:function(){var c,b=this;switch(b.sLeft=0,b.sTop=0,b.width=0,b.height=0,b.x=0,b.y=0,b.r=0,b.eWidth=b.child.getWidth(),b.eHeight=b.child.getHeight(),b.trans.startPoint){case 1:b.eR=Math.sqrt(b.eWidth*b.eWidth+b.eHeight*b.eHeight);break;case 2:b.eR=Math.sqrt(.5*b.eWidth*.5*b.eWidth+b.eHeight*b.eHeight),b.x=.5*b.child.getWidth();break;case 3:b.eR=Math.sqrt(b.eWidth*b.eWidth+b.eHeight*b.eHeight),b.x=b.child.getWidth();break;case 4:b.eR=Math.sqrt(b.eWidth*b.eWidth+.5*b.eHeight*.5*b.eHeight),b.y=.5*b.child.getHeight();break;case 6:b.eR=Math.sqrt(b.eWidth*b.eWidth+.5*b.eHeight*.5*b.eHeight),b.x=b.child.getWidth(),b.y=.5*b.child.getHeight();break;case 7:b.eR=Math.sqrt(b.eWidth*b.eWidth+b.eHeight*b.eHeight),b.y=b.child.getHeight();break;case 8:b.eR=Math.sqrt(.5*b.eWidth*.5*b.eWidth+b.eHeight*b.eHeight),b.x=.5*b.child.getWidth(),b.y=b.child.getHeight();break;case 9:b.eR=Math.sqrt(b.eWidth*b.eWidth+b.eHeight*b.eHeight),b.x=b.child.getWidth(),b.y=b.child.getHeight();break;case 5:default:b.eR=Math.sqrt(.5*b.eWidth*.5*b.eWidth+.5*b.eHeight*.5*b.eHeight),b.x=.5*b.child.getWidth(),b.y=.5*b.child.getHeight()}b.eLeft=-b.x,b.eTop=-b.y,c=new LGraphics,b.child.mask=c,b.maxSize,b.trans.direction==a.OUT&&(b.sLeft=b.eLeft,b.sTop=b.eTop,b.eLeft=0,b.eTop=0,b.width=b.eWidth,b.height=b.eHeight,b.eWidth=0,b.eHeight=0,b.r=b.eR,b.eR=0),LTweenLite.to(b,b.trans.duration,{width:b.eWidth,height:b.eHeight,sLeft:b.eLeft,sTop:b.eTop,r:b.eR,onComplete:b.irisComplete,onUpdate:b.irisUpdate,ease:b.trans.easing})},curtainComplete:function(b){b.trans.direction==a.OUT?b.child.mask.clear():b.curtainUpdateRun(),b.child.mask=null,b.trans.onComplete&&b.trans.onComplete(b.child)},curtainUpdateRun:function(){var a=this,b=a.child.mask,c=LGlobal.canvas;b.clear(),a.trans.dimension?b.add(function(){c.beginPath(),c.save(),c.rect(0,0,a.width,a.child.getHeight()),c.rect(a.child.getWidth()-a.width,0,a.width,a.child.getHeight()),c.restore()}):b.add(function(){c.beginPath(),c.save(),c.rect(0,0,a.child.getWidth(),a.height),c.rect(0,a.child.getHeight()-a.height,a.child.getWidth(),a.height),c.restore()})},curtainUpdate:function(a){a.curtainUpdateRun(),a.trans.onUpdate&&a.trans.onUpdate(a.child)},curtain:function(){var e,b=this,c=.5*b.child.getWidth(),d=.5*b.child.getHeight();b.trans.dimension?d=0:c=0,b.width=0,b.height=0,e=new LGraphics,b.child.mask=e,b.maxSize,b.trans.direction==a.OUT&&(b.width=c,b.height=d,c=0,d=0),LTweenLite.to(b,b.trans.duration,{width:c,height:d,onComplete:b.curtainComplete,onUpdate:b.curtainUpdate,ease:b.trans.easing})},squeezeComplete:function(a){a.child.scaleX=a.scaleX,a.child.scaleY=a.scaleY,a.trans.onComplete&&a.trans.onComplete(a.child)},squeezeUpdate:function(a){a.child.scaleX=a.scaleX,a.child.scaleY=a.scaleY,a.trans.onUpdate&&a.trans.onUpdate(a.child)},squeeze:function(){var b=this,c=1,d=1;b.scaleX=0,b.scaleY=0,b.trans.dimension?b.scaleX=1:b.scaleY=1,b.trans.direction==a.OUT&&(c=b.scaleX,d=b.scaleY,b.scaleX=1,b.scaleY=1),b.child.scaleX=b.scaleX,b.child.scaleY=b.scaleY,LTweenLite.to(b,b.trans.duration,{scaleX:c,scaleY:d,onComplete:b.squeezeComplete,onUpdate:b.squeezeUpdate,ease:b.trans.easing})},zoomComplete:function(a){a.child.scaleX=a.scaleX,a.child.scaleY=a.scaleY,a.trans.onComplete&&a.trans.onComplete(a.child)},zoomUpdate:function(a){a.child.scaleX=a.scaleX,a.child.scaleY=a.scaleY,a.trans.onUpdate&&a.trans.onUpdate(a.child)},zoom:function(){var b=this,c=1,d=1;b.scaleX=0,b.scaleY=0,b.trans.direction==a.OUT&&(c=0,d=0,b.scaleX=1,b.scaleY=1),b.child.scaleX=b.scaleX,b.child.scaleY=b.scaleY,LTweenLite.to(b,b.trans.duration,{scaleX:c,scaleY:d,onComplete:b.zoomComplete,onUpdate:b.zoomUpdate,ease:b.trans.easing})},wipeComplete:function(b){b.trans.direction==a.OUT?b.child.mask.clear():b.wipeUpdateRun(),b.child.mask=null,b.trans.onComplete&&b.trans.onComplete(b.child)},wipeUpdateRun:function(){var a=this,b=a.child.mask;LGlobal.canvas,b.clear(),b.drawVertices(0,"#000000",[[a.leftTopX,a.leftTopY],[a.leftBottomX,a.leftBottomY],[a.rightBottomX,a.rightBottomY],[a.rightTopX,a.rightTopY]])},wipeUpdate:function(a){a.wipeUpdateRun(),a.trans.onUpdate&&a.trans.onUpdate(a.child)},wipe:function(){var m,n,o,p,q,r,s,t,u,b=this,c=b.child.getWidth(),d=b.child.getHeight(),e=b.leftTopX=0,f=b.leftTopY=0,g=b.leftBottomX=0,h=b.leftBottomY=d,i=b.rightTopX=c,j=b.rightTopY=0,k=b.rightBottomX=c,l=b.rightBottomY=d;switch(b.trans.startPoint){case 1:e=b.leftTopX=-c,g=b.leftBottomX=2*-c,b.rightTopX=0,i=2*c,b.rightBottomX=-c,k=c;break;case 2:f=b.leftTopY=-d,b.leftBottomY=0,h=d,j=b.rightTopY=-d,b.rightBottomY=0,l=d;break;case 3:b.leftTopX=c,e=-c,b.leftBottomX=2*c,g=0,i=b.rightTopX=2*c,k=b.rightBottomX=3*c;break;case 4:b.rightTopX=0,i=c,b.rightBottomX=0,k=c;break;case 6:b.leftTopX=c,e=0,b.leftBottomX=c,g=0;break;case 7:g=b.leftBottomX=-c,e=b.leftTopX=2*-c,b.rightBottomX=0,k=2*c,b.rightTopX=-c,i=c;break;case 8:h=b.leftBottomY=d,b.leftTopY=d,f=0,l=b.rightBottomY=d,b.rightTopY=d,j=0;break;case 9:b.leftBottomX=c,g=-c,b.leftTopX=2*c,e=0,k=b.rightBottomX=2*c,i=b.rightTopX=3*c;break;case 5:default:b.leftTopX=.5*c,b.leftTopY=.5*d,b.rightTopX=.5*c,b.rightTopY=.5*d,b.leftBottomX=.5*c,b.leftBottomY=.5*d,b.rightBottomX=.5*c,b.rightBottomY=.5*d,e=0,f=0,g=0,h=d,i=c,j=0,k=c,l=d}m=new LGraphics,b.child.mask=m,b.trans.direction==a.OUT&&(n=e,o=f,p=g,q=h,r=i,s=j,t=k,u=l,e=b.leftTopX,f=b.leftTopY,g=b.leftBottomX,h=b.leftBottomY,i=b.rightTopX,j=b.rightTopY,k=b.rightBottomX,l=b.rightBottomY,b.leftTopX=n,b.leftTopY=o,b.leftBottomX=p,b.leftBottomY=q,b.rightTopX=r,b.rightTopY=s,b.rightBottomX=t,b.rightBottomY=u),LTweenLite.to(b,b.trans.duration,{leftTopX:e,leftTopY:f,leftBottomX:g,leftBottomY:h,rightTopX:i,rightTopY:j,rightBottomX:k,rightBottomY:l,onComplete:b.wipeComplete,onUpdate:b.wipeUpdate,ease:b.trans.easing})},pixelDissolveComplete:function(b){b.trans.direction==a.OUT?b.child.mask.clear():b.pixelDissolveUpdateRun(),b.child.mask=null,b.trans.onComplete&&b.trans.onComplete(b.child)},pixelDissolveUpdateRun:function(){var d,a=this,b=a.child.mask,c=LGlobal.canvas;b.clear(),b.add(function(){c.beginPath(),c.save();for(var b=0;b<a.index;b++)d=a.list[b],c.rect(d[0]*a.w,d[1]*a.h,a.w,a.h);c.restore()})},pixelDissolveUpdate:function(a){a.pixelDissolveUpdateRun(),a.trans.onUpdate&&a.trans.onUpdate(a.child)},pixelDissolve:function(){var d,e,f,b=this,c=new LGraphics;for(b.child.mask=c,LGlobal.mg=c,b.w=b.child.getWidth()/b.trans.xSections,b.h=b.child.getHeight()/b.trans.ySections,b.list=[],d=0;d<b.trans.xSections;d++)for(e=0;e<b.trans.ySections;e++)b.list.push([d,e]);b.index=0,f=b.trans.xSections*b.trans.ySections,b.trans.direction==a.OUT&&(b.index=f,f=0),b.list=b.list.sort(function(){return Math.random()>.5}),b.pixelDissolveUpdateRun(),LTweenLite.to(b,b.trans.duration,{index:f,onComplete:b.pixelDissolveComplete,onUpdate:b.pixelDissolveUpdate,ease:b.trans.easing})}},a.IN="in",a.OUT="out",a.Blinds=1,a.Fade=2,a.Fly=3,a.Iris=4,a.Curtain=5,a.PixelDissolve=6,a.Squeeze=7,a.Wipe=8,a.Zoom=9,a}(),LIris=function(){function a(){}return a.SQUARE=0,a.CIRCLE=1,a}(),LTransitionManager=function(){function a(a){this.child=a}return a.prototype={startTransition:function(b){return a.start(this.child,b)}},a.start=function(a,b){var c=new LTransition(a,b);return c.startTransition(),c},a}(),LFlash=function(){function a(){}return a.SpriteSheetConvert=function(a){var c,d,b=[];for(d=0;d<a.length;d++)c=a[d],b.push({x:c.frame.x,sx:c.spriteSourceSize.x,y:c.frame.y,sy:c.spriteSourceSize.y,width:c.frame.w,height:c.frame.h});return b},a}(),LString={trim:function(a){return a.replace(/(^\s*)|(\s*$)|(\n)/g,"")},leftTrim:function(a){return a.replace(/(^\s*)|(^\n)/g,"")},rightTrim:function(a){return a.replace(/(\s*$)|(\n$)/g,"")},numberFormat:function(a,b){return(!b||1>b)&&(b=3),a=String(a).split("."),a[0]=a[0].replace(new RegExp("(\\d)(?=(\\d{"+b+"})+$)","ig"),"$1,"),a.join(".")},isString:function(a){var b=/^([a-z]|[A-Z])+$/;return b.exec(a)},isNumber:function(a){var b=/^\d+\.\d+$/;return b.exec(a)},isInt:function(a){var b=/^\d+$/;return b.exec(a)}},LMath=LString;
/**
* Based on http://www.emagix.net/academic/mscs-project/item/camera-sync-with-css3-and-webgl-threejs
* @author mrdoob / http://mrdoob.com/
*/
THREE.CSS3DObject = function ( element ) {
THREE.Object3D.call( this );
this.element = element;
this.element.style.position = 'absolute';
this.addEventListener( 'removed', function ( event ) {
if ( this.element.parentNode !== null ) {
this.element.parentNode.removeChild( this.element );
}
} );
};
THREE.CSS3DObject.prototype = Object.create( THREE.Object3D.prototype );
THREE.CSS3DObject.prototype.constructor = THREE.CSS3DObject;
THREE.CSS3DSprite = function ( element ) {
THREE.CSS3DObject.call( this, element );
};
THREE.CSS3DSprite.prototype = Object.create( THREE.CSS3DObject.prototype );
THREE.CSS3DSprite.prototype.constructor = THREE.CSS3DSprite;
//
THREE.CSS3DRenderer = function () {
console.log( 'THREE.CSS3DRenderer', THREE.REVISION );
var _width, _height;
var _widthHalf, _heightHalf;
var matrix = new THREE.Matrix4();

var cache = {
camera: { fov: 0, style: '' },
objects: {}
};
var domElement = document.createElement( 'div' );
domElement.style.overflow = 'hidden';
domElement.style.WebkitTransformStyle = 'preserve-3d';
domElement.style.MozTransformStyle = 'preserve-3d';
domElement.style.oTransformStyle = 'preserve-3d';
domElement.style.transformStyle = 'preserve-3d';
this.domElement = domElement;
var cameraElement = document.createElement( 'div' );
cameraElement.style.WebkitTransformStyle = 'preserve-3d';
cameraElement.style.MozTransformStyle = 'preserve-3d';
cameraElement.style.oTransformStyle = 'preserve-3d';
cameraElement.style.transformStyle = 'preserve-3d';
domElement.appendChild( cameraElement );
this.setClearColor = function () {
};
this.setSize = function ( width, height ) {
_width = width;
_height = height;
_widthHalf = _width / 2;
_heightHalf = _height / 2;
domElement.style.width = width + 'px';
domElement.style.height = height + 'px';
cameraElement.style.width = width + 'px';
cameraElement.style.height = height + 'px';
};
var epsilon = function ( value ) {
return Math.abs( value ) < 0.000001 ? 0 : value;
};
var getCameraCSSMatrix = function ( matrix ) {
var elements = matrix.elements;
return 'matrix3d(' +
epsilon( elements[ 0 ] ) + ',' +
epsilon( - elements[ 1 ] ) + ',' +
epsilon( elements[ 2 ] ) + ',' +
epsilon( elements[ 3 ] ) + ',' +
epsilon( elements[ 4 ] ) + ',' +
epsilon( - elements[ 5 ] ) + ',' +
epsilon( elements[ 6 ] ) + ',' +
epsilon( elements[ 7 ] ) + ',' +
epsilon( elements[ 8 ] ) + ',' +
epsilon( - elements[ 9 ] ) + ',' +
epsilon( elements[ 10 ] ) + ',' +
epsilon( elements[ 11 ] ) + ',' +
epsilon( elements[ 12 ] ) + ',' +
epsilon( - elements[ 13 ] ) + ',' +
epsilon( elements[ 14 ] ) + ',' +
epsilon( elements[ 15 ] ) +
')';
};
var getObjectCSSMatrix = function ( matrix ) {
var elements = matrix.elements;
return 'translate3d(-50%,-50%,0) matrix3d(' +
epsilon( elements[ 0 ] ) + ',' +
epsilon( elements[ 1 ] ) + ',' +
epsilon( elements[ 2 ] ) + ',' +
epsilon( elements[ 3 ] ) + ',' +
epsilon( - elements[ 4 ] ) + ',' +
epsilon( - elements[ 5 ] ) + ',' +
epsilon( - elements[ 6 ] ) + ',' +
epsilon( - elements[ 7 ] ) + ',' +
epsilon( elements[ 8 ] ) + ',' +
epsilon( elements[ 9 ] ) + ',' +
epsilon( elements[ 10 ] ) + ',' +
epsilon( elements[ 11 ] ) + ',' +
epsilon( elements[ 12 ] ) + ',' +
epsilon( elements[ 13 ] ) + ',' +
epsilon( elements[ 14 ] ) + ',' +
epsilon( elements[ 15 ] ) +
')';
};
var renderObject = function ( object, camera ) {
if ( object instanceof THREE.CSS3DObject ) {
var style;
if ( object instanceof THREE.CSS3DSprite ) {
// http://swiftcoder.wordpress.com/2008/11/25/constructing-a-billboard-matrix/
matrix.copy( camera.matrixWorldInverse );
matrix.transpose();
matrix.copyPosition( object.matrixWorld );
matrix.scale( object.scale );
matrix.elements[ 3 ] = 0;
matrix.elements[ 7 ] = 0;
matrix.elements[ 11 ] = 0;
matrix.elements[ 15 ] = 1;
style = getObjectCSSMatrix( matrix );
} else {
style = getObjectCSSMatrix( object.matrixWorld );
}
var element = object.element;
var cachedStyle = cache.objects[ object.id ];
if ( cachedStyle === undefined || cachedStyle !== style ) {
element.style.WebkitTransform = style;
element.style.MozTransform = style;
element.style.oTransform = style;
element.style.transform = style;
cache.objects[ object.id ] = style;
}
if ( element.parentNode !== cameraElement ) {
cameraElement.appendChild( element );
}
}
for ( var i = 0, l = object.children.length; i < l; i ++ ) {
renderObject( object.children[ i ], camera );
}
};
this.render = function ( scene, camera ) {
var fov = 0.5 / Math.tan( THREE.Math.degToRad( camera.fov * 0.5 ) ) * _height;
if ( cache.camera.fov !== fov ) {
domElement.style.WebkitPerspective = fov + "px";
domElement.style.MozPerspective = fov + "px";
domElement.style.oPerspective = fov + "px";
domElement.style.perspective = fov + "px";
cache.camera.fov = fov;
}
scene.updateMatrixWorld();
if ( camera.parent === undefined ) camera.updateMatrixWorld();
camera.matrixWorldInverse.getInverse( camera.matrixWorld );
var style = "translate3d(0,0," + fov + "px)" + getCameraCSSMatrix( camera.matrixWorldInverse ) +
" translate3d(" + _widthHalf + "px," + _heightHalf + "px, 0)";
if ( cache.camera.style !== style ) {
cameraElement.style.WebkitTransform = style;
cameraElement.style.MozTransform = style;
cameraElement.style.oTransform = style;
cameraElement.style.transform = style;

cache.camera.style = style;
}
renderObject( scene, camera );
};
};
/**
* @author mrdoob / http://mrdoob.com/
* @author supereggbert / http://www.paulbrunt.co.uk/
* @author julianwa / https://github.com/julianwa
*/
THREE.RenderableObject = function () {
this.id = 0;
this.object = null;
this.z = 0;
};
//
THREE.RenderableFace = function () {
this.id = 0;
this.v1 = new THREE.RenderableVertex();
this.v2 = new THREE.RenderableVertex();
this.v3 = new THREE.RenderableVertex();
this.normalModel = new THREE.Vector3();
this.vertexNormalsModel = [ new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3() ];
this.vertexNormalsLength = 0;
this.color = new THREE.Color();
this.material = null;
this.uvs = [ new THREE.Vector2(), new THREE.Vector2(), new THREE.Vector2() ];
this.z = 0;
};
//
THREE.RenderableVertex = function () {
this.position = new THREE.Vector3();
this.positionWorld = new THREE.Vector3();
this.positionScreen = new THREE.Vector4();
this.visible = true;
};
THREE.RenderableVertex.prototype.copy = function ( vertex ) {
this.positionWorld.copy( vertex.positionWorld );
this.positionScreen.copy( vertex.positionScreen );
};
//
THREE.RenderableLine = function () {
this.id = 0;
this.v1 = new THREE.RenderableVertex();
this.v2 = new THREE.RenderableVertex();
this.vertexColors = [ new THREE.Color(), new THREE.Color() ];
this.material = null;
this.z = 0;
};
//
THREE.RenderableSprite = function () {
this.id = 0;
this.object = null;
this.x = 0;
this.y = 0;
this.z = 0;
this.rotation = 0;
this.scale = new THREE.Vector2();
this.material = null;
};
//
THREE.Projector = function () {
var _object, _objectCount, _objectPool = [], _objectPoolLength = 0,
_vertex, _vertexCount, _vertexPool = [], _vertexPoolLength = 0,
_face, _faceCount, _facePool = [], _facePoolLength = 0,
_line, _lineCount, _linePool = [], _linePoolLength = 0,
_sprite, _spriteCount, _spritePool = [], _spritePoolLength = 0,
_renderData = { objects: [], lights: [], elements: [] },
_vector3 = new THREE.Vector3(),
_vector4 = new THREE.Vector4(),
_clipBox = new THREE.Box3( new THREE.Vector3( - 1, - 1, - 1 ), new THREE.Vector3( 1, 1, 1 ) ),
_boundingBox = new THREE.Box3(),
_points3 = new Array( 3 ),
_points4 = new Array( 4 ),
_viewMatrix = new THREE.Matrix4(),
_viewProjectionMatrix = new THREE.Matrix4(),
_modelMatrix,
_modelViewProjectionMatrix = new THREE.Matrix4(),
_normalMatrix = new THREE.Matrix3(),
_frustum = new THREE.Frustum(),
_clippedVertex1PositionScreen = new THREE.Vector4(),
_clippedVertex2PositionScreen = new THREE.Vector4();
//
this.projectVector = function ( vector, camera ) {
console.warn( 'THREE.Projector: .projectVector() is now vector.project().' );
vector.project( camera );
};
this.unprojectVector = function ( vector, camera ) {
console.warn( 'THREE.Projector: .unprojectVector() is now vector.unproject().' );
vector.unproject( camera );
};
this.pickingRay = function ( vector, camera ) {
console.error( 'THREE.Projector: .pickingRay() is now raycaster.setFromCamera().' );
};
//
var RenderList = function () {
var normals = [];
var uvs = [];
var object = null;
var material = null;
var normalMatrix = new THREE.Matrix3();
var setObject = function ( value ) {
object = value;
material = object.material;
normalMatrix.getNormalMatrix( object.matrixWorld );
normals.length = 0;
uvs.length = 0;
};
var projectVertex = function ( vertex ) {
var position = vertex.position;
var positionWorld = vertex.positionWorld;
var positionScreen = vertex.positionScreen;
positionWorld.copy( position ).applyMatrix4( _modelMatrix );
positionScreen.copy( positionWorld ).applyMatrix4( _viewProjectionMatrix );
var invW = 1 / positionScreen.w;
positionScreen.x *= invW;
positionScreen.y *= invW;
positionScreen.z *= invW;
vertex.visible = positionScreen.x >= - 1 && positionScreen.x <= 1 &&
positionScreen.y >= - 1 && positionScreen.y <= 1 &&
positionScreen.z >= - 1 && positionScreen.z <= 1;
};
var pushVertex = function ( x, y, z ) {
_vertex = getNextVertexInPool();
_vertex.position.set( x, y, z );
projectVertex( _vertex );
};
var pushNormal = function ( x, y, z ) {
normals.push( x, y, z );
};
var pushUv = function ( x, y ) {
uvs.push( x, y );
};
var checkTriangleVisibility = function ( v1, v2, v3 ) {
if ( v1.visible === true || v2.visible === true || v3.visible === true ) return true;
_points3[ 0 ] = v1.positionScreen;
_points3[ 1 ] = v2.positionScreen;
_points3[ 2 ] = v3.positionScreen;
return _clipBox.isIntersectionBox( _boundingBox.setFromPoints( _points3 ) );
};
var checkBackfaceCulling = function ( v1, v2, v3 ) {
return ( ( v3.positionScreen.x - v1.positionScreen.x ) *
( v2.positionScreen.y - v1.positionScreen.y ) -
( v3.positionScreen.y - v1.positionScreen.y ) *
( v2.positionScreen.x - v1.positionScreen.x ) ) < 0;
};
var pushLine = function ( a, b ) {
var v1 = _vertexPool[ a ];
var v2 = _vertexPool[ b ];
_line = getNextLineInPool();
_line.id = object.id;
_line.v1.copy( v1 );
_line.v2.copy( v2 );
_line.z = ( v1.positionScreen.z + v2.positionScreen.z ) / 2;
_line.material = object.material;
_renderData.elements.push( _line );
};
var pushTriangle = function ( a, b, c ) {
var v1 = _vertexPool[ a ];
var v2 = _vertexPool[ b ];
var v3 = _vertexPool[ c ];
if ( checkTriangleVisibility( v1, v2, v3 ) === false ) return;
if ( material.side === THREE.DoubleSide || checkBackfaceCulling( v1, v2, v3 ) === true ) {
_face = getNextFaceInPool();
_face.id = object.id;
_face.v1.copy( v1 );
_face.v2.copy( v2 );
_face.v3.copy( v3 );
_face.z = ( v1.positionScreen.z + v2.positionScreen.z + v3.positionScreen.z ) / 3;
for ( var i = 0; i < 3; i ++ ) {
var offset = arguments[ i ] * 3;
var normal = _face.vertexNormalsModel[ i ];
normal.set( normals[ offset ], normals[ offset + 1 ], normals[ offset + 2 ] );
normal.applyMatrix3( normalMatrix ).normalize();
var offset2 = arguments[ i ] * 2;
var uv = _face.uvs[ i ];
uv.set( uvs[ offset2 ], uvs[ offset2 + 1 ] );
}
_face.vertexNormalsLength = 3;
_face.material = object.material;
_renderData.elements.push( _face );
}
};
return {
setObject: setObject,
projectVertex: projectVertex,
checkTriangleVisibility: checkTriangleVisibility,
checkBackfaceCulling: checkBackfaceCulling,
pushVertex: pushVertex,
pushNormal: pushNormal,
pushUv: pushUv,
pushLine: pushLine,
pushTriangle: pushTriangle
}
};
var renderList = new RenderList();
this.projectScene = function ( scene, camera, sortObjects, sortElements ) {
_faceCount = 0;
_lineCount = 0;
_spriteCount = 0;
_renderData.elements.length = 0;
if ( scene.autoUpdate === true ) scene.updateMatrixWorld();
if ( camera.parent === undefined ) camera.updateMatrixWorld();
_viewMatrix.copy( camera.matrixWorldInverse.getInverse( camera.matrixWorld ) );
_viewProjectionMatrix.multiplyMatrices( camera.projectionMatrix, _viewMatrix );
_frustum.setFromMatrix( _viewProjectionMatrix );
//
_objectCount = 0;
_renderData.objects.length = 0;
_renderData.lights.length = 0;
scene.traverseVisible( function ( object ) {
if ( object instanceof THREE.Light ) {
_renderData.lights.push( object );
} else if ( object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Sprite ) {
if ( object.material.visible === false ) return;
if ( object.frustumCulled === false || _frustum.intersectsObject( object ) === true ) {
_object = getNextObjectInPool();
_object.id = object.id;
_object.object = object;
_vector3.setFromMatrixPosition( object.matrixWorld );
_vector3.applyProjection( _viewProjectionMatrix );
_object.z = _vector3.z;
_renderData.objects.push( _object );
}
}
} );
if ( sortObjects === true ) {
_renderData.objects.sort( painterSort );
}
//
for ( var o = 0, ol = _renderData.objects.length; o < ol; o ++ ) {
var object = _renderData.objects[ o ].object;
var geometry = object.geometry;
renderList.setObject( object );
_modelMatrix = object.matrixWorld;
_vertexCount = 0;
if ( object instanceof THREE.Mesh ) {
if ( geometry instanceof THREE.BufferGeometry ) {
var attributes = geometry.attributes;
var offsets = geometry.offsets;
if ( attributes.position === undefined ) continue;
var positions = attributes.position.array;
for ( var i = 0, l = positions.length; i < l; i += 3 ) {
renderList.pushVertex( positions[ i ], positions[ i + 1 ], positions[ i + 2 ] );
}
if ( attributes.normal !== undefined ) {
var normals = attributes.normal.array;
for ( var i = 0, l = normals.length; i < l; i += 3 ) {
renderList.pushNormal( normals[ i ], normals[ i + 1 ], normals[ i + 2 ] );
}
}
if ( attributes.uv !== undefined ) {
var uvs = attributes.uv.array;
for ( var i = 0, l = uvs.length; i < l; i += 2 ) {
renderList.pushUv( uvs[ i ], uvs[ i + 1 ] );
}
}
if ( attributes.index !== undefined ) {
var indices = attributes.index.array;
if ( offsets.length > 0 ) {
for ( var o = 0; o < offsets.length; o ++ ) {
var offset = offsets[ o ];
var index = offset.index;
for ( var i = offset.start, l = offset.start + offset.count; i < l; i += 3 ) {
renderList.pushTriangle( indices[ i ] + index, indices[ i + 1 ] + index, indices[ i + 2 ] + index );
}
}
} else {
for ( var i = 0, l = indices.length; i < l; i += 3 ) {
renderList.pushTriangle( indices[ i ], indices[ i + 1 ], indices[ i + 2 ] );
}
}
} else {
for ( var i = 0, l = positions.length / 3; i < l; i += 3 ) {
renderList.pushTriangle( i, i + 1, i + 2 );
}
}
} else if ( geometry instanceof THREE.Geometry ) {
var vertices = geometry.vertices;
var faces = geometry.faces;
var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
_normalMatrix.getNormalMatrix( _modelMatrix );
var material = object.material;

var isFaceMaterial = material instanceof THREE.MeshFaceMaterial;
var objectMaterials = isFaceMaterial === true ? object.material : null;
for ( var v = 0, vl = vertices.length; v < vl; v ++ ) {
var vertex = vertices[ v ];
_vector3.copy( vertex );
if ( material.morphTargets === true ) {
var morphTargets = geometry.morphTargets;
var morphInfluences = object.morphTargetInfluences;
for ( var t = 0, tl = morphTargets.length; t < tl; t ++ ) {
var influence = morphInfluences[ t ];
if ( influence === 0 ) continue;
var target = morphTargets[ t ];
var targetVertex = target.vertices[ v ];
_vector3.x += ( targetVertex.x - vertex.x ) * influence;
_vector3.y += ( targetVertex.y - vertex.y ) * influence;
_vector3.z += ( targetVertex.z - vertex.z ) * influence;
}
}
renderList.pushVertex( _vector3.x, _vector3.y, _vector3.z );
}
for ( var f = 0, fl = faces.length; f < fl; f ++ ) {
var face = faces[ f ];
var material = isFaceMaterial === true
? objectMaterials.materials[ face.materialIndex ]
: object.material;
if ( material === undefined ) continue;
var side = material.side;
var v1 = _vertexPool[ face.a ];
var v2 = _vertexPool[ face.b ];
var v3 = _vertexPool[ face.c ];
if ( renderList.checkTriangleVisibility( v1, v2, v3 ) === false ) continue;
var visible = renderList.checkBackfaceCulling( v1, v2, v3 );
if ( side !== THREE.DoubleSide ) {
if ( side === THREE.FrontSide && visible === false ) continue;
if ( side === THREE.BackSide && visible === true ) continue;
}
_face = getNextFaceInPool();
_face.id = object.id;
_face.v1.copy( v1 );
_face.v2.copy( v2 );
_face.v3.copy( v3 );
_face.normalModel.copy( face.normal );
if ( visible === false && ( side === THREE.BackSide || side === THREE.DoubleSide ) ) {
_face.normalModel.negate();
}
_face.normalModel.applyMatrix3( _normalMatrix ).normalize();
var faceVertexNormals = face.vertexNormals;
for ( var n = 0, nl = Math.min( faceVertexNormals.length, 3 ); n < nl; n ++ ) {
var normalModel = _face.vertexNormalsModel[ n ];
normalModel.copy( faceVertexNormals[ n ] );
if ( visible === false && ( side === THREE.BackSide || side === THREE.DoubleSide ) ) {
normalModel.negate();
}
normalModel.applyMatrix3( _normalMatrix ).normalize();
}
_face.vertexNormalsLength = faceVertexNormals.length;
var vertexUvs = faceVertexUvs[ f ];
if ( vertexUvs !== undefined ) {
for ( var u = 0; u < 3; u ++ ) {
_face.uvs[ u ].copy( vertexUvs[ u ] );
}
}
_face.color = face.color;
_face.material = material;
_face.z = ( v1.positionScreen.z + v2.positionScreen.z + v3.positionScreen.z ) / 3;
_renderData.elements.push( _face );
}
}
} else if ( object instanceof THREE.Line ) {
if ( geometry instanceof THREE.BufferGeometry ) {
var attributes = geometry.attributes;
if ( attributes.position !== undefined ) {
var positions = attributes.position.array;
for ( var i = 0, l = positions.length; i < l; i += 3 ) {
renderList.pushVertex( positions[ i ], positions[ i + 1 ], positions[ i + 2 ] );
}
if ( attributes.index !== undefined ) {
var indices = attributes.index.array;
for ( var i = 0, l = indices.length; i < l; i += 2 ) {
renderList.pushLine( indices[ i ], indices[ i + 1 ] );
}
} else {
var step = object.mode === THREE.LinePieces ? 2 : 1;
for ( var i = 0, l = ( positions.length / 3 ) - 1; i < l; i += step ) {
renderList.pushLine( i, i + 1 );
}
}
}
} else if ( geometry instanceof THREE.Geometry ) {
_modelViewProjectionMatrix.multiplyMatrices( _viewProjectionMatrix, _modelMatrix );
var vertices = object.geometry.vertices;
if ( vertices.length === 0 ) continue;
v1 = getNextVertexInPool();
v1.positionScreen.copy( vertices[ 0 ] ).applyMatrix4( _modelViewProjectionMatrix );
// Handle LineStrip and LinePieces
var step = object.mode === THREE.LinePieces ? 2 : 1;
for ( var v = 1, vl = vertices.length; v < vl; v ++ ) {
v1 = getNextVertexInPool();
v1.positionScreen.copy( vertices[ v ] ).applyMatrix4( _modelViewProjectionMatrix );
if ( ( v + 1 ) % step > 0 ) continue;
v2 = _vertexPool[ _vertexCount - 2 ];
_clippedVertex1PositionScreen.copy( v1.positionScreen );
_clippedVertex2PositionScreen.copy( v2.positionScreen );
if ( clipLine( _clippedVertex1PositionScreen, _clippedVertex2PositionScreen ) === true ) {
// Perform the perspective divide
_clippedVertex1PositionScreen.multiplyScalar( 1 / _clippedVertex1PositionScreen.w );
_clippedVertex2PositionScreen.multiplyScalar( 1 / _clippedVertex2PositionScreen.w );
_line = getNextLineInPool();
_line.id = object.id;
_line.v1.positionScreen.copy( _clippedVertex1PositionScreen );
_line.v2.positionScreen.copy( _clippedVertex2PositionScreen );
_line.z = Math.max( _clippedVertex1PositionScreen.z, _clippedVertex2PositionScreen.z );
_line.material = object.material;
if ( object.material.vertexColors === THREE.VertexColors ) {
_line.vertexColors[ 0 ].copy( object.geometry.colors[ v ] );
_line.vertexColors[ 1 ].copy( object.geometry.colors[ v - 1 ] );
}
_renderData.elements.push( _line );
}
}
}
} else if ( object instanceof THREE.Sprite ) {
_vector4.set( _modelMatrix.elements[ 12 ], _modelMatrix.elements[ 13 ], _modelMatrix.elements[ 14 ], 1 );
_vector4.applyMatrix4( _viewProjectionMatrix );
var invW = 1 / _vector4.w;
_vector4.z *= invW;
if ( _vector4.z >= - 1 && _vector4.z <= 1 ) {
_sprite = getNextSpriteInPool();
_sprite.id = object.id;
_sprite.x = _vector4.x * invW;
_sprite.y = _vector4.y * invW;
_sprite.z = _vector4.z;
_sprite.object = object;
_sprite.rotation = object.rotation;
_sprite.scale.x = object.scale.x * Math.abs( _sprite.x - ( _vector4.x + camera.projectionMatrix.elements[ 0 ] ) / ( _vector4.w + camera.projectionMatrix.elements[ 12 ] ) );
_sprite.scale.y = object.scale.y * Math.abs( _sprite.y - ( _vector4.y + camera.projectionMatrix.elements[ 5 ] ) / ( _vector4.w + camera.projectionMatrix.elements[ 13 ] ) );
_sprite.material = object.material;
_renderData.elements.push( _sprite );
}
}
}
if ( sortElements === true ) {
_renderData.elements.sort( painterSort );
}
return _renderData;
};
// Pools
function getNextObjectInPool() {
if ( _objectCount === _objectPoolLength ) {
var object = new THREE.RenderableObject();
_objectPool.push( object );
_objectPoolLength ++;
_objectCount ++;
return object;
}
return _objectPool[ _objectCount ++ ];
}
function getNextVertexInPool() {
if ( _vertexCount === _vertexPoolLength ) {
var vertex = new THREE.RenderableVertex();
_vertexPool.push( vertex );
_vertexPoolLength ++;
_vertexCount ++;
return vertex;
}
return _vertexPool[ _vertexCount ++ ];
}
function getNextFaceInPool() {
if ( _faceCount === _facePoolLength ) {
var face = new THREE.RenderableFace();
_facePool.push( face );
_facePoolLength ++;
_faceCount ++;
return face;
}
return _facePool[ _faceCount ++ ];
}
function getNextLineInPool() {
if ( _lineCount === _linePoolLength ) {
var line = new THREE.RenderableLine();
_linePool.push( line );
_linePoolLength ++;
_lineCount ++
return line;
}
return _linePool[ _lineCount ++ ];
}
function getNextSpriteInPool() {
if ( _spriteCount === _spritePoolLength ) {
var sprite = new THREE.RenderableSprite();
_spritePool.push( sprite );
_spritePoolLength ++;
_spriteCount ++
return sprite;
}
return _spritePool[ _spriteCount ++ ];
}
//
function painterSort( a, b ) {
if ( a.z !== b.z ) {
return b.z - a.z;
} else if ( a.id !== b.id ) {
return a.id - b.id;
} else {
return 0;
}
}
function clipLine( s1, s2 ) {
var alpha1 = 0, alpha2 = 1,
// Calculate the boundary coordinate of each vertex for the near and far clip planes,
// Z = -1 and Z = +1, respectively.
bc1near =  s1.z + s1.w,
bc2near =  s2.z + s2.w,
bc1far =  - s1.z + s1.w,
bc2far =  - s2.z + s2.w;
if ( bc1near >= 0 && bc2near >= 0 && bc1far >= 0 && bc2far >= 0 ) {
// Both vertices lie entirely within all clip planes.
return true;
} else if ( ( bc1near < 0 && bc2near < 0 ) || ( bc1far < 0 && bc2far < 0 ) ) {
// Both vertices lie entirely outside one of the clip planes.
return false;
} else {
// The line segment spans at least one clip plane.
if ( bc1near < 0 ) {
// v1 lies outside the near plane, v2 inside
alpha1 = Math.max( alpha1, bc1near / ( bc1near - bc2near ) );
} else if ( bc2near < 0 ) {
// v2 lies outside the near plane, v1 inside
alpha2 = Math.min( alpha2, bc1near / ( bc1near - bc2near ) );
}
if ( bc1far < 0 ) {
// v1 lies outside the far plane, v2 inside
alpha1 = Math.max( alpha1, bc1far / ( bc1far - bc2far ) );
} else if ( bc2far < 0 ) {
// v2 lies outside the far plane, v2 inside
alpha2 = Math.min( alpha2, bc1far / ( bc1far - bc2far ) );
}
if ( alpha2 < alpha1 ) {
// The line segment spans two boundaries, but is outside both of them.
// (This can't happen when we're only clipping against just near/far but good
//  to leave the check here for future usage if other clip planes are added.)
return false;
} else {
// Update the s1 and s2 vertices to match the clipped line segment.
s1.lerp( s2, alpha1 );
s2.lerp( s1, 1 - alpha2 );
return true;
}
}
}
};
/**
* Created by sunjian on 2015/6/10.
*/
//对象基类.封装通用方法,其他对象可继承此类
Sun.SObject = function () {
this._listener = {};
//添加自定义事件
this.addEventListener = function (type, fn) {
//console.warn("已监听事件:",type);
if (typeof this._listener[type] === "undefined") {
this._listener[type] = [];
}
if (typeof fn === "function") {
this._listener[type].push(fn);
}
//console.warn(this._listener);
};
//移除自定义事件
this.removeEventListener = function (type, fn) {
var arrayEvent = this._listener[type];
if (typeof type === "string" && arrayEvent instanceof Array) {
if (typeof fn === "function") {
for (var i = 0; i < arrayEvent.length; i++) {
if (arrayEvent[i] == fn) {
//console.warn("remove:",type);
this._listener[type].splice(i, 1);
break;
}
}
}
}
};
//移除无用事件
this.removeNullEvent = function () {
var arrayEvent = this._listener[Sun.SceneEvent.SceneCompleteEvent];
if (arrayEvent != undefined && arrayEvent != null) {
arrayEvent.splice(0, arrayEvent.length);
arrayEvent.length = 0;
this._listener[Sun.SceneEvent.SceneCompleteEvent] = undefined;
}
};
//派发事件
this.dispatchEventListener = function (type, params) {
if (params == undefined) {
params = null;
}
var arrayEvent = this._listener[type];
if (arrayEvent instanceof Array) {
for (var i = 0; i < arrayEvent.length; i++) {
if (typeof arrayEvent[i] === "function" && arrayEvent[i] != undefined) {
//console.warn("dispatch:",type,Math.random(),arrayEvent[i]);
arrayEvent[i](params);
}
}
}
};
//获取坐标,元素的position必须为absoulte,安卓设备不可用.
this.getEventPosition = function (ev) {
var x, y;
var ver = this.checkVersion();
if (ver == "android") {
var touch = ev.touches[0];
var a = touch.clientX - ev.currentTarget.parentNode.getBoundingClientRect().left;
var b = touch.clientY - ev.currentTarget.parentNode.getBoundingClientRect().top;
x = a;
y = b;
} else if (ver == "iphone" || ver == "ipad" || ver == "pc") {
if (ev.layerX || ev.layerX == 0) {
x = ev.layerX;
y = ev.layerY;
} else if
(ev.offsetX || ev.offsetX == 0) { //
x = ev.offsetX;
y = ev.offsetY;
}
} else {
alert("终端判断异常");
}
return { x: x, y: y };
}
//终端操作系统类型
this.browser = {
versions: function () {
var u = navigator.userAgent, app = navigator.appVersion;
return {//移动终端浏览器版本信息
trident: u.indexOf('Trident') > -1, //IE内核
presto: u.indexOf('Presto') > -1, //opera内核
webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
iPad: u.indexOf('iPad') > -1, //是否iPad
webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
};
} (),
language: (navigator.browserLanguage || navigator.language).toLowerCase()
};
this.checkVersion = function () {
var version = navigator.userAgent.toLowerCase();
if (version.indexOf("ipad") != -1) {
return "ipad";
}
if (version.indexOf("iphone") != -1) {
return "iphone";
}
if (version.indexOf("android") != -1) {
return "android";
} else if (version.indexOf("linux") != -1) {
return "android";
}
return "pc";
};
//获取两者之间的随机数
this.getRandom = function (start, end) {
var randnum = Math.round(Math.random() * (end - start)) + start;
return randnum;
};
//获取arguments.callee的方法名称
this.getFName = function (fn) {
return (/^[\s\(]*function(?:\s+([\w$_][\w\d$_]*))?\(/).exec(fn.toString())[1] || '';
};
this.getWidth = function (div) {
return div.style.width || div.clientWidth || div.offsetWidth || div.scrollWidth;
};
//victor added
this.registClick = function ( div, fun,flag) {
var clickEventName = this.checkVersion() == "pc" ? "click" : "touchstart";
window.addEvent(div, clickEventName, fun, flag);
};
//获取3D箭头上面的方向文本
this.getDirectionStr = function (angle) {
var str = null;
if (angle >= 337.5 || angle < 22.5) {
str = "东";
} else if (angle >= 22.5 && angle < 67.5) {
str = "东南";
} else if (angle >= 67.5 && angle < 112.5) {
str = "南"
} else if (angle >= 112.5 && angle < 157.5) {
str = "西南";
} else if (angle >= 157.5 && angle < 202.5) {
str = "西"
} else if (angle >= 202.5 && angle < 247.5) {
str = "西北"
} else if (angle >= 247.5 && angle < 292.5) {
str = "北"
} else {
str = "东北";
}
return str;
}
};
window.requestAFrame = (function () {
return window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
function (callback) {
return window.setTimeout(callback, 60); // shoot for 60 fps
};
})();
window.cancelAFrame = (function () {
return window.cancelAnimationFrame ||
window.webkitCancelAnimationFrame ||
window.mozCancelAnimationFrame ||
window.oCancelAnimationFrame ||
function (id) {
window.clearTimeout(id);
};
})();
window.addEvent=function(elm,evType,fn,useCapture){
if (elm.addEventListener) {
elm.addEventListener(evType, fn, useCapture);//DOM2.0
return true;
}
else if (elm.attachEvent) {
var r = elm.attachEvent("on" + evType, fn);//IE5+
return r;
}
else {
elm['on' + evType] = fn;//DOM 0
}
};
window.removeEvent=function(elm,evType,fn,useCapture){
if (elm.removeEventListener)
elm.removeEventListener( evType, fn, useCapture );
else if (elm.detachEvent) {
elm.detachEvent(  "on" +evType, elm["e"+evType+fn] );
}else{
elm["e"+evType+fn] = null;
}
};
/**
* @author alteredq / http://alteredqualia.com/
* @author mr.doob / http://mrdoob.com/
*/
var Detector = {
canvas: !! window.CanvasRenderingContext2D,
webgl: (
function () {
try {
var canvas = document.createElement( 'canvas' );
return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );
//return false;
} catch ( e ) {
return false;
}
}
)(),
workers: !! window.Worker,
fileapi: window.File && window.FileReader && window.FileList && window.Blob,
getWebGLErrorMessage: function () {
var element = document.createElement( 'div' );
element.id = 'webgl-error-message';
element.style.fontFamily = 'monospace';
element.style.fontSize = '13px';
element.style.fontWeight = 'normal';
element.style.textAlign = 'center';
element.style.background = '#fff';
element.style.color = '#000';
element.style.padding = '1.5em';
element.style.width = '400px';
element.style.margin = '5em auto 0';
if ( ! this.webgl ) {
element.innerHTML = window.WebGLRenderingContext ? [
'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
].join( '\n' ) : [
'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
].join( '\n' );
}
return element;
},
addGetWebGLMessage: function ( parameters ) {
var parent, id, element;
parameters = parameters || {};
parent = parameters.parent !== undefined ? parameters.parent : document.body;
id = parameters.id !== undefined ? parameters.id : 'oldie';
element = Detector.getWebGLErrorMessage();
element.id = id;
parent.appendChild( element );
}
};
// browserify support
if ( typeof module === 'object' ) {
module.exports = Detector;
}
/**
* Created by sunjian on 2015/7/10.
*/
//常量定义
Sun.Constant=function(){
};
Sun.Constant.downPanoInfoUrl="";        //panoinfo
Sun.Constant.downRoadFlat2DUrl="";      //脚印url
Sun.Constant.downPoi2DUrl="";           //poi url
Sun.Constant.downIphoneImgUrl="";       //手机图片
Sun.Constant.setSceneImageSize=1024;        //默认加载N模式
Sun.Constant.roadImgUrl=null;   //自定义设置脚印图片
Sun.Constant.maxTilt=90;        //最大t值
Sun.Constant.minTilt=-90;       //最小t值
Sun.Constant.resourceUrl="";        //资源路径
Sun.Constant.isMouseConver=false;    //拖动方向
//替代字符串
Sun.Constant.disposeUrl=function(url,args){
for(var i=0;i<args.length;i++){
url=this.replaceA(url,"{"+(i+1)+"}",args[i]);
}
return url;
};
Sun.Constant.replaceA=function(src,from_ch,to_ch,rp_all){
if(rp_all==undefined){
rp_all=false;
}
while(src.indexOf(from_ch)!=-1){
src=src.replace(from_ch,to_ch);
if(!rp_all) return src;
}
return src;
};
//获取guid
Sun.Constant.guid=function(){
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
return v.toString(16);
});
};
//处理url.是否域域.如果跨.加上代理
Sun.Constant.getLocationUrl=function(url,ischeck){
if(url.indexOf("http")!=0){
return url;
}
if(ischeck==undefined){
ischeck=false;
}
if(ischeck==true){
if(Detector.webgl==false){
return url;
}
}
var serverIP = location.hostname;
var serverPort = location.port;
if (serverPort == "") {
serverPort = "80";
}
var addobj = Sun.Constant.getAddress(url);
if (addobj.ip == "" && addobj.port == "") {
//不使用代理
} else {
if (addobj.port == "") {
addobj.port = "80";
}
if (serverIP != addobj.ip || serverPort != addobj.port) {
url="script/server/HttpProxy.aspx?url="+url;
}else{
//不使用代理
}
}
return url;
};
Sun.Constant.getAddress = function (str) {
var flag1 = "//", flag2 = ":", flag3 = "/", flag4 = ".";
var flag1Index = str.indexOf(flag1);
if (flag1Index >= 0) {
flag1Index += flag1.length;
str = str.substring(flag1Index);
}
var flag2Index = str.indexOf(flag2);
var flag3Index = str.indexOf(flag3);
if (flag3Index < 0) {
flag3Index = str.length;
}
if (flag2Index < 0) {
flag2Index = flag3Index;
}
var ipStr = str.substring(0, flag2Index);
if (ipStr.indexOf(flag4) >= 0) {
var portStr = "";
if (flag2Index < flag3Index) {
portStr = str.substring(flag2Index + 1, flag3Index);
}
}
else {
ipStr = "";
portStr = "";
}
return { ip: ipStr, port: portStr };
};
Sun.Constant.registerClick = function (obj, div, fun) {
if (obj.checkVersion() == "pc") {
window.addEvent(div, "click", fun);
} else {
window.addEvent(div, "touchstart", fun);
}
};
/**
* Created by sunjian on 2015/7/13.
*/
//打开重力感应
Sun.DeviceMontion=function(pscene){
Sun.SObject.call(this);
this.pscene=pscene;
this.isKey=false;
this.e = [];
this.c = [];
this.g = [];
this.h = 0;
this.a = 0;
this.b = 0;
this.j = 0;
this.i = 0;
this.e = [];
this.c = [];
this.g = [];
this.addEvent();
};
Sun.DeviceMontion.prototype=Object.create(Sun.SObject.prototype);
Sun.DeviceMontion.prototype.constructor=Sun.DeviceMontion;
Sun.DeviceMontion.prototype.addEvent=function(){
var me=this;
window.addEvent(this.pscene.divdom,"touchmove",function(e){
me.isKey=false;
},false);
window.addEvent(window,"deviceorientation",function(e){
me.orientationHandler(e);
},false);
};
//打开重力感应
Sun.DeviceMontion.prototype.openDeviceor=function(){
if(this.isKey==true){
this.isKey=false;
Sun.Alert.show("已关闭重力感应");
}else{
this.isKey=true;
Sun.Alert.show("已开户重力感应");
}
};
//旋转屏幕
Sun.DeviceMontion.prototype.orientationHandler=function(l){
if (this.isKey == true) {
this.h = parseFloat(l.beta);
this.a = parseFloat(l.gamma);
this.b = parseFloat(l.alpha);
if (this.h > 140) {
return;
}
if (this.h < -140) {
return;
}
if (this.a > 140) {
return;
}
if (this.a < -140) {
return;
}
this.d(this.h, this.a, this.b);
} else {
this.j = 0;
this.i = 0;
}
};
Sun.DeviceMontion.prototype.d=function(p,l,o){
this.e.push(p);
this.c.push(l);
this.g.push(o);
if (this.checkVersion() == "android") {
var version = navigator.userAgent.toLowerCase();
if (version.indexOf("chrome") != -1) {
if (this.e.length == 2) {
p = this.f(this.e);
l = this.f(this.c);
o = this.f(this.g);
this.e = [];
this.c = [];
this.g = [];
} else {
return;
}
} else {
if (this.e.length ==10) {
p = this.f(this.e);
l = this.f(this.c);
o = this.f(this.g);
this.e = [];
this.c = [];
this.g = [];
} else {
return;
}
}
}
if (window.orientation == 90 || window.orientation == -90) {
if (this.j == 0 && this.i == 0) {
this.j = o;
this.i = l;
}
var m = this.j - o;
var n = this.i - l;
if (window.orientation == -90) {
n = (l - this.i);
}
this.updatePanTiltAngle(m, n);
this.j = o;
this.i = l;
} else {
if (this.j == 0 && this.i == 0) {
this.j = o;
this.i = p;
}
var m,n;
if (p < 80) {
m = this.j - o;
} else {
m = 0;
}
n = p - this.i;
this.updatePanTiltAngle(m,n);
this.j = o;
this.i = p;
}
};
Sun.DeviceMontion.prototype.updatePanTiltAngle=function(b, a) {
this.pscene.pan+=b;
this.pscene.tilt+=a;
};
Sun.DeviceMontion.prototype.f=function(l) {
var m = 0;
for (var n = 0; n < l.length; n++) {
m += l[n];
}
return m / l.length;
};
/**
* Created by sunjian on 2015/6/18.
*/
//自定义提示框
Sun.Alert=function(divdom){
};
Sun.Alert.div=null;
Sun.Alert.txt=null;
Sun.Alert.isRun=false;      //动是否是运行中 true-是 false-否
Sun.Alert.init=function(dom){
Sun.Alert.div=document.createElement("div");
/*Sun.Alert.div.style.width="200px";
Sun.Alert.div.style.height="35px";
Sun.Alert.div.style.backgroundColor="rgba(0,0,0,0.3)";
Sun.Alert.div.style.display="table";
Sun.Alert.div.style.position="absolute";
Sun.Alert.div.style.top="0px";
Sun.Alert.div.style.left="0px";*/
Sun.Alert.div.style.cssText="width:200px;height:35px;background-Color:rgba(0,0,0,0.3);display:table;position:absolute;top:0px;left:0px;";
/*Sun.Alert.div.style.textAlign="center";
Sun.Alert.div.style.opacity="0";
Sun.Alert.div.style.border="1px solid white";
Sun.Alert.div.style.borderRadius="5px";
Sun.Alert.div.style.boxShadow="0px 0px 15px 5px #FFFFFF";*/
Sun.Alert.div.style.cssText+="text-Align:center;opacity:0;border:1px solid white;border-Radius:5px;box-Shadow:0px 0px 15px 5px #FFFFFF;";
var ts="opacity 0.5s ease-in-out";
Sun.Alert.div.style.webkitTransition=ts;
Sun.Alert.div.style.mozTransition=ts;
Sun.Alert.div.style.oTransition=ts;
Sun.Alert.div.style.transition=ts;
Sun.Alert.div.style.pointerEvents="none";
var txtcon=document.createElement("div");
txtcon.style.verticalAlign="middle";
txtcon.style.display="table-cell";
txtcon.style.webkitUserSelect="none";
txtcon.style.mozUserSelect="none";
txtcon.style.msUserSelect="none";
txtcon.style.khtmlUserSelect="none";
txtcon.style.userSelect="none";
Sun.Alert.txt=document.createElement("label");
Sun.Alert.txt.style.fontSize="17px";
Sun.Alert.txt.style.color="#ffffff";
Sun.Alert.txt.style.fontWeight="bold";
Sun.Alert.txt.innerHTML="Loading...";
Sun.Alert.txt.style.pointerEvents="none";
txtcon.appendChild(Sun.Alert.txt);
Sun.Alert.div.appendChild(txtcon);
dom.appendChild(Sun.Alert.div);
window.addEvent(Sun.Alert.div,"webkitTransitionEnd",Sun.Alert.hide,false);
window.addEvent(Sun.Alert.div,"mozTransitionEnd",Sun.Alert.hide,false);
window.addEvent(Sun.Alert.div,"oTransitionEnd",Sun.Alert.hide,false);
window.addEvent(Sun.Alert.div,"transitionend",Sun.Alert.hide,false);
window.addEvent(Sun.Alert.div,"mousedown",function(e){
e.stopPropagation();
},false);
window.addEvent(Sun.Alert.div,"touchstart",function(e){
e.stopPropagation();
},false);
window.addEvent(window,"resize",resizeHand,false);
resizeHand();
function resizeHand(){
var tox=(dom.offsetWidth*0.5-Sun.Alert.div.offsetWidth*0.5)+"px";
var toy=(dom.offsetHeight*0.5-Sun.Alert.div.offsetHeight*0.5)+"px";
var trnastr="translate("+tox+","+toy+")";
Sun.Alert.div.style.webkitTransform=trnastr;
Sun.Alert.div.style.mozTransform=trnastr;
Sun.Alert.div.style.oTransform=trnastr;
Sun.Alert.div.style.transform=trnastr;
}
};
Sun.Alert.show=function(txt){
if(Sun.Alert.isRun==true){
return;
}
if(txt!=undefined){
Sun.Alert.txt.innerHTML=txt;
}
Sun.Alert.div.style.transitionDelay=null;
Sun.Alert.div.style.mozTransitionDelay=null;
Sun.Alert.div.style.webkitTransitionDelay=null;
Sun.Alert.div.style.oTransitionDelay=null;
Sun.Alert.div.style.opacity="0";
Sun.Alert.div.style.opacity="1";
Sun.Alert.isRun=true;
};
Sun.Alert.hide=function(){
Sun.Alert.isRun=false;
Sun.Alert.div.style.transitionDelay="0.5s";
Sun.Alert.div.style.mozTransitionDelay="0.5s";
Sun.Alert.div.style.webkitTransitionDelay="0.5s";
Sun.Alert.div.style.oTransitionDelay="0.5s";
Sun.Alert.div.style.opacity="0";
};
//动画运行中...
Sun.Alert.update=function(){
};
/**
* Created by sunjian on 2015/6/17.
*/
//进度条面板
Sun.ProgressView=function(pscene){
Sun.SObject.call(this);
this.pscene=pscene;
this.con=document.createElement("div");
this.initView();
this.addEvent();
};
Sun.ProgressView.prototype=Object.create(Sun.SObject.prototype);
Sun.ProgressView.prototype.constructor=Sun.ProgressView;
//初始化界面
Sun.ProgressView.prototype.initView=function(){
this.con.style.width=this.pscene.divw+"px";
this.con.style.height=this.pscene.divh+"px";
this.con.style.backgroundColor="rgba(255,255,255,0.3)";
this.con.style.display="table";
this.con.style.position="absolute";
this.con.style.top="0px";
this.con.style.textAlign="center";
this.con.style.verticalAlign="middle";
this.con.style.opacity="0";
this.con.style.webkitTransition="opacity 0.5s ease-in-out";
this.con.style.mozTransition="opacity 0.5s ease-in-out";
this.con.style.oTransition="opacity 0.5s ease-in-out";
this.con.style.transition="opacity 0.5s ease-in-out";
this.con.style.webkitUserSelect="none";
this.con.style.mozUserSelect="none";
this.con.style.msUserSelect="none";
this.con.style.khtmlUserSelect="none";
this.con.style.userSelect="none";
this.con.style.zIndex=2;
this.txtcon=document.createElement("div");
this.txtcon.style.verticalAlign="middle";
this.txtcon.style.display="table-cell";
this.lab=document.createElement("label");
this.lab.style.textShadow="0px 0px 6px #FFFFFF";
this.lab.style.fontSize="27px";
this.lab.style.color="#ffffff";
this.lab.style.fontWeight="bold";
this.lab.innerHTML="Loading 54%";
this.txtcon.appendChild(this.lab);
this.con.appendChild(this.txtcon);
this.pscene.divdom.appendChild(this.con);
};
//添加事件
Sun.ProgressView.prototype.addEvent=function(){
var content=this;
window.addEvent(window,"resize",function(e){
content.con.style.width=content.pscene.divw+"px";
content.con.style.height=content.pscene.divh+"px";
}, false);
this.registClick(this.con, function (ev) {
if (content.con.style.opacity != "0") {
ev.stopPropagation();
}
}, false);

window.addEvent(this.con,"webkitTransitionEnd",function(){
content.tweenComplete();
},false);
window.addEvent(this.con,"mozTransitionEnd",function(){
content.tweenComplete();
},false);
window.addEvent(this.con,"oTransitionEnd",function(){
content.tweenComplete();
},false);
window.addEvent(this.con,"transitionend",function(){
content.tweenComplete();
},false);
};
Sun.ProgressView.prototype.tweenComplete=function(){
if(this.con.style.opacity==0){
this.con.style.pointerEvents="none";
}
};
//显示
Sun.ProgressView.prototype.show=function(){
this.con.style.pointerEvents="auto";
this.con.style.opacity=1;
};
//隐藏
Sun.ProgressView.prototype.hide=function(){
this.con.style.opacity=0;
};
//设置百分比
Sun.ProgressView.prototype.setValue=function(percent){
//this.lab.innerHTML="Loading "+percent;
this.lab.innerHTML="加载中... ...";
};
/**
* Created by sunjian on 2015/7/8.
*/
Sun.RoadFlat2D=function(pscene,info){
Sun.SObject.call(this);
this.info=info;
this.animationId=null;
this.pscene=pscene;
this.dom=null;
this.start();
};
Sun.RoadFlat2D.prototype=Object.create(Sun.SObject.prototype);
Sun.RoadFlat2D.prototype.constructor=Sun.RoadFlat2D;
//开始运行
Sun.RoadFlat2D.prototype.start=function(){
var me=this;
this.dom=new Image();
this.dom.onload=function(e){
me.run(e);
};
this.dom.setAttribute("src",this.getUrl());
};
//获取要显示的脚印url
Sun.RoadFlat2D.prototype.getUrl=function(){
if(this.info.tb_panoskip_footurl!=""){
return Sun.Constant.resourceUrl+this.info.tb_panoskip_footurl;
}
if(Sun.Constant.roadImgUrl!=null){
return Sun.Constant.roadImgUrl;
}
return "script/server/road_ipad.png";
};
//序列执行
Sun.RoadFlat2D.prototype.run=function(e){
var me=this;
this.setProtected();
var firstDom=this.pscene.renderer.domElement.parentNode.lastChild;
this.pscene.renderer.domElement.parentNode.insertBefore(this.dom,firstDom);
this.pscene.addEventListener(Sun.SceneEvent.SceneCompleteEvent,function(){
me.dispose();
});
this.registClick(this.dom, function (ev) {
me.clickHand(ev);
}, false);


this.update();
};
//脚印单击事件
Sun.RoadFlat2D.prototype.clickHand=function(e){
/*if(e.hasOwnProperty("button")){
//只允许鼠标左键生效
if(e.button!=0){
return;
}
}*/
this.pscene.showPano(this.info.tb_place_id,this.info.tb_panoto_id,this.info.tb_panoto_p,this.info.tb_panoto_t,this.info.tb_panoto_f);
};
//释放资源
Sun.RoadFlat2D.prototype.dispose=function(){
window.cancelAFrame(this.animationId);
if(this.dom!=null){
this.dom.parentNode.removeChild(this.dom);
this.dom=null;
}
};
//刷新箭头位置
Sun.RoadFlat2D.prototype.update=function(){
var me=this;
var point=this.pscene.calcHSPos(this.info.tb_panofrom_p,this.info.tb_panofrom_t);
var x=point.x;
var y=point.y;
if(point.z<1){
this.dom.style.display="none";
}else{
this.dom.style.display="block";
}
this.dom.style.webkitTransform="translate("+x+"px,"+y+"px)";
this.dom.style.mozTransform="translate("+x+"px,"+y+"px)";
this.dom.style.oTransform="translate("+x+"px,"+y+"px)";
this.dom.style.msTransform="translate("+x+"px,"+y+"px)";
this.dom.style.transform="translate("+x+"px,"+y+"px)";
this.animationId=window.requestAFrame( function(){
me.update();
});
};
//设置脚印样式属性
Sun.RoadFlat2D.prototype.setProtected=function(){
this.dom.style.position="absolute";
this.dom.style.zIndex="3";
this.dom.style.cursor="pointer";
this.dom.style.display="none";
this.dom.style.overflow="hidden";
this.dom.style.webkitUserSelect="none";
this.dom.style.mozUserSelect="none";
this.dom.style.outlineStyle="none";
this.dom.style.msUserSelect="none";
this.dom.style.khtmlUserSelect="none";
this.dom.style.userSelect="none";
this.dom.style.width=this.dom.width+"px";
this.dom.style.height=this.dom.height+"px";
this.dom.style.webkitTransformOrigin="50% 50%";
this.dom.style.mozTransformOrigin="50% 50%";
this.dom.style.oTransformOrigin="50% 50%";
this.dom.style.msTransformOrigin="50% 50%";
this.dom.style.transformOrigin="50% 50%";
this.dom.style.left=(-this.dom.width*0.5)+"px";
this.dom.style.top=(-this.dom.height*0.5)+"px";
};
/**
* Created by sunjian on 2015/7/9.
*/
Sun.Poi2D = function (pscene, info) {
console.log(info);
if (info.tb_poistate_id == "2") {
return;
}
Sun.SObject.call(this);
this.info = info;
this.animationId = null;
this.pscene = pscene;
this.dom = null;
this.start();
};
Sun.Poi2D.prototype=Object.create(Sun.SObject.prototype);
Sun.Poi2D.prototype.constructor=Sun.Poi2D;
//开始运行
Sun.Poi2D.prototype.start=function(){
var me=this;
this.dom=new Image();
this.dom.onload=function(e){
me.run(e);
};
//this.dom.setAttribute("src","script/server/road_ipad.png");

this.dom.setAttribute("src",Sun.Constant.resourceUrl+this.info.tb_poiicon_path);
};
//序列执行
Sun.Poi2D.prototype.run = function (e) {
var me = this;
this.setProtected();
var firstDom = this.pscene.renderer.domElement.parentNode.lastChild;
this.pscene.renderer.domElement.parentNode.insertBefore(this.dom, firstDom);
this.pscene.addEventListener(Sun.SceneEvent.SceneCompleteEvent, function () {
me.dispose();
});
this.registClick(this.dom, function (ev) {
me.clickHand(ev);
}, false);

this.update();
};
//单击事件
Sun.Poi2D.prototype.clickHand = function (event, fun) {
event.preventDefault();

if (this.info.tb_poiactiontype_id == Sun.Poi2DInfo.action_playImg) {
new Sun.PopUpImage(this.pscene, this.info);
} else if (this.info.tb_poiactiontype_id == Sun.Poi2DInfo.action_playJs) {
try {
popHand(JSON.stringify(this.info));
} catch (e) {
}
} else if (this.info.tb_poiactiontype_id == Sun.Poi2DInfo.action_playVideo) {
new Sun.PopUpVideo(this.pscene, this.info);
}
};
//释放资源
Sun.Poi2D.prototype.dispose=function(){
window.cancelAFrame(this.animationId);
if(this.dom!=null){
this.dom.parentNode.removeChild(this.dom);
this.dom=null;
}
};
//刷新箭头位置
Sun.Poi2D.prototype.update = function () {
var me = this;
var vp = parseFloat(this.info.tb_poi_coord[0].P);
var vt = parseFloat(this.info.tb_poi_coord[0].T);
if (vp > 360)
vp = vp - 360;
var point = this.pscene.calcHSPos(vp, vt);
var x = point.x;
var y = point.y;
//console.log("this.info.tb_poi_coord[0].P=" + this.info.tb_poi_coord[0].P + " x=" + x + " vp=" + vp);
if (point.z < 1) {
this.dom.style.display = "none";
} else {
this.dom.style.display = "block";
}
this.dom.style.webkitTransform = "translate(" + x + "px," + y + "px)";
this.dom.style.mozTransform = "translate(" + x + "px," + y + "px)";
this.dom.style.oTransform = "translate(" + x + "px," + y + "px)";
this.dom.style.msTransform = "translate(" + x + "px," + y + "px)";
this.dom.style.transform = "translate(" + x + "px," + y + "px)";
this.animationId = window.requestAFrame(function () {
me.update();
});
};
//设置样式属性
Sun.Poi2D.prototype.setProtected=function(){
this.dom.style.position="absolute";
this.dom.style.cursor="pointer";
this.dom.style.display="none";
this.dom.style.overflow="hidden";
this.dom.style.webkitUserSelect="none";
this.dom.style.mozUserSelect="none";
this.dom.style.outlineStyle="none";
this.dom.style.msUserSelect="none";
this.dom.style.khtmlUserSelect="none";
this.dom.style.userSelect="none";
this.dom.style.width=this.dom.width+"px";
this.dom.style.height=this.dom.height+"px";
this.dom.style.webkitTransformOrigin="50% 50%";
this.dom.style.mozTransformOrigin="50% 50%";
this.dom.style.oTransformOrigin="50% 50%";
this.dom.style.msTransformOrigin="50% 50%";
this.dom.style.transformOrigin="50% 50%";
this.dom.style.left=-this.dom.width*0.5;
this.dom.style.top=-this.dom.height*0.5;
};
/**
* Created by sunjian on 2015/12/28.
*/
Sun.CustomPoi2D=function(info,dom,pscene){
this.dom=dom;
this.pscene=pscene;
this.info=info;
this.animationId=null;
this.start();
};
Sun.CustomPoi2D.prototype=Object.create(Sun.SObject.prototype);
Sun.CustomPoi2D.prototype.constructor=Sun.CustomPoi2D;
Sun.CustomPoi2D.prototype.start=function(){
this.setProtected();
var firstDom=this.pscene.renderer.domElement.parentNode.lastChild;
this.pscene.renderer.domElement.parentNode.insertBefore(this.dom,firstDom);
this.pscene.addEventListener(Sun.SceneEvent.SceneCompleteEvent,function(){
this.dispose();
}.bind(this));
touch.on(this.dom,"tap",function(e){
this.clickHand(e,arguments.callee);
}.bind(this));
this.update();
};
//单击事件
Sun.CustomPoi2D.prototype.clickHand=function(event,fun){
event.preventDefault();
//alert(event);
};
//释放资源
Sun.CustomPoi2D.prototype.dispose=function(){
window.cancelAFrame(this.animationId);
if(this.dom!=null){
this.dom.parentNode.removeChild(this.dom);
this.dom=null;
}
};
//刷新位置
Sun.CustomPoi2D.prototype.update=function(){
var point=this.pscene.calcHSPos(this.info.p,this.info.t);
var x=point.x;
var y=point.y;
if(point.z<1){
this.dom.style.display="none";
//console.warn("none");
}else{
this.dom.style.display="block";
//console.warn("block");
}
this.dom.style.webkitTransform="translate("+x+"px,"+y+"px)";
this.dom.style.mozTransform="translate("+x+"px,"+y+"px)";
this.dom.style.oTransform="translate("+x+"px,"+y+"px)";
this.dom.style.msTransform="translate("+x+"px,"+y+"px)";
this.dom.style.transform="translate("+x+"px,"+y+"px)";
this.animationId=window.requestAFrame( function(){
this.update();
}.bind(this));
};
//设置样式属性
Sun.CustomPoi2D.prototype.setProtected=function(){
this.dom.style.removeProperty("bottom");
this.dom.style.zIndex=3;
this.dom.style.position="absolute";
this.dom.style.overflow="hidden";
if(this.dom.style.width==""){
this.dom.style.width=this.dom.offsetWidth+"px";
}
if(this.dom.style.height==""){
this.dom.style.height=this.dom.offsetHeight+"px";
}
//this.dom.style.webkitTransformOrigin="50% 50%";
//this.dom.style.mozTransformOrigin="50% 50%";
//this.dom.style.oTransformOrigin="50% 50%";
//this.dom.style.msTransformOrigin="50% 50%";
//this.dom.style.transformOrigin="50% 50%";
this.dom.style.left=-parseFloat(this.dom.style.width)*0.5+"px";
this.dom.style.top=-parseFloat(this.dom.style.height)*0.5+"px";
};
/**
* Created by sunjian on 2015/7/23.
*/
//内嵌图片poi
Sun.ImgPoi3D=function(pscene){
if(!Detector.webgl) return;
Sun.SObject.call(this);
this.pscene=pscene;
this.ptarr=new Array();     //pt值数组
this.vertices = new Array();
this.indices = new Array();
this.uvtData = new Array();
this.backLayer=null;
this.bitmapdata=null;
this.enterFrameFun=null;
this.video=new LVideo();
this.ptarr.push(new THREE.Vector2(0,-10));      //左上角
this.ptarr.push(new THREE.Vector2(40,-10));     //右上角
this.ptarr.push(new THREE.Vector2(40,10));      //右下角
this.ptarr.push(new THREE.Vector2(0,10));       //左下角
this.p1=null;
this.p2=null;
this.p3=null;
this.p4=null;
this.start();
};
Sun.ImgPoi3D.prototype=Object.create(Sun.SObject.prototype);
Sun.ImgPoi3D.prototype.constructor=Sun.ImgPoi3D;
//下载图片
Sun.ImgPoi3D.prototype.start=function(){
var imgData=[{name:"map",path:"map.jpg"}];
LLoadManage.load(imgData,null,function(result){
this.run(result);
}.bind(this));
};
//下载图片完成
Sun.ImgPoi3D.prototype.run=function(result){
var me=this;
this.bitmapdata=new LBitmapData(result["map"]);
this.backLayer=new LSprite();
this.backLayer.x=0;
this.backLayer.y=0;
addChild(this.backLayer);
//this.backLayer.addShape(LShape.RECT,[0,0,window.innerWidth,window.innerHeight]);
this.enterFrameFun=function(){
me.update();
};
this.backLayer.addEventListener(LEvent.ENTER_FRAME,this.enterFrameFun);
this.addEventHand();
};
//添加事件处理
Sun.ImgPoi3D.prototype.addEventHand=function(){
var dom=document.getElementById("container_canvas");
dom.parentNode.style.zIndex=1;
/*this.backLayer.mouseEnabled=true;
this.backLayer.addEventListener(LMouseEvent.MOUSE_DOWN,function(e){
alert("alert");
});*/
};
//更新事件
Sun.ImgPoi3D.prototype.update=function(){
this.p4=this.pscene.calcHSPos(this.ptarr[0].x,this.ptarr[0].y);       //左上角
this.p3=this.pscene.calcHSPos(this.ptarr[1].x,this.ptarr[1].y);       //右上角
this.p2=this.pscene.calcHSPos(this.ptarr[2].x,this.ptarr[2].y);       //右下角
this.p1=this.pscene.calcHSPos(this.ptarr[3].x,this.ptarr[3].y);       //左下角
if(this.p1.z<1||this.p2.z<1||this.p3.z<1||this.p4.z<1){
this.backLayer.graphics.clear();
return;
}
this.vertices.length=0;
this.vertices.push(this.p1.x, this.p1.y);      //0,1
this.vertices.push((this.p1.x+this.p4.x)/2, (this.p1.y+this.p4.y)/2);    //2,3
this.vertices.push(this.p4.x, this.p4.y);          //4,5
this.vertices.push((this.p1.x+this.p2.x)/2, (this.p1.y+this.p2.y)/2);        //6,7
var a=this.vertices[2];
var b=(this.p2.x+this.p3.x)/2;
var c=this.vertices[7];
var d=(this.p4.y+this.p3.y)/2;
this.vertices.push((a+b)/2, (c+d)/2);                    //8,9
this.vertices.push((this.p4.x+this.p3.x)/2, (this.p4.y+this.p3.y)/2);        //10,11
this.vertices.push(this.p2.x, this.p2.y);                  //12,13
this.vertices.push((this.p2.x+this.p3.x)/2, (this.p2.y+this.p3.y)/2);    //14,15
this.vertices.push(this.p3.x, this.p3.y);                  //16,17
this.indices.length=0;
this.indices.push(0, 3, 1);
this.indices.push(3, 1, 4);
this.indices.push(1, 4, 2);
this.indices.push(4, 2, 5);
this.indices.push(3, 6, 4);
this.indices.push(6, 4, 7);
this.indices.push(4, 7, 5);
this.indices.push(7, 5, 8);
this.uvtData.length=0;
this.uvtData.push(0, 0);
this.uvtData.push(0, 0.5);
this.uvtData.push(0, 1);
this.uvtData.push(0.5, 0);
this.uvtData.push(0.5, 0.5);
this.uvtData.push(0.5, 1);
this.uvtData.push(1, 0);
this.uvtData.push(1, 0.5);
this.uvtData.push(1, 1);
this.backLayer.graphics.clear();
this.backLayer.graphics.beginBitmapFill(this.bitmapdata);
this.backLayer.graphics.drawTriangles(this.vertices, this.indices, this.uvtData,0);
};
//释放资源
Sun.ImgPoi3D.prototype.dispose=function(){
this.backLayer.removeEvent(LEvent.ENTER_FRAME,this.enterFrameFun);
this.backLayer.graphics.clear();
this.backLayer.addShape()
removeChild(this.backLayer);
this.backLayer=null;
};
/*
//下载视频
Sun.ImgPoi3D.prototype.downVideo=function(){
this.video.addEventListener(LEvent.COMPLETE,function(e){
this.loadOver(e);
}.bind(this));
this.video.load("script/sample.3g2,script/sample.3gp,script/sample.mov,script/sample.mp4,script/sample.ogv,script/sample.webm");
};
Sun.ImgPoi3D.prototype.loadOver=function(e){
//alert("dnal");
addChild(this.video);
this.video.play();
this.start();
var mapdata=new LBitmapData(284,216);
mapdata.draw(this.video);
var map=new LBitmap(mapdata);
map.x=500;
addChild(map);
};
*/
/*
Sun.ImgPoi3D.prototype.downImage=function(url){
};
*/
//初始化视图webgl版本
/*Sun.ImgPoi3D.prototype.initView=function(img){
var extrudeSettings = {
amount: 0,        //厚度
steps: 0,
bevelSegments: 0,
bevelSize: 0,
bevelThickness: 0
};
var triangleShape = new THREE.Shape();
triangleShape.moveTo(  400, 100 );
triangleShape.lineTo(  -200, 100 );
triangleShape.lineTo( -400, -150 );
triangleShape.lineTo(  400, -100 );
var mater=new THREE.MeshBasicMaterial({color:Math.random()*0xffffff,side:THREE.DoubleSide});
this.mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(triangleShape, extrudeSettings), mater );
this.mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(triangleShape, extrudeSettings), loadTexture("map.jpg") );
this.mesh.rotation.y = Math.PI / 2;
this.mesh.position.y = 150;
this.mesh.position.x=600;
this.mesh.position.z=0;
this.pscene.scene.add(this.mesh);
var geometry = new THREE.BufferGeometry();
var indicesarr=new Uint32Array(3*2);
var positionarr=new Float32Array(3*4);
var normalarr=new Float32Array(3*4);
indicesarr[0]=0;
indicesarr[1]=2;
indicesarr[2]=1;
indicesarr[3]=2;
indicesarr[4]=1;
indicesarr[5]=3;
var point1=this.pscene.getCoord(this.ptarr[0].x,this.ptarr[0].y);       //左上角
var point2=this.pscene.getCoord(this.ptarr[1].x,this.ptarr[1].y);       //右上角
var point3=this.pscene.getCoord(this.ptarr[2].x,this.ptarr[2].y);       //右下角
var point4=this.pscene.getCoord(this.ptarr[3].x,this.ptarr[3].y);       //左下角
var defaultZ=300;
//alert(point1.x+":"+point1.y+"|"+point2.x+":"+point2.y);
positionarr[0]=point4.x;        //左上角
positionarr[1]=point4.y;
positionarr[2]=defaultZ;
positionarr[3]=point1.x;        //左下角
positionarr[4]=point1.y;
positionarr[5]=defaultZ;
positionarr[6]=point3.x;        //右上角
positionarr[7]=point3.y;
positionarr[8]=defaultZ;
positionarr[9]=point2.x;        //右下角
positionarr[10]=point2.y;
positionarr[11]=defaultZ;
for(var i=0;i<12;i++){
normalarr[i]=0;
}
geometry.addAttribute("index", new THREE.BufferAttribute( indicesarr, 1 ) );
geometry.addAttribute("position", new THREE.BufferAttribute( positionarr, 3 ) );
geometry.addAttribute("normal", new THREE.BufferAttribute( normalarr, 3 ) );
geometry.computeBoundingSphere();
var material = new THREE.MeshBasicMaterial( {
color: 0xFF0000,side: THREE.DoubleSide,opacity:0.5,transparent:true
});
var mesh = new THREE.Mesh(geometry, material);
mesh.position.y=0;
mesh.position.x=0;
mesh.position.z=0;
this.pscene.scene.add( mesh );
};
//更新事件
Sun.ImgPoi3D.prototype.update=function(){
this.axix.position.x=this.pscene.camera.target.x;
this.axix.position.z=this.pscene.camera.target.z;
window.requestAFrame( function(){
this.update();
}.bind(this));
};
Sun.ImgPoi3D.prototype.init=function(){
this._vertices=new Array();
this._indices=new Array();
this._uvtData=new Array();
this._indices.push(0,1,2);
this._indices.push(0,2,3);
this._uvtData.push(0, 0);
this._uvtData.push(1, 0);
this._uvtData.push(1, 1);
this._uvtData.push(0, 1);
this._sprite=new LSprite();
addChild(this._sprite);
};
/*
Sun.ImgPoi3D.prototype.setTransform=function(v1,v2,v3,v4){
this._vertices.length=0;
this._vertices.push(v1.x,v1.y,v2.x,v2.y,v3.x,v3.y,v4.x,v4.y);
};*/
/*
Sun.ImgPoi3D.prototype.draw=function(){
this._sprite.graphics.clear();
this._sprite.beginBitmapFill(this._bitmapData);
this._sprite.drawTriangles(this._vertices,this._indices,this._uvtData);
};*/
/**
* Created by sunjian on 2015/8/4.
*/
//canvas版勾勒色块
Sun.DrawCanvas=function(pscene,en){
Sun.SObject.call(this);
this.pscene=pscene;
this.en=en;
this.animationId=null;
this.newPT=null;
this.endPT=null;
this.resizeFun=null;
this.downFun=null;
this.moveFun=null;
this.endFun=null;
//-------------------------------------------------------
this.en.tb_poistate_id=1;
var arr = new Array();
var obj1 = new Object();
obj1.p = 0;
obj1.t = 30;
var obj2 = new Object();
obj2.p = 60;
obj2.t = 30;
var obj3 = new Object();
obj3.p = 30;
obj3.t = 8;
var obj4 = new Object();
obj4.p = 0;
obj4.t = 8;
arr.push(obj1);
arr.push(obj2);
arr.push(obj3);
arr.push(obj4);
this.en.tb_poi_coord = arr;
this.en.tb_poifillcolor_content = "#00ff00";
this.en.tb_poifillcolor_content2 = "#00FF00";
this.en.tb_poialphval_content = "0.5";
this.en.tb_poialphval_content2 = "1";
this.en.tb_poialphval_bordercolor = "#0000FF";
this.en.tb_poialphval_bordercolor2 = "#cccccc";
this.en.tb_poialphval_borderwidth = "1";
this.en.tb_poialphval_borderwidth2 = "2";
this.en.tb_poialphval_borderalphval = "1";
this.en.tb_poialphval_borderalphval2 = "0.5";
this.en.tb_poicontent_url = "url";
this.en.tb_poi_number = "123";
if (this.en.tb_poistate_id == "2") {
return;
}
//-------------------------------------------------------
this.pArr = en.tb_poi_coord;
this.fillColor = en.tb_poifillcolor_content;
this.fillColor2 = en.tb_poifillcolor_content2;
this.alphVal = parseFloat(en.tb_poialphval_content);
this.alphVal2 = parseFloat(en.tb_poialphval_content2);
this.borderColor = en.tb_poialphval_bordercolor;
this.borderColor2 = en.tb_poialphval_bordercolor2;
this.borderWidth = parseFloat(en.tb_poialphval_borderwidth);
this.borderWidth2 = parseFloat(en.tb_poialphval_borderwidth2);
this.borderAlpha = parseFloat(en.tb_poialphval_borderalphval);
this.borderAlpha2 = parseFloat(en.tb_poialphval_borderalphval2);
var id = "";
var url = en.tb_poicontent_url;
var pid = en.tb_poi_number;
this.can=document.createElement("canvas");
this.ctx=null;
this.start();
this.addEventHand();
this.draw();
/*var squareMaterial = new THREE.MeshBasicMaterial({
color:0xFF0000,
side:THREE.DoubleSide
});
var mesh=new THREE.Mesh(new THREE.CubeGeometry(100,100,100),squareMaterial);
this.pscene.scene.add(mesh);
mesh.position.set(100,0,500);
document.body.addEventListener("click",function(e){
var vec=new THREE.Vector3(e.clientX, e.clientY,0);
//var to=vec.unproject(this.pscene.camera);
var to=this.pscene.getScreenTo3DPosition(vec.x,vec.y,0);
//console.warn(to);
}.bind(this),false);*/
};
Sun.DrawCanvas.prototype=Object.create(Sun.SObject.prototype);
Sun.DrawCanvas.prototype.constructor=Sun.DrawCanvas;
//开始运行
Sun.DrawCanvas.prototype.start=function(){
this.can.width=this.pscene.renderer.domElement.clientWidth;
this.can.height=this.pscene.renderer.domElement.clientHeight;
this.ctx=this.can.getContext("2d");
this.can.style.position = "absolute";
//this.can.style.cursor = "pointer";
this.can.style.top="0px";
this.can.style.left="0px";
//this.can.style.backgroundColor="#FF0000";
this.pscene.renderer.domElement.parentNode.appendChild(this.can);
};
//添加事件
Sun.DrawCanvas.prototype.addEventHand=function(){
var me=this;
if(this.checkVersion()=="pc"){
this.can.addEventListener("mousedown", function(e){
me.downFun=arguments.callee;
me.pcMouseEventHand(e);
}, false);
this.can.addEventListener("mousemove", function(e){
me.moveFun=arguments.callee;
me.pcMouseEventHand(e);
}, false);
this.can.addEventListener("mouseup", function(e){
me.endFun=arguments.callee;
me.pcMouseEventHand(e);
}, false);
}else{
this.can.addEventListener("touchstart", function(e){
me.downFun=arguments.callee;
me.telMouseEventHand(e);
}, false);
this.can.addEventListener("touchmove", function(e){
me.moveFun=arguments.callee;
me.telMouseEventHand(e);
}, false);
this.can.addEventListener("touchend", function(e){
me.endFun=arguments.callee;
me.telMouseEventHand(e);
}, false);
}
this.resizeFun=function(){
me.can.width=me.pscene.renderer.domElement.clientWidth;
me.can.height=me.pscene.renderer.domElement.clientHeight;
};
window.addEvent(window,"resize",this.resizeFun,false);
};
Sun.DrawCanvas.prototype.pcMouseEventHand=function(e){
if(e.type=="mousedown"){
this.newPT = this.getEventPosition(e);
e.preventDefault();
}else if(e.type=="mousemove"){
this.endPT=this.getEventPosition(e);
if (this.ctx.isPointInPath(this.endPT.x, this.endPT.y)) {
this.can.style.cursor="pointer";
}else{
this.can.style.cursor="auto";
}
e.preventDefault();
}else if(e.type=="mouseup"){
e.preventDefault();
this.endPT=this.getEventPosition(e);
if(this.newPT.x==this.endPT.x&&this.newPT.y==this.endPT.y){
if (this.ctx.isPointInPath(this.newPT.x, this.newPT.y)) {
this.dispose();
}
}
}
};
//手机事件
Sun.DrawCanvas.prototype.telMouseEventHand=function(e){
if(e.type=="touchstart"){
this.newPT = this.getEventPosition(e);
this.endPT=this.getEventPosition(e);
e.preventDefault();
}else if(e.type=="touchmove"){
this.endPT=this.getEventPosition(e);
//document.getElementById("pantxt").value=this.newPT.x+":"+this.endPT.x;
e.preventDefault();
}else if(e.type=="touchend"){
e.preventDefault();
//alert(this.newPT.x);
if(this.newPT.x==this.endPT.x&&this.newPT.y==this.endPT.y){
if (this.ctx.isPointInPath(this.newPT.x, this.newPT.y)) {
alert("abc");
}
}
}
};
//勾勒色块。
Sun.DrawCanvas.prototype.draw=function(){
this.ctx.clearRect(0,0,this.can.width,this.can.height);
this.ctx.beginPath();
//this.ctx.lineJoin = "round";
this.ctx.globalAlpha = this.alphVal;
this.ctx.lineWidth = this.borderWidth;
this.ctx.fillStyle = this.fillColor;
this.ctx.strokeStyle = this.borderColor;
for (var i = 0; i < this.pArr.length; i++) {
var obj = this.pArr[i];
var p = parseFloat(obj.p);
var t = parseFloat(obj.t);
var vector =this.pscene.calcHSPos(p,t);
if (vector.z > 1) {
this.ctx.lineTo(vector.x, vector.y);
} else {
this.ctx.clearRect(0, 0, this.can.width,this.can.height);
break;
}
}
this.ctx.fill();
this.ctx.stroke();
this.ctx.restore();
this.ctx.closePath();
this.animationId=window.requestAFrame( function(){
this.draw();
}.bind(this));
};
//释放资源.
Sun.DrawCanvas.prototype.dispose=function(){
//alert("dispose");
var vec=new THREE.Vector3(window.innerWidth*0.5,window.innerHeight*0.5,0);
alert(vec.unproject(this.pscene.camera).z);
/*window.cancelAFrame(this.animationId);
this.ctx.clearRect(0, 0, this.can.width,this.can.height);
window.removeEvent(window,"resize",this.resizeFun,false);
window.removeEvent(this.can,"mousedown",this.downFun,false);
window.removeEvent(this.can,"mousemove",this.moveFun,false);
window.removeEvent(this.can,"mouseup",this.endFun,false);
window.removeEvent(this.can,"touchstart",this.downFun,false);
window.removeEvent(this.can,"touchmove",this.moveFun,false);
window.removeEvent(this.can,"touchend",this.endFun,false);
this.can.parentNode.removeChild(this.can);
this.ctx=null;
this.can=null;*/
};
//html5版雷达
Sun.SCradar = function (size, map, obj) {
//obj.x obj.y obj.panoid  obj.placeid
Sun.SObject.call(this);
this.obj = obj;
this.map = map;
this.canvas = null;
this.ctx = null;
this.grad = null;

//圆心对象
this.circleCanvas = null;
this.circleCtx = null;
this.cirNumber = undefined;     //圆半径
this.winWidth = undefined;      //canvas宽度
this.isMouseDown = false;     //当前鼠标有没有按下
this.startDragQCX = 0;
this.startDragQCY = 0;
this.dragSleep = 2;   //拖动旋转速度
this.isClose = false;  //是否是关闭状态 true-关闭  false-打开
this.cp = null;
this.isCircleCk = false;      //是否点中圆心 true-是  false-否        //用于touchstart事件
this.circleFillColor = "skyblue"; //圆心颜色
if (size === undefined) {
this.winWidth = 25;
} else {
this.winWidth = size;
}
this.createCanvas();            //创建元素
Object.defineProperties(this, {
_dom: {
value: this.canvas,
writable: false
},
dom: {
get: function () {
return this._dom;
}
},
_fov: {
value: 60,
writable: true
},
fov: {
get: function () {
return this._fov;
},
set: function (newValue) {
if (newValue == this._fov)
return;
if (newValue > 120) {
newValue = 120;
} else if (newValue < 30) {
newValue = 30;
}
this._fov = newValue;
this.update();
}
},
_angle: {
value: 0,
writable: true
},
angle: {
get: function () {
return this._angle;
},
set: function (newValue) {
if (newValue == this._angle)
return;
newValue = Number(newValue);

this._angle = newValue;

this.update();
}
},
_left: {
value: 0,
writable: true
},
left: {
get: function () {
return this._left;
},
set: function (newValue) {
this._left = newValue;
}
},
_top: {
value: 0,
writable: true
},
top: {
get: function () {
return this._top;
},
set: function (newValue) {
this._top = newValue;
}
}
});
//角度转弧度
this.degToRad = function (deg) {
return deg / 180.0 * Math.PI;
};
//弧度转角度
this.radToDeg = function (rad) {
return rad * 180.0 / Math.PI;
};
//手动点击圆心
this.pointCenterClick = function () {
this.map.dispatchEventListener(Sun.SCradar.pointCenterEvent, JSON.stringify({ target: "SCradar", type: Sun.SCradar.openEvent, panoid: this.obj.panoid, placeid: this.obj.placeid }));
};
//打开扇形
this.open = function () {
if (this.isClose == false) {
return;
}
this.isClose = false;
//-------------------------
this.canvas.width = 150;
this.canvas.height = 150;
this.cirNumber = this.canvas.width * 0.5;
this.refrePoint();
//-------------------------
this.dom.style.pointerEvents = "none";
//始终保持在最顶层。不被其他点遮掉
this.dom.style.zIndex = "2";
this.pointCenterClick();
};
//关闭扇形
this.close = function () {
this.isClose = true;
//-------------------------
this.canvas.width = 25;
this.canvas.height = 25;
this.cirNumber = this.canvas.width * 0.5;
this.refrePoint();
//-------------------------
this.dom.style.pointerEvents = "auto";
this.dom.style.zIndex = "1";
//this.update();
};
//获取当前对象的父对象,即 SMap
this.getParent = function () {
var divcon = this.dom.parentNode;
for (var i = 0; i < divcon.childNodes.length; i++) {
var obj = divcon.childNodes.item(i);
//alert(obj.getAttribute("data-id"));
}
};
//设置位置
this.setPoint = function (tox, toy) {
//console.warn(tox,toy,this.map.winWidth,this.map.winHeight);
tox = Number(tox);
toy = Number(toy);
this.left = tox;
this.top = toy;
this.cp = { x: tox, y: toy };
this.dom.style.webkitTransform = "translate(" + (tox - this.cirNumber) + "px," + (toy - this.cirNumber) + "px)";
this.dom.style.mozTransform = "translate(" + (tox - this.cirNumber) + "px," + (toy - this.cirNumber) + "px)";
this.dom.style.msTransform = "translate(" + (tox - this.cirNumber) + "px," + (toy - this.cirNumber) + "px)";
this.dom.style.oTransform = "translate(" + (tox - this.cirNumber) + "px," + (toy - this.cirNumber) + "px)";
this.dom.style.transform = "translate(" + (tox - this.cirNumber) + "px," + (toy - this.cirNumber) + "px)";
/* if(tox>this.map.winWidth*0.5-25&&tox<this.map.winWidth*0.5+25){
if(toy>this.map.winHeight*0.5-25&&toy<this.map.winHeight*0.5+25){
//this.map.ctx.strokeStyle="blue";
//this.map.ctx.strokeRect(this.map.winWidth*0.5-25, this.map.winHeight*0.5-25, 50, 50);
this.circleFillColor="red";
}else{
this.circleFillColor="skyblue";
}
}else{
this.circleFillColor="skyblue";
}*/
this.update();
}
if (this.map != undefined) {
//算出当前点在地图中的百分比坐标位置
this.percent_width = Number(obj.x / this.map.imgW * 100);
this.percent_height = Number(obj.y / this.map.imgH * 100);
this.refrePoint();
}
this.addEvent();
this.update();
this.close();
};
Sun.SCradar.prototype=Object.create(Sun.SObject.prototype);
Sun.SCradar.prototype.constructor=Sun.SCradar;
//添加事件
Sun.SCradar.prototype.addEvent=function(){
var con=this;
/*注册事件*/
if(this.canvas.addEventListener){
this.canvas.addEventListener('DOMMouseScroll',function(e){
con.scrollFunc(e);
},false);
this.canvas.addEventListener("mousedown",function(e){
con.clickHand(e);
},false);
this.canvas.addEventListener("mouseup",function(e){
con.clickHand(e);
},false);
this.canvas.addEventListener("mousemove",function(e){
con.clickHand(e);
},false);
this.canvas.addEventListener("mouseout",function(e){
con.clickHand(e);
},false);
this.canvas.addEventListener("touchstart",function(e){
con.clickHand(e);
return false;
},false);
this.canvas.addEventListener("touchend",function(e){
con.clickHand(e);
return false;
},false);
this.canvas.addEventListener("touchmove",function(e){
con.clickHand(e);
return false;
},false);
}//W3C
this.canvas.onmousewheel=this.canvas.onmousewheel=function(e){
con.scrollFunc(e);
};//IE/Opera/Chrome
//自定义事件处理............................
//缩放地图
this.map.addEventListener(Sun.Smap.ScaleMapEvent,function(params){
con.refrePoint();
});
//拖动地图
this.map.addEventListener(Sun.Smap.DragMapEvent,function(){
con.refrePoint();
});
//拖动地图鼠标松开事件
this.map.addEventListener(Sun.Smap.DragMapUpEvent,function(){
con.dragMapUpEvent();
});
//打开要活动的雷达点
this.map.addEventListener(Sun.SCradar.openEvent,function(json){
con.openCradarHand(json);
});
//设置当前点的角度和fov
this.map.addEventListener(Sun.Smap.SetCradarAngleEvent,function(obj){
con.setCradarAngleHand(obj);
});
};
//拖动地图鼠标松开事件
Sun.SCradar.prototype.dragMapUpEvent=function(){
if(this.circleFillColor=="red"){
this.open();
this.map.dispatchEventListener(Sun.SCradar.openEvent,JSON.stringify({target:"SCradar",type:Sun.SCradar.openEvent,panoid:this.obj.panoid}));
this.moveToCenter();
}
};
//雷达位置刷新
Sun.SCradar.prototype.refrePoint=function(){
var offx=this.map.offx;
var offy=this.map.offy;
var imgW=this.map.imgW;
var imgH=this.map.imgH;
var tox=imgW/100*this.percent_width+offx;
var toy=imgH/100*this.percent_height+offy;
this.setPoint(tox,toy);
};
//设置角度
Sun.SCradar.prototype.setCradarAngleHand=function(obj){
if(this.isClose==false){
if(obj!=undefined&&obj!=null){
if(obj.angle!=undefined&&obj.angle!=null){
this.angle=obj.angle;
}
if(obj.fov!=undefined&&obj.fov!=null){
this.fov=obj.fov;
}
}
}
};
//鼠标滚轮事件
Sun.SCradar.prototype.scrollFunc=function(e){
var val;
if(e.wheelDelta){
val=e.wheelDelta;
}else if(e.detail){
val=e.detail;
}
if(val<0){
this.fov+=3;
}else{
this.fov-=3;
}
this.map.dispatchEventListener(Sun.SCradar.changeEvent,JSON.stringify({target:"SCradar",type:Sun.SCradar.changeEvent,angle:this.angle,fov:this.fov}));
e.stopPropagation();
};
//鼠标点击事件
Sun.SCradar.prototype.clickHand=function(e){
switch(e.type){
case "mousedown":{
this.cp=this.getLocationPoint(e);
var pixel=this.ctx.getImageData(this.cp.x,this.cp.y,1,1).data;
if(pixel[3]!=0){
this.isMouseDown=true;
e.stopPropagation(); //点中雷达则阻止事件穿透
}
break;
}
case "mousemove":{
this.moveActionHand(e);
break;
}
case "mouseup":{
this.isMouseDown=false;
this.dispatchMouseEvent(e,"mouseup");
break;
}
case "mouseout":{
this.dispatchMouseEvent(e,"mouseout");
this.isMouseDown=false;
break;
}case "touchstart":{
this.cp=this.getCradarCirclePoint(e);
var pixel=this.ctx.getImageData(this.cp.x,this.cp.y,1,1).data;
if(pixel[3]!=0){
if(pixel[0]==135&&pixel[1]==206&&pixel[2]==235){
//点中圆点
e.stopPropagation();
this.isCircleCk=true;
this.isMouseDown=true;
}else{
this.isCircleCk=false;
this.isMouseDown=true;
//点中扇形区域
}
}
break;
}case "touchend":{
if(this.isMouseDown==true){
this.isMouseDown=false;
if(this.isCircleCk==true){
this.dispatchMouseEvent(e,"touchend");
}
}
break;
}case "touchmove":{
this.moveActionHand(e);
break;
}
}
};
//获取本对象的点击坐标
Sun.SCradar.prototype.getLocationPoint=function(e){
var result=null;
if(this.browser.versions.mobile){
if(this.browser.versions.android){
//处理安卓设备
var touch= e.touches[0];
var a=touch.clientX-e.currentTarget.parentNode.getBoundingClientRect().left;
var b=touch.clientY-e.currentTarget.parentNode.getBoundingClientRect().top;
result={x:a,y:b};
}else if(this.browser.versions.iPhone||this.browser.versions.iPad){
result=this.getEventPosition(e);
}else{
//result=this.getEventPosition(e);
var a=e.clientX-e.currentTarget.getBoundingClientRect().left;
var b=e.clientY-e.currentTarget.getBoundingClientRect().top;
result={x:a,y:b};
}
}else{
result=this.getEventPosition(e);
}
return result;
};
//获取圆心点击坐标
Sun.SCradar.prototype.getCradarCirclePoint=function(e){
var result=null;
if(this.browser.versions.mobile){
if(this.browser.versions.android){
//处理安卓设备
var touch= e.touches[0];
var a=touch.clientX-e.currentTarget.getBoundingClientRect().left;
var b=touch.clientY-e.currentTarget.getBoundingClientRect().top;
result={x:a,y:b};
}else if(this.browser.versions.iPhone||this.browser.versions.iPad){
var touch= e.touches[0];
var a=touch.clientX-e.currentTarget.getBoundingClientRect().left;
var b=touch.clientY-e.currentTarget.getBoundingClientRect().top;
result={x:a,y:b};
}else{
//result=this.getEventPosition(e);
var a=e.clientX-e.currentTarget.getBoundingClientRect().left;
var b=e.clientY-e.currentTarget.getBoundingClientRect().top;
result={x:a,y:b};
}
}else{
result=this.getEventPosition(e);
}
return result;
};
//移动动作处理
Sun.SCradar.prototype.moveActionHand=function(e){
if(this.isMouseDown==true){
e.stopPropagation();
//this.cp=this.getEventPosition(e);
this.cp=this.getLocationPoint(e);
var dx=this.cp.x;
var dy=this.cp.y;
if(this.angle>180&&this.angle<270){
//左上角
if(dx>this.startDragQCX||dy<this.startDragQCY){
this.angle+=this.dragSleep;
}else{
this.angle-=this.dragSleep;
}
}else if(this.angle>=270&&this.angle<=360){
if(dx>this.startDragQCX||dy>this.startDragQCY){
this.angle+=this.dragSleep;
}else{
this.angle-=this.dragSleep;
}
if(this.angle>=360){
this.angle=0;
}
}else if(this.angle>=0&&this.angle<90){
if(dx>this.startDragQCX||dy<this.startDragQCY){
this.angle-=this.dragSleep;
if(this.angle<=0){
this.angle=360;
}
}else{
this.angle+=this.dragSleep;
}
}else if(this.angle>=90&&this.angle<=180){
if(dx<this.startDragQCX||dy<this.startDragQCY){
this.angle+=this.dragSleep;
}else{
this.angle-=this.dragSleep;
}
}
this.startDragQCX= this.cp.x;
this.startDragQCY= this.cp.y;
this.map.dispatchEventListener(Sun.SCradar.changeEvent,JSON.stringify({target:"SCradar",type:Sun.SCradar.changeEvent,angle:this.angle,fov:this.fov}));
}
};
//派发鼠标事件
Sun.SCradar.prototype.dispatchMouseEvent=function(e,type){
if(type=="mouseup"){
var point=this.getLocationPoint(e);
var pixel=this.ctx.getImageData(point.x,point.y,1,1).data;
if(pixel[0]==135&&pixel[1]==206&&pixel[2]==235){
//点中圆心
this.open();
this.map.dispatchEventListener(Sun.SCradar.openEvent,JSON.stringify({target:"SCradar",type:Sun.SCradar.openEvent,panoid:this.obj.panoid}));
this.moveToCenter();
this.pointCenterClick();
}else{
//if(this.update()==true){
//点中扇形
//}
//console.warn("BBB",pixel[0],pixel[1],pixel[2]);
}
console.warn(this.obj.panoid);
}else if(type=="touchend"){
//点中圆心
this.open();
this.map.dispatchEventListener(Sun.SCradar.openEvent,JSON.stringify({target:"SCradar",type:Sun.SCradar.openEvent,panoid:this.obj.panoid}));
this.moveToCenter();
this.pointCenterClick();
}
};
//把当前点移到窗体正中间
Sun.SCradar.prototype.moveToCenter=function(){
if(this.map.cradarMoveEffect==false) return;
var a,b;
if(this.map.offx>0){
//雷达往左移
a=this.left-this.map.canvas.width*0.5;
a=this.map.offx-a;
}else{
//雷达往右移
a=this.map.canvas.width*0.5-this.left;
a=this.map.offx+a;
}
if(this.map.offy>0){
b=this.top-this.map.canvas.height*0.5;
b=this.map.offy-b;
}else{
b=this.map.canvas.height*0.5-this.top;
b=this.map.offy+b;
}
var content=this;
TweenMax.to( this.map, 0.5, { offx:a, offy:b,onUpdate:function(){
content.map.refreshMap();
},onComplete:function(){
content.map.lastOffy=content.map.offy;
content.map.lastOffx=content.map.offx;
}} );
};
//打开雷达事件
Sun.SCradar.prototype.openCradarHand=function(json){
if(JSON.parse(json).panoid!=this.obj.panoid){
this.close();
}else{
this.open();
this.moveToCenter();
}
};
//创建元素
Sun.SCradar.prototype.createCanvas=function(){
this.canvas =document.createElement("canvas");
this.canvas.style.position="absolute";
this.canvas.width=this.winWidth;
this.canvas.height=this.winWidth;
this.canvas.setAttribute("data-id","SCradar");  //标识此对象
this.cirNumber=this.canvas.width*0.5;
//this.canvas.style.backgroundColor="#ff0000";
this.ctx = this.canvas.getContext("2d");
/*this.grad  = this.ctx.createLinearGradient(0,0, 140,0);
this.grad.addColorStop(0,'rgb(192, 80, 77)');    // 红
this.grad.addColorStop(0.5,'rgb(155, 187, 89)'); // 绿
this.grad.addColorStop(1,'rgb(128, 100, 162)');  // 紫*/
this.grad="rgba(255,255,255,0.3)";
};
//进行绘制.设置角度及fov
Sun.SCradar.prototype.update = function () {

var isClickArea = false;
this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
this.ctx.save();
this.ctx.translate(this.cirNumber, this.cirNumber);
//console.warn("角度:",this.angle);
var rotateAngle = this.angle - this.fov * 0.5;
this.ctx.rotate(this.degToRad(rotateAngle));
this.ctx.fillStyle = this.grad;
this.ctx.strokeStyle = "rgba(255,255,255,0.7)";
this.ctx.lineWidth = 0.7;
this.ctx.beginPath();
this.ctx.arc(0, 0, this.cirNumber, this.degToRad(this.fov), this.degToRad(360), true);
this.ctx.lineTo(0, 0);
this.ctx.closePath();
this.ctx.fill();        //绘制填充色
this.ctx.stroke();      //绘制边框色
this.ctx.restore();
if (this.isClose == true) {
this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}
isClickArea = this.ctx.isPointInPath(this.cp.x, this.cp.y);
//圆心
/*var radial = this.ctx.createRadialGradient(75,75,55,55,55,0);
radial.addColorStop(0,'#fff');
radial.addColorStop(0.5,'#ff0');
radial.addColorStop(0.9,'#555');
radial.addColorStop(1,'#f00');*/
this.ctx.save();
this.ctx.fillStyle = this.circleFillColor;
this.ctx.beginPath();
this.ctx.arc(this.cirNumber, this.cirNumber, 10, 0, Math.PI * 2, true);
this.ctx.lineTo(0, 0);
this.ctx.closePath();
this.ctx.fill();

return isClickArea;
};
//angle,fov改变事件
Sun.SCradar.changeEvent="changeEvent";
//点击了雷达空白区域.需要穿透
Sun.SCradar.pointNoneEvent="pointNodeEvent";
//雷达打开事件
Sun.SCradar.openEvent="openEvent";
//点中雷达圆心事件
Sun.SCradar.pointCenterEvent="pointCenterEvent";
/**
* Created by sunjian on 2015/5/20.
*/
//html5地图
Sun.Smap=function(pobj,imgurl,w,h,domid){
if(w!=undefined&&h==undefined){
alert("未设置容器的高度");
return;
}
if(w==undefined&&h!=undefined){
alert("未设置容器的宽度");
return;
}
Sun.SObject.call(this);
this.pobj=pobj;
this.domid=domid;
this.div=null;
this.canvas=null;
this.ctx=null;
this.winWidth=undefined;
this.winHeight=undefined;
this.img=null;
if(w!=undefined&&h!=undefined){
this.winWidth=Number(w);
this.winHeight=Number(h);
}
this.isMouseDown=false;
this.initDownX=0;
this.initDownY=0;
this.startDragQCX=0;
this.startDragQCY=0
this.imgW=0;
this.imgH=0;
this.lastOffx=0;
this.lastOffy=0;
this.cradarMoveEffect=true;    //是否开启雷达平移动画
this.scaleSleep=10;      //缩放速度
this.openIconUrl=null; //地图缩放图标
this.closeIconUrl=null;
if(pobj.showIcon=="true"){
this.showIcon=true;
}else if(pobj.showIcon=="false"){
this.showIcon=false;
}else{
this.showIcon=true;
}
this.createCanvas();
Object.defineProperties(this,{
_dom:{
value:this.div,
writable:false
},
dom:{
get:function(){
return this.div;
}
},
_left:{
value:0,
writable:true
},
left:{
get:function(){
return this._left;
},
set:function(newValue){
newValue=Number(newValue);
this._left=newValue;
this.dom.style.left=newValue+"px";
}
},
_top:{
value:0,
writable:true
},
top:{
get:function(){
return this._top;
},
set:function(newValue){
newValue=Number(newValue);
this._top=newValue;
this.dom.style.top=newValue+"px";
}
},
_right:{
value:0,
writable:true
},
right:{
get:function(){
return this._right;
},
set:function(newValue){
newValue=Number(newValue);
this._right=newValue;
this.dom.style.right=newValue+"px";
}
},
_bottom:{
value:0,
writable:true
},
bottom:{
get:function(){
return this._bottom;
},
set:function(newValue){
newValue=Number(newValue);
this._bottom=newValue;
this.dom.style.bottom=newValue+"px";
}
},
_offx:{
value:0,
writable:true
},
offx:{
get:function(){
return this._offx;
},
set:function(newValue){
this._offx=Number(newValue);
}
},
_offy:{
value:0,
writable:true
},
offy:{
get:function(){
return this._offy;
},
set:function(newValue){
this._offy=Number(newValue);
}
}
});
//添加事件
this.addEvent=function(){
var con=this;
if(this.div.addEventListener){
this.div.addEventListener('DOMMouseScroll',function(e){
con.clickHand(e);
},false);
this.div.addEventListener("mousedown",function(e){
con.clickHand(e);
},false);
this.div.addEventListener("mouseup",function(e){
con.clickHand(e);
},false);
this.div.addEventListener("mousemove",function(e){
con.clickHand(e);
},false);
this.div.addEventListener("mouseout",function(e){
con.clickHand(e);
},false);
this.div.addEventListener("touchstart",function(e){
con.clickHand(e);
return false;
},false);
this.div.addEventListener("touchmove",function(e){
con.clickHand(e);
return false;
},false);
this.div.addEventListener("touchend",function(e){
con.clickHand(e);
return false;
},false);
this.div.addEventListener("gesturechange",function(e){
con.clickHand(e);
return false;
},false);
this.div.addEventListener("gestureend",function(e){
con.clickHand(e);
return false;
},false);
//-------------------------------------新方法.使用touch.js兼容库 用于安卓端
touch.on(this.dom,"pinchout",function(ev){
con.clickHand(ev);
});
touch.on(this.dom,"pinchin",function(ev){
con.clickHand(ev);
});
}//W3C
this.div.onmousewheel=this.canvas.onmousewheel=function(e){
con.clickHand(e);
};//IE/Opera/Chrome
}
//事件处理
this.clickHand=function(e){
var cp=null;
switch(e.type){
case "mousedown":{
this.isMouseDown=true;
cp=this.getLocationPoint(e);
this.initDownX=cp.x;
this.initDownY=cp.y;
e.stopPropagation();        //阻止向下传递事件,避免转动全景
break;
}
case "mousemove":{
if(this.isMouseDown==true){
cp=this.getLocationPoint(e);
var dx=cp.x;
var dy=cp.y;
if(this.cradarMoveEffect==true){
this.drawImage(dx,dy);
}
this.startDragQCX= cp.x;
this.startDragQCY= cp.y;
this.dispatchEventListener(Sun.Smap.DragMapEvent);      //派发事件
}
break;
}
case "mouseup":{
this.isMouseDown=false;
this.lastOffx=this.offx;
this.lastOffy=this.offy;
this.dispatchEventListener(Sun.Smap.DragMapUpEvent);      //派发事件
break;
}
case "mouseout":{
this.isMouseDown=false;
this.lastOffx=this.offx;
this.lastOffy=this.offy;
break;
}case "DOMMouseScroll":{
this.scaleImage(e);
e.stopPropagation();        //阻止向下传递事件,避免转动全景
break;
}case "touchstart":{
e.preventDefault();
this.isMouseDown=true;
cp=this.getLocationPoint(e);
this.initDownX=cp.x;
this.initDownY=cp.y;
e.stopPropagation();        //阻止向下传递事件,避免转动全景
break;
}case "touchmove":{
if(this.isMouseDown==true){
var touch= e.touches;
if(touch.length==1){
e.stopPropagation();
e.stopImmediatePropagation();
e.preventDefault();
cp=this.getLocationPoint(e);
var dx=cp.x;
var dy=cp.y;
this.drawImage(dx,dy);
this.startDragQCX= cp.x;
this.startDragQCY= cp.y;
this.dispatchEventListener(Sun.Smap.DragMapEvent);      //派发事件
}
}
break;
}case "touchend":{
if(this.isMouseDown==true){
e.stopPropagation();
e.stopImmediatePropagation();
e.preventDefault();
this.isMouseDown=false;
this.lastOffx=this.offx;
this.lastOffy=this.offy;
this.dispatchEventListener(Sun.Smap.DragMapUpEvent);      //派发事件
}
break;
}case "gesturechange":{
this.isMouseDown=false;
e.stopPropagation();
var num = e.scale;
if (num > 1) {
this.scaleRunMap(1,5);
}else{
this.scaleRunMap(0,5);
}
break;
}case "gestureend":{
e.preventDefault();
e.stopPropagation();
break;
}case "pinchout":{
this.isMouseDown=false;
//e.stopPropagation();
//放大操作
this.scaleRunMap(1,5);
e.stopPropagation();        //阻止向下传递事件,避免转动全景
break;
}case "pinchin":{
this.isMouseDown=false;
//缩小操作
this.scaleRunMap(0,5);
e.stopPropagation();        //阻止向下传递事件,避免转动全景
break;
}
}
};
//获取本对象的点击坐标
this.getLocationPoint=function(e){
var result=null;
if(this.browser.versions.mobile){
if(this.browser.versions.android){
//处理安卓设备
var touch= e.touches[0];
var a=touch.clientX-e.currentTarget.getBoundingClientRect().left;
var b=touch.clientY-e.currentTarget.getBoundingClientRect().top;
result={x:a,y:b,type:0};
}else if(this.browser.versions.iPhone||this.browser.versions.iPad){
result=this.getEventPosition(e);
result.type=1;
}else{
//alert("移动平台判断异常");
result=this.getEventPosition(e);
result.type=1;
}
}else{
result=this.getEventPosition(e);
}
return result;
};
//绘制渲染
this.drawImage=function(dx,dy){
if(dx>this.startDragQCX){
this.offx=this.lastOffx+(dx-this.initDownX);
}else{
this.offx=this.lastOffx-(this.initDownX-dx);
}
if(dy>this.startDragQCY){
this.offy=this.lastOffy+(dy-this.initDownY);
}else{
this.offy=this.lastOffy-(this.initDownY-dy);
}
this.ctx.clearRect(0,0,this.winWidth,this.winHeight);
this.ctx.drawImage(this.img,this.offx,this.offy,this.imgW,this.imgH);
};
//缩放地图
this.scaleImage=function(e){
var val;
var type;
if(e.wheelDelta){
val=e.wheelDelta;
}else if(e.detail){
val=e.detail;
}
if(val>0){
//缩小
this.scaleRunMap(0);
}else{
//放大
this.scaleRunMap(1);
}
};
//放大,缩小行图 0-缩小  1-放大
this.scaleRunMap=function(val,sleep){
if(sleep!=undefined){
this.scaleSleep=5;
}
if(val==0){
this.imgW-=this.scaleSleep;
this.imgH-=this.scaleSleep;
this.offx+=this.scaleSleep*0.5;
this.offy+=this.scaleSleep*0.5;
}else if(val==1){
this.imgW+=this.scaleSleep;
this.imgH+=this.scaleSleep;
this.offx-=this.scaleSleep*0.5;
this.offy-=this.scaleSleep*0.5;
}
this.lastOffx=this.offx;
this.lastOffy=this.offy;
this.refreshMap();
};
//刷新地图位置
this.refreshMap=function(){
this.ctx.clearRect(0,0,this.winWidth,this.winHeight);
this.ctx.drawImage(this.img,this.offx,this.offy,this.imgW,this.imgH);
this.dispatchEventListener(Sun.Smap.ScaleMapEvent,{offx:this.offx,offy:this.offy,imgW:this.imgW,imgH:this.imgH});
};
//移除
this.dispose=function(){
this.ctx.clearRect(0,0,this.winWidth,this.winHeight);
this.canvas.parentNode.removeChild(this.canvas);
this.canvas=null;
this.div.parentNode.removeChild(this.div);
this.div=null;
};
//添加雷达
this.addCradar=function(arr){
var content=this;
for(var i=0;i<arr.length;i++){
var obj=arr[i];
if(!obj.hasOwnProperty("x")||!obj.hasOwnProperty("y")||!obj.hasOwnProperty("panoid")){
alert("json中无x,y,panoid");
break;
}
var cra=new Sun.SCradar(25,this,obj);//150
this.addElement(cra);
}
};
//设置当前活动雷达点
this.setPanoId=function(panoid){
this.dispatchEventListener(Sun.SCradar.openEvent,JSON.stringify({target:"SCradar",type:Sun.SCradar.openEvent,panoid:panoid}));
};
//设置当前活动雷达点的角度
this.setAngle=function(angle){
this.dispatchEventListener(Sun.Smap.SetCradarAngleEvent,{angle:angle});
};
//设置当前活动雷达点的视野fov
this.setFov=function(fov){
this.dispatchEventListener(Sun.Smap.SetCradarAngleEvent,{fov:fov});
}
//来自雷达的事件
this.pointNoneEventHand=function(e){
return;
if(e=="mousedown"){
var downevt=document.createEvent("HTMLEvents");
downevt.initEvent("mousedown",true,true);
this.canvas.dispatchEvent(downevt);
}else if(e=="mousemove"){
var moveevt=document.createEvent("HTMLEvents");
moveevt.initEvent("mousemove",true,true);
this.canvas.dispatchEvent(moveevt);
}else if(e=="mouseup"){
var upevt=document.createEvent("HTMLEvents");
upevt.initEvent("mouseup",true,true);
this.canvas.dispatchEvent(upevt);
}else if(e=="mouseout"){
var outevt=document.createEvent("HTMLEvents");
outevt.initEvent("mouseout",true,true);
this.canvas.dispatchEvent(outevt);
}
};
//添加对象到地图中
this.addElement=function(view){
if(view.hasOwnProperty("dom")==false){
alert("找不到dom元素");
}
//this.div.appendChild(view.dom);
this.condiv.appendChild(view.dom);
};
//是否开启cradar平移动画
this.setCradarMoveEffect=function(flage){
this.cradarMoveEffect=flage;
};
};
//继承SObject原型链
Sun.Smap.prototype=Object.create(Sun.SObject.prototype);
Sun.Smap.prototype.constructor=Sun.Smap;
//下载地图
Sun.Smap.prototype.downImage=function(imgurl){
var content=this;
if(imgurl instanceof HTMLImageElement){
this.img=imgurl;
this.downImageComplete();
}else{
this.img=new Image();
this.img.onload=function(e){
content.downImageComplete();
};
this.img.onerror=function(e){
alert("404:"+imgurl);
};
this.img.onabort=function(e){
Sun.Alert.show(imgurl+"已中断.请重新载入");
};
this.img.setAttribute("src",imgurl);
}
};
Sun.Smap.prototype.downImageComplete=function(){
this.imgW=this.img.width;
this.imgH=this.img.height;
if(this.winWidth==undefined&&this.winHeight==undefined){
this.winWidth=this.imgW;
this.winHeight=this.imgH;
this.canvas.width=this.imgW;
this.canvas.height=this.imgH;
}else{
this.canvas.width=this.winWidth;
this.canvas.height=this.winHeight;
}
this.div.style.width=this.winWidth+"px";
this.div.style.height=this.winHeight+"px";
this.ctx.drawImage(this.img,0,0);
if((this.imgW==this.winWidth&&this.imgH==this.winHeight)||(this.imgW<this.winWidth&&this.imgH<this.winHeight)){
this.setCradarMoveEffect(false);
}else{
this.setCradarMoveEffect(true);
}
this.addEvent();
this.dispatchEventListener(Sun.Smap.InitMapCompleteEvent);       //地雷初始化完毕
};
//创建元素
Sun.Smap.prototype.createCanvas=function(){
this.canvas =document.createElement("canvas");
this.canvas.setAttribute("data-id","SMap");     //标识此对象
this.canvas.style.position="absolute";
//this.canvas.style.backgroundColor="#cccccc";
this.canvas.style.top="0px";
this.canvas.style.left="0px";
this.ctx = this.canvas.getContext("2d");
this.div=document.createElement("div");         //主窗口容器
this.condiv=document.createElement("div");      //雷达点div容器
this.div.style.position="absolute";
//this.div.style.overflow="hidden";
//this.canvas.style.backgroundColor="#000000";
this.canvas.style.backgroundColor="rgba(0,0,0,0.5)";
this.div.appendChild(this.canvas);
this.div.id="sampid";
//创建雷达容器div
this.condiv.style.position="absolute";
this.condiv.style.left="0px";
this.condiv.style.top="0px";
this.condiv.style.overflow="hidden";
this.condiv.style.width=this.winWidth+"px";
this.condiv.style.height=this.winHeight+"px";
this.div.appendChild(this.condiv);
this.createToolView();
};
//设置缩进图标
Sun.Smap.prototype.setIcon=function(openIcon,closeIcon){
this.openIconUrl=openIcon;
this.closeIconUrl=closeIcon;
if(this.openIconUrl=="null") this.openIconUrl=null;
};
//创建缩进操作界面
Sun.Smap.prototype.createToolView=function(){
if(this.showIcon==false) return;
this.setIcon(this.pobj.openIcon,this.pobj.closeIcon);
if(this.openIconUrl!=null){
var img=new Image();
img.onload=function(){
img.style.position="absolute";
img.style.left=(0-img.width)+"px";
img.style.top="0px";
img.style.cursor="pointer";
this.div.appendChild(img);
this.scaleBtnClick(img);
}.bind(this);
img.src=this.openIconUrl;
}else{
var div=document.createElement("div");
div.style.position="absolute";
div.style.left="-50px";
div.style.top="0px";
div.style.width="50px";
div.style.height="50px";
div.style.backgroundColor="#FF0000";
div.style.cursor="pointer";
this.div.appendChild(div);
this.scaleBtnClick(div);
}
};
//缩放按钮点击事件
Sun.Smap.prototype.scaleBtnClick=function(target){
this.registClick(target, function () {
if (this.right >= 0) {
TweenMax.to(this, 0.5, { right: -this.winWidth, ease: Quart.easeOut });
} else {
TweenMax.to(this, 0.5, { right: 0, ease: Quart.easeOut });
}
} .bind(this), false);

};
//地图初始化完毕(初始完才可以添加雷达)
Sun.Smap.InitMapCompleteEvent="InitMapCompleteEvent";
//缩放地图时抛出事件
Sun.Smap.ScaleMapEvent="ScaleMapEvent";
//平移地图时抛出事件
Sun.Smap.DragMapEvent="DragMapEvent";
//平移地图时鼠标松开事件
Sun.Smap.DragMapUpEvent="DragMapUpEvent";
//设置雷达的角度,fov
Sun.Smap.SetCradarAngleEvent="SetCradarAngleEvent";
//点击雷达鼠标事件.抛给外边页面进行处理
Sun.Smap.clickCradarEvent="clickCradarEvent";
/**
* Created by sunjian on 2015/9/17.
*/
Sun.PopUpVideo=function(pscene,info){
Sun.SObject.call(this);
this.pscene=pscene;
this.info=info;
this.div=null;
this.closediv=null;
this.video=null;
this.start();
};
Sun.PopUpVideo.prototype=Object.create(Sun.SObject.prototype);
Sun.PopUpVideo.prototype.constructor=Sun.PopUpVideo;
//开始运行
Sun.PopUpVideo.prototype.start=function(){
this.video=document.createElement("video");
this.video.autoplay=true;
this.video.metadata="metadata";
this.video.controls="controls";
this.div=document.createElement("div");
this.div.style.width="100%";
this.div.style.height="100%";
this.div.style.display="table";
this.div.style.position="absolute";
this.div.style.top="0px";
this.div.style.left="0px";
this.div.style.backgroundColor="rgba(0,0,0,0.5)";
this.div.style.textAlign="center";
var videodiv=document.createElement("div");
videodiv.style.verticalAlign="middle";
videodiv.style.display="table-cell";
videodiv.appendChild(this.video);
this.div.appendChild(videodiv);
var firstDom=this.pscene.renderer.domElement.parentNode.lastChild;
this.pscene.renderer.domElement.parentNode.insertBefore(this.div,firstDom);
this.video.src="http://www.w3school.com.cn/i/movie.ogg";
this.video.src="http://www.w3school.com.cn/i/movie.mp4";
this.closediv=document.createElement("img");
this.closediv.setAttribute("src","script/asset/close.png");
this.closediv.style.position="absolute";
this.closediv.style.top="0px";
this.closediv.style.right="0px";
this.closediv.style.cursor="pointer";
this.closediv.style.zIndex=100;
this.div.appendChild(this.closediv);
this.registClick(this.closediv, function (e) {
this.div.parentNode.removeChild(this.div);
} .bind(this), false);

};
/**
* Created by sunjian on 2015/9/23.
*/
Sun.PopUpImage=function(pscene,info){
Sun.SObject.call(this);
this.pscene=pscene;
this.info=info;
this.div=null;
this.closediv=null;
this.img=null;
this.start();
};
Sun.PopUpImage.prototype=Object.create(Sun.SObject.prototype);
Sun.PopUpImage.prototype.constructor=Sun.PopUpImage;
//开始运行
Sun.PopUpImage.prototype.start = function () {
this.div = document.createElement("div");
this.div.style.width = "100%";
this.div.style.height = "100%";
this.div.style.display = "table";
this.div.style.position = "absolute";
this.div.style.top = "0px";
this.div.style.left = "0px";
this.div.style.backgroundColor = "rgba(0,0,0,0.5)";
this.div.style.textAlign = "center";
this.div.style.zIndex = "99";
var imgdiv = document.createElement("div");
imgdiv.style.verticalAlign = "middle";
imgdiv.style.display = "table-cell";
this.img = document.createElement("img");
//this.img.setAttribute("src","script/server/road_ipad.png");
this.img.setAttribute("src", Sun.Constant.resourceUrl + this.info.tb_poicontent_url);
imgdiv.appendChild(this.img);
this.div.appendChild(imgdiv);
var firstDom = this.pscene.renderer.domElement.parentNode.lastChild;
this.pscene.renderer.domElement.parentNode.insertBefore(this.div, firstDom);
this.closediv = document.createElement("img");
this.closediv.setAttribute("src", "script/asset/close.png");
this.closediv.style.position = "absolute";
this.closediv.style.bottom = "0px";
this.closediv.style.right = "0px";
this.closediv.style.cursor = "pointer";
this.div.appendChild(this.closediv);
this.registClick(this.closediv, function (e) {
this.div.parentNode.removeChild(this.div);
} .bind(this), false);

};
Sun.PanoInfo=function(obj){
this.id=obj.id;
this.xxx=obj.xxx;
this.yyy=obj.yyy;
this.xx=obj.xx;
this.yy=obj.yy;
this.nd=obj.nd;
this.date=obj.date;
this.path=obj.path;
this.minp=obj.minp;
this.maxp=obj.maxp;
this.mint=obj.mint;
this.maxt=obj.maxt;
this.minz=obj.minz;
this.maxz=obj.maxz;
this.dp=obj.dp;
this.dt=obj.dt;
this.df=obj.df;
this.bw=obj.bw;
this.bh=obj.bh;
this.nw=obj.nw;
this.nh=obj.nh;
this.ns=obj.ns;
this.fw=obj.fw;
this.fh=obj.fh;
this.fs=obj.fs;
this.ew=obj.ew;
this.eh=obj.eh;
this.es=obj.es;
this.ctry=obj.ctry;
this.prov=obj.prov;
this.city=obj.city;
this.ctnm=obj.ctnm;
this.dist=obj.dist;
this.plte=obj.plte;
this.pois=obj.pois;
this.tp=obj.tp;
this.ptype=obj.ptype;
this.poi=obj.poi;
this.description=obj.description;
this.typemode=obj.typemode;
this.Streetview=obj.Streetview;
this.ver=obj.ver;
this.tuopuid=obj.tuopuid;
this.exitpano=obj.exitpano;
this.type=obj.type;
this.bak=obj.bak;
/*this.fov = 90;
this.panoid = obj.panoid;
this.northdeg = obj.nd;
this.xx = obj.xx;
this.yy = obj.yy;
this.dp = obj.dp;
this.dt = obj.dt;
this.df = obj.df;
if (obj.hasOwnProperty("path")) {
this.path = obj.path;
} else {
//alert("找不到path字段...");
}
if (obj.minz != -1) {
this.minFov = obj.minz;
} else {
this.minFov = 20;
}
if (obj.maxz != -1) {
this.maxFov = obj.maxz;
} else {
this.maxFov = 110;
}
this.playerType = obj.ptype;*/
/*this.toObject = function () {
var returnObj = new Object();
returnObj.panoid = this.panoid;
returnObj.northdeg = this.northdeg;
returnObj.maxFov = this.maxFov;
returnObj.minFov = this.minFov;
returnObj.fov = this.fov;
returnObj.xx = this.xx;
returnObj.yy = this.yy;
returnObj.path = this.path;
returnObj.playerType = this.playerType;
returnObj.dp = this.dp;
returnObj.dt = this.dt;
returnObj.df = this.df;
return returnObj;
};*/
};
/*Sun.PanoInfo.getEntity = function (obj) {
var en =new Sun.PanoInfo(obj);
return en;
};*/
/**
* Created by sunjian on 2015/6/12.
*/
Sun.PanoImgInfo=function(){
this.url=null;
this.imgtype=null;
this.placeid=null;
this.panoid=null;
this.index=null;
};
/**
* Created by sunjian on 2015/7/8.
*/
Sun.RoadFlat2DInfo=function(obj){
this.tb_panoskip_id = obj.tb_panoskip_id;
this.tb_panofrom_f = obj.tb_panofrom_f;
this.tb_place_id = obj.tb_place_id;
this.tb_panofrom_id = obj.tb_panofrom_id;
this.tb_panoto_id = obj.tb_panoto_id;
this.tb_panoto_p = obj.tb_panoto_p;
this.tb_panoto_t = obj.tb_panoto_t;
this.tb_panoto_f = obj.tb_panoto_f;
this.tb_panofrom_p = obj.tb_panofrom_p;
this.tb_panofrom_t = obj.tb_panofrom_t;
this.tb_panoskip_footurl = obj.tb_panoskip_footurl;
this.addtime = obj.addtime;
this.tb_pano_name = obj.tb_pano_name;
this.tb_pano_desc = obj.tb_pano_desc;
};
/**
* Created by sunjian on 2015/7/9.
*/
//poi info类
Sun.Poi2DInfo=function(obj){
this.tb_poi_id = obj.tb_poi_id;
this.tb_place_id = obj.tb_place_id;
this.tb_pano_id = obj.tb_pano_id;
this.tb_parent_id = obj.tb_parent_id;
this.tb_poi_number = obj.tb_poi_number;
this.tb_poi_name = obj.tb_poi_name;
this.tb_poicontent_url = obj.tb_poicontent_url;
this.tb_poiactiontype_id = obj.tb_poiactiontype_id;
this.tb_poiicondisplaytype_id = obj.tb_poiicondisplaytype_id;
this.tb_poistate_id = obj.tb_poistate_id;
this.tb_poitype_id = obj.tb_poitype_id;
this.tb_poi_desc = obj.tb_poi_desc;
this.tb_poiicon_path = obj.tb_poiicon_path;
this.tb_poiicontype_id = obj.tb_poiicontype_id;
this.tb_poi_coord = obj.tb_poi_coord;
this.tb_poifillcolor_id = obj.tb_poifillcolor_id;
this.tb_poialphval_id = obj.tb_poialphval_id;
this.tb_poiiconcustomconfig_url = obj.tb_poiiconcustomconfig_url;
this.tb_poiactionconfig_url = obj.tb_poiactionconfig_url;
this.tb_poialphval_content = obj.tb_poialphval_content;
this.tb_poialphval_content2 = obj.tb_poialphval_content2;
this.tb_poifillcolor_content = obj.tb_poifillcolor_content;
this.tb_poifillcolor_content2 = obj.tb_poifillcolor_content2;
this.tb_poialphval_bordercolor = obj.tb_poialphval_bordercolor;
this.tb_poialphval_bordercolor2 = obj.tb_poialphval_bordercolor2;
this.tb_poialphval_borderwidth = obj.tb_poialphval_borderwidth;
this.tb_poialphval_borderwidth2 = obj.tb_poialphval_borderwidth2;
this.tb_poialphval_borderalphval = obj.tb_poialphval_borderalphval;
this.tb_poialphval_borderalphval2 = obj.tb_poialphval_borderalphval2;
this.addtime = obj.addtime;
};
Sun.Poi2DInfo.action_playNone="1";
Sun.Poi2DInfo.action_playImg="2";
Sun.Poi2DInfo.action_playVideo="3";
Sun.Poi2DInfo.action_playTxt="4";
Sun.Poi2DInfo.action_playJs="5";
/**
* Created by sunjian on 2015/6/10.
*/
Sun.SceneEvent=function(){
};
//downinfo信息下载完毕  来自DownPanoInfo
Sun.SceneEvent.DownPanoInfoCompleteEvent="DownPanoInfoCompleteEvent";
//全景打开完毕 预览图下载完毕  来自Scene3D
Sun.SceneEvent.SceneCompleteEvent="SceneCompleteEvent";
//外部组件所监听的事件,全景打开完毕 预览图下载完毕  来自Scene3D
Sun.SceneEvent.SceneCompleteByOuterEvent="SceneCompleteByOuterEvent";
//角度改变事件
Sun.SceneEvent.ptzChangeEvent="ptzChangeEvent";
//所有分块图下载完毕
Sun.SceneEvent.DownAllCompleteEvent="DownAllCompleteEvent";
//下载分块图完毕 针对于url
Sun.SceneEvent.DownPanoImgCompleteEvent="DownPanoImgCompleteEvent";
//下载cavnas。转化成图片
Sun.SceneEvent.DownCanvasImgCompleteEvent="DownCanvasImgCompleteEvent";
//切换效果完成 来自SceneEffectMan
Sun.SceneEvent.SceneEffectCompleteEvent="SceneEffectCompleteEvent";
//调用showPano时触发 来自Scene3D
Sun.SceneEvent.SceneStartEvent="SceneStartEvent";
//下载数据类完成时触发 来自DownDataInfo
Sun.SceneEvent.DownDataInfoCompleteEvent="DownDataInfoCompleteEvent";
//下载xml文件数据,来自SPano
Sun.SceneEvent.DownXmlDataInfoCompleteEvent="DownXmlDataInfoCompleteEvent";
//打开长按事件 事件来自于SceneMouseControl->Spano
Sun.SceneEvent.openHoldEvent="openHoldEvent";
//自动漫游完一圈.所抛事件 来自于AutoPlayer
Sun.SceneEvent.autoPlayCompleteEvent="autoPlayCompleteEvent";
//鼠标拖动画面所抛事件.来自SceneMouseController
Sun.SceneEvent.SceneMouseMoveEvent="SceneMouseMoveEvent";
Sun.TuopuManager=function(){
this.arr = new Array();
this.setData=function(panoinfo){
if(window.localStorage){
window.localStorage.setItem(panoinfo.id,JSON.stringify(panoinfo));
}else if(window.sessionStorage){
window.sessionStorage.setItem(panoinfo.id,JSON.stringify(panoinfo));
}else{
var obj = new Object();
obj[panoinfo.id] = panoinfo;
this.arr.push(obj);
}
};
this.getData=function(key){
var json=null;
if(window.localStorage){
json=window.localStorage.getItem(key);
if(json!=null){
return JSON.parse(json);
}
}else if(window.sessionStorage){
json=window.sessionStorage.getItem(key);
if(json!=null){
return JSON.parse(json);
}
}else{
for (var i = 0; i < this.arr.length; i++) {
var obj = this.arr[i];
if (obj.hasOwnProperty(key) == true) {
json = obj[key];
break;
}
}
return json;
}
};
this.get3DData=function(panoid){
var result=new Array();
var obj=this.getData(panoid);
var arr=JSON.parse(obj.tp)[1];
for(var i=0;i<arr.length;i++){
var pan=arr[i][0];
var panoid=arr[i][1];
var obj={"pan":pan,"panoid":panoid};
result.push(obj);
}
return result;
};
};
/**
* Created by sunjian on 2015/7/10.
*/
//缓存管理类
Sun.CacheManager=function(){
};
Sun.CacheManager.arr=new Array();
Sun.CacheManager.setData=function(key,data){
if(window.localStorage){
window.localStorage.setItem(key,data);
}else if(window.sessionStorage){
window.sessionStorage.setItem(key,data);
}else{
var obj = new Object();
obj[key] = data;
Sun.CacheManager.arr.push(obj);
}
};
Sun.CacheManager.getData=function(key){
var json=null;
if(window.localStorage){
json=window.localStorage.getItem(key);
}else if(window.sessionStorage){
json=window.sessionStorage.getItem(key);
}else{
for (var i = 0; i < Sun.CacheManager.arr.length; i++) {
var obj = Sun.CacheManager.arr[i];
if (obj.hasOwnProperty(key) == true) {
json = obj[key];
break;
}
}
}
return json;
};
/**
* Created by sunjian on 2015/6/17.
*/
//场景切换效果
Sun.SceneEffectMan=function(pscene){
Sun.SObject.call(this);
this.pscene=pscene;
this.index=0;
//开启效果
this.start=function(){
this.setTilt(0,0.8);
//var f=this.getFov()-30;
//this.setFov(f,0.8);
};
//设置t值
this.setTilt=function(value,duration){
var content=this;
value=Number(value);
if(duration!=undefined&&Number(duration)>0){
TweenMax.to(this.pscene,duration,{tilt:value,ease:Quart.easeOut,onComplete:function(){
content.runCompleteHand();
}});
}else{
this.pscene.tilt=value;
}
};
//获取t值
Sun.Spano.prototype.getTilt=function(){
return this.pscene.tilt;
};
//设置f值
this.setFov=function(value,duration){
var content=this;
value=Number(value);
if(duration!=undefined&&Number(duration)>0){
TweenMax.to(this.pscene,duration,{fov:value,ease:Quart.easeOut,onComplete:function(){
content.runCompleteHand();
}});
}else{
this.pscene.fov=value;
}
};
this.runCompleteHand=function(){
this.dispatchEventListener(Sun.SceneEvent.SceneEffectCompleteEvent,"success");
};
//获取f值
this.getFov=function(){
return this.pscene.fov;
};
};
Sun.SceneEffectMan.prototype=Object.create(Sun.SObject.prototype);
Sun.SceneEffectMan.prototype.constructor=Sun.SceneEffectMan;
/**
* Created by sunjian on 2015/7/8.
*/
//下载数据类
Sun.DownDataInfo=function(url){
Sun.SObject.call(this);
this.url=url;
};
Sun.DownDataInfo.prototype=Object.create(Sun.SObject.prototype);
Sun.DownDataInfo.prototype.constructor=Sun.DownDataInfo;
Sun.DownDataInfo.prototype.start=function(){
var content=this;
var reqUrl=this.url;
$.ajax({
url: reqUrl,
type: 'get',
async: false,
dataType: 'text',
success: function (data, textStatus) {
if(data==""){
content.dispatchEventListener(Sun.SceneEvent.DownDataInfoCompleteEvent,null);
}else{
content.dispatchEventListener(Sun.SceneEvent.DownDataInfoCompleteEvent,JSON.parse(data));
}
},
error: function (data) {
alert("异常:"+reqUrl);
}
});
};
/**
* Created by sunjian on 2015/6/10.
*/
Sun.DownPanoInfo=function(placeid,panoid){
Sun.SObject.call(this);
this.placeid=placeid;
this.panoid=panoid;
};
Sun.DownPanoInfo.prototype=Object.create(Sun.SObject.prototype);
Sun.DownPanoInfo.prototype.constructor=Sun.DownPanoInfo;
Sun.DownPanoInfo.prototype.start=function(){
var content=this;
var url=Sun.Constant.disposeUrl(Sun.Constant.downPanoInfoUrl,[this.panoid,this.placeid]);
var reqUrl=Sun.Constant.getLocationUrl(url);
$.ajax({
url: reqUrl,
type: 'get',
async: true,
dataType: 'text',
success: function (data, textStatus) {
content.dispatchEventListener(Sun.SceneEvent.DownPanoInfoCompleteEvent,JSON.parse(data));
},
error: function (data) {
alert("异常:"+reqUrl);
}
});
};
/**
* Created by sunjian on 2015/6/12.
*/
//下载资源图片类 isPrevice-是否是预览图 true-是  false-否  underfind-否
Sun.DownPanoImg=function(panoimginfo,isPrevice){
Sun.SObject.call(this);
this.isPre=isPrevice;
this.info=panoimginfo;
this.img=new Image();
if(this.isPre==true){
this.flage=true;
}else{
if(Detector.webgl==true){
this.flage=true;
}else{
this.flage=false;
}
}
this.start=function(){
var content=this;
if(this.flage==true){
this.img.addEventListener("load",function fun(e){
var par={info:content.info,img:content.img};
if(content.isPre==undefined){
Sun.DownPanoImg.currentCount++;
if(Sun.DownPanoImg.currentCount==Sun.DownPanoImg.downCount){
par.status="success";
}
}
content.img.removeEventListener("load",fun);
content.dispatchEventListener(Sun.SceneEvent.DownPanoImgCompleteEvent,par);
});
this.img.onerror=function(e){
//alert("下载错误");
};
this.img.onabort=function(e){
//alert("下载错误");
};
if(this.isPre==undefined){
setTimeout(function(){
content.img.setAttribute("src",content.info.url);
},this.getRandom(1000,2000));
}else{
content.img.setAttribute("src",content.info.url);
}
}else{
//直接把url送往css3下载渲染
setTimeout(function(){
Sun.DownPanoImg.currentCount++;
var par={info:content.info,img:content.info.url};
if(Sun.DownPanoImg.currentCount==Sun.DownPanoImg.downCount){
par.status="success";
}
content.dispatchEventListener(Sun.SceneEvent.DownPanoImgCompleteEvent,par);
},this.getRandom(100,1000));
}
};
};
Sun.DownPanoImg.prototype=Object.create(Sun.SObject.prototype);
Sun.DownPanoImg.prototype.constructor=Sun.DownPanoImg;
//当前下载数量
Sun.DownPanoImg.currentCount=0;
//总下载图片数量   已在Scene3D中赋值
Sun.DownPanoImg.downCount=0;
/**
* Created by sunjian on 2015/6/15.
*/
//下载类。把canvas下载成img对象
Sun.DownCanvasDataImg=function(oldimg){
Sun.SObject.call(this);
Sun.DownCanvasDataImg.currentCount=0;
this.oldimg=oldimg;
this.start=function(){
for (var i = 1; i <= 6; i++) {
var precanvas=document.createElement("canvas");
precanvas.width = 256;
precanvas.height = 256;
var to_x = (i - 1) * 256;
var ctx = precanvas.getContext("2d");
ctx.drawImage(this.oldimg, to_x, 0, 256, 256, 0, 0, 256, 256);
this.run(precanvas,i);
}
};
this.run=function(can,index){
var content=this;
var img=new Image();
img.setAttribute("data-index",index);
img.addEventListener("load",function fun(e){
img.removeEventListener("load",fun);
content.loadHand(e.currentTarget);
});
img.setAttribute("src",can.toDataURL());
};
//下载图片完毕
this.loadHand=function(newimg){
var obj={img:newimg,index:newimg.getAttribute("data-index"),status:"wait"};
Sun.DownCanvasDataImg.currentCount++;
if(Sun.DownCanvasDataImg.currentCount==Sun.DownCanvasDataImg.downCount){
//6张预览图处理完毕
obj.status="success";
}
this.dispatchEventListener(Sun.SceneEvent.DownCanvasImgCompleteEvent,obj);
};
};
Sun.DownCanvasDataImg.prototype=Object.create(Sun.SObject.prototype);
Sun.DownCanvasDataImg.prototype.constructor=Sun.DownCanvasDataImg;
//当前下载数量
Sun.DownCanvasDataImg.currentCount=0;
//总下载图片数量
Sun.DownCanvasDataImg.downCount=6;
/**
* Created by sunjian on 2015/7/10.
*/
//读取xml文件
Sun.DownXMLDataInfo=function(url){
Sun.SObject.call(this);
this.url=url;
};
Sun.DownXMLDataInfo.prototype=Object.create(Sun.SObject.prototype);
Sun.DownXMLDataInfo.prototype.constructor=Sun.DownXMLDataInfo;
Sun.DownXMLDataInfo.prototype.start=function(){
var me=this;
$.ajax({
url:me.url,
type:"get",
async:false,
dataType:"xml",
success:function(xml){
var root = $(xml).find("root");
Sun.Constant.downPanoInfoUrl=root.children("getpanoinfo").text();
Sun.Constant.downRoadFlat2DUrl=root.children("getfootlist").text();
Sun.Constant.downPoi2DUrl=root.children("getpoilist").text();
Sun.Constant.downIphoneImgUrl=root.children("iphonepanoimg").text();
Sun.Constant.resourceUrl=root.children("resourceurl").text();
Sun.CacheManager.setData("downPanoInfoUrl",Sun.Constant.downPanoInfoUrl);     //加入缓存
Sun.CacheManager.setData("downRoadFlat2DUrl",Sun.Constant.downRoadFlat2DUrl);
Sun.CacheManager.setData("downPoi2DUrl",Sun.Constant.downPoi2DUrl);
Sun.CacheManager.setData("downIphoneImgUrl",Sun.Constant.downIphoneImgUrl);
Sun.CacheManager.setData("resourceUrl",Sun.Constant.resourceUrl);
me.dispatchEventListener(Sun.SceneEvent.DownXmlDataInfoCompleteEvent,"success");
},
error:function(data){
//Sun.Alert.show("访问:"+me.url+"出错");
alert("访问"+me.url+"出错");
}
});
};
Sun.SceneMouseController=function(pscene){
Sun.SObject.call(this);
this.pscene=pscene;
this.divdom=this.pscene.divdom;
this.mousespeed=80;     //鼠标转速
this.tempX=0;
this.tempY=0;
this.ismove=false;
this.textid=null;
this.endvalLon=0;
this.endvalTile=0;
this.xid=null;
this.yid=null;
this.init();
};
Sun.SceneMouseController.prototype=Object.create(Sun.SObject.prototype);
Sun.SceneMouseController.prototype.constructor=Sun.SceneMouseController;
//初始化事件
Sun.SceneMouseController.prototype.init=function(){
var ver=this.checkVersion();
var content=this;
if(ver=="pc"){
window.addEvent(this.divdom,"mousedown",function(e){
if(e.button!=0) return;
content.onDocumentMouseDown(e);
},false);
window.addEvent(this.divdom,"mousemove",function(e){
content.onDocumentMouseMove(e);
},false);
window.addEvent(this.divdom,"mouseup",function(e){
content.onDocumentMouseUp(e);
},false);
window.addEvent(this.divdom,"mouseout",function(e){
//content.onDocumentMouseOut(e);
},false);
window.addEvent(this.divdom,"mousewheel",function(e){
content.onDocumentMouseWheel(e);
},false);
window.addEvent(this.divdom,"DOMMouseScroll",function(e){
content.onDocumentMouseWheelFireFox(e);
},false);
window.addEventListener("dblclick",function(e){
e.stopPropagation();
e.preventDefault();
content.fullScreenHand(e);
},false);
}else{
window.addEvent(this.divdom,"touchstart",function(e){
content.onDocumentTouchStart(e);
},false);
window.addEvent(this.divdom,"touchmove",function(e){
content.onDocumentTouchMove(e);
},false);
window.addEvent(this.divdom,"touchend",function(e){
content.onDocumentTouchEnd(e);
},false);
touch.on(this.divdom,"pinchout",function(e){
content.dispatchPTZChange();
content.pscene.fov-=0.8;
});
touch.on(this.divdom,"pinchin",function(e){
content.dispatchPTZChange();
content.pscene.fov+=0.8;
});
touch.on(this.divdom,"pinchstart",function(e){
content.startSceneHand();
e.stopPropagation();
});
touch.on(this.divdom,"pinchend",function(e){
e.stopPropagation();
e.stopImmediatePropagation();
e.preventDefault();
});
touch.on(this.divdom,"doubletap",function(e){
e.stopPropagation();
e.preventDefault();
content.fullScreenHand(e);
});
touch.on(this.divdom,"hold",function(e){
e.preventDefault();
content.holdHand(e);
});
}
window.addEvent(window,"resize",function(e){
content.resizeHand(e);
},false);
window.addEvent(window,"touchstart",function(e){
e.preventDefault();
},false);
this.pscene.addEventListener(Sun.SceneEvent.SceneStartEvent,function(str){
content.startSceneHand(str);
});
if(Detector.webgl){
LGlobal.stage.addEventListener(LEvent.WINDOW_RESIZE,function(e){
LGlobal.resize(content.pscene.renderer.domElement.clientWidth,content.pscene.renderer.domElement.clientHeight);
});
}
};
//调用showPano时触发
Sun.SceneMouseController.prototype.startSceneHand=function(){
window.cancelAFrame(this.xid);
window.cancelAFrame(this.yid);
window.cancelAFrame(this.textid);
};
//全屏
Sun.SceneMouseController.prototype.fullScreenHand=function(e){
var de=document.documentElement;
if (de.requestFullscreen) {
de.requestFullscreen();
} else if (de.mozRequestFullScreen) {
de.mozRequestFullScreen();
} else if (de.webkitRequestFullScreen) {
de.webkitRequestFullScreen();
}
};
//Down事件
Sun.SceneMouseController.prototype.onDocumentMouseDown=function(event){
this.pscene.isUserInteracting = true;
this.pscene.onMouseDownMouseX = event.clientX;
this.pscene.onMouseDownMouseY = event.clientY;
this.pscene.onMouseDownLon = this.pscene.lon;
//this.pscene.onMouseDownLat = this.pscene.lat;
//this.pscene.onMouseDownLon=this.pscene.pan;
this.pscene.onMouseDownLat=this.pscene.tilt;
event.preventDefault();
};
Sun.SceneMouseController.prototype.onDocumentMouseMove=function(event){
if (this.pscene.isUserInteracting) {
this.tempX = event.clientX;
this.tempY = event.clientY;
this.ismove = true;
if (this.textid == null) {
this.run();
}
this.pscene.dispatchEventListener(Sun.SceneEvent.SceneMouseMoveEvent);
}
};
Sun.SceneMouseController.prototype.onDocumentMouseUp=function(event){
this.pscene.isUserInteracting = false;
window.cancelAFrame(this.textid);
if (this.tempX == undefined || this.tempY == undefined || this.ismove == false) {
return;
}
this.textid = null;
if (Sun.Constant.isMouseConver==true) {
this.endvalLon = this.pscene.lon + (this.tempX - this.pscene.onMouseDownMouseX) / (this.mousespeed / 10);
//this.endvalTile = this.pscene.lat - (this.tempY - this.pscene.onMouseDownMouseY) / (this.mousespeed / 10);
//this.endvalLon = this.pscene.pan + (this.tempX - this.pscene.onMouseDownMouseX) / (this.mousespeed / 10);
this.endvalTile = this.pscene.tilt - (this.tempY - this.pscene.onMouseDownMouseY) / (this.mousespeed / 10);
} else {
this.endvalLon = this.pscene.lon - (this.tempX - this.pscene.onMouseDownMouseX) / (this.mousespeed / 10);
//this.endvalTile = this.pscene.lat + (this.tempY - this.pscene.onMouseDownMouseY) / (this.mousespeed / 10);
//this.endvalLon =this.pscene.pan - (this.tempX - this.pscene.onMouseDownMouseX) / (this.mousespeed / 10) ;
this.endvalTile = this.pscene.tilt + (this.tempY - this.pscene.onMouseDownMouseY) / (this.mousespeed / 10);
}
this.TweenX();
this.TweenY();
this.ismove = false;
};
Sun.SceneMouseController.prototype.onDocumentMouseOut=function(event){
if(this.ismove==false){
this.pscene.isUserInteracting = false;
this.ismove = false;
this.startSceneHand();
}
};
//pc鼠标滚动事件
Sun.SceneMouseController.prototype.onDocumentMouseWheel=function(event){
this.startSceneHand();
if(event.wheelDelta){
if(event.wheelDelta>0){
this.pscene.fov-=3;
}else{
this.pscene.fov+=3;
}
}else if(event.wheelDelta){
if(event.wheelDelta>0){
this.pscene.fov-=3;
}else{
this.pscene.fov+=3;
}
}else if(event.detail){
if(event.detail>0){
this.pscene.fov-=3;
}else{
this.pscene.fov+=3;
}
}
this.dispatchPTZChange();
};
//pc鼠标滚动事件 针对于fireFox浏览器
Sun.SceneMouseController.prototype.onDocumentMouseWheelFireFox=function(event){
this.startSceneHand();
if(event.detail){
if(event.detail<0){
this.pscene.fov-=3;
}else{
this.pscene.fov+=3;
}
}
this.dispatchPTZChange();
};
Sun.SceneMouseController.prototype.run=function(){
if (Sun.Constant.isMouseConver==true) {
this.pscene.lon = this.pscene.lon + (this.tempX - this.pscene.onMouseDownMouseX) / this.mousespeed;
//this.pscene.lat = this.pscene.lat - (this.tempY - this.pscene.onMouseDownMouseY) / this.mousespeed;
//this.pscene.pan=this.pscene.pan+(this.tempX - this.pscene.onMouseDownMouseX) / this.mousespeed;
this.pscene.tilt=this.pscene.tilt-(this.tempY - this.pscene.onMouseDownMouseY) / this.mousespeed;
} else {
this.pscene.lon = this.pscene.lon - (this.tempX - this.pscene.onMouseDownMouseX) / this.mousespeed;
//this.pscene.lat = this.pscene.lat + (this.tempY - this.pscene.onMouseDownMouseY) / this.mousespeed;
//this.pscene.pan=this.pscene.pan-(this.tempX - this.pscene.onMouseDownMouseX) / this.mousespeed;
this.pscene.tilt=this.pscene.tilt+ (this.tempY - this.pscene.onMouseDownMouseY) / this.mousespeed;
}
this.dispatchPTZChange();
var content=this;
this.textid = window.requestAFrame(function(){
content.run();
});
};
Sun.SceneMouseController.prototype.TweenX=function(){
this.pscene.lon += (this.endvalLon - this.pscene.lon) / 10;
//this.pscene.pan += (this.endvalLon - this.pscene.pan) / 10;
if (this.tempX >= this.pscene.onMouseDownMouseX) {
if (Sun.Constant.isMouseConver) {
if (Math.round(this.pscene.lon) >= Math.round(this.endvalLon)) this.funAX(); else this.funBX();
//if (Math.round(this.pscene.pan) >= Math.round(this.endvalLon)) this.funAX(); else this.funBX();
} else {
if (Math.round(this.pscene.lon) <= Math.round(this.endvalLon)) this.funAX(); else this.funBX();
//if (Math.round(this.pscene.pan) <= Math.round(this.endvalLon)) this.funAX(); else this.funBX();
}
} else {
if (Sun.Constant.isMouseConver) {
if (Math.round(this.pscene.lon) <= Math.round(this.endvalLon)) this.funAX(); else this.funBX();
//if (Math.round(this.pscene.pan) <= Math.round(this.endvalLon)) this.funAX(); else this.funBX();
} else {
if (Math.round(this.pscene.lon) >= Math.round(this.endvalLon)) this.funAX(); else this.funBX();
//if (Math.round(this.pscene.pan) >= Math.round(this.endvalLon)) this.funAX(); else this.funBX();
}
}
this.dispatchPTZChange();
};
Sun.SceneMouseController.prototype.TweenY=function(){
//this.pscene.lat += (this.endvalTile - this.pscene.lat) / 10;
this.pscene.tilt+= (this.endvalTile - this.pscene.tilt) / 10;
if (this.tempY <= this.pscene.onMouseDownMouseY) {
if (Sun.Constant.isMouseConver) {
//if (Math.round(this.pscene.lat) >= Math.round(this.endvalTile)) this.funAY(); else this.funBY();
if (Math.round(this.pscene.tilt) >= Math.round(this.endvalTile)) this.funAY(); else this.funBY();
} else {
//if (Math.round(this.pscene.lat) <= Math.round(this.endvalTile)) this.funAY(); else this.funBY();
if (Math.round(this.pscene.tilt) <= Math.round(this.endvalTile)) this.funAY(); else this.funBY();
}
} else {
if (Sun.Constant.isMouseConver) {
//if (Math.round(this.pscene.lat) <= Math.round(this.endvalTile)) this.funAY(); else this.funBY();
if (Math.round(this.pscene.tilt) <= Math.round(this.endvalTile)) this.funAY(); else this.funBY();
} else {
//if (Math.round(this.pscene.lat) >= Math.round(this.endvalTile)) this.funAY(); else this.funBY();
if (Math.round(this.pscene.tilt) >= Math.round(this.endvalTile)) this.funAY(); else this.funBY();
}
}
this.dispatchPTZChange();
};
Sun.SceneMouseController.prototype.funAX=function(){
window.cancelAFrame(this.xid);
};
Sun.SceneMouseController.prototype.funBX=function(){
var content=this;
this.xid = window.requestAFrame(function(){
content.TweenX();
});
};
Sun.SceneMouseController.prototype.funAY=function(){
window.cancelAFrame(this.yid);
};
Sun.SceneMouseController.prototype.funBY=function(){
var content=this;
this.yid = window.requestAFrame(function(){
content.TweenY();
});
};
//----------------------------------------------------------处理移动端
Sun.SceneMouseController.prototype.onDocumentTouchStart=function(event){
if (event.touches.length == 1) {
event.preventDefault();
this.pscene.onMouseDownMouseX = event.touches[0].pageX;
this.pscene.onMouseDownMouseY = event.touches[0].pageY;
this.pscene.onMouseDownLon = this.pscene.lon;
//this.pscene.onMouseDownLat = this.pscene.lat;
//this.pscene.onMouseDownLon = this.pscene.pan;
this.pscene.onMouseDownLat = this.pscene.tilt;
this.ismove = false;
}
};
Sun.SceneMouseController.prototype.onDocumentTouchMove=function(event){
if (event.touches.length == 1) {
event.preventDefault();
this.tempX = event.touches[0].pageX;
this.tempY = event.touches[0].pageY;
if (this.textid == null) {
this.runB();
}
this.pscene.dispatchEventListener(Sun.SceneEvent.SceneMouseMoveEvent);
}
};
Sun.SceneMouseController.prototype.onDocumentTouchEnd=function(event){
this.pscene.isUserInteracting = false;
event.preventDefault();
if (this.tempX == undefined || this.tempY == undefined || this.ismove == false) {
return;
}
if (this.ismove == true) {
window.cancelAFrame(this.textid);
this.textid = null;
if (Sun.Constant.isMouseConver) {
this.endvalLon = this.pscene.lon + (this.tempX - this.pscene.onMouseDownMouseX) / (this.mousespeed / 10);
//this.endvalTile = this.pscene.lat - (this.tempY - this.pscene.onMouseDownMouseY) / (this.mousespeed / 10);
//this.endvalLon = this.pscene.pan + (this.tempX - this.pscene.onMouseDownMouseX) / (this.mousespeed / 10);
this.endvalTile = this.pscene.tilt - (this.tempY - this.pscene.onMouseDownMouseY) / (this.mousespeed / 10);
} else {
this.endvalLon = this.pscene.lon - (this.tempX - this.pscene.onMouseDownMouseX) / (this.mousespeed / 10);
//this.endvalTile = this.pscene.lat + (this.tempY - this.pscene.onMouseDownMouseY) / (this.mousespeed / 10);
//this.endvalLon = this.pscene.pan - (this.tempX - this.pscene.onMouseDownMouseX) / (this.mousespeed / 10);
this.endvalTile = this.pscene.tilt + (this.tempY - this.pscene.onMouseDownMouseY) / (this.mousespeed / 10);
}
this.TweenX();
this.TweenY();
}
};
Sun.SceneMouseController.prototype.runB=function(){
this.ismove = true;
if (Sun.Constant.isMouseConver) {
this.pscene.lon = this.pscene.lon + (this.tempX - this.pscene.onMouseDownMouseX) / this.mousespeed;
//this.pscene.lat = this.pscene.lat - (this.tempY - this.pscene.onMouseDownMouseY) / this.mousespeed;
//this.pscene.pan = this.pscene.pan + (this.tempX - this.pscene.onMouseDownMouseX) / this.mousespeed;
this.pscene.tilt = this.pscene.tilt - (this.tempY - this.pscene.onMouseDownMouseY) / this.mousespeed;
} else {
this.pscene.lon = this.pscene.lon - (this.tempX - this.pscene.onMouseDownMouseX) / this.mousespeed;
//this.pscene.lat = this.pscene.lat + (this.tempY - this.pscene.onMouseDownMouseY) / this.mousespeed;
//this.pscene.pan = this.pscene.pan - (this.tempX - this.pscene.onMouseDownMouseX) / this.mousespeed;
this.pscene.tilt = this.pscene.tilt + (this.tempY - this.pscene.onMouseDownMouseY) / this.mousespeed;
}
this.dispatchPTZChange();
var content=this;
this.textid = window.requestAFrame(function(){
content.runB();
});
};
Sun.SceneMouseController.prototype.resizeHand=function(e){
this.pscene.divw=this.divdom.offsetWidth;
this.pscene.divh=this.divdom.offsetHeight;
this.pscene.camera.aspect = this.pscene.divw /this.pscene.divh;
this.pscene.camera.updateProjectionMatrix();
this.pscene.renderer.setSize( this.pscene.divw,this.pscene.divh);
};
//派发渲染事件
Sun.SceneMouseController.prototype.dispatchPTZChange=function(){
this.pscene.dispatchEventListener(Sun.SceneEvent.ptzChangeEvent,{pan:this.pscene.pan,tilt:this.pscene.tilt,fov:this.pscene.fov,angle:this.pscene.getRadarAngle()});
};
//长按事件
Sun.SceneMouseController.prototype.holdHand=function(e){
this.pscene.dispatchEventListener(Sun.SceneEvent.openHoldEvent,e);
};
/**
* Created by sunjian on 2015/4/16.
*/
Sun.Arrow3D=function(pscene,contain,pan,panoid){
Sun.SObject.call(this);
this.pscene=pscene;
this.contain=contain;
this.pan=pan;
this.panoid=panoid;
this.group=new THREE.Group();
this.listfun=new Object();
this.mesh1=null;
this.mesh2=null;
this.raycaster = new THREE.Raycaster();
this.mouse = new THREE.Vector2();
this.isDown=false;
this.isDownX=0;
this.isDownY=0;
this.fun=null;
this.animationId=null;
this.contain.add(this.group);
//中位圆点
this.circle=new THREE.Mesh(new THREE.PlaneBufferGeometry(50,50,50,50), new THREE.MeshPhongMaterial({color:0xffffff*Math.random()}));
this.div=null;      //方向文本容器
this.initObject();
};
Sun.Arrow3D.prototype=Object.create(Sun.SObject.prototype);
Sun.Arrow3D.prototype.constructor = Sun.Arrow3D;
//初始化对象
Sun.Arrow3D.prototype.initObject=function(){
var content=this;
var mat_Mesh01 = new THREE.MeshBasicMaterial( {
color: 0xFFFFFF,
ambient: 0xCCCCCC,
specular: 0xFFFFFF,
shininess: 15
});
if(Sun.Arrow3D.arrowGeometry!=null){
content.mesh1 = new THREE.Mesh(Sun.Arrow3D.arrowGeometry.clone(), mat_Mesh01 );
content.mesh1.position.z=-630;
content.group.add(content.mesh1);
content.setProperties();
content.createArrowText();
}else{
var loader = new THREE.JSONLoader();
loader.load("script/Mesh01.js",function ( geometry ) {
content.mesh1 = new THREE.Mesh( geometry, mat_Mesh01 );
content.mesh1.position.z=-630;
content.group.add(content.mesh1);
content.setProperties();
content.createArrowText();
if(Sun.Arrow3D.arrowGeometry==null){
Sun.Arrow3D.arrowGeometry=content.mesh1.geometry.clone();
}
});
}
};
//设置属性
Sun.Arrow3D.prototype.setProperties=function(){
var sy=-180;        //箭头高度y值
//this.mesh1.geometry.center();
this.group.position.set(this.mesh1.position.x,sy,this.mesh1.position.z);
this.group.scale.set(0.2,0.3,0.25);
var roy=this.pscene.getRadarAngle(this.pan);
roy= roy+this.pscene.currentScene.nd+180;
this.group.rotation.y=THREE.Math.degToRad(roy);
//this.mesh1.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0,sy,-550) ); //设置中心点
this.circle.rotation.x=THREE.Math.degToRad(-90);
this.circle.visible=false;
this.mesh1.add(this.circle);
this.setEvent();
//添加包围盒。便于调试
/*var hex  = 0xff0000;
var bb = new THREE.BoundingBoxHelper( this.mesh1, hex );
bb.update();
this.mesh1.add( bb );*/
};
//生成方向文本dom
Sun.Arrow3D.prototype.createArrowText=function(){
this.div=document.createElement("div");
//this.div.style.width="40px";
//this.div.style.height="40px";
this.div.style.position="absolute";
this.div.style.pointerEvents="none";
//this.div.style.background="red";
this.div.style.display="none";
this.div.style.textAlign="center";
this.div.style.WebkitBackfaceVisibility = 'hidden';
this.div.style.MozBackfaceVisibility = 'hidden';
this.div.style.oBackfaceVisibility = 'hidden';
this.div.style.backfaceVisibility = 'hidden';
this.div.style.backgroundPosition="0px 0px";
this.div.style.overflow="hidden";
this.div.style.WebkitOverflowScrolling="touch";
//this.div.style.WebkitTransformOrigin="100% 50%";
this.div.style.fontSize="15px";
this.div.style.color="#6B6965";
this.div.innerHTML=this.getDirectionStr(this.pscene.getRadarAngle(this.pan));
this.div.style.webkitUserSelect="none";
this.div.style.mozUserSelect="none";
this.div.style.outlineStyle="none";
this.div.style.msUserSelect="none";
this.div.style.khtmlUserSelect="none";
this.div.style.userSelect="none";
var firstDom=this.pscene.renderer.domElement.parentNode.firstChild;
this.pscene.renderer.domElement.parentNode.insertBefore(this.div,firstDom);
};
//添加事件
Sun.Arrow3D.prototype.setEvent=function(){
var me=this;
this.pscene.renderer.domElement.addEventListener("click", function(e){
me.clickHand(e,arguments.callee);
}, false );
document.addEventListener("touchstart", function(e){
me.mobileClickHand(e,arguments.callee);
}, false);
document.addEventListener("touchmove",function(e){
me.mobileClickHand(e,arguments.callee);
},false);
document.addEventListener("touchend",function(e){
me.mobileClickHand(e,arguments.callee);
},false);
me.listfun["fun"+me.pan]=function(){
me.dispose();
};
/*me.pscene.addEventListener(Sun.SceneEvent.SceneCompleteEvent,function func(e){
me.pscene.removeEventListener(Sun.SceneEvent.SceneCompleteEvent,func);
me.dispose();
});*/
me.pscene.addEventListener(Sun.SceneEvent.SceneCompleteEvent,me.listfun["fun"+me.pan]);
this.update();
};
//pc事件
Sun.Arrow3D.prototype.clickHand=function(event,fun){
event.preventDefault();
if(event.button!=0) return;
switch(event.type){
case "click":{
this.fun=fun;
this.mouse.x = ( event.clientX / this.pscene.renderer.domElement.clientWidth ) * 2 - 1;
this.mouse.y = - ( event.clientY / this.pscene.renderer.domElement.clientHeight ) * 2 + 1;
this.raycaster.setFromCamera( this.mouse, this.pscene.camera );
var intersects = this.raycaster.intersectObjects(this.group.children);
if (intersects.length > 0) {
this.pscene.showPano("123","201310145E852508");
}
break;
}case "mousemove":{
break;
}
}
};
//手机事件
Sun.Arrow3D.prototype.mobileClickHand=function(event,fun){
event.preventDefault();
switch(event.type){
case "touchstart":{
this.isDownX=event.touches[0].pageX;
this.isDownY=event.touches[0].pageY;
this.isDown=true;
break;
}
case "touchmove":{
if(this.isDownX!=event.touches[0].pageX){
this.isDown=false;
}
break
}
case "touchend":{
if(this.isDown==true){
this.isDown=false;
this.fun=fun;
this.mouse.x = ( this.isDownX / this.pscene.renderer.domElement.clientWidth ) * 2 - 1;
this.mouse.y = - ( this.isDownY / this.pscene.renderer.domElement.clientHeight ) * 2 + 1;
this.raycaster.setFromCamera( this.mouse, this.pscene.camera );
var intersects = this.raycaster.intersectObjects(this.group.children);
if ( intersects.length > 0 ) {
this.pscene.showPano("123","201310145E852508");
}
}
break;
}
}
};
//更新事件
Sun.Arrow3D.prototype.update=function(){
var me=this;
if(this.group==null) return;
//console.warn(this.pscene.calcHSPos(0,0));
this.group.position.x= this.pscene.camera.target.x;
this.group.position.z= this.pscene.camera.target.z;
if(this.circle.parent!=undefined&&this.div!=null){
var screenPoint=this.vector3dToScreen(this.circle.getWorldPosition());
var tox=screenPoint.x-parseFloat(this.div.offsetWidth*0.5);
var toy=screenPoint.y-10;
this.div.style.webkitTransform="translate(" + tox + "px, " + toy + "px)";
this.div.style.mozTransform="translate(" + tox + "px, " + toy + "px)";
this.div.style.oTransform="translate(" + tox + "px, " + toy + "px)";
this.div.style.transform="translate(" + tox + "px, " + toy + "px)";
if(screenPoint.z>=1){
this.div.style.display="none";
}else{
this.div.style.display="block";
}
}
me.animationId=window.requestAFrame( function(){
me.update();
});
};
//释放资源
Sun.Arrow3D.prototype.dispose=function(){
if(this.listfun==null) return;
var me=this;
window.cancelAFrame(this.animationId);
this.animationId=null;
this.div.parentNode.removeChild(this.div);
document.removeEventListener("click",me.fun);
document.removeEventListener("touchstart", me.fun);
this.mesh1.remove(me.circle);
this.group.remove(me.mesh1);
this.pscene.scene.remove(this.group);
me.mesh1=null;
//me.pscene.removeEventListener(Sun.SceneEvent.SceneCompleteEvent,me.listfun["fun"+me.rotation]);
me.listfun=null;
};
//三维坐标转屏幕坐标
Sun.Arrow3D.prototype.vector3dToScreen=function(world_vector){
var world=world_vector.clone();
var vector = world.project(this.pscene.camera);
var halfWidth = this.pscene.divw / 2;
var halfHeight = this.pscene.divh / 2;
var x = vector.x * halfWidth + halfWidth;
var y = -vector.y * halfHeight + halfHeight;
var c = new THREE.Vector3(x,y,vector.z);
return c;
};
//箭头模型文件
Sun.Arrow3D.arrowGeometry=null;
/**
* Created by sunjian on 2015/6/23.
*/
//css3版箭头
Sun.CSS3DArrow=function(pscene,contain,pan,panoid){
Sun.SObject.call(this);
this.pscene=pscene;     //pscene对象
this.contain=contain;   //scene对象
this.pan=pan; //旋转角度
this.panoid=panoid;
this.div=null;      //方向文本容器
this.can=null;      //箭头div
this.ctx=null;
this.fun=null;
this.initView();
this.createArrowText();
this.addEventHand();
};
Sun.CSS3DArrow.prototype=Object.create(Sun.SObject.prototype);
Sun.CSS3DArrow.prototype.constructor=Sun.CSS3DArrow;
//初始化视图
Sun.CSS3DArrow.prototype.initView=function(){
var table=this.contain.parentNode.parentNode;
this.can=this.createArrow(table);    //can-div
this.contain.appendChild(this.can);
var roy=this.pscene.getRadarAngle(this.pan);
roy= roy+this.pscene.currentScene.nd+180;
this.rotateObject(this.can,roy);
};
//添加事件处理
Sun.CSS3DArrow.prototype.addEventHand=function(){
var me=this;
var domobj=this.can.children[0];
touch.on(domobj,"tap",function(e){
me.clickHand(e,arguments.callee);
});
window.addEvent(domobj,"mouseover",function(){
domobj.style.cursor="pointer";
},false);
this.pscene.addEventListener(Sun.SceneEvent.SceneCompleteEvent,function(){
me.dispose();
});
};
//释放
Sun.CSS3DArrow.prototype.dispose=function(){
/*if(this.fun!=null){
touch.off(this.can.children[0],"tap",this.fun);
}*/
};
//单击事件
Sun.CSS3DArrow.prototype.clickHand=function(event,fun){
//this.fun=fun;
this.pscene.showPano("123","201310145E852508");
};
//生成方向文本dom
Sun.CSS3DArrow.prototype.createArrowText=function(){
this.div=document.createElement("div");
//this.div.style.width="40px";
//this.div.style.height="40px";
this.div.style.position="absolute";
this.div.style.pointerEvents="none";
//this.div.style.background="red";
this.div.style.display="block";
this.div.style.textAlign="center";
/*this.div.style.WebkitBackfaceVisibility = "hidden";
this.div.style.MozBackfaceVisibility = "hidden";
this.div.style.oBackfaceVisibility = "hidden";
this.div.style.backfaceVisibility = "hidden";*/
this.div.style.backgroundPosition="0px 0px";
this.div.style.overflow="hidden";
this.div.style.WebkitTransformOrigin="50% 50%";
this.div.style.oTransformOrigin="50% 50%";
this.div.style.msTransformOrigin="50% 50%";
this.div.style.mozTransformOrigin="50% 50%";
this.div.style.transformOrigin="50% 50%";
//this.div.style.fontWeight="bold";
this.div.style.fontSize="35px";
this.div.style.color="#000000";
this.div.innerHTML=this.getDirectionStr(this.pscene.getRadarAngle(this.pan));
//var firstDom=this.pscene.renderer.domElement.parentNode.children[6];
//this.pscene.renderer.domElement.parentNode.insertBefore(this.div,firstDom);
this.div.style.webkitTransform="rotateX(180deg) rotateZ(90deg)";
this.div.style.oTransform="rotateX(180deg) rotateZ(90deg)";
this.div.style.msTransform="rotateX(180deg) rotateZ(90deg)";
this.div.style.mozTransform="rotateX(180deg) rotateZ(90deg)";
this.div.style.transform="rotateX(180deg) rotateZ(90deg)";
this.can.appendChild(this.div);
this.div.style.left = (parseFloat(this.can.style.width)*0.5-parseFloat(this.div.style.fontSize)*0.5-25)+"px";    //需要设置.否则translate失效
this.div.style.top = (parseFloat(this.can.style.height)*0.5-parseFloat(this.div.style.fontSize)*0.5-5)+"px";
};
//旋转箭头到指定角度
Sun.CSS3DArrow.prototype.rotateObject=function(dom,deg){
dom.style.transform="rotate("+deg+"deg) translateZ(0)";
dom.style.mozTransform="rotate("+deg+"deg) translateZ(0)";
dom.style.webkitTransform="rotate("+deg+"deg) translateZ(0)";
dom.style.oTransform="rotate("+deg+"deg) translateZ(0)";
dom.style.msTransform="rotate("+deg+"deg) translateZ(0)";
};
//创建单个箭头
Sun.CSS3DArrow.prototype.createArrow=function(table){
var can1=document.createElement("div");
var canvas1=this.create3DCanvas(0,0,0);
can1.style.width=(parseFloat(canvas1.style.width)+50)+"px";     //箭头之间的间隔
can1.style.height=canvas1.style.height;
//can1.style.border="3px solid red";
can1.appendChild(canvas1);
can1.style.position="absolute";
//can1.style.float="left";
can1.style.transformOrigin="100% 50%";
can1.style.webkitTransformOrigin="100% 50%";
can1.style.mozTransformOrigin="100% 50%";
can1.style.oTransformOrigin="100% 50%";
can1.style.msTransformOrigin="100% 50%";
can1.style.left=(parseFloat(table.style.width)*0.5-parseFloat(can1.style.width))+"px";
can1.style.top=(parseFloat(table.style.height)*0.5-parseFloat(can1.style.height)*0.5)+"px";
//箭头延长区域
/*var space=document.createElement("div");
space.style.width="70px";
space.style.height=(parseFloat(can1.style.height)*0.5-4)+"px";
space.style.backgroundColor="#FF0000";
space.style.position="absolute";
space.style.left="170px";
space.style.top=(parseFloat(space.style.height)*0.5+4)+"px";
space.style.display="none";
can1.appendChild(space);*/
can1.style.overflow="hidden";
return can1;
};
//创建canvas
Sun.CSS3DArrow.prototype.create3DCanvas=function(rotateAngle, tranX, tranY){
var can = document.createElement("canvas");
can.width = 400;
can.height = 300;
this.ctx = can.getContext("2d");
this.ctx.beginPath();
this.ctx.lineJoin = "round";
this.ctx.lineWidth = 15;
this.ctx.fillStyle = '#ffffff';
this.ctx.strokeStyle = "#8C8680";
this.ctx.moveTo(260, 0);
this.ctx.lineTo(0, 150);
this.ctx.lineTo(260, 300);
this.ctx.lineTo(260, 220);
this.ctx.lineTo(400, 220);
this.ctx.lineTo(400, 80);
this.ctx.lineTo(260, 80);
this.ctx.fill();
//ctx.stroke();     //绘制边框
this.ctx.restore();
this.ctx.save();
can.style.width="170px";
can.style.height="150px";
return can;
};
/**
* Created by sunjian on 2015/4/16.
*/
Sun.Arrow3DContain=function(pscene,arr){
Sun.SObject.call(this);
this.pscene=pscene;
this.arr=arr;
this.table=null;
this.animationId=null;
/*this.arr.push({"rotation":this.getRandom(0,360)});
this.arr.push({"rotation":this.getRandom(0,360)});
this.arr.push({"rotation":this.getRandom(0,360)});*/
this.group=null;
this.css3Root=null;
if(Detector.webgl){
this.group=new THREE.Group();
this.pscene.scene.add(this.group);
}else{
this.group=this.createCSS3Table();
}
this.setEvent();
this.start();
};
Sun.Arrow3DContain.prototype=Object.create(Sun.SObject.prototype);
Sun.Arrow3DContain.prototype.constructor=Sun.Arrow3DContain;
//创建表格
Sun.Arrow3DContain.prototype.createCSS3Table=function(){
this.table=document.createElement("table");
//table.style.backgroundColor="#ff0000";
this.table.style.width="400px";
this.table.style.height="400px";
//table.border="5";
var tr=document.createElement("tr");
this.table.appendChild(tr);
var td=document.createElement("td");
tr.appendChild(td);
this.css3Root=new THREE.CSS3DObject(this.table);
this.css3Root.rotation.x =Math.PI/180*90;
this.pscene.scene.add(this.css3Root);
return td;
};
Sun.Arrow3DContain.prototype.start=function(){
var i=0;
if(Detector.webgl){
for(i=0;i<this.arr.length;i++){
new Sun.Arrow3D(this.pscene,this.group,this.arr[i].pan,this.arr[i].panoid);
}
}else{
for(i=0;i<this.arr.length;i++){
new Sun.CSS3DArrow(this.pscene,this.group,this.arr[i].pan,this.arr[i].panoid);
}
}
};
//添加事件
Sun.Arrow3DContain.prototype.setEvent=function(){
var me=this;
if(!Detector.webgl){
this.pscene.addEventListener(Sun.SceneEvent.SceneCompleteEvent,function(){
me.dispose();
});
this.update();
}
};
//释放资源
Sun.Arrow3DContain.prototype.dispose=function(){
window.cancelAFrame(this.animationId);
if(this.table!=null){
this.table.parentNode.removeChild(this.table);
this.pscene.scene.remove(this.css3Root);
this.table=null;
this.css3Root=null;
}
};
//更新事件 css3
Sun.Arrow3DContain.prototype.update=function(){
var me=this;
if(this.css3Root!=null){
this.css3Root.position.x=this.pscene.camera.target.x;
this.css3Root.position.y=-180;
this.css3Root.position.z=this.pscene.camera.target.z;
this.animationId=window.requestAFrame( function(){
me.update();
});
}
};
/**
* Created by sunjian on 2015/6/10.
*/
Sun.Cube3D=function(pscene){
Sun.SObject.call(this);
this.scene=pscene.scene;
this.mode="N";      //N F E
this.neg_x=null;
this.neg_y=null;
this.neg_z=null;
this.pos_x=null;
this.pos_y=null;
this.pos_z=null;
this.sideLength=2000;
this.raycaster = new THREE.Raycaster();
if(this.mode=="N"){
this.createPlaneN();
}else if(this.mode=="F"){
this.createPlaneN();
this.createPlaneF();
}else if(this.mode=="E"){
this.createPlaneN();
this.createPlaneE();
}
};
//继承SObject原型链
Sun.Cube3D.prototype=Object.create(Sun.SObject.prototype);
Sun.Cube3D.prototype.constructor=Sun.Cube3D;
//创建6张图
Sun.Cube3D.prototype.createPlaneN=function(){
var planeGeoN = new THREE.PlaneGeometry(this.sideLength*1.5,this.sideLength*1.5);
//左边
this.neg_x = new THREE.Mesh(planeGeoN,new THREE.MeshBasicMaterial( ));
//前边
this.pos_z = new THREE.Mesh(planeGeoN,new THREE.MeshBasicMaterial( ));
//右边
this.pos_x = new THREE.Mesh(planeGeoN,new THREE.MeshBasicMaterial( ));
//后边
this.neg_z = new THREE.Mesh(planeGeoN,new THREE.MeshBasicMaterial( ));
//上边
this.neg_y = new THREE.Mesh(planeGeoN,new THREE.MeshBasicMaterial( ));
//下边
this.pos_y = new THREE.Mesh(planeGeoN,new THREE.MeshBasicMaterial( ));
var halfSide=this.sideLength*0.75;
//左边
this.neg_x.position.set(halfSide,0,0);
this.neg_x.rotation.y=THREE.Math.degToRad(-90);
//右边
this.pos_x.position.set(-halfSide,0,0);
this.pos_x.rotation.y=THREE.Math.degToRad(90);
//前面
this.pos_z.position.set(0,0,halfSide);
this.pos_z.rotation.y=THREE.Math.degToRad(180);
//后边
this.neg_z.position.set(0,0,-halfSide);
this.neg_z.rotation.x=THREE.Math.degToRad(0);
//上边
this.neg_y.position.set(0,halfSide,0);
this.neg_y.rotation.z=THREE.Math.degToRad(90);
this.neg_y.rotation.x = THREE.Math.degToRad(90);
//下边
this.pos_y.position.set(0,-halfSide,0);
this.pos_y.rotation.z=THREE.Math.degToRad(-90);
this.pos_y.rotation.x = THREE.Math.degToRad(-90);
this.scene.add(this.neg_x);
this.scene.add(this.pos_x);
this.scene.add(this.pos_z);
this.scene.add(this.neg_z);
this.scene.add(this.neg_y);
this.scene.add(this.pos_y);
};
//创建每面四张图
Sun.Cube3D.prototype.createPlaneF=function(){
var w=this.neg_x.geometry.parameters.width;
var h=this.neg_x.geometry.parameters.height;
var plane=new THREE.PlaneGeometry(w*0.5,h*0.5);
var de_z=10;
for(var i=1;i<=4;i++){
var leftMesh=new THREE.Mesh(plane,new THREE.MeshBasicMaterial());
var frontMesh=new THREE.Mesh(plane,new THREE.MeshBasicMaterial());
var topMesh=new THREE.Mesh(plane,new THREE.MeshBasicMaterial());
var backMesh=new THREE.Mesh(plane,new THREE.MeshBasicMaterial());
var rightMesh=new THREE.Mesh(plane,new THREE.MeshBasicMaterial());
var bottomMesh=new THREE.Mesh(plane,new THREE.MeshBasicMaterial());
leftMesh.material.visible=false;
frontMesh.material.visible=false;
topMesh.material.visible=false;
backMesh.material.visible=false;
rightMesh.material.visible=false;
bottomMesh.material.visible=false;
var point=new THREE.Vector3();
if(i==1){
point.set(-w*0.25,w*0.25,de_z);
}else if(i==2){
point.set(w*0.25,w*0.25,de_z);
}else if(i==3){
point.set(-w*0.25,-w*0.25,de_z);
}else{
point.set(w*0.25,-w*0.25,de_z);
}
leftMesh.position.set(point.x,point.y,point.z);
frontMesh.position.set(point.x,point.y,point.z);
topMesh.position.set(point.x,point.y,point.z);
backMesh.position.set(point.x,point.y,point.z);
rightMesh.position.set(point.x,point.y,point.z);
bottomMesh.position.set(point.x,point.y,point.z);
this.neg_x.add(leftMesh);
this.pos_x.add(rightMesh);
this.pos_z.add(frontMesh);
this.neg_z.add(backMesh);
this.neg_y.add(topMesh);
this.pos_y.add(bottomMesh);
}
};
//创建每面16张图片
Sun.Cube3D.prototype.createPlaneE=function(){
var de_z=10;
var w=this.neg_x.geometry.parameters.width;
var h=this.neg_x.geometry.parameters.height;
var plane=new THREE.PlaneGeometry(w*0.25,h*0.25);
for(var i=1;i<=16;i++) {
var leftMesh = new THREE.Mesh(plane, new THREE.MeshBasicMaterial());
var frontMesh = new THREE.Mesh(plane, new THREE.MeshBasicMaterial());
var topMesh = new THREE.Mesh(plane, new THREE.MeshBasicMaterial());
var backMesh = new THREE.Mesh(plane, new THREE.MeshBasicMaterial());
var rightMesh = new THREE.Mesh(plane, new THREE.MeshBasicMaterial());
var bottomMesh = new THREE.Mesh(plane, new THREE.MeshBasicMaterial());
leftMesh.material.visible=false;
frontMesh.material.visible=false;
topMesh.material.visible=false;
backMesh.material.visible=false;
rightMesh.material.visible=false;
bottomMesh.material.visible=false;
var point = new THREE.Vector3();
if(i==1){
point.set(-(w*0.5)+plane.parameters.width*0.5,w*0.5-plane.parameters.width*0.5,de_z);
}else if(i==2){
point.set(-(w*0.5)+plane.parameters.width*1.5,w*0.5-plane.parameters.width*0.5,de_z);
}else if(i==3){
point.set(-(w*0.5)+plane.parameters.width*2.5,w*0.5-plane.parameters.width*0.5,de_z);
}else if(i==4){
point.set(-(w*0.5)+plane.parameters.width*3.5,w*0.5-plane.parameters.width*0.5,de_z);
}
else if(i==5){
point.set(-(w*0.5)+plane.parameters.width*0.5,w*0.5-plane.parameters.width*1.5,de_z);
}else if(i==6){
point.set(-(w*0.5)+plane.parameters.width*1.5,w*0.5-plane.parameters.width*1.5,de_z);
}else if(i==7){
point.set(-(w*0.5)+plane.parameters.width*2.5,w*0.5-plane.parameters.width*1.5,de_z);
}else if(i==8){
point.set(-(w*0.5)+plane.parameters.width*3.5,w*0.5-plane.parameters.width*1.5,de_z);
}
else if(i==9){
point.set(-(w*0.5)+plane.parameters.width*0.5,w*0.5-plane.parameters.width*2.5,de_z);
}else if(i==10){
point.set(-(w*0.5)+plane.parameters.width*1.5,w*0.5-plane.parameters.width*2.5,de_z);
}else if(i==11){
point.set(-(w*0.5)+plane.parameters.width*2.5,w*0.5-plane.parameters.width*2.5,de_z);
}else if(i==12){
point.set(-(w*0.5)+plane.parameters.width*3.5,w*0.5-plane.parameters.width*2.5,de_z);
}
else if(i==13){
point.set(-(w*0.5)+plane.parameters.width*0.5,w*0.5-plane.parameters.width*3.5,de_z);
}else if(i==14){
point.set(-(w*0.5)+plane.parameters.width*1.5,w*0.5-plane.parameters.width*3.5,de_z);
}else if(i==15){
point.set(-(w*0.5)+plane.parameters.width*2.5,w*0.5-plane.parameters.width*3.5,de_z);
}else{
point.set(-(w*0.5)+plane.parameters.width*3.5,w*0.5-plane.parameters.width*3.5,de_z);
}
leftMesh.position.set(point.x,point.y,point.z);
frontMesh.position.set(point.x,point.y,point.z);
topMesh.position.set(point.x,point.y,point.z);
backMesh.position.set(point.x,point.y,point.z);
rightMesh.position.set(point.x,point.y,point.z);
bottomMesh.position.set(point.x,point.y,point.z);
this.neg_x.add(leftMesh);
this.pos_x.add(rightMesh);
this.pos_z.add(frontMesh);
this.neg_z.add(backMesh);
this.neg_y.add(topMesh);
this.pos_y.add(bottomMesh);
}
};
//设置场景
Sun.Cube3D.prototype.setScene=function(img,index){
if(this.mode=="N"){
this.renderN(img,index);
}else if(this.mode=="F"){
this.renderF(img,index);
}else if(this.mode=="E"){
this.renderE(img,index);
}
};
//设置预览图层
Sun.Cube3D.prototype.setPrevice=function(img,index){
this.renderN(img,index);
};
//渲染6张图
Sun.Cube3D.prototype.renderN=function(img,index){
var mater=this.getWebGlMaterial(img);
if(index==1){
this.setVisibleF(this.neg_x,false);
this.neg_x.material=mater;
}else if(index==2){
this.setVisibleF(this.pos_z,false);
this.pos_z.material=mater;
}else if(index==3){
this.setVisibleF(this.pos_x,false);
this.pos_x.material=mater;
}else if(index==4){
this.setVisibleF(this.neg_z,false);
this.neg_z.material=mater;
}else if(index==5){
this.setVisibleF(this.neg_y,false);
this.neg_y.material=mater;
}else if(index==6){
this.setVisibleF(this.pos_y,false);
this.pos_y.material=mater;
}
};
//隐藏每面四张的材质
Sun.Cube3D.prototype.setVisibleF=function(mesh,value){
for(var i=0;i<mesh.children.length;i++){
mesh.children[i].material.visible=value;
}
};
//渲染24张图
Sun.Cube3D.prototype.renderF=function(img,index){
var mater=this.getWebGlMaterial(img);
mater.visible=true;
var a=index-1;
if(a==0||a==1||a==12||a==13){
//左边图片
if(a==0) index=0;
else if(a==1) index=1;
else if(a==12) index=2;
else if(a==13) index=3;
this.neg_x.children[index].material=mater;
//this.neg_x.children[index].material=new THREE.MeshBasicMaterial({color:0xff0000});
}
else if(a==2||a==3||a==14||a==15){
//前面图片
if(a==2) index=0;
else if(a==3) index=1;
else if(a==14) index=2;
else if(a==15) index=3;
//this.pos_z.children[index].material.map=THREE.ImageUtils.loadTexture(imgurl);
this.pos_z.children[index].material=mater;
}else if(a==4||a==5||a==16||a==17){
//右边图片
if(a==4) index=0;
else if(a==5) index=1;
else if(a==16) index=2;
else if(a==17) index=3;
//this.pos_x.children[index].material.map=THREE.ImageUtils.loadTexture(imgurl);
this.pos_x.children[index].material=mater;
}else if(a==6||a==7||a==18||a==19){
//后边图片
if(a==6) index=0;
else if(a==7) index=1;
else if(a==18) index=2;
else if(a==19) index=3;
//this.neg_z.children[index].material.map=THREE.ImageUtils.loadTexture(imgurl);
this.neg_z.children[index].material=mater;
}else if(a==8||a==9||a==20||a==21){
//上边
if(a==8) index=0;
else if(a==9) index=1;
else if(a==20) index=2;
else if(a==21) index=3;
//this.neg_y.children[index].material.map=THREE.ImageUtils.loadTexture(imgurl);
this.neg_y.children[index].material=mater;
}else if(a==10||a==11||a==22||a==23){
//下边
if(a==10) index=0;
else if(a==11) index=1;
else if(a==22) index=2;
else if(a==23) index=3;
//this.pos_y.children[index].material.map=THREE.ImageUtils.loadTexture(imgurl);
this.pos_y.children[index].material=mater;
}
};
//根据img对象生成材质
Sun.Cube3D.prototype.getWebGlMaterial=function(img){
var canvas = document.createElement("canvas");
var texture = new THREE.Texture(canvas);
var material = new THREE.MeshBasicMaterial({ map: texture, overdraw: true });
material.map.image=img;
material.map.needsUpdate=true;
return material;
};
//根据canvas生成材质
Sun.Cube3D.prototype.canvasToMaterial=function(canvas){
var texture = new THREE.Texture(canvas);
texture.needsUpdate = true;
var material = new THREE.MeshBasicMaterial({ map: texture, overdraw: true });
return material;
};
//渲染96张图
Sun.Cube3D.prototype.renderE=function(img,index){
var mater=this.getWebGlMaterial(img);
var a=index-1;
if (a==0||a==1||a==2||a==3||a==24||a==25||a==26||a==27||a==48||a==49||a==50||a==51||a==72||a==73||a==74||a==75) {
//左边面图片
if (a == 0) index = 0;
else if (a == 1) index = 1;
else if (a == 2) index = 2;
else if (a == 3) index = 3;
else if (a == 24) index = 4;
else if (a == 25) index = 5;
else if (a == 26) index = 6;
else if (a == 27) index = 7;
else if (a == 48) index = 8;
else if (a == 49) index = 9;
else if (a == 50) index = 10;
else if (a == 51) index = 11;
else if (a == 72) index = 12;
else if (a == 73) index = 13;
else if (a == 74) index = 14;
else if (a == 75) index = 15;
//this.neg_x.children[index].material.map = THREE.ImageUtils.loadTexture(imgurl);
this.neg_x.children[index].material=mater;
}
else if (a==4||a==5||a==6||a==7||a==28||a==29||a==30||a==31||a==52||a==53||a==54||a==55||a==76||a==77||a==78||a==79) {
//前面图片
if (a == 4) index = 0;
else if (a == 5) index = 1;
else if (a == 6) index = 2;
else if (a == 7) index = 3;
else if (a == 28) index = 4;
else if (a == 29) index = 5;
else if (a == 30) index = 6;
else if (a == 31) index = 7;
else if (a == 52) index = 8;
else if (a == 53) index = 9;
else if (a == 54) index = 10;
else if (a == 55) index = 11;
else if (a == 76) index = 12;
else if (a == 77) index = 13;
else if (a == 78) index = 14;
else if (a == 79) index = 15;
//this.pos_z.children[index].material.map = THREE.ImageUtils.loadTexture(imgurl);
this.pos_z.children[index].material=mater;
}else if (a==12||a==13||a==14||a==15||a==36||a==37||a==38||a==39||a==60||a==61||a==62||a==63||a==84||a==85||a==86||a==87) {
//后面图片
if (a == 12) index = 0;
else if (a == 13) index = 1;
else if (a == 14) index = 2;
else if (a == 15) index = 3;
else if (a == 36) index = 4;
else if (a == 37) index = 5;
else if (a == 38) index = 6;
else if (a == 39) index = 7;
else if (a == 60) index = 8;
else if (a == 61) index = 9;
else if (a == 62) index = 10;
else if (a == 63) index = 11;
else if (a == 84) index = 12;
else if (a == 85) index = 13;
else if (a == 86) index = 14;
else if (a == 87) index = 15;
//this.neg_z.children[index].material.map = THREE.ImageUtils.loadTexture(imgurl);
this.neg_z.children[index].material=mater;
}else if (a==8||a==9||a==10||a==11||a==32||a==33||a==34||a==35||a==56||a==57||a==58||a==59||a==80||a==81||a==82||a==83) {
//右面图片
if (a == 8) index = 0;
else if (a == 9) index = 1;
else if (a == 10) index = 2;
else if (a == 11) index = 3;
else if (a == 32) index = 4;
else if (a == 33) index = 5;
else if (a == 34) index = 6;
else if (a == 35) index = 7;
else if (a == 56) index = 8;
else if (a == 57) index = 9;
else if (a == 58) index = 10;
else if (a == 59) index = 11;
else if (a == 80) index = 12;
else if (a == 81) index = 13;
else if (a == 82) index = 14;
else if (a == 83) index = 15;
//this.pos_x.children[index].material.map = THREE.ImageUtils.loadTexture(imgurl);
this.pos_x.children[index].material=mater;
}else if (a==16||a==17||a==18||a==19||a==40||a==41||a==42||a==43||a==64||a==65||a==66||a==67||a==88||a==89||a==90||a==91) {
//上面图片
if (a == 16) index = 0;
else if (a == 17) index = 1;
else if (a == 18) index = 2;
else if (a == 19) index = 3;
else if (a == 40) index = 4;
else if (a == 41) index = 5;
else if (a == 42) index = 6;
else if (a == 43) index = 7;
else if (a == 64) index = 8;
else if (a == 65) index = 9;
else if (a == 66) index = 10;
else if (a == 67) index = 11;
else if (a == 88) index = 12;
else if (a == 89) index = 13;
else if (a == 90) index = 14;
else if (a == 91) index = 15;
//this.neg_y.children[index].material.map = THREE.ImageUtils.loadTexture(imgurl);
this.neg_y.children[index].material=mater;
}else if (a==20||a==21||a==22||a==23||a==44||a==45||a==46||a==47||a==68||a==69||a==70||a==71||a==92||a==93||a==94||a==95) {
//下面图片
if (a == 20) index = 0;
else if (a == 21) index = 1;
else if (a == 22) index = 2;
else if (a == 23) index = 3;
else if (a == 44) index = 4;
else if (a == 45) index = 5;
else if (a == 46) index = 6;
else if (a == 47) index = 7;
else if (a == 68) index = 8;
else if (a == 69) index = 9;
else if (a == 70) index = 10;
else if (a == 71) index = 11;
else if (a == 92) index = 12;
else if (a == 93) index = 13;
else if (a == 94) index = 14;
else if (a == 95) index = 15;
//this.pos_y.children[index].material.map = THREE.ImageUtils.loadTexture(imgurl);
this.pos_y.children[index].material=mater;
}
};
Sun.Cube3D.prototype.getImageIndex=function(imgurl){
var startIndex=imgurl.lastIndexOf("/")+1;
var endIndex= imgurl.lastIndexOf(".");
return imgurl.substring(startIndex,endIndex);
};
/**
* Created by sunjian on 2015/6/12.
*/
//css3d立方体对象
Sun.CSSCube3D=function(pscene){
Sun.SObject.call(this);
this.scene=pscene.scene;
this.cssobject=new Object();
this.mode="N";      //N F E
};
Sun.CSSCube3D.prototype=Object.create(Sun.SObject.prototype);
Sun.CSSCube3D.prototype.constructor=Sun.CSSCube3D;
//设置场景
Sun.CSSCube3D.prototype.setScene=function(imgurl,index){
if(this.mode=="N"){
this.renderN(imgurl,index);
}
};
//设置预览图层
Sun.CSSCube3D.prototype.setPrevice=function(img,index){
if(!this.cssobject.hasOwnProperty("index"+index)){
if(this.checkVersion()=="pc"){
img.width = 1026+1024;
}else{
img.width = 1026+256+32;
}
img.style.webkitUserSelect="none";
img.style.mozUserSelect= "none";
img.style.msUserSelect="none";
img.style.khtmlUserSelect="none";
img.style.userSelect="none";
img.style.webkitBackfaceVisibility="hidden";
img.style.mozBackfaceVisibility="hidden";
img.style.msBackfaceVisibility="hidden";
img.style.backfaceVisibility="hidden";
var result = this.setVectorHand(index);
result.img = img;
result.img.setAttribute("data-index",index);
var cssobj=new THREE.CSS3DObject(result.img);
cssobj.position.fromArray(result.position);
cssobj.rotation.fromArray(result.rotation);
this.cssobject["index"+index]=cssobj;
this.scene.add(this.cssobject["index"+index]);
}else{
//alert("存在"+img.src);
this.cssobject["index"+index].element.src=img.src;
//alert(this.cssobject["index"+index]);
}
};
//渲染N模式
Sun.CSSCube3D.prototype.renderN=function(imgurl,index){
this.cssobject["index"+index].element.src=imgurl;
};
//img对象转base64数据
Sun.CSSCube3D.prototype.imgToBase64=function(img){
var canvas = document.createElement("canvas");
canvas.width = img.width;
canvas.height = img.height;
var ctx = canvas.getContext("2d");
ctx.drawImage(img, 0, 0, img.width, img.height);
var dataURL = canvas.toDataURL("image/png");
return dataURL
};
//生成对应位置
Sun.CSSCube3D.prototype.setVectorHand=function(index){
var result=new Object();
var circleW;
if(this.checkVersion()=="pc"){
circleW=1024;
}else{
circleW=512+128+16;       //原值为512.调为1024是为避免3D箭头跑出盒子外
//circleW=512;
}
if (index == 3) {
result.position = [-circleW, 0, 0];
result.rotation = [0, Math.PI / 2, 0];
} else if (index == 1) {
result.position = [circleW, 0, 0];
result.rotation = [0, -Math.PI / 2, 0];
} else if (index == 5) {
result.position = [0,  circleW, 0];
result.rotation = [Math.PI / 2, 0, Math.PI/2];
} else if (index == 6) {
result.position = [0, -circleW, 0];
result.rotation = [ Math.PI / 2, Math.PI, Math.PI/2];
} else if (index == 2) {
result.position = [0, 0,  circleW];
result.rotation = [0, Math.PI, 0];
} else if (index == 4) {
result.position = [0, 0, -circleW];
result.rotation = [0, 0, 0];
}
return result;
};
/**
* Created by sunjian on 2015/6/11.
*/
//操作入口类
Sun.Spano=function(dom,xmlurl){
if(dom==undefined){
alert("请给Spano指定一个div容器");
return;
}
if(xmlurl==undefined||xmlurl==null||xmlurl==""){
this.xmlurl="config.xml";
}else{
this.xmlurl=xmlurl;
}
Sun.SObject.call(this);
this.ptzFun=null;
this.SceneCompleteByOuterFun=null;
this.dom=dom;
this.dom.style.position="absolute";
this.dom.style.overflow="hidden";
this.scene3d=new Sun.Scene3D(this.dom);
this.smap=null;     //地图
this.autoPlayer=new Sun.AutoPlayer(this.scene3d);
Sun.Alert.init(this.dom);
//抛给外部页面 i.html
this.scene3d.addEventListener(Sun.SceneEvent.SceneCompleteByOuterEvent,function(json){
this.dispatchEventListener(Sun.SceneEvent.SceneCompleteEvent,json);
}.bind(this));
this.scene3d.addEventListener(Sun.SceneEvent.openHoldEvent,function(e){
this.dispatchEventListener(Sun.SceneEvent.openHoldEvent,e);
}.bind(this));
this.scene3d.addEventListener(Sun.SceneEvent.autoPlayCompleteEvent,function(e){
this.dispatchEventListener(Sun.SceneEvent.autoPlayCompleteEvent,e);
}.bind(this));
this.scene3d.addEventListener(Sun.SceneEvent.ptzChangeEvent,function(e){
this.dispatchEventListener(Sun.SceneEvent.ptzChangeEvent,e);
}.bind(this));
};
Sun.Spano.prototype=Object.create(Sun.SObject.prototype);
Sun.Spano.prototype.constructor=Sun.Spano;
//打开全景
Sun.Spano.prototype.showPano=function(placeid,panoid,p,t,f){
this.loadXML();
this.scene3d.showPano(placeid,panoid,p,t,f);
};
//设置p值
Sun.Spano.prototype.setPan=function(value,duration){
value=Number(value);
if(duration!=undefined&&Number(duration)>0){
TweenMax.to(this.scene3d,duration,{pan:value,ease:Quart.easeOut});
}else{
this.scene3d.pan=value;
}
};
//获取p值
Sun.Spano.prototype.getPan=function(){
return this.scene3d.pan;
};
//设置t值
Sun.Spano.prototype.setTilt=function(value,duration){
value=Number(value);
if(duration!=undefined&&Number(duration)>0){
TweenMax.to(this.scene3d,duration,{tilt:value,ease:Quart.easeOut});
}else{
this.scene3d.tilt=value;
}
};
//获取t值
Sun.Spano.prototype.getTilt=function(){
return this.scene3d.tilt;
};
//设置f值
Sun.Spano.prototype.setFov=function(value,duration){
value=Number(value);
if(duration!=undefined&&Number(duration)>0){
TweenMax.to(this.scene3d,duration,{fov:value,ease:Quart.easeOut});
}else{
this.scene3d.fov=value;
}
};
//获取f值
Sun.Spano.prototype.getFov=function(){
return this.scene3d.fov;
};
//读取配置xml
Sun.Spano.prototype.loadXML=function(){
if(Sun.CacheManager.getData("downPanoInfoUrl")==null||Sun.CacheManager.getData("downPanoInfoUrl")==""){
var man=new Sun.DownXMLDataInfo(this.xmlurl+"?ran="+Math.random());
man.addEventListener(Sun.SceneEvent.DownXmlDataInfoCompleteEvent,function spanohand(e){
man.removeEventListener(Sun.SceneEvent.DownXmlDataInfoCompleteEvent,spanohand);
});
man.start();
}else{
Sun.Constant.downPanoInfoUrl=Sun.CacheManager.getData("downPanoInfoUrl");
Sun.Constant.downRoadFlat2DUrl=Sun.CacheManager.getData("downRoadFlat2DUrl");
Sun.Constant.downPoi2DUrl=Sun.CacheManager.getData("downPoi2DUrl");
Sun.Constant.downIphoneImgUrl=Sun.CacheManager.getData("downIphoneImgUrl");
Sun.Constant.resourceUrl=Sun.CacheManager.getData("resourceUrl");
}
};
//打开重力感应
Sun.Spano.prototype.openDeviceor=function(){
if(this.checkVersion()=="pc"){
alert("pc设备不支持重力感应");
return;
}
if (!window.DeviceOrientationEvent){
Sun.Alert.show("该设备不支持重力感应");
return;
}
this.scene3d.openDeviceor();
};
//添加地图
Sun.Spano.prototype.addMapView=function(imgurl,cradarjson,pro){
//alert(imgurl instanceof HTMLImageElement);
if(this.smap!=null){
alert("地图已存在.请先移除");
return;
}
if(Sun.Smap==undefined){
alert("请导入Smap.js文件");
return;
}
if(imgurl==undefined||imgurl==null||imgurl==""){
alert("未指定地图路径");
return;
}
this.scene3d.waitView.setValue("...");
this.scene3d.waitView.show();
var pobj=JSON.parse(pro)[0];
var winW=pobj.mapMaxWidth;
var winH=pobj.mapMaxHeight;
this.removeMapView();
//var lastDom=this.scene3d.renderer.domElement.parentNode.lastChild;
var lastDom=this.scene3d.renderer.domElement.parentNode.lastElementChild;
this.smap=new Sun.Smap(pobj,imgurl,winW,winH);
//this.smap.setIcon(pobj.openIcon,pobj.closeIcon);
if(pobj.hasOwnProperty("align")){
if(pobj.align=="bottom"){
this.smap.right=0;
this.smap.bottom=0;
if(pobj.hasOwnProperty("marginBottom")&&pobj.marginBottom!=""){
this.smap.bottom=Number(pobj.marginBottom);
}
}else if(pobj.align=="top"){
this.smap.right=0;
this.smap.top=0;
if(pobj.hasOwnProperty("marginTop")&&pobj.marginTop!=""){
this.smap.top=Number(pobj.marginTop);
}
}else if(pobj.align=="left"){
this.smap.left=0;
this.smap.top=0;
if(pobj.hasOwnProperty("marginLeft")&&pobj.marginLeft!=""){
this.smap.left=Number(pobj.marginLeft);
}
}else{
alert("align设置必须为bottom,top,left");
return;
}
}else{
this.smap.right=0;
this.smap.top=0;
}
//地图图片下载完毕事件
this.smap.addEventListener(Sun.Smap.InitMapCompleteEvent,function SPanoInitMapCompleteEvent(e){
this.smap.removeEventListener(Sun.Smap.InitMapCompleteEvent,SPanoInitMapCompleteEvent);
this.dispatchEventListener(Sun.Smap.InitMapCompleteEvent,"success");
if(cradarjson!=undefined&&cradarjson!=null&&cradarjson!=""){
this.smap.addCradar(cradarjson);                            //添加雷达点
this.smap.setPanoId(this.scene3d.currentScene.id);       //设置活动雷达点
this.smap.setAngle(this.scene3d.getRadarAngle());
this.smap.setFov(this.scene3d.fov);
}
this.scene3d.waitView.hide();
}.bind(this));
//点中雷达圆心事件
this.smap.addEventListener(Sun.SCradar.pointCenterEvent,function(json){
var obj=JSON.parse(json);
this.scene3d.showPano(null,obj.panoid);
//this.dispatchEventListener(Sun.Smap.clickCradarEvent,json);
}.bind(this));
this.smap.downImage(imgurl);
this.scene3d.renderer.domElement.parentNode.insertBefore(this.smap.dom,lastDom);
//this.scene3d.renderer.domElement.parentNode.insertAfter(this.smap.dom,lastDom);
this.smap.dom.style.zIndex=4;
//全景手动旋转事件
this.scene3d.addEventListener(Sun.SceneEvent.ptzChangeEvent,function spanoPTZChange(obj){
this.ptzFun=arguments.callee;
this.ptzChangeHand(obj);
}.bind(this));
//雷达手动旋转事件
this.smap.addEventListener(Sun.SCradar.changeEvent,function(json){
var jobj=JSON.parse(json);
this.scene3d.setPanoFromRadar(Number(jobj.angle));
this.scene3d.fov=jobj.fov;
}.bind(this));
//全景加载完成.设置雷达值
this.scene3d.addEventListener(Sun.SceneEvent.SceneCompleteByOuterEvent,function spanoSceneComplete(){
this.SceneCompleteByOuterFun=spanoSceneComplete;
if(this.smap!=null){
this.smap.setPanoId(this.scene3d.currentScene.id);      //设置活动雷达点
this.smap.setAngle(this.scene3d.getRadarAngle());
this.smap.setFov(this.scene3d.fov);
}
}.bind(this));
};
Sun.Spano.prototype.ptzChangeHand=function(obj){
if(this.smap!=null){
this.smap.setAngle(obj.angle);
this.smap.setFov(this.scene3d.fov);
}
};
//移除地图
Sun.Spano.prototype.removeMapView=function(){
if(this.smap!=null){
this.scene3d.removeEventListener(Sun.SceneEvent.ptzChangeEvent,this.ptzFun);
this.scene3d.removeEventListener(Sun.SceneEvent.ptzChangeEvent,this.SceneCompleteByOuterFun);
this.smap.dispose();
this.smap=null;
}
};
//手势反向
Sun.Spano.prototype.mouseReverHand = function () {
Sun.Alert.show("拖动方向已改变");
Sun.Constant.isMouseConver=!Sun.Constant.isMouseConver;
};
//漫游旋转
Sun.Spano.prototype.autoPlayHand = function (sleep) {
sleep = sleep * 0.01;
this.autoPlayer.start(sleep);
};
//停止漫游
Sun.Spano.prototype.autoStopHand=function(){
this.autoPlayer.stop();
};
//设置tilt限制值
Sun.Spano.prototype.setMaxMinTiltHand=function(maxTilt,minTilt){
Sun.Constant.maxTilt=Number(maxTilt);
Sun.Constant.minTilt=Number(minTilt);
if(Sun.Constant.maxTilt>90){
Sun.Constant.maxTilt=90;
}
if(Sun.Constant.minTilt<-90){
Sun.Constant.maxTilt=-90;
}
};
//设置加载图片大小
Sun.Spano.prototype.setSceneImageSize=function(sizeVal){
Sun.Constant.setSceneImageSize=Number(sizeVal);
};
//获取雷达角度
Sun.Spano.prototype.getRadarAngle=function(){
return this.scene3d.getRadarAngle();
};
//根据雷达角度设置全景角度
Sun.Spano.prototype.setPanoFromRadar=function(angle){
this.scene3d.setPanoFromRadar(angle);
};
//获取当前panoinfo数据
Sun.Spano.prototype.getCurrentInfo=function(){
return this.scene3d.currentScene;
};
//设置鼠标拖动速度
Sun.Spano.prototype.setMousespeed=function(value){
this.scene3d.sceneMouseControl.mousespeed=Number(value);
};
//设置脚印图片
Sun.Spano.prototype.setRoadImage = function (url){
if (url == undefined) {
url = null;
}
if (url != null) {
if (url == "") {
url = null;
}
}
Sun.Constant.roadImgUrl=url;
};
//添加自定义div容器poi
Sun.Spano.prototype.addCustomPoiHand=function(dom,info){
if(!dom instanceof HTMLDivElement){
alert("添加了非'HTMLDivElement'元素");
return;
}
new Sun.CustomPoi2D(info,dom,this.scene3d);
};
/**
// 添加不规则的物体
var extrudeSettings = {
amount: 10,
steps: 10,
bevelSegments: 10,
bevelSize: 10,
bevelThickness: 10
};
var triangleShape = new THREE.Shape();
triangleShape.moveTo(  0, -50 );
triangleShape.lineTo(  -50, 50 );
triangleShape.lineTo( 50, 50 );
triangleShape.lineTo(  0, -50 );
var extrude = new THREE.Mesh(new THREE.ExtrudeGeometry(triangleShape, extrudeSettings), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
extrude.rotation.y = Math.PI / 2;
extrude.position.x = -300;
extrude.position.y = 150;
extrude.position.z = 300;
extrude.castShadow = extrude.receiveShadow = true;
this.scene.add(extrude);
*/
/**
* Created by sunjian on 2015/6/10.
*/
Sun.Scene3D = function (divdom) {
Sun.SObject.call(this);      //继承
this.divdom = divdom;
this.camera = null;
this.scene = null;
this.renderer = null;
this.isUserInteracting = false;
this.onMouseDownMouseX = 0;
this.onMouseDownMouseY = 0;
this.lon = 0;
this.onMouseDownLon = 0;
this.lat = 0;
this.onMouseDownLat = 0;
this.phi = 0;
this.theta = 0;
this.touchX = 0;
this.touchY = 0;
this.raycaster = new THREE.Raycaster();
this.world_vector = new THREE.Vector3();      //用于pt转xyz的变量
this.coord_vector = new THREE.Vector3();    //用于getcoord方法
this.currentPlaceId = null;       //当前要打开的placeid
this.currentPanoId = null;        //当前要打开的panoid
this.currentPan = null;
this.currentTilt = null;
this.currentFov = null;
this.divw = this.divdom.offsetWidth;
this.divh = this.divdom.offsetHeight;
this.currentScene = null;     //PanoInfo对象
this.downPanoInfoMan = null;      //下载panoinfo管理类
if (Detector.webgl) {
init(8, this.divdom.id, this.divw, this.divh, function () {
//LGlobal.setDebug(true); //打开调试模式，才能看到图形
LMouseEventContainer.set(LMouseEvent.MOUSE_DOWN, true);
LMouseEventContainer.set(LMouseEvent.MOUSE_UP, true);
LGlobal.stageScale = LStageScaleMode.NO_SCALE;
LGlobal.align = LStageAlign.TOP_LEFT;
}, LEvent.INIT);       //初始化Lufylegend框架
}
this.tuopuMan = new Sun.TuopuManager();       //拓扑缓存类
this.sceneMouseControl = new Sun.SceneMouseController(this);  //鼠标控件类
this.init();
this.animate();
this.waitView = new Sun.ProgressView(this);       //进度条
this.sceneEffect = new Sun.SceneEffectMan(this);  //切换效果管理类
this.devicemontion = new Sun.DeviceMontion(this); //重力感应类
this.addEventHand();
this.cube = null;
if (Detector.webgl == true) {
//使用webgl
this.cube = new Sun.Cube3D(this);     //立方体类
} else {
if (this.checkVersion() == "pc") {
//this.cube=new Sun.Cube3D(this);     //立方体类
this.cube = new Sun.CSSCube3D(this);
} else {
//使用css33d类
this.cube = new Sun.CSSCube3D(this);
}
}
//定义属性
Object.defineProperties(this, {
_pan: {
writable: true
},
pan: {
get: function () {
var rpan = (360 + ((this.lon - 180) % 360)) % 360;
return rpan;
},
set: function (newValue) {
newValue = Number(newValue);
var rpan = (360 + ((180 + newValue) % 360)) % 360;
this.lon = rpan;
}
},
_tilt: {
writable: true
},
tilt: {
get: function () {
return this.lat;
},
set: function (newValue) {
newValue = Number(newValue);
if (newValue > Sun.Constant.maxTilt) {
newValue = Sun.Constant.maxTilt;
}
if (newValue < Sun.Constant.minTilt) {
newValue = Sun.Constant.minTilt;
}
this.lat = newValue;
}
},
_fov: {
writable: true
},
fov: {
get: function () {
return this.camera.fov;
},
set: function (newValue) {
newValue = Number(newValue);
if (newValue > 120) newValue = 120;
if (newValue < 30) newValue = 30;
this.camera.fov = newValue;
this.camera.updateProjectionMatrix();
}
}
});
};
//继承SObject原型链
Sun.Scene3D.prototype=Object.create(Sun.SObject.prototype);
Sun.Scene3D.prototype.constructor=Sun.Scene3D;
//初始化必要元素
Sun.Scene3D.prototype.init = function () {
this.camera = new THREE.PerspectiveCamera(75, this.divw / this.divh, 1, 5000);
this.camera.target = new THREE.Vector3(0, 0, 0);
this.scene = new THREE.Scene();
var directionalLight = new THREE.DirectionalLight(0xffffff, 1.0, 0);
directionalLight.position.set(0, 500, 500); //设置光源向量
this.scene.add(directionalLight);
var amb = new THREE.AmbientLight(0xffffff);
amb.position.set(500, 500, 500); //设置光源向量
this.scene.add(amb);
//alert("webgl:" + Detector.webgl);
if (Detector.webgl == true) {
this.renderer = new THREE.WebGLRenderer({ "antialias": true });    //"preserveDrawingBuffer":true
//this.renderer.setPixelRatio( window.devicePixelRatio );
} else {
//使用css3渲染器
if (this.checkVersion() == "pc") {
//this.renderer=new THREE.CanvasRenderer();
this.renderer = new THREE.CSS3DRenderer();
//this.renderer.setPixelRatio( window.devicePixelRatio );
} else {
this.renderer = new THREE.CSS3DRenderer();
}
}
this.renderer.setSize(this.divw, this.divh);
this.divdom.appendChild(this.renderer.domElement);
};
//渲染
Sun.Scene3D.prototype.animate=function(){
var content=this;
content.update();
this.divw=this.divdom.offsetWidth;
this.divh=this.divdom.offsetHeight;
window.requestAFrame(function(){
content.animate();
});
};
Sun.Scene3D.prototype.update=function(){
this.lat = Math.max( - 85, Math.min( 85, this.lat ) );
this.phi = THREE.Math.degToRad( 90 - this.lat );
this.theta = THREE.Math.degToRad( this.lon );
this.camera.target.x = 500 * Math.sin( this.phi ) * Math.cos( this.theta );
this.camera.target.y = 500 * Math.cos( this.phi );
this.camera.target.z = 500 * Math.sin( this.phi ) * Math.sin( this.theta );
this.camera.lookAt( this.camera.target );
this.renderer.render( this.scene, this.camera );
};
//添加事件
Sun.Scene3D.prototype.addEventHand=function(){
var content=this;
this.sceneEffect.addEventListener(Sun.SceneEvent.SceneEffectCompleteEvent,function(str){
content.effectComplete(str);
});
};
//-----------------------------------------------------------------------------------------
//打开全景
Sun.Scene3D.prototype.showPano=function(placeid,panoid,p,t,f){
if(panoid==this.currentPanoId){
return;
}
/*var geometry = new THREE.BufferGeometry();
var indicesarr=new Uint32Array(3*2);
var positionarr=new Float32Array(3*4);
var normalarr=new Float32Array(3*4);
indicesarr[0]=0;
indicesarr[1]=2;
indicesarr[2]=1;
indicesarr[3]=2;
indicesarr[4]=1;
indicesarr[5]=3;
var defaultZ=300;
positionarr[0]=100;
positionarr[1]=100;
positionarr[2]=defaultZ;
positionarr[3]=100;
positionarr[4]=-100;
positionarr[5]=defaultZ;
positionarr[6]=-100;
positionarr[7]=100;
positionarr[8]=defaultZ;
positionarr[9]=-100;
positionarr[10]=-100;
positionarr[11]=defaultZ;
for(var i=0;i<12;i++){
normalarr[i]=0;
}
geometry.addAttribute("index", new THREE.BufferAttribute( indicesarr, 1 ) );
geometry.addAttribute("position", new THREE.BufferAttribute( positionarr, 3 ) );
geometry.addAttribute("normal", new THREE.BufferAttribute( normalarr, 3 ) );
geometry.computeBoundingSphere();
var material = new THREE.MeshBasicMaterial( {
color: 0xFF0000,side: THREE.DoubleSide
} );
var mesh = new THREE.Mesh(geometry, material);
mesh.position.y=0;
mesh.position.x=0;
mesh.position.z=0;
this.scene.add( mesh );
setInterval(function(){
//mesh.rotation.y+=0.1;
},80);*/
if(placeid==null||placeid==undefined){
placeid=this.currentPlaceId;
}
if(panoid!=undefined&&panoid!=null){
this.currentPanoId=panoid;
}
if(placeid!=undefined&&placeid!=null){
this.currentPlaceId=placeid;
}
if(p!=undefined&&p!=null){
this.currentPan=p;
}else{
this.currentPan=null;
}
if(t!=undefined&&t!=null){
this.currentTilt=t;
}else{
this.currentTilt=null;
}
if(f!=undefined&&f!=null){
this.currentFov=f;
}else{
this.currentFov=null;
}
this.dispatchEventListener(Sun.SceneEvent.SceneStartEvent,"start");
this.waitView.setValue("0%");
this.waitView.show();
if(this.currentScene!=null){
this.sceneEffect.start();
}else{
this.switchScene();
}
};
//打开新的场景
Sun.Scene3D.prototype.switchScene=function(){
var content=this;
this.currentScene=this.tuopuMan.getData(this.currentPanoId);
if(this.currentScene!=null){
//Sun.Alert.show("读取缓存");
//alert(this.currentScene.id);
this.downPanoInfoComplete(this.currentScene);
}else{
//Sun.Alert.show("重新读取");
this.downPanoInfoMan=new Sun.DownPanoInfo(this.currentPlaceId,this.currentPanoId);
this.downPanoInfoMan.addEventListener(Sun.SceneEvent.DownPanoInfoCompleteEvent,function fun(par){
content.downPanoInfoMan.removeEventListener(Sun.SceneEvent.DownPanoInfoCompleteEvent,fun);
content.downPanoInfoMan=null;
if(par.hasOwnProperty("error")){
if(par.error=="1"){
alert(par.errorInfo);
}else{
content.downPanoInfoComplete(par.data);
}
}else{
content.downPanoInfoComplete(par);
}
});
this.downPanoInfoMan.start();
}
};
//下载panoinfo完毕
Sun.Scene3D.prototype.downPanoInfoComplete=function(info){
this.currentScene=info;
this.tuopuMan.setData(this.currentScene);
var url;
if(this.currentScene.hasOwnProperty("path")){
url=Sun.Constant.disposeUrl(Sun.Constant.downIphoneImgUrl,[this.currentScene.path,this.currentPanoId,"B","2"]);
}else{
url=Sun.Constant.disposeUrl(Sun.Constant.downIphoneImgUrl,["{}",this.currentPanoId,"B","2"]);
url=Sun.Constant.replaceA(url,"/{}","",true);
}
//url="script/server/HttpProxy.aspx?url="+url;
url=Sun.Constant.getLocationUrl(url);
console.warn("预览图:",url);
var man=new Sun.DownPanoImg({url:url},true);
man.addEventListener(Sun.SceneEvent.DownPanoImgCompleteEvent,function fun(info){
man.removeEventListener(Sun.SceneEvent.DownPanoImgCompleteEvent,fun);
this.downPreviewComplete(info);
}.bind(this));
man.start();
};
//下载预览图完毕
Sun.Scene3D.prototype.downPreviewComplete=function(info){
var man=new Sun.DownCanvasDataImg(info.img);
man.addEventListener(Sun.SceneEvent.DownCanvasImgCompleteEvent,function fun(info){
this.canvasToImgComplete(info);
if(info.status=="success"){
man.removeEventListener(Sun.SceneEvent.DownCanvasImgCompleteEvent,fun);
this.dispatchEventListener(Sun.SceneEvent.SceneCompleteEvent);       //预览图下载完毕
this.downAllPieces();
}
}.bind(this));
man.start();
};
//canvas转img
Sun.Scene3D.prototype.canvasToImgComplete=function(info){
this.cube.setPrevice(info.img,info.index);  //webgl-img css3-url
};
//下载所有图片
Sun.Scene3D.prototype.downAllPieces=function(){
if(this.currentPan!=null){
this.pan=this.currentPan;
}else{
this.pan=this.currentScene.dp;
}
if(this.currentTilt!=null){
this.tilt=this.currentTilt;
}else{
this.tilt=this.currentScene.dt;
}
if(this.currentFov!=null){
this.fov=this.currentFov;
}else{
this.fov=this.currentScene.df;
}
var json=JSON.stringify({target:"Scene3D",type:"SceneEvent",panoid:this.currentPanoId,placeid:this.currentPlaceId,pan:this.pan,tilt:this.tilt,fov:this.fov});
//预览图下载完毕,用于外部组件的监听处理
this.dispatchEventListener(Sun.SceneEvent.SceneCompleteByOuterEvent,json);
this.createSceneContext();       //生成箭头
this.waitView.setValue("100%");
this.waitView.hide();
var content=this;
var arr=this.getpicleArr();
var downpanoimg=null;
arr.forEach(function(e){
downpanoimg=new Sun.DownPanoImg(e);
downpanoimg.addEventListener(Sun.SceneEvent.DownPanoImgCompleteEvent,function fun(info){
downpanoimg.removeEventListener(Sun.SceneEvent.DownPanoImgCompleteEvent,fun);
content.downImageHand(info);
if(info.status=="success"){
content.sceneLoadComplete();
}
});
downpanoimg.start();
});
};
//过渡效果完成
Sun.Scene3D.prototype.effectComplete=function(str){
this.switchScene();
};
//下载单张图片完毕
Sun.Scene3D.prototype.downImageHand=function(info){
if(info.info.panoid==this.currentScene.id){
this.cube.setScene(info.img,info.info.index);
}
};
//所有分块图下载完成
Sun.Scene3D.prototype.sceneLoadComplete=function(){
//alert("所有图片下载完成");
};
//创建方向箭头 下载预览图后所调用
Sun.Scene3D.prototype.createSceneContext=function(){
this.removeNullEvent();     //移除无用事件
var arrowArr=this.tuopuMan.get3DData(this.currentScene.id);
if(arrowArr.length>0){
new Sun.Arrow3DContain(this,arrowArr);
}
this.downRoadFlat();
this.downPoi();
//new Sun.ImgPoi3D(this);
//new Sun.DrawCanvas(this,new Object());
/*var squareGeometry = new THREE.Geometry();
squareGeometry.vertices.push(new THREE.Vector3(-3.0,  1.0, 0));
squareGeometry.vertices.push(new THREE.Vector3( 1.0,  1.0, 0));
squareGeometry.vertices.push(new THREE.Vector3( 1.0, -1.0, 0));
squareGeometry.vertices.push(new THREE.Vector3(-1.0, -1.0, 0));
squareGeometry.faces.push(new THREE.Face3(0, 1, 2));
squareGeometry.faces.push(new THREE.Face3(0, 2, 3));
var squareMaterial = new THREE.MeshBasicMaterial({
color:0xFF0000,
side:THREE.DoubleSide
});
var cav=THREE.ImageUtils.loadTexture("map.jpg");
var material = new THREE.MeshBasicMaterial({ map: cav,side:THREE.DoubleSide,overdraw: true });
var squareMesh = new THREE.Mesh(squareGeometry, squareMaterial);
squareMesh.position.set(0, 0, -10);
this.scene.add(squareMesh);*/
};
//下载脚印
Sun.Scene3D.prototype.downRoadFlat=function(){
var url=Sun.Constant.disposeUrl(Sun.Constant.downRoadFlat2DUrl,[this.currentPanoId]);
console.warn("脚印:",url);
url=Sun.Constant.getLocationUrl(url);
var roadman=new Sun.DownDataInfo(url);
roadman.addEventListener(Sun.SceneEvent.DownDataInfoCompleteEvent,function(arr){
roadman.removeEventListener(Sun.SceneEvent.DownDataInfoCompleteEvent,arguments.callee);
arr.forEach(function(e){
new Sun.RoadFlat2D(this,e);
}.bind(this));
}.bind(this));
roadman.start();
};
//下载poi
Sun.Scene3D.prototype.downPoi=function(){
var url=Sun.Constant.disposeUrl(Sun.Constant.downPoi2DUrl,[this.currentPanoId]);
console.warn("poi:",url);
url=Sun.Constant.getLocationUrl(url);
var poiman=new Sun.DownDataInfo(url);
poiman.addEventListener(Sun.SceneEvent.DownDataInfoCompleteEvent,function(arr){
poiman.removeEventListener(Sun.SceneEvent.DownDataInfoCompleteEvent,arguments.callee);
arr.forEach(function(e){
if(e.tb_poitype_id=="1"){
new Sun.Poi2D(this,e);
}
}.bind(this));
}.bind(this));
poiman.start();
};
//-------------------------------------------------------------------------------------------------------
//打开重力感应
Sun.Scene3D.prototype.openDeviceor=function(){
this.devicemontion.openDeviceor();
};
//获取应该下载的图片
Sun.Scene3D.prototype.getpicleArr=function(){
var arr=new Array();
if(this.cube.mode=="N"){
this.createDownInfo(arr,0,5);
Sun.DownPanoImg.currentCount=0;
Sun.DownPanoImg.downCount=6;
}else if(this.cube.mode=="F"){
this.createDownInfo(arr,2,3);
this.createDownInfo(arr,14,15);
this.createDownInfo(arr,4,5);
this.createDownInfo(arr,16,17);
this.createDownInfo(arr,6,7);
this.createDownInfo(arr,18,19);
this.createDownInfo(arr,0,1);
this.createDownInfo(arr,12,13);
this.createDownInfo(arr,8,9);
this.createDownInfo(arr,20,21);
this.createDownInfo(arr,10,11);
this.createDownInfo(arr,22,23);
Sun.DownPanoImg.currentCount=0;
Sun.DownPanoImg.downCount=24;
}else if(this.cube.mode=="E"){
this.createDownInfo(arr,4,7);
this.createDownInfo(arr,28,31);
this.createDownInfo(arr,52,55);
this.createDownInfo(arr,76,79);
this.createDownInfo(arr,8,11);
this.createDownInfo(arr,32,35);
this.createDownInfo(arr,56,59);
this.createDownInfo(arr,80,83);
this.createDownInfo(arr,12,15);
this.createDownInfo(arr,36,39);
this.createDownInfo(arr,60,63);
this.createDownInfo(arr,84,87);
this.createDownInfo(arr,0,3);
this.createDownInfo(arr,24,27);
this.createDownInfo(arr,48,51);
this.createDownInfo(arr,72,75);
this.createDownInfo(arr,16,19);
this.createDownInfo(arr,40,43);
this.createDownInfo(arr,64,67);
this.createDownInfo(arr,88,91);
this.createDownInfo(arr,20,23);
this.createDownInfo(arr,44,47);
this.createDownInfo(arr,68,71);
this.createDownInfo(arr,92,95);
Sun.DownPanoImg.currentCount=0;
Sun.DownPanoImg.downCount=96;
}
return arr;
};
//生成实体
Sun.Scene3D.prototype.createDownInfo=function(arr,start,end){
start++;
end++;
for(var i=start;i<=end;i++){
var info=new Sun.PanoImgInfo();
info.index=i+"";
info.panoid=this.currentScene.id;
info.placeid=this.currentPlaceId;
info.imgtype=this.cube.mode;
if(this.currentScene.hasOwnProperty("path")){
//info.url=Sun.Constant.disposeUrl(Sun.Constant.downIphoneImgUrl,[this.currentScene.path,this.currentPanoId,"1024",i+""]);
info.url=Sun.Constant.disposeUrl(Sun.Constant.downIphoneImgUrl,[this.currentScene.path,this.currentPanoId,Sun.Constant.setSceneImageSize ,i+""]);
}else{
//info.url=Sun.Constant.disposeUrl(Sun.Constant.downIphoneImgUrl,["{}",this.currentPanoId,"1024",i+""]);
info.url=Sun.Constant.disposeUrl(Sun.Constant.downIphoneImgUrl,["{}",this.currentPanoId,Sun.Constant.setSceneImageSize ,i+""]);
info.url=Sun.Constant.replaceA(info.url,"/{}","",true);
}
info.url=Sun.Constant.getLocationUrl(info.url,true);
//info.url="cubic/pano0001/E/"+i+".jpg";
console.warn("url:",info.url);
arr.push(info);
}
};
//得到雷达的角度
Sun.Scene3D.prototype.getRadarAngle = function (pvalue) {

var angle = 0;
try {
if (pvalue != undefined) {
angle = (360 - pvalue + 90) % 360;
angle = (angle + 270) % 360;
} else {
angle = (-this.currentScene.nd + this.pan - 90 + 3600) % 360;
}
} catch (e) {
angle = -1;
console.log("e:"+e)
}
return angle;
};
//根据雷达角度设置pan值
Sun.Scene3D.prototype.setPanoFromRadar = function (angle) {
if(this.currentScene!=null){
this.pan=(angle + this.currentScene.nd + 90) % 360;
}
};
//pt值转屏幕坐标
Sun.Scene3D.prototype.calcHSPos=function(p,t){
this.coord_vector=this.getCoord(p,t,150);
this.world_vector=this.coord_vector.project(this.camera);
var halfWidth = this.renderer.domElement.clientWidth / 2;
var halfHeight = this.renderer.domElement.clientHeight / 2;
var x = this.world_vector.x * halfWidth + halfWidth;
var y = -this.world_vector.y * halfHeight + halfHeight;
return {x:x,y:y,z:this.world_vector.z};
};
//pt值转xyz
Sun.Scene3D.prototype.getCoord=function(p,t,r){
p=p+180;
//t=0-t+3.5;
t=-t+3.5;
var pval = THREE.Math.degToRad(90 - t);
var thetaval = THREE.Math.degToRad(p - 180);
this.coord_vector=this.coord_vector.clone();
this.coord_vector.x = 300 * Math.sin(pval) * Math.cos(thetaval);
this.coord_vector.y = 300 * Math.cos(pval);
this.coord_vector.z = 300 * Math.sin(pval) * Math.sin(thetaval);
return this.coord_vector;
};
//屏幕坐标转三维坐标.Y轴固定
Sun.Scene3D.prototype.getScreenTo3DPosition=function($x,$y,d){
return null;
};
/**
* Created by sunjian on 2015/9/23.
*/
Sun.AutoPlayer=function(pscene){
Sun.SObject.call(this);
this.pscene=pscene;
this.isRun = false; //是否已运行定时器
this.sleep = 0.2;
this.initPan=NaN;
this.tweenid=null;      //动画id
this.pscene.addEventListener(Sun.SceneEvent.SceneMouseMoveEvent,function(){
window.cancelAFrame(this.tweenid);
}.bind(this));
};
Sun.AutoPlayer.prototype=Object.create(Sun.SObject.prototype);
Sun.AutoPlayer.prototype.constructor=Sun.AutoPlayer;
//开始漫游
Sun.AutoPlayer.prototype.start=function(sleep){
this.sleep=sleep;
this.isRun = false;
this.initPan=this.pscene.pan;
this.run();
};
//停止漫游
Sun.AutoPlayer.prototype.stop=function(){
window.cancelAFrame(this.tweenid);
}
Sun.AutoPlayer.prototype.run=function(){
this.pscene.pan+=this.sleep;
var content=this;
var t = this.pscene.tilt;
if (Math.abs(parseInt(t)) != 0) {
if (t > 0) {
t = t - content.sleep;
this.pscene.tilt=t;
} else {
t = t + content.sleep;
this.pscene.tilt=t;
}
}
if (this.initPan != this.pscene.pan) {
if (this.isRun == true) {
var temp = Math.abs(Math.abs(this.initPan) - Math.abs(this.pscene.pan));
if (temp > 0 && temp <= 0.5) {
window.cancelAFrame(this.tweenid);
this.pscene.dispatchEventListener(Sun.SceneEvent.autoPlayCompleteEvent,null);
return;
}
}else{
this.isRun=true;
}
}
this.tweenid=window.requestAFrame(function(){
content.run();
});
};
